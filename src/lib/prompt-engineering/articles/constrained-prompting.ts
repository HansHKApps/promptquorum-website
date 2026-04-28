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
      freshness_tier: 'semi_annual',
      theme: 'Techniken',
      title: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
      intro: '**Constrained Prompting ist eine Technik, bei der Sie dem Modell nicht nur sagen, was es tun soll, sondern auch, was es unbedingt tun und nicht tun muss – damit die Ausgaben innerhalb klar definierter Grenzen bleiben.** Dies ist essentiell, wenn Sie zuverlässige Formate, sichere Inhalte oder strikte Einhaltung interner Richtlinien benötigen.',
      publishDate: '2026-03-26',
      readTime: '6 Min. Lesezeit',
      seoTitle: 'Constrained Prompting: KI-Ausgaben strukturieren (2026)',
      metaDescription: 'Constrained Prompting für strukturierte KI-Ausgaben. Wie Sie Regeln, Formate und Inhaltsrichtlinien direkt im Prompt definieren.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      audience: 'Entwickler, Produktmanager und Teams, die KI-betriebene Workflows entwickeln',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['Constrained Prompting', 'Strukturierte Ausgabe', 'Prompt Engineering'],
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was ist Constrained Prompting?', anchor: '#what-is-constrained-prompting' },
        { label: 'Warum ist Constrained Prompting wichtig?', anchor: '#why-does-constrained-prompting-matter' },
        { label: 'Arten von Constraints, die Sie nutzen können', anchor: '#which-constraint-types-can-you-use' },
        { label: 'Beispiel: Ungeconstrainteter vs. Geconstrainteter Prompt', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: 'Wann Sie Constrained Prompting einsetzen sollten', anchor: '#when-should-you-use-constrained-prompting' },
        { label: 'Wie PromptQuorum Constrained Prompting unterstützt', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'Wie Sie mit Constrained Prompting beginnen', anchor: '#how-to-use-constrained-prompting' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#frequently-asked-questions' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/constrained-prompting?lang=de',
        inLanguage: 'de',
        headline: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
        description: 'Was Constrained Prompting ist, warum es wichtig ist und wie Sie es einsetzen, um KI-Ausgaben vorhersehbar und sicher in produktiven Workflows zu machen.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-28',
        keywords: ['Constrained Prompting', 'Prompt Engineering', 'strukturierte Prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Constrained Prompting' },
          { '@type': 'Thing', name: 'Strukturierte Ausgabe' },
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
        inLanguage: 'de',
        mainEntity: [
          { '@type': 'Question', name: 'Was ist Constrained Prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen. Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.' } },
          { '@type': 'Question', name: 'Was sind die fünf Constraint-Typen?', acceptedAnswer: { '@type': 'Answer', text: 'Die fünf Haupt-Constraint-Typen sind: (1) Strukturell – erforderliche Überschriften, Tabellen, JSON mit spezifischen Schlüsseln. (2) Inhalt – erforderliche Abschnitte, verbotene Themen. (3) Stil – Ton, Lesenlevel, Terminologie. (4) Länge – Wort- oder Zeichenlimits. (5) Sicherheit – keine medizinischen Ratschläge, personenbezogenen Daten oder rechtlichen Schlussfolgerungen.' } },
          { '@type': 'Question', name: 'Wie zwingt man ein Modell, gültiges JSON auszugeben?', acceptedAnswer: { '@type': 'Answer', text: 'Geben Sie das genaue JSON-Schema im Prompt vor: „Geben Sie JSON genau in diesem Format zurück: { \\"finding\\": \\"...\\" }". Kombinieren Sie dies mit „Geben Sie nur JSON aus, keinen anderen Text." GPT-5.5 unterstützt auch einen JSON-Modus über die API, der gültiges JSON auf API-Ebene erzwingt.' } },
          { '@type': 'Question', name: 'Funktioniert Constrained Prompting auf GPT-5.5, Claude und Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Ja – alle drei unterstützen Constrained Prompting. GPT-5.5 und Claude Opus 4.7 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit etwa 95% Adhärenzrate bei gut formulierten Prompts. Gemini 3.1 Pro schneidet ähnlich ab, kann aber mehrdeutige Constraints unterschiedlich interpretieren. Testen Sie immer über Modelle hinweg.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen Constrained Prompting und Few-Shot Prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained Prompting fügt explizite Regeln in Textform hinzu (Format, Länge, Inhaltsrestriktionen). Few-Shot Prompting stellt ausgearbeitete Beispiele bereit, die implizit zeigen, was produziert werden soll. Die beiden funktionieren gut zusammen: nutzen Sie ein Few-Shot-Beispiel, um das Ausgabemuster zu zeigen, dann fügen Sie Constraints für strengere Durchsetzung hinzu.' } },
          { '@type': 'Question', name: 'Wann sollten Sie Constrained Prompting NICHT verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Vermeiden Sie strukturelle Constraints bei offenen kreativen Aufgaben (Brainstorming, Ideation, Fiction). Über-Constraining kreativer Prompts erzeugt formularhafte, minderwertige Ausgaben. Verwenden Sie Ton- und Stil-Constraints für kreative Aufgaben, aber erlauben Sie strukturelle Freiheit.' } },
          { '@type': 'Question', name: 'Wie viele Constraints können Sie in einem Prompt stapeln?', acceptedAnswer: { '@type': 'Answer', text: 'Praktisch funktionieren 3–5 Constraints gut. Beyond 5–6 beginnen Modelle, niedrig priorisierte Constraints stillschweigend zu ignorieren. Wenn Sie mehr als 5 benötigen, listen Sie sie in Prioritätsordnung auf und geben Sie explizit an: „Falls Constraints konfligieren, wenden Sie sie in dieser Reihenfolge an: (1) Sicherheit, (2) Format, (3) Länge."' } },
          { '@type': 'Question', name: 'Muss ich bei der Verwendung von Constrained Prompting die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, die DSGVO ist relevant, wenn Constrained Prompting bei der Verarbeitung personenbezogener Daten eingesetzt wird. Gemäß DSGVO Artikel 28 müssen Sie Datenverarbeitungsvereinbarungen (DPA) mit Ihrem KI-Anbieter abschließen. Für Unternehmen im DACH-Raum empfehlen die BSI-Grundschutz-Kataloge, lokale oder private KI-Modelle für die Verarbeitung sensibler Daten zu verwenden. Stellen Sie sicher, dass Ihre Prompts und deren Ausgaben keine unkontrollierten personenbezogenen Daten über externe APIs enthalten.' } },
          { '@type': 'Question', name: 'Ist Constrained Prompting für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Absolut. Constrained Prompting ist besonders wertvoll für deutsche Mittelstandsunternehmen, da es standardisierte, wiederverwendbare Prompt-Vorlagen ermöglicht – ideal für ressourcenbegrenzte Teams. Mit PromptQuorum können Sie Constraints über mehrere Modelle hinweg testen, um das beste Preis-Leistungs-Verhältnis für Ihr Unternehmen zu finden. Mittelstandsunternehmen in regulierten Branchen (Finanzen, Versicherung, Gesundheit) profitieren besonders von den Sicherheits- und Compliance-Constraints.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Wie Sie mit Constrained Prompting beginnen',
        inLanguage: 'de',
        description: 'Ein 5-Schritte-Leitfaden zur Anwendung von Ausgabe-Constraints in Prompts für GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Ausgabe-Constraints identifizieren', text: 'Identifizieren Sie für Ihre Aufgabe relevante Constraints: Länge, Format, Vokabular, Umfang und Sicherheit.' },
          { '@type': 'HowToStep', position: 2, name: 'Harte Constraint-Sprache verwenden', text: 'Formulieren Sie Constraints mit „muss", „darf nicht" und „nur" – niemals „versuche" oder „strebe an".' },
          { '@type': 'HowToStep', position: 3, name: 'Ein Format-Beispiel bereitstellen', text: 'Für Format-Constraints zeigen Sie das genaue Schema inline: JSON-Schlüssel, Markdown-Struktur oder Feldnamen.' },
          { '@type': 'HowToStep', position: 4, name: 'Inhalts-Einschlüsse und Ausschlüsse auflisten', text: 'Explizit auflisten, was einzubeziehen und auszuschließen ist nach Thema, Terminologie und Datentyp.' },
          { '@type': 'HowToStep', position: 5, name: 'Auf Grenzfällen testen', text: 'Generieren Sie 10 Ausgaben. Prüfen Sie, dass alle das Längenlimit, Format und Inhalts-Grenzen respektieren.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**Constrained Prompting** fügt explizite Regeln (Struktur, Inhalt, Länge, Sicherheit) zu einem Prompt hinzu, damit KI-Ausgaben über mehrere Durchläufe hinweg vorhersehbar bleiben.',
            '5 Constraint-Typen: strukturell, Inhalt, Stil, Länge und Sicherheit — kombinieren Sie sie für maximale Ausgabenkontrolle.',
            'Verwenden Sie zwingende Sprache: **„muss", „darf nicht", „nur".** Weiche Direktiven wie „versuche" werden häufig ignoriert.',
            'Format-Constraints funktionieren am besten mit einem Beispiel: zeigen Sie dem Modell das genaue JSON-Schema oder die Markdown-Struktur, die Sie benötigen.',
            'GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro unterstützen alle Constrained Prompting, reagieren aber unterschiedlich — testen Sie über Modelle hinweg.',
            'Geconstraintetete Prompts sparen Überprüfungszeit: Ausgaben, die bereits Ihre erforderliche Struktur erfüllen, benötigen weniger menschliche Korrektur.',
            'Verwenden Sie [PromptQuorum](https://www.promptquorum.com/?lang=de) um geconstraintetete Prompts über mehrere Modelle hinweg nebeneinander zu testen.',
          ],
        },
        whatIsConstrained: {
          title: 'Was ist Constrained Prompting?',
          content: [
            '**Constrained Prompting bedeutet, explizite Regeln über Inhalt, Struktur, Länge und Verhalten direkt im Prompt zu definieren.** Statt einer lockeren Anweisung wie „fasse das zusammen" legen Sie zulässige Formate, erforderliche Felder, verbotene Themen und Validierungsregeln fest.',
            'Constraints können Ausgabeschemas (wie JSON mit festen Schlüsseln), Wortlimits, Tonanforderungen und Sicherheitsrestriktionen wie „stelle keine medizinischen Diagnosen" enthalten. Indem Sie diese Regeln als Teil des Prompts verankern, reduzieren Sie Mehrdeutigkeit und vereinfachen die Integration des Modells in produktive Arbeitsabläufe.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar zu machen.' },
            { type: 'in-plain-terms', text: 'Statt KI zu sagen „schreibe eine Zusammenfassung", sagen Sie: maximal 150 Wörter, nutze Aufzählungspunkte, keine Konkurrenten erwähnen, immer einen Call-to-Action einbeziehen. Je spezifischer die Regeln, desto konsistenter die Ausgabe.' },
          ],
          callouts: [
            { type: 'note', label: 'Definition', text: 'Constrained Prompting ist keine separate API-Funktion – es ist eine Prompting-Technik. Sie wenden Constraints in Klartext innerhalb des Prompts selbst an. Keine spezielle Syntax oder API-Flags erforderlich.' },
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
          columns: ['Constraint-Typ', 'Beispiel', 'Wann zu verwenden'],
          rows: [
            { 'Constraint-Typ': 'Strukturell', 'Beispiel': '"Geben Sie als JSON zurück: {key: value}"', 'Wann zu verwenden': 'API-Integrationen, Datenpipelines' },
            { 'Constraint-Typ': 'Inhalt', 'Beispiel': '"Muss Risiken-Abschnitt enthalten; darf keine Konkurrenten erwähnen"', 'Wann zu verwenden': 'Berichte, Kundenkommunikation' },
            { 'Constraint-Typ': 'Stil', 'Beispiel': '"Formeller Ton, keine Kontraktionen, Lesenlevel Klasse 8"', 'Wann zu verwenden': 'Brand-kontrollierte Ausgaben' },
            { 'Constraint-Typ': 'Länge', 'Beispiel': '"≤150 Wörter, genau 5 Aufzählungspunkte"', 'Wann zu verwenden': 'Template-Inhalt, Zusammenfassungen' },
            { 'Constraint-Typ': 'Sicherheit', 'Beispiel': '"Darf keine medizinischen Diagnosen oder Rechtsberatung geben"', 'Wann zu verwenden': 'Regulierte Branchen, öffentlich zugänglich' },
          ],
          callouts: [
            { type: 'tip', label: 'Pro Tipp', text: 'Für JSON-Ausgabe geben Sie immer die genauen Schlüsselnamen und Werttypen im Prompt an. „Geben Sie JSON zurück" ohne Schema erzeugt über Modelle und Durchläufe hinweg inkonsistente Schlüsselnamen.' },
          ],
        },
        example: {
          title: 'Beispiel: Ungeconstrainteter vs. Geconstrainteter Prompt',
          content: [
            '**Die Auswirkung von Constrained Prompting wird am deutlichsten, wenn Sie einen ungeconstrainteten Prompt mit einem geconstrainteten für die gleiche Aufgabe vergleichen.** Hier entwirft eine Zusammenfassung für ein B2B-Produkt.',
            '**Ungeconstrainteter Prompt** (erzeugt variable Länge, Struktur und Ton bei jedem Durchlauf):',
            '"Schreibe eine Zusammenfassung unserer neuen Analytics-Funktion."',
            '**Geconstrainteter Prompt** (definiert Länge, Struktur, Stil und erforderlichen Inhalt):',
            '"Du bist ein B2B-Produktmarketer. Aufgabe: Schreibe eine Zusammenfassung unserer neuen Analytics-Funktion für eine Produktseite. Constraints: Länge: 120–160 Wörter. Struktur: 1 kurzer Einleitungsparagraph, dann 3 Aufzählungspunkte, dann 1 Schlusssatz. Stil: Klarer, neutral-professioneller Ton. Keine Hype-Wörter wie \'revolutionär\' oder \'spielverändernd\'. Inhalt: Nennen Sie den Hauptnutzen (schnellere Einblicke in das Kundenverhalten) und ein konkretes Anwendungsbeispiel. Ausgabeformat: Gültiges Markdown mit Aufzählungspunkten mit `-`."',
            'Die geconstraintetete Version definiert Länge, Struktur, Stil und erforderlichen Inhalt. Die Ausgabe wird vorhersehbar und wiederverwendbar – geeignet für Templating über Team-Workflows hinweg.',
          ],
          callouts: [
            { type: 'practice', label: 'Regel', text: 'Jede Constraint, die Sie hinzufügen, reduziert die Varianz in der Modellausgabe. Beginnen Sie mit 1–2 Constraints, testen Sie, dann fügen Sie mehr hinzu. Das Stapeln von 5+ Constraints auf einmal erhöht das Risiko, dass das Modell einen stillschweigend verletzt.' },
          ],
        },
        whenToUse: {
          title: 'Wann Sie Constrained Prompting einsetzen sollten',
          content: [
            '**Sie sollten Constrained Prompting immer dann einsetzen, wenn Korrektheit und Konsistenz wichtiger sind als maximale Kreativität.** Dies gilt besonders in operativen, analytischen und regulierten Kontexten.',
            'Typische Anwendungsfälle sind:',
          ],
          items: [
            'Generieren von JSON- oder Tabellenausgaben, die andere Systeme analysieren werden.',
            'Erstellen von standardisierten Berichten, Zusammenfassungen oder Statusaktualisierungen über Teams hinweg.',
            'Verfassen von Kundenkommunikation, die Brand- oder Rechtsrichtlinien befolgen muss.',
            'Extrahieren von strukturierten Daten (Probleme, Entitäten, Metriken) aus unstrukturiertem Text.',
          ],
          callouts: [
            { type: 'warning', label: 'Vermeiden', text: 'Wenden Sie keine Längen- oder strukturellen Constraints auf offene kreative Aufgaben an (Brainstorming, Ideation). Über-Constraining kreativer Prompts erzeugt generische, Kästchen-abhakende Ausgaben statt wirklich nützlicher Ideen.' },
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
            '**Für Format-Constraints geben Sie ein Beispiel des genauen Formats vor, das Sie möchten.** Zeigen Sie dem Modell: „Geben Sie als JSON zurück: { \\"finding\\": \\"..\\", \\"confidence\\": \\"high|medium|low\\", \\"sources\\": [...] }"',
            '**Für Inhalts-Constraints listen Sie explizit auf, was einzubeziehen und auszuschließen ist.** Beispiel: „Einzubeziehen: technische Details, Performance-Metriken. Auszuschließen: Marketing-Sprache, Konkurrenten-Namen, Preisgestaltung."',
            '**Testen Sie geconstraintetete Prompts auf Grenzfälle, um sicherzustellen, dass das Modell alle Constraints respektiert.** Generieren Sie 10 Ausgaben. Prüfen Sie: Respektieren alle das Längenlimit? Nutzen alle das richtige Format? Gibt es Verstöße?',
          ],
          callouts: [
            { type: 'insight', label: 'Einblick', text: 'GPT-5.5 und Claude Opus 4.7 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit ~95% Adhärenzrate bei gut formulierten Prompts. Gemini 3.1 Pro schneidet ähnlich ab. Alle drei verschlechtern sich, wenn Constraints vage oder widersprüchlich sind.' },
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler',
          mistakes: [
            {
              mistake: 'Verwendung von weicher Constraint-Sprache („versuche", „strebe an")',
              problem: 'Modelle behandeln weiche Direktiven als Vorschläge, nicht Regeln. „Versuche, es unter 200 Wörtern zu halten" erzeugt Ausgaben zwischen 80 und 400 Wörtern.',
              fix: 'Verwenden Sie absolute Sprache: „Antwort muss 150–200 Wörter sein. Keine Ausnahmen."',
            },
            {
              mistake: 'Zu viele Constraints ohne Prioritätsordnung stapeln',
              problem: 'Wenn 6+ Constraints konfligieren, lässt das Modell niedrig priorisierte stillschweigend fallen, ohne Warnung.',
              fix: 'Listet Constraints in Prioritätsordnung auf. Fügen Sie hinzu: „Falls Constraints konfligieren, prioritäre sie in dieser Reihenfolge: (1) Sicherheit, (2) Format, (3) Länge."',
            },
            {
              mistake: 'Kein Format-Beispiel für JSON/strukturierte Ausgabe bereitstellen',
              problem: '"Geben Sie JSON zurück" erzeugt über Modelle und Durchläufe hinweg inkonsistente Schlüsselnamen.',
              fix: 'Zeigen Sie das genaue Schema inline: „Geben Sie JSON genau in dieser Struktur zurück: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'Strukturelle Constraints auf kreative Generierungsaufgaben anwenden',
              problem: 'Strikte Struktur bei offenen Aufgaben erzeugt formularhafte, minderwertige kreative Ausgaben.',
              fix: 'Reservieren Sie strukturelle Constraints für operative Aufgaben. Nutzen Sie nur Ton-/Stil-Constraints für kreative Aufgaben.',
            },
            {
              mistake: 'Constraints nicht über Modelle hinweg testen',
              problem: 'GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro interpretieren die gleiche Constraint unterschiedlich. Ein Prompt, der auf einem funktioniert, kann auf einem anderen fehlschlagen.',
              fix: 'Testen Sie Ihren geconstrainteten Prompt auf mindestens 2 Modellen vor dem Deployment. Nutzen Sie [PromptQuorum](https://www.promptquorum.com/?lang=de) für parallele Vergleiche.',
            },
          ],
        },
        relatedReading: {
          title: 'Weiterführende Ressourcen',
          items: [
            '[Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) — Grundlagen vor Anwendung von Constraints.',
            '[RTF Framework](/prompt-engineering/rtf-framework?lang=de) — Role-Task-Format: ein strukturiertes Framework, das natürlich mit Constrained Prompting kombiniert werden kann.',
            '[Few-Shot Prompting](/prompt-engineering/few-shot-prompting?lang=de) — Beispiele bereitstellen ist eine Form impliziter Constraints.',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de) — Wenn Sie Reasoning-Schritte wünschen, nicht nur geconstraintetete Ausgabe.',
            '[KI-Halluzinationen: Wie man sie stoppt](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de) — Constraints, die Halluzinations-Risiken reduzieren.',
            '[Grundlagen der Prompt-Engineering-Optimierung](/prompt-engineering/fundamentals-of-prompt-optimization?lang=de) — Optimierungstechniken, die Constrained Prompting erweitern.',
          ],
        },
        faqSection: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist Constrained Prompting?', a: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen. Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.' },
            { q: 'Was sind die fünf Constraint-Typen?', a: 'Die fünf Haupt-Constraint-Typen sind: (1) Strukturell – erforderliche Überschriften, Tabellen, JSON mit spezifischen Schlüsseln. (2) Inhalt – erforderliche Abschnitte, verbotene Themen. (3) Stil – Ton, Lesenlevel, Terminologie. (4) Länge – Wort- oder Zeichenlimits. (5) Sicherheit – keine medizinischen Ratschläge, personenbezogenen Daten oder rechtlichen Schlussfolgerungen.' },
            { q: 'Wie zwingt man ein Modell, gültiges JSON auszugeben?', a: 'Geben Sie das genaue JSON-Schema im Prompt vor: „Geben Sie JSON genau in diesem Format zurück: { \\"finding\\": \\"...\\" }". Kombinieren Sie dies mit „Geben Sie nur JSON aus, keinen anderen Text." GPT-5.5 unterstützt auch einen JSON-Modus über die API, der gültiges JSON auf API-Ebene erzwingt.' },
            { q: 'Funktioniert Constrained Prompting auf GPT-5.5, Claude und Gemini?', a: 'Ja – alle drei unterstützen Constrained Prompting. GPT-5.5 und Claude Opus 4.7 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit etwa 95% Adhärenzrate bei gut formulierten Prompts. Gemini 3.1 Pro schneidet ähnlich ab, kann aber mehrdeutige Constraints unterschiedlich interpretieren. Testen Sie immer über Modelle hinweg.' },
            { q: 'Was ist der Unterschied zwischen Constrained Prompting und Few-Shot Prompting?', a: 'Constrained Prompting fügt explizite Regeln in Textform hinzu (Format, Länge, Inhaltsrestriktionen). Few-Shot Prompting stellt ausgearbeitete Beispiele bereit, die implizit zeigen, was produziert werden soll. Die beiden funktionieren gut zusammen: nutzen Sie ein Few-Shot-Beispiel, um das Ausgabemuster zu zeigen, dann fügen Sie Constraints für strengere Durchsetzung hinzu.' },
            { q: 'Wann sollten Sie Constrained Prompting NICHT verwenden?', a: 'Vermeiden Sie strukturelle Constraints bei offenen kreativen Aufgaben (Brainstorming, Ideation, Fiction). Über-Constraining kreativer Prompts erzeugt formularhafte, minderwertige Ausgaben. Verwenden Sie Ton- und Stil-Constraints für kreative Aufgaben, aber erlauben Sie strukturelle Freiheit.' },
            { q: 'Wie viele Constraints können Sie in einem Prompt stapeln?', a: 'Praktisch funktionieren 3–5 Constraints gut. Beyond 5–6 beginnen Modelle, niedrig priorisierte Constraints stillschweigend zu ignorieren. Wenn Sie mehr als 5 benötigen, listen Sie sie in Prioritätsordnung auf und geben Sie explizit an: „Falls Constraints konfligieren, wenden Sie sie in dieser Reihenfolge an: (1) Sicherheit, (2) Format, (3) Länge."' },
            { q: 'Muss ich bei der Verwendung von Constrained Prompting die DSGVO beachten?', a: 'Ja, die DSGVO ist relevant, wenn Constrained Prompting bei der Verarbeitung personenbezogener Daten eingesetzt wird. Gemäß DSGVO Artikel 28 müssen Sie Datenverarbeitungsvereinbarungen (DPA) mit Ihrem KI-Anbieter abschließen. Für Unternehmen im DACH-Raum empfehlen die BSI-Grundschutz-Kataloge, lokale oder private KI-Modelle für die Verarbeitung sensibler Daten zu verwenden. Stellen Sie sicher, dass Ihre Prompts und deren Ausgaben keine unkontrollierten personenbezogenen Daten über externe APIs enthalten.' },
            { q: 'Ist Constrained Prompting für den deutschen Mittelstand geeignet?', a: 'Absolut. Constrained Prompting ist besonders wertvoll für deutsche Mittelstandsunternehmen, da es standardisierte, wiederverwendbare Prompt-Vorlagen ermöglicht – ideal für ressourcenbegrenzte Teams. Mit PromptQuorum können Sie Constraints über mehrere Modelle hinweg testen, um das beste Preis-Leistungs-Verhältnis für Ihr Unternehmen zu finden. Mittelstandsunternehmen in regulierten Branchen (Finanzen, Versicherung, Gesundheit) profitieren besonders von den Sicherheits- und Compliance-Constraints.' },
          ],
        },
        sources: {
          title: 'Quellen',
          items: [
            '**OpenAI. (2024).** "Strukturierte Ausgaben-Anleitung." https://platform.openai.com/docs/guides/structured-outputs — JSON-Schema-Durchsetzung auf API-Ebene für GPT-5.5.',
            '**Anthropic. (2025).** "Claude Prompt-Engineering-Anleitung: Geconstraintetete Ausgabe." https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Claude-spezifische Constraint-Syntax und Adhäsionsverhalten.',
            '**White et al. (2023).** "Ein Prompt-Pattern-Katalog zur Verbesserung des Prompt Engineering mit ChatGPT." https://arxiv.org/abs/2302.11382 — Akademische Taxonomie von Prompt-Mustern einschließlich Constraint-basierter Prompting-Techniken.',
          ],
        },
      },
    },
    fr: {
  theme: 'Technique de Prompting',
  title: 'Prompting avec Contraintes : Guide Complet',
  seoTitle: 'Prompting avec Contraintes : Guide Complet 2026',
  intro: 'Le prompting avec contraintes force les modèles LLM à respecter des règles strictes : format de sortie spécifique, limites de longueur, ou respect de schémas prédéfinis. Découvrez comment utiliser les contraintes pour obtenir des résultats fiables, reproductibles et adaptés à vos applications en production.',
  metaDescription: 'Apprenez le prompting avec contraintes pour améliorer la fiabilité des LLM. Formats stricts, validation d\'outputs, techniques avancées avec PromptQuorum.',
  publishDate: '2026-01-20',
  dateModified: '2026-04-28',
  lastFactChecked: '2026-04-28',
  readTime: '6 min de lecture',
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-26',
  educationalLevel: 'Advanced',
  audience: 'Développeurs intégrant des LLM en production',
  primaryTerm: 'Prompting avec contraintes',
  aboutTopics: ['Ingénierie des prompts', 'Fiabilité des modèles IA', 'Validation des outputs'],
  sections: {
    tldr: {
      isTldr: true,
      title: 'Points clés',
      numberedItems: [
        'Les contraintes de format forcent les modèles à produire du JSON, XML, ou du texte structuré au lieu de contenu libre',
        'Les limites de longueur et les schémas prédéfinis réduisent les hallucinations et les dérives de contenu',
        'Les modèles open-source (Llama 3.2, Mistral 7B) et propriétaires (GPT-4o, Claude) supportent les contraintes, avec des variations de compliance',
        'Le prompting avec contraintes fonctionne mieux quand la contrainte est explicite dans le système ou le prompt utilisateur',
        'Les outils comme PromptQuorum permettent de tester et de vérifier que les contraintes sont respectées à l\'échelle',
        'Les erreurs courantes : contraintes trop souples, stacking excessif de règles, absence de tests avec des cas limites',
        'Les cas d\'usage en production : extraction de données, classification d\'intentions, génération de contenu validé, support automatisé'
      ]
    },
    whatIsConstrained: {
      title: 'Qu\'est-ce que le prompting avec contraintes ?',
      content: [
        'Le prompting avec contraintes signifie indiquer au modèle exactement comment forcer sa réponse dans un schéma prédéfini. Au lieu de demander : « Qu\'en penses-tu ? », vous demandez : « Réponds en JSON avec les champs : { sentiment: "positif"|"négatif"|"neutre", confiance: 0–1, raison: string } ».',
        'Les contraintes opèrent à trois niveaux :',
        '1. **Niveau format** : force le modèle à utiliser JSON, XML, Markdown, CSV, ou tout autre format structuré.',
        '2. **Niveau schéma** : impose une structure précise et des types (nombres, énumérés, listes imbriquées).',
        '3. **Niveau sémantique** : contraint le contenu : « Ne dépasse pas 100 mots », « Utilise uniquement les entités mentionnées dans ce document ».'
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: 'Les contraintes transforment un modèle non structuré en véritable API structurée.'
        },
        {
          type: 'in-plain-terms',
          text: 'Au lieu de gérer du texte libre, vous récupérez des réponses validées, parsables, et prévisibles.'
        }
      ]
    },
    whyItMatters: {
      title: 'Pourquoi le prompting avec contraintes est crucial',
      content: [
        'Sans contraintes, les LLM génèrent du texte libre qui varie d\'une exécution à l\'autre. Votre application ne peut pas faire confiance à la structure ou au contenu. Avec les contraintes, les modèles restent dans les limites que vous avez définies.',
        'Les principaux avantages sont :',
        '• **Fiabilité** : Chaque réponse respecte le schéma. Pas de surprise, pas de champ manquant.',
        '• **Parsabilité** : Du JSON valide signifie qu\'il peut être traité par du code sans exception.',
        '• **Reproductibilité** : Les mêmes entrées, le même modèle, les mêmes contraintes → mêmes formats de sortie.',
        '• **Intégration en chaîne** : Un LLM construit sa réponse structurée. L\'étape suivante la traite directement.',
        '• **Reduction des hallucinations** : Une contrainte très stricte limite la place pour que le modèle invente ou s\'écarte du sujet.'
      ]
    },
    typesOfConstraints: {
      title: 'Types de contraintes de prompting',
      content: 'Les contraintes varient en rigueur et en complexité. Voici les principales :',
      tableFormat: true,
      columns: ['Type', 'Description', 'Exemple'],
      rows: [
        {
          'Type': 'Format fixe',
          'Description': 'Sortie dans un format machine-lisible (JSON, XML, YAML, CSV)',
          'Exemple': '{ "sentiment": "positif", "score": 0.85 }'
        },
        {
          'Type': 'Énumérations',
          'Description': 'Réponse limitée à un ensemble fini de valeurs',
          'Exemple': 'Sentiment ∈ ["positif", "négatif", "neutre"]'
        },
        {
          'Type': 'Limites de longueur',
          'Description': 'Max N mots, caractères, ou tokens',
          'Exemple': 'Explication en ≤ 100 mots'
        },
        {
          'Type': 'Schémas imbriqués',
          'Description': 'Structure complexe avec types imbriqués (listes d\'objets, objets optionnels)',
          'Exemple': 'Array de { id: int, label: string, children: [...] }'
        },
        {
          'Type': 'Contraintes sémantiques',
          'Description': 'Le contenu doit répondre à une logique applicative (références valides, pas de self-reference)',
          'Exemple': 'Ne recommande que les produits de la liste fournie'
        }
      ]
    },
    example: {
      title: 'Exemple : Classification avec contraintes',
      content: 'Considérez ce cas d\'usage : vous avez un ticket client et vous voulez qu\'un LLM le classe automatiquement.',
      blockquote: 'Exemple de prompt sans contrainte : « Classe ce ticket client. » → Le modèle répond : « Ce ticket parle d\'une demande d\'accès client. Il semble urgent. Voici mes suggestions ... »',
      blockquoteSource: 'Output non structuré – difficile à parser',
      items: [
        'Format : texte libre',
        'Contenu : vous devez analyser manuellement ou utiliser une seconde étape de parsing',
        'Coût computationnel : deux appels, plus de tokens, plus d\'erreurs'
      ]
    },
    whenToUse: {
      title: 'Quand utiliser le prompting avec contraintes',
      content: [
        'Le prompting avec contraintes est idéal pour les cas où votre application dépend d\'une structure de sortie prévisible.',
        'Cas d\'usage appropriés :'
      ],
      numberedItems: [
        'Classification de texte : étiqueter des emails, tickets, documents avec un ensemble fermé d\'étiquettes',
        'Extraction de données structurées : extraire des noms, des dates, des prix à partir de documents',
        'Génération de contenu validé : générer des descriptions de produits qui respectent un schéma marketing',
        'API conversationnelles : transformer une conversation libre en commandes structurées',
        'Scoring/notation : générer des scores numériques avec explications dans un format précis',
        'Traitement d\'images et multimodal : forcer un modèle vision à décrire une image selon un schéma (alt-text structuré)'
      ]
    },
    howPQSupports: {
      title: 'Comment PromptQuorum supporte le prompting avec contraintes',
      content: 'PromptQuorum inclut des outils natifs pour tester et valider les contraintes à l\'échelle :',
      items: [
        '**Mode de test structuré** : Testez votre prompt avec des contraintes contre plusieurs modèles (GPT-4o, Claude, Llama 3.2) et vérifiez que chaque réponse respecte le schéma',
        '**Validation de schéma** : Définissez un schéma JSON ou une grammaire. PromptQuorum analyse chaque réponse et rapporte les violations',
        '**Dispatch avec consensus** : Envoyez le même prompt avec contraintes à plusieurs modèles. PromptQuorum collecte les réponses structurées et détecte les divergences',
        '**Monitoring de compliance** : Trackez en production : combien de réponses respectent le schéma ? Quels modèles divergent ? Quels champs sont souvent mal structurés ?',
        '**Debugging interactif** : Si une réponse viole la contrainte, PromptQuorum montre exactement où et pourquoi, avec suggestions de correction'
      ]
    },
    howToStart: {
      title: 'Intégrer le prompting avec contraintes : 5 étapes',
      numberedItems: [
        {
          title: 'Définissez votre schéma',
          whyItMatters: 'Avant d\'écrire le prompt, clarifiez la structure : quels champs ? Types ? Champs obligatoires vs optionnels ? Énumérés fermés ou ouverts ?'
        },
        {
          title: 'Écrivez le prompt avec la contrainte explicite',
          whyItMatters: 'Dites au modèle exactement comment structurer la réponse. Exemple : « Réponds toujours en JSON valide avec : { "classe": "urgent"|"normal"|"faible", "raison": string, "actions": string[] } »'
        },
        {
          title: 'Testez avec plusieurs modèles',
          whyItMatters: 'Llama, Mistral, GPT-4o, Claude réagissent différemment aux contraintes. Testez chacun. Mesurez le taux de compliance (combien de réponses sont valides ?)'
        },
        {
          title: 'Validez chaque réponse en production',
          whyItMatters: 'Parsez le JSON. Si invalide, loguez l\'erreur, re-invoquez le modèle avec feedback (« Votre réponse n\'était pas du JSON valide : ... »), ou basculez sur un modèle plus fiable'
        },
        {
          title: 'Monitez les violations',
          whyItMatters: 'Trackez les réponses qui violent le schéma. Ajustez le prompt, le modèle, ou la contrainte basé sur les patterns de violation réels'
        }
      ]
    },
    commonMistakes: {
      title: 'Erreurs courantes avec les contraintes',
      mistakes: [
        {
          mistake: 'Contrainte trop vague',
          problem: 'Dire « Sois bref » ou « Fais attention à la structure » n\'est pas assez précis. Le modèle ignore ou mal interprète.',
          fix: 'Spécifiez : « Réponse ≤ 100 mots », « JSON avec schéma : { champ1: type, champ2: type } »'
        },
        {
          mistake: 'Stacking excessif de contraintes',
          problem: 'Ajouter 10 contraintes à la fois rend les instructions incompréhensibles. Le modèle oublie ou entre en conflit.',
          fix: 'Gardez 2–3 contraintes principales. Testez chacune en isolation. Fusionnez progressivement.'
        },
        {
          mistake: 'Pas de tests avec cas limites',
          problem: 'Votre contrainte passe avec des textes simples mais échoue avec des Unicode, des listes vides, des cas extrêmes.',
          fix: 'Testez : zéro éléments, 1000 éléments, caractères spéciaux, langues non-latines, entrées vides'
        },
        {
          mistake: 'Ignorer les divergences entre modèles',
          problem: 'Un modèle respecte parfaitement le JSON. Un autre ajoute des commentaires. GPT-4o enroule la réponse dans ``` ```.',
          fix: 'Testez votre contrainte avec tous les modèles que vous utiliserez. Ajustez le prompt ou choisissez un seul modèle si la divergence est inacceptable.'
        },
        {
          mistake: 'Oublier la gestion des erreurs de parsing',
          problem: 'Vous supposez que JSON est toujours valide. La production le démontre faux. Crash silencieux ou exception.',
          fix: 'Encapsulez le parsing dans try-catch. Loguez l\'erreur. Relancez avec feedback : « Votre JSON était invalide : ... »'
        }
      ]
    },
    relatedReading: {
      title: 'Lectures complémentaires',
      items: [
        '[Grammars LLM : Forcer la Structure de Sortie](/prompt-engineering/llm-grammars?lang=fr) — Approches formelles au-delà des contraintes',
        '[Chain-of-Thought vs. Structured Reasoning](/prompt-engineering/cot-structured-reasoning?lang=fr) — Quand utiliser lequel',
        '[Fine-Tuning pour la Conformité de Sortie](/prompt-engineering/fine-tuning-for-structured-output?lang=fr) — Alternatives au prompting',
        '[Validation d\'Outputs LLM : Schémas et Tests](/prompt-engineering/llm-output-validation?lang=fr) — Cadre complet de validation',
        '[PromptQuorum : Dispatch Multi-Modèle](/features/multi-model-dispatch?lang=fr) — Comment tester les contraintes à l\'échelle',
        '[API Conversationnelles avec LLM](/local-llms/conversational-apis?lang=fr) — Cas d\'usage réel : structures contrôlées dans les chatbots'
      ]
    },
    faqSection: {
      title: 'Questions fréquentes',
      faqs: [
        {
          q: 'Les contraintes ralentissent-elles les réponses des LLM ?',
          a: 'Légèrement. Une contrainte stricte limite l\'espace de recherche du modèle, ce qui peut accélérer la génération. Mais l\'intention explicite du modèle (« Parse this into JSON ») ajoute un peu de latence. Dans la plupart des cas (< 100 ms), ce coût est accepté pour la fiabilité. Mesurez votre cas d\'usage.'
        },
        {
          q: 'Tous les modèles supportent-ils les contraintes ?',
          a: 'Les modèles modernes (GPT-4o, Claude 3.5 Sonnet, Llama 3.2, Mistral) supportent bien les contraintes de format et les énumérés. Mais plus la contrainte est complexe (schémas imbriqués profonds, logique sémantique), plus la compliance varie. Les petits modèles (< 7B) sont moins fiables. Testez votre modèle et cas d\'usage spécifiques.'
        },
        {
          q: 'Dois-je mettre la contrainte dans le prompt système ou utilisateur ?',
          a: 'Les deux fonctionnent, mais avec des différences : system prompt (instructions) donne une compliance plus cohérente et globale. User prompt (contenu) permet des contraintes spécifiques au message. Meilleure pratique : mettez la contrainte générale (format, type) dans le system prompt ; mettez les contraintes spécifiques au contexte (données, limites) dans le user prompt.'
        },
        {
          q: 'Que faire si le modèle ignore ma contrainte ?',
          a: 'Escalade graduée : 1) Reformulez la contrainte plus explicitement (au lieu de « Sois structuré », « Réponds TOUJOURS en JSON valide »). 2) Ajouter un exemple au prompt : « Voici un exemple : { sentiment: \'positif\', score: 0.9 } ». 3) Changez de modèle vers un plus performant (GPT-4o au lieu de 3.5, Llama 70B au lieu de 8B). 4) Fine-tuning sur des exemples structurés (coûteux mais fiable à l\'échelle).'
        },
        {
          q: 'Les contraintes affectent-elles la qualité du contenu ?',
          a: 'Oui, mais positivement : une contrainte bien conçue réduit le bruit et force le modèle à se concentrer. Une contrainte mal conçue (trop restrictive) peut réduire la créativité ou ignorer le contexte. Pour du contenu créatif (fiction, copywriting), gardez les contraintes light (longueur, ton). Pour de la données (extraction, classification), rendez les contraintes strictes.'
        },
        {
          q: 'Puis-je combiner le prompting avec contraintes et le fine-tuning ?',
          a: 'Absolument, et c\'est une meilleure pratique : fine-tuning prépare le modèle à comprendre votre domaine et votre style. Les contraintes forcent chaque réponse dans le format exact que vous besoin. Ensemble, ils donnent la plus haute fiabilité et qualité.'
        },
        {
          q: 'La CNIL pose-t-elle des restrictions sur les contraintes d\'IA dans les données professionnelles ?',
          a: 'La CNIL recommande le recours à des solutions d\'IA locales ou contrôlées pour le traitement de données professionnelles sensibles (données financières, médicales, juridiques). Les contraintes de format aident à isoler ou anonymiser les données sensibles dans les prompts, mais elles ne remplacent pas une architecture complète de protection des données. Consultez la CNIL si vous traitez des données sensibles.'
        }
      ]
    },
    sources: {
      title: 'Sources et références',
      items: [
        '[OpenAI : Function Calling et Structured Outputs](https://platform.openai.com/docs/guides/function-calling) — Official docs',
        '[Anthropic : Constrained Outputs with Claude](https://docs.anthropic.com) — Constrained modes documentation',
        '[Guidance : Grammar-based Output Control](https://github.com/guidance-ai/guidance) — Open-source grammar library'
      ]
    }
  },
  toc: [
    { label: 'Points clés', anchor: 'tldr' },
    { label: 'Qu\'est-ce que le prompting avec contraintes ?', anchor: 'whatIsConstrained' },
    { label: 'Pourquoi le prompting avec contraintes est crucial', anchor: 'whyItMatters' },
    { label: 'Types de contraintes de prompting', anchor: 'typesOfConstraints' },
    { label: 'Exemple : Classification avec contraintes', anchor: 'example' },
    { label: 'Quand utiliser le prompting avec contraintes', anchor: 'whenToUse' },
    { label: 'Comment PromptQuorum supporte le prompting avec contraintes', anchor: 'howPQSupports' },
    { label: 'Intégrer le prompting avec contraintes : 5 étapes', anchor: 'howToStart' },
    { label: 'Erreurs courantes avec les contraintes', anchor: 'commonMistakes' },
    { label: 'Lectures complémentaires', anchor: 'relatedReading' },
    { label: 'Questions fréquentes', anchor: 'faqSection' },
    { label: 'Sources et références', anchor: 'sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': 'Prompting avec Contraintes : Guide Complet',
    'url': 'https://www.promptquorum.com/prompt-engineering/constrained-prompting?lang=fr',
    'inLanguage': 'fr',
    'image': 'https://www.promptquorum.com/og-constrained-prompting-fr.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-04-28',
    'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'description': 'Apprenez le prompting avec contraintes pour améliorer la fiabilité des LLM.',
    'about': [
      { '@type': 'Thing', 'name': 'Ingénierie des prompts' },
      { '@type': 'Thing', 'name': 'Fiabilité des modèles IA' },
      { '@type': 'Thing', 'name': 'Validation des outputs' }
    ],
    'mentions': [
      { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' },
      { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'fr',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Les contraintes ralentissent-elles les réponses des LLM ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Légèrement. Une contrainte stricte limite l\'espace de recherche du modèle, ce qui peut accélérer la génération. Mais l\'intention explicite du modèle (« Parse this into JSON ») ajoute un peu de latence. Dans la plupart des cas (< 100 ms), ce coût est accepté pour la fiabilité. Mesurez votre cas d\'usage.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Tous les modèles supportent-ils les contraintes ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Les modèles modernes (GPT-4o, Claude 3.5 Sonnet, Llama 3.2, Mistral) supportent bien les contraintes de format et les énumérés. Mais plus la contrainte est complexe (schémas imbriqués profonds, logique sémantique), plus la compliance varie. Les petits modèles (< 7B) sont moins fiables. Testez votre modèle et cas d\'usage spécifiques.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Dois-je mettre la contrainte dans le prompt système ou utilisateur ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Les deux fonctionnent, mais avec des différences : system prompt (instructions) donne une compliance plus cohérente et globale. User prompt (contenu) permet des contraintes spécifiques au message. Meilleure pratique : mettez la contrainte générale (format, type) dans le system prompt ; mettez les contraintes spécifiques au contexte (données, limites) dans le user prompt.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Que faire si le modèle ignore ma contrainte ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Escalade graduée : 1) Reformulez la contrainte plus explicitement (au lieu de « Sois structuré », « Réponds TOUJOURS en JSON valide »). 2) Ajouter un exemple au prompt : « Voici un exemple : { sentiment: \'positif\', score: 0.9 } ». 3) Changez de modèle vers un plus performant (GPT-4o au lieu de 3.5, Llama 70B au lieu de 8B). 4) Fine-tuning sur des exemples structurés (coûteux mais fiable à l\'échelle).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Les contraintes affectent-elles la qualité du contenu ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Oui, mais positivement : une contrainte bien conçue réduit le bruit et force le modèle à se concentrer. Une contrainte mal conçue (trop restrictive) peut réduire la créativité ou ignorer le contexte. Pour du contenu créatif (fiction, copywriting), gardez les contraintes light (longueur, ton). Pour de la données (extraction, classification), rendez les contraintes strictes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Puis-je combiner le prompting avec contraintes et le fine-tuning ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolument, et c\'est une meilleure pratique : fine-tuning prépare le modèle à comprendre votre domaine et votre style. Les contraintes forcent chaque réponse dans le format exact que vous besoin. Ensemble, ils donnent la plus haute fiabilité et qualité.'
        }
      },
      {
        '@type': 'Question',
        'name': 'La CNIL pose-t-elle des restrictions sur les contraintes d\'IA dans les données professionnelles ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'La CNIL recommande le recours à des solutions d\'IA locales ou contrôlées pour le traitement de données professionnelles sensibles (données financières, médicales, juridiques). Les contraintes de format aident à isoler ou anonymiser les données sensibles dans les prompts, mais elles ne remplacent pas une architecture complète de protection des données. Consultez la CNIL si vous traitez des données sensibles.'
        }
      }
    ]
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'inLanguage': 'fr',
    'name': 'Intégrer le prompting avec contraintes : 5 étapes',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Définissez votre schéma',
        'text': 'Avant d\'écrire le prompt, clarifiez la structure : quels champs ? Types ? Champs obligatoires vs optionnels ? Énumérés fermés ou ouverts ?'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Écrivez le prompt avec la contrainte explicite',
        'text': 'Dites au modèle exactement comment structurer la réponse. Exemple : « Réponds toujours en JSON valide avec : { "classe": "urgent"|"normal"|"faible", "raison": string, "actions": string[] } »'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Testez avec plusieurs modèles',
        'text': 'Llama, Mistral, GPT-4o, Claude réagissent différemment aux contraintes. Testez chacun. Mesurez le taux de compliance (combien de réponses sont valides ?)'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': 'Validez chaque réponse en production',
        'text': 'Parsez le JSON. Si invalide, loguez l\'erreur, re-invoquez le modèle avec feedback (« Votre réponse n\'était pas du JSON valide : ... »), ou basculez sur un modèle plus fiable'
      },
      {
        '@type': 'HowToStep',
        'position': 5,
        'name': 'Monitez les violations',
        'text': 'Trackez les réponses qui violent le schéma. Ajustez le prompt, le modèle, ou la contrainte basé sur les patterns de violation réels'
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'fr',
    'name': 'Types de contraintes de prompting',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Format fixe',
        'description': 'Sortie dans un format machine-lisible (JSON, XML, YAML, CSV)'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Énumérations',
        'description': 'Réponse limitée à un ensemble fini de valeurs'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Limites de longueur',
        'description': 'Max N mots, caractères, ou tokens'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Schémas imbriqués',
        'description': 'Structure complexe avec types imbriqués (listes d\'objets, objets optionnels)'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'Contraintes sémantiques',
        'description': 'Le contenu doit répondre à une logique applicative (références valides, pas de self-reference)'
      }
    ]
  }
},
    ja: {
  theme: 'プロンプティング技法',
  title: '制約付きプロンプティング：完全ガイド',
  seoTitle: '制約付きプロンプティング：完全ガイド 2026',
  intro: '制約付きプロンプティングとは、LLMに厳格なルールを強制する技法です。特定の出力形式、長さの制限、事前定義されたスキーマの遵守を指示します。本番環境で信頼性が高く、再現可能な結果を得たいときに有効です。',
  metaDescription: 'LLMの信頼性を高める制約付きプロンプティングを学びます。厳格なフォーマット、アウトプット検証、PromptQuorumを使った高度な技法。',
  publishDate: '2026-01-20',
  dateModified: '2026-04-28',
  lastFactChecked: '2026-04-28',
  readTime: '6分で読める',
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-26',
  educationalLevel: 'Advanced',
  audience: 'LLMを本番環境に統合する開発者',
  primaryTerm: '制約付きプロンプティング',
  aboutTopics: ['プロンプトエンジニアリング', 'AIモデルの信頼性', 'アウトプット検証'],
  sections: {
    tldr: {
      isTldr: true,
      title: '重要ポイント',
      numberedItems: [
        'フォーマット制約により、モデルはJSONやXMLなど構造化出力を生成します',
        '長さ制限とスキーマは幻覚や内容の逸脱を減らします',
        'Llama 3.2やMistral 7Bなどのオープンソース、GPT-4oやClaudeなどの商用モデルが制約に対応しており、対応レベルに違いがあります',
        'システムプロンプトまたはユーザープロンプトで制約を明確に指定するほど効果が高まります',
        'PromptQuorumなどのツールで、制約遵守を大規模にテストし検証できます',
        '一般的なミス：制約が曖昧、ルールの過度な積み重ね、エッジケースのテスト不足',
        '本番環境の活用例：データ抽出、意図分類、検証済みコンテンツ生成、自動サポート'
      ]
    },
    whatIsConstrained: {
      title: '制約付きプロンプティングとは',
      content: [
        '制約付きプロンプティングは、モデルに出力スキーマを明確に強制することです。「どう思いますか？」と聞く代わりに、「JSONで返してください。フィールド構成：{ sentiment: "positive"|"negative"|"neutral", confidence: 0–1, reason: string }」と指定します。',
        '制約は3つのレベルで機能します。',
        '1. **フォーマットレベル**：JSON、XML、Markdown、CSVなど特定の形式を強制',
        '2. **スキーマレベル**：正確な構造と型を定義（数値、列挙型、ネストされたリスト）',
        '3. **セマンティックレベル**：コンテンツを制限（「100語以下」、「このドキュメントのエンティティのみ使用」）'
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: '制約は、非構造化モデルを実質的なAPI化します。'
        },
        {
          type: 'in-plain-terms',
          text: 'フリーテキストを扱う代わりに、検証済みで解析可能で予測可能なレスポンスを得られます。'
        }
      ]
    },
    whyItMatters: {
      title: 'なぜ制約付きプロンプティングが重要か',
      content: [
        '制約がないと、LLMは実行ごとに異なる形式や内容のテキストを生成します。アプリケーションは構造やコンテンツを信頼できません。制約があれば、モデルは定義した範囲内に留まります。',
        '主な利点は以下です。',
        '• **信頼性**：各レスポンスがスキーマに準拠。予期しない結果や欠落フィールドがない',
        '• **解析可能性**：有効なJSONはコード例外なく処理可能',
        '• **再現性**：同じ入力、同じモデル、同じ制約 → 同じ出力形式',
        '• **チェーン統合**：LLMが構造化レスポンスを生成。次のステップが直接処理可能',
        '• **幻覚削減**：厳格な制約により、モデルの発明や脱線する余地がなくなります'
      ]
    },
    typesOfConstraints: {
      title: '制約付きプロンプティングの種類',
      content: '制約は厳密さと複雑さが異なります。主な種類は以下です。',
      tableFormat: true,
      columns: ['種類', '説明', '例'],
      rows: [
        {
          '種類': '固定フォーマット',
          '説明': 'JSON、XML、YAML、CSVなど機械可読形式での出力',
          '例': '{ "sentiment": "positive", "score": 0.85 }'
        },
        {
          '種類': '列挙型',
          '説明': '有限の値セットに制限されたレスポンス',
          '例': 'sentiment ∈ ["positive", "negative", "neutral"]'
        },
        {
          '種類': '長さ制限',
          '説明': '最大N単語、文字、またはトークン',
          '例': '説明100語以下'
        },
        {
          '種類': 'ネストされたスキーマ',
          '説明': '複雑な構造、ネストされた型（オブジェクト配列、オプショナルオブジェクト）',
          '例': '{ id: int, label: string, children: [...] } の配列'
        },
        {
          '種類': 'セマンティック制約',
          '説明': 'アプリケーションロジックに従う内容（有効な参照、自己参照なし）',
          '例': '提供リストの製品のみ推奨'
        }
      ]
    },
    example: {
      title: '例：制約ありのサポートチケット分類',
      content: 'ユースケース：顧客サポートチケットをLLMで自動分類します。',
      blockquote: '制約なしの例：「このチケットを分類してください」→ 出力：「このチケットはクライアントアクセス要求について述べています。緊急のようです。提案は…」',
      blockquoteSource: '非構造化出力 – 解析困難',
      items: [
        'フォーマット：フリーテキスト',
        'コンテンツ：手動解析または第2段階の解析が必要',
        'コスト：2回のAPI呼び出し、トークン数増加、エラー増加'
      ]
    },
    whenToUse: {
      title: 'いつ制約付きプロンプティングを使うか',
      content: [
        '制約付きプロンプティングは、アプリケーションが予測可能な出力構造に依存する場合に最適です。',
        '適切なユースケース：'
      ],
      numberedItems: [
        'テキスト分類：メール、チケット、ドキュメントを限定ラベルセットで自動タグ付け',
        'データ抽出：名前、日付、価格をドキュメントから抽出',
        '検証済みコンテンツ生成：マーケティングスキーマに準拠した製品説明生成',
        '会話型API：フリートークンを構造化コマンドに変換',
        'スコアリング：数値スコアと説明を正確なフォーマットで生成',
        'マルチモーダル処理：画像を説明スキーマに従わせる（構造化alt-text）'
      ]
    },
    howPQSupports: {
      title: 'PromptQuorumが制約付きプロンプティングをサポートする方法',
      content: '「PromptQuorum」は、制約テストと検証を大規模に実行するネイティブツールを備えています。',
      items: [
        '**構造化テストモード**：複数モデル（GPT-4o、Claude、Llama 3.2）でスキーマ準拠をテスト',
        '**スキーマ検証**：JSONスキーマを定義。各レスポンスの違反を検出・報告',
        '**マルチモデルディスパッチ**：複数モデルに同じ制約付きプロンプトを送信。構造化レスポンスを収集、違いを検出',
        '**本番監視**：スキーマ準拠率をトラッキング。どのモデルが逸脱？どのフィールドが構造化されていない？',
        '**インタラクティブデバッグ**：制約違反を検出したら、その場所と理由を表示。改善提案を提供'
      ]
    },
    howToStart: {
      title: '制約付きプロンプティング統合：5ステップ',
      numberedItems: [
        {
          title: 'スキーマを定義',
          whyItMatters: 'プロンプトを書く前に、構造を明確に。フィールド？型？必須vs オプション？クローズド or オープン列挙？'
        },
        {
          title: '制約を明確に指定',
          whyItMatters: 'モデルに正確に構造化方法を伝えます。例：「JSON形式で返してください。必須フィールド：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }」'
        },
        {
          title: '複数モデルでテスト',
          whyItMatters: 'Llama、Mistral、GPT-4o、Claudeは制約に異なる反応。各モデルをテスト。準拠率を測定。'
        },
        {
          title: '本番で各レスポンスを検証',
          whyItMatters: 'JSONをパース。無効な場合、エラーをログして再実行（フィードバック付き）。または信頼性の高いモデルに切り替え。'
        },
        {
          title: '違反を監視',
          whyItMatters: 'スキーマ違反をトラッキング。実際の違反パターンに基づいてプロンプト、モデル、制約を調整。'
        }
      ]
    },
    commonMistakes: {
      title: '制約付きプロンプティングの一般的なミス',
      mistakes: [
        {
          mistake: '制約が曖昧',
          problem: '「簡潔に」「構造的に」では不十分。モデルは無視するか誤釈。',
          fix: '「100字以下」、「JSON：{ field1: type, field2: type }」と明確に指定'
        },
        {
          mistake: 'ルールの過度な積み重ね',
          problem: '10個の制約を同時に指定するとモデルが混乱。忘れるまたは矛盾。',
          fix: '2～3個の主要制約に留める。各制約を分離テスト。段階的に統合。'
        },
        {
          mistake: 'エッジケーステストなし',
          problem: '単純テキストでは成功。Unicode、空リスト、極端な場合で失敗。',
          fix: '確認：0要素、1000要素、特殊文字、非ラテン文字、空入力'
        },
        {
          mistake: 'モデル間の違いを無視',
          problem: 'JSONを完全に守るモデル。別のモデルがコメント追加。GPT-4oは```で囲む。',
          fix: '使用するすべてのモデルで制約テスト。違いが許容不可ならモデル固定。'
        },
        {
          mistake: 'パース例外処理を忘れる',
          problem: 'JSONは常に有効と仮定。本番でクラッシュ。',
          fix: 'try-catchでパース。エラーをログ。フィードバック付きで再実行：「JSONが無効：...」'
        }
      ]
    },
    relatedReading: {
      title: '参考資料',
      items: [
        '[LLM文法：出力構造の強制](/prompt-engineering/llm-grammars?lang=ja) — 制約を超えた形式的アプローチ',
        '[Chain-of-Thoughtと構造化推論](/prompt-engineering/cot-structured-reasoning?lang=ja) — 使い分け',
        '[構造化出力向けファインチューニング](/prompt-engineering/fine-tuning-for-structured-output?lang=ja) — プロンプティングの代替手段',
        '[LLMアウトプット検証：スキーマとテスト](/prompt-engineering/llm-output-validation?lang=ja) — 総合検証フレームワーク',
        '[PromptQuorum：マルチモデルディスパッチ](/features/multi-model-dispatch?lang=ja) — 大規模制約テスト',
        '[会話型API with LLM](/local-llms/conversational-apis?lang=ja) — 実例：チャットボットの制御出力'
      ]
    },
    faqSection: {
      title: 'よくある質問',
      faqs: [
        {
          q: '制約によってLLMのレスポンスが遅くなる？',
          a: '若干遅くなる可能性があります。厳格な制約は検索空間を制限し、生成を加速する場合もあります。ただし、モデルに「JSONをパースする」という明示的な意図を指示すると若干のレイテンシが追加されます。ほとんどのケース（<100ms）でこのコストは信頼性のために許容されます。ユースケースを測定してください。'
        },
        {
          q: 'すべてのモデルが制約に対応している？',
          a: '最新モデル（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）はフォーマット制約と列挙型をよく対応しています。ただし、制約が複雑（深いネストスキーマ、複雑なセマンティックロジック）ほど対応レベルが変わります。小規模モデル（<7B）は信頼性が低い。自分のモデルとユースケースでテストしてください。'
        },
        {
          q: '制約はシステムプロンプトですか、ユーザープロンプトですか？',
          a: '両方機能しますが異なります。system prompt（指示）は全体的に一貫性が高く。user prompt（コンテンツ）はメッセージごとに特定の制約が可能。ベストプラクティス：一般的制約（フォーマット、型）はsystem promptに。コンテキスト固有制約（データ、制限）はuser promptに。'
        },
        {
          q: 'モデルが制約を無視したら？',
          a: '段階的対応：1) より明確に：「構造的に」→ 「常にJSON有効で返す」。2) 例を追加：「例：{ sentiment: \'positive\', score: 0.9 }」。3) より強力なモデルに切り替え（GPT-4oではなく3.5、Llama 70B vs 8B）。4) ファインチューニング（高コスト、本番環境で信頼性向上）。'
        },
        {
          q: '制約はコンテンツ品質に影響する？',
          a: 'はい、ただしポジティブに。よく設計された制約はノイズを減らし、モデルが集中します。設計不良（過度に制限）は創造性低下または文脈無視につながります。クリエイティブコンテンツ（小説、コピーライティング）は制約を軽く（長さ、トーン）に。データ作業（抽出、分類）は制約を厳格に。'
        },
        {
          q: '制約付きプロンプティングとファインチューニングを組み合わせられる？',
          a: 'はい、それがベストプラクティスです。ファインチューニングはモデルにドメインと自分のスタイルを学習させます。制約は各レスポンスを必要な正確なフォーマットに強制します。組み合わせると最高の信頼性と品質を実現します。'
        },
        {
          q: '日本の企業がAI制約を使う際の規制は？',
          a: '日本の経済産業省（METI）のAI統治ガイドラインでは、エンタープライズ展開でのAI使用に関する推奨事項を提供しています。制約付きプロンプティングは、本番システムでの安全性とコンプライアンスを確保するのに有効です。金融、医療、法務関連データを扱う場合はMETIのガイドラインと社内ポリシーを確認してください。'
        },
        {
          q: '金融機関向けの制約設計のコツは？',
          a: '金融データの安全性確保のため、プロンプトとアウトプットに個人情報や機密データが含まれないようにします。制約例：「顧客名、口座番号、取引額は出力しない」「承認済みの勘定科目のみ使用」。本番環境では監査ログとデータ保護を制約と組み合わせることが必須です。'
        },
        {
          q: '医療向け制約の例は？',
          a: '医療分野での制約例：「診断結果は示さない。治療提案も示さない。医学的言語は使わない。代わりに、患者は医師に相談すること推奨」。専門的判断はAIではなく医療専門家に委ねることが重要です。制約で医学的免責を明確に。'
        },
        {
          q: 'PromptQuorumで制約テストを自動化できる？',
          a: 'はい。PromptQuorumはスキーマ検証、複数モデル間の比較テスト、本番監視を自動化します。テストスイート設定により、毎回サンプルセットで制約遵守を確認。自動アラート。エラーパターン追跡で改善を指導します。'
        }
      ]
    },
    sources: {
      title: 'ソースと参考文献',
      items: [
        '[OpenAI：関数呼び出しと構造化出力](https://platform.openai.com/docs/guides/function-calling) — 公式ドキュメント',
        '[Anthropic：Claudeで制約出力](https://docs.anthropic.com) — 制約モード documentation',
        '[Guidance：文法ベース出力制御](https://github.com/guidance-ai/guidance) — オープンソース文法ライブラリ'
      ]
    }
  },
  toc: [
    { label: '重要ポイント', anchor: 'tldr' },
    { label: '制約付きプロンプティングとは', anchor: 'whatIsConstrained' },
    { label: 'なぜ制約付きプロンプティングが重要か', anchor: 'whyItMatters' },
    { label: '制約付きプロンプティングの種類', anchor: 'typesOfConstraints' },
    { label: '例：制約ありのサポートチケット分類', anchor: 'example' },
    { label: 'いつ制約付きプロンプティングを使うか', anchor: 'whenToUse' },
    { label: 'PromptQuorumが制約付きプロンプティングをサポートする方法', anchor: 'howPQSupports' },
    { label: '制約付きプロンプティング統合：5ステップ', anchor: 'howToStart' },
    { label: '制約付きプロンプティングの一般的なミス', anchor: 'commonMistakes' },
    { label: '参考資料', anchor: 'relatedReading' },
    { label: 'よくある質問', anchor: 'faqSection' },
    { label: 'ソースと参考文献', anchor: 'sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': '制約付きプロンプティング：完全ガイド',
    'url': 'https://www.promptquorum.com/prompt-engineering/constrained-prompting?lang=ja',
    'inLanguage': 'ja',
    'image': 'https://www.promptquorum.com/og-constrained-prompting-ja.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-04-28',
    'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'description': 'LLMの信頼性を高める制約付きプロンプティングを学びます。',
    'about': [
      { '@type': 'Thing', 'name': 'プロンプトエンジニアリング' },
      { '@type': 'Thing', 'name': 'AIモデルの信頼性' },
      { '@type': 'Thing', 'name': 'アウトプット検証' }
    ],
    'mentions': [
      { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' },
      { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'ja',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '制約によってLLMのレスポンスが遅くなる？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '若干遅くなる可能性があります。厳格な制約は検索空間を制限し、生成を加速する場合もあります。ただし、モデルに「JSONをパースする」という明示的な意図を指示すると若干のレイテンシが追加されます。ほとんどのケース（<100ms）でこのコストは信頼性のために許容されます。ユースケースを測定してください。'
        }
      },
      {
        '@type': 'Question',
        'name': 'すべてのモデルが制約に対応している？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '最新モデル（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）はフォーマット制約と列挙型をよく対応しています。ただし、制約が複雑（深いネストスキーマ、複雑なセマンティックロジック）ほど対応レベルが変わります。小規模モデル（<7B）は信頼性が低い。自分のモデルとユースケースでテストしてください。'
        }
      },
      {
        '@type': 'Question',
        'name': '制約はシステムプロンプトですか、ユーザープロンプトですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '両方機能しますが異なります。system prompt（指示）は全体的に一貫性が高く。user prompt（コンテンツ）はメッセージごとに特定の制約が可能。ベストプラクティス：一般的制約（フォーマット、型）はsystem promptに。コンテキスト固有制約（データ、制限）はuser promptに。'
        }
      },
      {
        '@type': 'Question',
        'name': 'モデルが制約を無視したら？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '段階的対応：1) より明確に：「構造的に」→ 「常にJSON有効で返す」。2) 例を追加：「例：{ sentiment: \'positive\', score: 0.9 }」。3) より強力なモデルに切り替え（GPT-4oではなく3.5、Llama 70B vs 8B）。4) ファインチューニング（高コスト、本番環境で信頼性向上）。'
        }
      },
      {
        '@type': 'Question',
        'name': '制約はコンテンツ品質に影響する？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'はい、ただしポジティブに。よく設計された制約はノイズを減らし、モデルが集中します。設計不良（過度に制限）は創造性低下または文脈無視につながります。クリエイティブコンテンツ（小説、コピーライティング）は制約を軽く（長さ、トーン）に。データ作業（抽出、分類）は制約を厳格に。'
        }
      },
      {
        '@type': 'Question',
        'name': '制約付きプロンプティングとファインチューニングを組み合わせられる？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'はい、それがベストプラクティスです。ファインチューニングはモデルにドメインと自分のスタイルを学習させます。制約は各レスポンスを必要な正確なフォーマットに強制します。組み合わせると最高の信頼性と品質を実現します。'
        }
      },
      {
        '@type': 'Question',
        'name': '日本の企業がAI制約を使う際の規制は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '日本の経済産業省（METI）のAI統治ガイドラインでは、エンタープライズ展開でのAI使用に関する推奨事項を提供しています。制約付きプロンプティングは、本番システムでの安全性とコンプライアンスを確保するのに有効です。金融、医療、法務関連データを扱う場合はMETIのガイドラインと社内ポリシーを確認してください。'
        }
      },
      {
        '@type': 'Question',
        'name': '金融機関向けの制約設計のコツは？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '金融データの安全性確保のため、プロンプトとアウトプットに個人情報や機密データが含まれないようにします。制約例：「顧客名、口座番号、取引額は出力しない」「承認済みの勘定科目のみ使用」。本番環境では監査ログとデータ保護を制約と組み合わせることが必須です。'
        }
      },
      {
        '@type': 'Question',
        'name': '医療向け制約の例は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '医療分野での制約例：「診断結果は示さない。治療提案も示さない。医学的言語は使わない。代わりに、患者は医師に相談すること推奨」。専門的判断はAIではなく医療専門家に委ねることが重要です。制約で医学的免責を明確に。'
        }
      },
      {
        '@type': 'Question',
        'name': 'PromptQuorumで制約テストを自動化できる？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'はい。PromptQuorumはスキーマ検証、複数モデル間の比較テスト、本番監視を自動化します。テストスイート設定により、毎回サンプルセットで制約遵守を確認。自動アラート。エラーパターン追跡で改善を指導します。'
        }
      }
    ]
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'inLanguage': 'ja',
    'name': '制約付きプロンプティング統合：5ステップ',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'スキーマを定義',
        'text': 'プロンプトを書く前に、構造を明確に。フィールド？型？必須vs オプション？クローズド or オープン列挙？'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': '制約を明確に指定',
        'text': 'モデルに正確に構造化方法を伝えます。例：「JSON形式で返してください。必須フィールド：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }」'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': '複数モデルでテスト',
        'text': 'Llama、Mistral、GPT-4o、Claudeは制約に異なる反応。各モデルをテスト。準拠率を測定。'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': '本番で各レスポンスを検証',
        'text': 'JSONをパース。無効な場合、エラーをログして再実行（フィードバック付き）。または信頼性の高いモデルに切り替え。'
      },
      {
        '@type': 'HowToStep',
        'position': 5,
        'name': '違反を監視',
        'text': 'スキーマ違反をトラッキング。実際の違反パターンに基づいてプロンプト、モデル、制約を調整。'
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'ja',
    'name': '制約付きプロンプティングの種類',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '固定フォーマット',
        'description': 'JSON、XML、YAML、CSVなど機械可読形式での出力'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': '列挙型',
        'description': '有限の値セットに制限されたレスポンス'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': '長さ制限',
        'description': '最大N単語、文字、またはトークン'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'ネストされたスキーマ',
        'description': '複雑な構造、ネストされた型（オブジェクト配列、オプショナルオブジェクト）'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'セマンティック制約',
        'description': 'アプリケーションロジックに従う内容（有効な参照、自己参照なし）'
      }
    ]
  }
},
    zh: {
  theme: '提示工程技术',
  title: '受限提示：完整指南',
  seoTitle: '受限提示：完整指南 2026',
  intro: '受限提示强制LLM遵守严格规则：特定输出格式、长度限制或预定义架构遵守。在生产环境中需要可靠、可重现的结果时至关重要。',
  metaDescription: '学习受限提示提升LLM可靠性。严格格式、输出验证、PromptQuorum高级技术。',
  publishDate: '2026-01-20',
  dateModified: '2026-04-28',
  lastFactChecked: '2026-04-28',
  readTime: '阅读约6分钟',
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-26',
  educationalLevel: 'Advanced',
  audience: '将LLM集成到生产环境的开发者和企业',
  primaryTerm: '受限提示',
  aboutTopics: ['提示工程', 'AI模型可靠性', '输出验证'],
  sections: {
    tldr: {
      isTldr: true,
      title: '核心要点',
      numberedItems: [
        '格式约束强制模型生成JSON、XML等结构化输出，而非自由文本',
        '长度限制和架构减少幻觉和内容偏离',
        '开源模型（Llama 3.2、Mistral 7B）和商用模型（GPT-4o、Claude）均支持约束，但对应程度有差异',
        '在系统或用户提示中明确指定约束时效果最佳',
        'PromptQuorum等工具支持大规模测试和验证约束遵守',
        '常见错误：约束模糊、规则过度堆积、缺少边界情况测试',
        '生产环例：数据提取、意图分类、验证内容生成、自动化支持'
      ]
    },
    whatIsConstrained: {
      title: '什么是受限提示',
      content: [
        '受限提示是指明确强制模型输出架构。与其问"你的想法是什么？"，你指定"以JSON返回。字段结构：{ sentiment: "positive"|"negative"|"neutral", confidence: 0–1, reason: string }"。',
        '约束在三个层级运作：',
        '1. **格式层**：强制JSON、XML、Markdown、CSV等特定格式',
        '2. **架构层**：定义精确结构和类型（数字、枚举、嵌套列表）',
        '3. **语义层**：限制内容（"不超过100字"、"仅使用文档中提到的实体"）'
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: '约束将非结构化模型转换为实质上的API。'
        },
        {
          type: 'in-plain-terms',
          text: '与其处理自由文本，你获得验证、可解析、可预测的响应。'
        }
      ]
    },
    whyItMatters: {
      title: '受限提示为什么重要',
      content: [
        '没有约束，LLM会生成执行之间格式和内容变化的自由文本。应用无法信任结构或内容。有了约束，模型保持在定义的范围内。',
        '主要优势：',
        '• **可靠性**：每个响应遵守架构。无意外结果或缺失字段',
        '• **可解析性**：有效JSON可被代码无异常处理',
        '• **可重现性**：相同输入、相同模型、相同约束 → 相同输出格式',
        '• **链式集成**：LLM生成结构化响应。下一步直接处理',
        '• **减少幻觉**：严格约束限制模型发明或脱离主题的空间'
      ]
    },
    typesOfConstraints: {
      title: '受限提示的类型',
      content: '约束在严密性和复杂性上有所不同。主要类型如下：',
      tableFormat: true,
      columns: ['类型', '描述', '示例'],
      rows: [
        {
          '类型': '固定格式',
          '描述': 'JSON、XML、YAML、CSV等机器可读格式的输出',
          '示例': '{ "sentiment": "positive", "score": 0.85 }'
        },
        {
          '类型': '枚举',
          '描述': '响应限制在有限值集合内',
          '示例': 'sentiment ∈ ["positive", "negative", "neutral"]'
        },
        {
          '类型': '长度限制',
          '描述': '最多N个单词、字符或令牌',
          '示例': '解释不超过100字'
        },
        {
          '类型': '嵌套架构',
          '描述': '复杂结构含嵌套类型（对象数组、可选对象）',
          '示例': '{ id: int, label: string, children: [...] } 的数组'
        },
        {
          '类型': '语义约束',
          '描述': '内容遵守应用逻辑（有效参考、无自引用）',
          '示例': '仅推荐提供列表中的产品'
        }
      ]
    },
    example: {
      title: '示例：客户支持工单分类',
      content: '用例：用LLM自动分类客户支持工单。',
      blockquote: '无约束示例："请分类这个工单。"→ 输出："此工单涉及客户访问请求。似乎很紧急。我的建议是..."',
      blockquoteSource: '非结构化输出 – 难以解析',
      items: [
        '格式：自由文本',
        '内容：需要手动解析或第二阶段处理',
        '成本：两次API调用、更多令牌、更多错误'
      ]
    },
    whenToUse: {
      title: '何时使用受限提示',
      content: [
        '受限提示最适合应用依赖可预测输出结构的情况。',
        '适用用例：'
      ],
      numberedItems: [
        '文本分类：用有限标签集自动标记电子邮件、工单、文档',
        '数据提取：从文档中提取名称、日期、价格',
        '验证内容生成：生成遵守营销架构的产品描述',
        '会话API：将自由对话转换为结构化命令',
        '评分：以精确格式生成数值分数和说明',
        '多模态处理：强制视觉模型按架构描述图像（结构化alt文本）'
      ]
    },
    howPQSupports: {
      title: 'PromptQuorum如何支持受限提示',
      content: 'PromptQuorum包含原生工具用于大规模测试和验证约束：',
      items: [
        '**结构化测试模式**：对多个模型（GPT-4o、Claude、Llama 3.2）测试架构遵守',
        '**架构验证**：定义JSON架构。检测并报告每个响应的违规',
        '**多模型分发**：向多个模型发送相同的受限提示。收集结构化响应，检测差异',
        '**生产监控**：跟踪架构遵守率。哪些模型偏离？哪些字段经常未结构化？',
        '**交互式调试**：检测到约束违规时，显示具体位置和原因。提供改进建议'
      ]
    },
    howToStart: {
      title: '受限提示集成：5个步骤',
      numberedItems: [
        {
          title: '定义架构',
          whyItMatters: '编写提示前，明确结构。哪些字段？什么类型？必需vs可选？封闭或开放枚举？'
        },
        {
          title: '明确陈述约束',
          whyItMatters: '准确告诉模型如何结构化响应。示例："始终以有效JSON返回：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }"'
        },
        {
          title: '在多个模型上测试',
          whyItMatters: 'Llama、Mistral、GPT-4o、Claude对约束反应不同。测试每个。测量遵守率。'
        },
        {
          title: '在生产中验证每个响应',
          whyItMatters: '解析JSON。若无效，记录错误、带反馈重试（"你的响应不是有效JSON：..."），或切换到更可靠的模型。'
        },
        {
          title: '监控违规',
          whyItMatters: '跟踪架构违规。基于实际违规模式调整提示、模型或约束。'
        }
      ]
    },
    commonMistakes: {
      title: '受限提示的常见错误',
      mistakes: [
        {
          mistake: '约束过于模糊',
          problem: '"简洁点"或"结构化"不够具体。模型忽略或误解。',
          fix: '明确指定："不超过100字"、"JSON：{ field1: type, field2: type }"'
        },
        {
          mistake: '约束过度堆积',
          problem: '同时指定10个约束令模型混乱。遗漏或矛盾。',
          fix: '保持2-3个主要约束。独立测试每个。逐步整合。'
        },
        {
          mistake: '缺少边界情况测试',
          problem: '简单文本成功。Unicode、空列表、极端情况失败。',
          fix: '测试：零元素、1000元素、特殊字符、非拉丁字符、空输入'
        },
        {
          mistake: '忽视模型间差异',
          problem: '一个模型完美遵守JSON。另一个添加注释。GPT-4o用```包裹。',
          fix: '在所有计划使用的模型上测试约束。差异不可接受则固定模型。'
        },
        {
          mistake: '遗漏解析异常处理',
          problem: '假设JSON总是有效。生产中崩溃。',
          fix: '用try-catch包裹解析。记录错误。带反馈重试："JSON无效：..."'
        }
      ]
    },
    relatedReading: {
      title: '相关阅读',
      items: [
        '[LLM文法：强制输出结构](/prompt-engineering/llm-grammars?lang=zh) — 约束之外的形式化方法',
        '[Chain-of-Thought vs 结构化推理](/prompt-engineering/cot-structured-reasoning?lang=zh) — 何时使用哪种',
        '[结构化输出微调](/prompt-engineering/fine-tuning-for-structured-output?lang=zh) — 提示工程的替代方案',
        '[LLM输出验证：架构和测试](/prompt-engineering/llm-output-validation?lang=zh) — 完整验证框架',
        '[PromptQuorum：多模型分发](/features/multi-model-dispatch?lang=zh) — 大规模测试约束',
        '[与LLM的会话API](/local-llms/conversational-apis?lang=zh) — 实例：聊天机器人的控制输出'
      ]
    },
    faqSection: {
      title: '常见问题',
      faqs: [
        {
          q: '约束会减慢LLM响应吗？',
          a: '略微减慢。严格约束限制搜索空间，有时可加速生成。但明确指示模型"解析为JSON"添加轻微延迟。大多数情况（<100ms）此成本为可靠性而值得。测量你的用例。'
        },
        {
          q: '所有模型都支持约束吗？',
          a: '最新模型（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）很好地支持格式约束和枚举。但约束越复杂（深层嵌套架构、复杂语义逻辑），支持程度越不同。小模型（<7B）可靠性较低。在你的模型和用例上测试。'
        },
        {
          q: '约束应在系统还是用户提示中？',
          a: '两者都行但有差异。系统提示（指令）整体一致性更高。用户提示（内容）允许每条消息特定约束。最佳实践：一般约束（格式、类型）在系统提示；上下文特定约束（数据、限制）在用户提示。'
        },
        {
          q: '模型忽略约束怎么办？',
          a: '递进处理：1）更明确："结构化"→"始终以有效JSON返回"。2）添加示例："例：{ sentiment: \'positive\', score: 0.9 }"。3）切换到更强大模型（GPT-4o vs 3.5、Llama 70B vs 8B）。4）微调（高成本，生产中可靠）。'
        },
        {
          q: '约束影响内容质量吗？',
          a: '是的，但积极影响。设计良好的约束减少噪音，使模型集中。设计不良（过度限制）可降低创意或忽视背景。创意内容（小说、文案）约束轻（长度、语气）。数据工作（提取、分类）约束严格。'
        },
        {
          q: '能结合受限提示和微调吗？',
          a: '是的，这是最佳实践。微调教会模型你的领域和风格。约束强制每个响应为精确所需格式。合并时可靠性和质量最高。'
        },
        {
          q: '中国企业使用AI约束的法规是什么？',
          a: '中国《数据安全法》（2021）要求对个人数据和敏感信息严格管理。受限提示可通过限制敏感信息流向来帮助合规。金融、医疗、法律部门需特别注意。建议使用本地推理或对数据处理有严格控制的解决方案。'
        },
        {
          q: '金融机构的约束设计技巧？',
          a: '金融数据保护需约束排除个人信息和机密数据。示例约束："不输出客户名、账户号、交易额""仅使用批准的账户代码"。生产中必须配合审计日志和数据保护，符合《数据安全法》和内部政策。'
        },
        {
          q: '医疗领域约束示例？',
          a: '医疗约束示例："不显示诊断结果。不提议治疗。不使用医学术语。相反，建议患者咨询医生"。专业判断由医疗专家而非AI把握。约束中明确医学免责。'
        },
        {
          q: 'PromptQuorum能自动化约束测试吗？',
          a: '是的。PromptQuorum自动化架构验证、多模型对比测试、生产监控。配置测试套件后，每次对样本集验证约束遵守。自动告警。错误模式跟踪指导改进。'
        }
      ]
    },
    sources: {
      title: '来源和参考',
      items: [
        '[OpenAI：函数调用和结构化输出](https://platform.openai.com/docs/guides/function-calling) — 官方文档',
        '[Anthropic：Claude的约束输出](https://docs.anthropic.com) — 约束模式文档',
        '[Guidance：基于文法的输出控制](https://github.com/guidance-ai/guidance) — 开源文法库'
      ]
    }
  },
  toc: [
    { label: '核心要点', anchor: 'tldr' },
    { label: '什么是受限提示', anchor: 'whatIsConstrained' },
    { label: '受限提示为什么重要', anchor: 'whyItMatters' },
    { label: '受限提示的类型', anchor: 'typesOfConstraints' },
    { label: '示例：客户支持工单分类', anchor: 'example' },
    { label: '何时使用受限提示', anchor: 'whenToUse' },
    { label: 'PromptQuorum如何支持受限提示', anchor: 'howPQSupports' },
    { label: '受限提示集成：5个步骤', anchor: 'howToStart' },
    { label: '受限提示的常见错误', anchor: 'commonMistakes' },
    { label: '相关阅读', anchor: 'relatedReading' },
    { label: '常见问题', anchor: 'faqSection' },
    { label: '来源和参考', anchor: 'sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': '受限提示：完整指南',
    'url': 'https://www.promptquorum.com/prompt-engineering/constrained-prompting?lang=zh',
    'inLanguage': 'zh',
    'image': 'https://www.promptquorum.com/og-constrained-prompting-zh.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-04-28',
    'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'description': '学习受限提示提升LLM可靠性。',
    'about': [
      { '@type': 'Thing', 'name': '提示工程' },
      { '@type': 'Thing', 'name': 'AI模型可靠性' },
      { '@type': 'Thing', 'name': '输出验证' }
    ],
    'mentions': [
      { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' },
      { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'zh',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '约束会减慢LLM响应吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '略微减慢。严格约束限制搜索空间，有时可加速生成。但明确指示模型"解析为JSON"添加轻微延迟。大多数情况（<100ms）此成本为可靠性而值得。测量你的用例。'
        }
      },
      {
        '@type': 'Question',
        'name': '所有模型都支持约束吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '最新模型（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）很好地支持格式约束和枚举。但约束越复杂（深层嵌套架构、复杂语义逻辑），支持程度越不同。小模型（<7B）可靠性较低。在你的模型和用例上测试。'
        }
      },
      {
        '@type': 'Question',
        'name': '约束应在系统还是用户提示中？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '两者都行但有差异。系统提示（指令）整体一致性更高。用户提示（内容）允许每条消息特定约束。最佳实践：一般约束（格式、类型）在系统提示；上下文特定约束（数据、限制）在用户提示。'
        }
      },
      {
        '@type': 'Question',
        'name': '模型忽略约束怎么办？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '递进处理：1）更明确："结构化"→"始终以有效JSON返回"。2）添加示例："例：{ sentiment: \'positive\', score: 0.9 }"。3）切换到更强大模型（GPT-4o vs 3.5、Llama 70B vs 8B）。4）微调（高成本，生产中可靠）。'
        }
      },
      {
        '@type': 'Question',
        'name': '约束影响内容质量吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '是的，但积极影响。设计良好的约束减少噪音，使模型集中。设计不良（过度限制）可降低创意或忽视背景。创意内容（小说、文案）约束轻（长度、语气）。数据工作（提取、分类）约束严格。'
        }
      },
      {
        '@type': 'Question',
        'name': '能结合受限提示和微调吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '是的，这是最佳实践。微调教会模型你的领域和风格。约束强制每个响应为精确所需格式。合并时可靠性和质量最高。'
        }
      },
      {
        '@type': 'Question',
        'name': '中国企业使用AI约束的法规是什么？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '中国《数据安全法》（2021）要求对个人数据和敏感信息严格管理。受限提示可通过限制敏感信息流向来帮助合规。金融、医疗、法律部门需特别注意。建议使用本地推理或对数据处理有严格控制的解决方案。'
        }
      },
      {
        '@type': 'Question',
        'name': '金融机构的约束设计技巧？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '金融数据保护需约束排除个人信息和机密数据。示例约束："不输出客户名、账户号、交易额""仅使用批准的账户代码"。生产中必须配合审计日志和数据保护，符合《数据安全法》和内部政策。'
        }
      },
      {
        '@type': 'Question',
        'name': '医疗领域约束示例？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '医疗约束示例："不显示诊断结果。不提议治疗。不使用医学术语。相反，建议患者咨询医生"。专业判断由医疗专家而非AI把握。约束中明确医学免责。'
        }
      },
      {
        '@type': 'Question',
        'name': 'PromptQuorum能自动化约束测试吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '是的。PromptQuorum自动化架构验证、多模型对比测试、生产监控。配置测试套件后，每次对样本集验证约束遵守。自动告警。错误模式跟踪指导改进。'
        }
      }
    ]
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'inLanguage': 'zh',
    'name': '受限提示集成：5个步骤',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': '定义架构',
        'text': '编写提示前，明确结构。哪些字段？什么类型？必需vs可选？封闭或开放枚举？'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': '明确陈述约束',
        'text': '准确告诉模型如何结构化响应。示例："始终以有效JSON返回：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }"'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': '在多个模型上测试',
        'text': 'Llama、Mistral、GPT-4o、Claude对约束反应不同。测试每个。测量遵守率。'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': '在生产中验证每个响应',
        'text': '解析JSON。若无效，记录错误、带反馈重试（"你的响应不是有效JSON：..."），或切换到更可靠的模型。'
      },
      {
        '@type': 'HowToStep',
        'position': 5,
        'name': '监控违规',
        'text': '跟踪架构违规。基于实际违规模式调整提示、模型或约束。'
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'zh',
    'name': '受限提示的类型',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '固定格式',
        'description': 'JSON、XML、YAML、CSV等机器可读格式的输出'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': '枚举',
        'description': '响应限制在有限值集合内'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': '长度限制',
        'description': '最多N个单词、字符或令牌'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': '嵌套架构',
        'description': '复杂结构含嵌套类型（对象数组、可选对象）'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': '语义约束',
        'description': '内容遵守应用逻辑（有效参考、无自引用）'
      }
    ]
  }
},
  };
