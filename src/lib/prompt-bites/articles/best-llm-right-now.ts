import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-en.webp',
    title: 'Best LLM Right Now?',
    dateModified: '2026-10-19',
    seoTitle: 'Best LLM Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Cloud coding: Claude Opus 5.5. Top tier: GPT-6 Astra; balanced: GPT-6.1 Sol. Google: Gemini 4 Argon. Local: qwen3.5:9b.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5.5', 'GPT-6 Astra', 'Gemini 4 Argon'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users comparing the best available LLMs across cloud and local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best LLM right now?',
        answer: 'The current cloud flagships each target a different job. Claude Opus 5.5 is Anthropic\'s pick for long-running agentic coding and knowledge work. GPT-6 Astra is OpenAI\'s flagship for the most demanding work, GPT-6.1 Sol offers near-Astra performance at lower cost, and GPT-6 Luna covers high-volume tasks. Gemini 4 Argon is Google\'s new flagship, available to Google AI Pro and Ultra subscribers. For local use, qwen3.5:9b is a 6.6 GB download.',
        bullets: [
          'Cloud coding: Claude Opus 5.5 — built for long-running agentic coding',
          'OpenAI: GPT-6 Astra (top tier), GPT-6.1 Sol (balanced), GPT-6 Luna (high volume)',
          'Google: Gemini 4 Argon — new flagship for Google AI Pro and Ultra',
          'Local: qwen3.5:9b — 6.6 GB download',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No single LLM wins every task — Claude Opus 5.5 targets agentic coding, GPT-6 Astra the most demanding work, and Gemini 4 Argon is Google\'s flagship',
          'The flagships have changed: Claude Opus 5, GPT-5.6 and Gemini 3.1 Pro are now previous generation, so any comparison built on them is out of date',
          'GPT-6 is a family: Astra ($10 / $50 per million tokens) is the top tier, Sol ($2 / $10) the balanced tier, Luna ($0.10 / $0.50) the cost-optimized tier',
          'For local use, qwen3.5:9b (6.6 GB) covers general work and qwen2.5-coder:7b (4.7 GB) covers coding — both far below the hardware most guides assume',
          'Cloud models need API keys and cost per token; local models are free to run after the hardware is bought',
        ],
      },
      body1: {
        title: 'The Best LLM Depends on the Task — Here\'s the Map',
        content: [
          '<strong>Each vendor now ships a tiered line-up, and the right pick depends on the task. Claude Opus 5.5 for long-running agentic coding, GPT-6 Astra or GPT-6.1 Sol for demanding general work, Gemini 4 Argon if you have a Google AI Pro or Ultra plan.</strong> Below: when each one fits, and which to pick by workflow.',
          'This page does not rank the flagships by benchmark score. Vendors publish results on evals they choose themselves, so the numbers are not comparable across vendors, and earlier scores for Claude Opus 5, GPT-5.6 Sol and Gemini 3.1 Pro do not carry over to their successors. What the vendors\' own documentation does state is positioning, price, context window and knowledge cutoff.',
          'Anthropic positions Claude Opus 5.5 for long-running agentic coding and knowledge work, at $4 per million input tokens and $20 per million output tokens, with a 1M-token context window. OpenAI lists GPT-6 Astra at $10/$50, GPT-6.1 Sol at $2/$10 and GPT-6 Luna at $0.10/$0.50, each with a 1.05M-token context window. Google describes Gemini 4 Argon as its next era of frontier intelligence and has not published a knowledge cutoff for it. If cost is your binding constraint, compare GPT-6.1 Sol or GPT-6 Luna against a competitor flagship, not Astra.',
        ],
        columns: ['Use Case', 'Best LLM', 'Why'],
        rows: [
          { 'Use Case': 'Coding / long-running agents', 'Best LLM': 'Claude Opus 5.5', 'Why': 'Built for agentic coding; $4/$20 per MTok' },
          { 'Use Case': 'Most demanding work', 'Best LLM': 'GPT-6 Astra', 'Why': 'OpenAI\'s flagship; $10/$50 per MTok' },
          { 'Use Case': 'Balanced cost and quality', 'Best LLM': 'GPT-6.1 Sol', 'Why': 'Near-Astra performance; $2/$10 per MTok' },
          { 'Use Case': 'High-volume, cost-sensitive', 'Best LLM': 'GPT-6 Luna', 'Why': 'Efficient tier; $0.10/$0.50 per MTok' },
          { 'Use Case': 'Google AI Pro / Ultra users', 'Best LLM': 'Gemini 4 Argon', 'Why': 'Google\'s new flagship model' },
          { 'Use Case': 'Local / offline general', 'Best LLM': 'qwen3.5:9b', 'Why': '6.6 GB download; Qwen3.6 on Ollama starts at 18 GB' },
          { 'Use Case': 'Local / offline coding', 'Best LLM': 'qwen2.5-coder:7b', 'Why': '4.7 GB download, runs on an 8 GB card' },
        ],
      },
      body2: {
        title: 'How to Pick Without Reading 50 Reviews',
        content: [
          '<strong>Start with the constraint.</strong> Budget, privacy, latency, or capability? Pick the model that clears your hardest constraint first. If privacy is the constraint, no cloud flagship qualifies and the question becomes which local model fits your card.',
          '<strong>Test two models on your actual task.</strong> Published benchmarks do not predict your use case, and this is more true now than it was a year ago — the three vendors report on three different evals, so there is no like-for-like number to rank them by. Use free API tiers for the cloud models and run the local ones through Ollama.',
          '<strong>Re-check quarterly, not monthly.</strong> Vendors replace their flagships in bursts: Claude Opus 5, GPT-5.6 and Gemini 3.1 Pro were each replaced by a newer model after release. A comparison written before a burst is a full generation stale rather than slightly dated.',
        ],
        callouts: [{ type: 'info', text: 'Positioning, prices, context windows and cutoffs come from Anthropic\'s, OpenAI\'s and Google\'s own model documentation. Benchmark figures published by vendors use their own chosen evals and are not directly comparable to each other.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About the Best LLM Right Now',
        faqs: [
          {
            q: 'Is Claude Opus 5.5 or GPT-6 Astra better?',
            a: 'They are positioned for different jobs, and neither vendor publishes a figure on the other\'s benchmarks. Anthropic positions Claude Opus 5.5 for long-running agentic coding and knowledge work at $4/$20 per million tokens. OpenAI positions GPT-6 Astra as its flagship for the most demanding work at $10/$50. Test both on your own task: Opus 5.5 for code-heavy agent work, Astra or the cheaper GPT-6.1 Sol for broad demanding work.',
          },
          {
            q: 'What is the difference between GPT-6 Astra, Sol and Luna?',
            a: 'Astra is the flagship for the most demanding work ($10 input / $50 output per million tokens). Sol (GPT-6.1 Sol) delivers near-Astra performance for complex work at lower cost ($2/$10). Luna is the efficient model for focused, high-volume tasks ($0.10/$0.50). All three have a 1.05M-token context window. If you pay per token, the cost-conscious path is to start with Sol and move up to Astra only where Sol falls short.',
          },
          {
            q: 'What is the best local LLM if I only have 8 GB VRAM?',
            a: 'qwen2.5-coder:7b at a 4.7 GB download for coding, or llama3.2:3b at 2.0 GB for general use with room to spare. Those are download sizes rather than VRAM requirements, so allow a couple of GB above them for your context window. An 8 GB card handles both comfortably.',
          },
          {
            q: 'How does Gemini 4 Argon compare to the other two?',
            a: 'Gemini 4 Argon is Google\'s new flagship, which Google describes as its next era of frontier intelligence, available to Google AI Pro and Ultra subscribers. Google\'s model page does not state a knowledge cutoff, and this page does not compare it by benchmark. Gemini 3.1 Pro, the earlier flagship, is previous generation. See our <a href="/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR prompt framework guide</a> for getting better output from any cloud model.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-de.webp',
    title: 'Welches LLM ist aktuell das beste?',
    seoTitle: 'Beste LLM-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Cloud-Coding: Claude Opus 5.5. Spitzenklasse: GPT-6 Astra; ausgewogen: GPT-6.1 Sol. Google: Gemini 4 Argon. Lokal: qwen3.5:9b.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Die aktuellen Cloud-Flaggschiffe zielen jeweils auf andere Aufgaben. Claude Opus 5.5 ist Anthropics Wahl für lang laufendes agentisches Coding und Wissensarbeit. GPT-6 Astra ist das Flaggschiff von OpenAI für die anspruchsvollsten Aufgaben, GPT-6.1 Sol bietet nahezu Astra-Leistung zu geringeren Kosten, und GPT-6 Luna deckt Aufgaben mit hohem Volumen ab. Gemini 4 Argon ist Googles neues Flaggschiff für Abonnenten von Google AI Pro und Ultra. Lokal ist qwen3.5:9b ein 6,6-GB-Download.',
        bullets: [
          'Cloud-Coding: Claude Opus 5.5 — für lang laufendes agentisches Coding gebaut',
          'OpenAI: GPT-6 Astra (Spitzenklasse), GPT-6.1 Sol (ausgewogen), GPT-6 Luna (hohes Volumen)',
          'Google: Gemini 4 Argon — neues Flaggschiff für Google AI Pro und Ultra',
          'Lokal: qwen3.5:9b — 6,6 GB Download',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Kein einzelnes LLM gewinnt jede Aufgabe — Claude Opus 5.5 zielt auf agentisches Coding, GPT-6 Astra auf die anspruchsvollsten Aufgaben, und Gemini 4 Argon ist Googles Flaggschiff',
          'Die Flaggschiffe haben gewechselt: Claude Opus 5, GPT-5.6 und Gemini 3.1 Pro sind inzwischen Vorgängergenerationen, jeder darauf aufbauende Vergleich ist also veraltet',
          'GPT-6 ist eine Familie: Astra ($10 / $50 pro Million Token) ist die Spitzenklasse, Sol ($2 / $10) die ausgewogene Stufe, Luna ($0,10 / $0,50) die kostenoptimierte Stufe',
          'Lokal deckt qwen3.5:9b (6,6 GB) allgemeine Arbeit ab und qwen2.5-coder:7b (4,7 GB) das Coding — beide weit unter der Hardware, die die meisten Ratgeber voraussetzen',
          'Cloud-Modelle brauchen API-Schlüssel und kosten pro Token; lokale Modelle laufen nach dem Hardwarekauf kostenlos',
        ],
      },
      body1: {
        title: 'Das beste LLM hängt von der Aufgabe ab — hier die Übersicht',
        content: [
          '<strong>Jeder Anbieter liefert inzwischen eine gestufte Modellreihe, und die richtige Wahl hängt von der Aufgabe ab. Claude Opus 5.5 für lang laufendes agentisches Coding, GPT-6 Astra oder GPT-6.1 Sol für anspruchsvolle allgemeine Arbeit, Gemini 4 Argon mit einem Google-AI-Pro- oder -Ultra-Abo.</strong> Nachfolgend: wann welches passt und welches zu welchem Arbeitsablauf gehört.',
          'Diese Seite reiht die Flaggschiffe nicht nach Benchmark-Werten. Die Anbieter veröffentlichen Ergebnisse auf selbst gewählten Evaluationen, die Zahlen sind also anbieterübergreifend nicht vergleichbar, und frühere Werte für Claude Opus 5, GPT-5.6 Sol und Gemini 3.1 Pro lassen sich nicht auf deren Nachfolger übertragen. Die Dokumentation der Anbieter nennt dagegen Positionierung, Preis, Kontextfenster und Wissens-Cutoff.',
          'Anthropic positioniert Claude Opus 5.5 für lang laufendes agentisches Coding und Wissensarbeit, zu $4 pro Million Eingabe-Token und $20 pro Million Ausgabe-Token, mit einem Kontextfenster von 1 Mio. Token. OpenAI führt GPT-6 Astra mit $10/$50, GPT-6.1 Sol mit $2/$10 und GPT-6 Luna mit $0,10/$0,50, jeweils mit einem Kontextfenster von 1,05 Mio. Token. Google beschreibt Gemini 4 Argon als seine nächste Ära der Frontier-Intelligenz und hat dafür keinen Wissens-Cutoff veröffentlicht. Wenn Kosten Ihre bindende Beschränkung sind, vergleichen Sie GPT-6.1 Sol oder GPT-6 Luna mit einem Konkurrenz-Flaggschiff, nicht Astra.',
        ],
        columns: ['Anwendungsfall', 'Bestes LLM', 'Warum'],
        rows: [
          { 'Anwendungsfall': 'Coding / lang laufende Agenten', 'Bestes LLM': 'Claude Opus 5.5', 'Warum': 'Für agentisches Coding gebaut; $4/$20 pro MTok' },
          { 'Anwendungsfall': 'Anspruchsvollste Aufgaben', 'Bestes LLM': 'GPT-6 Astra', 'Warum': 'OpenAI-Flaggschiff; $10/$50 pro MTok' },
          { 'Anwendungsfall': 'Ausgewogen aus Kosten und Qualität', 'Bestes LLM': 'GPT-6.1 Sol', 'Warum': 'Nahe an Astra; $2/$10 pro MTok' },
          { 'Anwendungsfall': 'Hohes Volumen, kostensensibel', 'Bestes LLM': 'GPT-6 Luna', 'Warum': 'Effiziente Stufe; $0,10/$0,50 pro MTok' },
          { 'Anwendungsfall': 'Google-AI-Pro-/Ultra-Nutzer', 'Bestes LLM': 'Gemini 4 Argon', 'Warum': 'Googles neues Flaggschiff-Modell' },
          { 'Anwendungsfall': 'Lokal / offline allgemein', 'Bestes LLM': 'qwen3.5:9b', 'Warum': '6,6 GB Download; Qwen3.6 in Ollama beginnt bei 18 GB' },
          { 'Anwendungsfall': 'Lokal / offline Coding', 'Bestes LLM': 'qwen2.5-coder:7b', 'Warum': '4,7 GB Download, läuft auf einer 8-GB-Karte' },
        ],
      },
      body2: {
        title: 'Wie Sie wählen, ohne 50 Reviews zu lesen',
        content: [
          '<strong>Beginnen Sie bei der Beschränkung.</strong> Budget, Datenschutz, Latenz oder Fähigkeit? Wählen Sie das Modell, das Ihre härteste Beschränkung zuerst löst. Ist Datenschutz die Beschränkung, kommt kein Cloud-Flaggschiff infrage und die Frage lautet, welches lokale Modell auf Ihre Karte passt.',
          '<strong>Testen Sie zwei Modelle an Ihrer echten Aufgabe.</strong> Veröffentlichte Benchmarks sagen Ihren Anwendungsfall nicht vorher, und das gilt heute mehr als vor einem Jahr: Die drei Anbieter berichten über drei verschiedene Evaluationen, es gibt also keine vergleichbare Zahl, nach der sich ordnen ließe. Nutzen Sie kostenlose API-Stufen für die Cloud-Modelle und Ollama für die lokalen.',
          '<strong>Prüfen Sie vierteljährlich, nicht monatlich.</strong> Anbieter ersetzen ihre Flaggschiffe in Schüben: Claude Opus 5, GPT-5.6 und Gemini 3.1 Pro wurden nach ihrer Veröffentlichung jeweils durch ein neueres Modell abgelöst. Ein vor einem Schub geschriebener Vergleich ist eine ganze Generation veraltet statt nur leicht angestaubt.',
        ],
        callouts: [{ type: 'info', text: 'Positionierung, Preise, Kontextfenster und Cutoffs stammen aus der eigenen Modelldokumentation von Anthropic, OpenAI und Google. Die von den Anbietern veröffentlichten Benchmark-Zahlen beruhen auf selbst gewählten Evaluationen und sind untereinander nicht direkt vergleichbar.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum besten LLM',
        faqs: [
          {
            q: 'Ist Claude Opus 5.5 oder GPT-6 Astra besser?',
            a: 'Sie sind für unterschiedliche Aufgaben positioniert, und keiner der Anbieter veröffentlicht eine Zahl auf dem Benchmark des anderen. Anthropic positioniert Claude Opus 5.5 für lang laufendes agentisches Coding und Wissensarbeit zu $4/$20 pro Million Token. OpenAI positioniert GPT-6 Astra als Flaggschiff für die anspruchsvollsten Aufgaben zu $10/$50. Testen Sie beide an Ihrer eigenen Aufgabe: Opus 5.5 für codelastige Agentenarbeit, Astra oder das günstigere GPT-6.1 Sol für breite, anspruchsvolle Arbeit.',
          },
          {
            q: 'Was unterscheidet GPT-6 Astra, Sol und Luna?',
            a: 'Astra ist das Flaggschiff für die anspruchsvollsten Aufgaben ($10 Eingabe / $50 Ausgabe pro Million Token). Sol (GPT-6.1 Sol) liefert für komplexe Aufgaben nahezu Astra-Leistung zu geringeren Kosten ($2/$10). Luna ist das effiziente Modell für fokussierte Aufgaben mit hohem Volumen ($0,10/$0,50). Alle drei haben ein Kontextfenster von 1,05 Mio. Token. Wenn Sie pro Token zahlen, ist der kostenbewusste Weg, mit Sol zu beginnen und nur dort auf Astra zu wechseln, wo Sol nicht ausreicht.',
          },
          {
            q: 'Welches lokale LLM eignet sich bei nur 8 GB VRAM?',
            a: 'qwen2.5-coder:7b mit 4,7 GB Download fürs Coding, oder llama3.2:3b mit 2,0 GB für allgemeine Nutzung mit reichlich Reserve. Das sind Download-Größen, keine VRAM-Anforderungen, planen Sie also ein paar GB darüber für Ihr Kontextfenster ein. Eine 8-GB-Karte trägt beide bequem.',
          },
          {
            q: 'Wie schneidet Gemini 4 Argon gegen die beiden anderen ab?',
            a: 'Gemini 4 Argon ist Googles neues Flaggschiff, das Google als seine nächste Ära der Frontier-Intelligenz beschreibt und das für Abonnenten von Google AI Pro und Ultra verfügbar ist. Googles Modellseite nennt keinen Wissens-Cutoff, und diese Seite vergleicht das Modell nicht per Benchmark. Gemini 3.1 Pro, das frühere Flaggschiff, ist eine Vorgängergeneration. Siehe unseren <a href="/de/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR-Framework-Leitfaden</a> für bessere Ausgaben aus jedem Cloud-Modell.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-fr.webp',
    title: 'Quel est le meilleur LLM en ce moment ?',
    seoTitle: 'Meilleurs modèles LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Code cloud : Claude Opus 5.5. Haut de gamme : GPT-6 Astra ; équilibré : GPT-6.1 Sol. Google : Gemini 4 Argon. Local : qwen3.5:9b.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Les modèles phares actuels du cloud visent chacun une tâche différente. Claude Opus 5.5 est le choix d\'Anthropic pour le codage agentique de longue durée et le travail de connaissance. GPT-6 Astra est le modèle phare d\'OpenAI pour les tâches les plus exigeantes, GPT-6.1 Sol offre des performances proches d\'Astra à moindre coût, et GPT-6 Luna couvre les tâches à gros volume. Gemini 4 Argon est le nouveau modèle phare de Google, proposé aux abonnés Google AI Pro et Ultra. En local, qwen3.5:9b pèse 6,6 Go.',
        bullets: [
          'Code cloud : Claude Opus 5.5 — conçu pour le codage agentique de longue durée',
          'OpenAI : GPT-6 Astra (haut de gamme), GPT-6.1 Sol (équilibré), GPT-6 Luna (gros volume)',
          'Google : Gemini 4 Argon — nouveau modèle phare pour Google AI Pro et Ultra',
          'Local : qwen3.5:9b — 6,6 Go de téléchargement',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aucun LLM ne gagne toutes les tâches — Claude Opus 5.5 vise le codage agentique, GPT-6 Astra les tâches les plus exigeantes, et Gemini 4 Argon est le modèle phare de Google',
          'Les modèles phares ont changé : Claude Opus 5, GPT-5.6 et Gemini 3.1 Pro sont désormais des générations précédentes, toute comparaison fondée sur eux est donc périmée',
          'GPT-6 est une famille : Astra ($10 / $50 par million de tokens) est le haut de gamme, Sol ($2 / $10) le niveau équilibré, Luna ($0,10 / $0,50) le niveau optimisé pour le coût',
          'En local, qwen3.5:9b (6,6 Go) couvre le travail général et qwen2.5-coder:7b (4,7 Go) le code — tous deux bien en dessous du matériel supposé par la plupart des guides',
          'Les modèles cloud exigent des clés API et coûtent au token ; les modèles locaux tournent gratuitement une fois le matériel acheté',
        ],
      },
      body1: {
        title: 'Le meilleur LLM dépend de la tâche — voici la carte',
        content: [
          '<strong>Chaque éditeur propose désormais une gamme par niveaux, et le bon choix dépend de la tâche. Claude Opus 5.5 pour le codage agentique de longue durée, GPT-6 Astra ou GPT-6.1 Sol pour le travail général exigeant, Gemini 4 Argon si vous disposez d\'un abonnement Google AI Pro ou Ultra.</strong> Ci-dessous : quand chacun convient, et lequel choisir selon votre flux de travail.',
          'Cette page ne classe pas les modèles phares selon des scores de benchmark. Les éditeurs publient des résultats sur des évaluations qu\'ils choisissent eux-mêmes ; les chiffres ne sont donc pas comparables d\'un éditeur à l\'autre, et les scores antérieurs de Claude Opus 5, GPT-5.6 Sol et Gemini 3.1 Pro ne se transposent pas à leurs successeurs. La documentation des éditeurs indique en revanche le positionnement, le prix, la fenêtre de contexte et la date de coupure des connaissances.',
          'Anthropic positionne Claude Opus 5.5 pour le codage agentique de longue durée et le travail de connaissance, à $4 par million de tokens en entrée et $20 par million de tokens en sortie, avec une fenêtre de contexte de 1M de tokens. OpenAI répertorie GPT-6 Astra à $10/$50, GPT-6.1 Sol à $2/$10 et GPT-6 Luna à $0,10/$0,50, chacun avec une fenêtre de contexte de 1,05M de tokens. Google décrit Gemini 4 Argon comme sa prochaine ère d\'intelligence de pointe et n\'a pas publié de date de coupure pour ce modèle. Si le coût est votre contrainte déterminante, comparez GPT-6.1 Sol ou GPT-6 Luna à un modèle phare concurrent, pas Astra.',
        ],
        columns: ['Cas d\'usage', 'Meilleur LLM', 'Pourquoi'],
        rows: [
          { 'Cas d\'usage': 'Code / agents de longue durée', 'Meilleur LLM': 'Claude Opus 5.5', 'Pourquoi': 'Conçu pour le code agentique ; $4/$20 par MTok' },
          { 'Cas d\'usage': 'Tâches les plus exigeantes', 'Meilleur LLM': 'GPT-6 Astra', 'Pourquoi': 'Modèle phare d\'OpenAI ; $10/$50 par MTok' },
          { 'Cas d\'usage': 'Équilibre coût-qualité', 'Meilleur LLM': 'GPT-6.1 Sol', 'Pourquoi': 'Proche d\'Astra ; $2/$10 par MTok' },
          { 'Cas d\'usage': 'Gros volume, sensible au coût', 'Meilleur LLM': 'GPT-6 Luna', 'Pourquoi': 'Niveau efficace ; $0,10/$0,50 par MTok' },
          { 'Cas d\'usage': 'Abonnés Google AI Pro / Ultra', 'Meilleur LLM': 'Gemini 4 Argon', 'Pourquoi': 'Nouveau modèle phare de Google' },
          { 'Cas d\'usage': 'Local / hors ligne général', 'Meilleur LLM': 'qwen3.5:9b', 'Pourquoi': '6,6 Go ; Qwen3.6 dans Ollama démarre à 18 Go' },
          { 'Cas d\'usage': 'Local / hors ligne code', 'Meilleur LLM': 'qwen2.5-coder:7b', 'Pourquoi': '4,7 Go, tourne sur une carte de 8 Go' },
        ],
      },
      body2: {
        title: 'Comment choisir sans lire 50 tests',
        content: [
          '<strong>Partez de la contrainte.</strong> Budget, confidentialité, latence ou capacité ? Choisissez le modèle qui lève d\'abord votre contrainte la plus dure. Si c\'est la confidentialité, aucun modèle cloud ne convient et la question devient : quel modèle local tient sur votre carte.',
          '<strong>Testez deux modèles sur votre tâche réelle.</strong> Les benchmarks publiés ne prédisent pas votre cas d\'usage, et c\'est plus vrai aujourd\'hui qu\'il y a un an : les trois éditeurs rendent compte de trois évaluations différentes, il n\'existe donc aucun chiffre comparable pour les classer. Utilisez les paliers API gratuits pour le cloud et Ollama pour le local.',
          '<strong>Revérifiez chaque trimestre, pas chaque mois.</strong> Les éditeurs remplacent leurs modèles phares par vagues : Claude Opus 5, GPT-5.6 et Gemini 3.1 Pro ont chacun été remplacés par un modèle plus récent après leur sortie. Une comparaison rédigée avant une vague a une génération entière de retard, pas seulement un léger vieillissement.',
        ],
        callouts: [{ type: 'info', text: 'Positionnement, prix, fenêtres de contexte et dates de coupure proviennent de la documentation des modèles d\'Anthropic, d\'OpenAI et de Google. Les chiffres de benchmark publiés par les éditeurs reposent sur des évaluations choisies par eux et ne sont pas directement comparables entre eux.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le meilleur LLM',
        faqs: [
          {
            q: 'Claude Opus 5.5 ou GPT-6 Astra : lequel est meilleur ?',
            a: 'Ils sont positionnés pour des tâches différentes, et aucun éditeur ne publie de chiffre sur le benchmark de l\'autre. Anthropic positionne Claude Opus 5.5 pour le codage agentique de longue durée et le travail de connaissance, à $4/$20 par million de tokens. OpenAI positionne GPT-6 Astra comme son modèle phare pour les tâches les plus exigeantes, à $10/$50. Testez les deux sur votre propre tâche : Opus 5.5 pour le travail agentique riche en code, Astra ou le moins cher GPT-6.1 Sol pour le travail large et exigeant.',
          },
          {
            q: 'Quelle différence entre GPT-6 Astra, Sol et Luna ?',
            a: 'Astra est le modèle phare pour les tâches les plus exigeantes ($10 en entrée / $50 en sortie par million de tokens). Sol (GPT-6.1 Sol) offre des performances proches d\'Astra pour le travail complexe à moindre coût ($2/$10). Luna est le modèle efficace pour les tâches ciblées à gros volume ($0,10/$0,50). Les trois ont une fenêtre de contexte de 1,05M de tokens. Si vous payez au token, la voie économe consiste à commencer par Sol et à passer à Astra seulement là où Sol ne suffit pas.',
          },
          {
            q: 'Quel est le meilleur LLM local avec seulement 8 Go de VRAM ?',
            a: 'qwen2.5-coder:7b, 4,7 Go de téléchargement, pour le code, ou llama3.2:3b à 2,0 Go pour un usage général avec de la marge. Ce sont des tailles de téléchargement et non des besoins en VRAM : prévoyez quelques Go au-dessus pour votre fenêtre de contexte. Une carte de 8 Go accueille les deux confortablement.',
          },
          {
            q: 'Comment Gemini 4 Argon se compare-t-il aux deux autres ?',
            a: 'Gemini 4 Argon est le nouveau modèle phare de Google, qui le décrit comme sa prochaine ère d\'intelligence de pointe, proposé aux abonnés Google AI Pro et Ultra. La page des modèles de Google n\'indique pas de date de coupure, et cette page ne le compare pas par benchmarks. Gemini 3.1 Pro, le modèle phare précédent, est une génération antérieure. Voir notre <a href="/fr/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guide du framework CO-STAR</a> pour de meilleures sorties de n\'importe quel modèle cloud.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-ja.webp',
    title: '現在最良のLLMは何ですか？',
    seoTitle: '2026年最高のLLM | Prompt Bites | PromptQuorum',
    metaDescription: 'クラウドのコーディング：Claude Opus 5.5。最上位：GPT-6 Astra、バランス型：GPT-6.1 Sol。Google：Gemini 4 Argon。ローカル：qwen3.5:9b。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: '現在のクラウド向けフラッグシップは、それぞれ得意な用途が異なります。Claude Opus 5.5は、Anthropicが長時間のエージェント型コーディングとナレッジワーク向けに位置づけるモデルです。GPT-6 AstraはOpenAIの最も負荷の高い作業向けフラッグシップ、GPT-6.1 SolはAstraに近い性能をより低コストで提供し、GPT-6 Lunaは大量処理向けです。Gemini 4 ArgonはGoogleの新フラッグシップで、Google AI ProおよびUltraの加入者が利用できます。',
        bullets: [
          'クラウドのコーディング：Claude Opus 5.5 — 長時間のエージェント型コーディング向け',
          'OpenAI：GPT-6 Astra（最上位）、GPT-6.1 Sol（バランス型）、GPT-6 Luna（大量処理）',
          'Google：Gemini 4 Argon — Google AI Pro／Ultra向けの新フラッグシップ',
          'ローカル：qwen3.5:9b — ダウンロード6.6 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '全作業で勝つ単一のLLMはありません — Claude Opus 5.5はエージェント型コーディング、GPT-6 Astraは最も負荷の高い作業向けで、Gemini 4 ArgonはGoogleのフラッグシップです',
          'フラッグシップは入れ替わりました。Claude Opus 5、GPT-5.6、Gemini 3.1 Proは前世代となり、それらに基づく比較は古くなっています',
          'GPT-6はファミリーです：Astra（100万トークンあたり$10／$50）が最上位、Sol（$2／$10）がバランス型、Luna（$0.10／$0.50）がコスト最適化型です',
          'ローカルではqwen3.5:9b（6.6 GB）が汎用を、qwen2.5-coder:7b（4.7 GB）がコーディングを担います。いずれも多くの記事が前提とするハードウェアよりはるかに軽量です',
          'クラウドモデルはAPIキーが必要でトークン単位の費用がかかりますが、ローカルモデルはハードウェア購入後は無償で動きます',
        ],
      },
      body1: {
        title: '最良のLLMは用途で決まる — その地図',
        content: [
          '<strong>各社は段階的なラインアップを提供しており、最適な選択は作業によって変わります。長時間のエージェント型コーディングにはClaude Opus 5.5、負荷の高い汎用作業にはGPT-6 AstraまたはGPT-6.1 Sol、Google AI ProまたはUltraをお持ちならGemini 4 Argonです。</strong>以下では、それぞれが向く場面とワークフロー別の選び方を示します。',
          'このページはフラッグシップをベンチマークスコアで順位付けしません。各社は自社で選んだ評価で結果を公表しているため、数値は他社と直接比較できず、Claude Opus 5、GPT-5.6 Sol、Gemini 3.1 Proの過去のスコアも後継モデルには引き継げません。各社のドキュメントが示しているのは、位置づけ、価格、コンテキストウィンドウ、知識カットオフです。',
          'Anthropicは、Claude Opus 5.5を長時間のエージェント型コーディングとナレッジワーク向けに位置づけ、入力100万トークンあたり$4、出力100万トークンあたり$20、コンテキストウィンドウは100万トークンです。OpenAIはGPT-6 Astraを$10/$50、GPT-6.1 Solを$2/$10、GPT-6 Lunaを$0.10/$0.50で掲載しており、いずれもコンテキストウィンドウは105万トークンです。GoogleはGemini 4 Argonを次世代のフロンティア知能と説明しており、知識カットオフは公表していません。コストが決定的な制約なら、Astraではなく、GPT-6.1 SolまたはGPT-6 Lunaを他社のフラッグシップと比較してください。',
        ],
        columns: ['用途', '最良のLLM', '理由'],
        rows: [
          { '用途': 'コーディング／長時間のエージェント', '最良のLLM': 'Claude Opus 5.5', '理由': 'エージェント型コーディング向け。$4/$20（100万トークン）' },
          { '用途': '最も負荷の高い作業', '最良のLLM': 'GPT-6 Astra', '理由': 'OpenAIのフラッグシップ。$10/$50（100万トークン）' },
          { '用途': 'コストと品質のバランス', '最良のLLM': 'GPT-6.1 Sol', '理由': 'Astraに近い性能。$2/$10（100万トークン）' },
          { '用途': '大量処理・費用重視', '最良のLLM': 'GPT-6 Luna', '理由': '効率重視の層。$0.10/$0.50（100万トークン）' },
          { '用途': 'Google AI Pro／Ultra利用者', '最良のLLM': 'Gemini 4 Argon', '理由': 'Googleの新フラッグシップモデル' },
          { '用途': 'ローカル／オフライン汎用', '最良のLLM': 'qwen3.5:9b', '理由': 'ダウンロード6.6 GB。OllamaのQwen3.6は18 GBから' },
          { '用途': 'ローカル／オフラインのコーディング', '最良のLLM': 'qwen2.5-coder:7b', '理由': 'ダウンロード4.7 GB、8 GBのカードで動作' },
        ],
      },
      body2: {
        title: 'レビューを50本読まずに選ぶ方法',
        content: [
          '<strong>制約から始めてください。</strong>予算、プライバシー、レイテンシ、能力のどれでしょうか。最も厳しい制約を先に満たすモデルを選びます。プライバシーが制約なら、クラウドの旗艦はいずれも該当せず、問いは「どのローカルモデルが自分のカードに載るか」に変わります。',
          '<strong>実際の作業で2つのモデルを試してください。</strong>公表されたベンチマークはあなたの用途を予測しません。しかも1年前より事情は厳しく、3社は3つの異なる評価で報告しているため、順位づけできる同一指標が存在しません。クラウドは無料のAPI枠を、ローカルはOllamaを使ってください。',
          '<strong>確認は毎月ではなく四半期ごとに。</strong>各社はフラッグシップを一斉に入れ替える傾向があります。Claude Opus 5、GPT-5.6、Gemini 3.1 Proは、いずれも公開後により新しいモデルに置き換わりました。入れ替わりの前に書かれた比較は、少し古いのではなく、丸ごと一世代遅れです。',
        ],
        callouts: [{ type: 'info', text: '位置づけ、価格、コンテキストウィンドウ、カットオフは、Anthropic、OpenAI、Googleそれぞれのモデルドキュメントに基づきます。各社が公表するベンチマーク数値は自社で選んだ評価によるもので、相互に直接比較できません。' }],
      },
      faq: {
        id: 'faq',
        title: '最良のLLMに関するクイックアンサー',
        faqs: [
          {
            q: 'Claude Opus 5.5とGPT-6 Astraはどちらが優れていますか？',
            a: '用途の位置づけが異なり、どちらの企業も相手のベンチマークでの数値を公表していません。Anthropicは、Claude Opus 5.5を長時間のエージェント型コーディングとナレッジワーク向けに、100万トークンあたり$4/$20で位置づけています。OpenAIは、GPT-6 Astraを最も負荷の高い作業向けのフラッグシップとして$10/$50で位置づけています。ご自身の作業で両方を試してください。コード中心のエージェント作業にはOpus 5.5、幅広く負荷の高い作業にはAstraか、より安価なGPT-6.1 Solが候補です。',
          },
          {
            q: 'GPT-6 Astra、Sol、Lunaの違いは何ですか？',
            a: 'Astraは最も負荷の高い作業向けのフラッグシップです（100万トークンあたり入力$10／出力$50）。Sol（GPT-6.1 Sol）は複雑な作業でAstraに近い性能をより低コストで提供します（$2/$10）。Lunaは特定用途の大量処理向けの効率的なモデルです（$0.10/$0.50）。3つともコンテキストウィンドウは105万トークンです。トークン課金で使うなら、まずSolから始め、Solで足りない場面だけAstraに上げるのがコストを抑える進め方です。',
          },
          {
            q: 'VRAMが8 GBしかない場合、最適なローカルLLMは何ですか？',
            a: 'コーディングにはダウンロード4.7 GBのqwen2.5-coder:7b、汎用には2.0 GBのllama3.2:3bが余裕をもって動きます。これらはVRAM要件ではなくダウンロードサイズなので、コンテキストウィンドウのぶん数GB多めに見てください。8 GBのカードなら両方とも快適に扱えます。',
          },
          {
            q: 'Gemini 4 Argonは他の2つと比べてどうですか？',
            a: 'Gemini 4 ArgonはGoogleの新フラッグシップで、Googleは次世代のフロンティア知能と説明しており、Google AI ProおよびUltraの加入者が利用できます。Googleのモデルページには知識カットオフが記載されておらず、このページではベンチマークによる比較も行いません。以前のフラッグシップであるGemini 3.1 Proは前世代です。クラウドモデルからよりよい出力を得るコツは<a href="/ja/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STARフレームワークガイド</a>をご覧ください。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-es.webp',
    title: '¿Cuál es el mejor LLM ahora mismo?',
    seoTitle: 'Mejores modelos LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Código en la nube: Claude Opus 5.5. Gama alta: GPT-6 Astra; equilibrado: GPT-6.1 Sol. Google: Gemini 4 Argon. Local: qwen3.5:9b.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5.5', 'GPT-6 Astra', 'Gemini 4 Argon'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios que comparan los mejores LLM disponibles en la nube y en local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM ahora mismo?',
        answer: 'Los modelos insignia actuales en la nube apuntan cada uno a un trabajo distinto. Claude Opus 5.5 es la opción de Anthropic para programación agéntica de larga duración y trabajo del conocimiento. GPT-6 Astra es el modelo insignia de OpenAI para las tareas más exigentes, GPT-6.1 Sol ofrece un rendimiento cercano al de Astra a menor coste y GPT-6 Luna cubre tareas de alto volumen. Gemini 4 Argon es el nuevo modelo insignia de Google, disponible para suscriptores de Google AI Pro y Ultra. En local, qwen3.5:9b son 6,6 GB de descarga.',
        bullets: [
          'Código en la nube: Claude Opus 5.5 — pensado para programación agéntica de larga duración',
          'OpenAI: GPT-6 Astra (gama alta), GPT-6.1 Sol (equilibrado), GPT-6 Luna (alto volumen)',
          'Google: Gemini 4 Argon — nuevo modelo insignia para Google AI Pro y Ultra',
          'Local: qwen3.5:9b — 6,6 GB de descarga',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ningún LLM gana todas las tareas — Claude Opus 5.5 apunta a la programación agéntica, GPT-6 Astra a las tareas más exigentes y Gemini 4 Argon es el modelo insignia de Google',
          'Los modelos insignia han cambiado: Claude Opus 5, GPT-5.6 y Gemini 3.1 Pro son ya generaciones anteriores, así que cualquier comparación basada en ellos está desactualizada',
          'GPT-6 es una familia: Astra ($10 / $50 por millón de tokens) es la gama alta, Sol ($2 / $10) la equilibrada y Luna ($0,10 / $0,50) la optimizada en coste',
          'En local, qwen3.5:9b (6,6 GB) cubre el trabajo general y qwen2.5-coder:7b (4,7 GB) el código — ambos muy por debajo del hardware que suponen la mayoría de las guías',
          'Los modelos en la nube requieren claves API y cuestan por token; los locales se ejecutan gratis tras comprar el hardware',
        ],
      },
      body1: {
        title: 'El mejor LLM depende de la tarea — este es el mapa',
        content: [
          '<strong>Cada proveedor ofrece ahora una gama escalonada, y la elección correcta depende de la tarea. Claude Opus 5.5 para programación agéntica de larga duración, GPT-6 Astra o GPT-6.1 Sol para trabajo general exigente y Gemini 4 Argon si tienes un plan Google AI Pro o Ultra.</strong> A continuación: cuándo encaja cada uno y cuál elegir según tu flujo de trabajo.',
          'Esta página no clasifica los modelos insignia por puntuaciones de benchmarks. Los proveedores publican resultados en evaluaciones que eligen ellos mismos, por lo que las cifras no son comparables entre proveedores, y las puntuaciones anteriores de Claude Opus 5, GPT-5.6 Sol y Gemini 3.1 Pro no se trasladan a sus sucesores. Lo que sí indica la documentación de cada proveedor es el posicionamiento, el precio, la ventana de contexto y el corte de conocimiento.',
          'Anthropic posiciona Claude Opus 5.5 para programación agéntica de larga duración y trabajo del conocimiento, a $4 por millón de tokens de entrada y $20 por millón de tokens de salida, con una ventana de contexto de 1M de tokens. OpenAI lista GPT-6 Astra a $10/$50, GPT-6.1 Sol a $2/$10 y GPT-6 Luna a $0,10/$0,50, cada uno con una ventana de contexto de 1,05M de tokens. Google describe Gemini 4 Argon como su próxima era de inteligencia de frontera y no ha publicado un corte de conocimiento para él. Si el coste es tu restricción decisiva, compara GPT-6.1 Sol o GPT-6 Luna con un modelo insignia de la competencia, no Astra.',
        ],
        columns: ['Caso de uso', 'Mejor LLM', 'Por qué'],
        rows: [
          { 'Caso de uso': 'Código / agentes de larga duración', 'Mejor LLM': 'Claude Opus 5.5', 'Por qué': 'Pensado para código agéntico; $4/$20 por MTok' },
          { 'Caso de uso': 'Tareas más exigentes', 'Mejor LLM': 'GPT-6 Astra', 'Por qué': 'Modelo insignia de OpenAI; $10/$50 por MTok' },
          { 'Caso de uso': 'Equilibrio coste-calidad', 'Mejor LLM': 'GPT-6.1 Sol', 'Por qué': 'Cerca de Astra; $2/$10 por MTok' },
          { 'Caso de uso': 'Alto volumen, sensible al coste', 'Mejor LLM': 'GPT-6 Luna', 'Por qué': 'Nivel eficiente; $0,10/$0,50 por MTok' },
          { 'Caso de uso': 'Usuarios de Google AI Pro / Ultra', 'Mejor LLM': 'Gemini 4 Argon', 'Por qué': 'Nuevo modelo insignia de Google' },
          { 'Caso de uso': 'Local / sin conexión general', 'Mejor LLM': 'qwen3.5:9b', 'Por qué': '6,6 GB de descarga; Qwen3.6 en Ollama empieza en 18 GB' },
          { 'Caso de uso': 'Local / sin conexión código', 'Mejor LLM': 'qwen2.5-coder:7b', 'Por qué': '4,7 GB de descarga, funciona en una tarjeta de 8 GB' },
        ],
      },
      body2: {
        title: 'Cómo elegir sin leer 50 análisis',
        content: [
          '<strong>Empieza por la restricción.</strong> ¿Presupuesto, privacidad, latencia o capacidad? Elige el modelo que resuelva primero tu restricción más dura. Si la restricción es la privacidad, ningún buque insignia en la nube califica y la pregunta pasa a ser qué modelo local cabe en tu tarjeta.',
          '<strong>Prueba dos modelos con tu tarea real.</strong> Los benchmarks publicados no predicen tu caso de uso, y eso es más cierto ahora que hace un año: los tres proveedores informan sobre tres evaluaciones distintas, así que no existe una cifra equiparable con la que ordenarlos. Usa los niveles API gratuitos para la nube y Ollama para lo local.',
          '<strong>Revisa cada trimestre, no cada mes.</strong> Los proveedores reemplazan sus modelos insignia por oleadas: Claude Opus 5, GPT-5.6 y Gemini 3.1 Pro fueron sustituidos cada uno por un modelo más reciente tras su lanzamiento. Una comparación escrita antes de una oleada queda desactualizada por una generación completa, no solo un poco anticuada.',
        ],
        callouts: [{ type: 'info', text: 'El posicionamiento, los precios, las ventanas de contexto y los cortes proceden de la documentación de modelos de Anthropic, OpenAI y Google. Las cifras de benchmarks que publican los proveedores usan evaluaciones elegidas por ellos mismos y no son directamente comparables entre sí.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre el mejor LLM',
        faqs: [
          {
            q: '¿Es mejor Claude Opus 5.5 o GPT-6 Astra?',
            a: 'Están posicionados para trabajos distintos, y ningún proveedor publica una cifra en los benchmarks del otro. Anthropic posiciona Claude Opus 5.5 para programación agéntica de larga duración y trabajo del conocimiento, a $4/$20 por millón de tokens. OpenAI posiciona GPT-6 Astra como su modelo insignia para las tareas más exigentes, a $10/$50. Prueba ambos con tu propia tarea: Opus 5.5 para trabajo agéntico con mucho código, Astra o el más económico GPT-6.1 Sol para trabajo amplio y exigente.',
          },
          {
            q: '¿Cuál es la diferencia entre GPT-6 Astra, Sol y Luna?',
            a: 'Astra es el modelo insignia para las tareas más exigentes ($10 de entrada / $50 de salida por millón de tokens). Sol (GPT-6.1 Sol) ofrece un rendimiento cercano al de Astra para trabajo complejo a menor coste ($2/$10). Luna es el modelo eficiente para tareas enfocadas y de alto volumen ($0,10/$0,50). Los tres tienen una ventana de contexto de 1,05M de tokens. Si pagas por token, lo prudente en costes es empezar con Sol y pasar a Astra solo donde Sol se quede corto.',
          },
          {
            q: '¿Cuál es el mejor LLM local si solo tengo 8 GB de VRAM?',
            a: 'qwen2.5-coder:7b con 4,7 GB de descarga para código, o llama3.2:3b con 2,0 GB para uso general con margen de sobra. Son tamaños de descarga, no requisitos de VRAM, así que deja un par de GB por encima para tu ventana de contexto. Una tarjeta de 8 GB maneja ambos con holgura.',
          },
          {
            q: '¿Cómo se compara Gemini 4 Argon con los otros dos?',
            a: 'Gemini 4 Argon es el nuevo modelo insignia de Google, que lo describe como su próxima era de inteligencia de frontera y está disponible para suscriptores de Google AI Pro y Ultra. La página de modelos de Google no indica un corte de conocimiento, y esta página no lo compara mediante benchmarks. Gemini 3.1 Pro, el modelo insignia anterior, es una generación previa. Consulta nuestra <a href="/es/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guía del framework CO-STAR</a> para obtener mejores salidas de cualquier modelo en la nube.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-pt.webp',
    title: 'Qual é o melhor LLM agora?',
    seoTitle: 'Melhores modelos LLM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Código na nuvem: Claude Opus 5.5. Topo de linha: GPT-6 Astra; equilibrado: GPT-6.1 Sol. Google: Gemini 4 Argon. Local: qwen3.5:9b.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5.5', 'GPT-6 Astra', 'Gemini 4 Argon'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuários que comparam os melhores LLMs disponíveis na nuvem e localmente',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM agora?',
        answer: 'Os modelos principais atuais na nuvem miram, cada um, um trabalho diferente. O Claude Opus 5.5 é a escolha da Anthropic para programação agêntica de longa duração e trabalho de conhecimento. O GPT-6 Astra é o modelo principal da OpenAI para as tarefas mais exigentes, o GPT-6.1 Sol oferece desempenho próximo ao do Astra a custo menor, e o GPT-6 Luna cobre tarefas de alto volume. O Gemini 4 Argon é o novo modelo principal do Google, disponível para assinantes do Google AI Pro e Ultra. No local, qwen3.5:9b tem 6,6 GB de download.',
        bullets: [
          'Código na nuvem: Claude Opus 5.5 — feito para programação agêntica de longa duração',
          'OpenAI: GPT-6 Astra (topo de linha), GPT-6.1 Sol (equilibrado), GPT-6 Luna (alto volume)',
          'Google: Gemini 4 Argon — novo modelo principal para Google AI Pro e Ultra',
          'Local: qwen3.5:9b — 6,6 GB de download',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Nenhum LLM vence todas as tarefas — o Claude Opus 5.5 mira programação agêntica, o GPT-6 Astra as tarefas mais exigentes, e o Gemini 4 Argon é o modelo principal do Google',
          'Os modelos principais mudaram: Claude Opus 5, GPT-5.6 e Gemini 3.1 Pro agora são gerações anteriores, então qualquer comparação baseada neles está desatualizada',
          'O GPT-6 é uma família: o Astra ($10 / $50 por milhão de tokens) é o topo de linha, o Sol ($2 / $10) o nível equilibrado e o Luna ($0,10 / $0,50) o otimizado em custo',
          'No local, qwen3.5:9b (6,6 GB) cobre o trabalho geral e qwen2.5-coder:7b (4,7 GB) cobre código — ambos bem abaixo do hardware que a maioria dos guias pressupõe',
          'Modelos na nuvem exigem chaves de API e custam por token; modelos locais rodam de graça depois que o hardware é comprado',
        ],
      },
      body1: {
        title: 'O melhor LLM depende da tarefa — eis o mapa',
        content: [
          '<strong>Cada fornecedor agora entrega uma linha em camadas, e a escolha certa depende da tarefa. Claude Opus 5.5 para programação agêntica de longa duração, GPT-6 Astra ou GPT-6.1 Sol para trabalho geral exigente e Gemini 4 Argon se você tem um plano Google AI Pro ou Ultra.</strong> A seguir: quando cada um se encaixa e qual escolher conforme o seu fluxo de trabalho.',
          'Esta página não classifica os modelos principais por pontuação em benchmarks. Os fornecedores publicam resultados em avaliações que eles mesmos escolhem, então os números não são comparáveis entre fornecedores, e as pontuações anteriores de Claude Opus 5, GPT-5.6 Sol e Gemini 3.1 Pro não valem para os sucessores. O que a documentação de cada fornecedor informa é o posicionamento, o preço, a janela de contexto e o corte de conhecimento.',
          'A Anthropic posiciona o Claude Opus 5.5 para programação agêntica de longa duração e trabalho de conhecimento, a $4 por milhão de tokens de entrada e $20 por milhão de tokens de saída, com janela de contexto de 1M de tokens. A OpenAI lista o GPT-6 Astra a $10/$50, o GPT-6.1 Sol a $2/$10 e o GPT-6 Luna a $0,10/$0,50, cada um com janela de contexto de 1,05M de tokens. O Google descreve o Gemini 4 Argon como a sua próxima era de inteligência de fronteira e não publicou um corte de conhecimento para ele. Se o custo é a sua restrição decisiva, compare o GPT-6.1 Sol ou o GPT-6 Luna com um modelo principal concorrente, não o Astra.',
        ],
        columns: ['Caso de uso', 'Melhor LLM', 'Por quê'],
        rows: [
          { 'Caso de uso': 'Código / agentes de longa duração', 'Melhor LLM': 'Claude Opus 5.5', 'Por quê': 'Feito para código agêntico; $4/$20 por MTok' },
          { 'Caso de uso': 'Tarefas mais exigentes', 'Melhor LLM': 'GPT-6 Astra', 'Por quê': 'Modelo principal da OpenAI; $10/$50 por MTok' },
          { 'Caso de uso': 'Equilíbrio entre custo e qualidade', 'Melhor LLM': 'GPT-6.1 Sol', 'Por quê': 'Perto do Astra; $2/$10 por MTok' },
          { 'Caso de uso': 'Alto volume, sensível a custo', 'Melhor LLM': 'GPT-6 Luna', 'Por quê': 'Nível eficiente; $0,10/$0,50 por MTok' },
          { 'Caso de uso': 'Usuários do Google AI Pro / Ultra', 'Melhor LLM': 'Gemini 4 Argon', 'Por quê': 'Novo modelo principal do Google' },
          { 'Caso de uso': 'Local / offline geral', 'Melhor LLM': 'qwen3.5:9b', 'Por quê': '6,6 GB de download; o Qwen3.6 no Ollama começa em 18 GB' },
          { 'Caso de uso': 'Local / offline código', 'Melhor LLM': 'qwen2.5-coder:7b', 'Por quê': '4,7 GB de download, roda numa placa de 8 GB' },
        ],
      },
      body2: {
        title: 'Como escolher sem ler 50 análises',
        content: [
          '<strong>Comece pela restrição.</strong> Orçamento, privacidade, latência ou capacidade? Escolha o modelo que resolve primeiro a sua restrição mais dura. Se a restrição for privacidade, nenhum carro-chefe da nuvem se qualifica e a pergunta passa a ser qual modelo local cabe na sua placa.',
          '<strong>Teste dois modelos na sua tarefa real.</strong> Benchmarks publicados não preveem o seu caso de uso, e isso vale mais hoje do que há um ano: os três fornecedores reportam sobre três avaliações diferentes, então não existe número equivalente para ordená-los. Use as camadas gratuitas de API para a nuvem e o Ollama para o local.',
          '<strong>Reavalie a cada trimestre, não todo mês.</strong> Os fornecedores substituem seus modelos principais em ondas: Claude Opus 5, GPT-5.6 e Gemini 3.1 Pro foram, cada um, substituídos por um modelo mais novo depois do lançamento. Uma comparação escrita antes de uma onda fica uma geração inteira defasada, e não apenas um pouco antiga.',
        ],
        callouts: [{ type: 'info', text: 'Posicionamento, preços, janelas de contexto e cortes vêm da documentação de modelos da Anthropic, da OpenAI e do Google. Os números de benchmark publicados pelos fornecedores usam avaliações escolhidas por eles mesmos e não são diretamente comparáveis entre si.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre o melhor LLM',
        faqs: [
          {
            q: 'O Claude Opus 5.5 ou o GPT-6 Astra é melhor?',
            a: 'Eles são posicionados para trabalhos diferentes, e nenhum fornecedor publica um número no benchmark do outro. A Anthropic posiciona o Claude Opus 5.5 para programação agêntica de longa duração e trabalho de conhecimento, a $4/$20 por milhão de tokens. A OpenAI posiciona o GPT-6 Astra como seu modelo principal para as tarefas mais exigentes, a $10/$50. Teste os dois na sua própria tarefa: Opus 5.5 para trabalho agêntico com muito código, Astra ou o GPT-6.1 Sol, mais barato, para trabalho amplo e exigente.',
          },
          {
            q: 'Qual é a diferença entre GPT-6 Astra, Sol e Luna?',
            a: 'O Astra é o modelo principal para as tarefas mais exigentes ($10 de entrada / $50 de saída por milhão de tokens). O Sol (GPT-6.1 Sol) entrega desempenho próximo ao do Astra em trabalho complexo a custo menor ($2/$10). O Luna é o modelo eficiente para tarefas focadas e de alto volume ($0,10/$0,50). Os três têm janela de contexto de 1,05M de tokens. Se você paga por token, o caminho econômico é começar pelo Sol e subir para o Astra só onde o Sol não bastar.',
          },
          {
            q: 'Qual o melhor LLM local se eu só tenho 8 GB de VRAM?',
            a: 'qwen2.5-coder:7b com 4,7 GB de download para código, ou llama3.2:3b com 2,0 GB para uso geral com folga. Esses são tamanhos de download, não requisitos de VRAM, então reserve alguns GB acima deles para a sua janela de contexto. Uma placa de 8 GB lida com ambos com conforto.',
          },
          {
            q: 'Como o Gemini 4 Argon se compara aos outros dois?',
            a: 'O Gemini 4 Argon é o novo modelo principal do Google, que o descreve como a sua próxima era de inteligência de fronteira, disponível para assinantes do Google AI Pro e Ultra. A página de modelos do Google não informa um corte de conhecimento, e esta página não o compara por benchmarks. O Gemini 3.1 Pro, o modelo principal anterior, é uma geração anterior. Veja nosso <a href="/pt/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guia do framework CO-STAR</a> para obter melhores saídas de qualquer modelo na nuvem.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-zh.webp',
    title: '当前最好的 LLM 是什么？',
    seoTitle: '2026年最佳LLM模型 | Prompt Bites | PromptQuorum',
    metaDescription: '云端编程：Claude Opus 5.5。最高档：GPT-6 Astra；均衡：GPT-6.1 Sol。Google：Gemini 4 Argon。本地：qwen3.5:9b。',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '当前的云端旗舰模型各自面向不同任务。Claude Opus 5.5 是 Anthropic 面向长时间运行的智能体编程和知识工作的选择。GPT-6 Astra 是 OpenAI 面向最高要求任务的旗舰，GPT-6.1 Sol 以更低成本提供接近 Astra 的性能，GPT-6 Luna 适合大批量任务。Gemini 4 Argon 是 Google 的新旗舰，面向 Google AI Pro 和 Ultra 订阅用户开放。',
        bullets: [
          '云端编程：Claude Opus 5.5 — 面向长时间运行的智能体编程',
          'OpenAI：GPT-6 Astra（最高档）、GPT-6.1 Sol（均衡）、GPT-6 Luna（大批量）',
          'Google：Gemini 4 Argon — 面向 Google AI Pro 和 Ultra 的新旗舰',
          '本地：qwen3.5:9b — 下载 6.6 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '没有哪个 LLM 能赢下所有任务 — Claude Opus 5.5 面向智能体编程，GPT-6 Astra 面向最高要求的任务，Gemini 4 Argon 是 Google 的旗舰',
          '旗舰已经更替：Claude Opus 5、GPT-5.6 和 Gemini 3.1 Pro 现在都是上一代，基于它们的任何比较都已过时',
          'GPT-6 是一个系列：Astra（每百万 token $10 / $50）是最高档，Sol（$2 / $10）是均衡档，Luna（$0.10 / $0.50）是成本优化档',
          '本地方面，qwen3.5:9b（6.6 GB）覆盖通用工作，qwen2.5-coder:7b（4.7 GB）覆盖编程——两者都远低于多数指南所假设的硬件',
          '云端模型需要 API 密钥并按令牌计费；本地模型在购置硬件后可免费运行',
        ],
      },
      body1: {
        title: '最好的 LLM 取决于任务——这是一张地图',
        content: [
          '<strong>各家厂商现在都提供分档产品线，正确的选择取决于任务。长时间运行的智能体编程选 Claude Opus 5.5，高要求的通用工作选 GPT-6 Astra 或 GPT-6.1 Sol，如果你有 Google AI Pro 或 Ultra 订阅则可选 Gemini 4 Argon。</strong>下面说明各自适合的场景，以及按工作流程如何选择。',
          '本页不按基准测试分数给旗舰排名。各厂商在自己选定的评测上发布结果，数字无法跨厂商比较，Claude Opus 5、GPT-5.6 Sol 和 Gemini 3.1 Pro 此前的分数也不能套用到它们的后继型号。厂商文档明确给出的是定位、价格、上下文窗口和知识截止日期。',
          'Anthropic 将 Claude Opus 5.5 定位为面向长时间运行的智能体编程和知识工作，输入每百万 token $4、输出每百万 token $20，上下文窗口为 1M token。OpenAI 列出 GPT-6 Astra 为 $10/$50、GPT-6.1 Sol 为 $2/$10、GPT-6 Luna 为 $0.10/$0.50，上下文窗口均为 1.05M token。Google 将 Gemini 4 Argon 描述为其下一代前沿智能，且未公布其知识截止日期。如果成本是你的决定性约束，请将 GPT-6.1 Sol 或 GPT-6 Luna 与竞争对手的旗舰比较，而不是 Astra。',
        ],
        columns: ['使用场景', '最佳 LLM', '原因'],
        rows: [
          { '使用场景': '编程 / 长时间运行的智能体', '最佳 LLM': 'Claude Opus 5.5', '原因': '面向智能体编程；$4/$20 每 MTok' },
          { '使用场景': '最高要求的任务', '最佳 LLM': 'GPT-6 Astra', '原因': 'OpenAI 旗舰；$10/$50 每 MTok' },
          { '使用场景': '成本与质量均衡', '最佳 LLM': 'GPT-6.1 Sol', '原因': '接近 Astra；$2/$10 每 MTok' },
          { '使用场景': '大批量、成本敏感', '最佳 LLM': 'GPT-6 Luna', '原因': '高效档；$0.10/$0.50 每 MTok' },
          { '使用场景': 'Google AI Pro / Ultra 用户', '最佳 LLM': 'Gemini 4 Argon', '原因': 'Google 新旗舰模型' },
          { '使用场景': '本地 / 离线通用', '最佳 LLM': 'qwen3.5:9b', '原因': '下载 6.6 GB；Ollama 中的 Qwen3.6 从 18 GB 起' },
          { '使用场景': '本地 / 离线编程', '最佳 LLM': 'qwen2.5-coder:7b', '原因': '下载 4.7 GB，8 GB 显卡即可运行' },
        ],
      },
      body2: {
        title: '不读 50 篇评测该如何选择',
        content: [
          '<strong>从约束出发。</strong>预算、隐私、延迟还是能力？先选能解开你最硬约束的那个模型。如果约束是隐私，那么没有任何云端旗舰符合条件，问题就变成了哪款本地模型装得进你的显卡。',
          '<strong>用你真实的任务测试两个模型。</strong>公开基准无法预测你的用例，而且今天比一年前更是如此：三家厂商各自报告三种不同的评测，因此不存在可用于排序的同口径数字。云端用免费 API 额度，本地用 Ollama。',
          '<strong>每季度复查，而不是每月。</strong>厂商往往成批更换旗舰：Claude Opus 5、GPT-5.6 和 Gemini 3.1 Pro 在发布后都被更新的模型取代。在一轮更替之前写成的比较，是整整落后一代，而不是略显陈旧。',
        ],
        callouts: [{ type: 'info', text: '定位、价格、上下文窗口和截止日期来自 Anthropic、OpenAI 和 Google 各自的模型文档。厂商发布的基准测试数字基于各自选定的评测，彼此之间无法直接比较。' }],
      },
      faq: {
        id: 'faq',
        title: '关于当前最佳 LLM 的快速解答',
        faqs: [
          {
            q: 'Claude Opus 5.5 和 GPT-6 Astra 哪个更好？',
            a: '两者定位于不同的任务，且双方都没有公布对方基准测试上的数字。Anthropic 将 Claude Opus 5.5 定位为面向长时间运行的智能体编程和知识工作，价格为每百万 token $4/$20。OpenAI 将 GPT-6 Astra 定位为面向最高要求任务的旗舰，价格为 $10/$50。请用你自己的任务测试两者：代码密集的智能体工作选 Opus 5.5，广泛的高要求工作选 Astra 或更便宜的 GPT-6.1 Sol。',
          },
          {
            q: 'GPT-6 Astra、Sol 和 Luna 有什么区别？',
            a: 'Astra 是面向最高要求任务的旗舰（每百万 token 输入 $10 / 输出 $50）。Sol（GPT-6.1 Sol）以更低成本为复杂工作提供接近 Astra 的性能（$2/$10）。Luna 是面向专注型大批量任务的高效模型（$0.10/$0.50）。三者的上下文窗口均为 1.05M token。如果按 token 付费，控制成本的做法是先用 Sol，只在 Sol 不够用的地方再升级到 Astra。',
          },
          {
            q: '只有 8 GB 显存时最好的本地 LLM 是哪个？',
            a: '编程选下载 4.7 GB 的 qwen2.5-coder:7b，通用选 2.0 GB 的 llama3.2:3b，都很宽裕。这些是下载体积而非显存需求，因此请在其之上再留出几 GB 给上下文窗口。8 GB 显卡运行两者都很从容。',
          },
          {
            q: 'Gemini 4 Argon 与另外两个相比如何？',
            a: 'Gemini 4 Argon 是 Google 的新旗舰，Google 将其描述为下一代前沿智能，面向 Google AI Pro 和 Ultra 订阅用户开放。Google 的模型页面未给出知识截止日期，本页也不按基准测试对其比较。此前的旗舰 Gemini 3.1 Pro 属于上一代。想从任何云端模型获得更好输出，请参阅我们的 <a href="/zh/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR 提示框架指南</a>。',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-ar.webp',
    title: 'ما أفضل نموذج لغوي كبير الآن؟',
    seoTitle: 'أفضل نماذج LLM لعام 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'البرمجة السحابية: Claude Opus 5.5. الفئة العليا: GPT-6 Astra؛ المتوازن: GPT-6.1 Sol. Google: Gemini 4 Argon. محليًا: qwen3.5:9b.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5.5', 'GPT-6 Astra', 'Gemini 4 Argon'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون الذين يقارنون أفضل النماذج اللغوية المتاحة سحابيًا ومحليًا',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج لغوي كبير الآن؟',
        answer: 'تستهدف النماذج الرائدة السحابية الحالية مهامّ مختلفة. Claude Opus 5.5 هو خيار Anthropic للبرمجة الوكيلية طويلة الأمد وأعمال المعرفة. GPT-6 Astra هو النموذج الرائد من OpenAI للمهام الأكثر تطلبًا، ويقدّم GPT-6.1 Sol أداءً قريبًا من Astra بتكلفة أقل، ويغطي GPT-6 Luna المهام كبيرة الحجم. Gemini 4 Argon هو النموذج الرائد الجديد من Google، ومتاح لمشتركي Google AI Pro وUltra. ومحليًا، حجم تنزيل qwen3.5:9b هو 6.6 غيغابايت.',
        bullets: [
          'البرمجة السحابية: Claude Opus 5.5 — مصمم للبرمجة الوكيلية طويلة الأمد',
          'OpenAI: GPT-6 Astra (الفئة العليا)، وGPT-6.1 Sol (متوازن)، وGPT-6 Luna (حجم كبير)',
          'Google: Gemini 4 Argon — النموذج الرائد الجديد لمشتركي Google AI Pro وUltra',
          'محليًا: qwen3.5:9b — تنزيل 6.6 غيغابايت',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'لا يتفوّق نموذج LLM واحد في كل المهام — Claude Opus 5.5 يستهدف البرمجة الوكيلية، وGPT-6 Astra المهام الأكثر تطلبًا، وGemini 4 Argon هو النموذج الرائد من Google',
          'تغيّرت النماذج الرائدة: أصبحت Claude Opus 5 وGPT-5.6 وGemini 3.1 Pro أجيالًا سابقة، لذا فأي مقارنة مبنية عليها قديمة',
          'GPT-6 عائلة نماذج: Astra ($10 / $50 لكل مليون رمز) هو الفئة العليا، وSol ($2 / $10) الفئة المتوازنة، وLuna ($0.10 / $0.50) الفئة المحسّنة للتكلفة',
          'محليًا يغطي qwen3.5:9b (6.6 غيغابايت) العمل العام، ويغطي qwen2.5-coder:7b (4.7 غيغابايت) البرمجة — وكلاهما دون العتاد الذي تفترضه معظم الأدلة بكثير',
          'النماذج السحابية تتطلب مفاتيح واجهة برمجية وتُحاسب على الرموز؛ أما المحلية فتعمل مجانًا بعد شراء العتاد',
        ],
      },
      body1: {
        title: 'أفضل نموذج يتوقف على المهمة — وهذه الخريطة',
        content: [
          '<strong>يقدّم كل مزوّد الآن تشكيلة متدرجة، ويعتمد الاختيار الصحيح على المهمة. Claude Opus 5.5 للبرمجة الوكيلية طويلة الأمد، وGPT-6 Astra أو GPT-6.1 Sol للأعمال العامة الصعبة، وGemini 4 Argon إن كان لديك اشتراك Google AI Pro أو Ultra.</strong> فيما يلي: متى يناسب كل نموذج، وأيّها تختار بحسب سير عملك.',
          'لا ترتّب هذه الصفحة النماذج الرائدة بحسب درجات الاختبارات المعيارية. ينشر المزوّدون نتائج على تقييمات يختارونها بأنفسهم، فلا يمكن مقارنة الأرقام بين المزوّدين، ولا تنتقل الدرجات السابقة لـ Claude Opus 5 وGPT-5.6 Sol وGemini 3.1 Pro إلى خلفائها. أما ما تذكره وثائق المزوّدين صراحةً فهو التموضع والسعر ونافذة السياق وتاريخ انقطاع المعرفة.',
          'تضع Anthropic نموذج Claude Opus 5.5 للبرمجة الوكيلية طويلة الأمد وأعمال المعرفة، بسعر $4 لكل مليون رمز إدخال و$20 لكل مليون رمز إخراج، ونافذة سياق 1M رمز. وتدرج OpenAI نموذج GPT-6 Astra بسعر $10/$50، وGPT-6.1 Sol بسعر $2/$10، وGPT-6 Luna بسعر $0.10/$0.50، ولكلٍّ منها نافذة سياق 1.05M رمز. وتصف Google نموذج Gemini 4 Argon بأنه عصرها القادم من الذكاء المتقدم ولم تنشر تاريخ انقطاع معرفة له. إن كانت التكلفة قيدك الحاسم، فقارن GPT-6.1 Sol أو GPT-6 Luna بنموذج رائد منافس، لا Astra.',
        ],
        columns: ['حالة الاستخدام', 'أفضل نموذج', 'السبب'],
        rows: [
          { 'حالة الاستخدام': 'البرمجة / وكلاء طويلو الأمد', 'أفضل نموذج': 'Claude Opus 5.5', 'السبب': 'مصمم للبرمجة الوكيلية؛ $4/$20 لكل MTok' },
          { 'حالة الاستخدام': 'المهام الأكثر تطلبًا', 'أفضل نموذج': 'GPT-6 Astra', 'السبب': 'نموذج OpenAI الرائد؛ $10/$50 لكل MTok' },
          { 'حالة الاستخدام': 'توازن التكلفة والجودة', 'أفضل نموذج': 'GPT-6.1 Sol', 'السبب': 'قريب من Astra؛ $2/$10 لكل MTok' },
          { 'حالة الاستخدام': 'حجم كبير وحساس للتكلفة', 'أفضل نموذج': 'GPT-6 Luna', 'السبب': 'فئة فعّالة؛ $0.10/$0.50 لكل MTok' },
          { 'حالة الاستخدام': 'مشتركو Google AI Pro / Ultra', 'أفضل نموذج': 'Gemini 4 Argon', 'السبب': 'نموذج Google الرائد الجديد' },
          { 'حالة الاستخدام': 'محلي / دون اتصال، عام', 'أفضل نموذج': 'qwen3.5:9b', 'السبب': 'تنزيل 6.6 غيغابايت؛ Qwen3.6 في Ollama يبدأ من 18 غيغابايت' },
          { 'حالة الاستخدام': 'محلي / دون اتصال، برمجة', 'أفضل نموذج': 'qwen2.5-coder:7b', 'السبب': 'تنزيل 4.7 غيغابايت، يعمل على بطاقة 8 غيغابايت' },
        ],
      },
      body2: {
        title: 'كيف تختار دون قراءة 50 مراجعة',
        content: [
          '<strong>ابدأ من القيد.</strong> أهو الميزانية أم الخصوصية أم زمن الاستجابة أم القدرة؟ اختر النموذج الذي يتجاوز أقسى قيودك أولًا. فإن كانت الخصوصية هي القيد، فلا يصلح أي نموذج سحابي رائد، ويصير السؤال: أي نموذج محلي يتسع في بطاقتك.',
          '<strong>اختبر نموذجين على مهمتك الحقيقية.</strong> المعايير المنشورة لا تتنبأ بحالتك، وهذا أصح اليوم منه قبل عام: فالمزوّدون الثلاثة يبلّغون عن ثلاثة تقييمات مختلفة، ولا يوجد رقم متكافئ لترتيبهم به. استخدم الطبقات المجانية للواجهات البرمجية للنماذج السحابية، وOllama للمحلية.',
          '<strong>أعد الفحص كل ربع سنة لا كل شهر.</strong> يستبدل المزوّدون نماذجهم الرائدة على دفعات: حلّ نموذج أحدث محلّ كلٍّ من Claude Opus 5 وGPT-5.6 وGemini 3.1 Pro بعد إطلاقه. والمقارنة المكتوبة قبل دفعة جديدة متأخرة جيلًا كاملًا، لا قديمة قليلًا فحسب.',
        ],
        callouts: [{ type: 'info', text: 'التموضع والأسعار ونوافذ السياق وتواريخ الانقطاع مأخوذة من وثائق النماذج لدى Anthropic وOpenAI وGoogle. أرقام الاختبارات المعيارية التي ينشرها المزوّدون مبنية على تقييمات يختارونها بأنفسهم، فلا يمكن مقارنتها ببعضها مباشرة.' }],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن أفضل نموذج لغوي',
        faqs: [
          {
            q: 'أيهما أفضل: Claude Opus 5.5 أم GPT-6 Astra؟',
            a: 'كلٌّ منهما موضوع لمهامّ مختلفة، ولا ينشر أي مزوّد رقمًا على الاختبار المعياري للآخر. تضع Anthropic نموذج Claude Opus 5.5 للبرمجة الوكيلية طويلة الأمد وأعمال المعرفة بسعر $4/$20 لكل مليون رمز. وتضع OpenAI نموذج GPT-6 Astra نموذجًا رائدًا للمهام الأكثر تطلبًا بسعر $10/$50. جرّب كليهما على مهمتك: Opus 5.5 للعمل الوكيلي الكثيف بالشيفرة، وAstra أو GPT-6.1 Sol الأرخص للأعمال الواسعة الصعبة.',
          },
          {
            q: 'ما الفرق بين GPT-6 Astra وSol وLuna؟',
            a: 'Astra هو النموذج الرائد للمهام الأكثر تطلبًا ($10 إدخال / $50 إخراج لكل مليون رمز). ويقدّم Sol (GPT-6.1 Sol) أداءً قريبًا من Astra للأعمال المعقدة بتكلفة أقل ($2/$10). أما Luna فهو النموذج الفعّال للمهام المركّزة كبيرة الحجم ($0.10/$0.50). ولكل منها نافذة سياق 1.05M رمز. إن كنت تدفع لكل رمز، فالمسار الموفّر للتكلفة هو البدء بـ Sol والانتقال إلى Astra فقط حيث لا يكفي Sol.',
          },
          {
            q: 'ما أفضل نموذج محلي إن كان لديّ 8 غيغابايت ذاكرة رسومية فقط؟',
            a: 'qwen2.5-coder:7b بحجم تنزيل 4.7 غيغابايت للبرمجة، أو llama3.2:3b بحجم 2.0 غيغابايت للاستخدام العام مع هامش وافر. وهذه أحجام تنزيل لا متطلبات ذاكرة رسومية، فاترك بضعة غيغابايت فوقها لنافذة السياق. وبطاقة 8 غيغابايت تستوعب كليهما بأريحية.',
          },
          {
            q: 'كيف يقارن Gemini 4 Argon بالنموذجين الآخرين؟',
            a: 'Gemini 4 Argon هو النموذج الرائد الجديد من Google، وتصفه بأنه عصرها القادم من الذكاء المتقدم، ومتاح لمشتركي Google AI Pro وUltra. لا تذكر صفحة نماذج Google تاريخ انقطاع معرفة، ولا تقارنه هذه الصفحة بالاختبارات المعيارية. أما Gemini 3.1 Pro، النموذج الرائد السابق، فهو جيل سابق. راجع <a href="/ar/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">دليل إطار CO-STAR</a> للحصول على مخرجات أفضل من أي نموذج سحابي.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-ko.webp',
    title: '지금 가장 좋은 LLM은 무엇입니까?',
    seoTitle: '2026년 최고의 LLM | Prompt Bites | PromptQuorum',
    metaDescription: '클라우드 코딩: Claude Opus 5.5. 최상위: GPT-6 Astra, 균형형: GPT-6.1 Sol. Google: Gemini 4 Argon. 로컬: qwen3.5:9b.',
    publishDate: '2026-05-18',
    dateModified: '2026-10-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5.5', 'GPT-6 Astra', 'Gemini 4 Argon'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '클라우드 및 로컬에서 이용 가능한 최고의 LLM을 비교하는 사용자',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    targetKeywords: ['최고의 LLM 2026', '지금 가장 좋은 AI 모델', 'Claude vs GPT 비교', '로컬 LLM 추천', 'GPT-6 Astra'],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: '지금 가장 좋은 LLM은 무엇입니까?',
        answer: '현재 클라우드 플래그십은 각각 다른 작업을 겨냥합니다. Claude Opus 5.5는 Anthropic이 장시간 실행되는 에이전트형 코딩과 지식 업무용으로 제시하는 모델입니다. GPT-6 Astra는 OpenAI의 가장 까다로운 작업용 플래그십이고, GPT-6.1 Sol은 Astra에 가까운 성능을 더 낮은 비용으로 제공하며, GPT-6 Luna는 대량 작업을 맡습니다. Gemini 4 Argon은 Google의 새 플래그십으로 Google AI Pro 및 Ultra 구독자가 이용할 수 있습니다. 로컬에서는 qwen3.5:9b가 6.6 GB 다운로드입니다.',
        bullets: [
          '클라우드 코딩: Claude Opus 5.5 — 장시간 실행되는 에이전트형 코딩용',
          'OpenAI: GPT-6 Astra(최상위), GPT-6.1 Sol(균형형), GPT-6 Luna(대량 작업)',
          'Google: Gemini 4 Argon — Google AI Pro·Ultra용 새 플래그십',
          '로컬: qwen3.5:9b — 다운로드 6.6 GB',
        ],
        updatedDate: '2026-10',
      },
    },
    schema: {
      inLanguage: 'ko',
      articleUrl: 'https://www.promptquorum.com/ko/prompt-bites/best-llm-right-now',
      breadcrumbSchema: {
        items: [
          { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
          { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
          { position: 3, name: '지금 가장 좋은 LLM은 무엇입니까?', url: 'https://www.promptquorum.com/ko/prompt-bites/best-llm-right-now' },
        ],
      },
      'proficiencyLevel': 'Intermediate',
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '모든 작업에서 앞서는 단일 LLM은 없습니다 — Claude Opus 5.5는 에이전트형 코딩, GPT-6 Astra는 가장 까다로운 작업을 겨냥하고, Gemini 4 Argon은 Google의 플래그십입니다',
          '플래그십이 바뀌었습니다. Claude Opus 5, GPT-5.6, Gemini 3.1 Pro는 이제 이전 세대이므로, 이들을 기준으로 한 비교는 낡았습니다',
          'GPT-6은 제품군입니다: Astra(100만 토큰당 $10 / $50)가 최상위, Sol($2 / $10)이 균형형, Luna($0.10 / $0.50)가 비용 최적화형입니다',
          '로컬에서는 qwen3.5:9b(6.6 GB)가 범용을, qwen2.5-coder:7b(4.7 GB)가 코딩을 담당합니다 — 둘 다 대부분의 가이드가 전제하는 하드웨어보다 훨씬 가볍습니다',
          '클라우드 모델은 API 키가 필요하고 토큰당 비용이 들지만, 로컬 모델은 하드웨어 구입 후 무료로 실행됩니다',
        ],
      },
      body1: {
        title: '최고의 LLM은 작업에 따라 다릅니다 — 지도는 이렇습니다',
        content: [
          '<strong>각 업체는 이제 단계별 라인업을 내놓으며, 올바른 선택은 작업에 따라 달라집니다. 장시간 실행되는 에이전트형 코딩에는 Claude Opus 5.5, 까다로운 범용 작업에는 GPT-6 Astra 또는 GPT-6.1 Sol, Google AI Pro나 Ultra 요금제가 있다면 Gemini 4 Argon입니다.</strong> 아래에서 각각이 맞는 상황과 워크플로별 선택 방법을 정리합니다.',
          '이 페이지는 플래그십을 벤치마크 점수로 순위 매기지 않습니다. 업체들은 스스로 고른 평가에서 결과를 발표하므로 수치를 업체 간에 비교할 수 없고, Claude Opus 5, GPT-5.6 Sol, Gemini 3.1 Pro의 이전 점수도 후속 모델에 그대로 적용되지 않습니다. 각 업체의 문서가 명시하는 것은 포지셔닝, 가격, 컨텍스트 윈도우, 지식 컷오프입니다.',
          'Anthropic은 Claude Opus 5.5를 장시간 실행되는 에이전트형 코딩과 지식 업무용으로 제시하며, 입력 100만 토큰당 $4, 출력 100만 토큰당 $20, 컨텍스트 윈도우는 1M 토큰입니다. OpenAI는 GPT-6 Astra를 $10/$50, GPT-6.1 Sol을 $2/$10, GPT-6 Luna를 $0.10/$0.50으로 게시하며, 모두 컨텍스트 윈도우는 1.05M 토큰입니다. Google은 Gemini 4 Argon을 차세대 프런티어 지능이라고 설명하며 지식 컷오프는 공개하지 않았습니다. 비용이 결정적 제약이라면 Astra가 아니라 GPT-6.1 Sol 또는 GPT-6 Luna를 경쟁사 플래그십과 비교하십시오.',
        ],
        columns: ['사용 사례', '최고의 LLM', '이유'],
        rows: [
          { '사용 사례': '코딩 / 장시간 에이전트', '최고의 LLM': 'Claude Opus 5.5', '이유': '에이전트형 코딩용; MTok당 $4/$20' },
          { '사용 사례': '가장 까다로운 작업', '최고의 LLM': 'GPT-6 Astra', '이유': 'OpenAI 플래그십; MTok당 $10/$50' },
          { '사용 사례': '비용·품질 균형', '최고의 LLM': 'GPT-6.1 Sol', '이유': 'Astra에 근접; MTok당 $2/$10' },
          { '사용 사례': '대량 작업, 비용 민감', '최고의 LLM': 'GPT-6 Luna', '이유': '효율 단계; MTok당 $0.10/$0.50' },
          { '사용 사례': 'Google AI Pro / Ultra 이용자', '최고의 LLM': 'Gemini 4 Argon', '이유': 'Google의 새 플래그십 모델' },
          { '사용 사례': '로컬 / 오프라인 범용', '최고의 LLM': 'qwen3.5:9b', '이유': '다운로드 6.6 GB; Ollama의 Qwen3.6은 18 GB부터' },
          { '사용 사례': '로컬 / 오프라인 코딩', '최고의 LLM': 'qwen2.5-coder:7b', '이유': '다운로드 4.7 GB, 8 GB 카드에서 실행' },
        ],
      },
      body2: {
        title: '리뷰 50개를 읽지 않고 고르는 법',
        content: [
          '<strong>제약에서 출발하세요.</strong> 예산, 프라이버시, 지연 시간, 성능 중 무엇입니까? 가장 강한 제약을 먼저 해소하는 모델을 고르십시오. 프라이버시가 제약이라면 어떤 클라우드 플래그십도 해당되지 않으며, 질문은 어떤 로컬 모델이 내 카드에 올라가느냐로 바뀝니다.',
          '<strong>실제 작업으로 두 모델을 시험하세요.</strong> 공개된 벤치마크는 여러분의 사용 사례를 예측하지 못하며, 이는 1년 전보다 지금 더 그렇습니다. 세 업체가 서로 다른 세 가지 평가로 보고하므로 순위를 매길 동일 기준 수치가 존재하지 않습니다. 클라우드는 무료 API 등급을, 로컬은 Ollama를 쓰십시오.',
          '<strong>매달이 아니라 분기마다 다시 확인하십시오.</strong> 업체들은 플래그십을 한꺼번에 교체합니다. Claude Opus 5, GPT-5.6, Gemini 3.1 Pro는 모두 출시 후 더 새로운 모델로 대체되었습니다. 교체 이전에 작성된 비교는 약간 낡은 정도가 아니라 한 세대 통째로 뒤처진 것입니다.',
        ],
        callouts: [{ type: 'info', text: '포지셔닝, 가격, 컨텍스트 윈도우, 컷오프는 Anthropic, OpenAI, Google 각사의 모델 문서에서 가져왔습니다. 업체들이 발표하는 벤치마크 수치는 스스로 고른 평가에 기반하므로 서로 직접 비교할 수 없습니다.' }],
      },
      faq: {
        id: 'faq',
        title: '최고의 LLM에 대한 빠른 답변',
        faqs: [
          {
            q: 'Claude Opus 5.5와 GPT-6 Astra 중 어느 쪽이 더 낫습니까?',
            a: '두 모델은 서로 다른 작업을 겨냥하며, 어느 업체도 상대의 벤치마크에서의 수치를 발표하지 않습니다. Anthropic은 Claude Opus 5.5를 장시간 실행되는 에이전트형 코딩과 지식 업무용으로 100만 토큰당 $4/$20에 제시합니다. OpenAI는 GPT-6 Astra를 가장 까다로운 작업용 플래그십으로 $10/$50에 제시합니다. 자신의 작업으로 두 모델을 모두 시험해 보십시오. 코드 비중이 큰 에이전트 작업에는 Opus 5.5, 폭넓고 까다로운 작업에는 Astra 또는 더 저렴한 GPT-6.1 Sol이 후보입니다.',
          },
          {
            q: 'GPT-6 Astra, Sol, Luna의 차이는 무엇입니까?',
            a: 'Astra는 가장 까다로운 작업용 플래그십입니다(100만 토큰당 입력 $10 / 출력 $50). Sol(GPT-6.1 Sol)은 복잡한 작업에서 Astra에 가까운 성능을 더 낮은 비용으로 제공합니다($2/$10). Luna는 특정 용도의 대량 작업용 효율형 모델입니다($0.10/$0.50). 세 모델 모두 컨텍스트 윈도우는 1.05M 토큰입니다. 토큰당 비용을 지불한다면 Sol로 시작해 Sol로 부족한 곳에서만 Astra로 올리는 것이 비용을 아끼는 방법입니다.',
          },
          {
            q: 'VRAM이 8GB뿐이라면 최고의 로컬 LLM은 무엇입니까?',
            a: '코딩에는 다운로드 4.7 GB의 qwen2.5-coder:7b, 범용에는 2.0 GB의 llama3.2:3b가 여유롭게 동작합니다. 이는 VRAM 요구치가 아니라 다운로드 용량이므로, 컨텍스트 창을 위해 그보다 몇 GB 여유를 두십시오. 8GB 카드로 둘 다 무리 없이 다룰 수 있습니다.',
          },
          {
            q: 'Gemini 4 Argon은 나머지 두 모델과 비교하면 어떻습니까?',
            a: 'Gemini 4 Argon은 Google의 새 플래그십으로, Google은 이를 차세대 프런티어 지능이라고 설명하며 Google AI Pro 및 Ultra 구독자가 이용할 수 있습니다. Google의 모델 페이지에는 지식 컷오프가 나와 있지 않으며, 이 페이지는 벤치마크로 비교하지 않습니다. 이전 플래그십인 Gemini 3.1 Pro는 이전 세대입니다. 어떤 클라우드 모델에서든 더 나은 출력을 얻는 요령은 <a href="/ko/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR 프레임워크 가이드</a>를 참조하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 문서',
        items: [
          '[CO-STAR 프롬프트 프레임워크 가이드](/ko/prompt-bites/co-star-prompt-framework)',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026)',
          '[Prompt Bites 허브](/ko/prompt-bites)',
        ],
      },
    },
  },
}
