import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'Prompt Engineering Workflow for Developers: IDE Setup, Testing, and CI/CD Integration',
    seoTitle: 'Prompt Engineering for Developers: IDE & CI/CD Setup',
    metaDescription: 'Developer prompt engineering workflow: IDE setup (Cursor, VS Code + Continue.dev), local test loop, Git version control, CI/CD gates with Promptfoo or Braintrust, production monitoring.',
    ogDescription: 'The complete developer prompt engineering workflow — IDE setup with Cursor and Continue.dev, local testing loop, Git version control, CI/CD integration with Promptfoo, and production monitoring.',
    twitterDescription: 'Developer PE workflow: Cursor/VS Code setup, local test loop, Git for prompts, CI/CD gates with Promptfoo. End-to-end from IDE to production.',
    publishDate: '2026-05-02',
    readTime: '12 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'Prompt Engineering Workflow',
    leadAnswerBlock: '**Developers need a prompt engineering workflow that fits into their existing development process — version control, CI/CD, and local testing — not a separate tool ecosystem.** The workflow covers 5 stages: write, test locally, version, gate in CI/CD, and monitor in production.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt Engineering Workflow for Developers: IDE Setup, Testing, and CI/CD Integration',
      description: 'Developer prompt engineering workflow: IDE setup, local test loop, Git version control, CI/CD gates, and production monitoring.',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-developers-workflow', width: 1200, height: 630 },
      inLanguage: 'en',
      keywords: ['prompt engineering workflow', 'developer prompts', 'CI/CD prompts', 'Promptfoo', 'Cursor IDE', 'Continue.dev', 'prompt version control'],
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering Workflow' },
        { '@type': 'Thing', name: 'CI/CD for LLMs' },
        { '@type': 'Thing', name: 'Prompt Version Control' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What IDE is best for prompt engineering?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cursor is the recommended IDE for developers who work primarily in TypeScript or Python and want native AI integration with prompt files treated as first-class citizens. VS Code with Continue.dev is recommended if you need local model support, open-source requirements, or work in a language ecosystem not well-supported by Cursor.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should you store prompts in version control?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Store prompts as .txt or .ts files in a /prompts directory at the root of your repository. Use the naming convention [task]-[version].txt (e.g., customer-support-v3.txt). Use conventional commit message format for prompt changes (feat:, fix:, refactor:). Add Git tags for every version deployed to production.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you set up a CI/CD gate for prompts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Add a GitHub Actions workflow step that runs Promptfoo or Braintrust against your test suite on every pull request. Configure the step to fail the build if the pass rate drops below a threshold — start at 85% and raise to 95% after 3 months of stable tests. Store the pass rate threshold in a config file in your repository so it is versioned with the prompt.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should you log for production prompt monitoring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Log prompt inputs (or a hash of them if they contain PII), model responses, latency, token counts, and a quality score from an evaluator. For prompts handling user data, retain logs for at least 30 days and set up alerts for quality score drops greater than 10% over a 24-hour rolling window.',
          },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Set Up CI/CD Gates for Prompts',
      description: 'Step-by-step process for adding CI/CD quality gates to prompt engineering workflows using GitHub Actions and Promptfoo.',
      step: [
        { '@type': 'HowToStep', name: 'Create a Promptfoo config file', text: 'Add a promptfooconfig.yaml to your repository root that defines your test cases, evaluation criteria, and pass threshold.' },
        { '@type': 'HowToStep', name: 'Add a GitHub Actions workflow', text: 'Create .github/workflows/prompt-test.yml that runs on every pull request and installs Promptfoo.' },
        { '@type': 'HowToStep', name: 'Run the test suite', text: 'Add a step that executes `promptfoo eval --config promptfooconfig.yaml` and captures the pass rate.' },
        { '@type': 'HowToStep', name: 'Set a pass threshold', text: 'Configure the workflow to fail if pass rate is below 85%. Raise to 95% after 3 months of stable results.' },
        { '@type': 'HowToStep', name: 'Require the check to pass before merge', text: 'Add the prompt-test job as a required status check in your repository branch protection rules.' },
      ],
    },
    sections: {
      ide_setup: {
        id: 'ide-setup',
        title: 'IDE Setup for Prompt Engineering',
        content: [
          '**Two IDEs cover most developer prompt engineering needs: Cursor (native AI integration, prompts as first-class citizens) and VS Code with Continue.dev (open source, local model support).** The choice depends on your primary language and model access requirements.',
          'Cursor treats prompt files natively — you can reference, edit, and test prompts directly in the editor alongside your application code. It has native integration with OpenAI-compatible APIs and supports TypeScript and Python well. Use Cursor if you work primarily in these languages and want the lowest-friction prompt editing experience.',
          'VS Code with Continue.dev is open source, supports local models via Ollama, and works with any language ecosystem. Continue.dev provides in-editor prompt completion and modification. Use VS Code + Continue.dev if you have open-source requirements, need to run models locally for privacy or cost reasons, or work in a language ecosystem not well-supported by Cursor.',
          'Decision: use Cursor if you work primarily in TypeScript or Python and your team uses cloud APIs. Use VS Code + Continue.dev if you need local model support, open-source requirements, or your organization has restrictions on cloud API usage.',
        ],
      },
      local_test_loop: {
        id: 'local-test-loop',
        title: 'The Local Prompt Testing Loop',
        content: [
          '**The local prompt testing loop has 4 steps: write the prompt, test it on 3 representative inputs, compare against baseline, and commit if passing.** This loop should take under 30 seconds with Promptfoo configured locally.',
          'Step 1: Write or edit the prompt in your IDE. Step 2: Run the prompt against 3 representative inputs — one typical input, one edge case, and one that previously caused a failure. Step 3: Compare output against baseline (the last committed version). Step 4: If quality holds or improves, commit with a conventional message.',
          'To set up Promptfoo for the local loop: install with `npm install -g promptfoo`, create a `promptfooconfig.yaml` in your project root with 3 test cases and an LLM-as-judge evaluator. Run `promptfoo eval` to execute the test suite. Total setup time is under 15 minutes for an existing prompt.',
          'The baseline comparison is the key step. Without it, you are testing absolute quality but not relative quality — the prompt might pass all tests and still be worse than the previous version on subtle dimensions.',
        ],
      },
      version_control: {
        id: 'version-control',
        title: 'Storing Prompts in Version Control',
        content: [
          '**Store prompts as `.txt` or `.ts` files in a `/prompts` directory at the repository root.** Versioning prompts in Git gives you the same benefits as versioning code: full history, blame, rollback, and PR-based review.',
          'Naming convention: `[task]-[version].txt` — for example, `customer-support-v3.txt`, `email-draft-v1.txt`. Use sequential version numbers, not dates. When a prompt is retired, move it to `/prompts/archive/` rather than deleting it.',
          'Commit message format for prompt changes: use conventional commits — `feat: add few-shot examples to customer-support prompt`, `fix: reduce hallucination in email-draft prompt`, `refactor: simplify chain-of-thought in summarizer prompt`. This makes prompt changes visible in standard `git log` output alongside code changes.',
          'Git tags for production versions: after every successful production deployment, tag the commit with `prompts/[task]/[version]` (e.g., `prompts/customer-support/v3`). These tags serve as the rollback targets when you need to revert a prompt change in production.',
        ],
      },
      cicd_gates: {
        id: 'cicd-gates',
        title: 'CI/CD Gates for Prompts',
        content: [
          '**Add a GitHub Actions workflow that runs Promptfoo or Braintrust on every pull request and fails the build if the pass rate drops below a threshold.** Start the threshold at 85% and raise it to 95% after 3 months of stable tests.',
          'GitHub Actions workflow structure: create `.github/workflows/prompt-test.yml` with a job that triggers on `pull_request`, installs Promptfoo, runs `promptfoo eval --config promptfooconfig.yaml`, and fails if exit code is non-zero (Promptfoo exits with code 1 if any test fails below threshold).',
          'Threshold strategy: start at 85% to allow some variance while still catching major regressions. After 3 months of stable tests with no false failures, raise to 95%. If you have critical prompts (customer-facing, financial, medical), start at 90%.',
          'Add the prompt-test job as a required status check in your repository branch protection settings. This prevents merging any PR where a prompt change causes a test failure, without blocking PRs that do not touch prompts.',
        ],
      },
      production_monitoring: {
        id: 'production-monitoring',
        title: 'Production Monitoring for Prompts',
        content: [
          '**Log prompt inputs and outputs, run a quality scorer on every response, and set alerts for quality score drops greater than 10% over a 24-hour rolling window.** Monitor all prompts handling user data; log-only is acceptable for internal prompts.',
          'What to log: prompt identifier and version, model name, input token count, output token count, latency in milliseconds, and a quality score from an evaluator. For prompts that handle personal data, log a hash of the input rather than the raw input to avoid storing PII in logs.',
          'Quality scoring options: Braintrust provides a cloud-based evaluator with per-response scoring and dashboards. For a self-hosted approach, run a lightweight LLM-as-judge call on a sample of 10% of responses. Log the score alongside the response.',
          'Alert thresholds: trigger an alert if average quality score drops more than 10% compared to the 7-day rolling average, if latency exceeds 2x the baseline P95, or if error rate exceeds 1%. Route prompt-specific alerts to the team that owns the prompt, not a general DevOps queue.',
        ],
      },
      key_takeaways: {
        id: 'key-takeaways',
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          'Use Cursor for TypeScript/Python with cloud APIs. Use VS Code + Continue.dev for local models or open-source requirements.',
          'The local test loop has 4 steps: write, test on 3 representative inputs, compare against baseline, commit if passing. Target under 30 seconds with Promptfoo.',
          'Store prompts as .txt or .ts files in /prompts. Use naming convention [task]-[version].txt. Tag production-deployed versions in Git.',
          'Add a GitHub Actions CI/CD gate that fails the build if pass rate drops below 85%. Raise to 95% after 3 months of stable tests.',
          'Log prompt identifier, model, token counts, latency, and quality score in production. Alert on quality score drops greater than 10% over 24 hours.',
          'Monitor all prompts handling user data with quality scoring. Log-only monitoring is acceptable for internal-only prompts.',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisierung',
    title: 'Prompt-Engineering-Workflow für Entwickler: IDE-Setup, Tests und CI/CD-Integration',
    seoTitle: 'Prompt Engineering für Entwickler: IDE & CI/CD-Setup',
    metaDescription: 'Entwickler-Prompt-Engineering-Workflow: IDE-Setup (Cursor, VS Code + Continue.dev), lokale Testschleife, Git-Versionskontrolle, CI/CD-Gates mit Promptfoo oder Braintrust, Produktionsmonitoring.',
    ogDescription: 'Der vollständige Entwickler-Prompt-Engineering-Workflow — IDE-Setup mit Cursor und Continue.dev, lokale Testschleife, Git-Versionskontrolle, CI/CD-Integration mit Promptfoo und Produktionsmonitoring.',
    twitterDescription: 'Entwickler-PE-Workflow: Cursor/VS Code-Setup, lokale Testschleife, Git für Prompts, CI/CD-Gates mit Promptfoo. Von der IDE bis zur Produktion.',
    publishDate: '2026-05-02',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Fortgeschritten',
    primaryTerm: 'Prompt-Engineering-Workflow',
    intro: '**Entwickler benötigen einen Prompt-Engineering-Workflow, der in ihren bestehenden Entwicklungsprozess passt — Versionskontrolle, CI/CD und lokale Tests — kein separates Tool-Ökosystem.** Der Workflow umfasst 5 Phasen: Schreiben, lokal testen, versionieren, in CI/CD absichern und in der Produktion überwachen.',
    leadAnswerBlock: '**Entwickler benötigen einen Prompt-Engineering-Workflow, der in ihren bestehenden Entwicklungsprozess passt — Versionskontrolle, CI/CD und lokale Tests — kein separates Tool-Ökosystem.** Der Workflow umfasst 5 Phasen: Schreiben, lokal testen, versionieren, in CI/CD absichern und in der Produktion überwachen.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt-Engineering-Workflow für Entwickler: IDE-Setup, Tests und CI/CD-Integration',
      description: 'Entwickler-Prompt-Engineering-Workflow: IDE-Setup, lokale Testschleife, Git-Versionskontrolle, CI/CD-Gates und Produktionsmonitoring.',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-developers-workflow', width: 1200, height: 630 },
      inLanguage: 'de',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche IDE ist für Prompt Engineering am besten geeignet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cursor ist empfohlen für Entwickler, die hauptsächlich in TypeScript oder Python arbeiten und eine native KI-Integration wünschen. VS Code mit Continue.dev wird empfohlen, wenn lokale Modellunterstützung, Open-Source-Anforderungen oder sprachspezifische Ökosysteme benötigt werden.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie sollten Prompts in der Versionskontrolle gespeichert werden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prompts als .txt- oder .ts-Dateien in einem /prompts-Verzeichnis speichern. Namenskonvention: [task]-[version].txt. Conventional Commits für Prompt-Änderungen verwenden. Git-Tags für jede in der Produktion deploygte Version setzen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie richtet man ein CI/CD-Gate für Prompts ein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GitHub Actions Workflow hinzufügen, der Promptfoo oder Braintrust bei jedem Pull Request ausführt. Den Build scheitern lassen, wenn die Bestehensquote unter einen Schwellenwert fällt — mit 85% beginnen, nach 3 Monaten stabiler Tests auf 95% erhöhen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was sollte für das Produktionsmonitoring von Prompts geloggt werden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prompt-Inputs (oder deren Hash bei personenbezogenen Daten), Modellantworten, Latenz, Token-Anzahl und einen Qualitätsscore eines Evaluators loggen. Für Prompts, die Nutzerdaten verarbeiten, Logs mindestens 30 Tage aufbewahren.',
          },
        },
      ],
    },
    sections: {
      ide_setup: {
        id: 'ide-setup',
        title: 'IDE-Setup für Prompt Engineering',
        content: [
          '**Zwei IDEs decken die meisten Entwickler-Prompt-Engineering-Anforderungen ab: Cursor (native KI-Integration, Prompts als First-Class-Citizens) und VS Code mit Continue.dev (Open Source, lokale Modellunterstützung).** Die Wahl hängt von der primären Programmiersprache und den Modell-Zugriffsanforderungen ab.',
          'Cursor behandelt Prompt-Dateien nativ — Sie können Prompts direkt im Editor neben Ihrem Anwendungscode referenzieren, bearbeiten und testen. Es bietet native Integration mit OpenAI-kompatiblen APIs und unterstützt TypeScript und Python gut. Verwenden Sie Cursor, wenn Sie hauptsächlich in diesen Sprachen arbeiten.',
          'VS Code mit Continue.dev ist Open Source, unterstützt lokale Modelle über Ollama und funktioniert mit jedem Sprachökosystem. Continue.dev bietet In-Editor-Prompt-Vervollständigung und -Bearbeitung. Verwenden Sie VS Code + Continue.dev bei Open-Source-Anforderungen oder bei der Notwendigkeit, Modelle lokal auszuführen.',
        ],
      },
      local_test_loop: {
        id: 'local-test-loop',
        title: 'Die lokale Prompt-Testschleife',
        content: [
          '**Die lokale Prompt-Testschleife hat 4 Schritte: Prompt schreiben, auf 3 repräsentativen Eingaben testen, mit der Baseline vergleichen und committen, wenn erfolgreich.** Diese Schleife sollte mit lokal konfiguriertem Promptfoo unter 30 Sekunden dauern.',
          'Schritt 1: Prompt im IDE schreiben oder bearbeiten. Schritt 2: Prompt gegen 3 repräsentative Eingaben ausführen — eine typische Eingabe, einen Edge Case und eine, die zuvor einen Fehler verursacht hat. Schritt 3: Ausgabe mit der Baseline vergleichen (letzte committete Version). Schritt 4: Bei gleichbleibender oder verbesserter Qualität mit einer Conventional-Commit-Message committen.',
          'Promptfoo für die lokale Schleife einrichten: mit `npm install -g promptfoo` installieren, eine `promptfooconfig.yaml` im Projektstamm mit 3 Testfällen und einem LLM-as-Judge-Evaluator erstellen. `promptfoo eval` ausführen. Die Gesamteinrichtungszeit beträgt unter 15 Minuten für einen bestehenden Prompt.',
        ],
      },
      version_control: {
        id: 'version-control',
        title: 'Prompts in der Versionskontrolle speichern',
        content: [
          '**Prompts als `.txt`- oder `.ts`-Dateien in einem `/prompts`-Verzeichnis im Repository-Stamm speichern.** Die Versionierung von Prompts in Git bietet dieselben Vorteile wie die Versionierung von Code: vollständige Historie, Blame, Rollback und PR-basierte Überprüfung.',
          'Namenskonvention: `[task]-[version].txt` — zum Beispiel `kundenbetreuung-v3.txt`, `email-entwurf-v1.txt`. Sequentielle Versionsnummern verwenden, keine Datumsangaben. Veraltete Prompts in `/prompts/archive/` verschieben statt löschen.',
          'Conventional Commits für Prompt-Änderungen verwenden: `feat: Few-Shot-Beispiele zum Kundenbetreuungs-Prompt hinzugefügt`, `fix: Halluzination im E-Mail-Entwurfs-Prompt reduziert`. Git-Tags für jede erfolgreich in der Produktion deploygte Version setzen: `prompts/[task]/[version]`.',
        ],
      },
      cicd_gates: {
        id: 'cicd-gates',
        title: 'CI/CD-Gates für Prompts',
        content: [
          '**Einen GitHub Actions Workflow hinzufügen, der Promptfoo oder Braintrust bei jedem Pull Request ausführt und den Build scheitern lässt, wenn die Bestehensquote unter einen Schwellenwert fällt.** Mit 85% beginnen und nach 3 Monaten stabiler Tests auf 95% erhöhen.',
          'GitHub Actions Workflow-Struktur: `.github/workflows/prompt-test.yml` mit einem Job erstellen, der bei `pull_request` ausgelöst wird, Promptfoo installiert, `promptfoo eval --config promptfooconfig.yaml` ausführt und bei einem Exit-Code ungleich null fehlschlägt.',
          'Schwellenwert-Strategie: Mit 85% beginnen, um etwas Varianz zu erlauben, während größere Regressionen dennoch abgefangen werden. Nach 3 Monaten stabiler Tests ohne Fehlalarme auf 95% erhöhen. Den prompt-test-Job als erforderliche Statusprüfung in den Branch-Protection-Einstellungen hinzufügen.',
        ],
      },
      production_monitoring: {
        id: 'production-monitoring',
        title: 'Produktionsmonitoring für Prompts',
        content: [
          '**Prompt-Inputs und -Outputs loggen, einen Qualitätsscorer für jede Antwort ausführen und Alerts bei Qualitätsscore-Abfällen von mehr als 10% über ein 24-Stunden-Rollfenster setzen.** Alle Prompts, die Nutzerdaten verarbeiten, überwachen.',
          'Was geloggt werden soll: Prompt-Identifier und -Version, Modellname, Eingabe-Token-Anzahl, Ausgabe-Token-Anzahl, Latenz in Millisekunden und ein Qualitätsscore. Für Prompts, die personenbezogene Daten verarbeiten (DSGVO-relevant), einen Hash der Eingabe statt der Roheingabe loggen.',
          'Qualitätsbewertungsoptionen: Braintrust bietet einen Cloud-Evaluator mit Scoring je Antwort und Dashboards. Für einen selbst gehosteten Ansatz einen leichtgewichtigen LLM-as-Judge-Aufruf auf 10% der Antworten ausführen. Alerts auslösen, wenn der durchschnittliche Qualitätsscore um mehr als 10% gegenüber dem 7-Tage-Rollmittel fällt.',
        ],
      },
      key_takeaways: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Cursor für TypeScript/Python mit Cloud-APIs verwenden. VS Code + Continue.dev für lokale Modelle oder Open-Source-Anforderungen.',
          'Die lokale Testschleife hat 4 Schritte: schreiben, auf 3 repräsentativen Eingaben testen, mit der Baseline vergleichen, committen. Ziel: unter 30 Sekunden mit Promptfoo.',
          'Prompts als .txt- oder .ts-Dateien in /prompts speichern. Namenskonvention [task]-[version].txt. Produktionsversionen in Git taggen.',
          'GitHub Actions CI/CD-Gate hinzufügen, das den Build scheitern lässt, wenn die Bestehensquote unter 85% fällt. Nach 3 Monaten auf 95% erhöhen.',
          'In der Produktion Prompt-Identifier, Modell, Token-Anzahl, Latenz und Qualitätsscore loggen. Bei Qualitätsscore-Abfällen von mehr als 10% über 24 Stunden alarmieren.',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows et automatisation',
    title: 'Workflow de prompt engineering pour les développeurs : configuration IDE, tests et intégration CI/CD',
    seoTitle: 'Prompt engineering pour les développeurs : IDE & CI/CD',
    metaDescription: 'Workflow de prompt engineering pour développeurs : configuration IDE (Cursor, VS Code + Continue.dev), boucle de test locale, contrôle de version Git, gates CI/CD avec Promptfoo ou Braintrust, monitoring en production.',
    ogDescription: 'Le workflow complet de prompt engineering pour les développeurs — configuration IDE avec Cursor et Continue.dev, boucle de test locale, contrôle de version Git, intégration CI/CD avec Promptfoo et monitoring en production.',
    twitterDescription: 'Workflow PE pour développeurs : configuration Cursor/VS Code, boucle de test locale, Git pour les prompts, gates CI/CD avec Promptfoo. De l\'IDE à la production.',
    publishDate: '2026-05-02',
    readTime: '12 min de lecture',
    educationalLevel: 'Avancé',
    primaryTerm: 'Workflow de prompt engineering',
    intro: '**Les développeurs ont besoin d\'un workflow de prompt engineering qui s\'intègre dans leur processus de développement existant — contrôle de version, CI/CD et tests locaux — et non d\'un écosystème d\'outils séparé.** Le workflow couvre 5 étapes : écrire, tester localement, versionner, bloquer en CI/CD et monitorer en production.',
    leadAnswerBlock: '**Les développeurs ont besoin d\'un workflow de prompt engineering qui s\'intègre dans leur processus de développement existant — contrôle de version, CI/CD et tests locaux — et non d\'un écosystème d\'outils séparé.** Le workflow couvre 5 étapes : écrire, tester localement, versionner, bloquer en CI/CD et monitorer en production.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Workflow de prompt engineering pour les développeurs : configuration IDE, tests et intégration CI/CD',
      description: 'Workflow de prompt engineering pour développeurs : configuration IDE, boucle de test locale, contrôle de version Git, gates CI/CD et monitoring en production.',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-developers-workflow', width: 1200, height: 630 },
      inLanguage: 'fr',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel IDE est le meilleur pour le prompt engineering ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cursor est recommandé pour les développeurs qui travaillent principalement en TypeScript ou Python et souhaitent une intégration IA native. VS Code avec Continue.dev est recommandé si vous avez besoin de la prise en charge de modèles locaux, d\'exigences open source, ou d\'un écosystème de langage non bien pris en charge par Cursor.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment stocker les prompts dans le contrôle de version ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stocker les prompts en tant que fichiers .txt ou .ts dans un répertoire /prompts. Convention de nommage : [tâche]-[version].txt. Utiliser le format de commit conventionnel pour les modifications de prompts. Ajouter des tags Git pour chaque version déployée en production.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment mettre en place un gate CI/CD pour les prompts ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ajouter un workflow GitHub Actions qui exécute Promptfoo ou Braintrust à chaque pull request. Faire échouer le build si le taux de réussite descend en dessous d\'un seuil — commencer à 85% et augmenter à 95% après 3 mois de tests stables.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que faut-il journaliser pour le monitoring des prompts en production ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Journaliser les entrées de prompt (ou leur hash si elles contiennent des DCP), les réponses du modèle, la latence, le nombre de tokens et un score de qualité d\'un évaluateur. Pour les prompts traitant des données utilisateur, conserver les journaux pendant au moins 30 jours.',
          },
        },
      ],
    },
    sections: {
      ide_setup: {
        id: 'ide-setup',
        title: 'Configuration IDE pour le prompt engineering',
        content: [
          '**Deux IDEs couvrent la plupart des besoins de prompt engineering des développeurs : Cursor (intégration IA native, prompts comme citoyens de première classe) et VS Code avec Continue.dev (open source, prise en charge de modèles locaux).** Le choix dépend de votre langage principal et de vos exigences d\'accès aux modèles.',
          'Cursor traite les fichiers de prompt nativement — vous pouvez référencer, modifier et tester des prompts directement dans l\'éditeur aux côtés de votre code d\'application. Il a une intégration native avec les APIs compatibles OpenAI et supporte bien TypeScript et Python.',
          'VS Code avec Continue.dev est open source, prend en charge les modèles locaux via Ollama et fonctionne avec tout écosystème de langage. Continue.dev fournit la complétion et la modification de prompts dans l\'éditeur. Utilisez VS Code + Continue.dev pour les exigences open source ou si vous devez exécuter des modèles localement.',
        ],
      },
      local_test_loop: {
        id: 'local-test-loop',
        title: 'La boucle de test locale',
        content: [
          '**La boucle de test de prompt locale comporte 4 étapes : écrire le prompt, le tester sur 3 entrées représentatives, comparer avec la baseline et committer si ça passe.** Cette boucle devrait prendre moins de 30 secondes avec Promptfoo configuré localement.',
          'Étape 1 : Écrire ou modifier le prompt dans votre IDE. Étape 2 : Exécuter le prompt sur 3 entrées représentatives — une entrée typique, un cas limite et une qui a précédemment causé une défaillance. Étape 3 : Comparer la sortie avec la baseline. Étape 4 : Si la qualité se maintient ou s\'améliore, committer avec un message conventionnel.',
          'Pour configurer Promptfoo pour la boucle locale : installer avec `npm install -g promptfoo`, créer un `promptfooconfig.yaml` dans la racine du projet avec 3 cas de test et un évaluateur LLM-as-judge. Exécuter `promptfoo eval`. Le temps de configuration total est inférieur à 15 minutes.',
        ],
      },
      version_control: {
        id: 'version-control',
        title: 'Stocker les prompts dans le contrôle de version',
        content: [
          '**Stocker les prompts en tant que fichiers `.txt` ou `.ts` dans un répertoire `/prompts` à la racine du dépôt.** Versionner les prompts dans Git donne les mêmes avantages que versionner du code : historique complet, blame, rollback et révision basée sur les PR.',
          'Convention de nommage : `[tâche]-[version].txt` — par exemple `support-client-v3.txt`, `brouillon-email-v1.txt`. Utiliser des numéros de version séquentiels, pas des dates. Déplacer les prompts retirés dans `/prompts/archive/` plutôt que de les supprimer.',
          'Format de commit pour les modifications de prompts : utiliser les commits conventionnels. Ajouter des tags Git pour chaque version déployée avec succès en production : `prompts/[tâche]/[version]`.',
        ],
      },
      cicd_gates: {
        id: 'cicd-gates',
        title: 'Gates CI/CD pour les prompts',
        content: [
          '**Ajouter un workflow GitHub Actions qui exécute Promptfoo ou Braintrust à chaque pull request et fait échouer le build si le taux de réussite descend en dessous d\'un seuil.** Commencer le seuil à 85% et augmenter à 95% après 3 mois de tests stables.',
          'Structure du workflow GitHub Actions : créer `.github/workflows/prompt-test.yml` avec un job qui se déclenche sur `pull_request`, installe Promptfoo, exécute `promptfoo eval --config promptfooconfig.yaml` et échoue si le code de sortie est non nul.',
          'Stratégie de seuil : commencer à 85% pour permettre une certaine variance tout en détectant les régressions majeures. Après 3 mois de tests stables sans faux échecs, augmenter à 95%. Ajouter le job prompt-test comme vérification de statut requise dans les paramètres de protection de branche.',
        ],
      },
      production_monitoring: {
        id: 'production-monitoring',
        title: 'Monitoring en production des prompts',
        content: [
          '**Journaliser les entrées et sorties de prompt, exécuter un scoreur de qualité sur chaque réponse et configurer des alertes pour des baisses de score de qualité supérieures à 10% sur une fenêtre glissante de 24 heures.** Monitorer tous les prompts traitant des données utilisateur.',
          'Ce qu\'il faut journaliser : identifiant et version du prompt, nom du modèle, nombre de tokens d\'entrée et de sortie, latence en millisecondes et un score de qualité. Pour les prompts traitant des données personnelles, journaliser un hash de l\'entrée plutôt que l\'entrée brute.',
          'Options de scoring de qualité : Braintrust fournit un évaluateur cloud avec scoring par réponse et tableaux de bord. Pour une approche auto-hébergée, exécuter un appel LLM-as-judge léger sur un échantillon de 10% des réponses. Déclencher une alerte si le score de qualité moyen chute de plus de 10% par rapport à la moyenne mobile sur 7 jours.',
        ],
      },
      key_takeaways: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        items: [
          'Utiliser Cursor pour TypeScript/Python avec des APIs cloud. Utiliser VS Code + Continue.dev pour les modèles locaux ou les exigences open source.',
          'La boucle de test locale comporte 4 étapes : écrire, tester sur 3 entrées représentatives, comparer avec la baseline, committer si ça passe. Objectif : moins de 30 secondes avec Promptfoo.',
          'Stocker les prompts en tant que fichiers .txt ou .ts dans /prompts. Convention [tâche]-[version].txt. Tagger les versions déployées en production dans Git.',
          'Ajouter un gate CI/CD GitHub Actions qui fait échouer le build si le taux de réussite descend en dessous de 85%. Augmenter à 95% après 3 mois de tests stables.',
          'En production, journaliser identifiant du prompt, modèle, nombre de tokens, latence et score de qualité. Alerter sur des baisses de score de qualité supérieures à 10% sur 24 heures.',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    title: '開発者向けプロンプトエンジニアリングワークフロー：IDEセットアップ、テスト、CI/CD統合',
    seoTitle: '開発者向けプロンプトエンジニアリング：IDE & CI/CDセットアップ',
    metaDescription: '開発者プロンプトエンジニアリングワークフロー：IDEセットアップ（Cursor、VS Code + Continue.dev）、ローカルテストループ、Gitバージョン管理、PromptfooまたはBraintrustを使用したCI/CDゲート、本番監視。',
    ogDescription: '完全な開発者プロンプトエンジニアリングワークフロー — CursorとContinue.devを使用したIDEセットアップ、ローカルテストループ、Gitバージョン管理、Promptfooを使用したCI/CD統合、本番監視。',
    twitterDescription: '開発者PEワークフロー：Cursor/VS Codeセットアップ、ローカルテストループ、プロンプト用Git、Promptfooを使用したCI/CDゲート。IDEから本番まで。',
    publishDate: '2026-05-02',
    readTime: '12分で読める',
    educationalLevel: '上級',
    primaryTerm: 'プロンプトエンジニアリングワークフロー',
    intro: '**開発者は、バージョン管理、CI/CD、ローカルテストという既存の開発プロセスに適合するプロンプトエンジニアリングワークフローが必要であり、別のツールエコシステムは必要ありません。** ワークフローは5つのステージをカバーします：書く、ローカルでテストする、バージョン管理する、CI/CDでゲートする、本番環境で監視する。',
    leadAnswerBlock: '**開発者は、バージョン管理、CI/CD、ローカルテストという既存の開発プロセスに適合するプロンプトエンジニアリングワークフローが必要であり、別のツールエコシステムは必要ありません。** ワークフローは5つのステージをカバーします。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '開発者向けプロンプトエンジニアリングワークフロー：IDEセットアップ、テスト、CI/CD統合',
      description: '開発者プロンプトエンジニアリングワークフロー：IDEセットアップ、ローカルテストループ、Gitバージョン管理、CI/CDゲート、本番監視。',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-developers-workflow', width: 1200, height: 630 },
      inLanguage: 'ja',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'プロンプトエンジニアリングに最適なIDEはどれですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TypeScriptまたはPythonで主に作業し、ネイティブAI統合を希望する開発者にはCursorを推奨します。ローカルモデルのサポート、オープンソース要件が必要な場合はVS Code + Continue.devを推奨します。',
          },
        },
        {
          '@type': 'Question',
          name: 'バージョン管理にプロンプトをどのように保存すべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'プロンプトを/promptsディレクトリに.txtまたは.tsファイルとして保存します。命名規則：[task]-[version].txt。プロンプト変更にはconventional commitsを使用します。本番環境にデプロイされたすべてのバージョンにGitタグを追加します。',
          },
        },
        {
          '@type': 'Question',
          name: 'プロンプトのCI/CDゲートを設定するにはどうすればよいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GitHub Actionsワークフローを追加して、すべてのプルリクエストでPromptfooまたはBraintrustを実行します。合格率がしきい値を下回った場合にビルドを失敗させます — 85%から始め、3か月の安定したテストの後に95%に引き上げます。',
          },
        },
        {
          '@type': 'Question',
          name: '本番プロンプト監視のために何をログに記録すべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'プロンプト入力（PII含む場合はハッシュ）、モデルレスポンス、レイテンシ、トークン数、評価器からの品質スコアをログに記録します。ユーザーデータを処理するプロンプトのログは少なくとも30日間保持します。',
          },
        },
      ],
    },
    sections: {
      ide_setup: {
        id: 'ide-setup',
        title: 'プロンプトエンジニアリングのIDEセットアップ',
        content: [
          '**2つのIDEが開発者のプロンプトエンジニアリングのほとんどのニーズをカバーします：Cursor（ネイティブAI統合、プロンプトをファーストクラス市民として扱う）とVS Code + Continue.dev（オープンソース、ローカルモデルサポート）。** 選択は主要言語とモデルアクセス要件によって異なります。',
          'Cursorはプロンプトファイルをネイティブに扱います — アプリケーションコードの横のエディタで直接プロンプトを参照、編集、テストできます。OpenAI互換APIとのネイティブ統合があり、TypeScriptとPythonをよくサポートしています。',
          'VS Code + Continue.devはオープンソースで、Ollama経由でローカルモデルをサポートし、あらゆる言語エコシステムで動作します。オープンソース要件がある場合、またはプライバシーやコストの理由でモデルをローカルで実行する必要がある場合に使用します。',
        ],
      },
      local_test_loop: {
        id: 'local-test-loop',
        title: 'ローカルプロンプトテストループ',
        content: [
          '**ローカルプロンプトテストループには4つのステップがあります：プロンプトを書く、3つの代表的な入力でテストする、ベースラインと比較する、合格したらコミットする。** このループは、Promptfooをローカルで設定した場合、30秒未満で完了するはずです。',
          'ステップ1：IDEでプロンプトを書くか編集します。ステップ2：3つの代表的な入力に対してプロンプトを実行します — 典型的な入力、エッジケース、以前に障害を引き起こしたもの。ステップ3：最後にコミットされたバージョンとベースラインを比較します。ステップ4：品質が維持または改善された場合、conventional messageでコミットします。',
          'Promptfooのローカルループ設定：`npm install -g promptfoo`でインストール、3つのテストケースとLLM-as-judge評価器を含む`promptfooconfig.yaml`をプロジェクトルートに作成、`promptfoo eval`を実行。既存のプロンプトのセットアップ時間は15分未満です。',
        ],
      },
      version_control: {
        id: 'version-control',
        title: 'バージョン管理へのプロンプトの保存',
        content: [
          '**プロンプトをリポジトリルートの`/prompts`ディレクトリに`.txt`または`.ts`ファイルとして保存します。** Gitでプロンプトをバージョニングすることはコードをバージョニングするのと同じ利点があります：完全な履歴、blame、ロールバック、PRベースのレビュー。',
          '命名規則：`[task]-[version].txt` — 例：`customer-support-v3.txt`、`email-draft-v1.txt`。日付ではなく連番のバージョン番号を使用します。廃止されたプロンプトは削除せず`/prompts/archive/`に移動します。',
          'プロンプト変更のコミットメッセージ形式：conventional commitsを使用します。本番環境への各成功したデプロイ後、コミットに`prompts/[task]/[version]`タグを付けます。これらのタグは本番環境でプロンプト変更を元に戻す必要があるときのロールバックターゲットとして機能します。',
        ],
      },
      cicd_gates: {
        id: 'cicd-gates',
        title: 'プロンプトのCI/CDゲート',
        content: [
          '**すべてのプルリクエストでPromptfooまたはBraintrustを実行し、合格率がしきい値を下回った場合にビルドを失敗させるGitHub Actionsワークフローを追加します。** しきい値を85%から始め、3か月の安定したテストの後に95%に引き上げます。',
          'GitHub Actionsワークフロー構造：`pull_request`でトリガーされ、Promptfooをインストールし、`promptfoo eval --config promptfooconfig.yaml`を実行し、終了コードが0以外の場合に失敗するジョブを含む`.github/workflows/prompt-test.yml`を作成します。',
          'しきい値戦略：大きなリグレッションを検出しながら一部の変動を許容するために85%から始めます。誤った失敗なしに3か月の安定したテストの後、95%に引き上げます。リポジトリのブランチ保護設定にprompt-testジョブを必須のステータスチェックとして追加します。',
        ],
      },
      production_monitoring: {
        id: 'production-monitoring',
        title: 'プロンプトの本番監視',
        content: [
          '**プロンプト入力と出力をログに記録し、すべてのレスポンスで品質スコアラーを実行し、24時間のローリングウィンドウで10%を超える品質スコアの低下に対してアラートを設定します。** ユーザーデータを処理するすべてのプロンプトを監視します。',
          'ログに記録するもの：プロンプト識別子とバージョン、モデル名、入力トークン数、出力トークン数、ミリ秒単位のレイテンシ、評価器からの品質スコア。個人データを処理するプロンプトの場合、生の入力ではなく入力のハッシュをログに記録します。',
          '品質スコアリングオプション：Braintrustはレスポンスごとのスコアリングとダッシュボードを備えたクラウドベースの評価器を提供します。セルフホスト型アプローチの場合、レスポンスの10%のサンプルで軽量なLLM-as-judgeコールを実行します。品質スコアが7日間のローリング平均と比較して10%以上低下した場合にアラートをトリガーします。',
        ],
      },
      key_takeaways: {
        id: 'key-takeaways',
        title: '重要なポイント',
        isTldr: true,
        items: [
          'クラウドAPIを使用するTypeScript/PythonにはCursorを使用します。ローカルモデルやオープンソース要件にはVS Code + Continue.devを使用します。',
          'ローカルテストループには4つのステップがあります：書く、3つの代表的な入力でテストする、ベースラインと比較する、合格したらコミットする。Promptfooで30秒未満を目標にします。',
          'プロンプトを/promptsに.txtまたは.tsファイルとして保存します。命名規則[task]-[version].txt。本番環境にデプロイされたバージョンをGitでタグ付けします。',
          '合格率が85%を下回った場合にビルドを失敗させるGitHub Actions CI/CDゲートを追加します。3か月の安定したテストの後に95%に引き上げます。',
          '本番環境では、プロンプト識別子、モデル、トークン数、レイテンシ、品質スコアをログに記録します。24時間で10%を超える品質スコアの低下に対してアラートを発します。',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '工作流与自动化',
    title: '开发者提示词工程工作流：IDE配置、测试和CI/CD集成',
    seoTitle: '开发者提示词工程：IDE & CI/CD配置',
    metaDescription: '开发者提示词工程工作流：IDE配置（Cursor、VS Code + Continue.dev）、本地测试循环、Git版本控制、使用Promptfoo或Braintrust的CI/CD门控、生产监控。',
    ogDescription: '完整的开发者提示词工程工作流 — 使用Cursor和Continue.dev的IDE配置、本地测试循环、Git版本控制、使用Promptfoo的CI/CD集成和生产监控。',
    twitterDescription: '开发者PE工作流：Cursor/VS Code配置、本地测试循环、提示词Git管理、使用Promptfoo的CI/CD门控。从IDE到生产的端到端流程。',
    publishDate: '2026-05-02',
    readTime: '12分钟阅读',
    educationalLevel: '高级',
    primaryTerm: '提示词工程工作流',
    intro: '**开发者需要一个融入现有开发流程的提示词工程工作流 — 版本控制、CI/CD和本地测试 — 而不是一个独立的工具生态系统。** 在中国，《数据安全法》和《个人信息保护法》（PIPL）要求对AI系统的输入和输出进行记录和审计，这使得系统化的提示词工程工作流对于合规性尤为重要。',
    leadAnswerBlock: '**开发者需要一个融入现有开发流程的提示词工程工作流 — 版本控制、CI/CD和本地测试 — 而不是一个独立的工具生态系统。** 工作流涵盖5个阶段：编写、本地测试、版本控制、CI/CD门控和生产监控。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '开发者提示词工程工作流：IDE配置、测试和CI/CD集成',
      description: '开发者提示词工程工作流：IDE配置、本地测试循环、Git版本控制、CI/CD门控和生产监控。',
      datePublished: '2026-05-02',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/pe-for-developers-workflow', width: 1200, height: 630 },
      inLanguage: 'zh',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: '哪个IDE最适合提示词工程？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '对于主要使用TypeScript或Python并希望获得原生AI集成的开发者，推荐使用Cursor。如果需要本地模型支持、开源要求或Cursor不好支持的语言生态系统，推荐使用VS Code + Continue.dev。',
          },
        },
        {
          '@type': 'Question',
          name: '应该如何在版本控制中存储提示词？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '将提示词作为.txt或.ts文件存储在/prompts目录中。命名规则：[task]-[version].txt。对提示词更改使用conventional commit格式。为部署到生产环境的每个版本添加Git标签。',
          },
        },
        {
          '@type': 'Question',
          name: '如何为提示词设置CI/CD门控？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '添加一个GitHub Actions工作流，在每个拉取请求上运行Promptfoo或Braintrust。如果通过率低于阈值则使构建失败 — 从85%开始，在3个月的稳定测试后提高到95%。',
          },
        },
        {
          '@type': 'Question',
          name: '生产提示词监控应该记录什么？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '记录提示词输入（如果包含个人信息则记录哈希值）、模型响应、延迟、令牌数量和评估器的质量分数。对于处理用户数据的提示词，日志至少保留30天。',
          },
        },
      ],
    },
    sections: {
      ide_setup: {
        id: 'ide-setup',
        title: '提示词工程的IDE配置',
        content: [
          '**两个IDE涵盖了大多数开发者提示词工程需求：Cursor（原生AI集成，将提示词视为一等公民）和VS Code + Continue.dev（开源，本地模型支持）。** 选择取决于您的主要语言和模型访问要求。',
          'Cursor原生处理提示词文件 — 您可以在编辑器中直接引用、编辑和测试提示词，与应用程序代码并排。它与OpenAI兼容的API有原生集成，很好地支持TypeScript和Python。',
          'VS Code + Continue.dev是开源的，通过Ollama支持本地模型，适用于任何语言生态系统。Continue.dev提供编辑器内的提示词补全和修改功能。如果有开源要求或需要在本地运行模型，请使用VS Code + Continue.dev。',
        ],
      },
      local_test_loop: {
        id: 'local-test-loop',
        title: '本地提示词测试循环',
        content: [
          '**本地提示词测试循环有4个步骤：编写提示词、在3个代表性输入上测试、与基线比较、通过则提交。** 使用本地配置的Promptfoo，这个循环应该在30秒内完成。',
          '步骤1：在IDE中编写或编辑提示词。步骤2：针对3个代表性输入运行提示词 — 一个典型输入、一个边界情况和一个之前导致失败的输入。步骤3：将输出与基线（最后提交的版本）进行比较。步骤4：如果质量保持或改善，使用conventional消息提交。',
          '为本地循环配置Promptfoo：使用`npm install -g promptfoo`安装，在项目根目录创建包含3个测试用例和LLM-as-judge评估器的`promptfooconfig.yaml`，运行`promptfoo eval`。现有提示词的总设置时间不到15分钟。',
        ],
      },
      version_control: {
        id: 'version-control',
        title: '在版本控制中存储提示词',
        content: [
          '**将提示词作为`.txt`或`.ts`文件存储在存储库根目录的`/prompts`目录中。** 在Git中对提示词进行版本控制与对代码进行版本控制具有相同的好处：完整历史、blame、回滚和基于PR的审查。',
          '命名规则：`[task]-[version].txt` — 例如`customer-support-v3.txt`、`email-draft-v1.txt`。使用顺序版本号，而不是日期。将退役的提示词移至`/prompts/archive/`而不是删除。',
          '提示词更改的提交消息格式：使用conventional commits。每次成功部署到生产环境后，使用`prompts/[task]/[version]`标记提交。这些标签在需要回滚生产环境中的提示词更改时用作回滚目标。',
        ],
      },
      cicd_gates: {
        id: 'cicd-gates',
        title: '提示词的CI/CD门控',
        content: [
          '**添加一个GitHub Actions工作流，在每个拉取请求上运行Promptfoo或Braintrust，如果通过率低于阈值则使构建失败。** 从85%的阈值开始，在3个月的稳定测试后提高到95%。',
          'GitHub Actions工作流结构：创建`.github/workflows/prompt-test.yml`，包含一个在`pull_request`上触发的作业，安装Promptfoo，运行`promptfoo eval --config promptfooconfig.yaml`，如果退出代码非零则失败。',
          '阈值策略：从85%开始，允许一些变化同时仍然捕获主要回归。在3个月没有误报的稳定测试后，提高到95%。在存储库分支保护设置中将prompt-test作业添加为必需状态检查。',
        ],
      },
      production_monitoring: {
        id: 'production-monitoring',
        title: '提示词的生产监控',
        content: [
          '**记录提示词输入和输出，对每个响应运行质量评分器，并为24小时滚动窗口内质量分数下降超过10%设置警报。** 监控所有处理用户数据的提示词。',
          '记录内容：提示词标识符和版本、模型名称、输入令牌数量、输出令牌数量、毫秒延迟和评估器的质量分数。对于处理个人数据的提示词（PIPL合规要求），记录输入的哈希值而不是原始输入。',
          '质量评分选项：Braintrust提供带有每响应评分和仪表板的云端评估器。对于自托管方法，对10%的响应样本运行轻量级LLM-as-judge调用。如果平均质量分数与7天滚动平均值相比下降超过10%，则触发警报。',
        ],
      },
      key_takeaways: {
        id: 'key-takeaways',
        title: '关键要点',
        isTldr: true,
        items: [
          '使用云API的TypeScript/Python使用Cursor。本地模型或开源要求使用VS Code + Continue.dev。',
          '本地测试循环有4个步骤：编写、在3个代表性输入上测试、与基线比较、通过则提交。使用Promptfoo目标在30秒内完成。',
          '将提示词作为.txt或.ts文件存储在/prompts中。命名规则[task]-[version].txt。在Git中标记生产部署的版本。',
          '添加GitHub Actions CI/CD门控，如果通过率低于85%则使构建失败。在3个月的稳定测试后提高到95%。',
          '在生产环境中，记录提示词标识符、模型、令牌数量、延迟和质量分数。对24小时内质量分数下降超过10%发出警报。',
        ],
      },
    },
  },
};
