// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: temperature-and-top-p
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('temperature-and-top-p');

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-03-01',
      last_full_refresh: '2026-08-31',
      current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Claude Sonnet 5', 'Claude Fable 5', 'Gemini 3.1 Pro'],
      theme: 'Fundamentals',
      heroImage: '/images/temperature-and-top-p-overview-hero-en.webp',
      title: 'Temperature and Top-P: Control AI Creativity',
      intro: 'Temperature and top-p control how adventurous or conservative an AI\'s word choices are. By tuning these settings, you trade off creativity versus reliability—higher values produce surprising, varied outputs; lower values produce safe, predictable ones.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      seoTitle: 'Temperature & Top-P 2026: Tune AI Creativity and Accuracy',
      metaDescription: 'Temperature 0–2, Top-P 0.1–1.0: set AI randomness for code, summaries and brainstorming — plus which frontier models now refuse a custom temperature.',
      readTime: '10 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Temperature and Top-P Sampling',
      leadAnswerBlock: 'Temperature controls how random the model\'s word choices are: 0.0 is near-deterministic, 1.0 and above is creative. Top-p limits how many candidate words stay in play at each step. In practice, tune temperature only and leave top-p at its 0.9–1.0 default.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperature and Top-P: Control AI Creativity',
        description: 'Learn how temperature and top-p control AI randomness. Practical settings for coding, summaries, brainstorming, and balancing creativity with reliability across GPT-5.6, Claude, Gemini.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'en',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'en'),
        keywords: ['temperature', 'top-p', 'nucleus sampling', 'AI randomness', 'LLM settings', 'creativity', 'GPT-5.6', 'Claude', 'Gemini', 'prompt tuning'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.6' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 5' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'The slide deck below covers: how temperature controls probability sampling (range 0.0–2.0), how top-p nucleus sampling limits token selection, specific settings for 6 use cases (code, creative, factual, chat), and a quick-reference table. Download the PDF as a temperature and top-p parameter reference card.',
      sections: {
        definition: {
          title: 'What Are Temperature and Top-P?',
          snippets: [
            { type: 'in-one-sentence', text: 'Temperature controls the sharpness of the model\'s probability distribution — lower values produce deterministic output, higher values increase randomness — while top-p limits sampling to the smallest set of tokens whose probabilities sum to p.' },
            { type: 'in-plain-terms', text: 'Temperature is the creativity dial. Turn it down to 0 for consistent, predictable answers; turn it up for surprising ones. Top-p is a different lever on the same idea: instead of flattening the odds, it just refuses to consider the long tail of unlikely words.' },
          ],
          content: [
            '**Temperature is a knob that makes the model\'s output more random (higher) or more deterministic (lower).** At temperature 0.0, the model always picks the single most likely next word—so repeated runs are near-identical, though floating-point and hardware variation can still change the odd token. At temperature 1.0+, the model considers riskier alternatives, producing surprising and varied text.',
            '**Top-p (nucleus sampling) controls how many likely word options the model considers at each step.** Instead of "how random," think of it as "how many plausible choices." At top-p 0.1, the model only considers the very top options until they reach 10% cumulative probability—narrow and safe. At top-p 0.9, it considers a much wider set of possible words—looser and more varied.',
            'In plain terms: temperature controls "how adventurous," and top-p controls "how many options to consider." Both affect output variety, but in different ways.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Works with local models',
              text: 'Temperature and top-p settings are available in all [local LLM tools](https://www.promptquorum.com/local-llms). Same parameters, same effect.'
            }
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
            '**Check that the knob still exists before you tune it:** Anthropic’s current Claude models and OpenAI’s reasoning models reject any non-default temperature or top-p with an error.',
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
          content: '**Top-p effects:** Low (0.1–0.3) creates very narrow option sets and highly conservative output. Medium (0.5–0.7) balances diversity with stability. High (0.8–1.0) broadens option set and encourages creativity, similar to high temperature. **Important:** Many providers link or cap these settings. OpenAI\'s GPT models often ignore top-p if temperature is explicitly set. On Anthropic’s current models, both parameters are locked at their defaults entirely (see below). Always check your provider\'s documentation—the same numbers don\'t mean the same thing across all models.',
        },


        providerLimits: {
          title: 'Not Every Model Still Accepts a Temperature Value',
          snippets: [
            { type: 'in-one-sentence', text: 'Several frontier models now reject any non-default temperature or top-p with an error, so confirm the parameter still exists before you tune it.' },
            { type: 'in-plain-terms', text: 'On some of the newest models the sliders are simply gone. If your request fails, the setting was refused — not ignored.' },
          ],
          content: [
            '**A growing number of frontier models no longer accept a temperature or top-p value at all — they return an error instead of an adjusted output.** Reasoning-mode models build their answer over several internal rounds of drafting and checking, and providers lock the sampling parameters so that process stays calibrated. Check whether the knob still exists on the model you are calling before you spend time tuning it.',
            '**Anthropic:** on Claude Opus 5, Claude Sonnet 5 and Claude Fable 5 (and on Claude Opus 4.7 and 4.8), a non-default temperature, top_p or top_k returns a 400 error on every request — not only when thinking is switched on. On older Claude models the restriction applies only while thinking is active, where top_p is accepted between 0.95 and 1.0.',
            '**OpenAI:** the GPT-5 family in reasoning mode refuses non-default values with "Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported." Non-reasoning endpoints still take the full 0–2 range.',
            '**Google:** Gemini still exposes temperature and topP through generationConfig, so the ranges in this guide apply to Gemini models directly.',
            '**Local models:** Ollama, LM Studio and llama.cpp expose both parameters on every model, with no provider-side lock. If you want to feel the difference between 0.2 and 0.9 on the same prompt, a [local model](https://www.promptquorum.com/local-llms) is the cheapest place to test it.',
            'When the parameters are locked, you steer with the prompt instead: ask for one canonical answer in an exact output format where you would have lowered temperature, and ask explicitly for several distinct alternatives where you would have raised it. Where the provider offers a reasoning-effort control, that is the setting that has replaced temperature.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'A refusal is not a no-op',
              text: 'A rejected request is easy to misread as "the setting had no effect". A 400 error means the parameter was refused, so the run never happened at the value you chose.'
            }
          ],
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
            '**Tested in PromptQuorum — 60 creative writing prompts dispatched at temperature 0.2, 0.7, and 1.2 across the models that still expose a temperature control:** At 0.7, 54 of 60 prompts produced usable first drafts. At 1.2, 31 of 60 produced hallucinated details or broken structure. At 0.2, 58 of 60 were accurate but rated as "generic" by evaluators in blind review.',
            'Normally, testing temperature and top-p settings means running the same prompt many times across multiple models, manually logging outputs, and comparing—time-consuming and hard to track. PromptQuorum streamlines this workflow.',
            '**Multi-model comparisons:** Send one prompt at different temperature/top-p settings across the 25+ models that accept them (Gemini 3.1 Pro, the GPT-5.6 non-reasoning endpoints, Mistral, local Ollama models) in a single dispatch. See instantly which model stays stable at higher temperature and which one gives the best creative output at your target setting.',
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
            '**Assuming every model still has a temperature knob.** Anthropic’s current Claude models and OpenAI’s reasoning models reject non-default values outright, and among the models that do accept them the same number means different things — temperature 0.7 on Gemini 3.1 Pro does not feel like 0.7 on a local Llama build. Test the exact model you are calling.',
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
              a: 'Usually it is not ignoring it — it is refusing it. Anthropic’s current Claude models and OpenAI’s reasoning models return a 400 error when temperature or top-p is set to anything but the default, and some older configurations silently cap one parameter when the other is set explicitly. Check your provider’s documentation, and read a failed request as a refusal rather than as a setting that had no effect.',
            },
            {
              q: 'Can I set temperature to 0 for guaranteed correctness?',
              a: 'No. Temperature 0.0 means "always pick the most likely word," which is near-deterministic but not always correct. Hallucinations are about training data gaps and task ambiguity, not random sampling. Combine low temperature with clear prompts and grounding for better reliability.',
            },
            {
              q: 'Why do I still see hallucinations at low temperature?',
              a: 'Hallucinations happen when the model\'s training data has gaps or the task is ambiguous—not just because of random sampling. A low-temperature setting will be consistent about its hallucinations, but it won\'t eliminate them. Use RAG or explicit source constraints to reduce them.',
            },
            {
              q: 'Do recommended settings differ between GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro?',
              a: 'More than slightly — one of them no longer takes the setting at all. Claude Opus 5 (like Claude Sonnet 5 and Claude Fable 5) rejects any non-default temperature or top-p outright. Gemini 3.1 Pro still exposes both through generationConfig and behaves reasonably at 0.5–0.7. GPT-5.6 accepts the full range on its non-reasoning endpoints but refuses non-default values in reasoning mode. Test the exact model and mode you are calling.',
            },
            {
              q: 'How many runs do I need to compare settings fairly?',
              a: 'At least 3–5 per setting to see the typical behaviour. More if you\'re working with higher temperatures where output variance is high. PromptQuorum\'s multi-run feature handles this automatically across all models.',
            },
            { q: 'What do I do if my model rejects the temperature parameter?', a: 'Steer with the prompt instead. Where you would have lowered temperature, ask for a single canonical answer in an exact output format; where you would have raised it, ask explicitly for several clearly distinct alternatives. If the provider exposes a reasoning-effort control, that is the setting that replaces temperature. Anthropic’s current Claude models and OpenAI’s reasoning models return an error rather than silently ignoring the value.' },
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
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) — official parameter ranges and defaults for temperature and top_p',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — research on nucleus sampling (top-p) and its effects on text quality',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) — lists the Claude models that reject non-default temperature, top_p and top_k',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) — Gemini generation config, including temperature',
          ],
        },
      },
    },

    de: {
      theme: 'Grundlagen',
      heroImage: '/images/temperature-and-top-p-overview-hero-de.webp',
      title: 'Temperatur und Top-P: Kontrolliere die KI-Kreativität',
      seoTitle: 'Temperatur und Top-P: KI-Kreativität steuern 2026',
      intro: 'Temperatur und Top-P kontrollieren, wie abenteuerlich oder konservativ ein KI-Modell Wortwahlentscheidungen trifft. Durch Anpassung dieser Einstellungen wechselst du zwischen Kreativität und Zuverlässigkeit – höhere Werte erzeugen überraschende, vielfältige Ausgaben; niedrigere Werte erzeugen sichere, vorhersagbare Ausgaben.',
      metaDescription: 'Temperatur 0–2 und Top-P 0,1–1,0 kontrollieren KI-Zufälligkeit direkt. Optimale Werte für Code, Zusammenfassungen, Brainstorming. GPT-5.6, Claude, Gemini.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Temperatur und Top-P Sampling',
      leadAnswerBlock: 'Die Temperatur steuert, wie zufällig die Wortwahl des Modells ist: 0.0 ist nahezu deterministisch, 1.0 und höher ist kreativ. Top-P begrenzt, wie viele Wortkandidaten pro Schritt im Spiel bleiben. In der Praxis stellst du nur die Temperatur ein und belässt Top-P beim Standardwert 0.9–1.0.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperatur und Top-P: Kontrolliere die KI-Kreativität',
        description: 'Erfahren Sie, wie Temperatur und Top-P die KI-Zufälligkeit steuern. Praktische Einstellungen für Code, Zusammenfassungen, Brainstorming und Balance zwischen Kreativität und Zuverlässigkeit.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/de/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'de',
        keywords: ['Temperatur', 'Top-P', 'Nucleus Sampling', 'KI-Zufälligkeit', 'LLM-Einstellungen', 'Kreativität', 'GPT-5.6', 'Claude', 'Gemini', 'Prompt-Tuning'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'Das Foliendeck behandelt: wie Temperatur das Wahrscheinlichkeits-Sampling steuert (Bereich 0,0–2,0), wie Top-p-Nucleus-Sampling die Token-Auswahl begrenzt, spezifische Einstellungen für 6 Anwendungsfälle (Code, kreativ, faktisch, Chat) und eine Schnellreferenztabelle. PDF als Temperatur-und-Top-p-Parameter-Referenzkarte herunterladen.',
      sections: {
        definition: {
          title: 'Was sind Temperatur und Top-P?',
          snippets: [
            { type: 'in-one-sentence', text: 'Die Temperatur steuert die Schärfe der Wahrscheinlichkeitsverteilung des Modells — niedrige Werte erzeugen deterministische Ausgaben, hohe Werte erhöhen die Zufälligkeit — während Top-P das Sampling auf die kleinste Tokenmenge begrenzt, deren Wahrscheinlichkeiten sich zu p summieren.' },
            { type: 'in-plain-terms', text: 'Die Temperatur ist der Kreativitätsregler. Auf 0 gedreht liefert sie gleichbleibende, vorhersagbare Antworten, hochgedreht überraschende. Top-P ist ein anderer Hebel für dieselbe Idee: Statt die Wahrscheinlichkeiten abzuflachen, schließt es schlicht den langen Schwanz unwahrscheinlicher Wörter aus.' },
          ],
          content: [
            '**Temperatur ist ein Regler, der die Ausgabe des Modells zufälliger (höher) oder deterministischer (niedriger) macht.** Bei Temperatur 0.0 wählt das Modell immer das wahrscheinlichste nächste Wort – wiederholte Durchläufe sind damit nahezu identisch, wobei Gleitkomma- und Hardware-Abweichungen einzelne Tokens weiterhin verändern können. Bei Temperatur 1.0+ berücksichtigt das Modell riskantere Alternativen und erzeugt überraschende und vielfältige Texte.',
            '**Top-P (Nucleus Sampling) kontrolliert, wie viele wahrscheinliche Wortoptionen das Modell bei jedem Schritt berücksichtigt.** Statt „wie zufällig" denke „wie viele plausible Wahlen." Bei Top-P 0.1 berücksichtigt das Modell nur die Top-Optionen, bis sie 10% kumulative Wahrscheinlichkeit erreichen – eng und sicher. Bei Top-P 0.9 berücksichtigt es einen viel größeren Satz möglicher Wörter – lockerer und vielfältiger.',
            'Kurz gesagt: Temperatur kontrolliert „wie abenteuerlich", und Top-P kontrolliert „wie viele Optionen zu berücksichtigen sind". Beide beeinflussen die Ausgangsvielfalt, aber auf unterschiedliche Weise.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Funktioniert mit lokalen Modellen',
              text: 'Temperatur- und Top-P-Einstellungen sind in allen [lokalen LLM-Tools](https://www.promptquorum.com/local-llms) verfügbar. Gleiche Parameter, gleiche Auswirkung.'
            }
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
            '**Prüfe erst, ob der Regler überhaupt existiert:** Die aktuellen Claude-Modelle von Anthropic und die Reasoning-Modelle von OpenAI weisen jeden Nicht-Standardwert für Temperatur oder Top-P mit einem Fehler zurück.',
          ],
        },
        promptExample: {
          title: 'Prompt-Struktur + Temperatur-Einstellungen',
          content: [
            '[Schlechter Prompt] „Schreibe etwas Kreatives über den Herbst."',
            '[Guter Prompt] „Schreibe eine 100 Wörter lange, metaphorische Beschreibung des Herbstes, als wärst du ein Dichter. Temperatur: 0.9, Top-P: 0.95."',
          ],
        },
        notation: {
          title: 'Mathematische Notation',
          content: [
            'Temperaturbereich: T ∈ [0.0, 2.0]',
            'Softmax mit Temperatur: softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Top-P-Sampling: Σ P(token_i) bis ≥ p, dann Sampling aus dieser Menge',
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
          content: '**Top-P-Effekte:** Niedrig (0.1–0.3) erzeugt sehr enge Optionsmengen und hochgradig konservative Ausgaben. Mittel (0.5–0.7) balanciert Vielfalt mit Stabilität. Hoch (0.8–1.0) erweitert die Optionsmenge und fördert Kreativität, ähnlich wie hohe Temperatur. **Wichtig:** Viele Anbieter verbinden oder begrenzen diese Einstellungen. OpenAI-Modelle ignorieren oft Top-P, wenn Temperatur explizit gesetzt ist. Bei den aktuellen Anthropic-Modellen sind dagegen beide Parameter vollständig auf ihren Standardwerten gesperrt (siehe unten). Überprüfe immer die Dokumentation deines Anbieters – die gleichen Zahlen bedeuten nicht das Gleiche bei allen Modellen.',
        },

        providerLimits: {
          title: 'Nicht jedes Modell akzeptiert noch einen Temperaturwert',
          snippets: [
            { type: 'in-one-sentence', text: 'Mehrere Frontier-Modelle weisen inzwischen jeden Nicht-Standardwert für Temperatur oder Top-P mit einem Fehler zurück – prüfe also zuerst, ob der Parameter überhaupt noch existiert.' },
            { type: 'in-plain-terms', text: 'Bei einigen der neuesten Modelle gibt es die Regler schlicht nicht mehr. Schlägt deine Anfrage fehl, wurde die Einstellung abgelehnt – nicht ignoriert.' },
          ],
          content: [
            '**Immer mehr Frontier-Modelle akzeptieren überhaupt keinen Temperatur- oder Top-P-Wert mehr – sie liefern einen Fehler statt einer angepassten Ausgabe.** Modelle im Reasoning-Modus erzeugen ihre Antwort über mehrere interne Runden aus Entwurf und Prüfung, und die Anbieter sperren die Sampling-Parameter, damit dieser Ablauf kalibriert bleibt. Prüfe deshalb zuerst, ob der Regler bei deinem Modell existiert, bevor du Zeit in die Feinabstimmung steckst.',
            '**Anthropic:** Bei Claude Opus 5, Claude Sonnet 5 und Claude Fable 5 (sowie bei Claude Opus 4.7 und 4.8) führt ein von der Voreinstellung abweichender Wert für temperature, top_p oder top_k bei jeder Anfrage zu einem 400-Fehler – nicht nur bei aktiviertem Thinking. Bei älteren Claude-Modellen gilt die Einschränkung nur während Thinking aktiv ist; dort wird top_p zwischen 0.95 und 1.0 akzeptiert.',
            '**OpenAI:** Die GPT-5-Familie im Reasoning-Modus lehnt abweichende Werte mit „Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported“ ab. Die Endpunkte ohne Reasoning nehmen weiterhin den vollen Bereich 0–2 entgegen.',
            '**Google:** Gemini stellt temperature und topP weiterhin über generationConfig bereit – die Bereiche aus diesem Leitfaden gelten für Gemini-Modelle also unverändert.',
            '**Lokale Modelle:** Ollama, LM Studio und llama.cpp geben beide Parameter bei jedem Modell frei, ohne Sperre auf Anbieterseite. Wenn du den Unterschied zwischen 0.2 und 0.9 am selben Prompt selbst spüren willst, ist ein [lokales Modell](https://www.promptquorum.com/local-llms) der günstigste Ort zum Testen.',
            'Sind die Parameter gesperrt, steuerst du stattdessen über den Prompt: Verlange eine einzige verbindliche Antwort in einem exakten Ausgabeformat, wo du sonst die Temperatur gesenkt hättest – und fordere ausdrücklich mehrere deutlich verschiedene Varianten, wo du sie erhöht hättest. Bietet der Anbieter eine Steuerung des Reasoning-Aufwands, ist das die Einstellung, die die Temperatur ersetzt hat.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Eine Ablehnung ist kein Nulleffekt',
              text: 'Eine abgelehnte Anfrage wird leicht als „die Einstellung hatte keinen Effekt“ missverstanden. Ein 400-Fehler bedeutet, dass der Parameter zurückgewiesen wurde – der Durchlauf hat mit deinem Wert also nie stattgefunden.'
            }
          ],
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
            '**Multi-Modell-Vergleiche:** Sende einen Prompt mit verschiedenen Temperatur-/Top-P-Einstellungen über die 25+ Modelle, die sie annehmen (Gemini 3.1 Pro, die GPT-5.6-Endpunkte ohne Reasoning, Mistral, lokale Ollama-Modelle) in einem einzigen Versand. Sieh sofort, welches Modell bei höherer Temperatur stabil bleibt und welches die beste kreative Ausgabe bei deiner Zieleinstellung erzeugt.',
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
            '**Annehmen, dass jedes Modell noch einen Temperaturregler hat.** Die aktuellen Claude-Modelle von Anthropic und die Reasoning-Modelle von OpenAI weisen abweichende Werte rundweg zurück, und bei den Modellen, die sie annehmen, bedeutet dieselbe Zahl Unterschiedliches – Temperatur 0.7 auf Gemini 3.1 Pro fühlt sich anders an als 0.7 auf einem lokalen Llama-Build. Teste immer genau das Modell, das du aufrufst.',
            '**Nicht genug Durchläufe testen.** Eine Ausgabe bei Temperatur 0.5 könnte ein Ausreißer sein. Führe mindestens 3–5 Mal aus, um das typische Verhalten zu sehen.',
            '**Temperatur auf 0 setzen und perfekte Richtigkeit erwarten.** Niedrige Temperatur reduziert Zufälligkeit, aber beseitigt Halluzinationen nicht. Halluzinationen stammen aus Trainingsdatenlücken, nicht aus zufälligem Sampling.',
            '**Vollständig ignorieren, dass dein Anbieter Top-P ignoriert.** Einige Modelle tun es; einige nicht. Überprüfe die Dokumentation, um zu vermeiden, dass Zeit mit der Anpassung eines deaktivierten Reglers verschwendet wird.',
          ],
        },

        howToStart: {
          title: 'So stellst du Temperatur und Top-P für deine Aufgabe ein',
          numberedItems: [
            '**Beginne mit dem Prompt, nicht mit den Parametern:** Schreibe und verfeinere deine Anweisungen, bis sie klar sind. Parameter können einen vagen Prompt nicht reparieren – sie beeinflussen nur die Sampling-Verteilung, nicht das Verständnis der Aufgabe durch das Modell.',
            '**Bestimme deinen Aufgabentyp:** Faktische oder analytische Aufgaben (juristische Analyse, Code-Review, Datenextraktion) → Temperatur 0,0–0,3 einstellen. Kreative oder generative Aufgaben (Brainstorming, Werbetexte, Story-Ideen) → Temperatur 0,7–1,0 einstellen.',
            '**Lasse Top-P auf dem Standardwert (0,9–1,0):** Passe Top-P nur an, wenn du einen bestimmten Grund dafür hast. Wenn du Temperatur und Top-P gleichzeitig änderst, wird es schwieriger zu erkennen, welche Einstellung die Ausgabe verändert hat.',
            '**Führe 3–5 Testprompts bei deiner Zieltemperatur aus:** Bewerte die Konsistenz der Ausgaben. Wenn die Ausgaben bei einer faktischen Aufgabe zu stark variieren, senke die Temperatur. Wenn sich die Ausgaben bei einer kreativen Aufgabe zu repetitiv anfühlen, erhöhe die Temperatur.',
            '**Dokumentiere deine kalibrierten Einstellungen pro Anwendungsfall:** Sobald du die richtige Temperatur für einen bestimmten Workflow gefunden hast, halte sie in deiner System-Prompt-Vorlage fest, damit sie über alle Sitzungen hinweg konsistent angewendet wird.',
          ],
        },

        faqs: {
          faqs: [
            { q: 'Sollte ich zuerst die Temperatur oder Top-P anpassen?', a: 'Temperatur. Sie hat einen offensicheren Effekt. Halte Top-P bei einem Standard (0.9–1.0), bis du ein Gefühl dafür hast, was Temperatur für deine Aufgabe tut, dann fine-tune Top-P nur bei Bedarf.' },
            { q: 'Warum ignoriert ein Modell meine Temperatureinstellung?', a: 'Meist ignoriert es die Einstellung nicht, sondern lehnt sie ab. Die aktuellen Claude-Modelle von Anthropic und die Reasoning-Modelle von OpenAI liefern einen 400-Fehler, sobald Temperatur oder Top-P von der Voreinstellung abweichen; ältere Konfigurationen begrenzen still den einen Parameter, wenn der andere explizit gesetzt ist. Prüfe die Dokumentation deines Anbieters und lies eine fehlgeschlagene Anfrage als Ablehnung, nicht als wirkungslose Einstellung.' },
            { q: 'Kann ich die Temperatur auf 0 setzen, um Korrektheit zu garantieren?', a: 'Nein. Temperatur 0.0 bedeutet „wähle immer das wahrscheinlichste Wort", was nahezu deterministisch, aber nicht immer korrekt ist. Halluzinationen handeln von Trainingsdatenlücken und Aufgabenklarheit, nicht von zufälligem Sampling. Kombiniere niedrige Temperatur mit klaren Prompts und Grounding für bessere Zuverlässigkeit.' },
            { q: 'Warum sehe ich bei niedriger Temperatur immer noch Halluzinationen?', a: 'Halluzinationen treten auf, wenn die Trainingsdaten des Modells Lücken haben oder die Aufgabe mehrdeutig ist – nicht nur wegen zufälligem Sampling. Eine niedrig-Temperatur-Einstellung wird über ihre Halluzinationen konsistent sein, aber sie werden sie nicht beseitigen. Verwende RAG oder explizite Quelleneinschränkungen, um sie zu reduzieren.' },
            { q: 'Unterscheiden sich die empfohlenen Einstellungen zwischen GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro?', a: 'Mehr als nur leicht – eines der drei nimmt die Einstellung gar nicht mehr an. Claude Opus 5 (ebenso Claude Sonnet 5 und Claude Fable 5) weist jede von der Voreinstellung abweichende Temperatur oder Top-P rundweg zurück. Gemini 3.1 Pro stellt beide weiterhin über generationConfig bereit und verhält sich bei 0.5–0.7 unauffällig. GPT-5.6 akzeptiert an den Endpunkten ohne Reasoning den vollen Bereich, verweigert im Reasoning-Modus aber abweichende Werte. Teste genau das Modell und den Modus, den du aufrufst.' },
            { q: 'Wie viele Durchläufe brauche ich, um Einstellungen fair zu vergleichen?', a: 'Mindestens 3–5 pro Einstellung, um das typische Verhalten zu sehen. Mehr, wenn du mit höheren Temperaturen arbeitest, wo die Output-Varianz hoch ist. PromptQuorum\'s Multi-Run-Feature handhabt dies automatisch über alle Modelle.' },
            { q: 'Was mache ich, wenn mein Modell den Temperatur-Parameter ablehnt?', a: 'Steuere stattdessen über den Prompt. Wo du die Temperatur gesenkt hättest, verlange eine einzige verbindliche Antwort in einem exakt vorgegebenen Ausgabeformat; wo du sie erhöht hättest, fordere ausdrücklich mehrere deutlich verschiedene Varianten an. Bietet der Anbieter eine Steuerung des Reasoning-Aufwands, ist das die Einstellung, die die Temperatur ersetzt. Die aktuellen Claude-Modelle von Anthropic und die Reasoning-Modelle von OpenAI liefern einen Fehler, statt den Wert stillschweigend zu ignorieren.' },
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
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) – offizielle Parameterbereiche und Standardwerte für temperature und top_p',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) – Forschung zu Nucleus Sampling (Top-P) und dessen Auswirkungen auf die Textqualität',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) – listet die Claude-Modelle, die abweichende Werte für temperature, top_p und top_k zurückweisen',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) – Generation-Config von Gemini, inklusive temperature',
          ],
        },
      },
    },

    es: {
      theme: 'Fundamentals',
      heroImage: '/images/temperature-and-top-p-overview-hero-es.webp',
      title: 'Temperatura y Top-P: Controla la creatividad de la IA',
      intro: 'La temperatura y el top-p controlan lo aventureras o conservadoras que son las elecciones de palabras de la IA. Ajustando estos parámetros, equilibras creatividad versus fiabilidad — los valores más altos producen outputs sorprendentes y variados; los más bajos producen outputs seguros y predecibles.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      seoTitle: 'Temperatura y Top-P 2026: ajusta creatividad y precisión',
      metaDescription: 'Temperatura 0–2 y Top-P 0.1–1.0: define la aleatoriedad de la IA para código, resúmenes o brainstorming. Rangos prácticos para ChatGPT, Claude y Gemini.',
      readTime: '10 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Muestreo de Temperatura y Top-P',
      leadAnswerBlock: 'La temperatura controla qué tan aleatorias son las elecciones de palabras del modelo: 0.0 es casi determinista, 1.0 o más es creativo. El top-p limita cuántas palabras candidatas quedan en juego en cada paso. En la práctica, ajusta solo la temperatura y deja el top-p en su valor por defecto de 0.9–1.0.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperatura y Top-P: Controla la creatividad de la IA',
        description: 'Aprende cómo la temperatura y el top-p controlan la aleatoriedad de la IA. Configuraciones prácticas para codificación, resúmenes, brainstorming y equilibrar creatividad con fiabilidad.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/es/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'es',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        keywords: ['temperatura', 'top-p', 'nucleus sampling', 'aleatoriedad de IA', 'configuración LLM', 'creatividad', 'GPT-5.6', 'Claude', 'Gemini'],
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'El deck cubre: cómo la temperatura controla el muestreo de probabilidad (rango 0.0–2.0), cómo el nucleus sampling top-p limita la selección de tokens, configuraciones específicas para 6 casos de uso (código, creativo, factual, chat) y una tabla de referencia rápida. Descarga el PDF como tarjeta de referencia de parámetros de temperatura y top-p.',
      sections: {
        definition: {
          title: '¿Qué son la temperatura y el top-p?',
          snippets: [
            { type: 'in-one-sentence', text: 'La temperatura controla la nitidez de la distribución de probabilidad del modelo — valores bajos producen salidas deterministas, valores altos aumentan la aleatoriedad — mientras que el top-p limita el muestreo al conjunto más pequeño de tokens cuyas probabilidades suman p.' },
            { type: 'in-plain-terms', text: 'La temperatura es el mando de creatividad. Bájalo a 0 para respuestas consistentes y predecibles; súbelo para respuestas sorprendentes. El top-p es otra palanca sobre la misma idea: en vez de aplanar las probabilidades, simplemente se niega a considerar la cola de palabras improbables.' },
          ],
          content: [
            '**La temperatura es un dial que hace que el output del modelo sea más aleatorio (más alto) o más determinista (más bajo).** A temperatura 0.0, el modelo siempre elige la siguiente palabra más probable, por lo que las ejecuciones repetidas son casi idénticas, aunque la variación de coma flotante y de hardware todavía puede cambiar algún token. A temperatura 1.0+, el modelo considera alternativas más arriesgadas, produciendo texto sorprendente y variado.',
            '**Top-p (nucleus sampling) controla cuántas opciones de palabras probables considera el modelo en cada paso.** En lugar de "qué tan aleatorio", piénsalo como "cuántas opciones plausibles". Con top-p 0.1, el modelo solo considera las opciones más altas hasta que alcanzan el 10% de probabilidad acumulada — estrecho y seguro. Con top-p 0.9, considera un conjunto de palabras posibles mucho más amplio — más libre y variado.',
            'En términos simples: la temperatura controla "qué tan aventurero", y el top-p controla "cuántas opciones a considerar". Ambos afectan la variedad del output, pero de formas diferentes.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Funciona con modelos locales',
              text: 'Los ajustes de temperatura y top-p están disponibles en todas las [herramientas LLM locales](https://www.promptquorum.com/local-llms). Los mismos parámetros, el mismo efecto.'
            }
          ],
        },

        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            '**La temperatura controla la aleatoriedad directamente:** 0.0–0.3 para determinista, 0.4–0.7 para equilibrado, 0.8+ para creativo.',
            '**El top-p controla el rango de opciones de palabras:** más bajo limita las opciones, más alto las amplía.',
            '**La mayoría de usuarios debería ajustar uno y mantener el otro en el valor predeterminado.** Ajustar ambos a la vez hace imposible saber qué configuración ayudó.',
            '**El diseño del prompt sigue siendo más importante que los ajustes de deslizadores.** Corrige primero las instrucciones vagas, luego ajusta los parámetros si es necesario.',
            '**Los diferentes casos de uso necesitan distintas configuraciones:** el código exige temperatura baja, el brainstorming recompensa valores más altos.',
            '**Comprueba que el control existe antes de ajustarlo:** los modelos Claude actuales de Anthropic y los modelos de razonamiento de OpenAI rechazan con un error cualquier temperatura o top-p distinto del predeterminado.',
          ],
        },

        promptExample: {
          title: 'Estructura del prompt + Configuraciones de temperatura',
          content: [
            '[Prompt malo] "Escribe algo creativo sobre el otoño."',
            '[Prompt bueno] "Escribe una descripción metafórica de 100 palabras del otoño como si fueras un poeta. Temperatura: 0.9, top-p: 0.95."',
          ],
        },

        notation: {
          title: 'Notación matemática',
          content: [
            'Rango de temperatura: T ∈ [0.0, 2.0]',
            'Softmax con temperatura: softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Muestreo top-p: Σ P(token_i) hasta ≥ p, luego muestrea de ese conjunto',
          ],
        },

        behavior: {
          title: 'Cómo cambian el comportamiento de la IA',
          content: [
            '**Efectos de la temperatura:**',
          ],
        },

        tempTable: {
          columns: ['Rango de temperatura', 'Comportamiento', 'Ideal para'],
          rows: [
            { 'Rango de temperatura': 'Bajo (0.0–0.3)', 'Comportamiento': 'Enfocado, repetitivo, muy estable', 'Ideal para': 'Tareas que requieren la misma respuesta cada vez; riesgo de bucles' },
            { 'Rango de temperatura': 'Medio (0.4–0.7)', 'Comportamiento': 'Estabilidad y variación equilibradas', 'Ideal para': 'La mayoría de tareas generales; punto de partida recomendado' },
            { 'Rango de temperatura': 'Alto (0.8–1.0+)', 'Comportamiento': 'Creativo, diverso, sorprendente', 'Ideal para': 'Brainstorming y variaciones; riesgo de alucinaciones' },
          ],
        },

        toppBehavior: {
          content: '**Efectos del top-p:** Bajo (0.1–0.3) crea conjuntos de opciones muy estrechos y outputs muy conservadores. Medio (0.5–0.7) equilibra diversidad con estabilidad. Alto (0.8–1.0) amplía el conjunto de opciones y fomenta la creatividad, similar a la temperatura alta. **Importante:** Muchos proveedores vinculan o limitan estos ajustes. Los modelos GPT de OpenAI a menudo ignoran el top-p si la temperatura está explícitamente establecida. En los modelos actuales de Anthropic, en cambio, ambos parámetros están bloqueados en sus valores predeterminados (ver más abajo). Siempre revisa la documentación de tu proveedor — los mismos números no significan lo mismo en todos los modelos.',
        },


        providerLimits: {
          title: 'No todos los modelos siguen aceptando un valor de temperatura',
          snippets: [
            { type: 'in-one-sentence', text: 'Varios modelos de frontera ya rechazan con un error cualquier temperatura o top-p distinto del predeterminado, así que comprueba primero si el parámetro sigue existiendo.' },
            { type: 'in-plain-terms', text: 'En algunos de los modelos más nuevos los deslizadores han desaparecido. Si tu petición falla, el ajuste fue rechazado, no ignorado.' },
          ],
          content: [
            '**Cada vez más modelos de frontera no aceptan ningún valor de temperatura o top-p: devuelven un error en lugar de una salida ajustada.** Los modelos en modo razonamiento construyen su respuesta en varias rondas internas de borrador y verificación, y los proveedores bloquean los parámetros de muestreo para que ese proceso siga calibrado. Comprueba si el control existe en el modelo que vas a llamar antes de dedicar tiempo a ajustarlo.',
            '**Anthropic:** en Claude Opus 5, Claude Sonnet 5 y Claude Fable 5 (y en Claude Opus 4.7 y 4.8), un valor de temperature, top_p o top_k distinto del predeterminado devuelve un error 400 en cada petición, no solo con el razonamiento activado. En los modelos Claude anteriores la restricción se aplica solo mientras el razonamiento está activo, donde top_p se acepta entre 0.95 y 1.0.',
            '**OpenAI:** la familia GPT-5 en modo razonamiento rechaza los valores no predeterminados con "Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported." Los endpoints sin razonamiento siguen aceptando todo el rango 0–2.',
            '**Google:** Gemini sigue exponiendo temperature y topP a través de generationConfig, así que los rangos de esta guía se aplican directamente a los modelos Gemini.',
            '**Modelos locales:** Ollama, LM Studio y llama.cpp exponen ambos parámetros en todos los modelos, sin bloqueo del proveedor. Si quieres notar la diferencia entre 0.2 y 0.9 con el mismo prompt, un [modelo local](https://www.promptquorum.com/local-llms) es el sitio más barato para probarlo.',
            'Cuando los parámetros están bloqueados, diriges con el prompt: pide una única respuesta canónica en un formato de salida exacto donde habrías bajado la temperatura, y pide explícitamente varias alternativas claramente distintas donde la habrías subido. Si el proveedor ofrece un control de esfuerzo de razonamiento, ese es el ajuste que ha sustituido a la temperatura.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Un rechazo no es un efecto nulo',
              text: 'Es fácil leer una petición rechazada como "el ajuste no hizo nada". Un error 400 significa que el parámetro fue rechazado, así que la ejecución nunca llegó a producirse con tu valor.'
            }
          ],
        },
        tradeoff: {
          title: 'Temperatura vs Top-P: ¿Necesitas ambos?',
          content: '**Ambos ajustes controlan la aleatoriedad, pero la mayoría de usuarios debería ajustar solo uno y mantener el otro en un valor predeterminado razonable.** Cambiar ambos a la vez hace imposible saber qué ajuste produjo el efecto que quieres. Por experiencia tras ajustar miles de prompts: mantén el top-p en un valor predeterminado (p. ej., 0.9–1.0) y solo ajusta la temperatura, a menos que un modelo específico recomiende otra cosa.',
        },

        strategyTable: {
          columns: ['Estrategia', 'Temperatura', 'Top-P', 'Cuándo usar'],
          rows: [
            { 'Estrategia': 'Modo determinista', 'Temperatura': '0.0–0.2', 'Top-P': '1.0 (predeterminado)', 'Cuándo usar': 'Código, extracción de datos, output de misión crítica' },
            { 'Estrategia': 'Predeterminado equilibrado', 'Temperatura': '0.5–0.7', 'Top-P': '0.9–1.0', 'Cuándo usar': 'La mayoría de tareas generales, resúmenes, explicaciones' },
            { 'Estrategia': 'Creativo/brainstorming', 'Temperatura': '0.8–1.0', 'Top-P': '0.9–1.0', 'Cuándo usar': 'Ideación, copy de marketing, variaciones, storytelling' },
            { 'Estrategia': 'Producción de alta estabilidad', 'Temperatura': '0.0–0.3', 'Top-P': '0.95', 'Cuándo usar': 'Salud, finanzas, legal, crítico para la seguridad' },
          ],
        },

        useCases: {
          title: 'Configuraciones recomendadas por caso de uso',
          items: [
            '**Codificación, refactoring, corrección de errores:** Temperatura 0.1–0.3, Top-P 0.95. La sintaxis debe ser correcta, la creatividad distrae. Las configuraciones más bajas evitan nombres de funciones alucinados o defectos lógicos.',
            '**Resúmenes y explicaciones:** Temperatura 0.4–0.6, Top-P 0.9. Quieres claridad y consistencia, pero algo de variación en la formulación está bien. La temperatura baja puede hacer los resúmenes mecánicos.',
            '**Brainstorming, copy de marketing, variaciones creativas:** Temperatura 0.7–1.0, Top-P 1.0. Las configuraciones más altas fomentan combinaciones inesperadas y formulaciones novedosas. Necesitas filtrar más outputs, pero obtienes ideas más originales.',
            '**Extracción de datos y output estructurado:** Temperatura 0.0–0.2, Top-P 0.95. El formato debe ser exacto. La mayor aleatoriedad invita a errores de parsing y campos faltantes.',
            '**Escritura de texto largo (ensayos, posts de blog):** Temperatura 0.6–0.8, Top-P 0.9–1.0. Empieza aquí y ajusta según el feedback. Si el output parece genérico, sube la temperatura; si divaga o alucina, bájala.',
            '**Preguntas y respuestas factuales (sin grounding):** Temperatura 0.3–0.5, Top-P 0.9. Las configuraciones moderadas reducen las alucinaciones y mantienen las respuestas naturales.',
          ],
        },

        promptsAndParams: {
          title: 'Cómo los prompts y los parámetros trabajan juntos',
          content: [
            '**El diseño del prompt sigue siendo más importante que los ajustes de deslizadores.** Una instrucción imprecisa a temperatura 0.2 todavía produce una respuesta deficiente — solo una respuesta deficiente consistente. Un prompt claro y bien estructurado a cualquier temperatura produce mejores resultados que un prompt deficiente con configuraciones perfectas.',
            'El flujo de trabajo correcto es: (1) Crea el prompt con una tarea clara, contexto, restricciones y formato de output. (2) Prueba a tu temperatura/top-p objetivo. (3) Ajusta los diales solo cuando necesites más o menos variación después de tener un prompt sólido.',
            'El mismo prompt a diferentes temperaturas produce estilos muy diferentes. A temperatura 0.2, los outputs son seguros y directos. A temperatura 0.8, los outputs son creativos y poéticos. Ninguno es "mejor" — depende de la voz de tu marca y tu caso de uso.',
          ],
        },

        example: {
          title: '[Prompt de ejemplo]',
          blockquote: `Escribe un eslogan de producto corto y conciso para una app de productividad. Mantenlo por debajo de 10 palabras.`,
        },

        lowTemp: {
          title: 'A temperatura 0.2:',
          blockquote: `"Haz más en menos tiempo."`,
        },

        highTemp: {
          title: 'A temperatura 0.8:',
          blockquote: `"Del caos a la claridad: donde los momentos se convierten en impulso."`,
        },

        risk: {
          title: 'Cuándo la mayor creatividad se vuelve arriesgada',
          content: [
            '**Los valores más altos de temperatura y top-p aumentan las alucinaciones, las tangentes fuera del tema y la deriva de estilo — especialmente en tareas factuales.** Sé conservador (temp 0.0–0.5) para: código que va a producción (las APIs alucinadas rompen sistemas), consejos médicos (la información incorrecta daña), finanzas y legal (la precisión es obligatoria) y decisiones críticas para la seguridad (los errores tienen consecuencias).',
            'Para tareas fundamentadas en hechos, considera combinar temperatura baja con RAG o restricciones de fuente explícitas para reducir aún más los errores.',
          ],
        },

        promptquorum: {
          title: 'Cómo PromptQuorum te ayuda a ajustar temperatura y top-p',
          content: [
            'Normalmente, probar configuraciones de temperatura y top-p significa ejecutar el mismo prompt muchas veces en varios modelos, registrando y comparando outputs manualmente — tedioso y difícil de rastrear. PromptQuorum optimiza este flujo de trabajo.',
            '**Comparaciones multi-modelo:** Envía un prompt con diferentes configuraciones de temperatura/top-p a los más de 25 modelos que los aceptan (Gemini 3.1 Pro, los endpoints sin razonamiento de GPT-5.6, Mistral, modelos Ollama locales) en un solo envío. Ve inmediatamente qué modelo permanece estable a mayor temperatura y cuál produce el mejor output creativo en tu configuración objetivo.',
            '**Consenso y puntuación:** Visualiza todos los outputs lado a lado con análisis Quorum que evalúa el riesgo de alucinación, la consistencia de estilo y la relevancia. Elige la combinación de modelo + configuración que mejor se adapte al equilibrio creatividad-fiabilidad de tu tarea.',
          ],
        },

        recipes: {
          title: 'Recetas de inicio rápido',
          content: 'Úsalas como puntos de partida para tu tarea:',
        },

        recipeSafe: {
          items: [
            '**Modo factual seguro:** Temperatura 0.2, Top-P 0.95 | Ideal para Q&A, resúmenes, extracción de datos, tareas basadas en hechos | Output: Fiable, consistente, mínima alucinación',
            '**Modo equilibrado predeterminado:** Temperatura 0.5, Top-P 0.9 | Ideal para la mayoría de tareas generales, explicaciones, escritura general | Output: Natural, estable, pero con algo de variación',
            '**Modo creativo de brainstorming:** Temperatura 0.8, Top-P 1.0 | Ideal para ideación, copy de marketing, storytelling, variaciones | Output: Diverso, sorprendente, muchas opciones para filtrar',
            '**Modo de respuesta breve:** Temperatura 0.3, Top-P 0.95 | Ideal para respuestas directas, decisiones rápidas, outputs concisos | Output: Rápido, directo, mínima elaboración',
            '**Modo experimental:** Temperatura 1.0, Top-P 1.0 | Ideal para explorar el comportamiento del modelo, entender límites, investigación | Output: Impredecible, máxima variación',
          ],
        },

        mistakes: {
          title: 'Errores comunes con temperatura y top-p',
          items: [
            '**Girar ambos al máximo y esperar fiabilidad.** Temperatura alta + top-p alto = máxima aleatoriedad. Solo haz esto si estás haciendo brainstorming o experimentando.',
            '**Cambiar ambos diales al mismo tiempo.** No sabrás qué ajuste ayudó o dañó. Cambia uno, observa, luego cambia el otro si es necesario.',
            '**Intentar arreglar un prompt deficiente con deslizadores.** Una instrucción imprecisa a cualquier temperatura todavía produce outputs deficientes. Arregla primero el prompt.',
            '**Dar por hecho que todos los modelos siguen teniendo un control de temperatura.** Los modelos Claude actuales de Anthropic y los de razonamiento de OpenAI rechazan de plano los valores no predeterminados, y entre los que sí los aceptan el mismo número significa cosas distintas: temperatura 0.7 en Gemini 3.1 Pro no se siente como 0.7 en una compilación local de Llama. Prueba el modelo exacto que vas a llamar.',
            '**No probar suficientes ejecuciones.** Un output a temperatura 0.5 podría ser un valor atípico. Ejecuta al menos 3–5 veces para ver el comportamiento típico.',
            '**Poner temperatura en 0 y esperar precisión perfecta.** La temperatura baja reduce la aleatoriedad, pero no elimina las alucinaciones. Las alucinaciones provienen de lagunas en los datos de entrenamiento, no del muestreo aleatorio.',
            '**Ignorar por completo que tu proveedor puede ignorar el top-p.** Algunos modelos lo hacen; otros no. Revisa la documentación para evitar desperdiciar tiempo ajustando un dial deshabilitado.',
          ],
        },

        howToStart: {
          title: 'Cómo configurar temperatura y top-p para tu tarea',
          numberedItems: [
            '**Empieza por el prompt, no por los parámetros:** Escribe y refina tus instrucciones hasta que sean claras. Los parámetros no pueden arreglar un prompt vago — solo afectan la distribución de muestreo, no la comprensión de la tarea por parte del modelo.',
            '**Identifica el tipo de tarea:** Tareas factuales o analíticas (análisis legal, revisión de código, extracción de datos) → establece temperatura 0.0–0.3. Tareas creativas o generativas (brainstorming, copy publicitario, ideas para historias) → establece temperatura 0.7–1.0.',
            '**Deja top-p en su valor predeterminado (0.9–1.0):** Ajusta top-p solo si tienes una razón específica. Cambiar temperatura y top-p simultáneamente dificulta diagnosticar qué ajuste modificó el output.',
            '**Ejecuta 3–5 prompts de prueba con tu temperatura objetivo:** Evalúa la consistencia del output. Si los outputs varían demasiado en una tarea factual, baja la temperatura. Si los outputs se sienten repetitivos en una tarea creativa, sube la temperatura.',
            '**Documenta tus ajustes calibrados por caso de uso:** Una vez que encuentres la temperatura correcta para un flujo de trabajo específico, regístrala en tu plantilla de prompt de sistema para que se aplique de forma consistente en todas las sesiones.',
          ],
        },

        faqs: {
          faqs: [
            { q: '¿Debo ajustar primero la temperatura o el top-p?', a: 'La temperatura. Tiene un efecto más obvio. Mantén el top-p en un valor predeterminado (0.9–1.0) hasta que tengas una idea de lo que la temperatura hace para tu tarea, luego ajusta el top-p solo si es necesario.' },
            { q: '¿Por qué un modelo ignora mi configuración de temperatura?', a: 'Normalmente no la ignora: la rechaza. Los modelos Claude actuales de Anthropic y los modelos de razonamiento de OpenAI devuelven un error 400 cuando la temperatura o el top-p difieren del valor predeterminado, y algunas configuraciones antiguas limitan en silencio un parámetro cuando el otro se establece de forma explícita. Revisa la documentación de tu proveedor y lee una petición fallida como un rechazo, no como un ajuste sin efecto.' },
            { q: '¿Puedo establecer la temperatura en 0 para garantizar la corrección?', a: 'No. Temperatura 0.0 significa "elegir siempre la palabra más probable", lo que es casi determinista pero no siempre correcto. Las alucinaciones tratan de lagunas en los datos de entrenamiento y claridad de la tarea, no del muestreo aleatorio. Combina temperatura baja con prompts claros y grounding para mejor fiabilidad.' },
            { q: '¿Por qué sigo viendo alucinaciones con temperatura baja?', a: 'Las alucinaciones ocurren cuando los datos de entrenamiento del modelo tienen lagunas o la tarea es ambigua — no solo por el muestreo aleatorio. Una configuración de temperatura baja será consistente en sus alucinaciones, pero no las eliminará. Usa RAG o restricciones de fuente explícitas para reducirlas.' },
            { q: '¿Difieren las configuraciones recomendadas entre GPT-5.6, Claude Opus 5 y Gemini 3.1 Pro?', a: 'Más que ligeramente: uno de ellos ya no admite el ajuste. Claude Opus 5 (igual que Claude Sonnet 5 y Claude Fable 5) rechaza de plano cualquier temperatura o top-p distinto del predeterminado. Gemini 3.1 Pro sigue exponiendo ambos mediante generationConfig y se comporta bien entre 0.5 y 0.7. GPT-5.6 acepta todo el rango en sus endpoints sin razonamiento, pero rechaza valores no predeterminados en modo razonamiento. Prueba el modelo y el modo exactos que vas a llamar.' },
            { q: '¿Cuántas ejecuciones necesito para comparar configuraciones de forma justa?', a: 'Al menos 3–5 por configuración para ver el comportamiento típico. Más si trabajas con temperaturas más altas donde la varianza del output es alta.' },
            { q: '¿Qué hago si mi modelo rechaza el parámetro de temperatura?', a: 'Dirige con el prompt. Donde habrías bajado la temperatura, pide una única respuesta canónica en un formato de salida exacto; donde la habrías subido, pide explícitamente varias alternativas claramente distintas. Si el proveedor expone un control de esfuerzo de razonamiento, ese es el ajuste que sustituye a la temperatura. Los modelos Claude actuales de Anthropic y los de razonamiento de OpenAI devuelven un error en lugar de ignorar el valor en silencio.' },
          ],
        },

        relatedReading: {
          content: [
            '[¿Qué es el Prompt Engineering?](/es/prompt-engineering/what-is-prompt-engineering) — por qué la estructura del prompt importa más que los parámetros',
            '[Los 5 bloques de construcción que todo prompt necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — cómo estructurar los prompts antes de ajustar los parámetros',
            '[Alucinaciones de IA: Por qué la IA inventa cosas](/es/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — por qué la temperatura más baja no elimina las alucinaciones',
          ],
        },

        sources: {
          content: [
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) — rangos y valores predeterminados oficiales de temperature y top_p',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — investigación sobre nucleus sampling (top-p) y sus efectos en la calidad del texto',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) — enumera los modelos Claude que rechazan valores no predeterminados de temperature, top_p y top_k',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) — configuración de generación de Gemini, incluida temperature',
          ],
        },
      },
    },

    ar: {
      theme: 'Fundamentals',
      heroImage: '/images/temperature-and-top-p-overview-hero-ar.webp',
      title: 'درجة الحرارة و⁨Top-P⁩: تحكّم في إبداع الذكاء الاصطناعي',
      intro: 'تتحكم درجة الحرارة وTop-P في مدى المجازفة أو التحفظ في اختيار الكلمات لدى الذكاء الاصطناعي. بضبط هذين المعاملَين، توازن بين الإبداع والموثوقية — فالقيم المرتفعة تُنتج مخرجات مفاجئة ومتنوعة، بينما تُنتج القيم المنخفضة مخرجات آمنة ومتوقعة.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      seoTitle: '⁨Temperature⁩ و⁨Top-P 2026⁩: اضبط الإبداع والدقة',
      metaDescription: '⁨Temperature⁩ من ⁨0⁩ إلى ⁨2⁩ و⁨Top-P⁩ من ⁨0.1⁩ إلى ⁨1.0⁩: تحكم في عشوائية ⁨LLMs⁩ للكود والملخصات والعصف الذهني. نطاقات مُختبرة على ⁨ChatGPT⁩ و⁨Claude⁩ و⁨Gemini⁩.',
      readTime: '١٠ دقائق للقراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: 'أخذ العينات بدرجة الحرارة وTop-P',
      leadAnswerBlock: 'تتحكم درجة الحرارة في مدى عشوائية اختيارات النموذج للكلمات: 0.0 شبه حتمية، و1.0 فأكثر إبداعية. أما top-p فيحدّد عدد الكلمات المرشّحة التي تبقى قيد الاعتبار في كل خطوة. عمليًا، اضبط درجة الحرارة وحدها واترك top-p على قيمته الافتراضية 0.9–1.0.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'درجة الحرارة وTop-P: تحكّم في إبداع الذكاء الاصطناعي',
        description: 'تعلّم كيف تتحكم درجة الحرارة وTop-P في عشوائية الذكاء الاصطناعي. إعدادات عملية للترميز والملخصات والعصف الذهني والتوازن بين الإبداع والموثوقية.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'ar',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        keywords: ['درجة الحرارة', 'top-p', 'nucleus sampling', 'عشوائية الذكاء الاصطناعي', 'إعداد LLM', 'الإبداع', 'GPT-5.6', 'Claude', 'Gemini'],
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'يتناول العرض التقديمي: كيف تتحكم درجة الحرارة في عينات الاحتمالية (النطاق 0.0–2.0)، وكيف يحدّ nucleus sampling لـ top-p من اختيار الرموز، وإعدادات محددة لستة حالات استخدام (كود، إبداعي، واقعي، محادثة) وجدول مرجعي سريع. نزّل PDF كبطاقة مرجعية لمعاملات درجة الحرارة وTop-P.',
      sections: {
        definition: {
          title: 'ما هما درجة الحرارة وTop-P؟',
          snippets: [
            { type: 'in-one-sentence', text: 'تتحكم درجة الحرارة في حِدّة توزيع الاحتمالات لدى النموذج — فالقيم المنخفضة تنتج مخرجات حتمية والقيم المرتفعة تزيد العشوائية — بينما يقصر Top-P أخذ العينات على أصغر مجموعة رموز يبلغ مجموع احتمالاتها p.' },
            { type: 'in-plain-terms', text: 'درجة الحرارة هي مقبض الإبداع: اخفضها إلى 0 لإجابات ثابتة ومتوقعة، وارفعها لإجابات مفاجئة. أما Top-P فرافعة أخرى للفكرة نفسها: فبدل تسطيح الاحتمالات، يرفض ببساطة النظر في ذيل الكلمات غير المرجّحة.' },
          ],
          content: [
            '**درجة الحرارة هي مقبض يجعل مخرجات النموذج أكثر عشوائية (مرتفعة) أو أكثر حتمية (منخفضة).** عند درجة الحرارة 0.0، يختار النموذج دائمًا الكلمة التالية الأكثر احتمالًا — لذا تكون عمليات التشغيل المتكررة شبه متطابقة، رغم أن اختلافات الفاصلة العائمة والعتاد قد تغيّر بعض الرموز. عند درجة الحرارة 1.0 فأكثر، يأخذ النموذج في الاعتبار بدائل أكثر جرأة، منتجًا نصًا مفاجئًا ومتنوعًا.',
            '**Top-P (nucleus sampling) يتحكم في عدد خيارات الكلمات المحتملة التي يأخذها النموذج بعين الاعتبار في كل خطوة.** بدلًا من "ما مدى العشوائية"، فكّر فيه كـ "كم عدد الخيارات المعقولة". مع top-p 0.1، يأخذ النموذج في الحسبان الخيارات ذات الاحتمالية الأعلى فحسب حتى تصل إلى 10% من الاحتمالية التراكمية — ضيق وآمن. مع top-p 0.9، يأخذ في الحسبان مجموعة أوسع بكثير من الكلمات الممكنة — أحرّ وأكثر تنوعًا.',
            'بعبارات بسيطة: تتحكم درجة الحرارة في "مستوى المجازفة"، وTop-P يتحكم في "عدد الخيارات المتاحة للاعتبار". كلاهما يؤثر على تنوع المخرجات، لكن بطرق مختلفة.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'يعمل مع النماذج المحلية',
              text: 'إعدادات درجة الحرارة وTop-P متاحة في جميع [أدوات LLM المحلية](https://www.promptquorum.com/local-llms). نفس المعاملات، نفس التأثير.'
            }
          ],
        },

        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            '**تتحكم درجة الحرارة في العشوائية مباشرةً:** 0.0–0.3 للحتمية، 0.4–0.7 للتوازن، 0.8+ للإبداع.',
            '**Top-P يتحكم في نطاق خيارات الكلمات:** القيم المنخفضة تقلّص الخيارات، والمرتفعة توسّعها.',
            '**يجب على معظم المستخدمين ضبط أحدهما والإبقاء على الآخر عند قيمته الافتراضية.** ضبط كليهما في آنٍ واحد يجعل من المستحيل معرفة أيٍّ من الإعدادات أفاد.',
            '**تصميم الطلب لا يزال أهم من ضبط الأشرطة.** صحّح أولًا التعليمات المبهمة، ثم اضبط المعاملات إذا لزم.',
            '**تتطلب حالات الاستخدام المختلفة إعدادات مختلفة:** الكود يتطلب درجة حرارة منخفضة، والعصف الذهني يكافئ القيم المرتفعة.',
            '**تأكد من وجود المقبض قبل أن تضبطه:** نماذج Claude الحالية من Anthropic ونماذج الاستدلال من OpenAI ترفض بخطأ أي قيمة لدرجة الحرارة أو top-p تختلف عن الافتراضية.',
          ],
        },

        promptExample: {
          title: 'بنية الطلب + إعدادات درجة الحرارة',
          content: [
            '[طلب سيئ] "اكتب شيئًا إبداعيًا عن الخريف."',
            '[طلب جيد] "اكتب وصفًا استعاريًا من 100 كلمة للخريف كما لو كنت شاعرًا. درجة الحرارة: 0.9، top-p: 0.95."',
          ],
        },

        notation: {
          title: 'التدوين الرياضي',
          content: [
            'نطاق درجة الحرارة: T ∈ [0.0, 2.0]',
            'Softmax مع درجة الحرارة: softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'عينة top-p: Σ P(token_i) حتى ≥ p، ثم أخذ العينات من تلك المجموعة',
          ],
        },

        behavior: {
          title: 'كيف تُغيّران سلوك الذكاء الاصطناعي',
          content: [
            '**تأثيرات درجة الحرارة:**',
          ],
        },

        tempTable: {
          columns: ['نطاق درجة الحرارة', 'السلوك', 'الأنسب لـ'],
          rows: [
            { 'نطاق درجة الحرارة': 'منخفض (0.0–0.3)', 'السلوك': 'مركّز، متكرر، مستقر جدًا', 'الأنسب لـ': 'المهام التي تتطلب نفس الإجابة في كل مرة؛ خطر الحلقات' },
            { 'نطاق درجة الحرارة': 'متوسط (0.4–0.7)', 'السلوك': 'استقرار وتنوع متوازنان', 'الأنسب لـ': 'معظم المهام العامة؛ نقطة البداية الموصى بها' },
            { 'نطاق درجة الحرارة': 'مرتفع (0.8–1.0+)', 'السلوك': 'إبداعي، متنوع، مفاجئ', 'الأنسب لـ': 'العصف الذهني والتنويعات؛ خطر الهلوسة' },
          ],
        },

        toppBehavior: {
          content: '**تأثيرات Top-P:** المنخفض (0.1–0.3) يُنشئ مجموعات خيارات ضيقة جدًا ومخرجات متحفظة جدًا. المتوسط (0.5–0.7) يوازن التنوع مع الاستقرار. المرتفع (0.8–1.0) يوسّع مجموعة الخيارات ويشجع على الإبداع، مشابهًا لدرجة الحرارة المرتفعة. **مهم:** يربط كثير من مزودي الخدمة هذه الإعدادات أو يقيّدونها. تتجاهل نماذج GPT من OpenAI في الغالب top-p إذا تم تعيين درجة الحرارة صراحةً. أما في نماذج Anthropic الحالية فكلا المعاملين مقفلان تمامًا على قيمهما الافتراضية (انظر أدناه). تحقق دائمًا من توثيق مزودك — نفس الأرقام لا تعني الشيء ذاته عبر جميع النماذج.',
        },


        providerLimits: {
          title: 'ليست كل النماذج تقبل قيمة لدرجة الحرارة بعد الآن',
          snippets: [
            { type: 'in-one-sentence', text: 'ترفض عدة نماذج متقدمة الآن أي قيمة لدرجة الحرارة أو top-p تختلف عن الافتراضية وتُرجع خطأ، لذا تحقق أولًا من أن المعامل ما زال موجودًا.' },
            { type: 'in-plain-terms', text: 'في بعض أحدث النماذج اختفت المقابض تمامًا. إذا فشل طلبك فهذا يعني أن الإعداد رُفض، لا أنه تم تجاهله.' },
          ],
          content: [
            '**عدد متزايد من النماذج المتقدمة لم يعد يقبل أي قيمة لدرجة الحرارة أو top-p على الإطلاق — فهي تُرجع خطأ بدلًا من مخرجات معدَّلة.** النماذج العاملة بوضع الاستدلال تبني إجابتها عبر جولات داخلية متعددة من الصياغة والتحقق، ويقفل المزودون معاملات العينات حتى تبقى هذه العملية معايَرة. تحقق من وجود المقبض في النموذج الذي تستدعيه قبل أن تنفق وقتًا في ضبطه.',
            '**Anthropic:** في Claude Opus 5 وClaude Sonnet 5 وClaude Fable 5 (وكذلك Claude Opus 4.7 و4.8)، تؤدي أي قيمة غير افتراضية لـ temperature أو top_p أو top_k إلى خطأ 400 في كل طلب — وليس فقط عند تفعيل التفكير. أما في نماذج Claude الأقدم فيسري القيد أثناء التفكير فقط، ويُقبل فيه top_p بين 0.95 و1.0.',
            '**OpenAI:** ترفض عائلة GPT-5 في وضع الاستدلال القيم غير الافتراضية برسالة "Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported." أما النقاط الطرفية بدون استدلال فلا تزال تقبل النطاق الكامل من 0 إلى 2.',
            '**Google:** لا يزال Gemini يتيح temperature وtopP عبر generationConfig، لذا تنطبق النطاقات الواردة في هذا الدليل على نماذج Gemini مباشرةً.',
            '**النماذج المحلية:** تتيح Ollama وLM Studio وllama.cpp كلا المعاملين في كل نموذج، دون أي قفل من جهة المزود. إذا أردت أن تلمس الفرق بين 0.2 و0.9 على الطلب نفسه، فإن [النموذج المحلي](https://www.promptquorum.com/local-llms) هو أرخص مكان للاختبار.',
            'عندما تكون المعاملات مقفلة، توجّه النموذج عبر الطلب نفسه: اطلب إجابة واحدة قاطعة بصيغة مخرجات محددة بدقة حيث كنت ستخفض درجة الحرارة، واطلب صراحةً عدة بدائل مختلفة بوضوح حيث كنت سترفعها. وإذا وفّر المزود تحكمًا في مستوى جهد الاستدلال، فهذا هو الإعداد الذي حلّ محل درجة الحرارة.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'الرفض ليس انعدام أثر',
              text: 'من السهل قراءة الطلب المرفوض على أنه "الإعداد لم يُحدث فرقًا". لكن خطأ 400 يعني أن المعامل رُفض، أي أن التشغيل لم يحدث أصلًا بالقيمة التي اخترتها.'
            }
          ],
        },
        tradeoff: {
          title: 'درجة الحرارة مقابل Top-P: هل تحتاج إلى كليهما؟',
          content: '**كلا الإعدادين يتحكمان في العشوائية، لكن يجب على معظم المستخدمين ضبط واحد فقط والإبقاء على الآخر عند قيمة افتراضية معقولة.** تغيير كليهما في آنٍ واحد يجعل من المستحيل معرفة أيٍّ منهما أنتج التأثير المطلوب. من خبرة ضبط آلاف الطلبات: أبقِ على top-p عند قيمة افتراضية (مثلًا 0.9–1.0) واضبط درجة الحرارة فقط، ما لم يوصِ نموذج معين بغير ذلك.',
        },

        strategyTable: {
          columns: ['الاستراتيجية', 'درجة الحرارة', 'Top-P', 'متى تستخدمها'],
          rows: [
            { 'الاستراتيجية': 'الوضع الحتمي', 'درجة الحرارة': '0.0–0.2', 'Top-P': '1.0 (افتراضي)', 'متى تستخدمها': 'الكود، استخراج البيانات، المخرجات الحيوية' },
            { 'الاستراتيجية': 'الإعداد الافتراضي المتوازن', 'درجة الحرارة': '0.5–0.7', 'Top-P': '0.9–1.0', 'متى تستخدمها': 'معظم المهام العامة، الملخصات، الشرح' },
            { 'الاستراتيجية': 'إبداعي/عصف ذهني', 'درجة الحرارة': '0.8–1.0', 'Top-P': '0.9–1.0', 'متى تستخدمها': 'توليد الأفكار، نسخ التسويق، التنويعات، السرد القصصي' },
            { 'الاستراتيجية': 'إنتاج عالي الاستقرار', 'درجة الحرارة': '0.0–0.3', 'Top-P': '0.95', 'متى تستخدمها': 'الصحة، المالية، القانون، الحرجة للسلامة' },
          ],
        },

        useCases: {
          title: 'الإعدادات الموصى بها حسب حالة الاستخدام',
          items: [
            '**الترميز، إعادة الهيكلة، تصحيح الأخطاء:** درجة الحرارة 0.1–0.3، Top-P 0.95. يجب أن تكون بناء الجملة صحيحة، والإبداع مشتِّت. الإعدادات المنخفضة تمنع أسماء الدوال الهلوسية أو العيوب المنطقية.',
            '**الملخصات والشرح:** درجة الحرارة 0.4–0.6، Top-P 0.9. تريد الوضوح والاتساق، لكن بعض التنوع في الصياغة مقبول. درجة الحرارة المنخفضة جدًا قد تجعل الملخصات آلية.',
            '**العصف الذهني، نسخ التسويق، التنويعات الإبداعية:** درجة الحرارة 0.7–1.0، Top-P 1.0. الإعدادات المرتفعة تشجع على التوليفات غير المتوقعة والصياغات الجديدة. ستحتاج إلى تصفية مخرجات أكثر، لكنك تحصل على أفكار أكثر أصالة.',
            '**استخراج البيانات والمخرجات المنظمة:** درجة الحرارة 0.0–0.2، Top-P 0.95. يجب أن يكون التنسيق دقيقًا. العشوائية الأعلى تدعو إلى أخطاء في التحليل والحقول المفقودة.',
            '**كتابة النصوص الطويلة (مقالات، منشورات مدونة):** درجة الحرارة 0.6–0.8، Top-P 0.9–1.0. ابدأ هنا واضبط بناءً على الملاحظات. إذا بدت المخرجات عامة، ارفع درجة الحرارة؛ وإذا تشتّتت أو هلوست، اخفضها.',
            '**الأسئلة والأجوبة الواقعية (بدون ربط):** درجة الحرارة 0.3–0.5، Top-P 0.9. الإعدادات المعتدلة تقلل الهلوسات وتحافظ على طبيعية الإجابات.',
          ],
        },

        promptsAndParams: {
          title: 'كيف تعمل الطلبات والمعاملات معًا',
          content: [
            '**تصميم الطلب لا يزال أهم من ضبط الأشرطة.** تعليمة غير دقيقة عند درجة حرارة 0.2 لا تزال تُنتج إجابة رديئة — فقط إجابة رديئة متسقة. طلب واضح ومنظم جيدًا عند أي درجة حرارة يُنتج نتائج أفضل من طلب رديء بإعدادات مثالية.',
            'سير العمل الصحيح هو: (1) صُغ الطلب بمهمة واضحة وسياق وقيود وتنسيق مخرجات. (2) اختبر عند درجة حرارتك/top-p المستهدفة. (3) اضبط المقابض فقط عندما تحتاج إلى تنوع أكثر أو أقل بعد امتلاكك طلبًا متينًا.',
            'نفس الطلب عند درجات حرارة مختلفة يُنتج أساليب مختلفة جدًا. عند درجة الحرارة 0.2، المخرجات آمنة ومباشرة. عند درجة الحرارة 0.8، المخرجات إبداعية وشاعرية. لا شيء منهما "أفضل" — يعتمد على صوت علامتك التجارية وحالة استخدامك.',
          ],
        },

        example: {
          title: '[مثال على الطلب]',
          blockquote: `اكتب شعارًا قصيرًا وموجزًا لتطبيق إنتاجية. احتفظ به أقل من 10 كلمات.`,
        },

        lowTemp: {
          title: 'عند درجة الحرارة 0.2:',
          blockquote: `"أنجز أكثر في وقت أقل."`,
        },

        highTemp: {
          title: 'عند درجة الحرارة 0.8:',
          blockquote: `"من الفوضى إلى الوضوح: حيث تتحول اللحظات إلى زخم."`,
        },

        risk: {
          title: 'متى يصبح الإبداع المتزايد خطرًا',
          content: [
            '**القيم المرتفعة لدرجة الحرارة وTop-P تزيد الهلوسات والانحرافات خارج الموضوع وانجراف الأسلوب — خاصة في المهام الواقعية.** كن محافظًا (درجة الحرارة 0.0–0.5) لـ: الكود الذي يذهب إلى الإنتاج (APIs الهلوسية تُعطّل الأنظمة)، والنصائح الطبية (المعلومات الخاطئة تضر)، والشؤون المالية والقانونية (الدقة إلزامية)، والقرارات الحرجة للسلامة (الأخطاء لها عواقب).',
            'بالنسبة للمهام المبنية على الحقائق، فكّر في الجمع بين درجة الحرارة المنخفضة وRAG أو قيود المصدر الصريحة لتقليل الأخطاء أكثر.',
          ],
        },

        promptquorum: {
          title: 'كيف يساعدك PromptQuorum في ضبط درجة الحرارة وTop-P',
          content: [
            'عادةً، اختبار إعدادات درجة الحرارة وTop-P يعني تشغيل نفس الطلب مرات عديدة عبر نماذج متعددة، مع تسجيل المخرجات ومقارنتها يدويًا — مضنٍ وصعب التتبع. PromptQuorum يُبسّط هذه العملية.',
            '**مقارنات متعددة النماذج:** أرسل طلبًا بإعدادات درجة حرارة/top-p مختلفة إلى أكثر من 25 نموذجًا مما يقبلها (Gemini 3.1 Pro، نقاط GPT-5.6 الطرفية بدون استدلال، Mistral، نماذج Ollama المحلية) في إرسال واحد. شاهد فورًا أيٌّ من النماذج يبقى مستقرًا عند درجة حرارة أعلى وأيٌّها يُنتج أفضل مخرجات إبداعية عند إعدادك المستهدف.',
            '**الإجماع والتسجيل:** شاهد جميع المخرجات جنبًا إلى جنب مع تحليل Quorum الذي يُقيّم خطر الهلوسة واتساق الأسلوب والملاءمة. اختر التوليفة النموذج + الإعداد الأنسب لتوازن الإبداع-الموثوقية في مهمتك.',
          ],
        },

        recipes: {
          title: 'وصفات البدء السريع',
          content: 'استخدمها كنقاط انطلاق لمهمتك:',
        },

        recipeSafe: {
          items: [
            '**وضع واقعي آمن:** درجة الحرارة 0.2، Top-P 0.95 | مثالي لـ Q&A، الملخصات، استخراج البيانات، المهام المبنية على الحقائق | المخرجات: موثوقة، متسقة، أدنى هلوسة',
            '**الوضع الافتراضي المتوازن:** درجة الحرارة 0.5، Top-P 0.9 | مثالي لمعظم المهام العامة، الشرح، الكتابة العامة | المخرجات: طبيعية، مستقرة، مع بعض التنوع',
            '**وضع العصف الذهني الإبداعي:** درجة الحرارة 0.8، Top-P 1.0 | مثالي لتوليد الأفكار، نسخ التسويق، السرد القصصي، التنويعات | المخرجات: متنوعة، مفاجئة، خيارات كثيرة للتصفية',
            '**وضع الإجابة المختصرة:** درجة الحرارة 0.3، Top-P 0.95 | مثالي للإجابات المباشرة، القرارات السريعة، المخرجات الموجزة | المخرجات: سريعة، مباشرة، توسّع أدنى',
            '**الوضع التجريبي:** درجة الحرارة 1.0، Top-P 1.0 | مثالي لاستكشاف سلوك النموذج، فهم الحدود، البحث | المخرجات: غير متوقعة، أقصى تنوع',
          ],
        },

        mistakes: {
          title: 'الأخطاء الشائعة مع درجة الحرارة وTop-P',
          items: [
            '**ضبط كليهما على الحد الأقصى وتوقّع الموثوقية.** درجة حرارة مرتفعة + top-p مرتفع = أقصى عشوائية. افعل هذا فقط إذا كنت تقوم بعصف ذهني أو تجارب.',
            '**تغيير كلا المقبضين في آنٍ واحد.** لن تعرف أيٌّ من الإعدادات أفاد أو أضر. غيّر واحدًا، لاحظ، ثم غيّر الآخر إذا لزم.',
            '**محاولة إصلاح طلب رديء بالأشرطة.** تعليمة غير دقيقة عند أي درجة حرارة لا تزال تُنتج مخرجات رديئة. أصلح الطلب أولًا.',
            '**افتراض أن كل نموذج لا يزال لديه مقبض لدرجة الحرارة.** نماذج Claude الحالية من Anthropic ونماذج الاستدلال من OpenAI ترفض القيم غير الافتراضية رفضًا تامًا، وحتى بين النماذج التي تقبلها لا يعني الرقم نفسه الشيء ذاته — فدرجة الحرارة 0.7 على Gemini 3.1 Pro ليست كـ 0.7 على بناء Llama محلي. اختبر النموذج الذي تستدعيه بالضبط.',
            '**عدم اختبار عدد كافٍ من التشغيلات.** مخرجة واحدة عند درجة الحرارة 0.5 قد تكون قيمة شاذة. شغّل على الأقل 3–5 مرات لرؤية السلوك النموذجي.',
            '**ضبط درجة الحرارة على 0 وتوقّع الدقة المثالية.** درجة الحرارة المنخفضة تقلل العشوائية، لكنها لا تلغي الهلوسات. الهلوسات تأتي من ثغرات في بيانات التدريب، وليس من العينات العشوائية.',
            '**تجاهل كليًا أن مزودك قد يتجاهل top-p.** بعض النماذج تفعل ذلك؛ وبعضها لا. راجع التوثيق لتجنّب إضاعة الوقت في ضبط مقبض معطّل.',
          ],
        },

        howToStart: {
          title: 'كيف تضبط درجة الحرارة وTop-P لمهمتك',
          numberedItems: [
            '**ابدأ بالطلب لا بالمعاملات:** اكتب تعليماتك ونقّحها حتى تصبح واضحة. لا يمكن للمعاملات إصلاح طلب غامض — فهي تؤثر فقط على توزيع أخذ العينات، لا على فهم النموذج للمهمة.',
            '**حدّد نوع مهمتك:** المهام الواقعية أو التحليلية (التحليل القانوني، مراجعة الكود، استخراج البيانات) ← اضبط درجة الحرارة على 0.0–0.3. المهام الإبداعية أو التوليدية (العصف الذهني، كتابة الإعلانات، أفكار القصص) ← اضبط درجة الحرارة على 0.7–1.0.',
            '**اترك Top-P عند قيمته الافتراضية (0.9–1.0):** لا تعدّل Top-P إلا إذا كان لديك سبب محدد. تعديل درجة الحرارة وTop-P في آنٍ واحد يجعل تشخيص الإعداد الذي غيّر المخرجات أصعب.',
            '**شغّل 3–5 طلبات اختبار عند درجة حرارتك المستهدفة:** قيّم اتساق المخرجات. إذا تفاوتت المخرجات كثيرًا في مهمة واقعية، اخفض درجة الحرارة. إذا شعرت أن المخرجات مكررة في مهمة إبداعية، ارفع درجة الحرارة.',
            '**وثّق إعداداتك المعايرة لكل حالة استخدام:** بمجرد أن تجد درجة الحرارة الصحيحة لسير عمل معين، سجّلها في قالب طلب النظام الخاص بك لتُطبَّق باستمرار عبر الجلسات.',
          ],
        },

        faqs: {
          faqs: [
            { q: 'هل يجب أن أضبط درجة الحرارة أولًا أم Top-P؟', a: 'درجة الحرارة. لها تأثير أوضح. أبقِ على top-p عند قيمة افتراضية (0.9–1.0) حتى تتضح لك تأثيرات درجة الحرارة على مهمتك، ثم اضبط top-p إذا لزم.' },
            { q: 'لماذا يتجاهل نموذجٌ ما إعداد درجة الحرارة الخاص بي؟', a: 'في الغالب هو لا يتجاهله بل يرفضه. نماذج Claude الحالية من Anthropic ونماذج الاستدلال من OpenAI تُرجع خطأ 400 عند ضبط درجة الحرارة أو top-p على قيمة غير افتراضية، وبعض الإعدادات الأقدم تقيّد أحد المعاملين بصمت عند ضبط الآخر صراحةً. راجع توثيق مزودك، واقرأ الطلب الفاشل على أنه رفض لا على أنه إعداد بلا أثر.' },
            { q: 'هل يمكنني ضبط درجة الحرارة على 0 لضمان الصحة؟', a: 'لا. درجة الحرارة 0.0 تعني "اختر دائمًا الكلمة الأكثر احتمالًا"، وهو شبه حتمي لكنه ليس دائمًا صحيحًا. الهلوسات تتعلق بثغرات في بيانات التدريب ووضوح المهمة، وليس بالعينات العشوائية. ادمج درجة الحرارة المنخفضة مع طلبات واضحة وربط بمصادر للحصول على موثوقية أفضل.' },
            { q: 'لماذا لا أزال أرى هلوسات مع درجة الحرارة المنخفضة؟', a: 'تحدث الهلوسات عندما تكون لدى بيانات تدريب النموذج ثغرات أو المهمة غامضة — وليس فقط بسبب العينات العشوائية. إعداد درجة الحرارة المنخفض سيكون متسقًا في هلوساته، لكنه لن يلغيها. استخدم RAG أو قيود مصدر صريحة لتقليلها.' },
            { q: 'هل تختلف الإعدادات الموصى بها بين GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro؟', a: 'الفرق أكبر من "قليلًا" — أحدها لم يعد يقبل الإعداد أصلًا. يرفض Claude Opus 5 (وكذلك Claude Sonnet 5 وClaude Fable 5) أي درجة حرارة أو top-p غير افتراضية رفضًا تامًا. أما Gemini 3.1 Pro فلا يزال يتيح كليهما عبر generationConfig ويتصرف بشكل جيد بين 0.5 و0.7. ويقبل GPT-5.6 النطاق الكامل على نقاطه الطرفية بدون استدلال، لكنه يرفض القيم غير الافتراضية في وضع الاستدلال. اختبر النموذج والوضع اللذين تستدعيهما بالضبط.' },
            { q: 'كم عدد التشغيلات الذي أحتاجه لمقارنة الإعدادات بشكل عادل؟', a: 'على الأقل 3–5 لكل إعداد لرؤية السلوك النموذجي. أكثر إذا كنت تعمل بدرجات حرارة مرتفعة حيث يكون التباين في المخرجات عاليًا.' },
            { q: 'ماذا أفعل إذا رفض نموذجي معامل درجة الحرارة؟', a: 'وجّه النموذج عبر الطلب بدلًا من ذلك. حيث كنت ستخفض درجة الحرارة، اطلب إجابة واحدة قاطعة بصيغة مخرجات محددة بدقة؛ وحيث كنت سترفعها، اطلب صراحةً عدة بدائل مختلفة بوضوح. وإذا أتاح المزود تحكمًا في مستوى جهد الاستدلال، فهذا هو الإعداد الذي يحل محل درجة الحرارة. نماذج Claude الحالية من Anthropic ونماذج الاستدلال من OpenAI تُرجع خطأ بدل تجاهل القيمة بصمت.' },
          ],
        },

        relatedReading: {
          content: [
            '[ما هو هندسة الطلبات؟](/ar/prompt-engineering/what-is-prompt-engineering) — لماذا تهم بنية الطلب أكثر من المعاملات',
            '[عناصر البناء الخمسة التي يحتاجها كل طلب](/ar/prompt-engineering/5-building-blocks-every-prompt-needs) — كيف تبني الطلبات قبل ضبط المعاملات',
            '[هلوسات الذكاء الاصطناعي: لماذا يخترع الذكاء الاصطناعي الأشياء](/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — لماذا لا تلغي درجة الحرارة المنخفضة الهلوسات',
          ],
        },

        sources: {
          content: [
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) — النطاقات والقيم الافتراضية الرسمية لـ temperature وtop_p',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — بحث حول nucleus sampling (top-p) وتأثيره على جودة النص',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) — يسرد نماذج Claude التي ترفض القيم غير الافتراضية لـ temperature وtop_p وtop_k',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) — إعدادات التوليد في Gemini بما فيها temperature',
          ],
        },
      },
    },

    pt: {
      theme: 'Fundamentals',
      heroImage: '/images/temperature-and-top-p-overview-hero-pt.webp',
      title: 'Temperatura e Top-P: Controle a Criatividade da IA',
      intro: 'Temperatura e top-p controlam quão aventureiras ou conservadoras são as escolhas de palavras da IA. Ajustando esses parâmetros, você equilibra criatividade versus confiabilidade — valores mais altos produzem saídas surpreendentes e variadas; valores mais baixos produzem saídas seguras e previsíveis.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      seoTitle: 'Temperatura e Top-P 2026: ajuste criatividade e precisão',
      metaDescription: 'Temperatura 0–2 e Top-P 0,1–1,0: defina criatividade e precisão da IA. Guia prático com valores ideais para escrita criativa, código e chat.',
      readTime: '9 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Amostragem por Temperatura e Top-P',
      leadAnswerBlock: 'A temperatura controla o quanto as escolhas de palavras do modelo são aleatórias: 0,0 é quase determinístico, 1,0 ou mais é criativo. O top-p limita quantas palavras candidatas continuam em jogo a cada passo. Na prática, ajuste apenas a temperatura e deixe o top-p no padrão de 0,9–1,0.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperatura e Top-P: Controle a Criatividade da IA',
        description: 'Temperatura e top-p controlam a aleatoriedade das saídas de LLM. Aprenda os valores ideais para cada caso de uso e como ajustar esses parâmetros.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'pt-BR',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['temperatura IA', 'top-p', 'amostragem nucleus', 'prompt engineering', 'criatividade IA', 'PromptQuorum'],
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'O deck de slides a seguir aborda: como a temperatura controla a amostragem de probabilidade (faixa 0,0–2,0), como a amostragem nucleus do top-p limita a seleção de tokens, configurações específicas para 6 casos de uso (código, criativo, factual, chat) e uma tabela de referência rápida. Baixe o PDF como cartão de referência dos parâmetros de temperatura e top-p.',
      sections: {
        definition: {
          title: 'O que são Temperatura e Top-P?',
          snippets: [
            { type: 'in-one-sentence', text: 'A temperatura controla o quão acentuada é a distribuição de probabilidade do modelo — valores baixos produzem saídas determinísticas, valores altos aumentam a aleatoriedade — enquanto o top-p limita a amostragem ao menor conjunto de tokens cujas probabilidades somam p.' },
            { type: 'in-plain-terms', text: 'A temperatura é o botão de criatividade. Baixe para 0 e você tem respostas consistentes e previsíveis; aumente e elas ficam surpreendentes. O top-p é outra alavanca sobre a mesma ideia: em vez de achatar as probabilidades, ele simplesmente se recusa a considerar a cauda de palavras improváveis.' },
          ],
          content: [
            '**Temperatura é um controle que torna a saída do modelo mais aleatória (valores altos) ou mais determinística (valores baixos).** Na temperatura 0,0, o modelo sempre escolhe a próxima palavra mais provável — então execuções repetidas ficam quase idênticas, embora variações de ponto flutuante e de hardware ainda possam alterar um token ou outro. Na temperatura 1,0 ou acima, o modelo considera alternativas mais arriscadas, produzindo textos surpreendentes e variados.',
            '**Top-p (nucleus sampling) controla quantas opções de palavras prováveis o modelo considera em cada passo.** Em vez de "quão aleatório", pense em "quantas escolhas plausíveis". Com top-p 0,1, o modelo considera apenas as opções do topo até somarem 10% da probabilidade acumulada — estreito e seguro. Com top-p 0,9, ele considera um conjunto muito mais amplo de palavras possíveis — mais solto e mais variado.',
            'Em termos simples: a temperatura controla "quão ousado", e o top-p controla "quantas opções considerar". Ambos afetam a variedade da saída, mas de formas diferentes.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Funciona com modelos locais',
              text: 'As configurações de temperatura e top-p estão disponíveis em todas as [ferramentas de LLM local](https://www.promptquorum.com/local-llms). Mesmos parâmetros, mesmo efeito.'
            }
          ],
        },

        tldr: {
          title: 'Principais Conclusões',
          isTldr: true,
          items: [
            '**A temperatura controla a aleatoriedade diretamente:** 0,0–0,3 para saídas determinísticas, 0,4–0,7 para equilíbrio, 0,8 ou mais para criatividade.',
            '**O top-p controla a amplitude das opções de palavras:** valores baixos estreitam as escolhas, valores altos as ampliam.',
            '**A maioria dos usuários deve ajustar um e manter o outro no padrão.** Mexer nos dois ao mesmo tempo torna impossível saber qual deles ajudou.',
            '**Temperatura 0 não é 100% determinística** — variações de hardware e de ponto flutuante ainda podem alterar um token. É o mais próximo que dá para chegar, não uma garantia.',
            '**O design do prompt ainda pesa mais do que os controles.** Corrija instruções vagas primeiro, depois ajuste os parâmetros se ainda for necessário.',
            '**Confirme que o controle existe antes de ajustá-lo:** os modelos Claude atuais da Anthropic e os modelos de raciocínio da OpenAI rejeitam com erro qualquer temperatura ou top-p fora do padrão.',
          ],
        },

        promptExample: {
          title: 'Estrutura do Prompt + Configurações de Temperatura',
          content: [
            '[Prompt ruim] "Escreva algo criativo sobre o outono."',
            '[Prompt bom] "Escreva uma descrição metafórica de 100 palavras sobre o outono como se você fosse um poeta. Temperatura: 0,9, top-p: 0,95."',
          ],
        },

        notation: {
          title: 'Notação Matemática',
          content: [
            'Faixa de temperatura: T ∈ [0.0, 2.0]',
            'Softmax com temperatura: softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Amostragem top-p: Σ P(token_i) até ≥ p, depois amostra desse conjunto',
          ],
        },

        behavior: {
          title: 'Como Elas Mudam o Comportamento da IA',
          content: [
            '**Efeitos da temperatura:**',
          ],
        },

        tempTable: {
          title: 'Valores de Temperatura por Caso de Uso',
          tableFormat: true,
          columns: ['Faixa de Temperatura', 'Comportamento', 'Melhor para'],
          rows: [
            { 'Faixa de Temperatura': '0,0 – 0,3', 'Comportamento': 'Determinístico, conservador, previsível', 'Melhor para': 'Perguntas factuais, extração de dados, classificação, código de produção' },
            { 'Faixa de Temperatura': '0,3 – 0,7', 'Comportamento': 'Balanceado, ligeiramente variável', 'Melhor para': 'Resumo, resposta a e-mail, resposta geral de chatbot' },
            { 'Faixa de Temperatura': '0,7 – 1,2', 'Comportamento': 'Criativo, variado, menos previsível', 'Melhor para': 'Brainstorming, geração de ideias, escrita criativa, diálogo de personagem' },
            { 'Faixa de Temperatura': '1,2 – 2,0', 'Comportamento': 'Altamente aleatório, experimental', 'Melhor para': 'Ficção experimental, poesia, exploração criativa extrema. Use com cautela.' },
          ],
        },

        toppBehavior: {
          content: '**Efeitos do top-p:** Baixo (0,1–0,3) cria conjuntos de opções muito estreitos e saídas altamente conservadoras. Médio (0,5–0,7) equilibra diversidade com estabilidade. Alto (0,8–1,0) amplia o conjunto de opções e incentiva a criatividade, de forma semelhante à temperatura alta. **Importante:** muitos provedores vinculam ou limitam essas configurações. Os modelos GPT da OpenAI costumam ignorar o top-p quando a temperatura é definida explicitamente. Já nos modelos atuais da Anthropic, os dois parâmetros ficam travados nos valores padrão (veja abaixo). Sempre verifique a documentação do seu provedor — os mesmos números não significam a mesma coisa em todos os modelos.',
        },


        providerLimits: {
          title: 'Nem Todo Modelo Ainda Aceita um Valor de Temperatura',
          snippets: [
            { type: 'in-one-sentence', text: 'Vários modelos de fronteira agora rejeitam com erro qualquer temperatura ou top-p fora do padrão, então confirme se o parâmetro ainda existe antes de ajustá-lo.' },
            { type: 'in-plain-terms', text: 'Em alguns dos modelos mais novos os controles simplesmente sumiram. Se a sua requisição falhar, o ajuste foi recusado — não ignorado.' },
          ],
          content: [
            '**Um número crescente de modelos de fronteira não aceita mais nenhum valor de temperatura ou top-p: eles retornam um erro em vez de uma saída ajustada.** Modelos em modo de raciocínio constroem a resposta em várias rodadas internas de rascunho e verificação, e os provedores travam os parâmetros de amostragem para manter esse processo calibrado. Confirme se o controle ainda existe no modelo que você vai chamar antes de gastar tempo ajustando.',
            '**Anthropic:** no Claude Opus 5, Claude Sonnet 5 e Claude Fable 5 (e no Claude Opus 4.7 e 4.8), um valor de temperature, top_p ou top_k diferente do padrão retorna erro 400 em toda requisição — não apenas quando o raciocínio está ligado. Em modelos Claude mais antigos a restrição vale só enquanto o raciocínio está ativo, e nesse caso top_p é aceito entre 0,95 e 1,0.',
            '**OpenAI:** a família GPT-5 em modo de raciocínio recusa valores fora do padrão com "Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported." Os endpoints sem raciocínio continuam aceitando a faixa completa de 0 a 2.',
            '**Google:** o Gemini continua expondo temperature e topP pelo generationConfig, então as faixas deste guia valem diretamente para os modelos Gemini.',
            '**Modelos locais:** Ollama, LM Studio e llama.cpp expõem os dois parâmetros em todos os modelos, sem trava do provedor. Se você quiser sentir a diferença entre 0,2 e 0,9 no mesmo prompt, um [modelo local](https://www.promptquorum.com/pt/local-llms) é o lugar mais barato para testar.',
            'Quando os parâmetros estão travados, você direciona pelo prompt: peça uma única resposta canônica em um formato de saída exato onde você teria baixado a temperatura, e peça explicitamente várias alternativas bem distintas onde você a teria aumentado. Se o provedor oferecer um controle de esforço de raciocínio, é esse ajuste que substituiu a temperatura.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Recusa não é efeito zero',
              text: 'É fácil ler uma requisição recusada como "o ajuste não fez nada". Um erro 400 significa que o parâmetro foi recusado, ou seja, a execução nunca aconteceu com o seu valor.'
            }
          ],
        },
        topPTable: {
          title: 'Valores de Top-P por Caso de Uso',
          tableFormat: true,
          columns: ['Valor de Top-P', 'Efeito', 'Melhor para'],
          rows: [
            { 'Valor de Top-P': '0,1 – 0,3', 'Efeito': 'Ultra-conservador — apenas as escolhas de palavras mais seguras', 'Melhor para': 'Conteúdo jurídico ou médico de alto risco onde segurança é crítica' },
            { 'Valor de Top-P': '0,7 – 0,9', 'Efeito': 'Padrão equilibrado — boa variedade sem incoerência', 'Melhor para': 'Chat de propósito geral, redação de negócios, respostas de suporte ao cliente' },
            { 'Valor de Top-P': '1,0', 'Efeito': 'Sem filtragem — todos os tokens são considerados', 'Melhor para': 'Geralmente não recomendado — aumenta o risco de saída sem sentido' },
          ],
        },

        tradeoff: {
          title: 'Temperatura vs Top-P: Você Precisa dos Dois?',
          content: '**Ambas as configurações controlam a aleatoriedade, mas a maioria dos usuários deve ajustar apenas uma e manter a outra em um valor padrão razoável.** Alterar as duas ao mesmo tempo torna impossível saber qual ajuste produziu o efeito desejado. Pela experiência de ajustar milhares de prompts: mantenha o top-p em um valor padrão (ex.: 0,9–1,0) e ajuste apenas a temperatura, a menos que um modelo específico recomende o contrário.',
        },

        strategyTable: {
          title: 'Estratégia Combinada: Temperatura + Top-P',
          tableFormat: true,
          columns: ['Estratégia', 'Temperatura', 'Top-P', 'Quando Usar'],
          rows: [
            { 'Estratégia': 'Modo determinístico', 'Temperatura': '0,0–0,2', 'Top-P': '1,0 (padrão)', 'Quando Usar': 'Código, extração de dados, saída de missão crítica' },
            { 'Estratégia': 'Padrão equilibrado', 'Temperatura': '0,5–0,7', 'Top-P': '0,9–1,0', 'Quando Usar': 'A maioria das tarefas gerais, resumos, explicações' },
            { 'Estratégia': 'Criativo/brainstorming', 'Temperatura': '0,8–1,0', 'Top-P': '0,9–1,0', 'Quando Usar': 'Ideação, copy de marketing, variações, storytelling' },
            { 'Estratégia': 'Produção de alta estabilidade', 'Temperatura': '0,0–0,3', 'Top-P': '0,95', 'Quando Usar': 'Saúde, finanças, jurídico, crítico para segurança' },
          ],
        },

        useCases: {
          title: 'Configurações Recomendadas por Caso de Uso',
          items: [
            '**Codificação, refatoração, correção de bugs:** Temperatura 0,1–0,3, top-p 0,95. A sintaxe precisa estar correta, a criatividade atrapalha. Configurações mais baixas evitam nomes de funções alucinados ou erros de lógica.',
            '**Resumos e explicações:** Temperatura 0,4–0,6, top-p 0,9. Você quer clareza e consistência, mas alguma variação na formulação é aceitável. Temperatura baixa pode deixar os resumos mecânicos.',
            '**Brainstorming, copy de marketing, variações criativas:** Temperatura 0,7–1,0, top-p 1,0. Configurações mais altas incentivam combinações inesperadas e formulações inéditas. Você vai precisar filtrar mais saídas, mas obterá ideias mais ousadas.',
            '**Extração de dados e saída estruturada:** Temperatura 0,0–0,2, top-p 0,95. O formato precisa ser exato. Maior aleatoriedade convida a erros de parsing e campos ausentes.',
            '**Escrita de textos longos (ensaios, posts de blog):** Temperatura 0,6–0,8, top-p 0,9–1,0. Comece aqui e ajuste com base no feedback. Se a saída parecer genérica, aumente a temperatura; se divagar ou alucinar, diminua.',
            '**Perguntas e respostas baseadas em fatos (sem grounding):** Temperatura 0,3–0,5, top-p 0,9. Configurações moderadas reduzem alucinações mantendo as respostas naturais.',
          ],
        },

        promptsAndParams: {
          title: 'Como Prompts e Parâmetros Trabalham Juntos',
          content: [
            '**O design do prompt ainda importa mais do que os ajustes dos controles deslizantes.** Uma instrução vaga na temperatura 0,2 ainda vai produzir uma resposta ruim — só que uma resposta ruim consistente. Um prompt claro e bem estruturado em qualquer temperatura produz melhores resultados do que um prompt ruim com configurações perfeitas. Para os fundamentos de estrutura de prompt, veja [Fundamentals: What Is Prompt Engineering?].',
            'O fluxo de trabalho correto é: (1) Elabore o prompt primeiro com tarefa clara, contexto, restrições e formato de saída (veja [Fundamentals: The 5 Building Blocks Every Prompt Needs]). (2) Teste na sua temperatura/top-p alvo. (3) Só ajuste os controles se precisar de mais ou menos variação depois que o prompt estiver sólido.',
            'O mesmo prompt em temperaturas diferentes produz estilos muito diferentes. Na temperatura 0,2, as saídas são seguras e diretas. Na temperatura 0,8, as saídas são criativas e poéticas. Nenhuma é "melhor" — depende da voz da sua marca e do seu caso de uso. Para a maioria das tarefas, corrigir o prompt primeiro elimina a necessidade de mexer na temperatura.',
          ],
        },

        example: {
          title: '[Prompt de Exemplo]',
          blockquote: 'Escreva um slogan de produto curto e direto para um app de produtividade. Mantenha abaixo de 10 palavras.',
        },

        lowTemp: {
          title: 'Na Temperatura 0,2:',
          blockquote: '"Faça mais em menos tempo."',
        },

        highTemp: {
          title: 'Na Temperatura 0,8:',
          blockquote: '"Do caos à clareza: onde momentos se transformam em impulso."',
        },

        risk: {
          title: 'Quando a Maior Criatividade Se Torna Arriscada',
          content: [
            '**Temperatura e top-p mais altos aumentam alucinações, desvios de tema e deriva de estilo — especialmente em tarefas factuais.** Seja conservador (temp 0,0–0,5) para: código que vai para produção (APIs alucinadas quebram sistemas), conselhos médicos (informações erradas causam danos), finanças e direito (a precisão é obrigatória) e decisões críticas de segurança (erros têm consequências).',
            'Para tarefas fundamentadas em fatos, considere combinar temperatura mais baixa com [Techniques: RAG Explained: How to Ground AI Answers in Real Data] ou restrições explícitas de fonte para reduzir ainda mais os erros. Veja também [Fundamentals: AI Hallucinations: Why AI Makes Things Up] para entender por que temperaturas mais altas amplificam a fabricação de informação.',
          ],
        },

        promptquorum: {
          title: 'Como o PromptQuorum Ajuda Você a Ajustar Temperatura e Top-P',
          content: [
            '**Testado no PromptQuorum — 60 prompts de escrita criativa enviados nas temperaturas 0,2, 0,7 e 1,2 nos modelos que ainda expõem um controle de temperatura:** Em 0,7, 54 dos 60 prompts produziram primeiras versões utilizáveis. Em 1,2, 31 dos 60 produziram detalhes alucinados ou estrutura quebrada. Em 0,2, 58 dos 60 foram precisos, mas classificados como "genéricos" por avaliadores em revisão cega.',
            'Normalmente, testar configurações de temperatura e top-p significa executar o mesmo prompt várias vezes em vários modelos, registrando e comparando saídas manualmente — demorado e difícil de rastrear. O PromptQuorum simplifica esse fluxo de trabalho.',
            '**Comparações multi-modelo:** Envie um prompt com diferentes configurações de temperatura/top-p para mais de 25 modelos que os aceitam (Gemini 3.1 Pro, os endpoints sem raciocínio do GPT-5.6, Mistral, modelos Ollama locais) em um único envio. Veja instantaneamente qual modelo permanece estável em temperaturas mais altas e qual produz a melhor saída criativa na sua configuração-alvo.',
            '**Estrutura baseada em frameworks:** Os frameworks do PromptQuorum garantem que suas instruções, formato e restrições estejam bem estruturados antes de você tocar em qualquer controle. Isso isola o efeito da temperatura/top-p das demais variáveis — você não mistura um prompt ruim com ajuste de parâmetros.',
            '**Consenso e pontuação:** Visualize todas as saídas lado a lado com a análise Quorum, que avalia o risco de alucinação, a consistência de estilo e a relevância. Escolha a combinação de modelo + configuração que melhor se adapta ao equilíbrio entre criatividade e confiabilidade da sua tarefa.',
            '**Recomendações automáticas de temperatura:** O PromptQuorum analisa a descrição da sua tarefa e a estrutura do prompt e então sugere faixas ideais de temperatura conforme o caso de uso (código, resumo, brainstorming etc.). Disponível tanto no app quanto na extensão do Chrome, o PromptQuorum propõe valores de temperatura além dos padrões, ajustados à sua tarefa específica e aos modelos que você usa. Em vez de adivinhar "devo usar 0,2 ou 0,7?", a ferramenta recomenda valores concretos com base na análise da tarefa — poupando você da tentativa e erro manual.',
            '**Fluxos com LLMs locais:** Teste diferentes combinações de temperatura/top-p no Ollama ou no LM Studio sem escrever scripts e depois salve os melhores presets para o seu fluxo de trabalho.',
          ],
        },

        recipes: {
          title: 'Receitas de Início Rápido',
          content: 'Use estas como pontos de partida para sua tarefa:',
        },

        recipeSafe: {
          items: [
            '**Modo Factual Seguro:** Temperatura 0,2, top-p 0,95 | Ideal para Q&A, resumos, extração de dados, tarefas baseadas em fatos | Saída: Confiável, consistente, alucinação mínima',
            '**Modo Equilibrado Padrão:** Temperatura 0,5, top-p 0,9 | Ideal para a maioria das tarefas gerais, explicações, escrita geral | Saída: Natural, estável, mas com alguma variação',
            '**Modo Brainstorming Criativo:** Temperatura 0,8, top-p 1,0 | Ideal para geração de ideias, copy de marketing, storytelling, variações | Saída: Diversa, surpreendente, muitas opções para filtrar',
            '**Modo de Resposta Curta:** Temperatura 0,3, top-p 0,95 (combina com [Fundamentals: Faster AI Answers: How to Prompt for Speed]) | Ideal para respostas diretas, decisões rápidas, saídas concisas | Saída: Rápida, direta, elaboração mínima',
            '**Modo Experimental:** Temperatura 1,0, top-p 1,0 | Ideal para explorar o comportamento do modelo, entender limites, pesquisa | Saída: Imprevisível, variação máxima',
          ],
        },

        mistakes: {
          title: 'Erros Comuns com Temperatura e Top-P',
          items: [
            '**Colocar ambos no máximo e esperar confiabilidade.** Temperatura alta + top-p alto = aleatoriedade máxima. Só faça isso se estiver fazendo brainstorming ou experimentando.',
            '**Mudar os dois parâmetros ao mesmo tempo.** Você não vai saber qual ajuste ajudou ou prejudicou. Mude um, observe, depois mude o outro se necessário.',
            '**Tentar corrigir um prompt ruim com os controles deslizantes.** Uma instrução vaga em qualquer temperatura ainda produz saídas ruins. Corrija o prompt primeiro.',
            '**Presumir que todo modelo ainda tem um controle de temperatura.** Os modelos Claude atuais da Anthropic e os modelos de raciocínio da OpenAI recusam valores fora do padrão de imediato, e entre os que aceitam, o mesmo número significa coisas diferentes: temperatura 0,7 no Gemini 3.1 Pro não é a mesma coisa que 0,7 em um build local de Llama. Teste exatamente o modelo que você vai chamar.',
            '**Não testar execuções suficientes.** Uma saída na temperatura 0,5 pode ser um valor atípico. Execute pelo menos 3–5 vezes para ver o comportamento típico.',
            '**Definir a temperatura como 0 e esperar correção perfeita.** Temperatura baixa reduz a aleatoriedade, mas não elimina alucinações. Alucinações vêm de lacunas nos dados de treinamento, não da amostragem aleatória.',
            '**Ignorar completamente o top-p porque seu provedor o ignora.** Alguns modelos ignoram; outros não. Verifique a documentação para evitar perder tempo ajustando um controle desativado.',
          ],
        },

        howToStart: {
          title: 'Como Definir Temperatura e Top-P para a Sua Tarefa',
          numberedItems: [
            '**Comece pelo prompt, não pelos parâmetros:** Escreva e refine suas instruções até ficarem claras. Os parâmetros não corrigem um prompt vago — eles afetam apenas a distribuição de amostragem, não a compreensão da tarefa pelo modelo.',
            '**Identifique o tipo da sua tarefa:** Tarefas factuais ou analíticas (análise jurídica, revisão de código, extração de dados) → temperatura 0,0–0,3. Tarefas criativas ou generativas (brainstorming, copywriting, ideias de história) → temperatura 0,7–1,0.',
            '**Deixe o top-p no padrão (0,9–1,0):** Só ajuste o top-p se tiver um motivo específico. Mexer em temperatura e top-p ao mesmo tempo dificulta diagnosticar qual ajuste mudou a saída.',
            '**Rode de 3 a 5 prompts de teste na sua temperatura-alvo:** Avalie a consistência das saídas. Se variarem demais em uma tarefa factual, baixe a temperatura. Se parecerem repetitivas em uma tarefa criativa, aumente.',
            '**Documente as configurações calibradas por caso de uso:** Assim que encontrar a temperatura certa para um fluxo específico, registre-a no seu template de system prompt para que ela se aplique de forma consistente entre sessões.',
          ],
        },

        faqs: {
          faqs: [
            {
              q: 'Devo ajustar a temperatura ou o top-p primeiro?',
              a: 'A temperatura. Ela tem um efeito mais evidente. Mantenha o top-p em um padrão (0,9–1,0) até entender o que a temperatura faz na sua tarefa e só então ajuste o top-p, se ainda for necessário.',
            },
            {
              q: 'Por que um modelo ignora a minha configuração de temperatura?',
              a: 'Normalmente ele não está ignorando: está recusando. Os modelos Claude atuais da Anthropic e os modelos de raciocínio da OpenAI retornam erro 400 quando a temperatura ou o top-p saem do padrão, e algumas configurações mais antigas limitam silenciosamente um parâmetro quando o outro é definido de forma explícita. Verifique a documentação do seu provedor e leia uma requisição que falhou como recusa, não como um ajuste sem efeito.',
            },
            {
              q: 'Posso definir a temperatura como 0 para garantir a correção?',
              a: 'Não. Temperatura 0,0 significa "escolher sempre a palavra mais provável", o que é quase determinístico mas não necessariamente correto. Alucinações vêm de lacunas nos dados de treinamento e de ambiguidade na tarefa, não da amostragem aleatória. Combine temperatura baixa com prompts claros e grounding para mais confiabilidade.',
            },
            {
              q: 'Por que ainda vejo alucinações mesmo com temperatura baixa?',
              a: 'Alucinações acontecem quando os dados de treinamento do modelo têm lacunas ou a tarefa é ambígua — não apenas por causa da amostragem aleatória. Uma configuração de temperatura baixa será consistente em suas alucinações, mas não vai eliminá-las. Use RAG ou restrições explícitas de fonte para reduzi-las.',
            },
            {
              q: 'As configurações recomendadas mudam entre GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro?',
              a: 'Mais do que um pouco: um deles não aceita mais o ajuste. O Claude Opus 5 (assim como o Claude Sonnet 5 e o Claude Fable 5) rejeita de imediato qualquer temperatura ou top-p fora do padrão. O Gemini 3.1 Pro continua expondo os dois via generationConfig e se comporta bem entre 0,5 e 0,7. O GPT-5.6 aceita a faixa completa nos endpoints sem raciocínio, mas recusa valores fora do padrão em modo de raciocínio. Teste exatamente o modelo e o modo que você vai chamar.',
            },
            {
              q: 'Quantas execuções eu preciso para comparar configurações de forma justa?',
              a: 'Pelo menos 3–5 por configuração para ver o comportamento típico. Mais, se você estiver trabalhando com temperaturas mais altas, onde a variância da saída é maior. O recurso de múltiplas execuções do PromptQuorum lida com isso automaticamente em todos os modelos.',
            },
            { q: 'O que eu faço se o meu modelo recusar o parâmetro de temperatura?', a: 'Direcione pelo prompt. Onde você teria baixado a temperatura, peça uma única resposta canônica em um formato de saída exato; onde a teria aumentado, peça explicitamente várias alternativas bem distintas. Se o provedor oferecer um controle de esforço de raciocínio, é esse ajuste que substitui a temperatura. Os modelos Claude atuais da Anthropic e os modelos de raciocínio da OpenAI retornam erro em vez de ignorar o valor em silêncio.' },
          ],
        },

        relatedReading: {
          content: [
            '[O que é Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — por que a estrutura do prompt importa mais do que os parâmetros',
            '[Os 5 Blocos de Construção que Todo Prompt Precisa](/prompt-engineering/5-building-blocks-every-prompt-needs) — como estruturar prompts antes de ajustar parâmetros',
            '[Alucinações de IA: Por Que a IA Inventa Coisas](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — por que temperatura mais baixa não elimina alucinações',
          ],
        },

        sources: {
          content: [
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) — faixas e valores padrão oficiais de temperature e top_p',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — pesquisa sobre nucleus sampling (top-p) e seus efeitos na qualidade do texto',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) — lista os modelos Claude que recusam valores fora do padrão de temperature, top_p e top_k',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) — configuração de geração do Gemini, incluindo temperature',
          ],
        },
      },
    },

    fr: {
      theme: 'Fondamentaux',
      heroImage: '/images/temperature-and-top-p-overview-hero-fr.webp',
      title: 'Température et Top-P : Contrôle la créativité de l\'IA',
      seoTitle: 'Température et Top-P: Contrôler la créativité IA 2026',
      intro: 'La température et le top-p contrôlent comment une IA fait des choix de mots aventureux ou conservateurs. En réglant ces paramètres, tu fais un compromis entre créativité et fiabilité — les valeurs élevées produisent des sorties surprenantes et variées ; les valeurs basses produisent des sorties sûres et prévisibles.',
      metaDescription: 'Maîtrisez la température et les paramètres top-p. Équilibrez créativité vs précision pour le codage, résumés, brainstorming. Avec ChatGPT, Claude, Gemini.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      readTime: '10 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Échantillonnage par température et top-p',
      leadAnswerBlock: 'La température contrôle le degré d\'aléatoire des choix de mots du modèle : 0.0 est quasi déterministe, 1.0 et au-delà est créatif. Le top-p limite le nombre de mots candidats retenus à chaque étape. En pratique, ajuste uniquement la température et laisse le top-p à sa valeur par défaut de 0.9–1.0.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Température et Top-P : Contrôle la créativité de l\'IA',
        description: 'Découvrez comment la température et top-p contrôlent le caractère aléatoire de l\'IA. Paramètres pratiques pour le codage, les résumés, le brainstorming et l\'équilibre entre créativité et fiabilité.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'fr',
        keywords: ['température', 'top-p', 'nucleus sampling', 'aléatoire IA', 'paramètres LLM', 'créativité', 'GPT-5.6', 'Claude', 'Gemini', 'ajustement prompt'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: 'Le diaporama ci-dessous couvre : comment la température contrôle l\'échantillonnage probabiliste (plage 0,0–2,0), comment l\'échantillonnage de noyau top-p limite la sélection de jetons, des paramètres spécifiques pour 6 cas d\'usage (code, créatif, factuel, chat), et un tableau de référence rapide. Télécharger le PDF comme carte de référence des paramètres de température et top-p.',
      sections: {
        definition: {
          title: 'Qu\'est-ce que la température et le Top-P ?',
          snippets: [
            { type: 'in-one-sentence', text: 'La température règle la netteté de la distribution de probabilité du modèle — des valeurs basses produisent une sortie déterministe, des valeurs élevées accroissent l\'aléatoire — tandis que le top-p restreint l\'échantillonnage au plus petit ensemble de tokens dont les probabilités totalisent p.' },
            { type: 'in-plain-terms', text: 'La température est le bouton de créativité : à 0, des réponses constantes et prévisibles ; plus haut, des réponses surprenantes. Le top-p est un autre levier sur la même idée : au lieu d\'aplatir les probabilités, il refuse simplement d\'envisager la longue traîne des mots improbables.' },
          ],
          content: [
            '**La température est un curseur qui rend la sortie du modèle plus aléatoire (supérieure) ou plus déterministe (inférieure).** À une température de 0.0, le modèle choisit toujours le mot suivant le plus probable : les exécutions répétées sont donc quasi identiques, même si les variations de virgule flottante et de matériel peuvent encore modifier un token. À une température de 1.0+, le modèle envisage des alternatives plus risquées, produisant du texte surprenant et varié.',
            '**Top-P (l\'échantillonnage nucléaire) contrôle combien d\'options de mots probables le modèle envisage à chaque étape.** Au lieu de « comment aléatoire », pense à « combien de choix plausibles ». À top-p 0.1, le modèle ne considère que les meilleures options jusqu\'à ce qu\'elles atteigne 10% de probabilité cumulative — étroit et sûr. À top-p 0.9, il envisage un ensemble beaucoup plus large de mots possibles — plus lâche et varié.',
            'En termes simples : la température contrôle « comment aventureux », et top-p contrôle « combien d\'options à considérer ». Tous deux affectent la variété des résultats, mais de façons différentes.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Fonctionne avec les modèles locaux',
              text: 'Les paramètres de température et top-p sont disponibles dans tous les [outils LLM locaux](https://www.promptquorum.com/local-llms). Mêmes paramètres, même effet.'
            }
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
            '**Vérifie que le curseur existe avant de le régler :** les modèles Claude actuels d’Anthropic et les modèles de raisonnement d’OpenAI refusent avec une erreur toute température ou tout top-p non par défaut.',
          ],
        },
        promptExample: {
          title: 'Structure de prompt + Réglages de température',
          content: [
            '[Mauvais prompt] « Écris quelque chose de créatif sur l\'automne. »',
            '[Bon prompt] « Écris une description métaphorique de 100 mots de l\'automne comme si tu étais un poète. Température : 0.9, top-p : 0.95. »',
          ],
        },
        notation: {
          title: 'Notation mathématique',
          content: [
            'Plage de température : T ∈ [0.0, 2.0]',
            'Softmax avec température : softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Échantillonnage top-p : Σ P(token_i) jusqu\'à ≥ p, puis échantillonnage dans cet ensemble',
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
          content: '**Effets Top-P :** Bas (0.1–0.3) crée des ensembles d\'options très étroits et une sortie très conservatrice. Moyen (0.5–0.7) équilibre la diversité et la stabilité. Haut (0.8–1.0) élargit l\'ensemble d\'options et encourage la créativité, similaire à une température élevée. **Important :** De nombreux fournisseurs lient ou limitent ces paramètres. Les modèles GPT d\'OpenAI ignorent souvent top-p si la température est définie explicitement. Sur les modèles Anthropic actuels, les deux paramètres sont au contraire verrouillés sur leurs valeurs par défaut (voir plus bas). Vérifie toujours la documentation de ton fournisseur — les mêmes chiffres ne signifient pas la même chose sur tous les modèles.',
        },

        providerLimits: {
          title: 'Tous les modèles n’acceptent plus une valeur de température',
          snippets: [
            { type: 'in-one-sentence', text: 'Plusieurs modèles de pointe refusent désormais avec une erreur toute valeur de température ou de top-p autre que celle par défaut : vérifie d’abord que le paramètre existe encore.' },
            { type: 'in-plain-terms', text: 'Sur certains des modèles les plus récents, les curseurs ont disparu. Si ta requête échoue, le paramètre a été refusé, pas ignoré.' },
          ],
          content: [
            '**De plus en plus de modèles de pointe n’acceptent plus aucune valeur de température ou de top-p : ils renvoient une erreur au lieu d’une sortie ajustée.** Les modèles en mode raisonnement construisent leur réponse en plusieurs tours internes de rédaction et de vérification, et les fournisseurs verrouillent les paramètres d’échantillonnage pour que ce processus reste calibré. Vérifie que le curseur existe encore sur le modèle que tu appelles avant d’y consacrer du temps.',
            '**Anthropic :** sur Claude Opus 5, Claude Sonnet 5 et Claude Fable 5 (ainsi que sur Claude Opus 4.7 et 4.8), une valeur de temperature, top_p ou top_k différente de la valeur par défaut renvoie une erreur 400 à chaque requête, et pas seulement lorsque le raisonnement est activé. Sur les modèles Claude plus anciens, la restriction ne s’applique que pendant le raisonnement, où top_p est accepté entre 0.95 et 1.0.',
            '**OpenAI :** la famille GPT-5 en mode raisonnement refuse les valeurs non par défaut avec « Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported ». Les points de terminaison sans raisonnement acceptent toujours toute la plage 0–2.',
            '**Google :** Gemini expose toujours temperature et topP via generationConfig ; les plages de ce guide s’appliquent donc directement aux modèles Gemini.',
            '**Modèles locaux :** Ollama, LM Studio et llama.cpp exposent les deux paramètres sur tous les modèles, sans verrou côté fournisseur. Pour sentir la différence entre 0.2 et 0.9 sur le même prompt, un [modèle local](https://www.promptquorum.com/local-llms) est l’endroit le moins cher pour tester.',
            'Quand les paramètres sont verrouillés, tu pilotes par le prompt : demande une réponse unique et canonique dans un format de sortie exact là où tu aurais baissé la température, et demande explicitement plusieurs variantes nettement différentes là où tu l’aurais montée. Si le fournisseur propose un contrôle de l’effort de raisonnement, c’est ce réglage qui remplace désormais la température.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Un refus n’est pas une absence d’effet',
              text: 'Une requête refusée se lit facilement comme « le réglage n’a rien changé ». Une erreur 400 signifie que le paramètre a été rejeté : l’exécution n’a jamais eu lieu avec ta valeur.'
            }
          ],
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
            '**Comparaisons multi-modèles :** Envoie un prompt à différents paramètres de température/top-p sur les 25+ modèles qui les acceptent (Gemini 3.1 Pro, les points de terminaison GPT-5.6 sans raisonnement, Mistral, modèles locaux Ollama) en une seule expédition. Vois instantanément quel modèle reste stable à une température plus élevée et quel modèle offre le meilleur résultat créatif à ton paramètre cible.',
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
            '**Supposer que tous les modèles ont encore un curseur de température.** Les modèles Claude actuels d’Anthropic et les modèles de raisonnement d’OpenAI refusent catégoriquement les valeurs non par défaut, et parmi ceux qui les acceptent, le même chiffre ne veut pas dire la même chose : une température de 0.7 sur Gemini 3.1 Pro ne ressemble pas à 0.7 sur une build Llama locale. Teste exactement le modèle que tu appelles.',
            '**Ne pas tester assez de courses.** Une sortie à température 0.5 pourrait être une valeur aberrante. Exécute au moins 3–5 fois pour voir le comportement typique.',
            '**Définir la température à 0 et s\'attendre à une correction parfaite.** La température basse réduit l\'aléatoire mais ne supprime pas les hallucinations. Les hallucinations proviennent de lacunes dans les données d\'entraînement, pas d\'échantillonnage aléatoire.',
            '**Ignorer complètement parce que ton fournisseur l\'ignore.** Certains modèles le font ; d\'autres non. Vérifie la documentation pour éviter de gaspiller du temps à ajuster un curseur désactivé.',
          ],
        },

        howToStart: {
          title: 'Comment régler la température et le Top-P pour ta tâche',
          numberedItems: [
            '**Commence par le prompt, pas par les paramètres :** Rédige et affine tes instructions jusqu\'à ce qu\'elles soient claires. Les paramètres ne peuvent pas corriger un prompt vague — ils n\'affectent que la distribution d\'échantillonnage, pas la compréhension de la tâche par le modèle.',
            '**Identifie le type de ta tâche :** Tâches factuelles ou analytiques (analyse juridique, revue de code, extraction de données) → règle la température sur 0,0–0,3. Tâches créatives ou génératives (brainstorming, rédaction publicitaire, idées d\'histoires) → règle la température sur 0,7–1,0.',
            '**Laisse le top-p à sa valeur par défaut (0,9–1,0) :** N\'ajuste le top-p que si tu as une raison précise. Modifier à la fois la température et le top-p rend plus difficile le diagnostic du paramètre qui a changé la sortie.',
            '**Exécute 3–5 prompts de test à ta température cible :** Évalue la cohérence des sorties. Si les sorties varient trop pour une tâche factuelle, baisse la température. Si les sorties semblent répétitives pour une tâche créative, augmente la température.',
            '**Documente tes réglages calibrés par cas d\'usage :** Une fois que tu as trouvé la bonne température pour un flux de travail spécifique, note-la dans ton modèle de prompt système pour qu\'elle s\'applique de manière cohérente d\'une session à l\'autre.',
          ],
        },

        faqs: {
          faqs: [
            { q: 'Dois-je d\'abord ajuster la température ou le top-p ?', a: 'La température. Il a un effet plus évident. Garde top-p par défaut (0.9–1.0) jusqu\'à ce que tu aies une idée de ce que la température fait pour ta tâche, puis affine uniquement le top-p si nécessaire.' },
            { q: 'Pourquoi un modèle ignore-t-il mon paramètre de température ?', a: 'En général, il ne l’ignore pas : il le refuse. Les modèles Claude actuels d’Anthropic et les modèles de raisonnement d’OpenAI renvoient une erreur 400 dès que la température ou le top-p s’écarte de la valeur par défaut, et certaines configurations plus anciennes plafonnent silencieusement un paramètre quand l’autre est défini explicitement. Vérifie la documentation de ton fournisseur et lis une requête en échec comme un refus, pas comme un réglage sans effet.' },
            { q: 'Puis-je définir la température à 0 pour une correction garantie ?', a: 'Non. Température 0.0 signifie « choisissez toujours le mot le plus probable », ce qui est quasi déterministe mais pas toujours correct. Les hallucinations concernent les lacunes des données d\'entraînement et l\'ambiguïté des tâches, pas l\'échantillonnage aléatoire. Combine une température basse avec des prompts clairs et un grounding pour une meilleure fiabilité.' },
            { q: 'Pourquoi je vois toujours les hallucinations à basse température ?', a: 'Les hallucinations se produisent quand les données d\'entraînement du modèle ont des lacunes ou quand la tâche est ambiguë — pas seulement à cause de l\'échantillonnage aléatoire. Un paramètre de basse température sera cohérent à propos de ses hallucinations, mais ne les éliminera pas. Utilise RAG ou des contraintes de source explicites pour les réduire.' },
            { q: 'Les paramètres recommandés diffèrent-ils entre GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro ?', a: 'Plus que légèrement : l’un des trois n’accepte tout simplement plus le réglage. Claude Opus 5 (comme Claude Sonnet 5 et Claude Fable 5) refuse catégoriquement toute température ou tout top-p non par défaut. Gemini 3.1 Pro expose toujours les deux via generationConfig et se comporte bien entre 0.5 et 0.7. GPT-5.6 accepte toute la plage sur ses points de terminaison sans raisonnement, mais refuse les valeurs non par défaut en mode raisonnement. Teste exactement le modèle et le mode que tu appelles.' },
            { q: 'Combien de courses ai-je besoin pour comparer les paramètres équitablement ?', a: 'Au moins 3–5 par paramètre pour voir le comportement typique. Plus si tu travailles avec des températures plus élevées où la variance de sortie est élevée. La fonction multi-run de PromptQuorum gère ceci automatiquement sur tous les modèles.' },
            { q: 'Que faire si mon modèle refuse le paramètre de température ?', a: 'Pilote par le prompt. Là où tu aurais baissé la température, demande une réponse unique et canonique dans un format de sortie exact ; là où tu l’aurais montée, demande explicitement plusieurs variantes nettement différentes. Si le fournisseur expose un contrôle de l’effort de raisonnement, c’est ce réglage qui remplace la température. Les modèles Claude actuels d’Anthropic et les modèles de raisonnement d’OpenAI renvoient une erreur au lieu d’ignorer silencieusement la valeur.' },
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
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) – plages et valeurs par défaut officielles de temperature et top_p',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) – recherche sur l’échantillonnage nucléaire (top-p) et ses effets sur la qualité du texte',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) – liste les modèles Claude qui refusent les valeurs non par défaut de temperature, top_p et top_k',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) – configuration de génération de Gemini, dont temperature',
          ],
        },
      },
    },

    ja: {
      theme: '基礎',
      heroImage: '/images/temperature-and-top-p-overview-hero-ja.webp',
      title: '温度とTop-P：AI創造性を制御する',
      seoTitle: '温度とTop-P 2026：GPT-5.6とClaudeでAI創造性と精度を制御するパラメータ完全解説',
      intro: '温度とTop-Pは、AIモデルがどの程度冒険的または保守的な単語選択をするかを制御します。これらの設定を調整することで、創造性と信頼性のバランスを取ることができます。高い値は驚くべき多様な出力を生成し、低い値は安全で予測可能な出力を生成します。',
      metaDescription: '温度は0.0〜2.0でAI出力のランダム性を制御し、Top-Pは0.1〜1.0で語彙選択の幅を調整します。コードには低温度（0.1〜0.3）、ブレーンストーミングには高温度（0.8以上）を推奨します。GPT-5.6、Claude Opus 5、Gemini 3.1 Proで確認済みの設定値を提供します。',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: '温度とTop-Pサンプリング',
      leadAnswerBlock: '温度はモデルの単語選択がどれだけ無作為になるかを制御します。0.0はほぼ決定的、1.0以上は創造的です。Top-Pは各ステップで候補として残る単語の数を制限します。実務では温度だけを調整し、Top-Pは既定値の0.9–1.0のままにしてください。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '温度とTop-P：AI創造性を制御する',
        description: '温度とTop-Pがどのように人工知能のランダム性を制御するかを学びます。コード、要約、ブレーンストーミング、創造性と信頼性のバランスのための実践的な設定。',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'ja',
        keywords: ['温度', 'Top-P', 'ニュークレウスサンプリング', 'AI乱数', 'LLM設定', '創造性', 'GPT-5.6', 'Claude', 'Gemini', 'プロンプト調整'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: '以下のスライドデッキは次をカバーします：温度が確率サンプリングをどのように制御するか（範囲0.0～2.0）、Top-pニュークレアスサンプリングがトークン選択をどのように制限するか、6つのユースケースの具体的な設定（コード、クリエイティブ、事実、チャット）、クイックリファレンステーブル。PDFを温度およびTop-pパラメータリファレンスカードとしてダウンロードしてください。',
      sections: {
        definition: {
          title: '温度とTop-Pとは何か？',
          snippets: [
            { type: 'in-one-sentence', text: '温度はモデルの確率分布の鋭さを制御し、値を下げると決定的な出力に、上げるとランダム性が増します。一方 Top-P は、確率の合計が p になる最小のトークン集合にサンプリングを限定します。' },
            { type: 'in-plain-terms', text: '温度は創造性のつまみです。0 まで下げれば一貫した予測可能な答えになり、上げれば意外性のある答えになります。Top-P は同じ発想の別のレバーで、確率をならすのではなく、可能性の低い単語の裾野をそもそも候補から外します。' },
          ],
          content: [
            '**温度はモデルの出力をより無作為（高い）またはより決定的（低い）にするノブです。** 温度0.0では、モデルは常に最も可能性の高い次の単語を選ぶため、実行を繰り返してもほぼ同じ出力になります。ただし浮動小数点演算やハードウェアの差異により、一部のトークンが変わることはあります。温度1.0以上では、モデルはより危険な選択肢を考慮し、驚くべき多様なテキストを生成します。',
            '**Top-P（核サンプリング）は、各ステップでモデルが考慮する可能性のある単語オプションの数を制御します。** 「どの程度無作為か」ではなく、「どの程度の妥当な選択肢があるか」と考えてください。Top-P 0.1では、モデルはわずかな累積確率10%に達するまで最もよい選択肢だけを考慮します。Top-P 0.9では、はるかに広い範囲の可能な単語を考慮します。',
            '簡潔に言えば：温度は「どの程度冒険的か」を制御し、Top-Pは「どの程度の選択肢を考慮するか」を制御します。どちらも出力の多様性に影響しますが、異なる方法で機能します。',
          ],
          callouts: [
            {
              type: 'info',
              label: 'ローカルモデルで動作',
              text: '温度およびTop-P設定は、すべての[ローカルLLMツール](https://www.promptquorum.com/local-llms)で利用可能です。同じパラメータ、同じ効果です。'
            }
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
            '**調整する前に、つまみが残っているかを確認する：** Anthropicの現行Claudeモデルと OpenAIの推論モデルは、既定値以外の温度・Top-Pをエラーで拒否します。',
          ],
        },
        promptExample: {
          title: 'プロンプト構造＋温度設定',
          content: [
            '[悪いプロンプト]「秋について何か創造的なことを書いてください。」',
            '[良いプロンプト]「詩人になったつもりで、秋についての100語の比喩的な描写を書いてください。温度：0.9、Top-P：0.95。」',
          ],
        },
        notation: {
          title: '数学的表記',
          content: [
            '温度範囲：T ∈ [0.0, 2.0]',
            '温度付きソフトマックス：softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Top-pサンプリング：Σ P(token_i) が ≥ p になるまで累積し、その集合からサンプリングする',
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
          content: '**Top-Pの効果：** 低い（0.1–0.3）は非常に狭いオプションセットと非常に保守的な出力を作成します。中程度（0.5–0.7）は多様性と安定性のバランスを取ります。高い（0.8–1.0）はオプションセットを広げ、高温度に似た創造性を促進します。**重要：** 多くのプロバイダーはこれらの設定をリンクまたは制限しています。OpenAIのGPTモデルは、温度が明示的に設定されている場合、しばしばTop-Pを無視します。一方、Anthropicの現行モデルでは両方のパラメータが既定値に完全に固定されています（後述）。常にあなたのプロバイダーのドキュメンテーションをチェックしてください—同じ数字はすべてのモデル間で同じ意味ではありません。',
        },

        providerLimits: {
          title: 'すべてのモデルが温度値を受け付けるわけではありません',
          snippets: [
            { type: 'in-one-sentence', text: '複数のフロンティアモデルは既定値以外の温度・Top-Pをエラーで拒否するようになったため、まずパラメータが残っているかを確認してください。' },
            { type: 'in-plain-terms', text: '最新のモデルの一部では、つまみ自体がなくなっています。リクエストが失敗した場合、設定は無視されたのではなく拒否されています。' },
          ],
          content: [
            '**温度やTop-Pの値をまったく受け付けないフロンティアモデルが増えています。調整された出力ではなく、エラーが返ります。** 推論モードのモデルは、内部で下書きと検証を何度も繰り返して回答を組み立てるため、その工程の較正を保つ目的でプロバイダーがサンプリングパラメータを固定しています。調整に時間をかける前に、呼び出すモデルにつまみが残っているかを確認してください。',
            '**Anthropic：** Claude Opus 5、Claude Sonnet 5、Claude Fable 5（およびClaude Opus 4.7と4.8）では、既定値以外のtemperature、top_p、top_kはすべてのリクエストで400エラーになります。思考が有効なときだけではありません。それ以前のClaudeモデルでは、この制限は思考が有効な間だけ適用され、その場合のtop_pは0.95〜1.0の範囲で受け付けられます。',
            '**OpenAI：** 推論モードのGPT-5ファミリーは、既定値以外を「Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported.」というエラーで拒否します。推論を使わないエンドポイントは、引き続き0〜2の全範囲を受け付けます。',
            '**Google：** Geminiは引き続きgenerationConfig経由でtemperatureとtopPを公開しているため、本ガイドの数値範囲はGeminiモデルにそのまま当てはまります。',
            '**ローカルモデル：** Ollama、LM Studio、llama.cppはどのモデルでも両方のパラメータを公開しており、プロバイダー側のロックはありません。同じプロンプトで0.2と0.9の違いを体感したいなら、[ローカルモデル](https://www.promptquorum.com/local-llms)が最も安価な検証環境です。',
            'パラメータが固定されている場合は、プロンプトで制御します。温度を下げたい場面では、出力形式を厳密に指定して唯一の確定的な回答を求めます。温度を上げたい場面では、明確に異なる複数の案を明示的に要求します。プロバイダーが推論の強度を指定できる場合は、それが温度に代わる設定です。',
          ],
          callouts: [
            {
              type: 'warning',
              label: '拒否は「効果なし」ではありません',
              text: '拒否されたリクエストは「設定が効かなかった」と誤読されがちです。400エラーはパラメータが拒否されたという意味であり、指定した値での実行自体が行われていません。'
            }
          ],
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
            '**マルチモデル比較：** 1つのプロンプトを異なる温度/Top-P設定でパラメータを受け付ける25以上のモデル（Gemini 3.1 Pro、推論を使わないGPT-5.6のエンドポイント、Mistral、ローカルOllamaモデル）に送信します。どのモデルが高温度でも安定しているか、ターゲット設定で最適な創造的出力を提供するかをすぐに確認できます。',
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
            '**どのモデルにも温度のつまみがまだあると思い込む。** Anthropicの現行Claudeモデルと OpenAIの推論モデルは既定値以外を明確に拒否します。受け付けるモデル同士でも同じ数値の意味は異なり、Gemini 3.1 Proの温度0.7はローカルのLlamaビルドの0.7とは別物です。実際に呼び出すモデルをそのままテストしてください。',
            '**十分な実行をテストしません。** 温度0.5での1つの出力は外れ値かもしれません。典型的な動作を見るために少なくとも3～5回実行してください。',
            '**温度を0に設定し、完璧な正確性を期待します。** 低い温度は無作為性を減らしますが、幻覚を排除しません。幻覚は無作為なサンプリングからではなく、トレーニングデータギャップから来ます。',
            '**プロバイダーが無視するため完全に無視します。** 一部のモデルはそうしますが、そうではないものもあります。ドキュメントをチェックして、無効になっているノブを調整するための時間を無駄にしないでください。',
          ],
        },

        howToStart: {
          title: 'タスクに合わせて温度とTop-Pを設定する方法',
          numberedItems: [
            '**パラメータではなくプロンプトから始める：** 指示が明確になるまで書いて調整してください。パラメータは曖昧なプロンプトを修正できません — サンプリング分布に影響するだけで、モデルのタスク理解には影響しません。',
            '**タスクの種類を特定する：** 事実に基づく分析タスク（法律分析、コードレビュー、データ抽出）→ 温度0.0〜0.3に設定。創造的または生成的なタスク（ブレーンストーミング、コピーライティング、ストーリーのアイデア）→ 温度0.7〜1.0に設定。',
            '**Top-Pはデフォルト（0.9〜1.0）のままにする：** 特定の理由がある場合のみTop-Pを調整してください。温度とTop-Pを同時に変更すると、どちらの設定が出力を変えたのか診断が難しくなります。',
            '**目標温度で3〜5回のテストプロンプトを実行する：** 出力の一貫性を評価します。事実に基づくタスクで出力のばらつきが大きすぎる場合は温度を下げ、創造的なタスクで出力が単調に感じる場合は温度を上げます。',
            '**ユースケースごとに調整済みの設定を記録する：** 特定のワークフローに適した温度が見つかったら、システムプロンプトテンプレートに記録し、セッション間で一貫して適用されるようにします。',
          ],
        },

        faqs: {
          faqs: [
            { q: 'まず温度またはTop-Pを調整すべきですか？', a: '温度。より明らかな効果があります。タスクが温度を実行するかについて感覚を得るまでTop-Pをデフォルト（0.9–1.0）に保ち、必要に応じてのみTop-Pを微調整します。' },
            { q: '1つのモデルがなぜ温度設定を無視しますか？', a: '多くの場合、無視しているのではなく拒否しています。Anthropicの現行Claudeモデルと OpenAIの推論モデルは、温度やTop-Pが既定値と異なると400エラーを返します。古い構成では、一方を明示的に設定するともう一方が黙って制限されることもあります。プロバイダーのドキュメントを確認し、失敗したリクエストは「効果がなかった設定」ではなく「拒否」として読んでください。' },
            { q: '保証された正確性のために温度を0に設定できますか？', a: 'いいえ。温度0.0は「常に最も可能性の高い単語を選ぶ」を意味し、これはほぼ決定的ですが、常に正確とは限りません。幻覚は無作為なサンプリングではなく、トレーニングデータギャップとタスク曖昧性についてです。より良い信頼性のために低い温度を明確なプロンプトとグラウンドと組み合わせます。' },
            { q: 'なぜ低い温度でまだ幻覚が見られますか？', a: 'モデルのトレーニングデータにギャップがあるか、タスクが曖昧な場合、幻覚は発生します—無作為サンプリングだけではなく。低温設定は幻覚に関して一貫性がありますが、それらを排除しません。RAGまたは明示的なソース制約を使用してそれらを減らします。' },
            { q: 'GPT-5.6、Claude Opus 5、Gemini 3.1 Proで推奨設定が異なりますか？', a: '「わずかに」どころではありません。3つのうち1つはもう設定自体を受け付けません。Claude Opus 5（Claude Sonnet 5とClaude Fable 5も同様）は、既定値以外の温度やTop-Pを一切拒否します。Gemini 3.1 ProはgenerationConfig経由で両方を公開しており、0.5〜0.7では素直に動作します。GPT-5.6は推論を使わないエンドポイントでは全範囲を受け付けますが、推論モードでは既定値以外を拒否します。実際に呼び出すモデルとモードをそのままテストしてください。' },
            { q: '設定を公平に比較するのに何回実行が必要ですか？', a: '典型的な動作を見るために、設定あたり少なくとも3～5。出力分散が高い高い温度で作業する場合はさらに多く。PromptQuorumのマルチラン機能はこれをすべてのモデルで自動的に処理します。' },
            { q: 'モデルが温度パラメータを拒否する場合はどうすればよいですか？', a: '代わりにプロンプトで制御します。温度を下げたい場面では、出力形式を厳密に指定して唯一の確定的な回答を求めます。温度を上げたい場面では、明確に異なる複数の案を明示的に要求します。プロバイダーが推論の強度を指定できる場合は、それが温度に代わる設定です。Anthropicの現行Claudeモデルと OpenAIの推論モデルは、値を黙って無視するのではなくエラーを返します。' },
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
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) – temperatureとtop_pの公式なパラメータ範囲と既定値',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) – 核サンプリング（Top-P）とテキスト品質への影響に関する研究',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) – 既定値以外のtemperature、top_p、top_kを拒否するClaudeモデルの一覧',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) – temperatureを含むGeminiの生成設定',
          ],
        },
      },
    },

    zh: {
      theme: '基础知识',
      heroImage: '/images/temperature-and-top-p-overview-hero-zh.webp',
      title: '温度和Top-P：控制AI创造力',
      seoTitle: '2026年温度与Top-P参数完整解析：如何设置AI创造力与精确度以提升GPT-5.6和Claude输出质量',
      intro: '温度和Top-P控制AI模型在选择单词时的冒险程度或保守程度。通过调整这些设置，您可以在创造力和可靠性之间权衡——更高的值产生令人惊讶的多样化输出；较低的值产生安全的、可预测的输出。',
      metaDescription: '温度参数范围0至2控制AI输出的随机程度，Top-P参数范围0.1至1.0决定模型考虑的词汇选项范围。代码生成推荐低温度（0.1至0.3），头脑风暴推荐高温度（0.8以上）。GPT-5.6、Claude Opus 5和Gemini 3.1 Pro均已完整验证以上参数设置效果。',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      readTime: '阅读约10分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '温度与Top-P采样',
      leadAnswerBlock: '温度控制模型选词的随机程度：0.0 接近确定性，1.0 及以上偏向创造性。Top-P 则限制每一步中保留多少候选词。实际操作中，只调整温度，把 Top-P 保持在 0.9–1.0 的默认值即可。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '温度和Top-P：控制AI创造力',
        description: '了解温度和Top-P如何控制AI的随机性。用于编码、摘要、头脑风暴的实用设置以及创造力和可靠性之间的平衡。',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'zh',
        keywords: ['温度', 'Top-P', '核心采样', 'AI随机性', 'LLM设置', '创造力', 'GPT-5.6', 'Claude', 'Gemini', '提示调整'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: '以下幻灯片涵盖：温度如何控制概率抽样（范围0.0-2.0）、Top-p核采样如何限制标记选择、6个用例的具体设置（代码、创意、事实、聊天）和快速参考表。下载PDF作为温度和Top-p参数参考卡。',
      sections: {
        definition: {
          title: '什么是温度和Top-P？',
          snippets: [
            { type: 'in-one-sentence', text: '温度控制模型概率分布的陡峭程度——数值越低输出越确定，越高随机性越强——而 Top-P 则把采样限制在概率累加到 p 的最小 token 集合内。' },
            { type: 'in-plain-terms', text: '温度就是创造力旋钮：调到 0 得到稳定可预测的回答，调高则会出现意想不到的表达。Top-P 是同一思路的另一个杠杆：它不去压平概率，而是干脆不考虑那条由低概率词构成的长尾。' },
          ],
          content: [
            '**温度是一个旋钮，使模型的输出更加随机（更高）或更具确定性（更低）。** 在温度0.0下，模型总是选择最有可能的下一个单词——因此重复运行的结果几乎完全一致，但浮点运算和硬件差异仍可能改变个别 token。在温度1.0+时，模型会考虑更多风险较高的替代方案，产生令人惊讶和多样化的文本。',
            '**Top-P（核抽样）控制模型在每一步考虑多少个可能的单词选项。** 与其说"有多随机"，不如说"有多少合理的选择"。在Top-P 0.1时，模型仅考虑顶部选项直到达到10%的累积概率——狭隘且安全。在Top-P 0.9时，它考虑了更广泛的可能单词集——更宽松和多样化。',
            '简而言之：温度控制"有多冒险"，Top-P控制"要考虑多少选项"。两者都影响输出的多样性，但方式不同。',
          ],
          callouts: [
            {
              type: 'info',
              label: '适用于本地模型',
              text: '温度和Top-P设置在所有[本地LLM工具](https://www.promptquorum.com/local-llms)中可用。相同的参数，相同的效果。'
            }
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
            '**调参之前先确认旋钮是否还在：** Anthropic 当前的 Claude 模型和 OpenAI 的推理模型会以错误拒绝任何非默认的温度或 Top-P 值。',
          ],
        },
        promptExample: {
          title: '提示结构+温度设置',
          content: [
            '[糟糕的提示]"写一些关于秋天的创意内容。"',
            '[好的提示]"以诗人的身份，写一段100字的秋天隐喻描写。温度：0.9，Top-P：0.95。"',
          ],
        },
        notation: {
          title: '数学符号',
          content: [
            '温度范围：T ∈ [0.0, 2.0]',
            '带温度的Softmax：softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Top-p采样：累加Σ P(token_i)直到≥p，然后从该集合中采样',
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
          content: '**Top-P效果：** 低（0.1–0.3）创建非常狭隘的选项集和高度保守的输出。中等（0.5–0.7）平衡多样性和稳定性。高（0.8–1.0）扩展选项集并鼓励创意，类似于高温度。**重要：** 许多提供商链接或限制这些设置。OpenAI的GPT模型在明确设置温度时经常忽略Top-P。而在 Anthropic 的当前模型上，这两个参数被完全锁定为默认值（见下文）。始终检查您提供商的文档——相同的数字在所有模型中的含义不同。',
        },

        providerLimits: {
          title: '并非所有模型仍然接受温度值',
          snippets: [
            { type: 'in-one-sentence', text: '多个前沿模型现在会以错误拒绝任何非默认的温度或 Top-P 值，因此请先确认该参数是否还存在。' },
            { type: 'in-plain-terms', text: '在部分最新模型上，这些旋钮已经消失。如果请求失败，说明设置被拒绝了，而不是被忽略了。' },
          ],
          content: [
            '**越来越多的前沿模型完全不再接受温度或 Top-P 值——它们返回错误，而不是调整后的输出。** 推理模式的模型会在内部经过多轮起草与校验来构建回答，提供商锁定采样参数以保持该过程的校准。在花时间调参之前，先确认你要调用的模型上这个旋钮是否还存在。',
            '**Anthropic：** 在 Claude Opus 5、Claude Sonnet 5 和 Claude Fable 5（以及 Claude Opus 4.7 和 4.8）上，非默认的 temperature、top_p 或 top_k 会让每一次请求都返回 400 错误——不仅仅是在开启思考时。在更早的 Claude 模型上，该限制只在思考开启期间生效，此时 top_p 可接受 0.95 到 1.0 之间的值。',
            '**OpenAI：** 推理模式下的 GPT-5 系列会以“Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported.”拒绝非默认值。非推理端点仍然接受完整的 0–2 范围。',
            '**Google：** Gemini 仍然通过 generationConfig 开放 temperature 和 topP，因此本指南中的取值范围可直接用于 Gemini 模型。',
            '**本地模型：** Ollama、LM Studio 和 llama.cpp 在每个模型上都开放这两个参数，没有提供商侧的锁定。如果你想在同一个提示上感受 0.2 与 0.9 的差别，[本地模型](https://www.promptquorum.com/local-llms)是成本最低的试验场。',
            '当参数被锁定时，改用提示来控制：在原本会调低温度的场景，要求以精确的输出格式给出唯一确定的答案；在原本会调高温度的场景，明确要求给出若干个明显不同的方案。如果提供商提供推理强度控制，那就是取代温度的那个设置。',
          ],
          callouts: [
            {
              type: 'warning',
              label: '被拒绝不等于没有效果',
              text: '被拒绝的请求很容易被误读成“设置没起作用”。400 错误意味着参数被拒绝，也就是说这次运行根本没有按你设定的值执行。'
            }
          ],
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
            '**多模型比较：** 在一次分发中跨接受这些参数的 25+ 个模型（Gemini 3.1 Pro、GPT-5.6 的非推理端点、Mistral、本地 Ollama 模型）发送一个不同温度/Top-P设置的提示。立即看到哪个模型在较高温度下保持稳定，哪个在您的目标设置下提供最佳创意输出。',
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
            '**以为每个模型都还有温度旋钮。** Anthropic 当前的 Claude 模型和 OpenAI 的推理模型会直接拒绝非默认值；而在接受它们的模型之间，同一个数字的含义也不同——Gemini 3.1 Pro 上的温度 0.7 与本地 Llama 构建上的 0.7 并不一样。请按你实际调用的模型来测试。',
            '**没有测试足够的运行。** 温度0.5下的一个输出可能是离群值。运行至少3–5次以查看典型行为。',
            '**将温度设置为0并期望完美正确性。** 低温度会降低随机性，但不会消除幻觉。幻觉来自训练数据差距，而不是随机抽样。',
            '**完全忽略，因为您的提供商忽略了它。** 一些模型这样做；有些则不。检查文档以避免浪费时间调整禁用的旋钮。',
          ],
        },

        howToStart: {
          title: '如何为您的任务设置温度和Top-P',
          numberedItems: [
            '**从提示词开始，而不是参数：** 编写并优化您的指令，直到它们清晰为止。参数无法修复模糊的提示词——它们只影响采样分布，不影响模型对任务的理解。',
            '**确定您的任务类型：** 事实性或分析性任务（法律分析、代码审查、数据提取）→ 将温度设置为0.0–0.3。创造性或生成性任务（头脑风暴、文案写作、故事创意）→ 将温度设置为0.7–1.0。',
            '**将Top-P保留为默认值（0.9–1.0）：** 只有在有具体理由时才调整Top-P。同时更改温度和Top-P会让您更难诊断是哪个设置改变了输出。',
            '**在目标温度下运行3–5个测试提示词：** 评估输出一致性。如果事实性任务的输出差异过大，请降低温度。如果创造性任务的输出感觉重复，请提高温度。',
            '**记录每个用例的校准设置：** 一旦为特定工作流程找到正确的温度，将其记录在您的系统提示词模板中，以便在各个会话中保持一致应用。',
          ],
        },

        faqs: {
          faqs: [
            { q: '我应该先调整温度还是Top-P？', a: '温度。它有更明显的效果。保持Top-P为默认值（0.9–1.0），直到您感受到温度对您的任务的影响，然后仅在需要时微调Top-P。' },
            { q: '为什么一个模型会忽略我的温度设置？', a: '多数情况下它不是在忽略，而是在拒绝。Anthropic 当前的 Claude 模型和 OpenAI 的推理模型在温度或 Top-P 非默认时会返回 400 错误；一些较早的配置则会在你显式设置其中一个参数时静默地限制另一个。查阅你的提供商文档，并把失败的请求读作拒绝，而不是“设置没起作用”。' },
            { q: '我可以将温度设置为0以获得保证的正确性吗？', a: '不能。温度0.0意味着"总是选择最有可能的单词"，这几乎是确定性的，但不总是正确的。幻觉是关于训练数据差距和任务歧义，而不是随机抽样。结合低温度与清晰的提示和基础以获得更好的可靠性。' },
            { q: '为什么我在低温度下仍然看到幻觉？', a: '当模型的训练数据有差距或任务有歧义时，幻觉就会发生——不仅仅是由于随机抽样。低温设置关于其幻觉是一致的，但不会消除它们。使用RAG或显式源约束来减少它们。' },
            { q: 'GPT-5.6、Claude Opus 5和Gemini 3.1 Pro之间的推荐设置是否不同？', a: '不止是“略有不同”——其中一个已经完全不接受这个设置。Claude Opus 5（以及 Claude Sonnet 5 和 Claude Fable 5）会直接拒绝任何非默认的温度或 Top-P。Gemini 3.1 Pro 仍然通过 generationConfig 开放两者，在 0.5–0.7 之间表现稳妥。GPT-5.6 在非推理端点上接受完整范围，但在推理模式下拒绝非默认值。请按你实际调用的模型和模式来测试。' },
            { q: '公平地比较设置需要多少次运行？', a: '至少每个设置3–5次以查看典型行为。如果您在输出变异高的较高温度下工作，则更多。PromptQuorum的多运行功能会自动为所有模型处理此。' },
            { q: '如果我的模型拒绝温度参数，该怎么办？', a: '改用提示来控制。在原本会调低温度的场景，要求以精确的输出格式给出唯一确定的答案；在原本会调高温度的场景，明确要求给出若干个明显不同的方案。如果提供商开放了推理强度控制，那就是取代温度的设置。Anthropic 当前的 Claude 模型和 OpenAI 的推理模型会返回错误，而不是默默忽略该值。' },
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
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) — temperature 与 top_p 的官方参数范围和默认值',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — 关于核采样（Top-P）及其对文本质量影响的研究',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) — 列出拒绝非默认 temperature、top_p 和 top_k 的 Claude 模型',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) — Gemini 的生成配置，包括 temperature',
          ],
        },
      },
    },
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      heroImage: '/images/temperature-and-top-p-overview-hero-ko.webp',
      title: 'Temperature와 Top-P: AI 창의성 제어하기',
      intro: 'Temperature와 top-p는 AI의 단어 선택이 얼마나 모험적이거나 보수적인지를 제어합니다. 이 설정을 조정하면 창의성과 신뢰성 사이의 균형을 맞출 수 있습니다. 높은 값은 놀랍고 다양한 출력을 생성하고, 낮은 값은 안전하고 예측 가능한 출력을 생성합니다.',
      publishDate: '2026-03-22',
      dateModified: '2026-08-31',
      seoTitle: 'Temperature & Top-P 2026: AI 창의성과 정확도 조정하기',
      metaDescription: 'Temperature 0–2, Top-P 0.1–1.0: 코딩, 요약, 브레인스토밍에 맞게 AI 무작위성을 설정하고, 어떤 최신 모델이 사용자 지정 temperature를 거부하는지 확인하세요.',
      readTime: '10분 읽기',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Temperature 및 Top-P 샘플링',
      leadAnswerBlock: 'Temperature는 AI 출력의 무작위성을 직접 제어합니다(0.0은 거의 결정론적, 1.0 이상은 창의적). Top-p는 각 단계에서 고려할 단어 후보의 범위를 제한합니다. 대부분의 경우 temperature만 조정하고 top-p는 기본값(0.9–1.0)으로 유지하십시오.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Temperature와 Top-P: AI 창의성 제어하기',
        description: 'Temperature와 top-p가 AI의 무작위성을 어떻게 제어하는지 알아보세요. 코딩, 요약, 브레인스토밍에 맞는 실용적인 설정과 GPT-5.6, Claude Opus 5, Gemini 3.1 Pro에서 창의성과 신뢰성의 균형을 잡는 방법을 다룹니다.',
        datePublished: '2026-03-22',
        dateModified: '2026-08-31',
        url: 'https://www.promptquorum.com/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity',
        inLanguage: 'ko',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'ko'),
        keywords: ['temperature', 'top-p', 'nucleus sampling', 'AI 무작위성', 'LLM 설정', '창의성', 'GPT-5.6', 'Claude', 'Gemini', '프롬프트 튜닝'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.6' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 5' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
        ],
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/temperature-and-top-p-static.html',
      gammaDescription: '아래 슬라이드 덱은 다음을 다룹니다: temperature가 확률 샘플링을 제어하는 방식(0.0–2.0 범위), top-p의 nucleus sampling이 토큰 선택을 제한하는 방식, 6가지 사용 사례(코드, 창작, 사실 기반, 채팅)별 구체적인 설정, 그리고 빠른 참조 표. PDF를 temperature 및 top-p 파라미터 참조 카드로 내려받으세요.',
      sections: {
        definition: {
          title: 'Temperature와 Top-P란 무엇입니까?',
          snippets: [
            { type: 'in-one-sentence', text: 'Temperature는 모델 확률 분포의 뾰족한 정도를 조절하여 값이 낮을수록 결정적인 출력을, 높을수록 무작위성을 만들어 내며, Top-P는 확률의 합이 p가 되는 가장 작은 토큰 집합으로 샘플링 범위를 제한합니다.' },
            { type: 'in-plain-terms', text: 'Temperature는 창의성 다이얼입니다. 0으로 낮추면 일관되고 예측 가능한 답이 나오고, 높이면 뜻밖의 답이 나옵니다. Top-P는 같은 발상의 다른 레버로, 확률을 평평하게 만드는 대신 가능성이 낮은 단어들의 꼬리를 아예 후보에서 제외합니다.' },
          ],
          content: [
            '**Temperature는 모델의 출력을 더 무작위적(높음)으로 또는 더 결정론적(낮음)으로 만드는 조절 장치입니다.** Temperature 0.0에서는 모델이 항상 가장 가능성 높은 다음 단어를 선택하므로 반복 실행 시 출력이 거의 동일합니다. 다만 부동소수점 연산과 하드웨어 차이로 일부 토큰은 달라질 수 있습니다. Temperature 1.0 이상에서는 모델이 더 위험한 대안을 고려하여 놀랍고 다양한 텍스트를 생성합니다.',
            '**Top-p(nucleus sampling)는 각 단계에서 모델이 고려하는 단어 후보의 수를 제어합니다.** "얼마나 무작위적인가"가 아니라 "얼마나 많은 그럴듯한 선택지를 고려할 것인가"로 생각하십시오. Top-p 0.1에서는 모델이 누적 확률 10%에 도달할 때까지 최상위 후보만 고려합니다—좁고 안전합니다. Top-p 0.9에서는 훨씬 더 넓은 단어 집합을 고려합니다—더 느슨하고 다양합니다.',
            '평이한 표현으로: temperature는 "얼마나 모험적인가"를 제어하고, top-p는 "얼마나 많은 선택지를 고려할 것인가"를 제어합니다. 둘 다 출력의 다양성에 영향을 미치지만, 방식이 다릅니다.',
          ],
          callouts: [
            {
              type: 'info',
              label: '로컬 모델에서도 사용 가능',
              text: 'Temperature와 top-p 설정은 모든 [로컬 LLM 도구](https://www.promptquorum.com/local-llms)에서 사용 가능합니다. 동일한 파라미터, 동일한 효과입니다.'
            }
          ],
        },

        tldr: {
          title: '핵심 요점',
          isTldr: true,
          items: [
            '**Temperature는 무작위성을 직접 제어합니다:** 0.0–0.3은 결정론적, 0.4–0.7은 균형, 0.8 이상은 창의적.',
            '**Top-p는 단어 선택지의 범위를 제어합니다:** 낮으면 선택지가 좁아지고, 높으면 넓어집니다.',
            '**대부분의 사용자는 하나만 조정하고 나머지는 기본값으로 유지해야 합니다.** 둘 다 동시에 조정하면 어떤 설정이 도움이 되었는지 알 수 없습니다.',
            '**프롬프트 설계가 슬라이더 설정보다 훨씬 중요합니다.** 먼저 모호한 지침을 수정하고, 그 후에 필요한 경우 파라미터를 조정하십시오.',
            '**사용 사례마다 다른 설정이 필요합니다:** 코딩은 낮은 temperature가 필요하고, 브레인스토밍은 높은 값이 도움이 됩니다.',
            '**조정하기 전에 조절 장치가 남아 있는지 확인하십시오:** Anthropic의 현행 Claude 모델과 OpenAI의 추론 모델은 기본값이 아닌 temperature나 top-p를 오류로 거부합니다.',
          ],
        },

        promptExample: {
          title: '프롬프트 구조 + Temperature 설정',
          content: [
            '[나쁜 프롬프트] "가을에 대해 창의적인 것을 써줘."',
            '[좋은 프롬프트] "시인처럼 가을을 은유적으로 100자로 묘사해 주십시오. Temperature: 0.9, top-p: 0.95."',
          ],
        },

        notation: {
          title: '수학적 표기법',
          content: [
            'Temperature 범위: T ∈ [0.0, 2.0]',
            'Temperature를 적용한 softmax: softmax(logit_i / T) = exp(logit_i / T) / Σ(exp(logit_j / T))',
            'Top-p 샘플링: Σ P(token_i) ≥ p가 될 때까지 누적한 후 해당 집합에서 샘플링',
          ],
        },

        behavior: {
          title: 'AI 동작에 미치는 영향',
          content: [
            '**Temperature 효과:**',
          ],
        },

        tempTable: {
          columns: ['Temperature 범위', '동작', '최적 용도'],
          rows: [
            { 'Temperature 범위': '낮음 (0.0–0.3)', '동작': '집중적, 반복적, 매우 안정적', '최적 용도': '매번 동일한 답이 필요한 작업; 루프 위험 있음' },
            { 'Temperature 범위': '중간 (0.4–0.7)', '동작': '안정성과 변형의 균형', '최적 용도': '대부분의 일반 작업; 권장 시작점' },
            { 'Temperature 범위': '높음 (0.8–1.0+)', '동작': '창의적, 다양, 놀라운', '최적 용도': '브레인스토밍 및 변형; 환각 위험 있음' },
          ],
        },

        toppBehavior: {
          content: '**Top-p 효과:** 낮음 (0.1–0.3)은 매우 좁은 선택지 집합과 매우 보수적인 출력을 생성합니다. 중간 (0.5–0.7)은 다양성과 안정성의 균형을 맞춥니다. 높음 (0.8–1.0)은 선택지 집합을 넓히고 창의성을 장려하며, 높은 temperature와 유사합니다. **중요:** 많은 제공업체가 이 설정을 연동하거나 제한합니다. OpenAI의 GPT 모델은 temperature를 명시적으로 설정하면 top-p를 무시하는 경우가 많습니다. 반면 Anthropic의 현행 모델에서는 두 파라미터가 모두 기본값으로 완전히 잠겨 있습니다(아래 참조). 항상 제공업체의 문서를 확인하십시오—동일한 숫자가 모든 모델에서 동일한 의미를 갖지는 않습니다.',
        },


        providerLimits: {
          title: '모든 모델이 여전히 temperature 값을 받아들이는 것은 아닙니다',
          snippets: [
            { type: 'in-one-sentence', text: '여러 프런티어 모델이 이제 기본값이 아닌 temperature나 top-p를 오류로 거부하므로, 파라미터가 아직 남아 있는지부터 확인하십시오.' },
            { type: 'in-plain-terms', text: '최신 모델 중 일부에서는 조절 장치 자체가 사라졌습니다. 요청이 실패했다면 설정이 무시된 것이 아니라 거부된 것입니다.' },
          ],
          content: [
            '**점점 더 많은 프런티어 모델이 temperature나 top-p 값을 아예 받아들이지 않습니다. 조정된 출력 대신 오류를 반환합니다.** 추론 모드 모델은 초안 작성과 검증을 여러 차례 내부적으로 거쳐 답변을 구성하며, 제공업체는 그 과정의 보정을 유지하기 위해 샘플링 파라미터를 잠급니다. 조정에 시간을 쓰기 전에 호출할 모델에 해당 조절 장치가 남아 있는지 확인하십시오.',
            '**Anthropic:** Claude Opus 5, Claude Sonnet 5, Claude Fable 5(그리고 Claude Opus 4.7과 4.8)에서는 기본값이 아닌 temperature, top_p, top_k가 모든 요청에서 400 오류를 반환합니다. 사고 기능이 켜져 있을 때만이 아닙니다. 이전 Claude 모델에서는 이 제한이 사고가 활성화된 동안에만 적용되며, 이때 top_p는 0.95에서 1.0 사이에서 허용됩니다.',
            '**OpenAI:** 추론 모드의 GPT-5 계열은 기본값이 아닌 값을 "Unsupported value: temperature does not support 0.2 with this model. Only the default (1) value is supported."라는 오류로 거부합니다. 추론을 쓰지 않는 엔드포인트는 여전히 0–2 전체 범위를 받아들입니다.',
            '**Google:** Gemini는 여전히 generationConfig를 통해 temperature와 topP를 제공하므로, 이 가이드의 범위는 Gemini 모델에 그대로 적용됩니다.',
            '**로컬 모델:** Ollama, LM Studio, llama.cpp는 모든 모델에서 두 파라미터를 제공하며 제공업체 측 잠금이 없습니다. 같은 프롬프트에서 0.2와 0.9의 차이를 직접 느껴 보고 싶다면 [로컬 모델](https://www.promptquorum.com/local-llms)이 가장 저렴한 실험 장소입니다.',
            '파라미터가 잠겨 있을 때는 프롬프트로 방향을 잡습니다. temperature를 낮췄을 상황에서는 정확한 출력 형식으로 하나의 확정적인 답을 요구하고, 높였을 상황에서는 뚜렷이 다른 여러 대안을 명시적으로 요구하십시오. 제공업체가 추론 강도 조절을 제공한다면, 그것이 temperature를 대체한 설정입니다.',
          ],
          callouts: [
            {
              type: 'warning',
              label: '거부는 무효과가 아닙니다',
              text: '거부된 요청은 "설정이 아무 효과도 없었다"로 오해하기 쉽습니다. 400 오류는 파라미터가 거부되었다는 뜻이며, 지정한 값으로는 실행 자체가 이루어지지 않았습니다.'
            }
          ],
        },
        tradeoff: {
          title: 'Temperature vs Top-P: 둘 다 필요합니까?',
          content: '**두 설정 모두 무작위성을 제어하지만, 대부분의 사용자는 하나만 조정하고 나머지는 합리적인 기본값으로 유지해야 합니다.** 둘 다 동시에 변경하면 어떤 설정이 원하는 효과를 생성했는지 알 수 없습니다. 수천 개의 프롬프트를 조정한 경험상: 특정 모델이 달리 권장하지 않는 한 top-p는 기본값(예: 0.9–1.0)으로 유지하고 temperature만 조정하십시오.',
        },

        strategyTable: {
          columns: ['전략', 'Temperature', 'Top-P', '사용 시기'],
          rows: [
            { '전략': '결정론적 모드', 'Temperature': '0.0–0.2', 'Top-P': '1.0 (기본값)', '사용 시기': '코드, 데이터 추출, 미션 크리티컬 출력' },
            { '전략': '균형 기본값', 'Temperature': '0.5–0.7', 'Top-P': '0.9–1.0', '사용 시기': '대부분의 일반 작업, 요약, 설명' },
            { '전략': '창의적/브레인스토밍', 'Temperature': '0.8–1.0', 'Top-P': '0.9–1.0', '사용 시기': '아이디어 발굴, 마케팅 카피, 변형, 스토리텔링' },
            { '전략': '고안정성 프로덕션', 'Temperature': '0.0–0.3', 'Top-P': '0.95', '사용 시기': '의료, 금융, 법률, 안전 중요 분야' },
          ],
        },

        useCases: {
          title: '사용 사례별 권장 설정',
          items: [
            '**코딩, 리팩토링, 버그 수정:** Temperature 0.1–0.3, top-p 0.95. 구문이 정확해야 하며 창의성은 방해가 됩니다. 낮은 설정은 환각된 함수 이름이나 논리 오류를 방지합니다.',
            '**요약 및 설명:** Temperature 0.4–0.6, top-p 0.9. 명확성과 일관성이 필요하지만 표현의 약간의 변형은 괜찮습니다. 낮은 temperature는 요약을 기계적으로 만들 수 있습니다.',
            '**아이디어 브레인스토밍, 마케팅 카피, 창의적 변형:** Temperature 0.7–1.0, top-p 1.0. 높은 설정은 예상치 못한 조합과 새로운 표현을 장려합니다. 더 많은 출력을 필터링해야 하지만 더 독창적인 아이디어를 얻을 수 있습니다.',
            '**데이터 추출 및 구조화된 출력:** Temperature 0.0–0.2, top-p 0.95. 형식이 정확해야 합니다. 높은 무작위성은 파싱 오류와 누락된 필드를 유발합니다.',
            '**장문 글쓰기(에세이, 블로그 포스트):** Temperature 0.6–0.8, top-p 0.9–1.0. 여기서 시작하여 피드백을 바탕으로 조정하십시오. 출력이 일반적으로 느껴지면 temperature를 높이고, 벗어나거나 환각이 발생하면 낮추십시오.',
            '**사실 기반 Q&A (그라운딩 없음):** Temperature 0.3–0.5, top-p 0.9. 중간 설정은 자연스러운 응답을 유지하면서 환각을 줄입니다.',
          ],
        },

        promptsAndParams: {
          title: '프롬프트와 파라미터의 상호작용',
          content: [
            '**프롬프트 설계가 슬라이더 설정보다 훨씬 중요합니다.** temperature 0.2에서 모호한 지침은 여전히 나쁜 답을 생성합니다—단지 일관된 나쁜 답일 뿐입니다. 완벽한 설정으로 구성된 나쁜 프롬프트보다 어떤 temperature에서든 명확하고 잘 구조화된 프롬프트가 더 좋은 결과를 만들어냅니다. 프롬프트 구조 기본 원칙에 대해서는 [기초: 프롬프트 엔지니어링이란 무엇입니까?]를 참조하십시오.',
            '올바른 워크플로우는 다음과 같습니다: (1) 명확한 작업, 맥락, 제약 조건, 출력 형식으로 프롬프트를 먼저 설계합니다([기초: 모든 프롬프트에 필요한 5가지 구성 요소] 참조). (2) 목표 temperature/top-p에서 테스트합니다. (3) 프롬프트가 확고해진 후에 더 많거나 적은 변형이 필요한 경우에만 슬라이더를 조정합니다.',
            '다른 temperature에서 동일한 프롬프트는 매우 다른 스타일을 생성합니다. Temperature 0.2에서 출력은 안전하고 직접적입니다. Temperature 0.8에서 출력은 창의적이고 시적입니다. 어느 것도 "더 낫다"고 할 수 없습니다—브랜드 보이스와 사용 사례에 따라 다릅니다. 대부분의 작업에서 프롬프트를 먼저 수정하면 temperature를 조작할 필요가 없어집니다.',
          ],
        },

        example: {
          title: '[예시 프롬프트]',
          blockquote: '생산성 앱에 대한 짧고 강렬한 제품 태그라인을 작성해 주십시오. 10단어 이내로 작성하십시오.',
        },

        lowTemp: {
          title: 'Temperature 0.2에서:',
          blockquote: '"더 짧은 시간에 더 많은 일을 완수하십시오."',
        },

        highTemp: {
          title: 'Temperature 0.8에서:',
          blockquote: '"혼돈에서 명료함으로: 순간이 모멘텀으로 변하는 곳."',
        },

        risk: {
          title: '높은 창의성이 위험해지는 경우',
          content: [
            '**높은 temperature와 top-p는 환각, 주제 이탈, 스타일 드리프트를 증가시킵니다—특히 사실적 작업에서 그렇습니다.** 다음의 경우에는 보수적인 설정(temp 0.0–0.5)을 사용하십시오: 프로덕션에 배포되는 코드(환각된 API는 시스템을 망가뜨립니다), 의료 조언(잘못된 정보는 피해를 유발합니다), 금융 및 법률(정확도가 필수입니다), 안전 중요 결정(오류에 결과가 따릅니다).',
            '사실에 근거한 작업의 경우, 오류를 더 줄이기 위해 낮은 temperature와 [기법: RAG 설명: 실제 데이터로 AI 답변 근거 만들기] 또는 명시적 출처 제약을 함께 사용하는 것을 고려하십시오. 높은 temperature가 왜 조작을 증폭시키는지에 대한 더 깊은 맥락을 보려면 [기초: AI 환각: AI가 허구를 만드는 이유]도 참조하십시오.',
          ],
        },

        promptquorum: {
          title: 'PromptQuorum으로 Temperature와 Top-P 조정하기',
          content: [
            '**PromptQuorum에서 테스트됨 — temperature 조절이 가능한 모델들에 걸쳐 0.2, 0.7, 1.2에서 60개의 창의적 글쓰기 프롬프트 실행:** 0.7에서는 60개 중 54개가 사용 가능한 첫 번째 초안을 생성했습니다. 1.2에서는 60개 중 31개가 환각된 세부 사항이나 깨진 구조를 생성했습니다. 0.2에서는 60개 중 58개가 정확했지만 블라인드 리뷰에서 평가자들이 "일반적"이라고 평가했습니다.',
            '일반적으로 temperature와 top-p 설정을 테스트하려면 동일한 프롬프트를 여러 모델에 걸쳐 여러 번 실행하고, 수동으로 출력을 기록하고 비교해야 합니다—시간이 많이 걸리고 추적하기 어렵습니다. PromptQuorum은 이 워크플로우를 간소화합니다.',
            '**멀티 모델 비교:** 단일 디스패치에서 파라미터를 받아들이는 25개 이상의 모델(Gemini 3.1 Pro, GPT-5.6의 비추론 엔드포인트, Mistral, 로컬 Ollama 모델)에 걸쳐 다른 temperature/top-p 설정으로 하나의 프롬프트를 전송합니다. 어떤 모델이 높은 temperature에서도 안정적이고, 어떤 모델이 목표 설정에서 최고의 창의적 출력을 제공하는지 즉시 확인할 수 있습니다.',
            '**프레임워크 기반 구조:** PromptQuorum의 프레임워크는 슬라이더를 건드리기 전에 지침, 형식, 제약 조건이 잘 구조화되어 있는지 확인합니다. 이를 통해 다른 변수들로부터 temperature/top-p의 효과를 격리합니다—나쁜 프롬프트와 파라미터 조정을 혼합하지 않게 됩니다.',
            '**컨센서스 및 점수:** 환각 위험, 스타일 일관성, 관련성을 점수로 매기는 Quorum 분석과 함께 모든 출력을 나란히 볼 수 있습니다. 작업의 창의성-신뢰성 트레이드오프에 가장 적합한 모델 + 설정 조합을 선택하십시오.',
            '**자동 temperature 권장:** PromptQuorum은 작업 설명과 프롬프트 구조를 분석한 후, 사용 사례(코딩, 요약, 브레인스토밍 등)를 기반으로 최적의 temperature 범위를 제안합니다. 앱과 Chrome 확장 프로그램 모두에서 사용 가능하며, PromptQuorum은 사용 중인 특정 작업 및 모델에 맞춰 표준 기본값을 넘어서는 temperature 값을 제안합니다. "0.2를 써야 할까, 0.7을 써야 할까?" 대신, 도구가 작업 분석을 기반으로 구체적인 값을 추천하여 수동 시행착오를 건너뛸 수 있게 합니다.',
            '**로컬 LLM 워크플로우:** 스크립트 작성 없이 Ollama 또는 LM Studio에서 다양한 temperature/top-p 조합을 테스트하고, 워크플로우에 맞는 최적의 프리셋을 저장하십시오.',
          ],
        },

        recipes: {
          title: '빠른 시작 레시피',
          content: '이것들을 작업의 시작점으로 사용하십시오:',
        },

        recipeSafe: {
          items: [
            '**안전 사실 모드:** Temperature 0.2, top-p 0.95 | Q&A, 요약, 데이터 추출, 사실 기반 작업에 최적 | 출력: 신뢰할 수 있고, 일관되며, 환각 최소화',
            '**기본 균형 모드:** Temperature 0.5, top-p 0.9 | 대부분의 일반 작업, 설명, 일반 글쓰기에 최적 | 출력: 자연스럽고, 안정적이며, 약간의 변형 포함',
            '**창의적 브레인스토밍 모드:** Temperature 0.8, top-p 1.0 | 아이디어 발굴, 마케팅 카피, 스토리텔링, 변형에 최적 | 출력: 다양하고, 놀라우며, 필터링할 옵션이 많음',
            '**단답형 모드:** Temperature 0.3, top-p 0.95 ([기초: 더 빠른 AI 답변: 속도를 위한 프롬프트 작성법]과 함께 사용) | 직접적인 응답, 빠른 결정, 간결한 출력에 최적 | 출력: 빠르고, 직접적이며, 자세한 설명 최소화',
            '**실험 모드:** Temperature 1.0, top-p 1.0 | 모델 동작 탐색, 한계 이해, 연구에 최적 | 출력: 예측 불가능하며 가장 높은 변형',
          ],
        },

        mistakes: {
          title: 'Temperature와 Top-P에 관한 일반적인 실수',
          items: [
            '**둘 다 최대로 높이고 신뢰성을 기대하는 것.** 높은 temperature + 높은 top-p = 최대 무작위성. 브레인스토밍이나 실험하는 경우에만 이렇게 하십시오.',
            '**두 개의 조절 장치를 동시에 변경하는 것.** 어떤 설정이 도움이 되었거나 해가 되었는지 알 수 없습니다. 하나를 변경하고 관찰한 후, 필요하다면 다른 것을 변경하십시오.',
            '**슬라이더로 나쁜 프롬프트를 수정하려는 것.** 어떤 temperature에서든 모호한 지침은 여전히 나쁜 출력을 생성합니다. 프롬프트를 먼저 수정하십시오.',
            '**모든 모델에 여전히 temperature 조절 장치가 있다고 가정하는 것.** Anthropic의 현행 Claude 모델과 OpenAI의 추론 모델은 기본값이 아닌 값을 곧바로 거부하며, 값을 받아들이는 모델들 사이에서도 같은 숫자의 의미는 다릅니다. Gemini 3.1 Pro의 temperature 0.7은 로컬 Llama 빌드의 0.7과 같지 않습니다. 실제로 호출할 모델을 그대로 테스트하십시오.',
            '**충분히 많은 실행을 테스트하지 않는 것.** Temperature 0.5에서의 하나의 출력은 예외값일 수 있습니다. 일반적인 동작을 파악하기 위해 최소 3–5회 실행하십시오.',
            '**Temperature를 0으로 설정하고 완벽한 정확성을 기대하는 것.** 낮은 temperature는 무작위성을 줄이지만 환각을 제거하지는 않습니다. 환각은 무작위 샘플링이 아니라 학습 데이터의 공백에서 비롯됩니다.',
            '**제공업체가 무시한다고 해서 top-p를 완전히 무시하는 것.** 일부 모델은 무시하고, 일부는 그렇지 않습니다. 비활성화된 조절 장치를 조정하는 데 시간을 낭비하지 않으려면 문서를 확인하십시오.',
          ],
        },

        howToStart: {
          title: '작업에 맞는 Temperature와 Top-P 설정 방법',
          numberedItems: [
            '**파라미터가 아닌 프롬프트로 시작하십시오:** 지침이 명확해질 때까지 작성하고 다듬으십시오. 파라미터는 모호한 프롬프트를 수정할 수 없습니다—샘플링 분포에만 영향을 미치며, 모델의 작업 이해에는 영향을 주지 않습니다.',
            '**작업 유형을 파악하십시오:** 사실적 또는 분석적 작업(법률 분석, 코드 검토, 데이터 추출) → temperature 0.0–0.3 설정. 창의적 또는 생성적 작업(브레인스토밍, 카피라이팅, 스토리 아이디어) → temperature 0.7–1.0 설정.',
            '**top-p는 기본값(0.9–1.0)으로 유지하십시오:** 특별한 이유가 있을 때만 top-p를 조정하십시오. temperature와 top-p를 동시에 조정하면 어떤 설정이 출력을 변경했는지 진단하기 어렵습니다.',
            '**목표 temperature에서 3–5개의 테스트 프롬프트를 실행하십시오:** 출력 일관성을 평가하십시오. 사실적 작업에서 출력이 너무 많이 변하면 temperature를 낮추십시오. 창의적 작업에서 출력이 반복적으로 느껴지면 temperature를 높이십시오.',
            '**사용 사례별로 보정된 설정을 문서화하십시오:** 특정 워크플로우에 맞는 올바른 temperature를 찾으면, 세션 간에 일관되게 적용되도록 시스템 프롬프트 템플릿에 기록하십시오.',
          ],
        },

        faqs: {
          faqs: [
            {
              q: 'temperature와 top-p 중 어느 것을 먼저 조정해야 합니까?',
              a: 'Temperature를 먼저 조정하십시오. 더 명확한 효과가 있습니다. 작업에서 temperature가 어떤 역할을 하는지 파악할 때까지 top-p를 기본값(0.9–1.0)으로 유지한 후, 필요한 경우에만 top-p를 미세 조정하십시오.',
            },
            {
              q: '모델이 내 temperature 설정을 무시하는 이유는 무엇입니까?',
              a: '대개는 무시하는 것이 아니라 거부하는 것입니다. Anthropic의 현행 Claude 모델과 OpenAI의 추론 모델은 temperature나 top-p가 기본값이 아니면 400 오류를 반환하며, 일부 이전 구성에서는 한쪽을 명시적으로 설정하면 다른 쪽이 조용히 제한됩니다. 제공업체 문서를 확인하고, 실패한 요청은 효과 없는 설정이 아니라 거부로 읽으십시오.',
            },
            {
              q: 'temperature를 0으로 설정하면 완벽한 정확성이 보장됩니까?',
              a: '아니요. Temperature 0.0은 "항상 가장 가능성 높은 단어를 선택"을 의미하며, 거의 결정론적이지만 항상 정확하지는 않습니다. 환각은 학습 데이터의 공백과 작업의 모호성 때문에 발생하며, 무작위 샘플링 때문만은 아닙니다. 더 나은 신뢰성을 위해 낮은 temperature와 명확한 프롬프트 및 그라운딩을 함께 사용하십시오.',
            },
            {
              q: '낮은 temperature에서도 환각이 발생하는 이유는 무엇입니까?',
              a: '환각은 모델의 학습 데이터에 공백이 있거나 작업이 모호할 때 발생합니다—단순히 무작위 샘플링 때문만은 아닙니다. 낮은 temperature 설정은 환각에 대해 일관성을 유지하지만 제거하지는 않습니다. 환각을 줄이기 위해 RAG 또는 명시적 출처 제약을 사용하십시오.',
            },
            {
              q: 'GPT-5.6, Claude Opus 5, Gemini 3.1 Pro 간에 권장 설정이 다릅니까?',
              a: '약간이 아니라 셋 중 하나는 아예 이 설정을 받지 않습니다. Claude Opus 5(그리고 Claude Sonnet 5, Claude Fable 5)는 기본값이 아닌 temperature나 top-p를 그대로 거부합니다. Gemini 3.1 Pro는 여전히 generationConfig로 두 값을 제공하며 0.5–0.7에서 무난하게 동작합니다. GPT-5.6는 추론을 쓰지 않는 엔드포인트에서는 전체 범위를 받아들이지만, 추론 모드에서는 기본값이 아닌 값을 거부합니다. 실제로 호출할 모델과 모드를 그대로 테스트하십시오.',
            },
            {
              q: '설정을 공정하게 비교하려면 몇 번이나 실행해야 합니까?',
              a: '일반적인 동작을 파악하기 위해 설정당 최소 3–5번. 출력 분산이 높은 높은 temperature에서 작업하는 경우 더 많이 필요합니다. PromptQuorum의 멀티 실행 기능은 모든 모델에 걸쳐 이를 자동으로 처리합니다.',
            },
            { q: '모델이 temperature 파라미터를 거부하면 어떻게 해야 합니까?', a: '대신 프롬프트로 방향을 잡으십시오. temperature를 낮췄을 상황에서는 정확한 출력 형식으로 하나의 확정적인 답을 요구하고, 높였을 상황에서는 뚜렷이 다른 여러 대안을 명시적으로 요구하십시오. 제공업체가 추론 강도 조절을 제공한다면 그것이 temperature를 대체하는 설정입니다. Anthropic의 현행 Claude 모델과 OpenAI의 추론 모델은 값을 조용히 무시하지 않고 오류를 반환합니다.' },
          ],
        },

        relatedReading: {
          content: [
            '[프롬프트 엔지니어링이란 무엇입니까?](/ko/prompt-engineering/what-is-prompt-engineering) — 파라미터보다 프롬프트 구조가 왜 더 중요한지',
            '[모든 프롬프트에 필요한 5가지 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs) — 파라미터를 조정하기 전에 프롬프트를 구조화하는 방법',
            '[AI 환각: AI가 허구를 만드는 이유](/ko/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 왜 낮은 temperature가 환각을 제거하지 못하는지',
          ],
        },

        sources: {
          content: [
            '[OpenAI. "API reference: Chat Completions"](https://platform.openai.com/docs/api-reference/chat/create) — temperature와 top_p의 공식 파라미터 범위 및 기본값',
            '[Holtzman et al., 2020. "The Curious Case of Neural Text Degeneration"](https://arxiv.org/abs/1904.09751) — nucleus sampling(top-p)과 텍스트 품질에 미치는 영향에 관한 연구',
            '[Anthropic. "Thinking"](https://platform.claude.com/docs/en/build-with-claude/thinking) — 기본값이 아닌 temperature, top_p, top_k를 거부하는 Claude 모델 목록',
            '[Google. "Gemini API: Text generation"](https://ai.google.dev/gemini-api/docs/text-generation) — temperature를 포함한 Gemini 생성 설정',
          ],
        },
      },
    },
  };
