import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
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
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
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
          { title: 'API Config Block', whyItMatters: 'Purpose: record the model parameters used in production. Fields: model (e.g., GPT-5.5, Claude 4.6 Sonnet), temperature, max tokens, top_p, stop sequences, system prompt version, user prompt version. Use when: a prompt is deployed to production. Storage: deployment config file, referenced in version block.' },
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
          'PromptQuorum: [prompt optimization platform](/features) for dispatching documented prompts to 25+ AI providers simultaneously. Use to validate that documented prompts generalize across models before committing a version. Free tier.',
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
      url: 'https://www.promptquorum.com/de/prompt-engineering/prompt-documentation-templates',
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
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
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

  es: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'Plantillas de documentación de prompts: 6 formatos reutilizables para equipos',
    seoTitle: 'Documentación de prompts: 6 plantillas para equipos',
    intro: 'Los prompts sin documentar fallan en silencio, se duplican y no pueden auditarse. Seis plantillas de documentación reutilizables cubren cada etapa del ciclo de vida de un prompt — desde one-liners de un solo uso hasta prompts de producción versionados con historial de revisiones.',
    metaDescription: '6 plantillas de documentación de prompts: Tarjeta One-Liner, Bloque de Versión, Suite de Pruebas, Registro de Decisiones y Config API. Menos de 10 min.',
    ogDescription: 'Documenta prompts en 6 formatos: desde tarjetas one-liner para guardado rápido hasta bloques de configuración API para producción. Almacena junto a los prompts, no por separado.',
    twitterDescription: 'Los prompts sin documentar fallan en silencio. 6 plantillas, menos de 10 minutos cada una. De la Tarjeta One-Liner al Bloque de Config API.',
    publishDate: '2026-05-02',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Documentation',
    leadAnswerBlock: '**La documentación de prompts es el registro estructurado de qué hace un prompt, por qué se escribió así y qué pruebas debe superar.** Sin ella, los prompts no pueden revisarse, revertirse ni reproducirse cuando el autor abandona el equipo.',
    quickFacts: [
      '6 plantillas que cubren el ciclo de vida completo del prompt: de la Tarjeta One-Liner al Bloque de Config API',
      'La Tarjeta One-Liner tarda menos de 2 minutos y previene el fallo de documentación más común',
      'Almacena la documentación junto al prompt — no en un sistema separado',
      'El campo "por qué" (justificación de cambio) es el campo más importante en cualquier plantilla',
      'Bloque de Versión + Justificación de Cambio requeridos para cada modificación de prompt en producción',
      'PromptHub se mapea directamente a los campos del Bloque de Versión y del Bloque de Config API',
    ],
    toc: [
      { label: 'Por qué los prompts sin documentar rompen los equipos', anchor: 'why_documentation' },
      { label: '6 plantillas de documentación de prompts', anchor: 'six_templates' },
      { label: 'Dónde almacenar la documentación de prompts', anchor: 'storage_options' },
      { label: 'Errores comunes de documentación', anchor: 'common_doc_mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Lectura relacionada', anchor: 'related_reading' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/es/es/prompt-engineering/prompt-documentation-templates',
      inLanguage: 'es',
      headline: 'Plantillas de documentación de prompts: 6 formatos reutilizables para equipos',
      description: '6 plantillas de documentación de prompts: Tarjeta One-Liner, Bloque de Versión, Encabezado de Suite de Pruebas, Registro de Decisiones, Justificación de Cambio, Bloque de Config API.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['documentación de prompts', 'plantillas de prompts', 'gestión de prompts', 'equipo de prompt engineering'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Seis plantillas cubren el ciclo de vida completo del prompt: Tarjeta One-Liner (2 minutos, previene la pérdida de propósito), Bloque de Versión (rastrea cambios), Encabezado de Suite de Pruebas (define criterios de éxito), Registro de Decisiones (registra elecciones de diseño), Justificación de Cambio (explica el por qué), Bloque de Config API (parámetros de producción). Almacena la documentación con el prompt — nunca por separado.',
        ],
      },
      key_takeaways: {
        title: 'Puntos clave',
        items: [
          'Todo prompt de producción necesita como mínimo una Tarjeta One-Liner (propósito, modelo, fecha, autor)',
          'Todo prompt modificado necesita un Bloque de Versión (qué cambió, por qué, resultado de prueba)',
          'Todo prompt probado necesita un Encabezado de Suite de Pruebas (criterios de éxito, ejemplos golden, modos de fallo)',
          'Almacena la documentación en el mismo sistema que el prompt — los docs separados quedan abandonados',
          'La justificación del cambio ("por qué") es el campo más importante: los equipos que la omiten vuelven a los patrones anteriores cuando el autor se va',
          'PromptHub ofrece la estructura de documentación incorporada más completa; Git funciona para equipos de ingeniería con buena disciplina de commits',
        ],
      },
      why_documentation: {
        title: 'Por qué los prompts sin documentar rompen los equipos',
        snippets: [
          { type: 'in-one-sentence', text: 'Los prompts sin documentar rompen los equipos mediante regresión silenciosa, duplicación y pérdida de conocimiento — cada una prevenible con 5–10 minutos de documentación por prompt.' },
          { type: 'in-plain-terms', text: 'Cuando un prompt no tiene registro de qué hace ni por qué se escribió así, el equipo no puede cambiarlo de forma segura, recuperarlo después de una edición ni entregárselo a un nuevo miembro sin contexto.' },
        ],
        content: [
          '**Los prompts sin documentar rompen los equipos de tres maneras: regresión silenciosa (sin registro de qué cambió), duplicación (los equipos reescriben prompts existentes porque no los encuentran) y pérdida de conocimiento (los prompts se vuelven imposibles de mantener cuando el autor se va).** Cada fallo es prevenible con 5–10 minutos de documentación por prompt.',
          'El fallo más costoso es la regresión silenciosa. Un equipo modifica un prompt de producción para solucionar un problema, inadvertidamente rompe otro, y no tiene un baseline con el que comparar. Sin historial de versiones y un encabezado de suite de pruebas, diagnosticar la regresión requiere comparación manual y suposiciones.',
          'Usa documentación para todo prompt utilizado más de una vez, almacenado en infraestructura compartida o desplegado en producción. Omítela para prompts exploratorios de un solo uso en una única sesión.',
        ],
        callouts: [
          { type: 'warning', label: 'Riesgo de regresión silenciosa', text: 'Sin un Bloque de Versión y ejemplos golden, un equipo que modifica un prompt de producción no tiene baseline. Cada edición es una suposición sobre cuál era el estado anterior.' },
        ],
      },
      six_templates: {
        title: '6 plantillas de documentación de prompts',
        content: [
          '**Seis plantillas cubren el ciclo de vida completo del prompt desde el primer borrador hasta la retirada en producción.** Cada plantilla está diseñada para completarse en menos de 10 minutos y proporcionar la información mínima requerida para cada etapa del ciclo de vida.',
        ],
        numberedItems: [
          { title: 'Tarjeta One-Liner', whyItMatters: 'Propósito: capturar el registro mínimo para cualquier prompt reutilizado. Campos: nombre del prompt, propósito (1 oración), modelo objetivo, fecha de creación, autor. Úsala cuando: un prompt se guarda por primera vez. Almacenamiento: cualquier herramienta compartida (Notion, Git, PromptHub).' },
          { title: 'Bloque de Versión', whyItMatters: 'Propósito: rastrear el historial de prompts que cambian con el tiempo. Campos: número de versión, fecha de modificación, autor, qué cambió (1 oración), razón del cambio (1 oración), resumen del resultado de prueba. Úsalo cuando: se modifica un prompt. Almacenamiento: mensaje de commit de Git o entrada de versión en PromptHub.' },
          { title: 'Encabezado de Suite de Pruebas', whyItMatters: 'Propósito: definir los criterios de aceptación antes de escribir las pruebas. Campos: objetivo de la prueba (qué debe hacer el prompt), criterios de éxito (qué características de salida definen el éxito), ejemplos golden (2–3 pares entrada/salida), modos de fallo conocidos. Úsalo cuando: un prompt entra en la suite de pruebas. Almacenamiento: junto al archivo de prueba en Git o en el proyecto de Braintrust.' },
          { title: 'Registro de Decisiones', whyItMatters: 'Propósito: registrar decisiones de diseño que no son obvias en el texto del prompt. Campos: decisión tomada, alternativas consideradas, razón por la que se eligió esta opción, fecha. Úsalo cuando: se toma una decisión de diseño no obvia (por ejemplo, por qué se estableció una temperatura específica). Almacenamiento: doc enlazado desde el bloque de versión.' },
          { title: 'Justificación de Cambio', whyItMatters: 'Propósito: explicar por qué se cambió un prompt en términos que permitan revertir o replicar el cambio. Campos: descripción del problema (qué estaba mal), cambio realizado, mejora esperada, resultado medido. Úsalo cuando: se modifica un prompt en respuesta a un fallo o regresión. Almacenamiento: cuerpo del commit de Git o nota de cambio en PromptHub.' },
          { title: 'Bloque de Config API', whyItMatters: 'Propósito: registrar los parámetros del modelo utilizados en producción. Campos: modelo (por ejemplo, GPT-5.5, Claude 4.6 Sonnet), temperatura, max tokens, top_p, stop sequences, versión del system prompt, versión del user prompt. Úsalo cuando: se despliega un prompt en producción. Almacenamiento: archivo de configuración de despliegue, referenciado en el bloque de versión.' },
        ],
        callouts: [
          { type: 'insight', label: 'Guía de selección de plantilla', text: 'Nuevo prompt → Tarjeta One-Liner. Prompt modificado → Bloque de Versión. Prompt probado → Encabezado de Suite de Pruebas. Decisión de diseño tomada → Registro de Decisiones. Cambiado tras un fallo → Justificación de Cambio. Desplegado en producción → Bloque de Config API.' },
        ],
      },
      storage_options: {
        title: 'Dónde almacenar la documentación de prompts',
        content: [
          '**Almacena la documentación de prompts en el mismo sistema que el prompt.** Si el prompt vive en código, almacena los docs en Git. Si vive en una herramienta GUI, almacena los docs en las notas de esa herramienta o en un doc enlazado.',
        ],
        items: [
          'Git: mejor para equipos de ingeniería con prompts almacenados como archivos. Los mensajes de commit sirven como bloques de versión. Gratuito. Requiere disciplina. Sin flujo de trabajo de revisión incorporado.',
          'PromptHub: gestión de prompts con historial de versiones, firmas de revisores y almacenamiento de resultados de pruebas. $0–$49/mes. Mejor para equipos con 3+ personas escribiendo prompts.',
          'Notion: funciona para equipos que gestionan prompts como documentos en lugar de código. Fácil de configurar. Carece de control de versiones e integración de pruebas — trátalo como capa de documentación, no como fuente de verdad.',
          'Braintrust: almacena encabezados de suite de pruebas y resultados de evaluación junto a las versiones del prompt. Mejor para equipos que ejecutan evaluaciones automatizadas regulares.',
          'PromptQuorum: [plataforma de optimización de prompts](/features) para despachar prompts documentados a más de 25 proveedores de IA simultáneamente. Úsala para validar que los prompts documentados generalizan entre modelos antes de confirmar una versión. Nivel gratuito.',
        ],
        callouts: [
          { type: 'tip', label: 'Co-localiza la documentación', text: 'La documentación almacenada en un sistema separado (Notion, Confluence, Google Docs) del prompt quedará obsoleta en días. La única documentación que se mantiene actualizada es la que vive con el prompt.' },
        ],
      },
      common_doc_mistakes: {
        title: 'Errores comunes de documentación',
        mistakes: [
          {
            mistake: 'Sin documentación en absoluto',
            problem: 'Los prompts no pueden recuperarse tras ediciones, el equipo no puede entender por qué se escribió un prompt de cierta manera',
            fix: 'Usa como mínimo la plantilla Tarjeta One-Liner — 3 campos, menos de 2 minutos',
          },
          {
            mistake: 'Documentación almacenada por separado del prompt',
            problem: 'La documentación queda obsoleta a medida que cambian los prompts; los equipos olvidan actualizarla',
            fix: 'Almacena la documentación en el mismo archivo o commit de Git que el prompt',
          },
          {
            mistake: 'Campo "por qué" ausente — solo describe qué hace el prompt',
            problem: 'Los editores futuros no conocen las restricciones, no pueden refactorizar de forma segura',
            fix: 'Añade un campo "justificación" a cada plantilla: 1-2 oraciones sobre por qué se eligió esta estructura',
          },
          {
            mistake: 'Sin bloque de versión',
            problem: 'Sin forma de saber si el prompt que corre en producción coincide con la versión documentada',
            fix: 'Añade versión y dateModified a cada archivo de prompt de producción',
          },
        ],
      },
      faq: {
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Por qué los prompts necesitan documentación?', a: 'Los prompts sin documentación no pueden revisarse, auditarse ni reproducirse. Cuando el autor cambia el prompt y no deja ningún registro, el equipo no puede diagnosticar regresiones, no puede volver a una versión conocida como buena ni puede incorporar a nuevos miembros.' },
          { q: '¿Cuál es la documentación mínima que necesita un prompt?', a: 'El mínimo es una tarjeta one-liner: propósito del prompt (una oración), modelo objetivo, fecha de creación y autor. Esto tarda 2 minutos en escribirse y previene el fallo de documentación más común — prompts cuyo propósito es desconocido 6 meses después.' },
          { q: '¿Dónde debe almacenarse la documentación de prompts?', a: 'Almacena la documentación de prompts en la misma ubicación que el prompt. Git funciona para prompts almacenados como archivos de código. PromptHub proporciona almacenamiento estructurado con historial de versiones y firmas de revisores incorporadas. Notion funciona para equipos que gestionan prompts como documentos, pero carece de control de versiones.' },
          { q: '¿Qué tan detallada debe ser una justificación de cambio?', a: 'Tres líneas: qué cambió (una oración), por qué (el problema que resuelve el cambio) y qué prueba confirmó que funcionó. Los equipos que omiten el "por qué" invariablemente vuelven al patrón anterior cuando el autor se va.' },
          { q: '¿Qué plantilla debo usar para un nuevo prompt?', a: 'Comienza con la Tarjeta One-Liner. Si el prompt va a producción, actualiza a un Bloque de Versión. Si tiene múltiples casos de prueba, añade un Encabezado de Suite de Pruebas. Si requirió una decisión de diseño no obvia, añade un Registro de Decisiones.' },
          { q: '¿Con qué frecuencia debo actualizar la documentación de prompts?', a: 'Actualiza cada vez que cambie el texto del prompt. Añade un incremento de versión y una entrada de Justificación de Cambio para cada edición sustancial. No actualices la documentación de forma retroactiva.' },
          { q: '¿Puedo usar estas plantillas en PromptHub?', a: 'Sí. PromptHub almacena campos de metadatos de prompts que se mapean directamente a las plantillas de Bloque de Versión y Bloque de Config API. Usa la plantilla como borrador y luego copia los campos a PromptHub cuando estés listo para compartirlo con tu equipo.' },
        ],
      },
      related_reading: {
        title: 'Lectura relacionada',
        items: [
          { title: 'Control de versiones de prompts', url: '/es/prompt-engineering/prompt-version-control' },
          { title: 'Governance de prompts en producción', url: '/es/prompt-engineering/prompt-governance-in-production' },
          { title: 'Gestión de biblioteca de prompts para equipos', url: '/es/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Construye una biblioteca de prompts', url: '/es/prompt-engineering/build-a-prompt-library' },
          { title: 'Flujo de revisión de prompts para equipos', url: '/es/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: 'Fuentes',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'قوالب توثيق الأوامر: 6 تنسيقات قابلة لإعادة الاستخدام للفرق',
    seoTitle: 'توثيق الأوامر: 6 قوالب للفرق',
    intro: 'الأوامر غير الموثقة تفشل في صمت، وتُكرَّر، ولا يمكن تدقيقها. ستة قوالب توثيق قابلة لإعادة الاستخدام تغطي كل مرحلة من مراحل دورة حياة الأمر — من الأسطر الأحادية للاستخدام الفردي إلى الأوامر الإنتاجية ذات الإصدارات وسجل المراجعات.',
    metaDescription: '6 قوالب لتوثيق الأوامر: بطاقة السطر الواحد، كتلة الإصدار، رأس مجموعة الاختبار، سجل القرارات، مبرر التغيير، تهيئة API. أقل من 10 دقائق لكل منها.',
    ogDescription: 'وثّق الأوامر بـ6 تنسيقات: من بطاقات الأسطر الأحادية للحفظ السريع إلى كتل تهيئة API للإنتاج. احتفظ بالتوثيق بجانب الأوامر، لا بصورة منفصلة.',
    twitterDescription: 'الأوامر غير الموثقة تفشل في صمت. 6 قوالب، أقل من 10 دقائق لكل منها. من بطاقة السطر الواحد إلى كتلة تهيئة API.',
    publishDate: '2026-05-02',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'توثيق الأوامر',
    leadAnswerBlock: '**توثيق الأوامر هو السجل المنظم لما يفعله الأمر، ولماذا كُتب بهذه الطريقة، وما هي الاختبارات التي يجب أن يجتازها.** بدونه، تصبح الأوامر غير قابلة للمراجعة والتراجع عنها، وغير قابلة للإعادة عند مغادرة مؤلفها للفريق.',
    quickFacts: [
      '6 قوالب تغطي دورة حياة الأمر بالكامل: من بطاقة السطر الواحد إلى كتلة تهيئة API',
      'تستغرق بطاقة السطر الواحد أقل من دقيقتين وتمنع أكثر إخفاقات التوثيق شيوعاً',
      'احتفظ بالتوثيق بجانب الأمر — لا في نظام منفصل',
      'حقل "السبب" (مبرر التغيير) هو أهم حقل في أي قالب',
      'كتلة الإصدار + مبرر التغيير مطلوبان لكل تعديل على أمر إنتاجي',
      'يتوافق PromptHub مباشرة مع حقول كتلة الإصدار وكتلة تهيئة API',
    ],
    toc: [
      { label: 'لماذا تُدمِّر الأوامر غير الموثقة الفرق', anchor: 'why_documentation' },
      { label: '6 قوالب لتوثيق الأوامر', anchor: 'six_templates' },
      { label: 'أين تحفظ توثيق الأوامر', anchor: 'storage_options' },
      { label: 'أخطاء التوثيق الشائعة', anchor: 'common_doc_mistakes' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'قراءة ذات صلة', anchor: 'related_reading' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/prompt-documentation-templates',
      inLanguage: 'ar',
      headline: 'قوالب توثيق الأوامر: 6 تنسيقات قابلة لإعادة الاستخدام للفرق',
      description: '6 قوالب لتوثيق الأوامر: بطاقة السطر الواحد، كتلة الإصدار، رأس مجموعة الاختبار، سجل القرارات، مبرر التغيير، كتلة تهيئة API.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['توثيق الأوامر', 'قوالب الأوامر', 'إدارة الأوامر', 'فرق هندسة الأوامر'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'ستة قوالب تغطي دورة حياة الأمر بالكامل: بطاقة السطر الواحد (دقيقتان، تمنع ضياع الغرض)، كتلة الإصدار (تتتبع التغييرات)، رأس مجموعة الاختبار (يحدد معايير القبول)، سجل القرارات (يسجل خيارات التصميم)، مبرر التغيير (يشرح السبب)، كتلة تهيئة API (معاملات الإنتاج). احتفظ بالتوثيق مع الأمر — لا بصورة منفصلة أبداً.',
        ],
      },
      key_takeaways: {
        title: 'النقاط الرئيسية',
        items: [
          'كل أمر إنتاجي يحتاج كحد أدنى إلى بطاقة سطر واحد (الغرض، النموذج، التاريخ، المؤلف)',
          'كل أمر معدَّل يحتاج إلى كتلة إصدار (ما الذي تغير، لماذا، نتيجة الاختبار)',
          'كل أمر مختبَر يحتاج إلى رأس مجموعة اختبار (معايير النجاح، الأمثلة الذهبية، أوضاع الفشل)',
          'احتفظ بالتوثيق في النظام ذاته الذي يحتوي على الأمر — الوثائق المنفصلة تُهجر',
          'مبرر التغيير ("السبب") هو أهم حقل: الفرق التي تتجاهله تعود إلى الأنماط القديمة عند مغادرة المؤلف',
          'يوفر PromptHub أكثر هيكل توثيق مدمج شمولاً؛ يعمل Git لفرق الهندسة ذات الانضباط الجيد في الالتزامات',
        ],
      },
      why_documentation: {
        title: 'لماذا تُدمِّر الأوامر غير الموثقة الفرق',
        snippets: [
          { type: 'in-one-sentence', text: 'الأوامر غير الموثقة تُدمِّر الفرق من خلال التراجع الصامت والتكرار وفقدان المعرفة — وكل ذلك قابل للوقاية بـ5-10 دقائق توثيق لكل أمر.' },
          { type: 'in-plain-terms', text: 'عندما لا يكون للأمر سجل بما يفعله أو بالسبب الذي كُتب به بتلك الطريقة، لا يستطيع الفريق تغييره بأمان، أو استعادته بعد تعديل، أو تسليمه لعضو جديد دون سياق.' },
        ],
        content: [
          '**الأوامر غير الموثقة تُدمِّر الفرق بثلاث طرق: التراجع الصامت (لا سجل لما تغير)، التكرار (الفرق تعيد كتابة الأوامر الموجودة لأنها لا تجدها)، وفقدان المعرفة (تصبح الأوامر غير قابلة للصيانة عند مغادرة المؤلف).** كل إخفاق قابل للوقاية بـ5-10 دقائق توثيق لكل أمر.',
          'الإخفاق الأكثر تكلفة هو التراجع الصامت. يعدّل فريق ما أمراً إنتاجياً لحل مشكلة، فيكسر عن غير قصد مشكلة أخرى، ولا يملك خطاً أساسياً للمقارنة. بدون سجل إصدارات ورأس مجموعة اختبار، يتطلب تشخيص التراجع مقارنة يدوية وتخمينات.',
          'استخدم التوثيق لكل أمر يُستخدم أكثر من مرة، أو يُخزَّن في بنية أساسية مشتركة، أو يُنشر في الإنتاج. أغفله للأوامر الاستكشافية أحادية الاستخدام في جلسة واحدة.',
        ],
        callouts: [
          { type: 'warning', label: 'خطر التراجع الصامت', text: 'بدون كتلة إصدار وأمثلة ذهبية، لا يملك الفريق الذي يعدّل أمراً إنتاجياً خطاً أساسياً. كل تعديل هو تخمين حول الحالة السابقة.' },
        ],
      },
      six_templates: {
        title: '6 قوالب لتوثيق الأوامر',
        content: [
          '**ستة قوالب تغطي دورة حياة الأمر الكاملة من المسودة الأولى إلى التقاعد في الإنتاج.** كل قالب مصمَّم ليكتمل في أقل من 10 دقائق ويوفر الحد الأدنى من المعلومات المطلوبة لكل مرحلة من مراحل دورة الحياة.',
        ],
        numberedItems: [
          { title: 'بطاقة السطر الواحد', whyItMatters: 'الغرض: التقاط السجل الأدنى لأي أمر مُعاد استخدامه. الحقول: اسم الأمر، الغرض (جملة واحدة)، النموذج المستهدف، تاريخ الإنشاء، المؤلف. متى تستخدمه: عند حفظ أمر لأول مرة. التخزين: أي أداة مشتركة (Notion، Git، PromptHub).' },
          { title: 'كتلة الإصدار', whyItMatters: 'الغرض: تتبع سجل الأوامر التي تتغير بمرور الوقت. الحقول: رقم الإصدار، تاريخ التعديل، المؤلف، ما الذي تغير (جملة واحدة)، سبب التغيير (جملة واحدة)، ملخص نتيجة الاختبار. متى تستخدمه: عند تعديل أمر. التخزين: رسالة الالتزام في Git أو إدخال الإصدار في PromptHub.' },
          { title: 'رأس مجموعة الاختبار', whyItMatters: 'الغرض: تحديد معايير القبول قبل كتابة الاختبارات. الحقول: هدف الاختبار (ما يجب أن يفعله الأمر)، معايير النجاح (ما هي خصائص الإخراج التي تحدد النجاح)، الأمثلة الذهبية (2-3 أزواج إدخال/إخراج)، أوضاع الفشل المعروفة. متى تستخدمه: عند دخول أمر إلى مجموعة الاختبار. التخزين: بجانب ملف الاختبار في Git أو في مشروع Braintrust.' },
          { title: 'سجل القرارات', whyItMatters: 'الغرض: تسجيل قرارات التصميم غير الواضحة في نص الأمر. الحقول: القرار المتخذ، البدائل المدروسة، سبب اختيار هذا الخيار، التاريخ. متى تستخدمه: عند اتخاذ قرار تصميم غير واضح (مثلاً، لماذا تم تعيين درجة حرارة معينة). التخزين: مستند مرتبط من كتلة الإصدار.' },
          { title: 'مبرر التغيير', whyItMatters: 'الغرض: شرح سبب تغيير أمر بمصطلحات تسمح بالتراجع عن التغيير أو تكراره. الحقول: وصف المشكلة (ما كان خاطئاً)، التغيير المُجرى، التحسين المتوقع، النتيجة المقيسة. متى تستخدمه: عند تعديل أمر استجابةً لإخفاق أو تراجع. التخزين: نص الالتزام في Git أو ملاحظة التغيير في PromptHub.' },
          { title: 'كتلة تهيئة API', whyItMatters: 'الغرض: تسجيل معاملات النموذج المستخدمة في الإنتاج. الحقول: النموذج (مثلاً GPT-5.5، Claude 4.6 Sonnet)، درجة الحرارة، الحد الأقصى للرموز، top_p، تسلسلات الإيقاف، إصدار أمر النظام، إصدار أمر المستخدم. متى تستخدمه: عند نشر أمر في الإنتاج. التخزين: ملف تهيئة النشر، مشار إليه من كتلة الإصدار.' },
        ],
        callouts: [
          { type: 'insight', label: 'دليل اختيار القالب', text: 'أمر جديد ← بطاقة السطر الواحد. أمر معدَّل ← كتلة الإصدار. أمر مختبَر ← رأس مجموعة الاختبار. قرار تصميم مُتخذ ← سجل القرارات. تغيير بعد إخفاق ← مبرر التغيير. نشر في الإنتاج ← كتلة تهيئة API.' },
        ],
      },
      storage_options: {
        title: 'أين تحفظ توثيق الأوامر',
        content: [
          '**احتفظ بتوثيق الأوامر في النظام ذاته الذي يحتوي على الأمر.** إذا كان الأمر يعيش في الكود، احتفظ بالوثائق في Git. وإذا كان يعيش في أداة واجهة رسومية، احتفظ بالوثائق في ملاحظات تلك الأداة أو في مستند مرتبط.',
        ],
        items: [
          'Git: الأفضل لفرق الهندسة التي تخزّن الأوامر كملفات. رسائل الالتزام تعمل ككتل إصدار. مجاني. يتطلب انضباطاً. لا يوجد سير عمل مراجعة مدمج.',
          'PromptHub: إدارة الأوامر مع سجل الإصدارات وتوقيعات المراجعين وتخزين نتائج الاختبار. 0-49 دولاراً في الشهر. الأفضل للفرق التي تضم 3 أشخاص أو أكثر يكتبون الأوامر.',
          'Notion: يعمل للفرق التي تدير الأوامر كوثائق بدلاً من الكود. سهل الإعداد. يفتقر إلى التحكم في الإصدار وتكامل الاختبار — تعامل معه كطبقة توثيق، لا كمصدر حقيقة.',
          'Braintrust: يخزّن رؤوس مجموعات الاختبار ونتائج التقييم بجانب إصدارات الأمر. الأفضل للفرق التي تُجري تقييمات آلية منتظمة.',
          'PromptQuorum: [منصة تحسين الأوامر](/features) لإرسال الأوامر الموثقة إلى أكثر من 25 مزوداً للذكاء الاصطناعي في آنٍ واحد. استخدمها للتحقق من أن الأوامر الموثقة تعمم عبر النماذج قبل تثبيت الإصدار. طبقة مجانية.',
        ],
        callouts: [
          { type: 'tip', label: 'ضع التوثيق في مكان الأمر', text: 'التوثيق المخزَّن في نظام منفصل (Notion، Confluence، Google Docs) عن الأمر سيصبح قديماً في أيام. التوثيق الوحيد الذي يظل محدثاً هو ما يعيش مع الأمر.' },
        ],
      },
      common_doc_mistakes: {
        title: 'أخطاء التوثيق الشائعة',
        mistakes: [
          {
            mistake: 'لا توثيق على الإطلاق',
            problem: 'لا يمكن استعادة الأوامر بعد التعديلات، ولا يفهم الفريق سبب كتابة أمر بطريقة معينة',
            fix: 'استخدم على الأقل قالب بطاقة السطر الواحد — 3 حقول، أقل من دقيقتين',
          },
          {
            mistake: 'توثيق مخزَّن بصورة منفصلة عن الأمر',
            problem: 'يصبح التوثيق قديماً مع تغير الأوامر؛ الفرق تنسى تحديثه',
            fix: 'احتفظ بالتوثيق في ملف Git ذاته أو في الالتزام ذاته الذي يحتوي على الأمر',
          },
          {
            mistake: 'حقل "السبب" غائب — يصف فقط ما يفعله الأمر',
            problem: 'المحررون المستقبليون لا يعرفون القيود، ولا يستطيعون إعادة الهيكلة بأمان',
            fix: 'أضف حقل "مبرر" لكل قالب: 1-2 جمل عن سبب اختيار هذا الهيكل',
          },
          {
            mistake: 'لا توجد كتلة إصدار',
            problem: 'لا توجد طريقة لمعرفة ما إذا كان الأمر الجاري في الإنتاج يطابق الإصدار الموثق',
            fix: 'أضف الإصدار وتاريخ التعديل إلى كل ملف أمر إنتاجي',
          },
        ],
      },
      faq: {
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'لماذا تحتاج الأوامر إلى توثيق؟', a: 'الأوامر غير الموثقة لا يمكن مراجعتها أو تدقيقها أو إعادة إنتاجها. عندما يغير المؤلف الأمر دون ترك أي سجل، لا يستطيع الفريق تشخيص التراجعات، ولا العودة إلى إصدار معروف بأنه جيد، ولا استقطاب أعضاء جدد.' },
          { q: 'ما هو الحد الأدنى من التوثيق الذي يحتاجه الأمر؟', a: 'الحد الأدنى هو بطاقة سطر واحد: غرض الأمر (جملة واحدة)، النموذج المستهدف، تاريخ الإنشاء، والمؤلف. تستغرق دقيقتين للكتابة وتمنع أكثر إخفاقات التوثيق شيوعاً — الأوامر التي يكون غرضها مجهولاً بعد 6 أشهر.' },
          { q: 'أين يجب تخزين توثيق الأوامر؟', a: 'خزّن توثيق الأوامر في الموقع ذاته الذي يوجد فيه الأمر. يعمل Git للأوامر المخزنة كملفات كود. يوفر PromptHub تخزيناً منظماً مع سجل الإصدارات وتوقيعات المراجعين المدمجة. يعمل Notion للفرق التي تدير الأوامر كوثائق، لكنه يفتقر إلى التحكم في الإصدار.' },
          { q: 'ما مدى التفصيل الذي يجب أن يكون عليه مبرر التغيير؟', a: 'ثلاثة أسطر: ما الذي تغير (جملة واحدة)، السبب (المشكلة التي يحلها التغيير)، والاختبار الذي أكد أنه نجح. الفرق التي تتجاهل "السبب" تعود حتماً إلى النمط القديم عند مغادرة المؤلف.' },
          { q: 'ما القالب الذي يجب أن أستخدمه لأمر جديد؟', a: 'ابدأ ببطاقة السطر الواحد. إذا ذهب الأمر إلى الإنتاج، انتقل إلى كتلة الإصدار. إذا كان لديه حالات اختبار متعددة، أضف رأس مجموعة الاختبار. إذا كان يتطلب قراراً غير واضح في التصميم، أضف سجل القرارات.' },
          { q: 'كم مرة يجب أن أحدّث توثيق الأوامر؟', a: 'حدّثه في كل مرة يتغير فيها نص الأمر. أضف زيادة في الإصدار وإدخال مبرر تغيير لكل تعديل جوهري. لا تحدّث التوثيق بأثر رجعي.' },
          { q: 'هل يمكنني استخدام هذه القوالب في PromptHub؟', a: 'نعم. يخزّن PromptHub حقول بيانات تعريف الأوامر التي تتوافق مباشرة مع قوالب كتلة الإصدار وكتلة تهيئة API. استخدم القالب كمسودة ثم انسخ الحقول إلى PromptHub عند الاستعداد لمشاركته مع فريقك.' },
        ],
      },
      related_reading: {
        title: 'قراءة ذات صلة',
        items: [
          { title: 'التحكم في إصدارات الأوامر', url: '/ar/prompt-engineering/prompt-version-control' },
          { title: 'حوكمة الأوامر في الإنتاج', url: '/ar/prompt-engineering/prompt-governance-in-production' },
          { title: 'إدارة مكتبة الأوامر للفرق', url: '/ar/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'بناء مكتبة أوامر', url: '/ar/prompt-engineering/build-a-prompt-library' },
          { title: 'سير عمل مراجعة الأوامر للفرق', url: '/ar/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: 'المصادر',
        items: [
          { title: 'Git Documentation: Version Control', url: 'https://git-scm.com/doc' },
          { title: 'Braintrust: Prompt Management Docs', url: 'https://www.braintrust.dev/docs' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
        ],
      },
    },
  },

  pt: {
    theme: 'Team Governance',
    title: 'Modelos de documentação de prompts: 6 formatos reutilizáveis para equipes',
    seoTitle: 'Documentação de prompts: 6 modelos para equipes',
    intro: 'Os prompts sem documentação falham silenciosamente, são duplicados e não podem ser auditados. Seis modelos de documentação reutilizáveis cobrem cada etapa do ciclo de vida de um prompt — de one-liners de uso único a prompts de produção versionados com histórico de revisões.',
    metaDescription: '6 modelos de documentação de prompts: Cartão One-Liner, Bloco de Versão, Suite de Testes, Registro de Decisões e Config API. Menos de 10 min.',
    ogDescription: 'Documente prompts em 6 formatos: de cartões one-liner para salvamento rápido a blocos de configuração API para produção. Armazene junto aos prompts, não separadamente.',
    twitterDescription: 'Os prompts sem documentação falham silenciosamente. 6 modelos, menos de 10 minutos cada. Do Cartão One-Liner ao Bloco de Config API.',
    publishDate: '2026-05-02',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Documentation',
    leadAnswerBlock: '**A documentação de prompts é o registro estruturado do que um prompt faz, por que foi escrito assim e quais testes deve passar.** Sem ela, os prompts não podem ser revisados, revertidos nem reproduzidos quando o autor sai da equipe.',
    quickFacts: [
      '6 modelos que cobrem o ciclo de vida completo do prompt: do Cartão One-Liner ao Bloco de Config API',
      'O Cartão One-Liner leva menos de 2 minutos e previne a falha de documentação mais comum',
      'Armazene a documentação junto ao prompt — não em um sistema separado',
      'O campo "por que" (justificativa de mudança) é o campo mais importante em qualquer modelo',
      'Bloco de Versão + Justificativa de Mudança obrigatórios para cada modificação de prompt em produção',
      'O PromptHub se mapeia diretamente para os campos do Bloco de Versão e do Bloco de Config API',
    ],
    toc: [
      { label: 'Por que os prompts sem documentação quebram as equipes', anchor: 'why_documentation' },
      { label: '6 modelos de documentação de prompts', anchor: 'six_templates' },
      { label: 'Onde armazenar a documentação de prompts', anchor: 'storage_options' },
      { label: 'Erros comuns de documentação', anchor: 'common_doc_mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Leitura relacionada', anchor: 'related_reading' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/pt/pt/prompt-engineering/prompt-documentation-templates',
      inLanguage: 'pt-BR',
      headline: 'Modelos de documentação de prompts: 6 formatos reutilizáveis para equipes',
      description: '6 modelos de documentação de prompts: Cartão One-Liner, Bloco de Versão, Cabeçalho de Suite de Testes, Registro de Decisões, Justificativa de Mudança, Bloco de Config API.',
      datePublished: '2026-05-02',
      keywords: ['documentação de prompts', 'modelos de prompts', 'gerenciamento de prompts', 'equipe de prompt engineering'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Notion' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Seis modelos cobrem o ciclo de vida completo do prompt: Cartão One-Liner (2 minutos, previne a perda de propósito), Bloco de Versão (rastreia mudanças), Cabeçalho de Suite de Testes (define critérios de sucesso), Registro de Decisões (registra escolhas de design), Justificativa de Mudança (explica o por quê), Bloco de Config API (parâmetros de produção). Armazene a documentação com o prompt — nunca separadamente.',
        ],
      },
      key_takeaways: {
        title: 'Pontos-chave',
        items: [
          'Todo prompt de produção precisa no mínimo de um Cartão One-Liner (propósito, modelo, data, autor)',
          'Todo prompt modificado precisa de um Bloco de Versão (o que mudou, por que, resultado do teste)',
          'Todo prompt testado precisa de um Cabeçalho de Suite de Testes (critérios de sucesso, exemplos golden, modos de falha)',
          'Armazene a documentação no mesmo sistema que o prompt — os docs separados ficam abandonados',
          'A justificativa da mudança ("por que") é o campo mais importante: as equipes que a omitem voltam aos padrões anteriores quando o autor sai',
          'O PromptHub oferece a estrutura de documentação incorporada mais completa; o Git funciona para equipes de engenharia com boa disciplina de commits',
        ],
      },
      why_documentation: {
        title: 'Por que os prompts sem documentação quebram as equipes',
        snippets: [
          { type: 'in-one-sentence', text: 'Os prompts sem documentação quebram as equipes por meio de regressão silenciosa, duplicação e perda de conhecimento — cada um prevenível com 5–10 minutos de documentação por prompt.' },
          { type: 'in-plain-terms', text: 'Quando um prompt não tem registro do que faz nem por que foi escrito assim, a equipe não pode alterá-lo com segurança, recuperá-lo após uma edição nem entregá-lo a um novo membro sem contexto.' },
        ],
        content: [
          '**Os prompts sem documentação quebram as equipes de três maneiras: regressão silenciosa (sem registro do que mudou), duplicação (as equipes reescrevem prompts existentes porque não os encontram) e perda de conhecimento (os prompts se tornam impossíveis de manter quando o autor sai).** Cada falha é prevenível com 5–10 minutos de documentação por prompt.',
          'A falha mais custosa é a regressão silenciosa. Uma equipe modifica um prompt de produção para resolver um problema, inadvertidamente quebra outro, e não tem uma linha de base para comparar. Sem histórico de versões e um cabeçalho de suite de testes, diagnosticar a regressão requer comparação manual e suposições.',
          'Use documentação para todo prompt utilizado mais de uma vez, armazenado em infraestrutura compartilhada ou implantado em produção. Omita para prompts exploratórios de uso único em uma única sessão.',
        ],
        callouts: [
          { type: 'warning', label: 'Risco de regressão silenciosa', text: 'Sem um Bloco de Versão e exemplos golden, uma equipe que modifica um prompt de produção não tem linha de base. Cada edição é uma suposição sobre qual era o estado anterior.' },
        ],
      },
      six_templates: {
        title: '6 modelos de documentação de prompts',
        content: [
          '**Seis modelos cobrem o ciclo de vida completo do prompt desde o primeiro rascunho até a aposentadoria em produção.** Cada modelo foi projetado para ser concluído em menos de 10 minutos e fornecer as informações mínimas necessárias para cada etapa do ciclo de vida.',
        ],
        numberedItems: [
          { title: 'Cartão One-Liner', whyItMatters: 'Propósito: capturar o registro mínimo para qualquer prompt reutilizado. Campos: nome do prompt, propósito (1 frase), modelo alvo, data de criação, autor. Use quando: um prompt é salvo pela primeira vez. Armazenamento: qualquer ferramenta compartilhada (Notion, Git, PromptHub).' },
          { title: 'Bloco de Versão', whyItMatters: 'Propósito: rastrear o histórico de prompts que mudam com o tempo. Campos: número de versão, data de modificação, autor, o que mudou (1 frase), razão da mudança (1 frase), resumo do resultado do teste. Use quando: um prompt é modificado. Armazenamento: mensagem de commit do Git ou entrada de versão no PromptHub.' },
          { title: 'Cabeçalho de Suite de Testes', whyItMatters: 'Propósito: definir os critérios de aceitação antes de escrever os testes. Campos: objetivo do teste (o que o prompt deve fazer), critérios de sucesso (quais características de saída definem o sucesso), exemplos golden (2–3 pares entrada/saída), modos de falha conhecidos. Use quando: um prompt entra na suite de testes. Armazenamento: junto ao arquivo de teste no Git ou no projeto do Braintrust.' },
          { title: 'Registro de Decisões', whyItMatters: 'Propósito: registrar decisões de design que não são óbvias no texto do prompt. Campos: decisão tomada, alternativas consideradas, razão pela qual esta opção foi escolhida, data. Use quando: uma decisão de design não óbvia é tomada (por exemplo, por que uma temperatura específica foi definida). Armazenamento: doc vinculado ao bloco de versão.' },
          { title: 'Justificativa de Mudança', whyItMatters: 'Propósito: explicar por que um prompt foi alterado em termos que permitem reverter ou replicar a mudança. Campos: descrição do problema (o que estava errado), mudança realizada, melhoria esperada, resultado medido. Use quando: um prompt é modificado em resposta a uma falha ou regressão. Armazenamento: corpo do commit do Git ou nota de mudança no PromptHub.' },
          { title: 'Bloco de Config API', whyItMatters: 'Propósito: registrar os parâmetros do modelo usados em produção. Campos: modelo (por exemplo, GPT-5.5, Claude 4.6 Sonnet), temperatura, max tokens, top_p, stop sequences, versão do system prompt, versão do user prompt. Use quando: um prompt é implantado em produção. Armazenamento: arquivo de configuração de implantação, referenciado no bloco de versão.' },
        ],
        callouts: [
          { type: 'insight', label: 'Guia de seleção de modelo', text: 'Novo prompt → Cartão One-Liner. Prompt modificado → Bloco de Versão. Prompt testado → Cabeçalho de Suite de Testes. Decisão de design tomada → Registro de Decisões. Alterado após uma falha → Justificativa de Mudança. Implantado em produção → Bloco de Config API.' },
        ],
      },
      storage_options: {
        title: 'Onde armazenar a documentação de prompts',
        content: [
          '**Armazene a documentação de prompts no mesmo sistema que o prompt.** Se o prompt está no código, armazene os docs no Git. Se está em uma ferramenta GUI, armazene os docs nas notas dessa ferramenta ou em um doc vinculado.',
        ],
        items: [
          'Git: melhor para equipes de engenharia com prompts armazenados como arquivos. As mensagens de commit servem como blocos de versão. Gratuito. Requer disciplina. Sem fluxo de trabalho de revisão incorporado.',
          'PromptHub: gerenciamento de prompts com histórico de versões, assinaturas de revisores e armazenamento de resultados de testes. $0–$49/mês. Melhor para equipes com 3+ pessoas escrevendo prompts.',
          'Notion: funciona para equipes que gerenciam prompts como documentos em vez de código. Fácil de configurar. Carece de controle de versões e integração de testes — trate-o como camada de documentação, não como fonte da verdade.',
          'Braintrust: armazena cabeçalhos de suite de testes e resultados de avaliação junto às versões do prompt. Melhor para equipes que executam avaliações automatizadas regulares.',
          'PromptQuorum: [plataforma de otimização de prompts](/features) para despachar prompts documentados para mais de 25 provedores de IA simultaneamente. Use-a para validar que os prompts documentados generalizam entre modelos antes de confirmar uma versão. Nível gratuito.',
        ],
        callouts: [
          { type: 'tip', label: 'Co-localize a documentação', text: 'A documentação armazenada em um sistema separado (Notion, Confluence, Google Docs) do prompt ficará desatualizada em dias. A única documentação que se mantém atualizada é a que vive com o prompt.' },
        ],
      },
      common_doc_mistakes: {
        title: 'Erros comuns de documentação',
        mistakes: [
          {
            mistake: 'Sem documentação alguma',
            problem: 'Os prompts não podem ser recuperados após edições, a equipe não consegue entender por que um prompt foi escrito de determinada forma',
            fix: 'Use no mínimo o modelo Cartão One-Liner — 3 campos, menos de 2 minutos',
          },
          {
            mistake: 'Documentação armazenada separadamente do prompt',
            problem: 'A documentação fica desatualizada à medida que os prompts mudam; as equipes esquecem de atualizá-la',
            fix: 'Armazene a documentação no mesmo arquivo ou commit do Git que o prompt',
          },
          {
            mistake: 'Campo "por que" ausente — apenas descreve o que o prompt faz',
            problem: 'Os editores futuros não conhecem as restrições, não conseguem refatorar com segurança',
            fix: 'Adicione um campo "justificativa" a cada modelo: 1-2 frases sobre por que esta estrutura foi escolhida',
          },
          {
            mistake: 'Sem bloco de versão',
            problem: 'Sem forma de saber se o prompt que está rodando em produção corresponde à versão documentada',
            fix: 'Adicione versão e dateModified a cada arquivo de prompt de produção',
          },
        ],
      },
      faq: {
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Por que os prompts precisam de documentação?', a: 'Os prompts sem documentação não podem ser revisados, auditados nem reproduzidos. Quando o autor altera o prompt e não deixa nenhum registro, a equipe não consegue diagnosticar regressões, não consegue voltar a uma versão conhecida como boa nem consegue integrar novos membros.' },
          { q: 'Qual é a documentação mínima que um prompt precisa?', a: 'O mínimo é um cartão one-liner: propósito do prompt (uma frase), modelo alvo, data de criação e autor. Isso leva 2 minutos para escrever e previne a falha de documentação mais comum — prompts cujo propósito é desconhecido 6 meses depois.' },
          { q: 'Onde deve ser armazenada a documentação de prompts?', a: 'Armazene a documentação de prompts na mesma localização que o prompt. O Git funciona para prompts armazenados como arquivos de código. O PromptHub fornece armazenamento estruturado com histórico de versões e assinaturas de revisores incorporadas. O Notion funciona para equipes que gerenciam prompts como documentos, mas carece de controle de versões.' },
          { q: 'Quão detalhada deve ser uma justificativa de mudança?', a: 'Três linhas: o que mudou (uma frase), por que (o problema que a mudança resolve) e que teste confirmou que funcionou. As equipes que omitem o "por que" invariavelmente voltam ao padrão anterior quando o autor sai.' },
          { q: 'Qual modelo devo usar para um novo prompt?', a: 'Comece com o Cartão One-Liner. Se o prompt vai para produção, atualize para um Bloco de Versão. Se tem vários casos de teste, adicione um Cabeçalho de Suite de Testes. Se exigiu uma decisão de design não óbvia, adicione um Registro de Decisões.' },
          { q: 'Com que frequência devo atualizar a documentação de prompts?', a: 'Atualize sempre que o texto do prompt mudar. Adicione um incremento de versão e uma entrada de Justificativa de Mudança para cada edição substancial. Não atualize a documentação retroativamente.' },
          { q: 'Posso usar esses modelos no PromptHub?', a: 'Sim. O PromptHub armazena campos de metadados de prompts que se mapeiam diretamente para os modelos de Bloco de Versão e Bloco de Config API. Use o modelo como rascunho e então copie os campos para o PromptHub quando estiver pronto para compartilhá-lo com sua equipe.' },
        ],
      },
      related_reading: {
        title: 'Leitura relacionada',
        items: [
          { title: 'Controle de versões de prompts', url: '/pt/prompt-engineering/prompt-version-control' },
          { title: 'Governança de prompts em produção', url: '/pt/prompt-engineering/prompt-governance-in-production' },
          { title: 'Gerenciamento de biblioteca de prompts para equipes', url: '/pt/prompt-engineering/prompt-library-management-for-teams' },
          { title: 'Construa uma biblioteca de prompts', url: '/pt/prompt-engineering/build-a-prompt-library' },
          { title: 'Fluxo de revisão de prompts para equipes', url: '/pt/prompt-engineering/prompt-review-workflow-for-teams' },
        ],
      },
      sources: {
        title: 'Fontes',
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
      url: 'https://www.promptquorum.com/fr/prompt-engineering/prompt-documentation-templates',
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
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
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
      url: 'https://www.promptquorum.com/ja/prompt-engineering/prompt-documentation-templates',
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
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
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
      url: 'https://www.promptquorum.com/zh/prompt-engineering/prompt-documentation-templates',
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
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-documentation-templates', width: 1200, height: 630 },
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
