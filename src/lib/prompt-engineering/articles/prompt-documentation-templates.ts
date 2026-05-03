import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'Prompt Documentation Templates: 6 Reusable Formats for Teams',
    seoTitle: 'Prompt Documentation Templates: 6 Formats for Teams',
    intro: 'Undocumented prompts break silently, get duplicated, and can\'t be audited. Six reusable documentation templates cover every prompt lifecycle stage — from single-use one-liners to versioned production prompts with review history.',
    metaDescription: '6 prompt documentation templates: One-Liner Card, Version Block, Test Suite Header, Decision Log, Change Rationale, API Config. Under 10 minutes each.',
    ogDescription: 'Document prompts in 6 formats: from one-liner cards for quick saves to API config blocks for production. Store alongside prompts, not separately.',
    twitterDescription: 'Undocumented prompts break silently. 6 templates, under 10 minutes each. One-Liner Card to API Config Block.',
    publishDate: '2026-05-02',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Documentation',
    leadAnswerBlock: '**Prompt documentation is the structured record of what a prompt does, why it was written that way, and what tests it must pass.** Without it, prompts are unreviewable, unrollbackable, and irreproducible when the author leaves the team.',
    quickFacts: [
      '6 templates covering the full prompt lifecycle: One-Liner Card to API Config Block',
      'One-Liner Card takes under 2 minutes and prevents the most common documentation failure',
      'Store documentation alongside the prompt — not in a separate system',
      'The "why" field (change rationale) is the most important field in any template',
      'Version Block + Change Rationale required for every production prompt modification',
      'PromptHub maps directly to Version Block and API Config Block fields',
    ],
    toc: [
      { label: 'Why Undocumented Prompts Break Teams', anchor: 'why_documentation' },
      { label: '6 Prompt Documentation Templates', anchor: 'six_templates' },
      { label: 'Where to Store Prompt Documentation', anchor: 'storage_options' },
      { label: 'Common Documentation Mistakes', anchor: 'common_doc_mistakes' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-documentation-templates',
      inLanguage: 'en',
      headline: 'Prompt Documentation Templates: 6 Reusable Formats for Teams',
      description: '6 prompt documentation templates: One-Liner Card, Version Block, Test Suite Header, Decision Log, Change Rationale, API Config Block. Under 10 minutes each.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['prompt documentation', 'prompt templates', 'prompt management', 'prompt engineering team', 'prompt version control'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Why do prompts need documentation?', acceptedAnswer: { '@type': 'Answer', text: 'Prompts without documentation can\'t be reviewed, audited, or reproduced. When the author changes the prompt and leaves no record, the team can\'t diagnose regressions, can\'t roll back to a known-good version, and can\'t onboard new members who need to understand the prompt\'s purpose. Documentation is the minimum requirement for any prompt used in production.' } },
        { '@type': 'Question', name: 'What is the minimum documentation a prompt needs?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum is a one-liner card: prompt purpose (one sentence), target model, date created, and author. This takes 2 minutes to write and prevents the most common documentation failure — prompts whose purpose is unknown 6 months later.' } },
        { '@type': 'Question', name: 'Where should prompt documentation be stored?', acceptedAnswer: { '@type': 'Answer', text: 'Store prompt documentation in the same location as the prompt itself. Git works for prompts stored as code files — the commit message serves as the change log. PromptHub provides structured storage with version history, reviewer signatures, and test results built in. Notion works for teams that manage prompts as documents, but lacks version control and test integration.' } },
        { '@type': 'Question', name: 'How detailed does a prompt\'s change rationale need to be?', acceptedAnswer: { '@type': 'Answer', text: 'A change rationale needs three lines: what changed (one sentence), why (the problem the change solves), and what test confirmed it worked. Teams that skip the "why" invariably revert to the previous pattern after the author who made the change leaves the team.' } },
        { '@type': 'Question', name: 'Which documentation template should I use for a new prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Start with the One-Liner Card for any new prompt. If the prompt goes to production, upgrade to a Version Block. If it has multiple test cases, add a Test Suite Header. If it required a non-obvious design decision, add a Decision Log. Use the full set only for prompts with complex history or compliance requirements.' } },
        { '@type': 'Question', name: 'How often should I update prompt documentation?', acceptedAnswer: { '@type': 'Answer', text: 'Update whenever the prompt text changes. Add a version bump and a Change Rationale entry for every substantive edit. Do not update documentation retroactively — if you can\'t recall why a change was made, note the current state and mark the gap explicitly.' } },
        { '@type': 'Question', name: 'Where should I store prompt documentation?', acceptedAnswer: { '@type': 'Answer', text: 'Store documentation alongside the prompt — in the same file, the same directory, or the same Git commit. Never store it in a separate system (e.g., Notion or Confluence) without a reference link in the prompt file itself. Separated documentation goes stale in days.' } },
        { '@type': 'Question', name: 'Can I use these templates in PromptHub?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PromptHub stores prompt metadata fields that map directly to the Version Block and API Config Block templates. Use the template as your draft, then copy fields into PromptHub when you\'re ready to share the prompt with your team.' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Six templates cover the full prompt lifecycle: One-Liner Card (2 minutes, prevents purpose loss), Version Block (tracks changes), Test Suite Header (defines pass criteria), Decision Log (records design choices), Change Rationale (explains why), API Config Block (production parameters). Store documentation with the prompt — never separately.',
        ],
      },
      key_takeaways: {
        title: 'Key Takeaways',
        items: [
          'Every production prompt needs at minimum a One-Liner Card (purpose, model, date, author)',
          'Every modified prompt needs a Version Block (what changed, why, test result)',
          'Every tested prompt needs a Test Suite Header (pass criteria, golden examples, failure modes)',
          'Store documentation in the same system as the prompt — separate docs get abandoned',
          'The change rationale ("why") is the most important field: teams that skip it revert to old patterns when the author leaves',
          'PromptHub provides the most complete built-in documentation structure; Git works for engineering teams with good commit discipline',
        ],
      },
      why_documentation: {
        title: 'Why Undocumented Prompts Break Teams',
        snippets: [
          { type: 'in-one-sentence', text: 'Undocumented prompts break teams through silent regression, duplication, and knowledge loss — each preventable with 5–10 minutes of documentation per prompt.' },
          { type: 'in-plain-terms', text: 'When a prompt has no record of what it does or why it was written that way, the team can\'t safely change it, recover it after an edit, or hand it off to a new member without context.' },
        ],
        content: [
          '**Undocumented prompts break teams in three ways: silent regression (no record of what changed), duplication (teams re-write existing prompts because they can\'t find them), and knowledge loss (prompts become unmaintainable when the author leaves).** Each failure is preventable with 5–10 minutes of documentation per prompt.',
          'The most expensive failure is silent regression. A team modifies a production prompt to fix one issue, inadvertently breaks another, and has no baseline to compare against. Without version history and a test suite header, diagnosing the regression requires manual comparison and guesswork.',
          'Use documentation for every prompt used more than once, stored in shared infrastructure, or deployed to production. Skip it for one-time exploratory prompts used in a single session.',
        ],
        callouts: [
          { type: 'warning', label: 'Silent regression risk', text: 'Without a Version Block and golden examples, a team modifying a production prompt has no baseline. Every edit is a guess about what the previous state was.' },
        ],
      },
      six_templates: {
        title: '6 Prompt Documentation Templates',
        content: [
          '**Six templates cover the full prompt lifecycle from first draft to production retirement.** Each template is designed to take under 10 minutes to complete and provide the minimum information required for each lifecycle stage.',
        ],
        numberedItems: [
          { title: 'One-Liner Card', whyItMatters: 'Purpose: capture the minimum viable record for any reused prompt. Fields: prompt name, purpose (1 sentence), target model, date created, author. Use when: a prompt is saved for the first time. Storage: any shared tool (Notion, Git, PromptHub).' },
          { title: 'Version Block', whyItMatters: 'Purpose: track prompt history for prompts that change over time. Fields: version number, date modified, author, what changed (1 sentence), reason for change (1 sentence), test result summary. Use when: a prompt is modified. Storage: Git commit message or PromptHub version entry.' },
          { title: 'Test Suite Header', whyItMatters: 'Purpose: define the acceptance criteria before writing tests. Fields: test goal (what the prompt must do), pass criteria (what output characteristics define success), golden examples (2–3 input/output pairs), known failure modes. Use when: a prompt enters the test suite. Storage: alongside the test file in Git or Braintrust project.' },
          { title: 'Decision Log', whyItMatters: 'Purpose: record design decisions that aren\'t obvious from the prompt text. Fields: decision made, alternatives considered, reason this option was chosen, date. Use when: a non-obvious design choice is made (e.g., why a specific temperature was set, why a particular constraint was added). Storage: doc linked from version block.' },
          { title: 'Change Rationale', whyItMatters: 'Purpose: explain why a prompt was changed in terms that allow the change to be reversed or replicated. Fields: problem statement (what was wrong), change made, expected improvement, measured result. Use when: a prompt is modified in response to a failure or regression. Storage: Git commit body or PromptHub change note.' },
          { title: 'API Config Block', whyItMatters: 'Purpose: record the model parameters used in production. Fields: model (e.g., GPT-4o, Claude 4.6 Sonnet), temperature, max tokens, top_p, stop sequences, system prompt version, user prompt version. Use when: a prompt is deployed to production. Storage: deployment config file, referenced in version block.' },
        ],
        callouts: [
          { type: 'insight', label: 'Template selection guide', text: 'New prompt → One-Liner Card. Modified prompt → Version Block. Tested prompt → Test Suite Header. Design decision made → Decision Log. Changed after failure → Change Rationale. Deployed to production → API Config Block.' },
        ],
      },
      storage_options: {
        title: 'Where to Store Prompt Documentation',
        content: [
          '**Store prompt documentation in the same system as the prompt.** If the prompt lives in code, store docs in Git. If it lives in a GUI tool, store docs in that tool\'s notes or linked doc.',
        ],
        items: [
          'Git: best for engineering teams with prompts stored as files. Commit messages serve as version blocks. Free. Requires discipline. No built-in reviewer workflow.',
          'PromptHub: purpose-built prompt management with version history, reviewer signatures, and test result storage. $0–$49/month. Best for teams with 3+ people writing prompts.',
          'Notion: works for teams managing prompts as documents rather than code. Easy to set up. Lacks version control and test integration — treat as a documentation layer, not a source of truth.',
          'Braintrust: stores test suite headers and evaluation results alongside prompt versions. Best for teams running regular automated evaluations.',
        ],
        callouts: [
          { type: 'tip', label: 'Co-locate documentation', text: 'Documentation stored in a separate system (Notion, Confluence, Google Docs) from the prompt will go stale within days. The only documentation that stays current is documentation that lives with the prompt.' },
        ],
      },
      common_doc_mistakes: {
        title: 'Common Documentation Mistakes',
        mistakes: [
          {
            mistake: 'No documentation at all',
            problem: 'Prompts can\'t be recovered after edits, team can\'t understand why a prompt was written a certain way',
            fix: 'Use at minimum the One-Liner Card template — 3 fields, under 2 minutes',
          },
          {
            mistake: 'Documentation stored separately from the prompt',
            problem: 'Documentation goes stale as prompts change; teams forget to update it',
            fix: 'Store documentation in the same file or Git commit as the prompt itself',
          },
          {
            mistake: 'Missing "why" field — only describes what the prompt does',
            problem: 'Future editors don\'t know constraints, can\'t safely refactor',
            fix: 'Add a "rationale" field to every template: 1-2 sentences on why this structure was chosen',
          },
          {
            mistake: 'No version block',
            problem: 'No way to know if the prompt running in production matches the documented version',
            fix: 'Add version and dateModified to every production prompt file',
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Why do prompts need documentation?', a: 'Prompts without documentation can\'t be reviewed, audited, or reproduced. When the author changes the prompt and leaves no record, the team can\'t diagnose regressions, can\'t roll back to a known-good version, and can\'t onboard new members.' },
          { q: 'What is the minimum documentation a prompt needs?', a: 'The minimum is a one-liner card: prompt purpose (one sentence), target model, date created, and author. This takes 2 minutes to write and prevents the most common documentation failure — prompts whose purpose is unknown 6 months later.' },
          { q: 'Where should prompt documentation be stored?', a: 'Store prompt documentation in the same location as the prompt itself. Git works for prompts stored as code files. PromptHub provides structured storage with version history and reviewer signatures built in. Notion works for teams managing prompts as documents, but lacks version control.' },
          { q: 'How detailed does a change rationale need to be?', a: 'Three lines: what changed (one sentence), why (the problem the change solves), and what test confirmed it worked. Teams that skip the "why" invariably revert to the previous pattern after the author leaves.' },
          { q: 'Which documentation template should I use for a new prompt?', a: 'Start with the One-Liner Card. If the prompt goes to production, upgrade to a Version Block. If it has multiple test cases, add a Test Suite Header. If it required a non-obvious design decision, add a Decision Log.' },
          { q: 'How often should I update prompt documentation?', a: 'Update whenever the prompt text changes. Add a version bump and a Change Rationale entry for every substantive edit. Do not update documentation retroactively.' },
          { q: 'Where should I store prompt documentation?', a: 'Store documentation alongside the prompt — in the same file, directory, or Git commit. Never store it in a separate system without a reference link in the prompt file itself. Separated documentation goes stale in days.' },
          { q: 'Can I use these templates in PromptHub?', a: 'Yes. PromptHub stores prompt metadata fields that map directly to the Version Block and API Config Block templates. Use the template as your draft, then copy fields into PromptHub when ready to share with your team.' },
        ],
      },
      related_reading: {
        title: 'Related Reading',
        items: [
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Library Management for Teams', url: '/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Team-Steuerung',
    title: 'Prompt-Dokumentationsvorlagen: 6 wiederverwendbare Formate (2026)',
    seoTitle: 'Prompt-Dokumentationsvorlagen: 6 Formate für Teams',
    intro: 'Undokumentierte Prompts scheitern lautlos, werden dupliziert und können nicht auditiert werden. Sechs wiederverwendbare Dokumentationsvorlagen decken jeden Lebenszyklus-Abschnitt ab — von einfachen Einzeilern bis zu versionierten Produktions-Prompts mit Prüfverlauf.',
    metaDescription: '6 Prompt-Dokumentationsvorlagen: Einzeiler-Karte, Versionsblock, Testsuite-Header, Entscheidungsprotokoll, Änderungsbegründung und API-Block. Unter 10 Minuten.',
    ogDescription: 'Prompts in 6 Formaten dokumentieren: von Einzeiler-Karten für schnelle Speicherungen bis zu API-Konfigurationsblöcken für die Produktion. Dokumentation direkt beim Prompt aufbewahren.',
    twitterDescription: 'Undokumentierte Prompts scheitern lautlos. 6 Vorlagen, jeweils unter 10 Minuten. Von der Einzeiler-Karte bis zum API-Konfigurationsblock.',
    publishDate: '2026-05-02',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt-Dokumentation',
    leadAnswerBlock: '**Prompt-Dokumentation ist die strukturierte Aufzeichnung dessen, was ein Prompt tut, warum er so geschrieben wurde und welche Tests er bestehen muss.** Ohne sie sind Prompts nicht überprüfbar, nicht zurückrollbar und nicht reproduzierbar.',
    quickFacts: [
      '6 Vorlagen für den vollständigen Prompt-Lebenszyklus: Einzeiler-Karte bis API-Konfigurationsblock',
      'Einzeiler-Karte dauert unter 2 Minuten und verhindert den häufigsten Dokumentationsfehler',
      'Dokumentation direkt beim Prompt speichern — nicht in einem separaten System',
      'Das „Warum"-Feld (Änderungsbegründung) ist das wichtigste Feld jeder Vorlage',
      'Versionsblock + Änderungsbegründung für jede Produktions-Prompt-Änderung erforderlich',
      'PromptHub bildet Versionblock- und API-Konfigurationsblock-Felder direkt ab',
    ],
    toc: [
      { label: 'Warum undokumentierte Prompts Teams zerstören', anchor: 'why_documentation' },
      { label: '6 Prompt-Dokumentationsvorlagen', anchor: 'six_templates' },
      { label: 'Wo Prompt-Dokumentation gespeichert werden soll', anchor: 'storage_options' },
      { label: 'Häufige Dokumentationsfehler', anchor: 'common_doc_mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Weiterführende Artikel', anchor: 'related_reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-documentation-templates?lang=de',
      inLanguage: 'de',
      headline: 'Prompt-Dokumentationsvorlagen: 6 wiederverwendbare Formate (2026)',
      description: '6 Prompt-Dokumentationsvorlagen: Einzeiler-Karte, Versionsblock, Testsuite-Header, Entscheidungsprotokoll, Änderungsbegründung und API-Konfigurationsblock.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt-Dokumentation', 'Prompt-Vorlagen', 'Prompt-Management', 'Prompt-Engineering-Team'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Warum brauchen Prompts eine Dokumentation?', acceptedAnswer: { '@type': 'Answer', text: 'Prompts ohne Dokumentation können nicht geprüft, auditiert oder reproduziert werden. Wenn der Autor den Prompt ändert und keine Aufzeichnung hinterlässt, kann das Team keine Regressionen diagnostizieren, nicht auf eine funktionierende Version zurückrollen und keine neuen Mitglieder einarbeiten.' } },
        { '@type': 'Question', name: 'Wo sollte Prompt-Dokumentation gespeichert werden?', acceptedAnswer: { '@type': 'Answer', text: 'Speichern Sie die Prompt-Dokumentation am selben Ort wie den Prompt selbst. Git eignet sich für Prompts als Code-Dateien. PromptHub bietet strukturierte Speicherung mit Versionsverlauf und Reviewer-Signaturen. Notion eignet sich für Teams, die Prompts als Dokumente verwalten.' } },
        { '@type': 'Question', name: 'Welche Vorlage soll ich für einen neuen Prompt verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Beginnen Sie mit der Einzeiler-Karte für jeden neuen Prompt. Wenn der Prompt in die Produktion geht, aktualisieren Sie auf einen Versionsblock. Wenn er mehrere Testfälle hat, fügen Sie einen Testsuite-Header hinzu. Wenn eine nicht offensichtliche Designentscheidung getroffen wurde, fügen Sie ein Entscheidungsprotokoll hinzu.' } },
        { '@type': 'Question', name: 'Wie oft soll die Prompt-Dokumentation aktualisiert werden?', acceptedAnswer: { '@type': 'Answer', text: 'Aktualisieren Sie immer, wenn sich der Prompt-Text ändert. Fügen Sie bei jeder wesentlichen Bearbeitung einen Versions-Bump und einen Änderungsbegründungs-Eintrag hinzu. Dokumentation nicht rückwirkend aktualisieren.' } },
        { '@type': 'Question', name: 'Kann ich diese Vorlagen in PromptHub verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. PromptHub speichert Prompt-Metadatenfelder, die direkt auf die Versionsblock- und API-Konfigurationsblock-Vorlagen abgebildet werden. Verwenden Sie die Vorlage als Entwurf und kopieren Sie die Felder dann in PromptHub.' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Sechs Vorlagen decken den vollständigen Prompt-Lebenszyklus ab: Einzeiler-Karte (2 Minuten, verhindert Zweckverlust), Versionsblock (verfolgt Änderungen), Testsuite-Header (definiert Abnahmekriterien), Entscheidungsprotokoll (erfasst Designentscheidungen), Änderungsbegründung (erklärt Warum), API-Konfigurationsblock (Produktionsparameter). Dokumentation direkt beim Prompt speichern — niemals getrennt.',
        ],
      },
      key_takeaways: {
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Jeder Produktions-Prompt benötigt mindestens eine Einzeiler-Karte (Zweck, Modell, Datum, Autor)',
          'Jeder geänderte Prompt benötigt einen Versionsblock (Was geändert wurde, warum, Testergebnis)',
          'Jeder getestete Prompt benötigt einen Testsuite-Header (Erfolgskriterien, Golden-Examples, Fehlermuster)',
          'Dokumentation am selben Ort wie der Prompt speichern — separate Dokumente werden aufgegeben',
          'Die Änderungsbegründung ("Warum") ist das wichtigste Feld',
        ],
      },
      why_documentation: {
        title: 'Warum undokumentierte Prompts Teams zerstören',
        snippets: [
          { type: 'in-one-sentence', text: 'Undokumentierte Prompts zerstören Teams durch stille Regression, Duplizierung und Wissensverlust — jedes durch 5–10 Minuten Dokumentation pro Prompt vermeidbar.' },
          { type: 'in-plain-terms', text: 'Wenn ein Prompt keine Aufzeichnung darüber hat, was er tut oder warum er so geschrieben wurde, kann das Team ihn nicht sicher ändern, nach einer Bearbeitung nicht wiederherstellen oder ohne Kontext an ein neues Mitglied weitergeben.' },
        ],
        content: [
          '**Undokumentierte Prompts scheitern auf drei Arten: stille Regression (kein Nachweis, was sich geändert hat), Duplizierung und Wissensverlust.** Jeder Fehler ist mit 5–10 Minuten Dokumentation pro Prompt vermeidbar.',
          'Die teuerste Fehlerart ist stille Regression. Ein Team ändert einen Produktions-Prompt, um ein Problem zu beheben, beschädigt dabei unbeabsichtigt ein anderes und hat keine Ausgangsbasis für den Vergleich.',
          'Dokumentieren Sie jeden Prompt, der mehr als einmal verwendet, in gemeinsamer Infrastruktur gespeichert oder in der Produktion eingesetzt wird.',
        ],
        callouts: [
          { type: 'warning', label: 'Risiko stiller Regression', text: 'Ohne Versionsblock und Golden Examples hat ein Team, das einen Produktions-Prompt modifiziert, keine Basislinie. Jede Bearbeitung ist eine Vermutung über den vorherigen Zustand.' },
        ],
      },
      six_templates: {
        title: '6 Prompt-Dokumentationsvorlagen',
        content: [
          '**Sechs Vorlagen decken den gesamten Prompt-Lebenszyklus ab.** Jede Vorlage ist so konzipiert, dass sie in unter 10 Minuten ausgefüllt werden kann.',
        ],
        numberedItems: [
          { title: 'Einzeiler-Karte', whyItMatters: 'Zweck: minimaler Nachweis für jeden wiederverwendeten Prompt. Felder: Prompt-Name, Zweck (1 Satz), Zielmodell, Erstellungsdatum, Autor.' },
          { title: 'Versionsblock', whyItMatters: 'Zweck: Prompt-Verlauf verfolgen. Felder: Versionsnummer, Änderungsdatum, Autor, Was geändert wurde (1 Satz), Grund für die Änderung (1 Satz), Testergebnis-Zusammenfassung.' },
          { title: 'Testsuite-Header', whyItMatters: 'Zweck: Abnahmekriterien vor dem Schreiben von Tests definieren. Felder: Testziel, Erfolgskriterien, Golden-Examples (2–3 Ein-/Ausgabe-Paare), bekannte Fehlermuster.' },
          { title: 'Entscheidungsprotokoll', whyItMatters: 'Zweck: Designentscheidungen aufzeichnen, die nicht offensichtlich sind. Felder: getroffene Entscheidung, betrachtete Alternativen, Begründung, Datum.' },
          { title: 'Änderungsbegründung', whyItMatters: 'Zweck: erklären, warum ein Prompt geändert wurde. Felder: Problembeschreibung, vorgenommene Änderung, erwartete Verbesserung, gemessenes Ergebnis.' },
          { title: 'API-Konfigurationsblock', whyItMatters: 'Zweck: Modellparameter in der Produktion aufzeichnen. Felder: Modell, Temperatur, Max-Tokens, Top-P, Stop-Sequenzen, System-Prompt-Version, User-Prompt-Version.' },
        ],
        callouts: [
          { type: 'insight', label: 'Vorlagenauswahl-Leitfaden', text: 'Neuer Prompt → Einzeiler-Karte. Geänderter Prompt → Versionsblock. Getesteter Prompt → Testsuite-Header. Designentscheidung getroffen → Entscheidungsprotokoll. Nach Ausfall geändert → Änderungsbegründung. In Produktion deployt → API-Konfigurationsblock.' },
        ],
      },
      storage_options: {
        title: 'Wo Prompt-Dokumentation gespeichert werden soll',
        content: [
          '**Speichern Sie die Prompt-Dokumentation im selben System wie den Prompt.**',
        ],
        items: [
          'Git: am besten für Engineering-Teams mit Prompts als Dateien. Commit-Nachrichten dienen als Versionsblöcke. Kostenlos.',
          'PromptHub: Prompt-Management mit Versionsverlauf, Reviewer-Signaturen und Testergebnis-Speicherung. 0–49 $/Monat.',
          'Notion: für Teams, die Prompts als Dokumente verwalten. Einfach einzurichten, fehlt Versionskontrolle.',
          'Braintrust: speichert Testsuite-Header und Evaluierungsergebnisse neben Prompt-Versionen.',
        ],
        callouts: [
          { type: 'tip', label: 'Dokumentation gemeinsam aufbewahren', text: 'Dokumentation in einem separaten System (Notion, Confluence, Google Docs) wird innerhalb von Tagen veraltet. Nur Dokumentation, die beim Prompt lebt, bleibt aktuell.' },
        ],
      },
      common_doc_mistakes: {
        title: 'Häufige Dokumentationsfehler',
        mistakes: [
          {
            mistake: 'Gar keine Dokumentation',
            problem: 'Prompts können nach Bearbeitungen nicht wiederhergestellt werden; das Team versteht nicht, warum ein Prompt so geschrieben wurde',
            fix: 'Verwenden Sie mindestens die Einzeiler-Karte — 3 Felder, unter 2 Minuten',
          },
          {
            mistake: 'Dokumentation getrennt vom Prompt gespeichert',
            problem: 'Dokumentation veraltet, wenn sich Prompts ändern; Teams vergessen, sie zu aktualisieren',
            fix: 'Dokumentation in derselben Datei oder demselben Git-Commit wie den Prompt speichern',
          },
          {
            mistake: 'Fehlendes „Warum"-Feld — beschreibt nur, was der Prompt tut',
            problem: 'Zukünftige Bearbeiter kennen keine Einschränkungen und können nicht sicher refaktorieren',
            fix: 'Ein „Begründung"-Feld zu jeder Vorlage hinzufügen: 1–2 Sätze, warum diese Struktur gewählt wurde',
          },
          {
            mistake: 'Kein Versionsblock',
            problem: 'Kein Weg zu wissen, ob der in der Produktion laufende Prompt mit der dokumentierten Version übereinstimmt',
            fix: 'Version und Änderungsdatum zu jeder Produktions-Prompt-Datei hinzufügen',
          },
        ],
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Warum brauchen Prompts eine Dokumentation?', a: 'Prompts ohne Dokumentation können nicht geprüft, auditiert oder reproduziert werden. Das Team kann keine Regressionen diagnostizieren und nicht auf bekannte gute Versionen zurückrollen.' },
          { q: 'Was ist die Mindestdokumentation für einen Prompt?', a: 'Das Minimum ist eine Einzeiler-Karte: Prompt-Zweck (ein Satz), Zielmodell, Erstellungsdatum, Autor. Dauert 2 Minuten und verhindert den häufigsten Dokumentationsfehler.' },
          { q: 'Wo soll Prompt-Dokumentation gespeichert werden?', a: 'Am selben Ort wie der Prompt selbst. Git für Code-Dateien, PromptHub für strukturierte Speicherung mit Versionsverlauf.' },
          { q: 'Wie detailliert muss eine Änderungsbegründung sein?', a: 'Drei Zeilen: Was geändert wurde, warum, und welcher Test bestätigt hat, dass es funktioniert.' },
          { q: 'Welche Vorlage für einen neuen Prompt?', a: 'Mit der Einzeiler-Karte beginnen. Bei Produktion: Versionsblock hinzufügen. Bei mehreren Tests: Testsuite-Header. Bei nicht offensichtlicher Designentscheidung: Entscheidungsprotokoll.' },
          { q: 'Wie oft soll die Dokumentation aktualisiert werden?', a: 'Bei jeder Änderung des Prompt-Texts. Versions-Bump und Änderungsbegründung für jede wesentliche Bearbeitung. Nicht rückwirkend aktualisieren.' },
          { q: 'Kann ich diese Vorlagen in PromptHub verwenden?', a: 'Ja. PromptHub bildet Metadatenfelder direkt auf Versionsblock- und API-Konfigurationsblock-Vorlagen ab.' },
        ],
      },
      related_reading: {
        title: 'Weiterführende Artikel',
        items: [
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Library Management for Teams', url: '/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Gouvernance d\'équipe',
    title: 'Modèles de documentation des prompts : 6 formats réutilisables pour les équipes',
    seoTitle: 'Modèles de documentation des prompts : 6 formats',
    intro: 'Les prompts non documentés échouent silencieusement, sont dupliqués et ne peuvent pas être audités. Six modèles de documentation réutilisables couvrent chaque étape du cycle de vie d\'un prompt.',
    metaDescription: '6 modèles de documentation : fiche one-liner, bloc de version, en-tête de test, journal de décision, justification et bloc API. Moins de 10 minutes.',
    ogDescription: 'Documenter les prompts en 6 formats : des fiches one-liner pour la sauvegarde rapide aux blocs de config API pour la production. Stocker avec les prompts, pas séparément.',
    twitterDescription: 'Les prompts non documentés échouent silencieusement. 6 modèles, moins de 10 minutes chacun. De la fiche one-liner au bloc de config API.',
    publishDate: '2026-05-02',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Documentation des prompts',
    leadAnswerBlock: '**La documentation des prompts est le record structuré de ce que fait un prompt, pourquoi il a été écrit ainsi et quels tests il doit passer.** Sans elle, les prompts ne peuvent être ni révisés, ni annulés, ni reproduits.',
    quickFacts: [
      '6 modèles couvrant le cycle de vie complet des prompts : Fiche one-liner au Bloc de config API',
      'La fiche one-liner prend moins de 2 minutes et prévient l\'échec de documentation le plus courant',
      'Stocker la documentation avec le prompt — pas dans un système séparé',
      'Le champ « pourquoi » (justification de changement) est le champ le plus important de tout modèle',
      'Bloc de version + Justification de changement requis pour toute modification de prompt en production',
      'PromptHub correspond directement aux champs Bloc de version et Bloc de config API',
    ],
    toc: [
      { label: 'Pourquoi les prompts non documentés font échouer les équipes', anchor: 'why_documentation' },
      { label: '6 modèles de documentation des prompts', anchor: 'six_templates' },
      { label: 'Où stocker la documentation des prompts', anchor: 'storage_options' },
      { label: 'Erreurs courantes de documentation', anchor: 'common_doc_mistakes' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Lectures complémentaires', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-documentation-templates?lang=fr',
      inLanguage: 'fr',
      headline: 'Modèles de documentation des prompts : 6 formats réutilisables pour les équipes',
      description: '6 modèles de documentation des prompts : Fiche one-liner, Bloc de version, En-tête de suite de tests, Journal de décision, Justification de changement, Bloc de config API.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['documentation des prompts', 'modèles de prompts', 'gestion des prompts', 'équipe prompt engineering'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Pourquoi les prompts ont-ils besoin de documentation ?', acceptedAnswer: { '@type': 'Answer', text: 'Les prompts sans documentation ne peuvent être ni révisés, ni audités, ni reproduits. Quand l\'auteur modifie le prompt sans laisser de trace, l\'équipe ne peut pas diagnostiquer les régressions ni revenir à une version fonctionnelle.' } },
        { '@type': 'Question', name: 'Quelle est la documentation minimale nécessaire pour un prompt ?', acceptedAnswer: { '@type': 'Answer', text: 'Le minimum est une fiche one-liner : objectif du prompt (une phrase), modèle cible, date de création et auteur. Cela prend 2 minutes et prévient l\'échec de documentation le plus courant.' } },
        { '@type': 'Question', name: 'Quel modèle utiliser pour un nouveau prompt ?', acceptedAnswer: { '@type': 'Answer', text: 'Commencez par la fiche one-liner. Si le prompt passe en production, passez au bloc de version. S\'il a plusieurs cas de test, ajoutez un en-tête de suite de tests. Si une décision de conception non évidente a été prise, ajoutez un journal de décision.' } },
        { '@type': 'Question', name: 'À quelle fréquence mettre à jour la documentation des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Mettez à jour chaque fois que le texte du prompt change. Ajoutez une incrémentation de version et une entrée de justification de changement pour chaque modification substantielle. Ne mettez pas à jour la documentation rétroactivement.' } },
        { '@type': 'Question', name: 'Puis-je utiliser ces modèles dans PromptHub ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. PromptHub stocke des champs de métadonnées de prompts qui correspondent directement aux modèles Bloc de version et Bloc de config API. Utilisez le modèle comme brouillon, puis copiez les champs dans PromptHub.' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Six modèles couvrent le cycle de vie complet des prompts : Fiche one-liner (2 minutes, prévient la perte de l\'objectif), Bloc de version (suit les changements), En-tête de suite de tests (définit les critères de réussite), Journal de décision (enregistre les choix de conception), Justification de changement (explique le pourquoi), Bloc de config API (paramètres de production). Stocker la documentation avec le prompt — jamais séparément.',
        ],
      },
      key_takeaways: {
        title: 'Points clés',
        items: [
          'Tout prompt de production nécessite au minimum une fiche one-liner (objectif, modèle, date, auteur)',
          'Tout prompt modifié nécessite un bloc de version (ce qui a changé, pourquoi, résultat de test)',
          'Tout prompt testé nécessite un en-tête de suite de tests',
          'Stocker la documentation au même endroit que le prompt',
          'La justification du changement (« pourquoi ») est le champ le plus important',
        ],
      },
      why_documentation: {
        title: 'Pourquoi les prompts non documentés font échouer les équipes',
        snippets: [
          { type: 'in-one-sentence', text: 'Les prompts non documentés font échouer les équipes par régression silencieuse, duplication et perte de connaissances — chacun évitable avec 5 à 10 minutes de documentation par prompt.' },
          { type: 'in-plain-terms', text: 'Quand un prompt n\'a aucune trace de ce qu\'il fait ou pourquoi il a été écrit ainsi, l\'équipe ne peut pas le modifier en toute sécurité, le récupérer après une édition, ou le transmettre à un nouveau membre sans contexte.' },
        ],
        content: [
          '**Les prompts non documentés font échouer les équipes de trois façons : régression silencieuse, duplication et perte de connaissances.** Chaque échec est évitable avec 5 à 10 minutes de documentation par prompt.',
          'L\'échec le plus coûteux est la régression silencieuse. Une équipe modifie un prompt de production, casse inadvertamment autre chose, et n\'a pas de référence pour comparer.',
          'Documentez chaque prompt utilisé plus d\'une fois, stocké dans une infrastructure partagée ou déployé en production.',
        ],
        callouts: [
          { type: 'warning', label: 'Risque de régression silencieuse', text: 'Sans bloc de version et exemples golden, une équipe modifiant un prompt de production n\'a pas de référence. Chaque modification est une supposition sur l\'état précédent.' },
        ],
      },
      six_templates: {
        title: '6 modèles de documentation des prompts',
        content: [
          '**Six modèles couvrent l\'intégralité du cycle de vie des prompts.** Chaque modèle est conçu pour être complété en moins de 10 minutes.',
        ],
        numberedItems: [
          { title: 'Fiche one-liner', whyItMatters: 'Objectif : enregistrement minimum pour tout prompt réutilisé. Champs : nom du prompt, objectif (1 phrase), modèle cible, date de création, auteur.' },
          { title: 'Bloc de version', whyItMatters: 'Objectif : suivre l\'historique du prompt. Champs : numéro de version, date de modification, auteur, ce qui a changé (1 phrase), raison du changement (1 phrase), résumé des résultats de test.' },
          { title: 'En-tête de suite de tests', whyItMatters: 'Objectif : définir les critères d\'acceptation avant d\'écrire les tests. Champs : objectif du test, critères de réussite, exemples golden (2–3 paires entrée/sortie), modes d\'échec connus.' },
          { title: 'Journal de décision', whyItMatters: 'Objectif : enregistrer les décisions de conception non évidentes. Champs : décision prise, alternatives considérées, raison du choix, date.' },
          { title: 'Justification de changement', whyItMatters: 'Objectif : expliquer pourquoi un prompt a été modifié. Champs : énoncé du problème, changement effectué, amélioration attendue, résultat mesuré.' },
          { title: 'Bloc de configuration API', whyItMatters: 'Objectif : enregistrer les paramètres du modèle en production. Champs : modèle, température, max tokens, top_p, séquences d\'arrêt, version du system prompt, version du user prompt.' },
        ],
        callouts: [
          { type: 'insight', label: 'Guide de sélection des modèles', text: 'Nouveau prompt → Fiche one-liner. Prompt modifié → Bloc de version. Prompt testé → En-tête de suite de tests. Décision de conception prise → Journal de décision. Modifié après échec → Justification de changement. Déployé en production → Bloc de config API.' },
        ],
      },
      storage_options: {
        title: 'Où stocker la documentation des prompts',
        content: [
          '**Stockez la documentation des prompts dans le même système que le prompt.**',
        ],
        items: [
          'Git : idéal pour les équipes d\'ingénierie avec des prompts stockés comme fichiers. Les messages de commit servent de blocs de version. Gratuit.',
          'PromptHub : gestion des prompts avec historique des versions, signatures des réviseurs et stockage des résultats de tests.',
          'Notion : pour les équipes gérant les prompts comme des documents. Facile à configurer, manque de contrôle de version.',
          'Braintrust : stocke les en-têtes de suite de tests et les résultats d\'évaluation avec les versions de prompts.',
        ],
        callouts: [
          { type: 'tip', label: 'Colocaliser la documentation', text: 'La documentation stockée dans un système séparé (Notion, Confluence, Google Docs) du prompt deviendra obsolète en quelques jours. Seule la documentation qui vit avec le prompt reste à jour.' },
        ],
      },
      common_doc_mistakes: {
        title: 'Erreurs courantes de documentation',
        mistakes: [
          {
            mistake: 'Aucune documentation',
            problem: 'Les prompts ne peuvent pas être récupérés après modifications, l\'équipe ne comprend pas pourquoi un prompt a été écrit d\'une certaine façon',
            fix: 'Utiliser au minimum la fiche one-liner — 3 champs, moins de 2 minutes',
          },
          {
            mistake: 'Documentation stockée séparément du prompt',
            problem: 'La documentation devient obsolète quand les prompts changent ; les équipes oublient de la mettre à jour',
            fix: 'Stocker la documentation dans le même fichier ou commit Git que le prompt',
          },
          {
            mistake: 'Champ « pourquoi » manquant — décrit seulement ce que fait le prompt',
            problem: 'Les futurs éditeurs ne connaissent pas les contraintes, ne peuvent pas refactoriser en toute sécurité',
            fix: 'Ajouter un champ « justification » à chaque modèle : 1 à 2 phrases expliquant pourquoi cette structure a été choisie',
          },
          {
            mistake: 'Pas de bloc de version',
            problem: 'Impossible de savoir si le prompt en production correspond à la version documentée',
            fix: 'Ajouter version et dateModified à chaque fichier de prompt de production',
          },
        ],
      },
      faq: {
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Pourquoi les prompts ont-ils besoin de documentation ?', a: 'Les prompts sans documentation ne peuvent être ni révisés, ni audités, ni reproduits. L\'équipe ne peut pas diagnostiquer les régressions ni revenir à une version fonctionnelle.' },
          { q: 'Quelle est la documentation minimale ?', a: 'Le minimum est une fiche one-liner : objectif, modèle cible, date de création, auteur. Cela prend 2 minutes.' },
          { q: 'Où stocker la documentation ?', a: 'Au même endroit que le prompt. Git pour les fichiers de code, PromptHub pour la gestion structurée avec historique.' },
          { q: 'Quel modèle pour un nouveau prompt ?', a: 'Commencez par la fiche one-liner. En production → Bloc de version. Tests multiples → En-tête de suite de tests. Décision non évidente → Journal de décision.' },
          { q: 'À quelle fréquence mettre à jour ?', a: 'À chaque modification du texte du prompt. Ajoutez version et justification pour chaque changement substantiel.' },
          { q: 'Puis-je utiliser ces modèles dans PromptHub ?', a: 'Oui. PromptHub correspond directement aux champs des modèles Bloc de version et Bloc de config API.' },
        ],
      },
      related_reading: {
        title: 'Lectures complémentaires',
        items: [
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Library Management for Teams', url: '/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'チームガバナンス',
    title: 'Prompt文書化テンプレート：チーム向け6つの再利用可能フォーマット',
    seoTitle: 'Prompt文書化テンプレート：チーム向け6種類のフォーマット',
    intro: '文書化されていないPromptは静かに失敗し、重複され、監査できません。6つの再利用可能な文書化テンプレートがPromptのライフサイクル全段階をカバーします。',
    metaDescription: 'チーム向け6つのPrompt文書化テンプレート：ワンライナーカード、バージョンブロック、テストスイートヘッダー、決定ログ、変更理由、APIコンフィグブロック。それぞれ10分以内。',
    ogDescription: '6つのフォーマットでPromptを文書化：クイック保存のワンライナーカードから本番用APIコンフィグブロックまで。Promptと一緒に保存（別々ではなく）。',
    twitterDescription: '文書化されていないPromptは静かに失敗します。6テンプレート、それぞれ10分以内。ワンライナーカードからAPIコンフィグブロックまで。',
    publishDate: '2026-05-02',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt文書化',
    leadAnswerBlock: '**Prompt文書化とは、Promptが何をするか、なぜそのように書かれたか、どのテストに合格しなければならないかの構造化された記録です。** なければPromptはレビューも、ロールバックも、再現もできません。',
    quickFacts: [
      '6テンプレートがPromptの完全なライフサイクルをカバー：ワンライナーカードからAPIコンフィグブロックまで',
      'ワンライナーカードは2分以内で最も一般的な文書化の失敗を防ぐ',
      'Promptと一緒に文書化を保存する — 別のシステムには保存しない',
      '「なぜ」フィールド（変更理由）はすべてのテンプレートで最も重要なフィールド',
      'バージョンブロック + 変更理由はすべての本番Prompt変更に必要',
      'PromptHubはバージョンブロックとAPIコンフィグブロックのフィールドに直接対応',
    ],
    toc: [
      { label: '文書化されていないPromptがなぜチームを失敗させるか', anchor: 'why_documentation' },
      { label: '6つのPrompt文書化テンプレート', anchor: 'six_templates' },
      { label: 'Prompt文書化の保存場所', anchor: 'storage_options' },
      { label: 'よくある文書化の間違い', anchor: 'common_doc_mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連記事', anchor: 'related_reading' },
      { label: '情報源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-documentation-templates?lang=ja',
      inLanguage: 'ja',
      headline: 'Prompt文書化テンプレート：チーム向け6つの再利用可能フォーマット',
      description: 'チーム向け6つのPrompt文書化テンプレート：ワンライナーカード、バージョンブロック、テストスイートヘッダー、決定ログ、変更理由、APIコンフィグブロック。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt文書化', 'Promptテンプレート', 'Prompt管理', 'チームプロンプトエンジニアリング'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'なぜPromptには文書化が必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '文書化されていないPromptはレビュー、監査、再現ができません。作成者がPromptを変更して記録を残さないと、チームは回帰を診断できず、既知の良い状態にロールバックできません。' } },
        { '@type': 'Question', name: 'Promptに必要な最低限の文書化は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '最低限はワンライナーカードです：Promptの目的（1文）、対象モデル、作成日、作成者。2分で書け、最も一般的な文書化の失敗を防ぎます。' } },
        { '@type': 'Question', name: '新しいPromptにはどのテンプレートを使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'まずワンライナーカードから始めます。本番に行く場合はバージョンブロックにアップグレード。複数のテストケースがある場合はテストスイートヘッダーを追加。非明白な設計決定があった場合は決定ログを追加します。' } },
        { '@type': 'Question', name: 'Prompt文書化の更新頻度は？', acceptedAnswer: { '@type': 'Answer', text: 'Promptテキストが変更されるたびに更新します。すべての実質的な編集にバージョンバンプと変更理由のエントリを追加します。遡って文書化を更新しないでください。' } },
        { '@type': 'Question', name: 'これらのテンプレートをPromptHubで使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。PromptHubはバージョンブロックとAPIコンフィグブロックのテンプレートに直接マッピングされるPromptメタデータフィールドを保存します。' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          '6つのテンプレートがPromptのライフサイクル全体をカバーします：ワンライナーカード（2分、目的の喪失を防ぐ）、バージョンブロック（変更を追跡）、テストスイートヘッダー（合格基準を定義）、決定ログ（設計選択を記録）、変更理由（なぜを説明）、APIコンフィグブロック（本番パラメータ）。文書化はPromptと一緒に保存—別々には保存しない。',
        ],
      },
      key_takeaways: {
        title: '重要なポイント',
        items: [
          'すべての本番Promptは最低限ワンライナーカード（目的、モデル、日付、作成者）が必要',
          'すべての変更されたPromptはバージョンブロックが必要',
          'すべてのテストされたPromptはテストスイートヘッダーが必要',
          'Promptと同じ場所に文書化を保存する — 別ドキュメントは放置される',
          '変更理由（「なぜ」）が最も重要なフィールド',
        ],
      },
      why_documentation: {
        title: '文書化されていないPromptがなぜチームを失敗させるのか',
        snippets: [
          { type: 'in-one-sentence', text: '文書化されていないPromptは静かな回帰、重複、知識の損失によってチームを失敗させます — Promptごとに5〜10分の文書化で各々防げます。' },
          { type: 'in-plain-terms', text: 'Promptに何をするか、なぜそのように書かれたかの記録がない場合、チームはそれを安全に変更したり、編集後に回復したり、コンテキストなしで新しいメンバーに引き渡すことができません。' },
        ],
        content: [
          '**文書化されていないPromptは3つの方法でチームを失敗させます：静かな回帰（何が変わったかの記録なし）、重複、知識の損失。** 各失敗はPromptあたり5〜10分の文書化で防げます。',
          '最もコストのかかる失敗は静かな回帰です。チームが本番Promptを修正して一つの問題を解決し、意図せず別の問題を引き起こし、比較する基準点がありません。',
          '複数回使用する、共有インフラに保存する、または本番にデプロイするすべてのPromptを文書化します。',
        ],
        callouts: [
          { type: 'warning', label: '静かな回帰リスク', text: 'バージョンブロックとゴールデンサンプルなしでは、本番Promptを変更するチームには基準がありません。すべての編集は以前の状態についての推測です。' },
        ],
      },
      six_templates: {
        title: '6つのPrompt文書化テンプレート',
        content: [
          '**6つのテンプレートがPromptのライフサイクル全体をカバーします。** 各テンプレートは10分以内に記入できるように設計されています。',
        ],
        numberedItems: [
          { title: 'ワンライナーカード', whyItMatters: '目的：再利用されるPromptの最小限の記録。フィールド：Prompt名、目的（1文）、対象モデル、作成日、作成者。' },
          { title: 'バージョンブロック', whyItMatters: '目的：変更されるPromptの履歴を追跡。フィールド：バージョン番号、変更日、作成者、変更内容（1文）、変更理由（1文）、テスト結果サマリー。' },
          { title: 'テストスイートヘッダー', whyItMatters: '目的：テスト作成前に受入基準を定義。フィールド：テスト目標、合格基準、ゴールデンサンプル（2〜3の入出力ペア）、既知の失敗モード。' },
          { title: '決定ログ', whyItMatters: '目的：Promptテキストから明らかでない設計決定を記録。フィールド：決定事項、検討した代替案、この選択の理由、日付。' },
          { title: '変更理由', whyItMatters: '目的：Promptが変更された理由を説明。フィールド：問題の説明、変更内容、期待される改善点、測定された結果。' },
          { title: 'APIコンフィグブロック', whyItMatters: '目的：本番で使用するモデルパラメータを記録。フィールド：モデル、temperature、max_tokens、top_p、stop_sequences、システムPromptバージョン、ユーザーPromptバージョン。' },
        ],
        callouts: [
          { type: 'insight', label: 'テンプレート選択ガイド', text: '新しいPrompt → ワンライナーカード。変更されたPrompt → バージョンブロック。テストされたPrompt → テストスイートヘッダー。設計決定が行われた → 決定ログ。失敗後に変更 → 変更理由。本番にデプロイ → APIコンフィグブロック。' },
        ],
      },
      storage_options: {
        title: 'Prompt文書化の保存場所',
        content: [
          '**Promptと同じシステムにPrompt文書化を保存します。**',
        ],
        items: [
          'Git：ファイルとして保存されるPromptを持つエンジニアリングチームに最適。コミットメッセージがバージョンブロックとして機能します。無料。',
          'PromptHub：バージョン履歴、レビュアー署名、テスト結果ストレージを備えた専用Prompt管理。',
          'Notion：Promptをドキュメントとして管理するチームに適しています。バージョン管理とテスト統合なし。',
          'Braintrust：テストスイートヘッダーと評価結果をPromptバージョンと一緒に保存。',
        ],
        callouts: [
          { type: 'tip', label: '文書化を共存させる', text: 'Promptとは別のシステム（Notion、Confluence、Google Docs）に保存された文書化は数日で陳腐化します。Promptと一緒に存在する文書化だけが最新の状態を保ちます。' },
        ],
      },
      common_doc_mistakes: {
        title: 'よくある文書化の間違い',
        mistakes: [
          {
            mistake: '文書化が全くない',
            problem: '編集後にPromptを回復できず、チームはなぜPromptがそのように書かれたかを理解できない',
            fix: '最低限ワンライナーカードテンプレートを使用する — 3フィールド、2分未満',
          },
          {
            mistake: 'Promptとは別に保存された文書化',
            problem: 'Promptが変更されると文書化が陳腐化し、チームは更新を忘れる',
            fix: '文書化をPrompt自体と同じファイルまたはGitコミットに保存する',
          },
          {
            mistake: '「なぜ」フィールドの欠如 — Promptが何をするかのみ記述',
            problem: '将来の編集者は制約を知らず、安全にリファクタリングできない',
            fix: 'すべてのテンプレートに「理由」フィールドを追加：なぜこの構造が選ばれたかについての1〜2文',
          },
          {
            mistake: 'バージョンブロックがない',
            problem: '本番で動いているPromptが文書化されたバージョンと一致しているかを知る方法がない',
            fix: 'すべての本番Promptファイルにバージョンと更新日を追加する',
          },
        ],
      },
      faq: {
        title: 'よくある質問',
        faqs: [
          { q: 'なぜPromptには文書化が必要ですか？', a: '文書化されていないPromptはレビュー、監査、再現ができません。回帰を診断できず、既知の良い状態にロールバックできません。' },
          { q: '最低限の文書化は何ですか？', a: 'ワンライナーカード：目的（1文）、対象モデル、作成日、作成者。2分で書け、最も一般的な失敗を防ぎます。' },
          { q: '文書化はどこに保存すべきですか？', a: 'Promptと同じ場所に。GitはコードファイルのPromptに最適。PromptHubはバージョン履歴付き構造化ストレージを提供。' },
          { q: '新しいPromptにはどのテンプレートを使うべきですか？', a: 'ワンライナーカードから始めます。本番 → バージョンブロック。複数のテスト → テストスイートヘッダー。非明白な設計決定 → 決定ログ。' },
          { q: '文書化の更新頻度は？', a: 'Promptテキストが変更されるたびに更新します。すべての実質的な編集にバージョンバンプと変更理由を追加します。' },
          { q: 'これらのテンプレートをPromptHubで使用できますか？', a: 'はい。PromptHubはバージョンブロックとAPIコンフィグブロックのフィールドに直接対応するメタデータフィールドを保存します。' },
        ],
      },
      related_reading: {
        title: '関連記事',
        items: [
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Library Management for Teams', url: '/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: '情報源',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '团队治理',
    title: 'Prompt文档化模板：团队可复用的6种格式',
    seoTitle: 'Prompt文档化模板：团队适用的6种格式',
    intro: '未经文档化的Prompt会悄无声息地失败、被重复创建，且无法审计。6个可复用的文档化模板覆盖了Prompt的完整生命周期——从一次性单行提示词到带有审查记录的版本化生产Prompt。',
    metaDescription: '6种Prompt文档化模板覆盖完整生命周期：单行卡片、版本块、测试套件头、决策日志、变更理由和API配置块。每个模板10分钟内完成。',
    ogDescription: '以6种格式记录Prompt：从快速保存的单行卡片到生产环境的API配置块。将文档与Prompt一起存储，而不是分开存放。',
    twitterDescription: '未文档化的Prompt会悄无声息地失败。6个模板，每种不超过10分钟。从单行卡片到API配置块。',
    publishDate: '2026-05-02',
    readTime: '10分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt文档化',
    leadAnswerBlock: '**Prompt文档化是关于Prompt功能、编写方式和必须通过的测试的结构化记录。** 没有它，Prompt无法被审查、回滚或在作者离开后重现。',
    quickFacts: [
      '6个模板覆盖Prompt完整生命周期：从单行卡片到API配置块',
      '单行卡片不到2分钟，可预防最常见的文档化失败',
      '将文档与Prompt一起存储——不要存放在单独的系统中',
      '"为什么"字段（变更理由）是每个模板中最重要的字段',
      '每次生产Prompt修改都需要版本块 + 变更理由',
      'PromptHub直接映射版本块和API配置块字段',
    ],
    toc: [
      { label: '未文档化的Prompt为何让团队陷入困境', anchor: 'why_documentation' },
      { label: '6种Prompt文档化模板', anchor: 'six_templates' },
      { label: 'Prompt文档的存储位置', anchor: 'storage_options' },
      { label: '常见文档化错误', anchor: 'common_doc_mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related_reading' },
      { label: '参考来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-documentation-templates?lang=zh',
      inLanguage: 'zh',
      headline: 'Prompt文档化模板：团队可复用的6种格式',
      description: '6种Prompt文档化模板：单行卡片、版本块、测试套件头、决策日志、变更理由和API配置块。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt文档化', 'Prompt模板', 'Prompt管理', '团队提示词工程'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '为什么Prompt需要文档化？', acceptedAnswer: { '@type': 'Answer', text: '没有文档的Prompt无法被审查、审计或重现。当作者修改Prompt却没有留下记录时，团队无法诊断回归问题，无法回滚到已知可用的版本。' } },
        { '@type': 'Question', name: 'Prompt需要的最少文档是什么？', acceptedAnswer: { '@type': 'Answer', text: '最低要求是单行卡片：Prompt用途（一句话）、目标模型、创建日期和作者。填写只需2分钟，可以防止最常见的文档化失败。' } },
        { '@type': 'Question', name: 'Prompt文档应该存储在哪里？', acceptedAnswer: { '@type': 'Answer', text: '将Prompt文档存储在与Prompt本身相同的位置。Git适用于代码文件存储的Prompt。PromptHub提供内置版本历史和审查者签名的结构化存储。' } },
        { '@type': 'Question', name: '新Prompt应该使用哪个文档模板？', acceptedAnswer: { '@type': 'Answer', text: '从单行卡片开始。如果Prompt进入生产，升级到版本块。如果有多个测试用例，添加测试套件头。如果需要非显而易见的设计决策，添加决策日志。' } },
        { '@type': 'Question', name: '应该多久更新一次Prompt文档？', acceptedAnswer: { '@type': 'Answer', text: '每次Prompt文本更改时更新。每次实质性编辑都要添加版本号递增和变更理由条目。不要追溯更新文档。' } },
        { '@type': 'Question', name: '可以在PromptHub中使用这些模板吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。PromptHub存储的Prompt元数据字段直接映射到版本块和API配置块模板。以模板为草稿，准备好与团队分享时将字段复制到PromptHub。' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          '6个模板覆盖Prompt的完整生命周期：单行卡片（2分钟，防止目的丢失）、版本块（追踪变更）、测试套件头（定义通过标准）、决策日志（记录设计选择）、变更理由（解释为什么）、API配置块（生产参数）。将文档与Prompt一起存储——绝不分开。',
        ],
      },
      key_takeaways: {
        title: '关键要点',
        items: [
          '每个生产Prompt至少需要一张单行卡片（用途、模型、日期、作者）',
          '每个被修改的Prompt需要一个版本块',
          '每个被测试的Prompt需要一个测试套件头',
          '将文档存储在与Prompt相同的位置——单独的文档会被遗弃',
          '变更理由（"为什么"）是最重要的字段',
        ],
      },
      why_documentation: {
        title: '未文档化的Prompt为何让团队陷入困境',
        snippets: [
          { type: 'in-one-sentence', text: '未文档化的Prompt以三种方式让团队失败：静默回归、重复创建和知识流失——每种都可以通过每个Prompt5至10分钟的文档化来预防。' },
          { type: 'in-plain-terms', text: '当Prompt没有关于它做什么或为什么这样写的记录时，团队无法安全地修改它、在编辑后恢复它，或在没有上下文的情况下将其移交给新成员。' },
        ],
        content: [
          '**未文档化的Prompt以三种方式让团队失败：静默回归（无变更记录）、重复创建和知识流失。** 每种失败都可以通过每个Prompt5至10分钟的文档化来预防。',
          '最昂贵的失败是静默回归。团队修改生产Prompt以修复一个问题，无意中破坏了另一个，却没有基准进行对比。',
          '为每个使用超过一次、存储在共享基础设施中或部署到生产环境的Prompt建立文档。',
        ],
        callouts: [
          { type: 'warning', label: '静默回归风险', text: '没有版本块和黄金样例，修改生产Prompt的团队没有基准。每次编辑都是对之前状态的猜测。' },
        ],
      },
      six_templates: {
        title: '6种Prompt文档化模板',
        content: [
          '**6个模板覆盖了Prompt的完整生命周期。** 每个模板设计为10分钟以内可完成填写。',
        ],
        numberedItems: [
          { title: '单行卡片', whyItMatters: '目的：为任何复用Prompt提供最基础的记录。字段：Prompt名称、用途（1句话）、目标模型、创建日期、作者。' },
          { title: '版本块', whyItMatters: '目的：跟踪随时间变化的Prompt历史。字段：版本号、修改日期、作者、变更内容（1句话）、变更原因（1句话）、测试结果摘要。' },
          { title: '测试套件头', whyItMatters: '目的：在编写测试前定义验收标准。字段：测试目标、通过标准、黄金样例（2至3个输入/输出对）、已知失败模式。' },
          { title: '决策日志', whyItMatters: '目的：记录从Prompt文本中不明显的设计决策。字段：已做出的决策、考虑过的替代方案、选择此方案的原因、日期。' },
          { title: '变更理由', whyItMatters: '目的：说明Prompt被修改的原因。字段：问题陈述、所做变更、预期改进、实测结果。' },
          { title: 'API配置块', whyItMatters: '目的：记录生产环境中使用的模型参数。字段：模型、temperature、max_tokens、top_p、stop_sequences、system prompt版本、user prompt版本。' },
        ],
        callouts: [
          { type: 'insight', label: '模板选择指南', text: '新Prompt → 单行卡片。修改的Prompt → 版本块。测试的Prompt → 测试套件头。做出设计决策 → 决策日志。失败后修改 → 变更理由。部署到生产 → API配置块。' },
        ],
      },
      storage_options: {
        title: 'Prompt文档的存储位置',
        content: [
          '**将Prompt文档存储在与Prompt相同的系统中。**',
        ],
        items: [
          'Git：适合将Prompt存储为文件的工程团队。提交消息作为版本块。免费。',
          'PromptHub：具有版本历史、审查者签名和测试结果存储的专用Prompt管理。',
          'Notion：适合将Prompt作为文档管理的团队。缺乏版本控制和测试集成。',
          'Braintrust：将测试套件头和评估结果与Prompt版本一起存储。',
        ],
        callouts: [
          { type: 'tip', label: '共同存放文档', text: '存储在单独系统（Notion、Confluence、Google Docs）中的文档会在几天内变得陈旧。只有与Prompt一起存在的文档才能保持最新。' },
        ],
      },
      common_doc_mistakes: {
        title: '常见文档化错误',
        mistakes: [
          {
            mistake: '完全没有文档',
            problem: 'Prompt在编辑后无法恢复，团队无法理解为什么Prompt以特定方式编写',
            fix: '至少使用单行卡片模板——3个字段，不到2分钟',
          },
          {
            mistake: '文档与Prompt分开存储',
            problem: 'Prompt变更时文档变得陈旧；团队忘记更新',
            fix: '将文档存储在与Prompt本身相同的文件或Git提交中',
          },
          {
            mistake: '缺少"为什么"字段——只描述Prompt做什么',
            problem: '未来的编辑者不了解约束条件，无法安全重构',
            fix: '为每个模板添加"理由"字段：1-2句话说明为什么选择这种结构',
          },
          {
            mistake: '没有版本块',
            problem: '无法知道生产环境中运行的Prompt是否与文档化版本匹配',
            fix: '为每个生产Prompt文件添加版本和修改日期',
          },
        ],
      },
      faq: {
        title: '常见问题',
        faqs: [
          { q: '为什么Prompt需要文档化？', a: '没有文档的Prompt无法被审查、审计或重现。团队无法诊断回归问题，无法回滚到已知可用的版本。' },
          { q: '最少文档是什么？', a: '单行卡片：用途（一句话）、目标模型、创建日期、作者。填写只需2分钟。' },
          { q: 'Prompt文档应该存储在哪里？', a: '与Prompt本身相同的位置。Git适用于代码文件，PromptHub提供内置版本历史的结构化存储。' },
          { q: '新Prompt应该使用哪个模板？', a: '从单行卡片开始。进入生产 → 版本块。多个测试用例 → 测试套件头。非显而易见的设计决策 → 决策日志。' },
          { q: '应该多久更新一次文档？', a: '每次Prompt文本更改时更新。每次实质性编辑都要添加版本号递增和变更理由。' },
          { q: '可以在PromptHub中使用这些模板吗？', a: '可以。PromptHub存储的字段直接映射到版本块和API配置块模板。以模板为草稿，复制字段到PromptHub即可。' },
          { q: 'Prompt文档变更理由需要多详细？', a: '三行：变更了什么（一句话）、为什么（变更解决的问题）、以及哪个测试确认它有效。' },
        ],
      },
      related_reading: {
        title: '相关阅读',
        items: [
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Library Management for Teams', url: '/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: '参考来源',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },
}
