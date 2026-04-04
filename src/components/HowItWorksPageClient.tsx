'use client'

import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

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
    ctaDesc: 'Join the waitlist for early access. First users get lifetime premium features.',
    ctaBtn: 'Join the Waitlist',
    compareLink: 'See how PromptQuorum compares to other multi-LLM tools →',
    back: '← Back to Home',
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
    ctaDesc: 'Tragen Sie sich in die Warteliste für frühen Zugang ein. Erste Nutzer erhalten lebenslange Premium-Funktionen.',
    ctaBtn: 'Warteliste beitreten',
    compareLink: 'PromptQuorum im Vergleich zu anderen Multi-LLM-Tools →',
    back: '← Zurück zur Startseite',
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
    ctaDesc: 'Rejoignez la liste d\'attente pour un accès anticipé. Les premiers utilisateurs obtiennent des fonctionnalités premium à vie.',
    ctaBtn: 'Rejoindre la liste d\'attente',
    compareLink: 'Comparer PromptQuorum avec d\'autres outils multi-LLM →',
    back: '← Retour à l\'accueil',
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
    ctaDesc: '早期アクセスのためにウェイトリストに参加してください。最初のユーザーはプレミアム機能を生涯利用できます。',
    ctaBtn: 'ウェイトリストに参加',
    compareLink: '他のマルチLLMツールとPromptQuorumを比較する →',
    back: '← ホームに戻る',
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
    ctaDesc: '加入候补名单以获得早期访问权限。首批用户可终身使用高级功能。',
    ctaBtn: '加入候补名单',
    compareLink: '查看 PromptQuorum 与其他多 LLM 工具的对比 →',
    back: '← 返回首页',
  },
}

const DEFS = [
  {
    term: 'Multi-Model Dispatch',
    def: 'Sending one prompt simultaneously to 25+ AI models in a single click. PromptQuorum pre-loads your prompt into each destination via URL — no copy-pasting, all tabs open in parallel.',
  },
  {
    term: 'Quorum Analysis',
    def: 'Structured comparison of responses from multiple AI models to identify consensus, contradictions, and confidence levels. PromptQuorum offers 13 analysis types including Hallucination Detection and Best Answer Selection.',
  },
  {
    term: 'Consensus Scoring',
    def: 'A confidence rating derived from the degree of agreement across multiple model responses. Higher consensus = higher reliability. Lower consensus flags areas of uncertainty or potential hallucination.',
  },
  {
    term: 'Hallucination Detection',
    def: 'Identifying factual claims that appear in only one or a minority of model responses, indicating potential AI fabrication. Cross-referencing 5+ independent models dramatically reduces the rate of undetected hallucinations.',
  },
  {
    term: 'BYOM — Bring Your Own Model',
    def: 'Connecting your own API keys directly to AI providers. Keys are stored only in your browser\'s localStorage and connect directly to providers — no PromptQuorum server ever receives or transmits your credentials.',
  },
]

const providers = {
  cloud: ['OpenAI (GPT-4, GPT-4o)', 'Anthropic (Claude 3.5)', 'Google Gemini 1.5', 'Grok (xAI)', 'DeepSeek', 'Mistral', 'Cohere', 'Together AI', 'Groq', 'OpenRouter (free tier)'],
  local: ['Ollama (localhost:11434)', 'LM Studio (localhost:1234)', 'Jan AI (localhost:1337)', 'GPT4All (localhost:4891)', 'Open WebUI', 'KoboldCpp', 'vLLM', 'oobabooga', 'Any OpenAI-compatible endpoint'],
}

function HowItWorksContent({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  const lang = useLang(initialLang)
  const t = T[lang] ?? T.en

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{t.h1}</h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {t.badge}
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 pr-6 font-semibold text-text-primary">{t.frameworkCol}</th>
                  <th className="text-left py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">{t.fieldsCol}</th>
                  <th className="text-left py-3 font-semibold text-text-primary">{t.bestCol}</th>
                </tr>
              </thead>
              <tbody>
                {t.frameworks.map((f, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-surface transition-colors">
                    <td className="py-3 pr-6 font-semibold text-primary whitespace-nowrap">{f.name}</td>
                    <td className="py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">{f.fields || '—'}</td>
                    <td className="py-3 text-text-secondary">{f.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        <h2 className="text-2xl font-bold text-text-primary mb-8">Key Concepts</h2>
        <dl className="grid sm:grid-cols-2 gap-5">
          {DEFS.map(({ term, def }) => (
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

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-text-primary mb-3">{t.ctaH2}</h2>
          <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
          <Link href="/#waitlist" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            {t.ctaBtn}
          </Link>
          <div className="mt-6">
            <Link href="/compare" className="text-sm text-primary hover:text-primary/80 font-medium">
              {t.compareLink}
            </Link>
          </div>
        </div>
        <p className="mt-8">
          <Link href="/" className="text-primary hover:text-primary/80 font-medium">{t.back}</Link>
        </p>
      </div>

    </div>
  )
}

export function HowItWorksPageClient({ initialLang }: { initialLang?: import("@/hooks/useLang").Lang }) {
  return <HowItWorksContent initialLang={initialLang} />
}
