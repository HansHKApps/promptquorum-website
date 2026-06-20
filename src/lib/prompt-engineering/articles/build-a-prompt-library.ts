// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: build-a-prompt-library
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'monthly',
      theme: 'Fundamentals',
      title: 'How to Build a Prompt Library: 8-Field Template, Governance, and Team Adoption Guide',
      intro: 'A prompt library is a team-wide collection of tested instructions. Done well, each entry works like a small tool: pick it up, adapt the inputs, and get consistent results.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10 min read',
      seoTitle: 'Build a Prompt Library: Reusable AI Templates for Teams',
      metaDescription: 'Build a shared prompt library with 8-field metadata, Draft→Approved governance, and monthly pruning. Template, structured example, storage comparison, and team adoption playbook.',
      ogDescription: 'Stop losing great prompts in private chats. Build a team prompt library with structured templates, version control, and light governance — so anyone can reuse what works.',
      twitterDescription: 'Prompt library = recipe box for AI. 8-field template, step-by-step build guide, storage comparison, and governance that doesn\'t kill adoption.',
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
        { label: 'Maturity Levels', anchor: '#maturity-levels' },
        { label: 'Versioning & Quality', anchor: '#versioning' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Regional Considerations', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'How to Build a Prompt Library: 8-Field Template, Governance, and Team Adoption Guide',
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
              text: 'Tag each prompt with tested models in metadata. When a prompt fails on a new model, create a variant — for example "Meeting summary – Model A" and "Meeting summary – Model B" — rather than forcing one prompt to work everywhere. Multi-model testing tools let you compare output across models before promoting a prompt to Approved status.',
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
            'Light governance keeps quality high: mark prompts as Draft → Approved → Deprecated; never remove working prompts without marking them Deprecated first.',
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
            '**Every prompt should capture enough context that another person can reproduce your results reliably, even months later.** Teams that document prompts with these 8 fields report 40–60% faster onboarding when new colleagues join.',
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
          callouts: [
            {
              type: 'tip',
              label: 'Pro Tip: Add just ONE realistic example',
              text: 'The most commonly skipped field is "Example input and output." Adding just ONE realistic example to each prompt entry cuts first-time-use errors in half — new colleagues see exactly what "good" looks like before adapting the template.',
            },
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
              text: 'EU-only server options are available from most major platforms (Notion, Airtable, Sheets). Check data residency settings before choosing a cloud-based tool if your team handles sensitive data subject to GDPR.',
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
        maturityLevels: {
          id: 'maturity-levels',
          title: 'Prompt Library Maturity Levels',
          content: [
            'As your organization grows, your prompt library matures through predictable stages. Most teams start at Level 0 and should aim for Level 2 within 4–6 weeks. Level 3–4 only makes sense when prompt volume and team size justify the overhead.',
          ],
          columns: ['Maturity Level', 'Entries', 'Governance', 'Tooling', 'Team Size'],
          rows: [
            {
              'Maturity Level': 'Level 0: Ad hoc',
              'Entries': '0',
              'Governance': 'None — prompts in private chats',
              'Tooling': 'Chat history',
              'Team Size': '1 person',
            },
            {
              'Maturity Level': 'Level 1: Collection',
              'Entries': '5–10',
              'Governance': 'Shared doc, no review',
              'Tooling': 'Google Doc / Notion page',
              'Team Size': '2–5 people',
            },
            {
              'Maturity Level': 'Level 2: Structured',
              'Entries': '10–30',
              'Governance': 'Draft/Approved status, owner assigned',
              'Tooling': 'Notion/Airtable with fields',
              'Team Size': '5–15 people',
            },
            {
              'Maturity Level': 'Level 3: Managed',
              'Entries': '30–100',
              'Governance': 'Version control, monthly reviews, test cases',
              'Tooling': 'Git repo or dedicated tool',
              'Team Size': '15–50 people',
            },
            {
              'Maturity Level': 'Level 4: Product',
              'Entries': '100+',
              'Governance': 'Approval workflows, analytics, rollback',
              'Tooling': 'Dedicated platform (PromptQuorum, PromptHub)',
              'Team Size': '50+ people',
            },
          ],
          tableFormat: true,
        },
        promptQuorumFit: {
          id: 'prompt-quorum-fit',
          title: 'How PromptQuorum Enhances Your Prompt Library',
          content: [
            'PromptQuorum combines prompt storage with multi-model execution: save a prompt template, dispatch it to multiple models simultaneously, and record which model produced the best result for that template. Over time, this builds an evidence-based library where each prompt includes not just the instruction but the empirical data on which model handles it best — turning your library from a recipe box into a tested playbook.',
          ],
        },
        versioning: {
          id: 'versioning',
          title: 'How Do You Version Prompts and Maintain Quality?',
          content: [
            '**Without versioning and basic testing, a prompt library turns into a junk drawer; with light governance, it becomes a reliable internal product.**',
            'Major AI models periodically update their instruction-following behavior, which means prompts written for earlier versions may need adjustment for newer releases. Different models handle system prompts differently — always version-tag when you retest against a new model. Practical habits:',
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
              text: 'When your team upgrades to a new model version, run your full set of "Approved" prompts against it before switching. Output format and instruction-following behavior shift between versions.',
            },
            {
              type: 'warning',
              label: 'Version control is non-negotiable',
              text: 'A prompt library without version control becomes a liability, not an asset. When a model update changes output behavior and nobody knows which prompt version was used, you can\'t diagnose what broke. Even a simple "v1.0 → v1.1 – added JSON format" change note prevents hours of debugging.',
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
              fix: 'Add one-line change notes per version (e.g., "v1.2 – updated for new model version, removed temperature override"). Keep prior versions accessible.',
            },
            {
              mistake: 'Never retiring deprecated prompts — library grows with dead weight.',
              problem: 'Harder to find useful prompts; unclear which versions are actually maintained.',
              fix: 'Mark outdated prompts as Deprecated with a reason (e.g., "The current default model handles this case natively"). Remove from default views; archive for audit trails.',
            },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'Are There Regional or Compliance Considerations?',
          content: [
            '**Data residency and compliance requirements affect where and how you store prompts, especially when prompt bodies include sensitive customer data as placeholders.**',
            'The main constraints by region:',
          ],
          items: [
            'EU / GDPR: If prompt templates include or reference personal data, the storage tool must meet GDPR requirements. Notion, Airtable, and most SaaS platforms offer EU data residency; verify before enabling for sensitive workflows.',
            'US SOC 2: For enterprise customers that require vendor compliance, choose tools with SOC 2 Type II certification (Notion, Airtable, and PromptQuorum all qualify).',
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
          id: 'faq',
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
              a: 'Tag each prompt with tested models in metadata. When a prompt fails on a new model, create a variant — for example "Meeting summary – Model A" and "Meeting summary – Model B" — rather than forcing one prompt to work everywhere. Multi-model testing tools let you compare output across models before promoting a prompt to Approved status.',
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
            { title: 'Persona Prompting', url: '/prompt-engineering/persona-prompting' },
            { title: 'Constrained Prompting', url: '/prompt-engineering/constrained-prompting' },
            { title: '5 Building Blocks Every Prompt Needs', url: '/prompt-engineering/5-building-blocks-every-prompt-needs' },
            { title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo', url: '/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo' },
          ],
        },
        sources: {
          title: 'Sources & Further Reading',
          items: [
            { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
            { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
            { title: 'White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT" — arXiv:2302.11382', url: 'https://arxiv.org/abs/2302.11382' },
          ],
        },
      },
    },
    de: {
  theme: 'Grundlagen',
  title: 'Erstelle eine Prompt-Bibliothek, die Zeit spart',
  intro: 'Eine Prompt-Bibliothek ist eine teamweite Sammlung getesteter Anweisungen mit Metadaten, die Ihrem Team hilft, Prompts zu standardisieren, zu teilen und zu verbessern. Richtig aufgebaut, wird sie zum zweiten Gehirn Ihres Teams: Sie reduziert Setup-Zeit, beschleunigt das Onboarding und verhindert, dass bewährte Prompts in persönlichen Notizen verloren gehen. Dieses 12-Schritte-Framework zeigt, wie Sie eine Prompt-Bibliothek bauen, die Ihr Team tatsächlich nutzt.',
  seoTitle: 'Prompt-Bibliothek erstellen: Wiederverwendbare KI-Vorlagen',
  metaDescription: 'Prompt-Bibliothek mit 8-Feld-Metadaten und Governance aufbauen. Getestete Prompts projektübergreifend wiederverwenden. Mit Vorlage und Beispiel. April 2026.',
  ogDescription: 'Ihr Team schreibt dieselben KI-Prompts jeden Tag neu. Eine gemeinsame Prompt-Bibliothek mit getesteten Vorlagen, klarer Zuständigkeit und Versionskontrolle löst genau dieses Problem.',
  twitterDescription: 'Prompt-Bibliothek → getestete Vorlagen → konsistente KI-Ergebnisse. In einer Woche aufbauen. Schritt-für-Schritt-Anleitung.',
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
    url: 'https://www.promptquorum.com/de/prompt-engineering/build-a-prompt-library',
    inLanguage: 'de',
    headline: 'Erstelle eine Prompt-Bibliothek, die Zeit spart',
    description: 'Eine Prompt-Bibliothek ist eine teamweite Sammlung getesteter Anweisungen mit Metadaten, die Ihrem Team hilft, Prompts zu standardisieren, zu teilen und zu verbessern.',
    image: 'https://www.promptquorum.com/og-build-a-prompt-library-de.png',
    datePublished: '2026-03-24',
    dateModified: '2026-04-29',
    author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          text: 'Taggen Sie jeden Prompt mit getesteten Modellen in den Metadaten. Wenn ein Prompt auf einem neuen Modell nicht funktioniert, erstellen Sie eine Variante — zum Beispiel "Meeting-Zusammenfassung – Claude" und "Meeting-Zusammenfassung – GPT-5.5" — statt einen Prompt zu zwingen, überall zu funktionieren. Multi-Modell-Test-Tools lassen Sie Output vergleichen, bevor Sie einen Prompt zu Approved promovieren.',
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
        text: 'Struktur: "Meeting Summaries" → v1.0 (Claude), v1.0 (GPT-5.5) statt "Claude Prompts" → "Meeting Summaries". Modell-Details gehören in Metadaten, nicht in die Ordnerstruktur.',
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
        'Modell-Experiments vereinfachen: Test the same prompt auf GPT-5.5, Claude, Llama 3.3 — Track welche Model best ist.',
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
        '**Getestete Modelle**: "Claude 4.6, GPT-5.5" (dies hilft Teams, die richtige Variante zu wählen)',
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
        '**Kostennotizen**: "Dieser Prompt kostet ~0,02 € pro Aufruf bei GPT-5.5"',
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
        '✅ Richtig: Sales → Email Draft (v1.0 Claude, v1.0 GPT-5.5) → Customer Objection Handling (v1.1 Claude)',
        '❌ Falsch: Claude → Sales Prompts → Email Draft',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: 'Warum Aufgabe statt Modell?',
      content: 'Wenn Sie nach Modell organisieren, passiert folgendes: Irgendwann möchten Sie einen Prompt auf einem anderen Modell testen. Jetzt müssen Sie die Prompt-Datei kopieren, umbenennen, beide Versionen synchron halten. Das ist Fehler-anfällig und langweilig.',
      items: [
        'Wenn Sie nach Aufgabe organisieren: "Email Draft" hat Varianten (Claude v1.0, GPT-5.5 v1.0) als klare Einträge. Leicht zu vergleichen, leicht zu aktualisieren.',
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
          a: 'Taggen Sie jeden Prompt mit getesteten Modellen in den Metadaten. Wenn ein Prompt auf einem neuen Modell nicht funktioniert, erstellen Sie eine Variante — zum Beispiel "Meeting Summary – Claude" und "Meeting Summary – GPT-5.5" — statt einen Prompt zu zwingen, überall zu funktionieren. Multi-Modell-Test-Tools lassen Sie Output vergleichen, bevor Sie einen Prompt zu Approved promovieren.',
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
        { title: 'Prompt Engineering Fundamentals', url: '/de/prompt-engineering/fundamentals' },
        { title: 'Few-Shot Prompting: Mit Beispielen besser prompten', url: '/de/prompt-engineering/few-shot-prompting' },
        { title: 'Chain-of-Thought Prompting: Step-by-Step Reasoning', url: '/de/prompt-engineering/chain-of-thought' },
        { title: 'PromptQuorum: Prompt Management Made Easy', url: '/de/features' },
        { title: 'System-Prompt vs. User-Prompt: Was ist der Unterschied?', url: '/de/prompt-engineering/system-prompt-vs-user-prompt' },
        { title: 'Prompt Testing und Optimization', url: '/de/prompt-engineering/prompt-testing' },
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
  freshness_tier: 'monthly',
  next_refresh_due: '2026-09-24',
},
    es: {
      freshness_tier: 'monthly',
      theme: 'Fundamentals',
      title: 'Cómo construir una biblioteca de prompts: plantilla de 8 campos, gobernanza y guía de adopción para equipos',
      intro: 'Una biblioteca de prompts es una colección de instrucciones probadas para todo el equipo. Bien construida, cada entrada funciona como una pequeña herramienta: tómala, adapta las entradas y obtén resultados consistentes.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10 min de lectura',
      seoTitle: 'Biblioteca de prompts: plantillas de IA reutilizables',
      metaDescription: 'Crea una biblioteca de prompts compartida con metadatos, gobernanza Borrador→Aprobado y poda mensual. Incluye plantilla, ejemplo y guía de adopción.',
      ogDescription: 'Deja de perder buenos prompts en chats privados. Construye una biblioteca de prompts de equipo con plantillas estructuradas, control de versiones y gobernanza ligera — para que cualquiera pueda reutilizar lo que funciona.',
      twitterDescription: 'Biblioteca de prompts = caja de recetas para IA. Plantilla de 8 campos, guía de construcción paso a paso, comparación de almacenamiento y gobernanza que no mata la adopción.',
      educationalLevel: 'Beginner',
      audience: 'Líderes de equipo y profesionales que adoptan herramientas de IA',
      leadAnswerBlock: '**Una biblioteca de prompts es una colección compartida de prompts probados con metadatos estructurados — título, entradas, formato de salida esperado, propietario y versión — para que tu equipo pueda reutilizar instrucciones que funcionan en lugar de empezar desde cero cada vez.**',
      quickFacts: [
        '8 campos de metadatos recomendados por entrada de prompt (título, objetivo, cuerpo, entradas, guía de modelo, formato de salida, etiquetas, propietario/versión)',
        'Empieza con 5–10 prompts reales del trabajo diario — 1 a 2 semanas de recolección',
        'Cadencia de revisión mensual para retirar prompts sin uso; los equipos retiran típicamente el 20–30%',
        'Los equipos con 10+ prompts aprobados reportan 40–60% de configuración de tareas más rápida',
        'Borrador → Aprobado → Obsoleto: ciclo de vida de 3 estados mantiene la calidad alta',
      ],
      toc: [
        { label: '¿Qué es una biblioteca de prompts?', anchor: '#what-is-a-prompt-library' },
        { label: '¿Por qué construir una biblioteca de prompts?', anchor: '#why-build-a-prompt-library' },
        { label: 'Qué almacenar para cada prompt', anchor: '#what-to-store' },
        { label: 'Cómo construir paso a paso', anchor: '#how-to-build' },
        { label: 'Dónde almacenarla', anchor: '#where-to-store' },
        { label: '¿Cómo se comparan las opciones de almacenamiento?', anchor: '#storage-options-comparison' },
        { label: 'Niveles de madurez', anchor: '#maturity-levels' },
        { label: 'Versiones y calidad', anchor: '#versioning' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Consideraciones regionales', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Cómo construir una biblioteca de prompts: plantilla de 8 campos, gobernanza y guía de adopción para equipos',
        description: 'Qué es una biblioteca de prompts, por qué tu equipo debería construir una, cómo estructurarla y mantenerla, y mejores prácticas para versiones y gobernanza.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        keywords: ['biblioteca de prompts', 'gestión de prompts', 'prompt engineering', 'productividad del equipo', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Productividad del equipo' },
          { '@type': 'Thing', name: 'Gestión del conocimiento' },
        ],
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Líderes de equipo y profesionales que adoptan herramientas de IA' },
        url: 'https://www.promptquorum.com/es/prompt-engineering/build-a-prompt-library',
        inLanguage: 'es',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿Qué es una biblioteca de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Una biblioteca de prompts es una colección estructurada de prompts probados con metadatos (entradas, guía de modelo, salida esperada, versión, propietario). A diferencia de una lista de prompts copiados de internet, una biblioteca de prompts es un producto interno que tu equipo mantiene y reutiliza para consistencia y velocidad.' } },
          { '@type': 'Question', name: '¿Cuándo debería un equipo usar una biblioteca de prompts en lugar de notas personales?', acceptedAnswer: { '@type': 'Answer', text: 'Tan pronto como tengas 3+ miembros del equipo y 2+ prompts que uses más de una vez. Las notas personales funcionan para una persona; las bibliotecas funcionan para equipos. Una biblioteca reduce el tiempo de configuración de tareas, incorpora a nuevos colegas más rápidamente y evita el trabajo duplicado.' } },
          { '@type': 'Question', name: '¿Cuánto tiempo lleva construir una biblioteca de prompts usable desde cero?', acceptedAnswer: { '@type': 'Answer', text: 'Empieza pequeño: 1–2 semanas para recolectar 5–10 prompts reales del trabajo diario, normalizarlos en una plantilla y subirlos a un sistema compartido. La gobernanza y las herramientas mejoran con el tiempo; empieza con solo etiquetas de estado Borrador y Aprobado.' } },
          { '@type': 'Question', name: '¿Cómo consigo que mi equipo contribuya a una biblioteca de prompts compartida?', acceptedAnswer: { '@type': 'Answer', text: 'Haz que la contribución sea fácil y sin fricción. Empieza con 3–5 prompts campeones que crees tú mismo para que la gente vea ejemplos. Mantén la aprobación ligera (una persona, 5 minutos). Muestra victorias ("Esta biblioteca nos ahorró 10 horas este mes"). Nunca hagas la contribución obligatoria; hazla el camino de menor resistencia.' } },
          { '@type': 'Question', name: '¿Es una biblioteca de prompts lo mismo que un system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'No. Un system prompt es una instrucción persistente única que establece el comportamiento del LLM para una conversación. Una biblioteca de prompts es una colección de prompts (cada uno con contexto y metadatos) compartida en tu equipo para muchos casos de uso. Un system prompt podría vivir en tu biblioteca como una entrada.' } },
          { '@type': 'Question', name: '¿Con qué frecuencia debemos revisar y podar una biblioteca de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Mensualmente como mínimo. Busca prompts que nadie usa, prompts que la gente sigue editando ad-hoc, y oportunidades de consolidar. Marca los prompts sin uso como Obsoletos; elimínalos de las vistas predeterminadas después de 3 meses de inactividad.' } },
          { '@type': 'Question', name: '¿Cómo manejas prompts que funcionan en un modelo pero no en otro?', acceptedAnswer: { '@type': 'Answer', text: 'Etiqueta cada prompt con los modelos probados en los metadatos. Cuando un prompt falla en un nuevo modelo, crea una variante — por ejemplo "Resumen de reunión – Modelo A" y "Resumen de reunión – Modelo B" — en lugar de forzar un prompt a funcionar en todas partes.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre una biblioteca de prompts y una plataforma de gestión de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Una biblioteca de prompts es una colección de registros de prompts estructurados que tu equipo mantiene — puede vivir en un repositorio Git, una hoja de cálculo o una herramienta dedicada. Una plataforma de gestión de prompts añade ejecución, análisis, control de versiones y características de colaboración encima del concepto de biblioteca.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo construir una biblioteca de prompts para tu equipo',
        description: 'Una biblioteca de prompts es una colección centralizada y con capacidad de búsqueda de prompts probados con metadatos claros para que tu equipo pueda reutilizar lo que funciona.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Empieza con casos de uso reales y de alto valor', text: 'Elige 3–5 tareas repetitivas donde la IA ya ayuda (resúmenes de reuniones, respuestas de soporte, comentarios de revisión de código, borradores de campaña).' },
          { '@type': 'HowToStep', position: 2, name: 'Captura los prompts que ya funcionan', text: 'Durante una a dos semanas, cada vez que obtengas un gran resultado, guárdalo en una sección de "bandeja de entrada". Céntrate solo en prompts usados más de una vez con salida consistentemente buena.' },
          { '@type': 'HowToStep', position: 3, name: 'Normaliza en una plantilla estándar', text: 'Reescribe cada buen prompt con título claro, objetivo, cuerpo del prompt, marcadores de posición, etiquetas, propietario y versión.' },
          { '@type': 'HowToStep', position: 4, name: 'Organiza por tarea, no por modelo', text: 'Agrupa los prompts por lo que te ayudan a hacer (resumir, planificar, analizar, generar, revisar código). Los detalles del modelo pertenecen a los metadatos.' },
          { '@type': 'HowToStep', position: 5, name: 'Añade propiedad y revisión mínima', text: 'Asigna una persona responsable de cada categoría. Revisan prompts nuevos o modificados rápidamente para claridad y adecuación antes de marcarlos como "Aprobado".' },
          { '@type': 'HowToStep', position: 6, name: 'Revisa y poda regularmente', text: 'En una cadencia mensual, observa los patrones de uso, los prompts raramente usados, y los lugares donde la gente sigue editando el mismo prompt ad-hoc.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'Una biblioteca de prompts es un repositorio estructurado con metadatos, no solo una lista de prompts interesantes que encuentras en línea.',
            'Cada entrada necesita un título, cuerpo del prompt, entradas, formato de salida, etiquetas, propietario y versión — para que cualquiera en tu equipo pueda usarla de forma fiable.',
            'Construye de abajo hacia arriba: primero recolecta prompts reales del trabajo diario, luego normalízalos en una plantilla común.',
            'Organiza por tarea o función (ej. resumir, revisión de código, planificar), no por modelo; los detalles del modelo van en los metadatos.',
            'La gobernanza ligera mantiene la calidad alta: marca los prompts como Borrador → Aprobado → Obsoleto; nunca elimines prompts que funcionan sin marcarlos como Obsoletos primero.',
            'Versiona explícitamente (v1.0, v1.1) con notas de cambio de una línea; mantén las versiones anteriores accesibles para reversión.',
            'Cadencia de revisión mensual: retira los prompts de bajo uso y promueve los mejorados a medida que evolucionan los modelos predeterminados.',
          ],
        },
        whatIsLibrary: {
          id: 'what-is-a-prompt-library',
          title: '¿Qué es una biblioteca de prompts (y qué no es)?',
          content: [
            '**Una biblioteca de prompts es un repositorio estructurado de prompts, cada uno con un propósito definido, entradas y salida esperada; no es solo una larga lista de prompts interesantes copiados de internet.**',
            'Cada entrada debe leerse más como una pequeña herramienta que como un fragmento de texto. Piénsalo como una tarjeta de receta: una persona prueba la plantilla del prompt con 3–5 entradas reales, documenta lo que funciona y la publica para el equipo. Un registro de prompt útil típicamente incluye:',
          ],
          items: [
            'Un título claro ("Resumir entrevistas con partes interesadas en riesgos y acciones").',
            'Un caso de uso de una línea (qué problema resuelve).',
            'El cuerpo completo del prompt, incluyendo marcadores de posición para las entradas.',
            'Entradas requeridas (ej. transcripción, historia de usuario, diff de Git).',
            'Modelo recomendado / parámetros si es relevante.',
            'Formato de salida esperado (email, JSON, viñetas, tabla).',
            'Etiquetas (ej. #investigación, #marketing, #soporte, #revisión-de-código).',
            'Propietario y una versión simple ("v1.2 – actualizado para nuevo modelo").',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Una biblioteca de prompts almacena instrucciones probadas como activos estructurados y reutilizables con suficientes metadatos para que cualquier miembro del equipo pueda reproducir resultados sin el autor original.' },
          ],
        },
        libraryAsset: {
          content: [
            'Esto convierte cada prompt en un activo reutilizable que alguien más puede tomar y usar con una explicación mínima.',
          ],
        },
        whyBuildOne: {
          id: 'why-build-a-prompt-library',
          title: '¿Por qué debería tu equipo construir una biblioteca de prompts?',
          content: [
            '**Una biblioteca de prompts ahorra tiempo, reduce la variabilidad entre personas y te da un lugar seguro para refinar prompts en lugar de perderlos en registros de chat privados.**',
            'Cuando un colega descubre el enfoque correcto de chain-of-thought para una tarea, ese conocimiento desaparece sin una biblioteca. Con una, se acumula. Beneficios típicos:',
          ],
          items: [
            'Velocidad: Las personas empiezan desde una plantilla probada, no desde una caja en blanco.',
            'Consistencia: Tareas similares (resúmenes, briefings, revisiones de código) siguen patrones, tono y estructura consistentes.',
            'Calidad: Los prompts mejoran con el tiempo a medida que registras lo que funciona y retiras lo que no.',
            'Incorporación: Los nuevos colegas pueden explorar ejemplos y ser productivos rápidamente en lugar de adivinar cómo "hablar con la IA".',
            'Gobernanza: Las áreas sensibles (legal, RRHH, finanzas, cumplimiento) usan prompts revisados en lugar de instrucciones ad-hoc.',
          ],
        },
        sharedSystem: {
          content: [
            'En lugar de que cada persona mantenga un almacén privado de prompts en notas, acabas con un sistema compartido que representa cómo tu organización realmente quiere usar la IA.',
          ],
        },
        whatToStore: {
          id: 'what-to-store',
          title: '¿Qué deberías almacenar para cada prompt?',
          content: [
            '**Cada prompt debe capturar suficiente contexto para que otra persona pueda reproducir tus resultados de forma fiable, incluso meses después.** Los equipos que documentan prompts con estos 8 campos reportan una incorporación 40–60% más rápida cuando se unen nuevos colegas.',
            'Un esquema práctico:',
          ],
        },
        schemaBreakdown: {
          items: [
            'Título: Corto, orientado a la tarea (ej. "Notas de reunión – lista de acciones", "Clasificador de triaje de informes de errores").',
            'Objetivo / descripción: Una o dos oraciones que explican qué hace.',
            'Cuerpo del prompt: El texto completo de la instrucción, con marcadores de posición como <PEGAR_NOTAS_AQUÍ> y cualquier guía de estilo de sistema.',
            'Entradas: Lo que el usuario debe proporcionar (ej. "Transcripción de Zoom", "Lista de tickets de Jira").',
            'Guía de modelo: Modelos y configuraciones recomendados si es importante.',
            'Formato de salida: Por ejemplo, "Lista de viñetas en Markdown", "Tabla de 2 columnas" o "Array JSON válido".',
            'Etiquetas / categoría: Por ejemplo, #resumen, #planificación, #análisis, más etiquetas funcionales.',
            'Propietario / versión / última actualización: Quién lo mantiene, cadena de versión y fecha del último cambio.',
          ],
          promptExamples: [
            {
              badLabel: 'Prompt sin estructura (no listo para biblioteca)',
              bad: 'Resume esta reunión',
              goodLabel: 'Prompt estructurado con marcadores de posición (listo para biblioteca)',
              good: `Eres un gestor de proyecto senior. Resume la siguiente transcripción de reunión en:\n1. Decisiones clave (3–5 viñetas)\n2. Elementos de acción — cada uno con nombre del propietario y fecha límite\n3. Preguntas abiertas que necesitan seguimiento\n\nFormato de salida: Markdown. Mantén cada sección por debajo de 100 palabras.\n\nTranscripción:\n<PEGAR_TRANSCRIPCIÓN_AQUÍ>`,
            },
          ],
        },
        optionalFields: {
          content: [
            'Opcional pero valioso:',
          ],
          items: [
            'Ejemplo de entrada y salida: Una entrada realista y una buena salida para que los usuarios puedan juzgar la adecuación de un vistazo.',
          ],
        },
        howToStart: {
          id: 'how-to-build',
          title: '¿Cómo construyes una biblioteca de prompts paso a paso?',
          content: [
            '**La forma más rápida de construir una biblioteca de prompts usable es recolectar prompts reales del trabajo diario, normalizarlos en una plantilla común y luego añadir gobernanza ligera.**',
            'Un enfoque práctico:',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Piénsalo como una caja de recetas: una persona prueba una receta, la escribe con ingredientes y pasos exactos, y ahora todo el equipo puede cocinar el mismo plato — incluso si el cocinero original está de vacaciones.' },
          ],
          numberedItems: [
            'Empieza con casos de uso reales y de alto valor: Elige 3–5 tareas repetitivas donde la IA ya ayuda (resúmenes de reuniones, respuestas de soporte, comentarios de revisión de código, borradores de campaña).',
            'Captura los prompts que ya funcionan: Durante una a dos semanas, cada vez que obtengas un gran resultado, guárdalo en una sección de "bandeja de entrada". Céntrate solo en prompts usados más de una vez con salida consistentemente buena.',
            'Normaliza en una plantilla estándar: Reescribe cada buen prompt con título claro, objetivo, cuerpo del prompt, marcadores de posición, etiquetas, propietario y versión.',
            'Organiza por tarea, no por modelo: Agrupa los prompts por lo que te ayudan a hacer (resumir, planificar, analizar, generar, revisar código). Los detalles del modelo pertenecen a los metadatos.',
            'Añade propiedad y revisión mínima: Asigna una persona responsable de cada categoría. Revisan prompts nuevos o modificados rápidamente para claridad y adecuación antes de marcarlos como "Aprobado".',
            'Revisa y poda regularmente: En una cadencia mensual, observa los patrones de uso, los prompts raramente usados, y los lugares donde la gente sigue editando el mismo prompt ad-hoc.',
          ],
        },
        timelyRefinement: {
          content: [
            'Con el tiempo, esto convierte las instrucciones dispersas en un kit de herramientas curado que refleja cómo tu equipo realmente trabaja.',
          ],
        },
        whereToStore: {
          id: 'where-to-store',
          title: '¿Dónde deberías almacenar una biblioteca de prompts?',
          content: [
            '**Puedes implementar una biblioteca de prompts en cualquier cosa, desde un repositorio Git hasta una lista compartida; lo importante son los campos con capacidad de búsqueda, la edición fácil y algún historial de cambios.**',
          ],
        },
        storageOptions: {
          content: ['Opciones comunes y efectivas:'],
          items: [
            'Archivos Markdown en un repositorio: Un archivo por categoría, metadatos en bloques frontmatter. Beneficios: control de versiones, revisión de código, diffs, ramas.',
            'Tablas o listas (Notion, Airtable, Sheets): Columnas para título, prompt, categoría, etiquetas, modelo, propietario, estado. Fácil de filtrar y buscar para usuarios no técnicos.',
            'Herramientas dedicadas de gestión de prompts: A menudo añaden ejecución con un clic, análisis por prompt y control de acceso. Útiles para muchos usuarios no técnicos y gobernanza estricta.',
          ],
        },
        structureApproach: {
          content: [
            'Para la estructura, un híbrido simple funciona bien:',
          ],
          items: [
            'Categorías por función: Marketing, Ventas, Soporte, Producto, Ingeniería, Operaciones.',
            'Subcategorías o etiquetas por tarea: resumir, planificar, reescribir, analizar, clasificar, generar-código, revisar-código.',
            'Estado: Borrador, Aprobado, Obsoleto.',
          ],
        },
        structureFlexibility: {
          content: [
            'Las categorías dan estructura; las etiquetas la mantienen flexible a medida que evoluciona tu uso.',
          ],
        },
        storageTable: {
          id: 'storage-options-comparison',
          title: '¿Cómo se comparan las opciones de almacenamiento?',
          columns: ['Herramienta/Formato', 'Mejor para', 'Control de versiones', 'Búsqueda', 'Gobernanza'],
          rows: [
            { 'Herramienta/Formato': 'Archivos Markdown en Git', 'Mejor para': 'Equipos de ingeniería, flujos de trabajo de revisión de código', 'Control de versiones': '✓ Nativo', 'Búsqueda': '✓ Herramientas CLI', 'Gobernanza': '✓ Revisiones de PR' },
            { 'Herramienta/Formato': 'Notion / Airtable / Sheets', 'Mejor para': 'Equipos mixtos, usuarios no técnicos', 'Control de versiones': '✓ Historial limitado', 'Búsqueda': '✓ Filtros de texto completo', 'Gobernanza': '✓ Permisos y roles' },
            { 'Herramienta/Formato': 'Herramientas dedicadas (ej. PromptQuorum)', 'Mejor para': 'Equipos que necesitan ejecución con un clic y métricas', 'Control de versiones': '✓ Historial completo', 'Búsqueda': '✓ Texto completo, etiquetas, metadatos', 'Gobernanza': '✓ Flujos de aprobación integrados' },
          ],
          tableFormat: true,
        },
        maturityLevels: {
          id: 'maturity-levels',
          title: 'Niveles de madurez de la biblioteca de prompts',
          content: [
            'A medida que tu organización crece, tu biblioteca de prompts madura a través de etapas predecibles. La mayoría de los equipos empiezan en el Nivel 0 y deberían apuntar al Nivel 2 dentro de 4–6 semanas.',
          ],
          columns: ['Nivel de madurez', 'Entradas', 'Gobernanza', 'Herramientas', 'Tamaño del equipo'],
          rows: [
            { 'Nivel de madurez': 'Nivel 0: Ad hoc', 'Entradas': '0', 'Gobernanza': 'Ninguna — prompts en chats privados', 'Herramientas': 'Historial de chat', 'Tamaño del equipo': '1 persona' },
            { 'Nivel de madurez': 'Nivel 1: Colección', 'Entradas': '5–10', 'Gobernanza': 'Documento compartido, sin revisión', 'Herramientas': 'Google Doc / página de Notion', 'Tamaño del equipo': '2–5 personas' },
            { 'Nivel de madurez': 'Nivel 2: Estructurado', 'Entradas': '10–30', 'Gobernanza': 'Estado Borrador/Aprobado, propietario asignado', 'Herramientas': 'Notion/Airtable con campos', 'Tamaño del equipo': '5–15 personas' },
            { 'Nivel de madurez': 'Nivel 3: Gestionado', 'Entradas': '30–100', 'Gobernanza': 'Control de versiones, revisiones mensuales, casos de prueba', 'Herramientas': 'Repositorio Git o herramienta dedicada', 'Tamaño del equipo': '15–50 personas' },
            { 'Nivel de madurez': 'Nivel 4: Producto', 'Entradas': '100+', 'Gobernanza': 'Flujos de aprobación, análisis, reversión', 'Herramientas': 'Plataforma dedicada (PromptQuorum, PromptHub)', 'Tamaño del equipo': '50+ personas' },
          ],
          tableFormat: true,
        },
        promptQuorumFit: {
          id: 'prompt-quorum-fit',
          title: 'Cómo PromptQuorum mejora tu biblioteca de prompts',
          content: [
            'PromptQuorum combina el almacenamiento de prompts con la ejecución multi-modelo: guarda una plantilla de prompt, despacha a múltiples modelos simultáneamente y registra qué modelo produjo el mejor resultado para esa plantilla. Con el tiempo, esto construye una biblioteca basada en evidencia donde cada prompt incluye no solo la instrucción sino los datos empíricos sobre qué modelo la maneja mejor.',
          ],
        },
        versioning: {
          id: 'versioning',
          title: '¿Cómo versionas los prompts y mantienes la calidad?',
          content: [
            '**Sin versiones y pruebas básicas, una biblioteca de prompts se convierte en un cajón de basura; con gobernanza ligera, se convierte en un producto interno fiable.**',
            'Los principales modelos de IA actualizan periódicamente su comportamiento de seguimiento de instrucciones, lo que significa que los prompts escritos para versiones anteriores pueden necesitar ajuste para las más nuevas. Hábitos prácticos:',
          ],
          items: [
            'Versiona los prompts explícitamente: Usa un esquema simple como v1.0 – v1.1. Añade una nota de cambio de una línea (ej. "v1.1 – añadido formato de salida JSON; reducidas alucinaciones para fechas").',
            'Adjunta casos de prueba a los prompts importantes: Para prompts de alto impacto, mantén 3–5 entradas de prueba y patrones de salida esperados. Después de editar o cambiar modelos, ejecuta esas pruebas.',
            'Rastrea el uso y los comentarios: Incluso un simple sistema de "estrellas" o comentario te ayuda a ver qué prompts funcionan y cuáles necesitan atención.',
            'Planifica para la reversión: Siempre mantén la versión anterior accesible para que puedas revertir si es necesario.',
            'Retira los prompts intencionalmente: Cuando un prompt está desactualizado, márcalo como Obsoleto y explica por qué, para que la gente sepa no usarlo.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '¿Cuáles son los errores comunes al construir una biblioteca de prompts?',
          mistakes: [
            { mistake: 'Almacenar prompts en notas personales o registros de chat privados.', problem: 'El conocimiento permanece en silos; otros no pueden encontrar o reutilizar lo que descubriste. Los nuevos colegas reconstruyen los mismos prompts desde cero.', fix: 'Usa un sistema compartido con capacidad de búsqueda (repositorio Git, Airtable, herramienta dedicada). Trátalo como un activo del equipo, no como notas personales.' },
            { mistake: 'Escribir prompts sin marcadores de posición de entrada (ej. codificar nombres o números específicos).', problem: 'Los prompts no son reutilizables; tienes que editar todo el prompt cada vez en lugar de intercambiar entradas.', fix: 'Siempre marca las partes dinámicas como `<NOMBRE_DE_MARCADOR>` o `[VARIABLE]`. Haz que el prompt sea una plantilla, no una instrucción de un solo uso.' },
            { mistake: 'Sobre-ingeniería de la gobernanza al lanzar (flujos de aprobación elaborados, comités directivos).', problem: 'La sobrecarga mata la adopción; la gente vuelve a los prompts personales en lugar de contribuir a la biblioteca.', fix: 'Empieza simple: solo Borrador y Aprobado. Añade proceso solo cuando tu equipo > 5 o cuando las áreas sensibles (legal, RRHH) lo necesiten.' },
            { mistake: 'Omitir el historial de versiones — sin notas de cambio ni versiones anteriores guardadas.', problem: 'Cuando un nuevo modelo rompe un prompt, no puedes revertir fácilmente o entender qué cambió.', fix: 'Añade notas de cambio de una línea por versión (ej. "v1.2 – actualizado para nueva versión del modelo, eliminada anulación de temperatura"). Mantén las versiones anteriores accesibles.' },
            { mistake: 'Nunca retirar los prompts obsoletos — la biblioteca crece con peso muerto.', problem: 'Es más difícil encontrar prompts útiles; no está claro qué versiones están realmente mantenidas.', fix: 'Marca los prompts desactualizados como Obsoletos con una razón. Elimínalos de las vistas predeterminadas; archívalos para pistas de auditoría.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: '¿Hay consideraciones regionales o de cumplimiento?',
          content: [
            '**Los requisitos de residencia de datos y cumplimiento afectan dónde y cómo almacenas los prompts, especialmente cuando los cuerpos de los prompts incluyen datos sensibles de clientes como marcadores de posición.**',
            'Las principales restricciones por región:',
          ],
          items: [
            'UE / RGPD: Si las plantillas de prompts incluyen o hacen referencia a datos personales, la herramienta de almacenamiento debe cumplir con los requisitos del RGPD. Notion, Airtable y la mayoría de las plataformas SaaS ofrecen residencia de datos en la UE; verifica antes de habilitar para flujos de trabajo sensibles.',
            'SOC 2 de EE.UU.: Para clientes empresariales que requieren cumplimiento de proveedores, elige herramientas con certificación SOC 2 Tipo II (Notion, Airtable y PromptQuorum califican).',
            'Industrias reguladas (salud, finanzas, legal): Los system prompts que incluyen identificadores de pacientes o registros financieros deben permanecer en tu propia infraestructura. Usa almacenamiento basado en Git o una opción autohospedada.',
            'Consejo: Separa los prompts sensibles (los que aceptan PII como entradas) de los prompts de uso general. Aplica controles de acceso más estrictos y retención más corta al grupo sensible.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué es una biblioteca de prompts?', a: 'Una biblioteca de prompts es una colección estructurada de prompts probados con metadatos (entradas, guía de modelo, salida esperada, versión, propietario). A diferencia de una lista de prompts copiados de internet, una biblioteca de prompts es un producto interno que tu equipo mantiene y reutiliza para consistencia y velocidad.' },
            { q: '¿Cuándo debería un equipo usar una biblioteca de prompts en lugar de notas personales?', a: 'Tan pronto como tengas 3+ miembros del equipo y 2+ prompts que uses más de una vez. Las notas personales funcionan para una persona; las bibliotecas funcionan para equipos.' },
            { q: '¿Cuánto tiempo lleva construir una biblioteca de prompts usable desde cero?', a: 'Empieza pequeño: 1–2 semanas para recolectar 5–10 prompts reales del trabajo diario, normalizarlos en una plantilla y subirlos a un sistema compartido.' },
            { q: '¿Cómo consigo que mi equipo contribuya a una biblioteca de prompts compartida?', a: 'Haz que la contribución sea fácil y sin fricción. Empieza con 3–5 prompts campeones que crees tú mismo. Mantén la aprobación ligera. Muestra victorias. Nunca hagas la contribución obligatoria.' },
            { q: '¿Es una biblioteca de prompts lo mismo que un system prompt?', a: 'No. Un system prompt es una instrucción persistente única para una conversación. Una biblioteca de prompts es una colección de prompts compartida en tu equipo para muchos casos de uso.' },
            { q: '¿Con qué frecuencia debemos revisar y podar una biblioteca de prompts?', a: 'Mensualmente como mínimo. Busca prompts que nadie usa y oportunidades de consolidar. Marca los prompts sin uso como Obsoletos.' },
            { q: '¿Cómo manejas prompts que funcionan en un modelo pero no en otro?', a: 'Etiqueta cada prompt con los modelos probados en los metadatos. Cuando un prompt falla en un nuevo modelo, crea una variante en lugar de forzar un prompt a funcionar en todas partes.' },
            { q: '¿Cuál es la diferencia entre una biblioteca de prompts y una plataforma de gestión de prompts?', a: 'Una biblioteca de prompts es una colección de registros de prompts estructurados. Una plataforma de gestión de prompts añade ejecución, análisis y control de versiones encima del concepto de biblioteca. Empieza con una biblioteca simple.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            { title: 'Fundamentos de prompt engineering', url: '/es/prompt-engineering/fundamentals' },
            { title: 'Few-Shot Prompting: mejora tus prompts con ejemplos', url: '/es/prompt-engineering/few-shot-prompting' },
            { title: 'Chain-of-Thought Prompting: razonamiento paso a paso', url: '/es/prompt-engineering/chain-of-thought' },
            { title: 'PromptQuorum: gestión de prompts simplificada', url: '/es/features' },
            { title: 'System Prompt vs. User Prompt: ¿cuál es la diferencia?', url: '/es/prompt-engineering/system-prompt-vs-user-prompt' },
            { title: 'Pruebas y optimización de prompts', url: '/es/prompt-engineering/prompt-testing' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes y lecturas adicionales',
          items: [
            { title: 'Guía de prompt engineering de OpenAI', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'Anthropic: resumen de prompt engineering', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
            { title: 'Google DeepMind: Estrategias de prompting', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
          ],
        },
      },
    },
    ar: {
      freshness_tier: 'monthly',
      theme: 'Fundamentals',
      title: 'كيفية بناء مكتبة تعليمات: قالب 8 حقول والحوكمة ودليل التبني للفرق',
      intro: 'مكتبة التعليمات هي مجموعة من التعليمات المختبرة لكامل الفريق. حين تُبنى بشكل صحيح، كل إدخال يعمل كأداة صغيرة: خذها وكيِّف المدخلات واحصل على نتائج متسقة.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '١٠ دقائق للقراءة',
      seoTitle: 'بناء مكتبة Prompts: قوالب AI لإعادة الاستخدام',
      metaDescription: '8 حقول بيانات لكل prompt وحوكمة مسودة→معتمدة ومراجعة شهرية. الفرق التي تمتلك 10+ prompts تُنجز المهام بسرعة أكبر 40–60%. دليل بناء + قالب جاهز.',
      ogDescription: 'توقَّف عن فقدان التعليمات الجيدة في المحادثات الخاصة. ابنِ مكتبة تعليمات للفريق بقوالب منظمة والتحكم في الإصدارات وحوكمة خفيفة — حتى يتمكن الجميع من إعادة استخدام ما يجدي.',
      twitterDescription: 'مكتبة التعليمات = صندوق وصفات للذكاء الاصطناعي. قالب 8 حقول ودليل بناء خطوة بخطوة ومقارنة التخزين وحوكمة لا تقتل التبني.',
      educationalLevel: 'مبتدئ',
      audience: 'قادة الفرق والمهنيون الذين يتبنون أدوات الذكاء الاصطناعي',
      leadAnswerBlock: '**مكتبة التعليمات هي مجموعة مشتركة من التعليمات المختبرة مع معادن بيانات منظمة — عنوان ومدخلات وتنسيق المخرجات المتوقع ومالك ونسخة — حتى يتمكن فريقك من إعادة استخدام التعليمات التي تجدي بدلًا من البدء من الصفر في كل مرة.**',
      quickFacts: [
        '8 حقول معادن بيانات موصى بها لكل إدخال تعليمة (عنوان وهدف وجسم ومدخلات ودليل نموذج وتنسيق مخرجات وعلامات ومالك/نسخة)',
        'ابدأ بـ 5 إلى 10 تعليمات حقيقية من العمل اليومي — أسبوع إلى أسبوعين للجمع',
        'دورة مراجعة شهرية لسحب التعليمات غير المستخدمة؛ الفرق تسحب عادةً 20 إلى 30٪',
        'الفرق التي تمتلك 10+ تعليمات معتمدة تُبلِّغ عن إعداد المهام أسرع بـ 40 إلى 60٪',
        'مسودة → معتمدة → متقادمة: دورة حياة بثلاثة حالات تحافظ على جودة عالية',
      ],
      toc: [
        { label: 'ما هي مكتبة التعليمات؟', anchor: '#what-is-a-prompt-library' },
        { label: 'لماذا تبني مكتبة تعليمات؟', anchor: '#why-build-a-prompt-library' },
        { label: 'ما الذي يجب تخزينه لكل تعليمة', anchor: '#what-to-store' },
        { label: 'كيفية البناء خطوة بخطوة', anchor: '#how-to-build' },
        { label: 'أين تخزنها', anchor: '#where-to-store' },
        { label: 'كيف تُقارَن خيارات التخزين؟', anchor: '#storage-options-comparison' },
        { label: 'مستويات النضج', anchor: '#maturity-levels' },
        { label: 'الإصدارات والجودة', anchor: '#versioning' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'الاعتبارات الإقليمية', anchor: '#regional-considerations' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'كيفية بناء مكتبة تعليمات: قالب 8 حقول والحوكمة ودليل التبني للفرق',
        description: 'ما هي مكتبة التعليمات، ولماذا يجب على فريقك بناء واحدة، وكيفية هيكلتها وصيانتها، وأفضل الممارسات للإصدارات والحوكمة.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        keywords: ['مكتبة التعليمات', 'إدارة التعليمات', 'هندسة التعليمات', 'إنتاجية الفريق', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'هندسة التعليمات' },
          { '@type': 'Thing', name: 'إنتاجية الفريق' },
          { '@type': 'Thing', name: 'إدارة المعرفة' },
        ],
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'قادة الفرق والمهنيون الذين يتبنون أدوات الذكاء الاصطناعي' },
        url: 'https://www.promptquorum.com/ar/prompt-engineering/build-a-prompt-library',
        inLanguage: 'ar',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          { '@type': 'Question', name: 'ما هي مكتبة التعليمات؟', acceptedAnswer: { '@type': 'Answer', text: 'مكتبة التعليمات هي مجموعة منظمة من التعليمات المختبرة مع معادن بيانات (مدخلات ودليل نموذج ومخرجات متوقعة ونسخة ومالك). على عكس قائمة التعليمات المنسوخة من الإنترنت، مكتبة التعليمات هي منتج داخلي يصونه فريقك ويعيد استخدامه للاتساق والسرعة.' } },
          { '@type': 'Question', name: 'متى يجب أن يستخدم الفريق مكتبة تعليمات بدلًا من الملاحظات الشخصية؟', acceptedAnswer: { '@type': 'Answer', text: 'بمجرد أن يكون لديك 3+ أعضاء في الفريق و2+ تعليمات تستخدمها أكثر من مرة. الملاحظات الشخصية تصلح لشخص واحد؛ المكتبات تصلح للفرق. تُقلِّل المكتبة وقت إعداد المهام وتُسرِّع إعداد الزملاء الجدد وتمنع العمل المكرر.' } },
          { '@type': 'Question', name: 'كم يستغرق بناء مكتبة تعليمات قابلة للاستخدام من الصفر؟', acceptedAnswer: { '@type': 'Answer', text: 'ابدأ صغيرًا: أسبوع إلى أسبوعين لجمع 5 إلى 10 تعليمات حقيقية من العمل اليومي وتطبيعها في قالب ورفعها إلى نظام مشترك. الحوكمة والأدوات تتحسن مع الوقت؛ ابدأ بعلامتي حالة مسودة ومعتمدة فقط.' } },
          { '@type': 'Question', name: 'كيف أحصل على مساهمة فريقي في مكتبة تعليمات مشتركة؟', acceptedAnswer: { '@type': 'Answer', text: 'اجعل المساهمة سهلة وبلا احتكاك. ابدأ بـ 3 إلى 5 تعليمات بطلة تنشئها أنت لتُوضَح الأمثلة. اجعل الموافقة خفيفة (شخص واحد، 5 دقائق). أظهر المكاسب ("وفَّرت هذه المكتبة 10 ساعات هذا الشهر"). لا تجعل المساهمة إلزامية أبدًا؛ اجعلها مسار المقاومة الأقل.' } },
          { '@type': 'Question', name: 'هل مكتبة التعليمات هي نفس system prompt؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. system prompt هو تعليمة مستمرة واحدة تضبط سلوك النموذج اللغوي الكبير لمحادثة ما. مكتبة التعليمات هي مجموعة من التعليمات (كل منها بسياق ومعادن بيانات) مشتركة في فريقك لحالات استخدام كثيرة. يمكن أن يعيش system prompt في مكتبتك كإدخال.' } },
          { '@type': 'Question', name: 'كم مرة يجب أن نراجع مكتبة التعليمات ونقلصها؟', acceptedAnswer: { '@type': 'Answer', text: 'شهريًا كحد أدنى. ابحث عن التعليمات التي لا أحد يستخدمها، والتعليمات التي يواصل الناس تعديلها بشكل مخصص، وفرص الدمج. ضَعْ علامة "متقادمة" على التعليمات غير المستخدمة؛ أزلها من العروض الافتراضية بعد 3 أشهر من عدم النشاط.' } },
          { '@type': 'Question', name: 'كيف تتعامل مع التعليمات التي تجدي في نموذج ولا تجدي في آخر؟', acceptedAnswer: { '@type': 'Answer', text: 'ضَعْ علامة على كل تعليمة بالنماذج المختبرة في معادن البيانات. حين تفشل تعليمة في نموذج جديد، أنشئ متغيرًا — مثلًا "ملخص الاجتماع – نموذج A" و"ملخص الاجتماع – نموذج B" — بدلًا من إجبار تعليمة على العمل في كل مكان.' } },
          { '@type': 'Question', name: 'ما الفرق بين مكتبة التعليمات ومنصة إدارة التعليمات؟', acceptedAnswer: { '@type': 'Answer', text: 'مكتبة التعليمات هي مجموعة من سجلات التعليمات المنظمة التي يصونها فريقك — يمكن أن تعيش في مستودع Git أو جدول بيانات أو أداة مخصصة. منصة إدارة التعليمات تضيف التنفيذ والتحليلات والتحكم في الإصدارات وميزات التعاون فوق مفهوم المكتبة.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'كيفية بناء مكتبة تعليمات لفريقك',
        description: 'مكتبة التعليمات هي مجموعة مركزية قابلة للبحث من التعليمات المختبرة بمعادن بيانات واضحة حتى يتمكن فريقك من إعادة استخدام ما يجدي.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'ابدأ بحالات الاستخدام الحقيقية عالية القيمة', text: 'اختَر 3 إلى 5 مهام متكررة حيث الذكاء الاصطناعي يساعد بالفعل (ملخصات الاجتماعات وردود الدعم وتعليقات مراجعة الكود ومسودات الحملات).' },
          { '@type': 'HowToStep', position: 2, name: 'التقط التعليمات التي تجدي بالفعل', text: 'خلال أسبوع إلى أسبوعين، في كل مرة تحصل فيها على نتيجة رائعة، احفظها في قسم "صندوق الوارد". ركِّز فقط على التعليمات المستخدمة أكثر من مرة بمخرجات جيدة باستمرار.' },
          { '@type': 'HowToStep', position: 3, name: 'طبِّعها في قالب قياسي', text: 'أعِد كتابة كل تعليمة جيدة بعنوان واضح وهدف وجسم تعليمة وعناصر نائبة وعلامات ومالك ونسخة.' },
          { '@type': 'HowToStep', position: 4, name: 'نظِّمها حسب المهمة وليس النموذج', text: 'جمِّع التعليمات حسب ما تساعدك على القيام به (تلخيص وتخطيط وتحليل وتوليد ومراجعة كود). تفاصيل النموذج تنتمي إلى معادن البيانات.' },
          { '@type': 'HowToStep', position: 5, name: 'أضف ملكية ومراجعة دنيا', text: 'عيِّن شخصًا مسؤولًا لكل فئة. يراجع التعليمات الجديدة أو المعدَّلة بسرعة للوضوح والملاءمة قبل وضع علامة "معتمدة".' },
          { '@type': 'HowToStep', position: 6, name: 'راجع واقلِّص بانتظام', text: 'في دورة شهرية، انظر إلى أنماط الاستخدام والتعليمات نادرة الاستخدام والأماكن التي يواصل الناس تعديل نفس التعليمة بشكل مخصص.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'مكتبة التعليمات هي مستودع منظم بمعادن بيانات، وليس مجرد قائمة تعليمات مثيرة للاهتمام تجدها على الإنترنت.',
            'كل إدخال يحتاج عنوانًا وجسم تعليمة ومدخلات وتنسيق مخرجات وعلامات ومالك ونسخة — حتى يتمكن أي شخص في فريقك من استخدامه بشكل موثوق.',
            'ابنِ من الأسفل إلى الأعلى: أولًا اجمع تعليمات حقيقية من العمل اليومي، ثم طبِّعها في قالب مشترك.',
            'نظِّم حسب المهمة أو الوظيفة (مثل تلخيص ومراجعة كود وتخطيط)، لا حسب النموذج؛ تفاصيل النموذج تذهب في معادن البيانات.',
            'الحوكمة الخفيفة تحافظ على جودة عالية: ضَعْ علامة على التعليمات كمسودة → معتمدة → متقادمة؛ لا تحذف التعليمات التي تجدي بدون وضع علامة متقادمة أولًا.',
            'أصدِر نسخًا صراحةً (v1.0 وv1.1) بملاحظات تغيير من سطر واحد؛ احتفظ بالإصدارات السابقة في متناول اليد للتراجع.',
            'دورة المراجعة الشهرية: اسحب التعليمات قليلة الاستخدام وروِّج المحسَّنة مع تطور النماذج الافتراضية.',
          ],
        },
        whatIsLibrary: {
          id: 'what-is-a-prompt-library',
          title: 'ما هي مكتبة التعليمات (وما ليست كذلك)؟',
          content: [
            '**مكتبة التعليمات هي مستودع منظم للتعليمات، كل منها بغرض محدد ومدخلات ومخرجات متوقعة؛ ليست مجرد قائمة طويلة من التعليمات المثيرة المنسوخة من الإنترنت.**',
            'يجب أن تُقرأ كل إدخال أشبه بأداة صغيرة من قطعة نصية. فكِّر فيه كبطاقة وصفة: يختبر شخص قالب التعليمة مع 3 إلى 5 مدخلات حقيقية، يوثِّق ما يجدي ويُنشره للفريق. سجل التعليمة المفيد يتضمن عادةً:',
          ],
          items: [
            'عنوان واضح ("تلخيص مقابلات أصحاب المصلحة في المخاطر والإجراءات").',
            'حالة استخدام من سطر واحد (ما المشكلة التي يحلها).',
            'الجسم الكامل للتعليمة، بما يشمل عناصر نائبة للمدخلات.',
            'المدخلات المطلوبة (مثل نص محادثة وقصة مستخدم وفرق Git).',
            'النموذج الموصى به / المعاملات إن كان ذا صلة.',
            'تنسيق المخرجات المتوقع (بريد إلكتروني أو JSON أو نقاط أو جدول).',
            'علامات (مثل #بحث و#تسويق و#دعم و#مراجعة-كود).',
            'مالك ونسخة بسيطة ("v1.2 – محدَّثة للنموذج الجديد").',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'مكتبة التعليمات تُخزِّن التعليمات المختبرة كأصول منظمة قابلة لإعادة الاستخدام بمعادن بيانات كافية حتى يتمكن أي عضو في الفريق من إعادة إنتاج النتائج بدون المؤلف الأصلي.' },
          ],
        },
        libraryAsset: {
          content: [
            'هذا يحوِّل كل تعليمة إلى أصل قابل لإعادة الاستخدام يمكن لشخص آخر أخذه واستخدامه بشرح دنيا.',
          ],
        },
        whyBuildOne: {
          id: 'why-build-a-prompt-library',
          title: 'لماذا يجب على فريقك بناء مكتبة تعليمات؟',
          content: [
            '**مكتبة التعليمات توفِّر الوقت وتُقلِّل التباين بين الأشخاص وتمنحك مكانًا آمنًا لتحسين التعليمات بدلًا من فقدانها في سجلات المحادثة الخاصة.**',
            'حين يكتشف زميل النهج الصحيح لسلسلة التفكير لمهمة ما، هذه المعرفة تختفي بدون مكتبة. معها، تتراكم. الفوائد النموذجية:',
          ],
          items: [
            'السرعة: يبدأ الناس من قالب مختبر، لا من صندوق فارغ.',
            'الاتساق: المهام المتشابهة (الملخصات والإحاطات ومراجعات الكود) تتبع أنماطًا ونبرة وهيكلًا متسقة.',
            'الجودة: التعليمات تتحسن مع الوقت مع تسجيل ما يجدي وسحب ما لا يجدي.',
            'الإعداد: يمكن للزملاء الجدد استكشاف الأمثلة والإنتاجية بسرعة بدلًا من التخمين في كيفية "التحدث مع الذكاء الاصطناعي".',
            'الحوكمة: المجالات الحساسة (قانوني وموارد بشرية ومالية وامتثال) تستخدم تعليمات مراجَعة بدلًا من تعليمات مخصصة.',
          ],
        },
        sharedSystem: {
          content: [
            'بدلًا من الاحتفاظ لكل شخص بمخزن تعليمات خاص في الملاحظات، تنتهي بنظام مشترك يُمثِّل كيف تريد مؤسستك فعليًا استخدام الذكاء الاصطناعي.',
          ],
        },
        whatToStore: {
          id: 'what-to-store',
          title: 'ما الذي يجب تخزينه لكل تعليمة؟',
          content: [
            '**يجب أن تلتقط كل تعليمة سياقًا كافيًا حتى يتمكن شخص آخر من إعادة إنتاج نتائجك بشكل موثوق، حتى بعد أشهر.** الفرق التي تُوثِّق التعليمات بهذه الحقول الثمانية تُبلِّغ عن إعداد أسرع بـ 40 إلى 60٪ حين يلتحق زملاء جدد.',
            'مخطط عملي:',
          ],
        },
        schemaBreakdown: {
          items: [
            'العنوان: قصير موجَّه للمهمة (مثل "ملاحظات الاجتماع – قائمة الإجراءات"، "مُصنِّف فرز تقارير الأخطاء").',
            'الهدف / الوصف: جملة أو جملتان تشرحان ما الذي يفعله.',
            'جسم التعليمة: النص الكامل للتعليمة، مع عناصر نائبة مثل <الصق_الملاحظات_هنا> وأي إرشادات أسلوب النظام.',
            'المدخلات: ما يجب على المستخدم توفيره (مثل "نص Zoom"، "قائمة تذاكر Jira").',
            'دليل النموذج: النماذج والإعدادات الموصى بها إن كان ذلك مهمًا.',
            'تنسيق المخرجات: مثلًا "قائمة نقاط Markdown"، "جدول عمودين" أو "مصفوفة JSON صالحة".',
            'العلامات / الفئة: مثلًا #تلخيص، #تخطيط، #تحليل، بالإضافة إلى علامات وظيفية.',
            'المالك / النسخة / آخر تحديث: من يصونه وسلسلة النسخة وتاريخ آخر تغيير.',
          ],
          promptExamples: [
            {
              badLabel: 'تعليمة بدون هيكل (غير جاهزة للمكتبة)',
              bad: 'لخِّص هذا الاجتماع',
              goodLabel: 'تعليمة منظمة مع عناصر نائبة (جاهزة للمكتبة)',
              good: `أنت مدير مشروع كبير. لخِّص نص الاجتماع التالي في:\n1. القرارات الرئيسية (3 إلى 5 نقاط)\n2. عناصر الإجراء — كل منها باسم المالك والموعد النهائي\n3. الأسئلة المفتوحة التي تحتاج متابعة\n\nتنسيق المخرجات: Markdown. احتفظ بكل قسم تحت 100 كلمة.\n\nالنص:\n<الصق_النص_هنا>`,
            },
          ],
        },
        optionalFields: {
          content: [
            'اختياري لكن ذو قيمة:',
          ],
          items: [
            'مثال مدخل ومخرج: مدخل واقعي ومخرج جيد حتى يتمكن المستخدمون من الحكم على الملاءمة بنظرة خاطفة.',
          ],
        },
        howToStart: {
          id: 'how-to-build',
          title: 'كيف تبني مكتبة تعليمات خطوة بخطوة؟',
          content: [
            '**أسرع طريقة لبناء مكتبة تعليمات قابلة للاستخدام هي جمع التعليمات الحقيقية من العمل اليومي وتطبيعها في قالب مشترك ثم إضافة حوكمة خفيفة.**',
            'نهج عملي:',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'فكِّر فيه كصندوق وصفات: يختبر شخص وصفة ويكتبها بالمكونات والخطوات الدقيقة، والآن يمكن لكامل الفريق طهي نفس الطبق — حتى لو كان الطاهي الأصلي في إجازة.' },
          ],
          numberedItems: [
            'ابدأ بحالات الاستخدام الحقيقية عالية القيمة: اختَر 3 إلى 5 مهام متكررة حيث الذكاء الاصطناعي يساعد بالفعل (ملخصات الاجتماعات وردود الدعم وتعليقات مراجعة الكود ومسودات الحملات).',
            'التقط التعليمات التي تجدي بالفعل: خلال أسبوع إلى أسبوعين، في كل مرة تحصل فيها على نتيجة رائعة، احفظها في قسم "صندوق الوارد". ركِّز فقط على التعليمات المستخدمة أكثر من مرة بمخرجات جيدة باستمرار.',
            'طبِّعها في قالب قياسي: أعِد كتابة كل تعليمة جيدة بعنوان واضح وهدف وجسم تعليمة وعناصر نائبة وعلامات ومالك ونسخة.',
            'نظِّم حسب المهمة وليس النموذج: جمِّع التعليمات حسب ما تساعدك على القيام به (تلخيص وتخطيط وتحليل وتوليد ومراجعة كود). تفاصيل النموذج تنتمي إلى معادن البيانات.',
            'أضف ملكية ومراجعة دنيا: عيِّن شخصًا مسؤولًا لكل فئة. يراجع التعليمات الجديدة أو المعدَّلة بسرعة للوضوح والملاءمة قبل وضع علامة "معتمدة".',
            'راجع واقلِّص بانتظام: في دورة شهرية، انظر إلى أنماط الاستخدام والتعليمات نادرة الاستخدام والأماكن التي يواصل الناس تعديل نفس التعليمة بشكل مخصص.',
          ],
        },
        timelyRefinement: {
          content: [
            'بمرور الوقت، يحوِّل هذا التعليمات المتفرقة إلى مجموعة أدوات مُنقَّحة تعكس كيف يعمل فريقك فعليًا.',
          ],
        },
        whereToStore: {
          id: 'where-to-store',
          title: 'أين يجب تخزين مكتبة التعليمات؟',
          content: [
            '**يمكنك تطبيق مكتبة تعليمات على أي شيء من مستودع Git إلى قائمة مشتركة؛ المهم هو الحقول القابلة للبحث والتحرير السهل وبعض تاريخ التغييرات.**',
          ],
        },
        storageOptions: {
          content: ['الخيارات الشائعة والفعَّالة:'],
          items: [
            'ملفات Markdown في مستودع: ملف واحد لكل فئة ومعادن بيانات في كتل frontmatter. الفوائد: التحكم في الإصدارات ومراجعة الكود والفروقات والفروع.',
            'جداول أو قوائم (Notion وAirtable وSheets): أعمدة للعنوان والتعليمة والفئة والعلامات والنموذج والمالك والحالة. سهل الفلترة والبحث للمستخدمين غير التقنيين.',
            'أدوات إدارة التعليمات المخصصة: غالبًا تضيف تنفيذًا بنقرة واحدة وتحليلات لكل تعليمة والتحكم في الوصول. مفيدة لكثير من المستخدمين غير التقنيين والحوكمة الصارمة.',
          ],
        },
        structureApproach: {
          content: [
            'للهيكل، يعمل هجين بسيط بشكل جيد:',
          ],
          items: [
            'فئات حسب الوظيفة: التسويق والمبيعات والدعم والمنتج والهندسة والعمليات.',
            'فئات فرعية أو علامات حسب المهمة: تلخيص وتخطيط وإعادة كتابة وتحليل وتصنيف وتوليد-كود ومراجعة-كود.',
            'الحالة: مسودة ومعتمدة ومتقادمة.',
          ],
        },
        structureFlexibility: {
          content: [
            'الفئات تمنح الهيكل؛ العلامات تحافظ عليه مرنًا مع تطور استخدامك.',
          ],
        },
        storageTable: {
          id: 'storage-options-comparison',
          title: 'كيف تُقارَن خيارات التخزين؟',
          columns: ['الأداة/الشكل', 'الأفضل لـ', 'التحكم في الإصدارات', 'البحث', 'الحوكمة'],
          rows: [
            { 'الأداة/الشكل': 'ملفات Markdown في Git', 'الأفضل لـ': 'فرق الهندسة وسير عمل مراجعة الكود', 'التحكم في الإصدارات': '✓ أصلي', 'البحث': '✓ أدوات CLI', 'الحوكمة': '✓ مراجعات PR' },
            { 'الأداة/الشكل': 'Notion / Airtable / Sheets', 'الأفضل لـ': 'الفرق المختلطة والمستخدمون غير التقنيون', 'التحكم في الإصدارات': '✓ تاريخ محدود', 'البحث': '✓ فلاتر النص الكامل', 'الحوكمة': '✓ أذونات وأدوار' },
            { 'الأداة/الشكل': 'أدوات مخصصة (مثل PromptQuorum)', 'الأفضل لـ': 'الفرق التي تحتاج تنفيذًا بنقرة واحدة ومقاييس', 'التحكم في الإصدارات': '✓ تاريخ كامل', 'البحث': '✓ نص كامل وعلامات ومعادن بيانات', 'الحوكمة': '✓ سير عمل موافقة مدمجة' },
          ],
          tableFormat: true,
        },
        maturityLevels: {
          id: 'maturity-levels',
          title: 'مستويات نضج مكتبة التعليمات',
          content: [
            'مع نمو مؤسستك، تنضج مكتبة التعليمات عبر مراحل متوقعة. معظم الفرق تبدأ من المستوى 0 ويجب أن تستهدف المستوى 2 خلال 4 إلى 6 أسابيع.',
          ],
          columns: ['مستوى النضج', 'الإدخالات', 'الحوكمة', 'الأدوات', 'حجم الفريق'],
          rows: [
            { 'مستوى النضج': 'المستوى 0: مخصص', 'الإدخالات': '0', 'الحوكمة': 'لا شيء — التعليمات في المحادثات الخاصة', 'الأدوات': 'تاريخ المحادثة', 'حجم الفريق': 'شخص واحد' },
            { 'مستوى النضج': 'المستوى 1: مجموعة', 'الإدخالات': '5 إلى 10', 'الحوكمة': 'مستند مشترك بلا مراجعة', 'الأدوات': 'Google Doc / صفحة Notion', 'حجم الفريق': '2 إلى 5 أشخاص' },
            { 'مستوى النضج': 'المستوى 2: منظم', 'الإدخالات': '10 إلى 30', 'الحوكمة': 'حالة مسودة/معتمدة ومالك مُعيَّن', 'الأدوات': 'Notion/Airtable بحقول', 'حجم الفريق': '5 إلى 15 شخصًا' },
            { 'مستوى النضج': 'المستوى 3: مُدار', 'الإدخالات': '30 إلى 100', 'الحوكمة': 'التحكم في الإصدارات ومراجعات شهرية وحالات اختبار', 'الأدوات': 'مستودع Git أو أداة مخصصة', 'حجم الفريق': '15 إلى 50 شخصًا' },
            { 'مستوى النضج': 'المستوى 4: منتج', 'الإدخالات': '100+', 'الحوكمة': 'سير عمل موافقة وتحليلات وتراجع', 'الأدوات': 'منصة مخصصة (PromptQuorum وPromptHub)', 'حجم الفريق': '50+ شخص' },
          ],
          tableFormat: true,
        },
        promptQuorumFit: {
          id: 'prompt-quorum-fit',
          title: 'كيف يُحسِّن PromptQuorum مكتبة تعليماتك',
          content: [
            'PromptQuorum يجمع تخزين التعليمات مع التنفيذ متعدد النماذج: احفظ قالب تعليمة وأرسِل إلى نماذج متعددة في آنٍ واحد وسجِّل أي نموذج أنتج أفضل نتيجة لذلك القالب. بمرور الوقت، يبني هذا مكتبة قائمة على أدلة حيث كل تعليمة تتضمن ليس فقط التعليمة بل البيانات التجريبية حول أي نموذج يتعامل معها بشكل أفضل.',
          ],
        },
        versioning: {
          id: 'versioning',
          title: 'كيف تُصدِر التعليمات نسخًا وتحافظ على الجودة؟',
          content: [
            '**بدون إصدارات واختبار أساسي، تتحوَّل مكتبة التعليمات إلى درج فوضوي؛ مع حوكمة خفيفة، تتحوَّل إلى منتج داخلي موثوق.**',
            'النماذج الرئيسية للذكاء الاصطناعي تُحدِّث سلوك اتباع التعليمات بشكل دوري، مما يعني أن التعليمات المكتوبة للإصدارات القديمة قد تحتاج تعديلًا للإصدارات الجديدة. عادات عملية:',
          ],
          items: [
            'أصدِر التعليمات نسخًا صراحةً: استخدم مخططًا بسيطًا مثل v1.0 إلى v1.1. أضف ملاحظة تغيير من سطر واحد (مثل "v1.1 – أضيف تنسيق مخرجات JSON؛ قُلِّلت الهلوسة للتواريخ").',
            'أرفق حالات اختبار بالتعليمات المهمة: للتعليمات عالية التأثير، احتفظ بـ 3 إلى 5 مدخلات اختبار وأنماط مخرجات متوقعة. بعد التحرير أو تغيير النماذج، شغِّل تلك الاختبارات.',
            'تتبَّع الاستخدام والتغذية الراجعة: حتى نظام "نجوم" أو تعليق بسيط يساعدك على رؤية التعليمات التي تجدي وأيها يحتاج اهتمامًا.',
            'خطِّط للتراجع: احتفظ دائمًا بالإصدار السابق في متناول اليد حتى تتمكن من التراجع إذا لزم.',
            'اسحب التعليمات بقصد: حين تكون تعليمة ما قديمة، ضَعْ عليها علامة متقادمة واشرح لماذا، حتى يعرف الناس عدم استخدامها.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'ما هي الأخطاء الشائعة في بناء مكتبة التعليمات؟',
          mistakes: [
            { mistake: 'تخزين التعليمات في ملاحظات شخصية أو سجلات محادثة خاصة.', problem: 'تبقى المعرفة في صوامع؛ لا يمكن للآخرين إيجاد أو إعادة استخدام ما اكتشفته. الزملاء الجدد يُعيدون بناء نفس التعليمات من الصفر.', fix: 'استخدم نظامًا مشتركًا قابلًا للبحث (مستودع Git وAirtable وأداة مخصصة). عامِله كأصل للفريق، لا ملاحظات شخصية.' },
            { mistake: 'كتابة التعليمات بدون عناصر نائبة للمدخلات (مثل ترميز أسماء أو أرقام محددة).', problem: 'التعليمات غير قابلة لإعادة الاستخدام؛ يجب تحرير كامل التعليمة في كل مرة بدلًا من تبادل المدخلات.', fix: 'ضَعْ دائمًا علامة على الأجزاء الديناميكية كـ `<اسم_العنصر_النائب>` أو `[متغير]`. اجعل التعليمة قالبًا، لا تعليمة لمرة واحدة.' },
            { mistake: 'المبالغة في هندسة الحوكمة عند الإطلاق (سير عمل موافقة مفصَّلة ولجان توجيهية).', problem: 'الحمل الزائد يقتل التبني؛ يعود الناس إلى التعليمات الشخصية بدلًا من المساهمة في المكتبة.', fix: 'ابدأ بسيطًا: مسودة ومعتمدة فقط. أضف العملية فقط حين يزيد فريقك عن 5 أشخاص أو حين تحتاجه المجالات الحساسة (قانوني وموارد بشرية).' },
            { mistake: 'إغفال تاريخ الإصدارات — بلا ملاحظات تغيير ولا إصدارات سابقة محفوظة.', problem: 'حين يكسر نموذج جديد تعليمة، لا يمكنك التراجع بسهولة أو فهم ما تغيَّر.', fix: 'أضف ملاحظات تغيير من سطر واحد لكل إصدار (مثل "v1.2 – محدَّثة للإصدار الجديد من النموذج، حُذِف تجاوز درجة الحرارة"). احتفظ بالإصدارات السابقة في متناول اليد.' },
            { mistake: 'عدم سحب التعليمات المتقادمة أبدًا — تنمو المكتبة بوزن ميت.', problem: 'يصعب إيجاد التعليمات المفيدة؛ غير واضح أي الإصدارات مصونة فعليًا.', fix: 'ضَعْ علامة متقادمة على التعليمات القديمة مع سبب. أزلها من العروض الافتراضية؛ أرشفها للتدقيق.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'هل هناك اعتبارات إقليمية أو امتثال؟',
          content: [
            '**متطلبات إقامة البيانات والامتثال تؤثر على أين وكيف تُخزِّن التعليمات، خاصةً حين تتضمن أجسام التعليمات بيانات عملاء حساسة كعناصر نائبة.**',
            'القيود الرئيسية حسب المنطقة:',
          ],
          items: [
            'الاتحاد الأوروبي / GDPR: إذا كانت قوالب التعليمات تتضمن أو تشير إلى بيانات شخصية، يجب أن تمتثل أداة التخزين لمتطلبات GDPR. Notion وAirtable ومعظم منصات SaaS تقدم إقامة بيانات في الاتحاد الأوروبي؛ تحقق قبل التمكين لسير عمل حساسة.',
            'SOC 2 الأمريكية: لعملاء المؤسسات الذين يتطلبون امتثال الموردين، اختَر أدوات بشهادة SOC 2 Type II (Notion وAirtable وPromptQuorum مؤهَّلة).',
            'الصناعات المنظَّمة (صحة ومالية وقانونية): system prompts التي تتضمن معرِّفات المرضى أو السجلات المالية يجب أن تبقى في بنيتك التحتية الخاصة. استخدم التخزين القائم على Git أو خيارًا ذاتي الاستضافة.',
            'نصيحة: افصل التعليمات الحساسة (تلك التي تقبل PII كمدخلات) عن التعليمات للأغراض العامة. طبِّق ضوابط وصول أكثر صرامة واحتفاظًا أقصر على المجموعة الحساسة.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'ما هي مكتبة التعليمات؟', a: 'مكتبة التعليمات هي مجموعة منظمة من التعليمات المختبرة مع معادن بيانات (مدخلات ودليل نموذج ومخرجات متوقعة ونسخة ومالك). على عكس قائمة التعليمات المنسوخة من الإنترنت، مكتبة التعليمات هي منتج داخلي يصونه فريقك ويعيد استخدامه للاتساق والسرعة.' },
            { q: 'متى يجب أن يستخدم الفريق مكتبة تعليمات بدلًا من الملاحظات الشخصية؟', a: 'بمجرد أن يكون لديك 3+ أعضاء في الفريق و2+ تعليمات تستخدمها أكثر من مرة. الملاحظات الشخصية تصلح لشخص واحد؛ المكتبات تصلح للفرق.' },
            { q: 'كم يستغرق بناء مكتبة تعليمات قابلة للاستخدام من الصفر؟', a: 'ابدأ صغيرًا: أسبوع إلى أسبوعين لجمع 5 إلى 10 تعليمات حقيقية من العمل اليومي وتطبيعها في قالب ورفعها إلى نظام مشترك.' },
            { q: 'كيف أحصل على مساهمة فريقي في مكتبة تعليمات مشتركة؟', a: 'اجعل المساهمة سهلة وبلا احتكاك. ابدأ بـ 3 إلى 5 تعليمات بطلة تنشئها أنت. اجعل الموافقة خفيفة. أظهر المكاسب. لا تجعل المساهمة إلزامية أبدًا.' },
            { q: 'هل مكتبة التعليمات هي نفس system prompt؟', a: 'لا. system prompt هو تعليمة مستمرة واحدة لمحادثة ما. مكتبة التعليمات هي مجموعة من التعليمات مشتركة في فريقك لحالات استخدام كثيرة.' },
            { q: 'كم مرة يجب أن نراجع مكتبة التعليمات ونقلصها؟', a: 'شهريًا كحد أدنى. ابحث عن التعليمات التي لا أحد يستخدمها وفرص الدمج. ضَعْ علامة "متقادمة" على التعليمات غير المستخدمة.' },
            { q: 'كيف تتعامل مع التعليمات التي تجدي في نموذج ولا تجدي في آخر؟', a: 'ضَعْ علامة على كل تعليمة بالنماذج المختبرة في معادن البيانات. حين تفشل تعليمة في نموذج جديد، أنشئ متغيرًا بدلًا من إجبار تعليمة على العمل في كل مكان.' },
            { q: 'ما الفرق بين مكتبة التعليمات ومنصة إدارة التعليمات؟', a: 'مكتبة التعليمات هي مجموعة من سجلات التعليمات المنظمة. منصة إدارة التعليمات تضيف التنفيذ والتحليلات والتحكم في الإصدارات فوق مفهوم المكتبة. ابدأ بمكتبة بسيطة.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            { title: 'أساسيات هندسة التعليمات', url: '/ar/prompt-engineering/fundamentals' },
            { title: 'Few-Shot Prompting: حسِّن تعليماتك بأمثلة', url: '/ar/prompt-engineering/few-shot-prompting' },
            { title: 'صياغة سلسلة التفكير: استدلال خطوة بخطوة', url: '/ar/prompt-engineering/chain-of-thought' },
            { title: 'PromptQuorum: إدارة التعليمات مُبسَّطة', url: '/ar/features' },
            { title: 'System Prompt مقابل User Prompt: ما الفرق؟', url: '/ar/prompt-engineering/system-prompt-vs-user-prompt' },
            { title: 'اختبار التعليمات وتحسينها', url: '/ar/prompt-engineering/prompt-testing' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر والقراءات الإضافية',
          items: [
            { title: 'دليل هندسة التعليمات من OpenAI', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'Anthropic: نظرة عامة على هندسة التعليمات', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            { title: 'Lilian Weng: هندسة التعليمات (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
            { title: 'Google DeepMind: استراتيجيات التعليمات', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
          ],
        },
      },
    },
    pt: {
      freshness_tier: 'monthly',
      theme: 'Fundamentals',
      title: 'Como construir uma biblioteca de prompts: modelo de 8 campos, governança e guia de adoção para equipes',
      intro: 'Uma biblioteca de prompts é uma coleção de instruções testadas para toda a equipe. Bem construída, cada entrada funciona como uma pequena ferramenta: pegue-a, adapte as entradas e obtenha resultados consistentes.',
      publishDate: '2026-03-24',
      readTime: '10 min de leitura',
      seoTitle: 'Biblioteca de prompts: modelos de IA reutilizáveis para equipes',
      metaDescription: 'Crie uma biblioteca de prompts compartilhada com metadados, governança Rascunho→Aprovado e revisão mensal. Inclui modelo, exemplo e guia de adoção para equipes.',
      ogDescription: 'Pare de perder bons prompts em chats privados. Construa uma biblioteca de prompts para equipes com modelos estruturados, controle de versão e governança leve — para que todos possam reutilizar o que funciona.',
      twitterDescription: 'Biblioteca de prompts = caixa de receitas para IA. Modelo de 8 campos, guia passo a passo, comparação de armazenamento e governança que não mata a adoção.',
      educationalLevel: 'Beginner',
      audience: 'Líderes de equipe e profissionais que adotam ferramentas de IA',
      leadAnswerBlock: '**Uma biblioteca de prompts é uma coleção compartilhada de prompts testados com metadados estruturados — título, entradas, formato de saída esperado, responsável e versão — para que sua equipe possa reutilizar instruções que funcionam em vez de começar do zero a cada vez.**',
      quickFacts: [
        '8 campos de metadados recomendados por entrada de prompt (título, objetivo, corpo, entradas, orientação de modelo, formato de saída, tags, responsável/versão)',
        'Comece com 5–10 prompts reais do trabalho diário — 1 a 2 semanas de coleta',
        'Cadência de revisão mensal para retirar prompts sem uso; equipes retiram tipicamente 20–30%',
        'Equipes com 10+ prompts aprovados relatam configuração de tarefas 40–60% mais rápida',
        'Rascunho → Aprovado → Obsoleto: ciclo de vida de 3 estados mantém a qualidade alta',
      ],
      toc: [
        { label: 'O que é uma biblioteca de prompts?', anchor: '#what-is-a-prompt-library' },
        { label: 'Por que construir uma biblioteca de prompts?', anchor: '#why-build-a-prompt-library' },
        { label: 'O que armazenar para cada prompt', anchor: '#what-to-store' },
        { label: 'Como construir passo a passo', anchor: '#how-to-build' },
        { label: 'Onde armazenar', anchor: '#where-to-store' },
        { label: 'Como comparar as opções de armazenamento?', anchor: '#storage-options-comparison' },
        { label: 'Níveis de maturidade', anchor: '#maturity-levels' },
        { label: 'Versões e qualidade', anchor: '#versioning' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Considerações regionais', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Como construir uma biblioteca de prompts: modelo de 8 campos, governança e guia de adoção para equipes',
        description: 'O que é uma biblioteca de prompts, por que sua equipe deveria construir uma, como estruturá-la e mantê-la, e melhores práticas para versões e governança.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        keywords: ['biblioteca de prompts', 'gestão de prompts', 'prompt engineering', 'produtividade da equipe', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Produtividade da equipe' },
          { '@type': 'Thing', name: 'Gestão do conhecimento' },
        ],
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'Líderes de equipe e profissionais que adotam ferramentas de IA' },
        url: 'https://www.promptquorum.com/pt/prompt-engineering/build-a-prompt-library',
        inLanguage: 'pt-BR',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'O que é uma biblioteca de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Uma biblioteca de prompts é uma coleção estruturada de prompts testados com metadados (entradas, orientação de modelo, saída esperada, versão, responsável). Ao contrário de uma lista de prompts copiados da internet, uma biblioteca de prompts é um produto interno que sua equipe mantém e reutiliza para consistência e velocidade.' } },
          { '@type': 'Question', name: 'Quando uma equipe deve usar uma biblioteca de prompts em vez de anotações pessoais?', acceptedAnswer: { '@type': 'Answer', text: 'Assim que você tiver 3+ membros na equipe e 2+ prompts que usa mais de uma vez. Anotações pessoais funcionam para uma pessoa; bibliotecas funcionam para equipes. Uma biblioteca reduz o tempo de configuração de tarefas, integra novos colegas mais rapidamente e evita trabalho duplicado.' } },
          { '@type': 'Question', name: 'Quanto tempo leva para construir uma biblioteca de prompts utilizável do zero?', acceptedAnswer: { '@type': 'Answer', text: 'Comece pequeno: 1–2 semanas para coletar 5–10 prompts reais do trabalho diário, normalizá-los em um modelo e carregá-los em um sistema compartilhado. A governança e as ferramentas melhoram ao longo do tempo; comece apenas com os rótulos de status Rascunho e Aprovado.' } },
          { '@type': 'Question', name: 'Como faço para que minha equipe contribua para uma biblioteca de prompts compartilhada?', acceptedAnswer: { '@type': 'Answer', text: 'Torne a contribuição fácil e sem atrito. Comece com 3–5 prompts campeões que você mesmo cria para que as pessoas vejam exemplos. Mantenha a aprovação leve (uma pessoa, 5 minutos). Mostre vitórias ("Esta biblioteca nos economizou 10 horas este mês"). Nunca torne a contribuição obrigatória; torne-a o caminho de menor resistência.' } },
          { '@type': 'Question', name: 'Uma biblioteca de prompts é o mesmo que um system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Um system prompt é uma instrução persistente única que define o comportamento do LLM para uma conversa. Uma biblioteca de prompts é uma coleção de prompts (cada um com contexto e metadados) compartilhada em sua equipe para muitos casos de uso. Um system prompt pode estar na sua biblioteca como uma entrada.' } },
          { '@type': 'Question', name: 'Com que frequência devemos revisar e podar uma biblioteca de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Mensalmente no mínimo. Procure prompts que ninguém usa, prompts que as pessoas continuam editando ad hoc e oportunidades de consolidar. Marque prompts não utilizados como Obsoletos; remova-os das visualizações padrão após 3 meses de inatividade.' } },
          { '@type': 'Question', name: 'Como você lida com prompts que funcionam em um modelo mas não em outro?', acceptedAnswer: { '@type': 'Answer', text: 'Marque cada prompt com os modelos testados nos metadados. Quando um prompt falha em um novo modelo, crie uma variante — por exemplo "Resumo de reunião – Modelo A" e "Resumo de reunião – Modelo B" — em vez de forçar um prompt a funcionar em todo lugar.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre uma biblioteca de prompts e uma plataforma de gestão de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Uma biblioteca de prompts é uma coleção de registros de prompts estruturados que sua equipe mantém — pode estar em um repositório Git, uma planilha ou uma ferramenta dedicada. Uma plataforma de gestão de prompts adiciona execução, análises, controle de versão e recursos de colaboração sobre o conceito de biblioteca. Comece com uma biblioteca simples e atualize para uma plataforma quando o volume ou as necessidades de governança justificarem.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Como construir uma biblioteca de prompts para sua equipe',
        description: 'Uma biblioteca de prompts é uma coleção centralizada e pesquisável de prompts testados com metadados claros para que sua equipe possa reutilizar o que funciona.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Comece com casos de uso reais e de alto valor', text: 'Escolha 3–5 tarefas repetitivas onde a IA já ajuda (resumos de reuniões, respostas de suporte, comentários de revisão de código, rascunhos de campanha).' },
          { '@type': 'HowToStep', position: 2, name: 'Capture os prompts que já funcionam', text: 'Durante uma a duas semanas, sempre que obtiver um ótimo resultado, salve-o em uma seção de "caixa de entrada". Concentre-se apenas em prompts usados mais de uma vez com saída consistentemente boa.' },
          { '@type': 'HowToStep', position: 3, name: 'Normalize em um modelo padrão', text: 'Reescreva cada bom prompt com título claro, objetivo, corpo do prompt, marcadores de posição, tags, responsável e versão.' },
          { '@type': 'HowToStep', position: 4, name: 'Organize por tarefa, não por modelo', text: 'Agrupe os prompts pelo que eles ajudam você a fazer (resumir, planejar, analisar, gerar, revisar código). Os detalhes do modelo pertencem aos metadados.' },
          { '@type': 'HowToStep', position: 5, name: 'Adicione responsabilidade e revisão mínima', text: 'Atribua uma pessoa responsável por cada categoria. Ela revisa prompts novos ou alterados rapidamente quanto à clareza e adequação antes de marcá-los como "Aprovado".' },
          { '@type': 'HowToStep', position: 6, name: 'Revise e pode regularmente', text: 'Em uma cadência mensal, observe os padrões de uso, prompts raramente usados e lugares onde as pessoas continuam editando o mesmo prompt ad hoc.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'Uma biblioteca de prompts é um repositório estruturado com metadados, não apenas uma lista de prompts interessantes que você encontra online.',
            'Cada entrada precisa de título, corpo do prompt, entradas, formato de saída, tags, responsável e versão — para que qualquer pessoa na sua equipe possa usá-la de forma confiável.',
            'Construa de baixo para cima: primeiro colete prompts reais do trabalho diário, depois normalize-os em um modelo comum.',
            'Organize por tarefa ou função (ex: resumir, revisão de código, planejar), não por modelo; os detalhes do modelo vão nos metadados.',
            'A governança leve mantém a qualidade alta: marque prompts como Rascunho → Aprovado → Obsoleto; nunca remova prompts que funcionam sem marcá-los como Obsoletos primeiro.',
            'Versione explicitamente (v1.0, v1.1) com notas de alteração de uma linha; mantenha versões anteriores acessíveis para reversão.',
            'Cadência de revisão mensal: retire prompts de baixo uso e promova os melhorados à medida que os padrões de modelo evoluem.',
          ],
        },
        whatIsLibrary: {
          id: 'what-is-a-prompt-library',
          title: 'O que é uma biblioteca de prompts (e o que não é)?',
          content: [
            '**Uma biblioteca de prompts é um repositório estruturado de prompts, cada um com um propósito definido, entradas e saída esperada; não é apenas uma longa lista de prompts interessantes copiados da internet.**',
            'Cada entrada deve ser lida mais como uma pequena ferramenta do que como um trecho de texto. Pense nisso como um cartão de receita: uma pessoa testa o modelo de prompt com 3–5 entradas reais, documenta o que funciona e publica para a equipe. Um registro de prompt útil normalmente inclui:',
          ],
          items: [
            'Um título claro ("Resumir entrevistas com partes interessadas em riscos e ações").',
            'Um caso de uso de uma linha (qual problema resolve).',
            'O corpo completo do prompt, incluindo marcadores de posição para as entradas.',
            'Entradas necessárias (ex: transcrição, história de usuário, diff de Git).',
            'Modelo recomendado / parâmetros se relevante.',
            'Formato de saída esperado (e-mail, JSON, marcadores, tabela).',
            'Tags (ex: #pesquisa, #marketing, #suporte, #revisão-de-código).',
            'Responsável e uma versão simples ("v1.2 – atualizado para novo modelo").',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Uma biblioteca de prompts armazena instruções testadas como ativos estruturados e reutilizáveis com metadados suficientes para que qualquer membro da equipe possa reproduzir resultados sem o autor original.' },
          ],
        },
        libraryAsset: {
          content: [
            'Isso transforma cada prompt em um ativo reutilizável que outra pessoa pode pegar e usar com explicação mínima.',
          ],
        },
        whyBuildOne: {
          id: 'why-build-a-prompt-library',
          title: 'Por que sua equipe deveria construir uma biblioteca de prompts?',
          content: [
            '**Uma biblioteca de prompts economiza tempo, reduz a variabilidade entre pessoas e oferece um lugar seguro para refinar prompts em vez de perdê-los em registros de chat privados.**',
            'Quando um colega descobre a abordagem correta de chain-of-thought para uma tarefa, esse conhecimento desaparece sem uma biblioteca. Com uma, ele se acumula. Benefícios típicos:',
          ],
          items: [
            'Velocidade: as pessoas começam a partir de um modelo testado, não de uma caixa em branco.',
            'Consistência: tarefas similares (resumos, briefings, revisões de código) seguem padrões, tom e estrutura consistentes.',
            'Qualidade: os prompts melhoram com o tempo à medida que você registra o que funciona e retira o que não funciona.',
            'Integração: novos colegas podem navegar pelos exemplos e ser produtivos rapidamente em vez de adivinhar como "falar com a IA".',
            'Governança: áreas sensíveis (jurídico, RH, finanças, conformidade) usam prompts revisados em vez de instruções ad hoc.',
          ],
        },
        sharedSystem: {
          content: [
            'Em vez de cada pessoa manter um estoque privado de prompts em anotações, você acaba com um sistema compartilhado que representa como sua organização realmente quer usar a IA.',
          ],
        },
        whatToStore: {
          id: 'what-to-store',
          title: 'O que você deve armazenar para cada prompt?',
          content: [
            '**Cada prompt deve capturar contexto suficiente para que outra pessoa possa reproduzir seus resultados de forma confiável, mesmo meses depois.** As equipes que documentam prompts com esses 8 campos relatam uma integração 40–60% mais rápida quando novos colegas entram.',
            'Um esquema prático:',
          ],
        },
        schemaBreakdown: {
          items: [
            'Título: Curto, orientado a tarefas (ex: "Notas de reunião – lista de ações", "Classificador de triagem de relatórios de bugs").',
            'Objetivo / descrição: Uma ou duas frases explicando o que faz.',
            'Corpo do prompt: O texto completo da instrução, com marcadores de posição como <COLAR_NOTAS_AQUI> e qualquer orientação de estilo de sistema.',
            'Entradas: O que o usuário deve fornecer (ex: "Transcrição do Zoom", "Lista de tickets do Jira").',
            'Orientação de modelo: Modelos e configurações recomendados se importante.',
            'Formato de saída: Por exemplo, "Lista de marcadores em Markdown", "Tabela de 2 colunas" ou "Array JSON válido".',
            'Tags / categoria: Por exemplo, #resumo, #planejamento, #análise, mais tags funcionais.',
            'Responsável / versão / última atualização: Quem mantém, string de versão e data da última alteração.',
          ],
          promptExamples: [
            {
              badLabel: 'Prompt sem estrutura (não pronto para biblioteca)',
              bad: 'Resuma esta reunião',
              goodLabel: 'Prompt estruturado com marcadores de posição (pronto para biblioteca)',
              good: `Você é um gerente de projeto sênior. Resuma a seguinte transcrição de reunião em:\n1. Decisões principais (3–5 marcadores)\n2. Itens de ação — cada um com nome do responsável e prazo\n3. Questões abertas que precisam de acompanhamento\n\nFormato de saída: Markdown. Mantenha cada seção abaixo de 100 palavras.\n\nTranscrição:\n<COLAR_TRANSCRIÇÃO_AQUI>`,
            },
          ],
        },
        optionalFields: {
          content: [
            'Opcional mas valioso:',
          ],
          items: [
            'Exemplo de entrada e saída: Uma entrada realista e uma boa saída para que os usuários possam avaliar a adequação de uma vez.',
          ],
        },
        howToStart: {
          id: 'how-to-build',
          title: 'Como você constrói uma biblioteca de prompts passo a passo?',
          content: [
            '**A maneira mais rápida de construir uma biblioteca de prompts utilizável é coletar prompts reais do trabalho diário, normalizá-los em um modelo comum e depois adicionar governança leve.**',
            'Uma abordagem prática:',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Pense nisso como uma caixa de receitas: uma pessoa testa uma receita, escreve com ingredientes e passos exatos, e agora toda a equipe pode cozinhar o mesmo prato — mesmo que o cozinheiro original esteja de férias.' },
          ],
          numberedItems: [
            'Comece com casos de uso reais e de alto valor: Escolha 3–5 tarefas repetitivas onde a IA já ajuda (resumos de reuniões, respostas de suporte, comentários de revisão de código, rascunhos de campanha).',
            'Capture os prompts que já funcionam: Durante uma a duas semanas, sempre que obtiver um ótimo resultado, salve-o em uma seção de "caixa de entrada". Concentre-se apenas em prompts usados mais de uma vez com saída consistentemente boa.',
            'Normalize em um modelo padrão: Reescreva cada bom prompt com título claro, objetivo, corpo do prompt, marcadores de posição, tags, responsável e versão.',
            'Organize por tarefa, não por modelo: Agrupe os prompts pelo que eles ajudam você a fazer (resumir, planejar, analisar, gerar, revisar código). Os detalhes do modelo pertencem aos metadados.',
            'Adicione responsabilidade e revisão mínima: Atribua uma pessoa responsável por cada categoria. Ela revisa prompts novos ou alterados rapidamente quanto à clareza e adequação antes de marcá-los como "Aprovado".',
            'Revise e pode regularmente: Em uma cadência mensal, observe os padrões de uso, prompts raramente usados e lugares onde as pessoas continuam editando o mesmo prompt ad hoc.',
          ],
        },
        timelyRefinement: {
          content: [
            'Com o tempo, isso transforma instruções dispersas em um kit de ferramentas curado que reflete como sua equipe realmente trabalha.',
          ],
        },
        whereToStore: {
          id: 'where-to-store',
          title: 'Onde você deve armazenar uma biblioteca de prompts?',
          content: [
            '**Você pode implementar uma biblioteca de prompts em qualquer coisa, desde um repositório Git até uma lista compartilhada; o importante são os campos pesquisáveis, a edição fácil e algum histórico de alterações.**',
          ],
        },
        storageOptions: {
          content: ['Opções comuns e eficazes:'],
          items: [
            'Arquivos Markdown em um repositório: Um arquivo por categoria, metadados em blocos frontmatter. Benefícios: controle de versão, revisão de código, diffs, branches.',
            'Tabelas ou listas (Notion, Airtable, Sheets): Colunas para título, prompt, categoria, tags, modelo, responsável, status. Fácil de filtrar e pesquisar para usuários não técnicos.',
            'Ferramentas dedicadas de gestão de prompts: Muitas vezes adicionam execução com um clique, análises por prompt e controle de acesso. Úteis para muitos usuários não técnicos e governança rigorosa.',
          ],
        },
        structureApproach: {
          content: [
            'Para estrutura, um híbrido simples funciona bem:',
          ],
          items: [
            'Categorias por função: Marketing, Vendas, Suporte, Produto, Engenharia, Operações.',
            'Subcategorias ou tags por tarefa: resumir, planejar, reescrever, analisar, classificar, gerar-código, revisar-código.',
            'Status: Rascunho, Aprovado, Obsoleto.',
          ],
        },
        structureFlexibility: {
          content: [
            'As categorias dão estrutura; as tags a mantêm flexível à medida que seu uso evolui.',
          ],
        },
        storageTable: {
          id: 'storage-options-comparison',
          title: 'Como se comparam as opções de armazenamento?',
          columns: ['Ferramenta/Formato', 'Melhor para', 'Controle de versão', 'Pesquisa', 'Governança'],
          rows: [
            { 'Ferramenta/Formato': 'Arquivos Markdown no Git', 'Melhor para': 'Equipes de engenharia, fluxos de trabalho de revisão de código', 'Controle de versão': '✓ Nativo', 'Pesquisa': '✓ Ferramentas CLI', 'Governança': '✓ Revisões de PR' },
            { 'Ferramenta/Formato': 'Notion / Airtable / Sheets', 'Melhor para': 'Equipes mistas, usuários não técnicos', 'Controle de versão': '✓ Histórico limitado', 'Pesquisa': '✓ Filtros de texto completo', 'Governança': '✓ Permissões e funções' },
            { 'Ferramenta/Formato': 'Ferramentas dedicadas (ex: PromptQuorum)', 'Melhor para': 'Equipes que precisam de execução com um clique e métricas', 'Controle de versão': '✓ Histórico completo', 'Pesquisa': '✓ Texto completo, tags, metadados', 'Governança': '✓ Fluxos de aprovação integrados' },
          ],
          tableFormat: true,
        },
        maturityLevels: {
          id: 'maturity-levels',
          title: 'Níveis de maturidade da biblioteca de prompts',
          content: [
            'À medida que sua organização cresce, sua biblioteca de prompts amadurece por estágios previsíveis. A maioria das equipes começa no Nível 0 e deve visar o Nível 2 dentro de 4–6 semanas.',
          ],
          columns: ['Nível de maturidade', 'Entradas', 'Governança', 'Ferramentas', 'Tamanho da equipe'],
          rows: [
            { 'Nível de maturidade': 'Nível 0: Ad hoc', 'Entradas': '0', 'Governança': 'Nenhuma — prompts em chats privados', 'Ferramentas': 'Histórico de chat', 'Tamanho da equipe': '1 pessoa' },
            { 'Nível de maturidade': 'Nível 1: Coleção', 'Entradas': '5–10', 'Governança': 'Documento compartilhado, sem revisão', 'Ferramentas': 'Google Doc / página do Notion', 'Tamanho da equipe': '2–5 pessoas' },
            { 'Nível de maturidade': 'Nível 2: Estruturado', 'Entradas': '10–30', 'Governança': 'Status Rascunho/Aprovado, responsável atribuído', 'Ferramentas': 'Notion/Airtable com campos', 'Tamanho da equipe': '5–15 pessoas' },
            { 'Nível de maturidade': 'Nível 3: Gerenciado', 'Entradas': '30–100', 'Governança': 'Controle de versão, revisões mensais, casos de teste', 'Ferramentas': 'Repositório Git ou ferramenta dedicada', 'Tamanho da equipe': '15–50 pessoas' },
            { 'Nível de maturidade': 'Nível 4: Produto', 'Entradas': '100+', 'Governança': 'Fluxos de aprovação, análises, reversão', 'Ferramentas': 'Plataforma dedicada (PromptQuorum, PromptHub)', 'Tamanho da equipe': '50+ pessoas' },
          ],
          tableFormat: true,
        },
        promptQuorumFit: {
          id: 'prompt-quorum-fit',
          title: 'Como o PromptQuorum aprimora sua biblioteca de prompts',
          content: [
            'O PromptQuorum combina armazenamento de prompts com execução multi-modelo: salve um modelo de prompt, despache para múltiplos modelos simultaneamente e registre qual modelo produziu o melhor resultado para esse modelo. Com o tempo, isso constrói uma biblioteca baseada em evidências onde cada prompt inclui não apenas a instrução, mas os dados empíricos sobre qual modelo a gerencia melhor.',
          ],
        },
        versioning: {
          id: 'versioning',
          title: 'Como você versiona prompts e mantém a qualidade?',
          content: [
            '**Sem versões e testes básicos, uma biblioteca de prompts se transforma em uma gaveta de lixo; com governança leve, ela se torna um produto interno confiável.**',
            'Os principais modelos de IA atualizam periodicamente seu comportamento de seguimento de instruções, o que significa que prompts escritos para versões anteriores podem precisar de ajuste para versões mais novas. Hábitos práticos:',
          ],
          items: [
            'Versione prompts explicitamente: Use um esquema simples como v1.0 – v1.1. Adicione uma nota de alteração de uma linha (ex: "v1.1 – adicionado formato de saída JSON; reduzidas alucinações para datas").',
            'Anexe casos de teste a prompts importantes: Para prompts de alto impacto, mantenha 3–5 entradas de teste e padrões de saída esperados. Após editar ou alterar modelos, execute esses testes.',
            'Rastreie uso e feedback: Até mesmo um simples sistema de "estrelas" ou comentário ajuda a ver quais prompts funcionam e quais precisam de atenção.',
            'Planeje para reversão: Sempre mantenha a versão anterior acessível para que você possa reverter se necessário.',
            'Retire prompts intencionalmente: Quando um prompt estiver desatualizado, marque-o como Obsoleto e explique o motivo, para que as pessoas saibam não usá-lo.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quais são os erros comuns ao construir uma biblioteca de prompts?',
          mistakes: [
            { mistake: 'Armazenar prompts em anotações pessoais ou registros de chat privados.', problem: 'O conhecimento fica isolado; outros não conseguem encontrar ou reutilizar o que você descobriu. Novos colegas reconstroem os mesmos prompts do zero.', fix: 'Use um sistema compartilhado e pesquisável (repositório Git, Airtable, ferramenta dedicada). Trate-o como um ativo da equipe, não como anotações pessoais.' },
            { mistake: 'Escrever prompts sem marcadores de posição de entrada (ex: codificar nomes ou números específicos).', problem: 'Os prompts não são reutilizáveis; você tem que editar o prompt inteiro a cada vez em vez de trocar as entradas.', fix: 'Sempre marque as partes dinâmicas como `<NOME_DO_MARCADOR>` ou `[VARIÁVEL]`. Torne o prompt um modelo, não uma instrução única.' },
            { mistake: 'Excesso de engenharia na governança no lançamento (fluxos de aprovação elaborados, comitês diretivos).', problem: 'A sobrecarga mata a adoção; as pessoas voltam a prompts pessoais em vez de contribuir para a biblioteca.', fix: 'Comece simples: apenas Rascunho e Aprovado. Adicione processo apenas quando sua equipe > 5 ou quando áreas sensíveis (jurídico, RH) precisarem.' },
            { mistake: 'Pular o histórico de versões — sem notas de alteração ou versões anteriores mantidas.', problem: 'Quando um novo modelo quebra um prompt, você não consegue reverter facilmente ou entender o que mudou.', fix: 'Adicione notas de alteração de uma linha por versão (ex: "v1.2 – atualizado para nova versão do modelo, removida substituição de temperatura"). Mantenha versões anteriores acessíveis.' },
            { mistake: 'Nunca retirar prompts obsoletos — a biblioteca cresce com peso morto.', problem: 'É mais difícil encontrar prompts úteis; não está claro quais versões estão realmente sendo mantidas.', fix: 'Marque prompts desatualizados como Obsoletos com um motivo. Remova-os das visualizações padrão; arquive-os para trilhas de auditoria.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'Há considerações regionais ou de conformidade?',
          content: [
            '**Os requisitos de residência de dados e conformidade afetam onde e como você armazena prompts, especialmente quando os corpos dos prompts incluem dados confidenciais de clientes como marcadores de posição.**',
            'As principais restrições por região:',
          ],
          items: [
            'Brasil / LGPD: Se os modelos de prompt incluem ou fazem referência a dados pessoais, a ferramenta de armazenamento deve atender aos requisitos da LGPD. Notion, Airtable e a maioria das plataformas SaaS oferecem residência de dados; verifique antes de habilitar para fluxos de trabalho sensíveis.',
            'EUA SOC 2: Para clientes empresariais que exigem conformidade do fornecedor, escolha ferramentas com certificação SOC 2 Tipo II (Notion, Airtable e PromptQuorum se qualificam).',
            'Setores regulamentados (saúde, finanças, jurídico): System prompts que incluem identificadores de pacientes ou registros financeiros devem permanecer em sua própria infraestrutura. Use armazenamento baseado em Git ou uma opção auto-hospedada.',
            'Dica: Separe prompts sensíveis (os que aceitam dados pessoais como entradas) de prompts de uso geral. Aplique controles de acesso mais rígidos e retenção mais curta ao grupo sensível.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'O que é uma biblioteca de prompts?', a: 'Uma biblioteca de prompts é uma coleção estruturada de prompts testados com metadados (entradas, orientação de modelo, saída esperada, versão, responsável). Ao contrário de uma lista de prompts da internet, uma biblioteca de prompts é um produto interno que sua equipe mantém e reutiliza para consistência e velocidade.' },
            { q: 'Quando uma equipe deve usar uma biblioteca de prompts em vez de anotações pessoais?', a: 'Assim que você tiver 3+ membros na equipe e 2+ prompts que usa mais de uma vez. Anotações pessoais funcionam para uma pessoa; bibliotecas funcionam para equipes. Uma biblioteca reduz o tempo de configuração, integra pessoas mais rapidamente e evita trabalho duplicado.' },
            { q: 'Quanto tempo leva para construir uma biblioteca de prompts utilizável do zero?', a: 'Comece pequeno: 1–2 semanas para coletar 5–10 prompts reais do trabalho diário, normalizá-los em um modelo e carregá-los em um sistema compartilhado. Depois cresça ao longo dos meses.' },
            { q: 'Como faço para que minha equipe realmente contribua para uma biblioteca de prompts compartilhada?', a: 'Torne a contribuição fácil e sem atrito. Comece com 3–5 prompts campeões que você mesmo cria. Mantenha a aprovação leve. Mostre vitórias. Nunca torne a contribuição obrigatória; torne-a o caminho de menor resistência.' },
            { q: 'Uma biblioteca de prompts é o mesmo que um system prompt?', a: 'Não. Um system prompt é uma instrução persistente única para uma conversa. Uma biblioteca de prompts é uma coleção de prompts compartilhada em sua equipe para muitos casos de uso.' },
            { q: 'Com que frequência devemos revisar e podar uma biblioteca de prompts?', a: 'Mensalmente no mínimo. Procure prompts que ninguém usa e oportunidades de consolidar. Marque prompts não utilizados como Obsoletos; retire-os após 3 meses de inatividade.' },
            { q: 'Como você lida com prompts que funcionam em um modelo mas não em outro?', a: 'Marque cada prompt com os modelos testados nos metadados. Quando um prompt falha em um novo modelo, crie uma variante em vez de forçar um prompt a funcionar em todo lugar.' },
            { q: 'Qual é a diferença entre uma biblioteca de prompts e uma plataforma de gestão de prompts?', a: 'Uma biblioteca de prompts é uma coleção de registros de prompts estruturados. Uma plataforma de gestão de prompts adiciona execução, análises e controle de versão sobre o conceito de biblioteca. Comece com uma biblioteca simples.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            { title: 'Fundamentos de prompt engineering', url: '/pt/prompt-engineering/fundamentals' },
            { title: 'Few-Shot Prompting: melhore seus prompts com exemplos', url: '/pt/prompt-engineering/few-shot-prompting' },
            { title: 'Chain-of-Thought Prompting: raciocínio passo a passo', url: '/pt/prompt-engineering/chain-of-thought' },
            { title: 'PromptQuorum: gestão de prompts simplificada', url: '/pt/features' },
            { title: 'System Prompt vs. User Prompt: qual é a diferença?', url: '/pt/prompt-engineering/system-prompt-vs-user-prompt' },
            { title: 'Testes e otimização de prompts', url: '/pt/prompt-engineering/prompt-testing' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes e leituras adicionais',
          items: [
            { title: 'Guia de prompt engineering da OpenAI', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'Anthropic: visão geral de prompt engineering', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
            { title: 'Google DeepMind: Estratégias de prompting', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
          ],
        },
      },
    },
    fr: {
  theme: 'Fondamentaux',
  title: 'Créer une bibliothèque de prompts qui fait gagner du temps',
  intro: 'Une bibliothèque de prompts est une collection d\'instructions testées avec métadonnées que votre équipe partage et améliore ensemble. Bien construite, elle devient le deuxième cerveau de votre équipe : elle réduit le temps de configuration, accélère l\'intégration et empêche les meilleurs prompts de se perdre dans des notes personnelles. Ce cadre en 12 étapes montre comment construire une bibliothèque que votre équipe utilise réellement.',
  seoTitle: 'Créer une bibliothèque de prompts : modèles IA réutilisables',
  metaDescription: 'Créez une bibliothèque de prompts avec métadonnées, versionnage et gouvernance d\'équipe. Réutilisez des prompts IA testés sur tous vos projets. Guide étape par étape. Avril 2026.',
  ogDescription: 'Votre équipe réécrit les mêmes prompts IA chaque jour. Une bibliothèque partagée avec des modèles testés, un propriétaire clair et un contrôle de version résout ce problème.',
  twitterDescription: 'Bibliothèque de prompts → modèles testés → résultats IA cohérents. Construisez la vôtre en une semaine. Guide complet inclus.',
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
    url: 'https://www.promptquorum.com/fr/prompt-engineering/build-a-prompt-library',
    inLanguage: 'fr',
    headline: 'Créer une bibliothèque de prompts qui fait gagner du temps',
    description: 'Une bibliothèque de prompts est une collection d\'instructions testées avec métadonnées que votre équipe partage et améliore ensemble.',
    image: 'https://www.promptquorum.com/og-build-a-prompt-library-fr.png',
    datePublished: '2026-03-24',
    dateModified: '2026-04-29',
    author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          text: 'Étiquetez chaque prompt avec les modèles testés dans les métadonnées. Si un prompt échoue sur un nouveau modèle, créez une variante — par exemple « Résumé de réunion – Claude » et « Résumé de réunion – GPT-5.5 » — au lieu de forcer un prompt à fonctionner partout. Les outils de test multi-modèle vous permettent de comparer les résultats avant de promouvoir un prompt en Approuvé.',
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
        text: 'Structure : « Résumés de réunion » → v1.0 (Claude), v1.0 (GPT-5.5) au lieu de « Prompts Claude » → « Résumés de réunion ». Les détails du modèle vont dans les métadonnées, pas dans la structure des dossiers.',
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
        'Simplifiez les expériences : testez le même prompt sur GPT-5.5, Claude, Llama 3.3 — suivez quel modèle fonctionne best.',
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
        '**Modèles testés** : « Claude 4.6, GPT-5.5 » (cela aide les équipes à choisir la bonne variante)',
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
        '**Notes de coût** : « Ce prompt coûte ~0,02 € par appel avec GPT-5.5 »',
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
        '✅ Correct : Ventes → Brouillon d\'email (v1.0 Claude, v1.0 GPT-5.5) → Gestion d\'objections (v1.1 Claude)',
        '❌ Incorrect : Claude → Prompts de ventes → Brouillon d\'email',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: 'Pourquoi tâche plutôt que modèle ?',
      content: 'Si vous organisez par modèle, voici ce qui se passe : à un moment donné, vous voudrez tester un prompt sur un modèle différent. Maintenant vous devez copier le fichier prompt, le renommer, garder les deux versions synchrones. C\'est source d\'erreurs et ennuyeux.',
      items: [
        'Si vous organisez par tâche : « Brouillon d\'email » a des variantes (Claude v1.0, GPT-5.5 v1.0) comme des entrées claires. Facile à comparer, facile à mettre à jour.',
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
          a: 'Étiquetez chaque prompt avec les modèles testés dans les métadonnées. Si un prompt échoue sur un nouveau modèle, créez une variante — par exemple « Résumé de réunion – Claude » et « Résumé de réunion – GPT-5.5 » — au lieu de forcer un prompt à fonctionner partout. Les outils de test multi-modèle vous permettent de comparer les résultats avant de promouvoir.',
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
        { title: 'Fondamentaux du Prompt Engineering', url: '/fr/prompt-engineering/fundamentals' },
        { title: 'Few-Shot Prompting : Mieux prompter avec des exemples', url: '/fr/prompt-engineering/few-shot-prompting' },
        { title: 'Chain-of-Thought Prompting : Raisonnement étape par étape', url: '/fr/prompt-engineering/chain-of-thought' },
        { title: 'PromptQuorum : Gestion de prompts simplifiée', url: '/fr/features' },
        { title: 'System Prompt vs User Prompt : Quelle est la différence ?', url: '/fr/prompt-engineering/system-prompt-vs-user-prompt' },
        { title: 'Test et optimisation de prompts', url: '/fr/prompt-engineering/prompt-testing' },
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
  freshness_tier: 'monthly',
  next_refresh_due: '2026-09-24',
},
    ja: {
  theme: '基礎知識',
  title: 'プロンプトライブラリを構築して時間を節約する',
  intro: 'プロンプトライブラリは、テストされたプロンプトをメタデータとともに保存し、チームで共有・改善するための構造化された集約です。適切に構築すれば、プロンプトセットアップの時間を短縮し、新しいチームメンバーのオンボーディングを加速させ、価値あるプロンプトが散逸するのを防ぎます。本フレームワークは、チームが実際に使用するプロンプトライブラリを構築するための12ステップガイドです。',
  seoTitle: 'プロンプトライブラリの作り方：チーム向けAIテンプレート管理',
  metaDescription: 'メタデータ・バージョン管理・チームガバナンスを備えたプロンプトライブラリの構築方法。テスト済みAIプロンプトをモデル横断で再利用。テンプレート付きステップバイステップガイド。2026年4月版。',
  ogDescription: 'チームが毎日同じAIプロンプトをゼロから書いている問題を解決。テスト済みテンプレート、明確なオーナーシップ、バージョン管理を備えた共有プロンプトライブラリの構築ガイド。',
  twitterDescription: 'プロンプトライブラリ → テスト済みテンプレート → 一貫したAI出力。1週間で構築。ステップバイステップガイド。',
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
    url: 'https://www.promptquorum.com/ja/prompt-engineering/build-a-prompt-library',
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
          text: 'メタデータでテスト済みモデルを各プロンプトにタグ付けしてください。プロンプトが新モデルで失敗した場合、一つのプロンプトを無理に全モデルで機能させるのではなく、バリエーション（例：「会議要約 – Claude」と「会議要約 – GPT-5.5」）を作成してください。多モデルテストツールで昇格前に出力を比較できます。',
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
        text: '「会議要約」→ v1.0 (Claude)、v1.0 (GPT-5.5) のようにタスク中心の構造にしてください。「Claude プロンプト」→「会議要約」というモデル中心の構成は避けてください。',
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
        'マルチモデル実験：同じプロンプトを GPT-5.5、Claude、Llama 3.3 で試験 — 最適モデル追跡可能。',
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
        '**テスト済みモデル**：「Claude 4.6、GPT-5.5」（チームが正しいバリエーション選択を支援）',
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
        '**コスト注記**：「このプロンプトは GPT-5.5 で ~0.02 ドル/呼び出し」',
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
        '✅ 正解：営業 → メールドラフト (v1.0 Claude、v1.0 GPT-5.5) → 異議処理 (v1.1 Claude)',
        '❌ 不正解：Claude → 営業プロンプト → メールドラフト',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: 'タスク別の理由',
      content: 'モデル別に整理すると：別モデルでプロンプトをテストしたくなったとき、ファイルをコピー、リネーム、両バージョン同期が必要。エラー源でつまらない。',
      items: [
        'タスク別なら：「メールドラフト」にバリエーション（Claude v1.0、GPT-5.5 v1.0）が明確なエントリ。比較・更新が簡単。',
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
          a: 'メタデータでテスト済みモデルをタグ付け。新モデルで失敗なら、一つを無理に全モデルで機能させるのではなく「会議要約 – Claude」と「会議要約 – GPT-5.5」のバリエーション作成。多モデルテストツールで出力比較→昇格。',
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
        { title: 'プロンプトエンジニアリングの基礎', url: '/ja/prompt-engineering/fundamentals' },
        { title: 'Few-Shot プロンプティング：例を使った効果的なプロンプト', url: '/ja/prompt-engineering/few-shot-prompting' },
        { title: 'Chain-of-Thought プロンプティング：ステップバイステップ推論', url: '/ja/prompt-engineering/chain-of-thought' },
        { title: 'PromptQuorum：プロンプト管理の簡素化', url: '/ja/features' },
        { title: 'システムプロンプト vs ユーザープロンプト：何が違う？', url: '/ja/prompt-engineering/system-prompt-vs-user-prompt' },
        { title: 'プロンプトのテストと最適化', url: '/ja/prompt-engineering/prompt-testing' },
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
  freshness_tier: 'monthly',
  next_refresh_due: '2026-09-24',
},
    zh: {
  theme: '基础知识',
  title: '构建提示词库，节省时间',
  intro: '提示词库是一个包含元数据的、经过测试的指令集合，您的团队可以共享和改进。构建得当，它成为团队的第二大脑：减少设置时间、加速新员工入职、防止优质提示词丢失。本指南提供了12步框架，帮助您构建团队真正会使用的提示词库。',
  seoTitle: '构建提示词库：团队可复用的AI模板管理指南',
  metaDescription: '构建包含元数据、版本管理和团队治理的提示词库。跨模型、跨项目复用经过测试的AI提示词。含模板的分步指南。2026年4月版。',
  ogDescription: '你的团队每天都在从零开始重写相同的AI提示词。一个包含测试模板、明确归属和版本控制的共享提示词库可以解决这个问题。以下是构建方法。',
  twitterDescription: '提示词库 → 测试模板 → 一致的AI输出。一周内为团队搭建完成。分步框架指南。',
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
    url: 'https://www.promptquorum.com/zh/prompt-engineering/build-a-prompt-library',
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
          text: '在元数据中为每个提示词标记已测试的模型。如果提示词在新模型上失败，创建变体（如"会议总结-Claude"和"会议总结-GPT-5.5"），而不是强制一个提示词到处工作。多模型测试工具让您在升级前比较输出。',
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
        text: '结构：「会议总结」→ v1.0 (Claude)、v1.0 (GPT-5.5)，而不是「Claude提示词」→「会议总结」。模型详情属于元数据，不是文件夹结构。',
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
        '简化模型实验：在GPT-5.5、Claude、Llama 3.3上测试同一提示词——追踪哪个最佳。',
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
        '**已测试模型**：「Claude 4.6、GPT-5.5」（帮助团队选择正确变体）',
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
        '**成本说明**：「此提示词在GPT-5.5上成本约0.02美元/调用」',
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
        '✅ 正确：销售→邮件草稿(v1.0 Claude、v1.0 GPT-5.5)→异议处理(v1.1 Claude)',
        '❌ 错误：Claude→销售提示词→邮件草稿',
      ],
    },
    structureFlexibility: {
      id: 'structure-flexibility',
      title: '为什么按任务而非模型？',
      content: '如果按模型组织，会发生这种情况：您想在另一模型上测试提示词。现在您需要复制、重命名、保持两个版本同步。这容易出错且乏味。',
      items: [
        '按任务：「邮件草稿」有变体（Claude v1.0、GPT-5.5 v1.0）作为清晰条目。易于比较、易于更新。',
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
          a: '在元数据中为各提示词标记已测试模型。失败于新模型时，创建变体（如「总结-Claude」和「总结-GPT-5.5」）而不强制一个提示词处处工作。多模型工具升级前比较输出。',
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
        { title: '提示词工程基础', url: '/zh/prompt-engineering/fundamentals' },
        { title: '少样本提示词：用示例更好地提示', url: '/zh/prompt-engineering/few-shot-prompting' },
        { title: '思路链提示词：逐步推理', url: '/zh/prompt-engineering/chain-of-thought' },
        { title: 'PromptQuorum：简化提示词管理', url: '/zh/features' },
        { title: '系统提示词 vs 用户提示词：有何区别？', url: '/zh/prompt-engineering/system-prompt-vs-user-prompt' },
        { title: '提示词测试和优化', url: '/zh/prompt-engineering/prompt-testing' },
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
  freshness_tier: 'monthly',
  next_refresh_due: '2026-09-24',
},
    ko: {
      freshness_tier: 'monthly',
      theme: 'Fundamentals',
      title: '프롬프트 라이브러리 구축 방법: 8가지 필드 템플릿, 거버넌스 및 팀 도입 가이드',
      intro: '프롬프트 라이브러리는 팀 전체가 공유하는 검증된 지시문 모음입니다. 올바르게 구축되면 각 항목은 작은 도구처럼 작동합니다. 가져와서 입력값을 조정하면 일관된 결과를 얻을 수 있습니다.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      next_refresh_due: '2026-09-24',
      readTime: '10분 분량',
      seoTitle: '프롬프트 라이브러리 구축: 팀을 위한 재사용 가능한 AI 템플릿',
      metaDescription: '8가지 메타데이터 필드, 초안 거버넌스, 월별 정리 기능을 갖춘 공유 프롬프트 라이브러리를 구축하십시오. 템플릿, 구조화된 예시, 스토리지 비교 및 팀 도입 가이드를 포함합니다.',
      ogDescription: '개인 채팅에서 좋은 프롬프트를 잃지 마십시오. 구조화된 템플릿, 버전 관리 및 가벼운 거버넌스를 갖춘 팀 프롬프트 라이브러리를 구축하여 누구나 효과적인 것을 재사용할 수 있습니다.',
      twitterDescription: '프롬프트 라이브러리 = AI용 레시피 박스. 8가지 필드 템플릿, 단계별 구축 가이드, 스토리지 비교, 도입을 방해하지 않는 거버넌스.',
      educationalLevel: 'Beginner',
      audience: 'AI 도구를 도입하는 팀 리더 및 실무자',
      leadAnswerBlock: '**프롬프트 라이브러리는 구조화된 메타데이터를 갖춘 검증된 프롬프트의 공유 모음으로, 팀이 매번 처음부터 시작하는 대신 효과적인 지시문을 재사용할 수 있도록 합니다.**',
      quickFacts: [
        '프롬프트 항목당 권장 8가지 메타데이터 필드(제목, 목표, 본문, 입력값, 모델 가이드, 출력 형식, 태그, 담당자/버전)',
        '일상 업무에서 실제 프롬프트 5~10개로 시작 — 수집에 1~2주 소요',
        '미사용 프롬프트 폐기를 위한 월별 검토 주기; 팀은 일반적으로 20~30% 폐기',
        '승인된 프롬프트 10개 이상을 보유한 팀은 작업 설정 속도가 40~60% 빨라졌다고 보고함',
        '초안 → 승인됨 → 폐기됨: 3단계 수명 주기로 높은 품질 유지',
      ],
      toc: [
        { label: '프롬프트 라이브러리란?', anchor: '#what-is-a-prompt-library' },
        { label: '프롬프트 라이브러리를 구축해야 하는 이유', anchor: '#why-build-a-prompt-library' },
        { label: '각 프롬프트에 저장할 내용', anchor: '#what-to-store' },
        { label: '단계별 구축 방법', anchor: '#how-to-build' },
        { label: '저장 위치', anchor: '#where-to-store' },
        { label: '스토리지 옵션 비교', anchor: '#storage-options-comparison' },
        { label: '성숙도 수준', anchor: '#maturity-levels' },
        { label: '버전 관리 및 품질', anchor: '#versioning' },
        { label: '일반적인 실수', anchor: '#common-mistakes' },
        { label: '지역별 고려사항', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '프롬프트 라이브러리 구축 방법: 8가지 필드 템플릿, 거버넌스 및 팀 도입 가이드',
        description: '프롬프트 라이브러리가 무엇인지, 팀이 왜 구축해야 하는지, 구조화 및 유지 관리 방법, 버전 관리 및 거버넌스 모범 사례를 설명합니다.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        keywords: ['프롬프트 라이브러리', '프롬프트 관리', 'prompt engineering', '팀 생산성', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: '팀 생산성' },
          { '@type': 'Thing', name: '지식 관리' },
        ],
        proficiencyLevel: 'Beginner',
        audience: { '@type': 'Audience', audienceType: 'AI 도구를 도입하는 팀 리더 및 실무자' },
        url: 'https://www.promptquorum.com/ko/prompt-engineering/build-a-prompt-library',
        inLanguage: 'ko',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ko',
        mainEntity: [
          { '@type': 'Question', name: '프롬프트 라이브러리란 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 라이브러리는 메타데이터(입력값, 모델 가이드, 예상 출력, 버전, 담당자)를 갖춘 검증된 프롬프트의 구조화된 모음입니다. 인터넷에서 복사한 프롬프트 목록과 달리, 팀이 일관성과 속도를 위해 유지 관리하고 재사용하는 내부 제품입니다.' } },
          { '@type': 'Question', name: '팀이 개인 메모 대신 프롬프트 라이브러리를 사용해야 하는 시점은 언제입니까?', acceptedAnswer: { '@type': 'Answer', text: '팀원이 3명 이상이고 두 번 이상 사용하는 프롬프트가 2개 이상인 즉시입니다. 개인 메모는 한 사람에게 유효하지만, 라이브러리는 팀에 유효합니다. 라이브러리는 작업 설정 시간을 단축하고, 새 동료를 더 빨리 온보딩하며, 중복 작업을 방지합니다.' } },
          { '@type': 'Question', name: '처음부터 사용 가능한 프롬프트 라이브러리를 구축하는 데 얼마나 걸립니까?', acceptedAnswer: { '@type': 'Answer', text: '작게 시작하십시오. 일상 업무에서 실제 프롬프트 5~10개를 수집하여 템플릿으로 정규화하고 공유 시스템에 업로드하는 데 1~2주가 걸립니다. 거버넌스와 도구는 시간이 지남에 따라 개선됩니다. 초안과 승인 상태 레이블만으로 시작하십시오.' } },
          { '@type': 'Question', name: '팀이 공유 프롬프트 라이브러리에 기여하도록 하려면 어떻게 해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '기여를 쉽고 마찰 없이 만드십시오. 직접 3~5개의 대표 프롬프트를 만들어 예시를 보여주십시오. 승인을 가볍게 유지하십시오(한 명, 5분). 성과를 보여주십시오. 기여를 절대 의무화하지 마십시오.' } },
          { '@type': 'Question', name: '프롬프트 라이브러리는 system prompt와 같습니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. system prompt는 대화의 LLM 동작을 설정하는 단일 영구 지시문입니다. 프롬프트 라이브러리는 많은 사용 사례를 위해 팀 전체에 공유되는 프롬프트 모음(각각 컨텍스트와 메타데이터 포함)입니다. system prompt는 라이브러리의 항목으로 존재할 수 있습니다.' } },
          { '@type': 'Question', name: '프롬프트 라이브러리를 얼마나 자주 검토하고 정리해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '최소 월 1회입니다. 아무도 사용하지 않는 프롬프트, 사람들이 계속 임시로 편집하는 프롬프트, 통합 기회를 찾으십시오. 미사용 프롬프트를 폐기됨으로 표시하고, 3개월 비활동 후 기본 보기에서 제거하십시오.' } },
          { '@type': 'Question', name: '한 모델에서는 작동하지만 다른 모델에서는 작동하지 않는 프롬프트는 어떻게 처리합니까?', acceptedAnswer: { '@type': 'Answer', text: '메타데이터에서 각 프롬프트에 테스트된 모델을 태그하십시오. 새 모델에서 프롬프트가 실패하면 프롬프트를 모든 곳에서 작동하도록 강제하는 대신 변형을 만드십시오.' } },
          { '@type': 'Question', name: '프롬프트 라이브러리와 프롬프트 관리 플랫폼의 차이는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 라이브러리는 팀이 유지 관리하는 구조화된 프롬프트 레코드 모음으로, Git 저장소, 스프레드시트 또는 전용 도구에 존재할 수 있습니다. 프롬프트 관리 플랫폼은 라이브러리 개념 위에 실행, 분석, 버전 관리 및 협업 기능을 추가합니다.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '팀을 위한 프롬프트 라이브러리 구축 방법',
        description: '프롬프트 라이브러리는 팀이 효과적인 것을 재사용할 수 있도록 명확한 메타데이터를 갖춘 검증된 프롬프트의 중앙 집중식 검색 가능한 모음입니다.',
        step: [
          { '@type': 'HowToStep', position: 1, name: '실제 고가치 사용 사례로 시작하기', text: 'AI가 이미 도움이 되는 반복적인 작업 3~5개를 선택하십시오(회의 요약, 지원 응답, 코드 검토 댓글, 캠페인 초안).' },
          { '@type': 'HowToStep', position: 2, name: '이미 효과적인 프롬프트 수집하기', text: '1~2주 동안 훌륭한 결과를 얻을 때마다 수신함 섹션에 저장하십시오. 일관되게 좋은 출력으로 두 번 이상 사용된 프롬프트에만 집중하십시오.' },
          { '@type': 'HowToStep', position: 3, name: '표준 템플릿으로 정규화하기', text: '각 좋은 프롬프트를 명확한 제목, 목표, 프롬프트 본문, 플레이스홀더, 태그, 담당자, 버전으로 다시 작성하십시오.' },
          { '@type': 'HowToStep', position: 4, name: '모델이 아닌 작업별로 구성하기', text: '프롬프트를 수행하는 작업(요약, 계획, 분석, 생성, 코드 검토)별로 그룹화하십시오. 모델 세부 정보는 메타데이터에 속합니다.' },
          { '@type': 'HowToStep', position: 5, name: '소유권 및 최소 검토 추가하기', text: '각 카테고리에 책임자를 한 명 지정하십시오. 그들은 새 프롬프트나 수정된 프롬프트를 승인됨으로 표시하기 전에 명확성과 적합성을 신속히 검토합니다.' },
          { '@type': 'HowToStep', position: 6, name: '정기적으로 검토 및 정리하기', text: '월별 주기로 사용 패턴, 거의 사용되지 않는 프롬프트, 사람들이 같은 프롬프트를 임시로 계속 편집하는 곳을 살펴보십시오.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '프롬프트 라이브러리는 메타데이터가 있는 구조화된 저장소로, 인터넷에서 찾은 흥미로운 프롬프트 목록이 아닙니다.',
            '각 항목에는 제목, 프롬프트 본문, 입력값, 출력 형식, 태그, 담당자, 버전이 필요합니다. 팀의 누구나 안정적으로 사용할 수 있어야 합니다.',
            '아래에서 위로 구축하십시오. 먼저 일상 업무에서 실제 프롬프트를 수집한 다음 공통 템플릿으로 정규화하십시오.',
            '모델이 아닌 작업이나 기능(예: 요약, 코드 검토, 계획)별로 구성하십시오. 모델 세부 정보는 메타데이터에 들어갑니다.',
            '가벼운 거버넌스로 높은 품질을 유지하십시오. 프롬프트를 초안에서 승인됨, 폐기됨으로 표시하십시오.',
            '명시적으로 버전을 관리하십시오(v1.0, v1.1). 한 줄 변경 메모와 함께 이전 버전을 롤백을 위해 유지하십시오.',
            '월별 검토 주기: 사용량이 적은 프롬프트를 폐기하고 기본 모델이 발전함에 따라 개선된 프롬프트를 승격하십시오.',
          ],
        },
        whatIsLibrary: {
          id: 'what-is-a-prompt-library',
          title: '프롬프트 라이브러리란 무엇입니까(그리고 무엇이 아닙니까)?',
          content: [
            '**프롬프트 라이브러리는 각각 정의된 목적, 입력값 및 예상 출력을 갖춘 프롬프트의 구조화된 저장소입니다. 인터넷에서 복사한 흥미로운 프롬프트의 긴 목록이 아닙니다.**',
            '각 항목은 텍스트 조각이 아닌 작은 도구처럼 읽혀야 합니다. 레시피 카드처럼 생각하십시오. 한 사람이 3~5개의 실제 입력값으로 프롬프트 템플릿을 테스트하고, 효과적인 것을 문서화하여 팀에 게시합니다. 유용한 프롬프트 레코드에는 일반적으로 다음이 포함됩니다.',
          ],
          items: [
            '명확한 제목("이해관계자 인터뷰를 위험과 액션으로 요약하기").',
            '한 줄 사용 사례(어떤 문제를 해결하는지).',
            '입력값을 위한 플레이스홀더를 포함한 전체 프롬프트 본문.',
            '필수 입력값(예: 대화록, 사용자 스토리, Git diff).',
            '관련 경우 권장 모델 / 매개변수.',
            '예상 출력 형식(이메일, JSON, 글머리 기호, 표).',
            '태그(예: #조사, #마케팅, #지원, #코드-검토).',
            '담당자 및 간단한 버전("v1.2 - 새 모델용으로 업데이트됨").',
          ],
          snippets: [
            { type: 'in-one-sentence', text: '프롬프트 라이브러리는 팀의 모든 구성원이 원작자 없이도 결과를 재현할 수 있도록 충분한 메타데이터를 갖춘 구조화된 재사용 가능한 자산으로 검증된 프롬프트를 저장합니다.' },
            { type: 'in-plain-terms', text: '레시피 박스처럼 생각하십시오. 한 사람이 레시피를 테스트하고 정확한 재료와 단계를 적어두면, 이제 팀 전체가 같은 요리를 만들 수 있습니다. 원래 요리사가 휴가 중이어도 괜찮습니다.' },
          ],
        },
        libraryAsset: {
          content: [
            '이렇게 하면 각 프롬프트가 최소한의 설명으로 다른 사람이 가져와 사용할 수 있는 재사용 가능한 자산이 됩니다.',
          ],
        },
        whyBuildOne: {
          id: 'why-build-a-prompt-library',
          title: '팀이 프롬프트 라이브러리를 구축해야 하는 이유는 무엇입니까?',
          content: [
            '**프롬프트 라이브러리는 시간을 절약하고, 사람 간의 변동성을 줄이며, 개인 채팅 기록에서 프롬프트를 잃는 대신 다듬을 수 있는 안전한 장소를 제공합니다.**',
            '동료가 작업에 대한 올바른 chain-of-thought 접근 방식을 발견하면, 라이브러리 없이는 그 지식이 사라집니다. 라이브러리가 있으면 축적됩니다. 일반적인 이점:',
          ],
          items: [
            '속도: 사람들이 빈 박스가 아닌 검증된 템플릿에서 시작합니다.',
            '일관성: 유사한 작업(요약, 브리핑, 코드 검토)이 일관된 패턴, 어조 및 구조를 따릅니다.',
            '품질: 효과적인 것을 기록하고 효과 없는 것을 폐기하면서 시간이 지남에 따라 프롬프트가 개선됩니다.',
            '온보딩: 새 동료가 AI와 대화하는 방법을 추측하는 대신 예시를 탐색하고 빠르게 생산적이 될 수 있습니다.',
            '거버넌스: 민감한 영역(법무, 인사, 재무, 컴플라이언스)에서 임시 지시문 대신 검토된 프롬프트를 사용합니다.',
          ],
        },
        sharedSystem: {
          content: [
            '각 사람이 메모에서 개인 프롬프트 저장소를 유지하는 대신, 조직이 AI를 실제로 사용하려는 방식을 나타내는 공유 시스템이 생깁니다.',
          ],
        },
        whatToStore: {
          id: 'what-to-store',
          title: '각 프롬프트에 무엇을 저장해야 합니까?',
          content: [
            '**각 프롬프트는 몇 달 후에도 다른 사람이 결과를 안정적으로 재현할 수 있을 만큼 충분한 컨텍스트를 캡처해야 합니다.** 이 8가지 필드로 프롬프트를 문서화하는 팀은 새 동료 합류 시 온보딩이 40~60% 빨라졌다고 보고합니다.',
            '실용적인 스키마:',
          ],
        },
        schemaBreakdown: {
          items: [
            '제목: 짧고 작업 중심(예: "회의 메모 - 액션 항목", "버그 보고서 분류 분류기").',
            '목표/설명: 무엇을 하는지 설명하는 한두 문장.',
            '프롬프트 본문: 플레이스홀더와 시스템 스타일 가이드를 포함한 전체 지시문 텍스트.',
            '입력값: 사용자가 제공해야 하는 것(예: "Zoom 대화록", "Jira 티켓 목록").',
            '모델 가이드: 중요한 경우 권장 모델 및 설정.',
            '출력 형식: 예를 들어 "Markdown 글머리 기호 목록", "2열 표" 또는 "유효한 JSON 배열".',
            '태그/카테고리: 예를 들어 #요약, #계획, #분석, 기능 태그 포함.',
            '담당자/버전/최종 업데이트: 누가 유지 관리하는지, 버전 문자열, 마지막 변경 날짜.',
          ],
          promptExamples: [
            {
              badLabel: '구조 없는 프롬프트(라이브러리 준비 안 됨)',
              bad: '이 회의를 요약해 줘',
              goodLabel: '플레이스홀더가 있는 구조화된 프롬프트(라이브러리 준비 완료)',
              good: '당신은 시니어 프로젝트 관리자입니다. 다음 회의 대화록을 요약하십시오:\n1. 주요 결정사항 (3-5개 글머리 기호)\n2. 액션 항목 - 각각 담당자 이름과 기한 포함\n3. 후속 조치가 필요한 미결 질문\n\n출력 형식: Markdown. 각 섹션을 100단어 이내로 유지하십시오.\n\n대화록:\n<여기에_대화록_붙여넣기>',
            },
          ],
        },
        optionalFields: {
          content: [
            '선택적이지만 유용한 항목:',
          ],
          items: [
            '입력/출력 예시: 사용자가 한 눈에 적합성을 판단할 수 있도록 실제 입력과 좋은 출력 예시.',
          ],
        },
        howToStart: {
          id: 'how-to-build',
          title: '프롬프트 라이브러리를 단계별로 어떻게 구축합니까?',
          content: [
            '**사용 가능한 프롬프트 라이브러리를 구축하는 가장 빠른 방법은 일상 업무에서 실제 프롬프트를 수집하고, 공통 템플릿으로 정규화한 다음, 가벼운 거버넌스를 추가하는 것입니다.**',
            '실용적인 접근 방법:',
          ],
          snippets: [
            { type: 'in-one-sentence', text: '프롬프트 라이브러리는 팀이 효과적인 것을 재사용할 수 있도록 명확한 메타데이터를 갖춘 검증된 프롬프트의 구조화된 저장소입니다.' },
            { type: 'in-plain-terms', text: '레시피 박스처럼 생각하십시오. 한 사람이 레시피를 테스트하고 정확한 재료와 단계를 적어두면 팀 전체가 같은 요리를 만들 수 있습니다. 원래 요리사가 휴가 중이어도 괜찮습니다.' },
          ],
          numberedItems: [
            '실제 고가치 사용 사례로 시작하십시오: AI가 이미 도움이 되는 반복적인 작업 3~5개를 선택하십시오(회의 요약, 지원 응답, 코드 검토 댓글, 캠페인 초안).',
            '이미 효과적인 프롬프트를 수집하십시오: 1~2주 동안 훌륭한 결과를 얻을 때마다 수신함 섹션에 저장하십시오. 일관되게 좋은 출력으로 두 번 이상 사용된 프롬프트에만 집중하십시오.',
            '표준 템플릿으로 정규화하십시오: 각 좋은 프롬프트를 명확한 제목, 목표, 프롬프트 본문, 플레이스홀더, 태그, 담당자, 버전으로 다시 작성하십시오.',
            '모델이 아닌 작업별로 구성하십시오: 프롬프트를 수행하는 작업(요약, 계획, 분석, 생성, 코드 검토)별로 그룹화하십시오. 모델 세부 정보는 메타데이터에 속합니다.',
            '소유권 및 최소 검토를 추가하십시오: 각 카테고리에 책임자를 한 명 지정하십시오. 승인됨으로 표시하기 전에 새 프롬프트나 수정된 프롬프트를 명확성과 적합성을 위해 신속히 검토합니다.',
            '정기적으로 검토하고 정리하십시오: 월별 주기로 사용 패턴, 거의 사용되지 않는 프롬프트, 사람들이 같은 프롬프트를 임시로 계속 편집하는 곳을 살펴보십시오.',
          ],
        },
        timelyRefinement: {
          content: [
            '시간이 지남에 따라 이것은 분산된 지시문을 팀이 실제로 작동하는 방식을 반영하는 큐레이션된 도구 키트로 변환합니다.',
          ],
        },
        whereToStore: {
          id: 'where-to-store',
          title: '프롬프트 라이브러리를 어디에 저장해야 합니까?',
          content: [
            '**Git 저장소에서 공유 목록까지 무엇이든 프롬프트 라이브러리를 구현할 수 있습니다. 중요한 것은 검색 가능한 필드, 쉬운 편집, 변경 기록입니다.**',
          ],
        },
        storageOptions: {
          content: ['일반적이고 효과적인 옵션:'],
          items: [
            '저장소의 Markdown 파일: 카테고리당 하나의 파일, frontmatter 블록의 메타데이터. 이점: 버전 관리, 코드 검토, diff, 브랜치.',
            '테이블 또는 목록(Notion, Airtable, Sheets): 제목, 프롬프트, 카테고리, 태그, 모델, 담당자, 상태 열. 비기술 사용자를 위한 쉬운 필터링 및 검색.',
            '전용 프롬프트 관리 도구: 종종 원클릭 실행, 프롬프트별 분석, 액세스 제어를 추가합니다. 많은 비기술 사용자와 엄격한 거버넌스에 유용합니다.',
          ],
        },
        structureApproach: {
          content: [
            '구조를 위해 간단한 하이브리드가 잘 작동합니다:',
          ],
          items: [
            '기능별 카테고리: 마케팅, 영업, 지원, 제품, 엔지니어링, 운영.',
            '작업별 하위 카테고리 또는 태그: 요약, 계획, 재작성, 분석, 분류, 코드-생성, 코드-검토.',
            '상태: 초안, 승인됨, 폐기됨.',
          ],
        },
        structureFlexibility: {
          content: [
            '카테고리가 구조를 제공하고, 태그는 사용이 발전함에 따라 유연성을 유지합니다.',
          ],
        },
        storageTable: {
          id: 'storage-options-comparison',
          title: '스토리지 옵션을 어떻게 비교합니까?',
          columns: ['도구/형식', '최적 대상', '버전 관리', '검색', '거버넌스'],
          rows: [
            { '도구/형식': 'Git의 Markdown 파일', '최적 대상': '엔지니어링 팀, 코드 검토 워크플로우', '버전 관리': '✓ 기본 지원', '검색': '✓ CLI 도구', '거버넌스': '✓ PR 검토' },
            { '도구/형식': 'Notion / Airtable / Sheets', '최적 대상': '혼합 팀, 비기술 사용자', '버전 관리': '✓ 제한된 기록', '검색': '✓ 전문 텍스트 필터', '거버넌스': '✓ 권한 및 역할' },
            { '도구/형식': '전용 도구(예: PromptQuorum)', '최적 대상': '원클릭 실행 및 지표가 필요한 팀', '버전 관리': '✓ 전체 기록', '검색': '✓ 전문, 태그, 메타데이터', '거버넌스': '✓ 내장 승인 워크플로우' },
          ],
          tableFormat: true,
        },
        maturityLevels: {
          id: 'maturity-levels',
          title: '프롬프트 라이브러리 성숙도 수준',
          content: [
            '조직이 성장함에 따라 프롬프트 라이브러리는 예측 가능한 단계를 거쳐 성숙합니다. 대부분의 팀은 레벨 0에서 시작하여 4~6주 내에 레벨 2를 목표로 해야 합니다.',
          ],
          columns: ['성숙도 수준', '항목 수', '거버넌스', '도구', '팀 규모'],
          rows: [
            { '성숙도 수준': '레벨 0: 임시', '항목 수': '0', '거버넌스': '없음 - 개인 채팅의 프롬프트', '도구': '채팅 기록', '팀 규모': '1명' },
            { '성숙도 수준': '레벨 1: 수집', '항목 수': '5~10', '거버넌스': '공유 문서, 검토 없음', '도구': 'Google Doc / Notion 페이지', '팀 규모': '2~5명' },
            { '성숙도 수준': '레벨 2: 구조화', '항목 수': '10~30', '거버넌스': '초안/승인됨 상태, 지정 담당자', '도구': '필드가 있는 Notion/Airtable', '팀 규모': '5~15명' },
            { '성숙도 수준': '레벨 3: 관리됨', '항목 수': '30~100', '거버넌스': '버전 관리, 월별 검토, 테스트 케이스', '도구': 'Git 저장소 또는 전용 도구', '팀 규모': '15~50명' },
            { '성숙도 수준': '레벨 4: 제품화', '항목 수': '100+', '거버넌스': '승인 워크플로우, 분석, 롤백', '도구': '전용 플랫폼(PromptQuorum, PromptHub)', '팀 규모': '50명+' },
          ],
          tableFormat: true,
        },
        promptQuorumFit: {
          id: 'prompt-quorum-fit',
          title: 'PromptQuorum이 프롬프트 라이브러리를 개선하는 방법',
          content: [
            'PromptQuorum은 프롬프트 저장소와 멀티 모델 실행을 결합합니다. 프롬프트 템플릿을 저장하고 여러 모델에 동시에 전달하여 해당 템플릿에 가장 좋은 결과를 생성한 모델을 기록합니다. 시간이 지남에 따라 각 프롬프트에 지시문뿐만 아니라 어떤 모델이 가장 잘 처리하는지에 대한 경험적 데이터를 포함하는 증거 기반 라이브러리가 구축됩니다.',
          ],
        },
        versioning: {
          id: 'versioning',
          title: '프롬프트를 어떻게 버전 관리하고 품질을 유지합니까?',
          content: [
            '**버전 관리와 기본 테스트 없이는 프롬프트 라이브러리가 서랍처럼 되지만, 가벼운 거버넌스가 있으면 신뢰할 수 있는 내부 제품이 됩니다.**',
            '주요 AI 모델은 주기적으로 지시문 준수 동작을 업데이트하므로, 이전 버전용으로 작성된 프롬프트는 새 버전에 맞게 조정이 필요할 수 있습니다. 실용적인 습관:',
          ],
          items: [
            '프롬프트를 명시적으로 버전 관리하십시오: v1.0 - v1.1과 같은 간단한 스키마를 사용하십시오. 한 줄 변경 메모를 추가하십시오(예: "v1.1 - JSON 출력 형식 추가됨; 날짜에 대한 환각 감소").',
            '중요한 프롬프트에 테스트 케이스를 첨부하십시오: 영향이 큰 프롬프트의 경우 3~5개의 테스트 입력값과 예상 출력 패턴을 유지하십시오. 편집하거나 모델을 변경한 후 해당 테스트를 실행하십시오.',
            '사용량과 피드백을 추적하십시오: 간단한 별점 시스템이나 댓글로도 어떤 프롬프트가 효과적이고 어떤 것이 주의가 필요한지 파악하는 데 도움이 됩니다.',
            '롤백을 계획하십시오: 필요할 때 되돌릴 수 있도록 항상 이전 버전을 유지하십시오.',
            '의도적으로 프롬프트를 폐기하십시오: 프롬프트가 오래되면 폐기됨으로 표시하고 이유를 설명하여 사람들이 사용하지 않도록 하십시오.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '프롬프트 라이브러리를 구축할 때 일반적인 실수는 무엇입니까?',
          mistakes: [
            { mistake: '개인 메모나 개인 채팅 기록에 프롬프트를 저장하기.', problem: '지식이 사일로에 남아 있어 다른 사람이 발견한 것을 찾거나 재사용할 수 없습니다. 새 동료는 같은 프롬프트를 처음부터 다시 구축합니다.', fix: '검색 가능한 공유 시스템(Git 저장소, Airtable, 전용 도구)을 사용하십시오. 개인 메모가 아닌 팀 자산으로 취급하십시오.' },
            { mistake: '입력 플레이스홀더 없이 프롬프트 작성하기(예: 특정 이름이나 숫자 하드코딩).', problem: '프롬프트를 재사용할 수 없어 입력값을 교체하는 대신 매번 전체 프롬프트를 편집해야 합니다.', fix: '항상 동적 부분을 플레이스홀더로 표시하십시오. 프롬프트를 일회용 지시문이 아닌 템플릿으로 만드십시오.' },
            { mistake: '출시 시 거버넌스를 과도하게 설계하기(정교한 승인 워크플로우, 운영 위원회).', problem: '오버헤드가 도입을 방해합니다. 사람들이 라이브러리에 기여하는 대신 개인 프롬프트로 돌아갑니다.', fix: '단순하게 시작하십시오: 초안과 승인됨만. 팀이 5명을 초과하거나 민감한 영역(법무, 인사)에서 필요한 경우에만 프로세스를 추가하십시오.' },
            { mistake: '버전 기록 생략하기 - 변경 메모 없고 이전 버전 저장 없음.', problem: '새 모델이 프롬프트를 망가뜨렸을 때 쉽게 롤백하거나 무엇이 변경되었는지 이해할 수 없습니다.', fix: '버전당 한 줄 변경 메모를 추가하십시오. 이전 버전을 유지하십시오.' },
            { mistake: '오래된 프롬프트를 절대 폐기하지 않기 - 라이브러리에 죽은 무게가 쌓임.', problem: '유용한 프롬프트를 찾기 어렵고, 어떤 버전이 실제로 유지 관리되는지 불명확합니다.', fix: '오래된 프롬프트를 이유와 함께 폐기됨으로 표시하십시오. 기본 보기에서 제거하고 감사 추적을 위해 보관하십시오.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: '지역별 또는 컴플라이언스 고려사항이 있습니까?',
          content: [
            '**데이터 거주 요건과 컴플라이언스는 특히 프롬프트 본문에 민감한 고객 데이터가 플레이스홀더로 포함된 경우 프롬프트를 저장하는 위치와 방법에 영향을 미칩니다.**',
            '지역별 주요 제한사항:',
          ],
          items: [
            'EU / GDPR: 프롬프트 템플릿에 개인 데이터가 포함되거나 참조되는 경우, 스토리지 도구는 GDPR 요건을 준수해야 합니다. Notion, Airtable 및 대부분의 SaaS 플랫폼은 EU 데이터 거주를 제공합니다. 민감한 워크플로우에 활성화하기 전에 확인하십시오.',
            '미국 SOC 2: 공급업체 컴플라이언스가 필요한 기업 고객의 경우 SOC 2 Type II 인증 도구(Notion, Airtable, PromptQuorum 해당)를 선택하십시오.',
            '규제 산업(의료, 금융, 법률): 환자 식별자나 재무 기록을 포함하는 system prompt는 자체 인프라에 있어야 합니다. Git 기반 스토리지 또는 자체 호스팅 옵션을 사용하십시오.',
            '팁: 민감한 프롬프트(PII를 입력으로 허용하는 것)를 범용 프롬프트와 분리하십시오. 민감한 그룹에 더 엄격한 액세스 제어와 더 짧은 보존을 적용하십시오.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            { q: '프롬프트 라이브러리란 무엇입니까?', a: '프롬프트 라이브러리는 메타데이터(입력값, 모델 가이드, 예상 출력, 버전, 담당자)를 갖춘 검증된 프롬프트의 구조화된 모음입니다. 인터넷에서 복사한 프롬프트 목록과 달리, 팀이 일관성과 속도를 위해 유지 관리하고 재사용하는 내부 제품입니다.' },
            { q: '팀이 개인 메모 대신 프롬프트 라이브러리를 언제 사용해야 합니까?', a: '팀원이 3명 이상이고 두 번 이상 사용하는 프롬프트가 2개 이상인 즉시입니다. 개인 메모는 한 사람에게 유효하지만 라이브러리는 팀에 유효합니다.' },
            { q: '처음부터 사용 가능한 프롬프트 라이브러리를 구축하는 데 얼마나 걸립니까?', a: '작게 시작하십시오. 일상 업무에서 실제 프롬프트 5~10개를 수집하여 템플릿으로 정규화하고 공유 시스템에 업로드하는 데 1~2주가 걸립니다.' },
            { q: '팀이 공유 프롬프트 라이브러리에 기여하도록 하려면 어떻게 해야 합니까?', a: '기여를 쉽고 마찰 없이 만드십시오. 직접 3~5개의 대표 프롬프트를 만드십시오. 승인을 가볍게 유지하십시오. 성과를 보여주십시오. 기여를 절대 의무화하지 마십시오.' },
            { q: '프롬프트 라이브러리는 system prompt와 같습니까?', a: '아닙니다. system prompt는 대화의 단일 영구 지시문입니다. 프롬프트 라이브러리는 많은 사용 사례를 위해 팀 전체에 공유되는 프롬프트 모음입니다.' },
            { q: '프롬프트 라이브러리를 얼마나 자주 검토하고 정리해야 합니까?', a: '최소 월 1회입니다. 아무도 사용하지 않는 프롬프트와 통합 기회를 찾으십시오. 미사용 프롬프트를 폐기됨으로 표시하십시오.' },
            { q: '한 모델에서는 작동하지만 다른 모델에서는 작동하지 않는 프롬프트는 어떻게 처리합니까?', a: '메타데이터에서 각 프롬프트에 테스트된 모델을 태그하십시오. 새 모델에서 프롬프트가 실패하면 프롬프트를 모든 곳에서 작동하도록 강제하는 대신 변형을 만드십시오.' },
            { q: '프롬프트 라이브러리와 프롬프트 관리 플랫폼의 차이는 무엇입니까?', a: '프롬프트 라이브러리는 팀이 유지 관리하는 구조화된 프롬프트 레코드 모음입니다. 프롬프트 관리 플랫폼은 라이브러리 개념 위에 실행, 분석, 버전 관리를 추가합니다. 간단한 라이브러리로 시작하십시오.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽기',
          items: [
            '[프롬프트 엔지니어링 기초](/ko/prompt-engineering/fundamentals)',
            '[Few-Shot Prompting: 예시로 프롬프트 개선하기](/ko/prompt-engineering/few-shot-prompting)',
            '[Chain-of-Thought Prompting: 단계별 추론](/ko/prompt-engineering/chain-of-thought)',
            '[PromptQuorum: 간소화된 프롬프트 관리](/ko/features)',
            '[System Prompt vs. User Prompt: 차이점은?](/ko/prompt-engineering/system-prompt-vs-user-prompt)',
            '[프롬프트 테스트 및 최적화](/ko/prompt-engineering/prompt-testing)',
          ],
        },
        sources: {
          id: 'sources',
          title: '출처 및 추가 읽기',
          items: [
            { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
            { title: 'Anthropic: Prompt Engineering Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            { title: 'Lilian Weng: Prompt Engineering (2023)', url: 'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/' },
            { title: 'Google DeepMind: Prompting Strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
          ],
        },
      },
    },
  };
