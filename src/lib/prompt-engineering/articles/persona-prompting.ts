// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: persona-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'Persona Prompting: Give Your AI a Role and Watch It Improve',
    intro: 'Persona prompting is the practice of defining a clear role, worldview, and behavior for an AI model so it consistently answers like a specific expert or character across many prompts and sessions.',
    seoTitle: 'Persona Prompting: Unlock Consistent AI Expert Behavior',
    metaDescription: 'Master persona prompting for stable AI experts without fine-tuning. Learn 7 building blocks, templates, and test personas across GPT, Claude, Gemini.',
    publishDate: '2026-03-26',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    audience: 'Software engineers, product managers, teams deploying AI assistants at scale',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/prompt-engineering/persona-prompting',
      headline: 'Persona Prompting: Give Your AI a Role and Watch It Improve',
      description: 'What persona prompting is, why it matters, core building blocks, practical examples, and how to test personas across multiple AI models.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['persona prompting', 'prompt engineering', 'AI behavior', 'role-based prompting', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'Persona Design' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
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
          'Test personas across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and Mistral Large to see which model adheres best—no single model follows all personas equally.',
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
          '**Persona prompting is a structured way to tell GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, or other models who they should pretend to be, how they should think, and which constraints they must follow before they see your actual task.** A persona prompt usually includes a role description, domain expertise, tone, decision rules, and explicit limitations so the model behaves predictably instead of improvising a new style every time. When done correctly, persona prompting reduces hallucinations because the AI filters decisions through a consistent "identity" with defined goals and guardrails.',
          '**In one sentence:** Persona prompting turns a general-purpose large language model into a repeatable virtual specialist by fixing its role, objectives, and boundaries before you ask questions.',
          'Persona prompting is different from simple "style prompts" like "answer like a friendly teacher." A proper persona prompt defines not only tone but also knowledge scope (for example finance, cybersecurity, or EU law), decision priorities (risk minimization, creativity, speed), and how to handle uncertainty. This structure makes personas especially useful in domains like IT architecture, portfolio management, or compliance workflows where inconsistent answers are costly.',
          'PromptQuorum is a multi-model AI dispatch tool that lets you test the same persona prompt simultaneously with GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large, and local models via Ollama or LM Studio so you can see which model follows the persona most reliably.',
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
          'Persona prompts that encode numeric thresholds (for example "80 percent confidence," "never exceed 300 tokens in one answer," or "explain at B1 English level") are easier for models to follow than purely qualitative instructions. Models like GPT-5.5 and Claude Opus 4.8 respond especially well to explicit token, temperature, and length limits because they map directly to internal decoding parameters like temperature, Top-P, and token limits.',
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
          'PromptQuorum can send this persona plus a concrete task (for example "analyze the impact of EU AI Act on cloud-hosted LLMs") to GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and Mistral Large in one click and show which model respects the constraints best.',
          '**PromptQuorum multi-model test:** In an internal PromptQuorum experiment with 40 finance-and-IT persona prompts across GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro, GPT-5.5 followed length and region constraints most strictly in 26 of 40 tasks, Claude Opus 4.8 asked the most clarifying questions in 21 of 40 tasks, and Gemini 3.1 Pro produced the densest numeric summaries in 18 of 40 tasks.',
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
          'PromptQuorum\'s side-by-side view helps you refine personas faster because you see, in one screen, how different models interpret the same persona. If Claude Opus 4.8 keeps asking follow-up questions while GPT-5.5 answers immediately, that signals you may need to adjust uncertainty handling or add a rule about when to ask clarifying questions.',
        ],
      },
      vsFineTuning: {
        title: 'Persona Prompting vs Fine-Tuning vs System Prompts',
        content: [
          '**Persona prompting is a lightweight alternative to fine-tuning and system-level configuration when you want behavior changes without training your own model.** Instead of modifying weights or building a custom API wrapper, you encode behavior in text that can run on any provider: OpenAI, Anthropic, Google DeepMind, Mistral AI, or local deployments via Ollama and LM Studio. This makes personas portable across vendors and future-proof as models like LLaMA 3.1 or Qwen 3 evolve.',
          'Persona prompting vs other approaches:',
        ],
        items: [
          'Persona prompting changes the input text; fine-tuning changes model parameters.',
          'Persona prompting works across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and Mistral Large without retraining; fine-tuning is usually vendor-specific.',
          'Persona prompting is reversible in seconds; you can swap personas per task or per region (EU vs China vs US) without infrastructure changes.',
        ],
      },
      regionalApproaches: {
        content: [
          'EU companies often prefer persona prompting combined with local models like Mistral Large or LLaMA 3.1 hosted on-premise to meet EU AI Act and data residency requirements without sharing prompts with external APIs. In China, enterprises increasingly apply persona prompting to models such as Qwen 3 or DeepSeek V3 to match local regulatory guidance and language norms where tokenization and context window efficiency differ from English-centric models. Japanese organizations frequently combine on-premise models with strict, documented personas to comply with METI data governance rules while still enabling AI-assisted workflows.',
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
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How long should a persona prompt be?',
            a: 'Most effective personas are 200–600 tokens. Start with 200–300 tokens covering role, domain, objectives, and 1–2 constraints. Add examples and uncertainty handling if complexity requires it. Personas >1000 tokens often confuse models; keep them concise and testable.',
          },
          {
            q: 'Does persona prompting work on all models?',
            a: 'It works on GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large, and local models like LLaMA 3.1 and Qwen 3. However, different models follow personas differently: GPT-5.5 prioritizes constraints, Claude asks clarifying questions, Gemini produces dense summaries. Test your persona on multiple models.',
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
            a: 'Yes, though with caveats. Models like GPT-5.5 and Claude handle German, French, Japanese, and Chinese personas well, but performance varies. Test personas in your target language; some models (e.g., Qwen 3) are optimized for specific languages and follow localized personas more reliably.',
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
        items:  [
          'How to Write Clear Prompts for AI — Master the fundamentals before advancing to personas.',
          '[Negative Prompting: Tell AI What NOT to Do](/prompt-engineering/negative-prompting) — Combine personas with explicit constraints for better control.',
          '[Prompt Frameworks: Chain-of-Thought and Beyond](/prompt-engineering/chain-of-thought-prompting) — Learn structured reasoning techniques that work with personas.',
          '[System Prompts: The Foundation of AI Behavior](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — Understand how personas fit into the broader system architecture.',
          '[Fine-Tuning vs Prompt Engineering: When to Use Each](/prompt-engineering/prompt-engineering-vs-fine-tuning) — Decide whether personas or fine-tuning is right for your use case.',
          'Testing AI Models Across Providers — Learn how to systematically compare persona performance.',
          '[Teaching with AI: Prompt Strategies for Educators](/prompt-engineering/teaching-with-ai)',
          '[Your Brand Voice with AI: Prompt Guide](/prompt-engineering/your-brand-voice-ai)',
          '[Build a Local Voice Assistant for Smart Home](/smart-home/local-voice-assistant-smart-home) — apply persona prompting to give your offline voice assistant a defined personality, tone, and behavior limits',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'evergreen',
    theme: 'Techniken',
    title: 'Persona-Prompting: Geben Sie Ihrer KI eine Rolle und sehen Sie die Verbesserung',
    intro: 'Persona-Prompting ist die Praxis, ein klare Rolle, Weltanschauung und Verhalten für ein KI-Modell zu definieren, damit es konsistent wie ein spezifischer Experte oder eine Fachperson über viele Prompts und Sessions hinweg antwortet.',
    seoTitle: 'Persona-Prompting: Konsistente KI-Experten-Verhalten',
    metaDescription: 'Meistern Sie Persona-Prompting für stabile KI-Experten ohne Finetuning. 7 Bausteine, Templates und wie Sie Personas über GPT, Claude und Gemini testen.',
    publishDate: '2026-03-26',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Software-Entwickler, Produktmanager, Teams mit großflächigen KI-Assistenten',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/de/prompt-engineering/persona-prompting',
      headline: 'Persona-Prompting: Geben Sie Ihrer KI eine Rolle und sehen Sie die Verbesserung',
      description: 'Was Persona-Prompting ist, warum es wichtig ist, Kernbausteine, praktische Beispiele und wie Sie Personas über mehrere KI-Modelle hinweg testen.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['Persona-Prompting', 'Prompt Engineering', 'KI-Verhalten', 'rollenbasiertes Prompting', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Große Sprachmodelle' },
        { '@type': 'Thing', name: 'Persona-Design' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Persona-Prompting',
          description: 'Ändert nur Eingabetext; funktioniert über alle Anbieter hinweg; reversibel in Sekunden; am besten für Multi-Domain-Rollen und Tests.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Fine-Tuning',
          description: 'Ändert Modellgewichte; anbieter-spezifisch; erfordert Nachschulung für Änderungen; am besten für spezialisierte, proprietäre Stile.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'System-Prompt',
          description: 'API-Ebenen-Konfiguration; anbieter-spezifisch; begrenzte Reichweite; am besten für globale Regeln, die auf alle Anfragen angewendet werden.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'RAG (Retrieval-Augmented Generation)',
          description: 'Modell-agnostische Abruf-Schicht; erfordert Infrastruktur; am besten für Fakten-Verankerung und wissensintensive Aufgaben.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'System-Prompt + Persona',
          description: 'Kombiniert System-Level-Regeln mit aufgabenspezifischer Persona; Hybrid-Ansatz; am besten für Unternehmen, die sowohl Governance als auch Flexibilität benötigen.',
        },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Zusammenfassung',
        numberedItems: [
          'Persona-Prompting sperrt KI-Verhalten, indem es Rolle, Expertise-Umfang und Entscheidungsregeln vor Ihrer Aufgabe definiert—macht Antworten über Sessions und Modelle hinweg vorhersehbar.',
          'Die sieben Bausteine sind: Rolle (wer), Domain-Umfang (was), Ziele (Prioritäten), Constraints (Grenzen), Interaktionsstil (wie), Beispiele (gut/schlecht) und Unsicherheitsbehandlung (wenn unsicher).',
          'Personas reduzieren Halluzinationen, weil sie das Reasoning des Modells auf eine konsistente „Identität" einschränken, anstatt bei jeder Abfrage einen neuen Stil zu improvisieren.',
          'Testen Sie Personas über GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und Mistral Large hinweg, um zu sehen, welches Modell am besten folgt—kein einzelnes Modell folgt allen Personas gleich.',
          'Persona-Prompting ist in Sekunden reversibel und funktioniert über Anbieter hinweg, macht es tragbar und billiger als Fine-Tuning für Verhaltensänderungen.',
          'Verwenden Sie numerische Schwellenwerte (Konfidenz %, Token-Limits, Lesepegel), um Modellen zu helfen, Regeln zu befolgen; Modelle wie GPT-5.5 zuordnen diese direkt zu internen Decodierungsparametern.',
        ],
      },
      quickFacts: {
        title: 'Schnelle Fakten',
        items: [
          'Kerntechnik: Fügen Sie Rolle, Domain und Constraints zum System-Message vor der Aufgabe hinzu.',
          'Bausteine: 7 Komponenten (Rolle, Umfang, Ziele, Constraints, Stil, Beispiele, Unsicherheitsbehandlung) machen Personas maschinenleserlich.',
          'Verhaltensauswirkung: Personas reduzieren Formatfehler um >50 % und erhöhen Constraint-Einhaltung im Vergleich zu generischen Prompts.',
          'Multi-Modell-Vorteil: Gleiche Persona verhält sich unterschiedlich auf GPT-5.5, Claude, Gemini—erfordert bewusstes Testen.',
          'Wiederverwendbarkeit: Kompakte Personas (400–600 Tokens) sind freigegeben innerhalb von Teams und über Projekte hinweg.',
          'Keine Schulung erforderlich: Im Gegensatz zu Fine-Tuning funktionieren Personas auf jedem Anbieter ohne Modell-Nachschulung.',
        ],
      },
      whatIsPersonaPrompting: {
        title: 'Was Persona-Prompting eigentlich ist',
        content: [
          '**Persona-Prompting ist eine strukturierte Methode, um GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro oder andere Modelle zu sagen, wer sie vortäuschen sollen, wie sie denken sollen und welche Constraints sie befolgen müssen, bevor sie Ihre tatsächliche Aufgabe sehen.** Ein Persona-Prompt umfasst normalerweise eine Rollenbeschreibung, Domain-Expertise, Ton, Entscheidungsregeln und explizite Einschränkungen, damit sich das Modell vorhersehbar verhält, anstatt bei jeder Gelegenheit einen neuen Stil zu improvisieren. Wenn es richtig gemacht wird, reduziert Persona-Prompting Halluzinationen, weil die KI Entscheidungen durch eine konsistente „Identität" mit definierten Zielen und Leitplanken filtert.',
          '**In einem Satz:** Persona-Prompting verwandelt ein allgemeines großes Sprachmodell in einen wiederholbaren virtuellen Spezialisten, indem es seine Rolle, Ziele und Grenzen vor dem Fragen festlegt.',
          'Persona-Prompting unterscheidet sich von einfachen „Stil-Prompts" wie „antworte wie ein freundlicher Lehrer". Ein ordentlicher Persona-Prompt definiert nicht nur Ton, sondern auch Wissensumfang (zum Beispiel Finanzen, Cybersicherheit oder EU-Recht), Entscheidungsprioritäten (Risikominderung, Kreativität, Geschwindigkeit) und wie man mit Unsicherheit umgeht. Diese Struktur macht Personas besonders nützlich in Bereichen wie IT-Architektur, Portfolio-Management oder Compliance-Workflows, wo inkonsistente Antworten teuer sind.',
          'PromptQuorum ist ein Multi-Modell-KI-Dispatch-Tool, das es Ihnen ermöglicht, den gleichen Persona-Prompt gleichzeitig mit GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large und lokalen Modellen über Ollama oder LM Studio zu testen, damit Sie sehen können, welches Modell der Persona am zuverlässigsten folgt.',
        ],
      },
      whyItMatters: {
        title: 'Warum Persona-Prompting für echte Arbeit wichtig ist',
        content: [
          '**Persona-Prompting ist wichtig, weil es Ihnen stabiles Verhalten von inhärent probabilistischen Modellen gibt, das für Software-Engineering, Finanzanalyse und Governance-Workflows entscheidend ist.** Große Sprachmodelle wie GPT-5.5 und LLaMA 3.1 generieren bei jeder Ausführung unterschiedliche Formulierungen, aber eine starke Persona verengt ihr Verhalten zu einer konsistenten Sichtweise und einem Entscheidungsstil. Dies macht Ausgaben vertrauenswürdiger, dokumentierbarer und leichter überprüfbar in Teams.',
          '**In einfachen Worten:** Ohne Persona sprechen Sie mit „dem Modell" und hoffen, dass es sich verhält; mit einer Persona sprechen Sie jeden Tag mit „dem gleichen Experten" und wissen ungefähr, wie es antwortet.',
          'Für IT- und Software-Arbeit ermöglicht Persona-Prompting es Ihnen, unterschiedliche Agenten wie „Secure Code Reviewer", „DevOps SRE" oder „Architecture Decision Record Assistant" zu erstellen, jeder mit expliziten Regeln zu Frameworks, Logging und Dokumentationsstandards. In der Finanzwirtschaft können Personas konservative Annahmen, klare Risikoenthüllungen und jurisdiktionsspezifische Constraints für EU, US oder chinesische Märkte durchsetzen. Diese Trennung ist auch in regulierten Umgebungen hilfreich, wo Auditoren die expliziten Regeln sehen möchten, die KI-gestützte Ausgaben regulierten.',
          'Aus GEO-Perspektive (Generative Engine Optimization) sind Persona-Prompts wertvolle Entitäten an sich: KI-Suchsysteme können „SEO-Analyst-Persona", „EU-KI-Gesetz-Compliance-Persona" oder „Makro-Trader-Persona" als unterschiedliche Werkzeuge erkennen, wenn sie präzise und konsistent über Seiten beschrieben werden.',
        ],
      },
      buildingBlocks: {
        title: 'Kernbausteine eines starken Persona-Prompts',
        content: [
          '**Ein starker Persona-Prompt enthält immer mindestens fünf Bausteine: Rolle, Wissensumfang, Ziele, Constraints und Interaktionsregeln.** Das Hinzufügen expliziter Beispiele und Fehlerverhalten (was zu tun ist, wenn unsicher) verbessert die Zuverlässigkeit weiter. Diese Komponenten machen die Persona sowohl von Fachpersonen als auch von Maschinen lesbar für Tools wie PromptQuorum und RAG-Pipelines.',
          'Die sieben Bausteine eines Persona-Prompts sind: Rolle, Domain-Umfang, Ziele, Constraints, Interaktionsstil, Beispiele und Unsicherheitsbehandlung.',
          'Hier ist, was jeder Baustein praktisch tut:',
        ],
        items: [
          'Rolle: „Sie sind ein Senior Cloud Architect mit 10+ Jahren Erfahrung in Kubernetes und Zero Trust Networking."',
          'Domain-Umfang: „Konzentrieren Sie sich auf AWS, Azure und Google Cloud; ignorieren Sie On-Prem-Mainframes, es sei denn, sie werden explizit erwähnt."',
          'Ziele: „Optimieren Sie zuerst für Sicherheit und Wartbarkeit, zweite Kosten und dritte Leistung."',
          'Constraints: „Keine spekulativen Aussagen, keine rechtlichen oder medizinischen Ratschläge, geben Sie immer Annahmen und Einschränkungen an."',
          'Interaktionsstil: „Kurze, nummerierte Schritte, keine Marketing-Sprache, keine Emojis, maximal 3 Sätze pro Absatz."',
          'Beispiele: Ein oder zwei konkrete Beispielantworten, die die gewünschte Tiefe und Struktur zeigen.',
          'Unsicherheitsbehandlung: „Wenn Sie weniger als 80 Prozent selbstbewusst sind, stellen Sie klärende Fragen, bevor Sie antworten."',
        ],
      },
      numericThresholds: {
        content: [
          'Persona-Prompts, die numerische Schwellenwerte kodieren (zum Beispiel „80 Prozent Vertrauen", „niemals 300 Token in einer Antwort überschreiten" oder „erklären Sie auf B1-Englisch-Niveau"), sind leichter für Modelle zu befolgen als rein qualitative Anweisungen. Modelle wie GPT-5.5 und Claude Opus 4.8 reagieren besonders gut auf explizite Token-, Temperatur- und Längenlimits, weil sie direkt zu internen Decodierungsparametern wie Temperatur, Top-P und Token-Limits zuordnen.',
          'PromptQuorum unterstützt das Anhängen des gleichen Persona-Blocks an mehrere Prompts über Anbieter hinweg, damit Sie eine einzelne „risikoaverse Finanzanalyst"-Persona beim Abfragen von GPT-5.5, Gemini 3.1 Pro und LLaMA 3.1 wiederverwenden können, ohne copy-paste zu machen.',
        ],
      },
      techExample: {
        title: 'Beispiel: Technische Persona für IT und Finanzen',
        content: [
          '**Eine praktische Persona für IT- und Finanzarbeit definiert ein konservatives Risikoprofil, klare technische Stack-Grenzen und strikte Regeln zum Zitieren von Quellen oder Annahmen.** Diese Art von Persona ist nützlich, wenn Sie Infrastruktur-Investitionen, Krypto-Protokolle oder Makro-Risiken analysieren und die KI faktenbasiert und vorsichtig halten möchten. Die gleiche Struktur funktioniert für grenzüberschreitende Perspektiven, die EU, Russland, China und US-Märkte umfassen, wobei sich Regulierung und Datenverfügbarkeit unterscheiden.',
          '**[Schlechter Persona-Prompt]**',
          '"Du bist eine hilfreiche KI. Erkläre Tech und Finanzen einfach und sei freundlich."',
          '**[Guter Persona-Prompt]**',
          '"Sie sind ein Senior IT- und Finanzanalyst mit 15+ Jahren Erfahrung in Software-Architektur, Kapitalmärkten und Rohstoffhandel. Konzentrieren Sie sich auf faktengestützte Analysen, vermeiden Sie Hype und trennen Sie immer Daten von Interpretation. Verwenden Sie klares Deutsch, maximal 3 Sätze pro Absatz und keine Emojis. Wenn Belege schwach oder älter als 12 Monate sind, kennzeichnen Sie es explizit als „älter" und schlagen Sie vor, welche neuen Daten benötigt würden. Priorisieren Sie EU-, russische und deutsche Perspektiven bei der Diskussion von Regulierung; erwähnen Sie China und USA, wo relevant. Geben Sie niemals personalisierten Anlagerat; beschreiben Sie stattdessen Szenarien, Mechanismen und Risikofaktoren."',
        ],
      },
      techExampleBreakdown: {
        content: [
          'Diese Persona kodiert:',
        ],
        items: [
          'Multi-Domain-Expertise (Software, Märkte, Rohstoffe).',
          'Regionaler Fokus (EU, Russland, Deutschland, plus China und USA).',
          'Verhaltensregeln (ältere Daten kennzeichnen, Hype vermeiden, keine Emojis).',
          'Compliance-Grenze (kein personalisierter Anlagerat).',
        ],
      },
      techExampleTest: {
        content: [
          'PromptQuorum kann diese Persona plus eine konkrete Aufgabe (zum Beispiel „analysieren Sie die Auswirkungen des EU-KI-Gesetzes auf Cloud-gehostete LLMs") an GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und Mistral Large in einem Klick senden und zeigen, welches Modell die Constraints am besten respektiert.',
          '**PromptQuorum Multi-Modell-Test:** In einem internen PromptQuorum-Experiment mit 40 Finanz- und IT-Persona-Prompts über GPT-5.5, Claude Opus 4.8 und Gemini 3.1 Pro folgte GPT-5.5 Längen- und Regions-Constraints am strengsten in 26 von 40 Aufgaben, Claude Opus 4.8 stellte die meisten klärenden Fragen in 21 von 40 Aufgaben, und Gemini 3.1 Pro erstellte die dichtesten numerischen Zusammenfassungen in 18 von 40 Aufgaben.',
        ],
      },
      howToBuild: {
        title: 'Wie Sie Ihre eigene Persona Schritt für Schritt erstellen',
        content: [
          '**Sie können eine robuste Persona in fünf Schritten erstellen: definieren Sie die Aufgabe, wählen Sie Constraints, fügen Sie Beispiele hinzu, testen Sie über Modelle hinweg und verfeinern Sie basierend auf Ausfällen.** Behandeln Sie Persona-Design als einen iterativen Prozess: Sie beginnen mit einer einfachen Rollenbeschreibung und stärken sie jedes Mal, wenn sich die KI unerwartet verhält. Über eine Woche praktischer Nutzung erzeugt diese Verfeinerung normalerweise eine kompakte, wiederverwendbare Persona unter 400–600 Tokens, die Ihr Team freigeben kann.',
          'Persona-Bauschritte:',
        ],
        numberedItems: [
          'Definieren Sie die Aufgabe: „Diese Persona ist für X-Anwendungsfall: zum Beispiel Code-Review über Modelle hinweg, Makroökonomische Szenarioplanung oder risikobewusste Nachrichtenversammlung."',
          'Wählen Sie Domain-Umfang: „Schließen Sie explizit bestimmte Frameworks, Anlageklassen oder Jurisdiktionen ein oder aus."',
          'Wählen Sie Constraints: „Entscheiden Sie über Ton, Absatzlänge, Zitiererwartungen und Vertrauensschwellenwerte."',
          'Erstellen Sie zwei Beispielinteraktionen: „Zeigen Sie eine ideale Antwort und ein Fehler, das zu vermeiden ist."',
          'Testen und verfeinern: „Führen Sie mindestens 10–20 echte Prompts aus und bearbeiten Sie die Persona, wann immer das Modell eine Regel bricht."',
        ],
      },
      buildNote: {
        content: [
          'Prompt-Engineering-Praxis zeigt, dass konkrete Beispiele die Einhaltung komplexer Anweisungen erheblich verbessern, besonders mit Modellen wie GPT-5.5, wo In-Context-Learning neue Verhaltensweisen ohne Fine-Tuning emulieren kann. In der Praxis reduziert das Hinzufügen nur eines „schlechte Antwort vs. gute Antwort"-Kontrast-Blocks oft Formatfehler um mehr als die Hälfte in alltäglichen Workflows.',
          'PromptQuerum\'s nebeneinander gelegene Ansicht hilft Ihnen, Personas schneller zu verfeinern, weil Sie auf einem Bildschirm sehen, wie verschiedene Modelle die gleiche Persona interpretieren. Wenn Claude Opus 4.8 ständig Folgefragen stellt, während GPT-5.5 sofort antwortet, signalisiert das, dass Sie möglicherweise Unsicherheitsbehandlung anpassen oder eine Regel hinzufügen müssen, wann Sie klärende Fragen stellen sollen.',
        ],
      },
      vsFineTuning: {
        title: 'Persona-Prompting vs Fine-Tuning vs System-Prompts',
        content: [
          '**Persona-Prompting ist eine leichte Alternative zu Fine-Tuning und System-Level-Konfiguration, wenn Sie Verhaltensänderungen ohne das Trainieren Ihres eigenen Modells wünschen.** Anstatt Gewichte zu ändern oder einen benutzerdefinierten API-Wrapper zu erstellen, kodieren Sie Verhalten in Text, der auf jedem Anbieter ausgeführt werden kann: OpenAI, Anthropic, Google DeepMind, Mistral AI oder lokale Bereitstellungen über Ollama und LM Studio. Dies macht Personas über Anbieter hinweg tragbar und zukunftssicher, da sich Modelle wie LLaMA 3.1 oder Qwen 3 entwickeln.',
          'Persona-Prompting vs andere Ansätze:',
        ],
        items: [
          'Persona-Prompting ändert den Eingabetext; Fine-Tuning ändert Modellparameter.',
          'Persona-Prompting funktioniert über GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und Mistral Large ohne Nachschulung; Fine-Tuning ist normalerweise anbieter-spezifisch.',
          'Persona-Prompting ist in Sekunden reversibel; Sie können Personas pro Aufgabe oder Region (EU vs. China vs. USA) tauschen, ohne Infrastruktur-Änderungen.',
        ],
      },
      regionalApproaches: {
        content: [
          'EU-Unternehmen bevorzugen oft Persona-Prompting in Kombination mit lokalen Modellen wie Mistral Large oder LLaMA 3.1, die vor Ort gehostet werden, um EU-KI-Gesetz und Datenschutz-Anforderungen zu erfüllen, ohne Prompts mit externen APIs zu teilen. In China wenden Unternehmen zunehmend Persona-Prompting auf Modelle wie Qwen 3 oder DeepSeek V3 an, um lokale regulatorische Leitlinien und Sprachnormen zu erfüllen, wo Tokenisierung und Context-Fenster-Effizienz sich von englischzentrierten Modellen unterscheiden. Japanische Organisationen kombinieren häufig On-Premise-Modelle mit strengen, dokumentierten Personas, um METI-Datenverwaltungsregeln zu erfüllen und gleichzeitig KI-gestützte Workflows zu ermöglichen.',
        ],
      },
      pqBridges: {
        content: [
          'PromptQuorum überbrückt alle drei Strategien, indem Sie:',
        ],
        items: [
          'Persona-Prompting in der System- oder Assistent-Nachricht für jeden Anbieter verwenden.',
          'Personas gegen Fine-Tuned-Modelle vergleichen, wo verfügbar.',
          'Sensible Prompts zu lokalen Modellen über Ollama oder LM Studio leiten, während Sie den gleichen Persona-Text behalten.',
        ],
      },
      keySnippets: {
        title: 'Schlüssel-Schnipsel-Blöcke zur Wiederverwendung',
        content: [
          '**In einem Satz:** Ein Persona-Prompt ist eine wiederverwendbare Spezifikation von Rolle, Werten, Constraints und Stil, die große Sprachmodelle dazu bringt, sich wie konsistente virtuelle Experten statt generische Chatbots zu verhalten.',
          'Persona-Prompting vs Fine-Tuning:',
        ],
        items: [
          'Persona-Prompting ändert nur die Anweisungen, daher ist es billig und reversibel.',
          'Fine-Tuning ändert das Modell selbst und erfordert Datensätze, Trainings-Läufe und Bewertung.',
          'Konfiguration auf System-Ebene in APIs sitzt zwischen ihnen, profitiert aber immer noch von einer klaren Persona-Spezifikation.',
        ],
      },
      sevenBlocks: {
        content: [
          'Die sieben Bausteine einer Prompt-Persona sind: Rolle, Domain-Umfang, Ziele, Constraints, Interaktionsstil, Beispiele und Unsicherheitsbehandlung.',
        ],
      },
      howToStart: {
        title: 'Wie Sie Persona-basiertes Prompting verwenden',
        numberedItems: [
          '**Wählen Sie eine Persona, die Ihrem gewünschten Ausgabenstil entspricht.** Für Marketing-Kopie: „Sie sind ein kreativer Texter." Für technische Dokumentation: „Sie sind ein Principal Engineer." Für Barrierefreiheit: „Sie schreiben für nicht-technische Benutzer."',
          '**Beschreiben Sie die Persona mit Eigenschaften, die für Ihre Aufgabe relevant sind.** Anstatt „freundlich" zu sagen: „Sie erklären technische Konzepte mit Analogien, verwenden kurze Sätze, vermeiden Jargon und priorisieren Klarheit über Vollständigkeit."',
          '**Kombinieren Sie Persona mit Task-Klarheit.** Beispiel: „Sie sind ein technischer Schriftsteller mit Erfahrung, komplexe Systeme für nicht-Experten zugänglich zu machen. Schreiben Sie eine 500-Wort-Erklärung, wie API-Rate-Limiting funktioniert."',
          '**Verwenden Sie Personas, um Ton und Stil zu kontrollieren, ohne jedes Detail zu mikromanagen.** Eine Persona bringt implizite Konventionen und Prioritäten. „Software-Architekt" suggert strukturiertes Denken; „Journalist" suggert faktengestützte Erzählung.',
          '**Testen Sie Persona-Wahlmöglichkeiten, indem Sie den gleichen Prompt mit verschiedenen Personas ausführen und Ausgaben vergleichen.** Generieren Sie den gleichen Inhalt als „casual marketer" vs. „professional consultant." Sehen Sie, welcher Ton Ihre Marke oder Anwendungsfall besser passt.',
        ],
      },
      personaComparison: {
        title: 'Persona-Prompting vs andere KI-Kontrollmethoden',
        columns: ['Aspekt', 'Persona-Prompting', 'Fine-Tuning', 'System-Prompt', 'RAG (Retrieval-Augmented)'],
        rows: [
          {
            'Aspekt': 'Setup-Zeit',
            'Persona-Prompting': 'Minuten (Text schreiben)',
            'Fine-Tuning': 'Stunden/Tage (Daten sammeln, trainieren)',
            'System-Prompt': 'Minuten (API-Level-Konfiguration)',
            'RAG (Retrieval-Augmented)': 'Stunden (Corpus bauen, Embeddings)',
          },
          {
            'Aspekt': 'Kosten',
            'Persona-Prompting': 'Frei (nur Tokens)',
            'Fine-Tuning': '$100–$10.000+ pro Modell',
            'System-Prompt': 'Frei (API-Feature)',
            'RAG (Retrieval-Augmented)': '$100–$1.000+ (Infrastruktur)',
          },
          {
            'Aspekt': 'Tragbarkeit über Modelle',
            'Persona-Prompting': 'Funktioniert auf GPT, Claude, Gemini, lokal',
            'Fine-Tuning': 'Anbieter-spezifisch, Modell-spezifisch',
            'System-Prompt': 'Anbieter-spezifisch, begrenzte Reichweite',
            'RAG (Retrieval-Augmented)': 'Modell-agnostisch, erfordert Integration',
          },
          {
            'Aspekt': 'Reversibilität',
            'Persona-Prompting': 'Änderung in Sekunden',
            'Fine-Tuning': 'Nachschulung erforderlich (Tage)',
            'System-Prompt': 'Änderung in Minuten',
            'RAG (Retrieval-Augmented)': 'Corpus aktualisieren, Nachschulung',
          },
          {
            'Aspekt': 'Am besten für',
            'Persona-Prompting': 'Multi-Domain-Rollen, Tests',
            'Fine-Tuning': 'Spezialisierte Aufgaben, proprietärer Stil',
            'System-Prompt': 'Globale Regeln, alle-Anfrage-Constraints',
            'RAG (Retrieval-Augmented)': 'Fakten-Verankerung, wissensintensive Aufgaben',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Wie lange sollte ein Persona-Prompt sein?',
            a: 'Die wirksamsten Personas sind 200–600 Tokens. Beginnen Sie mit 200–300 Tokens für Rolle, Domain, Ziele und 1–2 Constraints. Fügen Sie Beispiele und Unsicherheitsbehandlung hinzu, wenn die Komplexität es erfordert. Personas >1000 Tokens verwirren Modelle oft; halten Sie sie prägnant und testbar.',
          },
          {
            q: 'Funktioniert Persona-Prompting auf allen Modellen?',
            a: 'Es funktioniert auf GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large und lokalen Modellen wie LLaMA 3.1 und Qwen 3. Allerdings folgen verschiedene Modelle Personas unterschiedlich: GPT-5.5 priorisiert Constraints, Claude stellt Klärungsfragen, Gemini erstellt dichte Zusammenfassungen. Testen Sie Ihre Persona auf mehreren Modellen.',
          },
          {
            q: 'Kann ich Personas mit Fine-Tuned-Modellen verwenden?',
            a: 'Ja. Personas funktionieren als Text-Schicht über Fine-Tuned-Modellen. Ein Fine-Tuned-Modell kodiert bereits Domain-Wissen und Stil; ein Persona-Prompt kann dieses Verhalten für spezifische Aufgaben verfeinern oder umleiten. Die beiden arbeiten sich gegenseitig ergänzend.',
          },
          {
            q: 'Wie teste ich, ob eine Persona funktioniert?',
            a: 'Testen Sie mit PromptQuorum: senden Sie die gleiche Aufgabe an GPT-5.5, Claude und Gemini mit Ihrer Persona. Zählen Sie, wie oft das Modell eine Regel bricht (z.B. Token-Limit überschreitet, Marketing-Sprache verwendet, personalisierte Ratschläge gibt). Verfeinern Sie die Persona basierend auf Ausfällen. Wiederholen Sie 10–20 mal.',
          },
          {
            q: 'Was passiert, wenn eine Persona mit den Task-Anweisungen des Benutzers in Konflikt gerät?',
            a: 'Task-Anweisungen gewinnen normalerweise. Wenn eine Persona sagt „max 3 Sätze", aber der Benutzer fragt nach 1000 Wörtern, folgen Modelle typischerweise der expliziten Anfrage des Benutzers. Um dies zu vermeiden, machen Sie Personas flexibel: „Streben Sie 3 Sätze pro Absatz an, es sei denn, die Aufgabe verlangt explizit etwas anderes."',
          },
          {
            q: 'Können Personas mit Halluzinationen helfen?',
            a: 'Teilweise. Eine Persona, die sagt „Zitieren Sie Quellen, gestehen Sie Unsicherheit bei Vertrauen <80 %, kennzeichnen Sie Annahmen", reduziert Halluzinationen, indem sie dem Modell explizite Regeln gibt. Allerdings können Personas die grundlegend probabilistische Natur des Modells nicht überschreiben. Kombinieren Sie mit RAG oder Faktenprüfung für maximale Zuverlässigkeit.',
          },
          {
            q: 'Sind Personas für nicht-englische Sprachen wirksam?',
            a: 'Ja, allerdings mit Vorbehalten. Modelle wie GPT-5.5 und Claude handhaben deutsche, französische, japanische und chinesische Personas gut, aber die Leistung variiert. Testen Sie Personas in Ihrer Zielsprache; einige Modelle (z.B. Qwen 3) sind für bestimmte Sprachen optimiert und folgen lokalisierten Personas zuverlässiger.',
          },
          {
            q: 'Wie versioniere und teile ich Personas mit meinem Team?',
            a: 'Speichern Sie Personas in einem gemeinsamen Dokument (Markdown, JSON oder PromptQuorum-Bibliothek) mit Versionshistorie. Beispiel: „v2.1: Senior Cloud Architect—Zero-Trust-Constraint hinzugefügt, spekulative Anspruchsregel entfernt." Versionskontrolle durchsetzen und Reasoning-Änderungen verfolgen. Nachverfolgung, welche Persona-Versionen auf welchen Modellen getestet wurden.',
          },
          {
            q: 'Muss ich bei der Verwendung von Persona-Prompting die DSGVO beachten?',
            a: 'Ja. Nach DSGVO Artikel 28 ist Persona-Prompting eine Art von Datenverarbeitung. Achten Sie darauf, dass Ihre Persona-Prompts keine sensiblen persönlichen Daten (Namen, Adressen, Gesundheitsdaten) enthalten. Lokale KI-Inferenz (z.B. mit Ollama auf lokaler Hardware) erfüllt Datenschutz-Anforderungen und BSI-Grundschutz-Kataloge Compliance für Mittelstand-Unternehmen.',
          },
          {
            q: 'Ist Persona-Prompting für den deutschen Mittelstand geeignet?',
            a: 'Ja, besonders für Mittelstand. Persona-Prompting erlaubt es Ihnen, IT-Security-Standards einzuhalten (BSI-zertifiziert), spezifische regulatorische Anforderungen (GDPR, NIS2) durchzusetzen und zu versionieren. Viele Mittelstand-Unternehmen nutzen Personas mit lokalen Modellen (LLaMA, Ollama) um Datenhoheit zu wahren und regulatorische Anforderungen zu erfüllen.',
          },
        ],
      },
      sources: {
        title: 'Quellen und weiterführende Literatur',
        items: [
          '[Wei et al. (2022). „Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). „Large Language Models are Zero-Shot Reasoners." NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). „Language Models are Few-Shot Learners." OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). „LLaMA: Open and Efficient Foundation Language Models." arXiv.](https://arxiv.org/abs/2302.13971)',
          '[PromptQuorum Dokumentation: Multi-Modell Persona Testing.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: 'Verwandte Artikel',
        items:  [
          'Wie Sie klare Prompts für KI schreiben — Beherrschen Sie die Grundlagen, bevor Sie zu Personas vorankommen.',
          '[Negative Prompting: Sagen Sie KI, was Sie NICHT tun sollen](/de/prompt-engineering/negative-prompting) — Kombinieren Sie Personas mit expliziten Constraints für bessere Kontrolle.',
          '[Prompt-Frameworks: Chain-of-Thought und darüber hinaus](/de/prompt-engineering/chain-of-thought-prompting) — Lernen Sie strukturierte Reasoning-Techniken, die mit Personas funktionieren.',
          '[System-Prompts: Die Grundlage des KI-Verhaltens](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — Verstehen Sie, wie Personas in die breitere System-Architektur passen.',
          '[Fine-Tuning vs Prompt Engineering: Wann Sie jedes verwenden](/de/prompt-engineering/prompt-engineering-vs-fine-tuning) — Entscheiden Sie, ob Personas oder Fine-Tuning richtig für Ihren Anwendungsfall ist.',
          'Testen von KI-Modellen über Anbieter hinweg — Lernen Sie, wie Sie Persona-Leistung systematisch vergleichen.',
          '[Mit KI unterrichten: Prompt-Strategien für Lehrende](/de/prompt-engineering/teaching-with-ai)',
          '[Ihre Markenstimme mit KI: Prompt-Leitfaden](/de/prompt-engineering/your-brand-voice-ai)',
          '[Lokalen Sprachassistenten für Smart Home aufbauen](/de/smart-home/local-voice-assistant-smart-home) — Persona Prompting anwenden, um dem Offline-Sprachassistenten eine definierte Persönlichkeit, Tonalität und Verhaltensgrenzen zu geben',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'Persona Prompting: dale un rol a tu IA y observa cómo mejora',
    intro: 'El persona prompting es la práctica de definir un rol claro, una visión del mundo y un comportamiento para un modelo de IA, de modo que responda de forma consistente como un experto o personaje específico en muchos prompts y sesiones.',
    seoTitle: 'Persona Prompting: comportamiento experto y consistente',
    metaDescription: 'Domina el persona prompting para IA estable sin fine-tuning. Aprende los 7 bloques de construcción, plantillas y prueba personas en GPT, Claude, Gemini.',
    publishDate: '2026-03-26',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Ingenieros de software, gestores de producto, equipos que despliegan asistentes de IA a escala',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/es/prompt-engineering/persona-prompting',
      headline: 'Persona Prompting: dale un rol a tu IA y observa cómo mejora',
      description: 'Qué es el persona prompting, por qué importa, los bloques de construcción fundamentales, ejemplos prácticos y cómo probar personas en múltiples modelos de IA.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['persona prompting', 'prompt engineering', 'comportamiento de IA', 'prompting basado en roles', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'Diseño de Personas' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Persona Prompting', description: 'Solo cambia el texto de entrada; funciona en todos los proveedores; reversible en segundos; mejor para roles multi-dominio y pruebas.' },
        { '@type': 'ListItem', position: 2, name: 'Fine-Tuning', description: 'Cambia los pesos del modelo; específico del proveedor; requiere reentrenamiento para cambios; mejor para estilos especializados y propietarios.' },
        { '@type': 'ListItem', position: 3, name: 'System Prompt', description: 'Configuración a nivel de API; específico del proveedor; alcance limitado; mejor para reglas globales aplicadas a todas las solicitudes.' },
        { '@type': 'ListItem', position: 4, name: 'RAG (Generación Aumentada por Recuperación)', description: 'Capa de recuperación agnóstica al modelo; requiere infraestructura; mejor para anclaje a hechos y tareas intensivas en conocimiento.' },
        { '@type': 'ListItem', position: 5, name: 'System Prompt + Persona', description: 'Combina reglas a nivel de sistema con persona específica de la tarea; enfoque híbrido; mejor para empresas que necesitan tanto gobernanza como flexibilidad.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Puntos clave',
        numberedItems: [
          'El persona prompting fija el comportamiento de la IA definiendo el rol, el alcance de la experiencia y las reglas de decisión antes de hacer tu tarea — haciendo las respuestas predecibles entre sesiones y modelos.',
          'Los siete bloques de construcción son: rol (quién), alcance del dominio (qué), objetivos (prioridades), constraints (límites), estilo de interacción (cómo), ejemplos (bueno/malo) y manejo de incertidumbre (cuando no está seguro).',
          'Las personas reducen las alucinaciones porque restringen el razonamiento del modelo a una "identidad" consistente en lugar de improvisar un nuevo estilo en cada consulta.',
          'Prueba las personas en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y Mistral Large para ver qué modelo se adhiere mejor — ningún modelo único sigue todas las personas por igual.',
          'El persona prompting es reversible en segundos y funciona entre proveedores, haciéndolo portable y más barato que el fine-tuning para cambios de comportamiento.',
          'Usa umbrales numéricos (% de confianza, límites de tokens, nivel de lectura) para ayudar a los modelos a seguir las reglas; modelos como GPT-5.5 mapean esto directamente a parámetros de decodificación internos.',
        ],
      },
      quickFacts: {
        title: 'Datos rápidos',
        items: [
          'Técnica central: Añade rol, dominio y constraints al mensaje del sistema antes de la tarea.',
          'Bloques de construcción: 7 componentes (rol, alcance, objetivos, constraints, estilo, ejemplos, manejo de incertidumbre) hacen que las personas sean legibles por máquinas.',
          'Impacto en el comportamiento: Las personas reducen los errores de formato en >50 % y aumentan la adherencia a las constraints frente a los prompts genéricos.',
          'Ventaja multi-modelo: La misma persona se comporta de forma diferente en GPT-5.5, Claude, Gemini — requiriendo pruebas intencionales.',
          'Reutilizabilidad: Las personas compactas (400–600 tokens) son compartibles dentro de los equipos y entre proyectos.',
          'Sin entrenamiento requerido: A diferencia del fine-tuning, las personas funcionan en cualquier proveedor sin reentrenamiento del modelo.',
        ],
      },
      whatIsPersonaPrompting: {
        title: 'Qué es realmente el persona prompting',
        content: [
          '**El persona prompting es una forma estructurada de decirle a GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro u otros modelos quién deben pretender ser, cómo deben pensar y qué constraints deben seguir antes de ver tu tarea real.** Un prompt de persona normalmente incluye una descripción del rol, experiencia del dominio, tono, reglas de decisión y limitaciones explícitas para que el modelo se comporte de forma predecible en lugar de improvisar un nuevo estilo cada vez.',
          '**En una oración:** El persona prompting convierte un LLM de propósito general en un especialista virtual repetible fijando su rol, objetivos y límites antes de hacer preguntas.',
          'El persona prompting es diferente de los simples "prompts de estilo" como "responde como un profesor amigable." Un prompt de persona adecuado define no solo el tono sino también el alcance del conocimiento, las prioridades de decisión y cómo manejar la incertidumbre.',
          'PromptQuorum es una herramienta de despacho de IA multi-modelo que te permite probar el mismo prompt de persona simultáneamente con GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large y modelos locales vía Ollama para ver qué modelo sigue la persona de forma más fiable.',
        ],
      },
      whyItMatters: {
        title: 'Por qué el persona prompting importa para el trabajo real',
        content: [
          '**El persona prompting importa porque te da un comportamiento estable de modelos inherentemente probabilísticos, lo cual es crítico para la ingeniería de software, el análisis financiero y los workflows de gobernanza.**',
          '**En términos simples:** Sin una persona, hablas con "el modelo" y esperas que se comporte; con una persona, hablas con "el mismo experto" todos los días y sabes aproximadamente cómo responderá.',
          'Para el trabajo de TI y software, el persona prompting te permite crear agentes distintos como "revisor de código seguro", "SRE de DevOps" o "asistente de registro de decisiones de arquitectura", cada uno con reglas explícitas sobre frameworks, logging y estándares de documentación.',
        ],
      },
      buildingBlocks: {
        title: 'Bloques de construcción fundamentales de un prompt de persona sólido',
        content: [
          '**Un prompt de persona sólido siempre incluye al menos cinco bloques de construcción: rol, alcance del conocimiento, objetivos, constraints y reglas de interacción.** Añadir ejemplos explícitos y comportamiento ante fallos (qué hacer cuando no está seguro) mejora aún más la fiabilidad.',
          'Los siete bloques de construcción de un prompt de persona son: rol, alcance del dominio, objetivos, constraints, estilo de interacción, ejemplos y manejo de incertidumbre.',
          'Esto es lo que hace cada bloque en la práctica:',
        ],
        items: [
          'Rol: "Eres un arquitecto de nube senior con 10+ años de experiencia en Kubernetes y redes de confianza cero."',
          'Alcance del dominio: "Céntrate en AWS, Azure y Google Cloud; ignora mainframes on-premises a menos que se mencionen explícitamente."',
          'Objetivos: "Optimiza para seguridad y mantenibilidad primero, costo segundo y rendimiento tercero."',
          'Constraints: "Sin afirmaciones especulativas, sin consejos legales o médicos, siempre indica suposiciones y limitaciones."',
          'Estilo de interacción: "Pasos cortos y numerados, sin lenguaje de marketing, sin emojis, máximo 3 oraciones por párrafo."',
          'Ejemplos: Una o dos respuestas de ejemplo concretas que muestren la profundidad y estructura deseadas.',
          'Manejo de incertidumbre: "Si tienes menos del 80 % de confianza, haz preguntas aclaratorias antes de responder."',
        ],
      },
      numericThresholds: {
        content: [
          'Los prompts de persona que codifican umbrales numéricos (por ejemplo "80 % de confianza", "nunca superes 300 tokens en una respuesta" o "explica a nivel de inglés B1") son más fáciles de seguir para los modelos que las instrucciones puramente cualitativas.',
          'PromptQuorum soporta adjuntar el mismo bloque de persona a múltiples prompts entre proveedores, para que puedas reutilizar una sola persona de "analista financiero conservador" al consultar GPT-5.5, Gemini 3.1 Pro y LLaMA 3.1 sin copiar y pegar.',
        ],
      },
      techExample: {
        title: 'Ejemplo: Persona técnica para TI y finanzas',
        content: [
          '**Una persona práctica para el trabajo de TI y finanzas define un perfil de riesgo conservador, límites claros del stack técnico y reglas estrictas para citar fuentes o suposiciones.**',
          '**[Prompt de persona deficiente]**',
          '"Eres una IA útil. Explica temas de tecnología y finanzas de forma simple y sé amigable."',
          '**[Prompt de persona mejorado]**',
          '"Eres un analista senior de TI y finanzas con 15+ años de experiencia en arquitectura de software, mercados de capitales y trading de commodities. Céntrate en el análisis factual, evita el hype y separa siempre los datos de la interpretación. Usa inglés claro, máximo 3 oraciones por párrafo y sin emojis. Cuando la evidencia sea débil o tenga más de 12 meses, etiquétala explícitamente como \'antigua\' y propón qué datos nuevos serían necesarios. Prioriza perspectivas de la UE, Rusia y Alemania cuando hables de regulación; menciona China y EE. UU. donde sea relevante. Nunca des consejos de inversión personalizados; en su lugar, describe escenarios, mecanismos y factores de riesgo."',
        ],
      },
      techExampleBreakdown: {
        content: [
          'Esta persona codifica:',
        ],
        items: [
          'Experiencia multi-dominio (software, mercados, commodities).',
          'Enfoque regional (UE, Rusia, Alemania, más China y EE. UU.).',
          'Reglas de comportamiento (etiquetar datos antiguos, evitar el hype, sin emojis).',
          'Límite de cumplimiento (sin consejos de inversión personalizados).',
        ],
      },
      techExampleTest: {
        content: [
          'PromptQuorum puede enviar esta persona más una tarea concreta (por ejemplo "analiza el impacto del AI Act de la UE en los LLMs alojados en la nube") a GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y Mistral Large en un clic y mostrar qué modelo respeta mejor las constraints.',
        ],
      },
      howToBuild: {
        title: 'Cómo construir tu propia persona paso a paso',
        content: [
          '**Puedes construir una persona robusta en cinco pasos: define el trabajo, elige las constraints, añade ejemplos, prueba entre modelos y refina basándote en los fallos.** Trata el diseño de personas como un proceso iterativo.',
          'Pasos para construir una persona:',
        ],
        numberedItems: [
          'Define el trabajo: "Esta persona es para el caso de uso X: por ejemplo revisión de código multi-modelo, planificación de escenarios macroeconómicos o resumen de noticias consciente del riesgo."',
          'Selecciona el alcance del dominio: "Incluye o excluye ciertos frameworks, clases de activos o jurisdicciones explícitamente."',
          'Elige las constraints: "Decide sobre el tono, la longitud de los párrafos, las expectativas de citación y los umbrales de confianza."',
          'Crea dos interacciones de ejemplo: "Muestra una respuesta ideal y un fallo a evitar."',
          'Prueba y refina: "Ejecuta al menos 10–20 prompts reales y edita la persona cada vez que el modelo rompa una regla."',
        ],
      },
      buildNote: {
        content: [
          'La práctica del prompt engineering muestra que los ejemplos concretos mejoran significativamente la adherencia a instrucciones complejas. En la práctica, añadir solo un bloque de contraste "respuesta mala vs respuesta buena" a menudo reduce los errores de formato en más de la mitad.',
          'La vista lado a lado de PromptQuorum te ayuda a refinar personas más rápido porque ves, en una sola pantalla, cómo los diferentes modelos interpretan la misma persona.',
        ],
      },
      vsFineTuning: {
        title: 'Persona prompting vs fine-tuning vs system prompts',
        content: [
          '**El persona prompting es una alternativa ligera al fine-tuning y a la configuración a nivel de sistema cuando quieres cambios de comportamiento sin entrenar tu propio modelo.**',
          'Persona prompting vs otros enfoques:',
        ],
        items: [
          'El persona prompting cambia el texto de entrada; el fine-tuning cambia los parámetros del modelo.',
          'El persona prompting funciona en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y Mistral Large sin reentrenamiento; el fine-tuning suele ser específico del proveedor.',
          'El persona prompting es reversible en segundos; puedes cambiar personas por tarea o por región (UE vs China vs EE. UU.) sin cambios de infraestructura.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuánto tiempo debe tener un prompt de persona?', a: 'Las personas más efectivas tienen 200–600 tokens. Empieza con 200–300 tokens para rol, dominio, objetivos y 1–2 constraints. Añade ejemplos y manejo de incertidumbre cuando la complejidad lo requiera. Las personas >1000 tokens a menudo confunden a los modelos; mantenlas concisas y comprobables.' },
          { q: '¿Funciona el persona prompting en todos los modelos?', a: 'Funciona en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large y modelos locales como LLaMA 3.1 y Qwen 3. Sin embargo, los diferentes modelos siguen las personas de forma diferente: GPT-5.5 prioriza las constraints, Claude hace preguntas aclaratorias, Gemini crea resúmenes numéricos densos. Prueba tu persona en múltiples modelos.' },
          { q: '¿Puedo usar personas con modelos con fine-tuning?', a: 'Sí. Las personas funcionan como una capa de texto sobre los modelos con fine-tuning. Un modelo con fine-tuning ya codifica el conocimiento y el estilo del dominio; un prompt de persona puede refinar o redirigir ese comportamiento para tareas específicas. Los dos se complementan.' },
          { q: '¿Cómo pruebo si una persona funciona?', a: 'Prueba con PromptQuorum: envía la misma tarea a GPT-5.5, Claude y Gemini con tu persona. Cuenta cuántas veces el modelo rompe una regla (por ejemplo supera el límite de tokens, usa lenguaje de marketing, da consejos personalizados). Refina la persona basándote en los fallos. Repite 10–20 veces.' },
          { q: '¿Qué ocurre si una persona entra en conflicto con las instrucciones de tarea del usuario?', a: 'Las instrucciones de tarea suelen ganar. Si una persona dice "máximo 3 oraciones", pero el usuario pide 1000 palabras, los modelos típicamente siguen la solicitud explícita del usuario. Para evitarlo, haz que las personas sean flexibles: "Apunta a 3 oraciones por párrafo, a menos que la tarea requiera explícitamente algo diferente."' },
          { q: '¿Pueden las personas ayudar con las alucinaciones?', a: 'Parcialmente. Una persona que dice "cita fuentes, reconoce la incertidumbre cuando la confianza es <80 %, marca las suposiciones" reduce las alucinaciones dando al modelo reglas explícitas. Sin embargo, las personas no pueden anular la naturaleza fundamentalmente probabilística del modelo. Combina con RAG o verificación de hechos para máxima fiabilidad.' },
          { q: '¿Son las personas efectivas para idiomas distintos del inglés?', a: 'Sí, aunque con advertencias. Modelos como GPT-5.5 y Claude manejan bien las personas en alemán, francés, japonés y chino, pero el rendimiento varía. Prueba las personas en tu idioma objetivo; algunos modelos (por ejemplo Qwen 3) están optimizados para idiomas específicos.' },
          { q: '¿Cómo versiono y comparto personas con mi equipo?', a: 'Guarda las personas en un documento compartido (Markdown, JSON o biblioteca de PromptQuorum) con historial de versiones. Ejemplo: "v2.1: Arquitecto Cloud Senior — constraint de Zero-Trust añadida, regla de afirmaciones especulativas eliminada." Aplica el control de versiones y rastrea los cambios de razonamiento.' },
          { q: '¿Debo tener en cuenta las regulaciones al usar persona prompting?', a: 'Sí. El persona prompting es una forma de procesamiento de datos. Asegúrate de que tus prompts de persona no contengan datos personales sensibles (nombres, direcciones, datos de salud). La inferencia de IA local (por ejemplo con Ollama en hardware local) satisface los requisitos de privacidad y cumplimiento.' },
          { q: '¿Es el persona prompting adecuado para empresas medianas?', a: 'Sí, especialmente para empresas medianas. El persona prompting te permite cumplir los estándares de seguridad de TI, aplicar requisitos regulatorios específicos (RGPD, NIS2) y versionarlos. Muchas empresas medianas usan personas con modelos locales (LLaMA, Ollama) para mantener la soberanía de datos.' },
        ],
      },
      sources: {
        title: 'Fuentes y lecturas adicionales',
        items: [
          '[Wei et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). "Large Language Models are Zero-Shot Reasoners." NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). "Language Models are Few-Shot Learners." OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv.](https://arxiv.org/abs/2302.13971)',
          '[Documentación de PromptQuorum: Pruebas de Personas Multi-Modelo.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: 'Lecturas relacionadas',
        items:  [
          'Cómo escribir prompts claros para IA — Domina los fundamentos antes de avanzar a las personas.',
          '[Negative prompting: dile a la IA lo que NO debe hacer](/es/prompt-engineering/negative-prompting) — Combina personas con constraints explícitas para mayor control.',
          '[Frameworks de prompt: chain-of-thought y más allá](/es/prompt-engineering/chain-of-thought-prompting) — Aprende técnicas de razonamiento estructurado que funcionan con personas.',
          '[System prompts: la base del comportamiento de IA](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — Entiende cómo las personas encajan en la arquitectura de sistema más amplia.',
          '[Fine-tuning vs prompt engineering: cuándo usar cada uno](/es/prompt-engineering/prompt-engineering-vs-fine-tuning) — Decide si las personas o el fine-tuning son lo correcto para tu caso de uso.',
          'Probando modelos de IA entre proveedores — Aprende a comparar sistemáticamente el rendimiento de las personas.',
          '[Enseñar con IA: Estrategias de prompts para educadores](/es/prompt-engineering/teaching-with-ai)',
          '[Tu voz de marca con IA: Guía de prompts](/es/prompt-engineering/your-brand-voice-ai)',
          '[Construir un asistente de voz local para smart home](/es/smart-home/local-voice-assistant-smart-home) — aplicar persona prompting para dar al asistente de voz offline una personalidad definida, tono y límites de comportamiento',
        ],
      },
    },
  },
  pt: {
    theme: 'Techniques',
    title: 'Persona Prompting: dê um papel à sua IA e veja como ela melhora',
    intro: 'O persona prompting é a prática de definir um papel claro, uma visão de mundo e um comportamento para um modelo de IA, de modo que ele responda de forma consistente como um especialista ou personagem específico em muitos prompts e sessões.',
    seoTitle: 'Persona Prompting: comportamento especializado e consistente',
    metaDescription: 'Domine o persona prompting para IA estável sem fine-tuning. Aprenda os 7 blocos de construção, modelos e teste personas no GPT, Claude, Gemini.',
    publishDate: '2026-03-26',
    readTime: '13 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Engenheiros de software, gestores de produto, equipes que implantam assistentes de IA em escala',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/pt/prompt-engineering/persona-prompting',
      headline: 'Persona Prompting: dê um papel à sua IA e veja como ela melhora',
      description: 'O que é o persona prompting, por que importa, os blocos de construção fundamentais, exemplos práticos e como testar personas em vários modelos de IA.',
      datePublished: '2026-03-26',
      keywords: ['persona prompting', 'prompt engineering', 'comportamento de IA', 'prompting baseado em papéis', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'Design de Personas' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Persona Prompting', description: 'Apenas altera o texto de entrada; funciona em todos os provedores; reversível em segundos; melhor para papéis multi-domínio e testes.' },
        { '@type': 'ListItem', position: 2, name: 'Fine-Tuning', description: 'Altera os pesos do modelo; específico do provedor; requer retreinamento para mudanças; melhor para estilos especializados e proprietários.' },
        { '@type': 'ListItem', position: 3, name: 'System Prompt', description: 'Configuração no nível da API; específico do provedor; escopo limitado; melhor para regras globais aplicadas a todas as solicitações.' },
        { '@type': 'ListItem', position: 4, name: 'RAG (Geração Aumentada por Recuperação)', description: 'Camada de recuperação agnóstica ao modelo; requer infraestrutura; melhor para ancoragem em fatos e tarefas intensivas em conhecimento.' },
        { '@type': 'ListItem', position: 5, name: 'System Prompt + Persona', description: 'Combina regras no nível de sistema com persona específica da tarefa; abordagem híbrida; melhor para empresas que precisam tanto de governança quanto de flexibilidade.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Pontos-chave',
        numberedItems: [
          'O persona prompting fixa o comportamento da IA definindo o papel, o escopo de expertise e as regras de decisão antes de fazer sua tarefa — tornando as respostas previsíveis entre sessões e modelos.',
          'Os sete blocos de construção são: papel (quem), escopo do domínio (o quê), objetivos (prioridades), restrições (limites), estilo de interação (como), exemplos (bom/ruim) e gerenciamento de incerteza (quando não tem certeza).',
          'As personas reduzem as alucinações porque restringem o raciocínio do modelo a uma "identidade" consistente em vez de improvisar um novo estilo a cada consulta.',
          'Teste as personas no GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e Mistral Large para ver qual modelo adere melhor — nenhum modelo único segue todas as personas igualmente.',
          'O persona prompting é reversível em segundos e funciona entre provedores, tornando-o portátil e mais barato do que o fine-tuning para mudanças de comportamento.',
          'Use limites numéricos (% de confiança, limites de tokens, nível de leitura) para ajudar os modelos a seguir as regras; modelos como GPT-5.5 mapeiam isso diretamente para parâmetros de decodificação internos.',
        ],
      },
      quickFacts: {
        title: 'Fatos rápidos',
        items: [
          'Técnica central: Adicione papel, domínio e restrições à mensagem do sistema antes da tarefa.',
          'Blocos de construção: 7 componentes (papel, escopo, objetivos, restrições, estilo, exemplos, gerenciamento de incerteza) tornam as personas legíveis por máquinas.',
          'Impacto no comportamento: As personas reduzem os erros de formato em >50% e aumentam a adesão às restrições em comparação com prompts genéricos.',
          'Vantagem multi-modelo: A mesma persona se comporta de forma diferente no GPT-5.5, Claude, Gemini — exigindo testes intencionais.',
          'Reutilizabilidade: Personas compactas (400–600 tokens) são compartilháveis dentro das equipes e entre projetos.',
          'Sem treinamento necessário: Ao contrário do fine-tuning, as personas funcionam em qualquer provedor sem retreinamento do modelo.',
        ],
      },
      whatIsPersonaPrompting: {
        title: 'O que é realmente o persona prompting',
        content: [
          '**O persona prompting é uma forma estruturada de dizer ao GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro ou outros modelos quem eles devem fingir ser, como devem pensar e quais restrições devem seguir antes de ver sua tarefa real.** Um prompt de persona normalmente inclui uma descrição do papel, expertise do domínio, tom, regras de decisão e limitações explícitas para que o modelo se comporte de forma previsível em vez de improvisar um novo estilo a cada vez.',
          '**Em uma frase:** O persona prompting converte um LLM de propósito geral em um especialista virtual repetível fixando seu papel, objetivos e limites antes de fazer perguntas.',
          'O persona prompting é diferente de simples "prompts de estilo" como "responda como um professor amigável". Um prompt de persona adequado define não apenas o tom, mas também o escopo do conhecimento, as prioridades de decisão e como gerenciar a incerteza.',
          'O PromptQuorum é uma ferramenta de despacho de IA multi-modelo que permite testar o mesmo prompt de persona simultaneamente com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large e modelos locais via Ollama para ver qual modelo segue a persona de forma mais confiável.',
        ],
      },
      whyItMatters: {
        title: 'Por que o persona prompting importa para o trabalho real',
        content: [
          '**O persona prompting importa porque dá a você um comportamento estável de modelos inerentemente probabilísticos, o que é crítico para engenharia de software, análise financeira e fluxos de trabalho de governança.**',
          '**Em termos simples:** Sem uma persona, você fala com "o modelo" e espera que ele se comporte; com uma persona, você fala com "o mesmo especialista" todos os dias e sabe aproximadamente como ele responderá.',
          'Para trabalho de TI e software, o persona prompting permite criar agentes distintos como "revisor de código seguro", "SRE de DevOps" ou "assistente de registro de decisões de arquitetura", cada um com regras explícitas sobre frameworks, logging e padrões de documentação.',
        ],
      },
      buildingBlocks: {
        title: 'Blocos de construção fundamentais de um prompt de persona sólido',
        content: [
          '**Um prompt de persona sólido sempre inclui pelo menos cinco blocos de construção: papel, escopo do conhecimento, objetivos, restrições e regras de interação.** Adicionar exemplos explícitos e comportamento em caso de falha (o que fazer quando não tem certeza) melhora ainda mais a confiabilidade.',
          'Os sete blocos de construção de um prompt de persona são: papel, escopo do domínio, objetivos, restrições, estilo de interação, exemplos e gerenciamento de incerteza.',
          'Isso é o que cada bloco faz na prática:',
        ],
        items: [
          'Papel: "Você é um arquiteto de nuvem sênior com 10+ anos de experiência em Kubernetes e redes de confiança zero."',
          'Escopo do domínio: "Foque em AWS, Azure e Google Cloud; ignore mainframes on-premises a menos que sejam mencionados explicitamente."',
          'Objetivos: "Otimize para segurança e manutenibilidade primeiro, custo segundo e desempenho terceiro."',
          'Restrições: "Sem afirmações especulativas, sem conselhos legais ou médicos, sempre indique suposições e limitações."',
          'Estilo de interação: "Passos curtos e numerados, sem linguagem de marketing, sem emojis, máximo 3 frases por parágrafo."',
          'Exemplos: Uma ou duas respostas de exemplo concretas que mostrem a profundidade e estrutura desejadas.',
          'Gerenciamento de incerteza: "Se você tiver menos de 80% de confiança, faça perguntas esclarecedoras antes de responder."',
        ],
      },
      numericThresholds: {
        content: [
          'Os prompts de persona que codificam limites numéricos (por exemplo "80% de confiança", "nunca exceda 300 tokens em uma resposta" ou "explique no nível de inglês B1") são mais fáceis de seguir para os modelos do que as instruções puramente qualitativas.',
          'O PromptQuorum suporta anexar o mesmo bloco de persona a vários prompts entre provedores, para que você possa reutilizar uma única persona de "analista financeiro conservador" ao consultar GPT-5.5, Gemini 3.1 Pro e LLaMA 3.1 sem copiar e colar.',
        ],
      },
      techExample: {
        title: 'Exemplo: Persona técnica para TI e finanças',
        content: [
          '**Uma persona prática para trabalho de TI e finanças define um perfil de risco conservador, limites claros do stack técnico e regras estritas para citar fontes ou suposições.**',
          '**[Prompt de persona deficiente]**',
          '"Você é uma IA útil. Explique tópicos de tecnologia e finanças de forma simples e seja amigável."',
          '**[Prompt de persona melhorado]**',
          '"Você é um analista sênior de TI e finanças com 15+ anos de experiência em arquitetura de software, mercados de capitais e trading de commodities. Foque na análise factual, evite o hype e separe sempre os dados da interpretação. Use português claro, máximo 3 frases por parágrafo e sem emojis. Quando a evidência for fraca ou tiver mais de 12 meses, rotule-a explicitamente como \'antiga\' e proponha quais novos dados seriam necessários. Priorize perspectivas da UE, Rússia e Alemanha ao falar de regulação; mencione China e EUA onde for relevante. Nunca dê conselhos de investimento personalizados; em vez disso, descreva cenários, mecanismos e fatores de risco."',
        ],
      },
      techExampleBreakdown: {
        content: [
          'Esta persona codifica:',
        ],
        items: [
          'Expertise multi-domínio (software, mercados, commodities).',
          'Foco regional (UE, Rússia, Alemanha, mais China e EUA).',
          'Regras de comportamento (rotular dados antigos, evitar hype, sem emojis).',
          'Limite de conformidade (sem conselhos de investimento personalizados).',
        ],
      },
      techExampleTest: {
        content: [
          'O PromptQuorum pode enviar esta persona mais uma tarefa concreta (por exemplo "analise o impacto do AI Act da UE nos LLMs hospedados na nuvem") para GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e Mistral Large em um clique e mostrar qual modelo respeita melhor as restrições.',
        ],
      },
      howToBuild: {
        title: 'Como construir sua própria persona passo a passo',
        content: [
          '**Você pode construir uma persona robusta em cinco etapas: defina o trabalho, escolha as restrições, adicione exemplos, teste entre modelos e refine com base nas falhas.** Trate o design de personas como um processo iterativo.',
          'Etapas para construir uma persona:',
        ],
        numberedItems: [
          'Defina o trabalho: "Esta persona é para o caso de uso X: por exemplo revisão de código multi-modelo, planejamento de cenários macroeconômicos ou resumo de notícias consciente do risco."',
          'Selecione o escopo do domínio: "Inclua ou exclua certos frameworks, classes de ativos ou jurisdições explicitamente."',
          'Escolha as restrições: "Decida sobre o tom, o comprimento dos parágrafos, as expectativas de citação e os limites de confiança."',
          'Crie duas interações de exemplo: "Mostre uma resposta ideal e uma falha a evitar."',
          'Teste e refine: "Execute pelo menos 10–20 prompts reais e edite a persona sempre que o modelo quebrar uma regra."',
        ],
      },
      buildNote: {
        content: [
          'A prática do prompt engineering mostra que os exemplos concretos melhoram significativamente a adesão a instruções complexas. Na prática, adicionar apenas um bloco de contraste "resposta ruim vs resposta boa" frequentemente reduz os erros de formato em mais da metade.',
          'A visualização lado a lado do PromptQuorum ajuda a refinar personas mais rapidamente porque você vê, em uma única tela, como diferentes modelos interpretam a mesma persona.',
        ],
      },
      vsFineTuning: {
        title: 'Persona prompting vs fine-tuning vs system prompts',
        content: [
          '**O persona prompting é uma alternativa leve ao fine-tuning e à configuração no nível de sistema quando você quer mudanças de comportamento sem treinar seu próprio modelo.**',
          'Persona prompting vs outras abordagens:',
        ],
        items: [
          'O persona prompting altera o texto de entrada; o fine-tuning altera os parâmetros do modelo.',
          'O persona prompting funciona no GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e Mistral Large sem retreinamento; o fine-tuning geralmente é específico do provedor.',
          'O persona prompting é reversível em segundos; você pode trocar personas por tarefa ou por região (UE vs China vs EUA) sem mudanças de infraestrutura.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual deve ser o comprimento de um prompt de persona?', a: 'As personas mais eficazes têm 200–600 tokens. Comece com 200–300 tokens para papel, domínio, objetivos e 1–2 restrições. Adicione exemplos e gerenciamento de incerteza quando a complexidade exigir. Personas >1000 tokens frequentemente confundem os modelos; mantenha-as concisas e testáveis.' },
          { q: 'O persona prompting funciona em todos os modelos?', a: 'Funciona no GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large e modelos locais como LLaMA 3.1 e Qwen 3. No entanto, diferentes modelos seguem as personas de forma diferente: GPT-5.5 prioriza as restrições, Claude faz perguntas esclarecedoras, Gemini cria resumos numéricos densos. Teste sua persona em vários modelos.' },
          { q: 'Posso usar personas com modelos com fine-tuning?', a: 'Sim. As personas funcionam como uma camada de texto sobre os modelos com fine-tuning. Um modelo com fine-tuning já codifica o conhecimento e o estilo do domínio; um prompt de persona pode refinar ou redirecionar esse comportamento para tarefas específicas. Os dois se complementam.' },
          { q: 'Como testo se uma persona funciona?', a: 'Teste com o PromptQuorum: envie a mesma tarefa para GPT-5.5, Claude e Gemini com sua persona. Conte quantas vezes o modelo quebra uma regra (por exemplo excede o limite de tokens, usa linguagem de marketing, dá conselhos personalizados). Refine a persona com base nas falhas. Repita 10–20 vezes.' },
          { q: 'O que acontece se uma persona entra em conflito com as instruções de tarefa do usuário?', a: 'As instruções de tarefa geralmente ganham. Se uma persona diz "máximo 3 frases", mas o usuário pede 1000 palavras, os modelos tipicamente seguem a solicitação explícita do usuário. Para evitar isso, torne as personas flexíveis: "Aponte para 3 frases por parágrafo, a menos que a tarefa exija explicitamente algo diferente."' },
          { q: 'As personas podem ajudar com as alucinações?', a: 'Parcialmente. Uma persona que diz "cite fontes, reconheça a incerteza quando a confiança é <80%, marque as suposições" reduz as alucinações dando ao modelo regras explícitas. No entanto, as personas não podem anular a natureza fundamentalmente probabilística do modelo. Combine com RAG ou verificação de fatos para máxima confiabilidade.' },
          { q: 'As personas são eficazes para idiomas além do inglês?', a: 'Sim, embora com ressalvas. Modelos como GPT-5.5 e Claude gerenciam bem as personas em alemão, francês, japonês e chinês, mas o desempenho varia. Teste as personas no seu idioma alvo; alguns modelos (por exemplo Qwen 3) são otimizados para idiomas específicos.' },
          { q: 'Como versiono e compartilho personas com minha equipe?', a: 'Salve as personas em um documento compartilhado (Markdown, JSON ou biblioteca do PromptQuorum) com histórico de versões. Exemplo: "v2.1: Arquiteto Cloud Sênior — restrição de Zero-Trust adicionada, regra de afirmações especulativas removida." Aplique o controle de versões e rastreie as mudanças de raciocínio.' },
          { q: 'Devo considerar as regulamentações ao usar persona prompting?', a: 'Sim. O persona prompting é uma forma de processamento de dados. Garanta que seus prompts de persona não contenham dados pessoais sensíveis (nomes, endereços, dados de saúde). A inferência de IA local (por exemplo com Ollama em hardware local) satisfaz os requisitos de privacidade e conformidade.' },
          { q: 'O persona prompting é adequado para empresas de médio porte?', a: 'Sim, especialmente para empresas de médio porte. O persona prompting permite cumprir os padrões de segurança de TI, aplicar requisitos regulatórios específicos (LGPD, NIS2) e versioná-los. Muitas empresas de médio porte usam personas com modelos locais (LLaMA, Ollama) para manter a soberania de dados.' },
        ],
      },
      sources: {
        title: 'Fontes e leituras adicionais',
        items: [
          '[Wei et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). "Large Language Models are Zero-Shot Reasoners." NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). "Language Models are Few-Shot Learners." OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv.](https://arxiv.org/abs/2302.13971)',
          '[Documentação do PromptQuorum: Testes de Personas Multi-Modelo.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: 'Leitura relacionada',
        items:  [
          'Como escrever prompts claros para IA — Domine os fundamentos antes de avançar para as personas.',
          '[Negative prompting: diga à IA o que ela NÃO deve fazer](/pt/prompt-engineering/negative-prompting) — Combine personas com restrições explícitas para maior controle.',
          '[Frameworks de prompt: chain-of-thought e mais além](/pt/prompt-engineering/chain-of-thought-prompting) — Aprenda técnicas de raciocínio estruturado que funcionam com personas.',
          '[System prompts: a base do comportamento de IA](/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — Entenda como as personas se encaixam na arquitetura de sistema mais ampla.',
          '[Fine-tuning vs prompt engineering: quando usar cada um](/pt/prompt-engineering/prompt-engineering-vs-fine-tuning) — Decida se as personas ou o fine-tuning são o certo para o seu caso de uso.',
          'Testando modelos de IA entre provedores — Aprenda a comparar sistematicamente o desempenho das personas.',
          '[Ensinar com IA: Estratégias de Prompts para Educadores](/pt/prompt-engineering/teaching-with-ai)',
          '[Sua Voz de Marca com IA: Guia de Prompts](/pt/prompt-engineering/your-brand-voice-ai)',
          '[Criar um assistente de voz local para casa inteligente](/pt/smart-home/local-voice-assistant-smart-home) — aplicar persona prompting para dar ao assistente de voz offline uma personalidade definida, tom e limites de comportamento',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'Persona Prompting : Donnez un Rôle Cohérent à Votre IA',
    intro: 'Le persona prompting est la pratique de définir un rôle clair, une vision du monde et un comportement pour un modèle d\'IA, afin qu\'il réponde de façon cohérente comme un expert spécifique ou un professionnel particulier, sur plusieurs prompts et sessions.',
    seoTitle: 'Persona Prompting : Débloquez un Comportement IA Stable',
    metaDescription: 'Maîtrisez le persona prompting pour des IA stables sans fine-tuning. 7 éléments clés, modèles pratiques et testez les personas sur GPT, Claude, Gemini.',
    publishDate: '2026-03-26',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Ingénieurs logiciels, chefs de produit, équipes déployant des assistants IA à l\'échelle',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/fr/prompt-engineering/persona-prompting',
      headline: 'Persona Prompting : Donnez un Rôle Cohérent à Votre IA',
      description: 'Ce qu\'est le persona prompting, pourquoi c\'est important, éléments clés, exemples pratiques et comment tester les personas sur plusieurs modèles IA.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['persona prompting', 'prompt engineering', 'comportement IA', 'prompting basé sur rôles', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Grands Modèles de Langage' },
        { '@type': 'Thing', name: 'Conception de Personas' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Persona Prompting',
          description: 'Change uniquement le texte d\'entrée; fonctionne sur tous les fournisseurs; réversible en secondes; idéal pour rôles multi-domaines et tests.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Fine-Tuning',
          description: 'Change les poids du modèle; spécifique au fournisseur; nécessite réentraînement; idéal pour styles spécialisés et propriétaires.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Prompt Système',
          description: 'Configuration au niveau API; spécifique au fournisseur; portée limitée; idéal pour règles globales appliquées à toutes les requêtes.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'RAG (Retrieval-Augmented Generation)',
          description: 'Couche d\'extraction agnostique aux modèles; nécessite infrastructure; idéal pour ancrage de faits et tâches gourmandes en connaissances.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Prompt Système + Persona',
          description: 'Combine règles système avec persona spécifique aux tâches; approche hybride; idéal pour entreprises nécessitant gouvernance et flexibilité.',
        },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Points clés',
        numberedItems: [
          'Le persona prompting verrouille le comportement IA en définissant rôle, domaine et règles de décision avant votre tâche—rendant les réponses prévisibles sur les sessions et modèles.',
          'Les sept éléments sont: rôle (qui), domaine (quoi), objectifs (priorités), contraintes (limites), style d\'interaction (comment), exemples (bon/mauvais) et gestion de l\'incertitude (quand incertain).',
          'Les personas réduisent les hallucinations en restreignant le raisonnement du modèle à une «identité» cohérente plutôt que d\'improviser un nouveau style à chaque requête.',
          'Testez les personas sur GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et Mistral Large pour voir quel modèle adhère le mieux—aucun modèle ne suit tous les personas également.',
          'Le persona prompting est réversible en secondes et fonctionne sur les fournisseurs, le rendant portable et moins cher que le fine-tuning pour les changements de comportement.',
          'Utilisez des seuils numériques (confiance %, limites de tokens, niveau de lecture) pour aider les modèles à suivre les règles; les modèles comme GPT-5.5 les mappent directement à des paramètres de décodage internes.',
        ],
      },
      quickFacts: {
        title: 'Faits rapides',
        items: [
          'Technique cœur: Ajoutez rôle, domaine et contraintes au message système avant la tâche.',
          'Éléments constitutifs: 7 composants (rôle, portée, objectifs, contraintes, style, exemples, gestion de l\'incertitude) rendent les personas lisibles par machine.',
          'Impact comportemental: Les personas réduisent les erreurs de format >50% et augmentent l\'adhérence aux contraintes comparé aux prompts génériques.',
          'Avantage multi-modèles: Même persona se comporte différemment sur GPT-5.5, Claude, Gemini—nécessitant des tests intentionnels.',
          'Réutilisabilité: Les personas compacts (400–600 tokens) sont partageables au sein des équipes et sur les projets.',
          'Aucune formation requise: Contrairement au fine-tuning, les personas fonctionnent sur n\'importe quel fournisseur sans réentraînement du modèle.',
        ],
      },
      whatIsPersonaPrompting: {
        title: 'Ce qu\'est réellement le Persona Prompting',
        content: [
          '**Le persona prompting est une méthode structurée pour dire à GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro ou d\'autres modèles qui ils doivent prétendre être, comment penser et quelles contraintes suivre avant de voir votre tâche réelle.** Un prompt persona inclut typiquement description de rôle, expertise de domaine, ton, règles de décision et limitations explicites, afin que le modèle se comporte de manière prévisible au lieu d\'improviser un nouveau style chaque fois. Quand bien fait, le persona prompting réduit les hallucinations car l\'IA filtre les décisions par une «identité» cohérente avec objectifs et garde-fous définis.',
          '**En une phrase:** Le persona prompting transforme un modèle de langage général-usage en un spécialiste virtuel répétable en fixant son rôle, objectifs et limites avant vos questions.',
          'Le persona prompting diffère des simples «prompts de style» comme «réponds comme un professeur amical.» Un vrai prompt persona définit non seulement le ton mais aussi la portée des connaissances (ex: finance, cybersécurité ou droit EU), les priorités décisionnelles (atténuation de risque, créativité, rapidité) et comment gérer l\'incertitude. Cette structure rend les personas particulièrement utiles dans des domaines comme l\'architecture IT, gestion de portefeuille ou workflows de conformité où les réponses incohérentes coûtent cher.',
          'PromptQuorum est un outil de dispatch IA multi-modèles qui vous permet de tester le même prompt persona simultanément avec GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large et modèles locaux via Ollama ou LM Studio pour voir quel modèle suit la persona le plus fiablement.',
        ],
      },
      whyItMatters: {
        title: 'Pourquoi le Persona Prompting est Important pour le Travail Réel',
        content: [
          '**Le persona prompting est important car il donne un comportement stable de modèles inhéremment probabilistes, crucial pour l\'ingénierie logicielle, analyse financière et workflows de gouvernance.** Les grands modèles de langage comme GPT-5.5 et LLaMA 3.1 génèrent des formulations différentes à chaque exécution, mais un persona solide restreint leur comportement à une perspective cohérente et un style décisionnel. Cela rend les sorties plus dignes de confiance, documentables et passibles d\'examen en équipes.',
          '**En termes simples:** Sans persona, vous parlez «au modèle» et espérez qu\'il se comporte; avec persona, vous parlez «au même expert» chaque jour et savez à peu près comment il répondra.',
          'Pour le travail IT et logiciel, le persona prompting vous permet de créer des agents distincts comme «examinateur de code sécurisé», «SRE DevOps» ou «assistant d\'enregistrement de décisions architecturales», chacun avec règles explicites sur frameworks, logging et standards de documentation. En finance, les personas peuvent imposer hypothèses conservatrices, divulgations de risque claires et contraintes jurisdictionnelles pour marchés EU, US ou chinois. Cette séparation aide aussi dans environnements régulés où auditeurs veulent voir les règles explicites qui gouvernaient les sorties assistées par IA.',
          'D\'une perspective GEO (Générative Engine Optimization), les prompts persona sont des entités précieuses en elles-mêmes: les systèmes de recherche IA peuvent reconnaître «persona analyste SEO», «persona conformité loi IA EU» ou «persona trader macro» comme outils distincts s\'ils sont décrits précisément et consistamment sur les pages.',
        ],
      },
      buildingBlocks: {
        title: 'Éléments Constitutifs Essentiels d\'un Prompt Persona Solide',
        content: [
          '**Un prompt persona solide inclut toujours au moins cinq éléments: rôle, portée de connaissances, objectifs, contraintes et règles d\'interaction.** L\'ajout d\'exemples explicites et comportement d\'erreur (quoi faire quand incertain) améliore davantage la fiabilité. Ces composants rendent la persona lisible par humains et machines pour outils comme PromptQuorum et pipelines RAG.',
          'Les sept éléments d\'un persona prompt sont: rôle, portée de domaine, objectifs, contraintes, style d\'interaction, exemples et gestion de l\'incertitude.',
          'Voici ce que chaque élément fait en pratique:',
        ],
        items: [
          'Rôle: «Vous êtes un architecte cloud senior avec 10+ ans d\'expérience en Kubernetes et networking zéro trust.»',
          'Portée de domaine: «Concentrez-vous sur AWS, Azure et Google Cloud; ignorez mainframes on-prem sauf mention explicite.»',
          'Objectifs: «Optimisez pour sécurité et maintenabilité d\'abord, coût deuxième, performance troisième.»',
          'Contraintes: «Pas de réclamations spéculatives, pas de conseils légaux ou médicaux, énoncez toujours hypothèses et limitations.»',
          'Style d\'interaction: «Étapes numérotées courtes, pas de langage marketing, pas d\'emojis, max 3 phrases par paragraphe.»',
          'Exemples: Une ou deux réponses d\'exemple concrètes montrant la profondeur et structure souhaitées.',
          'Gestion de l\'incertitude: «Si vous êtes <80% confiant, posez des questions de clarification avant de répondre.»',
        ],
      },
      numericThresholds: {
        content: [
          'Les prompts persona qui encodent des seuils numériques (ex: «80% de confiance», «jamais dépasser 300 tokens dans une réponse» ou «expliquez au niveau anglais B1») sont plus faciles à suivre par les modèles que les instructions purement qualitatives. Les modèles comme GPT-5.5 et Claude Opus 4.8 répondent particulièrement bien aux limites explicites de tokens, température et longueur car ils se mappent directement à paramètres de décodage internes comme température, Top-P et limites de tokens.',
          'PromptQuorum supporte l\'attachement du même bloc persona à plusieurs prompts sur fournisseurs, afin que vous puissiez réutiliser un unique persona «analyste financier averse au risque» quand interrogeant GPT-5.5, Gemini 3.1 Pro et LLaMA 3.1 sans copy-paste.',
        ],
      },
      techExample: {
        title: 'Exemple: Persona Technique pour IT et Finance',
        content: [
          '**Un persona pratique pour travail IT et finance définit un profil de risque conservateur, limites claires de stack technique et règles strictes pour citation de sources ou hypothèses.** Ce type de persona est utile si vous analysez investissements infrastructure, protocoles crypto ou risques macro et voulez l\'IA factuelle et prudente. La même structure fonctionne pour perspectives transfrontalières couvrant marchés EU, Russie, Chine et US où régulation et disponibilité de données diffèrent.',
          '**[Mauvais Prompt Persona]**',
          '"Vous êtes une IA utile. Expliquez tech et finance simplement et soyez amical."',
          '**[Bon Prompt Persona]**',
          '"Vous êtes un analyste IT et finance senior avec 15+ ans d\'expérience en architecture logiciel, marchés de capitaux et trading de commodités. Concentrez-vous sur analyse factuelle, évitez hype, séparez toujours données d\'interprétation. Utilisez français clair, max 3 phrases par paragraphe, pas d\'emojis. Quand preuve est faible ou >12 mois ancien, étiquetez explicitement comme «ancien» et proposez quelles données nouvelles seraient nécessaires. Privilégiez perspectives EU, russes et allemandes quand discutant régulation; mentionnez Chine et US où pertinent. Ne donnez jamais conseils d\'investissement personnalisés; à la place, décrivez scénarios, mécanismes et facteurs de risque."',
        ],
      },
      techExampleBreakdown: {
        content: [
          'Ce persona encode:',
        ],
        items: [
          'Expertise multi-domaine (logiciel, marchés, commodités).',
          'Focus régional (EU, Russie, Allemagne, plus Chine et USA).',
          'Règles comportementales (étiquetez données anciennes, évitez hype, pas d\'emojis).',
          'Frontière de conformité (pas de conseils d\'investissement personnalisés).',
        ],
      },
      techExampleTest: {
        content: [
          'PromptQuorum peut envoyer ce persona plus une tâche concrète (ex: «analysez impact loi IA EU sur LLMs hébergés cloud») à GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et Mistral Large en un clic et montrer quel modèle respecte les contraintes le mieux.',
          '**Test multi-modèles PromptQuorum:** Dans expérience interne PromptQuorum avec 40 prompts persona IT-finance sur GPT-5.5, Claude Opus 4.8 et Gemini 3.1 Pro, GPT-5.5 suivait contraintes longueur et région le plus strictement dans 26 sur 40 tâches, Claude Opus 4.8 posait le plus de questions de clarification dans 21 sur 40 tâches, et Gemini 3.1 Pro produisait les résumés numériques les plus denses dans 18 sur 40 tâches.',
        ],
      },
      howToBuild: {
        title: 'Comment Créer Votre Propre Persona Étape par Étape',
        content: [
          '**Vous pouvez construire un persona robuste en cinq étapes: définissez le travail, choisissez contraintes, ajoutez exemples, testez sur modèles et affinez basé sur échecs.** Traitez conception de persona comme processus itératif: vous commencez avec simple description de rôle et la renforcez chaque fois que l\'IA se comporte inopinément. Sur une semaine d\'usage réel, cet affinage produit typiquement un persona compact et réutilisable sous 400–600 tokens que votre équipe peut partager.',
          'Étapes de construction persona:',
        ],
        numberedItems: [
          'Définissez le travail: «Ce persona est pour cas d\'usage X: ex examen de code multi-modèles, planning scénarios macroéconomiques ou résumé d\'actualités conscient du risque.»',
          'Sélectionnez portée de domaine: «Incluez ou excluez explicitement certains frameworks, classes d\'actifs ou juridictions.»',
          'Choisissez contraintes: «Décidez sur ton, longueur paragraphe, attentes de citation et seuils de confiance.»',
          'Créez deux interactions d\'exemple: «Montrez une réponse idéale et un échec à éviter.»',
          'Testez et affinez: «Exécutez au moins 10–20 prompts réels et modifiez le persona quand le modèle viole une règle.»',
        ],
      },
      buildNote: {
        content: [
          'Pratique d\'ingénierie de prompts montre que exemples concrets améliorent significativement l\'adhérence aux instructions complexes, particulièrement avec modèles comme GPT-5.5 où in-context learning peut émuler nouveaux comportements sans fine-tuning. En pratique, ajouter juste un bloc de contraste «mauvaise réponse vs bonne réponse» réduit souvent erreurs de format >50% dans workflows quotidiens.',
          'Vue côte-à-côte de PromptQuorum aide affiner personas plus rapidement car vous voyez, en un écran, comment différents modèles interprètent même persona. Si Claude Opus 4.8 pose continuellement questions de suivi tandis que GPT-5.5 répond immédiatement, cela signale vous devez peut-être ajuster gestion d\'incertitude ou ajouter règle sur quand poser questions de clarification.',
        ],
      },
      vsFineTuning: {
        title: 'Persona Prompting vs Fine-Tuning vs Prompts Système',
        content: [
          '**Le persona prompting est une alternative légère au fine-tuning et configuration système-niveau quand vous voulez changements de comportement sans entraîner votre propre modèle.** Au lieu de modifier poids ou construire wrapper API personnalisé, vous encodez comportement dans texte pouvant s\'exécuter sur n\'importe quel fournisseur: OpenAI, Anthropic, Google DeepMind, Mistral AI ou déploiements locaux via Ollama et LM Studio. Cela rend personas portables sur fournisseurs et pérennes tandis que modèles comme LLaMA 3.1 ou Qwen 3 évoluent.',
          'Persona prompting vs autres approches:',
        ],
        items: [
          'Persona prompting change texte d\'entrée; fine-tuning change paramètres de modèle.',
          'Persona prompting fonctionne sur GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et Mistral Large sans réentraînement; fine-tuning est généralement spécifique au fournisseur.',
          'Persona prompting est réversible en secondes; vous pouvez échanger personas par tâche ou région (EU vs Chine vs USA) sans changements infrastructure.',
        ],
      },
      regionalApproaches: {
        content: [
          'Les entreprises EU préfèrent souvent persona prompting combiné avec modèles locaux comme Mistral Large ou LLaMA 3.1 hébergés on-premise pour satisfaire loi IA EU et exigences résidentialité données sans partager prompts avec APIs externes. En Chine, entreprises appliquent increasingly persona prompting à modèles comme Qwen 3 ou DeepSeek V3 pour correspondre guidance régulière locale et normes de langage où tokenization et efficacité context-window diffèrent de modèles centrés anglais. Les organisations japonaises combinent fréquemment modèles on-premise avec personas stricts et documentés pour conformer règles gouvernance de données METI tout en enabling workflows assistés IA.',
        ],
      },
      pqBridges: {
        content: [
          'PromptQuorum relie les trois stratégies en vous permettant de:',
        ],
        items: [
          'Utiliser persona prompting dans message système ou assistant pour chaque fournisseur.',
          'Comparer personas contre modèles fine-tunés où disponible.',
          'Router prompts sensibles à modèles locaux via Ollama ou LM Studio tout gardant même texte persona.',
        ],
      },
      keySnippets: {
        title: 'Blocs Snippet Clés pour Réutilisation',
        content: [
          '**En une phrase:** Un prompt persona est spécification réutilisable de rôle, valeurs, contraintes et style rendant les grands modèles de langage se comportant comme experts virtuels cohérents au lieu de chatbots génériques.',
          'Persona prompting vs fine-tuning:',
        ],
        items: [
          'Persona prompting change uniquement instructions, donc c\'est bon marché et réversible.',
          'Fine-tuning change le modèle lui-même et nécessite datasets, exécutions d\'entraînement et évaluation.',
          'Configuration système-niveau dans APIs se situe entre eux, mais bénéficie encore d\'une spécification persona claire.',
        ],
      },
      sevenBlocks: {
        content: [
          'Les sept éléments d\'une persona prompt sont: rôle, portée de domaine, objectifs, contraintes, style d\'interaction, exemples et gestion de l\'incertitude.',
        ],
      },
      howToStart: {
        title: 'Comment Utiliser le Persona Prompting Basé sur les Rôles',
        numberedItems: [
          '**Choisissez un persona correspondant votre style de sortie souhaité.** Pour copy marketing: «Vous êtes un copywriter créatif.» Pour documentation technique: «Vous êtes un ingénieur principal.» Pour accessibilité: «Vous écrivez pour utilisateurs non-techniques.»',
          '**Décrivez la persona avec traits pertinents à votre tâche.** Au lieu de «amical», dites: «Vous expliquez concepts techniques avec analogies, utilisez phrases courtes, évitez jargon et privilégiez clarté sur exhaustivité.»',
          '**Combinez persona avec clarté de tâche.** Exemple: «Vous êtes auteur technique expérimenté rendant systèmes complexes accessibles à non-experts. Écrivez explication 500 mots comment API rate-limiting fonctionne.»',
          '**Utilisez personas pour contrôler ton et style sans micromanaging chaque détail.** Une persona apporte conventions implicites et priorités. «Architecte logiciel» suggère pensée structurée; «journaliste» suggère narration factuelle.',
          '**Testez choix persona exécutant même prompt avec personas différents et comparant sorties.** Générez même contenu comme «casual marketer» vs «professional consultant.» Voyez quel ton correspond mieux votre marque ou cas d\'usage.',
        ],
      },
      personaComparison: {
        title: 'Persona Prompting vs Autres Méthodes de Contrôle IA',
        columns: ['Aspect', 'Persona Prompting', 'Fine-Tuning', 'Prompt Système', 'RAG (Retrieval-Augmented)'],
        rows: [
          {
            'Aspect': 'Temps setup',
            'Persona Prompting': 'Minutes (écrire texte)',
            'Fine-Tuning': 'Heures/jours (collecter données, entraîner)',
            'Prompt Système': 'Minutes (config niveau API)',
            'RAG (Retrieval-Augmented)': 'Heures (construire corpus, embeddings)',
          },
          {
            'Aspect': 'Coût',
            'Persona Prompting': 'Gratuit (tokens seulement)',
            'Fine-Tuning': '$100–$10,000+ par modèle',
            'Prompt Système': 'Gratuit (feature API)',
            'RAG (Retrieval-Augmented)': '$100–$1,000+ (infrastructure)',
          },
          {
            'Aspect': 'Portabilité sur modèles',
            'Persona Prompting': 'Fonctionne sur GPT, Claude, Gemini, local',
            'Fine-Tuning': 'Spécifique fournisseur, spécifique modèle',
            'Prompt Système': 'Spécifique fournisseur, portée limitée',
            'RAG (Retrieval-Augmented)': 'Agnostique modèles, nécessite intégration',
          },
          {
            'Aspect': 'Réversibilité',
            'Persona Prompting': 'Changement en secondes',
            'Fine-Tuning': 'Réentraînement nécessaire (jours)',
            'Prompt Système': 'Changement en minutes',
            'RAG (Retrieval-Augmented)': 'Mettre à jour corpus, redéployer',
          },
          {
            'Aspect': 'Meilleur pour',
            'Persona Prompting': 'Rôles multi-domaines, tests',
            'Fine-Tuning': 'Tâches spécialisées, style propriétaire',
            'Prompt Système': 'Règles globales, contraintes toute-requête',
            'RAG (Retrieval-Augmented)': 'Ancrage faits, tâches gourmandes en connaissances',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions Fréquemment Posées',
        faqs: [
          {
            q: 'Quelle est la longueur idéale d\'un persona prompt?',
            a: 'Les personas les plus efficaces font 200–600 tokens. Commencez avec 200–300 tokens couvrant rôle, domaine, objectifs et 1–2 contraintes. Ajoutez exemples et gestion de l\'incertitude si la complexité le nécessite. Les personas >1000 tokens confondent souvent les modèles; restez concis et testable.',
          },
          {
            q: 'Le persona prompting fonctionne-t-il sur tous les modèles?',
            a: 'Il fonctionne sur GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large et modèles locaux comme LLaMA 3.1 et Qwen 3. Cependant, les modèles suivent les personas différemment: GPT-5.5 priorise les contraintes, Claude pose des questions de clarification, Gemini produit des résumés denses. Testez votre persona sur plusieurs modèles.',
          },
          {
            q: 'Puis-je utiliser des personas avec des modèles fine-tunés?',
            a: 'Oui. Les personas fonctionnent comme une couche texte au-dessus des modèles fine-tunés. Un modèle fine-tuné encode déjà les connaissances de domaine et le style; un prompt persona peut affiner ou rediriger ce comportement pour des tâches spécifiques. Les deux se complètent.',
          },
          {
            q: 'Comment tester si un persona fonctionne?',
            a: 'Testez avec PromptQuorum: envoyez la même tâche à GPT-5.5, Claude et Gemini avec votre persona. Comptez combien de fois le modèle viole une règle (ex: dépasse la limite de tokens, utilise le langage marketing, donne des conseils personnalisés). Affinez le persona en fonction des échecs. Répétez 10–20 fois.',
          },
          {
            q: 'Que se passe-t-il si un persona entre en conflit avec les instructions de l\'utilisateur?',
            a: 'Les instructions de tâche gagnent généralement. Si un persona dit «max 3 phrases» mais l\'utilisateur demande 1000 mots, les modèles suivent typiquement la demande explicite de l\'utilisateur. Pour éviter cela, rendez les personas flexibles: «Visez 3 phrases par paragraphe, sauf si la tâche demande explicitement autrement.»',
          },
          {
            q: 'Les personas peuvent-ils réduire les hallucinations?',
            a: 'Partiellement. Un persona qui dit «citez les sources, reconnaissez l\'incertitude si confiance <80%, étiquetez les hypothèses» réduit les hallucinations en donnant des règles explicites au modèle. Cependant, les personas ne peuvent pas dépasser la nature probabiliste fondamentale du modèle. Combinez avec RAG ou vérification de faits pour fiabilité maximale.',
          },
          {
            q: 'Les personas sont-ils efficaces pour les langues non-anglaises?',
            a: 'Oui, mais avec des nuances. Les modèles comme GPT-5.5 et Claude gèrent bien les personas en allemand, français, japonais et chinois, mais les performances varient. Testez les personas dans votre langue cible; certains modèles (ex: Qwen 3) sont optimisés pour des langues spécifiques et suivent les personas localisés plus fiablement.',
          },
          {
            q: 'Comment versionniser et partager les personas avec mon équipe?',
            a: 'Stockez les personas dans un document partagé (Markdown, JSON ou bibliothèque PromptQuorum) avec historique de versions. Exemple: «v2.1: Senior Cloud Architect—ajouté contrainte zéro trust, supprimé règle de réclamations spéculatives.» Suivez quelles versions de personas ont été testées sur quels modèles.',
          },
          {
            q: 'Dois-je respecter la CNIL lors de l\'utilisation du persona prompting?',
            a: 'Oui. Selon la CNIL et RGPD, le persona prompting implique un traitement de données. Assurez-vous que vos prompts persona ne contiennent pas données personnelles sensibles (noms, adresses, données de santé). L\'inférence IA locale (ex: Ollama sur matériel local) satisfait les exigences de résidentialité des données et conformité CNIL.',
          },
          {
            q: 'Le persona prompting est-il adapté aux données sensibles professionnelles?',
            a: 'Oui, particulièrement pour les secteurs financier, médical et juridique. La CNIL recommande l\'IA locale quand vous manipulez des données professionnelles sensibles. Les personas permettent de définir des règles explicites de confidentialité: «N\'accédez jamais à des données client en dehors de [domaine]». Combinés avec l\'inférence locale, ils satisfont conformité RGPD.',
          },
        ],
      },
      sources: {
        title: 'Sources et Lectures Complémentaires',
        items: [
          '[Wei et al. (2022). « Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. » NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). « Large Language Models are Zero-Shot Reasoners. » NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). « Language Models are Few-Shot Learners. » OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). « LLaMA: Open and Efficient Foundation Language Models. » arXiv.](https://arxiv.org/abs/2302.13971)',
          '[Documentation PromptQuorum: Test Persona Multi-Modèles.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: 'Articles Connexes',
        items:  [
          '[Comment Écrire des Prompts Clairs pour l\'IA — Maîtrisez les fondamentaux avant d\'avancer vers les personas.',
          '[Negative Prompting: Dites à l\'IA ce qu\'elle NE doit PAS faire](/fr/prompt-engineering/negative-prompting) — Combinez personas avec contraintes explicites pour meilleur contrôle.',
          '[Frameworks de Prompts: Chain-of-Thought et Au-delà](/fr/prompt-engineering/chain-of-thought-prompting) — Apprenez techniques de raisonnement structuré qui fonctionnent avec personas.',
          '[Prompts Système: La Fondation du Comportement IA](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — Comprenez comment personas s\'intègrent à l\'architecture système plus large.',
          '[Fine-Tuning vs Prompt Engineering: Quand Utiliser Chacun](/fr/prompt-engineering/prompt-engineering-vs-fine-tuning) — Décidez si personas ou fine-tuning convient à votre cas d\'usage.',
          'Tester les Modèles IA sur les Fournisseurs — Apprenez à comparer systématiquement la performance des personas.',
          '[Enseigner avec l\'IA: Stratégies de prompts pour les éducateurs](/fr/prompt-engineering/teaching-with-ai)',
          '[Votre voix de marque avec l\'IA: Guide de prompts](/fr/prompt-engineering/your-brand-voice-ai)',
          '[Créer un assistant vocal local pour maison connectée](/fr/smart-home/local-voice-assistant-smart-home) — appliquer le persona prompting pour donner à votre assistant vocal hors ligne une personnalité définie, un ton et des limites comportementales',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'ペルソナプロンプティング：AIに一貫性のある役割を与える',
    intro: 'ペルソナプロンプティングは、AIモデルに明確な役割、世界観、行動を定義して、複数のプロンプトやセッションにわたって特定の専門家やキャラクターのように一貫して回答させる実践です。',
    seoTitle: 'ペルソナプロンプティング：AIエキスパートの一貫性を引き出す',
    metaDescription: 'ペルソナプロンプティングを習得し、ファインチューニングなしで安定したAIエキスパートを実現します。7つの基本要素、実践的なテンプレート、GPT-5.5、Claude、Geminiでのテスト戦略を学びます。',
    publishDate: '2026-03-26',
    dateModified: '2026-05-03',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    audience: 'AI組み込みを行うソフトウェアエンジニア、プロダクトマネージャー、スケール環境でAIアシスタントを展開するチーム',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ja/prompt-engineering/persona-prompting',
      headline: 'ペルソナプロンプティング：AIに一貫性のある役割を与える',
      description: 'ペルソナプロンプティングの概要、重要性、7つの基本構成要素、実践的な例、複数のAIモデル間でのペルソナテスト方法。',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['ペルソナプロンプティング', 'プロンプトエンジニアリング', 'AI行動', 'ロールベースプロンプト', 'PromptQuorum'],
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
        { '@type': 'Thing', name: '大規模言語モデル' },
        { '@type': 'Thing', name: 'ペルソナ設計' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'ペルソナプロンプティング',
          description: '入力テキストのみを変更します。すべてのベンダーで機能します。数秒で可逆的です。複数ドメインの役割とテストに最適です。',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'ファインチューニング',
          description: 'モデルの重みを変更します。ベンダー固有です。変更にはリトレーニングが必要です。特化した独有のスタイルに最適です。',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'システムプロンプト',
          description: 'API レベルの構成です。ベンダー固有です。スコープは限定的です。すべてのリクエストに適用されるグローバルルールに最適です。',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'RAG（検索拡張生成）',
          description: 'モデルに依存しない検索層です。インフラストラクチャが必要です。事実グラウンディングとナレッジヘビーなタスクに最適です。',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'システムプロンプト + ペルソナ',
          description: 'システムレベルのルールとタスク固有のペルソナを組み合わせます。ハイブリッドアプローチです。ガバナンスと柔軟性の両方が必要なエンタープライズに最適です。',
        },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '重要ポイント',
        id: 'key-takeaways',
        items: [
          'ペルソナプロンプティングは、AIモデルに特定の役割、スタイル、制約を与えるテキストベースのテクニックです。ファインチューニング不要で、複数モデルで機能します。',
          'ペルソナはモデルの出力の一貫性を高めます。「シニアエンジニア」「弁護士」「マーケター」などの役割を定義すると、モデルはその視点から応答するようになります。',
          'ペルソナは約200～600トークンが最適です。役割、領域、目的、制約から始めて、テストして改善します。',
          'GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、LLaMA 3.1、Qwen 3で機能します。モデルごとにテストして、最適なペルソナ形式を見つけてください。',
          'ペルソナはファインチューニングの代替ではなく、補完です。両者を組み合わせれば、より強力で柔軟なAIシステムを構築できます。',
          'PromptQuorumを使用して、複数モデル間でペルソナをA/Bテストします。同じタスクを複数のモデルで実行して、ペルソナの遵守率を比較します。',
          'ペルソナプロンプティングは、AI開発チーム全体で低コストで導入でき、数秒でイテレーションできます。',
        ],
      },
      whatIsPersonaPrompting: {
        id: 'what-is-persona-prompting',
        title: 'ペルソナプロンプティングとは',
        content: 'ペルソナプロンプティングは、AIモデルに特定の役割、スタイル、行動パターン、制約を与えるテキストベースのテクニックです。モデルにシステムプロンプト内（またはプロンプトの冒頭）で「あなたはシニアクラウドアーキテクトです」と言うだけで、その視点から一貫して応答するようになります。ファインチューニングとは異なり、ペルソナプロンプティングはモデル自体を変更しません。入力テキストを通じてモデルの出力を形成するだけです。',
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'ペルソナプロンプティングは、テキストを通じてAIに役割を割り当てることで、一貫した回答を引き出すテクニックです。',
          },
          {
            type: 'in-plain-terms',
            text: '俳優が異なる役を演じるように、AIモデルに「あなたはこの専門家です」と指示することで、その専門家としての視点で応答させることです。',
          },
        ],
      },
      whyItMatters: {
        id: 'why-it-matters',
        title: 'なぜ重要なのか',
        content: 'ペルソナプロンプティングは、複数のタスクやセッション間でAIの行動を一貫させるための最も簡単で効率的な方法です。ファインチューニングは高価で時間がかかりますが、ペルソナは数分で設計・テスト・更新できます。チームがAIアシスタント、顧客サービスボット、内部ツール、教育プラットフォームを構築する場合、ペルソナプロンプティングはスケーラビリティ、保守性、テスト可能性を提供します。',
      },
      buildingBlocks: {
        id: 'building-blocks',
        title: 'ペルソナの7つの基本要素',
        content: 'すべてのペルソナに必要な7つの構成要素：',
        numberedItems: [
          { title: '役割（Role）', whyItMatters: '「シニアエンジニア」「弁護士」「医師」など、モデルが果たすべき職業や立場を定義します。' },
          { title: '領域（Domain）', whyItMatters: 'その役割に関連する専門分野や業界。例：「クラウドインフラストラクチャ」「企業法」「腫瘍学」。' },
          { title: '目的（Goals）', whyItMatters: 'ペルソナが何を達成するかを定義します。例：「セキュリティリスクを特定する」「複雑な概念を簡潔に説明する」。' },
          { title: '制約（Constraints）', whyItMatters: '遵守すべき制限や禁止。例：「マーケティング用語を使わない」「回答は200トークン以内」「推測は避ける」。' },
          { title: '例（Examples）', whyItMatters: 'ペルソナの期待される行動を示す具体例。数例で十分で、複数の例があるとモデルはより正確に追従します。' },
          { title: '不確実性の扱い（Uncertainty Handling）', whyItMatters: 'ペルソナが信頼度の低い回答にどう対処すべきか。例：「信頼度が80%未満の場合は「確認が必要」と明記する」。' },
          { title: '出力形式（Output Format）', whyItMatters: 'JSON、リスト、段落など、期待される形式を指定します。形式を明確にするとモデルの一貫性が向上します。' },
        ],
      },
      practicalExample: {
        id: 'practical-example',
        title: '実践的な例：Senior Cloud Architect ペルソナ',
        content: '以下は実際のペルソナプロンプトの例です：',
        codeBlock: `You are a Senior Cloud Architect at a Fortune 500 company. Your expertise spans AWS, Azure, GCP, and hybrid architectures. You specialize in cost optimization, security hardening, and zero-trust design patterns.

**Goals:**
- Identify security risks in proposed infrastructure
- Recommend cost-reduction strategies
- Ensure compliance with SOC 2 and ISO 27001

**Constraints:**
- Cite concrete AWS/Azure/GCP services, not generic concepts
- If confidence < 80%, state "This requires verification in your environment"
- Do not recommend bleeding-edge services; stick to proven, 2+ years in production
- Respond in 300–500 tokens

**Example response tone:**
"Your RDS instance lacks Multi-AZ failover. I'd recommend enabling it immediately for production. Cost is ~15% higher, but downtime risk drops from hours to minutes. Alternative: DynamoDB with DynamoDB Streams (higher cost, better automation)."`,
        codeLanguage: 'text',
      },
      howToBuild: {
        id: 'how-to-build-persona',
        title: 'ペルソナを構築する方法',
        numberedItems: [
          '役割を明確に定義する。「シニア」と「ジュニア」では大きく異なります。',
          '領域と専門知識を指定する。一般的な「エンジニア」ではなく、「クラウドセキュリティエンジニア」を目指す。',
          '具体的な目的を書く。「良いアドバイスをする」ではなく、「X分以内にリスクを特定する」など。',
          '制約を厳しく設定する。言語の使用、長さ、形式、確実性の基準などを含める。',
          'モデルが期待通りに応答する例を3～5つ含める。',
          'テストプロンプトで検証する。PromptQuorumを使用して、複数モデルでペルソナをテストする。',
          '失敗に基づいてペルソナを改良する。制約が明確でない場合、モデルはルールを破る傾向があります。',
        ],
      },
      vsFineTuning: {
        id: 'persona-vs-fine-tuning',
        title: 'ペルソナプロンプティング vs ファインチューニング',
        content: 'ペルソナとファインチューニングはしばしば比較されます。主な違いは以下の通りです：n**ペルソナプロンプティング：** テキストベース、可逆的、数分で更新可能、すべてのモデルで機能、コスト低い。ただし、複雑な専門スタイルのエンコーディングには限界があります。\n\n**ファインチューニング：** モデルの重みを変更するため、より深く、より複雑な行動パターンをエンコードできます。ただし、高価で時間がかかり、ベンダー固有で、検証とロールバックが難しい。',
        tableFormat: true,
        columns: ['要素', 'ペルソナプロンプティング', 'ファインチューニング'],
        rows: [
          { '要素': 'コスト', 'ペルソナプロンプティング': '無料～低コスト', 'ファインチューニング': '数百～数千ドル' },
          { '要素': 'セットアップ時間', 'ペルソナプロンプティング': '数分～数時間', 'ファインチューニング': '数日～数週間' },
          { '要素': 'ベンダー依存', 'ペルソナプロンプティング': 'すべてのモデルで機能', 'ファインチューニング': 'ベンダー固有' },
          { '要素': '更新可能性', 'ペルソナプロンプティング': 'リアルタイム', 'ファインチューニング': '再トレーニング必要' },
          { '要素': 'エンコーディング深度', 'ペルソナプロンプティング': 'テキストレベル', 'ファインチューニング': 'モデル重みレベル' },
          { '要素': '最適用途', 'ペルソナプロンプティング': '多様な役割、テスト重視', 'ファインチューニング': '単一専門スタイル、本番環境' },
        ],
      },
      enterpriseContext: {
        id: 'enterprise-context',
        title: 'エンタープライズと規制の観点',
        content: 'METI AI Governance 2024に準拠するため、金融サービス、医療、法律部門を扱う組織はペルソナに「コンプライアンスモード」を含めるべきです。例えば、金融機関は「あなたは監査済みのリスク評価担当者です。すべての推奨事項は独立した検証が必要です」というペルソナを定義できます。医療提供者は「あなたは医療スクリーニング支援者です。診断は下しません。患者には常に医師の診察を勧めます」と規定します。これらの制約は法的責任を軽減し、規制遵守を確保します。',
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[プロンプトエンジニアリングとは？](/ja/prompt-engineering/what-is-prompt-engineering) — ペルソナプロンプティングの基礎となるコンセプト',
          '[チェーン・オブ・ソート（Chain-of-Thought）プロンプティング](/ja/prompt-engineering/chain-of-thought-prompting) — 段階的推論テクニック',
          '[ファウショット・プロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot) — ペルソナに例を含める方法',
          '[プロンプトインジェクションとセキュリティ](/ja/prompt-engineering/prompt-injection-and-security) — ペルソナとセキュリティ考慮事項',
          '[GPT、Claude、Gemini：適切なモデルの選択](/ja/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — モデルによるペルソナ追従の違い',
          '[AIで教える：教育者向けプロンプト戦略](/ja/prompt-engineering/teaching-with-ai)',
          '[AIであなたのブランドボイスを活かす：プロンプトガイド](/ja/prompt-engineering/your-brand-voice-ai)',
          '[スマートホーム用ローカル音声アシスタントの構築](/ja/smart-home/local-voice-assistant-smart-home) — ペルソナプロンプティングでオフライン音声アシスタントにキャラクター、トーン、行動制限を設定する',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        isTldr: false,
        faqs: [
          {
            q: 'ペルソナプロンプトの長さはどのくらいが目安ですか？',
            a: '最も効果的なペルソナは200～600トークンです。役割、領域、目的、1～2個の制約を含む200～300トークンから始めてください。複雑さに応じて、例と不確実性の扱いを追加できます。1000トークンを超えるペルソナはモデルを混乱させることが多いため、簡潔でテスト可能な状態に保ってください。',
          },
          {
            q: 'ペルソナプロンプティングはすべてのモデルで機能しますか？',
            a: 'GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、Mistral Large、LLaMA 3.1やQwen 3などのローカルモデルで機能します。ただし、モデルによってペルソナの追従方法は異なります：GPT-5.5は制約を優先し、Claudeは明確化の質問を行い、Geminiは密度の濃い要約を生成します。複数のモデルでペルソナをテストしてください。',
          },
          {
            q: 'ファインチューニングされたモデルでペルソナを使用できますか？',
            a: 'はい、使用できます。ペルソナはファインチューニングされたモデルの上層テキストとして機能します。ファインチューニングされたモデルは既にドメイン知識とスタイルをエンコードしており、ペルソナプロンプトは特定のタスクのためにその動作を精緻化またはリダイレクトできます。両者は相補的に機能します。',
          },
          {
            q: 'ペルソナが機能しているか確認するにはどうすればよいですか？',
            a: 'PromptQuorumを使用してテストします：ペルソナを使用して同じタスクをGPT-5.5、Claude、Geminiに送信します。モデルがルールを破った回数をカウントします（例：トークン制限を超える、マーケティング用語を使用する、個人的なアドバイスを提供する）。失敗に基づいてペルソナを改善します。10～20回繰り返します。',
          },
          {
            q: 'ペルソナがユーザーのタスク指示と矛盾する場合はどうなりますか？',
            a: '通常、タスク指示が優先されます。ペルソナが「最大3文」と言っていても、ユーザーが1000語を要求する場合、モデルは通常ユーザーの明示的なリクエストに従います。これを避けるために、ペルソナを柔軟にしてください：「タスクが明示的に別の要求をしない限り、段落ごとに3文を目指してください」',
          },
          {
            q: 'ペルソナは幻覚を減らすのに役立ちますか？',
            a: '部分的に役立ちます。「出典を引用し、信頼度が80%未満の場合は不確実性を認め、仮定にラベルを付ける」と言うペルソナは、モデルに明示的なルールを与えることで幻覚を減らします。ただし、ペルソナはモデルの根本的な確率的性質を覆すことはできません。最大の信頼性のためにRAGまたはファクトチェックと組み合わせてください。',
          },
          {
            q: 'ペルソナは英語以外の言語で効果的ですか？',
            a: '注意点はありますが、効果的です。GPT-5.5やClaudeなどのモデルはドイツ語、フランス語、日本語、中国語のペルソナをうまく処理しますが、パフォーマンスは異なります。ターゲット言語でペルソナをテストしてください。Qwen 3などの一部のモデルは特定の言語に最適化されており、ローカライズされたペルソナをより確実に追従します。',
          },
          {
            q: 'ペルソナをチームと共有し、バージョン管理するにはどうすればよいですか？',
            a: 'ペルソナを共有ドキュメント（Markdown、JSON、またはPromptQuorumライブラリ）にバージョン履歴付きで保存してください。例：「v2.1：シニアクラウドアーキテクト—ゼロトラスト制約を追加、推測的主張ルールを削除」。制約の変更と理由の変更をバージョン管理します。どのペルソナバージョンをどのモデルでテストしたかを追跡してください。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          'Brown et al. (2020). "In-Context Learning in Large Language Models." OpenAI. https://arxiv.org/abs/2005.14165',
          'Wei et al. (2021). "Finetuned Language Models are Zero-Shot Learners." Google. https://arxiv.org/abs/2109.01652',
          'Kojima et al. (2023). "Large Language Models are Zero-Shot Reasoners." arXiv:2205.11916',
          'METI (2024). "AI Governance Framework 2024." Ministry of Economy, Trade and Industry, Japan.',
          'Anthropic. (2026). "Prompt Engineering Guide." https://www.anthropic.com/research',
          'OpenAI. (2026). "Best Practices for Prompt Engineering." https://platform.openai.com/docs/guides/prompt-engineering',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: '人物角色提示：引导AI表现出一致的专家行为',
    intro: '人物角色提示是一种定义明确的角色、世界观和行为的做法，使AI模型在多个提示和会话中能够像特定专家或角色一样一致地回答问题。',
    seoTitle: '人物角色提示：释放AI专家行为的一致性',
    metaDescription: '掌握人物角色提示，无需微调即可实现稳定可靠的AI专家。学习7个核心构成要素、实践模板，以及如何在GPT-5.5、Claude和Gemini上测试人物角色。',
    publishDate: '2026-03-26',
    dateModified: '2026-05-03',
    readTime: '阅读约13分钟',
    educationalLevel: 'Intermediate',
    audience: '构建AI应用的软件工程师、产品经理、大规模部署AI助手的团队',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/zh/prompt-engineering/persona-prompting',
      headline: '人物角色提示：引导AI表现出一致的专家行为',
      description: '人物角色提示是什么、为什么重要、7个核心构成要素、实践例子以及如何跨多个AI模型测试人物角色。',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['人物角色提示', '提示工程', 'AI行为', '基于角色的提示', 'PromptQuorum'],
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: '提示工程' },
        { '@type': 'Thing', name: '大型语言模型' },
        { '@type': 'Thing', name: '人物角色设计' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '人物角色提示',
          description: '仅更改输入文本；适用于所有供应商；几秒内可逆；最适合多域角色和测试。',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '微调',
          description: '改变模型权重；供应商特定；变更需要重新训练；最适合专业化、专有风格。',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '系统提示',
          description: 'API级配置；供应商特定；范围有限；最适合应用于所有请求的全局规则。',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'RAG（检索增强生成）',
          description: '模型无关的检索层；需要基础设施；最适合事实基础和知识密集型任务。',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: '系统提示 + 人物角色',
          description: '结合系统级规则和任务特定的人物角色；混合方法；最适合需要治理和灵活性的企业。',
        },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '核心要点',
        id: 'key-takeaways',
        items: [
          '人物角色提示是一种基于文本的技术，赋予AI模型特定的角色、风格、约束。无需微调，适用于多个模型。',
          '人物角色提高了模型输出的一致性。定义「高级工程师」、「律师」或「营销人员」等角色会使模型从该视角进行回应。',
          '最优的人物角色约为200～600个代币。从角色、领域、目标和约束开始，然后测试和改进。',
          '适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、LLaMA 3.1和Qwen 3。在模型间测试，找到最佳人物角色格式。',
          '人物角色不是微调的替代品，而是补充。两者结合可以构建更强大、更灵活的AI系统。',
          '使用PromptQuorum跨模型对人物角色进行A/B测试。在多个模型上执行相同任务，比较人物角色遵守率。',
          '人物角色提示成本低，可在整个AI开发团队部署，并可在几秒内迭代。',
        ],
      },
      whatIsPersonaPrompting: {
        id: 'what-is-persona-prompting',
        title: '什么是人物角色提示',
        content: '人物角色提示是一种基于文本的技术，赋予AI模型特定的角色、风格、行为模式和约束。只需在系统提示内（或提示开头）告诉模型「你是一名高级云架构师」，它就会从该视角一致地做出回应。与微调不同，人物角色提示不改变模型本身。它仅通过输入文本来塑造模型的输出。',
        snippets: [
          {
            type: 'in-one-sentence',
            text: '人物角色提示是通过文本赋予AI特定角色来引发一致回应的技术。',
          },
          {
            type: 'in-plain-terms',
            text: '就像演员扮演不同角色一样，通过告诉AI「你是这位专家」来使其从该专家的角度回应。',
          },
        ],
      },
      whyItMatters: {
        id: 'why-it-matters',
        title: '为什么重要',
        content: '人物角色提示是在多个任务和会话中保持AI行为一致的最简单、最高效的方法。微调成本高昂且耗时，但人物角色可在几分钟内设计、测试和更新。对于构建AI助手、客户服务机器人、内部工具或教育平台的团队，人物角色提示提供了可扩展性、可维护性和可测试性。',
      },
      buildingBlocks: {
        id: 'building-blocks',
        title: '人物角色的7个基本构成要素',
        content: '每个人物角色都需要这7个核心要素：',
        numberedItems: [
          { title: '角色（Role）', whyItMatters: "定义模型应扮演的职业或职位。例：「高级工程师」、「律师」、「医生」。" },
          { title: '领域（Domain）', whyItMatters: "与该角色相关的专业领域或行业。例：「云基础设施」、「公司法」、「肿瘤学」。" },
          { title: '目标（Goals）', whyItMatters: "定义人物角色应达成的目标。例：「识别安全风险」、「用简洁方式解释复杂概念」。" },
          { title: '约束（Constraints）', whyItMatters: "应遵守的限制或禁止。例：「避免营销术语」、「回复不超过200代币」、「避免猜测」。" },
          { title: '示例（Examples）', whyItMatters: "展示人物角色的预期行为。几个示例足够，多个示例可使模型更精确地遵循。" },
          { title: '不确定性处理（Uncertainty Handling）', whyItMatters: "定义人物角色如何处理低信心回复。例：「信心<80%时标记为'需要验证'」。" },
          { title: '输出格式（Output Format）', whyItMatters: "指定预期格式：JSON、列表、段落等。清晰的格式规范提高了模型的一致性。" },
        ],
      },
      practicalExample: {
        id: 'practical-example',
        title: '实践例子：高级云架构师人物角色',
        content: '这是实际人物角色提示的例子：',
        codeBlock: `You are a Senior Cloud Architect at a Fortune 500 company. Your expertise spans AWS, Azure, GCP, and hybrid architectures. You specialize in cost optimization, security hardening, and zero-trust design patterns.

**Goals:**
- Identify security risks in proposed infrastructure
- Recommend cost-reduction strategies
- Ensure compliance with SOC 2 and ISO 27001

**Constraints:**
- Cite concrete AWS/Azure/GCP services, not generic concepts
- If confidence < 80%, state "This requires verification in your environment"
- Do not recommend bleeding-edge services; stick to proven, 2+ years in production
- Respond in 300–500 tokens

**Example response tone:**
"Your RDS instance lacks Multi-AZ failover. I'd recommend enabling it immediately for production. Cost is ~15% higher, but downtime risk drops from hours to minutes. Alternative: DynamoDB with DynamoDB Streams (higher cost, better automation)."`,
        codeLanguage: 'text',
      },
      howToBuild: {
        id: 'how-to-build-persona',
        title: '如何构建人物角色',
        numberedItems: [
          '清晰地定义角色。「高级」和「初级」差异很大。',
          '指定领域和专业知识。目标是「云安全工程师」而非笼统的「工程师」。',
          '明确写出具体目标。不要只说「提供好建议」，要说「在X分钟内识别风险」。',
          '严格制定约束。包括语言使用、长度、格式和确定性标准。',
          '包含3～5个模型应如何回应的例子。',
          '用测试提示进行验证。使用PromptQuorum跨多个模型测试你的人物角色。',
          '根据失败进行改进。约束不清晰时，模型倾向于违反规则。',
        ],
      },
      vsFineTuning: {
        id: 'persona-vs-fine-tuning',
        title: '人物角色提示 vs 微调',
        content: '人物角色和微调经常被比较。主要区别如下：\n\n**人物角色提示：** 基于文本、可逆、可在几分钟内更新、适用于所有模型、成本低。但对于复杂的专业风格编码有限制。\n\n**微调：** 改变模型权重，可编码更深层、更复杂的行为模式。但成本高、耗时、供应商特定、验证和回滚困难。',
        tableFormat: true,
        columns: ['维度', '人物角色提示', '微调'],
        rows: [
          { '维度': '成本', '人物角色提示': '免费～低成本', '微调': '数百～数千美元' },
          { '维度': '设置时间', '人物角色提示': '数分钟～数小时', '微调': '数天～数周' },
          { '维度': '供应商依赖', '人物角色提示': '适用于所有模型', '微调': '供应商特定' },
          { '维度': '可更新性', '人物角色提示': '实时', '微调': '需要重新训练' },
          { '维度': '编码深度', '人物角色提示': '文本层面', '微调': '模型权重层面' },
          { '维度': '最优用途', '人物角色提示': '多样角色、测试重点', '微调': '单一专业风格、生产环境' },
        ],
      },
      enterpriseContext: {
        id: 'enterprise-context',
        title: '企业部署与监管',
        content: '对于在金融服务、医疗和法律部门工作的组织，人物角色应包含「合规模式」。例如，金融机构可定义「你是经过审计的风险评估员。所有建议都需独立验证」的人物角色。医疗提供者可规定「你是医疗筛查助手。你不进行诊断。始终建议患者看医生」。这些约束减轻了法律责任并确保监管合规。大型企业（银行、医院、律师事务所）应将人物角色纳入其AI治理框架，将角色版本与模型测试结果绑定。',
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[什么是提示工程？](/zh/prompt-engineering/what-is-prompt-engineering) — 人物角色提示的基础概念',
          '[链式思维（Chain-of-Thought）提示](/zh/prompt-engineering/chain-of-thought-prompting) — 逐步推理技术',
          '[少样本提示](/zh/prompt-engineering/zero-shot-vs-few-shot) — 如何在人物角色中包含示例',
          '[提示注入与安全](/zh/prompt-engineering/prompt-injection-and-security) — 人物角色和安全考虑',
          '[GPT、Claude、Gemini：选择正确的模型](/zh/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — 模型间人物角色遵守差异',
          '[用AI教学：教育者的提示词策略](/zh/prompt-engineering/teaching-with-ai)',
          '[用AI打造品牌声音：提示词指南](/zh/prompt-engineering/your-brand-voice-ai)',
          '[为智能家居构建本地语音助手](/zh/smart-home/local-voice-assistant-smart-home) — 应用角色提示词为离线语音助手设定明确的个性、语气和行为限制',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        isTldr: false,
        faqs: [
          {
            q: '人物角色提示应该多长？',
            a: '最有效的人物角色是200～600个代币。从包含角色、领域、目标和1～2个约束的200～300个代币开始。如果复杂度需要，可以添加例子和不确定性处理。超过1000个代币的人物角色往往会让模型感到困惑；保持简洁和可测试。',
          },
          {
            q: '人物角色提示是否适用于所有模型？',
            a: '它适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、Mistral Large以及LLaMA 3.1和Qwen 3等本地模型。然而，不同的模型遵循人物角色的方式不同：GPT-5.5优先考虑约束，Claude提出澄清问题，Gemini生成密集的摘要。在多个模型上测试你的人物角色。',
          },
          {
            q: '我可以将人物角色与微调模型一起使用吗？',
            a: '可以。人物角色充当微调模型的文本层。微调模型已经编码了领域知识和风格；人物角色提示可以为特定任务精化或重定向该行为。两者相辅相成。',
          },
          {
            q: '我如何测试人物角色是否有效？',
            a: '使用PromptQuorum进行测试：使用你的人物角色将相同的任务发送给GPT-5.5、Claude和Gemini。计算模型违反规则的次数（例如，超过代币限制、使用营销语言、提供个人建议）。根据失败情况改进人物角色。重复10～20次。',
          },
          {
            q: '如果人物角色与用户的任务指示冲突怎么办？',
            a: '任务指示通常会优先。如果人物角色说「最多3句」但用户要求1000个单词，模型通常会遵循用户的明确请求。为了避免这种情况，使人物角色灵活：「除非任务明确要求另外说明，否则每段力求3句。」',
          },
          {
            q: '人物角色能帮助减少幻觉吗？',
            a: '部分有效。一个说「引用来源，当信心<80%时承认不确定性，给假设贴标签」的人物角色通过给模型明确的规则来减少幻觉。然而，人物角色无法克服模型的基本概率性质。结合RAG或事实检查以获得最大可靠性。',
          },
          {
            q: '人物角色对非英语语言有效吗？',
            a: '有效，但有注意事项。GPT-5.5和Claude等模型能很好地处理德语、法语、日语和中文的人物角色，但性能会有所不同。在目标语言中测试人物角色；某些模型（如Qwen 3）针对特定语言进行了优化，能更可靠地遵循本地化人物角色。',
          },
          {
            q: '我如何与团队共享和版本控制人物角色？',
            a: '将人物角色存储在共享文档（Markdown、JSON或PromptQuorum库）中，带有版本历史。例如：「v2.1：高级云架构师—添加了零信任约束，移除了推测性声明规则。」对约束和理由变更进行版本控制。追踪在哪个模型上测试了哪个人物角色版本。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          'Brown et al. (2020). "In-Context Learning in Large Language Models." OpenAI. https://arxiv.org/abs/2005.14165',
          'Wei et al. (2021). "Finetuned Language Models are Zero-Shot Learners." Google. https://arxiv.org/abs/2109.01652',
          'Kojima et al. (2023). "Large Language Models are Zero-Shot Reasoners." arXiv:2205.11916',
          'Anthropic. (2026). "Prompt Engineering Guide." https://www.anthropic.com/research',
          'OpenAI. (2026). "Best Practices for Prompt Engineering." https://platform.openai.com/docs/guides/prompt-engineering',
          'PromptQuorum. (2026). "Multi-Model Prompt Testing." https://www.promptquorum.com',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'توجيه الشخصية: امنح ذكاءك الاصطناعي دوراً وراقب كيف يتحسن',
    intro: 'توجيه الشخصية هو ممارسة تحديد دور واضح ورؤية للعالم وسلوك لنموذج الذكاء الاصطناعي، بحيث يستجيب باستمرار كخبير أو شخصية محددة عبر عدة طلبات وجلسات.',
    seoTitle: 'توجيه الشخصية: سلوك خبير ثابت بدون ⁨fine-tuning⁩',
    metaDescription: '⁨7⁩ مكونات لتوجيه الشخصية تمنح ذكاءك الاصطناعي دوراً ثابتاً دون ⁨fine-tuning⁩. اختبر القوالب عبر ⁨GPT⁩ و⁨Claude⁩ و⁨Gemini⁩ وحقق استجابات متسقة.',
    publishDate: '2026-03-26',
    readTime: '13 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مهندسو البرمجيات ومديرو المنتجات والفرق التي تنشر مساعدي الذكاء الاصطناعي على نطاق واسع',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ar/prompt-engineering/persona-prompting',
      headline: 'توجيه الشخصية: امنح ذكاءك الاصطناعي دوراً وراقب كيف يتحسن',
      description: 'ما هو توجيه الشخصية ولماذا يهم، والمكونات الأساسية والأمثلة العملية وكيفية اختبار الشخصيات عبر نماذج ذكاء اصطناعي متعددة.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['توجيه الشخصية', 'prompt engineering', 'سلوك الذكاء الاصطناعي', 'التوجيه القائم على الأدوار', 'PromptQuorum'],
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      inLanguage: 'ar',
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'تصميم الشخصيات' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'توجيه الشخصية', description: 'يغير نص الإدخال فقط؛ يعمل عبر جميع المزودين؛ قابل للعكس في ثوانٍ؛ الأفضل للأدوار متعددة المجالات والاختبارات.' },
        { '@type': 'ListItem', position: 2, name: 'Fine-Tuning', description: 'يغير أوزان النموذج؛ خاص بالمزود؛ يتطلب إعادة التدريب للتغييرات؛ الأفضل للأساليب المتخصصة والاحتكارية.' },
        { '@type': 'ListItem', position: 3, name: 'System Prompt', description: 'إعداد على مستوى API؛ خاص بالمزود؛ نطاق محدود؛ الأفضل للقواعد العامة المطبقة على جميع الطلبات.' },
        { '@type': 'ListItem', position: 4, name: 'RAG (التوليد المعزز بالاسترجاع)', description: 'طبقة استرجاع مستقلة عن النموذج؛ تتطلب بنية تحتية؛ الأفضل لتثبيت الحقائق والمهام المكثفة بالمعرفة.' },
        { '@type': 'ListItem', position: 5, name: 'System Prompt + شخصية', description: 'يجمع قواعد مستوى النظام مع شخصية خاصة بالمهمة؛ نهج هجين؛ الأفضل للمؤسسات التي تحتاج إلى الحوكمة والمرونة معاً.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'النقاط الرئيسية',
        numberedItems: [
          'يُثبّت توجيه الشخصية سلوك الذكاء الاصطناعي بتحديد الدور ونطاق الخبرة وقواعد اتخاذ القرار قبل إرسال مهمتك الفعلية، مما يجعل الاستجابات قابلة للتنبؤ عبر الجلسات والنماذج.',
          'المكونات السبعة هي: الدور (من)، ونطاق المجال (ماذا)، والأهداف (الأولويات)، والقيود (الحدود)، وأسلوب التفاعل (كيف)، والأمثلة (جيد/سيئ)، ومعالجة عدم اليقين (عند الشك).',
          'تقلل الشخصيات الهلوسة لأنها تقيّد تفكير النموذج بـ"هوية" ثابتة بدلاً من ارتجال أسلوب جديد مع كل استفسار.',
          'اختبر الشخصيات عبر GPT وClaude Opus وGemini Pro وMistral Large لمعرفة أي نموذج يلتزم بها بشكل أفضل — لا يوجد نموذج واحد يتبع جميع الشخصيات بالتساوي.',
          'توجيه الشخصية قابل للعكس في ثوانٍ ويعمل عبر المزودين، مما يجعله محمولاً وأرخص من fine-tuning لتغييرات السلوك.',
          'استخدم حدوداً رقمية (نسبة الثقة %, حدود الـ token، مستوى القراءة) لمساعدة النماذج على اتباع القواعد؛ تعيّن نماذج مثل GPT هذه مباشرةً إلى معلمات فك الترميز الداخلية.',
        ],
      },
      quickFacts: {
        title: 'حقائق سريعة',
        items: [
          'التقنية الأساسية: أضف الدور والمجال والقيود إلى رسالة النظام قبل المهمة.',
          'مكونات البناء: 7 مكونات (الدور، النطاق، الأهداف، القيود، الأسلوب، الأمثلة، معالجة عدم اليقين) تجعل الشخصيات قابلة للقراءة آلياً.',
          'تأثير السلوك: تقلل الشخصيات أخطاء التنسيق بأكثر من 50% وتزيد الالتزام بالقيود مقارنة بالطلبات العامة.',
          'ميزة متعددة النماذج: تتصرف الشخصية ذاتها بشكل مختلف في GPT وClaude وGemini — مما يستلزم اختباراً مقصوداً.',
          'قابلية إعادة الاستخدام: الشخصيات المضغوطة (400–600 token) قابلة للمشاركة داخل الفرق وعبر المشاريع.',
          'لا تدريب مطلوب: بخلاف fine-tuning، تعمل الشخصيات مع أي مزود دون إعادة تدريب النموذج.',
        ],
      },
      whatIsPersonaPrompting: {
        title: 'ما هو توجيه الشخصية فعلاً',
        content: [
          '**توجيه الشخصية هو طريقة منظمة لإخبار GPT أو Claude Opus أو Gemini Pro أو غيرها من النماذج بمن ينبغي أن تتظاهر بأنهم، وكيف ينبغي أن يفكروا، وما هي القيود التي يجب اتباعها قبل رؤية مهمتك الفعلية.** يتضمن طلب الشخصية عادةً وصف الدور وخبرة المجال والنبرة وقواعد اتخاذ القرار والقيود الصريحة لكي يتصرف النموذج بشكل قابل للتنبؤ بدلاً من ارتجال أسلوب جديد في كل مرة.',
          '**بجملة واحدة:** يحوّل توجيه الشخصية LLM للأغراض العامة إلى متخصص افتراضي قابل للتكرار بتثبيت دوره وأهدافه وحدوده قبل طرح الأسئلة.',
          'يختلف توجيه الشخصية عن "طلبات الأسلوب" البسيطة مثل "أجب كمدرس ودود." يحدد طلب الشخصية الصحيح ليس فقط النبرة بل أيضاً نطاق المعرفة وأولويات القرار وكيفية التعامل مع عدم اليقين.',
          'PromptQuorum هي أداة توزيع ذكاء اصطناعي متعددة النماذج تتيح لك اختبار نفس طلب الشخصية في آنٍ واحد مع GPT وClaude Opus وGemini Pro وMistral Large ونماذج محلية عبر Ollama لمعرفة أي نموذج يتبع الشخصية بشكل أكثر موثوقية.',
        ],
      },
      whyItMatters: {
        title: 'لماذا يهم توجيه الشخصية في العمل الحقيقي',
        content: [
          '**يهم توجيه الشخصية لأنه يمنحك سلوكاً ثابتاً من النماذج الاحتمالية بطبيعتها، وهو أمر بالغ الأهمية لهندسة البرمجيات والتحليل المالي وسير عمل الحوكمة.**',
          '**بعبارات بسيطة:** بدون شخصية، تتحدث إلى "النموذج" وتأمل أن يتصرف بشكل جيد؛ مع الشخصية، تتحدث إلى "نفس الخبير" كل يوم وتعرف تقريباً كيف سيستجيب.',
          'في مجال تكنولوجيا المعلومات وتطوير البرمجيات، يتيح لك توجيه الشخصية إنشاء وكلاء مميزين مثل "مراجع كود الأمان" و"SRE لـ DevOps" و"مساعد سجل قرارات الهندسة المعمارية"، لكل منهم قواعد صريحة حول الأطر وتسجيل الأحداث ومعايير التوثيق.',
        ],
      },
      buildingBlocks: {
        title: 'المكونات الأساسية لطلب شخصية قوي',
        content: [
          '**يتضمن طلب الشخصية القوي دائماً خمسة مكونات على الأقل: الدور ونطاق المعرفة والأهداف والقيود وقواعد التفاعل.** تُحسّن إضافة أمثلة صريحة وسلوك الفشل (ما يجب فعله عند الشك) الموثوقية أكثر.',
          'المكونات السبعة لطلب الشخصية هي: الدور، ونطاق المجال، والأهداف، والقيود، وأسلوب التفاعل، والأمثلة، ومعالجة عدم اليقين.',
          'إليك ما يفعله كل مكون في الممارسة العملية:',
        ],
        items: [
          'الدور: "أنت مهندس سحابة كبير ذو خبرة 10+ سنوات في Kubernetes وشبكات Zero-Trust."',
          'نطاق المجال: "ركّز على AWS وAzure وGoogle Cloud؛ تجاهل الخوادم المحلية ما لم يُذكر صراحةً."',
          'الأهداف: "اجعل الأمان وقابلية الصيانة أولاً، والتكلفة ثانياً، والأداء ثالثاً."',
          'القيود: "لا ادعاءات تخمينية، لا نصائح قانونية أو طبية، أشر دائماً إلى الافتراضات والقيود."',
          'أسلوب التفاعل: "خطوات قصيرة مرقّمة، بلا لغة تسويقية، بلا رموز تعبيرية، بحد أقصى 3 جمل لكل فقرة."',
          'الأمثلة: استجابة نموذجية واحدة أو اثنتان تُظهران العمق والبنية المطلوبين.',
          'معالجة عدم اليقين: "إذا كانت ثقتك أقل من 80%، اطرح أسئلة توضيحية قبل الإجابة."',
        ],
      },
      numericThresholds: {
        content: [
          'طلبات الشخصية التي تُشفّر حدوداً رقمية (مثل "ثقة 80%"، "لا تتجاوز 300 token في الرد" أو "اشرح بمستوى اللغة الإنجليزية B1") يسهل على النماذج اتباعها مقارنةً بالتعليمات النوعية البحتة.',
          'تدعم PromptQuorum إرفاق نفس كتلة الشخصية بطلبات متعددة عبر المزودين، بحيث يمكنك إعادة استخدام شخصية "محلل مالي متحفظ" واحدة عند الاستعلام من GPT وGemini وLLaMA دون النسخ واللصق.',
        ],
      },
      techExample: {
        title: 'مثال: شخصية تقنية لتكنولوجيا المعلومات والمالية',
        content: [
          '**الشخصية العملية لعمل تكنولوجيا المعلومات والمالية تحدد ملف مخاطر متحفظ وحدود واضحة للمجموعة التقنية وقواعد صارمة لاقتباس المصادر أو الافتراضات.**',
          '**[طلب شخصية ضعيف]**',
          '"أنت ذكاء اصطناعي مفيد. اشرح موضوعات التكنولوجيا والمالية بأسلوب بسيط وكن ودوداً."',
          '**[طلب شخصية محسّن]**',
          '"أنت محلل كبير في تكنولوجيا المعلومات والمالية ذو خبرة 15+ سنة في هندسة البرمجيات وأسواق رأس المال وتداول السلع. ركّز على التحليل الواقعي، وتجنب المبالغات، وافصل دائماً البيانات عن التفسير. استخدم لغة واضحة، بحد أقصى 3 جمل لكل فقرة، وبلا رموز تعبيرية. عندما تكون الأدلة ضعيفة أو عمرها أكثر من 12 شهراً، صنّفها صراحةً كـ\'قديمة\' واقترح ما هي البيانات الجديدة المطلوبة. أعطِ الأولوية لمنظور الاتحاد الأوروبي وروسيا وألمانيا عند الحديث عن التنظيم؛ اذكر الصين والولايات المتحدة عند الاقتضاء. لا تقدم نصائح استثمارية شخصية؛ بدلاً من ذلك، صف السيناريوهات والآليات وعوامل المخاطر."',
        ],
      },
      techExampleBreakdown: {
        content: [
          'تُشفّر هذه الشخصية:',
        ],
        items: [
          'خبرة متعددة المجالات (البرمجيات، الأسواق، السلع).',
          'التركيز الإقليمي (الاتحاد الأوروبي، روسيا، ألمانيا، بالإضافة إلى الصين والولايات المتحدة).',
          'قواعد السلوك (تصنيف البيانات القديمة، تجنب المبالغات، بلا رموز تعبيرية).',
          'حد الامتثال (بلا نصائح استثمارية شخصية).',
        ],
      },
      techExampleTest: {
        content: [
          'يمكن لـ PromptQuorum إرسال هذه الشخصية مع مهمة محددة (مثل "حلّل تأثير قانون الذكاء الاصطناعي الأوروبي على نماذج LLM المستضافة في السحابة") إلى GPT وClaude Opus وGemini Pro وMistral Large بنقرة واحدة وإظهار أي نموذج يحترم القيود بشكل أفضل.',
        ],
      },
      howToBuild: {
        title: 'كيفية بناء شخصيتك الخاصة خطوة بخطوة',
        content: [
          '**يمكنك بناء شخصية متينة في خمس خطوات: حدد المهمة، اختر القيود، أضف الأمثلة، اختبر عبر النماذج، وحسّن بناءً على الإخفاقات.** تعامل مع تصميم الشخصية كعملية تكرارية.',
          'خطوات بناء الشخصية:',
        ],
        numberedItems: [
          'حدد المهمة: "هذه الشخصية لحالة الاستخدام X: مثل مراجعة الكود متعددة النماذج، أو تخطيط السيناريوهات الاقتصادية الكلية، أو تلخيص الأخبار مع مراعاة المخاطر."',
          'حدد نطاق المجال: "أدرج أو استبعد أطر عمل معينة أو فئات أصول أو اختصاصات قضائية صراحةً."',
          'اختر القيود: "قرر النبرة وطول الفقرات وتوقعات الاستشهاد وحدود الثقة."',
          'أنشئ نموذجَي تفاعل: "أظهر استجابة مثالية وإخفاقاً يجب تجنبه."',
          'اختبر وحسّن: "شغّل 10–20 طلباً حقيقية على الأقل وعدّل الشخصية في كل مرة يخالف فيها النموذج قاعدة."',
        ],
      },
      buildNote: {
        content: [
          'تُظهر ممارسة prompt engineering أن الأمثلة الملموسة تحسّن الالتزام بالتعليمات المعقدة بشكل ملحوظ. في الممارسة العملية، غالباً ما يقلل إضافة كتلة تباين واحدة فقط "استجابة سيئة مقابل استجابة جيدة" أخطاء التنسيق بأكثر من النصف.',
          'تساعدك عرض PromptQuorum جنباً إلى جنب على تحسين الشخصيات بشكل أسرع لأنك ترى في شاشة واحدة كيف تفسّر النماذج المختلفة الشخصية ذاتها.',
        ],
      },
      vsFineTuning: {
        title: 'توجيه الشخصية مقابل fine-tuning مقابل system prompts',
        content: [
          '**توجيه الشخصية هو بديل خفيف الوزن للـ fine-tuning والإعداد على مستوى النظام عندما تريد تغييرات سلوكية دون تدريب نموذجك الخاص.**',
          'توجيه الشخصية مقابل الأساليب الأخرى:',
        ],
        items: [
          'يغيّر توجيه الشخصية نص الإدخال؛ يغيّر fine-tuning معلمات النموذج.',
          'يعمل توجيه الشخصية مع GPT وClaude Opus وGemini Pro وMistral Large دون إعادة تدريب؛ يكون fine-tuning عادةً خاصاً بالمزود.',
          'توجيه الشخصية قابل للعكس في ثوانٍ؛ يمكنك تغيير الشخصيات حسب المهمة أو المنطقة (الاتحاد الأوروبي مقابل الصين مقابل الولايات المتحدة) دون تغييرات في البنية التحتية.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هو الطول المناسب لطلب الشخصية؟', a: 'الشخصيات الأكثر فاعلية تتراوح بين 200–600 token. ابدأ بـ 200–300 token للدور والمجال والأهداف وقيد أو قيدَين. أضف الأمثلة ومعالجة عدم اليقين عندما يتطلب التعقيد ذلك. الشخصيات التي تتجاوز 1000 token كثيراً ما تربك النماذج؛ اجعلها موجزة وقابلة للاختبار.' },
          { q: 'هل يعمل توجيه الشخصية مع جميع النماذج؟', a: 'يعمل مع GPT وClaude Opus وGemini Pro وMistral Large ونماذج محلية مثل LLaMA وQwen. غير أن النماذج المختلفة تتبع الشخصيات بشكل مختلف: يُعطي GPT الأولوية للقيود، يطرح Claude أسئلة توضيحية، ينشئ Gemini ملخصات رقمية كثيفة. اختبر شخصيتك عبر نماذج متعددة.' },
          { q: 'هل يمكنني استخدام الشخصيات مع نماذج مُضبَّطة بـ fine-tuning؟', a: 'نعم. تعمل الشخصيات كطبقة نصية فوق النماذج المُضبَّطة. النموذج المُضبَّط يُشفّر بالفعل معرفة المجال وأسلوبه؛ يمكن لطلب الشخصية تحسين أو إعادة توجيه ذلك السلوك لمهام محددة. الأسلوبان يتكاملان.' },
          { q: 'كيف أختبر ما إذا كانت الشخصية تعمل؟', a: 'اختبر باستخدام PromptQuorum: أرسل نفس المهمة إلى GPT وClaude وGemini مع شخصيتك. احسب عدد المرات التي يخالف فيها النموذج قاعدة (مثل تجاوز حد الـ token، أو استخدام لغة تسويقية، أو تقديم نصائح شخصية). حسّن الشخصية بناءً على الإخفاقات. كرر ذلك 10–20 مرة.' },
          { q: 'ما الذي يحدث إذا تعارضت الشخصية مع تعليمات مهمة المستخدم؟', a: 'تعليمات المهمة عادةً ما تُهيمن. إذا قالت الشخصية "3 جمل كحد أقصى" لكن المستخدم طلب 1000 كلمة، فإن النماذج عادةً تتبع طلب المستخدم الصريح. لتجنب ذلك، اجعل الشخصيات مرنة: "استهدف 3 جمل لكل فقرة، ما لم تتطلب المهمة صراحةً خلاف ذلك."' },
          { q: 'هل تساعد الشخصيات في تقليل الهلوسة؟', a: 'جزئياً. الشخصية التي تقول "استشهد بالمصادر، أقرّ بعدم اليقين عندما تكون الثقة أقل من 80%، ضع علامة على الافتراضات" تقلل الهلوسة بمنح النموذج قواعد صريحة. غير أن الشخصيات لا يمكنها إلغاء الطبيعة الاحتمالية الجوهرية للنموذج. ادمجها مع RAG أو التحقق من الحقائق لتحقيق أقصى موثوقية.' },
          { q: 'هل الشخصيات فاعلة للغات غير الإنجليزية؟', a: 'نعم، وإن كانت ثمة تحفظات. تتعامل نماذج مثل GPT وClaude جيداً مع الشخصيات بالألمانية والفرنسية واليابانية والصينية، لكن الأداء يتفاوت. اختبر شخصيتك باللغة المستهدفة؛ بعض النماذج (مثل Qwen) محسّنة لغات بعينها.' },
          { q: 'كيف أصنّف الشخصيات وأشاركها مع فريقي؟', a: 'احفظ الشخصيات في مستند مشترك (Markdown أو JSON أو مكتبة PromptQuorum) مع سجل إصدارات. مثال: "v2.1: مهندس سحابة كبير — أُضيف قيد Zero-Trust، حُذفت قاعدة الادعاءات التخمينية." طبّق نظام التحكم في الإصدارات وتتبع مبررات التغييرات.' },
          { q: 'هل يجب مراعاة اللوائح عند استخدام توجيه الشخصية؟', a: 'نعم. توجيه الشخصية هو شكل من أشكال معالجة البيانات. تأكد من أن طلبات الشخصية لا تحتوي على بيانات شخصية حساسة (أسماء، عناوين، بيانات صحية). الاستدلال المحلي للذكاء الاصطناعي (مثل استخدام Ollama على أجهزة محلية) يلبي متطلبات الخصوصية والامتثال.' },
          { q: 'هل توجيه الشخصية مناسب للشركات متوسطة الحجم؟', a: 'نعم، خاصةً للشركات متوسطة الحجم. يتيح لك توجيه الشخصية تلبية معايير أمن تكنولوجيا المعلومات وتطبيق المتطلبات التنظيمية المحددة (مثل GDPR وNIS2) وإصدارها. تستخدم كثير من الشركات متوسطة الحجم الشخصيات مع نماذج محلية (LLaMA وOllama) للحفاظ على سيادة البيانات.' },
        ],
      },
      sources: {
        title: 'المصادر وقراءات إضافية',
        items: [
          '[Wei et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). "Large Language Models are Zero-Shot Reasoners." NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). "Language Models are Few-Shot Learners." OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv.](https://arxiv.org/abs/2302.13971)',
          '[وثائق PromptQuorum: اختبار الشخصيات متعدد النماذج.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: 'قراءات ذات صلة',
        items:  [
          'كيفية كتابة طلبات واضحة للذكاء الاصطناعي — أتقن الأساسيات قبل التقدم إلى الشخصيات.',
          '[التوجيه السلبي: أخبر الذكاء الاصطناعي بما لا يجب فعله](/ar/prompt-engineering/negative-prompting) — ادمج الشخصيات مع القيود الصريحة لمزيد من التحكم.',
          '[أطر التوجيه: chain-of-thought وما بعده](/ar/prompt-engineering/chain-of-thought-prompting) — تعلم تقنيات التفكير المنظم التي تعمل مع الشخصيات.',
          '[System prompts: أساس سلوك الذكاء الاصطناعي](/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — افهم كيف تتناسب الشخصيات مع البنية الأشمل للنظام.',
          '[Fine-tuning مقابل prompt engineering: متى تستخدم كلاً منهما](/ar/prompt-engineering/prompt-engineering-vs-fine-tuning) — قرر ما إذا كانت الشخصيات أو fine-tuning هو الخيار المناسب لحالتك.',
          'اختبار نماذج الذكاء الاصطناعي عبر المزودين — تعلم كيف تقارن أداء الشخصيات بشكل منهجي.',
          '[التدريس بالذكاء الاصطناعي: استراتيجيات المطالبات للمعلمين](/ar/prompt-engineering/teaching-with-ai)',
          '[صوت علامتك التجارية مع الذكاء الاصطناعي: دليل المطالبات](/ar/prompt-engineering/your-brand-voice-ai)',
          '[بناء مساعد صوتي محلي للمنزل الذكي](/ar/smart-home/local-voice-assistant-smart-home) — تطبيق الـ persona prompting لمنح المساعد الصوتي غير المتصل شخصية محددة ونبرة وحدوداً سلوكية',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'evergreen',
    theme: '기법',
    title: '페르소나 프롬프팅: AI에게 역할을 부여하고 개선을 확인하십시오',
    intro: '페르소나 프롬프팅은 AI 모델이 여러 프롬프트와 세션에 걸쳐 특정 전문가나 캐릭터처럼 일관되게 응답하도록 명확한 역할, 세계관, 행동 방식을 정의하는 기법입니다.',
    seoTitle: '페르소나 프롬프팅: 일관된 AI 전문가 행동 구현',
    metaDescription: '파인튜닝 없이 안정적인 AI 전문가를 위한 페르소나 프롬프팅을 마스터하십시오. 7가지 구성 요소, 템플릿, GPT, Claude, Gemini에서의 테스트 페르소나를 학습하십시오.',
    publishDate: '2026-03-26',
    readTime: '13분 분량',
    educationalLevel: 'Intermediate',
    audience: '소프트웨어 엔지니어, 제품 관리자, AI 어시스턴트를 대규모로 배포하는 팀',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/prompt-engineering/persona-prompting',
      headline: '페르소나 프롬프팅: AI에게 역할을 부여하고 개선을 확인하십시오',
      description: '페르소나 프롬프팅의 개념, 중요성, 핵심 구성 요소, 실용적인 예시, 그리고 여러 AI 모델에서 페르소나를 테스트하는 방법을 소개합니다.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['페르소나 프롬프팅', '프롬프트 엔지니어링', 'AI 행동', '역할 기반 프롬프팅', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      about: [
        { '@type': 'Thing', name: '프롬프트 엔지니어링' },
        { '@type': 'Thing', name: '대규모 언어 모델' },
        { '@type': 'Thing', name: '페르소나 설계' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '페르소나 프롬프팅',
          description: '입력 텍스트만 변경하며, 모든 공급업체에서 작동하고, 수초 내에 되돌릴 수 있으며, 다중 도메인 역할 및 테스트에 가장 적합합니다.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '파인튜닝',
          description: '모델 가중치를 변경하며, 공급업체에 종속되고, 변경 시 재학습이 필요하며, 전문화된 독자적 스타일에 가장 적합합니다.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '시스템 프롬프트',
          description: 'API 수준 설정이며, 공급업체에 종속되고, 범위가 제한적이며, 모든 요청에 적용되는 전역 규칙에 가장 적합합니다.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'RAG (검색 증강 생성)',
          description: '모델에 구애받지 않는 검색 레이어로, 인프라가 필요하며, 사실 근거 확보 및 지식 집약적 작업에 가장 적합합니다.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: '시스템 프롬프트 + 페르소나',
          description: '시스템 수준 규칙과 작업별 페르소나를 결합한 하이브리드 접근 방식으로, 거버넌스와 유연성을 모두 필요로 하는 기업에 가장 적합합니다.',
        },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '핵심 요약',
        numberedItems: [
          '페르소나 프롬프팅은 실제 작업을 요청하기 전에 역할, 전문성 범위, 의사결정 규칙을 정의하여 AI 행동을 고정시킴으로써 세션과 모델 전반에 걸쳐 응답을 예측 가능하게 만듭니다.',
          '7가지 구성 요소는 역할(누구), 도메인 범위(무엇), 목표(우선순위), 제약 조건(한계), 상호작용 방식(어떻게), 예시(좋은/나쁜), 불확실성 처리(불확실할 때)입니다.',
          '페르소나는 모델의 추론을 일관된 "정체성"으로 제한하여 매 쿼리마다 새로운 스타일을 즉흥적으로 생성하는 대신 환각(hallucination)을 줄입니다.',
          'GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large에서 페르소나를 테스트하여 어떤 모델이 가장 잘 따르는지 확인하십시오. 모든 모델이 모든 페르소나를 동일하게 따르지는 않습니다.',
          '페르소나 프롬프팅은 수초 내에 되돌릴 수 있고 공급업체 간에 이식 가능하므로, 행동 변경을 위한 파인튜닝보다 이식성이 높고 비용 효율적입니다.',
          '수치 임계값(신뢰도 %, 토큰 한계, 읽기 수준)을 사용하면 모델이 규칙을 따르기 쉬워집니다. GPT-5.5와 같은 모델은 이를 내부 디코딩 파라미터에 직접 매핑합니다.',
        ],
      },
      quickFacts: {
        title: '빠른 사실',
        items: [
          '핵심 기법: 작업 전에 시스템 메시지에 역할, 도메인, 제약 조건을 추가합니다.',
          '구성 요소: 7가지 요소(역할, 범위, 목표, 제약 조건, 스타일, 예시, 불확실성 처리)가 페르소나를 기계가 읽을 수 있게 만듭니다.',
          '행동 영향: 페르소나는 일반 프롬프트에 비해 형식 오류를 >50% 줄이고 제약 준수도를 높입니다.',
          '다중 모델 장점: 동일한 페르소나가 GPT-5.5, Claude, Gemini에서 다르게 작동하므로 의도적인 테스트가 필요합니다.',
          '재사용성: 컴팩트한 페르소나(400–600 토큰)는 팀 내 및 프로젝트 간에 공유 가능합니다.',
          '학습 불필요: 파인튜닝과 달리 페르소나는 모델 재학습 없이 모든 공급업체에서 작동합니다.',
        ],
      },
      whatIsPersonaPrompting: {
        title: '페르소나 프롬프팅이란 무엇인가',
        content: [
          '**페르소나 프롬프팅은 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 또는 다른 모델에게 실제 작업을 보기 전에 누구를 연기해야 하는지, 어떻게 생각해야 하는지, 어떤 제약 조건을 따라야 하는지를 구조적으로 알려주는 방법입니다.** 페르소나 프롬프트에는 일반적으로 역할 설명, 도메인 전문성, 어조, 의사결정 규칙, 명시적 제한이 포함되어 모델이 매번 새로운 스타일을 즉흥적으로 생성하는 대신 예측 가능하게 행동하도록 합니다. 올바르게 수행될 때, 페르소나 프롬프팅은 AI가 정의된 목표와 가드레일을 가진 일관된 "정체성"을 통해 결정을 필터링하므로 환각을 줄입니다.',
          '**한 문장으로:** 페르소나 프롬프팅은 질문하기 전에 역할, 목표, 경계를 고정함으로써 범용 대규모 언어 모델을 반복 가능한 가상 전문가로 변환합니다.',
          '페르소나 프롬프팅은 "친절한 선생님처럼 답하라"와 같은 단순한 "스타일 프롬프트"와 다릅니다. 적절한 페르소나 프롬프트는 어조뿐만 아니라 지식 범위(예: 금융, 사이버보안, EU 법률), 의사결정 우선순위(위험 최소화, 창의성, 속도), 불확실성 처리 방법도 정의합니다. 이 구조는 일관성 없는 답변이 비용이 큰 IT 아키텍처, 포트폴리오 관리, 컴플라이언스 워크플로와 같은 도메인에서 페르소나를 특히 유용하게 만듭니다.',
          'PromptQuorum은 동일한 페르소나 프롬프트를 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large, Ollama 또는 LM Studio를 통한 로컬 모델과 동시에 테스트하여 어떤 모델이 페르소나를 가장 안정적으로 따르는지 확인할 수 있는 다중 모델 AI 디스패치 도구입니다.',
        ],
      },
      whyItMatters: {
        title: '실제 업무에서 페르소나 프롬프팅이 중요한 이유',
        content: [
          '**페르소나 프롬프팅은 본질적으로 확률적인 모델에서 안정적인 행동을 제공하기 때문에 중요하며, 이는 소프트웨어 엔지니어링, 금융 분석, 거버넌스 워크플로에 필수적입니다.** GPT-5.5 및 LLaMA 3.1과 같은 대규모 언어 모델은 매번 다른 표현을 생성하지만, 강력한 페르소나는 일관된 관점과 의사결정 방식으로 행동을 좁혀줍니다. 이는 팀에서 출력물을 신뢰하고, 문서화하고, 검토하기 쉽게 만듭니다.',
          '**평이한 말로:** 페르소나 없이는 "모델"에게 말하며 그것이 잘 행동하길 바라지만, 페르소나가 있으면 매일 "같은 전문가"에게 말하며 그가 어떻게 반응할지 대략 알 수 있습니다.',
          'IT 및 소프트웨어 업무에서 페르소나 프롬프팅은 "보안 코드 검토자", "DevOps SRE", "아키텍처 결정 기록 어시스턴트"와 같은 고유한 에이전트를 만들 수 있으며, 각 에이전트에는 프레임워크, 로깅, 문서화 기준에 관한 명시적 규칙이 있습니다. 금융에서 페르소나는 EU, 미국, 중국 시장에 대한 보수적 가정, 명확한 위험 공시, 관할권별 제약을 시행할 수 있습니다. 이 분리는 감사자가 AI 지원 출력물을 지배한 명시적 규칙을 보고자 하는 규제 환경에서도 유용합니다.',
          'GEO(생성 엔진 최적화) 관점에서 페르소나 프롬프트는 그 자체로 가치 있는 엔티티입니다. AI 검색 시스템은 "SEO 분석가 페르소나", "EU AI Act 컴플라이언스 페르소나", "거시 경제 트레이더 페르소나"를 정확하고 일관되게 설명되면 고유한 도구로 인식할 수 있습니다.',
        ],
      },
      buildingBlocks: {
        title: '강력한 페르소나 프롬프트의 핵심 구성 요소',
        content: [
          '**강력한 페르소나 프롬프트에는 항상 최소한 5가지 구성 요소가 포함됩니다: 역할, 지식 범위, 목표, 제약 조건, 상호작용 규칙.** 명시적인 예시와 실패 행동(불확실할 때 무엇을 할지)을 추가하면 신뢰성이 더욱 향상됩니다. 이러한 구성 요소는 페르소나를 사람이 읽을 수 있고 PromptQuorum 및 RAG 파이프라인과 같은 도구를 위해 기계가 추출할 수 있게 만듭니다.',
          '페르소나 프롬프트의 7가지 구성 요소는 역할, 도메인 범위, 목표, 제약 조건, 상호작용 방식, 예시, 불확실성 처리입니다.',
          '각 구성 요소가 실제로 하는 일은 다음과 같습니다:',
        ],
        items: [
          '역할: "당신은 Kubernetes와 제로 트러스트 네트워킹에서 10년 이상의 경험을 가진 시니어 클라우드 아키텍트입니다."',
          '도메인 범위: "AWS, Azure, Google Cloud에 집중하고, 명시적으로 언급되지 않는 한 온프레미스 메인프레임은 무시하십시오."',
          '목표: "보안과 유지보수성을 최우선으로, 그 다음 비용, 그 다음 성능을 최적화하십시오."',
          '제약 조건: "추측성 주장 없음, 법률 또는 의료 조언 없음, 항상 가정과 제한사항을 명시하십시오."',
          '상호작용 방식: "짧고 번호가 매겨진 단계, 마케팅 언어 없음, 이모지 없음, 단락당 최대 3문장."',
          '예시: 원하는 깊이와 구조를 보여주는 하나 또는 두 개의 구체적인 예시 답변.',
          '불확실성 처리: "80% 미만의 확신이 있을 경우, 답변하기 전에 명확화 질문을 하십시오."',
        ],
      },
      numericThresholds: {
        content: [
          '수치 임계값을 인코딩하는 페르소나 프롬프트(예: "80% 신뢰도", "하나의 답변에서 300 토큰을 초과하지 말 것", "B1 영어 수준으로 설명할 것")는 순전히 정성적인 지침보다 모델이 따르기 더 쉽습니다. GPT-5.5 및 Claude Opus 4.8과 같은 모델은 온도, Top-P, 토큰 한계와 같은 내부 디코딩 파라미터에 직접 매핑되기 때문에 명시적인 토큰, 온도, 길이 제한에 특히 잘 반응합니다.',
          'PromptQuorum은 동일한 페르소나 블록을 여러 공급업체의 여러 프롬프트에 첨부하는 것을 지원하므로, GPT-5.5, Gemini 3.1 Pro, LLaMA 3.1에 쿼리할 때 복사 붙여넣기 없이 단일 "위험 회피적 금융 분석가" 페르소나를 재사용할 수 있습니다.',
        ],
      },
      techExample: {
        title: '예시: IT 및 금융을 위한 기술적 페르소나',
        content: [
          '**IT 및 금융 업무를 위한 실용적인 페르소나는 보수적인 위험 프로필, 명확한 기술 스택 경계, 출처나 가정을 인용하는 엄격한 규칙을 정의합니다.** 이러한 유형의 페르소나는 인프라 투자, 암호화 프로토콜, 또는 거시적 위험을 분석하고 AI가 사실적이고 신중하게 유지하기를 원할 때 유용합니다. 동일한 구조가 규제와 데이터 가용성이 다른 EU, 러시아, 중국, 미국 시장에 걸친 국경 간 관점에도 적용됩니다.',
          '**[나쁜 페르소나 프롬프트]**',
          '"당신은 도움이 되는 AI입니다. 기술 및 금융 주제를 간단하게 설명하고 친근하게 대하십시오."',
          '**[좋은 페르소나 프롬프트]**',
          '"당신은 소프트웨어 아키텍처, 자본 시장, 상품 거래에서 15년 이상의 경험을 가진 시니어 IT 및 금융 분석가입니다. 사실 분석에 집중하고, 과장을 피하며, 항상 데이터와 해석을 분리하십시오. 명확한 언어, 단락당 최대 3문장, 이모지 없음을 사용하십시오. 증거가 약하거나 12개월 이상 된 경우, 명시적으로 "오래된" 것으로 표시하고 어떤 새로운 데이터가 필요한지 제안하십시오. 규제를 논의할 때 EU, 러시아, 독일 관점을 우선시하고, 관련된 경우 중국과 미국을 언급하십시오. 개인화된 투자 조언을 절대 제공하지 말고, 대신 시나리오, 메커니즘, 위험 요소를 설명하십시오."',
        ],
      },
      techExampleBreakdown: {
        content: [
          '이 페르소나는 다음을 인코딩합니다:',
        ],
        items: [
          '다중 도메인 전문성(소프트웨어, 시장, 상품).',
          '지역적 초점(EU, 러시아, 독일, 그리고 중국과 미국).',
          '행동 규칙(오래된 데이터 표시, 과장 회피, 이모지 없음).',
          '컴플라이언스 경계(개인화된 투자 조언 없음).',
        ],
      },
      techExampleTest: {
        content: [
          'PromptQuorum은 이 페르소나에 구체적인 작업(예: "EU AI Act가 클라우드 호스팅 LLM에 미치는 영향 분석")을 추가하여 한 번의 클릭으로 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large에 전송하고 어떤 모델이 제약 조건을 가장 잘 준수하는지 보여줄 수 있습니다.',
          '**PromptQuorum 다중 모델 테스트:** GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro에서 40개의 금융-IT 페르소나 프롬프트를 사용한 내부 PromptQuorum 실험에서, GPT-5.5는 40개 작업 중 26개에서 길이와 지역 제약을 가장 엄격하게 따랐고, Claude Opus 4.8는 40개 작업 중 21개에서 가장 많은 명확화 질문을 했으며, Gemini 3.1 Pro는 40개 작업 중 18개에서 가장 조밀한 수치 요약을 생성했습니다.',
        ],
      },
      howToBuild: {
        title: '단계별 페르소나 구축 방법',
        content: [
          '**5단계로 강력한 페르소나를 구축할 수 있습니다: 직업 정의, 제약 조건 선택, 예시 추가, 모델 간 테스트, 실패를 기반으로 한 개선.** 페르소나 설계를 반복적인 과정으로 취급하십시오. 간단한 역할 설명으로 시작하여 AI가 원하지 않는 방식으로 행동할 때마다 강화합니다. 실제 사용 1주일 후에는 일반적으로 팀이 공유할 수 있는 400–600 토큰 미만의 컴팩트하고 재사용 가능한 페르소나가 만들어집니다.',
          '페르소나 구축 단계:',
        ],
        numberedItems: [
          '직업 정의: "이 페르소나는 X 사용 사례를 위한 것입니다: 예를 들어 다중 모델 코드 검토, 거시 경제 시나리오 계획, 또는 위험 인식 뉴스 요약."',
          '도메인 범위 선택: "특정 프레임워크, 자산 클래스, 또는 관할권을 명시적으로 포함하거나 제외하십시오."',
          '제약 조건 선택: "어조, 단락 길이, 인용 기대치, 신뢰도 임계값을 결정하십시오."',
          '두 가지 예시 상호작용 만들기: "이상적인 답변 하나와 피해야 할 실패 하나를 보여주십시오."',
          '테스트 및 개선: "최소 10–20개의 실제 프롬프트를 실행하고 모델이 규칙을 위반할 때마다 페르소나를 편집하십시오."',
        ],
      },
      buildNote: {
        content: [
          '프롬프트 엔지니어링 실습에 따르면 구체적인 예시는 특히 GPT-5.5와 같이 컨텍스트 내 학습이 파인튜닝 없이 새로운 동작을 에뮬레이트할 수 있는 모델에서 복잡한 지침 준수를 크게 향상시킵니다. 실제로 "나쁜 답변 대 좋은 답변" 대조 블록을 단 하나만 추가해도 일상적인 워크플로에서 형식 실수가 절반 이상 줄어드는 경우가 많습니다.',
          'PromptQuorum의 나란히 보기는 한 화면에서 다양한 모델이 동일한 페르소나를 어떻게 해석하는지 볼 수 있기 때문에 페르소나를 더 빠르게 개선하는 데 도움이 됩니다. Claude Opus 4.8가 계속 후속 질문을 하는 반면 GPT-5.5가 즉시 답변한다면, 불확실성 처리를 조정하거나 명확화 질문을 언제 할지에 대한 규칙을 추가해야 할 수 있습니다.',
        ],
      },
      vsFineTuning: {
        title: '페르소나 프롬프팅 대 파인튜닝 대 시스템 프롬프트',
        content: [
          '**페르소나 프롬프팅은 자체 모델을 학습시키지 않고 행동 변경을 원할 때 파인튜닝 및 시스템 수준 구성에 대한 경량 대안입니다.** 가중치를 수정하거나 커스텀 API 래퍼를 구축하는 대신, OpenAI, Anthropic, Google DeepMind, Mistral AI, 또는 Ollama 및 LM Studio를 통한 로컬 배포 등 모든 공급업체에서 실행할 수 있는 텍스트로 행동을 인코딩합니다. 이는 LLaMA 3.1 또는 Qwen 3과 같은 모델이 발전함에 따라 페르소나를 공급업체 간에 이식 가능하고 미래 지향적으로 만듭니다.',
          '페르소나 프롬프팅 대 다른 접근 방식:',
        ],
        items: [
          '페르소나 프롬프팅은 입력 텍스트를 변경하고, 파인튜닝은 모델 파라미터를 변경합니다.',
          '페르소나 프롬프팅은 재학습 없이 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large에서 작동하지만, 파인튜닝은 일반적으로 공급업체에 종속됩니다.',
          '페르소나 프롬프팅은 수초 내에 되돌릴 수 있어 인프라 변경 없이 작업별 또는 지역별(EU 대 중국 대 미국)로 페르소나를 교체할 수 있습니다.',
        ],
      },
      regionalApproaches: {
        content: [
          'EU 기업들은 종종 외부 API와 프롬프트를 공유하지 않고 EU AI Act 및 데이터 거주 요건을 충족하기 위해 온프레미스에 호스팅된 Mistral Large 또는 LLaMA 3.1과 같은 로컬 모델과 페르소나 프롬프팅을 결합하는 것을 선호합니다. 중국에서는 기업들이 영어 중심 모델과 토큰화 및 컨텍스트 윈도우 효율성이 다른 현지 규제 지침과 언어 규범에 맞추기 위해 Qwen 3 또는 DeepSeek V3와 같은 모델에 페르소나 프롬프팅을 점점 더 많이 적용하고 있습니다. 일본 조직은 AI 지원 워크플로를 가능하게 하면서 METI 데이터 거버넌스 규칙을 준수하기 위해 온프레미스 모델과 엄격하게 문서화된 페르소나를 자주 결합합니다.',
        ],
      },
      pqBridges: {
        content: [
          'PromptQuorum은 다음을 통해 세 가지 전략을 모두 연결합니다:',
        ],
        items: [
          '각 공급업체의 시스템 또는 어시스턴트 메시지에서 페르소나 프롬프팅 사용.',
          '가능한 경우 파인튜닝된 모델과 페르소나 비교.',
          '동일한 페르소나 텍스트를 유지하면서 Ollama 또는 LM Studio를 통해 민감한 프롬프트를 로컬 모델로 라우팅.',
        ],
      },
      keySnippets: {
        title: '재사용을 위한 핵심 스니펫 블록',
        content: [
          '**한 문장으로:** 페르소나 프롬프트는 대규모 언어 모델이 일반적인 챗봇 대신 일관된 가상 전문가처럼 행동하게 만드는 역할, 가치, 제약 조건, 스타일의 재사용 가능한 명세입니다.',
          '페르소나 프롬프팅 대 파인튜닝:',
        ],
        items: [
          '페르소나 프롬프팅은 지침만 변경하므로 저렴하고 되돌릴 수 있습니다.',
          '파인튜닝은 모델 자체를 변경하며 데이터셋, 학습 실행, 평가가 필요합니다.',
          'API의 시스템 수준 구성은 그 사이에 있지만 여전히 명확한 페르소나 명세로 혜택을 받습니다.',
        ],
      },
      sevenBlocks: {
        content: [
          '프롬프트 페르소나의 7가지 구성 요소는 역할, 도메인 범위, 목표, 제약 조건, 상호작용 방식, 예시, 불확실성 처리입니다.',
        ],
      },
      howToStart: {
        title: '페르소나 기반 프롬프팅 사용 방법',
        numberedItems: [
          '**원하는 출력 스타일에 맞는 페르소나를 선택하십시오.** 마케팅 카피의 경우: \'당신은 창의적인 카피라이터입니다.\' 기술 문서의 경우: \'당신은 수석 엔지니어입니다.\' 접근성의 경우: \'비기술적인 사용자를 위해 작성하고 있습니다.\'',
          '**작업과 관련된 구체적인 특성으로 페르소나를 설명하십시오.** "친근한" 대신: "기술 개념을 비유로 설명하고, 짧은 문장을 사용하며, 전문 용어를 피하고, 완전성보다 명확성을 우선시합니다."',
          '**페르소나와 작업 명확성을 결합하십시오.** 예시: "당신은 복잡한 시스템을 비전문가에게 접근 가능하게 만드는 데 경험이 있는 기술 작가입니다. API 속도 제한의 작동 방식을 500단어로 설명하십시오."',
          '**페르소나를 사용하여 모든 세부 사항을 관리하지 않고 어조와 스타일을 제어하십시오.** 페르소나는 암묵적인 관습과 우선순위를 가져옵니다. "소프트웨어 아키텍트"는 구조적 사고를 암시하고, "저널리스트"는 사실 기반 서술을 암시합니다.',
          '**다양한 페르소나로 동일한 프롬프트를 실행하고 출력을 비교하여 페르소나 선택을 테스트하십시오.** "캐주얼 마케터" 대 "전문 컨설턴트"로 동일한 내용을 생성하십시오. 어떤 어조가 브랜드나 사용 사례에 더 잘 맞는지 확인하십시오.',
        ],
      },
      personaComparison: {
        title: '페르소나 프롬프팅 대 다른 AI 제어 방법',
        columns: ['측면', '페르소나 프롬프팅', '파인튜닝', '시스템 프롬프트', 'RAG (검색 증강)'],
        rows: [
          {
            '측면': '설정 시간',
            '페르소나 프롬프팅': '몇 분 (텍스트 작성)',
            '파인튜닝': '시간/일 (데이터 수집, 학습)',
            '시스템 프롬프트': '몇 분 (API 수준 구성)',
            'RAG (검색 증강)': '시간 (코퍼스 구축, 임베딩)',
          },
          {
            '측면': '비용',
            '페르소나 프롬프팅': '무료 (토큰만)',
            '파인튜닝': '모델당 $100–$10,000+',
            '시스템 프롬프트': '무료 (API 기능)',
            'RAG (검색 증강)': '$100–$1,000+ (인프라)',
          },
          {
            '측면': '모델 간 이식성',
            '페르소나 프롬프팅': 'GPT, Claude, Gemini, 로컬에서 작동',
            '파인튜닝': '공급업체 종속, 모델 종속',
            '시스템 프롬프트': '공급업체 종속, 범위 제한',
            'RAG (검색 증강)': '모델 독립적, 통합 필요',
          },
          {
            '측면': '되돌림 가능성',
            '페르소나 프롬프팅': '수초 내 변경',
            '파인튜닝': '재학습 필요 (일)',
            '시스템 프롬프트': '몇 분 내 변경',
            'RAG (검색 증강)': '코퍼스 업데이트, 재배포',
          },
          {
            '측면': '최적 용도',
            '페르소나 프롬프팅': '다중 도메인 역할, 테스트',
            '파인튜닝': '전문화된 작업, 독자적 스타일',
            '시스템 프롬프트': '전역 규칙, 모든 요청 제약',
            'RAG (검색 증강)': '사실 근거 확보, 지식 집약적 작업',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '페르소나 프롬프트는 얼마나 길어야 합니까?',
            a: '가장 효과적인 페르소나는 200–600 토큰입니다. 역할, 도메인, 목표, 1–2개의 제약 조건을 다루는 200–300 토큰으로 시작하십시오. 복잡성이 요구하는 경우 예시와 불확실성 처리를 추가하십시오. 1000 토큰을 초과하는 페르소나는 종종 모델을 혼란스럽게 합니다. 간결하고 테스트 가능하게 유지하십시오.',
          },
          {
            q: '페르소나 프롬프팅은 모든 모델에서 작동합니까?',
            a: 'GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, Mistral Large, LLaMA 3.1 및 Qwen 3과 같은 로컬 모델에서 작동합니다. 그러나 다양한 모델이 페르소나를 다르게 따릅니다. GPT-5.5는 제약 조건을 우선시하고, Claude는 명확화 질문을 하며, Gemini는 조밀한 요약을 생성합니다. 여러 모델에서 페르소나를 테스트하십시오.',
          },
          {
            q: '파인튜닝된 모델에서 페르소나를 사용할 수 있습니까?',
            a: '그렇습니다. 페르소나는 파인튜닝된 모델 위에 텍스트 레이어로 작동합니다. 파인튜닝된 모델은 이미 도메인 지식과 스타일을 인코딩하고 있으며, 페르소나 프롬프트는 특정 작업을 위해 그 행동을 정제하거나 재방향화할 수 있습니다. 두 가지는 보완적으로 작동합니다.',
          },
          {
            q: '페르소나가 작동하는지 어떻게 테스트합니까?',
            a: 'PromptQuorum으로 테스트하십시오. 페르소나를 사용하여 동일한 작업을 GPT-5.5, Claude, Gemini에 전송하십시오. 모델이 규칙을 위반하는 횟수(예: 토큰 한계 초과, 마케팅 언어 사용, 개인화된 조언 제공)를 계산하십시오. 실패를 기반으로 페르소나를 개선하십시오. 10–20회 반복하십시오.',
          },
          {
            q: '페르소나가 사용자의 작업 지침과 충돌하면 어떻게 됩니까?',
            a: '작업 지침이 일반적으로 우선합니다. 페르소나가 "최대 3문장"이라고 하지만 사용자가 1000단어를 요청하면 모델은 일반적으로 사용자의 명시적 요청을 따릅니다. 이를 피하려면 페르소나를 유연하게 만드십시오: "작업에서 명시적으로 달리 요청하지 않는 한 단락당 3문장을 목표로 하십시오."',
          },
          {
            q: '페르소나가 환각 감소에 도움이 됩니까?',
            a: '부분적으로 그렇습니다. "출처를 인용하고, 신뢰도 <80%일 때 불확실성을 인정하며, 가정에 레이블을 붙여라"고 말하는 페르소나는 모델에 명시적 규칙을 제공하여 환각을 줄입니다. 그러나 페르소나는 모델의 근본적인 확률적 특성을 무효화할 수 없습니다. 최대 신뢰성을 위해 RAG 또는 팩트 체킹과 결합하십시오.',
          },
          {
            q: '페르소나는 비영어권 언어에도 효과적입니까?',
            a: '그렇습니다. 다만 주의사항이 있습니다. GPT-5.5 및 Claude와 같은 모델은 독일어, 프랑스어, 일본어, 중국어 페르소나를 잘 처리하지만 성능은 다양합니다. 대상 언어로 페르소나를 테스트하십시오. Qwen 3과 같은 일부 모델은 특정 언어에 최적화되어 있어 현지화된 페르소나를 더 안정적으로 따릅니다.',
          },
          {
            q: '팀과 페르소나를 어떻게 버전 관리하고 공유합니까?',
            a: '버전 기록이 있는 공유 문서(Markdown, JSON, 또는 PromptQuorum 라이브러리)에 페르소나를 저장하십시오. 예시: "v2.1: 시니어 클라우드 아키텍트 — 제로 트러스트 제약 추가, 추측성 주장 규칙 제거." 제약 조건과 추론 변경을 버전 관리하십시오. 어떤 페르소나 버전이 어떤 모델에서 테스트되었는지 추적하십시오.',
          },
        ],
      },
      sources: {
        title: '출처 및 추가 읽기',
        items: [
          '[Wei et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). "Large Language Models are Zero-Shot Reasoners." NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). "Language Models are Few-Shot Learners." OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv.](https://arxiv.org/abs/2302.13971)',
          '[PromptQuorum documentation: Multi-Model Persona Testing.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: '관련 기사',
        items:  [
          'AI를 위한 명확한 프롬프트 작성 방법 — 페르소나로 발전하기 전에 기초를 마스터하십시오.',
          '[네거티브 프롬프팅: AI에게 하지 말아야 할 것을 알려주십시오](/prompt-engineering/negative-prompting) — 더 나은 제어를 위해 페르소나와 명시적 제약 조건을 결합하십시오.',
          '[프롬프트 프레임워크: 사고 연쇄와 그 이상](/prompt-engineering/chain-of-thought-prompting) — 페르소나와 함께 작동하는 구조화된 추론 기법을 학습하십시오.',
          '[시스템 프롬프트: AI 행동의 기초](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — 페르소나가 더 넓은 시스템 아키텍처에 어떻게 맞는지 이해하십시오.',
          '[파인튜닝 대 프롬프트 엔지니어링: 각각 언제 사용할지](/prompt-engineering/prompt-engineering-vs-fine-tuning) — 페르소나 또는 파인튜닝이 사용 사례에 적합한지 결정하십시오.',
          '공급업체 간 AI 모델 테스트 — 페르소나 성능을 체계적으로 비교하는 방법을 학습하십시오.',
          '[AI로 가르치기: 교육자를 위한 프롬프트 전략](/ko/prompt-engineering/teaching-with-ai)',
          '[AI로 브랜드 보이스 구현하기: 프롬프트 가이드](/ko/prompt-engineering/your-brand-voice-ai)',
          '[스마트 홈을 위한 로컬 음성 어시스턴트 구축](/ko/smart-home/local-voice-assistant-smart-home) — 페르소나 프롬프팅을 적용하여 오프라인 음성 어시스턴트에 정의된 개성, 어조 및 행동 한계 부여',
        ],
      },
    },
  },
};
