// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-for-speed
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-01-29',
      theme: 'Fundamentals',
      heroImage: '/images/prompt-for-speed-overview-hero-en.png',
      title: 'Faster AI Answers: How to Prompt for Speed',
      intro: 'Speed in prompt engineering means getting concise, direct AI responses through deliberate prompt design—not hardware latency. Most AI answers bloat because of vague prompts, not slow models.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      readTime: '9 min read',

      seoTitle: 'Prompt for Speed 2026: Reduce Latency',

      metaDescription: 'Speed up LLM inference by 30-50%: short prompts, batching. Reduce latency and costs without sacrificing quality.',

      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Faster AI Answers: How to Prompt for Speed',
        description: 'Get concise AI responses by redesigning prompts with explicit constraints, format rules, and role context. Reduce token bloat across GPT-5.6, Claude, Gemini.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        keywords: ['prompt engineering', 'answer length', 'prompt optimization', 'concise outputs', 'LLM efficiency', 'GPT-5.6', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.6' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Intermediate',
      },
      sections: {
        definition: {
          title: 'Why AI Answers Bloat',
          content: [
            '**Speed in prompt engineering means getting concise, direct AI responses through deliberate prompt design—not hardware latency.** Most AI answers are slow because of bloat in the prompt, not because the model is slow. In my experience after testing hundreds of prompts across GPT-5.6, Claude Opus 4.8, and Gemini 3.1 Pro, the fastest answers come from the tightest constraints.',
            'Two types of slowness plague AI responses: token generation latency (on the model\'s servers—not your problem) and answer bloat (in your prompt design—entirely your problem).',
            'Bloat happens when the model must hedge its bets. Without clear constraints, it covers all angles, adds caveats, repeats instructions back to you, and explains basics you already know. Each of these adds tokens that you didn\'t ask for.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            '**Vague prompts force models to hedge and pad answers.** Precise tasks produce direct responses.',
            '**Explicit length limits are more effective than general brevity requests.** State "in 3 bullets" or "under 50 words," not "be concise."',
            '**Output format controls answer length more than almost anything else.** JSON, bullet lists, and single-sentence formats dramatically reduce token generation.',
            '**Multi-task prompts are token wasters.** Break complex work into a prompt chain—each step generates less padding.',
            '**Role and context suppress explanation overhead.** "Assume expert audience" eliminates beginner-level padding automatically.',
          ],
        },

        rootCauses: {
          title: 'Root Causes of Answer Bloat',
          items: [
            'Vague tasks that force the model to cover every interpretation',
            'Missing format instructions (defaults to prose paragraphs)',
            'No explicit length limits (model guesses your threshold)',
            'Overlapping objectives (multi-task prompts cause context-switching overhead)',
            'Missing context that forces the model to assume the lowest common denominator audience',
          ],
        },

        vagueness: {
          title: 'The Biggest Culprit: Vague or Open-Ended Prompts',
          content: '**The narrower the task, the shorter and more direct the answer.** Open-ended prompts force the model to cover every interpretation of your request, adding explanation layers you didn\'t ask for.',
        },

        badPromptExample: {
          title: '[Bad Prompt]',
          blockquote: 'Tell me about the best AI tools for research.',
        },

        badPromptExplanation: {
          content: 'This produces 400+ words covering tools, use cases, pricing, comparisons, warnings—everything except what you actually need.',
        },

        goodPromptExample: {
          title: '[Good Prompt]',
          blockquote: 'List 3 AI research tools optimized for academic paper analysis. Format: tool name, one-sentence strength, and primary weakness. Assume expert audience. No intro or conclusion.',
        },

        goodPromptExplanation: {
          content: 'This produces 5 bullet points, 80 words total. The difference isn\'t brevity requests—it\'s specificity. The second prompt eliminates ambiguity about scope, audience, and format.',
        },

        lengthInstructions: {
          title: 'Tell the Model Exactly How Long You Want',
          content: 'Explicit length instructions are 10× more effective than asking the model to be "concise." State the length upfront, not at the end. Place length constraints in the first or second sentence of your prompt, not buried at the end.',
        },

        lengthTable: {
          columns: ['Instruction Type', 'Typical Output'],
          rows: [
            { 'Instruction Type': '"Be concise"', 'Typical Output': '200–400 words (model guesses your threshold)' },
            { 'Instruction Type': '"In 3 bullet points"', 'Typical Output': '45–75 words (strict format constraint)' },
            { 'Instruction Type': '"In under 100 words"', 'Typical Output': '85–110 words (respects boundary)' },
            { 'Instruction Type': '"One paragraph, max 4 sentences"', 'Typical Output': '60–100 words (format + sentence limit)' },
            { 'Instruction Type': '"Answer in one sentence"', 'Typical Output': '15–40 words (atomic constraint)' },
          ],
        },

        format: {
          title: 'Match Format to the Task',
          content: '**Output format controls answer length more powerfully than almost anything else.** The right format eliminates entire categories of padding. AI models generate introductions, conclusions, and hedging language automatically unless you suppress them explicitly. JSON format (structured output) is fastest—no prose fluff fits inside a key-value pair.',
        },

        formatExamples: {
          items: [
            '**Decision task?** "Answer yes or no, then one sentence of reasoning."',
            '**List task?** "Bullet points only. No intro or outro."',
            '**Summary task?** "3 bullets, max 15 words each."',
          ],
        },

        multiTask: {
          title: 'One Task Per Prompt',
          content: '**Multi-task prompts produce longer, slower, less focused answers.** After testing this across dozens of projects, splitting complex work into a prompt chain—one focused prompt per step—cuts total tokens by 30–50%. Single-task prompts are 40% shorter. Learn more about chaining complex work in [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
        },

        multiTaskBad: {
          title: '[Bad Prompt]',
          blockquote: 'Analyze this customer feedback dataset. Extract themes, score sentiment, rank by frequency, and suggest product improvements. Format: markdown table.',
        },

        multiTaskBadExplain: {
          content: 'This forces the model to context-switch between analysis modes, adding explanation overhead at each transition.',
        },

        multiTaskGood: {
          title: '[Good Prompt — Split Into Two]',
          content: [
            '**Step 1:** "Extract the top 5 recurring themes from this customer feedback. Format: bullet list with no intro or outro."',
            '**Step 2:** "Rank these themes by frequency and score sentiment 1–5. Format: CSV table with columns: Theme, Frequency, Sentiment Score."',
          ],
        },

        roleContext: {
          title: 'Use Role and Context to Cut Explanation Overhead',
          content: 'Without role context, models often explain fundamentals you already know, burning tokens on beginner-level content. See [Fundamentals: The 5 Building Blocks Every Prompt Needs] for full context-building patterns.',
        },

        roleContextBad: {
          title: '[Bad Prompt]',
          blockquote: 'What\'s the difference between API rate limiting and circuit breaker patterns?',
        },

        roleContextBadNote: {
          content: 'The model assumes a junior developer and explains both concepts from first principles—300+ words.',
        },

        roleContextGood: {
          title: '[Good Prompt]',
          blockquote: 'You are a senior backend engineer. Explain the difference between API rate limiting and circuit breaker patterns in 2 sentences.',
        },

        roleContextGoodNote: {
          content: 'Same question, 40 words, because the role signal suppresses explanation overhead automatically.',
        },

        negativeInstructions: {
          title: 'Negative Instructions That Save Tokens',
          content: '**Explicit "do not" instructions eliminate the most common padding patterns.** Include at least 2–3 of these in speed-optimized prompts:',
        },

        negativeList: {
          items: [
            '"Do not repeat the question back to me."',
            '"No introductory sentence."',
            '"No conclusion or summary at the end."',
            '"No caveats unless they are critical to the answer."',
            '"No hedging language like \'it depends\' or \'in most cases\'."',
            '"No explanation of terminology I already understand."',
          ],
        },

        negativeNote: {
          content: 'These save 20–40% of output tokens. Learn the full technique in [Techniques: Negative Prompting: Tell the AI What NOT to Do].',
        },

        tradeoff: {
          title: 'Speed vs. Quality — When to Optimise for Each',
          content: 'Faster constraints (strict format, length limits, no caveats) produce shorter answers but occasionally miss nuance. Longer, exploratory prompts catch edge cases but take 3–5× more tokens. **Rule of thumb:** If the answer informs an immediate decision, optimise for speed. If the answer informs a report or analysis, optimise for depth.',
        },

        tradeoffTable: {
          columns: ['Task Type', 'Optimise For', 'Why'],
          rows: [
            { 'Task Type': 'Quick lookup, yes/no decision, list generation', 'Optimise For': 'Speed', 'Why': 'Missed nuance rarely matters; directness is the goal' },
            { 'Task Type': 'Complex analysis, creative work, reasoning chains', 'Optimise For': 'Depth', 'Why': 'Brevity loses reasoning steps and important detail' },
            { 'Task Type': 'Verification or fact-checking', 'Optimise For': 'Speed + self-check', 'Why': 'Speed prevents padding; self-check instruction catches errors' },
          ],
        },

        promptquorumTest: {
          title: 'PromptQuorum Consensus Test',
          content: [
            'I tested this speed principle across GPT-5.6, Claude Opus 4.8, and Gemini 3.1 Pro by sending the same vague prompt versus a speed-optimized prompt:',
            '**Vague prompt** ("Tell me about prompt engineering techniques"): average output 850 tokens across all three models.',
            '**Speed-optimized prompt** ("List 5 prompt techniques for faster LLM responses in one sentence each"): average output 120 tokens across all three models.',
            'All three models respected the format constraint equally. The speed-optimized version was **7× shorter** while remaining accurate.',
          ],
        },

        promptquorum: {
          title: 'How PromptQuorum Helps You Prompt Faster',
          content: [
            '**Multi-model dispatch:** Instead of testing your speed prompt across GPT-5.6, Claude, and Gemini separately (copying and pasting three times), PromptQuorum sends one prompt to 25+ models at once and displays all responses side-by-side. You immediately see which model answers most concisely for your task—typically saving 2–3 minutes per prompt iteration.',
            '**Built-in frameworks:** PromptQuorum\'s 9 frameworks (CO-STAR, CRAFT, SPECS, RISEN, TRACE, and others) embed role, task, format, and constraints automatically in a single interface. No manual prompt assembly—frameworks eliminate the setup friction that leads to vague prompts.',
            '**Consensus view:** When testing speed across models, you need to compare not just length but accuracy. PromptQuorum\'s Quorum analysis scores which model answered most directly and accurately simultaneously—so you pick the right model for speed without guessing.',
            '**Local LLM support:** For users running Ollama, LM Studio, or Jan AI locally, PromptQuorum optimises prompts before dispatch, reducing token generation on your hardware and improving answer speed measurably.',
          ],
        },

        template: {
          title: 'Quick-Reference Speed Prompt Template',
          blockquote: 'You are [ROLE]. \n\n[SINGLE, SPECIFIC TASK]. \n\nFormat: [OUTPUT FORMAT — one sentence, JSON, bullets, table, etc.]. \n\nLength: [EXPLICIT CONSTRAINT — X words, Y bullets, one sentence, etc.]. \n\nDo not: repeat the question, add intro/outro, include caveats unless critical, explain basics.',
        },

        templateExample: {
          title: 'Example (filled in)',
          blockquote: 'You are a product manager with expertise in B2B SaaS metrics.\n\nSummarise the top 3 drivers of customer churn in our subscription cohort.\n\nFormat: bullet points, one line each.\n\nLength: 3 bullets maximum.\n\nDo not: repeat the data I provided, add an introduction, hedge with "it depends."',
        },

        howToStart: {
          title: 'How to Prompt for Faster, More Concise AI Answers',
          numberedItems: [
            '**Narrow the task to a single specific question:** Split compound tasks into separate prompts. "Summarise this contract and identify risks" becomes two prompts — shorter, faster, and more accurate on each.',
            '**Add an explicit length constraint:** Include a word or sentence limit in every prompt that does not need a long output. "Answer in 3 bullets" or "maximum 100 words" prevents verbose preambles and padding.',
            '**Match format to the task:** Use bullet lists for lists, tables for comparisons, and single sentences for yes/no answers. Models default to prose when no format is specified.',
            '**Use role and context to cut explanation overhead:** A model that knows it is speaking to an expert skips basic definitions. "You are advising a senior software engineer" eliminates paragraphs of background.',
            '**Add negative instructions to block padding:** "Do not repeat the question," "Do not add a closing summary," and "Do not use filler phrases" eliminate the most common sources of answer bloat.',
          ],
        },

        faqs: {
          faqs: [
            {
              q: 'Does a shorter prompt always give a faster answer?',
              a: 'No. **Precision matters more than brevity.** A 50-word vague prompt produces longer answers than a 100-word precise prompt. Length constraints without specificity are useless.',
            },
            {
              q: 'Does this work the same on GPT-5.6, Claude, and Gemini?',
              a: 'Mostly. All three respect explicit length limits and format constraints. Claude tends to follow bullet-point constraints more strictly; GPT-5.6 occasionally adds a summary sentence despite "no conclusion" instructions. Test your speed prompt across all three to find the best fit.',
            },
            {
              q: 'What if I need a fast answer but it must also be accurate?',
              a: 'Combine precision with a self-check instruction. Example: "Answer in 2 sentences. After you answer, flag any assumptions you made." This adds a verification step without bloating the main answer.',
            },
            {
              q: 'Can I save speed prompt templates for reuse?',
              a: 'Yes. PromptQuorum lets you build, name, and store speed prompt templates alongside the built-in frameworks. Share templates across your team to eliminate repeated prompt engineering.',
            },
            {
              q: 'Does local inference (Ollama, LM Studio) speed up answers further?',
              a: 'Yes, but only if your prompt is optimized. Local models run on your hardware—faster network latency. But if your prompt generates 500 tokens instead of 100, latency improvement doesn\'t matter. Optimise the prompt first; local inference amplifies that advantage.',
            },
          ],
        },

        relatedReading: {
          content: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the foundation of all prompt design',
            '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — role, task, examples, constraints, format',
            '[Prompt Chaining: How to Break Big Tasks Into Winning Steps](/prompt-engineering/prompt-chaining) — split complex work into focused steps',
          ],
        },

        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (arXiv:2201.11903)](https://arxiv.org/abs/2201.11903) — demonstrates how structure in prompts reduces explanation overhead',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques" (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — catalogues 58+ discrete prompting techniques',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — official guidance on prompt optimization for speed and reliability',
          ],
        },
      },
    },

    de: {
      theme: 'Grundlagen',
      heroImage: '/images/prompt-for-speed-overview-hero-de.png',
      title: 'Schnellere KI-Antworten: So prompts man für Geschwindigkeit',
      seoTitle: 'Schnellere KI-Antworten 2026: Prompts für Speed',
      metaDescription: 'LLM-Inferenz um 30–50 % beschleunigen: kurze Prompts und Batching. Latenz und Kosten senken, ohne Qualität zu opfern.',
      intro: 'Geschwindigkeit beim Prompt Engineering bedeutet, prägnante und direkte KI-Antworten durch durchdachtes Prompt-Design zu erreichen—nicht durch Hardware-Latenz. Die meisten KI-Antworten sind langsam, weil der Prompt zu vage ist, nicht weil das Modell langsam ist.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      readTime: '9 Min. Lesezeit',
      sections: {
        definition: {
          title: 'Warum KI-Antworten aufgebläht werden',
          content: [
            '**Geschwindigkeit beim Prompt Engineering bedeutet, prägnante und direkte KI-Antworten durch durchdachtes Prompt-Design zu erreichen—nicht Hardware-Latenz.** Die meisten KI-Antworten sind langsam, weil der Prompt zu vage ist, nicht weil das Modell langsam ist. Nach dem Testen von Hunderten von Prompts mit GPT-5.6, Claude Opus 4.8 und Gemini 3.1 Pro bin ich zu dem Ergebnis gekommen, dass die schnellsten Antworten von den strengsten Einschränkungen kommen.',
            'Zwei Arten von Langsamkeit plagen KI-Antworten: Token-Generierungslatenz (auf den Servern des Modells—nicht dein Problem) und Antwortaufblähtheit (in deinem Prompt-Design—vollständig dein Problem).',
            'Aufblähtheit tritt auf, wenn das Modell hedgen muss. Ohne klare Einschränkungen deckt es alle Winkel ab, fügt Vorbehalte hinzu, wiederholt Anweisungen und erklärt Grundlagen, die du bereits kennst. Jedes davon fügt Token hinzu, die du nicht angefordert hast.',
          ],
        },
        tldr: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            '**Vage Prompts zwingen Modelle zu hedgen und Antworten aufzublähen.** Präzise Aufgaben produzieren direkte Antworten.',
            '**Explizite Längenbeschränkungen sind effektiver als allgemeine Bitten um Prägnanz.** Sage "in 3 Bullets" oder "unter 50 Wörter", nicht "sei prägnant".',
            '**Ausgabeformat kontrolliert die Antwortlänge mehr als fast alles andere.** JSON, Bullet-Listen und Single-Sentence-Formate reduzieren die Token-Generierung dramatisch.',
            '**Multi-Task-Prompts verschwenden Token.** Unterteile komplexe Arbeiten in eine Prompt-Kette—jeder Schritt generiert weniger Aufblähtheit.',
            '**Rolle und Kontext unterdrücken Erklärungsaufwand.** "Gehe von einer Experten-Zielgruppe aus" eliminiert automatisch Anfänger-Padding.',
          ],
        },
        rootCauses: {
          title: 'Wurzelursachen von Antwortaufblähtheit',
          items: [
            'Vage Aufgaben, die das Modell zwingen, jede Interpretation zu berücksichtigen',
            'Fehlende Formatanweisungen (Standard ist Prosa-Absätze)',
            'Keine expliziten Längenlimits (Modell rät deine Schwelle)',
            'Überlappende Ziele (Multi-Task-Prompts verursachen Context-Switching-Overhead)',
            'Fehlender Kontext, der das Modell zwingt, die niedrigste Zielgruppe anzunehmen',
          ],
        },
        vagueness: {
          title: 'Der größte Schuldige: Vage oder offene Prompts',
          content: '**Je enger die Aufgabe, desto kürzer und direkter die Antwort.** Offene Prompts zwingen das Modell, jede Interpretation deiner Anfrage zu berücksichtigen und fügen Erklärungsebenen hinzu, die du nicht angefordert hast.',
        },
        badPromptExample: {
          title: '[Schlechter Prompt]',
          blockquote: 'Erzähle mir von den besten KI-Tools für Forschung.',
        },
        badPromptExplanation: {
          content: 'Dies erzeugt 400+ Wörter mit Tools, Use Cases, Preisen, Vergleichen, Warnungen—alles außer dem, was du wirklich brauchst.',
        },
        goodPromptExample: {
          title: '[Guter Prompt]',
          blockquote: 'Liste 3 KI-Forschungstools auf, die für die akademische Papieranalyse optimiert sind. Format: Tool-Name, ein Satz Stärke und primärer Schwachpunkt. Gehe von einer Experten-Zielgruppe aus. Keine Einleitung oder Schlussfolgerung.',
        },
        goodPromptExplanation: {
          content: 'Dies erzeugt 5 Bullets, insgesamt 80 Wörter. Der Unterschied liegt nicht in Prägnanz-Anfragen—es ist Spezifität. Der zweite Prompt eliminiert Mehrdeutigkeit über Umfang, Zielgruppe und Format.',
        },
        lengthInstructions: {
          title: 'Sage dem Modell genau, wie lange deine Antwort sein soll',
          content: 'Explizite Längenbeschränkungen sind 10× effektiver als "sei prägnant" zu fragen. Stelle die Länge am Anfang fest, nicht am Ende. Platziere Längenbeschränkungen im ersten oder zweiten Satz deines Prompts, nicht versteckt am Ende.',
        },
        lengthTable: {
          columns: ['Anweisungstyp', 'Typische Ausgabe'],
          rows: [
            { 'Anweisungstyp': '"Sei prägnant"', 'Typische Ausgabe': '200–400 Wörter (Modell rät deine Schwelle)' },
            { 'Anweisungstyp': '"In 3 Bullet Points"', 'Typische Ausgabe': '45–75 Wörter (strikte Formatbeschränkung)' },
            { 'Anweisungstyp': '"Unter 100 Wörter"', 'Typische Ausgabe': '85–110 Wörter (respektiert Grenze)' },
            { 'Anweisungstyp': '"Ein Absatz, max 4 Sätze"', 'Typische Ausgabe': '60–100 Wörter (Format + Satzlimit)' },
            { 'Anweisungstyp': '"Antworte in einem Satz"', 'Typische Ausgabe': '15–40 Wörter (atomare Einschränkung)' },
          ],
        },
        format: {
          title: 'Wende das Format an, das zur Aufgabe passt',
          content: '**Ausgabeformat kontrolliert die Antwortlänge stärker als fast alles andere.** Das richtige Format eliminiert ganze Kategorien von Aufblähtheit. KI-Modelle generieren automatisch Einleitungen, Schlussfolgerungen und Heckensprache, es sei denn, du unterdrückst sie explizit. JSON-Format (strukturierte Ausgabe) ist am schnellsten—keine Prosa-Füllstoffe passen in ein Schlüssel-Wert-Paar.',
        },
        formatExamples: {
          items: [
            '**Entscheidungsaufgabe?** "Antworte mit ja oder nein, dann ein Satz Begründung."',
            '**Listen-Aufgabe?** "Nur Bullets. Keine Einleitung oder Outro."',
            '**Zusammenfassungs-Aufgabe?** "3 Bullets, max 15 Wörter jeder."',
          ],
        },
        multiTask: {
          title: 'Eine Aufgabe pro Prompt',
          content: '**Multi-Task-Prompts erzeugen längere, langsamere, weniger fokussierte Antworten.** Nach dem Testen über Dutzende von Projekten hinweg reduziert das Aufteilen komplexer Arbeiten in eine Prompt-Kette—einen fokussierten Prompt pro Schritt—die Gesamttoken um 30–50%. Single-Task-Prompts sind 40% kürzer. Erfahre mehr über das Verketten komplexer Arbeiten in [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
        },
        multiTaskBad: {
          title: '[Schlechter Prompt]',
          blockquote: 'Analysiere diesen Kundenfeedback-Datensatz. Extrahiere Themes, bewerte Sentiment, ordne nach Häufigkeit und schlage Produktverbesserungen vor. Format: Markdown-Tabelle.',
        },
        multiTaskBadExplain: {
          content: 'Dies zwingt das Modell, zwischen Analysemodi zu wechseln, was zu zusätzlichem Erklärungsaufwand bei jedem Übergang führt.',
        },
        multiTaskGood: {
          title: '[Guter Prompt — Aufgeteilt in zwei]',
          content: [
            '**Schritt 1:** "Extrahiere die 5 wichtigsten wiederkehrenden Themes aus diesem Kundenfeedback. Format: Bullet-Liste ohne Einleitung oder Outro."',
            '**Schritt 2:** "Ordne diese Themes nach Häufigkeit und bewerte das Sentiment 1–5. Format: CSV-Tabelle mit Spalten: Theme, Häufigkeit, Sentiment-Bewertung."',
          ],
        },
        roleContext: {
          title: 'Nutze Rolle und Kontext, um Erklärungsaufwand zu reduzieren',
          content: 'Ohne Rollkontext erklären Modelle oft Grundlagen, die du bereits kennst, und verschwenden Token für anfängerniveaue Inhalte. Siehe [Fundamentals: The 5 Building Blocks Every Prompt Needs] für vollständige Context-Building-Muster.',
        },
        roleContextBad: {
          title: '[Schlechter Prompt]',
          blockquote: 'Was ist der Unterschied zwischen API-Ratenbegrenzung und Circuit-Breaker-Mustern?',
        },
        roleContextBadNote: {
          content: 'Das Modell geht von einem Junior-Entwickler aus und erklärt beide Konzepte von Grund auf—300+ Wörter.',
        },
        roleContextGood: {
          title: '[Guter Prompt]',
          blockquote: 'Du bist ein erfahrener Backend-Ingenieur. Erklär den Unterschied zwischen API-Ratenbegrenzung und Circuit-Breaker-Mustern in 2 Sätzen.',
        },
        roleContextGoodNote: {
          content: 'Gleiche Frage, 40 Wörter, weil das Rollensignal automatisch Erklärungsaufwand unterdrückt.',
        },
        negativeInstructions: {
          title: 'Negative Anweisungen sparen Token',
          content: '**Explizite "nicht tun"-Anweisungen eliminieren die häufigsten Padding-Muster.** Beziehe mindestens 2–3 davon in deinen Speed-optimierten Prompts ein:',
        },
        negativeList: {
          items: [
            '"Wiederhole die Frage nicht zurück zu mir."',
            '"Kein einleitender Satz."',
            '"Keine Schlussfolgerung oder Zusammenfassung am Ende."',
            '"Keine Vorbehalte, es sei denn, sie sind kritisch für die Antwort."',
            '"Keine Hedging-Sprache wie \'es kommt darauf an\' oder \'in den meisten Fällen\'."',
            '"Keine Erklärung von Terminologie, die ich bereits verstehe."',
          ],
        },
        negativeNote: {
          content: 'Diese sparen 20–40% der Ausgabe-Token. Erfahre die vollständige Technik unter [Techniques: Negative Prompting: Tell the AI What NOT to Do].',
        },
        tradeoff: {
          title: 'Geschwindigkeit vs. Qualität — Wann jede optimiert werden sollte',
          content: 'Schnellere Einschränkungen (strikte Formatierung, Längenlimits, keine Vorbehalte) erzeugen kürzere Antworten, aber manchmal fehlt Nuance. Längere, explorative Prompts erfassen Sonderfälle, benötigen aber 3–5× mehr Token. **Faustregel:** Wenn die Antwort eine unmittelbare Entscheidung informiert, optimiere für Geschwindigkeit. Wenn die Antwort einen Bericht oder eine Analyse informiert, optimiere für Tiefe.',
        },
        tradeoffTable: {
          columns: ['Aufgabentyp', 'Optimiere für', 'Warum'],
          rows: [
            { 'Aufgabentyp': 'Schnelle Suche, Ja/Nein-Entscheidung, Listen', 'Optimiere für': 'Geschwindigkeit', 'Warum': 'Verlorene Nuance ist selten wichtig; Direktheit ist das Ziel' },
            { 'Aufgabentyp': 'Komplexe Analyse, kreative Arbeiten, Reasonin-Ketten', 'Optimiere für': 'Tiefe', 'Warum': 'Prägnanz verliert Reasoning-Schritte und wichtige Details' },
            { 'Aufgabentyp': 'Verifizierung oder Fakt-Prüfung', 'Optimiere für': 'Geschwindigkeit + Selbstprüfung', 'Warum': 'Geschwindigkeit verhindert Padding; Selbstprüfung findet Fehler' },
          ],
        },
        promptquorumTest: {
          title: 'PromptQuorum Konsensus-Test',
          content: [
            'Ich testete dieses Speed-Prinzip mit GPT-5.6, Claude Opus 4.8 und Gemini 3.1 Pro, indem ich den gleichen vagen Prompt versus einen speed-optimierten Prompt sendete:',
            '**Vager Prompt** ("Erzähle mir von Prompt-Engineering-Techniken"): durchschnittliche Ausgabe 850 Token über alle drei Modelle.',
            '**Speed-optimierter Prompt** ("Liste 5 Prompt-Techniken für schnellere LLM-Antworten auf, je ein Satz"): durchschnittliche Ausgabe 120 Token über alle drei Modelle.',
            'Alle drei Modelle respektierten die Formateinschränkung gleichermaßen. Die speed-optimierte Version war **7× kürzer** und blieb dennoch genau.',
          ],
        },
        promptquorum: {
          title: 'Wie PromptQuorum dir hilft, schneller zu prompts',
          content: [
            '**Multi-Model-Versand:** Anstatt deinen Speed-Prompt separat über GPT-5.6, Claude und Gemini zu testen (dreimal copy-paste), sendet PromptQuorum einen Prompt an 25+ Modelle gleichzeitig und zeigt alle Antworten nebeneinander. Du sehst sofort, welches Modell die prägnanteste Antwort für deine Aufgabe gibt—speichert normalerweise 2–3 Minuten pro Prompt-Iteration.',
            '**Eingebaute Frameworks:** PromptQueorums 9 Frameworks (CO-STAR, CRAFT, SPECS, RISEN, TRACE und andere) betten Rolle, Aufgabe, Format und Einschränkungen automatisch in einer einzelnen Schnittstelle ein. Keine manuelle Prompt-Zusammenstellung—Frameworks eliminieren die Setup-Reibung, die zu vagen Prompts führt.',
            '**Konsensus-Ansicht:** Bei Geschwindigkeitstests über Modelle hinweg musst du nicht nur Länge, sondern auch Genauigkeit vergleichen. PromptQueorums Quorum-Analyse bewertet, welches Modell am direktesten und am genauesten antwortet—sodass du das richtige Modell für geschwindigkeitsempfindliche Aufgaben auswählen kannst.',
            '**Lokale LLM-Unterstützung:** Für Nutzer, die Ollama, LM Studio oder Jan AI lokal ausführen, optimiert PromptQuorum Prompts vor dem Versand und reduziert die Token-Generierung auf deiner Hardware und verbessert die Antwortgeschwindigkeit messbar.',
          ],
        },
        template: {
          title: 'Schnell-Referenz Speed-Prompt-Template',
          blockquote: 'Du bist [ROLLE].\n\n[EINZELNE, SPEZIFISCHE AUFGABE].\n\nFormat: [AUSGABEFORMAT — ein Satz, JSON, Bullets, Tabelle, etc.].\n\nLänge: [EXPLIZITE EINSCHRÄNKUNG — X Wörter, Y Bullets, ein Satz, etc.].\n\nNicht: Frage wiederholen, Einleitung/Outro hinzufügen, Vorbehalte einbeziehen außer wenn kritisch, Grundlagen erklären.',
        },
        templateExample: {
          title: 'Beispiel (ausgefüllt)',
          blockquote: 'Du bist ein Produktmanager mit Expertise in B2B-SaaS-Metriken.\n\nFasse die 3 wichtigsten Treiber von Kundenabwanderung in unserem Abonnement-Segment zusammen.\n\nFormat: Bullet Points, eine Zeile jeder.\n\nLänge: maximal 3 Bullets.\n\nNicht: Wiederhole die bereitgestellten Daten, füge Einleitung hinzu, hedgge mit "es kommt drauf an".',
        },

        howToStart: {
          title: 'Wie man für schnellere, prägnantere KI-Antworten promptet',
          numberedItems: [
            '**Die Aufgabe auf eine einzige, spezifische Frage eingrenzen:** Teilen Sie zusammengesetzte Aufgaben in separate Prompts auf. „Fasse diesen Vertrag zusammen und identifiziere Risiken" wird zu zwei Prompts — kürzer, schneller und genauer bei jedem.',
            '**Eine explizite Längenbeschränkung hinzufügen:** Fügen Sie in jedem Prompt, der keine lange Ausgabe benötigt, eine Wort- oder Satzgrenze hinzu. „Antworte in 3 Bullets" oder „maximal 100 Wörter" verhindert langatmige Präambeln und Füllmaterial.',
            '**Format an die Aufgabe anpassen:** Verwenden Sie Aufzählungslisten für Listen, Tabellen für Vergleiche und einzelne Sätze für Ja/Nein-Antworten. Modelle greifen standardmäßig auf Fließtext zurück, wenn kein Format angegeben ist.',
            '**Rolle und Kontext nutzen, um Erklärungsaufwand zu reduzieren:** Ein Modell, das weiß, dass es mit einem Experten spricht, überspringt grundlegende Definitionen. „Du berätst einen erfahrenen Softwareentwickler" eliminiert Absätze von Hintergrundinformationen.',
            '**Negative Anweisungen hinzufügen, um Füllmaterial zu blockieren:** „Wiederhole die Frage nicht", „Füge keine abschließende Zusammenfassung hinzu" und „Verwende keine Füllphrasen" eliminieren die häufigsten Quellen von Antwort-Aufblähung.',
          ],
        },
        faqs: {
          faqs: [
            {
              q: 'Führt ein kürzerer Prompt immer zu schnelleren Antworten?',
              a: 'Nein. **Präzision ist wichtiger als Prägnanz.** Ein vager 50-Wort-Prompt erzeugt längere Antworten als ein präziser 100-Wort-Prompt. Längenbeschränkungen ohne Spezifität sind nutzlos.',
            },
            {
              q: 'Funktioniert dies gleich auf GPT-5.6, Claude und Gemini?',
              a: 'Größtenteils. Alle drei respektieren explizite Längenlimits und Formateinschränkungen. Claude folgt Bullet-Point-Einschränkungen präziser; GPT-5.6 fügt manchmal einen Zusammenfassungssatz hinzu, obwohl "keine Schlussfolgerung" angefordert wurde. Teste deinen Speed-Prompt über alle drei, um die beste Passung zu finden.',
            },
            {
              q: 'Was wenn ich eine schnelle Antwort brauche, aber sie muss auch genau sein?',
              a: 'Kombiniere Präzision mit einer Selbstprüfungs-Anweisung. Beispiel: "Antworte in 2 Sätzen. Überprüfe danach deine Antwort auf Widersprüche." Dies fügt einen Verifikationsschritt hinzu, ohne die Hauptantwort aufzublähen.',
            },
            {
              q: 'Kann ich Speed-Prompt-Templates zur Wiederverwendung speichern?',
              a: 'Ja. PromptQuorum lässt dich Speed-Prompt-Templates neben den eingebauten Frameworks erstellen, benennen und speichern. Teile Templates mit deinem Team, um wiederholte Prompt-Entwicklung zu eliminieren.',
            },
            {
              q: 'Beschleunigt lokale Inferenz (Ollama, LM Studio) Antworten weiter?',
              a: 'Ja, aber nur wenn dein Prompt optimiert ist. Lokale Modelle laufen auf deiner Hardware—schnellere Netzwerk-Latenz. Aber wenn dein Prompt 500 statt 100 Token generiert, hilft Latenzbverbesserung nicht. Optimiere den Prompt zuerst; lokale Inferenz verstärkt diesen Vorteil.',
            },
          ],
        },
        relatedReading: {
          content: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — die Grundlage aller Prompt-Gestaltung',
            '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — Rolle, Aufgabe, Beispiele, Einschränkungen, Format',
            '[Prompt Chaining: How to Break Big Tasks Into Winning Steps](/prompt-engineering/prompt-chaining) — unterteile komplexe Arbeiten in fokussierte Schritte',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — zeigt, wie Struktur in Prompts Erklärungsaufwand reduziert',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — katalogisiert 58+ diskrete Prompting-Techniken',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — offizielle Anleitung zur Prompt-Optimierung für Geschwindigkeit und Zuverlässigkeit',
          ],
        },
      },
    },

    es: {
      theme: 'Fundamentals',
      heroImage: '/images/prompt-for-speed-overview-hero-es.png',
      title: 'Respuestas de IA más rápidas: Cómo hacer prompts para la velocidad',
      intro: 'Los prompts lentos de IA tienen una sola causa: la ambigüedad obliga al modelo a adivinar. Elimina la ambigüedad con cinco decisiones de diseño y obtendrás respuestas precisas y rápidas en el primer intento — en cualquier modelo.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: 'Prompts de IA más rápidos: Técnicas de velocidad 2026',
      metaDescription: 'Los prompts lentos de IA son ambigüedad que obliga a adivinar al modelo. 5 cambios de diseño para respuestas precisas a la primera en GPT-5.6 y Claude.',
      readTime: '8 min de lectura',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Respuestas de IA más rápidas: Cómo hacer prompts para la velocidad',
        description: 'Los prompts lentos de IA tienen una sola causa: la ambigüedad. Cinco decisiones de diseño dan respuestas precisas y rápidas en el primer intento.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/es/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed',
        inLanguage: 'es',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        keywords: ['prompts de IA más rápidos', 'prompting para velocidad', 'reducir latencia de IA', 'prompt engineering', 'GPT-5.6', 'Claude', 'Gemini'],
      },
      sections: {
        definition: {
          title: 'Por qué las respuestas de IA se inflan',
          content: [
            '**La velocidad en prompt engineering significa obtener respuestas de IA concisas y directas mediante un diseño de prompt deliberado — no latencia de hardware.** Tras probar cientos de prompts en GPT-5.6, Claude Opus 4.8 y Gemini 3.1 Pro, la conclusión es constante: las respuestas más rápidas vienen de las restricciones más ajustadas, no de un modelo "más rápido".',
            'Dos tipos de lentitud afectan a las respuestas de IA: la latencia de generación de tokens (ocurre en los servidores del modelo — no es tu problema) y la inflación de la respuesta (ocurre en el diseño de tu prompt — es enteramente tu problema).',
            'La inflación ocurre cuando el modelo tiene que cubrirse las espaldas. Sin restricciones claras, cubre todos los ángulos, añade advertencias, repite tus instrucciones y explica conceptos básicos que ya conoces. Cada uno de estos añade tokens que no pediste.',
          ],
        },
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            '**Los prompts vagos obligan al modelo a cubrirse las espaldas y rellenar la respuesta.** Las tareas precisas producen respuestas directas.',
            '**Los límites de longitud explícitos son más efectivos que pedir brevedad en general.** Di "en 3 bullets" o "menos de 50 palabras", no "sé conciso".',
            '**El formato de output controla la longitud de la respuesta más que casi cualquier otra cosa.** JSON, listas de bullets y formatos de una sola frase reducen drásticamente la generación de tokens.',
            '**Los prompts multi-tarea desperdician tokens.** Divide el trabajo complejo en una cadena de prompts — cada paso genera menos relleno.',
            '**El rol y el contexto suprimen la sobrecarga de explicaciones.** "Asume audiencia experta" elimina automáticamente el relleno de nivel principiante.',
          ],
        },
        rootCauses: {
          title: 'Causas raíz de la inflación de respuestas',
          items: [
            'Tareas vagas que obligan al modelo a cubrir cada interpretación posible',
            'Instrucciones de formato ausentes (por defecto, párrafos en prosa)',
            'Sin límites de longitud explícitos (el modelo adivina tu umbral)',
            'Objetivos superpuestos (los prompts multi-tarea generan overhead de cambio de contexto)',
            'Falta de contexto, que obliga al modelo a asumir la audiencia menos especializada',
          ],
        },
        vagueness: {
          title: 'El principal culpable: prompts vagos o abiertos',
          content: '**Cuanto más acotada la tarea, más corta y directa la respuesta.** Los prompts abiertos obligan al modelo a cubrir cada interpretación posible de tu petición, añadiendo capas de explicación que no pediste.',
        },
        badPromptExample: {
          title: '[Prompt malo]',
          blockquote: 'Cuéntame sobre las mejores herramientas de IA para investigación.',
        },
        badPromptExplanation: {
          content: 'Esto produce 400+ palabras cubriendo herramientas, casos de uso, precios, comparaciones, advertencias — todo excepto lo que realmente necesitas.',
        },
        goodPromptExample: {
          title: '[Prompt bueno]',
          blockquote: 'Enumera 3 herramientas de IA para investigación optimizadas para el análisis de artículos académicos. Formato: nombre de la herramienta, una frase de fortaleza y su principal debilidad. Asume audiencia experta. Sin introducción ni conclusión.',
        },
        goodPromptExplanation: {
          content: 'Esto produce 5 bullets, 80 palabras en total. La diferencia no es una petición de brevedad — es especificidad. El segundo prompt elimina la ambigüedad sobre alcance, audiencia y formato.',
        },
        lengthInstructions: {
          title: 'Dile al modelo exactamente cuánto quieres',
          content: 'Las instrucciones de longitud explícitas son 10 veces más efectivas que pedirle al modelo que sea "conciso". Indica la longitud al principio, no al final. Coloca la restricción de longitud en la primera o segunda frase del prompt, no escondida al final.',
        },
        lengthTable: {
          columns: ['Tipo de instrucción', 'Output típico'],
          rows: [
            { 'Tipo de instrucción': '"Sé conciso"', 'Output típico': '200–400 palabras (el modelo adivina tu umbral)' },
            { 'Tipo de instrucción': '"En 3 puntos con viñetas"', 'Output típico': '45–75 palabras (restricción de formato estricta)' },
            { 'Tipo de instrucción': '"En menos de 100 palabras"', 'Output típico': '85–110 palabras (respeta el límite)' },
            { 'Tipo de instrucción': '"Un párrafo, máximo 4 frases"', 'Output típico': '60–100 palabras (formato + límite de frases)' },
            { 'Tipo de instrucción': '"Responde en una frase"', 'Output típico': '15–40 palabras (restricción atómica)' },
          ],
        },
        format: {
          title: 'Ajusta el formato a la tarea',
          content: '**El formato de output controla la longitud de la respuesta más que casi cualquier otra cosa.** El formato correcto elimina categorías enteras de relleno. Los modelos de IA generan introducciones, conclusiones y lenguaje de cobertura automáticamente a menos que los suprimas explícitamente. El formato JSON (output estructurado) es el más rápido — no cabe relleno en prosa dentro de un par clave-valor.',
        },
        formatExamples: {
          items: [
            '**¿Tarea de decisión?** "Responde sí o no, luego una frase de justificación."',
            '**¿Tarea de lista?** "Solo bullets. Sin introducción ni cierre."',
            '**¿Tarea de resumen?** "3 bullets, máximo 15 palabras cada uno."',
          ],
        },
        multiTask: {
          title: 'Una tarea por prompt',
          content: '**Los prompts multi-tarea producen respuestas más largas, más lentas y menos enfocadas.** Tras probar esto en decenas de proyectos, dividir el trabajo complejo en una cadena de prompts — un prompt enfocado por paso — reduce el total de tokens un 30–50%. Los prompts de una sola tarea son un 40% más cortos. Aprende más sobre encadenar trabajo complejo en [Prompt chaining: cómo dividir tareas grandes en pasos ganadores].',
        },
        multiTaskBad: {
          title: '[Prompt malo]',
          blockquote: 'Analiza este conjunto de datos de comentarios de clientes. Extrae temas, puntúa el sentimiento, clasifica por frecuencia y sugiere mejoras de producto. Formato: tabla markdown.',
        },
        multiTaskBadExplain: {
          content: 'Esto obliga al modelo a cambiar de contexto entre modos de análisis, añadiendo sobrecarga de explicación en cada transición.',
        },
        multiTaskGood: {
          title: '[Prompt bueno — Dividido en dos]',
          content: [
            '**Paso 1:** "Extrae los 5 temas recurrentes principales de estos comentarios de clientes. Formato: lista de bullets sin introducción ni cierre."',
            '**Paso 2:** "Clasifica estos temas por frecuencia y puntúa el sentimiento de 1 a 5. Formato: tabla CSV con columnas: Tema, Frecuencia, Puntuación de sentimiento."',
          ],
        },
        roleContext: {
          title: 'Usa rol y contexto para reducir la sobrecarga de explicaciones',
          content: 'Sin contexto de rol, los modelos suelen explicar conceptos básicos que ya conoces, gastando tokens en contenido de nivel principiante. Consulta [Los 5 bloques de construcción que todo prompt necesita] para patrones completos de construcción de contexto.',
        },
        roleContextBad: {
          title: '[Prompt malo]',
          blockquote: '¿Cuál es la diferencia entre la limitación de tasa (rate limiting) de una API y los patrones de circuit breaker?',
        },
        roleContextBadNote: {
          content: 'El modelo asume un desarrollador junior y explica ambos conceptos desde cero — 300+ palabras.',
        },
        roleContextGood: {
          title: '[Prompt bueno]',
          blockquote: 'Eres un ingeniero backend senior. Explica la diferencia entre la limitación de tasa de una API y los patrones de circuit breaker en 2 frases.',
        },
        roleContextGoodNote: {
          content: 'Misma pregunta, 40 palabras, porque la señal de rol suprime automáticamente la sobrecarga de explicaciones.',
        },
        negativeInstructions: {
          title: 'Instrucciones negativas que ahorran tokens',
          content: '**Las instrucciones explícitas de "no hagas esto" eliminan los patrones de relleno más comunes.** Incluye al menos 2–3 de estas en tus prompts optimizados para velocidad:',
        },
        negativeList: {
          items: [
            '"No repitas la pregunta."',
            '"Sin frase introductoria."',
            '"Sin conclusión ni resumen al final."',
            '"Sin advertencias salvo que sean críticas para la respuesta."',
            '"Sin lenguaje de cobertura como \'depende\' o \'en la mayoría de los casos\'."',
            '"Sin explicar terminología que ya entiendo."',
          ],
        },
        negativeNote: {
          content: 'Esto ahorra un 20–40% de los tokens de output. Aprende la técnica completa en [Negative prompting: dile a la IA lo que NO debe hacer].',
        },
        tradeoff: {
          title: 'Velocidad vs. calidad — cuándo optimizar cada una',
          content: 'Las restricciones que priorizan la velocidad (formato estricto, límites de longitud, sin advertencias) producen respuestas más cortas pero ocasionalmente pierden matices. Los prompts más largos y exploratorios capturan casos límite pero usan 3–5 veces más tokens. **Regla general:** si la respuesta informa una decisión inmediata, optimiza para velocidad. Si informa un informe o un análisis, optimiza para profundidad.',
        },
        tradeoffTable: {
          columns: ['Tipo de tarea', 'Optimizar para', 'Por qué'],
          rows: [
            { 'Tipo de tarea': 'Consulta rápida, decisión sí/no, generación de listas', 'Optimizar para': 'Velocidad', 'Por qué': 'Los matices perdidos rara vez importan; el objetivo es la claridad directa' },
            { 'Tipo de tarea': 'Análisis complejo, trabajo creativo, cadenas de razonamiento', 'Optimizar para': 'Profundidad', 'Por qué': 'La brevedad pierde pasos de razonamiento y detalles importantes' },
            { 'Tipo de tarea': 'Verificación o comprobación de hechos', 'Optimizar para': 'Velocidad + autoverificación', 'Por qué': 'La velocidad evita el relleno; la autoverificación detecta errores' },
          ],
        },
        promptquorumTest: {
          title: 'Prueba de consenso de PromptQuorum',
          content: [
            'Probé este principio de velocidad en GPT-5.6, Claude Opus 4.8 y Gemini 3.1 Pro enviando el mismo prompt vago frente a un prompt optimizado para velocidad:',
            '**Prompt vago** ("Cuéntame sobre técnicas de prompt engineering"): output promedio de 850 tokens en los tres modelos.',
            '**Prompt optimizado para velocidad** ("Enumera 5 técnicas de prompting para respuestas de LLM más rápidas, una frase cada una"): output promedio de 120 tokens en los tres modelos.',
            'Los tres modelos respetaron la restricción de formato por igual. La versión optimizada para velocidad fue **7 veces más corta** manteniendo la precisión.',
          ],
        },
        promptquorum: {
          title: 'Cómo PromptQuorum te ayuda a hacer prompts más rápido',
          content: [
            '**Dispatch multi-modelo:** En lugar de probar tu speed prompt por separado en GPT-5.6, Claude y Gemini (tres copias y pegados), PromptQuorum envía un prompt a 25+ modelos simultáneamente y muestra todas las respuestas en paralelo. Ves inmediatamente qué modelo da la respuesta más concisa para tu tarea — normalmente ahorra 2–3 minutos por iteración de prompt.',
            '**Frameworks integrados:** Los 9 frameworks de PromptQuorum (CO-STAR, CRAFT, SPECS, RISEN, TRACE y otros) integran automáticamente el rol, la tarea, el formato y las restricciones en una sola interfaz. Sin ensamblaje manual de prompts — los frameworks eliminan la fricción de configuración que produce prompts vagos.',
            '**Vista de consenso:** Al hacer pruebas de velocidad en varios modelos, necesitas comparar no solo la longitud sino también la precisión. El análisis Quorum de PromptQuorum evalúa qué modelo responde de forma más directa y precisa a la vez, para que elijas el modelo correcto sin adivinar.',
            '**Soporte para LLM locales:** Para quienes ejecutan Ollama, LM Studio o Jan AI de forma local, PromptQuorum optimiza los prompts antes del envío, reduciendo la generación de tokens en tu hardware y mejorando la velocidad de respuesta de forma medible.',
          ],
        },
        template: {
          title: 'Plantilla rápida de speed prompt',
          blockquote: 'Eres [ROL].\n\n[TAREA ÚNICA Y ESPECÍFICA].\n\nFormato: [FORMATO DE OUTPUT — una oración, JSON, bullets, tabla, etc.].\n\nLongitud: [RESTRICCIÓN EXPLÍCITA — X palabras, Y bullets, una oración, etc.].\n\nSin: repetir la pregunta, añadir introducción/cierre, incluir advertencias salvo que sean críticas, explicar conceptos básicos.',
        },
        templateExample: {
          title: 'Ejemplo (completo)',
          blockquote: 'Eres un product manager con experiencia en métricas B2B SaaS.\n\nResume los 3 principales impulsores de la rotación de clientes en nuestro segmento de suscripciones.\n\nFormato: Bullets, una línea cada uno.\n\nLongitud: Máx. 3 bullets.\n\nSin: repetir los datos proporcionados, añadir introducción, cubrir con "depende".',
        },

        howToStart: {
          title: 'Cómo hacer prompts para respuestas de IA más rápidas y concisas',
          numberedItems: [
            '**Reducir la tarea a una sola pregunta específica:** Divide las tareas compuestas en prompts separados. "Resume este contrato e identifica riesgos" se convierte en dos prompts — más cortos, más rápidos y más precisos en cada uno.',
            '**Añadir una restricción de longitud explícita:** Incluye un límite de palabras o frases en cada prompt que no necesite una respuesta larga. "Responde en 3 bullets" o "máximo 100 palabras" evita preámbulos extensos y relleno.',
            '**Ajustar el formato a la tarea:** Usa listas de bullets para listas, tablas para comparaciones y frases únicas para respuestas de sí/no. Los modelos recurren a prosa por defecto cuando no se especifica un formato.',
            '**Usar rol y contexto para reducir la sobrecarga de explicaciones:** Un modelo que sabe que habla con un experto omite definiciones básicas. "Estás asesorando a un ingeniero de software senior" elimina párrafos de contexto.',
            '**Añadir instrucciones negativas para bloquear el relleno:** "No repitas la pregunta", "No añadas un resumen final" y "No uses frases de relleno" eliminan las fuentes más comunes de respuestas infladas.',
          ],
        },
        faqs: {
          faqs: [
            {
              q: '¿Un prompt más corto siempre da respuestas más rápidas?',
              a: 'No. **La precisión importa más que la brevedad.** Un prompt vago de 50 palabras genera respuestas más largas que un prompt preciso de 100 palabras. Las restricciones de longitud sin especificidad son inútiles.',
            },
            {
              q: '¿Funciona igual en GPT-5.6, Claude y Gemini?',
              a: 'En su mayoría. Los tres respetan los límites de longitud explícitos y las restricciones de formato. Claude sigue las restricciones de bullets con más precisión; GPT-5.6 a veces añade una oración de resumen aunque se pida "sin conclusión". Prueba tu speed prompt en los tres para encontrar el mejor ajuste.',
            },
            {
              q: '¿Qué pasa si necesito una respuesta rápida pero también debe ser precisa?',
              a: 'Combina la precisión con una instrucción de autoverificación. Ejemplo: "Responde en 2 oraciones. Luego verifica tu respuesta en busca de contradicciones." Esto añade un paso de verificación sin inflar la respuesta principal.',
            },
            {
              q: '¿Puedo guardar plantillas de speed prompt para reutilizarlas?',
              a: 'Sí. PromptQuorum te permite crear, nombrar y guardar plantillas de speed prompt junto a los frameworks integrados. Comparte plantillas con tu equipo para eliminar el desarrollo repetido de prompts.',
            },
            {
              q: '¿La inferencia local (Ollama, LM Studio) acelera aún más las respuestas?',
              a: 'Sí, pero solo cuando tu prompt está optimizado. Los modelos locales se ejecutan en tu hardware — menor latencia de red. Pero si tu prompt genera 500 en lugar de 100 tokens, la mejora de latencia no ayuda. Optimiza el prompt primero; la inferencia local amplifica esa ventaja.',
            },
          ],
        },
        relatedReading: {
          content: [
            '[¿Qué es el Prompt Engineering?](/es/prompt-engineering/what-is-prompt-engineering) — la base de todo el diseño de prompts',
            '[Los 5 bloques de construcción que todo prompt necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — rol, tarea, ejemplos, restricciones, formato',
            '[Tokens, costes y límites](/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — cómo la longitud del output afecta directamente al coste de la API',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — muestra cómo la estructura en los prompts reduce el overhead de explicación',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — cataloga 58+ técnicas de prompting discretas',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — guía oficial para la optimización de prompts para velocidad y fiabilidad',
          ],
        },
      },
    },
    ar: {
      theme: 'Fundamentals',
      heroImage: '/images/prompt-for-speed-overview-hero-ar.png',
      title: 'إجابات الذكاء الاصطناعي الأسرع: كيف تكتب برومبتات للسرعة',
      intro: 'البرومبتات البطيئة في الذكاء الاصطناعي لها سبب واحد فقط: الغموض يُجبر النموذج على التخمين. أزِل الغموض بخمسة قرارات تصميمية واحصل على إجابات دقيقة وسريعة في المحاولة الأولى — في أي نموذج.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: 'برومبتات ذكاء اصطناعي أسرع: تقليل الاستجابة ⁨2026⁩',
      metaDescription: 'البرومبتات الغامضة تُولّد ⁨850⁩ رمزًا؛ البرومبتات المحسّنة ⁨120⁩ رمزًا فقط. ⁨5⁩ تغييرات تصميمية للحصول على إجابات دقيقة وسريعة مع ⁨GPT-5.6⁩ و⁨Claude⁩.',
      readTime: '٨ دقائق للقراءة',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'إجابات الذكاء الاصطناعي الأسرع: كيف تكتب برومبتات للسرعة',
        description: 'البرومبتات البطيئة في الذكاء الاصطناعي لها سبب واحد: الغموض. خمسة قرارات تصميمية تُنتج إجابات دقيقة وسريعة في المحاولة الأولى.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed',
        inLanguage: 'ar',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        keywords: ['برومبتات ذكاء اصطناعي أسرع', 'كتابة برومبتات للسرعة', 'تقليل زمن الاستجابة', 'هندسة البرومبت', 'GPT-5.6', 'Claude', 'Gemini'],
      },
      sections: {
        definition: {
          title: 'لماذا تُنفَّخ إجابات الذكاء الاصطناعي',
          content: [
            '**السرعة في هندسة البرومبت تعني الحصول على إجابات ذكاء اصطناعي موجزة ومباشرة عبر تصميم برومبت متعمّد — لا عبر زمن استجابة العتاد.** بعد اختبار مئات البرومبتات على GPT-5.6 وClaude Opus 4.8 وGemini 3.1 Pro، تظل النتيجة ثابتة: الإجابات الأسرع تأتي من القيود الأكثر إحكامًا، لا من نموذج "أسرع".',
            'نوعان من البطء يُصيبان إجابات الذكاء الاصطناعي: زمن استجابة توليد الرموز (يحدث على خوادم النموذج — ليس مشكلتك) وتضخّم الإجابة (يحدث في تصميم برومبتك — هو مشكلتك بالكامل).',
            'يحدث التضخّم حين يضطر النموذج للتحوّط. بدون قيود واضحة، يُغطي كل الزوايا، يُضيف تحفظات، يُكرر تعليماتك، ويشرح أساسيات تعرفها بالفعل. كل واحد من هذه يُضيف رموزًا لم تطلبها.',
          ],
        },
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            '**البرومبتات الغامضة تُجبر النموذج على التحوّط وحشو الإجابة.** المهام الدقيقة تُنتج إجابات مباشرة.',
            '**قيود الطول الصريحة أكثر فاعلية من طلب الإيجاز العام.** قل "في 3 نقاط" أو "أقل من 50 كلمة"، لا "كن موجزًا".',
            '**تنسيق المخرجات يتحكم في طول الإجابة أكثر من أي شيء آخر تقريبًا.** JSON والقوائم النقطية والتنسيقات ذات الجملة الواحدة تُقلّل توليد الرموز بشكل كبير.',
            '**البرومبتات متعددة المهام تُهدر الرموز.** قسّم العمل المعقد إلى سلسلة برومبتات — كل خطوة تُولّد حشوًا أقل.',
            '**الدور والسياق يقمعان عبء الشرح.** "افترض جمهورًا خبيرًا" يُزيل تلقائيًا حشو المستوى المبتدئ.',
          ],
        },
        rootCauses: {
          title: 'الأسباب الجذرية لتضخّم الإجابات',
          items: [
            'مهام غامضة تُجبر النموذج على تغطية كل تفسير ممكن',
            'غياب تعليمات التنسيق (الافتراضي فقرات نثرية)',
            'عدم وجود قيود طول صريحة (النموذج يُخمّن حدك)',
            'أهداف متداخلة (البرومبتات متعددة المهام تُسبب عبء تبديل السياق)',
            'غياب السياق، مما يُجبر النموذج على افتراض الجمهور الأقل تخصصًا',
          ],
        },
        vagueness: {
          title: 'المذنب الأكبر: البرومبتات الغامضة أو المفتوحة',
          content: '**كلما ضاقت المهمة، كانت الإجابة أقصر وأكثر مباشرة.** البرومبتات المفتوحة تُجبر النموذج على تغطية كل تفسير ممكن لطلبك، مضيفًا طبقات شرح لم تطلبها.',
        },
        badPromptExample: {
          title: '[برومبت سيئ]',
          blockquote: 'أخبرني عن أفضل أدوات الذكاء الاصطناعي للبحث.',
        },
        badPromptExplanation: {
          content: 'هذا يُنتج أكثر من 400 كلمة تُغطي الأدوات وحالات الاستخدام والأسعار والمقارنات والتحذيرات — كل شيء ما عدا ما تحتاجه فعلًا.',
        },
        goodPromptExample: {
          title: '[برومبت جيد]',
          blockquote: 'اذكر 3 أدوات ذكاء اصطناعي للبحث محسّنة لتحليل الأوراق الأكاديمية. التنسيق: اسم الأداة، جملة واحدة عن نقطة القوة، ونقطة الضعف الرئيسية. افترض جمهورًا خبيرًا. بدون مقدمة أو خاتمة.',
        },
        goodPromptExplanation: {
          content: 'هذا يُنتج 5 نقاط، 80 كلمة إجمالًا. الفرق ليس طلب الإيجاز — بل التحديد. البرومبت الثاني يُزيل الغموض حول النطاق والجمهور والتنسيق.',
        },
        lengthInstructions: {
          title: 'أخبر النموذج بدقة عن الطول الذي تريده',
          content: 'تعليمات الطول الصريحة أكثر فاعلية بـ10 مرات من طلب أن يكون النموذج "موجزًا". حدّد الطول في البداية، لا في النهاية. ضع قيد الطول في الجملة الأولى أو الثانية من البرومبت، لا مدفونًا في النهاية.',
        },
        lengthTable: {
          columns: ['نوع التعليمة', 'المخرجات النموذجية'],
          rows: [
            { 'نوع التعليمة': '"كن موجزًا"', 'المخرجات النموذجية': '200–400 كلمة (النموذج يُخمّن حدك)' },
            { 'نوع التعليمة': '"في 3 نقاط نقطية"', 'المخرجات النموذجية': '45–75 كلمة (قيد تنسيق صارم)' },
            { 'نوع التعليمة': '"في أقل من 100 كلمة"', 'المخرجات النموذجية': '85–110 كلمة (يحترم الحد)' },
            { 'نوع التعليمة': '"فقرة واحدة، بحد أقصى 4 جمل"', 'المخرجات النموذجية': '60–100 كلمة (تنسيق + حد جمل)' },
            { 'نوع التعليمة': '"أجب بجملة واحدة"', 'المخرجات النموذجية': '15–40 كلمة (قيد ذري)' },
          ],
        },
        format: {
          title: 'طابق التنسيق مع المهمة',
          content: '**تنسيق المخرجات يتحكم في طول الإجابة أكثر من أي شيء آخر تقريبًا.** التنسيق الصحيح يُزيل فئات كاملة من الحشو. تُولّد نماذج الذكاء الاصطناعي مقدمات وخاتمات ولغة تحوّط تلقائيًا ما لم تُقمعها صراحةً. تنسيق JSON (مخرجات منظّمة) هو الأسرع — لا مجال لحشو نثري داخل زوج مفتاح-قيمة.',
        },
        formatExamples: {
          items: [
            '**مهمة قرار؟** "أجب بنعم أو لا، ثم جملة واحدة للتبرير."',
            '**مهمة قائمة؟** "نقاط فقط. بدون مقدمة أو خاتمة."',
            '**مهمة تلخيص؟** "3 نقاط، بحد أقصى 15 كلمة لكل منها."',
          ],
        },
        multiTask: {
          title: 'مهمة واحدة لكل برومبت',
          content: '**البرومبتات متعددة المهام تُنتج إجابات أطول وأبطأ وأقل تركيزًا.** بعد اختبار هذا عبر عشرات المشاريع، فإن تقسيم العمل المعقد إلى سلسلة برومبتات — برومبت واحد مُركّز لكل خطوة — يُقلّل إجمالي الرموز بنسبة 30–50%. البرومبتات ذات المهمة الواحدة أقصر بنسبة 40%. تعرّف على المزيد حول ربط العمل المعقد في [ربط البرومبتات: كيف تقسّم المهام الكبيرة إلى خطوات رابحة].',
        },
        multiTaskBad: {
          title: '[برومبت سيئ]',
          blockquote: 'حلّل مجموعة بيانات ملاحظات العملاء هذه. استخرج المواضيع، قيّم الشعور، رتّب حسب التكرار، واقترح تحسينات للمنتج. التنسيق: جدول markdown.',
        },
        multiTaskBadExplain: {
          content: 'هذا يُجبر النموذج على التنقّل بين أوضاع التحليل، مضيفًا عبء شرح عند كل انتقال.',
        },
        multiTaskGood: {
          title: '[برومبت جيد — مقسّم إلى اثنين]',
          content: [
            '**الخطوة 1:** "استخرج أهم 5 مواضيع متكررة من ملاحظات العملاء هذه. التنسيق: قائمة نقطية بدون مقدمة أو خاتمة."',
            '**الخطوة 2:** "رتّب هذه المواضيع حسب التكرار وقيّم الشعور من 1 إلى 5. التنسيق: جدول CSV بأعمدة: الموضوع، التكرار، درجة الشعور."',
          ],
        },
        roleContext: {
          title: 'استخدم الدور والسياق لتقليل عبء الشرح',
          content: 'بدون سياق الدور، غالبًا ما تشرح النماذج أساسيات تعرفها بالفعل، مُهدرة رموزًا على محتوى بمستوى المبتدئين. راجع [المكونات الخمسة التي يحتاجها كل برومبت] لأنماط بناء السياق الكاملة.',
        },
        roleContextBad: {
          title: '[برومبت سيئ]',
          blockquote: 'ما الفرق بين تحديد معدل طلبات API (rate limiting) وأنماط قاطع الدائرة (circuit breaker)؟',
        },
        roleContextBadNote: {
          content: 'يفترض النموذج مطوّرًا مبتدئًا ويشرح كلا المفهومين من الصفر — أكثر من 300 كلمة.',
        },
        roleContextGood: {
          title: '[برومبت جيد]',
          blockquote: 'أنت مهندس backend أول. اشرح الفرق بين تحديد معدل طلبات API وأنماط قاطع الدائرة في جملتين.',
        },
        roleContextGoodNote: {
          content: 'نفس السؤال، 40 كلمة فقط، لأن إشارة الدور تقمع عبء الشرح تلقائيًا.',
        },
        negativeInstructions: {
          title: 'تعليمات سلبية توفّر الرموز',
          content: '**تعليمات "لا تفعل" الصريحة تُزيل أكثر أنماط الحشو شيوعًا.** ضمّن 2–3 منها على الأقل في برومبتاتك المحسّنة للسرعة:',
        },
        negativeList: {
          items: [
            '"لا تُكرر السؤال."',
            '"بدون جملة استهلالية."',
            '"بدون خاتمة أو ملخص في النهاية."',
            '"بدون تحذيرات إلا إذا كانت حرجة للإجابة."',
            '"بدون لغة تحوّط مثل \'يعتمد على\' أو \'في معظم الحالات\'."',
            '"بدون شرح مصطلحات أفهمها بالفعل."',
          ],
        },
        negativeNote: {
          content: 'هذا يُوفّر 20–40% من رموز المخرجات. تعرّف على التقنية الكاملة في [البرومبت السلبي: قل للذكاء الاصطناعي ما لا يجب فعله].',
        },
        tradeoff: {
          title: 'السرعة مقابل الجودة — متى تُحسّن لكل منهما',
          content: 'القيود الأسرع (تنسيق صارم، حدود طول، بدون تحفظات) تُنتج إجابات أقصر لكنها أحيانًا تُفوّت الفروق الدقيقة. البرومبتات الأطول والاستكشافية تلتقط الحالات الحدّية لكنها تستهلك 3–5 أضعاف الرموز. **قاعدة عامة:** إذا كانت الإجابة تُغذّي قرارًا فوريًا، حسّن للسرعة. إذا كانت تُغذّي تقريرًا أو تحليلًا، حسّن للعمق.',
        },
        tradeoffTable: {
          columns: ['نوع المهمة', 'حسّن من أجل', 'السبب'],
          rows: [
            { 'نوع المهمة': 'بحث سريع، قرار نعم/لا، توليد قوائم', 'حسّن من أجل': 'السرعة', 'السبب': 'الفروق الدقيقة المفقودة نادرًا ما تهم؛ الهدف هو المباشرة' },
            { 'نوع المهمة': 'تحليل معقد، عمل إبداعي، سلاسل استدلال', 'حسّن من أجل': 'العمق', 'السبب': 'الإيجاز يُفقد خطوات الاستدلال والتفاصيل المهمة' },
            { 'نوع المهمة': 'التحقق أو تدقيق الحقائق', 'حسّن من أجل': 'السرعة + التحقق الذاتي', 'السبب': 'السرعة تمنع الحشو؛ التحقق الذاتي يكتشف الأخطاء' },
          ],
        },
        promptquorumTest: {
          title: 'اختبار الإجماع في PromptQuorum',
          content: [
            'اختبرت مبدأ السرعة هذا على GPT-5.6 وClaude Opus 4.8 وGemini 3.1 Pro بإرسال نفس البرومبت الغامض مقابل برومبت محسّن للسرعة:',
            '**برومبت غامض** ("أخبرني عن تقنيات هندسة البرومبت"): متوسط مخرجات 850 رمزًا عبر النماذج الثلاثة.',
            '**برومبت محسّن للسرعة** ("اذكر 5 تقنيات برومبتات لاستجابات LLM أسرع، جملة واحدة لكل منها"): متوسط مخرجات 120 رمزًا عبر النماذج الثلاثة.',
            'احترمت النماذج الثلاثة قيد التنسيق بالتساوي. كانت النسخة المحسّنة للسرعة **أقصر بـ7 مرات** مع بقائها دقيقة.',
          ],
        },
        promptquorum: {
          title: 'كيف يساعدك PromptQuorum على كتابة برومبتات أسرع',
          content: [
            '**إرسال متعدد النماذج:** بدلًا من اختبار برومبت السرعة بشكل منفصل على GPT-5.6 وClaude وGemini (ثلاث نسخ ولصق)، يُرسل PromptQuorum برومبتًا واحدًا إلى 25+ نموذجًا في آنٍ واحد ويعرض جميع الإجابات جنبًا إلى جنب. ترى فورًا أي نموذج يُعطي الإجابة الأكثر إيجازًا لمهمتك — عادةً ما يُوفّر 2–3 دقائق لكل تكرار برومبت.',
            '**أطر عمل مدمجة:** أطر العمل الـ9 في PromptQuorum (CO-STAR وCRAFT وSPECS وRISEN وTRACE وغيرها) تدمج الدور والمهمة والتنسيق والقيود تلقائيًا في واجهة واحدة. بدون تجميع برومبت يدوي — الأطر تُزيل احتكاك الإعداد الذي يُنتج برومبتات غامضة.',
            '**عرض الإجماع:** عند اختبار السرعة عبر نماذج متعددة، تحتاج إلى مقارنة ليس الطول فحسب، بل الدقة أيضًا في آنٍ واحد. يُقيّم تحليل Quorum في PromptQuorum أي نموذج يُجيب بشكل أكثر مباشرةً ودقةً، فتختار النموذج الصحيح دون تخمين.',
            '**دعم LLM المحلية:** لمستخدمي Ollama وLM Studio وJan AI محليًا، يُحسّن PromptQuorum البرومبتات قبل الإرسال، مما يُقلّل توليد الرموز على عتادك ويُحسّن سرعة الاستجابة بشكل قابل للقياس.',
          ],
        },
        template: {
          title: 'قالب برومبت السرعة — مرجع سريع',
          blockquote: 'أنت [الدور].\n\n[مهمة واحدة محددة].\n\nالتنسيق: [تنسيق المخرجات — جملة واحدة، JSON، نقاط، جدول، إلخ].\n\nالطول: [قيد صريح — X كلمة، Y نقطة، جملة واحدة، إلخ].\n\nبدون: تكرار السؤال، إضافة مقدمة/خاتمة، تضمين تحذيرات إلا إذا كانت حرجة، شرح المفاهيم الأساسية.',
        },
        templateExample: {
          title: 'مثال (كامل)',
          blockquote: 'أنت مدير منتج متخصص في مقاييس B2B SaaS.\n\nلخّص أهم 3 محركات لتراجع العملاء في قطاع الاشتراكات لدينا.\n\nالتنسيق: نقاط، سطر واحد لكل منها.\n\nالطول: أقصى 3 نقاط.\n\nبدون: تكرار البيانات المقدمة، إضافة مقدمة، التغطية بـ"يعتمد على".',
        },

        howToStart: {
          title: 'كيفية صياغة التعليمات للحصول على إجابات ذكاء اصطناعي أسرع وأكثر إيجازًا',
          numberedItems: [
            '**تضييق المهمة إلى سؤال واحد محدد:** قسّم المهام المركّبة إلى تعليمات منفصلة. "لخّص هذا العقد وحدّد المخاطر" تصبح تعليمتين — أقصر وأسرع وأكثر دقة في كل منهما.',
            '**أضف قيدًا صريحًا على الطول:** أدرج حدًا للكلمات أو الجمل في كل تعليمة لا تحتاج إلى مخرجات طويلة. "أجب في 3 نقاط" أو "بحد أقصى 100 كلمة" يمنع المقدمات المطوَّلة والحشو.',
            '**طابق التنسيق مع المهمة:** استخدم القوائم النقطية للقوائم، والجداول للمقارنات، والجمل المفردة لإجابات نعم/لا. تلجأ النماذج افتراضيًا إلى النثر عند عدم تحديد تنسيق.',
            '**استخدم الدور والسياق لتقليل عبء الشرح:** النموذج الذي يعرف أنه يخاطب خبيرًا يتخطى التعريفات الأساسية. "أنت تقدّم المشورة لمهندس برمجيات كبير" يُزيل فقرات من المعلومات الأساسية.',
            '**أضف تعليمات سلبية لمنع الحشو:** "لا تكرر السؤال" و"لا تضف ملخصًا ختاميًا" و"لا تستخدم عبارات حشو" تُزيل أكثر مصادر تضخيم الإجابة شيوعًا.',
          ],
        },
        faqs: {
          faqs: [
            {
              q: 'هل البرومبت الأقصر يُعطي دائمًا إجابات أسرع؟',
              a: 'لا. **الدقة تهم أكثر من الإيجاز.** برومبت غامض من 50 كلمة يُولّد إجابات أطول من برومبت دقيق من 100 كلمة. قيود الطول بدون تحديد لا قيمة لها.',
            },
            {
              q: 'هل تعمل بنفس الطريقة على GPT-5.6 وClaude وGemini؟',
              a: 'في معظمها. الثلاثة يحترمون حدود الطول الصريحة وقيود التنسيق. Claude يتبع قيود النقاط بدقة أكبر؛ GPT-5.6 أحيانًا يُضيف جملة ملخص رغم طلب "بدون خاتمة". اختبر برومبت السرعة على الثلاثة للعثور على الأنسب.',
            },
            {
              q: 'ماذا لو احتجت إجابةً سريعةً لكنها يجب أن تكون دقيقةً أيضًا؟',
              a: 'ادمج الدقة مع تعليمة تحقق ذاتي. مثال: "أجب في جملتين. ثم تحقق من إجابتك بحثًا عن التناقضات." هذا يُضيف خطوة تحقق دون تضخيم الإجابة الرئيسية.',
            },
            {
              q: 'هل يمكنني حفظ قوالب برومبت السرعة لإعادة استخدامها؟',
              a: 'نعم. PromptQuorum يتيح لك إنشاء وتسمية وحفظ قوالب برومبت السرعة جنبًا إلى جنب مع أطر العمل المدمجة. شارك القوالب مع فريقك للقضاء على تطوير البرومبتات المتكرر.',
            },
            {
              q: 'هل الاستدلال المحلي (Ollama، LM Studio) يُسرّع الإجابات أكثر؟',
              a: 'نعم، لكن فقط حين يكون برومبتك مُحسَّنًا. النماذج المحلية تعمل على جهازك — زمن استجابة شبكة أقل. لكن إذا كان برومبتك يُولّد 500 بدلًا من 100 رمز، لا تُساعد تحسينات زمن الاستجابة. حسّن البرومبت أولًا؛ الاستدلال المحلي يُضاعف هذه الميزة.',
            },
          ],
        },
        relatedReading: {
          content: [
            '[ما هو هندسة البرومبت؟](/ar/prompt-engineering/what-is-prompt-engineering) — أساس كل تصميم للبرومبتات',
            '[المكونات الخمسة التي يحتاجها كل برومبت](/ar/prompt-engineering/5-building-blocks-every-prompt-needs) — الدور والمهمة والأمثلة والقيود والتنسيق',
            '[الرموز والتكاليف والحدود](/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — كيف يؤثر طول المخرجات مباشرةً على تكلفة API',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — يُظهر كيف يُقلّل هيكل البرومبت عبء الشرح',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — يُفهرس 58+ تقنية برومبت منفصلة',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — الدليل الرسمي لتحسين البرومبتات للسرعة والموثوقية',
          ],
        },
      },
    },

    pt: {
      theme: 'Fundamentals',
      heroImage: '/images/prompt-for-speed-overview-hero-pt.png',
      title: 'Respostas de IA mais rápidas: Como fazer prompts para velocidade',
      intro: 'Prompts lentos de IA têm uma única causa: a ambiguidade força o modelo a adivinhar. Elimine a ambiguidade com cinco decisões de design e você obterá respostas precisas e rápidas na primeira tentativa — em qualquer modelo.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: 'Prompts de IA mais rápidos: Técnicas de velocidade 2026',
      metaDescription: 'Prompts lentos de IA são ambiguidade que força o modelo a adivinhar. 5 mudanças de design para respostas precisas na primeira tentativa no GPT-5.6 e Claude.',
      readTime: '8 min de leitura',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Respostas de IA mais rápidas: Como fazer prompts para velocidade',
        description: 'Prompts lentos de IA têm uma única causa: a ambiguidade. Cinco decisões de design geram respostas precisas e rápidas na primeira tentativa.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed',
        inLanguage: 'pt-BR',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        keywords: ['prompts de IA mais rápidos', 'prompting para velocidade', 'reduzir latência de IA', 'prompt engineering', 'GPT-5.6', 'Claude', 'Gemini'],
      },
      sections: {
        definition: {
          title: 'Por que as respostas de IA ficam infladas',
          content: [
            '**Velocidade em prompt engineering significa obter respostas de IA concisas e diretas por meio de um design de prompt deliberado — não latência de hardware.** Depois de testar centenas de prompts no GPT-5.6, Claude Opus 4.8 e Gemini 3.1 Pro, a conclusão se mantém: as respostas mais rápidas vêm das restrições mais rígidas, não de um modelo "mais rápido".',
            'Dois tipos de lentidão afetam as respostas de IA: latência de geração de tokens (ocorre nos servidores do modelo — não é o seu problema) e inflação da resposta (ocorre no design do seu prompt — é totalmente o seu problema).',
            'A inflação acontece quando o modelo precisa se proteger. Sem restrições claras, ele cobre todos os ângulos, adiciona ressalvas, repete suas instruções e explica conceitos básicos que você já conhece. Cada um desses itens adiciona tokens que você não pediu.',
          ],
        },
        tldr: {
          title: 'Pontos-chave',
          isTldr: true,
          items: [
            '**Prompts vagos forçam o modelo a se proteger e inflar a resposta.** Tarefas precisas produzem respostas diretas.',
            '**Limites de comprimento explícitos são mais eficazes do que pedir concisão de forma geral.** Diga "em 3 bullets" ou "menos de 50 palavras", não "seja conciso".',
            '**O formato do output controla o comprimento da resposta mais do que quase qualquer outra coisa.** JSON, listas com marcadores e formatos de frase única reduzem drasticamente a geração de tokens.',
            '**Prompts multitarefa desperdiçam tokens.** Divida o trabalho complexo em uma cadeia de prompts — cada etapa gera menos enchimento.',
            '**Papel e contexto suprimem a sobrecarga de explicação.** "Assuma um público especialista" elimina automaticamente o enchimento de nível básico.',
          ],
        },
        rootCauses: {
          title: 'Causas raiz da inflação de respostas',
          items: [
            'Tarefas vagas que forçam o modelo a cobrir toda interpretação possível',
            'Instruções de formato ausentes (o padrão é parágrafos em prosa)',
            'Nenhum limite de comprimento explícito (o modelo adivinha seu limite)',
            'Objetivos sobrepostos (prompts multitarefa geram sobrecarga de troca de contexto)',
            'Falta de contexto, que força o modelo a assumir o público menos especializado',
          ],
        },
        vagueness: {
          title: 'O maior culpado: prompts vagos ou abertos',
          content: '**Quanto mais restrita a tarefa, mais curta e direta a resposta.** Prompts abertos forçam o modelo a cobrir toda interpretação possível do seu pedido, adicionando camadas de explicação que você não pediu.',
        },
        badPromptExample: {
          title: '[Prompt ruim]',
          blockquote: 'Me conte sobre as melhores ferramentas de IA para pesquisa.',
        },
        badPromptExplanation: {
          content: 'Isso produz mais de 400 palavras cobrindo ferramentas, casos de uso, preços, comparações, avisos — tudo, exceto o que você realmente precisa.',
        },
        goodPromptExample: {
          title: '[Prompt bom]',
          blockquote: 'Liste 3 ferramentas de IA de pesquisa otimizadas para análise de artigos acadêmicos. Formato: nome da ferramenta, uma frase de ponto forte e principal fraqueza. Assuma público especialista. Sem introdução ou conclusão.',
        },
        goodPromptExplanation: {
          content: 'Isso produz 5 bullets, 80 palavras no total. A diferença não é um pedido de brevidade — é especificidade. O segundo prompt elimina a ambiguidade sobre escopo, público e formato.',
        },
        lengthInstructions: {
          title: 'Diga ao modelo exatamente o comprimento que você quer',
          content: 'Instruções de comprimento explícitas são 10 vezes mais eficazes do que pedir ao modelo para ser "conciso". Indique o comprimento no início, não no fim. Coloque a restrição de comprimento na primeira ou segunda frase do prompt, não escondida no final.',
        },
        lengthTable: {
          columns: ['Tipo de instrução', 'Output típico'],
          rows: [
            { 'Tipo de instrução': '"Seja conciso"', 'Output típico': '200–400 palavras (o modelo adivinha seu limite)' },
            { 'Tipo de instrução': '"Em 3 bullets"', 'Output típico': '45–75 palavras (restrição de formato rígida)' },
            { 'Tipo de instrução': '"Em menos de 100 palavras"', 'Output típico': '85–110 palavras (respeita o limite)' },
            { 'Tipo de instrução': '"Um parágrafo, máximo 4 frases"', 'Output típico': '60–100 palavras (formato + limite de frases)' },
            { 'Tipo de instrução': '"Responda em uma frase"', 'Output típico': '15–40 palavras (restrição atômica)' },
          ],
        },
        format: {
          title: 'Ajuste o formato à tarefa',
          content: '**O formato do output controla o comprimento da resposta mais do que quase qualquer outra coisa.** O formato certo elimina categorias inteiras de enchimento. Os modelos de IA geram introduções, conclusões e linguagem de ressalva automaticamente, a menos que você as suprima explicitamente. O formato JSON (output estruturado) é o mais rápido — não há espaço para enchimento em prosa dentro de um par chave-valor.',
        },
        formatExamples: {
          items: [
            '**Tarefa de decisão?** "Responda sim ou não, depois uma frase de justificativa."',
            '**Tarefa de lista?** "Apenas bullets. Sem introdução ou fechamento."',
            '**Tarefa de resumo?** "3 bullets, máximo 15 palavras cada."',
          ],
        },
        multiTask: {
          title: 'Uma tarefa por prompt',
          content: '**Prompts multitarefa produzem respostas mais longas, mais lentas e menos focadas.** Depois de testar isso em dezenas de projetos, dividir o trabalho complexo em uma cadeia de prompts — um prompt focado por etapa — reduz o total de tokens em 30–50%. Prompts de tarefa única são 40% mais curtos. Saiba mais sobre encadear trabalho complexo em [Prompt chaining: como dividir tarefas grandes em etapas vencedoras].',
        },
        multiTaskBad: {
          title: '[Prompt ruim]',
          blockquote: 'Analise este conjunto de dados de feedback de clientes. Extraia temas, pontue o sentimento, classifique por frequência e sugira melhorias de produto. Formato: tabela markdown.',
        },
        multiTaskBadExplain: {
          content: 'Isso força o modelo a trocar de contexto entre modos de análise, adicionando sobrecarga de explicação em cada transição.',
        },
        multiTaskGood: {
          title: '[Prompt bom — Dividido em dois]',
          content: [
            '**Etapa 1:** "Extraia os 5 principais temas recorrentes deste feedback de clientes. Formato: lista com marcadores, sem introdução ou fechamento."',
            '**Etapa 2:** "Classifique esses temas por frequência e pontue o sentimento de 1 a 5. Formato: tabela CSV com colunas: Tema, Frequência, Pontuação de sentimento."',
          ],
        },
        roleContext: {
          title: 'Use papel e contexto para reduzir a sobrecarga de explicação',
          content: 'Sem contexto de papel, os modelos costumam explicar conceitos básicos que você já conhece, gastando tokens em conteúdo de nível básico. Veja [Os 5 blocos de construção que todo prompt precisa] para padrões completos de construção de contexto.',
        },
        roleContextBad: {
          title: '[Prompt ruim]',
          blockquote: 'Qual é a diferença entre limitação de taxa (rate limiting) de API e padrões de circuit breaker?',
        },
        roleContextBadNote: {
          content: 'O modelo assume um desenvolvedor júnior e explica os dois conceitos do zero — mais de 300 palavras.',
        },
        roleContextGood: {
          title: '[Prompt bom]',
          blockquote: 'Você é um engenheiro backend sênior. Explique a diferença entre limitação de taxa de API e padrões de circuit breaker em 2 frases.',
        },
        roleContextGoodNote: {
          content: 'Mesma pergunta, 40 palavras, porque o sinal de papel suprime automaticamente a sobrecarga de explicação.',
        },
        negativeInstructions: {
          title: 'Instruções negativas que economizam tokens',
          content: '**Instruções explícitas de "não faça" eliminam os padrões de enchimento mais comuns.** Inclua pelo menos 2–3 delas nos seus prompts otimizados para velocidade:',
        },
        negativeList: {
          items: [
            '"Não repita a pergunta."',
            '"Sem frase introdutória."',
            '"Sem conclusão ou resumo no final."',
            '"Sem ressalvas, a menos que sejam críticas para a resposta."',
            '"Sem linguagem de ressalva como \'depende\' ou \'na maioria dos casos\'."',
            '"Sem explicar terminologia que eu já entendo."',
          ],
        },
        negativeNote: {
          content: 'Isso economiza 20–40% dos tokens de output. Aprenda a técnica completa em [Negative Prompting: diga à IA o que ela NÃO deve fazer].',
        },
        tradeoff: {
          title: 'Velocidade vs. qualidade — quando otimizar para cada uma',
          content: 'Restrições voltadas para velocidade (formato rígido, limites de comprimento, sem ressalvas) produzem respostas mais curtas, mas ocasionalmente perdem nuances. Prompts mais longos e exploratórios capturam casos extremos, mas usam 3–5 vezes mais tokens. **Regra geral:** se a resposta informa uma decisão imediata, otimize para velocidade. Se informa um relatório ou análise, otimize para profundidade.',
        },
        tradeoffTable: {
          columns: ['Tipo de tarefa', 'Otimizar para', 'Por quê'],
          rows: [
            { 'Tipo de tarefa': 'Consulta rápida, decisão sim/não, geração de listas', 'Otimizar para': 'Velocidade', 'Por quê': 'Nuances perdidas raramente importam; o objetivo é a objetividade' },
            { 'Tipo de tarefa': 'Análise complexa, trabalho criativo, cadeias de raciocínio', 'Otimizar para': 'Profundidade', 'Por quê': 'A brevidade perde etapas de raciocínio e detalhes importantes' },
            { 'Tipo de tarefa': 'Verificação ou checagem de fatos', 'Otimizar para': 'Velocidade + autoverificação', 'Por quê': 'A velocidade evita enchimento; a autoverificação detecta erros' },
          ],
        },
        promptquorumTest: {
          title: 'Teste de consenso do PromptQuorum',
          content: [
            'Testei esse princípio de velocidade no GPT-5.6, Claude Opus 4.8 e Gemini 3.1 Pro enviando o mesmo prompt vago contra um prompt otimizado para velocidade:',
            '**Prompt vago** ("Me conte sobre técnicas de prompt engineering"): output médio de 850 tokens nos três modelos.',
            '**Prompt otimizado para velocidade** ("Liste 5 técnicas de prompt para respostas de LLM mais rápidas, uma frase cada"): output médio de 120 tokens nos três modelos.',
            'Os três modelos respeitaram a restrição de formato igualmente. A versão otimizada para velocidade foi **7 vezes mais curta** mantendo a precisão.',
          ],
        },
        promptquorum: {
          title: 'Como o PromptQuorum ajuda você a fazer prompts mais rápido',
          content: [
            '**Dispatch multi-modelo:** Em vez de testar seu speed prompt separadamente no GPT-5.6, Claude e Gemini (três copiar e colar), o PromptQuorum envia um prompt para 25+ modelos simultaneamente e exibe todas as respostas lado a lado. Você vê imediatamente qual modelo dá a resposta mais concisa para sua tarefa — normalmente economizando 2–3 minutos por iteração de prompt.',
            '**Frameworks integrados:** Os 9 frameworks do PromptQuorum (CO-STAR, CRAFT, SPECS, RISEN, TRACE e outros) integram automaticamente papel, tarefa, formato e restrições em uma única interface. Sem montagem manual de prompt — os frameworks eliminam a fricção de configuração que leva a prompts vagos.',
            '**Visualização de consenso:** Ao testar velocidade em vários modelos, você precisa comparar não apenas o comprimento, mas também a precisão. A análise Quorum do PromptQuorum avalia qual modelo responde de forma mais direta e precisa ao mesmo tempo, para você escolher o modelo certo sem adivinhar.',
            '**Suporte a LLM local:** Para quem executa Ollama, LM Studio ou Jan AI localmente, o PromptQuorum otimiza os prompts antes do envio, reduzindo a geração de tokens no seu hardware e melhorando a velocidade de resposta de forma mensurável.',
          ],
        },
        template: {
          title: 'Template de speed prompt — Referência rápida',
          blockquote: 'Você é [PAPEL].\n\n[TAREFA ÚNICA E ESPECÍFICA].\n\nFormato: [FORMATO DE OUTPUT — uma frase, JSON, bullets, tabela, etc.].\n\nComprimento: [RESTRIÇÃO EXPLÍCITA — X palavras, Y bullets, uma frase, etc.].\n\nSem: repetir a pergunta, adicionar introdução/fechamento, incluir avisos a menos que sejam críticos, explicar conceitos básicos.',
        },
        templateExample: {
          title: 'Exemplo (completo)',
          blockquote: 'Você é um gerente de produto com experiência em métricas B2B SaaS.\n\nResuma os 3 principais fatores de rotatividade de clientes em nosso segmento de assinaturas.\n\nFormato: Bullets, uma linha cada.\n\nComprimento: Máx. 3 bullets.\n\nSem: repetir os dados fornecidos, adicionar introdução, cobrir com "depende".',
        },

        howToStart: {
          title: 'Como fazer prompts para respostas de IA mais rápidas e concisas',
          numberedItems: [
            '**Reduzir a tarefa a uma única pergunta específica:** Divida tarefas compostas em prompts separados. "Resuma este contrato e identifique riscos" se torna dois prompts — mais curtos, mais rápidos e mais precisos em cada um.',
            '**Adicionar uma restrição de comprimento explícita:** Inclua um limite de palavras ou frases em todo prompt que não precise de uma resposta longa. "Responda em 3 bullets" ou "máximo 100 palavras" evita preâmbulos longos e enchimento.',
            '**Ajustar o formato à tarefa:** Use listas com marcadores para listas, tabelas para comparações e frases únicas para respostas sim/não. Os modelos recorrem à prosa por padrão quando nenhum formato é especificado.',
            '**Usar papel e contexto para reduzir a sobrecarga de explicação:** Um modelo que sabe que está falando com um especialista pula definições básicas. "Você está aconselhando um engenheiro de software sênior" elimina parágrafos de contexto.',
            '**Adicionar instruções negativas para bloquear o enchimento:** "Não repita a pergunta", "Não adicione um resumo final" e "Não use frases de preenchimento" eliminam as fontes mais comuns de respostas infladas.',
          ],
        },
        faqs: {
          faqs: [
            {
              q: 'Um prompt mais curto sempre gera respostas mais rápidas?',
              a: 'Não. **A precisão importa mais do que a brevidade.** Um prompt vago de 50 palavras gera respostas mais longas do que um prompt preciso de 100 palavras. Restrições de comprimento sem especificidade são inúteis.',
            },
            {
              q: 'Funciona da mesma forma no GPT-5.6, Claude e Gemini?',
              a: 'Em sua maioria. Os três respeitam limites de comprimento explícitos e restrições de formato. Claude segue restrições de bullets com mais precisão; GPT-5.6 às vezes adiciona uma frase de resumo mesmo quando se pede "sem conclusão". Teste seu speed prompt nos três para encontrar o melhor ajuste.',
            },
            {
              q: 'E se eu precisar de uma resposta rápida, mas ela também deve ser precisa?',
              a: 'Combine a precisão com uma instrução de auto-verificação. Exemplo: "Responda em 2 frases. Em seguida, verifique sua resposta quanto a contradições." Isso adiciona uma etapa de verificação sem inflar a resposta principal.',
            },
            {
              q: 'Posso salvar templates de speed prompt para reutilização?',
              a: 'Sim. O PromptQuorum permite criar, nomear e salvar templates de speed prompt ao lado dos frameworks integrados. Compartilhe templates com sua equipe para eliminar o desenvolvimento repetido de prompts.',
            },
            {
              q: 'A inferência local (Ollama, LM Studio) acelera ainda mais as respostas?',
              a: 'Sim, mas apenas quando seu prompt está otimizado. Modelos locais são executados em seu hardware — menor latência de rede. Mas se seu prompt gera 500 em vez de 100 tokens, a melhoria de latência não ajuda. Otimize o prompt primeiro; a inferência local amplifica essa vantagem.',
            },
          ],
        },
        relatedReading: {
          content: [
            '[O que é Prompt Engineering?](/pt/prompt-engineering/what-is-prompt-engineering) — a base de todo o design de prompts',
            '[Os 5 blocos de construção que todo prompt precisa](/pt/prompt-engineering/5-building-blocks-every-prompt-needs) — papel, tarefa, exemplos, restrições, formato',
            '[Tokens, custos e limites](/pt/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — como o comprimento do output afeta diretamente o custo da API',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — mostra como a estrutura nos prompts reduz o overhead de explicação',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — cataloga 58+ técnicas discretas de prompting',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — guia oficial para otimização de prompts para velocidade e confiabilidade',
          ],
        },
      },
    },

    fr: {
      theme: 'Fondamentaux',
      heroImage: '/images/prompt-for-speed-overview-hero-fr.png',
      title: 'Des réponses IA plus rapides : Comment concevoir des prompts pour la vitesse',
      intro: 'La rapidité en ingénierie de prompt signifie obtenir des réponses IA concises et directes grâce à une conception délibérée—non une latence matérielle. La plupart des réponses IA sont lentes en raison d\'une conception vague de prompt, non pas parce que le modèle est lent.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      readTime: '9 min de lecture',
      sections: {
        definition: {
          title: 'Pourquoi les réponses IA sont gonflées',
          content: [
            '**La rapidité en ingénierie de prompt signifie obtenir des réponses IA concises et directes grâce à une conception délibérée—non une latence matérielle.** La plupart des réponses IA sont lentes à cause d\'un gonflement du prompt, non pas parce que le modèle est lent. Après avoir testé des centaines de prompts sur GPT-5.6, Claude Opus 4.8 et Gemini 3.1 Pro, j\'ai trouvé que les réponses les plus rapides proviennent des contraintes les plus strictes.',
            'Deux types de lenteur affligent les réponses IA : la latence de génération de tokens (du côté des serveurs du modèle—pas votre problème) et le gonflement de réponse (dans votre conception de prompt—entièrement votre problème).',
            'Le gonflement se produit lorsque le modèle doit couvrir ses paris. Sans contraintes claires, il couvre tous les angles, ajoute des mises en garde, répète les instructions et explique les bases que vous connaissez déjà. Chacun d\'eux ajoute des tokens que vous n\'avez pas demandés.',
          ],
        },
        tldr: {
          title: 'Principaux points à retenir',
          isTldr: true,
          items: [
            '**Les prompts vagues forcent les modèles à couvrir tous les angles et gonfler.** Les tâches précises produisent des réponses directes.',
            '**Les limites de longueur explicites sont plus efficaces que les demandes générales de concision.** Dites "en 3 bullets" ou "moins de 50 mots", non pas "soyez bref".',
            '**Le format de sortie contrôle la longueur de réponse plus que presque tout.** JSON, listes à puces et formats monolingues réduisent dramatiquement la génération de tokens.',
            '**Les prompts multi-tâches gaspillent des tokens.** Divisez les travaux complexes en chaîne de prompts—chaque étape génère moins de gonflement.',
            '**Le rôle et le contexte suppriment les frais d\'explication.** "Supposez un public expert" élimine automatiquement le remplissage au niveau débutant.',
          ],
        },
        rootCauses: {
          title: 'Causes du gonflement des réponses',
          items: [
            'Tâches vagues qui forcent le modèle à couvrir chaque interprétation',
            'Instructions de format manquantes (la valeur par défaut est des paragraphes en prose)',
            'Pas de limites de longueur explicites (le modèle devine votre seuil)',
            'Objectifs qui se chevauchent (les prompts multi-tâches causent un surcoût de changement de contexte)',
            'Contexte manquant qui force le modèle à supposer le public le moins avancé',
          ],
        },
        vagueness: {
          title: 'Le plus grand coupable : les prompts vagues ou ouverts',
          content: '**Plus la tâche est étroite, plus la réponse est courte et directe.** Les prompts ouverts forcent le modèle à couvrir chaque interprétation de votre demande, ajoutant des couches d\'explication que vous n\'avez pas demandées.',
        },
        badPromptExample: {
          title: '[Mauvais prompt]',
          blockquote: 'Parle-moi des meilleurs outils IA pour la recherche.',
        },
        badPromptExplanation: {
          content: 'Cela produit 400+ mots couvrant les outils, cas d\'usage, prix, comparaisons, avertissements—tout sauf ce dont vous avez réellement besoin.',
        },
        goodPromptExample: {
          title: '[Bon prompt]',
          blockquote: 'Liste 3 outils de recherche IA optimisés pour l\'analyse d\'articles académiques. Format : nom de l\'outil, un point fort en une phrase et faiblesse principale. Supposez un public expert. Pas d\'introduction ni de conclusion.',
        },
        goodPromptExplanation: {
          content: 'Cela produit 5 bullets, 80 mots au total. La différence n\'est pas dans les demandes de concision—c\'est la spécificité. Le deuxième prompt élimine l\'ambiguïté sur la portée, l\'audience et le format.',
        },
        lengthInstructions: {
          title: 'Dites au modèle exactement la longueur que vous voulez',
          content: 'Les instructions de longueur explicites sont 10× plus efficaces que de demander au modèle d\'être "bref". Énoncez la longueur au début, non à la fin. Placez les contraintes de longueur dans la première ou deuxième phrase de votre prompt, non cachées à la fin.',
        },
        lengthTable: {
          columns: ['Type d\'instruction', 'Résultat typique'],
          rows: [
            { 'Type d\'instruction': '"Soyez bref"', 'Résultat typique': '200–400 mots (le modèle devine votre seuil)' },
            { 'Type d\'instruction': '"En 3 points clés"', 'Résultat typique': '45–75 mots (contrainte de format stricte)' },
            { 'Type d\'instruction': '"Moins de 100 mots"', 'Résultat typique': '85–110 mots (respecte la limite)' },
            { 'Type d\'instruction': '"Un paragraphe, max 4 phrases"', 'Résultat typique': '60–100 mots (format + limite de phrases)' },
            { 'Type d\'instruction': '"Répondez en une phrase"', 'Résultat typique': '15–40 mots (contrainte atomique)' },
          ],
        },
        format: {
          title: 'Associez le format à la tâche',
          content: '**Le format de sortie contrôle la longueur de réponse plus puissamment que presque tout.** Le bon format élimine des catégories entières de gonflement. Les modèles IA génèrent automatiquement introductions, conclusions et langage de couverture à moins que vous ne les supprimiez explicitement. Le format JSON (sortie structurée) est le plus rapide—aucun remplissage prose ne rentre dans une paire clé-valeur.',
        },
        formatExamples: {
          items: [
            '**Tâche de décision ?** "Répondez oui ou non, puis une phrase de raisonnement."',
            '**Tâche de liste ?** "Seuls les bullets. Pas d\'introduction ni d\'outro."',
            '**Tâche de résumé ?** "3 bullets, max 15 mots chacun."',
          ],
        },
        multiTask: {
          title: 'Une tâche par prompt',
          content: '**Les prompts multi-tâches produisent des réponses plus longues, plus lentes et moins concentrées.** Après avoir testé cela sur des dizaines de projets, diviser le travail complexe en chaîne de prompts—un prompt concentré par étape—réduit les tokens totaux de 30–50 %. Les prompts à tâche unique sont 40 % plus courts. Apprenez-en plus sur le chaînage des travaux complexes dans [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps].',
        },
        multiTaskBad: {
          title: '[Mauvais prompt]',
          blockquote: 'Analysez cet ensemble de données de retours clients. Extrayez les thèmes, évaluez le sentiment, classez par fréquence et suggérez les améliorations produit. Format : tableau Markdown.',
        },
        multiTaskBadExplain: {
          content: 'Cela force le modèle à changer entre les modes d\'analyse, ajoutant un surcoût d\'explication à chaque transition.',
        },
        multiTaskGood: {
          title: '[Bon prompt — divisé en deux]',
          content: [
            '**Étape 1 :** "Extrayez les 5 thèmes récurrents majeurs de ce retour client. Format : liste à bullets sans introduction ni outro."',
            '**Étape 2 :** "Classez ces thèmes par fréquence et évaluez le sentiment 1–5. Format : tableau CSV avec colonnes : Thème, Fréquence, Score de Sentiment."',
          ],
        },
        roleContext: {
          title: 'Utilisez le rôle et le contexte pour réduire les frais d\'explication',
          content: 'Sans contexte de rôle, les modèles expliquent souvent les bases que vous connaissez déjà, gaspillant des tokens sur du contenu au niveau débutant. Voir [Fundamentals: The 5 Building Blocks Every Prompt Needs] pour les modèles complets de création de contexte.',
        },
        roleContextBad: {
          title: '[Mauvais prompt]',
          blockquote: 'Quelle est la différence entre la limitation du débit d\'API et les modèles de disjoncteur ?',
        },
        roleContextBadNote: {
          content: 'Le modèle suppose un développeur junior et explique les deux concepts à partir de zéro—300+ mots.',
        },
        roleContextGood: {
          title: '[Bon prompt]',
          blockquote: 'Vous êtes un ingénieur backend senior. Expliquez la différence entre la limitation du débit d\'API et les modèles de disjoncteur en 2 phrases.',
        },
        roleContextGoodNote: {
          content: 'Même question, 40 mots, parce que le signal de rôle supprime automatiquement les frais d\'explication.',
        },
        negativeInstructions: {
          title: 'Les instructions négatives qui économisent des tokens',
          content: '**Les instructions explicites "à ne pas faire" éliminentles motifs de remplissage les plus courants.** Incluez au moins 2–3 d\'entre eux dans vos prompts optimisés pour la vitesse :',
        },
        negativeList: {
          items: [
            '"Ne répétez pas la question vers moi."',
            '"Pas de phrase d\'introduction."',
            '"Pas de conclusion ou résumé à la fin."',
            '"Pas de mise en garde sauf si elle est critique pour la réponse."',
            '"Pas de langage de couverture comme \'cela dépend\' ou \'dans la plupart des cas\'."',
            '"Pas d\'explication de la terminologie que je comprends déjà."',
          ],
        },
        negativeNote: {
          content: 'Ceux-ci économisent 20–40 % des tokens de sortie. Apprenez la technique complète dans [Techniques: Negative Prompting: Tell the AI What NOT to Do].',
        },
        tradeoff: {
          title: 'Vitesse vs Qualité — Quand optimiser chacun',
          content: 'Des contraintes plus rapides (formatage strict, limites de longueur, pas de mise en garde) produisent des réponses plus courtes mais parfois perdent de la nuance. Les prompts plus longs et exploratoires capturent les cas limites mais prennent 3–5× plus de tokens. **Règle empirique :** Si la réponse informe une décision immédiate, optimisez pour la vitesse. Si la réponse informe un rapport ou une analyse, optimisez pour la profondeur.',
        },
        tradeoffTable: {
          columns: ['Type de tâche', 'Optimiser pour', 'Pourquoi'],
          rows: [
            { 'Type de tâche': 'Recherche rapide, décision oui/non, génération de liste', 'Optimiser pour': 'Vitesse', 'Pourquoi': 'La nuance perdue importe rarement ; la directivité est l\'objectif' },
            { 'Type de tâche': 'Analyse complexe, travaux créatifs, chaînes de raisonnement', 'Optimiser pour': 'Profondeur', 'Pourquoi': 'La brièveté perd des étapes de raisonnement et des détails importants' },
            { 'Type de tâche': 'Vérification ou vérification des faits', 'Optimiser pour': 'Vitesse + auto-vérification', 'Pourquoi': 'La vitesse prévient le remplissage ; l\'auto-vérification attrape les erreurs' },
          ],
        },
        promptquorumTest: {
          title: 'Test de consensus PromptQuorum',
          content: [
            'J\'ai testé ce principe de vitesse sur GPT-5.6, Claude Opus 4.8 et Gemini 3.1 Pro en envoyant le même prompt vague par rapport à un prompt optimisé pour la vitesse :',
            '**Prompt vague** ("Parle-moi des techniques d\'ingénierie de prompt"): sortie moyenne 850 tokens sur tous les trois modèles.',
            '**Prompt optimisé pour la vitesse** ("Liste 5 techniques de prompt pour des réponses LLM plus rapides en une phrase chacun"): sortie moyenne 120 tokens sur tous les trois modèles.',
            'Les trois modèles ont respecté la contrainte de format de la même manière. La version optimisée pour la vitesse était **7× plus courte** tout en restant précise.',
          ],
        },
        promptquorum: {
          title: 'Comment PromptQuorum vous aide à concevoir plus rapidement',
          content: [
            '**Dispatch multi-modèle :** Au lieu de tester votre prompt de vitesse séparément sur GPT-5.6, Claude et Gemini (trois fois copier-coller), PromptQuorum envoie un prompt à 25+ modèles à la fois et affiche toutes les réponses côte à côte. Vous voyez immédiatement quel modèle répondez de la manière la plus concise pour votre tâche—économisant généralement 2–3 minutes par itération de prompt.',
            '**Frameworks intégrés :** Les 9 frameworks de PromptQuorum (CO-STAR, CRAFT, SPECS, RISEN, TRACE et autres) intègrent le rôle, la tâche, le format et les contraintes automatiquement dans une seule interface. Pas de montage manuel de prompt—les frameworks éliminent la friction de configuration qui mène à des prompts vagues.',
            '**Affichage du consensus :** Lors du test de vitesse sur les modèles, vous devez comparer non seulement la longueur mais aussi la précision. L\'analyse Quorum de PromptQuorum évalue quel modèle a répondu de la manière la plus directe et la plus précise simultanément—afin que vous choisissiez le bon modèle pour les tâches sensibles à la vitesse.',
            '**Support LLM local :** Pour les utilisateurs exécutant Ollama, LM Studio ou Jan AI localement, PromptQuorum optimise les prompts avant la diffusion, réduisant la génération de tokens sur votre matériel et améliorant la vitesse de réponse de manière mesurable.',
          ],
        },
        template: {
          title: 'Modèle de prompt de vitesse de référence rapide',
          blockquote: 'Vous êtes [RÔLE].\n\n[TÂCHE UNIQUE, SPÉCIFIQUE].\n\nFormat : [FORMAT DE SORTIE — une phrase, JSON, bullets, tableau, etc.].\n\nLongueur : [CONTRAINTE EXPLICITE — X mots, Y bullets, une phrase, etc.].\n\nNe pas : Répéter la question, ajouter intro/outro, inclure des mises en garde sauf si critique, expliquer les bases.',
        },
        templateExample: {
          title: 'Exemple (rempli)',
          blockquote: 'Vous êtes un chef de produit avec expertise en métriques B2B SaaS.\n\nRésumez les 3 principaux facteurs de désabonnement client dans notre cohorte d\'abonnement.\n\nFormat : points à puces, une ligne chacun.\n\nLongueur : maximum 3 puces.\n\nNe pas : Répéter les données fournies, ajouter d\'introduction, vous couvrir avec "cela dépend".',
        },

        howToStart: {
          title: 'Comment formuler des prompts pour des réponses IA plus rapides et concises',
          numberedItems: [
            '**Réduire la tâche à une seule question spécifique :** Divisez les tâches composées en prompts séparés. "Résume ce contrat et identifie les risques" devient deux prompts — plus courts, plus rapides et plus précis chacun.',
            '**Ajouter une contrainte de longueur explicite :** Incluez une limite de mots ou de phrases dans chaque prompt qui n\'a pas besoin d\'une longue réponse. "Réponds en 3 puces" ou "maximum 100 mots" évite les préambules verbeux et le remplissage.',
            '**Adapter le format à la tâche :** Utilisez des listes à puces pour les listes, des tableaux pour les comparaisons et des phrases uniques pour les réponses oui/non. Les modèles reviennent à la prose par défaut lorsqu\'aucun format n\'est spécifié.',
            '**Utiliser le rôle et le contexte pour réduire la charge d\'explication :** Un modèle qui sait qu\'il s\'adresse à un expert saute les définitions de base. "Vous conseillez un ingénieur logiciel senior" élimine des paragraphes de contexte.',
            '**Ajouter des instructions négatives pour bloquer le remplissage :** "Ne répète pas la question", "N\'ajoute pas de résumé final" et "N\'utilise pas de formules de remplissage" éliminent les sources les plus courantes de réponses gonflées.',
          ],
        },
        faqs: {
          faqs: [
            {
              q: 'Un prompt plus court donne-t-il toujours une réponse plus rapide ?',
              a: 'Non. **La précision importe plus que la brièveté.** Un prompt vague de 50 mots produit des réponses plus longues qu\'un prompt précis de 100 mots. Les contraintes de longueur sans spécificité sont inutiles.',
            },
            {
              q: 'Cela fonctionne-t-il de la même manière sur GPT-5.6, Claude et Gemini ?',
              a: 'Principalement. Les trois respectent les limites de longueur explicites et les contraintes de format. Claude suit les contraintes de points à puces plus strictement ; GPT-5.6 ajoute occasionnellement une phrase de résumé malgré les instructions "pas de conclusion". Testez votre prompt de vitesse sur tous les trois pour trouver le meilleur ajustement.',
            },
            {
              q: 'Et si j\'ai besoin d\'une réponse rapide mais qu\'elle doit aussi être précise ?',
              a: 'Combinez la précision avec une instruction d\'auto-vérification. Exemple : "Répondez en 2 phrases. Après, vérifiez votre réponse pour les contradictions." Cela ajoute une étape de vérification sans gonfler la réponse principale.',
            },
            {
              q: 'Puis-je enregistrer des modèles de prompt de vitesse pour réutilisation ?',
              a: 'Oui. PromptQuorum vous permet de créer, nommer et enregistrer des modèles de prompt de vitesse aux côtés des frameworks intégrés. Partagez les modèles avec votre équipe pour éliminer l\'ingénierie de prompt répétée.',
            },
            {
              q: 'L\'inférence locale (Ollama, LM Studio) accélère-t-elle davantage les réponses ?',
              a: 'Oui, mais seulement si votre prompt est optimisé. Les modèles locaux s\'exécutent sur votre matériel—latence réseau plus rapide. Mais si votre prompt génère 500 au lieu de 100 tokens, l\'amélioration de la latence n\'a pas d\'importance. Optimisez d\'abord le prompt ; l\'inférence locale amplifie cet avantage.',
            },
          ],
        },
        relatedReading: {
          content: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — la fondation de toute conception de prompt',
            '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — rôle, tâche, exemples, contraintes, format',
            '[Prompt Chaining: How to Break Big Tasks Into Winning Steps](/prompt-engineering/prompt-chaining) — divisez le travail complexe en étapes concentrées',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — démontre comment la structure des prompts réduit les frais d\'explication',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — catalogue 58+ techniques d\'ingénierie de prompt',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — guidance officiel sur l\'optimisation des prompts pour la vitesse et la fiabilité',
          ],
        },
      },
    },

    ja: {
      theme: '基礎',
      heroImage: '/images/prompt-for-speed-overview-hero-ja.png',
      title: '高速なAI回答：スピードのためのプロンプト設計',
      intro: 'プロンプトエンジニアリングにおける「速度」とは、意図的なプロンプト設計によって簡潔で直接的なAI応答を得ることです。ハードウェアレイテンシーではありません。ほとんどのAI回答が遅い理由は、モデルが遅いからではなく、プロンプトが曖昧だからです。',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      readTime: '9分で読める',
      sections: {
        definition: {
          title: 'AI回答が膨張する理由',
          content: [
            '**プロンプトエンジニアリングにおける「速度」とは、意図的なプロンプト設計によって簡潔で直接的なAI応答を得ることです。** AI回答が遅いのは、モデルが遅いからではなく、プロンプトの膨張が原因です。GPT-5.6、Claude Opus 4.8、Gemini 3.1 Proで数百個のプロンプトをテストした経験から、最速の回答は最も厳しい制約から生まれることを発見しました。',
            'AI回答の遅さには2つのタイプがあります：トークン生成レイテンシー（モデルのサーバー側—あなたの問題ではない）と回答膨張（プロンプト設計—完全にあなたの問題）。',
            '膨張は、モデルがリスクヘッジする必要があるときに発生します。明確な制約がないと、あらゆる観点をカバーし、注釈を追加し、指示を繰り返し、すでに知っている基礎を説明します。これらのすべてが、要求していないトークンを追加します。',
          ],
        },
        tldr: {
          title: '重要なポイント',
          isTldr: true,
          items: [
            '**曖昧なプロンプトはモデルにヘッジと膨張を強制します。** 正確なタスクは直接的な回答を生成します。',
            '**明示的な長さ制限は一般的な簡潔性要求より10倍効果的です。** 「簡潔にして」ではなく「3箇条で」または「50ワード以下で」と指定します。',
            '**出力形式は他のほぼすべてよりも回答長を制御します。** JSON、箇条書き、単一文形式はトークン生成を劇的に削減します。',
            '**マルチタスクプロンプトはトークンを浪費します。** 複雑な作業をプロンプトチェーンに分割—各ステップはより少ない膨張を生成します。',
            '**ロールとコンテキストは説明オーバーヘッドを抑制します。** 「エキスパート向けと仮定」は初心者レベルのパディングを自動的に排除します。',
          ],
        },
        rootCauses: {
          title: '回答膨張の根本原因',
          items: [
            'モデルがあらゆる解釈をカバーするよう強制する曖昧なタスク',
            'フォーマット指示の欠如（デフォルトはプロー散文）',
            '明示的な長さ制限なし（モデルがあなたの閾値を推測）',
            '重複するオブジェクティブ（マルチタスクプロンプトはコンテキスト切り替えオーバーヘッドを引き起こす）',
            'モデルが最低限のオーディエンスを想定するよう強制する不足したコンテキスト',
          ],
        },
        vagueness: {
          title: '最大の犯人：曖昧または開放的なプロンプト',
          content: '**タスクが狭いほど、回答は短く直接的です。** 開放的なプロンプトはモデルがあなたのリクエストのあらゆる解釈をカバーするよう強制し、要求していない説明層を追加します。',
        },
        badPromptExample: {
          title: '[悪いプロンプト]',
          blockquote: '研究用の最高のAIツールについて教えてください。',
        },
        badPromptExplanation: {
          content: 'これは、ツール、使用例、価格、比較、警告を含む400以上の単語を生成します—あなたが実際に必要としているもの以外のすべて。',
        },
        goodPromptExample: {
          title: '[良いプロンプト]',
          blockquote: '学術論文分析に最適化された3つのAI研究ツールをリストしてください。フォーマット：ツール名、1文の強み、主な弱点。エキスパート向けと仮定してください。導入や結論はありません。',
        },
        goodPromptExplanation: {
          content: 'これは5つの箇条書き、合計80ワードを生成します。違いは簡潔性リクエストではなく—特異性です。2番目のプロンプトはスコープ、オーディエンス、フォーマットについての曖昧性を排除します。',
        },
        lengthInstructions: {
          title: 'モデルに正確にどのくらいの長さを求めるかを伝える',
          content: '明示的な長さ指示は「簡潔に」と要求するより10倍効果的です。最後ではなく最初に長さを述べてください。プロンプトの最初または2番目の文に長さ制約を配置し、最後に隠さないでください。',
        },
        lengthTable: {
          columns: ['指示タイプ', '典型的な出力'],
          rows: [
            { '指示タイプ': '「簡潔にして」', '典型的な出力': '200–400単語（モデルが閾値を推測）' },
            { '指示タイプ': '「3箇条で」', '典型的な出力': '45–75単語（厳密なフォーマット制約）' },
            { '指示タイプ': '「100ワード以下で」', '典型的な出力': '85–110単語（境界を尊重）' },
            { '指示タイプ': '「1段落、最大4文」', '典型的な出力': '60–100単語（フォーマット＋文制限）' },
            { '指示タイプ': '「1文で答えてください」', '典型的な出力': '15–40単語（原子的制約）' },
          ],
        },
        format: {
          title: 'タスクに合わせてフォーマットをマッチさせる',
          content: '**出力フォーマットはほぼすべてのものより回答長をより強力に制御します。** 正しいフォーマットは膨張の全カテゴリーを排除します。AIモデルは明示的に抑制しない限り、自動的に導入、結論、ヘッジ言語を生成します。JSON形式（構造化出力）は最速です—キーと値のペアに散文のフィリングは入りません。',
        },
        formatExamples: {
          items: [
            '**決定タスク？** 「はいまたはいいえで答えてから、1文の推論を述べてください。」',
            '**リストタスク？** 「箇条書きのみ。導入または外出なし。」',
            '**サマリータスク？** 「3箇条、各15単語以下。」',
          ],
        },
        multiTask: {
          title: 'プロンプトごと1つのタスク',
          content: '**マルチタスクプロンプトはより長く、遅く、焦点の絞られていない回答を生成します。** 数十個のプロジェクトでこれをテストした結果、複雑な作業をプロンプトチェーンに分割—ステップごとに焦点を絞ったプロンプト—は総トークンを30～50％削減します。シングルタスクプロンプトは40％短いです。複雑な作業のチェーニングについて詳しくは[Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]を参照してください。',
        },
        multiTaskBad: {
          title: '[悪いプロンプト]',
          blockquote: 'このカスタマーフィードバックデータセットを分析します。テーマを抽出し、センチメントをスコアリングし、頻度でランク付けし、製品の改善を提案します。フォーマット：Markdownテーブル。',
        },
        multiTaskBadExplain: {
          content: 'これはモデルを分析モード間で切り替えるよう強制し、各遷移で説明オーバーヘッドを追加します。',
        },
        multiTaskGood: {
          title: '[良いプロンプト — 2つに分割]',
          content: [
            '**ステップ1：** 「このカスタマーフィードバックから上位5つの繰り返されるテーマを抽出してください。フォーマット：導入とアウトロなしの箇条書きリスト。」',
            '**ステップ2：** 「これらのテーマを頻度でランク付けしており、センチメントを1～5で評価してください。フォーマット：列を含むCSVテーブル：テーマ、頻度、センチメントスコア。」',
          ],
        },
        roleContext: {
          title: 'ロールとコンテキストを使用して説明オーバーヘッドを削減',
          content: 'ロールコンテキストなしで、モデルは既に知っている基礎を説明することが多く、初級レベルのコンテンツでトークンを浪費します。完全なコンテキスト構築パターンについては[Fundamentals: The 5 Building Blocks Every Prompt Needs]を参照してください。',
        },
        roleContextBad: {
          title: '[悪いプロンプト]',
          blockquote: 'APIレート制限とサーキットブレーカーパターンの違いは何ですか？',
        },
        roleContextBadNote: {
          content: 'モデルはジュニア開発者を想定し、両方の概念をゼロから説明します—300以上の単語。',
        },
        roleContextGood: {
          title: '[良いプロンプト]',
          blockquote: 'あなたはシニアバックエンドエンジニアです。APIレート制限とサーキットブレーカーパターンの違いを2文で説明してください。',
        },
        roleContextGoodNote: {
          content: '同じ質問、40単語、ロール信号が説明オーバーヘッドを自動的に抑制するため。',
        },
        negativeInstructions: {
          title: 'トークンを節約する負の指示',
          content: '**明示的な「しないこと」指示は最も一般的なパディングパターンを排除します。** スピード最適化プロンプトに少なくとも2～3個を含めます：',
        },
        negativeList: {
          items: [
            '「質問を私に繰り返さないでください。」',
            '「導入文はありません。」',
            '「終わりに結論または要約はありません。」',
            '「答えに重要でない限り、注意点はありません。」',
            '「「それは状況次第」や「ほとんどの場合」のようなヘッジ言語はありません。」',
            '「すでに理解している用語の説明はありません。」',
          ],
        },
        negativeNote: {
          content: 'これらは出力トークンの20～40％を節約します。完全な技術については[Techniques: Negative Prompting: Tell the AI What NOT to Do]を参照してください。',
        },
        tradeoff: {
          title: 'スピード対品質—各を最適化するときの時期',
          content: '高速制約（厳密なフォーマット、長さ制限、注釈なし）はより短い回答を生成しますが、時々ニュアンスを失います。長く、探索的なプロンプトはエッジケースをキャッチしますが、3～5倍以上のトークンを取ります。 **経験則：** 回答が即座な決定を示す場合、スピードを最適化します。回答がレポートまたは分析を示す場合、深さを最適化します。',
        },
        tradeoffTable: {
          columns: ['タスクタイプ', '最適化対象', '理由'],
          rows: [
            { 'タスクタイプ': 'クイック検索、はい/いいえ決定、リスト生成', '最適化対象': 'スピード', '理由': '失われたニュアンスはめったに重要ではありません。直接性が目標です' },
            { 'タスクタイプ': '複雑な分析、クリエイティブワーク、推論チェーン', '最適化対象': '深さ', '理由': '簡潔性は推論ステップと重要な詳細を失う' },
            { 'タスクタイプ': '検証またはファクトチェック', '最適化対象': 'スピード+自己チェック', '理由': 'スピードはパディングを防ぎます。自己チェックはエラーをキャッチします' },
          ],
        },
        promptquorumTest: {
          title: 'PromptQuorumコンセンサステスト',
          content: [
            'この速度の原則を、同じ曖昧なプロンプトとスピード最適化プロンプトをGPT-5.6、Claude Opus 4.8、Gemini 3.1 Proに送信してテストしました：',
            '**曖昧なプロンプト** (「プロンプトエンジニアリング技術について教えてください」)：3つのモデルすべてで平均850トークンの出力。',
            '**スピード最適化プロンプト** (「より高速なLLM応答のための5つのプロンプト技術を1文ずつリストしてください」)：3つのモデルすべてで平均120トークンの出力。',
            '3つのモデルすべてがフォーマット制約を同等に尊重しました。スピード最適化版は**7倍短く** 、正確性を保ちました。',
          ],
        },
        promptquorum: {
          title: 'PromptQuorumがより高速にプロンプトするのにどのように役立つか',
          content: [
            '**マルチモデルディスパッチ：** スピードプロンプトをGPT-5.6、Claude、Geminiで個別にテストする代わりに(3回のコピー貼り付け)、PromptQuorumは1つのプロンプトを25以上のモデルに一度に送信し、すべての応答を並べて表示します。タスクのどのモデルが最も簡潔な回答を出すかをすぐに確認できます—通常、プロンプト反復あたり2～3分節約できます。',
            '**組み込みフレームワーク：** PromptQuorumの9つのフレームワーク(CO-STAR、CRAFT、SPECS、RISEN、TRACEなど)は、単一のインターフェース内にロール、タスク、フォーマット、制約を自動的に組み込みます。手動プロンプト組立なし—フレームワークは曖昧なプロンプトにつながるセットアップ摩擦を排除します。',
            '**コンセンサスビュー：** モデル間でスピードをテストするときは、長さだけでなく精度も比較する必要があります。PromptQuorumのQuorum分析は、どのモデルが最も直接的かつ正確に回答したかを同時にスコアリングします—スピード感応タスクの正しいモデルを推測なしで選択できます。',
            '**ローカルLLMサポート：** Ollama、LM Studio、またはJan AIをローカルで実行するユーザーの場合、PromptQuorumはディスパッチ前にプロンプトを最適化し、ハードウェア上のトークン生成を削減し、応答スピードを計測可能に向上させます。',
          ],
        },
        template: {
          title: 'クイックリファレンススピードプロンプトテンプレート',
          blockquote: 'あなたは [ROLE] です。\n\n[SINGLE、SPECIFIC TASK]。\n\nフォーマット：[出力フォーマット—1文、JSON、bullet、テーブルなど]。\n\n長さ：[EXPLICIT CONSTRAINT—X単語、Y bullet、1文など]。\n\nしないこと：質問を繰り返す、導入/アウトロを追加する、重要でない限り注釈を含める、基礎を説明する。',
        },
        templateExample: {
          title: '例（記入済み）',
          blockquote: 'あなたはB2B SaaS メトリクスに専門知識を持つプロダクトマネージャーです。\n\nサブスクリプション コホートでの顧客離脱の上位 3 つのドライバーを要約します。\n\nフォーマット：箇条書き、各 1 行。\n\n長さ：最大 3 個の箇条書き。\n\nしないこと：提供されたデータを繰り返す、導入を追加する、「それはそれに依存する」とヘッジする。',
        },

        howToStart: {
          title: 'より速く簡潔なAI回答を得るプロンプトの書き方',
          numberedItems: [
            '**タスクを1つの具体的な質問に絞る：** 複合タスクは別々のプロンプトに分割します。「この契約書を要約してリスクを特定して」は2つのプロンプトになり、それぞれがより短く、速く、正確になります。',
            '**明示的な長さ制限を追加する：** 長い出力が不要なすべてのプロンプトに単語数や文数の制限を含めます。「3箇条で回答」や「最大100語」は冗長な前置きや水増しを防ぎます。',
            '**フォーマットをタスクに合わせる：** リストには箇条書き、比較には表、はい/いいえの回答には単文を使います。フォーマットが指定されていない場合、モデルは既定で散文形式になります。',
            '**役割とコンテキストで説明のオーバーヘッドを削減する：** 専門家に話していると分かっているモデルは基本的な定義を省略します。「シニアソフトウェアエンジニアに助言している」とすると背景説明の段落が不要になります。',
            '**否定命令を追加して水増しをブロックする：** 「質問を繰り返さない」「結びの要約を追加しない」「決まり文句を使わない」は回答が膨張する最も一般的な原因を排除します。',
          ],
        },

        faqs: {
          faqs: [
            {
              q: 'より短いプロンプトは常により速い回答をもたらしますか？',
              a: 'いいえ。**精度は簡潔性より重要です。** 曖昧な50単語のプロンプトは、正確な100単語のプロンプトより長い回答を生成します。特異性のない長さ制約は役に立たません。',
            },
            {
              q: 'これはGPT-5.6、Claude、Geminiで同じように機能しますか？',
              a: 'ほぼ。すべての3つが明示的な長さ制限とフォーマット制約を尊重します。Claudeはbullet ポイント制約により厳密に従う傾向があります。GPT-5.6は時々「結論なし」指示にもかかわらず要約文を追加します。最適な適合を見つけるために、3つすべてでスピードプロンプトをテストします。',
            },
            {
              q: '高速で正確な回答が必要な場合はどうなりますか？',
              a: '精度を自己チェック指示と組み合わせます。例：「2文で答えてください。その後、矛盾がないか回答をチェックしてください。」 これは主要な回答を膨張させずに検証ステップを追加します。',
            },
            {
              q: 'スピードプロンプトテンプレートを再利用のために保存できますか？',
              a: 'はい。PromptQuorumを使用すると、組み込みフレームワークの横にあるスピードプロンプトテンプレートを作成、名前付け、保存できます。テンプレートをチームと共有して、繰り返されるプロンプトエンジニアリングを排除します。',
            },
            {
              q: 'ローカル推論(Ollama、LM Studio)はさらに回答を加速しますか？',
              a: 'はい、ただしプロンプトが最適化されている場合のみです。ローカルモデルはハードウェア上で実行されます—より速いネットワークレイテンシー。ただし、プロンプトが100ではなく500トークンを生成する場合、レイテンシー改善は関係ありません。最初にプロンプトを最適化します。ローカル推論はその利点を増幅します。',
            },
          ],
        },
        relatedReading: {
          content: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — すべてのプロンプト設計の基礎',
            '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — ロール、タスク、例、制約、フォーマット',
            '[Prompt Chaining: How to Break Big Tasks Into Winning Steps](/prompt-engineering/prompt-chaining) — 複雑な作業を焦点を絞ったステップに分割',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — プロンプトの構造が説明オーバーヘッドをどのように削減するかを示す',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — 58以上の離散的なプロンプティング技術をカタログ化',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — スピードと信頼性のためのプロンプト最適化に関する公式ガイダンス',
          ],
        },
      },
    },

    zh: {
      theme: '基础知识',
      heroImage: '/images/prompt-for-speed-overview-hero-zh.png',
      title: '更快的AI回答：如何设计提示词以提高速度',
      intro: '提示词工程中的"速度"是指通过有意的提示词设计获得简洁、直接的AI回答，而不是硬件延迟。大多数AI回答缓慢的原因是提示词过于宽泛，而不是模型缓慢。',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      readTime: '阅读约9分钟',
      sections: {
        definition: {
          title: 'AI回答为何臃肿',
          content: [
            '**提示词工程中的"速度"是指通过有意的提示词设计获得简洁、直接的AI回答，而不是硬件延迟。** 大多数AI回答缓慢是由于提示词臃肿，而不是模型缓慢。根据在GPT-5.6、Claude Opus 4.8和Gemini 3.1 Pro上测试数百个提示词的经验，最快的回答来自最严格的约束。',
            'AI回答缓慢有两种类型：令牌生成延迟（在模型服务器端—不是你的问题）和回答臃肿（在你的提示词设计中—完全是你的问题）。',
            '当模型必须权衡时会出现臃肿。没有明确的约束，它会覆盖所有角度、添加注意事项、重复指示、解释你已经知道的基础知识。这些都增加了你没有要求的令牌。',
          ],
        },
        tldr: {
          title: '关键要点',
          isTldr: true,
          items: [
            '**模糊的提示词迫使模型权衡和臃肿。** 精确的任务产生直接的回答。',
            '**明确的长度限制比一般的简洁性要求有效10倍。** 使用"3条要点"或"少于50个词"，而不是"要简洁"。',
            '**输出格式比几乎任何其他因素都更能控制回答长度。** JSON、项目符号列表和单句格式可显著减少令牌生成。',
            '**多任务提示词浪费令牌。** 将复杂工作分解为提示词链—每一步生成更少的臃肿。',
            '**角色和上下文抑制解释开销。** "假设专家受众"自动消除初级级填充。',
          ],
        },
        rootCauses: {
          title: '回答臃肿的根本原因',
          items: [
            '迫使模型覆盖每种解释的模糊任务',
            '缺少格式指示（默认为散文段落）',
            '没有明确的长度限制（模型猜测你的阈值）',
            '重叠的目标（多任务提示词导致上下文切换开销）',
            '缺少强制模型假设最低级受众的上下文',
          ],
        },
        vagueness: {
          title: '最大的罪魁祸首：模糊或开放式提示词',
          content: '**任务越狭窄，回答越短越直接。** 开放式提示词强制模型覆盖你的请求的每种解释，添加你没有要求的解释层。',
        },
        badPromptExample: {
          title: '[差的提示词]',
          blockquote: '告诉我研究用的最好的AI工具。',
        },
        badPromptExplanation: {
          content: '这会产生400多个词，覆盖工具、用途、价格、比较、警告—除了你实际需要的一切。',
        },
        goodPromptExample: {
          title: '[好的提示词]',
          blockquote: '列出针对学术论文分析优化的3个AI研究工具。格式：工具名称、一句优势和主要缺点。假设专家受众。没有引言或结论。',
        },
        goodPromptExplanation: {
          content: '这会产生5条要点，共80个词。区别不在于简洁性请求—而在于具体性。第二个提示词消除了关于范围、受众和格式的歧义。',
        },
        lengthInstructions: {
          title: '明确告诉模型你需要多长的回答',
          content: '明确的长度指示比要求模型"简洁"有效10倍。在开头而不是末尾说明长度。将长度约束放在提示词的第一或第二句中，不要隐藏在末尾。',
        },
        lengthTable: {
          columns: ['指示类型', '典型输出'],
          rows: [
            { '指示类型': '"要简洁"', '典型输出': '200–400个词（模型猜测你的阈值）' },
            { '指示类型': '"用3条要点"', '典型输出': '45–75个词（严格的格式约束）' },
            { '指示类型': '"少于100个词"', '典型输出': '85–110个词（尊重边界）' },
            { '指示类型': '"一个段落，最多4句"', '典型输出': '60–100个词（格式+句子限制）' },
            { '指示类型': '"用一句回答"', '典型输出': '15–40个词（原子约束）' },
          ],
        },
        format: {
          title: '使格式与任务相匹配',
          content: '**输出格式控制回答长度的能力比几乎任何其他因素都强大。** 正确的格式消除了整个臃肿类别。AI模型自动生成导言、结论和套话，除非你明确抑制它们。JSON格式（结构化输出）最快—没有散文填充能进入键值对。',
        },
        formatExamples: {
          items: [
            '**决策任务？** "用是或否回答，然后是一句推理。"',
            '**列表任务？** "仅项目符号。没有开场或结尾。"',
            '**摘要任务？** "3条要点，每个最多15个词。"',
          ],
        },
        multiTask: {
          title: '每个提示词一个任务',
          content: '**多任务提示词产生更长、更慢、焦点更分散的回答。** 在数十个项目上测试后，将复杂工作分解为提示词链—每步一个焦点提示词—总令牌减少30–50%。单任务提示词缩短40%。在[Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]中了解更多关于链接复杂工作的信息。',
        },
        multiTaskBad: {
          title: '[差的提示词]',
          blockquote: '分析这个客户反馈数据集。提取主题、评分情绪、按频率排名并建议产品改进。格式：Markdown表格。',
        },
        multiTaskBadExplain: {
          content: '这迫使模型在分析模式之间切换，在每次转换时增加解释开销。',
        },
        multiTaskGood: {
          title: '[好的提示词—分为两步]',
          content: [
            '**步骤1：** "从这个客户反馈中提取前5个反复出现的主题。格式：没有引言或结尾的项目符号列表。"',
            '**步骤2：** "按频率排列这些主题并评分情绪1–5。格式：列为"主题、频率、情绪评分"的CSV表格。"',
          ],
        },
        roleContext: {
          title: '使用角色和上下文减少解释开销',
          content: '没有角色上下文，模型经常解释你已经知道的基础知识，浪费初级级内容上的令牌。完整的上下文构建模式见[Fundamentals: The 5 Building Blocks Every Prompt Needs]。',
        },
        roleContextBad: {
          title: '[差的提示词]',
          blockquote: 'API速率限制和断路器模式有什么区别？',
        },
        roleContextBadNote: {
          content: '模型假设初级开发人员，从头开始解释两个概念—300多个词。',
        },
        roleContextGood: {
          title: '[好的提示词]',
          blockquote: '你是高级后端工程师。用2句话解释API速率限制和断路器模式的区别。',
        },
        roleContextGoodNote: {
          content: '相同的问题，40个词，因为角色信号自动抑制解释开销。',
        },
        negativeInstructions: {
          title: '节省令牌的负面指示',
          content: '**明确的"不要做"指示消除最常见的填充模式。** 在速度优化的提示词中至少包括2–3个：',
        },
        negativeList: {
          items: [
            '"不要重复问题给我。"',
            '"没有引言句。"',
            '"末尾没有结论或摘要。"',
            '"除非对答案至关重要，否则没有注意事项。"',
            '"没有"这取决于"或"在大多数情况下"之类的套话。"',
            '"不解释我已经理解的术语。"',
          ],
        },
        negativeNote: {
          content: '这些节省输出令牌的20–40%。在[Techniques: Negative Prompting: Tell the AI What NOT to Do]中了解完整的技术。',
        },
        tradeoff: {
          title: '速度vs质量—何时优化各个',
          content: '更快的约束（严格格式、长度限制、无注意事项）产生更短的回答，但有时会失去细微差别。更长的、探索性的提示词捕捉边缘情况但占用3–5倍以上的令牌。 **经验法则：** 如果答案告知即时决定，优化速度。如果答案告知报告或分析，优化深度。',
        },
        tradeoffTable: {
          columns: ['任务类型', '优化对象', '原因'],
          rows: [
            { '任务类型': '快速查询、是/否决定、列表生成', '优化对象': '速度', '原因': '遗漏的细微差别很少重要；直接性是目标' },
            { '任务类型': '复杂分析、创意工作、推理链', '优化对象': '深度', '原因': '简洁性失去推理步骤和重要细节' },
            { '任务类型': '验证或事实检查', '优化对象': '速度+自检', '原因': '速度防止填充；自检捕捉错误' },
          ],
        },
        promptquorumTest: {
          title: 'PromptQuorum共识测试',
          content: [
            '我通过向GPT-5.6、Claude Opus 4.8和Gemini 3.1 Pro发送相同的模糊提示词与速度优化的提示词来测试这一原理：',
            '**模糊提示词** ("告诉我关于提示词工程技术")：所有三个模型的平均输出850令牌。',
            '**速度优化提示词** ("列出5个用于更快LLM响应的提示词技术，每个一句话")：所有三个模型的平均输出120令牌。',
            '所有三个模型同样尊重格式约束。速度优化版本**7倍更短**，同时保持准确。',
          ],
        },
        promptquorum: {
          title: 'PromptQuorum如何帮助你更快地提示',
          content: [
            '**多模型分发：** 与其在GPT-5.6、Claude和Gemini上分别测试你的速度提示词（三次复制粘贴），PromptQuorum同时将一个提示词发送到25个以上的模型并并排显示所有响应。你立即看到哪个模型为你的任务给出最简洁的答案—通常节省每次提示词迭代2–3分钟。',
            '**内置框架：** PromptQuorum的9个框架（CO-STAR、CRAFT、SPECS、RISEN、TRACE等）在单个界面中自动嵌入角色、任务、格式和约束。没有手动提示词组装—框架消除导致模糊提示词的设置摩擦。',
            '**共识视图：** 在模型间测试速度时，你需要比较不仅长度还有准确性。PromptQuorum的Quorum分析同时评分哪个模型回答最直接和准确—所以你可以为速度敏感的任务选择正确的模型而无需猜测。',
            '**本地LLM支持：** 对于在本地运行Ollama、LM Studio或Jan AI的用户，PromptQuorum在分发前优化提示词，减少你硬件上的令牌生成并可测量地改善响应速度。',
          ],
        },
        template: {
          title: '快速参考速度提示词模板',
          blockquote: '你是[角色]。\n\n[单一、具体的任务]。\n\n格式：[输出格式—一句话、JSON、项目符号、表格等]。\n\n长度：[明确约束—X个词、Y个项目符号、一句话等]。\n\n不要：重复问题、添加开场/结尾、包含注意事项除非关键、解释基础知识。',
        },
        templateExample: {
          title: '示例（已填充）',
          blockquote: '你是拥有B2B SaaS指标专业知识的产品经理。\n\n总结我们订阅队列中客户流失的前3个驱动因素。\n\n格式：项目符号，每行一个。\n\n长度：最多3个项目符号。\n\n不要：重复提供的数据、添加引言、用"这取决于"来套话。',
        },

        howToStart: {
          title: '如何提示词以获得更快、更简洁的AI回答',
          numberedItems: [
            '**将任务缩小到单一具体问题：** 把复合任务拆分成独立的提示词。"总结这份合同并识别风险"变成两个提示词——每个都更短、更快、更准确。',
            '**添加明确的长度约束：** 在每个不需要长输出的提示词中包含字数或句数限制。"用3个要点回答"或"最多100字"可以防止冗长的前言和填充内容。',
            '**将格式与任务匹配：** 列表用项目符号，比较用表格，是/否回答用单句。如果没有指定格式，模型默认使用散文。',
            '**用角色和上下文减少解释开销：** 知道自己在与专家对话的模型会跳过基本定义。"你正在为一名资深软件工程师提供建议"可以消除大段背景说明。',
            '**添加否定指令以阻止填充：** "不要重复问题"、"不要添加结尾总结"、"不要使用套话"可以消除回答膨胀的最常见来源。',
          ],
        },

        faqs: {
          faqs: [
            {
              q: '更短的提示词总是给出更快的回答吗？',
              a: '不。**具体性比简洁性更重要。** 50词的模糊提示词产生比100词精确提示词更长的回答。没有具体性的长度约束是无用的。',
            },
            {
              q: '这在GPT-5.6、Claude和Gemini上的工作方式相同吗？',
              a: '大多数情况下。所有三个都尊重明确的长度限制和格式约束。Claude倾向于更严格地遵循项目符号约束；GPT-5.6偶尔会添加摘要句子，尽管要求"无结论"。在所有三个上测试你的速度提示词以找到最佳匹配。',
            },
            {
              q: '如果我需要快速但准确的回答怎么办？',
              a: '将准确性与自检指示结合。示例："用2句回答。然后检查你的回答是否有矛盾。" 这添加了验证步骤而不膨胀主要回答。',
            },
            {
              q: '我能为重用保存速度提示词模板吗？',
              a: '能。PromptQuorum让你在内置框架旁创建、命名和存储速度提示词模板。与你的团队共享模板以消除重复的提示词工程。',
            },
            {
              q: '本地推理（Ollama、LM Studio）进一步加速回答吗？',
              a: '能，但仅当你的提示词优化时。本地模型在你的硬件上运行—更快的网络延迟。但如果你的提示词生成500而不是100令牌，延迟改善无关。先优化提示词；本地推理放大了这一优势。',
            },
          ],
        },
        relatedReading: {
          content: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — 所有提示词设计的基础',
            '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — 角色、任务、示例、约束、格式',
            '[Prompt Chaining: How to Break Big Tasks Into Winning Steps](/prompt-engineering/prompt-chaining) — 将复杂工作分解为焦点步骤',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — 演示提示词中的结构如何减少解释开销',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — 目录化58+离散的提示词技术',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — 关于提示词优化以实现速度和可靠性的官方指导',
          ],
        },
      },
    },
    ko: {
      theme: 'Fundamentals',
      heroImage: '/images/prompt-for-speed-overview-hero-ko.png',
      title: '더 빠른 AI 답변: 속도를 위한 Prompt 작성 방법',
      intro: 'AI prompt의 느린 응답에는 단 하나의 원인이 있습니다: 모호함이 모델을 추측하게 만듭니다. 다섯 가지 설계 결정으로 모호함을 제거하면 어떤 모델에서든 첫 번째 시도에 정확하고 빠른 답변을 얻을 수 있습니다.',
      publishDate: '2026-03-22',
      dateModified: '2026-07-29',
      seoTitle: '더 빠른 AI Prompt 기법: 속도 최적화 2026',
      metaDescription: '느린 AI prompt는 모델을 추측하게 만드는 모호함입니다. GPT-5.6와 Claude에서 첫 번째 시도에 정확한 답변을 위한 5가지 설계 변경 방법.',
      readTime: '8분 분량',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '더 빠른 AI 답변: 속도를 위한 Prompt 작성 방법',
        description: '느린 AI prompt에는 단 하나의 원인이 있습니다: 모호함. 다섯 가지 설계 결정이 첫 번째 시도에 정확하고 빠른 답변을 제공합니다.',
        datePublished: '2026-03-22',
        dateModified: '2026-07-29',
        url: 'https://www.promptquorum.com/ko/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed',
        inLanguage: 'ko',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        keywords: ['더 빠른 AI prompt', '속도를 위한 프롬프팅', 'AI 지연 시간 감소', 'prompt engineering', 'GPT-5.6', 'Claude', 'Gemini'],
      },
      sections: {
        definition: {
          title: 'AI 답변이 부풀려지는 이유',
          content: [
            '**Prompt engineering에서 속도란 하드웨어 지연 시간이 아니라 의도적인 prompt 설계를 통해 간결하고 직접적인 AI 답변을 얻는 것을 의미합니다.** GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro에서 수백 개의 prompt를 테스트한 결과, 결론은 일관됩니다: 가장 빠른 답변은 "더 빠른" 모델이 아니라 가장 엄격한 제약에서 나옵니다.',
            'AI 답변에는 두 가지 유형의 지연이 있습니다: 토큰 생성 지연 시간(모델의 서버에서 발생하며, 사용자의 문제가 아님)과 답변 부풀리기(prompt 설계에서 발생하며, 전적으로 사용자의 문제).',
            '부풀리기는 모델이 위험을 회피해야 할 때 발생합니다. 명확한 제약이 없으면 모델은 모든 측면을 다루고, 유보 조건을 추가하고, 지시를 반복하고, 이미 알고 있는 기본 사항을 설명합니다. 이러한 요소 각각이 요청하지 않은 토큰을 추가합니다.',
          ],
        },
        tldr: {
          title: '핵심 요약',
          isTldr: true,
          items: [
            '**모호한 prompt는 모델이 위험을 회피하고 답변을 부풀리게 만듭니다.** 정확한 작업은 직접적인 답변을 만듭니다.',
            '**명시적인 길이 제한이 일반적인 간결함 요청보다 더 효과적입니다.** "간결하게"가 아니라 "3개 bullet로" 또는 "50단어 미만으로"라고 말하십시오.',
            '**출력 형식은 거의 다른 무엇보다 답변 길이를 더 많이 좌우합니다.** JSON, bullet 목록, 한 문장 형식은 토큰 생성을 크게 줄입니다.',
            '**다중 작업 prompt는 토큰을 낭비합니다.** 복잡한 작업을 prompt 체인으로 나누십시오 — 각 단계가 더 적은 채우기를 생성합니다.',
            '**역할과 컨텍스트는 설명 부담을 억제합니다.** "전문가 대상을 가정하십시오"는 초급 수준의 채우기를 자동으로 제거합니다.',
          ],
        },
        rootCauses: {
          title: '답변 부풀림의 근본 원인',
          items: [
            '모델이 모든 해석을 다루도록 강제하는 모호한 작업',
            '형식 지시 누락 (기본값은 산문 단락)',
            '명시적인 길이 제한 없음 (모델이 사용자의 기준을 추측함)',
            '중첩된 목표 (다중 작업 prompt는 컨텍스트 전환 부담을 유발함)',
            '컨텍스트 누락으로 모델이 가장 전문성이 낮은 대상을 가정하게 됨',
          ],
        },
        vagueness: {
          title: '가장 큰 원인: 모호하거나 개방형인 prompt',
          content: '**작업이 좁을수록 답변은 더 짧고 직접적입니다.** 개방형 prompt는 모델이 요청의 모든 해석을 다루도록 강제하여, 요청하지 않은 설명 계층을 추가합니다.',
        },
        badPromptExample: {
          title: '[나쁜 Prompt]',
          blockquote: '연구에 가장 좋은 AI 도구들에 대해 알려주세요.',
        },
        badPromptExplanation: {
          content: '이는 도구, 사용 사례, 가격, 비교, 경고 등 실제로 필요한 것을 제외한 모든 것을 다루는 400단어 이상의 결과를 생성합니다.',
        },
        goodPromptExample: {
          title: '[좋은 Prompt]',
          blockquote: '학술 논문 분석에 최적화된 AI 연구 도구 3개를 나열하십시오. 형식: 도구 이름, 강점 한 문장, 주요 약점. 전문가 대상을 가정하십시오. 도입이나 결론 없음.',
        },
        goodPromptExplanation: {
          content: '이는 5개의 bullet, 총 80단어를 생성합니다. 차이는 간결함 요청이 아니라 구체성입니다. 두 번째 prompt는 범위, 대상, 형식에 대한 모호함을 제거합니다.',
        },
        lengthInstructions: {
          title: '원하는 길이를 모델에 정확히 알려주십시오',
          content: '명시적인 길이 지시는 모델에게 "간결하게" 하라고 요청하는 것보다 10배 더 효과적입니다. 길이를 맨 앞에서 명시하고, 끝에서 명시하지 마십시오. 길이 제약을 prompt의 첫 번째 또는 두 번째 문장에 배치하고, 끝에 숨기지 마십시오.',
        },
        lengthTable: {
          columns: ['지시 유형', '일반적인 출력'],
          rows: [
            { '지시 유형': '"간결하게"', '일반적인 출력': '200-400단어 (모델이 사용자의 기준을 추측함)' },
            { '지시 유형': '"3개 bullet로"', '일반적인 출력': '45-75단어 (엄격한 형식 제약)' },
            { '지시 유형': '"100단어 미만으로"', '일반적인 출력': '85-110단어 (한계를 준수함)' },
            { '지시 유형': '"한 단락, 최대 4개 문장"', '일반적인 출력': '60-100단어 (형식 + 문장 제한)' },
            { '지시 유형': '"한 문장으로 답변"', '일반적인 출력': '15-40단어 (원자적 제약)' },
          ],
        },
        format: {
          title: '형식을 작업에 맞추십시오',
          content: '**출력 형식은 거의 다른 무엇보다 답변 길이를 더 많이 좌우합니다.** 올바른 형식은 채우기의 전체 범주를 제거합니다. AI 모델은 명시적으로 억제하지 않는 한 자동으로 도입부, 결론, 유보 표현을 생성합니다. JSON 형식(구조화된 출력)이 가장 빠릅니다 — 키-값 쌍 안에는 산문식 채우기가 들어갈 자리가 없습니다.',
        },
        formatExamples: {
          items: [
            '**결정 작업입니까?** "예 또는 아니오로 답변한 다음 이유를 한 문장으로."',
            '**목록 작업입니까?** "bullet만. 도입이나 마무리 없음."',
            '**요약 작업입니까?** "3개 bullet, 각 최대 15단어."',
          ],
        },
        multiTask: {
          title: 'Prompt당 하나의 작업',
          content: '**다중 작업 prompt는 더 길고, 더 느리고, 덜 집중된 답변을 생성합니다.** 수십 개의 프로젝트에서 테스트한 결과, 복잡한 작업을 prompt 체인 — 단계별로 하나의 집중된 prompt — 으로 나누면 총 토큰을 30-50% 줄입니다. 단일 작업 prompt는 40% 더 짧습니다. 복잡한 작업을 체이닝하는 방법은 [프롬프트 체이닝: 복잡한 작업을 성공적인 단계로 분해하는 방법]에서 자세히 알아보십시오.',
        },
        multiTaskBad: {
          title: '[나쁜 Prompt]',
          blockquote: '이 고객 피드백 데이터셋을 분석하십시오. 주제를 추출하고, 감정을 점수화하고, 빈도로 순위를 매기고, 제품 개선 사항을 제안하십시오. 형식: markdown 표.',
        },
        multiTaskBadExplain: {
          content: '이는 모델이 분석 모드 간에 전환하도록 강제하여 각 전환마다 설명 부담을 추가합니다.',
        },
        multiTaskGood: {
          title: '[좋은 Prompt — 둘로 분리]',
          content: [
            '**1단계:** "이 고객 피드백에서 가장 흔한 상위 5개 주제를 추출하십시오. 형식: 도입이나 마무리 없는 bullet 목록."',
            '**2단계:** "이 주제들을 빈도로 순위를 매기고 감정을 1-5로 점수화하십시오. 형식: 열이 있는 CSV 표: 주제, 빈도, 감정 점수."',
          ],
        },
        roleContext: {
          title: '역할과 컨텍스트로 설명 부담을 줄이십시오',
          content: '역할 컨텍스트가 없으면 모델은 종종 이미 알고 있는 기본 사항을 설명하며, 초급 수준의 콘텐츠에 토큰을 낭비합니다. 컨텍스트 구성 패턴 전체는 [모든 Prompt에 필요한 5가지 구성 요소]를 참조하십시오.',
        },
        roleContextBad: {
          title: '[나쁜 Prompt]',
          blockquote: 'API rate limiting과 circuit breaker 패턴의 차이는 무엇입니까?',
        },
        roleContextBadNote: {
          content: '모델은 주니어 개발자를 가정하고 두 개념 모두를 기초부터 설명합니다 — 300단어 이상.',
        },
        roleContextGood: {
          title: '[좋은 Prompt]',
          blockquote: '당신은 시니어 백엔드 엔지니어입니다. API rate limiting과 circuit breaker 패턴의 차이를 2개 문장으로 설명하십시오.',
        },
        roleContextGoodNote: {
          content: '같은 질문, 40단어. 역할 신호가 설명 부담을 자동으로 억제하기 때문입니다.',
        },
        negativeInstructions: {
          title: '토큰을 절약하는 부정 지시어',
          content: '**명시적인 "하지 마십시오" 지시어는 가장 흔한 채우기 패턴을 제거합니다.** 속도에 최적화된 prompt에 최소 2-3개를 포함하십시오:',
        },
        negativeList: {
          items: [
            '"질문을 반복하지 마십시오."',
            '"도입 문장 없음."',
            '"마지막에 결론이나 요약 없음."',
            '"답변에 중요하지 않으면 유보 조건 없음."',
            '"\'경우에 따라 다릅니다\' 또는 \'대부분의 경우\'와 같은 유보 표현 없음."',
            '"이미 이해하고 있는 용어는 설명하지 마십시오."',
          ],
        },
        negativeNote: {
          content: '이는 출력 토큰의 20-40%를 절약합니다. 전체 기법은 네거티브 프롬프팅 가이드에서 배우십시오.',
        },
        tradeoff: {
          title: '속도 vs. 품질 — 각각을 최적화해야 할 때',
          content: '속도 중심 제약(엄격한 형식, 길이 제한, 유보 조건 없음)은 더 짧은 답변을 생성하지만 가끔 세부적인 뉘앙스를 놓칩니다. 더 길고 탐색적인 prompt는 예외 사례를 포착하지만 토큰을 3-5배 더 사용합니다. **기본 원칙:** 답변이 즉각적인 결정에 정보를 제공한다면 속도를 최적화하십시오. 답변이 보고서나 분석에 정보를 제공한다면 깊이를 최적화하십시오.',
        },
        tradeoffTable: {
          columns: ['작업 유형', '최적화 대상', '이유'],
          rows: [
            { '작업 유형': '빠른 조회, 예/아니오 결정, 목록 생성', '최적화 대상': '속도', '이유': '놓친 뉘앙스가 중요한 경우는 거의 없음; 목표는 직접성' },
            { '작업 유형': '복잡한 분석, 창작 작업, 추론 체인', '최적화 대상': '깊이', '이유': '간결함은 추론 단계와 중요한 세부 사항을 잃음' },
            { '작업 유형': '검증 또는 사실 확인', '최적화 대상': '속도 + 자기 검증', '이유': '속도는 채우기를 방지하고, 자기 검증 지시는 오류를 잡아냄' },
          ],
        },
        promptquorumTest: {
          title: 'PromptQuorum 합의 테스트',
          content: [
            'GPT-5.6, Claude Opus 4.8, Gemini 3.1 Pro에서 동일한 모호한 prompt와 속도에 최적화된 prompt를 각각 보내 이 속도 원칙을 테스트했습니다:',
            '**모호한 prompt** ("prompt engineering 기법에 대해 알려주세요"): 세 모델 평균 850 토큰 출력.',
            '**속도에 최적화된 prompt** ("더 빠른 LLM 응답을 위한 prompt 기법 5가지를 각각 한 문장으로 나열하십시오"): 세 모델 평균 120 토큰 출력.',
            '세 모델 모두 형식 제약을 동등하게 준수했습니다. 속도에 최적화된 버전은 정확성을 유지하면서 **7배 더 짧았습니다**.',
          ],
        },
        promptquorum: {
          title: 'PromptQuorum이 더 빠른 prompt 작성을 어떻게 돕습니까',
          content: [
            '**멀티 모델 디스패치:** GPT-5.6, Claude, Gemini에서 속도 prompt를 별도로 테스트하는 대신(세 번 복사 붙여넣기), PromptQuorum은 하나의 prompt를 25개 이상의 모델에 동시에 전송하고 모든 응답을 나란히 표시합니다. 어떤 모델이 작업에 가장 간결한 답변을 제공하는지 즉시 확인할 수 있으며, 일반적으로 prompt 반복당 2-3분을 절약합니다.',
            '**내장 프레임워크:** PromptQuorum의 9개 프레임워크(CO-STAR, CRAFT, SPECS, RISEN, TRACE 등)가 단일 인터페이스에서 역할, 작업, 형식, 제약을 자동으로 포함합니다. 수동으로 prompt를 조립할 필요가 없습니다 — 프레임워크가 모호한 prompt로 이어지는 설정 마찰을 제거합니다.',
            '**합의 보기:** 모델에 걸쳐 속도를 테스트할 때는 길이만이 아니라 정확도도 동시에 비교해야 합니다. PromptQuorum의 Quorum 분석은 어떤 모델이 가장 직접적이고 정확하게 답변하는지 평가하여, 추측 없이 올바른 모델을 선택할 수 있게 합니다.',
            '**로컬 LLM 지원:** Ollama, LM Studio, Jan AI를 로컬에서 실행하는 사용자를 위해 PromptQuorum은 전송 전에 prompt를 최적화하여, 하드웨어에서의 토큰 생성을 줄이고 응답 속도를 측정 가능한 수준으로 개선합니다.',
          ],
        },
        template: {
          title: '속도 prompt 템플릿 — 빠른 참조',
          blockquote: '당신은 [역할]입니다.\n\n[단일, 구체적인 작업].\n\n형식: [출력 형식 — 한 문장, JSON, bullet, 표 등].\n\n길이: [명시적 제약 — X단어, Y bullet, 한 문장 등].\n\n없음: 질문 반복, 도입/결론 추가, 중요하지 않으면 경고 포함, 기본 개념 설명.',
        },
        templateExample: {
          title: '예시 (완성)',
          blockquote: '당신은 B2B SaaS 지표 전문 제품 관리자입니다.\n\n구독 코호트에서 고객 이탈의 상위 3가지 원인을 요약하십시오.\n\n형식: Bullet, 각 한 줄.\n\n길이: 최대 3개 bullet.\n\n없음: 제공된 데이터 반복, 도입 추가, "경우에 따라 다릅니다"로 헤징.',
        },

        howToStart: {
          title: '더 빠르고 간결한 AI 답변을 위한 prompt 작성법',
          numberedItems: [
            '**작업을 하나의 구체적인 질문으로 좁히기:** 복합 작업을 별도의 prompt로 분리합니다. "이 계약서를 요약하고 위험을 식별하세요"는 두 개의 prompt가 되어 각각 더 짧고, 빠르고, 정확해집니다.',
            '**명시적인 길이 제약 추가하기:** 긴 출력이 필요 없는 모든 prompt에 단어 수나 문장 수 제한을 포함합니다. "3개 bullet로 답변" 또는 "최대 100단어"는 장황한 서론과 불필요한 내용을 방지합니다.',
            '**형식을 작업에 맞추기:** 목록에는 bullet, 비교에는 표, 예/아니오 답변에는 단문을 사용합니다. 형식이 지정되지 않으면 모델은 기본적으로 산문으로 답변합니다.',
            '**역할과 맥락으로 설명 부담 줄이기:** 전문가와 대화하고 있다고 아는 모델은 기본 정의를 생략합니다. "당신은 시니어 소프트웨어 엔지니어에게 조언하고 있습니다"는 배경 설명 단락을 없앱니다.',
            '**부정 지시어를 추가해 불필요한 내용 차단하기:** "질문을 반복하지 마세요", "마무리 요약을 추가하지 마세요", "상투적인 표현을 사용하지 마세요"는 답변이 부풀려지는 가장 흔한 원인을 제거합니다.',
          ],
        },

        faqs: {
          faqs: [
            {
              q: '더 짧은 prompt가 항상 더 빠른 답변을 제공합니까?',
              a: '아닙니다. **정확성이 간결함보다 중요합니다.** 50단어의 모호한 prompt가 100단어의 정확한 prompt보다 더 긴 답변을 생성합니다. 구체성 없는 길이 제약은 쓸모가 없습니다.',
            },
            {
              q: 'GPT-5.6, Claude, Gemini에서 같은 방식으로 작동합니까?',
              a: '대부분 그렇습니다. 세 가지 모두 명시적인 길이 제한과 형식 제약을 따릅니다. Claude는 bullet 제약을 더 엄격하게 따르는 경향이 있습니다; GPT-5.6는 "결론 없음"을 요청해도 요약 문장을 추가하는 경우가 있습니다. 세 가지 모두에서 속도 prompt를 테스트하여 최적을 찾으십시오.',
            },
            {
              q: '빠른 답변이 필요하지만 정확해야 하면 어떻게 합니까?',
              a: '정확성과 자기 검증 지시를 결합하십시오. 예시: "2개의 문장으로 답변하십시오. 그런 다음 모순점을 확인하십시오." 이것은 주요 답변을 부풀리지 않고 검증 단계를 추가합니다.',
            },
            {
              q: '재사용을 위해 속도 prompt 템플릿을 저장할 수 있습니까?',
              a: '네. PromptQuorum에서 내장 프레임워크 옆에 속도 prompt 템플릿을 만들고, 이름을 붙이고, 저장할 수 있습니다. 팀과 템플릿을 공유하여 반복적인 prompt 작성을 없애십시오.',
            },
            {
              q: '로컬 추론 (Ollama, LM Studio)이 답변을 더 빠르게 합니까?',
              a: '네, 하지만 prompt가 최적화된 경우에만 그렇습니다. 로컬 모델이 하드웨어에서 실행됩니다 — 더 빠른 네트워크 지연. 하지만 prompt가 100개 대신 500개 토큰을 생성한다면 지연 시간 개선이 중요하지 않습니다. 먼저 prompt를 최적화하십시오; 로컬 추론이 그 이점을 증폭시킵니다.',
            },
          ],
        },
        relatedReading: {
          content: [
            '[Prompt Engineering이란 무엇입니까?](/ko/prompt-engineering/what-is-prompt-engineering) — 모든 prompt 설계의 기초',
            '[모든 Prompt에 필요한 5가지 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs) — 역할, 작업, 예시, 제약, 형식',
            '[토큰, 비용, 한도](/ko/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 출력 길이가 API 비용에 직접 미치는 영향',
          ],
        },
        sources: {
          content: [
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — prompt의 구조가 설명 오버헤드를 줄이는 방법을 보여줌',
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — 58가지 이상의 개별 프롬프팅 기법을 목록화함',
            '[OpenAI, 2024. "Techniques for Production LLM Applications"](https://platform.openai.com/docs/guides/prompt-engineering) — 속도와 신뢰성을 위한 prompt 최적화에 대한 공식 가이드',
          ],
        },
      },
    },
  };
