// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: what-is-prompt-engineering
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'What Is Prompt Engineering? — PromptQuorum Guide',
      seoTitle: 'What Is Prompt Engineering in 2026? Beginner Guide',
      intro: 'Prompt engineering: designing text inputs to get reliable, accurate outputs from LLMs like GPT-4o, Claude, and Gemini. Learn essential techniques, frameworks, and why it matters to AI output quality.',
      metaDescription: 'Prompt engineering: designing text inputs for reliable AI outputs. Learn role prompting, chain-of-thought, few-shot techniques for ChatGPT, Claude, Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Engineering',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'en',
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
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/what-is-prompt-engineering', width: 1200, height: 630 },
      },
      sections: {

        definition: {
          title: 'Prompt Engineering: Definition and Core Principles',
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
            '**Tested in PromptQuorum — 40 summarisation prompts dispatched to GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro:** Unstructured prompts produced inconsistent length and structure across all three models in 37 of 40 cases. After rewriting with the five building blocks above, all three models produced consistent, on-format responses on the first attempt in 40 of 40 cases.',
            'This consensus effect — where structured prompts produce identical behavior across different models — is the core insight behind prompt engineering. The five building blocks work because they exploit how all major LLMs process instructions identically.',
          ],
        },

        promptExample: {
          title: 'Prompt Structure in Practice',
          content: [
            '[Bad Prompt] "Summarize this article."',
            '[Good Prompt] "You are a research analyst. Summarize this article in 3 bullet points. Focus on findings, not methodology. Each bullet ≤ 25 words."',
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
            '**Model selection:** GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro respond differently to the same prompt. Choosing the right model for the task is part of the engineering process. Mistral AI (Europe) and Qwen (China) follow the same prompting principles but may require adjusted output format specifications due to differences in instruction-following behavior. The same structured prompt works globally across all major model families → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
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
      seoTitle: 'Was ist Prompt Engineering? Einsteiger-Guide 2026',
      intro: 'Prompt Engineering: Texteinträge so gestalten, dass zuverlässige, genaue Ausgaben von LLMs wie GPT-4o, Claude und Gemini erzeugt werden. Lernen Sie wesentliche Techniken, Frameworks und warum dies für die Qualität der KI-Ausgabe wichtig ist.',
      metaDescription: 'Prompt Engineering 2026: die Technik, die Qualität Ihrer KI-Ausgaben bestimmt. Lernen Sie Rollenanweisung, Chain-of-Thought und Few-Shot für ChatGPT, Claude und Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 Min. Lesezeit',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering?lang=de',
        inLanguage: 'de',
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
            'PromptQuorum entsendete denselben unstrukturierten Prompt ("fassen Sie diesen Text zusammen") an GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro. Die Ergebnisse unterschieden sich in Länge, Detail und Struktur auf allen drei Modellen. Als dieselbe Aufgabe mit den fünf Bausteinen oben umgeschrieben wurde, erzeugten alle drei Modelle konsistente, formatgerechte Antworten beim ersten Versuch.',
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
            '**Modellauswahl:** GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro reagieren unterschiedlich auf denselben Prompt. Das richtige Modell für die Aufgabe zu wählen ist Teil des Engineering-Prozesses. Mistral AI (Europa) und Qwen (China) folgen denselben Prompting-Prinzipien, erfordern aber möglicherweise angepassste Ausgabeformat-Spezifikationen aufgrund von Unterschieden im Instruction-Following-Verhalten. Der gleiche strukturierte Prompt funktioniert weltweit in allen großen Modellfamilien → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
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
      seoTitle: 'Prompt Engineering 2026 : guide complet pour débutants',
      intro: 'Prompt engineering : concevoir des entrées textuelles pour obtenir des sorties fiables et précises des LLM comme GPT-4o, Claude et Gemini. Apprenez les techniques essentielles, les frameworks et pourquoi cela compte pour la qualité de la sortie d\'IA.',
      metaDescription: 'Le prompt engineering détermine la qualité de vos résultats IA. Apprenez le prompting de rôle, chain-of-thought et few-shot pour ChatGPT, Claude et Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 min de lecture',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering?lang=fr',
        inLanguage: 'fr',
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
            'PromptQuorum a envoyé le même prompt non structuré ("résumez ce texte") à GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro. Les résultats variaient en longueur, détail et structure sur tous les trois modèles. Lorsque la même tâche a été réécrite à l\'aide des cinq blocs de construction ci-dessus, les trois modèles ont produit des réponses cohérentes et formatées correctement au premier essai.',
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
            '**Sélection du modèle :** GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro réagissent différemment au même prompt. Choisir le bon modèle pour la tâche fait partie du processus d\'ingénierie → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
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
      seoTitle: 'プロンプトエンジニアリングとは？2026年入門ガイド',
      intro: 'プロンプトエンジニアリングとは、大規模言語モデルから正確で有用かつ再現性のある出力を得るために、テキスト入力（プロンプト）を設計・構造化する実践です。',
      metaDescription: 'プロンプトエンジニアリングはAI出力の品質を決める技術です。ChatGPT・Claude・Ollamaで実践する入門ガイド。基礎を10分で学べます。',
      publishDate: '2026-03-01',
      readTime: '10分で読める',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering?lang=ja',
        inLanguage: 'ja',
        headline: 'プロンプトエンジニアリングとは？',
        description: 'プロンプトエンジニアリング：テキスト入力を設計・構造化して、大規模言語モデルから正確で有用かつ再現性のある出力を得る実践。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['プロンプトエンジニアリング', 'AI プロンプティング', 'LLM', 'GPT-4o', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-4o' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
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
            '**モデルの選択：** GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proは同じプロンプトに対して異なる反応を示します。タスクに適したモデルを選ぶことも、エンジニアリングプロセスの一部です → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
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
      seoTitle: '什么是提示工程？2026年初学者完全指南',
      intro: '提示工程：设计文本输入以从 GPT-4o、Claude 和 Gemini 等大语言模型获得可靠、准确的输出。学习基本技术、框架以及为什么这对人工智能输出质量很重要。',
      metaDescription: '提示工程是决定AI输出质量的核心技能。学习角色提示、思维链和少样本方法，适用于ChatGPT、Claude和Ollama。初学者友好，约10分钟阅读。',
      publishDate: '2026-03-01',
      readTime: '阅读约10分钟',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering?lang=zh',
        inLanguage: 'zh',
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
            'PromptQuorum 将相同的非结构化提示（"总结这段文本"）发送到 GPT-4o、Claude 4.6 Sonnet 和 Gemini 1.5 Pro。结果在所有三个模型上的长度、细节和结构都有所不同。当使用上述五个构建块重新编写相同的任务时，所有三个模型都在第一次尝试时生成了一致的、格式正确的响应。',
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
            '**模型选择：** GPT-4o、Claude 4.6 Sonnet 和 Gemini 1.5 Pro 对相同提示词的响应各有不同。为任务选择合适的模型是工程流程的一部分。Mistral AI（欧洲）和阿里云 Qwen（中国）遵循相同的提示工程原则，但由于指令跟随行为的差异，可能需要调整输出格式规范。相同的结构化提示在全球所有主要模型族中都有效 → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
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
  };
