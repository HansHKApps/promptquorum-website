import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'Prompt Governance in Production: Roles, Review Gates, and Deployment Rules',
    seoTitle: 'Prompt Governance in Production: Roles & Review Gates',
    intro: 'Prompt governance is the system of roles, review processes, and deployment rules that controls which prompts reach production and how they are monitored once live. Without it, prompt changes are untracked, untested, and unrollbackable.',
    metaDescription: 'Set up prompt governance with 3 roles (Author, Reviewer, Approver), 3 review gates, rollback procedures, and audit trails. NIST AI RMF and EU AI Act ready.',
    ogDescription: 'Prompt governance for production: 3-role ownership, automated test gates, rollback in under 5 minutes, and full audit trail. Test across models with PromptQuorum.',
    twitterDescription: 'Prompts fail silently. Governance is the only visibility mechanism. 3 roles, 3 gates, rollback in 5 minutes, full audit trail.',
    publishDate: '2026-05-02',
    readTime: '14 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'Prompt Governance',
    leadAnswerBlock: '**Prompt governance is the set of roles, review gates, and deployment rules that controls which prompts go live in production.** Without governance, prompts change silently — no approval trail, no rollback path, no incident response when outputs degrade.',
    quickFacts: [
      '3-role ownership model: Author, Reviewer, Approver',
      'Rollback takes under 5 minutes with version control configured in advance',
      'Three mandatory gates: automated regression tests (≥90% pass rate), peer review, security scan',
      'Audit trail must record who, what, when, why, and gate outcomes',
      'EU AI Act (effective 2026) requires traceability for high-risk AI prompts',
      'Minimum viable stack: Git + Braintrust or Promptfoo',
    ],
    toc: [
      { label: 'What Prompt Governance Is and Why It Matters', anchor: 'what_is_governance' },
      { label: 'The 3-Role Ownership Model', anchor: 'ownership_model' },
      { label: 'Review Gates Before Deployment', anchor: 'review_gates' },
      { label: 'How to Roll Back a Failing Prompt', anchor: 'rollback' },
      { label: 'Audit Trail: What to Log', anchor: 'audit_trail' },
      { label: 'Tools for Prompt Governance', anchor: 'tools' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-governance-production',
      inLanguage: 'en',
      headline: 'Prompt Governance in Production: Roles, Review Gates, and Deployment Rules',
      description: 'Set up prompt governance with 3 roles (Author, Reviewer, Approver), 3 review gates, rollback procedures, and audit trails. NIST AI RMF and EU AI Act compliant.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['prompt governance', 'prompt management', 'production prompts', 'AI governance', 'prompt deployment'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'NIST AI Risk Management Framework' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Prompt governance controls which prompts reach production through 3 roles (Author, Reviewer, Approver), 3 mandatory review gates, and rollback procedures. Prompts fail silently — governance is the only mechanism that adds visibility. Set up version control and rollback before you need it: rollback takes under 5 minutes when prepared, hours when not.',
        ],
      },
      key_takeaways: {
        title: 'Key Takeaways',
        items: [
          'Prompt governance = roles (Author, Reviewer, Approver) + review gates (automated tests, peer review, security scan) + rollback procedure',
          'Prompts fail silently — governance is the only mechanism that provides visibility before and after deployment',
          'Three gates minimum: automated regression tests (≥90% pass rate), peer review, security scan',
          'Set up rollback before you need it: version tags, deployment config pointing to tags, on-call access',
          'Audit trail must capture who, what, when, why, and gate outcomes — required by NIST AI RMF for high-risk systems',
          'Minimum viable stack: Git + Braintrust or Promptfoo. Add PromptHub or Vellum as team size and traffic grow',
        ],
      },
      what_is_governance: {
        title: 'What Prompt Governance Is and Why It Matters',
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt governance is the system of roles, review gates, and deployment rules that controls which prompts reach production and how they are monitored once live.' },
          { type: 'in-plain-terms', text: 'Without governance, prompt changes are invisible — no record of who changed what, no way to roll back when something breaks, and no alert when output quality degrades silently.' },
        ],
        content: [
          '**Prompt governance is the system that controls which prompts reach production, who can change them, and what happens when they fail.** It covers three areas: access control (who can author, review, and approve prompts), deployment process (what tests must pass before a prompt goes live), and incident response (how to detect, diagnose, and roll back a failing prompt).',
          'Governance is not bureaucracy for its own sake. It exists because prompts fail silently. When a prompt change degrades output quality, there is no error log, no exception, and no alert — outputs simply become worse. Without governance, teams often spend days diagnosing quality regressions that a one-line prompt change caused.',
          'Use governance whenever prompts affect user-facing features, regulated outputs (legal, medical, financial), or high-volume automated workflows. Skip formal governance for internal, low-stakes, one-off prompts.',
        ],
        callouts: [
          { type: 'warning', label: 'Silent failures', text: 'A prompt change that degrades quality produces no error, no exception, and no alert. You only discover the problem through user complaints or monitoring — both after the damage is done.' },
        ],
      },
      ownership_model: {
        title: 'Who Owns Prompts? The 3-Role Ownership Model',
        content: [
          '**Three roles cover prompt governance for most teams: Author, Reviewer, and Approver.** Each role has a distinct responsibility and a distinct veto point.',
        ],
        items: [
          'Author: writes the prompt, runs initial quality tests, submits for review. Responsible for functional correctness.',
          'Reviewer: checks quality, compliance, and safety. For regulated domains (legal, medical, financial), the reviewer must have domain expertise. For security-sensitive prompts, the reviewer must include a red-team check.',
          'Approver: approves or rejects deployment to production. Has unilateral authority to block a release regardless of reviewer sign-off.',
        ],
      },
      ownership_model_part2: {
        content: [
          'Add a Prompt Owner role for high-traffic production prompts. The Prompt Owner is accountable for the prompt\'s live performance across all model versions — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — and is the first contact during incidents.',
          'Avoid having the same person serve as both Author and Approver. Self-approved prompts have a significantly higher incident rate. If your team is too small for three distinct roles, at minimum require a second person\'s sign-off before any prompt reaches production.',
        ],
        callouts: [
          { type: 'insight', label: '3-role model in practice', text: 'The Author-Reviewer-Approver separation mirrors software code review: the person who writes code cannot also approve their own pull request. The same principle applies to prompts.' },
        ],
      },
      review_gates: {
        title: 'Review Gates Every Prompt Must Pass Before Deployment',
        content: [
          '**A prompt must pass at least three gates before production: automated quality tests, peer review, and security scan.** Each gate has a binary outcome — pass or block. No exceptions.',
        ],
        items: [
          'Gate 1 — Automated tests: the prompt must pass your regression test suite (golden set + edge cases) with a pass rate ≥ 90%. Run with Braintrust or Promptfoo. Failures block deployment automatically.',
          'Gate 2 — Peer review: a Reviewer signs off on quality and compliance. The review checklist covers: task completeness, format compliance, safety constraints, and model-specific behavior (test on GPT-5.5 and Claude 4.6 Sonnet at minimum).',
          'Gate 3 — Security scan: check for injection vectors, jailbreak susceptibility, and sensitive data leakage. For internal-only prompts with no user input, this gate can be simplified to a checklist review. For prompts that process user input, run automated injection tests.',
        ],
      },
      review_gates_part2: {
        content: [
          'For regulated domains, add a Gate 4 — Compliance review. A qualified domain expert confirms the prompt output meets applicable standards (HIPAA, GDPR, SOC 2, etc.). This gate cannot be automated.',
          'Document each gate outcome in the prompt\'s change log. If Gate 2 is blocked and then re-submitted, the reason for the original block and the resolution must be recorded. Auditors look for this trail.',
        ],
        callouts: [
          { type: 'tip', label: 'Automate Gate 1', text: 'Gate 1 (automated tests) should run on every commit, not just before deployment. Catching regressions at commit time costs minutes to fix; catching them at deployment costs hours.' },
        ],
      },
      rollback: {
        title: 'How to Roll Back a Failing Prompt in Production',
        content: [
          '**A prompt rollback should take under 5 minutes if version control is configured in advance.** The rollback procedure has four steps: detect (monitoring alert or user report), identify (which prompt version caused the regression), revert (point deployment config to previous version tag), and confirm (verify output quality restores).',
          'Set up rollback before you need it, not during an incident. The minimum viable setup:',
        ],
        items: [
          'Every deployed prompt has a version tag: v1.0, v1.1, etc.',
          'Deployment config references the tag, not the file directly',
          'Previous 3 versions are retained and deployable without additional testing',
          'The on-call person has write access to deployment config without manager approval',
        ],
      },
      rollback_part2: {
        content: [
          'After rollback, treat the incident as a post-mortem. Document: what changed, what failed, how long until detection, how long until resolution, and what gate should have caught it. Update your review checklist to prevent recurrence.',
          'Most prompt incidents are detected via user complaints rather than automated monitoring. Add output quality monitoring to your production stack: Braintrust supports live evaluation against golden outputs and will alert when quality drops below threshold.',
        ],
      },
      audit_trail: {
        title: 'Audit Trail: What to Log and Why',
        content: [
          '**An audit trail for prompts must capture: who changed the prompt, what changed, when, why (change rationale), and which review gates it passed.** This is the minimum required by NIST AI RMF and EU AI Act for high-risk AI systems.',
          'Store the audit trail in the same version control system as the prompt. Git commit messages work for small teams. PromptHub provides a structured audit log with reviewer signatures, test results, and deployment timestamps.',
          'Use a consistent commit format:',
        ],
        items: [
          'Author: [name]',
          'Reviewer: [name] — approved/rejected',
          'Change: [one-line summary of what changed]',
          'Reason: [why the change was made]',
          'Test results: [pass rate, number of tests, tool used]',
          'Version: [new version tag]',
        ],
      },
      tools: {
        title: 'Tools for Prompt Governance',
        content: [
          '**The minimum viable governance stack is Git + a test runner.** PromptHub, Braintrust, and Vellum each add structure on top of that baseline.',
        ],
        items: [
          'Git: version control for prompt files. Free. Works for any team size. Requires discipline to use consistently.',
          'PromptHub: purpose-built prompt management with version history, reviewer workflows, and deployment tracking. $0–$49/month depending on team size.',
          'Braintrust: evaluation platform with CI/CD integration. Runs automated quality tests on every PR. Best for teams that already run automated prompt tests.',
          'Vellum: production prompt deployment with traffic management, A/B testing, and live evaluation. Best for high-traffic applications where partial rollouts reduce incident blast radius.',
          '[PromptQuorum](/features): multi-model testing to confirm a prompt works across GPT-5.5, Claude 4.6 Sonnet, and Gemini 2.5 Pro before deployment. Use during Gate 2 peer review.',
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is prompt governance?', a: 'Prompt governance is the system of roles, review processes, and deployment rules that controls which prompts reach production and how they are monitored. It includes who can author prompts, who must approve them, what tests must pass before deployment, and what happens when a prompt fails in production.' },
          { q: 'Why does prompt governance matter in production?', a: 'Prompts fail silently — no error log, no exception, no alert. Output quality degrades without any visible signal. Governance adds visibility: every change is tracked, every version is reviewable, every deployment can be rolled back.' },
          { q: 'What roles are needed for prompt governance?', a: 'Three roles cover most teams: Author (writes the prompt, runs initial tests), Reviewer (checks quality and compliance), and Approver (approves deployment to production). Large teams add a Prompt Owner role.' },
          { q: 'How do I roll back a bad prompt in production?', a: 'Store every deployed prompt with a version tag in Git or PromptHub. When a regression is detected, revert to the previous version in your deployment config and redeploy. This takes under 5 minutes if version control is set up in advance.' },
          { q: 'Does the NIST AI Risk Management Framework require prompt governance?', a: 'The NIST AI RMF (2023) recommends governance controls including traceability, risk assessment before deployment, and incident response. Prompt version control and review gates address all three.' },
          { q: 'Does the EU AI Act require prompt governance?', a: 'The EU AI Act (effective 2026) requires human oversight, documentation, and traceability for high-risk AI systems. Prompts in high-risk categories (medical, legal, hiring, credit) must have documented change control. Version control, review gates, and audit trails directly satisfy the traceability requirement.' },
          { q: 'How is prompt governance different from model governance?', a: 'Model governance covers model selection, training, bias testing, and deployment policies. Prompt governance covers what instructions are given to a deployed model. Both are required in regulated environments; they are complementary but distinct.' },
          { q: 'What should an audit trail for prompts contain?', a: 'A prompt audit trail must record: prompt text at each version, who changed it, when, why, which tests it passed, who approved deployment, and any incidents attributed to it. The trail must be queryable — if an auditor asks what prompt was live at a specific time, you should be able to answer in under 5 minutes.' },
        ],
      },
      related_reading: {
        title: 'Related Reading',
        items: [
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Audit and Regression Testing', url: '/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Prompt Security Tools: Injection Testing', url: '/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Team-Steuerung',
    title: 'Prompt-Governance in Produktion: Rollen, Gates & Deployment (2026)',
    seoTitle: 'Prompt-Governance in Produktion: Rollen & Review-Gates',
    intro: 'Prompt-Governance ist das System aus Rollen, Reviewprozessen und Deployment-Regeln, das kontrolliert, welche Prompts in die Produktion gelangen und wie sie überwacht werden. Ohne Governance werden Prompt-Änderungen nicht nachverfolgt, nicht getestet und lassen sich nicht zurückrollen.',
    metaDescription: 'Prompt-Governance mit 3 Rollen (Autor, Reviewer, Genehmiger), 3 Review-Gates, Rollback-Verfahren, Audit-Trail. NIST AI RMF- und EU AI Act-konform.',
    ogDescription: 'Prompt-Governance in Produktion: 3-Rollen-Modell, automatisierte Test-Gates, Rollback in unter 5 Minuten und vollständiger Audit-Trail. Modellübergreifend testen mit PromptQuorum.',
    twitterDescription: 'Prompts scheitern lautlos. Governance ist der einzige Sichtbarkeitsmechanismus. 3 Rollen, 3 Gates, Rollback in 5 Minuten, vollständiger Audit-Trail.',
    publishDate: '2026-05-02',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'Prompt-Governance',
    leadAnswerBlock: '**Prompt-Governance ist das System aus Rollen, Review-Gates und Deployment-Regeln, das kontrolliert, welche Prompts in der Produktion live sind.** Ohne Governance ändern sich Prompts lautlos — kein Genehmigungsprotokoll, kein Rollback-Pfad, keine Reaktion bei Qualitätsabfällen.',
    quickFacts: [
      '3-Rollen-Eigentümermodell: Autor, Reviewer, Genehmiger',
      'Rollback dauert mit vorab konfigurierter Versionskontrolle unter 5 Minuten',
      'Drei Pflicht-Gates: automatisierte Regressionstests (≥90% Bestehensquote), Peer-Review, Sicherheitsscan',
      'Audit-Trail muss Wer, Was, Wann, Warum und Gate-Ergebnisse erfassen',
      'EU AI Act (ab 2026) fordert Rückverfolgbarkeit für Hochrisiko-AI-Prompts',
      'Minimaler Stack: Git + Braintrust oder Promptfoo',
    ],
    toc: [
      { label: 'Was Prompt-Governance ist und warum sie wichtig ist', anchor: 'what_is_governance' },
      { label: 'Das 3-Rollen-Eigentümermodell', anchor: 'ownership_model' },
      { label: 'Review-Gates vor dem Deployment', anchor: 'review_gates' },
      { label: 'Rollback eines fehlerhaften Prompts', anchor: 'rollback' },
      { label: 'Audit-Trail: Was protokolliert werden muss', anchor: 'audit_trail' },
      { label: 'Tools für Prompt-Governance', anchor: 'tools' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Weiterführende Artikel', anchor: 'related_reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/de/prompt-engineering/prompt-governance-production',
      inLanguage: 'de',
      headline: 'Prompt-Governance in Produktion: Rollen, Gates & Deployment (2026)',
      description: 'Prompt-Governance mit 3 Rollen, 3 Review-Gates, Rollback-Verfahren und Audit-Trail einrichten. NIST AI RMF und EU AI Act konform.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt-Governance', 'Prompt-Management', 'Produktions-Prompts', 'KI-Governance', 'Prompt-Deployment'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Prompt-Governance kontrolliert, welche Prompts die Produktion erreichen — durch 3 Rollen (Autor, Reviewer, Genehmiger), 3 Pflicht-Review-Gates und Rollback-Verfahren. Prompts scheitern lautlos; Governance ist der einzige Sichtbarkeitsmechanismus. Richten Sie Versionskontrolle und Rollback ein, bevor Sie sie brauchen: Mit Vorbereitung dauert ein Rollback unter 5 Minuten, ohne Vorbereitung Stunden.',
        ],
      },
      key_takeaways: {
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Prompt-Governance = Rollen (Autor, Reviewer, Genehmiger) + Review-Gates + Rollback-Verfahren',
          'Prompts scheitern lautlos — Governance ist der einzige Mechanismus für Sichtbarkeit vor und nach dem Deployment',
          'Mindestens drei Gates: automatisierte Regressionstests (≥ 90%), Peer-Review, Sicherheitsscan',
          'Rollback vor dem Bedarf einrichten: Versions-Tags, Deployment-Konfiguration mit Tag-Referenz, Bereitschaftszugang',
          'Audit-Trail muss Wer, Was, Wann, Warum und Gate-Ergebnisse erfassen',
        ],
      },
      what_is_governance: {
        title: 'Was Prompt-Governance ist und warum sie wichtig ist',
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt-Governance ist das System aus Rollen, Review-Gates und Deployment-Regeln, das kontrolliert, welche Prompts die Produktion erreichen und wie sie nach dem Go-live überwacht werden.' },
          { type: 'in-plain-terms', text: 'Ohne Governance sind Prompt-Änderungen unsichtbar — kein Protokoll darüber, wer was geändert hat, keine Möglichkeit zum Rollback und kein Alarm bei lautlosem Qualitätsabfall.' },
        ],
        content: [
          '**Prompt-Governance ist das System, das kontrolliert, welche Prompts in die Produktion gelangen, wer sie ändern darf und was bei einem Ausfall passiert.** Es umfasst drei Bereiche: Zugriffskontrolle (wer Prompts erstellen, reviewen und genehmigen darf), Deployment-Prozess (welche Tests vor dem Go-live bestanden werden müssen) und Incident Response (wie ein fehlerhafter Prompt erkannt, diagnostiziert und zurückgerollt wird).',
          'Governance ist keine Bürokratie um ihrer selbst willen. Sie existiert, weil Prompts lautlos scheitern. Wenn eine Prompt-Änderung die Ausgabequalität verschlechtert, gibt es kein Fehlerprotokoll und keinen Alert. Ohne Governance verbringen Teams oft Tage damit, Qualitätsregressionen zu diagnostizieren, die eine einzeilige Prompt-Änderung verursacht hat.',
          'Setzen Sie Governance ein, wenn Prompts nutzerorientierte Funktionen, regulierte Ausgaben (Recht, Medizin, Finanzen) oder hochvolumige automatisierte Workflows betreffen.',
        ],
        callouts: [
          { type: 'warning', label: 'Lautlose Ausfälle', text: 'Eine Prompt-Änderung, die die Qualität verschlechtert, erzeugt keinen Fehler, keine Ausnahme und keinen Alert. Das Problem wird erst durch Nutzerbeschwerden oder Monitoring entdeckt — beides nach dem Schaden.' },
        ],
      },
      ownership_model: {
        title: 'Das 3-Rollen-Eigentümermodell für Prompts',
        content: [
          '**Drei Rollen decken die Prompt-Governance für die meisten Teams ab: Autor, Reviewer und Genehmiger.** Jede Rolle hat eine eigene Verantwortung und einen eigenen Vetopunkt.',
        ],
        items: [
          'Autor: schreibt den Prompt, führt erste Qualitätstests durch, reicht zur Prüfung ein.',
          'Reviewer: prüft Qualität, Compliance und Sicherheit. In regulierten Bereichen muss der Reviewer Domänenexpertise haben.',
          'Genehmiger: genehmigt oder lehnt das Deployment in die Produktion ab. Hat unilaterale Befugnis, eine Veröffentlichung unabhängig vom Reviewer-Freigabe zu blockieren.',
        ],
      },
      review_gates: {
        title: 'Review-Gates, die jeder Prompt vor dem Deployment bestehen muss',
        content: [
          '**Ein Prompt muss mindestens drei Gates bestehen: automatisierte Qualitätstests, Peer-Review und Sicherheitsscan.** Jedes Gate hat ein binäres Ergebnis — bestanden oder blockiert.',
        ],
        items: [
          'Gate 1 — Automatisierte Tests: der Prompt muss die Regressionstestsuite mit einer Bestehensquote von ≥ 90% bestehen (Braintrust oder Promptfoo).',
          'Gate 2 — Peer-Review: ein Reviewer gibt die Qualität und Compliance frei. Mindestens auf GPT-5.5 und Claude 4.6 Sonnet testen.',
          'Gate 3 — Sicherheitsscan: auf Injection-Vektoren, Jailbreak-Anfälligkeit und sensible Datenlecks prüfen.',
        ],
        callouts: [
          { type: 'tip', label: 'Gate 1 automatisieren', text: 'Gate 1 (automatisierte Tests) sollte bei jedem Commit laufen, nicht nur vor dem Deployment. Regressionen zum Commit-Zeitpunkt zu erkennen kostet Minuten; sie beim Deployment zu erkennen kostet Stunden.' },
        ],
      },
      rollback: {
        title: 'How to Roll Back a Failing Prompt in Production',
        content: [
          '**A prompt rollback should take under 5 minutes if version control is configured in advance.** The rollback procedure has four steps: detect (monitoring alert or user report), identify (which prompt version caused the regression), revert (point deployment config to previous version tag), and confirm (verify output quality restores).',
          'Set up rollback before you need it, not during an incident. The minimum viable setup:',
        ],
        items: [
          'Every deployed prompt has a version tag: v1.0, v1.1, etc.',
          'Deployment config references the tag, not the file directly',
          'Previous 3 versions are retained and deployable without additional testing',
          'The on-call person has write access to deployment config without manager approval',
        ],
      },
      rollback_part2: {
        content: [
          'Nach dem Rollback sollte der Vorfall als Post-Mortem behandelt werden. Dokumentieren Sie: Was geändert wurde, was fehlschlug, wie lange bis zur Erkennung, wie lange bis zur Behebung und welches Gate das Problem hätte abfangen sollen.',
        ],
      },
      audit_trail: {
        title: 'Audit-Trail: Was protokolliert werden muss und warum',
        content: [
          '**Ein Audit-Trail für Prompts muss erfassen: Wer den Prompt geändert hat, was geändert wurde, wann, warum (Änderungsbegründung) und welche Review-Gates bestanden wurden.** Dies ist das Minimum, das NIST AI RMF und EU AI Act für Hochrisiko-KI-Systeme fordern.',
          'Speichern Sie den Audit-Trail im selben Versionskontrollsystem wie den Prompt. Git-Commit-Nachrichten funktionieren für kleine Teams. PromptHub bietet ein strukturiertes Audit-Log mit Reviewer-Signaturen, Testergebnissen und Deployment-Zeitstempeln.',
        ],
        items: [
          'Autor: [Name]',
          'Reviewer: [Name] — genehmigt/abgelehnt',
          'Änderung: [einzeilige Zusammenfassung der Änderung]',
          'Grund: [warum die Änderung vorgenommen wurde]',
          'Testergebnisse: [Bestehensquote, Anzahl der Tests, verwendetes Tool]',
          'Version: [neuer Versions-Tag]',
        ],
      },
      tools: {
        title: 'Tools für Prompt-Governance',
        content: [
          '**Der minimale Governance-Stack ist Git + ein Test-Runner.** PromptHub, Braintrust und Vellum fügen jeweils Struktur über dieser Basis hinzu.',
        ],
        items: [
          'Git: Versionskontrolle für Prompt-Dateien. Kostenlos. Funktioniert für jede Teamgröße.',
          'PromptHub: Prompt-Management mit Versionsverlauf, Reviewer-Workflows und Deployment-Tracking. 0–49 $/Monat.',
          'Braintrust: Evaluierungsplattform mit CI/CD-Integration. Führt automatisierte Qualitätstests bei jedem PR durch.',
          'Vellum: Produktions-Prompt-Deployment mit Traffic-Management, A/B-Tests und Live-Evaluierung.',
          'PromptQuorum: Multi-Modell-Tests zur Bestätigung, dass ein Prompt über GPT-5.5, Claude 4.6 Sonnet und Gemini 2.5 Pro funktioniert.',
        ],
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist Prompt-Governance?', a: 'Prompt-Governance ist das System aus Rollen, Reviewprozessen und Deployment-Regeln, das kontrolliert, welche Prompts in die Produktion gelangen und wie sie überwacht werden.' },
          { q: 'Warum ist Prompt-Governance wichtig?', a: 'Prompts scheitern lautlos. Governance fügt Sichtbarkeit hinzu: Jede Änderung wird verfolgt, jede Version ist überprüfbar, jedes Deployment kann zurückgerollt werden.' },
          { q: 'Welche Rollen werden benötigt?', a: 'Drei Rollen: Autor, Reviewer und Genehmiger. Große Teams fügen eine Prompt-Owner-Rolle hinzu.' },
          { q: 'Wie führe ich ein Rollback durch?', a: 'Speichern Sie jeden deployten Prompt mit einem Versions-Tag. Bei Regression: Deployment-Konfiguration auf den vorherigen Tag zurücksetzen und neu deployen. Mit Vorbereitung unter 5 Minuten.' },
          { q: 'Fordert der EU AI Act Prompt-Governance?', a: 'Ja. Der EU AI Act (ab 2026) fordert Rückverfolgbarkeit für Hochrisiko-KI-Systeme. Versionskontrolle, Review-Gates und Audit-Trails erfüllen diese Anforderung direkt.' },
          { q: 'Wie unterscheidet sich Prompt-Governance von Modell-Governance?', a: 'Modell-Governance umfasst Modellauswahl und Training. Prompt-Governance umfasst, welche Anweisungen einem deployten Modell gegeben werden. Beide sind komplementär.' },
          { q: 'Was muss ein Audit-Trail enthalten?', a: 'Prompt-Text jeder Version, wer geändert hat, wann, warum, welche Tests bestanden wurden, wer genehmigt hat und etwaige Vorfälle.' },
        ],
      },
      related_reading: {
        title: 'Weiterführende Artikel',
        items: [
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Audit and Regression Testing', url: '/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Prompt Security Tools: Injection Testing', url: '/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  es: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'Governance de prompts en producción: roles, gates de revisión y reglas de despliegue',
    seoTitle: 'Gobernanza de prompts en producción: roles y revisión',
    intro: 'La governance de prompts es el sistema de roles, procesos de revisión y reglas de despliegue que controla qué prompts llegan a producción y cómo se monitorizan una vez en vivo. Sin ella, los cambios de prompts no se rastrean, no se prueban y no pueden revertirse.',
    metaDescription: 'Configura la gobernanza de prompts con 3 roles (Autor, Revisor, Aprobador), 3 gates de revisión, rollback y auditoría. Listo para NIST AI RMF y EU AI Act.',
    ogDescription: 'Governance de prompts en producción: modelo de 3 roles, gates de pruebas automatizadas, rollback en menos de 5 minutos y traza de auditoría completa. Prueba en múltiples modelos con PromptQuorum.',
    twitterDescription: 'Los prompts fallan en silencio. La governance es el único mecanismo de visibilidad. 3 roles, 3 gates, rollback en 5 minutos, traza de auditoría completa.',
    publishDate: '2026-05-02',
    readTime: '14 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'Prompt Governance',
    leadAnswerBlock: '**La governance de prompts es el conjunto de roles, gates de revisión y reglas de despliegue que controla qué prompts se ponen en vivo en producción.** Sin governance, los prompts cambian silenciosamente — sin traza de aprobación, sin ruta de rollback, sin respuesta a incidentes cuando las salidas se degradan.',
    quickFacts: [
      'Modelo de propiedad con 3 roles: Autor, Revisor, Aprobador',
      'El rollback tarda menos de 5 minutos con control de versiones configurado de antemano',
      'Tres gates obligatorios: pruebas de regresión automatizadas (≥90% de tasa de éxito), revisión por pares, escaneo de seguridad',
      'La traza de auditoría debe registrar quién, qué, cuándo, por qué y los resultados de los gates',
      'El EU AI Act (vigente en 2026) requiere trazabilidad para prompts de IA de alto riesgo',
      'Stack mínimo viable: Git + Braintrust o Promptfoo',
    ],
    toc: [
      { label: 'Qué es la governance de prompts y por qué importa', anchor: 'what_is_governance' },
      { label: 'El modelo de propiedad con 3 roles', anchor: 'ownership_model' },
      { label: 'Gates de revisión antes del despliegue', anchor: 'review_gates' },
      { label: 'Cómo revertir un prompt fallido', anchor: 'rollback' },
      { label: 'Traza de auditoría: qué registrar', anchor: 'audit_trail' },
      { label: 'Herramientas para la governance de prompts', anchor: 'tools' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Lectura relacionada', anchor: 'related_reading' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/es/prompt-engineering/prompt-governance-production',
      inLanguage: 'es',
      headline: 'Governance de prompts en producción: roles, gates de revisión y reglas de despliegue',
      description: 'Configura la governance de prompts con 3 roles, 3 gates de revisión, procedimientos de rollback y trazas de auditoría. Conforme con NIST AI RMF y EU AI Act.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['governance de prompts', 'gestión de prompts', 'prompts de producción', 'governance de IA', 'despliegue de prompts'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'La governance de prompts controla qué prompts llegan a producción mediante 3 roles (Autor, Revisor, Aprobador), 3 gates de revisión obligatorios y procedimientos de rollback. Los prompts fallan silenciosamente — la governance es el único mecanismo que añade visibilidad. Configura el control de versiones y el rollback antes de necesitarlos: con preparación el rollback tarda menos de 5 minutos, sin preparación puede tardar horas.',
        ],
      },
      key_takeaways: {
        title: 'Puntos clave',
        items: [
          'Governance de prompts = roles (Autor, Revisor, Aprobador) + gates de revisión (pruebas automatizadas, revisión por pares, escaneo de seguridad) + procedimiento de rollback',
          'Los prompts fallan silenciosamente — la governance es el único mecanismo que proporciona visibilidad antes y después del despliegue',
          'Tres gates mínimos: pruebas de regresión automatizadas (≥90% de tasa de éxito), revisión por pares, escaneo de seguridad',
          'Configura el rollback antes de necesitarlo: etiquetas de versión, config de despliegue apuntando a etiquetas, acceso de guardia',
          'La traza de auditoría debe capturar quién, qué, cuándo, por qué y los resultados de los gates — requerido por NIST AI RMF para sistemas de alto riesgo',
          'Stack mínimo viable: Git + Braintrust o Promptfoo. Añade PromptHub o Vellum a medida que crecen el tamaño del equipo y el tráfico',
        ],
      },
      what_is_governance: {
        title: 'Qué es la governance de prompts y por qué importa',
        snippets: [
          { type: 'in-one-sentence', text: 'La governance de prompts es el sistema de roles, gates de revisión y reglas de despliegue que controla qué prompts llegan a producción y cómo se monitorizan una vez en vivo.' },
          { type: 'in-plain-terms', text: 'Sin governance, los cambios de prompts son invisibles — sin registro de quién cambió qué, sin forma de revertir cuando algo se rompe y sin alerta cuando la calidad de salida se degrada silenciosamente.' },
        ],
        content: [
          '**La governance de prompts es el sistema que controla qué prompts llegan a producción, quién puede cambiarlos y qué sucede cuando fallan.** Cubre tres áreas: control de acceso (quién puede crear, revisar y aprobar prompts), proceso de despliegue (qué pruebas deben superarse antes de que un prompt salga en vivo) y respuesta a incidentes (cómo detectar, diagnosticar y revertir un prompt fallido).',
          'La governance no es burocracia por sí misma. Existe porque los prompts fallan silenciosamente. Cuando un cambio de prompt degrada la calidad de salida, no hay log de error, no hay excepción y no hay alerta — las salidas simplemente empeoran. Sin governance, los equipos a menudo pasan días diagnosticando regresiones de calidad que causó un cambio de una línea en el prompt.',
          'Usa governance siempre que los prompts afecten funcionalidades orientadas al usuario, salidas reguladas (legal, médico, financiero) o flujos de trabajo automatizados de alto volumen. Omite la governance formal para prompts internos de bajo riesgo y de un solo uso.',
        ],
        callouts: [
          { type: 'warning', label: 'Fallos silenciosos', text: 'Un cambio de prompt que degrada la calidad no produce error, excepción ni alerta. Solo descubres el problema mediante quejas de usuarios o monitorización — ambas después de que el daño esté hecho.' },
        ],
      },
      ownership_model: {
        title: '¿Quién posee los prompts? El modelo de propiedad con 3 roles',
        content: [
          '**Tres roles cubren la governance de prompts para la mayoría de los equipos: Autor, Revisor y Aprobador.** Cada rol tiene una responsabilidad distinta y un punto de veto distinto.',
        ],
        items: [
          'Autor: escribe el prompt, ejecuta pruebas de calidad iniciales, lo envía para revisión. Responsable de la corrección funcional.',
          'Revisor: comprueba calidad, cumplimiento y seguridad. Para dominios regulados (legal, médico, financiero), el revisor debe tener experiencia en el dominio. Para prompts sensibles a la seguridad, la revisión debe incluir una comprobación de red team.',
          'Aprobador: aprueba o rechaza el despliegue en producción. Tiene autoridad unilateral para bloquear un lanzamiento independientemente de la aprobación del revisor.',
        ],
      },
      ownership_model_part2: {
        content: [
          'Añade un rol de Propietario de Prompt para prompts de producción de alto tráfico. El Propietario del Prompt es responsable del rendimiento en vivo del prompt en todas las versiones del modelo — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — y es el primer contacto durante incidentes.',
          'Evita que la misma persona actúe como Autor y Aprobador. Los prompts auto-aprobados tienen una tasa de incidentes significativamente más alta. Si tu equipo es demasiado pequeño para tres roles distintos, requiere como mínimo la firma de una segunda persona antes de que cualquier prompt llegue a producción.',
        ],
        callouts: [
          { type: 'insight', label: 'El modelo de 3 roles en la práctica', text: 'La separación Autor-Revisor-Aprobador refleja la revisión de código de software: quien escribe el código no puede aprobar su propio pull request. El mismo principio se aplica a los prompts.' },
        ],
      },
      review_gates: {
        title: 'Gates de revisión que todo prompt debe superar antes del despliegue',
        content: [
          '**Un prompt debe superar al menos tres gates antes de producción: pruebas de calidad automatizadas, revisión por pares y escaneo de seguridad.** Cada gate tiene un resultado binario — pasar o bloquear. Sin excepciones.',
        ],
        items: [
          'Gate 1 — Pruebas automatizadas: el prompt debe superar tu suite de pruebas de regresión (golden set + casos límite) con una tasa de éxito ≥ 90%. Ejecuta con Braintrust o Promptfoo. Los fallos bloquean el despliegue automáticamente.',
          'Gate 2 — Revisión por pares: un Revisor firma la calidad y el cumplimiento. La lista de verificación cubre: completitud de la tarea, cumplimiento del formato, restricciones de seguridad y comportamiento específico del modelo (prueba en GPT-5.5 y Claude 4.6 Sonnet como mínimo).',
          'Gate 3 — Escaneo de seguridad: comprueba vectores de injection, susceptibilidad a jailbreak y filtración de datos sensibles. Para prompts internos sin entrada de usuario, este gate puede simplificarse a una revisión de lista de verificación. Para prompts que procesan entrada de usuario, ejecuta pruebas de injection automatizadas.',
        ],
      },
      review_gates_part2: {
        content: [
          'Para dominios regulados, añade un Gate 4 — Revisión de cumplimiento. Un experto de dominio cualificado confirma que la salida del prompt cumple los estándares aplicables (HIPAA, GDPR, SOC 2, etc.). Este gate no puede automatizarse.',
          'Documenta cada resultado de gate en el log de cambios del prompt. Si el Gate 2 se bloquea y luego se reenvía, la razón del bloqueo original y la resolución deben registrarse. Los auditores buscan esta traza.',
        ],
        callouts: [
          { type: 'tip', label: 'Automatiza el Gate 1', text: 'El Gate 1 (pruebas automatizadas) debe ejecutarse en cada commit, no solo antes del despliegue. Detectar regresiones en el momento del commit cuesta minutos de corrección; detectarlas en el despliegue cuesta horas.' },
        ],
      },
      rollback: {
        title: 'Cómo revertir un prompt fallido en producción',
        content: [
          '**Un rollback de prompt debería tardar menos de 5 minutos si el control de versiones está configurado de antemano.** El procedimiento de rollback tiene cuatro pasos: detectar (alerta de monitorización o reporte de usuario), identificar (qué versión del prompt causó la regresión), revertir (apuntar la config de despliegue a la etiqueta de versión anterior) y confirmar (verificar que la calidad de salida se restaura).',
          'Configura el rollback antes de necesitarlo, no durante un incidente. La configuración mínima viable:',
        ],
        items: [
          'Todo prompt desplegado tiene una etiqueta de versión: v1.0, v1.1, etc.',
          'La config de despliegue hace referencia a la etiqueta, no al archivo directamente',
          'Las 3 versiones anteriores se retienen y pueden desplegarse sin pruebas adicionales',
          'La persona de guardia tiene acceso de escritura a la config de despliegue sin aprobación de gestión',
        ],
      },
      rollback_part2: {
        content: [
          'Tras el rollback, trata el incidente como un post-mortem. Documenta: qué cambió, qué falló, cuánto tiempo hasta la detección, cuánto tiempo hasta la resolución y qué gate debería haberlo detectado. Actualiza tu lista de verificación de revisión para prevenir recurrencias.',
          'La mayoría de los incidentes de prompts se detectan mediante quejas de usuarios en lugar de monitorización automatizada. Añade monitorización de calidad de salida a tu stack de producción: Braintrust soporta evaluación en vivo contra salidas golden y alertará cuando la calidad caiga por debajo del umbral.',
        ],
      },
      audit_trail: {
        title: 'Traza de auditoría: qué registrar y por qué',
        content: [
          '**Una traza de auditoría para prompts debe capturar: quién cambió el prompt, qué cambió, cuándo, por qué (justificación del cambio) y qué gates de revisión superó.** Este es el mínimo requerido por NIST AI RMF y el EU AI Act para sistemas de IA de alto riesgo.',
          'Almacena la traza de auditoría en el mismo sistema de control de versiones que el prompt. Los mensajes de commit de Git funcionan para equipos pequeños. PromptHub proporciona un log de auditoría estructurado con firmas de revisores, resultados de pruebas y timestamps de despliegue.',
          'Usa un formato de commit consistente:',
        ],
        items: [
          'Autor: [nombre]',
          'Revisor: [nombre] — aprobado/rechazado',
          'Cambio: [resumen en una línea de qué cambió]',
          'Razón: [por qué se hizo el cambio]',
          'Resultados de pruebas: [tasa de éxito, número de pruebas, herramienta utilizada]',
          'Versión: [nueva etiqueta de versión]',
        ],
      },
      tools: {
        title: 'Herramientas para la governance de prompts',
        content: [
          '**El stack mínimo viable de governance es Git + un test runner.** PromptHub, Braintrust y Vellum añaden estructura sobre esa base.',
        ],
        items: [
          'Git: control de versiones para archivos de prompts. Gratuito. Funciona para cualquier tamaño de equipo. Requiere disciplina para usarse consistentemente.',
          'PromptHub: gestión de prompts con historial de versiones, flujos de trabajo de revisores y seguimiento de despliegues. $0–$49/mes según el tamaño del equipo.',
          'Braintrust: plataforma de evaluación con integración CI/CD. Ejecuta pruebas de calidad automatizadas en cada PR. Mejor para equipos que ya ejecutan pruebas de prompts automatizadas.',
          'Vellum: despliegue de prompts en producción con gestión de tráfico, pruebas A/B y evaluación en vivo. Mejor para aplicaciones de alto tráfico donde los lanzamientos parciales reducen el radio de impacto de incidentes.',
          '[PromptQuorum](/features): pruebas multi-modelo para confirmar que un prompt funciona en GPT-5.5, Claude 4.6 Sonnet y Gemini 2.5 Pro antes del despliegue. Úsalo durante la revisión por pares del Gate 2.',
        ],
      },
      faq: {
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es la governance de prompts?', a: 'La governance de prompts es el sistema de roles, procesos de revisión y reglas de despliegue que controla qué prompts llegan a producción y cómo se monitorizan. Incluye quién puede crear prompts, quién debe aprobarlos, qué pruebas deben superarse antes del despliegue y qué sucede cuando un prompt falla en producción.' },
          { q: '¿Por qué importa la governance de prompts en producción?', a: 'Los prompts fallan silenciosamente — sin log de error, sin excepción, sin alerta. La calidad de salida se degrada sin señal visible. La governance añade visibilidad: cada cambio se rastrea, cada versión es revisable, cada despliegue puede revertirse.' },
          { q: '¿Qué roles se necesitan para la governance de prompts?', a: 'Tres roles cubren la mayoría de los equipos: Autor (escribe el prompt, ejecuta pruebas iniciales), Revisor (comprueba calidad y cumplimiento) y Aprobador (aprueba el despliegue en producción). Los equipos grandes añaden un rol de Propietario de Prompt.' },
          { q: '¿Cómo revierto un prompt defectuoso en producción?', a: 'Almacena cada prompt desplegado con una etiqueta de versión en Git o PromptHub. Cuando se detecta una regresión, revierte a la versión anterior en tu config de despliegue y redespliega. Esto tarda menos de 5 minutos si el control de versiones está configurado de antemano.' },
          { q: '¿El NIST AI Risk Management Framework requiere governance de prompts?', a: 'El NIST AI RMF (2023) recomienda controles de governance incluyendo trazabilidad, evaluación de riesgos antes del despliegue y respuesta a incidentes. El control de versiones de prompts y los gates de revisión abordan los tres.' },
          { q: '¿El EU AI Act requiere governance de prompts?', a: 'El EU AI Act (vigente en 2026) requiere supervisión humana, documentación y trazabilidad para sistemas de IA de alto riesgo. Los prompts en categorías de alto riesgo (médico, legal, contratación, crédito) deben tener control de cambios documentado. El control de versiones, los gates de revisión y las trazas de auditoría satisfacen directamente el requisito de trazabilidad.' },
          { q: '¿En qué se diferencia la governance de prompts de la governance de modelos?', a: 'La governance de modelos cubre la selección del modelo, el entrenamiento, las pruebas de sesgo y las políticas de despliegue. La governance de prompts cubre qué instrucciones se dan a un modelo desplegado. Ambas son necesarias en entornos regulados; son complementarias pero distintas.' },
          { q: '¿Qué debe contener una traza de auditoría para prompts?', a: 'Una traza de auditoría de prompts debe registrar: el texto del prompt en cada versión, quién lo cambió, cuándo, por qué, qué pruebas superó, quién aprobó el despliegue y cualquier incidente atribuido al mismo. La traza debe ser consultable — si un auditor pregunta qué prompt estaba en vivo en un momento específico, deberías poder responder en menos de 5 minutos.' },
        ],
      },
      related_reading: {
        title: 'Lectura relacionada',
        items: [
          { title: 'Flujo de revisión de prompts para equipos', url: '/es/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Control de versiones de prompts', url: '/es/prompt-engineering/prompt-version-control' },
          { title: 'Auditoría y pruebas de regresión de prompts', url: '/es/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Herramientas de seguridad de prompts: pruebas de injection', url: '/es/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Plantillas de documentación de prompts', url: '/es/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: 'Fuentes',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  pt: {
    theme: 'Team Governance',
    title: 'Governance de prompts em produção: papéis, gates de revisão e regras de implantação',
    seoTitle: 'Governança de prompts em produção: papéis e revisão',
    intro: 'A governance de prompts é o sistema de papéis, processos de revisão e regras de implantação que controla quais prompts chegam à produção e como são monitorados. Sem ela, as alterações de prompts não são rastreadas, não são testadas e não podem ser revertidas.',
    metaDescription: 'Configure a governança de prompts com 3 papéis (Autor, Revisor, Aprovador), 3 gates de revisão, rollback e auditoria. Pronto para NIST AI RMF, LGPD e EU AI Act.',
    ogDescription: 'Governance de prompts em produção: modelo de 3 papéis, gates de testes automatizados, rollback em menos de 5 minutos e trilha de auditoria completa. Teste em múltiplos modelos com PromptQuorum.',
    twitterDescription: 'Prompts falham silenciosamente. A governance é o único mecanismo de visibilidade. 3 papéis, 3 gates, rollback em 5 minutos, trilha de auditoria completa.',
    publishDate: '2026-05-02',
    readTime: '14 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'Prompt Governance',
    leadAnswerBlock: '**A governance de prompts é o conjunto de papéis, gates de revisão e regras de implantação que controla quais prompts entram em produção.** Sem governance, os prompts são alterados silenciosamente — sem rastro de aprovação, sem caminho de rollback, sem resposta a incidentes quando as saídas se degradam.',
    quickFacts: [
      'Modelo de propriedade com 3 papéis: Autor, Revisor, Aprovador',
      'O rollback leva menos de 5 minutos com controle de versões configurado antecipadamente',
      'Três gates obrigatórios: testes de regressão automatizados (≥90% de taxa de aprovação), revisão por pares, varredura de segurança',
      'A trilha de auditoria deve registrar quem, o quê, quando, por quê e os resultados dos gates',
      'O EU AI Act (em vigor em 2026) e a LGPD/ANPD exigem rastreabilidade para prompts de IA de alto risco',
      'Stack mínimo viável: Git + Braintrust ou Promptfoo',
    ],
    toc: [
      { label: 'O que é governance de prompts e por que importa', anchor: 'what_is_governance' },
      { label: 'O modelo de propriedade com 3 papéis', anchor: 'ownership_model' },
      { label: 'Gates de revisão antes da implantação', anchor: 'review_gates' },
      { label: 'Como reverter um prompt com falha', anchor: 'rollback' },
      { label: 'Trilha de auditoria: o que registrar', anchor: 'audit_trail' },
      { label: 'Ferramentas para governance de prompts', anchor: 'tools' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Leitura relacionada', anchor: 'related_reading' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/pt/pt/prompt-engineering/prompt-governance-production',
      inLanguage: 'pt-BR',
      headline: 'Governance de prompts em produção: papéis, gates de revisão e regras de implantação',
      description: 'Configure a governance de prompts com 3 papéis, 3 gates de revisão, procedimentos de rollback e trilhas de auditoria. Conforme com NIST AI RMF, LGPD e EU AI Act.',
      datePublished: '2026-05-02',
      keywords: ['governance de prompts', 'gerenciamento de prompts', 'prompts de produção', 'governance de IA', 'implantação de prompts'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'A governance de prompts controla quais prompts chegam à produção por meio de 3 papéis (Autor, Revisor, Aprovador), 3 gates de revisão obrigatórios e procedimentos de rollback. Prompts falham silenciosamente — a governance é o único mecanismo de visibilidade. Configure o controle de versões e o rollback antes de precisar deles: com preparação, o rollback leva menos de 5 minutos; sem preparação, pode levar horas.',
        ],
      },
      key_takeaways: {
        title: 'Pontos-chave',
        items: [
          'Governance de prompts = papéis (Autor, Revisor, Aprovador) + gates de revisão (testes automatizados, revisão por pares, varredura de segurança) + procedimento de rollback',
          'Prompts falham silenciosamente — a governance é o único mecanismo que fornece visibilidade antes e depois da implantação',
          'Três gates mínimos: testes de regressão automatizados (≥90% de taxa de aprovação), revisão por pares, varredura de segurança',
          'Configure o rollback antes de precisar: etiquetas de versão, configuração de implantação apontando para etiquetas, acesso de plantão',
          'A trilha de auditoria deve capturar quem, o quê, quando, por quê e os resultados dos gates — exigido pelo NIST AI RMF e pela LGPD/ANPD para sistemas de alto risco',
          'Stack mínimo viável: Git + Braintrust ou Promptfoo. Adicione PromptHub ou Vellum conforme o tamanho da equipe e o tráfego crescem',
        ],
      },
      what_is_governance: {
        title: 'O que é governance de prompts e por que importa',
        snippets: [
          { type: 'in-one-sentence', text: 'A governance de prompts é o sistema de papéis, gates de revisão e regras de implantação que controla quais prompts chegam à produção e como são monitorados uma vez em produção.' },
          { type: 'in-plain-terms', text: 'Sem governance, as alterações de prompts são invisíveis — sem registro de quem mudou o quê, sem forma de reverter quando algo quebra e sem alerta quando a qualidade da saída se degrada silenciosamente.' },
        ],
        content: [
          '**A governance de prompts é o sistema que controla quais prompts chegam à produção, quem pode alterá-los e o que acontece quando falham.** Cobre três áreas: controle de acesso (quem pode criar, revisar e aprovar prompts), processo de implantação (quais testes devem ser aprovados antes de um prompt entrar em produção) e resposta a incidentes (como detectar, diagnosticar e reverter um prompt com falha).',
          'A governance não é burocracia por si só. Existe porque prompts falham silenciosamente. Quando uma alteração de prompt degrada a qualidade da saída, não há log de erro, não há exceção e não há alerta — as saídas simplesmente pioram. Sem governance, as equipes frequentemente passam dias diagnosticando regressões de qualidade causadas por uma alteração de uma linha no prompt.',
          'Use governance sempre que prompts afetarem funcionalidades voltadas ao usuário, saídas regulamentadas (jurídico, médico, financeiro) ou fluxos de trabalho automatizados de alto volume. Omita a governance formal para prompts internos de baixo risco e uso único.',
        ],
        callouts: [
          { type: 'warning', label: 'Falhas silenciosas', text: 'Uma alteração de prompt que degrada a qualidade não produz erro, exceção nem alerta. O problema só é descoberto por meio de reclamações de usuários ou monitoramento — ambos depois que o dano já ocorreu.' },
        ],
      },
      ownership_model: {
        title: 'Quem possui os prompts? O modelo de propriedade com 3 papéis',
        content: [
          '**Três papéis cobrem a governance de prompts para a maioria das equipes: Autor, Revisor e Aprovador.** Cada papel tem uma responsabilidade distinta e um ponto de veto distinto.',
        ],
        items: [
          'Autor: escreve o prompt, executa testes de qualidade iniciais, envia para revisão. Responsável pela correção funcional.',
          'Revisor: verifica qualidade, conformidade e segurança. Para domínios regulamentados (jurídico, médico, financeiro), o revisor deve ter expertise no domínio. Para prompts sensíveis à segurança, a revisão deve incluir uma verificação de red team.',
          'Aprovador: aprova ou rejeita a implantação em produção. Tem autoridade unilateral para bloquear um lançamento independentemente da aprovação do revisor.',
        ],
      },
      ownership_model_part2: {
        content: [
          'Adicione um papel de Proprietário de Prompt para prompts de produção de alto tráfego. O Proprietário do Prompt é responsável pelo desempenho em produção do prompt em todas as versões do modelo — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — e é o primeiro contato durante incidentes.',
          'Evite que a mesma pessoa atue como Autor e Aprovador. Prompts auto-aprovados têm uma taxa de incidentes significativamente mais alta. Se sua equipe é muito pequena para três papéis distintos, exija no mínimo a assinatura de uma segunda pessoa antes que qualquer prompt chegue à produção.',
        ],
        callouts: [
          { type: 'insight', label: 'O modelo de 3 papéis na prática', text: 'A separação Autor-Revisor-Aprovador reflete a revisão de código de software: quem escreve o código não pode aprovar seu próprio pull request. O mesmo princípio se aplica aos prompts.' },
        ],
      },
      review_gates: {
        title: 'Gates de revisão que todo prompt deve passar antes da implantação',
        content: [
          '**Um prompt deve passar por pelo menos três gates antes da produção: testes de qualidade automatizados, revisão por pares e varredura de segurança.** Cada gate tem um resultado binário — passar ou bloquear. Sem exceções.',
        ],
        items: [
          'Gate 1 — Testes automatizados: o prompt deve passar em seu conjunto de testes de regressão (golden set + casos extremos) com uma taxa de aprovação ≥ 90%. Execute com Braintrust ou Promptfoo. As falhas bloqueiam a implantação automaticamente.',
          'Gate 2 — Revisão por pares: um Revisor assina a qualidade e a conformidade. A lista de verificação cobre: completude da tarefa, conformidade de formato, restrições de segurança e comportamento específico do modelo (teste no GPT-5.5 e Claude 4.6 Sonnet no mínimo).',
          'Gate 3 — Varredura de segurança: verifique vetores de injection, suscetibilidade a jailbreak e vazamento de dados sensíveis. Para prompts internos sem entrada do usuário, este gate pode ser simplificado para uma revisão de lista de verificação. Para prompts que processam entrada do usuário, execute testes de injection automatizados.',
        ],
      },
      review_gates_part2: {
        content: [
          'Para domínios regulamentados, adicione um Gate 4 — Revisão de conformidade. Um especialista de domínio qualificado confirma que a saída do prompt atende aos padrões aplicáveis (LGPD, HIPAA, SOC 2, etc.). Este gate não pode ser automatizado.',
          'Documente cada resultado de gate no log de alterações do prompt. Se o Gate 2 for bloqueado e depois reenviado, o motivo do bloqueio original e a resolução devem ser registrados. Os auditores procuram essa trilha.',
        ],
        callouts: [
          { type: 'tip', label: 'Automatize o Gate 1', text: 'O Gate 1 (testes automatizados) deve ser executado a cada commit, não apenas antes da implantação. Detectar regressões no momento do commit custa minutos de correção; detectá-las na implantação custa horas.' },
        ],
      },
      rollback: {
        title: 'Como reverter um prompt com falha em produção',
        content: [
          '**Um rollback de prompt deve levar menos de 5 minutos se o controle de versões estiver configurado antecipadamente.** O procedimento de rollback tem quatro etapas: detectar (alerta de monitoramento ou relato do usuário), identificar (qual versão do prompt causou a regressão), reverter (apontar a configuração de implantação para a etiqueta de versão anterior) e confirmar (verificar que a qualidade da saída é restaurada).',
          'Configure o rollback antes de precisar dele, não durante um incidente. A configuração mínima viável:',
        ],
        items: [
          'Todo prompt implantado tem uma etiqueta de versão: v1.0, v1.1, etc.',
          'A configuração de implantação referencia a etiqueta, não o arquivo diretamente',
          'As 3 versões anteriores são retidas e podem ser implantadas sem testes adicionais',
          'A pessoa de plantão tem acesso de escrita à configuração de implantação sem aprovação gerencial',
        ],
      },
      rollback_part2: {
        content: [
          'Após o rollback, trate o incidente como um post-mortem. Documente: o que foi alterado, o que falhou, quanto tempo até a detecção, quanto tempo até a resolução e qual gate deveria ter capturado o problema. Atualize sua lista de verificação de revisão para prevenir recorrências.',
          'A maioria dos incidentes de prompts é detectada por reclamações de usuários em vez de monitoramento automatizado. Adicione monitoramento de qualidade de saída ao seu stack de produção: o Braintrust suporta avaliação em produção contra saídas golden e alertará quando a qualidade cair abaixo do limiar.',
        ],
      },
      audit_trail: {
        title: 'Trilha de auditoria: o que registrar e por quê',
        content: [
          '**Uma trilha de auditoria para prompts deve capturar: quem alterou o prompt, o que foi alterado, quando, por quê (justificativa da alteração) e quais gates de revisão foram aprovados.** Este é o mínimo exigido pelo NIST AI RMF, pela LGPD/ANPD e pelo EU AI Act para sistemas de IA de alto risco.',
          'Armazene a trilha de auditoria no mesmo sistema de controle de versões que o prompt. As mensagens de commit do Git funcionam para equipes pequenas. O PromptHub fornece um log de auditoria estruturado com assinaturas de revisores, resultados de testes e timestamps de implantação.',
          'Use um formato de commit consistente:',
        ],
        items: [
          'Autor: [nome]',
          'Revisor: [nome] — aprovado/rejeitado',
          'Alteração: [resumo em uma linha do que foi alterado]',
          'Motivo: [por que a alteração foi feita]',
          'Resultados de testes: [taxa de aprovação, número de testes, ferramenta utilizada]',
          'Versão: [nova etiqueta de versão]',
        ],
      },
      tools: {
        title: 'Ferramentas para governance de prompts',
        content: [
          '**O stack mínimo viável de governance é Git + um test runner.** PromptHub, Braintrust e Vellum adicionam estrutura sobre essa base.',
        ],
        items: [
          'Git: controle de versões para arquivos de prompts. Gratuito. Funciona para qualquer tamanho de equipe. Requer disciplina para ser usado de forma consistente.',
          'PromptHub: gerenciamento de prompts com histórico de versões, fluxos de trabalho de revisores e rastreamento de implantações. $0–$49/mês conforme o tamanho da equipe.',
          'Braintrust: plataforma de avaliação com integração CI/CD. Executa testes de qualidade automatizados em cada PR. Melhor para equipes que já executam testes automatizados de prompts.',
          'Vellum: implantação de prompts em produção com gerenciamento de tráfego, testes A/B e avaliação em produção. Melhor para aplicações de alto tráfego onde lançamentos parciais reduzem o raio de impacto de incidentes.',
          '[PromptQuorum](/features): testes multi-modelo para confirmar que um prompt funciona no GPT-5.5, Claude 4.6 Sonnet e Gemini 2.5 Pro antes da implantação. Use durante a revisão por pares do Gate 2.',
        ],
      },
      faq: {
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que é governance de prompts?', a: 'A governance de prompts é o sistema de papéis, processos de revisão e regras de implantação que controla quais prompts chegam à produção e como são monitorados. Inclui quem pode criar prompts, quem deve aprová-los, quais testes devem ser aprovados antes da implantação e o que acontece quando um prompt falha em produção.' },
          { q: 'Por que a governance de prompts importa em produção?', a: 'Prompts falham silenciosamente — sem log de erro, sem exceção, sem alerta. A qualidade da saída se degrada sem sinal visível. A governance adiciona visibilidade: cada alteração é rastreada, cada versão é revisável, cada implantação pode ser revertida.' },
          { q: 'Quais papéis são necessários para governance de prompts?', a: 'Três papéis cobrem a maioria das equipes: Autor (escreve o prompt, executa testes iniciais), Revisor (verifica qualidade e conformidade) e Aprovador (aprova a implantação em produção). Equipes grandes adicionam um papel de Proprietário de Prompt.' },
          { q: 'Como reverto um prompt defeituoso em produção?', a: 'Armazene cada prompt implantado com uma etiqueta de versão no Git ou PromptHub. Quando uma regressão é detectada, reverta para a versão anterior em sua configuração de implantação e reimplante. Isso leva menos de 5 minutos se o controle de versões estiver configurado antecipadamente.' },
          { q: 'O NIST AI Risk Management Framework exige governance de prompts?', a: 'O NIST AI RMF (2023) recomenda controles de governance incluindo rastreabilidade, avaliação de riscos antes da implantação e resposta a incidentes. O controle de versões de prompts e os gates de revisão abordam os três.' },
          { q: 'O EU AI Act e a LGPD exigem governance de prompts?', a: 'O EU AI Act (em vigor em 2026) exige supervisão humana, documentação e rastreabilidade para sistemas de IA de alto risco. A LGPD e a ANPD (Autoridade Nacional de Proteção de Dados) do Brasil também requerem controles de qualidade para sistemas que processam dados pessoais. O controle de versões, os gates de revisão e as trilhas de auditoria satisfazem diretamente o requisito de rastreabilidade.' },
          { q: 'Em que difere governance de prompts de governance de modelos?', a: 'A governance de modelos cobre a seleção do modelo, o treinamento, os testes de viés e as políticas de implantação. A governance de prompts cobre quais instruções são dadas a um modelo implantado. Ambas são necessárias em ambientes regulamentados; são complementares, mas distintas.' },
          { q: 'O que uma trilha de auditoria para prompts deve conter?', a: 'Uma trilha de auditoria de prompts deve registrar: o texto do prompt em cada versão, quem o alterou, quando, por quê, quais testes aprovou, quem aprovou a implantação e qualquer incidente atribuído a ela. A trilha deve ser consultável — se um auditor perguntar qual prompt estava em produção em um momento específico, você deve conseguir responder em menos de 5 minutos.' },
        ],
      },
      related_reading: {
        title: 'Leitura relacionada',
        items: [
          { title: 'Fluxo de revisão de prompts para equipes', url: '/pt/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Controle de versões de prompts', url: '/pt/prompt-engineering/prompt-version-control' },
          { title: 'Auditoria e testes de regressão de prompts', url: '/pt/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Ferramentas de segurança de prompts: testes de injection', url: '/pt/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Templates de documentação de prompts', url: '/pt/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: 'Fontes',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'LGPD — Lei Geral de Proteção de Dados (Lei nº 13.709/2018)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Gouvernance d\'équipe',
    title: 'Gouvernance des prompts en production : rôles, gates de révision et règles de déploiement',
    seoTitle: 'Gouvernance des prompts en production : rôles et révision',
    intro: 'La gouvernance des prompts est le système de rôles, de processus de révision et de règles de déploiement qui contrôle quels prompts atteignent la production et comment ils sont surveillés. Sans elle, les changements de prompts ne sont pas suivis, pas testés et ne peuvent pas être annulés.',
    metaDescription: 'Configurer la gouvernance des prompts avec 3 rôles, 3 gates de révision, procédures de rollback et pistes d\'audit. Conforme NIST AI RMF et EU AI Act.',
    ogDescription: 'Gouvernance des prompts en production : 3 rôles, gates de tests automatisés, rollback en moins de 5 minutes et piste d\'audit complète. Tests multi-modèles avec PromptQuorum.',
    twitterDescription: 'Les prompts échouent silencieusement. La gouvernance est le seul mécanisme de visibilité. 3 rôles, 3 gates, rollback en 5 minutes, piste d\'audit complète.',
    publishDate: '2026-05-02',
    readTime: '14 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'Gouvernance des prompts',
    leadAnswerBlock: '**La gouvernance des prompts est l\'ensemble des rôles, gates de révision et règles de déploiement qui contrôle quels prompts passent en production.** Sans gouvernance, les prompts changent silencieusement — pas de trace d\'approbation, pas de chemin de rollback, pas de réponse aux incidents.',
    quickFacts: [
      'Modèle de propriété à 3 rôles : Auteur, Réviseur, Approbateur',
      'Le rollback prend moins de 5 minutes avec un contrôle de version configuré à l\'avance',
      'Trois gates obligatoires : tests de régression automatisés (≥90%), revue par les pairs, scan de sécurité',
      'La piste d\'audit doit enregistrer qui, quoi, quand, pourquoi et les résultats des gates',
      'L\'EU AI Act (en vigueur 2026) exige la traçabilité pour les prompts IA à haut risque',
      'Stack minimal : Git + Braintrust ou Promptfoo',
    ],
    toc: [
      { label: 'Ce qu\'est la gouvernance des prompts et pourquoi elle compte', anchor: 'what_is_governance' },
      { label: 'Le modèle de propriété à 3 rôles', anchor: 'ownership_model' },
      { label: 'Gates de révision avant déploiement', anchor: 'review_gates' },
      { label: 'Comment annuler un prompt défaillant', anchor: 'rollback' },
      { label: 'Piste d\'audit : que journaliser', anchor: 'audit_trail' },
      { label: 'Outils de gouvernance des prompts', anchor: 'tools' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Lectures complémentaires', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/fr/prompt-engineering/prompt-governance-production',
      inLanguage: 'fr',
      headline: 'Gouvernance des prompts en production : rôles, gates de révision et règles de déploiement',
      description: 'Mettre en place la gouvernance des prompts avec 3 rôles, 3 gates de révision, procédures de rollback et pistes d\'audit. Conforme NIST AI RMF et EU AI Act.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['gouvernance des prompts', 'gestion des prompts', 'prompts de production', 'gouvernance IA', 'déploiement de prompts'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'La gouvernance des prompts contrôle quels prompts atteignent la production via 3 rôles (Auteur, Réviseur, Approbateur), 3 gates de révision obligatoires et des procédures de rollback. Les prompts échouent silencieusement ; la gouvernance est le seul mécanisme de visibilité. Configurez le contrôle de version et le rollback avant d\'en avoir besoin : avec préparation, un rollback prend moins de 5 minutes.',
        ],
      },
      key_takeaways: {
        title: 'Points clés',
        items: [
          'Gouvernance des prompts = rôles (Auteur, Réviseur, Approbateur) + gates de révision + procédure de rollback',
          'Les prompts échouent silencieusement — la gouvernance est le seul mécanisme de visibilité',
          'Trois gates minimum : tests de régression automatisés (≥ 90%), revue par les pairs, scan de sécurité',
          'Configurer le rollback avant d\'en avoir besoin : tags de version, config de déploiement avec référence aux tags',
          'La piste d\'audit doit capturer qui, quoi, quand, pourquoi et les résultats des gates',
        ],
      },
      what_is_governance: {
        title: 'Ce qu\'est la gouvernance des prompts et pourquoi elle compte',
        snippets: [
          { type: 'in-one-sentence', text: 'La gouvernance des prompts est le système de rôles, de gates de révision et de règles de déploiement qui contrôle quels prompts atteignent la production et comment ils sont surveillés.' },
          { type: 'in-plain-terms', text: 'Sans gouvernance, les modifications de prompts sont invisibles — aucune trace de qui a changé quoi, aucune possibilité de rollback et aucune alerte en cas de dégradation silencieuse de la qualité.' },
        ],
        content: [
          '**La gouvernance des prompts est le système qui contrôle quels prompts atteignent la production, qui peut les modifier, et que faire en cas d\'échec.** Elle couvre trois domaines : contrôle d\'accès (qui peut créer, réviser et approuver les prompts), processus de déploiement (quels tests doivent passer avant la mise en ligne), et réponse aux incidents (comment détecter, diagnostiquer et annuler un prompt défaillant).',
          'La gouvernance n\'est pas de la bureaucratie gratuite. Elle existe parce que les prompts échouent silencieusement. Quand un changement de prompt dégrade la qualité des sorties, il n\'y a pas de log d\'erreur, pas d\'exception, pas d\'alerte.',
          'Utilisez la gouvernance quand les prompts affectent des fonctionnalités utilisateur, des sorties réglementées (juridique, médical, financier) ou des workflows automatisés à fort volume.',
        ],
        callouts: [
          { type: 'warning', label: 'Échecs silencieux', text: 'Un changement de prompt qui dégrade la qualité ne produit ni erreur, ni exception, ni alerte. Le problème n\'est découvert que via les plaintes utilisateurs ou le monitoring — les deux après que le dommage est fait.' },
        ],
      },
      ownership_model: {
        title: 'Qui est propriétaire des prompts ? Le modèle à 3 rôles',
        content: [
          '**Trois rôles couvrent la gouvernance des prompts pour la plupart des équipes : Auteur, Réviseur et Approbateur.**',
        ],
        items: [
          'Auteur : rédige le prompt, effectue les tests qualité initiaux, soumet pour révision.',
          'Réviseur : vérifie la qualité, la conformité et la sécurité. Dans les domaines réglementés, le réviseur doit avoir une expertise du domaine.',
          'Approbateur : approuve ou rejette le déploiement en production. A l\'autorité unilatérale de bloquer une mise en production.',
        ],
      },
      review_gates: {
        title: 'Gates de révision que chaque prompt doit passer avant le déploiement',
        content: [
          '**Un prompt doit passer au moins trois gates : tests qualité automatisés, revue par les pairs et scan de sécurité.** Chaque gate a un résultat binaire — passage ou blocage.',
        ],
        items: [
          'Gate 1 — Tests automatisés : le prompt doit passer la suite de tests de régression avec un taux ≥ 90% (Braintrust ou Promptfoo).',
          'Gate 2 — Revue par les pairs : un Réviseur valide la qualité et la conformité. Tester sur GPT-5.5 et Claude 4.6 Sonnet au minimum.',
          'Gate 3 — Scan de sécurité : vérifier les vecteurs d\'injection, la susceptibilité aux jailbreaks et les fuites de données sensibles.',
        ],
        callouts: [
          { type: 'tip', label: 'Automatisez le Gate 1', text: 'Le Gate 1 (tests automatisés) doit s\'exécuter à chaque commit, pas seulement avant le déploiement. Détecter les régressions au moment du commit prend quelques minutes à corriger ; au déploiement, cela prend des heures.' },
        ],
      },
      rollback: {
        title: 'Comment annuler un prompt défaillant en production',
        content: [
          '**Un rollback de prompt devrait prendre moins de 5 minutes si le contrôle de version est configuré à l\'avance.**',
          'Configuration minimale viable :',
        ],
        items: [
          'Chaque prompt déployé a un tag de version : v1.0, v1.1, etc.',
          'La config de déploiement référence le tag, pas le fichier directement',
          'Les 3 versions précédentes sont conservées et déployables sans tests supplémentaires',
          'La personne d\'astreinte a accès en écriture à la config de déploiement sans approbation manageriale',
        ],
      },
      rollback_part2: {
        content: [
          'Après le rollback, traitez l\'incident comme un post-mortem. Documentez : ce qui a changé, ce qui a échoué, le délai de détection, le délai de résolution, et quel gate aurait dû l\'attraper.',
        ],
      },
      audit_trail: {
        title: 'Piste d\'audit : que journaliser et pourquoi',
        content: [
          '**Une piste d\'audit pour les prompts doit capturer : qui a modifié le prompt, ce qui a changé, quand, pourquoi (justification du changement), et quels gates de révision ont été passés.**',
          'Stockez la piste d\'audit dans le même système de contrôle de version que le prompt.',
        ],
        items: [
          'Auteur : [nom]',
          'Réviseur : [nom] — approuvé/rejeté',
          'Changement : [résumé en une ligne de ce qui a changé]',
          'Raison : [pourquoi le changement a été effectué]',
          'Résultats des tests : [taux de réussite, nombre de tests, outil utilisé]',
          'Version : [nouveau tag de version]',
        ],
      },
      tools: {
        title: 'Outils de gouvernance des prompts',
        content: [
          '**Le stack de gouvernance minimal est Git + un test runner.**',
        ],
        items: [
          'Git : contrôle de version pour les fichiers de prompts. Gratuit. Fonctionne pour toute taille d\'équipe.',
          'PromptHub : gestion des prompts avec historique des versions, workflows de révision et suivi des déploiements.',
          'Braintrust : plateforme d\'évaluation avec intégration CI/CD. Exécute des tests qualité automatisés à chaque PR.',
          'Vellum : déploiement de prompts en production avec gestion du trafic et tests A/B.',
          'PromptQuorum : tests multi-modèles pour confirmer qu\'un prompt fonctionne sur GPT-5.5, Claude 4.6 Sonnet et Gemini 2.5 Pro.',
        ],
      },
      faq: {
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Qu\'est-ce que la gouvernance des prompts ?', a: 'La gouvernance des prompts est le système de rôles, de processus de révision et de règles de déploiement qui contrôle quels prompts atteignent la production et comment ils sont surveillés.' },
          { q: 'Pourquoi la gouvernance des prompts est-elle importante ?', a: 'Les prompts échouent silencieusement. La gouvernance ajoute de la visibilité : chaque changement est suivi, chaque version est révisable, chaque déploiement peut être annulé.' },
          { q: 'Quels rôles sont nécessaires ?', a: 'Trois rôles : Auteur, Réviseur et Approbateur. Les grandes équipes ajoutent un rôle de Propriétaire de prompt.' },
          { q: 'Comment effectuer un rollback ?', a: 'Stockez chaque prompt déployé avec un tag de version. En cas de régression, revenez au tag précédent et redéployez. Avec préparation, moins de 5 minutes.' },
          { q: 'L\'EU AI Act exige-t-il la gouvernance des prompts ?', a: 'Oui. L\'EU AI Act (en vigueur 2026) exige la traçabilité pour les systèmes IA à haut risque. Contrôle de version, gates et pistes d\'audit satisfont directement cette exigence.' },
          { q: 'Différence entre gouvernance des prompts et des modèles ?', a: 'La gouvernance des modèles couvre la sélection et l\'entraînement. La gouvernance des prompts couvre les instructions données aux modèles déployés. Les deux sont complémentaires.' },
          { q: 'Que doit contenir une piste d\'audit ?', a: 'Texte du prompt à chaque version, auteur, date, raison, tests réussis, approbateur, et incidents attribués. Interrogeable en moins de 5 minutes.' },
        ],
      },
      related_reading: {
        title: 'Lectures complémentaires',
        items: [
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Audit and Regression Testing', url: '/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Prompt Security Tools: Injection Testing', url: '/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'チームガバナンス',
    title: '本番環境のPromptガバナンス：役割、レビューゲート、デプロイルール',
    seoTitle: '本番Promptガバナンス：役割とレビューゲートの設計',
    intro: 'Promptガバナンスは、どのPromptが本番環境に到達するか、どのように監視するかを制御する役割・レビュープロセス・デプロイルールのシステムです。なければPromptの変更は追跡されず、テストされず、ロールバックもできません。',
    metaDescription: '3つの役割（作成者・レビュアー・承認者）、3つのレビューゲート、ロールバック手順、監査証跡でPromptガバナンスを設定。NIST AI RMFおよびEU AI Act準拠。',
    ogDescription: '本番Promptガバナンス：3役割、自動テストゲート、5分未満のロールバック、完全な監査証跡。PromptQuorumで複数モデルをテスト。',
    twitterDescription: 'Promptは静かに失敗します。ガバナンスが唯一の可視性メカニズムです。3役割、3ゲート、5分でロールバック、完全な監査証跡。',
    publishDate: '2026-05-02',
    readTime: '14分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'Promptガバナンス',
    leadAnswerBlock: '**Promptガバナンスとは、どのPromptが本番稼働するかを制御する役割・レビューゲート・デプロイルールのセットです。** ガバナンスなしではPromptは静かに変更され、承認記録もロールバックパスも出力低下時の対応策もありません。',
    quickFacts: [
      '3役割所有モデル：作成者（Author）、レビュアー（Reviewer）、承認者（Approver）',
      'ロールバックは事前に設定された版管理で5分未満',
      '3つの必須ゲート：自動回帰テスト（≥90%合格率）、ピアレビュー、セキュリティスキャン',
      '監査証跡は誰が・何を・いつ・なぜ・ゲート結果を記録する必要がある',
      'EU AI Act（2026年施行）は高リスクAIのPromptに追跡可能性を要求',
      '最小スタック：Git + BraintrustまたはPromptfoo',
    ],
    toc: [
      { label: 'Promptガバナンスとは何か・なぜ重要か', anchor: 'what_is_governance' },
      { label: '3役割所有モデル', anchor: 'ownership_model' },
      { label: 'デプロイ前のレビューゲート', anchor: 'review_gates' },
      { label: '失敗Promptのロールバック方法', anchor: 'rollback' },
      { label: '監査証跡：何をログに記録するか', anchor: 'audit_trail' },
      { label: 'Promptガバナンスのツール', anchor: 'tools' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連記事', anchor: 'related_reading' },
      { label: '情報源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ja/prompt-engineering/prompt-governance-production',
      inLanguage: 'ja',
      headline: '本番環境のPromptガバナンス：役割、レビューゲート、デプロイルール',
      description: '3つの役割、3つのレビューゲート、ロールバック手順、監査証跡でPromptガバナンスを設定。NIST AI RMFおよびEU AI Act準拠。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Promptガバナンス', 'Prompt管理', '本番Prompt', 'AIガバナンス', 'Promptデプロイ'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Promptガバナンスは3つの役割（作成者・レビュアー・承認者）、3つの必須レビューゲート、ロールバック手順を通じてどのPromptが本番環境に到達するかを制御します。Promptは静かに失敗します — ガバナンスが唯一の可視性メカニズムです。必要になる前にバージョン管理とロールバックを設定してください：準備があれば5分未満、なければ数時間かかります。',
        ],
      },
      key_takeaways: {
        title: '重要なポイント',
        items: [
          'Promptガバナンス = 役割（作成者・レビュアー・承認者）+ レビューゲート + ロールバック手順',
          'Promptは静かに失敗する — ガバナンスはデプロイ前後の可視性を提供する唯一のメカニズム',
          '最低3つのゲート：自動回帰テスト（≥90%）、ピアレビュー、セキュリティスキャン',
          '必要になる前にロールバックを設定：バージョンタグ、タグを参照するデプロイ設定、オンコールアクセス',
          '監査証跡は誰が・何を・いつ・なぜ・ゲート結果を記録する必要がある',
        ],
      },
      what_is_governance: {
        title: 'Promptガバナンスとは何か・なぜ重要か',
        snippets: [
          { type: 'in-one-sentence', text: 'Promptガバナンスは、どのPromptが本番環境に到達し、稼働後どのように監視されるかを制御する役割・レビューゲート・デプロイルールのシステムです。' },
          { type: 'in-plain-terms', text: 'ガバナンスなしでは、Promptの変更は見えません — 誰が何を変えたかの記録もなく、壊れたときのロールバック手段もなく、品質が静かに低下してもアラートもありません。' },
        ],
        content: [
          '**Promptガバナンスとは、どのPromptが本番環境に到達し、誰が変更できて、失敗時に何が起こるかを制御するシステムです。** アクセスコントロール（誰がPromptを作成・レビュー・承認できるか）、デプロイプロセス（本番稼働前にどのテストに合格する必要があるか）、インシデント対応（失敗Promptを検出・診断・ロールバックする方法）の3つの領域をカバーします。',
          'ガバナンスは官僚主義のためにあるのではありません。Promptは静かに失敗するため存在します。Prompt変更が出力品質を低下させると、エラーログも例外もアラートもありません。',
          'ユーザー向け機能、規制対象の出力（法律・医療・金融）、または高ボリュームの自動化ワークフローにPromptが影響する場合はガバナンスを使用します。',
        ],
        callouts: [
          { type: 'warning', label: '静かな失敗', text: '品質を低下させるPrompt変更はエラーも例外もアラートも生成しません。問題はユーザーの苦情またはモニタリングを通じてのみ発見されます — どちらもダメージが発生した後です。' },
        ],
      },
      ownership_model: {
        title: 'Promptを誰が所有するか？3役割所有モデル',
        content: [
          '**3つの役割がほとんどのチームのPromptガバナンスをカバーします：作成者（Author）、レビュアー（Reviewer）、承認者（Approver）。**',
        ],
        items: [
          '作成者：Promptを書き、初期品質テストを実行し、レビューに提出します。',
          'レビュアー：品質、コンプライアンス、安全性を確認します。規制対象ドメインではドメイン専門知識が必要です。',
          '承認者：本番へのデプロイを承認または拒否します。レビュアーのサインオフに関わらず、リリースをブロックする一方的な権限を持ちます。',
        ],
      },
      review_gates: {
        title: 'デプロイ前にすべてのPromptが通過すべきレビューゲート',
        content: [
          '**Promptは最低3つのゲートを通過する必要があります：自動品質テスト、ピアレビュー、セキュリティスキャン。** 各ゲートの結果は二値（合格または不合格）です。例外なし。',
        ],
        items: [
          'ゲート1 — 自動テスト：回帰テストスイートを合格率 ≥ 90%で通過（BraintrustまたはPromptfoo使用）。',
          'ゲート2 — ピアレビュー：Reviewerが品質とコンプライアンスを承認。最低GPT-5.5とClaude 4.6 Sonnetでテスト。',
          'ゲート3 — セキュリティスキャン：インジェクションベクター、ジェイルブレイク脆弱性、機密データ漏洩を確認。',
        ],
        callouts: [
          { type: 'tip', label: 'ゲート1を自動化する', text: 'ゲート1（自動テスト）はデプロイ前だけでなく、すべてのコミット時に実行すべきです。コミット時に回帰を検出するのは数分で修正できますが、デプロイ時に検出すると数時間かかります。' },
        ],
      },
      rollback: {
        title: '本番環境で失敗したPromptのロールバック方法',
        content: [
          '**バージョン管理が事前に設定されていれば、Promptのロールバックは5分未満で完了します。** ロールバック手順は4ステップ：検出（監視アラートまたはユーザーレポート）、特定（どのPromptバージョンが回帰を引き起こしたか）、リバート（デプロイ設定を前のバージョンタグに向ける）、確認（出力品質が回復することを確認）。',
          '必要になる前に設定する最小限のセットアップ：',
        ],
        items: [
          'デプロイしたすべてのPromptにバージョンタグ：v1.0、v1.1など',
          'デプロイ設定はファイルを直接ではなくタグを参照',
          '直前3バージョンは追加テストなしで保持・デプロイ可能',
          'オンコール担当者は管理者承認なしにデプロイ設定への書き込みアクセス権を持つ',
        ],
      },
      rollback_part2: {
        content: [
          'ロールバック後は、インシデントをポストモーテムとして扱います。何が変更されたか、何が失敗したか、検出までの時間、解決までの時間、どのゲートが問題を捕捉すべきだったかを文書化します。',
        ],
      },
      audit_trail: {
        title: '監査証跡：何をログに記録するか・なぜか',
        content: [
          '**Promptの監査証跡には、誰がPromptを変更したか、何が変更されたか、いつ、なぜ（変更理由）、どのレビューゲートに合格したかを記録する必要があります。** これはNIST AI RMFとEU AI Actが高リスクAIシステムに要求する最低限です。',
          'Promptと同じバージョン管理システムに監査証跡を保存します。',
        ],
        items: [
          '作成者：[名前]',
          'レビュアー：[名前] — 承認/拒否',
          '変更：[変更内容の1行要約]',
          '理由：[変更した理由]',
          'テスト結果：[合格率、テスト数、使用ツール]',
          'バージョン：[新しいバージョンタグ]',
        ],
      },
      tools: {
        title: 'Promptガバナンスのツール',
        content: [
          '**最小限のガバナンススタックはGit + テストランナーです。** PromptHub、Braintrust、Vellumはそのベースラインの上に構造を追加します。',
        ],
        items: [
          'Git：Promptファイルのバージョン管理。無料。任意のチームサイズで機能します。',
          'PromptHub：バージョン履歴、レビュアーワークフロー、デプロイ追跡を備えた専用Prompt管理。',
          'Braintrust：CI/CD統合の評価プラットフォーム。すべてのPRで自動品質テストを実行。',
          'Vellum：トラフィック管理、A/Bテスト、ライブ評価を備えた本番Promptデプロイ。',
          'PromptQuorum：デプロイ前にGPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proでの動作を確認するマルチモデルテスト。',
        ],
      },
      faq: {
        title: 'よくある質問',
        faqs: [
          { q: 'Promptガバナンスとは何ですか？', a: 'どのPromptが本番環境に到達し、どのように監視されるかを制御する役割・プロセス・ルールのシステムです。' },
          { q: 'Promptガバナンスはなぜ重要ですか？', a: 'Promptは静かに失敗します。ガバナンスは可視性を追加します：すべての変更が追跡され、すべてのバージョンがレビュー可能で、すべてのデプロイがロールバック可能です。' },
          { q: 'どの役割が必要ですか？', a: '3つの役割：作成者、レビュアー、承認者。大きなチームはPrompt Ownerロールを追加します。' },
          { q: 'ロールバックはどのように行いますか？', a: 'バージョンタグ付きでデプロイしたPromptを保存します。回帰検出時に前のタグにデプロイ設定を戻して再デプロイします。準備があれば5分未満。' },
          { q: 'EU AI ActはPromptガバナンスを要求していますか？', a: 'はい。EU AI Act（2026年施行）は高リスクAIに追跡可能性を要求します。バージョン管理、レビューゲート、監査証跡はこの要件を直接満たします。' },
          { q: 'Promptガバナンスとモデルガバナンスはどのように異なりますか？', a: 'モデルガバナンスはモデルの選択とトレーニングをカバーします。Promptガバナンスはデプロイされたモデルへの指示をカバーします。両方が必要で補完的です。' },
          { q: '監査証跡には何が含まれる必要がありますか？', a: '各バージョンのPromptテキスト、変更者、日時、理由、合格テスト、承認者、起因するインシデント。特定の時刻のPromptを5分未満で照会できる必要があります。' },
        ],
      },
      related_reading: {
        title: '関連記事',
        items: [
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Audit and Regression Testing', url: '/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Prompt Security Tools: Injection Testing', url: '/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: '情報源',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'حوكمة التعليمات في بيئة الإنتاج: الأدوار وبوابات المراجعة وقواعد النشر',
    seoTitle: 'حوكمة Prompt في الإنتاج: أدوار وبوابات مراجعة',
    intro: 'حوكمة التعليمات هي منظومة الأدوار وعمليات المراجعة وقواعد النشر التي تتحكم في أي التعليمات تصل إلى بيئة الإنتاج وكيفية مراقبتها بعد التشغيل المباشر. من دونها تظل التغييرات على التعليمات غير متتبَّعة وغير مختبَرة ولا يمكن التراجع عنها.',
    metaDescription: '3 أدوار (مؤلف، مراجع، معتمِد) و3 بوابات مراجعة لحوكمة Prompt في الإنتاج. يتضمن إجراءات التراجع وسجلات التدقيق متوافقة مع NIST AI RMF.',
    ogDescription: 'حوكمة التعليمات في الإنتاج: ملكية بثلاثة أدوار، بوابات اختبار آلية، تراجع في أقل من 5 دقائق، وسجل تدقيق كامل. اختبر عبر النماذج مع PromptQuorum.',
    twitterDescription: 'التعليمات تفشل بصمت. الحوكمة هي الآلية الوحيدة للرؤية. 3 أدوار، 3 بوابات، تراجع في 5 دقائق، سجل تدقيق كامل.',
    publishDate: '2026-05-02',
    readTime: '14 دقائق للقراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'حوكمة التعليمات',
    leadAnswerBlock: '**حوكمة التعليمات هي منظومة الأدوار وبوابات المراجعة وقواعد النشر التي تتحكم في أي التعليمات تعمل في الإنتاج.** من دون الحوكمة تتغير التعليمات بصمت — لا سجل موافقة، ولا مسار للتراجع، ولا استجابة للحوادث عند تراجع جودة المخرجات.',
    quickFacts: [
      'نموذج الملكية بثلاثة أدوار: المؤلف، والمراجع، والمعتمِد',
      'التراجع يستغرق أقل من 5 دقائق مع إعداد التحكم في الإصدارات مسبقاً',
      'ثلاث بوابات إلزامية: اختبارات انحدار آلية (معدل نجاح ≥90%)، ومراجعة الأقران، وفحص الأمان',
      'يجب أن يسجل سجل التدقيق من ومتى وماذا ولماذا ونتائج البوابات',
      'يشترط قانون الذكاء الاصطناعي الأوروبي (ساري المفعول 2026) إمكانية التتبع لتعليمات الذكاء الاصطناعي عالية المخاطر',
      'الحزمة الدنيا القابلة للتطبيق: Git + Braintrust أو Promptfoo',
    ],
    toc: [
      { label: 'ما هي حوكمة التعليمات ولماذا تهم', anchor: 'what_is_governance' },
      { label: 'نموذج الملكية بثلاثة أدوار', anchor: 'ownership_model' },
      { label: 'بوابات المراجعة قبل النشر', anchor: 'review_gates' },
      { label: 'كيفية التراجع عن تعليمة فاشلة', anchor: 'rollback' },
      { label: 'سجل التدقيق: ما يجب تسجيله', anchor: 'audit_trail' },
      { label: 'أدوات حوكمة التعليمات', anchor: 'tools' },
      { label: 'أسئلة مكررة', anchor: 'faq' },
      { label: 'قراءة ذات صلة', anchor: 'related_reading' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/prompt-governance-production',
      inLanguage: 'ar',
      headline: 'حوكمة التعليمات في بيئة الإنتاج: الأدوار وبوابات المراجعة وقواعد النشر',
      description: 'أنشئ حوكمة للتعليمات بثلاثة أدوار وثلاث بوابات مراجعة وإجراءات التراجع وسجلات التدقيق. متوافق مع NIST AI RMF وقانون الذكاء الاصطناعي الأوروبي.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['حوكمة التعليمات', 'إدارة التعليمات', 'تعليمات الإنتاج', 'حوكمة الذكاء الاصطناعي', 'نشر التعليمات'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'تتحكم حوكمة التعليمات في أي التعليمات تصل إلى الإنتاج عبر ثلاثة أدوار (المؤلف والمراجع والمعتمِد) وثلاث بوابات مراجعة إلزامية وإجراءات التراجع. التعليمات تفشل بصمت — الحوكمة هي الآلية الوحيدة التي تضيف الرؤية. أعدّ التحكم في الإصدارات والتراجع قبل أن تحتاج إليهما: التراجع مع الإعداد يستغرق أقل من 5 دقائق، وبدون إعداد قد يستغرق ساعات.',
        ],
      },
      key_takeaways: {
        title: 'النقاط الرئيسية',
        items: [
          'حوكمة التعليمات = الأدوار (المؤلف، المراجع، المعتمِد) + بوابات المراجعة (اختبارات آلية، مراجعة أقران، فحص أمان) + إجراء التراجع',
          'التعليمات تفشل بصمت — الحوكمة هي الآلية الوحيدة التي توفر الرؤية قبل النشر وبعده',
          'ثلاث بوابات على الأقل: اختبارات انحدار آلية (≥90%)، مراجعة الأقران، فحص الأمان',
          'أعدّ التراجع قبل الحاجة إليه: وسوم الإصدارات، إعداد النشر المشير إلى الوسوم، وصول المناوب',
          'يجب أن يسجل سجل التدقيق من وماذا ومتى ولماذا ونتائج البوابات — مطلوب بموجب NIST AI RMF للأنظمة عالية المخاطر',
          'الحزمة الدنيا القابلة للتطبيق: Git + Braintrust أو Promptfoo. أضف PromptHub أو Vellum مع نمو الفريق وحجم الحركة',
        ],
      },
      what_is_governance: {
        title: 'ما هي حوكمة التعليمات ولماذا تهم',
        snippets: [
          { type: 'in-one-sentence', text: 'حوكمة التعليمات هي منظومة الأدوار وبوابات المراجعة وقواعد النشر التي تتحكم في أي التعليمات تصل إلى الإنتاج وكيفية مراقبتها بعد التشغيل المباشر.' },
          { type: 'in-plain-terms', text: 'من دون الحوكمة تكون تغييرات التعليمات غير مرئية — لا سجل لمن غيّر ماذا، ولا طريقة للتراجع عند الكسر، ولا تنبيه عند تراجع الجودة بصمت.' },
        ],
        content: [
          '**حوكمة التعليمات هي المنظومة التي تتحكم في أي التعليمات تصل إلى الإنتاج، ومن يمكنه تغييرها، وما يحدث عند فشلها.** تغطي ثلاثة مجالات: التحكم في الوصول (من يمكنه إنشاء التعليمات ومراجعتها واعتمادها)، وعملية النشر (ما الاختبارات التي يجب اجتيازها قبل تشغيل التعليمة)، والاستجابة للحوادث (كيفية اكتشاف وتشخيص والتراجع عن تعليمة فاشلة).',
          'الحوكمة ليست بيروقراطية لذاتها. إنها موجودة لأن التعليمات تفشل بصمت. حين يؤدي تغيير التعليمة إلى تراجع جودة المخرجات، لا يوجد سجل أخطاء ولا استثناء ولا تنبيه — المخرجات ببساطة تصبح أسوأ. من دون حوكمة يقضي الفريق في الغالب أياماً في تشخيص تراجعات الجودة التي سببها تغيير سطر واحد في التعليمة.',
          'استخدم الحوكمة كلما أثّرت التعليمات على ميزات مواجهة المستخدم أو المخرجات الخاضعة للتنظيم (قانونية أو طبية أو مالية) أو سير العمل الآلية عالية الحجم. أغفل الحوكمة الرسمية للتعليمات الداخلية منخفضة المخاطر لمرة واحدة.',
        ],
        callouts: [
          { type: 'warning', label: 'الإخفاقات الصامتة', text: 'تغيير التعليمة الذي يُدهور الجودة لا يولّد خطأً ولا استثناءً ولا تنبيهاً. لا تكتشف المشكلة إلا من خلال شكاوى المستخدمين أو المراقبة — وكلاهما يأتي بعد وقوع الضرر.' },
        ],
      },
      ownership_model: {
        title: 'من يملك التعليمات؟ نموذج الملكية بثلاثة أدوار',
        content: [
          '**ثلاثة أدوار تغطي حوكمة التعليمات لمعظم الفرق: المؤلف، والمراجع، والمعتمِد.** لكل دور مسؤولية مميزة ونقطة حق نقض مميزة.',
        ],
        items: [
          'المؤلف: يكتب التعليمة، يُجري اختبارات الجودة الأولية، يقدمها للمراجعة. مسؤول عن الصحة الوظيفية.',
          'المراجع: يتحقق من الجودة والامتثال والأمان. في المجالات الخاضعة للتنظيم (قانونية أو طبية أو مالية) يجب أن يمتلك المراجع خبرة المجال. للتعليمات الحساسة أمنياً تشمل المراجعة فحص الفريق الأحمر.',
          'المعتمِد: يوافق على النشر في الإنتاج أو يرفضه. يمتلك صلاحية منفردة لحجب الإصدار بصرف النظر عن موافقة المراجع.',
        ],
      },
      ownership_model_part2: {
        content: [
          'أضف دور مالك التعليمة للتعليمات الإنتاجية عالية الحركة. مالك التعليمة مسؤول عن أداء التعليمة المباشر عبر جميع إصدارات النماذج — GPT-5.5 وClaude 4.6 Sonnet وGemini 2.5 Pro — وهو جهة الاتصال الأولى أثناء الحوادث.',
          'تجنب أن يتولى الشخص ذاته دور المؤلف والمعتمِد معاً. التعليمات المعتمَدة ذاتياً لديها معدل حوادث أعلى بكثير. إذا كان فريقك صغيراً جداً لثلاثة أدوار منفصلة، اشترط على الأقل موافقة شخص ثانٍ قبل أن تصل أي تعليمة إلى الإنتاج.',
        ],
        callouts: [
          { type: 'insight', label: 'نموذج الثلاثة أدوار عملياً', text: 'يعكس الفصل بين المؤلف والمراجع والمعتمِد مراجعة كود البرمجيات: الشخص الذي يكتب الكود لا يمكنه اعتماد طلب السحب الخاص به. ينطبق المبدأ ذاته على التعليمات.' },
        ],
      },
      review_gates: {
        title: 'بوابات المراجعة التي يجب على كل تعليمة اجتيازها قبل النشر',
        content: [
          '**يجب على التعليمة اجتياز ثلاث بوابات على الأقل قبل الإنتاج: اختبارات جودة آلية، ومراجعة الأقران، وفحص الأمان.** كل بوابة نتيجتها ثنائية — نجاح أو حجب. بلا استثناءات.',
        ],
        items: [
          'البوابة 1 — الاختبارات الآلية: يجب على التعليمة اجتياز مجموعة اختبارات الانحدار (المجموعة الذهبية + الحالات الحدية) بمعدل نجاح ≥ 90%. شغِّل باستخدام Braintrust أو Promptfoo. الإخفاقات تحجب النشر آلياً.',
          'البوابة 2 — مراجعة الأقران: يوقّع مراجع على الجودة والامتثال. تغطي قائمة المراجعة: اكتمال المهمة، والامتثال للصيغة، وقيود الأمان، والسلوك الخاص بالنموذج (اختبر على GPT-5.5 وClaude 4.6 Sonnet على الأقل).',
          'البوابة 3 — فحص الأمان: تحقق من متجهات الحقن، والقابلية للتحايل، وتسرب البيانات الحساسة. للتعليمات الداخلية فقط بدون إدخال مستخدم يمكن تبسيط هذه البوابة إلى مراجعة قائمة تحقق. للتعليمات التي تعالج إدخال المستخدم، شغِّل اختبارات حقن آلية.',
        ],
      },
      review_gates_part2: {
        content: [
          'للمجالات الخاضعة للتنظيم، أضف البوابة 4 — مراجعة الامتثال. يؤكد خبير مجال مؤهل أن مخرجات التعليمة تلبي المعايير المعمول بها (HIPAA، GDPR، SOC 2، إلخ). هذه البوابة لا يمكن أتمتتها.',
          'وثّق نتيجة كل بوابة في سجل تغييرات التعليمة. إذا حُجبت البوابة 2 ثم أُعيد تقديمها، يجب تسجيل سبب الحجب الأصلي والحل. المدققون يبحثون عن هذا السجل.',
        ],
        callouts: [
          { type: 'tip', label: 'أتمتة البوابة 1', text: 'يجب تشغيل البوابة 1 (الاختبارات الآلية) عند كل تسليم، لا قبل النشر فقط. اكتشاف الانحدارات عند التسليم يكلف دقائق للإصلاح؛ اكتشافها عند النشر يكلف ساعات.' },
        ],
      },
      rollback: {
        title: 'كيفية التراجع عن تعليمة فاشلة في الإنتاج',
        content: [
          '**التراجع عن تعليمة يجب أن يستغرق أقل من 5 دقائق إذا كان التحكم في الإصدارات مُعداً مسبقاً.** إجراء التراجع له أربع خطوات: الكشف (تنبيه المراقبة أو تقرير المستخدم)، والتحديد (أي إصدار تعليمة تسبب في الانحدار)، والعودة (توجيه إعداد النشر إلى وسم الإصدار السابق)، والتأكيد (التحقق من استعادة جودة المخرجات).',
          'أعدّ التراجع قبل الحاجة إليه، لا أثناء الحادثة. الإعداد الأدنى القابل للتطبيق:',
        ],
        items: [
          'كل تعليمة منشورة لها وسم إصدار: v1.0، v1.1، إلخ',
          'إعداد النشر يشير إلى الوسم لا إلى الملف مباشرة',
          'الإصدارات الثلاثة السابقة محتفظ بها وقابلة للنشر بدون اختبارات إضافية',
          'للمناوب صلاحية الكتابة على إعداد النشر بدون موافقة مدير',
        ],
      },
      rollback_part2: {
        content: [
          'بعد التراجع، عامل الحادثة كتحليل ما بعد الوقوع. وثّق: ما الذي تغير، وما الذي فشل، وكم استغرق الكشف، وكم استغرق الحل، وأي بوابة كان يجب أن ترصد المشكلة. حدّث قائمة مراجعتك لمنع التكرار.',
          'معظم حوادث التعليمات تُكشف عبر شكاوى المستخدمين لا عبر المراقبة الآلية. أضف مراقبة جودة المخرجات إلى حزمة الإنتاج: Braintrust يدعم التقييم المباشر مقابل المخرجات الذهبية وسينبهك حين تنخفض الجودة دون العتبة.',
        ],
      },
      audit_trail: {
        title: 'سجل التدقيق: ما يجب تسجيله ولماذا',
        content: [
          '**يجب أن يسجل سجل تدقيق التعليمات: من غيّر التعليمة، وماذا تغير، ومتى، ولماذا (مبرر التغيير)، وأي بوابات مراجعة اجتازها.** هذا هو الحد الأدنى المطلوب بموجب NIST AI RMF وقانون الذكاء الاصطناعي الأوروبي للأنظمة عالية المخاطر.',
          'خزّن سجل التدقيق في نفس نظام التحكم في الإصدارات كالتعليمة. رسائل تسليم Git تكفي للفرق الصغيرة. PromptHub يوفر سجل تدقيق منظماً مع توقيعات المراجعين ونتائج الاختبارات وطوابع وقت النشر.',
          'استخدم صيغة تسليم متسقة:',
        ],
        items: [
          'المؤلف: [الاسم]',
          'المراجع: [الاسم] — موافقة/رفض',
          'التغيير: [ملخص في سطر لما تغير]',
          'السبب: [لماذا أُجري التغيير]',
          'نتائج الاختبار: [معدل النجاح، عدد الاختبارات، الأداة المستخدمة]',
          'الإصدار: [وسم الإصدار الجديد]',
        ],
      },
      tools: {
        title: 'أدوات حوكمة التعليمات',
        content: [
          '**الحزمة الدنيا للحوكمة هي Git + مشغّل اختبارات.** PromptHub وBraintrust وVellum تضيف هيكلاً فوق تلك القاعدة.',
        ],
        items: [
          'Git: التحكم في إصدارات ملفات التعليمات. مجاني. يعمل مع أي حجم فريق. يتطلب انضباطاً للاستخدام المتسق.',
          'PromptHub: إدارة التعليمات المخصصة مع سجل الإصدارات وسير عمل المراجع وتتبع النشر. 0–49 دولاراً شهرياً حسب حجم الفريق.',
          'Braintrust: منصة تقييم مع تكامل CI/CD. تشغّل اختبارات جودة آلية عند كل طلب سحب. الأفضل للفرق التي تشغّل اختبارات تعليمات آلية.',
          'Vellum: نشر تعليمات الإنتاج مع إدارة الحركة واختبار A/B والتقييم المباشر. الأفضل للتطبيقات عالية الحركة حيث تقليل نطاق التأثير عبر الإصدارات الجزئية.',
          '[PromptQuorum](/features): اختبار متعدد النماذج للتأكد من عمل التعليمة عبر GPT-5.5 وClaude 4.6 Sonnet وGemini 2.5 Pro قبل النشر. استخدمه أثناء مراجعة الأقران في البوابة 2.',
        ],
      },
      faq: {
        title: 'أسئلة مكررة',
        faqs: [
          { q: 'ما هي حوكمة التعليمات؟', a: 'حوكمة التعليمات هي منظومة الأدوار وعمليات المراجعة وقواعد النشر التي تتحكم في أي التعليمات تصل إلى الإنتاج وكيفية مراقبتها. تشمل من يمكنه إنشاء التعليمات ومن يجب أن يعتمدها وما الاختبارات التي يجب اجتيازها قبل النشر وما يحدث عند فشل التعليمة في الإنتاج.' },
          { q: 'لماذا تهم حوكمة التعليمات في الإنتاج؟', a: 'التعليمات تفشل بصمت — لا سجل أخطاء، ولا استثناء، ولا تنبيه. تتراجع جودة المخرجات دون إشارة مرئية. الحوكمة تضيف الرؤية: كل تغيير مُتتبَّع، كل إصدار قابل للمراجعة، كل نشر قابل للتراجع.' },
          { q: 'ما الأدوار المطلوبة لحوكمة التعليمات؟', a: 'ثلاثة أدوار تغطي معظم الفرق: المؤلف (يكتب التعليمة، يُجري اختبارات أولية)، والمراجع (يتحقق من الجودة والامتثال)، والمعتمِد (يوافق على النشر في الإنتاج). الفرق الكبيرة تضيف دور مالك التعليمة.' },
          { q: 'كيف أتراجع عن تعليمة سيئة في الإنتاج؟', a: 'خزّن كل تعليمة منشورة بوسم إصدار في Git أو PromptHub. عند اكتشاف انحدار، ارجع إلى الإصدار السابق في إعداد النشر وأعد النشر. يستغرق ذلك أقل من 5 دقائق إذا كان التحكم في الإصدارات مُعداً مسبقاً.' },
          { q: 'هل يشترط إطار NIST AI RMF حوكمة التعليمات؟', a: 'يوصي NIST AI RMF (2023) بضوابط الحوكمة بما فيها إمكانية التتبع وتقييم المخاطر قبل النشر والاستجابة للحوادث. التحكم في إصدارات التعليمات وبوابات المراجعة تعالج الثلاثة.' },
          { q: 'هل يشترط قانون الذكاء الاصطناعي الأوروبي حوكمة التعليمات؟', a: 'نعم. يشترط قانون الذكاء الاصطناعي الأوروبي (ساري المفعول 2026) الإشراف البشري والتوثيق وإمكانية التتبع لأنظمة الذكاء الاصطناعي عالية المخاطر. التعليمات في الفئات عالية المخاطر (طبية أو قانونية أو توظيف أو ائتمان) يجب أن تمتلك تحكماً موثقاً في التغييرات.' },
          { q: 'كيف تختلف حوكمة التعليمات عن حوكمة النماذج؟', a: 'تغطي حوكمة النماذج اختيار النماذج والتدريب واختبار التحيز وسياسات النشر. تغطي حوكمة التعليمات التعليمات المُعطاة لنموذج منشور. كلتاهما مطلوبة في البيئات الخاضعة للتنظيم وهما متكاملتان لكنهما مختلفتان.' },
          { q: 'ماذا يجب أن يحتوي سجل التدقيق للتعليمات؟', a: 'يجب أن يسجل سجل تدقيق التعليمات: نص التعليمة عند كل إصدار، ومن غيّرها، ومتى، ولماذا، وما الاختبارات التي اجتازها، ومن اعتمد النشر، وأي حوادث تُعزى إليها. يجب أن يكون السجل قابلاً للاستعلام — إذا سأل مدقق عن التعليمة التي كانت تعمل في وقت محدد، يجب أن تتمكن من الإجابة في أقل من 5 دقائق.' },
        ],
      },
      related_reading: {
        title: 'قراءة ذات صلة',
        items: [
          { title: 'سير عمل مراجعة التعليمات للفرق', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'التحكم في إصدارات التعليمات', url: '/prompt-engineering/prompt-version-control' },
          { title: 'تدقيق التعليمات واختبار الانحدار', url: '/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'أدوات أمان التعليمات: اختبار الحقن', url: '/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'قوالب توثيق التعليمات', url: '/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: 'المصادر',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '团队治理',
    title: '生产环境中的Prompt治理：角色、审查门控与部署规则',
    seoTitle: '生产Prompt治理：角色定义与审查门控设计',
    intro: 'Prompt治理是一套角色、审查流程和部署规则体系，控制哪些Prompt能够进入生产环境以及如何监控上线后的运行状态。没有治理体系，Prompt的变更将无法追踪、无法测试、无法回滚。',
    metaDescription: '通过3个角色（作者、审查员、批准人）、3个审查门控、回滚程序和审计记录建立Prompt治理。符合NIST AI RMF和EU AI Act要求。',
    ogDescription: '生产Prompt治理：3角色所有权、自动测试门控、5分钟内回滚、完整审计记录。使用PromptQuorum跨模型测试。',
    twitterDescription: 'Prompt会悄无声息地失败。治理是唯一的可见性机制。3个角色，3个门控，5分钟回滚，完整审计记录。',
    publishDate: '2026-05-02',
    readTime: '14分钟阅读',
    educationalLevel: 'Advanced',
    primaryTerm: 'Prompt治理',
    leadAnswerBlock: '**Prompt治理是控制哪些Prompt在生产环境中运行的角色、审查门控和部署规则的集合。** 没有治理，Prompt就会悄无声息地被修改——没有审批记录、没有回滚路径、没有输出质量下降时的应对措施。',
    quickFacts: [
      '3角色所有权模型：作者（Author）、审查员（Reviewer）、批准人（Approver）',
      '提前配置版本控制后，回滚耗时不到5分钟',
      '三个必须门控：自动回归测试（≥90%通过率）、同行审查、安全扫描',
      '审计记录必须包含谁、做了什么、何时、为何及门控结果',
      'EU AI Act（2026年生效）要求高风险AI的Prompt具备可追溯性',
      '最小可行栈：Git + Braintrust或Promptfoo',
    ],
    toc: [
      { label: 'Prompt治理是什么及其重要性', anchor: 'what_is_governance' },
      { label: '3角色所有权模型', anchor: 'ownership_model' },
      { label: '部署前的审查门控', anchor: 'review_gates' },
      { label: '如何回滚失败的Prompt', anchor: 'rollback' },
      { label: '审计记录：需要记录什么', anchor: 'audit_trail' },
      { label: 'Prompt治理工具', anchor: 'tools' },
      { label: '常见问题', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related_reading' },
      { label: '参考来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/zh/prompt-engineering/prompt-governance-production',
      inLanguage: 'zh',
      headline: '生产环境中的Prompt治理：角色、审查门控与部署规则',
      description: '通过3个角色、3个审查门控、回滚程序和审计记录建立Prompt治理。符合NIST AI RMF和EU AI Act要求。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt治理', 'Prompt管理', '生产Prompt', 'AI治理', 'Prompt部署'],
      mentions: [
        { '@type': 'Thing', name: 'PromptHub' },
        { '@type': 'Thing', name: 'Git' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        content: [
          'Prompt治理通过3个角色（作者、审查员、批准人）、3个必须审查门控和回滚程序控制哪些Prompt进入生产环境。Prompt会悄无声息地失败——治理是唯一的可见性机制。在需要之前设置版本控制和回滚：有准备时回滚不到5分钟，没有准备则需要数小时。',
        ],
      },
      key_takeaways: {
        title: '关键要点',
        items: [
          'Prompt治理 = 角色（作者、审查员、批准人）+ 审查门控 + 回滚程序',
          'Prompt会悄无声息地失败——治理是提供部署前后可见性的唯一机制',
          '最少三个门控：自动回归测试（≥90%）、同行审查、安全扫描',
          '在需要之前设置回滚：版本标签、引用标签的部署配置、值班人员访问权限',
          '审计记录必须记录谁、做了什么、何时、为何，以及门控结果',
        ],
      },
      what_is_governance: {
        title: 'Prompt治理是什么及其重要性',
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt治理是控制哪些Prompt进入生产环境以及上线后如何监控的角色、审查门控和部署规则体系。' },
          { type: 'in-plain-terms', text: '没有治理，Prompt变更是不可见的——没有谁改了什么的记录，没有出问题时的回滚手段，也没有质量悄然下降时的警报。' },
        ],
        content: [
          '**Prompt治理是控制哪些Prompt进入生产环境、谁可以修改它们以及失败时如何处理的系统。** 它涵盖三个领域：访问控制（谁可以编写、审查和批准Prompt）、部署流程（上线前必须通过哪些测试）和事件响应（如何检测、诊断并回滚失败的Prompt）。',
          '治理的存在不是为了官僚主义。它的存在是因为Prompt会悄无声息地失败。当Prompt变更导致输出质量下降时，没有错误日志、没有异常、没有警报。',
          '当Prompt影响面向用户的功能、受监管的输出（法律、医疗、金融）或高流量自动化工作流时，使用治理体系。',
        ],
        callouts: [
          { type: 'warning', label: '静默失败', text: '导致质量下降的Prompt变更不会产生错误、异常或警报。只有通过用户投诉或监控才能发现问题——两者都是在损害已经发生之后。' },
        ],
      },
      ownership_model: {
        title: '谁拥有Prompt？3角色所有权模型',
        content: [
          '**三个角色覆盖大多数团队的Prompt治理：作者（Author）、审查员（Reviewer）和批准人（Approver）。**',
        ],
        items: [
          '作者：编写Prompt，运行初始质量测试，提交审查。',
          '审查员：检查质量、合规性和安全性。在受监管领域必须具备领域专业知识。',
          '批准人：批准或拒绝部署到生产环境。无论审查员是否签字，都有单方面阻止发布的权力。',
        ],
      },
      review_gates: {
        title: 'Prompt部署前必须通过的每个审查门控',
        content: [
          '**Prompt在生产前必须通过至少三个门控：自动质量测试、同行审查和安全扫描。** 每个门控有二值结果——通过或阻止。无例外。',
        ],
        items: [
          '门控1 — 自动测试：Prompt必须以 ≥ 90%的通过率通过回归测试套件（使用Braintrust或Promptfoo）。',
          '门控2 — 同行审查：Reviewer确认质量和合规性。至少在GPT-5.5和Claude 4.6 Sonnet上测试。',
          '门控3 — 安全扫描：检查注入向量、越狱漏洞和敏感数据泄露。',
        ],
        callouts: [
          { type: 'tip', label: '自动化门控1', text: '门控1（自动测试）应该在每次提交时运行，而不仅仅是在部署前。在提交时发现回归只需要几分钟修复；在部署时发现则需要数小时。' },
        ],
      },
      rollback: {
        title: '如何回滚生产环境中失败的Prompt',
        content: [
          '**如果版本控制提前配置好，Prompt回滚应该在5分钟内完成。** 回滚程序有四个步骤：检测（监控警报或用户报告）、识别（哪个Prompt版本导致了回归）、还原（将部署配置指向之前的版本标签）和确认（验证输出质量恢复）。',
          '最小可行设置：',
        ],
        items: [
          '每个部署的Prompt都有版本标签：v1.0、v1.1等',
          '部署配置引用标签，而不是直接引用文件',
          '保留之前3个版本，无需额外测试即可部署',
          '值班人员无需管理员批准即可写入部署配置',
        ],
      },
      rollback_part2: {
        content: [
          '回滚后，将事件作为事后分析处理。记录：更改了什么、失败了什么、检测耗时多久、解决耗时多久，以及哪个门控应该捕获该问题。',
        ],
      },
      audit_trail: {
        title: '审计记录：需要记录什么及为何记录',
        content: [
          '**Prompt的审计记录必须包含：谁修改了Prompt、修改了什么、何时、为何（变更理由），以及通过了哪些审查门控。** 这是NIST AI RMF和EU AI Act对高风险AI系统的最低要求。',
          '将审计记录存储在与Prompt相同的版本控制系统中。',
        ],
        items: [
          '作者：[姓名]',
          '审查员：[姓名] — 批准/拒绝',
          '变更：[变更内容的单行摘要]',
          '原因：[变更原因]',
          '测试结果：[通过率、测试数量、使用工具]',
          '版本：[新版本标签]',
        ],
      },
      tools: {
        title: 'Prompt治理工具',
        content: [
          '**最小可行治理栈是Git + 测试运行器。** PromptHub、Braintrust和Vellum在该基础上各自添加了结构。',
        ],
        items: [
          'Git：Prompt文件的版本控制。免费。适用于任何团队规模。',
          'PromptHub：具备版本历史、审查者工作流和部署跟踪的专用Prompt管理。',
          'Braintrust：具有CI/CD集成的评估平台。在每个PR上运行自动质量测试。',
          'Vellum：具有流量管理、A/B测试和实时评估的生产Prompt部署。',
          'PromptQuorum：多模型测试，确认Prompt在GPT-5.5、Claude 4.6 Sonnet和Gemini 2.5 Pro上部署前能正常工作。',
        ],
      },
      faq: {
        title: '常见问题',
        faqs: [
          { q: '什么是Prompt治理？', a: 'Prompt治理是控制哪些Prompt进入生产环境及如何监控的角色、流程和规则体系。' },
          { q: 'Prompt治理为何重要？', a: 'Prompt会悄无声息地失败。治理添加可见性：每个变更被追踪，每个版本可审查，每次部署可回滚。' },
          { q: '需要哪些角色？', a: '三个角色：作者、审查员和批准人。大团队添加Prompt Owner角色。' },
          { q: '如何进行回滚？', a: '用版本标签存储每个部署的Prompt。检测到回归时，将部署配置还原到之前的标签并重新部署。提前准备则不到5分钟。' },
          { q: 'EU AI Act是否要求Prompt治理？', a: '是的。EU AI Act（2026年生效）要求高风险AI系统具备可追溯性。版本控制、审查门控和审计记录直接满足这一要求。' },
          { q: 'Prompt治理与模型治理有何不同？', a: '模型治理涵盖模型选择和训练。Prompt治理涵盖给已部署模型的指令。两者互补但不同。' },
          { q: '审计记录应该包含什么？', a: '每个版本的Prompt文本、修改者、时间、原因、通过的测试、批准者和归因事件。应能在5分钟内回答特定时间点运行的是哪个Prompt。' },
          { q: 'NIST AI风险管理框架是否要求Prompt治理？', a: 'NIST AI RMF（2023年）建议对AI系统组件实施治理控制，包括可追溯性、部署前风险评估和事件响应。Prompt版本控制和审查门控满足这三项要求。' },
        ],
      },
      related_reading: {
        title: '相关阅读',
        items: [
          { title: 'Prompt Review Workflow for Teams', url: '/prompt-engineering/prompt-review-workflow-for-teams' },
          { title: 'Prompt Version Control', url: '/prompt-engineering/prompt-version-control' },
          { title: 'Prompt Audit and Regression Testing', url: '/prompt-engineering/prompt-audit-and-regression-risk' },
          { title: 'Prompt Security Tools: Injection Testing', url: '/prompt-engineering/prompt-security-tools-injection-testing' },
          { title: 'Prompt Documentation Templates', url: '/prompt-engineering/prompt-documentation-templates' },
        ],
      },
      sources: {
        title: '参考来源',
        items: [
          { title: 'NIST AI Risk Management Framework (AI RMF 1.0)', url: 'https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf' },
          { title: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' },
          { title: 'OWASP LLM Top 10', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        ],
      },
    },
  },
}
