import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Frameworks',
    title: 'Build Your Own Prompt Framework: 5-Step Design Process',
    seoTitle: 'Build a Custom Prompt Framework: 5-Step Process',
    intro: 'When existing frameworks — CO-STAR, CRAFT, RISEN — don\'t fit your workflow, building a custom prompt framework gives your team a reusable, testable structure. This guide covers when to build vs adopt, the 5-step design process, and a worked example.',
    metaDescription: 'Learn when and how to build a custom prompt framework: 5-step design process from goal to documentation. With worked REPAIR example for support teams.',
    ogDescription: 'Build a custom prompt framework in 5 steps: define goal, identify 3-6 components, test on 10 prompts, refine, document. Cross-model testing with PromptQuorum.',
    twitterDescription: 'Standard frameworks don\'t fit? Build your own in 5 steps. Worked REPAIR example for support teams. 3-6 components, 10-prompt validation.',
    publishDate: '2026-05-02',
    readTime: '12 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'Custom Prompt Framework',
    leadAnswerBlock: '**A custom prompt framework is a structured template you design for a specific use case when standard frameworks (CO-STAR, CRAFT, RISEN) require consistent modification.** Build one when you repeat the same 3+ adaptations across every prompt in a given workflow.',
    quickFacts: [
      'Build a custom framework when you add the same 3+ modifications to every prompt in a workflow',
      '3–6 components: fewer is a technique, more creates friction and gets skipped',
      'Test on 10 real prompts before documenting — frameworks built from theory fail in practice',
      'REPAIR framework reduced onboarding from 2 weeks to 3 days for one support team',
      'Consistency scores improved from 64% to 89% within the first month of using a custom framework',
      'Cross-model test on GPT-4o and Claude 4.6 Sonnet before standardizing',
    ],
    toc: [
      { label: 'Framework vs. Technique', anchor: 'framework_vs_technique' },
      { label: 'When to Build a Custom Framework', anchor: 'when_to_build' },
      { label: 'Building a Custom Framework: 5-Step Process', anchor: 'five_step_process' },
      { label: 'Example: REPAIR Framework for Support Teams', anchor: 'support_example' },
      { label: 'Common Mistakes When Building Custom Frameworks', anchor: 'common_mistakes' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/build-your-own-framework',
      inLanguage: 'en',
      headline: 'Build Your Own Prompt Framework: 5-Step Design Process',
      description: 'Learn when and how to build a custom prompt framework: 5-step design process from goal to documentation. With worked REPAIR example for support teams.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['custom prompt framework', 'build prompt framework', 'prompt engineering framework', 'prompt design', 'team prompting'],
      mentions: [
        { '@type': 'Thing', name: 'CO-STAR' },
        { '@type': 'Thing', name: 'CRAFT' },
        { '@type': 'Thing', name: 'RISEN' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-your-own-framework', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Build a custom prompt framework when you repeatedly add the same 3+ components to every prompt in a workflow. Use 3–6 components, test on 10 real prompts before documenting, and verify cross-model reliability. The REPAIR example shows how a support team cut onboarding from 2 weeks to 3 days.',
        ],
      },
      key_takeaways: {
        title: 'Key Takeaways',
        items: [
          'Build a custom framework when you add the same 3+ components to every prompt in a workflow',
          'Use 3–6 components: fewer is a technique, more creates friction and gets skipped',
          'Test on 10 real prompts before documenting — frameworks built from theory fail in practice',
          'Verify cross-model reliability on GPT-4o and Claude 4.6 Sonnet before standardizing',
          'Store the framework spec in version control with a template and 3 annotated examples',
          'Measure onboarding time and consistency scores to confirm the framework is working',
        ],
      },
      framework_vs_technique: {
        title: 'Framework vs. Technique: What Is the Difference?',
        snippets: [
          { type: 'in-one-sentence', text: 'A prompt framework is a structural template defining which components belong in every prompt; a technique is a pattern applied within one of those components.' },
          { type: 'in-plain-terms', text: 'Think of a framework as the scaffold for every prompt — it sets the sections. A technique is what you do inside one section, like asking the model to reason step-by-step.' },
        ],
        content: [
          '**A prompt framework is a structural template defining which components belong in every prompt; a technique is a pattern applied within one of those components.** Chain-of-thought prompting is a technique — you apply it inside the "task" component of a framework. CO-STAR is a framework — it defines 6 components that structure the entire prompt.',
          'The distinction matters because frameworks and techniques solve different problems. A framework solves consistency: everyone on your team produces prompts with the same structure. A technique solves capability: it changes how the model approaches a specific step in the reasoning process.',
          'Use an existing framework (CO-STAR, CRAFT, RISEN, RTF) when your task type matches what the framework was designed for. Build a custom one when you repeatedly add the same domain-specific components that existing frameworks don\'t include.',
        ],
        callouts: [
          { type: 'insight', label: 'Key distinction', text: 'Frameworks solve consistency across the team. Techniques solve capability within a single prompt step. Both are necessary; neither replaces the other.' },
        ],
      },
      when_to_build: {
        title: 'When to Build a Custom Prompt Framework',
        content: [
          '**Build a custom framework when you apply the same 3+ modifications to a standard framework for every prompt in a given workflow.** If you always prepend a compliance anchor, append a citation requirement, and inject a terminology glossary — those are components, not ad-hoc additions.',
          'Signs you need a custom framework:',
        ],
        items: [
          'You add the same fields to every prompt that no standard framework includes',
          'Your team produces inconsistent prompts despite using CO-STAR or CRAFT',
          'New team members take more than a week to write acceptable prompts',
          'Your prompts average more than 600 words because you keep explaining the same context',
          'You\'ve created a "base prompt" that everyone copies and adapts manually',
        ],
      },
      when_to_build_part2: {
        content: [
          'Signs you should stick with existing frameworks:',
        ],
        items: [
          'Your prompts cover diverse, unrelated use cases (no consistent pattern)',
          'You write fewer than 10 prompts per week in this workflow',
          'An existing framework already fits with minor tweaks',
          'Your team has fewer than 3 people writing prompts',
        ],
      },
      five_step_process: {
        title: 'Building a Custom Prompt Framework: 5-Step Process',
        content: [
          '**The 5-step process: define the goal → identify components → test on 10 prompts → refine → document.** Each step has a clear exit criterion. Don\'t skip to step 5 — documentation of an untested framework creates false confidence.',
        ],
        numberedItems: [
          { title: 'Define the goal in one sentence', whyItMatters: 'Write exactly what output this framework must reliably produce. Example: "Generate a first-response email to a support ticket that classifies severity, references our policy, and proposes a resolution path." This sentence governs every component decision.' },
          { title: 'Identify 3–6 required components', whyItMatters: 'List the input elements every prompt in this workflow needs. Start by writing 5 prompts from memory, then extract what they share. Common additions beyond standard frameworks: policy anchor, persona constraint, domain vocabulary, output schema, escalation condition.' },
          { title: 'Apply to 10 real prompts', whyItMatters: 'Use actual prompts from your workflow — not invented examples. Score each output: does it meet the goal? Which components were missing? Which were ignored? Run the same prompts on GPT-4o and Claude 4.6 Sonnet via PromptQuorum to confirm cross-model reliability.' },
          { title: 'Refine the component list', whyItMatters: 'Remove components that appeared in fewer than 7 of 10 prompts — they belong in specific prompts, not the framework. Add components you improvised in 5+ cases. Rerun the 10-prompt test with the revised framework before moving to step 5.' },
          { title: 'Document and standardize', whyItMatters: 'Write a one-page spec: framework name (acronym optional), definition of each component, a fill-in template with placeholders, and 3 annotated example prompts. Store in version control (Git or PromptHub). Distribute the spec before asking anyone to use the framework.' },
        ],
        callouts: [
          { type: 'warning', label: 'Do not skip step 3', text: 'Frameworks built without testing 10 real prompts almost always include components that sound important but get skipped under time pressure. Test first, document second.' },
        ],
      },
      support_example: {
        title: 'Example: Building a Framework for a Support Team',
        content: [
          '**A support team\'s custom framework — named REPAIR — consists of 5 components: Role, Escalation condition, Policy anchor, Action path, Intent confirmation.** Standard frameworks like CO-STAR and CRAFT don\'t include escalation logic or policy anchoring, which every support prompt requires.',
          'The team started by noticing they manually added the same elements to every CO-STAR prompt: the agent\'s specific role tier, the applicable SLA policy, and a conditional escalation path if the issue exceeded tier-1 scope. After 3 weeks, those additions were formalized as framework components.',
          'The resulting REPAIR template:',
        ],
        items: [
          'R (Role): "You are a tier-1 support agent for [Product]. Your authority covers [scope]."',
          'E (Escalation): "If the issue involves [condition], escalate to tier-2. Do not attempt resolution."',
          'P (Policy anchor): "Apply policy [ID] for [issue type]. Quote the relevant clause in your response."',
          'A (Action path): "Classify the issue, confirm understanding, propose resolution, request confirmation."',
          'I (Intent confirmation): "End every response with: \'Does this address your issue, or would you like me to escalate?\'"',
        ],
      },
      support_example_part2: {
        content: [
          'Time to onboard new agents dropped from 2 weeks to 3 days after the REPAIR framework was documented and added to the team\'s prompt library. Prompt consistency scores (measured via Braintrust evaluation) improved from 64% to 89% within the first month.',
          'Use a custom framework when you can name the pattern clearly and show it applies across your workflow. Avoid naming a framework just to have one — an unnamed, consistent 4-component structure you use daily is a framework even without an acronym.',
        ],
        callouts: [
          { type: 'tip', label: 'Measure the impact', text: 'Track onboarding time and consistency scores before and after deploying a custom framework. If neither improves within 4 weeks, the framework needs refinement — not more documentation.' },
        ],
      },
      common_mistakes: {
        title: 'Common Mistakes When Building Custom Frameworks',
        content: [
          '**The most common mistake is building a framework before testing 20+ real prompts manually.** Frameworks built from theory rather than observed patterns include components that sound important but get skipped in practice — which trains the team to ignore framework sections.',
        ],
        mistakes: [
          {
            mistake: 'Too many components (7+)',
            problem: 'Writers skip sections under time pressure, breaking consistency.',
            fix: 'Limit to 6 components. Move domain-specific fields to prompt-type extensions, not the core framework.',
          },
          {
            mistake: 'Copying a standard framework and renaming it',
            problem: 'A renamed CO-STAR isn\'t a custom framework — it\'s CO-STAR with extra branding overhead.',
            fix: 'Only formalize a framework when you have at least 2 components that don\'t exist in any standard framework.',
          },
          {
            mistake: 'No test set before documenting',
            problem: 'You document a framework that doesn\'t survive contact with real prompts.',
            fix: 'Run 10 real prompts through the draft framework before writing the spec. Adjust based on what breaks.',
          },
          {
            mistake: 'Not testing across models',
            problem: 'A framework that works on GPT-4o may produce different output on Claude 4.6 Sonnet if it relies on implicit GPT-specific behaviors.',
            fix: 'Test on at least 2 models via PromptQuorum. Document any model-specific adjustments in the framework spec.',
          },
          {
            mistake: 'No version control',
            problem: 'The framework drifts as team members edit it informally, creating inconsistent versions.',
            fix: 'Store the framework spec in Git or PromptHub with a version number. Require PR review for any component change.',
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is a prompt framework?', a: 'A prompt framework is a structural template that defines which components to include in a prompt and in what order. Examples include CO-STAR (Context, Objective, Style, Tone, Audience, Response) and CRAFT (Context, Role, Action, Format, Target). Frameworks improve consistency and reduce the time spent writing prompts from scratch.' },
          { q: 'When should I build a custom framework instead of using CO-STAR or CRAFT?', a: 'Build a custom framework when you modify an existing one in the same 3+ ways for every prompt in a workflow. If you always add a policy constraint, a persona anchor, and a domain vocabulary list to CO-STAR — those additions should become first-class components of your own framework, not manual additions.' },
          { q: 'How many components should a custom prompt framework have?', a: 'Use 3–6 components. Fewer than 3 is a technique, not a framework. More than 6 creates friction — prompt writers skip sections, defeating the purpose. If you need more than 6, split into two specialized frameworks for different task types.' },
          { q: 'How do I test if my custom framework is working?', a: 'Apply the framework to 10 representative prompts and score outputs against 3 criteria: task completion, format compliance, and quality consistency. A working framework should score 8/10 or better on all three. Use PromptQuorum to test the same framework prompt across GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro to confirm it works across models.' },
          { q: 'Can a custom framework work across different AI models?', a: 'Yes, if designed correctly. Model-agnostic frameworks avoid model-specific syntax and rely on universal components (task definition, constraints, output format). Test your framework on at least GPT-4o and Claude 4.6 Sonnet before finalizing — if it needs significant rewording per model, simplify the component definitions.' },
          { q: 'How do I name a custom prompt framework?', a: 'Naming with an acronym (like REPAIR) makes it memorable and helps onboarding. Choose letters that map to the 3-6 components in order. The acronym test: can a new team member remember all components from the name alone? If not, simplify the component list.' },
          { q: 'How do I version a custom framework?', a: 'Store each framework version in a dated file (e.g., repair-v1-2026-05.md) in your prompt library directory. Tag breaking changes (component added/removed) as major versions. Tag refinements (definition updates) as minor versions. Document the reason for each change alongside the version file.' },
          { q: 'Can I combine multiple existing frameworks?', a: 'You can combine components from CO-STAR, CRAFT, and RISEN — but treat the result as a new custom framework, not a hybrid. Name it, document it, and test it as if it were original. Combining without formalizing just creates an undocumented ad-hoc pattern.' },
        ],
      },
      related_reading: {
        title: 'Related Reading',
        items: [
          { title: 'CO-STAR Framework: Components and When to Use It', url: '/prompt-engineering/co-star-framework' },
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'RISEN Framework: Role, Instructions, Steps, End Goal, Narrowing', url: '/prompt-engineering/risen-framework' },
          { title: 'Which Prompt Framework Should You Use?', url: '/prompt-engineering/which-framework-to-use' },
          { title: 'Prompt Framework Selection for Teams', url: '/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Testing', url: 'https://www.promptquorum.com/features' },
        ],
      },

      faqSection: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is the difference between a prompt technique and a prompt framework?', a: 'A technique is a single instruction or method (e.g., "think step by step"). A framework is a reusable structure with 3+ components that define how prompts should be built. Frameworks are repeatable; techniques are ad-hoc.' },
          { q: 'When should I build a custom framework instead of using CO-STAR, CRAFT, or RISEN?', a: 'Build one when you repeatedly apply the same 3+ modifications to an existing framework for every prompt in a workflow. If you always add a policy constraint, domain terminology, and output schema to CO-STAR, those should be components of your own framework.' },
          { q: 'Can a custom framework work across different AI models?', a: 'Yes, if designed correctly. Avoid model-specific syntax and build around universal components (task, constraints, output format). Test on GPT-4o and Claude before finalizing. If the framework needs rewording per model, simplify it.' },
          { q: 'How many components should my custom framework have?', a: 'Use 3–6 components. Fewer than 3 is a technique, not a framework. More than 6 creates friction and writers skip sections. If you need more, split into two specialized frameworks for different task types.' },
          { q: 'How do I test whether my custom framework actually works?', a: 'Apply it to 10 representative prompts from your workflow. Score outputs against three criteria: (1) task completion, (2) format compliance, (3) quality consistency. A working framework scores 8/10 or better on all three. Test across multiple models using PromptQuorum.' },
          { q: 'How should I name a custom framework?', a: 'Use an acronym that maps to your components in order (like REPAIR). The acronym test: can a new team member recall all components from the name alone? If not, simplify your component list.' },
          { q: 'Can I combine components from CO-STAR, CRAFT, and RISEN to build my own framework?', a: 'Yes, but treat it as a new framework, not a hybrid. Name it, document it, test it, and store it in version control. Combining without formalizing just creates an undocumented ad-hoc pattern.' },
          { q: 'How do I version a custom framework?', a: 'Store each version in a dated file (e.g., repair-v1-2026-05.md) in your prompt library. Tag breaking changes (component added/removed) as major versions. Tag refinements (definition updates) as minor versions. Document the reason for each change.' },
          { q: 'What should I document for my custom framework?', a: 'Write a one-page spec: (1) framework name and goal, (2) 3–6 component definitions with examples, (3) a fill-in template, (4) 3 annotated full example prompts using the framework. Keep it in version control alongside your prompt library.' },
          { q: 'How do I get my team to use a custom framework I\'ve created?', a: 'Start with a 30-minute walkthrough using real task examples. Test together on 2–3 prompts. Create a shareable one-page spec. Track compliance and impact metrics (task success rate, output consistency) for the first month. Iterate based on feedback.' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Frameworks',
    title: 'Eigenes Prompt-Framework erstellen: 5-Schritte-Prozess (2026)',
    seoTitle: 'Eigenes Prompt-Framework entwickeln: 5-Schritte-Anleitung',
    intro: 'Wenn Standardframeworks wie CO-STAR, CRAFT und RISEN nicht zu Ihrem Workflow passen, liefert ein maßgeschneidertes Prompt-Framework eine wiederverwendbare, testbare Struktur. Diese Anleitung erklärt, wann ein eigenes Framework sinnvoll ist, wie der 5-Schritte-Prozess funktioniert und zeigt ein konkretes Praxisbeispiel.',
    metaDescription: 'Eigenes Prompt-Framework in 5 Schritten erstellen: Ziel definieren, 3–6 Komponenten identifizieren, an 10 Prompts testen, verfeinern, dokumentieren. Mit REPAIR-Beispiel für Support-Teams.',
    ogDescription: 'Eigenes Prompt-Framework in 5 Schritten: Ziel definieren, 3–6 Komponenten identifizieren, an 10 Prompts testen, verfeinern, dokumentieren. Modellübergreifende Tests mit PromptQuorum.',
    twitterDescription: 'Standardframeworks passen nicht? Eigenes Framework in 5 Schritten. REPAIR-Beispiel für Support-Teams. 3–6 Komponenten, 10-Prompt-Validierung.',
    publishDate: '2026-05-02',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'Eigenes Prompt-Framework',
    leadAnswerBlock: '**Ein maßgeschneidertes Prompt-Framework ist eine strukturierte Vorlage, die Sie für einen spezifischen Anwendungsfall entwickeln, wenn Standardframeworks (CO-STAR, CRAFT, RISEN) konsistente Anpassungen erfordern.** Erstellen Sie eines, wenn Sie dieselben 3+ Modifikationen bei jedem Prompt in einem bestimmten Workflow vornehmen.',
    quickFacts: [
      'Eigenes Framework erstellen, wenn dieselben 3+ Modifikationen bei jedem Prompt im Workflow vorgenommen werden',
      '3–6 Komponenten: weniger ist eine Technik, mehr erzeugt Reibung',
      'An 10 realen Prompts testen, bevor dokumentiert wird',
      'REPAIR-Framework reduzierte das Onboarding von 2 Wochen auf 3 Tage',
      'Konsistenz-Scores verbesserten sich von 64 % auf 89 % innerhalb des ersten Monats',
      'Modellübergreifend auf GPT-4o und Claude 4.6 Sonnet testen vor der Standardisierung',
    ],
    toc: [
      { label: 'Framework vs. Technik', anchor: 'framework_vs_technique' },
      { label: 'Wann ein eigenes Framework sinnvoll ist', anchor: 'when_to_build' },
      { label: 'Eigenes Framework in 5 Schritten', anchor: 'five_step_process' },
      { label: 'Beispiel: REPAIR-Framework für Support-Teams', anchor: 'support_example' },
      { label: 'Häufige Fehler', anchor: 'common_mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Weiterführende Artikel', anchor: 'related_reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/de/prompt-engineering/build-your-own-framework',
      inLanguage: 'de',
      headline: 'Eigenes Prompt-Framework erstellen: 5-Schritte-Prozess (2026)',
      description: 'Eigenes Prompt-Framework in 5 Schritten erstellen: Ziel definieren, 3–6 Komponenten identifizieren, an 10 Prompts testen, verfeinern, dokumentieren.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['eigenes Prompt-Framework', 'Prompt-Framework erstellen', 'Prompt Engineering Framework', 'Prompt-Design', 'Team-Prompting'],
      mentions: [
        { '@type': 'Thing', name: 'CO-STAR' },
        { '@type': 'Thing', name: 'CRAFT' },
        { '@type': 'Thing', name: 'RISEN' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-your-own-framework', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Entwickeln Sie ein eigenes Prompt-Framework, wenn Sie dieselben 3+ Komponenten bei jedem Prompt in einem Workflow hinzufügen. Verwenden Sie 3–6 Komponenten, testen Sie an 10 realen Prompts vor der Dokumentation und überprüfen Sie die modellübergreifende Zuverlässigkeit. Das REPAIR-Beispiel zeigt, wie ein Support-Team das Onboarding von 2 Wochen auf 3 Tage reduziert hat.',
        ],
      },
      key_takeaways: {
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Entwickeln Sie ein eigenes Framework, wenn Sie dieselben 3+ Komponenten bei jedem Prompt in einem Workflow hinzufügen',
          'Verwenden Sie 3–6 Komponenten: weniger ist eine Technik, mehr erzeugt Reibung',
          'Testen Sie an 10 realen Prompts, bevor Sie dokumentieren',
          'Überprüfen Sie die modellübergreifende Zuverlässigkeit auf GPT-4o und Claude 4.6 Sonnet',
          'Speichern Sie die Framework-Spezifikation in der Versionskontrolle mit einer Vorlage und 3 kommentierten Beispielen',
        ],
      },
      framework_vs_technique: {
        title: 'Framework vs. Technik: Was ist der Unterschied?',
        snippets: [
          { type: 'in-one-sentence', text: 'Ein Prompt-Framework ist eine strukturelle Vorlage, die festlegt, welche Komponenten in jeden Prompt gehören; eine Technik ist ein Muster, das innerhalb einer dieser Komponenten angewendet wird.' },
          { type: 'in-plain-terms', text: 'Das Framework ist das Gerüst für jeden Prompt — es legt die Abschnitte fest. Eine Technik ist, was Sie innerhalb eines Abschnitts tun, zum Beispiel das Modell schrittweise denken lassen.' },
        ],
        content: [
          '**Ein Prompt-Framework ist eine strukturelle Vorlage, die festlegt, welche Komponenten in jeden Prompt gehören; eine Technik ist ein Muster, das innerhalb einer dieser Komponenten angewendet wird.** Chain-of-Thought-Prompting ist eine Technik — Sie wenden sie innerhalb der „Aufgabe"-Komponente eines Frameworks an. CO-STAR ist ein Framework — es definiert 6 Komponenten, die den gesamten Prompt strukturieren.',
          'Die Unterscheidung ist wichtig, weil Frameworks und Techniken verschiedene Probleme lösen. Ein Framework löst Konsistenz: Alle in Ihrem Team erstellen Prompts mit derselben Struktur. Eine Technik löst Fähigkeit: Sie ändert, wie das Modell einen bestimmten Schritt im Denkprozess angeht.',
          'Verwenden Sie ein vorhandenes Framework (CO-STAR, CRAFT, RISEN, RTF), wenn Ihr Aufgabentyp zu dem passt, wofür das Framework entwickelt wurde. Entwickeln Sie ein eigenes, wenn Sie immer wieder dieselben domänenspezifischen Komponenten hinzufügen, die vorhandene Frameworks nicht enthalten.',
        ],
        callouts: [
          { type: 'insight', label: 'Kernunterschied', text: 'Frameworks lösen Konsistenz im Team. Techniken lösen Fähigkeit in einem einzelnen Prompt-Schritt. Beides ist notwendig; keines ersetzt das andere.' },
        ],
      },
      when_to_build: {
        title: 'Wann sollten Sie ein eigenes Prompt-Framework entwickeln?',
        content: [
          '**Entwickeln Sie ein eigenes Framework, wenn Sie für jeden Prompt in einem Workflow dieselben 3+ Modifikationen an einem Standardframework vornehmen.** Wenn Sie immer einen Compliance-Anker ergänzen, eine Zitierpflicht anhängen und ein Fachvokabular einpflegen — sind das Komponenten, keine Ad-hoc-Ergänzungen.',
          'Anzeichen, dass Sie ein eigenes Framework benötigen:',
        ],
        items: [
          'Sie fügen jedem Prompt dieselben Felder hinzu, die kein Standardframework enthält',
          'Ihr Team produziert inkonsistente Prompts, obwohl CO-STAR oder CRAFT verwendet wird',
          'Neue Teammitglieder benötigen mehr als eine Woche, um akzeptable Prompts zu schreiben',
          'Ihre Prompts umfassen im Schnitt mehr als 600 Wörter, weil Sie immer wieder denselben Kontext erklären',
          'Sie haben einen „Basis-Prompt" erstellt, den jeder kopiert und manuell anpasst',
        ],
      },
      five_step_process: {
        title: 'Eigenes Prompt-Framework in 5 Schritten entwickeln',
        content: [
          '**Der 5-Schritte-Prozess: Ziel definieren → Komponenten identifizieren → an 10 Prompts testen → verfeinern → dokumentieren.** Jeder Schritt hat ein klares Abschlusskriterium. Überspringen Sie nicht zu Schritt 5 — die Dokumentation eines ungetesteten Frameworks erzeugt falsches Vertrauen.',
        ],
        numberedItems: [
          { title: 'Ziel in einem Satz definieren', whyItMatters: 'Schreiben Sie genau auf, welche Ausgabe dieses Framework zuverlässig erzeugen soll. Dieser Satz bestimmt jede Komponentenentscheidung.' },
          { title: '3–6 erforderliche Komponenten identifizieren', whyItMatters: 'Listen Sie die Eingabeelemente auf, die jeder Prompt in diesem Workflow benötigt. Schreiben Sie zunächst 5 Prompts aus dem Gedächtnis und extrahieren Sie, was sie gemeinsam haben.' },
          { title: 'An 10 realen Prompts anwenden', whyItMatters: 'Verwenden Sie tatsächliche Prompts aus Ihrem Workflow — keine erfundenen Beispiele. Bewerten Sie jede Ausgabe: Erfüllt sie das Ziel? Welche Komponenten fehlten? Testen Sie mit PromptQuorum auf GPT-4o und Claude 4.6 Sonnet.' },
          { title: 'Komponentenliste verfeinern', whyItMatters: 'Entfernen Sie Komponenten, die in weniger als 7 von 10 Prompts vorkamen. Fügen Sie Komponenten hinzu, die Sie in 5+ Fällen ad hoc ergänzt haben. Führen Sie den 10-Prompt-Test mit dem überarbeiteten Framework erneut durch.' },
          { title: 'Dokumentieren und standardisieren', whyItMatters: 'Schreiben Sie eine einseitige Spezifikation: Framework-Name, Definition jeder Komponente, Ausfüllvorlage mit Platzhaltern und 3 kommentierte Beispiel-Prompts. Speichern Sie diese in der Versionskontrolle (Git oder PromptHub).' },
        ],
        callouts: [
          { type: 'warning', label: 'Schritt 3 nicht überspringen', text: 'Ohne den Test an 10 realen Prompts enthält das Framework fast immer Komponenten, die unter Zeitdruck übersprungen werden. Erst testen, dann dokumentieren.' },
        ],
      },
      common_mistakes: {
        title: 'Häufige Fehler beim Entwickeln eigener Frameworks',
        content: [
          '**Der häufigste Fehler ist, ein Framework zu entwickeln, bevor 20+ reale Prompts manuell getestet wurden.** Frameworks, die aus der Theorie heraus entwickelt werden, enthalten Komponenten, die wichtig klingen, in der Praxis aber übersprungen werden.',
        ],
        mistakes: [
          { mistake: 'Zu viele Komponenten (7+)', problem: 'Autoren überspringen Abschnitte unter Zeitdruck und brechen die Konsistenz.', fix: 'Begrenzen Sie auf 6 Komponenten. Verschieben Sie domänenspezifische Felder in Erweiterungen, nicht in das Kern-Framework.' },
          { mistake: 'Ein Standardframework kopieren und umbenennen', problem: 'Ein umbenanntes CO-STAR ist kein eigenes Framework — es ist CO-STAR mit zusätzlichem Branding-Aufwand.', fix: 'Formalisieren Sie ein Framework nur, wenn Sie mindestens 2 Komponenten haben, die in keinem Standardframework existieren.' },
          { mistake: 'Kein Testset vor der Dokumentation', problem: 'Sie dokumentieren ein Framework, das echten Prompts nicht standhält.', fix: 'Führen Sie 10 reale Prompts durch den Entwurf, bevor Sie die Spezifikation schreiben.' },
        ],
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist ein Prompt-Framework?', a: 'Ein Prompt-Framework ist eine strukturierte Vorlage, die festlegt, welche Komponenten ein Prompt enthalten soll und in welcher Reihenfolge. Beispiele sind CO-STAR und CRAFT. Frameworks verbessern die Konsistenz und reduzieren den Aufwand beim Erstellen neuer Prompts.' },
          { q: 'Wann sollte ich ein eigenes Framework entwickeln?', a: 'Entwickeln Sie ein eigenes Framework, wenn Sie für jeden Prompt in einem Workflow dieselben 3+ Modifikationen an einem Standardframework vornehmen.' },
          { q: 'Wie viele Komponenten sollte ein Framework haben?', a: 'Verwenden Sie 3–6 Komponenten. Weniger als 3 ist eine Technik. Mehr als 6 erzeugt Reibung.' },
          { q: 'Wie benenne ich ein eigenes Prompt-Framework?', a: 'Ein Akronym (wie REPAIR) macht das Framework einprägsam. Wählen Sie Buchstaben, die den Komponenten in der richtigen Reihenfolge zugeordnet sind. Test: Kann ein neues Teammitglied alle Komponenten allein aus dem Namen ableiten?' },
          { q: 'Wie versioniere ich ein eigenes Framework?', a: 'Speichern Sie jede Version in einer datierten Datei (z. B. repair-v1-2026-05.md). Grundlegende Änderungen = Hauptversion, Verfeinerungen = Nebenversion. Dokumentieren Sie den Änderungsgrund.' },
          { q: 'Kann ich mehrere Frameworks kombinieren?', a: 'Ja, behandeln Sie das Ergebnis aber als neues eigenes Framework. Benennen, dokumentieren und testen Sie es wie ein Original. Kombination ohne Formalisierung erzeugt nur ein undokumentiertes Ad-hoc-Muster.' },
        ],
      },
      related_reading: {
        title: 'Weiterführende Artikel',
        items: [
          { title: 'CO-STAR Framework: Components and When to Use It', url: '/prompt-engineering/co-star-framework' },
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'RISEN Framework: Role, Instructions, Steps, End Goal, Narrowing', url: '/prompt-engineering/risen-framework' },
          { title: 'Which Prompt Framework Should You Use?', url: '/prompt-engineering/which-framework-to-use' },
          { title: 'Prompt Framework Selection for Teams', url: '/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Testing', url: 'https://www.promptquorum.com/features' },
        ],
      },

      faqSection: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist der Unterschied zwischen einer Prompt-Technik und einem Prompt-Framework?', a: 'Eine Technik ist eine einzelne Anweisung oder Methode (z. B. „denke Schritt für Schritt"). Ein Framework ist eine wiederverwendbare Struktur mit 3+ Komponenten, die definiert, wie Prompts aufgebaut sein sollten. Frameworks sind wiederholbar; Techniken sind ad hoc.' },
          { q: 'Wann sollte ich ein eigenes Framework statt CO-STAR, CRAFT oder RISEN verwenden?', a: 'Erstellen Sie eines, wenn Sie wiederholt die gleichen 3+ Modifikationen an einem existierenden Framework für jeden Prompt in einem Workflow vornehmen. Wenn Sie immer eine Compliance-Einschränkung, Domain-Terminologie und Output-Schema zu CO-STAR hinzufügen, sollten diese Komponenten Ihres eigenen Frameworks werden.' },
          { q: 'Kann ein eigenes Framework über verschiedene KI-Modelle hinweg funktionieren?', a: 'Ja, wenn es richtig gestaltet ist. Vermeiden Sie modellspezifische Syntax und bauen Sie auf universelle Komponenten (Aufgabe, Einschränkungen, Output-Format). Testen Sie auf GPT-4o und Claude, bevor Sie finalisieren. Wenn das Framework pro Modell Umformulierungen benötigt, vereinfachen Sie es.' },
          { q: 'Wie viele Komponenten sollte mein eigenes Framework haben?', a: 'Verwenden Sie 3–6 Komponenten. Weniger als 3 ist eine Technik, kein Framework. Mehr als 6 erzeugt Reibung und Autoren überspringen Abschnitte. Wenn Sie mehr brauchen, teilen Sie in zwei spezialisierte Frameworks für verschiedene Aufgabentypen auf.' },
          { q: 'Wie teste ich, ob mein eigenes Framework tatsächlich funktioniert?', a: 'Wenden Sie es auf 10 repräsentative Prompts aus Ihrem Workflow an. Bewerten Sie Ausgaben nach drei Kriterien: (1) Aufgabenerledigung, (2) Format-Einhaltung, (3) Qualitätskonsistenz. Ein funktionierendes Framework erzielte 8/10 oder besser bei allen drei. Testen Sie über mehrere Modelle mit PromptQuorum.' },
          { q: 'Wie sollte ich mein eigenes Framework benennen?', a: 'Verwenden Sie ein Akronym, das Ihren Komponenten in Reihenfolge zugeordnet ist (wie REPAIR). Der Akronym-Test: Kann ein neues Teammitglied alle Komponenten allein aus dem Namen abrufen? Wenn nicht, vereinfachen Sie Ihre Komponentenliste.' },
          { q: 'Kann ich Komponenten von CO-STAR, CRAFT und RISEN kombinieren?', a: 'Ja, behandeln Sie es aber als neues Framework, nicht als Hybrid. Benennen Sie es, dokumentieren Sie es, testen Sie es und speichern Sie es in Versionskontrolle. Kombinieren ohne Formalisierung schafft nur ein undokumentiertes ad-hoc-Muster.' },
          { q: 'Wie versioniere ich ein eigenes Framework?', a: 'Speichern Sie jede Version in einer datierten Datei (z. B. repair-v1-2026-05.md) in Ihrer Prompt-Bibliothek. Markieren Sie Breaking Changes (Komponente hinzugefügt/entfernt) als Hauptversionen. Markieren Sie Verfeinerungen (Definitionen aktualisiert) als Nebenversionen. Dokumentieren Sie den Grund für jede Änderung.' },
          { q: 'Was sollte ich für mein eigenes Framework dokumentieren?', a: 'Schreiben Sie eine einseitige Spezifikation: (1) Framework-Name und Ziel, (2) 3–6 Komponentendefinitionen mit Beispielen, (3) eine Ausfüllvorlage, (4) 3 annotierte vollständige Beispielprompts mit dem Framework. Halten Sie es in Versionskontrolle neben Ihrer Prompt-Bibliothek.' },
          { q: 'Wie bekomme ich mein Team, mein eigenes Framework zu verwenden?', a: 'Beginnen Sie mit einer 30-Minuten-Anleitung mit echten Aufgabenbeispielen. Testen Sie zusammen an 2–3 Prompts. Erstellen Sie eine teilbare einseitige Spezifikation. Verfolgen Sie Compliance und Impact Metrics (Task-Erfolgsrate, Output-Konsistenz) für den ersten Monat. Iterieren Sie basierend auf Feedback.' },
          ],
        },
    },
  },

  es: {
    freshness_tier: 'evergreen',
    theme: 'Frameworks',
    title: 'Construye tu propio framework de prompts: proceso de 5 pasos',
    seoTitle: 'Crear un framework de prompts personalizado: 5 pasos',
    intro: 'Cuando los frameworks existentes — CO-STAR, CRAFT, RISEN — no se adaptan a tu flujo de trabajo, construir un framework de prompts personalizado le da a tu equipo una estructura reutilizable y testeable. Esta guía cubre cuándo construir vs adoptar, el proceso de 5 pasos y un ejemplo práctico.',
    metaDescription: 'Aprende cuándo y cómo crear un framework de prompts propio: proceso de 5 pasos del objetivo a la documentación. Con el ejemplo REPAIR para soporte.',
    ogDescription: 'Construye un framework de prompts personalizado en 5 pasos: define el objetivo, identifica 3-6 componentes, prueba en 10 prompts, refina, documenta. Pruebas entre modelos con PromptQuorum.',
    twitterDescription: '¿Los frameworks estándar no encajan? Construye el tuyo en 5 pasos. Ejemplo REPAIR para equipos de soporte. 3-6 componentes, validación con 10 prompts.',
    publishDate: '2026-05-02',
    readTime: '12 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'Framework de Prompts Personalizado',
    leadAnswerBlock: '**Un framework de prompts personalizado es una plantilla estructurada que diseñas para un caso de uso específico cuando los frameworks estándar (CO-STAR, CRAFT, RISEN) requieren modificaciones constantes.** Constrúyelo cuando repites las mismas 3 o más adaptaciones en cada prompt de un flujo de trabajo determinado.',
    quickFacts: [
      'Construye un framework personalizado cuando añades las mismas 3+ modificaciones a cada prompt de un flujo de trabajo',
      '3-6 componentes: menos es una técnica, más genera fricción y se omite',
      'Prueba en 10 prompts reales antes de documentar — los frameworks construidos desde la teoría fallan en la práctica',
      'El framework REPAIR redujo el onboarding de 2 semanas a 3 días para un equipo de soporte',
      'Las puntuaciones de consistencia mejoraron del 64% al 89% en el primer mes',
      'Prueba entre modelos en GPT-4o y Claude 4.6 Sonnet antes de estandarizar',
    ],
    toc: [
      { label: 'Framework vs. Técnica', anchor: 'framework_vs_technique' },
      { label: 'Cuándo construir un framework personalizado', anchor: 'when_to_build' },
      { label: 'Construir un framework personalizado: proceso de 5 pasos', anchor: 'five_step_process' },
      { label: 'Ejemplo: Framework REPAIR para equipos de soporte', anchor: 'support_example' },
      { label: 'Errores comunes al construir frameworks personalizados', anchor: 'common_mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Lecturas relacionadas', anchor: 'related_reading' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/es/prompt-engineering/build-your-own-framework?lang=es',
      inLanguage: 'es',
      headline: 'Construye tu propio framework de prompts: proceso de 5 pasos',
      description: 'Aprende cuándo y cómo construir un framework de prompts personalizado: proceso de 5 pasos desde el objetivo hasta la documentación. Con el ejemplo REPAIR para equipos de soporte.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['framework de prompts personalizado', 'construir framework de prompts', 'framework de prompt engineering', 'diseño de prompts', 'prompts en equipo'],
      mentions: [
        { '@type': 'Thing', name: 'CO-STAR' },
        { '@type': 'Thing', name: 'CRAFT' },
        { '@type': 'Thing', name: 'RISEN' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-your-own-framework', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Construye un framework de prompts personalizado cuando añades repetidamente los mismos 3+ componentes a cada prompt de un flujo de trabajo. Usa 3-6 componentes, prueba en 10 prompts reales antes de documentar y verifica la fiabilidad entre modelos. El ejemplo REPAIR muestra cómo un equipo de soporte redujo el onboarding de 2 semanas a 3 días.',
        ],
      },
      key_takeaways: {
        title: 'Puntos clave',
        items: [
          'Construye un framework personalizado cuando añades los mismos 3+ componentes a cada prompt de un flujo de trabajo',
          'Usa 3-6 componentes: menos es una técnica, más genera fricción',
          'Prueba en 10 prompts reales antes de documentar',
          'Verifica la fiabilidad entre modelos en GPT-4o y Claude 4.6 Sonnet antes de estandarizar',
          'Guarda la especificación del framework en control de versiones con una plantilla y 3 ejemplos anotados',
          'Mide el tiempo de onboarding y las puntuaciones de consistencia para confirmar que el framework funciona',
        ],
      },
      framework_vs_technique: {
        title: 'Framework vs. Técnica: ¿Cuál es la diferencia?',
        snippets: [
          { type: 'in-one-sentence', text: 'Un framework de prompts es una plantilla estructural que define qué componentes pertenecen a cada prompt; una técnica es un patrón aplicado dentro de uno de esos componentes.' },
          { type: 'in-plain-terms', text: 'Piensa en un framework como el andamiaje de cada prompt — establece las secciones. Una técnica es lo que haces dentro de una sección, como pedir al modelo que razone paso a paso.' },
        ],
        content: [
          '**Un framework de prompts es una plantilla estructural que define qué componentes pertenecen a cada prompt; una técnica es un patrón aplicado dentro de uno de esos componentes.** El chain-of-thought prompting es una técnica — lo aplicas dentro del componente "tarea" de un framework. CO-STAR es un framework — define 6 componentes que estructuran todo el prompt.',
          'La distinción importa porque frameworks y técnicas resuelven problemas distintos. Un framework resuelve la consistencia: todos en tu equipo producen prompts con la misma estructura. Una técnica resuelve la capacidad: cambia cómo el modelo aborda un paso específico en el proceso de razonamiento.',
          'Usa un framework existente (CO-STAR, CRAFT, RISEN, RTF) cuando tu tipo de tarea coincide con para qué fue diseñado el framework. Construye uno personalizado cuando añades repetidamente los mismos componentes específicos del dominio que los frameworks existentes no incluyen.',
        ],
        callouts: [
          { type: 'insight', label: 'Distinción clave', text: 'Los frameworks resuelven la consistencia en el equipo. Las técnicas resuelven la capacidad dentro de un paso individual del prompt. Ambos son necesarios; ninguno reemplaza al otro.' },
        ],
      },
      when_to_build: {
        title: 'Cuándo construir un framework de prompts personalizado',
        content: [
          '**Construye un framework personalizado cuando aplicas las mismas 3+ modificaciones a un framework estándar para cada prompt de un flujo de trabajo dado.** Si siempre añades un ancla de cumplimiento, requisito de citas y glosario de terminología — esos son componentes, no adiciones ad hoc.',
          'Señales de que necesitas un framework personalizado:',
        ],
        items: [
          'Añades los mismos campos a cada prompt que ningún framework estándar incluye',
          'Tu equipo produce prompts inconsistentes a pesar de usar CO-STAR o CRAFT',
          'Los nuevos miembros del equipo tardan más de una semana en escribir prompts aceptables',
          'Tus prompts promedian más de 600 palabras porque sigues explicando el mismo contexto',
          'Has creado un "prompt base" que todos copian y adaptan manualmente',
        ],
      },
      when_to_build_part2: {
        content: [
          'Señales de que debes quedarte con los frameworks existentes:',
        ],
        items: [
          'Tus prompts cubren casos de uso diversos y no relacionados (sin patrón consistente)',
          'Escribes menos de 10 prompts por semana en este flujo de trabajo',
          'Un framework existente ya encaja con ajustes menores',
          'Tu equipo tiene menos de 3 personas escribiendo prompts',
        ],
      },
      five_step_process: {
        title: 'Construir un framework de prompts personalizado: proceso de 5 pasos',
        content: [
          '**El proceso de 5 pasos: define el objetivo → identifica componentes → prueba en 10 prompts → refina → documenta.** Cada paso tiene un criterio de salida claro. No saltes al paso 5 — documentar un framework no probado crea falsa confianza.',
        ],
        numberedItems: [
          { title: 'Define el objetivo en una frase', whyItMatters: 'Escribe exactamente qué resultado debe producir este framework de manera fiable. Ejemplo: "Generar un email de primera respuesta a un ticket de soporte que clasifique la gravedad, haga referencia a nuestra política y proponga una ruta de resolución." Esta frase rige cada decisión de componente.' },
          { title: 'Identifica 3-6 componentes requeridos', whyItMatters: 'Lista los elementos de entrada que cada prompt de este flujo de trabajo necesita. Empieza escribiendo 5 prompts de memoria, luego extrae lo que tienen en común. Adiciones comunes más allá de los frameworks estándar: ancla de política, restricción de persona, vocabulario de dominio, esquema de salida, condición de escalación.' },
          { title: 'Aplica en 10 prompts reales', whyItMatters: 'Usa prompts reales de tu flujo de trabajo — no ejemplos inventados. Puntúa cada resultado: ¿cumple el objetivo? ¿Qué componentes faltaron? ¿Cuáles se ignoraron? Ejecuta los mismos prompts en GPT-4o y Claude 4.6 Sonnet vía PromptQuorum para confirmar la fiabilidad entre modelos.' },
          { title: 'Refina la lista de componentes', whyItMatters: 'Elimina componentes que aparecieron en menos de 7 de 10 prompts — pertenecen a prompts específicos, no al framework. Añade componentes que improvisaste en 5+ casos. Vuelve a ejecutar la prueba de 10 prompts con el framework revisado antes de pasar al paso 5.' },
          { title: 'Documenta y estandariza', whyItMatters: 'Escribe una especificación de una página: nombre del framework (acrónimo opcional), definición de cada componente, una plantilla con marcadores de posición y 3 prompts de ejemplo anotados. Guarda en control de versiones (Git o PromptHub). Distribuye la especificación antes de pedir a alguien que use el framework.' },
        ],
        callouts: [
          { type: 'warning', label: 'No omitas el paso 3', text: 'Los frameworks construidos sin probar 10 prompts reales casi siempre incluyen componentes que suenan importantes pero se omiten bajo presión de tiempo. Prueba primero, documenta después.' },
        ],
      },
      support_example: {
        title: 'Ejemplo: Construir un framework para un equipo de soporte',
        content: [
          '**El framework personalizado de un equipo de soporte — llamado REPAIR — consta de 5 componentes: Role, Escalation condition, Policy anchor, Action path, Intent confirmation.** Los frameworks estándar como CO-STAR y CRAFT no incluyen lógica de escalación ni anclaje de políticas, que cada prompt de soporte requiere.',
          'El equipo comenzó al notar que añadían manualmente los mismos elementos a cada prompt CO-STAR: el nivel de rol específico del agente, la política SLA aplicable y una ruta de escalación condicional si el problema superaba el alcance de nivel 1. Después de 3 semanas, esas adiciones se formalizaron como componentes del framework.',
          'La plantilla REPAIR resultante:',
        ],
        items: [
          'R (Role): "You are a tier-1 support agent for [Product]. Your authority covers [scope]."',
          'E (Escalation): "If the issue involves [condition], escalate to tier-2. Do not attempt resolution."',
          'P (Policy anchor): "Apply policy [ID] for [issue type]. Quote the relevant clause in your response."',
          'A (Action path): "Classify the issue, confirm understanding, propose resolution, request confirmation."',
          'I (Intent confirmation): "End every response with: \'Does this address your issue, or would you like me to escalate?\'"',
        ],
      },
      support_example_part2: {
        content: [
          'El tiempo para incorporar a nuevos agentes bajó de 2 semanas a 3 días después de que el framework REPAIR fue documentado y añadido a la biblioteca de prompts del equipo. Las puntuaciones de consistencia de prompts (medidas via evaluación de Braintrust) mejoraron del 64% al 89% en el primer mes.',
          'Usa un framework personalizado cuando puedas nombrar el patrón claramente y mostrar que aplica en tu flujo de trabajo. Evita nombrar un framework solo por tenerlo — una estructura consistente de 4 componentes sin nombre que usas diariamente es un framework incluso sin acrónimo.',
        ],
        callouts: [
          { type: 'tip', label: 'Mide el impacto', text: 'Rastrea el tiempo de onboarding y las puntuaciones de consistencia antes y después de implementar un framework personalizado. Si ninguno mejora en 4 semanas, el framework necesita refinamiento — no más documentación.' },
        ],
      },
      common_mistakes: {
        title: 'Errores comunes al construir frameworks personalizados',
        content: [
          '**El error más común es construir un framework antes de probar manualmente 20+ prompts reales.** Los frameworks construidos desde la teoría en lugar de patrones observados incluyen componentes que suenan importantes pero se omiten en la práctica.',
        ],
        mistakes: [
          {
            mistake: 'Demasiados componentes (7+)',
            problem: 'Los escritores omiten secciones bajo presión de tiempo, rompiendo la consistencia.',
            fix: 'Limita a 6 componentes. Mueve los campos específicos del dominio a extensiones del prompt, no al framework central.',
          },
          {
            mistake: 'Copiar un framework estándar y renombrarlo',
            problem: 'Un CO-STAR renombrado no es un framework personalizado — es CO-STAR con sobrecarga extra de branding.',
            fix: 'Solo formaliza un framework cuando tengas al menos 2 componentes que no existan en ningún framework estándar.',
          },
          {
            mistake: 'Sin conjunto de prueba antes de documentar',
            problem: 'Documentas un framework que no sobrevive el contacto con prompts reales.',
            fix: 'Ejecuta 10 prompts reales a través del framework borrador antes de escribir la especificación. Ajusta según lo que falla.',
          },
          {
            mistake: 'No probar entre modelos',
            problem: 'Un framework que funciona en GPT-4o puede producir resultados diferentes en Claude 4.6 Sonnet si depende de comportamientos implícitos específicos de GPT.',
            fix: 'Prueba en al menos 2 modelos vía PromptQuorum. Documenta cualquier ajuste específico por modelo en la especificación del framework.',
          },
          {
            mistake: 'Sin control de versiones',
            problem: 'El framework se desvía a medida que los miembros del equipo lo editan informalmente, creando versiones inconsistentes.',
            fix: 'Guarda la especificación del framework en Git o PromptHub con un número de versión. Requiere revisión de PR para cualquier cambio de componente.',
          },
        ],
      },
      faq: {
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es un framework de prompts?', a: 'Un framework de prompts es una plantilla estructural que define qué componentes incluir en un prompt y en qué orden. Ejemplos incluyen CO-STAR y CRAFT. Los frameworks mejoran la consistencia y reducen el tiempo dedicado a escribir prompts desde cero.' },
          { q: '¿Cuándo debo construir un framework personalizado en lugar de usar CO-STAR o CRAFT?', a: 'Construye uno personalizado cuando modificas un framework existente de las mismas 3+ formas para cada prompt de un flujo de trabajo. Si siempre añades una restricción de política, un ancla de persona y una lista de vocabulario de dominio a CO-STAR — esas adiciones deben convertirse en componentes de primer nivel de tu propio framework, no en adiciones manuales.' },
          { q: '¿Cuántos componentes debe tener un framework de prompts personalizado?', a: 'Usa 3-6 componentes. Menos de 3 es una técnica, no un framework. Más de 6 crea fricción — los escritores de prompts omiten secciones, derrotando el propósito. Si necesitas más de 6, divide en dos frameworks especializados para diferentes tipos de tareas.' },
          { q: '¿Cómo pruebo si mi framework personalizado funciona?', a: 'Aplica el framework a 10 prompts representativos y puntúa los resultados según 3 criterios: completitud de la tarea, cumplimiento de formato y consistencia de calidad. Un framework funcional debe puntuar 8/10 o mejor en los tres. Usa PromptQuorum para probar el mismo framework entre GPT-4o, Claude 4.6 Sonnet y Gemini 2.5 Pro.' },
          { q: '¿Puede un framework personalizado funcionar en diferentes modelos de IA?', a: 'Sí, si está diseñado correctamente. Los frameworks agnósticos al modelo evitan la sintaxis específica del modelo y se basan en componentes universales (definición de tarea, restricciones, formato de salida). Prueba tu framework en al menos GPT-4o y Claude 4.6 Sonnet antes de finalizarlo.' },
          { q: '¿Cómo nombro un framework de prompts personalizado?', a: 'Nombrar con un acrónimo (como REPAIR) lo hace memorable y ayuda al onboarding. Elige letras que correspondan a los 3-6 componentes en orden. La prueba del acrónimo: ¿puede un nuevo miembro del equipo recordar todos los componentes solo con el nombre?' },
          { q: '¿Cómo hago versiones de un framework personalizado?', a: 'Guarda cada versión del framework en un archivo con fecha (ej., repair-v1-2026-05.md) en tu directorio de biblioteca de prompts. Etiqueta los cambios importantes (componente añadido/eliminado) como versiones mayores. Etiqueta los refinamientos (actualizaciones de definición) como versiones menores. Documenta el motivo de cada cambio junto al archivo de versión.' },
          { q: '¿Puedo combinar múltiples frameworks existentes?', a: 'Puedes combinar componentes de CO-STAR, CRAFT y RISEN — pero trata el resultado como un nuevo framework personalizado, no como un híbrido. Nómbralo, documéntalo y pruébalo como si fuera original. Combinar sin formalizar solo crea un patrón ad hoc no documentado.' },
        ],
      },
      related_reading: {
        title: 'Lecturas relacionadas',
        items: [
          { title: 'Framework CO-STAR: Componentes y cuándo usarlo', url: '/es/prompt-engineering/co-star-framework' },
          { title: 'Framework CRAFT: Contexto, Rol, Acción, Formato, Objetivo', url: '/es/prompt-engineering/craft-framework' },
          { title: 'Framework RISEN: Rol, Instrucciones, Pasos, Objetivo Final, Restricción', url: '/es/prompt-engineering/risen-framework' },
          { title: '¿Qué framework de prompts deberías usar?', url: '/es/prompt-engineering/which-framework-to-use' },
          { title: 'Selección de framework de prompts para equipos', url: '/es/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Configuración de prompt engineering para equipos pequeños', url: '/es/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Fuentes',
        items: [
          { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Testing', url: 'https://www.promptquorum.com/features' },
        ],
      },

      faqSection: {
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es la diferencia entre una técnica de prompt y un framework de prompt?', a: 'Una técnica es una instrucción o método único (por ejemplo, "piensa paso a paso"). Un framework es una estructura reutilizable con 3+ componentes que define cómo deben construirse los prompts. Los frameworks son repetibles; las técnicas son ad hoc.' },
          { q: '¿Cuándo debo construir un framework personalizado en lugar de usar CO-STAR, CRAFT o RISEN?', a: 'Constrúyelo cuando apliques repetidamente las mismas 3+ modificaciones a un framework existente para cada prompt de un flujo de trabajo. Si siempre añades una restricción de política, terminología de dominio y esquema de salida a CO-STAR, esos deben convertirse en componentes de tu propio framework.' },
          { q: '¿Puede un framework personalizado funcionar en diferentes modelos de IA?', a: 'Sí, si está diseñado correctamente. Evita la sintaxis específica del modelo y construye alrededor de componentes universales (tarea, restricciones, formato de salida). Prueba en GPT-4o y Claude antes de finalizar. Si el framework necesita reformulación por modelo, simplifícalo.' },
          { q: '¿Cuántos componentes debe tener mi framework personalizado?', a: 'Usa 3-6 componentes. Menos de 3 es una técnica, no un framework. Más de 6 crea fricción y los escritores omiten secciones. Si necesitas más, divide en dos frameworks especializados para diferentes tipos de tareas.' },
          { q: '¿Cómo pruebo si mi framework personalizado realmente funciona?', a: 'Aplícalo a 10 prompts representativos de tu flujo de trabajo. Puntúa los resultados según tres criterios: (1) completitud de la tarea, (2) cumplimiento de formato, (3) consistencia de calidad. Un framework funcional puntúa 8/10 o mejor en los tres. Prueba entre múltiples modelos usando PromptQuorum.' },
          { q: '¿Cómo debo nombrar un framework personalizado?', a: 'Usa un acrónimo que mapee tus componentes en orden (como REPAIR). La prueba del acrónimo: ¿puede un nuevo miembro del equipo recordar todos los componentes solo con el nombre? Si no, simplifica tu lista de componentes.' },
          { q: '¿Puedo combinar componentes de CO-STAR, CRAFT y RISEN?', a: 'Sí, pero trátalo como un nuevo framework, no como un híbrido. Nómbralo, documéntalo, pruébalo y guárdalo en control de versiones. Combinar sin formalizar solo crea un patrón ad hoc no documentado.' },
          { q: '¿Cómo hago versiones de un framework personalizado?', a: 'Guarda cada versión en un archivo con fecha (ej., repair-v1-2026-05.md) en tu biblioteca de prompts. Etiqueta los cambios importantes (componente añadido/eliminado) como versiones mayores. Etiqueta los refinamientos (actualizaciones de definición) como versiones menores. Documenta el motivo de cada cambio.' },
          { q: '¿Qué debo documentar para mi framework personalizado?', a: 'Escribe una especificación de una página: (1) nombre y objetivo del framework, (2) definiciones de 3-6 componentes con ejemplos, (3) una plantilla de relleno, (4) 3 prompts de ejemplo completos y anotados usando el framework. Guárdalo en control de versiones junto a tu biblioteca de prompts.' },
          { q: '¿Cómo consigo que mi equipo use el framework personalizado que he creado?', a: 'Empieza con una sesión de 30 minutos usando ejemplos de tareas reales. Prueba juntos en 2-3 prompts. Crea una especificación de una página compartible. Rastrea métricas de cumplimiento e impacto (tasa de éxito de tareas, consistencia de resultados) durante el primer mes. Itera basándote en el feedback.' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Frameworks',
    title: 'Créer son propre framework de prompts : processus en 5 étapes',
    seoTitle: 'Créer un framework de prompts personnalisé : 5 étapes',
    intro: 'Quand les frameworks existants — CO-STAR, CRAFT, RISEN — ne correspondent pas à votre flux de travail, créer un framework de prompts personnalisé donne à votre équipe une structure réutilisable et testable. Ce guide explique quand créer plutôt qu\'adopter, le processus en 5 étapes, et un exemple concret.',
    metaDescription: 'Créer un framework de prompts en 5 étapes : définir l\'objectif, identifier 3–6 composants, tester sur 10 prompts, affiner, documenter. Avec l\'exemple REPAIR pour les équipes support.',
    ogDescription: 'Créer un framework de prompts en 5 étapes : définir l\'objectif, identifier 3–6 composants, tester sur 10 prompts, affiner, documenter. Tests multi-modèles avec PromptQuorum.',
    twitterDescription: 'Les frameworks standard ne conviennent pas ? Créez le vôtre en 5 étapes. Exemple REPAIR pour les équipes support. 3–6 composants, validation sur 10 prompts.',
    publishDate: '2026-05-02',
    readTime: '12 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'Framework de prompts personnalisé',
    leadAnswerBlock: '**Un framework de prompts personnalisé est un modèle structuré que vous concevez pour un cas d\'usage spécifique lorsque les frameworks standards (CO-STAR, CRAFT, RISEN) nécessitent des modifications constantes.** Créez-en un lorsque vous répétez les mêmes 3+ adaptations pour chaque prompt d\'un workflow donné.',
    quickFacts: [
      'Créez un framework personnalisé quand vous ajoutez les mêmes 3+ modifications à chaque prompt d\'un workflow',
      '3–6 composants : moins est une technique, plus crée de la friction',
      'Tester sur 10 prompts réels avant de documenter',
      'Le framework REPAIR a réduit l\'onboarding de 2 semaines à 3 jours',
      'Les scores de cohérence se sont améliorés de 64 % à 89 % en un mois',
      'Tester sur GPT-4o et Claude 4.6 Sonnet avant de standardiser',
    ],
    toc: [
      { label: 'Framework vs. technique', anchor: 'framework_vs_technique' },
      { label: 'Quand créer un framework personnalisé', anchor: 'when_to_build' },
      { label: 'Créer un framework en 5 étapes', anchor: 'five_step_process' },
      { label: 'Exemple : framework REPAIR pour le support', anchor: 'support_example' },
      { label: 'Erreurs courantes', anchor: 'common_mistakes' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Lectures complémentaires', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/fr/prompt-engineering/build-your-own-framework',
      inLanguage: 'fr',
      headline: 'Créer son propre framework de prompts : processus en 5 étapes',
      description: 'Créer un framework de prompts en 5 étapes : définir l\'objectif, identifier 3–6 composants, tester sur 10 prompts, affiner, documenter.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['framework de prompts personnalisé', 'créer framework prompts', 'framework prompt engineering', 'conception prompts'],
      mentions: [
        { '@type': 'Thing', name: 'CO-STAR' },
        { '@type': 'Thing', name: 'CRAFT' },
        { '@type': 'Thing', name: 'RISEN' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-your-own-framework', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Créez un framework de prompts personnalisé quand vous ajoutez les mêmes 3+ composants à chaque prompt d\'un workflow. Utilisez 3–6 composants, testez sur 10 prompts réels avant de documenter et vérifiez la fiabilité multi-modèles. L\'exemple REPAIR montre comment une équipe support a réduit l\'onboarding de 2 semaines à 3 jours.',
        ],
      },
      key_takeaways: {
        title: 'Points clés',
        items: [
          'Créez un framework personnalisé lorsque vous ajoutez les mêmes 3+ composants à chaque prompt d\'un workflow',
          'Utilisez 3 à 6 composants : moins est une technique, plus crée de la friction',
          'Testez sur 10 prompts réels avant de documenter',
          'Vérifiez la fiabilité multi-modèles sur GPT-4o et Claude 4.6 Sonnet',
          'Stockez la spec du framework dans le contrôle de version avec un modèle et 3 exemples annotés',
        ],
      },
      framework_vs_technique: {
        title: 'Framework vs. technique : quelle est la différence ?',
        snippets: [
          { type: 'in-one-sentence', text: 'Un framework de prompts est un modèle structurel définissant quels composants appartiennent à chaque prompt ; une technique est un modèle appliqué à l\'intérieur d\'un de ces composants.' },
          { type: 'in-plain-terms', text: 'Le framework est l\'échafaudage de chaque prompt — il définit les sections. Une technique est ce que vous faites à l\'intérieur d\'une section, par exemple demander au modèle de raisonner étape par étape.' },
        ],
        content: [
          '**Un framework de prompts est un modèle structurel définissant quels composants appartiennent à chaque prompt ; une technique est un modèle appliqué à l\'intérieur d\'un de ces composants.** Le chain-of-thought prompting est une technique — vous l\'appliquez à l\'intérieur du composant "tâche" d\'un framework. CO-STAR est un framework — il définit 6 composants qui structurent l\'ensemble du prompt.',
          'Cette distinction est importante car les frameworks et les techniques résolvent des problèmes différents. Un framework résout la cohérence : tout le monde dans votre équipe produit des prompts avec la même structure. Une technique résout la capacité : elle change la façon dont le modèle aborde une étape spécifique du raisonnement.',
          'Utilisez un framework existant (CO-STAR, CRAFT, RISEN, RTF) quand votre type de tâche correspond à ce pour quoi le framework a été conçu. Créez-en un personnalisé quand vous ajoutez régulièrement les mêmes composants spécifiques à un domaine qu\'aucun framework existant n\'inclut.',
        ],
        callouts: [
          { type: 'insight', label: 'Distinction clé', text: 'Les frameworks résolvent la cohérence au sein de l\'équipe. Les techniques résolvent la capacité dans une étape de prompt. Les deux sont nécessaires ; l\'un ne remplace pas l\'autre.' },
        ],
      },
      when_to_build: {
        title: 'Quand créer un framework de prompts personnalisé',
        content: [
          '**Créez un framework personnalisé lorsque vous appliquez les mêmes 3+ modifications à un framework standard pour chaque prompt d\'un workflow.** Si vous ajoutez toujours une contrainte de conformité, un vocabulaire de domaine et un schéma de sortie — ces éléments doivent devenir des composants de votre propre framework.',
          'Signes que vous avez besoin d\'un framework personnalisé :',
        ],
        items: [
          'Vous ajoutez les mêmes champs à chaque prompt qu\'aucun framework standard n\'inclut',
          'Votre équipe produit des prompts incohérents malgré l\'utilisation de CO-STAR ou CRAFT',
          'Les nouveaux membres prennent plus d\'une semaine pour écrire des prompts acceptables',
          'Vos prompts dépassent 600 mots car vous expliquez toujours le même contexte',
          'Vous avez créé un "prompt de base" que tout le monde copie et adapte manuellement',
        ],
      },
      five_step_process: {
        title: 'Créer un framework de prompts personnalisé en 5 étapes',
        content: [
          '**Le processus en 5 étapes : définir l\'objectif → identifier les composants → tester sur 10 prompts → affiner → documenter.** Chaque étape a un critère de sortie clair. Ne sautez pas à l\'étape 5 — documenter un framework non testé crée une fausse confiance.',
        ],
        numberedItems: [
          { title: 'Définir l\'objectif en une phrase', whyItMatters: 'Écrivez exactement quelle sortie ce framework doit produire de manière fiable. Cette phrase gouverne chaque décision de composant.' },
          { title: 'Identifier 3 à 6 composants requis', whyItMatters: 'Listez les éléments d\'entrée que chaque prompt de ce workflow nécessite. Commencez par écrire 5 prompts de mémoire, puis extrayez ce qu\'ils partagent.' },
          { title: 'Appliquer à 10 prompts réels', whyItMatters: 'Utilisez des prompts réels de votre workflow — pas des exemples inventés. Évaluez chaque sortie. Testez sur GPT-4o et Claude 4.6 Sonnet via PromptQuorum.' },
          { title: 'Affiner la liste des composants', whyItMatters: 'Supprimez les composants qui apparaissent dans moins de 7 prompts sur 10. Ajoutez ceux que vous avez improvisés dans 5+ cas. Retestez.' },
          { title: 'Documenter et standardiser', whyItMatters: 'Rédigez une spec d\'une page : nom du framework, définition de chaque composant, modèle avec espaces réservés, et 3 exemples annotés. Stockez dans Git ou PromptHub.' },
        ],
        callouts: [
          { type: 'warning', label: 'Ne sautez pas l\'étape 3', text: 'Sans tester 10 prompts réels, le framework contiendra presque toujours des composants ignorés sous la pression du temps. Testez d\'abord, documentez ensuite.' },
        ],
      },
      support_example: {
        title: 'Exemple : créer un framework pour une équipe support',
        content: [
          '**Le framework personnalisé d\'une équipe support — nommé REPAIR — comprend 5 composants : Role, Escalation condition, Policy anchor, Action path, Intent confirmation.** Les frameworks standard comme CO-STAR et CRAFT n\'incluent pas la logique d\'escalade ni l\'ancrage de politique, nécessaires pour chaque prompt support.',
          'L\'équipe a constaté qu\'elle ajoutait manuellement les mêmes éléments à chaque prompt CO-STAR : le niveau de rôle spécifique de l\'agent, la politique SLA applicable et un chemin d\'escalade conditionnel. Après 3 semaines, ces ajouts ont été formalisés comme composants du framework.',
        ],
        callouts: [
          { type: 'tip', label: 'Mesurez l\'impact', text: 'Suivez le temps d\'onboarding et les scores de cohérence avant et après le déploiement d\'un framework personnalisé. S\'il ne s\'améliore pas en 4 semaines, le framework nécessite un raffinement.' },
        ],
      },
      common_mistakes: {
        title: 'Erreurs courantes lors de la création de frameworks personnalisés',
        content: [
          '**L\'erreur la plus courante est de créer un framework sans tester 20+ prompts réels manuellement.** Les frameworks construits à partir de la théorie incluent des composants qui semblent importants mais sont ignorés en pratique.',
        ],
        mistakes: [
          { mistake: 'Trop de composants (7+)', problem: 'Les rédacteurs sautent des sections sous pression, brisant la cohérence.', fix: 'Limitez à 6 composants. Déplacez les champs spécifiques au domaine dans des extensions, pas dans le framework principal.' },
          { mistake: 'Copier un framework standard et le renommer', problem: 'Un CO-STAR renommé n\'est pas un framework personnalisé.', fix: 'Formalisez un framework uniquement si vous avez au moins 2 composants qui n\'existent dans aucun framework standard.' },
          { mistake: 'Pas de jeu de test avant la documentation', problem: 'Vous documentez un framework qui ne résiste pas aux prompts réels.', fix: 'Testez 10 prompts réels avant d\'écrire la spec.' },
        ],
      },
      faq: {
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Qu\'est-ce qu\'un framework de prompts ?', a: 'Un framework de prompts est un modèle structurel qui définit quels composants inclure dans un prompt et dans quel ordre. Les frameworks améliorent la cohérence et réduisent le temps de rédaction.' },
          { q: 'Quand créer un framework personnalisé ?', a: 'Créez-en un quand vous appliquez les mêmes 3+ modifications à un framework standard pour chaque prompt d\'un workflow.' },
          { q: 'Combien de composants doit avoir un framework ?', a: 'Utilisez 3 à 6 composants. Moins est une technique. Plus crée de la friction.' },
          { q: 'Comment nommer un framework personnalisé ?', a: 'Un acronyme le rend mémorable. Choisissez des lettres correspondant aux composants dans l\'ordre. Test : un nouveau membre peut-il se souvenir de tous les composants rien qu\'avec le nom ?' },
          { q: 'Comment versionner un framework ?', a: 'Stockez chaque version dans un fichier daté. Changements majeurs = version principale, raffinements = version mineure.' },
          { q: 'Peut-on combiner plusieurs frameworks ?', a: 'Oui, mais traitez le résultat comme un nouveau framework. Nommez-le, documentez-le et testez-le comme s\'il était original.' },
        ],
      },
      related_reading: {
        title: 'Lectures complémentaires',
        items: [
          { title: 'CO-STAR Framework: Components and When to Use It', url: '/prompt-engineering/co-star-framework' },
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'RISEN Framework: Role, Instructions, Steps, End Goal, Narrowing', url: '/prompt-engineering/risen-framework' },
          { title: 'Which Prompt Framework Should You Use?', url: '/prompt-engineering/which-framework-to-use' },
          { title: 'Prompt Framework Selection for Teams', url: '/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Testing', url: 'https://www.promptquorum.com/features' },
        ],
      },

      faqSection: {
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quelle est la différence entre une technique de prompt et un framework de prompt?', a: 'Une technique est une instruction ou méthode unique (par exemple, "réfléchis étape par étape"). Un framework est une structure réutilisable avec 3+ composants qui définissent comment les prompts doivent être construits. Les frameworks sont répétables; les techniques sont ad hoc.' },
          { q: 'Quand devrais-je créer un framework personnalisé plutôt que d\'utiliser CO-STAR, CRAFT ou RISEN?', a: 'Créez-en un lorsque vous appliquez régulièrement les mêmes 3+ modifications à un framework existant pour chaque prompt dans un workflow. Si vous ajoutez toujours une contrainte de politique, une terminologie de domaine et un schéma de sortie à CO-STAR, ceux-ci devraient devenir des composants de votre propre framework.' },
          { q: 'Un framework personnalisé peut-il fonctionner sur différents modèles d\'IA?', a: 'Oui, s\'il est correctement conçu. Évitez la syntaxe spécifique au modèle et construisez autour de composants universels (tâche, contraintes, format de sortie). Testez sur GPT-4o et Claude avant de finaliser. Si le framework nécessite une reformulation par modèle, simplifiez-le.' },
          { q: 'Combien de composants mon framework personnalisé devrait-il avoir?', a: 'Utilisez 3–6 composants. Moins de 3 est une technique, pas un framework. Plus de 6 crée des frictions et les rédacteurs sautent des sections. Si vous en avez besoin de plus, divisez-les en deux frameworks spécialisés pour différents types de tâches.' },
          { q: 'Comment tester si mon framework personnalisé fonctionne réellement?', a: 'Appliquez-le à 10 prompts représentatifs de votre workflow. Évaluez les sorties selon trois critères: (1) accomplissement de la tâche, (2) respect du format, (3) cohérence de qualité. Un framework efficace score 8/10 ou mieux sur tous les trois. Testez sur plusieurs modèles avec PromptQuorum.' },
          { q: 'Comment devrais-je nommer un framework personnalisé?', a: 'Utilisez un acronyme mappant vos composants dans l\'ordre (comme REPAIR). Le test de l\'acronyme: un nouveau membre de l\'équipe peut-il se souvenir de tous les composants uniquement à partir du nom? Si non, simplifiez votre liste de composants.' },
          { q: 'Puis-je combiner des composants de CO-STAR, CRAFT et RISEN?', a: 'Oui, mais traitez cela comme un nouveau framework, pas un hybride. Nommez-le, documentez-le, testez-le et stockez-le dans le contrôle de version. Combiner sans formaliser crée juste un schéma ad hoc non documenté.' },
          { q: 'Comment je versionne un framework personnalisé?', a: 'Stockez chaque version dans un fichier daté (par exemple, repair-v1-2026-05.md) dans votre bibliothèque de prompts. Marquez les changements majeurs (composant ajouté/supprimé) comme versions majeures. Marquez les raffinements comme versions mineures. Documentez la raison de chaque changement.' },
          { q: 'Que dois-je documenter pour mon framework personnalisé?', a: 'Écrivez une spécification d\'une page: (1) nom et objectif du framework, (2) définitions des 3–6 composants avec exemples, (3) un modèle à remplir, (4) 3 exemples de prompts complets annotés utilisant le framework. Conservez-le en contrôle de version.' },
          { q: 'Comment je fais en sorte que mon équipe utilise le framework personnalisé que j\'ai créé?', a: 'Commencez avec une présentation de 30 minutes utilisant des exemples de tâches réelles. Testez ensemble sur 2–3 prompts. Créez une spécification d\'une page partageable. Suivez les métriques de conformité et d\'impact pour le premier mois. Itérez selon les commentaires.' },
          ],
        },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'フレームワーク',
    title: '独自プロンプトフレームワークの構築：5ステップ設計プロセス',
    seoTitle: 'カスタムプロンプトフレームワーク構築：5ステップ手順',
    intro: 'CO-STAR、CRAFT、RISENなどの既存フレームワークがワークフローに合わない場合、カスタムプロンプトフレームワークを構築することで、チームに再利用可能でテスト可能な構造を提供できます。このガイドでは、構築すべき状況、5ステップの設計プロセス、実践例を解説します。',
    metaDescription: 'カスタムプロンプトフレームワークを5ステップで構築：目標定義、3〜6コンポーネント特定、10プロンプトでテスト、改良、文書化。支援チーム向けREPAIR例付き。',
    ogDescription: 'カスタムプロンプトフレームワークを5ステップで構築：目標定義、3〜6コンポーネント特定、10プロンプトでテスト、改良、文書化。PromptQuorumで複数モデルをテスト。',
    twitterDescription: '標準フレームワークが合わない？5ステップで独自フレームワークを構築。支援チーム向けREPAIR例。3〜6コンポーネント、10プロンプト検証。',
    publishDate: '2026-05-02',
    readTime: '12分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'カスタムプロンプトフレームワーク',
    leadAnswerBlock: '**カスタムプロンプトフレームワークとは、標準フレームワーク（CO-STAR、CRAFT、RISEN）が常に修正を必要とする場合に、特定のユースケース向けに設計した構造化テンプレートです。** 特定のワークフローで毎回同じ3つ以上の変更を加えるときに構築します。',
    quickFacts: [
      'ワークフローの各プロンプトに同じ3つ以上の変更を加えるときカスタムフレームワークを構築',
      '3〜6コンポーネント：少ないとテクニック、多いと摩擦が生じる',
      '文書化前に10の実際のプロンプトでテスト',
      'REPAIRフレームワークで1つのサポートチームのオンボーディングが2週間から3日に短縮',
      '整合性スコアが最初の月以内に64%から89%に向上',
      '標準化前にGPT-4oとClaude 4.6 Sonnetでモデル横断テスト',
    ],
    toc: [
      { label: 'フレームワーク vs テクニック', anchor: 'framework_vs_technique' },
      { label: 'カスタムフレームワークが必要なとき', anchor: 'when_to_build' },
      { label: '5ステップでカスタムフレームワークを構築', anchor: 'five_step_process' },
      { label: '例：サポートチーム向けREPAIRフレームワーク', anchor: 'support_example' },
      { label: 'よくある間違い', anchor: 'common_mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連記事', anchor: 'related_reading' },
      { label: '情報源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ja/prompt-engineering/build-your-own-framework',
      inLanguage: 'ja',
      headline: '独自プロンプトフレームワークの構築：5ステップ設計プロセス',
      description: 'カスタムプロンプトフレームワークを5ステップで構築：目標定義、3〜6コンポーネント特定、10プロンプトでテスト、改良、文書化。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['カスタムプロンプトフレームワーク', 'プロンプトフレームワーク構築', 'プロンプトエンジニアリング', 'チームプロンプト'],
      mentions: [
        { '@type': 'Thing', name: 'CO-STAR' },
        { '@type': 'Thing', name: 'CRAFT' },
        { '@type': 'Thing', name: 'RISEN' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-your-own-framework', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'ワークフローの各プロンプトに同じ3つ以上のコンポーネントを繰り返し追加するときにカスタムプロンプトフレームワークを構築します。3〜6コンポーネントを使用し、文書化前に10の実際のプロンプトでテストし、モデル横断的な信頼性を確認します。REPAIRの例は、サポートチームがオンボーディングを2週間から3日に短縮した方法を示しています。',
        ],
      },
      key_takeaways: {
        title: '重要なポイント',
        items: [
          'ワークフローの各プロンプトに同じ3つ以上のコンポーネントを追加するときはカスタムフレームワークを構築する',
          '3〜6個のコンポーネントを使用：少ないとテクニック、多いと摩擦が生じる',
          '文書化前に10の実際のプロンプトでテストする',
          'GPT-4oとClaude 4.6 Sonnetでモデル横断的な信頼性を確認する',
          'テンプレートと3つの注釈付き例とともにフレームワーク仕様書をバージョン管理に保存する',
        ],
      },
      framework_vs_technique: {
        title: 'フレームワーク vs テクニック：何が違うのか？',
        snippets: [
          { type: 'in-one-sentence', text: 'プロンプトフレームワークは各プロンプトに必要なコンポーネントを定義する構造テンプレートであり、テクニックはそのコンポーネントの一つの中で適用されるパターンです。' },
          { type: 'in-plain-terms', text: 'フレームワークは各プロンプトの骨組みで、セクションを決めます。テクニックはあるセクションの中で行うことで、例えばモデルに段階的に考えさせることです。' },
        ],
        content: [
          '**プロンプトフレームワークは各プロンプトに必要なコンポーネントを定義する構造テンプレートであり、テクニックはそのコンポーネントの一つの中で適用されるパターンです。** チェーン・オブ・ソートプロンプティングはテクニック—フレームワークの「タスク」コンポーネント内で適用します。CO-STARはフレームワーク—プロンプト全体を構造化する6つのコンポーネントを定義します。',
          'この区別は重要です。フレームワークとテクニックは異なる問題を解決するからです。フレームワークは一貫性を解決します：チーム全員が同じ構造のプロンプトを作成できます。テクニックは能力を解決します：モデルが特定のステップをどのように処理するかを変えます。',
          'タスクタイプが既存フレームワークの設計目的に合致する場合は既存フレームワーク（CO-STAR、CRAFT、RISEN、RTF）を使用します。既存フレームワークにないドメイン固有コンポーネントを常に追加している場合はカスタムを構築します。',
        ],
        callouts: [
          { type: 'insight', label: '核心的な区別', text: 'フレームワークはチーム全体の一貫性を解決します。テクニックは個別プロンプトステップの能力を解決します。両方が必要で、一方が他方に取って代わることはありません。' },
        ],
      },
      when_to_build: {
        title: 'カスタムプロンプトフレームワークが必要なとき',
        content: [
          '**特定のワークフローで毎回同じ3つ以上の変更を加えるときにカスタムフレームワークを構築します。** コンプライアンスアンカー、引用要件、専門用語集を常に追加している場合、それらはコンポーネントであり、アドホックな追加ではありません。',
          'カスタムフレームワークが必要なサイン：',
        ],
        items: [
          '標準フレームワークに含まれない同じフィールドを毎回のプロンプトに追加している',
          'CO-STARやCRAFTを使っているのにチームがバラバラなプロンプトを作成している',
          '新しいチームメンバーが許容できるプロンプトを書くのに1週間以上かかる',
          '同じコンテキストを繰り返し説明するためプロンプトが平均600語を超える',
          '全員がコピーして手動で修正する「ベースプロンプト」を作成してしまった',
        ],
      },
      five_step_process: {
        title: '5ステップでカスタムプロンプトフレームワークを構築する',
        content: [
          '**5ステッププロセス：目標定義 → コンポーネント特定 → 10プロンプトでテスト → 改良 → 文書化。** 各ステップには明確な完了基準があります。ステップ5に飛ばないこと—テストされていないフレームワークの文書化は誤った信頼を生み出します。',
        ],
        numberedItems: [
          { title: '目標を1文で定義する', whyItMatters: 'このフレームワークが確実に生成すべき出力を正確に書き出します。この1文がすべてのコンポーネント決定を支配します。' },
          { title: '必要なコンポーネント3〜6個を特定する', whyItMatters: 'このワークフローの各プロンプトが必要とする入力要素を列挙します。まず5つのプロンプトを記憶から書き、共通点を抽出します。' },
          { title: '10の実際のプロンプトに適用する', whyItMatters: 'ワークフローからの実際のプロンプトを使用します（作り話は不可）。各出力を評価します。PromptQuorum経由でGPT-4oとClaude 4.6 Sonnetでテストし、モデル横断的な信頼性を確認します。' },
          { title: 'コンポーネントリストを改良する', whyItMatters: '10プロンプト中7個未満に現れたコンポーネントを削除します。5回以上即興で追加したコンポーネントを追加します。改訂版フレームワークで10プロンプトテストを再実施します。' },
          { title: '文書化と標準化', whyItMatters: '1ページの仕様書を作成：フレームワーク名、各コンポーネントの定義、プレースホルダー付き記入テンプレート、3つの注釈付き例題プロンプト。GitまたはPromptHubにバージョン管理で保存します。' },
        ],
        callouts: [
          { type: 'warning', label: 'ステップ3をスキップしないこと', text: '10の実際のプロンプトでテストせずにフレームワークを構築すると、時間のプレッシャーの下でスキップされるコンポーネントがほぼ必ず含まれます。まずテスト、その後文書化。' },
        ],
      },
      support_example: {
        title: '例：サポートチーム向けフレームワーク構築',
        content: [
          '**あるサポートチームのカスタムフレームワーク — REPAIRと命名 — は5つのコンポーネントで構成されます：Role、Escalation condition、Policy anchor、Action path、Intent confirmation。** CO-STARやCRAFTなどの標準フレームワークには、すべてのサポートプロンプトが必要とするエスカレーションロジックやポリシーアンカリングが含まれていません。',
          'REPAIR template:',
        ],
        items: [
          'R (Role): "You are a tier-1 support agent for [Product]. Your authority covers [scope]."',
          'E (Escalation): "If the issue involves [condition], escalate to tier-2. Do not attempt resolution."',
          'P (Policy anchor): "Apply policy [ID] for [issue type]. Quote the relevant clause in your response."',
          'A (Action path): "Classify the issue, confirm understanding, propose resolution, request confirmation."',
          'I (Intent confirmation): "End every response with: \'Does this address your issue, or would you like me to escalate?\'"',
        ],
      },
      support_example_part2: {
        content: [
          'REPAIRフレームワークをドキュメント化してチームのプロンプトライブラリに追加した後、新しいエージェントのオンボーディング時間は2週間から3日に短縮されました。プロンプト整合性スコア（Braintrust評価で測定）は最初の月以内に64%から89%に改善しました。',
        ],
        callouts: [
          { type: 'tip', label: '効果を測定する', text: 'カスタムフレームワークを導入する前後でオンボーディング時間と整合性スコアを追跡します。4週間以内に改善が見られない場合、フレームワークは文書化ではなく改良が必要です。' },
        ],
      },
      common_mistakes: {
        title: '独自フレームワーク構築時のよくある間違い',
        content: [
          '**最も一般的な間違いは、20以上の実際のプロンプトを手動でテストする前にフレームワークを構築することです。** 理論から構築されたフレームワークには、重要そうに見えても実際にはスキップされるコンポーネントが含まれます。',
        ],
        mistakes: [
          { mistake: 'コンポーネントが多すぎる（7個以上）', problem: '時間のプレッシャーの下でライターがセクションをスキップし、一貫性が損なわれます。', fix: '6コンポーネントに制限します。ドメイン固有フィールドはコアフレームワークではなく拡張に移します。' },
          { mistake: '標準フレームワークをコピーしてリネームする', problem: 'リネームされたCO-STARはカスタムフレームワークではありません。', fix: '標準フレームワークに存在しないコンポーネントが少なくとも2つある場合にのみフレームワークを正式化します。' },
          { mistake: '文書化前のテストセットなし', problem: '実際のプロンプトに耐えられないフレームワークを文書化してしまいます。', fix: '仕様書を書く前に10の実際のプロンプトをドラフトフレームワークで実行します。' },
        ],
      },
      faq: {
        title: 'よくある質問',
        faqs: [
          { q: 'プロンプトフレームワークとは何ですか？', a: 'プロンプトフレームワークとは、プロンプトにどのコンポーネントをどの順序で含めるかを定義する構造化テンプレートです。一貫性を高め、プロンプト作成時間を短縮します。' },
          { q: 'カスタムフレームワークを構築すべきタイミングは？', a: 'ワークフロー内の各プロンプトで標準フレームワークに同じ3つ以上の修正を加える場合にカスタムフレームワークを構築します。' },
          { q: 'フレームワークのコンポーネント数は？', a: '3〜6個のコンポーネントを使用します。3個未満はテクニック、6個超は摩擦を生みます。' },
          { q: 'カスタムフレームワークの命名方法は？', a: 'REPAIRのようなアクロニムで記憶しやすくします。新しいチームメンバーが名前だけで全コンポーネントを思い出せるかテストします。' },
          { q: 'カスタムフレームワークのバージョン管理は？', a: '各バージョンを日付付きファイルに保存します。重大な変更はメジャーバージョン、改善はマイナーバージョンとします。' },
          { q: '複数のフレームワークを組み合わせられますか？', a: 'CO-STAR、CRAFT、RISENのコンポーネントを組み合わせられますが、結果は新しいカスタムフレームワークとして扱い、名前を付け、文書化し、テストします。' },
        ],
      },
      related_reading: {
        title: '関連記事',
        items: [
          { title: 'CO-STAR Framework: Components and When to Use It', url: '/prompt-engineering/co-star-framework' },
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'RISEN Framework: Role, Instructions, Steps, End Goal, Narrowing', url: '/prompt-engineering/risen-framework' },
          { title: 'Which Prompt Framework Should You Use?', url: '/prompt-engineering/which-framework-to-use' },
          { title: 'Prompt Framework Selection for Teams', url: '/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: '情報源',
        items: [
          { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Testing', url: 'https://www.promptquorum.com/features' },
        ],
      },

      faqSection: {
        title: 'よくある質問',
        faqs: [
          { q: 'プロンプト技法とプロンプトフレームワークの違いは?', a: '技法は単一の指示またはメソッドです（例：「ステップバイステップで考える」）。フレームワークは3+コンポーネントを持つ再利用可能な構造で、プロンプトの構築方法を定義します。フレームワークは繰り返し可能で、技法はアドホックです。' },
          { q: 'CO-STAR、CRAFT、RISENではなくカスタムフレームワークを構築すべき時は?', a: 'ワークフロー内の各プロンプトで既存フレームワークに同じ3+の修正を繰り返し適用する場合に構築します。常にCO-STARにコンプライアンス制約、ドメイン用語、出力スキーマを追加する場合、これらはあなたのフレームワークのコンポーネントになるべきです。' },
          { q: 'カスタムフレームワークは異なるAIモデル間で機能できるか?', a: 'はい、正しく設計されていれば可能です。モデル固有の構文を避けて、普遍的なコンポーネント（タスク、制約、出力形式）の周りに構築します。最終化する前にGPT-4oとClaudeでテストします。フレームワークがモデルごとに大幅な言い換えを必要とする場合は、簡単にしてください。' },
          { q: 'カスタムフレームワークは何個のコンポーネントを持つべきか?', a: '3～6個のコンポーネントを使用します。3個未満はテクニックで、フレームワークではありません。6個超は摩擦を生み、ライターはセクションをスキップします。もっと必要な場合は、異なるタスクタイプ用の2つの専門フレームワークに分割します。' },
          { q: 'カスタムフレームワークが実際に機能しているか確認するには?', a: 'ワークフロー内の10個の代表的なプロンプトに適用します。3つの基準に対して出力をスコアリングします：（1）タスク完了、（2）フォーマット準拠、（3）品質一貫性。機能するフレームワークは3つすべてで8/10以上のスコアを取得すべきです。PromptQuorumを使用して複数のモデル間でテストします。' },
          { q: 'カスタムフレームワークにどう名前を付ける?', a: 'REPAIR のようなアクロニムを使用して記憶に残りやすくします。アクロニムテスト：新しいチームメンバーが名前だけですべてのコンポーネントを思い出せるか?そうでない場合は、コンポーネントリストを単純化します。' },
          { q: '複数の既存フレームワークのコンポーネントを組み合わせられるか?', a: 'CO-STAR、CRAFT、RISENのコンポーネントを組み合わせることはできますが、結果を新しいカスタムフレームワークとして扱い、命名、文書化、テストします。正式化なしで組み合わせると、文書化されていないアドホックパターンが作成されるだけです。' },
          { q: 'カスタムフレームワークのバージョン管理方法は?', a: '各フレームワークバージョンを日付付きファイル（例：repair-v1-2026-05.md）でPromptライブラリディレクトリに保存します。重大な変更（コンポーネント追加/削除）をメジャーバージョンとしてタグします。改善（定義更新）をマイナーバージョンとしてタグします。各変更の理由をドキュメント化します。' },
          { q: 'カスタムフレームワークで何を文書化すべきか?', a: '1ページの仕様を作成します：（1）フレームワーク名と目標、（2）例付きの3～6コンポーネント定義、（3）記入テンプレート、（4）フレームワークを使用した3つの注釈付き完全なサンプルプロンプト。バージョン制御でPromptライブラリの横に保管します。' },
          { q: '構築したカスタムフレームワークをチームに使用させるには?', a: '実際のタスク例を使用した30分間のウォークスルーから開始します。2～3のプロンプトで一緒にテストします。共有可能な1ページの仕様を作成します。最初の1ヶ月間のコンプライアンスと影響メトリクスを追跡します。フィードバックに基づいて反復します。' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '框架',
    title: '构建自己的Prompt框架：5步设计流程',
    seoTitle: '构建自定义Prompt框架：5步设计流程指南',
    intro: '当CO-STAR、CRAFT、RISEN等现有框架不适合您的工作流程时，构建自定义Prompt框架可以为团队提供可复用、可测试的结构。本指南说明何时应构建而非采用现有框架、5步设计流程，以及完整的实操案例。',
    metaDescription: '5步构建自定义Prompt框架：定义目标、识别3至6个组件、在10条Prompt上测试、改进、文档化。附支持团队REPAIR框架示例。',
    ogDescription: '5步构建自定义Prompt框架：定义目标、识别3至6个组件、在10条Prompt上测试、改进、文档化。使用PromptQuorum进行跨模型测试。',
    twitterDescription: '标准框架不适用？5步构建自定义框架。支持团队REPAIR示例。3至6个组件，10条Prompt验证。',
    publishDate: '2026-05-02',
    readTime: '12分钟阅读',
    educationalLevel: 'Advanced',
    primaryTerm: '自定义Prompt框架',
    leadAnswerBlock: '**自定义Prompt框架是当标准框架（CO-STAR、CRAFT、RISEN）需要持续修改时，针对特定用例设计的结构化模板。** 当您在特定工作流中对每条Prompt进行相同的3项以上修改时，就应该构建一个自定义框架。',
    quickFacts: [
      '当工作流中每条Prompt添加相同3项以上修改时构建自定义框架',
      '3至6个组件：更少是技术方法，更多会产生阻力',
      '文档化前在10条真实Prompt上测试',
      'REPAIR框架将一个支持团队的入职时间从2周缩短至3天',
      '一致性评分在第一个月内从64%提升至89%',
      '标准化前在GPT-4o和Claude 4.6 Sonnet上进行跨模型测试',
    ],
    toc: [
      { label: '框架与技术的区别', anchor: 'framework_vs_technique' },
      { label: '何时构建自定义框架', anchor: 'when_to_build' },
      { label: '5步构建自定义框架', anchor: 'five_step_process' },
      { label: '示例：支持团队的REPAIR框架', anchor: 'support_example' },
      { label: '常见错误', anchor: 'common_mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related_reading' },
      { label: '参考来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/zh/prompt-engineering/build-your-own-framework',
      inLanguage: 'zh',
      headline: '构建自己的Prompt框架：5步设计流程',
      description: '5步构建自定义Prompt框架：定义目标、识别3至6个组件、在10条Prompt上测试、改进、文档化。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['自定义Prompt框架', '构建Prompt框架', 'Prompt工程框架', '团队提示词', 'Prompt设计'],
      mentions: [
        { '@type': 'Thing', name: 'CO-STAR' },
        { '@type': 'Thing', name: 'CRAFT' },
        { '@type': 'Thing', name: 'RISEN' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-your-own-framework', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          '当您反复在工作流中的每条Prompt中添加相同的3个以上组件时，构建自定义Prompt框架。使用3至6个组件，文档化前在10条真实Prompt上测试，并验证跨模型可靠性。REPAIR示例展示了支持团队如何将入职时间从2周缩短至3天。',
        ],
      },
      key_takeaways: {
        title: '关键要点',
        items: [
          '当您为工作流中的每条Prompt添加相同的3个以上组件时，构建自定义框架',
          '使用3至6个组件：更少是技术方法，更多会产生阻力',
          '文档化前在10条真实Prompt上进行测试',
          '在GPT-4o和Claude 4.6 Sonnet上验证跨模型可靠性',
          '将框架规格说明连同模板和3个带注释的示例一起存储在版本控制中',
        ],
      },
      framework_vs_technique: {
        title: '框架与技术的区别是什么？',
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt框架是定义每条Prompt所需组件的结构模板；技术是在这些组件之一内应用的模式。' },
          { type: 'in-plain-terms', text: '框架是每条Prompt的脚手架——它决定了各个部分。技术是您在某个部分内所做的事情，例如要求模型逐步推理。' },
        ],
        content: [
          '**Prompt框架是定义每条Prompt所需组件的结构模板；技术是在这些组件之一内应用的模式。** 思维链提示是一种技术——在框架的"任务"组件中应用。CO-STAR是一个框架——它定义了构建整个Prompt的6个组件。',
          '这种区别很重要，因为框架和技术解决不同的问题。框架解决一致性问题：团队中每个人都用相同的结构生成Prompt。技术解决能力问题：它改变模型处理推理过程中特定步骤的方式。',
          '当任务类型与框架的设计用途相符时，使用现有框架（CO-STAR、CRAFT、RISEN、RTF）。当您总是需要添加现有框架未包含的相同领域特定组件时，构建自定义框架。',
        ],
        callouts: [
          { type: 'insight', label: '核心区别', text: '框架解决团队内的一致性问题。技术解决单个Prompt步骤中的能力问题。两者都是必要的；一个不能替代另一个。' },
        ],
      },
      when_to_build: {
        title: '何时构建自定义Prompt框架',
        content: [
          '**当您在特定工作流中对每条Prompt进行相同的3项以上修改时，就应该构建自定义框架。** 如果您总是需要添加合规性约束、引用要求和术语表——这些应该成为自定义框架的正式组件，而不是手动添加项。',
          '需要自定义框架的迹象：',
        ],
        items: [
          '您在每条Prompt中添加相同字段，而这些字段不在任何标准框架中',
          '尽管使用CO-STAR或CRAFT，团队仍生成不一致的Prompt',
          '新团队成员需要超过一周才能写出可接受的Prompt',
          '由于一直解释相同的上下文，您的Prompt平均超过600个词',
          '您创建了一个"基础Prompt"，每个人都在复制和手动修改',
        ],
      },
      five_step_process: {
        title: '5步构建自定义Prompt框架',
        content: [
          '**5步流程：定义目标 → 识别组件 → 在10条Prompt上测试 → 改进 → 文档化。** 每步都有明确的完成标准。不要跳到第5步——对未经测试的框架进行文档化会产生虚假的信心。',
        ],
        numberedItems: [
          { title: '用一句话定义目标', whyItMatters: '准确写出这个框架必须可靠生成的输出内容。这句话决定了每个组件的选择。' },
          { title: '识别3至6个必要组件', whyItMatters: '列出此工作流中每条Prompt需要的输入要素。首先凭记忆写出5条Prompt，然后提取共同点。' },
          { title: '在10条真实Prompt上进行测试', whyItMatters: '使用工作流中的实际Prompt——不要用虚构的例子。通过PromptQuorum在GPT-4o和Claude 4.6 Sonnet上测试，确认跨模型可靠性。' },
          { title: '改进组件列表', whyItMatters: '删除在10条Prompt中出现少于7次的组件。添加在5次以上即兴加入的组件。用修订后的框架重新进行10条Prompt测试。' },
          { title: '文档化与标准化', whyItMatters: '编写一页规格说明：框架名称、每个组件的定义、带占位符的填写模板和3个带注释的示例Prompt。存储在Git或PromptHub的版本控制中。' },
        ],
        callouts: [
          { type: 'warning', label: '不要跳过第3步', text: '不经过10条真实Prompt的测试，框架几乎总会包含在时间压力下被跳过的组件。先测试，再文档化。' },
        ],
      },
      support_example: {
        title: '示例：为支持团队构建框架',
        content: [
          '**一个支持团队的自定义框架——命名为REPAIR——包含5个组件：Role、Escalation condition、Policy anchor、Action path、Intent confirmation。** CO-STAR和CRAFT等标准框架不包含每条支持Prompt都需要的升级逻辑和策略锚定。',
          'REPAIR模板：',
        ],
        items: [
          'R (Role): "You are a tier-1 support agent for [Product]. Your authority covers [scope]."',
          'E (Escalation): "If the issue involves [condition], escalate to tier-2. Do not attempt resolution."',
          'P (Policy anchor): "Apply policy [ID] for [issue type]. Quote the relevant clause in your response."',
          'A (Action path): "Classify the issue, confirm understanding, propose resolution, request confirmation."',
          'I (Intent confirmation): "End every response with: \'Does this address your issue, or would you like me to escalate?\'"',
        ],
      },
      support_example_part2: {
        content: [
          '将REPAIR框架文档化并添加到团队的Prompt库后，新代理的入职时间从2周缩短至3天。Prompt一致性评分（通过Braintrust评估测量）在第一个月内从64%提升至89%。',
        ],
        callouts: [
          { type: 'tip', label: '衡量影响', text: '在部署自定义框架前后追踪入职时间和一致性评分。如果在4周内没有改善，框架需要改进，而不是更多文档。' },
        ],
      },
      common_mistakes: {
        title: '构建自定义框架的常见错误',
        content: [
          '**最常见的错误是在手动测试20条以上真实Prompt之前就构建框架。** 从理论而非观察到的模式构建的框架包含听起来重要但实际上被跳过的组件。',
        ],
        mistakes: [
          { mistake: '组件过多（7个以上）', problem: '编写者在时间压力下跳过部分，破坏一致性。', fix: '限制在6个组件内。将领域特定字段移到扩展中，而不是核心框架中。' },
          { mistake: '复制标准框架并重命名', problem: '重命名的CO-STAR不是自定义框架。', fix: '只有当您有至少2个任何标准框架中都不存在的组件时，才正式化框架。' },
          { mistake: '文档化前没有测试集', problem: '您文档化了一个无法承受真实Prompt考验的框架。', fix: '在编写规格说明前，运行10条真实Prompt通过草稿框架。' },
        ],
      },
      faq: {
        title: '常见问题',
        faqs: [
          { q: '什么是Prompt框架？', a: 'Prompt框架是一种结构化模板，定义了Prompt中应包含哪些组件及其顺序。框架提高了一致性，减少了从零开始编写Prompt的时间。' },
          { q: '何时应该构建自定义框架？', a: '当您为工作流中的每条Prompt对标准框架进行相同的3项以上修改时，请构建自定义框架。' },
          { q: '自定义框架应该有多少个组件？', a: '使用3至6个组件。少于3个是技术方法，超过6个会产生阻力。' },
          { q: '如何命名自定义框架？', a: '用首字母缩略词（如REPAIR）使其易于记忆。测试：新团队成员仅凭名称能记住所有组件吗？' },
          { q: '如何对自定义框架进行版本控制？', a: '将每个版本存储在带日期的文件中。重大变更为主版本，细化调整为次版本，并记录变更原因。' },
          { q: '可以组合多个现有框架吗？', a: '可以，但将结果视为新的自定义框架。命名、记录并测试它，就像它是原创的一样。' },
        ],
      },
      related_reading: {
        title: '相关阅读',
        items: [
          { title: 'CO-STAR Framework: Components and When to Use It', url: '/prompt-engineering/co-star-framework' },
          { title: 'CRAFT Framework: Context, Role, Action, Format, Target', url: '/prompt-engineering/craft-framework' },
          { title: 'RISEN Framework: Role, Instructions, Steps, End Goal, Narrowing', url: '/prompt-engineering/risen-framework' },
          { title: 'Which Prompt Framework Should You Use?', url: '/prompt-engineering/which-framework-to-use' },
          { title: 'Prompt Framework Selection for Teams', url: '/prompt-engineering/prompt-framework-selection-for-teams' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: '参考来源',
        items: [
          { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
          { title: 'Anthropic Prompt Engineering Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
          { title: 'PromptQuorum Multi-Model Testing', url: 'https://www.promptquorum.com/features' },
        ],
      },

      faqSection: {
        title: '常见问题',
        faqs: [
          { q: '提示技巧和提示框架有什么区别?', a: '技巧是单一指令或方法（如"逐步思考"）。框架是具有3+组件的可重用结构，定义如何构建提示。框架可重复使用；技巧是临时的。' },
          { q: '何时应该构建自定义框架而不使用CO-STAR、CRAFT或RISEN?', a: '当您为工作流中的每条提示重复对现有框架进行相同的3+修改时，构建一个。如果您始终向CO-STAR添加政策约束、领域术语和输出模式，这些应该成为您自己框架的组件。' },
          { q: '自定义框架能在不同的AI模型上工作吗?', a: '是的，如果设计正确。避免特定于模型的语法，围绕通用组件（任务、约束、输出格式）构建。在最终确定前在GPT-4o和Claude上测试。如果框架需要按型号重新措辞，请简化它。' },
          { q: '我的自定义框架应该有多少个组件?', a: '使用3-6个组件。少于3个是技巧，不是框架。超过6个会产生摩擦，编写者跳过部分。如果需要更多，将其分为两个针对不同任务类型的专用框架。' },
          { q: '如何测试我的自定义框架是否真正有效?', a: '将其应用于工作流中的10个代表性提示。根据三个标准对输出进行评分：（1）任务完成、（2）格式遵守、（3）质量一致。有效的框架在所有三个方面的评分应为8/10或更高。使用PromptQuorum跨多个模型进行测试。' },
          { q: '我应该如何命名自定义框架?', a: '使用映射到顺序中的组件的首字母缩略词（如REPAIR）。首字母缩略词测试：新团队成员仅从名称就能记住所有组件吗？如果不能，简化您的组件列表。' },
          { q: '我能将CO-STAR、CRAFT和RISEN的组件结合起来吗?', a: '可以，但将其视为新的自定义框架，而不是混合体。命名、记录和测试它，就像它是原创的一样。没有正式化，结合只会创建无文档的临时模式。' },
          { q: '我应该如何对自定义框架进行版本管理?', a: '将每个框架版本存储在日期文件（如repair-v1-2026-05.md）中。将重大更改（添加/删除的组件）标记为主要版本。将改进（定义更新）标记为次要版本。记录每个更改的原因。' },
          { q: '我应该为我的自定义框架记录什么?', a: '编写一份一页的规范：（1）框架名称和目标、（2）带示例的3-6组件定义、（3）填充模板、（4）3个使用框架的带注释的完整示例提示。将其保存在版本控制中，并在您的提示库旁边。' },
          { q: '我如何让我的团队使用我创建的自定义框架?', a: '从使用实际任务示例的30分钟演练开始。在2-3条提示上一起测试。创建可共享的一页规范。第一个月跟踪合规性和影响指标。根据反馈进行迭代。' },
        ],
      },
    },
  },
}
