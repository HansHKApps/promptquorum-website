'use client'

import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import { LangLinksBar } from '@/components/LangLinksBar'

// ---------------------------------------------------------------------------
// Content data — all 5 languages
// ---------------------------------------------------------------------------

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh' | 'es' | 'pt' | 'ar' | 'ko'

interface CompareText {
  breadcrumbHome: string
  breadcrumbCompare: string
  updatedDate: string
  h1: string
  h1Highlight: string
  introPara: string
  disclaimerLabel: string
  disclaimer: string
  disclaimerContact: string
  disclaimerContactSuffix: string

  jumpLinks: [string, string][]

  introH2: string
  introDefinition: string
  introPara1: string
  introPara2: string

  tableH2: string
  tablePara: string
  tableToolCol: string
  tableDispatchCol: string
  tableConsensusCol: string
  tableLocalCol: string
  tableApiCol: string
  tablePriceCol: string
  tableFootnote: string

  pqH2: string
  pqBestFor: string
  pqTags: string[]
  pqPara1: string
  pqPara2: string
  pqPara3: string
  pqH3: string
  pqH3Para: string

  poeH2: string
  poeBestFor: string
  poeTags: string[]
  poePara1: string
  poePara2: string
  poeH3: string
  poeH3Para: string

  lmH2: string
  lmBestFor: string
  lmTags: string[]
  lmPara1: string
  lmPara2: string
  lmH3: string
  lmH3Para: string

  omH2: string
  omBestFor: string
  omTags: string[]
  omPara1: string
  omPara2: string
  omH3: string
  omH3Para: string

  azH2: string
  azBestFor: string
  azTags: string[]
  azPara1: string
  azPara2: string
  azH3: string
  azH3Para: string

  chooseH2: string
  chooseItems: { label: string; desc: string; highlight?: boolean }[]

  faqH2: string
  faqs: { q: string; a: string }[]

  ctaH2: string
  ctaSubtext: string
  ctaButton: string

  atAGlanceH2: string
  atAGlanceItems: string[]
  seeAlsoH2: string
  seeAlsoLinks: { label: string; url: string }[]
  sourcesH2: string
  sourcesList: string[]
}

const content: Partial<Record<Lang, CompareText>> = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCompare: 'Compare',
    updatedDate: 'Updated March 2026',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: 'Multi-LLM Comparison Tools',
    introPara: 'The right multi-LLM tool depends on whether you need simultaneous dispatch to all models, automated consensus scoring, local LLM privacy via Ollama or LM Studio, or a simple side-by-side view. This page compares all five major options in 2026 — PromptQuorum, Poe, LM Arena, OpenMark, and AiZolo — with a feature table, per-tool breakdowns, and a decision guide.',
    disclaimerLabel: 'Accuracy notice:',
    disclaimer: ' Feature and pricing information was verified in March 2026 and is provided in good faith based on each product\'s public documentation: ',
    disclaimerContact: 'contact us',
    disclaimerContactSuffix: ' and we will correct it promptly. This comparison is produced by PromptQuorum and reflects our perspective as a participant in this market.',

    atAGlanceH2: 'At a Glance',
    atAGlanceItems: [
      'PromptQuorum: Best for consensus scoring + local LLM privacy via Ollama/LM Studio',
      'Poe: Best for simplicity + breadth (GPT-4o, Claude, Gemini, thousands of bots)',
      'LM Arena: Best for academic benchmarking + community-driven model rankings',
      'OpenMark: Best for API cost/quality analysis across 100+ models',
      'AiZolo: Best for affordable multi-model content workflows ($9.90/mo)'
    ],
    seeAlsoH2: 'See Also',
    seeAlsoLinks: [
      { label: 'How PromptQuorum Works', url: '/how-it-works' },
      { label: 'Prompt Engineering Best Practices', url: '/prompt-engineering' },
      { label: 'Local LLMs vs Cloud APIs', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: 'Features & Capabilities', url: '/features' }
    ],
    sourcesH2: 'Sources',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com'
    ],


    jumpLinks: [
      ['#comparison-table', 'Comparison table'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: 'What is a multi-LLM comparison tool?',
    introDefinition: 'A multi-LLM comparison tool sends the same prompt to multiple large language models simultaneously and displays the responses side by side, letting users evaluate differences in reasoning, accuracy, and style across AI systems — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, and others — without switching tabs or repeating input.',
    introPara1: 'No single AI model is authoritative for all tasks in 2026. GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro each have different training data, architectural biases, and reasoning strengths. A response that looks correct from one model may be contradicted, qualified, or significantly expanded by another.',
    introPara2: 'The five tools compared here represent the major approaches currently available: consumer platforms (Poe by Quora), community benchmarks (LM Arena), developer evaluation suites (OpenMark), unified multi-model workspaces (AiZolo), and consensus scoring platforms (PromptQuorum). Each serves a different workflow.',

    tableH2: 'What are the key differences between 5 multi-LLM tools?',
    tablePara: 'The table below compares all five tools across the features that matter most for professional multi-LLM workflows — simultaneous dispatch, consensus scoring, local LLM support, API key control, and pricing.',
    tableToolCol: 'Tool',
    tableDispatchCol: 'Simultaneous dispatch',
    tableConsensusCol: 'Consensus scoring',
    tableLocalCol: 'Local LLM',
    tableApiCol: 'API key control',
    tablePriceCol: 'Pricing',
    tableFootnote: '✓ Yes · ~ Partial · ✗ No · Based on public documentation, March 2026. Pricing and features change — verify with each vendor. This comparison is produced by PromptQuorum.',

    pqH2: 'What makes PromptQuorum different from competitors?',
    pqBestFor: 'Best for: developers & power users',
    pqTags: ['Beta · July 2026', 'promptquorum.com', 'API keys required', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum is the only tool among those reviewed that combines simultaneous prompt dispatch with automated consensus scoring.** You write one prompt, select your models — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, and locally-running models — and PromptQuorum dispatches to all of them in parallel. The Quorum Verdict then analyses where the models agree, where they diverge, and what those patterns mean for the reliability of the answer.',
    pqPara2: 'The defining feature is local LLM support. Via Ollama and LM Studio integration, PromptQuorum includes locally-running models — LLaMA 3.1 7B requires 8 GB RAM; 13B requires 16 GB — in the dispatch, so sensitive prompts never leave your machine. For legal professionals, healthcare workers, financial analysts, and developers working with proprietary code, this is not optional.',
    pqPara3: 'PromptQuorum requires users to bring their own API keys from OpenAI, Anthropic, Google, and Mistral. This keeps data under your control, costs transparent, and usage tied to your own commercial terms with each provider.',
    pqH3: 'Who should use PromptQuorum?',
    pqH3Para: 'PromptQuorum is designed for developers evaluating which model to integrate into a production pipeline, researchers who need cross-model validation of findings, and professionals whose work involves confidential information that cannot be sent to third-party cloud servers.',

    poeH2: 'Poe — casual multi-model access and bot exploration',
    poeBestFor: 'Best for: casual / consumer use',
    poeTags: ['poe.com', 'Free / $19.99/mo', 'iOS, Android, Web', 'Millions of users'],
    poePara1: '**Poe, built by Quora, is the largest multi-model AI platform with access to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok, and thousands of user-created bots from one interface.** It is the best choice for users who want broad access to AI models without managing API keys.',
    poePara2: 'Poe does not offer simultaneous dispatch — users switch between models or compare two at a time, rather than dispatching one prompt to all models in parallel. There is no consensus scoring or automated analysis of response agreement. All inference is cloud-based, making it unsuitable for privacy-sensitive work.',
    poeH3: 'Poe vs PromptQuorum: key differences',
    poeH3Para: 'Poe is better for casual exploration, bot discovery, and conversation without API key management. PromptQuorum is better for controlled prompt evaluation, consensus analysis, and local LLM workflows. They target fundamentally different use cases: Poe is a consumer platform; PromptQuorum is a professional evaluation tool.',

    lmH2: 'LM Arena — community-driven model benchmarking',
    lmBestFor: 'Best for: community benchmarking',
    lmTags: ['lmarena.ai', 'Free', 'Web only', 'Human voting system'],
    lmPara1: '**LM Arena (formerly Chatbot Arena) is the most-cited AI model leaderboard, using Elo ratings derived from millions of human preference votes.** Users submit prompts and vote on which of two anonymous models produced the better response.',
    lmPara2: 'LM Arena shows two models side by side and collects a human preference vote — it does not provide automated consensus analysis, does not support local LLMs, and does not allow selecting specific models in the primary comparison mode. It is a benchmarking platform, not a workflow tool.',
    lmH3: 'LM Arena vs PromptQuorum: key differences',
    lmH3Para: 'LM Arena is better for understanding aggregate human preference trends across the industry. PromptQuorum is better for evaluating your specific prompts across your chosen models with consistent, automated analysis. LM Arena tells you what the crowd prefers; PromptQuorum tells you what your prompt produces across every model you care about.',

    omH2: 'OpenMark — deterministic cost and quality benchmarking',
    omBestFor: 'Best for: cost/quality analysis',
    omTags: ['openmark.ai', 'Free tier / credits', '100+ models', 'Deterministic scoring'],
    omPara1: '**OpenMark is a developer-focused benchmarking tool that runs prompts against 100+ AI models simultaneously and scores results deterministically — the same prompt always produces the same ranked output.** It shows exactly what each model costs per prompt alongside quality scores.',
    omPara2: 'OpenMark is strong on breadth (100+ models) and cost transparency but does not produce a consensus verdict — it scores each model individually rather than analysing agreement patterns. It does not support local LLMs via Ollama or LM Studio.',
    omH3: 'OpenMark vs PromptQuorum: key differences',
    omH3Para: 'OpenMark answers "which single model performs best for this task and at what cost." PromptQuorum answers "how much do models agree on this prompt, and what does their disagreement mean?" Both require API keys; OpenMark supports 100+ models; PromptQuorum uniquely adds local LLM inference and consensus scoring.',

    azH2: 'AiZolo — multi-model workspace for content teams',
    azBestFor: 'Best for: content teams',
    azTags: ['aizolo.com', 'From $9.90/mo', 'GPT-4o, Claude, Gemini, Grok', 'Prompt library'],
    azPara1: '**AiZolo is a unified multi-model workspace designed for content creators and marketing teams, with simultaneous dispatch to GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and Grok side by side.** As of March 2026, plans started from $9.90/month — verify current pricing at aizolo.com.',
    azPara2: 'AiZolo does not offer consensus scoring — it displays responses side by side but leaves analysis to the user. It supports four cloud models only, with no local LLM option. It is a content production workflow tool, not a technical evaluation platform.',
    azH3: 'AiZolo vs PromptQuorum: key differences',
    azH3Para: 'AiZolo is better for content teams who need an affordable multi-model writing workspace for daily use. PromptQuorum is better for power users who need automated consensus analysis, local LLM privacy, and API-key-controlled access to a broader model set including open-weight systems.',

    chooseH2: 'Which multi-LLM tool should you use?',
    chooseItems: [
      { label: 'Choose PromptQuorum', desc: 'if you need consensus scoring across models, local LLM support for privacy-sensitive work, or a controlled evaluation workflow with your own API keys.', highlight: true },
      { label: 'Choose Poe', desc: 'if you want easy access to GPT-4o, Claude 4.6 Sonnet, Gemini, and thousands of bots for casual conversation and exploration without managing API keys.' },
      { label: 'Choose LM Arena', desc: 'if you want to contribute to or study community-driven model preference data and Elo rankings across the industry.' },
      { label: 'Choose OpenMark', desc: 'if you are a developer selecting a model for a production application and need deterministic quality scoring with transparent cost data across 100+ models.' },
      { label: 'Choose AiZolo', desc: 'if you are a content creator or marketing professional who needs an affordable, well-designed workspace for daily multi-model writing workflows.' },
    ],

    faqH2: 'Frequently asked questions',
    faqs: [
      {
        q: 'What is the best tool to compare the same prompt across multiple LLMs simultaneously?',
        a: 'PromptQuorum is the only tool reviewed here that combines simultaneous dispatch with automated consensus scoring. Poe, AiZolo, and OpenMark offer parallel responses, but none produces a Quorum Verdict — an automated analysis of where GPT-4o, Claude 4.6 Sonnet, and other models agree or diverge. For users who need more than visual side-by-side comparison, PromptQuorum is the purpose-built option. Feature information verified March 2026.',
      },
      {
        q: 'Which multi-LLM tool supports local LLMs like Ollama and LM Studio?',
        a: 'PromptQuorum is the only tool reviewed that supports local LLM inference via Ollama and LM Studio. Running models locally — LLaMA 3.1 7B needs 8 GB RAM, 13B needs 16 GB — means sensitive prompts never leave your machine. Poe, LM Arena, OpenMark, and AiZolo operate as cloud-only services based on their public documentation as of March 2026. Verify each tool\'s current capabilities directly with the vendor.',
      },
      {
        q: 'What is consensus scoring in the context of multi-LLM tools?',
        a: 'Consensus scoring is an automated analysis of how much independent AI models agree on a given prompt. PromptQuorum\'s Quorum Verdict scores agreement across all dispatched models — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and others — identifies specific points of divergence, and interprets what those divergences indicate about answer reliability. High consensus across independent models is a strong signal an answer is likely correct. Low consensus flags uncertainty that warrants further investigation or human review.',
      },
      {
        q: 'What is the difference between PromptQuorum and Poe or LM Arena?',
        a: 'Poe (by Quora) is a consumer chat platform for switching between models one at a time. LM Arena uses crowdsourced voting to rank individual model performance. PromptQuorum is unique: it dispatches to all selected models simultaneously and automatically analyzes where they agree or diverge through consensus scoring. Poe is built for conversation; LM Arena for benchmarking; PromptQuorum for controlled evaluation and hallucination detection.',
      },
      {
        q: 'Do I need my own API keys to use PromptQuorum?',
        a: 'Yes. PromptQuorum requires users to bring their own API keys from OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro), Mistral, and other providers. This design keeps your data under your control, costs transparent, and usage bound by your own commercial agreements with each provider. It also enables local LLM support via Ollama and LM Studio for fully private inference.',
      },
      {
        q: 'Is PromptQuorum free to use?',
        a: 'Yes. PromptQuorum is in free beta as of July 2026. All features—simultaneous dispatch, consensus scoring, hallucination detection, and export in multiple formats—are free. After beta, pricing will scale with your API usage on a pay-as-you-go model. You bring your own API keys, so you control costs directly with each provider.',
      },
    ],

    ctaH2: 'Try PromptQuorum today',
    ctaSubtext: 'PromptQuorum is in free public beta — download the desktop app now. No waitlist, no signup required.',
    ctaButton: 'Get the Beta →',
  },

  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCompare: 'Vergleich',
    updatedDate: 'Aktualisiert März 2026',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: 'Multi-LLM-Tools im Vergleich',
    introPara: 'Das richtige Multi-LLM-Tool hängt davon ab, ob du simultanes Dispatching an alle Modelle, automatisches Konsens-Scoring, lokale LLM-Privatsphäre über Ollama oder LM Studio oder eine einfache Nebeneinanderstellung benötigst. Diese Seite vergleicht alle fünf großen Optionen 2026 — PromptQuorum, Poe, LM Arena, OpenMark und AiZolo — mit einer Funktionsvergleichstabelle, detaillierten Toolbeschreibungen und einem Entscheidungsleitfaden.',
    disclaimerLabel: 'Hinweis zur Genauigkeit:',
    disclaimer: ' Funktions- und Preisinformationen wurden im März 2026 verifiziert und basieren auf der öffentlichen Dokumentation der jeweiligen Produkte zu diesem Zeitpunkt. Produkte ändern sich häufig — überprüfe die aktuellen Funktionen direkt beim jeweiligen Anbieter. Falls du glaubst, dass Informationen auf dieser Seite ungenau oder veraltet sind, ',
    disclaimerContact: 'kontaktiere uns',
    disclaimerContactSuffix: ' und wir korrigieren dies umgehend. Dieser Vergleich wird von PromptQuorum erstellt und spiegelt unsere Perspektive als Marktteilnehmer wider.',

    atAGlanceH2: 'Im Überblick',
    atAGlanceItems: [
      'PromptQuorum: Best for Konsens-Scoring + lokale LLM-Privatsphäre via Ollama/LM Studio',
      'Poe: Best for Einfachheit + Breite (GPT-4o, Claude, Gemini, tausende Bots)',
      'LM Arena: Best for akademisches Benchmarking + gemeinschaftsgesteuerte Modellrankings',
      'OpenMark: Best for API-Kosten-/Qualitätsanalyse über 100+ Modelle',
      'AiZolo: Best for günstige Multi-Modell-Content-Workflows ($9.90/Monat)'
    ],
    seeAlsoH2: 'Siehe auch',
    seeAlsoLinks: [
      { label: 'Wie PromptQuorum funktioniert', url: '/how-it-works' },
      { label: 'Best Practices für Prompt Engineering', url: '/prompt-engineering' },
      { label: 'Lokale LLMs vs. Cloud-APIs', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: 'Features & Funktionen', url: '/features' }
    ],
    sourcesH2: 'Quellen',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com'
    ],


    jumpLinks: [
      ['#comparison-table', 'Vergleichstabelle'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: 'Was ist ein Multi-LLM-Vergleichstool?',
    introDefinition: 'Ein Multi-LLM-Vergleichstool sendet denselben Prompt gleichzeitig an mehrere große Sprachmodelle und zeigt die Antworten nebeneinander an — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large und andere — damit Nutzer Unterschiede in Reasoning, Genauigkeit und Stil bewerten können, ohne Tabs zu wechseln oder Eingaben zu wiederholen.',
    introPara1: 'Im Jahr 2026 ist kein einzelnes KI-Modell für alle Aufgaben maßgeblich. GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro haben jeweils unterschiedliche Trainingsdaten, architektonische Schwerpunkte und Reasoning-Stärken. Eine Antwort, die von einem Modell korrekt erscheint, kann von einem anderen widerlegt, eingeschränkt oder erheblich erweitert werden.',
    introPara2: 'Die fünf hier verglichenen Tools repräsentieren die wichtigsten verfügbaren Ansätze: Consumer-Plattformen (Poe von Quora), Community-Benchmarks (LM Arena), Entwickler-Evaluierungs-Suites (OpenMark), einheitliche Multi-Modell-Arbeitsbereiche (AiZolo) und Konsens-Scoring-Plattformen (PromptQuorum). Jedes dient einem anderen Anwendungsfall.',

    tableH2: 'Welche sind die wichtigsten Unterschiede zwischen 5 Multi-LLM-Tools?',
    tablePara: 'Die folgende Tabelle vergleicht alle fünf Tools über die wichtigsten Funktionen für professionelle Multi-LLM-Workflows — simultanes Dispatching, Konsens-Scoring, lokale LLM-Unterstützung, API-Key-Kontrolle und Preisgestaltung.',
    tableToolCol: 'Tool',
    tableDispatchCol: 'Simultanes Dispatching',
    tableConsensusCol: 'Konsens-Scoring',
    tableLocalCol: 'Lokales LLM',
    tableApiCol: 'API-Key-Kontrolle',
    tablePriceCol: 'Preis',
    tableFootnote: '✓ Ja · ~ Teilweise · ✗ Nein · Basierend auf öffentlicher Dokumentation, März 2026. Preise und Funktionen ändern sich — beim jeweiligen Anbieter verifizieren. Dieser Vergleich wird von PromptQuorum erstellt.',

    pqH2: 'Was unterscheidet PromptQuorum von Konkurrenten?',
    pqBestFor: 'Beste Wahl für: Entwickler & Power-User',
    pqTags: ['Beta · July 2026', 'promptquorum.com', 'API-Keys erforderlich', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum ist das einzige Tool unter den hier geprüften, das simultanes Prompt-Dispatching mit automatischem Konsens-Scoring kombiniert.** Du schreibst einen Prompt, wählst deine Modelle — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large und lokal laufende Modelle — und PromptQuorum dispatcht an alle parallel. Das Quorum Verdict analysiert dann, wo die Modelle übereinstimmen, wo sie divergieren und was diese Muster für die Verlässlichkeit der Antwort bedeuten.',
    pqPara2: 'Das entscheidende Feature ist die lokale LLM-Unterstützung. Über Ollama- und LM Studio-Integration bindet PromptQuorum lokal laufende Modelle ein — LLaMA 3.1 7B benötigt 8 GB RAM, 13B 16 GB — sodass sensible Prompts das Gerät nie verlassen. Für Juristen, Mediziner, Finanzanalysten und Entwickler mit proprietärem Code ist das keine Option, sondern Pflicht.',
    pqPara3: 'PromptQuorum erfordert eigene API-Keys von OpenAI, Anthropic, Google und Mistral. Das hält Daten unter deiner Kontrolle, Kosten transparent und die Nutzung an deine eigenen Vertragskonditionen mit jedem Anbieter gebunden.',
    pqH3: 'Für wen ist PromptQuorum geeignet?',
    pqH3Para: 'PromptQuorum richtet sich an Entwickler, die bewerten, welches Modell in eine Produktionspipeline integriert werden soll, Forscher, die eine modellübergreifende Validierung von Ergebnissen benötigen, und Fachleute, deren Arbeit vertrauliche Informationen umfasst, die nicht an Drittserver übermittelt werden dürfen.',

    poeH2: 'Poe — Zugang zu mehreren Modellen für den Alltagsgebrauch',
    poeBestFor: 'Beste Wahl für: Gelegenheitsnutzer / Consumer',
    poeTags: ['poe.com', 'Kostenlos / $19,99/Monat', 'iOS, Android, Web', 'Millionen Nutzer'],
    poePara1: '**Poe, entwickelt von Quora, ist die größte Multi-Modell-KI-Plattform mit Zugang zu GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok und Tausenden nutzergenerierten Bots über eine Oberfläche.** Es ist die beste Wahl für Nutzer, die einfachen Zugang zu mehreren KI-Modellen ohne API-Key-Verwaltung suchen.',
    poePara2: 'Poe bietet kein echtes simultanes Dispatching — Nutzer wechseln zwischen Modellen oder vergleichen zwei gleichzeitig, anstatt einen Prompt parallel an alle zu senden. Es gibt kein Konsens-Scoring oder automatische Analyse der Antwortübereinstimmung. Alle Inferenz erfolgt cloudbasiert, was es für datenschutzsensible professionelle Anwendungsfälle ungeeignet macht.',
    poeH3: 'Poe vs PromptQuorum: Hauptunterschiede',
    poeH3Para: 'Poe ist besser für Gelegenheitsnutzung, Bot-Entdeckung und Unterhaltung ohne API-Key-Verwaltung. PromptQuorum ist besser für kontrollierte Prompt-Evaluation, Konsensanalyse und lokale LLM-Workflows. Sie adressieren grundlegend unterschiedliche Anwendungsfälle: Poe ist eine Consumer-Plattform; PromptQuorum ist ein professionelles Evaluierungstool.',

    lmH2: 'LM Arena — Community-gesteuertes Modell-Benchmarking',
    lmBestFor: 'Beste Wahl für: Community-Benchmarking',
    lmTags: ['lmarena.ai', 'Kostenlos', 'Nur Web', 'Human-Voting-System'],
    lmPara1: '**LM Arena (früher Chatbot Arena) ist das meistzitierte KI-Modell-Leaderboard mit Elo-Ratings aus Millionen menschlicher Präferenzabstimmungen.** Nutzer reichen Prompts ein und stimmen ab, welches von zwei anonymen Modellen die bessere Antwort lieferte.',
    lmPara2: 'LM Arena zeigt zwei Modelle nebeneinander und sammelt eine menschliche Präferenzabstimmung — es bietet keine automatische Konsensanalyse, unterstützt keine lokalen LLMs und erlaubt in der primären Vergleichsansicht keine Auswahl spezifischer Modelle. Es ist eine Benchmarking-Plattform, kein Workflow-Tool.',
    lmH3: 'LM Arena vs PromptQuorum: Hauptunterschiede',
    lmH3Para: 'LM Arena ist besser zum Verstehen aggregierter menschlicher Präferenztrends in der Branche. PromptQuorum ist besser für die Evaluierung spezifischer Prompts über gewählte Modelle mit konsistenter, automatisierter Analyse. LM Arena zeigt dir, was die Community bevorzugt; PromptQuorum zeigt dir, was dein Prompt bei jedem relevanten Modell produziert.',

    omH2: 'OpenMark — deterministisches Kosten- und Qualitäts-Benchmarking',
    omBestFor: 'Beste Wahl für: Kosten-/Qualitätsanalyse',
    omTags: ['openmark.ai', 'Kostenlose Stufe / Credits', '100+ Modelle', 'Deterministisches Scoring'],
    omPara1: '**OpenMark ist ein entwicklerorientiertes Benchmarking-Tool, das Prompts gleichzeitig gegen 100+ KI-Modelle ausführt und Ergebnisse deterministisch bewertet — derselbe Prompt erzeugt immer dieselbe Rangfolge.** Es zeigt genau, was jedes Modell pro Prompt kostet, neben Qualitätsbewertungen.',
    omPara2: 'OpenMark ist stark in Breite (100+ Modelle) und Kostentransparenz, produziert aber kein Konsensurteil — es bewertet jedes Modell einzeln statt Übereinstimmungsmuster zu analysieren. Lokale LLMs über Ollama oder LM Studio werden nicht unterstützt.',
    omH3: 'OpenMark vs PromptQuorum: Hauptunterschiede',
    omH3Para: 'OpenMark beantwortet "Welches einzelne Modell liefert die beste Leistung für diese Aufgabe und zu welchen Kosten?" PromptQuorum beantwortet "Wie stark stimmen die Modelle bei diesem Prompt überein, und was bedeutet ihre Abweichung?" Beide erfordern API-Keys; OpenMark unterstützt 100+ Modelle; PromptQuorum ergänzt einzigartig lokale LLM-Inferenz und Konsens-Scoring.',

    azH2: 'AiZolo — Multi-Modell-Arbeitsbereich für Content-Teams',
    azBestFor: 'Beste Wahl für: Content-Teams',
    azTags: ['aizolo.com', 'Ab $9,90/Monat', 'GPT-4o, Claude, Gemini, Grok', 'Prompt-Bibliothek'],
    azPara1: '**AiZolo ist ein einheitlicher Multi-Modell-Arbeitsbereich für Content-Creator und Marketing-Teams mit simultanem Dispatching an GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und Grok nebeneinander.** Stand März 2026 starteten die Preise ab $9,90/Monat — aktuelle Preise bei aizolo.com prüfen.',
    azPara2: 'AiZolo bietet kein Konsens-Scoring — es zeigt Antworten nebeneinander, überlässt die Analyse aber dem Nutzer. Es unterstützt nur vier Cloud-Modelle ohne lokale LLM-Option. Es ist ein Content-Produktions-Workflow-Tool, kein technisches Evaluierungstool.',
    azH3: 'AiZolo vs PromptQuorum: Hauptunterschiede',
    azH3Para: 'AiZolo ist besser für Content-Teams, die einen erschwinglichen Multi-Modell-Schreibarbeitsbereich für den täglichen Einsatz benötigen. PromptQuorum ist besser für Power-User, die automatische Konsensanalyse, lokale LLM-Privatsphäre und API-Key-kontrollierten Zugang zu einem breiteren Modell-Set einschließlich Open-Weight-Systemen benötigen.',

    chooseH2: 'Welches Multi-LLM-Tool solltest du verwenden?',
    chooseItems: [
      { label: 'Wähle PromptQuorum', desc: 'wenn du Konsens-Scoring über Modelle, lokale LLM-Unterstützung für datenschutzsensible Arbeit oder einen kontrollierten Evaluierungs-Workflow mit eigenen API-Keys benötigst.', highlight: true },
      { label: 'Wähle Poe', desc: 'wenn du einfachen Zugang zu GPT-4o, Claude 4.6 Sonnet, Gemini und Tausenden von Bots für Gelegenheitsgespräche ohne API-Key-Verwaltung möchtest.' },
      { label: 'Wähle LM Arena', desc: 'wenn du zu Community-gesteuerten Modellpräferenz-Daten und Elo-Rankings beitragen oder diese studieren möchtest.' },
      { label: 'Wähle OpenMark', desc: 'wenn du als Entwickler ein Modell für eine Produktionsanwendung auswählst und deterministisches Qualitäts-Scoring mit transparenten Kostendaten über 100+ Modelle benötigst.' },
      { label: 'Wähle AiZolo', desc: 'wenn du Content-Creator oder Marketing-Profi bist und einen günstigen, gut gestalteten Arbeitsbereich für tägliche Multi-Modell-Schreib-Workflows benötigst.' },
    ],

    faqH2: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Was ist das beste Tool, um denselben Prompt gleichzeitig über mehrere LLMs zu vergleichen?',
        a: 'PromptQuorum ist das einzige hier geprüfte Tool, das simultanes Dispatching mit automatischem Konsens-Scoring kombiniert. Poe, AiZolo und OpenMark bieten parallele Antworten, aber keines produziert ein Quorum Verdict — eine automatische Analyse, wo GPT-4o, Claude 4.6 Sonnet und andere Modelle übereinstimmen oder divergieren. Für Nutzer, die mehr als visuellen Nebeneinandervergleich benötigen, ist PromptQuorum die zweckgebaute Option. Feature-Informationen verifiziert März 2026.',
      },
      {
        q: 'Welches Multi-LLM-Tool unterstützt lokale LLMs wie Ollama und LM Studio?',
        a: 'PromptQuorum ist das einzige hier geprüfte Tool, das lokale LLM-Inferenz über Ollama und LM Studio unterstützt. Lokal laufende Modelle — LLaMA 3.1 7B benötigt 8 GB RAM, 13B 16 GB — bedeutet, dass sensible Prompts das Gerät nie verlassen. Poe, LM Arena, OpenMark und AiZolo operieren laut ihrer öffentlichen Dokumentation als Cloud-Only-Dienste (Stand März 2026). Aktuelle Funktionen direkt beim Anbieter prüfen.',
      },
      {
        q: 'Was ist Konsens-Scoring im Kontext von Multi-LLM-Tools?',
        a: 'Konsens-Scoring ist eine automatische Analyse, inwieweit unabhängige KI-Modelle bei einem gegebenen Prompt übereinstimmen. Das Quorum Verdict von PromptQuorum bewertet die Übereinstimmung über alle dispatched Modelle — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro und andere — identifiziert spezifische Divergenzpunkte und interpretiert, was diese Divergenzen über die Antwortzuverlässigkeit aussagen. Hoher Konsens über unabhängige Modelle ist ein starkes Signal für Korrektheit. Niedriger Konsens markiert Unsicherheit, die weitere Untersuchung oder menschliche Prüfung erfordert.',
      },
      {
        q: 'Wie unterscheidet sich PromptQuorum von Poe oder LM Arena?',
        a: 'Poe (von Quora) ist eine Consumer-Chat-Plattform zum Wechseln zwischen Modellen nacheinander. LM Arena nutzt Crowd-Voting zur Modell-Rangierung. PromptQuorum ist einzigartig: simultanes Dispatching an alle Modelle mit automatischer Analyse ihrer Übereinstimmung durch Konsens-Scoring. Poe ist für Konversation optimiert; LM Arena fürs Benchmarking; PromptQuorum für kontrollierte Evaluation und Halluzinations-Erkennung.',
      },
      {
        q: 'Brauche ich eigene API-Keys für PromptQuorum?',
        a: 'Ja. PromptQuorum erfordert eigene API-Keys von OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro), Mistral und anderen Anbietern. Dieses Design hält deine Daten unter deiner Kontrolle, Kosten transparent und die Nutzung an deine eigenen Vertragskonditionen mit jedem Anbieter gebunden. Es ermöglicht auch lokale LLM-Unterstützung über Ollama und LM Studio für vollständig private Inferenz.',
      },
      {
        q: 'Ist PromptQuorum kostenlos zu nutzen?',
        a: 'Ja. PromptQuorum ist ab July 2026 kostenlos im Beta. Alle Features – simultanes Dispatching, Konsens-Scoring, Halluzinations-Erkennung und Export in mehreren Formaten – sind kostenlos. Nach Beta wird die Preisgestaltung mit deiner API-Nutzung nach dem Pay-as-you-go-Modell skaliert. Du bringst deine eigenen API-Keys mit, daher kontrollierst du Kosten direkt mit jedem Anbieter.',
      },
    ],

    ctaH2: 'PromptQuorum jetzt ausprobieren',
    ctaSubtext: 'PromptQuorum befindet sich in der öffentlichen Beta — laden Sie die Desktop-App jetzt herunter. Keine Warteliste, keine Anmeldung nötig.',
    ctaButton: 'Beta herunterladen →',
  },

  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCompare: 'Comparer',
    updatedDate: 'Mis à jour mars 2026',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: 'Comparatif des outils multi-LLM',
    introPara: 'Le bon outil multi-LLM dépend de vos besoins : dispatch simultané vers tous les modèles, scoring de consensus automatisé, confidentialité LLM locale via Ollama ou LM Studio, ou simple affichage côte à côte. Cette page compare les cinq principales options en 2026 — PromptQuorum, Poe, LM Arena, OpenMark et AiZolo — avec un tableau de fonctionnalités, des présentations détaillées et un guide de décision.',
    disclaimerLabel: 'Note de précision :',
    disclaimer: ' Les informations sur les fonctionnalités et les tarifs ont été vérifiées en mars 2026 et sont fournies de bonne foi sur la base de la documentation publique de chaque produit à cette date. Les produits évoluent fréquemment — vérifiez les capacités actuelles directement auprès de chaque fournisseur avant de prendre une décision. Si vous pensez que des informations sur cette page sont inexactes ou périmées, ',
    disclaimerContact: 'contactez-nous',
    disclaimerContactSuffix: ' et nous les corrigerons rapidement. Cette comparaison est produite par PromptQuorum et reflète notre perspective en tant que participant à ce marché.',

    atAGlanceH2: 'Aperçu',
    atAGlanceItems: [
      'PromptQuorum: Meilleur pour le scoring de consensus + confidentialité LLM local via Ollama/LM Studio',
      'Poe: Meilleur pour la simplicité + la largeur (GPT-4o, Claude, Gemini, des milliers de bots)',
      'LM Arena: Meilleur pour les benchmarks académiques + classements de modèles pilotés par la communauté',
      'OpenMark: Meilleur pour l\'analyse des coûts/qualité API sur 100+ modèles',
      'AiZolo: Meilleur pour les workflows multi-modèles abordables ($9.90/mois)'
    ],
    seeAlsoH2: 'Voir aussi',
    seeAlsoLinks: [
      { label: 'Comment fonctionne PromptQuorum', url: '/how-it-works' },
      { label: 'Meilleures pratiques d\'ingénierie des invites', url: '/prompt-engineering' },
      { label: 'LLMs locaux vs APIs cloud', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: 'Fonctionnalités et capacités', url: '/features' }
    ],
    sourcesH2: 'Sources',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com'
    ],


    jumpLinks: [
      ['#comparison-table', 'Tableau comparatif'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: 'Qu\'est-ce qu\'un outil de comparaison multi-LLM ?',
    introDefinition: 'Un outil de comparaison multi-LLM envoie le même prompt à plusieurs grands modèles de langage simultanément et affiche les réponses côte à côte — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large et autres — permettant aux utilisateurs d\'évaluer les différences de raisonnement, de précision et de style entre les systèmes d\'IA sans changer d\'onglet ni répéter la saisie.',
    introPara1: 'En 2026, aucun modèle d\'IA n\'est autoritaire pour toutes les tâches. GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro ont chacun des données d\'entraînement, des biais architecturaux et des forces de raisonnement différents. Une réponse qui semble correcte d\'un modèle peut être contredite, nuancée ou considérablement enrichie par un autre.',
    introPara2: 'Les cinq outils comparés ici représentent les principales approches disponibles : plateformes grand public (Poe de Quora), benchmarks communautaires (LM Arena), suites d\'évaluation développeurs (OpenMark), espaces de travail multi-modèles unifiés (AiZolo) et plateformes de scoring de consensus (PromptQuorum). Chacun sert un flux de travail différent.',

    tableH2: 'Quelles sont les principales différences entre 5 outils multi-LLM ?',
    tablePara: 'Le tableau ci-dessous compare les cinq outils sur les fonctionnalités les plus importantes pour les flux de travail multi-LLM professionnels — dispatch simultané, scoring de consensus, support LLM local, contrôle des clés API et tarification.',
    tableToolCol: 'Outil',
    tableDispatchCol: 'Dispatch simultané',
    tableConsensusCol: 'Scoring de consensus',
    tableLocalCol: 'LLM local',
    tableApiCol: 'Contrôle clés API',
    tablePriceCol: 'Tarification',
    tableFootnote: '✓ Oui · ~ Partiel · ✗ Non · Basé sur la documentation publique, mars 2026. Les tarifs et fonctionnalités changent — vérifiez auprès de chaque fournisseur. Cette comparaison est produite par PromptQuorum.',

    pqH2: 'Qu\'est-ce qui différencie PromptQuorum de ses concurrents ?',
    pqBestFor: 'Idéal pour : développeurs et power users',
    pqTags: ['Bêta · avril 2026', 'promptquorum.com', 'Clés API requises', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum est le seul outil parmi ceux examinés qui combine le dispatch simultané de prompts avec le scoring de consensus automatisé.** Vous rédigez un prompt, sélectionnez vos modèles — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large et des modèles locaux — et PromptQuorum dispatche vers tous en parallèle. Le Quorum Verdict analyse ensuite où les modèles s\'accordent, où ils divergent et ce que ces schémas signifient pour la fiabilité de la réponse.',
    pqPara2: 'La fonctionnalité distinctive est le support LLM local. Via l\'intégration Ollama et LM Studio, PromptQuorum intègre des modèles fonctionnant localement — LLaMA 3.1 7B nécessite 8 Go de RAM, 13B nécessite 16 Go — de sorte que les prompts sensibles ne quittent jamais votre machine. Pour les professionnels juridiques, les soignants, les analystes financiers et les développeurs travaillant avec du code propriétaire, c\'est indispensable.',
    pqPara3: 'PromptQuorum exige que les utilisateurs apportent leurs propres clés API d\'OpenAI, Anthropic, Google et Mistral. Cela maintient vos données sous votre contrôle, les coûts transparents et l\'utilisation liée à vos propres conditions commerciales avec chaque fournisseur.',
    pqH3: 'Qui devrait utiliser PromptQuorum ?',
    pqH3Para: 'PromptQuorum est conçu pour les développeurs évaluant quel modèle intégrer dans un pipeline de production, les chercheurs qui ont besoin d\'une validation croisée de leurs résultats et les professionnels dont le travail implique des informations confidentielles qui ne peuvent pas être envoyées à des serveurs tiers.',

    poeH2: 'Poe — accès multi-modèles pour une utilisation quotidienne',
    poeBestFor: 'Idéal pour : utilisation décontractée / grand public',
    poeTags: ['poe.com', 'Gratuit / 19,99 $/mois', 'iOS, Android, Web', 'Millions d\'utilisateurs'],
    poePara1: '**Poe, développé par Quora, est la plus grande plateforme d\'IA multi-modèles avec accès à GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok et des milliers de bots créés par les utilisateurs depuis une interface unique.** C\'est le meilleur choix pour les utilisateurs qui souhaitent un accès facile à plusieurs modèles d\'IA sans gérer des clés API.',
    poePara2: 'Poe ne propose pas de dispatch simultané au sens strict — les utilisateurs changent de modèle ou comparent deux à la fois, plutôt que de dispatcher un prompt vers tous en parallèle. Il n\'y a pas de scoring de consensus ni d\'analyse automatisée des accords de réponse. Toute l\'inférence est basée sur le cloud, ce qui la rend inadaptée aux cas d\'usage professionnels sensibles à la confidentialité.',
    poeH3: 'Poe vs PromptQuorum : différences clés',
    poeH3Para: 'Poe est meilleur pour l\'exploration décontractée, la découverte de bots et la conversation sans gestion de clés API. PromptQuorum est meilleur pour l\'évaluation contrôlée des prompts, l\'analyse de consensus et les flux LLM locaux. Ils ciblent des cas d\'utilisation fondamentalement différents : Poe est une plateforme grand public ; PromptQuorum est un outil d\'évaluation professionnel.',

    lmH2: 'LM Arena — benchmarking de modèles piloté par la communauté',
    lmBestFor: 'Idéal pour : benchmarking communautaire',
    lmTags: ['lmarena.ai', 'Gratuit', 'Web uniquement', 'Système de vote humain'],
    lmPara1: '**LM Arena (anciennement Chatbot Arena) est le classement de modèles d\'IA le plus cité, avec des notes Elo dérivées de millions de votes de préférence humaine.** Les utilisateurs soumettent des prompts et votent pour quel des deux modèles anonymes a produit la meilleure réponse.',
    lmPara2: 'LM Arena affiche deux modèles côte à côte et recueille un vote de préférence humain — il ne fournit pas d\'analyse de consensus automatisée, ne prend pas en charge les LLM locaux et ne permet pas de sélectionner des modèles spécifiques dans le mode de comparaison principal. C\'est une plateforme de benchmarking, pas un outil de flux de travail.',
    lmH3: 'LM Arena vs PromptQuorum : différences clés',
    lmH3Para: 'LM Arena est meilleur pour comprendre les tendances agrégées des préférences humaines dans l\'industrie. PromptQuorum est meilleur pour évaluer vos prompts spécifiques sur vos modèles choisis avec une analyse cohérente et automatisée. LM Arena vous dit ce que la communauté préfère ; PromptQuorum vous dit ce que votre prompt produit sur chaque modèle qui vous intéresse.',

    omH2: 'OpenMark — benchmarking déterministe de coût et de qualité',
    omBestFor: 'Idéal pour : analyse coût/qualité',
    omTags: ['openmark.ai', 'Niveau gratuit / crédits', '100+ modèles', 'Scoring déterministe'],
    omPara1: '**OpenMark est un outil de benchmarking orienté développeurs qui exécute des prompts sur 100+ modèles d\'IA simultanément et évalue les résultats de manière déterministe — le même prompt produit toujours le même classement.** Il affiche exactement ce que chaque modèle coûte par prompt avec des scores de qualité.',
    omPara2: 'OpenMark est fort en termes de largeur (100+ modèles) et de transparence des coûts, mais ne produit pas de verdict de consensus — il évalue chaque modèle individuellement plutôt que d\'analyser les schémas d\'accord. Il ne prend pas en charge les LLM locaux via Ollama ou LM Studio.',
    omH3: 'OpenMark vs PromptQuorum : différences clés',
    omH3Para: 'OpenMark répond à la question "Quel modèle unique est le plus performant pour cette tâche et à quel coût ?" PromptQuorum répond à "Dans quelle mesure les modèles s\'accordent-ils sur ce prompt, et que signifie leur désaccord ?" Les deux nécessitent des clés API ; OpenMark prend en charge 100+ modèles ; PromptQuorum ajoute de manière unique l\'inférence LLM locale et le scoring de consensus.',

    azH2: 'AiZolo — espace de travail multi-modèles pour les équipes de contenu',
    azBestFor: 'Idéal pour : équipes de contenu',
    azTags: ['aizolo.com', 'À partir de 9,90 $/mois', 'GPT-4o, Claude, Gemini, Grok', 'Bibliothèque de prompts'],
    azPara1: '**AiZolo est un espace de travail multi-modèles unifié conçu pour les créateurs de contenu et les équipes marketing, avec dispatch simultané vers GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et Grok côte à côte.** En mars 2026, les plans démarraient à partir de 9,90 $/mois — vérifiez les tarifs actuels sur aizolo.com.',
    azPara2: 'AiZolo ne propose pas de scoring de consensus — il affiche les réponses côte à côte mais laisse l\'analyse à l\'utilisateur. Il prend en charge uniquement quatre modèles cloud, sans option LLM locale. C\'est un outil de flux de travail de production de contenu, pas une plateforme d\'évaluation technique.',
    azH3: 'AiZolo vs PromptQuorum : différences clés',
    azH3Para: 'AiZolo est meilleur pour les équipes de contenu qui ont besoin d\'un espace de travail multi-modèles abordable pour un usage quotidien. PromptQuorum est meilleur pour les power users qui ont besoin d\'analyse de consensus automatisée, de confidentialité LLM locale et d\'un accès contrôlé par clé API à un ensemble de modèles plus large incluant des systèmes open-weight.',

    chooseH2: 'Quel outil multi-LLM devriez-vous utiliser ?',
    chooseItems: [
      { label: 'Choisissez PromptQuorum', desc: 'si vous avez besoin de scoring de consensus entre modèles, de support LLM local pour les travaux sensibles à la confidentialité, ou d\'un flux d\'évaluation contrôlé avec vos propres clés API.', highlight: true },
      { label: 'Choisissez Poe', desc: 'si vous souhaitez un accès facile à GPT-4o, Claude 4.6 Sonnet, Gemini et des milliers de bots pour une conversation et une exploration décontractées sans gérer des clés API.' },
      { label: 'Choisissez LM Arena', desc: 'si vous souhaitez contribuer à ou étudier les données de préférence de modèles pilotées par la communauté et les classements Elo dans l\'industrie.' },
      { label: 'Choisissez OpenMark', desc: 'si vous êtes un développeur sélectionnant un modèle pour une application de production et avez besoin d\'un scoring de qualité déterministe avec des données de coût transparentes sur 100+ modèles.' },
      { label: 'Choisissez AiZolo', desc: 'si vous êtes un créateur de contenu ou un professionnel du marketing qui a besoin d\'un espace de travail abordable et bien conçu pour les flux de travail d\'écriture multi-modèles quotidiens.' },
    ],

    faqH2: 'Questions fréquemment posées',
    faqs: [
      {
        q: 'Quel est le meilleur outil pour comparer le même prompt sur plusieurs LLM simultanément ?',
        a: 'PromptQuorum est le seul outil examiné ici qui combine le dispatch simultané avec le scoring de consensus automatisé. Poe, AiZolo et OpenMark offrent des réponses parallèles, mais aucun ne produit de Quorum Verdict — une analyse automatisée où GPT-4o, Claude 4.6 Sonnet et d\'autres modèles s\'accordent ou divergent. Pour les utilisateurs qui ont besoin de plus qu\'une comparaison visuelle côte à côte, PromptQuorum est l\'option dédiée. Informations sur les fonctionnalités vérifiées mars 2026.',
      },
      {
        q: 'Quel outil multi-LLM prend en charge les LLM locaux comme Ollama et LM Studio ?',
        a: 'PromptQuorum est le seul outil examiné qui prend en charge l\'inférence LLM locale via Ollama et LM Studio. Les modèles fonctionnant localement — LLaMA 3.1 7B nécessite 8 Go de RAM, 13B nécessite 16 Go — signifient que les prompts sensibles ne quittent jamais votre machine. Poe, LM Arena, OpenMark et AiZolo fonctionnent comme des services cloud uniquement selon leur documentation publique de mars 2026. Vérifiez les capacités actuelles directement auprès du fournisseur.',
      },
      {
        q: 'Qu\'est-ce que le scoring de consensus dans le contexte des outils multi-LLM ?',
        a: 'Le scoring de consensus est une analyse automatisée du degré d\'accord des modèles d\'IA indépendants sur un prompt donné. Le Quorum Verdict de PromptQuorum évalue l\'accord sur tous les modèles dispatchés — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro et autres — identifie les points de divergence spécifiques et interprète ce que ces divergences indiquent sur la fiabilité de la réponse. Un consensus élevé entre modèles indépendants est un signal fort que la réponse est probablement correcte. Un faible consensus signale une incertitude qui justifie une investigation ou une révision humaine.',
      },
      {
        q: 'En quoi PromptQuorum est-il différent de Poe ou LM Arena ?',
        a: 'Poe (par Quora) est une plateforme de chat grand public pour basculer entre modèles un à un. LM Arena utilise le vote communautaire pour classer les modèles. PromptQuorum est unique : dispatch simultané vers tous les modèles avec analyse automatique via scoring de consensus. Poe optimisé pour la conversation ; LM Arena pour le benchmark ; PromptQuorum pour l\'évaluation contrôlée et la détection d\'hallucinations.',
      },
      {
        q: 'Ai-je besoin de mes propres clés API pour utiliser PromptQuorum ?',
        a: 'Oui. PromptQuorum exige que les utilisateurs apportent leurs propres clés API d\'OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro), Mistral et d\'autres fournisseurs. Ce choix de conception maintient vos données sous votre contrôle, vos coûts transparents et votre utilisation liée à vos propres accords commerciaux avec chaque fournisseur. Il permet également le support LLM local via Ollama et LM Studio pour une inférence entièrement privée.',
      },
      {
        q: 'PromptQuorum est-il gratuit à utiliser ?',
        a: 'Oui. PromptQuorum est en bêta gratuite depuis avril 2026. Toutes les fonctionnalités — dispatch simultané, scoring de consensus, détection d\'hallucinations et export multi-formats — sont gratuites. Après la bêta, la tarification sera à l\'usage selon le modèle pay-as-you-go. Vous apportez vos propres clés API, vous contrôlez donc directement les coûts avec chaque fournisseur.',
      },
    ],

    ctaH2: 'Essayez PromptQuorum dès aujourd\'hui',
    ctaSubtext: 'PromptQuorum est en bêta publique — téléchargez l\'application de bureau dès maintenant. Sans liste d\'attente, sans inscription.',
    ctaButton: 'Télécharger la bêta →',
  },

  ja: {
    breadcrumbHome: 'ホーム',
    breadcrumbCompare: '比較',
    updatedDate: '2026年3月更新',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: 'マルチLLMツール比較',
    introPara: '適切なマルチLLMツールは、全モデルへの同時ディスパッチ、自動コンセンサススコアリング、OllamaやLM Studio経由のローカルLLMプライバシー、シンプルな並列表示のどれが必要かによって異なります。このページでは、2026年の主要5つのオプション（PromptQuorum、Poe、LM Arena、OpenMark、AiZolo）を機能比較表、ツール別詳細、意思決定ガイドで比較します。',
    disclaimerLabel: '精度に関する注意事項：',
    disclaimer: ' 機能と価格情報は2026年3月に各製品の公開ドキュメントに基づいて確認されました。製品は頻繁に変更されます — 意思決定前に各ベンダーに直接現在の機能を確認してください。このページの情報が不正確または時代遅れだと思われる場合は、',
    disclaimerContact: 'お問い合わせ',
    disclaimerContactSuffix: 'ください。迅速に修正します。この比較はPromptQuorumが制作しており、市場参加者としての当社の視点を反映しています。',

    atAGlanceH2: '概要',
    atAGlanceItems: [
      'PromptQuorum: コンセンサススコアリング + Ollama/LM Studio経由のローカルLLMプライバシーに最適',
      'Poe: シンプルさ + 幅広さ（GPT-4o、Claude、Gemini、数千のボット）に最適',
      'LM Arena: 学術的ベンチマーキング + コミュニティ駆動のモデルランキングに最適',
      'OpenMark: 100+モデル間のAPI費用/品質分析に最適',
      'AiZolo: 手頃な価格のマルチモデルコンテンツワークフロー（$9.90/月）に最適'
    ],
    seeAlsoH2: '関連リンク',
    seeAlsoLinks: [
      { label: 'PromptQuorumの仕組み', url: '/how-it-works' },
      { label: 'プロンプトエンジニアリングのベストプラクティス', url: '/prompt-engineering' },
      { label: 'ローカルLLM vs クラウドAPI', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: '機能と能力', url: '/features' }
    ],
    sourcesH2: 'ソース',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com'
    ],


    jumpLinks: [
      ['#comparison-table', '比較表'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: 'マルチLLM比較ツールとは？',
    introDefinition: 'マルチLLM比較ツールは、同じプロンプトを複数の大規模言語モデルに同時に送信し、応答を並べて表示するツールです — GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Largeなど — タブを切り替えたり入力を繰り返したりせずに、AIシステム間の推論、精度、スタイルの違いを評価できます。',
    introPara1: '2026年、すべてのタスクで権威あるAIモデルは存在しません。GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proはそれぞれ異なるトレーニングデータ、アーキテクチャの偏り、推論の強みを持っています。1つのモデルで正しく見える回答が、別のモデルでは否定、制限、または大幅に拡張される場合があります。',
    introPara2: 'ここで比較する5つのツールは、現在利用可能な主要なアプローチを代表しています：コンシューマープラットフォーム（QuoraのPoe）、コミュニティベンチマーク（LM Arena）、開発者評価スイート（OpenMark）、統合マルチモデルワークスペース（AiZolo）、コンセンサススコアリングプラットフォーム（PromptQuorum）。それぞれ異なるワークフローに対応しています。',

    tableH2: '5つのマルチLLMツールの主な違いは何ですか？',
    tablePara: '以下の表は、プロフェッショナルなマルチLLMワークフローに最も重要な機能 — 同時ディスパッチ、コンセンサススコアリング、ローカルLLMサポート、APIキー制御、価格設定 — で5つのツールを比較しています。',
    tableToolCol: 'ツール',
    tableDispatchCol: '同時ディスパッチ',
    tableConsensusCol: 'コンセンサススコアリング',
    tableLocalCol: 'ローカルLLM',
    tableApiCol: 'APIキー制御',
    tablePriceCol: '価格',
    tableFootnote: '✓ あり · ~ 部分的 · ✗ なし · 2026年3月の公開ドキュメントに基づく。価格と機能は変更される場合があります — 各ベンダーに確認してください。この比較はPromptQuorumが制作しています。',

    pqH2: 'PromptQuorumは競合他社と何が異なりますか？',
    pqBestFor: '最適：開発者＆パワーユーザー',
    pqTags: ['ベータ · 2026年4月', 'promptquorum.com', 'APIキー必須', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorumは、同時プロンプトディスパッチと自動コンセンサススコアリングを組み合わせた、レビューされたツールの中で唯一のツールです。** プロンプトを入力し、モデルを選択（GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large、ローカル実行モデル）すると、PromptQuorumがすべてに並列ディスパッチします。その後、Quorum Verdictがモデルが同意する箇所、相違する箇所、およびそれらのパターンが回答の信頼性にとって何を意味するかを分析します。',
    pqPara2: 'ローカルLLMサポートが決定的な機能です。OllamaとLM Studioの統合により、PromptQuorumはローカルで実行されるモデル（LLaMA 3.1 7Bは8GB RAM、13Bは16GB必要）をディスパッチに含めるため、機密プロンプトがマシンから離れることはありません。法律専門家、医療従事者、金融アナリスト、独自コードを扱う開発者にとって、これは選択肢ではなく必須要件です。',
    pqPara3: 'PromptQuorumはOpenAI、Anthropic、Google、Mistralの独自APIキーを持ち込む必要があります。これにより、データはあなたの管理下に置かれ、コストは透明で、使用は各プロバイダーとの独自の商業条件に結び付けられます。',
    pqH3: 'PromptQuorumを使うべきユーザーは？',
    pqH3Para: 'PromptQuorumは、本番パイプラインに統合するモデルを評価する開発者、調査結果のクロスモデル検証が必要な研究者、サードパーティサーバーに送信できない機密情報を扱う専門家向けに設計されています。',

    poeH2: 'Poe — 日常的なマルチモデルアクセスとボット探索',
    poeBestFor: '最適：カジュアル/コンシューマー利用',
    poeTags: ['poe.com', '無料 / 月$19.99', 'iOS、Android、Web', '数百万ユーザー'],
    poePara1: '**Quoraが開発したPoeは、1つのインターフェースからGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Llama、Grok、数千のユーザー作成ボットにアクセスできる最大のマルチモデルAIプラットフォームです。** APIキーを管理せずに複数のAIモデルに簡単にアクセスしたいユーザーに最適です。',
    poePara2: 'Poeは真の意味での同時ディスパッチを提供しません — ユーザーはすべてのモデルに並列でプロンプトをディスパッチするのではなく、モデルを切り替えるか2つを比較します。コンセンサススコアリングや応答一致の自動分析もありません。すべての推論はクラウドベースで、プライバシーに敏感なプロフェッショナルなユースケースには適しません。',
    poeH3: 'Poe vs PromptQuorum：主な違い',
    poeH3Para: 'Poeは、APIキー管理なしのカジュアルな探索、ボット発見、会話に優れています。PromptQuorumは、制御されたプロンプト評価、コンセンサス分析、ローカルLLMワークフローに優れています。根本的に異なるユースケースを対象としています：PoeはコンシューマープラットフォームでありPromptQuorumはプロフェッショナル評価ツールです。',

    lmH2: 'LM Arena — コミュニティ主導のモデルベンチマーキング',
    lmBestFor: '最適：コミュニティベンチマーキング',
    lmTags: ['lmarena.ai', '無料', 'Webのみ', '人間投票システム'],
    lmPara1: '**LM Arena（旧Chatbot Arena）は、数百万の人間の好み投票から算出されたEloレーティングを持つ、最も引用されるAIモデルリーダーボードです。** ユーザーはプロンプトを送信し、2つの匿名モデルのどちらがより良い回答を生成したかに投票します。',
    lmPara2: 'LM Arenaは2つのモデルを並べて表示し、人間の好み投票を収集します — 自動コンセンサス分析を提供せず、ローカルLLMをサポートせず、主要比較モードでの特定モデルの選択も許可しません。ワークフローツールではなく、ベンチマーキングプラットフォームです。',
    lmH3: 'LM Arena vs PromptQuorum：主な違い',
    lmH3Para: 'LM Arenaは業界全体の集約された人間の好みトレンドを理解するのに優れています。PromptQuorumは選択したモデル全体でのプロンプトを一貫した自動分析で評価するのに優れています。LM Arenaはコミュニティが何を好むかを教えてくれます；PromptQuorumはあなたが気にするすべてのモデルでプロンプトが何を生成するかを教えてくれます。',

    omH2: 'OpenMark — 決定論的コストと品質ベンチマーキング',
    omBestFor: '最適：コスト/品質分析',
    omTags: ['openmark.ai', '無料ティア / クレジット', '100+モデル', '決定論的スコアリング'],
    omPara1: '**OpenMarkは、100以上のAIモデルに対してプロンプトを同時に実行し、決定論的に結果をスコアリングする開発者向けベンチマーキングツールです — 同じプロンプトは常に同じランク出力を生成します。** 品質スコアと並んで各モデルがプロンプトあたりの正確なコストを表示します。',
    omPara2: 'OpenMarkは幅広さ（100以上のモデル）とコスト透明性に強いですが、コンセンサス評定を生成しません — モデル間の合意パターンを分析するのではなく、各モデルを個別にスコアリングします。OllamaやLM Studio経由のローカルLLMはサポートしていません。',
    omH3: 'OpenMark vs PromptQuorum：主な違い',
    omH3Para: 'OpenMarkは「どの単一モデルがこのタスクに最も優れており、どのコストか？」という質問に答えます。PromptQuorumは「このプロンプトについてモデルはどれだけ同意しており、不一致は何を意味するか？」に答えます。どちらもAPIキーが必要；OpenMarkは100以上のモデルをサポート；PromptQuorumはローカルLLM推論とコンセンサススコアリングを独自に追加します。',

    azH2: 'AiZolo — コンテンツチーム向けマルチモデルワークスペース',
    azBestFor: '最適：コンテンツチーム',
    azTags: ['aizolo.com', '月$9.90から', 'GPT-4o、Claude、Gemini、Grok', 'プロンプトライブラリ'],
    azPara1: '**AiZoloは、GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Grokへの同時ディスパッチを並列表示するコンテンツクリエイターとマーケティングチーム向けの統合マルチモデルワークスペースです。** 2026年3月時点では、プランは月$9.90から開始していました — aizolo.comで現在の価格を確認してください。',
    azPara2: 'AiZoloはコンセンサススコアリングを提供しません — 応答を並べて表示しますが、分析はユーザーに任せます。ローカルLLMオプションなしで4つのクラウドモデルのみをサポートします。技術評価プラットフォームではなく、コンテンツ制作ワークフローツールです。',
    azH3: 'AiZolo vs PromptQuorum：主な違い',
    azH3Para: 'AiZoloは、日常的なマルチモデルライティングワークフローに手頃なワークスペースが必要なコンテンツチームに優れています。PromptQuorumは、自動コンセンサス分析、ローカルLLMプライバシー、オープンウェイトシステムを含む幅広いモデルセットへのAPIキー制御アクセスが必要なパワーユーザーに優れています。',

    chooseH2: 'どのマルチLLMツールを使うべきか？',
    chooseItems: [
      { label: 'PromptQuorumを選ぶ', desc: 'モデル間のコンセンサススコアリング、プライバシーに敏感な作業のためのローカルLLMサポート、または独自のAPIキーを使った制御された評価ワークフローが必要な場合。', highlight: true },
      { label: 'Poeを選ぶ', desc: 'APIキー管理なしで、GPT-4o、Claude 4.6 Sonnet、Gemini、数千のボットへのカジュアルな会話や探索のための簡単なアクセスを希望する場合。' },
      { label: 'LM Arenaを選ぶ', desc: '業界全体のコミュニティ主導のモデル好みデータとEloランキングに貢献または研究したい場合。' },
      { label: 'OpenMarkを選ぶ', desc: '本番アプリケーション向けにモデルを選択している開発者で、100以上のモデルにわたる透明なコストデータと決定論的な品質スコアリングが必要な場合。' },
      { label: 'AiZoloを選ぶ', desc: '日常的なマルチモデルライティングワークフローのために、手頃で使いやすいワークスペースが必要なコンテンツクリエイターまたはマーケティングプロフェッショナルの場合。' },
    ],

    faqH2: 'よくある質問',
    faqs: [
      {
        q: '複数のLLMで同じプロンプトを同時に比較するための最適なツールは何ですか？',
        a: 'PromptQuorumは、ここでレビューされたツールの中で、同時ディスパッチと自動コンセンサススコアリングを組み合わせた唯一のツールです。Poe、AiZolo、OpenMarkは並列回答を提供しますが、Quorum Verdict（GPT-4o、Claude 4.6 Sonnetなどのモデルが同意または相違する箇所の自動分析）を生成するものはありません。視覚的な並列比較以上のものが必要なユーザーには、PromptQuorumが専用ツールです。機能情報は2026年3月確認。',
      },
      {
        q: 'OllamaやLM StudioのようなローカルモデルをサポートするマルチLLMツールはどれですか？',
        a: 'PromptQuorumは、OllamaとLM Studio経由でローカルLLM推論をサポートする、レビューされた唯一のツールです。ローカル実行モデル（LLaMA 3.1 7Bは8GB RAM、13Bは16GB必要）は機密プロンプトがマシンから離れないことを意味します。Poe、LM Arena、OpenMark、AiZoloは2026年3月の公開ドキュメントによるとクラウドのみのサービスとして運営されています。各ツールの現在の機能はベンダーに直接確認してください。',
      },
      {
        q: 'マルチLLMツールにおけるコンセンサススコアリングとは何ですか？',
        a: 'コンセンサススコアリングは、独立したAIモデルが与えられたプロンプトにどれだけ同意するかの自動分析です。PromptQuorumのQuorum Verdictは、すべてのディスパッチされたモデル（GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proなど）にわたる合意をスコアリングし、特定の相違点を特定し、それらの相違が回答の信頼性について何を示すかを解釈します。独立したモデル間の高いコンセンサスは回答が正しい可能性が高いという強いシグナルです。低いコンセンサスは、さらなる調査または人間によるレビューを正当化する不確実性を示します。',
      },
      {
        q: 'PromptQuorumはPoeやLM Arenaとどう違いますか？',
        a: 'Poe（Quora製）は、順番にモデルを切り替えるためのコンシューマーチャットプラットフォーム。LM Arenaはクラウドボーティングでモデルをランク付けします。PromptQuorumはユニーク：すべてのモデルに同時ディスパッチし、コンセンサススコアリングで自動分析。Poeは会話向け；LM Arenaはベンチマーク向け；PromptQuorumは制御された評価と幻覚検出向けです。',
      },
      {
        q: 'PromptQuorumを使用するには独自のAPIキーが必要ですか？',
        a: 'はい。PromptQuorumは、OpenAI（GPT-4o）、Anthropic（Claude 4.6 Sonnet）、Google（Gemini 2.5 Pro）、Mistral、その他のプロバイダーからの独自APIキーを持ち込む必要があります。この設計により、データはあなたの管理下に置かれ、コストは透明で、使用は各プロバイダーとの独自の商業契約に結び付けられます。また、完全にプライベートな推論のためにOllamaとLM Studio経由のローカルLLMサポートも可能にします。',
      },
      {
        q: 'PromptQuorumは無料で使用できますか？',
        a: 'はい。PromptQuorumは2026年4月からフリーベータです。同時ディスパッチ、コンセンサススコアリング、幻覚検出、複数形式でのエクスポートなど、すべての機能が無料です。ベータ後は、使用量に応じた後払いモデルで価格が設定されます。独自のAPIキーを持ち込むため、各プロバイダーで直接コストをコントロールできます。',
      },
    ],

    ctaH2: '今すぐPromptQuorumを試す',
    ctaSubtext: 'PromptQuorumはパブリックベータ公開中です。今すぐデスクトップアプリをダウンロードできます。ウェイトリストや登録は不要です。',
    ctaButton: 'ベータ版をダウンロード →',
  },

  zh: {
    breadcrumbHome: '主页',
    breadcrumbCompare: '比较',
    updatedDate: '2026年3月更新',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: '多LLM工具对比',
    introPara: '合适的多LLM工具取决于您是否需要同时向所有模型分发提示、自动共识评分、通过Ollama或LM Studio的本地LLM隐私保护，或者简单的并排视图。本页面比较了2026年的五大主要选项——PromptQuorum、Poe、LM Arena、OpenMark和AiZolo——包含功能比较表、各工具详细介绍和决策指南。',
    disclaimerLabel: '准确性声明：',
    disclaimer: ' 功能和定价信息已于2026年3月根据各产品的公开文档进行了核实，并以诚信提供。产品经常变化——在做决定前，请直接向每个供应商核实当前功能。如果您认为本页面上的任何信息不准确或过时，请',
    disclaimerContact: '联系我们',
    disclaimerContactSuffix: '，我们将立即更正。本比较由PromptQuorum制作，反映了我们作为该市场参与者的视角。',

    atAGlanceH2: '一览',
    atAGlanceItems: [
      'PromptQuorum: 最适合共识评分 + Ollama/LM Studio本地LLM隐私保护',
      'Poe: 最适合简洁性 + 广泛性（GPT-4o、Claude、Gemini、数千个机器人）',
      'LM Arena: 最适合学术基准测试 + 社区驱动的模型排名',
      'OpenMark: 最适合100+模型的API成本/质量分析',
      'AiZolo: 最适合价格合理的多模型内容工作流（$9.90/月）'
    ],
    seeAlsoH2: '另见',
    seeAlsoLinks: [
      { label: 'PromptQuorum如何工作', url: '/how-it-works' },
      { label: '提示工程最佳实践', url: '/prompt-engineering' },
      { label: '本地LLM与云API对比', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: '功能与能力', url: '/features' }
    ],
    sourcesH2: '来源',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com'
    ],


    jumpLinks: [
      ['#comparison-table', '比较表'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: '什么是多LLM比较工具？',
    introDefinition: '多LLM比较工具将同一提示同时发送到多个大型语言模型，并将响应并排显示——GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large等——让用户无需切换标签或重复输入即可评估AI系统之间在推理、准确性和风格上的差异。',
    introPara1: '2026年，没有单一AI模型对所有任务都具有权威性。GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro各自具有不同的训练数据、架构偏差和推理优势。一个模型看起来正确的回答，可能被另一个模型否定、限定或大幅扩展。',
    introPara2: '这里比较的五个工具代表了目前可用的主要方法：消费者平台（Quora的Poe）、社区基准测试（LM Arena）、开发者评估套件（OpenMark）、统一多模型工作区（AiZolo）和共识评分平台（PromptQuorum）。每个工具服务于不同的工作流程。',

    tableH2: '功能比较：5款多LLM工具（2026年）',
    tablePara: '下表按对专业多LLM工作流程最重要的功能比较所有五款工具——同时分发、共识评分、本地LLM支持、API密钥控制和定价。',
    tableToolCol: '工具',
    tableDispatchCol: '同时分发',
    tableConsensusCol: '共识评分',
    tableLocalCol: '本地LLM',
    tableApiCol: 'API密钥控制',
    tablePriceCol: '定价',
    tableFootnote: '✓ 是 · ~ 部分 · ✗ 否 · 基于2026年3月的公开文档。价格和功能可能变化——请向各供应商核实。本比较由PromptQuorum制作。',

    pqH2: 'PromptQuorum — 共识评分 + 本地LLM隐私保护',
    pqBestFor: '最适合：开发者和高级用户',
    pqTags: ['测试版 · 2026年4月', 'promptquorum.com', '需要API密钥', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum是所审查工具中唯一将同时提示分发与自动共识评分相结合的工具。** 您编写一个提示，选择模型——GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Mistral Large和本地运行的模型——PromptQuorum并行分发给所有模型。然后Quorum Verdict分析模型在哪里同意、在哪里分歧，以及这些模式对答案可靠性意味着什么。',
    pqPara2: '决定性功能是本地LLM支持。通过Ollama和LM Studio集成，PromptQuorum在分发中包含本地运行的模型——LLaMA 3.1 7B需要8GB RAM，13B需要16GB——因此敏感提示永远不会离开您的机器。对于法律专业人员、医疗工作者、金融分析师和使用专有代码的开发者来说，这不是可选项，而是必需项。',
    pqPara3: 'PromptQuorum要求用户携带来自OpenAI、Anthropic、Google和Mistral的自己的API密钥。这使您的数据处于您的控制之下，成本透明，使用与您与每个提供商的商业条款绑定。',
    pqH3: '谁应该使用PromptQuorum？',
    pqH3Para: 'PromptQuorum专为以下用户设计：评估将哪个模型集成到生产流水线的开发者、需要跨模型验证研究结果的研究人员，以及工作涉及无法发送到第三方服务器的机密信息的专业人员。',

    poeH2: 'Poe — 日常多模型访问和机器人探索',
    poeBestFor: '最适合：休闲/消费者使用',
    poeTags: ['poe.com', '免费 / 月$19.99', 'iOS、Android、Web', '数百万用户'],
    poePara1: '**Poe由Quora开发，是最大的多模型AI平台，通过单一界面提供对GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro、Llama、Grok和数千个用户创建机器人的访问。** 对于想要轻松访问多个AI模型而无需管理API密钥的用户来说，这是最佳选择。',
    poePara2: 'Poe不提供真正意义上的同时分发——用户切换模型或一次比较两个，而不是并行向所有模型分发一个提示。没有共识评分或响应一致性的自动分析。所有推理都是基于云的，这使其不适合对隐私敏感的专业用例。',
    poeH3: 'Poe vs PromptQuorum：主要区别',
    poeH3Para: 'Poe更适合无需API密钥管理的休闲探索、机器人发现和对话。PromptQuorum更适合受控提示评估、共识分析和本地LLM工作流程。它们针对根本不同的用例：Poe是消费者平台；PromptQuorum是专业评估工具。',

    lmH2: 'LM Arena — 社区驱动的模型基准测试',
    lmBestFor: '最适合：社区基准测试',
    lmTags: ['lmarena.ai', '免费', '仅Web', '人类投票系统'],
    lmPara1: '**LM Arena（前身为Chatbot Arena）是最常被引用的AI模型排行榜，其Elo评分来源于数百万次人类偏好投票。** 用户提交提示并投票选出两个匿名模型中哪个产生了更好的回答。',
    lmPara2: 'LM Arena并排显示两个模型并收集人类偏好投票——它不提供自动共识分析，不支持本地LLM，也不允许用户在主要比较模式下选择特定模型。它是基准测试平台，不是工作流程工具。',
    lmH3: 'LM Arena vs PromptQuorum：主要区别',
    lmH3Para: 'LM Arena更适合了解整个行业的汇总人类偏好趋势。PromptQuorum更适合通过一致的自动化分析评估您在所选模型上的特定提示。LM Arena告诉您社区偏好什么；PromptQuorum告诉您您的提示在您关心的每个模型上产生什么。',

    omH2: 'OpenMark — 确定性成本和质量基准测试',
    omBestFor: '最适合：成本/质量分析',
    omTags: ['openmark.ai', '免费层 / 积分', '100+模型', '确定性评分'],
    omPara1: '**OpenMark是一款面向开发者的基准测试工具，可同时对100多个AI模型运行提示，并以确定性方式评分——相同的提示始终产生相同的排名输出。** 它显示每个模型每次提示的精确成本以及质量评分。',
    omPara2: 'OpenMark在广度（100+模型）和成本透明度方面表现出色，但不产生共识评定——它单独为每个模型评分，而不是分析跨模型的一致性模式。不支持通过Ollama或LM Studio的本地LLM。',
    omH3: 'OpenMark vs PromptQuorum：主要区别',
    omH3Para: 'OpenMark回答"哪个单一模型在此任务上表现最佳，成本是多少？" PromptQuorum回答"模型在此提示上的一致性如何，它们的分歧意味着什么？"两者都需要API密钥；OpenMark支持100+模型；PromptQuorum独特地添加了本地LLM推理和共识评分。',

    azH2: 'AiZolo — 内容团队的多模型工作区',
    azBestFor: '最适合：内容团队',
    azTags: ['aizolo.com', '月$9.90起', 'GPT-4o、Claude、Gemini、Grok', '提示库'],
    azPara1: '**AiZolo是专为内容创作者和营销团队设计的统一多模型工作区，可同时向GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro和Grok并排分发。** 截至2026年3月，计划从每月$9.90起——请在aizolo.com核实当前价格。',
    azPara2: 'AiZolo不提供共识评分——它并排显示响应，但将分析完全留给用户。仅支持四个云模型，没有本地LLM选项。这是内容制作工作流程工具，不是技术评估平台。',
    azH3: 'AiZolo vs PromptQuorum：主要区别',
    azH3Para: 'AiZolo更适合需要日常使用的经济实惠多模型写作工作区的内容团队。PromptQuorum更适合需要自动共识分析、本地LLM隐私保护以及API密钥控制访问包括开放权重系统在内的更广泛模型集的高级用户。',

    chooseH2: '应该使用哪个多LLM工具？',
    chooseItems: [
      { label: '选择PromptQuorum', desc: '如果您需要跨模型的共识评分、隐私敏感工作的本地LLM支持，或使用自己API密钥的受控评估工作流程。', highlight: true },
      { label: '选择Poe', desc: '如果您希望轻松访问GPT-4o、Claude 4.6 Sonnet、Gemini和数千个机器人，用于无需管理API密钥的休闲对话和探索。' },
      { label: '选择LM Arena', desc: '如果您想为整个行业的社区驱动模型偏好数据和Elo排名做贡献或进行研究。' },
      { label: '选择OpenMark', desc: '如果您是为生产应用程序选择模型的开发者，需要100多个模型的确定性质量评分和透明成本数据。' },
      { label: '选择AiZolo', desc: '如果您是内容创作者或营销专业人员，需要日常多模型写作工作流程的经济实惠、设计良好的工作区。' },
    ],

    faqH2: '常见问题',
    faqs: [
      {
        q: '同时跨多个LLM比较同一提示的最佳工具是什么？',
        a: 'PromptQuorum是这里审查的唯一将同时分发与自动共识评分相结合的工具。Poe、AiZolo和OpenMark提供并行响应，但没有一个能生成Quorum Verdict——GPT-4o、Claude 4.6 Sonnet和其他模型同意或分歧位置的自动分析。对于需要超越视觉并排比较的用户，PromptQuorum是专为此目的构建的选项。功能信息经2026年3月核实。',
      },
      {
        q: '哪款多LLM工具支持Ollama和LM Studio等本地模型？',
        a: 'PromptQuorum是审查的唯一通过Ollama和LM Studio支持本地LLM推理的工具。本地运行的模型——LLaMA 3.1 7B需要8GB RAM，13B需要16GB——意味着敏感提示永远不会离开您的机器。根据2026年3月的公开文档，Poe、LM Arena、OpenMark和AiZolo作为仅云服务运营。请直接向供应商核实每款工具的当前功能。',
      },
      {
        q: '多LLM工具中的共识评分是什么？',
        a: '共识评分是对独立AI模型在给定提示上同意程度的自动分析。PromptQuorum的Quorum Verdict对所有已分发模型（GPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Pro等）的一致性进行评分，识别特定分歧点，并解释这些分歧对答案可靠性的指示意义。多个独立模型之间的高共识是答案可能正确的强烈信号。低共识标志着需要进一步调查或人工审查的不确定性。',
      },
      {
        q: 'PromptQuorum与Poe或LM Arena有何不同？',
        a: 'Poe是一个消费者聊天平台，用于逐个切换模型。LM Arena使用社区投票对模型进行排名。PromptQuorum是唯一的：同时向所有模型分发，通过共识评分进行自动分析。Poe针对对话优化；LM Arena针对基准测试优化；PromptQuorum针对受控评估和幻觉检测优化。',
      },
      {
        q: '使用PromptQuorum需要我自己的API密钥吗？',
        a: '是的。PromptQuorum要求用户携带来自OpenAI（GPT-4o）、Anthropic（Claude 4.6 Sonnet）、Google（Gemini 2.5 Pro）、Mistral和其他提供商的自己的API密钥。这种设计使您的数据处于您的控制之下，成本透明，使用与您与每个提供商的商业协议绑定。它还支持通过Ollama和LM Studio的本地LLM，实现完全私密的推理。',
      },
      {
        q: 'PromptQuorum是免费使用的吗？',
        a: '是的。从2026年4月起，PromptQuorum处于免费测试版。所有功能——同时分发、共识评分、幻觉检测和多格式导出——都是免费的。测试版后，定价将采用按用量付费模式。您自带API密钥，因此可以直接通过每个供应商控制成本。',
      },
    ],

    ctaH2: '立即体验 PromptQuorum',
    ctaSubtext: 'PromptQuorum 现已开放公开测试——立即下载桌面应用。无需候补名单，无需注册。',
    ctaButton: '下载测试版 →',
  },

  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCompare: 'Comparar',
    updatedDate: 'Actualizado en marzo de 2026',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: 'Herramientas multi-LLM comparadas',
    introPara: 'La herramienta multi-LLM adecuada depende de si necesitas envío simultáneo a todos los modelos, puntuación de consenso automatizada, privacidad mediante LLM local con Ollama o LM Studio, o simplemente una vista comparativa en paralelo. Esta página compara las cinco principales opciones en 2026 — PromptQuorum, Poe, LM Arena, OpenMark y AiZolo — con una tabla de características, análisis por herramienta y una guía de decisión.',
    disclaimerLabel: 'Nota de precisión:',
    disclaimer: ' La información de características y precios fue verificada en marzo de 2026 y se proporciona de buena fe basándose en la documentación pública de cada producto. Los productos cambian con frecuencia — verifica las características actuales directamente con cada proveedor. Si crees que alguna información de esta página es inexacta u obsoleta, ',
    disclaimerContact: 'contáctanos',
    disclaimerContactSuffix: ' y lo corregiremos de inmediato. Esta comparación es producida por PromptQuorum y refleja nuestra perspectiva como participante en este mercado.',

    atAGlanceH2: 'De un vistazo',
    atAGlanceItems: [
      'PromptQuorum: Ideal para puntuación de consenso + privacidad local con Ollama/LM Studio',
      'Poe: Ideal para simplicidad + amplitud (GPT-4o, Claude, Gemini, miles de bots)',
      'LM Arena: Ideal para benchmarking académico + rankings de modelos impulsados por la comunidad',
      'OpenMark: Ideal para análisis de coste/calidad de API en más de 100 modelos',
      'AiZolo: Ideal para flujos de trabajo de contenido multi-modelo a bajo coste ($9,90/mes)'
    ],
    seeAlsoH2: 'Ver también',
    seeAlsoLinks: [
      { label: 'Cómo funciona PromptQuorum', url: '/how-it-works' },
      { label: 'Mejores prácticas de Prompt Engineering', url: '/prompt-engineering' },
      { label: 'LLMs locales vs APIs en la nube', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: 'Características y capacidades', url: '/features' }
    ],
    sourcesH2: 'Fuentes',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com'
    ],

    jumpLinks: [
      ['#comparison-table', 'Tabla comparativa'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: '¿Qué es una herramienta de comparación multi-LLM?',
    introDefinition: 'Una herramienta de comparación multi-LLM envía el mismo prompt a múltiples modelos de lenguaje grande de forma simultánea y muestra las respuestas en paralelo, permitiendo a los usuarios evaluar las diferencias en razonamiento, precisión y estilo entre sistemas de IA — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large y otros — sin cambiar pestañas ni repetir la entrada.',
    introPara1: 'Ningún modelo de IA individual es autoritativo para todas las tareas en 2026. GPT-4o, Claude 4.6 Sonnet y Gemini 2.5 Pro tienen datos de entrenamiento, sesgos arquitectónicos y fortalezas de razonamiento diferentes. Una respuesta que parece correcta de un modelo puede ser contradicha, matizada o significativamente ampliada por otro.',
    introPara2: 'Las cinco herramientas comparadas aquí representan los principales enfoques disponibles actualmente: plataformas de consumo (Poe by Quora), benchmarks comunitarios (LM Arena), suites de evaluación para desarrolladores (OpenMark), espacios de trabajo multi-modelo unificados (AiZolo) y plataformas de puntuación de consenso (PromptQuorum). Cada una sirve a un flujo de trabajo diferente.',

    tableH2: '¿Cuáles son las diferencias clave entre 5 herramientas multi-LLM?',
    tablePara: 'La siguiente tabla compara las cinco herramientas en las características más importantes para flujos de trabajo multi-LLM profesionales — envío simultáneo, puntuación de consenso, soporte de LLM local, control de clave de API y precios.',
    tableToolCol: 'Herramienta',
    tableDispatchCol: 'Envío simultáneo',
    tableConsensusCol: 'Puntuación de consenso',
    tableLocalCol: 'LLM local',
    tableApiCol: 'Control de clave API',
    tablePriceCol: 'Precio',
    tableFootnote: '✓ Sí · ~ Parcial · ✗ No · Basado en documentación pública, marzo 2026. Los precios y características cambian — verifica con cada proveedor. Esta comparación es producida por PromptQuorum.',

    pqH2: '¿Qué hace diferente a PromptQuorum de sus competidores?',
    pqBestFor: 'Ideal para: desarrolladores y usuarios avanzados',
    pqTags: ['Beta · Julio 2026', 'promptquorum.com', 'Claves API requeridas', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum es la única herramienta entre las revisadas que combina el envío simultáneo de prompts con la puntuación de consenso automatizada.** Escribes un prompt, seleccionas tus modelos — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large y modelos que se ejecutan localmente — y PromptQuorum los envía a todos en paralelo. El Quorum Verdict analiza entonces dónde los modelos coinciden, dónde divergen y qué significan esos patrones para la fiabilidad de la respuesta.',
    pqPara2: 'La característica definitoria es el soporte de LLM local. A través de la integración con Ollama y LM Studio, PromptQuorum incluye modelos que se ejecutan localmente — LLaMA 3.1 7B requiere 8 GB de RAM; 13B requiere 16 GB — en el envío, por lo que los prompts sensibles nunca salen de tu máquina. Para profesionales del derecho, trabajadores sanitarios, analistas financieros y desarrolladores que trabajan con código propietario, esto no es opcional.',
    pqPara3: 'PromptQuorum requiere que los usuarios traigan sus propias claves de API de OpenAI, Anthropic, Google y Mistral. Esto mantiene los datos bajo tu control, los costes transparentes y el uso vinculado a tus propios términos comerciales con cada proveedor.',
    pqH3: '¿Quién debería usar PromptQuorum?',
    pqH3Para: 'PromptQuorum está diseñado para desarrolladores que evalúan qué modelo integrar en un pipeline de producción, investigadores que necesitan validación cruzada de hallazgos entre modelos y profesionales cuyo trabajo involucra información confidencial que no puede enviarse a servidores en la nube de terceros.',

    poeH2: 'Poe — acceso casual a múltiples modelos y exploración de bots',
    poeBestFor: 'Ideal para: uso casual / consumidor',
    poeTags: ['poe.com', 'Gratis / $19,99/mes', 'iOS, Android, Web', 'Millones de usuarios'],
    poePara1: '**Poe, creado por Quora, es la plataforma multi-modelo de IA más grande con acceso a GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok y miles de bots creados por usuarios desde una sola interfaz.** Es la mejor opción para usuarios que quieren acceso amplio a modelos de IA sin gestionar claves de API.',
    poePara2: 'Poe no ofrece envío simultáneo — los usuarios cambian entre modelos o comparan dos a la vez, en lugar de enviar un prompt a todos los modelos en paralelo. No hay puntuación de consenso ni análisis automatizado de concordancia de respuestas. Todo el procesamiento es en la nube, lo que lo hace inadecuado para trabajo con información sensible.',
    poeH3: 'Poe vs PromptQuorum: diferencias clave',
    poeH3Para: 'Poe es mejor para la exploración casual, el descubrimiento de bots y la conversación sin gestión de claves de API. PromptQuorum es mejor para la evaluación controlada de prompts, el análisis de consenso y los flujos de trabajo con LLM local. Abordan casos de uso fundamentalmente diferentes: Poe es una plataforma de consumo; PromptQuorum es una herramienta de evaluación profesional.',

    lmH2: 'LM Arena — benchmarking de modelos impulsado por la comunidad',
    lmBestFor: 'Ideal para: benchmarking comunitario',
    lmTags: ['lmarena.ai', 'Gratis', 'Solo web', 'Sistema de votación humana'],
    lmPara1: '**LM Arena (antes Chatbot Arena) es el leaderboard de modelos de IA más citado, utilizando ratings Elo derivados de millones de votos de preferencia humana.** Los usuarios envían prompts y votan cuál de dos modelos anónimos produjo la mejor respuesta.',
    lmPara2: 'LM Arena muestra dos modelos en paralelo y recoge un voto de preferencia humana — no proporciona análisis de consenso automatizado, no admite LLMs locales y no permite seleccionar modelos específicos en el modo de comparación principal. Es una plataforma de benchmarking, no una herramienta de flujo de trabajo.',
    lmH3: 'LM Arena vs PromptQuorum: diferencias clave',
    lmH3Para: 'LM Arena es mejor para entender las tendencias agregadas de preferencia humana en la industria. PromptQuorum es mejor para evaluar tus prompts específicos en tus modelos elegidos con un análisis consistente y automatizado. LM Arena te dice qué prefiere la multitud; PromptQuorum te dice qué produce tu prompt en cada modelo que te importa.',

    omH2: 'OpenMark — benchmarking determinista de coste y calidad',
    omBestFor: 'Ideal para: análisis de coste/calidad',
    omTags: ['openmark.ai', 'Nivel gratuito / créditos', 'Más de 100 modelos', 'Puntuación determinista'],
    omPara1: '**OpenMark es una herramienta de benchmarking orientada a desarrolladores que ejecuta prompts contra más de 100 modelos de IA simultáneamente y puntúa los resultados de manera determinista — el mismo prompt siempre produce el mismo resultado clasificado.** Muestra exactamente cuánto cuesta cada modelo por prompt junto con las puntuaciones de calidad.',
    omPara2: 'OpenMark es sólido en amplitud (100+ modelos) y transparencia de costes, pero no produce un veredicto de consenso — puntúa cada modelo individualmente en lugar de analizar patrones de acuerdo. No admite LLMs locales a través de Ollama o LM Studio.',
    omH3: 'OpenMark vs PromptQuorum: diferencias clave',
    omH3Para: 'OpenMark responde "qué modelo individual funciona mejor para esta tarea y a qué coste". PromptQuorum responde "¿cuánto coinciden los modelos en este prompt y qué significa su desacuerdo?". Ambos requieren claves de API; OpenMark admite 100+ modelos; PromptQuorum añade de forma única inferencia de LLM local y puntuación de consenso.',

    azH2: 'AiZolo — espacio de trabajo multi-modelo para equipos de contenido',
    azBestFor: 'Ideal para: equipos de contenido',
    azTags: ['aizolo.com', 'Desde $9,90/mes', 'GPT-4o, Claude, Gemini, Grok', 'Biblioteca de prompts'],
    azPara1: '**AiZolo es un espacio de trabajo multi-modelo unificado diseñado para creadores de contenido y equipos de marketing, con envío simultáneo a GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro y Grok en paralelo.** A partir de marzo de 2026, los planes comenzaban desde $9,90/mes — verifica el precio actual en aizolo.com.',
    azPara2: 'AiZolo no ofrece puntuación de consenso — muestra las respuestas en paralelo pero deja el análisis al usuario. Admite solo cuatro modelos en la nube, sin opción de LLM local. Es una herramienta de flujo de trabajo de producción de contenido, no una plataforma de evaluación técnica.',
    azH3: 'AiZolo vs PromptQuorum: diferencias clave',
    azH3Para: 'AiZolo es mejor para equipos de contenido que necesitan un espacio de trabajo de escritura multi-modelo asequible para uso diario. PromptQuorum es mejor para usuarios avanzados que necesitan análisis de consenso automatizado, privacidad con LLM local y acceso controlado por clave de API a un conjunto más amplio de modelos, incluidos sistemas de código abierto.',

    chooseH2: '¿Qué herramienta multi-LLM deberías usar?',
    chooseItems: [
      { label: 'Elige PromptQuorum', desc: 'si necesitas puntuación de consenso entre modelos, soporte de LLM local para trabajo con información sensible o un flujo de evaluación controlado con tus propias claves de API.', highlight: true },
      { label: 'Elige Poe', desc: 'si quieres acceso fácil a GPT-4o, Claude 4.6 Sonnet, Gemini y miles de bots para conversación casual y exploración sin gestionar claves de API.' },
      { label: 'Elige LM Arena', desc: 'si quieres contribuir o estudiar los datos de preferencia de modelos impulsados por la comunidad y los rankings Elo de la industria.' },
      { label: 'Elige OpenMark', desc: 'si eres un desarrollador que selecciona un modelo para una aplicación de producción y necesitas puntuación de calidad determinista con datos de coste transparentes en más de 100 modelos.' },
      { label: 'Elige AiZolo', desc: 'si eres un creador de contenido o profesional de marketing que necesita un espacio de trabajo multi-modelo asequible y bien diseñado para flujos de trabajo de escritura diarios.' },
    ],

    faqH2: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Cuál es la mejor herramienta para comparar el mismo prompt en múltiples LLMs simultáneamente?',
        a: 'PromptQuorum es la única herramienta revisada aquí que combina el envío simultáneo con la puntuación de consenso automatizada. Poe, AiZolo y OpenMark ofrecen respuestas en paralelo, pero ninguno produce un Quorum Verdict — un análisis automatizado de dónde GPT-4o, Claude 4.6 Sonnet y otros modelos coinciden o divergen. Para usuarios que necesitan más que una comparación visual en paralelo, PromptQuorum es la opción diseñada específicamente para ello. Información de características verificada en marzo de 2026.',
      },
      {
        q: '¿Qué herramienta multi-LLM admite LLMs locales como Ollama y LM Studio?',
        a: 'PromptQuorum es la única herramienta revisada que admite inferencia de LLM local a través de Ollama y LM Studio. Ejecutar modelos localmente — LLaMA 3.1 7B necesita 8 GB de RAM, 13B necesita 16 GB — significa que los prompts sensibles nunca salen de tu máquina. Poe, LM Arena, OpenMark y AiZolo operan como servicios exclusivamente en la nube según su documentación pública a partir de marzo de 2026.',
      },
      {
        q: '¿Qué es la puntuación de consenso en el contexto de las herramientas multi-LLM?',
        a: 'La puntuación de consenso es un análisis automatizado de cuánto coinciden los modelos de IA independientes en un prompt dado. El Quorum Verdict de PromptQuorum puntúa el acuerdo entre todos los modelos enviados — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro y otros — identifica puntos específicos de divergencia e interpreta qué indican esas divergencias sobre la fiabilidad de la respuesta. Un alto consenso entre modelos independientes es una señal sólida de que una respuesta es probablemente correcta.',
      },
      {
        q: '¿Cuál es la diferencia entre PromptQuorum y Poe o LM Arena?',
        a: 'Poe (de Quora) es una plataforma de chat de consumo para cambiar entre modelos de uno en uno. LM Arena utiliza votación colectiva para clasificar el rendimiento individual de los modelos. PromptQuorum es único: envía a todos los modelos seleccionados simultáneamente y analiza automáticamente dónde coinciden o divergen mediante puntuación de consenso. Poe está creado para la conversación; LM Arena para el benchmarking; PromptQuorum para la evaluación controlada y la detección de alucinaciones.',
      },
      {
        q: '¿Necesito mis propias claves de API para usar PromptQuorum?',
        a: 'Sí. PromptQuorum requiere que los usuarios traigan sus propias claves de API de OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro), Mistral y otros proveedores. Este diseño mantiene tus datos bajo tu control, los costes transparentes y el uso vinculado a tus propios acuerdos comerciales con cada proveedor. También permite el soporte de LLM local a través de Ollama y LM Studio para inferencia completamente privada.',
      },
      {
        q: '¿Es gratuito PromptQuorum?',
        a: 'Sí. PromptQuorum está en beta gratuita a partir de julio de 2026. Todas las funciones — envío simultáneo, puntuación de consenso, detección de alucinaciones y exportación en múltiples formatos — son gratuitas. Después de la beta, el precio escalará según el uso de la API con un modelo de pago por uso. Tú traes tus propias claves de API, por lo que controlas los costes directamente con cada proveedor.',
      },
    ],

    ctaH2: 'Prueba PromptQuorum hoy',
    ctaSubtext: 'PromptQuorum está en beta pública — descarga la app de escritorio ahora. Sin lista de espera, sin registro.',
    ctaButton: 'Descargar la beta →',
  },
  pt: {
    breadcrumbHome: 'Início', // VERIFY
    breadcrumbCompare: 'Comparar', // VERIFY
    updatedDate: 'Atualizado em março de 2026', // VERIFY
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —', // VERIFY
    h1Highlight: 'Ferramentas multi-LLM comparadas', // VERIFY
    introPara: 'A ferramenta multi-LLM adequada depende de você precisar de envio simultâneo para todos os modelos, pontuação de consenso automatizada, privacidade por meio de LLM local com Ollama ou LM Studio, ou simplesmente uma visão comparativa lado a lado. Esta página compara as cinco principais opções em 2026 — PromptQuorum, Poe, LM Arena, OpenMark e AiZolo — com uma tabela de recursos, análise por ferramenta e um guia de decisão.', // VERIFY
    disclaimerLabel: 'Nota de precisão:', // VERIFY
    disclaimer: ' As informações de recursos e preços foram verificadas em março de 2026 e são fornecidas de boa-fé com base na documentação pública de cada produto. Os produtos mudam com frequência — verifique os recursos atuais diretamente com cada fornecedor. Se você acha que alguma informação desta página está incorreta ou desatualizada, ', // VERIFY
    disclaimerContact: 'entre em contato', // VERIFY
    disclaimerContactSuffix: ' e corrigiremos imediatamente. Esta comparação é produzida pela PromptQuorum e reflete nossa perspectiva como participante neste mercado.', // VERIFY

    atAGlanceH2: 'Em resumo', // VERIFY
    atAGlanceItems: [
      'PromptQuorum: Ideal para pontuação de consenso + privacidade local com Ollama/LM Studio', // VERIFY
      'Poe: Ideal para simplicidade + amplitude (GPT-4o, Claude, Gemini, milhares de bots)', // VERIFY
      'LM Arena: Ideal para benchmarking acadêmico + rankings de modelos impulsionados pela comunidade', // VERIFY
      'OpenMark: Ideal para análise de custo/qualidade de API em mais de 100 modelos', // VERIFY
      'AiZolo: Ideal para fluxos de trabalho de conteúdo multi-modelo a baixo custo ($9,90/mês)' // VERIFY
    ],
    seeAlsoH2: 'Veja também', // VERIFY
    seeAlsoLinks: [
      { label: 'Como funciona o PromptQuorum', url: '/how-it-works' }, // VERIFY
      { label: 'Melhores práticas de Prompt Engineering', url: '/prompt-engineering' }, // VERIFY
      { label: 'LLMs locais vs APIs na nuvem', url: '/local-llms/local-llms-vs-cloud-apis' }, // VERIFY
      { label: 'Recursos e capacidades', url: '/features' } // VERIFY
    ],
    sourcesH2: 'Fontes', // VERIFY
    sourcesList: [
      'PromptQuorum: promptquorum.com', // VERIFY
      'Poe: poe.com', // VERIFY
      'LM Arena: lmarena.ai', // VERIFY
      'OpenMark: openmark.ai', // VERIFY
      'AiZolo: aizolo.com' // VERIFY
    ],

    jumpLinks: [
      ['#comparison-table', 'Tabela comparativa'], // VERIFY
      ['#promptquorum', 'PromptQuorum'], // VERIFY
      ['#poe', 'Poe'], // VERIFY
      ['#lmarena', 'LM Arena'], // VERIFY
      ['#openmark', 'OpenMark'], // VERIFY
      ['#aizolo', 'AiZolo'], // VERIFY
      ['#faq', 'FAQ'], // VERIFY
    ],

    introH2: 'O que é uma ferramenta de comparação multi-LLM?', // VERIFY
    introDefinition: 'Uma ferramenta de comparação multi-LLM envia o mesmo prompt para vários modelos de linguagem grandes de forma simultânea e exibe as respostas lado a lado, permitindo que os usuários avaliem as diferenças em raciocínio, precisão e estilo entre sistemas de IA — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large e outros — sem trocar de aba nem repetir a entrada.', // VERIFY
    introPara1: 'Nenhum modelo de IA individual é autoritativo para todas as tarefas em 2026. GPT-4o, Claude 4.6 Sonnet e Gemini 2.5 Pro têm dados de treinamento, vieses arquiteturais e pontos fortes de raciocínio diferentes. Uma resposta que parece correta de um modelo pode ser contradita, nuançada ou significativamente ampliada por outro.', // VERIFY
    introPara2: 'As cinco ferramentas comparadas aqui representam as principais abordagens disponíveis atualmente: plataformas de consumo (Poe by Quora), benchmarks comunitários (LM Arena), suítes de avaliação para desenvolvedores (OpenMark), espaços de trabalho multi-modelo unificados (AiZolo) e plataformas de pontuação de consenso (PromptQuorum). Cada uma serve a um fluxo de trabalho diferente.', // VERIFY

    tableH2: 'Quais são as diferenças principais entre 5 ferramentas multi-LLM?', // VERIFY
    tablePara: 'A tabela a seguir compara as cinco ferramentas nos recursos mais importantes para fluxos de trabalho multi-LLM profissionais — envio simultâneo, pontuação de consenso, suporte a LLM local, controle de chave de API e preços.', // VERIFY
    tableToolCol: 'Ferramenta', // VERIFY
    tableDispatchCol: 'Envio simultâneo', // VERIFY
    tableConsensusCol: 'Pontuação de consenso', // VERIFY
    tableLocalCol: 'LLM local', // VERIFY
    tableApiCol: 'Controle de chave API', // VERIFY
    tablePriceCol: 'Preço', // VERIFY
    tableFootnote: '✓ Sim · ~ Parcial · ✗ Não · Baseado em documentação pública, março de 2026. Os preços e recursos mudam — verifique com cada fornecedor. Esta comparação é produzida pela PromptQuorum.', // VERIFY

    pqH2: 'O que torna o PromptQuorum diferente de seus concorrentes?', // VERIFY
    pqBestFor: 'Ideal para: desenvolvedores e usuários avançados', // VERIFY
    pqTags: ['Beta · Julho de 2026', 'promptquorum.com', 'Chaves API necessárias', 'Ollama + LM Studio'], // VERIFY
    pqPara1: '**O PromptQuorum é a única ferramenta entre as analisadas que combina o envio simultâneo de prompts com a pontuação de consenso automatizada.** Você escreve um prompt, seleciona seus modelos — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large e modelos que rodam localmente — e o PromptQuorum os envia a todos em paralelo. O Quorum Verdict então analisa onde os modelos concordam, onde divergem e o que esses padrões significam para a confiabilidade da resposta.', // VERIFY
    pqPara2: 'O recurso definidor é o suporte a LLM local. Por meio da integração com Ollama e LM Studio, o PromptQuorum inclui modelos que rodam localmente — o LLaMA 3.1 7B requer 8 GB de RAM; o 13B requer 16 GB — no envio, de modo que prompts sensíveis nunca saem da sua máquina. Para profissionais do direito, profissionais de saúde, analistas financeiros e desenvolvedores que trabalham com código proprietário, isso não é opcional.', // VERIFY
    pqPara3: 'O PromptQuorum exige que os usuários tragam suas próprias chaves de API da OpenAI, Anthropic, Google e Mistral. Isso mantém os dados sob seu controle, os custos transparentes e o uso vinculado aos seus próprios termos comerciais com cada fornecedor.', // VERIFY
    pqH3: 'Quem deveria usar o PromptQuorum?', // VERIFY
    pqH3Para: 'O PromptQuorum foi projetado para desenvolvedores que avaliam qual modelo integrar a um pipeline de produção, pesquisadores que precisam de validação cruzada de descobertas entre modelos e profissionais cujo trabalho envolve informações confidenciais que não podem ser enviadas a servidores na nuvem de terceiros.', // VERIFY

    poeH2: 'Poe — acesso casual a vários modelos e exploração de bots', // VERIFY
    poeBestFor: 'Ideal para: uso casual / consumidor', // VERIFY
    poeTags: ['poe.com', 'Grátis / $19,99/mês', 'iOS, Android, Web', 'Milhões de usuários'], // VERIFY
    poePara1: '**O Poe, criado pela Quora, é a maior plataforma multi-modelo de IA com acesso a GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Grok e milhares de bots criados por usuários a partir de uma única interface.** É a melhor opção para usuários que querem acesso amplo a modelos de IA sem gerenciar chaves de API.', // VERIFY
    poePara2: 'O Poe não oferece envio simultâneo — os usuários alternam entre modelos ou comparam dois de cada vez, em vez de enviar um prompt para todos os modelos em paralelo. Não há pontuação de consenso nem análise automatizada de concordância de respostas. Todo o processamento é na nuvem, o que o torna inadequado para trabalho com informações sensíveis.', // VERIFY
    poeH3: 'Poe vs PromptQuorum: diferenças principais', // VERIFY
    poeH3Para: 'O Poe é melhor para a exploração casual, a descoberta de bots e a conversa sem gerenciamento de chaves de API. O PromptQuorum é melhor para a avaliação controlada de prompts, a análise de consenso e os fluxos de trabalho com LLM local. Eles atendem a casos de uso fundamentalmente diferentes: o Poe é uma plataforma de consumo; o PromptQuorum é uma ferramenta de avaliação profissional.', // VERIFY

    lmH2: 'LM Arena — benchmarking de modelos impulsionado pela comunidade', // VERIFY
    lmBestFor: 'Ideal para: benchmarking comunitário', // VERIFY
    lmTags: ['lmarena.ai', 'Grátis', 'Somente web', 'Sistema de votação humana'], // VERIFY
    lmPara1: '**A LM Arena (antiga Chatbot Arena) é o leaderboard de modelos de IA mais citado, utilizando ratings Elo derivados de milhões de votos de preferência humana.** Os usuários enviam prompts e votam em qual de dois modelos anônimos produziu a melhor resposta.', // VERIFY
    lmPara2: 'A LM Arena exibe dois modelos lado a lado e coleta um voto de preferência humana — não fornece análise de consenso automatizada, não suporta LLMs locais e não permite selecionar modelos específicos no modo de comparação principal. É uma plataforma de benchmarking, não uma ferramenta de fluxo de trabalho.', // VERIFY
    lmH3: 'LM Arena vs PromptQuorum: diferenças principais', // VERIFY
    lmH3Para: 'A LM Arena é melhor para entender as tendências agregadas de preferência humana no setor. O PromptQuorum é melhor para avaliar seus prompts específicos em seus modelos escolhidos com uma análise consistente e automatizada. A LM Arena diz a você o que a multidão prefere; o PromptQuorum diz a você o que seu prompt produz em cada modelo que importa para você.', // VERIFY

    omH2: 'OpenMark — benchmarking determinístico de custo e qualidade', // VERIFY
    omBestFor: 'Ideal para: análise de custo/qualidade', // VERIFY
    omTags: ['openmark.ai', 'Nível gratuito / créditos', 'Mais de 100 modelos', 'Pontuação determinística'], // VERIFY
    omPara1: '**O OpenMark é uma ferramenta de benchmarking voltada para desenvolvedores que executa prompts contra mais de 100 modelos de IA simultaneamente e pontua os resultados de maneira determinística — o mesmo prompt sempre produz o mesmo resultado classificado.** Mostra exatamente quanto cada modelo custa por prompt junto com as pontuações de qualidade.', // VERIFY
    omPara2: 'O OpenMark é sólido em amplitude (mais de 100 modelos) e transparência de custos, mas não produz um veredito de consenso — pontua cada modelo individualmente em vez de analisar padrões de concordância. Não suporta LLMs locais por meio de Ollama ou LM Studio.', // VERIFY
    omH3: 'OpenMark vs PromptQuorum: diferenças principais', // VERIFY
    omH3Para: 'O OpenMark responde "qual modelo individual funciona melhor para esta tarefa e a que custo". O PromptQuorum responde "quanto os modelos concordam neste prompt e o que significa sua discordância?". Ambos exigem chaves de API; o OpenMark suporta mais de 100 modelos; o PromptQuorum adiciona de forma única a inferência de LLM local e a pontuação de consenso.', // VERIFY

    azH2: 'AiZolo — espaço de trabalho multi-modelo para equipes de conteúdo', // VERIFY
    azBestFor: 'Ideal para: equipes de conteúdo', // VERIFY
    azTags: ['aizolo.com', 'A partir de $9,90/mês', 'GPT-4o, Claude, Gemini, Grok', 'Biblioteca de prompts'], // VERIFY
    azPara1: '**O AiZolo é um espaço de trabalho multi-modelo unificado projetado para criadores de conteúdo e equipes de marketing, com envio simultâneo para GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro e Grok em paralelo.** A partir de março de 2026, os planos começavam a partir de $9,90/mês — verifique o preço atual em aizolo.com.', // VERIFY
    azPara2: 'O AiZolo não oferece pontuação de consenso — exibe as respostas lado a lado, mas deixa a análise para o usuário. Suporta apenas quatro modelos na nuvem, sem opção de LLM local. É uma ferramenta de fluxo de trabalho de produção de conteúdo, não uma plataforma de avaliação técnica.', // VERIFY
    azH3: 'AiZolo vs PromptQuorum: diferenças principais', // VERIFY
    azH3Para: 'O AiZolo é melhor para equipes de conteúdo que precisam de um espaço de trabalho de escrita multi-modelo acessível para uso diário. O PromptQuorum é melhor para usuários avançados que precisam de análise de consenso automatizada, privacidade com LLM local e acesso controlado por chave de API a um conjunto mais amplo de modelos, incluindo sistemas de código aberto.', // VERIFY

    chooseH2: 'Qual ferramenta multi-LLM você deveria usar?', // VERIFY
    chooseItems: [
      { label: 'Escolha o PromptQuorum', desc: 'se você precisa de pontuação de consenso entre modelos, suporte a LLM local para trabalho com informações sensíveis ou um fluxo de avaliação controlado com suas próprias chaves de API.', highlight: true }, // VERIFY
      { label: 'Escolha o Poe', desc: 'se você quer acesso fácil a GPT-4o, Claude 4.6 Sonnet, Gemini e milhares de bots para conversa casual e exploração sem gerenciar chaves de API.' }, // VERIFY
      { label: 'Escolha a LM Arena', desc: 'se você quer contribuir ou estudar os dados de preferência de modelos impulsionados pela comunidade e os rankings Elo do setor.' }, // VERIFY
      { label: 'Escolha o OpenMark', desc: 'se você é um desenvolvedor que seleciona um modelo para uma aplicação de produção e precisa de pontuação de qualidade determinística com dados de custo transparentes em mais de 100 modelos.' }, // VERIFY
      { label: 'Escolha o AiZolo', desc: 'se você é um criador de conteúdo ou profissional de marketing que precisa de um espaço de trabalho multi-modelo acessível e bem projetado para fluxos de trabalho de escrita diários.' }, // VERIFY
    ],

    faqH2: 'Perguntas frequentes', // VERIFY
    faqs: [
      {
        q: 'Qual é a melhor ferramenta para comparar o mesmo prompt em vários LLMs simultaneamente?', // VERIFY
        a: 'O PromptQuorum é a única ferramenta analisada aqui que combina o envio simultâneo com a pontuação de consenso automatizada. Poe, AiZolo e OpenMark oferecem respostas lado a lado, mas nenhum produz um Quorum Verdict — uma análise automatizada de onde GPT-4o, Claude 4.6 Sonnet e outros modelos concordam ou divergem. Para usuários que precisam de mais do que uma comparação visual lado a lado, o PromptQuorum é a opção projetada especificamente para isso. Informações de recursos verificadas em março de 2026.', // VERIFY
      },
      {
        q: 'Qual ferramenta multi-LLM suporta LLMs locais como Ollama e LM Studio?', // VERIFY
        a: 'O PromptQuorum é a única ferramenta analisada que suporta inferência de LLM local por meio de Ollama e LM Studio. Rodar modelos localmente — o LLaMA 3.1 7B precisa de 8 GB de RAM, o 13B precisa de 16 GB — significa que prompts sensíveis nunca saem da sua máquina. Poe, LM Arena, OpenMark e AiZolo operam como serviços exclusivamente na nuvem segundo sua documentação pública a partir de março de 2026.', // VERIFY
      },
      {
        q: 'O que é a pontuação de consenso no contexto das ferramentas multi-LLM?', // VERIFY
        a: 'A pontuação de consenso é uma análise automatizada de quanto os modelos de IA independentes concordam em um prompt dado. O Quorum Verdict do PromptQuorum pontua a concordância entre todos os modelos enviados — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro e outros — identifica pontos específicos de divergência e interpreta o que essas divergências indicam sobre a confiabilidade da resposta. Um alto consenso entre modelos independentes é um sinal sólido de que uma resposta é provavelmente correta.', // VERIFY
      },
      {
        q: 'Qual é a diferença entre o PromptQuorum e o Poe ou a LM Arena?', // VERIFY
        a: 'O Poe (da Quora) é uma plataforma de chat de consumo para alternar entre modelos um de cada vez. A LM Arena utiliza votação coletiva para classificar o desempenho individual dos modelos. O PromptQuorum é único: envia para todos os modelos selecionados simultaneamente e analisa automaticamente onde concordam ou divergem por meio da pontuação de consenso. O Poe foi criado para a conversa; a LM Arena para o benchmarking; o PromptQuorum para a avaliação controlada e a detecção de alucinações.', // VERIFY
      },
      {
        q: 'Preciso das minhas próprias chaves de API para usar o PromptQuorum?', // VERIFY
        a: 'Sim. O PromptQuorum exige que os usuários tragam suas próprias chaves de API da OpenAI (GPT-4o), Anthropic (Claude 4.6 Sonnet), Google (Gemini 2.5 Pro), Mistral e outros fornecedores. Esse design mantém seus dados sob seu controle, os custos transparentes e o uso vinculado aos seus próprios acordos comerciais com cada fornecedor. Também permite o suporte a LLM local por meio de Ollama e LM Studio para inferência totalmente privada.', // VERIFY
      },
      {
        q: 'O PromptQuorum é gratuito?', // VERIFY
        a: 'Sim. O PromptQuorum está em beta gratuito a partir de julho de 2026. Todas as funções — envio simultâneo, pontuação de consenso, detecção de alucinações e exportação em vários formatos — são gratuitas. Após a beta, o preço escalará conforme o uso da API com um modelo de pagamento por uso. Você traz suas próprias chaves de API, então controla os custos diretamente com cada fornecedor.', // VERIFY
      },
    ],

    ctaH2: 'Experimente o PromptQuorum hoje',
    ctaSubtext: 'O PromptQuorum está em beta pública — baixe o aplicativo desktop agora. Sem lista de espera, sem cadastro.',
    ctaButton: 'Baixar o Beta →',
  },

  ko: {
    breadcrumbHome: '홈',
    breadcrumbCompare: '도구 비교',
    updatedDate: '2026년 3월 업데이트',
    h1: 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo —',
    h1Highlight: '멀티 LLM 비교 도구',
    introPara: '올바른 멀티 LLM 도구는 모든 모델에 동시 전송이 필요한지, 자동화된 합의 점수가 필요한지, Ollama나 LM Studio를 통한 로컬 LLM 개인정보 보호가 필요한지, 아니면 단순한 나란히 비교가 필요한지에 따라 달라집니다. 이 페이지는 2026년 주요 5가지 옵션인 PromptQuorum, Poe, LM Arena, OpenMark, AiZolo를 기능 표, 도구별 분석, 결정 가이드와 함께 비교합니다.',
    disclaimerLabel: '정확성 안내:',
    disclaimer: ' 기능 및 가격 정보는 2026년 3월에 검증되었으며 각 제품의 공개 문서를 기반으로 선의로 제공됩니다. 제품은 자주 변경됩니다 — 각 공급업체에 직접 현재 기능을 확인하세요. 이 페이지의 정보가 부정확하거나 오래되었다고 생각되면 ',
    disclaimerContact: '문의하세요',
    disclaimerContactSuffix: ' 즉시 수정하겠습니다. 이 비교는 PromptQuorum이 제작했으며 시장 참여자로서 우리의 관점을 반영합니다.',

    atAGlanceH2: '한눈에 보기',
    atAGlanceItems: [
      'PromptQuorum: 합의 점수 + Ollama/LM Studio를 통한 로컬 LLM 개인정보 보호에 최적',
      'Poe: 간편함 + 폭넓은 지원(GPT-4o, Claude, Gemini, 수천 개의 봇)에 최적',
      'LM Arena: 학술 벤치마킹 + 커뮤니티 기반 모델 순위에 최적',
      'OpenMark: 100개 이상 모델의 API 비용/품질 분석에 최적',
      'AiZolo: 저렴한 멀티 모델 콘텐츠 워크플로우($9.90/월)에 최적',
    ],
    seeAlsoH2: '관련 페이지',
    seeAlsoLinks: [
      { label: 'PromptQuorum 작동 방식', url: '/how-it-works' },
      { label: '프롬프트 엔지니어링 모범 사례', url: '/prompt-engineering' },
      { label: '로컬 LLM vs 클라우드 API', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: '기능 및 역량', url: '/features' },
    ],
    sourcesH2: '출처',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com',
    ],

    jumpLinks: [
      ['#comparison-table', '비교 표'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'FAQ'],
    ],

    introH2: '멀티 LLM 비교 도구란 무엇인가요?',
    introDefinition: '멀티 LLM 비교 도구는 동일한 프롬프트를 여러 대형 언어 모델에 동시에 전송하고 응답을 병렬로 표시하여, 탭을 전환하거나 입력을 반복하지 않고 GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large 등 AI 시스템 간의 추론, 정확성, 스타일 차이를 평가할 수 있게 합니다.',
    introPara1: '2026년 현재 어떤 단일 AI 모델도 모든 작업에서 권위 있지 않습니다. GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro는 각각 서로 다른 학습 데이터, 아키텍처 편향, 추론 강점을 가지고 있습니다. 한 모델에서 정확해 보이는 답변이 다른 모델에서 반박되거나, 제한되거나, 크게 확장될 수 있습니다.',
    introPara2: '여기서 비교하는 5가지 도구는 현재 이용 가능한 주요 접근 방식을 대표합니다: 소비자 플랫폼(Poe by Quora), 커뮤니티 벤치마크(LM Arena), 개발자 평가 도구(OpenMark), 통합 멀티 모델 워크스페이스(AiZolo), 합의 점수 플랫폼(PromptQuorum). 각각은 서로 다른 워크플로우를 지원합니다.',

    tableH2: '5가지 멀티 LLM 도구의 주요 차이점은 무엇인가요?',
    tablePara: '다음 표는 전문적인 멀티 LLM 워크플로우에서 가장 중요한 기능인 동시 전송, 합의 점수, 로컬 LLM 지원, API 키 제어, 가격을 기준으로 5가지 도구를 비교합니다.',
    tableToolCol: '도구',
    tableDispatchCol: '동시 전송',
    tableConsensusCol: '합의 점수',
    tableLocalCol: '로컬 LLM',
    tableApiCol: 'API 키 제어',
    tablePriceCol: '가격',
    tableFootnote: '✓ 예 · ~ 부분 · ✗ 아니오 · 2026년 3월 공개 문서 기준. 가격 및 기능은 변경될 수 있습니다 — 각 공급업체에 직접 확인하세요. 이 비교는 PromptQuorum이 제작했습니다.',

    pqH2: 'PromptQuorum은 경쟁사와 무엇이 다른가요?',
    pqBestFor: '최적 대상: 개발자 및 파워 유저',
    pqTags: ['베타 · 2026년 7월', 'promptquorum.com', 'API 키 필요', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum은 검토된 도구 중 프롬프트 동시 전송과 자동 합의 점수를 결합한 유일한 도구입니다.** 프롬프트를 작성하고 모델을 선택하면 — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large 및 로컬에서 실행 중인 모델 — PromptQuorum이 모두에 병렬로 전송합니다. 그런 다음 Quorum Verdict가 모델들이 어디서 일치하는지, 어디서 다른지, 그리고 그 패턴이 응답 신뢰성에 무엇을 의미하는지 분석합니다.',
    pqPara2: '결정적 기능은 로컬 LLM 지원입니다. Ollama 및 LM Studio 통합을 통해 PromptQuorum은 로컬에서 실행 중인 모델(LLaMA 3.1 7B는 8GB RAM 필요, 13B는 16GB 필요)을 전송에 포함시켜 민감한 프롬프트가 절대 내 기기를 벗어나지 않습니다. 법률 전문가, 의료 종사자, 금융 분석가, 독점 코드를 다루는 개발자에게 이는 선택이 아닌 필수입니다.',
    pqPara3: 'PromptQuorum은 사용자가 OpenAI, Anthropic, Google, Mistral의 자체 API 키를 가져오도록 요구합니다. 이를 통해 데이터가 자신의 통제 하에 있고, 비용이 투명하게 유지되며, 사용이 각 공급업체와의 자체 상업적 조건에 연결됩니다.',
    pqH3: 'PromptQuorum을 사용해야 하는 사람은 누구인가요?',
    pqH3Para: 'PromptQuorum은 프로덕션 파이프라인에 통합할 모델을 평가하는 개발자, 모델 간 결과를 교차 검증해야 하는 연구자, 제3자 클라우드 서버로 전송할 수 없는 기밀 정보를 다루는 전문가를 위해 설계되었습니다.',

    poeH2: 'Poe — 여러 모델에 대한 일상적 접근과 봇 탐색',
    poeBestFor: '최적 대상: 일상/소비자 사용',
    poeTags: ['poe.com', '무료 / $19.99/월', 'iOS, Android, 웹', '수백만 사용자'],
    poePara1: '**Poe(Quora 소유)는 GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Mistral 및 수천 개의 커뮤니티 제작 봇에 접근할 수 있는 멀티 모델 채팅 플랫폼입니다.** 소비자 인터페이스는 API 키나 기술 설정 없이 여러 모델을 탐색하는 데 최적화되어 있습니다.',
    poePara2: 'Poe는 합의 점수를 제공하지 않습니다 — 모델 간 전환하거나 두 모델을 나란히 비교할 수 있지만 자동화된 일치 분석은 없습니다. 2026년 3월 공개 문서 기준으로 Ollama나 LM Studio를 통한 로컬 LLM 추론을 지원하지 않습니다.',
    poeH3: 'Poe vs PromptQuorum: 주요 차이점',
    poeH3Para: 'Poe는 접근성과 대화를 위한 소비자 플랫폼입니다. PromptQuorum은 프롬프트 평가와 합의 점수를 위한 전문 도구입니다. Poe는 일상적인 채팅과 봇 탐색에 더 적합합니다. PromptQuorum은 제어된 프롬프트 평가, 합의 분석, 로컬 LLM 워크플로우에 더 적합합니다.',

    lmH2: 'LM Arena — 학술 벤치마킹과 커뮤니티 모델 순위',
    lmBestFor: '최적 대상: 학술 벤치마킹',
    lmTags: ['lmarena.ai', '무료', '웹 전용', '인간 투표 시스템'],
    lmPara1: '**LM Arena(구 Chatbot Arena)는 수백만 건의 인간 선호도 투표에서 도출된 Elo 등급을 사용하는 가장 많이 인용되는 AI 모델 리더보드입니다.** 사용자가 프롬프트를 제출하고 두 익명 모델 중 더 나은 응답을 투표합니다.',
    lmPara2: 'LM Arena는 두 모델을 나란히 표시하고 인간 선호도 투표를 수집합니다 — 자동화된 합의 분석을 제공하지 않고, 로컬 LLM을 지원하지 않으며, 주요 비교 모드에서 특정 모델을 선택할 수 없습니다. 벤치마킹 플랫폼이지 워크플로우 도구가 아닙니다.',
    lmH3: 'LM Arena vs PromptQuorum: 주요 차이점',
    lmH3Para: 'LM Arena는 업계의 집계된 인간 선호도 트렌드를 이해하는 데 더 적합합니다. PromptQuorum은 선택한 모델 전반에 걸쳐 일관된 자동화된 분석으로 특정 프롬프트를 평가하는 데 더 적합합니다. LM Arena는 커뮤니티가 무엇을 선호하는지 알려주고, PromptQuorum은 중요한 각 모델에서 내 프롬프트가 무엇을 생성하는지 알려줍니다.',

    omH2: 'OpenMark — 결정론적 비용 및 품질 벤치마킹',
    omBestFor: '최적 대상: 비용/품질 분석',
    omTags: ['openmark.ai', '무료 티어 / 크레딧', '100개 이상 모델', '결정론적 점수'],
    omPara1: '**OpenMark는 100개 이상의 AI 모델에 대해 프롬프트를 동시에 실행하고 결과를 결정론적으로 점수를 매기는 개발자 지향 벤치마킹 도구입니다 — 동일한 프롬프트는 항상 동일한 순위 결과를 생성합니다.** 품질 점수와 함께 각 모델의 프롬프트당 비용을 정확하게 보여줍니다.',
    omPara2: 'OpenMark는 범위(100개 이상 모델)와 비용 투명성에서 탁월하지만 합의 판정을 생성하지 않습니다 — 일치 패턴을 분석하는 대신 각 모델을 개별적으로 점수 매깁니다. Ollama나 LM Studio를 통한 로컬 LLM을 지원하지 않습니다.',
    omH3: 'OpenMark vs PromptQuorum: 주요 차이점',
    omH3Para: 'OpenMark는 "이 작업에서 어느 개별 모델이 가장 잘 작동하며 비용은 얼마인가"에 답합니다. PromptQuorum은 "이 프롬프트에서 모델들이 얼마나 동의하며 불일치는 무엇을 의미하는가"에 답합니다. 둘 다 API 키가 필요합니다. OpenMark는 100개 이상의 모델을 지원하고, PromptQuorum은 로컬 LLM 추론과 합의 점수를 추가합니다.',

    azH2: 'AiZolo — 콘텐츠 팀을 위한 멀티 모델 워크스페이스',
    azBestFor: '최적 대상: 콘텐츠 팀',
    azTags: ['aizolo.com', '$9.90/월부터', 'GPT-4o, Claude, Gemini, Grok', '프롬프트 라이브러리'],
    azPara1: '**AiZolo는 콘텐츠 크리에이터와 마케팅 팀을 위해 설계된 통합 멀티 모델 워크스페이스로, GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Grok에 병렬로 동시 전송합니다.** 2026년 3월 기준으로 요금제는 $9.90/월부터 시작했습니다 — aizolo.com에서 현재 가격을 확인하세요.',
    azPara2: 'AiZolo는 합의 점수를 제공하지 않습니다 — 응답을 나란히 표시하지만 분석은 사용자에게 맡깁니다. 클라우드의 네 가지 모델만 지원하며 로컬 LLM 옵션은 없습니다. 기술 평가 플랫폼이 아닌 콘텐츠 제작 워크플로우 도구입니다.',
    azH3: 'AiZolo vs PromptQuorum: 주요 차이점',
    azH3Para: 'AiZolo는 일상적인 사용을 위한 저렴하고 잘 설계된 멀티 모델 글쓰기 워크스페이스가 필요한 콘텐츠 팀에 더 적합합니다. PromptQuorum은 자동화된 합의 분석, 로컬 LLM 개인정보 보호, 오픈 웨이트 시스템을 포함한 더 광범위한 모델 세트에 대한 API 키 제어 접근이 필요한 파워 유저에게 더 적합합니다.',

    chooseH2: '어떤 멀티 LLM 도구를 사용해야 할까요?',
    chooseItems: [
      { label: 'PromptQuorum 선택', desc: '모델 간 합의 점수, 민감한 작업을 위한 로컬 LLM 지원, 또는 자체 API 키를 사용하는 제어된 평가 워크플로우가 필요한 경우.', highlight: true },
      { label: 'Poe 선택', desc: 'API 키 관리 없이 일상적인 대화와 탐색을 위해 GPT-4o, Claude 4.6 Sonnet, Gemini 및 수천 개의 봇에 쉽게 접근하고 싶은 경우.' },
      { label: 'LM Arena 선택', desc: '커뮤니티 기반 모델 선호도 데이터와 업계 Elo 순위에 기여하거나 연구하고 싶은 경우.' },
      { label: 'OpenMark 선택', desc: '프로덕션 애플리케이션용 모델을 선택하는 개발자로서 100개 이상의 모델에 대한 투명한 비용 데이터와 함께 결정론적 품질 점수가 필요한 경우.' },
      { label: 'AiZolo 선택', desc: '일상적인 글쓰기 워크플로우를 위한 저렴하고 잘 설계된 멀티 모델 워크스페이스가 필요한 콘텐츠 크리에이터나 마케터인 경우.' },
    ],

    faqH2: '자주 묻는 질문',
    faqs: [
      {
        q: '동일한 프롬프트를 여러 LLM에 동시에 비교할 수 있는 최선의 도구는 무엇인가요?',
        a: 'PromptQuorum은 여기서 분석된 도구 중 동시 전송과 자동화된 합의 점수를 결합한 유일한 도구입니다. Poe, AiZolo, OpenMark는 나란히 응답을 제공하지만, GPT-4o, Claude 4.6 Sonnet 등의 모델이 어디서 동의하거나 다른지 자동으로 분석하는 Quorum Verdict를 생성하지 않습니다. 시각적 나란히 비교 이상이 필요한 사용자에게 PromptQuorum이 전용으로 설계된 옵션입니다. 기능 정보는 2026년 3월에 검증되었습니다.',
      },
      {
        q: 'Ollama나 LM Studio 같은 로컬 LLM을 지원하는 멀티 LLM 도구는 무엇인가요?',
        a: 'PromptQuorum은 분석된 도구 중 Ollama와 LM Studio를 통한 로컬 LLM 추론을 지원하는 유일한 도구입니다. 로컬에서 모델을 실행하면(LLaMA 3.1 7B는 8GB RAM, 13B는 16GB RAM 필요) 민감한 프롬프트가 절대 내 기기를 벗어나지 않습니다. Poe, LM Arena, OpenMark, AiZolo는 2026년 3월 공개 문서 기준으로 클라우드 전용 서비스로 운영됩니다. 결정을 내리기 전에 각 도구의 현재 기능을 해당 공급업체에 직접 확인하세요.',
      },
      {
        q: '멀티 LLM 도구 맥락에서 합의 점수란 무엇인가요?',
        a: '합의 점수는 독립적인 AI 모델들이 주어진 프롬프트에 얼마나 동의하는지에 대한 자동화된 분석입니다. PromptQuorum의 Quorum Verdict는 전송된 모든 모델(GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro 등) 간의 일치도를 점수로 매기고, 특정 불일치 지점을 식별하며, 그 불일치가 응답 신뢰성에 무엇을 나타내는지 해석합니다. 독립적인 여러 모델 간의 높은 합의는 답변이 정확할 가능성이 높다는 강력한 신호입니다.',
      },
      {
        q: 'PromptQuorum은 Poe나 LM Arena와 어떻게 다른가요?',
        a: 'Poe는 모델을 하나씩 전환하기 위한 소비자 채팅 플랫폼입니다. LM Arena는 커뮤니티 투표를 사용해 모델을 순위 매깁니다. PromptQuorum은 독자적입니다: 선택한 모든 모델에 동시 전송하고 합의 점수를 통해 어디서 동의하거나 다른지 자동으로 분석합니다. Poe는 대화에 최적화되어 있고, LM Arena는 벤치마킹에, PromptQuorum은 제어된 평가와 환각 감지에 최적화되어 있습니다.',
      },
      {
        q: 'PromptQuorum을 사용하려면 자신의 API 키가 필요한가요?',
        a: '네. PromptQuorum은 사용자가 OpenAI(GPT-4o), Anthropic(Claude 4.6 Sonnet), Google(Gemini 2.5 Pro), Mistral 및 기타 공급업체의 자체 API 키를 가져오도록 요구합니다. 이 설계는 데이터를 자신의 통제 하에 두고, 비용을 투명하게 유지하며, 사용을 각 공급업체와의 자체 상업적 계약에 연결합니다. 또한 완전히 프라이빗한 추론을 위해 Ollama와 LM Studio를 통한 로컬 LLM 지원도 가능합니다.',
      },
      {
        q: 'PromptQuorum은 무료인가요?',
        a: '네. PromptQuorum은 2026년 7월부터 무료 베타입니다. 모든 기능인 동시 전송, 합의 점수, 환각 감지, 다중 형식 내보내기가 무료입니다. 베타 이후에는 종량제 모델로 API 사용량에 따라 가격이 책정됩니다. 자체 API 키를 가져오므로 각 공급업체와 직접 비용을 제어합니다.',
      },
    ],

    ctaH2: '지금 PromptQuorum 사용해보기',
    ctaSubtext: 'PromptQuorum은 퍼블릭 베타 단계입니다 — 지금 데스크톱 앱을 다운로드하세요. 대기자 명단이나 가입이 필요하지 않습니다.',
    ctaButton: '베타 다운로드 →',
  },

  ar: {
    breadcrumbHome: 'الرئيسية',
    breadcrumbCompare: 'مقارنة الأدوات',
    updatedDate: 'محدَّث مارس 2026',
    h1: 'PromptQuorum مقابل Poe مقابل LM Arena مقابل OpenMark مقابل AiZolo —',
    h1Highlight: 'أدوات مقارنة نماذج الذكاء الاصطناعي',
    introPara: 'تعتمد الأداة المثلى لنماذج LLM المتعددة على ما إذا كنت بحاجة إلى إرسال متزامن لجميع النماذج، أو تقييم توافق آلي، أو خصوصية نموذج LLM محلي عبر Ollama أو LM Studio، أو مجرد عرض مقارن جنبًا إلى جنب. تقارن هذه الصفحة الخيارات الخمسة الرئيسية لعام 2026 — PromptQuorum وPoe وLM Arena وOpenMark وAiZolo — مع جدول ميزات وتحليل لكل أداة ودليل اتخاذ القرار.',
    disclaimerLabel: 'ملاحظة دقة:',
    disclaimer: ' تم التحقق من معلومات الميزات والأسعار في مارس 2026 وتُقدَّم بحسن نية استنادًا إلى الوثائق العامة لكل منتج. تتغير المنتجات كثيرًا — تحقق من الميزات الحالية مباشرة مع كل مزوّد. إذا رأيت أن أي معلومة في هذه الصفحة غير دقيقة أو قديمة، ',
    disclaimerContact: 'تواصل معنا',
    disclaimerContactSuffix: ' وسنصحح ذلك فورًا. هذه المقارنة من إعداد PromptQuorum وتعكس وجهة نظرنا بوصفنا مشاركًا في هذا السوق.',

    atAGlanceH2: 'نظرة سريعة',
    atAGlanceItems: [
      'PromptQuorum: الأفضل لتقييم التوافق + خصوصية LLM المحلي عبر Ollama/LM Studio',
      'Poe: الأفضل للبساطة + الاتساع (GPT-4o وClaude وGemini وآلاف البوتات)',
      'LM Arena: الأفضل للمعايرة الأكاديمية + تصنيفات النماذج بالمجتمع',
      'OpenMark: الأفضل لتحليل تكلفة/جودة API عبر أكثر من 100 نموذج',
      'AiZolo: الأفضل لسير عمل المحتوى متعدد النماذج بتكلفة معقولة ($9.90/شهر)',
    ],
    seeAlsoH2: 'انظر أيضًا',
    seeAlsoLinks: [
      { label: 'كيف يعمل PromptQuorum', url: '/how-it-works' },
      { label: 'أفضل ممارسات هندسة التعليمات', url: '/prompt-engineering' },
      { label: 'نماذج LLM المحلية مقابل واجهات API السحابية', url: '/local-llms/local-llms-vs-cloud-apis' },
      { label: 'الميزات والإمكانات', url: '/features' },
    ],
    sourcesH2: 'المصادر',
    sourcesList: [
      'PromptQuorum: promptquorum.com',
      'Poe: poe.com',
      'LM Arena: lmarena.ai',
      'OpenMark: openmark.ai',
      'AiZolo: aizolo.com',
    ],

    jumpLinks: [
      ['#comparison-table', 'جدول المقارنة'],
      ['#promptquorum', 'PromptQuorum'],
      ['#poe', 'Poe'],
      ['#lmarena', 'LM Arena'],
      ['#openmark', 'OpenMark'],
      ['#aizolo', 'AiZolo'],
      ['#faq', 'الأسئلة الشائعة'],
    ],

    introH2: 'ما هي أداة مقارنة نماذج LLM المتعددة؟',
    introDefinition: 'أداة مقارنة نماذج LLM المتعددة هي أداة ترسل الطلب ذاته إلى نماذج لغوية كبيرة متعددة في آنٍ واحد وتعرض الإجابات بالتوازي، مما يُتيح للمستخدمين تقييم الفروق في التفكير والدقة والأسلوب بين أنظمة الذكاء الاصطناعي — GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وMistral Large وغيرها — دون التبديل بين التبويبات أو تكرار الإدخال.',
    introPara1: 'لا يُعدّ أي نموذج ذكاء اصطناعي منفرد مرجعًا لجميع المهام في 2026. يمتلك كل من GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro بيانات تدريب وتحيزات معمارية ونقاط قوة استدلالية مختلفة. الإجابة التي تبدو صحيحة من نموذج قد تُدحض أو تُقيَّد أو تُوسَّع بشكل كبير من نموذج آخر.',
    introPara2: 'تمثّل الأدوات الخمس المقارنة هنا المناهج الرئيسية المتاحة حاليًا: المنصات الاستهلاكية (Poe من Quora)، والمعايير المجتمعية (LM Arena)، وأدوات تقييم المطورين (OpenMark)، وبيئات العمل متعددة النماذج الموحّدة (AiZolo)، ومنصات تقييم التوافق (PromptQuorum). كل منها يخدم سير عمل مختلف.',

    tableH2: 'ما الفروق الرئيسية بين الأدوات الخمس متعددة النماذج؟',
    tablePara: 'يقارن الجدول التالي الأدوات الخمس في أهم الميزات لسير العمل متعدد النماذج الاحترافي — الإرسال المتزامن، وتقييم التوافق، ودعم LLM المحلي، والتحكم في مفتاح API، والتسعير.',
    tableToolCol: 'الأداة',
    tableDispatchCol: 'إرسال متزامن',
    tableConsensusCol: 'تقييم التوافق',
    tableLocalCol: 'LLM محلي',
    tableApiCol: 'التحكم في مفتاح API',
    tablePriceCol: 'السعر',
    tableFootnote: '✓ نعم · ~ جزئي · ✗ لا · استنادًا إلى الوثائق العامة، مارس 2026. الأسعار والميزات قابلة للتغيير — تحقق مع كل مزوّد. هذه المقارنة من إعداد PromptQuorum.',

    pqH2: 'ما الذي يميّز PromptQuorum عن المنافسين؟',
    pqBestFor: 'الأفضل لـ: المطورين والمستخدمين المتقدمين',
    pqTags: ['بيتا · يوليو 2026', 'promptquorum.com', 'مفاتيح API مطلوبة', 'Ollama + LM Studio'],
    pqPara1: '**PromptQuorum هو الأداة الوحيدة بين المُراجَعة التي تجمع بين الإرسال المتزامن للطلبات وتقييم التوافق الآلي.** تكتب طلبًا، تختار نماذجك — GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وMistral Large والنماذج المحلية — ويُرسل PromptQuorum إلى الجميع بالتوازي. يحلّل Quorum Verdict بعد ذلك أين تتفق النماذج، وأين تختلف، وما الذي تعنيه هذه الأنماط لموثوقية الإجابة.',
    pqPara2: 'الميزة المحورية هي دعم LLM المحلي. من خلال التكامل مع Ollama وLM Studio، يُدرج PromptQuorum النماذج التي تعمل محليًا — يحتاج LLaMA 3.1 7B إلى 8 غيغابايت RAM، و13B إلى 16 غيغابايت — في عملية الإرسال، لذا لا تغادر الطلبات الحساسة جهازك أبدًا. بالنسبة للمحامين والعاملين في الرعاية الصحية والمحللين الماليين والمطورين العاملين على كود خاص، هذا ليس خيارًا بل ضرورة.',
    pqPara3: 'يشترط PromptQuorum على المستخدمين إحضار مفاتيح API الخاصة بهم من OpenAI وAnthropic وGoogle وMistral. يُبقي هذا البيانات تحت سيطرتك، والتكاليف شفافة، والاستخدام مرتبطًا بشروطك التجارية مع كل مزوّد.',
    pqH3: 'من يجب أن يستخدم PromptQuorum؟',
    pqH3Para: 'صُمِّم PromptQuorum للمطورين الذين يقيّمون النموذج المراد دمجه في خط إنتاج، والباحثين الذين يحتاجون إلى التحقق المتقاطع من النتائج عبر النماذج، والمهنيين الذين يتعاملون مع معلومات سرية لا يمكن إرسالها إلى خوادم سحابية خارجية.',

    poeH2: 'Poe — وصول يومي لنماذج متعددة واستكشاف البوتات',
    poeBestFor: 'الأفضل لـ: الاستخدام اليومي / الاستهلاكي',
    poeTags: ['poe.com', 'مجاني / $19.99/شهر', 'iOS وAndroid والويب', 'ملايين المستخدمين'],
    poePara1: '**Poe (المملوك لـ Quora) هو منصة دردشة متعددة النماذج تتيح الوصول إلى GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وLlama وMistral وآلاف البوتات التي أنشأها المجتمع.** الواجهة الاستهلاكية مُحسَّنة لاستكشاف نماذج متعددة دون مفاتيح API أو إعداد تقني.',
    poePara2: 'لا يوفّر Poe تقييم التوافق — يمكنك التبديل بين النماذج أو مقارنة اثنين جنبًا إلى جنب، لكن دون تحليل آلي للتطابق. استنادًا إلى الوثائق العامة في مارس 2026، لا يدعم الاستدلال المحلي عبر Ollama أو LM Studio.',
    poeH3: 'Poe مقابل PromptQuorum: الفروق الرئيسية',
    poeH3Para: 'Poe منصة استهلاكية تركّز على الوصول والمحادثة. PromptQuorum أداة احترافية تركّز على تقييم الطلبات وتقييم التوافق. Poe أنسب للدردشة اليومية واستكشاف البوتات. PromptQuorum أنسب لتقييم الطلبات المضبوط وتحليل التوافق وسير عمل LLM المحلي.',

    lmH2: 'LM Arena — المعايرة الأكاديمية وتصنيفات النماذج المجتمعية',
    lmBestFor: 'الأفضل لـ: المعايرة الأكاديمية',
    lmTags: ['lmarena.ai', 'مجاني', 'ويب فقط', 'نظام التصويت البشري'],
    lmPara1: '**LM Arena (المعروفة سابقًا بـ Chatbot Arena) هي لوحة تصنيف نماذج الذكاء الاصطناعي الأكثر استشهادًا، وتستخدم تقييمات Elo مستمدة من ملايين أصوات التفضيل البشري.** يُرسل المستخدمون طلبات ويصوّتون على أيٍّ من النموذجين المجهولَين أنتج إجابة أفضل.',
    lmPara2: 'تعرض LM Arena نموذجين جنبًا إلى جنب وتجمع صوت تفضيل بشري واحد — لا تقدّم تحليل توافق آليًا، ولا تدعم نماذج LLM المحلية، ولا تتيح اختيار نماذج بعينها في وضع المقارنة الرئيسي. هي منصة معايرة وليست أداة سير عمل.',
    lmH3: 'LM Arena مقابل PromptQuorum: الفروق الرئيسية',
    lmH3Para: 'LM Arena أنسب لفهم اتجاهات التفضيل البشري المُجمَّعة في الصناعة. PromptQuorum أنسب لتقييم طلباتك المحددة عبر النماذج التي اخترتها بتحليل متسق وآلي. LM Arena تخبرك بما يُفضّله المجتمع؛ PromptQuorum يخبرك بما ينتجه طلبك في كل نموذج يهمّك.',

    omH2: 'OpenMark — معايرة تكلفة وجودة حتمية',
    omBestFor: 'الأفضل لـ: تحليل التكلفة/الجودة',
    omTags: ['openmark.ai', 'طبقة مجانية / رصيد', 'أكثر من 100 نموذج', 'تقييم حتمي'],
    omPara1: '**OpenMark أداة معايرة موجّهة للمطورين تُشغّل الطلبات على أكثر من 100 نموذج ذكاء اصطناعي في آنٍ واحد وتُقيّم النتائج بصورة حتمية — الطلب ذاته يُنتج دائمًا الترتيب ذاته.** تُظهر بدقة تكلفة كل نموذج لكل طلب إلى جانب درجات الجودة.',
    omPara2: 'يتميّز OpenMark بالاتساع (أكثر من 100 نموذج) وشفافية التكاليف، لكنه لا يُنتج حكمًا بالتوافق — يُقيّم كل نموذج منفردًا بدلًا من تحليل أنماط التطابق. لا يدعم نماذج LLM المحلية عبر Ollama أو LM Studio.',
    omH3: 'OpenMark مقابل PromptQuorum: الفروق الرئيسية',
    omH3Para: 'يُجيب OpenMark على: "أيّ نموذج منفرد يؤدي أفضل لهذه المهمة وبأي تكلفة؟". يُجيب PromptQuorum على: "إلى أي مدى تتفق النماذج على هذا الطلب وماذا يعني اختلافها؟". كلاهما يتطلب مفاتيح API؛ يدعم OpenMark أكثر من 100 نموذج؛ يُضيف PromptQuorum الاستدلال المحلي وتقييم التوافق.',

    azH2: 'AiZolo — بيئة عمل متعددة النماذج لفرق المحتوى',
    azBestFor: 'الأفضل لـ: فرق المحتوى',
    azTags: ['aizolo.com', 'يبدأ من $9.90/شهر', 'GPT-4o وClaude وGemini وGrok', 'مكتبة الطلبات'],
    azPara1: '**AiZolo بيئة عمل متعددة النماذج موحّدة مُصمَّمة لصنّاع المحتوى وفرق التسويق، مع إرسال متزامن بالتوازي إلى GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وGrok.** اعتبارًا من مارس 2026، بدأت الباقات من $9.90/شهر — تحقق من السعر الحالي على aizolo.com.',
    azPara2: 'لا يقدّم AiZolo تقييم التوافق — يعرض الإجابات جنبًا إلى جنب لكنه يترك التحليل للمستخدم. يدعم فقط أربعة نماذج سحابية دون خيار LLM محلي. هو أداة سير عمل لإنتاج المحتوى وليس منصة تقييم تقنية.',
    azH3: 'AiZolo مقابل PromptQuorum: الفروق الرئيسية',
    azH3Para: 'AiZolo أنسب لفرق المحتوى التي تحتاج إلى بيئة عمل كتابة متعددة النماذج بأسعار معقولة للاستخدام اليومي. PromptQuorum أنسب للمستخدمين المتقدمين الذين يحتاجون إلى تحليل توافق آلي، وخصوصية LLM المحلي، والوصول المضبوط بمفتاح API لمجموعة أوسع من النماذج بما فيها الأنظمة مفتوحة المصدر.',

    chooseH2: 'أي أداة متعددة النماذج يجب أن تستخدم؟',
    chooseItems: [
      { label: 'اختر PromptQuorum', desc: 'إذا كنت بحاجة إلى تقييم التوافق بين النماذج، أو دعم LLM المحلي للعمل الحساس، أو سير عمل تقييم مضبوط بمفاتيح API الخاصة بك.', highlight: true },
      { label: 'اختر Poe', desc: 'إذا أردت وصولًا سهلًا إلى GPT-4o وClaude 4.6 Sonnet وGemini وآلاف البوتات للدردشة اليومية والاستكشاف دون إدارة مفاتيح API.' },
      { label: 'اختر LM Arena', desc: 'إذا أردت المساهمة في بيانات تفضيل النماذج المدفوعة مجتمعيًا أو دراستها وتصنيفات Elo في الصناعة.' },
      { label: 'اختر OpenMark', desc: 'إذا كنت مطوّرًا تختار نموذجًا لتطبيق إنتاجي وتحتاج إلى تقييم جودة حتمي مع بيانات تكلفة شفافة عبر أكثر من 100 نموذج.' },
      { label: 'اختر AiZolo', desc: 'إذا كنت صانع محتوى أو مسوّقًا يحتاج إلى بيئة عمل متعددة النماذج ميسورة التكلفة ومصمَّمة جيدًا لسير عمل الكتابة اليومية.' },
    ],

    faqH2: 'الأسئلة الشائعة',
    faqs: [
      {
        q: 'ما أفضل أداة لمقارنة الطلب ذاته عبر نماذج LLM متعددة في آنٍ واحد؟',
        a: 'PromptQuorum هو الأداة الوحيدة المُراجَعة هنا التي تجمع الإرسال المتزامن مع تقييم التوافق الآلي. يقدّم Poe وAiZolo وOpenMark إجابات جنبًا إلى جنب، لكن لا أيٌّ منها يُنتج Quorum Verdict — تحليلًا آليًا يحدد أين يتفق GPT-4o وClaude 4.6 Sonnet وغيرهما من النماذج أو يختلفون. بالنسبة للمستخدمين الذين يحتاجون إلى ما هو أكثر من مقارنة بصرية جنبًا إلى جنب، فإن PromptQuorum هو الخيار المصمَّم لهذا الغرض. معلومات الميزات تم التحقق منها في مارس 2026.',
      },
      {
        q: 'أي أداة متعددة النماذج تدعم نماذج LLM المحلية مثل Ollama وLM Studio؟',
        a: 'PromptQuorum هو الأداة الوحيدة المُراجَعة التي تدعم الاستدلال المحلي عبر Ollama وLM Studio. تشغيل النماذج محليًا — LLaMA 3.1 7B يحتاج 8 غيغابايت RAM، و13B يحتاج 16 غيغابايت — يعني أن الطلبات الحساسة لا تغادر جهازك أبدًا. يعمل Poe وLM Arena وOpenMark وAiZolo كخدمات سحابية حصرًا وفق وثائقهم العامة في مارس 2026.',
      },
      {
        q: 'ما تقييم التوافق في سياق أدوات LLM المتعددة؟',
        a: 'تقييم التوافق هو تحليل آلي لمدى اتفاق نماذج الذكاء الاصطناعي المستقلة على طلب معيّن. يُقيّم Quorum Verdict من PromptQuorum مستوى التوافق بين جميع النماذج المُرسَل إليها — GPT-4o وClaude 4.6 Sonnet وGemini 2.5 Pro وغيرها — ويُحدّد نقاط الاختلاف المحددة، ويُفسّر ما تشير إليه هذه الاختلافات حول موثوقية الإجابة. التوافق المرتفع بين نماذج مستقلة متعددة إشارة قوية على صحة الإجابة المرجّحة.',
      },
      {
        q: 'ما الفرق بين PromptQuorum وPoe أو LM Arena؟',
        a: 'Poe منصة دردشة استهلاكية للتبديل بين النماذج واحدًا تلو الآخر. تستخدم LM Arena التصويت المجتمعي لترتيب النماذج. PromptQuorum فريد: يُرسل إلى جميع النماذج المحددة في آنٍ واحد ويُحلّل آليًا أين تتفق أو تختلف عبر تقييم التوافق. Poe مُحسَّن للمحادثة؛ LM Arena للمعايرة؛ PromptQuorum للتقييم المضبوط وكشف الهلوسة.',
      },
      {
        q: 'هل أحتاج إلى مفاتيح API الخاصة بي لاستخدام PromptQuorum؟',
        a: 'نعم. يشترط PromptQuorum على المستخدمين إحضار مفاتيح API الخاصة بهم من OpenAI (GPT-4o) وAnthropic (Claude 4.6 Sonnet) وGoogle (Gemini 2.5 Pro) وMistral وغيرها من المزوّدين. يُبقي هذا التصميم بياناتك تحت سيطرتك، والتكاليف شفافة، والاستخدام مرتبطًا بشروطك التجارية مع كل مزوّد. كما يُتيح دعم LLM المحلي عبر Ollama وLM Studio للاستدلال الكامل الخاص.',
      },
      {
        q: 'هل PromptQuorum مجاني؟',
        a: 'نعم. PromptQuorum في بيتا مجانية اعتبارًا من يوليو 2026. جميع الميزات — الإرسال المتزامن وتقييم التوافق وكشف الهلوسة والتصدير بصيغ متعددة — مجانية. بعد البيتا، سيُطبَّق التسعير وفق الاستخدام بنموذج الدفع حسب الاستهلاك. تُحضر مفاتيح API الخاصة بك، لذا تتحكم في التكاليف مباشرة مع كل مزوّد.',
      },
    ],

    ctaH2: 'جرّب PromptQuorum اليوم',
    ctaSubtext: 'يتوفر PromptQuorum الآن في النسخة التجريبية العامة — نزّل تطبيق سطح المكتب الآن. دون قائمة انتظار ودون تسجيل.',
    ctaButton: 'تنزيل النسخة التجريبية ←',
  },
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const TABLE_ROWS: Partial<Record<Lang, { pq: string[], poe: string[], lm: string[], om: string[], az: string[] }>> = {
  es: {
    pq:  ['✓ Sí', '✓ Quorum Verdict', '✓ Ollama + LM Studio', '✓ Tus claves', 'Beta gratuita'],
    poe: ['~ Secuencial / limitado', '✗ No', '✗ Solo nube', '~ Limitado', 'Gratis / $19,99/mes'],
    lm:  ['~ Solo 2 modelos', '~ Solo votación humana', '✗ Solo nube', '✗ No', 'Gratis'],
    om:  ['✓ Paralelo', '~ Puntuación determinista', '✗ Solo nube', '✓ Sí', 'Nivel gratuito / créditos'],
    az:  ['✓ Sí', '✗ No', '✗ Solo nube', '✓ Sí', 'Desde $9,90/mes'],
  },
  pt: {
    pq:  ['✓ Sim', '✓ Quorum Verdict', '✓ Ollama + LM Studio', '✓ Suas chaves', 'Beta gratuito'], // VERIFY
    poe: ['~ Sequencial / limitado', '✗ Não', '✗ Somente nuvem', '~ Limitado', 'Grátis / $19,99/mês'], // VERIFY
    lm:  ['~ Apenas 2 modelos', '~ Apenas votação humana', '✗ Somente nuvem', '✗ Não', 'Grátis'], // VERIFY
    om:  ['✓ Paralelo', '~ Pontuação determinística', '✗ Somente nuvem', '✓ Sim', 'Nível gratuito / créditos'], // VERIFY
    az:  ['✓ Sim', '✗ Não', '✗ Somente nuvem', '✓ Sim', 'A partir de $9,90/mês'], // VERIFY
  },
  ko: {
    pq:  ['✓ 예', '✓ Quorum Verdict', '✓ Ollama + LM Studio', '✓ 내 키 사용', '무료 베타'],
    poe: ['~ 순차 / 제한적', '✗ 아니오', '✗ 클라우드 전용', '~ 제한적', '무료 / $19.99/월'],
    lm:  ['~ 2개 모델만', '~ 인간 투표만', '✗ 클라우드 전용', '✗ 아니오', '무료'],
    om:  ['✓ 병렬', '~ 결정론적 점수', '✗ 클라우드 전용', '✓ 예', '무료 티어 / 크레딧'],
    az:  ['✓ 예', '✗ 아니오', '✗ 클라우드 전용', '✓ 예', '$9.90/월부터'],
  },
  ar: {
    pq:  ['✓ نعم', '✓ Quorum Verdict', '✓ Ollama + LM Studio', '✓ مفاتيحك', 'بيتا مجانية'],
    poe: ['~ تسلسلي / محدود', '✗ لا', '✗ سحابي فقط', '~ محدود', 'مجاني / $19.99/شهر'],
    lm:  ['~ نموذجان فقط', '~ تصويت بشري فقط', '✗ سحابي فقط', '✗ لا', 'مجاني'],
    om:  ['✓ متوازٍ', '~ تقييم حتمي', '✗ سحابي فقط', '✓ نعم', 'طبقة مجانية / رصيد'],
    az:  ['✓ نعم', '✗ لا', '✗ سحابي فقط', '✓ نعم', 'من $9.90/شهر'],
  },
}
const DEFAULT_ROWS = {
  pq:  ['✓ Yes', '✓ Quorum Verdict', '✓ Ollama + LM Studio', '✓ Your keys', 'Free beta'],
  poe: ['~ Sequential / limited', '✗ No', '✗ Cloud only', '~ Limited', 'Free / $19.99/mo'],
  lm:  ['~ 2 models only', '~ Human voting only', '✗ Cloud only', '✗ No', 'Free'],
  om:  ['✓ Parallel', '~ Deterministic scoring', '✗ Cloud only', '✓ Yes', 'Free tier / credits'],
  az:  ['✓ Yes', '✗ No', '✗ Cloud only', '✓ Yes', 'From $9.90/mo'],
}

function CompareContent({ initialLang }: { initialLang?: Lang }) {
  const lang = useLang(initialLang) as Lang
  const t = (content[lang] ?? content['en'])!
  const rows = TABLE_ROWS[lang] ?? DEFAULT_ROWS

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">

      {/* Hero */}
      <header className="border-b border-gray-100 pb-12 mb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono text-text-secondary mb-5">
            <Link prefetch={false} href={lang === 'en' ? '/' : `/${lang}`} className="hover:text-primary transition-colors">{t.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <span>{t.breadcrumbCompare}</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-xs font-mono text-text-secondary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            <time dateTime="2026-03-01">{t.updatedDate}</time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight tracking-tight mb-4">
            {t.h1}{' '}
            <span className="text-primary">{t.h1Highlight}</span>
          </h1>

          {/* Cross-language links */}
          <LangLinksBar cluster="compare" slug="" availableLangs={["en", "de", "fr", "ja", "zh", "es"]} initialLang={initialLang} />

          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            {t.introPara}
          </p>
          {/* Disclaimer */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed">
            <strong>{t.disclaimerLabel}</strong>
            {t.disclaimer}
            <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">{t.disclaimerContact}</a>
            {t.disclaimerContactSuffix}
          </div>
          {/* Jump links */}
          <div className="flex flex-wrap gap-2 mt-6">
            {t.jumpLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-xs font-mono text-primary bg-primary/8 border border-primary/20 px-3 py-1.5 rounded-md hover:bg-primary/12 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* What is a multi-LLM tool */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="intro">
          <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">{t.introH2}</h2>
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-6">
            <p className="text-text-primary text-[15px] leading-relaxed">
              {t.introDefinition}
            </p>
          </div>
          <p className="text-text-secondary mb-4">
            {t.introPara1}
          </p>
          <p className="text-text-secondary">
            {t.introPara2}
          </p>
        </section>

        {/* Comparison table */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="comparison-table">
          <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">{t.tableH2}</h2>
          <p className="text-text-secondary mb-6">{t.tablePara}</p>
          <div className="relative overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider sticky left-0 z-10 bg-gray-50">{t.tableToolCol}</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{t.tableDispatchCol}</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{t.tableConsensusCol}</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{t.tableLocalCol}</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">{t.tableApiCol}</th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">{t.tablePriceCol}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-primary/5 border-b border-primary/10 group">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-primary font-semibold sticky left-0 z-10 bg-primary/5 group-hover:bg-primary/5 transition-colors">PromptQuorum</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.pq[0]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.pq[1]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.pq[2]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.pq[3]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">{rows.pq[4]}</td>
                </tr>
                <tr className="border-b border-gray-100 group">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium sticky left-0 z-10 bg-white group-hover:bg-gray-50 transition-colors">Poe (Quora)</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">{rows.poe[0]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.poe[1]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.poe[2]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">{rows.poe[3]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">{rows.poe[4]}</td>
                </tr>
                <tr className="border-b border-gray-100 group">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium sticky left-0 z-10 bg-white group-hover:bg-gray-50 transition-colors">LM Arena</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">{rows.lm[0]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">{rows.lm[1]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.lm[2]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.lm[3]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">{rows.lm[4]}</td>
                </tr>
                <tr className="border-b border-gray-100 group">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium sticky left-0 z-10 bg-white group-hover:bg-gray-50 transition-colors">OpenMark</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.om[0]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">{rows.om[1]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.om[2]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.om[3]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">{rows.om[4]}</td>
                </tr>
                <tr className="group">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium sticky left-0 z-10 bg-white group-hover:bg-gray-50 transition-colors">AiZolo</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.az[0]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.az[1]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">{rows.az[2]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">{rows.az[3]}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">{rows.az[4]}</td>
                </tr>
              </tbody>
            </table>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
          </div>
          <p className="text-xs font-mono text-text-secondary mt-3">{t.tableFootnote}</p>
        </section>

        {/* PromptQuorum */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="promptquorum">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.pqH2}</h2>
          <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-primary">PromptQuorum</span>
              <span className="text-xs font-mono bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t.pqBestFor}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.pqTags.map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3 leading-relaxed">{t.pqPara1}</p>
            <p className="text-text-secondary mb-3 leading-relaxed">{t.pqPara2}</p>
            <p className="text-text-secondary leading-relaxed">{t.pqPara3}</p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">{t.pqH3}</h3>
          <p className="text-text-secondary">{t.pqH3Para}</p>
        </section>

        {/* Poe */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="poe">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.poeH2}</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
              <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t.poeBestFor}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.poeTags.map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3 leading-relaxed">{t.poePara1}</p>
            <p className="text-text-secondary leading-relaxed">{t.poePara2}</p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">{t.poeH3}</h3>
          <p className="text-text-secondary">{t.poeH3Para}</p>
        </section>

        {/* LM Arena */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="lmarena">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.lmH2}</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
              <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t.lmBestFor}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.lmTags.map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3 leading-relaxed">{t.lmPara1}</p>
            <p className="text-text-secondary leading-relaxed">{t.lmPara2}</p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">{t.lmH3}</h3>
          <p className="text-text-secondary">{t.lmH3Para}</p>
        </section>

        {/* OpenMark */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="openmark">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.omH2}</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
              <span className="text-xs font-mono bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">{t.omBestFor}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.omTags.map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3 leading-relaxed">{t.omPara1}</p>
            <p className="text-text-secondary leading-relaxed">{t.omPara2}</p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">{t.omH3}</h3>
          <p className="text-text-secondary">{t.omH3Para}</p>
        </section>

        {/* AiZolo */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="aizolo">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.azH2}</h2>
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
              <span className="text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">{t.azBestFor}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.azTags.map(s => (
                <span key={s} className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">{s}</span>
              ))}
            </div>
            <p className="text-text-secondary mb-3 leading-relaxed">{t.azPara1}</p>
            <p className="text-text-secondary leading-relaxed">{t.azPara2}</p>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">{t.azH3}</h3>
          <p className="text-text-secondary">{t.azH3Para}</p>
        </section>

        {/* How to choose */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="how-to-choose">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.chooseH2}</h2>
          <div className="space-y-3">
            {t.chooseItems.map(({ label, desc, highlight }) => (
              <div key={label} className={`rounded-lg px-5 py-4 ${highlight ? 'bg-primary/8 border border-primary/20' : 'bg-gray-50 border border-gray-100'}`}>
                <span className={`font-semibold ${highlight ? 'text-primary' : 'text-text-primary'}`}>{label}</span>
                <span className="text-text-secondary"> {desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-14 pb-14 border-b border-gray-100" id="faq">
          <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">{t.faqH2}</h2>
          <div className="divide-y divide-gray-100">
            {t.faqs.map(({ q, a }) => (
              <div key={q} className="py-5">
                <p className="font-semibold text-text-primary mb-2 leading-snug">{q}</p>
                <p className="text-[14.5px] text-text-secondary leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PE hub cross-link */}
        <section className="mt-16 border-t pt-12 text-center">
          <p className="text-gray-700 mb-4">
            {lang === 'de' ? 'Vergleichen ist Schritt eins. Die richtigen Ergebnisse zu erzielen ist Schritt zwei.' :
             lang === 'fr' ? "Comparer est la première étape. Obtenir d'excellents résultats est la deuxième." :
             lang === 'ja' ? '比較はステップ1。最高の成果を出すことがステップ2です。' :
             lang === 'zh' ? '比较是第一步，获得出色结果是第二步。' :
             'Comparing is step one. Getting great results from each model is step two.'}
          </p>
          <Link prefetch={false}
            href={lang === 'en' ? '/prompt-engineering' : `/${lang}/prompt-engineering`}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {lang === 'de' ? 'Zum Prompt-Engineering-Guide →' :
             lang === 'fr' ? 'Explorer le Guide de Prompt Engineering →' :
             lang === 'ja' ? 'プロンプトエンジニアリングガイドを見る →' :
             lang === 'zh' ? '探索Prompt工程指南 →' :
             'Explore the Prompt Engineering Guide →'}
          </Link>
        </section>

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{t.ctaH2}</h2>
          <p className="text-white/75 mb-6">{t.ctaSubtext}</p>
          <Link prefetch={false}
            href={lang === 'en' ? '/#waitlist' : `/${lang}#waitlist`}
            className="inline-block bg-white text-primary font-bold text-sm px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t.ctaButton}
          </Link>
        </div>

      </div>
    </div>
  )
}

export function ComparePageClient({ initialLang }: { initialLang?: Lang }) {
  return <CompareContent initialLang={initialLang} />
}
