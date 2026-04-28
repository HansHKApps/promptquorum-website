// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: constrained-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Constrained Prompting',
      intro: '**Constrained prompting is a technique where you tell the model not just what to do, but also what it must and must not do — using "must," "must not," and "only" language — so outputs stay inside clearly defined boundaries.** This is essential when you need reliable formats, safe content, or strict compliance with internal rules.',
      publishDate: '2026-03-26',
      readTime: '6 min read',

      seoTitle: 'Constrained Prompting: Force AI Output Formats (2026)',

      metaDescription: 'Force AI output into JSON, XML, or structured tables. 5 constraint types for GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro with real examples and a 5-step implementation guide.',

      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      audience: 'Developers, product managers, and teams building LLM-powered workflows',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['Constrained Prompting', 'Structured Output', 'Prompt Engineering'],
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is Constrained Prompting?', anchor: '#what-is-constrained-prompting' },
        { label: 'Why Does Constrained Prompting Matter?', anchor: '#why-does-constrained-prompting-matter' },
        { label: 'Which Constraint Types Can You Use?', anchor: '#which-constraint-types-can-you-use' },
        { label: 'Unconstrained vs Constrained Prompt: An Example', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: 'When Should You Use Constrained Prompting?', anchor: '#when-should-you-use-constrained-prompting' },
        { label: 'How Does PromptQuorum Support Constrained Prompting?', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'How to Use Constrained Prompting', anchor: '#how-to-use-constrained-prompting' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#frequently-asked-questions' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/constrained-prompting',
        inLanguage: 'en',
        headline: 'Constrained Prompting: Force AI Output Formats (2026)',
        description: 'What constrained prompting is, why it matters, and how to use it to make AI outputs predictable and safe in real workflows.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-28',
        keywords: ['constrained prompting', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Constrained Prompting' },
          { '@type': 'Thing', name: 'Structured Output' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          { '@type': 'Question', name: 'What is constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable. Instead of "write a summary," you specify: 150 words, JSON format, no competitor names, must include a call-to-action.' } },
          { '@type': 'Question', name: 'What are the five types of constraints?', acceptedAnswer: { '@type': 'Answer', text: 'The five main constraint types are: (1) Structural — required headings, tables, JSON with specific keys. (2) Content — required sections, banned topics. (3) Style — tone, reading level, terminology. (4) Length — word or character limits. (5) Safety — avoid medical advice, personal data, legal conclusions.' } },
          { '@type': 'Question', name: 'How do you force a model to output valid JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Provide the exact JSON schema in the prompt: "Return JSON exactly matching: { \\"finding\\": \\"...\\" }". Combine this with "Output only JSON, no other text." GPT-5.5 also supports a JSON mode via API that enforces valid JSON at the API level.' } },
          { '@type': 'Question', name: 'Does constrained prompting work on GPT-5.5, Claude, and Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — all three support constrained prompting. GPT-5.5 and Claude Opus 4.7 follow hard format constraints (JSON, tables, word limits) at approximately 95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly but may interpret ambiguous constraints differently. Always test across models.' } },
          { '@type': 'Question', name: 'What is the difference between constrained prompting and few-shot prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained prompting adds explicit rules in text form (format, length, content restrictions). Few-shot prompting provides worked examples that implicitly show the model what to produce. The two work well together: use a few-shot example to demonstrate the output pattern, then add constraints for stricter enforcement.' } },
          { '@type': 'Question', name: 'When should you NOT use constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Avoid structural constraints on open-ended creative tasks (brainstorming, ideation, fiction). Over-constraining creative prompts produces formulaic, low-quality output. Use tone and style constraints for creative tasks but allow structural freedom.' } },
          { '@type': 'Question', name: 'How many constraints can you stack in one prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Practically, 3–5 constraints work well. Beyond 5–6, models start silently dropping lower-priority constraints without warning. If you need more than 5, list them in priority order and state explicitly: "If constraints conflict, apply them in this order: (1) safety, (2) format, (3) length."' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Use Constrained Prompting',
        inLanguage: 'en',
        description: 'A 5-step guide to applying output constraints in prompts for GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Identify output constraints', text: 'Identify constraints relevant to your task: length, format, vocabulary, scope, and safety.' },
          { '@type': 'HowToStep', position: 2, name: 'Use hard constraint language', text: 'State constraints using "must," "must not," and "only" — never "try to" or "aim to."' },
          { '@type': 'HowToStep', position: 3, name: 'Provide a format example', text: 'For format constraints, show the exact schema inline: JSON keys, Markdown structure, or field names.' },
          { '@type': 'HowToStep', position: 4, name: 'List content inclusions and exclusions', text: 'Explicitly list what to include and what to exclude by topic, terminology, and data type.' },
          { '@type': 'HowToStep', position: 5, name: 'Test on edge cases', text: 'Generate 10 outputs. Verify all respect the length limit, format, and content boundaries.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**Constrained prompting** adds explicit rules (structure, content, length, safety) to a prompt so AI output stays predictable across runs.',
            '5 constraint types: structural, content, style, length, and safety — combine them for maximum output control.',
            'Use mandatory language: **"must," "must not," "only."** Soft directives like "try to" are frequently ignored.',
            'Format constraints work best with an example: show the model the exact JSON schema or Markdown structure you need.',
            'GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro all support constrained prompting but respond differently — test across models.',
            'Constrained prompts save review time: outputs that already match your required structure need less human correction.',
            'Use [PromptQuorum](https://www.promptquorum.com/) to test constrained prompts across multiple models side by side.',
          ],
        },
        whatIsConstrained: {
          title: 'What Is Constrained Prompting?',
          content: [
            '**Constrained prompting means adding explicit rules about content, structure, length, and behavior directly into your prompt.** Instead of a loose instruction like "summarize this," you specify allowed formats, required fields, banned topics, and validation rules. This is a core [prompt engineering](/prompt-engineering/what-is-prompt-engineering) technique.',
            'Constraints can include output schemas (such as JSON with fixed keys), word limits, tone requirements, and safety restrictions like "do not provide medical diagnoses." By making these rules part of the prompt, you reduce ambiguity and make the model easier to integrate into production workflows.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable.' },
            { type: 'in-plain-terms', text: 'Instead of asking AI to "write a summary," you tell it: maximum 150 words, use bullet points, do not mention competitors, always include a call-to-action. The more specific the rules, the more consistent the output.' },
          ],
          callouts: [
            { type: 'note', label: 'Definition', text: 'Constrained prompting is not a separate API feature — it is a prompting technique. You apply constraints in plain text within the prompt itself. No special syntax or API flags required.' },
          ],
        },
        whyItMatters: {
          title: 'Why Does Constrained Prompting Matter?',
          content: [
            '**Constrained prompting matters whenever model output feeds into people, processes, or other systems that depend on predictable behavior.** Without constraints, the same prompt may produce different structures or levels of detail across runs.',
            'Clear constraints help you:',
          ],
          items: [
            'Prevent unexpected content or formatting that breaks downstream tools.',
            'Enforce brand, legal, or safety guidelines directly at the prompt level.',
            'Reduce review time because outputs already match your required structure.',
          ],
        },
        typesOfConstraints: {
          title: 'Which Constraint Types Can You Use?',
          content: [
            '**You can constrain prompts along several dimensions: structure, content, style, length, and safety.** The more precise you are, the more consistent the outputs become. Learn how these fit into [structured prompts](/prompt-engineering/rtf-framework).',
            'Common constraint types include:',
          ],
          items: [
            'Structural constraints: Required headings, bullet lists, tables, or JSON with specific keys.',
            'Content constraints: Required sections (such as "Risks" or "Next steps") and banned topics or phrases.',
            'Style constraints: Tone ("formal," "neutral," "conversational"), reading level, or terminology rules.',
            'Length constraints: Word or character limits, or a fixed number of bullets or sections.',
            'Safety constraints: Instructions to avoid personal data, medical advice, legal conclusions, or disallowed content categories.',
          ],
          columns: ['Constraint Type', 'Example', 'When to Use'],
          rows: [
            { 'Constraint Type': 'Structural', 'Example': '"Return as JSON: {key: value}"', 'When to Use': 'API integrations, data pipelines' },
            { 'Constraint Type': 'Content', 'Example': '"Must include risks section; must not mention competitors"', 'When to Use': 'Reports, customer comms' },
            { 'Constraint Type': 'Style', 'Example': '"Formal tone, no contractions, Grade 8 reading level"', 'When to Use': 'Brand-controlled outputs' },
            { 'Constraint Type': 'Length', 'Example': '"≤150 words, exactly 5 bullet points"', 'When to Use': 'Templated content, summaries' },
            { 'Constraint Type': 'Safety', 'Example': '"Must not provide medical diagnoses or legal advice"', 'When to Use': 'Regulated industries, public-facing' },
          ],
          callouts: [
            { type: 'tip', label: 'Pro Tip', text: 'For JSON output, always provide the exact key names and value types in the prompt. "Return JSON" without a schema produces inconsistent key naming across models.' },
          ],
        },
        example: {
          title: 'Unconstrained vs Constrained Prompt: An Example',
          content: [
            '**The impact of constrained prompting is easiest to see when you compare an unconstrained prompt with a constrained one for the same task.** Here we draft a short product summary.',
            '**Unconstrained prompt** (produces variable length, structure, and tone on every run):',
            '"Write a summary of our new analytics feature."',
            '**Constrained version** (defines length, structure, style, and required content):',
            '"You are a B2B product marketer. Task: Write a summary of our new analytics feature for a product page. Constraints: Length: 120–160 words. Structure: 1 short intro paragraph, then 3 bullet points, then 1 closing sentence. Style: Clear, neutral-professional tone. No hype words like \'revolutionary\' or \'game-changing\'. Content: Mention the main benefit (faster insight into customer behavior) and one concrete example use case. Output format: Valid Markdown with bullet points using `-`."',
            'The constrained version defines length, structure, style, and required content. Output becomes predictable and reusable — suitable for templating across team workflows.',
          ],
          callouts: [
            { type: 'practice', label: 'Rule', text: 'Every constraint you add reduces the variance in model output. Start with 1–2 constraints, test, then add more. Stacking 5+ constraints at once increases the risk of the model violating one silently.' },
          ],
        },
        whenToUse: {
          title: 'When Should You Use Constrained Prompting?',
          content: [
            '**You should use constrained prompting whenever correctness and consistency are more important than maximum creativity.** This is particularly true in operational, analytical, and regulated contexts. Paired with [few-shot examples](/prompt-engineering/few-shot-prompting), constraints become even more powerful.',
            'Typical use cases include:',
          ],
          items: [
            'Generating JSON or table outputs that other systems will parse.',
            'Creating standardized reports, summaries, or status updates across teams.',
            'Drafting customer communications that must follow brand or legal guidelines.',
            'Extracting structured data (issues, entities, metrics) from unstructured text.',
          ],
          callouts: [
            { type: 'warning', label: 'Avoid', text: 'Do not apply length or structural constraints to open-ended creative tasks (brainstorming, ideation). Over-constraining creative prompts produces generic, box-checking outputs rather than genuinely useful ideas.' },
          ],
        },
        howPQSupports: {
          title: 'How Does PromptQuorum Support Constrained Prompting?',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that is designed to work well with constrained prompting by letting you define, save, and reuse structured prompt frameworks.** You can combine constraints with frameworks like [SPECS](/prompt-engineering/specs-framework), [RTF](/prompt-engineering/rtf-framework), or Google\'s Prompting Guide and send them to several models at once.',
            'In PromptQuorum, you can:',
          ],
          items: [
            'Encode structural and content constraints directly into frameworks so every run follows the same rules.',
            'Test constrained prompts across multiple models side by side to see which provider adheres best to your specifications.',
            'Save constrained prompts as templates for recurring tasks, ensuring your team always uses the same validated patterns.',
          ],
        },

        howToStart: {
          title: 'How to Use Constrained Prompting',
          numberedItems: [
            '**Identify output constraints relevant to your task: length, format, vocabulary, scope, safety.** Example: \'Response must be ≤100 words, JSON format, use only technical terms, cover only recent developments (2024+), must not mention competitors.\'',
            '**State constraints explicitly using \'must,\' \'must not,\' and \'only\' language.** Avoid soft directives like \'try to\' or \'aim to.\' Hard constraints are more reliable.',
            '**For format constraints, provide an example of the exact format you want.** Show the model: \'Return as JSON: { \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] }\'',
            '**For content constraints, list what to include and exclude explicitly.** Example: \'Include: technical details, performance metrics. Exclude: marketing language, competitor names, pricing.\'',
            '**Test constrained prompts on edge cases to ensure the model respects all constraints.** Generate 10 outputs. Check: Do all respect the length limit? Do all use the correct format? Are there any violations?',
          ],
          callouts: [
            { type: 'insight', label: 'Insight', text: 'GPT-5.5 and Claude Opus 4.7 follow hard format constraints (JSON, tables, word limits) at ~95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly. All three degrade when constraints are vague or contradictory.' },
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes',
          mistakes: [
            {
              mistake: 'Using soft constraint language ("try to", "aim for")',
              problem: 'Models treat soft directives as suggestions, not rules. "Try to keep it under 200 words" produces outputs ranging from 80 to 400 words.',
              fix: 'Use absolute language: "Response must be 150–200 words. No exceptions."',
            },
            {
              mistake: 'Stacking too many constraints without priority order',
              problem: 'When 6+ constraints conflict, the model silently drops lower-priority ones without warning.',
              fix: 'List constraints in priority order. Add: "If constraints conflict, prioritize in this order: (1) safety, (2) format, (3) length."',
            },
            {
              mistake: 'Not providing a format example for JSON/structured output',
              problem: '"Return as JSON" produces inconsistent key names and nesting across models and runs.',
              fix: 'Show the exact schema inline: "Return JSON exactly matching this structure: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'Applying structural constraints to creative generation tasks',
              problem: 'Strict structure on open-ended tasks produces formulaic, low-quality creative output.',
              fix: 'Reserve structural constraints for operational tasks. Use tone/style constraints only for creative tasks.',
            },
            {
              mistake: 'Not testing constraints across models',
              problem: 'GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro all interpret the same constraint differently. A prompt that works on one may fail on another.',
              fix: 'Test your constrained prompt on at least 2 models before deploying. Use [PromptQuorum](https://www.promptquorum.com/) to run parallel comparisons.',
            },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — Foundations before applying constraints.',
            '[RTF Framework](/prompt-engineering/rtf-framework) — Role-Task-Format: a structured framework that pairs naturally with constrained prompting.',
            '[Few-Shot Prompting](/prompt-engineering/few-shot-prompting) — Providing examples is a form of implicit constraint.',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — When you want reasoning steps, not just constrained output.',
            '[AI Hallucinations: How to Stop Them](/prompt-engineering/ai-hallucinations-how-to-stop) — Constraints that reduce hallucination risk.',
            '[Prompt Engineering Fundamentals](/prompt-engineering/fundamentals-of-prompt-optimization) — Optimization techniques that extend constrained prompting.',
          ],
        },
        faqSection: {
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What is constrained prompting?', a: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable. Instead of "write a summary," you specify: 150 words, JSON format, no competitor names, must include a call-to-action.' },
            { q: 'What are the five types of constraints?', a: 'The five main constraint types are: (1) Structural — required headings, tables, JSON with specific keys. (2) Content — required sections, banned topics. (3) Style — tone, reading level, terminology. (4) Length — word or character limits. (5) Safety — avoid medical advice, personal data, legal conclusions.' },
            { q: 'How do you force a model to output valid JSON?', a: 'Provide the exact JSON schema in the prompt: "Return JSON exactly matching: { \\"finding\\": \\"...\\" }". Combine this with "Output only JSON, no other text." GPT-5.5 also supports a JSON mode via API that enforces valid JSON at the API level.' },
            { q: 'Does constrained prompting work on GPT-5.5, Claude, and Gemini?', a: 'Yes — all three support constrained prompting. GPT-5.5 and Claude Opus 4.7 follow hard format constraints (JSON, tables, word limits) at approximately 95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly but may interpret ambiguous constraints differently. Always test across models.' },
            { q: 'What is the difference between constrained prompting and few-shot prompting?', a: 'Constrained prompting adds explicit rules in text form (format, length, content restrictions). Few-shot prompting provides worked examples that implicitly show the model what to produce. The two work well together: use a few-shot example to demonstrate the output pattern, then add constraints for stricter enforcement.' },
            { q: 'When should you NOT use constrained prompting?', a: 'Avoid structural constraints on open-ended creative tasks (brainstorming, ideation, fiction). Over-constraining creative prompts produces formulaic, low-quality output. Use tone and style constraints for creative tasks but allow structural freedom.' },
            { q: 'How many constraints can you stack in one prompt?', a: 'Practically, 3–5 constraints work well. Beyond 5–6, models start silently dropping lower-priority constraints without warning. If you need more than 5, list them in priority order and state explicitly: "If constraints conflict, apply them in this order: (1) safety, (2) format, (3) length."' },
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '**OpenAI. (2024).** "Structured Outputs Guide." https://platform.openai.com/docs/guides/structured-outputs — JSON schema enforcement at the API level for GPT-5.5.',
            '**Anthropic. (2025).** "Claude Prompt Engineering Guide: Constrained Output." https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Claude-specific constraint syntax and adherence behavior.',
            '**White et al. (2023).** "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." https://arxiv.org/abs/2302.11382 — Academic taxonomy of prompt patterns including constraint-based prompting techniques.',
          ],
        },
      },
    },
    de: {
  theme: 'Techniques',
  title: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
  intro: 'Constrained Prompting ist eine Technik, bei der Sie dem Modell nicht nur sagen, was es tun soll, sondern auch, was es unbedingt tun und nicht tun muss – damit die Ausgaben innerhalb klar definierter Grenzen bleiben. Dies ist essentiell, wenn Sie zuverlässige Formate, sichere Inhalte oder strikte Einhaltung interner Richtlinien benötigen.',
  publishDate: '2026-03-26',
  readTime: '6 min Lesezeit',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Constrained Prompting',
  metaDescription: 'Constrained Prompting für strukturierte KI-Ausgaben. Wie Sie Regeln, Formate und Inhaltsrichtlinien direkt im Prompt definieren.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
    description: 'Was Constrained Prompting ist, warum es wichtig ist und wie Sie es einsetzen, um KI-Ausgaben vorhersehbar und sicher in produktiven Workflows zu machen.',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['Constrained Prompting', 'Prompt Engineering', 'strukturierte Prompts', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsConstrained: {
      title: 'Was ist Constrained Prompting?',
      content: [
        '**Constrained Prompting bedeutet, explizite Regeln über Inhalt, Struktur, Länge und Verhalten direkt im Prompt zu definieren.** Statt einer lockeren Anweisung wie „fasse das zusammen" legen Sie zulässige Formate, erforderliche Felder, verbotene Themen und Validierungsregeln fest.',
        'Constraints können Ausgabeschemas (wie JSON mit festen Schlüsseln), Wortlimits, Tonanforderungen und Sicherheitsrestriktionen wie „stelle keine medizinischen Diagnosen" enthalten. Indem Sie diese Regeln als Teil des Prompts verankern, reduzieren Sie Mehrdeutigkeit und vereinfachen die Integration des Modells in produktive Arbeitsabläufe.',
      ],
    },
    whyItMatters: {
      title: 'Warum ist Constrained Prompting wichtig?',
      content: [
        '**Constrained Prompting ist immer dann wichtig, wenn die Modellausgaben in Menschen, Prozesse oder andere Systeme fließen, die auf vorhersehbares Verhalten angewiesen sind.** Ohne Constraints können identische Prompts unterschiedliche Strukturen oder Detailmengen über mehrere Durchläufe hinweg produzieren.',
        'Klare Constraints helfen Ihnen dabei:',
      ],
      items: [
        'Unerwartete Inhalte oder Formatierung zu verhindern, die nachgelagerte Tools beschädigen.',
        'Brand-, Legal- oder Sicherheitsrichtlinien direkt auf Prompt-Ebene durchzusetzen.',
        'Überprüfungszeiten zu verkürzen, da Ausgaben bereits Ihre erforderliche Struktur erfüllen.',
      ],
    },
    typesOfConstraints: {
      title: 'Arten von Constraints, die Sie nutzen können',
      content: [
        '**Sie können Prompts entlang mehrerer Dimensionen einschränken: Struktur, Inhalt, Stil, Länge und Sicherheit.** Je präziser Sie sind, desto konsistenter werden die Ausgaben.',
        'Häufige Constraint-Typen sind:',
      ],
      items: [
        'Strukturelle Constraints: Erforderliche Überschriften, Aufzählungen, Tabellen oder JSON mit spezifischen Schlüsseln.',
        'Inhalts-Constraints: Erforderliche Abschnitte (wie „Risiken" oder „Nächste Schritte") und verbotene Themen oder Ausdrücke.',
        'Stil-Constraints: Ton („formell", „neutral", „gesprächig"), Lesenlevel oder Terminologie-Regeln.',
        'Längen-Constraints: Wort- oder Zeichenlimits oder eine feste Anzahl von Aufzählungen oder Abschnitten.',
        'Sicherheits-Constraints: Anweisungen zur Vermeidung von personenbezogenen Daten, medizinischen Ratschlägen, rechtlichen Schlussfolgerungen oder nicht zulässigen Inhaltskategorien.',
      ],
    },
    example: {
      title: 'Beispiel: Ungeconstrainedter vs. Geconstrainteter Prompt',
      content: [
        '**Die Auswirkung von Constrained Prompting wird am deutlichsten, wenn Sie einen ungeconstrainteten Prompt mit einem geconstrainteten für die gleiche Aufgabe vergleichen.** Hier entwirft eine Zusammenfassung für ein B2B-Produkt.',
        '**[Schlechter Prompt]**',
        '"Schreibe eine Zusammenfassung unserer neuen Analytics-Funktion."',
        '**[Besserer Prompt]**',
        '"Du bist ein B2B-Produktmarketer. Aufgabe: Schreibe eine Zusammenfassung unserer neuen Analytics-Funktion für eine Produktseite. Constraints: Länge: 120–160 Wörter. Struktur: 1 kurzer Einleitungsparagraph, dann 3 Aufzählungspunkte, dann 1 Schlusssatz. Stil: Klarer, neutral-professioneller Ton. Keine Hype-Wörter wie \'revolutionär\' oder \'spielverändernd\'. Inhalt: Nennen Sie den Hauptnutzen (schnellere Einblicke in das Kundenverhalten) und ein konkretes Anwendungsbeispiel. Ausgabeformat: Gültiges Markdown mit Aufzählungspunkten mit `-`."',
        'Die geconstraintetete Version definiert Länge, Struktur, Stil und erforderlichen Inhalt, was die Ausgabe weit vorhersehbarer und einfacher wiederzuverwendbar macht.',
      ],
    },
    whenToUse: {
      title: 'Wann Sie Constrained Prompting einsetzen sollten',
      content: [
        '**Sie sollten Constrained Prompting immer dann einsetzen, wenn Korrektheit und Konsistenz wichtiger sind als maximale Kreativität.** Dies gilt besonders in operativen, analytischen und regulierten Kontexten.',
        'Typische Anwendungsfälle sind:',
      ],
      items: [
        'JSON- oder Tabellenausgaben generieren, die andere Systeme analysieren werden.',
        'Standardisierte Berichte, Zusammenfassungen oder Statusaktualisierungen über Teams hinweg erstellen.',
        'Kundenkommunikation verfassen, die Brand- oder Rechtsrichtlinien befolgen muss.',
        'Strukturierte Daten (Probleme, Entitäten, Metriken) aus unstrukturiertem Text extrahieren.',
      ],
    },
    howPQSupports: {
      title: 'Wie PromptQuorum Constrained Prompting unterstützt',
      content: [
        '**PromptQuorum ist ein Multi-Model-KI-Dispatch-Tool, das speziell für die Zusammenarbeit mit Constrained Prompting konzipiert ist – indem Sie strukturierte Prompt-Frameworks definieren, speichern und wiederverwenden können.** Sie können Constraints mit Frameworks wie SPECS, RTF oder Googles Prompting Guide verbinden und sie an mehrere Modelle gleichzeitig versenden.',
        'In PromptQuorum können Sie:',
      ],
      items: [
        'Strukturelle und Inhalts-Constraints direkt in Frameworks kodieren, sodass jeder Durchlauf den gleichen Regeln folgt.',
        'Geconstraintetete Prompts über mehrere Modelle hinweg nebeneinander testen, um zu sehen, welcher Anbieter Ihre Spezifikationen am besten einhält.',
        'Geconstraintetete Prompts als Vorlagen für wiederkehrende Aufgaben speichern, um sicherzustellen, dass Ihr Team immer die gleichen validierten Muster nutzt.',
      ],
    },
    howToStart: {
      title: 'Wie Sie mit Constrained Prompting beginnen',
      numberedItems: [
        '**Identifizieren Sie für Ihre Aufgabe relevante Ausgabe-Constraints: Länge, Format, Vokabular, Umfang, Sicherheit.** Beispiel: „Antwort muss ≤100 Wörter sein, JSON-Format, nur technische Begriffe verwenden, nur aktuelle Entwicklungen abdecken (2024+), darf keine Konkurrenten nennen."',
        '**Formulieren Sie Constraints explizit mit Sprache wie „muss", „darf nicht" und „nur".** Vermeiden Sie weiche Direktiven wie „versuche" oder „strebe an". Harte Constraints sind zuverlässiger.',
        '**Für Format-Constraints geben Sie ein Beispiel des genauen Formats vor, das Sie möchten.** Zeigen Sie dem Modell: „Geben Sie als JSON zurück: { \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] }"',
        '**Für Inhalts-Constraints listen Sie explizit auf, was einzubeziehen und auszuschließen ist.** Beispiel: „Einzubeziehen: technische Details, Performance-Metriken. Auszuschließen: Marketing-Sprache, Konkurrenten-Namen, Preisgestaltung."',
        '**Testen Sie geconstraintetete Prompts auf Grenzfälle, um sicherzustellen, dass das Modell alle Constraints respektiert.** Generieren Sie 10 Ausgaben. Prüfen Sie: Respektieren alle das Längenlimit? Nutzen alle das richtige Format? Gibt es Verstöße?',
      ],
    },
  },
},
    fr: {
  theme: 'Techniques',
  title: 'Constrained Prompting : Des Prompts Structurés pour des Résultats Fiables',
  intro: 'Le constrained prompting est une technique où vous indiquez au modèle non seulement ce qu\'il doit faire, mais aussi ce qu\'il doit et ne doit absolument pas faire – afin que les résultats restent dans des limites clairement définies. C\'est essentiel quand vous avez besoin de formats fiables, de contenu sûr ou de conformité stricte avec les règles internes.',
  publishDate: '2026-03-26',
  readTime: '6 min de lecture',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Constrained Prompting',
  metaDescription: 'Constrained Prompting pour des résultats d\'IA structurés. Comment définir des règles, formats et directives directement dans votre prompt.',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Constrained Prompting : Des Prompts Structurés pour des Résultats Fiables',
    description: 'Ce qu\'est le constrained prompting, pourquoi c\'est important, et comment l\'utiliser pour rendre les résultats d\'IA prévisibles et sûrs dans des workflows réels.',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['constrained prompting', 'prompt engineering', 'prompts structurés', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsConstrained: {
      title: 'Qu\'est-ce que le Constrained Prompting ?',
      content: [
        '**Le constrained prompting consiste à ajouter des règles explicites sur le contenu, la structure, la longueur et le comportement directement dans votre prompt.** Au lieu d\'une instruction vague comme « résumez ceci », vous spécifiez les formats autorisés, les champs obligatoires, les sujets interdits et les règles de validation.',
        'Les contraintes peuvent inclure des schémas de sortie (comme JSON avec des clés fixes), des limites de mots, des exigences de ton et des restrictions de sécurité comme « ne pas fournir de diagnostics médicaux ». En intégrant ces règles au prompt, vous réduisez l\'ambiguïté et simplifiez l\'intégration du modèle dans les workflows de production.',
      ],
    },
    whyItMatters: {
      title: 'Pourquoi le Constrained Prompting Est Important',
      content: [
        '**Le constrained prompting est crucial quand les résultats du modèle alimentent des personnes, des processus ou d\'autres systèmes qui dépendent d\'un comportement prévisible.** Sans contraintes, le même prompt peut produire des structures ou des niveaux de détail différents selon les exécutions.',
        'Les contraintes claires vous aident à :',
      ],
      items: [
        'Éviter les contenus ou formatages inattendus qui cassent vos outils aval.',
        'Appliquer les directives de marque, juridiques ou de sécurité directement au niveau du prompt.',
        'Réduire le temps d\'examen car les résultats correspondent déjà à votre structure requise.',
      ],
    },
    typesOfConstraints: {
      title: 'Types de Contraintes que Vous Pouvez Utiliser',
      content: [
        '**Vous pouvez contraindre vos prompts selon plusieurs dimensions : structure, contenu, style, longueur et sécurité.** Plus vous êtes précis, plus les résultats deviennent cohérents.',
        'Les types de contraintes courants sont :',
      ],
      items: [
        'Contraintes structurelles : Titres obligatoires, listes à puces, tableaux ou JSON avec des clés spécifiques.',
        'Contraintes de contenu : Sections obligatoires (comme « Risques » ou « Étapes suivantes ») et sujets ou expressions interdits.',
        'Contraintes de style : Ton (« formel », « neutre », « conversationnel »), niveau de lecture ou règles de terminologie.',
        'Contraintes de longueur : Limites de mots ou de caractères, ou un nombre fixe de puces ou de sections.',
        'Contraintes de sécurité : Instructions pour éviter les données personnelles, les conseils médicaux, les conclusions juridiques ou les catégories de contenu non autorisées.',
      ],
    },
    example: {
      title: 'Exemple : Prompt Non-Contraint vs Contraint',
      content: [
        '**L\'impact du constrained prompting se voit clairement quand on compare un prompt non-contraint à un prompt contraint pour la même tâche.** Ici, nous rédigeons un résumé produit court.',
        '**[Mauvais Prompt]**',
        '"Écrivez un résumé de notre nouvelle fonctionnalité d\'analyse."',
        '**[Bon Prompt]**',
        '"Vous êtes un responsable produit B2B. Tâche : Rédigez un résumé de notre nouvelle fonctionnalité d\'analyse pour une page produit. Contraintes : Longueur : 120–160 mots. Structure : 1 court paragraphe d\'introduction, puis 3 puces, puis 1 phrase de conclusion. Style : Ton clair et neutre-professionnel. Pas de mots-clés comme \'révolutionnaire\' ou \'transformationnel\'. Contenu : Mentionnez l\'avantage principal (insights plus rapides sur le comportement client) et un cas d\'usage concret. Format de sortie : Markdown valide avec puces utilisant `-`."',
        'La version contrainte définit longueur, structure, style et contenu requis, ce qui rend le résultat beaucoup plus prévisible et facile à réutiliser.',
      ],
    },
    whenToUse: {
      title: 'Quand Utiliser le Constrained Prompting',
      content: [
        '**Utilisez le constrained prompting quand l\'exactitude et la cohérence importent plus que la créativité maximale.** C\'est particulièrement vrai dans les contextes opérationnels, analytiques et réglementés.',
        'Les cas d\'usage typiques incluent :',
      ],
      items: [
        'Générer des sorties JSON ou tabulaires que d\'autres systèmes parseront.',
        'Créer des rapports standardisés, résumés ou mises à jour de statut entre équipes.',
        'Rédiger des communications client qui doivent suivre les directives de marque ou juridiques.',
        'Extraire des données structurées (problèmes, entités, métriques) à partir de texte non structuré.',
      ],
    },
    howPQSupports: {
      title: 'Comment PromptQuorum Soutient le Constrained Prompting',
      content: [
        '**PromptQuorum est un outil de dispatch multi-modèles spécialement conçu pour le constrained prompting – permettant de définir, sauvegarder et réutiliser des frameworks de prompts structurés.** Vous combinez les contraintes avec des frameworks comme SPECS, RTF ou le Prompting Guide de Google et les envoyez à plusieurs modèles simultanément.',
        'Avec PromptQuorum, vous pouvez :',
      ],
      items: [
        'Encoder les contraintes structurelles et de contenu directement dans les frameworks pour que chaque exécution suive les mêmes règles.',
        'Tester les prompts contraints sur plusieurs modèles côte à côte pour voir quel fournisseur respecte le mieux vos spécifications.',
        'Sauvegarder les prompts contraints comme modèles pour les tâches récurrentes, en garantissant que votre équipe utilise toujours les mêmes motifs validés.',
      ],
    },
    howToStart: {
      title: 'Comment Commencer avec le Constrained Prompting',
      numberedItems: [
        '**Identifiez les contraintes de sortie pertinentes pour votre tâche : longueur, format, vocabulaire, portée, sécurité.** Exemple : « La réponse doit faire ≤100 mots, format JSON, utiliser uniquement des termes techniques, couvrir uniquement les développements récents (2024+), ne pas mentionner les concurrents. »',
        '**Énoncez les contraintes explicitement en utilisant un langage « doit », « ne doit pas » et « uniquement ». Évitez les directives douces comme « essayez » ou « visez ». Les contraintes dures sont plus fiables.**',
        '**Pour les contraintes de format, fournissez un exemple du format exact souhaité.** Montrez au modèle : « Retournez en JSON : { \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] } »',
        '**Pour les contraintes de contenu, énumérez explicitement ce qui doit être inclus et exclu.** Exemple : « Inclure : détails techniques, métriques de performance. Exclure : langage marketing, noms de concurrents, tarification. »',
        '**Testez les prompts contraints sur des cas limites pour vérifier que le modèle respecte toutes les contraintes.** Générez 10 résultats. Vérifiez : Respectent-ils tous la limite de longueur ? Utilisent-ils tous le bon format ? Y a-t-il des violations ?',
      ],
    },
  },
},
    ja: {
  theme: 'Techniques',
  title: '制約付きプロンプティング：AIの出力を予測可能に保つ',
  intro: '制約付きプロンプティングは、モデルに「何をするか」だけでなく「何をしてはいけないか」を明確に指示して、出力を定義された範囲内に保つテクニックです。信頼性の高い形式、安全なコンテンツ、厳格なコンプライアンスが必要な場合に不可欠です。',
  publishDate: '2026-03-26',
  readTime: '6分で読める',
  metaDescription: '制約付きプロンプティングとは何か、なぜ重要か、そして実際のワークフローで信頼性の高いAI出力を実現する方法を学びます。',
  educationalLevel: 'Intermediate',
  primaryTerm: '制約付きプロンプティング',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '制約付きプロンプティング：AIの出力を予測可能に保つ',
    description: '制約付きプロンプティングとは何か、なぜ重要か、実際のワークフローで信頼性の高いAI出力を実現する方法。',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['制約付きプロンプティング', 'プロンプトエンジニアリング', '構造化プロンプト', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsConstrained: {
      title: '制約付きプロンプティングとは',
      content: [
        '**制約付きプロンプティングとは、コンテンツ、構造、長さ、動作に関する明示的なルールをプロンプトに直接組み込むことです。** 「これを要約して」というような曖昧な指示ではなく、許可される形式、必須フィールド、禁止トピック、検証ルールを明確に指定します。',
        '制約にはJSON形式などの出力スキーマ、文字数制限、トーン要件、「医学診断を提供しないこと」などの安全制限が含まれます。これらのルールをプロンプトの一部にすることで、曖昧さを減らし、モデルを本番ワークフローに統合しやすくしていきます。',
      ],
    },
    whyItMatters: {
      title: 'なぜ制約付きプロンプティングが重要か',
      content: [
        '**制約付きプロンプティングが重要なのは、モデルの出力が人間、プロセス、または予測可能な動作に依存する他のシステムに流入する場合です。** 制約がなければ、同じプロンプトであっても異なる構造や詳細度がもたらされることがあります。',
        '明確な制約は以下をサポートします：',
      ],
      items: [
        'ダウンストリームツールを破壊する予期しないコンテンツやフォーマットを防止する。',
        'ブランド、法務、またはセキュリティガイドラインを直接プロンプトレベルで実施する。',
        '出力が必要な構造と一致しているため、レビュー時間を短縮する。',
      ],
    },
    typesOfConstraints: {
      title: '使用できる制約の種類',
      content: [
        '**プロンプト制約は複数の次元に沿って機能します：構造、コンテンツ、スタイル、長さ、セキュリティです。** より正確であるほど、出力の一貫性が高まります。',
        '一般的な制約タイプには以下が含まれます：',
      ],
      items: [
        '構造的制約：必須見出し、箇条書き、テーブル、または特定キーを持つJSON。',
        'コンテンツ制約：必須セクション（「リスク」や「次のステップ」など）と禁止トピックまたはフレーズ。',
        'スタイル制約：トーン（「正式」「中立」「会話的」）、読解レベル、用語ルール。',
        '長さ制約：単語数または文字数制限、または固定の箇条書き数またはセクション数。',
        'セキュリティ制約：個人データ、医学的助言、法的結論、または許可されていないコンテンツカテゴリを避けるための指示。',
      ],
    },
    example: {
      title: '例：制約なしのプロンプト vs 制約ありのプロンプト',
      content: [
        '**制約付きプロンプティングの影響は、同じタスクに対して制約なしと制約ありのプロンプトを比較するとわかりやすいです。** ここで短い製品概要を作成します。',
        '**[悪いプロンプト]**',
        '"新しい分析機能の概要を書いてください。"',
        '**[良いプロンプト]**',
        '"あなたはB2B製品マーケターです。タスク：製品ページのための新しい分析機能の概要を書きます。制約：長さ：120～160単語。構造：1つの短い導入段落、その後3つの箇条書き、その後1つの締めくくりの文。スタイル：明確でニュートラルな専門トーン。「革新的」や「ゲーム・チェンジング」などのハイプワードは使用しません。コンテンツ：主な利点（顧客行動の迅速な洞察）と1つの具体的な使用例を記載します。出力形式：箇条書きに`-`を使用する有効なMarkdown。"',
        '制約ありのバージョンは長さ、構造、スタイル、必要なコンテンツを定義しているため、出力ははるかに予測可能で、再利用しやすくなります。',
      ],
    },
    whenToUse: {
      title: '制約付きプロンプティングを使う場面',
      content: [
        '**正確性と一貫性が最大の創造性より重要な場合は、常に制約付きプロンプティングを使用すべきです。** これは特に運用、分析、規制の文脈で当てはまります。',
        '典型的なユースケースは以下を含みます：',
      ],
      items: [
        '他のシステムが解析するJSONまたはテーブル出力を生成する。',
        'チーム全体で標準化されたレポート、概要、ステータス更新を作成する。',
        'ブランドまたは法的ガイドラインに従う必要がある顧客通信を起案する。',
        '非構造化テキストから構造化データ（問題、エンティティ、メトリック）を抽出する。',
      ],
    },
    howPQSupports: {
      title: 'PromptQuorumが制約付きプロンプティングをサポートする方法',
      content: [
        '**PromptQuorumはマルチモデルAIディスパッチツールで、構造化プロンプトフレームワークを定義、保存、再利用できるように設計されています。** SPECS、RTF、またはGoogleの「Prompting Guide」などのフレームワークと制約を組み合わせて、一度に複数のモデルに送信できます。',
        'PromptQuorumでは以下のことができます：',
      ],
      items: [
        '構造的制約とコンテンツ制約をフレームワークに直接エンコードして、すべての実行が同じルールに従うようにする。',
        '複数のモデル間で制約付きプロンプトをテストして、どのプロバイダーが仕様に最も従うかを確認する。',
        '制約付きプロンプトをテンプレートとして保存して、チームが常に同じ検証済みパターンを使用するようにする。',
      ],
    },
    howToStart: {
      title: '制約付きプロンプティングの使い方',
      content: [
        '### 実装のステップ',
      ],
      numberedItems: [
        '**タスクに関連する出力制約を特定します：長さ、形式、語彙、範囲、セキュリティ。** 例：「応答は100単語以下、JSON形式、技術用語のみを使用、最近の発展（2024年以降）のみを扱う、競合他社を言及しない」',
        '**「must」「must not」「only」の言語を使用して、制約を明確に述べます。** 「試す」や「目指す」などの柔軟な指示は避けます。ハード制約の方が信頼性が高いです。',
        '**形式制約については、必要な正確な形式の例を提供します。** モデルに以下のように示します：「JSONとして返します：{ \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] }」',
        '**コンテンツ制約については、含める内容と除外する内容を明示的にリストアップします。** 例：「含む：技術詳細、パフォーマンスメトリック。除外：マーケティング言語、競合他社名、価格設定」',
        '**エッジケースで制約付きプロンプトをテストして、モデルがすべての制約を尊重することを確認します。** 10個の出力を生成します。確認：すべて長さ制限を尊重していますか？すべて正しい形式を使用していますか？違反はありますか？',
      ],
    },
    pointsToNote: {
      title: '注意点',
      content: [
        '制約付きプロンプティングの有効性は、制約がどれだけ明確で具体的であるかに左右されます。曖昧または矛盾する制約は、予測不可能な出力につながる可能性があります。',
      ],
      items: [
        '複数の制約を指定する場合、優先順位を明確にしてください（例：「長さが重要ですが、品質を犠牲にしてはいけません」）。',
        '異なるモデル（GPT-5.5、Claude、Gemini）は同じ制約に異なる方法で応答することがあります。テストして検証することが重要です。',
        '制約が厳しすぎると、モデルはそれらすべてを満たすことができず、エラーを返すか、制約の一部を無視することがあります。',
      ],
    },
    practicalTips: {
      title: '実践Tips',
      content: [
        '制約付きプロンプティングを効果的に実装するための実践的なアドバイス。',
      ],
      items: [
        'より複雑なタスクについては、まず制約なしでプロンプトしてから、結果に基づいて制約を追加します。',
        'PromptQuorumを使用して、複数のモデルで制約付きプロンプトのバージョンをテストし、最適なパフォーマンスを提供するプロバイダーを特定します。',
        '制約がパフォーマンスの問題（遅延、不完全な出力など）を引き起こしていないかを監視してください。',
      ],
    },
  },
},
    zh: {
  theme: 'Techniques',
  title: '受限提示：保持AI输出的可预测性',
  intro: '受限提示是一种技术，您不仅告诉模型要做什么，还要明确指定它必须和不能做什么，以使输出保持在明确定义的边界内。当您需要可靠的格式、安全内容或严格的内部规则遵守时，这是必不可少的。',
  publishDate: '2026-03-26',
  readTime: '阅读约6分钟',
  metaDescription: '了解受限提示是什么、为什么重要，以及如何在真实工作流中实现可预测和安全的AI输出。',
  educationalLevel: 'Intermediate',
  primaryTerm: '受限提示',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '受限提示：保持AI输出的可预测性',
    description: '受限提示是什么、为什么重要，以及如何在真实工作流中实现可预测和安全的AI输出。',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    keywords: ['受限提示', '提示工程', '结构化提示', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
  },
  sections: {
    whatIsConstrained: {
      title: '什么是受限提示',
      content: [
        '**受限提示是指在提示中添加关于内容、结构、长度和行为的明确规则。** 不是像"总结这个"这样的松散指令，您需要指定允许的格式、必需字段、禁止主题和验证规则。',
        '约束可以包括输出模式（如具有固定键的JSON）、字数限制、语气要求以及安全限制，如"不提供医学诊断"。通过使这些规则成为提示的一部分，您可以减少歧义，使模型更容易集成到生产工作流中。',
      ],
    },
    whyItMatters: {
      title: '受限提示为什么重要',
      content: [
        '**受限提示很重要，因为模型输出会流向依赖可预测行为的人员、流程或其他系统。** 没有约束，同一提示可能在不同运行中产生不同的结构或详细程度。',
        '明确的约束可以帮助您实现以下目标：',
      ],
      items: [
        '防止破坏下游工具的意外内容或格式。',
        '直接在提示级别强制执行品牌、法律或安全指南。',
        '减少审查时间，因为输出已经与您需要的结构相匹配。',
      ],
    },
    typesOfConstraints: {
      title: '您可以使用的约束类型',
      content: [
        '**您可以沿着多个维度约束提示：结构、内容、风格、长度和安全性。** 您越精确，输出就越一致。',
        '常见的约束类型包括：',
      ],
      items: [
        '结构约束：必需的标题、项目列表、表格或具有特定键的JSON。',
        '内容约束：必需的部分（如"风险"或"后续步骤"）以及禁止的主题或短语。',
        '风格约束：语气（"正式"、"中立"、"对话式"）、阅读水平或术语规则。',
        '长度约束：字数或字符限制，或固定数量的项目或部分。',
        '安全约束：避免个人数据、医学建议、法律结论或不允许的内容类别的指示。',
      ],
    },
    example: {
      title: '示例：无约束提示 vs 受限提示',
      content: [
        '**受限提示的影响最容易通过比较同一任务的无约束和受限提示来看出。** 这里我们起草一个简短的产品摘要。',
        '**[不好的提示]**',
        '"为我们的新分析功能写一份摘要。"',
        '**[好的提示]**',
        '"您是一名B2B产品营销人员。任务：为产品页面编写我们新分析功能的摘要。约束：长度：120-160字。结构：1个简短的介绍段落，然后是3个项目，然后是1个结束句。风格：清晰、中立专业的语气。不使用"革命性"或"改变游戏规则"之类的宣传词。内容：提及主要优势（更快获得客户行为洞察）和一个具体的使用示例。输出格式：使用`-`进行项目的有效Markdown。"',
        '受限版本定义了长度、结构、风格和必需内容，这使得输出更容易预测，更容易重复使用。',
      ],
    },
    whenToUse: {
      title: '何时使用受限提示',
      content: [
        '**当正确性和一致性比最大创意更重要时，您应该使用受限提示。** 这在运营、分析和监管环境中尤其如此。',
        '典型的使用案例包括：',
      ],
      items: [
        '生成其他系统将解析的JSON或表格输出。',
        '在团队中创建标准化的报告、摘要或状态更新。',
        '起草必须遵循品牌或法律指南的客户通信。',
        '从非结构化文本中提取结构化数据（问题、实体、指标）。',
      ],
    },
    howPQSupports: {
      title: 'PromptQuorum如何支持受限提示',
      content: [
        '**PromptQuorum是一个多模型AI分发工具，设计用来很好地与受限提示配合，允许您定义、保存和重用结构化提示框架。** 您可以将约束与SPECS、RTF或Google的提示指南等框架相结合，并同时将它们发送给多个模型。',
        '在PromptQuorum中，您可以：',
      ],
      items: [
        '直接将结构和内容约束编码到框架中，使每次运行都遵循相同的规则。',
        '在多个模型间测试受限提示，查看哪个提供者最好地遵守您的规范。',
        '将受限提示另存为模板以供重复使用，确保您的团队始终使用相同的验证模式。',
      ],
    },
    howToStart: {
      title: '如何使用受限提示',
      content: [
        '### 实施步骤',
      ],
      numberedItems: [
        '**确定与您的任务相关的输出约束：长度、格式、词汇、范围、安全性。** 示例："响应必须≤100字、JSON格式、仅使用技术术语、仅涵盖最近发展（2024年+）、不提及竞争对手。"',
        '**使用"必须"、"禁止"和"仅"语言明确说明约束。** 避免使用"尽量"或"旨在"等软指令。硬约束更可靠。',
        '**对于格式约束，提供您想要的确切格式的示例。** 向模型显示："返回JSON：{ \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] }"',
        '**对于内容约束，明确列出要包含和排除的内容。** 示例："包含：技术细节、性能指标。排除：营销语言、竞争对手名称、定价。"',
        '**在边界情况下测试受限提示，以确保模型遵守所有约束。** 生成10个输出。检查：所有都遵守长度限制吗？所有都使用正确的格式吗？有任何违规吗？',
      ],
    },
    practicalAdvice: {
      title: '实用建议',
      content: [
        '在实施受限提示时应遵循的实用指导和最佳实践。',
      ],
      items: [
        '对于更复杂的任务，首先尝试无约束的提示，然后根据结果添加约束。',
        '使用PromptQuorum在多个模型上测试受限提示的版本，以识别哪个提供者提供最佳性能。',
        '监控约束是否导致性能问题（延迟、不完整的输出等）。',
        '定期审查和优化约束，以平衡严格性和输出质量之间的关系。',
      ],
    },
    commonChallenges: {
      title: '常见挑战和解决方案',
      content: [
        '在应用受限提示时，用户通常会遇到以下挑战：',
      ],
      items: [
        '过度约束导致模型无法满足所有要求 - 优先考虑最关键的约束。',
        '约束与创意冲突 - 在创意和结构之间找到平衡。',
        '不同模型以不同方式解释约束 - 在您计划使用的模型上进行测试。',
        '约束过于复杂难以理解 - 使用简单清晰的语言制定约束。',
      ],
    },
  },
},
  };
