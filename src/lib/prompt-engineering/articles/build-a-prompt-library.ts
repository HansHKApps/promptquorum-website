// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: build-a-prompt-library
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Fundamentals',
      title: 'Build a Prompt Library That Saves Hours',
      intro: 'A prompt library is a team-wide collection of tested instructions. Done well, each entry works like a small tool: pick it up, adapt the inputs, and get consistent results.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10 min read',
      seoTitle: 'Build a Prompt Library: 12-Step Framework for Teams 2026',
      metaDescription: 'A prompt library is a shared, searchable collection of tested prompts with metadata. Teams that build one cut task setup time and onboard faster. Here is a 12-step framework.',
      educationalLevel: 'Beginner',
      audience: 'Team leads and practitioners adopting AI tools',
      leadAnswerBlock: '**A prompt library is a shared collection of tested prompts with structured metadata — title, inputs, expected output format, owner, and version — so your team can reuse working instructions instead of starting from scratch every time.**',
      quickFacts: [
        '8 metadata fields recommended per prompt entry (title, goal, body, inputs, model guidance, output format, tags, owner/version)',
        'Start with 5–10 real prompts from everyday work — 1 to 2 weeks of collection',
        'Monthly review cadence to retire unused prompts; teams typically retire 20–30%',
        'Teams with 10+ approved prompts report 40–60% faster task setup',
        'Draft → Approved → Deprecated: 3-status lifecycle keeps quality high',
      ],
      toc: [
        { label: 'What Is a Prompt Library?', anchor: '#what-is-a-prompt-library' },
        { label: 'Why Build a Prompt Library?', anchor: '#why-build-a-prompt-library' },
        { label: 'What to Store for Each Prompt', anchor: '#what-to-store' },
        { label: 'How to Build Step by Step', anchor: '#how-to-build' },
        { label: 'Where to Store It', anchor: '#where-to-store' },
        { label: 'How Do Storage Options Compare?', anchor: '#storage-options-comparison' },
        { label: 'Versioning & Quality', anchor: '#versioning' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Regional Considerations', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Build a Prompt Library That Saves Hours',
        description: 'What a prompt library is, why your team should build one, how to structure and maintain it, and best practices for versioning and governance.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        keywords: ['prompt library', 'prompt management', 'prompt engineering', 'team productivity', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Team Productivity' },
          { '@type': 'Thing', name: 'Knowledge Management' },
        ],
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Team leads and practitioners adopting AI tools' },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro']
        }
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a prompt library?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A prompt library is a structured collection of tested prompts with metadata (inputs, model guidance, expected output, version, owner). Unlike a list of prompts copied from the internet, a prompt library is an internal product your team maintains and reuses for consistency and speed.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should a team use a prompt library instead of personal notes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'As soon as you have 3+ team members and 2+ prompts you use more than once. Personal notes work for one person; libraries work for teams. A library cuts task setup time, onboards new colleagues faster, and prevents duplicate work.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to build a usable prompt library from scratch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start small: 1–2 weeks to harvest 5–10 real prompts from everyday work, normalize them into a template, and upload them to a shared system. Governance and tooling improve over time; start with just Draft and Approved status labels.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get my team to contribute to a shared prompt library?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Make contribution easy and frictionless. Start with 3–5 champion prompts you create yourself so people see examples. Keep approval lightweight (one person, 5 minutes). Showcase wins like "This library saved us 10 hours this month." Never make contribution mandatory; make it the path of least resistance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is a prompt library the same as a system prompt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A system prompt is a single persistent instruction that sets the LLM\'s behavior for one conversation. A prompt library is a collection of prompts (each with context and metadata) shared across your team for many use cases. A system prompt might live in your library as one entry.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should we review and prune a prompt library?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Monthly at minimum. Look for prompts nobody uses, prompts that people keep editing ad-hoc, and opportunities to consolidate. Mark unused prompts as Deprecated; remove them from default views after 3 months of inactivity. Teams running monthly review cycles typically retire 20–30% of stored prompts as model defaults improve.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you handle prompts that work on one model but not another?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tag each prompt with tested models in metadata. When a prompt fails on a new model, create a variant — for example "Meeting summary – Claude" and "Meeting summary – GPT-4o" — rather than forcing one prompt to work everywhere. Multi-model testing tools let you compare output across models before promoting a prompt to Approved status.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a prompt library and a prompt management platform?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A prompt library is a collection of structured prompt records your team maintains — it can live in a Git repo, a spreadsheet, or a dedicated tool. A prompt management platform adds execution, analytics, version control, and collaboration features on top of the library concept. Start with a simple library and upgrade to a platform when volume or governance needs justify it.',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Build a Prompt Library for Your Team',
        description: 'A prompt library is a central, searchable collection of tested prompts with clear metadata so your team can reuse what works instead of reinventing instructions in every chat.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Start with real, high-value use cases',
            text: 'Pick 3–5 repetitive tasks where AI already helps (meeting summaries, support replies, code review comments, campaign drafts). These give you prompts people actually use.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Capture prompts that already work',
            text: 'For one to two weeks, whenever you get a great result, save it to an "inbox" section. Focus only on prompts used more than once with reliably good output.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Normalize into a standard template',
            text: 'Rewrite each good prompt with clear title, goal, prompt body, placeholders, tags, owner, and version.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Organize by task, not by model',
            text: 'Group prompts by what they help you do (summarise, plan, analyse, generate, review code). Model specifics belong in metadata.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Add ownership and minimal review',
            text: 'Assign a person responsible for each category. They review new or changed prompts quickly for clarity and fit before marking them "Approved."',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Review and prune regularly',
            text: 'On a monthly cadence, look at usage patterns, rarely-used prompts, and places where people keep editing the same prompt ad-hoc.',
          },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'A prompt library is a structured repository with metadata, not just a list of cool prompts you find online.',
            'Each entry needs a title, prompt body, inputs, output format, tags, owner, and version — so anyone on your team can use it reliably.',
            'Build bottom-up: harvest real prompts from everyday work first, then normalize them into a common template.',
            'Organize by task or function (e.g., summarise, code-review, plan), not by model; model specifics go in metadata.',
            'Light governance keeps quality high: mark prompts as Draft → Approved → Deprecated; never remove FAQs or working prompts.',
            'Version explicitly (v1.0, v1.1) with one-line change notes; keep prior versions rollback-able.',
            'Monthly review cadence: retire low-use prompts and promote improved ones as model defaults evolve.',
          ],
        },
        whatIsLibrary: {
          id: 'what-is-a-prompt-library',
          title: 'What Is a Prompt Library (and What Is It Not)?',
          content: [
            '**A prompt library is a structured repository of prompts, each with a defined purpose, inputs, and expected output; it is not just a long list of cool prompts copied from the internet.**',
            'Each entry should read more like a small tool than a snippet of text. Think of it like a recipe card: one person tests the [prompt template](/prompt-engineering/fundamentals-of-prompt-optimization) with 3–5 real inputs, documents what works, and publishes it to the team. A useful prompt record typically includes:',
          ],
          items: [
            'A clear title ("Summarise stakeholder interviews into risks and actions").',
            'A one-line use case (what problem it solves).',
            'The full prompt body, including placeholders for inputs.',
            'Inputs required (e.g. transcript, user story, Git diff).',
            'Recommended model / parameters if relevant.',
            'Expected output format (email, JSON, bullets, table).',
            'Tags (e.g. #research, #marketing, #support, #code-review).',
            'Owner and a simple version ("v1.2 – updated for new model").',
          ],
          snippets: [
            {
              type: 'in-one-sentence',
              text: 'A prompt library stores tested instructions as structured, reusable assets with enough metadata that any team member can reproduce results without the original author.',
            },
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Template over one-off',
              text: 'A prompt designed as a reusable template — with clear placeholders and an expected output format — costs one extra minute to write but saves 20 minutes every time someone else uses it.',
            },
          ],
        },
        libraryAsset: {
          content: [
            'This turns each prompt into a reusable asset someone else can pick up and use with minimal explanation.',
          ],
        },
        whyBuildOne: {
          id: 'why-build-a-prompt-library',
          title: 'Why Should Your Team Build a Prompt Library?',
          content: [
            '**A prompt library saves time, reduces variability between people, and gives you a safe place to refine prompts instead of losing them in private chat logs.**',
            'When a colleague figures out the right [chain-of-thought approach](/prompt-engineering/chain-of-thought-prompting) for a task, that insight disappears without a library. With one, it compounds. Typical benefits:',
          ],
          items: [
            'Speed: People start from a tested template, not a blank box.',
            'Consistency: Similar tasks (summaries, briefs, code reviews) follow consistent patterns, tone, and structure.',
            'Quality: Prompts improve over time as you record what works and retire what doesn\'t.',
            'Onboarding: New colleagues can browse examples and get productive quickly instead of guessing how to "talk to the AI."',
            'Governance: Sensitive areas (legal, HR, finance, compliance) use reviewed prompts instead of ad-hoc instructions.',
          ],
          callouts: [
            {
              type: 'insight',
              label: 'Team efficiency signal',
              text: 'Teams that run a shared prompt library with 10+ approved entries report 40–60% faster task setup, since people adapt a tested template rather than prompt from scratch.',
            },
          ],
        },
        sharedSystem: {
          content: [
            'Instead of each person maintaining a private prompt stash in notes, you end up with one shared system that represents how your organisation actually wants to use AI.',
          ],
        },
        whatToStore: {
          id: 'what-to-store',
          title: 'What Should You Store for Each Prompt?',
          content: [
            '**Every prompt should capture enough context that another person can reproduce your results reliably, even months later.** As of April 2026, teams that document prompts with these 8 fields report 40–60% faster onboarding when new colleagues join.',
            'A practical schema:',
          ],
        },
        schemaBreakdown: {
          items: [
            'Title: Short, task-oriented (e.g., "Meeting notes – action list," "Bug report triage classifier").',
            'Goal / description: One or two sentences explaining what it does.',
            'Prompt body: The full instruction text, with placeholders like <PASTE_NOTES_HERE> and any system-style guidance.',
            'Inputs: What the user must provide (e.g., "Zoom transcript," "Jira ticket list").',
            'Model guidance: Recommended models and settings if important.',
            'Output format: For example, "Markdown bullet list," "2-column table," or "Valid JSON array."',
            'Tags / category: For example, #summarisation, #planning, #analysis, plus functional tags.',
            'Owner / version / last updated: Who maintains it, version string, and date of last change.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Vague prompts don\'t improve with storage',
              text: 'Before saving a prompt, test it 3 times with different inputs. If the output varies too much, rewrite the prompt first. A library of inconsistent prompts creates false confidence.',
            },
          ],
          promptExamples: [
            {
              badLabel: 'Unstructured prompt (not library-ready)',
              bad: 'Summarise this meeting',
              goodLabel: 'Structured prompt with placeholders (library-ready)',
              good: `You are a senior project manager. Summarise the following meeting transcript into:\n1. Key decisions (3–5 bullet points)\n2. Action items — each with owner name and due date\n3. Open questions that need follow-up\n\nOutput format: Markdown. Keep each section under 100 words.\n\nTranscript:\n<PASTE_TRANSCRIPT_HERE>`,
            },
          ],
        },
        optionalFields: {
          content: [
            'Optional but valuable:',
          ],
          items: [
            'Example input and output: One realistic input and a good output so users can judge fit at a glance.',
          ],
        },
        howToStart: {
          id: 'how-to-build',
          title: 'How Do You Build a Prompt Library Step by Step?',
          content: [
            '**The fastest way to build a usable prompt library is to harvest real prompts from everyday work, normalize them into a common template, and then add light governance.**',
            'A practical approach:',
          ],
          snippets: [
            {
              type: 'in-plain-terms',
              text: 'Think of it like a recipe box: one person tests a recipe, writes it down with exact ingredients and steps, and now the whole team can cook the same dish — even if the original cook is on holiday.',
            },
          ],
          callouts: [
            {
              type: 'practice',
              label: 'Start with your inbox',
              text: 'For one week, copy any prompt that produced a great result into a single shared doc. Don\'t edit yet — just collect. You need raw material before you can normalize it into templates.',
            },
          ],
          numberedItems: [
            'Start with real, high-value use cases: Pick 3–5 repetitive tasks where AI already helps (meeting summaries, support replies, code review comments, campaign drafts). These will give you prompts people actually use.',
            'Capture prompts that already work: For one to two weeks, whenever you get a great result, save it to an "inbox" section. Focus only on prompts used more than once with reliably good output.',
            'Normalize into a standard template: Rewrite each good prompt with clear title, goal, prompt body, placeholders, tags, owner, and version. Learning to [control the output format](/prompt-engineering/control-the-output) at this stage is especially valuable.',
            'Organize by task, not by model: Group prompts by what they help you do (summarise, plan, analyse, generate, review code). Model specifics belong in metadata.',
            'Add ownership and minimal review: Assign a person responsible for each category. They review new or changed prompts quickly for clarity and fit before marking them "Approved."',
            'Review and prune regularly: On a monthly cadence, look at usage patterns, rarely-used prompts, and places where people keep editing the same prompt ad-hoc.',
          ],
        },
        timelyRefinement: {
          content: [
            'Over time, this turns scattered instructions into a curated toolkit that reflects how your team actually works.',
          ],
        },
        whereToStore: {
          id: 'where-to-store',
          title: 'Where Should You Store a Prompt Library?',
          content: [
            '**You can implement a prompt library in anything from a Git repo to a shared list; the important part is searchable fields, easy editing, and some history of changes.**',
            'When evaluating options, use the same criteria you would for [selecting between any AI tools](/prompt-engineering/open-source-vs-proprietary-llms): accessibility, governance, and fit for your team\'s workflow. Dedicated prompt management tools such as [PromptQuorum](/how-it-works) add one-click multi-model execution, per-prompt analytics, and draft approval workflows.',
          ],
        },
        storageOptions: {
          content: ['Common, effective options:'],
          items: [
            'Markdown files in a repo: One file per category, metadata in frontmatter blocks. Benefits: version control, code review, diffs, branches.',
            'Tables or lists (Notion, Airtable, Sheets): Columns for title, prompt, category, tags, model, owner, status. Easy filter and search for non-technical users.',
            'Dedicated prompt management tools: Often add one-click execution, per-prompt analytics, and access control. Useful for many non-technical users and tight governance.',
          ],
          callouts: [
            {
              type: 'note',
              label: 'Tool choice matters less than adoption',
              text: 'A well-maintained Notion table beats a sophisticated prompt management tool that nobody uses. Start with whatever is already open in your team\'s browser; upgrade when the volume justifies it.',
            },
          ],
        },
        structureApproach: {
          content: [
            'For structure, a simple hybrid works well:',
          ],
          items: [
            'Categories by function: Marketing, Sales, Support, Product, Engineering, Ops.',
            'Sub-categories or tags by task: summarise, plan, rewrite, analyse, classify, code-generate, code-review.',
            'Status: Draft, Approved, Deprecated.',
          ],
        },
        structureFlexibility: {
          content: [
            'Categories give structure; tags keep it flexible as your usage evolves.',
          ],
        },
        storageTableNote: {
          callouts: [
            {
              type: 'tip',
              label: 'EU data residency check',
              text: 'As of April 2026, EU-only server options are available from most major platforms (Notion, Airtable, Notion). Check data residency settings before choosing a cloud-based tool if your team handles sensitive data subject to GDPR.',
            },
          ],
        },
        storageTable: {
          id: 'storage-options-comparison',
          title: 'How Do Storage Options Compare?',
          columns: ['Tool/Format', 'Best for', 'Version control', 'Search', 'Governance'],
          rows: [
            {
              'Tool/Format': 'Markdown files in Git',
              'Best for': 'Engineering teams, code review workflows',
              'Version control': '✓ Native',
              'Search': '✓ CLI tools',
              'Governance': '✓ PR reviews',
            },
            {
              'Tool/Format': 'Notion / Airtable / Sheets',
              'Best for': 'Mixed teams, non-technical users',
              'Version control': '✓ Limited history',
              'Search': '✓ Full-text filters',
              'Governance': '✓ Permissions & roles',
            },
            {
              'Tool/Format': 'Dedicated tools (e.g. PromptQuorum)',
              'Best for': 'Teams needing one-click execution & metrics',
              'Version control': '✓ Full history',
              'Search': '✓ Full-text, tags, metadata',
              'Governance': '✓ Built-in approval workflows',
            },
          ],
          tableFormat: true,
        },
        versioning: {
          id: 'versioning',
          title: 'How Do You Version Prompts and Maintain Quality?',
          content: [
            '**Without versioning and basic testing, a prompt library turns into a junk drawer; with light governance, it becomes a reliable internal product.**',
            'Most major AI models updated their instruction-following behavior in late 2025 and early 2026, which means prompts written for GPT-4 may need adjustment for GPT-4o or newer. As of April 2026, Anthropic\'s Claude 3.5 and 4 series handle system prompts differently than earlier versions — always version-tag when you retest against a new model. Practical habits:',
          ],
          items: [
            'Version prompts explicitly: Use a simple scheme like v1.0 – v1.1. Add a one-line change note (e.g., "v1.1 – added JSON output format; reduced hallucinations for dates").',
            'Attach test cases to important prompts: For high-impact prompts, keep 3–5 test inputs and expected output patterns. [Testing prompts across multiple models](/prompt-engineering/how-to-test-prompts-across-models) before promoting to "Approved" catches model-specific breakage early. After editing or changing models, run those tests.',
            'Track usage and feedback: Even a simple "stars" rating or comment helps you see which prompts work and which need attention.',
            'Plan for rollback: Always keep the previous version accessible so you can revert if needed.',
            'Retire prompts intentionally: When a prompt is outdated, mark it as Deprecated and explain why, so people know not to use it.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Model upgrades break prompts silently',
              text: 'When your team upgrades to a new model version (e.g., from GPT-4o to GPT-4o mini), run your full set of "Approved" prompts against it before switching. Output format and instruction-following behavior shift between versions.',
            },
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are Common Mistakes When Building a Prompt Library?',
          callouts: [
            {
              type: 'practice',
              label: 'Retiring a prompt? Test it one last time.',
              text: 'Before marking a prompt Deprecated, run it with a recent input. If it still fails: deprecate with a reason. If it passes: the prompt just needs updating, not retiring.',
            },
          ],
          mistakes: [
            {
              mistake: 'Storing prompts in personal notes or private chat logs.',
              problem: 'Knowledge stays siloed; others can\'t find or reuse what you discovered. New colleagues rebuild the same prompts from scratch.',
              fix: 'Use a shared, searchable system (Git repo, Airtable, dedicated tool). Treat it as a team asset, not personal notes.',
            },
            {
              mistake: 'Writing prompts without input placeholders (e.g., hardcoding specific names or numbers).',
              problem: 'Prompts aren\'t reusable; you have to edit the whole prompt each time instead of swapping inputs.',
              fix: 'Always mark dynamic parts as `<PLACEHOLDER_NAME>` or `[VARIABLE]`. Make the prompt a template, not a one-off instruction.',
            },
            {
              mistake: 'Over-engineering governance at launch (elaborate approval workflows, steering committees).',
              problem: 'Overhead kills adoption; people default to personal prompts instead of contributing to the library.',
              fix: 'Start simple: just Draft and Approved. Add process only when your team > 5 or when sensitive areas (legal, HR) need it.',
            },
            {
              mistake: 'Skipping version history — no change notes or prior versions kept.',
              problem: 'When a new model breaks a prompt, you can\'t easily revert or understand what changed.',
              fix: 'Add one-line change notes per version (e.g., "v1.2 – updated for GPT-4o mini, removed temperature override"). Keep prior versions accessible.',
            },
            {
              mistake: 'Never retiring deprecated prompts — library grows with dead weight.',
              problem: 'Harder to find useful prompts; unclear which versions are actually maintained.',
              fix: 'Mark outdated prompts as Deprecated with a reason (e.g., "Llama 3.2 natively handles this case better"). Remove from default views; archive for audit trails.',
            },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'Are There Regional or Compliance Considerations?',
          content: [
            '**Data residency and compliance requirements affect where and how you store prompts, especially when prompt bodies include sensitive customer data as placeholders.**',
            'As of April 2026, the main constraints by region:',
          ],
          items: [
            'EU / GDPR: If prompt templates include or reference personal data, the storage tool must meet GDPR requirements. Notion, Airtable, and most SaaS platforms offer EU data residency; verify before enabling for sensitive workflows.',
            'US SOC 2: For enterprise customers that require vendor compliance, choose tools with SOC 2 Type II certification (Notion, Airtable, PromptQuorum all qualify as of April 2026).',
            'Regulated industries (healthcare, finance, legal): System prompts that include patient identifiers or financial records need to stay in your own infrastructure. Use Git-based storage or a self-hosted option, not a consumer SaaS tool.',
            'Tip: Separate sensitive prompts (those that accept PII as inputs) from general-purpose prompts. Apply stricter access controls and shorter retention to the sensitive group.',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Never store real PII in a prompt body',
              text: 'Prompt templates should use placeholders like <CUSTOMER_NAME> — never real names, emails, or record IDs. Real data belongs only in the runtime input, not in the stored template.',
            },
          ],
        },
        faqSection: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is a prompt library?',
              a: 'A prompt library is a structured collection of tested prompts with metadata (inputs, model guidance, expected output, version, owner). Unlike a list of cool prompts copied from the internet, a prompt library is an internal product your team maintains and reuses for consistency and speed.',
            },
            {
              q: 'When should we use a prompt library instead of just keeping personal notes?',
              a: 'As soon as you have 3+ team members and 2+ prompts you use more than once. Personal notes work for one person; libraries work for teams. A library cuts task setup time, onboards new people faster, and prevents duplicate work.',
            },
            {
              q: 'How long does it take to build a usable prompt library from scratch?',
              a: 'Start small: 1–2 weeks to harvest 5–10 real prompts from everyday work, normalize them into a template, and upload them to a shared system. Then grow it over months as you add more prompts. Governance and tooling improve over time; start simple.',
            },
            {
              q: 'How do I get my team to actually contribute to a shared prompt library?',
              a: 'Make contribution easy and frictionless. Start with 3–5 champion prompts you create yourself so people see examples. Keep approval lightweight (one person, 5 minutes). Showcase wins ("This library saved us 10 hours this month"). Never make contribution mandatory; make it the path of least resistance.',
            },
            {
              q: 'Is a prompt library the same as a system prompt?',
              a: 'No. A system prompt is a single persistent instruction that sets the LLM\'s behavior for one conversation. A prompt library is a collection of prompts (each with context and metadata) shared across your team for many use cases. A system prompt might live in your library as one entry.',
            },
            {
              q: 'How often should we review and prune a prompt library?',
              a: 'Monthly at minimum. Look for: prompts nobody uses, prompts that drift (people keep editing the same one ad-hoc), and opportunities to consolidate. Mark unused prompts as Deprecated; retire them after 3 months of no activity. Actively used prompts stay fresh and useful.',
            },
            {
              q: 'How do you handle prompts that work on one model but not another?',
              a: 'Tag each prompt with tested models in metadata. When a prompt fails on a new model, create a variant — for example "Meeting summary – Claude" and "Meeting summary – GPT-4o" — rather than forcing one prompt to work everywhere. Multi-model testing tools let you compare output across models before promoting a prompt to Approved status.',
            },
            {
              q: 'What is the difference between a prompt library and a prompt management platform?',
              a: 'A prompt library is a collection of structured prompt records your team maintains — it can live in a Git repo, a spreadsheet, or a dedicated tool. A prompt management platform adds execution, analytics, version control, and collaboration features on top of the library concept. Start with a simple library and upgrade to a platform when volume or governance needs justify it.',
            },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            { title: 'Prompt Engineering Fundamentals', url: '/prompt-engineering' },
            { title: 'Few-Shot Prompting: Give Examples', url: '/prompt-engineering/few-shot-prompting' },
            { title: 'Chain-of-Thought: Reasoning Step-by-Step', url: '/prompt-engineering/chain-of-thought-prompting' },
            { title: 'How to Test Prompts Across Models', url: '/prompt-engineering/how-to-test-prompts-across-models' },
            { title: 'PromptQuorum: AI Dispatch & Multi-Model Consensus', url: '/how-it-works' },
            { title: 'Best Prompt Optimization Tools for Teams', url: '/prompt-engineering/best-prompt-optimization-tools-teams' },
          ],
        },
        sources: {
          title: 'Sources & Further Reading',
          items: [
            { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
            { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
          ],
        },
      },
    },
    de: {
  theme: 'Grundlagen',
  title: 'Erstelle eine Prompt-Bibliothek, die Zeit spart',
  intro: 'Eine Prompt-Bibliothek ist eine teamweite Sammlung getesteter Anweisungen mit Metadaten, die Ihrem Team hilft, Prompts zu standardisieren, zu teilen und zu verbessern. Richtig aufgebaut, wird sie zum zweiten Gehirn Ihres Teams: Sie reduziert Setup-Zeit, beschleunigt das Onboarding und verhindert, dass bewährte Prompts in persönlichen Notizen verloren gehen. Dieses 12-Schritte-Framework zeigt, wie Sie eine Prompt-Bibliothek bauen, die Ihr Team tatsächlich nutzt.',
  seoTitle: 'Prompt-Bibliothek erstellen: 12-Schritt-Framework für Teams 2026',
  metaDescription: 'Eine Prompt-Bibliothek ist eine gemeinsame, durchsuchbare Sammlung von getesteten Prompts mit Metadaten. Teams, die eine bauen, sparen Stunden beim Setup und Onboarding. Hier ist ein bewährtes Framework.',
  publishDate: '2026-03-24',
  dateModified: '2026-04-29',
  readTime: '12 Min. Lesezeit',
  educationalLevel: 'Beginner',
  audience: 'Teamleiter und Praktiker, die KI-Tools einführen',
  leadAnswerBlock: 'Eine Prompt-Bibliothek ist eine strukturierte, durchsuchbare Sammlung von Prompts mit Metadaten — nicht nur eine Liste. Teams, die eine richtig aufbauen, sparen Stunden beim Prompt-Setup und Onboarding neuer Mitarbeiter. Dieses Framework zeigt die 12 Schritte, um eine Bibliothek zu starten, die Ihr Team tatsächlich nutzt.',
  quickFacts: [
    'Eine Prompt-Bibliothek reduziert das Setup neue Prompts von Stunden auf Minuten.',
    'Jeder Prompt braucht mindestens: Titel, Body, Input-Variablen, erwartetes Output-Format, Tags, Besitzer, Version.',
    'Die beste Organisationsstruktur: nach Aufgabe/Funktion (nicht nach Modell); Modell-Details gehören in die Metadaten.',
    'Leichte Governance (Draft → Approved → Deprecated) verhindert Qualitätsverlust und hält die Bibliothek nutzbar.',
    'Versionierung ist kritisch: v1.0, v1.1 mit Änderungsnotizen; Rollback muss möglich sein.',
  ],
  toc: [
    { label: 'Was ist eine Prompt-Bibliothek?', anchor: 'what-is-library' },
    { label: 'Warum sollte Ihr Team eine bauen?', anchor: 'why-build-one' },
    { label: 'Was sollte man speichern?', anchor: 'what-to-store' },
    { label: 'Wie fängst du an?', anchor: 'how-to-start' },
    { label: 'Versionierung und Qualitätskontrolle', anchor: 'versioning' },
    { label: 'Wo sollte man speichern?', anchor: 'where-to-store' },
    { label: 'Häufige Fehler', anchor: 'common-mistakes' },
    { label: 'Regionale und Compliance-Überlegungen', anchor: 'regional-considerations' },
    { label: 'Häufig gestellte Fragen', anchor: 'faq-section' },
    { label: 'Weiterführende Literatur', anchor: 'related-reading' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/build-a-prompt-library?lang=de',
    inLanguage: 'de',
    headline: 'Erstelle eine Prompt-Bibliothek, die Zeit spart',
    description: 'Eine Prompt-Bibliothek ist eine teamweite Sammlung getesteter Anweisungen mit Metadaten, die Ihrem Team hilft, Prompts zu standardisieren, zu teilen und zu verbessern.',
    image: 'https://www.promptquorum.com/og-build-a-prompt-library-de.png',
    datePublished: '2026-03-24',
    dateModified: '2026-04-29',
    author: { '@type': 'Person', name: 'Hans Kuepper' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Prompt-Bibliotheken' },
      { '@type': 'Thing', name: 'Prompt Engineering' },
      { '@type': 'Thing', name: 'KI-Governance' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      { '@type': 'SoftwareApplication', name: 'Notion' },
      { '@type': 'SoftwareApplication', name: 'Airtable' },
    ],
    teaches: [
      'Wie man eine strukturierte Prompt-Bibliothek baut',
      'Was in jeden Prompt gehört (Metadaten, Versionierung, Besitzer)',
      'Wie man Prompts nach Aufgabe/Funktion organisiert',
      'Leichte Governance-Prozesse für Qualitätskontrolle',
      'Werkzeuge und Plattformen für Prompt-Verwaltung',
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    audience: { '@type': 'Audience', audienceType: 'Teamleiter und KI-Praktiker' },
    keywords: ['Prompt-Bibliothek', 'Prompt Engineering', 'KI-Governance', 'Prompt-Verwaltung', 'Versionierung', 'Teamzusammenarbeit'],
    primaryTerm: 'Prompt-Bibliothek',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'de',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist eine Prompt-Bibliothek?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine Prompt-Bibliothek ist eine strukturierte, durchsuchbare Sammlung von Prompts, die Ihr Team verwaltet. Sie kann in einem Git-Repo, einer Tabelle oder einem dedizierten Tool leben. Das Ziel: Prompts standardisieren, teilen und verbessern, statt sie in persönlichen Notizen zu verlieren.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wann sollte Ihr Team eine Prompt-Bibliothek statt persönlicher Notizen verwenden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Verwenden Sie eine Bibliothek sobald mehr als eine Person die gleichen Prompts nutzt. Persönliche Notizen funktionieren für Einzelne, aber wenn Ihr Team skaliert, verlieren Sie bewährte Prompts und verschwenden Zeit mit Doppelarbeit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie lange dauert es, eine brauchbare Prompt-Bibliothek von Grund auf zu erstellen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine minimale Bibliothek mit 10–15 getesteten Prompts dauert 2–4 Wochen (abhängig von Teamgröße). Mit aktiver Nutzung und monatlichen Reviews wächst die Qualität kontinuierlich. Rechnen Sie mit weniger als 1 Stunde pro Woche für Wartung, sobald die Struktur etabliert ist.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie bringe ich mein Team dazu, tatsächlich zu einer gemeinsamen Prompt-Bibliothek beizutragen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Machen Sie den Beitrag so einfach wie möglich: ein Formular oder Git-Template, klare Metadaten-Anforderungen, und monatliche Reviews. Das Wichtigste: Zeigen Sie Mehrwert — Teams tragen bei, wenn sie sehen, dass ihre Prompts genutzt und verbessert werden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist eine Prompt-Bibliothek dasselbe wie ein System-Prompt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. Ein System-Prompt sind Regeln, die Sie einmal definieren und auf alle Eingaben anwenden. Eine Prompt-Bibliothek ist eine Sammlung von verschiedenen Prompts für verschiedene Aufgaben — jeder mit eigenen Metadaten und Versionen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie oft sollte Ihr Team eine Prompt-Bibliothek überprüfen und bereinigen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monatlich ist ideal. Markieren Sie selten genutzte Prompts als Deprecated, fördern Sie verbesserte Versionen zu Approved, und erstellen Sie neue Kategorien, wenn sich die Nutzung verändert. Teams, die monatlich reviewen, haben 20–30 % weniger Bloat nach 6 Monaten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie handhabe ich Prompts, die auf einem Modell funktionieren, aber nicht auf einem anderen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Taggen Sie jeden Prompt mit getesteten Modellen in den Metadaten. Wenn ein Prompt auf einem neuen Modell nicht funktioniert, erstellen Sie eine Variante — zum Beispiel "Meeting-Zusammenfassung – Claude" und "Meeting-Zusammenfassung – GPT-4o" — statt einen Prompt zu zwingen, überall zu funktionieren. Multi-Modell-Test-Tools lassen Sie Output vergleichen, bevor Sie einen Prompt zu Approved promovieren.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen einer Prompt-Bibliothek und einer Prompt-Management-Plattform?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine Prompt-Bibliothek ist eine Sammlung strukturierter Prompt-Einträge, die Ihr Team verwaltet — sie kann in einem Git-Repo, einer Tabelle oder einem dedizierten Tool leben. Eine Prompt-Management-Plattform fügt Ausführung, Analysen, Versionskontrolle und Collaboration-Features auf top der Bibliothek hinzu. Fangen Sie mit einer einfachen Bibliothek an und upgraden Sie zu einer Plattform, wenn Volumen oder Governance es rechtfertigen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Muss ich bei der Verwendung von PromptQuorum die DSGVO beachten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Wenn Prompt-Templates persönliche Daten enthalten oder referenzieren, muss das Speichertool DSGVO-konform sein. Notion, Airtable und PromptQuorum bieten alle EU-Datenspeicherung an; überprüfen Sie die Einstellungen vor der Aktivierung für sensitive Workflows. Die wichtigste Regel: Speichern Sie echte persönliche Daten nie im Prompt-Body — nutzen Sie Platzhalter wie <CUSTOMER_NAME> und übergeben Sie echte Daten nur im Runtime-Input. Für Article 28 Compliance (Auftragsverarbeitung) benötigen Sie einen Data Processing Agreement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist PromptQuorum für den deutschen Mittelstand geeignet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Mittelstand-Unternehmen profitieren von PromptQuorum für Qualitätskontrolle, Wissensmanagement und Governance. PromptQuorum erfüllt SOC 2 Type II Zertifizierung (Stand 2026) und unterstützt DSGVO Article 28 Anforderungen für Auftragsverarbeitung. Nutzen Sie lokale Inference für sensitive Workflows (Finanzen, Medizin, Recht) und Prompt-Verwaltung für breitere Adoption in Teams. BSI-Grundschutz-Kataloge sind mit PromptQuorum EU-based Deployment kompatibel.',
        },
      },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'de',
    name: 'Wie man eine Prompt-Bibliothek baut',
    description: 'Ein 12-Schritt-Framework zum Aufbau einer Prompt-Bibliothek, die Ihr Team tatsächlich nutzt.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Sammeln Sie echte Prompts, die Ihr Team heute nutzt',
        text: 'Fangen Sie bottom-up an. Fragen Sie jeden auf dem Team: Welche Prompts nutzen Sie regelmäßig? Sammeln Sie die Top 10–15 echten Prompts, die greifbare Ergebnisse bringen. Dies wird Ihre Gründungsbibliothek.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Normalisieren Sie jeden Prompt in die gleiche Struktur',
        text: 'Fügen Sie Metadaten hinzu: Titel, Body (der echte Prompt), Input-Variablen (wie <CUSTOMER_NAME>), erwartetes Output-Format, Tags, Besitzer, Version. Dies verhindert Chaos, wenn die Bibliothek wächst.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Organisieren Sie nach Aufgabe/Funktion, nicht nach Modell',
        text: 'Struktur: "Meeting Summaries" → v1.0 (Claude), v1.0 (GPT-4o) statt "Claude Prompts" → "Meeting Summaries". Modell-Details gehören in Metadaten, nicht in die Ordnerstruktur.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Führen Sie leichte Governance ein: Draft → Approved → Deprecated',
        text: 'Neue Prompts starten als Draft. Nach dem Team-Test und Feedback: Approved. Wenn veraltet oder überholt: Deprecated (nicht gelöscht, damit keine Referenzen brechen). Dies verhindert, dass schlechte Prompts in die Produktion gehen.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Versionieren Sie explizit: v1.0, v1.1 mit Change Notes',
        text: 'Jede Änderung erhält eine Versionsnummer und eine Change Note. Beispiel: v1.1 "Bessere Halluzination-Reduktion durch mehr Examples". Dies macht Rollback einfach und hilft Teams, Verbesserungen zu verstehen.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Etablieren Sie monatliche Review-Zyklen',
        text: 'Jeden Monat: Nutzen Sie Metriken (wie oft wurde dieser Prompt benutzt?), priorisieren Sie Verbesserungen, promovieren Sie bessere Versionen. Teams, die monatlich reviewen, sehen 20–30 % weniger Bloat nach 6 Monaten.',
      },
    ],
  },
  sections: {
    tldr: {
      isTldr: true,
      items: [
        'Eine Prompt-Bibliothek = strukturiertes Repository mit Metadaten, nicht nur eine Liste von Prompts',
        'Jeder Eintrag braucht: Titel, Prompt-Body, Input-Variablen, Output-Format, Tags, Besitzer, Version',
        'Bauen Sie bottom-up: sammeln Sie echte Prompts erst, normalisieren Sie sie dann in Templates',
        'Organisieren Sie nach Aufgabe/Funktion (nicht nach Modell); Modell-Details gehören in Metadaten',
        'Leichte Governance (Draft → Approved → Deprecated) verhindert Qualitätsverlust',
        'Versionieren Sie explizit (v1.0, v1.1) mit Change Notes; Rollback muss möglich sein',
        'Monatliche Reviews: Retire low-use Prompts, promote improved versions',
      ],
    },
    whatIsLibrary: {
      id: 'what-is-library',
      title: 'Was ist eine Prompt-Bibliothek?',
      content: [
        'Eine Prompt-Bibliothek ist eine strukturierte, durchsuchbare Sammlung von Prompts, die Ihr Team als eine centrale Quelle der Wahrheit verwaltet. Jeder Prompt ist ein Datensatz mit Metadaten (Titel, Besitzer, Version, Tags, getestete Modelle), nicht nur Text in einem Dokument.',
        'Die Bibliothek lebt irgendwo — in einem Git-Repo, einer Notion-Datenbank, Airtable, einer Google Sheet oder einem dedizierten Tool wie PromptQuorum. Das Wichtigste: Sie ist durchsuchbar, versioniert und mit Team-Zugriff geteilt.',
        'Das Ziel: Ihr Team spart Zeit (Prompts nicht neu erfinden), onboardet schneller (neue Mitarbeiter nutzen bewährte Prompts statt bei null anzufangen), und verhindert Qualitätsverlust (schlechte Prompts werden aussortiert, gute werden verbessert).',
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Nicht nur eine Liste',
          text: 'Eine Prompt-Sammlung in einer Slack-Nachricht oder einem Google Doc ist ein Start — aber keine echte Bibliothek. Eine Bibliothek ist durchsuchbar, versioniert und hat Metadaten.',
        },
      ],
    },
    libraryAsset: {
      id: 'library-asset',
      title: 'Warum ist eine Prompt-Bibliothek ein digitales Asset?',
      content: 'Eine bewährte Prompt-Bibliothek ist wie ein Code-Repository — ein Wissens-Asset, das Wiederverwertung ermöglicht, Qualität verbessert und Onboarding beschleunigt. Wenn die beste Person Ihr Unternehmen verlässt, gehen ihre bewährten Prompts nicht mit ihnen weg.',
    },
    whyBuildOne: {
      id: 'why-build-one',
      title: 'Warum sollte Ihr Team eine Prompt-Bibliothek bauen?',
      items: [
        'Zeit sparen: Neue Prompts brauchen Stunden Trial-and-Error. Eine Bibliothek reduziert Setup von Stunden auf Minuten.',
        'Schneller onboarden: Neue Mitarbeiter nutzen bewährte Prompts am ersten Tag statt eigene zu erfinden.',
        'Qualitätskontrolle: Schlechte Prompts werden durchfallen, gute werden verbessert. Die Qualität steigt kontinuierlich.',
        'Wissen behalten: Wenn jemand das Team verlässt, gehen seine bewährten Prompts nicht mit ihm weg.',
        'A/B-Testing ermöglichen: Compare Versionen (v1.0 vs v1.1), sehen welche besser funktioniert.',
        'Modell-Experiments vereinfachen: Test the same prompt auf GPT-4o, Claude, Llama 3.1 — Track welche Model best ist.',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'Ohne Bibliothek: Chaos am Scale',
          text: 'Teams ohne eine Bibliothek sehen: doppelte Arbeit (jeder erfindet die gleiche Prompt neu), Qualitätsverlust (schlechte Prompts kursieren), langes Onboarding (neue Mitarbeiter haben keinen Startpunkt).',
        },
      ],
    },
    sharedSystem: {
      id: 'shared-system',
      title: 'Eine Prompt-Bibliothek ist ein System, das das Team teilt',
      content: 'Das Wichtigste: Es ist nicht Top-Down erzwungen, sondern Bottom-Up gebaut. Ihr Team liefert die echten Prompts. Sie normalisieren und verwalten sie gemeinsam. Die Governance ist leicht — nur genug Struktur um Chaos zu vermeiden, nicht so viel, dass Beiträge unmöglich werden.',
    },
    whatToStore: {
      id: 'what-to-store',
      title: 'Was sollte man in einer Prompt-Bibliothek speichern?',
      content: 'Nicht jeden Prompt, den jemand je geschrieben hat — nur Prompts, die wiederverwendbar sind und Geschäftsergebnisse antreiben.',
      items: [
        'Task-spezifische Prompts: "Meeting Summaries", "Email Draft", "Code Review", "Customer Q&A"',
        'Getestete Prompts: Die Prompt muss in Produktion getestet sein und dokumentierte Ergebnisse haben',
        'Team-Prompts: Prompts die mehr als eine Person nutzt. Private Prompts sind nicht nötig (die bleiben lokal).',
        'Wiederverwendbare Prompts: Solche, die auf verschiedene Eingaben anwendbar sind (nicht eine Einweg-Prompt für ein einzelnes Dokument).',
      ],
    },
    schemaBreakdown: {
      id: 'schema-breakdown',
      title: 'Was gehört in jede Prompt-Bibliotheks-Eintrag?',
      items: [
        '**Titel**: Kurz, beschreibend ("Meeting Summary v1.1", nicht "My Best Prompt")',
        '**Prompt-Body**: Der echte Prompt-Text mit Input-Variablen als Platzhalter (<MEETING_TRANSCRIPT>, <TONE>)',
        '**Input-Variablen**: Was könnte sich ändern? (<LANGUAGE>, <CUSTOMER_TYPE>, <FORMAT>)',
        '**Output-Format**: Wie soll das Output aussehen? (JSON, Markdown, Plain Text, List?)',
        '**Besitzer**: Wer hat ihn geschrieben? Wer ist verantwortlich für Updates?',
        '**Tags**: Kategorien für Suche ("sales", "support", "legal", "content-gen")',
        '**Version**: v1.0, v1.1, v2.0 — mit Change Note (was sich verändert hat)',
        '**Getestete Modelle**: "Claude 4.6, GPT-4o" (dies hilft Teams, die richtige Variante zu wählen)',
        '**Status**: Draft, Approved, Deprecated (verhindert schlechte Prompts in Produktion)',
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Inputs als Platzhalter speichern',
          text: 'Speichern Sie immer `<VARIABLE>` nicht echte Daten im Prompt-Body. Real data gehört nur in Runtime Input, nicht im Template.',
        },
      ],
      promptExamples: [
        {
          bad: 'Meeting Summary Prompt\n\nMy meeting with Sarah Johnson on March 24 was about Q2 budget planning. Here\'s what happened: ....',
          good: 'Meeting Summary (v1.1 – Claude)\n\nInput: <MEETING_TRANSCRIPT>\nOutput: JSON with {summary: string, action_items: string[], duration_minutes: number}\n\nPrompt: Zusammenfasse die folgende Besprechung...',
          badLabel: '❌ Persönliche Daten im Body, keine Struktur, keine Variablen',
          goodLabel: '✅ Platzhalter, klares Format, versioniert, modellspezifisch',
        },
      ],
    },
    optionalFields: {
      id: 'optional-fields',
      title: 'Optionale Felder (später hinzufügen)',
      content: 'Fangen Sie mit den 9 Pflichtfeldern oben an. Später können Sie hinzufügen:',
      items: [
        '**Kostennotizen**: "Dieser Prompt kostet ~0,02 € pro Aufruf bei GPT-4o"',
        '**Performance-Metriken**: "Latency: <2 seconds", "Token count: ~500"',
        '**Lektionen gelernt**: "Tried few-shot — doesn\'t improve accuracy for this task"',
        '**Abhängigkeiten**: "Needs retrieval_context input (from RAG system)"',
      ],
    },
    howToStart: {
      id: 'how-to-start',
      title: 'Wie fängst du an: Ein 6-Schritte-Framework',
      numberedItems: [
        {
          title: 'Sammeln Sie echte Prompts',
          whyItMatters: 'Fragen Sie jeden auf dem Team: "Was sind die Top 3 Prompts, die Sie regelmäßig nutzen?" Sammeln Sie 10–15 echte Prompts. Dies ist Ihre Gründungsbibliothek — nicht theoretisch, sondern real in Produktion.',
        },
        {
          title: 'Normalisieren Sie die Struktur',
          whyItMatters: 'Nutzen Sie die 9 Pflichtfelder (Titel, Body mit Platzhaltern, Input-Variablen, Output-Format, Tags, Besitzer, Version, Status, getestete Modelle). Alle Prompts sollten die gleiche Struktur haben.',
        },
        {
          title: 'Organisieren Sie nach Aufgabe',
          whyItMatters: 'Struktur: "Sales" (Email Draft, Objection Handling, Proposal Review) statt "Claude Prompts" (durcheinander). Modell-Details gehören in Metadaten, nicht in Folder-Namen.',
        },
        {
          title: 'Einführen Sie leichte Governance',
          whyItMatters: 'Draft → Approved → Deprecated. Neue Prompts starten als Draft. Nach Test + Team-Feedback: Approved. Alte Prompts: Deprecated (nicht gelöscht). Diese einfache Struktur verhindert schlechte Prompts in Produktion.',
        },
        {
          title: 'Versionieren Sie explizit',
          whyItMatters: 'Jede Änderung erhält v1.0, v1.1, v2.0 mit einer Change Note: "v1.1: Verbesserte Halluzination-Reduktion durch 3 Beispiele statt 1". Dies macht Rollback einfach.',
        },
        {
          title: 'Starten Sie monatliche Reviews',
          whyItMatters: 'Jeden Monat: Welche Prompts sind beliebt? Welche wurden nie genutzt? Bessere Versionen promovieren. Deprecated markieren. Dies hält die Bibliothek lean und nützlich.',
        },
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: 'Bottom-up bauen (echte Prompts sammeln), normalisieren, leicht regieren, monatlich reviewen.',
        },
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Nicht zu viel Engineering von Anfang an',
          text: 'Eine Google Sheet reicht für 1–20 Prompts. Erst upgraden Sie auf Notion/Airtable/PromptQuorum, wenn Sie 30+ Prompts haben oder wenn Sie API-Zugriff brauchen.',
        },
      ],
    },
    timelyRefinement: {
      id: 'timely-refinement',
      title: 'Kontinuierliche Verbesserung: Die Bibliothek wächst stärker, wenn Sie sie nutzen',
      content: [
        'Die erste Version Ihrer Bibliothek ist draft. Real value kommt von kontinuierlicher Nutzung und monatlichen Verbesserungen.',
        'Nach einer Woche: Welche Prompts nutzt das Team am häufigsten? Welche Probleme sind aufgetaucht? Diese Feedback-Loop-Daten teilen Sie in Ihre nächsten Versionen ein.',
      ],
    },
    whereToStore: {
      id: 'where-to-store',
      title: 'Wo sollte man eine Prompt-Bibliothek speichern?',
      content: 'Die Wahl hängt von Teamgröße, Governance-Anforderungen und Integration ab. Es gibt 3 gängige Optionen:',
    },
    storageOptions: {
      id: 'storage-options',
      items: [
        '**Markdown in Git-Repo** — beste Wahl für Teams <5. Kostenlos, versioniert, Code-nah. Problem: Nicht durchsuchbar (außer grep).',
        '**Notion oder Airtable** — beste Wahl für Teams 5–20. Durchsuchbar, schöne UI, einfache Collaboration. Problem: Nicht API-nativ (PromptQuorum ist API-first).',
        '**Dedizierte Prompt-Plattform (PromptQuorum)** — beste Wahl für Teams >20 oder wenn Sie Governance, Auditing, API-Zugriff brauchen.',
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Fangen Sie klein an',
          text: 'Git-Repo reicht für die erste Woche. Erst wenn Ihr Team >5 ist oder wenn Sie häufig suchbar zugreifen müssen, upgraden Sie auf Notion/Airtable/PromptQuorum.',
        },
      ],
    },
    structureApproach: {
      id: 'structure-approach',
      title: 'Organisationsstruktur',
      content: 'Egal wo Sie speichern: die Struktur sollte nach **Aufgabe/Funktion** sein, nicht nach Modell.',
      items: [
        '✅ Richtig: Sales → Email Draft (v1.0 Claude, v1.0 GPT-4o) → Customer Objection Handling (v1.1 Claude)',
        '❌ Falsch: Claude → Sales Prompts → Email Draft',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: 'Warum Aufgabe statt Modell?',
      content: 'Wenn Sie nach Modell organisieren, passiert folgendes: Irgendwann möchten Sie einen Prompt auf einem anderen Modell testen. Jetzt müssen Sie die Prompt-Datei kopieren, umbenennen, beide Versionen synchron halten. Das ist Fehler-anfällig und langweilig.',
      items: [
        'Wenn Sie nach Aufgabe organisieren: "Email Draft" hat Varianten (Claude v1.0, GPT-4o v1.0) als klare Einträge. Leicht zu vergleichen, leicht zu aktualisieren.',
      ],
    },
    storageTableNote: {
      id: 'storage-table-note',
      title: 'Vergleich der 3 Speicheroptionen',
      callouts: [
        {
          type: 'info',
          label: 'Tabelle unten',
          text: 'Wählen Sie die Speicheroption basierend auf Teamgröße, Durchsuchbarkeit und ob Sie eine API brauchen.',
        },
      ],
    },
    storageTable: {
      id: 'storage-table',
      tableFormat: true,
      columns: ['Option', 'Best für', 'Versionskontrolle', 'Suche', 'Governance'],
      rows: [
        {
          'Option': 'Markdown in Git',
          'Best für': 'Teams <5, Engineering-nah',
          'Versionskontrolle': 'Natif (Git)',
          'Suche': 'Nur grep',
          'Governance': 'Manuell (Pull Request Review)',
        },
        {
          'Option': 'Notion / Airtable',
          'Best für': 'Teams 5–20, Non-technical Zugang wichtig',
          'Versionskontrolle': 'Built-in (aber basic)',
          'Suche': 'Natif (Tag/Search)',
          'Governance': 'Permissions, aber wenig Audit Trail',
        },
        {
          'Option': 'PromptQuorum (Dediziert)',
          'Best für': 'Teams >20, Governance/Auditing erforderlich',
          'Versionskontrolle': 'Full (Rollback, Diffs)',
          'Suche': 'Natif + API',
          'Governance': 'RBAC, Audit Logs, Approval Workflows',
        },
      ],
    },
    versioning: {
      id: 'versioning',
      title: 'Wie man Prompts versioniert und Qualität aufrechterhält',
      content: 'Versionierung ist das Rückgrat einer funktionierenden Bibliothek. Ohne explizite Versionen passiert folgendes: Jemand ändert einen Prompt, bricht unbeabsichtigt ein Production System, und niemand weiß warum.',
      items: [
        '**v1.0**: Erste stabile Version. Production ready. Hat getestete Ergebnisse.',
        '**v1.1**: Minor-Verbesserung. Gleiche Logik, bessere Ergebnisse (z.B. "v1.1: +2 Examples zur Halluzination-Reduktion").',
        '**v2.0**: Major-Überarbitung. Änderung der Logik, Input-Variablen, oder Output-Format. Große Versionen sind selten.',
        '**Change Notes**: Immer dokumentieren WAS sich geändert hat ("Bessere Customer Tone durch Style Guide hinzufügt") — nicht nur "updated".',
        '**Rollback-Möglich**: Keep alte Versionen zugänglich. Wenn v1.1 besser nicht läuft, rollback zu v1.0 in 1 Klick.',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'Keine "Latest" ohne Versionsnummer',
          text: 'Wenn Ihr System immer "Latest" nutzt und jemand ändert einen Prompt, alle Production-Systeme brechen kaputt. Nutzen Sie immer explizite Versionen (v1.0, v1.1, v2.0).',
        },
      ],
    },
    commonMistakes: {
      id: 'common-mistakes',
      title: 'Häufige Fehler und wie man sie vermeidet',
      mistakes: [
        {
          mistake: 'Echte Daten im Prompt-Body speichern',
          problem: 'Beispiel: "Mein Kunde Sarah Johnson...". Wenn dieser Prompt geteilt wird oder in Git geht, sind echte persönliche Daten leicht auffindbar.',
          fix: 'Immer Platzhalter nutzen: <CUSTOMER_NAME>. Real data gehört nur in Runtime Input.',
        },
        {
          mistake: 'Keine Input-Variablen definieren',
          problem: 'Jemand nutzt einen Prompt lokal mit "Mein Meeting war heute um 10 Uhr..." — aber hat nicht dokumentiert WELCHE Variablen sich ändern können. Später nutzen andere den Prompt mit harten Codedaten.',
          fix: 'Dokumentieren Sie jede Variable: <MEETING_TIME>, <PARTICIPANT_COUNT>, <FOCUS>. Zeigen Sie, wie man sie ersetzt.',
        },
        {
          mistake: 'Überwertung von Governance von Anfang an',
          problem: 'Teams starten mit komplexem Approval Workflow (3 Reviewer, Change Control Boards). Nach 2 Wochen: Niemand trägt Prompts bei.',
          fix: 'Start mit Draft → Approved → Deprecated. Nur das. Komplexere Workflows später, wenn Teams >15.',
        },
        {
          mistake: 'Veraltete Prompts nicht Deprecated markieren',
          problem: 'Alte Versionen sammeln sich an. Teams sind verwirrt: "Nutze ich v1.0 oder v1.1?" Production-Systeme enden mit schlechten alten Versionen.',
          fix: 'Monatliche Reviews: Prompts, die nie nutzt werden, Deprecated markieren (nicht löschen — Referenzen in Code könnten brechen). Mit Grund ("übertroffen durch v1.2").',
        },
        {
          mistake: 'Nie reviewen, nie verbessern',
          problem: 'Bibliothek stagniert. Schlechte Prompts werden nicht gefixed. Bessere Versionen werden nie promoviert. Team verliert Vertrauen.',
          fix: 'Monatliche 1-Stunden-Reviews: Top-Use Prompts analysieren, Feedback umschreiben, Besseres zu Approved promovieren. Kontinuierliche Verbesserung zeigt, dass die Bibliothek lebendig ist.',
        },
      ],
    },
    regionalConsiderations: {
      id: 'regional-considerations',
      title: 'Regionale und Compliance-Überlegungen',
      content: [
        '**Datenspeicherung und Compliance-Anforderungen beeinflussen, wo und wie Sie Prompts speichern, besonders wenn Prompt-Bodies sensitive Kundendaten als Platzhalter enthalten.**',
        'Stand April 2026 sind die Hauptbeschränkungen regional:',
      ],
      items: [
        '**EU / DSGVO**: Wenn Prompt-Templates persönliche Daten enthalten oder referenzieren, muss das Speichertool DSGVO-konform sein. Notion, Airtable und PromptQuorum bieten alle EU-Datenspeicherung an; überprüfen Sie die Einstellungen vor Aktivierung für sensitive Workflows. **DSGVO Article 28 (Auftragsverarbeitung):** Wenn Sie einen Drittanbieter (wie PromptQuorum) zum Speichern von Prompts nutzen, die Kundendaten enthalten, benötigen Sie einen Data Processing Agreement (DPA).',
        '**US SOC 2**: Für Enterprise-Kunden, die Vendor-Compliance benötigen, wählen Sie Tools mit SOC 2 Type II Zertifizierung (Notion, Airtable, PromptQuorum alle erfüllen das Stand 2026).',
        '**Regulierte Industrien (Gesundheit, Finanzen, Recht)**: System-Prompts, die Patienten-IDs oder Finanzaktenzeichen enthalten, müssen in Ihrer eigenen Infrastruktur bleiben. Nutzen Sie Git-basierte Speicherung oder eine gehostete Option — nicht ein Consumer-SaaS-Tool.',
        '**Tipp**: Trennen Sie sensitive Prompts (solche, die PII als Inputs akzeptieren) von allgemein nutzbaren Prompts. Wenden Sie strengere Zugriffskontrolle und kürzere Aufbewahrung auf die sensitive Gruppe an.',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'Speichern Sie NIE echte PII im Prompt-Body',
          text: 'Prompt-Templates sollten Platzhalter nutzen wie <CUSTOMER_NAME> — nie echte Namen, Emails oder Datensatz-IDs. Real data gehört nur in den Runtime Input, nicht in das gespeicherte Template.',
        },
      ],
    },
    faqSection: {
      id: 'faq-section',
      title: 'Häufig gestellte Fragen',
      faqs: [
        {
          q: 'Was ist eine Prompt-Bibliothek?',
          a: 'Eine Prompt-Bibliothek ist eine strukturierte, durchsuchbare Sammlung von Prompts, die Ihr Team als eine zentrale Quelle der Wahrheit verwaltet. Sie kann in einem Git-Repo, einer Notion-Datenbank, Airtable, einer Google Sheet oder einem dedizierten Tool leben. Das Ziel: Wiederverwendung ermöglichen, Qualität verbessern, schneller onboarden.',
        },
        {
          q: 'Wann sollte unser Team eine Prompt-Bibliothek statt persönlicher Notizen verwenden?',
          a: 'Sobald mehr als eine Person die gleichen Prompts nutzt. Persönliche Notizen funktionieren für Einzelne — aber wenn Ihr Team skaliert, verlieren Sie bewährte Prompts und verschwenden Zeit mit Doppelarbeit.',
        },
        {
          q: 'Wie lange dauert es, eine brauchbare Prompt-Bibliothek von Grund auf zu erstellen?',
          a: 'Eine minimale Bibliothek mit 10–15 getesteten Prompts dauert 2–4 Wochen (abhängig von Teamgröße). Mit aktiver Nutzung und monatlichen Reviews wächst die Qualität kontinuierlich. Rechnen Sie mit weniger als 1 Stunde pro Woche für Wartung, sobald die Struktur etabliert ist.',
        },
        {
          q: 'Wie bringe ich mein Team dazu, tatsächlich zu einer gemeinsamen Prompt-Bibliothek beizutragen?',
          a: 'Machen Sie den Beitrag so einfach wie möglich: ein Formular oder Git-Template, klare Metadaten-Anforderungen, und monatliche Reviews. Das Wichtigste: Zeigen Sie Mehrwert — Teams tragen bei, wenn sie sehen, dass ihre Prompts genutzt und verbessert werden.',
        },
        {
          q: 'Ist eine Prompt-Bibliothek dasselbe wie ein System-Prompt?',
          a: 'Nein. Ein System-Prompt sind Regeln, die Sie einmal definieren und auf alle Eingaben anwenden. Eine Prompt-Bibliothek ist eine Sammlung von verschiedenen Prompts für verschiedene Aufgaben — jeder mit eigenen Metadaten und Versionen.',
        },
        {
          q: 'Wie oft sollte Ihr Team eine Prompt-Bibliothek überprüfen und bereinigen?',
          a: 'Monatlich ist ideal. Markieren Sie selten genutzte Prompts als Deprecated, fördern Sie verbesserte Versionen zu Approved, und erstellen Sie neue Kategorien, wenn sich die Nutzung verändert. Teams, die monatlich reviewen, haben 20–30 % weniger Bloat nach 6 Monaten.',
        },
        {
          q: 'Wie handhabe ich Prompts, die auf einem Modell funktionieren, aber nicht auf einem anderen?',
          a: 'Taggen Sie jeden Prompt mit getesteten Modellen in den Metadaten. Wenn ein Prompt auf einem neuen Modell nicht funktioniert, erstellen Sie eine Variante — zum Beispiel "Meeting Summary – Claude" und "Meeting Summary – GPT-4o" — statt einen Prompt zu zwingen, überall zu funktionieren. Multi-Modell-Test-Tools lassen Sie Output vergleichen, bevor Sie einen Prompt zu Approved promovieren.',
        },
        {
          q: 'Was ist der Unterschied zwischen einer Prompt-Bibliothek und einer Prompt-Management-Plattform?',
          a: 'Eine Prompt-Bibliothek ist eine Sammlung strukturierter Prompt-Einträge, die Ihr Team verwaltet — sie kann in einem Git-Repo, einer Tabelle oder einem dedizierten Tool leben. Eine Prompt-Management-Plattform fügt Ausführung, Analysen, Versionskontrolle und Zusammenarbeits-Features auf top der Bibliothek hinzu. Starten Sie mit einer einfachen Bibliothek und upgraden Sie zu einer Plattform, wenn Volumen oder Governance es rechtfertigen.',
        },
        {
          q: 'Muss ich bei der Verwendung von PromptQuorum die DSGVO beachten?',
          a: 'Ja. Wenn Prompt-Templates persönliche Daten enthalten oder referenzieren, muss das Speichertool DSGVO-konform sein. Notion, Airtable und PromptQuorum bieten alle EU-Datenspeicherung an; überprüfen Sie die Einstellungen vor der Aktivierung für sensitive Workflows. Die wichtigste Regel: Speichern Sie echte persönliche Daten nie im Prompt-Body — nutzen Sie Platzhalter wie <CUSTOMER_NAME> und übergeben Sie echte Daten nur im Runtime-Input. Für Article 28 Compliance (Auftragsverarbeitung) benötigen Sie einen Data Processing Agreement.',
        },
        {
          q: 'Ist PromptQuorum für den deutschen Mittelstand geeignet?',
          a: 'Ja. Mittelstand-Unternehmen profitieren von PromptQuorum für Qualitätskontrolle, Wissensmanagement und Governance. PromptQuorum erfüllt SOC 2 Type II Zertifizierung (Stand 2026) und unterstützt DSGVO Article 28 Anforderungen für Auftragsverarbeitung. Nutzen Sie lokale Inference für sensitive Workflows (Finanzen, Medizin, Recht) und Prompt-Verwaltung für breitere Adoption in Teams. BSI-Grundschutz-Kataloge sind mit PromptQuorum EU-based Deployment kompatibel.',
        },
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: 'Weiterführende Literatur',
      items: [
        { title: 'Prompt Engineering Fundamentals', url: '/prompt-engineering/fundamentals?lang=de' },
        { title: 'Few-Shot Prompting: Mit Beispielen besser prompten', url: '/prompt-engineering/few-shot-prompting?lang=de' },
        { title: 'Chain-of-Thought Prompting: Step-by-Step Reasoning', url: '/prompt-engineering/chain-of-thought?lang=de' },
        { title: 'PromptQuorum: Prompt Management Made Easy', url: '/features?lang=de' },
        { title: 'System-Prompt vs. User-Prompt: Was ist der Unterschied?', url: '/prompt-engineering/system-prompt-vs-user-prompt?lang=de' },
        { title: 'Prompt Testing und Optimization', url: '/prompt-engineering/prompt-testing?lang=de' },
      ],
    },
    sources: {
      id: 'sources',
      title: 'Quellen & Weiterführende Literatur',
      items: [
        { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
        { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
        { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
        { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
      ],
    },
  },
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-24',
},
    fr: {
  theme: 'Fondamentaux',
  title: 'Créer une bibliothèque de prompts qui fait gagner du temps',
  intro: 'Une bibliothèque de prompts est une collection d\'instructions testées avec métadonnées que votre équipe partage et améliore ensemble. Bien construite, elle devient le deuxième cerveau de votre équipe : elle réduit le temps de configuration, accélère l\'intégration et empêche les meilleurs prompts de se perdre dans des notes personnelles. Ce cadre en 12 étapes montre comment construire une bibliothèque que votre équipe utilise réellement.',
  seoTitle: 'Créer une bibliothèque de prompts : cadre 12 étapes pour les équipes 2026',
  metaDescription: 'Une bibliothèque de prompts est une collection partagée et consultable de prompts testés avec métadonnées. Les équipes qui en créent une gagnent des heures en configuration et intégration. Voici un cadre éprouvé.',
  publishDate: '2026-03-24',
  dateModified: '2026-04-29',
  readTime: '10 min de lecture',
  educationalLevel: 'Beginner',
  audience: 'Responsables d\'équipes et praticiens adoptant les outils IA',
  leadAnswerBlock: 'Une bibliothèque de prompts est une collection structurée et consultable de prompts avec métadonnées — pas juste une liste. Les équipes qui en créent une gagnent des heures en configuration de prompts et intégration des nouveaux collaborateurs. Ce cadre montre les 12 étapes pour lancer une bibliothèque que votre équipe utilise vraiment.',
  quickFacts: [
    'Une bibliothèque de prompts réduit la configuration de nouveaux prompts de plusieurs heures à quelques minutes.',
    'Chaque prompt a besoin au minimum : titre, contenu, variables d\'entrée, format de sortie attendu, étiquettes, propriétaire, version.',
    'La meilleure structure : par tâche/fonction (non par modèle) ; les détails du modèle vont dans les métadonnées.',
    'Une gouvernance légère (Brouillon → Approuvé → Déprécié) prévient la dérive de qualité et garde la bibliothèque utile.',
    'La versioning est critique : v1.0, v1.1 avec notes de changement ; le retour en arrière doit être possible.',
  ],
  toc: [
    { label: 'Qu\'est-ce qu\'une bibliothèque de prompts ?', anchor: 'what-is-library' },
    { label: 'Pourquoi votre équipe devrait-elle en créer une ?', anchor: 'why-build-one' },
    { label: 'Qu\'est-ce qu\'il faut stocker ?', anchor: 'what-to-store' },
    { label: 'Comment commencer ?', anchor: 'how-to-start' },
    { label: 'Versioning et contrôle de qualité', anchor: 'versioning' },
    { label: 'Où stocker ?', anchor: 'where-to-store' },
    { label: 'Erreurs courantes', anchor: 'common-mistakes' },
    { label: 'Considérations régionales et conformité', anchor: 'regional-considerations' },
    { label: 'Questions fréquemment posées', anchor: 'faq-section' },
    { label: 'Lectures complémentaires', anchor: 'related-reading' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/build-a-prompt-library?lang=fr',
    inLanguage: 'fr',
    headline: 'Créer une bibliothèque de prompts qui fait gagner du temps',
    description: 'Une bibliothèque de prompts est une collection d\'instructions testées avec métadonnées que votre équipe partage et améliore ensemble.',
    image: 'https://www.promptquorum.com/og-build-a-prompt-library-fr.png',
    datePublished: '2026-03-24',
    dateModified: '2026-04-29',
    author: { '@type': 'Person', name: 'Hans Kuepper' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Bibliothèques de prompts' },
      { '@type': 'Thing', name: 'Prompt Engineering' },
      { '@type': 'Thing', name: 'Gouvernance IA' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      { '@type': 'SoftwareApplication', name: 'Notion' },
      { '@type': 'SoftwareApplication', name: 'Airtable' },
    ],
    teaches: [
      'Comment construire une bibliothèque de prompts structurée',
      'Ce qui doit être inclus dans chaque prompt (métadonnées, versioning, propriétaire)',
      'Comment organiser les prompts par tâche/fonction',
      'Processus de gouvernance légère pour le contrôle de qualité',
      'Outils et plateformes pour la gestion de prompts',
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    audience: { '@type': 'Audience', audienceType: 'Responsables d\'équipes et praticiens IA' },
    keywords: ['bibliothèque de prompts', 'prompt engineering', 'gouvernance IA', 'gestion de prompts', 'versioning', 'collaboration d\'équipe'],
    primaryTerm: 'bibliothèque de prompts',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'fr',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qu\'est-ce qu\'une bibliothèque de prompts ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une bibliothèque de prompts est une collection structurée et consultable de prompts que votre équipe gère. Elle peut vivre dans un repo Git, une base de données Notion, Airtable, une Google Sheet ou un outil dédié. L\'objectif : standardiser, partager et améliorer les prompts au lieu de les perdre dans des notes personnelles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quand une équipe doit-elle utiliser une bibliothèque plutôt que des notes personnelles ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dès que plus d\'une personne utilise les mêmes prompts. Les notes personnelles fonctionnent pour les individus, mais quand votre équipe se développe, vous perdez les meilleurs prompts et gaspillez du temps en double travail.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps faut-il pour créer une bibliothèque de prompts utile ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une bibliothèque minimale avec 10–15 prompts testés prend 2–4 semaines (selon la taille de l\'équipe). Avec une utilisation active et des examens mensuels, la qualité s\'améliore continuellement. Comptez moins d\'1 heure par semaine de maintenance une fois la structure établie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment amener mon équipe à contribuer réellement à une bibliothèque partagée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rendez la contribution aussi simple que possible : un formulaire ou modèle Git, des exigences de métadonnées claires, et des examens mensuels. Le plus important : montrez la valeur — les équipes contribuent quand elles voient que leurs prompts sont utilisés et améliorés.',
        },
      },
      {
        '@type': 'Question',
        name: 'Une bibliothèque de prompts est-elle la même qu\'un system prompt ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non. Un system prompt est un ensemble de règles que vous définissez une fois et appliquez à toutes les entrées. Une bibliothèque de prompts est une collection de différents prompts pour différentes tâches — chacun avec ses propres métadonnées et versions.',
        },
      },
      {
        '@type': 'Question',
        name: 'À quelle fréquence une équipe doit-elle examiner et nettoyer sa bibliothèque ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mensuellement est idéal. Marquez les prompts peu utilisés comme Dépréciés, promovez les versions améliorées en Approuvé, et créez de nouvelles catégories si l\'utilisation change. Les équipes qui examinent mensuellement ont 20–30 % moins de bloat après 6 mois.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment gérer les prompts qui fonctionnent sur un modèle mais pas sur un autre ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Étiquetez chaque prompt avec les modèles testés dans les métadonnées. Si un prompt échoue sur un nouveau modèle, créez une variante — par exemple « Résumé de réunion – Claude » et « Résumé de réunion – GPT-4o » — au lieu de forcer un prompt à fonctionner partout. Les outils de test multi-modèle vous permettent de comparer les résultats avant de promouvoir un prompt en Approuvé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre une bibliothèque de prompts et une plateforme de gestion de prompts ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une bibliothèque de prompts est une collection d\'entrées de prompts structurées que votre équipe gère — elle peut vivre dans un repo Git, une feuille de calcul ou un outil dédié. Une plateforme de gestion de prompts ajoute l\'exécution, les analyses, le contrôle de version et les fonctionnalités de collaboration en plus du concept de bibliothèque. Commencez avec une bibliothèque simple et mettez à niveau vers une plateforme quand le volume ou la gouvernance le justifie.',
        },
      },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'fr',
    name: 'Comment créer une bibliothèque de prompts',
    description: 'Un cadre en 12 étapes pour construire une bibliothèque de prompts que votre équipe utilise réellement.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Rassemblez les vrais prompts que votre équipe utilise aujourd\'hui',
        text: 'Commencez par le bas vers le haut. Demandez à chacun de l\'équipe : « Quels sont les 3 meilleurs prompts que vous utilisez régulièrement ? » Rassemblez les 10–15 prompts réels qui produisent des résultats tangibles. Ceci sera votre bibliothèque fondatrice.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Normalisez chaque prompt dans la même structure',
        text: 'Ajoutez les métadonnées : titre, contenu (le vrai prompt), variables d\'entrée (comme <CUSTOMER_NAME>), format de sortie attendu, étiquettes, propriétaire, version. Cela prévient le chaos quand la bibliothèque grandit.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Organisez par tâche/fonction, pas par modèle',
        text: 'Structure : « Résumés de réunion » → v1.0 (Claude), v1.0 (GPT-4o) au lieu de « Prompts Claude » → « Résumés de réunion ». Les détails du modèle vont dans les métadonnées, pas dans la structure des dossiers.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Introduisez une gouvernance légère : Brouillon → Approuvé → Déprécié',
        text: 'Les nouveaux prompts commencent comme Brouillon. Après test et retour de l\'équipe : Approuvé. Quand obsolète ou remplacé : Déprécié (non supprimé, pour que les références ne cassent pas). Cela empêche les mauvais prompts d\'entrer en production.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Versionnez explicitement : v1.0, v1.1 avec notes de changement',
        text: 'Chaque changement obtient un numéro de version et une note de changement. Exemple : v1.1 « Réduction améliorée de l\'hallucination avec 3 exemples au lieu de 1 ». Cela rend le retour en arrière facile et aide les équipes à comprendre les améliorations.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Établissez des cycles de révision mensuels',
        text: 'Chaque mois : quels prompts sont populaires ? Lesquels n\'ont jamais été utilisés ? Promovez les versions améliorées. Marquez comme Déprécié. Cela garde la bibliothèque utile et mince.',
      },
    ],
  },
  sections: {
    tldr: {
      isTldr: true,
      items: [
        'Bibliothèque de prompts = dépôt structuré avec métadonnées, pas juste une liste',
        'Chaque entrée a besoin : titre, contenu, variables d\'entrée, format de sortie, étiquettes, propriétaire, version',
        'Construisez de bas en haut : rassemblez d\'abord les vrais prompts, puis normalisez-les en templates',
        'Organisez par tâche/fonction (pas par modèle) ; les détails du modèle vont dans les métadonnées',
        'Gouvernance légère (Brouillon → Approuvé → Déprécié) prévient la dérive de qualité',
        'Versionnez explicitement (v1.0, v1.1) avec notes de changement ; le retour arrière doit être possible',
        'Examens mensuels : retirer les prompts peu utilisés, promouvoir les versions améliorées',
      ],
    },
    whatIsLibrary: {
      id: 'what-is-library',
      title: 'Qu\'est-ce qu\'une bibliothèque de prompts ?',
      content: [
        'Une bibliothèque de prompts est une collection structurée et consultable de prompts que votre équipe gère comme une source unique de vérité. Chaque prompt est un enregistrement avec métadonnées (titre, propriétaire, version, étiquettes, modèles testés), pas juste du texte dans un document.',
        'La bibliothèque vit quelque part — dans un repo Git, une base de données Notion, Airtable, une Google Sheet ou un outil dédié comme PromptQuorum. L\'important : elle est consultable, versionnée et partagée avec l\'accès de l\'équipe.',
        'L\'objectif : votre équipe gagne du temps (les prompts ne sont pas réinventés), intègre plus vite (les nouveaux arrivants utilisent les meilleurs prompts au lieu de commencer à zéro), et évite la dérive de qualité (les mauvais prompts sont éliminés, les bons sont améliorés).',
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Pas juste une liste',
          text: 'Une collection de prompts dans un message Slack ou un Google Doc est un début — mais pas une vraie bibliothèque. Une bibliothèque est consultable, versionnée et a des métadonnées.',
        },
      ],
    },
    libraryAsset: {
      id: 'library-asset',
      title: 'Pourquoi une bibliothèque de prompts est-elle un atout numérique ?',
      content: 'Une bibliothèque de prompts éprouvée est comme un dépôt de code — un atout de connaissance qui permet la réutilisation, améliore la qualité et accélère l\'intégration. Si la meilleure personne quitte votre équipe, ses meilleurs prompts ne disparaissent pas avec elle.',
    },
    whyBuildOne: {
      id: 'why-build-one',
      title: 'Pourquoi votre équipe devrait-elle en créer une ?',
      items: [
        'Gagnez du temps : les nouveaux prompts demandent des heures d\'essais et erreurs. Une bibliothèque réduit la configuration de plusieurs heures à quelques minutes.',
        'Intégrez plus vite : les nouveaux collaborateurs utilisent les meilleurs prompts le premier jour au lieu d\'en inventer.',
        'Contrôle de qualité : les mauvais prompts sont rejetés, les bons sont améliorés. La qualité s\'améliore continuellement.',
        'Retenez la connaissance : quand quelqu\'un quitte, ses meilleurs prompts restent.',
        'Testez A/B : comparez les versions (v1.0 vs v1.1), voyez laquelle fonctionne mieux.',
        'Simplifiez les expériences : testez le même prompt sur GPT-4o, Claude, Llama 3.1 — suivez quel modèle fonctionne best.',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'Sans bibliothèque : le chaos au scale',
          text: 'Les équipes sans bibliothèque voient : double travail (chacun réinvente le même prompt), dérive de qualité (les mauvais prompts circulent), intégration lente (les nouveaux n\'ont aucun point de départ).',
        },
      ],
    },
    sharedSystem: {
      id: 'shared-system',
      title: 'Une bibliothèque de prompts est un système que l\'équipe partage',
      content: 'L\'important : ce n\'est pas imposé de haut en bas, c\'est construit de bas en haut. Votre équipe fournit les vrais prompts. Vous les normalisez et les gérez ensemble. La gouvernance est légère — juste assez de structure pour éviter le chaos, pas assez pour que les contributions soient impossibles.',
    },
    whatToStore: {
      id: 'what-to-store',
      title: 'Qu\'est-ce qu\'il faut stocker dans une bibliothèque de prompts ?',
      content: 'Pas tous les prompts que quelqu\'un a jamais écrits — uniquement les prompts réutilisables qui génèrent des résultats métier.',
      items: [
        'Prompts spécifiques à la tâche : « Résumés de réunion », « Brouillon d\'email », « Code Review », « Q&A Client »',
        'Prompts testés : le prompt doit être testé en production avec des résultats documentés',
        'Prompts d\'équipe : ceux qu\'utilisent plus d\'une personne. Les prompts privés ne sont pas nécessaires (ils restent locaux).',
        'Prompts réutilisables : ceux applicables à différentes entrées (pas un prompt unique pour un seul document).',
      ],
    },
    schemaBreakdown: {
      id: 'schema-breakdown',
      title: 'Qu\'est-ce qui doit être dans chaque entrée de bibliothèque ?',
      items: [
        '**Titre** : court, descriptif (« Résumé de réunion v1.1 », pas « Mon meilleur prompt »)',
        '**Contenu du prompt** : le vrai texte du prompt avec variables d\'entrée comme placeholders (<MEETING_TRANSCRIPT>, <TONE>)',
        '**Variables d\'entrée** : qu\'est-ce qui pourrait changer ? (<LANGUAGE>, <CUSTOMER_TYPE>, <FORMAT>)',
        '**Format de sortie** : à quoi doit ressembler la sortie ? (JSON, Markdown, Texte brut, Liste?)',
        '**Propriétaire** : qui l\'a écrit ? Qui est responsable des mises à jour ?',
        '**Étiquettes** : catégories pour la recherche (« ventes », « support », « légal », « content-gen »)',
        '**Version** : v1.0, v1.1, v2.0 — avec note de changement (ce qui a changé)',
        '**Modèles testés** : « Claude 4.6, GPT-4o » (cela aide les équipes à choisir la bonne variante)',
        '**Statut** : Brouillon, Approuvé, Déprécié (empêche les mauvais prompts en production)',
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Stockez les entrées comme placeholders',
          text: 'Utilisez toujours `<VARIABLE>` et non de vraies données dans le contenu du prompt. Les vraies données ne vont que dans l\'entrée à l\'exécution, pas dans le template.',
        },
      ],
      promptExamples: [
        {
          bad: 'Meeting Summary Prompt\n\nMy meeting with Sarah Johnson on March 24 was about Q2 budget planning. Here\'s what happened: ....',
          good: 'Meeting Summary (v1.1 – Claude)\n\nInput: <MEETING_TRANSCRIPT>\nOutput: JSON with {summary: string, action_items: string[], duration_minutes: number}\n\nPrompt: Résumez la réunion suivante...',
          badLabel: '❌ Données personnelles dans le contenu, pas de structure, pas de variables',
          goodLabel: '✅ Placeholders, format clair, versionné, spécifique au modèle',
        },
      ],
    },
    optionalFields: {
      id: 'optional-fields',
      title: 'Champs optionnels (à ajouter plus tard)',
      content: 'Commencez avec les 9 champs requis ci-dessus. Vous pouvez ajouter plus tard :',
      items: [
        '**Notes de coût** : « Ce prompt coûte ~0,02 € par appel avec GPT-4o »',
        '**Métriques de performance** : « Latence : <2 secondes », « Nombre de tokens : ~500 »',
        '**Leçons apprises** : « Few-shot testé — n\'améliore pas la précision pour cette tâche »',
        '**Dépendances** : « Needs retrieval_context input (from RAG system) »',
      ],
    },
    howToStart: {
      id: 'how-to-start',
      title: 'Comment commencer : un cadre en 6 étapes',
      numberedItems: [
        {
          title: 'Rassemblez les vrais prompts',
          whyItMatters: 'Demandez à chacun : « Quels sont les 3 meilleurs prompts que vous utilisez régulièrement ? » Rassemblez 10–15 vrais prompts. C\'est votre bibliothèque fondatrice — pas théorique, mais réelle en production.',
        },
        {
          title: 'Normalisez la structure',
          whyItMatters: 'Utilisez les 9 champs requis (titre, contenu avec placeholders, variables d\'entrée, format de sortie, étiquettes, propriétaire, version, statut, modèles testés). Tous les prompts doivent avoir la même structure.',
        },
        {
          title: 'Organisez par tâche',
          whyItMatters: 'Structure : « Ventes » (Brouillon d\'email, Gestion d\'objections, Révision de proposition) au lieu de « Prompts Claude » (chaotique). Les détails du modèle vont dans les métadonnées, pas dans les noms de dossiers.',
        },
        {
          title: 'Introduisez une gouvernance légère',
          whyItMatters: 'Brouillon → Approuvé → Déprécié. Les nouveaux prompts commencent comme Brouillon. Après test + feedback : Approuvé. Anciens : Déprécié (non supprimés). Cela empêche les mauvais prompts d\'entrer en production.',
        },
        {
          title: 'Versionnez explicitement',
          whyItMatters: 'Chaque changement obtient v1.0, v1.1, v2.0 avec une note de changement : « v1.1 : réduction améliorée de l\'hallucination avec 3 exemples au lieu de 1 ». Cela rend le retour arrière facile.',
        },
        {
          title: 'Commencez les examens mensuels',
          whyItMatters: 'Chaque mois : quels prompts sont populaires ? Lesquels n\'ont jamais été utilisés ? Promovez les meilleures versions. Marquez comme Déprécié. Cela garde la bibliothèque utile.',
        },
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: 'Construire de bas en haut (rassembler les vrais prompts), normaliser, gouverner légèrement, examiner mensuellement.',
        },
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Pas trop d\'ingénierie au début',
          text: 'Une Google Sheet suffit pour 1–20 prompts. Passez à Notion/Airtable/PromptQuorum quand vous avez 30+ prompts ou quand vous avez besoin d\'accès API.',
        },
      ],
    },
    timelyRefinement: {
      id: 'timely-refinement',
      title: 'Amélioration continue : la bibliothèque grandit plus fort si vous l\'utilisez',
      content: [
        'La première version de votre bibliothèque est brouillon. La vraie valeur vient de l\'utilisation continue et des améliorations mensuelles.',
        'Après une semaine : quels prompts l\'équipe utilise le plus ? Quels problèmes sont survenus ? Intégrez ce feedback dans vos prochaines versions.',
      ],
    },
    whereToStore: {
      id: 'where-to-store',
      title: 'Où devriez-vous stocker une bibliothèque de prompts ?',
      content: 'Le choix dépend de la taille de l\'équipe, des exigences de gouvernance et de l\'intégration. Il y a 3 options courantes :',
    },
    storageOptions: {
      id: 'storage-options',
      items: [
        '**Markdown dans Git** — meilleur pour équipes <5. Gratuit, versionné, proche du code. Problème : non consultable (sauf grep).',
        '**Notion ou Airtable** — meilleur pour équipes 5–20. Consultable, belle UI, collaboration facile. Problème : pas natif API (PromptQuorum est API-first).',
        '**Plateforme dédiée (PromptQuorum)** — meilleur pour équipes >20 ou si vous avez besoin de gouvernance, audit, accès API.',
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Commencez petit',
          text: 'Git suffit la première semaine. Passez à Notion/Airtable/PromptQuorum quand votre équipe >5 ou quand vous avez besoin de consultabilité fréquente.',
        },
      ],
    },
    structureApproach: {
      id: 'structure-approach',
      title: 'Structure organisationnelle',
      content: 'Où que vous stockiez : la structure doit être par **tâche/fonction**, pas par modèle.',
      items: [
        '✅ Correct : Ventes → Brouillon d\'email (v1.0 Claude, v1.0 GPT-4o) → Gestion d\'objections (v1.1 Claude)',
        '❌ Incorrect : Claude → Prompts de ventes → Brouillon d\'email',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: 'Pourquoi tâche plutôt que modèle ?',
      content: 'Si vous organisez par modèle, voici ce qui se passe : à un moment donné, vous voudrez tester un prompt sur un modèle différent. Maintenant vous devez copier le fichier prompt, le renommer, garder les deux versions synchrones. C\'est source d\'erreurs et ennuyeux.',
      items: [
        'Si vous organisez par tâche : « Brouillon d\'email » a des variantes (Claude v1.0, GPT-4o v1.0) comme des entrées claires. Facile à comparer, facile à mettre à jour.',
      ],
    },
    storageTableNote: {
      id: 'storage-table-note',
      title: 'Comparaison des 3 options de stockage',
      callouts: [
        {
          type: 'info',
          label: 'Tableau ci-dessous',
          text: 'Choisissez l\'option de stockage en fonction de la taille de l\'équipe, de la consultabilité et du besoin d\'une API.',
        },
      ],
    },
    storageTable: {
      id: 'storage-table',
      tableFormat: true,
      columns: ['Option', 'Meilleur pour', 'Contrôle de version', 'Recherche', 'Gouvernance'],
      rows: [
        {
          'Option': 'Markdown dans Git',
          'Meilleur pour': 'Équipes <5, ingénierie-proche',
          'Contrôle de version': 'Natif (Git)',
          'Recherche': 'Grep seulement',
          'Gouvernance': 'Manuel (révision PR)',
        },
        {
          'Option': 'Notion / Airtable',
          'Meilleur pour': 'Équipes 5–20, accès non-technique important',
          'Contrôle de version': 'Intégré (mais basique)',
          'Recherche': 'Natif (Tag/Search)',
          'Gouvernance': 'Permissions, mais peu d\'audit',
        },
        {
          'Option': 'PromptQuorum (Dédié)',
          'Meilleur pour': 'Équipes >20, gouvernance/audit requis',
          'Contrôle de version': 'Complet (Retour, Diffs)',
          'Recherche': 'Natif + API',
          'Gouvernance': 'RBAC, Logs d\'audit, Workflows d\'approbation',
        },
      ],
    },
    versioning: {
      id: 'versioning',
      title: 'Comment versioner les prompts et maintenir la qualité',
      content: 'La versioning est la colonne vertébrale d\'une bibliothèque qui fonctionne. Sans versions explicites, voici ce qui se passe : quelqu\'un change un prompt, casse accidentellement un système de production, et personne ne sait pourquoi.',
      items: [
        '**v1.0** : première version stable. Production ready. Résultats testés.',
        '**v1.1** : amélioration mineure. Même logique, meilleurs résultats (par exemple « v1.1 : +2 exemples pour réduire l\'hallucination »).',
        '**v2.0** : refonte majeure. Changement de logique, variables d\'entrée, ou format de sortie. Les grandes versions sont rares.',
        '**Notes de changement** : toujours documenter CE QUI a changé (« Meilleur ton client par ajout d\'un guide de style ») — pas juste « mis à jour ».',
        '**Retour possible** : gardez les anciennes versions accessibles. Si v1.1 ne fonctionne pas mieux, retournez à v1.0 en 1 clic.',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'Pas de « Latest » sans numéro de version',
          text: 'Si votre système utilise toujours « Latest » et que quelqu\'un change un prompt, tous les systèmes de production cassent. Utilisez toujours des versions explicites (v1.0, v1.1, v2.0).',
        },
      ],
    },
    commonMistakes: {
      id: 'common-mistakes',
      title: 'Erreurs courantes et comment les éviter',
      mistakes: [
        {
          mistake: 'Stocker des vraies données dans le contenu du prompt',
          problem: 'Exemple : « Mon client Sarah Johnson... ». Si ce prompt est partagé ou va dans Git, les vraies données personnelles sont facilement trouvables.',
          fix: 'Utilisez toujours des placeholders : <CUSTOMER_NAME>. Les vraies données ne vont que dans l\'entrée à l\'exécution.',
        },
        {
          mistake: 'Ne pas définir les variables d\'entrée',
          problem: 'Quelqu\'un utilise un prompt localement avec « Ma réunion était aujourd\'hui à 10h... » — mais n\'a pas documenté QUELLES variables pourraient changer. Plus tard, d\'autres utilisent le prompt avec des données en dur.',
          fix: 'Documentez chaque variable : <MEETING_TIME>, <PARTICIPANT_COUNT>, <FOCUS>. Montrez comment les remplacer.',
        },
        {
          mistake: 'Sur-estimer la gouvernance au début',
          problem: 'Les équipes commencent avec un workflow d\'approbation complexe (3 réviseurs, comités de contrôle). Après 2 semaines : personne ne contribue.',
          fix: 'Commencez avec Brouillon → Approuvé → Déprécié. C\'est tout. Workflows plus complexes plus tard, si l\'équipe >15.',
        },
        {
          mistake: 'Ne pas marquer les anciens prompts comme Dépréciés',
          problem: 'Les anciennes versions s\'accumulent. Les équipes sont confuses : « Dois-je utiliser v1.0 ou v1.1 ? » Les systèmes de production finissent avec les mauvaises anciennes versions.',
          fix: 'Examens mensuels : les prompts jamais utilisés, marquez comme Déprécié (ne supprimez pas — les références dans le code pourraient casser). Avec raison (« remplacé par v1.2 »).',
        },
        {
          mistake: 'Ne jamais examiner, ne jamais améliorer',
          problem: 'La bibliothèque stagne. Les mauvais prompts ne sont pas corrigés. Les meilleures versions ne sont jamais promues. L\'équipe perd confiance.',
          fix: 'Examens mensuels d\'1 heure : analysez les prompts les plus utilisés, intégrez le feedback, promovez le mieux en Approuvé. L\'amélioration continue montre que la bibliothèque est vivante.',
        },
      ],
    },
    regionalConsiderations: {
      id: 'regional-considerations',
      title: 'Considérations régionales et conformité',
      content: [
        '**La résidence des données et les exigences de conformité affectent où et comment vous stockez les prompts, surtout si les corps de prompts contiennent des données client sensibles comme placeholders.**',
        'En avril 2026, les principales contraintes par région :',
      ],
      items: [
        '**UE / RGPD** : si les templates de prompts contiennent ou référencent des données personnelles, l\'outil de stockage doit être conforme RGPD. Notion, Airtable et PromptQuorum offrent tous l\'hébergement EU ; vérifiez les paramètres avant d\'activer pour les workflows sensibles. **CNIL** : la CNIL recommande l\'IA locale quand vous traitez des données professionnelles sensibles (données financières, médicales, légales).',
        '**US SOC 2** : pour les clients d\'entreprise qui exigent la conformité des fournisseurs, choisissez les outils avec certification SOC 2 Type II (Notion, Airtable, PromptQuorum en 2026).',
        '**Secteurs réglementés (santé, finance, droit)** : les prompts de système contenant des identifiants de patients ou des numéros de dossier financier doivent rester dans votre propre infrastructure. Utilisez le stockage basé sur Git ou une option auto-hébergée — pas un outil SaaS grand public.',
        '**Conseil** : séparez les prompts sensibles (ceux qui acceptent les PII en entrée) des prompts à usage général. Appliquez un contrôle d\'accès plus strict et une rétention plus courte au groupe sensible.',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'Ne stockez JAMAIS les vraies PII dans le contenu du prompt',
          text: 'Les templates de prompts doivent utiliser des placeholders comme <CUSTOMER_NAME> — jamais les vrais noms, emails ou IDs de dossier. Les vraies données ne vont que dans l\'entrée à l\'exécution, pas dans le template stocké.',
        },
      ],
    },
    faqSection: {
      id: 'faq-section',
      title: 'Questions fréquemment posées',
      faqs: [
        {
          q: 'Qu\'est-ce qu\'une bibliothèque de prompts ?',
          a: 'Une bibliothèque de prompts est une collection structurée et consultable de prompts que votre équipe gère comme une source unique de vérité. Elle peut vivre dans un repo Git, une base de données Notion, Airtable, une Google Sheet ou un outil dédié. L\'objectif : permettre la réutilisation, améliorer la qualité, intégrer plus vite.',
        },
        {
          q: 'Quand notre équipe devrait-elle utiliser une bibliothèque plutôt que des notes personnelles ?',
          a: 'Dès que plus d\'une personne utilise les mêmes prompts. Les notes personnelles fonctionnent pour les individus — mais quand votre équipe se développe, vous perdez les meilleurs prompts et gaspillez du temps en double travail.',
        },
        {
          q: 'Combien de temps faut-il pour créer une bibliothèque utilisable ?',
          a: 'Une bibliothèque minimale avec 10–15 prompts testés prend 2–4 semaines (selon la taille de l\'équipe). Avec une utilisation active et des examens mensuels, la qualité s\'améliore continuellement. Comptez moins d\'1 heure par semaine de maintenance une fois établie.',
        },
        {
          q: 'Comment amener mon équipe à contribuer réellement ?',
          a: 'Rendez la contribution aussi simple que possible : un formulaire ou modèle Git, des exigences de métadonnées claires, et des examens mensuels. Le plus important : montrez la valeur — les équipes contribuent quand elles voient que leurs prompts sont utilisés et améliorés.',
        },
        {
          q: 'Une bibliothèque de prompts est-elle la même qu\'un system prompt ?',
          a: 'Non. Un system prompt est un ensemble de règles que vous définissez une fois et appliquez à toutes les entrées. Une bibliothèque de prompts est une collection de différents prompts pour différentes tâches — chacun avec ses propres métadonnées et versions.',
        },
        {
          q: 'À quelle fréquence une équipe doit-elle examiner et nettoyer ?',
          a: 'Mensuellement est idéal. Marquez les prompts peu utilisés comme Dépréciés, promovez les versions améliorées en Approuvé, et créez de nouvelles catégories si l\'utilisation change. Les équipes qui examinent mensuellement ont 20–30 % moins de bloat après 6 mois.',
        },
        {
          q: 'Comment gérer les prompts qui fonctionnent sur un modèle mais pas sur un autre ?',
          a: 'Étiquetez chaque prompt avec les modèles testés dans les métadonnées. Si un prompt échoue sur un nouveau modèle, créez une variante — par exemple « Résumé de réunion – Claude » et « Résumé de réunion – GPT-4o » — au lieu de forcer un prompt à fonctionner partout. Les outils de test multi-modèle vous permettent de comparer les résultats avant de promouvoir.',
        },
        {
          q: 'Quelle est la différence entre une bibliothèque de prompts et une plateforme de gestion ?',
          a: 'Une bibliothèque de prompts est une collection d\'entrées structurées que votre équipe gère — elle peut vivre dans un repo Git, une feuille de calcul ou un outil dédié. Une plateforme de gestion ajoute l\'exécution, les analyses, le contrôle de version et les fonctionnalités de collaboration en plus du concept de bibliothèque. Commencez avec une bibliothèque simple et mettez à niveau vers une plateforme quand le volume ou la gouvernance le justifie.',
        },
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: 'Lectures complémentaires',
      items: [
        { title: 'Fondamentaux du Prompt Engineering', url: '/prompt-engineering/fundamentals?lang=fr' },
        { title: 'Few-Shot Prompting : Mieux prompter avec des exemples', url: '/prompt-engineering/few-shot-prompting?lang=fr' },
        { title: 'Chain-of-Thought Prompting : Raisonnement étape par étape', url: '/prompt-engineering/chain-of-thought?lang=fr' },
        { title: 'PromptQuorum : Gestion de prompts simplifiée', url: '/features?lang=fr' },
        { title: 'System Prompt vs User Prompt : Quelle est la différence ?', url: '/prompt-engineering/system-prompt-vs-user-prompt?lang=fr' },
        { title: 'Test et optimisation de prompts', url: '/prompt-engineering/prompt-testing?lang=fr' },
      ],
    },
    sources: {
      id: 'sources',
      title: 'Sources & Lectures complémentaires',
      items: [
        { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
        { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
        { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
        { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
      ],
    },
  },
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-24',
},
    ja: {
  theme: '基礎知識',
  title: 'プロンプトライブラリを構築して時間を節約する',
  intro: 'プロンプトライブラリは、テストされたプロンプトをメタデータとともに保存し、チームで共有・改善するための構造化された集約です。適切に構築すれば、プロンプトセットアップの時間を短縮し、新しいチームメンバーのオンボーディングを加速させ、価値あるプロンプトが散逸するのを防ぎます。本フレームワークは、チームが実際に使用するプロンプトライブラリを構築するための12ステップガイドです。',
  seoTitle: 'プロンプトライブラリの構築：チーム向け12ステップフレームワーク（2026年版）',
  metaDescription: 'プロンプトライブラリはメタデータ付きのテスト済みプロンプトの共有可能な集約です。チームが構築することで、セットアップ時間を短縮し、オンボーディングを加速させることができます。実証済みのフレームワークをご紹介します。',
  publishDate: '2026-03-24',
  dateModified: '2026-04-29',
  readTime: '11分で読める',
  educationalLevel: 'Beginner',
  audience: 'AIツール導入を進めるチームリーダーと実践者',
  leadAnswerBlock: 'プロンプトライブラリは、単なるプロンプトのリストではなく、メタデータを含む構造化された検索可能な集約です。チームが適切に構築すれば、プロンプトセットアップの時間を大幅に短縮でき、新しいメンバーのオンボーディングが早くなります。本ガイドは、チームが実際に活用するプロンプトライブラリを立ち上げるための12ステップを解説しています。',
  quickFacts: [
    'プロンプトライブラリはプロンプトセットアップを数時間から数分に短縮します。',
    '各プロンプトは最小限：タイトル、本体、入力変数、出力形式、タグ、所有者、バージョン。',
    '最適な組織構造：モデル別ではなくタスク/機能別；モデル詳細はメタデータに記載。',
    'シンプルなガバナンス（下書き→承認済み→廃止予定）が品質低下を防止し、ライブラリを実用的に保ちます。',
    'バージョン管理が重要：v1.0, v1.1 に変更ノート付き；ロールバック可能であること。',
  ],
  toc: [
    { label: 'プロンプトライブラリとは？', anchor: 'what-is-library' },
    { label: 'チームが構築する理由', anchor: 'why-build-one' },
    { label: '何を保存するか', anchor: 'what-to-store' },
    { label: '始める方法', anchor: 'how-to-start' },
    { label: 'バージョン管理と品質管理', anchor: 'versioning' },
    { label: '保存場所の選択', anchor: 'where-to-store' },
    { label: 'よくある間違い', anchor: 'common-mistakes' },
    { label: '地域別・コンプライアンス上の考慮事項', anchor: 'regional-considerations' },
    { label: 'よくある質問', anchor: 'faq-section' },
    { label: '関連資料', anchor: 'related-reading' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/build-a-prompt-library?lang=ja',
    inLanguage: 'ja',
    headline: 'プロンプトライブラリを構築して時間を節約する',
    description: 'プロンプトライブラリは、チームが共有・改善するテストされたプロンプトのメタデータ付き集約です。',
    datePublished: '2026-03-24',
    dateModified: '2026-04-29',
    author: { '@type': 'Organization', name: 'PromptQuorum' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'プロンプトライブラリ' },
      { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
      { '@type': 'Thing', name: 'AIガバナンス' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      { '@type': 'SoftwareApplication', name: 'Notion' },
      { '@type': 'SoftwareApplication', name: 'Airtable' },
    ],
    teaches: [
      'チーム向けの構造化されたプロンプトライブラリの構築方法',
      '各プロンプトに必須な情報（メタデータ、バージョン管理、所有者）',
      'タスク/機能別によるプロンプト整理',
      '品質管理のためのシンプルなガバナンスプロセス',
      'プロンプト管理ツールとプラットフォーム',
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    audience: { '@type': 'Audience', audienceType: 'チームリーダーとAI実践者' },
    keywords: ['プロンプトライブラリ', 'プロンプトエンジニアリング', 'AIガバナンス', 'プロンプト管理', 'バージョン管理', 'チーム連携'],
    primaryTerm: 'プロンプトライブラリ',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ja',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'プロンプトライブラリとは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'プロンプトライブラリは、チームが管理する構造化された検索可能なプロンプト集約です。Git リポジトリ、Notion、Airtable、Google Sheet、または PromptQuorum のような専用ツールに保存できます。プロンプトの標準化、共有、改善が目的です。',
        },
      },
      {
        '@type': 'Question',
        name: '個人的なメモの代わりにライブラリを使うべき時期は？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '複数の人が同じプロンプトを使用する場合です。個人的なメモは個人向けで十分ですが、チームが成長すると、優れたプロンプトが消失し、二重作業が生じます。',
        },
      },
      {
        '@type': 'Question',
        name: '最初から使用可能なプロンプトライブラリを構築するのにどのくらいの時間がかかりますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'テスト済みプロンプト10～15個を含む最小限のライブラリなら2～4週間（チームサイズに応じて変動）。継続的な使用と月次レビューにより、品質は継続的に向上します。一度確立されれば、保守に週1時間未満で済みます。',
        },
      },
      {
        '@type': 'Question',
        name: 'チームに共有プロンプトライブラリへの貢献を促すにはどうすればよいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '貢献を可能な限りシンプルにしてください：フォームまたは Git テンプレート、明確なメタデータ要件、月次レビュー。最重要：価値を示してください。チームはプロンプトが使用され改善されるのを見れば貢献します。',
        },
      },
      {
        '@type': 'Question',
        name: 'プロンプトライブラリはシステムプロンプトと同じですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ。システムプロンプトは、一度定義して全入力に適用する規則集です。プロンプトライブラリは、異なるタスク向けの異なるプロンプトの集約で、各々に独自のメタデータとバージョンがあります。',
        },
      },
      {
        '@type': 'Question',
        name: 'チームはどの頻度でプロンプトライブラリを確認・整理すべきですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '月1回が理想的です。使用頻度の低いプロンプトを廃止予定として標識し、改善版を承認済みに昇格させ、使用方法が変わったときに新カテゴリを作成してください。月次レビューを行うチームは6か月後に20～30%の無駄を削減できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'あるモデルで機能するが別のモデルでは機能しないプロンプトはどう対処しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'メタデータでテスト済みモデルを各プロンプトにタグ付けしてください。プロンプトが新モデルで失敗した場合、一つのプロンプトを無理に全モデルで機能させるのではなく、バリエーション（例：「会議要約 – Claude」と「会議要約 – GPT-4o」）を作成してください。多モデルテストツールで昇格前に出力を比較できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'プロンプトライブラリとプロンプト管理プラットフォームの違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'プロンプトライブラリは、チームが管理する構造化プロンプトレコードの集約で、Git リポジトリ、スプレッドシート、専用ツールに保存できます。プロンプト管理プラットフォームは、ライブラリのコンセプト上に実行、分析、バージョン管理、コラボレーション機能を追加します。シンプルなライブラリから始めて、ボリュームやガバナンスが必要な場合にプラットフォームにアップグレードしてください。',
        },
      },
      {
        '@type': 'Question',
        name: 'PromptQuorum 使用時に METI AI ガバナンスに対応する必要がありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '2024年の METI AI ガバナンスガイドラインに対応することが推奨されています。PromptQuorum は日本国内のエンタープライズ展開に対応し、ローカル推論と監査ログで企業コンプライアンス要件を満たします。機密情報を扱うワークフロー（金融、医療、法務）にはローカル推論を使用し、ゼネラルなプロンプト管理には PromptQuorum を活用してください。',
        },
      },
      {
        '@type': 'Question',
        name: 'エンタープライズセキュリティ下でのローカル推論はどのように実装しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ローカル推論（LM Studio、Ollama など）と PromptQuorum を組み合わせることで、機密性の高いプロンプトをオンプレミスで管理できます。メタデータと標準化は PromptQuorum で管理し、実行はローカル環境で行うというハイブリッドアプローチが効果的です。これにより、データ主権を確保しながらライブラリの利点を享受できます。',
        },
      },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'ja',
    name: 'プロンプトライブラリの構築方法',
    description: 'チームが実際に活用するプロンプトライブラリを構築するための12ステップフレームワーク。',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'チームが今日使っている本物のプロンプトを収集する',
        text: 'ボトムアップで始めてください。各チームメンバーに「定期的に使用している上位3つのプロンプトは何か」と尋ね、実際に結果を出している10～15個のプロンプトを集めてください。これが創設ライブラリになります。',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '各プロンプトを同じ構造に正規化する',
        text: 'メタデータを追加します：タイトル、本体（プロンプト）、入力変数（<CUSTOMER_NAME>など）、期待される出力形式、タグ、所有者、バージョン。これがライブラリの成長時の混乱を防ぎます。',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'タスク/機能別に整理し、モデル別は避ける',
        text: '「会議要約」→ v1.0 (Claude)、v1.0 (GPT-4o) のようにタスク中心の構造にしてください。「Claude プロンプト」→「会議要約」というモデル中心の構成は避けてください。',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'シンプルなガバナンスを導入：下書き→承認済み→廃止予定',
        text: '新規プロンプトは下書きから始まります。テストとフィードバック後に承認済みになります。古いプロンプトは廃止予定にします（削除はしません。参照が壊れる可能性）。',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'バージョンを明示的に管理：v1.0、v1.1に変更ノート付き',
        text: '各変更にバージョン番号と変更ノートを付けます。例：v1.1「3つの例で幻覚を削減」。ロールバックが簡単になり、改善を理解しやすくなります。',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: '月次レビューサイクルを確立する',
        text: '毎月：どのプロンプトが人気か、使われていないプロンプトはないか、改善版を昇格させるべきか。これがライブラリを実用的に保ちます。',
      },
    ],
  },
  sections: {
    tldr: {
      isTldr: true,
      items: [
        'プロンプトライブラリ = メタデータ付き構造化リポジトリ（単なるリストではない）',
        '各エントリ：タイトル、本体、入力変数、出力形式、タグ、所有者、バージョン必須',
        'ボトムアップ構築：最初に実プロンプトを収集し、その後テンプレートに正規化',
        'タスク/機能別の整理（モデル別は避ける）；モデル詳細はメタデータ内',
        'シンプルなガバナンス（下書き→承認済み→廃止予定）で品質低下を防止',
        'バージョンを明示的に管理（v1.0、v1.1）；ロールバックは常に可能に',
        '月次レビュー：低使用度プロンプトを廃止、改善版を昇格させる',
      ],
    },
    whatIsLibrary: {
      id: 'what-is-library',
      title: 'プロンプトライブラリとは',
      content: [
        'プロンプトライブラリは、チームが唯一の情報源として管理する構造化・検索可能なプロンプト集約です。各プロンプトはドキュメントではなく、メタデータ（タイトル、所有者、バージョン、タグ、テスト済みモデル）付きのレコードです。',
        'ライブラリはどこかに存在します — Git リポジトリ、Notion、Airtable、Google Sheet、または PromptQuorum のような専用ツール。重要：検索可能、バージョン管理可能、チームアクセス可能であること。',
        '目標：チームが時間を節約（プロンプトの再発明なし）、素早くオンボード（新規者が最初からテスト済みプロンプトを使用）、品質低下を防止（悪いプロンプトは廃止、良いものは改善）。',
      ],
      callouts: [
        {
          type: 'tip',
          label: '単なるリストではない',
          text: 'Slack メッセージや Google Doc 内のプロンプト集約は出発点ですが、本当のライブラリではありません。ライブラリは検索可能、バージョン管理可能、メタデータを持ちます。',
        },
      ],
    },
    libraryAsset: {
      id: 'library-asset',
      title: 'プロンプトライブラリが組織資産である理由',
      content: 'テスト済みのプロンプトライブラリはコードリポジトリのようなもの — 再利用を可能にし、品質を向上させ、オンボーディングを加速させるナレッジアセットです。最優秀者がチームを離れても、彼らのテスト済みプロンプトは残ります。',
    },
    whyBuildOne: {
      id: 'why-build-one',
      title: 'チームがプロンプトライブラリを構築する理由',
      items: [
        '時間節約：新規プロンプト作成は試行錯誤に数時間。ライブラリは数分に短縮。',
        '速いオンボーディング：新メンバーが初日から実証済みプロンプトを使用可能。',
        '品質管理：悪いプロンプトは却下、良いものは継続的に改善。質が上がり続ける。',
        'ナレッジ保持：メンバーが去ってもテスト済みプロンプトは残存。',
        'A/B テスト対応：バージョン比較（v1.0 vs v1.1）で効果的なプロンプトを特定。',
        'マルチモデル実験：同じプロンプトを GPT-4o、Claude、Llama 3.1 で試験 — 最適モデル追跡可能。',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'ライブラリなしの場合：スケール時の混乱',
          text: 'チームが成長すると：重複作業（同じプロンプトを何度も作成）、品質低下（悪いプロンプト流通）、遅いオンボーディング（新規者に出発点がない）。',
        },
      ],
    },
    sharedSystem: {
      id: 'shared-system',
      title: 'プロンプトライブラリはチームが共有するシステム',
      content: '重要：トップダウンで押し付けるのではなく、ボトムアップで構築します。チームが本当のプロンプトを提供し、一緒に正規化・管理します。ガバナンスは軽量 — 混乱を避ける程度の構造。貢献を不可能にするほど複雑ではありません。',
    },
    whatToStore: {
      id: 'what-to-store',
      title: '何をプロンプトライブラリに保存するか',
      content: '誰かが書いたすべてのプロンプトではなく、再利用可能で実ビジネス価値を生む、テスト済みプロンプトのみです。',
      items: [
        'タスク固有プロンプト：「会議要約」「メールドラフト」「コードレビュー」「カスタマーQ&A」',
        'テスト済みプロンプト：本番環境で検証済みで、ドキュメント化された結果がある',
        'チームプロンプト：複数人が使用するもの。個人プロンプトは必要なし（ローカルのままで良い）',
        '再利用可能プロンプト：複数の入力に適用可能（単一ドキュメント向け一回限りではなく）',
      ],
    },
    schemaBreakdown: {
      id: 'schema-breakdown',
      title: 'プロンプトライブラリのエントリに必須な情報',
      items: [
        '**タイトル**：簡潔で説明的（「会議要約 v1.1」）',
        '**プロンプト本体**：プレースホルダー付き実プロンプト（<MEETING_TRANSCRIPT>、<TONE>など）',
        '**入力変数**：何が変わる可能性があるか？（<LANGUAGE>、<CUSTOMER_TYPE>、<FORMAT>など）',
        '**出力形式**：期待される出力は何か？（JSON、Markdown、プレーンテキスト、リスト？）',
        '**所有者**：誰が書いた？アップデートの責任者？',
        '**タグ**：検索カテゴリ（「営業」「サポート」「法務」「コンテンツ生成」）',
        '**バージョン**：v1.0、v1.1、v2.0 — 変更ノート付き',
        '**テスト済みモデル**：「Claude 4.6、GPT-4o」（チームが正しいバリエーション選択を支援）',
        '**ステータス**：下書き、承認済み、廃止予定（本番環境への悪いプロンプト進出を防止）',
      ],
      callouts: [
        {
          type: 'tip',
          label: '入力をプレースホルダーで保存',
          text: 'プロンプト本体には実データではなく常に `<VARIABLE>` を使用。本物のデータは実行時入力のみ。',
        },
      ],
      promptExamples: [
        {
          bad: 'Meeting Summary Prompt\n\nMy meeting with Sarah Johnson on March 24 was about Q2 budget planning. Here\'s what happened: ....',
          good: 'Meeting Summary (v1.1 – Claude)\n\nInput: <MEETING_TRANSCRIPT>\nOutput: JSON with {summary: string, action_items: string[], duration_minutes: number}\n\nPrompt: 以下の会議を要約してください...',
          badLabel: '❌ 個人情報が本体内に、構造なし、変数なし',
          goodLabel: '✅ プレースホルダー、明確な形式、バージョン付き、モデル固有',
        },
      ],
    },
    optionalFields: {
      id: 'optional-fields',
      title: 'オプションフィールド（後で追加可能）',
      content: '上記の9つの必須フィールドから始めてください。後で以下を追加できます：',
      items: [
        '**コスト注記**：「このプロンプトは GPT-4o で ~0.02 ドル/呼び出し」',
        '**パフォーマンスメトリクス**：「レイテンシ：<2秒」「トークン数：~500」',
        '**習得事項**：「Few-shot 試験 — このタスクの精度改善なし」',
        '**依存関係**：「RAG システムからの retrieval_context 入力が必要」',
      ],
    },
    howToStart: {
      id: 'how-to-start',
      title: '始める方法：6ステップフレームワーク',
      numberedItems: [
        {
          title: '本物のプロンプトを収集する',
          whyItMatters: '各チームメンバーに「定期的に使用している上位3つのプロンプトは？」と聞き、10～15個の本当のプロンプトを集めてください。これが創設ライブラリになります。',
        },
        {
          title: '構造を正規化する',
          whyItMatters: '9つの必須フィールド（タイトル、プレースホルダー付き本体、入力変数、出力形式、タグ、所有者、バージョン、ステータス、テスト済みモデル）を使用。全プロンプト同じ構造。',
        },
        {
          title: 'タスク別に整理',
          whyItMatters: '「営業」（メール下書き、異議処理、提案レビュー）ではなく「Claude プロンプト」（混乱）。モデル詳細はメタデータへ。',
        },
        {
          title: 'シンプルなガバナンス導入',
          whyItMatters: '下書き→承認済み→廃止予定。新規は下書きで開始。テスト+フィードバック後が承認済み。古いものは廃止予定（削除はしない）。',
        },
        {
          title: 'バージョン管理を明示的に',
          whyItMatters: 'v1.0、v1.1、v2.0 に変更ノート：「v1.1：3例で幻覚を削減」。ロールバックが簡単、改善が理解しやすい。',
        },
        {
          title: '月次レビューサイクル開始',
          whyItMatters: '毎月：人気プロンプト？使用されていない？改善版を昇格。これがライブラリを実用的に保ちます。',
        },
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: 'ボトムアップ（本物のプロンプト収集）→正規化→シンプルなガバナンス→月次レビュー。',
        },
      ],
      callouts: [
        {
          type: 'tip',
          label: '最初から過度なエンジニアリングはしない',
          text: 'Google Sheet は1～20プロンプト向けで十分。30+ プロンプトやAPI アクセスが必要になったら Notion/Airtable/PromptQuorum へ。',
        },
      ],
    },
    timelyRefinement: {
      id: 'timely-refinement',
      title: '継続的改善：ライブラリは使用で成長する',
      content: [
        'ライブラリの最初版は下書き。本当の価値は継続的使用と月次改善から生まれます。',
        '1週間後：チームは何を最も使用？問題は？そのフィードバックを次バージョンに統合。',
      ],
    },
    whereToStore: {
      id: 'where-to-store',
      title: 'プロンプトライブラリをどこに保存するか',
      content: 'チームサイズ、ガバナンス要件、統合によって異なります。3つの一般的なオプション：',
    },
    storageOptions: {
      id: 'storage-options',
      items: [
        '**Git 内 Markdown** — チーム <5 最適。無料、バージョン管理、コード近い。問題：検索不可（grep 除く）。',
        '**Notion または Airtable** — チーム 5～20 最適。検索可能、良い UI、簡単協業。問題：API ネイティブでない（PromptQuorum は API ファースト）。',
        '**専用プラットフォーム（PromptQuorum）** — チーム >20 または ガバナンス/監査/API アクセス必要時に最適。',
      ],
      callouts: [
        {
          type: 'tip',
          label: '小さく始める',
          text: 'Git で十分（最初の週）。チーム >5 または頻繁な検索が必要になったら Notion/Airtable/PromptQuorum へアップグレード。',
        },
      ],
    },
    structureApproach: {
      id: 'structure-approach',
      title: '組織構造',
      content: 'どこに保存するにせよ：構造は **タスク/機能別** であり、モデル別ではありません。',
      items: [
        '✅ 正解：営業 → メールドラフト (v1.0 Claude、v1.0 GPT-4o) → 異議処理 (v1.1 Claude)',
        '❌ 不正解：Claude → 営業プロンプト → メールドラフト',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: 'タスク別の理由',
      content: 'モデル別に整理すると：別モデルでプロンプトをテストしたくなったとき、ファイルをコピー、リネーム、両バージョン同期が必要。エラー源でつまらない。',
      items: [
        'タスク別なら：「メールドラフト」にバリエーション（Claude v1.0、GPT-4o v1.0）が明確なエントリ。比較・更新が簡単。',
      ],
    },
    storageTableNote: {
      id: 'storage-table-note',
      title: '3つの保存オプション比較',
      callouts: [
        {
          type: 'info',
          label: '以下の表',
          text: 'チームサイズ、検索性、API 要否でオプション選択。',
        },
      ],
    },
    storageTable: {
      id: 'storage-table',
      tableFormat: true,
      columns: ['オプション', '最適対象', 'バージョン管理', '検索', 'ガバナンス'],
      rows: [
        {
          'オプション': 'Git 内 Markdown',
          '最適対象': 'チーム <5、エンジニア向け',
          'バージョン管理': 'ネイティブ (Git)',
          '検索': 'grep のみ',
          'ガバナンス': '手動 (PR レビュー)',
        },
        {
          'オプション': 'Notion / Airtable',
          '最適対象': 'チーム 5～20、非技術的アクセス重要',
          'バージョン管理': '組込（基本的）',
          '検索': 'ネイティブ (タグ/検索)',
          'ガバナンス': '権限あるが監査少ない',
        },
        {
          'オプション': 'PromptQuorum（専用）',
          '最適対象': 'チーム >20、ガバナンス/監査要',
          'バージョン管理': '完全 (ロールバック、Diffs)',
          '検索': 'ネイティブ + API',
          'ガバナンス': 'RBAC、監査ログ、承認ワークフロー',
        },
      ],
    },
    versioning: {
      id: 'versioning',
      title: 'プロンプトのバージョン管理と品質維持',
      content: 'バージョン管理は機能するライブラリの骨格。明示的なバージョンなしは：誰かがプロンプト変更→本番環境が壊れる→誰も原因が分からない',
      items: [
        '**v1.0**：初版で安定。本番環境対応。テスト済み結果あり。',
        '**v1.1**：小変更。同じロジック、良い結果（例：「v1.1：+2例で幻覚削減」）。',
        '**v2.0**：大改修。ロジック、入力変数、出力形式変更。大版は稀。',
        '**変更ノート**：何が変わったかドキュメント（「顧客トーン改善でスタイルガイド追加」）— 「更新」だけじゃなく。',
        '**ロールバック可能**：古バージョンは利用可能に。v1.1 が良くなければ v1.0 に 1 クリックで戻す。',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'バージョンなしの「最新」はダメ',
          text: 'システムが常に「最新」を使ってて誰かが変更したら、全本番環境が壊れる。常に明示バージョン（v1.0、v1.1、v2.0）を使用。',
        },
      ],
    },
    commonMistakes: {
      id: 'common-mistakes',
      title: 'よくある間違いと回避方法',
      mistakes: [
        {
          mistake: '本物データをプロンプト本体に保存',
          problem: '例：「Sarah Johnson の会議...」。シェア・Git 保存で個人情報が簡単にさらされる。',
          fix: 'プレースホルダーのみ：<CUSTOMER_NAME>。本物は実行時入力。',
        },
        {
          mistake: '入力変数を定義しない',
          problem: '誰かが「今日 10 時の会議...」で使用 — 何が変わるか不明。他者は硬いデータで使用。',
          fix: '変数ドキュメント：<MEETING_TIME>、<PARTICIPANT_COUNT>、<FOCUS>。置換方法を表示。',
        },
        {
          mistake: '最初から過度なガバナンス',
          problem: '複雑なワークフロー（3 レビュー、統制委員会）から開始。2 週後：誰も投稿しない。',
          fix: '下書き→承認済み→廃止予定のみ。複雑さはチーム >15 で後。',
        },
        {
          mistake: '古いプロンプトを廃止予定にしない',
          problem: '古バージョンが蓄積。「v1.0 か v1.1 どれ？」。本番が悪い古版を使用。',
          fix: '月次レビュー：未使用を廃止予定（削除なし — コード参照が壊れる可能性）。理由付き。',
        },
        {
          mistake: 'レビューなし、改善なし',
          problem: 'ライブラリが停滞。悪いプロンプトは修正されない。良いバージョンは昇格されない。信頼喪失。',
          fix: '月次 1 時間レビュー：人気プロンプト分析、フィードバック統合、最良を承認済みに。改善で生きているライブラリ。',
        },
      ],
    },
    regionalConsiderations: {
      id: 'regional-considerations',
      title: '地域別・コンプライアンス上の考慮事項',
      content: [
        '**データ拠点とコンプライアンス要件がプロンプト保存場所・方法に影響。特にプロンプト本体が機密顧客データをプレースホルダーとして含む場合。**',
        '2026年4月現在、地域別の主な制約：',
      ],
      items: [
        '**日本 / METI ガバナンス 2024**：2024年の METI AI ガバナンスガイドラインでは、機密プロンプト（顧客データを含む可能性）の保存場所を明確化すること推奨。Notion、Airtable、PromptQuorum はいずれも日本リージョン対応；セットアップ前に設定確認。エンタープライズ向けはローカル推論（LM Studio、Ollama）+ PromptQuorum メタデータ管理のハイブリッドが効果的。',
        '**US SOC 2**：ベンダーコンプライアンスが必要なエンタープライズ向けは、SOC 2 Type II 認定ツール（Notion、Airtable、PromptQuorum 2026 年版対応）を選択。',
        '**規制業界（医療、金融、法務）**：患者 ID や財務記録識別子を含むシステムプロンプトはオンプレミスに置くこと。Git ベース保存またはセルフホスト選択肢を使用。',
        '**アドバイス**：機密プロンプト（PII を入力として受け付ける）と汎用プロンプトを分離。機密グループにはより強いアクセス管理と短い保存期間。',
      ],
      callouts: [
        {
          type: 'warning',
          label: 'プロンプト本体に本物 PII は絶対保存禁止',
          text: 'テンプレートは <CUSTOMER_NAME> などプレースホルダー — 本物の名前、メール、ID は不可。本物は実行時入力のみ。',
        },
      ],
    },
    faqSection: {
      id: 'faq-section',
      title: 'よくある質問',
      faqs: [
        {
          q: 'プロンプトライブラリとは何ですか？',
          a: 'プロンプトライブラリは、チームが唯一の情報源として管理する構造化・検索可能なプロンプト集約。Git リポジトリ、Notion、Airtable、Google Sheet、または専用ツール内に保存可能。目標は再利用、品質向上、速いオンボーディング。',
        },
        {
          q: '個人的なメモではなくライブラリを使う時期はいつ？',
          a: '複数人が同じプロンプト使用時。個人的なメモは個人向け — チーム成長時に優れたプロンプト消失・二重作業が生じる。',
        },
        {
          q: '使用可能なプロンプトライブラリを最初から構築するのに何日必要？',
          a: 'テスト済み 10～15 プロンプトで 2～4 週（チームサイズに応じて）。継続使用・月次レビューで品質継続改善。確立後は週 1 時間未満で保守。',
        },
        {
          q: 'チームに本当に貢献させるには？',
          a: '貢献を可能な限りシンプルに：フォーム・Git テンプレート、明確なメタデータ、月次レビュー。最重要：価値を示す — チームはプロンプト使用・改善を見れば投稿。',
        },
        {
          q: 'プロンプトライブラリはシステムプロンプトと同じ？',
          a: 'いいえ。システムプロンプトは一度定義した規則（全入力に適用）。ライブラリは異タスク向け異なるプロンプト集約（各々にメタデータ・バージョン）。',
        },
        {
          q: '確認・整理の頻度は？',
          a: '月 1 回が理想。使用少ないプロンプトを廃止予定に、改善版を承認済みに昇格。月次レビューチームは 6 か月で無駄 20～30% 削減。',
        },
        {
          q: 'あるモデルで機能するが別では機能しないプロンプトは？',
          a: 'メタデータでテスト済みモデルをタグ付け。新モデルで失敗なら、一つを無理に全モデルで機能させるのではなく「会議要約 – Claude」と「会議要約 – GPT-4o」のバリエーション作成。多モデルテストツールで出力比較→昇格。',
        },
        {
          q: 'プロンプトライブラリとプロンプト管理プラットフォームの違い？',
          a: 'ライブラリはチーム管理の構造化プロンプトレコード集約（Git・スプレッドシート・専用ツール）。プラットフォームはライブラリの上に実行・分析・バージョン管理・協業機能追加。シンプルから開始し、ボリューム・ガバナンスでアップグレード。',
        },
        {
          q: 'METI AI ガバナンス対応は？',
          a: '2024 年 METI ガバナンスガイドラインに対応することが推奨。PromptQuorum は日本エンタープライズ展開対応で、ローカル推論・監査ログで企業コンプライアンス要件満たす。機密（金融・医療・法務）はローカル推論、汎用はプラットフォーム活用。',
        },
        {
          q: 'エンタープライズセキュリティ下でローカル推論は？',
          a: 'ローカル推論（LM Studio・Ollama）と PromptQuorum の組み合わせで機密プロンプトのオンプレミス管理可能。メタデータ・標準化は PromptQuorum、実行はローカル環境 — ハイブリッド。データ主権確保しながらライブラリ利点享受。',
        },
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: '関連資料',
      items: [
        { title: 'プロンプトエンジニアリングの基礎', url: '/prompt-engineering/fundamentals?lang=ja' },
        { title: 'Few-Shot プロンプティング：例を使った効果的なプロンプト', url: '/prompt-engineering/few-shot-prompting?lang=ja' },
        { title: 'Chain-of-Thought プロンプティング：ステップバイステップ推論', url: '/prompt-engineering/chain-of-thought?lang=ja' },
        { title: 'PromptQuorum：プロンプト管理の簡素化', url: '/features?lang=ja' },
        { title: 'システムプロンプト vs ユーザープロンプト：何が違う？', url: '/prompt-engineering/system-prompt-vs-user-prompt?lang=ja' },
        { title: 'プロンプトのテストと最適化', url: '/prompt-engineering/prompt-testing?lang=ja' },
      ],
    },
    sources: {
      id: 'sources',
      title: 'ソース＆関連資料',
      items: [
        { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
        { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
        { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
        { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
      ],
    },
  },
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-24',
},
    zh: {
  theme: '基础知识',
  title: '构建提示词库，节省时间',
  intro: '提示词库是一个包含元数据的、经过测试的指令集合，您的团队可以共享和改进。构建得当，它成为团队的第二大脑：减少设置时间、加速新员工入职、防止优质提示词丢失。本指南提供了12步框架，帮助您构建团队真正会使用的提示词库。',
  seoTitle: '构建提示词库：团队12步框架（2026版）',
  metaDescription: '提示词库是包含元数据的共享可搜索提示词集合。构建提示词库的团队能节省数小时的设置时间并加速入职。这是一个经验证的框架。',
  publishDate: '2026-03-24',
  dateModified: '2026-04-29',
  readTime: '阅读约10分钟',
  educationalLevel: 'Beginner',
  audience: '采用AI工具的团队负责人和从业者',
  leadAnswerBlock: '提示词库是包含元数据的结构化、可搜索的提示词集合——不仅仅是一个列表。构建得当的提示词库能为团队节省数小时的提示词设置时间，并加快新员工入职。本指南涵盖构建团队真正使用的提示词库的12个关键步骤。',
  quickFacts: [
    '提示词库将新提示词的设置时间从多小时缩短至几分钟。',
    '每个提示词至少需要：标题、内容、输入变量、输出格式、标签、所有者、版本。',
    '最优组织方式：按任务/功能（不按模型）；模型详情在元数据中。',
    '轻量级治理（草稿→已批准→已弃用）防止质量下降，保持库的可用性。',
    '版本控制至关重要：v1.0、v1.1 附带更改说明；必须支持回滚。',
  ],
  toc: [
    { label: '什么是提示词库？', anchor: 'what-is-library' },
    { label: '团队为什么要构建？', anchor: 'why-build-one' },
    { label: '应该存储什么？', anchor: 'what-to-store' },
    { label: '如何开始？', anchor: 'how-to-start' },
    { label: '版本控制和质量管理', anchor: 'versioning' },
    { label: '存储位置选择', anchor: 'where-to-store' },
    { label: '常见错误', anchor: 'common-mistakes' },
    { label: '地区和合规考虑', anchor: 'regional-considerations' },
    { label: '常见问题', anchor: 'faq-section' },
    { label: '延伸阅读', anchor: 'related-reading' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/build-a-prompt-library?lang=zh',
    inLanguage: 'zh',
    headline: '构建提示词库，节省时间',
    description: '提示词库是您的团队共享和改进的经过测试的指令集合，包含元数据。',
    datePublished: '2026-03-24',
    dateModified: '2026-04-29',
    author: { '@type': 'Organization', name: 'PromptQuorum' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: '提示词库' },
      { '@type': 'Thing', name: '提示词工程' },
      { '@type': 'Thing', name: 'AI治理' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      { '@type': 'SoftwareApplication', name: 'Notion' },
      { '@type': 'SoftwareApplication', name: 'Airtable' },
    ],
    teaches: [
      '如何为团队构建结构化的提示词库',
      '每个提示词必须包含的信息（元数据、版本、所有者）',
      '如何按任务/功能组织提示词',
      '质量管理的轻量级治理流程',
      '提示词管理工具和平台',
    ],
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    audience: { '@type': 'Audience', audienceType: '团队负责人和AI从业者' },
    keywords: ['提示词库', '提示词工程', 'AI治理', '提示词管理', '版本管理', '团队协作'],
    primaryTerm: '提示词库',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'zh',
    mainEntity: [
      {
        '@type': 'Question',
        name: '什么是提示词库？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '提示词库是您的团队作为唯一信息源管理的结构化、可搜索的提示词集合。它可以存储在Git仓库、Notion、Airtable、Google Sheet或PromptQuorum等专用工具中。目标是标准化、共享和改进提示词。',
        },
      },
      {
        '@type': 'Question',
        name: '什么时候应该使用库而不是个人笔记？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '一旦多个人使用相同的提示词。个人笔记适合个人工作，但当团队增长时，优质提示词会丢失，团队会浪费时间重复工作。',
        },
      },
      {
        '@type': 'Question',
        name: '从零开始构建可用的提示词库需要多长时间？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '含10-15个经过测试的提示词的最小库需要2-4周（取决于团队规模）。通过持续使用和月度审查，质量会不断提高。一旦建立，维护每周只需不到1小时。',
        },
      },
      {
        '@type': 'Question',
        name: '如何让团队真正为共享库做贡献？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '让贡献尽可能简单：表单或Git模板、清晰的元数据要求、月度审查。最重要的是：展示价值——当团队看到他们的提示词被使用和改进时，他们会贡献。',
        },
      },
      {
        '@type': 'Question',
        name: '提示词库与系统提示词相同吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '不相同。系统提示词是一次定义然后应用于所有输入的规则。提示词库是针对不同任务的不同提示词的集合——每个都有自己的元数据和版本。',
        },
      },
      {
        '@type': 'Question',
        name: '团队应该多久审查和整理一次库？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '每月一次为宜。标记使用少的提示词为已弃用，将改进版本升级为已批准，在使用方式改变时创建新类别。月度审查的团队6个月内可减少20-30%的冗余。',
        },
      },
      {
        '@type': 'Question',
        name: '如何处理在一个模型上有效但在另一个模型上无效的提示词？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '在元数据中为每个提示词标记已测试的模型。如果提示词在新模型上失败，创建变体（如"会议总结-Claude"和"会议总结-GPT-4o"），而不是强制一个提示词到处工作。多模型测试工具让您在升级前比较输出。',
        },
      },
      {
        '@type': 'Question',
        name: '提示词库和提示词管理平台有什么区别？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '提示词库是您的团队管理的结构化提示词记录的集合——可以存储在Git仓库、电子表格或专用工具中。提示词管理平台在库的基础上增加了执行、分析、版本控制和协作功能。从简单库开始，当需要更多治理时升级到平台。',
        },
      },
      {
        '@type': 'Question',
        name: '使用PromptQuorum时需要遵守数据安全法吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的。根据2021年的数据安全法，如果提示词模板包含或涉及敏感数据，存储工具必须符合数据安全法要求。PromptQuorum提供中国地区部署选项，并支持本地推论以满足数据驻留和处理要求。对于金融、医疗、法律等受管制行业，使用本地推论确保敏感工作流的合规性。',
        },
      },
      {
        '@type': 'Question',
        name: '企业合规下如何实现本地推论？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '结合本地推论（LM Studio、Ollama等）和PromptQuorum，可以在自有基础设施中管理敏感提示词。混合方法：在PromptQuorum中管理元数据和标准化，在本地环境中执行。这既确保数据主权，又能享受库的优势。',
        },
      },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    inLanguage: 'zh',
    name: '如何构建提示词库',
    description: '构建团队真正使用的提示词库的12步框架。',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: '收集团队现在使用的真实提示词',
        text: '从基层开始。询问每个团队成员："您经常使用的三个最佳提示词是什么？"收集10-15个产生实际结果的真实提示词。这将成为您的基础库。',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '将每个提示词标准化为相同结构',
        text: '添加元数据：标题、正文（提示词）、输入变量（如<CUSTOMER_NAME>）、预期输出格式、标签、所有者、版本。这防止库增长时的混乱。',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '按任务/功能而非模型组织',
        text: '结构：「会议总结」→ v1.0 (Claude)、v1.0 (GPT-4o)，而不是「Claude提示词」→「会议总结」。模型详情属于元数据，不是文件夹结构。',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: '实施轻量级治理：草稿→已批准→已弃用',
        text: '新提示词以草稿开始。测试和反馈后变为已批准。过时或被替代的变为已弃用（不删除，防止参考断裂）。这防止坏提示词进入生产。',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: '明确版本控制：v1.0、v1.1带更改说明',
        text: '每个更改都获得版本号和更改说明。示例：v1.1「通过3个例子减少幻觉」。这使回滚简单，团队能理解改进。',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: '建立月度审查周期',
        text: '每月：哪些提示词受欢迎？哪些从未使用？提升改进的版本、标记已弃用。这保持库的实用性。',
      },
    ],
  },
  sections: {
    tldr: {
      isTldr: true,
      items: [
        '提示词库 = 有元数据的结构化库，不仅仅是列表',
        '每个条目需要：标题、正文、输入变量、输出格式、标签、所有者、版本',
        '自下而上构建：先收集真实提示词，再标准化为模板',
        '按任务/功能组织（不按模型）；模型详情在元数据中',
        '轻量级治理（草稿→已批准→已弃用）防止质量下降',
        '明确版本管理（v1.0、v1.1）附带更改说明；支持回滚',
        '月度审查：淘汰低使用提示词，升级改进版本',
      ],
    },
    whatIsLibrary: {
      id: 'what-is-library',
      title: '什么是提示词库？',
      content: [
        '提示词库是您的团队作为唯一信息源管理的结构化、可搜索的提示词集合。每个提示词都是带有元数据（标题、所有者、版本、标签、已测试模型）的记录，不只是文档中的文本。',
        '库可以存储在任何地方——Git仓库、Notion、Airtable、Google Sheet或PromptQuorum等专用工具。关键：它是可搜索的、有版本管理的、团队可访问的。',
        '目标：团队节省时间（不重新发明提示词）、快速入职（新员工使用已验证的提示词而不是从零开始）、防止质量下降（坏提示词被排除，好的被改进）。',
      ],
      callouts: [
        {
          type: 'tip',
          label: '不仅仅是列表',
          text: 'Slack消息或Google Doc中的提示词集合是开始——但不是真正的库。真正的库是可搜索的、有版本管理的、带有元数据的。',
        },
      ],
    },
    libraryAsset: {
      id: 'library-asset',
      title: '为什么提示词库是数字资产？',
      content: '一个经过验证的提示词库就像代码库——它是一个知识资产，支持重用、提高质量、加速入职。当最优秀的人离开时，他们经过测试的提示词不会随之消失。',
    },
    whyBuildOne: {
      id: 'why-build-one',
      title: '团队为什么要构建？',
      items: [
        '节省时间：新提示词需要数小时试错。库将设置从小时缩短到分钟。',
        '快速入职：新员工第一天就用验证的提示词，不用从头开始。',
        '质量控制：坏提示词被过滤，好的被持续改进。质量不断上升。',
        '保留知识：当人离开时，他们验证的提示词保留在库中。',
        'A/B测试：比较版本（v1.0 vs v1.1），看哪个效果更好。',
        '简化模型实验：在GPT-4o、Claude、Llama 3.1上测试同一提示词——追踪哪个最佳。',
      ],
      callouts: [
        {
          type: 'warning',
          label: '无库时的扩展混乱',
          text: '无库的团队遭遇：重复工作（每人重新发明相同提示词）、质量下降（坏提示词流传）、缓慢入职（新员工无起点）。',
        },
      ],
    },
    sharedSystem: {
      id: 'shared-system',
      title: '提示词库是团队共享的系统',
      content: '关键：不是自上而下强制，而是自下而上构建。您的团队提供真实提示词。您一起标准化和管理它们。治理很轻——足够的结构防止混乱，但不会使贡献不可能。',
    },
    whatToStore: {
      id: 'what-to-store',
      title: '提示词库中应该存储什么？',
      content: '不是任何人曾经写过的每个提示词——只是可重用的、驱动业务成果的提示词。',
      items: [
        '特定任务提示词：「会议总结」「邮件草稿」「代码审查」「客户Q&A」',
        '已测试提示词：在生产环境中验证过，有文档记录的结果',
        '团队提示词：多人使用的。个人提示词无需保存（保持本地）',
        '可重用提示词：适用于不同输入的（不是针对单个文档的一次性提示词）',
      ],
    },
    schemaBreakdown: {
      id: 'schema-breakdown',
      title: '每个条目应该包含什么？',
      items: [
        '**标题**：简洁、描述性（「会议总结v1.1」，不是「我的最佳提示词」）',
        '**提示词正文**：带占位符的真实提示词（<MEETING_TRANSCRIPT>、<TONE>）',
        '**输入变量**：什么可能改变？（<LANGUAGE>、<CUSTOMER_TYPE>、<FORMAT>）',
        '**输出格式**：期望输出是什么？（JSON、Markdown、纯文本、列表？）',
        '**所有者**：谁写的？谁负责更新？',
        '**标签**：搜索类别（「销售」「支持」「法律」「内容生成」）',
        '**版本**：v1.0、v1.1、v2.0——附带更改说明',
        '**已测试模型**：「Claude 4.6、GPT-4o」（帮助团队选择正确变体）',
        '**状态**：草稿、已批准、已弃用（防止坏提示词进入生产）',
      ],
      callouts: [
        {
          type: 'tip',
          label: '将输入存储为占位符',
          text: '在提示词正文中始终使用`<VARIABLE>`，不用真实数据。真实数据仅在运行时输入，不在模板中。',
        },
      ],
      promptExamples: [
        {
          bad: 'Meeting Summary Prompt\n\nMy meeting with Sarah Johnson on March 24 was about Q2 budget planning. Here\'s what happened: ....',
          good: 'Meeting Summary (v1.1 – Claude)\n\nInput: <MEETING_TRANSCRIPT>\nOutput: JSON with {summary: string, action_items: string[], duration_minutes: number}\n\nPrompt: 总结以下会议...',
          badLabel: '❌ 正文中个人数据、无结构、无变量',
          goodLabel: '✅ 占位符、清晰格式、版本控制、模型特定',
        },
      ],
    },
    optionalFields: {
      id: 'optional-fields',
      title: '可选字段（后来添加）',
      content: '从上面的9个必要字段开始。您可以稍后添加：',
      items: [
        '**成本说明**：「此提示词在GPT-4o上成本约0.02美元/调用」',
        '**性能指标**：「延迟：<2秒」「令牌计数：~500」',
        '**学到的教训**：「尝试少样本——不改进此任务的准确性」',
        '**依赖关系**：「需要retrieval_context输入（来自RAG系统）」',
      ],
    },
    howToStart: {
      id: 'how-to-start',
      title: '开始方式：6步框架',
      numberedItems: [
        {
          title: '收集真实提示词',
          whyItMatters: '问每个人："您定期使用的3个最佳提示词是什么？"收集10-15个真实提示词。这成为您的基础库——不是理论性的，而是生产中实际使用的。',
        },
        {
          title: '标准化结构',
          whyItMatters: '使用9个必要字段（标题、带占位符的正文、输入变量、输出格式、标签、所有者、版本、状态、已测试模型）。所有提示词应有相同结构。',
        },
        {
          title: '按任务组织',
          whyItMatters: '结构：「销售」（邮件草稿、异议处理、提议审查）而不是「Claude提示词」（混乱）。模型详情在元数据中，不在文件夹名称中。',
        },
        {
          title: '引入轻量级治理',
          whyItMatters: '草稿→已批准→已弃用。新提示词从草稿开始。测试+反馈后变为已批准。旧的变为已弃用（不删除）。这防止坏提示词进入生产。',
        },
        {
          title: '明确版本',
          whyItMatters: 'v1.0、v1.1、v2.0附带更改说明。示例：v1.1「通过3个例子减少幻觉」。回滚容易，改进清晰。',
        },
        {
          title: '启动月度审查',
          whyItMatters: '每月：哪些提示词受欢迎？哪些未使用？升级改进版本、标记已弃用。这保持库精瘦且有用。',
        },
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: '自下而上构建（收集真实提示词）→标准化→轻量级治理→月度审查。',
        },
      ],
      callouts: [
        {
          type: 'tip',
          label: '初期不要过度工程化',
          text: 'Google Sheet适用于1-20个提示词。当您有30+个或需要API访问时，升级到Notion/Airtable/PromptQuorum。',
        },
      ],
    },
    timelyRefinement: {
      id: 'timely-refinement',
      title: '持续改进：库通过使用而增长更强',
      content: [
        '您库的第一版是草稿。真正的价值来自持续使用和月度改进。',
        '一周后：团队最常用什么？出现了什么问题？将该反馈融入下一版本。',
      ],
    },
    whereToStore: {
      id: 'where-to-store',
      title: '应该在哪里存储？',
      content: '选择取决于团队规模、治理要求和集成。有3个常见选项：',
    },
    storageOptions: {
      id: 'storage-options',
      items: [
        '**Git中的Markdown** ——最适合<5人团队。免费、有版本、接近代码。问题：不可搜索（除了grep）。',
        '**Notion或Airtable** ——最适合5-20人团队。可搜索、美观UI、易协作。问题：不是API原生（PromptQuorum是API优先）。',
        '**专用平台（PromptQuorum）** ——最适合>20人团队或需要治理、审计、API访问时。',
      ],
      callouts: [
        {
          type: 'tip',
          label: '小规模开始',
          text: 'Git第一周足够。当团队>5或需要频繁搜索时，升级到Notion/Airtable/PromptQuorum。',
        },
      ],
    },
    structureApproach: {
      id: 'structure-approach',
      title: '组织结构',
      content: '无论存储在哪里：结构应按**任务/功能**，不是按模型。',
      items: [
        '✅ 正确：销售→邮件草稿(v1.0 Claude、v1.0 GPT-4o)→异议处理(v1.1 Claude)',
        '❌ 错误：Claude→销售提示词→邮件草稿',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: '为什么按任务而非模型？',
      content: '如果按模型组织，会发生这种情况：您想在另一模型上测试提示词。现在您需要复制、重命名、保持两个版本同步。这容易出错且乏味。',
      items: [
        '按任务：「邮件草稿」有变体（Claude v1.0、GPT-4o v1.0）作为清晰条目。易于比较、易于更新。',
      ],
    },
    storageTableNote: {
      id: 'storage-table-note',
      title: '3个存储选项比较',
      callouts: [
        {
          type: 'info',
          label: '下表',
          text: '根据团队大小、可搜索性、API需求选择选项。',
        },
      ],
    },
    storageTable: {
      id: 'storage-table',
      tableFormat: true,
      columns: ['选项', '最适合', '版本控制', '搜索', '治理'],
      rows: [
        {
          '选项': 'Git中的Markdown',
          '最适合': '<5人团队、工程导向',
          '版本控制': '原生(Git)',
          '搜索': '仅grep',
          '治理': '手动(PR审查)',
        },
        {
          '选项': 'Notion / Airtable',
          '最适合': '5-20人团队、非技术访问重要',
          '版本控制': '内置(基本)',
          '搜索': '原生(标签/搜索)',
          '治理': '权限但审计少',
        },
        {
          '选项': 'PromptQuorum(专用)',
          '最适合': '>20人团队、治理/审计必需',
          '版本控制': '完整(回滚、Diffs)',
          '搜索': '原生 + API',
          '治理': 'RBAC、审计日志、批准工作流',
        },
      ],
    },
    versioning: {
      id: 'versioning',
      title: '版本控制和质量维持',
      content: '版本控制是运作良好的库的支柱。没有明确版本会发生这种情况：有人改提示词→生产系统破裂→没人知道为什么。',
      items: [
        '**v1.0**：首个稳定版。生产就绪。测试过的结果。',
        '**v1.1**：小改进。同样逻辑、更好结果（如「v1.1：+2示例减少幻觉」）。',
        '**v2.0**：大重写。逻辑、输入变量或输出格式改变。大版本罕见。',
        '**更改说明**：总是记录改了什么（「通过添加风格指南改进客户语气」）——不只是「更新」。',
        '**回滚可能**：保持旧版本可访问。如果v1.1不如预期，1次点击回到v1.0。',
      ],
      callouts: [
        {
          type: 'warning',
          label: '无版本的「最新」不行',
          text: '如果系统总是用「最新」且有人改提示词，所有生产系统破裂。始终用明确版本(v1.0、v1.1、v2.0)。',
        },
      ],
    },
    commonMistakes: {
      id: 'common-mistakes',
      title: '常见错误和回避方法',
      mistakes: [
        {
          mistake: '在提示词正文中存储真实数据',
          problem: '例子：「Sarah Johnson的会议...」。分享或Git上传时，真实个人数据容易暴露。',
          fix: '始终用占位符：<CUSTOMER_NAME>。真实数据仅在运行时输入。',
        },
        {
          mistake: '不定义输入变量',
          problem: '某人用「我今天10点的会议...」——但未记录什么可能改变。其他人用硬编码数据用提示词。',
          fix: '记录每个变量：<MEETING_TIME>、<PARTICIPANT_COUNT>、<FOCUS>。显示如何替换。',
        },
        {
          mistake: '初期过度治理',
          problem: '从复杂批准工作流（3审查人、控制委员会）开始。2周后：没人贡献。',
          fix: '从草稿→已批准→已弃用开始。仅此。复杂工作流后来，如果团队>15。',
        },
        {
          mistake: '不标记旧提示词为已弃用',
          problem: '旧版本堆积。团队困惑：「用v1.0还是v1.1？」生产用旧的坏版本。',
          fix: '月度审查：未使用的标记为已弃用(不删除——代码中的引用可能破裂)。附带理由。',
        },
        {
          mistake: '从不审查、从不改进',
          problem: '库停滞。坏提示词未修复。好版本未升级。团队失信。',
          fix: '月度1小时审查：分析最用的提示词、整合反馈、升级最佳为已批准。改进显示库活跃。',
        },
      ],
    },
    regionalConsiderations: {
      id: 'regional-considerations',
      title: '地区和合规考虑',
      content: [
        '**数据驻留和合规要求影响您存储提示词的位置和方式，特别是当提示词正文包含敏感客户数据作为占位符时。**',
        '2026年4月，主要地区约束：',
      ],
      items: [
        '**中国 / 数据安全法**：2021年数据安全法要求敏感数据（含金融、医疗、法律记录标识符的提示词）需本地基础设施。使用本地推论（LM Studio、Ollama）或自托管选项——不是消费级SaaS。本地推论 + PromptQuorum元数据管理的混合方法满足合规需求。',
        '**US SOC 2**：需要供应商合规的企业客户应选择SOC 2Type II认证工具（Notion、Airtable、PromptQuorum 2026版都符合）。',
        '**跨境数据**：根据PIPL，包含个人数据的提示词模板需本地存储。使用本地推论确保数据驻留合规。',
        '**建议**：分离敏感提示词（接受PII作为输入）和通用提示词。对敏感组应用更强访问控制和更短保留期。',
      ],
      callouts: [
        {
          type: 'warning',
          label: '绝不在提示词正文中存储真实PII',
          text: '模板应用占位符如<CUSTOMER_NAME>——绝不用真实名称、邮件、ID。真实数据仅在运行时输入，不在存储的模板中。',
        },
      ],
    },
    faqSection: {
      id: 'faq-section',
      title: '常见问题',
      faqs: [
        {
          q: '什么是提示词库？',
          a: '提示词库是您的团队作为唯一信息源管理的结构化、可搜索的提示词集合。可以存储在Git仓库、Notion、Airtable、Google Sheet或专用工具中。目标是重用、改进质量、加快入职。',
        },
        {
          q: '何时用库而不是个人笔记？',
          a: '一旦多个人使用相同提示词。个人笔记对个人有效——但团队增长时丢失优质提示词，浪费时间重复工作。',
        },
        {
          q: '从零构建可用库需多久？',
          a: '含10-15个经测试提示词的最小库需2-4周(按团队规模)。持续使用和月审查时质量持续提高。一旦建立，维护每周<1小时。',
        },
        {
          q: '如何让团队真实贡献？',
          a: '让贡献尽简单：表单或Git模板、清晰元数据要求、月审查。最重要：显示价值——团队看到提示词被用和改进时会贡献。',
        },
        {
          q: '库与系统提示词相同吗？',
          a: '不同。系统提示词是一次定义应用到全部输入的规则。库是不同任务的不同提示词集合——各有元数据和版本。',
        },
        {
          q: '多久审查和整理一次库？',
          a: '每月为宜。标记少用提示词为已弃用、升级改进版本为已批准、使用改变时创建新类别。月审查团队6个月内减少20-30%冗余。',
        },
        {
          q: '一个模型有效但另一个无效的提示词如何处理？',
          a: '在元数据中为各提示词标记已测试模型。失败于新模型时，创建变体（如「总结-Claude」和「总结-GPT-4o」）而不强制一个提示词处处工作。多模型工具升级前比较输出。',
        },
        {
          q: '库和管理平台有何区别？',
          a: '库是团队管理的结构化提示词记录集合(可在Git、表格、专用工具中)。平台在库基础加执行、分析、版本管理、协作。从简单库开始，需要时升级到平台。',
        },
        {
          q: '使用PromptQuorum需遵守数据安全法吗？',
          a: '是的。按数据安全法，敏感数据相关提示词工具必须符合法律。PromptQuorum提供中国部署选项且支持本地推论满足驻留和处理要求。受管制行业用本地推论确保敏感工作流合规。',
        },
        {
          q: '企业合规下如何用本地推论？',
          a: '结合本地推论(LM Studio、Ollama等)和PromptQuorum可在自有基础设施管理敏感提示词。混合：在PromptQuorum管理元数据和标准化，在本地环境执行。既保数据主权又享库优势。',
        },
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: '延伸阅读',
      items: [
        { title: '提示词工程基础', url: '/prompt-engineering/fundamentals?lang=zh' },
        { title: '少样本提示词：用示例更好地提示', url: '/prompt-engineering/few-shot-prompting?lang=zh' },
        { title: '思路链提示词：逐步推理', url: '/prompt-engineering/chain-of-thought?lang=zh' },
        { title: 'PromptQuorum：简化提示词管理', url: '/features?lang=zh' },
        { title: '系统提示词 vs 用户提示词：有何区别？', url: '/prompt-engineering/system-prompt-vs-user-prompt?lang=zh' },
        { title: '提示词测试和优化', url: '/prompt-engineering/prompt-testing?lang=zh' },
      ],
    },
    sources: {
      id: 'sources',
      title: '来源和延伸阅读',
      items: [
        { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
        { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
        { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
        { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
      ],
    },
  },
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-24',
},
  };
