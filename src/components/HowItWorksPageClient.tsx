'use client'

import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import { LangLinksBar } from '@/components/LangLinksBar'

const T = {
  en: {
    h1: 'How PromptQuorum Works',
    subtitle: 'A 4-stage workflow: write a structured prompt using one of 9 frameworks, optimize it with your own LLM, dispatch simultaneously to 25+ AI services, then analyze all responses using 13 consensus analysis types.',
    badge: 'Runs entirely in your browser — no PromptQuorum server ever sees your prompts or API keys',
    steps: [
      {
        number: '1', name: 'Write', route: '/prompt',
        title: 'Structure Your Prompt',
        description: 'Prompts structured with frameworks produce higher quality outputs. PromptQuorum includes 9 built-in frameworks (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) plus 2 fully custom framework slots.',
        details: [
          'Single Prompt Line — minimal structure for quick tasks',
          'CRAFT — Context, Role, Action, Format, Target (creative writing)',
          'CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, business)',
          'RISEN — Role, Instructions, Steps, End Goal, Narrowing (sequential enterprise tasks)',
          'TRACE — Task, Request, Action, Context, Example (few-shot learning)',
          'APE, SPECS, Google Prompt, RTF — optimized for specific task types',
        ],
        callout: 'A Framework Wizard recommends the best framework based on your task type.',
      },
      {
        number: '2', name: 'Optimize', route: '/optimize',
        title: 'Refine with Your Own LLM',
        description: 'Prompt quality improves measurably with optimization — structured prompts score 25–45% higher in LLM evaluation. PromptQuorum applies 8 refinement types (Make Concise, Expand Detail, Break Into Steps, Increase Specificity, Simplify, Add Quality Controls, Multi-Expert Consultation, Compress to Essence) plus smart temperature detection.',
        details: [
          'Quality Assessment — 0-100% scoring on clarity, specificity, structure, and constraints',
          'Smart Temperature — recommends optimal creativity level (0.0-1.0) based on task type',
          'Version History — every refinement saved; branch and compare refinement paths',
          'Teaching Mode — explains why each change improves quality and clarity',
          '8 One-Click Refinements — apply structured transformations instantly',
          'Custom Instruction — free-text refinement using your own LLM',
        ],
        callout: 'Your LLM. Your API key. Nothing passes through PromptQuorum servers.',
      },
      {
        number: '3', name: 'Dispatch', route: '/dispatch',
        title: 'Send to 25+ AI Services',
        description: 'Sending the same prompt to multiple AI models reveals which model performs best for your task. PromptQuorum opens parallel browser tabs to 25+ destinations with zero copy-pasting required.',
        details: [
          'Auto-dispatch (17 services): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq, and more',
          'Copy-paste (8 services): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All, and others',
          'Perplexity auto-submits — prompt sent immediately on arrival',
          '2 custom URL slots — configure any AI service not on the default list',
          'Optional pre-dispatch refinement — final LLM enhancement before sending',
          'Parallel execution — all tabs open simultaneously; collect responses in under 1 minute',
        ],
        callout: 'All browser tabs open in parallel. No manual copy-pasting between tabs.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: 'Find Consensus Across All Models',
        description: 'When 5+ independent models agree on an answer, confidence is higher than with a single model. Paste all responses back into PromptQuorum and apply 13 consensus analysis types.',
        details: [
          'Consensus Summary — identifies shared themes and unanimous agreements',
          'Contradiction Detection — flags where models diverge; identifies minority opinions',
          'Hallucination Detection — identifies claims appearing in few models; potential false facts',
          'Confidence Scoring — certainty level per model and per claim',
          'Best Answer Selection — selects the highest-quality individual response',
          'Weighted Merge — synthesizes a hybrid response using best elements from all models',
        ],
        callout: 'When 5+ independent models converge on the same answer, hallucination risk is lower than with a single model.',
      },
    ],
    frameworksH2: '9 Built-in Prompt Frameworks',
    frameworksDesc: 'Structured prompts using frameworks produce measurably better outputs than unstructured requests. Each framework organizes input differently for specific task types. A Framework Wizard recommends the best fit, or build 2 custom frameworks.',
    frameworkCol: 'Framework', fieldsCol: 'Structure', bestCol: 'Optimal For',
    frameworks: [
      { name: 'Single Prompt Line', best: 'Quick, ad-hoc queries without structure' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: '3-field minimal structure; simple tasks' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'Creative writing; general-purpose tasks' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'Marketing copy; business communication' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'Analysis; research; technical writing' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'Multi-step enterprise workflows' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'Few-shot learning; example-based tasks' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'Professional tasks; role-based prompts' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'Minimal structure; 3 core fields only' },
    ],
    analysisH2: '13 Quorum Analysis Types',
    analysisDesc: 'Apply 2 or all 13 analyses to responses from multiple models. Each analysis is executed by your connected LLM, not PromptQuorum servers. Identify consensus, contradictions, hallucinations, and confidence levels across all model outputs.',
    analysisGroups: [
      { category: 'Synthesis (3)', items: ['Consensus Summary — shared themes across all models', 'Weighted Merge — hybrid answer combining best from each model', 'Atomic Facts Extraction — break all claims into discrete facts; count model agreement'] },
      { category: 'Comparison (3)', items: ['Overlap Mapping — identify which models produced identical outputs', 'Contradiction Detection — flag claims where models diverge; identify disagreements', 'Confidence Scoring — measure certainty level per model and per claim'] },
      { category: 'Quality (3)', items: ['Completeness Check — verify all required information is present', 'Hallucination Detection — identify claims appearing in few models; potential false facts', 'Redundancy Elimination — remove duplicate or near-duplicate claims'] },
      { category: 'Selection (4)', items: ['Best Answer Selection — pick the single highest-quality response', 'Multi-Model Ensemble — combine outputs using model reliability weighting', 'Controversy Flag — highlight claims where model agreement is weak', 'Custom Analysis — user-defined analysis template'] },
    ],
    exportLabel: 'Export results in 6 formats',
    exportNote: 'Multiple formats → downloaded as a .zip archive. File System Access API for folder selection (Chrome/Edge/Safari 16+).',
    byomH2: 'Bring Your Own Model (BYOM) — No PromptQuorum Infrastructure',
    byomDesc: 'PromptQuorum does not host or execute any LLM models. Every API call goes directly from your browser to your chosen provider. Your API keys stay in browser localStorage and are never transmitted to PromptQuorum servers.',
    cloudLabel: 'Cloud APIs (bring your own API key)',
    localLabel: 'Local models (no API key needed; runs on your machine)',
    privacy: [
      { title: 'No telemetry', desc: 'No analytics, tracking, logging, or data collection. Not even anonymous usage statistics or session timing.' },
      { title: 'No registration', desc: 'Zero signup required. No email, no account, no login. Open the app; start immediately.' },
      { title: 'Offline-capable', desc: 'Desktop app (Electron) and mobile app (Capacitor) support full offline operation with local models via Ollama, LM Studio, Jan AI, or compatible endpoints.' },
    ],
    ctaH2: 'Ready to try it?',
    ctaDesc: 'PromptQuorum is in free public beta — download it today. No waitlist, no signup required.',
    ctaBtn: 'Download the Beta',
    compareLink: 'See how PromptQuorum compares to other multi-LLM tools →',
    back: '← Back to Home',
    keyConceptsH2: 'Key Concepts',
    defs: [
      { term: 'Multi-Model Dispatch', def: 'Sending one prompt simultaneously to 25+ AI models in a single click. PromptQuorum pre-loads your prompt into each destination via URL — no copy-pasting, all tabs open in parallel.' },
      { term: 'Quorum Analysis', def: 'Structured comparison of responses from multiple AI models to identify consensus, contradictions, and confidence levels. PromptQuorum offers 13 analysis types including Hallucination Detection and Best Answer Selection.' },
      { term: 'Consensus Scoring', def: 'A confidence rating derived from the degree of agreement across multiple model responses. Higher consensus = higher reliability. Lower consensus flags areas of uncertainty or potential hallucination.' },
      { term: 'Hallucination Detection', def: 'Identifying factual claims that appear in only one or a minority of model responses, indicating potential AI fabrication. Cross-referencing 5+ independent models dramatically reduces the rate of undetected hallucinations.' },
      { term: 'BYOM — Bring Your Own Model', def: 'Connecting your own API keys directly to AI providers. Keys are stored only in your browser\'s localStorage and connect directly to providers — no PromptQuorum server ever receives or transmits your credentials.' },
    ],
    testingH2: 'How We Test',
    testingDesc: 'Performance claims in PromptQuorum articles are based on controlled dispatching sessions using PromptQuorum. When an article cites specific figures (prompt quality scores, temperature comparisons, benchmark numbers), these reflect editorial testing or publicly sourced benchmark data — not PromptQuorum-proprietary measurements unless explicitly labeled.',
    testingItems: [
      'Prompt dispatch: prompts are sent simultaneously to the stated models via PromptQuorum one-click dispatch',
      'Sample size: editorial tests use a minimum of 30 prompts per condition unless the article states otherwise',
      'Evaluation: responses are scored by at least 2 independent reviewers under blind conditions',
      'Third-party benchmarks (HumanEval, SWE-bench, MBPP): sourced from official model papers or community leaderboards; evaluation date cited in each article',
      'Local model tests: run on consumer hardware at the quantization level stated in the article',
      'Disclosure: wherever PromptQuorum internal testing is cited, it is labeled "Tested in PromptQuorum" in the article body',
    ],
  },
  de: {
    h1: 'Wie PromptQuorum funktioniert',
    subtitle: 'Ein 4-stufiger Workflow: strukturierten Prompt schreiben, mit eigenem LLM optimieren, an 25+ KI-Dienste senden und jede Antwort auf Konsens analysieren.',
    badge: 'Läuft vollständig in Ihrem Browser — kein PromptQuorum-Server sieht jemals Ihre Prompts oder API-Schlüssel',
    steps: [
      {
        number: '1', name: 'Schreiben', route: '/prompt',
        title: 'Ihren Prompt strukturieren',
        description: 'Wählen Sie aus 9 integrierten Prompt-Engineering-Frameworks — oder erstellen Sie Ihr eigenes. Jedes Framework führt Sie durch die richtigen Felder für Ihre Aufgabe.',
        details: [
          'Single Prompt Line — schnelle, unstrukturierte Prompts',
          'CRAFT — Context, Role, Action, Format, Target',
          'CO-STAR — Gewinner des Singapore GPT-4-Wettbewerbs',
          'RISEN — Unternehmensaufgaben mit sequenziellen Schritten',
          'TRACE — wenn Sie Few-Shot-Beispiele benötigen',
          'APE, SPECS, Google Prompt, RTF + 2 benutzerdefinierte Slots',
        ],
        callout: 'Ein Framework-Assistent hilft Ihnen, das richtige zu wählen, indem er fragt, was Sie erreichen möchten.',
      },
      {
        number: '2', name: 'Optimieren', route: '/optimize',
        title: 'Mit eigenem LLM verfeinern',
        description: 'Ihr verbundenes LLM wandelt die rohen Framework-Felder in einen präzisen Prompt um. Anschließend verfeinern Sie iterativ mit 8 Ein-Klick-Verfeinerungen — kein Prompt-Engineering-Fachwissen erforderlich.',
        details: [
          'Smart Temperature — erkennt automatisch faktische, ausgewogene oder kreative Absicht',
          'Versionsverlauf — jede Verfeinerung gespeichert, jederzeit rückgängig machen',
          'Qualitätsbewertung — 1–5 Sterne-Bewertung mit konkreten Verbesserungsvorschlägen',
          'Lernmodus — erklärt genau, warum jede Änderung vorgenommen wurde',
          'Kürzer fassen, Detail erweitern, In Schritte aufteilen, Vereinfachen, Qualitätskontrollen hinzufügen…',
          'Benutzerdefinierte Anweisung — Freitext-Verfeinerung in einfacher Sprache',
        ],
        callout: 'Ihr LLM. Ihr API-Schlüssel. Nichts läuft über PromptQuorum-Server.',
      },
      {
        number: '3', name: 'Senden', route: '/dispatch',
        title: 'Gleichzeitig an alle KIs senden',
        description: 'Senden Sie den optimierten Prompt mit einem Klick an mehrere KI-Dienste. PromptQuorum lädt Ihren Prompt per URL in jedes Ziel vor — kein Kopieren und Einfügen.',
        details: [
          'Auto-Dispatch: ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…',
          'Kopieren & Einfügen: Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…',
          'Perplexity startet sofort — Prompt wird beim Laden automatisch übermittelt',
          '2 benutzerdefinierte URL-Slots für jeden KI-Dienst, der nicht auf der Liste steht',
          'Optionaler letzter Verbesserungsdurchlauf durch Ihr LLM vor dem Senden',
          'Insgesamt 25+ Ziele',
        ],
        callout: 'Alle Browser-Tabs öffnen parallel. Alle Antworten in unter einer Minute sammeln.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: 'Herausfinden, womit alle KIs übereinstimmen',
        description: 'Fügen Sie die Antworten zurück in PromptQuorum ein. Wählen Sie Ihre Analysetypen. Ihr LLM liest alle Antworten und synthetisiert das Wesentliche.',
        details: [
          'Konsens-Zusammenfassung — gemeinsame Themen und Übereinstimmungen über alle Modelle',
          'Widerspruchserkennung — wo Modelle abwichen, explizit markiert',
          'Halluzinationserkennung — markiert potenziell falsche Behauptungen',
          'Konfidenz-Scoring — Sicherheitsniveau pro Modell',
          'Beste Antwort Auswahl — wählt die stärkste Einzelantwort',
          'Gewichtete Zusammenführung — synthetisiert eine Hybrid-Antwort aus dem Besten aller',
        ],
        callout: 'Wenn 5 Modelle einer Antwort zustimmen, ist die Konfidenz viel höher als wenn 1 Modell allein antwortet.',
      },
    ],
    frameworksH2: '9 integrierte Prompt-Frameworks',
    frameworksDesc: 'Jedes Framework strukturiert Ihre Eingabe anders. Ein Framework-Assistent hilft Ihnen bei der Auswahl — oder Sie können zwei vollständig benutzerdefinierte Frameworks erstellen.',
    frameworkCol: 'Framework', fieldsCol: 'Felder', bestCol: 'Am besten für',
    frameworks: [
      { name: 'Single Prompt Line', best: 'Schnelle, unstrukturierte Prompts' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'Einfache 3-Felder-Brücke' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'Kreatives Schreiben, allgemeiner Einsatz' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'Geschäftskommunikation, Marketing' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'Analyse und Forschung' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'Sequenzielle Unternehmensaufgaben' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'Wenn Beispiele benötigt werden' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'Geschäftliche und professionelle Aufgaben' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'Minimal — die 3 wirkungsvollsten Felder' },
    ],
    analysisH2: '13 Quorum-Analysetypen',
    analysisDesc: 'Frei kombinierbar. 2 oder alle 13 gleichzeitig ausführen. Jede Analyse wird von Ihrem verbundenen LLM betrieben, nicht von einem PromptQuorum-Server.',
    analysisGroups: [
      { category: 'Synthese', items: ['Konsens-Zusammenfassung', 'Gewichtete Zusammenführung', 'Atomare Faktenextraktion'] },
      { category: 'Vergleich', items: ['Überlappungs-Mapping', 'Widerspruchserkennung', 'Konfidenz-Scoring'] },
      { category: 'Qualität', items: ['Vollständigkeitsprüfung', 'Halluzinationserkennung', 'Redundanzelimination'] },
      { category: 'Empfehlungen', items: ['Beste Antwort Auswahl', 'Multi-Modell-Ensemble', 'Kontrovers-Markierung'] },
    ],
    exportLabel: 'Ergebnisse in 6 Formaten exportieren',
    exportNote: 'Mehrere Formate → als .zip-Archiv heruntergeladen. File System Access API für Ordnerauswahl (Chrome/Edge/Safari 16+).',
    byomH2: 'Eigenes Modell mitbringen (BYOM)',
    byomDesc: 'PromptQuorum ruft kein LLM mit eigenen Schlüsseln auf. Jeder Aufruf geht direkt von Ihrem Browser zu Ihrem gewählten Anbieter. Ihre API-Schlüssel bleiben im localStorage Ihres Browsers — nie an einen PromptQuorum-Server übertragen.',
    cloudLabel: 'Cloud-APIs (eigenen Schlüssel mitbringen)',
    localLabel: 'Lokal (kein API-Schlüssel erforderlich)',
    privacy: [
      { title: 'Keine Telemetrie', desc: 'Keine Analysen, kein Tracking, keine Datenerfassung. Nicht einmal anonyme Nutzungsstatistiken.' },
      { title: 'Keine Registrierung', desc: 'Kein Konto erforderlich. Keine E-Mail. Keine Anmeldung. App öffnen und loslegen.' },
      { title: 'Läuft lokal', desc: 'Desktop-App via Electron, mobil via Capacitor. Funktioniert vollständig offline mit einem lokalen LLM.' },
    ],
    ctaH2: 'Bereit zum Ausprobieren?',
    ctaDesc: 'PromptQuorum befindet sich in der öffentlichen Beta — laden Sie es noch heute herunter. Keine Warteliste, keine Anmeldung nötig.',
    ctaBtn: 'Beta herunterladen',
    compareLink: 'PromptQuorum im Vergleich zu anderen Multi-LLM-Tools →',
    back: '← Zurück zur Startseite',
    keyConceptsH2: 'Schlüsselbegriffe',
    defs: [
      { term: 'Multi-Modell-Dispatch', def: 'Einen Prompt gleichzeitig mit einem Klick an 25+ KI-Modelle senden. PromptQuorum lädt Ihren Prompt per URL in jedes Ziel vor — kein Kopieren und Einfügen, alle Tabs öffnen parallel.' },
      { term: 'Quorum-Analyse', def: 'Strukturierter Vergleich von Antworten mehrerer KI-Modelle zur Identifikation von Konsens, Widersprüchen und Konfidenzgraden. PromptQuorum bietet 13 Analysetypen, einschließlich Halluzinationserkennung und Beste-Antwort-Auswahl.' },
      { term: 'Konsens-Scoring', def: 'Eine Vertrauensbewertung, die aus dem Übereinstimmungsgrad mehrerer Modellantworten abgeleitet wird. Höherer Konsens = höhere Zuverlässigkeit. Niedrigerer Konsens markiert Unsicherheitsbereiche oder potenzielle Halluzinationen.' },
      { term: 'Halluzinationserkennung', def: 'Identifikation von Faktenbehauptungen, die nur in einem oder einer Minderheit von Modellen erscheinen, was auf potenzielle KI-Fabrikation hinweist. Der Abgleich mit 5+ unabhängigen Modellen reduziert die Rate unerkannter Halluzinationen drastisch.' },
      { term: 'BYOM — Eigenes Modell mitbringen', def: 'Verbinden Sie Ihre eigenen API-Schlüssel direkt mit KI-Anbietern. Schlüssel werden nur im localStorage Ihres Browsers gespeichert und verbinden sich direkt mit Anbietern — kein PromptQuorum-Server empfängt oder überträgt jemals Ihre Zugangsdaten.' },
    ],
    testingH2: 'Unsere Testmethodik',
    testingDesc: 'Leistungsangaben in PromptQuorum-Artikeln basieren auf kontrollierten Dispatch-Sitzungen mit PromptQuorum. Werden konkrete Zahlen zitiert (Prompt-Qualitätsscores, Temperaturvergleiche, Benchmark-Werte), handelt es sich um redaktionelle Tests oder öffentlich zugängliche Benchmark-Daten — nicht um PromptQuorum-eigene Messungen, sofern nicht ausdrücklich gekennzeichnet.',
    testingItems: [
      'Prompt-Dispatch: Prompts werden gleichzeitig an die genannten Modelle per PromptQuorum-Einzel-Klick-Dispatch gesendet',
      'Stichprobengröße: Redaktionelle Tests umfassen mindestens 30 Prompts pro Bedingung, sofern nicht anders angegeben',
      'Auswertung: Antworten werden von mindestens 2 unabhängigen Bewertern im Blind-Review bewertet',
      'Drittanbieter-Benchmarks (HumanEval, SWE-bench, MBPP): aus offiziellen Modellpapieren oder Community-Leaderboards; Auswertungsdatum im Artikel angegeben',
      'Lokale Modelltest: auf Consumer-Hardware mit dem im Artikel genannten Quantisierungsgrad durchgeführt',
      'Offenlegung: Wo PromptQuorum-interne Tests zitiert werden, sind diese im Artikeltext als „Tested in PromptQuorum" gekennzeichnet',
    ],
  },
  fr: {
    h1: 'Comment fonctionne PromptQuorum',
    subtitle: 'Un workflow en 4 étapes : écrire un prompt structuré, l\'optimiser avec votre propre LLM, l\'envoyer à 25+ services IA, puis analyser chaque réponse pour trouver le consensus.',
    badge: 'Fonctionne entièrement dans votre navigateur — aucun serveur PromptQuorum ne voit jamais vos prompts ou clés API',
    steps: [
      {
        number: '1', name: 'Écrire', route: '/prompt',
        title: 'Structurer votre prompt',
        description: 'Choisissez parmi 9 frameworks de prompt engineering intégrés — ou créez le vôtre. Chaque framework vous guide à travers les bons champs pour votre tâche.',
        details: [
          'Single Prompt Line — prompts rapides et non structurés',
          'CRAFT — Context, Role, Action, Format, Target',
          'CO-STAR — vainqueur du concours Singapore GPT-4',
          'RISEN — tâches entreprise avec étapes séquentielles',
          'TRACE — quand vous avez besoin d\'exemples few-shot',
          'APE, SPECS, Google Prompt, RTF + 2 slots personnalisés',
        ],
        callout: 'Un assistant de framework vous aide à choisir le bon en vous demandant ce que vous essayez de faire.',
      },
      {
        number: '2', name: 'Optimiser', route: '/optimize',
        title: 'Affiner avec votre propre LLM',
        description: 'Votre LLM connecté transforme les champs bruts du framework en un prompt de précision. Vous affinez ensuite itérativement avec 8 raffinements en un clic — aucune expertise en prompt engineering requise.',
        details: [
          'Smart Temperature — détecte automatiquement l\'intention factuelle, équilibrée ou créative',
          'Historique des versions — chaque raffinement sauvegardé, revertible à tout moment',
          'Évaluation de qualité — notation 1–5 étoiles avec suggestions d\'amélioration spécifiques',
          'Mode enseignement — explique exactement pourquoi chaque changement a été effectué',
          'Rendre concis, Développer les détails, Décomposer en étapes, Simplifier, Ajouter des contrôles qualité…',
          'Instruction personnalisée — raffinement en texte libre en langage naturel',
        ],
        callout: 'Votre LLM. Votre clé API. Rien ne passe par les serveurs PromptQuorum.',
      },
      {
        number: '3', name: 'Envoyer', route: '/dispatch',
        title: 'Envoyer à toutes les IA en même temps',
        description: 'Envoyez le prompt optimisé à plusieurs services IA en un clic. PromptQuorum pré-charge votre prompt dans chaque destination via URL — sans copier-coller.',
        details: [
          'Auto-dispatch : ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…',
          'Copier-coller : Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…',
          'Perplexity s\'exécute immédiatement — prompt auto-soumis à l\'arrivée',
          '2 slots URL personnalisés pour tout service IA absent de la liste',
          'Passe d\'amélioration finale optionnelle via votre LLM avant envoi',
          '25+ destinations au total',
        ],
        callout: 'Tous les onglets du navigateur s\'ouvrent en parallèle. Collectez toutes les réponses en moins d\'une minute.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: 'Trouver ce sur quoi toutes les IA s\'accordent',
        description: 'Collez les réponses dans PromptQuorum. Choisissez vos types d\'analyse. Votre LLM lit toutes les réponses et synthétise ce qui importe.',
        details: [
          'Résumé consensuel — thèmes et accords partagés entre tous les modèles',
          'Détection des contradictions — où les modèles ont divergé, signalé explicitement',
          'Détection des hallucinations — signale les affirmations potentiellement fausses',
          'Score de confiance — niveau de certitude par modèle',
          'Sélection de la meilleure réponse — choisit la réponse individuelle la plus solide',
          'Fusion pondérée — synthétise une réponse hybride tirant le meilleur de tous',
        ],
        callout: 'Quand 5 modèles s\'accordent sur une réponse, la confiance est bien plus élevée que quand 1 seul modèle répond.',
      },
    ],
    frameworksH2: '9 frameworks de prompt intégrés',
    frameworksDesc: 'Chaque framework structure votre saisie différemment. Un assistant de framework vous aide à choisir — ou vous pouvez créer deux frameworks entièrement personnalisés.',
    frameworkCol: 'Framework', fieldsCol: 'Champs', bestCol: 'Idéal pour',
    frameworks: [
      { name: 'Single Prompt Line', best: 'Prompts rapides et non structurés' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'Pont simple à 3 champs' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'Écriture créative, usage général' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'Communication professionnelle, marketing' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'Analyse et recherche' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'Tâches entreprise séquentielles' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'Quand des exemples sont nécessaires' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'Tâches professionnelles' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'Minimal — les 3 champs les plus impactants' },
    ],
    analysisH2: '13 types d\'analyse Quorum',
    analysisDesc: 'Combinez librement. Lancez 2 ou les 13 en même temps. Chaque analyse est propulsée par votre LLM connecté, pas par un serveur PromptQuorum.',
    analysisGroups: [
      { category: 'Synthèse', items: ['Résumé consensuel', 'Fusion pondérée', 'Extraction de faits atomiques'] },
      { category: 'Comparaison', items: ['Cartographie des chevauchements', 'Détection des contradictions', 'Score de confiance'] },
      { category: 'Qualité', items: ['Vérification de complétude', 'Détection des hallucinations', 'Élimination des redondances'] },
      { category: 'Recommandations', items: ['Sélection de la meilleure réponse', 'Ensemble multi-modèles', 'Signalement de controverse'] },
    ],
    exportLabel: 'Exporter les résultats en 6 formats',
    exportNote: 'Plusieurs formats → téléchargés en archive .zip. API File System Access pour la sélection de dossier (Chrome/Edge/Safari 16+).',
    byomH2: 'Apportez votre propre modèle (BYOM)',
    byomDesc: 'PromptQuorum n\'appelle jamais aucun LLM avec ses propres clés. Chaque appel va directement de votre navigateur à votre fournisseur choisi. Vos clés API restent dans le localStorage de votre navigateur — jamais transmises à un serveur PromptQuorum.',
    cloudLabel: 'APIs Cloud (apportez votre clé)',
    localLabel: 'Local (aucune clé API requise)',
    privacy: [
      { title: 'Zéro télémétrie', desc: 'Pas d\'analyse, pas de tracking, pas de collecte de données. Pas même de stats d\'usage anonymes.' },
      { title: 'Zéro inscription', desc: 'Aucun compte requis. Pas d\'email. Pas de connexion. Ouvrez l\'app et commencez.' },
      { title: 'Fonctionne localement', desc: 'App desktop via Electron, mobile via Capacitor. Fonctionne entièrement hors ligne avec un LLM local.' },
    ],
    ctaH2: 'Prêt à l\'essayer ?',
    ctaDesc: 'PromptQuorum est en bêta publique — téléchargez-le dès aujourd\'hui. Sans liste d\'attente, sans inscription.',
    ctaBtn: 'Télécharger la bêta',
    compareLink: 'Comparer PromptQuorum avec d\'autres outils multi-LLM →',
    back: '← Retour à l\'accueil',
    keyConceptsH2: 'Concepts Clés',
    defs: [
      { term: 'Envoi Multi-Modèle', def: 'Envoyer un prompt simultanément à 25+ modèles d\'IA en un seul clic. PromptQuorum pré-charge votre prompt dans chaque destination via URL — sans copier-coller, tous les onglets s\'ouvrent en parallèle.' },
      { term: 'Analyse Quorum', def: 'Comparaison structurée des réponses de plusieurs modèles d\'IA pour identifier consensus, contradictions et niveaux de confiance. PromptQuorum propose 13 types d\'analyse dont la Détection des Hallucinations et la Sélection de la Meilleure Réponse.' },
      { term: 'Score de Consensus', def: 'Une évaluation de confiance dérivée du degré d\'accord entre plusieurs réponses de modèles. Consensus élevé = fiabilité élevée. Consensus faible signale des zones d\'incertitude ou d\'hallucination potentielle.' },
      { term: 'Détection des Hallucinations', def: 'Identifier les affirmations factuelles apparaissant dans un seul ou une minorité de modèles, indiquant une possible fabrication par l\'IA. Le recoupement avec 5+ modèles indépendants réduit drastiquement le taux d\'hallucinations non détectées.' },
      { term: 'BYOM — Apportez votre propre modèle', def: 'Connectez vos propres clés API directement aux fournisseurs d\'IA. Les clés sont stockées uniquement dans le localStorage de votre navigateur et se connectent directement aux fournisseurs — aucun serveur PromptQuorum ne reçoit ni ne transmet jamais vos identifiants.' },
    ],
    testingH2: 'Notre méthodologie de test',
    testingDesc: 'Les données de performance citées dans les articles PromptQuorum proviennent de sessions de dispatch contrôlées avec PromptQuorum. Lorsqu\'un article cite des chiffres précis (scores de qualité, comparaisons de température, benchmarks), ceux-ci reflètent des tests éditoriaux ou des données de benchmark publiques — et non des mesures propriétaires PromptQuorum, sauf mention explicite.',
    testingItems: [
      'Dispatch des prompts : envoi simultané aux modèles indiqués via le dispatch en un clic de PromptQuorum',
      'Taille d\'échantillon : les tests éditoriaux utilisent au minimum 30 prompts par condition, sauf indication contraire',
      'Évaluation : les réponses sont notées par au moins 2 évaluateurs indépendants en double aveugle',
      'Benchmarks tiers (HumanEval, SWE-bench, MBPP) : issus des publications officielles des modèles ou de leaderboards communautaires ; date d\'évaluation citée dans chaque article',
      'Tests de modèles locaux : exécutés sur du matériel grand public au niveau de quantification indiqué dans l\'article',
      'Transparence : lorsque des tests internes PromptQuorum sont cités, ils sont identifiés par la mention « Tested in PromptQuorum » dans le corps de l\'article',
    ],
  },
  ja: {
    h1: 'PromptQuorumの使い方',
    subtitle: '4段階のワークフロー：構造化されたプロンプトを書き、自分のLLMで最適化し、25以上のAIサービスに送信し、すべての回答をコンセンサスのために分析します。',
    badge: 'すべてブラウザ内で動作 — PromptQuorumのサーバーがあなたのプロンプトやAPIキーを見ることは一切ありません',
    steps: [
      {
        number: '1', name: '作成', route: '/prompt',
        title: 'プロンプトを構造化する',
        description: '9つの組み込みプロンプトエンジニアリングフレームワークから選択するか、独自のものを作成します。各フレームワークは、タスクに適したフィールドをガイドします。',
        details: [
          'Single Prompt Line — 素早い非構造化プロンプト',
          'CRAFT — Context, Role, Action, Format, Target',
          'CO-STAR — シンガポールGPT-4コンテスト優勝',
          'RISEN — 逐次ステップのエンタープライズタスク',
          'TRACE — Few-Shotの例が必要な場合',
          'APE, SPECS, Google Prompt, RTF + カスタムスロット×2',
        ],
        callout: 'フレームワークウィザードが、あなたの目標を質問することで最適なものを選ぶのを助けます。',
      },
      {
        number: '2', name: '最適化', route: '/optimize',
        title: '自分のLLMで改善する',
        description: '接続されたLLMがフレームワークの生のフィールドを精密なプロンプトに変換します。その後、8つのワンクリック改善で繰り返し改善できます — プロンプトエンジニアリングの専門知識は不要です。',
        details: [
          'スマートTemperature — 事実的・バランス・クリエイティブな意図を自動検出',
          'バージョン履歴 — すべての改善を保存、いつでも元に戻せる',
          '品質評価 — 具体的な改善提案付き1〜5星評価',
          'ティーチングモード — 各変更がなぜ行われたかを正確に説明',
          '簡潔にする・詳細を拡張・ステップに分解・簡略化・品質コントロール追加…',
          'カスタム指示 — 平易な言葉でのフリーテキスト改善',
        ],
        callout: 'あなたのLLM。あなたのAPIキー。PromptQuorumのサーバーを通過するものは何もありません。',
      },
      {
        number: '3', name: '送信', route: '/dispatch',
        title: 'すべてのAIに一度に送信',
        description: '最適化されたプロンプトをワンクリックで複数のAIサービスに送信します。PromptQuorumはURLを通じて各送信先にプロンプトを事前にロードします — コピー&ペースト不要。',
        details: [
          '自動送信: ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…',
          'コピー&ペースト: Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…',
          'Perplexityは即座に実行 — 到着時にプロンプトが自動送信',
          'リストにないAIサービス用のカスタムURLスロット×2',
          '送信前にLLMを通じたオプションの最終強化パス',
          '合計25以上の送信先',
        ],
        callout: 'すべてのブラウザタブが並列で開きます。1分以内にすべての回答を収集。',
      },
      {
        number: '4', name: 'クォーラム', route: '/quorum',
        title: 'すべてのAIが同意することを見つける',
        description: '回答をPromptQuorumに貼り付けます。分析タイプを選択します。LLMがすべての回答を読み、重要なことを合成します。',
        details: [
          'コンセンサスサマリー — すべてのモデルにわたる共通テーマと合意',
          '矛盾検出 — モデルが不一致だった箇所を明示的にフラグ',
          'ハルシネーション検出 — 潜在的に偽りの主張をフラグ',
          '信頼スコアリング — モデルごとの確信度',
          'ベスト回答選択 — 最も強力な単一回答を選択',
          '加重マージ — すべてのベストを合成したハイブリッド回答を生成',
        ],
        callout: '5つのモデルが回答に同意する場合、1つのモデルが単独で答える場合よりも信頼性がはるかに高くなります。',
      },
    ],
    frameworksH2: '9つの組み込みプロンプトフレームワーク',
    frameworksDesc: '各フレームワークは入力を異なる方法で構造化します。フレームワークウィザードが選択を助けます — または完全にカスタムなフレームワークを2つ作成できます。',
    frameworkCol: 'フレームワーク', fieldsCol: 'フィールド', bestCol: '最適な用途',
    frameworks: [
      { name: 'Single Prompt Line', best: '素早い非構造化プロンプト' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'シンプルな3フィールドブリッジ' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'クリエイティブライティング、汎用' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'ビジネスコミュニケーション、マーケティング' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: '分析と調査' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'エンタープライズ逐次タスク' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: '例が必要な場合' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'ビジネス・プロフェッショナルタスク' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'ミニマル — 最も影響力のある3フィールド' },
    ],
    analysisH2: '13種類のQuorum分析タイプ',
    analysisDesc: '自由に組み合わせ。2つまたはすべての13を同時に実行。各分析はPromptQuorumサーバーではなく、接続されたLLMで実行されます。',
    analysisGroups: [
      { category: '合成', items: ['コンセンサスサマリー', '加重マージ', '原子的事実抽出'] },
      { category: '比較', items: ['オーバーラップマッピング', '矛盾検出', '信頼スコアリング'] },
      { category: '品質', items: ['完全性チェック', 'ハルシネーション検出', '冗長性除去'] },
      { category: '推奨', items: ['ベスト回答選択', 'マルチモデルアンサンブル', '論争フラグ'] },
    ],
    exportLabel: '結果を6つの形式でエクスポート',
    exportNote: '複数の形式 → .zipアーカイブとしてダウンロード。フォルダ選択にはFile System Access API（Chrome/Edge/Safari 16+）。',
    byomH2: '自分のモデルを持ち込む（BYOM）',
    byomDesc: 'PromptQuorumは独自のキーでLLMを呼び出すことはありません。すべての呼び出しはブラウザから選択したプロバイダーに直接送られます。APIキーはブラウザのlocalStorageに保存 — PromptQuorumサーバーには決して送信されません。',
    cloudLabel: 'クラウドAPI（自分のキーを持参）',
    localLabel: 'ローカル（APIキー不要）',
    privacy: [
      { title: 'テレメトリーなし', desc: '分析なし、追跡なし、データ収集なし。匿名の使用統計さえも。' },
      { title: '登録不要', desc: 'アカウント不要。メール不要。サインイン不要。アプリを開いてすぐに作業開始。' },
      { title: 'ローカルで動作', desc: 'ElectronによるデスクトップApp、CapacitorによるモバイルApp。ローカルLLMで完全オフライン動作。' },
    ],
    ctaH2: '試してみる準備はできましたか？',
    ctaDesc: 'PromptQuorumはパブリックベータ公開中です。今すぐダウンロードできます。ウェイトリストや登録は不要です。',
    ctaBtn: 'ベータ版をダウンロード',
    compareLink: '他のマルチLLMツールとPromptQuorumを比較する →',
    back: '← ホームに戻る',
    keyConceptsH2: '主要な概念',
    defs: [
      { term: 'マルチモデル・ディスパッチ', def: '1つのプロンプトを1クリックで25以上のAIモデルに同時送信。PromptQuorumはURLを通じて各送信先にプロンプトを事前にロード — コピー&ペースト不要、すべてのタブが並列で開きます。' },
      { term: 'Quorum分析', def: '複数のAIモデルの回答を構造的に比較し、コンセンサス、矛盾、信頼度を特定。PromptQuorumはハルシネーション検出やベスト回答選択を含む13種類の分析タイプを提供。' },
      { term: 'コンセンサス・スコアリング', def: '複数のモデル回答間の一致度から導出される信頼性評価。コンセンサスが高いほど信頼性が高い。コンセンサスが低い場合は不確実性や潜在的ハルシネーションを示します。' },
      { term: 'ハルシネーション検出', def: '1つまたは少数のモデルにしか現れない事実的主張を特定し、潜在的なAI捏造を示す。5以上の独立したモデルとの相互参照により、未検出ハルシネーション率が大幅に低下。' },
      { term: 'BYOM — 自分のモデルを持ち込む', def: '自分のAPIキーをAIプロバイダーに直接接続。キーはブラウザのlocalStorageにのみ保存され、プロバイダーに直接接続 — PromptQuorumのサーバーが認証情報を受信・送信することは一切ありません。' },
    ],
    testingH2: 'テスト方法',
    testingDesc: 'PromptQuorumの記事に記載されたパフォーマンス数値は、PromptQuorumを使った管理された配信セッションに基づいています。具体的な数値（プロンプト品質スコア、温度比較、ベンチマーク数値）が引用されている場合、それは編集部によるテストまたは公開ベンチマークデータを反映しており、明示的に記載がない限りPromptQuorum独自の計測値ではありません。',
    testingItems: [
      'プロンプト配信：PromptQuorumのワンクリック配信で指定モデルに同時送信',
      'サンプルサイズ：編集部テストは別段の記載がない限り各条件につき最低30プロンプトを使用',
      '評価：回答は最低2名の独立した評価者がブラインドレビューで採点',
      'サードパーティベンチマーク（HumanEval、SWE-bench、MBPP）：公式モデル論文またはコミュニティリーダーボードから取得、評価日を各記事に記載',
      'ローカルモデルテスト：記事に記載の量子化レベルでコンシューマーハードウェア上で実行',
      '開示：PromptQuorum内部テストが引用される場合、記事本文内に「Tested in PromptQuorum」と明記',
    ],
  },
  zh: {
    h1: 'PromptQuorum 如何运作',
    subtitle: '4 阶段工作流程：编写结构化提示词，用自己的 LLM 优化，分发到 25+ 个 AI 服务，然后分析每个回答以寻找共识。',
    badge: '完全在您的浏览器中运行 — PromptQuorum 服务器永远不会看到您的提示词或 API 密钥',
    steps: [
      {
        number: '1', name: '编写', route: '/prompt',
        title: '构建您的提示词',
        description: '从 9 个内置提示词工程框架中选择，或创建自己的框架。每个框架都会引导您填写任务所需的正确字段。',
        details: [
          'Single Prompt Line — 快速、非结构化的提示词',
          'CRAFT — Context, Role, Action, Format, Target',
          'CO-STAR — 新加坡 GPT-4 竞赛冠军',
          'RISEN — 带有顺序步骤的企业任务',
          'TRACE — 需要 few-shot 示例时',
          'APE, SPECS, Google Prompt, RTF + 2 个自定义插槽',
        ],
        callout: '框架向导通过询问您想做什么来帮助您选择合适的框架。',
      },
      {
        number: '2', name: '优化', route: '/optimize',
        title: '使用您自己的 LLM 精炼',
        description: '您连接的 LLM 将框架的原始字段转化为精准的提示词。然后通过 8 个一键精炼功能迭代改进——无需提示词工程专业知识。',
        details: [
          '智能温度 — 自动检测事实性、平衡或创意意图',
          '版本历史 — 每次精炼都已保存，随时可以恢复',
          '质量评估 — 1–5 星评分，附具体改进建议',
          '教学模式 — 精确解释每次修改的原因',
          '使其简洁、扩展细节、分解步骤、简化、添加质量控制…',
          '自定义指令 — 用自然语言进行自由文本精炼',
        ],
        callout: '您的 LLM，您的 API 密钥。没有任何内容通过 PromptQuorum 服务器传输。',
      },
      {
        number: '3', name: '分发', route: '/dispatch',
        title: '一次发送给所有 AI',
        description: '一键将优化后的提示词发送到多个 AI 服务。PromptQuorum 通过 URL 将您的提示词预加载到每个目标——无需复制粘贴。',
        details: [
          '自动分发：ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral…',
          '复制粘贴：Grok, Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All…',
          'Perplexity 立即运行 — 到达时自动提交提示词',
          '2 个自定义 URL 插槽，适用于列表中没有的任何 AI 服务',
          '分发前可选通过您的 LLM 进行最终增强',
          '共 25+ 个目标',
        ],
        callout: '所有浏览器标签页并行打开。在一分钟内收集所有回答。',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: '找出所有 AI 的共识',
        description: '将回答粘贴回 PromptQuorum。选择您的分析类型。您的 LLM 读取所有回答并综合出重要内容。',
        details: [
          '共识摘要 — 所有模型的共同主题和一致意见',
          '矛盾检测 — 模型分歧所在，明确标记',
          '幻觉检测 — 标记潜在的错误声明',
          '置信度评分 — 每个模型的确定性水平',
          '最佳答案选择 — 选出最强的单一回答',
          '加权合并 — 综合所有模型精华的混合回答',
        ],
        callout: '当 5 个模型对一个答案达成一致时，置信度远高于 1 个模型单独回答。',
      },
    ],
    frameworksH2: '9 个内置提示词框架',
    frameworksDesc: '每个框架以不同方式构建您的输入。框架向导帮助您选择——或者您可以创建两个完全自定义的框架。',
    frameworkCol: '框架', fieldsCol: '字段', bestCol: '最适合',
    frameworks: [
      { name: 'Single Prompt Line', best: '快速、非结构化提示词' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: '简单的 3 字段桥接' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: '创意写作、通用' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: '商务沟通、营销' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: '分析与研究' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: '企业顺序任务' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: '需要示例时' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: '商业和专业任务' },
      { name: 'RTF', fields: 'Role · Task · Format', best: '极简 — 3 个最具影响力的字段' },
    ],
    analysisH2: '13 种 Quorum 分析类型',
    analysisDesc: '自由组合。同时运行 2 种或全部 13 种。每种分析由您连接的 LLM 驱动，而非 PromptQuorum 服务器。',
    analysisGroups: [
      { category: '合成', items: ['共识摘要', '加权合并', '原子事实提取'] },
      { category: '比较', items: ['重叠映射', '矛盾检测', '置信度评分'] },
      { category: '质量', items: ['完整性检查', '幻觉检测', '冗余消除'] },
      { category: '建议', items: ['最佳答案选择', '多模型集成', '争议标记'] },
    ],
    exportLabel: '以 6 种格式导出结果',
    exportNote: '多种格式 → 下载为 .zip 压缩包。文件夹选择使用 File System Access API（Chrome/Edge/Safari 16+）。',
    byomH2: '带来您自己的模型（BYOM）',
    byomDesc: 'PromptQuorum 从不使用自己的密钥调用任何 LLM。每次调用都直接从您的浏览器发送到您选择的提供商。您的 API 密钥保存在浏览器的 localStorage 中——从不传输到任何 PromptQuorum 服务器。',
    cloudLabel: '云端 API（带来您的密钥）',
    localLabel: '本地（无需 API 密钥）',
    privacy: [
      { title: '零遥测', desc: '无分析、无追踪、无数据收集。甚至没有匿名使用统计。' },
      { title: '零注册', desc: '无需账户，无需邮箱，无需登录。打开应用即可开始工作。' },
      { title: '本地运行', desc: '通过 Electron 的桌面应用，通过 Capacitor 的移动应用。使用本地 LLM 完全离线运行。' },
    ],
    ctaH2: '准备好尝试了吗？',
    ctaDesc: 'PromptQuorum 现已开放公开测试——立即下载。无需候补名单，无需注册。',
    ctaBtn: '下载测试版',
    compareLink: '查看 PromptQuorum 与其他多 LLM 工具的对比 →',
    back: '← 返回首页',
    keyConceptsH2: '核心概念',
    defs: [
      { term: '多模型分发', def: '一键将一个提示词同时发送给 25+ 个 AI 模型。PromptQuorum 通过 URL 将您的提示词预加载到每个目标 — 无需复制粘贴，所有标签页并行打开。' },
      { term: 'Quorum 分析', def: '对多个 AI 模型的回答进行结构化比较，以识别共识、矛盾和置信度。PromptQuorum 提供 13 种分析类型，包括幻觉检测和最佳答案选择。' },
      { term: '共识评分', def: '从多个模型回答的一致程度推导出的置信度评级。共识越高 = 可靠性越高。共识越低则标志着不确定性或潜在幻觉区域。' },
      { term: '幻觉检测', def: '识别仅出现在一个或少数模型中的事实性声明，表明可能存在 AI 捏造。与 5+ 个独立模型交叉验证可大幅降低未检测到的幻觉比率。' },
      { term: 'BYOM — 带来您自己的模型', def: '将您自己的 API 密钥直接连接到 AI 提供商。密钥仅存储在您浏览器的 localStorage 中，直接连接到提供商 — 任何 PromptQuorum 服务器都不会接收或传输您的凭据。' },
    ],
    testingH2: '测试方法',
    testingDesc: 'PromptQuorum 文章中引用的性能数据基于使用 PromptQuorum 进行的受控分发会话。当文章引用具体数字（提示质量评分、温度对比、基准测试数值）时，这些数据反映的是编辑测试或公开基准数据，除非明确标注，否则并非 PromptQuorum 专有测量数据。',
    testingItems: [
      '提示分发：通过 PromptQuorum 一键分发功能同时发送至指定模型',
      '样本量：编辑测试每个条件至少使用 30 个提示，除非文章另有说明',
      '评估：回答由至少 2 名独立评审员进行盲审评分',
      '第三方基准（HumanEval、SWE-bench、MBPP）：来源于官方模型论文或社区排行榜；每篇文章注明评估日期',
      '本地模型测试：在文章所述量化级别下的消费级硬件上运行',
      '披露：凡引用 PromptQuorum 内部测试数据之处，文章正文中均标注"Tested in PromptQuorum"',
    ],
  },
  es: {
    h1: 'Cómo funciona PromptQuorum',
    subtitle: 'Un flujo de trabajo de 4 etapas: escribe un prompt estructurado usando uno de 9 frameworks, optimízalo con tu propio LLM, envíalo simultáneamente a 25+ servicios de IA y analiza todas las respuestas usando 13 tipos de análisis de consenso.',
    badge: 'Funciona completamente en tu navegador — ningún servidor de PromptQuorum ve tus prompts ni claves de API',
    steps: [
      {
        number: '1', name: 'Escribir', route: '/prompt',
        title: 'Estructura tu prompt',
        description: 'Los prompts estructurados con frameworks producen resultados de mayor calidad. PromptQuorum incluye 9 frameworks integrados (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) más 2 ranuras de frameworks totalmente personalizables.',
        details: [
          'Single Prompt Line — estructura mínima para tareas rápidas',
          'CRAFT — Context, Role, Action, Format, Target (escritura creativa)',
          'CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, negocios)',
          'RISEN — Role, Instructions, Steps, End Goal, Narrowing (tareas empresariales secuenciales)',
          'TRACE — Task, Request, Action, Context, Example (aprendizaje few-shot)',
          'APE, SPECS, Google Prompt, RTF — optimizados para tipos de tareas específicas',
        ],
        callout: 'Un Asistente de Frameworks recomienda el mejor framework según el tipo de tarea.',
      },
      {
        number: '2', name: 'Optimizar', route: '/optimize',
        title: 'Refina con tu propio LLM',
        description: 'La calidad del prompt mejora de forma medible con la optimización — los prompts estructurados puntúan un 25–45% más alto en evaluaciones de LLM. PromptQuorum aplica 8 tipos de refinamiento (Hacer Conciso, Expandir Detalle, Dividir en Pasos, Aumentar Especificidad, Simplificar, Añadir Controles de Calidad, Consulta Multi-Experto, Comprimir a Esencia) más detección inteligente de temperatura.',
        details: [
          'Evaluación de calidad — puntuación de 0-100% en claridad, especificidad, estructura y restricciones',
          'Temperatura inteligente — recomienda el nivel óptimo de creatividad (0,0–1,0) según el tipo de tarea',
          'Historial de versiones — cada refinamiento guardado; ramifica y compara rutas de refinamiento',
          'Modo enseñanza — explica por qué cada cambio mejora la calidad y la claridad',
          '8 refinamientos con un clic — aplica transformaciones estructuradas al instante',
          'Instrucción personalizada — refinamiento en texto libre usando tu propio LLM',
        ],
        callout: 'Tu LLM. Tu clave de API. Nada pasa por los servidores de PromptQuorum.',
      },
      {
        number: '3', name: 'Enviar', route: '/dispatch',
        title: 'Envía a 25+ servicios de IA',
        description: 'Enviar el mismo prompt a múltiples modelos de IA revela cuál funciona mejor para tu tarea. PromptQuorum abre pestañas de navegador en paralelo hacia 25+ destinos sin copiar y pegar.',
        details: [
          'Envío automático (17 servicios): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq y más',
          'Copiar-pegar (8 servicios): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All y otros',
          'Perplexity se envía automáticamente — prompt enviado de inmediato al cargarse',
          '2 ranuras de URL personalizadas — configura cualquier servicio de IA fuera de la lista predeterminada',
          'Refinamiento previo al envío opcional — mejora final de LLM antes de enviar',
          'Ejecución en paralelo — todas las pestañas se abren simultáneamente; recoge respuestas en menos de 1 minuto',
        ],
        callout: 'Todas las pestañas del navegador se abren en paralelo. Sin copiar y pegar entre pestañas.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: 'Encuentra consenso entre todos los modelos',
        description: 'Cuando 5+ modelos independientes coinciden en una respuesta, la confianza es mayor que con un solo modelo. Pega todas las respuestas de nuevo en PromptQuorum y aplica 13 tipos de análisis de consenso.',
        details: [
          'Resumen de consenso — identifica temas compartidos y acuerdos unánimes',
          'Detección de contradicciones — marca dónde los modelos divergen; identifica opiniones minoritarias',
          'Detección de alucinaciones — identifica afirmaciones que aparecen en pocos modelos; posibles datos falsos',
          'Puntuación de confianza — nivel de certeza por modelo y por afirmación',
          'Selección de la mejor respuesta — selecciona la respuesta individual de mayor calidad',
          'Fusión ponderada — sintetiza una respuesta híbrida usando los mejores elementos de todos los modelos',
        ],
        callout: 'Cuando 5+ modelos independientes convergen en la misma respuesta, el riesgo de alucinación es menor que con un solo modelo.',
      },
    ],
    frameworksH2: '9 Frameworks de Prompt Integrados',
    frameworksDesc: 'Los prompts estructurados con frameworks producen resultados mediblemente mejores que las solicitudes no estructuradas. Cada framework organiza la entrada de manera diferente para tipos de tareas específicas. Un Asistente de Frameworks recomienda el más adecuado, o crea 2 frameworks personalizados.',
    frameworkCol: 'Framework', fieldsCol: 'Estructura', bestCol: 'Óptimo para',
    frameworks: [
      { name: 'Single Prompt Line', best: 'Consultas rápidas y ad hoc sin estructura' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'Estructura mínima de 3 campos; tareas simples' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'Escritura creativa; tareas de uso general' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'Textos de marketing; comunicación empresarial' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'Análisis; investigación; redacción técnica' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'Flujos de trabajo empresariales de múltiples pasos' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'Aprendizaje few-shot; tareas basadas en ejemplos' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'Tareas profesionales; prompts basados en roles' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'Estructura mínima; solo 3 campos esenciales' },
    ],
    analysisH2: '13 Tipos de Análisis Quorum',
    analysisDesc: 'Aplica 2 o los 13 análisis a respuestas de múltiples modelos. Cada análisis es ejecutado por tu LLM conectado, no por los servidores de PromptQuorum. Identifica consenso, contradicciones, alucinaciones y niveles de confianza en todos los resultados.',
    analysisGroups: [
      { category: 'Síntesis (3)', items: ['Resumen de consenso — temas compartidos entre todos los modelos', 'Fusión ponderada — respuesta híbrida combinando lo mejor de cada modelo', 'Extracción de hechos atómicos — desglosa afirmaciones en hechos discretos; cuenta el acuerdo entre modelos'] },
      { category: 'Comparación (3)', items: ['Mapeo de superposición — identifica qué modelos produjeron resultados idénticos', 'Detección de contradicciones — marca afirmaciones donde los modelos divergen', 'Puntuación de confianza — mide el nivel de certeza por modelo y por afirmación'] },
      { category: 'Calidad (3)', items: ['Verificación de completitud — verifica que toda la información requerida esté presente', 'Detección de alucinaciones — identifica afirmaciones en pocos modelos; posibles datos falsos', 'Eliminación de redundancias — elimina afirmaciones duplicadas o casi duplicadas'] },
      { category: 'Selección (4)', items: ['Selección de la mejor respuesta — elige la respuesta individual de mayor calidad', 'Conjunto multi-modelo — combina resultados usando ponderación de confiabilidad por modelo', 'Bandera de controversia — destaca afirmaciones donde el acuerdo entre modelos es débil', 'Análisis personalizado — plantilla de análisis definida por el usuario'] },
    ],
    exportLabel: 'Exporta resultados en 6 formatos',
    exportNote: 'Múltiples formatos → descargados como archivo .zip. File System Access API para selección de carpeta (Chrome/Edge/Safari 16+).',
    byomH2: 'Trae tu propio modelo (BYOM) — Sin infraestructura de PromptQuorum',
    byomDesc: 'PromptQuorum no aloja ni ejecuta ningún modelo LLM. Cada llamada de API va directamente desde tu navegador a tu proveedor elegido. Tus claves de API permanecen en el localStorage del navegador y nunca se transmiten a los servidores de PromptQuorum.',
    cloudLabel: 'APIs en la nube (trae tu propia clave de API)',
    localLabel: 'Modelos locales (sin clave de API; ejecuta en tu máquina)',
    privacy: [
      { title: 'Sin telemetría', desc: 'Sin análisis, sin rastreo, sin registro, sin recopilación de datos. Ni siquiera estadísticas de uso anónimas.' },
      { title: 'Sin registro', desc: 'Cero registro requerido. Sin correo, sin cuenta, sin inicio de sesión. Abre la app y empieza inmediatamente.' },
      { title: 'Funciona sin conexión', desc: 'La app de escritorio (Electron) y la app móvil (Capacitor) admiten operación completamente sin conexión con modelos locales a través de Ollama, LM Studio, Jan AI o endpoints compatibles.' },
    ],
    ctaH2: '¿Listo para probarlo?',
    ctaDesc: 'PromptQuorum está en beta pública — descárgalo hoy mismo. Sin lista de espera, sin registro.',
    ctaBtn: 'Descargar la beta',
    compareLink: 'Ver cómo PromptQuorum se compara con otras herramientas multi-LLM →',
    back: '← Volver al inicio',
    keyConceptsH2: 'Conceptos Clave',
    defs: [
      {
        term: 'Envío Multi-Modelo',
        def: 'Enviar un prompt simultáneamente a 25+ modelos de IA con un solo clic. PromptQuorum precarga tu prompt en cada destino a través de URL — sin copiar y pegar, todas las pestañas se abren en paralelo.',
      },
      {
        term: 'Análisis Quorum',
        def: 'Comparación estructurada de respuestas de múltiples modelos de IA para identificar consenso, contradicciones y niveles de confianza. PromptQuorum ofrece 13 tipos de análisis, incluyendo Detección de Alucinaciones y Selección de la Mejor Respuesta.',
      },
      {
        term: 'Puntuación de Consenso',
        def: 'Una calificación de confianza derivada del grado de acuerdo entre múltiples respuestas de modelos. Mayor consenso = mayor fiabilidad. Menor consenso señala áreas de incertidumbre o posible alucinación.',
      },
      {
        term: 'Detección de Alucinaciones',
        def: 'Identificar afirmaciones fácticas que aparecen en solo uno o una minoría de modelos, indicando posible fabricación de la IA. Contrastar 5+ modelos independientes reduce drásticamente la tasa de alucinaciones no detectadas.',
      },
      {
        term: 'BYOM — Trae tu Propio Modelo',
        def: 'Conectar tus propias claves de API directamente a los proveedores de IA. Las claves se almacenan solo en el localStorage de tu navegador y se conectan directamente a los proveedores — ningún servidor de PromptQuorum recibe ni transmite tus credenciales.',
      },
    ],
    testingH2: 'Cómo realizamos las pruebas',
    testingDesc: 'Los datos de rendimiento citados en los artículos de PromptQuorum se basan en sesiones de dispatch controladas con PromptQuorum. Cuando un artículo cita cifras concretas (puntuaciones de calidad de prompts, comparaciones de temperatura, benchmarks), estos reflejan pruebas editoriales o datos de benchmark públicos — no mediciones propias de PromptQuorum salvo indicación explícita.',
    testingItems: [
      'Dispatch de prompts: envío simultáneo a los modelos indicados mediante el dispatch con un clic de PromptQuorum',
      'Tamaño muestral: las pruebas editoriales usan un mínimo de 30 prompts por condición salvo indicación contraria',
      'Evaluación: las respuestas son puntuadas por al menos 2 revisores independientes en revisión ciega',
      'Benchmarks de terceros (HumanEval, SWE-bench, MBPP): extraídos de publicaciones oficiales de modelos o leaderboards comunitarios; fecha de evaluación citada en cada artículo',
      'Pruebas de modelos locales: ejecutadas en hardware de consumo al nivel de cuantización indicado en el artículo',
      'Divulgación: cuando se citan pruebas internas de PromptQuorum, se identifican con la etiqueta "Tested in PromptQuorum" en el cuerpo del artículo',
    ],
  },
  pt: {
    h1: 'Como o PromptQuorum funciona',
    subtitle: 'Um fluxo de trabalho de 4 etapas: escreva um prompt estruturado usando um dos 9 frameworks, otimize-o com o seu próprio LLM, despache simultaneamente para mais de 25 serviços de IA e analise todas as respostas usando 13 tipos de análise de consenso.',
    badge: 'Roda inteiramente no seu navegador — nenhum servidor do PromptQuorum vê seus prompts ou chaves de API',
    steps: [
      {
        number: '1', name: 'Escrever', route: '/prompt',
        title: 'Estruture seu prompt',
        description: 'Prompts estruturados com frameworks produzem resultados de maior qualidade. O PromptQuorum inclui 9 frameworks integrados (Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF) mais 2 slots de framework totalmente personalizáveis.',
        details: [
          'Single Prompt Line — estrutura mínima para tarefas rápidas',
          'CRAFT — Context, Role, Action, Format, Target (escrita criativa)',
          'CO-STAR — Context, Objective, Style, Tone, Audience, Response (marketing, negócios)',
          'RISEN — Role, Instructions, Steps, End Goal, Narrowing (tarefas empresariais sequenciais)',
          'TRACE — Task, Request, Action, Context, Example (aprendizado few-shot)',
          'APE, SPECS, Google Prompt, RTF — otimizados para tipos de tarefa específicos',
        ],
        callout: 'Um Assistente de Frameworks recomenda o melhor framework conforme o tipo de tarefa.',
      },
      {
        number: '2', name: 'Otimizar', route: '/optimize',
        title: 'Refine com o seu próprio LLM',
        description: 'A qualidade do prompt melhora de forma mensurável com a otimização — prompts estruturados pontuam de 25 a 45% mais alto em avaliações de LLM. O PromptQuorum aplica 8 tipos de refinamento (Tornar Conciso, Expandir Detalhe, Dividir em Etapas, Aumentar Especificidade, Simplificar, Adicionar Controles de Qualidade, Consulta Multi-Especialista, Comprimir à Essência) mais detecção inteligente de temperatura.',
        details: [
          'Avaliação de qualidade — pontuação de 0-100% em clareza, especificidade, estrutura e restrições',
          'Temperatura inteligente — recomenda o nível ideal de criatividade (0.0-1.0) conforme o tipo de tarefa',
          'Histórico de versões — cada refinamento salvo; ramifique e compare caminhos de refinamento',
          'Modo ensino — explica por que cada alteração melhora a qualidade e a clareza',
          '8 refinamentos com um clique — aplique transformações estruturadas instantaneamente',
          'Instrução personalizada — refinamento em texto livre usando o seu próprio LLM',
        ],
        callout: 'Seu LLM. Sua chave de API. Nada passa pelos servidores do PromptQuorum.',
      },
      {
        number: '3', name: 'Despachar', route: '/dispatch',
        title: 'Envie para mais de 25 serviços de IA',
        description: 'Enviar o mesmo prompt para vários modelos de IA revela qual deles funciona melhor para a sua tarefa. O PromptQuorum abre abas do navegador em paralelo para mais de 25 destinos sem precisar copiar e colar.',
        details: [
          'Despacho automático (17 serviços): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq e mais',
          'Copiar e colar (8 serviços): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All e outros',
          'O Perplexity envia automaticamente — prompt enviado imediatamente ao carregar',
          '2 slots de URL personalizada — configure qualquer serviço de IA fora da lista padrão',
          'Refinamento opcional antes do despacho — aprimoramento final do LLM antes de enviar',
          'Execução em paralelo — todas as abas abrem simultaneamente; colete as respostas em menos de 1 minuto',
        ],
        callout: 'Todas as abas do navegador abrem em paralelo. Sem copiar e colar entre as abas.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: 'Encontre consenso entre todos os modelos',
        description: 'Quando mais de 5 modelos independentes concordam com uma resposta, a confiança é maior do que com um único modelo. Cole todas as respostas de volta no PromptQuorum e aplique 13 tipos de análise de consenso.',
        details: [
          'Resumo de consenso — identifica temas compartilhados e concordâncias unânimes',
          'Detecção de contradições — sinaliza onde os modelos divergem; identifica opiniões minoritárias',
          'Detecção de alucinação — identifica afirmações que aparecem em poucos modelos; possíveis dados falsos',
          'Pontuação de confiança — nível de certeza por modelo e por afirmação',
          'Seleção da melhor resposta — seleciona a resposta individual de maior qualidade',
          'Mesclagem ponderada — sintetiza uma resposta híbrida usando os melhores elementos de todos os modelos',
        ],
        callout: 'Quando mais de 5 modelos independentes convergem para a mesma resposta, o risco de alucinação é menor do que com um único modelo.',
      },
    ],
    frameworksH2: '9 Frameworks de Prompt Integrados',
    frameworksDesc: 'Prompts estruturados com frameworks produzem resultados mensuravelmente melhores do que solicitações não estruturadas. Cada framework organiza a entrada de forma diferente para tipos de tarefa específicos. Um Assistente de Frameworks recomenda o mais adequado, ou crie 2 frameworks personalizados.',
    frameworkCol: 'Framework', fieldsCol: 'Estrutura', bestCol: 'Ideal para',
    frameworks: [
      { name: 'Single Prompt Line', best: 'Consultas rápidas e ad hoc sem estrutura' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'Estrutura mínima de 3 campos; tarefas simples' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'Escrita criativa; tarefas de uso geral' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'Textos de marketing; comunicação empresarial' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'Análise; pesquisa; redação técnica' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'Fluxos de trabalho empresariais de múltiplas etapas' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'Aprendizado few-shot; tarefas baseadas em exemplos' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'Tarefas profissionais; prompts baseados em papéis' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'Estrutura mínima; apenas 3 campos essenciais' },
    ],
    analysisH2: '13 Tipos de Análise Quorum',
    analysisDesc: 'Aplique 2 ou todas as 13 análises às respostas de vários modelos. Cada análise é executada pelo seu LLM conectado, não pelos servidores do PromptQuorum. Identifique consenso, contradições, alucinações e níveis de confiança em todos os resultados.',
    analysisGroups: [
      { category: 'Síntese (3)', items: ['Resumo de consenso — temas compartilhados entre todos os modelos', 'Mesclagem ponderada — resposta híbrida combinando o melhor de cada modelo', 'Extração de fatos atômicos — desmembra afirmações em fatos discretos; conta a concordância entre modelos'] },
      { category: 'Comparação (3)', items: ['Mapeamento de sobreposição — identifica quais modelos produziram resultados idênticos', 'Detecção de contradições — sinaliza afirmações onde os modelos divergem', 'Pontuação de confiança — mede o nível de certeza por modelo e por afirmação'] },
      { category: 'Qualidade (3)', items: ['Verificação de completude — verifica se todas as informações necessárias estão presentes', 'Detecção de alucinação — identifica afirmações em poucos modelos; possíveis dados falsos', 'Eliminação de redundância — remove afirmações duplicadas ou quase duplicadas'] },
      { category: 'Seleção (4)', items: ['Seleção da melhor resposta — escolhe a resposta individual de maior qualidade', 'Conjunto multi-modelo — combina resultados usando ponderação de confiabilidade por modelo', 'Sinalizador de controvérsia — destaca afirmações onde a concordância entre modelos é fraca', 'Análise personalizada — modelo de análise definido pelo usuário'] },
    ],
    exportLabel: 'Exporte resultados em 6 formatos',
    exportNote: 'Múltiplos formatos → baixados como arquivo .zip. File System Access API para seleção de pasta (Chrome/Edge/Safari 16+).',
    byomH2: 'Traga seu próprio modelo (BYOM) — Sem infraestrutura do PromptQuorum',
    byomDesc: 'O PromptQuorum não hospeda nem executa nenhum modelo LLM. Cada chamada de API vai diretamente do seu navegador para o provedor escolhido. Suas chaves de API permanecem no localStorage do navegador e nunca são transmitidas aos servidores do PromptQuorum.',
    cloudLabel: 'APIs na nuvem (traga sua própria chave de API)',
    localLabel: 'Modelos locais (sem chave de API; roda na sua máquina)',
    privacy: [
      { title: 'Sem telemetria', desc: 'Sem análise, sem rastreamento, sem registro, sem coleta de dados. Nem mesmo estatísticas de uso anônimas ou tempo de sessão.' },
      { title: 'Sem cadastro', desc: 'Nenhum cadastro necessário. Sem e-mail, sem conta, sem login. Abra o app e comece imediatamente.' },
      { title: 'Funciona offline', desc: 'O app de desktop (Electron) e o app móvel (Capacitor) suportam operação totalmente offline com modelos locais via Ollama, LM Studio, Jan AI ou endpoints compatíveis.' },
    ],
    ctaH2: 'Pronto para experimentar?',
    ctaDesc: 'O PromptQuorum está em beta pública — baixe hoje mesmo. Sem lista de espera, sem cadastro.',
    ctaBtn: 'Baixar o Beta',
    compareLink: 'Veja como o PromptQuorum se compara a outras ferramentas multi-LLM →',
    back: '← Voltar ao início',
    keyConceptsH2: 'Conceitos-Chave',
    defs: [
      {
        term: 'Despacho Multi-Modelo',
        def: 'Enviar um prompt simultaneamente para mais de 25 modelos de IA com um único clique. O PromptQuorum pré-carrega seu prompt em cada destino via URL — sem copiar e colar, todas as abas abrem em paralelo.',
      },
      {
        term: 'Análise Quorum',
        def: 'Comparação estruturada de respostas de vários modelos de IA para identificar consenso, contradições e níveis de confiança. O PromptQuorum oferece 13 tipos de análise, incluindo Detecção de Alucinação e Seleção da Melhor Resposta.',
      },
      {
        term: 'Pontuação de Consenso',
        def: 'Uma classificação de confiança derivada do grau de concordância entre várias respostas de modelos. Maior consenso = maior confiabilidade. Menor consenso sinaliza áreas de incerteza ou possível alucinação.',
      },
      {
        term: 'Detecção de Alucinação',
        def: 'Identificar afirmações factuais que aparecem em apenas um ou em uma minoria de modelos, indicando possível fabricação da IA. Cruzar mais de 5 modelos independentes reduz drasticamente a taxa de alucinações não detectadas.',
      },
      {
        term: 'BYOM — Traga seu Próprio Modelo',
        def: 'Conectar suas próprias chaves de API diretamente aos provedores de IA. As chaves são armazenadas apenas no localStorage do seu navegador e se conectam diretamente aos provedores — nenhum servidor do PromptQuorum recebe ou transmite suas credenciais.',
      },
    ],
    testingH2: 'Como testamos',
    testingDesc: 'Os dados de desempenho citados nos artigos do PromptQuorum são baseados em sessões de despacho controladas com o PromptQuorum. Quando um artigo cita números específicos (pontuações de qualidade de prompt, comparações de temperatura, valores de benchmark), estes refletem testes editoriais ou dados de benchmark públicos — não medições proprietárias do PromptQuorum, salvo indicação explícita.',
    testingItems: [
      'Despacho de prompts: enviados simultaneamente aos modelos indicados via despacho com um clique do PromptQuorum',
      'Tamanho da amostra: testes editoriais usam no mínimo 30 prompts por condição, salvo indicação contrária',
      'Avaliação: as respostas são pontuadas por pelo menos 2 avaliadores independentes em revisão cega',
      'Benchmarks de terceiros (HumanEval, SWE-bench, MBPP): extraídos de publicações oficiais dos modelos ou leaderboards da comunidade; data de avaliação citada em cada artigo',
      'Testes de modelos locais: executados em hardware de consumidor no nível de quantização indicado no artigo',
      'Divulgação: onde testes internos do PromptQuorum são citados, eles são identificados com a etiqueta "Tested in PromptQuorum" no corpo do artigo',
    ],
  },
  ar: {
    h1: 'كيف يعمل PromptQuorum',
    subtitle: 'سير عمل من 4 مراحل: اكتب موجّهاً منظماً باستخدام أحد 9 أُطر، حسّنه باستخدام نموذجك الخاص، أرسله في آنٍ واحد إلى أكثر من 25 خدمة ذكاء اصطناعي، ثم حلّل جميع الردود باستخدام 13 نوعاً من تحليل الإجماع.',
    badge: 'يعمل بالكامل في متصفحك — لا يرى أي خادم من خوادم PromptQuorum موجّهاتك أو مفاتيح API',
    steps: [
      {
        number: '1', name: 'كتابة', route: '/prompt',
        title: 'نظّم موجّهك',
        description: 'الموجّهات المنظمة بأُطر تنتج مخرجات أعلى جودة. يتضمن PromptQuorum 9 أُطر مدمجة (Single Prompt Line وCRAFT وCO-STAR وRISEN وTRACE وAPE وSPECS وGoogle Prompt وRTF) إضافةً إلى فتحتَي أُطر مخصصتَين.',
        details: [
          'Single Prompt Line — حد أدنى من البنية للمهام السريعة',
          'CRAFT — Context, Role, Action, Format, Target (الكتابة الإبداعية)',
          'CO-STAR — Context, Objective, Style, Tone, Audience, Response (التسويق والأعمال)',
          'RISEN — Role, Instructions, Steps, End Goal, Narrowing (مهام المؤسسات التسلسلية)',
          'TRACE — Task, Request, Action, Context, Example (التعلم بالأمثلة القليلة)',
          'APE وSPECS وGoogle Prompt وRTF — محسّنة لأنواع مهام محددة',
        ],
        callout: 'يوصي معالج الأُطر بأفضل إطار بناءً على نوع مهمتك.',
      },
      {
        number: '2', name: 'تحسين', route: '/optimize',
        title: 'صقّل باستخدام نموذجك الخاص',
        description: 'تتحسن جودة الموجّه بشكل ملحوظ مع التحسين — تحصل الموجّهات المنظمة على درجات أعلى بنسبة 25-45% في تقييم النماذج. يطبّق PromptQuorum 8 أنواع من التحسين (الاختصار، توسيع التفاصيل، التقسيم إلى خطوات، زيادة التحديد، التبسيط، إضافة ضوابط الجودة، الاستشارة متعددة الخبراء، الضغط إلى الجوهر) مع الكشف الذكي عن درجة الحرارة.',
        details: [
          'تقييم الجودة — تسجيل 0-100% على الوضوح والتحديد والبنية والقيود',
          'الحرارة الذكية — توصي بمستوى الإبداع الأمثل (0.0-1.0) بناءً على نوع المهمة',
          'سجل الإصدارات — كل تحسين محفوظ؛ تفرّع وقارن مسارات التحسين',
          'وضع التعليم — يشرح لماذا يحسّن كل تغيير الجودة والوضوح',
          '8 تحسينات بنقرة واحدة — تطبيق تحويلات منظمة فوراً',
          'تعليمات مخصصة — تحسين بنص حر باستخدام نموذجك الخاص',
        ],
        callout: 'نموذجك. مفتاح API الخاص بك. لا شيء يمر عبر خوادم PromptQuorum.',
      },
      {
        number: '3', name: 'إرسال', route: '/dispatch',
        title: 'أرسل إلى أكثر من 25 خدمة ذكاء اصطناعي',
        description: 'إرسال الموجّه ذاته إلى نماذج ذكاء اصطناعي متعددة يكشف أي نموذج يؤدي أفضل لمهمتك. يفتح PromptQuorum علامات تبويب متوازية في المتصفح لأكثر من 25 وجهة دون الحاجة إلى النسخ واللصق.',
        details: [
          'الإرسال التلقائي (17 خدمة): OpenAI ChatGPT وGoogle Gemini وAnthropic Claude وPerplexity وxAI Grok وDeepSeek وMistral وCohere وAzure وTogether وGroq والمزيد',
          'نسخ ولصق (8 خدمات): Qwen وMeta AI وPoe وKimi وLM Studio وJan AI وGPT4All وغيرها',
          'Perplexity يرسل تلقائياً — يُرسل الموجّه فور الوصول',
          'فتحتا عنوان URL مخصص — قم بتهيئة أي خدمة ذكاء اصطناعي غير موجودة في القائمة الافتراضية',
          'تحسين اختياري قبل الإرسال — تحسين نهائي بالنموذج قبل الإرسال',
          'تنفيذ متوازٍ — تُفتح جميع علامات التبويب في آنٍ واحد؛ اجمع الردود في أقل من دقيقة',
        ],
        callout: 'تُفتح جميع علامات التبويب في آنٍ واحد. لا نسخ ولصق بين التبويبات.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: 'ابحث عن الإجماع عبر جميع النماذج',
        description: 'عندما تتفق 5 نماذج مستقلة أو أكثر على إجابة، تكون درجة الثقة أعلى مما هي عليه مع نموذج واحد. الصق جميع الردود مرة أخرى في PromptQuorum وطبّق 13 نوعاً من تحليل الإجماع.',
        details: [
          'ملخص الإجماع — يحدد المواضيع المشتركة والاتفاقيات بالإجماع',
          'كشف التناقضات — يُشير إلى أين تتباين النماذج؛ يحدد الآراء الأقلية',
          'كشف الهلوسة — يحدد الادعاءات التي تظهر في عدد قليل من النماذج؛ الحقائق الكاذبة المحتملة',
          'تسجيل الثقة — مستوى اليقين لكل نموذج ولكل ادعاء',
          'اختيار أفضل إجابة — يختار الاستجابة الفردية الأعلى جودة',
          'دمج مرجّح — يُركّب استجابة هجينة باستخدام أفضل عناصر جميع النماذج',
        ],
        callout: 'عندما تتقارب 5 نماذج مستقلة أو أكثر على الإجابة ذاتها، يكون خطر الهلوسة أقل مما هو عليه مع نموذج واحد.',
      },
    ],
    frameworksH2: '9 أُطر موجّهات مدمجة',
    frameworksDesc: 'الموجّهات المنظمة بأُطر تنتج مخرجات أفضل قياسياً من الطلبات غير المنظمة. كل إطار ينظّم المدخلات بشكل مختلف لأنواع مهام محددة. يوصي معالج الأُطر بالأنسب، أو أنشئ إطارَين مخصصَين.',
    frameworkCol: 'الإطار', fieldsCol: 'البنية', bestCol: 'الأمثل لـ',
    frameworks: [
      { name: 'Single Prompt Line', best: 'استعلامات سريعة وغير رسمية بلا بنية' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: 'بنية بسيطة بـ3 حقول؛ المهام البسيطة' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: 'الكتابة الإبداعية؛ المهام العامة' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: 'نصوص تسويقية؛ التواصل التجاري' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: 'التحليل؛ البحث؛ الكتابة التقنية' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: 'سير عمل المؤسسات متعددة الخطوات' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: 'التعلم بالأمثلة القليلة؛ المهام القائمة على الأمثلة' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: 'المهام المهنية؛ الموجّهات القائمة على الأدوار' },
      { name: 'RTF', fields: 'Role · Task · Format', best: 'بنية بسيطة؛ 3 حقول أساسية فقط' },
    ],
    analysisH2: '13 نوعاً من تحليل Quorum',
    analysisDesc: 'طبّق 2 أو جميع التحليلات الـ13 على ردود نماذج متعددة. كل تحليل يُشغَّل بواسطة نموذجك المتصل، وليس خوادم PromptQuorum. حدّد الإجماع والتناقضات والهلوسة ومستويات الثقة عبر جميع المخرجات.',
    analysisGroups: [
      { category: 'توليف (3)', items: ['ملخص الإجماع — المواضيع المشتركة عبر جميع النماذج', 'دمج مرجّح — استجابة هجينة تجمع أفضل ما في كل نموذج', 'استخراج الحقائق الذرية — تقسيم الادعاءات إلى حقائق منفصلة؛ إحصاء الاتفاق بين النماذج'] },
      { category: 'مقارنة (3)', items: ['رسم خريطة التداخل — يحدد النماذج التي أنتجت نتائج متطابقة', 'كشف التناقضات — يُشير إلى الادعاءات التي تتباين فيها النماذج', 'تسجيل الثقة — يقيس مستوى اليقين لكل نموذج ولكل ادعاء'] },
      { category: 'جودة (3)', items: ['التحقق من الاكتمال — يتحقق من وجود جميع المعلومات المطلوبة', 'كشف الهلوسة — يحدد الادعاءات في عدد قليل من النماذج؛ البيانات الكاذبة المحتملة', 'إزالة التكرار — يزيل الادعاءات المكررة أو شبه المكررة'] },
      { category: 'اختيار (4)', items: ['اختيار أفضل إجابة — يختار الاستجابة الفردية الأعلى جودة', 'مجموعة متعددة النماذج — يجمع النتائج باستخدام ترجيح موثوقية النماذج', 'علامة الجدل — يُبرز الادعاءات حيث يكون الاتفاق بين النماذج ضعيفاً', 'تحليل مخصص — نموذج تحليل يحدده المستخدم'] },
    ],
    exportLabel: 'تصدير النتائج بـ6 صيغ',
    exportNote: 'صيغ متعددة → تُنزَّل كملف .zip. File System Access API لاختيار المجلد (Chrome/Edge/Safari 16+).',
    byomH2: 'أحضر نموذجك الخاص (BYOM) — بلا بنية تحتية من PromptQuorum',
    byomDesc: 'لا يستضيف PromptQuorum أي نموذج LLM ولا يُشغّله. كل استدعاء API يذهب مباشرةً من متصفحك إلى المزوّد المختار. تبقى مفاتيح API في localStorage المتصفح ولا تُرسل أبداً إلى خوادم PromptQuorum.',
    cloudLabel: 'واجهات API السحابية (أحضر مفتاح API الخاص بك)',
    localLabel: 'النماذج المحلية (بلا مفتاح API؛ تعمل على جهازك)',
    privacy: [
      { title: 'بلا قياسات', desc: 'بلا تحليلات، بلا تتبع، بلا تسجيل، بلا جمع بيانات. حتى إحصاءات الاستخدام المجهولة أو وقت الجلسة غير موجودة.' },
      { title: 'بلا تسجيل', desc: 'لا يلزم التسجيل. بلا بريد إلكتروني، بلا حساب، بلا تسجيل دخول. افتح التطبيق وابدأ فوراً.' },
      { title: 'يعمل بلا اتصال', desc: 'تطبيق سطح المكتب (Electron) والتطبيق المحمول (Capacitor) يدعمان التشغيل الكامل دون اتصال مع النماذج المحلية عبر Ollama وLM Studio وJan AI أو أي نقطة نهاية متوافقة.' },
    ],
    ctaH2: 'هل أنت مستعد للتجربة؟',
    ctaDesc: 'يتوفر PromptQuorum الآن في النسخة التجريبية العامة — نزّله اليوم. دون قائمة انتظار ودون تسجيل.',
    ctaBtn: 'تنزيل النسخة التجريبية',
    compareLink: 'شاهد كيف تقارن PromptQuorum بأدوات النماذج المتعددة الأخرى →',
    back: '→ العودة إلى الرئيسية',
    keyConceptsH2: 'المفاهيم الأساسية',
    defs: [
      {
        term: 'الإرسال متعدد النماذج',
        def: 'إرسال موجّه في آنٍ واحد إلى أكثر من 25 نموذج ذكاء اصطناعي بنقرة واحدة. يُحمّل PromptQuorum موجّهك مسبقاً في كل وجهة عبر URL — بلا نسخ ولصق، تُفتح جميع التبويبات في آنٍ واحد.',
      },
      {
        term: 'تحليل Quorum',
        def: 'مقارنة منظمة لردود نماذج ذكاء اصطناعي متعددة لتحديد الإجماع والتناقضات ومستويات الثقة. يوفر PromptQuorum 13 نوعاً من التحليل، بما في ذلك كشف الهلوسة واختيار أفضل إجابة.',
      },
      {
        term: 'درجة الإجماع',
        def: 'تصنيف ثقة مشتق من مدى اتفاق ردود نماذج متعددة. إجماع أعلى = موثوقية أعلى. إجماع أقل يُشير إلى مناطق عدم يقين أو هلوسة محتملة.',
      },
      {
        term: 'كشف الهلوسة',
        def: 'تحديد الادعاءات الواقعية التي تظهر في نموذج واحد فقط أو في أقلية من النماذج، مما يُشير إلى احتمال الاختلاق من قِبل الذكاء الاصطناعي. التحقق من أكثر من 5 نماذج مستقلة يقلل بشكل كبير من معدل الهلوسات غير المكتشفة.',
      },
      {
        term: 'BYOM — أحضر نموذجك الخاص',
        def: 'ربط مفاتيح API الخاصة بك مباشرةً بمزوّدي الذكاء الاصطناعي. تُخزَّن المفاتيح فقط في localStorage متصفحك وتتصل مباشرةً بالمزوّدين — لا يستقبل أي خادم من خوادم PromptQuorum بيانات اعتمادك ولا يُرسلها.',
      },
    ],
    testingH2: 'كيف نختبر',
    testingDesc: 'تستند بيانات الأداء المُستشهد بها في مقالات PromptQuorum إلى جلسات إرسال خاضعة للرقابة باستخدام PromptQuorum. عندما يذكر مقال أرقاماً محددة (درجات جودة الموجّه، مقارنات درجات الحرارة، قيم المعيار)، فإنها تعكس اختبارات تحريرية أو بيانات معيار عامة — وليس قياسات خاصة بـPromptQuorum ما لم يُذكر ذلك صراحةً.',
    testingItems: [
      'إرسال الموجّهات: مُرسَلة في آنٍ واحد إلى النماذج المحددة عبر الإرسال بنقرة واحدة في PromptQuorum',
      'حجم العينة: تستخدم الاختبارات التحريرية 30 موجّهاً على الأقل لكل حالة ما لم يُذكر غير ذلك',
      'التقييم: تُسجَّل الردود من قِبل مقيِّمَين مستقلَّين على الأقل في مراجعة عمياء',
      'معايير الجهات الخارجية (HumanEval وSWE-bench وMBPP): مستخرجة من المنشورات الرسمية للنماذج أو لوحات المتصدرين المجتمعية؛ تاريخ التقييم مذكور في كل مقال',
      'اختبارات النماذج المحلية: مُشغَّلة على أجهزة المستهلكين عند مستوى التكميم المذكور في المقال',
      'الإفصاح: حيثما يُستشهد باختبارات PromptQuorum الداخلية، تُحدَّد بعلامة "Tested in PromptQuorum" في نص المقال',
    ],
  },
  ko: {
    h1: 'PromptQuorum 작동 방식',
    subtitle: '4단계 워크플로우: 9가지 프레임워크 중 하나를 사용해 구조화된 프롬프트를 작성하고, 본인의 LLM으로 최적화한 후, 25개 이상의 AI 서비스에 동시에 전송하고, 13가지 합의 분석 유형으로 모든 응답을 분석합니다.',
    badge: '완전히 브라우저에서 실행 — PromptQuorum 서버는 프롬프트나 API 키를 볼 수 없습니다',
    steps: [
      {
        number: '1', name: '작성', route: '/prompt',
        title: '프롬프트를 구조화하세요',
        description: '프레임워크로 구조화된 프롬프트는 더 높은 품질의 출력을 생성합니다. PromptQuorum에는 9개의 내장 프레임워크(Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF)와 2개의 완전 맞춤형 프레임워크 슬롯이 포함됩니다.',
        details: [
          'Single Prompt Line — 빠른 작업을 위한 최소 구조',
          'CRAFT — Context, Role, Action, Format, Target (창의적 글쓰기)',
          'CO-STAR — Context, Objective, Style, Tone, Audience, Response (마케팅, 비즈니스)',
          'RISEN — Role, Instructions, Steps, End Goal, Narrowing (순차적 기업 작업)',
          'TRACE — Task, Request, Action, Context, Example (퓨샷 학습)',
          'APE, SPECS, Google Prompt, RTF — 특정 작업 유형에 최적화',
        ],
        callout: '프레임워크 마법사가 작업 유형에 따라 최적의 프레임워크를 추천합니다.',
      },
      {
        number: '2', name: '최적화', route: '/optimize',
        title: '본인의 LLM으로 개선하세요',
        description: '최적화를 통해 프롬프트 품질이 측정 가능하게 향상됩니다 — 구조화된 프롬프트는 LLM 평가에서 25~45% 더 높은 점수를 받습니다. PromptQuorum은 8가지 개선 유형(간결하게, 세부사항 확장, 단계별 분류, 구체성 높이기, 단순화, 품질 관리 추가, 다중 전문가 자문, 핵심으로 압축)과 스마트 온도 감지를 적용합니다.',
        details: [
          '품질 평가 — 명확성, 구체성, 구조, 제약 조건에 대한 0-100% 점수',
          '스마트 온도 — 작업 유형에 따라 최적의 창의성 수준(0.0-1.0) 추천',
          '버전 기록 — 모든 개선 사항 저장; 개선 경로 분기 및 비교',
          '교육 모드 — 각 변경사항이 품질과 명확성을 어떻게 개선하는지 설명',
          '원클릭 8가지 개선 — 구조화된 변환을 즉시 적용',
          '맞춤 지시 — 본인의 LLM을 사용한 자유 텍스트 개선',
        ],
        callout: '내 LLM. 내 API 키. PromptQuorum 서버를 통과하는 것은 아무것도 없습니다.',
      },
      {
        number: '3', name: '전송', route: '/dispatch',
        title: '25개 이상의 AI 서비스로 전송하세요',
        description: '동일한 프롬프트를 여러 AI 모델에 전송하면 작업에 가장 적합한 모델이 어떤 것인지 알 수 있습니다. PromptQuorum은 복사-붙여넣기 없이 25개 이상의 목적지에 병렬 브라우저 탭을 엽니다.',
        details: [
          '자동 전송 (17개 서비스): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq 등',
          '복사-붙여넣기 (8개 서비스): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All 등',
          'Perplexity 자동 제출 — 도착 즉시 프롬프트 전송',
          '맞춤 URL 슬롯 2개 — 기본 목록에 없는 AI 서비스 구성 가능',
          '전송 전 선택적 개선 — 전송 전 최종 LLM 향상',
          '병렬 실행 — 모든 탭이 동시에 열림; 1분 이내에 응답 수집',
        ],
        callout: '모든 브라우저 탭이 동시에 열립니다. 탭 간 수동 복사-붙여넣기 없음.',
      },
      {
        number: '4', name: 'Quorum', route: '/quorum',
        title: '모든 모델에서 합의를 찾으세요',
        description: '5개 이상의 독립 모델이 답변에 동의하면, 단일 모델보다 신뢰도가 높아집니다. 모든 응답을 PromptQuorum에 붙여넣고 13가지 합의 분석 유형을 적용하세요.',
        details: [
          '합의 요약 — 공유 주제와 만장일치 합의 식별',
          '모순 감지 — 모델이 분기되는 지점 표시; 소수 의견 식별',
          '환각 감지 — 소수 모델에만 나타나는 주장 식별; 잠재적 허위 사실',
          '신뢰도 점수 — 모델별, 주장별 확실성 수준',
          '최적 답변 선택 — 가장 높은 품질의 개별 응답 선택',
          '가중 병합 — 모든 모델의 최선 요소를 사용하여 혼합 응답 합성',
        ],
        callout: '5개 이상의 독립 모델이 동일한 답변으로 수렴하면, 단일 모델보다 환각 위험이 낮습니다.',
      },
    ],
    frameworksH2: '9가지 내장 프롬프트 프레임워크',
    frameworksDesc: '프레임워크로 구조화된 프롬프트는 비구조적 요청보다 측정 가능하게 더 나은 출력을 생성합니다. 각 프레임워크는 특정 작업 유형에 대해 입력을 다르게 구성합니다. 프레임워크 마법사가 최적의 것을 추천하거나, 맞춤 프레임워크 2개를 만드세요.',
    frameworkCol: '프레임워크', fieldsCol: '구조', bestCol: '최적 용도',
    frameworks: [
      { name: 'Single Prompt Line', best: '구조 없는 빠른 임시 쿼리' },
      { name: 'APE', fields: 'Action · Purpose · Expectation', best: '3개 필드 최소 구조; 단순한 작업' },
      { name: 'CRAFT', fields: 'Context · Role · Action · Format · Target', best: '창의적 글쓰기; 범용 작업' },
      { name: 'CO-STAR', fields: 'Context · Objective · Style · Tone · Audience · Response', best: '마케팅 카피; 비즈니스 커뮤니케이션' },
      { name: 'SPECS', fields: 'Situation · Purpose · Expected Output · Context · Style', best: '분석; 연구; 기술 글쓰기' },
      { name: 'RISEN', fields: 'Role · Instructions · Steps · End Goal · Narrowing', best: '다단계 기업 워크플로우' },
      { name: 'TRACE', fields: 'Task · Request · Action · Context · Example', best: '퓨샷 학습; 예시 기반 작업' },
      { name: 'Google Prompt', fields: 'Task · Context · Persona', best: '전문 작업; 역할 기반 프롬프트' },
      { name: 'RTF', fields: 'Role · Task · Format', best: '최소 구조; 핵심 3개 필드만' },
    ],
    analysisH2: '13가지 Quorum 분석 유형',
    analysisDesc: '여러 모델의 응답에 2가지 또는 13가지 분석 전체를 적용하세요. 각 분석은 PromptQuorum 서버가 아닌 연결된 LLM에 의해 실행됩니다. 모든 출력에서 합의, 모순, 환각, 신뢰 수준을 식별하세요.',
    analysisGroups: [
      { category: '합성 (3)', items: ['합의 요약 — 모든 모델에서 공유된 주제', '가중 병합 — 각 모델의 최선을 결합한 혼합 응답', '원자적 사실 추출 — 주장을 개별 사실로 분해; 모델 간 합의 집계'] },
      { category: '비교 (3)', items: ['겹침 매핑 — 동일한 결과를 생성한 모델 식별', '모순 감지 — 모델이 분기되는 주장 표시', '신뢰도 점수 — 모델별, 주장별 확실성 수준 측정'] },
      { category: '품질 (3)', items: ['완전성 확인 — 필요한 모든 정보가 있는지 확인', '환각 감지 — 소수 모델의 주장 식별; 잠재적 허위 데이터', '중복 제거 — 중복 또는 거의 중복된 주장 제거'] },
      { category: '선택 (4)', items: ['최적 답변 선택 — 가장 높은 품질의 개별 응답 선택', '다중 모델 앙상블 — 모델 신뢰도 가중치로 결과 결합', '논란 표시 — 모델 간 합의가 약한 주장 강조', '맞춤 분석 — 사용자 정의 분석 템플릿'] },
    ],
    exportLabel: '6가지 형식으로 결과 내보내기',
    exportNote: '여러 형식 → .zip 파일로 다운로드. 폴더 선택을 위한 File System Access API (Chrome/Edge/Safari 16+).',
    byomH2: '본인 모델 가져오기 (BYOM) — PromptQuorum 인프라 없음',
    byomDesc: 'PromptQuorum은 LLM 모델을 호스팅하거나 실행하지 않습니다. 모든 API 호출은 브라우저에서 직접 선택한 제공업체로 이동합니다. API 키는 브라우저의 localStorage에 남아 있으며 PromptQuorum 서버로 전송되지 않습니다.',
    cloudLabel: '클라우드 API (본인 API 키 가져오기)',
    localLabel: '로컬 모델 (API 키 없음; 내 기기에서 실행)',
    privacy: [
      { title: '원격 측정 없음', desc: '분석, 추적, 로깅, 데이터 수집 없음. 익명 사용 통계나 세션 시간조차 없습니다.' },
      { title: '가입 없음', desc: '가입 불필요. 이메일, 계정, 로그인 없음. 앱을 열고 바로 시작하세요.' },
      { title: '오프라인 작동', desc: '데스크톱 앱(Electron)과 모바일 앱(Capacitor)은 Ollama, LM Studio, Jan AI 또는 호환 엔드포인트를 통한 로컬 모델로 완전 오프라인 작동을 지원합니다.' },
    ],
    ctaH2: '사용해볼 준비가 되셨나요?',
    ctaDesc: 'PromptQuorum은 퍼블릭 베타 단계입니다 — 지금 바로 다운로드하세요. 대기자 명단이나 가입이 필요하지 않습니다.',
    ctaBtn: '베타 다운로드',
    compareLink: 'PromptQuorum이 다른 멀티 LLM 도구와 어떻게 비교되는지 확인하세요 →',
    back: '← 홈으로 돌아가기',
    keyConceptsH2: '핵심 개념',
    defs: [
      {
        term: '다중 모델 디스패치',
        def: '한 번의 클릭으로 25개 이상의 AI 모델에 프롬프트를 동시에 전송합니다. PromptQuorum은 URL을 통해 각 목적지에 프롬프트를 미리 로드합니다 — 복사-붙여넣기 없이, 모든 탭이 동시에 열립니다.',
      },
      {
        term: 'Quorum 분석',
        def: '합의, 모순, 신뢰 수준을 식별하기 위한 여러 AI 모델 응답의 구조화된 비교. PromptQuorum은 환각 감지와 최적 답변 선택을 포함한 13가지 분석 유형을 제공합니다.',
      },
      {
        term: '합의 점수',
        def: '여러 모델 응답이 얼마나 일치하는지에서 도출된 신뢰 등급. 합의가 높을수록 신뢰도가 높습니다. 합의가 낮으면 불확실성 또는 잠재적 환각 영역을 나타냅니다.',
      },
      {
        term: '환각 감지',
        def: '하나 또는 소수의 모델에만 나타나는 사실적 주장을 식별하여 AI가 만들어냈을 가능성을 나타냅니다. 5개 이상의 독립 모델을 교차 확인하면 감지되지 않은 환각률을 크게 줄입니다.',
      },
      {
        term: 'BYOM — 본인 모델 가져오기',
        def: '본인의 API 키를 AI 제공업체에 직접 연결합니다. 키는 브라우저의 localStorage에만 저장되고 제공업체에 직접 연결됩니다 — PromptQuorum 서버는 자격 증명을 수신하거나 전송하지 않습니다.',
      },
    ],
    testingH2: '테스트 방법',
    testingDesc: 'PromptQuorum 기사에서 인용된 성능 데이터는 PromptQuorum을 사용한 통제된 디스패치 세션을 기반으로 합니다. 기사에서 특정 수치(프롬프트 품질 점수, 온도 비교, 벤치마크 값)를 인용할 때, 이는 명시적으로 표시된 경우를 제외하고는 편집 테스트 또는 공개 벤치마크 데이터를 반영합니다.',
    testingItems: [
      '프롬프트 디스패치: PromptQuorum의 원클릭 디스패치를 통해 명시된 모델에 동시 전송',
      '샘플 크기: 달리 명시되지 않는 한 편집 테스트는 조건당 최소 30개 프롬프트 사용',
      '평가: 응답은 맹검 검토에서 최소 2명의 독립 평가자에 의해 점수 매겨짐',
      '제3자 벤치마크 (HumanEval, SWE-bench, MBPP): 공식 모델 간행물 또는 커뮤니티 리더보드에서 추출; 평가 날짜는 각 기사에 인용됨',
      '로컬 모델 테스트: 기사에 명시된 양자화 수준에서 소비자 하드웨어에서 실행',
      '공개: PromptQuorum 내부 테스트가 인용된 경우, 기사 본문에서 "Tested in PromptQuorum" 레이블로 식별됨',
    ],
  },
}

const providers = {
  cloud: ['OpenAI (GPT-4, GPT-4o)', 'Anthropic (Claude 3.5)', 'Google Gemini 1.5', 'Grok (xAI)', 'DeepSeek', 'Mistral', 'Cohere', 'Together AI', 'Groq', 'OpenRouter (free tier)'],
  local: ['Ollama (localhost:11434)', 'LM Studio (localhost:1234)', 'Jan AI (localhost:1337)', 'GPT4All (localhost:4891)', 'Open WebUI', 'KoboldCpp', 'vLLM', 'oobabooga', 'Any OpenAI-compatible endpoint'],
}

function HowItWorksContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)
  const t = (T[lang as keyof typeof T] ?? T.en)!

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{t.h1}</h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {t.badge}
        </div>

        {/* Cross-language links */}
        <div className="mt-8">
          <LangLinksBar cluster="how-it-works" slug="" availableLangs={["en", "de", "fr", "ja", "zh", "es", "pt", "ar", "ko"]} initialLang={initialLang} />
        </div>
      </div>

      {/* 4-Step Workflow */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 mb-24">
        {t.steps.map((step, i) => (
          <div key={i} className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
            <div className="flex items-start gap-6 p-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{step.name}</span>
                  <code className="text-xs text-text-muted bg-muted px-2 py-0.5 rounded">{step.route}</code>
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h2>
                <p className="text-text-secondary mb-5 text-lg leading-relaxed">{step.description}</p>
                <ul className="space-y-2 mb-5">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-secondary">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                  {step.callout}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Frameworks */}
      <div className="bg-card border-y border-primary/20 py-20 mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-3">{t.frameworksH2}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">{t.frameworksDesc}</p>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary sticky left-0 z-10 bg-white">{t.frameworkCol}</th>
                  <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">{t.fieldsCol}</th>
                  <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">{t.bestCol}</th>
                </tr>
              </thead>
              <tbody>
                {t.frameworks.map((f, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-surface transition-colors group">
                    <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap sticky left-0 z-10 bg-white group-hover:bg-surface transition-colors">{f.name}</td>
                    <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">{f.fields || '—'}</td>
                    <td className="py-2 sm:py-3 text-text-secondary">{f.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
          </div>
        </div>
      </div>

      {/* Quorum Analysis Types */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-3">{t.analysisH2}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{t.analysisDesc}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.analysisGroups.map((group, i) => (
            <div key={i} className="bg-card border border-primary/20 rounded-xl p-5">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{group.category}</div>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-secondary/30 border border-primary/20 rounded-xl p-6">
          <div className="text-sm font-semibold text-text-primary mb-2">{t.exportLabel}</div>
          <div className="flex flex-wrap gap-2">
            {['.txt', '.md', '.json', '.csv', '.html', '.pdf'].map(f => (
              <span key={f} className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">{f}</span>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-2">{t.exportNote}</p>
        </div>
      </div>

      {/* Key Concept Definitions — GEO semantic anchors */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl font-bold text-text-primary mb-8">{t.keyConceptsH2}</h2>
        <dl className="grid sm:grid-cols-2 gap-5">
          {t.defs.map(({ term, def }) => (
            <div key={term} className="bg-card border border-primary/20 rounded-xl p-6">
              <dt className="font-semibold text-primary mb-2">{term}</dt>
              <dd className="text-text-secondary text-sm leading-relaxed">{def}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* BYOM */}
      <div className="bg-card border-y border-primary/20 py-20 mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-3">{t.byomH2}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">{t.byomDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{t.cloudLabel}</div>
              <ul className="space-y-2">
                {providers.cloud.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{t.localLabel}</div>
              <ul className="space-y-2">
                {providers.local.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {t.privacy.map((item, i) => (
            <div key={i} className="bg-card border border-primary/20 rounded-xl p-6">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <span className="text-primary text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Test — methodology statement for editorial claims */}
      {'testingH2' in t && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-card border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">{(t as any).testingH2}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">{(t as any).testingDesc}</p>
            <ul className="space-y-2">
              {((t as any).testingItems as string[]).map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-text-primary mb-3">{t.ctaH2}</h2>
          <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
          <Link prefetch={false} href="/#waitlist" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            {t.ctaBtn}
          </Link>
          <div className="mt-6">
            <Link prefetch={false} href="/compare" className="text-sm text-primary hover:text-primary/80 font-medium">
              {t.compareLink}
            </Link>
          </div>
        </div>
        <p className="mt-8">
          <Link prefetch={false} href="/" className="text-primary hover:text-primary/80 font-medium">{t.back}</Link>
        </p>
      </div>

    </div>
  )
}

export function HowItWorksPageClient({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <HowItWorksContent initialLang={initialLang} />
}
