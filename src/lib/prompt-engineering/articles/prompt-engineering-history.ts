// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-engineering-history
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      last_full_refresh: '2026-11-02',
      theme: 'Fundamentals',
      heroImage: '/images/prompt-engineering-history-overview-hero-en.webp',
      title: 'From GPT-2 to Today: How Prompt Engineering Evolved',
      seoTitle: 'Is Prompt Engineering Dead? How It Evolved, 2020–2026',
      intro: 'Prompt engineering evolved from informal experiments around GPT-3 in 2020 to a structured discipline with named techniques and frameworks by 2026. This timeline traces the key breakthroughs, research papers, and turning points that made prompting a core skill.',
      metaDescription: 'Prompt engineering is not dead, it changed: a sourced timeline from GPT-3 few-shot prompting (2020) through chain-of-thought and ChatGPT to context design.',
      ogTitle: 'How Prompt Engineering Evolved: From GPT-3 to Context Design (2020–2026)',
      twitterTitle: 'How prompt engineering went from "write a better prompt" to context design in 6 years',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10 min read',
      educationalLevel: 'Beginner',
      audience: 'Knowledge workers and developers learning the history of prompt engineering and AI techniques',
      primaryTerm: 'Prompt Engineering History',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**Prompt engineering evolved from informal trial-and-error around GPT-3 (2020) to a structured discipline with named frameworks, techniques, and tools by 2026, progressing through five phases: few-shot learning, chain-of-thought reasoning, the ChatGPT mainstream moment, automated optimization, and context design.**',
      quickFacts: [
        '**GPT-3 (2020):** 175-billion-parameter model introduced few-shot prompting as a paradigm shift',
        '**Chain-of-Thought (2022):** Wei et al. showed that prompt structure could activate step-by-step reasoning; PaLM 540B went from 17.9% to 56.9% on GSM8K',
        '**ChatGPT (Nov 2022):** Passed 1 million users in 5 days (per OpenAI CEO Sam Altman); an estimated 100 million monthly active users by January 2023 (UBS, via Reuters)',
        '**Job Market (2023):** An Anthropic "Prompt Engineer and Librarian" posting advertised $175K–$335K (Fortune, March 2023)',
        '**GPT-4 & Frameworks (2023):** Image inputs and published frameworks (CO-STAR, SPECS, RISEN) turned prompting into a teachable discipline',
        '**Context Design (2024–2026):** Open-weights LLMs, 1M+ token context windows, and agent orchestration shifted focus from prompt tweaking to system-level context engineering',
      ],
      toc: [
        { label: 'Key Takeaways', anchor: 'key-takeaways' },
        { label: 'Before Prompt Engineering Had a Name', anchor: 'before-had-a-name' },
        { label: '2020: GPT-3 and the Few-Shot Breakthrough', anchor: 'gpt-3-few-shot' },
        { label: '2021–Early 2022: From Tricks to Recognized Skill', anchor: 'tricks-to-skill' },
        { label: '2022: Chain-of-Thought and Reasoning', anchor: 'chain-of-thought' },
        { label: 'Late 2022–2023: ChatGPT and Job Titles', anchor: 'chatgpt-moment' },
        { label: '2023: GPT-4, Multimodal Prompting, and Frameworks', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024: Automated Prompt Engineering and RAG', anchor: 'automated-rag' },
        { label: '2024–2025: Context Design', anchor: 'context-design' },
        { label: '2026 and Beyond: Core Literacy', anchor: 'beyond-2026' },
        { label: 'Timeline: Key Milestones', anchor: 'timeline' },
        { label: 'How History Shapes Today\'s Practices', anchor: 'today-practice' },
        { label: 'Common Misconceptions About Prompt Engineering', anchor: 'common-mistakes' },
        { label: 'Related Reading', anchor: 'related-reading' },
        { label: 'FAQ: The Evolution of Prompt Engineering', anchor: 'faq' },
        { label: 'Sources', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Is Prompt Engineering Dead? How It Evolved, 2020–2026',
        description: 'Prompt engineering is not dead, it changed: a sourced timeline from GPT-3 few-shot prompting (2020) through chain-of-thought and ChatGPT to context design.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'en',
        keywords: ['prompt engineering history', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'prompt engineering timeline', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Knowledge workers and developers learning the history of prompt engineering and AI techniques' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering History' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'AI Techniques and Frameworks' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          { '@type': 'Question', name: 'When did prompt engineering start?', acceptedAnswer: { '@type': 'Answer', text: 'The practice began with GPT-3 in May 2020, when Brown et al. showed that examples placed in the prompt could steer a model without retraining. Researchers described it as "prompt programming" in early 2021, chain-of-thought prompting followed in January 2022, and ChatGPT (November 2022) made it a mass skill.' } },
          { '@type': 'Question', name: 'Who first coined the term "prompt engineering"?', acceptedAnswer: { '@type': 'Answer', text: 'The exact origin is debated, and no single person is credited with inventing the term. Research papers were describing prompt-based methods by 2021, and the phrase gained wider use through 2022 and after ChatGPT. The Wikipedia article on prompt engineering gives an overview of the history.' } },
          { '@type': 'Question', name: 'Why did prompt engineering explode in popularity after ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT was the first general-purpose AI model that millions of non-researchers could use immediately, for free, without writing code. The gap between a well-crafted prompt and a vague one was visible and immediately consequential — better prompts produced usably better outputs. That feedback loop, experienced simultaneously by millions of people, turned prompt engineering from a research concept into a mass skill.' } },
          { '@type': 'Question', name: 'How did research papers influence real-world prompting techniques?', acceptedAnswer: { '@type': 'Answer', text: 'The transfer was unusually fast for AI research. Chain-of-Thought prompting (Wei et al., 2022) went from academic paper to widely used practitioner technique within months, partly because it required no tooling — just a change in how you wrote the prompt. Few-shot prompting from the GPT-3 paper (Brown et al., 2020) was immediately adoptable by anyone with API access. The accessibility of the techniques accelerated their spread.' } },
          { '@type': 'Question', name: 'Is prompt engineering becoming less important as models improve?', acceptedAnswer: { '@type': 'Answer', text: 'No — more capable models respond better to well-structured prompts, not less. The gains from good prompting increase as the model becomes more capable of following precise instructions. What has changed is the level of prompt engineering required for simple tasks: conversational questions now require less crafting than they did in 2021. But for complex, production-grade outputs, structured prompting remains the most reliable lever available.' } },
          { '@type': 'Question', name: 'What is the difference between prompt engineering and context engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering typically refers to designing the text input to a model to improve its output. Context engineering is a broader, more recent concept that refers to orchestrating everything in the model\'s context window: the system prompt, retrieved documents, conversation history, tool outputs, and user input — all composed deliberately. Context engineering treats the prompt as one component in a designed system, not a standalone artifact.' } },
          { '@type': 'Question', name: 'Will automated tools replace the need to understand prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Automated tools like DSPy can optimise prompt wording within defined objectives, but they require a human to specify what the objective is, what constraints apply, and how to evaluate success. Understanding prompt engineering principles remains necessary to use these tools effectively — and to diagnose when they produce the wrong outcome. Automation removes some of the manual iteration; it does not remove the need for structured thinking.' } },
          { '@type': 'Question', name: 'Is prompt engineering dead in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'No. The discipline has shifted, not disappeared. As models grow more capable, the work moves from syntax tricks and formatting hacks to context design — structuring inputs, managing retrieval, and composing tool outputs. The job title "Prompt Engineer" is narrowing, but the underlying skill is embedded in every role that uses AI: developer, analyst, marketer, researcher. Clear task framing, relevant context, and a specified output format still determine how useful a model\'s answer is.' } },
          { '@type': 'Question', name: 'Do I need to learn prompt engineering if AI models keep improving?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — but the focus shifts with each generation. Better models reduce the need for elaborate workarounds (special tokens, repetitive reinforcement, rigid formatting constraints) and increase the payoff for clear intent, structured context, and well-chosen examples. The fundamentals — role, context, format, constraints — remain stable across every model generation. Learning them now means the skill compounds rather than expires.' } },
          { '@type': 'Question', name: 'What is the difference between prompt engineering and fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering changes how you talk to a model without modifying its weights. Fine-tuning retrains a model on new data to change its behaviour permanently. Prompt engineering is faster, cheaper, and reversible — you can iterate in minutes. Fine-tuning is better when the target behaviour is consistent, high-volume, or impossible to describe reliably in a prompt. Most teams start with prompting and fine-tune only when prompting approaches a ceiling on their specific task.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Prompt Engineering Evolution Timeline: 2018-2026',
        description: 'A chronological timeline of key milestones, research papers, and model releases that shaped the evolution of prompt engineering from 2018 to 2026.',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'en',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT (Google) and GPT-2 (OpenAI) released (2018–2019)', description: 'Showed that transformer models could be steered by input phrasing, but no formal discipline existed yet' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 and Brown et al., "Language Models are Few-Shot Learners" (2020)', description: 'Established few-shot prompting: rewriting the prompt changes the model\'s behaviour without retraining' },
          { '@type': 'ListItem', position: 3, name: 'Chain-of-thought prompting (Wei et al.) (2022 (Jan))', description: 'Showed that prompt structure could elicit step-by-step reasoning' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang et al., OpenAI) (2022 (Mar))', description: 'Models trained to follow instructions made prompt quality far more consequential' },
          { '@type': 'ListItem', position: 5, name: 'ChatGPT launch (2022 (Nov))', description: 'Brought prompting to a mass audience; millions began experimenting within days' },
          { '@type': 'ListItem', position: 6, name: '"Prompt engineer" postings draw attention; an Anthropic posting advertises $175K–$335K (2023 (Q1))', description: 'Made prompt engineering visible as a possible profession, though the role was widely debated' },
          { '@type': 'ListItem', position: 7, name: 'GPT-4 release with image input (2023 (Mar))', description: 'Extended prompting beyond text to images; 128K-token context followed with GPT-4 Turbo (Nov 2023)' },
          { '@type': 'ListItem', position: 8, name: 'Frameworks such as CRAFT, CO-STAR, SPECS, RISEN and TRACE; official guides from OpenAI and Google (2023)', description: 'Turned individual craft into reusable, teachable templates' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou et al.) and DSPy (Khattab et al.): LLM-optimised prompts (2022–2023)', description: 'Showed that LLMs can write and tune prompts, making automated prompt optimisation practical' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3 (Apr) and Gemini 1.5 Pro with a 1M-token context preview (Feb) (2024)', description: 'Open-weights models for private deployment and very long contexts moved focus to context engineering' },
          { '@type': 'ListItem', position: 11, name: 'Reasoning models: OpenAI o1 (Sep 2024), DeepSeek-R1 (Jan 2025), Claude 3.7 Sonnet extended thinking (Feb 2025) (2024–2025)', description: 'Models reason step by step internally, so explicit chain-of-thought prompting matters less on them' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4 (mixture-of-experts); Llama 4 Scout supports a 10M-token context (2025 (Apr))', description: 'Open-weights models adopt mixture-of-experts designs and very long contexts' },
          { '@type': 'ListItem', position: 13, name: 'Context design and agent orchestration become standard practice (2026)', description: 'Prompting is one layer in a composed context; system-level thinking is expected' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: 'How Prompt Engineering Evolved: A Short Overview',
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt engineering moved from trial-and-error phrasing tricks to a documented discipline of reusable patterns, evaluation and version control, as models became capable enough that structure mattered more than clever wording.' },
            { type: 'in-plain-terms', text: 'It started as folklore — people swapping phrases that seemed to work. As the models got better, the magic words stopped mattering and the structure did: say who, what, and in what format. That shift is what turned a collection of tricks into a craft you can teach.' },
          ],
          content: [
            '**Prompt engineering evolved from informal trial-and-error text manipulation around GPT-3 in 2020 to a structured discipline with named techniques, frameworks, and tools by 2026.** The arc spans five phases: early few-shot experiments, the ChatGPT moment that brought the skill into mainstream awareness, the development of structured reasoning techniques, the rise of automated prompt optimisation, and the current shift toward context design.',
            'The discipline did not emerge from a single paper or company. It grew from the overlap between research (few-shot learning, chain-of-thought reasoning, RAG), practitioner communities sharing prompt collections online, and the sudden public availability of powerful models that made good prompting immediately rewarding. By 2026, prompt engineering is no longer a niche trick — it is a baseline skill for anyone working with AI systems.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
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
          id: 'before-had-a-name',
          title: 'Before Prompt Engineering Had a Name (Pre-2020)',
          content: [
            'Before the term "prompt engineering" existed, researchers were already manipulating model inputs to elicit better outputs — they just did not call it that. Early transformer models like GPT-2 (2019, OpenAI) and BERT (2018, Google) were used through carefully chosen input text, but the practice was treated as part of data preprocessing, not a skill in its own right.',
            'GPT-2 was announced in February 2019 as a 1.5-billion-parameter model; OpenAI released smaller versions first and published the full model in November 2019. It could complete text in surprisingly coherent ways. Researchers and early practitioners noticed that the phrasing of an input dramatically changed the quality of the completion, but there was no framework, no terminology, and no community built around this observation yet. Prompts were inputs, not engineering artifacts.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020: GPT-3 and the Few-Shot Breakthrough',
          content: [
            '**The modern history of prompt engineering effectively begins with GPT-3.** In May 2020, OpenAI researchers published "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)" (Brown et al.), which described GPT-3, a 175-billion-parameter model. The paper showed that including a few examples of the desired task directly in the prompt — without any weight updates to the model — improved performance on many downstream tasks.',
            'This was the seed of prompt engineering as a discipline. Researchers and developers realised that the same model could be turned into a translator, a summariser, a code generator, or a question-answering system simply by changing how the prompt was written. The model did not need retraining — it needed a better prompt. That insight reframed what a prompt was: not just an input, but a design artifact.',
            'Brown et al. reported that few-shot performance generally improved as model size grew, with the 175B-parameter GPT-3 the strongest variant overall. That linked scale and prompt-based learning, and it made the quality of the prompt a variable that practitioners — not just researchers — could control.',
            'See [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot) for a practical guide to the technique GPT-3 made famous.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–Early 2022: From Prompt Tricks to a Recognised Skill',
          content: [
            'Between 2021 and early 2022, prompt crafting moved from research papers into practitioner communities. Researchers began describing the practice in print: Reynolds and McDonell\'s "[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)" (February 2021) argued that writing prompts for GPT-3 is a form of programming, and the survey "[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)" (Liu et al., July 2021) catalogued prompt-based methods across natural language processing. Practitioners meanwhile swapped working prompts in online communities.',
            'OpenAI\'s InstructGPT paper (Ouyang et al., March 2022) introduced models fine-tuned with human feedback (RLHF) that followed natural-language instructions far more reliably than the base GPT-3, which made prompt quality even more consequential. By mid-2022 it was clear that prompting was a transferable skill, not just a researcher\'s curiosity.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022: Chain-of-Thought and Reasoning Prompts',
          content: [
            '**The introduction of Chain-of-Thought (CoT) prompting in 2022 was the most significant technical development in the discipline\'s short history.** Wei et al. (Google) published "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)", showing that giving a model worked examples with intermediate reasoning steps improved performance on arithmetic, commonsense, and symbolic reasoning tasks. In one headline result, chain-of-thought prompting raised PaLM 540B\'s accuracy on the GSM8K grade-school maths benchmark from 17.9% to 56.9% (Table 1 of the paper) — a gain achieved by changing the prompt, with no additional model training. The implication was profound: the structure of the prompt could activate different reasoning behaviour, not just different facts.',
            'Related techniques followed quickly. Zhou et al. introduced [least-to-most prompting](https://arxiv.org/abs/2205.10625), which decomposed complex problems into a sequence of simpler sub-problems solved in order. These approaches turned prompt engineering from a formatting exercise into a tool for eliciting structured reasoning from models that had not been explicitly trained to reason that way. Prompting had become scaffolding for cognition.',
            'For the full technique guide, see [Chain-of-Thought Prompting: Make AI Show Its Reasoning](/prompt-engineering/chain-of-thought-prompting) and [Prompt Chaining: How to Break Big Tasks Into Winning Steps](/prompt-engineering/prompt-chaining).',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'Late 2022–2023: The ChatGPT Moment and the Prompt Engineer Job Title',
          callouts: [
            {
              type: 'did-you-know',
              label: 'Did You Know',
              text: 'A UBS analysis reported by Reuters estimated that ChatGPT reached about 100 million monthly active users in January 2023, roughly two months after launch. Reuters, citing Sensor Tower data, put TikTok at about nine months and Instagram at about two and a half years to reach the same mark. This speed of adoption is why prompt engineering went from research concept to mainstream skill almost overnight.',
            },
          ],
          content: [
            '**The release of ChatGPT on November 30, 2022, changed the public profile of prompt engineering overnight.** OpenAI CEO Sam Altman said on Twitter in early December 2022 that ChatGPT had passed one million users in five days, and a UBS analysis reported by Reuters estimated about 100 million monthly active users by January 2023. Within days, millions of people were experimenting with prompts and discovering that results varied enormously with how a request was phrased, and technology media began covering prompt engineering as a skill worth learning.',
            'By early 2023, "prompt engineer" had appeared as a job title: an Anthropic posting for a "Prompt Engineer and Librarian" advertised a salary range of $175,000–$335,000, as [reported by Fortune](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) in March 2023. Whether prompt engineering was a lasting career or a transitional role — part human-computer interface design, part subject-matter expertise, part quality assurance — was widely debated.',
            'No single person is credited with coining the term. Research papers were already describing prompt-based methods by 2021 (see above), and the phrase spread widely after ChatGPT. The [Wikipedia article on prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) gives an overview of the history.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023: GPT-4, Multimodal Prompting and Frameworks',
          content: [
            'The release of GPT-4 in March 2023 introduced image input alongside text, opening prompt engineering to visual tasks such as describing images, comparing diagrams, and annotating charts, and larger context windows (128K tokens with GPT-4 Turbo in November 2023) followed. Google\'s Gemini (December 2023) and Anthropic\'s Claude 3 models with vision (March 2024) added multimodal options from other vendors.',
            'The same period saw the formalisation of prompt engineering best practices. OpenAI published its [official prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering). Google Cloud published its own [prompt engineering guide](https://cloud.google.com/discover/what-is-prompt-engineering). Independent authors and teams published frameworks — such as CRAFT, CO-STAR, SPECS, RISEN, and TRACE — that gave practitioners repeatable templates for structuring prompts, reducing the reliance on trial and error.',
            'These frameworks represented the maturation of prompt engineering from a personal skill into a teachable, shareable practice. See [Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use) for a guide to choosing between them, and [Beyond Text: How to Prompt with Images](/prompt-engineering/beyond-text-how-to-prompt-with-images) for the multimodal dimension.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024: Automated Prompt Engineering and RAG',
          content: [
            'A striking development around 2023 was research showing that LLMs could optimise prompts as well as humans could. Zhou et al. posted "[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)" (APE) in November 2022; an LLM generated and scored candidate instructions and matched or beat human-written instructions on 19 of the 24 tasks they tested. The DSPy framework from Stanford researchers ([Khattab et al., October 2023](https://arxiv.org/abs/2310.03714)) took this further, letting developers describe what a prompt should accomplish and compiling the wording automatically.',
            'Simultaneously, Retrieval-Augmented Generation (RAG) — introduced by [Lewis et al. in 2020](https://arxiv.org/abs/2005.11401) while at Facebook AI Research (now Meta) — became a central pattern in production AI systems. RAG injected retrieved documents directly into the prompt context, grounding model outputs in real, up-to-date sources rather than requiring prompts to contain all the necessary facts. This shifted the emphasis in prompt engineering from "how do I make the model know this?" to "how do I structure the context so the model uses this correctly?"',
            'See [RAG Explained: How to Ground AI Answers in Real Data](/prompt-engineering/rag-explained) and [Self-Consistency Prompting: Generate Multiple Answers, Pick the One That\'s Right](/prompt-engineering/self-consistency-prompting) for coverage of the key techniques from this period.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025: From Prompt Engineering to Context Design',
          content: [
            'By 2024, a new framing began to displace the simple idea of "write a better prompt." Practitioners and researchers started referring to context engineering — the practice of orchestrating what goes into the full context window: the system prompt, retrieved documents, tool outputs, conversation history, and user input, all composed deliberately to guide model behaviour. The prompt was no longer a standalone artifact; it was one layer in a designed context.',
            'Several developments accelerated this shift. Meta\'s Llama 3 models (April 2024) made capable open-weights LLMs available for private deployment, shifting some prompt engineering from cloud APIs to local infrastructure. Google announced Gemini 1.5 Pro in February 2024 with a [1-million-token context window in limited preview](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/), making it practical to place entire codebases, books, or document collections in a single prompt. Multi-agent frameworks like LangChain and AutoGen turned prompting into orchestration — one prompt triggers another model, which triggers a tool, which returns context to the next prompt.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026 and Beyond: Prompt Engineering as a Core Literacy',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Pro Tip',
              text: 'The shift from "prompt engineering" to "context design" isn\'t just terminology — it changes what you optimize. Instead of tweaking the wording of your instruction, you design what goes into the context window: system prompt, retrieved documents, conversation history, tool outputs, and user input. The prompt is one layer, not the whole thing.',
            },
          ],
          content: [
            'By 2026, prompt engineering is increasingly described not as a niche job title but as a baseline literacy for knowledge workers who use AI tools: the ability to state a task, supply the right context, and specify the output you need.',
            'The role has split into two distinct tracks. The first is system and context design — the engineering of production AI systems where prompts form part of a larger architecture involving retrieval, agents, and evaluation pipelines. The second is everyday use — the ability to write clear, structured prompts that produce useful outputs without knowing the underlying architecture. Both tracks benefit from the same core principles: clear task specification, appropriate context, constraints, and output format.',
            'What has not changed, despite more capable models and automated tools, is the fundamental principle: the clearer and more structured the input, the more reliable and useful the output. The techniques, terminology, and tooling have matured, but the core insight from the GPT-3 era remains true in 2026.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'Timeline: Key Milestones in Prompt Engineering',
          content: 'The table below summarises the key milestones from 2018 to 2026 — the events, papers, and model releases that shaped how prompt engineering evolved into its current form.',
          columns: ['Year', 'Milestone', 'Why It Matters'],
          rows: [
            { 'Year': '2018–2019', 'Milestone': 'BERT (Google) and GPT-2 (OpenAI) released', 'Why It Matters': 'Showed that transformer models could be steered by input phrasing, but no formal discipline existed yet' },
            { 'Year': '2020', 'Milestone': 'GPT-3 and Brown et al., "Language Models are Few-Shot Learners"', 'Why It Matters': 'Established few-shot prompting: rewriting the prompt changes the model\'s behaviour without retraining' },
            { 'Year': '2022 (Jan)', 'Milestone': 'Chain-of-thought prompting (Wei et al.)', 'Why It Matters': 'Showed that prompt structure could elicit step-by-step reasoning' },
            { 'Year': '2022 (Mar)', 'Milestone': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Why It Matters': 'Models trained to follow instructions made prompt quality far more consequential' },
            { 'Year': '2022 (Nov)', 'Milestone': 'ChatGPT launch', 'Why It Matters': 'Brought prompting to a mass audience; millions began experimenting within days' },
            { 'Year': '2023 (Q1)', 'Milestone': '"Prompt engineer" postings draw attention; an Anthropic posting advertises $175K–$335K', 'Why It Matters': 'Made prompt engineering visible as a possible profession, though the role was widely debated' },
            { 'Year': '2023 (Mar)', 'Milestone': 'GPT-4 release with image input', 'Why It Matters': 'Extended prompting beyond text to images; 128K-token context followed with GPT-4 Turbo (Nov 2023)' },
            { 'Year': '2023', 'Milestone': 'Frameworks such as CRAFT, CO-STAR, SPECS, RISEN and TRACE; official guides from OpenAI and Google', 'Why It Matters': 'Turned individual craft into reusable, teachable templates' },
            { 'Year': '2022–2023', 'Milestone': 'APE (Zhou et al.) and DSPy (Khattab et al.): LLM-optimised prompts', 'Why It Matters': 'Showed that LLMs can write and tune prompts, making automated prompt optimisation practical' },
            { 'Year': '2024', 'Milestone': 'Llama 3 (Apr) and Gemini 1.5 Pro with a 1M-token context preview (Feb)', 'Why It Matters': 'Open-weights models for private deployment and very long contexts moved focus to context engineering' },
            { 'Year': '2024–2025', 'Milestone': 'Reasoning models: OpenAI o1 (Sep 2024), DeepSeek-R1 (Jan 2025), Claude 3.7 Sonnet extended thinking (Feb 2025)', 'Why It Matters': 'Models reason step by step internally, so explicit chain-of-thought prompting matters less on them' },
            { 'Year': '2025 (Apr)', 'Milestone': 'Llama 4 (mixture-of-experts); Llama 4 Scout supports a 10M-token context', 'Why It Matters': 'Open-weights models adopt mixture-of-experts designs and very long contexts' },
            { 'Year': '2026', 'Milestone': 'Context design and agent orchestration become standard practice', 'Why It Matters': 'Prompting is one layer in a composed context; system-level thinking is expected' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: 'How the History Shapes Today\'s Best Practices',
          content: [
            'Each phase of prompt engineering\'s evolution left a lasting deposit in current practice. The GPT-3 era gave us the core insight that model behaviour is shaped by input structure — not just content. The Chain-of-Thought era gave us explicit reasoning scaffolds: step-by-step prompting, prompt chaining, and tree-of-thought approaches. The framework era gave us reusable templates that encode best practices without requiring each practitioner to discover them from scratch.',
            'The RAG and context-design era gave us the understanding that prompts do not exist in isolation — they are composed with retrieved data, system instructions, and tool outputs to form a full context. And the automated-prompting era reminded us that the principles of good prompting are measurable: better-structured prompts produce better outputs in ways that can be evaluated and optimised systematically.',
          ],
          items: [
            'Reasoning techniques from 2022 → [Chain-of-Thought Prompting: Make AI Show Its Reasoning](/prompt-engineering/chain-of-thought-prompting) and [Tree of Thought & ReAct: Advanced Reasoning for Hard Problems](/prompt-engineering/tree-of-thought-and-react)',
            'Framework development from 2023 → [Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use)',
            'Context window growth → [Context Windows Explained: Why Your AI Forgets](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'Token economics across model generations → [Tokens, Costs & Limits: The Economics of AI Prompting](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG as a complement to pure prompting → [RAG Explained: How to Ground AI Answers in Real Data](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: The Evolution of Prompt Engineering',
          faqs: [
            {
              q: 'When did prompt engineering start?',
              a: 'The practice began with GPT-3 in May 2020, when Brown et al. showed that examples placed in the prompt could steer a model without retraining. Researchers described it as "prompt programming" in early 2021, chain-of-thought prompting followed in January 2022, and ChatGPT (November 2022) made it a mass skill.',
            },
            {
              q: 'Who first coined the term "prompt engineering"?',
              a: 'The exact origin is debated, and no single person is credited with inventing the term. Research papers were describing prompt-based methods by 2021, and the phrase gained wider use through 2022 and after ChatGPT. The Wikipedia article on prompt engineering gives an overview of the history.',
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
              a: 'No. The discipline has shifted, not disappeared. As models grow more capable, the work moves from syntax tricks and formatting hacks to context design — structuring inputs, managing retrieval, and composing tool outputs. The job title "Prompt Engineer" is narrowing, but the underlying skill is embedded in every role that uses AI: developer, analyst, marketer, researcher. Clear task framing, relevant context, and a specified output format still determine how useful a model\'s answer is.',
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

        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Misconceptions About Prompt Engineering',
          mistakes: [
            {
              mistake: 'Prompt engineering is only about writing better sentences.',
              problem: 'This overlooks the structural and contextual dimensions. A prompt\'s effectiveness depends not just on word choice but on role assignment (assigning the model a persona), constraint specification, output format, and example selection — all structural elements that have nothing to do with grammar.',
              fix: 'Think of prompt engineering as designing a system where the prompt is the interface. Invest in structure: assign roles ("You are a...", "Assume..."), specify constraints ("Do not...", "Must include..."), define output format, and provide examples. Structure often matters more than eloquence.',
            },
            {
              mistake: 'Better models make prompt engineering irrelevant.',
              problem: 'A more capable model is like a more capable person — it responds *better* to clear instructions, not worse. The gains from good prompting compound as model capability increases. What changes is the *kind* of prompting needed, not whether it\'s necessary.',
              fix: 'Assume prompting will remain central to AI work. What evolves is the level of detail and scaffolding needed. With weaker models, you may need explicit step-by-step structure. With stronger models, a clear one-line instruction may suffice — but that directness is itself a prompt engineering choice.',
            },
            {
              mistake: 'Automated prompt optimization tools will replace human prompt engineering.',
              problem: 'Automation tools like DSPy help optimize wording within defined objectives, but a human must still specify the objective, constraints, success criteria, and evaluation method. Automation removes iteration drudgery; it does not remove the need for structured thinking about what the model should do.',
              fix: 'Use automation as a tool, not a replacement. Start with a well-structured prompt designed by a human who understands the task. Use tools like DSPy to refine and optimize it. The human judgement about task structure remains irreplaceable.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            { title: 'Chain-of-Thought Prompting: Make AI Show Its Reasoning', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Few-Shot Prompting: The Power of Examples', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG Explained: How to Ground AI Answers in Real Data', url: '/prompt-engineering/rag-explained' },
            { title: 'Context Windows Explained: Why Your AI Forgets', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'Tokens, Costs & Limits: The Economics of AI Prompting', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — OpenAI GPT-3 paper introducing few-shot prompting as a paradigm.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — Prompts with intermediate reasoning steps; source of the GSM8K result from 17.9% to 56.9% (Table 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT: instruction following via human feedback (RLHF).',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE: LLMs generating and scoring prompts.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — Least-to-most prompting: decomposing problems into sub-problems.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — Paper introducing retrieval-augmented generation (RAG).',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — Early paper describing prompt writing as programming (2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — Survey of prompting methods in natural language processing (2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy: framework that compiles prompts automatically.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta, Llama 4 announcement (5 April 2025): mixture-of-experts, Scout with a 10M-token context.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic, Claude 3.7 Sonnet announcement (24 February 2025): extended thinking mode.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google, Gemini 1.5 announcement (15 February 2024): 1M-token context in limited preview.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1: reasoning through reinforcement learning (January 2025).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune (9 March 2023): report on the salary range of the Anthropic prompt-engineer posting.',
          ],
        },

      },
    },

    de: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Grundlagen',
      heroImage: '/images/prompt-engineering-history-overview-hero-de.webp',
      title: 'Wie sich Prompt Engineering entwickelt hat: Von GPT-3 zu Context Design',
      seoTitle: 'Ist Prompt Engineering tot? Entwicklung 2020–2026',
      intro: 'Prompt Engineering entwickelte sich von informellen Experimenten rund um GPT-3 im Jahr 2020 zu einer strukturierten Disziplin mit benannten Techniken und Frameworks bis 2026. Diese Zeitleiste verfolgt die Schlüsseldurchbrüche, Forschungsarbeiten und Wendepunkte, die Prompting zu einer Kernkompetenz machten.',
      metaDescription: 'Prompt Engineering ist nicht tot, sondern gewandelt: belegte Zeitleiste von GPT-3 Few-Shot (2020) über Chain-of-Thought und ChatGPT bis Context Design.',
      ogTitle: 'Wie sich Prompt Engineering entwickelte: Von GPT-3 zu Context Design (2020–2026)',
      twitterTitle: 'Wie Prompt Engineering in 6 Jahren von „besser formulieren“ zu Context Design wurde',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Beginner',
      audience: 'Wissensarbeiter und Entwickler, die die Geschichte von Prompt Engineering und KI-Techniken erlernen',
      primaryTerm: 'Prompt Engineering Geschichte',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**Prompt Engineering entwickelte sich von informellem Ausprobieren rund um GPT-3 (2020) zu einer strukturierten Disziplin mit benannten Frameworks, Techniken und Werkzeugen bis 2026 und durchlief fünf Phasen: Few-Shot-Lernen, Chain-of-Thought-Reasoning, den ChatGPT-Durchbruch, automatisierte Optimierung und Context Design.**',
      quickFacts: [
        '**GPT-3 (2020):** Das Modell mit 175 Milliarden Parametern führte Few-Shot-Prompting als Paradigmenwechsel ein',
        '**Chain-of-Thought (2022):** Wei et al. zeigten, dass die Prompt-Struktur schrittweises Schlussfolgern aktivieren kann; PaLM 540B stieg bei GSM8K von 17,9 % auf 56,9 %',
        '**ChatGPT (Nov. 2022):** Eine Million Nutzer in 5 Tagen (laut OpenAI-CEO Sam Altman); geschätzt 100 Millionen monatlich aktive Nutzer bis Januar 2023 (UBS, laut Reuters)',
        '**Arbeitsmarkt (2023):** Eine Anthropic-Stelle „Prompt Engineer and Librarian“ nannte 175.000–335.000 US-Dollar (Fortune, März 2023)',
        '**GPT-4 & Frameworks (2023):** Bildeingaben und veröffentlichte Frameworks (CO-STAR, SPECS, RISEN) machten Prompting zu einer lehrbaren Disziplin',
        '**Context Design (2024–2026):** Open-Weights-LLMs, Kontextfenster ab 1 Mio. Token und Agenten-Orchestrierung verlagerten den Fokus vom Feinschliff einzelner Prompts auf Context Engineering auf Systemebene',
      ],
      toc: [
        { label: 'Die wichtigsten Erkenntnisse', anchor: 'key-takeaways' },
        { label: 'Bevor Prompt Engineering einen Namen hatte (vor 2020)', anchor: 'before-had-a-name' },
        { label: '2020: GPT-3 und der Few-Shot-Durchbruch', anchor: 'gpt-3-few-shot' },
        { label: '2021 – Anfang 2022: Von Prompt-Tricks zu einer anerkannten Fähigkeit', anchor: 'tricks-to-skill' },
        { label: '2022: Chain-of-Thought und Reasoning-Prompts', anchor: 'chain-of-thought' },
        { label: 'Ende 2022–2023: Der ChatGPT-Moment und der Berufsbezeichnung „Prompt Engineer"', anchor: 'chatgpt-moment' },
        { label: '2023: GPT-4, multimodales Prompting und Frameworks', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024: Automatisiertes Prompt Engineering und RAG', anchor: 'automated-rag' },
        { label: '2024–2025: Von Prompt Engineering zu Kontext-Design', anchor: 'context-design' },
        { label: '2026 und darüber hinaus: Prompt Engineering als Kernkompetenz', anchor: 'beyond-2026' },
        { label: 'Zeitleiste: Wichtige Meilensteine im Prompt Engineering', anchor: 'timeline' },
        { label: 'Wie die Geschichte die heutigen Best Practices prägt', anchor: 'today-practice' },
        { label: 'Häufige Missverständnisse über Prompt Engineering', anchor: 'common-mistakes' },
        { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
        { label: 'FAQ: Die Evolution des Prompt Engineerings', anchor: 'faq' },
        { label: 'Quellen', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Ist Prompt Engineering tot? Entwicklung 2020–2026',
        description: 'Prompt Engineering ist nicht tot, sondern gewandelt: belegte Zeitleiste von GPT-3 Few-Shot (2020) über Chain-of-Thought und ChatGPT bis Context Design.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/de/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'de',
        keywords: ['Prompt-Engineering-Geschichte', 'GPT-3 Few-Shot-Lernen', 'Chain-of-Thought-Prompting', 'ChatGPT', 'Context Engineering', 'Prompt-Engineering-Zeitleiste', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Wissensarbeiter und Entwickler, die die Geschichte von Prompt Engineering und KI-Techniken erlernen' },
        about: [
          { '@type': 'Thing', name: 'Geschichte des Prompt Engineerings' },
          { '@type': 'Thing', name: 'Große Sprachmodelle' },
          { '@type': 'Thing', name: 'KI-Techniken und Frameworks' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          { '@type': 'Question', name: 'Seit wann gibt es Prompt Engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Die Praxis begann mit GPT-3 im Mai 2020, als Brown et al. zeigten, dass Beispiele im Prompt ein Modell ohne Neutraining steuern können. Anfang 2021 beschrieben Forschende dies als „Prompt Programming“, im Januar 2022 folgte Chain-of-Thought-Prompting, und ChatGPT (November 2022) machte es zur Massenfähigkeit.' } },
          { '@type': 'Question', name: 'Wer prägte als Erster den Begriff „Prompt Engineering"?', acceptedAnswer: { '@type': 'Answer', text: 'Der genaue Ursprung ist umstritten, und keine einzelne Person gilt als Erfinder des Begriffs. Forschungsarbeiten beschrieben promptbasierte Methoden bereits 2021, und der Ausdruck wurde 2022 und nach ChatGPT breiter verwendet. Der Wikipedia-Artikel zu Prompt Engineering gibt einen Überblick über die Geschichte.' } },
          { '@type': 'Question', name: 'Warum explodierte Prompt Engineering in der Popularität nach ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT war das erste Allzweck-KI-Modell, das Millionen von Nicht-Forschern sofort, kostenlos, ohne Code schreiben zu müssen, nutzen konnten. Die Lücke zwischen einem gut gestalteten Prompt und einem vagen war sichtbar und sofort folgenreich – bessere Prompts lieferten spürbar bessere Ausgaben. Diese Rückkopplungsschleife, die von Millionen von Menschen gleichzeitig erlebt wurde, verwandelte Prompt Engineering von einem Forschungskonzept in eine Massenfähigkeit.' } },
          { '@type': 'Question', name: 'Wie beeinflussten Forschungsarbeiten reale Prompting-Techniken?', acceptedAnswer: { '@type': 'Answer', text: 'Die Übertragung war für KI-Forschung ungewöhnlich schnell. Chain-of-Thought-Prompting (Wei et al., 2022) entwickelte sich innerhalb von Monaten von einem akademischen Paper zu einer weit verbreiteten Praktikertechnik, teilweise weil es kein Tooling erforderte – nur eine Änderung in der Art, wie man den Prompt schrieb. Few-Shot-Prompting aus dem GPT-3-Paper (Brown et al., 2020) war sofort von jedem mit API-Zugang adaptierbar. Die Zugänglichkeit der Techniken beschleunigte ihre Verbreitung.' } },
          { '@type': 'Question', name: 'Wird Prompt Engineering weniger wichtig, wenn Modelle sich verbessern?', acceptedAnswer: { '@type': 'Answer', text: 'Nein – leistungsfähigere Modelle reagieren besser auf gut strukturierte Prompts, nicht weniger. Der Gewinn aus gutem Prompting steigt, wenn das Modell präzisen Anweisungen besser folgen kann. Was sich verändert hat, ist das Niveau des Prompt Engineerings, das für einfache Aufgaben erforderlich ist: Gesprächsfragen erfordern jetzt weniger Ausarbeitung als 2021. Aber für komplexe, produktionsreife Ausgaben bleibt strukturiertes Prompting der zuverlässigste verfügbare Hebel.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen Prompt Engineering und Kontext-Engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt Engineering bezieht sich typischerweise auf das Gestalten der Texteingabe für ein Modell, um seine Ausgabe zu verbessern. Kontext-Engineering ist ein breiteres, neueres Konzept, das sich auf das Orchestrieren von allem im Kontextfenster des Modells bezieht: den System-Prompt, abgerufene Dokumente, Gesprächsverlauf, Werkzeugausgaben und Benutzereingaben – alle bewusst zusammengestellt. Kontext-Engineering behandelt den Prompt als eine Komponente in einem gestalteten System, nicht als eigenständiges Artefakt.' } },
          { '@type': 'Question', name: 'Werden automatisierte Werkzeuge die Notwendigkeit eliminieren, Prompt Engineering zu verstehen?', acceptedAnswer: { '@type': 'Answer', text: 'Automatisierte Werkzeuge wie DSPy können Prompt-Formulierungen innerhalb definierter Ziele optimieren, erfordern jedoch, dass ein Mensch festlegt, was das Ziel ist, welche Einschränkungen gelten und wie Erfolg bewertet wird. Das Verständnis von Prompt-Engineering-Prinzipien bleibt notwendig, um diese Werkzeuge effektiv einzusetzen – und um zu diagnostizieren, wenn sie das falsche Ergebnis liefern. Automatisierung beseitigt einen Teil der manuellen Iteration; sie beseitigt nicht die Notwendigkeit strukturierten Denkens.' } },
          { '@type': 'Question', name: 'Ist Prompt Engineering im Jahr 2026 tot?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Die Disziplin hat sich verschoben, nicht aufgelöst. Je leistungsfähiger die Modelle werden, desto mehr verlagert sich die Arbeit von Syntax-Tricks und Formatierungskniffen zum Context Design – Eingaben strukturieren, Retrieval steuern und Tool-Ausgaben zusammenführen. Die Berufsbezeichnung „Prompt Engineer“ wird enger, doch die zugrunde liegende Fähigkeit steckt in jeder Rolle, die KI nutzt: Entwickler, Analysten, Marketer, Forschende. Klare Aufgabenstellung, passender Kontext und ein festgelegtes Ausgabeformat bestimmen weiterhin, wie nützlich die Antwort eines Modells ist.' } },
          { '@type': 'Question', name: 'Muss ich Prompt Engineering lernen, wenn KI-Modelle immer besser werden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja – aber der Fokus verschiebt sich mit jeder Generation. Bessere Modelle reduzieren den Bedarf an aufwändigen Workarounds und erhöhen den Nutzen klarer Absicht, strukturierten Kontexts und gut gewählter Beispiele. Die Grundlagen – Rolle, Kontext, Format, Einschränkungen – bleiben über jede Modellgeneration hinweg stabil. Wer sie jetzt lernt, akkumuliert eine Fähigkeit, die sich aufbaut statt zu verfallen.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt Engineering ändert, wie man mit einem Modell kommuniziert, ohne seine Gewichte zu verändern. Fine-Tuning trainiert ein Modell auf neuen Daten und ändert sein Verhalten dauerhaft. Prompt Engineering ist schneller, günstiger und reversibel – Iteration in Minuten ist möglich. Fine-Tuning ist besser, wenn das Zielverhalten konsistent, hochvolumig oder im Prompt nicht zuverlässig beschreibbar ist. Die meisten Teams beginnen mit Prompting und wechseln zum Fine-Tuning erst, wenn Prompting an seine Grenzen stößt.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Zeitleiste der Prompt-Engineering-Entwicklung: 2018–2026',
        description: 'Eine chronologische Zeitleiste der wichtigsten Meilensteine, Forschungsarbeiten und Modellveröffentlichungen, die die Entwicklung des Prompt Engineerings von 2018 bis 2026 geprägt haben.',
        url: 'https://www.promptquorum.com/de/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'de',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT (Google) und GPT-2 (OpenAI) veröffentlicht (2018–2019)', description: 'Zeigte, dass sich Transformer-Modelle über die Eingabeformulierung steuern lassen, aber es gab noch keine formale Disziplin' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 und Brown et al., „Language Models are Few-Shot Learners“ (2020)', description: 'Etablierte Few-Shot-Prompting: Ein umformulierter Prompt ändert das Modellverhalten ohne Neutraining' },
          { '@type': 'ListItem', position: 3, name: 'Chain-of-Thought-Prompting (Wei et al.) (2022 (Jan.))', description: 'Zeigte, dass die Prompt-Struktur schrittweises Schlussfolgern auslösen kann' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang et al., OpenAI) (2022 (März))', description: 'Auf Befolgen von Anweisungen trainierte Modelle machten die Prompt-Qualität weit folgenreicher' },
          { '@type': 'ListItem', position: 5, name: 'Start von ChatGPT (2022 (Nov.))', description: 'Brachte Prompting zu einem Massenpublikum; Millionen begannen binnen Tagen zu experimentieren' },
          { '@type': 'ListItem', position: 6, name: 'Stellen für „Prompt Engineers“ erregen Aufmerksamkeit; eine Anthropic-Stelle nennt 175.000–335.000 US-Dollar (2023 (Q1))', description: 'Machte Prompt Engineering als möglichen Beruf sichtbar, wobei die Rolle viel diskutiert wurde' },
          { '@type': 'ListItem', position: 7, name: 'GPT-4 mit Bildeingabe (2023 (März))', description: 'Erweiterte Prompting über Text hinaus auf Bilder; 128.000 Token Kontext folgten mit GPT-4 Turbo (Nov. 2023)' },
          { '@type': 'ListItem', position: 8, name: 'Frameworks wie CRAFT, CO-STAR, SPECS, RISEN und TRACE; offizielle Leitfäden von OpenAI und Google (2023)', description: 'Machte aus individuellem Handwerk wiederverwendbare, lehrbare Vorlagen' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou et al.) und DSPy (Khattab et al.): von LLMs optimierte Prompts (2022–2023)', description: 'Zeigte, dass LLMs Prompts schreiben und abstimmen können; automatische Prompt-Optimierung wurde praktikabel' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3 (Apr.) und Gemini 1.5 Pro mit 1-Mio.-Token-Kontext in der Vorschau (Feb.) (2024)', description: 'Open-Weights-Modelle für den privaten Betrieb und sehr lange Kontexte verlagerten den Fokus auf Context Engineering' },
          { '@type': 'ListItem', position: 11, name: 'Reasoning-Modelle: OpenAI o1 (Sep. 2024), DeepSeek-R1 (Jan. 2025), Claude 3.7 Sonnet mit Extended Thinking (Feb. 2025) (2024–2025)', description: 'Die Modelle denken intern Schritt für Schritt, daher ist explizites Chain-of-Thought-Prompting bei ihnen weniger wichtig' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4 (Mixture-of-Experts); Llama 4 Scout unterstützt 10 Mio. Token Kontext (2025 (Apr.))', description: 'Open-Weights-Modelle übernehmen Mixture-of-Experts-Architekturen und sehr lange Kontexte' },
          { '@type': 'ListItem', position: 13, name: 'Context Design und Agenten-Orchestrierung werden Standardpraxis (2026)', description: 'Prompting ist eine Schicht in einem komponierten Kontext; Denken auf Systemebene wird erwartet' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: 'Wie sich Prompt Engineering entwickelt hat: Ein kurzer Überblick',
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt Engineering entwickelte sich von Formulierungstricks nach Versuch und Irrtum zu einer dokumentierten Disziplin aus wiederverwendbaren Mustern, Evaluation und Versionierung, weil bei leistungsfähigeren Modellen die Struktur wichtiger wurde als die geschickte Wortwahl.' },
            { type: 'in-plain-terms', text: 'Am Anfang war es Folklore: Man tauschte Formulierungen aus, die zu funktionieren schienen. Mit besseren Modellen verloren die Zauberworte an Bedeutung — entscheidend wurde die Struktur: wer, was, in welchem Format. Genau dieser Wandel machte aus einer Trickkiste ein lehrbares Handwerk.' },
          ],
          content: [
            '**Prompt Engineering entwickelte sich von informellem Trial-and-Error-Textmanipulation rund um GPT-3 im Jahr 2020 zu einer strukturierten Disziplin mit benannten Techniken, Frameworks und Werkzeugen bis 2026.** Der Bogen umfasst fünf Phasen: frühe Few-Shot-Experimente, den ChatGPT-Moment, der die Fähigkeit in das Mainstream-Bewusstsein brachte, die Entwicklung strukturierter Denktechniken, den Aufstieg der automatisierten Prompt-Optimierung und die aktuelle Verschiebung hin zum Kontext-Design.',
            'Die Disziplin entstand nicht aus einem einzigen Paper oder Unternehmen. Sie wuchs aus der Überschneidung von Forschung (Few-Shot-Learning, Chain-of-Thought-Reasoning, RAG), Praktikergemeinschaften, die Prompt-Sammlungen online teilten, und der plötzlichen öffentlichen Verfügbarkeit leistungsfähiger Modelle, die gutes Prompting sofort lohnend machte. Bis 2026 ist Prompt Engineering kein Nischentrick mehr – es ist eine Basisfähigkeit für jeden, der mit KI-Systemen arbeitet.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
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
          id: 'before-had-a-name',
          title: 'Bevor Prompt Engineering einen Namen hatte (vor 2020)',
          content: [
            'Bevor es den Begriff „Prompt Engineering“ gab, manipulierten Forschende bereits Modelleingaben, um bessere Ausgaben zu erzielen – sie nannten es nur nicht so. Frühe Transformer-Modelle wie GPT-2 (2019, OpenAI) und BERT (2018, Google) wurden über sorgfältig gewählte Eingabetexte genutzt, doch die Praxis galt als Teil der Datenvorverarbeitung und nicht als eigenständige Fähigkeit.',
            'GPT-2 wurde im Februar 2019 als Modell mit 1,5 Milliarden Parametern angekündigt; OpenAI veröffentlichte zunächst kleinere Versionen und im November 2019 das vollständige Modell. Es konnte Texte erstaunlich kohärent fortsetzen. Forschende und frühe Anwender bemerkten, dass die Formulierung einer Eingabe die Qualität der Fortsetzung stark veränderte, doch es gab noch kein Framework, keine Terminologie und keine Community rund um diese Beobachtung. Prompts waren Eingaben, keine Engineering-Artefakte.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020: GPT-3 und der Few-Shot-Durchbruch',
          content: [
            '**Die moderne Geschichte des Prompt Engineerings beginnt faktisch mit GPT-3.** Im Mai 2020 veröffentlichten OpenAI-Forschende „[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)“ (Brown et al.), das GPT-3 beschreibt, ein Modell mit 175 Milliarden Parametern. Die Arbeit zeigte, dass einige Beispiele der gewünschten Aufgabe direkt im Prompt – ohne jede Aktualisierung der Modellgewichte – die Leistung bei vielen Folgeaufgaben verbesserten.',
            'Das war der Keim des Prompt Engineerings als Disziplin. Forschende und Entwickler erkannten, dass dasselbe Modell allein durch die Formulierung des Prompts zum Übersetzer, Zusammenfasser, Code-Generator oder Frage-Antwort-System werden konnte. Das Modell musste nicht neu trainiert werden – es brauchte einen besseren Prompt. Diese Erkenntnis veränderte, was ein Prompt ist: nicht nur eine Eingabe, sondern ein Gestaltungsartefakt.',
            'Brown et al. berichteten, dass die Few-Shot-Leistung im Allgemeinen mit der Modellgröße stieg und GPT-3 mit 175 Milliarden Parametern insgesamt die stärkste Variante war. Das verband Skalierung und promptbasiertes Lernen und machte die Qualität des Prompts zu einer Variable, die auch Praktiker – nicht nur Forschende – steuern konnten.',
            'Eine praktische Anleitung zu der Technik, die GPT-3 bekannt machte, finden Sie unter [Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot).',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021 – Anfang 2022: Von Prompt-Tricks zu einer anerkannten Fähigkeit',
          content: [
            'Zwischen 2021 und Anfang 2022 wanderte das Prompt-Handwerk aus Forschungsarbeiten in Praktiker-Communities. Forschende begannen, die Praxis schriftlich zu beschreiben: Reynolds und McDonell argumentierten in „[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)“ (Februar 2021), dass das Schreiben von Prompts für GPT-3 eine Form des Programmierens sei, und der Überblick „[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)“ (Liu et al., Juli 2021) katalogisierte promptbasierte Methoden in der Sprachverarbeitung. Praktiker tauschten unterdessen funktionierende Prompts in Online-Communities aus.',
            'OpenAIs InstructGPT-Arbeit (Ouyang et al., März 2022) stellte Modelle vor, die mit menschlichem Feedback (RLHF) feinabgestimmt wurden und natürlichsprachlichen Anweisungen weit zuverlässiger folgten als das Basis-GPT-3. Damit wurde die Prompt-Qualität noch folgenreicher. Mitte 2022 war klar, dass Prompting eine übertragbare Fähigkeit ist und nicht nur eine Marotte von Forschenden.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022: Chain-of-Thought und Reasoning-Prompts',
          content: [
            '**Die Einführung des Chain-of-Thought-Promptings (CoT) im Jahr 2022 war die bedeutendste technische Entwicklung in der kurzen Geschichte der Disziplin.** Wei et al. (Google) veröffentlichten „[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)“ und zeigten, dass Beispiele mit Zwischenschritten im Prompt die Leistung bei Arithmetik-, Alltagslogik- und symbolischen Aufgaben verbesserten. In einem Spitzenergebnis stieg die Genauigkeit von PaLM 540B auf dem GSM8K-Benchmark für Grundschulmathematik durch Chain-of-Thought-Prompting von 17,9 % auf 56,9 % (Tabelle 1 der Arbeit) – ein Gewinn allein durch den geänderten Prompt, ohne zusätzliches Training. Die Folgerung war weitreichend: Die Struktur des Prompts konnte anderes Denkverhalten aktivieren, nicht nur andere Fakten.',
            'Verwandte Techniken folgten rasch. Zhou et al. führten das [Least-to-Most-Prompting](https://arxiv.org/abs/2205.10625) ein, das komplexe Probleme in eine Folge einfacherer Teilprobleme zerlegt, die nacheinander gelöst werden. Diese Ansätze machten Prompt Engineering von einer Formatierungsübung zu einem Werkzeug, mit dem sich strukturiertes Schlussfolgern aus Modellen herauskitzeln ließ, die nicht explizit darauf trainiert waren. Prompting wurde zum Gerüst für Kognition.',
            'Den vollständigen Technikleitfaden finden Sie unter [Chain-of-Thought Prompting: Lassen Sie die KI ihr Denken zeigen](/prompt-engineering/chain-of-thought-prompting) und [Prompt Chaining: Komplexe Aufgaben in Fokussierte Schritte Zerlegen](/prompt-engineering/prompt-chaining).',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'Ende 2022–2023: Der ChatGPT-Moment und der Berufsbezeichnung „Prompt Engineer"',
          callouts: [
            {
              type: 'did-you-know',
              label: 'Wussten Sie schon?',
              text: 'Eine von Reuters zitierte UBS-Analyse schätzte, dass ChatGPT im Januar 2023, etwa zwei Monate nach dem Start, rund 100 Millionen monatlich aktive Nutzer erreichte. Laut Reuters (unter Berufung auf Sensor-Tower-Daten) brauchte TikTok dafür etwa neun Monate und Instagram etwa zweieinhalb Jahre. Diese Geschwindigkeit erklärt, warum Prompt Engineering fast über Nacht vom Forschungskonzept zur Massenfähigkeit wurde.',
            },
          ],
          content: [
            '**Die Veröffentlichung von ChatGPT am 30. November 2022 veränderte das öffentliche Profil des Prompt Engineerings über Nacht.** OpenAI-CEO Sam Altman schrieb Anfang Dezember 2022 auf Twitter, ChatGPT habe in fünf Tagen eine Million Nutzer überschritten, und eine von Reuters berichtete UBS-Analyse schätzte bis Januar 2023 rund 100 Millionen monatlich aktive Nutzer. Binnen Tagen experimentierten Millionen Menschen mit Prompts und stellten fest, dass die Ergebnisse stark von der Formulierung abhingen; Technikmedien begannen, Prompt Engineering als lohnende Fähigkeit zu behandeln.',
            'Anfang 2023 tauchte „Prompt Engineer“ als Berufsbezeichnung auf: Eine Anthropic-Stelle als „Prompt Engineer and Librarian“ nannte eine Gehaltsspanne von 175.000–335.000 US-Dollar, [wie Fortune im März 2023 berichtete](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/). Ob Prompt Engineering ein dauerhafter Beruf oder eine Übergangsrolle war – teils Mensch-Computer-Schnittstellendesign, teils Fachexpertise, teils Qualitätssicherung –, wurde breit diskutiert.',
            'Keine einzelne Person gilt als Urheber des Begriffs. Forschungsarbeiten beschrieben promptbasierte Methoden bereits 2021 (siehe oben), und der Ausdruck verbreitete sich nach ChatGPT stark. Der [Wikipedia-Artikel zu Prompt Engineering](https://en.wikipedia.org/wiki/Prompt_engineering) gibt einen Überblick über die Geschichte.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023: GPT-4, multimodales Prompting und Frameworks',
          content: [
            'Mit GPT-4 im März 2023 kamen Bildeingaben zusätzlich zu Text hinzu. Das öffnete Prompt Engineering für visuelle Aufgaben wie Bilder beschreiben, Diagramme vergleichen und Grafiken kommentieren; größere Kontextfenster (128.000 Token mit GPT-4 Turbo im November 2023) folgten. Googles Gemini (Dezember 2023) und Anthropics Claude-3-Modelle mit Bildverständnis (März 2024) brachten multimodale Optionen anderer Anbieter.',
            'In dieser Zeit wurden auch Best Practices formalisiert. OpenAI veröffentlichte seinen [offiziellen Prompt-Engineering-Leitfaden](https://developers.openai.com/api/docs/guides/prompt-engineering). Google Cloud veröffentlichte einen eigenen [Leitfaden zum Prompt Engineering](https://cloud.google.com/discover/what-is-prompt-engineering). Unabhängige Autoren und Teams stellten Frameworks wie CRAFT, CO-STAR, SPECS, RISEN und TRACE vor, die wiederholbare Vorlagen für den Prompt-Aufbau lieferten und das Ausprobieren verringerten.',
            'Diese Frameworks markierten die Reifung des Prompt Engineerings von einer persönlichen Fähigkeit zu einer lehr- und teilbaren Praxis. Hilfe bei der Auswahl finden Sie unter [Welches Prompt-Framework ist das richtige für Sie? (2026)](/prompt-engineering/which-prompt-framework-should-you-use), die multimodale Seite unter [Jenseits von Text: Wie man mit Bildern promptet](/prompt-engineering/beyond-text-how-to-prompt-with-images).',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024: Automatisiertes Prompt Engineering und RAG',
          content: [
            'Eine auffällige Entwicklung um 2023 war die Forschung, die zeigte, dass LLMs Prompts ebenso gut optimieren können wie Menschen. Zhou et al. stellten im November 2022 „[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)“ (APE) vor: Ein LLM erzeugte und bewertete Kandidaten-Anweisungen und erreichte oder übertraf von Menschen geschriebene Anweisungen bei 19 von 24 getesteten Aufgaben. Das DSPy-Framework von Stanford-Forschenden ([Khattab et al., Oktober 2023](https://arxiv.org/abs/2310.03714)) ging weiter: Entwickler beschreiben, was ein Prompt leisten soll, und die Formulierung wird automatisch kompiliert.',
            'Gleichzeitig wurde Retrieval-Augmented Generation (RAG) – 2020 von [Lewis et al.](https://arxiv.org/abs/2005.11401) bei Facebook AI Research (heute Meta) vorgestellt – zu einem zentralen Muster produktiver KI-Systeme. RAG fügte abgerufene Dokumente direkt in den Prompt-Kontext ein und verankerte Antworten in echten, aktuellen Quellen, statt alle nötigen Fakten im Prompt zu verlangen. Dadurch verschob sich der Schwerpunkt von „Wie bringe ich dem Modell dieses Wissen bei?“ zu „Wie strukturiere ich den Kontext, damit das Modell ihn richtig nutzt?“',
            'Zu den wichtigsten Techniken dieser Zeit siehe [RAG erklärt: KI-Antworten in echten Daten verankern (2026)](/prompt-engineering/rag-explained) und [Self-Consistency Prompting: Mehrfache Antworten generieren, Konsens auswählen](/prompt-engineering/self-consistency-prompting).',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025: Von Prompt Engineering zu Kontext-Design',
          content: [
            'Ab 2024 verdrängte ein neues Leitbild die einfache Idee „schreib einen besseren Prompt“. Praktiker und Forschende sprachen zunehmend von Context Engineering – dem gezielten Zusammenstellen des gesamten Kontextfensters: Systemprompt, abgerufene Dokumente, Tool-Ausgaben, Gesprächsverlauf und Nutzereingabe, alles bewusst komponiert, um das Modellverhalten zu steuern. Der Prompt war kein eigenständiges Artefakt mehr, sondern eine Schicht in einem gestalteten Kontext.',
            'Mehrere Entwicklungen beschleunigten diesen Wandel. Metas Llama-3-Modelle (April 2024) machten leistungsfähige Open-Weights-LLMs für den privaten Betrieb verfügbar und verlagerten einen Teil des Prompt Engineerings von Cloud-APIs auf lokale Infrastruktur. Google kündigte im Februar 2024 Gemini 1.5 Pro mit einem [Kontextfenster von 1 Million Token in einer begrenzten Vorschau](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) an, sodass sich ganze Codebasen, Bücher oder Dokumentsammlungen in einen einzigen Prompt packen ließen. Multi-Agenten-Frameworks wie LangChain und AutoGen machten aus Prompting Orchestrierung: Ein Prompt löst ein weiteres Modell aus, das ein Tool aufruft, das Kontext an den nächsten Prompt zurückgibt.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026 und darüber hinaus: Prompt Engineering als Kernkompetenz',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Profi-Tipp',
              text: 'Der Wechsel von „Prompt Engineering“ zu „Context Design“ ist nicht nur Terminologie – er verändert, was Sie optimieren. Statt den Wortlaut Ihrer Anweisung zu verfeinern, gestalten Sie, was ins Kontextfenster gelangt: Systemprompt, abgerufene Dokumente, Gesprächsverlauf, Tool-Ausgaben und Nutzereingabe. Der Prompt ist eine Schicht, nicht das Ganze.',
            },
          ],
          content: [
            'Bis 2026 wird Prompt Engineering zunehmend nicht mehr als Nischen-Berufsbezeichnung beschrieben, sondern als Grundkompetenz für Wissensarbeiter, die KI-Werkzeuge nutzen: eine Aufgabe formulieren, den passenden Kontext liefern und das gewünschte Ausgabeformat festlegen.',
            'Die Rolle hat sich in zwei Stränge geteilt. Der erste ist System- und Kontextdesign – die Entwicklung produktiver KI-Systeme, in denen Prompts Teil einer größeren Architektur mit Retrieval, Agenten und Evaluierungspipelines sind. Der zweite ist die alltägliche Nutzung – die Fähigkeit, klare, strukturierte Prompts zu schreiben, die ohne Kenntnis der zugrunde liegenden Architektur nützliche Ergebnisse liefern. Beide Stränge profitieren von denselben Grundprinzipien: klare Aufgabenbeschreibung, passender Kontext, Randbedingungen und Ausgabeformat.',
            'Was sich trotz leistungsfähigerer Modelle und automatisierter Werkzeuge nicht geändert hat, ist das Grundprinzip: Je klarer und strukturierter die Eingabe, desto verlässlicher und nützlicher die Ausgabe. Techniken, Terminologie und Tooling sind gereift, aber die Kernerkenntnis aus der GPT-3-Ära gilt auch 2026.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'Zeitleiste: Wichtige Meilensteine im Prompt Engineering',
          content: 'Die folgende Tabelle fasst die wichtigsten Meilensteine von 2018 bis 2026 zusammen – die Ereignisse, Arbeiten und Modellveröffentlichungen, die Prompt Engineering zu seiner heutigen Form geführt haben.',
          columns: ['Jahr', 'Meilenstein', 'Warum es wichtig ist'],
          rows: [
            { 'Jahr': '2018–2019', 'Meilenstein': 'BERT (Google) und GPT-2 (OpenAI) veröffentlicht', 'Warum es wichtig ist': 'Zeigte, dass sich Transformer-Modelle über die Eingabeformulierung steuern lassen, aber es gab noch keine formale Disziplin' },
            { 'Jahr': '2020', 'Meilenstein': 'GPT-3 und Brown et al., „Language Models are Few-Shot Learners“', 'Warum es wichtig ist': 'Etablierte Few-Shot-Prompting: Ein umformulierter Prompt ändert das Modellverhalten ohne Neutraining' },
            { 'Jahr': '2022 (Jan.)', 'Meilenstein': 'Chain-of-Thought-Prompting (Wei et al.)', 'Warum es wichtig ist': 'Zeigte, dass die Prompt-Struktur schrittweises Schlussfolgern auslösen kann' },
            { 'Jahr': '2022 (März)', 'Meilenstein': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Warum es wichtig ist': 'Auf Befolgen von Anweisungen trainierte Modelle machten die Prompt-Qualität weit folgenreicher' },
            { 'Jahr': '2022 (Nov.)', 'Meilenstein': 'Start von ChatGPT', 'Warum es wichtig ist': 'Brachte Prompting zu einem Massenpublikum; Millionen begannen binnen Tagen zu experimentieren' },
            { 'Jahr': '2023 (Q1)', 'Meilenstein': 'Stellen für „Prompt Engineers“ erregen Aufmerksamkeit; eine Anthropic-Stelle nennt 175.000–335.000 US-Dollar', 'Warum es wichtig ist': 'Machte Prompt Engineering als möglichen Beruf sichtbar, wobei die Rolle viel diskutiert wurde' },
            { 'Jahr': '2023 (März)', 'Meilenstein': 'GPT-4 mit Bildeingabe', 'Warum es wichtig ist': 'Erweiterte Prompting über Text hinaus auf Bilder; 128.000 Token Kontext folgten mit GPT-4 Turbo (Nov. 2023)' },
            { 'Jahr': '2023', 'Meilenstein': 'Frameworks wie CRAFT, CO-STAR, SPECS, RISEN und TRACE; offizielle Leitfäden von OpenAI und Google', 'Warum es wichtig ist': 'Machte aus individuellem Handwerk wiederverwendbare, lehrbare Vorlagen' },
            { 'Jahr': '2022–2023', 'Meilenstein': 'APE (Zhou et al.) und DSPy (Khattab et al.): von LLMs optimierte Prompts', 'Warum es wichtig ist': 'Zeigte, dass LLMs Prompts schreiben und abstimmen können; automatische Prompt-Optimierung wurde praktikabel' },
            { 'Jahr': '2024', 'Meilenstein': 'Llama 3 (Apr.) und Gemini 1.5 Pro mit 1-Mio.-Token-Kontext in der Vorschau (Feb.)', 'Warum es wichtig ist': 'Open-Weights-Modelle für den privaten Betrieb und sehr lange Kontexte verlagerten den Fokus auf Context Engineering' },
            { 'Jahr': '2024–2025', 'Meilenstein': 'Reasoning-Modelle: OpenAI o1 (Sep. 2024), DeepSeek-R1 (Jan. 2025), Claude 3.7 Sonnet mit Extended Thinking (Feb. 2025)', 'Warum es wichtig ist': 'Die Modelle denken intern Schritt für Schritt, daher ist explizites Chain-of-Thought-Prompting bei ihnen weniger wichtig' },
            { 'Jahr': '2025 (Apr.)', 'Meilenstein': 'Llama 4 (Mixture-of-Experts); Llama 4 Scout unterstützt 10 Mio. Token Kontext', 'Warum es wichtig ist': 'Open-Weights-Modelle übernehmen Mixture-of-Experts-Architekturen und sehr lange Kontexte' },
            { 'Jahr': '2026', 'Meilenstein': 'Context Design und Agenten-Orchestrierung werden Standardpraxis', 'Warum es wichtig ist': 'Prompting ist eine Schicht in einem komponierten Kontext; Denken auf Systemebene wird erwartet' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: 'Wie die Geschichte die heutigen Best Practices prägt',
          content: [
            'Jede Phase der Evolution des Prompt Engineerings hinterließ einen dauerhaften Niederschlag in der aktuellen Praxis. Die GPT-3-Ära gab uns die Kernerkenntnis, dass das Modellverhalten durch Eingabestruktur geprägt wird – nicht nur durch Inhalt. Die Chain-of-Thought-Ära gab uns explizite Denkgerüste: schrittweises Prompting, Prompt-Verkettung und Tree-of-Thought-Ansätze. Die Framework-Ära gab uns wiederverwendbare Vorlagen, die Best Practices kodifizieren, ohne dass jeder Praktiker sie von Grund auf neu entdecken muss.',
            'Die RAG- und Kontext-Design-Ära gab uns das Verständnis, dass Prompts nicht isoliert existieren – sie werden mit abgerufenen Daten, Systemanweisungen und Werkzeugausgaben zusammengestellt, um einen vollständigen Kontext zu bilden. Und die automatisierte Prompting-Ära erinnerte uns daran, dass die Prinzipien guten Promptings messbar sind: besser strukturierte Prompts liefern bessere Ausgaben auf eine Weise, die systematisch bewertet und optimiert werden kann.',
          ],
          items: [
            'Denktechniken aus 2022 → [Chain-of-Thought Prompting: Lassen Sie die KI ihr Denken zeigen](/prompt-engineering/chain-of-thought-prompting) und [Tree of Thought & ReAct: Fortgeschrittene Reasoning-Techniken für komplexe Probleme](/prompt-engineering/tree-of-thought-and-react)',
            'Framework-Entwicklung aus 2023 → [Welches Prompt-Framework ist das richtige für Sie? (2026)](/prompt-engineering/which-prompt-framework-should-you-use)',
            'Wachstum des Kontextfensters → [Kontextfenster erklärt: Warum KI vergisst (und was Sie tun können)](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'Token-Ökonomie über Modellgenerationen hinweg → [Token, Kosten & Limits: Die Ökonomie des KI-Prompting](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG als Ergänzung zum reinen Prompting → [RAG erklärt: KI-Antworten in echten Daten verankern (2026)](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Die Evolution des Prompt Engineerings',
          faqs: [
            {
              q: 'Seit wann gibt es Prompt Engineering?',
              a: 'Die Praxis begann mit GPT-3 im Mai 2020, als Brown et al. zeigten, dass Beispiele im Prompt ein Modell ohne Neutraining steuern können. Anfang 2021 beschrieben Forschende dies als „Prompt Programming“, im Januar 2022 folgte Chain-of-Thought-Prompting, und ChatGPT (November 2022) machte es zur Massenfähigkeit.',
            },
            {
              q: 'Wer prägte als Erster den Begriff „Prompt Engineering"?',
              a: 'Der genaue Ursprung ist umstritten, und keine einzelne Person gilt als Erfinder des Begriffs. Forschungsarbeiten beschrieben promptbasierte Methoden bereits 2021, und der Ausdruck wurde 2022 und nach ChatGPT breiter verwendet. Der Wikipedia-Artikel zu Prompt Engineering gibt einen Überblick über die Geschichte.',
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
              a: 'Nein. Die Disziplin hat sich verschoben, nicht aufgelöst. Je leistungsfähiger die Modelle werden, desto mehr verlagert sich die Arbeit von Syntax-Tricks und Formatierungskniffen zum Context Design – Eingaben strukturieren, Retrieval steuern und Tool-Ausgaben zusammenführen. Die Berufsbezeichnung „Prompt Engineer“ wird enger, doch die zugrunde liegende Fähigkeit steckt in jeder Rolle, die KI nutzt: Entwickler, Analysten, Marketer, Forschende. Klare Aufgabenstellung, passender Kontext und ein festgelegtes Ausgabeformat bestimmen weiterhin, wie nützlich die Antwort eines Modells ist.',
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

        commonMistakes: {
          id: 'common-mistakes',
          title: 'Häufige Missverständnisse über Prompt Engineering',
          mistakes: [
            {
              mistake: 'Prompt Engineering bedeutet nur, bessere Sätze zu schreiben.',
              problem: 'Das übersieht die strukturellen und kontextuellen Dimensionen. Die Wirkung eines Prompts hängt nicht nur von der Wortwahl ab, sondern von Rollenzuweisung (dem Modell eine Persona geben), Randbedingungen, Ausgabeformat und Beispielauswahl – lauter strukturelle Elemente, die mit Grammatik nichts zu tun haben.',
              fix: 'Betrachten Sie Prompt Engineering als Gestaltung eines Systems, dessen Schnittstelle der Prompt ist. Investieren Sie in Struktur: Rollen zuweisen („Du bist ein …“, „Gehe davon aus …“), Randbedingungen festlegen („Nicht …“, „Muss enthalten …“), das Ausgabeformat definieren und Beispiele liefern. Struktur zählt oft mehr als Eloquenz.',
            },
            {
              mistake: 'Bessere Modelle machen Prompt Engineering überflüssig.',
              problem: 'Ein leistungsfähigeres Modell ist wie ein fähigerer Mitarbeiter – es reagiert *besser* auf klare Anweisungen, nicht schlechter. Der Nutzen guter Prompts wächst mit der Modellfähigkeit. Es ändert sich die *Art* des nötigen Promptings, nicht ob es nötig ist.',
              fix: 'Gehen Sie davon aus, dass Prompting für die KI-Arbeit zentral bleibt. Es ändert sich, wie viel Detail und Gerüst nötig sind. Bei schwächeren Modellen braucht es womöglich explizite Schrittstrukturen, bei stärkeren genügt eine klare Zeile – doch auch diese Direktheit ist eine Prompt-Engineering-Entscheidung.',
            },
            {
              mistake: 'Automatische Prompt-Optimierung ersetzt menschliches Prompt Engineering.',
              problem: 'Werkzeuge wie DSPy helfen, Formulierungen innerhalb definierter Ziele zu optimieren, doch ein Mensch muss weiterhin Ziel, Randbedingungen, Erfolgskriterien und Evaluierungsmethode festlegen. Automatisierung nimmt Iterationsarbeit ab; sie ersetzt nicht das strukturierte Nachdenken darüber, was das Modell tun soll.',
              fix: 'Nutzen Sie Automatisierung als Werkzeug, nicht als Ersatz. Beginnen Sie mit einem gut strukturierten Prompt von jemandem, der die Aufgabe versteht, und verfeinern Sie ihn mit Werkzeugen wie DSPy. Das menschliche Urteil über die Aufgabenstruktur bleibt unersetzlich.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Lektüre',
          items: [
            { title: 'Chain-of-Thought Prompting: Lassen Sie die KI ihr Denken zeigen', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Zero-Shot vs. Few-Shot Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG erklärt: KI-Antworten in echten Daten verankern (2026)', url: '/prompt-engineering/rag-explained' },
            { title: 'Kontextfenster erklärt: Warum KI vergisst (und was Sie tun können)', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'Token, Kosten & Limits: Die Ökonomie des KI-Prompting', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — GPT-3-Arbeit von OpenAI, die Few-Shot-Prompting als Paradigma einführte.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — Prompts mit Zwischenschritten; Quelle für das GSM8K-Ergebnis von 17,9 % auf 56,9 % (Tabelle 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT: Anweisungsbefolgung durch menschliches Feedback (RLHF).',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE: LLMs erzeugen und bewerten Prompts.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — Least-to-Most-Prompting: Probleme in Teilprobleme zerlegen.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — Arbeit, die Retrieval-Augmented Generation (RAG) einführte.',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — Frühe Arbeit, die das Schreiben von Prompts als Programmieren beschreibt (2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — Überblick über Prompting-Methoden in der Sprachverarbeitung (2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy: Framework, das Prompts automatisch kompiliert.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta, Ankündigung von Llama 4 (5. April 2025): Mixture-of-Experts, Scout mit 10 Mio. Token Kontext.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic, Ankündigung von Claude 3.7 Sonnet (24. Februar 2025): Extended-Thinking-Modus.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google, Ankündigung von Gemini 1.5 (15. Februar 2024): 1 Mio. Token Kontext in begrenzter Vorschau.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1: Reasoning durch Reinforcement Learning (Januar 2025).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune (9. März 2023): Bericht über die Gehaltsspanne der Anthropic-Stelle für Prompt Engineers.',
          ],
        },

      },
    },

    es: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      heroImage: '/images/prompt-engineering-history-overview-hero-es.webp',
      title: 'De GPT-2 a hoy: Cómo evolucionó el Prompt Engineering',
      seoTitle: '¿Ha muerto el prompt engineering? Evolución 2020–2026',
      intro: 'El prompt engineering evolucionó de experimentos informales en torno a GPT-3 en 2020 a una disciplina estructurada con técnicas y frameworks con nombre propios para 2026. Esta línea de tiempo traza los avances clave, los artículos de investigación y los puntos de inflexión que convirtieron el prompting en una habilidad fundamental.',
      metaDescription: 'El prompt engineering no ha muerto, ha cambiado: cronología con fuentes del few-shot de GPT-3 (2020) al chain-of-thought, ChatGPT y el context design.',
      ogTitle: 'Cómo evolucionó el prompt engineering: de GPT-3 al context design (2020–2026)',
      twitterTitle: 'Cómo el prompt engineering pasó de «escribe mejor el prompt» al context design en 6 años',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10 min de lectura',
      educationalLevel: 'Beginner',
      audience: 'Profesionales del conocimiento y desarrolladores que quieren conocer la historia del prompt engineering y de las técnicas de IA',
      primaryTerm: 'Historia del Prompt Engineering',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**El prompt engineering evolucionó desde la experimentación informal con GPT-3 (2020) hasta una disciplina estructurada con frameworks, técnicas y herramientas con nombre en 2026, a través de cinco fases: aprendizaje few-shot, razonamiento chain-of-thought, el salto masivo de ChatGPT, la optimización automatizada y el context design.**',
      quickFacts: [
        '**GPT-3 (2020):** el modelo de 175 000 millones de parámetros introdujo el prompting few-shot como cambio de paradigma',
        '**Chain-of-Thought (2022):** Wei et al. mostraron que la estructura del prompt puede activar el razonamiento paso a paso; PaLM 540B pasó del 17.9% al 56.9% en GSM8K',
        '**ChatGPT (nov. 2022):** superó 1 millón de usuarios en 5 días (según Sam Altman, CEO de OpenAI); unos 100 millones de usuarios activos mensuales estimados en enero de 2023 (UBS, vía Reuters)',
        '**Mercado laboral (2023):** una oferta de Anthropic para «Prompt Engineer and Librarian» anunciaba entre 175 000 y 335 000 USD (Fortune, marzo de 2023)',
        '**GPT-4 y frameworks (2023):** la entrada de imágenes y los frameworks publicados (CO-STAR, SPECS, RISEN) convirtieron el prompting en una disciplina enseñable',
        '**Context design (2024–2026):** LLM de pesos abiertos, ventanas de contexto de más de 1 M de tokens y orquestación de agentes desplazaron el foco del ajuste de prompts a la ingeniería de contexto a nivel de sistema',
      ],
      toc: [
        { label: 'Puntos clave', anchor: 'key-takeaways' },
        { label: 'Antes de que el prompt engineering tuviera nombre (antes de 2020)', anchor: 'before-had-a-name' },
        { label: '2020: GPT-3 y el avance del few-shot', anchor: 'gpt-3-few-shot' },
        { label: '2021–principios de 2022: De los trucos de prompt a una habilidad reconocida', anchor: 'tricks-to-skill' },
        { label: '2022: Chain-of-Thought y prompts de razonamiento', anchor: 'chain-of-thought' },
        { label: 'Finales de 2022–2023: El momento ChatGPT y el título de trabajo "Prompt Engineer"', anchor: 'chatgpt-moment' },
        { label: '2023: GPT-4, prompting multimodal y frameworks', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024: Prompt engineering automatizado y RAG', anchor: 'automated-rag' },
        { label: '2024–2025: Del prompt engineering al context design', anchor: 'context-design' },
        { label: '2026 y más allá: El prompt engineering como alfabetización fundamental', anchor: 'beyond-2026' },
        { label: 'Línea de tiempo: Hitos clave del prompt engineering', anchor: 'timeline' },
        { label: 'Cómo la historia da forma a las mejores prácticas actuales', anchor: 'today-practice' },
        { label: 'Ideas erróneas comunes sobre el prompt engineering', anchor: 'common-mistakes' },
        { label: 'Lecturas relacionadas', anchor: 'related-reading' },
        { label: 'FAQ: La evolución del prompt engineering', anchor: 'faq' },
        { label: 'Fuentes', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '¿Ha muerto el prompt engineering? Evolución 2020–2026',
        description: 'El prompt engineering no ha muerto, ha cambiado: cronología con fuentes del few-shot de GPT-3 (2020) al chain-of-thought, ChatGPT y el context design.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/es/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'es',
        keywords: ['historia del prompt engineering', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'línea de tiempo del prompt engineering', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Profesionales del conocimiento y desarrolladores que quieren conocer la historia del prompt engineering y de las técnicas de IA' },
        about: [
          { '@type': 'Thing', name: 'Historia del prompt engineering' },
          { '@type': 'Thing', name: 'Modelos de lenguaje de gran tamaño' },
          { '@type': 'Thing', name: 'Técnicas y frameworks de IA' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿Cuándo empezó el prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'La práctica comenzó con GPT-3 en mayo de 2020, cuando Brown et al. mostraron que los ejemplos incluidos en el prompt podían orientar un modelo sin reentrenarlo. A principios de 2021 los investigadores lo describieron como «prompt programming», en enero de 2022 llegó el prompting chain-of-thought y ChatGPT (noviembre de 2022) lo convirtió en una habilidad masiva.' } },
          { '@type': 'Question', name: '¿Quién acuñó por primera vez el término "prompt engineering"?', acceptedAnswer: { '@type': 'Answer', text: 'El origen exacto se discute y no se atribuye el término a una sola persona. Los artículos de investigación ya describían métodos basados en prompts en 2021, y la expresión se generalizó durante 2022 y tras ChatGPT. El artículo de Wikipedia sobre prompt engineering ofrece un panorama de la historia.' } },
          { '@type': 'Question', name: '¿Por qué el prompt engineering explotó en popularidad después de ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT fue el primer modelo de IA de propósito general que millones de no investigadores podían usar de inmediato, gratis, sin escribir código. La brecha entre un prompt bien elaborado y uno vago era visible e inmediatamente relevante — los mejores prompts producían outputs usablemente mejores. Ese bucle de retroalimentación, experimentado simultáneamente por millones de personas, convirtió el prompt engineering de un concepto de investigación en una habilidad masiva.' } },
          { '@type': 'Question', name: '¿Cómo influyeron los artículos de investigación en las técnicas de prompting del mundo real?', acceptedAnswer: { '@type': 'Answer', text: 'La transferencia fue inusualmente rápida para la investigación en IA. El prompting Chain-of-Thought (Wei et al., 2022) pasó de artículo académico a técnica de profesionales ampliamente usada en meses, en parte porque no requería herramientas — solo un cambio en cómo se escribía el prompt. El few-shot prompting del artículo de GPT-3 (Brown et al., 2020) era inmediatamente adoptable por cualquier persona con acceso a la API.' } },
          { '@type': 'Question', name: '¿El prompt engineering se está volviendo menos importante a medida que mejoran los modelos?', acceptedAnswer: { '@type': 'Answer', text: 'No — los modelos más capaces responden mejor a los prompts bien estructurados, no peor. Las ganancias del buen prompting aumentan a medida que el modelo se vuelve más capaz de seguir instrucciones precisas. Lo que ha cambiado es el nivel de prompt engineering requerido para tareas simples. Pero para outputs complejos de nivel de producción, el prompting estructurado sigue siendo la palanca más fiable disponible.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre prompt engineering y context engineering?', acceptedAnswer: { '@type': 'Answer', text: 'El prompt engineering se refiere típicamente a diseñar el input de texto para un modelo para mejorar su output. El context engineering es un concepto más amplio y reciente que se refiere a orquestar todo lo que hay en el context window del modelo: el system prompt, los documentos recuperados, el historial de conversación, los outputs de las herramientas y el input del usuario — todos compuestos deliberadamente. El context engineering trata el prompt como un componente en un sistema diseñado, no como un artefacto independiente.' } },
          { '@type': 'Question', name: '¿Las herramientas automatizadas reemplazarán la necesidad de entender el prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Las herramientas automatizadas como DSPy pueden optimizar la redacción de prompts dentro de objetivos definidos, pero requieren que un humano especifique cuál es el objetivo, qué restricciones aplican y cómo evaluar el éxito. Entender los principios del prompt engineering sigue siendo necesario para usar estas herramientas de forma efectiva. La automatización elimina algo de la iteración manual; no elimina la necesidad de pensamiento estructurado.' } },
          { '@type': 'Question', name: '¿Está muerto el prompt engineering en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'No. La disciplina se ha desplazado, no ha desaparecido. A medida que los modelos mejoran, el trabajo pasa de los trucos de sintaxis y formato al context design: estructurar entradas, gestionar la recuperación y componer salidas de herramientas. El título «Prompt Engineer» se estrecha, pero la habilidad de fondo está en todo rol que usa IA: desarrollo, análisis, marketing, investigación. Plantear bien la tarea, dar el contexto relevante y especificar el formato de salida siguen determinando cuán útil es la respuesta del modelo.' } },
          { '@type': 'Question', name: '¿Necesito aprender prompt engineering si los modelos de IA siguen mejorando?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — pero el foco cambia con cada generación. Los mejores modelos reducen la necesidad de soluciones elaboradas y aumentan el beneficio de la intención clara, el contexto estructurado y los ejemplos bien elegidos. Los fundamentos — rol, contexto, formato, restricciones — permanecen estables en cada generación de modelos. Aprenderlos ahora significa que la habilidad se acumula en lugar de expirar.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre prompt engineering y fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'El prompt engineering cambia cómo hablas con un modelo sin modificar sus pesos. El fine-tuning reentrena un modelo en nuevos datos para cambiar su comportamiento de forma permanente. El prompt engineering es más rápido, más barato y reversible — puedes iterar en minutos. El fine-tuning es mejor cuando el comportamiento objetivo es consistente, de alto volumen o imposible de describir de forma fiable en un prompt.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Cronología de la evolución del prompt engineering: 2018–2026',
        description: 'Una cronología de los hitos, artículos de investigación y lanzamientos de modelos que moldearon la evolución del prompt engineering entre 2018 y 2026.',
        url: 'https://www.promptquorum.com/es/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'es',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT (Google) y GPT-2 (OpenAI) publicados (2018–2019)', description: 'Mostraron que los modelos transformer podían orientarse con la redacción de la entrada, pero aún no existía una disciplina formal' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 y Brown et al., «Language Models are Few-Shot Learners» (2020)', description: 'Estableció el prompting few-shot: reescribir el prompt cambia el comportamiento del modelo sin reentrenarlo' },
          { '@type': 'ListItem', position: 3, name: 'Prompting chain-of-thought (Wei et al.) (2022 (ene.))', description: 'Mostró que la estructura del prompt puede provocar razonamiento paso a paso' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang et al., OpenAI) (2022 (mar.))', description: 'Los modelos entrenados para seguir instrucciones hicieron que la calidad del prompt importara mucho más' },
          { '@type': 'ListItem', position: 5, name: 'Lanzamiento de ChatGPT (2022 (nov.))', description: 'Llevó el prompting a un público masivo; millones empezaron a experimentar en pocos días' },
          { '@type': 'ListItem', position: 6, name: 'Las ofertas de «prompt engineer» atraen atención; una oferta de Anthropic anuncia 175 000–335 000 USD (2023 (T1))', description: 'Hizo visible el prompt engineering como posible profesión, aunque el rol fue muy debatido' },
          { '@type': 'ListItem', position: 7, name: 'Lanzamiento de GPT-4 con entrada de imágenes (2023 (mar.))', description: 'Amplió el prompting más allá del texto a las imágenes; el contexto de 128 000 tokens llegó con GPT-4 Turbo (nov. 2023)' },
          { '@type': 'ListItem', position: 8, name: 'Frameworks como CRAFT, CO-STAR, SPECS, RISEN y TRACE; guías oficiales de OpenAI y Google (2023)', description: 'Convirtió el oficio individual en plantillas reutilizables y enseñables' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou et al.) y DSPy (Khattab et al.): prompts optimizados por LLM (2022–2023)', description: 'Mostró que los LLM pueden escribir y ajustar prompts, haciendo práctica la optimización automática' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3 (abr.) y Gemini 1.5 Pro con vista previa de contexto de 1 M de tokens (feb.) (2024)', description: 'Los modelos de pesos abiertos para despliegue privado y los contextos muy largos desplazaron el foco a la ingeniería de contexto' },
          { '@type': 'ListItem', position: 11, name: 'Modelos de razonamiento: OpenAI o1 (sep. 2024), DeepSeek-R1 (ene. 2025), Claude 3.7 Sonnet con extended thinking (feb. 2025) (2024–2025)', description: 'Los modelos razonan paso a paso internamente, por lo que el chain-of-thought explícito importa menos en ellos' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4 (mixture-of-experts); Llama 4 Scout admite un contexto de 10 M de tokens (2025 (abr.))', description: 'Los modelos de pesos abiertos adoptan diseños mixture-of-experts y contextos muy largos' },
          { '@type': 'ListItem', position: 13, name: 'El context design y la orquestación de agentes se vuelven práctica estándar (2026)', description: 'El prompting es una capa dentro de un contexto compuesto; se espera pensamiento a nivel de sistema' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: 'Cómo evolucionó el prompt engineering: una breve visión general',
          snippets: [
            { type: 'in-one-sentence', text: 'El prompt engineering pasó de trucos de redacción por ensayo y error a una disciplina documentada de patrones reutilizables, evaluación y control de versiones, a medida que los modelos mejoraron y la estructura pasó a importar más que las palabras ingeniosas.' },
            { type: 'in-plain-terms', text: 'Empezó como folclore: la gente se intercambiaba frases que parecían funcionar. Según mejoraron los modelos, las palabras mágicas dejaron de importar y lo hizo la estructura: quién, qué y en qué formato. Ese giro convirtió un puñado de trucos en un oficio que se puede enseñar.' },
          ],
          content: [
            '**El prompt engineering evolucionó de una manipulación de texto informal por ensayo y error en torno a GPT-3 en 2020 a una disciplina estructurada con técnicas, frameworks y herramientas con nombre propios para 2026.** El arco abarca cinco fases: los primeros experimentos de few-shot, el momento ChatGPT que trajo la habilidad al conocimiento del público general, el desarrollo de técnicas de razonamiento estructurado, el auge de la optimización automática de prompts y el actual cambio hacia el context design.',
            'La disciplina no surgió de un solo artículo o empresa. Creció a partir de la confluencia de la investigación (few-shot learning, chain-of-thought reasoning, RAG), comunidades de profesionales que compartían colecciones de prompts online y la repentina disponibilidad pública de modelos potentes que hizo que el buen prompting fuera inmediatamente gratificante. Para 2026, el prompt engineering ya no es un truco de nicho — es una habilidad básica para cualquiera que trabaje con sistemas de IA.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: 'Puntos clave',
          isTldr: true,
          items: [
            '2019–2020: GPT-2 y los primeros transformers — los prompts eran inputs, no una disciplina',
            '2020: GPT-3 y Brown et al. introdujeron el few-shot prompting como un cambio de paradigma',
            '2022: Los prompts de razonamiento Chain-of-Thought convirtieron el prompting en una habilidad estructurada',
            'Finales de 2022: ChatGPT trajo el prompt engineering al conocimiento del público y a las ofertas de trabajo',
            '2023: GPT-4, el prompting multimodal y los frameworks formalizaron las mejores prácticas',
            '2024–2026: El context design, el prompting automatizado y los LLMs de código abierto redefinieron el campo',
          ],
        },

        pre2020: {
          id: 'before-had-a-name',
          title: 'Antes de que el prompt engineering tuviera nombre (antes de 2020)',
          content: [
            'Antes de que existiera el término «prompt engineering», los investigadores ya manipulaban las entradas de los modelos para obtener mejores salidas, aunque no lo llamaban así. Los primeros modelos transformer, como GPT-2 (2019, OpenAI) y BERT (2018, Google), se usaban con textos de entrada elegidos con cuidado, pero la práctica se consideraba parte del preprocesamiento de datos y no una habilidad propia.',
            'GPT-2 se anunció en febrero de 2019 como un modelo de 1.5 mil millones de parámetros; OpenAI publicó primero versiones más pequeñas y el modelo completo en noviembre de 2019. Completaba texto de forma sorprendentemente coherente. Investigadores y primeros usuarios notaron que la redacción de la entrada cambiaba mucho la calidad de la continuación, pero aún no había framework, terminología ni comunidad en torno a esa observación. Los prompts eran entradas, no artefactos de ingeniería.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020: GPT-3 y el avance del few-shot',
          content: [
            '**La historia moderna del prompt engineering empieza, en la práctica, con GPT-3.** En mayo de 2020, investigadores de OpenAI publicaron «[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)» (Brown et al.), que describe GPT-3, un modelo de 175 000 millones de parámetros. El artículo mostró que incluir unos pocos ejemplos de la tarea directamente en el prompt, sin actualizar los pesos del modelo, mejoraba el rendimiento en muchas tareas posteriores.',
            'Esa fue la semilla del prompt engineering como disciplina. Investigadores y desarrolladores comprendieron que el mismo modelo podía convertirse en traductor, resumidor, generador de código o sistema de preguntas y respuestas con solo cambiar cómo se escribía el prompt. El modelo no necesitaba reentrenarse: necesitaba un mejor prompt. Esa idea cambió el concepto de prompt: no solo una entrada, sino un artefacto de diseño.',
            'Brown et al. observaron que el rendimiento few-shot mejoraba, en general, al crecer el tamaño del modelo, y que GPT-3 de 175B parámetros era la variante más sólida en conjunto. Eso vinculó la escala con el aprendizaje basado en prompts y convirtió la calidad del prompt en una variable que los profesionales, y no solo los investigadores, podían controlar.',
            'Consulta [Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) para una guía práctica de la técnica que popularizó GPT-3.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–principios de 2022: De los trucos de prompt a una habilidad reconocida',
          content: [
            'Entre 2021 y principios de 2022, la elaboración de prompts pasó de los artículos de investigación a las comunidades de profesionales. Los investigadores empezaron a describir la práctica por escrito: Reynolds y McDonell, en «[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)» (febrero de 2021), sostuvieron que escribir prompts para GPT-3 es una forma de programar, y el estudio «[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)» (Liu et al., julio de 2021) catalogó métodos basados en prompts en el procesamiento del lenguaje natural. Mientras tanto, los profesionales intercambiaban prompts que funcionaban en comunidades en línea.',
            'El artículo de InstructGPT de OpenAI (Ouyang et al., marzo de 2022) presentó modelos ajustados con retroalimentación humana (RLHF) que seguían instrucciones en lenguaje natural con mucha más fiabilidad que el GPT-3 base, lo que hizo que la calidad del prompt importara aún más. A mediados de 2022 estaba claro que el prompting era una habilidad transferible, no una curiosidad de investigadores.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022: Chain-of-Thought y prompts de razonamiento',
          content: [
            '**La aparición del prompting chain-of-thought (CoT) en 2022 fue el avance técnico más importante en la corta historia de la disciplina.** Wei et al. (Google) publicaron «[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)» y mostraron que dar al modelo ejemplos resueltos con pasos intermedios mejoraba el rendimiento en tareas aritméticas, de sentido común y de razonamiento simbólico. En un resultado destacado, el prompting chain-of-thought elevó la precisión de PaLM 540B en GSM8K, un benchmark de matemáticas de primaria, del 17.9% al 56.9% (tabla 1 del artículo), una mejora lograda solo cambiando el prompt, sin entrenamiento adicional. La implicación era profunda: la estructura del prompt podía activar un comportamiento de razonamiento distinto, no solo hechos distintos.',
            'Pronto surgieron técnicas relacionadas. Zhou et al. introdujeron el [least-to-most prompting](https://arxiv.org/abs/2205.10625), que descompone problemas complejos en una secuencia de subproblemas más simples resueltos en orden. Estos enfoques convirtieron el prompt engineering de un ejercicio de formato en una herramienta para obtener razonamiento estructurado de modelos no entrenados explícitamente para ello. El prompting se volvió un andamio para la cognición.',
            'Para la guía completa de la técnica, consulta [Chain-of-Thought Prompting: Haz que la IA muestre su razonamiento](/prompt-engineering/chain-of-thought-prompting) y [Prompt chaining: cómo dividir tareas grandes en pasos ganadores](/prompt-engineering/prompt-chaining).',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'Finales de 2022–2023: El momento ChatGPT y el título de trabajo "Prompt Engineer"',
          callouts: [
            {
              type: 'did-you-know',
              label: '¿Sabías que?',
              text: 'Un análisis de UBS citado por Reuters estimó que ChatGPT alcanzó unos 100 millones de usuarios activos mensuales en enero de 2023, unos dos meses después de su lanzamiento. Según Reuters, que cita datos de Sensor Tower, TikTok tardó unos nueve meses e Instagram unos dos años y medio en llegar a esa cifra. Esa velocidad explica por qué el prompt engineering pasó de concepto de investigación a habilidad masiva casi de la noche a la mañana.',
            },
          ],
          content: [
            '**El lanzamiento de ChatGPT el 30 de noviembre de 2022 cambió de la noche a la mañana el perfil público del prompt engineering.** Sam Altman, CEO de OpenAI, dijo en Twitter a principios de diciembre de 2022 que ChatGPT había superado el millón de usuarios en cinco días, y un análisis de UBS recogido por Reuters estimó unos 100 millones de usuarios activos mensuales en enero de 2023. En pocos días, millones de personas experimentaban con prompts y descubrían que los resultados variaban mucho según cómo formulaban la petición, y los medios tecnológicos empezaron a presentar el prompt engineering como una habilidad que valía la pena aprender.',
            'A comienzos de 2023 apareció «prompt engineer» como título de puesto: una oferta de Anthropic para «Prompt Engineer and Librarian» anunciaba un rango salarial de 175 000 a 335 000 USD, [según informó Fortune](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) en marzo de 2023. Si el prompt engineering sería una carrera duradera o un rol transitorio (en parte diseño de interfaz persona-computadora, en parte experiencia en la materia, en parte control de calidad) se debatió ampliamente.',
            'Ninguna persona concreta figura como creadora del término. Los artículos de investigación ya describían métodos basados en prompts en 2021 (véase arriba), y la expresión se difundió ampliamente tras ChatGPT. El [artículo de Wikipedia sobre prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) ofrece un panorama de su historia.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023: GPT-4, prompting multimodal y frameworks',
          content: [
            'GPT-4, en marzo de 2023, incorporó la entrada de imágenes junto al texto, lo que abrió el prompt engineering a tareas visuales como describir imágenes, comparar diagramas y anotar gráficos; después llegaron ventanas de contexto mayores (128 000 tokens con GPT-4 Turbo en noviembre de 2023). Gemini de Google (diciembre de 2023) y los modelos Claude 3 de Anthropic con visión (marzo de 2024) sumaron opciones multimodales de otros proveedores.',
            'En ese mismo periodo se formalizaron las buenas prácticas. OpenAI publicó su [guía oficial de prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering). Google Cloud publicó su propia [guía de prompt engineering](https://cloud.google.com/discover/what-is-prompt-engineering). Autores y equipos independientes publicaron frameworks como CRAFT, CO-STAR, SPECS, RISEN y TRACE, que dieron a los profesionales plantillas repetibles para estructurar prompts y redujeron la dependencia del ensayo y error.',
            'Estos frameworks marcaron la madurez del prompt engineering, de habilidad personal a práctica enseñable y compartible. Consulta [¿Qué framework de prompts deberías usar?](/prompt-engineering/which-prompt-framework-should-you-use) para elegir entre ellos y [Más allá del texto: Cómo hacer prompts con imágenes](/prompt-engineering/beyond-text-how-to-prompt-with-images) para la dimensión multimodal.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024: Prompt engineering automatizado y RAG',
          content: [
            'Un avance llamativo hacia 2023 fue la investigación que mostró que los LLM pueden optimizar prompts tan bien como las personas. Zhou et al. publicaron en noviembre de 2022 «[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)» (APE): un LLM generaba y puntuaba instrucciones candidatas e igualó o superó a las escritas por humanos en 19 de las 24 tareas evaluadas. El framework DSPy, de investigadores de Stanford ([Khattab et al., octubre de 2023](https://arxiv.org/abs/2310.03714)), fue más lejos: el desarrollador describe lo que el prompt debe lograr y la redacción se compila automáticamente.',
            'A la vez, la generación aumentada por recuperación (RAG), presentada en 2020 por [Lewis et al.](https://arxiv.org/abs/2005.11401) en Facebook AI Research (hoy Meta), se convirtió en un patrón central de los sistemas de IA en producción. RAG inyectaba documentos recuperados directamente en el contexto del prompt, anclando las respuestas en fuentes reales y actualizadas en lugar de exigir que el prompt contuviera todos los datos. Así, el énfasis pasó de «¿cómo hago que el modelo sepa esto?» a «¿cómo estructuro el contexto para que el modelo lo use bien?».',
            'Consulta [RAG explicado: cómo anclar las respuestas de IA en datos reales (2026)](/prompt-engineering/rag-explained) y [Self-Consistency Prompting: genera múltiples respuestas y elige la correcta](/prompt-engineering/self-consistency-prompting) para las técnicas clave de este periodo.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025: Del prompt engineering al context design',
          content: [
            'Hacia 2024, un nuevo enfoque empezó a desplazar la idea simple de «escribe un mejor prompt». Profesionales e investigadores comenzaron a hablar de ingeniería de contexto: orquestar todo lo que entra en la ventana de contexto (prompt del sistema, documentos recuperados, salidas de herramientas, historial de conversación y entrada del usuario), compuesto de forma deliberada para guiar el comportamiento del modelo. El prompt dejó de ser un artefacto aislado y pasó a ser una capa de un contexto diseñado.',
            'Varios desarrollos aceleraron este cambio. Los modelos Llama 3 de Meta (abril de 2024) pusieron LLM de pesos abiertos y capaces al alcance del despliegue privado, trasladando parte del prompt engineering de las API en la nube a la infraestructura local. Google anunció en febrero de 2024 Gemini 1.5 Pro con una [ventana de contexto de 1 millón de tokens en vista previa limitada](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/), lo que hizo viable colocar bases de código, libros o colecciones de documentos enteros en un solo prompt. Frameworks multiagente como LangChain y AutoGen convirtieron el prompting en orquestación: un prompt activa otro modelo, que activa una herramienta, que devuelve contexto al siguiente prompt.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026 y más allá: El prompt engineering como alfabetización fundamental',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Consejo profesional',
              text: 'El paso de «prompt engineering» a «context design» no es solo terminología: cambia lo que optimizas. En lugar de ajustar la redacción de tu instrucción, diseñas lo que entra en la ventana de contexto: prompt del sistema, documentos recuperados, historial de conversación, salidas de herramientas y entrada del usuario. El prompt es una capa, no el todo.',
            },
          ],
          content: [
            'En 2026, el prompt engineering se describe cada vez más no como un puesto de nicho, sino como una alfabetización básica para quienes trabajan con herramientas de IA: saber plantear una tarea, aportar el contexto adecuado y especificar la salida que se necesita.',
            'El rol se ha dividido en dos vías. La primera es el diseño de sistemas y de contexto: la ingeniería de sistemas de IA en producción donde los prompts forman parte de una arquitectura mayor con recuperación, agentes y pipelines de evaluación. La segunda es el uso cotidiano: escribir prompts claros y estructurados que den resultados útiles sin conocer la arquitectura subyacente. Ambas vías se benefician de los mismos principios: tarea bien especificada, contexto adecuado, restricciones y formato de salida.',
            'Lo que no ha cambiado, pese a modelos más capaces y herramientas automatizadas, es el principio fundamental: cuanto más clara y estructurada es la entrada, más fiable y útil es la salida. Las técnicas, la terminología y las herramientas han madurado, pero la idea central de la era GPT-3 sigue siendo cierta en 2026.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'Línea de tiempo: Hitos clave del prompt engineering',
          content: 'La tabla siguiente resume los hitos clave de 2018 a 2026: los eventos, artículos y lanzamientos de modelos que moldearon la evolución del prompt engineering hasta su forma actual.',
          columns: ['Año', 'Hito', 'Por qué importa'],
          rows: [
            { 'Año': '2018–2019', 'Hito': 'BERT (Google) y GPT-2 (OpenAI) publicados', 'Por qué importa': 'Mostraron que los modelos transformer podían orientarse con la redacción de la entrada, pero aún no existía una disciplina formal' },
            { 'Año': '2020', 'Hito': 'GPT-3 y Brown et al., «Language Models are Few-Shot Learners»', 'Por qué importa': 'Estableció el prompting few-shot: reescribir el prompt cambia el comportamiento del modelo sin reentrenarlo' },
            { 'Año': '2022 (ene.)', 'Hito': 'Prompting chain-of-thought (Wei et al.)', 'Por qué importa': 'Mostró que la estructura del prompt puede provocar razonamiento paso a paso' },
            { 'Año': '2022 (mar.)', 'Hito': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Por qué importa': 'Los modelos entrenados para seguir instrucciones hicieron que la calidad del prompt importara mucho más' },
            { 'Año': '2022 (nov.)', 'Hito': 'Lanzamiento de ChatGPT', 'Por qué importa': 'Llevó el prompting a un público masivo; millones empezaron a experimentar en pocos días' },
            { 'Año': '2023 (T1)', 'Hito': 'Las ofertas de «prompt engineer» atraen atención; una oferta de Anthropic anuncia 175 000–335 000 USD', 'Por qué importa': 'Hizo visible el prompt engineering como posible profesión, aunque el rol fue muy debatido' },
            { 'Año': '2023 (mar.)', 'Hito': 'Lanzamiento de GPT-4 con entrada de imágenes', 'Por qué importa': 'Amplió el prompting más allá del texto a las imágenes; el contexto de 128 000 tokens llegó con GPT-4 Turbo (nov. 2023)' },
            { 'Año': '2023', 'Hito': 'Frameworks como CRAFT, CO-STAR, SPECS, RISEN y TRACE; guías oficiales de OpenAI y Google', 'Por qué importa': 'Convirtió el oficio individual en plantillas reutilizables y enseñables' },
            { 'Año': '2022–2023', 'Hito': 'APE (Zhou et al.) y DSPy (Khattab et al.): prompts optimizados por LLM', 'Por qué importa': 'Mostró que los LLM pueden escribir y ajustar prompts, haciendo práctica la optimización automática' },
            { 'Año': '2024', 'Hito': 'Llama 3 (abr.) y Gemini 1.5 Pro con vista previa de contexto de 1 M de tokens (feb.)', 'Por qué importa': 'Los modelos de pesos abiertos para despliegue privado y los contextos muy largos desplazaron el foco a la ingeniería de contexto' },
            { 'Año': '2024–2025', 'Hito': 'Modelos de razonamiento: OpenAI o1 (sep. 2024), DeepSeek-R1 (ene. 2025), Claude 3.7 Sonnet con extended thinking (feb. 2025)', 'Por qué importa': 'Los modelos razonan paso a paso internamente, por lo que el chain-of-thought explícito importa menos en ellos' },
            { 'Año': '2025 (abr.)', 'Hito': 'Llama 4 (mixture-of-experts); Llama 4 Scout admite un contexto de 10 M de tokens', 'Por qué importa': 'Los modelos de pesos abiertos adoptan diseños mixture-of-experts y contextos muy largos' },
            { 'Año': '2026', 'Hito': 'El context design y la orquestación de agentes se vuelven práctica estándar', 'Por qué importa': 'El prompting es una capa dentro de un contexto compuesto; se espera pensamiento a nivel de sistema' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: 'Cómo la historia da forma a las mejores prácticas actuales',
          content: [
            'Cada fase de la evolución del prompt engineering dejó un depósito duradero en la práctica actual. La era de GPT-3 nos dio el insight fundamental de que el comportamiento del modelo está moldeado por la estructura del input — no solo por el contenido. La era Chain-of-Thought nos dio andamiajes de razonamiento explícito: prompting paso a paso, prompt chaining y enfoques tree-of-thought. La era de los frameworks nos dio plantillas reutilizables que codifican las mejores prácticas sin requerir que cada profesional las descubra desde cero.',
            'La era RAG y context design nos dio la comprensión de que los prompts no existen de forma aislada — se componen con datos recuperados, instrucciones del sistema y outputs de herramientas para formar un contexto completo.',
          ],
          items: [
            'Técnicas de razonamiento de 2022 → [Chain-of-Thought Prompting: Haz que la IA muestre su razonamiento](/prompt-engineering/chain-of-thought-prompting) y [Tree of Thought y ReAct: Razonamiento avanzado para problemas difíciles](/prompt-engineering/tree-of-thought-and-react)',
            'Desarrollo de frameworks de 2023 → [¿Qué framework de prompts deberías usar?](/prompt-engineering/which-prompt-framework-should-you-use)',
            'Crecimiento del context window → [Context windows explicadas: Por qué la IA olvida (y qué hacer al respecto)](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'Economía de tokens a través de generaciones de modelos → [Tokens, costes y límites: La economía del prompting de IA en 2026](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG como complemento del prompting puro → [RAG explicado: cómo anclar las respuestas de IA en datos reales (2026)](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: La evolución del prompt engineering',
          faqs: [
            {
              q: '¿Cuándo empezó el prompt engineering?',
              a: 'La práctica comenzó con GPT-3 en mayo de 2020, cuando Brown et al. mostraron que los ejemplos incluidos en el prompt podían orientar un modelo sin reentrenarlo. A principios de 2021 los investigadores lo describieron como «prompt programming», en enero de 2022 llegó el prompting chain-of-thought y ChatGPT (noviembre de 2022) lo convirtió en una habilidad masiva.',
            },
            {
              q: '¿Quién acuñó por primera vez el término "prompt engineering"?',
              a: 'El origen exacto se discute y no se atribuye el término a una sola persona. Los artículos de investigación ya describían métodos basados en prompts en 2021, y la expresión se generalizó durante 2022 y tras ChatGPT. El artículo de Wikipedia sobre prompt engineering ofrece un panorama de la historia.',
            },
            {
              q: '¿Por qué el prompt engineering explotó en popularidad después de ChatGPT?',
              a: 'ChatGPT fue el primer modelo de IA de propósito general que millones de no investigadores podían usar de inmediato, gratis, sin escribir código. La brecha entre un prompt bien elaborado y uno vago era visible e inmediatamente relevante — los mejores prompts producían outputs usablemente mejores. Ese bucle de retroalimentación, experimentado simultáneamente por millones de personas, convirtió el prompt engineering de un concepto de investigación en una habilidad masiva.',
            },
            {
              q: '¿Cómo influyeron los artículos de investigación en las técnicas de prompting del mundo real?',
              a: 'La transferencia fue inusualmente rápida para la investigación en IA. El prompting Chain-of-Thought (Wei et al., 2022) pasó de artículo académico a técnica de profesionales ampliamente usada en meses, en parte porque no requería herramientas — solo un cambio en cómo se escribía el prompt. El few-shot prompting del artículo de GPT-3 (Brown et al., 2020) era inmediatamente adoptable por cualquier persona con acceso a la API.',
            },
            {
              q: '¿El prompt engineering se está volviendo menos importante a medida que mejoran los modelos?',
              a: 'No — los modelos más capaces responden mejor a los prompts bien estructurados, no peor. Las ganancias del buen prompting aumentan a medida que el modelo se vuelve más capaz de seguir instrucciones precisas. Lo que ha cambiado es el nivel de prompt engineering requerido para tareas simples. Pero para outputs complejos de nivel de producción, el prompting estructurado sigue siendo la palanca más fiable disponible.',
            },
            {
              q: '¿Cuál es la diferencia entre prompt engineering y context engineering?',
              a: 'El prompt engineering se refiere típicamente a diseñar el input de texto para un modelo para mejorar su output. El context engineering es un concepto más amplio y reciente que se refiere a orquestar todo lo que hay en el context window del modelo: el system prompt, los documentos recuperados, el historial de conversación, los outputs de las herramientas y el input del usuario — todos compuestos deliberadamente. El context engineering trata el prompt como un componente en un sistema diseñado, no como un artefacto independiente.',
            },
            {
              q: '¿Las herramientas automatizadas reemplazarán la necesidad de entender el prompt engineering?',
              a: 'Las herramientas automatizadas como DSPy pueden optimizar la redacción de prompts dentro de objetivos definidos, pero requieren que un humano especifique cuál es el objetivo, qué restricciones aplican y cómo evaluar el éxito. Entender los principios del prompt engineering sigue siendo necesario para usar estas herramientas de forma efectiva. La automatización elimina algo de la iteración manual; no elimina la necesidad de pensamiento estructurado.',
            },
            {
              q: '¿Está muerto el prompt engineering en 2026?',
              a: 'No. La disciplina se ha desplazado, no ha desaparecido. A medida que los modelos mejoran, el trabajo pasa de los trucos de sintaxis y formato al context design: estructurar entradas, gestionar la recuperación y componer salidas de herramientas. El título «Prompt Engineer» se estrecha, pero la habilidad de fondo está en todo rol que usa IA: desarrollo, análisis, marketing, investigación. Plantear bien la tarea, dar el contexto relevante y especificar el formato de salida siguen determinando cuán útil es la respuesta del modelo.',
            },
            {
              q: '¿Necesito aprender prompt engineering si los modelos de IA siguen mejorando?',
              a: 'Sí — pero el foco cambia con cada generación. Los mejores modelos reducen la necesidad de soluciones elaboradas y aumentan el beneficio de la intención clara, el contexto estructurado y los ejemplos bien elegidos. Los fundamentos — rol, contexto, formato, restricciones — permanecen estables en cada generación de modelos. Aprenderlos ahora significa que la habilidad se acumula en lugar de expirar.',
            },
            {
              q: '¿Cuál es la diferencia entre prompt engineering y fine-tuning?',
              a: 'El prompt engineering cambia cómo hablas con un modelo sin modificar sus pesos. El fine-tuning reentrena un modelo en nuevos datos para cambiar su comportamiento de forma permanente. El prompt engineering es más rápido, más barato y reversible — puedes iterar en minutos. El fine-tuning es mejor cuando el comportamiento objetivo es consistente, de alto volumen o imposible de describir de forma fiable en un prompt.',
            },
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: 'Ideas erróneas comunes sobre el prompt engineering',
          mistakes: [
            {
              mistake: 'El prompt engineering consiste solo en escribir mejores frases.',
              problem: 'Eso ignora las dimensiones estructural y contextual. La eficacia de un prompt no depende solo de las palabras, sino de la asignación de rol (darle una persona al modelo), las restricciones, el formato de salida y la elección de ejemplos: elementos estructurales que nada tienen que ver con la gramática.',
              fix: 'Piensa en el prompt engineering como el diseño de un sistema cuya interfaz es el prompt. Invierte en estructura: asigna roles («Eres un…», «Asume…»), especifica restricciones («No…», «Debe incluir…»), define el formato de salida y aporta ejemplos. La estructura suele importar más que la elocuencia.',
            },
            {
              mistake: 'Los mejores modelos hacen irrelevante el prompt engineering.',
              problem: 'Un modelo más capaz es como una persona más capaz: responde *mejor* a instrucciones claras, no peor. Las ganancias de un buen prompting crecen con la capacidad del modelo. Cambia el *tipo* de prompting necesario, no si hace falta.',
              fix: 'Da por hecho que el prompting seguirá siendo central en el trabajo con IA. Lo que cambia es el nivel de detalle y andamiaje. Con modelos más débiles puede hacer falta una estructura paso a paso explícita; con modelos más fuertes puede bastar una instrucción clara de una línea, pero esa franqueza también es una decisión de prompt engineering.',
            },
            {
              mistake: 'Las herramientas de optimización automática de prompts reemplazarán al prompt engineering humano.',
              problem: 'Herramientas como DSPy ayudan a optimizar la redacción dentro de objetivos definidos, pero una persona debe seguir especificando el objetivo, las restricciones, los criterios de éxito y el método de evaluación. La automatización elimina el trabajo de iteración; no elimina la necesidad de pensar de forma estructurada qué debe hacer el modelo.',
              fix: 'Usa la automatización como herramienta, no como reemplazo. Empieza con un prompt bien estructurado por alguien que entienda la tarea y úsalo con herramientas como DSPy para refinarlo. El criterio humano sobre la estructura de la tarea sigue siendo insustituible.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            { title: 'Chain-of-Thought Prompting: Haz que la IA muestre su razonamiento', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Zero-Shot vs. Few-Shot Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG explicado: cómo anclar las respuestas de IA en datos reales (2026)', url: '/prompt-engineering/rag-explained' },
            { title: 'Context windows explicadas: Por qué la IA olvida (y qué hacer al respecto)', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'Tokens, costes y límites: La economía del prompting de IA en 2026', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — Artículo de OpenAI sobre GPT-3 que introdujo el prompting few-shot como paradigma.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — Prompts con pasos intermedios; fuente del resultado de GSM8K del 17.9% al 56.9% (tabla 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT: seguimiento de instrucciones mediante retroalimentación humana (RLHF).',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE: los LLM generan y evalúan prompts.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — Least-to-most prompting: descomponer problemas en subproblemas.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — Artículo que introdujo la generación aumentada por recuperación (RAG).',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — Artículo temprano que describe escribir prompts como programar (2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — Estudio de los métodos de prompting en procesamiento del lenguaje natural (2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy: framework que compila prompts automáticamente.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta, anuncio de Llama 4 (5 de abril de 2025): mixture-of-experts, Scout con contexto de 10 M de tokens.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic, anuncio de Claude 3.7 Sonnet (24 de febrero de 2025): modo de extended thinking.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google, anuncio de Gemini 1.5 (15 de febrero de 2024): contexto de 1 M de tokens en vista previa limitada.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1: razonamiento mediante aprendizaje por refuerzo (enero de 2025).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune (9 de marzo de 2023): informe sobre el rango salarial de la oferta de Anthropic para prompt engineers.',
          ],
        },

      },
    },

    ar: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      heroImage: '/images/prompt-engineering-history-overview-hero-ar.webp',
      title: 'من ⁨GPT-2⁩ حتى اليوم: كيف تطورت هندسة البرومبت',
      seoTitle: 'هل انتهت هندسة البرومبت؟ تطورها من 2020 إلى 2026',
      intro: 'تطورت هندسة البرومبت من تجارب غير رسمية حول GPT-3 في 2020 إلى تخصص منظّم مع تقنيات وأطر عمل مُسمَّاة بحلول 2026. هذا الخط الزمني يتتبع التطورات الرئيسية وأوراق البحث ونقاط التحول التي جعلت من البرومبت مهارة أساسية.',
      metaDescription: 'هندسة البرومبت لم تمت بل تغيّرت: خط زمني موثّق من التعلّم بأمثلة قليلة في GPT-3 (2020) إلى سلسلة الأفكار وChatGPT وصولًا إلى تصميم السياق.',
      ogTitle: 'كيف تطورت هندسة البرومبت: من GPT-3 إلى تصميم السياق (2020–2026)',
      twitterTitle: 'كيف انتقلت هندسة البرومبت من «اكتب برومبت أفضل» إلى تصميم السياق في 6 سنوات',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '١٠ دقائق للقراءة',
      educationalLevel: 'Beginner',
      audience: 'العاملون في مجال المعرفة والمطورون الراغبون في التعرف على تاريخ هندسة البرومبت وتقنيات الذكاء الاصطناعي',
      primaryTerm: 'تاريخ هندسة البرومبت',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**تطورت هندسة البرومبت من تجارب غير رسمية حول GPT-3 (2020) إلى تخصص منظّم بأطر وتقنيات وأدوات مسمّاة بحلول 2026، عبر خمس مراحل: التعلّم بأمثلة قليلة، واستدلال سلسلة الأفكار، وانتشار ChatGPT الجماهيري، والتحسين الآلي، وتصميم السياق.**',
      quickFacts: [
        '**GPT-3 (2020):** نموذج بـ175 مليار معامل قدّم التوجيه بأمثلة قليلة (few-shot) كتحوّل في النموذج الفكري',
        '**سلسلة الأفكار (2022):** أظهر Wei وزملاؤه أن بنية البرومبت قد تُفعّل الاستدلال خطوة بخطوة؛ ارتفعت دقة PaLM 540B في GSM8K من 17.9% إلى 56.9%',
        '**ChatGPT (نوفمبر 2022):** تجاوز مليون مستخدم في 5 أيام (بحسب سام ألتمان، الرئيس التنفيذي لـOpenAI)؛ وقُدّر بنحو 100 مليون مستخدم نشط شهريًا بحلول يناير 2023 (UBS عبر Reuters)',
        '**سوق العمل (2023):** أعلنت وظيفة في Anthropic بمسمى «Prompt Engineer and Librarian» عن راتب بين 175 ألف و335 ألف دولار (Fortune، مارس 2023)',
        '**GPT-4 والأطر (2023):** إدخال الصور والأطر المنشورة (CO-STAR وSPECS وRISEN) جعلا كتابة البرومبت تخصصًا قابلًا للتعليم',
        '**تصميم السياق (2024–2026):** نماذج لغوية مفتوحة الأوزان ونوافذ سياق تتجاوز مليون رمز وتنسيق الوكلاء نقلت التركيز من تعديل البرومبت إلى هندسة السياق على مستوى النظام',
      ],
      toc: [
        { label: 'النقاط الرئيسية', anchor: 'key-takeaways' },
        { label: 'قبل أن تكتسب هندسة البرومبت اسمًا (قبل 2020)', anchor: 'before-had-a-name' },
        { label: '2020: GPT-3 وثورة الـfew-shot', anchor: 'gpt-3-few-shot' },
        { label: '2021 – أوائل 2022: من حيل البرومبت إلى مهارة معترف بها', anchor: 'tricks-to-skill' },
        { label: '2022: Chain-of-Thought وبرومبتات الاستدلال', anchor: 'chain-of-thought' },
        { label: 'أواخر 2022–2023: لحظة ChatGPT ومسمّى وظيفي "مهندس البرومبت"', anchor: 'chatgpt-moment' },
        { label: '2023: GPT-4 والبرومبت متعدد الوسائط وأطر العمل', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024: هندسة البرومبت التلقائية وRAG', anchor: 'automated-rag' },
        { label: '2024–2025: من هندسة البرومبت إلى تصميم السياق', anchor: 'context-design' },
        { label: '2026 وما بعده: هندسة البرومبت كمحو أمية أساسية', anchor: 'beyond-2026' },
        { label: 'الخط الزمني: المعالم الرئيسية لهندسة البرومبت', anchor: 'timeline' },
        { label: 'كيف يُشكّل التاريخ أفضل الممارسات الحالية', anchor: 'today-practice' },
        { label: 'مفاهيم خاطئة شائعة حول هندسة البرومبت', anchor: 'common-mistakes' },
        { label: 'قراءات ذات صلة', anchor: 'related-reading' },
        { label: 'الأسئلة الشائعة: تطور هندسة البرومبت', anchor: 'faq' },
        { label: 'المصادر', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'هل انتهت هندسة البرومبت؟ تطورها من 2020 إلى 2026',
        description: 'هندسة البرومبت لم تمت بل تغيّرت: خط زمني موثّق من التعلّم بأمثلة قليلة في GPT-3 (2020) إلى سلسلة الأفكار وChatGPT وصولًا إلى تصميم السياق.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'ar',
        keywords: ['تاريخ هندسة البرومبت', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'هندسة السياق', 'خط زمني لهندسة البرومبت', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'العاملون في مجال المعرفة والمطورون الراغبون في التعرف على تاريخ هندسة البرومبت وتقنيات الذكاء الاصطناعي' },
        about: [
          { '@type': 'Thing', name: 'تاريخ هندسة البرومبت' },
          { '@type': 'Thing', name: 'النماذج اللغوية الكبيرة' },
          { '@type': 'Thing', name: 'تقنيات وأطر الذكاء الاصطناعي' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          { '@type': 'Question', name: 'متى بدأت هندسة البرومبت؟', acceptedAnswer: { '@type': 'Answer', text: 'بدأت الممارسة مع GPT-3 في مايو 2020 حين أظهر Brown وزملاؤه أن الأمثلة الموضوعة في البرومبت توجّه النموذج دون إعادة تدريب. وصفها الباحثون بـ«البرمجة بالبرومبت» في مطلع 2021، وتبعها التوجيه بسلسلة الأفكار في يناير 2022، وجعلها ChatGPT (نوفمبر 2022) مهارة جماهيرية.' } },
          { '@type': 'Question', name: 'من صاغ مصطلح "هندسة البرومبت" أول مرة؟', acceptedAnswer: { '@type': 'Answer', text: 'أصل المصطلح محل جدل، ولا يُنسب ابتكاره إلى شخص بعينه. كانت الأوراق البحثية تصف الأساليب القائمة على البرومبت منذ 2021، وازداد استخدام العبارة خلال 2022 وبعد ChatGPT. وتقدّم مقالة ويكيبيديا عن هندسة البرومبت لمحة عامة عن هذا التاريخ.' } },
          { '@type': 'Question', name: 'لماذا انفجرت هندسة البرومبت في الشعبية بعد ChatGPT؟', acceptedAnswer: { '@type': 'Answer', text: 'كان ChatGPT أول نموذج ذكاء اصطناعي للأغراض العامة يستطيع الملايين استخدامه فورًا، مجانًا، دون كتابة كود. الفجوة بين برومبت مُحكم وآخر مبهم كانت مرئية وذات صلة فورية — البرومبتات الأفضل تُنتج مخرجات أفضل.' } },
          { '@type': 'Question', name: 'كيف أثّرت أوراق البحث على تقنيات البرومبت الواقعية؟', acceptedAnswer: { '@type': 'Answer', text: 'كان النقل سريعًا بشكل غير عادي. انتقل برومبت Chain-of-Thought (Wei et al., 2022) من ورقة أكاديمية إلى تقنية يستخدمها الممارسون على نطاق واسع في أشهر.' } },
          { '@type': 'Question', name: 'هل هندسة البرومبت تصبح أقل أهمية مع تحسّن النماذج؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — النماذج الأكثر قدرة تستجيب بشكل أفضل للبرومبتات المنظمة جيدًا. ما تغيّر هو مستوى هندسة البرومبت المطلوب للمهام البسيطة. لكن للمخرجات الإنتاجية المعقدة، يظل البرومبت المنظّم الرافعة الأكثر موثوقية.' } },
          { '@type': 'Question', name: 'ما الفرق بين هندسة البرومبت وهندسة السياق؟', acceptedAnswer: { '@type': 'Answer', text: 'هندسة البرومبت تشير عادةً إلى تصميم مدخلات النص لتحسين مخرجاته. هندسة السياق مفهوم أوسع يشير إلى تنسيق كل ما هو داخل نافذة سياق النموذج — تُعامل البرومبت كمكوّن في نظام مُصمَّم، لا كنتاج مستقل.' } },
          { '@type': 'Question', name: 'هل ستحلّ الأدوات التلقائية محلّ الحاجة لفهم هندسة البرومبت؟', acceptedAnswer: { '@type': 'Answer', text: 'الأدوات التلقائية كـDSPy تستطيع تحسين صياغة البرومبتات ضمن أهداف محددة، لكنها تتطلب من إنسان تحديد الهدف وما هي القيود وكيفية تقييم النجاح.' } },
          { '@type': 'Question', name: 'هل ماتت هندسة البرومبت في 2026؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. لقد تحوّل التخصص ولم يختفِ. فكلما ازدادت قدرة النماذج انتقل العمل من حيل الصياغة والتنسيق إلى تصميم السياق: بناء المدخلات وإدارة الاسترجاع وتركيب مخرجات الأدوات. يضيق مسمى «مهندس برومبت»، لكن المهارة الأساسية حاضرة في كل دور يستخدم الذكاء الاصطناعي: المطوّر والمحلل والمسوّق والباحث. وما زال وضوح صياغة المهمة والسياق المناسب وتحديد صيغة المخرجات هي ما يحدد مدى فائدة إجابة النموذج.' } },
          { '@type': 'Question', name: 'هل أحتاج تعلّم هندسة البرومبت إذا كانت نماذج الذكاء الاصطناعي تتحسن باستمرار؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — لكن التركيز يتغير مع كل جيل. الأساسيات — الدور والسياق والتنسيق والقيود — تظل ثابتة عبر كل جيل من النماذج.' } },
          { '@type': 'Question', name: 'ما الفرق بين هندسة البرومبت والضبط الدقيق؟', acceptedAnswer: { '@type': 'Answer', text: 'هندسة البرومبت تُغيّر طريقة حديثك مع نموذج دون تعديل أوزانه. الضبط الدقيق يُعيد تدريب نموذج على بيانات جديدة لتغيير سلوكه بشكل دائم.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'الخط الزمني لتطور هندسة البرومبت: 2018–2026',
        description: 'خط زمني للمحطات الرئيسية والأوراق البحثية وإصدارات النماذج التي شكّلت تطور هندسة البرومبت من 2018 إلى 2026.',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'ar',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'إصدار BERT (Google) وGPT-2 (OpenAI) (2018–2019)', description: 'أظهرا أن نماذج المحوّلات يمكن توجيهها بصياغة المدخل، لكن لم يكن هناك تخصص رسمي بعد' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 وورقة Brown وزملائه «Language Models are Few-Shot Learners» (2020)', description: 'أرست التوجيه بأمثلة قليلة: إعادة كتابة البرومبت تغيّر سلوك النموذج دون إعادة تدريب' },
          { '@type': 'ListItem', position: 3, name: 'التوجيه بسلسلة الأفكار (Wei وزملاؤه) (2022 (يناير))', description: 'أظهر أن بنية البرومبت قد تستدعي استدلالًا خطوة بخطوة' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang وزملاؤه، OpenAI) (2022 (مارس))', description: 'نماذج مدرَّبة على اتباع التعليمات جعلت جودة البرومبت أشد تأثيرًا' },
          { '@type': 'ListItem', position: 5, name: 'إطلاق ChatGPT (2022 (نوفمبر))', description: 'أوصل كتابة البرومبت إلى جمهور واسع؛ بدأ الملايين بالتجريب خلال أيام' },
          { '@type': 'ListItem', position: 6, name: 'وظائف «مهندس برومبت» تلفت الانتباه؛ وظيفة في Anthropic تعلن 175 ألفًا–335 ألف دولار (2023 (الربع 1))', description: 'جعلت هندسة البرومبت مهنة محتملة ظاهرة، مع جدل واسع حول الدور' },
          { '@type': 'ListItem', position: 7, name: 'إصدار GPT-4 مع إدخال الصور (2023 (مارس))', description: 'وسّع كتابة البرومبت إلى ما بعد النص ليشمل الصور؛ وجاء سياق 128 ألف رمز مع GPT-4 Turbo (نوفمبر 2023)' },
          { '@type': 'ListItem', position: 8, name: 'أطر مثل CRAFT وCO-STAR وSPECS وRISEN وTRACE؛ أدلة رسمية من OpenAI وGoogle (2023)', description: 'حوّلت الحرفة الفردية إلى قوالب قابلة لإعادة الاستخدام والتعليم' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou وزملاؤه) وDSPy (Khattab وزملاؤه): برومبتات محسَّنة بنماذج لغوية (2022–2023)', description: 'أظهرا أن النماذج اللغوية تكتب البرومبتات وتضبطها، فصار التحسين الآلي عمليًا' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3 (أبريل) وGemini 1.5 Pro بمعاينة سياق مليون رمز (فبراير) (2024)', description: 'نماذج مفتوحة الأوزان للنشر الخاص وسياقات طويلة جدًا نقلت التركيز إلى هندسة السياق' },
          { '@type': 'ListItem', position: 11, name: 'نماذج الاستدلال: OpenAI o1 (سبتمبر 2024)، DeepSeek-R1 (يناير 2025)، Claude 3.7 Sonnet بالتفكير الممتد (فبراير 2025) (2024–2025)', description: 'تستدل النماذج خطوة بخطوة داخليًا، لذا يقل تأثير سلسلة الأفكار الصريحة فيها' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4 (مزيج الخبراء)؛ يدعم Llama 4 Scout سياقًا بحجم 10 ملايين رمز (2025 (أبريل))', description: 'تتبنى النماذج مفتوحة الأوزان بنى مزيج الخبراء والسياقات الطويلة جدًا' },
          { '@type': 'ListItem', position: 13, name: 'تصميم السياق وتنسيق الوكلاء يصبحان ممارسة معتادة (2026)', description: 'البرومبت طبقة واحدة في سياق مركّب؛ يُتوقع تفكير على مستوى النظام' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: 'كيف تطورت هندسة البرومبت: نظرة عامة موجزة',
          snippets: [
            { type: 'in-one-sentence', text: 'انتقلت هندسة البرومبت من حيل صياغة قائمة على التجربة والخطأ إلى تخصص موثَّق قوامه أنماط قابلة لإعادة الاستخدام وتقييم وضبط إصدارات، إذ صارت البنية أهم من براعة الألفاظ مع تحسّن النماذج.' },
            { type: 'in-plain-terms', text: 'بدأت الأمور فولكلوراً: يتبادل الناس عبارات بدت ناجحة. ومع تحسّن النماذج فقدت «الكلمات السحرية» أثرها وحلّت محلها البنية: مَن، وماذا، وبأي صيغة. هذا التحول هو ما حوّل مجموعة حيل إلى حرفة يمكن تعليمها.' },
          ],
          content: [
            '**تطورت هندسة البرومبت من تلاعب نصي غير رسمي بالتجربة والخطأ حول GPT-3 في 2020 إلى تخصص منظّم مع تقنيات وأطر عمل وأدوات مُسمَّاة بحلول 2026.** القوس يمتد عبر خمس مراحل: التجارب الأولى للـfew-shot، ولحظة ChatGPT التي أحضرت المهارة إلى الوعي العام، وتطوير تقنيات الاستدلال المنظّم، وصعود تحسين البرومبتات التلقائي، والتحوّل الحالي نحو تصميم السياق.',
            'لم ينشأ التخصص من ورقة بحثية أو شركة واحدة. نما من التقاء البحث (few-shot learning وchain-of-thought reasoning وRAG) ومجتمعات الممارسين الذين شاركوا مجموعات برومبتات عبر الإنترنت والتوفر العلني المفاجئ لنماذج قوية جعل البرومبت الجيد مجزيًا على الفور. بحلول 2026، لم تعد هندسة البرومبت حيلة متخصصة — بل مهارة أساسية لكل من يعمل مع أنظمة الذكاء الاصطناعي.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            '2019–2020: GPT-2 والمحولات الأولى — البرومبتات كانت مدخلات لا تخصصًا',
            '2020: GPT-3 وBrown et al. قدّما few-shot prompting كتحوّل نموذجي',
            '2022: برومبتات الاستدلال Chain-of-Thought حوّلت البرومبت إلى مهارة منظمة',
            'أواخر 2022: ChatGPT أحضر هندسة البرومبت إلى الوعي العام وعروض العمل',
            '2023: GPT-4 والبرومبت متعدد الوسائط وأطر العمل أضفت الرسمية على أفضل الممارسات',
            '2024–2026: تصميم السياق والبرومبت التلقائي وLLMs مفتوحة المصدر أعادت تعريف المجال',
          ],
        },

        pre2020: {
          id: 'before-had-a-name',
          title: 'قبل أن تكتسب هندسة البرومبت اسمًا (قبل 2020)',
          content: [
            'قبل أن يظهر مصطلح «هندسة البرومبت»، كان الباحثون يتلاعبون بمدخلات النماذج للحصول على مخرجات أفضل، لكنهم لم يسمّوا ذلك بهذا الاسم. كانت نماذج المحوّلات المبكرة مثل GPT-2 (2019، OpenAI) وBERT (2018، Google) تُستخدم عبر نصوص إدخال مختارة بعناية، لكن الممارسة عُدّت جزءًا من المعالجة المسبقة للبيانات لا مهارة مستقلة.',
            'أُعلن عن GPT-2 في فبراير 2019 كنموذج بـ1.5 مليار معامل؛ نشرت OpenAI نسخًا أصغر أولًا ثم النموذج الكامل في نوفمبر 2019. كان يكمل النصوص بتماسك مفاجئ. لاحظ الباحثون والممارسون الأوائل أن صياغة المدخل تغيّر جودة الإكمال تغييرًا كبيرًا، لكن لم يكن هناك بعد إطار عمل ولا مصطلحات ولا مجتمع حول هذه الملاحظة. كانت البرومبتات مدخلات لا مُنتجات هندسية.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020: GPT-3 وثورة الـfew-shot',
          content: [
            '**يبدأ التاريخ الحديث لهندسة البرومبت فعليًا مع GPT-3.** في مايو 2020 نشر باحثو OpenAI ورقة «[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)» (Brown وزملاؤه) التي تصف GPT-3، وهو نموذج بـ175 مليار معامل. أظهرت الورقة أن تضمين بضعة أمثلة للمهمة المطلوبة مباشرة في البرومبت، دون أي تحديث لأوزان النموذج، يحسّن الأداء في كثير من المهام اللاحقة.',
            'كانت هذه بذرة هندسة البرومبت كتخصص. أدرك الباحثون والمطورون أن النموذج نفسه يمكن أن يصبح مترجمًا أو ملخّصًا أو مولّد شيفرة أو نظام أسئلة وأجوبة بمجرد تغيير طريقة كتابة البرومبت. لم يحتج النموذج إلى إعادة تدريب، بل إلى برومبت أفضل. أعادت هذه الفكرة تعريف البرومبت: ليس مجرد مدخل، بل عنصر تصميم.',
            'ذكر Brown وزملاؤه أن أداء التعلّم بأمثلة قليلة تحسّن عمومًا مع كبر حجم النموذج، وأن GPT-3 بـ175 مليار معامل كان الأقوى إجمالًا. ربط ذلك بين الحجم والتعلّم القائم على البرومبت، وجعل جودة البرومبت متغيّرًا يمكن للممارسين، لا للباحثين وحدهم، التحكم فيه.',
            'راجع [التوجيه الصفري مقابل التوجيه بأمثلة قليلة](/prompt-engineering/zero-shot-vs-few-shot) للحصول على دليل عملي للتقنية التي جعلها GPT-3 مشهورة.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021 – أوائل 2022: من حيل البرومبت إلى مهارة معترف بها',
          content: [
            'بين عامي 2021 وأوائل 2022 انتقلت صياغة البرومبتات من الأوراق البحثية إلى مجتمعات الممارسين. بدأ الباحثون يصفون الممارسة كتابيًا: ذهب Reynolds وMcDonell في «[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)» (فبراير 2021) إلى أن كتابة البرومبتات لـGPT-3 شكل من أشكال البرمجة، وصنّفت المراجعة «[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)» (Liu وزملاؤه، يوليو 2021) الأساليب القائمة على البرومبت في معالجة اللغة الطبيعية. وفي الوقت نفسه كان الممارسون يتبادلون برومبتات ناجحة في المجتمعات الإلكترونية.',
            'قدّمت ورقة InstructGPT من OpenAI (Ouyang وزملاؤه، مارس 2022) نماذج مضبوطة بالتغذية الراجعة البشرية (RLHF) تتبع التعليمات بلغة طبيعية بموثوقية أعلى بكثير من GPT-3 الأساسي، ما جعل جودة البرومبت أشد أهمية. وبحلول منتصف 2022 كان واضحًا أن كتابة البرومبت مهارة قابلة للنقل لا مجرد فضول بحثي.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022: Chain-of-Thought وبرومبتات الاستدلال',
          content: [
            '**كان ظهور التوجيه بسلسلة الأفكار (CoT) عام 2022 أهم تطور تقني في التاريخ القصير لهذا التخصص.** نشر Wei وزملاؤه (Google) ورقة «[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)» وأظهروا أن تزويد النموذج بأمثلة محلولة بخطوات وسيطة يحسّن الأداء في مهام الحساب والاستدلال العام والرمزي. وفي نتيجة بارزة رفع التوجيه بسلسلة الأفكار دقة PaLM 540B على معيار GSM8K لمسائل الرياضيات المدرسية من 17.9% إلى 56.9% (الجدول 1 في الورقة)، وهو مكسب تحقق بتغيير البرومبت فقط ودون تدريب إضافي. وكانت الدلالة عميقة: بنية البرومبت قد تُفعّل سلوك استدلال مختلفًا، لا حقائق مختلفة فحسب.',
            'تبعتها تقنيات مرتبطة بسرعة. قدّم Zhou وزملاؤه [التوجيه من الأبسط إلى الأعقد (least-to-most)](https://arxiv.org/abs/2205.10625) الذي يفكّك المسائل المعقدة إلى سلسلة من المسائل الفرعية الأبسط تُحل بالترتيب. حوّلت هذه المقاربات هندسة البرومبت من تمرين تنسيق إلى أداة لاستخراج استدلال منظّم من نماذج لم تُدرَّب صراحةً على ذلك. صار التوجيه سقالة للإدراك.',
            'للاطلاع على الدليل الكامل للتقنية راجع [توجيه سلسلة الأفكار: اجعل الذكاء الاصطناعي يُظهر استدلاله](/prompt-engineering/chain-of-thought-prompting) و[ربط البرومبتات: كيف تقسّم المهام الكبيرة إلى خطوات رابحة](/prompt-engineering/prompt-chaining).',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'أواخر 2022–2023: لحظة ChatGPT ومسمّى وظيفي "مهندس البرومبت"',
          callouts: [
            {
              type: 'did-you-know',
              label: 'هل تعلم؟',
              text: 'قدّر تحليل لـUBS نقلته Reuters أن ChatGPT بلغ نحو 100 مليون مستخدم نشط شهريًا في يناير 2023، أي بعد نحو شهرين من إطلاقه. وبحسب Reuters، استنادًا إلى بيانات Sensor Tower، احتاج TikTok إلى نحو تسعة أشهر وInstagram إلى نحو عامين ونصف للوصول إلى الرقم نفسه. تفسّر سرعة الانتشار هذه كيف تحوّلت هندسة البرومبت من مفهوم بحثي إلى مهارة جماهيرية في وقت قصير جدًا.',
            },
          ],
          content: [
            '**غيّر إطلاق ChatGPT في 30 نوفمبر 2022 الصورة العامة لهندسة البرومبت بين ليلة وضحاها.** قال سام ألتمان، الرئيس التنفيذي لـOpenAI، على تويتر في أوائل ديسمبر 2022 إن ChatGPT تجاوز مليون مستخدم في خمسة أيام، وقدّر تحليل لـUBS نقلته Reuters نحو 100 مليون مستخدم نشط شهريًا بحلول يناير 2023. وخلال أيام كان الملايين يجرّبون البرومبتات ويكتشفون أن النتائج تتفاوت كثيرًا بحسب صياغة الطلب، وبدأت وسائل الإعلام التقنية تتناول هندسة البرومبت كمهارة تستحق التعلّم.',
            'في مطلع 2023 ظهر «مهندس برومبت» كمسمى وظيفي: أعلنت وظيفة في Anthropic بمسمى «Prompt Engineer and Librarian» عن نطاق راتب من 175 ألفًا إلى 335 ألف دولار، [كما أوردت Fortune](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) في مارس 2023. وقد دار جدل واسع حول ما إذا كانت هندسة البرومبت مسارًا مهنيًا دائمًا أم دورًا انتقاليًا يجمع بين تصميم واجهات الإنسان والحاسوب والخبرة في المجال وضمان الجودة.',
            'لا يُنسب ابتكار المصطلح إلى شخص بعينه. كانت الأوراق البحثية تصف الأساليب القائمة على البرومبت منذ 2021 (انظر أعلاه)، وانتشرت العبارة على نطاق واسع بعد ChatGPT. وتقدّم [مقالة ويكيبيديا عن هندسة البرومبت](https://en.wikipedia.org/wiki/Prompt_engineering) لمحة عامة عن هذا التاريخ.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023: GPT-4 والبرومبت متعدد الوسائط وأطر العمل',
          content: [
            'أضاف GPT-4 في مارس 2023 إدخال الصور إلى جانب النص، ففتح هندسة البرومبت أمام مهام بصرية مثل وصف الصور ومقارنة المخططات والتعليق على الرسوم البيانية؛ ثم جاءت نوافذ سياق أكبر (128 ألف رمز مع GPT-4 Turbo في نوفمبر 2023). وأضافت Gemini من Google (ديسمبر 2023) ونماذج Claude 3 ذات الرؤية من Anthropic (مارس 2024) خيارات متعددة الوسائط من مزوّدين آخرين.',
            'شهدت الفترة نفسها تقنين أفضل الممارسات. نشرت OpenAI [دليلها الرسمي لهندسة البرومبت](https://developers.openai.com/api/docs/guides/prompt-engineering)، ونشرت Google Cloud [دليلها الخاص لهندسة البرومبت](https://cloud.google.com/discover/what-is-prompt-engineering). ونشر مؤلفون وفرق مستقلة أطرًا مثل CRAFT وCO-STAR وSPECS وRISEN وTRACE تمنح الممارسين قوالب قابلة للتكرار لبناء البرومبتات وتقلل الاعتماد على التجربة والخطأ.',
            'مثّلت هذه الأطر نضج هندسة البرومبت من مهارة شخصية إلى ممارسة قابلة للتعليم والمشاركة. راجع [أي إطار طلب يجب استخدامه؟](/prompt-engineering/which-prompt-framework-should-you-use) لاختيار الإطار المناسب، و[ما وراء النص: كيفية الاستفسار بالصور](/prompt-engineering/beyond-text-how-to-prompt-with-images) للبعد متعدد الوسائط.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024: هندسة البرومبت التلقائية وRAG',
          content: [
            'من التطورات اللافتة نحو عام 2023 بحوث أظهرت أن النماذج اللغوية الكبيرة تستطيع تحسين البرومبتات بقدر ما يفعل البشر. نشر Zhou وزملاؤه في نوفمبر 2022 ورقة «[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)» (APE): ولّد نموذج لغوي تعليمات مرشّحة وقيّمها، وساوى أو تفوّق على التعليمات التي كتبها البشر في 19 من 24 مهمة اختُبرت. وذهب إطار DSPy، من باحثين في Stanford ([Khattab وزملاؤه، أكتوبر 2023](https://arxiv.org/abs/2310.03714))، أبعد: يصف المطور ما يجب أن يحققه البرومبت وتُترجَم الصياغة آليًا.',
            'وفي الوقت نفسه أصبح التوليد المعزَّز بالاسترجاع (RAG)، الذي قدّمه [Lewis وزملاؤه عام 2020](https://arxiv.org/abs/2005.11401) في Facebook AI Research (Meta اليوم)، نمطًا مركزيًا في أنظمة الذكاء الاصطناعي الإنتاجية. كان RAG يحقن المستندات المسترجعة مباشرة في سياق البرومبت، فيربط المخرجات بمصادر حقيقية ومحدّثة بدل اشتراط أن يحتوي البرومبت على كل الحقائق. وبذلك انتقل التركيز من «كيف أجعل النموذج يعرف هذا؟» إلى «كيف أبني السياق ليستخدمه النموذج بشكل صحيح؟».',
            'راجع [RAG موضَّح: كيف تُربط استجابات الذكاء الاصطناعي بالبيانات الحقيقية (2026)](/prompt-engineering/rag-explained) و[برومبت الاتساق الذاتي: أنتج استجابات متعددة واختر الصحيحة](/prompt-engineering/self-consistency-prompting) للاطلاع على أهم تقنيات هذه الفترة.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025: من هندسة البرومبت إلى تصميم السياق',
          content: [
            'بحلول 2024 بدأ إطار جديد يحلّ محل فكرة «اكتب برومبت أفضل» البسيطة. صار الممارسون والباحثون يتحدثون عن هندسة السياق: تنسيق كل ما يدخل نافذة السياق من برومبت النظام والمستندات المسترجعة ومخرجات الأدوات وسجل المحادثة ومدخل المستخدم، مركّبةً عن قصد لتوجيه سلوك النموذج. لم يعد البرومبت عنصرًا قائمًا بذاته، بل طبقة واحدة في سياق مصمَّم.',
            'سرّعت عدة تطورات هذا التحول. جعلت نماذج Llama 3 من Meta (أبريل 2024) نماذج لغوية قادرة مفتوحة الأوزان متاحة للنشر الخاص، ما نقل جزءًا من هندسة البرومبت من واجهات السحابة إلى البنية المحلية. وأعلنت Google في فبراير 2024 عن Gemini 1.5 Pro مع [نافذة سياق بحجم مليون رمز في معاينة محدودة](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)، ما جعل وضع قواعد شيفرة أو كتب أو مجموعات مستندات كاملة في برومبت واحد أمرًا عمليًا. وحوّلت أطر الوكلاء المتعددين مثل LangChain وAutoGen كتابة البرومبت إلى تنسيق: برومبت يشغّل نموذجًا آخر يشغّل أداة تعيد السياق إلى البرومبت التالي.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026 وما بعده: هندسة البرومبت كمحو أمية أساسية',
          callouts: [
            {
              type: 'pro-tip',
              label: 'نصيحة احترافية',
              text: 'الانتقال من «هندسة البرومبت» إلى «تصميم السياق» ليس مجرد تغيير في المصطلح، بل يغيّر ما تقوم بتحسينه. فبدلًا من تعديل صياغة تعليماتك، تصمّم ما يدخل نافذة السياق: برومبت النظام والمستندات المسترجعة وسجل المحادثة ومخرجات الأدوات ومدخل المستخدم. البرومبت طبقة واحدة وليس كل شيء.',
            },
          ],
          content: [
            'بحلول 2026 يُوصَف تصميم البرومبت بشكل متزايد لا كمسمى وظيفي ضيق، بل كإلمام أساسي لعاملي المعرفة الذين يستخدمون أدوات الذكاء الاصطناعي: القدرة على صياغة المهمة وتوفير السياق المناسب وتحديد المخرج المطلوب.',
            'انقسم الدور إلى مسارين. الأول تصميم الأنظمة والسياق: هندسة أنظمة ذكاء اصطناعي إنتاجية تشكّل فيها البرومبتات جزءًا من بنية أكبر تشمل الاسترجاع والوكلاء وخطوط التقييم. والثاني الاستخدام اليومي: القدرة على كتابة برومبتات واضحة ومنظَّمة تعطي نتائج مفيدة دون معرفة البنية الكامنة. ويستفيد المساران من المبادئ الأساسية نفسها: تحديد واضح للمهمة وسياق مناسب وقيود وصيغة مخرجات.',
            'ما لم يتغير، رغم النماذج الأقدر والأدوات الآلية، هو المبدأ الأساسي: كلما كان المدخل أوضح وأكثر تنظيمًا كان المخرج أكثر موثوقية وفائدة. نضجت التقنيات والمصطلحات والأدوات، لكن الفكرة الجوهرية من عصر GPT-3 ما زالت صحيحة في 2026.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'الخط الزمني: المعالم الرئيسية لهندسة البرومبت',
          content: 'يلخّص الجدول التالي أبرز المحطات من 2018 إلى 2026: الأحداث والأوراق البحثية وإصدارات النماذج التي شكّلت تطور هندسة البرومبت إلى صورتها الحالية.',
          columns: ['السنة', 'المعلم', 'لماذا يهم'],
          rows: [
            { 'السنة': '2018–2019', 'المعلم': 'إصدار BERT (Google) وGPT-2 (OpenAI)', 'لماذا يهم': 'أظهرا أن نماذج المحوّلات يمكن توجيهها بصياغة المدخل، لكن لم يكن هناك تخصص رسمي بعد' },
            { 'السنة': '2020', 'المعلم': 'GPT-3 وورقة Brown وزملائه «Language Models are Few-Shot Learners»', 'لماذا يهم': 'أرست التوجيه بأمثلة قليلة: إعادة كتابة البرومبت تغيّر سلوك النموذج دون إعادة تدريب' },
            { 'السنة': '2022 (يناير)', 'المعلم': 'التوجيه بسلسلة الأفكار (Wei وزملاؤه)', 'لماذا يهم': 'أظهر أن بنية البرومبت قد تستدعي استدلالًا خطوة بخطوة' },
            { 'السنة': '2022 (مارس)', 'المعلم': 'InstructGPT / RLHF (Ouyang وزملاؤه، OpenAI)', 'لماذا يهم': 'نماذج مدرَّبة على اتباع التعليمات جعلت جودة البرومبت أشد تأثيرًا' },
            { 'السنة': '2022 (نوفمبر)', 'المعلم': 'إطلاق ChatGPT', 'لماذا يهم': 'أوصل كتابة البرومبت إلى جمهور واسع؛ بدأ الملايين بالتجريب خلال أيام' },
            { 'السنة': '2023 (الربع 1)', 'المعلم': 'وظائف «مهندس برومبت» تلفت الانتباه؛ وظيفة في Anthropic تعلن 175 ألفًا–335 ألف دولار', 'لماذا يهم': 'جعلت هندسة البرومبت مهنة محتملة ظاهرة، مع جدل واسع حول الدور' },
            { 'السنة': '2023 (مارس)', 'المعلم': 'إصدار GPT-4 مع إدخال الصور', 'لماذا يهم': 'وسّع كتابة البرومبت إلى ما بعد النص ليشمل الصور؛ وجاء سياق 128 ألف رمز مع GPT-4 Turbo (نوفمبر 2023)' },
            { 'السنة': '2023', 'المعلم': 'أطر مثل CRAFT وCO-STAR وSPECS وRISEN وTRACE؛ أدلة رسمية من OpenAI وGoogle', 'لماذا يهم': 'حوّلت الحرفة الفردية إلى قوالب قابلة لإعادة الاستخدام والتعليم' },
            { 'السنة': '2022–2023', 'المعلم': 'APE (Zhou وزملاؤه) وDSPy (Khattab وزملاؤه): برومبتات محسَّنة بنماذج لغوية', 'لماذا يهم': 'أظهرا أن النماذج اللغوية تكتب البرومبتات وتضبطها، فصار التحسين الآلي عمليًا' },
            { 'السنة': '2024', 'المعلم': 'Llama 3 (أبريل) وGemini 1.5 Pro بمعاينة سياق مليون رمز (فبراير)', 'لماذا يهم': 'نماذج مفتوحة الأوزان للنشر الخاص وسياقات طويلة جدًا نقلت التركيز إلى هندسة السياق' },
            { 'السنة': '2024–2025', 'المعلم': 'نماذج الاستدلال: OpenAI o1 (سبتمبر 2024)، DeepSeek-R1 (يناير 2025)، Claude 3.7 Sonnet بالتفكير الممتد (فبراير 2025)', 'لماذا يهم': 'تستدل النماذج خطوة بخطوة داخليًا، لذا يقل تأثير سلسلة الأفكار الصريحة فيها' },
            { 'السنة': '2025 (أبريل)', 'المعلم': 'Llama 4 (مزيج الخبراء)؛ يدعم Llama 4 Scout سياقًا بحجم 10 ملايين رمز', 'لماذا يهم': 'تتبنى النماذج مفتوحة الأوزان بنى مزيج الخبراء والسياقات الطويلة جدًا' },
            { 'السنة': '2026', 'المعلم': 'تصميم السياق وتنسيق الوكلاء يصبحان ممارسة معتادة', 'لماذا يهم': 'البرومبت طبقة واحدة في سياق مركّب؛ يُتوقع تفكير على مستوى النظام' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: 'كيف يُشكّل التاريخ أفضل الممارسات الحالية',
          content: [
            'كل مرحلة من مراحل تطور هندسة البرومبت تركت رسوبًا دائمًا في الممارسة الحالية.',
            'أعطتنا حقبة RAG وتصميم السياق الفهم القائل بأن البرومبتات لا توجد بمعزل عن غيرها — بل تتركّب مع البيانات المسترجعة وتعليمات النظام ومخرجات الأدوات لتشكيل سياق كامل.',
          ],
          items: [
            'تقنيات الاستدلال من 2022 → [توجيه سلسلة الأفكار: اجعل الذكاء الاصطناعي يُظهر استدلاله](/prompt-engineering/chain-of-thought-prompting) و[Tree of Thought و ReAct: الاستدلال المتقدم للمسائل الصعبة](/prompt-engineering/tree-of-thought-and-react)',
            'تطوير أطر العمل من 2023 → [أي إطار طلب يجب استخدامه؟](/prompt-engineering/which-prompt-framework-should-you-use)',
            'نمو نافذة السياق → [نوافذ السياق مشروحة: لماذا تنسى الذكاء الاصطناعي (وماذا تفعل؟)](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'اقتصاد الرموز → [الرموز والتكاليف والحدود: اقتصاديات استدعاء الذكاء الاصطناعي في 2026](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG كمكمّل للبرومبت المحض → [RAG موضَّح: كيف تُربط استجابات الذكاء الاصطناعي بالبيانات الحقيقية (2026)](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة: تطور هندسة البرومبت',
          faqs: [
            {
              q: 'متى بدأت هندسة البرومبت؟',
              a: 'بدأت الممارسة مع GPT-3 في مايو 2020 حين أظهر Brown وزملاؤه أن الأمثلة الموضوعة في البرومبت توجّه النموذج دون إعادة تدريب. وصفها الباحثون بـ«البرمجة بالبرومبت» في مطلع 2021، وتبعها التوجيه بسلسلة الأفكار في يناير 2022، وجعلها ChatGPT (نوفمبر 2022) مهارة جماهيرية.',
            },
            {
              q: 'من صاغ مصطلح "هندسة البرومبت" أول مرة؟',
              a: 'أصل المصطلح محل جدل، ولا يُنسب ابتكاره إلى شخص بعينه. كانت الأوراق البحثية تصف الأساليب القائمة على البرومبت منذ 2021، وازداد استخدام العبارة خلال 2022 وبعد ChatGPT. وتقدّم مقالة ويكيبيديا عن هندسة البرومبت لمحة عامة عن هذا التاريخ.',
            },
            {
              q: 'لماذا انفجرت هندسة البرومبت في الشعبية بعد ChatGPT؟',
              a: 'كان ChatGPT أول نموذج ذكاء اصطناعي للأغراض العامة يستطيع الملايين استخدامه فورًا، مجانًا، دون كتابة كود. الفجوة بين برومبت مُحكم وآخر مبهم كانت مرئية وذات صلة فورية — البرومبتات الأفضل تُنتج مخرجات أفضل.',
            },
            {
              q: 'كيف أثّرت أوراق البحث على تقنيات البرومبت الواقعية؟',
              a: 'كان النقل سريعًا بشكل غير عادي. انتقل برومبت Chain-of-Thought (Wei et al., 2022) من ورقة أكاديمية إلى تقنية يستخدمها الممارسون على نطاق واسع في أشهر.',
            },
            {
              q: 'هل هندسة البرومبت تصبح أقل أهمية مع تحسّن النماذج؟',
              a: 'لا — النماذج الأكثر قدرة تستجيب بشكل أفضل للبرومبتات المنظمة جيدًا. ما تغيّر هو مستوى هندسة البرومبت المطلوب للمهام البسيطة. لكن للمخرجات الإنتاجية المعقدة، يظل البرومبت المنظّم الرافعة الأكثر موثوقية.',
            },
            {
              q: 'ما الفرق بين هندسة البرومبت وهندسة السياق؟',
              a: 'هندسة البرومبت تشير عادةً إلى تصميم مدخلات النص لتحسين مخرجاته. هندسة السياق مفهوم أوسع يشير إلى تنسيق كل ما هو داخل نافذة سياق النموذج — تُعامل البرومبت كمكوّن في نظام مُصمَّم، لا كنتاج مستقل.',
            },
            {
              q: 'هل ستحلّ الأدوات التلقائية محلّ الحاجة لفهم هندسة البرومبت؟',
              a: 'الأدوات التلقائية كـDSPy تستطيع تحسين صياغة البرومبتات ضمن أهداف محددة، لكنها تتطلب من إنسان تحديد الهدف وما هي القيود وكيفية تقييم النجاح.',
            },
            {
              q: 'هل ماتت هندسة البرومبت في 2026؟',
              a: 'لا. لقد تحوّل التخصص ولم يختفِ. فكلما ازدادت قدرة النماذج انتقل العمل من حيل الصياغة والتنسيق إلى تصميم السياق: بناء المدخلات وإدارة الاسترجاع وتركيب مخرجات الأدوات. يضيق مسمى «مهندس برومبت»، لكن المهارة الأساسية حاضرة في كل دور يستخدم الذكاء الاصطناعي: المطوّر والمحلل والمسوّق والباحث. وما زال وضوح صياغة المهمة والسياق المناسب وتحديد صيغة المخرجات هي ما يحدد مدى فائدة إجابة النموذج.',
            },
            {
              q: 'هل أحتاج تعلّم هندسة البرومبت إذا كانت نماذج الذكاء الاصطناعي تتحسن باستمرار؟',
              a: 'نعم — لكن التركيز يتغير مع كل جيل. الأساسيات — الدور والسياق والتنسيق والقيود — تظل ثابتة عبر كل جيل من النماذج.',
            },
            {
              q: 'ما الفرق بين هندسة البرومبت والضبط الدقيق؟',
              a: 'هندسة البرومبت تُغيّر طريقة حديثك مع نموذج دون تعديل أوزانه. الضبط الدقيق يُعيد تدريب نموذج على بيانات جديدة لتغيير سلوكه بشكل دائم.',
            },
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: 'مفاهيم خاطئة شائعة حول هندسة البرومبت',
          mistakes: [
            {
              mistake: 'هندسة البرومبت تعني فقط كتابة جمل أفضل.',
              problem: 'هذا يتجاهل البعدين البنيوي والسياقي. لا تعتمد فعالية البرومبت على اختيار الكلمات وحده، بل على إسناد الدور (منح النموذج شخصية) وتحديد القيود وصيغة المخرجات واختيار الأمثلة، وكلها عناصر بنيوية لا علاقة لها بالقواعد اللغوية.',
              fix: 'انظر إلى هندسة البرومبت كتصميم نظام يكون البرومبت واجهته. استثمر في البنية: أسند الأدوار («أنت…»، «افترض…»)، وحدّد القيود («لا…»، «يجب أن يتضمن…»)، وعرّف صيغة المخرجات، وقدّم أمثلة. كثيرًا ما تهم البنية أكثر من البلاغة.',
            },
            {
              mistake: 'النماذج الأفضل تجعل هندسة البرومبت غير ذات صلة.',
              problem: 'النموذج الأقدر كالشخص الأقدر: يستجيب *بشكل أفضل* للتعليمات الواضحة لا أسوأ. تتضاعف مكاسب البرومبت الجيد مع ازدياد قدرة النموذج. ما يتغير هو *نوع* التوجيه المطلوب لا ضرورته.',
              fix: 'افترض أن كتابة البرومبت ستبقى محورية في العمل مع الذكاء الاصطناعي. ما يتطور هو مستوى التفصيل والسقالات المطلوبة. مع النماذج الأضعف قد تحتاج إلى بنية صريحة خطوة بخطوة، ومع الأقوى قد يكفي سطر واضح واحد، لكن هذه المباشرة نفسها قرار في هندسة البرومبت.',
            },
            {
              mistake: 'أدوات التحسين الآلي للبرومبت ستحل محل هندسة البرومبت البشرية.',
              problem: 'تساعد أدوات مثل DSPy في تحسين الصياغة ضمن أهداف محددة، لكن لا بد أن يحدد إنسان الهدف والقيود ومعايير النجاح وطريقة التقييم. تزيل الأتمتة عبء التكرار، لكنها لا تلغي الحاجة إلى التفكير المنظَّم في ما ينبغي أن يفعله النموذج.',
              fix: 'استخدم الأتمتة كأداة لا كبديل. ابدأ ببرومبت جيد البنية يصممه شخص يفهم المهمة، ثم صقله بأدوات مثل DSPy. يبقى الحكم البشري بشأن بنية المهمة غير قابل للاستبدال.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            { title: 'توجيه سلسلة الأفكار: اجعل الذكاء الاصطناعي يُظهر استدلاله', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'التوجيه الصفري مقابل التوجيه بأمثلة قليلة', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG موضَّح: كيف تُربط استجابات الذكاء الاصطناعي بالبيانات الحقيقية (2026)', url: '/prompt-engineering/rag-explained' },
            { title: 'نوافذ السياق مشروحة: لماذا تنسى الذكاء الاصطناعي (وماذا تفعل؟)', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'الرموز والتكاليف والحدود: اقتصاديات استدعاء الذكاء الاصطناعي في 2026', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — ورقة OpenAI عن GPT-3 التي قدّمت التوجيه بأمثلة قليلة كنموذج فكري.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — برومبتات بخطوات وسيطة؛ مصدر نتيجة GSM8K من 17.9% إلى 56.9% (الجدول 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT: اتباع التعليمات عبر التغذية الراجعة البشرية (RLHF).',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE: نماذج لغوية تولّد البرومبتات وتقيّمها.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — التوجيه من الأبسط إلى الأعقد: تفكيك المسائل إلى مسائل فرعية.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — الورقة التي قدّمت التوليد المعزَّز بالاسترجاع (RAG).',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — ورقة مبكرة تصف كتابة البرومبتات كبرمجة (2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — مراجعة لأساليب البرومبت في معالجة اللغة الطبيعية (2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy: إطار يترجم البرومبتات آليًا.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta، إعلان Llama 4 (5 أبريل 2025): مزيج الخبراء، وScout بسياق 10 ملايين رمز.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic، إعلان Claude 3.7 Sonnet (24 فبراير 2025): وضع التفكير الممتد.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google، إعلان Gemini 1.5 (15 فبراير 2024): سياق مليون رمز في معاينة محدودة.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1: الاستدلال عبر التعلّم المعزَّز (يناير 2025).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune (9 مارس 2023): تقرير عن نطاق راتب وظيفة مهندس البرومبت في Anthropic.',
          ],
        },

      },
    },

    pt: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      heroImage: '/images/prompt-engineering-history-overview-hero-pt.webp',
      title: 'De GPT-2 até hoje: Como evoluiu o Prompt Engineering',
      seoTitle: 'Prompt engineering morreu? Evolução de 2020 a 2026',
      intro: 'O prompt engineering evoluiu de experimentos informais em torno do GPT-3 em 2020 para uma disciplina estruturada com técnicas e frameworks nomeados até 2026. Esta linha do tempo traça os avanços-chave, os artigos de pesquisa e os pontos de inflexão que transformaram o prompting em uma habilidade fundamental.',
      metaDescription: 'O prompt engineering não morreu, mudou: linha do tempo com fontes do few-shot do GPT-3 (2020) ao chain-of-thought, ao ChatGPT e ao context design.',
      ogTitle: 'Como o prompt engineering evoluiu: do GPT-3 ao context design (2020–2026)',
      twitterTitle: 'Como o prompt engineering passou de "escreva um prompt melhor" ao context design em 6 anos',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10 min de leitura',
      educationalLevel: 'Beginner',
      audience: 'Profissionais do conhecimento e desenvolvedores que querem conhecer a história do prompt engineering e das técnicas de IA',
      primaryTerm: 'História do Prompt Engineering',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**O prompt engineering evoluiu de tentativas informais com o GPT-3 (2020) para uma disciplina estruturada, com frameworks, técnicas e ferramentas nomeados em 2026, em cinco fases: aprendizado few-shot, raciocínio chain-of-thought, o salto popular do ChatGPT, a otimização automatizada e o context design.**',
      quickFacts: [
        '**GPT-3 (2020):** o modelo de 175 bilhões de parâmetros introduziu o prompting few-shot como mudança de paradigma',
        '**Chain-of-Thought (2022):** Wei et al. mostraram que a estrutura do prompt pode ativar o raciocínio passo a passo; o PaLM 540B foi de 17,9% para 56,9% no GSM8K',
        '**ChatGPT (nov. 2022):** passou de 1 milhão de usuários em 5 dias (segundo Sam Altman, CEO da OpenAI); estimativa de 100 milhões de usuários ativos mensais em janeiro de 2023 (UBS, via Reuters)',
        '**Mercado de trabalho (2023):** uma vaga da Anthropic para "Prompt Engineer and Librarian" anunciava de US$ 175 mil a US$ 335 mil (Fortune, março de 2023)',
        '**GPT-4 e frameworks (2023):** a entrada de imagens e os frameworks publicados (CO-STAR, SPECS, RISEN) tornaram o prompting uma disciplina ensinável',
        '**Context design (2024–2026):** LLMs de pesos abertos, janelas de contexto de mais de 1 milhão de tokens e orquestração de agentes deslocaram o foco do ajuste de prompts para a engenharia de contexto em nível de sistema',
      ],
      toc: [
        { label: 'Pontos-chave', anchor: 'key-takeaways' },
        { label: 'Antes de o prompt engineering ter um nome (antes de 2020)', anchor: 'before-had-a-name' },
        { label: '2020: GPT-3 e o avanço do few-shot', anchor: 'gpt-3-few-shot' },
        { label: '2021–início de 2022: De truques de prompt a uma habilidade reconhecida', anchor: 'tricks-to-skill' },
        { label: '2022: Chain-of-Thought e prompts de raciocínio', anchor: 'chain-of-thought' },
        { label: 'Final de 2022–2023: O momento ChatGPT e o cargo de "Prompt Engineer"', anchor: 'chatgpt-moment' },
        { label: '2023: GPT-4, prompting multimodal e frameworks', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024: Prompt engineering automatizado e RAG', anchor: 'automated-rag' },
        { label: '2024–2025: Do prompt engineering ao context design', anchor: 'context-design' },
        { label: '2026 e além: O prompt engineering como alfabetização fundamental', anchor: 'beyond-2026' },
        { label: 'Linha do tempo: Marcos-chave do prompt engineering', anchor: 'timeline' },
        { label: 'Como a história molda as melhores práticas atuais', anchor: 'today-practice' },
        { label: 'Equívocos comuns sobre prompt engineering', anchor: 'common-mistakes' },
        { label: 'Leituras relacionadas', anchor: 'related-reading' },
        { label: 'FAQ: A evolução do prompt engineering', anchor: 'faq' },
        { label: 'Fontes', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Prompt engineering morreu? Evolução de 2020 a 2026',
        description: 'O prompt engineering não morreu, mudou: linha do tempo com fontes do few-shot do GPT-3 (2020) ao chain-of-thought, ao ChatGPT e ao context design.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'pt-BR',
        keywords: ['história do prompt engineering', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'linha do tempo do prompt engineering', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Profissionais do conhecimento e desenvolvedores que querem conhecer a história do prompt engineering e das técnicas de IA' },
        about: [
          { '@type': 'Thing', name: 'História do prompt engineering' },
          { '@type': 'Thing', name: 'Grandes modelos de linguagem' },
          { '@type': 'Thing', name: 'Técnicas e frameworks de IA' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'Quando o prompt engineering começou?', acceptedAnswer: { '@type': 'Answer', text: 'A prática começou com o GPT-3 em maio de 2020, quando Brown et al. mostraram que exemplos colocados no prompt podiam orientar um modelo sem retreinamento. No início de 2021, pesquisadores a descreveram como "prompt programming", em janeiro de 2022 veio o prompting chain-of-thought e o ChatGPT (novembro de 2022) o transformou em habilidade popular.' } },
          { '@type': 'Question', name: 'Quem cunhou pela primeira vez o termo "prompt engineering"?', acceptedAnswer: { '@type': 'Answer', text: 'A origem exata é debatida e nenhuma pessoa é creditada por inventar o termo. Artigos de pesquisa já descreviam métodos baseados em prompts em 2021, e a expressão ganhou uso mais amplo ao longo de 2022 e depois do ChatGPT. O artigo da Wikipédia sobre prompt engineering dá uma visão geral da história.' } },
          { '@type': 'Question', name: 'Por que o prompt engineering explodiu em popularidade após o ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'O ChatGPT foi o primeiro modelo de IA de propósito geral que milhões de não-pesquisadores podiam usar imediatamente, de graça, sem escrever código. A diferença entre um prompt bem elaborado e um vago era visível e imediatamente relevante — os melhores prompts produziam outputs visivelmente melhores. Esse ciclo de retroalimentação, experimentado simultaneamente por milhões de pessoas, transformou o prompt engineering de um conceito de pesquisa em uma habilidade massiva.' } },
          { '@type': 'Question', name: 'Como os artigos de pesquisa influenciaram as técnicas de prompting do mundo real?', acceptedAnswer: { '@type': 'Answer', text: 'A transferência foi incomumente rápida para a pesquisa em IA. O prompting Chain-of-Thought (Wei et al., 2022) passou de artigo acadêmico para técnica amplamente usada por profissionais em meses, em parte porque não exigia ferramentas — apenas uma mudança na forma de escrever o prompt. O few-shot prompting do artigo do GPT-3 (Brown et al., 2020) era imediatamente adotável por qualquer pessoa com acesso à API.' } },
          { '@type': 'Question', name: 'O prompt engineering está se tornando menos importante à medida que os modelos melhoram?', acceptedAnswer: { '@type': 'Answer', text: 'Não — modelos mais capazes respondem melhor a prompts bem estruturados, não pior. Os ganhos do bom prompting aumentam à medida que o modelo se torna mais capaz de seguir instruções precisas. O que mudou é o nível de prompt engineering necessário para tarefas simples. Mas para outputs complexos em nível de produção, o prompting estruturado continua sendo a alavanca mais confiável disponível.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre prompt engineering e context engineering?', acceptedAnswer: { '@type': 'Answer', text: 'O prompt engineering se refere tipicamente a projetar o input de texto para um modelo para melhorar seu output. O context engineering é um conceito mais amplo e recente que se refere a orquestrar tudo o que está no context window do modelo: o system prompt, os documentos recuperados, o histórico de conversa, os outputs das ferramentas e o input do usuário — todos compostos deliberadamente. O context engineering trata o prompt como um componente em um sistema projetado, não como um artefato independente.' } },
          { '@type': 'Question', name: 'As ferramentas automatizadas substituirão a necessidade de entender prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Ferramentas automatizadas como o DSPy podem otimizar a redação de prompts dentro de objetivos definidos, mas exigem que um humano especifique qual é o objetivo, quais restrições se aplicam e como avaliar o sucesso. Entender os princípios do prompt engineering continua sendo necessário para usar essas ferramentas de forma eficaz. A automação elimina parte da iteração manual; não elimina a necessidade de pensamento estruturado.' } },
          { '@type': 'Question', name: 'O prompt engineering está morto em 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Não. A disciplina mudou de lugar, não desapareceu. À medida que os modelos ficam mais capazes, o trabalho passa de truques de sintaxe e formatação para o context design: estruturar entradas, gerenciar a recuperação e compor saídas de ferramentas. O cargo "Prompt Engineer" está se estreitando, mas a habilidade de fundo está em todo papel que usa IA: desenvolvedor, analista, profissional de marketing, pesquisador. Enquadrar bem a tarefa, fornecer o contexto relevante e especificar o formato de saída continuam determinando o quanto a resposta do modelo é útil.' } },
          { '@type': 'Question', name: 'Preciso aprender prompt engineering se os modelos de IA continuam melhorando?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — mas o foco muda a cada geração. Modelos melhores reduzem a necessidade de soluções elaboradas e aumentam o benefício da intenção clara, do contexto estruturado e dos exemplos bem escolhidos. Os fundamentos — papel, contexto, formato, restrições — permanecem estáveis em cada geração de modelos. Aprendê-los agora significa que a habilidade se acumula em vez de expirar.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre prompt engineering e fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'O prompt engineering muda como você se comunica com um modelo sem modificar seus pesos. O fine-tuning retreina um modelo em novos dados para mudar seu comportamento de forma permanente. O prompt engineering é mais rápido, mais econômico e reversível — você pode iterar em minutos. O fine-tuning é melhor quando o comportamento alvo é consistente, de alto volume ou impossível de descrever de forma confiável em um prompt.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Linha do tempo da evolução do prompt engineering: 2018–2026',
        description: 'Uma linha do tempo dos principais marcos, artigos de pesquisa e lançamentos de modelos que moldaram a evolução do prompt engineering de 2018 a 2026.',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'pt-BR',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT (Google) e GPT-2 (OpenAI) lançados (2018–2019)', description: 'Mostraram que modelos transformer podiam ser orientados pela formulação da entrada, mas ainda não havia disciplina formal' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 e Brown et al., "Language Models are Few-Shot Learners" (2020)', description: 'Estabeleceu o prompting few-shot: reescrever o prompt muda o comportamento do modelo sem retreinamento' },
          { '@type': 'ListItem', position: 3, name: 'Prompting chain-of-thought (Wei et al.) (2022 (jan.))', description: 'Mostrou que a estrutura do prompt pode provocar raciocínio passo a passo' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang et al., OpenAI) (2022 (mar.))', description: 'Modelos treinados para seguir instruções tornaram a qualidade do prompt muito mais importante' },
          { '@type': 'ListItem', position: 5, name: 'Lançamento do ChatGPT (2022 (nov.))', description: 'Levou o prompting a um público de massa; milhões começaram a experimentar em poucos dias' },
          { '@type': 'ListItem', position: 6, name: 'Vagas de "prompt engineer" chamam atenção; uma vaga da Anthropic anuncia US$ 175 mil–335 mil (2023 (T1))', description: 'Deu visibilidade ao prompt engineering como possível profissão, embora o papel tenha sido muito debatido' },
          { '@type': 'ListItem', position: 7, name: 'Lançamento do GPT-4 com entrada de imagens (2023 (mar.))', description: 'Ampliou o prompting além do texto para imagens; o contexto de 128 mil tokens veio com o GPT-4 Turbo (nov. 2023)' },
          { '@type': 'ListItem', position: 8, name: 'Frameworks como CRAFT, CO-STAR, SPECS, RISEN e TRACE; guias oficiais da OpenAI e do Google (2023)', description: 'Transformou o ofício individual em modelos reutilizáveis e ensináveis' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou et al.) e DSPy (Khattab et al.): prompts otimizados por LLM (2022–2023)', description: 'Mostrou que LLMs podem escrever e ajustar prompts, tornando prática a otimização automática' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3 (abr.) e Gemini 1.5 Pro com prévia de contexto de 1 milhão de tokens (fev.) (2024)', description: 'Modelos de pesos abertos para implantação privada e contextos muito longos deslocaram o foco para a engenharia de contexto' },
          { '@type': 'ListItem', position: 11, name: 'Modelos de raciocínio: OpenAI o1 (set. 2024), DeepSeek-R1 (jan. 2025), Claude 3.7 Sonnet com extended thinking (fev. 2025) (2024–2025)', description: 'Os modelos raciocinam passo a passo internamente, então o chain-of-thought explícito importa menos neles' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4 (mixture-of-experts); o Llama 4 Scout aceita contexto de 10 milhões de tokens (2025 (abr.))', description: 'Modelos de pesos abertos adotam arquiteturas mixture-of-experts e contextos muito longos' },
          { '@type': 'ListItem', position: 13, name: 'Context design e orquestração de agentes viram prática padrão (2026)', description: 'O prompting é uma camada dentro de um contexto composto; espera-se raciocínio em nível de sistema' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: 'Como o prompt engineering evoluiu: uma visão geral',
          snippets: [
            { type: 'in-one-sentence', text: 'O prompt engineering saiu de truques de formulação por tentativa e erro para uma disciplina documentada de padrões reutilizáveis, avaliação e controle de versão, à medida que os modelos melhoraram e a estrutura passou a pesar mais do que a escolha esperta de palavras.' },
            { type: 'in-plain-terms', text: 'Começou como folclore: as pessoas trocavam frases que pareciam funcionar. Conforme os modelos melhoraram, as palavras mágicas deixaram de importar e a estrutura assumiu: quem, o quê e em que formato. Foi essa virada que transformou um punhado de truques em um ofício que dá para ensinar.' },
          ],
          content: [
            '**O prompt engineering evoluiu de uma manipulação de texto informal por tentativa e erro em torno do GPT-3 em 2020 para uma disciplina estruturada com técnicas, frameworks e ferramentas nomeados até 2026.** O arco abrange cinco fases: os primeiros experimentos de few-shot, o momento ChatGPT que trouxe a habilidade ao conhecimento do público, o desenvolvimento de técnicas de raciocínio estruturado, a ascensão da otimização automática de prompts e a atual mudança para o context design.',
            'A disciplina não surgiu de um único artigo ou empresa. Cresceu a partir da confluência da pesquisa (few-shot learning, chain-of-thought reasoning, RAG), comunidades de profissionais que compartilhavam coleções de prompts online e a repentina disponibilidade pública de modelos poderosos que tornou o bom prompting imediatamente recompensador. Em 2026, o prompt engineering não é mais um truque de nicho — é uma habilidade básica para qualquer pessoa que trabalha com sistemas de IA.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: 'Pontos-chave',
          isTldr: true,
          items: [
            '2019–2020: GPT-2 e os primeiros transformers — os prompts eram inputs, não uma disciplina',
            '2020: GPT-3 e Brown et al. introduziram o few-shot prompting como uma mudança de paradigma',
            '2022: Os prompts de raciocínio Chain-of-Thought transformaram o prompting em uma habilidade estruturada',
            'Final de 2022: O ChatGPT trouxe o prompt engineering ao conhecimento do público e às ofertas de emprego',
            '2023: GPT-4, prompting multimodal e frameworks formalizaram as melhores práticas',
            '2024–2026: O context design, o prompting automatizado e os LLMs de código aberto redefiniram o campo',
          ],
        },

        pre2020: {
          id: 'before-had-a-name',
          title: 'Antes de o prompt engineering ter um nome (antes de 2020)',
          content: [
            'Antes de existir o termo "prompt engineering", pesquisadores já manipulavam as entradas dos modelos para obter saídas melhores, só que sem chamar isso de nada. Os primeiros modelos transformer, como o GPT-2 (2019, OpenAI) e o BERT (2018, Google), eram usados com textos de entrada escolhidos com cuidado, mas a prática era tratada como parte do pré-processamento de dados, não como uma habilidade própria.',
            'O GPT-2 foi anunciado em fevereiro de 2019 como um modelo de 1,5 bilhão de parâmetros; a OpenAI lançou primeiro versões menores e publicou o modelo completo em novembro de 2019. Ele completava textos de forma surpreendentemente coerente. Pesquisadores e primeiros usuários notaram que a formulação da entrada mudava muito a qualidade da continuação, mas ainda não havia framework, terminologia nem comunidade em torno dessa observação. Prompts eram entradas, não artefatos de engenharia.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020: GPT-3 e o avanço do few-shot',
          content: [
            '**A história moderna do prompt engineering começa, na prática, com o GPT-3.** Em maio de 2020, pesquisadores da OpenAI publicaram "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)" (Brown et al.), que descreve o GPT-3, um modelo de 175 bilhões de parâmetros. O artigo mostrou que incluir alguns exemplos da tarefa diretamente no prompt, sem nenhuma atualização dos pesos do modelo, melhorava o desempenho em muitas tarefas posteriores.',
            'Essa foi a semente do prompt engineering como disciplina. Pesquisadores e desenvolvedores perceberam que o mesmo modelo podia virar tradutor, resumidor, gerador de código ou sistema de perguntas e respostas apenas mudando a forma de escrever o prompt. O modelo não precisava ser retreinado: precisava de um prompt melhor. Essa ideia mudou o que é um prompt: não só uma entrada, mas um artefato de design.',
            'Brown et al. relataram que o desempenho few-shot geralmente melhorava com o tamanho do modelo, e que o GPT-3 de 175B parâmetros era a variante mais forte no geral. Isso ligou escala e aprendizado baseado em prompts e fez da qualidade do prompt uma variável que os profissionais, e não só os pesquisadores, podiam controlar.',
            'Veja [Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) para um guia prático da técnica que o GPT-3 tornou famosa.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–início de 2022: De truques de prompt a uma habilidade reconhecida',
          content: [
            'Entre 2021 e o início de 2022, a elaboração de prompts saiu dos artigos de pesquisa e chegou às comunidades de profissionais. Pesquisadores começaram a descrever a prática por escrito: Reynolds e McDonell, em "[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)" (fevereiro de 2021), argumentaram que escrever prompts para o GPT-3 é uma forma de programar, e a revisão "[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)" (Liu et al., julho de 2021) catalogou métodos baseados em prompts no processamento de linguagem natural. Enquanto isso, profissionais trocavam prompts que funcionavam em comunidades on-line.',
            'O artigo do InstructGPT, da OpenAI (Ouyang et al., março de 2022), apresentou modelos ajustados com feedback humano (RLHF) que seguiam instruções em linguagem natural com muito mais confiabilidade que o GPT-3 base, o que tornou a qualidade do prompt ainda mais importante. Em meados de 2022, estava claro que o prompting era uma habilidade transferível, e não uma curiosidade de pesquisadores.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022: Chain-of-Thought e prompts de raciocínio',
          content: [
            '**A introdução do prompting chain-of-thought (CoT) em 2022 foi o avanço técnico mais importante da curta história da disciplina.** Wei et al. (Google) publicaram "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" e mostraram que dar ao modelo exemplos resolvidos com etapas intermediárias melhorava o desempenho em tarefas de aritmética, bom senso e raciocínio simbólico. Em um resultado de destaque, o prompting chain-of-thought elevou a precisão do PaLM 540B no GSM8K, um benchmark de matemática do ensino fundamental, de 17,9% para 56,9% (tabela 1 do artigo), um ganho obtido mudando o prompt, sem treinamento adicional. A implicação era profunda: a estrutura do prompt podia ativar um comportamento de raciocínio diferente, e não apenas fatos diferentes.',
            'Técnicas relacionadas surgiram logo depois. Zhou et al. introduziram o [least-to-most prompting](https://arxiv.org/abs/2205.10625), que decompõe problemas complexos em uma sequência de subproblemas mais simples resolvidos em ordem. Essas abordagens transformaram o prompt engineering de um exercício de formatação em uma ferramenta para obter raciocínio estruturado de modelos que não foram treinados explicitamente para isso. O prompting virou um andaime para a cognição.',
            'Para o guia completo da técnica, veja [Chain-of-Thought Prompting: Faça a IA mostrar seu raciocínio](/prompt-engineering/chain-of-thought-prompting) e [Prompt chaining: como dividir tarefas grandes em etapas vencedoras](/prompt-engineering/prompt-chaining).',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'Final de 2022–2023: O momento ChatGPT e o cargo de "Prompt Engineer"',
          callouts: [
            {
              type: 'did-you-know',
              label: 'Você sabia?',
              text: 'Uma análise do UBS citada pela Reuters estimou que o ChatGPT chegou a cerca de 100 milhões de usuários ativos mensais em janeiro de 2023, cerca de dois meses após o lançamento. Segundo a Reuters, com dados da Sensor Tower, o TikTok levou cerca de nove meses e o Instagram cerca de dois anos e meio para chegar à mesma marca. Essa velocidade explica por que o prompt engineering passou de conceito de pesquisa a habilidade popular quase da noite para o dia.',
            },
          ],
          content: [
            '**O lançamento do ChatGPT em 30 de novembro de 2022 mudou da noite para o dia o perfil público do prompt engineering.** Sam Altman, CEO da OpenAI, disse no Twitter no início de dezembro de 2022 que o ChatGPT havia passado de um milhão de usuários em cinco dias, e uma análise do UBS relatada pela Reuters estimou cerca de 100 milhões de usuários ativos mensais em janeiro de 2023. Em poucos dias, milhões de pessoas experimentavam prompts e descobriam que os resultados variavam muito conforme a formulação, e a imprensa de tecnologia passou a tratar o prompt engineering como uma habilidade que valia a pena aprender.',
            'No início de 2023, "prompt engineer" apareceu como cargo: uma vaga da Anthropic para "Prompt Engineer and Librarian" anunciava uma faixa salarial de US$ 175 mil a US$ 335 mil, [como informou a Fortune](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) em março de 2023. Se o prompt engineering seria uma carreira duradoura ou um papel de transição (em parte design de interface humano-computador, em parte conhecimento do domínio, em parte garantia de qualidade) foi muito debatido.',
            'Nenhuma pessoa específica é creditada por ter cunhado o termo. Artigos de pesquisa já descreviam métodos baseados em prompts em 2021 (veja acima), e a expressão se espalhou amplamente depois do ChatGPT. O [artigo da Wikipédia sobre prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) dá uma visão geral da história.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023: GPT-4, prompting multimodal e frameworks',
          content: [
            'O GPT-4, em março de 2023, trouxe a entrada de imagens além do texto, abrindo o prompt engineering para tarefas visuais como descrever imagens, comparar diagramas e anotar gráficos; janelas de contexto maiores vieram depois (128 mil tokens com o GPT-4 Turbo em novembro de 2023). O Gemini, do Google (dezembro de 2023), e os modelos Claude 3 com visão, da Anthropic (março de 2024), somaram opções multimodais de outros fornecedores.',
            'No mesmo período, as boas práticas foram formalizadas. A OpenAI publicou seu [guia oficial de prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering). O Google Cloud publicou seu próprio [guia de prompt engineering](https://cloud.google.com/discover/what-is-prompt-engineering). Autores e equipes independentes publicaram frameworks como CRAFT, CO-STAR, SPECS, RISEN e TRACE, que deram aos profissionais modelos repetíveis para estruturar prompts e reduziram a dependência de tentativa e erro.',
            'Esses frameworks marcaram o amadurecimento do prompt engineering, de habilidade pessoal a prática ensinável e compartilhável. Veja [Qual framework de prompt você deve usar?](/prompt-engineering/which-prompt-framework-should-you-use) para escolher entre eles e [Além do texto: Como criar prompts com imagens](/prompt-engineering/beyond-text-how-to-prompt-with-images) para a dimensão multimodal.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024: Prompt engineering automatizado e RAG',
          content: [
            'Um avanço marcante por volta de 2023 foi a pesquisa que mostrou que LLMs conseguem otimizar prompts tão bem quanto humanos. Zhou et al. publicaram em novembro de 2022 "[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)" (APE): um LLM gerava e pontuava instruções candidatas e igualou ou superou as escritas por humanos em 19 das 24 tarefas testadas. O framework DSPy, de pesquisadores de Stanford ([Khattab et al., outubro de 2023](https://arxiv.org/abs/2310.03714)), foi além: o desenvolvedor descreve o que o prompt deve alcançar e a redação é compilada automaticamente.',
            'Ao mesmo tempo, a geração aumentada por recuperação (RAG), apresentada em 2020 por [Lewis et al.](https://arxiv.org/abs/2005.11401) no Facebook AI Research (hoje Meta), tornou-se um padrão central em sistemas de IA em produção. O RAG injetava documentos recuperados diretamente no contexto do prompt, ancorando as respostas em fontes reais e atualizadas em vez de exigir que o prompt contivesse todos os fatos. Com isso, a ênfase passou de "como faço o modelo saber isso?" para "como estruturo o contexto para o modelo usá-lo corretamente?".',
            'Veja [RAG Explicado: Como Ancorar Respostas de IA em Dados Reais (2026)](/prompt-engineering/rag-explained) e [Self-Consistency Prompting: Gere Múltiplas Respostas, Escolha a Mais Consistente](/prompt-engineering/self-consistency-prompting) para as principais técnicas desse período.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025: Do prompt engineering ao context design',
          content: [
            'Por volta de 2024, um novo enquadramento passou a substituir a ideia simples de "escrever um prompt melhor". Profissionais e pesquisadores começaram a falar em engenharia de contexto: orquestrar tudo o que entra na janela de contexto (prompt de sistema, documentos recuperados, saídas de ferramentas, histórico da conversa e entrada do usuário), composto de forma deliberada para guiar o comportamento do modelo. O prompt deixou de ser um artefato isolado e passou a ser uma camada de um contexto projetado.',
            'Vários avanços aceleraram essa mudança. Os modelos Llama 3 da Meta (abril de 2024) tornaram LLMs de pesos abertos capazes disponíveis para implantação privada, deslocando parte do prompt engineering das APIs na nuvem para a infraestrutura local. O Google anunciou em fevereiro de 2024 o Gemini 1.5 Pro com uma [janela de contexto de 1 milhão de tokens em prévia limitada](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/), tornando viável colocar bases de código, livros ou coleções de documentos inteiros em um único prompt. Frameworks multiagente como LangChain e AutoGen transformaram o prompting em orquestração: um prompt aciona outro modelo, que aciona uma ferramenta, que devolve contexto ao prompt seguinte.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026 e além: O prompt engineering como alfabetização fundamental',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Dica profissional',
              text: 'A mudança de "prompt engineering" para "context design" não é só terminologia: ela muda o que você otimiza. Em vez de ajustar a redação da sua instrução, você projeta o que entra na janela de contexto: prompt de sistema, documentos recuperados, histórico da conversa, saídas de ferramentas e entrada do usuário. O prompt é uma camada, não o todo.',
            },
          ],
          content: [
            'Em 2026, o prompt engineering é cada vez mais descrito não como um cargo de nicho, mas como uma alfabetização básica para quem trabalha com ferramentas de IA: saber enunciar uma tarefa, fornecer o contexto certo e especificar a saída necessária.',
            'O papel se dividiu em duas trilhas. A primeira é o design de sistemas e de contexto: a engenharia de sistemas de IA em produção em que os prompts fazem parte de uma arquitetura maior com recuperação, agentes e pipelines de avaliação. A segunda é o uso cotidiano: escrever prompts claros e estruturados que dão resultados úteis sem conhecer a arquitetura por trás. Ambas as trilhas se beneficiam dos mesmos princípios: tarefa bem especificada, contexto adequado, restrições e formato de saída.',
            'O que não mudou, apesar de modelos mais capazes e ferramentas automatizadas, é o princípio fundamental: quanto mais clara e estruturada a entrada, mais confiável e útil a saída. As técnicas, a terminologia e as ferramentas amadureceram, mas a ideia central da era do GPT-3 continua valendo em 2026.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'Linha do tempo: Marcos-chave do prompt engineering',
          content: 'A tabela abaixo resume os principais marcos de 2018 a 2026: os eventos, artigos e lançamentos de modelos que moldaram a evolução do prompt engineering até sua forma atual.',
          columns: ['Ano', 'Marco', 'Por que importa'],
          rows: [
            { 'Ano': '2018–2019', 'Marco': 'BERT (Google) e GPT-2 (OpenAI) lançados', 'Por que importa': 'Mostraram que modelos transformer podiam ser orientados pela formulação da entrada, mas ainda não havia disciplina formal' },
            { 'Ano': '2020', 'Marco': 'GPT-3 e Brown et al., "Language Models are Few-Shot Learners"', 'Por que importa': 'Estabeleceu o prompting few-shot: reescrever o prompt muda o comportamento do modelo sem retreinamento' },
            { 'Ano': '2022 (jan.)', 'Marco': 'Prompting chain-of-thought (Wei et al.)', 'Por que importa': 'Mostrou que a estrutura do prompt pode provocar raciocínio passo a passo' },
            { 'Ano': '2022 (mar.)', 'Marco': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Por que importa': 'Modelos treinados para seguir instruções tornaram a qualidade do prompt muito mais importante' },
            { 'Ano': '2022 (nov.)', 'Marco': 'Lançamento do ChatGPT', 'Por que importa': 'Levou o prompting a um público de massa; milhões começaram a experimentar em poucos dias' },
            { 'Ano': '2023 (T1)', 'Marco': 'Vagas de "prompt engineer" chamam atenção; uma vaga da Anthropic anuncia US$ 175 mil–335 mil', 'Por que importa': 'Deu visibilidade ao prompt engineering como possível profissão, embora o papel tenha sido muito debatido' },
            { 'Ano': '2023 (mar.)', 'Marco': 'Lançamento do GPT-4 com entrada de imagens', 'Por que importa': 'Ampliou o prompting além do texto para imagens; o contexto de 128 mil tokens veio com o GPT-4 Turbo (nov. 2023)' },
            { 'Ano': '2023', 'Marco': 'Frameworks como CRAFT, CO-STAR, SPECS, RISEN e TRACE; guias oficiais da OpenAI e do Google', 'Por que importa': 'Transformou o ofício individual em modelos reutilizáveis e ensináveis' },
            { 'Ano': '2022–2023', 'Marco': 'APE (Zhou et al.) e DSPy (Khattab et al.): prompts otimizados por LLM', 'Por que importa': 'Mostrou que LLMs podem escrever e ajustar prompts, tornando prática a otimização automática' },
            { 'Ano': '2024', 'Marco': 'Llama 3 (abr.) e Gemini 1.5 Pro com prévia de contexto de 1 milhão de tokens (fev.)', 'Por que importa': 'Modelos de pesos abertos para implantação privada e contextos muito longos deslocaram o foco para a engenharia de contexto' },
            { 'Ano': '2024–2025', 'Marco': 'Modelos de raciocínio: OpenAI o1 (set. 2024), DeepSeek-R1 (jan. 2025), Claude 3.7 Sonnet com extended thinking (fev. 2025)', 'Por que importa': 'Os modelos raciocinam passo a passo internamente, então o chain-of-thought explícito importa menos neles' },
            { 'Ano': '2025 (abr.)', 'Marco': 'Llama 4 (mixture-of-experts); o Llama 4 Scout aceita contexto de 10 milhões de tokens', 'Por que importa': 'Modelos de pesos abertos adotam arquiteturas mixture-of-experts e contextos muito longos' },
            { 'Ano': '2026', 'Marco': 'Context design e orquestração de agentes viram prática padrão', 'Por que importa': 'O prompting é uma camada dentro de um contexto composto; espera-se raciocínio em nível de sistema' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: 'Como a história molda as melhores práticas atuais',
          content: [
            'Cada fase da evolução do prompt engineering deixou um depósito duradouro na prática atual. A era do GPT-3 nos deu o insight fundamental de que o comportamento do modelo é moldado pela estrutura do input — não apenas pelo conteúdo. A era Chain-of-Thought nos deu andaimentos de raciocínio explícito: prompting passo a passo, prompt chaining e abordagens tree-of-thought. A era dos frameworks nos deu templates reutilizáveis que codificam as melhores práticas sem exigir que cada profissional as descubra do zero.',
            'A era RAG e context design nos deu a compreensão de que os prompts não existem de forma isolada — são compostos com dados recuperados, instruções do sistema e outputs de ferramentas para formar um contexto completo.',
          ],
          items: [
            'Técnicas de raciocínio de 2022 → [Chain-of-Thought Prompting: Faça a IA mostrar seu raciocínio](/prompt-engineering/chain-of-thought-prompting) e [Tree of Thought e ReAct: Raciocínio avançado para problemas difíceis](/prompt-engineering/tree-of-thought-and-react)',
            'Desenvolvimento de frameworks de 2023 → [Qual framework de prompt você deve usar?](/prompt-engineering/which-prompt-framework-should-you-use)',
            'Crescimento do context window → [Janelas de contexto explicadas: Por que a IA esquece (e o que fazer)](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'Economia de tokens ao longo das gerações de modelos → [Tokens, Custos e Limites: A Economia do Prompting de IA em 2026](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG como complemento ao prompting puro → [RAG Explicado: Como Ancorar Respostas de IA em Dados Reais (2026)](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: A evolução do prompt engineering',
          faqs: [
            {
              q: 'Quando o prompt engineering começou?',
              a: 'A prática começou com o GPT-3 em maio de 2020, quando Brown et al. mostraram que exemplos colocados no prompt podiam orientar um modelo sem retreinamento. No início de 2021, pesquisadores a descreveram como "prompt programming", em janeiro de 2022 veio o prompting chain-of-thought e o ChatGPT (novembro de 2022) o transformou em habilidade popular.',
            },
            {
              q: 'Quem cunhou pela primeira vez o termo "prompt engineering"?',
              a: 'A origem exata é debatida e nenhuma pessoa é creditada por inventar o termo. Artigos de pesquisa já descreviam métodos baseados em prompts em 2021, e a expressão ganhou uso mais amplo ao longo de 2022 e depois do ChatGPT. O artigo da Wikipédia sobre prompt engineering dá uma visão geral da história.',
            },
            {
              q: 'Por que o prompt engineering explodiu em popularidade após o ChatGPT?',
              a: 'O ChatGPT foi o primeiro modelo de IA de propósito geral que milhões de não-pesquisadores podiam usar imediatamente, de graça, sem escrever código. A diferença entre um prompt bem elaborado e um vago era visível e imediatamente relevante — os melhores prompts produziam outputs visivelmente melhores. Esse ciclo de retroalimentação, experimentado simultaneamente por milhões de pessoas, transformou o prompt engineering de um conceito de pesquisa em uma habilidade massiva.',
            },
            {
              q: 'Como os artigos de pesquisa influenciaram as técnicas de prompting do mundo real?',
              a: 'A transferência foi incomumente rápida para a pesquisa em IA. O prompting Chain-of-Thought (Wei et al., 2022) passou de artigo acadêmico para técnica amplamente usada por profissionais em meses, em parte porque não exigia ferramentas — apenas uma mudança na forma de escrever o prompt. O few-shot prompting do artigo do GPT-3 (Brown et al., 2020) era imediatamente adotável por qualquer pessoa com acesso à API.',
            },
            {
              q: 'O prompt engineering está se tornando menos importante à medida que os modelos melhoram?',
              a: 'Não — modelos mais capazes respondem melhor a prompts bem estruturados, não pior. Os ganhos do bom prompting aumentam à medida que o modelo se torna mais capaz de seguir instruções precisas. O que mudou é o nível de prompt engineering necessário para tarefas simples. Mas para outputs complexos em nível de produção, o prompting estruturado continua sendo a alavanca mais confiável disponível.',
            },
            {
              q: 'Qual é a diferença entre prompt engineering e context engineering?',
              a: 'O prompt engineering se refere tipicamente a projetar o input de texto para um modelo para melhorar seu output. O context engineering é um conceito mais amplo e recente que se refere a orquestrar tudo o que está no context window do modelo: o system prompt, os documentos recuperados, o histórico de conversa, os outputs das ferramentas e o input do usuário — todos compostos deliberadamente. O context engineering trata o prompt como um componente em um sistema projetado, não como um artefato independente.',
            },
            {
              q: 'As ferramentas automatizadas substituirão a necessidade de entender prompt engineering?',
              a: 'Ferramentas automatizadas como o DSPy podem otimizar a redação de prompts dentro de objetivos definidos, mas exigem que um humano especifique qual é o objetivo, quais restrições se aplicam e como avaliar o sucesso. Entender os princípios do prompt engineering continua sendo necessário para usar essas ferramentas de forma eficaz. A automação elimina parte da iteração manual; não elimina a necessidade de pensamento estruturado.',
            },
            {
              q: 'O prompt engineering está morto em 2026?',
              a: 'Não. A disciplina mudou de lugar, não desapareceu. À medida que os modelos ficam mais capazes, o trabalho passa de truques de sintaxe e formatação para o context design: estruturar entradas, gerenciar a recuperação e compor saídas de ferramentas. O cargo "Prompt Engineer" está se estreitando, mas a habilidade de fundo está em todo papel que usa IA: desenvolvedor, analista, profissional de marketing, pesquisador. Enquadrar bem a tarefa, fornecer o contexto relevante e especificar o formato de saída continuam determinando o quanto a resposta do modelo é útil.',
            },
            {
              q: 'Preciso aprender prompt engineering se os modelos de IA continuam melhorando?',
              a: 'Sim — mas o foco muda a cada geração. Modelos melhores reduzem a necessidade de soluções elaboradas e aumentam o benefício da intenção clara, do contexto estruturado e dos exemplos bem escolhidos. Os fundamentos — papel, contexto, formato, restrições — permanecem estáveis em cada geração de modelos. Aprendê-los agora significa que a habilidade se acumula em vez de expirar.',
            },
            {
              q: 'Qual é a diferença entre prompt engineering e fine-tuning?',
              a: 'O prompt engineering muda como você se comunica com um modelo sem modificar seus pesos. O fine-tuning retreina um modelo em novos dados para mudar seu comportamento de forma permanente. O prompt engineering é mais rápido, mais econômico e reversível — você pode iterar em minutos. O fine-tuning é melhor quando o comportamento alvo é consistente, de alto volume ou impossível de descrever de forma confiável em um prompt.',
            },
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: 'Equívocos comuns sobre prompt engineering',
          mistakes: [
            {
              mistake: 'Prompt engineering é só escrever frases melhores.',
              problem: 'Isso ignora as dimensões estrutural e contextual. A eficácia de um prompt não depende apenas da escolha de palavras, mas da atribuição de papel (dar uma persona ao modelo), das restrições, do formato de saída e da escolha de exemplos: elementos estruturais que nada têm a ver com gramática.',
              fix: 'Pense no prompt engineering como o design de um sistema cuja interface é o prompt. Invista em estrutura: atribua papéis ("Você é um…", "Assuma que…"), especifique restrições ("Não…", "Deve incluir…"), defina o formato de saída e forneça exemplos. A estrutura costuma importar mais que a eloquência.',
            },
            {
              mistake: 'Modelos melhores tornam o prompt engineering irrelevante.',
              problem: 'Um modelo mais capaz é como uma pessoa mais capaz: responde *melhor* a instruções claras, não pior. Os ganhos de um bom prompting crescem com a capacidade do modelo. O que muda é o *tipo* de prompting necessário, não se ele é necessário.',
              fix: 'Presuma que o prompting continuará central no trabalho com IA. O que evolui é o nível de detalhe e de estrutura exigido. Com modelos mais fracos, pode ser preciso uma estrutura passo a passo explícita; com modelos mais fortes, uma instrução clara de uma linha pode bastar, mas essa objetividade também é uma escolha de prompt engineering.',
            },
            {
              mistake: 'Ferramentas de otimização automática de prompts vão substituir o prompt engineering humano.',
              problem: 'Ferramentas como o DSPy ajudam a otimizar a redação dentro de objetivos definidos, mas uma pessoa ainda precisa especificar o objetivo, as restrições, os critérios de sucesso e o método de avaliação. A automação elimina o trabalho de iteração; não elimina a necessidade de pensar de forma estruturada sobre o que o modelo deve fazer.',
              fix: 'Use a automação como ferramenta, não como substituição. Comece com um prompt bem estruturado, feito por alguém que entende a tarefa, e use ferramentas como o DSPy para refiná-lo. O julgamento humano sobre a estrutura da tarefa continua insubstituível.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            { title: 'Chain-of-Thought Prompting: Faça a IA mostrar seu raciocínio', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Zero-Shot vs. Few-Shot Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG Explicado: Como Ancorar Respostas de IA em Dados Reais (2026)', url: '/prompt-engineering/rag-explained' },
            { title: 'Janelas de contexto explicadas: Por que a IA esquece (e o que fazer)', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'Tokens, Custos e Limites: A Economia do Prompting de IA em 2026', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — Artigo da OpenAI sobre o GPT-3 que introduziu o prompting few-shot como paradigma.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — Prompts com etapas intermediárias; fonte do resultado do GSM8K de 17,9% para 56,9% (tabela 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT: seguir instruções por meio de feedback humano (RLHF).',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE: LLMs geram e avaliam prompts.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — Least-to-most prompting: decompor problemas em subproblemas.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — Artigo que introduziu a geração aumentada por recuperação (RAG).',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — Artigo inicial que descreve escrever prompts como programar (2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — Revisão dos métodos de prompting em processamento de linguagem natural (2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy: framework que compila prompts automaticamente.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta, anúncio do Llama 4 (5 de abril de 2025): mixture-of-experts, Scout com contexto de 10 milhões de tokens.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic, anúncio do Claude 3.7 Sonnet (24 de fevereiro de 2025): modo extended thinking.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google, anúncio do Gemini 1.5 (15 de fevereiro de 2024): contexto de 1 milhão de tokens em prévia limitada.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1: raciocínio por aprendizado por reforço (janeiro de 2025).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune (9 de março de 2023): reportagem sobre a faixa salarial da vaga de prompt engineer da Anthropic.',
          ],
        },

      },
    },

    fr: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Fondamentaux',
      heroImage: '/images/prompt-engineering-history-overview-hero-fr.webp',
      title: 'Comment l\'ingénierie des prompts a évolué : De GPT-3 au Context Design',
      seoTitle: 'Le prompt engineering est-il mort ? Évolution 2020–2026',
      intro: 'L\'ingénierie des prompts a évolué d\'expériences informelles autour de GPT-3 en 2020 à une discipline structurée avec des techniques et frameworks nommés en 2026. Cette chronologie retrace les percées clés, les articles de recherche et les points tournants qui ont fait du prompting une compétence fondamentale.',
      metaDescription: 'Le prompt engineering n\'est pas mort, il a changé : chronologie sourcée du few-shot de GPT-3 (2020) au chain-of-thought, à ChatGPT puis au context design.',
      ogTitle: 'Comment le prompt engineering a évolué : de GPT-3 au context design (2020–2026)',
      twitterTitle: 'Comment le prompt engineering est passé de « écrire un meilleur prompt » au context design en 6 ans',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10 min de lecture',
      educationalLevel: 'Beginner',
      audience: 'Travailleurs du savoir et développeurs découvrant l\'histoire de l\'ingénierie des prompts et des techniques d\'IA',
      primaryTerm: 'Historique de l\'ingénierie des prompts',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**Le prompt engineering est passé de tâtonnements informels autour de GPT-3 (2020) à une discipline structurée dotée de frameworks, de techniques et d\'outils nommés en 2026, en cinq phases : l\'apprentissage few-shot, le raisonnement chain-of-thought, l\'essor grand public de ChatGPT, l\'optimisation automatisée et le context design.**',
      quickFacts: [
        '**GPT-3 (2020) :** le modèle de 175 milliards de paramètres a introduit le prompting few-shot comme changement de paradigme',
        '**Chain-of-Thought (2022) :** Wei et al. ont montré que la structure du prompt peut déclencher un raisonnement pas à pas ; PaLM 540B est passé de 17,9 % à 56,9 % sur GSM8K',
        '**ChatGPT (nov. 2022) :** 1 million d\'utilisateurs en 5 jours (selon Sam Altman, PDG d\'OpenAI) ; environ 100 millions d\'utilisateurs actifs mensuels estimés en janvier 2023 (UBS, via Reuters)',
        '**Marché de l\'emploi (2023) :** une offre d\'Anthropic « Prompt Engineer and Librarian » annonçait 175 000 à 335 000 $ (Fortune, mars 2023)',
        '**GPT-4 et frameworks (2023) :** l\'entrée d\'images et les frameworks publiés (CO-STAR, SPECS, RISEN) ont fait du prompting une discipline enseignable',
        '**Context design (2024–2026) :** LLM à poids ouverts, fenêtres de contexte de plus d\'1 M de tokens et orchestration d\'agents ont déplacé l\'attention du réglage des prompts vers l\'ingénierie de contexte au niveau du système',
      ],
      toc: [
        { label: 'Points clés', anchor: 'key-takeaways' },
        { label: 'Avant que le prompt engineering ait un nom (avant 2020)', anchor: 'before-had-a-name' },
        { label: '2020 : GPT-3 et la percée du few-shot', anchor: 'gpt-3-few-shot' },
        { label: '2021–début 2022 : Des astuces de prompt à une compétence reconnue', anchor: 'tricks-to-skill' },
        { label: '2022 : Chain-of-Thought et les prompts de raisonnement', anchor: 'chain-of-thought' },
        { label: 'Fin 2022–2023 : Le moment ChatGPT et le titre de « prompt engineer »', anchor: 'chatgpt-moment' },
        { label: '2023 : GPT-4, le prompting multimodal et les frameworks', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024 : Prompt engineering automatisé et RAG', anchor: 'automated-rag' },
        { label: '2024–2025 : Du prompt engineering à la conception de contexte', anchor: 'context-design' },
        { label: '2026 et au-delà : Le prompt engineering comme compétence fondamentale', anchor: 'beyond-2026' },
        { label: 'Chronologie : Les jalons clés du prompt engineering', anchor: 'timeline' },
        { label: 'Comment l\'histoire façonne les meilleures pratiques actuelles', anchor: 'today-practice' },
        { label: 'Idées reçues courantes sur le prompt engineering', anchor: 'common-mistakes' },
        { label: 'Lectures associées', anchor: 'related-reading' },
        { label: 'FAQ : L\'évolution du prompt engineering', anchor: 'faq' },
        { label: 'Sources', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Le prompt engineering est-il mort ? Évolution 2020–2026',
        description: 'Le prompt engineering n\'est pas mort, il a changé : chronologie sourcée du few-shot de GPT-3 (2020) au chain-of-thought, à ChatGPT puis au context design.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'fr',
        keywords: ['historique ingénierie prompts', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'ingénierie prompts', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Travailleurs du savoir et développeurs découvrant l\'histoire de l\'ingénierie des prompts et des techniques d\'IA' },
        about: [
          { '@type': 'Thing', name: 'Histoire du prompt engineering' },
          { '@type': 'Thing', name: 'Grands modèles de langage' },
          { '@type': 'Thing', name: 'Techniques et frameworks d\'IA' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Depuis quand existe le prompt engineering ?', acceptedAnswer: { '@type': 'Answer', text: 'La pratique a commencé avec GPT-3 en mai 2020, lorsque Brown et al. ont montré que des exemples placés dans le prompt pouvaient orienter un modèle sans réentraînement. Début 2021, des chercheurs l\'ont décrite comme du « prompt programming », le prompting chain-of-thought a suivi en janvier 2022, et ChatGPT (novembre 2022) en a fait une compétence grand public.' } },
          { '@type': 'Question', name: 'Qui a inventé le terme « prompt engineering » en premier ?', acceptedAnswer: { '@type': 'Answer', text: 'L\'origine exacte est débattue et aucune personne n\'est reconnue comme l\'inventrice du terme. Des articles de recherche décrivaient déjà des méthodes fondées sur les prompts en 2021, et l\'expression s\'est répandue en 2022 puis après ChatGPT. L\'article Wikipédia sur le prompt engineering donne un aperçu de l\'histoire.' } },
          { '@type': 'Question', name: 'Pourquoi le prompt engineering a-t-il explosé en popularité après ChatGPT ?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT était le premier modèle IA polyvalent que des millions de non-chercheurs pouvaient utiliser immédiatement, gratuitement, sans écrire de code. L\'écart entre un prompt bien conçu et un vague était visible et immédiatement conséquent — de meilleurs prompts produisaient des sorties sensiblement meilleures. Cette boucle de rétroaction, vécue simultanément par des millions de personnes, a transformé le prompt engineering d\'un concept de recherche en une compétence de masse.' } },
          { '@type': 'Question', name: 'Comment les articles de recherche ont-ils influencé les techniques de prompting du monde réel ?', acceptedAnswer: { '@type': 'Answer', text: 'Le transfert a été inhabituellement rapide pour la recherche en IA. Le prompting Chain-of-Thought (Wei et al., 2022) est passé d\'un article académique à une technique de praticien largement utilisée en quelques mois, en partie parce qu\'il ne nécessitait aucun outillage — juste un changement dans la façon d\'écrire le prompt. Le few-shot prompting tiré de l\'article GPT-3 (Brown et al., 2020) était immédiatement adoptable par quiconque avait accès à l\'API. L\'accessibilité des techniques a accéléré leur diffusion.' } },
          { '@type': 'Question', name: 'Le prompt engineering devient-il moins important à mesure que les modèles s\'améliorent ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — les modèles plus capables répondent mieux aux prompts bien structurés, pas moins. Les gains d\'un bon prompting augmentent à mesure que le modèle devient plus capable de suivre des instructions précises. Ce qui a changé, c\'est le niveau de prompt engineering requis pour les tâches simples : les questions conversationnelles nécessitent désormais moins de travail qu\'en 2021. Mais pour les sorties complexes de qualité production, le prompting structuré reste le levier le plus fiable disponible.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre le prompt engineering et l\'ingénierie de contexte ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompt engineering désigne généralement la conception de l\'entrée textuelle d\'un modèle pour améliorer sa sortie. L\'ingénierie de contexte est un concept plus large et plus récent qui désigne l\'orchestration de tout ce qui se trouve dans la fenêtre de contexte du modèle : le prompt système, les documents récupérés, l\'historique de conversation, les sorties d\'outils et l\'entrée utilisateur — tous composés délibérément. L\'ingénierie de contexte traite le prompt comme un composant dans un système conçu, pas comme un artefact autonome.' } },
          { '@type': 'Question', name: 'Les outils automatisés remplaceront-ils le besoin de comprendre le prompt engineering ?', acceptedAnswer: { '@type': 'Answer', text: 'Les outils automatisés comme DSPy peuvent optimiser la formulation des prompts dans des objectifs définis, mais ils nécessitent qu\'un humain spécifie quel est l\'objectif, quelles contraintes s\'appliquent et comment évaluer le succès. Comprendre les principes du prompt engineering reste nécessaire pour utiliser ces outils efficacement — et pour diagnostiquer quand ils produisent le mauvais résultat. L\'automatisation supprime une partie de l\'itération manuelle ; elle ne supprime pas le besoin d\'une réflexion structurée.' } },
          { '@type': 'Question', name: 'Le prompt engineering est-il mort en 2026 ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. La discipline s\'est déplacée, elle n\'a pas disparu. À mesure que les modèles gagnent en capacité, le travail passe des astuces de syntaxe et de mise en forme au context design : structurer les entrées, gérer la récupération et composer les sorties d\'outils. L\'intitulé « Prompt Engineer » se resserre, mais la compétence sous-jacente est présente dans tous les rôles qui utilisent l\'IA : développeur, analyste, marketeur, chercheur. Bien cadrer la tâche, fournir le contexte pertinent et préciser le format de sortie continuent de déterminer l\'utilité de la réponse d\'un modèle.' } },
          { '@type': 'Question', name: 'Dois-je apprendre le prompt engineering si les modèles continuent de s\'améliorer ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — mais le focus évolue à chaque génération. Les modèles plus performants réduisent le besoin de contournements élaborés et augmentent la valeur d\'une intention claire, d\'un contexte structuré et d\'exemples bien choisis. Les fondamentaux — rôle, contexte, format, contraintes — restent stables d\'une génération de modèles à l\'autre.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre le prompt engineering et le fine-tuning ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompt engineering modifie la façon dont on communique avec un modèle sans changer ses poids. Le fine-tuning réentraîne un modèle sur de nouvelles données pour modifier son comportement de façon permanente. Le prompt engineering est plus rapide, moins coûteux et réversible. Le fine-tuning convient mieux lorsque le comportement cible est constant, à fort volume ou impossible à décrire dans un prompt. La plupart des équipes commencent par le prompting et passent au fine-tuning uniquement lorsque le prompting atteint ses limites.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Chronologie de l\'évolution du prompt engineering : 2018–2026',
        description: 'Une chronologie des jalons, articles de recherche et sorties de modèles qui ont façonné l\'évolution du prompt engineering de 2018 à 2026.',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'fr',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT (Google) et GPT-2 (OpenAI) publiés (2018–2019)', description: 'Ont montré que les modèles transformer pouvaient être orientés par la formulation de l\'entrée, sans discipline formelle à ce stade' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 et Brown et al., « Language Models are Few-Shot Learners » (2020)', description: 'A établi le prompting few-shot : réécrire le prompt change le comportement du modèle sans réentraînement' },
          { '@type': 'ListItem', position: 3, name: 'Prompting chain-of-thought (Wei et al.) (2022 (janv.))', description: 'A montré que la structure du prompt peut susciter un raisonnement pas à pas' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang et al., OpenAI) (2022 (mars))', description: 'Des modèles entraînés à suivre les instructions ont rendu la qualité du prompt bien plus déterminante' },
          { '@type': 'ListItem', position: 5, name: 'Lancement de ChatGPT (2022 (nov.))', description: 'A amené le prompting au grand public ; des millions de personnes ont commencé à expérimenter en quelques jours' },
          { '@type': 'ListItem', position: 6, name: 'Les offres de « prompt engineer » attirent l\'attention ; une offre d\'Anthropic annonce 175 000–335 000 $ (2023 (T1))', description: 'A rendu le prompt engineering visible comme métier possible, bien que le rôle ait été très débattu' },
          { '@type': 'ListItem', position: 7, name: 'Sortie de GPT-4 avec entrée d\'images (2023 (mars))', description: 'A étendu le prompting au-delà du texte aux images ; le contexte de 128 000 tokens a suivi avec GPT-4 Turbo (nov. 2023)' },
          { '@type': 'ListItem', position: 8, name: 'Frameworks comme CRAFT, CO-STAR, SPECS, RISEN et TRACE ; guides officiels d\'OpenAI et de Google (2023)', description: 'A transformé le savoir-faire individuel en modèles réutilisables et enseignables' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou et al.) et DSPy (Khattab et al.) : prompts optimisés par LLM (2022–2023)', description: 'A montré que les LLM peuvent écrire et ajuster des prompts, rendant l\'optimisation automatique praticable' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3 (avr.) et Gemini 1.5 Pro avec préversion d\'un contexte de 1 M de tokens (févr.) (2024)', description: 'Les modèles à poids ouverts pour déploiement privé et les contextes très longs ont déplacé l\'attention vers l\'ingénierie de contexte' },
          { '@type': 'ListItem', position: 11, name: 'Modèles de raisonnement : OpenAI o1 (sept. 2024), DeepSeek-R1 (janv. 2025), Claude 3.7 Sonnet avec extended thinking (févr. 2025) (2024–2025)', description: 'Ces modèles raisonnent pas à pas en interne, si bien que le chain-of-thought explicite compte moins pour eux' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4 (mixture-of-experts) ; Llama 4 Scout prend en charge un contexte de 10 M de tokens (2025 (avr.))', description: 'Les modèles à poids ouverts adoptent les architectures mixture-of-experts et les contextes très longs' },
          { '@type': 'ListItem', position: 13, name: 'Le context design et l\'orchestration d\'agents deviennent la pratique courante (2026)', description: 'Le prompting n\'est qu\'une couche d\'un contexte composé ; une pensée au niveau du système est attendue' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: 'Comment le prompt engineering a évolué : un bref aperçu',
          snippets: [
            { type: 'in-one-sentence', text: 'Le prompt engineering est passé de bricolages de formulation par essais et erreurs à une discipline documentée faite de motifs réutilisables, d\'évaluation et de gestion de versions, la structure primant sur les tournures habiles à mesure que les modèles progressaient.' },
            { type: 'in-plain-terms', text: 'Cela a commencé comme un folklore : on s\'échangeait des formules qui semblaient marcher. Les modèles progressant, les mots magiques ont cessé de compter au profit de la structure : qui, quoi, sous quel format. Ce basculement a transformé une boîte à astuces en un métier qui s\'enseigne.' },
          ],
          content: [
            '**Le prompt engineering a évolué d\'une manipulation de texte informelle par essais et erreurs autour de GPT-3 en 2020 vers une discipline structurée avec des techniques nommées, des frameworks et des outils d\'ici 2026.** L\'arc couvre cinq phases : les premières expériences few-shot, le moment ChatGPT qui a amené la compétence dans la conscience du grand public, le développement de techniques de raisonnement structurées, l\'essor de l\'optimisation automatisée des prompts et le glissement actuel vers la conception de contexte.',
            'La discipline n\'a pas émergé d\'un seul article ou d\'une seule entreprise. Elle a grandi à partir du chevauchement entre la recherche (apprentissage few-shot, raisonnement par chaîne de pensée, RAG), les communautés de praticiens partageant des collections de prompts en ligne, et la disponibilité soudaine au grand public de modèles puissants qui rendait le bon prompting immédiatement gratifiant. En 2026, le prompt engineering n\'est plus un truc de niche — c\'est une compétence de base pour quiconque travaille avec des systèmes IA.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
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
          id: 'before-had-a-name',
          title: 'Avant que le prompt engineering ait un nom (avant 2020)',
          content: [
            'Avant que le terme « prompt engineering » n\'existe, les chercheurs manipulaient déjà les entrées des modèles pour obtenir de meilleures sorties, sans l\'appeler ainsi. Les premiers modèles transformer comme GPT-2 (2019, OpenAI) et BERT (2018, Google) étaient utilisés avec des textes d\'entrée soigneusement choisis, mais cette pratique relevait du prétraitement des données et non d\'une compétence à part entière.',
            'GPT-2 a été annoncé en février 2019 comme un modèle de 1,5 milliard de paramètres ; OpenAI en a d\'abord publié des versions plus petites, puis le modèle complet en novembre 2019. Il complétait le texte de façon étonnamment cohérente. Chercheurs et premiers praticiens ont remarqué que la formulation de l\'entrée changeait fortement la qualité de la suite, mais il n\'existait encore ni framework, ni terminologie, ni communauté autour de cette observation. Les prompts étaient des entrées, pas des artefacts d\'ingénierie.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020 : GPT-3 et la percée du few-shot',
          content: [
            '**L\'histoire moderne du prompt engineering commence en pratique avec GPT-3.** En mai 2020, des chercheurs d\'OpenAI ont publié « [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) » (Brown et al.), qui décrit GPT-3, un modèle de 175 milliards de paramètres. L\'article a montré que fournir quelques exemples de la tâche directement dans le prompt, sans aucune mise à jour des poids du modèle, améliorait les performances sur de nombreuses tâches en aval.',
            'Ce fut la graine du prompt engineering comme discipline. Chercheurs et développeurs ont compris que le même modèle pouvait devenir traducteur, outil de synthèse, générateur de code ou système de questions-réponses simplement en changeant la rédaction du prompt. Le modèle n\'avait pas besoin d\'être réentraîné : il lui fallait un meilleur prompt. Cette idée a redéfini ce qu\'est un prompt : non plus seulement une entrée, mais un artefact de conception.',
            'Brown et al. ont constaté que les performances few-shot s\'amélioraient en général avec la taille du modèle, GPT-3 (175 milliards de paramètres) étant globalement la variante la plus performante. Cela a relié échelle et apprentissage par prompt, et fait de la qualité du prompt une variable que les praticiens, pas seulement les chercheurs, pouvaient maîtriser.',
            'Voir [Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) pour un guide pratique de la technique rendue célèbre par GPT-3.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–début 2022 : Des astuces de prompt à une compétence reconnue',
          content: [
            'Entre 2021 et début 2022, l\'art de rédiger des prompts est passé des articles de recherche aux communautés de praticiens. Les chercheurs ont commencé à décrire cette pratique par écrit : Reynolds et McDonell soutiennent, dans « [Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350) » (février 2021), qu\'écrire des prompts pour GPT-3 est une forme de programmation, et l\'état de l\'art « [Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586) » (Liu et al., juillet 2021) a catalogué les méthodes fondées sur les prompts en traitement du langage naturel. Entre-temps, les praticiens échangeaient des prompts efficaces dans des communautés en ligne.',
            'L\'article InstructGPT d\'OpenAI (Ouyang et al., mars 2022) a présenté des modèles affinés par retour humain (RLHF) qui suivaient les instructions en langage naturel bien plus fiablement que le GPT-3 de base, ce qui a rendu la qualité du prompt encore plus déterminante. À la mi-2022, il était clair que le prompting était une compétence transférable, et non une simple curiosité de chercheur.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022 : Chain-of-Thought et les prompts de raisonnement',
          content: [
            '**L\'apparition du prompting chain-of-thought (CoT) en 2022 a été l\'avancée technique la plus importante de la courte histoire de la discipline.** Wei et al. (Google) ont publié « [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) » et montré que donner au modèle des exemples résolus avec étapes intermédiaires améliorait les performances en arithmétique, en raisonnement de bon sens et en raisonnement symbolique. Dans un résultat phare, le prompting chain-of-thought a fait passer la précision de PaLM 540B sur GSM8K, un benchmark de mathématiques de niveau primaire, de 17,9 % à 56,9 % (tableau 1 de l\'article), un gain obtenu en changeant le prompt, sans entraînement supplémentaire. L\'implication était profonde : la structure du prompt pouvait activer un comportement de raisonnement différent, pas seulement des faits différents.',
            'Des techniques apparentées ont suivi rapidement. Zhou et al. ont introduit le [least-to-most prompting](https://arxiv.org/abs/2205.10625), qui décompose les problèmes complexes en une suite de sous-problèmes plus simples résolus dans l\'ordre. Ces approches ont fait du prompt engineering un outil pour obtenir un raisonnement structuré de modèles non entraînés explicitement à cela, et non plus un simple exercice de mise en forme. Le prompting était devenu un échafaudage pour la cognition.',
            'Pour le guide complet de la technique, voir [Chain-of-Thought Prompting : Faites penser l\'IA à haute voix](/prompt-engineering/chain-of-thought-prompting) et [Chaînage de Prompts : Décomposer les Tâches Complexes en Étapes Gagnantes](/prompt-engineering/prompt-chaining).',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'Fin 2022–2023 : Le moment ChatGPT et le titre de « prompt engineer »',
          callouts: [
            {
              type: 'did-you-know',
              label: 'Le saviez-vous ?',
              text: 'Une analyse d\'UBS rapportée par Reuters a estimé que ChatGPT avait atteint environ 100 millions d\'utilisateurs actifs mensuels en janvier 2023, soit environ deux mois après son lancement. Selon Reuters, citant des données de Sensor Tower, TikTok avait mis environ neuf mois et Instagram environ deux ans et demi pour atteindre ce seuil. Cette rapidité explique pourquoi le prompt engineering est passé du concept de recherche à la compétence grand public presque du jour au lendemain.',
            },
          ],
          content: [
            '**Le lancement de ChatGPT le 30 novembre 2022 a changé du jour au lendemain l\'image publique du prompt engineering.** Sam Altman, PDG d\'OpenAI, a indiqué sur Twitter début décembre 2022 que ChatGPT avait dépassé le million d\'utilisateurs en cinq jours, et une analyse d\'UBS rapportée par Reuters a estimé environ 100 millions d\'utilisateurs actifs mensuels en janvier 2023. En quelques jours, des millions de personnes testaient des prompts et constataient que les résultats variaient énormément selon la formulation ; les médias technologiques ont commencé à présenter le prompt engineering comme une compétence à acquérir.',
            'Début 2023, « prompt engineer » est apparu comme intitulé de poste : une offre d\'Anthropic pour un « Prompt Engineer and Librarian » annonçait une fourchette de 175 000 à 335 000 dollars, [selon Fortune](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) en mars 2023. La question de savoir si le prompt engineering serait une carrière durable ou un rôle transitoire (en partie conception d\'interface homme-machine, en partie expertise métier, en partie assurance qualité) a été largement débattue.',
            'Aucune personne n\'est reconnue comme l\'auteur du terme. Des articles de recherche décrivaient déjà des méthodes fondées sur les prompts en 2021 (voir plus haut), et l\'expression s\'est largement diffusée après ChatGPT. L\'[article Wikipédia sur le prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) donne un aperçu de son histoire.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023 : GPT-4, le prompting multimodal et les frameworks',
          content: [
            'GPT-4, en mars 2023, a ajouté l\'entrée d\'images au texte, ouvrant le prompt engineering à des tâches visuelles comme décrire des images, comparer des schémas ou annoter des graphiques ; des fenêtres de contexte plus grandes ont suivi (128 000 tokens avec GPT-4 Turbo en novembre 2023). Gemini de Google (décembre 2023) et les modèles Claude 3 d\'Anthropic avec vision (mars 2024) ont apporté des options multimodales d\'autres éditeurs.',
            'La même période a vu la formalisation des bonnes pratiques. OpenAI a publié son [guide officiel du prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering). Google Cloud a publié son propre [guide du prompt engineering](https://cloud.google.com/discover/what-is-prompt-engineering). Des auteurs et équipes indépendants ont publié des frameworks comme CRAFT, CO-STAR, SPECS, RISEN et TRACE, qui offraient des modèles reproductibles pour structurer les prompts et réduisaient le recours au tâtonnement.',
            'Ces frameworks ont marqué la maturation du prompt engineering, d\'une compétence personnelle à une pratique enseignable et partageable. Voir [Quel framework de prompt choisir ? (2026)](/prompt-engineering/which-prompt-framework-should-you-use) pour choisir entre eux et [Au-delà du texte: Comment utiliser des images dans vos prompts](/prompt-engineering/beyond-text-how-to-prompt-with-images) pour la dimension multimodale.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024 : Prompt engineering automatisé et RAG',
          content: [
            'Un développement marquant vers 2023 a été la recherche montrant que les LLM peuvent optimiser des prompts aussi bien que les humains. Zhou et al. ont publié en novembre 2022 « [Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910) » (APE) : un LLM générait et évaluait des instructions candidates et égalait ou dépassait les instructions rédigées par des humains sur 19 des 24 tâches testées. Le framework DSPy, issu de chercheurs de Stanford ([Khattab et al., octobre 2023](https://arxiv.org/abs/2310.03714)), est allé plus loin : le développeur décrit ce que le prompt doit accomplir et la formulation est compilée automatiquement.',
            'Parallèlement, la génération augmentée par récupération (RAG), introduite en 2020 par [Lewis et al.](https://arxiv.org/abs/2005.11401) chez Facebook AI Research (aujourd\'hui Meta), est devenue un schéma central des systèmes d\'IA en production. Le RAG injectait des documents récupérés directement dans le contexte du prompt, ancrant les réponses dans des sources réelles et à jour plutôt que d\'exiger que le prompt contienne tous les faits. L\'accent est ainsi passé de « comment faire connaître cela au modèle ? » à « comment structurer le contexte pour que le modèle l\'utilise correctement ? ».',
            'Voir [RAG expliqué : ancrer les réponses IA dans des données réelles (2026)](/prompt-engineering/rag-explained) et [Self-Consistency Prompting : Plusieurs Réponses, Choisir le Consensus](/prompt-engineering/self-consistency-prompting) pour les techniques clés de cette période.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025 : Du prompt engineering à la conception de contexte',
          content: [
            'Vers 2024, un nouveau cadrage a commencé à remplacer l\'idée simple d\'« écrire un meilleur prompt ». Praticiens et chercheurs ont parlé d\'ingénierie de contexte : l\'orchestration de tout ce qui entre dans la fenêtre de contexte (prompt système, documents récupérés, sorties d\'outils, historique de conversation et saisie de l\'utilisateur), composé délibérément pour guider le comportement du modèle. Le prompt n\'était plus un artefact autonome, mais une couche d\'un contexte conçu.',
            'Plusieurs évolutions ont accéléré ce basculement. Les modèles Llama 3 de Meta (avril 2024) ont rendu des LLM à poids ouverts performants disponibles pour un déploiement privé, déplaçant une partie du prompt engineering des API cloud vers l\'infrastructure locale. Google a annoncé en février 2024 Gemini 1.5 Pro avec une [fenêtre de contexte de 1 million de tokens en préversion limitée](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/), rendant possible de placer des bases de code, des livres ou des collections de documents entiers dans un seul prompt. Des frameworks multi-agents comme LangChain et AutoGen ont transformé le prompting en orchestration : un prompt déclenche un autre modèle, qui déclenche un outil, qui renvoie du contexte au prompt suivant.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026 et au-delà : Le prompt engineering comme compétence fondamentale',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Conseil d\'expert',
              text: 'Le passage du « prompt engineering » au « context design » n\'est pas qu\'une question de vocabulaire : il change ce que vous optimisez. Au lieu de peaufiner la formulation de votre consigne, vous concevez ce qui entre dans la fenêtre de contexte : prompt système, documents récupérés, historique de conversation, sorties d\'outils et saisie de l\'utilisateur. Le prompt est une couche, pas le tout.',
            },
          ],
          content: [
            'En 2026, le prompt engineering est de plus en plus décrit non comme un intitulé de poste de niche, mais comme une littératie de base pour les travailleurs du savoir qui utilisent des outils d\'IA : savoir énoncer une tâche, fournir le bon contexte et préciser la sortie attendue.',
            'Le rôle s\'est scindé en deux voies. La première est la conception de systèmes et de contexte : l\'ingénierie de systèmes d\'IA en production où les prompts s\'inscrivent dans une architecture plus large comprenant récupération, agents et pipelines d\'évaluation. La seconde est l\'usage quotidien : savoir écrire des prompts clairs et structurés qui donnent des résultats utiles sans connaître l\'architecture sous-jacente. Les deux voies s\'appuient sur les mêmes principes : tâche clairement spécifiée, contexte approprié, contraintes et format de sortie.',
            'Ce qui n\'a pas changé, malgré des modèles plus capables et des outils automatisés, c\'est le principe fondamental : plus l\'entrée est claire et structurée, plus la sortie est fiable et utile. Les techniques, la terminologie et les outils ont mûri, mais l\'idée centrale de l\'ère GPT-3 reste vraie en 2026.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'Chronologie : Les jalons clés du prompt engineering',
          content: 'Le tableau ci-dessous résume les jalons clés de 2018 à 2026 : les événements, articles et sorties de modèles qui ont façonné l\'évolution du prompt engineering jusqu\'à sa forme actuelle.',
          columns: ['Année', 'Jalon', 'Pourquoi c\'est important'],
          rows: [
            { 'Année': '2018–2019', 'Jalon': 'BERT (Google) et GPT-2 (OpenAI) publiés', 'Pourquoi c\'est important': 'Ont montré que les modèles transformer pouvaient être orientés par la formulation de l\'entrée, sans discipline formelle à ce stade' },
            { 'Année': '2020', 'Jalon': 'GPT-3 et Brown et al., « Language Models are Few-Shot Learners »', 'Pourquoi c\'est important': 'A établi le prompting few-shot : réécrire le prompt change le comportement du modèle sans réentraînement' },
            { 'Année': '2022 (janv.)', 'Jalon': 'Prompting chain-of-thought (Wei et al.)', 'Pourquoi c\'est important': 'A montré que la structure du prompt peut susciter un raisonnement pas à pas' },
            { 'Année': '2022 (mars)', 'Jalon': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Pourquoi c\'est important': 'Des modèles entraînés à suivre les instructions ont rendu la qualité du prompt bien plus déterminante' },
            { 'Année': '2022 (nov.)', 'Jalon': 'Lancement de ChatGPT', 'Pourquoi c\'est important': 'A amené le prompting au grand public ; des millions de personnes ont commencé à expérimenter en quelques jours' },
            { 'Année': '2023 (T1)', 'Jalon': 'Les offres de « prompt engineer » attirent l\'attention ; une offre d\'Anthropic annonce 175 000–335 000 $', 'Pourquoi c\'est important': 'A rendu le prompt engineering visible comme métier possible, bien que le rôle ait été très débattu' },
            { 'Année': '2023 (mars)', 'Jalon': 'Sortie de GPT-4 avec entrée d\'images', 'Pourquoi c\'est important': 'A étendu le prompting au-delà du texte aux images ; le contexte de 128 000 tokens a suivi avec GPT-4 Turbo (nov. 2023)' },
            { 'Année': '2023', 'Jalon': 'Frameworks comme CRAFT, CO-STAR, SPECS, RISEN et TRACE ; guides officiels d\'OpenAI et de Google', 'Pourquoi c\'est important': 'A transformé le savoir-faire individuel en modèles réutilisables et enseignables' },
            { 'Année': '2022–2023', 'Jalon': 'APE (Zhou et al.) et DSPy (Khattab et al.) : prompts optimisés par LLM', 'Pourquoi c\'est important': 'A montré que les LLM peuvent écrire et ajuster des prompts, rendant l\'optimisation automatique praticable' },
            { 'Année': '2024', 'Jalon': 'Llama 3 (avr.) et Gemini 1.5 Pro avec préversion d\'un contexte de 1 M de tokens (févr.)', 'Pourquoi c\'est important': 'Les modèles à poids ouverts pour déploiement privé et les contextes très longs ont déplacé l\'attention vers l\'ingénierie de contexte' },
            { 'Année': '2024–2025', 'Jalon': 'Modèles de raisonnement : OpenAI o1 (sept. 2024), DeepSeek-R1 (janv. 2025), Claude 3.7 Sonnet avec extended thinking (févr. 2025)', 'Pourquoi c\'est important': 'Ces modèles raisonnent pas à pas en interne, si bien que le chain-of-thought explicite compte moins pour eux' },
            { 'Année': '2025 (avr.)', 'Jalon': 'Llama 4 (mixture-of-experts) ; Llama 4 Scout prend en charge un contexte de 10 M de tokens', 'Pourquoi c\'est important': 'Les modèles à poids ouverts adoptent les architectures mixture-of-experts et les contextes très longs' },
            { 'Année': '2026', 'Jalon': 'Le context design et l\'orchestration d\'agents deviennent la pratique courante', 'Pourquoi c\'est important': 'Le prompting n\'est qu\'une couche d\'un contexte composé ; une pensée au niveau du système est attendue' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: 'Comment l\'histoire façonne les meilleures pratiques actuelles',
          content: [
            'Chaque phase de l\'évolution du prompt engineering a laissé un dépôt durable dans la pratique actuelle. L\'ère GPT-3 nous a donné l\'idée fondamentale que le comportement du modèle est façonné par la structure de l\'entrée — pas seulement le contenu. L\'ère Chain-of-Thought nous a donné des échafaudages de raisonnement explicites : prompting étape par étape, chaînage de prompts et approches tree-of-thought. L\'ère des frameworks nous a donné des modèles réutilisables qui encodent les meilleures pratiques sans exiger que chaque praticien les découvre de zéro.',
            'L\'ère RAG et de la conception de contexte nous a donné la compréhension que les prompts n\'existent pas en isolation — ils sont composés avec des données récupérées, des instructions système et des sorties d\'outils pour former un contexte complet. Et l\'ère du prompting automatisé nous a rappelé que les principes d\'un bon prompting sont mesurables : les prompts mieux structurés produisent de meilleures sorties de façon qui peut être évaluée et optimisée systématiquement.',
          ],
          items: [
            'Techniques de raisonnement de 2022 → [Chain-of-Thought Prompting : Faites penser l\'IA à haute voix](/prompt-engineering/chain-of-thought-prompting) et [Tree of Thought et ReAct : Techniques de raisonnement avancées pour les problèmes complexes](/prompt-engineering/tree-of-thought-and-react)',
            'Développement de frameworks de 2023 → [Quel framework de prompt choisir ? (2026)](/prompt-engineering/which-prompt-framework-should-you-use)',
            'Croissance des fenêtres de contexte → [Fenêtres de contexte expliquées : Pourquoi l\'IA oublie (et comment y remédier)](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'Économie des tokens à travers les générations de modèles → [Tokens, Coûts et Limites : L\'économie du prompt engineering](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG comme complément au prompting pur → [RAG expliqué : ancrer les réponses IA dans des données réelles (2026)](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ : L\'évolution du prompt engineering',
          faqs: [
            {
              q: 'Depuis quand existe le prompt engineering ?',
              a: 'La pratique a commencé avec GPT-3 en mai 2020, lorsque Brown et al. ont montré que des exemples placés dans le prompt pouvaient orienter un modèle sans réentraînement. Début 2021, des chercheurs l\'ont décrite comme du « prompt programming », le prompting chain-of-thought a suivi en janvier 2022, et ChatGPT (novembre 2022) en a fait une compétence grand public.',
            },
            {
              q: 'Qui a inventé le terme « prompt engineering » en premier ?',
              a: 'L\'origine exacte est débattue et aucune personne n\'est reconnue comme l\'inventrice du terme. Des articles de recherche décrivaient déjà des méthodes fondées sur les prompts en 2021, et l\'expression s\'est répandue en 2022 puis après ChatGPT. L\'article Wikipédia sur le prompt engineering donne un aperçu de l\'histoire.',
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
              a: 'Non. La discipline s\'est déplacée, elle n\'a pas disparu. À mesure que les modèles gagnent en capacité, le travail passe des astuces de syntaxe et de mise en forme au context design : structurer les entrées, gérer la récupération et composer les sorties d\'outils. L\'intitulé « Prompt Engineer » se resserre, mais la compétence sous-jacente est présente dans tous les rôles qui utilisent l\'IA : développeur, analyste, marketeur, chercheur. Bien cadrer la tâche, fournir le contexte pertinent et préciser le format de sortie continuent de déterminer l\'utilité de la réponse d\'un modèle.',
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

        commonMistakes: {
          id: 'common-mistakes',
          title: 'Idées reçues courantes sur le prompt engineering',
          mistakes: [
            {
              mistake: 'Le prompt engineering consiste seulement à écrire de meilleures phrases.',
              problem: 'C\'est ignorer les dimensions structurelle et contextuelle. L\'efficacité d\'un prompt ne dépend pas seulement du choix des mots, mais de l\'attribution d\'un rôle (donner une persona au modèle), des contraintes, du format de sortie et du choix des exemples : des éléments structurels sans rapport avec la grammaire.',
              fix: 'Voyez le prompt engineering comme la conception d\'un système dont le prompt est l\'interface. Investissez dans la structure : attribuez des rôles (« Tu es un… », « Suppose que… »), précisez les contraintes (« Ne pas… », « Doit inclure… »), définissez le format de sortie et fournissez des exemples. La structure compte souvent plus que l\'éloquence.',
            },
            {
              mistake: 'De meilleurs modèles rendent le prompt engineering inutile.',
              problem: 'Un modèle plus capable est comme une personne plus capable : il réagit *mieux* à des instructions claires, pas moins bien. Les gains d\'un bon prompting augmentent avec la capacité du modèle. Ce qui change, c\'est le *type* de prompting nécessaire, pas sa nécessité.',
              fix: 'Partez du principe que le prompting restera central dans le travail avec l\'IA. Ce qui évolue, c\'est le niveau de détail et d\'échafaudage requis. Avec des modèles plus faibles, une structure pas à pas explicite peut être nécessaire ; avec des modèles plus forts, une consigne claire d\'une ligne peut suffire, mais cette franchise est elle-même un choix de prompt engineering.',
            },
            {
              mistake: 'Les outils d\'optimisation automatique des prompts remplaceront le prompt engineering humain.',
              problem: 'Des outils comme DSPy aident à optimiser la formulation dans des objectifs définis, mais un humain doit toujours préciser l\'objectif, les contraintes, les critères de réussite et la méthode d\'évaluation. L\'automatisation supprime la corvée d\'itération ; elle ne supprime pas le besoin de réfléchir de façon structurée à ce que le modèle doit faire.',
              fix: 'Utilisez l\'automatisation comme un outil, pas comme un remplacement. Partez d\'un prompt bien structuré conçu par quelqu\'un qui comprend la tâche, puis affinez-le avec des outils comme DSPy. Le jugement humain sur la structure de la tâche reste irremplaçable.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Lectures associées',
          items: [
            { title: 'Chain-of-Thought Prompting : Faites penser l\'IA à haute voix', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Zero-Shot vs. Few-Shot Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG expliqué : ancrer les réponses IA dans des données réelles (2026)', url: '/prompt-engineering/rag-explained' },
            { title: 'Fenêtres de contexte expliquées : Pourquoi l\'IA oublie (et comment y remédier)', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'Tokens, Coûts et Limites : L\'économie du prompt engineering', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — Article d\'OpenAI sur GPT-3 qui a introduit le prompting few-shot comme paradigme.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — Prompts avec étapes intermédiaires ; source du résultat GSM8K de 17,9 % à 56,9 % (tableau 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT : suivi d\'instructions par retour humain (RLHF).',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE : des LLM génèrent et évaluent des prompts.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — Least-to-most prompting : décomposer les problèmes en sous-problèmes.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — Article ayant introduit la génération augmentée par récupération (RAG).',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — Article précoce décrivant l\'écriture de prompts comme de la programmation (2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — État de l\'art des méthodes de prompting en traitement du langage naturel (2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy : framework qui compile automatiquement les prompts.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta, annonce de Llama 4 (5 avril 2025) : mixture-of-experts, Scout avec un contexte de 10 M de tokens.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic, annonce de Claude 3.7 Sonnet (24 février 2025) : mode extended thinking.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google, annonce de Gemini 1.5 (15 février 2024) : contexte de 1 M de tokens en préversion limitée.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1 : raisonnement par apprentissage par renforcement (janvier 2025).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune (9 mars 2023) : article sur la fourchette salariale de l\'offre d\'Anthropic pour prompt engineers.',
          ],
        },

      },
    },

    ja: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: '基礎',
      heroImage: '/images/prompt-engineering-history-overview-hero-ja.webp',
      title: 'プロンプトエンジニアリングはどのように進化したか：GPT-3からContext Designへ',
      seoTitle: 'プロンプトエンジニアリングは終わり？進化2020–2026',
      intro: 'プロンプトエンジニアリングは2020年のGPT-3周辺での非公式な実験から、2026年までに名付けられた技術とフレームワークを備えた構造化された分野へと進化しました。このタイムラインは、プロンプティングをコア スキルにした主要な突破口、研究論文、および転換点を追跡しています。',
      metaDescription: 'プロンプトエンジニアリングは終わらず形を変えました。GPT-3のフューショット（2020年）から思考の連鎖、ChatGPT、コンテキスト設計までを出典付きで解説します。',
      ogTitle: 'プロンプトエンジニアリングの進化：GPT-3からコンテキスト設計へ（2020–2026）',
      twitterTitle: 'プロンプトエンジニアリングは6年で「良いプロンプトを書く」からコンテキスト設計へ',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10分で読める',
      educationalLevel: 'Beginner',
      audience: 'プロンプトエンジニアリングの歴史とAI技術を学ぶ知識労働者と開発者',
      primaryTerm: 'プロンプトエンジニアリング歴史',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**プロンプトエンジニアリングは、2020年のGPT-3をめぐる非公式な試行錯誤から、2026年までに名前の付いたフレームワーク・技法・ツールを備えた体系的な分野へと発展しました。その歩みは、フューショット学習、思考の連鎖による推論、ChatGPTの普及、自動最適化、コンテキスト設計の5つの段階に分けられます。**',
      quickFacts: [
        '**GPT-3（2020年）：** 1,750億パラメータのモデルがフューショットプロンプティングをパラダイムシフトとして示した',
        '**思考の連鎖（2022年）：** Wei et al.が、プロンプトの構造によってステップごとの推論を引き出せることを示した。PaLM 540BのGSM8K正答率は17.9%から56.9%へ',
        '**ChatGPT（2022年11月）：** 5日で100万ユーザーを突破（OpenAIのサム・アルトマンCEOによる）。2023年1月には月間アクティブユーザー約1億人と推定（UBS、Reuters経由）',
        '**求人市場（2023年）：** Anthropicの「Prompt Engineer and Librarian」求人が17.5万〜33.5万ドルを提示（Fortune、2023年3月）',
        '**GPT-4とフレームワーク（2023年）：** 画像入力と公開されたフレームワーク（CO-STAR、SPECS、RISEN）により、プロンプティングは教えられる分野になった',
        '**コンテキスト設計（2024〜2026年）：** オープンウェイトLLM、100万トークン超のコンテキストウィンドウ、エージェントのオーケストレーションにより、焦点はプロンプトの微調整からシステムレベルのコンテキストエンジニアリングへ移った',
      ],
      toc: [
        { label: 'まとめ', anchor: 'key-takeaways' },
        { label: 'プロンプトエンジニアリングという名称が生まれる前（2020年以前）', anchor: 'before-had-a-name' },
        { label: '2020年：GPT-3とフューショットの革新', anchor: 'gpt-3-few-shot' },
        { label: '2021〜2022年初頭：プロンプトのトリックから認められたスキルへ', anchor: 'tricks-to-skill' },
        { label: '2022年：思考の連鎖（Chain-of-Thought）と推論プロンプト', anchor: 'chain-of-thought' },
        { label: '2022年後半〜2023年：ChatGPTの瞬間とプロンプトエンジニアという肩書き', anchor: 'chatgpt-moment' },
        { label: '2023年：GPT-4・マルチモーダルプロンプティング・フレームワーク', anchor: 'gpt-4-frameworks' },
        { label: '2023〜2024年：自動プロンプトエンジニアリングとRAG', anchor: 'automated-rag' },
        { label: '2024〜2025年：プロンプトエンジニアリングからコンテキストデザインへ', anchor: 'context-design' },
        { label: '2026年以降：コア・リテラシーとしてのプロンプトエンジニアリング', anchor: 'beyond-2026' },
        { label: 'タイムライン：プロンプトエンジニアリングの主要なマイルストーン', anchor: 'timeline' },
        { label: '歴史が今日のベストプラクティスをどのように形作るか', anchor: 'today-practice' },
        { label: 'プロンプトエンジニアリングについてのよくある誤解', anchor: 'common-mistakes' },
        { label: '関連記事', anchor: 'related-reading' },
        { label: 'FAQ：プロンプトエンジニアリングの進化', anchor: 'faq' },
        { label: '出典', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'プロンプトエンジニアリングは終わり？進化2020–2026',
        description: 'プロンプトエンジニアリングは終わらず形を変えました。GPT-3のフューショット（2020年）から思考の連鎖、ChatGPT、コンテキスト設計までを出典付きで解説します。',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'ja',
        keywords: ['プロンプトエンジニアリング歴史', 'GPT-3 フューショット学習', 'Chain-of-Thought プロンプティング', 'ChatGPT', 'コンテキストエンジニアリング', 'プロンプトエンジニアリング タイムライン', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'プロンプトエンジニアリングの歴史とAI技術を学ぶ知識労働者と開発者' },
        about: [
          { '@type': 'Thing', name: 'プロンプトエンジニアリングの歴史' },
          { '@type': 'Thing', name: '大規模言語モデル' },
          { '@type': 'Thing', name: 'AI技術とフレームワーク' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          { '@type': 'Question', name: 'プロンプトエンジニアリングはいつ始まったのですか？', acceptedAnswer: { '@type': 'Answer', text: '実践は2020年5月のGPT-3から始まりました。Brown et al.が、プロンプトに置いた例で再学習なしにモデルを誘導できると示したのです。2021年初めに研究者が「プロンプトプログラミング」と呼び、2022年1月に思考の連鎖プロンプティングが続き、ChatGPT（2022年11月）が一般のスキルにしました。' } },
          { '@type': 'Question', name: '「プロンプトエンジニアリング」という用語は誰が最初に作ったのですか？', acceptedAnswer: { '@type': 'Answer', text: '正確な起源は議論されており、この用語を考案したとされる特定の人物はいません。2021年にはすでに研究論文がプロンプトに基づく手法を説明しており、この言葉は2022年とChatGPT後に広く使われるようになりました。Wikipediaのプロンプトエンジニアリングの記事が経緯を概観しています。' } },
          { '@type': 'Question', name: 'ChatGPT後にプロンプトエンジニアリングがなぜ爆発的に普及したのですか？', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPTは、何百万もの非研究者がコードを書かずに無料で即座に使用できる最初の汎用AIモデルでした。巧みに作られたプロンプトと漠然としたプロンプトのギャップは目に見えて即座に重要でした — より良いプロンプトは使えるほど良い出力を生成しました。そのフィードバックループが何百万もの人々によって同時に経験されたことで、プロンプトエンジニアリングは研究概念から大衆スキルへと変わりました。' } },
          { '@type': 'Question', name: '研究論文は実際のプロンプティングテクニックにどのように影響を与えましたか？', acceptedAnswer: { '@type': 'Answer', text: 'AI研究としては移転が異例に速かったです。思考の連鎖（Chain-of-Thought）プロンプティング（Wei et al.、2022年）は、部分的にはツールを必要としなかったため — プロンプトの書き方を変えるだけ — 、学術論文から数ヶ月以内に広く使われる実践者テクニックになりました。GPT-3論文のフューショットプロンプティング（Brown et al.、2020年）はAPIアクセスを持つ誰もが即座に採用できるものでした。テクニックのアクセスしやすさがその普及を加速しました。' } },
          { '@type': 'Question', name: 'モデルが改善されるにつれて、プロンプトエンジニアリングは重要でなくなっていますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — より高性能なモデルは構造化されたプロンプトに対してより良く反応します、より少なくではなく。モデルが精密な指示に従う能力が向上するにつれて、優れたプロンプティングからの利益が増加します。変わったのは、単純なタスクに必要なプロンプトエンジニアリングのレベルです：会話的な質問は2021年よりも作り込みを必要としなくなりました。しかし、複雑な本番グレードの出力には、構造化されたプロンプティングが利用可能な最も信頼できる手段であり続けています。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングとコンテキストエンジニアリングの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトエンジニアリングは通常、出力を改善するためにモデルへのテキスト入力を設計することを指します。コンテキストエンジニアリングは、モデルのコンテキストウィンドウにある全てのものを調整することを指す、より広く・より最近の概念です：システムプロンプト・取得したドキュメント・会話履歴・ツール出力・ユーザー入力 — すべて意図的に組み合わされます。コンテキストエンジニアリングは、プロンプトをスタンドアロンの成果物としてではなく、設計されたシステムの一コンポーネントとして扱います。' } },
          { '@type': 'Question', name: '自動化ツールはプロンプトエンジニアリングを理解する必要性を置き換えるでしょうか？', acceptedAnswer: { '@type': 'Answer', text: 'DSPyのような自動化ツールは定義された目標の中でプロンプトの言い回しを最適化できますが、目標が何か・どのような制約が適用されるか・成功をどのように評価するかを指定するには人間が必要です。プロンプトエンジニアリングの原則を理解することは、これらのツールを効果的に使うために、そして間違った結果を生成したときに診断するために必要であり続けます。自動化は手動のイテレーションの一部を取り除きます；構造化された思考の必要性は取り除きません。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングは2026年に時代遅れになっていますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。分野は形を変えただけで、なくなってはいません。モデルが高性能になるにつれ、仕事は構文のコツや書式のテクニックから、入力の構造化、検索の管理、ツール出力の組み合わせといったコンテキスト設計へ移っています。「プロンプトエンジニア」という職名は狭まっていますが、その根底のスキルは、開発者、アナリスト、マーケター、研究者など、AIを使うあらゆる役割に含まれています。タスクの明確な示し方、関連するコンテキスト、指定された出力形式が、モデルの回答の有用性を今も左右します。' } },
          { '@type': 'Question', name: 'モデルが改善し続ける中でプロンプトエンジニアリングを学ぶ必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい——ただし世代ごとに焦点が変わります。高性能なモデルは複雑な回避策の必要性を減らし、明確な意図、構造化されたコンテキスト、適切なサンプルの価値を高めます。役割、コンテキスト、形式、制約というファンダメンタルズはモデル世代を超えて安定しています。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトエンジニアリングはモデルの重みを変えずにモデルとの対話方法を変えます。ファインチューニングは新しいデータでモデルを再トレーニングし、その動作を永続的に変更します。プロンプトエンジニアリングは速く、安価で、可逆的です。ファインチューニングは目標の動作が一定で、高ボリュームで、またはプロンプトで確実に記述できない場合に適しています。ほとんどのチームはプロンプティングから始め、プロンプティングが限界に達したときのみファインチューニングに切り替えます。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'プロンプトエンジニアリング進化年表：2018–2026',
        description: '2018年から2026年までのプロンプトエンジニアリングの進化を形づくった主要な節目、研究論文、モデルのリリースの年表です。',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'ja',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT（Google）とGPT-2（OpenAI）の公開 (2018〜2019年)', description: '入力の言い回しでトランスフォーマーモデルを誘導できることを示したが、正式な分野はまだなかった' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3とBrown et al.「Language Models are Few-Shot Learners」 (2020年)', description: 'フューショットプロンプティングを確立：プロンプトを書き換えれば再学習なしでモデルの振る舞いが変わる' },
          { '@type': 'ListItem', position: 3, name: '思考の連鎖プロンプティング（Wei et al.） (2022年（1月）)', description: 'プロンプトの構造がステップごとの推論を引き出せることを示した' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF（Ouyang et al.、OpenAI） (2022年（3月）)', description: '指示に従うよう訓練されたモデルにより、プロンプトの質がはるかに重要になった' },
          { '@type': 'ListItem', position: 5, name: 'ChatGPTの公開 (2022年（11月）)', description: 'プロンプティングを一般の人々に広げ、数日で何百万人が試し始めた' },
          { '@type': 'ListItem', position: 6, name: '「プロンプトエンジニア」の求人が注目を集め、Anthropicの求人が17.5万〜33.5万ドルを提示 (2023年（第1四半期）)', description: '職業としての可能性を可視化したが、その役割は広く議論された' },
          { '@type': 'ListItem', position: 7, name: '画像入力を備えたGPT-4の公開 (2023年（3月）)', description: 'プロンプティングをテキストから画像へ拡張。12.8万トークンのコンテキストはGPT-4 Turbo（2023年11月）で実現' },
          { '@type': 'ListItem', position: 8, name: 'CRAFT、CO-STAR、SPECS、RISEN、TRACEなどのフレームワーク、OpenAIとGoogleの公式ガイド (2023年)', description: '個人の技を、再利用できて教えられるテンプレートへ変えた' },
          { '@type': 'ListItem', position: 9, name: 'APE（Zhou et al.）とDSPy（Khattab et al.）：LLMによるプロンプト最適化 (2022〜2023年)', description: 'LLMがプロンプトを書き調整できることを示し、自動最適化を実用的にした' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3（4月）と、100万トークンのコンテキストをプレビューしたGemini 1.5 Pro（2月） (2024年)', description: '私的環境にデプロイできるオープンウェイトモデルと超長コンテキストが、焦点をコンテキストエンジニアリングへ移した' },
          { '@type': 'ListItem', position: 11, name: '推論モデル：OpenAI o1（2024年9月）、DeepSeek-R1（2025年1月）、拡張思考を備えたClaude 3.7 Sonnet（2025年2月） (2024〜2025年)', description: 'モデルが内部でステップごとに推論するため、明示的な思考の連鎖プロンプトの重要度は下がる' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4（専門家混合）。Llama 4 Scoutは1,000万トークンのコンテキストに対応 (2025年（4月）)', description: 'オープンウェイトモデルが専門家混合の設計と超長コンテキストを採用' },
          { '@type': 'ListItem', position: 13, name: 'コンテキスト設計とエージェントのオーケストレーションが標準的な実践に (2026年)', description: 'プロンプティングは構成されたコンテキストの一層となり、システムレベルの思考が求められる' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: '5つのフェーズで分野全体を理解する',
          snippets: [
            { type: 'in-one-sentence', text: 'プロンプトエンジニアリングは、試行錯誤による言い回しの工夫から、再利用可能なパターン・評価・バージョン管理を備えた体系的な分野へと移行しました。モデルの性能向上により、巧みな言葉選びよりも構造が重要になったためです。' },
            { type: 'in-plain-terms', text: '最初は民間伝承のようなものでした。効きそうな言い回しを互いに教え合っていたのです。モデルが賢くなるにつれて「魔法の言葉」は意味を失い、代わりに構造——誰が、何を、どんな形式で——が決め手になりました。この転換が、寄せ集めの小技を教えられる技能へと変えたのです。' },
          ],
          content: [
            '**プロンプトエンジニアリングは、2020年頃のGPT-3をめぐる非公式な試行錯誤によるテキスト操作から、2026年までに名前の付いたテクニック・フレームワーク・ツールを持つ体系的な分野へと進化しました。** この歩みは5つのフェーズにわたります：初期のフューショット実験・大衆の認識にスキルをもたらしたChatGPTの瞬間・構造化された推論テクニックの発展・自動プロンプト最適化の台頭・そして現在のコンテキストデザインへの移行。',
            'この分野は単一の論文や企業から生まれたのではありません。研究（フューショット学習・思考の連鎖推論・RAG）と、プロンプトコレクションをオンラインで共有する実践者コミュニティと、優れたプロンプティングを即座に報われるものにした強力なモデルの突然の一般公開との重なりから成長しました。2026年現在、プロンプトエンジニアリングはもはやニッチなトリックではありません — AIシステムを扱う誰もが持つべき基本スキルです。',
          ],
        },

        tldr: {
          id: 'key-takeaways',
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
          id: 'before-had-a-name',
          title: 'プロンプトエンジニアリングという名称が生まれる前（2020年以前）',
          content: [
            '「プロンプトエンジニアリング」という言葉が生まれる前から、研究者はより良い出力を得るためにモデルへの入力を工夫していました。ただ、そう呼んでいなかっただけです。GPT-2（2019年、OpenAI）やBERT（2018年、Google）などの初期のトランスフォーマーモデルは、慎重に選んだ入力テキストで使われていましたが、その実践はデータ前処理の一部とみなされ、独立したスキルとは考えられていませんでした。',
            'GPT-2は2019年2月に15億パラメータのモデルとして発表され、OpenAIはまず小さなバージョンを公開し、2019年11月に完全版を公開しました。驚くほど一貫性のある文章を続けて生成できました。研究者や初期の実践者は、入力の言い回しで続きの品質が大きく変わることに気づきましたが、この観察をめぐるフレームワークも用語もコミュニティもまだありませんでした。プロンプトは入力であり、エンジニアリングの成果物ではなかったのです。',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020年：GPT-3とフューショットの革新',
          content: [
            '**プロンプトエンジニアリングの現代史は、実質的にGPT-3から始まります。** 2020年5月、OpenAIの研究者が「[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)」（Brown et al.）を発表し、1,750億パラメータのモデルGPT-3を紹介しました。この論文は、目的のタスクの例をいくつかプロンプトに直接含めるだけで、モデルの重みを更新しなくても、多くの下流タスクで性能が向上することを示しました。',
            'これがプロンプトエンジニアリングという分野の種でした。研究者や開発者は、プロンプトの書き方を変えるだけで、同じモデルが翻訳者、要約者、コード生成器、質問応答システムに変わることに気づきました。モデルの再学習は不要で、必要なのはより良いプロンプトでした。この気づきにより、プロンプトは単なる入力ではなく設計上の成果物として捉え直されました。',
            'Brown et al.は、フューショットの性能が一般にモデルサイズとともに向上し、1,750億パラメータのGPT-3が全体として最も強いと報告しました。これはスケールとプロンプトによる学習を結びつけ、プロンプトの質を研究者だけでなく実践者も制御できる変数にしました。',
            'GPT-3が広めた技法の実践ガイドは、[ゼロショット vs. フューショットプロンプティング](/prompt-engineering/zero-shot-vs-few-shot)を参照してください。',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021〜2022年初頭：プロンプトのトリックから認められたスキルへ',
          content: [
            '2021年から2022年初頭にかけて、プロンプト作成は研究論文から実践者のコミュニティへと広がりました。研究者もこの実践を文章で説明し始めました。Reynolds and McDonellは「[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)」（2021年2月）で、GPT-3向けのプロンプトを書くことはプログラミングの一形態だと論じ、サーベイ論文「[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)」（Liu et al.、2021年7月）は自然言語処理におけるプロンプトベースの手法を整理しました。一方、実践者はオンラインコミュニティで効果のあるプロンプトを共有していました。',
            'OpenAIのInstructGPT論文（Ouyang et al.、2022年3月）は、人間のフィードバック（RLHF）で調整され、ベースのGPT-3よりはるかに確実に自然言語の指示に従うモデルを紹介し、プロンプトの質をいっそう重要なものにしました。2022年半ばには、プロンプティングが研究者の好奇心にとどまらず、持ち運べるスキルであることが明らかになっていました。',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022年：思考の連鎖（Chain-of-Thought）と推論プロンプト',
          content: [
            '**2022年の思考の連鎖（CoT）プロンプティングの登場は、この分野の短い歴史の中で最も重要な技術的進展でした。** Wei et al.（Google）は「[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)」を発表し、途中の推論ステップを含む解答例をモデルに与えると、算術、常識、記号推論のタスクで性能が向上することを示しました。代表的な結果として、思考の連鎖プロンプティングにより、PaLM 540Bの小学校レベルの算数ベンチマークGSM8Kでの正答率は17.9%から56.9%に上がりました（論文の表1）。追加の学習なしに、プロンプトを変えただけで得られた向上です。この意味は大きく、プロンプトの構造は異なる事実だけでなく、異なる推論の振る舞いを引き出せるということでした。',
            '関連する技法がすぐに続きました。Zhou et al.は[least-to-most プロンプティング](https://arxiv.org/abs/2205.10625)を提案し、複雑な問題をより単純なサブ問題の列に分解して順に解きます。これらの手法により、プロンプトエンジニアリングは書式の工夫から、そう訓練されていないモデルに構造化された推論を引き出すための道具へと変わりました。プロンプティングは認知の足場になったのです。',
            '技法の詳しいガイドは、[Chain-of-Thoughtプロンプティング: AIに推論プロセスを見せさせる](/prompt-engineering/chain-of-thought-prompting)と[プロンプトチェーニング：複雑なタスクを成功する段階に分ける方法](/prompt-engineering/prompt-chaining)を参照してください。',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: '2022年後半〜2023年：ChatGPTの瞬間とプロンプトエンジニアという肩書き',
          callouts: [
            {
              type: 'did-you-know',
              label: '豆知識',
              text: 'Reutersが伝えたUBSの分析は、ChatGPTが公開から約2か月後の2023年1月に月間アクティブユーザー約1億人に達したと推定しました。ReutersはSensor Towerのデータを引き、同じ水準に達するまでTikTokは約9か月、Instagramは約2年半かかったと報じています。この普及の速さが、プロンプトエンジニアリングを研究上の概念からほぼ一夜で一般的なスキルに変えました。',
            },
          ],
          content: [
            '**2022年11月30日のChatGPT公開は、プロンプトエンジニアリングの世間での位置づけを一夜にして変えました。** OpenAIのサム・アルトマンCEOは2022年12月初めにTwitterで、ChatGPTが5日で100万ユーザーを超えたと述べ、Reutersが伝えたUBSの分析は、2023年1月までに月間アクティブユーザーが約1億人になったと推定しました。数日のうちに何百万もの人がプロンプトを試し、依頼の仕方で結果が大きく変わることに気づき、技術系メディアはプロンプトエンジニアリングを学ぶ価値のあるスキルとして取り上げ始めました。',
            '2023年初めには「プロンプトエンジニア」が職種名として登場しました。Anthropicの「Prompt Engineer and Librarian」の求人は17.5万〜33.5万ドルの給与幅を示しており、2023年3月に[Fortuneが報じました](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/)。プロンプトエンジニアリングが長続きするキャリアなのか、一部がヒューマンコンピュータインタフェース設計、一部が専門知識、一部が品質保証にまたがる過渡的な役割なのかは、広く議論されました。',
            'この用語を作った人物として特定の個人が認められているわけではありません。2021年にはすでに研究論文がプロンプトに基づく手法を説明しており（上記参照）、ChatGPT後にこの言葉が広まりました。[Wikipediaのプロンプトエンジニアリングの記事](https://en.wikipedia.org/wiki/Prompt_engineering)が経緯を概観しています。',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023年：GPT-4・マルチモーダルプロンプティング・フレームワーク',
          content: [
            '2023年3月のGPT-4はテキストに加えて画像入力を導入し、画像の説明、図の比較、グラフへの注釈といった視覚タスクにプロンプトエンジニアリングを広げました。その後、より大きなコンテキストウィンドウ（2023年11月のGPT-4 Turboで12.8万トークン）も続きました。GoogleのGemini（2023年12月）や、画像理解を備えたAnthropicのClaude 3モデル（2024年3月）が、他社のマルチモーダルな選択肢を加えました。',
            '同じ時期に、ベストプラクティスの体系化が進みました。OpenAIは[公式のプロンプトエンジニアリングガイド](https://developers.openai.com/api/docs/guides/prompt-engineering)を公開し、Google Cloudも独自の[プロンプトエンジニアリングガイド](https://cloud.google.com/discover/what-is-prompt-engineering)を公開しました。独立した著者やチームは、CRAFT、CO-STAR、SPECS、RISEN、TRACEなどのフレームワークを公開し、プロンプトを構造化する再現可能なテンプレートを実践者に提供して、試行錯誤への依存を減らしました。',
            'これらのフレームワークは、プロンプトエンジニアリングが個人のスキルから、教えて共有できる実践へと成熟したことを示しています。選び方は[どのPromptフレームワークを使うべきか？（2026）](/prompt-engineering/which-prompt-framework-should-you-use)、マルチモーダルの側面は[テキストを超えて：画像でプロンプトを作成する方法](/prompt-engineering/beyond-text-how-to-prompt-with-images)を参照してください。',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023〜2024年：自動プロンプトエンジニアリングとRAG',
          content: [
            '2023年ごろの注目すべき進展は、LLMが人間と同じくらいうまくプロンプトを最適化できることを示す研究でした。Zhou et al.は2022年11月に「[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)」（APE）を公開しました。LLMが候補の指示を生成して評価し、検証した24タスクのうち19タスクで、人間が書いた指示に並ぶか上回りました。Stanfordの研究者によるDSPyフレームワーク（[Khattab et al.、2023年10月](https://arxiv.org/abs/2310.03714)）はさらに進み、開発者がプロンプトの目的を記述すると、文言が自動的にコンパイルされます。',
            '同時に、Facebook AI Research（現Meta）の[Lewis et al.が2020年に提案した](https://arxiv.org/abs/2005.11401)検索拡張生成（RAG）が、本番のAIシステムの中心的なパターンになりました。RAGは取得したドキュメントをプロンプトのコンテキストに直接挿入し、必要な事実をすべてプロンプトに含める代わりに、実在する最新の情報源に出力を根拠づけました。これにより重点は「モデルにこれをどう知らせるか」から「モデルが正しく使えるようにコンテキストをどう構造化するか」へ移りました。',
            'この時期の主要な技法は、[RAG解説：実データでAI回答を根拠づける方法（2026年）](/prompt-engineering/rag-explained)と[セルフコンシステンシープロンプティング：複数の答えを生成して正しいものを選ぶ](/prompt-engineering/self-consistency-prompting)を参照してください。',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024〜2025年：プロンプトエンジニアリングからコンテキストデザインへ',
          content: [
            '2024年ごろには、「より良いプロンプトを書く」という単純な考え方に代わる新しい捉え方が現れました。実践者や研究者は、コンテキストエンジニアリングと呼ぶようになりました。システムプロンプト、取得したドキュメント、ツールの出力、会話履歴、ユーザー入力といった、コンテキストウィンドウに入るものすべてを、モデルの振る舞いを導くよう意図的に組み立てる実践です。プロンプトは単独の成果物ではなく、設計されたコンテキストの一層になりました。',
            'いくつかの進展がこの変化を加速しました。Metaの Llama 3モデル（2024年4月）は高性能なオープンウェイトLLMを私的な環境にデプロイできるようにし、プロンプトエンジニアリングの一部をクラウドAPIからローカルのインフラへ移しました。Googleは2024年2月に、[限定プレビューで100万トークンのコンテキストウィンドウ](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)を持つGemini 1.5 Proを発表し、コードベースや書籍、ドキュメント集全体を1つのプロンプトに入れることを現実的にしました。LangChainやAutoGenのようなマルチエージェントフレームワークは、プロンプティングをオーケストレーションに変えました。1つのプロンプトが別のモデルを動かし、それがツールを呼び出し、結果のコンテキストが次のプロンプトに返ります。',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026年以降：コア・リテラシーとしてのプロンプトエンジニアリング',
          callouts: [
            {
              type: 'pro-tip',
              label: 'プロのヒント',
              text: '「プロンプトエンジニアリング」から「コンテキスト設計」への移行は、単なる用語の違いではなく、最適化の対象を変えます。指示の言い回しを調整する代わりに、システムプロンプト、取得したドキュメント、会話履歴、ツールの出力、ユーザー入力といった、コンテキストウィンドウに入るものを設計します。プロンプトは全体ではなく、その一層です。',
            },
          ],
          content: [
            '2026年には、プロンプトエンジニアリングは特殊な職種というより、AIツールを使うナレッジワーカーの基礎的なリテラシーとして語られることが増えています。つまり、タスクを言語化し、適切なコンテキストを与え、必要な出力を指定する力です。',
            '役割は2つの系統に分かれました。1つはシステムとコンテキストの設計で、プロンプトが検索、エージェント、評価パイプラインを含む大きなアーキテクチャの一部となる本番AIシステムのエンジニアリングです。もう1つは日常的な利用で、内部のアーキテクチャを知らなくても、明確で構造化されたプロンプトを書いて有用な出力を得る力です。どちらも、明確なタスク指定、適切なコンテキスト、制約、出力形式という同じ基本原則の恩恵を受けます。',
            'より高性能なモデルや自動化ツールが登場しても変わらないのは、入力が明確で構造化されているほど出力が信頼でき有用になるという根本原則です。技法、用語、ツールは成熟しましたが、GPT-3時代の核心的な洞察は2026年でも成り立っています。',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: 'タイムライン：プロンプトエンジニアリングの主要なマイルストーン',
          content: '次の表は、2018年から2026年までの主要な節目、つまりプロンプトエンジニアリングが現在の形に至るまでを形づくった出来事、論文、モデルのリリースをまとめたものです。',
          columns: ['年', 'マイルストーン', '重要な理由'],
          rows: [
            { '年': '2018〜2019年', 'マイルストーン': 'BERT（Google）とGPT-2（OpenAI）の公開', '重要な理由': '入力の言い回しでトランスフォーマーモデルを誘導できることを示したが、正式な分野はまだなかった' },
            { '年': '2020年', 'マイルストーン': 'GPT-3とBrown et al.「Language Models are Few-Shot Learners」', '重要な理由': 'フューショットプロンプティングを確立：プロンプトを書き換えれば再学習なしでモデルの振る舞いが変わる' },
            { '年': '2022年（1月）', 'マイルストーン': '思考の連鎖プロンプティング（Wei et al.）', '重要な理由': 'プロンプトの構造がステップごとの推論を引き出せることを示した' },
            { '年': '2022年（3月）', 'マイルストーン': 'InstructGPT / RLHF（Ouyang et al.、OpenAI）', '重要な理由': '指示に従うよう訓練されたモデルにより、プロンプトの質がはるかに重要になった' },
            { '年': '2022年（11月）', 'マイルストーン': 'ChatGPTの公開', '重要な理由': 'プロンプティングを一般の人々に広げ、数日で何百万人が試し始めた' },
            { '年': '2023年（第1四半期）', 'マイルストーン': '「プロンプトエンジニア」の求人が注目を集め、Anthropicの求人が17.5万〜33.5万ドルを提示', '重要な理由': '職業としての可能性を可視化したが、その役割は広く議論された' },
            { '年': '2023年（3月）', 'マイルストーン': '画像入力を備えたGPT-4の公開', '重要な理由': 'プロンプティングをテキストから画像へ拡張。12.8万トークンのコンテキストはGPT-4 Turbo（2023年11月）で実現' },
            { '年': '2023年', 'マイルストーン': 'CRAFT、CO-STAR、SPECS、RISEN、TRACEなどのフレームワーク、OpenAIとGoogleの公式ガイド', '重要な理由': '個人の技を、再利用できて教えられるテンプレートへ変えた' },
            { '年': '2022〜2023年', 'マイルストーン': 'APE（Zhou et al.）とDSPy（Khattab et al.）：LLMによるプロンプト最適化', '重要な理由': 'LLMがプロンプトを書き調整できることを示し、自動最適化を実用的にした' },
            { '年': '2024年', 'マイルストーン': 'Llama 3（4月）と、100万トークンのコンテキストをプレビューしたGemini 1.5 Pro（2月）', '重要な理由': '私的環境にデプロイできるオープンウェイトモデルと超長コンテキストが、焦点をコンテキストエンジニアリングへ移した' },
            { '年': '2024〜2025年', 'マイルストーン': '推論モデル：OpenAI o1（2024年9月）、DeepSeek-R1（2025年1月）、拡張思考を備えたClaude 3.7 Sonnet（2025年2月）', '重要な理由': 'モデルが内部でステップごとに推論するため、明示的な思考の連鎖プロンプトの重要度は下がる' },
            { '年': '2025年（4月）', 'マイルストーン': 'Llama 4（専門家混合）。Llama 4 Scoutは1,000万トークンのコンテキストに対応', '重要な理由': 'オープンウェイトモデルが専門家混合の設計と超長コンテキストを採用' },
            { '年': '2026年', 'マイルストーン': 'コンテキスト設計とエージェントのオーケストレーションが標準的な実践に', '重要な理由': 'プロンプティングは構成されたコンテキストの一層となり、システムレベルの思考が求められる' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: '歴史が今日のベストプラクティスをどのように形作るか',
          content: [
            'プロンプトエンジニアリングの進化の各フェーズは、現在の実践に永続的な堆積物を残しました。GPT-3時代は、モデルの動作が入力の構造によって形作られる — コンテンツだけでなく — というコアな洞察を与えてくれました。思考の連鎖（Chain-of-Thought）時代は、明示的な推論の足場を与えてくれました：ステップバイステップのプロンプティング・プロンプトチェーニング・思考ツリーアプローチ。フレームワーク時代は、各実践者がゼロから発見することなくベストプラクティスを体現する再利用可能なテンプレートを与えてくれました。',
            'RAGとコンテキストデザインの時代は、プロンプトが単独で存在するのではなく — 取得されたデータ・システム指示・ツール出力と組み合わされてフルコンテキストを形成する — という理解を与えてくれました。そして自動プロンプティング時代は、優れたプロンプティングの原則が測定可能であることを思い出させてくれました：より構造化されたプロンプトは、体系的に評価・最適化できる方法でより良い出力を生成します。',
          ],
          items: [
            '2022年からの推論テクニック → [Chain-of-Thoughtプロンプティング: AIに推論プロセスを見せさせる](/prompt-engineering/chain-of-thought-prompting) と [Tree of Thought & ReAct: 複雑な問題のための高度なReasoningテクニック](/prompt-engineering/tree-of-thought-and-react)',
            '2023年からのフレームワーク開発 → [どのPromptフレームワークを使うべきか？（2026）](/prompt-engineering/which-prompt-framework-should-you-use)',
            'コンテキストウィンドウの成長 → [コンテキストウィンドウの説明：AIが忘れる理由（と対処法）](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            'モデル世代にわたるトークンの経済性 → [トークン、コスト＆制限：AIプロンプティングの経済学](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            '純粋なプロンプティングの補完としてのRAG → [RAG解説：実データでAI回答を根拠づける方法（2026年）](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ：プロンプトエンジニアリングの進化',
          faqs: [
            {
              q: 'プロンプトエンジニアリングはいつ始まったのですか？',
              a: '実践は2020年5月のGPT-3から始まりました。Brown et al.が、プロンプトに置いた例で再学習なしにモデルを誘導できると示したのです。2021年初めに研究者が「プロンプトプログラミング」と呼び、2022年1月に思考の連鎖プロンプティングが続き、ChatGPT（2022年11月）が一般のスキルにしました。',
            },
            {
              q: '「プロンプトエンジニアリング」という用語は誰が最初に作ったのですか？',
              a: '正確な起源は議論されており、この用語を考案したとされる特定の人物はいません。2021年にはすでに研究論文がプロンプトに基づく手法を説明しており、この言葉は2022年とChatGPT後に広く使われるようになりました。Wikipediaのプロンプトエンジニアリングの記事が経緯を概観しています。',
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
              a: 'いいえ。分野は形を変えただけで、なくなってはいません。モデルが高性能になるにつれ、仕事は構文のコツや書式のテクニックから、入力の構造化、検索の管理、ツール出力の組み合わせといったコンテキスト設計へ移っています。「プロンプトエンジニア」という職名は狭まっていますが、その根底のスキルは、開発者、アナリスト、マーケター、研究者など、AIを使うあらゆる役割に含まれています。タスクの明確な示し方、関連するコンテキスト、指定された出力形式が、モデルの回答の有用性を今も左右します。',
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

        commonMistakes: {
          id: 'common-mistakes',
          title: 'プロンプトエンジニアリングについてのよくある誤解',
          mistakes: [
            {
              mistake: 'プロンプトエンジニアリングは、より良い文章を書くことだけだ。',
              problem: 'これは構造面とコンテキスト面を見落としています。プロンプトの効果は言葉選びだけでなく、役割の割り当て（モデルにペルソナを与える）、制約の指定、出力形式、例の選び方に左右され、これらは文法とは関係のない構造的な要素です。',
              fix: 'プロンプトをインタフェースとするシステムを設計する、という視点で考えてください。構造に投資します。役割を割り当て（「あなたは〜です」「〜と仮定してください」）、制約を指定し（「〜しないでください」「〜を含めてください」）、出力形式を定義し、例を示します。多くの場合、構造は文章の巧みさより重要です。',
            },
            {
              mistake: 'より良いモデルが出ればプロンプトエンジニアリングは不要になる。',
              problem: '高性能なモデルは有能な人に似ていて、明確な指示にはより良く反応します。良いプロンプトの効果は、モデルの能力が上がるほど大きくなります。変わるのは必要なプロンプトの種類であり、必要かどうかではありません。',
              fix: 'プロンプティングはAI活用の中心であり続けると考えてください。変わるのは、必要な詳細さと足場の量です。弱いモデルには明示的な手順の構造が必要かもしれませんが、強いモデルなら明確な一行の指示で足りることもあります。ただし、その簡潔さ自体がプロンプトエンジニアリング上の判断です。',
            },
            {
              mistake: 'プロンプトの自動最適化ツールが人間のプロンプトエンジニアリングに取って代わる。',
              problem: 'DSPyのようなツールは、定義された目的の範囲で文言の最適化を助けますが、目的、制約、成功基準、評価方法は人間が指定する必要があります。自動化は反復の手間を減らしますが、モデルに何をさせるかを構造的に考える必要をなくしはしません。',
              fix: '自動化は代替ではなく道具として使ってください。まず、タスクを理解している人が構造化したプロンプトを作り、DSPyなどのツールで磨き込みます。タスク構造に関する人間の判断は、代わりのきかないものです。',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            { title: 'Chain-of-Thoughtプロンプティング: AIに推論プロセスを見せさせる', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'ゼロショット vs. フューショットプロンプティング', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG解説：実データでAI回答を根拠づける方法（2026年）', url: '/prompt-engineering/rag-explained' },
            { title: 'コンテキストウィンドウの説明：AIが忘れる理由（と対処法）', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: 'トークン、コスト＆制限：AIプロンプティングの経済学', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: '出典',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — フューショットプロンプティングをパラダイムとして示したOpenAIのGPT-3論文。',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — 途中の推論ステップを含むプロンプト。GSM8Kの17.9%から56.9%への結果の出典（表1）。',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT：人間のフィードバック（RLHF）による指示追従。',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE：LLMがプロンプトを生成・評価する。',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — least-to-most プロンプティング：問題をサブ問題に分解する。',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — 検索拡張生成（RAG）を提案した論文。',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — プロンプトを書くことをプログラミングとして論じた初期の論文（2021年）。',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — 自然言語処理におけるプロンプト手法のサーベイ（2021年）。',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy：プロンプトを自動でコンパイルするフレームワーク。',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta、Llama 4の発表（2025年4月5日）：専門家混合、Scoutは1,000万トークンのコンテキスト。',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic、Claude 3.7 Sonnetの発表（2025年2月24日）：拡張思考モード。',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google、Gemini 1.5の発表（2024年2月15日）：限定プレビューで100万トークンのコンテキスト。',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1：強化学習による推論（2025年1月）。',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune（2023年3月9日）：Anthropicのプロンプトエンジニア求人の給与幅を報じた記事。',
          ],
        },

      },
    },

    zh: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: '基础知识',
      heroImage: '/images/prompt-engineering-history-overview-hero-zh.webp',
      title: '从GPT-2到今天：提示词工程的演变',
      seoTitle: '提示词工程过时了吗？GPT-3到上下文设计2020–2026',
      intro: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。',
      metaDescription: '提示词工程没有消亡而是转型：附来源的时间线，从2020年GPT-3少样本提示，到思维链、ChatGPT与上下文设计，梳理2020至2026年的演变。',
      ogTitle: '提示词工程如何演变：从GPT-3到上下文设计（2020–2026）',
      twitterTitle: '提示词工程如何在6年内从“写更好的提示词”走向上下文设计',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '阅读约10分钟',
      educationalLevel: 'Beginner',
      audience: '学习提示词工程和AI技术历史的知识工作者和开发人员',
      primaryTerm: '提示词工程历史',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**提示词工程从2020年围绕GPT-3的非正式试错，发展到2026年拥有命名框架、技术和工具的体系化领域，经历了五个阶段：少样本学习、思维链推理、ChatGPT走向大众、自动化优化以及上下文设计。**',
      quickFacts: [
        '**GPT-3（2020年）：** 1750亿参数的模型把少样本提示确立为范式转变',
        '**思维链（2022年）：** Wei等人证明提示词结构可以激发逐步推理；PaLM 540B在GSM8K上的准确率从17.9%提高到56.9%',
        '**ChatGPT（2022年11月）：** 5天内突破100万用户（据OpenAI首席执行官Sam Altman）；据估计2023年1月月活跃用户约1亿（UBS，经Reuters报道）',
        '**就业市场（2023年）：** Anthropic的“Prompt Engineer and Librarian”职位标出17.5万至33.5万美元（Fortune，2023年3月）',
        '**GPT-4与框架（2023年）：** 图像输入和公开的框架（CO-STAR、SPECS、RISEN）使提示成为可传授的学科',
        '**上下文设计（2024–2026年）：** 开放权重LLM、超过100万词元的上下文窗口和智能体编排，把重心从调整提示词转向系统层面的上下文工程',
      ],
      toc: [
        { label: '核心要点', anchor: 'key-takeaways' },
        { label: '提示词工程有名字之前（2020年以前）', anchor: 'before-had-a-name' },
        { label: '2020年：GPT-3 与少样本突破', anchor: 'gpt-3-few-shot' },
        { label: '2021年至2022年初：从提示技巧到公认技能', anchor: 'tricks-to-skill' },
        { label: '2022年：思维链与推理提示', anchor: 'chain-of-thought' },
        { label: '2022年底至2023年：ChatGPT 时刻与"提示词工程师"职位的出现', anchor: 'chatgpt-moment' },
        { label: '2023年：GPT-4、多模态提示与框架', anchor: 'gpt-4-frameworks' },
        { label: '2023至2024年：自动化提示词工程与 RAG', anchor: 'automated-rag' },
        { label: '2024至2025年：从提示词工程到上下文设计', anchor: 'context-design' },
        { label: '2026年及以后：提示词工程作为核心素养', anchor: 'beyond-2026' },
        { label: '时间轴：提示词工程的关键里程碑', anchor: 'timeline' },
        { label: '历史如何塑造今日最佳实践', anchor: 'today-practice' },
        { label: '关于提示词工程的常见误解', anchor: 'common-mistakes' },
        { label: '相关阅读', anchor: 'related-reading' },
        { label: 'FAQ：提示词工程的演变', anchor: 'faq' },
        { label: '来源', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '提示词工程过时了吗？GPT-3到上下文设计2020–2026',
        description: '提示词工程没有消亡而是转型：附来源的时间线，从2020年GPT-3少样本提示，到思维链、ChatGPT与上下文设计，梳理2020至2026年的演变。',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'zh',
        keywords: ['提示工程历史', 'GPT-3 少样本学习', 'Chain-of-Thought 提示', 'ChatGPT', '上下文工程', '提示工程时间线', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: '学习提示词工程和AI技术历史的知识工作者和开发人员' },
        about: [
          { '@type': 'Thing', name: '提示词工程历史' },
          { '@type': 'Thing', name: '大型语言模型' },
          { '@type': 'Thing', name: 'AI技术与框架' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          { '@type': 'Question', name: '提示词工程是什么时候开始的？', acceptedAnswer: { '@type': 'Answer', text: '这一实践始于2020年5月的GPT-3，当时Brown等人证明，放在提示词中的示例无需重新训练就能引导模型。研究人员在2021年初把它称为“提示编程”，思维链提示于2022年1月出现，ChatGPT（2022年11月）则使它成为大众技能。' } },
          { '@type': 'Question', name: '谁最先创造了"提示词工程"这个术语？', acceptedAnswer: { '@type': 'Answer', text: '确切起源存在争议，没有哪一个人被认定为该术语的发明者。2021年就已有研究论文描述基于提示的方法，这个说法在2022年以及ChatGPT之后被更广泛地使用。Wikipedia上的提示词工程条目概述了这段历史。' } },
          { '@type': 'Question', name: '为什么提示词工程在 ChatGPT 之后迅速爆红？', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT 是第一个数百万非研究人员可以立即免费使用、无需编写代码的通用 AI 模型。精心设计的提示词与模糊提示词之间的差距是可见的，且立即产生影响——更好的提示词产出可直接使用的更好输出。这个反馈循环被数百万人同时体验，将提示词工程从研究概念转变为大众技能。' } },
          { '@type': 'Question', name: '研究论文如何影响了现实世界的提示技术？', acceptedAnswer: { '@type': 'Answer', text: '对于 AI 研究而言，这种传播速度异常快速。思维链（Chain-of-Thought）提示（Wei 等人，2022年）在几个月内就从学术论文变成了广泛使用的从业者技术，部分原因是它不需要任何工具——只需改变你写提示词的方式。GPT-3 论文（Brown 等人，2020年）中的少样本提示，任何有 API 访问权限的人都可以立即采用。这些技术的易用性加速了它们的传播。' } },
          { '@type': 'Question', name: '随着模型的改进，提示词工程会变得不那么重要吗？', acceptedAnswer: { '@type': 'Answer', text: '不会——能力更强的模型对结构良好的提示词响应更好，而不是更差。随着模型更善于遵循精确指令，好的提示词所带来的收益也会增加。改变的是简单任务所需的提示词工程程度：与2021年相比，对话性问题现在需要的精心设计更少。但对于复杂的生产级输出，结构化提示仍然是最可靠的手段。' } },
          { '@type': 'Question', name: '提示词工程与上下文工程有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '提示词工程通常指设计模型的文本输入以改善其输出。上下文工程是一个更广泛、更新近的概念，指编排模型上下文窗口中的所有内容：系统提示词、检索到的文档、对话历史、工具输出和用户输入——所有这些都经过精心组合。上下文工程将提示词视为设计系统中的一个组件，而非独立的产物。' } },
          { '@type': 'Question', name: '自动化工具会取代理解提示词工程的必要性吗？', acceptedAnswer: { '@type': 'Answer', text: '像 DSPy 这样的自动化工具可以在定义的目标内优化提示词措辞，但它们需要人类来指定目标是什么、适用哪些约束以及如何评估成功。理解提示词工程原则仍然是有效使用这些工具的必要条件——也是在它们产出错误结果时进行诊断的必要条件。自动化消除了一些手动迭代；它不能消除结构化思考的需要。' } },
          { '@type': 'Question', name: '提示词工程在2026年已经过时了吗？', acceptedAnswer: { '@type': 'Answer', text: '没有。这一领域发生了转移，而不是消失。随着模型能力增强，工作重心从语法技巧和格式窍门转向上下文设计，即构造输入、管理检索和组合工具输出。“提示词工程师”这一职称在收窄，但这一技能已融入每个使用AI的角色：开发者、分析师、营销人员、研究者。清晰地表述任务、提供相关上下文和指定输出格式，仍然决定着模型回答的有用程度。' } },
          { '@type': 'Question', name: '随着AI模型不断改进，我还需要学习提示词工程吗？', acceptedAnswer: { '@type': 'Answer', text: '需要——但每一代的重点会有所转变。更好的模型减少了对复杂变通方法的需求，提高了清晰意图、结构化上下文和精选示例的价值。角色、上下文、格式、约束这些基础知识在每代模型中保持稳定。' } },
          { '@type': 'Question', name: '提示词工程和微调有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '提示词工程在不修改模型权重的情况下改变与模型的交互方式。微调在新数据上重新训练模型，永久改变其行为。提示词工程更快、更便宜、可逆——可以在几分钟内迭代。微调更适合目标行为一致、高频或无法在提示词中可靠描述的情况。大多数团队从提示词工程开始，只有当提示词工程达到上限时才转向微调。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '提示词工程演变时间线：2018–2026',
        description: '塑造2018年至2026年提示词工程演变的关键里程碑、研究论文和模型发布的时间线。',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'zh',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT（Google）和GPT-2（OpenAI）发布 (2018–2019年)', description: '表明Transformer模型可以通过输入措辞引导，但当时尚无正式学科' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3及Brown等人的《Language Models are Few-Shot Learners》 (2020年)', description: '确立少样本提示：重写提示词即可改变模型行为，无需重新训练' },
          { '@type': 'ListItem', position: 3, name: '思维链提示（Wei等人） (2022年（1月）)', description: '表明提示词结构可以引出逐步推理' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF（Ouyang等人，OpenAI） (2022年（3月）)', description: '经训练遵循指令的模型使提示词质量的影响大大增加' },
          { '@type': 'ListItem', position: 5, name: 'ChatGPT发布 (2022年（11月）)', description: '把提示带给大众；数百万人在几天内开始尝试' },
          { '@type': 'ListItem', position: 6, name: '“提示词工程师”职位引发关注；Anthropic职位标出17.5万–33.5万美元 (2023年（第1季度）)', description: '让提示词工程成为一种可见的潜在职业，但该角色备受争议' },
          { '@type': 'ListItem', position: 7, name: 'GPT-4发布，支持图像输入 (2023年（3月）)', description: '把提示从文本扩展到图像；12.8万词元的上下文随GPT-4 Turbo（2023年11月）出现' },
          { '@type': 'ListItem', position: 8, name: 'CRAFT、CO-STAR、SPECS、RISEN、TRACE等框架；OpenAI和Google的官方指南 (2023年)', description: '把个人手艺变成可复用、可传授的模板' },
          { '@type': 'ListItem', position: 9, name: 'APE（Zhou等人）和DSPy（Khattab等人）：由LLM优化的提示词 (2022–2023年)', description: '表明LLM能编写和调整提示词，使自动化提示优化变得可行' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3（4月）和预览100万词元上下文的Gemini 1.5 Pro（2月） (2024年)', description: '可私有部署的开放权重模型与超长上下文，把重心转向上下文工程' },
          { '@type': 'ListItem', position: 11, name: '推理模型：OpenAI o1（2024年9月）、DeepSeek-R1（2025年1月）、具备扩展思考的Claude 3.7 Sonnet（2025年2月） (2024–2025年)', description: '模型在内部逐步推理，因此显式思维链提示对它们的重要性下降' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4（混合专家）；Llama 4 Scout支持1000万词元的上下文 (2025年（4月）)', description: '开放权重模型采用混合专家架构和超长上下文' },
          { '@type': 'ListItem', position: 13, name: '上下文设计与智能体编排成为标准做法 (2026年)', description: '提示只是组合上下文中的一层；需要系统层面的思考' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: '提示词工程如何演变：简要概述',
          snippets: [
            { type: 'in-one-sentence', text: '提示词工程从靠试错摸索措辞的技巧，演变为一门有文档、有可复用模式、有评估与版本管理的学科；随着模型能力提升，结构的重要性超过了措辞是否巧妙。' },
            { type: 'in-plain-terms', text: '最初它更像口耳相传的偏方，大家互相交换看起来管用的说法。随着模型变强，「咒语」不再奏效，真正起作用的是结构：谁来做、做什么、以什么格式输出。正是这一转变，把一堆小技巧变成了可以传授的手艺。' },
          ],
          content: [
            '**提示词工程从2020年前后围绕 GPT-3 的非正式试错式文本操作，发展为到2026年具有命名技术、框架和工具的结构化学科。** 这一历程跨越五个阶段：早期少样本实验、将这门技能带入主流视野的 ChatGPT 时刻、结构化推理技术的发展、自动化提示词优化的兴起，以及当前向上下文设计的转变。',
            '这门学科并非源自单一论文或公司。它生长于研究（少样本学习、思维链推理、RAG（检索增强生成））、在网上共享提示词集合的从业者社区，以及强大模型的突然公开可用（这使得高质量提示词立即带来回报）的交汇之处。到2026年，提示词工程不再是一项小众技巧——它已成为任何使用 AI 系统的人的基础技能。',
          ],
        },

        tldr: {
          id: 'key-takeaways',
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
          id: 'before-had-a-name',
          title: '提示词工程有名字之前（2020年以前）',
          content: [
            '在“提示词工程”一词出现之前，研究人员就已经在调整模型输入以获得更好的输出，只是没有这样称呼。GPT-2（2019年，OpenAI）和BERT（2018年，Google）等早期Transformer模型通过精心挑选的输入文本来使用，但这种做法被视为数据预处理的一部分，而不是独立的技能。',
            'GPT-2于2019年2月作为15亿参数的模型发布；OpenAI先发布了较小的版本，并在2019年11月发布完整模型。它能生成相当连贯的文本。研究人员和早期实践者发现，输入措辞会显著改变续写质量，但当时还没有围绕这一观察形成框架、术语或社区。提示词只是输入，而不是工程产物。',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020年：GPT-3 与少样本突破',
          content: [
            '**提示词工程的现代历史实际上始于GPT-3。** 2020年5月，OpenAI的研究人员发表了《[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)》（Brown等人），介绍了拥有1750亿参数的GPT-3。论文表明，在提示词中直接加入几个目标任务的示例，无需更新模型权重，就能提高许多下游任务的表现。',
            '这是提示词工程成为一门学科的起点。研究人员和开发者意识到，只需改变提示词的写法，同一个模型就能成为翻译器、摘要器、代码生成器或问答系统。模型不需要重新训练，只需要更好的提示词。这一认识改变了人们对提示词的看法：它不只是输入，更是设计产物。',
            'Brown等人报告称，少样本表现总体上随模型规模增大而提升，1750亿参数的GPT-3整体上最强。这把规模与基于提示的学习联系起来，也使提示词的质量成为实践者而不仅是研究人员可以掌控的变量。',
            '关于GPT-3使其闻名的这一技术，请参阅[零样本与少样本提示对比](/prompt-engineering/zero-shot-vs-few-shot)获取实用指南。',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021年至2022年初：从提示技巧到公认技能',
          content: [
            '2021年至2022年初，提示词的撰写从研究论文走向了实践者社区。研究人员开始用文字描述这种做法：Reynolds和McDonell在《[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)》（2021年2月）中提出，为GPT-3写提示词是一种编程；综述《[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)》（Liu等人，2021年7月）则梳理了自然语言处理中基于提示的方法。与此同时，实践者在线上社区分享有效的提示词。',
            'OpenAI的InstructGPT论文（Ouyang等人，2022年3月）介绍了经人类反馈（RLHF）微调的模型，它们遵循自然语言指令的可靠性远高于基础版GPT-3，使提示词质量更加重要。到2022年中期，人们已经清楚地看到，提示是一种可迁移的技能，而不只是研究人员的好奇心。',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022年：思维链与推理提示',
          content: [
            '**2022年思维链（CoT）提示的出现，是这一学科短暂历史中最重要的技术进展。** Wei等人（Google）发表了《[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)》，表明给模型提供带有中间推理步骤的示例，可以提高算术、常识和符号推理任务的表现。在一个突出的结果中，思维链提示使PaLM 540B在小学数学基准GSM8K上的准确率从17.9%提高到56.9%（论文表1），这一提升仅靠改变提示词获得，没有额外的模型训练。其含义深远：提示词的结构可以激发不同的推理行为，而不只是调出不同的事实。',
            '相关技术很快出现。Zhou等人提出了[由少到多提示（least-to-most）](https://arxiv.org/abs/2205.10625)，把复杂问题分解为一系列更简单的子问题并依次解决。这些方法使提示词工程从格式练习变成了从未被明确训练推理的模型中引出结构化推理的工具。提示成为了认知的脚手架。',
            '完整的技术指南请参阅[链式思维提示词: 让AI展示其推理过程](/prompt-engineering/chain-of-thought-prompting)和[提示链：复杂任务分步示例与LangChain代码](/prompt-engineering/prompt-chaining)。',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: '2022年底至2023年：ChatGPT 时刻与"提示词工程师"职位的出现',
          callouts: [
            {
              type: 'did-you-know',
              label: '你知道吗',
              text: 'Reuters引述的UBS分析估计，ChatGPT在2023年1月（上线约两个月后）达到约1亿月活跃用户。Reuters援引Sensor Tower的数据称，TikTok达到同一水平用了约9个月，Instagram约两年半。正是这样的普及速度，使提示词工程几乎一夜之间从研究概念变成大众技能。',
            },
          ],
          content: [
            '**2022年11月30日ChatGPT的发布，一夜之间改变了提示词工程的公众形象。** OpenAI首席执行官Sam Altman在2022年12月初于Twitter上表示，ChatGPT五天内用户突破100万；Reuters报道的UBS分析则估计，到2023年1月月活跃用户约1亿。几天之内，数百万人开始尝试提示词，并发现结果因措辞不同而差异巨大，科技媒体也开始把提示词工程当作值得学习的技能来报道。',
            '到2023年初，“提示词工程师”已成为一个职位名称：Anthropic的“Prompt Engineer and Librarian”职位标出了17.5万至33.5万美元的薪资范围，[Fortune在2023年3月报道了这一点](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/)。提示词工程究竟是长久的职业，还是一个半是人机界面设计、半是领域专业知识、半是质量保证的过渡性角色，当时引发了广泛讨论。',
            '没有哪一个人被认定为这个术语的创造者。2021年就已有研究论文描述基于提示的方法（见上文），而这个说法在ChatGPT之后被广泛传播。[Wikipedia上的提示词工程条目](https://en.wikipedia.org/wiki/Prompt_engineering)概述了这段历史。',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023年：GPT-4、多模态提示与框架',
          content: [
            '2023年3月的GPT-4在文本之外引入了图像输入，使提示词工程可用于描述图像、比较图表、标注图形等视觉任务；随后出现了更大的上下文窗口（2023年11月GPT-4 Turbo达到12.8万词元）。Google的Gemini（2023年12月）和具备视觉能力的Anthropic Claude 3模型（2024年3月）增加了其他厂商的多模态选择。',
            '同一时期，最佳实践得到了规范化。OpenAI发布了[官方提示词工程指南](https://developers.openai.com/api/docs/guides/prompt-engineering)，Google Cloud发布了自己的[提示词工程指南](https://cloud.google.com/discover/what-is-prompt-engineering)。独立作者和团队发布了CRAFT、CO-STAR、SPECS、RISEN和TRACE等框架，为实践者提供了可重复的提示词结构模板，减少了对反复试错的依赖。',
            '这些框架标志着提示词工程从个人技能走向可传授、可分享的实践。选择框架请参阅[应该选择哪种提示词框架？（2026）](/prompt-engineering/which-prompt-framework-should-you-use)，多模态方面请参阅[超越文本：如何使用图像进行提示](/prompt-engineering/beyond-text-how-to-prompt-with-images)。',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023至2024年：自动化提示词工程与 RAG',
          content: [
            '2023年前后一个引人注目的进展，是研究表明LLM可以像人类一样优化提示词。Zhou等人在2022年11月发表了《[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)》（APE）：由LLM生成并评分候选指令，在所测试的24项任务中，有19项达到或超过了人工编写的指令。Stanford研究人员的DSPy框架（[Khattab等人，2023年10月](https://arxiv.org/abs/2310.03714)）更进一步：开发者描述提示词应达成的目标，措辞则自动编译生成。',
            '与此同时，由[Lewis等人在2020年](https://arxiv.org/abs/2005.11401)于Facebook AI Research（现Meta）提出的检索增强生成（RAG），成为生产级AI系统的核心模式。RAG把检索到的文档直接注入提示词上下文，让输出基于真实、最新的来源，而不是要求提示词包含所有必要事实。这使提示词工程的重点从“如何让模型知道这个？”转向“如何构造上下文，让模型正确使用它？”',
            '该时期的关键技术请参阅[RAG详解：让AI回答基于真实数据（2026）](/prompt-engineering/rag-explained)和[自洽一致性提示：生成多个答案，投票选择最佳答案](/prompt-engineering/self-consistency-prompting)。',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024至2025年：从提示词工程到上下文设计',
          content: [
            '到2024年，一种新的框架开始取代“写一个更好的提示词”这一简单想法。实践者和研究人员开始谈论上下文工程，即编排进入完整上下文窗口的所有内容：系统提示词、检索到的文档、工具输出、对话历史和用户输入，经过有意组合来引导模型行为。提示词不再是孤立的产物，而是精心设计的上下文中的一层。',
            '若干进展加速了这一转变。Meta的Llama 3模型（2024年4月）让功能强大的开放权重LLM可用于私有部署，把部分提示词工程从云API转向本地基础设施。Google于2024年2月发布Gemini 1.5 Pro，并以[有限预览提供100万词元的上下文窗口](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)，使整个代码库、书籍或文档集合放进单个提示词成为可行。LangChain和AutoGen等多智能体框架把提示变成了编排：一个提示词触发另一个模型，再触发工具，工具把上下文返回给下一个提示词。',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026年及以后：提示词工程作为核心素养',
          callouts: [
            {
              type: 'pro-tip',
              label: '专业提示',
              text: '从“提示词工程”到“上下文设计”的转变不只是术语变化，它改变了你要优化的对象。你不再只是调整指令的措辞，而是设计进入上下文窗口的内容：系统提示词、检索到的文档、对话历史、工具输出和用户输入。提示词只是其中一层，而不是全部。',
            },
          ],
          content: [
            '到2026年，提示词工程越来越不被描述为小众职位，而是使用AI工具的知识工作者的基础素养：能够表述任务、提供合适的上下文，并指定所需的输出。',
            '这一角色已分成两条路线。第一条是系统与上下文设计：生产级AI系统的工程，其中提示词是包含检索、智能体和评估流水线的更大架构的一部分。第二条是日常使用：无需了解底层架构，也能写出清晰、结构化、能产生有用输出的提示词。两条路线都受益于相同的核心原则：清晰的任务说明、合适的上下文、约束条件和输出格式。',
            '尽管模型更强、工具更自动化，不变的仍是根本原则：输入越清晰、越有条理，输出就越可靠、越有用。技术、术语和工具已经成熟，但GPT-3时代的核心洞见在2026年依然成立。',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: '时间轴：提示词工程的关键里程碑',
          content: '下表概述了2018年至2026年的关键里程碑，即塑造提示词工程发展为当前形态的事件、论文和模型发布。',
          columns: ['年份', '里程碑', '重要意义'],
          rows: [
            { '年份': '2018–2019年', '里程碑': 'BERT（Google）和GPT-2（OpenAI）发布', '重要意义': '表明Transformer模型可以通过输入措辞引导，但当时尚无正式学科' },
            { '年份': '2020年', '里程碑': 'GPT-3及Brown等人的《Language Models are Few-Shot Learners》', '重要意义': '确立少样本提示：重写提示词即可改变模型行为，无需重新训练' },
            { '年份': '2022年（1月）', '里程碑': '思维链提示（Wei等人）', '重要意义': '表明提示词结构可以引出逐步推理' },
            { '年份': '2022年（3月）', '里程碑': 'InstructGPT / RLHF（Ouyang等人，OpenAI）', '重要意义': '经训练遵循指令的模型使提示词质量的影响大大增加' },
            { '年份': '2022年（11月）', '里程碑': 'ChatGPT发布', '重要意义': '把提示带给大众；数百万人在几天内开始尝试' },
            { '年份': '2023年（第1季度）', '里程碑': '“提示词工程师”职位引发关注；Anthropic职位标出17.5万–33.5万美元', '重要意义': '让提示词工程成为一种可见的潜在职业，但该角色备受争议' },
            { '年份': '2023年（3月）', '里程碑': 'GPT-4发布，支持图像输入', '重要意义': '把提示从文本扩展到图像；12.8万词元的上下文随GPT-4 Turbo（2023年11月）出现' },
            { '年份': '2023年', '里程碑': 'CRAFT、CO-STAR、SPECS、RISEN、TRACE等框架；OpenAI和Google的官方指南', '重要意义': '把个人手艺变成可复用、可传授的模板' },
            { '年份': '2022–2023年', '里程碑': 'APE（Zhou等人）和DSPy（Khattab等人）：由LLM优化的提示词', '重要意义': '表明LLM能编写和调整提示词，使自动化提示优化变得可行' },
            { '年份': '2024年', '里程碑': 'Llama 3（4月）和预览100万词元上下文的Gemini 1.5 Pro（2月）', '重要意义': '可私有部署的开放权重模型与超长上下文，把重心转向上下文工程' },
            { '年份': '2024–2025年', '里程碑': '推理模型：OpenAI o1（2024年9月）、DeepSeek-R1（2025年1月）、具备扩展思考的Claude 3.7 Sonnet（2025年2月）', '重要意义': '模型在内部逐步推理，因此显式思维链提示对它们的重要性下降' },
            { '年份': '2025年（4月）', '里程碑': 'Llama 4（混合专家）；Llama 4 Scout支持1000万词元的上下文', '重要意义': '开放权重模型采用混合专家架构和超长上下文' },
            { '年份': '2026年', '里程碑': '上下文设计与智能体编排成为标准做法', '重要意义': '提示只是组合上下文中的一层；需要系统层面的思考' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: '历史如何塑造今日最佳实践',
          content: [
            '提示词工程每个演变阶段都在当前实践中留下了持久的印记。GPT-3 时代给我们带来了核心洞见：模型行为由输入结构塑造——而不仅仅是内容。思维链（Chain-of-Thought）时代给我们带来了明确的推理脚手架：逐步提示、提示链和思维树方法。框架时代给我们带来了可复用的模板，这些模板将最佳实践编码起来，无需每位从业者从零开始摸索发现。',
            'RAG 和上下文设计时代让我们认识到，提示词并不孤立存在——它们与检索到的数据、系统指令和工具输出组合在一起，形成完整的上下文。而自动化提示时代提醒我们，良好提示的原则是可量化的：结构更好的提示词能产出更好的输出，这些改进可以被系统地评估和优化。',
          ],
          items: [
            '来自2022年的推理技术 → [链式思维提示词: 让AI展示其推理过程](/prompt-engineering/chain-of-thought-prompting) 和 [树思考与 ReAct: 复杂问题的高级推理技术](/prompt-engineering/tree-of-thought-and-react)',
            '来自2023年的框架发展 → [应该选择哪种提示词框架？（2026）](/prompt-engineering/which-prompt-framework-should-you-use)',
            '上下文窗口的增长 → [上下文窗口解释：为什么AI会忘记（以及如何处理）](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            '跨模型世代的词元经济学 → [令牌、成本和限制：AI提示的经济学](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            'RAG 作为纯提示词方案的补充 → [RAG详解：让AI回答基于真实数据（2026）](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ：提示词工程的演变',
          faqs: [
            {
              q: '提示词工程是什么时候开始的？',
              a: '这一实践始于2020年5月的GPT-3，当时Brown等人证明，放在提示词中的示例无需重新训练就能引导模型。研究人员在2021年初把它称为“提示编程”，思维链提示于2022年1月出现，ChatGPT（2022年11月）则使它成为大众技能。',
            },
            {
              q: '谁最先创造了"提示词工程"这个术语？',
              a: '确切起源存在争议，没有哪一个人被认定为该术语的发明者。2021年就已有研究论文描述基于提示的方法，这个说法在2022年以及ChatGPT之后被更广泛地使用。Wikipedia上的提示词工程条目概述了这段历史。',
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
              a: '没有。这一领域发生了转移，而不是消失。随着模型能力增强，工作重心从语法技巧和格式窍门转向上下文设计，即构造输入、管理检索和组合工具输出。“提示词工程师”这一职称在收窄，但这一技能已融入每个使用AI的角色：开发者、分析师、营销人员、研究者。清晰地表述任务、提供相关上下文和指定输出格式，仍然决定着模型回答的有用程度。',
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

        commonMistakes: {
          id: 'common-mistakes',
          title: '关于提示词工程的常见误解',
          mistakes: [
            {
              mistake: '提示词工程只是写出更好的句子。',
              problem: '这忽略了结构和上下文维度。提示词的效果不只取决于措辞，还取决于角色设定（给模型一个身份）、约束条件、输出格式和示例选择，这些结构性要素与语法无关。',
              fix: '把提示词工程看作设计一个以提示词为接口的系统。在结构上投入精力：设定角色（“你是一名……”“假设……”）、指定约束（“不要……”“必须包含……”）、定义输出格式并提供示例。结构往往比文采更重要。',
            },
            {
              mistake: '更好的模型会让提示词工程变得无关紧要。',
              problem: '能力更强的模型就像能力更强的人：对清晰的指令反应更好，而不是更差。随着模型能力提高，好提示词带来的收益也会增加。变化的是所需提示的类型，而不是是否需要。',
              fix: '预期提示仍将是AI工作的核心。变化的是所需的细节程度和脚手架。对较弱的模型，可能需要明确的分步结构；对较强的模型，一句清晰的指令可能就够了，但这种直接本身也是一种提示词工程的选择。',
            },
            {
              mistake: '自动提示优化工具将取代人工提示词工程。',
              problem: 'DSPy等工具有助于在既定目标内优化措辞，但仍需要人来指定目标、约束、成功标准和评估方法。自动化减少了反复迭代的繁琐，却不能取代对模型应当做什么的结构化思考。',
              fix: '把自动化当作工具，而非替代品。先由理解任务的人设计结构良好的提示词，再用DSPy等工具来改进。人对任务结构的判断仍然不可替代。',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            { title: '链式思维提示词: 让AI展示其推理过程', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: '零样本与少样本提示对比', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG详解：让AI回答基于真实数据（2026）', url: '/prompt-engineering/rag-explained' },
            { title: '上下文窗口解释：为什么AI会忘记（以及如何处理）', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: '令牌、成本和限制：AI提示的经济学', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — OpenAI的GPT-3论文，把少样本提示确立为范式。',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — 带有中间推理步骤的提示；GSM8K从17.9%到56.9%这一结果的出处（表1）。',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT：通过人类反馈（RLHF）遵循指令。',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE：LLM生成并评估提示词。',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — 由少到多提示：把问题分解为子问题。',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — 提出检索增强生成（RAG）的论文。',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — 把撰写提示词视为编程的早期论文（2021年）。',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — 自然语言处理中提示方法的综述（2021年）。',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy：自动编译提示词的框架。',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta，Llama 4发布公告（2025年4月5日）：混合专家，Scout支持1000万词元上下文。',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic，Claude 3.7 Sonnet发布公告（2025年2月24日）：扩展思考模式。',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google，Gemini 1.5发布公告（2024年2月15日）：有限预览中的100万词元上下文。',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1：通过强化学习获得推理能力（2025年1月）。',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune（2023年3月9日）：关于Anthropic提示词工程师职位薪资范围的报道。',
          ],
        },

      },
    },

    ko: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: '기초',
      heroImage: '/images/prompt-engineering-history-overview-hero-ko.webp',
      title: 'GPT-2부터 현재까지: 프롬프트 엔지니어링의 진화',
      seoTitle: '프롬프트 엔지니어링은 끝났나? 2020–2026 진화',
      intro: '프롬프트 엔지니어링은 2020년 GPT-3를 중심으로 한 비공식적인 실험에서 출발하여, 2026년까지 명명된 기법과 프레임워크를 갖춘 체계적인 학문 분야로 발전하였습니다. 이 타임라인은 프롬프팅을 핵심 기술로 자리잡게 한 주요 돌파구, 연구 논문, 전환점을 추적합니다.',
      metaDescription: '프롬프트 엔지니어링은 사라지지 않고 변했습니다. GPT-3 퓨샷(2020)에서 사고 연쇄, ChatGPT, 컨텍스트 설계까지 출처와 함께 정리한 타임라인입니다.',
      ogTitle: '프롬프트 엔지니어링의 진화: GPT-3에서 컨텍스트 설계까지 (2020–2026)',
      twitterTitle: '프롬프트 엔지니어링이 6년 만에 "더 나은 프롬프트 작성"에서 컨텍스트 설계로 발전한 과정',
      publishDate: '2026-03-01',
      dateModified: '2026-11-02',
      readTime: '10분 분량',
      educationalLevel: 'Beginner',
      audience: 'AI 기법의 역사와 프롬프트 엔지니어링을 학습하는 지식 근로자 및 개발자',
      primaryTerm: '프롬프트 엔지니어링 역사',
      next_refresh_due: '2027-05-02',
      leadAnswerBlock: '**프롬프트 엔지니어링은 2020년 GPT-3를 둘러싼 비공식적 시행착오에서 출발하여 2026년에는 명명된 프레임워크, 기법, 도구를 갖춘 체계적인 분야로 발전했으며, 퓨샷 학습, 사고 연쇄 추론, ChatGPT 대중화, 자동 최적화, 컨텍스트 설계의 다섯 단계를 거쳤습니다.**',
      quickFacts: [
        '**GPT-3 (2020):** 1750억 개 매개변수 모델이 퓨샷 프롬프팅을 패러다임 전환으로 제시했습니다',
        '**사고 연쇄 (2022):** Wei et al.은 프롬프트 구조가 단계별 추론을 이끌어낼 수 있음을 보였고, PaLM 540B의 GSM8K 정확도는 17.9%에서 56.9%로 올랐습니다',
        '**ChatGPT (2022년 11월):** 5일 만에 사용자 100만 명 돌파(OpenAI CEO 샘 올트먼 발언), 2023년 1월 월간 활성 사용자 약 1억 명으로 추정(UBS, Reuters 보도)',
        '**채용 시장 (2023):** Anthropic의 "Prompt Engineer and Librarian" 공고가 17.5만~33.5만 달러를 제시했습니다(Fortune, 2023년 3월)',
        '**GPT-4와 프레임워크 (2023):** 이미지 입력과 공개된 프레임워크(CO-STAR, SPECS, RISEN)로 프롬프팅은 가르칠 수 있는 분야가 되었습니다',
        '**컨텍스트 설계 (2024–2026):** 오픈 웨이트 LLM, 100만 토큰 이상의 컨텍스트 창, 에이전트 오케스트레이션으로 초점이 프롬프트 다듬기에서 시스템 수준의 컨텍스트 엔지니어링으로 옮겨갔습니다',
      ],
      toc: [
        { label: '핵심 요점', anchor: 'key-takeaways' },
        { label: '프롬프트 엔지니어링이라는 이름이 생기기 전 (2020년 이전)', anchor: 'before-had-a-name' },
        { label: '2020년: GPT-3와 퓨샷 돌파구', anchor: 'gpt-3-few-shot' },
        { label: '2021–2022년 초: 프롬프트 요령에서 공인된 기술로', anchor: 'tricks-to-skill' },
        { label: '2022년: 연쇄 사고와 추론 프롬프트', anchor: 'chain-of-thought' },
        { label: '2022년 말–2023년: ChatGPT의 순간과 프롬프트 엔지니어 직함', anchor: 'chatgpt-moment' },
        { label: '2023년: GPT-4, 멀티모달 프롬프팅 및 프레임워크', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024년: 자동화 프롬프트 엔지니어링과 RAG', anchor: 'automated-rag' },
        { label: '2024–2025년: 프롬프트 엔지니어링에서 컨텍스트 설계로', anchor: 'context-design' },
        { label: '2026년 이후: 핵심 리터러시로서의 프롬프트 엔지니어링', anchor: 'beyond-2026' },
        { label: '타임라인: 프롬프트 엔지니어링의 주요 이정표', anchor: 'timeline' },
        { label: '역사가 오늘날의 모범 사례에 미치는 영향', anchor: 'today-practice' },
        { label: '흔한 오해', anchor: 'common-mistakes' },
        { label: '관련 읽기', anchor: 'related-reading' },
        { label: 'FAQ: 프롬프트 엔지니어링의 진화', anchor: 'faq' },
        { label: '출처', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '프롬프트 엔지니어링은 끝났나? 2020–2026 진화',
        description: '프롬프트 엔지니어링은 사라지지 않고 변했습니다. GPT-3 퓨샷(2020)에서 사고 연쇄, ChatGPT, 컨텍스트 설계까지 출처와 함께 정리한 타임라인입니다.',
        datePublished: '2026-03-01',
        dateModified: '2026-11-02',
        url: 'https://www.promptquorum.com/ko/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'ko',
        keywords: ['프롬프트 엔지니어링 역사', 'GPT-3 퓨샷 학습', '연쇄 사고 프롬프팅', 'ChatGPT', '컨텍스트 엔지니어링', '프롬프트 엔지니어링 타임라인', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'AI 기법의 역사와 프롬프트 엔지니어링을 학습하는 지식 근로자 및 개발자' },
        about: [
          { '@type': 'Thing', name: '프롬프트 엔지니어링 역사' },
          { '@type': 'Thing', name: '대규모 언어 모델' },
          { '@type': 'Thing', name: 'AI 기법과 프레임워크' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Llama 4', url: 'https://www.meta.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 3.7 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Google DeepMind', url: 'https://deepmind.google' },
          { '@type': 'Organization', name: 'Meta AI', url: 'https://www.meta.com' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ko',
        mainEntity: [
          { '@type': 'Question', name: '프롬프트 엔지니어링은 언제 시작되었습니까?', acceptedAnswer: { '@type': 'Answer', text: '이 실천은 2020년 5월 GPT-3와 함께 시작되었습니다. Brown et al.이 프롬프트에 넣은 예시로 재학습 없이 모델을 유도할 수 있음을 보였습니다. 2021년 초 연구자들은 이를 "프롬프트 프로그래밍"이라 불렀고, 2022년 1월 사고 연쇄 프롬프팅이 뒤따랐으며, ChatGPT(2022년 11월)가 이를 대중적 기술로 만들었습니다.' } },
          { '@type': 'Question', name: '"프롬프트 엔지니어링"이라는 용어를 처음 만든 사람은 누구입니까?', acceptedAnswer: { '@type': 'Answer', text: '정확한 기원은 논쟁 중이며, 이 용어를 만들었다고 인정되는 특정 인물은 없습니다. 2021년에 이미 연구 논문이 프롬프트 기반 방법을 설명하고 있었고, 이 표현은 2022년과 ChatGPT 이후 더 널리 쓰였습니다. 프롬프트 엔지니어링에 관한 Wikipedia 문서가 이 역사를 개괄합니다.' } },
          { '@type': 'Question', name: 'ChatGPT 이후 프롬프트 엔지니어링이 폭발적으로 인기를 얻은 이유는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT는 수백만 명의 비연구자가 코드 없이 즉시 무료로 사용할 수 있는 최초의 범용 AI 모델이었습니다. 잘 만들어진 프롬프트와 모호한 프롬프트 사이의 차이가 눈에 보이고 즉각적으로 결과에 영향을 미쳤습니다. 수백만 명이 동시에 경험한 그 피드백 루프가 프롬프트 엔지니어링을 연구 개념에서 대중적 기술로 전환시켰습니다.' } },
          { '@type': 'Question', name: '연구 논문이 실제 프롬프팅 기법에 어떤 영향을 미쳤습니까?', acceptedAnswer: { '@type': 'Answer', text: '전파 속도는 AI 연구로서는 이례적으로 빨랐습니다. 연쇄 사고 프롬프팅(Wei et al., 2022)은 학술 논문에서 수개월 내에 실무자들이 널리 사용하는 기법으로 자리잡았으며, 이는 도구 없이 프롬프트 작성 방식만 바꾸면 되었기 때문입니다. GPT-3 논문(Brown et al., 2020)의 퓨샷 프롬프팅은 API 접근 권한이 있는 누구나 즉시 적용할 수 있었습니다. 기법의 접근성이 확산을 가속화하였습니다.' } },
          { '@type': 'Question', name: '모델이 발전함에 따라 프롬프트 엔지니어링의 중요성이 감소하고 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 더 유능한 모델은 잘 구조화된 프롬프트에 더 잘 반응하지, 덜 반응하지 않습니다. 좋은 프롬프팅의 효과는 모델이 정밀한 지시를 따르는 능력이 높아질수록 증가합니다. 변화한 것은 간단한 작업에 필요한 프롬프트 엔지니어링의 수준입니다. 그러나 복잡한 프로덕션 수준의 출력을 위해서는 구조화된 프롬프팅이 여전히 가장 신뢰할 수 있는 수단입니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링과 컨텍스트 엔지니어링의 차이는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 일반적으로 모델의 출력을 개선하기 위해 텍스트 입력을 설계하는 것을 의미합니다. 컨텍스트 엔지니어링은 더 광범위하고 최근의 개념으로, 모델의 컨텍스트 창에 들어가는 모든 것을 조율하는 것을 의미합니다: 시스템 프롬프트, 검색된 문서, 대화 기록, 도구 출력, 사용자 입력 — 모두 의도적으로 구성됩니다. 컨텍스트 엔지니어링은 프롬프트를 독립적인 결과물이 아닌 설계된 시스템의 하나의 구성 요소로 취급합니다.' } },
          { '@type': 'Question', name: '자동화 도구가 프롬프트 엔지니어링을 이해할 필요를 대체할 것입니까?', acceptedAnswer: { '@type': 'Answer', text: 'DSPy와 같은 자동화 도구는 정의된 목표 내에서 프롬프트 표현을 최적화할 수 있지만, 목표가 무엇인지, 제약 조건이 무엇인지, 성공을 어떻게 평가할지를 지정하는 것은 여전히 사람이 해야 합니다. 프롬프트 엔지니어링 원칙을 이해하는 것은 이러한 도구를 효과적으로 사용하고 잘못된 결과를 진단하는 데 여전히 필요합니다. 자동화는 수동 반복 작업 일부를 제거하지만, 구조적 사고의 필요성은 제거하지 못합니다.' } },
          { '@type': 'Question', name: '2026년에 프롬프트 엔지니어링은 끝났습니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 이 분야는 사라진 것이 아니라 이동했습니다. 모델이 더 유능해질수록 작업은 문법 요령과 서식 기교에서 입력 구조화, 검색 관리, 도구 출력 구성 같은 컨텍스트 설계로 옮겨갑니다. "프롬프트 엔지니어"라는 직함은 좁아지고 있지만, 그 밑바탕의 기술은 개발자, 분석가, 마케터, 연구자 등 AI를 쓰는 모든 역할에 들어 있습니다. 작업을 명확히 제시하고, 관련 컨텍스트를 주고, 출력 형식을 지정하는 일은 여전히 모델 답변의 유용성을 좌우합니다.' } },
          { '@type': 'Question', name: 'AI 모델이 계속 발전한다면 프롬프트 엔지니어링을 배워야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '네, 하지만 초점은 세대마다 변화합니다. 더 좋은 모델은 정교한 우회 방법(특수 토큰, 반복 강화, 엄격한 서식 제약)의 필요성을 줄이고, 명확한 의도, 구조화된 컨텍스트, 잘 선택된 예제의 효과를 높입니다. 역할, 컨텍스트, 형식, 제약이라는 기본 원칙은 모든 모델 세대에 걸쳐 안정적으로 유지됩니다. 지금 배우면 기술이 만료되는 것이 아니라 축적됩니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링과 파인튜닝의 차이는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 모델의 가중치를 수정하지 않고 모델과 소통하는 방식을 변경합니다. 파인튜닝은 새로운 데이터로 모델을 재학습시켜 동작을 영구적으로 변경합니다. 프롬프트 엔지니어링은 더 빠르고, 저렴하며, 되돌릴 수 있습니다. 파인튜닝은 목표 동작이 일관적이고, 고빈도이거나, 프롬프트로 신뢰성 있게 설명하기 어려울 때 더 적합합니다. 대부분의 팀은 프롬프팅으로 시작하여 특정 작업에서 프롬프팅이 한계에 도달했을 때만 파인튜닝합니다.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '프롬프트 엔지니어링 진화 타임라인: 2018–2026',
        description: '2018년부터 2026년까지 프롬프트 엔지니어링의 진화를 이끈 주요 이정표, 연구 논문, 모델 출시의 연대기입니다.',
        url: 'https://www.promptquorum.com/ko/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'ko',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT(Google)와 GPT-2(OpenAI) 공개 (2018–2019)', description: '입력 표현으로 트랜스포머 모델을 유도할 수 있음을 보였으나 아직 공식 분야는 없었음' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3와 Brown et al. "Language Models are Few-Shot Learners" (2020)', description: '퓨샷 프롬프팅 확립: 프롬프트를 고쳐 쓰면 재학습 없이 모델 동작이 바뀜' },
          { '@type': 'ListItem', position: 3, name: '사고 연쇄 프롬프팅 (Wei et al.) (2022 (1월))', description: '프롬프트 구조가 단계별 추론을 이끌어낼 수 있음을 보임' },
          { '@type': 'ListItem', position: 4, name: 'InstructGPT / RLHF (Ouyang et al., OpenAI) (2022 (3월))', description: '지시를 따르도록 학습된 모델로 프롬프트의 질이 훨씬 더 중요해짐' },
          { '@type': 'ListItem', position: 5, name: 'ChatGPT 출시 (2022 (11월))', description: '프롬프팅을 대중에게 확산; 수백만 명이 며칠 만에 시도하기 시작' },
          { '@type': 'ListItem', position: 6, name: '"프롬프트 엔지니어" 공고가 주목받음; Anthropic 공고가 17.5만~33.5만 달러 제시 (2023 (1분기))', description: '직업으로서의 가능성을 부각했으나 그 역할은 논쟁이 많았음' },
          { '@type': 'ListItem', position: 7, name: '이미지 입력을 지원하는 GPT-4 출시 (2023 (3월))', description: '프롬프팅을 텍스트에서 이미지로 확장; 12만 8천 토큰 컨텍스트는 GPT-4 Turbo(2023년 11월)로 이어짐' },
          { '@type': 'ListItem', position: 8, name: 'CRAFT, CO-STAR, SPECS, RISEN, TRACE 같은 프레임워크; OpenAI와 Google의 공식 가이드 (2023)', description: '개인의 기술을 재사용 가능하고 가르칠 수 있는 템플릿으로 바꿈' },
          { '@type': 'ListItem', position: 9, name: 'APE (Zhou et al.)와 DSPy (Khattab et al.): LLM이 최적화한 프롬프트 (2022–2023)', description: 'LLM이 프롬프트를 쓰고 조정할 수 있음을 보여 자동 최적화를 실용화' },
          { '@type': 'ListItem', position: 10, name: 'Llama 3(4월)와 100만 토큰 컨텍스트 미리보기의 Gemini 1.5 Pro(2월) (2024)', description: '비공개 배포용 오픈 웨이트 모델과 매우 긴 컨텍스트가 초점을 컨텍스트 엔지니어링으로 옮김' },
          { '@type': 'ListItem', position: 11, name: '추론 모델: OpenAI o1(2024년 9월), DeepSeek-R1(2025년 1월), 확장 사고를 갖춘 Claude 3.7 Sonnet(2025년 2월) (2024–2025)', description: '모델이 내부적으로 단계별 추론을 하므로 명시적 사고 연쇄 프롬프트의 중요도가 낮아짐' },
          { '@type': 'ListItem', position: 12, name: 'Llama 4(전문가 혼합); Llama 4 Scout는 1000만 토큰 컨텍스트 지원 (2025 (4월))', description: '오픈 웨이트 모델이 전문가 혼합 설계와 매우 긴 컨텍스트를 채택' },
          { '@type': 'ListItem', position: 13, name: '컨텍스트 설계와 에이전트 오케스트레이션이 표준 관행으로 자리잡음 (2026)', description: '프롬프팅은 구성된 컨텍스트의 한 층이며, 시스템 수준의 사고가 요구됨' },
        ],
      },
      sections: {
        definition: {
          id: 'definition',
          title: '프롬프트 엔지니어링의 진화: 간략한 개요',
          snippets: [
            { type: 'in-one-sentence', text: '프롬프트 엔지니어링은 시행착오식 표현 요령에서 재사용 가능한 패턴과 평가, 버전 관리를 갖춘 문서화된 분야로 발전했으며, 모델 성능이 향상되면서 영리한 표현보다 구조가 더 중요해졌습니다.' },
            { type: 'in-plain-terms', text: '처음에는 효과가 있어 보이는 문구를 서로 주고받는 민간요법에 가까웠습니다. 모델이 좋아지면서 \'마법의 문구\'는 힘을 잃었고, 대신 구조가 중요해졌습니다. 누가, 무엇을, 어떤 형식으로. 바로 이 전환이 잡다한 요령을 가르칠 수 있는 기술로 바꾸어 놓았습니다.' },
          ],
          content: [
            '**프롬프트 엔지니어링은 2020년 GPT-3를 중심으로 한 비공식적인 시행착오적 텍스트 조작에서 출발하여, 2026년까지 명명된 기법, 프레임워크, 도구를 갖춘 체계적인 학문 분야로 발전하였습니다.** 이 발전 과정은 다섯 단계로 나뉩니다: 초기 퓨샷 실험, 기술을 대중적 인식으로 끌어올린 ChatGPT 시대, 구조화된 추론 기법의 발전, 자동화 프롬프트 최적화의 부상, 그리고 현재의 컨텍스트 설계로의 전환.',
            '이 학문 분야는 단일 논문이나 기업에서 탄생하지 않았습니다. 연구(퓨샷 학습, 연쇄 사고 추론, RAG), 온라인에서 프롬프트 컬렉션을 공유하는 실무자 커뮤니티, 그리고 좋은 프롬프팅을 즉각적으로 보람 있게 만든 강력한 모델의 갑작스러운 공개적 사용 가능성의 교차점에서 성장하였습니다. 2026년 현재, 프롬프트 엔지니어링은 더 이상 틈새 요령이 아니라 AI 시스템을 사용하는 모든 사람에게 필수적인 기본 기술입니다.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: '핵심 요점',
          isTldr: true,
          items: [
            '2019–2020년: GPT-2와 초기 트랜스포머 — 프롬프트는 입력이었고, 학문 분야가 아니었음',
            '2020년: GPT-3와 Brown et al.이 패러다임 전환으로서 퓨샷 프롬프팅을 도입',
            '2022년: 연쇄 사고 추론 프롬프트가 프롬프팅을 구조화된 기술로 전환',
            '2022년 말: ChatGPT가 프롬프트 엔지니어링을 대중적 인식과 채용 공고로 가져옴',
            '2023년: GPT-4, 멀티모달 프롬프팅, 프레임워크가 모범 사례를 공식화',
            '2024–2026년: 컨텍스트 설계, 자동화 프롬프팅, 오픈소스 LLM이 분야를 재정의',
          ],
        },

        pre2020: {
          id: 'before-had-a-name',
          title: '프롬프트 엔지니어링이라는 이름이 생기기 전 (2020년 이전)',
          content: [
            '"프롬프트 엔지니어링"이라는 용어가 생기기 전에도 연구자들은 더 나은 출력을 얻기 위해 모델 입력을 조정하고 있었지만, 그렇게 부르지는 않았습니다. GPT-2(2019년, OpenAI)와 BERT(2018년, Google) 같은 초기 트랜스포머 모델은 신중하게 고른 입력 텍스트로 사용되었으나, 이 관행은 독립된 기술이 아니라 데이터 전처리의 일부로 취급되었습니다.',
            'GPT-2는 2019년 2월 15억 개 매개변수 모델로 발표되었고, OpenAI는 먼저 더 작은 버전을 공개한 뒤 2019년 11월에 전체 모델을 공개했습니다. 이 모델은 놀랄 만큼 일관된 텍스트를 이어서 생성할 수 있었습니다. 연구자와 초기 실무자들은 입력의 표현이 결과의 품질을 크게 바꾼다는 점을 알아챘지만, 이 관찰을 둘러싼 프레임워크도 용어도 커뮤니티도 아직 없었습니다. 프롬프트는 입력이었지 엔지니어링 산출물이 아니었습니다.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020년: GPT-3와 퓨샷 돌파구',
          content: [
            '**프롬프트 엔지니어링의 현대사는 사실상 GPT-3에서 시작됩니다.** 2020년 5월 OpenAI 연구자들은 1750억 개 매개변수 모델 GPT-3를 소개한 "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)"(Brown et al.)를 발표했습니다. 이 논문은 모델의 가중치를 갱신하지 않고도 원하는 작업의 예시 몇 개를 프롬프트에 직접 넣는 것만으로 많은 하위 작업의 성능이 향상됨을 보였습니다.',
            '이것이 프롬프트 엔지니어링이라는 분야의 씨앗이었습니다. 연구자와 개발자는 프롬프트를 쓰는 방식만 바꾸면 같은 모델이 번역기, 요약기, 코드 생성기, 질의응답 시스템이 될 수 있음을 깨달았습니다. 모델을 다시 학습시킬 필요 없이 더 나은 프롬프트가 필요할 뿐이었습니다. 이 통찰은 프롬프트의 의미를 단순한 입력에서 설계 산출물로 바꿔 놓았습니다.',
            'Brown et al.은 퓨샷 성능이 대체로 모델 크기와 함께 향상되었으며, 1750억 개 매개변수의 GPT-3가 전반적으로 가장 강했다고 보고했습니다. 이는 규모와 프롬프트 기반 학습을 연결했고, 프롬프트의 질을 연구자뿐 아니라 실무자도 조절할 수 있는 변수로 만들었습니다.',
            'GPT-3가 널리 알린 기법의 실용 가이드는 [제로샷 vs. 퓨샷 프롬프팅](/prompt-engineering/zero-shot-vs-few-shot)을(를) 참고하십시오.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–2022년 초: 프롬프트 요령에서 공인된 기술로',
          content: [
            '2021년부터 2022년 초까지 프롬프트 작성은 연구 논문에서 실무자 커뮤니티로 옮겨갔습니다. 연구자들도 이 관행을 글로 설명하기 시작했습니다. Reynolds와 McDonell은 "[Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350)"(2021년 2월)에서 GPT-3용 프롬프트 작성이 일종의 프로그래밍이라고 주장했고, 서베이 논문 "[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)"(Liu et al., 2021년 7월)는 자연어 처리의 프롬프트 기반 방법을 정리했습니다. 한편 실무자들은 온라인 커뮤니티에서 잘 작동하는 프롬프트를 공유했습니다.',
            'OpenAI의 InstructGPT 논문(Ouyang et al., 2022년 3월)은 사람의 피드백(RLHF)으로 미세 조정되어 기본 GPT-3보다 훨씬 안정적으로 자연어 지시를 따르는 모델을 소개했고, 이로써 프롬프트의 질은 더욱 중요해졌습니다. 2022년 중반에는 프롬프팅이 연구자의 호기심을 넘어 이전 가능한 기술이라는 점이 분명해졌습니다.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022년: 연쇄 사고와 추론 프롬프트',
          content: [
            '**2022년 사고 연쇄(CoT) 프롬프팅의 등장은 이 분야의 짧은 역사에서 가장 중요한 기술적 진전이었습니다.** Wei et al.(Google)은 "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)"를 발표하여, 중간 추론 단계가 포함된 풀이 예시를 모델에 주면 산술, 상식, 기호 추론 작업의 성능이 향상됨을 보였습니다. 대표적인 결과로, 사고 연쇄 프롬프팅은 초등 수학 벤치마크 GSM8K에서 PaLM 540B의 정확도를 17.9%에서 56.9%로 끌어올렸습니다(논문 표 1). 추가 학습 없이 프롬프트만 바꿔 얻은 향상입니다. 이는 프롬프트의 구조가 서로 다른 사실이 아니라 서로 다른 추론 동작을 이끌어낼 수 있음을 뜻했습니다.',
            '관련 기법이 곧 뒤따랐습니다. Zhou et al.은 복잡한 문제를 더 단순한 하위 문제의 순서로 분해해 차례로 푸는 [least-to-most 프롬프팅](https://arxiv.org/abs/2205.10625)을 제안했습니다. 이러한 접근은 프롬프트 엔지니어링을 서식 작업에서, 그렇게 명시적으로 학습되지 않은 모델에서 구조화된 추론을 끌어내는 도구로 바꿔 놓았습니다. 프롬프팅은 인지를 위한 발판이 되었습니다.',
            '기법에 대한 전체 가이드는 [Chain-of-Thought 프롬프팅: AI가 추론 과정을 보여주게 하는 방법](/prompt-engineering/chain-of-thought-prompting)와(과) [프롬프트 체이닝: 복잡한 작업을 성공적인 단계로 분해하는 방법](/prompt-engineering/prompt-chaining)을(를) 참고하십시오.',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: '2022년 말–2023년: ChatGPT의 순간과 프롬프트 엔지니어 직함',
          callouts: [
            {
              type: 'did-you-know',
              label: '알고 계셨나요?',
              text: 'Reuters가 전한 UBS 분석은 ChatGPT가 출시 약 두 달 뒤인 2023년 1월에 월간 활성 사용자 약 1억 명에 도달한 것으로 추정했습니다. Reuters는 Sensor Tower 자료를 인용해 같은 수치에 도달하는 데 TikTok은 약 9개월, Instagram은 약 2년 반이 걸렸다고 보도했습니다. 이러한 확산 속도 덕분에 프롬프트 엔지니어링은 연구 개념에서 대중적 기술로 거의 하룻밤 사이에 바뀌었습니다.',
            },
          ],
          content: [
            '**2022년 11월 30일 ChatGPT 출시는 프롬프트 엔지니어링의 대중적 위상을 하룻밤에 바꿔 놓았습니다.** OpenAI의 샘 올트먼 CEO는 2022년 12월 초 트위터에서 ChatGPT가 5일 만에 사용자 100만 명을 넘었다고 밝혔고, Reuters가 전한 UBS 분석은 2023년 1월까지 월간 활성 사용자가 약 1억 명이라고 추정했습니다. 며칠 사이에 수백만 명이 프롬프트를 시도하며 요청 방식에 따라 결과가 크게 달라진다는 점을 발견했고, 기술 매체들은 프롬프트 엔지니어링을 배울 가치가 있는 기술로 다루기 시작했습니다.',
            '2023년 초에는 "프롬프트 엔지니어"가 직함으로 등장했습니다. Anthropic의 "Prompt Engineer and Librarian" 공고는 17.5만~33.5만 달러의 연봉 범위를 제시했으며, 2023년 3월 [Fortune이 보도했습니다](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/). 프롬프트 엔지니어링이 지속 가능한 직업인지, 일부는 인간-컴퓨터 인터페이스 설계이고 일부는 전문 지식이며 일부는 품질 보증인 과도기적 역할인지는 널리 논쟁이 되었습니다.',
            '이 용어를 만든 사람으로 인정되는 특정 인물은 없습니다. 2021년에 이미 연구 논문이 프롬프트 기반 방법을 설명하고 있었고(위 참조), 이 표현은 ChatGPT 이후 널리 퍼졌습니다. [프롬프트 엔지니어링에 관한 Wikipedia 문서](https://en.wikipedia.org/wiki/Prompt_engineering)가 이 역사를 개괄합니다.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023년: GPT-4, 멀티모달 프롬프팅 및 프레임워크',
          content: [
            '2023년 3월의 GPT-4는 텍스트와 함께 이미지 입력을 도입하여 이미지 설명, 도표 비교, 차트 주석 달기 같은 시각 작업으로 프롬프트 엔지니어링의 범위를 넓혔고, 이후 더 큰 컨텍스트 창(2023년 11월 GPT-4 Turbo의 12만 8천 토큰)이 뒤따랐습니다. Google의 Gemini(2023년 12월)와 비전을 갖춘 Anthropic의 Claude 3 모델(2024년 3월)은 다른 벤더의 멀티모달 선택지를 더했습니다.',
            '같은 시기에 모범 사례가 체계화되었습니다. OpenAI는 [공식 프롬프트 엔지니어링 가이드](https://developers.openai.com/api/docs/guides/prompt-engineering)를 공개했고, Google Cloud도 자체 [프롬프트 엔지니어링 가이드](https://cloud.google.com/discover/what-is-prompt-engineering)를 공개했습니다. 독립 저자와 팀은 CRAFT, CO-STAR, SPECS, RISEN, TRACE 같은 프레임워크를 발표하여, 프롬프트를 구조화하는 반복 가능한 템플릿을 제공하고 시행착오에 대한 의존을 줄였습니다.',
            '이러한 프레임워크는 프롬프트 엔지니어링이 개인 기술에서 가르치고 공유할 수 있는 실천으로 성숙했음을 보여 줍니다. 선택 방법은 [어떤 프롬프트 프레임워크를 사용해야 합니까?](/prompt-engineering/which-prompt-framework-should-you-use)을(를), 멀티모달 측면은 [텍스트를 넘어서: 이미지로 프롬프트를 작성하는 방법](/prompt-engineering/beyond-text-how-to-prompt-with-images)을(를) 참고하십시오.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024년: 자동화 프롬프트 엔지니어링과 RAG',
          content: [
            '2023년 무렵의 눈에 띄는 진전은 LLM이 사람만큼 프롬프트를 잘 최적화할 수 있음을 보인 연구였습니다. Zhou et al.은 2022년 11월 "[Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910)"(APE)를 공개했습니다. LLM이 후보 지시문을 생성하고 평가했으며, 시험한 24개 작업 중 19개에서 사람이 쓴 지시문과 같거나 더 나은 성능을 냈습니다. Stanford 연구자들의 DSPy 프레임워크([Khattab et al., 2023년 10월](https://arxiv.org/abs/2310.03714))는 한 걸음 더 나아가, 개발자가 프롬프트의 목표를 기술하면 문구를 자동으로 컴파일합니다.',
            '동시에 2020년 Facebook AI Research(현 Meta)의 [Lewis et al.](https://arxiv.org/abs/2005.11401)이 제안한 검색 증강 생성(RAG)이 실제 운영 AI 시스템의 핵심 패턴이 되었습니다. RAG는 검색한 문서를 프롬프트 컨텍스트에 직접 넣어, 프롬프트에 모든 사실을 담는 대신 실제의 최신 출처에 출력을 근거 짓게 했습니다. 이에 따라 초점은 "모델이 이것을 알게 하려면 어떻게 해야 하는가?"에서 "모델이 이것을 올바르게 쓰도록 컨텍스트를 어떻게 구조화할 것인가?"로 옮겨갔습니다.',
            '이 시기의 핵심 기법은 [RAG 설명: 실제 데이터로 AI 답변을 근거화하는 방법 (2026)](/prompt-engineering/rag-explained)와(과) [자기 일관성 프롬프팅: 여러 답변을 생성하고 올바른 답을 선택하십시오](/prompt-engineering/self-consistency-prompting)을(를) 참고하십시오.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025년: 프롬프트 엔지니어링에서 컨텍스트 설계로',
          content: [
            '2024년 무렵에는 "더 나은 프롬프트를 써라"라는 단순한 생각을 대체하는 새로운 관점이 나타났습니다. 실무자와 연구자들은 컨텍스트 엔지니어링이라는 말을 쓰기 시작했습니다. 시스템 프롬프트, 검색된 문서, 도구 출력, 대화 기록, 사용자 입력 등 컨텍스트 창에 들어가는 모든 것을 모델의 동작을 이끌도록 의도적으로 구성하는 실천입니다. 프롬프트는 더 이상 독립된 산출물이 아니라 설계된 컨텍스트의 한 층이었습니다.',
            '여러 변화가 이 전환을 가속했습니다. Meta의 Llama 3 모델(2024년 4월)은 성능 좋은 오픈 웨이트 LLM을 비공개 배포에 쓸 수 있게 하여 프롬프트 엔지니어링의 일부를 클라우드 API에서 로컬 인프라로 옮겼습니다. Google은 2024년 2월 [제한적 미리보기로 100만 토큰 컨텍스트 창](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)을 갖춘 Gemini 1.5 Pro를 발표해, 코드베이스나 책, 문서 모음 전체를 하나의 프롬프트에 넣는 일을 현실적으로 만들었습니다. LangChain과 AutoGen 같은 멀티 에이전트 프레임워크는 프롬프팅을 오케스트레이션으로 바꾸었습니다. 한 프롬프트가 다른 모델을 호출하고, 그것이 도구를 호출하며, 도구가 다음 프롬프트로 컨텍스트를 돌려줍니다.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026년 이후: 핵심 리터러시로서의 프롬프트 엔지니어링',
          callouts: [
            {
              type: 'pro-tip',
              label: '전문가 팁',
              text: '"프롬프트 엔지니어링"에서 "컨텍스트 설계"로의 전환은 단순한 용어 변화가 아니라 최적화 대상을 바꿉니다. 지시문의 문구를 다듬는 대신, 시스템 프롬프트, 검색된 문서, 대화 기록, 도구 출력, 사용자 입력 등 컨텍스트 창에 들어갈 내용을 설계합니다. 프롬프트는 전체가 아니라 한 층입니다.',
            },
          ],
          content: [
            '2026년에는 프롬프트 엔지니어링이 틈새 직함이 아니라 AI 도구를 쓰는 지식 노동자의 기본 소양으로 설명되는 경우가 늘고 있습니다. 작업을 말로 정리하고, 알맞은 컨텍스트를 제공하며, 필요한 출력을 지정하는 능력입니다.',
            '이 역할은 두 갈래로 나뉘었습니다. 첫째는 시스템과 컨텍스트 설계로, 프롬프트가 검색, 에이전트, 평가 파이프라인을 포함하는 더 큰 아키텍처의 일부인 운영 AI 시스템의 엔지니어링입니다. 둘째는 일상적 사용으로, 내부 아키텍처를 몰라도 명확하고 구조화된 프롬프트로 유용한 출력을 얻는 능력입니다. 두 갈래 모두 명확한 작업 지정, 적절한 컨텍스트, 제약 조건, 출력 형식이라는 같은 핵심 원칙의 혜택을 받습니다.',
            '더 유능한 모델과 자동화 도구가 나왔음에도 변하지 않은 것은 근본 원칙입니다. 입력이 명확하고 구조화될수록 출력은 더 믿을 만하고 유용합니다. 기법, 용어, 도구는 성숙했지만 GPT-3 시대의 핵심 통찰은 2026년에도 유효합니다.',
          ],
        },

        timeline: {
          itemHeadings: true,
          id: 'timeline',
          title: '타임라인: 프롬프트 엔지니어링의 주요 이정표',
          content: '아래 표는 2018년부터 2026년까지의 주요 이정표, 즉 프롬프트 엔지니어링이 오늘날의 모습으로 진화하는 데 영향을 준 사건, 논문, 모델 출시를 정리한 것입니다.',
          columns: ['연도', '이정표', '중요성'],
          rows: [
            { '연도': '2018–2019', '이정표': 'BERT(Google)와 GPT-2(OpenAI) 공개', '중요성': '입력 표현으로 트랜스포머 모델을 유도할 수 있음을 보였으나 아직 공식 분야는 없었음' },
            { '연도': '2020', '이정표': 'GPT-3와 Brown et al. "Language Models are Few-Shot Learners"', '중요성': '퓨샷 프롬프팅 확립: 프롬프트를 고쳐 쓰면 재학습 없이 모델 동작이 바뀜' },
            { '연도': '2022 (1월)', '이정표': '사고 연쇄 프롬프팅 (Wei et al.)', '중요성': '프롬프트 구조가 단계별 추론을 이끌어낼 수 있음을 보임' },
            { '연도': '2022 (3월)', '이정표': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', '중요성': '지시를 따르도록 학습된 모델로 프롬프트의 질이 훨씬 더 중요해짐' },
            { '연도': '2022 (11월)', '이정표': 'ChatGPT 출시', '중요성': '프롬프팅을 대중에게 확산; 수백만 명이 며칠 만에 시도하기 시작' },
            { '연도': '2023 (1분기)', '이정표': '"프롬프트 엔지니어" 공고가 주목받음; Anthropic 공고가 17.5만~33.5만 달러 제시', '중요성': '직업으로서의 가능성을 부각했으나 그 역할은 논쟁이 많았음' },
            { '연도': '2023 (3월)', '이정표': '이미지 입력을 지원하는 GPT-4 출시', '중요성': '프롬프팅을 텍스트에서 이미지로 확장; 12만 8천 토큰 컨텍스트는 GPT-4 Turbo(2023년 11월)로 이어짐' },
            { '연도': '2023', '이정표': 'CRAFT, CO-STAR, SPECS, RISEN, TRACE 같은 프레임워크; OpenAI와 Google의 공식 가이드', '중요성': '개인의 기술을 재사용 가능하고 가르칠 수 있는 템플릿으로 바꿈' },
            { '연도': '2022–2023', '이정표': 'APE (Zhou et al.)와 DSPy (Khattab et al.): LLM이 최적화한 프롬프트', '중요성': 'LLM이 프롬프트를 쓰고 조정할 수 있음을 보여 자동 최적화를 실용화' },
            { '연도': '2024', '이정표': 'Llama 3(4월)와 100만 토큰 컨텍스트 미리보기의 Gemini 1.5 Pro(2월)', '중요성': '비공개 배포용 오픈 웨이트 모델과 매우 긴 컨텍스트가 초점을 컨텍스트 엔지니어링으로 옮김' },
            { '연도': '2024–2025', '이정표': '추론 모델: OpenAI o1(2024년 9월), DeepSeek-R1(2025년 1월), 확장 사고를 갖춘 Claude 3.7 Sonnet(2025년 2월)', '중요성': '모델이 내부적으로 단계별 추론을 하므로 명시적 사고 연쇄 프롬프트의 중요도가 낮아짐' },
            { '연도': '2025 (4월)', '이정표': 'Llama 4(전문가 혼합); Llama 4 Scout는 1000만 토큰 컨텍스트 지원', '중요성': '오픈 웨이트 모델이 전문가 혼합 설계와 매우 긴 컨텍스트를 채택' },
            { '연도': '2026', '이정표': '컨텍스트 설계와 에이전트 오케스트레이션이 표준 관행으로 자리잡음', '중요성': '프롬프팅은 구성된 컨텍스트의 한 층이며, 시스템 수준의 사고가 요구됨' },
          ],
        },

        todayPractice: {
          id: 'today-practice',
          title: '역사가 오늘날의 모범 사례에 미치는 영향',
          content: [
            '프롬프트 엔지니어링 진화의 각 단계는 현재 실무에 지속적인 흔적을 남겼습니다. GPT-3 시대는 모델 동작이 내용뿐만 아니라 입력 구조에 의해 형성된다는 핵심 통찰을 가져다주었습니다. 연쇄 사고 시대는 명시적인 추론 발판을 제공하였습니다: 단계별 프롬프팅, 프롬프트 체이닝, 트리 오브 사고 접근법. 프레임워크 시대는 각 실무자가 처음부터 발견할 필요 없이 모범 사례를 인코딩하는 재사용 가능한 템플릿을 제공하였습니다.',
            'RAG와 컨텍스트 설계 시대는 프롬프트가 고립적으로 존재하지 않는다는 이해를 가져다주었습니다 — 프롬프트는 검색된 데이터, 시스템 지시, 도구 출력과 함께 전체 컨텍스트를 형성하기 위해 구성됩니다. 그리고 자동화 프롬프팅 시대는 좋은 프롬프팅의 원칙이 측정 가능하다는 것을 상기시켜 주었습니다: 더 잘 구조화된 프롬프트가 체계적으로 평가하고 최적화할 수 있는 방식으로 더 나은 출력을 생성합니다.',
          ],
          items: [
            '2022년의 추론 기법 → [Chain-of-Thought 프롬프팅: AI가 추론 과정을 보여주게 하는 방법](/prompt-engineering/chain-of-thought-prompting) 및 [Tree of Thought와 ReAct: 복잡한 문제를 위한 고급 추론 기법](/prompt-engineering/tree-of-thought-and-react)',
            '2023년의 프레임워크 개발 → [어떤 프롬프트 프레임워크를 사용해야 합니까?](/prompt-engineering/which-prompt-framework-should-you-use)',
            '컨텍스트 창 성장 → [컨텍스트 윈도우 설명: AI가 잊어버리는 이유(와 대처 방법)](/prompt-engineering/context-windows-explained-why-ai-forgets)',
            '모델 세대 전반의 토큰 경제학 → [토큰, 비용 및 제한: 2026년 AI 프롬프팅의 경제학](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)',
            '순수 프롬프팅의 보완으로서 RAG → [RAG 설명: 실제 데이터로 AI 답변을 근거화하는 방법 (2026)](/prompt-engineering/rag-explained)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: 프롬프트 엔지니어링의 진화',
          faqs: [
            {
              q: '프롬프트 엔지니어링은 언제 시작되었습니까?',
              a: '이 실천은 2020년 5월 GPT-3와 함께 시작되었습니다. Brown et al.이 프롬프트에 넣은 예시로 재학습 없이 모델을 유도할 수 있음을 보였습니다. 2021년 초 연구자들은 이를 "프롬프트 프로그래밍"이라 불렀고, 2022년 1월 사고 연쇄 프롬프팅이 뒤따랐으며, ChatGPT(2022년 11월)가 이를 대중적 기술로 만들었습니다.',
            },
            {
              q: '"프롬프트 엔지니어링"이라는 용어를 처음 만든 사람은 누구입니까?',
              a: '정확한 기원은 논쟁 중이며, 이 용어를 만들었다고 인정되는 특정 인물은 없습니다. 2021년에 이미 연구 논문이 프롬프트 기반 방법을 설명하고 있었고, 이 표현은 2022년과 ChatGPT 이후 더 널리 쓰였습니다. 프롬프트 엔지니어링에 관한 Wikipedia 문서가 이 역사를 개괄합니다.',
            },
            {
              q: 'ChatGPT 이후 프롬프트 엔지니어링이 폭발적으로 인기를 얻은 이유는 무엇입니까?',
              a: 'ChatGPT는 수백만 명의 비연구자가 코드 없이 즉시 무료로 사용할 수 있는 최초의 범용 AI 모델이었습니다. 잘 만들어진 프롬프트와 모호한 프롬프트 사이의 차이가 눈에 보이고 즉각적으로 결과에 영향을 미쳤습니다. 수백만 명이 동시에 경험한 그 피드백 루프가 프롬프트 엔지니어링을 연구 개념에서 대중적 기술로 전환시켰습니다.',
            },
            {
              q: '연구 논문이 실제 프롬프팅 기법에 어떤 영향을 미쳤습니까?',
              a: '전파 속도는 AI 연구로서는 이례적으로 빨랐습니다. 연쇄 사고 프롬프팅(Wei et al., 2022)은 학술 논문에서 수개월 내에 실무자들이 널리 사용하는 기법으로 자리잡았으며, 이는 도구 없이 프롬프트 작성 방식만 바꾸면 되었기 때문입니다. GPT-3 논문(Brown et al., 2020)의 퓨샷 프롬프팅은 API 접근 권한이 있는 누구나 즉시 적용할 수 있었습니다. 기법의 접근성이 확산을 가속화하였습니다.',
            },
            {
              q: '모델이 발전함에 따라 프롬프트 엔지니어링의 중요성이 감소하고 있습니까?',
              a: '아닙니다. 더 유능한 모델은 잘 구조화된 프롬프트에 더 잘 반응하지, 덜 반응하지 않습니다. 좋은 프롬프팅의 효과는 모델이 정밀한 지시를 따르는 능력이 높아질수록 증가합니다. 변화한 것은 간단한 작업에 필요한 프롬프트 엔지니어링의 수준입니다. 그러나 복잡한 프로덕션 수준의 출력을 위해서는 구조화된 프롬프팅이 여전히 가장 신뢰할 수 있는 수단입니다.',
            },
            {
              q: '프롬프트 엔지니어링과 컨텍스트 엔지니어링의 차이는 무엇입니까?',
              a: '프롬프트 엔지니어링은 일반적으로 모델의 출력을 개선하기 위해 텍스트 입력을 설계하는 것을 의미합니다. 컨텍스트 엔지니어링은 더 광범위하고 최근의 개념으로, 모델의 컨텍스트 창에 들어가는 모든 것을 조율하는 것을 의미합니다: 시스템 프롬프트, 검색된 문서, 대화 기록, 도구 출력, 사용자 입력 — 모두 의도적으로 구성됩니다. 컨텍스트 엔지니어링은 프롬프트를 독립적인 결과물이 아닌 설계된 시스템의 하나의 구성 요소로 취급합니다.',
            },
            {
              q: '자동화 도구가 프롬프트 엔지니어링을 이해할 필요를 대체할 것입니까?',
              a: 'DSPy와 같은 자동화 도구는 정의된 목표 내에서 프롬프트 표현을 최적화할 수 있지만, 목표가 무엇인지, 제약 조건이 무엇인지, 성공을 어떻게 평가할지를 지정하는 것은 여전히 사람이 해야 합니다. 프롬프트 엔지니어링 원칙을 이해하는 것은 이러한 도구를 효과적으로 사용하고 잘못된 결과를 진단하는 데 여전히 필요합니다. 자동화는 수동 반복 작업 일부를 제거하지만, 구조적 사고의 필요성은 제거하지 못합니다.',
            },
            {
              q: '2026년에 프롬프트 엔지니어링은 끝났습니까?',
              a: '아닙니다. 이 분야는 사라진 것이 아니라 이동했습니다. 모델이 더 유능해질수록 작업은 문법 요령과 서식 기교에서 입력 구조화, 검색 관리, 도구 출력 구성 같은 컨텍스트 설계로 옮겨갑니다. "프롬프트 엔지니어"라는 직함은 좁아지고 있지만, 그 밑바탕의 기술은 개발자, 분석가, 마케터, 연구자 등 AI를 쓰는 모든 역할에 들어 있습니다. 작업을 명확히 제시하고, 관련 컨텍스트를 주고, 출력 형식을 지정하는 일은 여전히 모델 답변의 유용성을 좌우합니다.',
            },
            {
              q: 'AI 모델이 계속 발전한다면 프롬프트 엔지니어링을 배워야 합니까?',
              a: '네, 하지만 초점은 세대마다 변화합니다. 더 좋은 모델은 정교한 우회 방법(특수 토큰, 반복 강화, 엄격한 서식 제약)의 필요성을 줄이고, 명확한 의도, 구조화된 컨텍스트, 잘 선택된 예제의 효과를 높입니다. 역할, 컨텍스트, 형식, 제약이라는 기본 원칙은 모든 모델 세대에 걸쳐 안정적으로 유지됩니다. 지금 배우면 기술이 만료되는 것이 아니라 축적됩니다.',
            },
            {
              q: '프롬프트 엔지니어링과 파인튜닝의 차이는 무엇입니까?',
              a: '프롬프트 엔지니어링은 모델의 가중치를 수정하지 않고 모델과 소통하는 방식을 변경합니다. 파인튜닝은 새로운 데이터로 모델을 재학습시켜 동작을 영구적으로 변경합니다. 프롬프트 엔지니어링은 더 빠르고, 저렴하며, 되돌릴 수 있습니다. 파인튜닝은 목표 동작이 일관적이고, 고빈도이거나, 프롬프트로 신뢰성 있게 설명하기 어려울 때 더 적합합니다. 대부분의 팀은 프롬프팅으로 시작하여 특정 작업에서 프롬프팅이 한계에 도달했을 때만 파인튜닝합니다.',
            },
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: '흔한 오해',
          mistakes: [
            {
              mistake: '프롬프트 엔지니어링은 더 나은 문장을 쓰는 일일 뿐이다.',
              problem: '이는 구조적, 맥락적 차원을 놓치는 것입니다. 프롬프트의 효과는 단어 선택만이 아니라 역할 부여(모델에 페르소나 지정), 제약 조건 명시, 출력 형식, 예시 선택에 달려 있으며, 이는 문법과 무관한 구조적 요소입니다.',
              fix: '프롬프트 엔지니어링을 프롬프트가 인터페이스인 시스템을 설계하는 일로 생각하십시오. 구조에 투자하십시오. 역할을 부여하고("당신은 ...입니다", "...라고 가정하십시오"), 제약을 명시하고("...하지 마십시오", "...를 포함해야 합니다"), 출력 형식을 정의하고, 예시를 제공하십시오. 구조가 유려함보다 중요한 경우가 많습니다.',
            },
            {
              mistake: '더 나은 모델이 나오면 프롬프트 엔지니어링은 필요 없어진다.',
              problem: '더 유능한 모델은 더 유능한 사람과 같아서, 명확한 지시에 더 잘 반응합니다. 좋은 프롬프팅의 이점은 모델 능력이 커질수록 커집니다. 바뀌는 것은 필요한 프롬프팅의 종류이지 필요 여부가 아닙니다.',
              fix: '프롬프팅이 AI 작업에서 계속 핵심일 것이라고 전제하십시오. 변하는 것은 필요한 세부 수준과 발판의 양입니다. 약한 모델에는 명시적인 단계별 구조가 필요할 수 있고, 강한 모델에는 명확한 한 줄 지시로 충분할 수 있지만, 그 간결함 자체가 프롬프트 엔지니어링의 선택입니다.',
            },
            {
              mistake: '자동 프롬프트 최적화 도구가 사람의 프롬프트 엔지니어링을 대체할 것이다.',
              problem: 'DSPy 같은 도구는 정해진 목표 안에서 문구를 최적화하도록 돕지만, 목표, 제약, 성공 기준, 평가 방법은 여전히 사람이 지정해야 합니다. 자동화는 반복 작업의 수고를 덜어 줄 뿐, 모델이 무엇을 해야 하는지 구조적으로 생각할 필요를 없애지는 못합니다.',
              fix: '자동화를 대체재가 아니라 도구로 사용하십시오. 작업을 이해하는 사람이 설계한 잘 구조화된 프롬프트로 시작하고, DSPy 같은 도구로 다듬으십시오. 작업 구조에 대한 사람의 판단은 대체할 수 없습니다.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '관련 읽기',
          items: [
            { title: 'Chain-of-Thought 프롬프팅: AI가 추론 과정을 보여주게 하는 방법', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: '제로샷 vs. 퓨샷 프롬프팅', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'RAG 설명: 실제 데이터로 AI 답변을 근거화하는 방법 (2026)', url: '/prompt-engineering/rag-explained' },
            { title: '컨텍스트 윈도우 설명: AI가 잊어버리는 이유(와 대처 방법)', url: '/prompt-engineering/context-windows-explained-why-ai-forgets' },
            { title: '토큰, 비용 및 제한: 2026년 AI 프롬프팅의 경제학', url: '/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting' },
          ],
        },

        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165](https://arxiv.org/abs/2005.14165) — 퓨샷 프롬프팅을 패러다임으로 제시한 OpenAI의 GPT-3 논문.',
            '[Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903](https://arxiv.org/abs/2201.11903) — 중간 추론 단계가 있는 프롬프트; GSM8K 17.9%에서 56.9% 결과의 출처(표 1).',
            '[Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155](https://arxiv.org/abs/2203.02155) — InstructGPT: 사람의 피드백(RLHF)을 통한 지시 따르기.',
            '[Zhou, Y. et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — APE: LLM이 프롬프트를 생성하고 평가.',
            '[Zhou, D. et al. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." arXiv:2205.10625](https://arxiv.org/abs/2205.10625) — least-to-most 프롬프팅: 문제를 하위 문제로 분해.',
            '[Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." arXiv:2005.11401](https://arxiv.org/abs/2005.11401) — 검색 증강 생성(RAG)을 도입한 논문.',
            '[Reynolds, L. and McDonell, K. (2021). "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." arXiv:2102.07350](https://arxiv.org/abs/2102.07350) — 프롬프트 작성을 프로그래밍으로 설명한 초기 논문(2021).',
            '[Liu, P. et al. (2021). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing." arXiv:2107.13586](https://arxiv.org/abs/2107.13586) — 자연어 처리의 프롬프트 방법 서베이(2021).',
            '[Khattab, O. et al. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines." arXiv:2310.03714](https://arxiv.org/abs/2310.03714) — DSPy: 프롬프트를 자동으로 컴파일하는 프레임워크.',
            '[Meta AI (2025). Llama 4 announcement](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) — Meta, Llama 4 발표(2025년 4월 5일): 전문가 혼합, Scout는 1000만 토큰 컨텍스트.',
            '[Anthropic (2025). Claude 3.7 Sonnet announcement](https://www.anthropic.com/news/claude-3-7-sonnet) — Anthropic, Claude 3.7 Sonnet 발표(2025년 2월 24일): 확장 사고 모드.',
            '[Google (2024). Gemini 1.5 announcement](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) — Google, Gemini 1.5 발표(2024년 2월 15일): 제한적 미리보기의 100만 토큰 컨텍스트.',
            '[DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948](https://arxiv.org/abs/2501.12948) — DeepSeek-R1: 강화 학습을 통한 추론(2025년 1월).',
            '[Fortune (2023). Report on new AI jobs, 9 March 2023](https://fortune.com/2023/03/09/new-ai-jobs-chatgpt-like-assistants/) — Fortune(2023년 3월 9일): Anthropic 프롬프트 엔지니어 공고의 연봉 범위 보도.',
          ],
        },

      },
    },

  };
