import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automation',
    title: 'From Prompts to Repeatable Workflows: Automation Templates for Production Teams',
    seoTitle: 'Prompts to Repeatable Workflows: Automation Templates',
    intro: 'A single prompt that runs when someone remembers to run it is not a system — it is a task. This guide shows how to convert prompts into repeatable workflows with defined triggering conditions, state management, and four production-ready templates covering document processing, research pipelines, code review, and customer triage.',
    metaDescription: 'Convert prompts to automated workflows: triggers, state management, error handling. 4 templates: document processing, research, code review, triage.',
    ogDescription: '4 production workflow templates: document processing (n8n + GPT), research (LangChain), code review (GitHub Actions + Claude), triage (Make + PromptQuorum).',
    twitterDescription: 'A prompt you run manually is a task. A prompt with a trigger, routing, and error handling is a workflow. 4 production templates inside.',
    publishDate: '2026-05-02',
    readTime: '11 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'Repeatable Prompt Workflows',
    leadAnswerBlock: '**A repeatable workflow is a prompt-based process with defined triggering conditions, inputs, outputs, and error handling that runs consistently without manual intervention.** The difference between a prompt and a workflow is whether you need to be present for it to run.',
    quickFacts: [
      'Automate when frequency exceeds 5 runs per week with structured inputs',
      '3 trigger types: event-based (webhook), schedule-based (cron), threshold-based (metric)',
      'Make costs $0–$16/month for up to 10,000 operations; n8n is free and self-hostable',
      'JSON output schema required at every step boundary — never pass raw unstructured text',
      'Most production teams reach 70–80% automation with 20–30% human review on edge cases',
      '4 templates: document processing, research pipeline, code review, customer triage',
    ],
    toc: [
      { label: 'The Difference Between a Prompt and a Workflow', anchor: 'prompt_vs_workflow' },
      { label: 'Triggering Conditions and State Management', anchor: 'triggering' },
      { label: '4 Workflow Templates for Production Teams', anchor: 'four_templates' },
      { label: 'Tools for Building Prompt Workflows', anchor: 'tools' },
      { label: 'When to Automate vs. Stay Manual', anchor: 'when_to_automate' },
      { label: 'Common Mistakes', anchor: 'common_mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompts-to-repeatable-workflows',
      inLanguage: 'en',
      headline: 'From Prompts to Repeatable Workflows: Automation Templates for Production Teams',
      description: 'Convert prompts into automated workflows with triggers, state management, and error handling. 4 templates: document processing, research, code review, triage.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['prompt workflows', 'automation templates', 'repeatable prompts', 'LangChain workflow', 'n8n prompts', 'Make automation', 'production AI workflow'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'Braintrust' },
        { '@type': 'Thing', name: 'Promptfoo' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'A workflow is a prompt with a trigger, output routing, and error handling — not just a prompt run automatically. Automate when frequency exceeds 5 runs per week, inputs are structured, and output always routes to the same next step. Four production templates cover the most common use cases: document processing, research pipeline, code review, and customer triage.',
      },
      prompt_vs_workflow: {
        title: 'The Difference Between a Prompt and a Workflow',
        snippets: [
          { type: 'in-one-sentence', text: 'A workflow is a prompt that runs automatically when a trigger fires and routes its output to a defined next step without human intervention.' },
          { type: 'in-plain-terms', text: 'Think of a workflow as a prompt that has been given a job title: it knows when to start, what to do with the result, and what to do when something goes wrong.' },
        ],
        content: [
          '**A prompt requires a human to decide when to run it and what to do with the output; a workflow runs automatically when a condition is met and routes the output to the next step.** This is the operational distinction — not a difference in the prompt text itself.',
          'A prompt that extracts invoice data is still just a prompt if someone copies and pastes each invoice into ChatGPT manually. The same extraction logic becomes a workflow when a file upload triggers it, the output is parsed into a structured record, and that record is routed to an accounting system.',
          'Automate when you run the same prompt more than 5 times per week with the same trigger and the output always goes to the same next step. Below that frequency, or when inputs vary significantly, manual prompting is faster than building automation infrastructure.',
        ],
        callouts: [
          { type: 'insight', label: 'Operational definition', text: 'The difference between a prompt and a workflow is not the prompt text — it is whether the system decides when to run it and what happens next.' },
        ],
      },
      triggering: {
        title: 'Triggering Conditions and State Management',
        content: [
          '**Three trigger types cover almost all production prompt workflows: event-based, schedule-based, and threshold-based.** Choosing the wrong trigger type is one of the main reasons workflows run too often, not often enough, or on stale data.',
          'Event-based triggers fire on a specific event: a webhook fires when a file is uploaded, a form is submitted, or an API call arrives. Schedule-based triggers fire on a cron — "run every Monday at 09:00" or "run every 6 hours." Threshold-based triggers fire when a metric crosses a value — error rate exceeds 5%, ticket queue depth exceeds 100, sentiment score drops below 0.4.',
          'State management is how output from one step is passed to the next without losing context. Define a JSON output schema at each step boundary. Store intermediate results in a variable store (n8n workflow data, LangChain memory, or a database field). Never pass raw unstructured model output as the input to the next step — parse it first.',
        ],
        callouts: [
          { type: 'warning', label: 'State management failure', text: 'Passing raw unstructured model output between steps is the most common cause of silent workflow failures. Always define a JSON schema at every step boundary and validate before routing.' },
        ],
      },
      four_templates: {
        title: '4 Workflow Templates for Production Teams',
        content: [
          '**Four templates cover the most common production use cases: document processing, research pipeline, code review, and customer triage.** Each template defines the trigger, the prompt chain, the output routing, and the recommended tools.',
        ],
        numberedItems: [
          'Document Processing — trigger: new PDF upload → extract key data (dates, parties, amounts) → classify document type → route to assigned reviewer queue. Tools: n8n for orchestration + GPT-5.5 for extraction and classification. Output: structured JSON record written to a shared database.',
          'Research Pipeline — trigger: topic list submitted → search web sources → summarize each source → synthesize into a structured report. Tools: LangChain for multi-step orchestration + Perplexity API for web search. Output: markdown report with citations, stored in a shared folder.',
          'Code Review Loop — trigger: pull request opened → analyze diff → generate inline review comments categorized by severity → post comments to the PR. Tools: GitHub Actions for trigger + Claude 4.6 Sonnet for diff analysis. Output: PR comments posted via GitHub API.',
          'Customer Triage — trigger: new support ticket received → classify severity (P1/P2/P3) → route to the correct queue → generate a draft first-response. Tools: Make for orchestration + PromptQuorum for multi-model dispatch (dispatch to GPT-5.5 for classification, Claude 4.6 Sonnet for draft generation). Output: ticket updated with severity label and draft response.',
        ],
      },
      tools: {
        title: 'Tools for Building Prompt Workflows',
        content: [
          '**The right tool depends on whether your team prefers visual automation, code-first pipelines, or multi-model dispatch.** Use one primary tool and add PromptQuorum for model-layer decisions.',
          'Make (formerly Integromat) is a visual, no-code workflow builder. Cost: $0 for up to 1,000 operations/month, $16/month for 10,000 operations. Best for: non-technical teams, CRM and email integrations, straightforward trigger-action pipelines. Limitation: complex branching logic is harder to maintain visually at scale.',
          'n8n is open-source and self-hostable at $0 cost. It supports code nodes for custom logic alongside visual flow building. Best for: engineering teams that want full control and data privacy. LangChain (Python and JavaScript) is a code-first framework for building multi-step prompt pipelines with memory, agents, and tool use. Best for: developers building custom applications. PromptQuorum adds multi-model dispatch and side-by-side output comparison across GPT-5.5, Claude 4.6 Sonnet, and Gemini 2.5 Pro — use it at any step where model selection affects output quality.',
        ],
        callouts: [
          { type: 'tip', label: 'Tool selection rule', text: 'Start with Make or n8n for orchestration and add PromptQuorum at any step where you need to compare model outputs or dispatch to the best model for that step type.' },
        ],
      },
      when_to_automate: {
        title: 'When to Automate vs. Stay Manual',
        content: [
          '**Automate a prompt workflow when: frequency exceeds 5 runs per week, inputs are structured and predictable, and output routes to a defined next step every time.** All three conditions must be true for automation to pay off.',
          'Stay manual when inputs vary unpredictably (e.g., ad hoc research questions with no fixed format), when human judgment is required in every case rather than just edge cases, or when the current volume is below 5 runs per week — the overhead of building and maintaining the automation exceeds the time saved.',
          'A third category is hybrid: automate the structured steps (data extraction, classification, routing) and keep the judgment step manual (final approval, escalation decision). Most production teams land here — 70–80% automated, 20–30% human review on edge cases.',
        ],
      },
      common_mistakes: {
        title: 'Common Mistakes When Building Prompt Workflows',
        mistakes: [
          { mistake: 'Building workflows before validating the prompt', problem: 'If the underlying prompt fails, the workflow amplifies the failure at scale', fix: 'Test and validate the core prompt against 10+ real examples before wiring it into a workflow' },
          { mistake: 'No error handling or fallback path', problem: 'When the model returns unexpected output, the workflow silently fails or produces corrupt downstream data', fix: 'Always add an output validation step and a fallback route (human review queue or retry with alternate model)' },
          { mistake: 'Single-model workflow with no failover', problem: 'If the primary model\'s API is down, the entire workflow stops', fix: 'Design workflows with a fallback model route. PromptQuorum multi-model dispatch makes this straightforward.' },
          { mistake: 'No monitoring on automated workflows', problem: 'Workflows run silently — you don\'t know output quality is degrading until downstream damage accumulates', fix: 'Log pass rate per run. Alert on quality drops >5% week-over-week.' },
        ],
      },
      key_takeaways: {
        title: 'Key Takeaways',
        items: [
          'A workflow is a prompt with a trigger, output routing, and error handling — not just a prompt run automatically',
          'Automate when frequency >5/week, inputs are structured, and output always routes to the same next step',
          'Three trigger types: event-based (webhook/upload), schedule-based (cron), threshold-based (metric crossing)',
          'Define a JSON output schema at every step boundary — never pass raw unstructured text between steps',
          '4 production templates: document processing (n8n + GPT-5.5), research (LangChain + Perplexity), code review (GitHub Actions + Claude 4.6 Sonnet), customer triage (Make + PromptQuorum)',
          'Most teams reach 70–80% automation with 20–30% human review on edge cases',
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is a repeatable prompt workflow?', a: 'A repeatable prompt workflow is a prompt-based process that runs automatically when a defined triggering condition is met, routes output to the next step, and handles errors without manual intervention. Unlike a one-off prompt, a workflow does not require a human to decide when to run it or what to do with the result.' },
          { q: 'What tools are best for building prompt workflows?', a: 'n8n is best for self-hosted, open-source workflows at $0 cost. Make (formerly Integromat) is best for visual, no-code workflows at $0–$16/month. LangChain is best for Python or JavaScript code-based pipelines with full control. PromptQuorum adds multi-model dispatch and comparison across GPT-5.5, Claude 4.6 Sonnet, and Gemini 2.5 Pro.' },
          { q: 'What is the minimum viable workflow structure?', a: 'A minimum viable workflow has 4 components: a trigger (scheduled, event-driven, or API call), a prompt execution step (calls the LLM API with the formatted prompt), an output validation step (checks format and quality requirements), and a routing step (sends output to the next system or flags for human review). Add state management and error handling as complexity grows.' },
          { q: 'How do I choose between Make, n8n, and LangChain for prompt workflows?', a: 'Use Make (formerly Integromat) for teams that need a visual no-code interface with 1,000+ app integrations — best for business automation without coding. Use n8n for teams that want no-code with self-hosted control and source access — better privacy, more flexibility. Use LangChain for developers building complex multi-step chains with memory, retrieval, and tool use in Python or JavaScript.' },
          { q: 'When should I automate a prompt workflow vs keep it manual?', a: 'Automate when: the prompt runs more than 10 times per day, the inputs follow a predictable format, the output feeds directly into another system, and the pass rate on a test set exceeds 90%. Keep manual when: the inputs are highly varied, the task requires judgment that cannot be scored automatically, or the output affects irreversible decisions (legal, financial, medical).' },
        ],
      },
      related_reading: {
        title: 'Related Reading',
        items: [
          { title: 'Prompt Chaining: Multi-Step Prompting', url: '/prompt-engineering/prompt-chaining' },
          { title: 'Prompt Engineering for Developers Workflow', url: '/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt Engineering for Content Teams', url: '/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt Engineering for Support Operations', url: '/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Best Tools for Structured Output', url: '/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisierung',
    title: 'Von Prompts zu automatisierten Workflows: 4 Vorlagen (2026)',
    seoTitle: 'Wiederholbare Workflows: Automatisierungsvorlagen',
    intro: 'Ein einzelner Prompt, der nur dann ausgeführt wird, wenn jemand daran denkt, ist kein System — es ist eine Aufgabe. Dieser Leitfaden zeigt, wie Sie Prompts in wiederholbare Workflows mit definierten Auslösebedingungen, State Management und vier produktionsreifen Vorlagen umwandeln.',
    metaDescription: 'Prompts in automatisierte Workflows umwandeln: Trigger, State Management, Fehlerbehandlung. 4 Vorlagen: Dokumente, Recherche, Code-Review, Triage.',
    ogDescription: '4 Produktions-Workflow-Vorlagen: Dokumentenverarbeitung (n8n + GPT), Recherche (LangChain), Code-Review (GitHub Actions + Claude), Triage (Make + PromptQuorum).',
    twitterDescription: 'Ein manuell ausgeführter Prompt ist eine Aufgabe. Ein Prompt mit Auslöser, Routing und Fehlerbehandlung ist ein Workflow. 4 Produktionsvorlagen.',
    publishDate: '2026-05-02',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'Wiederholbare Prompt-Workflows',
    leadAnswerBlock: '**Ein wiederholbarer Workflow ist ein promptbasierter Prozess mit definierten Auslösebedingungen, Inputs, Outputs und Fehlerbehandlung, der konsistent ohne manuelle Eingriffe ausgeführt wird.** Der Unterschied zwischen einem Prompt und einem Workflow ist, ob Sie anwesend sein müssen, damit er ausgeführt wird.',
    quickFacts: [
      'Automatisieren Sie, wenn die Häufigkeit 5 Ausführungen pro Woche übersteigt und die Eingaben strukturiert sind',
      '3 Auslösertypen: ereignisbasiert (Webhook), zeitplanbasiert (Cron), schwellenwertbasiert (Metrik)',
      'Make kostet 0–16 $/Monat für bis zu 10.000 Operationen; n8n ist kostenlos und selbst hostbar',
      'JSON-Ausgabeschema an jeder Schrittgrenze erforderlich — niemals unstrukturierten Text weitergeben',
      'Die meisten Produktionsteams erreichen 70–80 % Automatisierung mit 20–30 % menschlichem Review',
      '4 Vorlagen: Dokumentenverarbeitung, Recherche-Pipeline, Code-Review, Kundentriage',
    ],
    toc: [
      { label: 'Der Unterschied zwischen einem Prompt und einem Workflow', anchor: 'prompt_vs_workflow' },
      { label: 'Auslösebedingungen und State Management', anchor: 'triggering' },
      { label: '4 Workflow-Vorlagen für Produktionsteams', anchor: 'four_templates' },
      { label: 'Tools für die Erstellung von Prompt-Workflows', anchor: 'tools' },
      { label: 'Wann automatisieren, wann manuell bleiben', anchor: 'when_to_automate' },
      { label: 'Häufige Fehler', anchor: 'common_mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Weiterführende Lektüre', anchor: 'related_reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/de/prompt-engineering/prompts-to-repeatable-workflows',
      inLanguage: 'de',
      headline: 'Von Prompts zu automatisierten Workflows: 4 Vorlagen',
      description: 'Prompts in automatisierte Workflows umwandeln: Auslösebedingungen, State Management, Fehlerbehandlung. 4 Vorlagen: Dokumentenverarbeitung, Recherche, Code-Review, Triage.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt-Workflows', 'Automatisierungsvorlagen', 'wiederholbare Prompts', 'LangChain Workflow', 'n8n Prompts', 'Produktions-KI-Workflow'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Kurzfassung',
        content: 'Ein Workflow ist ein Prompt mit einem Auslöser, Output-Routing und Fehlerbehandlung — nicht nur ein automatisch ausgeführter Prompt. Automatisieren Sie bei mehr als 5 Ausführungen pro Woche mit strukturierten Eingaben. Vier Produktionsvorlagen decken die häufigsten Anwendungsfälle ab.',
      },
      prompt_vs_workflow: {
        title: 'Der Unterschied zwischen einem Prompt und einem Workflow',
        snippets: [
          { type: 'in-one-sentence', text: 'Ein Workflow ist ein Prompt, der automatisch ausgeführt wird, wenn ein Auslöser feuert, und seine Ausgabe an einen definierten nächsten Schritt weiterleitet.' },
          { type: 'in-plain-terms', text: 'Stellen Sie sich einen Workflow als einen Prompt mit einer Berufsbezeichnung vor: Er weiß, wann er starten soll, was mit dem Ergebnis zu tun ist und was bei Fehlern zu tun ist.' },
        ],
        content: [
          '**Ein Prompt erfordert, dass ein Mensch entscheidet, wann er ausgeführt werden soll und was mit der Ausgabe geschehen soll; ein Workflow wird automatisch ausgeführt, wenn eine Bedingung erfüllt ist, und leitet die Ausgabe an den nächsten Schritt weiter.** Das ist der operative Unterschied — nicht ein Unterschied im Prompt-Text selbst.',
          'Ein Prompt, der Rechnungsdaten extrahiert, ist immer noch nur ein Prompt, wenn jemand jede Rechnung manuell in ChatGPT kopiert. Dieselbe Extraktionslogik wird zum Workflow, wenn ein Datei-Upload sie auslöst, die Ausgabe in einen strukturierten Datensatz geparst wird und dieser Datensatz an ein Buchhaltungssystem weitergeleitet wird.',
          'Automatisieren Sie, wenn Sie denselben Prompt mehr als 5-mal pro Woche mit demselben Auslöser ausführen und die Ausgabe immer zum selben nächsten Schritt geht. Unterhalb dieser Häufigkeit oder bei stark variierenden Eingaben ist manuelles Prompting schneller als das Aufbauen einer Automatisierungsinfrastruktur.',
        ],
        callouts: [
          { type: 'insight', label: 'Operative Definition', text: 'Der Unterschied zwischen einem Prompt und einem Workflow liegt nicht im Prompt-Text — sondern darin, ob das System entscheidet, wann er ausgeführt wird und was danach passiert.' },
        ],
      },
      triggering: {
        title: 'Auslösebedingungen und State Management',
        content: [
          '**Drei Auslöser-Typen decken fast alle Produktions-Prompt-Workflows ab: ereignisbasiert, zeitplanbasiert und schwellenwertbasiert.** Die Wahl des falschen Auslöser-Typs ist einer der häufigsten Gründe, warum Workflows zu oft, zu selten oder mit veralteten Daten ausgeführt werden.',
          'Ereignisbasierte Auslöser werden bei einem bestimmten Ereignis aktiviert: Ein Webhook wird ausgelöst, wenn eine Datei hochgeladen, ein Formular abgeschickt oder ein API-Aufruf eingeht. Zeitplanbasierte Auslöser werden nach einem Cron-Zeitplan aktiviert. Schwellenwertbasierte Auslöser werden aktiviert, wenn eine Kennzahl einen Wert überschreitet — z. B. Fehlerrate über 5 %, Ticket-Warteschlangentiefe über 100 oder Sentiment-Score unter 0,4.',
          'State Management bezeichnet, wie Ausgaben von einem Schritt ohne Kontextverlust an den nächsten übergeben werden. Definieren Sie an jeder Schrittgrenze ein JSON-Ausgabeschema. Speichern Sie Zwischenergebnisse in einem Variablenspeicher. Übergeben Sie niemals unstrukturierte Modellausgaben als Eingabe zum nächsten Schritt — parsen Sie sie zuerst.',
        ],
        callouts: [
          { type: 'warning', label: 'State-Management-Fehler', text: 'Das Weitergeben von rohen, unstrukturierten Modellausgaben zwischen Schritten ist die häufigste Ursache für stille Workflow-Fehler. Definieren Sie immer ein JSON-Schema an jeder Schrittgrenze.' },
        ],
      },
      four_templates: {
        title: '4 Workflow-Vorlagen für Produktionsteams',
        content: [
          '**Vier Vorlagen decken die häufigsten Produktionsanwendungsfälle ab: Dokumentenverarbeitung, Recherche-Pipeline, Code-Review und Kundentriage.**',
        ],
        numberedItems: [
          'Dokumentenverarbeitung — Auslöser: neues PDF hochgeladen → Kerndaten extrahieren (Daten, Parteien, Beträge) → Dokumenttyp klassifizieren → an Reviewer-Warteschlange weiterleiten. Tools: n8n + GPT-5.5. Ausgabe: strukturierter JSON-Datensatz in einer gemeinsamen Datenbank.',
          'Recherche-Pipeline — Auslöser: Themenliste eingereicht → Webquellen suchen → jede Quelle zusammenfassen → strukturierten Bericht erstellen. Tools: LangChain + Perplexity API. Ausgabe: Markdown-Bericht mit Quellenangaben.',
          'Code-Review-Schleife — Auslöser: Pull Request geöffnet → Diff analysieren → Review-Kommentare nach Schweregrad erstellen → Kommentare im PR veröffentlichen. Tools: GitHub Actions + Claude 4.6 Sonnet. Ausgabe: PR-Kommentare über GitHub API.',
          'Kundentriage — Auslöser: neues Support-Ticket eingegangen → Schweregrad klassifizieren (P1/P2/P3) → an richtigen Kanal weiterleiten → Erstentwurf einer Antwort generieren. Tools: Make + PromptQuorum. Ausgabe: Ticket mit Schweregradlabel und Antwortentwurf aktualisiert.',
        ],
      },
      tools: {
        title: 'Tools für die Erstellung von Prompt-Workflows',
        content: [
          '**Das richtige Tool hängt davon ab, ob Ihr Team visuelle Automatisierung, codebasierte Pipelines oder Multi-Modell-Dispatch bevorzugt.**',
          'Make ist ein visueller No-Code-Workflow-Builder. Kosten: 0 $ für bis zu 1.000 Operationen/Monat, 16 $/Monat für 10.000 Operationen. Am besten für: nicht-technische Teams, CRM- und E-Mail-Integrationen. n8n ist Open-Source und selbst hostbar für 0 $. LangChain (Python und JavaScript) ist ein codebasiertes Framework für mehrstufige Prompt-Pipelines.',
          'PromptQuorum ergänzt jedes dieser Tools um Multi-Modell-Dispatch und den direkten Vergleich von Ausgaben zwischen GPT-5.5, Claude 4.6 Sonnet und Gemini 2.5 Pro. Verwenden Sie es an Schritten, bei denen die Modellwahl die Ausgabequalität beeinflusst.',
        ],
        callouts: [
          { type: 'tip', label: 'Tool-Auswahlregel', text: 'Beginnen Sie mit Make oder n8n für die Orchestrierung und fügen Sie PromptQuorum an Schritten hinzu, an denen Sie Modellausgaben vergleichen oder das beste Modell dispatchen möchten.' },
        ],
      },
      when_to_automate: {
        title: 'Wann automatisieren, wann manuell bleiben?',
        content: [
          '**Automatisieren Sie einen Prompt-Workflow, wenn: die Häufigkeit 5 Ausführungen pro Woche überschreitet, Eingaben strukturiert und vorhersehbar sind und die Ausgabe jedes Mal an einen definierten nächsten Schritt weitergeleitet wird.** Alle drei Bedingungen müssen erfüllt sein.',
          'Bleiben Sie bei manuellen Prompts, wenn Eingaben unvorhersehbar variieren, wenn menschliches Urteilsvermögen in jedem Fall (nicht nur in Ausnahmefällen) erforderlich ist oder wenn das aktuelle Volumen unter 5 Ausführungen pro Woche liegt.',
          'Eine dritte Kategorie ist hybrid: Die strukturierten Schritte (Datenextraktion, Klassifizierung, Weiterleitung) automatisieren und den Beurteilungsschritt (endgültige Genehmigung, Eskalationsentscheidung) manuell behalten. Die meisten Produktionsteams landen hier — 70–80 % automatisiert, 20–30 % manuelle Überprüfung bei Randfällen.',
        ],
      },
      common_mistakes: {
        title: 'Häufige Fehler beim Aufbau von Prompt-Workflows',
        mistakes: [
          { mistake: 'Workflow vor der Validierung des Prompts aufbauen', problem: 'Wenn der zugrunde liegende Prompt fehlschlägt, verstärkt der Workflow den Fehler im großen Maßstab', fix: 'Testen und validieren Sie den Kern-Prompt an 10+ realen Beispielen, bevor Sie ihn in einen Workflow integrieren' },
          { mistake: 'Keine Fehlerbehandlung oder kein Fallback-Pfad', problem: 'Wenn das Modell unerwartete Ausgaben liefert, schlägt der Workflow still fehl oder erzeugt korrumpierte nachgelagerte Daten', fix: 'Fügen Sie immer einen Ausgabevalidierungsschritt und eine Fallback-Route hinzu (menschliche Review-Warteschlange oder Wiederholungsversuch mit alternativem Modell)' },
          { mistake: 'Single-Modell-Workflow ohne Failover', problem: 'Wenn die API des primären Modells ausfällt, stoppt der gesamte Workflow', fix: 'Gestalten Sie Workflows mit einer Fallback-Modellroute. PromptQuorum Multi-Modell-Dispatch macht dies unkompliziert.' },
          { mistake: 'Kein Monitoring für automatisierte Workflows', problem: 'Workflows laufen still — Sie erkennen nicht, dass die Ausgabequalität sinkt, bis nachgelagerte Schäden entstanden sind', fix: 'Protokollieren Sie die Bestehensrate pro Lauf. Alarmieren Sie bei Qualitätsrückgängen >5 % Woche-zu-Woche.' },
        ],
      },
      key_takeaways: {
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Ein Workflow ist ein Prompt mit einem Auslöser, Output-Routing und Fehlerbehandlung — nicht nur ein automatisch ausgeführter Prompt',
          'Automatisieren Sie bei Häufigkeit >5/Woche, strukturierten Eingaben und konstantem Output-Routing',
          'Drei Auslöser-Typen: ereignisbasiert (Webhook/Upload), zeitplanbasiert (Cron), schwellenwertbasiert (Metrik)',
          'JSON-Ausgabeschema an jeder Schrittgrenze definieren — niemals unstrukturierte Rohdaten weitergeben',
          '4 Produktionsvorlagen: Dokumentenverarbeitung (n8n + GPT-5.5), Recherche (LangChain + Perplexity), Code-Review (GitHub Actions + Claude 4.6 Sonnet), Kundentriage (Make + PromptQuorum)',
        ],
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist ein wiederholbarer Prompt-Workflow?', a: 'Ein wiederholbarer Prompt-Workflow ist ein promptbasierter Prozess, der automatisch ausgelöst wird, wenn eine definierte Bedingung erfüllt ist, die Ausgabe an den nächsten Schritt weiterleitet und Fehler ohne manuellen Eingriff behandelt.' },
          { q: 'Was ist die minimale Workflow-Struktur?', a: 'Ein minimaler Workflow hat 4 Komponenten: einen Auslöser, einen Prompt-Ausführungsschritt, einen Ausgabevalidierungsschritt und einen Routing-Schritt. State Management und Fehlerbehandlung ergänzen Sie je nach Komplexität.' },
          { q: 'Wie wähle ich zwischen Make, n8n und LangChain?', a: 'Verwenden Sie Make für Teams, die eine visuelle No-Code-Oberfläche mit 1.000+ App-Integrationen benötigen. Verwenden Sie n8n für Teams, die No-Code mit selbst gehostetem Zugriff wünschen. Verwenden Sie LangChain für Entwickler, die komplexe mehrstufige Ketten in Python oder JavaScript aufbauen.' },
          { q: 'Wann automatisieren vs. manuell halten?', a: 'Automatisieren Sie, wenn der Prompt mehr als 10-mal täglich ausgeführt wird, die Eingaben einem vorhersehbaren Format folgen und die Bestehensrate auf einem Testset 90 % übersteigt. Halten Sie manuell, wenn die Eingaben sehr variabel sind oder die Ausgabe unwiderrufliche Entscheidungen betrifft.' },
        ],
      },
      related_reading: {
        title: 'Weiterführende Lektüre',
        items: [
          { title: 'Prompt Chaining: Multi-Step Prompting', url: '/prompt-engineering/prompt-chaining' },
          { title: 'Prompt Engineering for Developers Workflow', url: '/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt Engineering for Content Teams', url: '/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt Engineering for Support Operations', url: '/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Best Tools for Structured Output', url: '/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },

  es: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatización',
    title: 'De prompts a flujos de trabajo repetibles: plantillas de automatización para equipos en producción',
    seoTitle: 'Prompts a flujos de trabajo repetibles: 4 plantillas',
    intro: 'Un único prompt que se ejecuta cuando alguien recuerda ejecutarlo no es un sistema — es una tarea. Esta guía muestra cómo convertir prompts en flujos de trabajo repetibles con condiciones de activación definidas, gestión de estado y cuatro plantillas listas para producción que cubren procesamiento de documentos, pipelines de investigación, revisión de código y triage de clientes.',
    metaDescription: 'Convierte prompts en flujos automatizados: activadores, estado y manejo de errores. 4 plantillas: documentos, investigación, revisión de código y triage.',
    ogDescription: '4 plantillas de flujos de trabajo de producción: procesamiento de documentos (n8n + GPT), investigación (LangChain), revisión de código (GitHub Actions + Claude), triage (Make + PromptQuorum).',
    twitterDescription: 'Un prompt que ejecutas manualmente es una tarea. Un prompt con un activador, enrutamiento y manejo de errores es un flujo de trabajo. 4 plantillas de producción.',
    publishDate: '2026-05-02',
    readTime: '11 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'Flujos de trabajo de prompts repetibles',
    leadAnswerBlock: '**Un flujo de trabajo repetible es un proceso basado en prompts con condiciones de activación definidas, entradas, salidas y manejo de errores que se ejecuta de forma consistente sin intervención manual.** La diferencia entre un prompt y un flujo de trabajo es si necesitas estar presente para que se ejecute.',
    quickFacts: [
      'Automatiza cuando la frecuencia supera 5 ejecuciones por semana con entradas estructuradas',
      '3 tipos de activadores: basado en eventos (webhook), basado en programación (cron), basado en umbrales (métrica)',
      'Make cuesta $0–$16/mes para hasta 10.000 operaciones; n8n es gratuito y auto-alojable',
      'Se requiere esquema de salida JSON en cada límite de paso — nunca pases texto sin estructura',
      'La mayoría de los equipos de producción alcanzan el 70–80% de automatización con el 20–30% de revisión humana en casos límite',
      '4 plantillas: procesamiento de documentos, pipeline de investigación, revisión de código, triage de clientes',
    ],
    toc: [
      { label: 'La diferencia entre un prompt y un flujo de trabajo', anchor: 'prompt_vs_workflow' },
      { label: 'Condiciones de activación y gestión de estado', anchor: 'triggering' },
      { label: '4 plantillas de flujos de trabajo para equipos de producción', anchor: 'four_templates' },
      { label: 'Herramientas para construir flujos de trabajo de prompts', anchor: 'tools' },
      { label: 'Cuándo automatizar vs mantener manual', anchor: 'when_to_automate' },
      { label: 'Errores comunes', anchor: 'common_mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Lecturas relacionadas', anchor: 'related_reading' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/es/prompt-engineering/prompts-to-repeatable-workflows?lang=es',
      inLanguage: 'es',
      headline: 'De prompts a flujos de trabajo repetibles: plantillas de automatización para equipos en producción',
      description: 'Convierte prompts en flujos de trabajo automatizados con activadores, gestión de estado y manejo de errores. 4 plantillas: procesamiento de documentos, investigación, revisión de código, triage.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['flujos de trabajo de prompts', 'plantillas de automatización', 'prompts repetibles', 'LangChain workflow', 'n8n prompts', 'Make automatización'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'Un flujo de trabajo es un prompt con un activador, enrutamiento de salida y manejo de errores — no solo un prompt ejecutado automáticamente. Automatiza cuando la frecuencia supera 5 ejecuciones por semana con entradas estructuradas. Cuatro plantillas de producción cubren los casos de uso más comunes.',
      },
      prompt_vs_workflow: {
        title: 'La diferencia entre un prompt y un flujo de trabajo',
        snippets: [
          { type: 'in-one-sentence', text: 'Un flujo de trabajo es un prompt que se ejecuta automáticamente cuando un activador se dispara y enruta su salida a un siguiente paso definido sin intervención humana.' },
          { type: 'in-plain-terms', text: 'Piensa en un flujo de trabajo como un prompt al que se le ha dado un título de trabajo: sabe cuándo empezar, qué hacer con el resultado y qué hacer cuando algo sale mal.' },
        ],
        content: [
          '**Un prompt requiere que un humano decida cuándo ejecutarlo y qué hacer con la salida; un flujo de trabajo se ejecuta automáticamente cuando se cumple una condición y enruta la salida al siguiente paso.** Esta es la distinción operacional — no una diferencia en el texto del prompt en sí.',
          'Un prompt que extrae datos de facturas sigue siendo solo un prompt si alguien copia y pega cada factura manualmente en ChatGPT. La misma lógica de extracción se convierte en un flujo de trabajo cuando una carga de archivo lo activa, la salida se parsea en un registro estructurado y ese registro se enruta a un sistema de contabilidad.',
          'Automatiza cuando ejecutas el mismo prompt más de 5 veces por semana con el mismo activador y la salida siempre va al mismo siguiente paso. Por debajo de esa frecuencia, o cuando las entradas varían significativamente, el prompting manual es más rápido que construir infraestructura de automatización.',
        ],
        callouts: [
          { type: 'insight', label: 'Definición operacional', text: 'La diferencia entre un prompt y un flujo de trabajo no es el texto del prompt — es si el sistema decide cuándo ejecutarlo y qué pasa después.' },
        ],
      },
      triggering: {
        title: 'Condiciones de activación y gestión de estado',
        content: [
          '**Tres tipos de activadores cubren casi todos los flujos de trabajo de prompts de producción: basado en eventos, basado en programación y basado en umbrales.** Elegir el tipo de activador equivocado es una de las principales razones por las que los flujos de trabajo se ejecutan demasiado a menudo, no suficientemente o con datos obsoletos.',
          'Los activadores basados en eventos se disparan en un evento específico: un webhook se dispara cuando se carga un archivo, se envía un formulario o llega una llamada a la API. Los activadores basados en programación se disparan según un cron. Los activadores basados en umbrales se disparan cuando una métrica cruza un valor — tasa de error superior al 5%, profundidad de cola de tickets superior a 100, puntuación de sentimiento inferior a 0.4.',
          'La gestión de estado es cómo la salida de un paso se pasa al siguiente sin perder contexto. Define un esquema de salida JSON en cada límite de paso. Almacena los resultados intermedios en un almacén de variables. Nunca pases la salida del modelo sin estructura como entrada al siguiente paso — parsea primero.',
        ],
        callouts: [
          { type: 'warning', label: 'Fallo de gestión de estado', text: 'Pasar la salida del modelo sin estructura entre pasos es la causa más común de fallos silenciosos en flujos de trabajo. Siempre define un esquema JSON en cada límite de paso y valida antes de enrutar.' },
        ],
      },
      four_templates: {
        title: '4 plantillas de flujos de trabajo para equipos de producción',
        content: [
          '**Cuatro plantillas cubren los casos de uso de producción más comunes: procesamiento de documentos, pipeline de investigación, revisión de código y triage de clientes.**',
        ],
        numberedItems: [
          'Procesamiento de documentos — activador: nuevo PDF cargado → extraer datos clave (fechas, partes, importes) → clasificar tipo de documento → enrutar a la cola del revisor asignado. Herramientas: n8n para orquestación + GPT-5.5 para extracción y clasificación. Salida: registro JSON estructurado escrito en una base de datos compartida.',
          'Pipeline de investigación — activador: lista de temas enviada → buscar fuentes web → resumir cada fuente → sintetizar en un informe estructurado. Herramientas: LangChain para orquestación multi-paso + API de Perplexity para búsqueda web. Salida: informe markdown con citas, almacenado en una carpeta compartida.',
          'Bucle de revisión de código — activador: pull request abierto → analizar diff → generar comentarios de revisión inline categorizados por severidad → publicar comentarios en el PR. Herramientas: GitHub Actions para el activador + Claude 4.6 Sonnet para el análisis del diff. Salida: comentarios de PR publicados a través de la API de GitHub.',
          'Triage de clientes — activador: nuevo ticket de soporte recibido → clasificar severidad (P1/P2/P3) → enrutar a la cola correcta → generar un borrador de primera respuesta. Herramientas: Make para orquestación + PromptQuorum para despacho multi-modelo (despacha a GPT-5.5 para clasificación, Claude 4.6 Sonnet para generación de borrador). Salida: ticket actualizado con etiqueta de severidad y respuesta borrador.',
        ],
      },
      tools: {
        title: 'Herramientas para construir flujos de trabajo de prompts',
        content: [
          '**La herramienta correcta depende de si tu equipo prefiere automatización visual, pipelines de código primero o despacho multi-modelo.**',
          'Make (anteriormente Integromat) es un constructor de flujos de trabajo visual sin código. Coste: $0 para hasta 1.000 operaciones/mes, $16/mes para 10.000 operaciones. Mejor para: equipos no técnicos, integraciones de CRM y email, pipelines de acción-activador sencillos. n8n es de código abierto y auto-alojable a $0 de coste. LangChain (Python y JavaScript) es un framework de código primero para construir pipelines de prompts de múltiples pasos con memoria, agentes y uso de herramientas.',
          'PromptQuorum añade despacho multi-modelo y comparación de salidas en paralelo entre GPT-5.5, Claude 4.6 Sonnet y Gemini 2.5 Pro — úsalo en cualquier paso donde la selección del modelo afecte la calidad de la salida.',
        ],
        callouts: [
          { type: 'tip', label: 'Regla de selección de herramienta', text: 'Comienza con Make o n8n para la orquestación y añade PromptQuorum en cualquier paso donde necesites comparar salidas de modelos o despachar al mejor modelo para ese tipo de paso.' },
        ],
      },
      when_to_automate: {
        title: 'Cuándo automatizar vs mantener manual',
        content: [
          '**Automatiza un flujo de trabajo de prompts cuando: la frecuencia supera 5 ejecuciones por semana, las entradas son estructuradas y predecibles, y la salida se enruta a un siguiente paso definido cada vez.** Las tres condiciones deben ser verdaderas para que la automatización sea rentable.',
          'Mantén manual cuando las entradas varían de forma impredecible, cuando se requiere juicio humano en cada caso en lugar de solo en casos límite, o cuando el volumen actual está por debajo de 5 ejecuciones por semana.',
          'Una tercera categoría es híbrida: automatiza los pasos estructurados (extracción de datos, clasificación, enrutamiento) y mantén el paso de juicio manual (aprobación final, decisión de escalación). La mayoría de los equipos de producción aterrizan aquí — 70–80% automatizado, 20–30% revisión humana en casos límite.',
        ],
      },
      common_mistakes: {
        title: 'Errores comunes al construir flujos de trabajo de prompts',
        mistakes: [
          { mistake: 'Construir flujos de trabajo antes de validar el prompt', problem: 'Si el prompt subyacente falla, el flujo de trabajo amplifica el fallo a escala', fix: 'Prueba y valida el prompt principal en 10+ ejemplos reales antes de conectarlo a un flujo de trabajo' },
          { mistake: 'Sin manejo de errores ni ruta de fallback', problem: 'Cuando el modelo devuelve una salida inesperada, el flujo de trabajo falla silenciosamente o produce datos corruptos en los pasos siguientes', fix: 'Siempre añade un paso de validación de salida y una ruta de fallback (cola de revisión humana o reintento con modelo alternativo)' },
          { mistake: 'Flujo de trabajo de un solo modelo sin failover', problem: 'Si la API del modelo principal está caída, todo el flujo de trabajo se detiene', fix: 'Diseña flujos de trabajo con una ruta de modelo de respaldo. El despacho multi-modelo de PromptQuorum lo hace sencillo.' },
          { mistake: 'Sin monitoreo en flujos de trabajo automatizados', problem: 'Los flujos de trabajo se ejecutan silenciosamente — no sabes que la calidad de salida se está degradando hasta que el daño en los pasos siguientes se acumula', fix: 'Registra la tasa de aprobación por ejecución. Alerta sobre caídas de calidad >5% semana a semana.' },
        ],
      },
      key_takeaways: {
        title: 'Puntos clave',
        items: [
          'Un flujo de trabajo es un prompt con un activador, enrutamiento de salida y manejo de errores — no solo un prompt ejecutado automáticamente',
          'Automatiza cuando la frecuencia >5/semana, las entradas son estructuradas y la salida siempre se enruta al mismo siguiente paso',
          'Tres tipos de activadores: basado en eventos (webhook/carga), basado en programación (cron), basado en umbrales (métrica)',
          'Define un esquema de salida JSON en cada límite de paso — nunca pases texto sin estructura entre pasos',
          '4 plantillas de producción: procesamiento de documentos (n8n + GPT-5.5), investigación (LangChain + Perplexity), revisión de código (GitHub Actions + Claude 4.6 Sonnet), triage de clientes (Make + PromptQuorum)',
        ],
      },
      faq: {
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es un flujo de trabajo de prompts repetible?', a: 'Un flujo de trabajo de prompts repetible es un proceso basado en prompts que se ejecuta automáticamente cuando se cumple una condición de activación definida, enruta la salida al siguiente paso y maneja los errores sin intervención manual. A diferencia de un prompt de una sola vez, un flujo de trabajo no requiere que un humano decida cuándo ejecutarlo o qué hacer con el resultado.' },
          { q: '¿Cuál es la estructura mínima viable de un flujo de trabajo?', a: 'Un flujo de trabajo mínimo tiene 4 componentes: un activador (programado, dirigido por eventos o llamada a API), un paso de ejecución del prompt (llama a la API LLM con el prompt formateado), un paso de validación de salida (verifica los requisitos de formato y calidad) y un paso de enrutamiento (envía la salida al siguiente sistema o marca para revisión humana).' },
          { q: '¿Cómo elijo entre Make, n8n y LangChain para flujos de trabajo de prompts?', a: 'Usa Make para equipos que necesitan una interfaz visual sin código con 1.000+ integraciones de apps. Usa n8n para equipos que quieren control auto-alojado y acceso al código fuente. Usa LangChain para desarrolladores que construyen cadenas complejas de múltiples pasos con memoria, recuperación y uso de herramientas en Python o JavaScript.' },
          { q: '¿Cuándo debo automatizar un flujo de trabajo de prompts vs mantenerlo manual?', a: 'Automatiza cuando: el prompt se ejecuta más de 10 veces al día, las entradas siguen un formato predecible, la salida se alimenta directamente a otro sistema y la tasa de aprobación en un conjunto de pruebas supera el 90%. Mantén manual cuando: las entradas son muy variadas, la tarea requiere juicio que no puede puntuarse automáticamente, o la salida afecta decisiones irreversibles (legales, financieras, médicas).' },
        ],
      },
      related_reading: {
        title: 'Lecturas relacionadas',
        items: [
          { title: 'Encadenamiento de prompts: prompting multi-paso', url: '/prompt-engineering/prompt-chaining' },
          { title: 'Flujo de trabajo de prompt engineering para desarrolladores', url: '/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt engineering para equipos de contenido', url: '/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt engineering para operaciones de soporte', url: '/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Mejores herramientas para salida estructurada', url: '/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: 'Fuentes',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },

  pt: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automação',
    title: 'De prompts a fluxos de trabalho repetíveis: modelos de automação para equipes em produção',
    seoTitle: 'Prompts a fluxos de trabalho repetíveis: 4 modelos',
    intro: 'Um único prompt executado apenas quando alguém se lembra de rodá-lo não é um sistema — é uma tarefa. Este guia mostra como transformar prompts em fluxos de trabalho repetíveis com condições de acionamento definidas, gerenciamento de estado e quatro modelos prontos para produção que cobrem processamento de documentos, pipelines de pesquisa, revisão de código e triagem de clientes.',
    metaDescription: 'Converta prompts em fluxos automatizados: acionadores, estado e tratamento de erros. 4 modelos: documentos, pesquisa, revisão de código e triagem.',
    ogDescription: '4 modelos de fluxos de trabalho em produção: processamento de documentos (n8n + GPT), pesquisa (LangChain), revisão de código (GitHub Actions + Claude), triagem (Make + PromptQuorum).',
    twitterDescription: 'Um prompt executado manualmente é uma tarefa. Um prompt com acionador, roteamento e tratamento de erros é um fluxo de trabalho. 4 modelos de produção.',
    publishDate: '2026-05-02',
    readTime: '11 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'Fluxos de trabalho de prompts repetíveis',
    leadAnswerBlock: '**Um fluxo de trabalho repetível é um processo baseado em prompts com condições de acionamento definidas, entradas, saídas e tratamento de erros que executa de forma consistente sem intervenção manual.** A diferença entre um prompt e um fluxo de trabalho é se você precisa estar presente para que ele seja executado.',
    quickFacts: [
      'Automatize quando a frequência ultrapassar 5 execuções por semana com entradas estruturadas',
      '3 tipos de acionadores: baseado em eventos (webhook), baseado em agendamento (cron), baseado em limiar (métrica)',
      'Make custa R$0–R$80/mês para até 10.000 operações; n8n é gratuito e auto-hospedável',
      'Schema de saída JSON é obrigatório em cada limite de etapa — nunca passe texto sem estrutura',
      'A maioria das equipes de produção alcança 70–80% de automação com 20–30% de revisão humana em casos limite',
      '4 modelos: processamento de documentos, pipeline de pesquisa, revisão de código, triagem de clientes',
    ],
    toc: [
      { label: 'A diferença entre um prompt e um fluxo de trabalho', anchor: 'prompt_vs_workflow' },
      { label: 'Condições de acionamento e gerenciamento de estado', anchor: 'triggering' },
      { label: '4 modelos de fluxos de trabalho para equipes de produção', anchor: 'four_templates' },
      { label: 'Ferramentas para construir fluxos de trabalho de prompts', anchor: 'tools' },
      { label: 'Quando automatizar vs manter manual', anchor: 'when_to_automate' },
      { label: 'Erros comuns', anchor: 'common_mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Leituras relacionadas', anchor: 'related_reading' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/pt/prompt-engineering/prompts-to-repeatable-workflows',
      inLanguage: 'pt-BR',
      headline: 'De prompts a fluxos de trabalho repetíveis: modelos de automação para equipes em produção',
      description: 'Converta prompts em fluxos de trabalho automatizados com acionadores, gerenciamento de estado e tratamento de erros. 4 modelos: processamento de documentos, pesquisa, revisão de código, triagem.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['fluxos de trabalho de prompts', 'modelos de automação', 'prompts repetíveis', 'LangChain workflow', 'n8n prompts', 'Make automação'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'TL;DR',
        content: 'Um fluxo de trabalho é um prompt com um acionador, roteamento de saída e tratamento de erros — não apenas um prompt executado automaticamente. Automatize quando a frequência ultrapassar 5 execuções por semana com entradas estruturadas. Quatro modelos de produção cobrem os casos de uso mais comuns.',
      },
      prompt_vs_workflow: {
        title: 'A diferença entre um prompt e um fluxo de trabalho',
        snippets: [
          { type: 'in-one-sentence', text: 'Um fluxo de trabalho é um prompt que é executado automaticamente quando um acionador dispara e roteia sua saída para uma etapa seguinte definida sem intervenção humana.' },
          { type: 'in-plain-terms', text: 'Pense em um fluxo de trabalho como um prompt que recebeu um cargo: ele sabe quando começar, o que fazer com o resultado e o que fazer quando algo dá errado.' },
        ],
        content: [
          '**Um prompt exige que um humano decida quando executá-lo e o que fazer com a saída; um fluxo de trabalho é executado automaticamente quando uma condição é satisfeita e roteia a saída para a próxima etapa.** Essa é a distinção operacional — não uma diferença no texto do prompt em si.',
          'Um prompt que extrai dados de faturas continua sendo apenas um prompt se alguém copia e cola manualmente cada fatura no ChatGPT. A mesma lógica de extração se torna um fluxo de trabalho quando um upload de arquivo o aciona, a saída é analisada em um registro estruturado e esse registro é roteado para um sistema de contabilidade.',
          'Automatize quando você executar o mesmo prompt mais de 5 vezes por semana com o mesmo acionador e a saída sempre for para a mesma próxima etapa. Abaixo dessa frequência, ou quando as entradas variam significativamente, o prompting manual é mais rápido do que construir infraestrutura de automação.',
        ],
        callouts: [
          { type: 'insight', label: 'Definição operacional', text: 'A diferença entre um prompt e um fluxo de trabalho não está no texto do prompt — está em se o sistema decide quando executá-lo e o que acontece depois.' },
        ],
      },
      triggering: {
        title: 'Condições de acionamento e gerenciamento de estado',
        content: [
          '**Três tipos de acionadores cobrem quase todos os fluxos de trabalho de prompts em produção: baseado em eventos, baseado em agendamento e baseado em limiar.** Escolher o tipo de acionador errado é uma das principais razões pelas quais os fluxos de trabalho são executados com muita frequência, com pouca frequência ou com dados desatualizados.',
          'Acionadores baseados em eventos disparam em um evento específico: um webhook dispara quando um arquivo é carregado, um formulário é enviado ou uma chamada de API chega. Acionadores baseados em agendamento disparam com base em um cron. Acionadores baseados em limiar disparam quando uma métrica cruza um valor — taxa de erro acima de 5%, profundidade da fila de tickets acima de 100, pontuação de sentimento abaixo de 0,4.',
          'O gerenciamento de estado é como a saída de uma etapa é passada para a próxima sem perder o contexto. Defina um schema de saída JSON em cada limite de etapa. Armazene resultados intermediários em um repositório de variáveis. Nunca passe a saída bruta do modelo sem estrutura como entrada para a próxima etapa — analise primeiro.',
        ],
        callouts: [
          { type: 'warning', label: 'Falha no gerenciamento de estado', text: 'Passar saída do modelo sem estrutura entre etapas é a causa mais comum de falhas silenciosas em fluxos de trabalho. Sempre defina um schema JSON em cada limite de etapa e valide antes de rotear.' },
        ],
      },
      four_templates: {
        title: '4 modelos de fluxos de trabalho para equipes de produção',
        content: [
          '**Quatro modelos cobrem os casos de uso de produção mais comuns: processamento de documentos, pipeline de pesquisa, revisão de código e triagem de clientes.**',
        ],
        numberedItems: [
          'Processamento de documentos — acionador: novo PDF carregado → extrair dados principais (datas, partes, valores) → classificar tipo de documento → rotear para a fila do revisor designado. Ferramentas: n8n para orquestração + GPT-5.5 para extração e classificação. Saída: registro JSON estruturado gravado em um banco de dados compartilhado.',
          'Pipeline de pesquisa — acionador: lista de tópicos enviada → pesquisar fontes na web → resumir cada fonte → sintetizar em um relatório estruturado. Ferramentas: LangChain para orquestração de múltiplas etapas + API do Perplexity para pesquisa na web. Saída: relatório markdown com citações, armazenado em uma pasta compartilhada.',
          'Loop de revisão de código — acionador: pull request aberto → analisar diff → gerar comentários de revisão inline categorizados por severidade → publicar comentários no PR. Ferramentas: GitHub Actions para o acionador + Claude 4.6 Sonnet para análise do diff. Saída: comentários de PR publicados via API do GitHub.',
          'Triagem de clientes — acionador: novo ticket de suporte recebido → classificar severidade (P1/P2/P3) → rotear para a fila correta → gerar um rascunho de primeira resposta. Ferramentas: Make para orquestração + PromptQuorum para despacho multi-modelo (despacha para GPT-5.5 para classificação, Claude 4.6 Sonnet para geração de rascunho). Saída: ticket atualizado com rótulo de severidade e resposta em rascunho.',
        ],
      },
      tools: {
        title: 'Ferramentas para construir fluxos de trabalho de prompts',
        content: [
          '**A ferramenta certa depende de se sua equipe prefere automação visual, pipelines code-first ou despacho multi-modelo.**',
          'Make (anteriormente Integromat) é um construtor de fluxos de trabalho visual sem código. Custo: R$0 para até 1.000 operações/mês, ~R$80/mês para 10.000 operações. Melhor para: equipes não técnicas, integrações de CRM e e-mail, pipelines de ação-acionador simples. n8n é open-source e auto-hospedável a R$0 de custo. LangChain (Python e JavaScript) é um framework code-first para construir pipelines de prompts de múltiplas etapas com memória, agentes e uso de ferramentas.',
          'PromptQuorum adiciona despacho multi-modelo e comparação de saídas em paralelo entre GPT-5.5, Claude 4.6 Sonnet e Gemini 2.5 Pro — use-o em qualquer etapa onde a seleção do modelo afeta a qualidade da saída.',
        ],
        callouts: [
          { type: 'tip', label: 'Regra de seleção de ferramenta', text: 'Comece com Make ou n8n para orquestração e adicione PromptQuorum em qualquer etapa onde você precisa comparar saídas de modelos ou despachar para o melhor modelo.' },
        ],
      },
      when_to_automate: {
        title: 'Quando automatizar vs manter manual',
        content: [
          '**Automatize um fluxo de trabalho de prompts quando: a frequência ultrapassar 5 execuções por semana, as entradas forem estruturadas e previsíveis, e a saída for roteada para uma próxima etapa definida a cada vez.** As três condições devem ser verdadeiras para que a automação seja rentável.',
          'Mantenha manual quando as entradas variam de forma imprevisível, quando o julgamento humano é necessário em cada caso em vez de apenas em casos limite, ou quando o volume atual está abaixo de 5 execuções por semana.',
          'Uma terceira categoria é híbrida: automatize as etapas estruturadas (extração de dados, classificação, roteamento) e mantenha a etapa de julgamento manual (aprovação final, decisão de escalonamento). A maioria das equipes de produção chega aqui — 70–80% automatizado, 20–30% de revisão humana em casos limite.',
        ],
      },
      common_mistakes: {
        title: 'Erros comuns ao construir fluxos de trabalho de prompts',
        mistakes: [
          { mistake: 'Construir fluxos de trabalho antes de validar o prompt', problem: 'Se o prompt subjacente falha, o fluxo de trabalho amplifica a falha em escala', fix: 'Teste e valide o prompt principal em 10+ exemplos reais antes de conectá-lo a um fluxo de trabalho' },
          { mistake: 'Sem tratamento de erros nem rota de fallback', problem: 'Quando o modelo retorna uma saída inesperada, o fluxo de trabalho falha silenciosamente ou produz dados corrompidos nas etapas seguintes', fix: 'Sempre adicione uma etapa de validação de saída e uma rota de fallback (fila de revisão humana ou nova tentativa com modelo alternativo)' },
          { mistake: 'Fluxo de trabalho de modelo único sem failover', problem: 'Se a API do modelo principal estiver indisponível, todo o fluxo de trabalho para', fix: 'Projete fluxos de trabalho com uma rota de modelo de backup. O despacho multi-modelo do PromptQuorum torna isso simples.' },
          { mistake: 'Sem monitoramento em fluxos de trabalho automatizados', problem: 'Os fluxos de trabalho são executados silenciosamente — você não sabe que a qualidade da saída está se degradando até que o dano nas etapas seguintes se acumule', fix: 'Registre a taxa de aprovação por execução. Alerte sobre quedas de qualidade >5% semana a semana.' },
        ],
      },
      key_takeaways: {
        title: 'Pontos principais',
        items: [
          'Um fluxo de trabalho é um prompt com um acionador, roteamento de saída e tratamento de erros — não apenas um prompt executado automaticamente',
          'Automatize quando a frequência >5/semana, as entradas são estruturadas e a saída sempre é roteada para a mesma próxima etapa',
          'Três tipos de acionadores: baseado em eventos (webhook/upload), baseado em agendamento (cron), baseado em limiar (métrica)',
          'Defina um schema de saída JSON em cada limite de etapa — nunca passe texto sem estrutura entre etapas',
          '4 modelos de produção: processamento de documentos (n8n + GPT-5.5), pesquisa (LangChain + Perplexity), revisão de código (GitHub Actions + Claude 4.6 Sonnet), triagem de clientes (Make + PromptQuorum)',
        ],
      },
      faq: {
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que é um fluxo de trabalho de prompts repetível?', a: 'Um fluxo de trabalho de prompts repetível é um processo baseado em prompts que é executado automaticamente quando uma condição de acionamento definida é satisfeita, roteia a saída para a próxima etapa e trata erros sem intervenção manual. Diferente de um prompt único, um fluxo de trabalho não exige que um humano decida quando executá-lo ou o que fazer com o resultado.' },
          { q: 'Qual é a estrutura mínima viável de um fluxo de trabalho?', a: 'Um fluxo de trabalho mínimo tem 4 componentes: um acionador (agendado, orientado por eventos ou chamada de API), uma etapa de execução do prompt (chama a API LLM com o prompt formatado), uma etapa de validação de saída (verifica requisitos de formato e qualidade) e uma etapa de roteamento (envia a saída para o próximo sistema ou marca para revisão humana).' },
          { q: 'Como escolher entre Make, n8n e LangChain para fluxos de trabalho de prompts?', a: 'Use Make para equipes que precisam de uma interface visual sem código com 1.000+ integrações de aplicativos. Use n8n para equipes que querem controle auto-hospedado e acesso ao código-fonte. Use LangChain para desenvolvedores que constroem cadeias complexas de múltiplas etapas com memória, recuperação e uso de ferramentas em Python ou JavaScript.' },
          { q: 'Quando devo automatizar um fluxo de trabalho de prompts vs manter manual?', a: 'Automatize quando: o prompt é executado mais de 10 vezes por dia, as entradas seguem um formato previsível, a saída se alimenta diretamente de outro sistema e a taxa de aprovação em um conjunto de testes supera 90%. Mantenha manual quando: as entradas são muito variadas, a tarefa requer julgamento que não pode ser pontuado automaticamente, ou a saída afeta decisões irreversíveis (legais, financeiras, médicas).' },
        ],
      },
      related_reading: {
        title: 'Leituras relacionadas',
        items: [
          { title: 'Encadeamento de prompts: prompting em múltiplas etapas', url: '/pt/prompt-engineering/prompt-chaining' },
          { title: 'Fluxo de trabalho de prompt engineering para desenvolvedores', url: '/pt/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt engineering para equipes de conteúdo', url: '/pt/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt engineering para operações de suporte', url: '/pt/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Melhores ferramentas para saída estruturada', url: '/pt/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: 'Fontes',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Workflows & Automatisation',
    title: 'Des prompts aux workflows répétables : modèles d\'automatisation pour les équipes en production',
    seoTitle: 'Prompts vers workflows répétables : modèles d\'automatisation',
    intro: 'Un prompt unique exécuté uniquement quand quelqu\'un s\'en souvient n\'est pas un système — c\'est une tâche. Ce guide explique comment convertir des prompts en workflows répétables avec des conditions de déclenchement définies, une gestion d\'état, et quatre modèles prêts pour la production.',
    metaDescription: 'Convertir des prompts en workflows automatisés avec déclencheurs, gestion d\'état et gestion des erreurs. 4 modèles : traitement de documents, recherche, revue de code, triage.',
    ogDescription: '4 modèles de workflows de production : traitement de documents (n8n + GPT), recherche (LangChain), revue de code (GitHub Actions + Claude), triage (Make + PromptQuorum).',
    twitterDescription: 'Un prompt exécuté manuellement est une tâche. Un prompt avec déclencheur, routage et gestion des erreurs est un workflow. 4 modèles de production.',
    publishDate: '2026-05-02',
    readTime: '11 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'Workflows de prompts répétables',
    leadAnswerBlock: '**Un workflow répétable est un processus basé sur des prompts avec des conditions de déclenchement définies, des entrées, des sorties et une gestion des erreurs qui s\'exécute de manière cohérente sans intervention manuelle.** La différence entre un prompt et un workflow est de savoir si vous devez être présent pour qu\'il s\'exécute.',
    quickFacts: [
      'Automatisez quand la fréquence dépasse 5 exécutions par semaine avec des entrées structurées',
      '3 types de déclencheurs : événementiel (webhook), planifié (cron), par seuil (métrique)',
      'Make coûte 0–16 $/mois pour 10 000 opérations ; n8n est gratuit et auto-hébergeable',
      'Schéma de sortie JSON requis à chaque frontière d\'étape — ne jamais passer de texte brut',
      'La plupart des équipes atteignent 70–80 % d\'automatisation avec 20–30 % de révision humaine',
      '4 modèles : traitement de documents, pipeline de recherche, revue de code, triage client',
    ],
    toc: [
      { label: 'La différence entre un prompt et un workflow', anchor: 'prompt_vs_workflow' },
      { label: 'Conditions de déclenchement et gestion de l\'état', anchor: 'triggering' },
      { label: '4 modèles de workflows pour les équipes en production', anchor: 'four_templates' },
      { label: 'Outils pour créer des workflows de prompts', anchor: 'tools' },
      { label: 'Quand automatiser vs rester manuel', anchor: 'when_to_automate' },
      { label: 'Erreurs courantes', anchor: 'common_mistakes' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Lectures connexes', anchor: 'related_reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/fr/prompt-engineering/prompts-to-repeatable-workflows',
      inLanguage: 'fr',
      headline: 'Des prompts aux workflows répétables : modèles d\'automatisation pour les équipes en production',
      description: 'Convertir des prompts en workflows automatisés avec déclencheurs, gestion d\'état et gestion des erreurs. 4 modèles : traitement de documents, recherche, revue de code, triage.',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['workflows de prompts', 'automatisation', 'prompts répétables', 'LangChain workflow', 'n8n prompts', 'Make automatisation'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'En bref',
        content: 'Un workflow est un prompt avec un déclencheur, un routage de sortie et une gestion des erreurs — pas seulement un prompt exécuté automatiquement. Automatisez quand la fréquence dépasse 5 exécutions par semaine avec des entrées structurées. Quatre modèles de production couvrent les cas d\'usage les plus courants.',
      },
      prompt_vs_workflow: {
        title: 'La différence entre un prompt et un workflow',
        snippets: [
          { type: 'in-one-sentence', text: 'Un workflow est un prompt qui s\'exécute automatiquement quand un déclencheur se déclenche et achemine sa sortie vers une étape suivante définie sans intervention humaine.' },
          { type: 'in-plain-terms', text: 'Imaginez un workflow comme un prompt qui a reçu un titre de poste : il sait quand démarrer, quoi faire avec le résultat, et quoi faire en cas de problème.' },
        ],
        content: [
          '**Un prompt nécessite qu\'un humain décide quand l\'exécuter et quoi faire avec la sortie ; un workflow s\'exécute automatiquement lorsqu\'une condition est remplie et achemine la sortie vers l\'étape suivante.** C\'est la distinction opérationnelle — pas une différence dans le texte du prompt lui-même.',
          'Un prompt qui extrait des données de facture est toujours un simple prompt si quelqu\'un copie-colle manuellement chaque facture dans ChatGPT. La même logique d\'extraction devient un workflow lorsqu\'un envoi de fichier le déclenche, que la sortie est analysée dans un enregistrement structuré et que cet enregistrement est acheminé vers un système comptable.',
          'Automatisez lorsque vous exécutez le même prompt plus de 5 fois par semaine avec le même déclencheur et que la sortie va toujours à la même étape suivante. En dessous de cette fréquence, ou lorsque les entrées varient significativement, le prompting manuel est plus rapide.',
        ],
        callouts: [
          { type: 'insight', label: 'Définition opérationnelle', text: 'La différence entre un prompt et un workflow n\'est pas le texte du prompt — c\'est si le système décide quand l\'exécuter et ce qui se passe ensuite.' },
        ],
      },
      triggering: {
        title: 'Conditions de déclenchement et gestion de l\'état',
        content: [
          '**Trois types de déclencheurs couvrent presque tous les workflows de prompts en production : événementiel, planifié, et par seuil.** Choisir le mauvais type de déclencheur est l\'une des principales raisons pour lesquelles les workflows s\'exécutent trop souvent, pas assez, ou sur des données périmées.',
          'Les déclencheurs événementiels se déclenchent sur un événement spécifique : un webhook se déclenche lors d\'un téléchargement de fichier, d\'une soumission de formulaire ou d\'un appel API. Les déclencheurs planifiés se déclenchent sur un cron. Les déclencheurs par seuil se déclenchent lorsqu\'une métrique dépasse une valeur — taux d\'erreur supérieur à 5 %, score de sentiment inférieur à 0,4.',
          'La gestion d\'état désigne la manière dont la sortie d\'une étape est transmise à la suivante sans perdre le contexte. Définissez un schéma de sortie JSON à chaque frontière d\'étape. Ne transmettez jamais une sortie de modèle brute non structurée comme entrée à l\'étape suivante.',
        ],
        callouts: [
          { type: 'warning', label: 'Échec de gestion d\'état', text: 'Transmettre des sorties de modèle brutes non structurées entre les étapes est la cause la plus courante d\'échecs silencieux de workflow. Définissez toujours un schéma JSON à chaque frontière d\'étape.' },
        ],
      },
      four_templates: {
        title: '4 modèles de workflows pour les équipes en production',
        content: [
          '**Quatre modèles couvrent les cas d\'usage les plus courants : traitement de documents, pipeline de recherche, revue de code et triage client.**',
        ],
        numberedItems: [
          'Traitement de documents — déclencheur : nouveau PDF téléchargé → extraire les données clés → classifier le type de document → acheminer vers la file de révision. Outils : n8n + GPT-5.5. Sortie : enregistrement JSON structuré écrit dans une base de données partagée.',
          'Pipeline de recherche — déclencheur : liste de sujets soumise → rechercher des sources web → résumer chaque source → générer un rapport structuré. Outils : LangChain + API Perplexity. Sortie : rapport Markdown avec citations.',
          'Boucle de revue de code — déclencheur : pull request ouverte → analyser le diff → générer des commentaires catégorisés par sévérité → publier les commentaires sur la PR. Outils : GitHub Actions + Claude 4.6 Sonnet. Sortie : commentaires PR publiés via l\'API GitHub.',
          'Triage client — déclencheur : nouveau ticket de support reçu → classifier la sévérité (P1/P2/P3) → acheminer vers la bonne file → générer un brouillon de première réponse. Outils : Make + PromptQuorum. Sortie : ticket mis à jour avec label de sévérité et brouillon de réponse.',
        ],
      },
      tools: {
        title: 'Outils pour créer des workflows de prompts',
        content: [
          '**Le bon outil dépend de si votre équipe préfère l\'automatisation visuelle, les pipelines basés sur le code, ou le dispatch multi-modèle.**',
          'Make est un générateur de workflows visuel sans code. Coût : 0 $ pour 1 000 opérations/mois, 16 $/mois pour 10 000 opérations. n8n est open-source et auto-hébergeable à 0 $. LangChain (Python et JavaScript) est un framework basé sur le code pour des pipelines de prompts multi-étapes.',
          'PromptQuorum ajoute le dispatch multi-modèle et la comparaison côte à côte des sorties entre GPT-5.5, Claude 4.6 Sonnet et Gemini 2.5 Pro. Utilisez-le à toute étape où le choix du modèle affecte la qualité de la sortie.',
        ],
        callouts: [
          { type: 'tip', label: 'Règle de sélection d\'outil', text: 'Commencez avec Make ou n8n pour l\'orchestration et ajoutez PromptQuorum aux étapes où vous avez besoin de comparer les sorties des modèles ou de dispatcher vers le meilleur modèle.' },
        ],
      },
      when_to_automate: {
        title: 'Quand automatiser vs rester manuel',
        content: [
          '**Automatisez un workflow de prompts lorsque : la fréquence dépasse 5 exécutions par semaine, les entrées sont structurées et prévisibles, et la sortie est acheminée vers une étape suivante définie à chaque fois.** Les trois conditions doivent être vraies pour que l\'automatisation soit rentable.',
          'Restez manuel lorsque les entrées varient de façon imprévisible, lorsqu\'un jugement humain est requis dans chaque cas, ou lorsque le volume actuel est inférieur à 5 exécutions par semaine.',
          'Une troisième catégorie est hybride : automatiser les étapes structurées et garder l\'étape de jugement manuelle. La plupart des équipes en production arrivent ici — 70–80 % automatisé, 20–30 % de révision humaine pour les cas limites.',
        ],
      },
      common_mistakes: {
        title: 'Erreurs courantes lors de la construction de workflows de prompts',
        mistakes: [
          { mistake: 'Construire des workflows avant de valider le prompt', problem: 'Si le prompt sous-jacent échoue, le workflow amplifie l\'échec à grande échelle', fix: 'Testez et validez le prompt principal sur 10+ exemples réels avant de l\'intégrer dans un workflow' },
          { mistake: 'Pas de gestion des erreurs ou de chemin de secours', problem: 'Quand le modèle retourne une sortie inattendue, le workflow échoue silencieusement ou produit des données corrompues en aval', fix: 'Ajoutez toujours une étape de validation de sortie et une route de secours (file de révision humaine ou nouvelle tentative avec un modèle alternatif)' },
          { mistake: 'Workflow mono-modèle sans basculement', problem: 'Si l\'API du modèle principal est indisponible, tout le workflow s\'arrête', fix: 'Concevez des workflows avec une route de modèle de secours. Le dispatch multi-modèle de PromptQuorum rend cela simple.' },
          { mistake: 'Aucune surveillance sur les workflows automatisés', problem: 'Les workflows s\'exécutent silencieusement — vous ne savez pas que la qualité des sorties se dégrade jusqu\'à ce que des dommages en aval s\'accumulent', fix: 'Enregistrez le taux de réussite par exécution. Alertez sur les baisses de qualité >5 % semaine après semaine.' },
        ],
      },
      key_takeaways: {
        title: 'Points clés',
        items: [
          'Un workflow est un prompt avec un déclencheur, un acheminement de sortie et une gestion des erreurs — pas seulement un prompt exécuté automatiquement',
          'Automatisez quand la fréquence >5/semaine, les entrées sont structurées et la sortie est toujours acheminée vers la même étape suivante',
          'Trois types de déclencheurs : événementiel (webhook/envoi), planifié (cron), par seuil (métrique)',
          'Définir un schéma de sortie JSON à chaque frontière d\'étape — ne jamais transmettre du texte brut non structuré',
          '4 modèles de production : traitement de documents (n8n + GPT-5.5), recherche (LangChain + Perplexity), revue de code (GitHub Actions + Claude 4.6 Sonnet), triage client (Make + PromptQuorum)',
        ],
      },
      faq: {
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Qu\'est-ce qu\'un workflow de prompts répétable ?', a: 'Un workflow de prompts répétable est un processus basé sur des prompts qui s\'exécute automatiquement lorsqu\'une condition de déclenchement définie est remplie, achemine la sortie et gère les erreurs sans intervention manuelle.' },
          { q: 'Quelle est la structure minimale d\'un workflow ?', a: 'Un workflow minimal comprend 4 composants : un déclencheur, une étape d\'exécution du prompt, une étape de validation de la sortie, et une étape de routage.' },
          { q: 'Comment choisir entre Make, n8n et LangChain ?', a: 'Utilisez Make pour les équipes qui ont besoin d\'une interface visuelle sans code. Utilisez n8n pour le contrôle auto-hébergé. Utilisez LangChain pour les développeurs construisant des chaînes complexes en Python ou JavaScript.' },
          { q: 'Quand automatiser vs garder manuel ?', a: 'Automatisez quand le prompt s\'exécute plus de 10 fois par jour avec des entrées prévisibles et une sortie qui alimente un autre système. Gardez manuel quand les entrées sont très variées ou que la sortie affecte des décisions irréversibles.' },
        ],
      },
      related_reading: {
        title: 'Lectures connexes',
        items: [
          { title: 'Prompt Chaining: Multi-Step Prompting', url: '/prompt-engineering/prompt-chaining' },
          { title: 'Prompt Engineering for Developers Workflow', url: '/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt Engineering for Content Teams', url: '/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt Engineering for Support Operations', url: '/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Best Tools for Structured Output', url: '/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'ワークフローと自動化',
    title: 'プロンプトから繰り返し可能なワークフローへ：本番チーム向け自動化テンプレート',
    seoTitle: 'プロンプトから繰り返し可能なワークフローへ：自動化テンプレート',
    intro: '誰かが覚えているときだけ実行される単独のプロンプトはシステムではありません——それはタスクです。このガイドでは、明確なトリガー条件、状態管理、そして4つの本番対応テンプレートを使用して、プロンプトを繰り返し可能なワークフローに変換する方法を解説します。',
    metaDescription: 'トリガー、状態管理、エラー処理でプロンプトを自動化ワークフローに変換します。4つの本番対応テンプレート：文書処理、リサーチパイプライン、コードレビュー、トリアージ。',
    ogDescription: '4つの本番ワークフローテンプレート：文書処理（n8n + GPT）、リサーチ（LangChain）、コードレビュー（GitHub Actions + Claude）、トリアージ（Make + PromptQuorum）。',
    twitterDescription: '手動で実行するプロンプトはタスクです。トリガー、ルーティング、エラー処理を持つプロンプトはワークフローです。4つの本番テンプレートを紹介。',
    publishDate: '2026-05-02',
    readTime: '11分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: '繰り返し可能なプロンプトワークフロー',
    leadAnswerBlock: '**繰り返し可能なワークフローとは、明確なトリガー条件、入力、出力、エラー処理を持つプロンプトベースのプロセスであり、手動介入なしに一貫して実行されます。** プロンプトとワークフローの違いは、それを実行するためにあなたが場にいる必要があるかどうかです。',
    quickFacts: [
      '週5回以上の頻度で構造化された入力がある場合に自動化する',
      '3つのトリガータイプ：イベントベース（Webhook）、スケジュールベース（cron）、しきい値ベース（メトリクス）',
      'Makeは10,000オペレーションで月0〜16ドル；n8nは無料で自己ホスト可能',
      'すべてのステップ境界でJSON出力スキーマが必要——非構造化テキストを渡さない',
      'ほとんどの本番チームは70〜80%の自動化と20〜30%の人間によるレビューに落ち着く',
      '4つのテンプレート：文書処理、リサーチパイプライン、コードレビュー、顧客トリアージ',
    ],
    toc: [
      { label: 'プロンプトとワークフローの違い', anchor: 'prompt_vs_workflow' },
      { label: 'トリガー条件と状態管理', anchor: 'triggering' },
      { label: '本番チーム向け4つのワークフローテンプレート', anchor: 'four_templates' },
      { label: 'プロンプトワークフロー構築のためのツール', anchor: 'tools' },
      { label: '自動化すべき状況と手動で行うべき状況', anchor: 'when_to_automate' },
      { label: 'よくある間違い', anchor: 'common_mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連記事', anchor: 'related_reading' },
      { label: '参考資料', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ja/prompt-engineering/prompts-to-repeatable-workflows',
      inLanguage: 'ja',
      headline: 'プロンプトから繰り返し可能なワークフローへ：本番チーム向け自動化テンプレート',
      description: 'トリガー、状態管理、エラー処理を使ってプロンプトを自動化ワークフローに変換。4つのテンプレート：文書処理、リサーチ、コードレビュー、トリアージ。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['プロンプトワークフロー', '自動化テンプレート', '繰り返し可能なプロンプト', 'LangChainワークフロー', 'n8nプロンプト'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '要点',
        content: 'ワークフローはトリガー、出力ルーティング、エラー処理を持つプロンプトです——単に自動実行されるプロンプトではありません。週5回以上の頻度で構造化された入力がある場合に自動化します。4つの本番テンプレートが最も一般的なユースケースをカバーします。',
      },
      prompt_vs_workflow: {
        title: 'プロンプトとワークフローの違い',
        snippets: [
          { type: 'in-one-sentence', text: 'ワークフローはトリガーが発火したときに自動実行され、人間の介入なしに定義された次のステップに出力をルーティングするプロンプトです。' },
          { type: 'in-plain-terms', text: 'ワークフローを肩書きを与えられたプロンプトと考えてください：いつ開始するか、結果をどうするか、そして何か問題が起きたときに何をするかを知っています。' },
        ],
        content: [
          '**プロンプトは人間がいつ実行するか、出力をどう扱うかを決める必要がある。ワークフローは条件が満たされると自動的に実行され、出力を次のステップにルーティングする。** これが操作上の区別であり、プロンプトテキスト自体の違いではありません。',
          '請求書データを抽出するプロンプトは、誰かが手動でChatGPTに各請求書をコピー＆ペーストしている限り、依然として単なるプロンプトです。同じ抽出ロジックは、ファイルアップロードがトリガーとなり、出力が構造化レコードに解析され、そのレコードが会計システムにルーティングされるときにワークフローになります。',
          '同じトリガーで週に5回以上同じプロンプトを実行し、出力が常に同じ次のステップに向かう場合は自動化します。その頻度未満の場合、または入力が大幅に変動する場合は、手動プロンプティングの方が速いです。',
        ],
        callouts: [
          { type: 'insight', label: '操作上の定義', text: 'プロンプトとワークフローの違いはプロンプトテキストにあるのではありません——システムがいつ実行するかを決め、その後何が起きるかという点にあります。' },
        ],
      },
      triggering: {
        title: 'トリガー条件と状態管理',
        content: [
          '**3つのトリガータイプがほぼすべての本番プロンプトワークフローをカバーします：イベントベース、スケジュールベース、しきい値ベース。** 間違ったトリガータイプを選択することが、ワークフローが多すぎる頻度で、少なすぎる頻度で、または古いデータで実行される主な理由の一つです。',
          'イベントベーストリガーは特定のイベントで発火します：ファイルがアップロードされると、フォームが送信されると、またはAPIコールが届くとWebhookが発火します。スケジュールベーストリガーはcronで発火します。しきい値ベーストリガーはメトリクスが値を超えたときに発火します——エラー率が5%を超える、センチメントスコアが0.4を下回る。',
          '状態管理とは、コンテキストを失わずに一つのステップの出力を次のステップに渡す方法です。各ステップの境界でJSON出力スキーマを定義します。変数ストアに中間結果を保存します。非構造化モデル出力を次のステップの入力として渡さないでください——まず解析してください。',
        ],
        callouts: [
          { type: 'warning', label: '状態管理の失敗', text: 'ステップ間で生の非構造化モデル出力を渡すことが、ワークフローのサイレント失敗の最も一般的な原因です。すべてのステップ境界でJSONスキーマを定義し、ルーティング前に検証してください。' },
        ],
      },
      four_templates: {
        title: '本番チーム向け4つのワークフローテンプレート',
        content: [
          '**4つのテンプレートが最も一般的な本番ユースケースをカバーします：文書処理、リサーチパイプライン、コードレビュー、顧客トリアージ。**',
        ],
        numberedItems: [
          '文書処理 — トリガー：新しいPDFアップロード → 主要データを抽出（日付、当事者、金額）→ 文書タイプを分類 → レビュアーキューにルーティング。ツール：n8n + GPT-5.5。出力：共有データベースに書き込まれた構造化JSONレコード。',
          'リサーチパイプライン — トリガー：トピックリスト送信 → ウェブソースを検索 → 各ソースを要約 → 構造化レポートを生成。ツール：LangChain + Perplexity API。出力：引用付きMarkdownレポート。',
          'コードレビューループ — トリガー：プルリクエストが開かれる → diff分析 → 重大度別にレビューコメントを生成 → PRにコメントを投稿。ツール：GitHub Actions + Claude 4.6 Sonnet。出力：GitHub APIを介して投稿されたPRコメント。',
          '顧客トリアージ — トリガー：新しいサポートチケット受信 → 重大度を分類（P1/P2/P3）→ 適切なキューにルーティング → 最初の応答の下書きを生成。ツール：Make + PromptQuorum。出力：重大度ラベルと応答下書きで更新されたチケット。',
        ],
      },
      tools: {
        title: 'プロンプトワークフロー構築のためのツール',
        content: [
          '**適切なツールは、チームがビジュアル自動化、コードファーストパイプライン、またはマルチモデルディスパッチを好むかどうかによって異なります。**',
          'Makeはビジュアルなノーコードワークフロービルダーです。コスト：月1,000オペレーションまで0ドル、10,000オペレーションで月16ドル。n8nはオープンソースで自己ホスト可能（0ドル）。LangChain（PythonとJavaScript）はメモリ、エージェント、ツール使用を備えたマルチステッププロンプトパイプライン向けのコードファーストフレームワークです。',
          'PromptQuorumはGPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proへのマルチモデルディスパッチと出力の並列比較を追加します。モデルの選択が出力品質に影響するステップで使用してください。',
        ],
        callouts: [
          { type: 'tip', label: 'ツール選択ルール', text: 'オーケストレーションにはMakeまたはn8nから始め、モデル出力を比較したり最適なモデルにディスパッチしたいステップでPromptQuorumを追加してください。' },
        ],
      },
      when_to_automate: {
        title: '自動化すべき状況と手動で行うべき状況',
        content: [
          '**プロンプトワークフローを自動化する条件：頻度が週5回を超える、入力が構造化されて予測可能、出力が毎回定義された次のステップにルーティングされる。** 自動化が効果を発揮するには3つの条件すべてが真でなければなりません。',
          '入力が予測不可能に変化する場合、例外ではなくすべてのケースで人間の判断が必要な場合、または現在のボリュームが週5回未満の場合は手動のままにしてください。',
          '3つ目のカテゴリはハイブリッドです：構造化されたステップ（データ抽出、分類、ルーティング）を自動化し、判断ステップ（最終承認、エスカレーション決定）は手動に保ちます。ほとんどの本番チームはここに落ち着きます——70〜80%自動化、20〜30%はエッジケースで人間のレビュー。',
        ],
      },
      common_mistakes: {
        title: 'プロンプトワークフロー構築時のよくある間違い',
        mistakes: [
          { mistake: 'プロンプトを検証する前にワークフローを構築する', problem: '基礎となるプロンプトが失敗すると、ワークフローはその失敗を大規模に増幅する', fix: 'ワークフローに組み込む前に、10以上の実際の例に対してコアプロンプトをテストして検証する' },
          { mistake: 'エラー処理またはフォールバックパスがない', problem: 'モデルが予期しない出力を返すと、ワークフローはサイレントに失敗するか、下流のデータが破損する', fix: '常に出力検証ステップとフォールバックルート（人間のレビューキューまたは代替モデルでの再試行）を追加する' },
          { mistake: 'フェイルオーバーなしのシングルモデルワークフロー', problem: 'プライマリモデルのAPIがダウンすると、ワークフロー全体が停止する', fix: 'フォールバックモデルルートを持つワークフローを設計する。PromptQuorumのマルチモデルディスパッチがこれを簡単にする。' },
          { mistake: '自動化ワークフローの監視なし', problem: 'ワークフローはサイレントに実行される——下流のダメージが蓄積するまで出力品質が低下していることに気づかない', fix: '実行ごとに合格率をログに記録する。週対週で>5%の品質低下についてアラートを設定する。' },
        ],
      },
      key_takeaways: {
        title: '重要なポイント',
        items: [
          'ワークフローはトリガー、出力ルーティング、エラー処理を持つプロンプト——単に自動実行されるプロンプトではない',
          '週5回以上の頻度、構造化された入力、一定の出力ルーティングがある場合は自動化する',
          '3つのトリガータイプ：イベントベース（Webhook/アップロード）、スケジュールベース（cron）、しきい値ベース（メトリクス）',
          '各ステップの境界でJSON出力スキーマを定義——非構造化テキストを渡さない',
          '4つの本番テンプレート：文書処理（n8n + GPT-5.5）、リサーチ（LangChain + Perplexity）、コードレビュー（GitHub Actions + Claude 4.6 Sonnet）、顧客トリアージ（Make + PromptQuorum）',
        ],
      },
      faq: {
        title: 'よくある質問',
        faqs: [
          { q: '繰り返し可能なプロンプトワークフローとは何ですか？', a: '繰り返し可能なプロンプトワークフローとは、定義されたトリガー条件が満たされると自動的に実行され、出力を次のステップにルーティングし、手動介入なしにエラーを処理するプロンプトベースのプロセスです。' },
          { q: '最小限のワークフロー構造とは何ですか？', a: '最小限のワークフローには4つのコンポーネントがあります：トリガー、プロンプト実行ステップ、出力検証ステップ、ルーティングステップ。複雑さに応じて状態管理とエラー処理を追加します。' },
          { q: 'Make、n8n、LangChainの選択方法は？', a: '1,000以上のアプリ統合を持つビジュアルなノーコードインターフェースが必要なチームにはMakeを使用します。自己ホストコントロールを求めるチームにはn8nを使用します。PythonまたはJavaScriptで複雑なマルチステップチェーンを構築する開発者にはLangChainを使用します。' },
          { q: 'いつ自動化してどのような場合に手動で行うべきですか？', a: 'プロンプトが1日10回以上実行され、入力が予測可能で、出力が別のシステムに直接フィードされる場合に自動化します。入力が非常に多様な場合や出力が取り消せない決定に影響する場合は手動のままにします。' },
        ],
      },
      related_reading: {
        title: '関連記事',
        items: [
          { title: 'Prompt Chaining: Multi-Step Prompting', url: '/prompt-engineering/prompt-chaining' },
          { title: 'Prompt Engineering for Developers Workflow', url: '/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt Engineering for Content Teams', url: '/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt Engineering for Support Operations', url: '/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Best Tools for Structured Output', url: '/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: '参考資料',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '工作流与自动化',
    title: '从Prompt到可重复工作流：生产团队的自动化模板',
    seoTitle: 'Prompt到可重复工作流：自动化模板',
    intro: '只有在有人记得运行时才执行的单个Prompt不是一个系统——它只是一个任务。本指南展示如何将Prompt转化为具有明确触发条件、状态管理和四个生产就绪模板的可重复工作流。',
    metaDescription: '使用触发器、状态管理和错误处理将提示词转化为自动化工作流。4个生产级模板：文档处理、研究流程、代码审查、客户分诊。',
    ogDescription: '4个生产工作流模板：文档处理（n8n + GPT）、研究（LangChain）、代码审查（GitHub Actions + Claude）、分诊（Make + PromptQuorum）。',
    twitterDescription: '手动运行的Prompt是任务。带有触发器、路由和错误处理的Prompt是工作流。4个生产模板。',
    publishDate: '2026-05-02',
    readTime: '11分钟阅读',
    educationalLevel: 'Advanced',
    primaryTerm: '可重复Prompt工作流',
    leadAnswerBlock: '**可重复工作流是一个基于Prompt的流程，具有明确的触发条件、输入、输出和错误处理，无需人工干预即可持续运行。** Prompt与工作流的区别在于：运行时是否需要你在场。',
    quickFacts: [
      '当频率超过每周5次且输入结构化时进行自动化',
      '3种触发类型：基于事件（Webhook）、基于计划（cron）、基于阈值（指标）',
      'Make每月10,000次操作费用0–16美元；n8n免费且可自托管',
      '每个步骤边界都需要JSON输出架构——永远不要传递非结构化文本',
      '大多数生产团队实现70–80%自动化，20–30%人工审查',
      '4个模板：文档处理、研究管道、代码审查、客户分诊',
    ],
    toc: [
      { label: 'Prompt和工作流之间的区别', anchor: 'prompt_vs_workflow' },
      { label: '触发条件和状态管理', anchor: 'triggering' },
      { label: '生产团队的4个工作流模板', anchor: 'four_templates' },
      { label: '构建Prompt工作流的工具', anchor: 'tools' },
      { label: '何时自动化与手动操作', anchor: 'when_to_automate' },
      { label: '常见错误', anchor: 'common_mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related_reading' },
      { label: '参考来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/zh/prompt-engineering/prompts-to-repeatable-workflows',
      inLanguage: 'zh',
      headline: '从Prompt到可重复工作流：生产团队的自动化模板',
      description: '使用触发器、状态管理和错误处理将Prompt转化为自动化工作流。4个模板：文档处理、研究、代码审查、分诊。',
      datePublished: '2026-05-02',
      dateModified: '2026-05-02',
      keywords: ['Prompt工作流', '自动化模板', '可重复Prompt', 'LangChain工作流', 'n8n Prompt', '生产AI工作流'],
      mentions: [
        { '@type': 'Thing', name: 'GPT-5.5' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'LangChain' },
        { '@type': 'Thing', name: 'n8n' },
        { '@type': 'Thing', name: 'Make' },
        { '@type': 'Thing', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompts-to-repeatable-workflows', width: 1200, height: 630 },
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '摘要',
        content: '工作流是带有触发器、输出路由和错误处理的Prompt——而不仅仅是自动运行的Prompt。当频率超过每周5次且输入结构化时进行自动化。四个生产模板涵盖最常见的用例。',
      },
      prompt_vs_workflow: {
        title: 'Prompt和工作流之间的区别',
        snippets: [
          { type: 'in-one-sentence', text: '工作流是当触发器触发时自动运行并将其输出路由到定义的下一步而无需人工干预的Prompt。' },
          { type: 'in-plain-terms', text: '把工作流想象成一个被赋予了职位的Prompt：它知道何时开始、如何处理结果，以及出错时该做什么。' },
        ],
        content: [
          '**Prompt需要人来决定何时运行以及如何处理输出；工作流在条件满足时自动运行并将输出路由到下一步。** 这是操作上的区别——而不是Prompt文本本身的区别。',
          '提取发票数据的Prompt，如果有人手动将每张发票复制粘贴到ChatGPT中，它仍然只是一个Prompt。当文件上传触发它、输出被解析为结构化记录并路由到会计系统时，同样的提取逻辑就变成了工作流。',
          '当你每周以相同触发条件运行相同Prompt超过5次，且输出始终进入相同的下一步时，进行自动化。低于该频率，或当输入显著变化时，手动提示比构建自动化基础设施更快。',
        ],
        callouts: [
          { type: 'insight', label: '操作定义', text: 'Prompt和工作流的区别不在于Prompt文本——而在于系统是否决定何时运行它以及接下来会发生什么。' },
        ],
      },
      triggering: {
        title: '触发条件和状态管理',
        content: [
          '**三种触发类型涵盖几乎所有生产Prompt工作流：基于事件、基于计划和基于阈值。** 选择错误的触发类型是工作流运行过于频繁、不够频繁或在陈旧数据上运行的主要原因之一。',
          '基于事件的触发器在特定事件上触发：当文件上传、表单提交或API调用到达时，Webhook触发。基于计划的触发器按cron触发——"每周一09:00运行"。基于阈值的触发器在指标超过某个值时触发——错误率超过5%，情感分数低于0.4。',
          '状态管理是指如何在不丢失上下文的情况下将一个步骤的输出传递到下一步。在每个步骤边界定义JSON输出架构。将中间结果存储在变量存储中。永远不要将原始非结构化模型输出作为下一步的输入传递——先解析它。',
        ],
        callouts: [
          { type: 'warning', label: '状态管理失败', text: '在步骤之间传递原始非结构化模型输出是工作流静默失败的最常见原因。始终在每个步骤边界定义JSON架构并在路由前进行验证。' },
        ],
      },
      four_templates: {
        title: '生产团队的4个工作流模板',
        content: [
          '**4个模板涵盖最常见的生产用例：文档处理、研究管道、代码审查和客户分诊。**',
        ],
        numberedItems: [
          '文档处理——触发：新PDF上传 → 提取关键数据（日期、当事方、金额）→ 分类文档类型 → 路由到审阅者队列。工具：n8n + GPT-5.5。输出：写入共享数据库的结构化JSON记录。',
          '研究管道——触发：提交主题列表 → 搜索网络来源 → 汇总每个来源 → 生成结构化报告。工具：LangChain + Perplexity API。输出：带引用的Markdown报告。',
          '代码审查循环——触发：拉取请求打开 → 分析差异 → 按严重程度生成内联审查评论 → 将评论发布到PR。工具：GitHub Actions + Claude 4.6 Sonnet。输出：通过GitHub API发布的PR评论。',
          '客户分诊——触发：收到新支持工单 → 分类严重程度（P1/P2/P3）→ 路由到正确队列 → 生成初始回复草稿。工具：Make + PromptQuorum。输出：更新了严重程度标签和回复草稿的工单。',
        ],
      },
      tools: {
        title: '构建Prompt工作流的工具',
        content: [
          '**正确的工具取决于你的团队偏好可视化自动化、代码优先管道还是多模型调度。**',
          'Make是一个可视化无代码工作流构建器。成本：每月1,000次操作以内免费，每月10,000次操作16美元。n8n是开源且可自托管的（0美元）。LangChain（Python和JavaScript）是一个用于构建多步骤Prompt管道的代码优先框架。',
          'PromptQuorum为GPT-5.5、Claude 4.6 Sonnet和Gemini 2.5 Pro添加多模型调度和并排输出比较。在模型选择影响输出质量的任何步骤中使用它。',
        ],
        callouts: [
          { type: 'tip', label: '工具选择规则', text: '从Make或n8n开始进行编排，并在需要比较模型输出或调度到最佳模型的步骤添加PromptQuorum。' },
        ],
      },
      when_to_automate: {
        title: '何时自动化与手动操作',
        content: [
          '**自动化Prompt工作流的条件：频率超过每周5次、输入结构化且可预测、输出每次都路由到定义好的下一步。** 自动化要回报成本，三个条件都必须成立。',
          '当输入变化不可预测、每种情况（而非仅边缘情况）都需要人工判断，或当前量低于每周5次时，保持手动。',
          '第三类是混合型：自动化结构化步骤（数据提取、分类、路由），保持判断步骤手动（最终批准、升级决定）。大多数生产团队在这里落地——70–80%自动化，20–30%在边缘情况进行人工审查。',
        ],
      },
      common_mistakes: {
        title: '构建Prompt工作流时的常见错误',
        mistakes: [
          { mistake: '在验证Prompt之前构建工作流', problem: '如果底层Prompt失败，工作流会在大规模上放大失败', fix: '在将其接入工作流之前，针对10+个真实示例测试和验证核心Prompt' },
          { mistake: '没有错误处理或回退路径', problem: '当模型返回意外输出时，工作流静默失败或产生损坏的下游数据', fix: '始终添加输出验证步骤和回退路由（人工审查队列或使用备用模型重试）' },
          { mistake: '没有故障转移的单模型工作流', problem: '如果主模型的API宕机，整个工作流停止', fix: '设计具有回退模型路由的工作流。PromptQuorum的多模型调度使这变得简单。' },
          { mistake: '自动化工作流没有监控', problem: '工作流静默运行——你不知道输出质量正在下降，直到下游损害积累', fix: '记录每次运行的通过率。对每周超过5%的质量下降发出警报。' },
        ],
      },
      key_takeaways: {
        title: '关键要点',
        items: [
          '工作流是带有触发器、输出路由和错误处理的Prompt——而不仅仅是自动运行的Prompt',
          '当频率>每周5次、输入结构化、输出始终路由到相同下一步时自动化',
          '三种触发类型：基于事件（Webhook/上传）、基于计划（cron）、基于阈值（指标）',
          '在每个步骤边界定义JSON输出架构——永远不要传递非结构化文本',
          '4个生产模板：文档处理（n8n + GPT-5.5）、研究（LangChain + Perplexity）、代码审查（GitHub Actions + Claude 4.6 Sonnet）、客户分诊（Make + PromptQuorum）',
        ],
      },
      faq: {
        title: '常见问题',
        faqs: [
          { q: '什么是可重复的Prompt工作流？', a: '可重复的Prompt工作流是一个基于Prompt的流程，当定义的触发条件满足时自动运行，将输出路由到下一步，并在无需人工干预的情况下处理错误。' },
          { q: '最小可行工作流结构是什么？', a: '最小可行工作流有4个组件：触发器、Prompt执行步骤、输出验证步骤和路由步骤。随着复杂性增长添加状态管理和错误处理。' },
          { q: '如何在Make、n8n和LangChain之间选择？', a: '对需要可视化无代码界面的团队使用Make。对想要自托管控制的团队使用n8n。对在Python或JavaScript中构建复杂多步骤链的开发者使用LangChain。' },
          { q: '何时应该自动化Prompt工作流vs保持手动？', a: '当Prompt每天运行超过10次且输入可预测时自动化。当输入高度变化或输出影响不可撤销的决定（法律、财务、医疗）时保持手动。' },
        ],
      },
      related_reading: {
        title: '相关阅读',
        items: [
          { title: 'Prompt Chaining: Multi-Step Prompting', url: '/prompt-engineering/prompt-chaining' },
          { title: 'Prompt Engineering for Developers Workflow', url: '/prompt-engineering/prompt-engineering-for-developers-workflow' },
          { title: 'Prompt Engineering for Content Teams', url: '/prompt-engineering/prompt-engineering-for-content-teams' },
          { title: 'Prompt Engineering for Support Operations', url: '/prompt-engineering/prompt-engineering-for-support-operations' },
          { title: 'Best Tools for Structured Output', url: '/prompt-engineering/best-tools-structured-output' },
        ],
      },
      sources: {
        title: '参考来源',
        items: [
          { title: 'n8n Documentation', url: 'https://docs.n8n.io' },
          { title: 'Make (Integromat) Documentation', url: 'https://www.make.com/en/help' },
          { title: 'LangChain Documentation', url: 'https://python.langchain.com/docs' },
        ],
      },
    },
  },
}
