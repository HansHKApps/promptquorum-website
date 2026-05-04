// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: rtf-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The RTF Framework: Role, Task, Format (2026)',
      intro: 'The RTF Framework is a lightweight three-component prompt structure: Role (who the model is), Task (what to do), and Format (how to output). It works across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models. Use it as your default for routine tasks—summaries, code reviews, emails, reports—and upgrade to CO-STAR or SPECS only when you need more structure.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 min read',
      seoTitle: 'RTF Framework: Role, Task, Format Prompt Structure (2026)',
      metaDescription: 'Learn the RTF prompt framework: Role (who), Task (what), Format (how). Three components for routine tasks. Comparison tables vs CO-STAR, SPECS, TRACE, CRAFT.',
      leadAnswerBlock: '**RTF = Role, Task, Format. Three components, zero overhead. Define who the model is, what it should do, and how the answer should look. Use it as your default for routine tasks — summaries, code reviews, emails, meeting notes. Switch to CO-STAR when tone/audience matter, SPECS when schema matters, TRACE when reasoning matters. RTF is the lightest framework that still enforces structure.**',
      quickFacts: [
        'RTF = Role + Task + Format — the lightest structured prompt framework (3 components vs 5-6 for CO-STAR/SPECS)',
        'Designed for routine, repeatable tasks: summaries, emails, code reviews, meeting notes',
        'Works across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models (Ollama, LM Studio)',
        'RTF is the recommended starting framework — upgrade to CO-STAR, SPECS, or TRACE only when you hit a limitation',
        'The Format field can carry constraints and examples, making RTF more flexible than its 3-component count suggests',
        'PromptQuorum includes RTF as a built-in framework with multi-model dispatch across 25+ models',
      ],
      toc: [
        { label: 'Key Takeaways', anchor: 'key-takeaways' },
        { label: 'What Is the RTF Framework?', anchor: 'what-is-rtf-framework' },
        { label: 'The Three RTF Components', anchor: 'three-components' },
        { label: 'Why RTF Is Useful', anchor: 'why-rtf-useful' },
        { label: 'Example: Bad vs Good RTF Prompt', anchor: 'bad-vs-good' },
        { label: 'When to Use RTF', anchor: 'when-to-use' },
        { label: 'When RTF Is Not the Right Choice', anchor: 'when-not-to-use' },
        { label: 'Comparison Tables', anchor: 'comparison-tables' },
        { label: 'How to Write an RTF Prompt', anchor: 'how-to-write' },
        { label: 'Five Real-World RTF Examples', anchor: 'five-examples' },
        { label: 'Combining RTF With Other Frameworks', anchor: 'combining-rtf' },
        { label: 'Common RTF Mistakes', anchor: 'common-mistakes' },
        { label: 'How PromptQuorum Implements RTF', anchor: 'promptquorum-implementation' },
        { label: 'Frequently Asked Questions', anchor: 'faq' },
        { label: 'Sources', anchor: 'sources' },
      ],
      educationalLevel: 'Intermediate',
      audience: 'Developers building LLM applications, product managers designing AI workflows, teams building AI-powered tools',
      primaryTerm: 'RTF Framework',
      aboutTopics: ['RTF Prompting', 'Prompt Frameworks', 'Prompt Engineering'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The RTF Framework: Role, Task, Format (2026)',
        description: 'How the RTF Framework (Role, Task, Format) works, when to use it, and how PromptQuorum offers RTF as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework?lang=en',
        inLanguage: 'en',
        keywords: ['RTF Framework', 'Role Task Format', 'prompt frameworks', 'prompt engineering', 'PromptQuorum', 'LLM prompting'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTF Framework' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the RTF Framework?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF = Role, Task, Format. A three-component prompt structure: Role defines who the model is (e.g., "senior data analyst"), Task states what to do, and Format specifies how the output should be structured. It works across all major models.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I use RTF instead of CO-STAR or SPECS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use RTF for routine, repeatable tasks (summaries, code reviews, emails, reports). Upgrade to CO-STAR when tone/audience are critical, SPECS when you need strict schemas and constraints, and TRACE when reasoning transparency matters.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is RTF the same as "just telling the model what to do"?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. RTF forces explicit specification of three things: who the model is (Role), what task it solves, and how the output must be structured (Format). This structure eliminates ambiguity and improves consistency across models and runs.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does RTF compare to Chain-of-Thought?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-Thought improves reasoning by asking models to "think step by step." RTF structures the output format and role. They are complementary—you can combine them: use RTF to define role and format, then add "think step by step" for complex reasoning tasks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use RTF with local models like Ollama?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. RTF works with any LLM, including local models run via Ollama or LM Studio. Simpler models (Mistral 7B, LLaMA 2) may be less consistent with complex Format fields, but RTF still improves output quality.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the most common RTF mistake?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Leaving Format implicit or vague. Without an explicit Format field (e.g., "3 bullet points, max 50 words each"), models default to prose paragraphs. Always specify Format.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does RTF help with consistency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'By specifying Role, Task, and Format explicitly, you reduce the model\'s ambiguity about what you want. This makes output more consistent across models, runs, and team members reusing the prompt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I save RTF prompts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. A well-written RTF prompt for a recurring task (weekly summary, code review, email draft) should be saved as a template and reused. This is RTF\'s biggest advantage over writing prompts from scratch each time.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can RTF enforce strict constraints like JSON output?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Partially. RTF can request "JSON format" in the Format field, and modern models (GPT-5.5, Claude) usually comply. For 100% strict schema enforcement, use SPECS (which includes explicit constraints) or structured output APIs.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does PromptQuorum use RTF?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PromptQuorum includes RTF as a built-in framework template. Users fill in Role, Task, and Format fields, and PromptQuorum dispatches the same prompt across 25+ models (GPT-5.5, Claude, Gemini, local models) for comparison and A/B testing.',
            },
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'RTF = Role (who the model is), Task (what to do), Format (how to output). Three simple components.',
            'Use RTF as your default for routine tasks: summaries, code reviews, emails, reports, meeting notes.',
            'The Format field is where RTF adds the most value—explicit structure produces dramatically more consistent output.',
            'RTF handles 80% of everyday LLM tasks. Upgrade to CO-STAR (tone/audience), SPECS (constraints), or TRACE (reasoning) only when RTF hits a limit.',
            'Well-written RTF prompts are reusable templates. Save them and reuse 52 times a year instead of rewriting each week.',
            'Works across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models (Ollama, LM Studio).',
            'Use PromptQuorum to test the same RTF prompt across multiple models side by side.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'What Is the RTF Framework?',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF is a three-part prompt skeleton — Role, Task, Format — that gives the model just enough structure for routine tasks without the overhead of larger frameworks.' },
            { type: 'in-plain-terms', text: 'Tell the AI who to be (Role), what to do (Task), and how to format the answer (Format). That\'s it. Three things. Works for 80% of everyday tasks. When it stops being enough, you graduate to CO-STAR or SPECS.' },
          ],
          content: [
            '**The RTF Framework is a three-part prompt pattern that tells the model who it is, what to do, and exactly how the answer should look.** Instead of sending a loose question, you specify Role, Task, and Format explicitly. This works across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models you run via Ollama or LM Studio.',
            'RTF is intentionally minimal. With only three fields, it is easy to remember, fast to fill in, and flexible enough for many day-to-day tasks. You can treat it as a "default prompt skeleton" whenever you are not sure which specialized framework to use.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'The Three RTF Components',
          content: [
            '**A strong RTF prompt clearly defines each of the three components so the model has no ambiguity about its job.** You can write them as labeled lines or as one sentence that still contains all three parts.',
            'Typical definitions:',
          ],
          items: [
            'Role: The perspective or expertise the model should adopt (for example "You are a senior data analyst").',
            'Task: The concrete action you want, described in one or two sentences.',
            'Format: The structure, length, and style of the output (for example "3 bullet points plus a 2-sentence summary").',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Format Is the Power Move',
              text: 'Role and Task are obvious — most people already say what they want. Format is where RTF adds real value. "3 bullet points, max 50 words each, markdown" produces dramatically more consistent output than "give me a summary." The Format field is RTF\'s secret weapon.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'Why RTF Is Useful',
          content: [
            '**The RTF Framework is useful because it gives you most of the benefits of more complex frameworks with almost no overhead.** It forces you to make three decisions—who, what, and how—before sending a prompt.',
            'Practical advantages include:',
          ],
          items: [
            'Faster prompt writing than multi-section frameworks for routine work.',
            'Better consistency across models and runs, since the format is always explicit.',
            'Easy onboarding for teammates who can learn RTF in a few minutes and reuse it everywhere.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: 'Example: Bad vs Good RTF Prompt',
          promptExamples: [
            {
              bad: 'Summarize this meeting.',
              good: 'Role: You are an operations manager summarizing a project status meeting for senior leadership. Task: Read the transcript and identify the key decisions, open risks, and next steps discussed in the meeting. Format: Output a Markdown summary with three sections (`Decisions`, `Risks`, `Next steps`). Under each section, use 3–5 bullet points. Keep the total summary under 250 words.',
              badLabel: 'Unstructured request',
              goodLabel: 'RTF prompt',
            },
          ],
          content: [
            'The RTF version tells the model exactly how to think about the content and how to package the result so others can use it immediately.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'When to Use RTF',
          content: [
            '**You should use the RTF Framework when you want a simple, reusable pattern that still enforces clarity and structure.** It is a strong default whenever you do not need long specifications or multi-step reasoning traces.',
            'Typical use cases include:',
          ],
          items: [
            'Short reports, recaps, and summaries for emails or chat.',
            'Drafting responses to customers or internal stakeholders with clear structure.',
            'Generating small code snippets or refactors with a specified output format.',
            'Quick content pieces like product blurbs, FAQ entries, or simple checklists.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'When RTF Is Not the Right Choice',
          tableFormat: true,
          columns: ['Scenario', 'RTF Limitation', 'Use Instead'],
          rows: [
            { 'Scenario': 'Customer-facing content where tone and audience are critical', 'RTF Limitation': 'No explicit Audience or Tone field', 'Use Instead': 'CO-STAR (includes Style, Audience, Tone) or CRAFT (Constraints, Role, Audience, Format, Tone)' },
            { 'Scenario': 'Strict data structure or schema enforcement needed', 'RTF Limitation': 'Format field can request JSON but offers no constraint syntax', 'Use Instead': 'SPECS (includes explicit Constraints field)' },
            { 'Scenario': 'Multi-step reasoning or decision logic needed', 'RTF Limitation': 'No explicit step-by-step reasoning field', 'Use Instead': 'TRACE (includes Trigger, Response, Action, Consequence, Evaluation)' },
            { 'Scenario': 'Complex workflows with conditional logic', 'RTF Limitation': 'Single Role/Task/Format per prompt', 'Use Instead': 'APE (Action, Process, Examples) or custom multi-turn workflows' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: 'Comparison Tables',
          content: [
            '**How RTF stacks up against other major frameworks:**',
          ],
        },
        dimensionComparison: {
          title: 'Dimension-Based Comparison',
          tableFormat: true,
          columns: ['Dimension', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { 'Dimension': 'Number of fields', 'RTF': '3 (Role, Task, Format)', 'CO-STAR': '6 (Context, Objective, Style, Audience, Response, Tone)', 'SPECS': '5 (Settings, Person, Examples, Pattern, Constraints)', 'TRACE': '5 (Trigger, Response, Action, Consequence, Evaluation)' },
            { 'Dimension': 'Setup time', 'RTF': '30 seconds', 'CO-STAR': '2–3 minutes', 'SPECS': '3–5 minutes', 'TRACE': '2–3 minutes' },
            { 'Dimension': 'Best for', 'RTF': 'Routine, repeatable tasks', 'CO-STAR': 'Tone and audience control', 'SPECS': 'Strict schemas and constraints', 'TRACE': 'Explicit reasoning steps' },
            { 'Dimension': 'Output consistency', 'RTF': 'Good', 'CO-STAR': 'Excellent', 'SPECS': 'Excellent', 'TRACE': 'Good' },
            { 'Dimension': 'Requires examples?', 'RTF': 'No', 'CO-STAR': 'Optional', 'SPECS': 'Yes (strong patterns)', 'TRACE': 'No' },
          ],
        },
        pairwiseComparison: {
          title: 'Pairwise Comparison (RTF vs Others)',
          tableFormat: true,
          columns: ['Comparison', 'Winner', 'Why'],
          rows: [
            { 'Comparison': 'RTF vs CO-STAR', 'Winner': 'CO-STAR (if audience matters)', 'Why': 'CO-STAR includes explicit Audience and Tone fields. RTF forces tone into Role or Format, which gets messy. If you don\'t care about voice, RTF is faster.' },
            { 'Comparison': 'RTF vs SPECS', 'Winner': 'SPECS (if strict constraints needed)', 'Why': 'SPECS includes a dedicated Constraints field and expects examples. RTF can request constraints in Format but lacks structured syntax. SPECS wins for JSON, CSV, or structured data.' },
            { 'Comparison': 'RTF vs TRACE', 'Winner': 'TRACE (if reasoning matters)', 'Why': 'TRACE explicitly models cause-and-effect (Trigger → Response → Action → Consequence). RTF has no reasoning step field. Use TRACE for complex logic, RTF for simple output.' },
            { 'Comparison': 'RTF vs Chain-of-Thought', 'Winner': 'Complementary', 'Why': 'RTF defines role and output format. CoT improves reasoning. Combine them: use RTF to structure the prompt, add "think step by step" for complex math or logic.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'How to Write an RTF Prompt',
          numberedItems: [
            '**Role: Define who the AI is playing.** Specific roles beat generic ones. Bad: "You are helpful." Good: "You are a senior backend engineer reviewing code for performance regressions." The more specific, the more consistent the output.',
            '**Task: State what the AI should do.** Be concrete. Bad: "Summarize this." Good: "Identify the three key decisions, open risks, and next steps discussed."',
            '**Format: Specify structure, length, and style.** This is where RTF adds value. Bad: (missing Format). Good: "3 bullet points, max 50 words each, markdown, under 200 total words."',
            '**Separate Task and Format.** Merge them into one blob and neither gets enough specificity. Keep them distinct.',
            '**Always include Format, even when it seems obvious.** Without it, models default to prose paragraphs.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: 'Five Real-World RTF Examples',
          content: ['Here are five production-ready RTF prompts for common workflows:'],
        },
        example1: {
          title: 'Example 1: Weekly Status Summary',
          content: [
            '**Role:** You are an operations manager writing a weekly status summary for executive leadership.',
            '**Task:** Summarize this week\'s project progress, key decisions made, risks identified, and next week\'s priorities.',
            '**Format:** Markdown, four sections (Summary, Decisions, Risks, Next Week), 3–5 bullets per section, 300 words max.',
          ],
        },
        example2: {
          title: 'Example 2: Code Review Feedback',
          content: [
            '**Role:** You are a senior backend engineer reviewing code for maintainability, performance, and security.',
            '**Task:** Review this code block and identify any issues, suggest improvements, and rate the overall quality.',
            '**Format:** Markdown, three sections (Issues Found, Improvements, Quality Rating 1-5), code blocks for examples.',
          ],
        },
        example3: {
          title: 'Example 3: Customer Email Draft',
          content: [
            '**Role:** You are a customer success manager drafting a professional, empathetic response to a customer complaint.',
            '**Task:** Address their concern, apologize where appropriate, explain the resolution, and restore confidence.',
            '**Format:** Email format (greeting, 2–3 paragraphs, closing), professional tone, 150–250 words.',
          ],
        },
        example4: {
          title: 'Example 4: Meeting Notes to Action Items',
          content: [
            '**Role:** You are a project coordinator extracting action items from raw meeting notes.',
            '**Task:** Identify decisions made, risks discussed, and next steps with owners and deadlines.',
            '**Format:** Markdown with three sections (Decisions, Risks, Action Items), action items as checkbox lists with assignee and due date.',
          ],
        },
        example5: {
          title: 'Example 5: Product Documentation for Non-Technical Users',
          content: [
            '**Role:** You are a technical writer explaining a feature to non-technical users in simple language.',
            '**Task:** Explain what this feature does, why they might use it, and how to use it in three simple steps.',
            '**Format:** 1 sentence intro, 3 numbered steps with examples, 1 sentence conclusion. Avoid jargon.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'Combining RTF With Other Frameworks',
          content: [
            '**You should combine the RTF Framework with other frameworks by treating RTF as your lightweight default and switching to heavier frameworks when constraints increase.** A practical pattern is:',
          ],
          items: [
            'Start with RTF for most new tasks where you just need clear structure quickly.',
            'Move to SPECS when you need strict schemas, examples, and constraints.',
            'Use TRACE or APE when you want explicit reasoning steps before the final answer.',
            'Use creative frameworks like CRAFT when audience and tone are central.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common RTF Mistakes',
          mistakes: [
            {
              mistake: 'Vague Role — "You are a helpful assistant"',
              problem: '"Helpful assistant" is the default. It adds nothing. A vague role means the model picks its own perspective, which varies between runs.',
              fix: 'Be specific: "You are a senior backend engineer" or "You are a B2B marketing manager targeting CFOs." The more specific the role, the more consistent the output.',
            },
            {
              mistake: 'Task and Format merged into one blob',
              problem: '"Summarize this meeting in bullets" conflates task and format. When they\'re merged, neither gets enough specificity.',
              fix: 'Separate them: Task = "Identify decisions, risks, and next steps." Format = "Markdown, 3 sections, 3–5 bullets each, under 250 words."',
            },
            {
              mistake: 'Missing Format entirely',
              problem: 'Without an explicit Format, the model defaults to prose paragraphs — which may not be what you need. This is the #1 cause of "the AI gave me a wall of text."',
              fix: 'Always specify Format. Even "Format: 3 bullet points" is better than nothing.',
            },
            {
              mistake: 'Using RTF for tasks that need audience/tone control',
              problem: 'RTF has no Audience or Tone field. If you\'re writing customer-facing content where voice matters, RTF forces you to cram tone into the Role or Format field, which gets messy.',
              fix: 'Switch to CRAFT (which has explicit Audience and Tone fields) or CO-STAR (which separates Style and Audience) when voice matters.',
            },
            {
              mistake: 'Never saving RTF prompts as templates',
              problem: 'Writing the same "meeting summary" RTF prompt from scratch every week wastes time and introduces inconsistency.',
              fix: 'Save working RTF prompts as named templates in PromptQuorum. Reuse them by swapping input data only.',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'How PromptQuorum Implements the RTF Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the RTF Framework as one of its built-in prompt structures so users can apply Role–Task–Format prompting in a consistent way.** When you choose the RTF option inside PromptQuorum, the interface exposes fields for Role, Task, and Format and assembles them into a single well-formed instruction.',
            'In PromptQuorum, the RTF Framework lets you:',
          ],
          items: [
            'Fill in Role, Task, and Format once and send the same structured prompt to 25+ models such as GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models configured through Ollama or LM Studio.',
            'Save RTF prompts as templates for recurring workflows—for example "weekly status summary," "customer reply draft," or "bug report recap."',
            'Share RTF templates across your team so that even non-experts can create prompts that produce consistent, structured outputs.',
            'A/B test the same RTF prompt across multiple models side by side to find the best one for your use case.',
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/prompt-engineering/chain-of-thought-prompting?lang=en' },
            { title: 'What Is Prompt Engineering?', url: '/prompt-engineering/what-is-prompt-engineering?lang=en' },
            { title: 'Zero-Shot vs Few-Shot Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot?lang=en' },
            { title: 'Constrained Prompting', url: '/prompt-engineering/constrained-prompting?lang=en' },
            { title: 'How to Pick the Right Model: GPT-5.5 vs Claude vs Gemini', url: '/prompt-engineering/gpt-claude-gemini-which-model?lang=en' },
            { title: 'CO-STAR Framework', url: '/prompt-engineering/co-star-framework?lang=en' },
          ],
        },
        sources: {
          items: [
            'Schulhoff, L., et al. (2024). Prompt Engineering Guide. [https://www.promptingguide.ai](https://www.promptingguide.ai)',
            'Brown, T. B., et al. (2020). "Language Models are Few-Shot Learners." OpenAI. arXiv:2005.14165',
            'OpenAI. (2026). Prompt Engineering Best Practices. [https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2026). Prompt Engineering — Claude API Documentation. [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Das RTF-Framework: Role, Task, Format (2026)',
      intro: 'Das RTF-Framework ist eine schlanke dreiteilige Prompt-Struktur: Role (wer das Modell ist), Task (was zu tun ist) und Format (wie die Ausgabe aussieht). Es funktioniert über GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle. Verwenden Sie es als Standard für Routineaufgaben — Zusammenfassungen, Code-Reviews, E-Mails, Berichte — und aktualisieren Sie zu CO-STAR oder SPECS nur, wenn Sie mehr Struktur benötigen.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 Min. Lesezeit',
      seoTitle: 'RTF-Framework: Role, Task, Format — Prompt-Struktur (2026)',
      metaDescription: 'Das RTF-Framework (Rolle, Aufgabe, Format) erklärt: Wie es funktioniert, wann Sie es verwenden sollten und wie PromptQuorum RTF als integrierte Option bietet.',
      educationalLevel: 'Intermediate',
      audience: 'Entwickler, die LLM-Anwendungen bauen, Produktmanager, die KI-Workflows gestalten, Teams, die KI-gestützte Tools entwickeln',
      primaryTerm: 'RTF-Framework',
      aboutTopics: ['RTF-Prompting', 'Prompt-Frameworks', 'Prompt Engineering'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Das RTF-Framework: Role, Task, Format (2026)',
        description: 'Das RTF-Framework (Rolle, Aufgabe, Format) erklärt: Wie es funktioniert, wann Sie es verwenden sollten und wie PromptQuorum RTF als integrierte Option bietet.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework?lang=de',
        inLanguage: 'de',
        keywords: ['RTF-Framework', 'Rolle Aufgabe Format', 'Prompt-Frameworks', 'Prompt Engineering', 'PromptQuorum', 'LLM-Prompting'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTF-Framework' },
          { '@type': 'Thing', name: 'Prompt-Frameworks' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist das RTF-Framework?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF = Role, Task, Format. Eine dreiteilige Prompt-Struktur: Role definiert, wer das Modell ist (z. B. „leitender Datenanalyst"), Task gibt an, was zu tun ist, und Format legt fest, wie die Ausgabe strukturiert sein soll. Es funktioniert über alle großen Modelle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wann sollte ich RTF statt CO-STAR oder SPECS verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Verwenden Sie RTF für Routine- und wiederholbare Aufgaben (Zusammenfassungen, Code-Reviews, E-Mails, Berichte). Wechseln Sie zu CO-STAR, wenn Ton und Zielgruppe kritisch sind, zu SPECS, wenn Sie strenge Schemas und Constraints benötigen, und zu TRACE, wenn Transparenz bei der Begründung wichtig ist.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist RTF dasselbe wie „dem Modell einfach zu sagen, was es tun soll"?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. RTF erzwingt die explizite Spezifikation von drei Dingen: wer das Modell ist (Role), welche Aufgabe es löst und wie die Ausgabe strukturiert sein muss (Format). Diese Struktur beseitigt Mehrdeutigkeiten und verbessert die Konsistenz über Modelle und Durchläufe hinweg.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie vergleicht sich RTF mit Chain-of-Thought?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-Thought verbessert die Begründung, indem es Modelle auffordert, „Schritt für Schritt zu denken". RTF strukturiert das Output-Format und die Rolle. Sie sind komplementär — Sie können sie kombinieren: Verwenden Sie RTF, um Rolle und Format zu definieren, und fügen Sie dann „Schritt für Schritt denken" für komplexe Reasoning-Aufgaben hinzu.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich RTF mit lokalen Modellen wie Ollama verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. RTF funktioniert mit jedem LLM, einschließlich lokaler Modelle, die über Ollama oder LM Studio ausgeführt werden. Einfachere Modelle (Mistral 7B, LLaMA 2) können bei komplexen Format-Feldern weniger konsistent sein, aber RTF verbessert dennoch die Output-Qualität.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist der häufigste RTF-Fehler?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Format implicit oder vage zu lassen. Ohne ein explizites Format-Feld (z. B. „3 Aufzählungspunkte, maximal 50 Wörter pro Punkt") wählen Modelle standardmäßig Prosa-Absätze. Geben Sie immer Format an.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie hilft RTF bei der Konsistenz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Durch die explizite Spezifikation von Role, Task und Format reduzieren Sie die Mehrdeutigkeit des Modells über das, was Sie möchten. Dies macht die Ausgabe konsistenter über Modelle, Durchläufe und Teamkollegen, die den Prompt wiederverwenden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Sollte ich RTF-Prompts speichern?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Ein gut geschriebener RTF-Prompt für eine wiederkehrende Aufgabe (wöchentliche Zusammenfassung, Code-Review, E-Mail-Entwurf) sollte als Vorlage gespeichert und wiederverwendet werden. Das ist RTFs größter Vorteil gegenüber dem Schreiben von Prompts von Grund auf.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann RTF strikte Constraints wie JSON-Ausgabe erzwingen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Teilweise. RTF kann im Format-Feld „JSON-Format" anfordern, und moderne Modelle (GPT-5.5, Claude) halten sich normalerweise daran. Für 100%ige strikte Schema-Erzwingung verwenden Sie SPECS (mit expliziten Constraints) oder strukturierte Output-APIs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie verwendet PromptQuorum RTF?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PromptQuorum enthält RTF als integrierte Framework-Vorlage. Benutzer füllen die Felder Role, Task und Format aus, und PromptQuorum sendet denselben Prompt über 25+ Modelle (GPT-5.5, Claude, Gemini, lokale Modelle) für Vergleich und A/B-Tests.',
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von RTF die DSGVO beachten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. RTF-Prompts, die sensible Daten enthalten, müssen DSGVO-konform sein. Verwenden Sie RTF mit Datenschutzvorkehrungen: Vermeiden Sie die Speicherung persönlicher Daten in Prompt-Templates, nutzen Sie lokale Modelle für sensitive Daten und dokumentieren Sie die Verarbeitung nach DSGVO Artikel 28 und BSI-Grundschutz-Katalogen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist RTF für den deutschen Mittelstand geeignet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolut. RTF ist ideal für Mittelstands-Unternehmen: Es erzwingt strukturierte, präzise Kommunikation (die deutsche Unternehmen schätzen), funktioniert mit lokalen Modellen für Datenschutz, und ist einfach genug, damit Mitarbeiter es ohne umfangreiches Training nutzen können. DSGVO- und BSI-Grundschutz-konforme Nutzung ist durch die Struktur von RTF natürlich unterstützt.',
            },
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Zusammenfassung',
          isTldr: true,
          items: [
            'RTF = Role (wer das Modell ist), Task (was zu tun ist), Format (wie die Ausgabe aussieht). Drei einfache Komponenten.',
            'Verwenden Sie RTF als Standard für Routine-Aufgaben: Zusammenfassungen, Code-Reviews, E-Mails, Berichte, Meeting-Notizen.',
            'Das Format-Feld ist das Kraftpaket von RTF — explizite Struktur erzeugt dramatisch konsistentere Ausgaben.',
            'RTF bewältigt 80% der alltäglichen LLM-Aufgaben. Aktualisieren Sie zu CO-STAR (Ton/Zielgruppe), SPECS (Constraints) oder TRACE (Begründung) nur wenn RTF an Grenzen stößt.',
            'Gut geschriebene RTF-Prompts sind wiederverwendbare Vorlagen. Speichern Sie sie und verwenden Sie sie 52 Mal pro Jahr, statt sie jede Woche neu zu schreiben.',
            'Funktioniert über GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle (Ollama, LM Studio).',
            'Verwenden Sie PromptQuorum, um denselben RTF-Prompt über mehrere Modelle nebeneinander zu testen.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'Was ist das RTF-Framework?',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF ist ein dreiteiliges Prompt-Gerüst — Role, Task, Format — das dem Modell gerade genug Struktur gibt, um Routine-Aufgaben ohne den Aufwand größerer Frameworks zu bewältigen.' },
            { type: 'in-plain-terms', text: 'Sagen Sie der KI, wer sie sein soll (Role), was sie tun soll (Task) und wie sie die Antwort formatieren soll (Format). Das war\'s. Drei Dinge. Funktioniert für 80% der alltäglichen Aufgaben. Wenn das nicht mehr ausreicht, wechseln Sie zu CO-STAR oder SPECS.' },
          ],
          content: [
            '**Das RTF-Framework ist ein dreiteiliges Prompt-Muster, das dem Modell sagt, wer es ist, was es tun soll und wie die Antwort genau aussehen soll.** Statt eine lose Frage zu stellen, geben Sie Role, Task und Format explizit an. Dies funktioniert über GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle, die Sie über Ollama oder LM Studio ausführen.',
            'Das RTF-Framework ist absichtlich minimal. Mit nur drei Feldern ist es leicht zu merken, schnell auszufüllen und flexibel genug für viele alltägliche Aufgaben. Sie können es als „Standard-Prompt-Gerüst" verwenden, wenn Sie nicht sicher sind, welches spezialisierte Framework Sie verwenden sollten.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'Die drei RTF-Komponenten',
          content: [
            '**Ein starker RTF-Prompt definiert alle drei Komponenten eindeutig, damit das Modell keine Unklarheit über seine Aufgabe hat.** Sie können sie als beschriftete Zeilen oder als einen Satz schreiben, der alle drei Teile enthält.',
            'Typische Definitionen:',
          ],
          items: [
            'Role: Die Perspektive oder das Fachwissen, das das Modell annehmen soll (zum Beispiel „Sie sind ein leitender Datenanalyst").',
            'Task: Die konkrete Aktion, die Sie möchten, beschrieben in ein oder zwei Sätzen.',
            'Format: Die Struktur, Länge und den Stil der Ausgabe (zum Beispiel „3 Aufzählungspunkte plus eine 2-Satz-Zusammenfassung").',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Format ist der Gamechanger',
              text: 'Role und Task sind offensichtlich — die meisten Leute sagen bereits, was sie möchten. Format ist dort, wo RTF echten Wert hinzufügt. „3 Aufzählungspunkte, maximal 50 Wörter pro Punkt, Markdown" erzeugt dramatisch konsistentere Ausgaben als „geben Sie mir eine Zusammenfassung". Das Format-Feld ist RTFs Geheimwaffe.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'Warum RTF nützlich ist',
          content: [
            '**Das RTF-Framework ist nützlich, weil es Ihnen die meisten Vorteile komplexerer Frameworks mit fast keinem Aufwand gibt.** Es erzwingt, dass Sie drei Entscheidungen treffen — wer, was und wie — bevor Sie den Prompt senden.',
            'Praktische Vorteile sind:',
          ],
          items: [
            'Schnellere Prompt-Erstellung als Multi-Section-Frameworks für Routine-Arbeit.',
            'Bessere Konsistenz über Modelle und Durchläufe hinweg, da das Format immer explizit ist.',
            'Einfaches Onboarding für Teamkollegen, die RTF in wenigen Minuten lernen und überall wiederverwenden können.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: 'Beispiel: Schlechter vs. guter RTF-Prompt',
          promptExamples: [
            {
              bad: 'Fassen Sie dieses Meeting zusammen.',
              good: 'Role: Sie sind ein Operations Manager, der ein Project-Status-Meeting für die Geschäftsführung zusammenfasst. Task: Lesen Sie das Protokoll und identifizieren Sie die im Meeting besprochenen Schlüsselbeschlüsse, offenen Risiken und nächsten Schritte. Format: Geben Sie eine Markdown-Zusammenfassung mit drei Abschnitten aus (`Beschlüsse`, `Risiken`, `Nächste Schritte`). Verwenden Sie unter jedem Abschnitt 3–5 Aufzählungspunkte. Halten Sie die Gesamtzusammenfassung unter 250 Wörtern.',
              badLabel: 'Unstrukturierte Anfrage',
              goodLabel: 'RTF-Prompt',
            },
          ],
          content: [
            'Die RTF-Version teilt dem Modell genau mit, wie es über den Inhalt nachdenken soll und wie es das Ergebnis so verpackt, dass andere es sofort nutzen können.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'Wann RTF verwenden',
          content: [
            '**Sie sollten das RTF-Framework verwenden, wenn Sie ein einfaches, wiederverwendbares Muster möchten, das trotzdem Klarheit und Struktur erzwingt.** Es ist eine starke Standardwahl, wenn Sie keine langen Spezifikationen oder mehrstufige Reasoning-Traces benötigen.',
            'Typische Anwendungsfälle sind:',
          ],
          items: [
            'Kurze Berichte, Zusammenfassungen und Überblicke für E-Mails oder Chat.',
            'Entwurf von Antworten an Kunden oder interne Interessengruppen mit klarer Struktur.',
            'Generierung von kleinen Code-Snippets oder Umgestaltungen mit einem angegebenen Output-Format.',
            'Schnelle Inhalte wie Produkt-Blurbs, FAQ-Einträge oder einfache Checklisten.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'Wann RTF nicht die richtige Wahl ist',
          tableFormat: true,
          columns: ['Szenario', 'RTF-Limitation', 'Verwenden Sie stattdessen'],
          rows: [
            { 'Szenario': 'Kundenorientierte Inhalte, bei denen Ton und Zielgruppe entscheidend sind', 'RTF-Limitation': 'Kein explizites Audience- oder Tone-Feld', 'Verwenden Sie stattdessen': 'CO-STAR (mit Style, Audience, Tone) oder CRAFT (Constraints, Role, Audience, Format, Tone)' },
            { 'Szenario': 'Strikte Datenstruktur oder Schema-Erzwingung erforderlich', 'RTF-Limitation': 'Format-Feld kann JSON anfordern, bietet aber keine Constraint-Syntax', 'Verwenden Sie stattdessen': 'SPECS (mit explizitem Constraints-Feld)' },
            { 'Szenario': 'Mehrstufige Begründung oder Entscheidungslogik erforderlich', 'RTF-Limitation': 'Kein explizites Schrittweise-Reasoning-Feld', 'Verwenden Sie stattdessen': 'TRACE (mit Trigger, Response, Action, Consequence, Evaluation)' },
            { 'Szenario': 'Komplexe Workflows mit bedingter Logik', 'RTF-Limitation': 'Einzelne Role/Task/Format pro Prompt', 'Verwenden Sie stattdessen': 'APE (Action, Process, Examples) oder benutzerdefinierte Multi-Turn-Workflows' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: 'Vergleichstabellen',
          content: [
            '**Wie RTF sich gegen andere Haupt-Frameworks behauptet:**',
          ],
        },
        dimensionComparison: {
          title: 'Dimensionsvergleich',
          tableFormat: true,
          columns: ['Dimension', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { 'Dimension': 'Anzahl der Felder', 'RTF': '3 (Role, Task, Format)', 'CO-STAR': '6 (Context, Objective, Style, Audience, Response, Tone)', 'SPECS': '5 (Settings, Person, Examples, Pattern, Constraints)', 'TRACE': '5 (Trigger, Response, Action, Consequence, Evaluation)' },
            { 'Dimension': 'Einrichtungszeit', 'RTF': '30 Sekunden', 'CO-STAR': '2–3 Minuten', 'SPECS': '3–5 Minuten', 'TRACE': '2–3 Minuten' },
            { 'Dimension': 'Am besten geeignet für', 'RTF': 'Routine-, wiederholbare Aufgaben', 'CO-STAR': 'Ton- und Zielgruppenkontrolle', 'SPECS': 'Strikte Schemas und Constraints', 'TRACE': 'Explizite Reasoning-Schritte' },
            { 'Dimension': 'Output-Konsistenz', 'RTF': 'Gut', 'CO-STAR': 'Ausgezeichnet', 'SPECS': 'Ausgezeichnet', 'TRACE': 'Gut' },
            { 'Dimension': 'Benötigt Beispiele?', 'RTF': 'Nein', 'CO-STAR': 'Optional', 'SPECS': 'Ja (starke Muster)', 'TRACE': 'Nein' },
          ],
        },
        pairwiseComparison: {
          title: 'Paarweiser Vergleich (RTF vs. andere)',
          tableFormat: true,
          columns: ['Vergleich', 'Gewinner', 'Warum'],
          rows: [
            { 'Vergleich': 'RTF vs. CO-STAR', 'Gewinner': 'CO-STAR (wenn Zielgruppe wichtig ist)', 'Warum': 'CO-STAR hat explizite Audience- und Tone-Felder. RTF zwingt Ton in Role oder Format, was umständlich wird. Wenn Ihnen die Stimme nicht wichtig ist, ist RTF schneller.' },
            { 'Vergleich': 'RTF vs. SPECS', 'Gewinner': 'SPECS (wenn strikte Constraints nötig sind)', 'Warum': 'SPECS hat ein dediziertes Constraints-Feld und erwartet Beispiele. RTF kann Constraints im Format anfordern, aber keine strukturierte Syntax. SPECS gewinnt bei JSON, CSV oder strukturierten Daten.' },
            { 'Vergleich': 'RTF vs. TRACE', 'Gewinner': 'TRACE (wenn Begründung wichtig ist)', 'Warum': 'TRACE modelliert Ursache und Wirkung explizit (Trigger → Response → Action → Consequence). RTF hat kein Reasoning-Schritte-Feld. Verwenden Sie TRACE für komplexe Logik, RTF für einfache Ausgaben.' },
            { 'Vergleich': 'RTF vs. Chain-of-Thought', 'Gewinner': 'Komplementär', 'Warum': 'RTF definiert Role und Output-Format. CoT verbessert Begründung. Kombinieren Sie sie: Verwenden Sie RTF, um den Prompt zu strukturieren, und fügen Sie „Schritt für Schritt denken" für komplexe Mathematik oder Logik hinzu.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'So schreiben Sie einen RTF-Prompt',
          numberedItems: [
            '**Role: Definieren Sie, wen der KI-Agent spielt.** Spezifische Rollen schlagen generische. Schlecht: „Sie sind hilfreich." Gut: „Sie sind ein leitender Backend-Ingenieur, der Code auf Performance-Regressionsprobleme überprüft." Je spezifischer die Role, desto konsistenter die Ausgabe.',
            '**Task: Geben Sie an, was der KI-Agent tun soll.** Seien Sie konkret. Schlecht: „Fassen Sie das zusammen." Gut: „Identifizieren Sie die drei Schlüsselbeschlüsse, offenen Risiken und nächsten Schritte, die besprochen wurden."',
            '**Format: Geben Sie Struktur, Länge und Stil an.** Das ist, wo RTF Wert hinzufügt. Schlecht: (kein Format). Gut: „3 Aufzählungspunkte, maximal 50 Wörter pro Punkt, Markdown, unter 200 Wörtern insgesamt."',
            '**Trennen Sie Task und Format.** Wenn Sie sie zu einem Brei zusammenmischen, bekommt keiner genug Spezifität. Halten Sie sie getrennt.',
            '**Geben Sie immer Format an, auch wenn es offensichtlich scheint.** Ohne explizites Format-Feld wählen Modelle standardmäßig Prosa-Absätze.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: 'Fünf reale RTF-Beispiele',
          content: ['Hier sind fünf produktionsreife RTF-Prompts für häufige Workflows:'],
        },
        example1: {
          title: 'Beispiel 1: Wöchentliche Status-Zusammenfassung',
          content: [
            '**Role:** Sie sind ein Operations Manager, der eine wöchentliche Status-Zusammenfassung für die Geschäftsführung schreibt.',
            '**Task:** Fassen Sie den Projektfortschritt dieser Woche, getroffene Schlüsselbeschlüsse, identifizierte Risiken und Prioritäten der nächsten Woche zusammen.',
            '**Format:** Markdown, vier Abschnitte (Zusammenfassung, Beschlüsse, Risiken, Nächste Woche), 3–5 Aufzählungspunkte pro Abschnitt, 300 Wörter maximal.',
          ],
        },
        example2: {
          title: 'Beispiel 2: Code-Review-Feedback',
          content: [
            '**Role:** Sie sind ein leitender Backend-Ingenieur, der Code auf Wartbarkeit, Performance und Sicherheit überprüft.',
            '**Task:** Überprüfen Sie diesen Code-Block, identifizieren Sie Probleme, schlagen Sie Verbesserungen vor und bewerten Sie die Gesamtqualität.',
            '**Format:** Markdown, drei Abschnitte (Gefundene Probleme, Verbesserungen, Qualitätsbewertung 1–5), Code-Blöcke für Beispiele.',
          ],
        },
        example3: {
          title: 'Beispiel 3: Kunden-E-Mail-Entwurf',
          content: [
            '**Role:** Sie sind ein Customer Success Manager, der einen professionellen, empathischen Antwort-Entwurf auf eine Kundenbeschwerode schreibt.',
            '**Task:** Adressieren Sie das Anliegen, entschuldigen Sie sich, wo angebracht, erklären Sie die Lösung und stellen Sie das Vertrauen wieder her.',
            '**Format:** E-Mail-Format (Gruß, 2–3 Absätze, Schluss), professioneller Ton, 150–250 Wörter.',
          ],
        },
        example4: {
          title: 'Beispiel 4: Meeting-Notizen zu Action Items',
          content: [
            '**Role:** Sie sind ein Projektkoordinator, der Action Items aus rohen Meeting-Notizen extrahiert.',
            '**Task:** Identifizieren Sie getroffene Beschlüsse, besprochene Risiken und nächste Schritte mit Besitzern und Fristen.',
            '**Format:** Markdown mit drei Abschnitten (Beschlüsse, Risiken, Action Items), Action Items als Kontrollkästchen-Listen mit Assignee und Fälligkeitsdatum.',
          ],
        },
        example5: {
          title: 'Beispiel 5: Produktdokumentation für nicht-technische Benutzer',
          content: [
            '**Role:** Sie sind ein Technical Writer, der ein Feature nicht-technischen Benutzern in einfacher Sprache erklärt.',
            '**Task:** Erklären Sie, was diese Feature tut, warum Benutzer sie möglicherweise nutzen möchten, und wie sie in drei einfachen Schritten verwendet wird.',
            '**Format:** 1 Satz Intro, 3 nummerierte Schritte mit Beispielen, 1 Satz Schluss. Vermeiden Sie Jargon.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'RTF mit anderen Frameworks kombinieren',
          content: [
            '**Sie sollten das RTF-Framework mit anderen Frameworks kombinieren, indem Sie RTF als leichte Standardwahl behandeln und zu schwereren Frameworks wechseln, wenn die Anforderungen zunehmen.** Ein praktisches Muster ist:',
          ],
          items: [
            'Beginnen Sie mit RTF für die meisten neuen Aufgaben, bei denen Sie nur schnelle klare Struktur benötigen.',
            'Wechseln Sie zu SPECS, wenn Sie strikte Schemas, Beispiele und Constraints benötigen.',
            'Verwenden Sie TRACE oder APE, wenn Sie explizite Reasoning-Schritte vor der endgültigen Antwort möchten.',
            'Verwenden Sie kreative Frameworks wie CRAFT, wenn Zielgruppe und Ton zentral sind.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Häufige RTF-Fehler',
          mistakes: [
            {
              mistake: 'Vage Role — „Sie sind ein hilfreicher Assistent"',
              problem: '„Hilfreicher Assistent" ist der Standard. Es fügt nichts hinzu. Eine vage Role bedeutet, dass das Modell seine eigene Perspektive wählt, die zwischen Durchläufen variiert.',
              fix: 'Seien Sie spezifisch: „Sie sind ein leitender Backend-Ingenieur" oder „Sie sind ein B2B-Marketing-Manager, der CFOs anvisiert." Je spezifischer die Role, desto konsistenter die Ausgabe.',
            },
            {
              mistake: 'Task und Format zu einem Brei zusammengemengt',
              problem: '„Fassen Sie dieses Meeting in Aufzählungspunkten zusammen" vermengt Task und Format. Wenn sie zusammengemengt sind, bekommt keiner genug Spezifität.',
              fix: 'Trennen Sie sie: Task = „Identifizieren Sie Beschlüsse, Risiken und nächste Schritte." Format = „Markdown, 3 Abschnitte, 3–5 Aufzählungspunkte pro Abschnitt, unter 250 Wörtern."',
            },
            {
              mistake: 'Format komplett auslassen',
              problem: 'Ohne ein explizites Format-Feld wählt das Modell standardmäßig Prosa-Absätze — was möglicherweise nicht das ist, was Sie brauchen. Das ist die #1 Ursache für „die KI hat mir einen Text-Wand gegeben."',
              fix: 'Geben Sie immer Format an. Selbst „Format: 3 Aufzählungspunkte" ist besser als nichts.',
            },
            {
              mistake: 'RTF für Aufgaben verwenden, die Zielgruppen-/Ton-Kontrolle benötigen',
              problem: 'RTF hat kein Audience- oder Tone-Feld. Wenn Sie kundenorientierte Inhalte schreiben, bei denen die Stimme wichtig ist, zwingt RTF Sie, Ton in die Role oder das Format-Feld zu zwingen, was umständlich wird.',
              fix: 'Wechseln Sie zu CRAFT (das explizite Audience- und Tone-Felder hat) oder CO-STAR (das Style und Audience trennt), wenn Stimme wichtig ist.',
            },
            {
              mistake: 'RTF-Prompts nie als Vorlagen speichern',
              problem: 'Das Schreiben desselben „Meeting-Zusammenfassung"-RTF-Prompts jede Woche von Grund auf kostet Zeit und führt zu Inkonsistenzen.',
              fix: 'Speichern Sie funktionierende RTF-Prompts als benannte Vorlagen in PromptQuorum. Verwenden Sie sie wieder, indem Sie nur Eingabedaten auswechseln.',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'Wie PromptQuorum RTF implementiert',
          content: [
            '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, das das RTF-Framework als eine seiner integrierten Prompt-Strukturen enthält, sodass Benutzer Role–Task–Format-Prompting konsistent anwenden können.** Wenn Sie die RTF-Option in PromptQuorum auswählen, stellt die Benutzeroberfläche Felder für Role, Task und Format bereit und fügt sie zu einer einzigen wohlgeformten Anweisung zusammen.',
            'In PromptQuorum ermöglicht Ihnen das RTF-Framework:',
          ],
          items: [
            'Role, Task und Format einmal ausfüllen und denselben strukturierten Prompt an 25+ Modelle wie GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle senden, die über Ollama oder LM Studio konfiguriert sind.',
            'RTF-Prompts als Vorlagen für wiederkehrende Workflows speichern — zum Beispiel „wöchentliche Status-Zusammenfassung", „Kunden-Antwort-Entwurf" oder „Bug-Bericht-Zusammenfassung".',
            'RTF-Vorlagen über Ihr Team hinweg teilen, sodass auch Nicht-Experten Prompts erstellen können, die konsistente, strukturierte Ausgaben erzeugen.',
            'Denselben RTF-Prompt über mehrere Modelle nebeneinander testen, um den besten für Ihren Use Case zu finden.',
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought-Prompting', url: '/prompt-engineering/chain-of-thought-prompting?lang=de' },
            { title: 'Was ist Prompt Engineering?', url: '/prompt-engineering/what-is-prompt-engineering?lang=de' },
            { title: 'Zero-Shot vs. Few-Shot-Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot?lang=de' },
            { title: 'Constrained Prompting', url: '/prompt-engineering/constrained-prompting?lang=de' },
            { title: 'Wie wähle ich das richtige Modell: GPT-5.5 vs. Claude vs. Gemini', url: '/prompt-engineering/gpt-claude-gemini-which-model?lang=de' },
            { title: 'CO-STAR Framework', url: '/prompt-engineering/co-star-framework?lang=de' },
          ],
        },
        sources: {
          items: [
            'Schulhoff, L., et al. (2024). Prompt Engineering Guide. [https://www.promptingguide.ai](https://www.promptingguide.ai)',
            'Brown, T. B., et al. (2020). „Language Models are Few-Shot Learners." OpenAI. arXiv:2005.14165',
            'OpenAI. (2026). Prompt Engineering Best Practices. [https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2026). Prompt Engineering — Claude API Documentation. [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Framework RTF : Role, Task, Format (2026)',
      intro: 'Le Framework RTF est une structure de prompt légère à trois composants : Role (qui est le modèle), Task (quoi faire) et Format (comment formater la sortie). Il fonctionne sur GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro et les modèles locaux. Utilisez-le par défaut pour les tâches courantes — résumés, revues de code, e-mails, rapports — et passez à CO-STAR ou SPECS uniquement si vous avez besoin de plus de structure.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 min de lecture',
      seoTitle: 'Framework RTF : Role, Task, Format — Structure de Prompt (2026)',
      metaDescription: 'Framework prompt RTF : Role (qui), Task (quoi), Format (comment). Trois composants pour les tâches courantes. Tableaux comparatifs vs CO-STAR, SPECS, TRACE.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Framework RTF : Role, Task, Format (2026)',
        description: 'Le Framework RTF (Rôle, Tâche, Format) expliqué : son fonctionnement, quand l\'utiliser, et comment PromptQuorum l\'offre comme option intégrée.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework?lang=fr',
        inLanguage: 'fr',
        keywords: ['Framework RTF', 'Rôle Tâche Format', 'Frameworks de prompts', 'Prompt Engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RTF' },
          { '@type': 'Thing', name: 'Frameworks de prompts' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      sections: {},
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RTFフレームワーク：Role・Task・Formatのプロンプト構造（2026年）',
      intro: '​RTFフレームワークは軽量な3要素プロンプト構造です。Role（モデルの役割）、Task（実行するタスク）、Format（出力形式）。GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、ローカルモデルで動作します。日常的なタスク（要約、コードレビュー、メール、レポート）に標準として使用し、より多くの構造が必要な場合のみCO-STARやSPECSにアップグレードしてください。',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6分で読める',
      seoTitle: 'RTFフレームワーク：Role・Task・Formatのプロンプト構造（2026）',
      metaDescription: 'RTFプロンプトフレームワーク：Role（誰）、Task（何を）、Format（どう出力）。3要素でルーティンタスクに対応。CO-STAR/SPECS/TRACEとの比較表付き。',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RTFフレームワーク：Role・Task・Formatのプロンプト構造（2026年）',
        description: 'RTFフレームワーク（Role・Task・Format）の説明：その仕組み、使用時期、PromptQuorumでの実装方法。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework?lang=ja',
        inLanguage: 'ja',
        keywords: ['RTFフレームワーク', 'Role Task Format', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', 'PromptQuorum'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTFフレームワーク' },
          { '@type': 'Thing', name: 'プロンプトフレームワーク' },
          { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      sections: {},
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RTF框架：Role、Task、Format的提示词结构（2026）',
      intro: 'RTF框架是一种轻量级的三要素提示词结构：Role（模型的角色）、Task（要执行的任务）、Format（输出格式）。在GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro和本地模型上工作。将其用作日常任务（摘要、代码审查、电子邮件、报告）的默认设置，仅当需要更多结构时才升级到CO-STAR或SPECS。',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '阅读约6分钟',
      seoTitle: 'RTF框架2026：Role、Task、Format的提示词结构',
      metaDescription: 'RTF提示词框架：Role（谁）、Task（做什么）、Format（怎么输出）。3个组件应对日常任务。与CO-STAR、SPECS、TRACE的对比表。',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RTF框架：Role、Task、Format的提示词结构（2026）',
        description: 'RTF框架（Role、Task、Format）说明：其工作原理、何时使用以及PromptQuorum如何实现它。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework?lang=zh',
        inLanguage: 'zh',
        keywords: ['RTF框架', 'Role Task Format', '提示词框架', '提示词工程', 'PromptQuorum'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTF框架' },
          { '@type': 'Thing', name: '提示词框架' },
          { '@type': 'Thing', name: '提示词工程' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      sections: {},
    },
};
