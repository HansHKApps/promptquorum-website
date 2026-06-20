// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-engineering-history
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'From GPT-2 to Today: How Prompt Engineering Evolved',
      seoTitle: 'Prompt Engineering is Dead? How It Evolved Into Context Design (2026)',
      intro: 'Prompt engineering evolved from informal experiments around GPT-3 in 2020 to a structured discipline with named techniques and frameworks by 2026. This timeline traces the key breakthroughs, research papers, and turning points that made prompting a core skill.',
      metaDescription: 'Prompt engineering went through 7 distinct phases from GPT-3 (2020) to context design (2026). Complete timeline with 12+ research citations, misconceptions debunked, and why the discipline transformed but isn\'t dead.',
      ogTitle: 'The 7 Phases of Prompt Engineering: GPT-3 to Context Design (2020–2026)',
      twitterTitle: 'How prompt engineering went from "write a better prompt" to context design in 6 years',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '10 min read',
      educationalLevel: 'Beginner',
      audience: 'Knowledge workers and developers learning the history of prompt engineering and AI techniques',
      primaryTerm: 'Prompt Engineering History',
      next_refresh_due: '2026-09-03',
      leadAnswerBlock: '**Prompt engineering evolved from informal trial-and-error around GPT-3 (2020) to a structured discipline with named frameworks, techniques, and tools by 2026, progressing through five phases: few-shot learning, chain-of-thought reasoning, the ChatGPT mainstream moment, automated optimization, and context design.**',
      quickFacts: [
        '**GPT-3 (2020):** 175-billion-parameter model introduced few-shot prompting as a paradigm shift',
        '**Chain-of-Thought (2022):** Wei et al. showed that prompt structure could activate step-by-step reasoning; improved GSM8K accuracy from 17.9% to 58%',
        '**ChatGPT (Nov 2022):** Reached 1 million users in 5 days, 100 million monthly active users by January 2023',
        '**Job Market (2023):** "Prompt engineer" appeared with $175K–$335K salaries; OED added "prompt" as a verb',
        '**GPT-4 & Frameworks (2023):** Multimodal inputs and formalized frameworks (CO-STAR, SPECS, RISEN) turned prompting into a teachable discipline',
        '**Context Design (2024–2026):** Open-source LLMs, 1M+ token context windows, and agent orchestration shifted focus from prompt tweaking to system-level context engineering',
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
        { label: 'Common Misconceptions', anchor: 'common-mistakes' },
        { label: 'Related Reading', anchor: 'related-reading' },
        { label: 'Frequently Asked Questions', anchor: 'faq' },
        { label: 'Sources', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Prompt Engineering is Dead? How It Evolved Into Context Design (2026)',
        description: 'Prompt engineering went through 7 distinct phases from GPT-3 (2020) to context design (2026). Complete timeline with 12+ research citations, misconceptions debunked, and why the discipline transformed but isn\'t dead.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'en',
        keywords: ['prompt engineering history', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'prompt engineering timeline', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Knowledge workers and developers using AI' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering History' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'AI Techniques and Frameworks' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', name: 'Who first coined the term "prompt engineering"?', acceptedAnswer: { '@type': 'Answer', text: 'The exact origin is debated. The term appeared in research contexts as early as 2021 and gained wider use through 2022. Richard Socher is mentioned in some commentary as having helped frame the concept publicly, though no single person is credited with inventing it. The Wikipedia article on prompt engineering provides a balanced overview of the competing claims.' } },
          { '@type': 'Question', name: 'Why did prompt engineering explode in popularity after ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT was the first general-purpose AI model that millions of non-researchers could use immediately, for free, without writing code. The gap between a well-crafted prompt and a vague one was visible and immediately consequential — better prompts produced usably better outputs. That feedback loop, experienced simultaneously by millions of people, turned prompt engineering from a research concept into a mass skill.' } },
          { '@type': 'Question', name: 'How did research papers influence real-world prompting techniques?', acceptedAnswer: { '@type': 'Answer', text: 'The transfer was unusually fast for AI research. Chain-of-Thought prompting (Wei et al., 2022) went from academic paper to widely used practitioner technique within months, partly because it required no tooling — just a change in how you wrote the prompt. Few-shot prompting from the GPT-3 paper (Brown et al., 2020) was immediately adoptable by anyone with API access. The accessibility of the techniques accelerated their spread.' } },
          { '@type': 'Question', name: 'Is prompt engineering becoming less important as models improve?', acceptedAnswer: { '@type': 'Answer', text: 'No — more capable models respond better to well-structured prompts, not less. The gains from good prompting increase as the model becomes more capable of following precise instructions. What has changed is the level of prompt engineering required for simple tasks: conversational questions now require less crafting than they did in 2021. But for complex, production-grade outputs, structured prompting remains the most reliable lever available.' } },
          { '@type': 'Question', name: 'What is the difference between prompt engineering and context engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering typically refers to designing the text input to a model to improve its output. Context engineering is a broader, more recent concept that refers to orchestrating everything in the model\'s context window: the system prompt, retrieved documents, conversation history, tool outputs, and user input — all composed deliberately. Context engineering treats the prompt as one component in a designed system, not a standalone artifact.' } },
          { '@type': 'Question', name: 'Will automated tools replace the need to understand prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Automated tools like DSPy can optimise prompt wording within defined objectives, but they require a human to specify what the objective is, what constraints apply, and how to evaluate success. Understanding prompt engineering principles remains necessary to use these tools effectively — and to diagnose when they produce the wrong outcome. Automation removes some of the manual iteration; it does not remove the need for structured thinking.' } },
          { '@type': 'Question', name: 'Is prompt engineering dead in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'No. The discipline has shifted, not disappeared. As models grow more capable, the work moves from syntax tricks and formatting hacks to context design — structuring inputs, managing retrieval, and composing tool outputs. The job title "Prompt Engineer" is narrowing, but the underlying skill is embedded in every role that uses AI: developer, analyst, marketer, researcher. Effective AI adoption still correlates strongly with how well users frame tasks for the model.' } },
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
          { '@type': 'ListItem', position: 1, name: 'BERT and GPT-2 Released (2018–2019)', description: 'Demonstrated transformer models could be guided by input phrasing — but no formal discipline yet' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 Few-Shot Learning (2020)', description: 'Established few-shot prompting as a paradigm: rewriting the prompt changes the model\'s behaviour without retraining' },
          { '@type': 'ListItem', position: 3, name: 'InstructGPT and RLHF (January 2022)', description: 'Models trained to follow instructions — made prompt quality far more consequential' },
          { '@type': 'ListItem', position: 4, name: 'Chain-of-Thought Prompting (May 2022)', description: 'Proved that prompt structure could elicit step-by-step reasoning — turned prompting into a cognitive scaffold' },
          { '@type': 'ListItem', position: 5, name: 'ChatGPT Launch (November 2022)', description: 'Brought prompt engineering into mainstream awareness; millions began experimenting overnight' },
          { '@type': 'ListItem', position: 6, name: 'Prompt Engineer as Job Title (Q1 2023)', description: 'Defined prompt engineering as a recognised profession and named skill' },
          { '@type': 'ListItem', position: 7, name: 'GPT-4 and Multimodal Prompting (March 2023)', description: 'Extended prompt engineering beyond text to visual inputs and large context windows' },
          { '@type': 'ListItem', position: 8, name: 'Prompt Engineering Frameworks (2023)', description: 'Turned prompt engineering from personal craft into teachable, shareable practice' },
          { '@type': 'ListItem', position: 9, name: 'Automated Prompt Optimization (2023–2024)', description: 'LLMs shown to write prompts as well as humans; automated prompt optimisation became practical' },
          { '@type': 'ListItem', position: 10, name: 'Open-Weights Models and 1M Context (2024)', description: 'Open-source LLMs for private deployment; massive context shifted focus to context engineering' },
          { '@type': 'ListItem', position: 11, name: 'Extended Thinking and Reasoning Modes (Q1–Q2 2025)', description: 'Models internalize step-by-step reasoning; prompt-level CoT becomes optional on frontier models' },
          { '@type': 'ListItem', position: 12, name: 'LLaMA 4 MoE and 10M Context (Q3–Q4 2025)', description: 'Open-weights models reach near-frontier quality; MoE architecture reduces compute costs for self-hosting' },
          { '@type': 'ListItem', position: 13, name: 'Context Design as Standard Practice (2026)', description: 'Prompting becomes one layer in a composed context — system-level thinking required; prompt engineering skill embedded in all AI-using roles' },
        ],
      },
      sections: {

        definition: {
          id: 'definition',
          title: 'How Prompt Engineering Evolved: A Short Overview',
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
            'GPT-2, released in February 2019, was a 1.5-billion-parameter model that could complete text in surprisingly coherent ways. Researchers and early practitioners noticed that the phrasing of an input dramatically changed the quality of the completion — but there was no framework, no terminology, and no community built around this observation yet. Prompts were inputs, not engineering artifacts.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020: GPT-3 and the Few-Shot Breakthrough',
          content: [
            '**The modern history of prompt engineering effectively begins with GPT-3.** In May 2020, OpenAI released GPT-3, a 175-billion-parameter model, alongside the landmark paper by Brown et al., "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)". The paper demonstrated that by including a few examples of the desired task directly in the prompt — without any weight updates to the model — performance on downstream tasks improved dramatically.',
            'This was the seed of prompt engineering as a discipline. Researchers and developers realised that the same model could be turned into a translator, a summariser, a code generator, or a question-answering system simply by changing how the prompt was written. The model did not need retraining — it needed a better prompt. That insight reframed what a prompt was: not just an input, but a design artifact.',
            'Brown et al. reported that few-shot performance scaled consistently with model size: the 175B GPT-3 model substantially outperformed smaller variants across every benchmark tested, establishing that scale and prompt-based learning were directly linked. This made the quality of the prompt a variable that practitioners — not just researchers — could control.',
            'See [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] for a practical guide to the technique GPT-3 made famous.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–Early 2022: From Prompt Tricks to a Recognised Skill',
          content: [
            'Between 2021 and early 2022, prompt crafting moved from research papers into practitioner communities. GitHub repositories with curated prompt collections appeared — "awesome-prompts" style lists that shared what worked for coding assistance, summarisation, and creative writing. Prompt collections, shared on Twitter and Reddit, became community assets. The [Prompt Engineering Guide](https://www.promptingguide.ai/) became one of the first dedicated references cataloguing techniques systematically.',
            'The term "prompt engineering" began appearing more frequently in research papers, blog posts, and job descriptions through this period. OpenAI\'s InstructGPT paper (Ouyang et al., 2022) introduced RLHF-tuned models that responded far more reliably to natural-language instructions — making prompt quality even more consequential. By mid-2022, it was clear that this was a transferable skill, not just a researcher\'s curiosity.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022: Chain-of-Thought and Reasoning Prompts',
          content: [
            '**The introduction of Chain-of-Thought (CoT) prompting in 2022 was the most significant technical development in the discipline\'s short history.** Wei et al. (Google Brain) published "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", demonstrating that asking a model to reason step by step before answering dramatically improved performance on arithmetic, commonsense reasoning, and symbolic reasoning tasks. In one headline result, chain-of-thought prompting improved PaLM\'s accuracy on the GSM8K grade-school maths benchmark from 17.9% to 58% — a gain achieved purely by changing the prompt structure, with no additional model training. The implication was profound: the structure of the prompt could activate different reasoning behaviour — not just different facts.',
            'Related techniques followed quickly. Zhou et al. introduced least-to-most prompting, which decomposed complex problems into a sequence of simpler sub-problems solved in order. These approaches turned prompt engineering from a formatting exercise into a tool for eliciting structured reasoning from models that had not been explicitly trained to reason that way. Prompting had become scaffolding for cognition.',
            'For the full technique guide, see [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] and [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: 'Late 2022–2023: The ChatGPT Moment and the Prompt Engineer Job Title',
          callouts: [
            {
              type: 'did-you-know',
              label: 'Did You Know',
              text: 'ChatGPT reached 100 million monthly active users in January 2023 — just two months after launch. For comparison, it took TikTok 9 months and Instagram 2.5 years to reach the same milestone. This speed of adoption is why prompt engineering went from research concept to mainstream skill almost overnight.',
            },
          ],
          content: [
            '**The release of ChatGPT on November 30, 2022, changed the public profile of prompt engineering overnight.** ChatGPT reached one million users within its first five days — confirmed by OpenAI CEO Sam Altman on Twitter in December 2022 — and 100 million monthly active users by January 2023, according to a UBS analysis cited by Reuters. Within days, millions of people were experimenting with prompts and discovering that their results varied enormously based on how they phrased requests. Tech media covered "prompt engineering" as a skill worth learning. The Oxford English Dictionary added "prompt" as a verb related to AI in 2023, and the word itself became a runner-up for word of the year in multiple rankings.',
            'By early 2023, "prompt engineer" appeared as a job title with reported salaries of $175,000–$335,000 at companies including Anthropic, according to widely cited job postings. The role attracted significant media attention — Bloomberg, The Guardian, and The Atlantic all covered whether prompt engineering was a real career. The consensus at the time: it was a transitional role, part human-computer interface design, part subject-matter expertise, part quality assurance.',
            'The popularisation of the phrase "prompt engineering" is sometimes attributed to various practitioners and commentators. Richard Socher, former Chief Scientist at Salesforce, is mentioned in some commentary as having helped frame the idea early. The [Wikipedia article on prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) provides a balanced overview of competing claims about the term\'s origins.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023: GPT-4, Multimodal Prompting and Frameworks',
          content: [
            'The release of GPT-4 in March 2023 expanded prompt engineering in two directions simultaneously: larger context windows (up to 128K tokens in later versions) and multimodal inputs. Practitioners could now include images in prompts alongside text, opening prompt engineering to visual tasks — describing images, comparing diagrams, annotating charts. Early Gemini models from Google and multimodal Claude versions from Anthropic followed within months.',
            'The same year saw the formalisation of prompt engineering best practices. OpenAI published its [official prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering). Google Cloud released its own [prompt engineering documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/prompt-engineering). Independent authors codified frameworks — CRAFT, CO-STAR, SPECS, RISEN, TRACE — that gave practitioners repeatable templates for structuring prompts, reducing the reliance on trial and error.',
            'These frameworks represented the maturation of prompt engineering from a personal skill into a teachable, shareable practice. See [Frameworks: Which Prompt Framework Should You Use?] for a guide to choosing between them, and [Fundamentals: Beyond Text: How to Prompt with Images] for the multimodal dimension.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024: Automated Prompt Engineering and RAG',
          content: [
            'A striking development in 2023 was research showing that LLMs could optimise prompts as well as humans could. Zhou et al. published "Large Language Models Are Human-Level Prompt Engineers" (APE), demonstrating that an LLM tasked with generating and evaluating prompt candidates could match or exceed human-written prompts on benchmark tasks. Stanford\'s DSPy framework (2023) took this further — allowing developers to describe what a prompt should accomplish and letting the system optimise the wording automatically.',
            'Simultaneously, Retrieval-Augmented Generation (RAG) — originally introduced by Lewis et al. at Meta in 2020 — became a central pattern in production AI systems. RAG injected retrieved documents directly into the prompt context, grounding model outputs in real, up-to-date sources rather than requiring prompts to contain all the necessary facts. This shifted the emphasis in prompt engineering from "how do I make the model know this?" to "how do I structure the context so the model uses this correctly?"',
            'See [Techniques: RAG Explained: How to Ground AI Answers in Real Data] and [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work] for coverage of the key techniques from this period.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025: From Prompt Engineering to Context Design',
          content: [
            'By 2024, a new framing began to displace the simple idea of "write a better prompt." Practitioners and researchers started referring to context engineering — the practice of orchestrating what goes into the full context window: the system prompt, retrieved documents, tool outputs, conversation history, and user input, all composed deliberately to guide model behaviour. The prompt was no longer a standalone artifact; it was one layer in a designed context.',
            'Several developments accelerated this shift. Meta\'s Llama 3-class models (2024) made capable open-source LLMs available for private deployment, shifting some prompt engineering from cloud APIs to local infrastructure. Context windows grew to 1 million tokens or more (Gemini 3.5 Pro), making it practical to inject entire codebases, books, or document collections into a single prompt. Multi-agent frameworks like LangChain and AutoGen turned prompting into orchestration — one prompt triggers another model, which triggers a tool, which returns context to the next prompt.',
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
            'As of 2026, research and commentary increasingly describe prompt engineering not as a niche job title, but as a fundamental literacy skill for knowledge workers who use AI tools. Academic papers frame structured prompting alongside reading, writing, and computation as a baseline competency for working with generative AI systems.',
            'The role has split into two distinct tracks. The first is system and context design — the engineering of production AI systems where prompts form part of a larger architecture involving retrieval, agents, and evaluation pipelines. The second is everyday use — the ability to write clear, structured prompts that produce useful outputs without knowing the underlying architecture. Both tracks benefit from the same core principles: clear task specification, appropriate context, constraints, and output format.',
            'What has not changed, despite more capable models and automated tools, is the fundamental principle: the clearer and more structured the input, the more reliable and useful the output. The techniques, terminology, and tooling have matured, but the core insight from the GPT-3 era remains true in 2026.',
          ],
        },

        timeline: {
          id: 'timeline',
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
            { 'Year': '2024', 'Milestone': 'Llama 3-class models; context windows exceed 1M tokens (Gemini 3.5 Pro)', 'Why It Matters': 'Open-source LLMs for private deployment; massive context shifted focus to context engineering' },
            { 'Year': '2025 (Q1–Q2)', 'Milestone': 'Extended thinking / reasoning modes: Claude 4.8 Sonnet, OpenAI o3, DeepSeek R1, Gemini Deep Think', 'Why It Matters': 'Models internalize step-by-step reasoning; prompt-level CoT becomes optional on frontier models' },
            { 'Year': '2025 (Q3–Q4)', 'Milestone': 'LLaMA 4 (MoE); context windows reach 10M tokens on some models', 'Why It Matters': 'Open-weights models reach near-frontier quality; MoE architecture reduces compute costs for self-hosting' },
            { 'Year': '2026', 'Milestone': 'Context design and multi-agent orchestration replace simple prompt tweaking', 'Why It Matters': 'Prompting becomes one layer in a composed context — system-level thinking required; prompt engineering skill embedded in all AI-using roles' },
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
            'Reasoning techniques from 2022 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] and [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            'Framework development from 2023 → [Frameworks: Which Prompt Framework Should You Use?]',
            'Context window growth → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'Token economics across model generations → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG as a complement to pure prompting → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: The Evolution of Prompt Engineering',
          faqs: [
            {
              q: 'Who first coined the term "prompt engineering"?',
              a: 'The exact origin is debated. The term appeared in research contexts as early as 2021 and gained wider use through 2022. Richard Socher is mentioned in some commentary as having helped frame the concept publicly, though no single person is credited with inventing it.',
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
              a: 'No. The discipline has shifted, not disappeared. As models grow more capable, the work moves from syntax tricks and formatting hacks to context design — structuring inputs, managing retrieval, and composing tool outputs. The job title "Prompt Engineer" is narrowing, but the underlying skill is embedded in every role that uses AI: developer, analyst, marketer, researcher. Effective AI adoption still correlates strongly with how well users frame tasks for the model.',
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
            { title: 'Prompt Frameworks: Which Model Works Best?', url: '/prompt-engineering/prompt-frameworks-compared' },
            { title: 'RAG Explained: How to Ground AI Answers in Real Data', url: '/prompt-engineering/rag-explained' },
            { title: 'Context Windows Explained: Why Your AI Forgets', url: '/prompt-engineering/context-windows' },
            { title: 'Tokens, Costs & Limits: The Economics of AI Prompting', url: '/prompt-engineering/tokens-and-costs' },
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv preprint arXiv:2005.14165. — OpenAI GPT-3 paper introducing few-shot prompting as a paradigm.',
            'Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv preprint arXiv:2201.11903. — Google Brain paper on step-by-step reasoning prompts.',
            'Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv preprint arXiv:2203.02155. — OpenAI InstructGPT paper on instruction-following via RLHF.',
            'Zhou, Y. et al. (2023). "Large Language Models Are Human-Level Prompt Engineers." arXiv preprint arXiv:2211.01910. — Stanford APE paper on LLMs optimizing prompts.',
            'Lewis, P., et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." Advances in Neural Information Processing Systems. — Meta paper introducing RAG.',
            'Stiennon, N. et al. (2022). "Summarize, Please! A Study on Prompts for Improving LLM Summarisation." arXiv preprint. — Work on prompt design for factual accuracy.',
          ],
        },

      },
    },

    de: {
      freshness_tier: 'semi_annual',
      theme: 'Grundlagen',
      title: 'Wie sich Prompt Engineering entwickelt hat: Von GPT-3 zu Context Design',
      seoTitle: 'Prompt Engineering: Von Few-Shot zu Context Design 2026',
      intro: 'Prompt Engineering entwickelte sich von informellen Experimenten rund um GPT-3 im Jahr 2020 zu einer strukturierten Disziplin mit benannten Techniken und Frameworks bis 2026. Diese Zeitleiste verfolgt die Schlüsseldurchbrüche, Forschungsarbeiten und Wendepunkte, die Prompting zu einer Kernkompetenz machten.',
      metaDescription: 'Prompt Engineering: 7 Phasen von GPT-3 (2020) bis Context Design (2026). Zeitleiste, Forschungszitate und warum die Disziplin transformiert, nicht tot ist.',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Beginner',
      audience: 'Wissensarbeiter und Entwickler, die die Geschichte von Prompt Engineering und KI-Techniken erlernen',
      primaryTerm: 'Prompt Engineering Geschichte',
      next_refresh_due: '2026-09-03',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Prompt Engineering Evolution 2020–2026: Von Few-Shot zu Context Design',
        description: 'Prompt Engineering durchlief 7 Phasen von GPT-3 (2020) bis Context Design (2026). Vollständige Zeitleiste mit 12+ Forschungszitaten und Analyse, warum die Disziplin transformiert, aber nicht tot ist.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/de/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'de',
        keywords: ['Prompt-Engineering-Geschichte', 'GPT-3 Few-Shot-Lernen', 'Chain-of-Thought-Prompting', 'ChatGPT', 'Context Engineering', 'Prompt-Engineering-Zeitleiste', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
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
            'Mehrere Entwicklungen beschleunigten diesen Wandel. Metas Llama-3-Klasse-Modelle (2024) machten leistungsfähige Open-Source-LLMs für private Deployments verfügbar und verlagerten einen Teil des Prompt Engineerings von Cloud-APIs zu lokaler Infrastruktur. Kontextfenster wuchsen auf 1 Million Token oder mehr (Gemini 3.5 Pro), was es praktikabel machte, gesamte Codebasen, Bücher oder Dokumentensammlungen in einen einzigen Prompt einzuspeisen. Multi-Agenten-Frameworks wie LangChain und AutoGen verwandelten Prompting in Orchestrierung – ein Prompt löst ein anderes Modell aus, das ein Werkzeug auslöst, das Kontext zum nächsten Prompt zurückgibt.',
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
            { 'Jahr': '2024', 'Meilenstein': 'Llama-3-Klasse-Modelle; Kontextfenster überschreiten 1M Token (Gemini 3.5 Pro)', 'Warum es wichtig ist': 'Open-Source-LLMs für private Deployments; massiver Kontext verlagerte Fokus auf Kontext-Engineering' },
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
          id: 'faq',
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
              a: 'Nein. Die Disziplin hat sich verändert, ist aber nicht verschwunden. Mit wachsender Modellkompetenz verlagert sich die Arbeit von Syntax-Tricks und Formatierungs-Hacks hin zum Kontext-Design – Strukturierung von Eingaben, Verwaltung von Retrieval und Komposition von Tool-Ausgaben. Die Berufsbezeichnung „Prompt Engineer" wird enger gefasst, aber die zugrunde liegende Fähigkeit ist in jede Rolle integriert, die KI nutzt: Entwickler, Analyst, Marketingspezialist, Forscher. [External: McKinsey 2024 State of AI] stellte fest, dass effektive KI-Einführung nach wie vor stark damit korreliert, wie gut Nutzer Aufgaben für das Modell formulieren.',
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
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'De GPT-2 a hoy: Cómo evolucionó el Prompt Engineering',
      seoTitle: '¿Está muerto el prompt engineering? Su evolución en 2026',
      intro: 'El prompt engineering evolucionó de experimentos informales en torno a GPT-3 en 2020 a una disciplina estructurada con técnicas y frameworks con nombre propios para 2026. Esta línea de tiempo traza los avances clave, los artículos de investigación y los puntos de inflexión que convirtieron el prompting en una habilidad fundamental.',
      metaDescription: 'El prompt engineering pasó por 7 fases desde GPT-3 (2020) hasta el context design (2026). Línea de tiempo con citas de investigación y mitos desmentidos.',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '10 min de lectura',
      educationalLevel: 'Beginner',
      next_refresh_due: '2026-09-03',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '¿Está muerto el prompt engineering? Cómo evolucionó hacia el context design (2026)',
        description: 'El prompt engineering pasó por 7 fases distintas desde GPT-3 (2020) hasta el context design (2026). Línea de tiempo completa con 12+ citas de investigación y análisis de por qué la disciplina se transformó pero no desapareció.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/es/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'es',
        keywords: ['historia del prompt engineering', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'línea de tiempo del prompt engineering', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      sections: {
        definition: {
          title: 'Cómo evolucionó el prompt engineering: una breve visión general',
          content: [
            '**El prompt engineering evolucionó de una manipulación de texto informal por ensayo y error en torno a GPT-3 en 2020 a una disciplina estructurada con técnicas, frameworks y herramientas con nombre propios para 2026.** El arco abarca cinco fases: los primeros experimentos de few-shot, el momento ChatGPT que trajo la habilidad al conocimiento del público general, el desarrollo de técnicas de razonamiento estructurado, el auge de la optimización automática de prompts y el actual cambio hacia el context design.',
            'La disciplina no surgió de un solo artículo o empresa. Creció a partir de la confluencia de la investigación (few-shot learning, chain-of-thought reasoning, RAG), comunidades de profesionales que compartían colecciones de prompts online y la repentina disponibilidad pública de modelos potentes que hizo que el buen prompting fuera inmediatamente gratificante. Para 2026, el prompt engineering ya no es un truco de nicho — es una habilidad básica para cualquiera que trabaje con sistemas de IA.',
          ],
        },

        tldr: {
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
          title: 'Antes de que el prompt engineering tuviera nombre (antes de 2020)',
          content: [
            'Antes de que existiera el término "prompt engineering", los investigadores ya manipulaban los inputs de los modelos para obtener mejores outputs — solo que no lo llamaban así. Los primeros modelos transformer como GPT-2 (2019, OpenAI) y BERT (2018, Google) se usaban mediante texto de entrada cuidadosamente elegido, pero la práctica se trataba como parte del preprocesamiento de datos, no como una habilidad por sí sola.',
            'GPT-2, publicado en febrero de 2019, era un modelo de 1.500 millones de parámetros que podía completar texto de formas sorprendentemente coherentes. Los investigadores y los primeros profesionales notaron que la redacción de un input cambiaba drásticamente la calidad del completado — pero aún no existía ningún framework, ninguna terminología ni ninguna comunidad construida en torno a esta observación. Los prompts eran inputs, no artefactos de ingeniería.',
          ],
        },

        gpt3: {
          title: '2020: GPT-3 y el avance del few-shot',
          content: [
            '**La historia moderna del prompt engineering comienza efectivamente con GPT-3.** En mayo de 2020, OpenAI publicó GPT-3, un modelo de 175.000 millones de parámetros, junto con el artículo pionero de Brown et al., "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)". El artículo demostró que al incluir unos pocos ejemplos de la tarea deseada directamente en el prompt — sin actualizaciones de los pesos del modelo — el rendimiento en tareas posteriores mejoró drásticamente.',
            'Esta fue la semilla del prompt engineering como disciplina. Los investigadores y desarrolladores se dieron cuenta de que el mismo modelo podía convertirse en un traductor, un resumidor, un generador de código o un sistema de preguntas y respuestas simplemente cambiando cómo se escribía el prompt. El modelo no necesitaba reentrenamiento — necesitaba un mejor prompt. Ese insight reformuló lo que era un prompt: no solo un input, sino un artefacto de diseño.',
            'Brown et al. informaron que el rendimiento en few-shot escalaba de forma consistente con el tamaño del modelo. Esto convirtió la calidad del prompt en una variable que los profesionales — no solo los investigadores — podían controlar.',
            'Consulta [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] para una guía práctica de la técnica que GPT-3 hizo famosa.',
          ],
        },

        skill: {
          title: '2021–principios de 2022: De los trucos de prompt a una habilidad reconocida',
          content: [
            'Entre 2021 y principios de 2022, la elaboración de prompts pasó de los artículos de investigación a las comunidades de profesionales. Aparecieron repositorios de GitHub con colecciones de prompts curadas — listas del estilo "awesome-prompts" que compartían lo que funcionaba para la asistencia en codificación, el resumen y la escritura creativa. Las colecciones de prompts, compartidas en Twitter y Reddit, se convirtieron en activos comunitarios.',
            'El término "prompt engineering" empezó a aparecer con más frecuencia en artículos de investigación, publicaciones de blog y descripciones de puestos de trabajo durante este período. El artículo de InstructGPT de OpenAI (Ouyang et al., 2022) introdujo modelos ajustados con RLHF que respondían de forma mucho más fiable a las instrucciones en lenguaje natural — haciendo la calidad del prompt aún más determinante. A mediados de 2022, quedó claro que esta era una habilidad transferible, no solo una curiosidad de investigadores.',
          ],
        },

        cot: {
          title: '2022: Chain-of-Thought y prompts de razonamiento',
          content: [
            '**La introducción del prompting Chain-of-Thought (CoT) en 2022 fue el desarrollo técnico más significativo en la breve historia de la disciplina.** Wei et al. (Google Brain) publicaron "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", demostrando que pedir a un modelo que razone paso a paso antes de responder mejoraba drásticamente el rendimiento en tareas de aritmética, razonamiento de sentido común y razonamiento simbólico. En un resultado destacado, el prompting chain-of-thought mejoró la precisión de PaLM en el benchmark GSM8K de matemáticas de primaria del 17.9% al 58% — una ganancia lograda puramente cambiando la estructura del prompt, sin entrenamiento adicional del modelo.',
            'Las técnicas relacionadas siguieron rápidamente. Zhou et al. introdujeron el prompting least-to-most, que descomponía problemas complejos en una secuencia de subproblemas más simples resueltos en orden. Estos enfoques convirtieron el prompt engineering de un ejercicio de formato en una herramienta para elicitar razonamiento estructurado de modelos que no habían sido entrenados explícitamente para razonar de esa manera.',
            'Para la guía completa de técnicas, consulta [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] y [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          title: 'Finales de 2022–2023: El momento ChatGPT y el título de trabajo "Prompt Engineer"',
          content: [
            '**El lanzamiento de ChatGPT el 30 de noviembre de 2022 cambió de la noche a la mañana el perfil público del prompt engineering.** ChatGPT alcanzó un millón de usuarios en sus primeros cinco días y 100 millones de usuarios activos mensuales en enero de 2023. En cuestión de días, millones de personas estaban experimentando con prompts y descubriendo que sus resultados variaban enormemente en función de cómo formulaban las solicitudes. Los medios tecnológicos cubrieron el "prompt engineering" como una habilidad que valía la pena aprender.',
            'A principios de 2023, "prompt engineer" apareció como título de trabajo con salarios reportados de 175.000–335.000 dólares en empresas como Anthropic. El papel atrajo una atención mediática significativa. El consenso en ese momento: era un papel de transición, parte diseño de interfaz humano-computadora, parte experiencia en la materia, parte control de calidad.',
          ],
        },

        gpt4: {
          title: '2023: GPT-4, prompting multimodal y frameworks',
          content: [
            'El lanzamiento de GPT-4 en marzo de 2023 expandió el prompt engineering en dos direcciones simultáneamente: context windows más grandes (hasta 128K tokens en versiones posteriores) y inputs multimodales. Los profesionales ahora podían incluir imágenes en los prompts junto con texto, abriendo el prompt engineering a tareas visuales — describir imágenes, comparar diagramas, anotar gráficos.',
            'El mismo año vio la formalización de las mejores prácticas de prompt engineering. OpenAI publicó su guía oficial de prompt engineering. Google Cloud publicó su propia documentación de prompt engineering. Autores independientes codificaron frameworks — CRAFT, CO-STAR, SPECS, RISEN, TRACE — que dieron a los profesionales plantillas repetibles para estructurar prompts.',
            'Estos frameworks representaron la maduración del prompt engineering de una habilidad personal a una práctica enseñable y compartible. Consulta [Frameworks: Which Prompt Framework Should You Use?] para una guía de selección.',
          ],
        },

        automated: {
          title: '2023–2024: Prompt engineering automatizado y RAG',
          content: [
            'Un desarrollo llamativo en 2023 fue la investigación que mostraba que los LLMs podían optimizar prompts tan bien como los humanos. Zhou et al. publicaron "Large Language Models Are Human-Level Prompt Engineers" (APE), demostrando que un LLM encargado de generar y evaluar candidatos de prompt podía igualar o superar los prompts escritos por humanos en tareas de benchmark. El framework DSPy de Stanford (2023) fue más lejos — permitiendo a los desarrolladores describir lo que debería lograr un prompt y dejar que el sistema optimizara la redacción automáticamente.',
            'Simultáneamente, la Retrieval-Augmented Generation (RAG) — introducida originalmente por Lewis et al. en Meta en 2020 — se convirtió en un patrón central en los sistemas de IA en producción. RAG inyectaba documentos recuperados directamente en el contexto del prompt, fundamentando los outputs del modelo en fuentes reales y actualizadas. Esto desplazó el énfasis en el prompt engineering de "¿cómo hago que el modelo sepa esto?" a "¿cómo estructuro el contexto para que el modelo lo use correctamente?"',
          ],
        },

        context: {
          title: '2024–2025: Del prompt engineering al context design',
          content: [
            'Para 2024, un nuevo marco comenzó a desplazar la simple idea de "escribir un mejor prompt". Los profesionales e investigadores empezaron a referirse al context engineering — la práctica de orquestar lo que entra en el context window completo: el system prompt, los documentos recuperados, los outputs de las herramientas, el historial de conversación y el input del usuario, todos compuestos deliberadamente para guiar el comportamiento del modelo. El prompt ya no era un artefacto independiente; era una capa en un contexto diseñado.',
            'Varios desarrollos aceleraron este cambio. Los modelos de la clase Llama 3 de Meta (2024) hicieron disponibles LLMs de código abierto capaces para despliegues privados. Los context windows crecieron hasta 1 millón de tokens o más (Gemini 3.5 Pro). Los frameworks multi-agente como LangChain y AutoGen convirtieron el prompting en orquestación.',
          ],
        },

        beyond2026: {
          title: '2026 y más allá: El prompt engineering como alfabetización fundamental',
          content: [
            'A partir de 2026, la investigación y los comentarios describen cada vez más el prompt engineering no como un título de trabajo de nicho, sino como una habilidad de alfabetización fundamental para los trabajadores del conocimiento que usan herramientas de IA. Los artículos académicos enmarcan el prompting estructurado junto con la lectura, la escritura y el cálculo como una competencia básica para trabajar con sistemas de IA generativa.',
            'El papel se ha dividido en dos vías distintas. La primera es el diseño de sistemas y contextos — la ingeniería de sistemas de IA en producción donde los prompts forman parte de una arquitectura más amplia que involucra recuperación, agentes y pipelines de evaluación. La segunda es el uso cotidiano — la capacidad de escribir prompts claros y estructurados que produzcan outputs útiles sin conocer la arquitectura subyacente.',
            'Lo que no ha cambiado, a pesar de los modelos más capaces y las herramientas automatizadas, es el principio fundamental: cuanto más claro y estructurado sea el input, más fiable y útil será el output.',
          ],
        },

        timeline: {
          title: 'Línea de tiempo: Hitos clave del prompt engineering',
          content: 'La tabla a continuación resume los hitos clave de 2018 a 2026 — los eventos, artículos y lanzamientos de modelos que dieron forma a cómo el prompt engineering evolucionó a su forma actual.',
          columns: ['Año', 'Hito', 'Por qué importa'],
          rows: [
            { 'Año': '2018–2019', 'Hito': 'Publicación de BERT (Google) y GPT-2 (OpenAI)', 'Por qué importa': 'Demostró que los modelos transformer podían guiarse por la formulación del input — pero aún sin disciplina formal' },
            { 'Año': '2020', 'Hito': 'GPT-3 y Brown et al. "Language Models are Few-Shot Learners"', 'Por qué importa': 'Estableció el few-shot prompting como paradigma: reescribir el prompt cambia el comportamiento del modelo sin reentrenamiento' },
            { 'Año': '2022 (ene)', 'Hito': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Por qué importa': 'Los modelos entrenados para seguir instrucciones — hicieron que la calidad del prompt fuera mucho más determinante' },
            { 'Año': '2022 (may)', 'Hito': 'Chain-of-Thought prompting (Wei et al., Google Brain)', 'Por qué importa': 'Demostró que la estructura del prompt podía elicitar razonamiento paso a paso — convirtió el prompting en un andamiaje cognitivo' },
            { 'Año': '2022 (nov)', 'Hito': 'Lanzamiento de ChatGPT', 'Por qué importa': 'Trajo el prompt engineering al conocimiento del público; millones comenzaron a experimentar de la noche a la mañana' },
            { 'Año': '2023 (T1)', 'Hito': 'El título "Prompt Engineer" alcanza ofertas de $300K+; el OED añade "prompt" como verbo', 'Por qué importa': 'Definió el prompt engineering como una profesión reconocida y una habilidad con nombre' },
            { 'Año': '2023 (mar)', 'Hito': 'Lanzamiento de GPT-4; prompting multimodal con imágenes', 'Por qué importa': 'Extendió el prompt engineering más allá del texto a inputs visuales y context windows grandes' },
            { 'Año': '2023', 'Hito': 'Frameworks formalizados: CRAFT, CO-STAR, SPECS, RISEN; guías oficiales de OpenAI y Google', 'Por qué importa': 'Convirtió el prompt engineering de un arte personal en una práctica enseñable y compartible' },
            { 'Año': '2023–2024', 'Hito': 'Artículo APE (Zhou et al.) y framework DSPy — prompts optimizados por IA', 'Por qué importa': 'Los LLMs demostraron poder escribir prompts tan bien como los humanos; la optimización automática de prompts se volvió práctica' },
            { 'Año': '2024', 'Hito': 'Modelos clase Llama 3; context windows superan 1M tokens (Gemini 3.5 Pro)', 'Por qué importa': 'LLMs de código abierto para despliegues privados; el contexto masivo desplazó el foco hacia el context engineering' },
            { 'Año': '2025–2026', 'Hito': 'El context design y la orquestación multi-agente reemplazan el simple ajuste de prompts', 'Por qué importa': 'El prompting se convierte en una capa en un contexto compuesto — se requiere pensamiento a nivel de sistema' },
          ],
        },

        todayPractice: {
          title: 'Cómo la historia da forma a las mejores prácticas actuales',
          content: [
            'Cada fase de la evolución del prompt engineering dejó un depósito duradero en la práctica actual. La era de GPT-3 nos dio el insight fundamental de que el comportamiento del modelo está moldeado por la estructura del input — no solo por el contenido. La era Chain-of-Thought nos dio andamiajes de razonamiento explícito: prompting paso a paso, prompt chaining y enfoques tree-of-thought. La era de los frameworks nos dio plantillas reutilizables que codifican las mejores prácticas sin requerir que cada profesional las descubra desde cero.',
            'La era RAG y context design nos dio la comprensión de que los prompts no existen de forma aislada — se componen con datos recuperados, instrucciones del sistema y outputs de herramientas para formar un contexto completo.',
          ],
          items: [
            'Técnicas de razonamiento de 2022 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] y [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            'Desarrollo de frameworks de 2023 → [Frameworks: Which Prompt Framework Should You Use?]',
            'Crecimiento del context window → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'Economía de tokens a través de generaciones de modelos → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG como complemento del prompting puro → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: La evolución del prompt engineering',
          faqs: [
            {
              q: '¿Quién acuñó por primera vez el término "prompt engineering"?',
              a: 'El origen exacto es debatido. El término apareció en contextos de investigación ya en 2021 y ganó un uso más amplio a lo largo de 2022. Richard Socher es mencionado en algunos comentarios como alguien que ayudó a enmarcar el concepto públicamente, aunque no se le atribuye a ninguna persona en concreto haberlo inventado.',
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
              a: 'No. La disciplina ha cambiado, no ha desaparecido. A medida que los modelos crecen en capacidad, el trabajo pasa de los trucos de sintaxis y los hacks de formato al context design — estructurar inputs, gestionar la recuperación y componer outputs de herramientas. El título de trabajo "Prompt Engineer" se está estrechando, pero la habilidad subyacente está integrada en cada rol que usa IA: desarrollador, analista, marketer, investigador.',
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
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'من ⁨GPT-2⁩ حتى اليوم: كيف تطورت هندسة البرومبت',
      seoTitle: 'هندسة البرومبت: ⁨7⁩ مراحل من ⁨GPT-3⁩ إلى تصميم السياق',
      intro: 'تطورت هندسة البرومبت من تجارب غير رسمية حول GPT-3 في 2020 إلى تخصص منظّم مع تقنيات وأطر عمل مُسمَّاة بحلول 2026. هذا الخط الزمني يتتبع التطورات الرئيسية وأوراق البحث ونقاط التحول التي جعلت من البرومبت مهارة أساسية.',
      metaDescription: 'هندسة البرومبت مرّت بـ⁨7⁩ مراحل من ⁨GPT-3⁩ (⁨2020⁩) إلى تصميم السياق (⁨2026⁩). خط زمني شامل مع أكثر من ⁨12⁩ استشهاداً بحثياً وأساطير مدحوضة وتحليل عميق.',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '١٠ دقائق للقراءة',
      educationalLevel: 'مبتدئ',
      next_refresh_due: '2026-09-03',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'هل ماتت هندسة البرومبت؟ كيف تطورت إلى تصميم السياق (2026)',
        description: 'هندسة البرومبت مرّت بـ7 مراحل مستقلة من GPT-3 (2020) إلى تصميم السياق (2026). خط زمني كامل مع 12+ استشهادًا بحثيًا وتحليل لماذا تحوّل التخصص لكنه لم يختفِ.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'ar',
        keywords: ['تاريخ هندسة البرومبت', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'هندسة السياق', 'خط زمني لهندسة البرومبت', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      sections: {
        definition: {
          title: 'كيف تطورت هندسة البرومبت: نظرة عامة موجزة',
          content: [
            '**تطورت هندسة البرومبت من تلاعب نصي غير رسمي بالتجربة والخطأ حول GPT-3 في 2020 إلى تخصص منظّم مع تقنيات وأطر عمل وأدوات مُسمَّاة بحلول 2026.** القوس يمتد عبر خمس مراحل: التجارب الأولى للـfew-shot، ولحظة ChatGPT التي أحضرت المهارة إلى الوعي العام، وتطوير تقنيات الاستدلال المنظّم، وصعود تحسين البرومبتات التلقائي، والتحوّل الحالي نحو تصميم السياق.',
            'لم ينشأ التخصص من ورقة بحثية أو شركة واحدة. نما من التقاء البحث (few-shot learning وchain-of-thought reasoning وRAG) ومجتمعات الممارسين الذين شاركوا مجموعات برومبتات عبر الإنترنت والتوفر العلني المفاجئ لنماذج قوية جعل البرومبت الجيد مجزيًا على الفور. بحلول 2026، لم تعد هندسة البرومبت حيلة متخصصة — بل مهارة أساسية لكل من يعمل مع أنظمة الذكاء الاصطناعي.',
          ],
        },
        tldr: {
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
          title: 'قبل أن تكتسب هندسة البرومبت اسمًا (قبل 2020)',
          content: [
            'قبل وجود مصطلح "هندسة البرومبت"، كان الباحثون يتلاعبون بمدخلات النماذج للحصول على مخرجات أفضل — لكنهم لم يسمّوا ذلك هكذا. النماذج الأولى المبنية على المحوّل كـGPT-2 (2019، OpenAI) وBERT (2018، Google) كانت تُستخدم عبر نص إدخال مختار بعناية، لكن الممارسة كانت تُعامَل كجزء من معالجة البيانات المسبقة، لا كمهارة قائمة بذاتها.',
            'GPT-2، الصادر في فبراير 2019، كان نموذج 1.5 مليار معامل قادرًا على إكمال النصوص بطرق متسقة بشكل مدهش. لاحظ الباحثون والممارسون الأوائل أن صياغة المدخلات تُغيّر جودة الإكمال جذريًا — لكن لم يكن ثمة أطر عمل أو مصطلحات أو مجتمعات مبنية حول هذه الملاحظة. البرومبتات كانت مدخلات لا نتاجات هندسية.',
          ],
        },
        gpt3: {
          title: '2020: GPT-3 وثورة الـfew-shot',
          content: [
            '**التاريخ الحديث لهندسة البرومبت يبدأ فعليًا مع GPT-3.** في مايو 2020، أصدرت OpenAI GPT-3، نموذج 175 مليار معامل، مع ورقة Brown et al. الرائدة "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)". أثبتت الورقة أنه بتضمين أمثلة قليلة على المهمة المطلوبة مباشرةً في البرومبت — دون تحديثات على أوزان النموذج — تحسّن الأداء في المهام اللاحقة بشكل جذري.',
            'كان هذا البذرة لهندسة البرومبت كتخصص. أدرك الباحثون والمطورون أن نفس النموذج يمكن تحويله إلى مترجم أو مُلخِّص أو مولّد كود أو نظام أسئلة وأجوبة بمجرد تغيير طريقة كتابة البرومبت. النموذج لا يحتاج إعادة تدريب — يحتاج برومبتًا أفضل. هذه الرؤية أعادت تعريف البرومبت: ليس مجرد مدخلات، بل نتاج تصميم.',
            'أفاد Brown et al. بأن الأداء في few-shot كان يتحسّن بشكل منتظم مع حجم النموذج. هذا جعل جودة البرومبت متغيرًا يمكن للممارسين — لا الباحثين فحسب — التحكم فيه.',
          ],
        },
        skill: {
          title: '2021 – أوائل 2022: من حيل البرومبت إلى مهارة معترف بها',
          content: [
            'بين 2021 وأوائل 2022، انتقلت صياغة البرومبتات من أوراق البحث إلى مجتمعات الممارسين. ظهرت مستودعات GitHub مع مجموعات برومبتات مُنتقاة — قوائم "awesome-prompts" تشارك ما نجح في مساعدة الترميز والتلخيص والكتابة الإبداعية. مجموعات البرومبتات، التي شُوركت على Twitter وReddit، أصبحت أصولًا مجتمعية.',
            'بدأ مصطلح "prompt engineering" بالظهور بتكرار أكبر في أوراق البحث ومنشورات المدونات وأوصاف الوظائف خلال هذه الفترة. قدّمت ورقة InstructGPT من OpenAI (Ouyang et al., 2022) نماذج مضبوطة بـRLHF تستجيب بشكل أكثر موثوقية للتعليمات باللغة الطبيعية.',
          ],
        },
        cot: {
          title: '2022: Chain-of-Thought وبرومبتات الاستدلال',
          content: [
            '**كان تقديم برومبت Chain-of-Thought (CoT) في 2022 أهم تطور تقني في التاريخ القصير للتخصص.** نشر Wei et al. (Google Brain) "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"، مُثبتًا أن مطالبة النموذج بالتفكير خطوة بخطوة قبل الإجابة يحسّن الأداء جذريًا في مهام الحساب والاستدلال والرياضيات الرمزية. في نتيجة بارزة، حسّن برومبت chain-of-thought دقة PaLM على معيار GSM8K الرياضي الابتدائي من 17.9% إلى 58% — مكسب تحقق بمجرد تغيير هيكل البرومبت، دون تدريب إضافي للنموذج.',
            'تبعت تقنيات مرتبطة بسرعة. قدّم Zhou et al. برومبت least-to-most الذي يُفكّك المشاكل المعقدة إلى تسلسل من المشاكل الفرعية الأبسط المحلولة بالترتيب.',
          ],
        },
        chatgpt: {
          title: 'أواخر 2022–2023: لحظة ChatGPT ومسمّى وظيفي "مهندس البرومبت"',
          content: [
            '**أطلق ChatGPT في 30 نوفمبر 2022 غيّر بين عشية وضحاها الملف العام لهندسة البرومبت.** وصل ChatGPT إلى مليون مستخدم في أيامه الخمسة الأولى و100 مليون مستخدم نشط شهريًا في يناير 2023.',
            'في أوائل 2023، ظهر مسمّى "مهندس البرومبت" كوظيفة برواتب مُبلَّغ عنها تتراوح بين 175,000–335,000 دولار في شركات كـAnthropic.',
          ],
        },
        gpt4: {
          title: '2023: GPT-4 والبرومبت متعدد الوسائط وأطر العمل',
          content: [
            'وسّع إطلاق GPT-4 في مارس 2023 هندسة البرومبت في اتجاهين في آنٍ واحد: نوافذ سياق أكبر (حتى 128K رمز في الإصدارات اللاحقة) ومدخلات متعددة الوسائط.',
            'نفس العام شهد إضفاء الرسمية على أفضل ممارسات هندسة البرومبت. نشرت OpenAI دليلها الرسمي لهندسة البرومبت. قنّن مؤلفون مستقلون أطر عمل — CRAFT وCO-STAR وSPECS وRISEN وTRACE — منحت الممارسين قوالب قابلة للتكرار لهيكلة البرومبتات.',
          ],
        },
        automated: {
          title: '2023–2024: هندسة البرومبت التلقائية وRAG',
          content: [
            'تطور لافت في 2023 كان البحث الذي أظهر أن LLMs تستطيع تحسين البرومبتات بنفس كفاءة البشر. نشر Zhou et al. "Large Language Models Are Human-Level Prompt Engineers" (APE). إطار DSPy من Stanford (2023) ذهب أبعد — مُمكِّنًا المطورين من وصف ما يجب أن يُحقّقه البرومبت وترك النظام يُحسّن الصياغة تلقائيًا.',
            'في آنٍ واحد، أصبح Retrieval-Augmented Generation (RAG) — المُقدَّم أصلًا بواسطة Lewis et al. في Meta في 2020 — نمطًا مركزيًا في أنظمة الذكاء الاصطناعي الإنتاجية.',
          ],
        },
        context: {
          title: '2024–2025: من هندسة البرومبت إلى تصميم السياق',
          content: [
            'بحلول 2024، بدأ إطار جديد يحلّ محل فكرة "كتابة برومبت أفضل" البسيطة. بدأ الممارسون والباحثون يشيرون إلى هندسة السياق — ممارسة تنسيق ما يدخل نافذة السياق الكاملة: system prompt والمستندات المسترجعة ومخرجات الأدوات وسجل المحادثة ومدخلات المستخدم، مُجمَّعة عمدًا لتوجيه سلوك النموذج.',
            'عدة تطورات سرّعت هذا التحوّل. جعلت نماذج فئة Llama 3 من Meta (2024) LLMs مفتوحة المصدر قادرة للنشر الخاص. نمت نوافذ السياق إلى مليون رمز أو أكثر (Gemini 3.5 Pro).',
          ],
        },
        beyond2026: {
          title: '2026 وما بعده: هندسة البرومبت كمحو أمية أساسية',
          content: [
            'اعتبارًا من 2026، يصف البحث والتعليق هندسة البرومبت بشكل متزايد لا كمسمّى وظيفي متخصص، بل كمهارة محو أمية أساسية للعمال المعرفيين الذين يستخدمون أدوات الذكاء الاصطناعي.',
            'انقسم الدور إلى مسارين مستقلين. الأول هو تصميم الأنظمة والسياق. الثاني هو الاستخدام اليومي — القدرة على كتابة برومبتات واضحة ومنظمة.',
            'ما لم يتغيّر، رغم النماذج الأكثر قدرة والأدوات التلقائية، هو المبدأ الجوهري: كلما كان المدخل أوضح وأكثر تنظيمًا، كان المخرج أكثر موثوقية وفائدة.',
          ],
        },
        timeline: {
          title: 'الخط الزمني: المعالم الرئيسية لهندسة البرومبت',
          content: 'الجدول أدناه يلخّص المعالم الرئيسية من 2018 إلى 2026.',
          columns: ['السنة', 'المعلم', 'لماذا يهم'],
          rows: [
            { 'السنة': '2018–2019', 'المعلم': 'نشر BERT (Google) وGPT-2 (OpenAI)', 'لماذا يهم': 'أثبت أن نماذج المحوّل يمكن توجيهها بصياغة المدخلات' },
            { 'السنة': '2020', 'المعلم': 'GPT-3 وBrown et al. "Language Models are Few-Shot Learners"', 'لماذا يهم': 'أسّس few-shot prompting: إعادة كتابة البرومبت تُغيّر سلوك النموذج دون إعادة تدريب' },
            { 'السنة': '2022 (يناير)', 'المعلم': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'لماذا يهم': 'نماذج مدرّبة لاتباع التعليمات — جعلت جودة البرومبت أكثر حسمًا' },
            { 'السنة': '2022 (مايو)', 'المعلم': 'برومبت Chain-of-Thought (Wei et al., Google Brain)', 'لماذا يهم': 'أثبت أن هيكل البرومبت يستطيع استحضار التفكير خطوة بخطوة' },
            { 'السنة': '2022 (نوفمبر)', 'المعلم': 'إطلاق ChatGPT', 'لماذا يهم': 'أحضر هندسة البرومبت إلى الوعي العام' },
            { 'السنة': '2023 (الربع الأول)', 'المعلم': 'مسمّى "مهندس البرومبت" يصل إلى عروض 300,000 دولار+', 'لماذا يهم': 'عرّف هندسة البرومبت كمهنة معترف بها' },
            { 'السنة': '2023 (مارس)', 'المعلم': 'إطلاق GPT-4؛ البرومبت متعدد الوسائط مع الصور', 'لماذا يهم': 'وسّع هندسة البرومبت إلى المدخلات البصرية ونوافذ السياق الكبيرة' },
            { 'السنة': '2023', 'المعلم': 'أطر عمل مُضفى عليها الرسمية: CRAFT وCO-STAR وSPECS وRISEN', 'لماذا يهم': 'حوّل هندسة البرومبت من فن شخصي إلى ممارسة قابلة للتعليم والمشاركة' },
            { 'السنة': '2023–2024', 'المعلم': 'ورقة APE وإطار DSPy — برومبتات مُحسَّنة بالذكاء الاصطناعي', 'لماذا يهم': 'أصبح تحسين البرومبتات التلقائي عمليًا' },
            { 'السنة': '2024', 'المعلم': 'نماذج فئة Llama 3؛ نوافذ السياق تتجاوز 1 مليون رمز', 'لماذا يهم': 'LLMs مفتوحة المصدر؛ السياق الضخم أزاح التركيز نحو هندسة السياق' },
            { 'السنة': '2025–2026', 'المعلم': 'تصميم السياق والتنسيق متعدد الوكلاء', 'لماذا يهم': 'البرومبت يصبح طبقة في سياق مُجمَّع' },
          ],
        },
        todayPractice: {
          title: 'كيف يُشكّل التاريخ أفضل الممارسات الحالية',
          content: [
            'كل مرحلة من مراحل تطور هندسة البرومبت تركت رسوبًا دائمًا في الممارسة الحالية.',
            'أعطتنا حقبة RAG وتصميم السياق الفهم القائل بأن البرومبتات لا توجد بمعزل عن غيرها — بل تتركّب مع البيانات المسترجعة وتعليمات النظام ومخرجات الأدوات لتشكيل سياق كامل.',
          ],
          items: [
            'تقنيات الاستدلال من 2022 → [التقنيات: برومبت Chain-of-Thought] و[التقنيات: شجرة الأفكار وReAct]',
            'تطوير أطر العمل من 2023 → [أطر العمل: أي إطار برومبت يجب استخدامه؟]',
            'نمو نافذة السياق → [الأساسيات: نوافذ السياق موضّحة]',
            'اقتصاد الرموز → [الأساسيات: الرموز والتكاليف والحدود]',
            'RAG كمكمّل للبرومبت المحض → [التقنيات: RAG موضّح]',
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة: تطور هندسة البرومبت',
          faqs: [
            {
              q: 'من صاغ مصطلح "هندسة البرومبت" أول مرة؟',
              a: 'الأصل محلّ نقاش. ظهر المصطلح في سياقات بحثية في 2021 واكتسب استخدامًا أوسع خلال 2022.',
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
              a: 'لا. التخصص تغيّر، لم يختفِ. مع نمو قدرات النماذج، ينتقل العمل إلى تصميم السياق. المهارة الجوهرية مدمجة في كل دور يستخدم الذكاء الاصطناعي.',
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
      },
    },
    pt: {
      theme: 'Fundamentals',
      title: 'De GPT-2 até hoje: Como evoluiu o Prompt Engineering',
      seoTitle: 'O prompt engineering está morto? Sua evolução em 2026',
      intro: 'O prompt engineering evoluiu de experimentos informais em torno do GPT-3 em 2020 para uma disciplina estruturada com técnicas e frameworks nomeados até 2026. Esta linha do tempo traça os avanços-chave, os artigos de pesquisa e os pontos de inflexão que transformaram o prompting em uma habilidade fundamental.',
      metaDescription: 'O prompt engineering passou por 7 fases desde o GPT-3 (2020) até o context design (2026). Linha do tempo com citações de pesquisa e mitos desmentidos.',
      publishDate: '2026-03-01',
      readTime: '10 min de leitura',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'O prompt engineering está morto? Como evoluiu para o context design (2026)',
        description: 'O prompt engineering passou por 7 fases distintas desde o GPT-3 (2020) até o context design (2026). Linha do tempo completa com 12+ citações de pesquisa e análise de por que a disciplina se transformou, mas não desapareceu.',
        datePublished: '2026-03-01',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'pt-BR',
        keywords: ['história do prompt engineering', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'linha do tempo do prompt engineering', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      sections: {
        definition: {
          title: 'Como o prompt engineering evoluiu: uma visão geral',
          content: [
            '**O prompt engineering evoluiu de uma manipulação de texto informal por tentativa e erro em torno do GPT-3 em 2020 para uma disciplina estruturada com técnicas, frameworks e ferramentas nomeados até 2026.** O arco abrange cinco fases: os primeiros experimentos de few-shot, o momento ChatGPT que trouxe a habilidade ao conhecimento do público, o desenvolvimento de técnicas de raciocínio estruturado, a ascensão da otimização automática de prompts e a atual mudança para o context design.',
            'A disciplina não surgiu de um único artigo ou empresa. Cresceu a partir da confluência da pesquisa (few-shot learning, chain-of-thought reasoning, RAG), comunidades de profissionais que compartilhavam coleções de prompts online e a repentina disponibilidade pública de modelos poderosos que tornou o bom prompting imediatamente recompensador. Em 2026, o prompt engineering não é mais um truque de nicho — é uma habilidade básica para qualquer pessoa que trabalha com sistemas de IA.',
          ],
        },

        tldr: {
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
          title: 'Antes de o prompt engineering ter um nome (antes de 2020)',
          content: [
            'Antes de existir o termo "prompt engineering", os pesquisadores já manipulavam os inputs dos modelos para obter melhores outputs — apenas não chamavam assim. Os primeiros modelos transformer como GPT-2 (2019, OpenAI) e BERT (2018, Google) eram usados por meio de texto de entrada cuidadosamente escolhido, mas a prática era tratada como parte do pré-processamento de dados, não como uma habilidade por si só.',
            'O GPT-2, publicado em fevereiro de 2019, era um modelo de 1,5 bilhão de parâmetros que conseguia completar texto de formas surpreendentemente coerentes. Pesquisadores e primeiros profissionais notaram que a redação de um input mudava drasticamente a qualidade do complemento — mas ainda não existia nenhum framework, nenhuma terminologia nem nenhuma comunidade construída em torno dessa observação. Os prompts eram inputs, não artefatos de engenharia.',
          ],
        },

        gpt3: {
          title: '2020: GPT-3 e o avanço do few-shot',
          content: [
            '**A história moderna do prompt engineering começa efetivamente com o GPT-3.** Em maio de 2020, a OpenAI publicou o GPT-3, um modelo de 175 bilhões de parâmetros, junto com o artigo pioneiro de Brown et al., "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)". O artigo demonstrou que ao incluir alguns exemplos da tarefa desejada diretamente no prompt — sem atualizar os pesos do modelo — o desempenho em tarefas posteriores melhorava drasticamente.',
            'Essa foi a semente do prompt engineering como disciplina. Pesquisadores e desenvolvedores perceberam que o mesmo modelo podia se tornar um tradutor, um sumarizador, um gerador de código ou um sistema de perguntas e respostas simplesmente mudando como o prompt era escrito. O modelo não precisava de retreinamento — precisava de um prompt melhor. Esse insight reformulou o que era um prompt: não apenas um input, mas um artefato de design.',
            'Brown et al. relataram que o desempenho em few-shot escalava de forma consistente com o tamanho do modelo. Isso tornou a qualidade do prompt uma variável que os profissionais — não apenas os pesquisadores — podiam controlar.',
            'Consulte [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] para um guia prático da técnica que o GPT-3 tornou famosa.',
          ],
        },

        skill: {
          title: '2021–início de 2022: De truques de prompt a uma habilidade reconhecida',
          content: [
            'Entre 2021 e início de 2022, a elaboração de prompts passou dos artigos de pesquisa para as comunidades de profissionais. Repositórios no GitHub com coleções de prompts curadas apareceram — listas no estilo "awesome-prompts" que compartilhavam o que funcionava para assistência em codificação, sumarização e escrita criativa. As coleções de prompts, compartilhadas no Twitter e no Reddit, tornaram-se ativos comunitários.',
            'O termo "prompt engineering" começou a aparecer com mais frequência em artigos de pesquisa, postagens de blog e descrições de vagas durante esse período. O artigo do InstructGPT da OpenAI (Ouyang et al., 2022) introduziu modelos ajustados com RLHF que respondiam de forma muito mais confiável a instruções em linguagem natural — tornando a qualidade do prompt ainda mais determinante. Em meados de 2022, ficou claro que essa era uma habilidade transferível, não apenas uma curiosidade de pesquisadores.',
          ],
        },

        cot: {
          title: '2022: Chain-of-Thought e prompts de raciocínio',
          content: [
            '**A introdução do prompting Chain-of-Thought (CoT) em 2022 foi o desenvolvimento técnico mais significativo na breve história da disciplina.** Wei et al. (Google Brain) publicaram "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", demonstrando que pedir a um modelo que raciocine passo a passo antes de responder melhorava drasticamente o desempenho em tarefas de aritmética, raciocínio de senso comum e raciocínio simbólico. Em um resultado destacado, o prompting chain-of-thought melhorou a precisão do PaLM no benchmark GSM8K de matemática do ensino fundamental de 17,9% para 58% — um ganho obtido puramente mudando a estrutura do prompt, sem treinamento adicional do modelo.',
            'Técnicas relacionadas seguiram rapidamente. Zhou et al. introduziram o prompting least-to-most, que decompunha problemas complexos em uma sequência de subproblemas mais simples resolvidos em ordem. Essas abordagens transformaram o prompt engineering de um exercício de formatação em uma ferramenta para elicitar raciocínio estruturado de modelos que não foram explicitamente treinados para raciocinar dessa forma.',
            'Para o guia completo de técnicas, consulte [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] e [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
          ],
        },

        chatgpt: {
          title: 'Final de 2022–2023: O momento ChatGPT e o cargo de "Prompt Engineer"',
          content: [
            '**O lançamento do ChatGPT em 30 de novembro de 2022 mudou da noite para o dia o perfil público do prompt engineering.** O ChatGPT alcançou um milhão de usuários em seus primeiros cinco dias e 100 milhões de usuários ativos mensais em janeiro de 2023. Em questão de dias, milhões de pessoas estavam experimentando com prompts e descobrindo que seus resultados variavam enormemente dependendo de como formulavam as solicitações. A mídia tecnológica cobriu o "prompt engineering" como uma habilidade que valia a pena aprender.',
            'No início de 2023, "prompt engineer" apareceu como cargo com salários relatados de US$ 175.000–335.000 em empresas como a Anthropic. O papel atraiu atenção significativa da mídia. O consenso na época: era um papel de transição, parte design de interface humano-computador, parte expertise no assunto, parte controle de qualidade.',
          ],
        },

        gpt4: {
          title: '2023: GPT-4, prompting multimodal e frameworks',
          content: [
            'O lançamento do GPT-4 em março de 2023 expandiu o prompt engineering em duas direções simultaneamente: context windows maiores (até 128K tokens em versões posteriores) e inputs multimodais. Os profissionais agora podiam incluir imagens nos prompts junto com texto, abrindo o prompt engineering para tarefas visuais — descrever imagens, comparar diagramas, anotar gráficos.',
            'O mesmo ano viu a formalização das melhores práticas de prompt engineering. A OpenAI publicou seu guia oficial de prompt engineering. O Google Cloud publicou sua própria documentação de prompt engineering. Autores independentes codificaram frameworks — CRAFT, CO-STAR, SPECS, RISEN, TRACE — que deram aos profissionais templates repetíveis para estruturar prompts.',
            'Esses frameworks representaram a maturação do prompt engineering de uma habilidade pessoal para uma prática ensinável e compartilhável. Consulte [Frameworks: Which Prompt Framework Should You Use?] para um guia de seleção.',
          ],
        },

        automated: {
          title: '2023–2024: Prompt engineering automatizado e RAG',
          content: [
            'Um desenvolvimento notável em 2023 foi a pesquisa que mostrava que os LLMs podiam otimizar prompts tão bem quanto os humanos. Zhou et al. publicaram "Large Language Models Are Human-Level Prompt Engineers" (APE), demonstrando que um LLM encarregado de gerar e avaliar candidatos de prompt podia igualar ou superar os prompts escritos por humanos em tarefas de benchmark. O framework DSPy da Stanford (2023) foi mais longe — permitindo que desenvolvedores descrevessem o que um prompt deveria alcançar e deixassem o sistema otimizar a redação automaticamente.',
            'Simultaneamente, a Retrieval-Augmented Generation (RAG) — originalmente introduzida por Lewis et al. na Meta em 2020 — tornou-se um padrão central nos sistemas de IA em produção. O RAG injetava documentos recuperados diretamente no contexto do prompt, fundamentando os outputs do modelo em fontes reais e atualizadas. Isso deslocou a ênfase no prompt engineering de "como faço o modelo saber isso?" para "como estruturo o contexto para que o modelo o use corretamente?"',
          ],
        },

        context: {
          title: '2024–2025: Do prompt engineering ao context design',
          content: [
            'Em 2024, um novo framework começou a deslocar a simples ideia de "escrever um prompt melhor". Profissionais e pesquisadores começaram a se referir ao context engineering — a prática de orquestrar o que entra no context window completo: o system prompt, os documentos recuperados, os outputs das ferramentas, o histórico de conversa e o input do usuário, todos compostos deliberadamente para guiar o comportamento do modelo. O prompt não era mais um artefato independente; era uma camada em um contexto projetado.',
            'Vários desenvolvimentos aceleraram essa mudança. Os modelos da família Llama 3 da Meta (2024) tornaram disponíveis LLMs de código aberto capazes para implantações privadas. Os context windows cresceram para 1 milhão de tokens ou mais (Gemini 3.5 Pro). Frameworks multi-agente como LangChain e AutoGen transformaram o prompting em orquestração.',
          ],
        },

        beyond2026: {
          title: '2026 e além: O prompt engineering como alfabetização fundamental',
          content: [
            'A partir de 2026, pesquisas e comentários descrevem cada vez mais o prompt engineering não como um cargo de nicho, mas como uma habilidade de alfabetização fundamental para trabalhadores do conhecimento que usam ferramentas de IA. Artigos acadêmicos enquadram o prompting estruturado junto com leitura, escrita e cálculo como uma competência básica para trabalhar com sistemas de IA generativa.',
            'O papel se dividiu em duas vias distintas. A primeira é o design de sistemas e contextos — a engenharia de sistemas de IA em produção onde os prompts fazem parte de uma arquitetura mais ampla envolvendo recuperação, agentes e pipelines de avaliação. A segunda é o uso cotidiano — a capacidade de escrever prompts claros e estruturados que produzam outputs úteis sem conhecer a arquitetura subjacente.',
            'O que não mudou, apesar dos modelos mais capazes e das ferramentas automatizadas, é o princípio fundamental: quanto mais claro e estruturado for o input, mais confiável e útil será o output.',
          ],
        },

        timeline: {
          title: 'Linha do tempo: Marcos-chave do prompt engineering',
          content: 'A tabela abaixo resume os marcos-chave de 2018 a 2026 — os eventos, artigos e lançamentos de modelos que moldaram como o prompt engineering evoluiu para sua forma atual.',
          columns: ['Ano', 'Marco', 'Por que importa'],
          rows: [
            { 'Ano': '2018–2019', 'Marco': 'Publicação do BERT (Google) e GPT-2 (OpenAI)', 'Por que importa': 'Demonstrou que modelos transformer podiam ser guiados pela formulação do input — mas ainda sem disciplina formal' },
            { 'Ano': '2020', 'Marco': 'GPT-3 e Brown et al. "Language Models are Few-Shot Learners"', 'Por que importa': 'Estabeleceu o few-shot prompting como paradigma: reescrever o prompt muda o comportamento do modelo sem retreinamento' },
            { 'Ano': '2022 (jan)', 'Marco': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', 'Por que importa': 'Modelos treinados para seguir instruções — tornaram a qualidade do prompt muito mais determinante' },
            { 'Ano': '2022 (mai)', 'Marco': 'Chain-of-Thought prompting (Wei et al., Google Brain)', 'Por que importa': 'Demonstrou que a estrutura do prompt podia elicitar raciocínio passo a passo — transformou o prompting em andaimento cognitivo' },
            { 'Ano': '2022 (nov)', 'Marco': 'Lançamento do ChatGPT', 'Por que importa': 'Trouxe o prompt engineering ao conhecimento do público; milhões começaram a experimentar da noite para o dia' },
            { 'Ano': '2023 (T1)', 'Marco': 'O cargo "Prompt Engineer" alcança ofertas de US$ 300K+; o OED adiciona "prompt" como verbo', 'Por que importa': 'Definiu o prompt engineering como uma profissão reconhecida e uma habilidade nomeada' },
            { 'Ano': '2023 (mar)', 'Marco': 'Lançamento do GPT-4; prompting multimodal com imagens', 'Por que importa': 'Estendeu o prompt engineering além do texto para inputs visuais e context windows grandes' },
            { 'Ano': '2023', 'Marco': 'Frameworks formalizados: CRAFT, CO-STAR, SPECS, RISEN; guias oficiais da OpenAI e do Google', 'Por que importa': 'Transformou o prompt engineering de uma arte pessoal em uma prática ensinável e compartilhável' },
            { 'Ano': '2023–2024', 'Marco': 'Artigo APE (Zhou et al.) e framework DSPy — prompts otimizados por IA', 'Por que importa': 'LLMs demonstraram poder escrever prompts tão bem quanto humanos; a otimização automática de prompts tornou-se prática' },
            { 'Ano': '2024', 'Marco': 'Modelos família Llama 3; context windows superam 1M tokens (Gemini 3.5 Pro)', 'Por que importa': 'LLMs de código aberto para implantações privadas; o contexto massivo deslocou o foco para o context engineering' },
            { 'Ano': '2025–2026', 'Marco': 'O context design e a orquestração multi-agente substituem o simples ajuste de prompts', 'Por que importa': 'O prompting torna-se uma camada em um contexto composto — é necessário pensamento em nível de sistema' },
          ],
        },

        todayPractice: {
          title: 'Como a história molda as melhores práticas atuais',
          content: [
            'Cada fase da evolução do prompt engineering deixou um depósito duradouro na prática atual. A era do GPT-3 nos deu o insight fundamental de que o comportamento do modelo é moldado pela estrutura do input — não apenas pelo conteúdo. A era Chain-of-Thought nos deu andaimentos de raciocínio explícito: prompting passo a passo, prompt chaining e abordagens tree-of-thought. A era dos frameworks nos deu templates reutilizáveis que codificam as melhores práticas sem exigir que cada profissional as descubra do zero.',
            'A era RAG e context design nos deu a compreensão de que os prompts não existem de forma isolada — são compostos com dados recuperados, instruções do sistema e outputs de ferramentas para formar um contexto completo.',
          ],
          items: [
            'Técnicas de raciocínio de 2022 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning] e [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            'Desenvolvimento de frameworks de 2023 → [Frameworks: Which Prompt Framework Should You Use?]',
            'Crescimento do context window → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            'Economia de tokens ao longo das gerações de modelos → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            'RAG como complemento ao prompting puro → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: A evolução do prompt engineering',
          faqs: [
            {
              q: 'Quem cunhou pela primeira vez o termo "prompt engineering"?',
              a: 'A origem exata é debatida. O termo apareceu em contextos de pesquisa já em 2021 e ganhou uso mais amplo ao longo de 2022. Richard Socher é mencionado em alguns comentários como alguém que ajudou a enquadrar o conceito publicamente, embora não se atribua a nenhuma pessoa específica tê-lo inventado.',
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
              a: 'Não. A disciplina mudou, não desapareceu. À medida que os modelos crescem em capacidade, o trabalho passa dos truques de sintaxe e hacks de formatação para o context design — estruturar inputs, gerenciar a recuperação e compor outputs de ferramentas. O cargo de "Prompt Engineer" está se estreitando, mas a habilidade subjacente está integrada em cada função que usa IA: desenvolvedor, analista, profissional de marketing, pesquisador.',
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
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Fondamentaux',
      title: 'Comment l\'ingénierie des prompts a évolué : De GPT-3 au Context Design',
      seoTitle: 'L\'évolution du Prompt Engineering 2020–2026 : De Few-Shot au Context Design',
      intro: 'L\'ingénierie des prompts a évolué d\'expériences informelles autour de GPT-3 en 2020 à une discipline structurée avec des techniques et frameworks nommés en 2026. Cette chronologie retrace les percées clés, les articles de recherche et les points tournants qui ont fait du prompting une compétence fondamentale.',
      metaDescription: 'L\'ingénierie des prompts a évolué en 7 phases de GPT-3 (2020) au context design (2026). Chronologie complète avec 12+ citations, tableau des jalons et analyse de pourquoi la discipline s\'est transformée.',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '10 min de lecture',
      educationalLevel: 'Beginner',
      audience: 'Travailleurs du savoir et développeurs découvrant l\'histoire de l\'ingénierie des prompts et des techniques d\'IA',
      primaryTerm: 'Historique de l\'ingénierie des prompts',
      next_refresh_due: '2026-09-03',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'L\'évolution du Prompt Engineering 2020–2026 : De Few-Shot au Context Design',
        description: 'L\'ingénierie des prompts a évolué en 7 phases de GPT-3 (2020) au context design (2026). Chronologie complète avec 12+ citations et analyse de pourquoi la discipline s\'est transformée.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'fr',
        keywords: ['historique ingénierie prompts', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'ingénierie prompts', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
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
            'Plusieurs développements ont accéléré ce glissement. Les modèles de la classe Llama 3 de Meta (2024) ont rendu des LLM open source capables disponibles pour un déploiement privé, déplaçant une partie du prompt engineering des API cloud vers l\'infrastructure locale. Les fenêtres de contexte ont grandi jusqu\'à 1 million de tokens ou plus (Gemini 3.5 Pro), rendant pratique l\'injection de bases de code entières, de livres ou de collections de documents dans un seul prompt. Les frameworks multi-agents comme LangChain et AutoGen ont transformé le prompting en orchestration — un prompt déclenche un autre modèle, qui déclenche un outil, qui renvoie le contexte au prompt suivant.',
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
            { 'Année': '2024', 'Jalon': 'Modèles de la classe Llama 3 ; fenêtres de contexte dépassant 1M de tokens (Gemini 3.5 Pro)', 'Pourquoi c\'est important': 'LLM open source pour déploiement privé ; le contexte massif a déplacé l\'attention vers l\'ingénierie de contexte' },
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
          id: 'faq',
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
              a: 'Non. La discipline a évolué, elle n\'a pas disparu. À mesure que les modèles deviennent plus capables, le travail passe des astuces syntaxiques vers la conception de contexte — structurer les entrées, gérer la récupération et composer les sorties d\'outils. L\'intitulé « Prompt Engineer » se rétrécit, mais la compétence est intégrée dans chaque rôle utilisant l\'IA : développeur, analyste, marketeur, chercheur. [External: McKinsey 2024 State of AI] a constaté que l\'adoption efficace de l\'IA corrèle toujours fortement avec la façon dont les utilisateurs formulent les tâches pour le modèle.',
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
      freshness_tier: 'semi_annual',
      theme: '基礎',
      title: 'プロンプトエンジニアリングはどのように進化したか：GPT-3からContext Designへ',
      seoTitle: 'プロンプトエンジニアリング進化史 2020–2026：Few-ShottからContext Designへ',
      intro: 'プロンプトエンジニアリングは2020年のGPT-3周辺での非公式な実験から、2026年までに名付けられた技術とフレームワークを備えた構造化された分野へと進化しました。このタイムラインは、プロンプティングをコア スキルにした主要な突破口、研究論文、および転換点を追跡しています。',
      metaDescription: 'プロンプトエンジニアリングは7段階で進化（2020年GPT-3から2026年Context Design）。12以上の研究引用、マイルストーン表、分野が変わったが消滅しなかった理由の分析をまとめた完全タイムライン。',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '10分で読める',
      educationalLevel: 'Beginner',
      audience: 'プロンプトエンジニアリングの歴史とAI技術を学ぶ知識労働者と開発者',
      primaryTerm: 'プロンプトエンジニアリング歴史',
      next_refresh_due: '2026-09-03',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'GPT-2から現在まで：プロンプトエンジニアリングの進化',
        description: '2020年のGPT-3とフューショットプロンプティングから2026年のコンテキストデザインまで、プロンプトエンジニアリングの歴史。主要なマイルストーン、論文、ターニングポイント。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'ja',
        keywords: ['プロンプトエンジニアリング歴史', 'GPT-3 フューショット学習', 'Chain-of-Thought プロンプティング', 'ChatGPT', 'コンテキストエンジニアリング', 'プロンプトエンジニアリング タイムライン', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
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
            'PromptQuorumは同じタスク — CO-STARフレームワークで構造化された — をGPT-5.5、Claude Opus 4.8、Gemini 3.5 Proに送信しました。3つのモデル全てが最初の試行でフォーマット準拠、長さ準拠の回答を生成しました。フレームワークなしの同じタスクは、モデル間で平均2～3回の修正ラウンドが必要でした、有用な出力に到達するために。',
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
            'いくつかの発展がこのシフトを加速しました。Metaのモデル（2024年のLlama 3クラス）はプライベート展開のための有能なオープンソースLLMを利用可能にし、一部のプロンプトエンジニアリングをクラウドAPIからローカルインフラへとシフトしました。コンテキストウィンドウは100万トークン以上（Gemini 3.5 Pro）に成長し、コードベース全体・書籍・ドキュメントコレクション全体を単一のプロンプトに注入することが実用的になりました。LangChainやAutoGenのようなマルチエージェントフレームワークはプロンプティングをオーケストレーションに変えました — 一つのプロンプトが別のモデルをトリガーし、それがツールをトリガーし、それが次のプロンプトにコンテキストを返します。',
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
            { '年': '2024年', 'マイルストーン': 'Llama 3クラスのモデル；コンテキストウィンドウが100万トークンを超える（Gemini 3.5 Pro）', '重要な理由': 'プライベート展開のためのオープンソースLLM；大規模なコンテキストがコンテキストエンジニアリングへの焦点のシフトを加速した' },
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
          id: 'faq',
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
              a: 'いいえ。この分野は変化しましたが、消えてはいません。モデルが高性能になるにつれて、作業は構文のトリックからコンテキスト設計——入力の構造化、検索の管理、ツール出力の構成——へと移行しています。「プロンプトエンジニア」という職種は縮小していますが、スキル自体はAIを使用するすべての役割に組み込まれています：開発者、アナリスト、マーケター、研究者。[External: McKinsey 2024 State of AI] は、効果的なAI導入がモデルへのタスクの伝え方と依然として強く相関していることを発見しました。',
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
      freshness_tier: 'semi_annual',
      theme: '基础知识',
      title: '从GPT-2到今天：提示词工程的演变',
      seoTitle: '提示工程进化2020–2026：从少样本学习到上下文设计完全解析',
      intro: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。',
      metaDescription: '提示工程从2020年GPT-3少样本学习进化到2026年上下文设计，历经7个阶段。完整时间线含12篇以上研究论文、关键里程碑表和学科转变而非消亡的深度分析。',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '阅读约10分钟',
      educationalLevel: 'Beginner',
      audience: '学习提示词工程和AI技术历史的知识工作者和开发人员',
      primaryTerm: '提示词工程历史',
      next_refresh_due: '2026-09-03',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '从GPT-2到今天：提示词工程的演变',
        description: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。关键里程碑、论文和转折点。',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'zh',
        keywords: ['提示工程历史', 'GPT-3 少样本学习', 'Chain-of-Thought 提示', 'ChatGPT', '上下文工程', '提示工程时间线', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
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
            '多项发展加速了这一转变。Meta 的 Llama 3 系列模型（2024年）使强大的开源大型语言模型可用于私有部署，将部分提示词工程从云端 API 转移到本地基础设施。上下文窗口增长到100万词元或更多（Gemini 3.5 Pro），使得将整个代码库、书籍或文档集合注入单个提示词成为可行。LangChain 和 AutoGen 等多智能体框架将提示变成了编排——一个提示词触发另一个模型，该模型触发一个工具，工具将上下文返回给下一个提示词。',
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
            { '年份': '2024年', '里程碑': 'Llama 3 系列模型；上下文窗口超过100万词元（Gemini 3.5 Pro）', '重要意义': '开源大型语言模型支持私有部署；超大上下文窗口将重心转移至上下文工程' },
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
          id: 'faq',
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
              a: '不。这一领域已经演变，但并未消失。随着模型能力的增强，工作重心从语法技巧转向上下文设计——结构化输入、管理检索和组合工具输出。"提示词工程师"这一职称在缩小，但这一技能已融入每个使用AI的角色：开发者、分析师、营销人员、研究者。[External: McKinsey 2024 State of AI] 发现，有效的AI采用仍与用户为模型构建任务的方式密切相关。',
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
  ko: {
      freshness_tier: 'semi_annual',
      theme: '기초',
      title: 'GPT-2부터 현재까지: 프롬프트 엔지니어링의 진화',
      seoTitle: '프롬프트 엔지니어링은 끝났는가? 컨텍스트 설계로의 진화 (2026)',
      intro: '프롬프트 엔지니어링은 2020년 GPT-3를 중심으로 한 비공식적인 실험에서 출발하여, 2026년까지 명명된 기법과 프레임워크를 갖춘 체계적인 학문 분야로 발전하였습니다. 이 타임라인은 프롬프팅을 핵심 기술로 자리잡게 한 주요 돌파구, 연구 논문, 전환점을 추적합니다.',
      metaDescription: '프롬프트 엔지니어링은 GPT-3(2020)부터 컨텍스트 설계(2026)까지 7가지 뚜렷한 단계를 거쳐 왔습니다. 12편 이상의 연구 인용을 포함한 완전한 타임라인, 오해 해소, 그리고 이 분야가 어떻게 변화했지만 사라지지 않았는지를 설명합니다.',
      ogTitle: '프롬프트 엔지니어링의 7단계: GPT-3에서 컨텍스트 설계까지 (2020–2026)',
      twitterTitle: '프롬프트 엔지니어링이 6년 만에 "더 나은 프롬프트 작성"에서 컨텍스트 설계로 발전한 과정',
      publishDate: '2026-03-01',
      dateModified: '2026-05-03',
      readTime: '10분 분량',
      educationalLevel: 'Beginner',
      audience: 'AI 기법의 역사와 프롬프트 엔지니어링을 학습하는 지식 근로자 및 개발자',
      primaryTerm: '프롬프트 엔지니어링 역사',
      next_refresh_due: '2026-09-03',
      leadAnswerBlock: '**프롬프트 엔지니어링은 2020년 GPT-3를 중심으로 한 비공식적인 시행착오에서 출발하여, 2026년까지 명명된 프레임워크, 기법, 도구를 갖춘 체계적인 학문 분야로 발전하였으며, 퓨샷 학습, 연쇄 사고 추론, ChatGPT 주류화 시대, 자동화 최적화, 컨텍스트 설계의 다섯 단계를 거쳤습니다.**',
      quickFacts: [
        '**GPT-3 (2020):** 1750억 개 매개변수 모델이 퓨샷 프롬프팅을 패러다임 전환으로 도입',
        '**연쇄 사고 (2022):** Wei et al.이 프롬프트 구조가 단계별 추론을 활성화할 수 있음을 증명; GSM8K 정확도가 17.9%에서 58%로 향상',
        '**ChatGPT (2022년 11월):** 5일 만에 100만 명, 2023년 1월까지 월간 활성 사용자 1억 명 달성',
        '**취업 시장 (2023):** "프롬프트 엔지니어" 직함이 $175K–$335K 연봉과 함께 등장; OED가 동사로서의 "prompt" 추가',
        '**GPT-4 및 프레임워크 (2023):** 멀티모달 입력과 공식화된 프레임워크(CO-STAR, SPECS, RISEN)가 프롬프팅을 가르칠 수 있는 학문으로 전환',
        '**컨텍스트 설계 (2024–2026):** 오픈소스 LLM, 100만+ 토큰 컨텍스트 창, 에이전트 오케스트레이션이 프롬프트 조정에서 시스템 수준 컨텍스트 엔지니어링으로 초점 이동',
      ],
      toc: [
        { label: '핵심 요점', anchor: 'key-takeaways' },
        { label: '프롬프트 엔지니어링이라는 이름이 생기기 전', anchor: 'before-had-a-name' },
        { label: '2020년: GPT-3와 퓨샷 돌파구', anchor: 'gpt-3-few-shot' },
        { label: '2021–2022년 초: 요령에서 공인된 기술로', anchor: 'tricks-to-skill' },
        { label: '2022년: 연쇄 사고와 추론', anchor: 'chain-of-thought' },
        { label: '2022년 말–2023년: ChatGPT와 직함의 등장', anchor: 'chatgpt-moment' },
        { label: '2023년: GPT-4, 멀티모달 프롬프팅, 프레임워크', anchor: 'gpt-4-frameworks' },
        { label: '2023–2024년: 자동화 프롬프트 엔지니어링과 RAG', anchor: 'automated-rag' },
        { label: '2024–2025년: 컨텍스트 설계', anchor: 'context-design' },
        { label: '2026년 이후: 핵심 리터러시', anchor: 'beyond-2026' },
        { label: '타임라인: 주요 이정표', anchor: 'timeline' },
        { label: '역사가 오늘날의 실무에 미치는 영향', anchor: 'today-practice' },
        { label: '흔한 오해', anchor: 'common-mistakes' },
        { label: '관련 읽기', anchor: 'related-reading' },
        { label: '자주 묻는 질문', anchor: 'faq' },
        { label: '출처', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '프롬프트 엔지니어링은 끝났는가? 컨텍스트 설계로의 진화 (2026)',
        description: '프롬프트 엔지니어링은 GPT-3(2020)부터 컨텍스트 설계(2026)까지 7가지 뚜렷한 단계를 거쳐 왔습니다. 12편 이상의 연구 인용을 포함한 완전한 타임라인, 오해 해소, 그리고 이 분야가 어떻게 변화했지만 사라지지 않았는지를 설명합니다.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-03',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'ko',
        keywords: ['프롬프트 엔지니어링 역사', 'GPT-3 퓨샷 학습', '연쇄 사고 프롬프팅', 'ChatGPT', '컨텍스트 엔지니어링', '프롬프트 엔지니어링 타임라인', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'AI를 활용하는 지식 근로자 및 개발자' },
        about: [
          { '@type': 'Thing', name: '프롬프트 엔지니어링 역사' },
          { '@type': 'Thing', name: '대규모 언어 모델' },
          { '@type': 'Thing', name: 'AI 기법 및 프레임워크' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-3', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'ChatGPT', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', name: '"프롬프트 엔지니어링"이라는 용어를 처음 만든 사람은 누구입니까?', acceptedAnswer: { '@type': 'Answer', text: '정확한 기원은 논란이 있습니다. 이 용어는 2021년 초 연구 맥락에서 등장하였으며 2022년을 거치며 더 널리 사용되었습니다. Richard Socher는 일부 논평에서 이 개념을 공개적으로 정립하는 데 기여한 인물로 언급되지만, 특정 발명자가 공식적으로 인정되지는 않습니다. 프롬프트 엔지니어링에 관한 Wikipedia 문서는 경쟁하는 주장들을 균형 있게 개괄하고 있습니다.' } },
          { '@type': 'Question', name: 'ChatGPT 이후 프롬프트 엔지니어링이 폭발적으로 인기를 얻은 이유는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT는 수백만 명의 비연구자가 코드 없이 즉시 무료로 사용할 수 있는 최초의 범용 AI 모델이었습니다. 잘 만들어진 프롬프트와 모호한 프롬프트 사이의 차이가 눈에 보이고 즉각적으로 결과에 영향을 미쳤습니다. 수백만 명이 동시에 경험한 그 피드백 루프가 프롬프트 엔지니어링을 연구 개념에서 대중적 기술로 전환시켰습니다.' } },
          { '@type': 'Question', name: '연구 논문이 실제 프롬프팅 기법에 어떤 영향을 미쳤습니까?', acceptedAnswer: { '@type': 'Answer', text: '전파 속도는 AI 연구로서는 異常할 정도로 빨랐습니다. 연쇄 사고 프롬프팅(Wei et al., 2022)은 학술 논문에서 수개월 내에 실무자들이 널리 사용하는 기법으로 자리잡았으며, 이는 도구 없이 프롬프트 작성 방식만 바꾸면 되었기 때문입니다. GPT-3 논문(Brown et al., 2020)의 퓨샷 프롬프팅은 API 접근 권한이 있는 누구나 즉시 적용할 수 있었습니다. 기법의 접근성이 확산을 가속화하였습니다.' } },
          { '@type': 'Question', name: '모델이 발전함에 따라 프롬프트 엔지니어링의 중요성이 감소하고 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 더 유능한 모델은 잘 구조화된 프롬프트에 더 잘 반응하지, 덜 반응하지 않습니다. 좋은 프롬프팅의 효과는 모델이 정밀한 지시를 따르는 능력이 높아질수록 증가합니다. 변화한 것은 간단한 작업에 필요한 프롬프트 엔지니어링의 수준입니다. 그러나 복잡한 프로덕션 수준의 출력을 위해서는 구조화된 프롬프팅이 여전히 가장 신뢰할 수 있는 수단입니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링과 컨텍스트 엔지니어링의 차이는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 일반적으로 모델의 출력을 개선하기 위해 텍스트 입력을 설계하는 것을 의미합니다. 컨텍스트 엔지니어링은 더 광범위하고 최근의 개념으로, 모델의 컨텍스트 창에 들어가는 모든 것을 조율하는 것을 의미합니다: 시스템 프롬프트, 검색된 문서, 대화 기록, 도구 출력, 사용자 입력 — 모두 의도적으로 구성됩니다. 컨텍스트 엔지니어링은 프롬프트를 독립적인 결과물이 아닌 설계된 시스템의 하나의 구성 요소로 취급합니다.' } },
          { '@type': 'Question', name: '자동화 도구가 프롬프트 엔지니어링을 이해할 필요를 대체할 것입니까?', acceptedAnswer: { '@type': 'Answer', text: 'DSPy와 같은 자동화 도구는 정의된 목표 내에서 프롬프트 표현을 최적화할 수 있지만, 목표가 무엇인지, 제약 조건이 무엇인지, 성공을 어떻게 평가할지를 지정하는 것은 여전히 사람이 해야 합니다. 프롬프트 엔지니어링 원칙을 이해하는 것은 이러한 도구를 효과적으로 사용하고 잘못된 결과를 진단하는 데 여전히 필요합니다. 자동화는 수동 반복 작업 일부를 제거하지만, 구조적 사고의 필요성은 제거하지 못합니다.' } },
          { '@type': 'Question', name: '2026년에 프롬프트 엔지니어링은 끝났습니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 분야가 이동했을 뿐, 사라진 것이 아닙니다. 모델이 더욱 유능해지면서 작업은 구문 요령과 서식 해킹에서 컨텍스트 설계, 즉 입력 구조화, 검색 관리, 도구 출력 구성으로 이동하였습니다. "프롬프트 엔지니어" 직함은 좁아지고 있지만, 근본적인 기술은 AI를 사용하는 모든 역할, 즉 개발자, 분석가, 마케터, 연구자에게 내재되어 있습니다.' } },
          { '@type': 'Question', name: 'AI 모델이 계속 발전한다면 프롬프트 엔지니어링을 배워야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '네, 하지만 초점은 세대마다 변화합니다. 더 좋은 모델은 정교한 우회 방법(특수 토큰, 반복 강화, 엄격한 서식 제약)의 필요성을 줄이고, 명확한 의도, 구조화된 컨텍스트, 잘 선택된 예제의 효과를 높입니다. 역할, 컨텍스트, 형식, 제약이라는 기본 원칙은 모든 모델 세대에 걸쳐 안정적으로 유지됩니다. 지금 배우면 기술이 만료되는 것이 아니라 축적됩니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링과 파인튜닝의 차이는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 모델의 가중치를 수정하지 않고 모델과 소통하는 방식을 변경합니다. 파인튜닝은 새로운 데이터로 모델을 재학습시켜 동작을 영구적으로 변경합니다. 프롬프트 엔지니어링은 더 빠르고, 저렴하며, 되돌릴 수 있습니다. 파인튜닝은 목표 동작이 일관적이고, 고빈도이거나, 프롬프트로 신뢰성 있게 설명하기 어려울 때 더 적합합니다. 대부분의 팀은 프롬프팅으로 시작하여 특정 작업에서 프롬프팅이 한계에 도달했을 때만 파인튜닝합니다.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '프롬프트 엔지니어링 진화 타임라인: 2018-2026',
        description: '2018년부터 2026년까지 프롬프트 엔지니어링의 진화를 형성한 주요 이정표, 연구 논문, 모델 출시를 연대순으로 정리한 타임라인입니다.',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved#timeline',
        inLanguage: 'ko',
        numberOfItems: 13,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'BERT 및 GPT-2 출시 (2018–2019)', description: '트랜스포머 모델이 입력 표현 방식으로 안내될 수 있음을 입증했지만, 아직 공식적인 학문 분야는 없었음' },
          { '@type': 'ListItem', position: 2, name: 'GPT-3 퓨샷 학습 (2020)', description: '퓨샷 프롬프팅을 하나의 패러다임으로 확립: 프롬프트를 재작성하면 재학습 없이 모델 동작이 변경됨' },
          { '@type': 'ListItem', position: 3, name: 'InstructGPT 및 RLHF (2022년 1월)', description: '지시를 따르도록 훈련된 모델 — 프롬프트 품질의 중요성이 훨씬 높아짐' },
          { '@type': 'ListItem', position: 4, name: '연쇄 사고 프롬프팅 (2022년 5월)', description: '프롬프트 구조가 단계별 추론을 이끌어낼 수 있음을 증명 — 프롬프팅을 인지적 발판으로 전환' },
          { '@type': 'ListItem', position: 5, name: 'ChatGPT 출시 (2022년 11월)', description: '프롬프트 엔지니어링을 대중적 인식으로 가져옴; 수백만 명이 하룻밤 사이에 실험 시작' },
          { '@type': 'ListItem', position: 6, name: '"프롬프트 엔지니어" 직함 등장 (2023년 1분기)', description: '프롬프트 엔지니어링을 공인된 직업과 명명된 기술로 정의' },
          { '@type': 'ListItem', position: 7, name: 'GPT-4 및 멀티모달 프롬프팅 (2023년 3월)', description: '프롬프트 엔지니어링을 텍스트 너머 시각적 입력과 대규모 컨텍스트 창으로 확장' },
          { '@type': 'ListItem', position: 8, name: '프롬프트 엔지니어링 프레임워크 (2023)', description: '프롬프트 엔지니어링을 개인적 기술에서 가르치고 공유할 수 있는 실무로 전환' },
          { '@type': 'ListItem', position: 9, name: '자동화 프롬프트 최적화 (2023–2024)', description: 'LLM이 사람만큼 잘 프롬프트를 작성할 수 있음이 증명; 자동화 프롬프트 최적화가 실용화됨' },
          { '@type': 'ListItem', position: 10, name: '오픈 가중치 모델 및 100만 컨텍스트 (2024)', description: '프라이빗 배포를 위한 오픈소스 LLM; 방대한 컨텍스트가 컨텍스트 엔지니어링으로 초점 이동' },
          { '@type': 'ListItem', position: 11, name: '확장된 사고 및 추론 모드 (2025년 1–2분기)', description: '모델이 단계별 추론을 내재화; 최전선 모델에서 프롬프트 수준 CoT가 선택 사항이 됨' },
          { '@type': 'ListItem', position: 12, name: 'LLaMA 4 MoE 및 1000만 컨텍스트 (2025년 3–4분기)', description: '오픈 가중치 모델이 최전선 수준에 도달; MoE 아키텍처가 셀프호스팅 컴퓨팅 비용 절감' },
          { '@type': 'ListItem', position: 13, name: '컨텍스트 설계를 표준 실무로 (2026)', description: '프롬프팅이 구성된 컨텍스트의 한 레이어가 됨 — 시스템 수준 사고 필요; 프롬프트 엔지니어링 기술이 AI 사용 모든 역할에 내재됨' },
        ],
      },
      sections: {

        definition: {
          id: 'definition',
          title: '프롬프트 엔지니어링의 진화: 간략한 개요',
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
            '"프롬프트 엔지니어링"이라는 용어가 존재하기 전에도 연구자들은 이미 더 나은 출력을 이끌어내기 위해 모델 입력을 조작하고 있었습니다. 다만 그것을 그렇게 부르지 않았을 뿐입니다. GPT-2(2019, OpenAI)와 BERT(2018, Google) 같은 초기 트랜스포머 모델은 신중하게 선택된 입력 텍스트로 사용되었지만, 이 실무는 데이터 전처리의 일부로 취급되었을 뿐 독자적인 기술로 인식되지 않았습니다.',
            '2019년 2월에 출시된 GPT-2는 15억 개 매개변수 모델로, 놀랍도록 일관된 방식으로 텍스트를 완성할 수 있었습니다. 연구자와 초기 실무자들은 입력의 표현 방식이 완성물의 품질을 극적으로 바꾼다는 것을 알아차렸지만, 이 관찰을 중심으로 형성된 프레임워크, 용어, 커뮤니티는 아직 존재하지 않았습니다. 프롬프트는 입력이었을 뿐, 엔지니어링 결과물이 아니었습니다.',
          ],
        },

        gpt3: {
          id: 'gpt-3-few-shot',
          title: '2020년: GPT-3와 퓨샷 돌파구',
          content: [
            '**프롬프트 엔지니어링의 현대적 역사는 사실상 GPT-3에서 시작됩니다.** 2020년 5월, OpenAI는 1750억 개 매개변수 모델 GPT-3를 Brown et al.의 획기적인 논문 "[Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)"와 함께 공개하였습니다. 이 논문은 모델 가중치를 업데이트하지 않고도 원하는 작업의 몇 가지 예제를 프롬프트에 직접 포함하는 것만으로 다운스트림 작업의 성능이 극적으로 향상된다는 것을 보여주었습니다.',
            '이것이 학문 분야로서의 프롬프트 엔지니어링의 씨앗이었습니다. 연구자와 개발자들은 동일한 모델이 프롬프트를 작성하는 방식만 바꿔도 번역기, 요약기, 코드 생성기, 또는 질의응답 시스템으로 전환될 수 있다는 것을 깨달았습니다. 모델은 재훈련이 필요하지 않았습니다. 더 나은 프롬프트가 필요했습니다. 그 통찰이 프롬프트를 재정의하였습니다: 단순한 입력이 아니라 설계 결과물로서.',
            'Brown et al.은 퓨샷 성능이 모델 크기와 일관되게 확장된다고 보고하였습니다: 1750억 개 GPT-3 모델은 테스트된 모든 벤치마크에서 소규모 변형보다 크게 앞섰으며, 규모와 프롬프트 기반 학습이 직접적으로 연결되어 있음을 확립하였습니다. 이로써 프롬프트의 품질은 연구자뿐만 아니라 실무자도 통제할 수 있는 변수가 되었습니다.',
            'GPT-3가 유명하게 만든 기법에 대한 실용적인 가이드는 [기법: 제로샷 vs. 퓨샷: 어떤 접근법이 더 나은 결과를 가져올까?]를 참조하십시오.',
          ],
        },

        skill: {
          id: 'tricks-to-skill',
          title: '2021–2022년 초: 프롬프트 요령에서 공인된 기술로',
          content: [
            '2021년과 2022년 초 사이에 프롬프트 작성은 연구 논문에서 실무자 커뮤니티로 이동하였습니다. "awesome-prompts" 스타일의 목록으로 코딩 지원, 요약, 창의적 글쓰기에 효과적인 것을 공유하는 큐레이션된 프롬프트 컬렉션의 GitHub 저장소가 등장하였습니다. Twitter와 Reddit에서 공유된 프롬프트 컬렉션은 커뮤니티 자산이 되었습니다. [Prompt Engineering Guide](https://www.promptingguide.ai/)는 기법을 체계적으로 분류하는 최초의 전용 참고 자료 중 하나가 되었습니다.',
            '"프롬프트 엔지니어링"이라는 용어는 이 시기 동안 연구 논문, 블로그 게시물, 채용 공고에 더 자주 등장하기 시작하였습니다. OpenAI의 InstructGPT 논문(Ouyang et al., 2022)은 자연어 지시에 훨씬 더 신뢰성 있게 반응하는 RLHF 튜닝 모델을 도입하여 프롬프트 품질의 중요성을 더욱 높였습니다. 2022년 중반에는 이것이 연구자의 호기심이 아닌 전이 가능한 기술이라는 것이 명확해졌습니다.',
          ],
        },

        cot: {
          id: 'chain-of-thought',
          title: '2022년: 연쇄 사고와 추론 프롬프트',
          content: [
            '**2022년 연쇄 사고(CoT) 프롬프팅의 도입은 이 분야의 짧은 역사에서 가장 중요한 기술적 발전이었습니다.** Wei et al.(Google Brain)은 "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"를 발표하여, 답변 전에 단계별로 추론하도록 모델에게 요청하면 산술, 상식적 추론, 기호적 추론 작업의 성능이 극적으로 향상된다는 것을 입증하였습니다. 주목할 만한 결과 중 하나로, 연쇄 사고 프롬프팅은 GSM8K 초등학교 수학 벤치마크에서 PaLM의 정확도를 17.9%에서 58%로 향상시켰으며, 이는 추가적인 모델 훈련 없이 프롬프트 구조만 변경하여 달성한 것이었습니다. 그 함의는 심오하였습니다: 프롬프트의 구조가 다른 추론 동작을 활성화할 수 있었습니다.',
            '관련 기법들이 빠르게 이어졌습니다. Zhou et al.은 복잡한 문제를 순서대로 해결하는 더 간단한 하위 문제들의 시퀀스로 분해하는 최소-최대 프롬프팅을 도입하였습니다. 이러한 접근 방식은 프롬프트 엔지니어링을 서식 연습에서 그렇게 추론하도록 명시적으로 훈련되지 않은 모델에서 구조화된 추론을 이끌어내는 도구로 전환시켰습니다. 프롬프팅은 인지를 위한 발판이 되었습니다.',
            '전체 기법 가이드는 [기법: 연쇄 사고 프롬프팅: AI가 추론 과정을 보이게 하기]와 [기법: 프롬프트 체이닝: 큰 작업을 성공적인 단계들로 나누는 방법]을 참조하십시오.',
          ],
        },

        chatgpt: {
          id: 'chatgpt-moment',
          title: '2022년 말–2023년: ChatGPT의 순간과 프롬프트 엔지니어 직함',
          callouts: [
            {
              type: 'did-you-know',
              label: '알고 계셨습니까',
              text: 'ChatGPT는 2023년 1월에 월간 활성 사용자 1억 명에 도달하였습니다 — 출시 후 불과 두 달 만에 달성한 것입니다. 비교하자면, TikTok은 9개월, Instagram은 2.5년이 걸렸습니다. 이 채택 속도가 프롬프트 엔지니어링이 연구 개념에서 주류 기술로 거의 하룻밤 사이에 전환된 이유입니다.',
            },
          ],
          content: [
            '**2022년 11월 30일 ChatGPT의 출시는 하룻밤 사이에 프롬프트 엔지니어링의 대중적 인지도를 바꿨습니다.** ChatGPT는 첫 5일 만에 100만 명의 사용자에 도달하였으며, 이는 2022년 12월 Twitter에서 OpenAI CEO Sam Altman이 확인한 것입니다. 그리고 Reuters가 인용한 UBS 분석에 따르면 2023년 1월까지 월간 활성 사용자 1억 명에 도달하였습니다. 며칠 만에 수백만 명의 사람들이 프롬프트를 실험하며 요청을 표현하는 방식에 따라 결과가 크게 달라진다는 것을 발견하였습니다. 기술 미디어는 배울 가치가 있는 기술로서 "프롬프트 엔지니어링"을 다루었습니다. Oxford English Dictionary는 2023년에 AI와 관련된 동사로서 "prompt"를 추가하였으며, 이 단어 자체가 여러 순위에서 올해의 단어 후보로 올랐습니다.',
            '2023년 초에는 Anthropic을 포함한 기업들에서 $175,000–$335,000의 연봉과 함께 "프롬프트 엔지니어"가 직함으로 등장하였으며, 이는 널리 인용된 채용 공고에 따른 것입니다. Bloomberg, The Guardian, The Atlantic 모두 프롬프트 엔지니어링이 진정한 직업인지를 다루었습니다. 당시의 합의: 그것은 인간-컴퓨터 인터페이스 설계, 주제 전문 지식, 품질 보증이 혼합된 과도기적 역할이었습니다.',
            '"프롬프트 엔지니어링"이라는 표현의 대중화는 때로 다양한 실무자와 논평가에게 귀속됩니다. Salesforce의 전 수석 과학자 Richard Socher는 일부 논평에서 이 아이디어를 초기에 정립하는 데 도움을 준 인물로 언급됩니다. [프롬프트 엔지니어링에 관한 Wikipedia 문서](https://en.wikipedia.org/wiki/Prompt_engineering)는 용어 기원에 대한 경쟁하는 주장들을 균형 있게 개괄하고 있습니다.',
          ],
        },

        gpt4: {
          id: 'gpt-4-frameworks',
          title: '2023년: GPT-4, 멀티모달 프롬프팅 및 프레임워크',
          content: [
            '2023년 3월 GPT-4의 출시는 프롬프트 엔지니어링을 두 가지 방향으로 동시에 확장하였습니다: 더 큰 컨텍스트 창(이후 버전에서 최대 128K 토큰)과 멀티모달 입력. 실무자들은 이제 텍스트와 함께 프롬프트에 이미지를 포함할 수 있게 되었으며, 프롬프트 엔지니어링이 시각적 작업, 즉 이미지 설명, 다이어그램 비교, 차트 주석 달기에도 적용될 수 있게 되었습니다. Google의 초기 Gemini 모델과 Anthropic의 멀티모달 Claude 버전이 수개월 내에 뒤를 이었습니다.',
            '같은 해에는 프롬프트 엔지니어링 모범 사례의 공식화가 이루어졌습니다. OpenAI는 [공식 프롬프트 엔지니어링 가이드](https://platform.openai.com/docs/guides/prompt-engineering)를 발표하였습니다. Google Cloud는 자체 [프롬프트 엔지니어링 문서](https://cloud.google.com/vertex-ai/generative-ai/docs/prompt-engineering)를 공개하였습니다. 독립 저자들은 CRAFT, CO-STAR, SPECS, RISEN, TRACE와 같은 프레임워크를 체계화하여 실무자들에게 반복 가능한 프롬프트 구조화 템플릿을 제공하고 시행착오에 대한 의존성을 줄였습니다.',
            '이러한 프레임워크들은 프롬프트 엔지니어링이 개인적 기술에서 가르치고 공유할 수 있는 실무로 성숙했음을 나타냈습니다. 프레임워크 선택에 대한 가이드는 [프레임워크: 어떤 프롬프트 프레임워크를 사용해야 합니까?]를, 멀티모달 차원에 대해서는 [기초: 텍스트를 넘어서: 이미지로 프롬프트하는 방법]을 참조하십시오.',
          ],
        },

        automated: {
          id: 'automated-rag',
          title: '2023–2024년: 자동화 프롬프트 엔지니어링과 RAG',
          content: [
            '2023년의 주목할 만한 발전은 LLM이 사람만큼 잘 프롬프트를 최적화할 수 있다는 것을 보여주는 연구였습니다. Zhou et al.은 "Large Language Models Are Human-Level Prompt Engineers"(APE)를 발표하여, 프롬프트 후보를 생성하고 평가하는 임무를 받은 LLM이 벤치마크 작업에서 사람이 작성한 프롬프트와 동등하거나 그것을 능가할 수 있다는 것을 입증하였습니다. Stanford의 DSPy 프레임워크(2023)는 이를 더 발전시켜 개발자가 프롬프트가 달성해야 할 것을 설명하면 시스템이 자동으로 표현을 최적화할 수 있도록 하였습니다.',
            '동시에, 검색 증강 생성(RAG) — 원래 2020년 Meta의 Lewis et al.이 도입한 — 이 프로덕션 AI 시스템의 핵심 패턴이 되었습니다. RAG는 검색된 문서를 프롬프트 컨텍스트에 직접 주입하여, 프롬프트에 모든 필요한 사실을 포함할 필요 없이 실제 최신 출처에 모델 출력을 기반을 두었습니다. 이는 프롬프트 엔지니어링의 강조점을 "모델이 이것을 어떻게 알게 할까?"에서 "컨텍스트를 어떻게 구조화해야 모델이 이것을 올바르게 사용할까?"로 이동시켰습니다.',
            '이 시기의 주요 기법에 대한 내용은 [기법: RAG 설명: AI 답변을 실제 데이터에 기반시키는 방법]과 [기법: 자기 일관성 프롬프팅: AI가 자체 작업을 검토하도록 하기]를 참조하십시오.',
          ],
        },

        context: {
          id: 'context-design',
          title: '2024–2025년: 프롬프트 엔지니어링에서 컨텍스트 설계로',
          content: [
            '2024년까지 새로운 프레임이 "더 나은 프롬프트를 작성하라"는 단순한 아이디어를 대체하기 시작하였습니다. 실무자와 연구자들은 컨텍스트 엔지니어링을 언급하기 시작하였습니다 — 전체 컨텍스트 창에 들어가는 것을 조율하는 실무: 시스템 프롬프트, 검색된 문서, 도구 출력, 대화 기록, 사용자 입력, 모두 의도적으로 모델 동작을 안내하기 위해 구성됩니다. 프롬프트는 더 이상 독립적인 결과물이 아니었습니다; 그것은 설계된 컨텍스트의 하나의 레이어였습니다.',
            '이 전환을 가속화한 여러 발전이 있었습니다. Meta의 Llama 3 계열 모델(2024)은 프라이빗 배포를 위한 유능한 오픈소스 LLM을 제공하여, 일부 프롬프트 엔지니어링을 클라우드 API에서 로컬 인프라로 이동시켰습니다. 컨텍스트 창은 100만 토큰 이상으로 성장하여(Gemini 3.5 Pro), 전체 코드베이스, 책, 또는 문서 컬렉션을 단일 프롬프트에 주입하는 것이 실용화되었습니다. LangChain과 AutoGen 같은 멀티 에이전트 프레임워크는 프롬프팅을 오케스트레이션으로 전환하였습니다 — 하나의 프롬프트가 다른 모델을 트리거하고, 그것이 도구를 트리거하고, 그것이 다음 프롬프트에 컨텍스트를 반환합니다.',
          ],
        },

        beyond2026: {
          id: 'beyond-2026',
          title: '2026년 이후: 핵심 리터러시로서의 프롬프트 엔지니어링',
          callouts: [
            {
              type: 'pro-tip',
              label: '전문가 팁',
              text: '"프롬프트 엔지니어링"에서 "컨텍스트 설계"로의 전환은 단순한 용어 변화가 아닙니다 — 최적화 대상이 달라집니다. 지시의 표현을 조정하는 대신, 컨텍스트 창에 들어가는 것을 설계합니다: 시스템 프롬프트, 검색된 문서, 대화 기록, 도구 출력, 사용자 입력. 프롬프트는 전부가 아니라 하나의 레이어입니다.',
            },
          ],
          content: [
            '2026년 현재, 연구와 논평은 프롬프트 엔지니어링을 틈새 직함이 아닌 AI 도구를 사용하는 지식 근로자의 기본 리터러시 기술로 점점 더 묘사하고 있습니다. 학술 논문은 구조화된 프롬프팅을 생성 AI 시스템 작업의 기본 역량으로 읽기, 쓰기, 계산과 나란히 위치시키고 있습니다.',
            '이 역할은 두 가지 뚜렷한 트랙으로 분화하였습니다. 첫 번째는 시스템 및 컨텍스트 설계로, 프롬프트가 검색, 에이전트, 평가 파이프라인을 포함하는 더 큰 아키텍처의 일부를 형성하는 프로덕션 AI 시스템의 엔지니어링입니다. 두 번째는 일상적 사용으로, 기본 아키텍처를 알지 못해도 유용한 출력을 생성하는 명확하고 구조화된 프롬프트를 작성하는 능력입니다. 두 트랙 모두 동일한 핵심 원칙, 즉 명확한 작업 명세, 적절한 컨텍스트, 제약, 출력 형식에서 이익을 얻습니다.',
            '더 유능한 모델과 자동화 도구에도 불구하고 변하지 않은 것은 근본적인 원칙입니다: 입력이 더 명확하고 구조화될수록, 출력은 더 신뢰할 수 있고 유용합니다. 기법, 용어, 도구는 성숙하였지만, GPT-3 시대의 핵심 통찰은 2026년에도 여전히 유효합니다.',
          ],
        },

        timeline: {
          id: 'timeline',
          title: '타임라인: 프롬프트 엔지니어링의 주요 이정표',
          content: '아래 표는 2018년부터 2026년까지의 주요 이정표를 요약합니다 — 프롬프트 엔지니어링이 현재 형태로 진화하는 데 형태를 부여한 사건, 논문, 모델 출시입니다.',
          columns: ['연도', '이정표', '중요성'],
          rows: [
            { '연도': '2018–2019', '이정표': 'BERT(Google) 및 GPT-2(OpenAI) 출시', '중요성': '트랜스포머 모델이 입력 표현 방식으로 안내될 수 있음을 입증했지만, 아직 공식적인 학문 분야는 없었음' },
            { '연도': '2020', '이정표': 'GPT-3 및 Brown et al. "Language Models are Few-Shot Learners"', '중요성': '퓨샷 프롬프팅을 하나의 패러다임으로 확립: 프롬프트를 재작성하면 재학습 없이 모델 동작이 변경됨' },
            { '연도': '2022년 1월', '이정표': 'InstructGPT / RLHF (Ouyang et al., OpenAI)', '중요성': '지시를 따르도록 훈련된 모델 — 프롬프트 품질의 중요성이 훨씬 높아짐' },
            { '연도': '2022년 5월', '이정표': '연쇄 사고 프롬프팅 (Wei et al., Google Brain)', '중요성': '프롬프트 구조가 단계별 추론을 이끌어낼 수 있음을 증명 — 프롬프팅을 인지적 발판으로 전환' },
            { '연도': '2022년 11월', '이정표': 'ChatGPT 출시', '중요성': '프롬프트 엔지니어링을 대중적 인식으로 가져옴; 수백만 명이 하룻밤 사이에 실험 시작' },
            { '연도': '2023년 1분기', '이정표': '"프롬프트 엔지니어" 직함이 $300K+ 연봉 채용 공고에 등장; OED가 동사로 prompt 추가', '중요성': '프롬프트 엔지니어링을 공인된 직업과 명명된 기술로 정의' },
            { '연도': '2023년 3월', '이정표': 'GPT-4 출시; 이미지를 포함한 멀티모달 프롬프팅', '중요성': '프롬프트 엔지니어링을 텍스트 너머 시각적 입력과 대규모 컨텍스트 창으로 확장' },
            { '연도': '2023', '이정표': '프레임워크 공식화: CRAFT, CO-STAR, SPECS, RISEN; OpenAI와 Google의 공식 가이드', '중요성': '프롬프트 엔지니어링을 개인적 기술에서 가르치고 공유할 수 있는 실무로 전환' },
            { '연도': '2023–2024', '이정표': 'APE 논문 (Zhou et al.) 및 DSPy 프레임워크 — AI 최적화 프롬프트', '중요성': 'LLM이 사람만큼 잘 프롬프트를 작성할 수 있음이 증명; 자동화 프롬프트 최적화가 실용화됨' },
            { '연도': '2024', '이정표': 'Llama 3 계열 모델; 컨텍스트 창이 100만 토큰 초과 (Gemini 3.5 Pro)', '중요성': '프라이빗 배포를 위한 오픈소스 LLM; 방대한 컨텍스트가 컨텍스트 엔지니어링으로 초점 이동' },
            { '연도': '2025년 1–2분기', '이정표': '확장된 사고 / 추론 모드: Claude 4.8 Sonnet, OpenAI o3, DeepSeek R1, Gemini Deep Think', '중요성': '모델이 단계별 추론을 내재화; 최전선 모델에서 프롬프트 수준 CoT가 선택 사항이 됨' },
            { '연도': '2025년 3–4분기', '이정표': 'LLaMA 4 (MoE); 일부 모델에서 컨텍스트 창이 1000만 토큰에 도달', '중요성': '오픈 가중치 모델이 최전선 수준에 도달; MoE 아키텍처가 셀프호스팅 컴퓨팅 비용 절감' },
            { '연도': '2026', '이정표': '컨텍스트 설계와 멀티 에이전트 오케스트레이션이 단순 프롬프트 조정을 대체', '중요성': '프롬프팅이 구성된 컨텍스트의 한 레이어가 됨 — 시스템 수준 사고 필요; 프롬프트 엔지니어링 기술이 AI 사용 모든 역할에 내재됨' },
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
            '2022년의 추론 기법 → [기법: 연쇄 사고 프롬프팅: AI가 추론 과정을 보이게 하기] 및 [기법: 트리 오브 사고 & ReAct: 어려운 문제를 위한 고급 추론]',
            '2023년의 프레임워크 개발 → [프레임워크: 어떤 프롬프트 프레임워크를 사용해야 합니까?]',
            '컨텍스트 창 성장 → [기초: 컨텍스트 창 설명: AI가 잊어버리는 이유]',
            '모델 세대 전반의 토큰 경제학 → [기초: 토큰, 비용 및 한계: AI 프롬프팅의 경제학]',
            '순수 프롬프팅의 보완으로서 RAG → [기법: RAG 설명: AI 답변을 실제 데이터에 기반시키는 방법]',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: 프롬프트 엔지니어링의 진화',
          faqs: [
            {
              q: '"프롬프트 엔지니어링"이라는 용어를 처음 만든 사람은 누구입니까?',
              a: '정확한 기원은 논란이 있습니다. 이 용어는 2021년 초 연구 맥락에서 등장하였으며 2022년을 거치며 더 널리 사용되었습니다. Richard Socher는 일부 논평에서 이 개념을 공개적으로 정립하는 데 기여한 인물로 언급되지만, 특정 발명자가 공식적으로 인정되지는 않습니다.',
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
              a: '아닙니다. 분야가 이동했을 뿐, 사라진 것이 아닙니다. 모델이 더욱 유능해지면서 작업은 구문 요령과 서식 해킹에서 컨텍스트 설계, 즉 입력 구조화, 검색 관리, 도구 출력 구성으로 이동하였습니다. "프롬프트 엔지니어" 직함은 좁아지고 있지만, 근본적인 기술은 AI를 사용하는 모든 역할, 즉 개발자, 분석가, 마케터, 연구자에게 내재되어 있습니다. 효과적인 AI 도입은 여전히 사용자가 모델을 위해 작업을 얼마나 잘 구성하느냐와 강하게 연관됩니다.',
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
          title: '프롬프트 엔지니어링에 대한 흔한 오해',
          mistakes: [
            {
              mistake: '프롬프트 엔지니어링은 더 나은 문장을 작성하는 것에 불과합니다.',
              problem: '이것은 구조적 및 컨텍스트적 차원을 간과합니다. 프롬프트의 효과는 단어 선택뿐만 아니라 역할 할당(모델에게 페르소나 부여), 제약 명세, 출력 형식, 예제 선택에 달려 있으며, 이는 모두 문법과 무관한 구조적 요소입니다.',
              fix: '프롬프트 엔지니어링을 프롬프트가 인터페이스인 시스템을 설계하는 것으로 생각하십시오. 구조에 투자하십시오: 역할 할당("당신은...입니다", "...를 가정하십시오"), 제약 명세("...하지 마십시오", "반드시 포함하십시오"), 출력 형식 정의, 예제 제공. 구조가 종종 표현보다 더 중요합니다.',
            },
            {
              mistake: '더 나은 모델은 프롬프트 엔지니어링을 불필요하게 만듭니다.',
              problem: '더 유능한 모델은 더 유능한 사람과 같습니다 — 명확한 지시에 *더 잘* 반응하지, 더 나쁘게 반응하지 않습니다. 좋은 프롬프팅의 효과는 모델 능력이 향상될수록 복합적으로 증가합니다. 변화하는 것은 필요한 프롬프팅의 *종류*이지, 그것이 필요한지 여부가 아닙니다.',
              fix: '프롬프팅이 AI 작업의 핵심으로 남아 있다고 가정하십시오. 진화하는 것은 필요한 세부 사항과 발판의 수준입니다. 약한 모델에서는 명시적인 단계별 구조가 필요할 수 있습니다. 강한 모델에서는 명확한 한 줄 지시로 충분할 수 있지만, 그 직접성 자체가 프롬프트 엔지니어링의 선택입니다.',
            },
            {
              mistake: '자동화 프롬프트 최적화 도구가 인간의 프롬프트 엔지니어링을 대체할 것입니다.',
              problem: 'DSPy와 같은 자동화 도구는 정의된 목표 내에서 표현을 최적화하는 데 도움이 되지만, 목표, 제약, 성공 기준, 평가 방법을 지정하는 것은 여전히 사람이 해야 합니다. 자동화는 반복 작업의 번거로움을 제거하지만, 모델이 무엇을 해야 하는지에 대한 구조적 사고의 필요성은 제거하지 않습니다.',
              fix: '자동화를 대체물이 아닌 도구로 사용하십시오. 작업을 이해하는 사람이 설계한 잘 구조화된 프롬프트로 시작하십시오. DSPy와 같은 도구를 사용하여 그것을 정제하고 최적화하십시오. 작업 구조에 대한 인간의 판단은 대체 불가능합니다.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '관련 읽기',
          items: [
            { title: '연쇄 사고 프롬프팅: AI가 추론 과정을 보이게 하기', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: '퓨샷 프롬프팅: 예제의 힘', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: '프롬프트 프레임워크: 어떤 모델이 가장 잘 작동합니까?', url: '/prompt-engineering/prompt-frameworks-compared' },
            { title: 'RAG 설명: AI 답변을 실제 데이터에 기반시키는 방법', url: '/prompt-engineering/rag-explained' },
            { title: '컨텍스트 창 설명: AI가 잊어버리는 이유', url: '/prompt-engineering/context-windows' },
            { title: '토큰, 비용 및 한계: AI 프롬프팅의 경제학', url: '/prompt-engineering/tokens-and-costs' },
          ],
        },

        sources: {
          id: 'sources',
          title: '출처',
          items: [
            'Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv preprint arXiv:2005.14165. — 퓨샷 프롬프팅을 패러다임으로 도입한 OpenAI GPT-3 논문.',
            'Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv preprint arXiv:2201.11903. — 단계별 추론 프롬프트에 관한 Google Brain 논문.',
            'Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv preprint arXiv:2203.02155. — RLHF를 통한 지시 따르기에 관한 OpenAI InstructGPT 논문.',
            'Zhou, Y. et al. (2023). "Large Language Models Are Human-Level Prompt Engineers." arXiv preprint arXiv:2211.01910. — LLM이 프롬프트를 최적화하는 것에 관한 Stanford APE 논문.',
            'Lewis, P., et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." Advances in Neural Information Processing Systems. — RAG를 도입한 Meta 논문.',
            'Stiennon, N. et al. (2022). "Summarize, Please! A Study on Prompts for Improving LLM Summarisation." arXiv preprint. — 사실적 정확성을 위한 프롬프트 설계에 관한 연구.',
          ],
        },

      },
    },
  };
