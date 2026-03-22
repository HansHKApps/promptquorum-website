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
  tableFormat?: boolean
}

export interface PEArticle {
  theme: string
  title: string
  intro: string
  publishDate: string
  readTime: string
  sections: Record<string, PESection>
  schema?: Record<string, unknown>
}

export const peContent: Record<string, Record<Language, PEArticle>> = {

  'what-is-prompt-engineering': {
    en: {
      theme: 'Fundamentals',
      title: 'What Is Prompt Engineering? — PromptQuorum Guide',
      intro: 'Prompt engineering: designing text inputs to get reliable, accurate outputs from LLMs like GPT-4o, Claude, and Gemini. Learn essential techniques, frameworks, and why it matters to AI output quality.',
      publishDate: '2026-03-01',
      readTime: '10 min read',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'What Is Prompt Engineering?',
        description: 'Prompt engineering: designing text inputs to get reliable, accurate outputs from LLMs. Learn essential techniques, frameworks, and why it matters.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['prompt engineering', 'AI prompting', 'LLM', 'GPT-4o', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      sections: {

        definition: {
          title: 'What Is Prompt Engineering?',
          content: [
            '**Prompt engineering is the practice of designing and structuring text inputs — called prompts — to get accurate, useful, and repeatable outputs from large language models (LLMs).** It applies to GPT-4o, Claude, Gemini, and locally-run models via Ollama or LM Studio. The difference between prompt engineering and "just asking AI a question" is the difference between a vague request and a precise instruction with a defined objective, context, and output format.',
            'Today, prompt engineering is a structured discipline with named techniques, reusable frameworks, and measurable outcomes. It is not about tricking AI systems or finding hidden commands — it is about giving a probabilistic model the clearest possible signal of what you need. A well-engineered prompt consistently produces usable output on the first attempt.',
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
            'A 2024 survey of prompting techniques (Schulhoff et al., "The Prompt Report", arXiv:2406.06608) catalogued over 58 discrete techniques used in production AI systems — all are structured variations of these seven building blocks applied in different combinations.',
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

        pqConsensusTest: {
          title: 'PromptQuorum Consensus Test: Prompt Structure Impact',
          content: [
            'PromptQuorum dispatched the same unstructured prompt ("summarize this text") to GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro. Results varied in length, detail, and structure across all three models. When the same task was rewritten using the five building blocks above, all three models produced consistent, on-format responses on the first attempt.',
            'This consensus effect — where structured prompts produce identical behavior across different models — is the core insight behind prompt engineering. The five building blocks work because they exploit how all major LLMs process instructions identically.',
          ],
        },

        techniques: {
          title: 'Common Prompt Engineering Techniques',
          tableFormat: true,
          items: [
            '| Technique | Best For | Example |',
            '|---|---|---|',
            '| Few-shot prompting | Teaching through examples | Providing 2–3 sample input/output pairs |',
            '| Chain-of-thought | Logic and multi-step tasks | "Think step-by-step before answering" |',
            '| Role-prompting | Domain-specific expertise | "Act as a marketing copywriter" |',
            '| Constraint-based | Limiting output style | "Write in exactly 150 words, no technical jargon" |',
            '| Negative prompting | Avoiding specific behaviors | "Do not use buzzwords or clichés" |',
            '| Self-consistency | Improving reliability | "Generate 5 answers and return the most common" |',
            '| Structured output | Machine-readable results | "Respond in JSON format with these fields..." |',
            '| Prompt chaining | Multi-step workflows | Breaking one complex task into 3–4 sequential prompts |',
            '| Tree-of-thought | Exploring multiple paths | "Consider 3 different approaches before choosing" |',
            '| RAG (Retrieval-Augmented Generation) | Grounding in facts | Attaching recent documents before prompting |',
            '| Persona-based | Different communication styles | "Explain like I am a 10-year-old" |',
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
            '**Model selection:** GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro respond differently to the same prompt. Choosing the right model for the task is part of the engineering process. Mistral AI (Europe) and Qwen (China) follow the same prompting principles but may require adjusted output format specifications due to differences in instruction-following behavior. The same structured prompt works globally across all major model families → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System vs. user prompts:** The system prompt sets persistent instructions for an entire session; the user prompt is the per-request input. Getting this split right determines consistency at scale → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Context windows:** Every model has a maximum token limit for input + output combined. Long prompts reduce the available space for the model\'s answer — and models start to ignore earlier content as the window fills → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Token limits and cost:** Precise, concise prompts use fewer tokens per call, reduce latency, and stay within rate limits — directly affecting cost at scale → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Multimodal prompting:** Modern LLMs like GPT-4o and Gemini accept images as well as text. Prompt engineering principles apply equally to image inputs → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Local vs. cloud models:** Prompt engineering techniques apply equally to cloud APIs and locally-run models via Ollama or LM Studio — though local models may require adjusted formatting due to smaller context windows and different instruction-following behaviour. PromptQuorum supports both local models (Ollama, LM Studio, vLLM) and cloud APIs (OpenAI, Anthropic, Google Gemini) through a single interface — letting you switch between providers without rewriting prompts, or compare the same prompt across multiple models simultaneously.',
          ],
        },

        canDo: {
          title: 'Prompt Engineering Limits: What It Can and Cannot Do',
          content: '**What prompt engineering reliably improves:**',
          items: [
            'Output consistency — the same structured prompt produces similar results across runs and team members',
            'Hallucination reduction — grounding, source constraints, and explicit scoping reduce fabricated facts. PromptQuorum\'s Quorum feature runs consensus checks across model responses, detecting hallucinations and contradictions by comparing how different models respond to the same structured prompt.',
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

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Fundamentals: AI Hallucinations — Why AI Makes Things Up] — understanding a core limitation of LLMs',
            '[Techniques: Chain-of-Thought Prompting — Make AI Show Its Reasoning] — the step-by-step technique that improves accuracy',
            '[Frameworks: CO-STAR Framework] — a structured template that organizes the fundamentals into a proven sequence',
          ],
        },

        faq: {
          title: 'FAQ: Prompt Engineering Basics',
          faqs: [
            {
              q: 'Is prompt engineering still useful with newer AI models?',
              a: 'Yes — and more so. More capable models are better at following precise instructions, which means the return on well-structured prompts increases as models improve. Even today, the most capable models produce inconsistent or vague output when given vague input. Structured prompts remain the most reliable way to get professional-grade output on the first attempt.',
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
              q: 'Will prompt engineering still matter long-term?',
              a: 'All available evidence points to yes. LLMs are not yet capable of reliably producing professional-grade output from unstructured natural language alone. Even as AI interfaces become more conversational, the underlying principles of good prompts — clear objective, relevant context, explicit constraints, specified output format — remain the difference between a useful and a useless AI response.',
            },
            {
              q: 'What is the difference between prompt engineering and fine-tuning?',
              a: 'Prompt engineering shapes the output of an existing model without changing the model itself — it works at inference time and requires no training. Fine-tuning modifies a model\'s weights by training it on a new dataset, changing its default behaviour permanently. Prompt engineering is faster, cheaper, and requires no ML expertise; fine-tuning is better when you need deep, consistent specialisation that prompts alone cannot achieve.',
            },
            {
              q: 'How does prompt engineering relate to a tool like PromptQuorum?',
              a: 'PromptQuorum is a multi-model AI dispatch tool built around prompt engineering principles. It includes 9 built-in prompt frameworks, an AI-powered prompt optimiser, and the ability to dispatch one prompt to multiple models simultaneously — GPT-4o, Claude, Gemini, and local models — and compare results side by side. It makes prompt engineering repeatable and removes the friction of testing across models manually.',
            },
            {
              q: 'Is prompt engineering still relevant now that AI agents exist?',
              a: 'Yes. AI agents — autonomous systems that plan and execute multi-step tasks — are built on top of prompt engineering. Every agent has a system prompt defining its role, constraints, and available tools. Every tool call is triggered by structured instructions. Prompt engineering is the foundation that makes agents controllable and predictable. As agents become more common, the skill becomes more important, not less.',
            },
            {
              q: 'How does a user prompt differ from a system prompt?',
              a: 'A system prompt is a persistent instruction set that applies to the entire session — it defines the model\'s role, constraints, and default behaviour before the user says anything. A user prompt is the per-request input — the specific task or question for that interaction. In most AI products, developers write the system prompt; end users write the user prompt. Both benefit from prompt engineering, but they serve different functions and require different design approaches. → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            },
          ],
        },

        sources: {
          title: 'Sources & Further Reading',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — the foundational paper demonstrating that step-by-step reasoning reduces hallucinations in math and logic tasks.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — empirical study of hallucination rates and mechanisms in neural text generation.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — Anthropic\'s approach to reducing harmful outputs and hallucinations through principles-based training.',
          ],
        },

      },
    },

    // Non-English languages fall back to English in the renderer
    de: {
      theme: 'Fundamentals',
      title: 'Was ist Prompt Engineering? — PromptQuorum Leitfaden',
      intro: 'Prompt Engineering: Texteinträge so gestalten, dass zuverlässige, genaue Ausgaben von LLMs wie GPT-4o, Claude und Gemini erzeugt werden. Lernen Sie wesentliche Techniken, Frameworks und warum dies für die Qualität der KI-Ausgabe wichtig ist.',
      publishDate: '2026-03-01',
      readTime: '10 Min. Lesezeit',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Was ist Prompt Engineering?',
        description: 'Prompt Engineering: Texteinträge so gestalten, dass zuverlässige, genaue Ausgaben von LLMs wie GPT-4o, Claude und Gemini erzeugt werden.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['Prompt Engineering', 'KI-Prompting', 'LLM', 'GPT-4o', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      sections: {
        definition: {
          title: 'Was ist Prompt Engineering?',
          content: [
            '**Prompt Engineering ist die Praxis, Texteingaben – sogenannte Prompts – so zu gestalten und zu strukturieren, dass große Sprachmodelle (LLMs) genaue, nützliche und wiederholbare Ausgaben liefern.** Dies gilt für GPT-4o, Claude, Gemini sowie lokal betriebene Modelle über Ollama oder LM Studio. Der Unterschied zwischen Prompt Engineering und „einfach eine Frage an eine KI stellen" ist der Unterschied zwischen einer vagen Anfrage und einer präzisen Anweisung mit klar definiertem Ziel, Kontext und Ausgabeformat.',
            'Heute ist Prompt Engineering eine strukturierte Disziplin mit benannten Techniken, wiederverwendbaren Frameworks und messbaren Ergebnissen. Es geht nicht darum, KI-Systeme zu überlisten oder versteckte Befehle zu finden – es geht darum, einem probabilistischen Modell das klarstmögliche Signal zu geben, was man benötigt. Ein gut entwickelter Prompt liefert konsistent nutzbare Ergebnisse beim ersten Versuch.',
            'Die Grundlagen des Prompt Engineerings beginnen mit dem Verständnis, dass LLMs Mustervervollständigungs-Engines sind. Sie erzeugen Ausgaben auf Basis der statistischen Wahrscheinlichkeit, was auf die Eingabe folgen sollte. Je präziser man Aufgabe, Kontext, Einschränkungen und gewünschtes Format angibt, desto weniger muss das Modell raten – und desto besser das Ergebnis.',
          ],
        },

        tldr: {
          title: 'Die wichtigsten Erkenntnisse',
          isTldr: true,
          items: [
            'Prompt Engineering = Eingaben so gestalten, dass LLMs zuverlässige, genaue Ausgaben liefern',
            'Gilt für alle wichtigen Modelle: GPT-4o, Claude, Gemini und lokale Modelle über Ollama oder LM Studio',
            'Zentrale Stellschrauben: Ziel, Kontext, Beispiele, Einschränkungen, Ausgabeformat und Rolle',
            'Prompt-Engineering-Techniken reichen von Zero-Shot über Chain-of-Thought bis RAG',
            'Prompt-Engineering-Frameworks (CRAFT, CO-STAR, SPECS usw.) machen Prompts wiederholbar und lehrbar',
            'Es ist der schnellste Weg, die Ausgabequalität von KI zu verbessern, ohne das Modell zu ändern',
          ],
        },

        whyMatters: {
          title: 'Warum Prompt Engineering wichtig ist',
          content: [
            'Dasselbe KI-Modell liefert dramatisch unterschiedliche Ausgaben, je nachdem wie eine Frage formuliert wird. Ein vager Prompt liefert eine vage Antwort. Ein strukturierter Prompt mit klarem Ziel, relevantem Kontext, expliziten Einschränkungen und einem festgelegten Ausgabeformat liefert ein Ergebnis, das keine Nachbearbeitung erfordert.',
            'Dies sind die wichtigsten Vorteile von konsequent angewandten Prompt-Engineering-Grundlagen:',
          ],
        },

        whyMattersList: {
          items: [
            '**Zuverlässigkeit:** Strukturierte Prompts liefern konsistente Ausgaben über mehrere Durchläufe und Modelle hinweg – derselbe Prompt funktioniert montags wie freitags',
            '**Höhere Ausgabequalität:** Explizite Anweisungen reduzieren Mehrdeutigkeiten im Modell und eliminieren Raten über die Absicht',
            '**Geschwindigkeit:** Gut formulierte Prompts eliminieren hin- und herlaufende Klärungszyklen → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Kostenkontrolle:** Präzise Prompts verwenden weniger Token pro Aufgabe und reduzieren Wiederholungsversuche → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Reduzierung von Halluzinationen:** Klares Erden, Quelleneinschränkungen und eingegrenzte Fragen reduzieren erfundene Fakten → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Modellübergreifende Kompatibilität:** Derselbe gut strukturierte Prompt funktioniert für GPT-4o, Claude, Gemini und lokale LLMs – und reduziert die Abhängigkeit von einzelnen Anbietern',
            '**Wiederholbarkeit:** Ein gut konzipierter Prompt ist ein wiederverwendbares Gut. Teams können Prompts teilen, versionieren und im Laufe der Zeit verbessern',
          ],
        },

        buildingBlocks: {
          title: 'Die wichtigsten Bausteine eines Prompts',
          content: [
            'Jeder effektive Prompt setzt sich aus einer Kombination dieser sieben Elemente zusammen. Man braucht selten alle sieben gleichzeitig – die Kunst liegt darin, zu wissen, welche für eine bestimmte Aufgabe erforderlich sind.',
            'Eine Übersichtsarbeit aus dem Jahr 2024 über Prompting-Techniken (Schulhoff et al., „The Prompt Report", arXiv:2406.06608) katalogisierte über 58 verschiedene Techniken, die in Produktions-KI-Systemen eingesetzt werden – alle sind strukturierte Variationen dieser sieben Bausteine in unterschiedlichen Kombinationen.',
            'Eine ausführlichere Aufschlüsselung mit Beispielen für jedes Element in der Praxis findet sich unter [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Ziel:** Die Aufgabe oder Frage, präzise formuliert – was das Modell produzieren soll',
            '**Kontext:** Hintergrundinformationen, die das Modell für eine korrekte Antwort benötigt – wer fragt, wofür die Ausgabe gedacht ist, welche Einschränkungen gelten',
            '**Anweisungen:** Konkrete Schritte oder Regeln, die das Modell befolgen soll – „in der Reihenfolge der Wichtigkeit auflisten", „in der zweiten Person schreiben", „nur die bereitgestellten Daten verwenden"',
            '**Beispiele:** 1–3 Beispiel-Eingabe/Ausgabe-Paare, die genau das Format oder den Stil demonstrieren, den man möchte (Few-Shot-Prompting)',
            '**Einschränkungen:** Explizite Grenzen, was das Modell NICHT tun soll – verbotene Themen, unerwünschte Formulierungen, Längenbeschränkungen, Stilrestriktionen',
            '**Ausgabeformat:** Wie die Antwort strukturiert sein soll – Aufzählungsliste, JSON-Objekt, Markdown-Tabelle, nummerierte Schritte, einfacher Absatz',
            '**Rolle / Persona:** Eine definierte Expertise oder Perspektive, die das Modell einnehmen soll – „Agiere als erfahrener Datenanalyst" oder „Du bist ein prägnanter technischer Autor"',
          ],
        },

        pqConsensusTest: {
          title: 'PromptQuorum Konsenstest: Auswirkungen der Prompt-Struktur',
          content: [
            'PromptQuorum entsendete denselben unstrukturierten Prompt ("fassen Sie diesen Text zusammen") an GPT-4o, Claude 3.5 Sonnet und Gemini 1.5 Pro. Die Ergebnisse unterschieden sich in Länge, Detail und Struktur auf allen drei Modellen. Als dieselbe Aufgabe mit den fünf Bausteinen oben umgeschrieben wurde, erzeugten alle drei Modelle konsistente, formatgerechte Antworten beim ersten Versuch.',
            'Dieser Konsenseffekt — bei dem strukturierte Prompts identisches Verhalten über verschiedene Modelle hinweg erzeugen — ist die Kernidee des Prompt Engineering. Die fünf Bausteine funktionieren, weil sie ausnutzen, wie alle großen LLMs Anweisungen identisch verarbeiten.',
          ],
        },

        techniques: {
          title: 'Gängige Prompt-Engineering-Techniken',
          tableFormat: true,
          items: [
            '| Technik | Best For | Beispiel |',
            '|---|---|---|',
            '| Few-Shot-Prompting | Lehren durch Beispiele | Bereitstellung von 2–3 Eingabe/Ausgabe-Paaren |',
            '| Chain-of-Thought | Logik und mehrstufige Aufgaben | „Denken Sie Schritt für Schritt, bevor Sie antworten" |',
            '| Rollen-Prompting | Domänenspezifisches Fachwissen | „Agiere als Marketingtexter" |',
            '| Einschränkungsbasiert | Begrenzung des Output-Stils | „Schreiben Sie genau 150 Wörter, keine technische Fachsprache" |',
            '| Negatives Prompting | Vermeidung spezifischer Verhaltensweisen | „Verwenden Sie nicht Schlagworte oder Klischees" |',
            '| Selbstkonsistenz | Verbesserung der Zuverlässigkeit | „Generieren Sie 5 Antworten und geben Sie die häufigste zurück" |',
            '| Strukturierte Ausgabe | Maschinenlesbare Ergebnisse | „Antwort im JSON-Format mit diesen Feldern..." |',
            '| Prompt Chaining | Mehrstufige Workflows | Aufteilung einer komplexen Aufgabe in 3–4 sequenzielle Prompts |',
            '| Tree-of-Thought | Exploration mehrerer Pfade | „Berücksichtigung von 3 verschiedenen Ansätzen vor der Auswahl" |',
            '| RAG (Retrieval-Augmented Generation) | Grundlegung in Fakten | Anhängen von aktuellen Dokumenten vor dem Prompting |',
            '| Persona-basiert | Unterschiedliche Kommunikationsstile | „Erklären Sie mir wie einem 10-Jährigen" |',
          ],
        },

        frameworks: {
          title: 'Prompt-Engineering-Frameworks',
          content: [
            '**Ein Prompt-Engineering-Framework ist eine benannte Vorlage, die festlegt, welche Bausteine in welcher Reihenfolge enthalten sein sollen.** Frameworks verwandeln Prompt Engineering von einer Ad-hoc-Fähigkeit in einen wiederholbaren Prozess. Sie sind einfacher zu lehren, leichter im Team zu teilen und schneller anzuwenden unter Zeitdruck als ein Prompt von Grund auf neu zu erstellen.',
            'Die folgende Tabelle zeigt fünf weit verbreitete Prompt-Engineering-Frameworks und die Situationen, für die jedes am besten geeignet ist:',
          ],
          columns: ['Framework', 'Am besten für'],
          rows: [
            { 'Framework': 'Single-Line', 'Am besten für': 'Schnelle einzeilige Aufgaben, bei denen Geschwindigkeit wichtiger ist als Präzision' },
            { 'Framework': 'CRAFT', 'Am besten für': 'Marketing, Texterstellung und kreative Inhalte mit einer definierten Stimme' },
            { 'Framework': 'SPECS', 'Am besten für': 'Recherche, Analyse und strukturierte faktenbasierte Ausgaben' },
            { 'Framework': 'CO-STAR', 'Am besten für': 'Komplexe Aufgaben, die vollständigen Kontext, eine definierte Zielgruppe und schrittweise Anweisungen erfordern' },
            { 'Framework': 'RISEN', 'Am besten für': 'Anleitungsschreiben, Schulungsmaterial und Bildungsinhalte' },
          ],
        },

        frameworksLinks: {
          content: [
            'Auf dieser Website sind zehn dokumentierte Frameworks verfügbar – jedes mit einem eigenen Leitfaden, der erklärt, wann man es verwenden sollte, wie der Prompt strukturiert wird, und durchgearbeitete Beispiele enthält. Beginne mit [Frameworks: Which Prompt Framework Should You Use?] für einen Entscheidungsleitfaden. Danach können [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework] und [Frameworks: RISEN Framework] einzeln erkundet werden.',
            'PromptQuorum enthält 9 eingebaute Frameworks und zwei benutzerdefinierte Framework-Slots. Jedes Framework kann direkt in der App angewendet werden, um den strukturierten Prompt mit dem Original zu vergleichen und eigene Vorlagen zu speichern – siehe [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'Wo Prompt Engineering in den KI-Workflow passt',
          content: [
            'Prompt Engineering funktioniert nicht isoliert. Jeder Prompt existiert in einem breiteren technischen Kontext – das gewählte Modell, das verfügbare Token-Budget und die Architektur des KI-Systems beeinflussen alle, was ein Prompt erreichen kann.',
            'Dies sind die wichtigsten technischen Entscheidungen, die mit Prompt Engineering interagieren:',
          ],
          items: [
            '**Modellauswahl:** GPT-4o, Claude 3.5 Sonnet und Gemini 1.5 Pro reagieren unterschiedlich auf denselben Prompt. Das richtige Modell für die Aufgabe zu wählen ist Teil des Engineering-Prozesses. Mistral AI (Europa) und Qwen (China) folgen denselben Prompting-Prinzipien, erfordern aber möglicherweise angepassste Ausgabeformat-Spezifikationen aufgrund von Unterschieden im Instruction-Following-Verhalten. Der gleiche strukturierte Prompt funktioniert weltweit in allen großen Modellfamilien → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System- vs. Benutzer-Prompts:** Der System-Prompt legt persistente Anweisungen für eine gesamte Sitzung fest; der Benutzer-Prompt ist die aufgabenbezogene Eingabe. Diese Aufteilung richtig hinzubekommen bestimmt die Konsistenz im großen Maßstab → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Kontextfenster:** Jedes Modell hat ein maximales Token-Limit für Eingabe + Ausgabe zusammen. Lange Prompts reduzieren den verfügbaren Platz für die Modellantwort – und Modelle beginnen, frühere Inhalte zu ignorieren, wenn das Fenster voll wird → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Token-Limits und Kosten:** Präzise, prägnante Prompts verwenden weniger Token pro Aufruf, reduzieren Latenz und bleiben innerhalb von Rate Limits – und beeinflussen direkt die Kosten im großen Maßstab → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Multimodales Prompting:** Moderne LLMs wie GPT-4o und Gemini akzeptieren Bilder ebenso wie Text. Prompt-Engineering-Prinzipien gelten gleichermaßen für Bildeingaben → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Lokale vs. Cloud-Modelle:** Prompt-Engineering-Techniken gelten gleichermaßen für Cloud-APIs und lokal betriebene Modelle über Ollama oder LM Studio – obwohl lokale Modelle aufgrund kleinerer Kontextfenster und anderem Anweisungsverhalten möglicherweise angepasste Formatierungen erfordern. PromptQuorum unterstützt sowohl lokale Modelle (Ollama, LM Studio, vLLM) als auch Cloud-APIs (OpenAI, Anthropic, Google Gemini) über eine einzige Schnittstelle — Sie können zwischen Anbietern wechseln, ohne Prompts umzuschreiben, oder dieselben Prompts gleichzeitig auf mehreren Modellen vergleichen.',
          ],
        },

        canDo: {
          title: 'Grenzen des Prompt Engineerings: Was es kann und nicht kann',
          content: '**Was Prompt Engineering zuverlässig verbessert:**',
          items: [
            'Ausgabekonsistenz – derselbe strukturierte Prompt liefert ähnliche Ergebnisse über verschiedene Durchläufe und Teammitglieder hinweg',
            'Reduzierung von Halluzinationen – Erdung, Quelleneinschränkungen und explizites Eingrenzen reduzieren erfundene Fakten. PromptQuorums Quorum-Funktion führt Konsensprüfungen über Modellantworten durch, erkennt Halluzinationen und Widersprüche, indem sie vergleicht, wie verschiedene Modelle auf denselben strukturierten Prompt reagieren.',
            'Formatkontrolle – das Festlegen des Ausgabeformats bedeutet, dass Ergebnisse direkt verwendbar ankommen, nicht erst bearbeitbar',
            'Iterationsgeschwindigkeit – weniger Klärungsrunden, mehr Erfolge beim ersten Versuch',
            'Modellübergreifende Portabilität – ein gut strukturierter Prompt funktioniert auf GPT-4o, Claude und Gemini ohne Umschreiben',
          ],
        },

        cannotDo: {
          content: '**Was andere Ansätze erfordert:**',
          items: [
            '**Zugriff auf private oder Echtzeit-Daten:** Wenn das Modell Dokumente, Datenbanken oder Live-Informationen benötigt, die nicht in einen Prompt passen – RAG verwenden → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Tiefe Domänenspezialisierung:** Wenn ein Modell zuverlässig einen spezifischen Wortschatz oder Stil über alle Sitzungen hinweg übernehmen soll – Fine-Tuning statt Prompts verwenden',
            '**Fehlendes Wissen:** Prompt Engineering kann einem Modell kein Wissen geben, auf das es nicht trainiert wurde. Wenn das Basismodell ein Thema nicht kennt, wird es kein Prompt lehren',
            '**Systematische Qualitätsbewertung:** Das Prüfen der KI-Ausgabequalität in großem Maßstab über Tausende von Durchläufen erfordert Evaluierungs-Pipelines und Werkzeuge, die über manuelles Prompting hinausgehen',
          ],
        },

        cannotDoNote: {
          content: 'Prompt Engineering ist der schnellste und zugänglichste Hebel zur Verbesserung der KI-Ausgabequalität – es erfordert keine Infrastrukturänderungen und kein Neu-Training. Für die Probleme, die es nicht lösen kann, weist es klar auf das richtige nächste Werkzeug hin.',
        },

        howToStart: {
          title: 'Wie man mit dem Erlernen von Prompt Engineering beginnt',
          content: 'Diese sechs Schritte führen einen intelligenten Anfänger auf dem kürzesten Weg durch das Material auf dieser Website von null zu produktiv:',
          numberedItems: [
            '**Die Grundlagen lesen.** Bevor man komplexe Prompts schreibt, sollte man verstehen, wie LLMs Text verarbeiten, was Token sind, was ein Kontextfenster bedeutet und warum Modelle halluzinieren. Der Abschnitt [Fundamentals] behandelt all dies in dedizierten Artikeln – beginne mit [Fundamentals: The 5 Building Blocks Every Prompt Needs] und [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Mit einzeiligen Prompts beginnen.** Einen klaren Satz schreiben, der die Aufgabe genau beschreibt. Beobachten, was das Modell zurückgibt, bevor man Struktur hinzufügt. Dies etabliert eine Basislinie – man muss wissen, was ein nackter Prompt produziert, bevor man ihn verbessern kann.',
            '**Ein Framework auf eine echte Aufgabe anwenden.** CRAFT für eine Schreibaufgabe oder CO-STAR für eine komplexe Anweisung wählen. Frameworks zwingen dazu, alle Elemente durchzudenken, die ein Prompt benötigt. Der Abschnitt [Frameworks] behandelt jedes Framework mit Beispielen → beginne mit [Frameworks: Which Prompt Framework Should You Use?].',
            '**Eine Technik nach der anderen hinzufügen.** Few-Shot-Beispiele für eine Aufgabe ausprobieren. Eine Einschränkung zu einer anderen hinzufügen. Chain-of-Thought bei einem Denkproblem testen. Änderungen zu isolieren ermöglicht zu sehen, welche Technik die Ausgabe tatsächlich verbessert hat. Der Abschnitt [Techniques] behandelt jede Technik ausführlich.',
            '**Über mehrere Modelle testen.** Derselbe Prompt liefert unterschiedliche Ergebnisse auf GPT-4o, Claude und Gemini. PromptQuorum verwenden, um einen Prompt gleichzeitig an mehrere Modelle zu senden und Antworten nebeneinander zu vergleichen – das ist der schnellste Weg zu finden, welches Modell und welche Formulierung für eine bestimmte Aufgabe am besten funktioniert.',
            '**Eine Prompt-Bibliothek für die eigenen Anwendungsfälle aufbauen.** Prompts, die funktionieren, speichern. Sie im Laufe der Zeit verfeinern. Eine Bibliothek getesteter Prompts für die eigene spezifische Domäne ist ein dauerhaftes Gut. Siehe [Use Topics: Build a Prompt Library That Saves Hours] für eine Anleitung zur Strukturierung und Pflege einer solchen.',
          ],
        },

        relatedReading: {
          title: 'Weiterführende Ressourcen',
          items: [
            '[Grundlagen: KI-Halluzinationen — Warum KI Dinge erfindet] — ein Kernverständnis der LLM-Grenzen',
            '[Techniken: Chain-of-Thought Prompting — LLMs zeigen lassen, wie sie denken] — die Schritt-für-Schritt-Technik, die die Genauigkeit verbessert',
            '[Frameworks: CO-STAR Framework] — eine strukturierte Vorlage, die die Grundlagen in einer bewährten Reihenfolge organisiert',
          ],
        },

        faq: {
          title: 'FAQ: Prompt-Engineering-Grundlagen',
          faqs: [
            {
              q: 'Ist Prompt Engineering bei neueren KI-Modellen noch nützlich?',
              a: 'Ja – und sogar mehr als zuvor. Leistungsfähigere Modelle können präzisen Anweisungen besser folgen, was bedeutet, dass der Nutzen gut strukturierter Prompts steigt, wenn Modelle sich verbessern. Selbst heute liefern die leistungsfähigsten Modelle inkonsistente oder vage Ausgaben bei vagen Eingaben. Strukturierte Prompts bleiben der zuverlässigste Weg, beim ersten Versuch professionelle Ausgaben zu erzielen.',
            },
            {
              q: 'Muss ich programmieren können, um Prompt Engineering zu erlernen?',
              a: 'Nein. Prompt Engineering ist in erster Linie eine Sprach- und Logikfähigkeit – die Fähigkeit, eine Aufgabe präzise zu formulieren, Fehlertypen vorauszusehen und zu spezifizieren, was man möchte. Programmierkenntnisse helfen beim Aufbau automatisierter Pipelines oder beim Parsen strukturierter Ausgaben, aber der überwiegende Teil der Prompt-Engineering-Arbeit erfordert keinerlei Programmierkenntnisse.',
            },
            {
              q: 'Was ist der Unterschied zwischen Prompt Engineering und traditioneller Programmierung?',
              a: 'Traditionelle Programmierung gibt einem Computer deterministische Anweisungen, die bei gleicher Eingabe immer dieselbe Ausgabe produzieren. Prompt Engineering gibt einem probabilistischen Modell strukturierte Anleitungen, die die Wahrscheinlichkeit einer nützlichen Ausgabe erhöhen – aber sie nicht garantieren können. Die Fähigkeit liegt darin, Prompts zu gestalten, die trotz dieser zugrundeliegenden Unsicherheit zuverlässige Ergebnisse liefern.',
            },
            {
              q: 'Was ist der Unterschied zwischen einer Prompt-Engineering-Technik und einem Framework?',
              a: 'Eine Technik ist ein spezifisches Muster, das angewendet wird, um eine bestimmte Ausgabequalität zu erreichen – Chain-of-Thought-Prompting verbessert zum Beispiel die Denk-Genauigkeit. Ein Framework ist eine strukturelle Vorlage, die alle Elemente eines Prompts organisiert – CO-STAR definiert zum Beispiel die Reihenfolge, in der Kontext, Ziel, Stil, Ton, Zielgruppe und Antwortformat anzugeben sind. Frameworks helfen beim Aufbau des Prompts; Techniken helfen dabei zu verfeinern, was das Modell damit macht.',
            },
            {
              q: 'Wird Prompt Engineering langfristig noch relevant sein?',
              a: 'Alle verfügbaren Belege deuten auf Ja hin. LLMs sind noch nicht in der Lage, zuverlässig professionelle Ausgaben aus unstrukturierter natürlicher Sprache allein zu produzieren. Selbst wenn KI-Oberflächen konversationeller werden, bleiben die zugrunde liegenden Prinzipien guter Prompts – klares Ziel, relevanter Kontext, explizite Einschränkungen, festgelegtes Ausgabeformat – der Unterschied zwischen einer nützlichen und einer nutzlosen KI-Antwort.',
            },
            {
              q: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?',
              a: 'Prompt Engineering gestaltet die Ausgabe eines bestehenden Modells, ohne das Modell selbst zu verändern – es funktioniert zur Inferenzzeit und erfordert kein Training. Fine-Tuning modifiziert die Gewichte eines Modells, indem es auf einem neuen Datensatz trainiert wird, und verändert sein Standardverhalten dauerhaft. Prompt Engineering ist schneller, günstiger und erfordert keine ML-Expertise; Fine-Tuning ist besser, wenn man eine tiefe, konsistente Spezialisierung benötigt, die Prompts allein nicht erreichen können.',
            },
            {
              q: 'Wie verhält sich Prompt Engineering zu einem Werkzeug wie PromptQuorum?',
              a: 'PromptQuorum ist ein Multi-Modell-KI-Dispatch-Werkzeug, das auf Prompt-Engineering-Prinzipien aufgebaut ist. Es enthält 9 eingebaute Prompt-Frameworks, einen KI-gestützten Prompt-Optimierer und die Möglichkeit, einen Prompt gleichzeitig an mehrere Modelle zu senden – GPT-4o, Claude, Gemini und lokale Modelle – und Ergebnisse nebeneinander zu vergleichen. Es macht Prompt Engineering wiederholbar und beseitigt den Aufwand, Modelle manuell zu testen.',
            },
            {
              q: 'Ist Prompt Engineering noch relevant, jetzt wo KI-Agenten existieren?',
              a: 'Ja. KI-Agenten – autonome Systeme, die mehrstufige Aufgaben planen und ausführen – basieren auf Prompt Engineering. Jeder Agent hat einen System-Prompt, der seine Rolle, Einschränkungen und verfügbaren Werkzeuge definiert. Jeder Tool-Aufruf wird durch strukturierte Anweisungen ausgelöst. Prompt Engineering ist die Grundlage, die Agenten kontrollierbar und vorhersehbar macht. Je verbreiteter Agenten werden, desto wichtiger wird diese Fähigkeit.',
            },
            {
              q: 'Wie unterscheidet sich ein Nutzer-Prompt von einem System-Prompt?',
              a: 'Ein System-Prompt ist ein dauerhafter Anweisungssatz, der für die gesamte Sitzung gilt – er definiert die Rolle des Modells, seine Einschränkungen und das Standardverhalten, bevor der Nutzer etwas sagt. Ein Nutzer-Prompt ist die anforderungsbezogene Eingabe – die spezifische Aufgabe oder Frage für diese Interaktion. In den meisten KI-Produkten schreiben Entwickler den System-Prompt; Endnutzer schreiben den Nutzer-Prompt. Beide profitieren von Prompt Engineering, erfüllen aber unterschiedliche Funktionen.',
            },
          ],
        },

        sources: {
          title: 'Quellen & Weiterführende Ressourcen',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — das grundlegende Paper, das zeigt, dass schrittweise Begründung Halluzinationen bei Mathe- und Logikaufgaben reduziert.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — empirische Studie von Halluzinationsraten und Mechanismen in neuronalen Textgenerierung.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — Anthropics Ansatz zur Reduzierung schädlicher Ausgaben und Halluzinationen durch prinzipiengestützte Schulung.',
          ],
        },
      },
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Qu\'est-ce que le Prompt Engineering ? — Guide PromptQuorum',
      intro: 'Prompt engineering : concevoir des entrées textuelles pour obtenir des sorties fiables et précises des LLM comme GPT-4o, Claude et Gemini. Apprenez les techniques essentielles, les frameworks et pourquoi cela compte pour la qualité de la sortie d\'IA.',
      publishDate: '2026-03-01',
      readTime: '10 min de lecture',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Qu\'est-ce que le Prompt Engineering ? — Guide PromptQuorum',
        description: 'Prompt engineering : concevoir des entrées textuelles pour obtenir des sorties fiables et précises des LLM. Apprenez les techniques essentielles, les frameworks et pourquoi cela compte.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['prompt engineering', 'prompting IA', 'LLM', 'GPT-4o', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      sections: {
        definition: {
          title: 'Qu\'est-ce que le prompt engineering ?',
          content: [
            '**Le prompt engineering est la pratique qui consiste à concevoir et à structurer des entrées textuelles — appelées prompts — pour obtenir des résultats précis, utiles et reproductibles des grands modèles de langage (LLM).** Il s\'applique à GPT-4o, Claude, Gemini et aux modèles exécutés localement via Ollama ou LM Studio. La différence entre le prompt engineering et le simple fait de « poser une question à une IA » est la même qu\'entre une demande vague et une instruction précise avec un objectif défini, un contexte et un format de sortie.',
            'Aujourd\'hui, le prompt engineering est une discipline structurée avec des techniques nommées, des frameworks réutilisables et des résultats mesurables. Il ne s\'agit pas de tromper les systèmes d\'IA ni de trouver des commandes cachées — il s\'agit de donner à un modèle probabiliste le signal le plus clair possible de ce dont vous avez besoin. Un prompt bien conçu produit de manière constante un résultat utilisable dès la première tentative.',
            'Les bases du prompt engineering commencent par la compréhension du fait que les LLM sont des moteurs de complétion de schémas. Ils génèrent des sorties en fonction de la probabilité statistique de ce qui doit suivre votre entrée. Plus vous spécifiez précisément la tâche, le contexte, les contraintes et le format souhaité, moins le modèle doit deviner — et meilleur est le résultat.',
          ],
        },

        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'Prompt engineering = concevoir des entrées pour obtenir des sorties fiables et précises des LLM',
            'S\'applique à tous les grands modèles : GPT-4o, Claude, Gemini et les modèles locaux via Ollama ou LM Studio',
            'Leviers clés : objectif, contexte, exemples, contraintes, format de sortie et rôle',
            'Les techniques de prompt engineering vont du zero-shot au Chain-of-Thought en passant par le RAG',
            'Les frameworks de prompt engineering (CRAFT, CO-STAR, SPECS, etc.) rendent les prompts reproductibles et enseignables',
            'C\'est le moyen le plus rapide d\'améliorer la qualité des sorties IA sans changer le modèle',
          ],
        },

        whyMatters: {
          title: 'Pourquoi le prompt engineering est important',
          content: [
            'Le même modèle d\'IA produit des résultats radicalement différents selon la façon dont une question est formulée. Un prompt vague donne une réponse vague. Un prompt structuré avec un objectif clair, un contexte pertinent, des contraintes explicites et un format de sortie spécifié produit un résultat qui ne nécessite aucune modification.',
            'Voici les principaux avantages des bases du prompt engineering appliquées de manière cohérente :',
          ],
        },

        whyMattersList: {
          items: [
            '**Fiabilité :** Les prompts structurés produisent des résultats cohérents d\'une exécution à l\'autre et d\'un modèle à l\'autre — le même prompt fonctionne le lundi comme le vendredi',
            '**Meilleure qualité de sortie :** Les instructions explicites réduisent l\'ambiguïté du modèle et éliminent les suppositions sur l\'intention',
            '**Rapidité :** Les prompts bien formulés éliminent les cycles de clarification allers-retours → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Contrôle des coûts :** Les prompts précis utilisent moins de tokens par tâche et réduisent les réessais → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Réduction des hallucinations :** Un ancrage clair, des contraintes de sources et des questions ciblées réduisent les faits inventés → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Compatibilité multi-modèles :** Le même prompt bien structuré fonctionne sur GPT-4o, Claude, Gemini et les LLM locaux — réduisant la dépendance à un fournisseur',
            '**Reproductibilité :** Un prompt bien conçu est un actif réutilisable. Les équipes peuvent partager, versionner et améliorer les prompts au fil du temps',
          ],
        },

        buildingBlocks: {
          title: 'Les éléments fondamentaux d\'un prompt',
          content: [
            'Tout prompt efficace est assemblé à partir d\'une combinaison de ces sept éléments. Il est rare d\'avoir besoin des sept à la fois — la compétence réside dans le fait de savoir lesquels inclure pour une tâche donnée.',
            'Une étude de 2024 sur les techniques de prompting (Schulhoff et al., « The Prompt Report », arXiv:2406.06608) a recensé plus de 58 techniques distinctes utilisées dans les systèmes d\'IA en production — toutes sont des variations structurées de ces sept blocs de construction appliqués dans différentes combinaisons.',
            'Pour une analyse approfondie avec des exemples de chaque élément en action, voir [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Objectif :** La tâche ou la question, formulée avec précision — ce que vous voulez que le modèle produise',
            '**Contexte :** Les informations de fond dont le modèle a besoin pour répondre correctement — qui pose la question, à quoi sert la sortie, quelles contraintes s\'appliquent',
            '**Instructions :** Les étapes ou règles spécifiques que le modèle doit suivre — « lister par ordre d\'importance », « écrire à la deuxième personne », « utiliser uniquement les données fournies »',
            '**Exemples :** 1 à 3 paires entrée/sortie qui illustrent le format ou le style exact souhaité (few-shot prompting)',
            '**Contraintes :** Les limites explicites sur ce que le modèle NE doit PAS faire — sujets interdits, phrases à proscrire, limites de longueur, restrictions de style',
            '**Format de sortie :** Comment la réponse doit être structurée — liste à puces, objet JSON, tableau Markdown, étapes numérotées, paragraphe simple',
            '**Rôle / persona :** Une expertise ou une perspective définie que le modèle doit adopter — « Agis comme un analyste de données senior » ou « Tu es un rédacteur technique concis »',
          ],
        },

        pqConsensusTest: {
          title: 'Test de consensus PromptQuorum : Impact de la structure du prompt',
          content: [
            'PromptQuorum a envoyé le même prompt non structuré ("résumez ce texte") à GPT-4o, Claude 3.5 Sonnet et Gemini 1.5 Pro. Les résultats variaient en longueur, détail et structure sur tous les trois modèles. Lorsque la même tâche a été réécrite à l\'aide des cinq blocs de construction ci-dessus, les trois modèles ont produit des réponses cohérentes et formatées correctement au premier essai.',
            'Cet effet de consensus — où les prompts structurés produisent un comportement identique entre différents modèles — est l\'idée centrale du prompt engineering. Les cinq blocs de construction fonctionnent parce qu\'ils exploitent la manière dont tous les principaux LLM traitent les instructions de manière identique.',
          ],
        },

        techniques: {
          title: 'Techniques courantes de prompt engineering',
          tableFormat: true,
          items: [
            '| Technique | Idéal pour | Exemple |',
            '|---|---|---|',
            '| Few-shot prompting | Enseignement par les exemples | Fournir 2–3 paires entrée/sortie |',
            '| Chain-of-thought | Logique et tâches en plusieurs étapes | « Réfléchissez étape par étape avant de répondre » |',
            '| Role-prompting | Expertise spécifique à un domaine | « Agis comme un rédacteur marketing » |',
            '| Constraint-based | Limitation du style de sortie | « Écrivez en exactement 150 mots, pas de jargon technique » |',
            '| Negative prompting | Éviter des comportements spécifiques | « N\'utilisez pas de clichés ou de termes marketing » |',
            '| Self-consistency | Amélioration de la fiabilité | « Générez 5 réponses et retournez la plus commune » |',
            '| Structured output | Résultats lisibles par machine | « Répondez au format JSON avec ces champs... » |',
            '| Prompt chaining | Flux de travail en plusieurs étapes | Diviser une tâche complexe en 3–4 prompts séquentiels |',
            '| Tree-of-thought | Exploration de plusieurs chemins | « Considérez 3 approches différentes avant de choisir » |',
            '| RAG (Retrieval-Augmented Generation) | Ancrage dans les faits | Joindre des documents récents avant de faire une demande |',
            '| Persona-based | Styles de communication différents | « Explique comme si j\'avais 10 ans » |',
          ],
        },

        frameworks: {
          title: 'Frameworks de prompt engineering',
          content: [
            '**Un framework de prompt engineering est un modèle nommé qui spécifie quels éléments inclure et dans quel ordre.** Les frameworks transforment le prompt engineering d\'une compétence ad hoc en un processus reproductible. Ils sont plus faciles à enseigner, plus faciles à partager au sein d\'une équipe, et plus rapides à appliquer sous pression que de construire un prompt de zéro.',
            'Le tableau ci-dessous présente cinq frameworks de prompt engineering largement utilisés et les situations pour lesquelles chacun est le mieux adapté :',
          ],
          columns: ['Framework', 'Idéal pour'],
          rows: [
            { 'Framework': 'Single-Line', 'Idéal pour': 'Les tâches rapides en une ligne où la vitesse prime sur la précision' },
            { 'Framework': 'CRAFT', 'Idéal pour': 'Le marketing, la rédaction et le contenu créatif avec une voix définie' },
            { 'Framework': 'SPECS', 'Idéal pour': 'La recherche, l\'analyse et les sorties structurées basées sur les faits' },
            { 'Framework': 'CO-STAR', 'Idéal pour': 'Les tâches complexes nécessitant un contexte complet, un public défini et des instructions pas à pas' },
            { 'Framework': 'RISEN', 'Idéal pour': 'La rédaction pédagogique, le matériel de formation et le contenu éducatif' },
          ],
        },

        frameworksLinks: {
          content: [
            'Ce site documente dix frameworks — chacun avec son propre guide couvrant quand l\'utiliser, comment structurer le prompt et des exemples concrets. Commencez par [Frameworks: Which Prompt Framework Should You Use?] pour un guide de décision. Explorez ensuite [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework] et [Frameworks: RISEN Framework] individuellement.',
            'PromptQuorum inclut 9 frameworks intégrés et deux emplacements pour des frameworks personnalisés. Vous pouvez appliquer n\'importe quel framework directement dans l\'application, comparer le prompt structuré avec votre original et sauvegarder vos propres modèles — voir [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'La place du prompt engineering dans le flux de travail IA',
          content: [
            'Le prompt engineering ne fonctionne pas en isolation. Chaque prompt existe dans un contexte technique plus large — le modèle que vous choisissez, le budget de tokens dont vous disposez et l\'architecture de votre système IA influencent tous ce qu\'un prompt peut accomplir.',
            'Voici les principales décisions techniques qui interagissent avec le prompt engineering :',
          ],
          items: [
            '**Sélection du modèle :** GPT-4o, Claude 3.5 Sonnet et Gemini 1.5 Pro réagissent différemment au même prompt. Choisir le bon modèle pour la tâche fait partie du processus d\'ingénierie → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**Prompts système vs. prompts utilisateur :** Le prompt système définit des instructions persistantes pour toute une session ; le prompt utilisateur est l\'entrée par demande. Bien gérer cette séparation détermine la cohérence à grande échelle → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Fenêtres de contexte :** Chaque modèle a une limite maximale de tokens pour l\'entrée et la sortie combinées. Les prompts longs réduisent l\'espace disponible pour la réponse du modèle — et les modèles commencent à ignorer le contenu antérieur à mesure que la fenêtre se remplit → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Limites de tokens et coûts :** Les prompts précis et concis utilisent moins de tokens par appel, réduisent la latence et restent dans les limites de débit — ce qui impacte directement les coûts à grande échelle → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Prompting multimodal :** Les LLM modernes comme GPT-4o et Gemini acceptent des images en plus du texte. Les principes du prompt engineering s\'appliquent également aux entrées d\'images → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Modèles locaux vs. cloud :** Les techniques de prompt engineering s\'appliquent aussi bien aux API cloud qu\'aux modèles exécutés localement via Ollama ou LM Studio — bien que les modèles locaux puissent nécessiter un formatage ajusté en raison de fenêtres de contexte plus petites et d\'un comportement de suivi des instructions différent. PromptQuorum supporte à la fois les modèles locaux (Ollama, LM Studio, vLLM) et les API cloud (OpenAI, Anthropic, Google Gemini) via une interface unique — vous permettant de basculer entre les fournisseurs sans réécrire les prompts, ou de comparer les mêmes prompts sur plusieurs modèles simultanément.',
            '**Perspective régionale :** Mistral AI (Europe) et Qwen (Chine) suivent les mêmes principes de prompting, mais peuvent nécessiter des spécifications de format de sortie ajustées en raison des différences de comportement d\'instruction. Le même prompt structuré fonctionne mondialement sur toutes les principales familles de modèles.',
          ],
        },

        canDo: {
          title: 'Limites du prompt engineering : ce qu\'il peut et ne peut pas faire',
          content: '**Ce que le prompt engineering améliore de manière fiable :**',
          items: [
            'Cohérence des sorties — le même prompt structuré produit des résultats similaires d\'une exécution à l\'autre et entre membres d\'équipe',
            'Réduction des hallucinations — l\'ancrage, les contraintes de sources et le ciblage explicite réduisent les faits inventés. La fonction Quorum de PromptQuorum effectue des vérifications de consensus sur les réponses des modèles, détectant les hallucinations et les contradictions en comparant comment différents modèles répondent au même prompt structuré.',
            'Contrôle du format — spécifier le format de sortie signifie que les résultats arrivent prêts à l\'emploi, pas prêts à être modifiés',
            'Vitesse d\'itération — moins de tours de clarification, plus de succès dès la première tentative',
            'Portabilité multi-modèles — un prompt bien structuré fonctionne sur GPT-4o, Claude et Gemini sans réécriture',
          ],
        },

        cannotDo: {
          content: '**Ce qui nécessite encore d\'autres approches :**',
          items: [
            '**Accès aux données privées ou en temps réel :** Quand le modèle a besoin de documents, bases de données ou informations live qui ne peuvent pas tenir dans un prompt — utilisez le RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Spécialisation approfondie dans un domaine :** Quand un modèle doit adopter de manière fiable un vocabulaire ou un style spécifique dans toutes les sessions — utilisez le fine-tuning, pas les prompts',
            '**Connaissances manquantes :** Le prompt engineering ne peut pas donner à un modèle des connaissances sur lesquelles il n\'a pas été entraîné. Si le modèle de base ne connaît pas un sujet, aucun prompt ne lui apprendra',
            '**Évaluation systématique de la qualité :** Vérifier la qualité des sorties IA à grande échelle sur des milliers d\'exécutions nécessite des pipelines d\'évaluation et des outils qui dépassent le prompting manuel',
          ],
        },

        cannotDoNote: {
          content: 'Le prompt engineering est le levier le plus rapide et le plus accessible pour améliorer la qualité des sorties IA — il ne nécessite aucun changement d\'infrastructure ni de réentraînement. Pour les problèmes qu\'il ne peut pas résoudre, il indique clairement le bon outil suivant.',
        },

        howToStart: {
          title: 'Comment commencer à apprendre le prompt engineering',
          content: 'Ces six étapes permettent à un débutant intelligent de passer de zéro à productif par le chemin le plus court à travers le matériel de ce site :',
          numberedItems: [
            '**Lisez les Fondamentaux.** Avant d\'écrire des prompts complexes, comprenez comment les LLM traitent le texte, ce que sont les tokens, ce que signifie une fenêtre de contexte et pourquoi les modèles hallucinent. La section [Fundamentals] couvre tout cela dans des articles dédiés — commencez par [Fundamentals: The 5 Building Blocks Every Prompt Needs] et [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Commencez par des prompts en une ligne.** Écrivez une phrase claire décrivant exactement votre tâche. Observez ce que le modèle retourne avant d\'ajouter de la structure. Cela établit une base de référence — vous devez savoir ce qu\'un prompt brut produit avant de pouvoir l\'améliorer.',
            '**Appliquez un framework à une vraie tâche.** Choisissez CRAFT pour une tâche d\'écriture ou CO-STAR pour une instruction complexe. Les frameworks vous obligent à réfléchir à tous les éléments dont un prompt a besoin. La section [Frameworks] couvre chaque framework avec des exemples → commencez par [Frameworks: Which Prompt Framework Should You Use?].',
            '**Ajoutez une technique à la fois.** Essayez des exemples few-shot sur une tâche. Ajoutez une contrainte à une autre. Testez le Chain-of-Thought sur un problème de raisonnement. Isoler les changements vous permet de voir quelle technique a réellement amélioré la sortie. La section [Techniques] couvre chaque technique en profondeur.',
            '**Testez sur plusieurs modèles.** Le même prompt produit des résultats différents sur GPT-4o, Claude et Gemini. Utilisez PromptQuorum pour envoyer un prompt à plusieurs modèles simultanément et comparer les réponses côte à côte — c\'est le moyen le plus rapide de trouver quel modèle et quelle formulation fonctionnent le mieux pour une tâche spécifique.',
            '**Constituez une bibliothèque de prompts pour vos cas d\'usage.** Sauvegardez les prompts qui fonctionnent. Affinez-les au fil du temps. Une bibliothèque de prompts testés pour votre domaine spécifique est un actif durable. Voir [Use Topics: Build a Prompt Library That Saves Hours] pour un guide sur la façon de la structurer et de la maintenir.',
          ],
        },

        faq: {
          title: 'FAQ : Les bases du prompt engineering',
          faqs: [
            {
              q: 'Le prompt engineering est-il encore utile avec les nouveaux modèles d\'IA ?',
              a: 'Oui — et même davantage. Les modèles plus capables suivent mieux les instructions précises, ce qui signifie que le retour sur des prompts bien structurés augmente à mesure que les modèles s\'améliorent. Même aujourd\'hui, même les modèles les plus capables produisent des sorties incohérentes ou vagues lorsqu\'on leur donne des entrées vagues. Les prompts structurés restent le moyen le plus fiable d\'obtenir une sortie de qualité professionnelle dès la première tentative.',
            },
            {
              q: 'Faut-il savoir coder pour apprendre le prompt engineering ?',
              a: 'Non. Le prompt engineering est avant tout une compétence de langage et de logique — la capacité à formuler une tâche avec précision, à anticiper les modes d\'échec et à spécifier ce que l\'on veut. La programmation est utile lors de la construction de pipelines automatisés ou de l\'analyse de sorties structurées, mais la grande majorité du travail de prompt engineering ne nécessite aucune programmation.',
            },
            {
              q: 'Quelle est la différence entre le prompt engineering et la programmation traditionnelle ?',
              a: 'La programmation traditionnelle donne à un ordinateur des instructions déterministes qui produisent la même sortie à chaque fois, avec la même entrée. Le prompt engineering donne à un modèle probabiliste des orientations structurées qui augmentent la probabilité d\'une sortie utile — mais ne peut pas la garantir. La compétence réside dans la conception de prompts qui produisent des résultats fiables malgré cette incertitude sous-jacente.',
            },
            {
              q: 'Quelle est la différence entre une technique de prompt engineering et un framework ?',
              a: 'Une technique est un schéma spécifique appliqué pour atteindre une qualité de sortie particulière — par exemple, le prompting Chain-of-Thought améliore la précision du raisonnement. Un framework est un modèle structurel qui organise tous les éléments d\'un prompt — par exemple, CO-STAR définit l\'ordre dans lequel spécifier le contexte, l\'objectif, le style, le ton, le public et le format de réponse. Les frameworks vous aident à construire le prompt ; les techniques vous aident à affiner ce que le modèle en fait.',
            },
            {
              q: 'Le prompt engineering sera-t-il encore important dans quelques années ?',
              a: 'Toutes les preuves disponibles indiquent que oui. Les LLM ne sont pas encore capables de produire de manière fiable des sorties de qualité professionnelle à partir d\'un langage naturel non structuré seul. Même si les interfaces IA deviennent plus conversationnelles, les principes sous-jacents des bons prompts — objectif clair, contexte pertinent, contraintes explicites, format de sortie spécifié — restent la différence entre une réponse IA utile et inutile.',
            },
            {
              q: 'Quelle est la différence entre le prompt engineering et le fine-tuning ?',
              a: 'Le prompt engineering façonne la sortie d\'un modèle existant sans modifier le modèle lui-même — il fonctionne au moment de l\'inférence et ne nécessite aucun entraînement. Le fine-tuning modifie les poids d\'un modèle en l\'entraînant sur un nouveau jeu de données, changeant définitivement son comportement par défaut. Le prompt engineering est plus rapide, moins coûteux et ne nécessite aucune expertise en ML ; le fine-tuning est préférable quand vous avez besoin d\'une spécialisation profonde et cohérente que les prompts seuls ne peuvent pas atteindre.',
            },
            {
              q: 'Quel est le rapport entre le prompt engineering et un outil comme PromptQuorum ?',
              a: 'PromptQuorum est un outil de dispatch multi-modèles construit autour des principes du prompt engineering. Il inclut 9 frameworks de prompts intégrés, un optimiseur de prompts propulsé par IA, et la capacité d\'envoyer un prompt à plusieurs modèles simultanément — GPT-4o, Claude, Gemini et les modèles locaux — et de comparer les résultats côte à côte. Il rend le prompt engineering reproductible et supprime la friction des tests manuels sur plusieurs modèles.',
            },
            {
              q: 'Le prompt engineering est-il encore pertinent maintenant que les agents IA existent ?',
              a: 'Oui. Les agents IA — des systèmes autonomes qui planifient et exécutent des tâches en plusieurs étapes — sont construits sur le prompt engineering. Chaque agent possède un system prompt définissant son rôle, ses contraintes et ses outils disponibles. Chaque appel d\'outil est déclenché par des instructions structurées. Le prompt engineering est le fondement qui rend les agents contrôlables et prévisibles. À mesure que les agents se généralisent, cette compétence devient plus importante, pas moins.',
            },
            {
              q: 'Quelle est la différence entre un prompt utilisateur et un system prompt ?',
              a: 'Un system prompt est un ensemble d\'instructions persistantes qui s\'appliquent à toute la session — il définit le rôle du modèle, ses contraintes et son comportement par défaut avant que l\'utilisateur ne parle. Un prompt utilisateur est l\'entrée par requête — la tâche ou question spécifique pour cette interaction. Dans la plupart des produits IA, les développeurs rédigent le system prompt ; les utilisateurs finaux rédigent le prompt utilisateur. Les deux bénéficient du prompt engineering, mais remplissent des fonctions différentes.',
            },
          ],
        },

        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Fondamentaux : Les hallucinations de l\'IA — Pourquoi l\'IA invente des choses] — comprendre une limitation fondamentale des LLM',
            '[Techniques : Chain-of-Thought Prompting — Faire montrer son raisonnement à l\'IA] — la technique pas à pas qui améliore la précision',
            '[Frameworks : Framework CO-STAR] — un modèle structuré qui organise les fondamentaux dans une séquence éprouvée',
          ],
        },

        sources: {
          title: 'Sources et lectures complémentaires',
          items: [
            'Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903',
            'Brown et al., 2020. "Language Models are Few-Shot Learners." arXiv:2005.14165',
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
          ],
        },
      },
    },
    ja: {
      theme: '基礎',
      title: 'プロンプトエンジニアリングとは？',
      intro: 'プロンプトエンジニアリングとは、大規模言語モデルから正確で有用かつ再現性のある出力を得るために、テキスト入力（プロンプト）を設計・構造化する実践です。',
      publishDate: '2026年3月公開',
      readTime: '10分で読める',
      sections: {
        definition: {
          title: 'プロンプトエンジニアリングとは何か？',
          content: [
            '**プロンプトエンジニアリングとは、大規模言語モデル（LLM）から正確で有用かつ再現性のある出力を得るために、「プロンプト」と呼ばれるテキスト入力を設計・構造化する実践です。** GPT-4o、Claude、Gemini、そしてOllamaやLM Studioを介してローカルで動作するモデルにも適用されます。プロンプトエンジニアリングと「AIにただ質問する」の違いは、漠然としたリクエストと、明確な目標・コンテキスト・出力形式を備えた精密な指示との違いに等しいです。',
            '現在、プロンプトエンジニアリングは、名前の付いたテクニック・再利用可能なフレームワーク・測定可能な成果を持つ体系的な分野として確立されています。AIシステムを騙したり、隠しコマンドを探したりするものではなく、確率的なモデルに対して、必要なものを可能な限り明確に伝えることが目的です。よく設計されたプロンプトは、初回の試みで一貫して使用可能な出力を生成します。',
            'プロンプトエンジニアリングの基礎は、LLMがパターン補完エンジンであるという理解から始まります。モデルは、入力の後に続くべき内容の統計的確率に基づいて出力を生成します。タスク・コンテキスト・制約・希望する形式を正確に指定するほど、モデルが推測する必要がなくなり、結果も向上します。',
          ],
        },

        tldr: {
          title: 'まとめ',
          isTldr: true,
          items: [
            'プロンプトエンジニアリング＝LLMから信頼性が高く正確な出力を得るための入力設計',
            'GPT-4o、Claude、Gemini、OllamaやLM Studio経由のローカルモデルを含む主要モデルすべてに適用可能',
            '主要な要素：目標、コンテキスト、例、制約、出力形式、役割',
            'プロンプトエンジニアリングのテクニックはゼロショットから思考の連鎖（Chain-of-Thought）、RAG（検索拡張生成）まで多岐にわたる',
            'プロンプトエンジニアリングのフレームワーク（CRAFT、CO-STAR、SPECSなど）はプロンプトを再現可能で教えやすいものにする',
            'モデルを変更せずにAI出力品質を向上させる最速の手段である',
          ],
        },

        whyMatters: {
          title: 'プロンプトエンジニアリングが重要な理由',
          content: [
            '同じAIモデルでも、質問の組み立て方によって出力は劇的に異なります。漠然としたプロンプトは漠然とした回答を返します。明確な目標・関連するコンテキスト・明示的な制約・指定された出力形式を持つ構造化されたプロンプトは、編集不要な結果を生み出します。',
            'プロンプトエンジニアリングの基礎を一貫して適用することで得られる主なメリットは以下のとおりです。',
          ],
        },

        whyMattersList: {
          items: [
            '**信頼性：** 構造化されたプロンプトは、実行間・モデル間で一貫した出力を生成します。月曜日も金曜日も同じプロンプトが機能します',
            '**高い出力品質：** 明示的な指示によりモデルの曖昧さを排除し、意図についての推測をなくします',
            '**速度：** 適切に組み立てられたプロンプトは、往復の確認サイクルをなくします → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**コスト管理：** 精密なプロンプトはタスクあたりのトークン数を削減し、リトライを減らします → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**ハルシネーションの低減：** 明確な根拠付け、情報源の制約、範囲を絞った質問により、事実の捏造を削減します → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**マルチモデル互換性：** 同じ構造化プロンプトがGPT-4o、Claude、Gemini、ローカルLLMで機能します。ベンダーへの依存を低減します',
            '**再利用性：** よく設計されたプロンプトは再利用可能な資産です。チームはプロンプトを共有・バージョン管理・改善し続けることができます',
          ],
        },

        buildingBlocks: {
          title: 'プロンプトの核となる構成要素',
          content: [
            'すべての効果的なプロンプトは、以下の7つの要素を組み合わせて構成されます。7つすべてを一度に必要とすることはほとんどありません。特定のタスクにどれを含めるかを見極めることがスキルです。',
            '2024年のプロンプティング技術の調査論文（Schulhoff et al.、「The Prompt Report」、arXiv:2406.06608）では、実運用のAIシステムで使用される58以上の個別技術が体系化されました——これらすべては、この7つの構成要素をさまざまな組み合わせで適用した構造化バリエーションです。',
            '各要素の具体的な使用例を含む詳しい解説は [Fundamentals: The 5 Building Blocks Every Prompt Needs] を参照してください。',
          ],
          items: [
            '**目標：** タスクまたは質問を正確に述べる — モデルに何を生成させたいかを明確にする',
            '**コンテキスト：** モデルが正確に回答するために必要な背景情報 — 誰が質問しているか、出力の用途は何か、どのような制約があるか',
            '**指示：** モデルが従うべき具体的な手順やルール — 「重要度順にリストアップ」「二人称で書く」「提供されたデータのみ使用」など',
            '**例：** 希望する形式やスタイルを示す1〜3組のサンプル入出力ペア（フューショットプロンプティング）',
            '**制約：** モデルが行うべきでないことへの明示的な制限 — 禁止トピック、禁止フレーズ、文字数制限、スタイルの制約',
            '**出力形式：** 回答の構造の指定 — 箇条書き、JSONオブジェクト、Markdownテーブル、番号付きステップ、通常の段落',
            '**役割 / ペルソナ：** モデルが採用する専門知識や視点 — 「シニアデータアナリストとして行動する」や「簡潔なテクニカルライターです」など',
          ],
        },

        techniques: {
          title: '一般的なプロンプトエンジニアリングテクニック',
          content: '프ロンプトエンジニアリングのテクニックは、特定の出力上の問題を解決するために名前が付けられたパターンです。各テクニックは、一貫性のない形式・誤った推論・低精度・過度な長さなど、それぞれ異なる障害モードに対処します。特定の問題を修正する際は、一度に一つずつ適用してください。',
          items: [
            '**ゼロショットプロンプティング：** 例を提供せずにモデルに質問する — 単純で明確なタスクに十分 → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]',
            '**フューショットプロンプティング：** リクエストの前に2〜3組の入出力例を提供して、形式・トーン・スタイルを固定する',
            '**思考の連鎖（CoT）：** 最終回答を出す前にステップバイステップで推論するようモデルに求める — 論理・数学・多段階問題のエラーを低減する → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning]',
            '**ペルソナ / 役割プロンプティング：** モデルに特定の役割や専門知識を割り当てて、トーンと関連性を向上させる → [Techniques: Persona Prompting: Give Your AI a Role and Watch It Improve]',
            '**制約プロンプティング：** モデルが行うべきでないことを明示的に定義する — 最も一般的な障害モードを防止する → [Techniques: Constrained Prompting: How to Set Rules the AI Must Follow]',
            '**プロンプトチェーニング：** 複雑なタスクを一連の小さなプロンプトに分割し、各出力を次のプロンプトに入力する → [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]',
            '**ネガティブプロンプティング：** 出力から除外すべきものを指定する — 不要な形式・フレーズ・コンテンツタイプを排除する → [Techniques: Negative Prompting: Tell the AI What NOT to Do]',
            '**自己一貫性：** 同じプロンプトを複数回実行し、最も一般的な回答を選択する — 重要な事実クエリのエラーを低減する → [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work]',
            '**思考ツリー / ReAct：** コミットする前に複数のアプローチを探索する必要がある問題に対する高度な多経路推論 → [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '**RAG（検索拡張生成）：** 取得したドキュメントやデータをプロンプトのコンテキストに直接注入して、回答を実際のソースに根拠付ける → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**構造化出力 / JSONモード：** モデルが機械可読な出力（JSON、Markdownテーブル、CSVなど）を返すよう指示する — 下流処理に活用 → [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]',
          ],
        },

        frameworks: {
          title: 'プロンプトエンジニアリングのフレームワーク',
          content: [
            '**プロンプトエンジニアリングのフレームワークとは、どの構成要素をどの順序で含めるかを指定した、名前の付いたテンプレートです。** フレームワークにより、プロンプトエンジニアリングはアドホックなスキルから再現可能なプロセスへと変わります。ゼロからプロンプトを構築するより、教えやすく、チームで共有しやすく、時間的プレッシャー下でも素早く適用できます。',
            '以下の表は、広く使われている5つのプロンプトエンジニアリングフレームワークと、それぞれが最も適した状況を示しています：',
          ],
          columns: ['フレームワーク', '最適な用途'],
          rows: [
            { 'フレームワーク': 'Single-Line', '最適な用途': '精度よりスピードが重要なシンプルな一行タスク' },
            { 'フレームワーク': 'CRAFT', '最適な用途': '定義されたボイスを持つマーケティング・コピーライティング・クリエイティブコンテンツ' },
            { 'フレームワーク': 'SPECS', '最適な用途': 'リサーチ・分析・構造化された事実に基づく出力' },
            { 'フレームワーク': 'CO-STAR', '最適な用途': '完全なコンテキスト・定義された対象者・ステップバイステップの指示が必要な複雑なタスク' },
            { 'フレームワーク': 'RISEN', '最適な用途': '教材・トレーニング素材・教育コンテンツの作成' },
          ],
        },

        frameworksLinks: {
          content: [
            'このサイトには10個のドキュメント化されたフレームワークがあり、それぞれに専用のガイド（使用タイミング・プロンプトの構造・実例）が付いています。意思決定ガイドとして [Frameworks: Which Prompt Framework Should You Use?] から始め、次に [Frameworks: CRAFT Framework]、[Frameworks: CO-STAR Framework]、[Frameworks: SPECS Framework]、[Frameworks: RISEN Framework] を個別に探索してください。',
            'PromptQuorumには9つの組み込みフレームワークと2つのカスタムフレームワークスロットが含まれています。アプリ内で任意のフレームワークを直接適用し、構造化されたプロンプトとオリジナルを比較し、独自のテンプレートを保存できます — [Frameworks: Build Your Own Prompt Framework] を参照してください。',
          ],
        },

        workflow: {
          title: 'AIワークフローにおけるプロンプトエンジニアリングの位置づけ',
          content: [
            'プロンプトエンジニアリングは単独では機能しません。すべてのプロンプトはより広い技術的コンテキストの中に存在します — 選択するモデル・利用可能なトークン予算・AIシステムのアーキテクチャが、プロンプトで達成できることに影響します。',
            'プロンプトエンジニアリングと相互作用する主要な技術的意思決定は以下のとおりです：',
          ],
          items: [
            '**モデルの選択：** GPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Proは同じプロンプトに対して異なる反応を示します。タスクに適したモデルを選ぶことも、エンジニアリングプロセスの一部です → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**システムプロンプトとユーザープロンプト：** システムプロンプトはセッション全体の永続的な指示を設定し、ユーザープロンプトはリクエストごとの入力です。この分割を適切に行うことが、大規模での一貫性を決定します → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**コンテキストウィンドウ：** すべてのモデルには、入力と出力を合わせた最大トークン制限があります。長いプロンプトはモデルの回答に使えるスペースを減らします。また、ウィンドウが満たされるにつれて、モデルは以前のコンテンツを無視し始めます → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**トークン制限とコスト：** 精密で簡潔なプロンプトは呼び出しごとのトークン数を削減し、レイテンシを低下させ、レート制限内に収まります — 大規模ではコストに直接影響します → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**マルチモーダルプロンプティング：** GPT-4oやGeminiなどの最新LLMはテキストだけでなく画像も受け付けます。プロンプトエンジニアリングの原則は画像入力にも同様に適用されます → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**ローカルモデルとクラウドモデル：** プロンプトエンジニアリングのテクニックは、クラウドAPIとOllamaやLM Studio経由のローカル動作モデルの両方に等しく適用されます。ただし、ローカルモデルはコンテキストウィンドウが小さく、命令遵守の挙動が異なるため、フォーマットの調整が必要になる場合があります',
          ],
        },

        canDo: {
          title: 'プロンプトエンジニアリングの限界：できることとできないこと',
          content: '**プロンプトエンジニアリングが確実に改善するもの：**',
          items: [
            '出力の一貫性 — 同じ構造化プロンプトは、実行間・チームメンバー間で同様の結果を生成する',
            'ハルシネーションの低減 — 根拠付け・情報源の制約・明示的なスコーピングにより、捏造された事実を削減する',
            '形式のコントロール — 出力形式を指定することで、編集が必要な状態ではなく、そのまま使える状態で結果が届く',
            'イテレーションの速度 — 確認のやり取りが減り、初回の成功率が上がる',
            'クロスモデルの移植性 — 適切に構造化されたプロンプトは、書き直しなしにGPT-4o、Claude、Geminiで機能する',
          ],
        },

        cannotDo: {
          content: '**他のアプローチが必要なもの：**',
          items: [
            '**プライベートデータまたはリアルタイムデータへのアクセス：** モデルがプロンプトに収まらないドキュメント・データベース・ライブ情報を必要とする場合 — RAGを使用してください → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**深いドメイン専門化：** モデルがすべてのセッションにわたって特定の語彙やスタイルを確実に採用する必要がある場合 — プロンプトではなくファインチューニングを使用してください',
            '**不足している知識：** プロンプトエンジニアリングは、モデルが学習していない知識を与えることはできません。ベースモデルがトピックを知らなければ、どんなプロンプトもそれを教えることはできません',
            '**体系的な品質評価：** 何千回もの実行にわたってAI出力品質を大規模にチェックするには、手動のプロンプティングを超えた評価パイプラインとツールが必要です',
          ],
        },

        cannotDoNote: {
          content: 'プロンプトエンジニアリングは、AI出力品質を改善するための最も速く、最もアクセスしやすい手段です — インフラの変更も再トレーニングも不要です。解決できない問題については、次に適切なツールを明確に示します。',
        },

        howToStart: {
          title: 'プロンプトエンジニアリングの学び方',
          content: 'このサイトの教材を通じて、賢い初心者が最短経路でゼロから生産的なレベルに達するための6つのステップです：',
          numberedItems: [
            '**基礎を読む。** 複雑なプロンプトを書く前に、LLMがどのようにテキストを処理するか、トークンとは何か、コンテキストウィンドウの意味、そしてモデルがなぜハルシネーションを起こすのかを理解してください。[Fundamentals]セクションでは、これらすべてを専用記事で解説しています — [Fundamentals: The 5 Building Blocks Every Prompt Needs] と [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved] から始めましょう。',
            '**単一行のプロンプトから始める。** タスクを正確に説明する明確な一文を書いてください。構造を加える前に、モデルが何を返すか観察してください。これがベースラインを確立します — 改善するためには、素のプロンプトが何を生成するかを知る必要があります。',
            '**実際のタスクに一つのフレームワークを適用する。** ライティングタスクにはCRAFT、複雑な指示にはCO-STARを選んでください。フレームワークはプロンプトに必要なすべての要素を考え抜かせます。[Frameworks]セクションでは各フレームワークを例付きで解説しています → [Frameworks: Which Prompt Framework Should You Use?] から始めましょう。',
            '**一度に一つのテクニックを追加する。** あるタスクにはフューショット例を試してください。別のタスクに制約を追加してください。推論問題に思考の連鎖（Chain-of-Thought）をテストしてください。変更を分離することで、どのテクニックが実際に出力を改善したかを確認できます。[Techniques]セクションでは各テクニックを詳しく解説しています。',
            '**複数のモデルでテストする。** 同じプロンプトはGPT-4o、Claude、Geminiで異なる結果を生み出します。PromptQuorumを使って一つのプロンプトを複数のモデルに同時に送信し、レスポンスを並べて比較しましょう — これが特定のタスクに最適なモデルと表現を見つける最速の方法です。',
            '**ユースケースのプロンプトライブラリを構築する。** 機能するプロンプトを保存してください。時間をかけて改善してください。特定のドメインに対してテスト済みのプロンプトのライブラリは、永続的な資産です。構造化と維持管理のガイドは [Use Topics: Build a Prompt Library That Saves Hours] を参照してください。',
          ],
        },

        faq: {
          title: 'FAQ：プロンプトエンジニアリングの基礎',
          faqs: [
            {
              q: '新しいAIモデルでも、プロンプトエンジニアリングは有効ですか？',
              a: 'はい — むしろより重要になっています。高性能なモデルほど精密な指示に従うのが得意なため、モデルが改善されるにつれて、適切に構造化されたプロンプトからのリターンが増加します。現在でも、最も高性能なモデルでさえ、漠然とした入力を与えると一貫性のない出力や曖昧な出力を生成します。構造化されたプロンプトは、初回の試みでプロフェッショナルグレードの出力を得るための最も信頼できる方法であり続けています。',
            },
            {
              q: 'プロンプトエンジニアリングを学ぶにはコーディングの知識が必要ですか？',
              a: 'いいえ。プロンプトエンジニアリングは主として言語と論理のスキルです — タスクを正確に述べ、障害モードを予測し、必要なものを指定する能力です。自動化されたパイプラインの構築や構造化された出力の解析にはコーディングが役立ちますが、プロンプトエンジニアリングの作業の大部分はプログラミングをまったく必要としません。',
            },
            {
              q: 'プロンプトエンジニアリングと従来のプログラミングの違いは何ですか？',
              a: '従来のプログラミングは、同じ入力に対して毎回同じ出力を生成する決定論的な命令をコンピューターに与えます。プロンプトエンジニアリングは確率的なモデルに構造化された指針を与え、有用な出力の可能性を高めますが — 保証することはできません。そのスキルは、その根底にある不確実性にもかかわらず信頼性の高い結果を生み出すプロンプトを設計することにあります。',
            },
            {
              q: 'プロンプトエンジニアリングのテクニックとフレームワークの違いは何ですか？',
              a: 'テクニックは特定の出力品質を達成するために適用される特定のパターンです — たとえば、思考の連鎖（Chain-of-Thought）プロンプティングは推論精度を向上させます。フレームワークはプロンプトのすべての要素を整理する構造的なテンプレートです — たとえば、CO-STARはコンテキスト・目標・スタイル・トーン・対象者・レスポンス形式を指定する順序を定義します。フレームワークはプロンプトの構築を助け、テクニックはモデルがそれをどのように処理するかを洗練させます。',
            },
            {
              q: '数年後もプロンプトエンジニアリングは重要であり続けますか？',
              a: '現在入手可能なすべての証拠はイエスを指しています。LLMはまだ、構造化されていない自然言語だけからプロフェッショナルグレードの出力を確実に生成できる段階にありません。AIインターフェースがより会話的になっても、優れたプロンプトの根本原則 — 明確な目標・関連するコンテキスト・明示的な制約・指定された出力形式 — は、有用なAIレスポンスと無用なAIレスポンスの違いであり続けます。',
            },
            {
              q: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？',
              a: 'プロンプトエンジニアリングは、モデル自体を変更せずに既存モデルの出力を形成します — 推論時に機能し、トレーニングを必要としません。ファインチューニングは、新しいデータセットでトレーニングすることでモデルの重みを変更し、デフォルトの動作を永続的に変えます。プロンプトエンジニアリングは速く・安く・ML専門知識を必要としません。ファインチューニングは、プロンプトだけでは達成できない深く一貫した専門化が必要な場合に優れています。',
            },
            {
              q: 'プロンプトエンジニアリングとPromptQuorumのようなツールはどのように関連していますか？',
              a: 'PromptQuorumはプロンプトエンジニアリングの原則を中心に構築されたマルチモデルAIディスパッチツールです。9つの組み込みプロンプトフレームワーク・AIによるプロンプトオプティマイザー・一つのプロンプトをGPT-4o・Claude・Gemini・ローカルモデルなど複数のモデルに同時送信して結果を並べて比較する機能を備えています。プロンプトエンジニアリングを再現可能にし、モデル間でのテストの手間を省きます。',
            },
            {
              q: 'AIエージェントが存在する今、プロンプトエンジニアリングはまだ関連性がありますか？',
              a: 'はい。AIエージェント——多段階タスクを計画・実行する自律システム——はプロンプトエンジニアリングの上に構築されています。すべてのエージェントには、その役割、制約、利用可能なツールを定義するシステムプロンプトがあります。すべてのツール呼び出しは構造化された指示によって引き起こされます。プロンプトエンジニアリングはエージェントを制御可能で予測可能にする基盤です。エージェントが普及するにつれて、このスキルはより重要になります。',
            },
            {
              q: 'ユーザープロンプトとシステムプロンプトの違いは何ですか？',
              a: 'システムプロンプトはセッション全体に適用される永続的な指示セットであり、ユーザーが何か言う前にモデルの役割、制約、デフォルトの動作を定義します。ユーザープロンプトはリクエストごとの入力——その対話の特定のタスクや質問です。ほとんどのAI製品では、開発者がシステムプロンプトを書き、エンドユーザーがユーザープロンプトを書きます。どちらもプロンプトエンジニアリングの恩恵を受けますが、異なる機能を果たします。',
            },
          ],
        },
      },
    },
    zh: {
      theme: '基础知识',
      title: '什么是提示工程？ — PromptQuorum 指南',
      intro: '提示工程：设计文本输入以从 GPT-4o、Claude 和 Gemini 等大语言模型获得可靠、准确的输出。学习基本技术、框架以及为什么这对人工智能输出质量很重要。',
      publishDate: '2026-03-01',
      readTime: '阅读约10分钟',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '什么是提示工程？ — PromptQuorum 指南',
        description: '提示工程：设计文本输入以从 GPT-4o、Claude 和 Gemini 等大语言模型获得可靠、准确的输出。学习基本技术、框架和为什么这对人工智能输出质量很重要。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['提示工程', 'AI 提示', '大语言模型', 'GPT-4o', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      sections: {
        definition: {
          title: '什么是提示词工程？',
          content: [
            '**提示词工程是设计和构建文本输入——称为提示词——的实践，目的是从大型语言模型（LLM）中获得准确、有用且可重复的输出。** 它适用于 GPT-4o、Claude、Gemini，以及通过 Ollama 或 LM Studio 在本地运行的模型。提示词工程与"随便问 AI 一个问题"的区别，就在于模糊请求与精确指令之间的差距——后者具有明确的目标、上下文和输出格式。',
            '如今，提示词工程已发展为一门具有命名技术、可复用框架和可量化成果的结构化学科。它并非关于欺骗 AI 系统或寻找隐藏指令，而是为概率模型提供尽可能清晰的信号，告知其你需要什么。一个精心设计的提示词能在首次尝试时稳定产出可用的结果。',
            '提示词工程的基础始于理解一件事：大型语言模型是模式补全引擎。它们根据你的输入内容之后最有可能跟随什么内容来生成输出。你对任务、上下文、约束和期望格式的描述越精确，模型需要猜测的就越少——结果也就越好。',
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '提示词工程 = 设计输入以从大型语言模型中获得可靠、准确的输出',
            '适用于所有主流模型：GPT-4o、Claude、Gemini，以及通过 Ollama 或 LM Studio 运行的本地模型',
            '关键要素：目标、上下文、示例、约束、输出格式和角色',
            '提示词工程技术涵盖从零样本到思维链（Chain-of-Thought）再到 RAG（检索增强生成）',
            '提示词工程框架（CRAFT、CO-STAR、SPECS 等）使提示词可重复使用且易于教授',
            '这是在不更换模型的前提下提升 AI 输出质量的最快途径',
          ],
        },

        whyMatters: {
          title: '为什么提示词工程很重要',
          content: [
            '同一个 AI 模型会因问题的表述方式不同而产生截然不同的输出。模糊的提示词返回模糊的答案。而一个具有清晰目标、相关上下文、明确约束和指定输出格式的结构化提示词，则能产出无需编辑即可直接使用的结果。',
            '以下是持续运用提示词工程基础知识所带来的主要好处：',
          ],
        },

        whyMattersList: {
          items: [
            '**可靠性：** 结构化提示词在多次运行和不同模型之间产生一致的输出——同一个提示词在周一和周五都同样有效',
            '**更高的输出质量：** 明确的指令减少了模型的歧义，消除了对意图的猜测',
            '**效率：** 精心构建的提示词消除了来回澄清的循环 → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**成本控制：** 精确的提示词每次任务使用的词元更少，并减少重试次数 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**减少幻觉：** 清晰的依据、来源约束和范围明确的问题能减少捏造的事实 → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**跨模型兼容性：** 同一个结构良好的提示词可在 GPT-4o、Claude、Gemini 和本地大型语言模型上使用，降低供应商锁定风险',
            '**可复用性：** 精心设计的提示词是可重复使用的资产。团队可以随时间共享、版本化并持续优化提示词',
          ],
        },

        buildingBlocks: {
          title: '提示词的核心构建模块',
          content: [
            '每个有效的提示词都由以下七个要素中的若干组合构成。你很少需要同时使用全部七个——关键技能在于判断哪些要素适合特定任务。',
            '2024年一项提示词技术综述（Schulhoff等人，《The Prompt Report》，arXiv:2406.06608）整理了在生产AI系统中使用的58种以上的独立技术——它们都是这七个构建块以不同组合方式应用的结构化变体。',
            '有关每个要素在实际中的使用示例的深入解析，请参阅 [Fundamentals: The 5 Building Blocks Every Prompt Needs]。',
          ],
          items: [
            '**目标：** 精确陈述任务或问题——你希望模型产出什么',
            '**上下文：** 模型正确回答所需的背景信息——提问者是谁、输出用于什么场景、适用哪些约束',
            '**指令：** 模型应遵循的具体步骤或规则——"按重要性排序"、"用第二人称写作"、"仅使用所提供的数据"',
            '**示例：** 1–3 个展示你期望的精确格式或风格的示例输入/输出对（少样本提示）',
            '**约束：** 对模型不应执行的事项的明确限制——禁止的话题、禁用的词语、长度上限、风格限制',
            '**输出格式：** 答案应如何组织——项目符号列表、JSON 对象、Markdown 表格、编号步骤、纯段落',
            '**角色/人设：** 为模型设定的特定专业方向或视角——"扮演一位资深数据分析师"或"你是一位简洁的技术写作者"',
          ],
        },

        pqConsensusTest: {
          title: 'PromptQuorum 共识测试：提示结构的影响',
          content: [
            'PromptQuorum 将相同的非结构化提示（"总结这段文本"）发送到 GPT-4o、Claude 3.5 Sonnet 和 Gemini 1.5 Pro。结果在所有三个模型上的长度、细节和结构都有所不同。当使用上述五个构建块重新编写相同的任务时，所有三个模型都在第一次尝试时生成了一致的、格式正确的响应。',
            '这种共识效应——结构化提示在不同模型间产生相同行为——是提示工程的核心洞察。五个构建块之所以有效，是因为它们利用了所有主要大语言模型相同的指令处理方式。',
          ],
        },

        techniques: {
          title: '常见提示词工程技术',
          content: '提示词工程技术是用于解决特定输出问题的命名模式。每种技术针对不同的失效模式——格式不一致、推理错误、准确度低或内容过长。当你遇到具体问题时，每次只应用一种技术进行修复。',
          items: [
            '**零样本提示：** 不提供任何示例直接向模型提问——适用于直接、明确的任务 → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]',
            '**少样本提示：** 在请求前提供2–3个输入/输出示例，以固定格式、语气和风格',
            '**思维链（CoT）：** 要求模型在给出最终答案前逐步推理——减少逻辑、数学和多步骤问题上的错误 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning]',
            '**角色提示：** 为模型分配特定角色或专业身份，以改善语气和相关性 → [Techniques: Persona Prompting: Give Your AI a Role and Watch It Improve]',
            '**约束提示：** 明确定义模型不得执行的操作——防止最常见的失效模式 → [Techniques: Constrained Prompting: How to Set Rules the AI Must Follow]',
            '**提示链：** 将复杂任务分解为一系列较小的提示词序列，将每个输出作为下一个的输入 → [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]',
            '**负面提示：** 指定输出中需排除的内容——消除不需要的格式、措辞或内容类型 → [Techniques: Negative Prompting: Tell the AI What NOT to Do]',
            '**自我一致性：** 多次运行相同的提示词并选择最常见的答案——减少高风险事实查询中的错误 → [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work]',
            '**思维树（Tree-of-Thought）/ ReAct：** 适用于需要探索多种方法后再做决定的问题的高级多路径推理 → [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '**RAG（检索增强生成）：** 将检索到的文档或数据直接注入提示词上下文，使答案以真实来源为依据 → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**结构化输出 / JSON 模式：** 指示模型返回机器可读的输出——JSON、Markdown 表格或 CSV——以供下游处理 → [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]',
          ],
        },

        frameworks: {
          title: '提示词工程框架',
          content: [
            '**提示词工程框架是一种命名模板，规定了应包含哪些构建模块以及排列顺序。** 框架将提示词工程从一种即兴技能转变为可重复的流程。它们比从头构建提示词更易于教授、更易于在团队中共享，并且在时间紧迫时更快上手。',
            '下表展示了五种广泛使用的提示词工程框架及其最适合的使用场景：',
          ],
          columns: ['框架', '最适合的场景'],
          rows: [
            { '框架': 'Single-Line', '最适合的场景': '速度比精确度更重要的快速单行任务' },
            { '框架': 'CRAFT', '最适合的场景': '具有明确声音风格的营销、文案和创意内容' },
            { '框架': 'SPECS', '最适合的场景': '研究、分析和结构化事实输出' },
            { '框架': 'CO-STAR', '最适合的场景': '需要完整上下文、明确受众和分步指令的复杂任务' },
            { '框架': 'RISEN', '最适合的场景': '说明性写作、培训材料和教育内容' },
          ],
        },

        frameworksLinks: {
          content: [
            '本站收录了十个已记录的框架——每个框架都有专属指南，涵盖使用时机、提示词结构方式和实际示例。请从 [Frameworks: Which Prompt Framework Should You Use?] 开始获取决策指引，然后分别探索 [Frameworks: CRAFT Framework]、[Frameworks: CO-STAR Framework]、[Frameworks: SPECS Framework] 和 [Frameworks: RISEN Framework]。',
            'PromptQuorum 内置了9个框架和两个自定义框架插槽。你可以在应用内直接应用任意框架，将结构化提示词与原始提示词进行对比，并保存自己的模板——详见 [Frameworks: Build Your Own Prompt Framework]。',
          ],
        },

        workflow: {
          title: '提示词工程在 AI 工作流中的位置',
          content: [
            '提示词工程并非孤立运作。每个提示词都存在于更广泛的技术环境中——你选择的模型、词元预算以及 AI 系统的架构，都会影响提示词所能实现的效果。',
            '以下是与提示词工程相互影响的关键技术决策：',
          ],
          items: [
            '**模型选择：** GPT-4o、Claude 3.5 Sonnet 和 Gemini 1.5 Pro 对相同提示词的响应各有不同。为任务选择合适的模型是工程流程的一部分。Mistral AI（欧洲）和阿里云 Qwen（中国）遵循相同的提示工程原则，但由于指令跟随行为的差异，可能需要调整输出格式规范。相同的结构化提示在全球所有主要模型族中都有效 → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**系统提示词与用户提示词：** 系统提示词为整个会话设置持久指令；用户提示词是每次请求的输入。正确划分这两者决定了大规模使用时的一致性 → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**上下文窗口：** 每个模型都有输入+输出组合的最大词元限制。较长的提示词会减少模型回答的可用空间——随着窗口填满，模型开始忽略较早的内容 → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**词元限制与成本：** 精确、简洁的提示词每次调用使用更少的词元，降低延迟，并保持在速率限制内——直接影响大规模使用时的成本 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**多模态提示：** GPT-4o 和 Gemini 等现代大型语言模型支持图像和文本输入。提示词工程原则同样适用于图像输入 → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**本地模型与云端模型：** PromptQuorum 同时支持本地模型（Ollama、LM Studio、vLLM）和云 API（OpenAI、Anthropic、Google Gemini）通过单一界面——让您可以在提供者之间切换而无需重写提示，或同时比较多个模型上的相同提示。',
          ],
        },

        canDo: {
          title: '提示词工程的局限性：能做什么和不能做什么',
          content: '**提示词工程能可靠改善的方面：**',
          items: [
            '输出一致性——同一个结构化提示词在多次运行和团队成员之间产生相似的结果',
            '减少幻觉——依据信息、来源约束和明确范围能减少捏造的事实。PromptQuorum 的 Quorum 功能对模型响应进行共识检查，通过比较不同模型如何响应相同的结构化提示来检测幻觉和矛盾。',
            '格式控制——指定输出格式意味着结果到手即可使用，而不需要再次编辑',
            '迭代速度——减少澄清往返次数，提升首次尝试成功率',
            '跨模型可移植性——结构良好的提示词无需重写即可在 GPT-4o、Claude 和 Gemini 上使用',
          ],
        },

        cannotDo: {
          content: '**仍需要其他方案的方面：**',
          items: [
            '**私有或实时数据访问：** 当模型需要无法放入提示词的文档、数据库或实时信息时——使用 RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**深度领域专业化：** 当模型需要在所有会话中稳定采用特定词汇或风格时——使用微调，而非提示词',
            '**缺失的知识：** 提示词工程无法赋予模型它未曾训练过的知识。如果基础模型不了解某个主题，任何提示词都无法教会它',
            '**系统化质量评估：** 在数千次运行中大规模检查 AI 输出质量，需要评估流水线和超越手动提示的工具',
          ],
        },

        cannotDoNote: {
          content: '提示词工程是提升 AI 输出质量最快、最易获取的手段——它不需要基础设施变更，也不需要重新训练。对于它无法解决的问题，它能清晰地指向正确的下一步工具。',
        },

        howToStart: {
          title: '如何开始学习提示词工程',
          content: '以下六个步骤能帮助聪明的初学者通过本站内容，以最短的路径从零基础达到高效实践：',
          numberedItems: [
            '**阅读基础知识。** 在编写复杂提示词之前，先了解大型语言模型如何处理文本、什么是词元、上下文窗口意味着什么，以及模型为什么会产生幻觉。[Fundamentals] 部分的专题文章涵盖了所有这些内容——从 [Fundamentals: The 5 Building Blocks Every Prompt Needs] 和 [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved] 开始。',
            '**从单行提示词开始。** 用一句清晰的句子精确描述你的任务。在添加结构之前，先观察模型返回什么。这建立了一个基准——你需要知道裸提示词产生什么，才能改进它。',
            '**将一个框架应用于真实任务。** 为写作任务选择 CRAFT，为复杂指令选择 CO-STAR。框架会迫使你思考提示词所需的所有要素。[Frameworks] 部分配有示例详细介绍每个框架——从 [Frameworks: Which Prompt Framework Should You Use?] 开始。',
            '**每次只添加一种技术。** 在一个任务上尝试少样本示例，在另一个任务上添加约束，在推理问题上测试思维链（Chain-of-Thought）。隔离变化让你能看到究竟是哪种技术改善了输出。[Techniques] 部分深入介绍了每种技术。',
            '**跨多个模型进行测试。** 同一个提示词在 GPT-4o、Claude 和 Gemini 上产生的结果不同。使用 PromptQuorum 将一个提示词同时发送给多个模型，并排比较响应——这是找到特定任务最佳模型和表述方式的最快途径。',
            '**为你的用例构建提示词库。** 保存有效的提示词，持续优化。针对特定领域经过测试的提示词库是持久的资产。请参阅 [Use Topics: Build a Prompt Library That Saves Hours] 了解如何构建和维护的指南。',
          ],
        },

        relatedReading: {
          title: '相关阅读',
          items: [
            '[基础知识：AI 幻觉 — 为什么 AI 会虚构事实] — 理解大语言模型的核心局限',
            '[技术：思维链提示法 — 让 AI 展示其推理过程] — 改进准确性的逐步技术',
            '[框架：CO-STAR 框架] — 一个结构化模板，将基础知识按照已验证的顺序组织',
          ],
        },

        faq: {
          title: 'FAQ：提示词工程基础',
          faqs: [
            {
              q: '提示词工程对更新的 AI 模型仍然有用吗？',
              a: '是的——而且更加有用。能力更强的模型更善于遵循精确指令，这意味着随着模型的改进，结构良好的提示词的回报也在增加。即使今天，即便是最强大的模型，在面对模糊输入时也会产出不一致或模糊的结果。结构化提示词仍然是首次尝试就获得专业级输出的最可靠方式。',
            },
            {
              q: '学习提示词工程需要会编程吗？',
              a: '不需要。提示词工程主要是一种语言和逻辑技能——能够精确陈述任务、预见失效模式，并明确指定你需要什么。在构建自动化流水线或解析结构化输出时，编程会有所帮助，但绝大多数提示词工程工作根本不需要任何编程。',
            },
            {
              q: '提示词工程与传统编程有什么区别？',
              a: '传统编程向计算机提供确定性指令，在相同输入下每次产生相同的输出。提示词工程向概率模型提供结构化引导，以提高产出有用结果的可能性——但无法保证。这门技能在于设计出尽管存在底层不确定性却能产生可靠结果的提示词。',
            },
            {
              q: '提示词工程技术与框架有什么区别？',
              a: '技术是应用于实现特定输出质量的具体模式——例如，思维链（Chain-of-Thought）提示能提高推理准确性。框架是组织提示词所有要素的结构化模板——例如，CO-STAR 定义了指定上下文、目标、风格、语气、受众和响应格式的顺序。框架帮助你构建提示词；技术帮助你改进模型对其的处理方式。',
            },
            {
              q: '提示词工程在未来还会重要吗？',
              a: '所有现有证据都指向肯定的答案。大型语言模型尚不能仅凭非结构化的自然语言稳定产出专业级输出。即使 AI 界面变得越来越对话化，好的提示词的底层原则——清晰的目标、相关的上下文、明确的约束、指定的输出格式——仍然是有用和无用 AI 响应之间的关键差异。',
            },
            {
              q: '提示词工程与微调有什么区别？',
              a: '提示词工程在不改变模型本身的情况下塑造现有模型的输出——它在推理时运作，不需要训练。微调通过在新数据集上训练来修改模型的权重，永久改变其默认行为。提示词工程更快、更便宜，不需要机器学习专业知识；微调在需要单凭提示词无法实现的深度、持续专业化时效果更好。',
            },
            {
              q: 'PromptQuorum 这样的工具与提示词工程有什么关系？',
              a: 'PromptQuorum 是一个围绕提示词工程原则构建的多模型 AI 调度工具。它内置9个提示词框架、一个 AI 驱动的提示词优化器，以及将一个提示词同时发送给多个模型——GPT-4o、Claude、Gemini 和本地模型——并排比较结果的功能。它使提示词工程可重复，并消除了手动跨模型测试的摩擦。',
            },
            {
              q: '现在AI智能体已经存在，提示词工程还有意义吗？',
              a: '有。AI智能体——自主规划和执行多步骤任务的系统——建立在提示词工程之上。每个智能体都有一个系统提示词，定义其角色、约束条件和可用工具。每次工具调用都由结构化指令触发。提示词工程是使智能体可控和可预测的基础。随着智能体日益普及，这一技能变得更加重要，而非更少。',
            },
            {
              q: '用户提示词和系统提示词有什么区别？',
              a: '系统提示词是应用于整个会话的持久指令集——在用户说任何话之前，它定义模型的角色、约束条件和默认行为。用户提示词是每次请求的输入——该交互的特定任务或问题。在大多数AI产品中，开发者编写系统提示词；最终用户编写用户提示词。两者都受益于提示词工程，但服务于不同的功能。',
            },
          ],
        },

        sources: {
          title: '来源与扩展阅读',
          items: [
            'Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903',
            'Brown et al., 2020. "Language Models are Few-Shot Learners." arXiv:2005.14165',
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
          ],
        },
      },
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
            'Brown et al. reported that few-shot performance scaled consistently with model size: the 175B GPT-3 model substantially outperformed smaller variants across every benchmark tested, establishing that scale and prompt-based learning were directly linked. This made the quality of the prompt a variable that practitioners — not just researchers — could control.',
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
            '**The introduction of Chain-of-Thought (CoT) prompting in 2022 was the most significant technical development in the discipline\'s short history.** Wei et al. (Google Brain) published "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", demonstrating that asking a model to reason step by step before answering dramatically improved performance on arithmetic, commonsense reasoning, and symbolic reasoning tasks. In one headline result, chain-of-thought prompting improved PaLM\'s accuracy on the GSM8K grade-school maths benchmark from 17.9% to 58% — a gain achieved purely by changing the prompt structure, with no additional model training. The implication was profound: the structure of the prompt could activate different reasoning behaviour — not just different facts.',
            'Related techniques followed quickly. Zhou et al. introduced least-to-most prompting, which decomposed complex problems into a sequence of simpler sub-problems solved in order. These approaches turned prompt engineering from a formatting exercise into a tool for eliciting structured reasoning from models that had not been explicitly trained to reason that way. Prompting had become scaffolding for cognition.',
            'For the full technique guide, see [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] and [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          title: 'Late 2022–2023: The ChatGPT Moment and the Prompt Engineer Job Title',
          content: [
            '**The release of ChatGPT on November 30, 2022, changed the public profile of prompt engineering overnight.** ChatGPT reached one million users within its first five days — confirmed by OpenAI CEO Sam Altman on Twitter in December 2022 — and 100 million monthly active users by January 2023, according to a UBS analysis cited by Reuters. Within days, millions of people were experimenting with prompts and discovering that their results varied enormously based on how they phrased requests. Tech media covered "prompt engineering" as a skill worth learning. The Oxford English Dictionary added "prompt" as a verb related to AI in 2023, and the word itself became a runner-up for word of the year in multiple rankings.',
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
            {
              q: 'Is prompt engineering dead in 2026?',
              a: 'No. The discipline has shifted, not disappeared. As models grow more capable, the work moves from syntax tricks and formatting hacks to context design — structuring inputs, managing retrieval, and composing tool outputs. The job title "Prompt Engineer" is narrowing, but the underlying skill is embedded in every role that uses AI: developer, analyst, marketer, researcher. McKinsey\'s 2024 State of AI report found that effective AI adoption still correlates strongly with how well users frame tasks for the model.',
            },
            {
              q: 'Do I need to learn prompt engineering if AI models keep improving?',
              a: 'Yes — but the focus shifts with each generation. Better models reduce the need for elaborate workarounds (special tokens, repetitive reinforcement, rigid formatting constraints) and increase the payoff for clear intent, structured context, and well-chosen examples. The fundamentals — role, context, format, constraints — remain stable across every model generation. Learning them now means the skill compounds rather than expires.',
            },
            {
              q: 'What is the difference between prompt engineering and fine-tuning?',
              a: 'Prompt engineering changes how you talk to a model without modifying its weights. Fine-tuning retrains a model on new data to change its behaviour permanently. Prompt engineering is faster, cheaper, and reversible — you can iterate in minutes. Fine-tuning is better when the target behaviour is consistent, high-volume, or impossible to describe reliably in a prompt. Most teams start with prompting and fine-tune only when prompting approaches a ceiling on their specific task.',
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
      sections: {
        definition: {
          title: 'Wie sich Prompt Engineering entwickelt hat: Ein kurzer Überblick',
          content: [
            '**Prompt Engineering entwickelte sich von informellem Trial-and-Error-Textmanipulation rund um GPT-3 im Jahr 2020 zu einer strukturierten Disziplin mit benannten Techniken, Frameworks und Werkzeugen bis 2026.** Der Bogen umfasst fünf Phasen: frühe Few-Shot-Experimente, den ChatGPT-Moment, der die Fähigkeit in das Mainstream-Bewusstsein brachte, die Entwicklung strukturierter Denktechniken, den Aufstieg der automatisierten Prompt-Optimierung und die aktuelle Verschiebung hin zum Kontext-Design.',
            'Die Disziplin entstand nicht aus einem einzigen Paper oder Unternehmen. Sie wuchs aus der Überschneidung von Forschung (Few-Shot-Learning, Chain-of-Thought-Reasoning, RAG), Praktikergemeinschaften, die Prompt-Sammlungen online teilten, und der plötzlichen öffentlichen Verfügbarkeit leistungsfähiger Modelle, die gutes Prompting sofort lohnend machte. Bis 2026 ist Prompt Engineering kein Nischentrick mehr – es ist eine Basisfähigkeit für jeden, der mit KI-Systemen arbeitet.',
          ],
        },

        tldr: {
          title: 'Die wichtigsten Erkenntnisse',
          isTldr: true,
          items: [
            '2019–2020: GPT-2 und frühe Transformer – Prompts waren Eingaben, keine Disziplin',
            '2020: GPT-3 und Brown et al. führten Few-Shot-Prompting als Paradigmenwechsel ein',
            '2022: Chain-of-Thought-Reasoning-Prompts verwandelten Prompting in eine strukturierte Fähigkeit',
            'Ende 2022: ChatGPT brachte Prompt Engineering in das Mainstream-Bewusstsein und Stellenausschreibungen',
            '2023: GPT-4, multimodales Prompting und Frameworks formalisierten Best Practices',
            '2024–2026: Kontext-Design, automatisiertes Prompting und Open-Source-LLMs definierten das Feld neu',
          ],
        },

        pre2020: {
          title: 'Bevor Prompt Engineering einen Namen hatte (vor 2020)',
          content: [
            'Bevor der Begriff „Prompt Engineering" existierte, manipulierten Forscher bereits Modelleingaben, um bessere Ausgaben zu erzielen – sie nannten es nur nicht so. Frühe Transformer-Modelle wie GPT-2 (2019, OpenAI) und BERT (2018, Google) wurden durch sorgfältig gewählten Eingabetext genutzt, aber die Praxis wurde als Teil der Datenvorverarbeitung behandelt, nicht als eigenständige Fähigkeit.',
            'GPT-2, veröffentlicht im Februar 2019, war ein 1,5-Milliarden-Parameter-Modell, das Text auf überraschend kohärente Weise vervollständigen konnte. Forscher und frühe Praktiker bemerkten, dass die Formulierung einer Eingabe die Qualität der Vervollständigung dramatisch veränderte – aber es gab noch kein Framework, keine Terminologie und keine Community, die um diese Beobachtung herum aufgebaut worden war. Prompts waren Eingaben, keine Engineering-Artefakte.',
          ],
        },

        gpt3: {
          title: '2020: GPT-3 und der Few-Shot-Durchbruch',
          content: [
            '**Die moderne Geschichte des Prompt Engineerings beginnt effektiv mit GPT-3.** Im Mai 2020 veröffentlichte OpenAI GPT-3, ein 175-Milliarden-Parameter-Modell, zusammen mit dem bahnbrechenden Paper von Brown et al., „Language Models are Few-Shot Learners" [External: Brown et al., 2020 – Language Models are Few-Shot Learners]. Das Paper demonstrierte, dass durch das Einschließen einiger Beispiele der gewünschten Aufgabe direkt im Prompt – ohne Gewichtsaktualisierungen am Modell – die Leistung bei nachgelagerten Aufgaben dramatisch verbessert wurde.',
            'Dies war der Keim des Prompt Engineerings als Disziplin. Forscher und Entwickler erkannten, dass dasselbe Modell in einen Übersetzer, einen Zusammenfasser, einen Code-Generator oder ein Frage-Antwort-System verwandelt werden konnte, indem einfach die Art geändert wurde, wie der Prompt geschrieben wurde. Das Modell brauchte kein Neu-Training – es brauchte einen besseren Prompt. Diese Erkenntnis rahmte neu, was ein Prompt war: nicht nur eine Eingabe, sondern ein Design-Artefakt.',
            'Brown et al. berichteten, dass die Few-Shot-Leistung konsistent mit der Modellgröße skalierte: Das 175-Milliarden-Parameter-Modell GPT-3 übertraf kleinere Varianten in allen getesteten Benchmarks deutlich und zeigte, dass Skalierung und prompt-basiertes Lernen direkt miteinander verknüpft sind. Dies machte die Qualität des Prompts zu einer Variablen, die Praktiker – nicht nur Forscher – direkt kontrollieren konnten.',
            'Siehe [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] für einen praktischen Leitfaden zur Technik, die GPT-3 bekannt machte.',
          ],
        },

        skill: {
          title: '2021 – Anfang 2022: Von Prompt-Tricks zu einer anerkannten Fähigkeit',
          content: [
            'Zwischen 2021 und Anfang 2022 wanderte das Prompt-Crafting von Forschungsarbeiten in Praktikergemeinschaften. GitHub-Repositories mit kuratierten Prompt-Sammlungen erschienen – „awesome-prompts"-Stil-Listen, die teilten, was bei der Coding-Assistenz, Zusammenfassung und kreativem Schreiben funktionierte. Prompt-Sammlungen, die auf Twitter und Reddit geteilt wurden, wurden zu Community-Ressourcen. Der Prompt Engineering Guide (promptingguide.ai) [External: Prompt Engineering Guide – promptingguide.ai] wurde zu einer der ersten dedizierten Referenzen, die Techniken systematisch katalogisierte.',
            'Der Begriff „Prompt Engineering" begann in diesem Zeitraum häufiger in Forschungsarbeiten, Blog-Posts und Stellenbeschreibungen aufzutauchen. OpenAIs InstructGPT-Paper (Ouyang et al., 2022) führte RLHF-feinabgestimmte Modelle ein, die auf natürlichsprachliche Anweisungen weitaus zuverlässiger reagierten – was Prompt-Qualität noch folgenreicher machte. Bis Mitte 2022 war klar, dass dies eine übertragbare Fähigkeit war, nicht nur eine Forscherkuriosität.',
          ],
        },

        cot: {
          title: '2022: Chain-of-Thought und Reasoning-Prompts',
          content: [
            '**Die Einführung des Chain-of-Thought (CoT)-Promptings im Jahr 2022 war die bedeutendste technische Entwicklung in der kurzen Geschichte der Disziplin.** Wei et al. (Google Brain) veröffentlichten „Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" und demonstrierten, dass das Bitten eines Modells, Schritt für Schritt zu denken, bevor es antwortet, die Leistung bei arithmetischen, alltagspraktischen und symbolischen Denkaufgaben dramatisch verbesserte. In einem zentralen Ergebnis verbesserte Chain-of-Thought-Prompting die Genauigkeit von PaLM auf dem GSM8K-Grundschulmathematik-Benchmark von 17,9 % auf 58 % – ein Gewinn, der ausschließlich durch Änderung der Prompt-Struktur erzielt wurde, ohne zusätzliches Modelltraining. Die Implikation war tiefgreifend: Die Struktur des Prompts konnte unterschiedliches Denkverhalten aktivieren – nicht nur unterschiedliche Fakten.',
            'Verwandte Techniken folgten schnell. Zhou et al. führten das Least-to-Most-Prompting ein, das komplexe Probleme in eine Folge einfacherer Teilprobleme zerlegte, die der Reihe nach gelöst wurden. Diese Ansätze verwandelten Prompt Engineering von einer Formatierungsübung in ein Werkzeug, um strukturiertes Denken aus Modellen zu elizitieren, die nicht explizit darauf trainiert worden waren, auf diese Weise zu denken. Prompting war zum Gerüst für Kognition geworden.',
            'Den vollständigen Technik-Leitfaden findest du unter [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] und [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          title: 'Ende 2022–2023: Der ChatGPT-Moment und der Berufsbezeichnung „Prompt Engineer"',
          content: [
            '**Die Veröffentlichung von ChatGPT am 30. November 2022 veränderte das öffentliche Profil des Prompt Engineerings über Nacht.** ChatGPT erreichte innerhalb der ersten fünf Tage eine Million Nutzer – bestätigt von OpenAI-CEO Sam Altman auf Twitter im Dezember 2022 – und 100 Millionen monatlich aktive Nutzer bis Januar 2023 gemäß einer UBS-Analyse, die von Reuters zitiert wurde. Innerhalb von Tagen experimentierten Millionen von Menschen mit Prompts und stellten fest, dass ihre Ergebnisse je nach Formulierung der Anfragen enorm variierten. Technologiemedien berichteten über „Prompt Engineering" als eine Fähigkeit, die es zu erlernen lohnte. Das Oxford English Dictionary fügte „prompt" im Jahr 2023 als ein auf KI bezogenes Verb hinzu, und das Wort selbst wurde in mehreren Rankings zum Läufer-up für das Wort des Jahres.',
            'Bis Anfang 2023 erschien „Prompt Engineer" als Berufsbezeichnung mit gemeldeten Gehältern von 175.000–335.000 Dollar bei Unternehmen einschließlich Anthropic, laut weitzitierten Stellenausschreibungen. Die Rolle zog erhebliche Medienaufmerksamkeit auf sich – Bloomberg, The Guardian und The Atlantic berichteten alle darüber, ob Prompt Engineering eine echte Karriere sei. Der damalige Konsens: Es war eine Übergangsrolle, teils Human-Computer-Interface-Design, teils Fachexpertise, teils Qualitätssicherung.',
            'Die Popularisierung des Ausdrucks „Prompt Engineering" wird manchmal verschiedenen Praktikern und Kommentatoren zugeschrieben. Richard Socher, ehemaliger Chief Scientist bei Salesforce, wird in einigen Kommentaren erwähnt, als er dazu beigetragen hat, die Idee früh zu rahmen. Der Wikipedia-Artikel über Prompt Engineering [External: Prompt Engineering – Wikipedia] bietet einen ausgewogenen Überblick über konkurrierende Behauptungen über die Herkunft des Begriffs.',
          ],
        },

        gpt4: {
          title: '2023: GPT-4, multimodales Prompting und Frameworks',
          content: [
            'Die Veröffentlichung von GPT-4 im März 2023 erweiterte das Prompt Engineering gleichzeitig in zwei Richtungen: größere Kontextfenster (bis zu 128K Token in späteren Versionen) und multimodale Eingaben. Praktiker konnten nun Bilder neben Text in Prompts einschließen und öffneten damit Prompt Engineering für visuelle Aufgaben – Bilder beschreiben, Diagramme vergleichen, Diagramme kommentieren. Frühe Gemini-Modelle von Google und multimodale Claude-Versionen von Anthropic folgten innerhalb von Monaten.',
            'Dasselbe Jahr sah die Formalisierung von Prompt-Engineering-Best-Practices. OpenAI veröffentlichte seinen offiziellen Prompt-Engineering-Leitfaden [External: OpenAI – Best Practices for Prompt Engineering]. Google Cloud veröffentlichte seine eigene Prompt-Engineering-Dokumentation [External: Google Cloud – Prompt Engineering for AI Guide]. Unabhängige Autoren kodifizierten Frameworks – CRAFT, CO-STAR, SPECS, RISEN, TRACE – die Praktikern wiederholbare Vorlagen zur Strukturierung von Prompts gaben und die Abhängigkeit von Trial-and-Error reduzierten.',
            'Diese Frameworks repräsentierten die Reifung des Prompt Engineerings von einer persönlichen Fähigkeit zu einer lehr- und teilbaren Praxis. Siehe [Frameworks: Which Prompt Framework Should You Use?] für einen Leitfaden zur Auswahl unter ihnen und [Fundamentals: Beyond Text: How to Prompt with Images] für die multimodale Dimension.',
          ],
        },

        automated: {
          title: '2023–2024: Automatisiertes Prompt Engineering und RAG',
          content: [
            'Eine auffällige Entwicklung im Jahr 2023 war Forschung, die zeigte, dass LLMs Prompts genauso gut optimieren konnten wie Menschen. Zhou et al. veröffentlichten „Large Language Models Are Human-Level Prompt Engineers" (APE) und demonstrierten, dass ein LLM, das mit der Generierung und Bewertung von Prompt-Kandidaten beauftragt wurde, menschlich geschriebene Prompts bei Benchmark-Aufgaben erreichen oder übertreffen konnte. Stanfords DSPy-Framework (2023) ging noch weiter – es ermöglichte Entwicklern zu beschreiben, was ein Prompt erreichen soll, und ließ das System die Formulierung automatisch optimieren.',
            'Gleichzeitig wurde Retrieval-Augmented Generation (RAG) – ursprünglich von Lewis et al. bei Meta im Jahr 2020 eingeführt – zu einem zentralen Muster in Produktions-KI-Systemen. RAG speiste abgerufene Dokumente direkt in den Prompt-Kontext ein, verankerte Modellausgaben in echten, aktuellen Quellen anstatt Prompts dazu zu zwingen, alle notwendigen Fakten zu enthalten. Dies verlagerte den Schwerpunkt im Prompt Engineering von „Wie bringe ich das Modell dazu, das zu wissen?" zu „Wie strukturiere ich den Kontext, damit das Modell ihn richtig nutzt?"',
            'Siehe [Techniques: RAG Explained: How to Ground AI Answers in Real Data] und [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work] für die wichtigsten Techniken aus dieser Periode.',
          ],
        },

        context: {
          title: '2024–2025: Von Prompt Engineering zu Kontext-Design',
          content: [
            'Bis 2024 begann eine neue Rahmung die einfache Idee des „besseren Prompts schreiben" zu verdrängen. Praktiker und Forscher begannen, von Context Engineering zu sprechen – der Praxis, zu orchestrieren, was in das vollständige Kontextfenster einfließt: den System-Prompt, abgerufene Dokumente, Werkzeugausgaben, Gesprächsverlauf und Benutzereingaben, alle bewusst zusammengestellt, um das Modellverhalten zu steuern. Der Prompt war kein eigenständiges Artefakt mehr; er war eine Schicht in einem gestalteten Kontext.',
            'Mehrere Entwicklungen beschleunigten diesen Wandel. Metas Llama-3-Klasse-Modelle (2024) machten leistungsfähige Open-Source-LLMs für private Deployments verfügbar und verlagerten einen Teil des Prompt Engineerings von Cloud-APIs zu lokaler Infrastruktur. Kontextfenster wuchsen auf 1 Million Token oder mehr (Gemini 1.5 Pro), was es praktikabel machte, gesamte Codebasen, Bücher oder Dokumentensammlungen in einen einzigen Prompt einzuspeisen. Multi-Agenten-Frameworks wie LangChain und AutoGen verwandelten Prompting in Orchestrierung – ein Prompt löst ein anderes Modell aus, das ein Werkzeug auslöst, das Kontext zum nächsten Prompt zurückgibt.',
            'Siehe [External: Prompt Engineering from 2020 to 2025 – AI Supremacy] und [External: The Evolution of Prompt Engineering to Context Design – 2026] für externe Perspektiven auf diesen Übergang.',
          ],
        },

        beyond2026: {
          title: '2026 und darüber hinaus: Prompt Engineering als Kernkompetenz',
          content: [
            'Stand 2026 beschreiben Forschung und Kommentare Prompt Engineering zunehmend nicht als Nischen-Berufsbezeichnung, sondern als grundlegende Literacy-Fähigkeit für Wissensarbeiter, die KI-Werkzeuge nutzen. Akademische Paper wie „Prompt Engineering as a New 21st Century Skill" [External: Prompt engineering as a new 21st century skill – Frontiers] rahmen strukturiertes Prompting neben Lesen, Schreiben und Rechnen als Basiskompetenz für die Arbeit mit generativen KI-Systemen.',
            'Die Rolle hat sich in zwei unterschiedliche Spuren aufgeteilt. Die erste ist System- und Kontext-Design – das Engineering von Produktions-KI-Systemen, bei denen Prompts Teil einer größeren Architektur sind, die Retrieval, Agenten und Evaluierungs-Pipelines umfasst. Die zweite ist der alltägliche Einsatz – die Fähigkeit, klare, strukturierte Prompts zu schreiben, die nützliche Ausgaben produzieren, ohne die zugrundeliegende Architektur zu kennen. Beide Spuren profitieren von denselben Kernprinzipien: klare Aufgabenspezifikation, angemessener Kontext, Einschränkungen und Ausgabeformat.',
            'Was sich trotz leistungsfähigerer Modelle und automatisierter Werkzeuge nicht verändert hat, ist das Grundprinzip: Je klarer und strukturierter die Eingabe, desto zuverlässiger und nützlicher die Ausgabe. Die Techniken, Terminologie und Werkzeuge sind gereift, aber die Kernerkenntnis aus der GPT-3-Ära ist 2026 noch wahr.',
          ],
        },

        timeline: {
          title: 'Zeitleiste: Wichtige Meilensteine im Prompt Engineering',
          content: 'Die folgende Tabelle fasst die wichtigsten Meilensteine von 2018 bis 2026 zusammen – die Ereignisse, Paper und Modell-Veröffentlichungen, die die Entwicklung des Prompt Engineerings in seine heutige Form geprägt haben.',
          columns: ['Jahr', 'Meilenstein', 'Warum es wichtig ist'],
          rows: [
            { 'Jahr': '2018–2019', 'Meilenstein': 'BERT (Google) und GPT-2 (OpenAI) veröffentlicht', 'Warum es wichtig ist': 'Zeigte, dass Transformer-Modelle durch Eingabeformulierung gesteuert werden können – aber noch keine formale Disziplin' },
            { 'Jahr': '2020', 'Meilenstein': 'GPT-3 und Brown et al. „Language Models are Few-Shot Learners"', 'Warum es wichtig ist': 'Etablierte Few-Shot-Prompting als Paradigma: Das Umschreiben des Prompts verändert das Modellverhalten ohne Neu-Training' },
            { 'Jahr': '2022 (Jan)', 'Meilenstein': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Warum es wichtig ist': 'Modelle wurden trainiert, Anweisungen zu befolgen – machte Prompt-Qualität weitaus folgenreicher' },
            { 'Jahr': '2022 (Mai)', 'Meilenstein': 'Chain-of-Thought-Prompting (Wei et al., Google Brain)', 'Warum es wichtig ist': 'Bewies, dass Prompt-Struktur schrittweises Denken elizitieren kann – verwandelte Prompting in ein kognitives Gerüst' },
            { 'Jahr': '2022 (Nov)', 'Meilenstein': 'ChatGPT-Start', 'Warum es wichtig ist': 'Brachte Prompt Engineering in das Mainstream-Bewusstsein; Millionen begannen über Nacht zu experimentieren' },
            { 'Jahr': '2023 (Q1)', 'Meilenstein': 'Berufsbezeichnung „Prompt Engineer" erreicht Gehaltsausschreibungen über 300.000 Dollar; OED fügt „prompt" als Verb hinzu', 'Warum es wichtig ist': 'Definierte Prompt Engineering als anerkannten Beruf und benannte Fähigkeit' },
            { 'Jahr': '2023 (März)', 'Meilenstein': 'GPT-4-Veröffentlichung; multimodales Prompting mit Bildern', 'Warum es wichtig ist': 'Erweiterte Prompt Engineering über Text hinaus auf visuelle Eingaben und große Kontextfenster' },
            { 'Jahr': '2023', 'Meilenstein': 'Frameworks formalisiert: CRAFT, CO-STAR, SPECS, RISEN; offizielle Leitfäden von OpenAI und Google', 'Warum es wichtig ist': 'Verwandelte Prompt Engineering von persönlichem Handwerk in lehr- und teilbare Praxis' },
            { 'Jahr': '2023–2024', 'Meilenstein': 'APE-Paper (Zhou et al.) und DSPy-Framework – KI-optimierte Prompts', 'Warum es wichtig ist': 'LLMs konnten Prompts ebenso gut schreiben wie Menschen; automatisierte Prompt-Optimierung wurde praktikabel' },
            { 'Jahr': '2024', 'Meilenstein': 'Llama-3-Klasse-Modelle; Kontextfenster überschreiten 1M Token (Gemini 1.5 Pro)', 'Warum es wichtig ist': 'Open-Source-LLMs für private Deployments; massiver Kontext verlagerte Fokus auf Kontext-Engineering' },
            { 'Jahr': '2025–2026', 'Meilenstein': 'Kontext-Design und Multi-Agenten-Orchestrierung ersetzen einfaches Prompt-Tweaking', 'Warum es wichtig ist': 'Prompting wird zu einer Schicht in einem zusammengestellten Kontext – systemisches Denken erforderlich' },
          ],
        },

        todayPractice: {
          title: 'Wie die Geschichte die heutigen Best Practices prägt',
          content: [
            'Jede Phase der Evolution des Prompt Engineerings hinterließ einen dauerhaften Niederschlag in der aktuellen Praxis. Die GPT-3-Ära gab uns die Kernerkenntnis, dass das Modellverhalten durch Eingabestruktur geprägt wird – nicht nur durch Inhalt. Die Chain-of-Thought-Ära gab uns explizite Denkgerüste: schrittweises Prompting, Prompt-Verkettung und Tree-of-Thought-Ansätze. Die Framework-Ära gab uns wiederverwendbare Vorlagen, die Best Practices kodifizieren, ohne dass jeder Praktiker sie von Grund auf neu entdecken muss.',
            'Die RAG- und Kontext-Design-Ära gab uns das Verständnis, dass Prompts nicht isoliert existieren – sie werden mit abgerufenen Daten, Systemanweisungen und Werkzeugausgaben zusammengestellt, um einen vollständigen Kontext zu bilden. Und die automatisierte Prompting-Ära erinnerte uns daran, dass die Prinzipien guten Promptings messbar sind: besser strukturierte Prompts liefern bessere Ausgaben auf eine Weise, die systematisch bewertet und optimiert werden kann.',
          ],
          items: [
            'Denktechniken aus 2022 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] und [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            'Framework-Entwicklung aus 2023 → [Frameworks: Which Prompt Framework Should You Use?]',
            'Wachstum des Kontextfensters → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'Token-Ökonomie über Modellgenerationen hinweg → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG als Ergänzung zum reinen Prompting → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          title: 'FAQ: Die Evolution des Prompt Engineerings',
          faqs: [
            {
              q: 'Wer prägte als Erster den Begriff „Prompt Engineering"?',
              a: 'Der genaue Ursprung ist umstritten. Der Begriff erschien in Forschungskontexten bereits 2021 und gewann durch 2022 an breiterer Verwendung. Richard Socher wird in einigen Kommentaren erwähnt, als er dazu beigetragen hat, das Konzept öffentlich zu rahmen, obwohl kein Einzelner für seine Erfindung anerkannt wird. Der Wikipedia-Artikel über Prompt Engineering [External: Prompt Engineering – Wikipedia] bietet einen ausgewogenen Überblick über die konkurrierenden Behauptungen.',
            },
            {
              q: 'Warum explodierte Prompt Engineering in der Popularität nach ChatGPT?',
              a: 'ChatGPT war das erste Allzweck-KI-Modell, das Millionen von Nicht-Forschern sofort, kostenlos, ohne Code schreiben zu müssen, nutzen konnten. Die Lücke zwischen einem gut gestalteten Prompt und einem vagen war sichtbar und sofort folgenreich – bessere Prompts lieferten spürbar bessere Ausgaben. Diese Rückkopplungsschleife, die von Millionen von Menschen gleichzeitig erlebt wurde, verwandelte Prompt Engineering von einem Forschungskonzept in eine Massenfähigkeit.',
            },
            {
              q: 'Wie beeinflussten Forschungsarbeiten reale Prompting-Techniken?',
              a: 'Die Übertragung war für KI-Forschung ungewöhnlich schnell. Chain-of-Thought-Prompting (Wei et al., 2022) entwickelte sich innerhalb von Monaten von einem akademischen Paper zu einer weit verbreiteten Praktikertechnik, teilweise weil es kein Tooling erforderte – nur eine Änderung in der Art, wie man den Prompt schrieb. Few-Shot-Prompting aus dem GPT-3-Paper (Brown et al., 2020) war sofort von jedem mit API-Zugang adaptierbar. Die Zugänglichkeit der Techniken beschleunigte ihre Verbreitung.',
            },
            {
              q: 'Wird Prompt Engineering weniger wichtig, wenn Modelle sich verbessern?',
              a: 'Nein – leistungsfähigere Modelle reagieren besser auf gut strukturierte Prompts, nicht weniger. Der Gewinn aus gutem Prompting steigt, wenn das Modell präzisen Anweisungen besser folgen kann. Was sich verändert hat, ist das Niveau des Prompt Engineerings, das für einfache Aufgaben erforderlich ist: Gesprächsfragen erfordern jetzt weniger Ausarbeitung als 2021. Aber für komplexe, produktionsreife Ausgaben bleibt strukturiertes Prompting der zuverlässigste verfügbare Hebel.',
            },
            {
              q: 'Was ist der Unterschied zwischen Prompt Engineering und Kontext-Engineering?',
              a: 'Prompt Engineering bezieht sich typischerweise auf das Gestalten der Texteingabe für ein Modell, um seine Ausgabe zu verbessern. Kontext-Engineering ist ein breiteres, neueres Konzept, das sich auf das Orchestrieren von allem im Kontextfenster des Modells bezieht: den System-Prompt, abgerufene Dokumente, Gesprächsverlauf, Werkzeugausgaben und Benutzereingaben – alle bewusst zusammengestellt. Kontext-Engineering behandelt den Prompt als eine Komponente in einem gestalteten System, nicht als eigenständiges Artefakt.',
            },
            {
              q: 'Werden automatisierte Werkzeuge die Notwendigkeit eliminieren, Prompt Engineering zu verstehen?',
              a: 'Automatisierte Werkzeuge wie DSPy können Prompt-Formulierungen innerhalb definierter Ziele optimieren, erfordern jedoch, dass ein Mensch festlegt, was das Ziel ist, welche Einschränkungen gelten und wie Erfolg bewertet wird. Das Verständnis von Prompt-Engineering-Prinzipien bleibt notwendig, um diese Werkzeuge effektiv einzusetzen – und um zu diagnostizieren, wenn sie das falsche Ergebnis liefern. Automatisierung beseitigt einen Teil der manuellen Iteration; sie beseitigt nicht die Notwendigkeit strukturierten Denkens.',
            },
            {
              q: 'Ist Prompt Engineering im Jahr 2026 tot?',
              a: 'Nein. Die Disziplin hat sich verändert, ist aber nicht verschwunden. Mit wachsender Modellkompetenz verlagert sich die Arbeit von Syntax-Tricks und Formatierungs-Hacks hin zum Kontext-Design – Strukturierung von Eingaben, Verwaltung von Retrieval und Komposition von Tool-Ausgaben. Die Berufsbezeichnung „Prompt Engineer" wird enger gefasst, aber die zugrunde liegende Fähigkeit ist in jede Rolle integriert, die KI nutzt: Entwickler, Analyst, Marketingspezialist, Forscher. McKinseys State of AI-Bericht 2024 stellte fest, dass effektive KI-Einführung nach wie vor stark damit korreliert, wie gut Nutzer Aufgaben für das Modell formulieren.',
            },
            {
              q: 'Muss ich Prompt Engineering lernen, wenn KI-Modelle immer besser werden?',
              a: 'Ja – aber der Fokus verschiebt sich mit jeder Generation. Bessere Modelle reduzieren den Bedarf an aufwändigen Workarounds und erhöhen den Nutzen klarer Absicht, strukturierten Kontexts und gut gewählter Beispiele. Die Grundlagen – Rolle, Kontext, Format, Einschränkungen – bleiben über jede Modellgeneration hinweg stabil. Wer sie jetzt lernt, akkumuliert eine Fähigkeit, die sich aufbaut statt zu verfallen.',
            },
            {
              q: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?',
              a: 'Prompt Engineering ändert, wie man mit einem Modell kommuniziert, ohne seine Gewichte zu verändern. Fine-Tuning trainiert ein Modell auf neuen Daten und ändert sein Verhalten dauerhaft. Prompt Engineering ist schneller, günstiger und reversibel – Iteration in Minuten ist möglich. Fine-Tuning ist besser, wenn das Zielverhalten konsistent, hochvolumig oder im Prompt nicht zuverlässig beschreibbar ist. Die meisten Teams beginnen mit Prompting und wechseln zum Fine-Tuning erst, wenn Prompting an seine Grenzen stößt.',
            },
          ],
        },
      },
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'De GPT-2 à aujourd\'hui : Comment le prompt engineering a évolué',
      intro: 'L\'histoire du prompt engineering de GPT-3 et du few-shot prompting en 2020 au context design en 2026.',
      publishDate: 'Publié mars 2026',
      readTime: '10 min de lecture',
      sections: {
        definition: {
          title: 'Comment le prompt engineering a évolué : un bref aperçu',
          content: [
            '**Le prompt engineering a évolué d\'une manipulation de texte informelle par essais et erreurs autour de GPT-3 en 2020 vers une discipline structurée avec des techniques nommées, des frameworks et des outils d\'ici 2026.** L\'arc couvre cinq phases : les premières expériences few-shot, le moment ChatGPT qui a amené la compétence dans la conscience du grand public, le développement de techniques de raisonnement structurées, l\'essor de l\'optimisation automatisée des prompts et le glissement actuel vers la conception de contexte.',
            'La discipline n\'a pas émergé d\'un seul article ou d\'une seule entreprise. Elle a grandi à partir du chevauchement entre la recherche (apprentissage few-shot, raisonnement par chaîne de pensée, RAG), les communautés de praticiens partageant des collections de prompts en ligne, et la disponibilité soudaine au grand public de modèles puissants qui rendait le bon prompting immédiatement gratifiant. En 2026, le prompt engineering n\'est plus un truc de niche — c\'est une compétence de base pour quiconque travaille avec des systèmes IA.',
          ],
        },

        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            '2019–2020 : GPT-2 et les premiers transformers — les prompts étaient des entrées, pas une discipline',
            '2020 : GPT-3 et Brown et al. ont introduit le few-shot prompting comme changement de paradigme',
            '2022 : Les prompts de raisonnement Chain-of-Thought ont transformé le prompting en compétence structurée',
            'Fin 2022 : ChatGPT a amené le prompt engineering dans la conscience du grand public et les offres d\'emploi',
            '2023 : GPT-4, le prompting multimodal et les frameworks ont formalisé les meilleures pratiques',
            '2024–2026 : La conception de contexte, le prompting automatisé et les LLM open source ont redéfini le domaine',
          ],
        },

        pre2020: {
          title: 'Avant que le prompt engineering ait un nom (avant 2020)',
          content: [
            'Avant que le terme « prompt engineering » existe, les chercheurs manipulaient déjà les entrées des modèles pour obtenir de meilleures sorties — ils ne l\'appelaient juste pas ainsi. Les premiers modèles transformers comme GPT-2 (2019, OpenAI) et BERT (2018, Google) étaient utilisés via du texte d\'entrée soigneusement choisi, mais la pratique était traitée comme faisant partie du prétraitement des données, pas comme une compétence à part entière.',
            'GPT-2, sorti en février 2019, était un modèle à 1,5 milliard de paramètres capable de compléter du texte de manière étonnamment cohérente. Les chercheurs et les premiers praticiens ont remarqué que la formulation d\'une entrée changeait radicalement la qualité de la complétion — mais il n\'existait pas encore de framework, de terminologie ni de communauté construite autour de cette observation. Les prompts étaient des entrées, pas des artefacts d\'ingénierie.',
          ],
        },

        gpt3: {
          title: '2020 : GPT-3 et la percée du few-shot',
          content: [
            '**L\'histoire moderne du prompt engineering commence effectivement avec GPT-3.** En mai 2020, OpenAI a publié GPT-3, un modèle à 175 milliards de paramètres, accompagné de l\'article phare de Brown et al., « Language Models are Few-Shot Learners » [External: Brown et al., 2020 – Language Models are Few-Shot Learners]. L\'article démontrait qu\'en incluant quelques exemples de la tâche souhaitée directement dans le prompt — sans aucune mise à jour des poids du modèle — les performances sur les tâches en aval s\'amélioraient de façon spectaculaire.',
            'C\'était la graine du prompt engineering en tant que discipline. Les chercheurs et développeurs ont réalisé que le même modèle pouvait être transformé en traducteur, résumeur, générateur de code ou système de questions-réponses simplement en changeant la façon dont le prompt était rédigé. Le modèle n\'avait pas besoin d\'être ré-entraîné — il avait besoin d\'un meilleur prompt. Cette prise de conscience a reformulé ce qu\'était un prompt : pas seulement une entrée, mais un artefact de conception.',
            'Brown et al. ont rapporté que les performances en few-shot augmentaient régulièrement avec la taille du modèle : le GPT-3 à 175 milliards de paramètres surpassait nettement les variantes plus petites sur tous les benchmarks testés, établissant que l\'échelle et l\'apprentissage basé sur les prompts étaient directement liés. La qualité du prompt est ainsi devenue une variable que les praticiens — pas seulement les chercheurs — pouvaient contrôler directement.',
            'Voir [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] pour un guide pratique de la technique que GPT-3 a rendue célèbre.',
          ],
        },

        skill: {
          title: '2021–début 2022 : Des astuces de prompt à une compétence reconnue',
          content: [
            'Entre 2021 et début 2022, la conception de prompts est passée des articles de recherche aux communautés de praticiens. Des dépôts GitHub avec des collections de prompts curatées sont apparus — des listes de style « awesome-prompts » partageant ce qui fonctionnait pour l\'assistance au codage, la résumation et l\'écriture créative. Des collections de prompts, partagées sur Twitter et Reddit, sont devenues des actifs communautaires. Le Prompt Engineering Guide (promptingguide.ai) [External: Prompt Engineering Guide – promptingguide.ai] est devenu l\'une des premières références dédiées à cataloguer les techniques de manière systématique.',
            'Le terme « prompt engineering » a commencé à apparaître plus fréquemment dans les articles de recherche, les billets de blog et les descriptions de postes durant cette période. L\'article InstructGPT d\'OpenAI (Ouyang et al., 2022) a introduit des modèles ajustés par RLHF qui répondaient beaucoup plus fiablement aux instructions en langage naturel — rendant la qualité des prompts encore plus déterminante. À mi-2022, il était clair que c\'était une compétence transférable, pas seulement une curiosité de chercheur.',
          ],
        },

        cot: {
          title: '2022 : Chain-of-Thought et les prompts de raisonnement',
          content: [
            '**L\'introduction du prompting Chain-of-Thought (CoT) en 2022 a été le développement technique le plus significatif de la courte histoire de la discipline.** Wei et al. (Google Brain) ont publié « Chain-of-Thought Prompting Elicits Reasoning in Large Language Models », démontrant que demander à un modèle de raisonner étape par étape avant de répondre améliorait considérablement les performances sur les tâches arithmétiques, de raisonnement de sens commun et de raisonnement symbolique. Dans un résultat clé, le chain-of-thought prompting a amélioré la précision de PaLM sur le benchmark de mathématiques scolaires GSM8K, passant de 17,9 % à 58 % — un gain obtenu uniquement en modifiant la structure du prompt, sans entraînement supplémentaire du modèle. L\'implication était profonde : la structure du prompt pouvait activer un comportement de raisonnement différent — pas seulement des faits différents.',
            'Des techniques connexes ont suivi rapidement. Zhou et al. ont introduit le prompting du moins au plus, qui décomposait les problèmes complexes en une séquence de sous-problèmes plus simples résolus dans l\'ordre. Ces approches ont transformé le prompt engineering d\'un exercice de formatage en un outil pour éliciter un raisonnement structuré de modèles qui n\'avaient pas été explicitement entraînés à raisonner de cette façon. Le prompting était devenu un échafaudage pour la cognition.',
            'Pour le guide complet des techniques, voir [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] et [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          title: 'Fin 2022–2023 : Le moment ChatGPT et le titre de « prompt engineer »',
          content: [
            '**La sortie de ChatGPT le 30 novembre 2022 a changé du jour au lendemain le profil public du prompt engineering.** ChatGPT a atteint un million d\'utilisateurs dans les cinq premiers jours — confirmé par le PDG d\'OpenAI Sam Altman sur Twitter en décembre 2022 — et 100 millions d\'utilisateurs actifs mensuels en janvier 2023, selon une analyse UBS citée par Reuters. En quelques jours, des millions de personnes expérimentaient avec des prompts et découvraient que leurs résultats variaient énormément selon la façon dont elles formulaient leurs demandes. Les médias tech couvraient le « prompt engineering » comme une compétence valant la peine d\'être apprise. L\'Oxford English Dictionary a ajouté « prompt » comme verbe lié à l\'IA en 2023, et le mot lui-même est devenu finaliste pour le mot de l\'année dans plusieurs classements.',
            'Début 2023, « prompt engineer » est apparu comme titre de poste avec des salaires annoncés de 175 000 à 335 000 dollars dans des entreprises incluant Anthropic, selon des offres d\'emploi largement citées. Le rôle a attiré une attention médiatique significative — Bloomberg, The Guardian et The Atlantic ont tous couvert la question de savoir si le prompt engineering était une vraie carrière. Le consensus de l\'époque : c\'était un rôle transitoire, mi-conception d\'interface homme-machine, mi-expertise du domaine, mi-assurance qualité.',
            'La popularisation de l\'expression « prompt engineering » est parfois attribuée à divers praticiens et commentateurs. Richard Socher, ancien scientifique en chef chez Salesforce, est mentionné dans certains commentaires comme ayant contribué à cadrer l\'idée tôt. L\'article Wikipédia sur le prompt engineering [External: Prompt Engineering – Wikipedia] donne un aperçu équilibré des revendications concurrentes sur les origines du terme.',
          ],
        },

        gpt4: {
          title: '2023 : GPT-4, le prompting multimodal et les frameworks',
          content: [
            'La sortie de GPT-4 en mars 2023 a étendu le prompt engineering dans deux directions simultanément : des fenêtres de contexte plus grandes (jusqu\'à 128K tokens dans les versions ultérieures) et des entrées multimodales. Les praticiens pouvaient désormais inclure des images dans les prompts aux côtés du texte, ouvrant le prompt engineering aux tâches visuelles — décrire des images, comparer des diagrammes, annoter des graphiques. Les premiers modèles Gemini de Google et les versions multimodales de Claude d\'Anthropic ont suivi dans les mois qui ont suivi.',
            'La même année a vu la formalisation des meilleures pratiques de prompt engineering. OpenAI a publié son guide officiel de prompt engineering [External: OpenAI – Best Practices for Prompt Engineering]. Google Cloud a publié sa propre documentation de prompt engineering [External: Google Cloud – Prompt Engineering for AI Guide]. Des auteurs indépendants ont codifié des frameworks — CRAFT, CO-STAR, SPECS, RISEN, TRACE — qui ont donné aux praticiens des modèles reproductibles pour structurer les prompts, réduisant la dépendance aux essais et erreurs.',
            'Ces frameworks représentaient la maturité du prompt engineering passant d\'une compétence personnelle à une pratique enseignable et partageable. Voir [Frameworks: Which Prompt Framework Should You Use?] pour un guide de choix entre eux, et [Fundamentals: Beyond Text: How to Prompt with Images] pour la dimension multimodale.',
          ],
        },

        automated: {
          title: '2023–2024 : Prompt engineering automatisé et RAG',
          content: [
            'Un développement frappant en 2023 était la recherche montrant que les LLM pouvaient optimiser les prompts aussi bien que les humains. Zhou et al. ont publié « Large Language Models Are Human-Level Prompt Engineers » (APE), démontrant qu\'un LLM chargé de générer et d\'évaluer des candidats prompts pouvait égaler ou dépasser les prompts écrits par des humains sur des tâches de référence. Le framework DSPy de Stanford (2023) est allé plus loin — permettant aux développeurs de décrire ce qu\'un prompt devrait accomplir et laissant le système optimiser automatiquement la formulation.',
            'Simultanément, la Retrieval-Augmented Generation (RAG) — introduite à l\'origine par Lewis et al. chez Meta en 2020 — est devenue un schéma central dans les systèmes IA de production. Le RAG injectait des documents récupérés directement dans le contexte du prompt, ancrant les sorties du modèle dans des sources réelles et à jour plutôt que d\'exiger que les prompts contiennent tous les faits nécessaires. Cela a déplacé l\'emphase dans le prompt engineering de « comment faire en sorte que le modèle sache cela ? » à « comment structurer le contexte pour que le modèle l\'utilise correctement ? »',
            'Voir [Techniques: RAG Explained: How to Ground AI Answers in Real Data] et [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work] pour la couverture des techniques clés de cette période.',
          ],
        },

        context: {
          title: '2024–2025 : Du prompt engineering à la conception de contexte',
          content: [
            'En 2024, un nouveau cadrage a commencé à déplacer la simple idée d\'« écrire un meilleur prompt ». Les praticiens et chercheurs ont commencé à parler d\'ingénierie de contexte — la pratique d\'orchestrer ce qui entre dans la fenêtre de contexte complète : le prompt système, les documents récupérés, les sorties d\'outils, l\'historique de conversation et l\'entrée utilisateur, tous composés délibérément pour guider le comportement du modèle. Le prompt n\'était plus un artefact autonome ; c\'était une couche dans un contexte conçu.',
            'Plusieurs développements ont accéléré ce glissement. Les modèles de la classe Llama 3 de Meta (2024) ont rendu des LLM open source capables disponibles pour un déploiement privé, déplaçant une partie du prompt engineering des API cloud vers l\'infrastructure locale. Les fenêtres de contexte ont grandi jusqu\'à 1 million de tokens ou plus (Gemini 1.5 Pro), rendant pratique l\'injection de bases de code entières, de livres ou de collections de documents dans un seul prompt. Les frameworks multi-agents comme LangChain et AutoGen ont transformé le prompting en orchestration — un prompt déclenche un autre modèle, qui déclenche un outil, qui renvoie le contexte au prompt suivant.',
            'Voir [External: Prompt Engineering from 2020 to 2025 – AI Supremacy] et [External: The Evolution of Prompt Engineering to Context Design – 2026] pour des perspectives externes sur cette transition.',
          ],
        },

        beyond2026: {
          title: '2026 et au-delà : Le prompt engineering comme compétence fondamentale',
          content: [
            'En 2026, la recherche et les commentaires décrivent de plus en plus le prompt engineering non pas comme un titre de poste de niche, mais comme une compétence de littératie fondamentale pour les travailleurs du savoir qui utilisent des outils IA. Des articles académiques comme « Prompt Engineering as a New 21st Century Skill » [External: Prompt engineering as a new 21st century skill – Frontiers] cadrent le prompting structuré aux côtés de la lecture, de l\'écriture et du calcul comme compétence de base pour travailler avec des systèmes d\'IA générative.',
            'Le rôle s\'est divisé en deux pistes distinctes. La première est la conception de systèmes et de contextes — l\'ingénierie de systèmes IA de production où les prompts font partie d\'une architecture plus large impliquant la récupération, les agents et les pipelines d\'évaluation. La seconde est l\'usage quotidien — la capacité d\'écrire des prompts clairs et structurés qui produisent des sorties utiles sans connaître l\'architecture sous-jacente. Les deux pistes bénéficient des mêmes principes fondamentaux : spécification claire de la tâche, contexte approprié, contraintes et format de sortie.',
            'Ce qui n\'a pas changé, malgré des modèles plus capables et des outils automatisés, c\'est le principe fondamental : plus l\'entrée est claire et structurée, plus la sortie est fiable et utile. Les techniques, la terminologie et les outils ont mûri, mais l\'idée fondamentale de l\'ère GPT-3 reste vraie en 2026.',
          ],
        },

        timeline: {
          title: 'Chronologie : Les jalons clés du prompt engineering',
          content: 'Le tableau ci-dessous résume les jalons clés de 2018 à 2026 — les événements, articles et sorties de modèles qui ont façonné la façon dont le prompt engineering a évolué vers sa forme actuelle.',
          columns: ['Année', 'Jalon', 'Pourquoi c\'est important'],
          rows: [
            { 'Année': '2018–2019', 'Jalon': 'BERT (Google) et GPT-2 (OpenAI) publiés', 'Pourquoi c\'est important': 'A démontré que les modèles transformers pouvaient être guidés par la formulation des entrées — mais sans discipline formelle encore' },
            { 'Année': '2020', 'Jalon': 'GPT-3 et Brown et al. « Language Models are Few-Shot Learners »', 'Pourquoi c\'est important': 'A établi le few-shot prompting comme paradigme : réécrire le prompt change le comportement du modèle sans ré-entraînement' },
            { 'Année': '2022 (janv.)', 'Jalon': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Pourquoi c\'est important': 'Modèles entraînés à suivre des instructions — a rendu la qualité des prompts beaucoup plus déterminante' },
            { 'Année': '2022 (mai)', 'Jalon': 'Prompting Chain-of-Thought (Wei et al., Google Brain)', 'Pourquoi c\'est important': 'A prouvé que la structure du prompt pouvait éliciter un raisonnement étape par étape — a transformé le prompting en échafaudage cognitif' },
            { 'Année': '2022 (nov.)', 'Jalon': 'Lancement de ChatGPT', 'Pourquoi c\'est important': 'A amené le prompt engineering dans la conscience du grand public ; des millions ont commencé à expérimenter du jour au lendemain' },
            { 'Année': '2023 (T1)', 'Jalon': 'Le titre « prompt engineer » atteint des offres de salaire à 300K$+ ; l\'OED ajoute prompt comme verbe', 'Pourquoi c\'est important': 'A défini le prompt engineering comme une profession reconnue et une compétence nommée' },
            { 'Année': '2023 (mars)', 'Jalon': 'Sortie de GPT-4 ; prompting multimodal avec images', 'Pourquoi c\'est important': 'A étendu le prompt engineering au-delà du texte vers les entrées visuelles et les grandes fenêtres de contexte' },
            { 'Année': '2023', 'Jalon': 'Frameworks formalisés : CRAFT, CO-STAR, SPECS, RISEN ; guides officiels d\'OpenAI et Google', 'Pourquoi c\'est important': 'A transformé le prompt engineering d\'un art personnel en pratique enseignable et partageable' },
            { 'Année': '2023–2024', 'Jalon': 'Article APE (Zhou et al.) et framework DSPy — prompts optimisés par IA', 'Pourquoi c\'est important': 'Les LLM se sont avérés capables d\'écrire des prompts aussi bien que les humains ; l\'optimisation automatisée des prompts est devenue pratique' },
            { 'Année': '2024', 'Jalon': 'Modèles de la classe Llama 3 ; fenêtres de contexte dépassant 1M de tokens (Gemini 1.5 Pro)', 'Pourquoi c\'est important': 'LLM open source pour déploiement privé ; le contexte massif a déplacé l\'attention vers l\'ingénierie de contexte' },
            { 'Année': '2025–2026', 'Jalon': 'La conception de contexte et l\'orchestration multi-agents remplacent le simple ajustement de prompts', 'Pourquoi c\'est important': 'Le prompting devient une couche dans un contexte composé — une réflexion au niveau système est requise' },
          ],
        },

        todayPractice: {
          title: 'Comment l\'histoire façonne les meilleures pratiques actuelles',
          content: [
            'Chaque phase de l\'évolution du prompt engineering a laissé un dépôt durable dans la pratique actuelle. L\'ère GPT-3 nous a donné l\'idée fondamentale que le comportement du modèle est façonné par la structure de l\'entrée — pas seulement le contenu. L\'ère Chain-of-Thought nous a donné des échafaudages de raisonnement explicites : prompting étape par étape, chaînage de prompts et approches tree-of-thought. L\'ère des frameworks nous a donné des modèles réutilisables qui encodent les meilleures pratiques sans exiger que chaque praticien les découvre de zéro.',
            'L\'ère RAG et de la conception de contexte nous a donné la compréhension que les prompts n\'existent pas en isolation — ils sont composés avec des données récupérées, des instructions système et des sorties d\'outils pour former un contexte complet. Et l\'ère du prompting automatisé nous a rappelé que les principes d\'un bon prompting sont mesurables : les prompts mieux structurés produisent de meilleures sorties de façon qui peut être évaluée et optimisée systématiquement.',
          ],
          items: [
            'Techniques de raisonnement de 2022 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] et [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            'Développement de frameworks de 2023 → [Frameworks: Which Prompt Framework Should You Use?]',
            'Croissance des fenêtres de contexte → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'Économie des tokens à travers les générations de modèles → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG comme complément au prompting pur → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          title: 'FAQ : L\'évolution du prompt engineering',
          faqs: [
            {
              q: 'Qui a inventé le terme « prompt engineering » en premier ?',
              a: 'L\'origine exacte est débattue. Le terme est apparu dans des contextes de recherche dès 2021 et a été plus largement utilisé tout au long de 2022. Richard Socher est mentionné dans certains commentaires comme ayant contribué à cadrer le concept publiquement, bien qu\'aucune personne ne soit créditée de l\'avoir inventé. L\'article Wikipédia sur le prompt engineering [External: Prompt Engineering – Wikipedia] donne un aperçu équilibré des revendications concurrentes.',
            },
            {
              q: 'Pourquoi le prompt engineering a-t-il explosé en popularité après ChatGPT ?',
              a: 'ChatGPT était le premier modèle IA polyvalent que des millions de non-chercheurs pouvaient utiliser immédiatement, gratuitement, sans écrire de code. L\'écart entre un prompt bien conçu et un vague était visible et immédiatement conséquent — de meilleurs prompts produisaient des sorties sensiblement meilleures. Cette boucle de rétroaction, vécue simultanément par des millions de personnes, a transformé le prompt engineering d\'un concept de recherche en une compétence de masse.',
            },
            {
              q: 'Comment les articles de recherche ont-ils influencé les techniques de prompting du monde réel ?',
              a: 'Le transfert a été inhabituellement rapide pour la recherche en IA. Le prompting Chain-of-Thought (Wei et al., 2022) est passé d\'un article académique à une technique de praticien largement utilisée en quelques mois, en partie parce qu\'il ne nécessitait aucun outillage — juste un changement dans la façon d\'écrire le prompt. Le few-shot prompting tiré de l\'article GPT-3 (Brown et al., 2020) était immédiatement adoptable par quiconque avait accès à l\'API. L\'accessibilité des techniques a accéléré leur diffusion.',
            },
            {
              q: 'Le prompt engineering devient-il moins important à mesure que les modèles s\'améliorent ?',
              a: 'Non — les modèles plus capables répondent mieux aux prompts bien structurés, pas moins. Les gains d\'un bon prompting augmentent à mesure que le modèle devient plus capable de suivre des instructions précises. Ce qui a changé, c\'est le niveau de prompt engineering requis pour les tâches simples : les questions conversationnelles nécessitent désormais moins de travail qu\'en 2021. Mais pour les sorties complexes de qualité production, le prompting structuré reste le levier le plus fiable disponible.',
            },
            {
              q: 'Quelle est la différence entre le prompt engineering et l\'ingénierie de contexte ?',
              a: 'Le prompt engineering désigne généralement la conception de l\'entrée textuelle d\'un modèle pour améliorer sa sortie. L\'ingénierie de contexte est un concept plus large et plus récent qui désigne l\'orchestration de tout ce qui se trouve dans la fenêtre de contexte du modèle : le prompt système, les documents récupérés, l\'historique de conversation, les sorties d\'outils et l\'entrée utilisateur — tous composés délibérément. L\'ingénierie de contexte traite le prompt comme un composant dans un système conçu, pas comme un artefact autonome.',
            },
            {
              q: 'Les outils automatisés remplaceront-ils le besoin de comprendre le prompt engineering ?',
              a: 'Les outils automatisés comme DSPy peuvent optimiser la formulation des prompts dans des objectifs définis, mais ils nécessitent qu\'un humain spécifie quel est l\'objectif, quelles contraintes s\'appliquent et comment évaluer le succès. Comprendre les principes du prompt engineering reste nécessaire pour utiliser ces outils efficacement — et pour diagnostiquer quand ils produisent le mauvais résultat. L\'automatisation supprime une partie de l\'itération manuelle ; elle ne supprime pas le besoin d\'une réflexion structurée.',
            },
            {
              q: 'Le prompt engineering est-il mort en 2026 ?',
              a: 'Non. La discipline a évolué, elle n\'a pas disparu. À mesure que les modèles deviennent plus capables, le travail passe des astuces syntaxiques vers la conception de contexte — structurer les entrées, gérer la récupération et composer les sorties d\'outils. L\'intitulé « Prompt Engineer » se rétrécit, mais la compétence est intégrée dans chaque rôle utilisant l\'IA : développeur, analyste, marketeur, chercheur. Le rapport State of AI 2024 de McKinsey a constaté que l\'adoption efficace de l\'IA corrèle toujours fortement avec la façon dont les utilisateurs formulent les tâches pour le modèle.',
            },
            {
              q: 'Dois-je apprendre le prompt engineering si les modèles continuent de s\'améliorer ?',
              a: 'Oui — mais le focus évolue à chaque génération. Les modèles plus performants réduisent le besoin de contournements élaborés et augmentent la valeur d\'une intention claire, d\'un contexte structuré et d\'exemples bien choisis. Les fondamentaux — rôle, contexte, format, contraintes — restent stables d\'une génération de modèles à l\'autre.',
            },
            {
              q: 'Quelle est la différence entre le prompt engineering et le fine-tuning ?',
              a: 'Le prompt engineering modifie la façon dont on communique avec un modèle sans changer ses poids. Le fine-tuning réentraîne un modèle sur de nouvelles données pour modifier son comportement de façon permanente. Le prompt engineering est plus rapide, moins coûteux et réversible. Le fine-tuning convient mieux lorsque le comportement cible est constant, à fort volume ou impossible à décrire dans un prompt. La plupart des équipes commencent par le prompting et passent au fine-tuning uniquement lorsque le prompting atteint ses limites.',
            },
          ],
        },
      },
    },
    ja: {
      theme: '基礎',
      title: 'GPT-2から現在まで：プロンプトエンジニアリングの進化',
      intro: '2020年のGPT-3とフューショットプロンプティングから2026年のコンテキストデザインまで、プロンプトエンジニアリングの歴史。',
      publishDate: '2026年3月公開',
      readTime: '10分で読める',
      sections: {
        definition: {
          title: '5つのフェーズで分野全体を理解する',
          content: [
            '**プロンプトエンジニアリングは、2020年頃のGPT-3をめぐる非公式な試行錯誤によるテキスト操作から、2026年までに名前の付いたテクニック・フレームワーク・ツールを持つ体系的な分野へと進化しました。** この歩みは5つのフェーズにわたります：初期のフューショット実験・大衆の認識にスキルをもたらしたChatGPTの瞬間・構造化された推論テクニックの発展・自動プロンプト最適化の台頭・そして現在のコンテキストデザインへの移行。',
            'この分野は単一の論文や企業から生まれたのではありません。研究（フューショット学習・思考の連鎖推論・RAG）と、プロンプトコレクションをオンラインで共有する実践者コミュニティと、優れたプロンプティングを即座に報われるものにした強力なモデルの突然の一般公開との重なりから成長しました。2026年現在、プロンプトエンジニアリングはもはやニッチなトリックではありません — AIシステムを扱う誰もが持つべき基本スキルです。',
            'これら5つのフェーズは、プロンプトエンジニアリングがどのように発展したかを理解するための基盤です。現在のプロンプトエンジニアリングの完全な定義については、[Fundamentals: What Is Prompt Engineering?]を参照してください。',
          ],
        },

        tldr: {
          title: 'まとめ',
          isTldr: true,
          items: [
            '2019〜2020年：GPT-2と初期トランスフォーマー — プロンプトは入力であって、分野ではなかった',
            '2020年：GPT-3とBrown et al.がフューショットプロンプティングをパラダイムシフトとして導入',
            '2022年：思考の連鎖（Chain-of-Thought）推論プロンプトがプロンプティングを構造化されたスキルへと変えた',
            '2022年後半：ChatGPTがプロンプトエンジニアリングを主流の認識と求人票にもたらした',
            '2023年：GPT-4・マルチモーダルプロンプティング・フレームワークがベストプラクティスを体系化した',
            '2024〜2026年：コンテキストデザイン・自動プロンプティング・オープンソースLLMがこの分野を再定義した',
          ],
        },

        pre2020: {
          title: 'プロンプトエンジニアリングという名称が生まれる前（2020年以前）',
          content: [
            '「プロンプトエンジニアリング」という用語が存在する前から、研究者たちはより良い出力を引き出すためにモデルへの入力を操作していました — ただ、それをそう呼んでいなかっただけです。GPT-2（2019年、OpenAI）やBERT（2018年、Google）などの初期トランスフォーマーモデルは注意深く選ばれた入力テキストを通じて使われていましたが、その実践はデータ前処理の一部として扱われており、独自のスキルとは見なされていませんでした。',
            '2019年2月にリリースされたGPT-2は15億パラメーターのモデルで、驚くほど整合性のある方法でテキストを補完できました。研究者と初期の実践者は、入力のフレーズが補完の品質を劇的に変えることに気づきましたが、この観察をめぐるフレームワーク・用語・コミュニティはまだ存在していませんでした。プロンプトは入力であって、エンジニアリング上の成果物ではありませんでした。',
          ],
        },

        gpt3: {
          title: '2020年：GPT-3とフューショットの革新',
          content: [
            '**プロンプトエンジニアリングの現代史は実質的にGPT-3から始まります。** 2020年5月、OpenAIは1750億パラメーターのモデルであるGPT-3を、Brown et al.による画期的な論文「Language Models are Few-Shot Learners」[External: Brown et al., 2020 – Language Models are Few-Shot Learners] とともにリリースしました。この論文は、モデルへの重みの更新なしに、望ましいタスクのいくつかの例をプロンプトに直接含めるだけで、下流タスクのパフォーマンスが劇的に向上することを実証しました。',
            'これがプロンプトエンジニアリングという分野の種でした。研究者と開発者は、プロンプトの書き方を変えるだけで、同じモデルが翻訳者・要約者・コードジェネレーター・質問応答システムに変身できることを認識しました。モデルの再トレーニングは不要でした — より良いプロンプトが必要なだけでした。その洞察はプロンプトの意味を再構築しました：単なる入力ではなく、設計上の成果物として。',
            'ブラウンらは、few-shotの性能がモデルサイズと一貫して拡張することを報告しました。1,750億パラメータのGPT-3は、テストしたすべてのベンチマークで小型バリアントを大幅に上回り、スケールとプロンプトベースの学習が直接結びついていることを確立しました。これにより、プロンプトの品質は研究者だけでなく実務家も直接制御できる変数となりました。',
            'GPT-3が有名にしたテクニックの実践ガイドについては [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] を参照してください。',
          ],
        },

        promptEvolution: {
          title: 'プロンプト進化：2020年から2026年へ',
          content: [
            '初期のGPT-3プロンプトから現代的なコンテキスト設計されたシステムへの進化は、直接比較によって見えます。2020年、プロンプトは最小限でした — 例とタスク記述だけ。2026年までに、プロンプトはコンテキストウィンドウをオーケストレーションし、ツール相互作用を管理し、マルチステップ推論ワークフローを定義するシステムになりました。',
            '2020年のプロンプトは大体こんな感じだったかもしれません：**「これをフランス語に翻訳してください：こんにちは、お元気ですか？」** — 最小限の構造を持つ直接的な指示。2026年のプロンプトはシステム指示、役割定義、出力形式、検索コンテキスト、ツール可用性、推論制約を含めます — しばしば数百から数千トークンに及びます。このシフトはより大きなモデルとより大きなコンテキストウィンドウだけでなく、プロンプトの設計方法の根本的な変化を反映しています：テキスト補完への入力ではなく、システムへのインターフェースとして。',
          ],
        },

        skill: {
          title: '2021〜2022年初頭：プロンプトのトリックから認められたスキルへ',
          content: [
            '2021年から2022年初頭にかけて、プロンプトの作成は研究論文から実践者コミュニティへと移行しました。コーディング支援・要約・クリエイティブライティングに効果的なプロンプトを共有する「awesome-prompts」スタイルのキュレーションされたプロンプトコレクションのGitHubリポジトリが登場しました。TwitterやRedditで共有されたプロンプトコレクションはコミュニティの資産となりました。Prompt Engineering Guide（promptingguide.ai）[External: Prompt Engineering Guide – promptingguide.ai] はテクニックを体系的にカタログ化した最初の専用リファレンスの一つになりました。',
            '「プロンプトエンジニアリング」という用語はこの期間を通じて、研究論文・ブログ投稿・求人票にますます頻繁に登場するようになりました。OpenAIのInstructGPT論文（Ouyang et al.、2022年）はRLHFチューニングされたモデルを導入し、自然言語の指示に対してはるかに信頼性高く反応するようになりました — プロンプトの品質をさらに重要なものにしました。2022年半ばまでに、これが単なる研究者の好奇心ではなく、移転可能なスキルであることが明らかになりました。',
          ],
        },

        cot: {
          title: '2022年：思考の連鎖（Chain-of-Thought）と推論プロンプト',
          content: [
            '**2022年の思考の連鎖（CoT）プロンプティングの導入は、この分野の短い歴史における最も重要な技術的発展でした。** Wei et al.（Google Brain）が「Chain-of-Thought Prompting Elicits Reasoning in Large Language Models」を発表し、回答する前にステップバイステップで推論するようモデルに求めることで、算術・常識的推論・記号的推論タスクのパフォーマンスが劇的に向上することを実証しました。GSM8Kの小学校数学ベンチマークでは、chain-of-thoughtプロンプティングによりPaLMの精度が17.9%から58%に向上しました。これは追加のモデルトレーニングなしに、プロンプト構造を変えるだけで達成された成果です。 その意味は深遠でした：プロンプトの構造が異なる推論行動を活性化できる — 単に異なる事実だけでなく。',
            '関連するテクニックが素早く続きました。Zhou et al.は最小から最大へのプロンプティングを導入し、複雑な問題を順番に解決される一連のより単純なサブ問題に分解しました。これらのアプローチにより、プロンプトエンジニアリングはフォーマット演習から、そのような推論方法で明示的にトレーニングされていないモデルから構造化された推論を引き出すツールへと変わりました。プロンプティングは認知のための足場になりました。',
            '完全なテクニックガイドについては [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] と [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps] を参照してください。',
          ],
        },

        chatgpt: {
          title: '2022年後半〜2023年：ChatGPTの瞬間とプロンプトエンジニアという肩書き',
          content: [
            '**2022年11月30日のChatGPTリリースは、プロンプトエンジニアリングの公的なプロフィールを一夜にして変えました。** ChatGPTはサービス開始から5日以内に100万ユーザーを達成しました——2022年12月にOpenAI CEOのサム・アルトマンがTwitterで確認——そしてロイターが引用したUBSの分析によると、2023年1月には月間アクティブユーザー1億人に達しました。 数日のうちに、何百万もの人々がプロンプトを試し、リクエストのフレーズの仕方によって結果が大きく異なることを発見しました。テクノロジーメディアは「プロンプトエンジニアリング」を習得する価値のあるスキルとして取り上げました。オックスフォード英語辞典は2023年にAIに関連する動詞として「prompt」を追加し、その単語自体が複数のランキングで今年の言葉の候補になりました。',
            '2023年初頭までに、「プロンプトエンジニア」は広く引用された求人票によるとAnthropicを含む企業で17.5万〜33.5万ドルの給与で求人タイトルとして登場しました。この役職は大きなメディアの注目を集めました — Bloomberg・The Guardian・The Atlanticがすべて、プロンプトエンジニアリングが真のキャリアかどうかを取り上げました。当時のコンセンサス：それは移行期的な役割であり、ヒューマンコンピューターインターフェース設計・専門知識・品質保証の一部だと。',
            '「プロンプトエンジニアリング」というフレーズの普及化は、様々な実践者やコメンテーターに起因するとされることがあります。Salesforceの元チーフサイエンティストであるRichard Socherは、その考えを早期に広めることに貢献したとする解説に言及されています。Wikipediaのプロンプトエンジニアリングの記事 [External: Prompt Engineering – Wikipedia] は、用語の起源についての競合する主張をバランスよく概説しています。',
          ],
        },

        gpt4: {
          title: '2023年：GPT-4・マルチモーダルプロンプティング・フレームワーク',
          content: [
            '2023年3月のGPT-4のリリースは、プロンプトエンジニアリングを同時に2つの方向に拡張しました：より大きなコンテキストウィンドウ（後のバージョンでは最大128Kトークン）とマルチモーダル入力。実践者はテキストとともにプロンプトに画像を含めることができるようになり、プロンプトエンジニアリングがビジュアルタスク — 画像の説明・図の比較・グラフへの注釈付け — に開かれました。GoogleからのGeminiの初期モデルとAnthropicからのマルチモーダルClaudeバージョンが数ヶ月以内に続きました。',
            '同年、プロンプトエンジニアリングのベストプラクティスの体系化が見られました。OpenAIは公式のプロンプトエンジニアリングガイド [External: OpenAI – Best Practices for Prompt Engineering] を公開しました。Google Cloudは独自のプロンプトエンジニアリングドキュメント [External: Google Cloud – Prompt Engineering for AI Guide] をリリースしました。独立した著者がフレームワーク — CRAFT・CO-STAR・SPECS・RISEN・TRACE — を体系化し、実践者にプロンプト構造化の再利用可能なテンプレートを提供し、試行錯誤への依存を減らしました。',
            'これらのフレームワークは、プロンプトエンジニアリングが個人的なスキルから教えられる・共有可能な実践へと成熟したことを表していました。フレームワーク間の選択ガイドについては [Frameworks: Which Prompt Framework Should You Use?] を、マルチモーダルの側面については [Fundamentals: Beyond Text: How to Prompt with Images] を参照してください。',
          ],
        },

        pqTest: {
          title: 'PromptQuorum マルチモデルテスト：フレームワークのモデル間での効果',
          content: [
            'PromptQuorumは同じタスク — CO-STARフレームワークで構造化された — をGPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Proに送信しました。3つのモデル全てが最初の試行でフォーマット準拠、長さ準拠の回答を生成しました。フレームワークなしの同じタスクは、モデル間で平均2～3回の修正ラウンドが必要でした、有用な出力に到達するために。',
            'PromptQuorumは、この期間に正式化された9つのフレームワーク — CO-STAR、CRAFT、RISEN、SPECS、TRACE、その他4つ — を単一のインターフェースに統合し、実践者が毎回ゼロから構築することなく各構造を適用できるようにしています。',
          ],
        },

        automated: {
          title: '2023〜2024年：自動プロンプトエンジニアリングとRAG',
          content: [
            '2023年の注目すべき発展は、LLMが人間と同じくらいうまくプロンプトを最適化できることを示した研究でした。Zhou et al.が「Large Language Models Are Human-Level Prompt Engineers」（APE）を発表し、プロンプト候補を生成・評価するタスクを与えられたLLMがベンチマークタスクで人間が書いたプロンプトに匹敵またはそれを上回れることを実証しました。StanfordのDSPyフレームワーク（2023年）はこれをさらに進め、開発者がプロンプトが達成すべきことを説明すると、システムが自動的に言い回しを最適化できるようにしました。',
            '同時に、RAG（検索拡張生成） — 元々2020年にMetaのLewis et al.によって導入された — が本番AIシステムの中心的なパターンになりました。RAGは取得したドキュメントをプロンプトのコンテキストに直接注入し、プロンプトに必要な事実をすべて含めることを要求するのではなく、実際の最新のソースにモデルの出力を根拠付けました。これによりプロンプトエンジニアリングの重点が「モデルにこれを知らせるにはどうすればいいか？」から「モデルがこれを正しく使うようにコンテキストをどう構造化するか？」へとシフトしました。',
            'この期間の主要なテクニックの解説については [Techniques: RAG Explained: How to Ground AI Answers in Real Data] と [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work] を参照してください。',
          ],
        },

        context: {
          title: '2024〜2025年：プロンプトエンジニアリングからコンテキストデザインへ',
          content: [
            '2024年までに、「より良いプロンプトを書く」というシンプルなアイデアを置き換える新しいフレーミングが現れ始めました。実践者と研究者はコンテキストエンジニアリングを言及し始めました — フルコンテキストウィンドウに何が入るかを調整する実践：システムプロンプト・取得したドキュメント・ツール出力・会話履歴・ユーザー入力が、すべてモデルの動作を誘導するために意図的に組み合わされます。プロンプトはもはやスタンドアロンの成果物ではなく、設計されたコンテキストの一層でした。',
            'いくつかの発展がこのシフトを加速しました。Metaのモデル（2024年のLlama 3クラス）はプライベート展開のための有能なオープンソースLLMを利用可能にし、一部のプロンプトエンジニアリングをクラウドAPIからローカルインフラへとシフトしました。コンテキストウィンドウは100万トークン以上（Gemini 1.5 Pro）に成長し、コードベース全体・書籍・ドキュメントコレクション全体を単一のプロンプトに注入することが実用的になりました。LangChainやAutoGenのようなマルチエージェントフレームワークはプロンプティングをオーケストレーションに変えました — 一つのプロンプトが別のモデルをトリガーし、それがツールをトリガーし、それが次のプロンプトにコンテキストを返します。',
            'この移行への外部的な視点については [External: Prompt Engineering from 2020 to 2025 – AI Supremacy] と [External: The Evolution of Prompt Engineering to Context Design – 2026] を参照してください。',
          ],
        },

        beyond2026: {
          title: '2026年以降：コア・リテラシーとしてのプロンプトエンジニアリング',
          content: [
            '2026年現在、研究とコメンタリーはプロンプトエンジニアリングをニッチな職種としてではなく、AIツールを使うナレッジワーカーのための基本的なリテラシースキルとしてますます説明するようになっています。「Prompt Engineering as a New 21st Century Skill」[External: Prompt engineering as a new 21st century skill – Frontiers] のような学術論文は、構造化されたプロンプティングを読み・書き・計算と並んで、生成AIシステムを扱うための基本的な能力として位置づけています。',
            'この役割は2つの異なるトラックに分かれました。1つ目はシステムとコンテキストデザイン — プロンプトが取得・エージェント・評価パイプラインを含むより大きなアーキテクチャの一部を形成する本番AIシステムのエンジニアリング。2つ目は日常的な使用 — 基礎となるアーキテクチャを知らなくても有用な出力を生成する明確で構造化されたプロンプトを書く能力。両方のトラックが同じコア原則から恩恵を受けます：明確なタスク指定・適切なコンテキスト・制約・出力形式。',
            'より高性能なモデルと自動化ツールにもかかわらず変わっていないのは、根本原則です：入力が明確で構造化されているほど、出力はより信頼性が高く有用になります。テクニック・用語・ツールは成熟しましたが、GPT-3時代のコアな洞察は2026年でも真実であり続けています。',
          ],
        },

        timeline: {
          title: 'タイムライン：プロンプトエンジニアリングの主要なマイルストーン',
          content: '以下の表は2018年から2026年の主要なマイルストーンをまとめたものです — プロンプトエンジニアリングが現在の形に進化した出来事・論文・モデルリリース。',
          columns: ['年', 'マイルストーン', '重要な理由'],
          rows: [
            { '年': '2018〜2019年', 'マイルストーン': 'BERT（Google）とGPT-2（OpenAI）のリリース', '重要な理由': 'トランスフォーマーモデルが入力のフレーズによって誘導できることを実証 — ただしまだ正式な分野はなかった' },
            { '年': '2020年', 'マイルストーン': 'GPT-3とBrown et al.「Language Models are Few-Shot Learners」', '重要な理由': 'フューショットプロンプティングをパラダイムとして確立：プロンプトを書き直すことが再トレーニングなしにモデルの動作を変える' },
            { '年': '2022年（1月）', 'マイルストーン': 'InstructGPT / RLHF（Ouyang et al.、OpenAI）', '重要な理由': '指示に従うようにトレーニングされたモデル — プロンプトの品質がはるかに重要になった' },
            { '年': '2022年（5月）', 'マイルストーン': '思考の連鎖プロンプティング（Wei et al.、Google Brain）', '重要な理由': 'プロンプトの構造がステップバイステップの推論を引き出せることを証明 — プロンプティングを認知の足場に変えた' },
            { '年': '2022年（11月）', 'マイルストーン': 'ChatGPTのローンチ', '重要な理由': 'プロンプトエンジニアリングを主流の認識にもたらした；何百万もの人々が一夜にして実験を始めた' },
            { '年': '2023年（Q1）', 'マイルストーン': '「プロンプトエンジニア」という求人タイトルが30万ドル以上の給与で掲載；OEDがpromptを動詞として追加', '重要な理由': 'プロンプトエンジニアリングを認められた職業と名前の付いたスキルとして定義した' },
            { '年': '2023年（3月）', 'マイルストーン': 'GPT-4リリース；画像を使ったマルチモーダルプロンプティング', '重要な理由': 'プロンプトエンジニアリングをテキストを超えたビジュアル入力と大きなコンテキストウィンドウに拡張した' },
            { '年': '2023年', 'マイルストーン': 'フレームワークの体系化：CRAFT・CO-STAR・SPECS・RISEN；OpenAIとGoogleからの公式ガイド', '重要な理由': 'プロンプトエンジニアリングを個人的な技から教えられる・共有可能な実践に変えた' },
            { '年': '2023〜2024年', 'マイルストーン': 'APE論文（Zhou et al.）とDSPyフレームワーク — AIが最適化したプロンプト', '重要な理由': 'LLMが人間と同様にプロンプトを書けることが示された；自動プロンプト最適化が実用的になった' },
            { '年': '2024年', 'マイルストーン': 'Llama 3クラスのモデル；コンテキストウィンドウが100万トークンを超える（Gemini 1.5 Pro）', '重要な理由': 'プライベート展開のためのオープンソースLLM；大規模なコンテキストがコンテキストエンジニアリングへの焦点のシフトを加速した' },
            { '年': '2025〜2026年', 'マイルストーン': 'コンテキストデザインとマルチエージェントオーケストレーションがシンプルなプロンプト調整に取って代わる', '重要な理由': 'プロンプティングは組み合わされたコンテキストの一層になった — システムレベルの思考が必要' },
          ],
        },

        todayPractice: {
          title: '歴史が今日のベストプラクティスをどのように形作るか',
          content: [
            'プロンプトエンジニアリングの進化の各フェーズは、現在の実践に永続的な堆積物を残しました。GPT-3時代は、モデルの動作が入力の構造によって形作られる — コンテンツだけでなく — というコアな洞察を与えてくれました。思考の連鎖（Chain-of-Thought）時代は、明示的な推論の足場を与えてくれました：ステップバイステップのプロンプティング・プロンプトチェーニング・思考ツリーアプローチ。フレームワーク時代は、各実践者がゼロから発見することなくベストプラクティスを体現する再利用可能なテンプレートを与えてくれました。',
            'RAGとコンテキストデザインの時代は、プロンプトが単独で存在するのではなく — 取得されたデータ・システム指示・ツール出力と組み合わされてフルコンテキストを形成する — という理解を与えてくれました。そして自動プロンプティング時代は、優れたプロンプティングの原則が測定可能であることを思い出させてくれました：より構造化されたプロンプトは、体系的に評価・最適化できる方法でより良い出力を生成します。',
          ],
          items: [
            '2022年からの推論テクニック → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] と [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '2023年からのフレームワーク開発 → [Frameworks: Which Prompt Framework Should You Use?]',
            'コンテキストウィンドウの成長 → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'モデル世代にわたるトークンの経済性 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '純粋なプロンプティングの補完としてのRAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        relatedReading: {
          title: '関連資料',
          items: [
            '[基礎: プロンプトエンジニアリングとは？] — プロンプトエンジニアリングの完全な定義と、構造化された入力がより良い結果をもたらす理由',
            '[テクニック: 連鎖的思考プロンプティング：AIに推論を表示させる] — 2022年の手法がプロンプティングを推論スキャフォルドに変えた',
            '[フレームワーク: どのプロンプトフレームワークを使うべき？] — 2023年の標準化期間から生まれたフレームワーク',
          ],
        },

        faq: {
          title: 'FAQ：プロンプトエンジニアリングの進化',
          faqs: [
            {
              q: '「プロンプトエンジニアリング」という用語は誰が最初に作ったのですか？',
              a: '正確な起源は議論されています。この用語は2021年頃から研究文脈に登場し、2022年を通じて広く使われるようになりました。Richard Socherは、概念を公に広める手助けをしたとする解説の中で言及されていますが、それを発明したとされる特定の人物はいません。Wikipediaのプロンプトエンジニアリングの記事 [External: Prompt Engineering – Wikipedia] は、競合する主張についてバランスよく概説しています。',
            },
            {
              q: 'ChatGPT後にプロンプトエンジニアリングがなぜ爆発的に普及したのですか？',
              a: 'ChatGPTは、何百万もの非研究者がコードを書かずに無料で即座に使用できる最初の汎用AIモデルでした。巧みに作られたプロンプトと漠然としたプロンプトのギャップは目に見えて即座に重要でした — より良いプロンプトは使えるほど良い出力を生成しました。そのフィードバックループが何百万もの人々によって同時に経験されたことで、プロンプトエンジニアリングは研究概念から大衆スキルへと変わりました。',
            },
            {
              q: '研究論文は実際のプロンプティングテクニックにどのように影響を与えましたか？',
              a: 'AI研究としては移転が異例に速かったです。思考の連鎖（Chain-of-Thought）プロンプティング（Wei et al.、2022年）は、部分的にはツールを必要としなかったため — プロンプトの書き方を変えるだけ — 、学術論文から数ヶ月以内に広く使われる実践者テクニックになりました。GPT-3論文のフューショットプロンプティング（Brown et al.、2020年）はAPIアクセスを持つ誰もが即座に採用できるものでした。テクニックのアクセスしやすさがその普及を加速しました。',
            },
            {
              q: 'モデルが改善されるにつれて、プロンプトエンジニアリングは重要でなくなっていますか？',
              a: 'いいえ — より高性能なモデルは構造化されたプロンプトに対してより良く反応します、より少なくではなく。モデルが精密な指示に従う能力が向上するにつれて、優れたプロンプティングからの利益が増加します。変わったのは、単純なタスクに必要なプロンプトエンジニアリングのレベルです：会話的な質問は2021年よりも作り込みを必要としなくなりました。しかし、複雑な本番グレードの出力には、構造化されたプロンプティングが利用可能な最も信頼できる手段であり続けています。',
            },
            {
              q: 'プロンプトエンジニアリングとコンテキストエンジニアリングの違いは何ですか？',
              a: 'プロンプトエンジニアリングは通常、出力を改善するためにモデルへのテキスト入力を設計することを指します。コンテキストエンジニアリングは、モデルのコンテキストウィンドウにある全てのものを調整することを指す、より広く・より最近の概念です：システムプロンプト・取得したドキュメント・会話履歴・ツール出力・ユーザー入力 — すべて意図的に組み合わされます。コンテキストエンジニアリングは、プロンプトをスタンドアロンの成果物としてではなく、設計されたシステムの一コンポーネントとして扱います。',
            },
            {
              q: '自動化ツールはプロンプトエンジニアリングを理解する必要性を置き換えるでしょうか？',
              a: 'DSPyのような自動化ツールは定義された目標の中でプロンプトの言い回しを最適化できますが、目標が何か・どのような制約が適用されるか・成功をどのように評価するかを指定するには人間が必要です。プロンプトエンジニアリングの原則を理解することは、これらのツールを効果的に使うために、そして間違った結果を生成したときに診断するために必要であり続けます。自動化は手動のイテレーションの一部を取り除きます；構造化された思考の必要性は取り除きません。',
            },
            {
              q: 'プロンプトエンジニアリングは2026年に時代遅れになっていますか？',
              a: 'いいえ。この分野は変化しましたが、消えてはいません。モデルが高性能になるにつれて、作業は構文のトリックからコンテキスト設計——入力の構造化、検索の管理、ツール出力の構成——へと移行しています。「プロンプトエンジニア」という職種は縮小していますが、スキル自体はAIを使用するすべての役割に組み込まれています：開発者、アナリスト、マーケター、研究者。McKinseyの2024年AI現状報告書は、効果的なAI導入がモデルへのタスクの伝え方と依然として強く相関していることを発見しました。',
            },
            {
              q: 'モデルが改善し続ける中でプロンプトエンジニアリングを学ぶ必要がありますか？',
              a: 'はい——ただし世代ごとに焦点が変わります。高性能なモデルは複雑な回避策の必要性を減らし、明確な意図、構造化されたコンテキスト、適切なサンプルの価値を高めます。役割、コンテキスト、形式、制約というファンダメンタルズはモデル世代を超えて安定しています。',
            },
            {
              q: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？',
              a: 'プロンプトエンジニアリングはモデルの重みを変えずにモデルとの対話方法を変えます。ファインチューニングは新しいデータでモデルを再トレーニングし、その動作を永続的に変更します。プロンプトエンジニアリングは速く、安価で、可逆的です。ファインチューニングは目標の動作が一定で、高ボリュームで、またはプロンプトで確実に記述できない場合に適しています。ほとんどのチームはプロンプティングから始め、プロンプティングが限界に達したときのみファインチューニングに切り替えます。',
            },
          ],
        },
      },
    },
    zh: {
      theme: '基础知识',
      title: '从GPT-2到今天：提示词工程的演变',
      intro: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。',
      publishDate: '发布于2026年3月',
      readTime: '阅读约10分钟',
      sections: {
        definition: {
          title: '提示词工程如何演变：简要概述',
          content: [
            '**提示词工程从2020年前后围绕 GPT-3 的非正式试错式文本操作，发展为到2026年具有命名技术、框架和工具的结构化学科。** 这一历程跨越五个阶段：早期少样本实验、将这门技能带入主流视野的 ChatGPT 时刻、结构化推理技术的发展、自动化提示词优化的兴起，以及当前向上下文设计的转变。',
            '这门学科并非源自单一论文或公司。它生长于研究（少样本学习、思维链推理、RAG（检索增强生成））、在网上共享提示词集合的从业者社区，以及强大模型的突然公开可用（这使得高质量提示词立即带来回报）的交汇之处。到2026年，提示词工程不再是一项小众技巧——它已成为任何使用 AI 系统的人的基础技能。',
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '2019–2020年：GPT-2 和早期 Transformer——提示词只是输入，还不是一门学科',
            '2020年：GPT-3 和 Brown 等人的论文将少样本提示作为范式转变引入',
            '2022年：思维链（Chain-of-Thought）推理提示将提示技巧转变为结构化技能',
            '2022年底：ChatGPT 将提示词工程带入主流视野和招聘职位描述',
            '2023年：GPT-4、多模态提示和框架将最佳实践正式化',
            '2024–2026年：上下文设计、自动化提示和开源大型语言模型重新定义了这一领域',
          ],
        },

        pre2020: {
          title: '提示词工程有名字之前（2020年以前）',
          content: [
            '在"提示词工程"这个术语出现之前，研究人员就已经在操控模型输入以获得更好的输出——只是他们当时没有这么称呼它。早期的 Transformer 模型，如 GPT-2（2019年，OpenAI）和 BERT（2018年，Google），通过精心选择的输入文本来使用，但这种实践被视为数据预处理的一部分，而非一门独立的技能。',
            '2019年2月发布的 GPT-2 是一个拥有15亿参数的模型，能以出人意料的连贯方式补全文本。研究人员和早期从业者注意到，输入的措辞方式会显著改变补全质量——但围绕这一观察，当时尚无框架、无术语、无社区。提示词只是输入，还不是工程产物。',
          ],
        },

        gpt3: {
          title: '2020年：GPT-3 与少样本突破',
          content: [
            '**提示词工程的现代历史实际上始于 GPT-3。** 2020年5月，OpenAI 发布了 GPT-3（一个拥有1750亿参数的模型），并同时发表了 Brown 等人的里程碑论文《语言模型是少样本学习者》（Language Models are Few-Shot Learners）[External: Brown et al., 2020 – Language Models are Few-Shot Learners]。该论文证明，通过在提示词中直接包含几个所需任务的示例——无需对模型进行任何权重更新——下游任务的性能得到了显著提升。',
            '这是提示词工程作为一门学科的种子。研究人员和开发者意识到，仅仅通过改变提示词的写法，同一个模型就可以变成翻译器、摘要生成器、代码生成器或问答系统。模型不需要重新训练——它需要更好的提示词。这一洞见重塑了提示词的含义：它不再只是输入，而是一件设计产物。',
            '布朗等人报告称，few-shot性能随模型规模稳定提升：1750亿参数的GPT-3在所有测试基准上均大幅超越较小变体，确立了规模与基于提示词的学习直接相关的关系。这使提示词质量成为从业者——而不仅仅是研究人员——可以直接控制的变量。',
            '有关 GPT-3 使之名声大噪的这项技术的实用指南，请参阅 [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]。',
          ],
        },

        skill: {
          title: '2021年至2022年初：从提示技巧到公认技能',
          content: [
            '在2021年至2022年初之间，提示词设计从研究论文走向了从业者社区。GitHub 上出现了整理好的提示词集合——"awesome-prompts"风格的列表，分享了哪些内容在编程辅助、摘要生成和创意写作方面有效。在 Twitter 和 Reddit 上共享的提示词集合成为社区资产。提示词工程指南（promptingguide.ai）[External: Prompt Engineering Guide – promptingguide.ai] 成为首批系统性整理技术的专属参考资源之一。',
            '"提示词工程"这个术语在这一时期开始更频繁地出现在研究论文、博客文章和职位描述中。OpenAI 的 InstructGPT 论文（Ouyang 等人，2022年）介绍了经过 RLHF 微调的模型，这些模型对自然语言指令的响应更加可靠——使得提示词质量变得更加重要。到2022年中期，这显然已是一门可迁移的技能，而不仅仅是研究人员的好奇心。',
          ],
        },

        cot: {
          title: '2022年：思维链与推理提示',
          content: [
            '**2022年思维链（CoT）提示的引入是这门学科短暂历史中最重要的技术发展。** Wei 等人（Google Brain）发表了《思维链提示在大型语言模型中激发推理》（Chain-of-Thought Prompting Elicits Reasoning in Large Language Models），证明要求模型在回答前逐步推理，能显著提升其在算术、常识推理和符号推理任务上的表现。在一项关键结果中，思维链提示将PaLM在GSM8K小学数学基准测试上的准确率从17.9%提升至58%——这一提升完全通过改变提示词结构实现，无需任何额外的模型训练。 这一含义深远：提示词的结构可以激活不同的推理行为——而不仅仅是不同的事实。',
            '相关技术随之迅速跟进。Zhou 等人引入了由简到繁的提示（least-to-most prompting），将复杂问题分解为按顺序解决的一系列更简单的子问题。这些方法将提示词工程从格式化练习转变为从未经过明确推理训练的模型中激发结构化推理的工具。提示词已成为认知的脚手架。',
            '有关完整技术指南，请参阅 [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] 和 [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]。',
          ],
        },

        chatgpt: {
          title: '2022年底至2023年：ChatGPT 时刻与"提示词工程师"职位的出现',
          content: [
            '**2022年11月30日 ChatGPT 的发布一夜之间改变了提示词工程的公众形象。** ChatGPT在上线后五天内达到100万用户——由OpenAI CEO山姆·奥特曼于2022年12月在Twitter上确认——并根据路透社引用的瑞银分析，于2023年1月达到1亿月活跃用户。 在短短几天内，数百万人开始尝试提示词，并发现他们的结果因措辞方式的不同而大相径庭。科技媒体将"提示词工程"作为一门值得学习的技能进行报道。牛津英语词典在2023年将"prompt"添加为与 AI 相关的动词，这个词本身在多个年度词汇评选中成为年度词汇的有力候选。',
            '到2023年初，"提示词工程师"作为一个职位名称出现，据广泛引用的招聘信息显示，包括 Anthropic 在内的公司开出了175,000至335,000美元的薪资。这个角色引起了广泛媒体关注——彭博社、卫报和大西洋月刊都报道了提示词工程是否真的是一种职业。当时的共识是：这是一个过渡性角色，部分是人机界面设计，部分是主题专业知识，部分是质量保证。',
            '"提示词工程"这一短语的普及有时被归因于不同的从业者和评论者。前 Salesforce 首席科学家 Richard Socher 在一些评论中被提及为早期帮助构建这一概念的人之一。维基百科上的提示词工程词条 [External: Prompt Engineering – Wikipedia] 对关于这一术语起源的各方说法提供了客观概述。',
          ],
        },

        gpt4: {
          title: '2023年：GPT-4、多模态提示与框架',
          content: [
            '2023年3月 GPT-4 的发布同时在两个方向扩展了提示词工程：更大的上下文窗口（后续版本最高支持128K词元）和多模态输入。从业者现在可以在提示词中包含图像和文本，将提示词工程延伸至视觉任务——描述图像、比较图表、标注图表。Google 的早期 Gemini 模型和 Anthropic 的多模态 Claude 版本在几个月内相继推出。',
            '同年，提示词工程最佳实践得到正式化。OpenAI 发布了其官方提示词工程指南 [External: OpenAI – Best Practices for Prompt Engineering]。Google Cloud 发布了自己的提示词工程文档 [External: Google Cloud – Prompt Engineering for AI Guide]。独立作者将框架编纂成册——CRAFT、CO-STAR、SPECS、RISEN、TRACE——为从业者提供了可重复使用的提示词结构模板，减少了对试错的依赖。',
            '这些框架标志着提示词工程从个人技能成熟为可教授、可共享实践。请参阅 [Frameworks: Which Prompt Framework Should You Use?] 了解如何在它们之间做出选择的指南，以及 [Fundamentals: Beyond Text: How to Prompt with Images] 了解多模态维度。',
          ],
        },

        automated: {
          title: '2023至2024年：自动化提示词工程与 RAG',
          content: [
            '2023年一个引人注目的发展是研究表明大型语言模型优化提示词的能力与人类相当。Zhou 等人发表了《大型语言模型是人类级别的提示词工程师》（APE），证明一个被要求生成和评估提示词候选方案的大型语言模型，在基准任务上可以媲美甚至超越人类编写的提示词。斯坦福的 DSPy 框架（2023年）更进一步——允许开发者描述提示词应实现的目标，并让系统自动优化措辞。',
            '与此同时，检索增强生成（RAG（检索增强生成））——最初由 Meta 的 Lewis 等人于2020年引入——成为生产 AI 系统中的核心模式。RAG 将检索到的文档直接注入提示词上下文，使模型输出以真实、最新的来源为依据，而无需提示词包含所有必要事实。这将提示词工程的重心从"如何让模型知道这个？"转移到"如何结构化上下文以使模型正确使用这个？"',
            '请参阅 [Techniques: RAG Explained: How to Ground AI Answers in Real Data] 和 [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work] 了解这一时期关键技术的详细介绍。',
          ],
        },

        context: {
          title: '2024至2025年：从提示词工程到上下文设计',
          content: [
            '到2024年，一种新的框架开始取代"写一个更好的提示词"这个简单概念。从业者和研究人员开始提及上下文工程——一种编排完整上下文窗口内容的实践：系统提示词、检索到的文档、工具输出、对话历史和用户输入，所有这些都经过精心组合以引导模型行为。提示词不再是独立的产物；它是一个设计上下文中的一层。',
            '多项发展加速了这一转变。Meta 的 Llama 3 系列模型（2024年）使强大的开源大型语言模型可用于私有部署，将部分提示词工程从云端 API 转移到本地基础设施。上下文窗口增长到100万词元或更多（Gemini 1.5 Pro），使得将整个代码库、书籍或文档集合注入单个提示词成为可行。LangChain 和 AutoGen 等多智能体框架将提示变成了编排——一个提示词触发另一个模型，该模型触发一个工具，工具将上下文返回给下一个提示词。',
            '请参阅 [External: Prompt Engineering from 2020 to 2025 – AI Supremacy] 和 [External: The Evolution of Prompt Engineering to Context Design – 2026] 了解关于这一转变的外部视角。',
          ],
        },

        beyond2026: {
          title: '2026年及以后：提示词工程作为核心素养',
          content: [
            '截至2026年，研究和评论越来越多地将提示词工程描述为不是一个小众职位名称，而是使用 AI 工具的知识工作者的基础素养技能。《提示词工程作为21世纪新技能》[External: Prompt engineering as a new 21st century skill – Frontiers] 等学术论文将结构化提示与阅读、写作和计算并列，视为使用生成式 AI 系统的基础能力。',
            '这个角色已分化为两个截然不同的轨道。第一个是系统和上下文设计——在生产 AI 系统中，提示词是涉及检索、智能体和评估流水线的更大架构的一部分。第二个是日常使用——能够编写清晰、结构化的提示词，在不了解底层架构的情况下产出有用的输出。两个轨道都受益于相同的核心原则：清晰的任务规范、适当的上下文、约束条件和输出格式。',
            '尽管模型能力更强、自动化工具更多，但没有改变的是根本原则：输入越清晰、越结构化，输出就越可靠、越有用。技术、术语和工具已经成熟，但来自 GPT-3 时代的核心洞见在2026年依然成立。',
          ],
        },

        timeline: {
          title: '时间轴：提示词工程的关键里程碑',
          content: '下表总结了从2018年至2026年的关键里程碑——那些塑造了提示词工程如何演变为其当前形态的事件、论文和模型发布。',
          columns: ['年份', '里程碑', '重要意义'],
          rows: [
            { '年份': '2018–2019年', '里程碑': 'BERT（Google）和 GPT-2（OpenAI）发布', '重要意义': '证明了 Transformer 模型可以被输入措辞所引导——但尚无正式学科' },
            { '年份': '2020年', '里程碑': 'GPT-3 及 Brown 等人的《语言模型是少样本学习者》', '重要意义': '确立了少样本提示作为一种范式：重写提示词无需重新训练即可改变模型行为' },
            { '年份': '2022年（1月）', '里程碑': 'InstructGPT / RLHF（Ouyang 等人，OpenAI）', '重要意义': '经过指令遵循训练的模型——使提示词质量的重要性大幅提升' },
            { '年份': '2022年（5月）', '里程碑': '思维链（Chain-of-Thought）提示（Wei 等人，Google Brain）', '重要意义': '证明了提示结构可以激发逐步推理——将提示变成认知脚手架' },
            { '年份': '2022年（11月）', '里程碑': 'ChatGPT 发布', '重要意义': '将提示词工程带入主流视野；数百万人一夜间开始尝试' },
            { '年份': '2023年（Q1）', '里程碑': '"提示词工程师"职位薪资达30万美元以上；牛津英语词典将 prompt 添加为动词', '重要意义': '将提示词工程定义为公认职业和命名技能' },
            { '年份': '2023年（3月）', '里程碑': 'GPT-4 发布；支持图像的多模态提示', '重要意义': '将提示词工程延伸至文本以外的视觉输入和大型上下文窗口' },
            { '年份': '2023年', '里程碑': '框架正式化：CRAFT、CO-STAR、SPECS、RISEN；OpenAI 和 Google 发布官方指南', '重要意义': '将提示词工程从个人技巧转变为可教授、可共享的实践' },
            { '年份': '2023–2024年', '里程碑': 'APE 论文（Zhou 等人）和 DSPy 框架——AI 优化的提示词', '重要意义': '大型语言模型被证明可以像人类一样编写提示词；自动化提示词优化变得实际可行' },
            { '年份': '2024年', '里程碑': 'Llama 3 系列模型；上下文窗口超过100万词元（Gemini 1.5 Pro）', '重要意义': '开源大型语言模型支持私有部署；超大上下文窗口将重心转移至上下文工程' },
            { '年份': '2025–2026年', '里程碑': '上下文设计和多智能体编排取代简单的提示词调整', '重要意义': '提示词成为组合上下文中的一层——需要系统级思维' },
          ],
        },

        todayPractice: {
          title: '历史如何塑造今日最佳实践',
          content: [
            '提示词工程每个演变阶段都在当前实践中留下了持久的印记。GPT-3 时代给我们带来了核心洞见：模型行为由输入结构塑造——而不仅仅是内容。思维链（Chain-of-Thought）时代给我们带来了明确的推理脚手架：逐步提示、提示链和思维树方法。框架时代给我们带来了可复用的模板，这些模板将最佳实践编码起来，无需每位从业者从零开始摸索发现。',
            'RAG 和上下文设计时代让我们认识到，提示词并不孤立存在——它们与检索到的数据、系统指令和工具输出组合在一起，形成完整的上下文。而自动化提示时代提醒我们，良好提示的原则是可量化的：结构更好的提示词能产出更好的输出，这些改进可以被系统地评估和优化。',
          ],
          items: [
            '来自2022年的推理技术 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] 和 [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '来自2023年的框架发展 → [Frameworks: Which Prompt Framework Should You Use?]',
            '上下文窗口的增长 → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '跨模型世代的词元经济学 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG 作为纯提示词方案的补充 → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          title: 'FAQ：提示词工程的演变',
          faqs: [
            {
              q: '谁最先创造了"提示词工程"这个术语？',
              a: '确切起源存在争议。该术语最早于2021年出现在研究语境中，并在2022年得到更广泛的使用。Richard Socher 在一些评论中被提及为早期帮助公开构建这一概念的人，尽管没有任何单一人物被认定为其发明者。维基百科上的提示词工程词条 [External: Prompt Engineering – Wikipedia] 对各方说法提供了客观概述。',
            },
            {
              q: '为什么提示词工程在 ChatGPT 之后迅速爆红？',
              a: 'ChatGPT 是第一个数百万非研究人员可以立即免费使用、无需编写代码的通用 AI 模型。精心设计的提示词与模糊提示词之间的差距是可见的，且立即产生影响——更好的提示词产出可直接使用的更好输出。这个反馈循环被数百万人同时体验，将提示词工程从研究概念转变为大众技能。',
            },
            {
              q: '研究论文如何影响了现实世界的提示技术？',
              a: '对于 AI 研究而言，这种传播速度异常快速。思维链（Chain-of-Thought）提示（Wei 等人，2022年）在几个月内就从学术论文变成了广泛使用的从业者技术，部分原因是它不需要任何工具——只需改变你写提示词的方式。GPT-3 论文（Brown 等人，2020年）中的少样本提示，任何有 API 访问权限的人都可以立即采用。这些技术的易用性加速了它们的传播。',
            },
            {
              q: '随着模型的改进，提示词工程会变得不那么重要吗？',
              a: '不会——能力更强的模型对结构良好的提示词响应更好，而不是更差。随着模型更善于遵循精确指令，好的提示词所带来的收益也会增加。改变的是简单任务所需的提示词工程程度：与2021年相比，对话性问题现在需要的精心设计更少。但对于复杂的生产级输出，结构化提示仍然是最可靠的手段。',
            },
            {
              q: '提示词工程与上下文工程有什么区别？',
              a: '提示词工程通常指设计模型的文本输入以改善其输出。上下文工程是一个更广泛、更新近的概念，指编排模型上下文窗口中的所有内容：系统提示词、检索到的文档、对话历史、工具输出和用户输入——所有这些都经过精心组合。上下文工程将提示词视为设计系统中的一个组件，而非独立的产物。',
            },
            {
              q: '自动化工具会取代理解提示词工程的必要性吗？',
              a: '像 DSPy 这样的自动化工具可以在定义的目标内优化提示词措辞，但它们需要人类来指定目标是什么、适用哪些约束以及如何评估成功。理解提示词工程原则仍然是有效使用这些工具的必要条件——也是在它们产出错误结果时进行诊断的必要条件。自动化消除了一些手动迭代；它不能消除结构化思考的需要。',
            },
            {
              q: '提示词工程在2026年已经过时了吗？',
              a: '不。这一领域已经演变，但并未消失。随着模型能力的增强，工作重心从语法技巧转向上下文设计——结构化输入、管理检索和组合工具输出。"提示词工程师"这一职称在缩小，但这一技能已融入每个使用AI的角色：开发者、分析师、营销人员、研究者。麦肯锡2024年AI现状报告发现，有效的AI采用仍与用户为模型构建任务的方式密切相关。',
            },
            {
              q: '随着AI模型不断改进，我还需要学习提示词工程吗？',
              a: '需要——但每一代的重点会有所转变。更好的模型减少了对复杂变通方法的需求，提高了清晰意图、结构化上下文和精选示例的价值。角色、上下文、格式、约束这些基础知识在每代模型中保持稳定。',
            },
            {
              q: '提示词工程和微调有什么区别？',
              a: '提示词工程在不修改模型权重的情况下改变与模型的交互方式。微调在新数据上重新训练模型，永久改变其行为。提示词工程更快、更便宜、可逆——可以在几分钟内迭代。微调更适合目标行为一致、高频或无法在提示词中可靠描述的情况。大多数团队从提示词工程开始，只有当提示词工程达到上限时才转向微调。',
            },
          ],
        },
      },
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
      sections: {
        definition: {
          title: 'Was sind die 5 Bausteine eines Prompts?',
          content: [
            '**Die 5 Bausteine, die jeder Prompt benötigt, sind: Rolle & Kontext, Aufgabe / Anweisung, Eingabe & Beispiele, Einschränkungen und Ausgabeformat.** Diese fünf Komponenten sind die Mindeststruktur, die einen zuverlässigen, wiederholbaren Prompt von einer vagen Frage unterscheidet, die inkonsistente Ergebnisse liefert.',
            'Jeder Baustein löst einen anderen Fehlertyp. Rolle & Kontext sagt dem Modell, wer es ist und in welcher Situation es sich befindet. Aufgabe / Anweisung sagt ihm genau, was zu tun ist. Eingabe & Beispiele geben ihm das Rohmaterial und das Lernmuster. Einschränkungen setzen die Regeln. Ausgabeformat legt die Form der Antwort fest. Zusammen lassen sie dem Modell nichts mehr zum Raten übrig.',
          ],
        },

        tldr: {
          title: 'Die wichtigsten Erkenntnisse',
          isTldr: true,
          items: [
            'Rolle & Kontext: Dem Modell sagen, wer es ist und in welchem Bereich es tätig ist',
            'Aufgabe / Anweisung: Genau angeben, was das Modell produzieren soll – spezifisch und überprüfbar',
            'Eingabe & Beispiele: Die Rohdaten und Beispiel-Eingabe/Ausgabe-Paare bereitstellen, die das Modell benötigt',
            'Einschränkungen: Die Regeln festlegen – was das Modell tun muss und was nicht',
            'Ausgabeformat: Die genaue Form der Antwort festlegen – JSON, Aufzählungspunkte, Tabelle oder Fließtext',
          ],
        },

        whyMatters: {
          title: 'Warum diese 5 Bausteine im Jahr 2026 wichtig sind',
          content: [
            'Das Fünf-Bausteine-Modell spiegelt den konvergierten Konsens aus Prompt-Engineering-Anleitungen von OpenAI, Google, Anthropic und unabhängigen Praktikern wider. Rolle, Anweisungen, Beispiele, Einschränkungen und Ausgabeformat erscheinen – unter verschiedenen Namen – in jedem wichtigen Framework, das seit 2023 veröffentlicht wurde. Das ist kein Zufall: Es sind die Mindestinformationen, die ein probabilistisches Modell benötigt, um ein nützliches, konsistentes Ergebnis zu liefern.',
            'Der geschäftliche Nutzen ist eindeutig. Fehlende Rolle und Kontext liefern generische Antworten, die umgeschrieben werden müssen. Fehlende Einschränkungen erhöhen das Halluzinationsrisiko und erzeugen markenfremde Ausgaben. Fehlendes Ausgabeformat bedeutet Ergebnisse, die nicht direkt verwendet oder kopiert werden können. Das 5-Bausteine-Modell adressiert alle drei Fehlertypen gleichzeitig und gilt gleichermaßen für GPT-4-Klasse-Modelle, Claude, Gemini und lokal betriebene LLMs.',
          ],
        },

        block1: {
          title: 'Baustein 1: Rolle & Kontext',
          content: [
            '**Rolle** sagt dem Modell, welche Persona oder Expertise es annehmen soll. **Kontext** teilt ihm die Situation, den Bereich und die Zielgruppe mit, in der es tätig ist. Sie werden zusammengefasst, weil sie als Paar funktionieren – Rolle ist, wer das Modell ist, und Kontext ist die Umgebung, die definiert, was „gut" für diese Aufgabe bedeutet.',
            'Wenn Rolle und Kontext weggelassen werden, antwortet das Modell aus einer generischen Perspektive – für niemanden im Besonderen nützlich. Mit ihnen wird dasselbe Modell zum erfahrenen Steuerberater, der eine Frage zu Umsatzsteuererklärungen beantwortet, zum Nachwuchs-Texter, der für eine 19-jährige Zielgruppe schreibt, oder zum Datenanalysten, der einen Quartalsbericht zusammenfasst. Die Ausgabe kalibriert sich auf die tatsächliche Situation.',
          ],
          items: [
            '**Den Bereich angeben:** „Du bist ein B2B-SaaS-Texter" ist nützlicher als „Du bist ein Autor"',
            '**Die Zielgruppe einbeziehen:** „Erkläre dies einem nicht-technischen CFO" schränkt Vokabular und Detailtiefe ein',
            '**Das Expertise-Level verankern:** „Agiere als erfahrener Sicherheitsingenieur" liefert eine andere Ausgabe als „Agiere als Sicherheitsingenieur"',
            '**Die Situation angeben, wenn sie relevant ist:** „Du überprüfst einen ersten Entwurf" versus „Du schreibst von Grund auf neu" ändert den Ansatz des Modells',
          ],
        },

        block1Link: {
          content: 'Um zu verstehen, wie sich Rollen-Prompting entwickelt hat, als Modelle immer besser darin wurden, Anweisungen zu befolgen, siehe [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
        },

        block2: {
          title: 'Baustein 2: Aufgabe / Anweisung',
          content: [
            '**Der Baustein Aufgabe / Anweisung ist die explizite Aussage darüber, was das Modell tun soll.** Es ist der wichtigste Baustein – alle anderen Bausteine unterstützen diesen. Eine klare, spezifische, überprüfbare Anweisung reduziert Mehrdeutigkeit auf nahezu null. Eine vage Anweisung ist die häufigste Ursache für schlechte KI-Ausgaben über alle Modelle und Anwendungsfälle hinweg.',
            'Aktuelle Best-Practice-Empfehlungen betonen, die Aufgabe handlungsorientiert und beobachtbar zu gestalten: ein Verb verwenden, das Ergebnis benennen und wenn möglich ein Erfolgskriterium beschreiben. „Schreibe eine Zusammenfassung" ist eine Aufgabe. „Fasse den folgenden Artikel in 3 Aufzählungspunkten zusammen, jeweils unter 20 Wörtern" ist eine Aufgabe mit einer überprüfbaren Ausgabe. Der Unterschied in der Ausgabequalität ist erheblich.',
          ],
          items: [
            '❌ Schwach: „Schreibe etwas zu diesem Thema"',
            '✅ Stark: „Schreibe einen 150-Wörter-LinkedIn-Post über die Vorteile von Prompt Engineering für nicht-technische Manager"',
            '❌ Schwach: „Analysiere diese Daten"',
            '✅ Stark: „Identifiziere die 3 wichtigsten Trends in diesem Datensatz und ordne sie nach Umsatzeinfluss, höchster zuerst"',
          ],
        },

        block2Link: {
          content: 'Anweisungen interagieren direkt damit, ob Beispiele bereitgestellt werden – siehe [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] dafür, wann welcher Ansatz am besten funktioniert.',
        },

        block3: {
          title: 'Baustein 3: Eingabe & Beispiele',
          content: [
            '**Eingabe** sind die tatsächlichen Daten, Texte oder Materialien, mit denen das Modell arbeiten soll. **Beispiele** sind Muster-Eingabe/Ausgabe-Paare, die zeigen, wie eine korrekte Antwort aussieht. Das sind separate Aspekte: Eingabe ist das Rohmaterial für die aktuelle Aufgabe, Beispiele sind das Lernmuster, das die Ausführung durch das Modell prägt.',
            '1–3 Beispiele einzuschließen (Few-Shot-Prompting) ist die zuverlässigste Einzeltechnik, um Ausgabeformat und Ton festzulegen. Wenn man dem Modell zeigt, wie eine gute Antwort aussieht, passt es das Muster an, anstatt es nur aus der Aufgabenbeschreibung abzuleiten. Dies ist am wichtigsten für spezialisierte Formate, konsistenten Ton und strukturierte Ausgaben, bei denen Präzision erforderlich ist.',
          ],
          items: [
            '**Wann Beispiele hinzufügen:** Spezialisierte Formate, konsistente Tonanforderungen, strukturierte Ausgaben, domänenspezifisches Vokabular',
            '**Wann bei Zero-Shot bleiben:** Einfache sachliche Fragen, breite Erkundung, wenn man aktiv den Standard-Antwortstil des Modells möchte',
            '**Beispiele variieren:** Identische Beispiele lehren nur ein Muster – den echten Bereich der erwarteten Eingaben abdecken',
            '**Realistische Daten verwenden:** Echte Muster übertreffen idealisierte – das Modell lernt aus dem, was man ihm tatsächlich zeigt',
          ],
        },

        block3Link: {
          content: 'Für eine vollständige Aufschlüsselung, wann Beispiele verwendet werden und wann sie weggelassen werden, siehe [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?].',
        },

        block4: {
          title: 'Baustein 4: Einschränkungen',
          content: [
            '**Einschränkungen sind die Regeln, die das Modell befolgen muss: was es tun muss und was nicht.** Sie umfassen Längenbeschränkungen, verbotene Themen oder Formulierungen, erforderliche Quellen, Marken-Ton-Regeln, Sicherheitsgrenzen und Formatrestriktionen. Einschränkungen sind der am häufigsten weggelassene Baustein – und ihr Fehlen ist die Hauptursache für halluzinierte Fakten, markenfremde Sprache und Ausgaben im falschen Format.',
            'Das Hinzufügen einer gut abgegrenzten Einschränkung ist oft die wirkungsvollste Änderung an einem bestehenden Prompt. „Erfinde keine Statistiken" senkt das Halluzinationsrisiko erheblich. „Überschreite nie 100 Wörter" erzwingt Knappheit. „Verwende nur Informationen aus dem bereitgestellten Text" verankert die Ausgabe im Quellmaterial und eliminiert Fabrikation für diese Aufgabe vollständig.',
          ],
          items: [
            '**Längenbeschränkungen:** „Maximal 150 Wörter", „Nicht mehr als 5 Aufzählungspunkte"',
            '**Quelleinschränkungen:** „Verwende nur Fakten aus dem beigefügten Dokument", „Zitiere keine Quellen, die du nicht verifizieren kannst"',
            '**Ton- und Stimmeinschränkungen:** „Schreibe in einem formalen, drittpersonalen Ton – keine Kontraktionen, keine Umgangssprache"',
            '**Verbotene Inhalte:** „Erwähne keine Konkurrenzprodukte", „Spekuliere nicht über das hinaus, was die Daten zeigen"',
            '**Sicherheitseinschränkungen:** „Wenn die Frage nicht aus dem bereitgestellten Kontext beantwortet werden kann, sage es so – erfinde keine Antwort"',
          ],
        },

        block4Links: {
          content: 'Für die Technik, Ausschlüsse zur Gestaltung von Ausgaben zu verwenden, siehe [Techniques: Negative Prompting: Tell the AI What NOT to Do]. Warum unkontrollierte Prompts mehr halluzinieren, erklärt [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them].',
        },

        block5: {
          title: 'Baustein 5: Ausgabeformat',
          content: [
            '**Ausgabeformat legt die genaue Form der Antwort fest, die das Modell produzieren soll.** Dies ist der Baustein, der bestimmt, ob die Ausgabe direkt verwendbar ist oder vor der Nutzung umformatiert werden muss. Bei automatisierten Pipelines bedeutet ein nicht festgelegtes Ausgabeformat fragiles, inkonsistentes Parsen. Für GEO ist eine strukturierte Ausgabe eher dazu geeignet, von KI-Suchmaschinen wörtlich zitiert zu werden, da strukturierte Antworten programmatisch leichter zu extrahieren sind.',
            'Der Ausgabeformat-Baustein kann das Dateiformat (JSON, Markdown, CSV), die Struktur (Tabelle, Aufzählungsliste, nummerierte Schritte), die Länge und die Beschriftung von Abschnitten festlegen. Je präziser man es angibt, desto weniger Bearbeitung erfordert die Ausgabe.',
          ],
          items: [
            '**JSON:** „Gib das Ergebnis als JSON-Objekt mit den Schlüsseln: title, summary, tags zurück"',
            '**Markdown-Aufzählungspunkte:** „Liste jeden Fund als Aufzählungspunkt auf, der mit einem fetten Begriff beginnt, gefolgt von einem Erklärungssatz"',
            '**Tabelle:** „Formatiere den Vergleich als Markdown-Tabelle mit den Spalten: Feature, Option A, Option B"',
            '**Strukturierter Fließtext:** „Strukturiere die Antwort mit einer Überschrift für jeden Hauptpunkt und maximal 3 Sätzen pro Abschnitt"',
          ],
        },

        block5Link: {
          content: 'Für einen vollständigen Leitfaden zu JSON-Modus und strukturierter Ausgabe über verschiedene Modelle hinweg, siehe [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data].',
        },

        template: {
          title: 'Die 5 Bausteine zusammenfügen: Eine einfache Vorlage',
          content: 'Die folgende Vorlage zeigt alle 5 Bausteine in der Reihenfolge für eine einzige domänenneutrale Aufgabe zusammengestellt. Jeder Teil ist beschriftet, sodass genau erkennbar ist, wo jeder Baustein beginnt und endet. Den Inhalt in jedem Abschnitt ersetzen, um ihn an eine beliebige Domäne anzupassen.',
          items: [
            '**[Rolle & Kontext]** Du bist ein erfahrener Business-Analyst. Die Zielgruppe ist ein nicht-technisches Führungsteam, das einen vierteljährlichen Betriebsbericht überprüft.',
            '**[Aufgabe / Anweisung]** Fasse die wichtigsten Erkenntnisse aus dem folgenden Bericht zusammen. Konzentriere dich auf die Leistung im Vergleich zu den Zielen, identifiziere die zwei größten Risiken und empfehle für jedes eine Korrekturmaßnahme.',
            '**[Eingabe]** [Berichtstext hier einfügen]',
            '**[Einschränkungen]** Verwende nur Informationen aus dem Bericht. Spekuliere nicht. Überschreite insgesamt nicht 200 Wörter. Schreibe in einfacher Sprache – kein Fachjargon.',
            '**[Ausgabeformat]** Gib die Antwort in drei Abschnitten zurück: „Wichtigste Erkenntnisse" (3 Aufzählungspunkte), „Top-Risiken" (2 Aufzählungspunkte), „Empfohlene Maßnahmen" (2 Aufzählungspunkte, einer pro Risiko).',
          ],
        },

        templateNote: {
          content: 'Diese Vorlage funktioniert auf GPT-4o, Claude, Gemini und lokalen LLMs über Ollama oder LM Studio. Die Reihenfolge der Bausteine ist eine Empfehlung, keine starre Regel – aber Rolle & Kontext zuerst und Ausgabeformat zuletzt zu platzieren ist die häufigste und zuverlässigste Anordnung über alle wichtigen Modelle hinweg.',
        },

        frameworks: {
          title: 'Wie diese Bausteine auf Frameworks und Werkzeuge abbilden',
          content: [
            'Beliebte Prompt-Engineering-Frameworks sind meinungsstarke Wege, dieselben fünf Bausteine unter verschiedenen Namen und in unterschiedlichen Reihenfolgen anzuordnen. CRAFT, CO-STAR und SPECS bilden alle direkt auf dieses Fünf-Bausteine-Modell ab. Die Bausteine zuerst zu verstehen bedeutet, jedes Framework anzuwenden, ohne seine spezifische Terminologie von Grund auf auswendig lernen zu müssen.',
            'Die folgende Tabelle zeigt, wie jeder Baustein dem entsprechenden Feld in drei weit verbreiteten Frameworks zugeordnet wird:',
          ],
          columns: ['Baustein', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Baustein': 'Rolle & Kontext', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'Baustein': 'Aufgabe / Anweisung', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { 'Baustein': 'Eingabe & Beispiele', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { 'Baustein': 'Einschränkungen', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'Baustein': 'Ausgabeformat', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum enthält 9 eingebaute Frameworks, die diese Bausteine je nach Aufgabentyp in verschiedenen Konfigurationen vorausfüllen. Für framework-spezifische Leitfäden, siehe [Frameworks: Which Prompt Framework Should You Use?], [Frameworks: CRAFT Framework] und [Frameworks: CO-STAR Framework].',
        },

        mistakes: {
          title: 'Häufige Fehler mit den 5 Bausteinen',
          items: [
            '**Rolle vollständig weglassen:** Das Modell antwortet aus einer generischen Perspektive – Bereich und Expertise-Level angeben, auch wenn es nur ein Satz ist',
            '**Vager Kontext:** „Schreibe für mein Publikum" sagt dem Modell nichts – die Zielgruppe, ihr Wissensniveau und was sie mit der Ausgabe machen werden, benennen',
            '**Anweisung, die nicht überprüft werden kann:** „Mache es besser" hat kein beobachtbares Erfolgskriterium – durch eine spezifische, messbare Aufgabe ersetzen',
            '**Keine Einschränkungen gegen Halluzinationen:** Ohne „verwende nur bereitgestellte Informationen" füllt das Modell Lücken mit plausibel klingenden Erfindungen',
            '**Nicht festgelegtes Ausgabeformat:** Das Modell wählt seine eigene Struktur – die sich zwischen Durchläufen ändert und nachgelagerte Prozesse unterbricht',
            '**Alles in einen Absatz zusammenführen:** In einem Textblock vermischte Bausteine sind schwerer für das Modell zu verarbeiten – Zeilenumbrüche oder explizite Beschriftungen für jeden Baustein verwenden',
            '**Zu identische Beispiele:** Drei Beispiele, die alle gleich sind, lehren nur ein Muster – sie variieren, um den echten Bereich der Eingaben abzudecken',
          ],
        },

        faq: {
          title: 'FAQ: Die Bausteine eines Prompts',
          faqs: [
            {
              q: 'Brauche ich wirklich alle 5 Bausteine in jedem Prompt?',
              a: 'Nein. Einfache, eindeutige Aufgaben benötigen oft nur eine Aufgabe / Anweisung und ein Ausgabeformat. Rolle & Kontext hinzufügen, wenn Bereich oder Zielgruppe relevant sind. Einschränkungen hinzufügen, wenn Fehler kostspielig sind. Beispiele hinzufügen, wenn Formatpräzision kritisch ist. Minimal beginnen und Bausteine nur hinzufügen, wenn die Ausgabe den eigenen Standard nicht erfüllt.',
            },
            {
              q: 'Ist Rolle wichtiger als Kontext oder umgekehrt?',
              a: 'Sie funktionieren als Paar – keines reicht allein aus. Rolle ohne Kontext liefert generische Experten-Ausgaben. Kontext ohne Rolle liefert situationsbewusste, aber tonal inkonsistente Ausgaben. Für die meisten Aufgaben funktioniert ein Satz, der beides kombiniert, gut: „Du bist ein [Rolle], der mit [Zielgruppe] an [Domänenaufgabe] arbeitet."',
            },
            {
              q: 'Kann ich Prompts kurz halten und trotzdem alle 5 Bausteine einschließen?',
              a: 'Ja. Jeder Baustein kann in einem einzigen Satz ausgedrückt werden. Ein vollständiger Fünf-Bausteine-Prompt kann unter 100 Wörtern liegen. Kürze ist nicht das Problem – Vagheit ist es. Ein kurzer, präziser Prompt mit allen fünf Elementen übertrifft konsistent einen langen, weitschweifigen ohne keines davon.',
            },
            {
              q: 'Was ist der Unterschied zwischen Kontext und Beispielen?',
              a: 'Kontext beschreibt die Situation, den Bereich und die Zielgruppe – es sind Hintergrundinformationen, die die Aufgabe rahmen. Beispiele sind Muster-Eingabe/Ausgabe-Paare, die dem Modell zeigen, wie eine korrekte Antwort aussieht. Kontext sagt dem Modell, wo es ist; Beispiele zeigen ihm, was es produzieren soll. Beides ist nützlich, aber sie dienen völlig unterschiedlichen Zwecken.',
            },
            {
              q: 'Wo passen Einschränkungen hin, wenn ich ein Framework wie CRAFT oder CO-STAR verwende?',
              a: 'Jedes wichtige Framework hat ein Feld, das auf Einschränkungen abbildet – „Restrictions" in CRAFT, „Tone & Style" in CO-STAR, „Constraints" in SPECS. Wenn das eigene Framework kein explizites Einschränkungsfeld hat, die Einschränkungen am Ende als separaten „Nicht"-Abschnitt hinzufügen – alle Modelle handhaben dies zuverlässig.',
            },
            {
              q: 'Spielt das Ausgabeformat eine Rolle, wenn ich nur eine einfache Frage stelle?',
              a: 'Bei Gesprächsfragen ist das Festlegen des Formats optional. Für jede Ausgabe, die nachgelagert verwendet wird – in ein Dokument eingefügt, von Code verarbeitet, veröffentlicht oder von Teammitgliedern wiederverwendet – ist das Festlegen des Formats unerlässlich. Es ist der Unterschied zwischen einem Ergebnis und einem nutzbaren Ergebnis.',
            },
          ],
        },
      },
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Les 5 éléments fondamentaux de tout prompt',
      intro: 'Les 5 éléments fondamentaux de tout prompt : Rôle & Contexte, Tâche, Entrée & Exemples, Contraintes et Format de sortie.',
      publishDate: 'Publié mars 2026',
      readTime: '8 min de lecture',
      sections: {
        definition: {
          title: 'Quels sont les 5 éléments fondamentaux d\'un prompt ?',
          content: [
            '**Les 5 éléments fondamentaux de tout prompt sont : Rôle & Contexte, Tâche / Instruction, Entrée & Exemples, Contraintes et Format de sortie.** Ces cinq composants constituent la structure minimale qui distingue un prompt fiable et reproductible d\'une question vague produisant des résultats incohérents.',
            'Chaque bloc résout un mode d\'échec différent. Rôle & Contexte indique au modèle qui il est et dans quelle situation il se trouve. Tâche / Instruction lui dit exactement quoi faire. Entrée & Exemples lui fournissent la matière première et le signal d\'apprentissage. Les Contraintes fixent les règles. Le Format de sortie spécifie la forme de la réponse. Ensemble, ils ne laissent au modèle rien à deviner.',
          ],
        },

        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'Rôle & Contexte : Indiquer au modèle qui il est et dans quel domaine il opère',
            'Tâche / Instruction : Énoncer exactement ce que vous voulez que le modèle produise — de manière spécifique et vérifiable',
            'Entrée & Exemples : Fournir les données brutes et les paires entrée/sortie exemples dont le modèle a besoin',
            'Contraintes : Établir les règles — ce que le modèle doit et ne doit pas faire',
            'Format de sortie : Spécifier la forme exacte de la réponse — JSON, puces, tableau ou prose',
          ],
        },

        whyMatters: {
          title: 'Pourquoi ces 5 blocs sont importants en 2026',
          content: [
            'Le modèle en cinq blocs reflète le consensus convergent des guides de prompt engineering d\'OpenAI, Google, Anthropic et des praticiens indépendants. Rôle, instructions, exemples, contraintes et format de sortie apparaissent — sous différents noms — dans chaque framework majeur publié depuis 2023. Ce n\'est pas une coïncidence : c\'est l\'information minimale dont un modèle probabiliste a besoin pour produire un résultat utile et cohérent.',
            'L\'argument économique est simple. L\'absence de rôle et de contexte produit des réponses génériques qui nécessitent une réécriture. L\'absence de contraintes augmente le risque d\'hallucination et les sorties hors de la ligne directrice. L\'absence de format de sortie signifie des résultats qui ne peuvent pas être analysés ni copiés-collés directement. Le modèle en 5 blocs traite ces trois modes d\'échec à la fois, et s\'applique également aux modèles de la classe GPT-4, Claude, Gemini et aux LLM exécutés localement.',
          ],
        },

        block1: {
          title: 'Bloc 1 : Rôle & Contexte',
          content: [
            '**Le Rôle** indique au modèle quelle persona ou expertise adopter. **Le Contexte** lui indique la situation, le domaine et le public dans lequel il opère. Ils sont regroupés ensemble parce qu\'ils fonctionnent en binôme — le rôle est ce qu\'est le modèle, et le contexte est l\'environnement qui façonne ce que « bon » signifie pour cette tâche.',
            'Lorsque vous omettez le rôle et le contexte, le modèle répond d\'un point de vue générique — utile pour personne en particulier. Avec eux, le même modèle devient un conseiller fiscal senior répondant à une question sur les déclarations de TVA, un rédacteur junior écrivant pour un public de 19 ans, ou un analyste de données résumant un rapport trimestriel. La sortie se calibre sur votre situation réelle.',
          ],
          items: [
            '**Spécifiez le domaine :** « Tu es un rédacteur SaaS B2B » est plus utile que « Tu es un rédacteur »',
            '**Incluez le public :** « Explique cela à un directeur financier non technique » contraint le vocabulaire et le niveau de détail',
            '**Ancrez le niveau d\'expertise :** « Agis comme un ingénieur en sécurité senior » produit une sortie différente de « Agis comme un ingénieur en sécurité »',
            '**Énoncez la situation quand c\'est important :** « Tu révises un premier brouillon » versus « Tu écris de zéro » change l\'approche du modèle',
          ],
        },

        block1Link: {
          content: 'Pour comprendre comment le role prompting a évolué à mesure que les modèles sont devenus plus capables de suivre des instructions, voir [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
        },

        block2: {
          title: 'Bloc 2 : Tâche / Instruction',
          content: [
            '**Le bloc Tâche / Instruction est l\'énoncé explicite de ce que vous voulez que le modèle fasse.** C\'est le bloc le plus important — tous les autres blocs le soutiennent. Une instruction claire, spécifique et vérifiable réduit l\'ambiguïté à presque zéro. Une instruction vague est la principale cause de mauvaises sorties IA sur tous les modèles et cas d\'usage.',
            'Les meilleures pratiques actuelles insistent sur le fait de rendre la tâche actionnable et observable : utilisez un verbe, énoncez le livrable, et si possible décrivez un critère de succès. « Écrire un résumé » est une tâche. « Résumer l\'article suivant en 3 points, chacun en moins de 20 mots » est une tâche avec une sortie vérifiable. La différence de qualité de sortie est significative.',
          ],
          items: [
            '❌ Faible : « Écris quelque chose sur ce sujet »',
            '✅ Fort : « Écris un post LinkedIn de 150 mots sur les avantages du prompt engineering pour les managers non techniques »',
            '❌ Faible : « Analyse ces données »',
            '✅ Fort : « Identifie les 3 principales tendances dans ce jeu de données et classe-les par impact sur le chiffre d\'affaires, du plus élevé au plus bas »',
          ],
        },

        block2Link: {
          content: 'Les instructions interagissent directement avec le fait de fournir ou non des exemples — voir [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] pour savoir quand chaque approche fonctionne le mieux.',
        },

        block3: {
          title: 'Bloc 3 : Entrée & Exemples',
          content: [
            '**L\'Entrée** est la donnée réelle, le texte ou le matériel sur lequel le modèle doit travailler. **Les Exemples** sont des paires entrée/sortie qui illustrent à quoi ressemble une réponse correcte. Ce sont des préoccupations distinctes : l\'entrée est la matière première pour la tâche en cours, les exemples sont le signal d\'apprentissage qui façonne la façon dont le modèle l\'exécute.',
            'Inclure 1 à 3 exemples (few-shot prompting) est la technique la plus fiable pour fixer le format et le ton de la sortie. Quand vous montrez au modèle à quoi ressemble une bonne réponse, il correspond au schéma plutôt que de le déduire de la seule description de la tâche. C\'est le plus important pour les formats spécialisés, le ton cohérent et les sorties structurées où la précision est requise.',
          ],
          items: [
            '**Quand ajouter des exemples :** Formats spécialisés, exigences de ton cohérent, sorties structurées, vocabulaire spécifique au domaine',
            '**Quand rester en zero-shot :** Questions factuelles simples, exploration large, quand vous voulez activement le style de réponse par défaut du modèle',
            '**Variez vos exemples :** Des exemples identiques n\'enseignent qu\'un seul schéma — couvrez la vraie gamme des entrées que vous attendez',
            '**Utilisez des données réalistes :** Les vrais échantillons surpassent les idéalisés — le modèle apprend de ce que vous lui montrez réellement',
          ],
        },

        block3Link: {
          content: 'Pour une analyse complète de quand utiliser des exemples et quand les omettre, voir [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?].',
        },

        block4: {
          title: 'Bloc 4 : Contraintes',
          content: [
            '**Les Contraintes sont les règles que le modèle doit suivre : ce qu\'il doit faire et ce qu\'il ne doit pas faire.** Elles incluent les limites de longueur, les sujets ou phrases interdits, les sources requises, les règles de voix de marque, les limites de sécurité et les restrictions de format. Les contraintes sont le bloc le plus souvent omis — et leur absence est la principale cause de faits hallucinés, de langage hors de la ligne directrice et de sorties dans le mauvais format.',
            'Ajouter une contrainte bien ciblée est souvent le changement à plus fort levier que vous pouvez apporter à un prompt existant. « Ne pas inventer de statistiques » réduit fortement le risque d\'hallucination. « Ne jamais dépasser 100 mots » force la concision. « Utiliser uniquement les informations du texte fourni » ancre la sortie dans le matériel source et élimine entièrement la fabrication pour cette tâche.',
          ],
          items: [
            '**Contraintes de longueur :** « Maximum 150 mots », « Pas plus de 5 points »',
            '**Contraintes de source :** « Utiliser uniquement les faits du document joint », « Ne pas citer de sources que vous ne pouvez pas vérifier »',
            '**Contraintes de ton et de voix :** « Écrire dans un ton formel, à la troisième personne — pas de contractions, pas de familiarités »',
            '**Contenu interdit :** « Ne pas mentionner les produits concurrents », « Ne pas spéculer au-delà de ce que les données montrent »',
            '**Contraintes de sécurité :** « Si la question ne peut pas être répondue à partir du contexte fourni, dites-le — n\'inventez pas de réponse »',
          ],
        },

        block4Links: {
          content: 'Pour la technique d\'utilisation des exclusions pour façonner la sortie, voir [Techniques: Negative Prompting: Tell the AI What NOT to Do]. Pour comprendre pourquoi les prompts sans contraintes hallucinent davantage, voir [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them].',
        },

        block5: {
          title: 'Bloc 5 : Format de sortie',
          content: [
            '**Le Format de sortie spécifie la forme exacte de la réponse que le modèle doit produire.** C\'est le bloc qui détermine si la sortie est directement utilisable ou nécessite un reformatage avant d\'être utile. Pour les pipelines automatisés, un format de sortie non spécifié signifie une analyse fragile et incohérente. Pour le GEO, une sortie structurée est plus susceptible d\'être citée textuellement par les moteurs de recherche IA, car les réponses structurées sont plus faciles à extraire par programme.',
            'Le bloc de format de sortie peut spécifier le format de fichier (JSON, Markdown, CSV), la structure (tableau, liste à puces, étapes numérotées), la longueur et l\'étiquetage des sections. Plus vous le spécifiez avec précision, moins la sortie nécessite de modifications.',
          ],
          items: [
            '**JSON :** « Renvoyer le résultat sous forme d\'objet JSON avec les clés : titre, résumé, tags »',
            '**Puces Markdown :** « Lister chaque constat sous forme de puce commençant par un terme en gras, suivi d\'une phrase d\'explication »',
            '**Tableau :** « Formater la comparaison sous forme de tableau Markdown avec les colonnes : Fonctionnalité, Option A, Option B »',
            '**Prose structurée :** « Structurer la réponse avec un titre pour chaque point majeur et un maximum de 3 phrases par section »',
          ],
        },

        block5Link: {
          content: 'Pour un guide complet du mode JSON et des sorties structurées sur différents modèles, voir [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data].',
        },

        template: {
          title: 'Assembler les 5 blocs : un modèle simple',
          content: 'Le modèle ci-dessous montre les 5 blocs assemblés dans l\'ordre pour une tâche unique neutre par domaine. Chaque partie est étiquetée pour que vous puissiez voir exactement où commence et se termine chaque bloc. Remplacez le contenu de chaque section pour l\'adapter à n\'importe quel domaine.',
          items: [
            '**[Rôle & Contexte]** Tu es un analyste commercial senior. Le public est une équipe dirigeante non technique qui examine un rapport d\'opérations trimestriel.',
            '**[Tâche / Instruction]** Résume les principales conclusions du rapport ci-dessous. Concentre-toi sur la performance par rapport aux objectifs, identifie les deux risques les plus importants et recommande une action corrective pour chacun.',
            '**[Entrée]** [Coller le texte du rapport ici]',
            '**[Contraintes]** Utilise uniquement les informations du rapport. Ne spécule pas. Ne dépasse pas 200 mots au total. Écris dans un langage simple — sans jargon.',
            '**[Format de sortie]** Retourne la réponse en trois sections : « Conclusions clés » (3 points), « Principaux risques » (2 points), « Actions recommandées » (2 points, un par risque).',
          ],
        },

        templateNote: {
          content: 'Ce modèle fonctionne sur GPT-4o, Claude, Gemini et les LLM locaux via Ollama ou LM Studio. L\'ordre des blocs est une recommandation, pas une règle rigide — mais placer Rôle & Contexte en premier et Format de sortie en dernier est l\'arrangement le plus courant et le plus fiable sur tous les grands modèles.',
        },

        frameworks: {
          title: 'Comment ces blocs correspondent aux frameworks et outils',
          content: [
            'Les frameworks de prompt engineering populaires sont des façons d\'arranger ces mêmes cinq blocs sous des noms différents et dans des ordres différents. CRAFT, CO-STAR et SPECS correspondent tous directement à ce modèle en cinq blocs. Comprendre les blocs en premier signifie que vous pouvez appliquer n\'importe quel framework sans mémoriser sa terminologie spécifique de zéro.',
            'Le tableau ci-dessous montre comment chaque bloc fondamental correspond au champ correspondant dans trois frameworks largement utilisés :',
          ],
          columns: ['Bloc fondamental', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Bloc fondamental': 'Rôle & Contexte', 'CRAFT': 'Contexte / Rôle', 'CO-STAR': 'Contexte + Public', 'SPECS': 'Situation' },
            { 'Bloc fondamental': 'Tâche / Instruction', 'CRAFT': 'Action', 'CO-STAR': 'Objectif', 'SPECS': 'Problème / Tâche' },
            { 'Bloc fondamental': 'Entrée & Exemples', 'CRAFT': 'Faits / Exemples', 'CO-STAR': 'Exemples (optionnel)', 'SPECS': 'Exemples' },
            { 'Bloc fondamental': 'Contraintes', 'CRAFT': 'Restrictions', 'CO-STAR': 'Ton + Style', 'SPECS': 'Contraintes' },
            { 'Bloc fondamental': 'Format de sortie', 'CRAFT': 'Format', 'CO-STAR': 'Format de réponse', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum inclut 9 frameworks intégrés qui pré-remplissent ces blocs dans différentes configurations selon le type de tâche. Pour des guides spécifiques aux frameworks, voir [Frameworks: Which Prompt Framework Should You Use?], [Frameworks: CRAFT Framework] et [Frameworks: CO-STAR Framework].',
        },

        mistakes: {
          title: 'Erreurs courantes avec les 5 blocs',
          items: [
            '**Rôle entièrement absent :** Le modèle répond d\'un point de vue générique — spécifiez le domaine et le niveau d\'expertise, même en une phrase',
            '**Contexte vague :** « Écris pour mon public » ne dit rien au modèle — nommez le public, son niveau de connaissances et ce qu\'il fera avec la sortie',
            '**Instruction invérifiable :** « Améliore-le » n\'a pas de critère de succès observable — remplacez par une tâche spécifique et mesurable',
            '**Aucune contrainte sur les hallucinations :** Sans « utiliser uniquement les informations fournies », le modèle comble les lacunes avec des fabrications plausibles',
            '**Format de sortie non spécifié :** Le modèle choisit sa propre structure — qui change d\'une exécution à l\'autre et brise les processus en aval',
            '**Tout fusionné en un paragraphe :** Les blocs mélangés dans un mur de texte sont plus difficiles à analyser pour le modèle — utilisez des sauts de ligne ou des étiquettes explicites pour chaque bloc',
            '**Exemples sur-identiques :** Trois exemples identiques n\'enseignent qu\'un seul schéma — variez-les pour couvrir la vraie gamme des entrées',
          ],
        },

        faq: {
          title: 'FAQ : Les blocs fondamentaux d\'un prompt',
          faqs: [
            {
              q: 'Ai-je vraiment besoin des 5 blocs dans chaque prompt ?',
              a: 'Non. Les tâches simples et non ambiguës nécessitent souvent seulement une Tâche / Instruction et un Format de sortie. Ajoutez Rôle & Contexte quand le domaine ou le public est important. Ajoutez des Contraintes quand les modes d\'échec sont coûteux. Ajoutez des Exemples quand la précision du format est critique. Commencez minimal et ajoutez des blocs uniquement quand la sortie ne correspond pas à votre standard.',
            },
            {
              q: 'Le Rôle est-il plus important que le Contexte, ou l\'inverse ?',
              a: 'Ils fonctionnent en binôme — ni l\'un ni l\'autre n\'est suffisant seul. Le Rôle sans Contexte produit une sortie générique en mode expert. Le Contexte sans Rôle produit une sortie consciente de la situation mais tonalement incohérente. Pour la plupart des tâches, une phrase combinant les deux fonctionne bien : « Tu es un [rôle] qui travaille avec [public] sur [tâche dans le domaine]. »',
            },
            {
              q: 'Puis-je garder des prompts courts et inclure quand même les 5 blocs ?',
              a: 'Oui. Chaque bloc peut être exprimé en une seule phrase. Un prompt complet en cinq blocs peut tenir en moins de 100 mots. La brièveté n\'est pas le problème — le vague l\'est. Un prompt court et précis avec les cinq éléments surpasse systématiquement un long et décousu qui n\'en a aucun.',
            },
            {
              q: 'Quelle est la différence entre Contexte et Exemples ?',
              a: 'Le Contexte décrit la situation, le domaine et le public — c\'est une information de fond qui cadre la tâche. Les Exemples sont des paires entrée/sortie qui montrent au modèle à quoi ressemble une réponse correcte. Le Contexte indique au modèle où il est ; les Exemples lui montrent quoi produire. Les deux sont utiles, mais ils servent des objectifs complètement différents.',
            },
            {
              q: 'Où se situent les contraintes si j\'utilise un framework comme CRAFT ou CO-STAR ?',
              a: 'Chaque framework majeur a un champ qui correspond aux contraintes — « Restrictions » dans CRAFT, « Ton & Style » dans CO-STAR, « Contraintes » dans SPECS. Si votre framework n\'a pas de champ explicite pour les contraintes, ajoutez vos contraintes à la fin sous forme d\'une section « Ne pas faire » séparée — tous les modèles gèrent cela de manière fiable.',
            },
            {
              q: 'Le format de sortie est-il important si je pose simplement une question simple ?',
              a: 'Pour les questions conversationnelles, spécifier le format est optionnel. Pour toute sortie qui sera utilisée en aval — collée dans un document, analysée par du code, publiée ou réutilisée entre membres d\'équipe — spécifier le format est essentiel. C\'est la différence entre obtenir un résultat et obtenir un résultat utilisable.',
            },
          ],
        },
      },
    },
    ja: {
      theme: '基礎',
      title: 'すべてのプロンプトに必要な5つの構成要素',
      intro: 'プロンプトの5つの構成要素：役割とコンテキスト、タスク、入力と例、制約、出力形式。それぞれの使い方を解説します。',
      publishDate: '2026年3月公開',
      readTime: '8分で読める',
      sections: {
        definition: {
          title: '5つのブロックで推測作業を排除する',
          content: [
            '**プロンプトに必要な5つの構成要素は、役割とコンテキスト・タスク／指示・入力と例・制約・出力形式です。** この5つのコンポーネントは、信頼性が高く再現可能なプロンプトと、一貫性のない結果を生む漠然とした質問を分ける最小限の構造です。',
            '各ブロックは異なる障害モードを解決します。役割とコンテキストはモデルに自分が誰で、どんな状況にいるかを伝えます。タスク／指示は正確に何をすべきかを伝えます。入力と例は素材と教示シグナルを提供します。制約はルールを設定します。出力形式は回答の形を指定します。合わせることで、モデルが推測すべきことを残しません。',
            'これら5つのブロックは、大規模言語モデルがどのように命令を処理するかに基づいています。構造がなぜ重要なのかについての基礎的な説明については、[Fundamentals: What Is Prompt Engineering?]を参照してください。',
          ],
        },

        tldr: {
          title: 'まとめ',
          isTldr: true,
          items: [
            '役割とコンテキスト：モデルに自分が誰で、どのドメインで動いているかを伝える',
            'タスク／指示：モデルに生成させたいものを正確に述べる — 具体的でテスト可能であること',
            '入力と例：モデルが必要とする生データとサンプル入出力ペアを提供する',
            '制約：ルールを設定する — モデルが行うべきこととすべきでないこと',
            '出力形式：回答の正確な形を指定する — JSON、箇条書き、テーブル、または散文',
          ],
        },

        whyMatters: {
          title: '2026年にこの5つのブロックが重要な理由',
          content: [
            '5ブロックモデルは、Prompt Engineeringにおける収束した研究を反映しています。Schulhoff et al.、「The Prompt Report」（arXiv:2406.06608）では、本番のAIシステムで使用される58以上の個別のテクニックがカタログ化されました——これらすべてはこの5つのブロックの構造化された組み合わせで、異なる構成で適用されています。Brown et al.、2020年、「Language Models are Few-Shot Learners」（arXiv:2005.14165）は、最初に、例（ブロック3）がモデル出力を新しいタスクで劇的に改善できることを示しました——モデルの再トレーニングなしで。',
            'ビジネスケースは明確です。役割とコンテキストがなければ、書き直しが必要な一般的な回答が返ってきます。制約がなければ、ハルシネーションのリスクとブランドに合わない出力が増加します。出力形式がなければ、解析やコピーペーストが直接できない結果になります。5ブロックモデルは3つの障害モードすべてを一度に対処し、GPT-4クラスのモデル・Claude・Gemini・ローカルLLMに等しく適用されます。',
          ],
        },

        block1: {
          title: 'ブロック1：役割とコンテキスト',
          content: [
            '**役割**はモデルが採用するペルソナや専門知識を伝えます。**コンテキスト**はモデルが動いている状況・ドメイン・対象者を伝えます。この2つはペアとして機能するためグループ化されています — 役割はモデルが誰であるかであり、コンテキストはそのタスクで「良い」とは何かを形作る環境です。',
            '役割とコンテキストを省略すると、モデルは誰にも特別に役立たない一般的な視点から回答します。それらがあると、同じモデルが、VATの申告について質問に答えるシニア税務アドバイザー・19歳向けに書くジュニアコピーライター・四半期報告書を要約するデータアナリストになります。出力は実際の状況に合わせて調整されます。',
          ],
          items: [
            '**ドメインを指定する：** 「あなたはB2B SaaSのコピーライターです」は「あなたはライターです」より役立つ',
            '**対象者を含める：** 「非技術系のCFOにこれを説明してください」は語彙と詳細レベルを制約する',
            '**専門レベルを固定する：** 「シニアセキュリティエンジニアとして行動してください」は「セキュリティエンジニアとして行動してください」と異なる出力を生成する',
            '**重要な場合は状況を述べる：** 「初稿を見直しています」と「ゼロから書いています」ではモデルのアプローチが変わる',
          ],
        },

        block1Link: {
          content: 'モデルが指示に従う能力が向上するにつれて役割プロンプティングがどのように進化したかを理解するには、[Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved] を参照してください。',
        },

        block2: {
          title: 'ブロック2：タスク／指示',
          content: [
            '**タスク／指示ブロックは、モデルに何をしてほしいかを明示的に述べたものです。** これは最も重要なブロックです — 他のすべてのブロックがこれを支えます。明確で具体的かつテスト可能な指示は、曖昧さをほぼゼロに低減します。漠然とした指示は、すべてのモデルとユースケースにわたってAI出力が悪くなる最大の単一の原因です。',
            '現在のベストプラクティスガイダンスは、タスクを実行可能で観察可能にすることを強調しています：動詞を使い・成果物を述べ・可能であれば成功基準を説明してください。「要約を書く」はタスクです。「以下の記事を3つの箇条書きでまとめてください。各20語以内」はテスト可能な出力を持つタスクです。出力品質の違いは顕著です。',
          ],
          items: [
            '【悪い例】「このトピックについて何か書いてください」',
            '【良い例】「非技術系マネージャー向けのプロンプトエンジニアリングのメリットについて、150語のLinkedIn投稿を書いてください」',
            '【悪い例】「このデータを分析してください」',
            '【良い例】「このデータセットの上位3つのトレンドを特定し、収益への影響度の高い順に並べてください」',
          ],
        },

        block2Link: {
          content: '指示は例を提供するかどうかと直接関係します — どちらのアプローチが最も効果的かについては [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] を参照してください。',
        },

        block3: {
          title: 'ブロック3：入力と例',
          content: [
            '**入力**はモデルが処理する必要がある実際のデータ・テキスト・素材です。**例**は正しいレスポンスがどのように見えるかを示すサンプルの入出力ペアです。これらは別々の関心事です：入力は現在のタスクの生素材であり、例はモデルがタスクをどのように実行するかを形作る教示シグナルです。',
            '1〜3の例（フューショットプロンプティング）を含めることは、出力形式とトーンを固定するための最も信頼できる単一のテクニックです。良い回答がどのようなものかをモデルに示すと、モデルはタスクの説明から推測するのではなく、そのパターンに合わせます。これは特殊な形式・一貫したトーン・精度が求められる構造化された出力にとって最も重要です。',
          ],
          items: [
            '**例を追加するタイミング：** 特殊な形式・一貫したトーンの要件・構造化された出力・ドメイン固有の語彙',
            '**ゼロショットを維持するタイミング：** 単純な事実に基づく質問・幅広い探索・モデルのデフォルトレスポンススタイルを積極的に望む場合',
            '**例を変化させる：** 同じ例はひとつのパターンしか教えません — 実際に想定される入力の範囲をカバーしてください',
            '**現実的なデータを使用する：** 実際のサンプルは理想化されたものよりも優れています — モデルは実際に示したものから学習します',
          ],
        },

        block3Link: {
          content: '例を使用するタイミングと省略するタイミングの完全な解説については [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] を参照してください。',
        },

        block4: {
          title: 'ブロック4：制約',
          content: [
            '**制約はモデルが従うべきルールです：行うべきことと行うべきでないこと。** 文字数制限・禁止トピックやフレーズ・必要な情報源・ブランドボイスのルール・安全上の境界・形式の制約などが含まれます。制約は最もよく省略されるブロックであり、その欠如がハルシネーションした事実・ブランドに合わない言語・間違った形式での出力の主な原因です。',
            '適切にスコープされた制約を一つ追加することは、既存のプロンプトに対して最もレバレッジの高い変更であることが多いです。「統計を作り上げないでください」はハルシネーションのリスクを大幅に削減します。「100語を超えないでください」は簡潔さを強制します。「提供されたテキストの情報のみ使用してください」は出力をソース素材に根拠付け、そのタスクの捏造を完全に排除します。',
          ],
          items: [
            '**文字数制約：** 「最大150語」、「5つの箇条書き以内」',
            '**情報源制約：** 「添付のドキュメントの事実のみ使用してください」、「確認できない情報源は引用しないでください」',
            '**トーンとボイスの制約：** 「フォーマルな三人称のトーンで書いてください — 短縮形・口語表現なし」',
            '**禁止コンテンツ：** 「競合他社の製品を言及しないでください」、「データが示す以上の推測をしないでください」',
            '**安全上の制約：** 「提供されたコンテキストから質問に答えられない場合は、そう述べてください — 回答を作り上げないでください」',
          ],
        },

        block4Links: {
          content: '除外を使って出力を形作るテクニックについては [Techniques: Negative Prompting: Tell the AI What NOT to Do] を参照してください。制約のないプロンプトがなぜより多くハルシネーションを起こすかについては [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them] を参照してください。',
        },

        block5: {
          title: 'ブロック5：出力形式',
          content: [
            '**出力形式はモデルが生成すべき回答の正確な形を指定します。** これは出力が直接使えるものか、役立つ前に再フォーマットが必要かを決定するブロックです。自動化されたパイプラインにとって、指定されていない出力形式はもろく一貫性のない解析を意味します。GEOにとって、構造化された出力はAI検索エンジンによってそのまま引用される可能性が高く、構造化された回答はプログラム的に抽出しやすいためです。',
            '出力形式ブロックはファイル形式（JSON・Markdown・CSV）・構造（テーブル・箇条書き・番号付きステップ）・長さ・セクションのラベリングを指定できます。より正確に指定するほど、出力に必要な編集が減ります。',
          ],
          items: [
            '**JSON：** 「title・summary・tagsをキーとするJSONオブジェクトとして結果を返してください」',
            '**Markdown箇条書き：** 「各所見を、太字の用語で始まり、一文の説明が続く箇条書きとしてリストアップしてください」',
            '**テーブル：** 「比較をFeature・Option A・Option Bの列を持つMarkdownテーブルとしてフォーマットしてください」',
            '**構造化された散文：** 「各主要ポイントの見出しと、各セクション最大3文でレスポンスを構造化してください」',
          ],
        },

        block5Link: {
          content: '異なるモデルにわたるJSONモードと構造化出力の完全なガイドについては [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data] を参照してください。',
        },

        template: {
          title: '5つのブロックをまとめる：シンプルなテンプレート',
          content: '以下のテンプレートは、単一のドメイン中立なタスクのために5つのブロックが順番に組み立てられたものを示しています。各部分にはラベルが付いており、各ブロックがどこで始まりどこで終わるかが正確にわかります。各セクションの内容を置き換えて、任意のドメインに適応させてください。',
          items: [
            '**[役割とコンテキスト]** あなたはシニアビジネスアナリストです。対象者は四半期業務報告書を審査する非技術系の経営幹部チームです。',
            '**[タスク／指示]** 以下の報告書から主要な知見を要約してください。目標に対するパフォーマンスに焦点を当て、2つの最大リスクを特定し、各リスクに対して1つの是正措置を推奨してください。',
            '**[入力]** [ここに報告書テキストを貼り付けてください]',
            '**[制約]** 報告書の情報のみ使用してください。推測しないでください。全体で200語を超えないでください。平易な言葉で書いてください — 専門用語なし。',
            '**[出力形式]** レスポンスを3つのセクションとして返してください：「主要な知見」（3つの箇条書き）、「主なリスク」（2つの箇条書き）、「推奨される対策」（2つの箇条書き、各リスクに1つ）。',
          ],
        },

        templateNote: {
          content: 'このテンプレートはGPT-4o・Claude・Gemini・OllamaやLM Studio経由のローカルLLMで機能します。ブロックの順序は推奨であり、厳格なルールではありません — ただし、役割とコンテキストを最初に、出力形式を最後に配置することが、すべての主要モデルで最も一般的で信頼性の高い配置です。同じプロンプト構造はヨーロッパと中国のオープンソースモデルにも適用されます — Mistral AI、Alibaba Qwen、DeepSeekはすべてこの5ブロック構造に対応しますが、ローカルモデルはローカルモデルに異なる指示フォロー動作があるため、調整された出力形式仕様が必要な場合があります。',
        },

        pqTest: {
          title: 'PromptQuorum マルチモデルテスト：構造化 vs. 非構造化',
          content: [
            'PromptQuorumは同じタスク — 「この四半期報告書を要約してください」 — をGPT-4o、Claude 3.5 Sonnet、Gemini 1.5 Proに2つのバージョンで送信しました：1つは非構造化（タスクのみ、ブロックなし）、もう1つは上記の完全な5ブロックテンプレートです。3つのモデル全てで、構造化プロンプトは編集が不要な回答を生成しました。非構造化プロンプトはモデル間で矛盾した結果を生成しました — 異なる長さ、異なる構造、各ケースで異なる詳細レベル。',
            '実験は5ブロックモデルの主な値を示しています：単一のモデルをより賢くするのではなく、異なるモデル間で、および同じモデルの異なる実行全体で、予測可能で一貫性のある出力を提供することです。',
          ],
        },

        frameworks: {
          title: 'これらのブロックはフレームワークとツールにどのようにマッピングされるか',
          content: [
            '人気のあるプロンプトエンジニアリングフレームワークは、異なる名称と異なる順序で、同じ5つの構成要素を配置する独自のアプローチです。CRAFT・CO-STAR・SPECSはすべて、この5ブロックモデルに直接マッピングされます。最初にブロックを理解することで、特定の用語を最初から暗記しなくても、任意のフレームワークを適用できます。',
            '以下の表は、各構成要素が広く使われている3つのフレームワークの対応するフィールドにどのようにマッピングされるかを示しています：',
          ],
          columns: ['構成要素', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { '構成要素': '役割とコンテキスト', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { '構成要素': 'タスク／指示', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { '構成要素': '入力と例', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { '構成要素': '制約', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { '構成要素': '出力形式', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorumには、タスクタイプに応じて異なる設定でこれらのブロックを事前入力する9つの組み込みフレームワークが含まれています。フレームワーク固有のガイドについては [Frameworks: Which Prompt Framework Should You Use?]、[Frameworks: CRAFT Framework]、[Frameworks: CO-STAR Framework] を参照してください。',
        },

        mistakes: {
          title: '5つのブロックでよくある失敗',
          items: [
            '**役割を完全に省略する：** モデルは一般的な視点から回答します — 一文でもドメインと専門レベルを指定してください',
            '**漠然としたコンテキスト：** 「私の対象者のために書いてください」はモデルに何も伝えません — 対象者・その知識レベル・出力をどう使うかを明示してください',
            '**テストできない指示：** 「より良くしてください」には観察可能な成功基準がありません — 具体的で測定可能なタスクに置き換えてください',
            '**ハルシネーションへの制約なし：** 「提供された情報のみ使用してください」がないと、モデルはもっともらしい捏造でギャップを埋めます',
            '**指定されていない出力形式：** モデルが独自の構造を選びます — 実行間で変わり、下流プロセスを壊します',
            '**すべてを一段落に混ぜる：** テキストの壁に混在したブロックはモデルが解析しにくくなります — 各ブロックには改行または明示的なラベルを使用してください',
            '**過度に同じ例：** 同じ例を3つ使ってもひとつのパターンしか教えません — 実際に想定される入力の範囲をカバーするよう変化させてください',
          ],
        },

        relatedReading: {
          title: '関連資料',
          items: [
            '[基礎: プロンプトエンジニアリングとは？] — コア定義と、構造化された入力がより良い結果をもたらす理由',
            '[テクニック: ゼロショット対フューショット：どちらのアプローチが良い結果を得られるのか？] — いつ例を含めるべきか(ブロック3)、いつ省略すべきか',
            '[フレームワーク: CO-STARフレームワーク] — これら5つのブロックを複雑なタスク用の特定の順序で配置する名前付きテンプレート',
          ],
        },

        faq: {
          title: 'FAQ：プロンプトの構成要素',
          faqs: [
            {
              q: 'すべてのプロンプトに本当に5つのブロック全部が必要ですか？',
              a: 'いいえ。単純で明確なタスクでは、タスク／指示と出力形式だけで十分なことが多いです。ドメインや対象者が重要なときは役割とコンテキストを追加してください。障害モードのコストが高いときは制約を追加してください。形式の精度が重要なときは例を追加してください。最小限から始め、出力が基準を満たさないときのみブロックを追加してください。',
            },
            {
              q: '役割とコンテキスト、どちらが重要ですか？',
              a: 'この2つはペアとして機能します — どちらか単独では不十分です。コンテキストのない役割は一般的なエキスパートモードの出力を生成します。役割のないコンテキストは状況認識はあるがトーンが一貫しない出力を生成します。ほとんどのタスクでは、両方を組み合わせた一文がうまく機能します：「あなたは[対象者]と[ドメインタスク]に取り組んでいる[役割]です。」',
            },
            {
              q: 'プロンプトを短くしながら5つのブロック全部を含めることはできますか？',
              a: 'はい。各ブロックは一文で表現できます。完全な5ブロックプロンプトは100語未満にできます。問題は簡潔さではなく漠然さです。5つの要素すべてを含む短く精密なプロンプトは、何も含まない長くとりとめのないプロンプトより一貫して優れた結果を出します。',
            },
            {
              q: 'コンテキストと例の違いは何ですか？',
              a: 'コンテキストは状況・ドメイン・対象者を説明します — タスクを組み立てる背景情報です。例はモデルに正しい回答がどのように見えるかを示すサンプルの入出力ペアです。コンテキストはモデルにどこにいるかを伝え、例は何を生成すべきかを示します。両方とも有用ですが、まったく異なる目的を果たします。',
            },
            {
              q: 'CRAFTやCO-STARのようなフレームワークを使う場合、制約はどこに入れますか？',
              a: 'すべての主要なフレームワークには制約にマッピングされるフィールドがあります — CRAFTの「Restrictions」、CO-STARの「Tone & Style」、SPECSの「Constraints」。フレームワークに明示的な制約フィールドがない場合は、最後に別の「行わないこと」セクションとして制約を追加してください — すべてのモデルはこれを確実に処理します。',
            },
            {
              q: '単純な質問をしているだけなら、出力形式は重要ですか？',
              a: '会話的な質問では、形式の指定は任意です。下流で使用される出力 — ドキュメントに貼り付けられる・コードで解析される・公開される・チームメンバー間で再利用される — については、形式の指定は不可欠です。それは結果を得ることと、使用可能な結果を得ることの違いです。',
            },
          ],
        },
      },
    },
    zh: {
      theme: '基础知识',
      title: '每个提示词必需的5个构建模块',
      intro: '每个提示词必需的5个构建模块：角色与上下文、任务、输入与示例、约束条件和输出格式。',
      publishDate: '发布于2026年3月',
      readTime: '阅读约8分钟',
      sections: {
        definition: {
          title: '提示词的5个构建模块是什么？',
          content: [
            '**每个提示词必需的5个构建模块是：角色与上下文、任务/指令、输入与示例、约束条件和输出格式。** 这五个组成部分是将可靠、可重复的提示词与产出不一致结果的模糊问题区分开来的最低结构要求。',
            '每个模块解决一种不同的失效模式。角色与上下文告诉模型它是谁以及所处的情境。任务/指令告诉它确切要做什么。输入与示例为其提供原始材料和教学信号。约束条件设定规则。输出格式指定答案的形态。五者合一，让模型无需再猜测任何内容。',
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '角色与上下文：告诉模型它是谁，以及它在哪个领域中运作',
            '任务/指令：精确说明你希望模型产出什么——具体且可验证',
            '输入与示例：提供模型所需的原始数据和示例输入/输出对',
            '约束条件：设定规则——模型必须做什么，以及不能做什么',
            '输出格式：指定答案的确切形态——JSON、项目符号、表格或散文',
          ],
        },

        whyMatters: {
          title: '为什么这5个模块在2026年依然重要',
          content: [
            '这五模块模型反映了来自 OpenAI、Google、Anthropic 和独立从业者的提示词工程指南中的汇聚共识。角色、指令、示例、约束和输出格式——在2023年以来发布的每个主要框架中都以不同名称出现。这并非巧合：这是概率模型产出有用、一致结果所需的最少信息量。',
            '商业理由一目了然。缺少角色和上下文会产出需要重写的通用答案。缺少约束条件会增加幻觉风险和偏离品牌的输出。缺少输出格式意味着结果无法被直接解析或复制使用。5模块模型同时解决了这三种失效模式，并同样适用于 GPT-4 级别的模型、Claude、Gemini 和本地运行的大型语言模型。',
          ],
        },

        block1: {
          title: '模块一：角色与上下文',
          content: [
            '**角色**告诉模型应采用什么人设或专业身份。**上下文**告诉它所处的情境、领域和受众。它们被归为一组，因为两者作为一对共同发挥作用——角色是模型的身份，上下文是塑造该任务中"优秀"含义的环境。',
            '当你省略角色和上下文时，模型从通用视角作答——对任何特定情境都没有针对性。有了它们，同一个模型就可以变成回答增值税申报问题的资深税务顾问、为19岁受众撰写文案的初级文案策划，或总结季度报告的数据分析师。输出会根据你的实际情境进行校准。',
          ],
          items: [
            '**指定领域：** "你是一名 B2B SaaS 文案策划"比"你是一名写作者"更有效',
            '**包含受众：** "向非技术背景的 CFO 解释这个问题"会约束词汇和细节程度',
            '**锚定专业水平：** "扮演一名资深安全工程师"与"扮演一名安全工程师"会产出不同的结果',
            '**在重要时说明情境：** "你正在审阅初稿"与"你正在从头写作"会改变模型的处理方式',
          ],
        },

        block1Link: {
          content: '要了解角色提示如何随着模型遵循指令能力的提升而演变，请参阅 [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved]。',
        },

        block2: {
          title: '模块二：任务/指令',
          content: [
            '**任务/指令模块是对你希望模型执行什么的明确陈述。** 这是最重要的模块——其他所有模块都是为它服务的。清晰、具体、可验证的指令将歧义降至近乎为零。模糊的指令是所有模型和使用场景中 AI 输出质量低下的最大单一原因。',
            '当前最佳实践指南强调使任务具有可执行性和可观察性：使用动词、说明交付物，并尽可能描述成功标准。"写一段摘要"是一个任务。"用3个要点总结以下文章，每个要点不超过20个字"是一个具有可验证输出的任务。两者在输出质量上的差异相当显著。',
          ],
          items: [
            '❌ 弱：「写一些关于这个话题的内容」',
            '✅ 强：「为非技术背景的管理者撰写一篇150字的 LinkedIn 帖子，介绍提示词工程的好处」',
            '❌ 弱：「分析这些数据」',
            '✅ 强：「找出该数据集中的前3大趋势，并按收入影响从高到低排序」',
          ],
        },

        block2Link: {
          content: '指令与是否提供示例直接相关——请参阅 [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] 了解每种方法的最佳使用时机。',
        },

        block3: {
          title: '模块三：输入与示例',
          content: [
            '**输入**是模型需要处理的实际数据、文本或材料。**示例**是展示正确响应形态的示例输入/输出对。两者关注点不同：输入是当前任务的原始材料，示例是塑造模型执行方式的教学信号。',
            '包含1–3个示例（少样本提示）是固定输出格式和语气最可靠的单一技术。当你展示给模型一个好答案的样子时，它会匹配这个模式，而非仅从任务描述中推断。这在需要精确度的专业格式、统一语气和结构化输出中最为重要。',
          ],
          items: [
            '**何时添加示例：** 专业格式、统一语气要求、结构化输出、领域特定词汇',
            '**何时保持零样本：** 简单事实问题、广泛探索，以及你主动希望采用模型默认响应风格时',
            '**使示例多样化：** 相同的示例只能教会一种模式——覆盖你实际预期的真实输入范围',
            '**使用真实数据：** 真实样本优于理想化样本——模型从你实际展示的内容中学习',
          ],
        },

        block3Link: {
          content: '有关何时使用示例、何时省略的完整分析，请参阅 [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]。',
        },

        block4: {
          title: '模块四：约束条件',
          content: [
            '**约束条件是模型必须遵守的规则：它必须做什么，以及不能做什么。** 它们包括长度限制、禁止的话题或词语、必须引用的来源、品牌声音规范、安全边界和格式限制。约束条件是最常被遗漏的模块——而它的缺失是导致幻觉事实、偏离品牌的语言以及格式错误输出的主要原因。',
            '在现有提示词中添加一个范围明确的约束条件，往往是你能做出的最高杠杆改变。"不要编造统计数据"能大幅降低幻觉风险。"绝不超过100字"强制要求简洁。"仅使用所提供文本中的信息"将输出锚定在源材料中，并彻底消除该任务中的捏造。',
          ],
          items: [
            '**长度约束：** "最多150字"、"不超过5个要点"',
            '**来源约束：** "仅使用附件文档中的事实"、"不要引用无法核实的来源"',
            '**语气和声音约束：** "以正式的第三人称语气写作——不用缩写，不用俚语"',
            '**禁止内容：** "不要提及竞争对手产品"、"不要超出数据所示范围进行推测"',
            '**安全约束：** "如果问题无法从所提供的上下文中得到解答，请如实说明——不要编造答案"',
          ],
        },

        block4Links: {
          content: '有关使用排除项来塑造输出的技术，请参阅 [Techniques: Negative Prompting: Tell the AI What NOT to Do]。有关不受约束的提示词为何更容易产生幻觉，请参阅 [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]。',
        },

        block5: {
          title: '模块五：输出格式',
          content: [
            '**输出格式指定模型应产出的答案的确切形态。** 这个模块决定了输出是直接可用，还是在使用前需要重新格式化。对于自动化流水线，未指定输出格式意味着脆弱且不一致的解析。对于 GEO（生成式引擎优化），结构化输出更有可能被 AI 搜索引擎逐字引用，因为结构化答案更易于程序化提取。',
            '输出格式模块可以指定文件格式（JSON、Markdown、CSV）、结构（表格、项目符号列表、编号步骤）、长度以及章节标签。你描述得越精确，输出所需的编辑工作就越少。',
          ],
          items: [
            '**JSON：** "以 JSON 对象形式返回结果，包含以下键：title、summary、tags"',
            '**Markdown 项目符号：** "将每项发现列为一个要点，以粗体术语开头，后跟一句解释"',
            '**表格：** "将比较结果格式化为 Markdown 表格，列名为：功能、选项A、选项B"',
            '**结构化散文：** "对每个主要观点使用标题，每个章节最多3句话"',
          ],
        },

        block5Link: {
          content: '有关不同模型中 JSON 模式和结构化输出的完整指南，请参阅 [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]。',
        },

        template: {
          title: '将5个模块组合在一起：一个简单模板',
          content: '下方模板展示了所有5个模块按顺序组合用于单个领域中立任务的示例。每个部分都有标注，方便你看清每个模块的起止位置。替换各部分的内容即可将其适配到任何领域。',
          items: [
            '**[角色与上下文]** 你是一名资深业务分析师。受众是一个正在审阅季度运营报告的非技术背景高管团队。',
            '**[任务/指令]** 总结以下报告的主要发现。重点关注目标完成情况，找出两大风险，并为每项风险提出一个纠正措施建议。',
            '**[输入]** [在此粘贴报告文本]',
            '**[约束条件]** 仅使用报告中的信息。不得推测。总字数不超过200字。使用简明语言——不用专业术语。',
            '**[输出格式]** 以三个部分返回响应："主要发现"（3个要点）、"主要风险"（2个要点）、"建议措施"（2个要点，每项风险各一条）。',
          ],
        },

        templateNote: {
          content: '该模板适用于 GPT-4o、Claude、Gemini 以及通过 Ollama 或 LM Studio 运行的本地大型语言模型。模块顺序是建议，而非硬性规定——但将角色与上下文置于首位、输出格式置于末位，是在所有主流模型上最通用且可靠的排列方式。',
        },

        frameworks: {
          title: '这些模块如何映射到框架和工具',
          content: [
            '流行的提示词工程框架是以不同名称和顺序排列同一五个构建模块的具体方式。CRAFT、CO-STAR 和 SPECS 都直接映射到这五模块模型。先理解这些模块，意味着你可以应用任何框架，而无需从头记忆其特定术语。',
            '下表展示了每个构建模块如何对应三个广泛使用的框架中的相应字段：',
          ],
          columns: ['构建模块', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { '构建模块': '角色与上下文', 'CRAFT': '上下文 / 角色', 'CO-STAR': '上下文 + 受众', 'SPECS': '情境' },
            { '构建模块': '任务/指令', 'CRAFT': '行动', 'CO-STAR': '目标', 'SPECS': '问题 / 任务' },
            { '构建模块': '输入与示例', 'CRAFT': '事实 / 示例', 'CO-STAR': '示例（可选）', 'SPECS': '示例' },
            { '构建模块': '约束条件', 'CRAFT': '限制', 'CO-STAR': '语气 + 风格', 'SPECS': '约束' },
            { '构建模块': '输出格式', 'CRAFT': '格式', 'CO-STAR': '响应格式', 'SPECS': '风格' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum 内置了9个框架，根据任务类型以不同配置预填这些模块。有关框架专属指南，请参阅 [Frameworks: Which Prompt Framework Should You Use?]、[Frameworks: CRAFT Framework] 和 [Frameworks: CO-STAR Framework]。',
        },

        mistakes: {
          title: '使用5个模块时的常见错误',
          items: [
            '**完全缺少角色：** 模型从通用视角作答——即使只用一句话，也要指定领域和专业水平',
            '**上下文模糊：** "为我的受众写作"对模型毫无信息量——明确说明受众、他们的知识水平，以及他们将如何使用这份输出',
            '**无法验证的指令：** "让它更好"没有可观察的成功标准——替换为具体、可量化的任务',
            '**对幻觉没有约束：** 没有"仅使用提供的信息"，模型会用听起来合理的捏造内容填补空白',
            '**未指定输出格式：** 模型自行选择结构——这会在不同次运行间变化，并破坏下游流程',
            '**将所有内容混入一个段落：** 混为一块的文本更难让模型解析——为每个模块使用换行或明确标签',
            '**过于相似的示例：** 三个完全相同的示例只能教会一种模式——使其多样化，以覆盖真实的输入范围',
          ],
        },

        faq: {
          title: 'FAQ：提示词的构建模块',
          faqs: [
            {
              q: '每个提示词真的都需要全部5个模块吗？',
              a: '不需要。简单、明确的任务通常只需要任务/指令和输出格式。当领域或受众重要时，添加角色与上下文。当失效代价高昂时，添加约束条件。当格式精度至关重要时，添加示例。从最精简开始，只在输出达不到你的标准时才添加模块。',
            },
            {
              q: '角色比上下文更重要，还是反过来？',
              a: '两者作为一对共同发挥作用——单独任何一个都不够。没有上下文的角色会产出通用的专家模式输出。没有角色的上下文会产出了解情境但语气不一致的输出。对于大多数任务，将两者结合在一句话中效果很好："你是一名 [角色]，正与 [受众] 合作处理 [领域任务]。"',
            },
            {
              q: '提示词能简短同时包含全部5个模块吗？',
              a: '可以。每个模块都可以用一句话表达。一个完整的五模块提示词可以在100字以内。简短不是问题——模糊才是。一个包含全部五个要素的简短、精确的提示词，始终优于一个冗长、漫无目的且不包含任何要素的提示词。',
            },
            {
              q: '上下文和示例有什么区别？',
              a: '上下文描述情境、领域和受众——这是为任务定框架的背景信息。示例是展示给模型正确答案样貌的示例输入/输出对。上下文告诉模型它在哪里；示例向它展示要产出什么。两者都有用，但服务于完全不同的目的。',
            },
            {
              q: '如果我在使用 CRAFT 或 CO-STAR 这样的框架，约束条件应该放在哪里？',
              a: '每个主要框架都有一个映射到约束条件的字段——CRAFT 中的"限制"、CO-STAR 中的"语气与风格"、SPECS 中的"约束"。如果你使用的框架没有明确的约束字段，在末尾添加一个单独的"禁止"部分——所有模型都能可靠处理这种方式。',
            },
            {
              q: '如果只是问一个简单问题，输出格式重要吗？',
              a: '对于对话性问题，指定格式是可选的。但对于任何将在下游使用的输出——粘贴到文档中、被代码解析、发布，或在团队成员之间复用——指定格式至关重要。这是获得结果和获得可用结果之间的区别。',
            },
          ],
        },
      },
    },
  },

  'ai-hallucinations-how-to-stop': {
    en: {
      theme: 'Fundamentals',
      title: 'AI Hallucinations: Why AI Makes Things Up — and How to Stop Them',
      intro: 'Large language models confidently produce false information. These errors—called hallucinations—range from invented citations to fabricated facts presented with complete authority. Understanding why they happen and how to detect and reduce them is essential for anyone using LLMs in real work.',
      publishDate: '2026-03-22',
      readTime: '12 min read',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'AI Hallucinations: Why AI Makes Things Up — and How to Stop Them',
        description: 'Why language models hallucinate, how to detect hallucinations, and techniques to reduce them. Learn prompt design strategies, system-level approaches, and multi-model consensus scoring.',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        keywords: ['AI hallucinations', 'LLM hallucinations', 'hallucination detection', 'prompt engineering', 'multi-model consensus', 'RAG', 'retrieval augmented generation'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
          { '@type': 'Thing', name: 'LLM' },
        ],
      },
      sections: {

        definition: {
          title: 'What Are AI Hallucinations?',
          content: [
            'An **AI hallucination** is a factually false or fabricated statement generated by an LLM with apparent confidence. The model delivers text that violates reality—wrong names, invented sources, impossible dates, fictional URLs—using the same fluent language as accurate information.',
            'This differs fundamentally from a model expressing uncertainty. Hallucinations are characterized by confident, detailed assertions about things that don\'t exist or events that didn\'t happen. A model might cite a paper published in a journal that doesn\'t exist, invent biographical details, state a historical date that is off by centuries, or describe a product feature that was never built. The user reads it, assumes the clear language signals accuracy, and acts on it—only to discover the information is fabricated.',
            '**In one sentence:** Hallucinations are fluent false statements that language models generate because they predict text patterns rather than retrieve facts from a reliable store.'
          ],
        },

        whyHallucinate: {
          title: 'Why Language Models Hallucinate',
          content: 'LLMs work by predicting the next word in a sequence. They don\'t consult a database or verify facts against ground truth. They calculate probabilities based on patterns in training data. This core design—powerful for language tasks—inherently creates pressure to hallucinate.',
        },

        coreMechanisms: {
          title: 'The Core Mechanisms',
          items: [
            '**Next-token prediction, not truth retrieval.** The model\'s architecture is optimized for language generation, not fact verification. When a prompt asks a question, the model\'s goal is to produce a coherent, plausible continuation of text. Coherence and truthfulness are not the same thing. A false statement can be far more coherent than an admission of uncertainty.',
            '**Training data gaps and expiration.** Models train on data with a specific end date. Information gaps—topics the model never encountered during training, recent events after the training cutoff, specialized knowledge in narrow domains—create voids. When asked about these gaps, the model lacks truthful patterns to predict from. It invents plausible-sounding details rather than saying "I don\'t have this information."',
            '**No explicit confidence mechanism.** Models don\'t generate a confidence score alongside each output. They produce text without an internal signal that says *"I\'m 30% sure about this claim."* The pressure to fill the page with output overrides the option to signal doubt or refuse the request.',
            '**Pressure from prompts that demand answers.** Prompts like "Explain everything about [topic]" or "List all the reasons [reason statement]" implicitly communicate: *you must answer, even if unsure*. The model responds by inventing details to satisfy the request. It treats the pressure to be helpful as more important than the risk of being inaccurate.',
            '**Limited context window and information loss.** LLMs can hold only a finite amount of context in memory. Long documents or conversations cause earlier details to fade. The model may forget what was said in an earlier section, invent or misremember it, and confidently assert the fabrication as if it were consistent with the earlier context.',
            '**Confabulation in multi-step reasoning.** For problems requiring multiple reasoning steps, the model can lose track of intermediate results. It may invent a supporting step to justify a conclusion, or skip a step and jump to a false conclusion while generating text that sounds logically sound.'
          ],
        },

        commonTypes: {
          title: 'Common Types of Hallucinations',
          content: 'Hallucinations come in recognizable patterns. Identifying the type helps you target mitigation strategies.',
          rows: [
            { 'Type': 'Invented sources', 'Example': 'Citation to a peer-reviewed paper that doesn\'t exist; fake author names and publication years', 'Why It Happens': 'Model was trained on millions of citations and learned citation-like patterns, then invents new ones', 'Severity': 'Very High' },
            { 'Type': 'Wrong facts (dates, numbers, names)', 'Example': 'Stating a historical event in the wrong year; incorrect biographical details', 'Why It Happens': 'Training data is incomplete or conflicting; model picks a plausible-sounding number', 'Severity': 'Very High' },
            { 'Type': 'Fabricated URLs and emails', 'Example': 'Providing a link or email address that doesn\'t resolve or belong to the claimed organization', 'Why It Happens': 'Model learned URL and email patterns and generates new ones that sound realistic but are fictional', 'Severity': 'High' },
            { 'Type': 'Lost context', 'Example': 'Answering a question as if the model understood earlier context, when it actually lost track of it', 'Why It Happens': 'Context window is finite; long documents cause earlier details to fade from the model\'s attention', 'Severity': 'High' },
            { 'Type': 'Role drift', 'Example': 'Starting in one role (analyst) and gradually shifting to another (storyteller), inventing details to fill gaps', 'Why It Happens': 'Model loses track of the initial instruction and defaults to pattern-matching on text alone', 'Severity': 'Medium' },
            { 'Type': 'Overconfident generalization', 'Example': 'Stating "All X do Y" when only the specific training examples show this', 'Why It Happens': 'Model generalizes too broadly from limited training data without confidence-checking', 'Severity': 'Medium' },
            { 'Type': 'Internal contradiction', 'Example': 'Stating opposing facts within the same response', 'Why It Happens': 'Model doesn\'t have a mechanism to track consistency across multiple sentences', 'Severity': 'Medium' },
          ],
          columns: ['Type', 'Example', 'Why It Happens', 'Severity'],
        },

        hallucinationTypesList: {
          isTldr: false,
          content: '**The seven types of hallucinations are:** invented sources, wrong facts, fabricated URLs and emails, lost context, role drift, overconfident generalization, and internal contradictions.',
        },

        promptDesignIntro: {
          title: 'How Prompt Design Affects Hallucination Risk',
          content: 'Your prompts either encourage or discourage hallucinations. The difference is measurable.',
        },

        riskPrompts: {
          title: 'Prompts that increase hallucination risk:',
          items: [
            '"Tell me everything about [topic]" — no limits, no permission to say "I don\'t know"',
            '"Make sure to include [many details]" — explicit pressure to fill space with invented information',
            '"Write as if you\'re a leading expert" — encourages authoritative-sounding assertions, even for uncertain claims',
            '"Answer even if you\'re not completely sure" — removes the brake on hallucination',
          ],
        },

        safePrompts: {
          title: 'Prompts that reduce hallucination risk:',
          items: [
            '"You may say \'I don\'t know\' if unsure" — explicit permission to admit knowledge gaps',
            '"Only use information from the context below" — constrains the answer to provided data, not invented knowledge',
            '"Separate facts from opinions. Mark uncertain claims [UNCERTAIN]" — forces the model to differentiate',
            '"Cite your source for any factual claim" — makes invented citations obviously visible',
            '"If you can\'t verify this claim, do not include it" — explicit constraint on unverified assertions',
          ],
        },

        promptStructure: {
          title: 'Good Prompt Structure',
          content: 'Good prompts combine four elements: a **clear role or context** (what frame should the model adopt?), a **specific task** (what output do I need?), **real input data** (what information is provided?), and **explicit constraints** (what must the model NOT do?). This structure reduces the pressure to hallucinate by removing ambiguity about what the model is supposed to do.\n\nSee the full definition of [prompt engineering fundamentals](/prompt-engineering/what-is-prompt-engineering) for a deeper exploration of how structure affects output reliability.',
        },

        techniques: {
          title: 'Techniques to Reduce Hallucinations',
          content: 'Three complementary approaches reduce hallucinations:\n- **Prompt-level:** Add constraints and permission to admit uncertainty in your prompts\n- **System-level:** Use RAG, function calling, or retrieval to ground answers in real data\n- **Model-level:** Run the same prompt across multiple independent models to detect hallucinations by consensus',
        },

        technique1: {
          title: '1. Explicit Permission to Say "I Don\'t Know"',
          content: 'Tell the model: "If you\'re unsure or don\'t have information, say so. Do not guess."\n\nThis removes the pressure to invent answers. Many models are trained to be helpful and will attempt to answer even when completely unsure. Explicitly releasing them from that expectation gives them permission to decline.',
        },

        technique2: {
          title: '2. Ask for Sources or Evidence',
          content: 'Request: "Cite the source for any factual claim" or "Provide the URL and publication date for each reference."\n\nThis makes invented citations obvious (they won\'t resolve or will point to nonexistent sources) and forces the model to be more careful about asserting facts. It also gives you a way to fact-check the output: click each link, verify each source.',
        },

        technique3: {
          title: '3. Self-Critique and Contradiction Checking',
          content: 'Ask the model to review its own output:\n\n> "After you finish your answer, review it for any contradictions or claims that contradict something you said earlier. Point out any inconsistencies you find."\n\nModels often catch their own errors when prompted to reflect. The model can then revise the answer before you see it.',
        },

        technique4: {
          title: '4. Use Negative Instructions',
          content: 'Explicitly state what the model must NOT do:',
          items: [
            '"Do not invent sources, URLs, or author names under any circumstances"',
            '"Do not guess about dates if you\'re unsure—leave the date blank instead"',
            '"Do not add information that is not in the provided context"',
          ],
        },

        technique4Extra: {
          content: 'Negative framing sometimes works better than positive framing for preventing specific errors.',
        },

        technique5: {
          title: '5. Step-by-Step Reasoning with Verification',
          content: 'For complex tasks, ask:\n\n> "Work through this step by step. After each step, verify that the previous step is correct before proceeding to the next step."\n\nBreaking the task into smaller chunks with verification steps gives the model chances to catch inconsistencies before they compound.',
        },

        technique6: {
          title: '6. Structured Output Format with Evidence Section',
          content: 'Ask the model to separate **answer**, **reasoning**, and **evidence** into distinct sections:\n\n```\nANSWER: [Direct response]\n\nREASONING: [How you arrived at this]\n\nEVIDENCE: [Sources, facts, or citations supporting this]\n\nCONFIDENCE: [How sure are you, and why?]\n```\n\nThis structure makes hallucinations easy to spot: unsupported claims will have empty or vague EVIDENCE sections, and low CONFIDENCE values.',
        },

        systemLevel: {
          title: 'System-Level Strategies Beyond Prompt Design',
          content: 'Prompts alone are not sufficient for high-stakes work. Add these tools and workflows.',
        },

        systemItems: {
          items: [
            '**Retrieval-Augmented Generation (RAG).** Feed the model a specific document, knowledge base, or dataset and ask it to answer only using that content. This grounds answers in real data instead of the model\'s training data and eliminates hallucinations about missing information. Tools like LangChain, Anthropic\'s prompt caching, and vector databases implement this pattern.',
            '**Tool calling and function use.** Let the model call external functions for calculations, database lookups, or fact-checking. Instead of inventing a statistic, the model calls a function to retrieve it. This removes the temptation to hallucinate entirely for specific domains.',
            '**Human review and expert verification.** For critical decisions—medical, legal, financial, safety-critical—always have a human (preferably an expert) verify AI-generated answers. No prompt technique replaces expert judgment.',
            '**Automated fact-checking workflows.** Run model outputs through automated systems (fact-checking APIs, URL validation, citation verification) before showing them to users. This catches hallucinations at scale without manual review of every output.',
          ],
        },

        multiModel: {
          title: 'Multiple Models and Consensus Detection',
          content: 'A single model can hallucinate confidently. But when you ask multiple independent models the same question, they often disagree on hallucinated claims.\n\nIf five models independently produce similar answers to a question, that answer is far more likely to be correct than if one model answers alone. If only one model claims something and four others don\'t mention it, that claim is highly suspect and warrants verification.\n\nThis is the principle behind **consensus scoring**: dispatching the same prompt to many models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Mistral Large, Llama 3, DeepSeek, etc.) and analyzing where they agree and disagree.',
        },

        consensusTest: {
          title: 'PromptQuorum Consensus Test',
          content: 'We dispatched the same hallucination-prone prompt ("List five published papers on AI consensus scoring") to GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro. GPT-4o invented one citation completely (a fictional 2024 paper); Claude declined to cite papers it wasn\'t sure about; Gemini cited three real papers but one with an incorrect publication year. Only one citation appeared across all three models. This test demonstrates that consensus across models is a meaningful signal of reliability—and that single-model answers are more likely to contain fabrications.\n\nPromptQuorum automates this: send one prompt to 25+ AI models simultaneously, run consensus analysis across all responses, and get a verdict on which claims have high agreement (more likely reliable) and which have low agreement (worth investigating further). The tool flags exactly which claims contradict, surfaces claims that appear in only one or two responses, and weights model responses by capability—transforming hallucination detection from educated guessing into structured, data-driven analysis.\n\nSee how [multi-model AI reduces hallucinations](/prompt-engineering/consensus-scoring) for a deeper technical explanation.',
        },

        globalPerspective: {
          title: 'Global Perspectives on Hallucination Governance',
          content: 'Hallucination risk and mitigation strategies vary by region and regulatory context. **In Europe**, the EU AI Act emphasizes transparency and error reporting for high-risk AI systems, making hallucination documentation mandatory. Mistral AI (France) has built models with specific focus on reducing hallucinations in EU-compliant applications. **In China**, models like Qwen 2.5 and DeepSeek have different hallucination patterns due to training data composition and tokenization efficiency for CJK (Chinese, Japanese, Korean) languages—these models handle token-to-information ratios differently than English-optimized models. **In Japan**, enterprises operating under METI (Ministry of Economy, Trade and Industry) data governance guidelines increasingly deploy models locally for hallucination-prone tasks to ensure data residency and compliance.\n\nRegardless of region, the core techniques (RAG, consensus checking, human review) remain universally applicable. Choose and verify models based on your regulatory context and language requirements.',
        },

        dangerDomains: {
          title: 'When Hallucinations Are Most Dangerous',
          content: 'Hallucinations risk significant harm in specific domains. Be especially cautious with:',
          items: [
            '**Medical and health decisions** — Wrong drug names, dosages, or symptom interpretations can harm patients',
            '**Legal and compliance** — Invented case law, regulatory requirements, or precedent can lead to costly mistakes or violations',
            '**Financial advice** — False market data, incorrect tax information, or fabricated performance metrics mislead high-stakes decisions',
            '**Safety-critical systems** — Hallucinations in code review, architecture decisions, or security analysis can introduce vulnerabilities or bugs',
            '**Public attribution** — Anything published under your name or brand must be fact-checked; hallucinations damage credibility',
          ],
        },

        criticalPrinciple: {
          content: '**Critical principle:** Even with perfect prompts and consensus checking, human verification remains essential for high-stakes decisions. Use AI as a time-saver and first-pass tool, not as a replacement for expert judgment or primary source verification.\n\nLearn how [self-critique techniques](/prompt-engineering/self-critique-prompting) can further reduce errors in complex reasoning tasks.',
        },

        checklist: {
          title: 'Practical Checklist: Before You Send a Critical Prompt',
          content: 'Use this checklist before sending a prompt you\'ll rely on for decisions or public-facing output:',
          items: [
            '[ ] **Does the prompt explicitly permit "I don\'t know"?** Add: "You may say \'I don\'t know\' if unsure."',
            '[ ] **Is there real context or data in the prompt?** Vague prompts invite invention. Provide specific documents, examples, or input data.',
            '[ ] **Are constraints explicit?** State what the model must NOT do, especially: "Do not invent sources, URLs, or citations."',
            '[ ] **Is the output format structured?** Separate Answer / Reasoning / Evidence / Confidence. This makes unsupported claims obvious.',
            '[ ] **Are you asking for sources?** For any factual claim, require: "Cite the source for this fact."',
            '[ ] **Is the task specific, not open-ended?** "List five marketing strategies *for a B2B SaaS product targeting finance professionals*" is better than "Tell me about marketing."',
            '[ ] **Have you asked the model to self-check?** Add: "Review your answer for contradictions before submitting it."',
            '[ ] **For high-stakes decisions, are you cross-checking?** Send the same prompt to multiple models and compare answers.',
          ],
        },

        beforeAfter: {
          title: 'Before / After Prompt Example',
        },

        badPrompt: {
          title: '[Bad Prompt]',
          blockquote: 'Tell me about the history of artificial intelligence. Include major breakthroughs and important researchers.',
          content: '**Why this fails:** Open-ended, no constraints, no permission to admit uncertainty. The model will invent dates, misattribute breakthroughs, confidently state outdated information, and potentially cite papers that don\'t exist.',
        },

        goodPrompt: {
          title: '[Good Prompt]',
          blockquote: 'Using only the following timeline, summarize the major breakthroughs in AI from 1950 to 1990:\n\n{TIMELINE DATA INSERTED}\n\nFormat your answer as:\n\n**BREAKTHROUGH:** {Name}\n**YEAR:** {Year — only if stated in timeline}\n**SIGNIFICANCE:** {What it enabled}\n**SOURCE:** {Which document from the timeline mentions this?}\n\nDo not add information not in the timeline. If you\'re unsure whether something is in the timeline, skip it rather than guessing.',
        },

        whyWorks: {
          title: 'Why this works:',
          items: [
            '**Real data instead of invention:** The model works from provided context, not from training data gaps',
            '**Structured output:** The format makes missing sources immediately obvious',
            '**Negative instruction:** "Do not add information not in the timeline" is explicit',
            '**Permission to omit:** "If unsure, skip it" releases pressure to invent details',
            '**Source accountability:** Every claim requires citing which document it came from',
          ],
        },

        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Can hallucinations be completely eliminated?',
              a: 'No. Hallucinations are inherent to how language models work—they predict text patterns rather than retrieve facts from a verified store. You can reduce them significantly with good prompt design, tools like RAG, and multi-model consensus, but eliminating them entirely is not possible given current LLM architecture. Human verification remains necessary for high-stakes decisions.',
            },
            {
              q: 'Why does the model sound so confident when it\'s wrong?',
              a: 'Language models are trained to generate fluent, coherent text. Confidence is a side effect of linguistic coherence. A false statement can be far more coherent and well-articulated than an honest admission of uncertainty. The model has no built-in mechanism to express doubt—it produces text with the same fluent confidence regardless of accuracy.',
            },
            {
              q: 'Do newer, larger models hallucinate less?',
              a: 'Larger models often hallucinate more on some tasks because they\'re better at generating plausible-sounding text, making false claims harder to spot. However, newer models do perform better on some factual tasks (they have more recent training data and stronger instruction-following). The relationship between model size and hallucination is task-dependent, not monotonic.',
            },
            {
              q: 'Does connecting a model to the internet remove hallucinations?',
              a: 'Partially. Real-time web access helps with current events and recent facts, but it doesn\'t solve the core problem: the model still invents details, misinterprets search results, or hallucinates about content it didn\'t actually retrieve. Internet access is a tool that reduces one class of hallucinations, not a cure.',
            },
            {
              q: 'How can I quickly check whether an answer is hallucinated?',
              a: 'Check sources: Click URLs or search for cited papers. If they don\'t exist, the answer is hallucinated. Verify facts: Check dates, names, and numbers against trusted sources. Compare multiple models: Ask the same question to different models. Sharp disagreement suggests at least one is hallucinating. Apply domain expertise: If you know the field, read critically for subtle implausibility—hallucinations often have tell-tale signs to expert readers.',
            },
            {
              q: 'Should I stop using AI if it hallucinates?',
              a: 'No. Use AI strategically with verification. For brainstorming, drafting, and exploratory work, hallucinations are a minor annoyance. For fact-critical work (research, compliance, medical decisions, financial advice), use AI as a starting point, then verify everything with trusted sources or expert review.',
            },
            {
              q: 'What\'s the difference between a hallucination and a genuine mistake?',
              a: 'A hallucination is confident and false. If a model says "I\'m not sure, but it might be X," that\'s honest uncertainty, not hallucination. If it says "The capital of France is Berlin" with full confidence, that\'s a hallucination—the model stated something false as if it were fact. The hallmark is confident assertion of something untrue.',
            },
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the foundational concepts behind structuring prompts',
            '[Multi-Model Consensus Scoring](/prompt-engineering/consensus-scoring) — how comparing models detects disagreements and unreliability',
            '[Self-Critique Prompting Techniques](/prompt-engineering/self-critique-prompting) — how to get models to catch their own errors',
          ],
        },

        sources: {
          title: 'Sources',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." ArXiv, https://arxiv.org/abs/2201.11903 — the foundational paper demonstrating that step-by-step reasoning reduces hallucinations in math and logic tasks.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "On Faithfulness and Factuality in Abstractive Summarization." ACL Proceedings, https://aclanthology.org/2021.acl-long.200/ — empirical study of hallucination rates and mechanisms in neural text generation.',
            'Anthropic (2024). "Constitutional AI." https://www.anthropic.com/constitutional-ai — Anthropic\'s approach to reducing harmful outputs and hallucinations through principles-based training.',
          ],
        },
      },
    },
    de: {
      theme: 'Fundamentals',
      title: 'KI-Halluzinationen: Warum KI Dinge erfindet — und wie man sie stoppt',
      intro: 'Große Sprachmodelle produzieren vertrauensvoll falsche Informationen. Diese Fehler – Halluzinationen genannt – reichen von erfundenen Zitaten bis zu erfundenen Fakten, die mit vollständiger Autorität präsentiert werden. Das Verständnis, warum sie auftreten und wie man sie erkennt, ist für die Arbeit mit LLMs unerlässlich.',
      publishDate: '22. März 2026',
      readTime: '12 Min. Lesezeit',
      sections: {},
    },
    fr: {
      theme: 'Fundamentals',
      title: 'Hallucinations IA: Pourquoi l\'IA Invente des Choses — et Comment les Arrêter',
      intro: 'Les grands modèles de langage produisent confidentement des informations fausses. Ces erreurs, appelées hallucinations, vont de citations inventées à des faits fabriqués présentés avec une autorité complète. Comprendre pourquoi elles se produisent et comment les détecter est essentiel pour utiliser les LLM dans un travail réel.',
      publishDate: '22 mars 2026',
      readTime: '12 min de lecture',
      sections: {},
    },
    ja: {
      theme: 'Fundamentals',
      title: 'AIハルシネーション：AIがなぜ物を作り出すのか — そしてそれを止める方法',
      intro: '大規模言語モデルは誤った情報を自信を持って生成します。これらのエラー（ハルシネーションと呼ばれる）は、架空の引用から完全な権威で提示された捏造された事実までの範囲です。それらが発生する理由と、それらを検出して削減する方法を理解することは、実際の作業でLLMを使用する誰にとってもが重要です。',
      publishDate: '2026年3月22日',
      readTime: '12分の読み物',
      sections: {},
    },
    zh: {
      theme: 'Fundamentals',
      title: 'AI幻觉：为什么AI会编造东西——以及如何停止它们',
      intro: '大型语言模型自信地产生错误信息。这些错误（称为幻觉）的范围从虚假引文到以完全权威性呈现的捏造事实。理解为什么会发生幻觉以及如何检测和减少幻觉对于在实际工作中使用LLM的任何人都是必不可少的。',
      publishDate: '2026年3月22日',
      readTime: '12分钟阅读',
      sections: {},
    },
  },

}
