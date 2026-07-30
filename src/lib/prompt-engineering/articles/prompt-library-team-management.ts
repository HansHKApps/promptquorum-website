import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('prompt-library-team-management');

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    theme: 'Workflows & Automation',
    heroImage: '/images/prompt-library-team-management-overview-hero-en.png',
    title: 'Prompt Library Management: How to Organize, Version, and Govern Team Prompts',
    seoTitle: 'Prompt Library Management: Organize & Version Team Prompts',
    intro: 'Teams that rely on shared prompts without a structured library spend significant time re-creating prompts that already exist, lose the knowledge embedded in previous versions, and cannot enforce quality standards at scale. This guide covers folder structure, naming conventions, version control with Git and PromptHub, access control, and deprecation workflow.',
    metaDescription: 'Manage team prompt libraries: folder structure, naming, Git versioning, access control, deprecation workflow. For teams with 3+ prompt authors.',
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
      dateModified: '2026-07-13',
      keywords: ['prompt library', 'prompt management', 'team prompts', 'version control prompts', 'PromptHub', 'prompt governance', 'prompt organization'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'Promptfoo' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'en'),
      'proficiencyLevel': 'Intermediate',
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
          'PromptHub provides a structured review workflow for teams that want comment threads, approval checkboxes, and role-based access without managing Git branches manually. Both tools are compatible: store raw prompt files in Git and use PromptHub for the review UI on top. Before merging a new prompt version, [PromptQuorum](/features) validates it across 25+ models simultaneously — confirming the change works beyond the single model your team primarily tests against.',
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
        id: 'faq',
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
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
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
    freshness_tier: 'semi_annual',
    theme: 'Workflows & Automatisierung',
    heroImage: '/images/prompt-library-team-management-overview-hero-de.png',
    title: 'Prompt-Bibliothek für Teams: Organisieren, Versionieren & Verwalten (2026)',
    seoTitle: 'Prompt-Bibliothek: Organisation und Versionierung',
    intro: 'Teams, die gemeinsame Prompts ohne eine strukturierte Bibliothek nutzen, verlieren Zeit mit dem Neuerstellen bereits vorhandener Prompts, verlieren das in früheren Versionen verankerte Wissen und können keine Qualitätsstandards im großen Maßstab durchsetzen. Dieser Leitfaden behandelt Ordnerstruktur, Namenskonventionen, Versionskontrolle mit Git und PromptHub, Zugriffssteuerung und den Deprecation-Workflow.',
    metaDescription: 'Team-Prompt-Bibliotheken verwalten: Ordnerstruktur, Naming, Git-Versionierung, Zugriffsrechte, Deprecation. Für Teams mit 3+ Prompt-Autoren.',
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
      url: 'https://www.promptquorum.com/de/prompt-engineering/prompt-library-team-management',
      inLanguage: 'de',
      headline: 'Prompt-Bibliothek für Teams: Organisieren, Versionieren & Verwalten',
      description: 'Team-Prompt-Bibliotheken verwalten: Ordnerstruktur, Namenskonventionen, Git-Versionierung, Zugriffssteuerung und Deprecation-Workflow.',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['Prompt-Bibliothek', 'Prompt-Management', 'Team-Prompts', 'Prompt-Versionskontrolle', 'PromptHub', 'Prompt-Governance'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'de'),
      'proficiencyLevel': 'Intermediate',
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
        id: 'faq',
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
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
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

  es: {
    freshness_tier: 'semi_annual',
    theme: 'Workflows & Automatización',
    heroImage: '/images/prompt-library-team-management-overview-hero-es.png',
    title: 'Gestión de biblioteca de prompts: cómo organizar, versionar y gobernar los prompts del equipo',
    seoTitle: 'Gestión de biblioteca de prompts: organiza y versiona',
    intro: 'Los equipos que dependen de prompts compartidos sin una biblioteca estructurada pasan tiempo significativo recreando prompts que ya existen, pierden el conocimiento integrado en versiones anteriores y no pueden aplicar estándares de calidad a escala. Esta guía cubre estructura de carpetas, convenciones de nombres, control de versiones con Git y PromptHub, control de acceso y flujo de trabajo de deprecación.',
    metaDescription: 'Gestiona la biblioteca de prompts del equipo: carpetas, nombres, versionado Git, control de acceso y deprecación. Para equipos con 3+ autores de prompts.',
    ogDescription: 'Gestión de biblioteca de prompts del equipo: estructura /prompts/tema/slug-v1.txt, etiquetado Git, revisión PR, control de acceso y deprecación. Prueba con PromptQuorum.',
    twitterDescription: '¿3+ personas escribiendo prompts? Necesitas una biblioteca. Estructura de carpetas, nombres, versionado Git, control de acceso, flujo de deprecación.',
    publishDate: '2026-05-02',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Gestión de biblioteca de prompts',
    leadAnswerBlock: '**Una biblioteca de prompts es un repositorio compartido y versionado de prompts que un equipo puede buscar, reutilizar y construir sobre.** Sin una, los equipos recrean prompts desde cero, pierden el conocimiento institucional de versiones anteriores y no pueden aplicar estándares de calidad a escala.',
    quickFacts: [
      'Construye una biblioteca cuando 3+ personas escriben prompts o 20+ prompts están en rotación activa',
      'Usa /prompts/[tema]/[slug]-v[N].[ext] — sufijo de versión requerido en el nombre del archivo',
      'Git: etiqueta versiones de producción, usa ramas de funcionalidades, requiere revisión PR antes de hacer merge en main',
      'Tres roles de acceso: contribuidor (añadir), propietario/revisor (modificar), aprobador (desplegar en producción)',
      'Depreca los prompts sin uso en 90 días; conserva en /deprecated durante 1 año antes de eliminar',
      'PromptHub proporciona flujo de revisión estructurado con acceso basado en roles e hilos de comentarios',
    ],
    toc: [
      { label: '¿Qué es una biblioteca de prompts?', anchor: 'what_is_library' },
      { label: 'Estructura de carpetas y convenciones de nombres', anchor: 'folder_structure' },
      { label: 'Estrategias de control de versiones', anchor: 'version_control' },
      { label: 'Control de acceso y propiedad', anchor: 'access_control' },
      { label: 'Flujo de revisión y deprecación', anchor: 'deprecation' },
      { label: 'Errores comunes', anchor: 'common_mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Lecturas relacionadas', anchor: 'related_reading' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/es/prompt-engineering/prompt-library-team-management',
      inLanguage: 'es',
      headline: 'Gestión de biblioteca de prompts: cómo organizar, versionar y gobernar los prompts del equipo',
      description: 'Gestiona bibliotecas de prompts del equipo: estructura de carpetas, convenciones de nombres, versionado Git, control de acceso y flujo de deprecación.',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['biblioteca de prompts', 'gestión de prompts', 'prompts de equipo', 'control de versiones de prompts', 'PromptHub', 'gobernanza de prompts'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'es'),
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'Una biblioteca de prompts resuelve el descubrimiento, la duplicación y la línea base de calidad. Construye una cuando 3+ personas escriben prompts o 20+ prompts están en uso activo. Usa la estructura /prompts/[tema]/[slug]-v[N].[ext], etiquetas Git para versiones de producción y un modelo de acceso de tres roles. Depreca los prompts sin uso en 90 días.',
      },
      what_is_library: {
        title: '¿Qué es una biblioteca de prompts?',
        snippets: [
          { type: 'in-one-sentence', text: 'Una biblioteca de prompts es un repositorio compartido, versionado y consultable de prompts que un equipo puede descubrir, reutilizar y mejorar a lo largo del tiempo.' },
          { type: 'in-plain-terms', text: 'Piensa en una biblioteca de prompts como una biblioteca de código para instrucciones de IA: todo tiene nombre, versión, es descubrible y se revisa antes de ir a producción.' },
        ],
        content: [
          '**Una biblioteca de prompts es una colección compartida y versionada de prompts que un equipo puede buscar, reutilizar y mejorar a lo largo del tiempo.** Resuelve tres problemas: descubrimiento (encontrar un prompt que ya hace lo que necesitas), duplicación (escribir el mismo prompt dos veces) y línea base de calidad (asegurarse de que todos los prompts cumplen un estándar mínimo antes de compartirse).',
          'Sin una biblioteca, los prompts viven en notas individuales, mensajes de Slack e historial de ChatGPT — inaccesibles para el equipo, sin versionar y perdidos cuando alguien se va. Una biblioteca convierte los prompts en un activo del equipo en lugar de conocimiento individual.',
          'Construye una biblioteca de prompts cuando 3 o más personas escriben prompts regularmente, cuando el equipo usa 20 o más prompts distintos en rotación activa, o cuando notas que el mismo prompt se recrea porque nadie podía encontrar la versión anterior.',
        ],
        callouts: [
          { type: 'insight', label: 'Cuándo construir', text: 'El desencadenante para construir una biblioteca no es el tamaño — es cuando la recreación de prompts empieza a ocurrir. Si un miembro del equipo ha dicho alguna vez "creo que ya tenemos un prompt para esto", es momento de construir una biblioteca.' },
        ],
      },
      folder_structure: {
        title: 'Estructura de carpetas y convenciones de nombres',
        content: [
          '**Usa el patrón `/prompts/[tema]/[slug]-v[versión].[ext]` para todos los archivos de prompts.** Esta estructura permite filtrar por tema, ordenar por versión e identificar el formato (`.md` para markdown, `.txt` para texto plano, `.json` para prompts estructurados) de un vistazo.',
          'Ejemplo de estructura de directorio para un equipo de 4 personas:',
        ],
        items: [
          '/prompts/customer-support/ticket-triage-v2.md',
          '/prompts/customer-support/first-response-draft-v1.md',
          '/prompts/content/blog-outline-v3.md',
          '/prompts/content/product-description-v1.md',
          '/prompts/engineering/code-review-v2.md',
          '/prompts/engineering/pr-summary-v1.md',
          '/prompts/research/source-summarize-v2.md',
          '/prompts/deprecated/ (prompts archivados, conservados durante 1 año)',
        ],
        callouts: [
          { type: 'warning', label: 'Nunca uses estos nombres', text: 'Nunca uses "latest", "final", "new" o "copy" como identificadores de versión en los nombres de archivo. Estos identificadores pierden significado inmediatamente y hacen que el historial de versiones sea ilegible.' },
        ],
      },
      folder_structure_part2: {
        content: [
          'Reglas de nombres: solo minúsculas, guiones en lugar de espacios, sin caracteres especiales. Incluye el sufijo de versión (`-v1`, `-v2`) en el nombre del archivo para que el historial de versiones sea visible en un listado de archivos sin abrir un log de control de versiones. Nunca uses `latest` o `final` como identificadores de versión.',
        ],
      },
      version_control: {
        title: 'Estrategias de control de versiones para bibliotecas de prompts',
        content: [
          '**Usa etiquetas Git para marcar las versiones de producción de los prompts: etiqueta `prompt/ticket-triage/v2` cuando esa versión se despliegue en producción.** Esto hace que el rollback sea determinista — revertir al commit etiquetado, no a un estado ambiguo de "último estable".',
          'Para ediciones concurrentes, sigue la misma estrategia de ramas que para el código: crea una rama de funcionalidad (`prompt/ticket-triage-intent-detection`), abre un pull request, obtén una revisión, luego haz merge. Nunca edites prompts directamente en `main`. Las reglas de protección de ramas en `main` lo hacen cumplir a nivel de infraestructura.',
          'PromptHub proporciona un flujo de revisión estructurado para equipos que quieren hilos de comentarios, casillas de verificación de aprobación y acceso basado en roles sin gestionar ramas Git manualmente. Antes de hacer merge de una nueva versión de prompt, PromptQuorum la valida en 25+ modelos simultáneamente.',
        ],
      },
      access_control: {
        title: 'Control de acceso y propiedad',
        content: [
          '**Un modelo de tres roles cubre la mayoría de los equipos: contribuidor (puede añadir), propietario/revisor (puede modificar), aprobador (puede desplegar en producción).** Fusionar estos roles — permitir que cualquiera edite y despliegue — es la principal causa de regresión de prompts en bibliotecas compartidas.',
          'Implementación en Git: establece reglas de protección de ramas en `main` que requieran 1 aprobación de revisión antes del merge. Asigna un archivo CODEOWNERS que mapee cada carpeta de prompts a un revisor específico. Para PromptHub: usa la configuración de roles incorporada — contribuidor, revisor y administrador.',
          'Cada prompt debe tener un propietario designado. El propietario es responsable de mantener el prompt actualizado, clasificar problemas y decidir cuándo deprecarlo. Cuando el propietario deja el equipo, el prompt debe reasignarse antes de su último día.',
        ],
        callouts: [
          { type: 'tip', label: 'Transferencia de propiedad', text: 'Añade la reasignación de propiedad de prompts a tu checklist de offboarding del equipo. Un prompt huérfano sin propietario se degrada silenciosamente — nadie lo nota hasta que un sistema posterior falla.' },
        ],
      },
      deprecation: {
        title: 'Flujo de revisión y deprecación',
        content: [
          '**Ejecuta una revisión trimestral de la biblioteca de prompts: comprueba las métricas de uso, evalúa si las versiones actuales siguen cumpliendo los estándares de calidad e identifica los prompts listos para deprecar.** Un prompt que nadie usa en 90 días es una carga de mantenimiento, no un activo.',
          'Criterios para deprecar un prompt: sin uso en los últimos 90 días; una versión mejor lo ha reemplazado y la versión antigua ya no es necesaria; el modelo para el que fue escrito y probado ya no está en producción. Si cualquiera de estos dos de los tres aplica, depreca.',
          'Proceso de deprecación: (1) añade `status: deprecated` al frontmatter del prompt, (2) mueve el archivo a `/prompts/deprecated/`, (3) añade una nota que apunte al prompt de reemplazo si existe, (4) conserva en la carpeta deprecated durante al menos 1 año. Elimina después de 1 año si no se ha solicitado rollback.',
        ],
      },
      common_mistakes: {
        title: 'Errores comunes en la gestión de biblioteca de prompts',
        mistakes: [
          { mistake: 'Estructura de carpetas plana sin organización por tema', problem: 'Con 20+ prompts, los archivos se vuelven imposibles de buscar y los miembros del equipo duplican trabajo porque no pueden encontrar prompts existentes', fix: 'Organiza los prompts por tema: /prompts/[tema]/[slug]-v[N].txt. Máximo 20 prompts por carpeta de tema.' },
          { mistake: 'Sin convención de nombres para archivos de prompts', problem: 'Los archivos llamados "prompt1.txt", "final.txt", "final-v2.txt" no pueden descubrirse ni compararse programáticamente', fix: 'Usa el formato: [slug]-v[mayor].[menor].txt. Ejemplo: classify-intent-v2.1.txt. Nunca uses "final", "copy" o "new".' },
          { mistake: 'Sin proceso de deprecación', problem: 'Los prompts antiguos se acumulan, los miembros del equipo usan versiones desactualizadas sin saber que han sido superadas', fix: 'Añade un DEPRECATED.md a cada carpeta con una lista de slugs deprecados, la fecha de deprecación y el slug de reemplazo.' },
          { mistake: 'Sin control de acceso en los prompts de producción', problem: 'Cualquier miembro del equipo puede modificar un prompt de producción sin revisión, causando regresiones silenciosas de calidad', fix: 'Añade reglas de protección de ramas: requiere revisión PR + paso CI/CD para cualquier cambio en /prompts/production/.' },
        ],
      },
      key_takeaways: {
        title: 'Puntos clave',
        items: [
          'Una biblioteca de prompts resuelve el descubrimiento, la duplicación y la línea base de calidad — construye una cuando 3+ personas escriben prompts o 20+ prompts están en uso activo',
          'Estructura de carpetas: /prompts/[tema]/[slug]-v[versión].[ext] — minúsculas, guiones, versión en el nombre del archivo',
          'Git: etiqueta versiones de producción, usa ramas de funcionalidades, requiere revisión PR antes del merge en main',
          'PromptHub: usa para flujo de revisión estructurado con hilos de comentarios y aprobación basada en roles',
          'Tres roles de acceso: contribuidor (añadir), propietario/revisor (modificar), aprobador (desplegar en producción)',
          'Depreca los prompts sin uso en 90 días; archiva y conserva 1 año antes de eliminar',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es una biblioteca de prompts?', a: 'Una biblioteca de prompts es un repositorio compartido y versionado donde un equipo almacena, busca y reutiliza prompts. Típicamente incluye una estructura de carpetas organizada por tema o caso de uso, archivos nombrados y versionados, reglas de control de acceso y un proceso de revisión o aprobación.' },
          { q: '¿Debo usar Git o PromptHub para versionar prompts?', a: 'Usa Git si tu equipo trata los prompts como código y se siente cómodo con el control de versiones. Usa PromptHub si tu equipo necesita un flujo de revisión estructurado con acceso basado en roles e hilos de comentarios. Muchos equipos usan Git para almacenamiento y PromptHub para la interfaz de revisión.' },
          { q: '¿Cuál es la estructura mínima de biblioteca de prompts para un equipo de 3 personas?', a: 'Un equipo de 3 personas necesita: un directorio /prompts/ en Git, carpetas por tema (hasta 5 temas), una convención de nombres (slug + versión) y un README.md por carpeta. Añade un requisito de revisión en main. Esto tarda menos de 30 minutos en configurar.' },
          { q: '¿Cuándo usar PromptHub vs Git para la gestión de prompts?', a: 'Usa Git si tu equipo es principalmente de desarrolladores y quiere revisar prompts en GitHub PRs. Usa PromptHub si el equipo incluye no desarrolladores, necesita una interfaz de usuario para el descubrimiento y comparación, o necesita compartir prompts en múltiples bases de código.' },
        ],
      },
      related_reading: {
        title: 'Lecturas relacionadas',
        items: [
          { title: 'Construye una biblioteca de prompts', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Plantillas de documentación de prompts', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Control de versiones de prompts', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Gobernanza de prompts en producción', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Configuración de prompt engineering para equipos pequeños', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Fuentes',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  pt: {
    theme: 'Workflows & Automação',
    heroImage: '/images/prompt-library-team-management-overview-hero-pt.png',
    title: 'Gerenciamento de biblioteca de prompts: como organizar, versionar e governar os prompts da equipe',
    seoTitle: 'Gerenciamento de biblioteca de prompts: organize e versione',
    intro: 'Equipes que dependem de prompts compartilhados sem uma biblioteca estruturada gastam tempo significativo recriando prompts que já existem, perdem o conhecimento embutido em versões anteriores e não conseguem aplicar padrões de qualidade em escala. Este guia cobre estrutura de pastas, convenções de nomes, controle de versões com Git e PromptHub, controle de acesso e fluxo de trabalho de depreciação.',
    metaDescription: 'Gerencie a biblioteca de prompts da equipe: pastas, nomes, versionamento Git, controle de acesso e depreciação. Para equipes com 3+ autores de prompts.',
    ogDescription: 'Gerenciamento de biblioteca de prompts da equipe: estrutura /prompts/tema/slug-v1.txt, etiquetagem Git, revisão de PR, controle de acesso e depreciação. Teste com PromptQuorum.',
    twitterDescription: '3+ pessoas escrevendo prompts? Você precisa de uma biblioteca. Estrutura de pastas, nomes, versionamento Git, controle de acesso, fluxo de depreciação.',
    publishDate: '2026-05-02',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Gerenciamento de biblioteca de prompts',
    leadAnswerBlock: '**Uma biblioteca de prompts é um repositório compartilhado e versionado de prompts que uma equipe pode pesquisar, reutilizar e expandir.** Sem ela, as equipes recriam prompts do zero, perdem o conhecimento institucional de versões anteriores e não conseguem aplicar padrões de qualidade em escala.',
    quickFacts: [
      'Construa uma biblioteca quando 3+ pessoas escrevem prompts ou 20+ prompts estão em rotação ativa',
      'Use /prompts/[tema]/[slug]-v[N].[ext] — sufixo de versão obrigatório no nome do arquivo',
      'Git: etiquete versões de produção, use branches de funcionalidades, exija revisão de PR antes do merge em main',
      'Três papéis de acesso: contribuidor (adicionar), proprietário/revisor (modificar), aprovador (implantar em produção)',
      'Deprecie os prompts sem uso em 90 dias; conserve em /deprecated por 1 ano antes de excluir',
      'PromptHub fornece fluxo de revisão estruturado com acesso baseado em papéis e threads de comentários',
    ],
    toc: [
      { label: 'O que é uma biblioteca de prompts?', anchor: 'what_is_library' },
      { label: 'Estrutura de pastas e convenções de nomes', anchor: 'folder_structure' },
      { label: 'Estratégias de controle de versões', anchor: 'version_control' },
      { label: 'Controle de acesso e propriedade', anchor: 'access_control' },
      { label: 'Fluxo de revisão e depreciação', anchor: 'deprecation' },
      { label: 'Erros comuns', anchor: 'common_mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Leituras relacionadas', anchor: 'related_reading' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/pt/prompt-engineering/prompt-library-team-management',
      inLanguage: 'pt-BR',
      headline: 'Gerenciamento de biblioteca de prompts: como organizar, versionar e governar os prompts da equipe',
      description: 'Gerencie bibliotecas de prompts da equipe: estrutura de pastas, convenções de nomes, versionamento Git, controle de acesso e fluxo de depreciação.',
      datePublished: '2026-05-02',
      keywords: ['biblioteca de prompts', 'gerenciamento de prompts', 'prompts de equipe', 'controle de versões de prompts', 'PromptHub', 'governança de prompts'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'pt'),
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'Uma biblioteca de prompts resolve a descoberta, a duplicação e a linha de base de qualidade. Construa uma quando 3+ pessoas escrevem prompts ou 20+ prompts estão em uso ativo. Use a estrutura /prompts/[tema]/[slug]-v[N].[ext], etiquetas Git para versões de produção e um modelo de acesso de três papéis. Deprecie os prompts sem uso em 90 dias.',
      },
      what_is_library: {
        title: 'O que é uma biblioteca de prompts?',
        snippets: [
          { type: 'in-one-sentence', text: 'Uma biblioteca de prompts é um repositório compartilhado, versionado e pesquisável de prompts que uma equipe pode descobrir, reutilizar e aprimorar ao longo do tempo.' },
          { type: 'in-plain-terms', text: 'Pense em uma biblioteca de prompts como uma biblioteca de código para instruções de IA: tudo tem nome, versão, é descobrível e é revisado antes de ir para produção.' },
        ],
        content: [
          '**Uma biblioteca de prompts é uma coleção compartilhada e versionada de prompts que uma equipe pode pesquisar, reutilizar e aprimorar ao longo do tempo.** Resolve três problemas: descoberta (encontrar um prompt que já faz o que você precisa), duplicação (escrever o mesmo prompt duas vezes) e linha de base de qualidade (garantir que todos os prompts atendam a um padrão mínimo antes de serem compartilhados).',
          'Sem uma biblioteca, os prompts vivem em notas individuais, mensagens do Slack e histórico do ChatGPT — inacessíveis para a equipe, sem versionamento e perdidos quando alguém sai. Uma biblioteca transforma os prompts em um ativo da equipe em vez de conhecimento individual.',
          'Construa uma biblioteca de prompts quando 3 ou mais pessoas escrevem prompts regularmente, quando a equipe usa 20 ou mais prompts distintos em rotação ativa, ou quando você percebe que o mesmo prompt está sendo recriado porque ninguém conseguia encontrar a versão anterior.',
        ],
        callouts: [
          { type: 'insight', label: 'Quando construir', text: 'O gatilho para construir uma biblioteca não é o tamanho — é quando a recriação de prompts começa a ocorrer. Se um membro da equipe já disse "acho que já temos um prompt para isso", é hora de construir uma biblioteca.' },
        ],
      },
      folder_structure: {
        title: 'Estrutura de pastas e convenções de nomes',
        content: [
          '**Use o padrão `/prompts/[tema]/[slug]-v[versão].[ext]` para todos os arquivos de prompts.** Essa estrutura permite filtrar por tema, ordenar por versão e identificar o formato (`.md` para markdown, `.txt` para texto simples, `.json` para prompts estruturados) de um olhar.',
          'Exemplo de estrutura de diretório para uma equipe de 4 pessoas:',
        ],
        items: [
          '/prompts/customer-support/ticket-triage-v2.md',
          '/prompts/customer-support/first-response-draft-v1.md',
          '/prompts/content/blog-outline-v3.md',
          '/prompts/content/product-description-v1.md',
          '/prompts/engineering/code-review-v2.md',
          '/prompts/engineering/pr-summary-v1.md',
          '/prompts/research/source-summarize-v2.md',
          '/prompts/deprecated/ (prompts arquivados, conservados por 1 ano)',
        ],
        callouts: [
          { type: 'warning', label: 'Nunca use esses nomes', text: 'Nunca use "latest", "final", "new" ou "copy" como identificadores de versão nos nomes de arquivo. Esses identificadores perdem significado imediatamente e tornam o histórico de versões ilegível.' },
        ],
      },
      folder_structure_part2: {
        content: [
          'Regras de nomes: apenas minúsculas, hifens em vez de espaços, sem caracteres especiais. Inclua o sufixo de versão (`-v1`, `-v2`) no nome do arquivo para que o histórico de versões seja visível em uma listagem de arquivos sem abrir um log de controle de versões. Nunca use `latest` ou `final` como identificadores de versão.',
        ],
      },
      version_control: {
        title: 'Estratégias de controle de versões para bibliotecas de prompts',
        content: [
          '**Use etiquetas Git para marcar as versões de produção dos prompts: etiquete `prompt/ticket-triage/v2` quando essa versão for implantada em produção.** Isso torna o rollback determinístico — reverta para o commit etiquetado, não para um estado ambíguo de "último estável".',
          'Para edições concorrentes, siga a mesma estratégia de branches que para o código: crie um branch de funcionalidade (`prompt/ticket-triage-intent-detection`), abra um pull request, obtenha uma revisão, depois faça merge. Nunca edite prompts diretamente em `main`. As regras de proteção de branch em `main` fazem isso ser cumprido no nível de infraestrutura.',
          'O PromptHub fornece um fluxo de revisão estruturado para equipes que querem threads de comentários, caixas de seleção de aprovação e acesso baseado em papéis sem gerenciar branches Git manualmente. Antes de fazer merge de uma nova versão de prompt, o PromptQuorum a valida em 25+ modelos simultaneamente.',
        ],
      },
      access_control: {
        title: 'Controle de acesso e propriedade',
        content: [
          '**Um modelo de três papéis cobre a maioria das equipes: contribuidor (pode adicionar), proprietário/revisor (pode modificar), aprovador (pode implantar em produção).** Mesclar esses papéis — permitir que qualquer pessoa edite e implante — é a principal causa de regressão de prompts em bibliotecas compartilhadas.',
          'Implementação no Git: defina regras de proteção de branch em `main` que exijam 1 aprovação de revisão antes do merge. Atribua um arquivo CODEOWNERS que mapeie cada pasta de prompts para um revisor específico. Para PromptHub: use a configuração de papéis integrada — contribuidor, revisor e administrador.',
          'Cada prompt deve ter um proprietário designado. O proprietário é responsável por manter o prompt atualizado, classificar problemas e decidir quando depreciá-lo. Quando o proprietário sai da equipe, o prompt deve ser reatribuído antes do seu último dia.',
        ],
        callouts: [
          { type: 'tip', label: 'Transferência de propriedade', text: 'Adicione a reatribuição de propriedade de prompts ao seu checklist de offboarding da equipe. Um prompt órfão sem proprietário se degrada silenciosamente — ninguém percebe até que um sistema downstream falhe.' },
        ],
      },
      deprecation: {
        title: 'Fluxo de revisão e depreciação',
        content: [
          '**Execute uma revisão trimestral da biblioteca de prompts: verifique as métricas de uso, avalie se as versões atuais ainda atendem aos padrões de qualidade e identifique os prompts prontos para deprecação.** Um prompt que ninguém usa em 90 dias é uma carga de manutenção, não um ativo.',
          'Critérios para deprecar um prompt: sem uso nos últimos 90 dias; uma versão melhor o substituiu e a versão antiga não é mais necessária; o modelo para o qual foi escrito e testado não está mais em produção. Se qualquer dois dos três se aplicar, deprecie.',
          'Processo de depreciação: (1) adicione `status: deprecated` ao frontmatter do prompt, (2) mova o arquivo para `/prompts/deprecated/`, (3) adicione uma nota apontando para o prompt de substituição se existir, (4) conserve na pasta deprecated por pelo menos 1 ano. Exclua após 1 ano se não houver sido solicitado rollback.',
        ],
      },
      common_mistakes: {
        title: 'Erros comuns no gerenciamento de biblioteca de prompts',
        mistakes: [
          { mistake: 'Estrutura de pastas plana sem organização por tema', problem: 'Com 20+ prompts, os arquivos se tornam impossíveis de pesquisar e os membros da equipe duplicam trabalho porque não conseguem encontrar prompts existentes', fix: 'Organize os prompts por tema: /prompts/[tema]/[slug]-v[N].txt. Máximo de 20 prompts por pasta de tema.' },
          { mistake: 'Sem convenção de nomes para arquivos de prompts', problem: 'Arquivos chamados "prompt1.txt", "final.txt", "final-v2.txt" não podem ser descobertos nem comparados programaticamente', fix: 'Use o formato: [slug]-v[maior].[menor].txt. Exemplo: classify-intent-v2.1.txt. Nunca use "final", "copy" ou "new".' },
          { mistake: 'Sem processo de depreciação', problem: 'Prompts antigos se acumulam, os membros da equipe usam versões desatualizadas sem saber que foram superadas', fix: 'Adicione um DEPRECATED.md a cada pasta com uma lista de slugs deprecados, a data de depreciação e o slug de substituição.' },
          { mistake: 'Sem controle de acesso nos prompts de produção', problem: 'Qualquer membro da equipe pode modificar um prompt de produção sem revisão, causando regressões silenciosas de qualidade', fix: 'Adicione regras de proteção de branch: exija revisão de PR + etapa CI/CD para qualquer alteração em /prompts/production/.' },
        ],
      },
      key_takeaways: {
        title: 'Pontos-chave',
        items: [
          'Uma biblioteca de prompts resolve a descoberta, a duplicação e a linha de base de qualidade — construa uma quando 3+ pessoas escrevem prompts ou 20+ prompts estão em uso ativo',
          'Estrutura de pastas: /prompts/[tema]/[slug]-v[versão].[ext] — minúsculas, hifens, versão no nome do arquivo',
          'Git: etiquete versões de produção, use branches de funcionalidades, exija revisão de PR antes do merge em main',
          'PromptHub: use para fluxo de revisão estruturado com threads de comentários e aprovação baseada em papéis',
          'Três papéis de acesso: contribuidor (adicionar), proprietário/revisor (modificar), aprovador (implantar em produção)',
          'Deprecie os prompts sem uso em 90 dias; arquive e conserve 1 ano antes de excluir',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que é uma biblioteca de prompts?', a: 'Uma biblioteca de prompts é um repositório compartilhado e versionado onde uma equipe armazena, pesquisa e reutiliza prompts. Tipicamente inclui uma estrutura de pastas organizada por tema ou caso de uso, arquivos nomeados e versionados, regras de controle de acesso e um processo de revisão ou aprovação.' },
          { q: 'Devo usar Git ou PromptHub para versionar prompts?', a: 'Use Git se sua equipe trata prompts como código e se sente confortável com controle de versões. Use PromptHub se sua equipe precisar de um fluxo de revisão estruturado com acesso baseado em papéis e threads de comentários. Muitas equipes usam Git para armazenamento e PromptHub para a interface de revisão.' },
          { q: 'Qual é a estrutura mínima de biblioteca de prompts para uma equipe de 3 pessoas?', a: 'Uma equipe de 3 pessoas precisa de: um diretório /prompts/ no Git, pastas por tema (até 5 temas), uma convenção de nomes (slug + versão) e um README.md por pasta. Adicione um requisito de revisão em main. Isso leva menos de 30 minutos para configurar.' },
          { q: 'Quando usar PromptHub vs Git para gerenciamento de prompts?', a: 'Use Git se sua equipe é principalmente de desenvolvedores e quer revisar prompts em GitHub PRs. Use PromptHub se a equipe incluir não-desenvolvedores, precisar de uma interface de usuário para descoberta e comparação, ou precisar compartilhar prompts em múltiplas bases de código.' },
        ],
      },
      related_reading: {
        title: 'Leituras relacionadas',
        items: [
          { title: 'Construa uma biblioteca de prompts', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'Templates de documentação de prompts', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'Controle de versões de prompts', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Governança de prompts em produção', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Configuração de prompt engineering para equipes pequenas', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
        ],
      },
      sources: {
        title: 'Fontes',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    theme: 'Workflows & Automatisation',
    heroImage: '/images/prompt-library-team-management-overview-hero-fr.png',
    title: 'Gestion de bibliothèque de prompts : organiser, versionner et gouverner les prompts d\'équipe',
    seoTitle: 'Bibliothèque de prompts : organiser et versionner',
    intro: 'Les équipes qui partagent des prompts sans bibliothèque structurée passent du temps à recréer des prompts existants, perdent les connaissances intégrées dans les versions précédentes, et ne peuvent pas imposer des standards de qualité à l\'échelle. Ce guide couvre la structure de dossiers, les conventions de nommage, la gestion de version avec Git et PromptHub, le contrôle d\'accès, et le workflow de dépréciation.',
    metaDescription: 'Gérer les bibliothèques de prompts d\'équipe : structure, nommage, Git, contrôle d\'accès, dépréciation. Pour équipes avec 3+ auteurs.',
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
      url: 'https://www.promptquorum.com/fr/prompt-engineering/prompt-library-team-management',
      inLanguage: 'fr',
      headline: 'Gestion de bibliothèque de prompts : organiser, versionner et gouverner les prompts d\'équipe',
      description: 'Gérer les bibliothèques de prompts d\'équipe : structure de dossiers, conventions de nommage, gestion de version Git, contrôle d\'accès et workflow de dépréciation.',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['bibliothèque de prompts', 'gestion de prompts', 'prompts d\'équipe', 'contrôle de version prompts', 'PromptHub', 'gouvernance prompts'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'fr'),
      'proficiencyLevel': 'Intermediate',
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
        id: 'faq',
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
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
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
    freshness_tier: 'semi_annual',
    theme: 'ワークフローと自動化',
    heroImage: '/images/prompt-library-team-management-overview-hero-ja.png',
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
      url: 'https://www.promptquorum.com/ja/prompt-engineering/prompt-library-team-management',
      inLanguage: 'ja',
      headline: 'プロンプトライブラリ管理：チームのプロンプトを整理、バージョン管理、統治する方法',
      description: 'チームのプロンプトライブラリを管理：フォルダ構造、命名規則、Gitバージョン管理、アクセス制御、廃止ワークフロー。',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['プロンプトライブラリ', 'プロンプト管理', 'チームプロンプト', 'プロンプトバージョン管理', 'PromptHub', 'プロンプトガバナンス'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'ja'),
      'proficiencyLevel': 'Intermediate',
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
        id: 'faq',
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
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
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
    freshness_tier: 'semi_annual',
    theme: '工作流与自动化',
    heroImage: '/images/prompt-library-team-management-overview-hero-zh.png',
    title: 'Prompt库管理：如何组织、版本控制和治理团队Prompt',
    seoTitle: 'Prompt库管理：组织和版本控制团队Prompt',
    intro: '没有结构化库而依赖共享Prompt的团队会花费大量时间重新创建已有的Prompt，丢失之前版本中的知识，并且无法在规模上执行质量标准。本指南涵盖文件夹结构、命名规范、使用Git和PromptHub进行版本控制、访问控制以及弃用工作流。',
    metaDescription: '管理团队提示词库：文件夹结构、命名规范、Git版本控制、访问控制和弃用工作流。适用于拥有3名以上提示词作者的团队，确保质量标准。',
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
      url: 'https://www.promptquorum.com/zh/prompt-engineering/prompt-library-team-management',
      inLanguage: 'zh',
      headline: 'Prompt库管理：如何组织、版本控制和治理团队Prompt',
      description: '管理团队Prompt库：文件夹结构、命名规范、Git版本控制、访问控制和弃用工作流。',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['Prompt库', 'Prompt管理', '团队Prompt', 'Prompt版本控制', 'PromptHub', 'Prompt治理'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: buildOgImageObject(OG_SLUG, 'zh'),
      'proficiencyLevel': 'Intermediate',
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
        id: 'faq',
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
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'Prompt Governance in Production', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'Prompt Engineering Setup for Small Teams', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
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

  ko: {
    freshness_tier: 'semi_annual',
    theme: 'Workflows & Automatización',
    heroImage: '/images/prompt-library-team-management-overview-hero-ko.png',
    title: '프롬프트 라이브러리 관리: 팀 프롬프트 구성·버전 관리·거버넌스 방법',
    seoTitle: '프롬프트 라이브러리 관리: 구성과 버전 관리',
    intro: '구조화된 라이브러리 없이 공유 프롬프트에 의존하는 팀은 이미 존재하는 프롬프트를 다시 만드는 데 상당한 시간을 허비하고, 이전 버전에 담긴 지식을 잃으며, 규모에 맞는 품질 기준을 적용하지 못합니다. 이 가이드는 폴더 구조, 명명 규칙, Git과 PromptHub를 이용한 버전 관리, 접근 제어, 사용 중단 워크플로를 다룹니다.',
    metaDescription: '팀 프롬프트 라이브러리 관리: 폴더, 명명, Git 버전 관리, 접근 제어, 사용 중단. 프롬프트 작성자가 3명 이상인 팀을 위한 가이드.',
    ogDescription: '팀 프롬프트 라이브러리 관리: /prompts/주제/slug-v1.txt 구조, Git 태그, PR 검토, 접근 제어, 사용 중단. PromptQuorum으로 테스트하십시오.',
    twitterDescription: '프롬프트 작성자가 3명 이상이십니까? 라이브러리가 필요합니다. 폴더 구조, 명명, Git 버전 관리, 접근 제어, 사용 중단 흐름.',
    publishDate: '2026-05-02',
    readTime: '10분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '프롬프트 라이브러리 관리',
    leadAnswerBlock: '**프롬프트 라이브러리는 팀이 검색·재사용·발전시킬 수 있는 공유·버전 관리된 프롬프트 저장소입니다.** 없으면 팀은 처음부터 프롬프트를 다시 만들고, 이전 버전의 기관 지식을 잃으며, 규모에 맞는 품질 기준을 적용하지 못합니다.',
    quickFacts: [
      '프롬프트 작성자가 3명 이상이거나 활성 순환 중인 프롬프트가 20개 이상일 때 라이브러리를 구축하십시오',
      '/prompts/[주제]/[slug]-v[N].[ext] 사용 — 파일 이름에 버전 접미사 필수',
      'Git: 프로덕션 버전에 태그 지정, 기능 브랜치 사용, main으로 병합 전 PR 검토 필요',
      '세 가지 접근 역할: 기여자(추가), 소유자/검토자(수정), 승인자(프로덕션 배포)',
      '90일간 미사용 프롬프트는 사용 중단; 삭제 전 1년간 /deprecated에 보존',
      'PromptHub는 역할 기반 접근과 댓글 스레드가 있는 구조화된 검토 흐름 제공',
    ],
    toc: [
      { label: '프롬프트 라이브러리란 무엇인가', anchor: 'what_is_library' },
      { label: '폴더 구조와 명명 규칙', anchor: 'folder_structure' },
      { label: '버전 관리 전략', anchor: 'version_control' },
      { label: '접근 제어와 소유권', anchor: 'access_control' },
      { label: '검토 흐름과 사용 중단', anchor: 'deprecation' },
      { label: '일반적인 실수', anchor: 'common_mistakes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '관련 읽기', anchor: 'related_reading' },
      { label: '출처', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ko/prompt-engineering/prompt-library-team-management',
      inLanguage: 'ko',
      headline: '프롬프트 라이브러리 관리: 팀 프롬프트 구성·버전 관리·거버넌스 방법',
      description: '팀 프롬프트 라이브러리 관리: 폴더 구조, 명명 규칙, Git 버전 관리, 접근 제어, 사용 중단 흐름.',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['프롬프트 라이브러리', '프롬프트 관리', '팀 프롬프트', '프롬프트 버전 관리', 'PromptHub', '프롬프트 거버넌스'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'ko'),
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: '프롬프트 라이브러리는 검색·중복·품질 기준선 문제를 해결합니다. 프롬프트 작성자가 3명 이상이거나 20개 이상의 프롬프트가 활성 사용 중일 때 구축하십시오. /prompts/[주제]/[slug]-v[N].[ext] 구조, 프로덕션 버전을 위한 Git 태그, 3역할 접근 모델을 사용하십시오. 90일간 미사용 프롬프트는 사용 중단하십시오.',
      },
      what_is_library: {
        title: '프롬프트 라이브러리란 무엇인가',
        snippets: [
          { type: 'in-one-sentence', text: '프롬프트 라이브러리는 팀이 시간이 지남에 따라 검색·재사용·개선할 수 있는 공유·버전 관리·검색 가능한 프롬프트 저장소입니다.' },
          { type: 'in-plain-terms', text: '프롬프트 라이브러리를 AI 지침을 위한 코드 라이브러리라고 생각하십시오: 모든 것에 이름, 버전이 있고 검색 가능하며 프로덕션에 가기 전 검토됩니다.' },
        ],
        content: [
          '**프롬프트 라이브러리는 팀이 시간이 지남에 따라 검색·재사용·개선할 수 있는 공유·버전 관리된 프롬프트 모음입니다.** 세 가지 문제를 해결합니다: 검색(필요한 작업을 이미 수행하는 프롬프트 찾기), 중복(동일한 프롬프트를 두 번 작성하기), 품질 기준선(모든 프롬프트가 공유 전 최소 기준을 충족하도록 보장하기).',
          '라이브러리 없이 프롬프트는 개인 노트, Slack 메시지, ChatGPT 기록에 존재합니다 — 팀에게는 접근 불가능하고, 버전 관리도 없으며, 누군가 떠나면 사라집니다. 라이브러리는 프롬프트를 개인 지식이 아닌 팀 자산으로 전환합니다.',
          '3명 이상이 정기적으로 프롬프트를 작성하거나, 팀이 활성 순환 중에 20개 이상의 서로 다른 프롬프트를 사용하거나, 아무도 이전 버전을 찾을 수 없어 동일한 프롬프트가 다시 만들어지는 것을 알아차릴 때 프롬프트 라이브러리를 구축하십시오.',
        ],
        callouts: [
          { type: 'insight', label: '구축 시점', text: '라이브러리 구축의 트리거는 규모가 아닙니다 — 프롬프트 재생성이 일어나기 시작할 때입니다. 팀원이 "이것을 위한 프롬프트가 이미 있다고 생각해요"라고 말한 적이 있다면, 라이브러리를 구축할 때입니다.' },
        ],
      },
      folder_structure: {
        title: '폴더 구조와 명명 규칙',
        content: [
          '**모든 프롬프트 파일에 `/prompts/[주제]/[slug]-v[버전].[ext]` 패턴을 사용하십시오.** 이 구조를 통해 주제별 필터링, 버전별 정렬, 형식(마크다운은 `.md`, 일반 텍스트는 `.txt`, 구조화된 프롬프트는 `.json`) 식별을 한눈에 할 수 있습니다.',
          '4명 팀을 위한 예시 디렉토리 구조:',
        ],
        items: [
          '/prompts/customer-support/ticket-triage-v2.md',
          '/prompts/customer-support/first-response-draft-v1.md',
          '/prompts/content/blog-outline-v3.md',
          '/prompts/content/product-description-v1.md',
          '/prompts/engineering/code-review-v2.md',
          '/prompts/engineering/pr-summary-v1.md',
          '/prompts/research/source-summarize-v2.md',
          '/prompts/deprecated/ (보관된 프롬프트, 1년간 보존)',
        ],
        callouts: [
          { type: 'warning', label: '이 이름은 절대 사용 금지', text: '파일 이름에서 버전 식별자로 "latest", "final", "new", "copy"를 절대 사용하지 마십시오. 이 식별자들은 즉시 의미를 잃고 버전 기록을 읽을 수 없게 만듭니다.' },
        ],
      },
      folder_structure_part2: {
        content: [
          '명명 규칙: 소문자만, 공백 대신 하이픈, 특수 문자 없음. 버전 제어 로그를 열지 않고도 파일 목록에서 버전 기록이 보이도록 파일 이름에 버전 접미사(`-v1`, `-v2`)를 포함하십시오. 버전 식별자로 `latest` 또는 `final`을 절대 사용하지 마십시오.',
        ],
      },
      version_control: {
        title: '프롬프트 라이브러리의 버전 관리 전략',
        content: [
          '**Git 태그를 사용하여 프롬프트의 프로덕션 버전을 표시하십시오: 해당 버전이 프로덕션에 배포될 때 `prompt/ticket-triage/v2`로 태그를 지정하십시오.** 이렇게 하면 롤백이 결정적이 됩니다 — 모호한 "마지막 안정 버전" 상태가 아닌 태그된 커밋으로 되돌립니다.',
          '동시 편집의 경우 코드와 동일한 브랜치 전략을 따르십시오: 기능 브랜치(`prompt/ticket-triage-intent-detection`)를 만들고, 풀 리퀘스트를 열고, 검토를 받은 후 병합하십시오. main에서 직접 프롬프트를 편집하지 마십시오. main의 브랜치 보호 규칙이 인프라 수준에서 이를 강제합니다.',
          'PromptHub는 Git 브랜치를 수동으로 관리하지 않고 댓글 스레드, 승인 체크박스, 역할 기반 접근을 원하는 팀을 위한 구조화된 검토 흐름을 제공합니다. 새 프롬프트 버전을 병합하기 전에 PromptQuorum이 25개 이상의 모델에서 동시에 검증합니다.',
        ],
      },
      access_control: {
        title: '접근 제어와 소유권',
        content: [
          '**3역할 모델이 대부분의 팀을 담당합니다: 기여자(추가 가능), 소유자/검토자(수정 가능), 승인자(프로덕션 배포 가능).** 이 역할을 합치는 것 — 누구나 편집하고 배포 가능하게 하는 것 — 이 공유 라이브러리의 프롬프트 회귀의 주요 원인입니다.',
          'Git에서의 구현: 병합 전 1개의 검토 승인을 요구하는 main의 브랜치 보호 규칙을 설정하십시오. 각 프롬프트 폴더를 특정 검토자에게 매핑하는 CODEOWNERS 파일을 지정하십시오. PromptHub의 경우: 내장 역할 설정 — 기여자, 검토자, 관리자를 사용하십시오.',
          '각 프롬프트는 지정된 소유자가 있어야 합니다. 소유자는 프롬프트를 최신 상태로 유지하고, 문제를 분류하며, 언제 사용 중단할지 결정할 책임이 있습니다. 소유자가 팀을 떠날 때 마지막 날 전에 프롬프트를 재배정해야 합니다.',
        ],
        callouts: [
          { type: 'tip', label: '소유권 이전', text: '프롬프트 소유권 재배정을 팀 오프보딩 체크리스트에 추가하십시오. 소유자 없는 고아 프롬프트는 조용히 저하됩니다 — 다운스트림 시스템이 실패할 때까지 아무도 알아차리지 못합니다.' },
        ],
      },
      deprecation: {
        title: '검토 흐름과 사용 중단',
        content: [
          '**분기별 프롬프트 라이브러리 검토를 실행하십시오: 사용 메트릭을 확인하고, 현재 버전이 여전히 품질 기준을 충족하는지 평가하며, 사용 중단 준비가 된 프롬프트를 식별하십시오.** 90일간 아무도 사용하지 않는 프롬프트는 자산이 아닌 유지보수 부담입니다.',
          '프롬프트 사용 중단 기준: 지난 90일간 사용 없음; 더 나은 버전이 대체했고 구버전이 더 이상 필요하지 않음; 작성되고 테스트된 모델이 더 이상 프로덕션에 없음. 이 중 셋 중 둘이 해당되면 사용 중단하십시오.',
          '사용 중단 프로세스: (1) 프롬프트의 frontmatter에 `status: deprecated` 추가, (2) 파일을 `/prompts/deprecated/`로 이동, (3) 대체 프롬프트가 있으면 가리키는 메모 추가, (4) deprecated 폴더에서 최소 1년간 보존. 롤백 요청이 없으면 1년 후 삭제하십시오.',
        ],
      },
      common_mistakes: {
        title: '프롬프트 라이브러리 관리의 일반적인 실수',
        mistakes: [
          { mistake: '주제 구성 없는 평면 폴더 구조', problem: '프롬프트가 20개 이상이면 파일 검색이 불가능해지고 팀원들이 기존 프롬프트를 찾지 못해 작업을 중복합니다', fix: '주제별로 프롬프트를 구성하십시오: /prompts/[주제]/[slug]-v[N].txt. 주제 폴더당 최대 20개 프롬프트.' },
          { mistake: '프롬프트 파일에 명명 규칙 없음', problem: '"prompt1.txt", "final.txt", "final-v2.txt"라는 파일은 검색하거나 프로그래밍 방식으로 비교할 수 없습니다', fix: '형식 사용: [slug]-v[major].[minor].txt. 예: classify-intent-v2.1.txt. "final", "copy", "new"는 절대 사용 금지.' },
          { mistake: '사용 중단 프로세스 없음', problem: '구 프롬프트가 쌓이고 팀원들이 이미 더 나은 버전이 있다는 것도 모른 채 구버전을 사용합니다', fix: '각 폴더에 DEPRECATED.md를 추가하여 사용 중단된 slug, 사용 중단 날짜, 대체 slug 목록을 유지하십시오.' },
          { mistake: '프로덕션 프롬프트에 접근 제어 없음', problem: '팀원 누구나 검토 없이 프로덕션 프롬프트를 수정하여 조용한 품질 회귀를 야기합니다', fix: '브랜치 보호 규칙을 추가하십시오: /prompts/production/의 모든 변경에 PR 검토 + CI/CD 통과를 요구하십시오.' },
        ],
      },
      key_takeaways: {
        title: '핵심 요점',
        items: [
          '프롬프트 라이브러리는 검색·중복·품질 기준선 문제를 해결합니다 — 프롬프트 작성자가 3명 이상이거나 20개 이상의 프롬프트가 활성 사용 중일 때 구축하십시오',
          '폴더 구조: /prompts/[주제]/[slug]-v[버전].[ext] — 소문자, 하이픈, 파일 이름에 버전',
          'Git: 프로덕션 버전에 태그, 기능 브랜치 사용, main으로의 병합 전 PR 검토 필요',
          'PromptHub: 댓글 스레드와 역할 기반 승인이 있는 구조화된 검토 흐름에 사용',
          '세 가지 접근 역할: 기여자(추가), 소유자/검토자(수정), 승인자(프로덕션 배포)',
          '90일간 미사용 프롬프트는 사용 중단; 삭제 전 1년간 보관',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '프롬프트 라이브러리란 무엇입니까?', a: '프롬프트 라이브러리는 팀이 프롬프트를 저장·검색·재사용하는 공유·버전 관리된 저장소입니다. 일반적으로 주제 또는 사용 사례별로 구성된 폴더 구조, 명명 및 버전 관리된 파일, 접근 제어 규칙, 검토 또는 승인 프로세스를 포함합니다.' },
          { q: '프롬프트 버전 관리에 Git 또는 PromptHub를 사용해야 합니까?', a: '팀이 프롬프트를 코드처럼 취급하고 버전 관리에 익숙하다면 Git을 사용하십시오. 역할 기반 접근과 댓글 스레드가 있는 구조화된 검토 흐름이 필요하다면 PromptHub를 사용하십시오. 많은 팀이 저장에는 Git을, 검토 인터페이스에는 PromptHub를 사용합니다.' },
          { q: '3명 팀을 위한 최소 프롬프트 라이브러리 구조는 무엇입니까?', a: '3명 팀에는 다음이 필요합니다: Git의 /prompts/ 디렉토리, 주제별 폴더(최대 5개 주제), 명명 규칙(slug + 버전), 폴더당 README.md. main에 검토 요구 사항을 추가하십시오. 설정에 30분 미만이 걸립니다.' },
          { q: '프롬프트 관리에 PromptHub vs Git을 언제 사용해야 합니까?', a: '팀이 주로 개발자이고 GitHub PR에서 프롬프트를 검토하고 싶다면 Git을 사용하십시오. 팀에 비개발자가 포함되어 있거나, 검색 및 비교를 위한 UI가 필요하거나, 여러 코드베이스에서 프롬프트를 공유해야 한다면 PromptHub를 사용하십시오.' },
        ],
      },
      related_reading: {
        title: '관련 읽기',
        items: [
          { title: '프롬프트 라이브러리 구축', url: '/prompt-engineering/build-a-prompt-library' },
          { title: '프롬프트 문서 템플릿', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: '프롬프트 버전 관리', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: '프로덕션 프롬프트 거버넌스', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: '소규모 팀을 위한 프롬프트 엔지니어링 설정', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
        ],
      },
      sources: {
        title: '출처',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    theme: 'Workflows & Automation',
    heroImage: '/images/prompt-library-team-management-overview-hero-ar.png',
    title: 'إدارة مكتبة التلقينات: كيفية تنظيم تلقينات الفريق وإصدارها وحوكمتها',
    seoTitle: 'إدارة مكتبة ⁨Prompt⁩ للفريق: تنظيم وإصدار ⁨Git⁩',
    intro: 'تُضيع الفرق التي تعتمد على تلقينات مشتركة دون مكتبة منظمة وقتًا كبيرًا في إعادة إنشاء تلقينات موجودة بالفعل، وتفقد المعرفة المُدمجة في الإصدارات السابقة، ولا تستطيع فرض معايير جودة على نطاق واسع. يغطي هذا الدليل بنية المجلدات، واصطلاحات التسمية، والتحكم بالإصدارات باستخدام Git وPromptHub، والتحكم بالوصول، وسير عمل الإهمال.',
    metaDescription: 'فرق بـ ⁨3⁩ مؤلفين أو أكثر تحتاج هيكل مجلدات وتسمية موحدة وإصدار ⁨Git⁩. دليل لإدارة مكتبة ⁨Prompt⁩ مع التحكم بالوصول وسياسة الإهمال.',
    ogDescription: 'إدارة مكتبة تلقينات الفريق: بنية /prompts/theme/slug-v1.txt، وسم Git، مراجعة PR، التحكم بالوصول والإهمال. اختبر مع PromptQuorum.',
    twitterDescription: '⁨3⁩ أو أكثر يكتبون التلقينات؟ تحتاج إلى مكتبة. بنية المجلدات، التسمية، إصدار ⁨Git⁩، التحكم بالوصول، سير عمل الإهمال.',
    publishDate: '2026-05-02',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'إدارة مكتبة التلقينات',
    leadAnswerBlock: '**مكتبة التلقينات هي مستودع مشترك ومُصدَر للتلقينات يمكن للفريق البحث فيه وإعادة استخدامه والبناء عليه.** بدونها، تُعيد الفرق إنشاء التلقينات من الصفر، وتفقد المعرفة المؤسسية في الإصدارات السابقة، ولا تستطيع فرض معايير الجودة على نطاق واسع.',
    quickFacts: [
      'أنشئ مكتبة عندما يكتب 3 أشخاص أو أكثر التلقينات، أو عندما يكون هناك 20 تلقينًا أو أكثر في دوران نشط',
      'استخدم /prompts/[theme]/[slug]-v[N].[ext] — لاحقة الإصدار مطلوبة في اسم الملف',
      'Git: ضع علامة على إصدارات الإنتاج، استخدم فروع الميزات، اطلب مراجعة PR قبل الدمج في main',
      'ثلاثة أدوار وصول: مساهم (إضافة)، مالك/مراجع (تعديل)، موافق (النشر في الإنتاج)',
      'أهمل التلقينات غير المستخدمة خلال 90 يومًا؛ احتفظ بها في /deprecated لمدة عام قبل الحذف',
      'يوفر PromptHub سير عمل مراجعة منظمة مع وصول قائم على الأدوار وسلاسل التعليقات',
    ],
    toc: [
      { label: 'ما هي مكتبة التلقينات؟', anchor: 'what_is_library' },
      { label: 'بنية المجلدات واصطلاحات التسمية', anchor: 'folder_structure' },
      { label: 'استراتيجيات التحكم بالإصدارات', anchor: 'version_control' },
      { label: 'التحكم بالوصول والملكية', anchor: 'access_control' },
      { label: 'سير عمل المراجعة والإهمال', anchor: 'deprecation' },
      { label: 'الأخطاء الشائعة', anchor: 'common_mistakes' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'قراءات ذات صلة', anchor: 'related_reading' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/prompt-library-team-management',
      inLanguage: 'ar',
      headline: 'إدارة مكتبة التلقينات: كيفية تنظيم تلقينات الفريق وإصدارها وحوكمتها',
      description: 'إدارة مكتبات تلقينات الفريق: بنية المجلدات، اصطلاحات التسمية، إصدار Git، التحكم بالوصول، وسير عمل الإهمال.',
      datePublished: '2026-05-02',
      dateModified: '2026-07-13',
      keywords: ['مكتبة التلقينات', 'إدارة التلقينات', 'تلقينات الفريق', 'التحكم بإصدارات التلقينات', 'PromptHub', 'حوكمة التلقينات'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
      ],
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'ar'),
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'تحل مكتبة التلقينات مشكلات الاكتشاف والتكرار وخط أساس الجودة. أنشئها عندما يكتب 3 أشخاص أو أكثر التلقينات أو يكون هناك 20 تلقينًا أو أكثر في الاستخدام النشط. استخدم بنية /prompts/[theme]/[slug]-v[N].[ext]، وعلامات Git لإصدارات الإنتاج، ونموذج وصول بثلاثة أدوار. أهمل التلقينات غير المستخدمة خلال 90 يومًا.',
      },
      what_is_library: {
        title: 'ما هي مكتبة التلقينات؟',
        snippets: [
          { type: 'in-one-sentence', text: 'مكتبة التلقينات هي مستودع مشترك ومُصدَر وقابل للبحث يمكن للفريق اكتشافه وإعادة استخدامه وتحسينه بمرور الوقت.' },
          { type: 'in-plain-terms', text: 'فكر في مكتبة التلقينات كمكتبة كود لتعليمات الذكاء الاصطناعي: كل شيء مُسمَّى ومُصدَر وقابل للاكتشاف ويُراجَع قبل الدخول إلى الإنتاج.' },
        ],
        content: [
          '**مكتبة التلقينات هي مجموعة مشتركة ومُصدَرة من التلقينات يمكن للفريق البحث فيها وإعادة استخدامها وتحسينها بمرور الوقت.** تحل ثلاث مشكلات: الاكتشاف (إيجاد تلقين يفعل ما تحتاجه بالفعل)، والتكرار (كتابة نفس التلقين مرتين)، وخط أساس الجودة (ضمان أن جميع التلقينات تلبي حدًا أدنى من المعايير قبل المشاركة).',
          'بدون مكتبة، تعيش التلقينات في ملاحظات فردية ورسائل Slack وتاريخ ChatGPT — غير متاحة للفريق، وغير مُصدَرة، ومفقودة عندما يغادر شخص ما. المكتبة تحول التلقينات من معرفة فردية إلى أصل للفريق.',
          'أنشئ مكتبة تلقينات عندما يكتب 3 أشخاص أو أكثر التلقينات بانتظام، عندما يستخدم الفريق 20 تلقينًا مختلفًا أو أكثر في دوران نشط، أو عندما تلاحظ إعادة إنشاء نفس التلقين لأن أحدًا لم يستطع إيجاد الإصدار السابق.',
        ],
        callouts: [
          { type: 'insight', label: 'متى تبني المكتبة', text: 'المحرك لبناء مكتبة ليس الحجم — بل عندما تبدأ إعادة إنشاء التلقينات في الحدوث. إذا قال أحد أعضاء الفريق يومًا ما "أعتقد أن لدينا تلقينًا لهذا بالفعل"، فقد حان الوقت لبناء مكتبة.' },
        ],
      },
      folder_structure: {
        title: 'بنية المجلدات واصطلاحات التسمية',
        content: [
          '**استخدم النمط `/prompts/[theme]/[slug]-v[version].[ext]` لجميع ملفات التلقينات.** تتيح هذه البنية التصفية حسب الموضوع، والفرز حسب الإصدار، وتحديد التنسيق (`.md` للـ markdown، `.txt` للنص العادي، `.json` للتلقينات المنظمة) للوهلة الأولى.',
          'مثال على بنية المجلد لفريق من 4 أشخاص:',
        ],
        items: [
          '/prompts/customer-support/ticket-triage-v2.md',
          '/prompts/customer-support/first-response-draft-v1.md',
          '/prompts/content/blog-outline-v3.md',
          '/prompts/content/product-description-v1.md',
          '/prompts/engineering/code-review-v2.md',
          '/prompts/engineering/pr-summary-v1.md',
          '/prompts/research/source-summarize-v2.md',
          '/prompts/deprecated/ (تلقينات مؤرشفة، محتفظ بها لمدة عام)',
        ],
        callouts: [
          { type: 'warning', label: 'لا تستخدم هذه الأسماء أبدًا', text: 'لا تستخدم "latest" أو "final" أو "new" أو "copy" كمعرفات إصدار في أسماء الملفات. تفقد هذه المعرفات معناها فورًا وتجعل تاريخ الإصدارات غير قابل للقراءة.' },
        ],
      },
      folder_structure_part2: {
        content: [
          'قواعد التسمية: حروف صغيرة فقط، شُرَط بدلًا من المسافات، لا أحرف خاصة. أدرج لاحقة الإصدار (`-v1`، `-v2`) في اسم الملف حتى يكون تاريخ الإصدارات مرئيًا في قائمة الملفات دون الحاجة إلى فتح سجل التحكم بالإصدارات. لا تستخدم `latest` أو `final` كمعرفات إصدار أبدًا.',
        ],
      },
      version_control: {
        title: 'استراتيجيات التحكم بالإصدارات لمكتبات التلقينات',
        content: [
          '**استخدم علامات Git لتمييز إصدارات الإنتاج من التلقينات: ضع علامة `prompt/ticket-triage/v2` عند نشر ذلك الإصدار في الإنتاج.** هذا يجعل التراجع محددًا — العودة إلى الـ commit المُوسَم، لا إلى حالة "آخر استقرار" الغامضة.',
          'للتعديلات المتزامنة، اتبع استراتيجية الفروع نفسها المستخدمة للكود: أنشئ فرع ميزة (`prompt/ticket-triage-intent-detection`)، افتح pull request، احصل على مراجعة، ثم ادمج. لا تُعدِّل التلقينات مباشرة في `main`. تُطبِّق قواعد حماية الفروع على `main` ذلك على مستوى البنية التحتية.',
          'يوفر PromptHub سير عمل مراجعة منظمة للفرق التي تريد سلاسل تعليقات، ومربعات اختيار الموافقة، والوصول القائم على الأدوار دون إدارة فروع Git يدويًا. قبل دمج إصدار تلقين جديد، يتحقق PromptQuorum منه عبر 25+ نموذجًا في وقت واحد.',
        ],
      },
      access_control: {
        title: 'التحكم بالوصول والملكية',
        content: [
          '**نموذج الثلاثة أدوار يغطي معظم الفرق: مساهم (يمكنه الإضافة)، مالك/مراجع (يمكنه التعديل)، موافق (يمكنه النشر في الإنتاج).** دمج هذه الأدوار — السماح لأي شخص بالتعديل والنشر — هو السبب الرئيسي لتراجع التلقينات في المكتبات المشتركة.',
          'التطبيق في Git: اضبط قواعد حماية الفروع على `main` التي تتطلب موافقة مراجعة واحدة قبل الدمج. عيِّن ملف CODEOWNERS يربط كل مجلد تلقينات بمراجع محدد. لـ PromptHub: استخدم إعداد الأدوار المدمج — مساهم، مراجع، ومدير.',
          'يجب أن يكون لكل تلقين مالك محدد. المالك مسؤول عن إبقاء التلقين محدثًا، وتصنيف المشكلات، وتقرير متى يُهمله. عندما يغادر المالك الفريق، يجب إعادة تعيين التلقين قبل يومه الأخير.',
        ],
        callouts: [
          { type: 'tip', label: 'نقل الملكية', text: 'أضف إعادة تعيين ملكية التلقينات إلى قائمة مراجعة إلغاء انضمام الفريق. التلقين اليتيم بدون مالك يتدهور بصمت — لا أحد يلاحظ حتى يفشل نظام تابع.' },
        ],
      },
      deprecation: {
        title: 'سير عمل المراجعة والإهمال',
        content: [
          '**نفِّذ مراجعة ربع سنوية لمكتبة التلقينات: تحقق من مقاييس الاستخدام، وقيِّم ما إذا كانت الإصدارات الحالية لا تزال تلبي معايير الجودة، وحدد التلقينات الجاهزة للإهمال.** التلقين الذي لا يستخدمه أحد في 90 يومًا هو عبء صيانة وليس أصلًا.',
          'معايير إهمال التلقين: عدم الاستخدام خلال 90 يومًا الماضية؛ إصدار أفضل يحل محله والإصدار القديم لم يعد ضروريًا؛ النموذج الذي كُتب واختُبر من أجله لم يعد في الإنتاج. إذا انطبق أي اثنان من هذه الثلاثة، فأهمله.',
          'عملية الإهمال: (1) أضف `status: deprecated` إلى frontmatter التلقين، (2) انقل الملف إلى `/prompts/deprecated/`، (3) أضف ملاحظة تشير إلى التلقين البديل إن وُجد، (4) احتفظ به في مجلد deprecated لمدة عام على الأقل. احذف بعد عام إذا لم يُطلب أي تراجع.',
        ],
      },
      common_mistakes: {
        title: 'الأخطاء الشائعة في إدارة مكتبة التلقينات',
        mistakes: [
          { mistake: 'بنية مجلدات مسطحة دون تنظيم حسب الموضوع', problem: 'مع 20 تلقينًا أو أكثر، تصبح الملفات غير قابلة للبحث ويضاعف أعضاء الفريق العمل لأنهم لا يجدون التلقينات الموجودة', fix: 'نظِّم التلقينات حسب الموضوع: /prompts/[theme]/[slug]-v[N].txt. 20 تلقينًا كحد أقصى لكل مجلد موضوع.' },
          { mistake: 'عدم وجود اصطلاح تسمية لملفات التلقينات', problem: 'الملفات المسماة "prompt1.txt"، "final.txt"، "final-v2.txt" لا يمكن اكتشافها أو مقارنتها برمجيًا', fix: 'استخدم التنسيق: [slug]-v[major].[minor].txt. مثال: classify-intent-v2.1.txt. لا تستخدم "final" أو "copy" أو "new" أبدًا.' },
          { mistake: 'عدم وجود عملية إهمال', problem: 'تتراكم التلقينات القديمة، ويستخدم أعضاء الفريق إصدارات قديمة دون أن يعلموا أنها تجاوزتها', fix: 'أضف DEPRECATED.md لكل مجلد يحتوي على قائمة بـ slugs المُهملة، وتاريخ الإهمال، وslug البديل.' },
          { mistake: 'عدم التحكم بالوصول على تلقينات الإنتاج', problem: 'يمكن لأي عضو في الفريق تعديل تلقين الإنتاج دون مراجعة، مما يتسبب في تراجعات جودة صامتة', fix: 'أضف قواعد حماية الفروع: اطلب مراجعة PR + اجتياز CI/CD لأي تغيير في /prompts/production/.' },
        ],
      },
      key_takeaways: {
        title: 'النقاط الرئيسية',
        items: [
          'تحل مكتبة التلقينات مشكلات الاكتشاف والتكرار وخط أساس الجودة — أنشئها عندما يكتب 3 أشخاص أو أكثر التلقينات أو يكون هناك 20 تلقينًا أو أكثر في الاستخدام النشط',
          'بنية المجلدات: /prompts/[theme]/[slug]-v[version].[ext] — حروف صغيرة، شُرَط، إصدار في اسم الملف',
          'Git: ضع علامة على إصدارات الإنتاج، استخدم فروع الميزات، اطلب مراجعة PR قبل الدمج في main',
          'PromptHub: استخدمه لسير عمل مراجعة منظمة مع سلاسل التعليقات والموافقة القائمة على الأدوار',
          'ثلاثة أدوار وصول: مساهم (إضافة)، مالك/مراجع (تعديل)، موافق (النشر في الإنتاج)',
          'أهمل التلقينات غير المستخدمة خلال 90 يومًا؛ أرشف واحتفظ بها عامًا قبل الحذف',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هي مكتبة التلقينات؟', a: 'مكتبة التلقينات هي مستودع مشترك ومُصدَر يخزن فيه الفريق التلقينات ويبحث فيها ويعيد استخدامها. تشمل عادةً بنية مجلدات منظمة حسب الموضوع أو حالة الاستخدام، وملفات مُسماة ومُصدَرة، وقواعد التحكم بالوصول، وعملية مراجعة أو موافقة.' },
          { q: 'هل أستخدم Git أم PromptHub لإصدار التلقينات؟', a: 'استخدم Git إذا كان فريقك يعامل التلقينات ككود ويرتاح للتحكم بالإصدارات. استخدم PromptHub إذا احتاج فريقك إلى سير عمل مراجعة منظمة مع وصول قائم على الأدوار وسلاسل تعليقات. تستخدم فرق كثيرة Git للتخزين وPromptHub لواجهة المراجعة.' },
          { q: 'ما هي بنية المكتبة الأدنى لفريق من 3 أشخاص؟', a: 'يحتاج فريق من 3 أشخاص إلى: مجلد /prompts/ في Git، ومجلدات حسب الموضوع (حتى 5 موضوعات)، واصطلاح تسمية (slug + إصدار)، وREADME.md لكل مجلد. أضف متطلب مراجعة على main. يستغرق هذا الإعداد أقل من 30 دقيقة.' },
          { q: 'متى تستخدم PromptHub مقابل Git لإدارة التلقينات؟', a: 'استخدم Git إذا كان فريقك مكونًا بشكل رئيسي من مطورين ويريد مراجعة التلقينات في GitHub PRs. استخدم PromptHub إذا ضم الفريق غير المطورين، أو احتاج إلى واجهة مستخدم للاكتشاف والمقارنة، أو احتاج إلى مشاركة التلقينات عبر قواعد كود متعددة.' },
        ],
      },
      related_reading: {
        title: 'قراءات ذات صلة',
        items: [
          { title: 'بناء مكتبة تلقينات', url: '/prompt-engineering/build-a-prompt-library' },
          { title: 'قوالب توثيق التلقينات', url: '/prompt-engineering/prompt-documentation-templates' },
          { title: 'التحكم بإصدارات التلقينات', url: '/prompt-engineering/prompt-version-control-workflows' },
          { title: 'حوكمة التلقينات في الإنتاج', url: '/prompt-engineering/prompt-governance-in-production' },
          { title: 'إعداد prompt engineering للفرق الصغيرة', url: '/prompt-engineering/prompt-engineering-setup-small-teams' },
        ],
      },
      sources: {
        title: 'المصادر',
        items: [
          { title: 'Git Documentation: Branch Protection', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches' },
          { title: 'PromptHub Documentation', url: 'https://app.prompthub.us/docs' },
          { title: 'Braintrust: Prompt Management', url: 'https://www.braintrust.dev/docs/guides/prompts' },
        ],
      },
    },
  },
}
