// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-for-speed
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'Faster AI Answers: How to Prompt for Speed',
      intro: 'Speed in prompt engineering means getting concise, direct AI responses through deliberate prompt design—not hardware latency. Most AI answers bloat because of vague prompts, not slow models.',
      publishDate: '2026-03-22',
      readTime: '9 min read',

      seoTitle: 'Prompt for Speed 2026: Reduce Latency',

      metaDescription: 'Speed up LLM inference by 30-50%: short prompts, batching. Reduce latency and costs without sacrificing quality.',

      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Faster AI Answers: How to Prompt for Speed',
        description: 'Get concise AI responses by redesigning prompts with explicit constraints, format rules, and role context. Reduce token bloat across GPT-4o, Claude, Gemini.',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        author: { '@type': 'Person', name: 'Hans Kuepper' },
        keywords: ['prompt engineering', 'answer length', 'prompt optimization', 'concise outputs', 'LLM efficiency', 'GPT-4o', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
        ],
      },
      sections: {
        definition: {
          title: 'Why AI Answers Bloat',
          content: [
            '**Speed in prompt engineering means getting concise, direct AI responses through deliberate prompt design—not hardware latency.** Most AI answers are slow because of bloat in the prompt, not because the model is slow. In my experience after testing hundreds of prompts across GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro, the fastest answers come from the tightest constraints.',
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
            'I tested this speed principle across GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro by sending the same vague prompt versus a speed-optimized prompt:',
            '**Vague prompt** ("Tell me about prompt engineering techniques"): average output 850 tokens across all three models.',
            '**Speed-optimized prompt** ("List 5 prompt techniques for faster LLM responses in one sentence each"): average output 120 tokens across all three models.',
            'All three models respected the format constraint equally. The speed-optimized version was **7× shorter** while remaining accurate.',
          ],
        },

        promptquorum: {
          title: 'How PromptQuorum Helps You Prompt Faster',
          content: [
            '**Multi-model dispatch:** Instead of testing your speed prompt across GPT-4o, Claude, and Gemini separately (copying and pasting three times), PromptQuorum sends one prompt to 25+ models at once and displays all responses side-by-side. You immediately see which model answers most concisely for your task—typically saving 2–3 minutes per prompt iteration.',
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
              q: 'Does this work the same on GPT-4o, Claude, and Gemini?',
              a: 'Mostly. All three respect explicit length limits and format constraints. Claude tends to follow bullet-point constraints more strictly; GPT-4o occasionally adds a summary sentence despite "no conclusion" instructions. Test your speed prompt across all three to find the best fit.',
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
      title: 'Schnellere KI-Antworten: So prompts man für Geschwindigkeit',
      intro: 'Geschwindigkeit beim Prompt Engineering bedeutet, prägnante und direkte KI-Antworten durch durchdachtes Prompt-Design zu erreichen—nicht durch Hardware-Latenz. Die meisten KI-Antworten sind langsam, weil der Prompt zu vage ist, nicht weil das Modell langsam ist.',
      publishDate: '2026-03-22',
      readTime: '9 Min. Lesezeit',
      sections: {
        definition: {
          title: 'Warum KI-Antworten aufgebläht werden',
          content: [
            '**Geschwindigkeit beim Prompt Engineering bedeutet, prägnante und direkte KI-Antworten durch durchdachtes Prompt-Design zu erreichen—nicht Hardware-Latenz.** Die meisten KI-Antworten sind langsam, weil der Prompt zu vage ist, nicht weil das Modell langsam ist. Nach dem Testen von Hunderten von Prompts mit GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro bin ich zu dem Ergebnis gekommen, dass die schnellsten Antworten von den strengsten Einschränkungen kommen.',
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
            'Ich testete dieses Speed-Prinzip mit GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro, indem ich den gleichen vagen Prompt versus einen speed-optimierten Prompt sendete:',
            '**Vager Prompt** ("Erzähle mir von Prompt-Engineering-Techniken"): durchschnittliche Ausgabe 850 Token über alle drei Modelle.',
            '**Speed-optimierter Prompt** ("Liste 5 Prompt-Techniken für schnellere LLM-Antworten auf, je ein Satz"): durchschnittliche Ausgabe 120 Token über alle drei Modelle.',
            'Alle drei Modelle respektierten die Formateinschränkung gleichermaßen. Die speed-optimierte Version war **7× kürzer** und blieb dennoch genau.',
          ],
        },
        promptquorum: {
          title: 'Wie PromptQuorum dir hilft, schneller zu prompts',
          content: [
            '**Multi-Model-Versand:** Anstatt deinen Speed-Prompt separat über GPT-4o, Claude und Gemini zu testen (dreimal copy-paste), sendet PromptQuorum einen Prompt an 25+ Modelle gleichzeitig und zeigt alle Antworten nebeneinander. Du sehst sofort, welches Modell die prägnanteste Antwort für deine Aufgabe gibt—speichert normalerweise 2–3 Minuten pro Prompt-Iteration.',
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
        faqs: {
          faqs: [
            {
              q: 'Führt ein kürzerer Prompt immer zu schnelleren Antworten?',
              a: 'Nein. **Präzision ist wichtiger als Prägnanz.** Ein vager 50-Wort-Prompt erzeugt längere Antworten als ein präziser 100-Wort-Prompt. Längenbeschränkungen ohne Spezifität sind nutzlos.',
            },
            {
              q: 'Funktioniert dies gleich auf GPT-4o, Claude und Gemini?',
              a: 'Größtenteils. Alle drei respektieren explizite Längenlimits und Formateinschränkungen. Claude folgt Bullet-Point-Einschränkungen präziser; GPT-4o fügt manchmal einen Zusammenfassungssatz hinzu, obwohl "keine Schlussfolgerung" angefordert wurde. Teste deinen Speed-Prompt über alle drei, um die beste Passung zu finden.',
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

    fr: {
      theme: 'Fondamentaux',
      title: 'Des réponses IA plus rapides : Comment concevoir des prompts pour la vitesse',
      intro: 'La rapidité en ingénierie de prompt signifie obtenir des réponses IA concises et directes grâce à une conception délibérée—non une latence matérielle. La plupart des réponses IA sont lentes en raison d\'une conception vague de prompt, non pas parce que le modèle est lent.',
      publishDate: '2026-03-22',
      readTime: '9 min de lecture',
      sections: {
        definition: {
          title: 'Pourquoi les réponses IA sont gonflées',
          content: [
            '**La rapidité en ingénierie de prompt signifie obtenir des réponses IA concises et directes grâce à une conception délibérée—non une latence matérielle.** La plupart des réponses IA sont lentes à cause d\'un gonflement du prompt, non pas parce que le modèle est lent. Après avoir testé des centaines de prompts sur GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro, j\'ai trouvé que les réponses les plus rapides proviennent des contraintes les plus strictes.',
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
            'J\'ai testé ce principe de vitesse sur GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro en envoyant le même prompt vague par rapport à un prompt optimisé pour la vitesse :',
            '**Prompt vague** ("Parle-moi des techniques d\'ingénierie de prompt"): sortie moyenne 850 tokens sur tous les trois modèles.',
            '**Prompt optimisé pour la vitesse** ("Liste 5 techniques de prompt pour des réponses LLM plus rapides en une phrase chacun"): sortie moyenne 120 tokens sur tous les trois modèles.',
            'Les trois modèles ont respecté la contrainte de format de la même manière. La version optimisée pour la vitesse était **7× plus courte** tout en restant précise.',
          ],
        },
        promptquorum: {
          title: 'Comment PromptQuorum vous aide à concevoir plus rapidement',
          content: [
            '**Dispatch multi-modèle :** Au lieu de tester votre prompt de vitesse séparément sur GPT-4o, Claude et Gemini (trois fois copier-coller), PromptQuorum envoie un prompt à 25+ modèles à la fois et affiche toutes les réponses côte à côte. Vous voyez immédiatement quel modèle répondez de la manière la plus concise pour votre tâche—économisant généralement 2–3 minutes par itération de prompt.',
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
        faqs: {
          faqs: [
            {
              q: 'Un prompt plus court donne-t-il toujours une réponse plus rapide ?',
              a: 'Non. **La précision importe plus que la brièveté.** Un prompt vague de 50 mots produit des réponses plus longues qu\'un prompt précis de 100 mots. Les contraintes de longueur sans spécificité sont inutiles.',
            },
            {
              q: 'Cela fonctionne-t-il de la même manière sur GPT-4o, Claude et Gemini ?',
              a: 'Principalement. Les trois respectent les limites de longueur explicites et les contraintes de format. Claude suit les contraintes de points à puces plus strictement ; GPT-4o ajoute occasionnellement une phrase de résumé malgré les instructions "pas de conclusion". Testez votre prompt de vitesse sur tous les trois pour trouver le meilleur ajustement.',
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
      title: '高速なAI回答：スピードのためのプロンプト設計',
      intro: 'プロンプトエンジニアリングにおける「速度」とは、意図的なプロンプト設計によって簡潔で直接的なAI応答を得ることです。ハードウェアレイテンシーではありません。ほとんどのAI回答が遅い理由は、モデルが遅いからではなく、プロンプトが曖昧だからです。',
      publishDate: '2026-03-22',
      readTime: '9分で読める',
      sections: {
        definition: {
          title: 'AI回答が膨張する理由',
          content: [
            '**プロンプトエンジニアリングにおける「速度」とは、意図的なプロンプト設計によって簡潔で直接的なAI応答を得ることです。** AI回答が遅いのは、モデルが遅いからではなく、プロンプトの膨張が原因です。GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proで数百個のプロンプトをテストした経験から、最速の回答は最も厳しい制約から生まれることを発見しました。',
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
            'I tested this speed principle across GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro by sending the same vague prompt versus a speed-optimized prompt:',
            '**曖昧なプロンプト** (「プロンプトエンジニアリング技術について教えてください」)：3つのモデルすべてで平均850トークンの出力。',
            '**スピード最適化プロンプト** (「より高速なLLM応答のための5つのプロンプト技術を1文ずつリストしてください」)：3つのモデルすべてで平均120トークンの出力。',
            '3つのモデルすべてがフォーマット制約を同等に尊重しました。スピード最適化版は**7倍短く** 、正確性を保ちました。',
          ],
        },
        promptquorum: {
          title: 'PromptQuorumがより高速にプロンプトするのにどのように役立つか',
          content: [
            '**マルチモデルディスパッチ：** スピードプロンプトをGPT-4o、Claude、Geminiで個別にテストする代わりに(3回のコピー貼り付け)、PromptQuorumは1つのプロンプトを25以上のモデルに一度に送信し、すべての応答を並べて表示します。タスクのどのモデルが最も簡潔な回答を出すかをすぐに確認できます—通常、プロンプト反復あたり2～3分節約できます。',
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
        faqs: {
          faqs: [
            {
              q: 'より短いプロンプトは常により速い回答をもたらしますか？',
              a: 'いいえ。**精度は簡潔性より重要です。** 曖昧な50単語のプロンプトは、正確な100単語のプロンプトより長い回答を生成します。特異性のない長さ制約は役に立たません。',
            },
            {
              q: 'これはGPT-4o、Claude、Geminiで同じように機能しますか？',
              a: 'ほぼ。すべての3つが明示的な長さ制限とフォーマット制約を尊重します。Claudeはbullet ポイント制約により厳密に従う傾向があります。GPT-4oは時々「結論なし」指示にもかかわらず要約文を追加します。最適な適合を見つけるために、3つすべてでスピードプロンプトをテストします。',
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
      title: '更快的AI回答：如何设计提示词以提高速度',
      intro: '提示词工程中的"速度"是指通过有意的提示词设计获得简洁、直接的AI回答，而不是硬件延迟。大多数AI回答缓慢的原因是提示词过于宽泛，而不是模型缓慢。',
      publishDate: '2026-03-22',
      readTime: '阅读约9分钟',
      sections: {
        definition: {
          title: 'AI回答为何臃肿',
          content: [
            '**提示词工程中的"速度"是指通过有意的提示词设计获得简洁、直接的AI回答，而不是硬件延迟。** 大多数AI回答缓慢是由于提示词臃肿，而不是模型缓慢。根据在GPT-4o、Claude 4.6 Sonnet和Gemini 1.5 Pro上测试数百个提示词的经验，最快的回答来自最严格的约束。',
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
            '我通过向GPT-4o、Claude 4.6 Sonnet和Gemini 1.5 Pro发送相同的模糊提示词与速度优化的提示词来测试这一原理：',
            '**模糊提示词** ("告诉我关于提示词工程技术")：所有三个模型的平均输出850令牌。',
            '**速度优化提示词** ("列出5个用于更快LLM响应的提示词技术，每个一句话")：所有三个模型的平均输出120令牌。',
            '所有三个模型同样尊重格式约束。速度优化版本**7倍更短**，同时保持准确。',
          ],
        },
        promptquorum: {
          title: 'PromptQuorum如何帮助你更快地提示',
          content: [
            '**多模型分发：** 与其在GPT-4o、Claude和Gemini上分别测试你的速度提示词（三次复制粘贴），PromptQuorum同时将一个提示词发送到25个以上的模型并并排显示所有响应。你立即看到哪个模型为你的任务给出最简洁的答案—通常节省每次提示词迭代2–3分钟。',
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
        faqs: {
          faqs: [
            {
              q: '更短的提示词总是给出更快的回答吗？',
              a: '不。**具体性比简洁性更重要。** 50词的模糊提示词产生比100词精确提示词更长的回答。没有具体性的长度约束是无用的。',
            },
            {
              q: '这在GPT-4o、Claude和Gemini上的工作方式相同吗？',
              a: '大多数情况下。所有三个都尊重明确的长度限制和格式约束。Claude倾向于更严格地遵循项目符号约束；GPT-4o偶尔会添加摘要句子，尽管要求"无结论"。在所有三个上测试你的速度提示词以找到最佳匹配。',
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
  };
