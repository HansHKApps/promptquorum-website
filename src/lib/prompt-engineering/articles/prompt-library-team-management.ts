import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'Prompt Library Management: How to Organize, Version, and Govern Team Prompts',
    seoTitle: 'Prompt Library Management: Organize & Version Team Prompts',
    intro: 'Teams that rely on shared prompts without a structured library spend significant time re-creating prompts that already exist, lose the knowledge embedded in previous versions, and cannot enforce quality standards at scale. This guide covers folder structure, naming conventions, version control with Git and PromptHub, access control, and deprecation workflow.',
    metaDescription: 'Manage team prompt libraries: folder structure, naming conventions, Git versioning, access control, and deprecation workflow. For teams with 3+ prompt authors.',
    ogDescription: 'Team prompt library management: /prompts/theme/slug-v1.txt structure, Git tagging, PR review, access control, and deprecation. Test with PromptQuorum.',
    twitterDescription: '3+ people writing prompts? You need a library. Folder structure, naming, Git versioning, access control, deprecation workflow.',
    publishDate: '2026-05-02',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt Library Management',
    leadAnswerBlock: '**A prompt library is a shared, versioned repository of prompts that a team can search, reuse, and build on.** Without one, teams re-create prompts from scratch, lose the institutional knowledge in previous versions, and cannot enforce quality standards at scale.',
    quickFacts: [
      'Build a library when 3+ people write prompts or 20+ prompts are in active rotation',
      'Use /prompts/[theme]/[slug]-v[N].[ext] — version suffix required in filename',
      'Git: tag production versions, use feature branches, require PR review before merging to main',
      'Three access roles: contributor (add), owner/reviewer (modify), approver (deploy to production)',
      'Deprecate prompts with no usage in 90 days; retain in /deprecated for 1 year before deletion',
      'PromptHub provides structured review workflow with role-based access and comment threads',
    ],
    toc: [
      { label: 'What Is a Prompt Library?', anchor: 'what_is_library' },
      { label: 'Folder Structure and Naming Conventions', anchor: 'folder_structure' },
      { label: 'Version Control Strategies', anchor: 'version_control' },
      { label: 'Access Control and Ownership', anchor: 'access_control' },
      { label: 'Review and Deprecation Workflow', anchor: 'deprecation' },
      { label: 'Common Mistakes', anchor: 'common_mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-library-team-management',
      inLanguage: 'en',
      headline: 'Prompt Library Management: How to Organize, Version, and Govern Team Prompts',
      description: 'Manage team prompt libraries: folder structure, naming conventions, Git versioning, access control, and deprecation workflow. For teams with 3+ prompt authors.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['prompt library', 'prompt management', 'team prompts', 'version control prompts', 'PromptHub', 'prompt governance', 'prompt organization'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'Promptfoo' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-library-team-management', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is a prompt library?', acceptedAnswer: { '@type': 'Answer', text: 'A prompt library is a shared, versioned repository where a team stores, searches, and reuses prompts. It typically includes a folder structure organized by theme or use case, named and versioned files, access control rules, and a review or approval process. Without a library, teams duplicate effort and lose the knowledge embedded in previous prompt versions.' } },
        { '@type': 'Question', name: 'Should I use Git or PromptHub to version prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Use Git if your team is already comfortable with version control and treats prompts as code. Git tags mark production versions and branching handles concurrent editing. Use PromptHub if your team needs a structured review workflow with role-based access and comment threads on prompt changes. Many teams use Git for storage and PromptHub for review workflow.' } },
        { '@type': 'Question', name: 'When should I deprecate a prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Deprecate a prompt when: it has had no usage in 90 days, a better version has replaced it, or the model it was written for is no longer in production. The process: mark the file as deprecated in the frontmatter, archive it to a /deprecated folder, and retain it for at least 1 year for audit purposes.' } },
        { '@type': 'Question', name: 'Who should be allowed to modify prompts in a team library?', acceptedAnswer: { '@type': 'Answer', text: 'A three-role model works for most teams: any contributor can add a new prompt (open contribution), only the designated owner and assigned reviewers can modify an existing prompt (controlled modification), and only an approver (e.g., a team lead) can merge changes to the production branch (gated deployment). Implement this via Git branch protection rules or PromptHub role settings.' } },
        { '@type': 'Question', name: 'What is the minimum prompt library structure for a 3-person team?', acceptedAnswer: { '@type': 'Answer', text: 'A 3-person team needs: a single /prompts/ directory in the Git repo, folders by theme (up to 5 themes), a naming convention (slug + version), and a README.md per folder with a one-line description of each prompt. Add a review requirement on the main branch. This takes under 30 minutes to set up and prevents the most common failure modes: duplicated prompts, undiscoverable versions, unreviewed production changes.' } },
        { '@type': 'Question', name: 'How do I search across a Git-based prompt library?', acceptedAnswer: { '@type': 'Answer', text: 'Use grep -r "keyword" /prompts/ to search across all prompt files by content. Add a metadata header block (YAML frontmatter) to each prompt file with fields like: description, primaryTerm, theme, version, author, dateModified. For larger libraries, use PromptHub\'s search, which indexes all metadata fields.' } },
        { '@type': 'Question', name: 'When should I use PromptHub vs Git for prompt management?', acceptedAnswer: { '@type': 'Answer', text: 'Use Git if: your team is primarily developers, prompts are code-adjacent, you want prompts reviewed in standard code review tools (GitHub PRs), and you want free, self-hosted storage. Use PromptHub if: your team includes non-developers, you need a UI for prompt discovery and comparison, you want built-in diff visualization, or you need to share prompts across multiple codebases.' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'A prompt library solves discovery, duplication, and quality baseline. Build one when 3+ people write prompts or 20+ prompts are in active use. Use /prompts/[theme]/[slug]-v[N].[ext] structure, Git tags for production versions, and a three-role access model. Deprecate prompts with no usage in 90 days.',
      },
      what_is_library: {
        title: 'What Is a Prompt Library?',
        snippets: [
          { type: 'in-one-sentence', text: 'A prompt library is a shared, versioned, searchable repository of prompts that a team can discover, reuse, and improve over time.' },
          { type: 'in-plain-terms', text: 'Think of a prompt library as a code library for AI instructions: everything is named, versioned, discoverable, and reviewed before it goes to production.' },
        ],
        content: [
          '**A prompt library is a shared, versioned collection of prompts that a team can search, reuse, and improve over time.** It solves three problems: discovery (finding a prompt that already does what you need), duplication (writing the same prompt twice), and quality baseline (ensuring all prompts meet a minimum standard before being shared).',
          'Without a library, prompts live in individual notes, Slack messages, and ChatGPT history — inaccessible to the team, unversioned, and lost when someone leaves. A library makes prompts a team asset rather than individual knowledge.',
          'Build a prompt library when 3 or more people are regularly writing prompts, when the team uses 20 or more distinct prompts in active rotation, or when you notice the same prompt being re-created because no one could find the previous version.',
        ],
        callouts: [
          { type: 'insight', label: 'When to build', text: 'The trigger for building a library is not size — it is when prompt re-creation starts happening. If a team member has ever said "I think we already have a prompt for this," it is time to build a library.' },
        ],
      },
      folder_structure: {
        title: 'Folder Structure and Naming Conventions',
        content: [
          '**Use the pattern `/prompts/[theme]/[slug]-v[version].[ext]` for all prompt files.** This structure allows filtering by theme, sorting by version, and identifying the format (`.md` for markdown, `.txt` for plain text, `.json` for structured prompts) at a glance.',
          'Example directory layout for a 4-person team:',
        ],
        items: [
          '/prompts/customer-support/ticket-triage-v2.md',
          '/prompts/customer-support/first-response-draft-v1.md',
          '/prompts/content/blog-outline-v3.md',
          '/prompts/content/product-description-v1.md',
          '/prompts/engineering/code-review-v2.md',
          '/prompts/engineering/pr-summary-v1.md',
          '/prompts/research/source-summarize-v2.md',
          '/prompts/deprecated/ (archived prompts, retained for 1 year)',
        ],
        callouts: [
          { type: 'warning', label: 'Never use these names', text: 'Never use "latest", "final", "new", or "copy" as version identifiers in filenames. These identifiers become meaningless immediately and make version history unreadable.' },
        ],
      },
      folder_structure_part2: {
        content: [
          'Naming rules: lowercase only, hyphens instead of spaces, no special characters. Include the version suffix (`-v1`, `-v2`) in the filename so version history is visible in a file listing without opening a version control log. Never use `latest` or `final` as version identifiers — they become meaningless immediately.',
        ],
      },
      version_control: {
        title: 'Version Control Strategies for Prompt Libraries',
        content: [
          '**Use Git tags to mark production versions of prompts: tag `prompt/ticket-triage/v2` when that version is deployed to production.** This makes rollback deterministic — revert to the tagged commit, not to an ambiguous "last stable" state.',
          'For concurrent edits, follow the same branching strategy as code: create a feature branch (`prompt/ticket-triage-intent-detection`), open a pull request, get a review, then merge. Never edit prompts directly on `main`. Branch protection rules on `main` enforce this at the infrastructure level.',
          'PromptHub provides a structured review workflow for teams that want comment threads, approval checkboxes, and role-based access without managing Git branches manually. Both tools are compatible: store raw prompt files in Git and use PromptHub for the review UI on top.',
        ],
      },
      access_control: {
        title: 'Access Control and Ownership',
        content: [
          '**A three-role model covers most teams: contributor (can add), owner/reviewer (can modify), approver (can deploy to production).** Collapsing these roles — letting anyone edit and deploy — is the primary cause of prompt regression in shared libraries.',
          'Implement in Git: set branch protection rules on `main` to require 1 review approval before merge. Assign a CODEOWNERS file mapping each prompt folder to a specific reviewer. For PromptHub: use the built-in role settings — contributor, reviewer, and admin — mapped to the same three functions.',
          'Each prompt should have a designated owner. The owner is responsible for keeping the prompt current, triaging issues, and deciding when to deprecate. When the owner leaves the team, the prompt should be reassigned before their last day — orphaned prompts drift without maintenance and accumulate technical debt.',
        ],
        callouts: [
          { type: 'tip', label: 'Ownership transfer', text: 'Add prompt ownership reassignment to your team offboarding checklist. An orphaned prompt without an owner degrades silently — no one notices until a downstream system fails.' },
        ],
      },
      deprecation: {
        title: 'Review and Deprecation Workflow',
        content: [
          '**Run a quarterly review of the prompt library: check usage metrics, evaluate whether current versions still meet quality standards, and identify prompts ready for deprecation.** A prompt that no one uses in 90 days is a maintenance burden, not an asset.',
          'Criteria for deprecating a prompt: no usage in the past 90 days; a better version has replaced it and the old version is no longer needed; the model it was written and tested for (e.g., a specific GPT version) is no longer in production. If any two of these three apply, deprecate.',
          'Deprecation process: (1) add `status: deprecated` to the prompt frontmatter, (2) move the file to `/prompts/deprecated/`, (3) add a note pointing to the replacement prompt if one exists, (4) retain in the deprecated folder for at least 1 year to support audit trails and rollback requests. Delete after 1 year if no rollback has been requested.',
        ],
      },
      common_mistakes: {
        title: 'Common Mistakes in Prompt Library Management',
        mistakes: [
          { mistake: 'Flat folder structure with no theme organization', problem: 'With 20+ prompts, files become unsearchable and team members duplicate work because they cannot find existing prompts', fix: 'Organize prompts by theme: /prompts/[theme]/[slug]-v[N].txt. Maximum 20 prompts per theme folder.' },
          { mistake: 'No naming convention for prompt files', problem: 'Files named "prompt1.txt", "final.txt", "final-v2.txt" cannot be discovered or compared programmatically', fix: 'Use: [slug]-v[major].[minor].txt format. Example: classify-intent-v2.1.txt. Never use "final", "copy", or "new".' },
          { mistake: 'No deprecation process', problem: 'Old prompts accumulate, team members use outdated versions without knowing they are superseded', fix: 'Add a DEPRECATED.md to each folder with a list of deprecated slugs, the date deprecated, and the replacement slug.' },
          { mistake: 'No access control on production prompts', problem: 'Any team member can modify a production prompt without review, causing silent quality regressions', fix: 'Add branch protection rules: require PR review + CI/CD pass for any change to /prompts/production/.' },
        ],
      },
      key_takeaways: {
        title: 'Key Takeaways',
        items: [
          'A prompt library solves discovery, duplication, and quality baseline — build one when 3+ people write prompts or 20+ prompts are in active use',
          'Folder structure: /prompts/[theme]/[slug]-v[version].[ext] — lowercase, hyphens, version in filename',
          'Git: tag production versions, use feature branches, require PR review before merging to main',
          'PromptHub: use for structured review workflow with comment threads and role-based approval',
          'Three access roles: contributor (add), owner/reviewer (modify), approver (deploy to production)',
          'Deprecate prompts with no usage in 90 days; archive and retain for 1 year before deletion',
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is a prompt library?', a: 'A prompt library is a shared, versioned repository where a team stores, searches, and reuses prompts. It typically includes a folder structure organized by theme or use case, named and versioned files, access control rules, and a review or approval process.' },
          { q: 'Should I use Git or PromptHub to version prompts?', a: 'Use Git if your team treats prompts as code and is comfortable with version control. Use PromptHub if your team needs a structured review workflow with role-based access and comment threads. Many teams use Git for storage and PromptHub for the review UI.' },
          { q: 'What is the minimum prompt library structure for a 3-person team?', a: 'A 3-person team needs: a /prompts/ directory in Git, folders by theme (up to 5 themes), a naming convention (slug + version), and a README.md per folder. Add a review requirement on main. This takes under 30 minutes to set up.' },
          { q: 'How do I search across a Git-based prompt library?', a: 'Use grep -r "keyword" /prompts/ to search by content. Add YAML frontmatter to each prompt file with description, theme, version, author, and dateModified. For larger libraries, use PromptHub\'s search, which indexes all metadata fields.' },
          { q: 'When should I use PromptHub vs Git for prompt management?', a: 'Use Git if your team is primarily developers and wants prompts reviewed in GitHub PRs. Use PromptHub if your team includes non-developers, needs a UI for discovery and comparison, or needs to share prompts across multiple codebases.' },
        ],
      },
      related_reading: {
        title: 'Related Reading',
        items: [
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisierung',
    title: 'Prompt-Bibliothek für Teams: Organisieren, Versionieren & Verwalten (2026)',
    seoTitle: 'Prompt-Bibliothek verwalten: Organisieren und Versionieren von Team-Prompts',
    intro: 'Teams, die gemeinsame Prompts ohne eine strukturierte Bibliothek nutzen, verlieren Zeit mit dem Neuerstellen bereits vorhandener Prompts, verlieren das in früheren Versionen verankerte Wissen und können keine Qualitätsstandards im großen Maßstab durchsetzen. Dieser Leitfaden behandelt Ordnerstruktur, Namenskonventionen, Versionskontrolle mit Git und PromptHub, Zugriffssteuerung und den Deprecation-Workflow.',
    metaDescription: 'Team-Prompt-Bibliotheken verwalten: Ordnerstruktur, Namenskonventionen, Git-Versionierung, Zugriffssteuerung und Deprecation-Workflow. Für Teams mit 3+ Prompt-Autoren.',
    ogDescription: 'Team-Prompt-Bibliotheksverwaltung: /prompts/Thema/Slug-v1.txt-Struktur, Git-Tagging, PR-Review, Zugriffssteuerung und Deprecation. Testen mit PromptQuorum.',
    twitterDescription: '3+ Personen schreiben Prompts? Sie brauchen eine Bibliothek. Ordnerstruktur, Benennung, Git-Versionierung, Zugriffssteuerung, Deprecation-Workflow.',
    publishDate: '2026-05-02',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt-Bibliotheksverwaltung',
    leadAnswerBlock: '**Eine Prompt-Bibliothek ist ein gemeinsames, versioniertes Repository von Prompts, das ein Team durchsuchen, wiederverwenden und darauf aufbauen kann.** Ohne eine solche Bibliothek erstellen Teams Prompts immer wieder neu, verlieren das institutionelle Wissen in früheren Versionen und können keine Qualitätsstandards im großen Maßstab durchsetzen.',
    quickFacts: [
      'Bibliothek aufbauen, wenn 3+ Personen Prompts schreiben oder 20+ Prompts aktiv genutzt werden',
      'Verwenden Sie /prompts/[Thema]/[Slug]-v[N].[Ext] — Versions-Suffix im Dateinamen erforderlich',
      'Git: Produktionsversionen taggen, Feature-Branches nutzen, PR-Review vor dem Merge auf main',
      'Drei Zugriffsrollen: Mitwirkender (hinzufügen), Eigentümer/Reviewer (ändern), Genehmiger (deployen)',
      'Prompts ohne Nutzung in 90 Tagen deprecaten; 1 Jahr in /deprecated aufbewahren vor Löschung',
      'PromptHub bietet strukturierten Review-Workflow mit rollenbasiertem Zugriff und Kommentar-Threads',
    ],
    toc: [
      { label: 'Was ist eine Prompt-Bibliothek?', anchor: 'what_is_library' },
      { label: 'Ordnerstruktur und Namenskonventionen', anchor: 'folder_structure' },
      { label: 'Versionskontrollstrategien', anchor: 'version_control' },
      { label: 'Zugriffssteuerung und Eigenverantwortung', anchor: 'access_control' },
      { label: 'Review- und Deprecation-Workflow', anchor: 'deprecation' },
      { label: 'Häufige Fehler', anchor: 'common_mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Weiterführende Lektüre', anchor: 'related_reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-library-team-management?lang=de',
      inLanguage: 'de',
      headline: 'Prompt-Bibliothek für Teams: Organisieren, Versionieren & Verwalten',
      description: 'Team-Prompt-Bibliotheken verwalten: Ordnerstruktur, Namenskonventionen, Git-Versionierung, Zugriffssteuerung und Deprecation-Workflow.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt-Bibliothek', 'Prompt-Management', 'Team-Prompts', 'Prompt-Versionskontrolle', 'PromptHub', 'Prompt-Governance'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-library-team-management', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist eine Prompt-Bibliothek?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Prompt-Bibliothek ist ein gemeinsames, versioniertes Repository, in dem ein Team Prompts speichert, sucht und wiederverwendet. Sie umfasst typischerweise eine nach Thema oder Anwendungsfall organisierte Ordnerstruktur, benannte und versionierte Dateien, Zugriffssteuerungsregeln und einen Review- oder Genehmigungsprozess.' } },
        { '@type': 'Question', name: 'Sollte ich Git oder PromptHub zur Versionierung von Prompts verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Verwenden Sie Git, wenn Ihr Team bereits mit Versionskontrolle vertraut ist und Prompts wie Code behandelt. Verwenden Sie PromptHub, wenn Ihr Team einen strukturierten Review-Workflow mit rollenbasiertem Zugriff und Kommentar-Threads benötigt.' } },
        { '@type': 'Question', name: 'Was ist die minimale Prompt-Bibliotheksstruktur für ein 3-Personen-Team?', acceptedAnswer: { '@type': 'Answer', text: 'Ein 3-Personen-Team benötigt: ein /prompts/-Verzeichnis im Git-Repo, Ordner nach Thema (bis zu 5 Themen), eine Namenskonvention (Slug + Version) und eine README.md pro Ordner. Das Einrichten dauert unter 30 Minuten.' } },
        { '@type': 'Question', name: 'Wie durchsuche ich eine Git-basierte Prompt-Bibliothek?', acceptedAnswer: { '@type': 'Answer', text: 'Verwenden Sie grep -r "Stichwort" /prompts/ zur Suche nach Inhalt. Fügen Sie YAML-Frontmatter zu jeder Prompt-Datei mit Feldern wie Beschreibung, Thema, Version, Autor und Änderungsdatum hinzu. Für größere Bibliotheken verwenden Sie PromptHubs Suche.' } },
        { '@type': 'Question', name: 'Wann sollte ich einen Prompt deprecaten?', acceptedAnswer: { '@type': 'Answer', text: 'Deprecaten Sie einen Prompt, wenn: er in den letzten 90 Tagen keine Nutzung hatte, eine bessere Version ihn ersetzt hat oder das Modell, für das er geschrieben wurde, nicht mehr in Produktion ist.' } },
        { '@type': 'Question', name: 'Wann PromptHub vs Git für Prompt-Management verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Verwenden Sie Git, wenn Ihr Team hauptsächlich aus Entwicklern besteht und Prompts in GitHub PRs reviewt werden sollen. Verwenden Sie PromptHub, wenn Ihr Team Nicht-Entwickler umfasst oder eine UI für Erkennung und Vergleich benötigt.' } },
        { '@type': 'Question', name: 'Wer darf Prompts in einer Team-Bibliothek ändern?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Drei-Rollen-Modell: Jeder Mitwirkende kann einen neuen Prompt hinzufügen, nur der designierte Eigentümer und zugewiesene Reviewer können vorhandene Prompts ändern, und nur ein Genehmiger kann Änderungen in den Produktionsbranch mergen.' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Kurzfassung',
        content: 'Eine Prompt-Bibliothek löst Auffindbarkeit, Duplizierung und Qualitätsbasis. Erstellen Sie eine, wenn 3+ Personen Prompts schreiben oder 20+ Prompts aktiv genutzt werden. Verwenden Sie die /prompts/[Thema]/[Slug]-v[N].[Ext]-Struktur, Git-Tags für Produktionsversionen und ein Drei-Rollen-Zugriffsmodell.',
      },
      what_is_library: {
        title: 'Was ist eine Prompt-Bibliothek?',
        snippets: [
          { type: 'in-one-sentence', text: 'Eine Prompt-Bibliothek ist ein gemeinsames, versioniertes, durchsuchbares Repository von Prompts, das ein Team entdecken, wiederverwenden und im Laufe der Zeit verbessern kann.' },
          { type: 'in-plain-terms', text: 'Stellen Sie sich eine Prompt-Bibliothek wie eine Code-Bibliothek für KI-Anweisungen vor: Alles ist benannt, versioniert, auffindbar und wird vor der Produktionsfreigabe geprüft.' },
        ],
        content: [
          '**Eine Prompt-Bibliothek ist eine gemeinsame, versionierte Sammlung von Prompts, die ein Team durchsuchen, wiederverwenden und im Laufe der Zeit verbessern kann.** Sie löst drei Probleme: Auffindbarkeit (einen Prompt finden, der bereits das Benötigte tut), Duplizierung (denselben Prompt zweimal schreiben) und Qualitätsbasis (sicherstellen, dass alle Prompts vor der Freigabe einen Mindeststandard erfüllen).',
          'Ohne eine Bibliothek leben Prompts in individuellen Notizen, Slack-Nachrichten und ChatGPT-Verläufen — für das Team unzugänglich, unversioniert und verloren, wenn jemand das Team verlässt.',
          'Erstellen Sie eine Prompt-Bibliothek, wenn 3 oder mehr Personen regelmäßig Prompts schreiben, wenn das Team 20 oder mehr verschiedene Prompts in aktiver Rotation verwendet oder wenn Sie bemerken, dass derselbe Prompt neu erstellt wird, weil niemand die frühere Version finden konnte.',
        ],
        callouts: [
          { type: 'insight', label: 'Wann aufbauen', text: 'Der Auslöser zum Aufbau einer Bibliothek ist nicht die Teamgröße — es ist der Moment, wenn das Neuerstellen von Prompts beginnt. Wenn ein Teammitglied je gesagt hat "Ich glaube, wir haben schon einen Prompt dafür", ist es Zeit.' },
        ],
      },
      folder_structure: {
        title: 'Ordnerstruktur und Namenskonventionen',
        content: [
          '**Verwenden Sie das Muster `/prompts/[Thema]/[Slug]-v[Version].[Ext]` für alle Prompt-Dateien.** Diese Struktur ermöglicht das Filtern nach Thema, Sortieren nach Version und das Erkennen des Formats (`.md` für Markdown, `.json` für strukturierte Prompts) auf einen Blick.',
          'Namensregeln: nur Kleinbuchstaben, Bindestriche statt Leerzeichen, keine Sonderzeichen. Das Versions-Suffix (`-v1`, `-v2`) gehört in den Dateinamen, damit die Versionshistorie in einer Dateiliste sichtbar ist, ohne ein Versionskontrollprotokoll öffnen zu müssen. Verwenden Sie niemals `aktuell` oder `final` als Versionsbezeichner — diese werden sofort bedeutungslos.',
        ],
        callouts: [
          { type: 'warning', label: 'Diese Namen niemals verwenden', text: 'Verwenden Sie niemals "aktuell", "final", "neu" oder "kopie" als Versionsbezeichner in Dateinamen. Diese Bezeichner werden sofort bedeutungslos und machen die Versionshistorie unleserlich.' },
        ],
      },
      folder_structure_part2: {
        content: [],
      },
      version_control: {
        title: 'Versionskontrollstrategien für Prompt-Bibliotheken',
        content: [
          '**Verwenden Sie Git-Tags, um Produktionsversionen von Prompts zu markieren: Tag `prompt/ticket-triage/v2`, wenn diese Version in Produktion geht.** Das macht Rollbacks deterministisch — zurück zum getaggten Commit, nicht zu einem unklaren „letzten stabilen" Zustand.',
          'Für parallele Bearbeitungen folgen Sie derselben Branching-Strategie wie bei Code: Erstellen Sie einen Feature-Branch, öffnen Sie einen Pull Request, holen Sie ein Review ein und mergen Sie dann. Bearbeiten Sie Prompts niemals direkt auf `main`. Branch-Protection-Regeln auf `main` setzen dies auf Infrastrukturebene durch.',
          'PromptHub bietet einen strukturierten Review-Workflow für Teams, die Kommentar-Threads, Genehmigungskontrollkästchen und rollenbasierten Zugriff benötigen, ohne Git-Branches manuell zu verwalten. Beide Tools sind kompatibel: Rohe Prompt-Dateien in Git speichern und PromptHub für die Review-Oberfläche darauf verwenden.',
        ],
      },
      access_control: {
        title: 'Zugriffssteuerung und Eigenverantwortung',
        content: [
          '**Ein Drei-Rollen-Modell deckt die meisten Teams ab: Mitwirkender (kann hinzufügen), Eigentümer/Reviewer (kann ändern), Genehmiger (kann in Produktion deployen).** Das Zusammenführen dieser Rollen — wenn jeder bearbeiten und deployen kann — ist die Hauptursache für Prompt-Regression in gemeinsamen Bibliotheken.',
          'Umsetzung in Git: Branch-Protection-Regeln auf `main` setzen, die 1 Review-Genehmigung vor dem Merge erfordern. Eine CODEOWNERS-Datei zuweisen, die jeden Prompt-Ordner einem bestimmten Reviewer zuordnet. Für PromptHub: die eingebauten Rolleneinstellungen verwenden — Mitwirkender, Reviewer und Administrator.',
          'Jeder Prompt sollte einen designierten Eigentümer haben. Der Eigentümer ist dafür verantwortlich, den Prompt aktuell zu halten, Probleme zu triagen und zu entscheiden, wann er deprecated wird.',
        ],
        callouts: [
          { type: 'tip', label: 'Eigentümerübertragung', text: 'Fügen Sie die Prompt-Eigentümerübertragung zu Ihrer Team-Offboarding-Checkliste hinzu. Ein verwaister Prompt ohne Eigentümer degradiert still — niemand bemerkt es, bis ein nachgelagertes System ausfällt.' },
        ],
      },
      deprecation: {
        title: 'Review- und Deprecation-Workflow',
        content: [
          '**Führen Sie vierteljährlich eine Überprüfung der Prompt-Bibliothek durch: Nutzungsmetriken prüfen, beurteilen, ob aktuelle Versionen noch Qualitätsstandards erfüllen, und Prompts identifizieren, die für die Deprecation bereit sind.** Ein Prompt, den in 90 Tagen niemand nutzt, ist eine Wartungslast, kein Asset.',
          'Kriterien für die Deprecation eines Prompts: keine Nutzung in den letzten 90 Tagen; eine bessere Version hat ihn ersetzt; das Modell, für das er geschrieben wurde, ist nicht mehr in Produktion. Wenn zwei dieser drei zutreffen, deprecaten.',
          'Deprecation-Prozess: (1) `status: deprecated` in das Prompt-Frontmatter einfügen, (2) Datei in `/prompts/deprecated/` verschieben, (3) Hinweis auf den Ersatz-Prompt hinzufügen, falls vorhanden, (4) mindestens 1 Jahr im Deprecated-Ordner aufbewahren. Nach 1 Jahr löschen, wenn kein Rollback angefordert wurde.',
        ],
      },
      common_mistakes: {
        title: 'Häufige Fehler bei der Prompt-Bibliotheksverwaltung',
        mistakes: [
          { mistake: 'Flache Ordnerstruktur ohne Themenorganisation', problem: 'Mit 20+ Prompts werden Dateien undurchsuchbar und Teammitglieder duplizieren Arbeit, weil sie vorhandene Prompts nicht finden können', fix: 'Prompts nach Thema organisieren: /prompts/[Thema]/[Slug]-v[N].txt. Maximal 20 Prompts pro Themenordner.' },
          { mistake: 'Keine Namenskonvention für Prompt-Dateien', problem: 'Dateien namens "prompt1.txt", "final.txt", "final-v2.txt" können nicht programmatisch entdeckt oder verglichen werden', fix: 'Format verwenden: [Slug]-v[Major].[Minor].txt. Beispiel: klassifiziere-absicht-v2.1.txt. Niemals "final", "kopie" oder "neu" verwenden.' },
          { mistake: 'Kein Deprecation-Prozess', problem: 'Alte Prompts häufen sich an, Teammitglieder verwenden veraltete Versionen, ohne zu wissen, dass sie überholt sind', fix: 'Fügen Sie eine DEPRECATED.md zu jedem Ordner hinzu mit einer Liste veralteter Slugs, dem Deprecation-Datum und dem Ersatz-Slug.' },
          { mistake: 'Keine Zugriffssteuerung für Produktions-Prompts', problem: 'Jedes Teammitglied kann einen Produktions-Prompt ohne Review ändern, was stille Qualitätsrückschritte verursacht', fix: 'Branch-Protection-Regeln hinzufügen: PR-Review + CI/CD-Pass für jede Änderung an /prompts/production/ erforderlich.' },
        ],
      },
      key_takeaways: {
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Eine Prompt-Bibliothek löst Auffindbarkeit, Duplizierung und Qualitätsbasis — erstellen Sie eine, wenn 3+ Personen Prompts schreiben oder 20+ Prompts aktiv genutzt werden',
          'Ordnerstruktur: /prompts/[Thema]/[Slug]-v[Version].[Ext] — Kleinbuchstaben, Bindestriche, Version im Dateinamen',
          'Git: Produktionsversionen taggen, Feature-Branches verwenden, PR-Review vor dem Merge auf main erfordern',
          'PromptHub: für strukturierten Review-Workflow mit Kommentar-Threads und rollenbasierter Genehmigung verwenden',
          'Drei Zugriffsrollen: Mitwirkender (hinzufügen), Eigentümer/Reviewer (ändern), Genehmiger (in Produktion deployen)',
          'Prompts ohne Nutzung in 90 Tagen deprecaten; archivieren und 1 Jahr vor Löschung aufbewahren',
        ],
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist eine Prompt-Bibliothek?', a: 'Eine Prompt-Bibliothek ist ein gemeinsames, versioniertes Repository, in dem ein Team Prompts speichert, sucht und wiederverwendet. Sie umfasst Ordnerstruktur, Namenskonventionen, Zugriffssteuerungsregeln und einen Review-Prozess.' },
          { q: 'Was ist die minimale Prompt-Bibliotheksstruktur für ein 3-Personen-Team?', a: 'Ein 3-Personen-Team benötigt: ein /prompts/-Verzeichnis im Git-Repo, Ordner nach Thema (bis zu 5 Themen), eine Namenskonvention und eine README.md pro Ordner. Das Einrichten dauert unter 30 Minuten.' },
          { q: 'Wie durchsuche ich eine Git-basierte Prompt-Bibliothek?', a: 'Verwenden Sie grep -r "Stichwort" /prompts/ zur Suche nach Inhalt. Fügen Sie YAML-Frontmatter zu jeder Prompt-Datei mit Beschreibung, Thema, Version und Autor hinzu. Für größere Bibliotheken verwenden Sie PromptHubs Suche.' },
          { q: 'Wann PromptHub vs Git verwenden?', a: 'Verwenden Sie Git, wenn Ihr Team aus Entwicklern besteht und Prompts in GitHub PRs reviewt werden sollen. Verwenden Sie PromptHub, wenn Nicht-Entwickler beteiligt sind oder eine UI für Erkennung und Vergleich benötigt wird.' },
        ],
      },
      related_reading: {
        title: 'Weiterführende Lektüre',
        items: [
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisation',
    title: 'Gestion de bibliothèque de prompts : organiser, versionner et gouverner les prompts d\'équipe',
    seoTitle: 'Gestion de bibliothèque de prompts : organiser et versionner les prompts d\'équipe',
    intro: 'Les équipes qui partagent des prompts sans bibliothèque structurée passent du temps à recréer des prompts existants, perdent les connaissances intégrées dans les versions précédentes, et ne peuvent pas imposer des standards de qualité à l\'échelle. Ce guide couvre la structure de dossiers, les conventions de nommage, la gestion de version avec Git et PromptHub, le contrôle d\'accès, et le workflow de dépréciation.',
    metaDescription: 'Gérer les bibliothèques de prompts d\'équipe : structure de dossiers, conventions de nommage, gestion de version Git, contrôle d\'accès et workflow de dépréciation. Pour les équipes avec 3+ auteurs.',
    ogDescription: 'Gestion de bibliothèque de prompts d\'équipe : structure /prompts/thème/slug-v1.txt, balisage Git, révision PR, contrôle d\'accès et dépréciation. Testez avec PromptQuorum.',
    twitterDescription: '3+ personnes écrivent des prompts ? Vous avez besoin d\'une bibliothèque. Structure de dossiers, nommage, versionnage Git, contrôle d\'accès, workflow de dépréciation.',
    publishDate: '2026-05-02',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Gestion de bibliothèque de prompts',
    leadAnswerBlock: '**Une bibliothèque de prompts est un dépôt partagé et versionné de prompts que l\'équipe peut rechercher, réutiliser et enrichir.** Sans une telle bibliothèque, les équipes recréent des prompts depuis zéro, perdent les connaissances intégrées dans les versions précédentes et ne peuvent pas imposer des standards de qualité à l\'échelle.',
    quickFacts: [
      'Créer une bibliothèque quand 3+ personnes écrivent des prompts ou 20+ prompts sont en rotation active',
      'Utiliser /prompts/[thème]/[slug]-v[N].[ext] — suffixe de version requis dans le nom de fichier',
      'Git : baliser les versions de production, utiliser des branches de fonctionnalité, révision PR requise avant fusion vers main',
      'Trois rôles d\'accès : contributeur (ajouter), propriétaire/réviseur (modifier), approbateur (déployer)',
      'Déprécier les prompts sans utilisation en 90 jours ; conserver 1 an dans /deprecated avant suppression',
      'PromptHub offre un workflow de révision structuré avec accès basé sur les rôles et fils de commentaires',
    ],
    toc: [
      { label: 'Qu\'est-ce qu\'une bibliothèque de prompts ?', anchor: 'what_is_library' },
      { label: 'Structure de dossiers et conventions de nommage', anchor: 'folder_structure' },
      { label: 'Stratégies de contrôle de version', anchor: 'version_control' },
      { label: 'Contrôle d\'accès et propriété', anchor: 'access_control' },
      { label: 'Workflow de révision et de dépréciation', anchor: 'deprecation' },
      { label: 'Erreurs courantes', anchor: 'common_mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Lectures connexes', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-library-team-management?lang=fr',
      inLanguage: 'fr',
      headline: 'Gestion de bibliothèque de prompts : organiser, versionner et gouverner les prompts d\'équipe',
      description: 'Gérer les bibliothèques de prompts d\'équipe : structure de dossiers, conventions de nommage, gestion de version Git, contrôle d\'accès et workflow de dépréciation.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['bibliothèque de prompts', 'gestion de prompts', 'prompts d\'équipe', 'contrôle de version prompts', 'PromptHub', 'gouvernance prompts'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-library-team-management', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Qu\'est-ce qu\'une bibliothèque de prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Une bibliothèque de prompts est un dépôt partagé et versionné où l\'équipe stocke, recherche et réutilise des prompts. Elle comprend généralement une structure de dossiers organisée par thème, des fichiers nommés et versionnés, des règles de contrôle d\'accès et un processus de révision.' } },
        { '@type': 'Question', name: 'Quelle est la structure minimale pour une équipe de 3 personnes ?', acceptedAnswer: { '@type': 'Answer', text: 'Une équipe de 3 personnes a besoin : d\'un répertoire /prompts/ dans le dépôt Git, de dossiers par thème (jusqu\'à 5 thèmes), d\'une convention de nommage (slug + version) et d\'un README.md par dossier. Cela prend moins de 30 minutes à configurer.' } },
        { '@type': 'Question', name: 'Comment rechercher dans une bibliothèque de prompts Git ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez grep -r "mot-clé" /prompts/ pour rechercher par contenu. Ajoutez un bloc de métadonnées YAML à chaque fichier de prompt avec des champs comme description, thème, version, auteur. Pour les bibliothèques plus grandes, utilisez la recherche de PromptHub.' } },
        { '@type': 'Question', name: 'Quand utiliser PromptHub vs Git ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez Git si votre équipe est principalement composée de développeurs et veut des prompts révisés dans les outils de code review GitHub. Utilisez PromptHub si votre équipe inclut des non-développeurs ou a besoin d\'une interface pour la découverte et la comparaison.' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'En bref',
        content: 'Une bibliothèque de prompts résout la découverte, la duplication et la base de qualité. Créez-en une quand 3+ personnes écrivent des prompts ou 20+ prompts sont en usage actif. Utilisez la structure /prompts/[thème]/[slug]-v[N].[ext], des tags Git pour les versions de production, et un modèle d\'accès à trois rôles.',
      },
      what_is_library: {
        title: 'Qu\'est-ce qu\'une bibliothèque de prompts ?',
        snippets: [
          { type: 'in-one-sentence', text: 'Une bibliothèque de prompts est un dépôt partagé, versionné et consultable de prompts qu\'une équipe peut découvrir, réutiliser et améliorer dans le temps.' },
          { type: 'in-plain-terms', text: 'Pensez à une bibliothèque de prompts comme une bibliothèque de code pour les instructions IA : tout est nommé, versionné, découvrable et révisé avant d\'aller en production.' },
        ],
        content: [
          '**Une bibliothèque de prompts est une collection partagée et versionnée de prompts que l\'équipe peut rechercher, réutiliser et améliorer au fil du temps.** Elle résout trois problèmes : la découverte (trouver un prompt qui fait déjà ce dont vous avez besoin), la duplication (écrire le même prompt deux fois) et la base de qualité (s\'assurer que tous les prompts répondent à un standard minimum avant d\'être partagés).',
          'Sans bibliothèque, les prompts vivent dans des notes individuelles, des messages Slack et l\'historique ChatGPT — inaccessibles à l\'équipe, non versionnés et perdus quand quelqu\'un part.',
          'Créez une bibliothèque de prompts lorsque 3 personnes ou plus écrivent régulièrement des prompts, lorsque l\'équipe utilise 20 prompts distincts ou plus en rotation active, ou lorsque vous remarquez qu\'un même prompt est recréé parce que personne ne pouvait trouver la version précédente.',
        ],
        callouts: [
          { type: 'insight', label: 'Quand construire', text: 'Le déclencheur pour construire une bibliothèque n\'est pas la taille — c\'est quand la recréation de prompts commence. Si un membre a déjà dit "je crois qu\'on a déjà un prompt pour ça", il est temps de construire une bibliothèque.' },
        ],
      },
      folder_structure: {
        title: 'Structure de dossiers et conventions de nommage',
        content: [
          '**Utilisez le pattern `/prompts/[thème]/[slug]-v[version].[ext]` pour tous les fichiers de prompts.** Cette structure permet de filtrer par thème, de trier par version et d\'identifier le format (`.md` pour markdown, `.json` pour les prompts structurés) en un coup d\'œil.',
          'Règles de nommage : uniquement des minuscules, des tirets à la place des espaces, pas de caractères spéciaux. Incluez le suffixe de version (`-v1`, `-v2`) dans le nom de fichier. N\'utilisez jamais `dernier` ou `final` comme identifiants de version.',
        ],
        callouts: [
          { type: 'warning', label: 'N\'utilisez jamais ces noms', text: 'N\'utilisez jamais "dernier", "final", "nouveau" ou "copie" comme identifiants de version dans les noms de fichiers. Ces identifiants deviennent immédiatement sans signification.' },
        ],
      },
      folder_structure_part2: {
        content: [],
      },
      version_control: {
        title: 'Stratégies de contrôle de version pour les bibliothèques de prompts',
        content: [
          '**Utilisez des tags Git pour marquer les versions de production des prompts : tag `prompt/ticket-triage/v2` lorsque cette version est déployée en production.** Cela rend les retours arrière déterministes — retour au commit tagué, pas à un état "dernier stable" ambigu.',
          'Pour les modifications concurrentes, suivez la même stratégie de branching que pour le code : créez une branche de fonctionnalité, ouvrez une pull request, obtenez une révision, puis fusionnez. Ne modifiez jamais les prompts directement sur `main`.',
          'PromptHub fournit un workflow de révision structuré pour les équipes qui veulent des fils de commentaires, des cases à cocher d\'approbation et un accès basé sur les rôles sans gérer manuellement les branches Git.',
        ],
      },
      access_control: {
        title: 'Contrôle d\'accès et propriété',
        content: [
          '**Un modèle à trois rôles couvre la plupart des équipes : contributeur (peut ajouter), propriétaire/réviseur (peut modifier), approbateur (peut déployer en production).** Fusionner ces rôles est la principale cause de régression de prompts dans les bibliothèques partagées.',
          'Implémentation dans Git : définir des règles de protection de branche sur `main` nécessitant 1 approbation de révision avant la fusion. Assigner un fichier CODEOWNERS mappant chaque dossier de prompts à un réviseur spécifique.',
          'Chaque prompt doit avoir un propriétaire désigné, responsable de maintenir le prompt à jour, de trier les problèmes et de décider quand le déprécier.',
        ],
        callouts: [
          { type: 'tip', label: 'Transfert de propriété', text: 'Ajoutez la réassignation de propriété de prompt à votre checklist de départ d\'équipe. Un prompt orphelin sans propriétaire se dégrade silencieusement — personne ne le remarque jusqu\'à l\'échec d\'un système en aval.' },
        ],
      },
      deprecation: {
        title: 'Workflow de révision et de dépréciation',
        content: [
          '**Effectuez une révision trimestrielle de la bibliothèque de prompts : vérifiez les métriques d\'utilisation, évaluez si les versions actuelles répondent encore aux standards de qualité, et identifiez les prompts prêts pour la dépréciation.** Un prompt que personne n\'utilise en 90 jours est une charge de maintenance, pas un asset.',
          'Critères de dépréciation d\'un prompt : aucune utilisation au cours des 90 derniers jours ; une meilleure version l\'a remplacé ; le modèle pour lequel il a été écrit n\'est plus en production. Si deux de ces trois critères s\'appliquent, dépréciez.',
          'Processus de dépréciation : (1) ajouter `status: deprecated` au frontmatter du prompt, (2) déplacer le fichier vers `/prompts/deprecated/`, (3) ajouter une note pointant vers le prompt de remplacement, (4) conserver pendant au moins 1 an. Supprimer après 1 an si aucun retour arrière n\'a été demandé.',
        ],
      },
      common_mistakes: {
        title: 'Erreurs courantes dans la gestion de bibliothèque de prompts',
        mistakes: [
          { mistake: 'Structure de dossiers plate sans organisation par thème', problem: 'Avec 20+ prompts, les fichiers deviennent introuvables et les membres de l\'équipe dupliquent le travail', fix: 'Organisez les prompts par thème : /prompts/[thème]/[slug]-v[N].txt. Maximum 20 prompts par dossier thématique.' },
          { mistake: 'Pas de convention de nommage pour les fichiers de prompts', problem: 'Les fichiers nommés "prompt1.txt", "final.txt" ne peuvent pas être découverts ou comparés programmatiquement', fix: 'Utilisez le format : [slug]-v[majeur].[mineur].txt. Exemple : classifier-intention-v2.1.txt. N\'utilisez jamais "final", "copie" ou "nouveau".' },
          { mistake: 'Pas de processus de dépréciation', problem: 'Les anciens prompts s\'accumulent, les membres utilisent des versions obsolètes sans le savoir', fix: 'Ajoutez un DEPRECATED.md à chaque dossier avec la liste des slugs dépréciés, la date et le slug de remplacement.' },
          { mistake: 'Pas de contrôle d\'accès sur les prompts de production', problem: 'N\'importe quel membre peut modifier un prompt de production sans révision, causant des régressions silencieuses', fix: 'Ajoutez des règles de protection de branche : révision PR + passage CI/CD requis pour tout changement dans /prompts/production/.' },
        ],
      },
      key_takeaways: {
        title: 'Points clés',
        items: [
          'Une bibliothèque de prompts résout la découverte, la duplication et la base de qualité — créez-en une quand 3+ personnes écrivent des prompts ou 20+ prompts sont en usage actif',
          'Structure de dossiers : /prompts/[thème]/[slug]-v[version].[ext] — minuscules, tirets, version dans le nom de fichier',
          'Git : taguer les versions de production, utiliser des branches de fonctionnalité, exiger une PR avant la fusion vers main',
          'PromptHub : utiliser pour un workflow de révision structuré avec fils de commentaires et approbation basée sur les rôles',
          'Trois rôles d\'accès : contributeur (ajouter), propriétaire/réviseur (modifier), approbateur (déployer en production)',
          'Déprécier les prompts sans utilisation en 90 jours ; archiver et conserver 1 an avant suppression',
        ],
      },
      faq: {
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Qu\'est-ce qu\'une bibliothèque de prompts ?', a: 'Une bibliothèque de prompts est un dépôt partagé et versionné où l\'équipe stocke, recherche et réutilise des prompts. Elle comprend une structure de dossiers organisée par thème, des fichiers versionnés et des règles de contrôle d\'accès.' },
          { q: 'Quelle est la structure minimale pour une équipe de 3 personnes ?', a: 'Un répertoire /prompts/ dans Git, des dossiers par thème (jusqu\'à 5), une convention de nommage et un README.md par dossier. Cela prend moins de 30 minutes à configurer.' },
          { q: 'Comment rechercher dans une bibliothèque de prompts Git ?', a: 'Utilisez grep -r "mot-clé" /prompts/ pour la recherche par contenu. Ajoutez du YAML frontmatter à chaque fichier avec description, thème, version et auteur. Pour les grandes bibliothèques, utilisez la recherche PromptHub.' },
          { q: 'Quand utiliser PromptHub vs Git ?', a: 'Utilisez Git pour les équipes de développeurs avec révisions dans GitHub PRs. Utilisez PromptHub si l\'équipe inclut des non-développeurs ou a besoin d\'une interface pour la découverte et la comparaison.' },
        ],
      },
      related_reading: {
        title: 'Lectures connexes',
        items: [
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    title: 'プロンプトライブラリ管理：チームのプロンプトを整理、バージョン管理、統治する方法',
    seoTitle: 'プロンプトライブラリ管理：チームプロンプトの整理とバージョン管理',
    intro: '構造化されたライブラリなしに共有プロンプトを使用するチームは、すでに存在するプロンプトを再作成することに時間を費やし、以前のバージョンに埋め込まれた知識を失い、大規模な品質標準を強制できません。このガイドでは、フォルダ構造、命名規則、GitとPromptHubによるバージョン管理、アクセス制御、廃止ワークフローを扱います。',
    metaDescription: 'チームのプロンプトライブラリを管理：フォルダ構造、命名規則、Gitバージョン管理、アクセス制御、廃止ワークフロー。3人以上のプロンプト作成者を持つチームのために。',
    ogDescription: 'チームのプロンプトライブラリ管理：/prompts/テーマ/スラッグ-v1.txt構造、Gitタグ付け、PRレビュー、アクセス制御、廃止。PromptQuorumでテスト。',
    twitterDescription: '3人以上がプロンプトを書いていますか？ライブラリが必要です。フォルダ構造、命名、Gitバージョン管理、アクセス制御、廃止ワークフロー。',
    publishDate: '2026-05-02',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'プロンプトライブラリ管理',
    leadAnswerBlock: '**プロンプトライブラリとは、チームが検索、再利用、構築できる共有のバージョン管理されたプロンプトのリポジトリです。** ライブラリがなければ、チームはゼロからプロンプトを再作成し、以前のバージョンに埋め込まれた組織的知識を失い、大規模な品質標準を強制できません。',
    quickFacts: [
      '3人以上がプロンプトを書くか20以上のプロンプトが積極的に使用されている場合にライブラリを構築する',
      '/prompts/[テーマ]/[スラッグ]-v[N].[拡張子]を使用——ファイル名にバージョンサフィックスが必要',
      'Git：本番バージョンにタグ付け、フィーチャーブランチ使用、mainへのマージ前にPRレビュー必須',
      '3つのアクセスロール：コントリビューター（追加）、オーナー/レビュアー（変更）、承認者（デプロイ）',
      '90日間使用されていないプロンプトを廃止；削除前に/deprecatedで1年保持',
      'PromptHubはロールベースアクセスとコメントスレッドを持つ構造化レビューワークフローを提供する',
    ],
    toc: [
      { label: 'プロンプトライブラリとは何ですか？', anchor: 'what_is_library' },
      { label: 'フォルダ構造と命名規則', anchor: 'folder_structure' },
      { label: 'バージョン管理戦略', anchor: 'version_control' },
      { label: 'アクセス制御と所有権', anchor: 'access_control' },
      { label: 'レビューと廃止ワークフロー', anchor: 'deprecation' },
      { label: 'よくある間違い', anchor: 'common_mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連記事', anchor: 'related_reading' },
      { label: '参考資料', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-library-team-management?lang=ja',
      inLanguage: 'ja',
      headline: 'プロンプトライブラリ管理：チームのプロンプトを整理、バージョン管理、統治する方法',
      description: 'チームのプロンプトライブラリを管理：フォルダ構造、命名規則、Gitバージョン管理、アクセス制御、廃止ワークフロー。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['プロンプトライブラリ', 'プロンプト管理', 'チームプロンプト', 'プロンプトバージョン管理', 'PromptHub', 'プロンプトガバナンス'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-library-team-management', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'プロンプトライブラリとは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトライブラリとは、チームがプロンプトを保存、検索、再利用する共有のバージョン管理されたリポジトリです。テーマやユースケースで整理されたフォルダ構造、命名とバージョン管理されたファイル、アクセス制御ルール、レビュープロセスが含まれます。' } },
        { '@type': 'Question', name: '3人チームの最小限のプロンプトライブラリ構造とは？', acceptedAnswer: { '@type': 'Answer', text: '3人チームには：GitリポジトリのsingleのPromptディレクトリ、テーマ別フォルダ（最大5テーマ）、命名規則（スラッグ+バージョン）、フォルダごとのREADME.mdが必要です。設定に30分未満かかります。' } },
        { '@type': 'Question', name: 'Gitベースのプロンプトライブラリで検索するには？', acceptedAnswer: { '@type': 'Answer', text: 'grep -r "キーワード" /prompts/ を使用してコンテンツ検索を行います。各プロンプトファイルにYAMLフロントマターを追加（説明、テーマ、バージョン、著者）。大きなライブラリにはPromptHubの検索を使用します。' } },
        { '@type': 'Question', name: 'PromptHubとGitのどちらを使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'チームが主に開発者でGitHub PRでレビューしたい場合はGitを使用します。非開発者が含まれる場合やUI上での発見と比較が必要な場合はPromptHubを使用します。' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '要点',
        content: 'プロンプトライブラリは発見性、重複、品質ベースラインを解決します。3人以上がプロンプトを書くか20以上のプロンプトが積極的に使用されている場合に構築します。/prompts/[テーマ]/[スラッグ]-v[N].[拡張子]構造、Gitタグ、3ロールアクセスモデルを使用します。',
      },
      what_is_library: {
        title: 'プロンプトライブラリとは何ですか？',
        snippets: [
          { type: 'in-one-sentence', text: 'プロンプトライブラリとは、チームが発見、再利用、時間をかけて改善できるプロンプトの共有、バージョン管理、検索可能なリポジトリです。' },
          { type: 'in-plain-terms', text: 'プロンプトライブラリをAI指示のコードライブラリと考えてください：すべてが命名され、バージョン管理され、発見可能で、本番に行く前にレビューされます。' },
        ],
        content: [
          '**プロンプトライブラリとは、チームが検索、再利用、時間をかけて改善できるプロンプトの共有バージョン管理されたコレクションです。** 3つの問題を解決します：発見性（必要なことをすでに行うプロンプトを見つける）、重複（同じプロンプトを2回書く）、品質ベースライン（共有前にすべてのプロンプトが最低基準を満たすことを確認する）。',
          'ライブラリなしでは、プロンプトは個人のメモ、Slackメッセージ、ChatGPT履歴に存在します——チームにアクセスできず、バージョン管理されておらず、誰かが去るときに失われます。',
          '3人以上が定期的にプロンプトを書くとき、チームが20種類以上の異なるプロンプトをアクティブローテーションで使用するとき、または誰も以前のバージョンを見つけられなかったために同じプロンプトが再作成されていることに気づいたときに、プロンプトライブラリを構築します。',
        ],
        callouts: [
          { type: 'insight', label: 'いつ構築するか', text: 'ライブラリを構築するトリガーはサイズではなく、プロンプトの再作成が始まったときです。チームメンバーが「これに対するプロンプトがすでにあると思う」と言ったことがあれば、構築の時です。' },
        ],
      },
      folder_structure: {
        title: 'フォルダ構造と命名規則',
        content: [
          '**すべてのプロンプトファイルに `/prompts/[テーマ]/[スラッグ]-v[バージョン].[拡張子]` というパターンを使用します。** この構造により、テーマでのフィルタリング、バージョンでのソート、フォーマットの一目での識別が可能になります。',
          '命名規則：小文字のみ、スペースの代わりにハイフン、特殊文字なし。バージョンサフィックス（`-v1`、`-v2`）をファイル名に含めることで、バージョン管理ログを開かずにファイルリストでバージョン履歴が見えるようになります。',
        ],
        callouts: [
          { type: 'warning', label: 'これらの名前は絶対に使わない', text: '「最新」「最終」「新」「コピー」をファイル名のバージョン識別子として使用しないでください。これらの識別子はすぐに意味をなさなくなり、バージョン履歴が読み取れなくなります。' },
        ],
      },
      folder_structure_part2: {
        content: [],
      },
      version_control: {
        title: 'プロンプトライブラリのバージョン管理戦略',
        content: [
          '**Gitタグを使用してプロンプトの本番バージョンをマークします：そのバージョンが本番にデプロイされたときに `prompt/ticket-triage/v2` とタグを付けます。** これによりロールバックが決定論的になります。',
          '並行編集には、コードと同じブランチング戦略に従います：フィーチャーブランチを作成し、プルリクエストを開き、レビューを得て、マージします。`main` でプロンプトを直接編集しないでください。',
          'PromptHubは、Gitブランチを手動で管理せずにコメントスレッド、承認チェックボックス、ロールベースアクセスを必要とするチームに構造化されたレビューワークフローを提供します。',
        ],
      },
      access_control: {
        title: 'アクセス制御と所有権',
        content: [
          '**3つのロールモデルがほとんどのチームをカバーします：コントリビューター（追加可）、オーナー/レビュアー（変更可）、承認者（本番にデプロイ可）。** これらのロールを統合することが共有ライブラリでのプロンプト回帰の主な原因です。',
          'Gitでの実装：マージ前に1つのレビュー承認を必要とする `main` のブランチ保護ルールを設定します。各プロンプトフォルダを特定のレビュアーにマッピングするCODEOWNERSファイルを割り当てます。',
          'すべてのプロンプトに指定されたオーナーが必要です。オーナーはプロンプトを最新の状態に保ち、問題をトリアージし、廃止するタイミングを決定する責任があります。',
        ],
        callouts: [
          { type: 'tip', label: '所有権の移転', text: 'プロンプト所有権の再割り当てをチームのオフボーディングチェックリストに追加してください。オーナーのいない孤立したプロンプトはサイレントに劣化します——下流のシステムが失敗するまで誰も気づきません。' },
        ],
      },
      deprecation: {
        title: 'レビューと廃止ワークフロー',
        content: [
          '**四半期ごとにプロンプトライブラリのレビューを実行します：使用メトリクスを確認し、現在のバージョンが品質標準を満たしているかを評価し、廃止の準備ができているプロンプトを特定します。** 90日間誰も使用しないプロンプトはアセットではなくメンテナンスの負担です。',
          'プロンプトを廃止する基準：過去90日間使用されていない、より良いバージョンが置き換えた、書かれてテストされたモデルが本番環境で使用されなくなった。これらのうち2つが当てはまれば廃止します。',
          '廃止プロセス：(1) プロンプトのフロントマターに `status: deprecated` を追加、(2) ファイルを `/prompts/deprecated/` に移動、(3) 代替プロンプトが存在する場合はそれへのメモを追加、(4) 少なくとも1年間保持。ロールバックリクエストがなければ1年後に削除。',
        ],
      },
      common_mistakes: {
        title: 'プロンプトライブラリ管理のよくある間違い',
        mistakes: [
          { mistake: 'テーマ整理なしのフラットなフォルダ構造', problem: '20以上のプロンプトがあると、ファイルが検索不可能になり、チームメンバーは既存のプロンプトを見つけられないため作業を重複する', fix: 'テーマ別にプロンプトを整理する：/prompts/[テーマ]/[スラッグ]-v[N].txt。テーマフォルダごとに最大20プロンプト。' },
          { mistake: 'プロンプトファイルの命名規則なし', problem: '"prompt1.txt"、"final.txt"、"final-v2.txt"と名付けられたファイルはプログラム的に発見や比較ができない', fix: '[スラッグ]-v[メジャー].[マイナー].txt形式を使用する。例：classify-intent-v2.1.txt。"final"、"copy"、"new"は使用しない。' },
          { mistake: '廃止プロセスなし', problem: '古いプロンプトが蓄積し、チームメンバーはそれらが置き換えられていることを知らずに古いバージョンを使用する', fix: '各フォルダにDEPRECATED.mdを追加し、廃止されたスラッグ、廃止日、置換スラッグのリストを含める。' },
          { mistake: '本番プロンプトのアクセス制御なし', problem: 'チームメンバー誰でもレビューなしに本番プロンプトを変更でき、サイレントな品質回帰を引き起こす', fix: 'ブランチ保護ルールを追加：/prompts/production/への変更にはPRレビュー + CI/CDパスが必要。' },
        ],
      },
      key_takeaways: {
        title: '重要なポイント',
        items: [
          'プロンプトライブラリは発見性、重複、品質ベースラインを解決——3人以上がプロンプトを書くか20以上のプロンプトが積極的に使用されている場合に構築する',
          'フォルダ構造：/prompts/[テーマ]/[スラッグ]-v[バージョン].[拡張子]——小文字、ハイフン、ファイル名にバージョン',
          'Git：本番バージョンにタグを付け、フィーチャーブランチを使用し、mainへのマージ前にPRレビューを必須にする',
          'PromptHub：コメントスレッドとロールベース承認を持つ構造化されたレビューワークフローに使用する',
          '3つのアクセスロール：コントリビューター（追加）、オーナー/レビュアー（変更）、承認者（本番デプロイ）',
          '90日間使用されていないプロンプトを廃止；削除前に1年間アーカイブして保持する',
        ],
      },
      faq: {
        title: 'よくある質問',
        faqs: [
          { q: 'プロンプトライブラリとは何ですか？', a: 'プロンプトライブラリとは、チームがプロンプトを保存、検索、再利用する共有のバージョン管理されたリポジトリです。フォルダ構造、命名規則、アクセス制御ルール、レビュープロセスが含まれます。' },
          { q: '3人チームの最小限の構造とは？', a: 'GitリポジトリのPromptディレクトリ、テーマ別フォルダ（最大5テーマ）、命名規則、フォルダごとのREADME.mdが必要です。設定に30分未満かかります。' },
          { q: 'Gitベースのライブラリで検索するには？', a: 'grep -r "キーワード" /prompts/ を使用してコンテンツ検索を行います。各ファイルにYAMLフロントマターを追加してください。大きなライブラリにはPromptHubの検索を使用します。' },
          { q: 'PromptHubとGitのどちらを使うべきですか？', a: 'チームが主に開発者でGitHub PRでレビューしたい場合はGitを使用します。非開発者が含まれる場合やUI上での発見が必要な場合はPromptHubを使用します。' },
        ],
      },
      related_reading: {
        title: '関連記事',
        items: [
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: '参考資料',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '工作流与自动化',
    title: 'Prompt库管理：如何组织、版本控制和治理团队Prompt',
    seoTitle: 'Prompt库管理：组织和版本控制团队Prompt',
    intro: '没有结构化库而依赖共享Prompt的团队会花费大量时间重新创建已有的Prompt，丢失之前版本中的知识，并且无法在规模上执行质量标准。本指南涵盖文件夹结构、命名规范、使用Git和PromptHub进行版本控制、访问控制以及弃用工作流。',
    metaDescription: '管理团队Prompt库：文件夹结构、命名规范、Git版本控制、访问控制和弃用工作流。适用于拥有3名以上Prompt作者的团队。',
    ogDescription: '团队Prompt库管理：/prompts/主题/标识符-v1.txt结构、Git标签、PR审查、访问控制和弃用。使用PromptQuorum测试。',
    twitterDescription: '3人以上在写Prompt？你需要一个库。文件夹结构、命名、Git版本控制、访问控制、弃用工作流。',
    publishDate: '2026-05-02',
    readTime: '10分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Prompt库管理',
    leadAnswerBlock: '**Prompt库是一个共享的、受版本控制的Prompt仓库，团队可以搜索、重用和构建。** 没有Prompt库，团队会从头重新创建Prompt，失去前版本中的机构知识，无法在规模上执行质量标准。',
    quickFacts: [
      '当3人以上写Prompt或20个以上Prompt处于活跃使用时构建库',
      '使用/prompts/[主题]/[标识符]-v[N].[扩展名]——文件名中需要版本后缀',
      'Git：标记生产版本，使用功能分支，合并到main前需要PR审查',
      '三种访问角色：贡献者（添加）、所有者/审查者（修改）、审批者（部署）',
      '弃用90天无使用的Prompt；在/deprecated中保留1年后删除',
      'PromptHub提供基于角色访问和评论线程的结构化审查工作流',
    ],
    toc: [
      { label: '什么是Prompt库？', anchor: 'what_is_library' },
      { label: '文件夹结构和命名规范', anchor: 'folder_structure' },
      { label: '版本控制策略', anchor: 'version_control' },
      { label: '访问控制和所有权', anchor: 'access_control' },
      { label: '审查和弃用工作流', anchor: 'deprecation' },
      { label: '常见错误', anchor: 'common_mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related_reading' },
      { label: '参考来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-library-team-management?lang=zh',
      inLanguage: 'zh',
      headline: 'Prompt库管理：如何组织、版本控制和治理团队Prompt',
      description: '管理团队Prompt库：文件夹结构、命名规范、Git版本控制、访问控制和弃用工作流。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt库', 'Prompt管理', '团队Prompt', 'Prompt版本控制', 'PromptHub', 'Prompt治理'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-library-team-management', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '什么是Prompt库？', acceptedAnswer: { '@type': 'Answer', text: 'Prompt库是一个共享的、受版本控制的仓库，团队在其中存储、搜索和重用Prompt。它通常包括按主题组织的文件夹结构、命名和版本控制的文件、访问控制规则以及审查流程。' } },
        { '@type': 'Question', name: '3人团队的最小Prompt库结构是什么？', acceptedAnswer: { '@type': 'Answer', text: '3人团队需要：Git仓库中的/prompts/目录、按主题的文件夹（最多5个主题）、命名规范（标识符+版本）和每个文件夹的README.md。设置时间不到30分钟。' } },
        { '@type': 'Question', name: '如何在基于Git的Prompt库中搜索？', acceptedAnswer: { '@type': 'Answer', text: '使用grep -r "关键词" /prompts/按内容搜索。为每个Prompt文件添加YAML前言元数据（描述、主题、版本、作者）。对于较大的库，使用PromptHub的搜索功能。' } },
        { '@type': 'Question', name: '何时使用PromptHub vs Git？', acceptedAnswer: { '@type': 'Answer', text: '如果团队主要是开发者并希望在GitHub PR中审查Prompt，使用Git。如果团队包含非开发者或需要发现和比较的UI，使用PromptHub。' } },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '摘要',
        content: 'Prompt库解决发现性、重复和质量基线问题。当3人以上写Prompt或20个以上Prompt积极使用时构建。使用/prompts/[主题]/[标识符]-v[N].[扩展名]结构、Git标签和三角色访问模型。',
      },
      what_is_library: {
        title: '什么是Prompt库？',
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt库是一个共享的、受版本控制的、可搜索的Prompt仓库，团队可以随时间发现、重用和改进。' },
          { type: 'in-plain-terms', text: '把Prompt库想象成AI指令的代码库：所有内容都有命名、版本控制、可发现，并在投入生产前经过审查。' },
        ],
        content: [
          '**Prompt库是一个共享的、受版本控制的Prompt集合，团队可以随时间搜索、重用和改进。** 它解决了三个问题：发现性（找到已经满足需求的Prompt）、重复（两次编写相同的Prompt）以及质量基线（确保所有Prompt在共享前满足最低标准）。',
          '没有库，Prompt存在于个人笔记、Slack消息和ChatGPT历史中——团队无法访问、未受版本控制，当有人离开时丢失。',
          '当3人或以上定期编写Prompt、团队在积极使用20种或以上不同Prompt，或者注意到同一Prompt因为没人能找到之前的版本而被重新创建时，构建Prompt库。',
        ],
        callouts: [
          { type: 'insight', label: '何时构建', text: '构建库的触发因素不是规模——而是当Prompt重新创建开始发生时。如果团队成员曾经说过"我认为我们已经有了这个Prompt"，就是构建库的时候了。' },
        ],
      },
      folder_structure: {
        title: '文件夹结构和命名规范',
        content: [
          '**对所有Prompt文件使用 `/prompts/[主题]/[标识符]-v[版本].[扩展名]` 的模式。** 这种结构允许按主题过滤、按版本排序，并一目了然地识别格式。',
          '命名规则：仅小写字母，用连字符代替空格，无特殊字符。在文件名中包含版本后缀（`-v1`、`-v2`），这样无需打开版本控制日志就能在文件列表中看到版本历史。',
        ],
        callouts: [
          { type: 'warning', label: '永远不要使用这些名称', text: '永远不要在文件名中使用"最新"、"最终"、"新"或"副本"作为版本标识符。这些标识符立即变得毫无意义，使版本历史无法阅读。' },
        ],
      },
      folder_structure_part2: {
        content: [],
      },
      version_control: {
        title: 'Prompt库的版本控制策略',
        content: [
          '**使用Git标签标记Prompt的生产版本：当该版本部署到生产环境时打标签 `prompt/ticket-triage/v2`。** 这使回滚具有确定性。',
          '对于并发编辑，遵循与代码相同的分支策略：创建功能分支，打开拉取请求，获得审查，然后合并。永远不要直接在 `main` 上编辑Prompt。',
          'PromptHub为需要评论线程、审批复选框和基于角色访问的团队提供结构化审查工作流，无需手动管理Git分支。',
        ],
      },
      access_control: {
        title: '访问控制和所有权',
        content: [
          '**三角色模型适合大多数团队：贡献者（可以添加）、所有者/审查者（可以修改）、审批者（可以部署到生产环境）。** 合并这些角色是共享库中Prompt回归的主要原因。',
          '在Git中实现：在 `main` 上设置分支保护规则，要求合并前有1个审查批准。分配一个CODEOWNERS文件，将每个Prompt文件夹映射到特定的审查者。',
          '每个Prompt应该有一个指定的所有者，负责保持Prompt更新、分类问题并决定何时弃用。',
        ],
        callouts: [
          { type: 'tip', label: '所有权转移', text: '将Prompt所有权重新分配添加到团队离职清单中。没有所有者的孤立Prompt会静默降级——直到下游系统失败才会有人注意到。' },
        ],
      },
      deprecation: {
        title: '审查和弃用工作流',
        content: [
          '**每季度对Prompt库进行审查：检查使用指标、评估当前版本是否仍满足质量标准，并识别准备弃用的Prompt。** 90天内没有人使用的Prompt是维护负担，而非资产。',
          '弃用Prompt的标准：过去90天没有使用；更好的版本已取代它；其编写和测试的模型不再在生产环境中使用。如果这三项中有两项适用，则弃用。',
          '弃用流程：(1) 在Prompt前置数据中添加 `status: deprecated`，(2) 将文件移至 `/prompts/deprecated/`，(3) 如果存在替代Prompt则添加指向它的注释，(4) 在deprecated文件夹中至少保留1年。如果没有回滚请求，1年后删除。',
        ],
      },
      common_mistakes: {
        title: 'Prompt库管理中的常见错误',
        mistakes: [
          { mistake: '没有主题组织的平面文件夹结构', problem: '有20个以上Prompt时，文件变得不可搜索，团队成员因为找不到现有Prompt而重复工作', fix: '按主题组织Prompt：/prompts/[主题]/[标识符]-v[N].txt。每个主题文件夹最多20个Prompt。' },
          { mistake: 'Prompt文件没有命名规范', problem: '命名为"prompt1.txt"、"final.txt"的文件无法被程序化地发现或比较', fix: '使用格式：[标识符]-v[主要].[次要].txt。示例：classify-intent-v2.1.txt。永远不要使用"final"、"copy"或"new"。' },
          { mistake: '没有弃用流程', problem: '旧Prompt积累，团队成员在不知情的情况下使用已过时的版本', fix: '为每个文件夹添加DEPRECATED.md，列出已弃用标识符、弃用日期和替代标识符。' },
          { mistake: '生产Prompt没有访问控制', problem: '任何团队成员都可以在没有审查的情况下修改生产Prompt，导致静默质量回归', fix: '添加分支保护规则：对/prompts/production/的任何更改都需要PR审查 + CI/CD通过。' },
        ],
      },
      key_takeaways: {
        title: '关键要点',
        items: [
          'Prompt库解决发现性、重复和质量基线问题——当3人以上编写Prompt或20个以上Prompt在积极使用时构建',
          '文件夹结构：/prompts/[主题]/[标识符]-v[版本].[扩展名]——小写、连字符、文件名中包含版本',
          'Git：标记生产版本，使用功能分支，合并到main前需要PR审查',
          'PromptHub：用于带评论线程和基于角色审批的结构化审查工作流',
          '三种访问角色：贡献者（添加）、所有者/审查者（修改）、审批者（部署到生产环境）',
          '弃用90天无使用的Prompt；归档并保留1年后再删除',
        ],
      },
      faq: {
        title: '常见问题',
        faqs: [
          { q: '什么是Prompt库？', a: 'Prompt库是一个共享的、受版本控制的仓库，团队在其中存储、搜索和重用Prompt。它包括按主题组织的文件夹结构、版本控制文件和访问控制规则。' },
          { q: '3人团队的最小结构是什么？', a: 'Git仓库中的/prompts/目录、按主题的文件夹（最多5个）、命名规范和每个文件夹的README.md。设置时间不到30分钟。' },
          { q: '如何在Git库中搜索？', a: '使用grep -r "关键词" /prompts/按内容搜索。为每个文件添加YAML元数据。对于较大的库，使用PromptHub的搜索。' },
          { q: '何时使用PromptHub vs Git？', a: '如果团队主要是开发者并希望在GitHub PR中审查，使用Git。如果团队包含非开发者或需要发现和比较的UI，使用PromptHub。' },
        ],
      },
      related_reading: {
        title: '相关阅读',
        items: [
          { title: 'Build a Prompt Library', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/pe-setup-small-teams' },
        ],
      },
      sources: {
        title: '参考来源',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },
}
