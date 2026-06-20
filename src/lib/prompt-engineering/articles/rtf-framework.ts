// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: rtf-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The RTF Framework: Role, Task, Format (2026)',
      intro: 'The RTF Framework is a lightweight three-component prompt structure: Role (who the model is), Task (what to do), and Format (how to output). It works across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models. Use it as your default for routine tasks—summaries, code reviews, emails, reports—and upgrade to CO-STAR or SPECS only when you need more structure.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 min read',
      seoTitle: 'RTF Framework: Role, Task, Format Prompt Structure',
      metaDescription: 'RTF = Role + Task + Format. The 3-field prompt structure that beats verbose approaches on routine tasks. Templates, examples, and upgrade guide.',
      ogDescription: 'RTF: 3-component prompt framework. Role, Task, Format. Learn why.',
      twitterDescription: 'RTF = Role + Task + Format. Simplest prompt structure for routine tasks. Why teams choose this over complex frameworks.',
      leadAnswerBlock: '**RTF = Role, Task, Format. Three components, zero overhead. Define who the model is, what it should do, and how the answer should look. Use it as your default for routine tasks — summaries, code reviews, emails, meeting notes. Switch to CO-STAR when tone/audience matter, SPECS when schema matters, TRACE when reasoning matters. RTF is the lightest framework that still enforces structure.**',
      quickFacts: [
        'RTF = Role + Task + Format — the lightest structured prompt framework (3 components vs 5-6 for CO-STAR/SPECS)',
        'Designed for routine, repeatable tasks: summaries, emails, code reviews, meeting notes',
        'Works across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models (Ollama, LM Studio)',
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
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework',
        inLanguage: 'en',
        keywords: ['RTF Framework', 'Role Task Format', 'prompt frameworks', 'prompt engineering', 'PromptQuorum', 'LLM prompting'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTF Framework' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
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
              text: 'Yes. RTF works with any LLM, including local models run via Ollama or LM Studio. Simpler models (Mistral Small, Llama 3.3) may be less consistent with complex Format fields, but RTF still improves output quality.',
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
          {
            '@type': 'Question',
            name: 'What does the RTF framework help you do when prompting AI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF helps you structure prompts consistently by separating concerns into three fields: who the model is (Role), what task it solves (Task), and how the output should be formatted (Format). This eliminates vagueness and makes prompts reusable templates.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does RTF stand for in prompt engineering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF stands for Role, Task, Format—the three essential components of a lightweight prompt structure. Role defines the model\'s persona, Task defines the action, and Format defines the output structure. Together they create the minimal framework needed for consistent results.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the RTF framework compare to CO-STAR for prompt engineering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF has 3 components (Role, Task, Format) and is minimal. CO-STAR has 6 components (Context, Objective, Style, Tone, Audience, Response) and is comprehensive. Use RTF for routine tasks; use CO-STAR when tone/audience/style are critical. RTF is your default; CO-STAR is your upgrade.',
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
            'Works across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models (Ollama, LM Studio).',
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
            '**The RTF Framework is a three-part prompt pattern that tells the model who it is, what to do, and exactly how the answer should look.** Instead of sending a loose question, you specify Role, Task, and Format explicitly. This works across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models you run via Ollama or LM Studio.',
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
            'Fill in Role, Task, and Format once and send the same structured prompt to 25+ models such as GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models configured through Ollama or LM Studio.',
            'Save RTF prompts as templates for recurring workflows—for example "weekly status summary," "customer reply draft," or "bug report recap."',
            'Share RTF templates across your team so that even non-experts can create prompts that produce consistent, structured outputs.',
            'A/B test the same RTF prompt across multiple models side by side to find the best one for your use case.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          id: 'faq',
          faqs: [
            {
              q: 'What does RTF stand for?',
              a: 'RTF stands for Role, Task, Format — a three-part prompt structure where Role defines who the model should act as, Task specifies what the model should do, and Format describes the structure of the desired output.',
            },
            {
              q: 'How is RTF different from CO-STAR?',
              a: 'RTF is minimal and focused on three fields: Role, Task, Format. CO-STAR is more comprehensive, adding Context, Style, Audience, and Tone. Use RTF for quick, straightforward tasks; use CO-STAR when audience and tone matter.',
            },
            {
              q: 'When should I use RTF?',
              a: 'Use RTF when you need a structured output from a clearly defined role. Examples: summarizing meetings, generating code, writing emails in a specific format, or creating documentation. RTF is ideal for template-based workflows.',
            },
            {
              q: 'Can I combine RTF with other frameworks?',
              a: 'Yes. You can use RTF for initial output generation, then apply RISEN for iterative refinement. Or combine RTF with Chain-of-Thought to add reasoning. Mix and match frameworks for complex workflows.',
            },
            {
              q: 'What if I\'m not sure what Role to specify?',
              a: 'Start with the simplest role that fits the task: "You are a technical writer," "You are a product manager," or "You are a Python expert." Be specific but not overly elaborate. Test different roles to see which produces better results.',
            },
            {
              q: 'Does the order of Role, Task, Format matter?',
              a: 'The traditional order is Role → Task → Format, but the model will understand your intent regardless of order. However, keeping this standard order makes prompts easier to read and template. Consistency matters more than strict order.',
            },
            {
              q: 'Can RTF work with all language models?',
              a: 'Yes. RTF is framework-agnostic. It works with GPT-5.5, Claude, Gemini, open-source models like Llama 3.2, and local models via Ollama or LM Studio. The principles apply universally to any instruction-following LLM.',
            },
            {
              q: 'How do I write a good Format specification?',
              a: 'Be specific: instead of "Format: nice output," write "Format: 5 bullet points, each under 15 words." Specify structure (bullet points, paragraphs, code blocks, JSON), length (word count, number of items), and tone (formal, casual, technical).',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'What Is Prompt Engineering?', url: '/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Zero-Shot vs Few-Shot Prompting', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'Constrained Prompting', url: '/prompt-engineering/constrained-prompting' },
            { title: 'How to Pick the Right Model: GPT-5.5 vs Claude vs Gemini', url: '/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'CO-STAR Framework', url: '/prompt-engineering/co-star-framework' },
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
      intro: 'Das RTF-Framework ist eine schlanke dreiteilige Prompt-Struktur: Role (wer das Modell ist), Task (was zu tun ist) und Format (wie die Ausgabe aussieht). Es funktioniert über GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle. Verwenden Sie es als Standard für Routineaufgaben — Zusammenfassungen, Code-Reviews, E-Mails, Berichte — und aktualisieren Sie zu CO-STAR oder SPECS nur, wenn Sie mehr Struktur benötigen.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 Min. Lesezeit',
      seoTitle: 'RTF-Framework: Role, Task, Format Prompt-Struktur',
      metaDescription: 'Das RTF-Framework (Rolle, Aufgabe, Format) erklärt: Wie es funktioniert, wann Sie es verwenden sollten und wie PromptQuorum RTF integriert bietet.',
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
        url: 'https://www.promptquorum.com/de/prompt-engineering/rtf-framework',
        inLanguage: 'de',
        keywords: ['RTF-Framework', 'Rolle Aufgabe Format', 'Prompt-Frameworks', 'Prompt Engineering', 'PromptQuorum', 'LLM-Prompting'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTF-Framework' },
          { '@type': 'Thing', name: 'Prompt-Frameworks' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
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
              text: 'Ja. RTF funktioniert mit jedem LLM, einschließlich lokaler Modelle, die über Ollama oder LM Studio ausgeführt werden. Einfachere Modelle (Mistral Small, Llama 3.3) können bei komplexen Format-Feldern weniger konsistent sein, aber RTF verbessert dennoch die Output-Qualität.',
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
            'Funktioniert über GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle (Ollama, LM Studio).',
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
            '**Das RTF-Framework ist ein dreiteiliges Prompt-Muster, das dem Modell sagt, wer es ist, was es tun soll und wie die Antwort genau aussehen soll.** Statt eine lose Frage zu stellen, geben Sie Role, Task und Format explizit an. Dies funktioniert über GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle, die Sie über Ollama oder LM Studio ausführen.',
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
            'Role, Task und Format einmal ausfüllen und denselben strukturierten Prompt an 25+ Modelle wie GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle senden, die über Ollama oder LM Studio konfiguriert sind.',
            'RTF-Prompts als Vorlagen für wiederkehrende Workflows speichern — zum Beispiel „wöchentliche Status-Zusammenfassung", „Kunden-Antwort-Entwurf" oder „Bug-Bericht-Zusammenfassung".',
            'RTF-Vorlagen über Ihr Team hinweg teilen, sodass auch Nicht-Experten Prompts erstellen können, die konsistente, strukturierte Ausgaben erzeugen.',
            'Denselben RTF-Prompt über mehrere Modelle nebeneinander testen, um den besten für Ihren Use Case zu finden.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          id: 'faq',
          faqs: [
            {
              q: 'Wofür steht RTF?',
              a: 'RTF steht für Role, Task, Format — eine dreiteilige Prompt-Struktur, wobei Role definiert, wer das Modell sein sollte, Task spezifiziert, was das Modell tun sollte, und Format beschreibt die Struktur der gewünschten Ausgabe.',
            },
            {
              q: 'Wie unterscheidet sich RTF von CO-STAR?',
              a: 'RTF ist minimal und konzentriert sich auf drei Felder: Role, Task, Format. CO-STAR ist umfassender und fügt Context, Style, Audience und Tone hinzu. Verwenden Sie RTF für schnelle, unkomplizierte Aufgaben; verwenden Sie CO-STAR, wenn Publikum und Ton wichtig sind.',
            },
            {
              q: 'Wann sollte ich RTF verwenden?',
              a: 'Verwenden Sie RTF, wenn Sie strukturierte Ausgabe von einer klar definierten Rolle benötigen. Beispiele: Zusammenfassung von Meetings, Code-Generierung, Schreiben von E-Mails in einem bestimmten Format oder Erstellung von Dokumentation. RTF ist ideal für Template-basierte Workflows.',
            },
            {
              q: 'Kann ich RTF mit anderen Frameworks kombinieren?',
              a: 'Ja. Sie können RTF für die anfängliche Ausgabegenerierung verwenden und dann RISEN für iterative Verfeinerung anwenden. Oder kombinieren Sie RTF mit Chain-of-Thought, um Argumentation hinzuzufügen. Mischen Sie Frameworks für komplexe Workflows.',
            },
            {
              q: 'Was ist, wenn ich unsicher bin, welche Rolle ich angeben soll?',
              a: 'Beginnen Sie mit der einfachsten Rolle, die zur Aufgabe passt: „Sie sind ein technischer Schreiber", „Sie sind ein Produktmanager" oder „Sie sind ein Python-Experte". Seien Sie spezifisch, aber nicht übermäßig ausarbeitet. Testen Sie verschiedene Rollen, um zu sehen, welche bessere Ergebnisse liefert.',
            },
            {
              q: 'Ist die Reihenfolge von Role, Task, Format wichtig?',
              a: 'Die traditionelle Reihenfolge ist Role → Task → Format, aber das Modell wird Ihre Absicht unabhängig von der Reihenfolge verstehen. Jedoch erleichtert die Beibehaltung dieser Standardreihenfolge das Lesen und Template-Erstellen von Prompts. Konsistenz ist wichtiger als strikte Reihenfolge.',
            },
            {
              q: 'Funktioniert RTF mit allen Sprachmodellen?',
              a: 'Ja. RTF ist Framework-unabhängig. Es funktioniert mit GPT-5.5, Claude, Gemini, Open-Source-Modellen wie Llama 3.2 und lokalen Modellen über Ollama oder LM Studio. Die Prinzipien gelten universell für alle Befehls-befolgenden LLMs.',
            },
            {
              q: 'Wie schreibe ich eine gute Format-Spezifikation?',
              a: 'Seien Sie spezifisch: Statt „Format: schöne Ausgabe" schreiben Sie „Format: 5 Aufzählungspunkte, jeweils unter 15 Worten". Geben Sie die Struktur (Aufzählungspunkte, Absätze, Codeblöcke, JSON), Länge (Wortanzahl, Anzahl der Elemente) und Ton (formal, lässig, technisch) an.',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought-Prompting', url: '/de/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Was ist Prompt Engineering?', url: '/de/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Zero-Shot vs. Few-Shot-Prompting', url: '/de/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'Constrained Prompting', url: '/de/prompt-engineering/constrained-prompting' },
            { title: 'Wie wähle ich das richtige Modell: GPT-5.5 vs. Claude vs. Gemini', url: '/de/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'CO-STAR Framework', url: '/de/prompt-engineering/co-star-framework' },
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
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'El Framework RTF: Rol, Tarea, Formato (2026)',
      intro: 'El Framework RTF es una estructura de prompt liviana de tres componentes: Rol (quién es el modelo), Tarea (qué hacer) y Formato (cómo producir el output). Funciona en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales. Úsalo como tu predeterminado para tareas rutinarias — resúmenes, revisiones de código, emails, informes — y pasa a CO-STAR o SPECS solo cuando necesites más estructura.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 min de lectura',
      seoTitle: 'Framework RTF: Estructura de Prompt Rol, Tarea, Formato',
      metaDescription: 'RTF = Rol + Tarea + Formato. La estructura de prompt de 3 campos que supera a los enfoques verbosos en tareas rutinarias. Plantillas y ejemplos.',
      ogDescription: 'RTF: framework de prompt de 3 componentes. Rol, Tarea, Formato. Aprende por qué.',
      twitterDescription: 'RTF = Rol + Tarea + Formato. Estructura de prompt más simple para tareas rutinarias. Por qué los equipos eligen esto sobre frameworks complejos.',
      leadAnswerBlock: '**RTF = Rol, Tarea, Formato. Tres componentes, cero sobrecarga. Define quién es el modelo, qué debe hacer y cómo debe verse la respuesta. Úsalo como predeterminado para tareas rutinarias — resúmenes, revisiones de código, emails, notas de reuniones. Cambia a CO-STAR cuando el tono/audiencia importan, SPECS cuando el esquema importa, TRACE cuando el razonamiento importa. RTF es el framework más liviano que aún impone estructura.**',
      quickFacts: [
        'RTF = Rol + Tarea + Formato — el framework de prompt estructurado más liviano (3 componentes vs 5-6 para CO-STAR/SPECS)',
        'Diseñado para tareas rutinarias y repetibles: resúmenes, emails, revisiones de código, notas de reuniones',
        'Funciona en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales (Ollama, LM Studio)',
        'RTF es el framework de inicio recomendado — actualiza a CO-STAR, SPECS o TRACE solo cuando llegues a un límite',
        'El campo Formato puede llevar restricciones y ejemplos, haciendo RTF más flexible de lo que su conteo de 3 componentes sugiere',
        'PromptQuorum incluye RTF como framework integrado con despacho multi-modelo a través de 25+ modelos',
      ],
      toc: [
        { label: 'Puntos clave', anchor: 'key-takeaways' },
        { label: '¿Qué es el Framework RTF?', anchor: 'what-is-rtf-framework' },
        { label: 'Los Tres Componentes RTF', anchor: 'three-components' },
        { label: 'Por qué RTF es útil', anchor: 'why-rtf-useful' },
        { label: 'Ejemplo: Prompt RTF malo vs bueno', anchor: 'bad-vs-good' },
        { label: 'Cuándo usar RTF', anchor: 'when-to-use' },
        { label: 'Cuándo RTF no es la elección correcta', anchor: 'when-not-to-use' },
        { label: 'Tablas de comparación', anchor: 'comparison-tables' },
        { label: 'Cómo escribir un prompt RTF', anchor: 'how-to-write' },
        { label: 'Cinco ejemplos reales de RTF', anchor: 'five-examples' },
        { label: 'Combinar RTF con otros frameworks', anchor: 'combining-rtf' },
        { label: 'Errores comunes de RTF', anchor: 'common-mistakes' },
        { label: 'Cómo PromptQuorum implementa RTF', anchor: 'promptquorum-implementation' },
        { label: 'Preguntas frecuentes', anchor: 'faq' },
        { label: 'Fuentes', anchor: 'sources' },
      ],
      educationalLevel: 'Intermediate',
      audience: 'Desarrolladores construyendo aplicaciones LLM, gerentes de producto diseñando flujos de IA, equipos construyendo herramientas con IA',
      primaryTerm: 'Framework RTF',
      aboutTopics: ['Prompting RTF', 'Frameworks de Prompt', 'Prompt Engineering'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'El Framework RTF: Rol, Tarea, Formato (2026)',
        description: 'Cómo funciona el Framework RTF (Rol, Tarea, Formato), cuándo usarlo y cómo PromptQuorum ofrece RTF como opción integrada.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/es/prompt-engineering/rtf-framework',
        inLanguage: 'es',
        keywords: ['Framework RTF', 'Rol Tarea Formato', 'frameworks de prompt', 'prompt engineering', 'PromptQuorum', 'prompting LLM'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RTF' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '¿Qué es el Framework RTF?', acceptedAnswer: { '@type': 'Answer', text: 'RTF = Rol, Tarea, Formato. Una estructura de prompt de tres componentes: Rol define quién es el modelo (ej., "analista de datos sénior"), Tarea indica qué hacer, y Formato especifica cómo debe estructurarse el output. Funciona en todos los modelos principales.' } },
          { '@type': 'Question', name: '¿Cuándo debo usar RTF en lugar de CO-STAR o SPECS?', acceptedAnswer: { '@type': 'Answer', text: 'Usa RTF para tareas rutinarias y repetibles (resúmenes, revisiones de código, emails, informes). Pasa a CO-STAR cuando el tono/audiencia sean críticos, SPECS cuando necesites esquemas y restricciones estrictos, y TRACE cuando la transparencia del razonamiento importe.' } },
          { '@type': 'Question', name: '¿RTF es lo mismo que "simplemente decirle al modelo qué hacer"?', acceptedAnswer: { '@type': 'Answer', text: 'No. RTF obliga a la especificación explícita de tres cosas: quién es el modelo (Rol), qué tarea resuelve, y cómo debe estructurarse el output (Formato). Esta estructura elimina la ambigüedad y mejora la consistencia entre modelos y ejecuciones.' } },
          { '@type': 'Question', name: '¿Cómo se compara RTF con Chain-of-Thought?', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought mejora el razonamiento pidiendo a los modelos "pensar paso a paso". RTF estructura el formato de output y el rol. Son complementarios — puedes combinarlos: usa RTF para definir rol y formato, luego añade "piensa paso a paso" para tareas de razonamiento complejo.' } },
          { '@type': 'Question', name: '¿Puedo usar RTF con modelos locales como Ollama?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. RTF funciona con cualquier LLM, incluidos modelos locales ejecutados via Ollama o LM Studio. Los modelos más simples pueden ser menos consistentes con campos de Formato complejos, pero RTF aún mejora la calidad del output.' } },
          { '@type': 'Question', name: '¿Cuál es el error más común de RTF?', acceptedAnswer: { '@type': 'Answer', text: 'Dejar el Formato implícito o vago. Sin un campo de Formato explícito (ej., "3 puntos de bala, máx 50 palabras cada uno"), los modelos usan prosa por defecto. Siempre especifica el Formato.' } },
          { '@type': 'Question', name: '¿Cómo ayuda RTF con la consistencia?', acceptedAnswer: { '@type': 'Answer', text: 'Al especificar Rol, Tarea y Formato explícitamente, reduces la ambigüedad del modelo sobre lo que quieres. Esto hace el output más consistente entre modelos, ejecuciones y miembros del equipo que reutilicen el prompt.' } },
          { '@type': 'Question', name: '¿Debo guardar los prompts RTF?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Un prompt RTF bien escrito para una tarea recurrente (resumen semanal, revisión de código, borrador de email) debe guardarse como plantilla y reutilizarse. Esta es la mayor ventaja de RTF sobre escribir prompts desde cero cada vez.' } },
          { '@type': 'Question', name: '¿Puede RTF imponer restricciones estrictas como output JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Parcialmente. RTF puede solicitar "formato JSON" en el campo Formato, y los modelos modernos (GPT-5.5, Claude) generalmente cumplen. Para imposición de esquema 100% estricta, usa SPECS (que incluye restricciones explícitas) o APIs de output estructurado.' } },
          { '@type': 'Question', name: '¿Cómo usa PromptQuorum RTF?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum incluye RTF como plantilla de framework integrada. Los usuarios completan los campos Rol, Tarea y Formato, y PromptQuorum despacha el mismo prompt en 25+ modelos (GPT-5.5, Claude, Gemini, modelos locales) para comparación y pruebas A/B.' } },
          { '@type': 'Question', name: '¿Qué te ayuda a hacer el framework RTF al hacer prompts de IA?', acceptedAnswer: { '@type': 'Answer', text: 'RTF te ayuda a estructurar prompts consistentemente al separar las preocupaciones en tres campos: quién es el modelo (Rol), qué tarea resuelve (Tarea), y cómo debe formatearse el output (Formato). Esto elimina la vaguedad y hace los prompts plantillas reutilizables.' } },
          { '@type': 'Question', name: '¿Qué significa RTF en prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'RTF significa Rol, Tarea, Formato — los tres componentes esenciales de una estructura de prompt liviana. Rol define la persona del modelo, Tarea define la acción y Formato define la estructura del output. Juntos crean el framework mínimo necesario para resultados consistentes.' } },
          { '@type': 'Question', name: '¿Cómo se compara el framework RTF con CO-STAR para prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'RTF tiene 3 componentes (Rol, Tarea, Formato) y es mínimal. CO-STAR tiene 6 componentes (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta) y es completo. Usa RTF para tareas rutinarias; usa CO-STAR cuando el tono/audiencia/estilo sean críticos. RTF es tu predeterminado; CO-STAR es tu actualización.' } },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'RTF = Rol (quién es el modelo), Tarea (qué hacer), Formato (cómo producir el output). Tres componentes simples.',
            'Usa RTF como predeterminado para tareas rutinarias: resúmenes, revisiones de código, emails, informes, notas de reuniones.',
            'El campo Formato es donde RTF añade más valor — la estructura explícita produce output dramáticamente más consistente.',
            'RTF maneja el 80% de las tareas LLM cotidianas. Pasa a CO-STAR (tono/audiencia), SPECS (restricciones) o TRACE (razonamiento) solo cuando RTF llegue a un límite.',
            'Los prompts RTF bien escritos son plantillas reutilizables. Guárdalos y reutilízalos 52 veces al año en lugar de reescribir cada semana.',
            'Funciona en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales (Ollama, LM Studio).',
            'Usa PromptQuorum para probar el mismo prompt RTF en múltiples modelos lado a lado.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: '¿Qué es el Framework RTF?',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF es un esqueleto de prompt de tres partes — Rol, Tarea, Formato — que le da al modelo justo la estructura suficiente para tareas rutinarias sin la sobrecarga de frameworks más grandes.' },
            { type: 'in-plain-terms', text: 'Dile a la IA quién ser (Rol), qué hacer (Tarea) y cómo formatear la respuesta (Formato). Eso es todo. Tres cosas. Funciona para el 80% de las tareas cotidianas. Cuando deje de ser suficiente, pasas a CO-STAR o SPECS.' },
          ],
          content: [
            '**El Framework RTF es un patrón de prompt de tres partes que le dice al modelo quién es, qué hacer y exactamente cómo debe verse la respuesta.** En lugar de enviar una pregunta suelta, especificas Rol, Tarea y Formato explícitamente. Esto funciona en GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales que ejecutas via Ollama o LM Studio.',
            'RTF es intencionalmente mínimo. Con solo tres campos, es fácil de recordar, rápido de completar y lo suficientemente flexible para muchas tareas cotidianas. Puedes tratarlo como un "esqueleto de prompt predeterminado" siempre que no estés seguro de qué framework especializado usar.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'Los Tres Componentes RTF',
          content: [
            '**Un prompt RTF sólido define claramente cada uno de los tres componentes para que el modelo no tenga ambigüedad sobre su trabajo.** Puedes escribirlos como líneas etiquetadas o como una oración que aún contenga las tres partes.',
            'Definiciones típicas:',
          ],
          items: [
            'Rol: La perspectiva o experiencia que el modelo debe adoptar (por ejemplo "Eres un analista de datos sénior").',
            'Tarea: La acción concreta que quieres, descrita en una o dos oraciones.',
            'Formato: La estructura, longitud y estilo del output (por ejemplo "3 puntos de bala más un resumen de 2 oraciones").',
          ],
          callouts: [
            {
              type: 'info',
              label: 'El Formato Es el Movimiento Clave',
              text: 'Rol y Tarea son obvios — la mayoría ya dicen lo que quieren. Formato es donde RTF añade valor real. "3 puntos de bala, máx 50 palabras cada uno, markdown" produce output dramáticamente más consistente que "dame un resumen". El campo Formato es el arma secreta de RTF.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'Por qué RTF es útil',
          content: [
            '**El Framework RTF es útil porque te da la mayoría de los beneficios de frameworks más complejos con casi ninguna sobrecarga.** Te obliga a tomar tres decisiones — quién, qué y cómo — antes de enviar un prompt.',
            'Las ventajas prácticas incluyen:',
          ],
          items: [
            'Escritura de prompts más rápida que los frameworks de múltiples secciones para trabajo rutinario.',
            'Mejor consistencia entre modelos y ejecuciones, ya que el formato siempre es explícito.',
            'Fácil incorporación para compañeros de equipo que pueden aprender RTF en pocos minutos y reutilizarlo en todas partes.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: 'Ejemplo: Prompt RTF malo vs bueno',
          promptExamples: [
            {
              bad: 'Resume esta reunión.',
              good: 'Rol: Eres un gerente de operaciones resumiendo una reunión de estado del proyecto para el liderazgo senior. Tarea: Lee la transcripción e identifica las decisiones clave, los riesgos abiertos y los próximos pasos discutidos en la reunión. Formato: Produce un resumen en Markdown con tres secciones (`Decisiones`, `Riesgos`, `Próximos pasos`). En cada sección, usa 3-5 puntos de bala. Mantén el resumen total bajo 250 palabras.',
              badLabel: 'Solicitud sin estructura',
              goodLabel: 'Prompt RTF',
            },
          ],
          content: [
            'La versión RTF le dice al modelo exactamente cómo pensar sobre el contenido y cómo empaquetar el resultado para que otros puedan usarlo inmediatamente.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'Cuándo usar RTF',
          content: [
            '**Debes usar el Framework RTF cuando quieres un patrón simple y reutilizable que aún imponga claridad y estructura.** Es un buen predeterminado siempre que no necesites especificaciones largas o trazas de razonamiento multi-paso.',
            'Los casos de uso típicos incluyen:',
          ],
          items: [
            'Informes cortos, recapitulaciones y resúmenes para emails o chat.',
            'Redactar respuestas a clientes o partes internas con estructura clara.',
            'Generar pequeños fragmentos de código o refactorizaciones con un formato de output especificado.',
            'Piezas de contenido rápidas como descripciones de productos, entradas de FAQ o listas de verificación simples.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'Cuándo RTF no es la elección correcta',
          tableFormat: true,
          columns: ['Escenario', 'Limitación de RTF', 'Usa en su lugar'],
          rows: [
            { 'Escenario': 'Contenido de cara al cliente donde el tono y la audiencia son críticos', 'Limitación de RTF': 'Sin campo explícito de Audiencia o Tono', 'Usa en su lugar': 'CO-STAR (incluye Estilo, Audiencia, Tono) o CRAFT (Restricciones, Rol, Audiencia, Formato, Tono)' },
            { 'Escenario': 'Imposición estricta de estructura o esquema de datos necesaria', 'Limitación de RTF': 'El campo Formato puede solicitar JSON pero no ofrece sintaxis de restricciones', 'Usa en su lugar': 'SPECS (incluye campo de Restricciones explícito)' },
            { 'Escenario': 'Razonamiento multi-paso o lógica de decisión necesaria', 'Limitación de RTF': 'Sin campo de razonamiento paso a paso explícito', 'Usa en su lugar': 'TRACE (incluye Disparador, Respuesta, Acción, Consecuencia, Evaluación)' },
            { 'Escenario': 'Flujos de trabajo complejos con lógica condicional', 'Limitación de RTF': 'Único Rol/Tarea/Formato por prompt', 'Usa en su lugar': 'APE (Acción, Proceso, Ejemplos) o flujos de trabajo multi-turno personalizados' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: 'Tablas de comparación',
          content: [
            '**Cómo RTF se compara con otros frameworks principales:**',
          ],
        },
        dimensionComparison: {
          title: 'Comparación por dimensión',
          tableFormat: true,
          columns: ['Dimensión', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { 'Dimensión': 'Número de campos', 'RTF': '3 (Rol, Tarea, Formato)', 'CO-STAR': '6 (Contexto, Objetivo, Estilo, Audiencia, Respuesta, Tono)', 'SPECS': '5 (Configuración, Persona, Ejemplos, Patrón, Restricciones)', 'TRACE': '5 (Disparador, Respuesta, Acción, Consecuencia, Evaluación)' },
            { 'Dimensión': 'Tiempo de configuración', 'RTF': '30 segundos', 'CO-STAR': '2-3 minutos', 'SPECS': '3-5 minutos', 'TRACE': '2-3 minutos' },
            { 'Dimensión': 'Mejor para', 'RTF': 'Tareas rutinarias y repetibles', 'CO-STAR': 'Control de tono y audiencia', 'SPECS': 'Esquemas y restricciones estrictas', 'TRACE': 'Pasos de razonamiento explícitos' },
            { 'Dimensión': 'Consistencia del output', 'RTF': 'Buena', 'CO-STAR': 'Excelente', 'SPECS': 'Excelente', 'TRACE': 'Buena' },
            { 'Dimensión': '¿Requiere ejemplos?', 'RTF': 'No', 'CO-STAR': 'Opcional', 'SPECS': 'Sí (patrones sólidos)', 'TRACE': 'No' },
          ],
        },
        pairwiseComparison: {
          title: 'Comparación por pares (RTF vs Otros)',
          tableFormat: true,
          columns: ['Comparación', 'Ganador', 'Por qué'],
          rows: [
            { 'Comparación': 'RTF vs CO-STAR', 'Ganador': 'CO-STAR (si la audiencia importa)', 'Por qué': 'CO-STAR incluye campos explícitos de Audiencia y Tono. RTF fuerza el tono en Rol o Formato, lo que se vuelve complicado. Si no te importa la voz, RTF es más rápido.' },
            { 'Comparación': 'RTF vs SPECS', 'Ganador': 'SPECS (si se necesitan restricciones estrictas)', 'Por qué': 'SPECS incluye un campo de Restricciones dedicado y espera ejemplos. RTF puede solicitar restricciones en Formato pero carece de sintaxis estructurada. SPECS gana para JSON, CSV o datos estructurados.' },
            { 'Comparación': 'RTF vs TRACE', 'Ganador': 'TRACE (si el razonamiento importa)', 'Por qué': 'TRACE modela explícitamente causa y efecto (Disparador → Respuesta → Acción → Consecuencia). RTF no tiene campo de paso de razonamiento. Usa TRACE para lógica compleja, RTF para output simple.' },
            { 'Comparación': 'RTF vs Chain-of-Thought', 'Ganador': 'Complementarios', 'Por qué': 'RTF define el rol y el formato del output. CoT mejora el razonamiento. Combínalos: usa RTF para estructurar el prompt, añade "piensa paso a paso" para matemáticas o lógica complejas.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'Cómo escribir un prompt RTF',
          numberedItems: [
            '**Rol: Define quién está interpretando la IA.** Los roles específicos superan a los genéricos. Malo: "Eres útil." Bueno: "Eres un ingeniero backend sénior revisando código por regresiones de rendimiento." Cuanto más específico, más consistente el output.',
            '**Tarea: Indica qué debe hacer la IA.** Sé concreto. Malo: "Resume esto." Bueno: "Identifica las tres decisiones clave, los riesgos abiertos y los próximos pasos discutidos."',
            '**Formato: Especifica estructura, longitud y estilo.** Aquí es donde RTF añade valor. Malo: (Formato faltante). Bueno: "3 puntos de bala, máx 50 palabras cada uno, markdown, bajo 200 palabras en total."',
            '**Separa Tarea y Formato.** Mézclalos en un bloque y ninguno obtiene suficiente especificidad. Mantenlos distintos.',
            '**Siempre incluye Formato, incluso cuando parezca obvio.** Sin él, los modelos usan prosa por defecto.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: 'Cinco ejemplos reales de RTF',
          content: ['Aquí hay cinco prompts RTF listos para producción para flujos de trabajo comunes:'],
        },
        example1: {
          title: 'Ejemplo 1: Resumen de estado semanal',
          content: [
            '**Rol:** Eres un gerente de operaciones escribiendo un resumen de estado semanal para el liderazgo ejecutivo.',
            '**Tarea:** Resume el progreso del proyecto de esta semana, las decisiones clave tomadas, los riesgos identificados y las prioridades de la próxima semana.',
            '**Formato:** Markdown, cuatro secciones (Resumen, Decisiones, Riesgos, Próxima semana), 3-5 puntos por sección, máx 300 palabras.',
          ],
        },
        example2: {
          title: 'Ejemplo 2: Feedback de revisión de código',
          content: [
            '**Rol:** Eres un ingeniero backend sénior revisando código por mantenibilidad, rendimiento y seguridad.',
            '**Tarea:** Revisa este bloque de código e identifica cualquier problema, sugiere mejoras y califica la calidad general.',
            '**Formato:** Markdown, tres secciones (Problemas encontrados, Mejoras, Calificación de calidad 1-5), bloques de código para ejemplos.',
          ],
        },
        example3: {
          title: 'Ejemplo 3: Borrador de email al cliente',
          content: [
            '**Rol:** Eres un gerente de éxito del cliente redactando una respuesta profesional y empática a una queja del cliente.',
            '**Tarea:** Aborda su preocupación, discúlpate donde corresponda, explica la resolución y restaura la confianza.',
            '**Formato:** Formato de email (saludo, 2-3 párrafos, cierre), tono profesional, 150-250 palabras.',
          ],
        },
        example4: {
          title: 'Ejemplo 4: Notas de reunión a elementos de acción',
          content: [
            '**Rol:** Eres un coordinador de proyectos extrayendo elementos de acción de notas de reunión en bruto.',
            '**Tarea:** Identifica las decisiones tomadas, los riesgos discutidos y los próximos pasos con responsables y plazos.',
            '**Formato:** Markdown con tres secciones (Decisiones, Riesgos, Elementos de acción), elementos de acción como listas de verificación con asignado y fecha límite.',
          ],
        },
        example5: {
          title: 'Ejemplo 5: Documentación de producto para usuarios no técnicos',
          content: [
            '**Rol:** Eres un escritor técnico explicando una función a usuarios no técnicos en lenguaje simple.',
            '**Tarea:** Explica qué hace esta función, por qué podrían usarla y cómo usarla en tres pasos simples.',
            '**Formato:** 1 oración de introducción, 3 pasos numerados con ejemplos, 1 oración de conclusión. Evita el jerga.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'Combinar RTF con otros frameworks',
          content: [
            '**Debes combinar el Framework RTF con otros frameworks tratando RTF como tu predeterminado liviano y cambiando a frameworks más pesados cuando aumenten las restricciones.** Un patrón práctico es:',
          ],
          items: [
            'Empieza con RTF para la mayoría de las nuevas tareas donde solo necesitas una estructura clara rápidamente.',
            'Pasa a SPECS cuando necesites esquemas estrictos, ejemplos y restricciones.',
            'Usa TRACE o APE cuando quieras pasos de razonamiento explícitos antes de la respuesta final.',
            'Usa frameworks creativos como CRAFT cuando la audiencia y el tono sean centrales.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Errores comunes de RTF',
          mistakes: [
            {
              mistake: 'Rol vago — "Eres un asistente útil"',
              problem: '"Asistente útil" es el predeterminado. No añade nada. Un rol vago significa que el modelo elige su propia perspectiva, que varía entre ejecuciones.',
              fix: 'Sé específico: "Eres un ingeniero backend sénior" o "Eres un gerente de marketing B2B dirigiéndose a CFOs." Cuanto más específico el rol, más consistente el output.',
            },
            {
              mistake: 'Tarea vaga — "ayúdame con esto"',
              problem: '"Ayúdame con esto" no es una tarea. El modelo adivina qué acción tomar, qué detalle incluir y qué ignorar. La ambigüedad en la Tarea produce variabilidad en el output.',
              fix: 'Escribe la Tarea como una acción específica: "Identifica los tres principales riesgos técnicos en este plan de proyecto" o "Escribe una respuesta de seguimiento de 5 frases para esta queja del cliente."',
            },
            {
              mistake: 'Formato faltante',
              problem: 'Sin Formato, el modelo elige la longitud, estructura y estilo. Esto produce variabilidad entre ejecuciones e inconsistencia cuando el mismo prompt se usa en múltiples modelos.',
              fix: 'Siempre incluye Formato. Incluso algo simple como "Markdown, 3 puntos de bala, bajo 150 palabras" mejora dramáticamente la consistencia.',
            },
            {
              mistake: 'Combinar Tarea y Formato en una oración',
              problem: '"Resume esto en 3 puntos" combina qué hacer con cómo formatearlo. Si cambia la tarea, se pierde el formato. Si cambia el formato, la tarea se vuelve confusa.',
              fix: 'Mantenlos separados: "Tarea: Identifica los riesgos. Formato: 3 puntos de bala, máx 30 palabras cada uno."',
            },
          ],
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            { title: 'CO-STAR Framework: Componentes y cuándo usarlo', url: '/es/prompt-engineering/co-star-framework' },
            { title: 'Framework SPECS: Prompts de especificación estricta', url: '/es/prompt-engineering/specs-framework' },
            { title: 'Framework TRACE: Hacer visible el razonamiento de la IA', url: '/es/prompt-engineering/trace-framework' },
            { title: '¿Qué framework de prompt deberías usar?', url: '/es/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: '¿Cómo elegir el modelo correcto: GPT-5.5 vs Claude vs Gemini?', url: '/es/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'Framework CO-STAR', url: '/es/prompt-engineering/co-star-framework' },
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
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'إطار ⁨RTF⁩: الدور، المهمة، التنسيق (⁨2026⁩)',
      intro: 'إطار RTF هو بنية برومبت خفيفة من ثلاثة مكونات: الدور (Role - من يكون النموذج)، والمهمة (Task - ما يجب فعله)، والتنسيق (Format - كيفية إنتاج المخرج). يعمل مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية. استخدمه كخيارك الافتراضي للمهام الروتينية — الملخصات ومراجعات الكود والبريد الإلكتروني والتقارير — وانتقل إلى CO-STAR أو SPECS فقط عند الحاجة إلى مزيد من البنية.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '٦ دقائق للقراءة',
      seoTitle: 'إطار ⁨RTF⁩: دور + مهمة + تنسيق لبرومبت فعّال',
      metaDescription: '⁨RTF⁩ هو الإطار الأخف بـ ⁨3⁩ مكونات فقط: الدور والمهمة والتنسيق. يتفوق على الأساليب المطوّلة في المهام الروتينية. قوالب وأمثلة ودليل الترقية.',
      ogDescription: 'RTF: إطار برومبت من 3 مكونات. الدور والمهمة والتنسيق. تعلّم السبب.',
      twitterDescription: '⁨RTF⁩ = الدور + المهمة + التنسيق. أبسط بنية برومبت للمهام الروتينية. لماذا تختار الفرق هذا بدلاً من الأطر المعقدة.',
      leadAnswerBlock: '**RTF = الدور والمهمة والتنسيق. ثلاثة مكونات، بلا تعقيد. حدّد من يكون النموذج وما يجب فعله وكيف يجب أن تبدو الاستجابة. استخدمه كخيار افتراضي للمهام الروتينية — الملخصات ومراجعات الكود والبريد الإلكتروني وملاحظات الاجتماعات. انتقل إلى CO-STAR عندما تهم النبرة/الجمهور، وSPECS عندما يهم المخطط، وTRACE عندما يهم الاستدلال. RTF هو الإطار الأخف الذي لا يزال يفرض البنية.**',
      quickFacts: [
        'RTF = الدور + المهمة + التنسيق — أخف إطار برومبت منظم (3 مكونات مقابل 5-6 لـ CO-STAR/SPECS)',
        'مصمم للمهام الروتينية والقابلة للتكرار: الملخصات والبريد الإلكتروني ومراجعات الكود وملاحظات الاجتماعات',
        'يعمل مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية (Ollama وLM Studio)',
        'RTF هو إطار البدء الموصى به — رقِّ إلى CO-STAR أو SPECS أو TRACE فقط عند الوصول إلى حد',
        'حقل التنسيق يمكنه حمل القيود والأمثلة، مما يجعل RTF أكثر مرونة مما يوحي به عدد مكوناته الثلاثة',
        'PromptQuorum يتضمن RTF كإطار مدمج مع إرسال متعدد النماذج عبر 25+ نموذج',
      ],
      toc: [
        { label: 'النقاط الرئيسية', anchor: 'key-takeaways' },
        { label: 'ما هو إطار RTF؟', anchor: 'what-is-rtf-framework' },
        { label: 'المكونات الثلاثة لـ RTF', anchor: 'three-components' },
        { label: 'لماذا RTF مفيد', anchor: 'why-rtf-useful' },
        { label: 'مثال: برومبت RTF سيئ مقابل جيد', anchor: 'bad-vs-good' },
        { label: 'متى تستخدم RTF', anchor: 'when-to-use' },
        { label: 'متى RTF ليس الخيار الصحيح', anchor: 'when-not-to-use' },
        { label: 'جداول المقارنة', anchor: 'comparison-tables' },
        { label: 'كيفية كتابة برومبت RTF', anchor: 'how-to-write' },
        { label: 'خمسة أمثلة حقيقية على RTF', anchor: 'five-examples' },
        { label: 'دمج RTF مع أطر أخرى', anchor: 'combining-rtf' },
        { label: 'الأخطاء الشائعة في RTF', anchor: 'common-mistakes' },
        { label: 'كيف ينفّذ PromptQuorum إطار RTF', anchor: 'promptquorum-implementation' },
        { label: 'الأسئلة الشائعة', anchor: 'faq' },
        { label: 'المصادر', anchor: 'sources' },
      ],
      educationalLevel: 'متوسط',
      audience: 'المطورون الذين يبنون تطبيقات LLM، ومديرو المنتج الذين يصممون سير عمل الذكاء الاصطناعي، والفرق التي تبني أدوات بالذكاء الاصطناعي',
      primaryTerm: 'Framework RTF',
      aboutTopics: ['برومبت RTF', 'أطر البرومبت', 'هندسة البرومبت'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'إطار RTF: الدور، المهمة، التنسيق (2026)',
        description: 'كيف يعمل إطار RTF (الدور والمهمة والتنسيق)، ومتى يُستخدم، وكيف يُوفّر PromptQuorum إطار RTF كخيار مدمج.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/rtf-framework',
        inLanguage: 'ar',
        keywords: ['Framework RTF', 'الدور المهمة التنسيق', 'أطر البرومبت', 'هندسة البرومبت', 'PromptQuorum', 'برومبت LLM'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RTF' },
          { '@type': 'Thing', name: 'أطر البرومبت' },
          { '@type': 'Thing', name: 'هندسة البرومبت' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'متوسط',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          { '@type': 'Question', name: 'ما هو إطار RTF؟', acceptedAnswer: { '@type': 'Answer', text: 'RTF = الدور والمهمة والتنسيق. بنية برومبت من ثلاثة مكونات: الدور يحدد هوية النموذج (مثلاً "محلل بيانات أول")، والمهمة تحدد ما يجب فعله، والتنسيق يحدد كيفية هيكلة المخرج. يعمل مع جميع النماذج الرئيسية.' } },
          { '@type': 'Question', name: 'متى يجب استخدام RTF بدلاً من CO-STAR أو SPECS؟', acceptedAnswer: { '@type': 'Answer', text: 'استخدم RTF للمهام الروتينية القابلة للتكرار (الملخصات ومراجعات الكود والبريد الإلكتروني والتقارير). انتقل إلى CO-STAR عندما تكون النبرة/الجمهور حاسمَين، وSPECS عند الحاجة إلى مخططات وقيود صارمة، وTRACE عندما تكون شفافية الاستدلال مهمة.' } },
          { '@type': 'Question', name: 'هل RTF يساوي "مجرد إخبار النموذج بما يجب فعله"؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. RTF يُلزم بالتحديد الصريح لثلاثة أشياء: هوية النموذج (الدور)، والمهمة التي يحلها، وكيفية هيكلة المخرج (التنسيق). هذه البنية تُزيل الغموض وتُحسّن الاتساق عبر النماذج وعمليات التشغيل.' } },
          { '@type': 'Question', name: 'كيف يقارن RTF بـ Chain-of-Thought؟', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought يُحسّن الاستدلال بطلب من النماذج "التفكير خطوة بخطوة". RTF يُهيكل تنسيق المخرج والدور. هما متكاملان — يمكن دمجهما: استخدم RTF لتحديد الدور والتنسيق، ثم أضف "فكّر خطوة بخطوة" لمهام الاستدلال المعقد.' } },
          { '@type': 'Question', name: 'هل يمكنني استخدام RTF مع النماذج المحلية مثل Ollama؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. RTF يعمل مع أي LLM، بما في ذلك النماذج المحلية التي تعمل عبر Ollama أو LM Studio. النماذج الأبسط قد تكون أقل اتساقاً مع حقول التنسيق المعقدة، لكن RTF لا يزال يُحسّن جودة المخرج.' } },
          { '@type': 'Question', name: 'ما أكثر خطأ شائع في RTF؟', acceptedAnswer: { '@type': 'Answer', text: 'ترك التنسيق ضمنياً أو مبهماً. بدون حقل تنسيق صريح (مثلاً "3 نقاط، بحد أقصى 50 كلمة لكل منها")، تستخدم النماذج النثر بشكل افتراضي. حدّد التنسيق دائماً.' } },
          { '@type': 'Question', name: 'كيف يُساعد RTF في الاتساق؟', acceptedAnswer: { '@type': 'Answer', text: 'بتحديد الدور والمهمة والتنسيق بشكل صريح، تُقلل من غموض النموذج حول ما تريده. هذا يجعل المخرج أكثر اتساقاً عبر النماذج وعمليات التشغيل وأعضاء الفريق الذين يُعيدون استخدام البرومبت.' } },
          { '@type': 'Question', name: 'هل يجب حفظ برومبتات RTF؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. برومبت RTF المكتوب جيداً لمهمة متكررة (ملخص أسبوعي، مراجعة كود، مسودة بريد إلكتروني) يجب حفظه كقالب وإعادة استخدامه. هذه أكبر ميزة لـ RTF على كتابة البرومبتات من الصفر في كل مرة.' } },
          { '@type': 'Question', name: 'هل يمكن لـ RTF فرض قيود صارمة مثل مخرج JSON؟', acceptedAnswer: { '@type': 'Answer', text: 'جزئياً. يمكن لـ RTF طلب "تنسيق JSON" في حقل التنسيق، والنماذج الحديثة (GPT-5.5 وClaude) تمتثل عادةً. لفرض مخطط صارم 100٪، استخدم SPECS (الذي يتضمن قيوداً صريحة) أو واجهات برمجة مخرجات منظمة.' } },
          { '@type': 'Question', name: 'كيف يستخدم PromptQuorum إطار RTF؟', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum يتضمن RTF كقالب إطار مدمج. يملأ المستخدمون حقول الدور والمهمة والتنسيق، ويُرسل PromptQuorum البرومبت نفسه عبر 25+ نموذج (GPT-5.5 وClaude وGemini والنماذج المحلية) للمقارنة واختبار A/B.' } },
          { '@type': 'Question', name: 'ماذا يساعدك إطار RTF على فعله عند برمجة الذكاء الاصطناعي؟', acceptedAnswer: { '@type': 'Answer', text: 'RTF يساعدك على هيكلة البرومبتات باتساق بالفصل بين المخاوف في ثلاثة حقول: هوية النموذج (الدور) والمهمة التي يحلها (المهمة) وكيفية تنسيق المخرج (التنسيق). هذا يُزيل الغموض ويجعل البرومبتات قوالب قابلة لإعادة الاستخدام.' } },
          { '@type': 'Question', name: 'ماذا يعني RTF في هندسة البرومبت؟', acceptedAnswer: { '@type': 'Answer', text: 'RTF تعني الدور والمهمة والتنسيق — المكونات الثلاثة الأساسية لبنية برومبت خفيفة. الدور يحدد شخصية النموذج، والمهمة تحدد الإجراء، والتنسيق يحدد بنية المخرج. معاً تُنشئ الحد الأدنى الضروري للإطار لنتائج متسقة.' } },
          { '@type': 'Question', name: 'كيف يقارن إطار RTF بـ CO-STAR في هندسة البرومبت؟', acceptedAnswer: { '@type': 'Answer', text: 'RTF لديه 3 مكونات (الدور والمهمة والتنسيق) وهو في حده الأدنى. CO-STAR لديه 6 مكونات (السياق والهدف والأسلوب والنبرة والجمهور والاستجابة) وهو شامل. استخدم RTF للمهام الروتينية؛ استخدم CO-STAR عندما تكون النبرة/الجمهور/الأسلوب حاسمة. RTF هو خيارك الافتراضي؛ CO-STAR هو ترقيتك.' } },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'RTF = الدور (من يكون النموذج) والمهمة (ما يجب فعله) والتنسيق (كيفية إنتاج المخرج). ثلاثة مكونات بسيطة.',
            'استخدم RTF كخيار افتراضي للمهام الروتينية: الملخصات ومراجعات الكود والبريد الإلكتروني والتقارير وملاحظات الاجتماعات.',
            'حقل التنسيق هو المكان الذي يُضيف فيه RTF أكثر قيمة — البنية الصريحة تُنتج مخرجاً أكثر اتساقاً بشكل ملحوظ.',
            'RTF يتعامل مع 80٪ من مهام LLM اليومية. انتقل إلى CO-STAR (النبرة/الجمهور) أو SPECS (القيود) أو TRACE (الاستدلال) فقط عندما يصل RTF إلى حد.',
            'برومبتات RTF المكتوبة جيداً هي قوالب قابلة لإعادة الاستخدام. احفظها وأعد استخدامها 52 مرة في السنة بدلاً من إعادة الكتابة كل أسبوع.',
            'يعمل مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية (Ollama وLM Studio).',
            'استخدم PromptQuorum لاختبار برومبت RTF نفسه على نماذج متعددة جنباً إلى جنب.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'ما هو إطار RTF؟',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF هو هيكل برومبت من ثلاثة أجزاء — الدور والمهمة والتنسيق — يعطي النموذج البنية الكافية فقط للمهام الروتينية دون عبء الأطر الأكبر.' },
            { type: 'in-plain-terms', text: 'أخبر الذكاء الاصطناعي من يكون (الدور) وما يجب فعله (المهمة) وكيفية تنسيق الإجابة (التنسيق). هذا كل شيء. ثلاثة أشياء. يعمل لـ 80٪ من المهام اليومية. عندما لا يكفي، تنتقل إلى CO-STAR أو SPECS.' },
          ],
          content: [
            '**إطار RTF هو نمط برومبت من ثلاثة أجزاء يُخبر النموذج بهويته وما يجب فعله وكيف يجب أن تبدو الإجابة بالضبط.** بدلاً من إرسال سؤال فضفاض، تُحدد الدور والمهمة والتنسيق بشكل صريح. يعمل هذا مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية التي تشغّلها عبر Ollama أو LM Studio.',
            'RTF مقصود بأنه في حده الأدنى. بثلاثة حقول فقط، سهل التذكر وسريع الإكمال ومرن بما يكفي للعديد من المهام اليومية. يمكنك التعامل معه كـ "هيكل برومبت افتراضي" كلما لم تكن متأكداً من أي إطار متخصص تستخدمه.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'المكونات الثلاثة لـ RTF',
          content: [
            '**يُحدد برومبت RTF القوي كل مكون من المكونات الثلاثة بوضوح حتى لا يكون للنموذج غموض حول عمله.** يمكنك كتابتها كأسطر مُعنوَنة أو كجملة لا تزال تحتوي على الأجزاء الثلاثة.',
            'تعريفات نموذجية:',
          ],
          items: [
            'الدور: وجهة النظر أو الخبرة التي يجب أن يتبناها النموذج (مثلاً "أنت محلل بيانات أول").',
            'المهمة: الإجراء الملموس الذي تريده، موصوفاً في جملة أو جملتين.',
            'التنسيق: بنية وطول وأسلوب المخرج (مثلاً "3 نقاط بالإضافة إلى ملخص من جملتين").',
          ],
          callouts: [
            {
              type: 'info',
              label: 'التنسيق هو التحركة الرئيسية',
              text: 'الدور والمهمة واضحان — معظم الناس يقولون ما يريدون بالفعل. التنسيق هو المكان الذي يُضيف فيه RTF قيمة حقيقية. "3 نقاط، بحد أقصى 50 كلمة لكل منها، markdown" ينتج مخرجاً أكثر اتساقاً بشكل ملحوظ من "أعطني ملخصاً". حقل التنسيق هو السلاح السري لـ RTF.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'لماذا RTF مفيد',
          content: [
            '**إطار RTF مفيد لأنه يمنحك معظم فوائد الأطر الأكثر تعقيداً مع كاد لا يكون هناك عبء.** يُلزمك باتخاذ ثلاثة قرارات — من وماذا وكيف — قبل إرسال برومبت.',
            'تشمل المزايا العملية:',
          ],
          items: [
            'كتابة برومبتات أسرع من الأطر متعددة الأقسام للعمل الروتيني.',
            'اتساق أفضل عبر النماذج وعمليات التشغيل، لأن التنسيق صريح دائماً.',
            'سهولة تأهيل زملاء الفريق الذين يمكنهم تعلم RTF في دقائق وإعادة استخدامه في كل مكان.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: 'مثال: برومبت RTF سيئ مقابل جيد',
          promptExamples: [
            {
              bad: 'لخّص هذا الاجتماع.',
              good: 'الدور: أنت مدير عمليات تُلخّص اجتماع حالة مشروع لقيادة تنفيذية عليا. المهمة: اقرأ النص وحدّد القرارات الرئيسية والمخاطر المفتوحة والخطوات التالية التي جرى نقاشها في الاجتماع. التنسيق: أنتج ملخصاً بتنسيق Markdown مع ثلاثة أقسام (`القرارات`، `المخاطر`، `الخطوات التالية`). في كل قسم، استخدم 3-5 نقاط. احتفظ بالملخص الإجمالي تحت 250 كلمة.',
              badLabel: 'طلب بدون بنية',
              goodLabel: 'برومبت RTF',
            },
          ],
          content: [
            'النسخة RTF تُخبر النموذج بالضبط كيفية التفكير في المحتوى وكيفية تغليف النتيجة حتى يتمكن الآخرون من استخدامها فوراً.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'متى تستخدم RTF',
          content: [
            '**يجب استخدام إطار RTF عندما تريد نمطاً بسيطاً وقابلاً لإعادة الاستخدام لا يزال يفرض الوضوح والبنية.** إنه خيار افتراضي جيد كلما لم تكن بحاجة إلى مواصفات طويلة أو تتبع استدلال متعدد الخطوات.',
            'تشمل حالات الاستخدام النموذجية:',
          ],
          items: [
            'التقارير القصيرة والملخصات التكرارية لرسائل البريد الإلكتروني أو الدردشة.',
            'صياغة الردود للعملاء أو الأطراف الداخلية ببنية واضحة.',
            'توليد مقاطع كود صغيرة أو إعادة بنائها بتنسيق مخرج محدد.',
            'قطع محتوى سريعة مثل أوصاف المنتجات وإدخالات الأسئلة الشائعة وقوائم التحقق البسيطة.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'متى RTF ليس الخيار الصحيح',
          tableFormat: true,
          columns: ['السيناريو', 'قيود RTF', 'استخدم بدلاً منه'],
          rows: [
            { 'السيناريو': 'محتوى موجّه للعملاء حيث النبرة والجمهور حاسمان', 'قيود RTF': 'بدون حقل صريح للجمهور أو النبرة', 'استخدم بدلاً منه': 'CO-STAR (يتضمن الأسلوب والجمهور والنبرة) أو CRAFT (القيود والدور والجمهور والتنسيق والنبرة)' },
            { 'السيناريو': 'فرض بنية صارمة أو مخطط بيانات ضروري', 'قيود RTF': 'حقل التنسيق يمكنه طلب JSON لكنه لا يُوفر صيغة قيود', 'استخدم بدلاً منه': 'SPECS (يتضمن حقل قيود صريح)' },
            { 'السيناريو': 'استدلال متعدد الخطوات أو منطق قرار ضروري', 'قيود RTF': 'بدون حقل استدلال خطوة بخطوة صريح', 'استخدم بدلاً منه': 'TRACE (يتضمن المُحفّز والاستجابة والإجراء والنتيجة والتقييم)' },
            { 'السيناريو': 'سير عمل معقدة بمنطق شرطي', 'قيود RTF': 'دور/مهمة/تنسيق واحد لكل برومبت', 'استخدم بدلاً منه': 'APE (الإجراء والعملية والأمثلة) أو سير عمل متعدد الأدوار مخصص' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: 'جداول المقارنة',
          content: [
            '**كيف يقارن RTF بالأطر الرئيسية الأخرى:**',
          ],
        },
        dimensionComparison: {
          title: 'المقارنة حسب البُعد',
          tableFormat: true,
          columns: ['البُعد', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { 'البُعد': 'عدد الحقول', 'RTF': '3 (الدور والمهمة والتنسيق)', 'CO-STAR': '6 (السياق والهدف والأسلوب والجمهور والاستجابة والنبرة)', 'SPECS': '5 (الإعداد والشخصية والأمثلة والنمط والقيود)', 'TRACE': '5 (المُحفّز والاستجابة والإجراء والنتيجة والتقييم)' },
            { 'البُعد': 'وقت الإعداد', 'RTF': '30 ثانية', 'CO-STAR': '2-3 دقائق', 'SPECS': '3-5 دقائق', 'TRACE': '2-3 دقائق' },
            { 'البُعد': 'الأفضل لـ', 'RTF': 'المهام الروتينية القابلة للتكرار', 'CO-STAR': 'التحكم في النبرة والجمهور', 'SPECS': 'المخططات والقيود الصارمة', 'TRACE': 'خطوات الاستدلال الصريحة' },
            { 'البُعد': 'اتساق المخرج', 'RTF': 'جيد', 'CO-STAR': 'ممتاز', 'SPECS': 'ممتاز', 'TRACE': 'جيد' },
            { 'البُعد': 'هل يتطلب أمثلة؟', 'RTF': 'لا', 'CO-STAR': 'اختياري', 'SPECS': 'نعم (أنماط قوية)', 'TRACE': 'لا' },
          ],
        },
        pairwiseComparison: {
          title: 'المقارنة الثنائية (RTF مقابل الأطر الأخرى)',
          tableFormat: true,
          columns: ['المقارنة', 'الفائز', 'السبب'],
          rows: [
            { 'المقارنة': 'RTF مقابل CO-STAR', 'الفائز': 'CO-STAR (إذا كان الجمهور مهماً)', 'السبب': 'CO-STAR يتضمن حقول صريحة للجمهور والنبرة. RTF يُدمج النبرة في الدور أو التنسيق، مما يُصبح معقداً. إذا كانت الصوت لا يهمك، RTF أسرع.' },
            { 'المقارنة': 'RTF مقابل SPECS', 'الفائز': 'SPECS (إذا كانت قيود صارمة مطلوبة)', 'السبب': 'SPECS يتضمن حقل قيود مخصص ويتوقع أمثلة. RTF يمكنه طلب القيود في التنسيق لكنه يفتقر إلى صيغة منظمة. SPECS يفوز لـ JSON أو CSV أو البيانات المنظمة.' },
            { 'المقارنة': 'RTF مقابل TRACE', 'الفائز': 'TRACE (إذا كان الاستدلال مهماً)', 'السبب': 'TRACE يُنمذج السبب والنتيجة صراحةً (المُحفّز → الاستجابة → الإجراء → النتيجة). RTF لا يحتوي على حقل خطوة استدلال. استخدم TRACE للمنطق المعقد، RTF للمخرج البسيط.' },
            { 'المقارنة': 'RTF مقابل Chain-of-Thought', 'الفائز': 'متكاملان', 'السبب': 'RTF يُحدد الدور وتنسيق المخرج. CoT يُحسّن الاستدلال. ادمجهما: استخدم RTF لهيكلة البرومبت، وأضف "فكّر خطوة بخطوة" للرياضيات أو المنطق المعقد.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'كيفية كتابة برومبت RTF',
          numberedItems: [
            '**الدور: حدّد من يُؤدّي الذكاء الاصطناعي دوره.** الأدوار المحددة تتفوق على الأدوار العامة. سيئ: "أنت مفيد." جيد: "أنت مهندس خلفية أول تراجع الكود بحثاً عن انتكاسات الأداء." كلما كانت أكثر تحديداً، كان المخرج أكثر اتساقاً.',
            '**المهمة: أوضح ما يجب على الذكاء الاصطناعي فعله.** كن محدداً. سيئ: "لخّص هذا." جيد: "حدّد القرارات الثلاثة الرئيسية والمخاطر المفتوحة والخطوات التالية التي جرى نقاشها."',
            '**التنسيق: حدّد البنية والطول والأسلوب.** هنا يُضيف RTF القيمة. سيئ: (تنسيق مفقود). جيد: "3 نقاط، بحد أقصى 50 كلمة لكل منها، markdown، تحت 200 كلمة إجمالاً."',
            '**افصل المهمة والتنسيق.** ادمجهما في كتلة واحدة ولن يحظى أيٌّ منهما بتحديد كافٍ. احتفظ بهما متمايزين.',
            '**دائماً أدرج التنسيق، حتى عندما يبدو واضحاً.** بدونه، تستخدم النماذج النثر بشكل افتراضي.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: 'خمسة أمثلة حقيقية على RTF',
          content: ['فيما يلي خمسة برومبتات RTF جاهزة للإنتاج لسير العمل الشائعة:'],
        },
        example1: {
          title: 'المثال الأول: ملخص الحالة الأسبوعية',
          content: [
            '**الدور:** أنت مدير عمليات يكتب ملخص حالة أسبوعية للقيادة التنفيذية.',
            '**المهمة:** لخّص تقدم المشروع هذا الأسبوع والقرارات الرئيسية المتخذة والمخاطر المحددة وأولويات الأسبوع القادم.',
            '**التنسيق:** Markdown وأربعة أقسام (الملخص والقرارات والمخاطر والأسبوع القادم)، 3-5 نقاط لكل قسم، بحد أقصى 300 كلمة.',
          ],
        },
        example2: {
          title: 'المثال الثاني: تغذية راجعة لمراجعة الكود',
          content: [
            '**الدور:** أنت مهندس خلفية أول تراجع الكود للصيانة والأداء والأمان.',
            '**المهمة:** راجع هذه الكتلة البرمجية وحدّد أي مشكلات، واقترح تحسينات، وقيّم الجودة الإجمالية.',
            '**التنسيق:** Markdown وثلاثة أقسام (المشكلات الموجودة والتحسينات وتقييم الجودة 1-5)، وكتل كود للأمثلة.',
          ],
        },
        example3: {
          title: 'المثال الثالث: مسودة بريد إلكتروني للعميل',
          content: [
            '**الدور:** أنت مدير نجاح عملاء تصيغ رداً مهنياً ومتعاطفاً على شكوى عميل.',
            '**المهمة:** تناول مخاوفه، واعتذر حيثما يقتضي الأمر، واشرح الحل، وأعد بناء الثقة.',
            '**التنسيق:** تنسيق بريد إلكتروني (تحية وفقرتان إلى ثلاث فقرات وخاتمة)، نبرة مهنية، 150-250 كلمة.',
          ],
        },
        example4: {
          title: 'المثال الرابع: ملاحظات الاجتماع إلى عناصر العمل',
          content: [
            '**الدور:** أنت منسق مشاريع تستخرج عناصر العمل من ملاحظات الاجتماع الخام.',
            '**المهمة:** حدّد القرارات المتخذة والمخاطر المناقشة والخطوات التالية مع المسؤولين والمواعيد النهائية.',
            '**التنسيق:** Markdown مع ثلاثة أقسام (القرارات والمخاطر وعناصر العمل)، عناصر العمل كقوائم تحقق مع المُعيَّن والموعد النهائي.',
          ],
        },
        example5: {
          title: 'المثال الخامس: وثائق المنتج للمستخدمين غير التقنيين',
          content: [
            '**الدور:** أنت كاتب تقني تشرح ميزة للمستخدمين غير التقنيين بلغة بسيطة.',
            '**المهمة:** اشرح ما تفعله هذه الميزة ولماذا قد يستخدمها المستخدم وكيفية استخدامها في ثلاث خطوات بسيطة.',
            '**التنسيق:** جملة تقديمية واحدة وثلاث خطوات مرقّمة مع أمثلة وجملة خاتمة. تجنّب المصطلحات التقنية.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'دمج RTF مع أطر أخرى',
          content: [
            '**يجب دمج إطار RTF مع أطر أخرى بمعاملة RTF كخيارك الافتراضي الخفيف والانتقال إلى الأطر الأثقل عندما تزداد القيود.** نمط عملي هو:',
          ],
          items: [
            'ابدأ بـ RTF لمعظم المهام الجديدة حيث تحتاج فقط إلى بنية واضحة بسرعة.',
            'انتقل إلى SPECS عند الحاجة إلى مخططات صارمة وأمثلة وقيود.',
            'استخدم TRACE أو APE عندما تريد خطوات استدلال صريحة قبل الإجابة النهائية.',
            'استخدم أطراً إبداعية مثل CRAFT عندما يكون الجمهور والنبرة محوريَّين.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'الأخطاء الشائعة في RTF',
          mistakes: [
            {
              mistake: 'دور مبهم — "أنت مساعد مفيد"',
              problem: '"مساعد مفيد" هو الخيار الافتراضي. لا يُضيف شيئاً. الدور المبهم يعني أن النموذج يختار منظوره الخاص، والذي يتغير بين عمليات التشغيل.',
              fix: 'كن محدداً: "أنت مهندس خلفية أول" أو "أنت مدير تسويق B2B يُخاطب مديري مالية." كلما كان الدور أكثر تحديداً، كان المخرج أكثر اتساقاً.',
            },
            {
              mistake: 'مهمة مبهمة — "ساعدني في هذا"',
              problem: '"ساعدني في هذا" ليست مهمة. النموذج يخمن أي إجراء يتخذ وأي تفاصيل يُدرج وأيها يتجاهل. الغموض في المهمة يُنتج تباينات في المخرج.',
              fix: 'اكتب المهمة كإجراء محدد: "حدّد أهم ثلاثة مخاطر تقنية في خطة المشروع هذه" أو "اكتب ردّاً متابعة من 5 جمل لهذه الشكوى."',
            },
            {
              mistake: 'تنسيق مفقود',
              problem: 'بدون تنسيق، يختار النموذج الطول والبنية والأسلوب. هذا يُنتج تباينات بين عمليات التشغيل وعدم اتساق عند استخدام البرومبت نفسه عبر نماذج متعددة.',
              fix: 'دائماً أدرج التنسيق. حتى شيء بسيط مثل "Markdown و3 نقاط وتحت 150 كلمة" يُحسّن الاتساق بشكل ملحوظ.',
            },
            {
              mistake: 'دمج المهمة والتنسيق في جملة واحدة',
              problem: '"لخّص هذا في 3 نقاط" يدمج ما يجب فعله مع كيفية تنسيقه. إذا تغيرت المهمة، يضيع التنسيق. إذا تغير التنسيق، تصبح المهمة مربكة.',
              fix: 'احتفظ بهما منفصلَين: "المهمة: حدّد المخاطر. التنسيق: 3 نقاط، بحد أقصى 30 كلمة لكل منها."',
            },
          ],
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            { title: 'إطار CO-STAR: المكونات ومتى يُستخدم', url: '/ar/prompt-engineering/co-star-framework' },
            { title: 'إطار SPECS: برومبتات المواصفات الصارمة', url: '/ar/prompt-engineering/specs-framework' },
            { title: 'إطار TRACE: إظهار استدلال الذكاء الاصطناعي', url: '/ar/prompt-engineering/trace-framework' },
            { title: 'أي إطار برومبت يجب استخدامه؟', url: '/ar/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: 'كيف تختار النموذج الصحيح: GPT-5.5 مقابل Claude مقابل Gemini؟', url: '/ar/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'إطار CO-STAR', url: '/ar/prompt-engineering/co-star-framework' },
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
    pt: {
      theme: 'Frameworks',
      title: 'O Framework RTF: Papel, Tarefa, Formato (2026)',
      intro: 'O Framework RTF é uma estrutura de prompt leve de três componentes: Papel (quem é o modelo), Tarefa (o que fazer) e Formato (como produzir a saída). Funciona com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais. Use-o como padrão para tarefas rotineiras — resumos, revisões de código, e-mails, relatórios — e migre para CO-STAR ou SPECS somente quando precisar de mais estrutura.',
      publishDate: '2026-03-24',
      readTime: '6 min de leitura',
      seoTitle: 'Framework RTF: Estrutura de Prompt Papel, Tarefa, Formato',
      metaDescription: 'RTF = Papel + Tarefa + Formato. A estrutura de prompt de 3 campos que supera abordagens verbosas em tarefas rotineiras. Templates, exemplos e guia de migração.',
      ogDescription: 'RTF: framework de prompt de 3 componentes. Papel, Tarefa, Formato. Aprenda por quê.',
      twitterDescription: 'RTF = Papel + Tarefa + Formato. Estrutura de prompt mais simples para tarefas rotineiras. Por que equipes escolhem isso em vez de frameworks complexos.',
      leadAnswerBlock: '**RTF = Papel, Tarefa, Formato. Três componentes, zero sobrecarga. Defina quem é o modelo, o que deve fazer e como a resposta deve parecer. Use-o como padrão para tarefas rotineiras — resumos, revisões de código, e-mails, notas de reunião. Mude para CO-STAR quando tom/audiência importam, SPECS quando schema importa, TRACE quando raciocínio importa. RTF é o framework mais leve que ainda impõe estrutura.**',
      quickFacts: [
        'RTF = Papel + Tarefa + Formato — o framework de prompt estruturado mais leve (3 componentes vs 5-6 para CO-STAR/SPECS)',
        'Projetado para tarefas rotineiras e repetíveis: resumos, e-mails, revisões de código, notas de reunião',
        'Funciona com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais (Ollama, LM Studio)',
        'RTF é o framework de início recomendado — migre para CO-STAR, SPECS ou TRACE somente quando atingir uma limitação',
        'O campo Formato pode carregar restrições e exemplos, tornando RTF mais flexível do que seu número de 3 componentes sugere',
        'O PromptQuorum inclui RTF como framework integrado com despacho multi-modelo para 25+ modelos',
      ],
      toc: [
        { label: 'Principais Conclusões', anchor: 'key-takeaways' },
        { label: 'O que é o Framework RTF?', anchor: 'what-is-rtf-framework' },
        { label: 'Os Três Componentes RTF', anchor: 'three-components' },
        { label: 'Por que RTF é Útil', anchor: 'why-rtf-useful' },
        { label: 'Exemplo: Prompt RTF ruim vs bom', anchor: 'bad-vs-good' },
        { label: 'Quando Usar RTF', anchor: 'when-to-use' },
        { label: 'Quando RTF não é a Escolha Certa', anchor: 'when-not-to-use' },
        { label: 'Tabelas de Comparação', anchor: 'comparison-tables' },
        { label: 'Como Escrever um Prompt RTF', anchor: 'how-to-write' },
        { label: 'Cinco Exemplos Reais de RTF', anchor: 'five-examples' },
        { label: 'Combinando RTF com Outros Frameworks', anchor: 'combining-rtf' },
        { label: 'Erros Comuns de RTF', anchor: 'common-mistakes' },
        { label: 'Como o PromptQuorum Implementa RTF', anchor: 'promptquorum-implementation' },
        { label: 'Perguntas Frequentes', anchor: 'faq' },
        { label: 'Fontes', anchor: 'sources' },
      ],
      educationalLevel: 'Intermediate',
      audience: 'Desenvolvedores construindo aplicações LLM, gerentes de produto projetando fluxos de trabalho de IA, equipes construindo ferramentas com IA',
      primaryTerm: 'Framework RTF',
      aboutTopics: ['Prompting RTF', 'Frameworks de Prompt', 'Prompt Engineering'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'O Framework RTF: Papel, Tarefa, Formato (2026)',
        description: 'Como o Framework RTF (Papel, Tarefa, Formato) funciona, quando usá-lo e como o PromptQuorum oferece RTF como opção integrada.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/rtf-framework',
        inLanguage: 'pt-BR',
        keywords: ['Framework RTF', 'Papel Tarefa Formato', 'frameworks de prompt', 'prompt engineering', 'PromptQuorum', 'prompting LLM'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RTF' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Principais Conclusões',
          isTldr: true,
          items: [
            'RTF = Papel (quem é o modelo), Tarefa (o que fazer), Formato (como produzir a saída). Três componentes simples.',
            'Use RTF como padrão para tarefas rotineiras: resumos, revisões de código, e-mails, relatórios, notas de reunião.',
            'O campo Formato é onde RTF agrega mais valor — estrutura explícita produz saída dramaticamente mais consistente.',
            'RTF lida com 80% das tarefas LLM cotidianas. Migre para CO-STAR (tom/audiência), SPECS (restrições) ou TRACE (raciocínio) somente quando RTF atingir um limite.',
            'Prompts RTF bem escritos são templates reutilizáveis. Salve-os e reutilize 52 vezes por ano em vez de reescrever toda semana.',
            'Funciona com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais (Ollama, LM Studio).',
            'Use o PromptQuorum para testar o mesmo prompt RTF em vários modelos lado a lado.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'O que é o Framework RTF?',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF é um esqueleto de prompt de três partes — Papel, Tarefa, Formato — que dá ao modelo estrutura suficiente para tarefas rotineiras sem a sobrecarga de frameworks maiores.' },
            { type: 'in-plain-terms', text: 'Diga à IA quem ser (Papel), o que fazer (Tarefa) e como formatar a resposta (Formato). É isso. Três coisas. Funciona para 80% das tarefas cotidianas. Quando não for mais suficiente, você migra para CO-STAR ou SPECS.' },
          ],
          content: [
            '**O Framework RTF é um padrão de prompt de três partes que diz ao modelo quem ele é, o que fazer e exatamente como a resposta deve parecer.** Em vez de enviar uma pergunta solta, você especifica Papel, Tarefa e Formato explicitamente. Isso funciona com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais que você executa via Ollama ou LM Studio.',
            'RTF é intencionalmente mínimo. Com apenas três campos, é fácil de lembrar, rápido de preencher e flexível o suficiente para muitas tarefas cotidianas. Você pode tratá-lo como um "esqueleto de prompt padrão" sempre que não tiver certeza de qual framework especializado usar.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'Os Três Componentes RTF',
          content: [
            '**Um prompt RTF sólido define claramente cada um dos três componentes para que o modelo não tenha ambiguidade sobre seu trabalho.** Você pode escrevê-los como linhas rotuladas ou como uma frase que ainda contenha as três partes.',
            'Definições típicas:',
          ],
          items: [
            'Papel: A perspectiva ou experiência que o modelo deve adotar (por exemplo "Você é um analista de dados sênior").',
            'Tarefa: A ação concreta que você quer, descrita em uma ou duas frases.',
            'Formato: A estrutura, comprimento e estilo da saída (por exemplo "3 tópicos mais um resumo de 2 frases").',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Formato É o Diferencial',
              text: 'Papel e Tarefa são óbvios — a maioria das pessoas já diz o que quer. Formato é onde RTF agrega valor real. "3 tópicos, máx 50 palavras cada, markdown" produz saída dramaticamente mais consistente do que "me dê um resumo". O campo Formato é a arma secreta do RTF.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'Por que RTF é Útil',
          content: [
            '**O Framework RTF é útil porque lhe dá a maioria dos benefícios de frameworks mais complexos com quase nenhuma sobrecarga.** Ele força você a tomar três decisões — quem, o quê e como — antes de enviar um prompt.',
            'Vantagens práticas incluem:',
          ],
          items: [
            'Escrita de prompts mais rápida do que frameworks de múltiplas seções para trabalho rotineiro.',
            'Melhor consistência entre modelos e execuções, já que o formato é sempre explícito.',
            'Onboarding fácil para colegas de equipe que podem aprender RTF em alguns minutos e reutilizá-lo em todo lugar.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: 'Exemplo: Prompt RTF ruim vs bom',
          promptExamples: [
            {
              bad: 'Resuma esta reunião.',
              good: 'Papel: Você é um gerente de operações resumindo uma reunião de status do projeto para a liderança sênior. Tarefa: Leia a transcrição e identifique as principais decisões, riscos abertos e próximos passos discutidos na reunião. Formato: Produza um resumo em Markdown com três seções (`Decisões`, `Riscos`, `Próximos passos`). Em cada seção, use 3-5 tópicos. Mantenha o resumo total abaixo de 250 palavras.',
              badLabel: 'Solicitação não estruturada',
              goodLabel: 'Prompt RTF',
            },
          ],
          content: [
            'A versão RTF diz ao modelo exatamente como pensar sobre o conteúdo e como empacotar o resultado para que outros possam usá-lo imediatamente.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'Quando Usar RTF',
          content: [
            '**Você deve usar o Framework RTF quando quiser um padrão simples e reutilizável que ainda imponha clareza e estrutura.** É um bom padrão sempre que você não precisar de especificações longas ou rastros de raciocínio de múltiplos passos.',
            'Casos de uso típicos incluem:',
          ],
          items: [
            'Relatórios curtos, recapitulações e resumos para e-mails ou chat.',
            'Redigir respostas para clientes ou partes internas com estrutura clara.',
            'Gerar pequenos trechos de código ou refatorações com formato de saída especificado.',
            'Peças de conteúdo rápidas como descrições de produtos, entradas de FAQ ou listas de verificação simples.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'Quando RTF não é a Escolha Certa',
          tableFormat: true,
          columns: ['Cenário', 'Limitação do RTF', 'Use em vez disso'],
          rows: [
            { 'Cenário': 'Conteúdo voltado ao cliente onde tom e audiência são críticos', 'Limitação do RTF': 'Sem campo explícito de Audiência ou Tom', 'Use em vez disso': 'CO-STAR (inclui Estilo, Audiência, Tom) ou CRAFT (Restrições, Papel, Audiência, Formato, Tom)' },
            { 'Cenário': 'Imposição estrita de estrutura ou schema de dados necessária', 'Limitação do RTF': 'Campo Formato pode solicitar JSON mas não oferece sintaxe de restrições', 'Use em vez disso': 'SPECS (inclui campo de Restrições explícito)' },
            { 'Cenário': 'Raciocínio de múltiplos passos ou lógica de decisão necessária', 'Limitação do RTF': 'Sem campo de raciocínio passo a passo explícito', 'Use em vez disso': 'TRACE (inclui Gatilho, Resposta, Ação, Consequência, Avaliação)' },
            { 'Cenário': 'Fluxos de trabalho complexos com lógica condicional', 'Limitação do RTF': 'Único Papel/Tarefa/Formato por prompt', 'Use em vez disso': 'APE (Ação, Processo, Exemplos) ou fluxos de trabalho multi-turno personalizados' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: 'Tabelas de Comparação',
          content: [
            '**Como RTF se compara com outros frameworks principais:**',
          ],
        },
        dimensionComparison: {
          title: 'Comparação por Dimensão',
          tableFormat: true,
          columns: ['Dimensão', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { 'Dimensão': 'Número de campos', 'RTF': '3 (Papel, Tarefa, Formato)', 'CO-STAR': '6 (Contexto, Objetivo, Estilo, Audiência, Resposta, Tom)', 'SPECS': '5 (Configurações, Persona, Exemplos, Padrão, Restrições)', 'TRACE': '5 (Gatilho, Resposta, Ação, Consequência, Avaliação)' },
            { 'Dimensão': 'Tempo de configuração', 'RTF': '30 segundos', 'CO-STAR': '2-3 minutos', 'SPECS': '3-5 minutos', 'TRACE': '2-3 minutos' },
            { 'Dimensão': 'Melhor para', 'RTF': 'Tarefas rotineiras e repetíveis', 'CO-STAR': 'Controle de tom e audiência', 'SPECS': 'Schemas e restrições rígidas', 'TRACE': 'Passos de raciocínio explícitos' },
            { 'Dimensão': 'Consistência da saída', 'RTF': 'Boa', 'CO-STAR': 'Excelente', 'SPECS': 'Excelente', 'TRACE': 'Boa' },
            { 'Dimensão': 'Requer exemplos?', 'RTF': 'Não', 'CO-STAR': 'Opcional', 'SPECS': 'Sim (padrões sólidos)', 'TRACE': 'Não' },
          ],
        },
        pairwiseComparison: {
          title: 'Comparação em Pares (RTF vs Outros)',
          tableFormat: true,
          columns: ['Comparação', 'Vencedor', 'Por quê'],
          rows: [
            { 'Comparação': 'RTF vs CO-STAR', 'Vencedor': 'CO-STAR (se audiência importa)', 'Por quê': 'CO-STAR inclui campos explícitos de Audiência e Tom. RTF força o tom no Papel ou Formato, o que fica complicado. Se você não se importa com voz, RTF é mais rápido.' },
            { 'Comparação': 'RTF vs SPECS', 'Vencedor': 'SPECS (se restrições rígidas são necessárias)', 'Por quê': 'SPECS inclui um campo de Restrições dedicado e espera exemplos. RTF pode solicitar restrições no Formato mas carece de sintaxe estruturada. SPECS vence para JSON, CSV ou dados estruturados.' },
            { 'Comparação': 'RTF vs TRACE', 'Vencedor': 'TRACE (se raciocínio importa)', 'Por quê': 'TRACE modela explicitamente causa e efeito (Gatilho → Resposta → Ação → Consequência). RTF não tem campo de passos de raciocínio. Use TRACE para lógica complexa, RTF para saída simples.' },
            { 'Comparação': 'RTF vs Chain-of-Thought', 'Vencedor': 'Complementares', 'Por quê': 'RTF define papel e formato de saída. CoT melhora o raciocínio. Combine-os: use RTF para estruturar o prompt, adicione "pense passo a passo" para matemática ou lógica complexas.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'Como Escrever um Prompt RTF',
          numberedItems: [
            '**Papel: Defina quem a IA está desempenhando.** Papéis específicos superam genéricos. Ruim: "Você é útil." Bom: "Você é um engenheiro backend sênior revisando código por regressões de desempenho." Quanto mais específico, mais consistente a saída.',
            '**Tarefa: Declare o que a IA deve fazer.** Seja concreto. Ruim: "Resuma isso." Bom: "Identifique as três principais decisões, riscos abertos e próximos passos discutidos."',
            '**Formato: Especifique estrutura, comprimento e estilo.** É aqui que RTF agrega valor. Ruim: (Formato ausente). Bom: "3 tópicos, máx 50 palavras cada, markdown, abaixo de 200 palavras no total."',
            '**Separe Tarefa e Formato.** Misture-os em um bloco e nenhum fica com especificidade suficiente. Mantenha-os distintos.',
            '**Sempre inclua Formato, mesmo quando parecer óbvio.** Sem ele, os modelos padrão para parágrafos em prosa.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: 'Cinco Exemplos Reais de RTF',
          content: ['Aqui estão cinco prompts RTF prontos para produção para fluxos de trabalho comuns:'],
        },
        example1: {
          title: 'Exemplo 1: Resumo de Status Semanal',
          content: [
            '**Papel:** Você é um gerente de operações escrevendo um resumo de status semanal para a liderança executiva.',
            '**Tarefa:** Resuma o progresso do projeto desta semana, as principais decisões tomadas, os riscos identificados e as prioridades da próxima semana.',
            '**Formato:** Markdown, quatro seções (Resumo, Decisões, Riscos, Próxima Semana), 3-5 tópicos por seção, máx 300 palavras.',
          ],
        },
        example2: {
          title: 'Exemplo 2: Feedback de Revisão de Código',
          content: [
            '**Papel:** Você é um engenheiro backend sênior revisando código por manutenibilidade, desempenho e segurança.',
            '**Tarefa:** Revise este bloco de código e identifique quaisquer problemas, sugira melhorias e avalie a qualidade geral.',
            '**Formato:** Markdown, três seções (Problemas Encontrados, Melhorias, Avaliação de Qualidade 1-5), blocos de código para exemplos.',
          ],
        },
        example3: {
          title: 'Exemplo 3: Rascunho de E-mail ao Cliente',
          content: [
            '**Papel:** Você é um gerente de sucesso do cliente redigindo uma resposta profissional e empática a uma reclamação do cliente.',
            '**Tarefa:** Aborde a preocupação, peça desculpas quando apropriado, explique a resolução e restaure a confiança.',
            '**Formato:** Formato de e-mail (saudação, 2-3 parágrafos, fechamento), tom profissional, 150-250 palavras.',
          ],
        },
        example4: {
          title: 'Exemplo 4: Notas de Reunião para Itens de Ação',
          content: [
            '**Papel:** Você é um coordenador de projetos extraindo itens de ação de notas de reunião brutas.',
            '**Tarefa:** Identifique as decisões tomadas, os riscos discutidos e os próximos passos com responsáveis e prazos.',
            '**Formato:** Markdown com três seções (Decisões, Riscos, Itens de Ação), itens de ação como listas de verificação com responsável e data de vencimento.',
          ],
        },
        example5: {
          title: 'Exemplo 5: Documentação de Produto para Usuários Não Técnicos',
          content: [
            '**Papel:** Você é um redator técnico explicando um recurso a usuários não técnicos em linguagem simples.',
            '**Tarefa:** Explique o que este recurso faz, por que eles podem querer usá-lo e como usá-lo em três passos simples.',
            '**Formato:** 1 frase de introdução, 3 passos numerados com exemplos, 1 frase de conclusão. Evite jargão.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'Combinando RTF com Outros Frameworks',
          content: [
            '**Você deve combinar o Framework RTF com outros frameworks tratando RTF como seu padrão leve e mudando para frameworks mais pesados quando as restrições aumentam.** Um padrão prático é:',
          ],
          items: [
            'Comece com RTF para a maioria das novas tarefas onde você só precisa de estrutura clara rapidamente.',
            'Mova para SPECS quando precisar de schemas rígidos, exemplos e restrições.',
            'Use TRACE ou APE quando quiser passos de raciocínio explícitos antes da resposta final.',
            'Use frameworks criativos como CRAFT quando audiência e tom forem centrais.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erros Comuns de RTF',
          mistakes: [
            {
              mistake: 'Papel vago — "Você é um assistente útil"',
              problem: '"Assistente útil" é o padrão. Não acrescenta nada. Um papel vago significa que o modelo escolhe sua própria perspectiva, que varia entre execuções.',
              fix: 'Seja específico: "Você é um engenheiro backend sênior" ou "Você é um gerente de marketing B2B focado em CFOs." Quanto mais específico o papel, mais consistente a saída.',
            },
            {
              mistake: 'Tarefa e Formato misturados em um blob',
              problem: '"Resuma esta reunião em tópicos" conflate tarefa e formato. Quando misturados, nenhum fica com especificidade suficiente.',
              fix: 'Separe-os: Tarefa = "Identifique decisões, riscos e próximos passos." Formato = "Markdown, 3 seções, 3-5 tópicos cada, abaixo de 250 palavras."',
            },
            {
              mistake: 'Formato completamente ausente',
              problem: 'Sem um campo de Formato explícito, o modelo padrão para parágrafos em prosa — que pode não ser o que você precisa.',
              fix: 'Sempre especifique o Formato. Mesmo "Formato: 3 tópicos" é melhor do que nada.',
            },
            {
              mistake: 'Usar RTF para tarefas que precisam de controle de audiência/tom',
              problem: 'RTF não tem campo de Audiência ou Tom. Se você está escrevendo conteúdo voltado ao cliente onde a voz importa, RTF força você a colocar o tom no Papel ou Formato.',
              fix: 'Mude para CRAFT (que tem campos explícitos de Audiência e Tom) ou CO-STAR quando a voz importar.',
            },
            {
              mistake: 'Nunca salvar prompts RTF como templates',
              problem: 'Escrever o mesmo prompt RTF de "resumo de reunião" do zero toda semana desperdiça tempo e introduz inconsistência.',
              fix: 'Salve prompts RTF funcionando como templates nomeados no PromptQuorum. Reutilize-os trocando apenas os dados de entrada.',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'Como o PromptQuorum Implementa o Framework RTF',
          content: [
            '**O PromptQuorum é uma ferramenta de despacho de IA multi-modelo que inclui o Framework RTF como uma de suas estruturas de prompt integradas para que os usuários possam aplicar prompting Papel–Tarefa–Formato de maneira consistente.** Quando você escolhe a opção RTF no PromptQuorum, a interface expõe campos para Papel, Tarefa e Formato e os monta em uma única instrução bem formada.',
            'No PromptQuorum, o Framework RTF permite que você:',
          ],
          items: [
            'Preencha Papel, Tarefa e Formato uma vez e envie o mesmo prompt estruturado para 25+ modelos como GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais configurados via Ollama ou LM Studio.',
            'Salve prompts RTF como templates para fluxos de trabalho recorrentes — por exemplo "resumo de status semanal", "rascunho de resposta ao cliente" ou "recapitulação de bug report".',
            'Compartilhe templates RTF com sua equipe para que mesmo não especialistas possam criar prompts que produzam saídas consistentes e estruturadas.',
            'Teste o mesmo prompt RTF em vários modelos lado a lado para encontrar o melhor para seu caso de uso.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas Frequentes',
          id: 'faq',
          faqs: [
            {
              q: 'O que significa RTF?',
              a: 'RTF significa Papel (Role), Tarefa (Task), Formato (Format) — uma estrutura de prompt de três partes onde Papel define quem o modelo deve ser, Tarefa especifica o que o modelo deve fazer, e Formato descreve a estrutura da saída desejada.',
            },
            {
              q: 'Como RTF é diferente de CO-STAR?',
              a: 'RTF é mínimo e focado em três campos: Papel, Tarefa, Formato. CO-STAR é mais abrangente, adicionando Contexto, Estilo, Audiência e Tom. Use RTF para tarefas rápidas e diretas; use CO-STAR quando audiência e tom importam.',
            },
            {
              q: 'Quando devo usar RTF?',
              a: 'Use RTF quando precisar de saída estruturada de um papel claramente definido. Exemplos: resumir reuniões, gerar código, escrever e-mails em formato específico ou criar documentação. RTF é ideal para fluxos de trabalho baseados em templates.',
            },
            {
              q: 'Posso combinar RTF com outros frameworks?',
              a: 'Sim. Você pode usar RTF para geração de saída inicial, então aplicar RISEN para refinamento iterativo. Ou combine RTF com Chain-of-Thought para adicionar raciocínio. Misture e combine frameworks para fluxos de trabalho complexos.',
            },
            {
              q: 'O RTF funciona com todos os modelos de linguagem?',
              a: 'Sim. RTF é agnóstico quanto ao framework. Funciona com GPT-5.5, Claude, Gemini, modelos open-source como Llama 3.2 e modelos locais via Ollama ou LM Studio. Os princípios se aplicam universalmente a qualquer LLM que siga instruções.',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/pt/prompt-engineering/chain-of-thought-prompting' },
            { title: 'O que é Prompt Engineering?', url: '/pt/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Framework CO-STAR', url: '/pt/prompt-engineering/co-star-framework' },
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
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Framework RTF : Role, Task, Format (2026)',
      intro: 'Le Framework RTF est une structure de prompt légère à trois composants : Role (qui est le modèle), Task (quoi faire) et Format (comment formater la sortie). Il fonctionne sur GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux. Utilisez-le par défaut pour les tâches courantes — résumés, revues de code, e-mails, rapports — et passez à CO-STAR ou SPECS uniquement si vous avez besoin de plus de structure.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6 min de lecture',
      seoTitle: 'Framework RTF: Role, Task, Format Prompt Structure',
      metaDescription: 'Framework prompt RTF: Role (qui), Task (quoi), Format (comment). Trois composants pour tâches courantes. Comparatif vs CO-STAR, SPECS, TRACE, APE.',
      educationalLevel: 'Intermediate',
      audience: 'Développeurs créant des applications LLM, gestionnaires de produit, équipes construisant des outils alimentés par l\'IA',
      primaryTerm: 'Framework RTF',
      aboutTopics: ['Prompting RTF', 'Frameworks de Prompts', 'Ingénierie des Prompts'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Framework RTF : Role, Task, Format (2026)',
        description: 'Le Framework RTF (Rôle, Tâche, Format) expliqué : son fonctionnement, quand l\'utiliser, et comment PromptQuorum l\'offre comme option intégrée.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/rtf-framework',
        inLanguage: 'fr',
        keywords: ['Framework RTF', 'Rôle Tâche Format', 'Frameworks de prompts', 'Ingénierie des prompts', 'PromptQuorum', 'Prompting LLM'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RTF' },
          { '@type': 'Thing', name: 'Frameworks de Prompts' },
          { '@type': 'Thing', name: 'Ingénierie des Prompts' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
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
            name: 'Qu\'est-ce que le Framework RTF ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF = Role, Task, Format. Une structure de prompt à trois composants : Role définit qui est le modèle (par exemple « analyste de données senior »), Task indique quoi faire, et Format précise comment la sortie doit être structurée. Fonctionne sur tous les modèles majeurs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quand dois-je utiliser RTF au lieu de CO-STAR ou SPECS ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utilisez RTF pour les tâches courantes et répétables (résumés, revues de code, e-mails, rapports). Passez à CO-STAR quand le ton et l\'audience sont critiques, à SPECS quand vous avez besoin de schémas stricts, et à TRACE quand la transparence du raisonnement compte.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF est-il la même chose que « simplement dire au modèle quoi faire » ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. RTF impose la spécification explicite de trois éléments : qui est le modèle (Role), quelle tâche il résout, et comment la sortie doit être structurée (Format). Cette structure élimine l\'ambiguïté et améliore la cohérence sur les modèles et les exécutions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment RTF se compare-t-il à Chain-of-Thought ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-Thought améliore le raisonnement en demandant aux modèles de « penser étape par étape ». RTF structure le format de sortie et le rôle. Ils sont complémentaires — vous pouvez les combiner : utilisez RTF pour définir le rôle et le format, puis ajoutez « penser étape par étape » pour les tâches complexes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser RTF avec des modèles locaux comme Ollama ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. RTF fonctionne avec n\'importe quel LLM, y compris les modèles locaux exécutés via Ollama ou LM Studio. Les modèles plus simples peuvent être moins cohérents avec des champs Format complexes, mais RTF améliore toujours la qualité de sortie.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle est l\'erreur RTF la plus courante ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Laisser le Format implicite ou vague. Sans champ Format explicite (par exemple « 3 points à retenir, max 50 mots chacun »), les modèles par défaut produisent des paragraphes en prose. Spécifiez toujours le Format.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment RTF aide-t-il à la cohérence ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En spécifiant explicitement Role, Task et Format, vous réduisez l\'ambiguïté du modèle. Cela rend la sortie plus cohérente sur les modèles, les exécutions et les collègues réutilisant le prompt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dois-je enregistrer les prompts RTF ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Un bon prompt RTF pour une tâche récurrente (résumé hebdomadaire, revue de code, brouillon d\'e-mail) doit être enregistré comme modèle et réutilisé. C\'est l\'avantage majeur de RTF par rapport à écrire des prompts à partir de zéro.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF peut-il imposer des contraintes strictes comme la sortie JSON ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Partiellement. RTF peut demander « format JSON » dans le champ Format, et les modèles modernes (GPT-5.5, Claude) s\'y conforment généralement. Pour 100% d\'imposition stricte de schéma, utilisez SPECS ou les APIs de sortie structurée.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment PromptQuorum utilise RTF ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PromptQuorum inclut RTF comme modèle de framework intégré. Les utilisateurs remplissent les champs Role, Task et Format, et PromptQuorum distribue le même prompt sur 25+ modèles pour comparaison et tests A/B.',
            },
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Points clés',
          isTldr: true,
          items: [
            'RTF = Role (qui est le modèle), Task (quoi faire), Format (comment formater). Trois composants simples.',
            'Utilisez RTF comme défaut pour les tâches courantes : résumés, revues de code, e-mails, rapports, notes de réunion.',
            'Le champ Format est la force de RTF — une structure explicite produit une sortie dramatiquement plus cohérente.',
            'RTF gère 80% des tâches LLM quotidiennes. Passez à CO-STAR (ton/audience), SPECS (contraintes) ou TRACE (raisonnement) seulement si RTF atteint ses limites.',
            'Les bons prompts RTF sont des modèles réutilisables. Enregistrez-les et réutilisez 52 fois par an au lieu de les réécrire chaque semaine.',
            'Fonctionne sur GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux (Ollama, LM Studio).',
            'Utilisez PromptQuorum pour tester le même prompt RTF sur plusieurs modèles côte à côte.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'Qu\'est-ce que le Framework RTF ?',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF est un squelette de prompt à trois parties — Role, Task, Format — qui donne au modèle juste assez de structure pour les tâches courantes sans surcharge des frameworks plus larges.' },
            { type: 'in-plain-terms', text: 'Dites à l\'IA qui être (Role), quoi faire (Task) et comment formater la réponse (Format). C\'est tout. Trois choses. Fonctionne pour 80% des tâches quotidiennes. Quand ce n\'est plus suffisant, passez à CO-STAR ou SPECS.' },
          ],
          content: [
            '**Le Framework RTF est un modèle de prompt à trois parties qui dit au modèle qui il est, quoi faire et exactement comment la réponse doit ressembler.** Au lieu d\'envoyer une question vague, vous spécifiez explicitement Role, Task et Format. Cela fonctionne sur GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux que vous exécutez via Ollama ou LM Studio.',
            'RTF est volontairement minimal. Avec seulement trois champs, c\'est facile à retenir, rapide à remplir et flexible pour de nombreuses tâches quotidiennes. Vous pouvez le traiter comme un « squelette de prompt par défaut » quand vous ne savez pas quel framework spécialisé utiliser.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'Les trois composants RTF',
          content: [
            '**Un bon prompt RTF définit clairement chacun des trois composants pour que le modèle n\'ait aucune ambiguïté sur sa tâche.** Vous pouvez les écrire sous forme de lignes étiquetées ou comme une phrase contenant tous les trois éléments.',
            'Définitions typiques :',
          ],
          items: [
            'Role : La perspective ou l\'expertise que le modèle doit adopter (par exemple « Vous êtes un analyste de données senior »).',
            'Task : L\'action concrète que vous voulez, décrite en une ou deux phrases.',
            'Format : La structure, la longueur et le style de la sortie (par exemple « 3 points clés plus un résumé de 2 phrases »).',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Format est la partie cruciale',
              text: 'Role et Task sont évidents — la plupart des gens disent déjà ce qu\'ils veulent. Format est où RTF crée vraiment de la valeur. « 3 points clés, max 50 mots chacun, Markdown » produit une sortie dramatiquement plus cohérente que « donnez-moi un résumé ». Le champ Format est l\'arme secrète de RTF.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'Pourquoi RTF est utile',
          content: [
            '**Le Framework RTF est utile parce qu\'il vous donne la plupart des avantages des frameworks plus complexes avec presque aucune surcharge.** Il vous force à prendre trois décisions — qui, quoi et comment — avant d\'envoyer le prompt.',
            'Avantages pratiques :',
          ],
          items: [
            'Écriture de prompts plus rapide que les frameworks multi-sections pour le travail courant.',
            'Meilleure cohérence sur les modèles et exécutions, car le format est toujours explicite.',
            'Onboarding facile pour les collègues qui peuvent apprendre RTF en quelques minutes et le réutiliser partout.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: 'Exemple : mauvais vs bon prompt RTF',
          promptExamples: [
            {
              bad: 'Résumez cette réunion.',
              good: 'Role : Vous êtes un responsable des opérations résumant une réunion de statut de projet pour la direction. Task : Lisez la transcription et identifiez les décisions clés, les risques ouverts et les prochaines étapes discutées. Format : Sortez un résumé Markdown avec trois sections (`Décisions`, `Risques`, `Prochaines étapes`). Sous chaque section, utilisez 3–5 points clés. Gardez le résumé total sous 250 mots.',
              badLabel: 'Demande non structurée',
              goodLabel: 'Prompt RTF',
            },
          ],
          content: [
            'La version RTF dit exactement au modèle comment réfléchir au contenu et comment empaqueter le résultat pour que d\'autres puissent l\'utiliser immédiatement.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'Quand utiliser RTF',
          content: [
            '**Vous devez utiliser le Framework RTF quand vous voulez un modèle simple et réutilisable qui impose toujours la clarté et la structure.** C\'est un excellent choix par défaut quand vous n\'avez pas besoin de longues spécifications ou de traces multi-étapes.',
            'Cas d\'usage typiques :',
          ],
          items: [
            'Rapports courts, résumés et synthèses pour e-mail ou chat.',
            'Rédaction de réponses aux clients ou parties prenantes internes avec structure claire.',
            'Génération de petits extraits de code ou refactorisations avec un format de sortie spécifié.',
            'Contenus rapides comme descriptions de produits, entrées FAQ ou listes de contrôle simples.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'Quand RTF n\'est pas le bon choix',
          tableFormat: true,
          columns: ['Scénario', 'Limitation RTF', 'Utilisez plutôt'],
          rows: [
            { 'Scénario': 'Contenu destiné aux clients où le ton et l\'audience sont critiques', 'Limitation RTF': 'Pas de champ Audience ou Tone explicite', 'Utilisez plutôt': 'CO-STAR (avec Style, Audience, Tone) ou CRAFT (Constraints, Role, Audience, Format, Tone)' },
            { 'Scénario': 'Imposition stricte de structure ou schéma de données requise', 'Limitation RTF': 'Le champ Format peut demander JSON mais n\'offre pas de syntaxe de contrainte', 'Utilisez plutôt': 'SPECS (avec champ Constraints explicite)' },
            { 'Scénario': 'Raisonnement multi-étapes ou logique de décision requise', 'Limitation RTF': 'Pas de champ raisonnement étape par étape explicite', 'Utilisez plutôt': 'TRACE (avec Trigger, Response, Action, Consequence, Evaluation)' },
            { 'Scénario': 'Workflows complexes avec logique conditionnelle', 'Limitation RTF': 'Role/Task/Format unique par prompt', 'Utilisez plutôt': 'APE (Action, Process, Examples) ou workflows multi-turn personnalisés' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: 'Tableaux comparatifs',
          content: [
            '**Comment RTF se compare aux autres frameworks majeurs :**',
          ],
        },
        dimensionComparison: {
          title: 'Comparaison par dimension',
          tableFormat: true,
          columns: ['Dimension', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { 'Dimension': 'Nombre de champs', 'RTF': '3 (Role, Task, Format)', 'CO-STAR': '6 (Context, Objective, Style, Audience, Response, Tone)', 'SPECS': '5 (Settings, Person, Examples, Pattern, Constraints)', 'TRACE': '5 (Trigger, Response, Action, Consequence, Evaluation)' },
            { 'Dimension': 'Temps de configuration', 'RTF': '30 secondes', 'CO-STAR': '2–3 minutes', 'SPECS': '3–5 minutes', 'TRACE': '2–3 minutes' },
            { 'Dimension': 'Meilleur pour', 'RTF': 'Tâches courantes répétables', 'CO-STAR': 'Contrôle du ton et de l\'audience', 'SPECS': 'Schémas et contraintes stricts', 'TRACE': 'Étapes de raisonnement explicites' },
            { 'Dimension': 'Cohérence de sortie', 'RTF': 'Bonne', 'CO-STAR': 'Excellente', 'SPECS': 'Excellente', 'TRACE': 'Bonne' },
            { 'Dimension': 'Exemples requis ?', 'RTF': 'Non', 'CO-STAR': 'Optionnel', 'SPECS': 'Oui (modèles forts)', 'TRACE': 'Non' },
          ],
        },
        pairwiseComparison: {
          title: 'Comparaison par paires (RTF vs autres)',
          tableFormat: true,
          columns: ['Comparaison', 'Gagnant', 'Pourquoi'],
          rows: [
            { 'Comparaison': 'RTF vs CO-STAR', 'Gagnant': 'CO-STAR (si l\'audience compte)', 'Pourquoi': 'CO-STAR a des champs Audience et Tone explicites. RTF force le ton dans Role ou Format, ce qui devient lourd. Si la voix ne compte pas, RTF est plus rapide.' },
            { 'Comparaison': 'RTF vs SPECS', 'Gagnant': 'SPECS (si contraintes strictes requises)', 'Pourquoi': 'SPECS a un champ Constraints dédié et attend des exemples. RTF peut demander des contraintes dans Format mais n\'a pas de syntaxe structurée. SPECS gagne pour JSON, CSV ou données structurées.' },
            { 'Comparaison': 'RTF vs TRACE', 'Gagnant': 'TRACE (si raisonnement compte)', 'Pourquoi': 'TRACE modélise cause-effet explicitement (Trigger → Response → Action → Consequence). RTF n\'a pas de champ étapes de raisonnement. Utilisez TRACE pour logique complexe, RTF pour sortie simple.' },
            { 'Comparaison': 'RTF vs Chain-of-Thought', 'Gagnant': 'Complémentaires', 'Pourquoi': 'RTF définit rôle et format de sortie. CoT améliore le raisonnement. Combinez-les : utilisez RTF pour structurer le prompt, ajoutez « penser étape par étape » pour mathématiques ou logique complexe.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'Comment écrire un prompt RTF',
          numberedItems: [
            '**Role : Définissez qui l\'IA joue.** Les rôles spécifiques battent les génériques. Mauvais : « Vous êtes utile. » Bon : « Vous êtes un ingénieur backend senior examinant le code pour les régressions de performance. » Plus spécifique le rôle, plus cohérente la sortie.',
            '**Task : Indiquez quoi faire.** Soyez concret. Mauvais : « Résumez ceci. » Bon : « Identifiez les trois décisions clés, risques ouverts et prochaines étapes discutées. »',
            '**Format : Spécifiez structure, longueur et style.** C\'est où RTF crée de la valeur. Mauvais : (pas de Format). Bon : « 3 points clés, max 50 mots chacun, Markdown, sous 200 mots total. »',
            '**Séparez Task et Format.** Fusionnez-les en pâte et aucun n\'obtient assez de spécificité. Gardez-les distincts.',
            '**Incluez toujours Format, même quand évident.** Sans champ Format explicite, les modèles défaut aux paragraphes en prose.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: 'Cinq exemples RTF réels',
          content: ['Voici cinq prompts RTF prêts pour la production pour des workflows courants :'],
        },
        example1: {
          title: 'Exemple 1 : Résumé de statut hebdomadaire',
          content: [
            '**Role :** Vous êtes un responsable des opérations rédigeant un résumé de statut hebdomadaire pour la direction.',
            '**Task :** Résumez la progression du projet cette semaine, les décisions clés prises, les risques identifiés et les priorités de la semaine prochaine.',
            '**Format :** Markdown, quatre sections (Résumé, Décisions, Risques, Semaine prochaine), 3–5 points clés par section, 300 mots max.',
          ],
        },
        example2: {
          title: 'Exemple 2 : Retours de revue de code',
          content: [
            '**Role :** Vous êtes un ingénieur backend senior examinant le code pour maintenabilité, performance et sécurité.',
            '**Task :** Examinez ce bloc de code, identifiez les problèmes, suggérez des améliorations et évaluez la qualité globale.',
            '**Format :** Markdown, trois sections (Problèmes trouvés, Améliorations, Évaluation de qualité 1–5), blocs de code pour exemples.',
          ],
        },
        example3: {
          title: 'Exemple 3 : Brouillon d\'e-mail client',
          content: [
            '**Role :** Vous êtes un gestionnaire de succès client rédigeant une réponse professionnelle et empathique à une plainte client.',
            '**Task :** Abordez leur préoccupation, excusez-vous où approprié, expliquez la résolution et restaurez la confiance.',
            '**Format :** Format e-mail (salutation, 2–3 paragraphes, fermeture), ton professionnel, 150–250 mots.',
          ],
        },
        example4: {
          title: 'Exemple 4 : Notes de réunion vers éléments d\'action',
          content: [
            '**Role :** Vous êtes un coordinateur de projet extrayant des éléments d\'action de notes de réunion brutes.',
            '**Task :** Identifiez les décisions prises, les risques discutés et les prochaines étapes avec propriétaires et échéances.',
            '**Format :** Markdown avec trois sections (Décisions, Risques, Éléments d\'action), éléments d\'action sous forme de listes à cocher avec assignataire et date limite.',
          ],
        },
        example5: {
          title: 'Exemple 5 : Documentation produit pour utilisateurs non-techniques',
          content: [
            '**Role :** Vous êtes un rédacteur technique expliquant une fonction aux utilisateurs non-techniques en langage simple.',
            '**Task :** Expliquez ce que cette fonction fait, pourquoi les utilisateurs pourraient l\'utiliser et comment l\'utiliser en trois étapes simples.',
            '**Format :** 1 phrase intro, 3 étapes numérotées avec exemples, 1 phrase conclusion. Évitez le jargon.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'Combiner RTF avec d\'autres frameworks',
          content: [
            '**Vous devez combiner le Framework RTF avec d\'autres frameworks en traitant RTF comme votre choix léger par défaut et en changeant vers des frameworks plus lourds quand les contraintes augmentent.** Un modèle pratique est :',
          ],
          items: [
            'Commencez par RTF pour la plupart des nouvelles tâches où vous avez juste besoin de structure claire rapidement.',
            'Passez à SPECS quand vous avez besoin de schémas stricts, d\'exemples et de contraintes.',
            'Utilisez TRACE ou APE quand vous voulez des étapes de raisonnement explicites avant la réponse finale.',
            'Utilisez des frameworks créatifs comme CRAFT quand l\'audience et le ton sont centraux.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erreurs RTF courantes',
          mistakes: [
            {
              mistake: 'Role vague — « Vous êtes un assistant utile »',
              problem: '« Assistant utile » est le défaut. Cela n\'ajoute rien. Un rôle vague signifie que le modèle choisit sa propre perspective, qui varie entre exécutions.',
              fix: 'Soyez spécifique : « Vous êtes un ingénieur backend senior » ou « Vous êtes un gestionnaire marketing B2B ciblant les CFO ». Plus spécifique le rôle, plus cohérente la sortie.',
            },
            {
              mistake: 'Task et Format fusionnés en pâte',
              problem: '« Résumez cette réunion en points clés » mélange Task et Format. Quand fusionnés, ni l\'un ni l\'autre n\'obtient assez de spécificité.',
              fix: 'Séparez : Task = « Identifiez les décisions, risques et prochaines étapes. » Format = « Markdown, 3 sections, 3–5 points clés chacun, sous 250 mots. »',
            },
            {
              mistake: 'Complètement omettre le Format',
              problem: 'Sans champ Format explicite, le modèle défaut aux paragraphes prose — ce que vous pourriez ne pas vouloir. C\'est la #1 cause de « l\'IA m\'a donné un mur de texte. »',
              fix: 'Spécifiez toujours Format. Même « Format : 3 points clés » est mieux que rien.',
            },
            {
              mistake: 'Utiliser RTF pour des tâches nécessitant contrôle d\'audience/ton',
              problem: 'RTF n\'a pas de champ Audience ou Tone. Si vous écrivez pour clients où la voix compte, RTF vous force à remplir le ton dans Role ou Format, ce qui devient lourd.',
              fix: 'Passez à CRAFT (qui a des champs Audience et Tone explicites) ou CO-STAR (qui sépare Style et Audience) quand la voix compte.',
            },
            {
              mistake: 'Ne jamais enregistrer les prompts RTF comme modèles',
              problem: 'Écrire le même prompt RTF « résumé de réunion » à partir de zéro chaque semaine gaspille du temps et introduit de l\'incohérence.',
              fix: 'Enregistrez les bons prompts RTF comme modèles nommés dans PromptQuorum. Réutilisez-les en changeant seulement les données d\'entrée.',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'Comment PromptQuorum implémente RTF',
          content: [
            '**PromptQuorum est un outil de dispatch multi-modèle IA qui inclut le Framework RTF comme l\'une de ses structures de prompt intégrées pour que les utilisateurs appliquent le prompting Role–Task–Format de façon cohérente.** Quand vous choisissez l\'option RTF dans PromptQuorum, l\'interface expose les champs pour Role, Task et Format et les assemble en une instruction bien formée.',
            'Dans PromptQuorum, le Framework RTF vous permet :',
          ],
          items: [
            'Remplissez Role, Task et Format une fois et envoyez le même prompt structuré à 25+ modèles comme GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux configurés via Ollama ou LM Studio.',
            'Enregistrez les prompts RTF comme modèles pour des workflows récurrents — par exemple « résumé de statut hebdomadaire », « brouillon de réponse client » ou « récapitulatif de rapport de bug ».',
            'Partagez les modèles RTF across votre équipe pour que même les non-experts créent des prompts qui produisent des sorties cohérentes et structurées.',
            'Testez côte à côte le même prompt RTF sur plusieurs modèles pour trouver le meilleur pour votre cas d\'usage.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions Fréquemment Posées',
          id: 'faq',
          faqs: [
            {
              q: 'Que signifie RTF ?',
              a: 'RTF signifie Role, Task, Format — une structure de prompt en trois parties où Role définit le rôle que le modèle devrait tenir, Task spécifie ce que le modèle devrait faire, et Format décrit la structure de la sortie désirée.',
            },
            {
              q: 'Comment RTF diffère-t-il de CO-STAR ?',
              a: 'RTF est minimal et se concentre sur trois champs : Role, Task, Format. CO-STAR est plus complet, ajoutant Context, Style, Audience et Tone. Utilisez RTF pour les tâches rapides et simples ; utilisez CO-STAR quand le public et le ton importent.',
            },
            {
              q: 'Quand dois-je utiliser RTF ?',
              a: 'Utilisez RTF quand vous avez besoin d\'une sortie structurée d\'un rôle clairement défini. Exemples : résumer des réunions, générer du code, rédiger des e-mails dans un format spécifique, ou créer de la documentation. RTF est idéal pour les workflows basés sur des modèles.',
            },
            {
              q: 'Puis-je combiner RTF avec d\'autres frameworks ?',
              a: 'Oui. Vous pouvez utiliser RTF pour la génération de sortie initiale, puis appliquer RISEN pour le raffinement itératif. Ou combinez RTF avec Chain-of-Thought pour ajouter du raisonnement. Mélangez et assortissez les frameworks pour les workflows complexes.',
            },
            {
              q: 'Que faire si je ne suis pas sûr du rôle à spécifier ?',
              a: 'Commencez par le rôle le plus simple qui convient à la tâche : « Vous êtes un rédacteur technique », « Vous êtes un chef de produit » ou « Vous êtes un expert Python ». Soyez spécifique mais pas excessivement détaillé. Testez différents rôles pour voir lequel produit de meilleurs résultats.',
            },
            {
              q: 'L\'ordre de Role, Task, Format importe-t-il ?',
              a: 'L\'ordre traditionnel est Role → Task → Format, mais le modèle comprendra votre intention indépendamment de l\'ordre. Cependant, maintenir cet ordre standard rend les prompts plus faciles à lire et à templater. La cohérence importe plus que l\'ordre strict.',
            },
            {
              q: 'RTF fonctionne-t-il avec tous les modèles de langage ?',
              a: 'Oui. RTF est indépendant du framework. Il fonctionne avec GPT-5.5, Claude, Gemini, les modèles open-source comme Llama 3.2, et les modèles locaux via Ollama ou LM Studio. Les principes s\'appliquent universellement à tous les LLMs qui suivent les instructions.',
            },
            {
              q: 'Comment rédiger une bonne spécification Format ?',
              a: 'Soyez spécifique : au lieu de « Format : belle sortie », écrivez « Format : 5 points de liste, chacun moins de 15 mots ». Spécifiez la structure (points de liste, paragraphes, blocs de code, JSON), la longueur (nombre de mots, nombre d\'éléments) et le ton (formel, décontracté, technique).',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Prompting Chain-of-Thought', url: '/fr/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Qu\'est-ce que l\'ingénierie des prompts ?', url: '/fr/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Prompting Zero-Shot vs Few-Shot', url: '/fr/prompt-engineering/zero-shot-vs-few-shot' },
            { title: 'Prompting Contraint', url: '/fr/prompt-engineering/constrained-prompting' },
            { title: 'Comment choisir le bon modèle : GPT-5.5 vs Claude vs Gemini', url: '/fr/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'Framework CO-STAR', url: '/fr/prompt-engineering/co-star-framework' },
          ],
        },
        sources: {
          items: [
            'Schulhoff, L., et al. (2024). Prompt Engineering Guide. [https://www.promptingguide.ai](https://www.promptingguide.ai)',
            'Brown, T. B., et al. (2020). « Language Models are Few-Shot Learners. » OpenAI. arXiv:2005.14165',
            'OpenAI. (2026). Prompt Engineering Best Practices. [https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2026). Prompt Engineering — Claude API Documentation. [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)',
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RTFフレームワーク：Role・Task・Formatのプロンプト構造（2026年）',
      intro: 'RTFフレームワークは軽量な3要素プロンプト構造です。Role（モデルの役割）、Task（実行するタスク）、Format（出力形式）。GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、ローカルモデルで動作します。日常的なタスク（要約、コードレビュー、メール、レポート）に標準として使用し、より多くの構造が必要な場合のみCO-STARやSPECSにアップグレードしてください。',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6分で読める',
      seoTitle: 'RTFフレームワーク完全ガイド：Role・Task・Formatのプロンプト構造を完全解説',
      metaDescription: 'RTFプロンプトフレームワーク：3要素で日常タスクに対応。Role（役割）、Task（任務）、Format（出力形式）の使い方と他フレームワークとの比較。',
      educationalLevel: 'Intermediate',
      audience: 'LLMアプリケーション構築するデベロッパー、AIワークフロー設計するプロダクトマネージャー、AI駆動ツール開発するチーム',
      primaryTerm: 'RTFフレームワーク',
      aboutTopics: ['RTFプロンプティング', 'プロンプトフレームワーク', 'プロンプトエンジニアリング'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RTFフレームワーク：Role・Task・Formatのプロンプト構造（2026年）',
        description: 'RTFフレームワーク（Role・Task・Format）の説明：その仕組み、使用時期、PromptQuorumでの実装方法。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/rtf-framework',
        inLanguage: 'ja',
        keywords: ['RTFフレームワーク', 'Role Task Format', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', 'PromptQuorum', 'LLMプロンプティング'],
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
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
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
            name: 'RTFフレームワークとは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF = Role、Task、Format。3要素のプロンプト構造です。Roleはモデルの役割（例：「シニアデータアナリスト」）、Taskは実行内容、Formatは出力形式を指定します。すべての主要LLMモデルで動作します。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFをCO-STARやSPECSの代わりに使うべき場合は？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ルーティン的で反復可能なタスク（要約、コードレビュー、メール、レポート）にRTFを使用します。トーンやオーディエンスが重要ならCO-STAR、厳密なスキーマが必要ならSPECS、推論の透明性が重要ならTRACEに切り替えます。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFは「単にモデルに何をするか言うこと」と同じですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。RTFは3つのことを明示的に指定します：モデルが誰なのか（Role）、どんなタスクを解くのか、出力をどう構造化するか（Format）。この構造は曖昧性をなくし、モデル間や実行間の一貫性を高めます。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFはChain-of-Thoughtとどう違いますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-Thoughtは「ステップバイステップ考えて」と促すことで推論を改善します。RTFは出力フォーマットとロールを構造化します。相補的です。両方組み合わせられます：RTFでロール・フォーマットを定義し、複雑なタスクに「ステップバイステップ」を追加します。',
            },
          },
          {
            '@type': 'Question',
            name: 'OllamaのようなローカルモデルでRTFを使えますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。RTFはすべてのLLMで動作します。OllamaやLM Studioで実行するローカルモデルも含まれます。シンプルなモデルは複雑なFormat設定では一貫性が低いかもしれませんが、RTFはなお出力品質を改善します。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFの最も一般的なミスは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Formatを曖昧または暗黙的にすること。明示的なFormat指定（例：「各3ポイント、最大50語」）がないと、モデルはデフォルトで散文段落を出力します。常にFormatを指定してください。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFはどう一貫性を高めますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Role、Task、Formatを明示的に指定することで、モデルの曖昧性が減ります。結果として、複数モデル、複数実行、チームメンバー再利用での出力の一貫性が向上します。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFプロンプトを保存すべきですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。定期的なタスク（週次サマリー、コードレビュー、メール下書き）のRTFプロンプトはテンプレートとして保存・再利用すべきです。毎回ゼロから書くより大きな利点です。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTFはJSON出力のような厳密なConstraintを強制できますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ある程度。Format フィールドで「JSONフォーマット」をリクエストでき、最新モデル（GPT-5.5、Claude）は通常対応します。100%の厳密スキーマ強制にはSPECSまたは構造化出力APIを使用してください。',
            },
          },
          {
            '@type': 'Question',
            name: 'PromptQuorumはRTFをどう使用していますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PromptQuorumはRTFを組み込みフレームワークテンプレートとして含みます。ユーザーはRole、Task、Formatフィールドを入力し、PromptQuorumは同じプロンプトを25+のモデルにディスパッチして比較・A/Bテストします。',
            },
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '重要ポイント',
          isTldr: true,
          items: [
            'RTF = Role（モデルの役割）、Task（何をするか）、Format（どう出力するか）。3つのシンプル要素。',
            'ルーティンタスク（要約、コードレビュー、メール、レポート、会議メモ）に標準として使用します。',
            'Format フィールドはRTFの力。明示的な構造は劇的に一貫性の高い出力を生成します。',
            'RTFは日常的なLLMタスク80%に対応。CO-STAR（トーン/オーディエンス）、SPECS（constraints）、TRACE（推論）へはRTFが限界に達した場合のみ。',
            '良いRTFプロンプトは再利用可能なテンプレート。毎週ゼロから書き直す代わりに、年間52回再利用します。',
            'GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、ローカルモデル（Ollama、LM Studio）で動作。',
            'PromptQuorumで複数モデルを並べてRTFプロンプトをテストします。',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'RTFフレームワークとは',
          snippets: [
            { type: 'in-one-sentence', text: 'RTFは3つの部分のプロンプトスケルトン（Role、Task、Format）で、より大きなフレームワークのオーバーヘッドなしにルーティンタスクに適度な構造を提供します。' },
            { type: 'in-plain-terms', text: 'AIに誰になるか（Role）、何をするか（Task）、答えをどう形式化するか（Format）を伝える。それだけ。3つのこと。日常タスク80%で機能。それ以上が必要になったらCO-STARやSPECSに移行します。' },
          ],
          content: [
            '**RTFフレームワークは3つの部分のプロンプトパターンで、モデルに誰なのか、何をするのか、答えがどう見えるべきかを正確に伝えます。** ぼんやりした質問を送る代わりに、Role、Task、Formatを明示的に指定します。これはGPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、OllamaやLM Studioで実行するローカルモデルで動作します。',
            'RTFは意図的に最小化されています。3つのフィールドだけなので、覚えやすく、埋めるのが速く、多くの日常タスクに柔軟。どのスペシャライズドフレームワークを使うか分からない時の「デフォルトプロンプトスケルトン」として機能します。',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: '3つのRTFコンポーネント',
          content: [
            '**強いRTFプロンプトは3つの要素を明確に定義し、モデルが自分の仕事について曖昧さを感じません。** ラベル付きの行として、または3つの部分すべてを含む1文として書けます。',
            '典型的な定義：',
          ],
          items: [
            'Role：モデルが採用すべき視点または専門知識（例：「シニアデータアナリスト」）。',
            'Task：望む具体的なアクション、1～2文で説明。',
            'Format：出力の構造、長さ、スタイル（例：「3ポイント＋2文のサマリー」）。',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Formatが実力',
              text: 'RoleとTaskは明白です。ほとんどの人はすでに何をしたいか言っています。Formatが真の価値を追加します。「3ポイント、各最大50語、Markdown」は「要約をください」より劇的に一貫性の高い出力を生成します。FormatフィールドはRTFの秘密兵器。',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'RTFが役立つ理由',
          content: [
            '**RTFフレームワークは有用です。複雑なフレームワークのメリットをほぼすべて、オーバーヘッドなしで提供するからです。** 3つの決定（誰、何、どう）をプロンプト送信前に強制します。',
            '実用的なメリット：',
          ],
          items: [
            'ルーティン作業ではマルチセクションフレームワークより速いプロンプト作成。',
            'フォーマットが常に明示的なので、モデル・実行間での一貫性向上。',
            'チームメンバーは数分でRTFを学べて、どこでも再利用できます。',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: '例：悪いRTFプロンプト vs 良いRTFプロンプト',
          promptExamples: [
            {
              bad: 'このミーティングを要約してください。',
              good: 'Role：プロジェクト進捗ミーティングを経営陣向けに要約するOperationsマネージャー。Task：記録を読み、ミーティングで議論された重要な決定、オープンなリスク、次のステップを識別。Format：Markdown、3セクション（決定、リスク、次のステップ）、各セクション3～5ポイント、総250語以下。',
              badLabel: '非構造化リクエスト',
              goodLabel: 'RTFプロンプト',
            },
          ],
          content: [
            'RTF版はコンテンツについてどう考えるか、結果を他の人がすぐ使える形でパッケージ化する方法をモデルに正確に伝えます。',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'RTFをいつ使うか',
          content: [
            '**RTFフレームワークを使うべきは、シンプルで再利用可能だが、明確さと構造を強制するパターンが必要な時です。** 長い仕様や多ステップの推論トレースが不要な時の強い標準選択肢です。',
            '典型的なユースケース：',
          ],
          items: [
            'メール・チャット向けの短いレポート、要約、概要。',
            '明確な構造での顧客・内部ステークホルダー向けレスポンス起案。',
            '指定された出力フォーマットでの小規模コードスニペット・リファクタリング生成。',
            '製品説明、FAQ項目、シンプルなチェックリストのような高速コンテンツ。',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'RTFが適切でない場合',
          tableFormat: true,
          columns: ['シナリオ', 'RTF制限', '代わりに使用'],
          rows: [
            { 'シナリオ': '顧客向けコンテンツでトーン・オーディエンスが重要', 'RTF制限': '明示的なAudience・Toneフィールドがない', '代わりに使用': 'CO-STAR（Style、Audience、Toneを含む）またはCRAFT（Constraints、Role、Audience、Format、Tone）' },
            { 'シナリオ': '厳密なデータ構造またはスキーマ強制が必要', 'RTF制限': 'FormatフィールドはJSONをリクエストできるが制約構文がない', '代わりに使用': 'SPECS（明示的なConstraintsフィールド）' },
            { 'シナリオ': 'マルチステップの推論または決定ロジックが必要', 'RTF制限': 'ステップバイステップ推論フィールドがない', '代わりに使用': 'TRACE（Trigger、Response、Action、Consequence、Evaluation）' },
            { 'シナリオ': '条件ロジック付き複雑なワークフロー', 'RTF制限': 'プロンプトあたりRole/Task/Format単一', '代わりに使用': 'APE（Action、Process、Examples）またはカスタムマルチターンワークフロー' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: '比較表',
          content: [
            '**RTFが他の主要フレームワークとどう比較するか：**',
          ],
        },
        dimensionComparison: {
          title: '次元別比較',
          tableFormat: true,
          columns: ['次元', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { '次元': 'フィールド数', 'RTF': '3（Role、Task、Format）', 'CO-STAR': '6（Context、Objective、Style、Audience、Response、Tone）', 'SPECS': '5（Settings、Person、Examples、Pattern、Constraints）', 'TRACE': '5（Trigger、Response、Action、Consequence、Evaluation）' },
            { '次元': 'セットアップ時間', 'RTF': '30秒', 'CO-STAR': '2～3分', 'SPECS': '3～5分', 'TRACE': '2～3分' },
            { '次元': '最良用途', 'RTF': 'ルーティン・反復タスク', 'CO-STAR': 'トーン・オーディエンス制御', 'SPECS': '厳密スキーマ・constraints', 'TRACE': '明示的推論ステップ' },
            { '次元': '出力一貫性', 'RTF': '良好', 'CO-STAR': '優秀', 'SPECS': '優秀', 'TRACE': '良好' },
            { '次元': '例が必要？', 'RTF': 'いいえ', 'CO-STAR': 'オプション', 'SPECS': 'はい（強力なパターン）', 'TRACE': 'いいえ' },
          ],
        },
        pairwiseComparison: {
          title: 'ペアワイズ比較（RTF vs その他）',
          tableFormat: true,
          columns: ['比較', 'リーダー', '理由'],
          rows: [
            { '比較': 'RTF vs CO-STAR', 'リーダー': 'CO-STAR（オーディエンスが重要な場合）', '理由': 'CO-STARは明示的なAudience・Toneフィールドを持ちます。RTFはトーンをRoleまたはFormatに押し込むと複雑化。声が重要でなければRTFが速い。' },
            { '比較': 'RTF vs SPECS', 'リーダー': 'SPECS（厳密な制約が必要）', '理由': 'SPECSは専用Constraintsフィールド・例の期待。RTFはFormatで制約をリクエストできるが構造構文がない。SPECS勝利：JSON、CSV、構造化データ。' },
            { '比較': 'RTF vs TRACE', 'リーダー': 'TRACE（推論が重要）', '理由': 'TRACEは因果関係を明示的にモデル化（Trigger→Response→Action→Consequence）。RTFに推論ステップフィールドなし。複雑ロジックはTRACE、シンプル出力はRTF。' },
            { '比較': 'RTF vs Chain-of-Thought', 'リーダー': '相補的', '理由': 'RTFはロール・出力フォーマットを定義。CoTは推論を改善。組み合わせられます：RTFでプロンプト構造化、複雑な数学・ロジックに「ステップバイステップ」を追加。' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'RTFプロンプトの書き方',
          numberedItems: [
            '**Role：AIが演じる人を定義。** 具体的なロール勝利。悪い：「役に立つ」。良い：「パフォーマンス回帰をレビューするシニアバックエンドエンジニア」。ロールが具体的なほど、出力が一貫性。',
            '**Task：何をするか述べる。** 具体的に。悪い：「これを要約」。良い：「議論された3つの重要な決定、オープンなリスク、次のステップを特定」。',
            '**Format：構造、長さ、スタイル指定。** ここでRTFが価値を追加。悪い：（Formatなし）。良い：「3ポイント、各最大50語、Markdown、総200語以下」。',
            '**TaskとFormatを分離。** ペースト状にするとどちらも十分な特異性を得られません。分離を保つ。',
            '**Formatは明白に思えてもいつも含める。** 明示的なFormatフィールドなしでモデルは散文段落がデフォルト。',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: '5つの実世界RTF例',
          content: ['一般的なワークフロー用の5つのプロダクション対応RTFプロンプト：'],
        },
        example1: {
          title: '例1：週次ステータスサマリー',
          content: [
            '**Role :** 経営陣向けに週次ステータスサマリーを書くOperationsマネージャー。',
            '**Task :** 今週のプロジェクト進捗、重要な決定、特定されたリスク、来週の優先事項を要約。',
            '**Format :** Markdown、4セクション（サマリー、決定、リスク、来週）、セクションあたり3～5ポイント、300語最大。',
          ],
        },
        example2: {
          title: '例2：コードレビューフィードバック',
          content: [
            '**Role :** メンテナビリティ、パフォーマンス、セキュリティをレビューするシニアバックエンドエンジニア。',
            '**Task :** このコードブロックレビュー、問題を特定、改善を提案、全体品質を評価。',
            '**Format :** Markdown、3セクション（見つかった問題、改善、品質評価1～5）、コード例用コードブロック。',
          ],
        },
        example3: {
          title: '例3：顧客メール下書き',
          content: [
            '**Role :** 顧客苦情への専門的で共感的な返答を書くカスタマーサクセスマネージャー。',
            '**Task :** 懸念に対応、適切に謝罪、解決を説明、信頼を復元。',
            '**Format :** メール形式（挨拶、2～3段落、締めくくり）、プロフェッショナルトーン、150～250語。',
          ],
        },
        example4: {
          title: '例4：ミーティングメモからアクション項目',
          content: [
            '**Role :** 生メモからアクション項目を抽出するプロジェクトコーディネーター。',
            '**Task :** 決定、議論されたリスク、所有者と期限付き次のステップを特定。',
            '**Format :** Markdown、3セクション（決定、リスク、アクション項目）、チェックボックスリスト形式、所有者と期限付き。',
          ],
        },
        example5: {
          title: '例5：非技術ユーザー向け製品ドキュメント',
          content: [
            '**Role :** 機能をシンプル言語で非技術ユーザーに説明するテクニカルライター。',
            '**Task :** 機能の説明、ユーザーが使う理由、3シンプルステップで使い方を説明。',
            '**Format :** 1文イントロ、3数字ステップと例、1文結論。ジャルゴン回避。',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'RTFと他のフレームワークを組み合わせる',
          content: [
            '**RTFフレームワークは他と組み合わせるべき。RTFをライト標準として扱い、制約が増すとヘビーフレームワークに切り替える。** 実用的パターン：',
          ],
          items: [
            '大多数の新タスクはRTFから開始。すぐに明確な構造が必要。',
            '厳密なスキーマ、例、constraintsが必要ならSPECSに移行。',
            '最終答前に明示的推論ステップが必要ならTRACEまたはAPEを使用。',
            'オーディエンス・トーンが中心ならCRAFTのようなクリエイティブフレームワークを使用。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'よくあるRTFの間違い',
          mistakes: [
            {
              mistake: '曖昧なRole ——「役に立つアシスタント」',
              problem: '「役に立つ」はデフォルト。何も追加しません。曖昧なロール＝モデルが自分の視点を選ぶ、実行ごとに変わります。',
              fix: '具体的に：「シニアバックエンドエンジニア」または「CFOを標的にするB2Bマーケティングマネージャー」。ロールが具体的なほど、出力が一貫性。',
            },
            {
              mistake: 'TaskとFormatがペースト状',
              problem: '「このミーティングをポイントで要約」はTaskとFormatを混ぜます。混ぜると、どちらも十分な特異性を得られません。',
              fix: '分離：Task = 「決定、リスク、次のステップを特定」。Format = 「Markdown、3セクション、3～5ポイント各、250語以下」。',
            },
            {
              mistake: 'Format完全に省略',
              problem: '明示的なFormat指定なし＝モデルは散文段落がデフォルト。必ずしも何を必要としているか。「AIが壁のようなテキストをくれた」の#1原因。',
              fix: 'Format指定は常に。「3ポイント」さえ、何もないより良い。',
            },
            {
              mistake: 'トーン・オーディエンス制御が必要なタスクにRTF使用',
              problem: 'RTFに明示的AudienceまたはToneフィールドなし。顧客向けコンテンツ、声重要な場合、RTFはトーンをRoleまたはFormatに押し込む、複雑になります。',
              fix: '声重要ならCRAFT（明示的なAudience・Toneフィールド）またはCO-STAR（Style・Audienceを分離）に切り替え。',
            },
            {
              mistake: 'RTFプロンプトをテンプレートとして保存しない',
              problem: '毎週ゼロから「ミーティングサマリー」RTFプロンプト書き直し＝時間浪費・一貫性低下。',
              fix: 'ワークするRTFプロンプトはPromptQuorumで名前付きテンプレートとして保存。入力データ交換して再利用。',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'PromptQuorumがRTFを実装する方法',
          content: [
            '**PromptQuorumはマルチモデルAIディスパッチツールで、RTFフレームワークを組み込みプロンプト構造として含み、ユーザーがRole–Task–Format プロンプティングを一貫的に適用できます。** PromptQuorumでRTFオプションを選択すると、インタフェースはRole、Task、Formatのフィールドを公開し、単一の整形式指示に組み立てます。',
            'PromptQuorumではRTFは可能にします：',
          ],
          items: [
            'Role、Task、Formatを一度埋めて、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、OllamaやLM Studioで設定したローカルモデルのような25+モデルに同じ構造化プロンプトを送信。',
            'RTFプロンプトをテンプレートで保存、反復ワークフロー用 —— 例：「週次ステータスサマリー」、「顧客返答下書き」、「バグレポート要約」。',
            'RTFテンプレートをチーム全体で共有、非エキスパートも一貫性・構造化出力を作成するプロンプトを作れます。',
            '複数モデル並べて同じRTFプロンプトをテスト、ユースケースに最良のものを見つける。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          id: 'faq',
          faqs: [
            {
              q: 'RTFは何の略ですか？',
              a: 'RTFはRole、Task、Format — 3部構成のプロンプト構造で、Roleはモデルが何を演じるべきかを定義、Taskはモデルが何をするべきかを指定、Formatは希望する出力の構造を説明します。',
            },
            {
              q: 'RTFはCO-STARとどう異なりますか？',
              a: 'RTFは最小限で3つのフィールドに焦点：Role、Task、Format。CO-STARはより包括的で、Context、Style、Audience、Toneを追加。クイック・ストレートな課題はRTF；聴衆とトーンが重要ならCO-STAR。',
            },
            {
              q: 'RTFいつ使うべきですか？',
              a: 'Role明確に定義された構造化出力が必要なときRTF使用。例：会議要約、コード生成、特定形式のメール作成、ドキュメント作成。RTFはテンプレートベースワークフロー向き。',
            },
            {
              q: 'RTFを他のフレームワークと組み合わせられますか？',
              a: 'はい。初期出力生成にRTF使って、反復精化にRISEN適用。またはChain-of-Thoughtと組み合わせ推論追加。複雑ワークフロー向けフレームワーク混在。',
            },
            {
              q: 'Roleを何にするか不確かな場合？',
              a: 'タスク合致する最小Roleで開始：「技術ライター」、「プロダクトマネージャー」、「Pythonエキスパート」。具体的だが過度詳細なし。異なるRoleテストして、より良い結果見つける。',
            },
            {
              q: 'Role、Task、Formatの順序が重要ですか？',
              a: 'standard順序 Role → Task → Formatですが、モデルは順序関係なく意図理解。しかし標準順序保持で、プロンプト読みやすく、テンプレート化容易。一貫性が厳密順序より重要。',
            },
            {
              q: '全LLMでRTF機能しますか？',
              a: 'はい。RTFフレームワーク独立。GPT-5.5、Claude、Gemini、Llama 3.2のようなOSS、OllamaやLM Studio経由ローカルモデル動作。原則全指示従順LLMに汎用。',
            },
            {
              q: '良いFormat仕様をどう書きますか？',
              a: '具体的に："Format：いい出力"ではなく"Format：5箇条書き、各15語以下"。構造指定（箇条、段落、コードブロック、JSON）、長さ（語数、項目数）、トーン（フォーマル、カジュアル、技術的）。',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thoughtプロンプティング', url: '/ja/prompt-engineering/chain-of-thought-prompting' },
            { title: 'プロンプトエンジニアリングとは？', url: '/ja/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Zero-Shot vs Few-Shotプロンプティング', url: '/ja/prompt-engineering/zero-shot-vs-few-shot' },
            { title: '制約付きプロンプティング', url: '/ja/prompt-engineering/constrained-prompting' },
            { title: '正しいモデルの選び方：GPT-5.5 vs Claude vs Gemini', url: '/ja/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'CO-STARフレームワーク', url: '/ja/prompt-engineering/co-star-framework' },
          ],
        },
        sources: {
          items: [
            'Schulhoff, L., et al. (2024). Prompt Engineering Guide. [https://www.promptingguide.ai](https://www.promptingguide.ai)',
            'Brown, T. B., et al. (2020). 「Language Models are Few-Shot Learners.」OpenAI. arXiv:2005.14165',
            'OpenAI. (2026). Prompt Engineering Best Practices. [https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2026). Prompt Engineering — Claude API Documentation. [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)',
          ],
        },
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RTF框架：Role、Task、Format的提示词结构（2026）',
      intro: 'RTF框架是一种轻量级的三要素提示词结构：Role（模型的角色）、Task（要执行的任务）、Format（输出格式）。适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和本地模型。将其作为日常任务的默认选择——摘要、代码审查、电子邮件、报告——仅在需要更多结构时才升级到CO-STAR或SPECS。',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '阅读约6分钟',
      seoTitle: 'RTF框架企业级最佳应用方案指南：Role、Task、Format三要素提示词完整结构及实践',
      metaDescription: 'RTF提示词框架：Role（角色）、Task（任务）、Format（格式）。3个组件应对日常任务。与CO-STAR、SPECS、TRACE的完整对比。',
      leadAnswerBlock: '**RTF = Role、Task、Format。三个组件，无额外复杂性。定义模型的角色、要完成的任务以及答案应该如何显示。将其用于日常任务——摘要、代码审查、电子邮件、会议记录。仅当需要更复杂的结构时，才切换到CO-STAR（处理语气/受众）、SPECS（处理约束）或TRACE（处理推理）。RTF是最轻量级、仍能强制执行结构的框架。**',
      quickFacts: [
        'RTF = Role + Task + Format — 最轻量级的结构化提示词框架（3个组件 vs CO-STAR/SPECS的5-6个组件）',
        '为日常、重复性任务而设计：摘要、电子邮件、代码审查、会议记录',
        '适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和本地模型（Ollama、LM Studio）',
        'RTF是推荐的起始框架 — 仅当达到限制时才升级到CO-STAR、SPECS或TRACE',
        '格式字段可以包含约束和示例，使RTF比其3个组件的数量更灵活',
        'PromptQuorum将RTF作为内置框架，支持跨25个以上模型的多模型分发',
      ],
      toc: [
        { label: '核心要点', anchor: 'key-takeaways' },
        { label: 'RTF框架是什么', anchor: 'what-is-rtf-framework' },
        { label: 'RTF的三个组件', anchor: 'three-components' },
        { label: 'RTF为什么有用', anchor: 'why-rtf-useful' },
        { label: '示例：不好 vs 优秀的RTF提示词', anchor: 'bad-vs-good' },
        { label: '何时使用RTF', anchor: 'when-to-use' },
        { label: 'RTF不是正确选择的时候', anchor: 'when-not-to-use' },
        { label: '对比表', anchor: 'comparison-tables' },
        { label: '如何编写RTF提示词', anchor: 'how-to-write' },
        { label: '5个真实RTF案例', anchor: 'five-examples' },
        { label: '将RTF与其他框架结合', anchor: 'combining-rtf' },
        { label: '常见RTF错误', anchor: 'common-mistakes' },
        { label: 'PromptQuorum如何实现RTF', anchor: 'promptquorum-implementation' },
        { label: '中国企业应用方案', anchor: 'regional-context' },
        { label: '常见问题', anchor: 'faq' },
        { label: '参考资源', anchor: 'sources' },
      ],
      educationalLevel: 'Intermediate',
      audience: '构建LLM应用的开发者、设计AI工作流的产品经理、开发AI驱动工具的团队',
      primaryTerm: 'RTF框架',
      aboutTopics: ['RTF提示词', '提示词框架', '提示词工程'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RTF框架：Role、Task、Format的提示词结构（2026）',
        description: 'RTF框架（Role、Task、Format）如何工作、何时使用，以及PromptQuorum如何将RTF作为内置选项提供。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/rtf-framework',
        inLanguage: 'zh',
        keywords: ['RTF框架', 'Role Task Format', '提示词框架', '提示词工程', 'PromptQuorum', 'LLM提示词'],
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
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
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
            name: 'RTF框架是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF = Role、Task、Format。一种三部分的提示词结构：Role定义模型是谁（例如"资深数据分析师"），Task说明要做什么，Format指定输出应如何结构化。适用于所有主要模型。',
            },
          },
          {
            '@type': 'Question',
            name: '何时应该使用RTF而不是CO-STAR或SPECS？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '对于日常的、重复性的任务（摘要、代码审查、电子邮件、报告）使用RTF。当语气/受众至关重要时升级到CO-STAR，当需要严格的模式和约束时使用SPECS，当推理透明度很重要时使用TRACE。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF是否与"只是告诉模型做什么"相同？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '不是。RTF强制显式指定三项内容：模型是谁（Role）、解决什么任务，以及输出必须如何结构化（Format）。这种结构消除了歧义，提高了跨模型和运行之间的一致性。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF与Chain-of-Thought相比如何？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-Thought通过要求模型"逐步思考"来改进推理。RTF构建输出格式和角色。两者是互补的——您可以结合它们：使用RTF定义角色和格式，然后为复杂推理任务添加"逐步思考"。',
            },
          },
          {
            '@type': 'Question',
            name: '我能将RTF与Ollama等本地模型一起使用吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '可以。RTF适用于任何LLM，包括通过Ollama或LM Studio运行的本地模型。较简单的模型（Mistral Small、Llama 3.3）可能在复杂Format字段上不够一致，但RTF仍能改进输出质量。',
            },
          },
          {
            '@type': 'Question',
            name: '最常见的RTF错误是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '让Format含糊不清或隐含。没有显式的Format字段（例如"3个要点，每个最多50个词"），模型默认为散文段落。始终指定Format。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF如何帮助提高一致性？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '通过显式指定Role、Task和Format，您减少了模型对您想要什么的歧义。这使输出跨模型、运行和重复使用提示词的团队成员更加一致。',
            },
          },
          {
            '@type': 'Question',
            name: '我应该保存RTF提示词吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '应该。编写好的RTF提示词来处理定期任务（每周摘要、代码审查、电子邮件草稿）应该保存为模板并重复使用。这是RTF相对于每次从头写提示词的最大优势。',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF能否强制执行严格的约束，如JSON输出？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '部分可以。RTF可以在Format字段中请求"JSON格式"，现代模型（GPT-5.5、Claude）通常会遵守。为了100%严格的模式强制执行，使用SPECS（包含显式约束）或结构化输出API。',
            },
          },
          {
            '@type': 'Question',
            name: 'PromptQuorum如何使用RTF？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PromptQuorum将RTF作为内置框架模板包含在内。用户填入Role、Task和Format字段，PromptQuorum将相同的提示词分发到25个以上的模型（GPT-5.5、Claude、Gemini、本地模型），用于比较和A/B测试。',
            },
          },
          {
            '@type': 'Question',
            name: '使用RTF和本地模型部署需要遵守数据安全法吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的。中国2021年数据安全法要求企业在处理敏感数据时采取保护措施。本地推理（通过Ollama、LM Studio等本地运行模型）满足数据安全法的关键合规要求，因为数据在组织内部处理，不会跨境传输。使用RTF框架定义清晰的数据处理角色和格式有助于确保符合合规要求。',
            },
          },
          {
            '@type': 'Question',
            name: '本地RTF提示词如何满足企业合规要求？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '金融、医疗、法律等行业的企业需要处理受监管的数据。RTF框架通过明确定义数据处理的角色（谁在处理）、任务（处理什么）和格式（输出如何管理）来支持合规。本地推理确保数据不离开企业网络，结合明确的RTF提示词结构，企业可以满足中国CAC（网络安全审查）、网络安全法和行业特定合规要求。',
            },
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '核心要点',
          isTldr: true,
          items: [
            'RTF = Role（模型是谁）、Task（要做什么）、Format（如何输出）。三个简单的组件。',
            '将RTF用作日常任务的默认框架：摘要、代码审查、电子邮件、报告、会议记录。',
            'Format字段是RTF增加最大价值的地方 — 显式结构产生更加一致的输出。',
            'RTF处理80%的日常LLM任务。仅当RTF达到限制时才升级到CO-STAR（语气/受众）、SPECS（约束）或TRACE（推理）。',
            '编写良好的RTF提示词是可重复使用的模板。保存它们，一年重复使用52次，而不是每周重写一次。',
            '适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和本地模型（Ollama、LM Studio）。',
            '使用PromptQuorum在多个模型之间并排测试相同的RTF提示词。',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'RTF框架是什么',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF是一个三部分提示词骨架 — Role、Task、Format — 为日常任务提供刚好足够的结构，而没有更大框架的开销。' },
            { type: 'in-plain-terms', text: '告诉AI它是谁（Role）、要做什么（Task）以及如何格式化答案（Format）。就这样。三件事。适用于80%的日常任务。当不再足够时，您就升级到CO-STAR或SPECS。' },
          ],
          content: [
            '**RTF框架是一个三部分提示词模式，告诉模型它是谁、要做什么，以及答案应该如何显示。** 与其发送一个松散的问题，您可以显式指定Role、Task和Format。这适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和您通过Ollama或LM Studio运行的本地模型。',
            'RTF故意保持最小化。仅有三个字段，易于记住，填写速度快，对许多日常任务足够灵活。当您不确定使用哪个专业框架时，您可以将其视为"默认提示词骨架"。',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'RTF的三个组件',
          content: [
            '**一个强大的RTF提示词清楚地定义了三个组件中的每一个，这样模型对其工作没有歧义。** 您可以将它们写成标记行或仍包含所有三个部分的一个句子。',
            '典型定义：',
          ],
          items: [
            'Role：模型应采用的角色或专业知识（例如"您是一位资深数据分析师"）。',
            'Task：您想要的具体行动，用一到两句话描述。',
            'Format：输出的结构、长度和风格（例如"3个要点加一个2句话的总结"）。',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Format是关键',
              text: 'Role和Task是显而易见的 — 大多数人已经说出他们想要什么。Format是RTF增加真正价值的地方。"3个要点，每个最多50个词，Markdown格式"产生的输出一致性远高于"给我一个摘要"。Format字段是RTF的秘密武器。',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'RTF为什么有用',
          content: [
            '**RTF框架很有用，因为它提供了更复杂框架的大部分好处，同时几乎没有额外复杂性。** 它迫使您在发送提示词之前做出三个决定 — 谁、什么和如何。',
            '实际优势包括：',
          ],
          items: [
            '比多部分框架更快地编写日常工作的提示词。',
            '跨模型和运行的一致性更好，因为格式总是显式的。',
            '轻松让团队成员入门，他们可以在几分钟内学会RTF并在任何地方重复使用。',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: '示例：不好 vs 优秀的RTF提示词',
          promptExamples: [
            {
              bad: '总结这次会议。',
              good: 'Role：您是一位运营经理，为高管领导总结项目状态会议。Task：阅读记录文稿，识别会议中讨论的主要决定、未解决的风险和后续步骤。Format：输出Markdown摘要，包含三个部分（`决定`、`风险`、`后续步骤`）。每个部分下使用3-5个要点。保持总摘要在250个字以内。',
              badLabel: '非结构化请求',
              goodLabel: 'RTF提示词',
            },
          ],
          content: [
            'RTF版本准确告诉模型如何思考内容以及如何打包结果，以便他人可以立即使用它。',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: '何时使用RTF',
          content: [
            '**当您希望一个简单的、可重复使用的模式仍能强制执行清晰度和结构时，应该使用RTF框架。** 它是一个强大的默认框架，当您不需要长规范或多步推理轨迹时。',
            '典型用例包括：',
          ],
          items: [
            '电子邮件或聊天的短报告、摘要和总结。',
            '为客户或内部利益相关者起草回复，具有清晰的结构。',
            '生成小代码片段或重构，具有指定的输出格式。',
            '快速内容片段，如产品文案、常见问题条目或简单检查清单。',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'RTF不是正确选择的时候',
          tableFormat: true,
          columns: ['场景', 'RTF的限制', '改用'],
          rows: [
            { '场景': '面向客户的内容，其中语气和受众至关重要', 'RTF的限制': '没有显式的受众或语气字段', '改用': 'CO-STAR（包含Style、Audience、Tone）或CRAFT（Constraints、Role、Audience、Format、Tone）' },
            { '场景': '需要严格的数据结构或模式强制执行', 'RTF的限制': 'Format字段可以请求JSON但没有约束语法', '改用': 'SPECS（包含显式Constraints字段）' },
            { '场景': '需要多步推理或决策逻辑', 'RTF的限制': '没有显式的逐步推理字段', '改用': 'TRACE（包含Trigger、Response、Action、Consequence、Evaluation）' },
            { '场景': '具有条件逻辑的复杂工作流', 'RTF的限制': '每个提示词单一Role/Task/Format', '改用': 'APE（Action、Process、Examples）或自定义多轮工作流' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: '对比表',
          content: [
            '**RTF与其他主要框架的对比：**',
          ],
        },
        dimensionComparison: {
          title: '基于维度的对比',
          tableFormat: true,
          columns: ['维度', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { '维度': '字段数量', 'RTF': '3（Role、Task、Format）', 'CO-STAR': '6（Context、Objective、Style、Audience、Response、Tone）', 'SPECS': '5（Settings、Person、Examples、Pattern、Constraints）', 'TRACE': '5（Trigger、Response、Action、Consequence、Evaluation）' },
            { '维度': '设置时间', 'RTF': '30秒', 'CO-STAR': '2-3分钟', 'SPECS': '3-5分钟', 'TRACE': '2-3分钟' },
            { '维度': '最适合', 'RTF': '日常的、重复性任务', 'CO-STAR': '语气和受众控制', 'SPECS': '严格的模式和约束', 'TRACE': '显式推理步骤' },
            { '维度': '输出一致性', 'RTF': '良好', 'CO-STAR': '优秀', 'SPECS': '优秀', 'TRACE': '良好' },
            { '维度': '需要示例？', 'RTF': '否', 'CO-STAR': '可选', 'SPECS': '是（强模式）', 'TRACE': '否' },
          ],
        },
        pairwiseComparison: {
          title: '成对对比（RTF vs其他）',
          tableFormat: true,
          columns: ['对比', '获胜者', '原因'],
          rows: [
            { '对比': 'RTF vs CO-STAR', '获胜者': 'CO-STAR（如果受众重要）', '原因': 'CO-STAR包含显式的受众和语气字段。RTF强制将语气放入Role或Format中，这会变得混乱。如果您不在意声音，RTF更快。' },
            { '对比': 'RTF vs SPECS', '获胜者': 'SPECS（如果需要严格约束）', '原因': 'SPECS包含专用的Constraints字段并期望示例。RTF可以在Format中请求约束但缺少结构化语法。对于JSON、CSV或结构化数据，SPECS赢。' },
            { '对比': 'RTF vs TRACE', '获胜者': 'TRACE（如果推理重要）', '原因': 'TRACE显式建模因果关系（Trigger → Response → Action → Consequence）。RTF没有推理步骤字段。使用TRACE处理复杂逻辑，使用RTF处理简单输出。' },
            { '对比': 'RTF vs Chain-of-Thought', '获胜者': '互补', '原因': 'RTF定义角色和输出格式。CoT改进推理。结合它们：使用RTF构建提示词结构，为复杂数学或逻辑添加"逐步思考"。' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: '如何编写RTF提示词',
          numberedItems: [
            '**Role：定义AI扮演谁。** 具体的角色胜过通用的。不好："您很乐于助人。" 好的："您是审查代码性能回归的资深后端工程师。" 角色越具体，输出越一致。',
            '**Task：说明AI应该做什么。** 要具体。不好："总结这个。" 好的："识别讨论的三个关键决定、未解决的风险和后续步骤。"',
            '**Format：指定结构、长度和风格。** 这是RTF增加价值的地方。不好：（缺少Format）。好的："3个要点，每个最多50个词，Markdown格式，总共200个字以内。"',
            '**分离Task和Format。** 将它们合并成一个团块，两者都缺乏足够的具体性。保持它们独立。',
            '**始终包含Format，即使看起来很明显。** 没有它，模型默认为散文段落。',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: '5个真实RTF案例',
          content: ['以下是五个生产就绪的RTF提示词，用于常见工作流：'],
        },
        example1: {
          title: '案例1：每周状态摘要',
          content: [
            '**Role：** 您是为执行领导层撰写每周状态摘要的运营经理。',
            '**Task：** 总结本周的项目进度、做出的关键决定、识别的风险和下周的优先事项。',
            '**Format：** Markdown，四个部分（摘要、决定、风险、下周），每个部分3-5个要点，最多300个字。',
          ],
        },
        example2: {
          title: '案例2：代码审查反馈',
          content: [
            '**Role：** 您是审查代码的资深后端工程师，关注可维护性、性能和安全性。',
            '**Task：** 审查这个代码块并识别任何问题、建议改进，并对整体质量进行评级。',
            '**Format：** Markdown，三个部分（发现的问题、改进、质量评级1-5），代码块用于示例。',
          ],
        },
        example3: {
          title: '案例3：客户电子邮件草稿',
          content: [
            '**Role：** 您是起草对客户投诉的专业、同情回复的客户成功经理。',
            '**Task：** 解决他们的关注点，在适当时道歉，解释解决方案，并恢复信心。',
            '**Format：** 电子邮件格式（问候语、2-3个段落、关闭语），专业语气，150-250个字。',
          ],
        },
        example4: {
          title: '案例4：会议记录到行动项',
          content: [
            '**Role：** 您是从原始会议记录中提取行动项的项目协调员。',
            '**Task：** 识别做出的决定、讨论的风险以及具有所有者和截止日期的后续步骤。',
            '**Format：** Markdown，包含三个部分（决定、风险、行动项），行动项作为带受理人和截止日期的复选框列表。',
          ],
        },
        example5: {
          title: '案例5：为非技术用户的产品文档',
          content: [
            '**Role：** 您是向非技术用户以简单语言解释功能的技术作者。',
            '**Task：** 解释此功能的作用、他们可能使用它的原因，以及如何在三个简单步骤中使用它。',
            '**Format：** 1句话介绍、3个带示例的编号步骤、1句话结论。避免行话。',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: '将RTF与其他框架结合',
          content: [
            '**应该通过将RTF视为轻量级默认值并在约束增加时切换到更重的框架来结合RTF与其他框架。** 一个实际的模式是：',
          ],
          items: [
            '对于大多数需要快速清晰结构的新任务，从RTF开始。',
            '当需要严格的模式、示例和约束时，切换到SPECS。',
            '当想要最终答案之前的显式推理步骤时，使用TRACE或APE。',
            '当受众和语气是中心时，使用CRAFT等创意框架。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '常见RTF错误',
          mistakes: [
            {
              mistake: '模糊的Role — "您是一个乐于助人的助手"',
              problem: '"乐于助人的助手"是默认的。它什么都不增加。模糊的角色意味着模型选择自己的角色，在运行之间变化。',
              fix: '要具体："您是一位资深后端工程师"或"您是一位针对首席财务官的B2B营销经理"。角色越具体，输出越一致。',
            },
            {
              mistake: 'Task和Format合并成一个团块',
              problem: '"用要点总结这次会议"混合了任务和格式。当它们合并时，两者都缺乏足够的具体性。',
              fix: '分离它们：Task ="识别决定、风险和后续步骤。" Format ="Markdown，3个部分，每个3-5个要点，总共250个字。"',
            },
            {
              mistake: '完全缺少Format',
              problem: '没有显式的Format，模型默认为散文段落 — 这可能不是您需要的。这是"AI给我一堵文字"的#1原因。',
              fix: '始终指定Format。即使"Format：3个要点"也比什么都没有好。',
            },
            {
              mistake: '对需要受众/语气控制的任务使用RTF',
              problem: 'RTF没有受众或语气字段。如果您正在编写语音重要的面向客户的内容，RTF迫使您将语气塞入Role或Format字段中，这会变得混乱。',
              fix: '当语音重要时，切换到CRAFT（具有显式受众和语气字段）或CO-STAR（将Style和Audience分开）。',
            },
            {
              mistake: '从不将RTF提示词保存为模板',
              problem: '每周从头开始编写相同的"会议摘要"RTF提示词会浪费时间并引入不一致。',
              fix: '在PromptQuorum中将有效的RTF提示词保存为命名模板。通过仅交换输入数据来重复使用它们。',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'PromptQuorum如何实现RTF框架',
          content: [
            '**PromptQuorum是一个多模型AI分发工具，将RTF框架作为其内置提示词结构之一包含在内，以便用户可以以一致的方式应用Role-Task-Format提示词。** 当您在PromptQuorum内选择RTF选项时，界面公开Role、Task和Format的字段，并将它们组合成单一的形成良好的指令。',
            '在PromptQuorum中，RTF框架让您能够：',
          ],
          items: [
            '填入Role、Task和Format一次，并将相同的结构化提示词发送到25个以上的模型，如GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro以及通过Ollama或LM Studio配置的本地模型。',
            '将RTF提示词保存为重复工作流的模板 — 例如"每周状态摘要"、"客户回复草稿"或"错误报告摘要"。',
            '在您的团队中共享RTF模板，即使非专家也可以创建产生一致、结构化输出的提示词。',
            '在多个模型之间并排A/B测试相同的RTF提示词，以找到最适合您的用例的模型。',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '中国企业应用方案',
          content: [
            '**在中国，遵守数据安全法、网络安全法和行业特定合规要求对于处理敏感信息的企业至关重要。** RTF框架与本地推理（通过Ollama、LM Studio等本地模型）结合，为企业提供了一种结构化、合规的方式来部署AI能力。',
          ],
        },
        dataSecurity: {
          title: '数据安全法与RTF',
          content: [
            '中国2021年数据安全法要求企业对数据处理采取安全措施。本地推理确保企业数据不通过公共API传输，符合数据本地存储和处理的核心要求。',
            '通过使用RTF框架定义清晰的Role（谁处理数据）、Task（处理什么）和Format（如何输出），企业可以建立可审计的数据处理流程，满足监管检查和内部治理要求。',
          ],
          items: [
            '**本地推理**：数据保留在企业网络内，不跨境传输',
            '**清晰的角色定义**：RTF的Role字段定义谁有权访问和处理敏感数据',
            '**输出格式控制**：Format字段确保敏感信息按照合规要求输出（例如，日志记录、审计跟踪）',
            '**任务边界**：Task字段明确定义允许的操作范围',
          ],
        },
        apacCompliance: {
          title: '亚太地区跨境数据框架',
          content: [
            '如果企业在中国、东南亚或亚太地区多地运营，理解跨境数据流框架很重要。RTF框架帮助企业在不同地区明确定义数据处理政策。',
            '中国CAC（网络安全审查）框架、泰国PDPA（个人数据保护法）和其他地区法规都要求企业对数据处理有明确的治理。RTF提示词通过显式定义数据处理逻辑来支持这些要求。',
          ],
        },
        enterpriseDeployment: {
          title: '金融、医疗、法律行业部署',
          content: [
            '金融机构、医疗保健提供商和律师事务所处理高度受管制的数据（PCI-DSS、HIPAA等价物、行业保密标准）。RTF框架与本地模型部署相结合，为这些行业提供了可审计、可控的AI能力。',
          ],
          items: [
            '**金融服务**：使用RTF定义交易分析、风险评估、法规报告的提示词，确保输出符合金融监管要求',
            '**医疗保健**：RTF的Format字段确保患者信息按照行业标准（如医疗记录保密性）输出',
            '**法律服务**：定义清晰的Role和Task确保法律咨询、合同审查提示词遵循专业道德和客户保密要求',
            '**常见做法**：大型企业（如阿里巴巴、腾讯、华为、百度）使用类似的结构化提示词框架来管理内部AI部署，确保合规性和可追溯性',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          id: 'faq',
          faqs: [
            {
              q: 'RTF代表什么？',
              a: 'RTF代表Role、Task、Format — 一个三部分的提示词结构，其中Role定义模型应该扮演的角色，Task指定模型应该做什么，Format描述所需输出的结构。',
            },
            {
              q: 'RTF与CO-STAR有何不同？',
              a: 'RTF最小化并专注于三个字段：Role、Task、Format。CO-STAR更全面，添加了Context、Style、Audience和Tone。对于快速直接的任务使用RTF；当受众和语调很重要时使用CO-STAR。',
            },
            {
              q: '何时应该使用RTF？',
              a: '当您需要来自明确定义的角色的结构化输出时使用RTF。示例：总结会议、生成代码、以特定格式编写电子邮件或创建文档。RTF非常适合基于模板的工作流。',
            },
            {
              q: '我可以将RTF与其他框架结合吗？',
              a: '可以。您可以使用RTF进行初始输出生成，然后应用RISEN进行迭代细化。或者将RTF与Chain-of-Thought结合来添加推理。混合搭配框架来处理复杂的工作流。',
            },
            {
              q: '如果我不确定应该指定什么角色怎么办？',
              a: '从最适合该任务的最简单角色开始："您是一位技术作家"、"您是一位产品经理"或"您是一位Python专家"。要具体但不要过度详细。测试不同的角色以查看哪个产生更好的结果。',
            },
            {
              q: 'Role、Task、Format的顺序重要吗？',
              a: '传统顺序是Role → Task → Format，但模型无论顺序如何都会理解您的意图。但是，保持这个标准顺序可以使提示词更容易读和模板化。一致性比严格的顺序更重要。',
            },
            {
              q: 'RTF可以与所有语言模型一起工作吗？',
              a: '可以。RTF与框架无关。它适用于GPT-5.5、Claude、Gemini、Llama 3.2等开源模型，以及通过Ollama或LM Studio的本地模型。这些原则普遍适用于任何遵循指令的LLM。',
            },
            {
              q: '我如何编写一个好的Format规范？',
              a: '要具体：不是"Format：好的输出"，而是写"Format：5个要点，每个少于15个字"。指定结构（要点、段落、代码块、JSON）、长度（字数、项目数）和语调（正式、随意、技术性）。',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought提示词', url: '/zh/prompt-engineering/chain-of-thought-prompting' },
            { title: '什么是提示词工程', url: '/zh/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Zero-Shot vs Few-Shot提示词', url: '/zh/prompt-engineering/zero-shot-vs-few-shot' },
            { title: '约束提示词', url: '/zh/prompt-engineering/constrained-prompting' },
            { title: '如何选择合适的模型：GPT-5.5 vs Claude vs Gemini', url: '/zh/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'CO-STAR框架', url: '/zh/prompt-engineering/co-star-framework' },
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
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RTF 프레임워크: Role, Task, Format (2026)',
      intro: 'RTF 프레임워크는 세 가지 구성 요소로 이루어진 경량 프롬프트 구조입니다. Role(모델의 역할), Task(수행할 작업), Format(출력 방식)으로 구성됩니다. GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 로컬 모델 전반에 걸쳐 작동합니다. 요약, 코드 리뷰, 이메일, 보고서 등 일상적인 작업에는 이를 기본 구조로 사용하고, 더 많은 구조가 필요한 경우에만 CO-STAR나 SPECS로 업그레이드하십시오.',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '6분 읽기',
      seoTitle: 'RTF 프레임워크: Role, Task, Format 프롬프트 구조',
      metaDescription: 'RTF = Role + Task + Format. 일상적인 작업에서 장황한 접근법을 능가하는 3개 필드 프롬프트 구조. 템플릿, 예시, 업그레이드 가이드.',
      ogDescription: 'RTF: 3가지 구성 요소의 프롬프트 프레임워크. Role, Task, Format. 그 이유를 알아보십시오.',
      twitterDescription: 'RTF = Role + Task + Format. 일상 작업을 위한 가장 간단한 프롬프트 구조. 팀이 복잡한 프레임워크 대신 이것을 선택하는 이유.',
      leadAnswerBlock: '**RTF = Role, Task, Format. 세 가지 구성 요소, 오버헤드 없음. 모델의 역할, 수행할 작업, 답변의 형식을 정의하십시오. 요약, 코드 리뷰, 이메일, 회의록 등 일상적인 작업의 기본값으로 사용하십시오. 어조/대상이 중요할 때는 CO-STAR로, 스키마가 중요할 때는 SPECS로, 추론이 중요할 때는 TRACE로 전환하십시오. RTF는 구조를 강제하면서도 가장 가벼운 프레임워크입니다.**',
      quickFacts: [
        'RTF = Role + Task + Format — 가장 경량화된 구조적 프롬프트 프레임워크 (CO-STAR/SPECS의 5-6개 구성 요소 대비 3개)',
        '일상적이고 반복 가능한 작업을 위해 설계됨: 요약, 이메일, 코드 리뷰, 회의록',
        'GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 로컬 모델(Ollama, LM Studio) 전반에서 작동',
        'RTF는 권장 시작 프레임워크 — 한계에 부딪혔을 때만 CO-STAR, SPECS 또는 TRACE로 업그레이드',
        'Format 필드는 제약 조건과 예시를 포함할 수 있어, 3개 구성 요소라는 수보다 더 유연함',
        'PromptQuorum은 RTF를 25개 이상의 모델에 걸친 멀티 모델 디스패치 기능을 갖춘 내장 프레임워크로 포함',
      ],
      toc: [
        { label: '핵심 요점', anchor: 'key-takeaways' },
        { label: 'RTF 프레임워크란 무엇인가?', anchor: 'what-is-rtf-framework' },
        { label: '세 가지 RTF 구성 요소', anchor: 'three-components' },
        { label: 'RTF가 유용한 이유', anchor: 'why-rtf-useful' },
        { label: '예시: 나쁜 RTF 프롬프트 vs 좋은 RTF 프롬프트', anchor: 'bad-vs-good' },
        { label: 'RTF를 사용할 때', anchor: 'when-to-use' },
        { label: 'RTF가 적합하지 않은 경우', anchor: 'when-not-to-use' },
        { label: '비교 표', anchor: 'comparison-tables' },
        { label: 'RTF 프롬프트 작성 방법', anchor: 'how-to-write' },
        { label: '실제 RTF 예시 5가지', anchor: 'five-examples' },
        { label: 'RTF와 다른 프레임워크 결합', anchor: 'combining-rtf' },
        { label: '일반적인 RTF 실수', anchor: 'common-mistakes' },
        { label: 'PromptQuorum의 RTF 구현 방식', anchor: 'promptquorum-implementation' },
        { label: '자주 묻는 질문', anchor: 'faq' },
        { label: '출처', anchor: 'sources' },
      ],
      educationalLevel: 'Intermediate',
      audience: 'LLM 애플리케이션을 구축하는 개발자, AI 워크플로를 설계하는 프로덕트 매니저, AI 기반 도구를 개발하는 팀',
      primaryTerm: 'RTF 프레임워크',
      aboutTopics: ['RTF 프롬프팅', '프롬프트 프레임워크', '프롬프트 엔지니어링'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RTF 프레임워크: Role, Task, Format (2026)',
        description: 'RTF 프레임워크(Role, Task, Format)의 작동 방식, 사용 시기, 그리고 PromptQuorum이 RTF를 내장 옵션으로 제공하는 방법.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/prompt-engineering/rtf-framework',
        inLanguage: 'ko',
        keywords: ['RTF 프레임워크', 'Role Task Format', '프롬프트 프레임워크', '프롬프트 엔지니어링', 'PromptQuorum', 'LLM 프롬프팅'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RTF 프레임워크' },
          { '@type': 'Thing', name: '프롬프트 프레임워크' },
          { '@type': 'Thing', name: '프롬프트 엔지니어링' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
        'proficiencyLevel': 'Intermediate',
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
            name: 'RTF 프레임워크란 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF = Role, Task, Format. 세 가지 구성 요소의 프롬프트 구조입니다. Role은 모델의 역할을 정의하고(예: "시니어 데이터 분석가"), Task는 수행할 작업을 명시하며, Format은 출력의 구조화 방식을 지정합니다. 모든 주요 모델에서 작동합니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'CO-STAR나 SPECS 대신 RTF를 언제 사용해야 합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '일상적이고 반복 가능한 작업(요약, 코드 리뷰, 이메일, 보고서)에는 RTF를 사용하십시오. 어조/대상이 중요한 경우 CO-STAR로, 엄격한 스키마와 제약이 필요한 경우 SPECS로, 추론 투명성이 중요한 경우 TRACE로 업그레이드하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF는 "모델에게 할 일을 말하는 것"과 같습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '아닙니다. RTF는 세 가지를 명시적으로 지정하도록 강제합니다. 모델의 역할(Role), 해결할 작업(Task), 그리고 출력의 구조화 방식(Format)입니다. 이 구조는 모호함을 제거하고 모델과 실행 전반에 걸쳐 일관성을 향상시킵니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF는 Chain-of-Thought와 어떻게 비교됩니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-Thought는 모델에게 "단계적으로 생각하도록" 요청하여 추론을 향상시킵니다. RTF는 출력 형식과 역할을 구조화합니다. 이 둘은 상호 보완적입니다. RTF로 역할과 형식을 정의한 다음, 복잡한 추론 작업을 위해 "단계적으로 생각하십시오"를 추가할 수 있습니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ollama와 같은 로컬 모델과 RTF를 사용할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '예. RTF는 Ollama나 LM Studio를 통해 실행되는 로컬 모델을 포함한 모든 LLM에서 작동합니다. 단순한 모델(Mistral Small, Llama 3.3)은 복잡한 Format 필드에서 일관성이 떨어질 수 있지만, RTF는 여전히 출력 품질을 향상시킵니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF에서 가장 흔한 실수는 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Format을 암묵적으로 두거나 모호하게 남겨 두는 것입니다. 명시적인 Format 필드(예: "최대 50단어씩 3개의 글머리표")가 없으면 모델은 산문 단락을 기본값으로 사용합니다. 항상 Format을 지정하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF는 일관성에 어떻게 도움이 됩니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Role, Task, Format을 명시적으로 지정함으로써 모델이 원하는 것에 대한 모호함을 줄입니다. 이를 통해 모델, 실행, 그리고 프롬프트를 재사용하는 팀원 전반에 걸쳐 출력이 더 일관성 있게 됩니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF 프롬프트를 저장해야 합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '예. 반복 작업(주간 요약, 코드 리뷰, 이메일 초안)을 위해 잘 작성된 RTF 프롬프트는 템플릿으로 저장하여 재사용해야 합니다. 이것이 매번 프롬프트를 처음부터 작성하는 것에 비해 RTF의 가장 큰 장점입니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF는 JSON 출력과 같은 엄격한 제약을 적용할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '부분적으로 가능합니다. RTF는 Format 필드에서 "JSON 형식"을 요청할 수 있으며, 최신 모델(GPT-5.5, Claude)은 일반적으로 이에 따릅니다. 100% 엄격한 스키마 적용을 위해서는 SPECS(명시적 제약 필드 포함) 또는 구조화된 출력 API를 사용하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: 'PromptQuorum은 RTF를 어떻게 사용합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PromptQuorum은 RTF를 내장 프레임워크 템플릿으로 포함합니다. 사용자는 Role, Task, Format 필드를 작성하고, PromptQuorum은 비교 및 A/B 테스트를 위해 동일한 프롬프트를 25개 이상의 모델(GPT-5.5, Claude, Gemini, 로컬 모델)에 디스패치합니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF 프레임워크는 AI 프롬프팅 시 무엇을 도와줍니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF는 세 가지 필드로 관심사를 분리하여 프롬프트를 일관성 있게 구조화하도록 도와줍니다. 모델의 역할(Role), 해결할 작업(Task), 그리고 출력의 형식화 방식(Format)입니다. 이를 통해 모호함이 제거되고 프롬프트가 재사용 가능한 템플릿이 됩니다.',
            },
          },
          {
            '@type': 'Question',
            name: '프롬프트 엔지니어링에서 RTF는 무엇을 의미합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF는 Role, Task, Format을 의미합니다. 경량 프롬프트 구조의 세 가지 필수 구성 요소입니다. Role은 모델의 페르소나를 정의하고, Task는 행동을 정의하며, Format은 출력 구조를 정의합니다. 함께 일관된 결과를 위해 필요한 최소한의 프레임워크를 만들어 냅니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'RTF 프레임워크는 프롬프트 엔지니어링에서 CO-STAR와 어떻게 비교됩니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RTF는 3개의 구성 요소(Role, Task, Format)를 가지며 최소화되어 있습니다. CO-STAR는 6개의 구성 요소(Context, Objective, Style, Tone, Audience, Response)를 가지며 포괄적입니다. 일상 작업에는 RTF를, 어조/대상/스타일이 중요한 경우에는 CO-STAR를 사용하십시오. RTF는 기본값이고 CO-STAR는 업그레이드입니다.',
            },
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '핵심 요점',
          isTldr: true,
          items: [
            'RTF = Role(모델의 역할), Task(수행할 작업), Format(출력 방식). 세 가지 간단한 구성 요소.',
            '일상 작업의 기본값으로 RTF를 사용하십시오: 요약, 코드 리뷰, 이메일, 보고서, 회의록.',
            'Format 필드는 RTF가 가장 많은 가치를 더하는 곳으로, 명시적인 구조는 훨씬 더 일관된 출력을 만들어 냅니다.',
            'RTF는 일상적인 LLM 작업의 80%를 처리합니다. RTF의 한계에 부딪혔을 때만 CO-STAR(어조/대상), SPECS(제약), TRACE(추론)로 업그레이드하십시오.',
            '잘 작성된 RTF 프롬프트는 재사용 가능한 템플릿입니다. 저장해 두고 매주 다시 작성하는 대신 연간 52번 재사용하십시오.',
            'GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 로컬 모델(Ollama, LM Studio) 전반에서 작동합니다.',
            'PromptQuorum을 사용하여 동일한 RTF 프롬프트를 여러 모델에서 나란히 테스트하십시오.',
          ],
        },
        whatIsRTFFramework: {
          id: 'what-is-rtf-framework',
          title: 'RTF 프레임워크란 무엇인가?',
          snippets: [
            { type: 'in-one-sentence', text: 'RTF는 Role, Task, Format이라는 세 부분으로 구성된 프롬프트 기본 구조로, 더 큰 프레임워크의 오버헤드 없이 일상 작업에 필요한 최소한의 구조를 모델에 제공합니다.' },
            { type: 'in-plain-terms', text: 'AI에게 누구여야 하는지(Role), 무엇을 해야 하는지(Task), 그리고 답변을 어떻게 형식화해야 하는지(Format)를 알려 주십시오. 그것이 전부입니다. 세 가지. 일상 작업의 80%에 효과적입니다. 충분하지 않을 때는 CO-STAR나 SPECS로 넘어가십시오.' },
          ],
          content: [
            '**RTF 프레임워크는 모델에게 자신이 누구인지, 무엇을 해야 하는지, 그리고 답변이 어떻게 보여야 하는지를 알려 주는 세 부분으로 구성된 프롬프트 패턴입니다.** 느슨한 질문을 보내는 대신 Role, Task, Format을 명시적으로 지정합니다. 이는 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 Ollama나 LM Studio를 통해 실행하는 로컬 모델 전반에서 작동합니다.',
            'RTF는 의도적으로 최소화되어 있습니다. 세 가지 필드만으로 기억하기 쉽고, 채우기 빠르며, 많은 일상 작업에 충분히 유연합니다. 어떤 특수 프레임워크를 사용해야 할지 확실하지 않을 때는 "기본 프롬프트 기본 구조"로 취급할 수 있습니다.',
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: '세 가지 RTF 구성 요소',
          content: [
            '**강력한 RTF 프롬프트는 세 가지 구성 요소를 명확하게 정의하여 모델이 자신의 역할에 대해 모호함이 없도록 합니다.** 레이블이 붙은 줄로 작성하거나, 세 부분을 모두 포함하는 하나의 문장으로 작성할 수 있습니다.',
            '일반적인 정의:',
          ],
          items: [
            'Role: 모델이 채택해야 하는 관점이나 전문성(예: "당신은 시니어 데이터 분석가입니다").',
            'Task: 원하는 구체적인 행동을 한두 문장으로 설명.',
            'Format: 출력의 구조, 길이, 스타일(예: "3개의 글머리표와 2문장 요약").',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Format이 핵심 전략',
              text: 'Role과 Task는 명확합니다 — 대부분의 사람들은 이미 원하는 것을 말합니다. Format이 RTF가 실질적인 가치를 더하는 곳입니다. "최대 50단어씩 3개의 글머리표, markdown"은 "요약해 주십시오"보다 훨씬 더 일관된 출력을 생성합니다. Format 필드는 RTF의 비밀 무기입니다.',
            },
          ],
        },
        whyRTFUseful: {
          id: 'why-rtf-useful',
          title: 'RTF가 유용한 이유',
          content: [
            '**RTF 프레임워크는 거의 오버헤드 없이 더 복잡한 프레임워크의 대부분의 이점을 제공하기 때문에 유용합니다.** 프롬프트를 보내기 전에 세 가지 결정(누가, 무엇을, 어떻게)을 내리도록 강제합니다.',
            '실용적인 장점은 다음과 같습니다:',
          ],
          items: [
            '일상 작업을 위한 다중 섹션 프레임워크보다 빠른 프롬프트 작성.',
            '형식이 항상 명시적이므로 모델과 실행 전반에 걸쳐 더 나은 일관성.',
            'RTF를 몇 분 안에 배우고 어디서든 재사용할 수 있는 팀원을 위한 쉬운 온보딩.',
          ],
        },
        badVsGood: {
          id: 'bad-vs-good',
          title: '예시: 나쁜 RTF 프롬프트 vs 좋은 RTF 프롬프트',
          promptExamples: [
            {
              bad: '이 회의를 요약해 주십시오.',
              good: 'Role: 당신은 고위 경영진을 위한 프로젝트 상태 회의를 요약하는 운영 매니저입니다. Task: 회의록을 읽고 회의에서 논의된 주요 결정 사항, 미결 위험, 다음 단계를 파악하십시오. Format: 세 가지 섹션(`Decisions`, `Risks`, `Next steps`)을 포함한 Markdown 요약을 출력하십시오. 각 섹션 아래에 3-5개의 글머리표를 사용하십시오. 총 요약은 250단어 이내로 유지하십시오.',
              badLabel: '비구조적 요청',
              goodLabel: 'RTF 프롬프트',
            },
          ],
          content: [
            'RTF 버전은 모델에게 내용을 어떻게 생각하고 결과를 어떻게 패키징해야 하는지 정확히 알려 주어 다른 사람들이 즉시 사용할 수 있게 합니다.',
          ],
        },
        whenToUse: {
          id: 'when-to-use',
          title: 'RTF를 사용할 때',
          content: [
            '**여전히 명확성과 구조를 강제하는 간단하고 재사용 가능한 패턴을 원할 때 RTF 프레임워크를 사용해야 합니다.** 긴 명세서나 다단계 추론 추적이 필요하지 않을 때마다 강력한 기본값입니다.',
            '일반적인 사용 사례는 다음과 같습니다:',
          ],
          items: [
            '이메일이나 채팅을 위한 짧은 보고서, 요약, 정리.',
            '명확한 구조로 고객이나 내부 이해관계자에 대한 응답 초안 작성.',
            '지정된 출력 형식으로 작은 코드 스니펫이나 리팩터링 생성.',
            '제품 설명, FAQ 항목, 간단한 체크리스트와 같은 빠른 콘텐츠.',
          ],
        },
        whenNotToUse: {
          id: 'when-not-to-use',
          title: 'RTF가 적합하지 않은 경우',
          tableFormat: true,
          columns: ['시나리오', 'RTF의 한계', '대신 사용'],
          rows: [
            { '시나리오': '어조와 대상이 중요한 고객 대상 콘텐츠', 'RTF의 한계': '명시적인 Audience 또는 Tone 필드 없음', '대신 사용': 'CO-STAR(Style, Audience, Tone 포함) 또는 CRAFT(Constraints, Role, Audience, Format, Tone)' },
            { '시나리오': '엄격한 데이터 구조 또는 스키마 적용 필요', 'RTF의 한계': 'Format 필드가 JSON을 요청할 수 있지만 제약 구문 없음', '대신 사용': 'SPECS(명시적 Constraints 필드 포함)' },
            { '시나리오': '다단계 추론 또는 결정 논리 필요', 'RTF의 한계': '명시적인 단계별 추론 필드 없음', '대신 사용': 'TRACE(Trigger, Response, Action, Consequence, Evaluation 포함)' },
            { '시나리오': '조건부 논리가 있는 복잡한 워크플로', 'RTF의 한계': '프롬프트당 단일 Role/Task/Format', '대신 사용': 'APE(Action, Process, Examples) 또는 맞춤형 멀티턴 워크플로' },
          ],
        },
        comparisonTables: {
          id: 'comparison-tables',
          title: '비교 표',
          content: [
            '**RTF와 다른 주요 프레임워크의 비교:**',
          ],
        },
        dimensionComparison: {
          title: '차원 기반 비교',
          tableFormat: true,
          columns: ['차원', 'RTF', 'CO-STAR', 'SPECS', 'TRACE'],
          rows: [
            { '차원': '필드 수', 'RTF': '3개 (Role, Task, Format)', 'CO-STAR': '6개 (Context, Objective, Style, Audience, Response, Tone)', 'SPECS': '5개 (Settings, Person, Examples, Pattern, Constraints)', 'TRACE': '5개 (Trigger, Response, Action, Consequence, Evaluation)' },
            { '차원': '설정 시간', 'RTF': '30초', 'CO-STAR': '2-3분', 'SPECS': '3-5분', 'TRACE': '2-3분' },
            { '차원': '최적 용도', 'RTF': '일상적이고 반복 가능한 작업', 'CO-STAR': '어조 및 대상 제어', 'SPECS': '엄격한 스키마 및 제약', 'TRACE': '명시적 추론 단계' },
            { '차원': '출력 일관성', 'RTF': '좋음', 'CO-STAR': '매우 좋음', 'SPECS': '매우 좋음', 'TRACE': '좋음' },
            { '차원': '예시 필요 여부', 'RTF': '아니오', 'CO-STAR': '선택적', 'SPECS': '예 (강력한 패턴)', 'TRACE': '아니오' },
          ],
        },
        pairwiseComparison: {
          title: '쌍별 비교 (RTF vs 기타)',
          tableFormat: true,
          columns: ['비교', '우세', '이유'],
          rows: [
            { '비교': 'RTF vs CO-STAR', '우세': 'CO-STAR (대상이 중요한 경우)', '이유': 'CO-STAR는 명시적인 Audience와 Tone 필드를 포함합니다. RTF는 어조를 Role이나 Format에 억지로 넣어야 하는데 이는 지저분해집니다. 목소리에 신경 쓰지 않는다면 RTF가 더 빠릅니다.' },
            { '비교': 'RTF vs SPECS', '우세': 'SPECS (엄격한 제약이 필요한 경우)', '이유': 'SPECS는 전용 Constraints 필드를 포함하며 예시를 기대합니다. RTF는 Format에서 제약을 요청할 수 있지만 구조화된 구문이 없습니다. JSON, CSV 또는 구조화된 데이터에는 SPECS가 우세합니다.' },
            { '비교': 'RTF vs TRACE', '우세': 'TRACE (추론이 중요한 경우)', '이유': 'TRACE는 인과 관계(Trigger → Response → Action → Consequence)를 명시적으로 모델링합니다. RTF에는 추론 단계 필드가 없습니다. 복잡한 논리에는 TRACE를, 단순한 출력에는 RTF를 사용하십시오.' },
            { '비교': 'RTF vs Chain-of-Thought', '우세': '상호 보완적', '이유': 'RTF는 역할과 출력 형식을 정의합니다. CoT는 추론을 향상시킵니다. 결합하십시오: RTF로 프롬프트를 구조화하고, 복잡한 수학이나 논리를 위해 "단계적으로 생각하십시오"를 추가하십시오.' },
          ],
        },
        howToWrite: {
          id: 'how-to-write',
          title: 'RTF 프롬프트 작성 방법',
          numberedItems: [
            '**Role: AI가 연기할 역할을 정의하십시오.** 구체적인 역할이 일반적인 역할보다 낫습니다. 나쁜 예: "당신은 도움이 됩니다." 좋은 예: "당신은 성능 저하를 검토하는 시니어 백엔드 엔지니어입니다." 구체적일수록 출력이 더 일관됩니다.',
            '**Task: AI가 무엇을 해야 하는지 명시하십시오.** 구체적으로 작성하십시오. 나쁜 예: "이것을 요약하십시오." 좋은 예: "논의된 세 가지 주요 결정 사항, 미결 위험, 다음 단계를 파악하십시오."',
            '**Format: 구조, 길이, 스타일을 지정하십시오.** 이것이 RTF가 가치를 더하는 곳입니다. 나쁜 예: (Format 없음). 좋은 예: "3개의 글머리표, 각 최대 50단어, markdown, 총 200단어 이내."',
            '**Task와 Format을 분리하십시오.** 하나의 덩어리로 합치면 어느 것도 충분한 구체성을 얻지 못합니다. 구분하여 유지하십시오.',
            '**명확해 보일 때도 항상 Format을 포함하십시오.** Format 없이는 모델이 기본적으로 산문 단락을 사용합니다.',
          ],
        },
        fiveExamples: {
          id: 'five-examples',
          title: '실제 RTF 예시 5가지',
          content: ['일반적인 워크플로를 위한 5가지 실제 사용 가능한 RTF 프롬프트입니다:'],
        },
        example1: {
          title: '예시 1: 주간 상태 요약',
          content: [
            '**Role:** 당신은 임원진을 위한 주간 상태 요약을 작성하는 운영 매니저입니다.',
            '**Task:** 이번 주 프로젝트 진행 상황, 주요 결정 사항, 파악된 위험, 다음 주 우선순위를 요약하십시오.',
            '**Format:** Markdown, 네 가지 섹션(Summary, Decisions, Risks, Next Week), 섹션당 3-5개의 글머리표, 최대 300단어.',
          ],
        },
        example2: {
          title: '예시 2: 코드 리뷰 피드백',
          content: [
            '**Role:** 당신은 유지보수성, 성능, 보안을 검토하는 시니어 백엔드 엔지니어입니다.',
            '**Task:** 이 코드 블록을 검토하고 문제를 파악하며, 개선 사항을 제안하고, 전체 품질을 평가하십시오.',
            '**Format:** Markdown, 세 가지 섹션(Issues Found, Improvements, Quality Rating 1-5), 예시에는 코드 블록 사용.',
          ],
        },
        example3: {
          title: '예시 3: 고객 이메일 초안',
          content: [
            '**Role:** 당신은 고객 불만에 전문적이고 공감적인 답변을 작성하는 고객 성공 매니저입니다.',
            '**Task:** 고객의 우려를 해결하고, 적절한 경우 사과하며, 해결책을 설명하고, 신뢰를 회복하십시오.',
            '**Format:** 이메일 형식(인사말, 2-3단락, 맺음말), 전문적인 어조, 150-250단어.',
          ],
        },
        example4: {
          title: '예시 4: 회의록에서 행동 항목 추출',
          content: [
            '**Role:** 당신은 미가공 회의록에서 행동 항목을 추출하는 프로젝트 코디네이터입니다.',
            '**Task:** 내려진 결정, 논의된 위험, 담당자와 기한이 있는 다음 단계를 파악하십시오.',
            '**Format:** 세 가지 섹션(Decisions, Risks, Action Items)이 있는 Markdown, 담당자와 기한이 있는 체크리스트 형식의 행동 항목.',
          ],
        },
        example5: {
          title: '예시 5: 비기술 사용자를 위한 제품 문서',
          content: [
            '**Role:** 당신은 비기술 사용자에게 간단한 언어로 기능을 설명하는 기술 작가입니다.',
            '**Task:** 이 기능이 무엇을 하는지, 왜 사용할 수 있는지, 세 가지 간단한 단계로 어떻게 사용하는지 설명하십시오.',
            '**Format:** 1문장 도입, 예시가 있는 3개의 번호 매기기 단계, 1문장 결론. 전문 용어를 피하십시오.',
          ],
        },
        combiningRTF: {
          id: 'combining-rtf',
          title: 'RTF와 다른 프레임워크 결합',
          content: [
            '**RTF를 경량 기본값으로 취급하고 제약이 증가할 때 더 무거운 프레임워크로 전환함으로써 RTF 프레임워크를 다른 프레임워크와 결합해야 합니다.** 실용적인 패턴은 다음과 같습니다:',
          ],
          items: [
            '빠르게 명확한 구조가 필요한 대부분의 새로운 작업에는 RTF로 시작하십시오.',
            '엄격한 스키마, 예시, 제약이 필요할 때는 SPECS로 이동하십시오.',
            '최종 답변 전에 명시적인 추론 단계가 필요할 때는 TRACE나 APE를 사용하십시오.',
            '대상과 어조가 중심이 될 때는 CRAFT와 같은 창의적인 프레임워크를 사용하십시오.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '일반적인 RTF 실수',
          mistakes: [
            {
              mistake: '모호한 Role — "당신은 도움이 되는 어시스턴트입니다"',
              problem: '"도움이 되는 어시스턴트"는 기본값입니다. 아무것도 추가하지 않습니다. 모호한 역할은 모델이 자신의 관점을 선택하게 하며, 이는 실행 간에 달라집니다.',
              fix: '구체적으로 작성하십시오: "당신은 시니어 백엔드 엔지니어입니다" 또는 "당신은 CFO를 대상으로 하는 B2B 마케팅 매니저입니다." 역할이 구체적일수록 출력이 더 일관됩니다.',
            },
            {
              mistake: 'Task와 Format이 하나의 덩어리로 합쳐짐',
              problem: '"이 회의를 글머리표로 요약하십시오"는 작업과 형식을 혼합합니다. 합쳐지면 어느 것도 충분한 구체성을 얻지 못합니다.',
              fix: '분리하십시오: Task = "결정 사항, 위험, 다음 단계를 파악하십시오." Format = "Markdown, 3개 섹션, 각 3-5개 글머리표, 250단어 이내."',
            },
            {
              mistake: 'Format이 완전히 누락됨',
              problem: '명시적인 Format 없이는 모델이 기본적으로 산문 단락을 사용합니다. 이것이 "AI가 텍스트 덩어리를 줬다"는 #1 원인입니다.',
              fix: '항상 Format을 지정하십시오. "Format: 3개의 글머리표"라도 없는 것보다 낫습니다.',
            },
            {
              mistake: '대상/어조 제어가 필요한 작업에 RTF 사용',
              problem: 'RTF에는 Audience나 Tone 필드가 없습니다. 목소리가 중요한 고객 대상 콘텐츠를 작성하는 경우 RTF는 어조를 Role이나 Format 필드에 억지로 넣어야 하는데, 이는 지저분해집니다.',
              fix: '목소리가 중요할 때는 CRAFT(명시적 Audience와 Tone 필드 포함) 또는 CO-STAR(Style과 Audience를 분리하는)로 전환하십시오.',
            },
            {
              mistake: 'RTF 프롬프트를 템플릿으로 저장하지 않음',
              problem: '매주 같은 "회의 요약" RTF 프롬프트를 처음부터 작성하는 것은 시간을 낭비하고 비일관성을 초래합니다.',
              fix: 'PromptQuorum에서 작동하는 RTF 프롬프트를 명명된 템플릿으로 저장하십시오. 입력 데이터만 교체하여 재사용하십시오.',
            },
          ],
        },
        promptquorumImplementation: {
          id: 'promptquorum-implementation',
          title: 'PromptQuorum의 RTF 프레임워크 구현 방식',
          content: [
            '**PromptQuorum은 사용자가 일관된 방식으로 Role-Task-Format 프롬프팅을 적용할 수 있도록 RTF 프레임워크를 내장 프롬프트 구조 중 하나로 포함하는 멀티 모델 AI 디스패치 도구입니다.** PromptQuorum 내에서 RTF 옵션을 선택하면 인터페이스가 Role, Task, Format 필드를 노출하고 이를 단일 잘 구성된 지시문으로 조합합니다.',
            'PromptQuorum에서 RTF 프레임워크를 사용하면 다음이 가능합니다:',
          ],
          items: [
            'Role, Task, Format을 한 번 채우고 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 Ollama나 LM Studio를 통해 구성된 로컬 모델 등 25개 이상의 모델에 동일한 구조화된 프롬프트를 전송.',
            '반복 워크플로를 위한 RTF 프롬프트를 템플릿으로 저장 — 예를 들어 "주간 상태 요약", "고객 답변 초안" 또는 "버그 보고서 요약".',
            '팀 전반에 RTF 템플릿을 공유하여 전문가가 아닌 사람도 일관된 구조화된 출력을 생성하는 프롬프트를 만들 수 있게 함.',
            '동일한 RTF 프롬프트를 여러 모델에서 나란히 A/B 테스트하여 사용 사례에 가장 적합한 모델을 찾음.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '자주 묻는 질문',
          id: 'faq',
          faqs: [
            {
              q: 'RTF는 무엇을 의미합니까?',
              a: 'RTF는 Role, Task, Format을 의미합니다 — 세 부분으로 구성된 프롬프트 구조로, Role은 모델이 어떤 역할을 해야 하는지, Task는 모델이 무엇을 해야 하는지, Format은 원하는 출력의 구조를 설명합니다.',
            },
            {
              q: 'RTF는 CO-STAR와 어떻게 다릅니까?',
              a: 'RTF는 세 가지 필드(Role, Task, Format)에 초점을 맞춘 최소화된 구조입니다. CO-STAR는 Context, Style, Audience, Tone을 추가하여 더 포괄적입니다. 빠르고 간단한 작업에는 RTF를, 대상과 어조가 중요한 경우에는 CO-STAR를 사용하십시오.',
            },
            {
              q: 'RTF를 언제 사용해야 합니까?',
              a: '명확하게 정의된 역할에서 구조화된 출력이 필요할 때 RTF를 사용하십시오. 예시: 회의 요약, 코드 생성, 특정 형식의 이메일 작성, 문서 작성. RTF는 템플릿 기반 워크플로에 이상적입니다.',
            },
            {
              q: 'RTF를 다른 프레임워크와 결합할 수 있습니까?',
              a: '예. RTF를 초기 출력 생성에 사용한 다음 RISEN을 반복적 개선에 적용할 수 있습니다. 또는 RTF와 Chain-of-Thought를 결합하여 추론을 추가할 수 있습니다. 복잡한 워크플로에는 프레임워크를 혼합하여 사용하십시오.',
            },
            {
              q: '어떤 Role을 지정해야 할지 확실하지 않은 경우에는 어떻게 해야 합니까?',
              a: '작업에 맞는 가장 단순한 역할로 시작하십시오: "당신은 기술 작가입니다", "당신은 프로덕트 매니저입니다", 또는 "당신은 Python 전문가입니다." 구체적이되 지나치게 정교하게 하지 마십시오. 어떤 역할이 더 나은 결과를 만드는지 보기 위해 여러 역할을 테스트하십시오.',
            },
            {
              q: 'Role, Task, Format의 순서가 중요합니까?',
              a: '전통적인 순서는 Role → Task → Format이지만, 모델은 순서에 상관없이 의도를 이해합니다. 그러나 이 표준 순서를 유지하면 프롬프트를 읽고 템플릿화하기 더 쉬워집니다. 엄격한 순서보다 일관성이 더 중요합니다.',
            },
            {
              q: 'RTF는 모든 언어 모델과 함께 작동합니까?',
              a: '예. RTF는 프레임워크에 독립적입니다. GPT-5.5, Claude, Gemini, Llama 3.2와 같은 오픈소스 모델, 그리고 Ollama나 LM Studio를 통한 로컬 모델과 함께 작동합니다. 원칙은 명령을 따르는 모든 LLM에 보편적으로 적용됩니다.',
            },
            {
              q: '좋은 Format 명세는 어떻게 작성합니까?',
              a: '구체적으로 작성하십시오: "Format: 좋은 출력" 대신 "Format: 각 15단어 이내의 5개 글머리표"라고 작성하십시오. 구조(글머리표, 단락, 코드 블록, JSON), 길이(단어 수, 항목 수), 어조(공식, 격식 없음, 기술적)를 지정하십시오.',
            },
          ],
        },
        relatedReading: {
          items: [
            { title: 'Chain-of-Thought 프롬프팅', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: '프롬프트 엔지니어링이란 무엇인가?', url: '/prompt-engineering/what-is-prompt-engineering' },
            { title: 'Zero-Shot vs Few-Shot 프롬프팅', url: '/prompt-engineering/zero-shot-vs-few-shot' },
            { title: '제약 프롬프팅', url: '/prompt-engineering/constrained-prompting' },
            { title: '올바른 모델 선택 방법: GPT-5.5 vs Claude vs Gemini', url: '/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'CO-STAR 프레임워크', url: '/prompt-engineering/co-star-framework' },
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
};
