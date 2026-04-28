// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-engineering-history
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'From GPT-2 to Today: How Prompt Engineering Evolved',
            seoTitle: 'How Prompt Engineering Evolved: 2020–2026 Timeline',
      intro: 'The history of prompt engineering from GPT-3 and few-shot prompting in 2020 to context design in 2026. Key milestones, papers, and turning points.',
            metaDescription: 'From GPT-3 few-shot learning to context design: the complete timeline of how prompt engineering became a core AI skill, with key papers and milestones.',
      publishDate: '2026-03-01',
      readTime: '10 min read',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'From GPT-2 to Today: How Prompt Engineering Evolved',
        description: 'The history of prompt engineering from GPT-3 and few-shot prompting in 2020 to context design in 2026. Key milestones, papers, and turning points that shaped the discipline.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved',
        inLanguage: 'en',
        keywords: ['prompt engineering history', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'prompt engineering timeline', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-3' },
          { '@type': 'Thing', name: 'OpenAI GPT-5.5' },
          { '@type': 'Thing', name: 'Anthropic Claude' },
          { '@type': 'Thing', name: 'Google Brain' },
          { '@type': 'Thing', name: 'ChatGPT' },
          { '@type': 'Thing', name: 'PromptQuorum' },
        ],
      },
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
              a: 'No. The discipline has shifted, not disappeared. As models grow more capable, the work moves from syntax tricks and formatting hacks to context design — structuring inputs, managing retrieval, and composing tool outputs. The job title "Prompt Engineer" is narrowing, but the underlying skill is embedded in every role that uses AI: developer, analyst, marketer, researcher. [External: McKinsey 2024 State of AI] found that effective AI adoption still correlates strongly with how well users frame tasks for the model.',
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
      seoTitle: 'Prompt Engineering Geschichte: 2020–2026 Entwicklung',
      intro: 'Die Geschichte des Prompt Engineerings von GPT-3 und Few-Shot-Prompting im Jahr 2020 bis zum Context Design im Jahr 2026.',
      metaDescription: 'Die komplette Geschichte: Wie sich Prompt Engineering von GPT-3 Few-Shot Prompting zur modernen Context-Design-Disziplin entwickelt hat. Mit Meilensteinen.',
      publishDate: '2026-03-01',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Von GPT-2 bis heute: Wie sich Prompt Engineering entwickelt hat',
        description: 'Die Geschichte des Prompt Engineerings von GPT-3 und Few-Shot-Prompting im Jahr 2020 bis zum Context Design im Jahr 2026. Wichtige Meilensteine, Papiere und Wendepunkte.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved?lang=de',
        inLanguage: 'de',
        keywords: ['Prompt Engineering Geschichte', 'GPT-3 Few-Shot Learning', 'Chain-of-Thought Prompting', 'ChatGPT', 'Context Engineering', 'Prompt Engineering Timeline', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
            'Mehrere Entwicklungen beschleunigten diesen Wandel. Metas Llama-3-Klasse-Modelle (2024) machten leistungsfähige Open-Source-LLMs für private Deployments verfügbar und verlagerten einen Teil des Prompt Engineerings von Cloud-APIs zu lokaler Infrastruktur. Kontextfenster wuchsen auf 1 Million Token oder mehr (Gemini 1.5 Pro), was es praktikabel machte, gesamte Codebasen, Bücher oder Dokumentensammlungen in einen einzigen Prompt einzuspeisen. Multi-Agenten-Frameworks wie LangChain und AutoGen verwandelten Prompting in Orchestrierung – ein Prompt löst ein anderes Modell aus, das ein Werkzeug auslöst, das Kontext zum nächsten Prompt zurückgibt.',
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
    fr: {
      theme: 'Fondamentaux',
      title: 'De GPT-2 à aujourd\'hui : Comment le prompt engineering a évolué',
      seoTitle: 'L\'évolution du Prompt Engineering: chronologie 2020–2026',
      intro: 'L\'histoire du prompt engineering de GPT-3 et du prompting few-shot en 2020 à la conception de contexte en 2026.',
      metaDescription: 'De GPT-3 au context design : l\'histoire complète de l\'émergence du prompt engineering comme discipline clé de l\'IA, avec papiers et jalons importants.',
      publishDate: '2026-03-01',
      readTime: '10 min de lecture',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'De GPT-2 à aujourd\'hui : Comment le prompt engineering a évolué',
        description: 'L\'histoire du prompt engineering de GPT-3 et du prompting few-shot en 2020 à la conception de contexte en 2026. Jalons clés, articles et tournants.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved?lang=fr',
        inLanguage: 'fr',
        keywords: ['histoire du prompt engineering', 'GPT-3 few-shot learning', 'chain-of-thought prompting', 'ChatGPT', 'context engineering', 'chronologie prompt engineering', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
            'Plusieurs développements ont accéléré ce glissement. Les modèles de la classe Llama 3 de Meta (2024) ont rendu des LLM open source capables disponibles pour un déploiement privé, déplaçant une partie du prompt engineering des API cloud vers l\'infrastructure locale. Les fenêtres de contexte ont grandi jusqu\'à 1 million de tokens ou plus (Gemini 1.5 Pro), rendant pratique l\'injection de bases de code entières, de livres ou de collections de documents dans un seul prompt. Les frameworks multi-agents comme LangChain et AutoGen ont transformé le prompting en orchestration — un prompt déclenche un autre modèle, qui déclenche un outil, qui renvoie le contexte au prompt suivant.',
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
      theme: '基礎',
      title: 'GPT-2から現在まで：プロンプトエンジニアリングの進化',
      seoTitle: 'プロンプトエンジニアリングの進化：2020年~2026年のタイムライン',
      intro: '2020年のGPT-3とフューショットプロンプティングから2026年のコンテキストデザインまで、プロンプトエンジニアリングの歴史。',
      metaDescription: 'GPT-3のFew-Shot学習からコンテキスト設計まで。プロンプトエンジニアリングがAI技術の中核スキルへ進化した全歴史。主要論文とマイルストーン付き。',
      publishDate: '2026-03-01',
      readTime: '10分で読める',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'GPT-2から現在まで：プロンプトエンジニアリングの進化',
        description: '2020年のGPT-3とフューショットプロンプティングから2026年のコンテキストデザインまで、プロンプトエンジニアリングの歴史。主要なマイルストーン、論文、ターニングポイント。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved?lang=ja',
        inLanguage: 'ja',
        keywords: ['プロンプトエンジニアリング歴史', 'GPT-3 フューショット学習', 'Chain-of-Thought プロンプティング', 'ChatGPT', 'コンテキストエンジニアリング', 'プロンプトエンジニアリング タイムライン', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
            'PromptQuorumは同じタスク — CO-STARフレームワークで構造化された — をGPT-5.5、Claude Opus 4.7、Gemini 1.5 Proに送信しました。3つのモデル全てが最初の試行でフォーマット準拠、長さ準拠の回答を生成しました。フレームワークなしの同じタスクは、モデル間で平均2～3回の修正ラウンドが必要でした、有用な出力に到達するために。',
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
      theme: '基础知识',
      title: '从GPT-2到今天：提示词工程的演变',
      seoTitle: '提示工程进化史：2020年-2026年完整时间线',
      intro: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。',
      metaDescription: '从GPT-3的小样本学习到上下文设计：提示工程如何演变成AI核心技能的完整历史。包含关键论文和里程碑。',
      publishDate: '2026-03-01',
      readTime: '阅读约10分钟',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '从GPT-2到今天：提示词工程的演变',
        description: '提示词工程的历史：从2020年的GPT-3和少样本提示到2026年的上下文设计。关键里程碑、论文和转折点。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/how-prompt-engineering-evolved?lang=zh',
        inLanguage: 'zh',
        keywords: ['提示工程历史', 'GPT-3 少样本学习', 'Chain-of-Thought 提示', 'ChatGPT', '上下文工程', '提示工程时间线', 'InstructGPT', 'RLHF'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
            '多项发展加速了这一转变。Meta 的 Llama 3 系列模型（2024年）使强大的开源大型语言模型可用于私有部署，将部分提示词工程从云端 API 转移到本地基础设施。上下文窗口增长到100万词元或更多（Gemini 1.5 Pro），使得将整个代码库、书籍或文档集合注入单个提示词成为可行。LangChain 和 AutoGen 等多智能体框架将提示变成了编排——一个提示词触发另一个模型，该模型触发一个工具，工具将上下文返回给下一个提示词。',
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
  };
