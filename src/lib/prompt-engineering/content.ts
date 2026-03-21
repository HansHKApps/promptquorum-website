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

  'prompt-engineering-history': {
    en: {
      theme: 'Fundamentals',
      title: 'From GPT-2 to Today: How Prompt Engineering Evolved',
      intro: 'The history of prompt engineering from GPT-3 and few-shot prompting in 2020 to context design in 2026. Key milestones, papers, and turning points.',
      publishDate: 'Published March 2026',
      readTime: '10 min read',
      sections: {

        definition: {
          title: 'How Prompt Engineering Evolved: A Short Overview',
          content: [
            '**Prompt engineering evolved from informal trial-and-error text manipulation around GPT-3 in 2020 to a structured discipline with named techniques, frameworks, and tools by 2026.** The arc spans five phases: early few-shot experiments, the ChatGPT moment that brought the skill into mainstream awareness, the development of structured reasoning techniques, the rise of automated prompt optimisation, and the current shift toward context design.',
            'The discipline did not emerge from a single paper or company. It grew from the overlap between research (few-shot learning, chain-of-thought reasoning, RAG), practitioner communities sharing prompt collections online, and the sudden public availability of powerful models that made good prompting immediately rewarding. By 2026, prompt engineering is no longer a niche trick — it is a baseline skill for anyone working with AI systems.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            '2019–2020: GPT-2 and early transformers — prompts were inputs, not a discipline',
            '2020: GPT-3 and Brown et al. introduced few-shot prompting as a paradigm shift',
            '2022: Chain-of-Thought reasoning prompts turned prompting into a structured skill',
            'Late 2022: ChatGPT brought prompt engineering into mainstream awareness and job postings',
            '2023: GPT-4, multimodal prompting, and frameworks formalised best practices',
            '2024–2026: Context design, automated prompting, and open-source LLMs redefined the field',
          ],
        },

        pre2020: {
          title: 'Before Prompt Engineering Had a Name (Pre-2020)',
          content: [
            'Before the term "prompt engineering" existed, researchers were already manipulating model inputs to elicit better outputs — they just did not call it that. Early transformer models like GPT-2 (2019, OpenAI) and BERT (2018, Google) were used through carefully chosen input text, but the practice was treated as part of data preprocessing, not a skill in its own right.',
            'GPT-2, released in February 2019, was a 1.5-billion-parameter model that could complete text in surprisingly coherent ways. Researchers and early practitioners noticed that the phrasing of an input dramatically changed the quality of the completion — but there was no framework, no terminology, and no community built around this observation yet. Prompts were inputs, not engineering artifacts.',
          ],
        },

        gpt3: {
          title: '2020: GPT-3 and the Few-Shot Breakthrough',
          content: [
            '**The modern history of prompt engineering effectively begins with GPT-3.** In May 2020, OpenAI released GPT-3, a 175-billion-parameter model, alongside the landmark paper by Brown et al., "Language Models are Few-Shot Learners" [External: Brown et al., 2020 – Language Models are Few-Shot Learners]. The paper demonstrated that by including a few examples of the desired task directly in the prompt — without any weight updates to the model — performance on downstream tasks improved dramatically.',
            'This was the seed of prompt engineering as a discipline. Researchers and developers realised that the same model could be turned into a translator, a summariser, a code generator, or a question-answering system simply by changing how the prompt was written. The model did not need retraining — it needed a better prompt. That insight reframed what a prompt was: not just an input, but a design artifact.',
            'See [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] for a practical guide to the technique GPT-3 made famous.',
          ],
        },

        skill: {
          title: '2021–Early 2022: From Prompt Tricks to a Recognised Skill',
          content: [
            'Between 2021 and early 2022, prompt crafting moved from research papers into practitioner communities. GitHub repositories with curated prompt collections appeared — "awesome-prompts" style lists that shared what worked for coding assistance, summarisation, and creative writing. Prompt collections, shared on Twitter and Reddit, became community assets. The Prompt Engineering Guide (promptingguide.ai) [External: Prompt Engineering Guide – promptingguide.ai] became one of the first dedicated references cataloguing techniques systematically.',
            'The term "prompt engineering" began appearing more frequently in research papers, blog posts, and job descriptions through this period. OpenAI\'s InstructGPT paper (Ouyang et al., 2022) introduced RLHF-tuned models that responded far more reliably to natural-language instructions — making prompt quality even more consequential. By mid-2022, it was clear that this was a transferable skill, not just a researcher\'s curiosity.',
          ],
        },

        cot: {
          title: '2022: Chain-of-Thought and Reasoning Prompts',
          content: [
            '**The introduction of Chain-of-Thought (CoT) prompting in 2022 was the most significant technical development in the discipline\'s short history.** Wei et al. (Google Brain) published "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", demonstrating that asking a model to reason step by step before answering dramatically improved performance on arithmetic, commonsense reasoning, and symbolic reasoning tasks. The implication was profound: the structure of the prompt could activate different reasoning behaviour — not just different facts.',
            'Related techniques followed quickly. Zhou et al. introduced least-to-most prompting, which decomposed complex problems into a sequence of simpler sub-problems solved in order. These approaches turned prompt engineering from a formatting exercise into a tool for eliciting structured reasoning from models that had not been explicitly trained to reason that way. Prompting had become scaffolding for cognition.',
            'For the full technique guide, see [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] and [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          title: 'Late 2022–2023: The ChatGPT Moment and the Prompt Engineer Job Title',
          content: [
            '**The release of ChatGPT on November 30, 2022, changed the public profile of prompt engineering overnight.** Within days, millions of people were experimenting with prompts and discovering that their results varied enormously based on how they phrased requests. Tech media covered "prompt engineering" as a skill worth learning. The Oxford English Dictionary added "prompt" as a verb related to AI in 2023, and the word itself became a runner-up for word of the year in multiple rankings.',
            'By early 2023, "prompt engineer" appeared as a job title with reported salaries of $175,000–$335,000 at companies including Anthropic, according to widely cited job postings. The role attracted significant media attention — Bloomberg, The Guardian, and The Atlantic all covered whether prompt engineering was a real career. The consensus at the time: it was a transitional role, part human-computer interface design, part subject-matter expertise, part quality assurance.',
            'The popularisation of the phrase "prompt engineering" is sometimes attributed to various practitioners and commentators. Richard Socher, former Chief Scientist at Salesforce, is mentioned in some commentary as having helped frame the idea early. The Wikipedia article on prompt engineering [External: Prompt Engineering – Wikipedia] provides a balanced overview of competing claims about the term\'s origins.',
          ],
        },

        gpt4: {
          title: '2023: GPT-4, Multimodal Prompting and Frameworks',
          content: [
            'The release of GPT-4 in March 2023 expanded prompt engineering in two directions simultaneously: larger context windows (up to 128K tokens in later versions) and multimodal inputs. Practitioners could now include images in prompts alongside text, opening prompt engineering to visual tasks — describing images, comparing diagrams, annotating charts. Early Gemini models from Google and multimodal Claude versions from Anthropic followed within months.',
            'The same year saw the formalisation of prompt engineering best practices. OpenAI published its official prompt engineering guide [External: OpenAI – Best Practices for Prompt Engineering]. Google Cloud released its own prompt engineering documentation [External: Google Cloud – Prompt Engineering for AI Guide]. Independent authors codified frameworks — CRAFT, CO-STAR, SPECS, RISEN, TRACE — that gave practitioners repeatable templates for structuring prompts, reducing the reliance on trial and error.',
            'These frameworks represented the maturation of prompt engineering from a personal skill into a teachable, shareable practice. See [Frameworks: Which Prompt Framework Should You Use?] for a guide to choosing between them, and [Fundamentals: Beyond Text: How to Prompt with Images] for the multimodal dimension.',
          ],
        },

        automated: {
          title: '2023–2024: Automated Prompt Engineering and RAG',
          content: [
            'A striking development in 2023 was research showing that LLMs could optimise prompts as well as humans could. Zhou et al. published "Large Language Models Are Human-Level Prompt Engineers" (APE), demonstrating that an LLM tasked with generating and evaluating prompt candidates could match or exceed human-written prompts on benchmark tasks. Stanford\'s DSPy framework (2023) took this further — allowing developers to describe what a prompt should accomplish and letting the system optimise the wording automatically.',
            'Simultaneously, Retrieval-Augmented Generation (RAG) — originally introduced by Lewis et al. at Meta in 2020 — became a central pattern in production AI systems. RAG injected retrieved documents directly into the prompt context, grounding model outputs in real, up-to-date sources rather than requiring prompts to contain all the necessary facts. This shifted the emphasis in prompt engineering from "how do I make the model know this?" to "how do I structure the context so the model uses this correctly?"',
            'See [Techniques: RAG Explained: How to Ground AI Answers in Real Data] and [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work] for coverage of the key techniques from this period.',
          ],
        },

        context: {
          title: '2024–2025: From Prompt Engineering to Context Design',
          content: [
            'By 2024, a new framing began to displace the simple idea of "write a better prompt." Practitioners and researchers started referring to context engineering — the practice of orchestrating what goes into the full context window: the system prompt, retrieved documents, tool outputs, conversation history, and user input, all composed deliberately to guide model behaviour. The prompt was no longer a standalone artifact; it was one layer in a designed context.',
            'Several developments accelerated this shift. Meta\'s Llama 3-class models (2024) made capable open-source LLMs available for private deployment, shifting some prompt engineering from cloud APIs to local infrastructure. Context windows grew to 1 million tokens or more (Gemini 1.5 Pro), making it practical to inject entire codebases, books, or document collections into a single prompt. Multi-agent frameworks like LangChain and AutoGen turned prompting into orchestration — one prompt triggers another model, which triggers a tool, which returns context to the next prompt.',
            'See [External: Prompt Engineering from 2020 to 2025 – AI Supremacy] and [External: The Evolution of Prompt Engineering to Context Design – 2026] for external perspectives on this transition.',
          ],
        },

        beyond2026: {
          title: '2026 and Beyond: Prompt Engineering as a Core Literacy',
          content: [
            'As of 2026, research and commentary increasingly describe prompt engineering not as a niche job title, but as a fundamental literacy skill for knowledge workers who use AI tools. Academic papers like "Prompt Engineering as a New 21st Century Skill" [External: Prompt engineering as a new 21st century skill – Frontiers] frame structured prompting alongside reading, writing, and computation as a baseline competency for working with generative AI systems.',
            'The role has split into two distinct tracks. The first is system and context design — the engineering of production AI systems where prompts form part of a larger architecture involving retrieval, agents, and evaluation pipelines. The second is everyday use — the ability to write clear, structured prompts that produce useful outputs without knowing the underlying architecture. Both tracks benefit from the same core principles: clear task specification, appropriate context, constraints, and output format.',
            'What has not changed, despite more capable models and automated tools, is the fundamental principle: the clearer and more structured the input, the more reliable and useful the output. The techniques, terminology, and tooling have matured, but the core insight from the GPT-3 era remains true in 2026.',
          ],
        },

        timeline: {
          title: 'Timeline: Key Milestones in Prompt Engineering',
          content: 'The table below summarises the key milestones from 2018 to 2026 — the events, papers, and model releases that shaped how prompt engineering evolved into its current form.',
          columns: ['Year', 'Milestone', 'Why It Matters'],
          rows: [
            { 'Year': '2018–2019', 'Milestone': 'BERT (Google) and GPT-2 (OpenAI) released', 'Why It Matters': 'Demonstrated transformer models could be guided by input phrasing — but no formal discipline yet' },
            { 'Year': '2020', 'Milestone': 'GPT-3 and Brown et al. "Language Models are Few-Shot Learners"', 'Why It Matters': 'Established few-shot prompting as a paradigm: rewriting the prompt changes the model\'s behaviour without retraining' },
            { 'Year': '2022 (Jan)', 'Milestone': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Why It Matters': 'Models trained to follow instructions — made prompt quality far more consequential' },
            { 'Year': '2022 (May)', 'Milestone': 'Chain-of-Thought prompting (Wei et al., Google Brain)', 'Why It Matters': 'Proved that prompt structure could elicit step-by-step reasoning — turned prompting into a cognitive scaffold' },
            { 'Year': '2022 (Nov)', 'Milestone': 'ChatGPT launch', 'Why It Matters': 'Brought prompt engineering into mainstream awareness; millions began experimenting overnight' },
            { 'Year': '2023 (Q1)', 'Milestone': '"Prompt engineer" job title reaches $300K+ salary postings; OED adds prompt as a verb', 'Why It Matters': 'Defined prompt engineering as a recognised profession and named skill' },
            { 'Year': '2023 (Mar)', 'Milestone': 'GPT-4 release; multimodal prompting with images', 'Why It Matters': 'Extended prompt engineering beyond text to visual inputs and large context windows' },
            { 'Year': '2023', 'Milestone': 'Frameworks formalised: CRAFT, CO-STAR, SPECS, RISEN; official guides from OpenAI and Google', 'Why It Matters': 'Turned prompt engineering from personal craft into teachable, shareable practice' },
            { 'Year': '2023–2024', 'Milestone': 'APE paper (Zhou et al.) and DSPy framework — AI-optimised prompts', 'Why It Matters': 'LLMs shown to write prompts as well as humans; automated prompt optimisation became practical' },
            { 'Year': '2024', 'Milestone': 'Llama 3-class models; context windows exceed 1M tokens (Gemini 1.5 Pro)', 'Why It Matters': 'Open-source LLMs for private deployment; massive context shifted focus to context engineering' },
            { 'Year': '2025–2026', 'Milestone': 'Context design and multi-agent orchestration replace simple prompt tweaking', 'Why It Matters': 'Prompting becomes one layer in a composed context — system-level thinking required' },
          ],
        },

        todayPractice: {
          title: 'How the History Shapes Today\'s Best Practices',
          content: [
            'Each phase of prompt engineering\'s evolution left a lasting deposit in current practice. The GPT-3 era gave us the core insight that model behaviour is shaped by input structure — not just content. The Chain-of-Thought era gave us explicit reasoning scaffolds: step-by-step prompting, prompt chaining, and tree-of-thought approaches. The framework era gave us reusable templates that encode best practices without requiring each practitioner to discover them from scratch.',
            'The RAG and context-design era gave us the understanding that prompts do not exist in isolation — they are composed with retrieved data, system instructions, and tool outputs to form a full context. And the automated-prompting era reminded us that the principles of good prompting are measurable: better-structured prompts produce better outputs in ways that can be evaluated and optimised systematically.',
          ],
          items: [
            'Reasoning techniques from 2022 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] and [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            'Framework development from 2023 → [Frameworks: Which Prompt Framework Should You Use?]',
            'Context window growth → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'Token economics across model generations → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG as a complement to pure prompting → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          title: 'FAQ: The Evolution of Prompt Engineering',
          faqs: [
            {
              q: 'Who first coined the term "prompt engineering"?',
              a: 'The exact origin is debated. The term appeared in research contexts as early as 2021 and gained wider use through 2022. Richard Socher is mentioned in some commentary as having helped frame the concept publicly, though no single person is credited with inventing it. The Wikipedia article on prompt engineering [External: Prompt Engineering – Wikipedia] provides a balanced overview of the competing claims.',
            },
            {
              q: 'Why did prompt engineering explode in popularity after ChatGPT?',
              a: 'ChatGPT was the first general-purpose AI model that millions of non-researchers could use immediately, for free, without writing code. The gap between a well-crafted prompt and a vague one was visible and immediately consequential — better prompts produced usably better outputs. That feedback loop, experienced simultaneously by millions of people, turned prompt engineering from a research concept into a mass skill.',
            },
            {
              q: 'How did research papers influence real-world prompting techniques?',
              a: 'The transfer was unusually fast for AI research. Chain-of-Thought prompting (Wei et al., 2022) went from academic paper to widely used practitioner technique within months, partly because it required no tooling — just a change in how you wrote the prompt. Few-shot prompting from the GPT-3 paper (Brown et al., 2020) was immediately adoptable by anyone with API access. The accessibility of the techniques accelerated their spread.',
            },
            {
              q: 'Is prompt engineering becoming less important as models improve?',
              a: 'No — more capable models respond better to well-structured prompts, not less. The gains from good prompting increase as the model becomes more capable of following precise instructions. What has changed is the level of prompt engineering required for simple tasks: conversational questions now require less crafting than they did in 2021. But for complex, production-grade outputs, structured prompting remains the most reliable lever available.',
            },
            {
              q: 'What is the difference between prompt engineering and context engineering?',
              a: 'Prompt engineering typically refers to designing the text input to a model to improve its output. Context engineering is a broader, more recent concept that refers to orchestrating everything in the model\'s context window: the system prompt, retrieved documents, conversation history, tool outputs, and user input — all composed deliberately. Context engineering treats the prompt as one component in a designed system, not a standalone artifact.',
            },
            {
              q: 'Will automated tools replace the need to understand prompt engineering?',
              a: 'Automated tools like DSPy can optimise prompt wording within defined objectives, but they require a human to specify what the objective is, what constraints apply, and how to evaluate success. Understanding prompt engineering principles remains necessary to use these tools effectively — and to diagnose when they produce the wrong outcome. Automation removes some of the manual iteration; it does not remove the need for structured thinking.',
            },
          ],
        },

      },
    },

    de: {
      theme: 'Fundamentals',
      title: 'Von GPT-2 bis heute: Wie sich Prompt Engineering entwickelt hat',
      intro: 'Die Geschichte des Prompt Engineerings von GPT-3 und Few-Shot-Prompting im Jahr 2020 bis zum Context Design im Jahr 2026.',
      publishDate: 'Veröffentlicht März 2026',
      readTime: '10 Min. Lesezeit',
      sections: {},
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'De GPT-2 à aujourd\'hui : Comment le prompt engineering a évolué',
      intro: 'L\'histoire du prompt engineering de GPT-3 et du few-shot prompting en 2020 au context design en 2026.',
      publishDate: 'Publié mars 2026',
      readTime: '10 min de lecture',
      sections: {},
    },
    ja: {
      theme: '基礎',
      title: 'GPT-2から現在まで：プロンプトエンジニアリングの進化',
      intro: '2020年のGPT-3とフューショットプロンプティングから2026年のコンテキストデザインまで、プロンプトエンジニアリングの歴史。',
      publishDate: '2026年3月公開',
      readTime: '10分で読める',
      sections: {},
    },
    zh: {
      theme: '基础知识',
      title: '从GPT-2到今天：提示词工程的演变',
      intro: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。',
      publishDate: '发布于2026年3月',
      readTime: '阅读约10分钟',
      sections: {},
    },
  },

  'prompt-building-blocks': {
    en: {
      theme: 'Fundamentals',
      title: 'The 5 Building Blocks Every Prompt Needs',
      intro: 'The 5 building blocks every prompt needs: Role & Context, Task, Input & Examples, Constraints, and Output Format. How to use each one.',
      publishDate: 'Published March 2026',
      readTime: '8 min read',
      sections: {

        definition: {
          title: 'What Are the 5 Building Blocks of a Prompt?',
          content: [
            '**The 5 building blocks every prompt needs are: Role & Context, Task / Instruction, Input & Examples, Constraints, and Output Format.** These five components are the minimum structure that separates a reliable, repeatable prompt from a vague question that produces inconsistent results.',
            'Each block solves a different failure mode. Role & Context tells the model who it is and what situation it is in. Task / Instruction tells it exactly what to do. Input & Examples give it the raw material and teaching signal. Constraints set the rules. Output Format specifies the shape of the answer. Together, they leave the model with nothing left to guess.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Role & Context: Tell the model who it is and what domain it is operating in',
            'Task / Instruction: State exactly what you want the model to produce — specific and testable',
            'Input & Examples: Provide the raw data and sample input/output pairs the model needs',
            'Constraints: Set the rules — what the model must and must not do',
            'Output Format: Specify the exact shape of the answer — JSON, bullets, table, or prose',
          ],
        },

        whyMatters: {
          title: 'Why These 5 Blocks Matter in 2026',
          content: [
            'The five-block model reflects the converged consensus across prompt engineering guidance from OpenAI, Google, Anthropic, and independent practitioners. Role, instructions, examples, constraints, and output format appear — under different names — in every major framework published since 2023. This is not coincidence: it is the minimum information a probabilistic model needs to produce a useful, consistent result.',
            'The business case is straightforward. Missing role and context produces generic answers that need rewriting. Missing constraints increases hallucination risk and off-brand output. Missing output format means results that cannot be parsed or copy-pasted directly. The 5-block model addresses all three failure modes at once, and applies equally to GPT-4-class models, Claude, Gemini, and locally-run LLMs.',
          ],
        },

        block1: {
          title: 'Block 1: Role & Context',
          content: [
            '**Role** tells the model what persona or expertise to adopt. **Context** tells it the situation, domain, and audience it is operating in. They are grouped together because they work as a pair — role is who the model is, and context is the environment that shapes what "good" means for that task.',
            'When you omit role and context, the model answers from a generic perspective — useful to no one in particular. With them, the same model becomes a senior tax advisor answering a question about VAT returns, a junior copywriter writing for a 19-year-old audience, or a data analyst summarising a quarterly report. The output calibrates to your actual situation.',
          ],
          items: [
            '**Specify the domain:** "You are a B2B SaaS copywriter" is more useful than "You are a writer"',
            '**Include the audience:** "Explain this to a non-technical CFO" constrains vocabulary and level of detail',
            '**Anchor the expertise level:** "Act as a senior security engineer" produces different output from "Act as a security engineer"',
            '**State the situation when it matters:** "You are reviewing a first draft" versus "You are writing from scratch" changes the model\'s approach',
          ],
        },

        block1Link: {
          content: 'To understand how role prompting evolved as models became more capable of following instructions, see [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
        },

        block2: {
          title: 'Block 2: Task / Instruction',
          content: [
            '**The Task / Instruction block is the explicit statement of what you want the model to do.** It is the most important block — every other block supports this one. A clear, specific, testable instruction reduces ambiguity to near-zero. A vague instruction is the single biggest cause of poor AI output across all models and use cases.',
            'Current best-practice guidance emphasises making the task actionable and observable: use a verb, state the deliverable, and where possible describe a success criterion. "Write a summary" is a task. "Summarise the following article in 3 bullet points, each under 20 words" is a task with a testable output. The difference in output quality is significant.',
          ],
          items: [
            '❌ Weak: "Write something about this topic"',
            '✅ Strong: "Write a 150-word LinkedIn post about the benefits of prompt engineering for non-technical managers"',
            '❌ Weak: "Analyse this data"',
            '✅ Strong: "Identify the top 3 trends in this dataset and rank them by revenue impact, highest first"',
          ],
        },

        block2Link: {
          content: 'Instructions interact directly with whether you provide examples — see [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] for when each approach works best.',
        },

        block3: {
          title: 'Block 3: Input & Examples',
          content: [
            '**Input** is the actual data, text, or material the model needs to work on. **Examples** are sample input/output pairs that demonstrate what a correct response looks like. These are separate concerns: input is the raw material for the current task, examples are the teaching signal that shapes how the model performs it.',
            'Including 1–3 examples (few-shot prompting) is the single most reliable technique for locking in output format and tone. When you show the model what a good answer looks like, it matches the pattern rather than inferring it from the task description alone. This matters most for specialised formats, consistent tone, and structured outputs where precision is required.',
          ],
          items: [
            '**When to add examples:** Specialised formats, consistent tone requirements, structured outputs, domain-specific vocabulary',
            '**When to stay zero-shot:** Simple factual questions, broad exploration, when you actively want the model\'s default response style',
            '**Vary your examples:** Identical examples teach only one pattern — cover the real range of inputs you expect',
            '**Use realistic data:** Real samples outperform idealised ones — the model learns from what you actually show it',
          ],
        },

        block3Link: {
          content: 'For a full breakdown of when to use examples and when to omit them, see [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?].',
        },

        block4: {
          title: 'Block 4: Constraints',
          content: [
            '**Constraints are the rules the model must follow: what it must do and what it must not do.** They include length limits, forbidden topics or phrases, required sources, brand voice rules, safety boundaries, and format restrictions. Constraints are the most commonly omitted block — and their absence is the primary cause of hallucinated facts, off-brand language, and outputs that arrive in the wrong format.',
            'Adding one well-scoped constraint is often the highest-leverage change you can make to an existing prompt. "Do not make up statistics" cuts hallucination risk sharply. "Never exceed 100 words" forces concision. "Only use information from the text provided" grounds the output in the source material and eliminates fabrication entirely for that task.',
          ],
          items: [
            '**Length constraints:** "Maximum 150 words", "No more than 5 bullet points"',
            '**Source constraints:** "Use only facts from the attached document", "Do not cite sources you cannot verify"',
            '**Tone and voice constraints:** "Write in a formal, third-person tone — no contractions, no colloquialisms"',
            '**Forbidden content:** "Do not mention competitor products", "Do not speculate beyond what the data shows"',
            '**Safety constraints:** "If the question cannot be answered from the provided context, say so — do not invent an answer"',
          ],
        },

        block4Links: {
          content: 'For the technique of using exclusions to shape output, see [Techniques: Negative Prompting: Tell the AI What NOT to Do]. For why unconstrained prompts hallucinate more, see [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them].',
        },

        block5: {
          title: 'Block 5: Output Format',
          content: [
            '**Output Format specifies the exact shape of the answer the model should produce.** This is the block that determines whether the output is directly usable or requires reformatting before it is useful. For automated pipelines, an unspecified output format means brittle, inconsistent parsing. For GEO, a structured output is more likely to be cited verbatim by AI search engines, because structured answers are easier to extract programmatically.',
            'The output format block can specify the file format (JSON, Markdown, CSV), the structure (table, bullet list, numbered steps), the length, and the labelling of sections. The more precisely you specify it, the less editing the output requires.',
          ],
          items: [
            '**JSON:** "Return the result as a JSON object with keys: title, summary, tags"',
            '**Markdown bullets:** "List each finding as a bullet point starting with a bold term, followed by one sentence of explanation"',
            '**Table:** "Format the comparison as a Markdown table with columns: Feature, Option A, Option B"',
            '**Structured prose:** "Structure the response with a heading for each major point and a maximum of 3 sentences per section"',
          ],
        },

        block5Link: {
          content: 'For a full guide to JSON mode and structured output across different models, see [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data].',
        },

        template: {
          title: 'Putting the 5 Blocks Together: A Simple Template',
          content: 'The template below shows all 5 blocks assembled in order for a single domain-neutral task. Each part is labelled so you can see exactly where each block begins and ends. Replace the content in each section to adapt it to any domain.',
          items: [
            '**[Role & Context]** You are a senior business analyst. The audience is a non-technical executive team reviewing a quarterly operations report.',
            '**[Task / Instruction]** Summarise the key findings from the report below. Focus on performance against targets, identify the two largest risks, and recommend one corrective action for each.',
            '**[Input]** [Paste the report text here]',
            '**[Constraints]** Use only information from the report. Do not speculate. Do not exceed 200 words in total. Write in plain language — no jargon.',
            '**[Output Format]** Return the response as three sections: "Key Findings" (3 bullet points), "Top Risks" (2 bullet points), "Recommended Actions" (2 bullet points, one per risk).',
          ],
        },

        templateNote: {
          content: 'This template works on GPT-4o, Claude, Gemini, and local LLMs via Ollama or LM Studio. The block order is a recommendation, not a rigid rule — but placing Role & Context first and Output Format last is the most common and reliable arrangement across all major models.',
        },

        frameworks: {
          title: 'How These Blocks Map to Frameworks and Tools',
          content: [
            'Popular prompt engineering frameworks are opinionated ways to arrange the same five building blocks under different names and in different orders. CRAFT, CO-STAR, and SPECS all map directly to this five-block model. Understanding the blocks first means you can apply any framework without memorising its specific terminology from scratch.',
            'The table below shows how each building block maps to the corresponding field in three widely used frameworks:',
          ],
          columns: ['Building Block', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Building Block': 'Role & Context', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'Building Block': 'Task / Instruction', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { 'Building Block': 'Input & Examples', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { 'Building Block': 'Constraints', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'Building Block': 'Output Format', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum includes 9 built-in frameworks that pre-fill these blocks in different configurations depending on the task type. For framework-specific guides, see [Frameworks: Which Prompt Framework Should You Use?], [Frameworks: CRAFT Framework], and [Frameworks: CO-STAR Framework].',
        },

        mistakes: {
          title: 'Common Mistakes with the 5 Blocks',
          items: [
            '**Missing role entirely:** The model answers from a generic perspective — specify domain and expertise level, even in one sentence',
            '**Vague context:** "Write for my audience" tells the model nothing — name the audience, their knowledge level, and what they will do with the output',
            '**Instruction that cannot be tested:** "Make it better" has no observable success criterion — replace with a specific, measurable task',
            '**No constraints on hallucination:** Without "use only provided information", the model fills gaps with plausible-sounding fabrications',
            '**Unspecified output format:** The model chooses its own structure — which changes between runs and breaks downstream processes',
            '**Merging everything into one paragraph:** Blocks mixed into a wall of text are harder for the model to parse — use line breaks or explicit labels for each block',
            '**Over-identical examples:** Three examples that are all the same teach only one pattern — vary them to cover the real range of inputs',
          ],
        },

        faq: {
          title: 'FAQ: The Building Blocks of a Prompt',
          faqs: [
            {
              q: 'Do I really need all 5 blocks in every prompt?',
              a: 'No. Simple, unambiguous tasks often need only a Task / Instruction and an Output Format. Add Role & Context when the domain or audience matters. Add Constraints when failure modes are costly. Add Examples when format precision is critical. Start minimal and add blocks only when the output does not meet your standard.',
            },
            {
              q: 'Is Role more important than Context, or the other way around?',
              a: 'They work as a pair — neither is sufficient alone. Role without context produces generic expert-mode output. Context without role produces situationally aware but tonally inconsistent output. For most tasks, one sentence combining both works well: "You are a [role] working with [audience] on [domain task]."',
            },
            {
              q: 'Can I keep prompts short and still include all 5 blocks?',
              a: 'Yes. Each block can be expressed in a single sentence. A complete five-block prompt can be under 100 words. Brevity is not the problem — vagueness is. A short, precise prompt with all five elements consistently outperforms a long, rambling one with none.',
            },
            {
              q: 'What is the difference between Context and Examples?',
              a: 'Context describes the situation, domain, and audience — it is background information that frames the task. Examples are sample input/output pairs that show the model what a correct answer looks like. Context tells the model where it is; examples show it what to produce. Both are useful, but they serve completely different purposes.',
            },
            {
              q: 'Where do constraints fit if I am using a framework like CRAFT or CO-STAR?',
              a: 'Every major framework has a field that maps to constraints — "Restrictions" in CRAFT, "Tone & Style" in CO-STAR, "Constraints" in SPECS. If your framework does not have an explicit constraints field, add your constraints at the end as a separate "Do not" section — all models handle this reliably.',
            },
            {
              q: 'Does output format matter if I am just asking a simple question?',
              a: 'For conversational questions, specifying format is optional. For any output that will be used downstream — pasted into a document, parsed by code, published, or reused across team members — specifying the format is essential. It is the difference between getting a result and getting a usable result.',
            },
          ],
        },

      },
    },

    de: {
      theme: 'Fundamentals',
      title: 'Die 5 Bausteine jedes Prompts',
      intro: 'Die 5 Bausteine jedes Prompts: Rolle & Kontext, Aufgabe, Eingabe & Beispiele, Einschränkungen und Ausgabeformat.',
      publishDate: 'Veröffentlicht März 2026',
      readTime: '8 Min. Lesezeit',
      sections: {},
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Les 5 éléments fondamentaux de tout prompt',
      intro: 'Les 5 éléments fondamentaux de tout prompt : Rôle & Contexte, Tâche, Entrée & Exemples, Contraintes et Format de sortie.',
      publishDate: 'Publié mars 2026',
      readTime: '8 min de lecture',
      sections: {},
    },
    ja: {
      theme: '基礎',
      title: 'すべてのプロンプトに必要な5つの構成要素',
      intro: 'プロンプトの5つの構成要素：役割とコンテキスト、タスク、入力と例、制約、出力形式。それぞれの使い方を解説します。',
      publishDate: '2026年3月公開',
      readTime: '8分で読める',
      sections: {},
    },
    zh: {
      theme: '基础知识',
      title: '每个提示词必需的5个构建模块',
      intro: '每个提示词必需的5个构建模块：角色与上下文、任务、输入与示例、约束条件和输出格式。',
      publishDate: '发布于2026年3月',
      readTime: '阅读约8分钟',
      sections: {},
    },
  },

}
