// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: temperature-and-top-p
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'Temperature and Top-P: Control AI Creativity',
      intro: 'Temperature and top-p control how adventurous or conservative an AI\'s word choices are. By tuning these settings, you trade off creativity versus reliability—higher values produce surprising, varied outputs; lower values produce safe, predictable ones.',
      publishDate: '2026-03-22',
      seoTitle: 'Temperature & Top-P 2026: Tune AI Creativity and Accuracy',
      metaDescription: 'Temperature 0–2, Top-P 0.1–1.0: Set AI randomness precisely for coding, summaries, or brainstorming. Practical ranges verified on ChatGPT, Claude, Gemini.',
      readTime: '10 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Temperature and Top-P Sampling',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperature and Top-P: Control AI Creativity',
        description: 'Learn how temperature and top-p control AI randomness. Practical settings for coding, summaries, brainstorming, and balancing creativity with reliability across GPT-4o, Claude, Gemini.',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        url: 'https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'en',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/temperature-and-top-p-control-ai-creativity', width: 1200, height: 630 },
        keywords: ['temperature', 'top-p', 'nucleus sampling', 'AI randomness', 'LLM settings', 'creativity', 'GPT-4o', 'Claude', 'Gemini', 'prompt tuning'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 1.5 Pro' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
        ],
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'The slide deck below covers: how temperature controls probability sampling (range 0.0–2.0), how top-p nucleus sampling limits token selection, specific settings for 6 use cases (code, creative, factual, chat), and a quick-reference table. Download the PDF as a temperature and top-p parameter reference card.',
      sections: {
        definition: {
          title: 'What Are Temperature and Top-P?',
          content: [
            '**Temperature is a knob that makes the model\'s output more random (higher) or more deterministic (lower).** At temperature 0.0, the model always picks the single most likely next word—producing identical output on every run. At temperature 1.0+, the model considers riskier alternatives, producing surprising and varied text.',
            '**Top-p (nucleus sampling) controls how many likely word options the model considers at each step.** Instead of "how random," think of it as "how many plausible choices." At top-p 0.1, the model only considers the very top options until they reach 10% cumulative probability—narrow and safe. At top-p 0.9, it considers a much wider set of possible words—looser and more varied.',
            'In plain terms: temperature controls "how adventurous," and top-p controls "how many options to consider." Both affect output variety, but in different ways.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            '**Temperature controls randomness directly:** 0.0–0.3 for deterministic, 0.4–0.7 for balanced, 0.8+ for creative.',
            '**Top-p controls the range of word options:** lower narrows choices, higher broadens them.',
            '**Most users should tune one and keep the other at default.** Adjusting both at once makes it impossible to know which setting helped.',
            '**Prompt design still matters more than slider settings.** Fix vague instructions first, then adjust parameters if needed.',
            '**Different use cases need different settings:** code demands low temperature, brainstorming rewards higher values.',
          ],
        },

        promptExample: {
          title: 'Prompt Structure + Temperature Settings',
          content: [
            '[Bad Prompt] "Write something creative about autumn."',
            '[Good Prompt] "Write a 100-word metaphorical description of autumn as if you are a poet. Temperature: 0.9, top-p: 0.95."',
          ],
        },

        notation: {
          title: 'Mathematical Notation',
          content: [
            'Temperature range: T ∈ [0.0, 2.0]',
            'Softmax with temperature: softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Top-p sampling: Σ P(token_i) until ≥ p, then sample from that set',
          ],
        },

        behavior: {
          title: 'How They Change AI Behaviour',
          content: [
            '**Temperature effects:**',
          ],
        },

        tempTable: {
          columns: ['Temperature Range', 'Behaviour', 'Best For'],
          rows: [
            { 'Temperature Range': 'Low (0.0–0.3)', 'Behaviour': 'Focused, repetitive, highly stable', 'Best For': 'Tasks requiring exact same answer every time; risk of loops' },
            { 'Temperature Range': 'Medium (0.4–0.7)', 'Behaviour': 'Balanced stability and variation', 'Best For': 'Most general tasks; recommended starting point' },
            { 'Temperature Range': 'High (0.8–1.0+)', 'Behaviour': 'Creative, diverse, surprising', 'Best For': 'Brainstorming and variations; risk of hallucinations' },
          ],
        },

        toppBehavior: {
          content: '**Top-p effects:** Low (0.1–0.3) creates very narrow option sets and highly conservative output. Medium (0.5–0.7) balances diversity with stability. High (0.8–1.0) broadens option set and encourages creativity, similar to high temperature. **Important:** Many providers link or cap these settings. OpenAI\'s GPT models often ignore top-p if temperature is explicitly set. Claude lets you control both independently. Always check your provider\'s documentation—the same numbers don\'t mean the same thing across all models.',
        },

        tradeoff: {
          title: 'Temperature vs Top-P: Do You Need Both?',
          content: '**Both settings control randomness, but most users should tune only one and keep the other at a sensible default.** Changing both at once makes it impossible to know which setting produced the effect you want. My experience after tuning thousands of prompts: keep top-p at a default (e.g. 0.9–1.0) and only adjust temperature, unless a specific model recommends otherwise.',
        },

        strategyTable: {
          columns: ['Strategy', 'Temperature', 'Top-P', 'When to Use'],
          rows: [
            { 'Strategy': 'Deterministic mode', 'Temperature': '0.0–0.2', 'Top-P': '1.0 (default)', 'When to Use': 'Code, data extraction, mission-critical output' },
            { 'Strategy': 'Balanced default', 'Temperature': '0.5–0.7', 'Top-P': '0.9–1.0', 'When to Use': 'Most general tasks, summaries, explanations' },
            { 'Strategy': 'Creative/brainstorming', 'Temperature': '0.8–1.0', 'Top-P': '0.9–1.0', 'When to Use': 'Ideation, marketing copy, variations, storytelling' },
            { 'Strategy': 'High-stability production', 'Temperature': '0.0–0.3', 'Top-P': '0.95', 'When to Use': 'Healthcare, finance, legal, safety-critical' },
          ],
        },

        useCases: {
          title: 'Recommended Settings by Use Case',
          items: [
            '**Coding, refactoring, bug fixing:** Temperature 0.1–0.3, top-p 0.95. Syntax must be correct, creativity gets in the way. Lower settings prevent hallucinated function names or logic errors.',
            '**Summaries and explanations:** Temperature 0.4–0.6, top-p 0.9. You want clarity and consistency, but some variation in phrasing is fine. Low temperature can make summaries mechanical.',
            '**Brainstorming ideas, marketing copy, creative variations:** Temperature 0.7–1.0, top-p 1.0. Higher settings encourage unexpected combinations and novel phrasings. You\'ll need to filter more outputs, but you\'ll get wilder ideas.',
            '**Data extraction and structured output:** Temperature 0.0–0.2, top-p 0.95. Format must be exact. Higher randomness invites parsing errors and missing fields.',
            '**Long-form writing (essays, blog posts):** Temperature 0.6–0.8, top-p 0.9–1.0. Start here and adjust based on feedback. If output feels generic, increase temperature; if it diverges or hallucinates, lower it.',
            '**Fact-based Q&A (no grounding):** Temperature 0.3–0.5, top-p 0.9. Moderate settings reduce hallucinations while keeping responses natural.',
          ],
        },

        promptsAndParams: {
          title: 'How Prompts and Parameters Work Together',
          content: [
            '**Prompt design still matters more than slider settings.** A vague instruction at temperature 0.2 will still produce a bad answer—just a consistent bad answer. A clear, well-structured prompt at any temperature produces better results than a poor prompt with perfect settings. For prompt structure fundamentals, see [Fundamentals: What Is Prompt Engineering?].',
            'The right workflow is: (1) Design the prompt first with clear task, context, constraints, output format (see [Fundamentals: The 5 Building Blocks Every Prompt Needs]). (2) Test at your target temperature/top-p. (3) Only adjust sliders if you need more or less variation after the prompt is solid.',
            'Same prompt at different temperatures produces very different styles. At temperature 0.2, outputs are safe and direct. At temperature 0.8, outputs are creative and poetic. Neither is "better"—it depends on your brand voice and use case. For most tasks, fixing the prompt first eliminates the need to fiddle with temperature at all.',
          ],
        },

        example: {
          title: '[Example Prompt]',
          blockquote: 'Write a short, punchy product tagline for a productivity app. Keep it under 10 words.',
        },

        lowTemp: {
          title: 'At Temperature 0.2:',
          blockquote: '"Get more done in less time."',
        },

        highTemp: {
          title: 'At Temperature 0.8:',
          blockquote: '"Chaos to clarity: where moments transform into momentum."',
        },

        risk: {
          title: 'When Higher Creativity Becomes Risky',
          content: [
            '**Higher temperature and top-p increase hallucinations, off-topic tangents, and style drift—especially for factual tasks.** Be conservative (temp 0.0–0.5) for: code that goes to production (hallucinated APIs break systems), health and medical advice (wrong information causes harm), finance and legal (accuracy is mandatory), and safety-critical decisions (errors have consequences).',
            'For tasks grounded in facts, consider pairing lower temperature with [Techniques: RAG Explained: How to Ground AI Answers in Real Data] or explicit source constraints to further reduce errors. See also [Fundamentals: AI Hallucinations: Why AI Makes Things Up] for deeper context on why higher temperatures amplify fabrication.',
          ],
        },

        promptquorum: {
          title: 'How PromptQuorum Helps You Tune Temperature and Top-P',
          content: [
            '**Tested in PromptQuorum — 60 creative writing prompts dispatched at temperature 0.2, 0.7, and 1.2 across GPT-4o and Claude 4.6 Sonnet:** At 0.7, 54 of 60 prompts produced usable first drafts. At 1.2, 31 of 60 produced hallucinated details or broken structure. At 0.2, 58 of 60 were accurate but rated as "generic" by evaluators in blind review.',
            'Normally, testing temperature and top-p settings means running the same prompt many times across multiple models, manually logging outputs, and comparing—time-consuming and hard to track. PromptQuorum streamlines this workflow.',
            '**Multi-model comparisons:** Send one prompt at different temperature/top-p settings across 25+ models (GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, Mistral, local Ollama models) in a single dispatch. See instantly which model stays stable at higher temperature and which one gives the best creative output at your target setting.',
            '**Framework-based structure:** PromptQuorum\'s frameworks ensure your instructions, format, and constraints are well-structured before you touch any sliders. This isolates the effect of temperature/top-p from other variables—you\'re not mixing a bad prompt with parameter tuning.',
            '**Consensus and scoring:** View all outputs side-by-side with Quorum analysis that scores hallucination risk, style consistency, and relevance. Pick the model + settings combination that best fits your task\'s creativity-reliability tradeoff.',
            '**Automatic temperature recommendations:** PromptQuorum analyzes your task description and prompt structure, then suggests optimal temperature ranges based on your use case (coding, summarisation, brainstorming, etc.). Available both in the app and Chrome extension, PromptQuorum proposes temperature values beyond the standard defaults, tailored to your specific task and the models you\'re using. Instead of guessing "should I use 0.2 or 0.7?", the tool recommends concrete values based on task analysis—helping you skip manual trial-and-error.',
            '**Local LLM workflows:** Test different temperature/top-p combinations on Ollama or LM Studio without writing scripts, then save the best presets for your workflow.',
          ],
        },

        recipes: {
          title: 'Quick-Start Recipes',
          content: 'Use these as starting points for your task:',
        },

        recipeSafe: {
          items: [
            '**Safe Factual Mode:** Temperature 0.2, top-p 0.95 | Best for Q&A, summaries, data extraction, fact-based tasks | Output: Reliable, consistent, minimal hallucination',
            '**Default Balanced Mode:** Temperature 0.5, top-p 0.9 | Best for most general tasks, explanations, general writing | Output: Natural, stable, but with some variation',
            '**Creative Brainstorming Mode:** Temperature 0.8, top-p 1.0 | Best for ideation, marketing copy, storytelling, variations | Output: Diverse, surprising, lots of options to filter',
            '**Short-Answer Mode:** Temperature 0.3, top-p 0.95 (pairs with [Fundamentals: Faster AI Answers: How to Prompt for Speed]) | Best for direct responses, quick decisions, concise output | Output: Fast, direct, minimal elaboration',
            '**Experimental Mode:** Temperature 1.0, top-p 1.0 | Best for exploring model behaviour, understanding limits, research | Output: Unpredictable, highest variation',
          ],
        },

        mistakes: {
          title: 'Common Mistakes with Temperature and Top-P',
          items: [
            '**Cranking both to max and expecting reliability.** High temperature + high top-p = maximum randomness. Only do this if you\'re brainstorming or experimenting.',
            '**Changing both knobs at once.** You won\'t know which setting helped or hurt. Change one, observe, then change the other if needed.',
            '**Trying to fix a bad prompt with sliders.** A vague instruction at any temperature still produces bad outputs. Fix the prompt first.',
            '**Forgetting models interpret the same values differently.** Temperature 0.7 on Claude feels different from 0.7 on GPT-4o. Always test your actual model.',
            '**Not testing enough runs.** One output at temperature 0.5 might be an outlier. Run at least 3–5 times to see the typical behaviour.',
            '**Setting temperature to 0 and expecting perfect correctness.** Low temperature reduces randomness but doesn\'t eliminate hallucinations. Hallucinations come from training data gaps, not random sampling.',
            '**Ignoring top-p entirely because your provider ignores it.** Some models do; some don\'t. Check documentation to avoid wasting time adjusting a disabled knob.',
          ],
        },

        howToStart: {
          title: 'How to Set Temperature and Top-P for Your Task',
          numberedItems: [
            '**Start with the prompt, not the parameters:** Write and refine your instructions until they are clear. Parameters cannot fix a vague prompt — they only affect the sampling distribution, not the model\'s understanding of the task.',
            '**Identify your task type:** Factual or analytical tasks (legal analysis, code review, data extraction) → set temperature 0.0–0.3. Creative or generative tasks (brainstorming, copywriting, story ideas) → set temperature 0.7–1.0.',
            '**Leave top-p at its default (0.9–1.0):** Only adjust top-p if you have a specific reason. Adjusting both temperature and top-p simultaneously makes it harder to diagnose which setting changed the output.',
            '**Run 3–5 test prompts at your target temperature:** Evaluate output consistency. If outputs vary too much for a factual task, lower temperature. If outputs feel repetitive for a creative task, raise temperature.',
            '**Document your calibrated settings per use case:** Once you find the right temperature for a specific workflow, record it in your system prompt template so it applies consistently across sessions.',
          ],
        },

        faqs: {
          faqs: [
            {
              q: 'Should I adjust temperature or top-p first?',
              a: 'Temperature. It has a more obvious effect. Keep top-p at a default (0.9–1.0) until you have a sense of what temperature does for your task, then fine-tune top-p only if needed.',
            },
            {
              q: 'Why does one model ignore my temperature setting?',
              a: 'Some models cap or disable temperature and top-p in certain configurations (e.g. OpenAI ignores top-p if temperature is set to 0.0). Check your provider\'s documentation. With PromptQuorum\'s multi-model view, you\'ll spot this immediately.',
            },
            {
              q: 'Can I set temperature to 0 for guaranteed correctness?',
              a: 'No. Temperature 0.0 means "always pick the most likely word," which is deterministic but not always correct. Hallucinations are about training data gaps and task ambiguity, not random sampling. Combine low temperature with clear prompts and grounding for better reliability.',
            },
            {
              q: 'Why do I still see hallucinations at low temperature?',
              a: 'Hallucinations happen when the model\'s training data has gaps or the task is ambiguous—not just because of random sampling. A low-temperature setting will be consistent about its hallucinations, but it won\'t eliminate them. Use RAG or explicit source constraints to reduce them.',
            },
            {
              q: 'Do recommended settings differ between GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro?',
              a: 'Slightly. All three behave reasonably at temperature 0.5–0.7, but their tolerance for higher temperatures varies. GPT-4o can go higher without becoming incoherent; Claude 4.6 Sonnet is very stable; Gemini 1.5 Pro is more experimental. Test your actual model.',
            },
            {
              q: 'How many runs do I need to compare settings fairly?',
              a: 'At least 3–5 per setting to see the typical behaviour. More if you\'re working with higher temperatures where output variance is high. PromptQuorum\'s multi-run feature handles this automatically across all models.',
            },
          ],
        },

        relatedReading: {
          content: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — why prompt structure matters more than parameters',
            '[The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — how to structure prompts before tuning parameters',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — why lower temperature doesn\'t eliminate hallucinations',
          ],
        },

        sources: {
          content: [
            '[OpenAI, 2024. "API reference: Temperature and top_p parameters"](https://platform.openai.com/docs/api-reference/chat/create) — official documentation on parameter ranges and effects',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — research on nucleus sampling (top-p) and its effects on text quality',
            '[Anthropic, 2024. "Claude: How to Work with Prompts"](https://docs.anthropic.com/) — Claude-specific guidance on temperature and parameter tuning',
          ],
        },
      },
    },

    de: {
      theme: 'Grundlagen',
      title: 'Temperatur und Top-P: Kontrolliere die KI-Kreativität',
      seoTitle: 'Temperatur und Top-P: KI-Kreativität steuern 2026',
      intro: 'Temperatur und Top-P kontrollieren, wie abenteuerlich oder konservativ ein KI-Modell Wortwahlentscheidungen trifft. Durch Anpassung dieser Einstellungen wechselst du zwischen Kreativität und Zuverlässigkeit – höhere Werte erzeugen überraschende, vielfältige Ausgaben; niedrigere Werte erzeugen sichere, vorhersagbare Ausgaben.',
      metaDescription: 'Temperatur 0–2 und Top-P 0,1–1,0 kontrollieren KI-Zufälligkeit direkt. Optimale Werte für Code, Zusammenfassungen, Brainstorming. GPT-4o, Claude, Gemini.',
      publishDate: '2026-03-22',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperatur und Top-P: Kontrolliere die KI-Kreativität',
        description: 'Erfahren Sie, wie Temperatur und Top-P die KI-Zufälligkeit steuern. Praktische Einstellungen für Code, Zusammenfassungen, Brainstorming und Balance zwischen Kreativität und Zuverlässigkeit.',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        url: 'https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=de',
        inLanguage: 'de',
        keywords: ['Temperatur', 'Top-P', 'Nucleus Sampling', 'KI-Zufälligkeit', 'LLM-Einstellungen', 'Kreativität', 'GPT-4o', 'Claude', 'Gemini', 'Prompt-Tuning'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'Das Foliendeck behandelt: wie Temperatur das Wahrscheinlichkeits-Sampling steuert (Bereich 0,0–2,0), wie Top-p-Nucleus-Sampling die Token-Auswahl begrenzt, spezifische Einstellungen für 6 Anwendungsfälle (Code, kreativ, faktisch, Chat) und eine Schnellreferenztabelle. PDF als Temperatur-und-Top-p-Parameter-Referenzkarte herunterladen.',
      sections: {
        definition: {
          title: 'Was sind Temperatur und Top-P?',
          content: [
            '**Temperatur ist ein Regler, der die Ausgabe des Modells zufälliger (höher) oder deterministischer (niedriger) macht.** Bei Temperatur 0.0 wählt das Modell immer das wahrscheinlichste nächste Wort – und erzeugt bei jedem Durchlauf identische Ausgaben. Bei Temperatur 1.0+ berücksichtigt das Modell riskantere Alternativen und erzeugt überraschende und vielfältige Texte.',
            '**Top-P (Nucleus Sampling) kontrolliert, wie viele wahrscheinliche Wortoptionen das Modell bei jedem Schritt berücksichtigt.** Statt „wie zufällig" denke „wie viele plausible Wahlen." Bei Top-P 0.1 berücksichtigt das Modell nur die Top-Optionen, bis sie 10% kumulative Wahrscheinlichkeit erreichen – eng und sicher. Bei Top-P 0.9 berücksichtigt es einen viel größeren Satz möglicher Wörter – lockerer und vielfältiger.',
            'Kurz gesagt: Temperatur kontrolliert „wie abenteuerlich", und Top-P kontrolliert „wie viele Optionen zu berücksichtigen sind". Beide beeinflussen die Ausgangsvielfalt, aber auf unterschiedliche Weise.',
          ],
        },
        tldr: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            '**Temperatur kontrolliert Zufälligkeit direkt:** 0.0–0.3 für deterministisch, 0.4–0.7 für ausgewogen, 0.8+ für kreativ.',
            '**Top-P kontrolliert die Reichweite der Wortoptionen:** niedriger begrenzt Wahlen, höher erweitert sie.',
            '**Die meisten Benutzer sollten eine Einstellung anpassen und die andere im Standard lassen.** Die Anpassung beider gleichzeitig macht es unmöglich zu wissen, welche Einstellung geholfen hat.',
            '**Prompt-Design ist immer noch wichtiger als Schieberegler-Einstellungen.** Behebe zuerst ungenaue Anweisungen, dann passe die Parameter an, falls nötig.',
            '**Unterschiedliche Anwendungsfälle benötigen unterschiedliche Einstellungen:** Code erfordert niedrige Temperatur, Ideenfindung belohnt höhere Werte.',
          ],
        },
        behavior: {
          title: 'Wie sie KI-Verhalten ändern',
          content: [
            '**Temperatureffekte:**',
          ],
        },
        tempTable: {
          columns: ['Temperaturbereich', 'Verhalten', 'Am besten für'],
          rows: [
            { 'Temperaturbereich': 'Niedrig (0.0–0.3)', 'Verhalten': 'Fokussiert, repetitiv, hochgradig stabil', 'Am besten für': 'Aufgaben, die jedes Mal die gleiche Antwort erfordern; Risiko von Schleifen' },
            { 'Temperaturbereich': 'Mittel (0.4–0.7)', 'Verhalten': 'Ausgewogene Stabilität und Variation', 'Am besten für': 'Die meisten allgemeinen Aufgaben; empfohlener Startpunkt' },
            { 'Temperaturbereich': 'Hoch (0.8–1.0+)', 'Verhalten': 'Kreativ, vielfältig, überraschend', 'Am besten für': 'Ideenfindung und Variationen; Risiko von Halluzinationen' },
          ],
        },
        toppBehavior: {
          content: '**Top-P-Effekte:** Niedrig (0.1–0.3) erzeugt sehr enge Optionsmengen und hochgradig konservative Ausgaben. Mittel (0.5–0.7) balanciert Vielfalt mit Stabilität. Hoch (0.8–1.0) erweitert die Optionsmenge und fördert Kreativität, ähnlich wie hohe Temperatur. **Wichtig:** Viele Anbieter verbinden oder begrenzen diese Einstellungen. OpenAI-Modelle ignorieren oft Top-P, wenn Temperatur explizit gesetzt ist. Claude lässt dich beide unabhängig kontrollieren. Überprüfe immer die Dokumentation deines Anbieters – die gleichen Zahlen bedeuten nicht das Gleiche bei allen Modellen.',
        },
        tradeoff: {
          title: 'Temperatur vs. Top-P: Brauchst du beide?',
          content: '**Beide Einstellungen kontrollieren Zufälligkeit, aber die meisten Benutzer sollten nur eine anpassen und die andere im Standard lassen.** Die gleichzeitige Änderung beider macht es unmöglich zu wissen, welche Einstellung den gewünschten Effekt erzeugt hat. Aus meiner Erfahrung nach der Abstimmung von Tausenden von Prompts: Halte Top-P beim Standard (z. B. 0.9–1.0) und passe nur die Temperatur an, es sei denn, ein bestimmtes Modell empfiehlt etwas anderes.',
        },
        strategyTable: {
          columns: ['Strategie', 'Temperatur', 'Top-P', 'Wann zu verwenden'],
          rows: [
            { 'Strategie': 'Deterministischer Modus', 'Temperatur': '0.0–0.2', 'Top-P': '1.0 (Standard)', 'Wann zu verwenden': 'Code, Datenextraktion, kritische Ausgaben' },
            { 'Strategie': 'Ausgewogenes Standard', 'Temperatur': '0.5–0.7', 'Top-P': '0.9–1.0', 'Wann zu verwenden': 'Die meisten allgemeinen Aufgaben, Zusammenfassungen, Erklärungen' },
            { 'Strategie': 'Kreativ/Ideenfindung', 'Temperatur': '0.8–1.0', 'Top-P': '0.9–1.0', 'Wann zu verwenden': 'Ideation, Marketing-Text, Variationen, Geschichtenerzählen' },
            { 'Strategie': 'Hochstabile Produktion', 'Temperatur': '0.0–0.3', 'Top-P': '0.95', 'Wann zu verwenden': 'Gesundheit, Finanzen, Recht, sicherheitskritisch' },
          ],
        },
        useCases: {
          title: 'Empfohlene Einstellungen nach Anwendungsfall',
          items: [
            '**Coding, Refactoring, Bugfixing:** Temperatur 0.1–0.3, Top-P 0.95. Syntax muss korrekt sein, Kreativität lenkt ab. Niedrigere Einstellungen verhindern halluzinierte Funktionsnamen oder Logikmängel.',
            '**Zusammenfassungen und Erklärungen:** Temperatur 0.4–0.6, Top-P 0.9. Du möchtest Klarheit und Konsistenz, aber etwas Variation in der Formulierung ist ok. Niedrige Temperatur kann Zusammenfassungen mechanisch wirken lassen.',
            '**Ideenfindung, Marketing-Text, kreative Variationen:** Temperatur 0.7–1.0, Top-P 1.0. Höhere Einstellungen fördern unerwartete Kombinationen und neuartige Formulierungen. Du musst mehr Ausgaben filtern, aber du bekommst wildere Ideen.',
            '**Datenextraktion und strukturierte Ausgabe:** Temperatur 0.0–0.2, Top-P 0.95. Das Format muss exakt sein. Höhere Zufälligkeit lädt zu Parsing-Fehlern und fehlenden Feldern ein.',
            '**Längerfristige Texterstellung (Essays, Blog-Posts):** Temperatur 0.6–0.8, Top-P 0.9–1.0. Beginne hier und passe basierend auf Feedback an. Wenn die Ausgabe generisch wirkt, erhöhe die Temperatur; wenn sie abweicht oder halluziniert, senke sie.',
            '**Faktenbasierte Fragen & Antworten (ohne Grounding):** Temperatur 0.3–0.5, Top-P 0.9. Moderate Einstellungen reduzieren Halluzinationen und halten Antworten natürlich.',
          ],
        },
        promptsAndParams: {
          title: 'Wie Prompts und Parameter zusammenarbeiten',
          content: [
            '**Prompt-Design ist immer noch wichtiger als Schieberegler-Einstellungen.** Eine ungenaue Anweisung bei Temperatur 0.2 erzeugt immer noch eine schlechte Antwort – nur eine konsistente schlechte Antwort. Ein klarer, gut strukturierter Prompt bei jeder Temperatur erzeugt bessere Ergebnisse als ein schlechter Prompt mit perfekten Einstellungen. Für grundlegende Prompt-Struktur siehe [Grundlagen: Was ist Prompt Engineering?].',
            'Der richtige Workflow ist: (1) Erstelle zuerst den Prompt mit klarer Aufgabe, Kontext, Einschränkungen, Ausgabeformat (siehe [Grundlagen: Die 5 Grundbausteine, die jeder Prompt braucht]). (2) Teste bei deiner Zieltemperatur/Top-P. (3) Passe die Regler nur an, wenn du nach einem soliden Prompt mehr oder weniger Variation brauchst.',
            'Der gleiche Prompt bei verschiedenen Temperaturen erzeugt sehr unterschiedliche Stile. Bei Temperatur 0.2 sind Ausgaben sicher und direkt. Bei Temperatur 0.8 sind Ausgaben kreativ und poetisch. Weder ist „besser" – es hängt von deiner Markenstimme und deinem Anwendungsfall ab. Für die meisten Aufgaben eliminiert das Beheben des Prompts zuerst die Notwendigkeit, an der Temperatur zu fummeln.',
          ],
        },
        example: {
          title: '[Beispiel Prompt]',
          blockquote: `Schreibe einen kurzen, prägnanten Produktslogan für eine Produktivitäts-App. Halte es unter 10 Worten.`,
        },
        lowTemp: {
          title: 'Bei Temperatur 0.2:',
          blockquote: `"Erledige mehr in weniger Zeit."`,
        },
        highTemp: {
          title: 'Bei Temperatur 0.8:',
          blockquote: `"Vom Chaos zur Klarheit: wo Momente sich in Momentum verwandeln."`,
        },
        risk: {
          title: 'Wenn höhere Kreativität riskant wird',
          content: [
            '**Höhere Temperatur und Top-P erhöhen Halluzinationen, Off-Topic-Tangenten und Stil-Drift – besonders bei faktischen Aufgaben.** Sei konservativ (Temp 0.0–0.5) für: Code, der in Produktion geht (halluzinierte APIs brechen Systeme), medizinische Ratschläge (falsche Informationen schaden), Finanzen und Recht (Genauigkeit ist obligatorisch), und sicherheitskritische Entscheidungen (Fehler haben Konsequenzen).',
            'Für faktisch begründete Aufgaben erwäge, niedrigere Temperatur mit [Techniken: RAG Explained: How to Ground AI Answers in Real Data] oder expliziten Quelleneinschränkungen zu kombinieren, um Fehler weiter zu reduzieren. Siehe auch [Grundlagen: AI-Halluzinationen: Warum KI Dinge erfindet] für tiefere Kontexte darüber, warum höhere Temperaturen Erfindungen verstärken.',
          ],
        },
        promptquorum: {
          title: 'Wie PromptQuorum dir hilft, Temperatur und Top-P abzustimmen',
          content: [
            'Normalerweise bedeutet das Testen von Temperatur und Top-P-Einstellungen, den gleichen Prompt viele Male über mehrere Modelle auszuführen, Ausgaben manuell zu protokollieren und zu vergleichen – zeitaufwendig und schwer zu verfolgen. PromptQuorum optimiert diesen Workflow.',
            '**Multi-Modell-Vergleiche:** Sende einen Prompt mit verschiedenen Temperatur-/Top-P-Einstellungen über 25+ Modelle (GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, Mistral, lokale Ollama-Modelle) in einem einzigen Versand. Sieh sofort, welches Modell bei höherer Temperatur stabil bleibt und welches die beste kreative Ausgabe bei deiner Zieleinstellung erzeugt.',
            '**Framework-basierte Struktur:** PromptQuorum-Frameworks stellen sicher, dass deine Anweisungen, Format und Einschränkungen gut strukturiert sind, bevor du einen Regler berührst. Dies isoliert die Wirkung von Temperatur/Top-P von anderen Variablen – du mischst keinen schlechten Prompt mit Parameter-Abstimmung.',
            '**Konsens und Scoring:** Zeige alle Ausgaben nebeneinander mit Quorum-Analyse an, die Halluzinationsrisiko, Stilkonsistenz und Relevanz bewertet. Wähle die Modell + Einstellungskombination, die den Kreativitäts-Zuverlässigkeits-Tradeoff deiner Aufgabe am besten passt.',
            '**Automatische Temperaturempfehlungen:** PromptQuorum analysiert deine Aufgabenbeschreibung und Prompt-Struktur und schlägt dann optimale Temperaturbereiche basierend auf deinem Anwendungsfall vor (Coding, Zusammenfassung, Ideenfindung, usw.). Verfügbar sowohl in der App als auch in der Chrome-Erweiterung, PromptQuorum schlägt Temperaturwerte über den Standarddefaults vor, die auf deine spezifische Aufgabe und die Modelle, die du verwendest, zugeschnitten sind. Statt zu raten „sollte ich 0.2 oder 0.7 verwenden?", empfiehlt das Tool konkrete Werte basierend auf Aufgabenanalyse – und hilft dir, manuelles Trial-and-Error zu überspringen.',
            '**Lokale LLM-Workflows:** Teste verschiedene Temperatur-/Top-P-Kombinationen auf Ollama oder LM Studio, ohne Skripte zu schreiben, und speichere dann die besten Presets für deinen Workflow.',
          ],
        },
        recipes: {
          title: 'Schnelleinstiegs-Rezepte',
          content: 'Verwende diese als Ausgangspunkte für deine Aufgabe:',
        },
        recipeSafe: {
          items: [
            '**Sicherer faktischer Modus:** Temperatur 0.2, Top-P 0.95 | Am besten für Q&A, Zusammenfassungen, Datenextraktion, faktenbasierte Aufgaben | Ausgabe: Zuverlässig, konsistent, minimale Halluzination',
            '**Standardmäßig ausgewogener Modus:** Temperatur 0.5, Top-P 0.9 | Am besten für die meisten allgemeinen Aufgaben, Erklärungen, allgemeine Texterstellung | Ausgabe: Natürlich, stabil, aber mit etwas Variation',
            '**Kreativer Ideenfindungsmodus:** Temperatur 0.8, Top-P 1.0 | Am besten für Ideation, Marketing-Text, Geschichtenerzählen, Variationen | Ausgabe: Vielfältig, überraschend, viele Optionen zum Filtern',
            '**Kurz-Antwort-Modus:** Temperatur 0.3, Top-P 0.95 (paart sich mit [Grundlagen: Schnellere KI-Antworten: Wie man für Geschwindigkeit promptet]) | Am besten für direkte Antworten, schnelle Entscheidungen, prägnante Ausgaben | Ausgabe: Schnell, direkt, minimale Ausarbeitung',
            '**Experimenteller Modus:** Temperatur 1.0, Top-P 1.0 | Am besten zum Erkunden von Modellverhalten, zum Verstehen von Grenzen, zur Forschung | Ausgabe: Unvorhersehbar, maximale Variation',
          ],
        },
        mistakes: {
          title: 'Häufige Fehler mit Temperatur und Top-P',
          items: [
            '**Beide auf Maximum drehen und Zuverlässigkeit erwarten.** Hohe Temperatur + hohes Top-P = maximale Zufälligkeit. Mache dies nur, wenn du Brainstorming oder Experimentieren betreibst.',
            '**Beide Regler gleichzeitig ändern.** Du wirst nicht wissen, welche Einstellung geholfen oder geschadet hat. Ändere eine, beobachte, dann ändere die andere, falls nötig.',
            '**Versuchen, einen schlechten Prompt mit Schiebereglern zu beheben.** Eine ungenaue Anweisung bei jeder Temperatur erzeugt immer noch schlechte Ausgaben. Behebe zuerst den Prompt.',
            '**Vergessen, dass Modelle die gleichen Werte unterschiedlich interpretieren.** Temperatur 0.7 in Claude fühlt sich anders an als 0.7 in GPT-4o. Teste immer dein tatsächliches Modell.',
            '**Nicht genug Durchläufe testen.** Eine Ausgabe bei Temperatur 0.5 könnte ein Ausreißer sein. Führe mindestens 3–5 Mal aus, um das typische Verhalten zu sehen.',
            '**Temperatur auf 0 setzen und perfekte Richtigkeit erwarten.** Niedrige Temperatur reduziert Zufälligkeit, aber beseitigt Halluzinationen nicht. Halluzinationen stammen aus Trainingsdatenlücken, nicht aus zufälligem Sampling.',
            '**Vollständig ignorieren, dass dein Anbieter Top-P ignoriert.** Einige Modelle tun es; einige nicht. Überprüfe die Dokumentation, um zu vermeiden, dass Zeit mit der Anpassung eines deaktivierten Reglers verschwendet wird.',
          ],
        },
        faqs: {
          faqs: [
            { q: 'Sollte ich zuerst die Temperatur oder Top-P anpassen?', a: 'Temperatur. Sie hat einen offensicheren Effekt. Halte Top-P bei einem Standard (0.9–1.0), bis du ein Gefühl dafür hast, was Temperatur für deine Aufgabe tut, dann fine-tune Top-P nur bei Bedarf.' },
            { q: 'Warum ignoriert ein Modell meine Temperatureinstellung?', a: 'Einige Modelle begrenzen oder deaktivieren Temperatur und Top-P in bestimmten Konfigurationen (z. B. ignoriert OpenAI Top-P, wenn die Temperatur auf 0.0 gesetzt ist). Überprüfe die Dokumentation deines Anbieters. Mit PromptQuorum\'s Multi-Modell-Ansicht wirst du dies sofort bemerken.' },
            { q: 'Kann ich die Temperatur auf 0 setzen, um Korrektheit zu garantieren?', a: 'Nein. Temperatur 0.0 bedeutet „wähle immer das wahrscheinlichste Wort", was deterministisch ist, aber nicht immer korrekt. Halluzinationen handeln von Trainingsdatenlücken und Aufgabenklarheit, nicht von zufälligem Sampling. Kombiniere niedrige Temperatur mit klaren Prompts und Grounding für bessere Zuverlässigkeit.' },
            { q: 'Warum sehe ich bei niedriger Temperatur immer noch Halluzinationen?', a: 'Halluzinationen treten auf, wenn die Trainingsdaten des Modells Lücken haben oder die Aufgabe mehrdeutig ist – nicht nur wegen zufälligem Sampling. Eine niedrig-Temperatur-Einstellung wird über ihre Halluzinationen konsistent sein, aber sie werden sie nicht beseitigen. Verwende RAG oder explizite Quelleneinschränkungen, um sie zu reduzieren.' },
            { q: 'Unterscheiden sich die empfohlenen Einstellungen zwischen GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro?', a: 'Leicht. Alle drei verhalten sich angemessen bei Temperatur 0.5–0.7, aber ihre Toleranz für höhere Temperaturen variiert. GPT-4o kann höher gehen ohne unzusammenhängend zu werden; Claude 4.6 Sonnet ist sehr stabil; Gemini 1.5 Pro ist experimenteller. Teste dein tatsächliches Modell.' },
            { q: 'Wie viele Durchläufe brauche ich, um Einstellungen fair zu vergleichen?', a: 'Mindestens 3–5 pro Einstellung, um das typische Verhalten zu sehen. Mehr, wenn du mit höheren Temperaturen arbeitest, wo die Output-Varianz hoch ist. PromptQuorum\'s Multi-Run-Feature handhabt dies automatisch über alle Modelle.' },
          ],
        },
        relatedReading: {
          content: [
            '[Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) – warum Prompt-Struktur wichtiger ist als Parameter',
            '[Die 5 Grundbausteine, die jeder Prompt braucht](/prompt-engineering/5-building-blocks-every-prompt-needs) – wie man Prompts strukturiert, bevor man Parameter abstimmt',
            '[AI-Halluzinationen: Warum KI Dinge erfindet](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) – warum niedrigere Temperatur Halluzinationen nicht beseitigt',
          ],
        },
        sources: {
          content: [
            '[OpenAI, 2024. \"API reference: Temperature and top_p parameters\"](https://platform.openai.com/docs/api-reference/chat/create) – offizielle Dokumentation zu Parameterbereichen und Effekten',
            '[Holtzman et al., 2020. \"The Curious Case of Neural Text Degeneration\"](https://arxiv.org/abs/1904.09751) – Forschung über Nucleus Sampling (Top-P) und deren Auswirkungen auf Textqualität',
            '[Anthropic, 2024. \"Claude: How to Work with Prompts\"](https://docs.anthropic.com/) – Claude-spezifische Anleitung zu Temperatur und Parameter-Abstimmung',
          ],
        },
      },
    },

    fr: {
      theme: 'Fondamentaux',
      title: 'Température et Top-P : Contrôle la créativité de l\'IA',
      seoTitle: 'Température et Top-P: Contrôler la créativité IA 2026',
      intro: 'La température et le top-p contrôlent comment une IA fait des choix de mots aventureux ou conservateurs. En réglant ces paramètres, tu fais un compromis entre créativité et fiabilité — les valeurs élevées produisent des sorties surprenantes et variées ; les valeurs basses produisent des sorties sûres et prévisibles.',
      metaDescription: 'Maîtrisez la température et les paramètres top-p. Équilibrez créativité vs précision pour le codage, résumés, brainstorming. Avec ChatGPT, Claude, Gemini.',
      publishDate: '2026-03-22',
      readTime: '10 min de lecture',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Température et Top-P : Contrôle la créativité de l\'IA',
        description: 'Découvrez comment la température et top-p contrôlent le caractère aléatoire de l\'IA. Paramètres pratiques pour le codage, les résumés, le brainstorming et l\'équilibre entre créativité et fiabilité.',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        url: 'https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=fr',
        inLanguage: 'fr',
        keywords: ['température', 'top-p', 'nucleus sampling', 'aléatoire IA', 'paramètres LLM', 'créativité', 'GPT-4o', 'Claude', 'Gemini', 'ajustement prompt'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'Le diaporama ci-dessous couvre : comment la température contrôle l\'échantillonnage probabiliste (plage 0,0–2,0), comment l\'échantillonnage de noyau top-p limite la sélection de jetons, des paramètres spécifiques pour 6 cas d\'usage (code, créatif, factuel, chat), et un tableau de référence rapide. Télécharger le PDF comme carte de référence des paramètres de température et top-p.',
      sections: {
        definition: {
          title: 'Qu\'est-ce que la température et le Top-P ?',
          content: [
            '**La température est un curseur qui rend la sortie du modèle plus aléatoire (supérieure) ou plus déterministe (inférieure).** À une température de 0.0, le modèle choisit toujours le mot suivant le plus probable — produisant une sortie identique à chaque exécution. À une température de 1.0+, le modèle envisage des alternatives plus risquées, produisant du texte surprenant et varié.',
            '**Top-P (l\'échantillonnage nucléaire) contrôle combien d\'options de mots probables le modèle envisage à chaque étape.** Au lieu de « comment aléatoire », pense à « combien de choix plausibles ». À top-p 0.1, le modèle ne considère que les meilleures options jusqu\'à ce qu\'elles atteigne 10% de probabilité cumulative — étroit et sûr. À top-p 0.9, il envisage un ensemble beaucoup plus large de mots possibles — plus lâche et varié.',
            'En termes simples : la température contrôle « comment aventureux », et top-p contrôle « combien d\'options à considérer ». Tous deux affectent la variété des résultats, mais de façons différentes.',
          ],
        },
        tldr: {
          title: 'Points clés à retenir',
          isTldr: true,
          items: [
            '**La température contrôle directement l\'aléatoire :** 0.0–0.3 pour déterministe, 0.4–0.7 pour équilibré, 0.8+ pour créatif.',
            '**Top-P contrôle l\'étendue des options de mots :** bas rétrécit les choix, haut les élargit.',
            '**La plupart des utilisateurs doivent régler l\'un et garder l\'autre par défaut.** Ajuster les deux à la fois rend impossible de savoir quel paramètre a aidé.',
            '**La conception de prompt importe toujours plus que les paramètres.** Corrige d\'abord les instructions vagues, puis ajuste les paramètres si nécessaire.',
            '**Différents cas d\'usage nécessitent différents paramètres :** le code demande une température basse, le brainstorming récompense les valeurs supérieures.',
          ],
        },
        behavior: {
          title: 'Comment ils changent le comportement de l\'IA',
          content: [
            '**Effets de température :**',
          ],
        },
        tempTable: {
          columns: ['Plage de température', 'Comportement', 'Meilleur pour'],
          rows: [
            { 'Plage de température': 'Bas (0.0–0.3)', 'Comportement': 'Focalisé, répétitif, très stable', 'Meilleur pour': 'Les tâches nécessitant la même réponse à chaque fois ; risque de boucles' },
            { 'Plage de température': 'Moyen (0.4–0.7)', 'Comportement': 'Équilibre de stabilité et de variation', 'Meilleur pour': 'La plupart des tâches générales ; point de départ recommandé' },
            { 'Plage de température': 'Haut (0.8–1.0+)', 'Comportement': 'Créatif, divers, surprenant', 'Meilleur pour': 'Brainstorming et variations ; risque d\'hallucinations' },
          ],
        },
        toppBehavior: {
          content: '**Effets Top-P :** Bas (0.1–0.3) crée des ensembles d\'options très étroits et une sortie très conservatrice. Moyen (0.5–0.7) équilibre la diversité et la stabilité. Haut (0.8–1.0) élargit l\'ensemble d\'options et encourage la créativité, similaire à une température élevée. **Important :** De nombreux fournisseurs lient ou limitent ces paramètres. Les modèles GPT d\'OpenAI ignorent souvent top-p si la température est définie explicitement. Claude te laisse contrôler les deux indépendamment. Vérifie toujours la documentation de ton fournisseur — les mêmes chiffres ne signifient pas la même chose sur tous les modèles.',
        },
        tradeoff: {
          title: 'Température vs Top-P : As-tu besoin des deux ?',
          content: '**Les deux paramètres contrôlent l\'aléatoire, mais la plupart des utilisateurs devraient en régler un seul et garder l\'autre par défaut sensible.** Changer les deux à la fois rend impossible de savoir quel paramètre a produit l\'effet que tu veux. De mon expérience après l\'ajustement de milliers de prompts : garde top-p par défaut (par ex. 0.9–1.0) et ajuste uniquement la température, sauf si un modèle spécifique recommande autrement.',
        },
        strategyTable: {
          columns: ['Stratégie', 'Température', 'Top-P', 'Quand utiliser'],
          rows: [
            { 'Stratégie': 'Mode déterministe', 'Température': '0.0–0.2', 'Top-P': '1.0 (par défaut)', 'Quand utiliser': 'Code, extraction de données, sortie critique' },
            { 'Stratégie': 'Défaut équilibré', 'Température': '0.5–0.7', 'Top-P': '0.9–1.0', 'Quand utiliser': 'La plupart des tâches générales, résumés, explications' },
            { 'Stratégie': 'Créatif/Brainstorming', 'Température': '0.8–1.0', 'Top-P': '0.9–1.0', 'Quand utiliser': 'Idéation, texte marketing, variations, narration' },
            { 'Stratégie': 'Production haute stabilité', 'Température': '0.0–0.3', 'Top-P': '0.95', 'Quand utiliser': 'Santé, finance, droit, critique de sécurité' },
          ],
        },
        useCases: {
          title: 'Paramètres recommandés par cas d\'utilisation',
          items: [
            '**Codage, refactorisation, débogage :** Température 0.1–0.3, top-p 0.95. La syntaxe doit être correcte, la créativité interfère. Les paramètres bas préviennent les noms de fonctions hallucinations ou les erreurs de logique.',
            '**Résumés et explications :** Température 0.4–0.6, top-p 0.9. Tu veux de la clarté et de la cohérence, mais une variation de formulation est ok. Une température basse peut rendre les résumés mécaniques.',
            '**Brainstorming d\'idées, texte marketing, variations créatives :** Température 0.7–1.0, top-p 1.0. Les paramètres supérieurs encouragent des combinaisons inattendues et des formulations nouvelles. Tu devras filtrer davantage de sorties, mais tu obtiendras des idées plus sauvages.',
            '**Extraction de données et sortie structurée :** Température 0.0–0.2, top-p 0.95. Le format doit être exact. L\'aléatoire supérieure invite les erreurs d\'analyse et les champs manquants.',
            '**Rédaction longue (essais, billets de blog) :** Température 0.6–0.8, top-p 0.9–1.0. Commence ici et ajuste en fonction des commentaires. Si la sortie semble générique, augmente la température ; si elle dévie ou hallucine, baisse-la.',
            '**Q&A basée sur les faits (sans fondation) :** Température 0.3–0.5, top-p 0.9. Les paramètres modérés réduisent les hallucinations tout en gardant les réponses naturelles.',
          ],
        },
        promptsAndParams: {
          title: 'Comment les prompts et les paramètres fonctionnent ensemble',
          content: [
            '**La conception de prompt importe toujours plus que les paramètres des curseurs.** Une instruction vague à température 0.2 fera quand même une mauvaise réponse — juste une mauvaise réponse cohérente. Un prompt clair et bien structuré à n\'importe quelle température produit de meilleurs résultats qu\'un prompt médiocre avec des paramètres parfaits. Pour les principes fondamentaux de structure de prompt, voir [Fondamentaux : Qu\'est-ce que l\'ingénierie des prompts ?].',
            'Le bon workflow est : (1) Conçois d\'abord le prompt avec une tâche claire, le contexte, les contraintes, le format de sortie (voir [Fondamentaux : Les 5 éléments de base que chaque prompt a besoin]). (2) Teste à ta température/top-p cible. (3) Ajuste uniquement les curseurs si tu as besoin de plus ou moins de variation après que le prompt soit solide.',
            'Le même prompt à différentes températures produit des styles très différents. À température 0.2, les sorties sont sûres et directes. À température 0.8, les sorties sont créatives et poétiques. Aucune n\'est « meilleure » — cela dépend de ta voix de marque et de ton cas d\'utilisation. Pour la plupart des tâches, corriger le prompt d\'abord élimine le besoin de modifier la température du tout.',
          ],
        },
        example: {
          title: '[Exemple de prompt]',
          blockquote: `Écris un slogan de produit court et percutant pour une application de productivité. Garde-le sous 10 mots.`,
        },
        lowTemp: {
          title: 'À la température 0.2 :',
          blockquote: `"Fais plus en moins de temps."`,
        },
        highTemp: {
          title: 'À la température 0.8 :',
          blockquote: `"Du chaos à la clarté : où les moments se transforment en momentum."`,
        },
        risk: {
          title: 'Quand la créativité supérieure devient risquée',
          content: [
            '**La température et top-p supérieures augmentent les hallucinations, les tangentes hors sujet et la dérive de style — en particulier pour les tâches factuelles.** Sois conservateur (temp 0.0–0.5) pour : le code qui va en production (les APIs hallucinations cassent les systèmes), les conseils de santé et médicaux (les mauvaises informations causent du tort), la finance et le droit (la précision est obligatoire), et les décisions critiques de sécurité (les erreurs ont des conséquences).',
            'Pour les tâches fondées sur les faits, envisage d\'associer une température inférieure avec [Techniques : RAG Explained: How to Ground AI Answers in Real Data] ou des contraintes de source explicites pour réduire davantage les erreurs. Voir aussi [Fondamentaux : Hallucinations IA : Pourquoi l\'IA invente des choses] pour un contexte plus profond sur pourquoi les températures supérieures amplifient la fabrication.',
          ],
        },
        promptquorum: {
          title: 'Comment PromptQuorum t\'aide à ajuster la température et le Top-P',
          content: [
            'Normalement, tester les paramètres de température et top-p signifie exécuter le même prompt plusieurs fois sur plusieurs modèles, enregistrer manuellement les sorties et comparer — fastidieux et difficile à suivre. PromptQuorum rationalise ce workflow.',
            '**Comparaisons multi-modèles :** Envoie un prompt à différents paramètres de température/top-p sur 25+ modèles (GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, Mistral, modèles locaux Ollama) en une seule expédition. Vois instantanément quel modèle reste stable à une température plus élevée et quel modèle offre le meilleur résultat créatif à ton paramètre cible.',
            '**Structure basée sur un framework :** Les frameworks de PromptQuorum s\'assurent que tes instructions, format et contraintes sont bien structurés avant de toucher des curseurs. Cela isole l\'effet de la température/top-p d\'autres variables — tu ne mélanges pas un mauvais prompt avec l\'ajustement des paramètres.',
            '**Consensus et notation :** Affiche tous les résultats côte à côte avec une analyse Quorum qui note le risque d\'hallucination, la cohérence de style et la pertinence. Choisis la combinaison modèle + paramètres qui correspond le mieux au compromis créativité-fiabilité de ta tâche.',
            '**Recommandations de température automatiques :** PromptQuorum analyse ta description de tâche et ta structure de prompt, puis suggère des plages de température optimales basées sur ton cas d\'utilisation (codage, résumé, brainstorming, etc.). Disponible à la fois dans l\'application et l\'extension Chrome, PromptQuorum propose des valeurs de température au-delà des défauts standards, adaptées à ta tâche spécifique et aux modèles que tu utilises. Au lieu de deviner « devrais-je utiliser 0.2 ou 0.7 ? », l\'outil recommande des valeurs concrètes basées sur l\'analyse des tâches — t\'aidant à ignorer essai-erreur manuel.',
            '**Workflows LLM locaux :** Teste différentes combinaisons de température/top-p sur Ollama ou LM Studio sans écrire de scripts, puis enregistre les meilleurs présets pour ton workflow.',
          ],
        },
        recipes: {
          title: 'Recettes de démarrage rapide',
          content: 'Utilise-les comme points de départ pour ta tâche :',
        },
        recipeSafe: {
          items: [
            '**Mode factuel sûr :** Température 0.2, top-p 0.95 | Meilleur pour Q&A, résumés, extraction de données, tâches factuelles | Sortie : Fiable, cohérente, hallucination minimale',
            '**Mode équilibré par défaut :** Température 0.5, top-p 0.9 | Meilleur pour la plupart des tâches générales, explications, rédaction générale | Sortie : Naturel, stable, mais avec une variation',
            '**Mode brainstorming créatif :** Température 0.8, top-p 1.0 | Meilleur pour l\'idéation, le texte marketing, la narration, les variations | Sortie : Divers, surprenant, beaucoup d\'options à filtrer',
            '**Mode réponse courte :** Température 0.3, top-p 0.95 (s\'apparie avec [Fondamentaux : Réponses IA plus rapides : Comment faire des prompts pour la vitesse]) | Meilleur pour les réponses directes, les décisions rapides, les sorties concises | Sortie : Rapide, direct, élaboration minimale',
            '**Mode expérimental :** Température 1.0, top-p 1.0 | Meilleur pour explorer le comportement du modèle, comprendre les limites, la recherche | Sortie : Imprévisible, variation maximale',
          ],
        },
        mistakes: {
          title: 'Erreurs communes avec la température et le Top-P',
          items: [
            '**Augmenter les deux au maximum et s\'attendre à la fiabilité.** Température haute + top-p élevé = aléatoire maximum. Ne fais ceci que si tu fais du brainstorming ou de l\'expérimentation.',
            '**Changer les deux curseurs à la fois.** Tu ne saura pas quel paramètre a aidé ou nui. Change un, observe, puis change l\'autre si nécessaire.',
            '**Essayer de corriger un mauvais prompt avec des curseurs.** Une instruction vague à n\'importe quelle température produit quand même une mauvaise sortie. Corrige d\'abord le prompt.',
            '**Oublier que les modèles interprètent les mêmes valeurs différemment.** La température 0.7 sur Claude se sent différente de 0.7 sur GPT-4o. Teste toujours ton modèle réel.',
            '**Ne pas tester assez de courses.** Une sortie à température 0.5 pourrait être une valeur aberrante. Exécute au moins 3–5 fois pour voir le comportement typique.',
            '**Définir la température à 0 et s\'attendre à une correction parfaite.** La température basse réduit l\'aléatoire mais ne supprime pas les hallucinations. Les hallucinations proviennent de lacunes dans les données d\'entraînement, pas d\'échantillonnage aléatoire.',
            '**Ignorer complètement parce que ton fournisseur l\'ignore.** Certains modèles le font ; d\'autres non. Vérifie la documentation pour éviter de gaspiller du temps à ajuster un curseur désactivé.',
          ],
        },
        faqs: {
          faqs: [
            { q: 'Dois-je d\'abord ajuster la température ou le top-p ?', a: 'La température. Il a un effet plus évident. Garde top-p par défaut (0.9–1.0) jusqu\'à ce que tu aies une idée de ce que la température fait pour ta tâche, puis affine uniquement le top-p si nécessaire.' },
            { q: 'Pourquoi un modèle ignore-t-il mon paramètre de température ?', a: 'Certains modèles limitent ou désactivent la température et le top-p dans certaines configurations (par ex. OpenAI ignore top-p si la température est définie à 0.0). Vérifie la documentation de ton fournisseur. Avec la vue multi-modèle de PromptQuorum, tu verras ceci immédiatement.' },
            { q: 'Puis-je définir la température à 0 pour une correction garantie ?', a: 'Non. Température 0.0 signifie « choisissez toujours le mot le plus probable », qui est déterministe mais pas toujours correct. Les hallucinations concernent les lacunes des données d\'entraînement et l\'ambiguïté des tâches, pas l\'échantillonnage aléatoire. Combine une température basse avec des prompts clairs et un grounding pour une meilleure fiabilité.' },
            { q: 'Pourquoi je vois toujours les hallucinations à basse température ?', a: 'Les hallucinations se produisent quand les données d\'entraînement du modèle ont des lacunes ou quand la tâche est ambiguë — pas seulement à cause de l\'échantillonnage aléatoire. Un paramètre de basse température sera cohérent à propos de ses hallucinations, mais ne les éliminera pas. Utilise RAG ou des contraintes de source explicites pour les réduire.' },
            { q: 'Les paramètres recommandés diffèrent-ils entre GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro ?', a: 'Légèrement. Tous les trois se comportent raisonnablement à température 0.5–0.7, mais leur tolérance aux températures plus élevées varie. GPT-4o peut aller plus haut sans devenir incohérent ; Claude 4.6 Sonnet est très stable ; Gemini 1.5 Pro est plus expérimental. Teste ton modèle réel.' },
            { q: 'Combien de courses ai-je besoin pour comparer les paramètres équitablement ?', a: 'Au moins 3–5 par paramètre pour voir le comportement typique. Plus si tu travailles avec des températures plus élevées où la variance de sortie est élevée. La fonction multi-run de PromptQuorum gère ceci automatiquement sur tous les modèles.' },
          ],
        },
        relatedReading: {
          content: [
            '[Qu\'est-ce que l\'ingénierie des prompts ?](/prompt-engineering/what-is-prompt-engineering) – pourquoi la structure de prompt importe plus que les paramètres',
            '[Les 5 éléments de base que chaque prompt a besoin](/prompt-engineering/5-building-blocks-every-prompt-needs) – comment structurer les prompts avant d\'ajuster les paramètres',
            '[Hallucinations IA : Pourquoi l\'IA invente des choses](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) – pourquoi la température basse n\'élimine pas les hallucinations',
          ],
        },
        sources: {
          content: [
            '[OpenAI, 2024. "API reference: Temperature and top_p parameters"](https://platform.openai.com/docs/api-reference/chat/create) – documentation officielle sur les plages de paramètres et les effets',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) – recherche sur l\'échantillonnage nucléaire (top-p) et ses effets sur la qualité du texte',
            '[Anthropic, 2024. "Claude: How to Work with Prompts"](https://docs.anthropic.com/) – conseils spécifiques à Claude sur l\'ajustement de la température et des paramètres',
          ],
        },
      },
    },

    ja: {
      theme: '基礎',
      title: '温度とTop-P：AI創造性を制御する',
      seoTitle: '温度とTop-P 2026：GPT-4oとClaudeでAI創造性と精度を制御するパラメータ完全解説',
      intro: '温度とTop-Pは、AIモデルがどの程度冒険的または保守的な単語選択をするかを制御します。これらの設定を調整することで、創造性と信頼性のバランスを取ることができます。高い値は驚くべき多様な出力を生成し、低い値は安全で予測可能な出力を生成します。',
      metaDescription: '温度は0.0〜2.0でAI出力のランダム性を制御し、Top-Pは0.1〜1.0で語彙選択の幅を調整します。コードには低温度（0.1〜0.3）、ブレーンストーミングには高温度（0.8以上）を推奨します。GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proで確認済みの設定値を提供します。',
      publishDate: '2026-03-22',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '温度とTop-P：AI創造性を制御する',
        description: '温度とTop-Pがどのように人工知能のランダム性を制御するかを学びます。コード、要約、ブレーンストーミング、創造性と信頼性のバランスのための実践的な設定。',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        url: 'https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=ja',
        inLanguage: 'ja',
        keywords: ['温度', 'Top-P', 'ニュークレウスサンプリング', 'AI乱数', 'LLM設定', '創造性', 'GPT-4o', 'Claude', 'Gemini', 'プロンプト調整'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: '以下のスライドデッキは次をカバーします：温度が確率サンプリングをどのように制御するか（範囲0.0～2.0）、Top-pニュークレアスサンプリングがトークン選択をどのように制限するか、6つのユースケースの具体的な設定（コード、クリエイティブ、事実、チャット）、クイックリファレンステーブル。PDFを温度およびTop-pパラメータリファレンスカードとしてダウンロードしてください。',
      sections: {
        definition: {
          title: '温度とTop-Pとは何か？',
          content: [
            '**温度はモデルの出力をより無作為（高い）またはより決定的（低い）にするノブです。** 温度0.0では、モデルは常に最も可能性の高い次の単語を選び、実行するたびに同じ出力を生成します。温度1.0以上では、モデルはより危険な選択肢を考慮し、驚くべき多様なテキストを生成します。',
            '**Top-P（核サンプリング）は、各ステップでモデルが考慮する可能性のある単語オプションの数を制御します。** 「どの程度無作為か」ではなく、「どの程度の妥当な選択肢があるか」と考えてください。Top-P 0.1では、モデルはわずかな累積確率10%に達するまで最もよい選択肢だけを考慮します。Top-P 0.9では、はるかに広い範囲の可能な単語を考慮します。',
            '簡潔に言えば：温度は「どの程度冒険的か」を制御し、Top-Pは「どの程度の選択肢を考慮するか」を制御します。どちらも出力の多様性に影響しますが、異なる方法で機能します。',
          ],
        },
        tldr: {
          title: '重要なポイント',
          isTldr: true,
          items: [
            '**温度は無作為性を直接制御します：** 0.0–0.3は決定的、0.4–0.7はバランス、0.8+は創造的。',
            '**Top-Pは単語オプションの範囲を制御します：** 低いと選択肢を狭め、高いと広げます。',
            '**ほとんどのユーザーは1つを調整し、もう1つをデフォルトのままにすべきです。** 両方同時に調整するとどちらが効果を生み出したか知ることができません。',
            '**プロンプト設計はスライダー設定よりも常に重要です。** まず曖昧な指示を修正し、必要に応じてパラメータを調整してください。',
            '**異なるユースケースは異なる設定が必要です：** コードは低い温度を必要とし、ブレーンストーミングはより高い値から利益を得ます。',
          ],
        },
        behavior: {
          title: 'AIの動作をどのように変えるか',
          content: [
            '**温度の効果：**',
          ],
        },
        tempTable: {
          columns: ['温度範囲', 'ビヘイビア', '最適な用途'],
          rows: [
            { '温度範囲': '低い（0.0–0.3）', 'ビヘイビア': 'フォーカスされた、反復的で、非常に安定', '最適な用途': '毎回同じ答えが必要なタスク; ループのリスク' },
            { '温度範囲': '中程度（0.4–0.7）', 'ビヘイビア': 'バランスの取れた安定性と多様性', '最適な用途': 'ほとんどの一般的なタスク; 推奨される開始点' },
            { '温度範囲': '高い（0.8–1.0+）', 'ビヘイビア': '創造的、多様、驚くべき', '最適な用途': 'ブレーンストーミングと変動; 幻覚のリスク' },
          ],
        },
        toppBehavior: {
          content: '**Top-Pの効果：** 低い（0.1–0.3）は非常に狭いオプションセットと非常に保守的な出力を作成します。中程度（0.5–0.7）は多様性と安定性のバランスを取ります。高い（0.8–1.0）はオプションセットを広げ、高温度に似た創造性を促進します。**重要：** 多くのプロバイダーはこれらの設定をリンクまたは制限しています。OpenAIのGPTモデルは、温度が明示的に設定されている場合、しばしばTop-Pを無視します。Claudeはあなたが両方を独立して制御することを許可します。常にあなたのプロバイダーのドキュメンテーションをチェックしてください—同じ数字はすべてのモデル間で同じ意味ではありません。',
        },
        tradeoff: {
          title: '温度対Top-P：両方が必要ですか？',
          content: '**両方の設定は無作為性を制御しますが、ほとんどのユーザーは1つだけを調整し、もう1つを妥当なデフォルトのままにするべきです。** 両方同時に変更すると、どちらが望みの効果を生み出したか知ることができません。数千のプロンプト調整の経験から：Top-Pをデフォルト（例：0.9–1.0）に保ち、温度だけを調整してください。特定のモデルが別の方法を推奨していない限り。',
        },
        strategyTable: {
          columns: ['戦略', '温度', 'Top-P', 'いつ使用するか'],
          rows: [
            { '戦略': '決定的モード', '温度': '0.0–0.2', 'Top-P': '1.0（デフォルト）', 'いつ使用するか': 'コード、データ抽出、ミッションクリティカルな出力' },
            { '戦略': 'バランスの取れたデフォルト', '温度': '0.5–0.7', 'Top-P': '0.9–1.0', 'いつ使用するか': 'ほとんどの一般的なタスク、要約、説明' },
            { '戦略': 'クリエイティブ/ブレーンストーミング', '温度': '0.8–1.0', 'Top-P': '0.9–1.0', 'いつ使用するか': 'アイデーション、マーケティングコピー、変動、ストーリーテリング' },
            { '戦略': '高安定性生産', '温度': '0.0–0.3', 'Top-P': '0.95', 'いつ使用するか': 'ヘルスケア、金融、法律、安全クリティカル' },
          ],
        },
        useCases: {
          title: 'ユースケース別の推奨設定',
          items: [
            '**コーディング、リファクタリング、バグ修正：** 温度0.1–0.3、Top-P 0.95。構文は正確でなければならず、創造性は邪魔です。低い設定は幻覚関数名やロジックエラーを防ぎます。',
            '**要約と説明：** 温度0.4–0.6、Top-P 0.9。明確さと一貫性が必要ですが、フレーズの変動は問題ありません。低い温度は要約を機械的に見せることができます。',
            '**アイデーのブレーンストーミング、マーケティングコピー、創造的なバリエーション：** 温度0.7–1.0、Top-P 1.0。高い設定は予期しない組み合わせと新しいフレーズングを促進します。より多くの出力をフィルタリングする必要がありますが、より野性的なアイデアが得られます。',
            '**データ抽出と構造化出力：** 温度0.0–0.2、Top-P 0.95。フォーマットは正確でなければなりません。高い無作為性はパース不可能やフィールド欠落を招きます。',
            '**長編成執筆（エッセイ、ブログ投稿）：** 温度0.6–0.8、Top-P 0.9–1.0。ここから始めて、フィードバックに基づいて調整します。出力が平凡に見える場合は温度を上げ、逸脱または幻覚が見える場合は下げます。',
            '**事実ベースのQ&A（基盤なし）：** 温度0.3–0.5、Top-P 0.9。中程度の設定は幻覚を減らしながら、反応を自然に保ちます。',
          ],
        },
        promptsAndParams: {
          title: 'プロンプトとパラメータがどのように一緒に機能するか',
          content: [
            '**プロンプト設計はスライダー設定よりも常に重要です。** 温度0.2での曖昧な指示は相変わらず悪い答えを生成します—ただ一貫した悪い答えです。明確でよく構成されたプロンプトは完璧な設定の悪いプロンプトよりも良い結果を生成します。プロンプト構造の基礎については、[基礎：プロンプトエンジニアリングとは何か？]を参照してください。',
            '正しいワークフローは次のとおりです：（1）まず明確なタスク、コンテキスト、制約、出力フォーマットでプロンプトを設計します（[基礎：すべてのプロンプトが必要とする5つの基本要素]を参照）。（2）ターゲット温度/Top-Pでテストします。（3）プロンプトが堅実になった後、より多くまたはより少ない変動が必要な場合のみスライダーを調整します。',
            '同じプロンプトが異なる温度では非常に異なるスタイルを生成します。温度0.2では、出力は安全で直接的です。温度0.8では、出力は創造的で詩的です。どちらが「良い」わけではありません—これはあなたのブランド声とユースケースに依存します。ほとんどのタスクでは、最初にプロンプトを修正することは、温度でまったく動く必要性を排除します。',
          ],
        },
        example: {
          title: '[プロンプトの例]',
          blockquote: `生産性向上アプリ用の短くてインパクトのあるプロダクトスローガンを書いてください。10語未満に保ってください。`,
        },
        lowTemp: {
          title: '温度0.2の場合：',
          blockquote: `"より短い時間でより多く実行してください。"`,
        },
        highTemp: {
          title: '温度0.8の場合：',
          blockquote: `"カオスから明確性へ：瞬間がモメンタムに変わるところ。"`,
        },
        risk: {
          title: 'より高い創造性がリスクになる場合',
          content: [
            '**より高い温度とTop-Pは幻覚、トピック外のタンジェント、スタイルドリフトを増加させます—特に事実的なタスクの場合。** 保守的に（温度0.0–0.5）：本番に行くコード（幻覚APIは システムを破壊）、健康と医学的アドバイス（誤った情報は害を及ぼす）、金融と法務（精度は必須）、および安全クリティカルな決定（エラーは結果をもたらす）。',
            '事実ベースのタスクでは、低い温度を[テクニック：RAG説明：実データでAI回答を根拠する]または明示的なソース制約と組み合わせることを検討してエラーをさらに減らします。また、[基礎：AI幻覚：なぜAIが物を発明するのか]を参照して、なぜ高い温度が矛盾を増幅するかについてのより深いコンテキスト。',
          ],
        },
        promptquorum: {
          title: 'PromptQuorumが温度とTop-Pの調整を支援する方法',
          content: [
            '通常、温度とTop-Pの設定をテストすることは、複数のモデル全体で同じプロンプトを何度も実行し、出力を手動で記録して比較することを意味します—時間がかかり、追跡が困難です。PromptQuorumはこのワークフローを効率化します。',
            '**マルチモデル比較：** 1つのプロンプトを異なる温度/Top-P設定で25以上のモデル（GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro、Mistral、ローカルOllamaモデル）に送信します。どのモデルが高温度でも安定しているか、ターゲット設定で最適な創造的出力を提供するかをすぐに確認できます。',
            '**フレームワークベースの構造：** PromptQuorumのフレームワークは、スライダーに触れる前に、指示、フォーマット、制約が適切に構成されていることを確認します。これにより、温度/Top-Pの効果が他の変数から分離されます。悪いプロンプトとパラメータ調整を混ぜていません。',
            '**コンセンサスと採点：** Quorum分析で幻覚リスク、スタイル一貫性、関連性をスコアリングしながら、すべての出力を並べて表示します。タスクの創造性と信頼性のトレードオフに最適なモデル+設定の組み合わせを選択します。',
            '**自動温度推奨：** PromptQuorumはタスク説明とプロンプト構造を分析し、ユースケース（コーディング、要約、ブレーンストーミング等）に基づいて最適な温度範囲を提案します。アプリとChromeエクステンションの両方で利用でき、PromptQuorumは標準デフォルトを超えた温度値を提案し、特定のタスクと使用しているモデルに合わせています。「0.2または0.7を使用すべきか？」と推測する代わりに、ツールはタスク分析に基づいて具体的な値を推奨します—手動のトライアルアンドエラーをスキップするのに役立ちます。',
            '**ローカルLLMワークフロー：** スクリプトを書かずにOllamaまたはLM Studioでさまざまな温度/Top-P組み合わせをテストして、ワークフローのベストプリセットを保存します。',
          ],
        },
        recipes: {
          title: 'クイックスタートレシピ',
          content: 'タスクの出発点として使用してください：',
        },
        recipeSafe: {
          items: [
            '**安全な事実モード：** 温度0.2、Top-P 0.95 | 最適な用途：Q&A、要約、データ抽出、事実ベースのタスク | 出力：信頼できる、一貫性のある、最小限の幻覚',
            '**デフォルトバランスモード：** 温度0.5、Top-P 0.9 | 最適な用途：ほとんどの一般的なタスク、説明、一般的な執筆 | 出力：自然、安定、しかし変動あり',
            '**創造的ブレーンストーミングモード：** 温度0.8、Top-P 1.0 | 最適な用途：アイデーション、マーケティングコピー、ストーリーテリング、バリエーション | 出力：多様、驚くべき、フィルタリング対象のオプションが多くあります',
            '**短答モード：** 温度0.3、Top-P 0.95（[基礎：より速いAI回答：速度のためにプロンプトする方法]とペアリング）| 最適な用途：直接的な回答、迅速な決定、簡潔な出力 | 出力：速い、直接的、最小限の詳細',
            '**実験モード：** 温度1.0、Top-P 1.0 | 最適な用途：モデルの動作を探索、制限を理解、研究 | 出力：予測不可能、最大限の変動',
          ],
        },
        mistakes: {
          title: '温度とTop-Pでの一般的なミステイク',
          items: [
            '**両方を最大に上げて信頼性を期待します。** 高い温度+高いTop-P=最大無作為性。ブレーンストーミングまたは実験をしているときだけこれをしてください。',
            '**同時に両方のノブを変更します。** どちらの設定が役立つまたは傷つけたかはわかりません。1つを変更し、観察し、必要に応じてもう1つを変更します。',
            '**スライダーで悪いプロンプトを修正しようとしてください。** 曖昧な指示はあらゆる温度で依然として悪い出力を生成します。最初にプロンプトを修正してください。',
            '**モデルが同じ値を異なる方法で解釈することを忘れます。** Claudeの温度0.7はGPT-4oの0.7とは異なります。常に実際のモデルをテストしてください。',
            '**十分な実行をテストしません。** 温度0.5での1つの出力は外れ値かもしれません。典型的な動作を見るために少なくとも3～5回実行してください。',
            '**温度を0に設定し、完璧な正確性を期待します。** 低い温度は無作為性を減らしますが、幻覚を排除しません。幻覚は無作為なサンプリングからではなく、トレーニングデータギャップから来ます。',
            '**プロバイダーが無視するため完全に無視します。** 一部のモデルはそうしますが、そうではないものもあります。ドキュメントをチェックして、無効になっているノブを調整するための時間を無駄にしないでください。',
          ],
        },
        faqs: {
          faqs: [
            { q: 'まず温度またはTop-Pを調整すべきですか？', a: '温度。より明らかな効果があります。タスクが温度を実行するかについて感覚を得るまでTop-Pをデフォルト（0.9–1.0）に保ち、必要に応じてのみTop-Pを微調整します。' },
            { q: '1つのモデルがなぜ温度設定を無視しますか？', a: '一部のモデルは特定の構成で温度とTop-Pを制限または無効にします（例えばOpenAIは温度が0.0に設定されている場合Top-Pを無視します）。プロバイダーのドキュメンテーションをチェックしてください。PromptQuorumのマルチモデルビューを使用すれば、これはすぐに見えます。' },
            { q: '保証された正確性のために温度を0に設定できますか？', a: 'いいえ。温度0.0は「常に最も可能性の高い単語を選ぶ」を意味し、これは決定的ですが常に正確ではありません。幻覚は無作為なサンプリングではなく、トレーニングデータギャップとタスク曖昧性についてです。より良い信頼性のために低い温度を明確なプロンプトとグラウンドと組み合わせます。' },
            { q: 'なぜ低い温度でまだ幻覚が見られますか？', a: 'モデルのトレーニングデータにギャップがあるか、タスクが曖昧な場合、幻覚は発生します—無作為サンプリングだけではなく。低温設定は幻覚に関して一貫性がありますが、それらを排除しません。RAGまたは明示的なソース制約を使用してそれらを減らします。' },
            { q: 'GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proで推奨設定が異なりますか？', a: 'わずかに。すべて3つは温度0.5–0.7で妥当に振舞いますが、高い温度の公差は異なります。GPT-4oはより高くなっても無意味にならずに行くことができます；Claude 4.6 Sonnetは非常に安定しています；Gemini 1.5 Proはより実験的です。実際のモデルをテストしてください。' },
            { q: '設定を公平に比較するのに何回実行が必要ですか？', a: '典型的な動作を見るために、設定あたり少なくとも3～5。出力分散が高い高い温度で作業する場合はさらに多く。PromptQuorumのマルチラン機能はこれをすべてのモデルで自動的に処理します。' },
          ],
        },
        relatedReading: {
          content: [
            '[プロンプトエンジニアリングとは何か？](/prompt-engineering/what-is-prompt-engineering) – プロンプト構造がパラメータよりも重要である理由',
            '[すべてのプロンプトが必要とする5つの基本要素](/prompt-engineering/5-building-blocks-every-prompt-needs) – パラメータを調整する前にプロンプトを構造化する方法',
            '[AI幻覚：なぜAIが物を発明するのか](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) – 低い温度が幻覚を排除しない理由',
          ],
        },
        sources: {
          content: [
            '[OpenAI、2024。「APIリファレンス：温度とTop_Pパラメータ」](https://platform.openai.com/docs/api-reference/chat/create) – パラメータ範囲と効果に関する公式ドキュメンテーション',
            '[Holtzman等、2020。「ニューラルテキスト縮退の好奇なケース」](https://arxiv.org/abs/1904.09751) – 核サンプリング（Top-P）とテキスト品質への影響に関する研究',
            '[Anthropic、2024。「Claude：プロンプトで作業する方法」](https://docs.anthropic.com/) – 温度とパラメータ調整に関するClaudeの専用ガイダンス',
          ],
        },
      },
    },

    zh: {
      theme: '基础知识',
      title: '温度和Top-P：控制AI创造力',
      seoTitle: '2026年温度与Top-P参数完整解析：如何设置AI创造力与精确度以提升GPT-4o和Claude输出质量',
      intro: '温度和Top-P控制AI模型在选择单词时的冒险程度或保守程度。通过调整这些设置，您可以在创造力和可靠性之间权衡——更高的值产生令人惊讶的多样化输出；较低的值产生安全的、可预测的输出。',
      metaDescription: '温度参数范围0至2控制AI输出的随机程度，Top-P参数范围0.1至1.0决定模型考虑的词汇选项范围。代码生成推荐低温度（0.1至0.3），头脑风暴推荐高温度（0.8以上）。GPT-4o、Claude 4.6 Sonnet和Gemini 1.5 Pro均已完整验证以上参数设置效果。',
      publishDate: '2026-03-22',
      readTime: '阅读约10分钟',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '温度和Top-P：控制AI创造力',
        description: '了解温度和Top-P如何控制AI的随机性。用于编码、摘要、头脑风暴的实用设置以及创造力和可靠性之间的平衡。',
        datePublished: '2026-03-22',
        dateModified: '2026-03-22',
        url: 'https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity?lang=zh',
        inLanguage: 'zh',
        keywords: ['温度', 'Top-P', '核心采样', 'AI随机性', 'LLM设置', '创造力', 'GPT-4o', 'Claude', 'Gemini', '提示调整'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: '以下幻灯片涵盖：温度如何控制概率抽样（范围0.0-2.0）、Top-p核采样如何限制标记选择、6个用例的具体设置（代码、创意、事实、聊天）和快速参考表。下载PDF作为温度和Top-p参数参考卡。',
      sections: {
        definition: {
          title: '什么是温度和Top-P？',
          content: [
            '**温度是一个旋钮，使模型的输出更加随机（更高）或更具确定性（更低）。** 在温度0.0下，模型总是选择最有可能的下一个单词——每次运行都会产生相同的输出。在温度1.0+时，模型会考虑更多风险较高的替代方案，产生令人惊讶和多样化的文本。',
            '**Top-P（核抽样）控制模型在每一步考虑多少个可能的单词选项。** 与其说"有多随机"，不如说"有多少合理的选择"。在Top-P 0.1时，模型仅考虑顶部选项直到达到10%的累积概率——狭隘且安全。在Top-P 0.9时，它考虑了更广泛的可能单词集——更宽松和多样化。',
            '简而言之：温度控制"有多冒险"，Top-P控制"要考虑多少选项"。两者都影响输出的多样性，但方式不同。',
          ],
        },
        tldr: {
          title: '关键要点',
          isTldr: true,
          items: [
            '**温度直接控制随机性：** 0.0–0.3用于确定性，0.4–0.7用于均衡，0.8+用于创意。',
            '**Top-P控制单词选项的范围：** 低会缩小选择，高会扩大选择。',
            '**大多数用户应该调整一个参数，保持另一个为默认值。** 同时调整两个会使不知道哪个设置有效。',
            '**提示设计总比滑块设置更重要。** 先修复模糊的说明，然后在必要时调整参数。',
            '**不同的用例需要不同的设置：** 代码需要低温度，头脑风暴从较高值中获益。',
          ],
        },
        behavior: {
          title: '它们如何改变AI行为',
          content: [
            '**温度效果：**',
          ],
        },
        tempTable: {
          columns: ['温度范围', '行为', '最适用于'],
          rows: [
            { '温度范围': '低（0.0–0.3）', '行为': '聚焦、重复、高度稳定', '最适用于': '每次需要完全相同答案的任务；循环风险' },
            { '温度范围': '中等（0.4–0.7）', '行为': '平衡的稳定性和多样化', '最适用于': '大多数常见任务；推荐起点' },
            { '温度范围': '高（0.8–1.0+）', '行为': '创意的、多样的、令人惊讶的', '最适用于': '头脑风暴和变体；幻觉风险' },
          ],
        },
        toppBehavior: {
          content: '**Top-P效果：** 低（0.1–0.3）创建非常狭隘的选项集和高度保守的输出。中等（0.5–0.7）平衡多样性和稳定性。高（0.8–1.0）扩展选项集并鼓励创意，类似于高温度。**重要：** 许多提供商链接或限制这些设置。OpenAI的GPT模型在明确设置温度时经常忽略Top-P。Claude允许您独立控制两者。始终检查您提供商的文档——相同的数字在所有模型中的含义不同。',
        },
        tradeoff: {
          title: '温度与Top-P：需要两者吗？',
          content: '**两种设置都控制随机性，但大多数用户应该仅调整一个并将另一个保持为合理的默认值。** 同时改变两者会使不知道哪个设置产生了您想要的效果。根据调整数千个提示的经验：保持Top-P为默认值（例如0.9–1.0）并仅调整温度，除非特定的模型建议否则。',
        },
        strategyTable: {
          columns: ['策略', '温度', 'Top-P', '何时使用'],
          rows: [
            { '策略': '确定性模式', '温度': '0.0–0.2', 'Top-P': '1.0（默认）', '何时使用': '代码、数据提取、任务关键输出' },
            { '策略': '平衡默认', '温度': '0.5–0.7', 'Top-P': '0.9–1.0', '何时使用': '大多数常见任务、摘要、解释' },
            { '策略': '创意/头脑风暴', '温度': '0.8–1.0', 'Top-P': '0.9–1.0', '何时使用': '想法生成、市场营销文案、变体、讲故事' },
            { '策略': '高稳定性生产', '温度': '0.0–0.3', 'Top-P': '0.95', '何时使用': '医疗保健、财务、法律、安全关键' },
          ],
        },
        useCases: {
          title: '按用例推荐的设置',
          items: [
            '**编码、重构、错误修复：** 温度0.1–0.3，Top-P 0.95。语法必须正确，创意会干扰。较低的设置可防止幻觉函数名称或逻辑错误。',
            '**摘要和解释：** 温度0.4–0.6，Top-P 0.9。您需要清晰度和一致性，但措辞的某些差异是可以的。低温度会使摘要显得机械化。',
            '**头脑风暴想法、市场营销文案、创意变体：** 温度0.7–1.0，Top-P 1.0。较高的设置鼓励出乎意料的组合和新的措辞。您需要过滤更多输出，但您会得到更野性的想法。',
            '**数据提取和结构化输出：** 温度0.0–0.2，Top-P 0.95。格式必须完全正确。更高的随机性会导致解析错误和缺失字段。',
            '**长篇写作（论文、博客文章）：** 温度0.6–0.8，Top-P 0.9–1.0。从这里开始并根据反馈调整。如果输出看起来通用，增加温度；如果偏离或幻觉，降低它。',
            '**基于事实的问答（无基础）：** 温度0.3–0.5，Top-P 0.9。适度的设置可以减少幻觉，同时保持回答自然。',
          ],
        },
        promptsAndParams: {
          title: '提示和参数如何协同工作',
          content: [
            '**提示设计总比滑块设置更重要。** 温度0.2的模糊指令仍会产生不良答案——只是一个一致的不良答案。具有完美设置的清晰、结构良好的提示会产生比设置更好的结果。有关提示结构的基础，请参阅[基础：什么是提示工程？]。',
            '正确的工作流是：（1）首先使用清晰的任务、上下文、约束和输出格式设计提示（参见[基础：每个提示需要的5个基本构件]）。（2）在您的目标温度/Top-P处测试。（3）仅在提示坚实后需要更多或更少变化时调整滑块。',
            '相同的提示在不同温度下会产生非常不同的风格。在温度0.2下，输出是安全且直接的。在温度0.8下，输出是创意且富有诗意的。两者都不是"更好的"——这取决于您的品牌声音和使用案例。对于大多数任务，首先修复提示会消除完全修改温度的需要。',
          ],
        },
        example: {
          title: '[示例提示]',
          blockquote: `为生产力应用编写简短的、有冲击力的产品标语。保持在10个单词以内。`,
        },
        lowTemp: {
          title: '在温度0.2：',
          blockquote: `"用更少的时间做更多的事。"`,
        },
        highTemp: {
          title: '在温度0.8：',
          blockquote: `"从混乱到清晰：时刻化为动力的地方。"`,
        },
        risk: {
          title: '更高的创造力何时变成风险',
          content: [
            '**更高的温度和Top-P会增加幻觉、离题和风格漂移——尤其是对于事实型任务。** 对于以下情况要保守（温度0.0–0.5）：进入生产的代码（幻觉API破坏系统）、健康和医疗建议（错误的信息造成伤害）、财务和法律（准确性是强制性的）和安全关键的决定（错误有后果）。',
            '对于基于事实的任务，考虑将较低的温度与[技术：RAG解释：如何用真实数据支撑AI答案]或显式源约束相结合，以进一步减少错误。另请参见[基础：AI幻觉：为什么AI会编造东西]，了解为什么更高的温度会放大虚构。',
          ],
        },
        promptquorum: {
          title: 'PromptQuorum如何帮助您调整温度和Top-P',
          content: [
            '通常，测试温度和Top-P设置意味着在多个模型上多次运行相同的提示，手动记录输出并比较——耗时且难以跟踪。PromptQuorum简化了此工作流。',
            '**多模型比较：** 在一次分发中跨25+个模型（GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro、Mistral、本地Ollama模型）发送一个不同温度/Top-P设置的提示。立即看到哪个模型在较高温度下保持稳定，哪个在您的目标设置下提供最佳创意输出。',
            '**基于框架的结构：** PromptQuorum的框架在您接触任何滑块之前，确保您的指令、格式和约束得到充分结构化。这从其他变量中隔离温度/Top-P的效果——您不是在混合不良提示和参数调整。',
            '**共识和评分：** 使用幻觉风险、风格一致性和相关性评分的Quorum分析将所有输出并排查看。选择最适合您任务的创造力与可靠性权衡的模型+设置组合。',
            '**自动温度建议：** PromptQuorum分析您的任务描述和提示结构，然后根据您的用例（编码、摘要、头脑风暴等）建议最佳温度范围。在应用和Chrome扩展程序中可用，PromptQuorum提议超出标准默认值的温度值，针对您的特定任务和使用的模型进行定制。无需猜测"我应该使用0.2还是0.7？"，该工具根据任务分析建议具体值——帮助您跳过手动试错。',
            '**本地LLM工作流：** 无需编写脚本即可在Ollama或LM Studio上测试不同的温度/Top-P组合，然后为您的工作流保存最佳预设。',
          ],
        },
        recipes: {
          title: '快速启动配方',
          content: '将这些用作您的任务的起点：',
        },
        recipeSafe: {
          items: [
            '**安全事实模式：** 温度0.2，Top-P 0.95 | 最适用于问答、摘要、数据提取、事实型任务 | 输出：可靠、一致、最少幻觉',
            '**默认平衡模式：** 温度0.5，Top-P 0.9 | 最适用于大多数常见任务、解释、常见写作 | 输出：自然、稳定但有一些变化',
            '**创意头脑风暴模式：** 温度0.8，Top-P 1.0 | 最适用于想法生成、市场营销文案、讲故事、变体 | 输出：多样化、令人惊讶，需要过滤的许多选项',
            '**简短答案模式：** 温度0.3，Top-P 0.95（与[基础：更快的AI答案：如何为速度提示]配对）| 最适用于直接答案、快速决定、简明输出 | 输出：快速、直接、最少详细信息',
            '**实验模式：** 温度1.0，Top-P 1.0 | 最适用于探索模型行为、理解限制、研究 | 输出：不可预测，最大变化',
          ],
        },
        mistakes: {
          title: '温度和Top-P的常见错误',
          items: [
            '**将两者都调到最大并期望可靠性。** 高温度+高Top-P=最大随机性。只有在进行头脑风暴或实验时才这样做。',
            '**同时更改两个旋钮。** 您不会知道哪个设置产生了效果。更改一个、观察，然后根据需要更改另一个。',
            '**尝试用滑块修复不良提示。** 模糊的指令在任何温度下仍会产生不良输出。首先修复提示。',
            '**忘记模型对相同值的解释不同。** Claude上的温度0.7与GPT-4o上的0.7感觉不同。始终测试您的实际模型。',
            '**没有测试足够的运行。** 温度0.5下的一个输出可能是离群值。运行至少3–5次以查看典型行为。',
            '**将温度设置为0并期望完美正确性。** 低温度会降低随机性，但不会消除幻觉。幻觉来自训练数据差距，而不是随机抽样。',
            '**完全忽略，因为您的提供商忽略了它。** 一些模型这样做；有些则不。检查文档以避免浪费时间调整禁用的旋钮。',
          ],
        },
        faqs: {
          faqs: [
            { q: '我应该先调整温度还是Top-P？', a: '温度。它有更明显的效果。保持Top-P为默认值（0.9–1.0），直到您感受到温度对您的任务的影响，然后仅在需要时微调Top-P。' },
            { q: '为什么一个模型会忽略我的温度设置？', a: '某些模型在某些配置中限制或禁用温度和Top-P（例如，如果温度设置为0.0，OpenAI会忽略Top-P）。检查您提供商的文档。使用PromptQuorum的多模型视图，您会立即看到这一点。' },
            { q: '我可以将温度设置为0以获得保证的正确性吗？', a: '不能。温度0.0意味着"总是选择最有可能的单词"，这是确定性的但不总是正确的。幻觉是关于训练数据差距和任务歧义，而不是随机抽样。结合低温度与清晰的提示和基础以获得更好的可靠性。' },
            { q: '为什么我在低温度下仍然看到幻觉？', a: '当模型的训练数据有差距或任务有歧义时，幻觉就会发生——不仅仅是由于随机抽样。低温设置关于其幻觉是一致的，但不会消除它们。使用RAG或显式源约束来减少它们。' },
            { q: 'GPT-4o、Claude 4.6 Sonnet和Gemini 1.5 Pro之间的推荐设置是否不同？', a: '略有不同。全部三个在温度0.5–0.7下表现合理，但对较高温度的容限不同。GPT-4o可以走得更高而不变成不连贯；Claude 4.6 Sonnet非常稳定；Gemini 1.5 Pro更多实验性。测试您的实际模型。' },
            { q: '公平地比较设置需要多少次运行？', a: '至少每个设置3–5次以查看典型行为。如果您在输出变异高的较高温度下工作，则更多。PromptQuorum的多运行功能会自动为所有模型处理此。' },
          ],
        },
        relatedReading: {
          content: [
            '[什么是提示工程？](/prompt-engineering/what-is-prompt-engineering) – 为什么提示结构比参数更重要',
            '[每个提示需要的5个基本构件](/prompt-engineering/5-building-blocks-every-prompt-needs) – 如何在调整参数之前结构化提示',
            '[AI幻觉：为什么AI会编造东西](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) – 为什么低温度不能消除幻觉',
          ],
        },
        sources: {
          content: [
            '[OpenAI，2024。"API参考：温度和Top_P参数"](https://platform.openai.com/docs/api-reference/chat/create) – 关于参数范围和效果的官方文档',
            '[Holtzman等，2020。"神经文本退化的奇异案例"](https://arxiv.org/abs/1904.09751) – 关于核抽样（Top-P）及其对文本质量影响的研究',
            '[Anthropic，2024。"Claude：如何使用提示"](https://docs.anthropic.com/) – 有关温度和参数调整的Claude特定指导',
          ],
        },
      },
    },
  };
