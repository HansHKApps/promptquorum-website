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
      intro: 'Prompt engineering is designing text inputs to get reliable, accurate AI outputs from LLMs like GPT-4o, Claude, and Gemini. Covers techniques, frameworks, and core concepts.',
      publishDate: 'Published March 2026',
      readTime: '10 min read',
      sections: {

        definition: {
          title: 'What Is Prompt Engineering in 2026?',
          content: [
            '**Prompt engineering is the practice of designing and structuring text inputs — called prompts — to get accurate, useful, and repeatable outputs from large language models (LLMs).** It applies to GPT-4o, Claude, Gemini, and locally-run models via Ollama or LM Studio. The difference between prompt engineering and "just asking AI a question" is the difference between a vague request and a precise instruction with a defined objective, context, and output format.',
            'As of 2026, prompt engineering is a structured discipline with named techniques, reusable frameworks, and measurable outcomes. It is not about tricking AI systems or finding hidden commands — it is about giving a probabilistic model the clearest possible signal of what you need. A well-engineered prompt consistently produces usable output on the first attempt.',
            'Prompt engineering basics start with understanding that LLMs are pattern-completion engines. They generate output based on the statistical likelihood of what should follow your input. The more precisely you specify the task, context, constraints, and desired format, the less the model has to guess — and the better the result.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Prompt engineering = designing inputs to get reliable, accurate outputs from LLMs',
            'Applies to all major models: GPT-4o, Claude, Gemini, and local models via Ollama or LM Studio',
            'Key levers: objective, context, examples, constraints, output format, and role',
            'Prompt engineering techniques range from zero-shot to Chain-of-Thought to RAG',
            'Prompt engineering frameworks (CRAFT, CO-STAR, SPECS, etc.) make prompts repeatable and teachable',
            'It is the fastest way to improve AI output quality without changing the model',
          ],
        },

        whyMatters: {
          title: 'Why Prompt Engineering Matters',
          content: [
            'The same AI model produces dramatically different outputs depending on how a question is framed. A vague prompt returns a vague answer. A structured prompt with a clear objective, relevant context, explicit constraints, and a specified output format produces a result that requires no editing.',
            'These are the key benefits of prompt engineering basics applied consistently:',
          ],
        },

        whyMattersList: {
          items: [
            '**Reliability:** Structured prompts produce consistent outputs across runs and across models — the same prompt works on Monday and Friday',
            '**Higher output quality:** Explicit instructions reduce model ambiguity and eliminate guessing about intent',
            '**Speed:** Well-framed prompts eliminate back-and-forth clarification cycles → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Cost control:** Precise prompts use fewer tokens per task and reduce retries → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Hallucination reduction:** Clear grounding, source constraints, and scoped questions reduce fabricated facts → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Multi-model compatibility:** The same well-structured prompt works across GPT-4o, Claude, Gemini, and local LLMs — reducing vendor lock-in',
            '**Repeatability:** A well-designed prompt is a reusable asset. Teams can share, version, and improve prompts over time',
          ],
        },

        buildingBlocks: {
          title: 'Core Building Blocks of a Prompt',
          content: [
            'Every effective prompt is assembled from some combination of these seven elements. You rarely need all seven at once — the skill is knowing which ones to include for a given task.',
            'For a deeper breakdown with examples of each element in action, see [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Objective:** The task or question, stated precisely — what you want the model to produce',
            '**Context:** Background information the model needs to answer correctly — who is asking, what the output is for, what constraints apply',
            '**Instructions:** Specific steps or rules the model should follow — "list in order of importance", "write in second person", "use only the provided data"',
            '**Examples:** 1–3 sample input/output pairs that demonstrate the exact format or style you want (few-shot prompting)',
            '**Constraints:** Explicit limits on what the model should NOT do — forbidden topics, banned phrases, length caps, style restrictions',
            '**Output format:** How the answer should be structured — bullet list, JSON object, Markdown table, numbered steps, plain paragraph',
            '**Role / persona:** A defined expertise or perspective for the model to adopt — "Act as a senior data analyst" or "You are a concise technical writer"',
          ],
        },

        techniques: {
          title: 'Common Prompt Engineering Techniques',
          content: 'Prompt engineering techniques are named patterns that solve specific output problems. Each technique addresses a different failure mode — inconsistent format, wrong reasoning, low accuracy, or excessive length. Apply them one at a time when you have a specific problem to fix.',
          items: [
            '**Zero-shot prompting:** Ask the model without any examples — sufficient for straightforward, unambiguous tasks → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]',
            '**Few-shot prompting:** Provide 2–3 input/output examples before your request to lock in format, tone, and style',
            '**Chain-of-Thought (CoT):** Ask the model to reason step by step before giving a final answer — reduces errors on logic, math, and multi-step problems → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning]',
            '**Persona / role prompting:** Assign the model a specific role or expertise to improve tone and relevance → [Techniques: Persona Prompting: Give Your AI a Role and Watch It Improve]',
            '**Constrained prompting:** Explicitly define what the model must not do — prevents the most common failure modes → [Techniques: Constrained Prompting: How to Set Rules the AI Must Follow]',
            '**Prompt chaining:** Split a complex task into a sequence of smaller prompts, feeding each output into the next → [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]',
            '**Negative prompting:** Specify what to exclude from the output — eliminates unwanted formats, phrases, or content types → [Techniques: Negative Prompting: Tell the AI What NOT to Do]',
            '**Self-consistency:** Run the same prompt multiple times and select the most common answer — reduces error on high-stakes factual queries → [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work]',
            '**Tree-of-Thought / ReAct:** Advanced multi-path reasoning for problems that require exploring several approaches before committing → [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '**RAG (Retrieval-Augmented Generation):** Inject retrieved documents or data directly into the prompt to ground the answer in real sources → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Structured output / JSON mode:** Instruct the model to return machine-readable output — JSON, Markdown tables, or CSV — for downstream processing → [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]',
          ],
        },

        frameworks: {
          title: 'Prompt Engineering Frameworks',
          content: [
            '**A prompt engineering framework is a named template that specifies which building blocks to include and in what order.** Frameworks turn prompt engineering from an ad hoc skill into a repeatable process. They are easier to teach, easier to share across a team, and faster to apply under time pressure than building a prompt from scratch.',
            'The table below shows five widely used prompt engineering frameworks and the situations each is best suited for:',
          ],
          columns: ['Framework', 'Best for'],
          rows: [
            { 'Framework': 'Single-Line', 'Best for': 'Quick one-line tasks where speed matters more than precision' },
            { 'Framework': 'CRAFT', 'Best for': 'Marketing, copywriting, and creative content with a defined voice' },
            { 'Framework': 'SPECS', 'Best for': 'Research, analysis, and structured fact-based outputs' },
            { 'Framework': 'CO-STAR', 'Best for': 'Complex tasks that need full context, a defined audience, and step-by-step instructions' },
            { 'Framework': 'RISEN', 'Best for': 'Instructional writing, training material, and educational content' },
          ],
        },

        frameworksLinks: {
          content: [
            'There are ten documented frameworks on this site — each with its own guide covering when to use it, how to structure the prompt, and worked examples. Start with [Frameworks: Which Prompt Framework Should You Use?] for a decision guide. Then explore [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework], and [Frameworks: RISEN Framework] individually.',
            'PromptQuorum includes 9 built-in frameworks and two custom framework slots. You can apply any framework directly inside the app, compare the structured prompt against your original, and save your own templates — see [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'Where Prompt Engineering Fits in the AI Workflow',
          content: [
            'Prompt engineering does not operate in isolation. Every prompt exists within a broader technical context — the model you choose, the token budget you have, and the architecture of your AI system all affect what a prompt can achieve.',
            'These are the key technical decisions that interact with prompt engineering:',
          ],
          items: [
            '**Model selection:** GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro respond differently to the same prompt. Choosing the right model for the task is part of the engineering process → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System vs. user prompts:** The system prompt sets persistent instructions for an entire session; the user prompt is the per-request input. Getting this split right determines consistency at scale → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Context windows:** Every model has a maximum token limit for input + output combined. Long prompts reduce the available space for the model\'s answer — and models start to ignore earlier content as the window fills → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Token limits and cost:** Precise, concise prompts use fewer tokens per call, reduce latency, and stay within rate limits — directly affecting cost at scale → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Multimodal prompting:** Modern LLMs like GPT-4o and Gemini accept images as well as text. Prompt engineering principles apply equally to image inputs → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Local vs. cloud models:** Prompt engineering techniques apply equally to cloud APIs and locally-run models via Ollama or LM Studio — though local models may require adjusted formatting due to smaller context windows and different instruction-following behaviour',
          ],
        },

        canDo: {
          title: 'What Prompt Engineering Can and Cannot Do',
          content: '**What prompt engineering reliably improves:**',
          items: [
            'Output consistency — the same structured prompt produces similar results across runs and team members',
            'Hallucination reduction — grounding, source constraints, and explicit scoping reduce fabricated facts',
            'Format control — specifying output format means results arrive ready to use, not ready to edit',
            'Iteration speed — fewer clarification rounds, more first-attempt successes',
            'Cross-model portability — a well-structured prompt works on GPT-4o, Claude, and Gemini without rewriting',
          ],
        },

        cannotDo: {
          content: '**What still requires other approaches:**',
          items: [
            '**Private or real-time data access:** When the model needs documents, databases, or live information that cannot fit in a prompt — use RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Deep domain specialisation:** When a model needs to reliably adopt a specific vocabulary or style across all sessions — use fine-tuning, not prompts',
            '**Missing knowledge:** Prompt engineering cannot give a model knowledge it was not trained on. If the base model does not know a topic, no prompt will teach it',
            '**Systematic quality evaluation:** Checking AI output quality at scale across thousands of runs requires evaluation pipelines and tooling beyond manual prompting',
          ],
        },

        cannotDoNote: {
          content: 'Prompt engineering is the fastest, most accessible lever for improving AI output quality — it requires no infrastructure changes and no retraining. For the problems it cannot solve, it points clearly to the right next tool.',
        },

        howToStart: {
          title: 'How to Start Learning Prompt Engineering',
          content: 'These six steps take a smart beginner from zero to productive in the shortest path through the material on this site:',
          numberedItems: [
            '**Read the Fundamentals.** Before writing complex prompts, understand how LLMs process text, what tokens are, what a context window means, and why models hallucinate. The [Fundamentals] section covers all of this in dedicated articles — start with [Fundamentals: The 5 Building Blocks Every Prompt Needs] and [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Start with single-line prompts.** Write one clear sentence describing your task exactly. Observe what the model returns before adding structure. This establishes a baseline — you need to know what a bare prompt produces before you can improve it.',
            '**Apply one framework to a real task.** Pick CRAFT for a writing task or CO-STAR for a complex instruction. Frameworks force you to think through all the elements a prompt needs. The [Frameworks] section covers each framework with examples → start with [Frameworks: Which Prompt Framework Should You Use?].',
            '**Add one technique at a time.** Try few-shot examples on one task. Add a constraint to another. Test Chain-of-Thought on a reasoning problem. Isolating changes lets you see which technique actually improved the output. The [Techniques] section covers each technique in depth.',
            '**Test across multiple models.** The same prompt produces different results on GPT-4o, Claude, and Gemini. Use PromptQuorum to dispatch one prompt to multiple models simultaneously and compare responses side by side — this is the fastest way to find which model and formulation works best for a specific task.',
            '**Build a prompt library for your use cases.** Save prompts that work. Refine them over time. A library of tested prompts for your specific domain is a durable asset. See [Use Topics: Build a Prompt Library That Saves Hours] for a guide on how to structure and maintain one.',
          ],
        },

        faq: {
          title: 'FAQ: Prompt Engineering Basics',
          faqs: [
            {
              q: 'Is prompt engineering still useful with newer AI models in 2026?',
              a: 'Yes — and more so. More capable models are better at following precise instructions, which means the return on well-structured prompts increases as models improve. As of 2026, even the most capable models produce inconsistent or vague output when given vague input. Structured prompts remain the most reliable way to get professional-grade output on the first attempt.',
            },
            {
              q: 'Do I need to know how to code to learn prompt engineering?',
              a: 'No. Prompt engineering is primarily a language and logic skill — the ability to state a task precisely, anticipate failure modes, and specify what you want. Coding helps when building automated pipelines or parsing structured output, but the vast majority of prompt engineering work requires no programming at all.',
            },
            {
              q: 'What is the difference between prompt engineering and traditional programming?',
              a: 'Traditional programming gives a computer deterministic instructions that produce the same output every time, given the same input. Prompt engineering gives a probabilistic model structured guidance that increases the likelihood of a useful output — but cannot guarantee it. The skill is in designing prompts that produce reliable results despite that underlying uncertainty.',
            },
            {
              q: 'What is the difference between a prompt engineering technique and a framework?',
              a: 'A technique is a specific pattern applied to achieve a particular output quality — for example, Chain-of-Thought prompting improves reasoning accuracy. A framework is a structural template that organises all the elements of a prompt — for example, CO-STAR defines the order in which to specify context, objective, style, tone, audience, and response format. Frameworks help you build the prompt; techniques help you refine what the model does with it.',
            },
            {
              q: 'Will prompt engineering still matter in a few years?',
              a: 'All available evidence as of 2026 points to yes. LLMs are not yet capable of reliably producing professional-grade output from unstructured natural language alone. Even as AI interfaces become more conversational, the underlying principles of good prompts — clear objective, relevant context, explicit constraints, specified output format — remain the difference between a useful and a useless AI response.',
            },
            {
              q: 'What is the difference between prompt engineering and fine-tuning?',
              a: 'Prompt engineering shapes the output of an existing model without changing the model itself — it works at inference time and requires no training. Fine-tuning modifies a model\'s weights by training it on a new dataset, changing its default behaviour permanently. Prompt engineering is faster, cheaper, and requires no ML expertise; fine-tuning is better when you need deep, consistent specialisation that prompts alone cannot achieve.',
            },
            {
              q: 'How does prompt engineering relate to a tool like PromptQuorum?',
              a: 'PromptQuorum is a multi-model AI dispatch tool built around prompt engineering principles. It includes 9 built-in prompt frameworks, an AI-powered prompt optimiser, and the ability to dispatch one prompt to multiple models simultaneously — GPT-4o, Claude, Gemini, and local models — and compare results side by side. It makes prompt engineering repeatable and removes the friction of testing across models manually.',
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
      readTime: '10 Min. Lesezeit',
      sections: {},
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Qu\'est-ce que le Prompt Engineering ?',
      intro: 'Le prompt engineering est la pratique qui consiste à concevoir des entrées textuelles — appelées prompts — pour obtenir des résultats précis, utiles et reproductibles des grands modèles de langage.',
      publishDate: 'Publié mars 2026',
      readTime: '10 min de lecture',
      sections: {},
    },
    ja: {
      theme: '基礎',
      title: 'プロンプトエンジニアリングとは？',
      intro: 'プロンプトエンジニアリングとは、大規模言語モデルから正確で有用かつ再現性のある出力を得るために、テキスト入力（プロンプト）を設計・構造化する実践です。',
      publishDate: '2026年3月公開',
      readTime: '10分で読める',
      sections: {},
    },
    zh: {
      theme: '基础知识',
      title: '什么是提示词工程？',
      intro: '提示词工程是设计和构建文本输入（称为提示词）的实践，目的是从大型语言模型中获得准确、有用且可重复的输出。',
      publishDate: '发布于2026年3月',
      readTime: '阅读约10分钟',
      sections: {},
    },
  },

}
