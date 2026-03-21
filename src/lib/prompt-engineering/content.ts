import type { Language } from '@/lib/blog/blogContent'

export interface PESection {
  title?: string
  content?: string | string[]
  items?: string[]
  numberedItems?: string[]
  rows?: Array<{ [key: string]: string }>
  columns?: string[]
  faqs?: Array<{ q: string; a: string }>
  isTldr?: boolean
}

export interface PEArticle {
  theme: string
  title: string
  intro: string
  publishDate: string
  readTime: string
  sections: Record<string, PESection>
}

export const peContent: Record<string, Record<Language, PEArticle>> = {

  'what-is-prompt-engineering': {
    en: {
      theme: 'Fundamentals',
      title: 'What Is Prompt Engineering?',
      intro: 'Prompt engineering is the practice of designing and structuring text inputs — called prompts — to get accurate, useful, and repeatable outputs from large language models. It is the difference between typing a vague question and writing a precise instruction that reliably produces the answer you need.',
      publishDate: 'Published March 2026',
      readTime: '9 min read',
      sections: {

        definition: {
          title: 'What Is Prompt Engineering in 2026?',
          content: [
            '**Prompt engineering is the practice of designing and structuring text inputs — called prompts — to get accurate, useful, and repeatable outputs from large language models (LLMs) like GPT-4o, Claude, and Gemini.** It is the difference between typing a vague question and writing a precise instruction that reliably produces the answer you need.',
            'As of 2026, prompt engineering is not about tricking AI systems. It is a structured discipline with defined techniques, reusable frameworks, and measurable outcomes. A well-engineered prompt reduces hallucinations, controls output format, and works consistently across multiple models.',
          ],
        },

        tldr: {
          title: 'TL;DR',
          isTldr: true,
          items: [
            'Prompt engineering = designing inputs to get reliable, accurate AI outputs',
            'It applies to all major LLMs: GPT-4o, Claude, Gemini, and local models',
            'Key levers: structure, examples, constraints, role, output format',
            'Techniques range from zero-shot to Chain-of-Thought to RAG',
            'Frameworks (CRAFT, CO-STAR, SPECS, etc.) make prompts repeatable',
          ],
        },

        whyMatters: {
          title: 'Why Prompt Engineering Matters',
          content: 'The same AI model produces dramatically different outputs depending on how a question is framed. A vague prompt produces a vague answer. A structured prompt with a defined objective, constraints, and a specified output format produces a usable result.',
        },

        whyMattersList: {
          items: [
            '**Reliability:** Structured prompts produce consistent outputs across runs and across models',
            '**Higher output quality:** Explicit instructions reduce ambiguity and model guesswork',
            '**Speed:** Well-framed prompts reduce the need for back-and-forth clarification → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Cost control:** Precise prompts use fewer tokens per task → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Hallucination reduction:** Clear grounding and constraints reduce fabricated facts → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Multi-model compatibility:** Good prompt engineering techniques work across GPT-4o, Claude, Gemini, and local LLMs via Ollama or LM Studio',
            '**Repeatability:** A well-designed prompt is reusable — treat it as an asset, not a one-off message',
          ],
        },

        buildingBlocks: {
          title: 'Core Building Blocks of a Prompt',
          content: 'Every effective prompt is built from some combination of these elements. You rarely need all of them; the skill is knowing which to include for a given task.',
          items: [
            '**Objective:** What you want the model to do — the task or question, stated precisely',
            '**Context:** Background information the model needs to answer correctly',
            '**Instructions:** Specific rules or steps the model should follow',
            '**Examples:** Sample inputs and outputs that demonstrate the format or style you want',
            '**Constraints:** What the model should NOT do — length limits, forbidden topics, style rules',
            '**Output format:** How you want the answer structured — bullet list, JSON, table, paragraph',
            '**Role / persona:** A defined perspective or expertise the model should adopt',
          ],
        },

        buildingBlocksLink: {
          content: 'For a deeper breakdown, see [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
        },

        techniques: {
          title: 'Common Prompt Engineering Techniques (High-Level)',
          content: 'Prompt engineering techniques are patterns that solve specific output problems. You apply them depending on the task, the model, and the quality of output you need.',
          items: [
            '**Zero-shot prompting:** Ask the model without examples — works for straightforward tasks → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]',
            '**Few-shot prompting:** Provide 2–3 input/output examples before your actual request — locks format and tone',
            '**Chain-of-Thought (CoT):** Ask the model to reason step by step before answering — reduces errors on logic and math → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning]',
            '**Persona / role prompting:** Assign the model a specific role to shape expertise and tone → [Techniques: Persona Prompting: Give Your AI a Role and Watch It Improve]',
            '**Constrained prompting:** Explicitly state what the model must not do — prevents common failure modes → [Techniques: Constrained Prompting: How to Set Rules the AI Must Follow]',
            '**Prompt chaining:** Break a complex task into a sequence of smaller prompts, feeding each output into the next → [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]',
            '**Negative prompting:** Tell the model what to exclude — eliminates unwanted content types or formats → [Techniques: Negative Prompting: Tell the AI What NOT to Do]',
            '**Self-consistency:** Run the same prompt multiple times and take the most common answer — useful for high-stakes factual queries → [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work]',
            '**Tree-of-Thought / ReAct:** Advanced multi-step reasoning frameworks for complex problem-solving → [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '**RAG (Retrieval-Augmented Generation):** Ground AI answers in real documents by injecting retrieved content into the prompt → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Structured output / JSON mode:** Instruct the model to return machine-readable output — JSON, Markdown tables, CSV → [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]',
          ],
        },

        frameworks: {
          title: 'Prompt Engineering Frameworks (High-Level)',
          content: [
            '**A prompt engineering framework is a named template that defines which building blocks to include and in what order.** Frameworks make prompting repeatable, teachable, and consistent across a team. Instead of reinventing the prompt structure for every task, you apply a framework suited to the use case.',
          ],
          columns: ['Framework', 'Best for'],
          rows: [
            { 'Framework': 'Single-Line', 'Best for': 'Quick one-line tasks where speed matters more than precision' },
            { 'Framework': 'CRAFT', 'Best for': 'Marketing, copywriting, and creative content' },
            { 'Framework': 'SPECS', 'Best for': 'Research, analysis, and fact-based outputs' },
            { 'Framework': 'CO-STAR', 'Best for': 'Complex tasks requiring full context and structured steps' },
            { 'Framework': 'RISEN', 'Best for': 'Instructional content and educational material' },
          ],
        },

        frameworksLinks: {
          content: 'For individual framework guides, see [Frameworks: Which Prompt Framework Should You Use?], [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], and [Frameworks: Build Your Own Framework]. Tools like PromptQuorum include 9 built-in frameworks and two custom framework slots, so you can apply, compare, and save your own templates without starting from scratch.',
        },

        workflow: {
          title: 'Where Prompt Engineering Fits in the AI Workflow',
          content: 'Prompt engineering does not operate in isolation. It sits at the intersection of several technical decisions:',
          items: [
            '**Model selection:** Different models respond differently to the same prompt. GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro each have different strengths → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System vs. user prompts:** The system prompt sets persistent instructions; the user prompt is the per-request input. Getting this split right determines consistency across a session → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Context windows:** Every model has a maximum token limit for input + output combined. Long prompts eat into the space available for the answer → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Token limits and cost:** Precise prompts use fewer tokens per call and stay within rate limits → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Local vs. cloud models:** Prompt engineering applies equally to cloud APIs (OpenAI, Anthropic, Google) and locally-run models via Ollama or LM Studio — though local models may need adapted formatting',
          ],
        },

        canDo: {
          title: 'What Prompt Engineering Can and Cannot Do',
          content: '**What prompt engineering helps with:**',
          items: [
            'Reducing hallucinations by providing grounding, constraints, and context',
            'Improving output consistency across runs and across team members',
            'Controlling format so outputs are directly usable without editing',
            'Speeding up iteration by reducing back-and-forth with the model',
            'Making the same prompt work across multiple AI models',
          ],
        },

        cannotDo: {
          content: '**What still needs other approaches:**',
          items: [
            '**RAG:** When the model needs access to private, real-time, or very large document sets that cannot fit in a prompt',
            '**Fine-tuning:** When you need a model to reliably adopt a specific style or domain vocabulary at a deep level — not just for one session',
            '**Better training data:** Prompt engineering cannot fix a model that lacks knowledge of a domain',
            '**Evaluation pipelines:** Systematic quality checking of AI outputs at scale requires tooling beyond manual prompting',
          ],
        },

        cannotDoNote: {
          content: 'Prompt engineering is the fastest and most accessible lever. For tasks where it reaches its limits, it points you toward the next tool.',
        },

        howToStart: {
          title: 'How to Start Learning Prompt Engineering',
          numberedItems: [
            '**Read the fundamentals first.** Understand how LLMs process text, what tokens are, and what a context window means before writing complex prompts. Start with [Fundamentals: The 5 Building Blocks Every Prompt Needs] and [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Start with single-line prompts.** Write one clear sentence describing your task. See how the model responds before adding structure.',
            '**Try one framework.** Pick CRAFT or CO-STAR and apply it to a real task. Frameworks force you to think about all the elements a prompt needs → [Frameworks: Which Prompt Framework Should You Use?].',
            '**Apply one technique at a time.** Add few-shot examples to one prompt. Add a constraint to another. Compare results → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?].',
            '**Test across models.** The same prompt often produces different results on GPT-4o, Claude, and Gemini. Use a multi-model tool like PromptQuorum to run one prompt across all your models simultaneously and compare outputs side by side.',
            '**Build a prompt library.** Save prompts that work. Reuse and refine them → [Use Topics: Build a Prompt Library That Saves Hours].',
          ],
        },

        faq: {
          title: 'FAQ: Prompt Engineering Basics',
          faqs: [
            {
              q: 'Is prompt engineering still useful with newer AI models in 2026?',
              a: 'Yes. More capable models respond better to well-structured prompts, not worse. As models improve, they are more able to follow precise instructions, respect constraints, and produce structured output — which means the returns from good prompt engineering increase, not decrease.',
            },
            {
              q: 'Do I need to know how to code to learn prompt engineering?',
              a: 'No. Prompt engineering is primarily a language and logic skill. You need to think clearly about what you want, what context the model needs, and what failure modes to prevent. Knowing how to code helps when building automated workflows or parsing structured output, but it is not required for most use cases.',
            },
            {
              q: 'What is the difference between prompt engineering and traditional programming?',
              a: 'Traditional programming gives a computer deterministic instructions that produce the same output every time. Prompt engineering gives a probabilistic model structured guidance that improves the likelihood of a useful output — but does not guarantee it. The skill is in designing prompts that produce reliable results despite that probabilistic nature.',
            },
            {
              q: 'Will prompt engineering still matter in a few years?',
              a: 'As of 2026, all evidence points to yes. Models are not yet reliable enough to produce professional-grade output without guidance. Even as interfaces become more natural, the underlying structure of good prompts — clear objective, context, constraints, output format — remains the difference between useful and vague outputs.',
            },
            {
              q: 'How does prompt engineering relate to a tool like PromptQuorum?',
              a: 'PromptQuorum is a multi-model AI dispatch tool that applies prompt engineering at scale. It includes 9 built-in frameworks, optimizes your prompt before sending it, dispatches the optimized prompt to multiple AI models simultaneously, and returns a consensus analysis of the results — making prompt engineering repeatable and surfacing the best answer across models, not just one.',
            },
          ],
        },

      },
    },

    // Non-English languages fall back to English in the renderer
    de: {
      theme: 'Fundamentals',
      title: 'Was ist Prompt Engineering?',
      intro: 'Prompt Engineering ist die Praxis, Texteingaben — sogenannte Prompts — so zu gestalten, dass große Sprachmodelle genaue, nützliche und wiederholbare Ausgaben liefern.',
      publishDate: 'Veröffentlicht März 2026',
      readTime: '9 Min. Lesezeit',
      sections: {},
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Qu\'est-ce que le Prompt Engineering ?',
      intro: 'Le prompt engineering est la pratique qui consiste à concevoir des entrées textuelles — appelées prompts — pour obtenir des résultats précis, utiles et reproductibles des grands modèles de langage.',
      publishDate: 'Publié mars 2026',
      readTime: '9 min de lecture',
      sections: {},
    },
    ja: {
      theme: '基礎',
      title: 'プロンプトエンジニアリングとは？',
      intro: 'プロンプトエンジニアリングとは、大規模言語モデルから正確で有用かつ再現性のある出力を得るために、テキスト入力（プロンプト）を設計・構造化する実践です。',
      publishDate: '2026年3月公開',
      readTime: '9分で読める',
      sections: {},
    },
    zh: {
      theme: '基础知识',
      title: '什么是提示词工程？',
      intro: '提示词工程是设计和构建文本输入（称为提示词）的实践，目的是从大型语言模型中获得准确、有用且可重复的输出。',
      publishDate: '发布于2026年3月',
      readTime: '阅读约9分钟',
      sections: {},
    },
  },

}
