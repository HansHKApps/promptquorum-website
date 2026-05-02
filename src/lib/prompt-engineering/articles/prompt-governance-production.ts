import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Team Governance',
    title: 'Prompt Governance in Production: Roles, Review Gates, and Deployment Rules',
    seoTitle: 'Prompt Governance in Production: Roles & Review Gates',
    intro: 'Prompt governance is the system of roles, review processes, and deployment rules that controls which prompts reach production and how they are monitored once live. Without it, prompt changes are untracked, untested, and unrollbackable.',
    metaDescription: 'Set up prompt governance with 3 roles (Author, Reviewer, Approver), 3 review gates, rollback procedures, and audit trails. NIST AI RMF and EU AI Act compliant.',
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
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'NIST AI Risk Management Framework' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is prompt governance?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt governance is the system of roles, review processes, and deployment rules that controls which prompts reach production and how they are monitored. It includes who can author prompts, who must approve them, what tests must pass before deployment, and what happens when a prompt fails in production.' } },
        { '@type': 'Question', name: 'Why does prompt governance matter in production?', acceptedAnswer: { '@type': 'Answer', text: 'Prompts fail silently — no error log, no exception, no alert. Output quality degrades without any visible signal. Governance adds visibility: every change is tracked, every version is reviewable, every deployment can be rolled back. Without it, a single poorly-tested prompt change can degrade thousands of user interactions before anyone notices.' } },
        { '@type': 'Question', name: 'What roles are needed for prompt governance?', acceptedAnswer: { '@type': 'Answer', text: 'Three roles cover most teams: Author (writes the prompt, runs initial tests), Reviewer (domain or safety expert who checks for quality and compliance), and Approver (approves deployment to production). Large teams add a Prompt Owner role — a single person accountable for a prompt\'s live performance across all model versions.' } },
        { '@type': 'Question', name: 'How do I roll back a bad prompt in production?', acceptedAnswer: { '@type': 'Answer', text: 'Store every deployed prompt with a version tag in Git or PromptHub. When a regression is detected, revert to the previous version in your deployment config and redeploy. This takes under 5 minutes if version control is set up in advance. Teams without version control typically take hours to diagnose and fix the same incident.' } },
        { '@type': 'Question', name: 'Does the NIST AI Risk Management Framework require prompt governance?', acceptedAnswer: { '@type': 'Answer', text: 'The NIST AI Risk Management Framework (AI RMF, 2023) recommends governance controls for AI system components including prompts. Specific requirements include traceability (who changed what and when), risk assessment before deployment, and incident response procedures. Prompt version control and review gates address all three.' } },
        { '@type': 'Question', name: 'Does the EU AI Act require prompt governance?', acceptedAnswer: { '@type': 'Answer', text: 'The EU AI Act (effective 2026) classifies high-risk AI systems as requiring human oversight, documentation, and traceability. Prompts used in high-risk categories (medical, legal, hiring, credit) must have documented change control. Prompt governance — specifically version control, review gates, and audit trails — directly satisfies the traceability requirement.' } },
        { '@type': 'Question', name: 'How is prompt governance different from model governance?', acceptedAnswer: { '@type': 'Answer', text: 'Model governance covers model selection, training, bias testing, and deployment policies. Prompt governance covers what instructions are given to a deployed model and whether those instructions are controlled, tested, and auditable. Both are required in regulated environments; they are complementary but distinct.' } },
        { '@type': 'Question', name: 'What should an audit trail for prompts contain?', acceptedAnswer: { '@type': 'Answer', text: 'A prompt audit trail must record: prompt text at each version, who changed it, when, why (change rationale), which tests it passed, who approved deployment, and any incidents attributed to it. Store this in Git commit history or a purpose-built tool like PromptHub. The trail must be queryable — if an auditor asks "what prompt was live at 2:00pm on date X?", you should be able to answer in under 5 minutes.' } },
      ],
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
          'Add a Prompt Owner role for high-traffic production prompts. The Prompt Owner is accountable for the prompt\'s live performance across all model versions — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro — and is the first contact during incidents.',
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
          'Gate 2 — Peer review: a Reviewer signs off on quality and compliance. The review checklist covers: task completeness, format compliance, safety constraints, and model-specific behavior (test on GPT-4o and Claude 4.6 Sonnet at minimum).',
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
          'PromptQuorum: multi-model testing to confirm a prompt works across GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro before deployment. Use during Gate 2 peer review.',
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
    metaDescription: 'Prompt-Governance mit 3 Rollen (Autor, Reviewer, Genehmiger), 3 Review-Gates, Rollback-Verfahren und Audit-Trail einrichten. NIST AI RMF und EU AI Act konform.',
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
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-governance-production?lang=de',
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
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist Prompt-Governance?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt-Governance ist das System aus Rollen, Reviewprozessen und Deployment-Regeln, das kontrolliert, welche Prompts in die Produktion gelangen und wie sie überwacht werden. Es umfasst, wer Prompts erstellen darf, wer sie genehmigen muss, welche Tests vor dem Deployment bestanden werden müssen und was bei einem Prompt-Ausfall in der Produktion passiert.' } },
        { '@type': 'Question', name: 'Warum ist Prompt-Governance in der Produktion wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Prompts scheitern lautlos — kein Fehlerprotokoll, keine Ausnahme, kein Alert. Die Ausgabequalität verschlechtert sich ohne sichtbares Signal. Governance fügt Sichtbarkeit hinzu: Jede Änderung wird verfolgt, jede Version ist überprüfbar, jedes Deployment kann zurückgerollt werden.' } },
        { '@type': 'Question', name: 'Wie stelle ich ein Rollback für einen fehlerhaften Prompt durch?', acceptedAnswer: { '@type': 'Answer', text: 'Speichern Sie jeden deployten Prompt mit einem Versions-Tag in Git oder PromptHub. Wenn eine Regression erkannt wird, setzen Sie die Deployment-Konfiguration auf den vorherigen Versions-Tag zurück und deployen Sie erneut. Bei vorbereiteter Versionskontrolle dauert dies unter 5 Minuten.' } },
        { '@type': 'Question', name: 'Fordert der EU AI Act Prompt-Governance?', acceptedAnswer: { '@type': 'Answer', text: 'Der EU AI Act (ab 2026) klassifiziert Hochrisiko-KI-Systeme als solche, die menschliche Aufsicht, Dokumentation und Rückverfolgbarkeit erfordern. Prompts in Hochrisiko-Kategorien (Medizin, Recht, Einstellung, Kredit) müssen dokumentierte Änderungskontrolle haben. Prompt-Governance — insbesondere Versionskontrolle, Review-Gates und Audit-Trails — erfüllt direkt die Rückverfolgbarkeitsanforderung.' } },
        { '@type': 'Question', name: 'Wie unterscheidet sich Prompt-Governance von Modell-Governance?', acceptedAnswer: { '@type': 'Answer', text: 'Modell-Governance umfasst Modellauswahl, Training, Bias-Tests und Deployment-Richtlinien. Prompt-Governance umfasst, welche Anweisungen einem deployten Modell gegeben werden und ob diese Anweisungen kontrolliert, getestet und auditierbar sind. Beide sind in regulierten Umgebungen erforderlich; sie ergänzen sich, sind aber unterschiedlich.' } },
        { '@type': 'Question', name: 'Was muss ein Audit-Trail für Prompts enthalten?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Prompt-Audit-Trail muss erfassen: Prompt-Text in jeder Version, wer ihn geändert hat, wann, warum (Änderungsbegründung), welche Tests bestanden wurden, wer das Deployment genehmigt hat und etwaige Vorfälle. Wenn ein Prüfer fragt, welcher Prompt zu einem bestimmten Zeitpunkt live war, sollten Sie in unter 5 Minuten antworten können.' } },
      ],
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
          'Gate 2 — Peer-Review: ein Reviewer gibt die Qualität und Compliance frei. Mindestens auf GPT-4o und Claude 4.6 Sonnet testen.',
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
          'PromptQuorum: Multi-Modell-Tests zur Bestätigung, dass ein Prompt über GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro funktioniert.',
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

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Gouvernance d\'équipe',
    title: 'Gouvernance des prompts en production : rôles, gates de révision et règles de déploiement',
    seoTitle: 'Gouvernance des prompts en production : rôles et gates de révision',
    intro: 'La gouvernance des prompts est le système de rôles, de processus de révision et de règles de déploiement qui contrôle quels prompts atteignent la production et comment ils sont surveillés. Sans elle, les changements de prompts ne sont pas suivis, pas testés et ne peuvent pas être annulés.',
    metaDescription: 'Mettre en place la gouvernance des prompts avec 3 rôles (Auteur, Réviseur, Approbateur), 3 gates de révision, procédures de rollback et pistes d\'audit. Conforme NIST AI RMF et EU AI Act.',
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
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-governance-production?lang=fr',
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
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Qu\'est-ce que la gouvernance des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'La gouvernance des prompts est le système de rôles, de processus de révision et de règles de déploiement qui contrôle quels prompts atteignent la production. Elle couvre qui peut créer des prompts, qui doit les approuver, quels tests doivent être réussis avant le déploiement, et que faire en cas d\'échec en production.' } },
        { '@type': 'Question', name: 'Comment annuler un prompt défaillant en production ?', acceptedAnswer: { '@type': 'Answer', text: 'Stockez chaque prompt déployé avec un tag de version dans Git ou PromptHub. Quand une régression est détectée, revenez au tag de version précédent dans la config de déploiement et redéployez. Si le contrôle de version est configuré à l\'avance, cela prend moins de 5 minutes.' } },
        { '@type': 'Question', name: 'L\'EU AI Act exige-t-il la gouvernance des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'L\'EU AI Act (en vigueur 2026) classe les systèmes IA à haut risque comme nécessitant la supervision humaine, la documentation et la traçabilité. Les prompts utilisés dans des catégories à haut risque (médical, juridique, recrutement, crédit) doivent avoir un contrôle des modifications documenté. La gouvernance des prompts satisfait directement l\'exigence de traçabilité.' } },
        { '@type': 'Question', name: 'Quelle est la différence entre gouvernance des prompts et gouvernance des modèles ?', acceptedAnswer: { '@type': 'Answer', text: 'La gouvernance des modèles couvre la sélection, l\'entraînement, les tests de biais et les politiques de déploiement des modèles. La gouvernance des prompts couvre les instructions données à un modèle déployé. Les deux sont complémentaires mais distincts.' } },
        { '@type': 'Question', name: 'Que doit contenir une piste d\'audit pour les prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Une piste d\'audit de prompt doit enregistrer : le texte du prompt à chaque version, qui l\'a modifié, quand, pourquoi, quels tests ont été réussis, qui a approuvé le déploiement, et tout incident attribué à ce prompt. La piste doit être interrogeable en moins de 5 minutes.' } },
      ],
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
          'Gate 2 — Revue par les pairs : un Réviseur valide la qualité et la conformité. Tester sur GPT-4o et Claude 4.6 Sonnet au minimum.',
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
          'PromptQuorum : tests multi-modèles pour confirmer qu\'un prompt fonctionne sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro.',
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
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-governance-production?lang=ja',
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
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Promptガバナンスとは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Promptガバナンスとは、どのPromptが本番環境に到達し、どのように監視されるかを制御する役割・プロセス・ルールのシステムです。誰がPromptを作成できるか、誰が承認しなければならないか、デプロイ前にどのテストに合格する必要があるか、本番でPromptが失敗した場合に何が起こるかを定義します。' } },
        { '@type': 'Question', name: '本番環境で失敗したPromptをロールバックするには？', acceptedAnswer: { '@type': 'Answer', text: 'デプロイしたすべてのPromptをGitまたはPromptHubにバージョンタグ付きで保存します。回帰が検出されたら、デプロイ設定を前のバージョンタグに戻し、再デプロイします。バージョン管理が事前に設定されていれば5分未満で完了します。' } },
        { '@type': 'Question', name: 'EU AI ActはPromptガバナンスを要求していますか？', acceptedAnswer: { '@type': 'Answer', text: 'EU AI Act（2026年施行）は、高リスクAIシステムに人間の監督、文書化、追跡可能性を要求します。高リスクカテゴリ（医療、法律、採用、信用）で使用するPromptは文書化された変更管理が必要です。Promptガバナンス — 特にバージョン管理、レビューゲート、監査証跡 — は追跡可能性要件を直接満たします。' } },
        { '@type': 'Question', name: 'Promptガバナンスとモデルガバナンスの違いは？', acceptedAnswer: { '@type': 'Answer', text: 'モデルガバナンスはモデルの選択、トレーニング、バイアステスト、デプロイポリシーをカバーします。Promptガバナンスはデプロイされたモデルへの指示をカバーします。規制環境では両方が必要で、補完的ですが異なります。' } },
        { '@type': 'Question', name: 'Promptの監査証跡には何が含まれる必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'Promptの監査証跡には、各バージョンのPromptテキスト、誰が変更したか、いつ、なぜ（変更理由）、どのテストに合格したか、誰がデプロイを承認したか、起因するインシデントを記録する必要があります。監査員が特定の時刻にどのPromptが稼働していたかを尋ねた場合、5分未満で回答できる必要があります。' } },
      ],
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
          'ゲート2 — ピアレビュー：Reviewerが品質とコンプライアンスを承認。最低GPT-4oとClaude 4.6 Sonnetでテスト。',
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
          'PromptQuorum：デプロイ前にGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proでの動作を確認するマルチモデルテスト。',
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
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-governance-production?lang=zh',
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
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-governance-production', width: 1200, height: 630 },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '什么是Prompt治理？', acceptedAnswer: { '@type': 'Answer', text: 'Prompt治理是控制哪些Prompt进入生产环境及如何监控的角色、流程和规则体系。它涵盖谁可以编写Prompt、谁必须审批、部署前必须通过哪些测试，以及Prompt在生产环境中失败时如何处理。' } },
        { '@type': 'Question', name: '如何回滚生产环境中的问题Prompt？', acceptedAnswer: { '@type': 'Answer', text: '在Git或PromptHub中为每个部署的Prompt存储版本标签。当检测到回归时，将部署配置还原到之前的版本标签并重新部署。如果版本控制提前配置好，整个过程不到5分钟。' } },
        { '@type': 'Question', name: 'NIST AI风险管理框架是否要求Prompt治理？', acceptedAnswer: { '@type': 'Answer', text: 'NIST AI风险管理框架（AI RMF，2023年）建议对包括Prompt在内的AI系统组件实施治理控制措施，包括可追溯性、部署前风险评估和事件响应程序。Prompt版本控制和审查门控可满足这三项要求。' } },
        { '@type': 'Question', name: 'EU AI Act是否要求Prompt治理？', acceptedAnswer: { '@type': 'Answer', text: 'EU AI Act（2026年生效）将高风险AI系统归类为需要人工监督、文档记录和可追溯性的系统。高风险类别（医疗、法律、招聘、信用）中使用的Prompt必须有文档化的变更控制。Prompt治理——尤其是版本控制、审查门控和审计记录——直接满足可追溯性要求。' } },
        { '@type': 'Question', name: 'Prompt治理与模型治理有何不同？', acceptedAnswer: { '@type': 'Answer', text: '模型治理涵盖模型选择、训练、偏见测试和部署政策。Prompt治理涵盖给已部署模型的指令是否受控、经过测试和可审计。两者在受监管环境中都是必要的，互补但不同。' } },
        { '@type': 'Question', name: 'Prompt的审计记录应该包含什么？', acceptedAnswer: { '@type': 'Answer', text: 'Prompt审计记录必须包括：每个版本的Prompt文本、谁修改了它、何时、为何（变更理由）、通过了哪些测试、谁批准了部署以及任何归因于它的事件。如果审计员询问特定时间点正在运行哪个Prompt，应该能在5分钟内回答。' } },
      ],
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
          '门控2 — 同行审查：Reviewer确认质量和合规性。至少在GPT-4o和Claude 4.6 Sonnet上测试。',
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
          'PromptQuorum：多模型测试，确认Prompt在GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro上部署前能正常工作。',
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
