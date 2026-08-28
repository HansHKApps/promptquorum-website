import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Prompt Engineering',
    heroImage: '/images/best-llm-right-now-overview-hero-en.webp',
    title: 'Best LLM Right Now?',
    dateModified: '2026-08-28',
    seoTitle: 'Best LLM Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Cloud coding: Claude Opus 5 (leads Frontier-Bench v0.1). General: GPT-5.6 Sol. Multimodal: Gemini 3.1 Pro (77.1% ARC-AGI-2). Local: qwen3.5:9b. Verified August 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5', 'GPT-5.6', 'Gemini 3.1 Pro', 'Llama 4 Scout'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users comparing the best available LLMs across cloud and local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best LLM right now?',
        answer: 'Three flagships landed in July 2026 and they lead different things. Claude Opus 5 (24 July) tops Frontier-Bench v0.1 and is the coding pick. GPT-5.6 Sol (9 July) sets the state of the art on Terminal-Bench 2.1 for command-line and agentic work. Gemini 3.1 Pro leads natively multimodal tasks with a verified 77.1% on ARC-AGI-2. For local use, qwen3.5:9b is a 6.6 GB download.',
        bullets: [
          'Cloud coding: Claude Opus 5 — leads Frontier-Bench v0.1',
          'Cloud agentic/CLI: GPT-5.6 Sol — SOTA on Terminal-Bench 2.1',
          'Multimodal: Gemini 3.1 Pro — 77.1% verified on ARC-AGI-2',
          'Local: qwen3.5:9b — 6.6 GB download',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'No single LLM wins every task — Claude Opus 5 leads Frontier-Bench v0.1, GPT-5.6 Sol leads Terminal-Bench 2.1, Gemini 3.1 Pro leads multimodal',
          'All three flagships shipped in July 2026, so any comparison written before then is a generation out of date',
          'GPT-5.6 is a family, not one model: Sol is the flagship, Terra matches GPT-5.5 intelligence at half the price, Luna costs 80% less than Sol',
          'For local use, qwen3.5:9b (6.6 GB) covers general work and qwen2.5-coder:7b (4.7 GB) covers coding — both far below the hardware most guides assume',
          'Cloud models need API keys and cost per token; local models are free to run after the hardware is bought',
        ],
      },
      body1: {
        title: 'The Best LLM Depends on the Task — Here\'s the Map',
        content: [
          '<strong>Three flagships arrived within a fortnight in July 2026. Claude Opus 5 (24 July) for coding, GPT-5.6 Sol (9 July) for agentic and command-line work, Gemini 3.1 Pro for anything multimodal.</strong> Below: when each one wins, and which to pick by workflow.',
          'The vendors no longer publish a shared headline benchmark, so comparing them means comparing different evals. Anthropic reports that Opus 5 surpasses all other models on Frontier-Bench v0.1 and more than doubles Opus 4.8 at a lower cost per task. OpenAI reports GPT-5.6 Sol setting the state of the art on Terminal-Bench 2.1, which tests planning and tool coordination in command-line workflows. Google reports Gemini 3.1 Pro at a verified 77.1% on ARC-AGI-2.',
          'One structural change worth noting: GPT-5.6 is a three-model family rather than a single release. Sol is the frontier model, Terra matches GPT-5.5 on intelligence benchmarks at half the price, and Luna is priced 80% below Sol. If cost is your binding constraint, the interesting comparison is Terra or Luna against a competitor flagship, not Sol.',
        ],
        columns: ['Use Case', 'Best LLM', 'Why'],
        rows: [
          { 'Use Case': 'Coding', 'Best LLM': 'Claude Opus 5', 'Why': 'Tops Frontier-Bench v0.1; >2x Opus 4.8 at lower cost per task' },
          { 'Use Case': 'Agentic / command line', 'Best LLM': 'GPT-5.6 Sol', 'Why': 'State of the art on Terminal-Bench 2.1' },
          { 'Use Case': 'Multimodal (video, image, audio)', 'Best LLM': 'Gemini 3.1 Pro', 'Why': 'Natively multimodal; 77.1% verified on ARC-AGI-2' },
          { 'Use Case': 'Cost-sensitive throughput', 'Best LLM': 'GPT-5.6 Luna or Terra', 'Why': 'Luna 80% below Sol; Terra matches GPT-5.5 at half price' },
          { 'Use Case': 'Local / offline general', 'Best LLM': 'qwen3.5:9b', 'Why': '6.6 GB download, newest Qwen available in Ollama' },
          { 'Use Case': 'Local / offline coding', 'Best LLM': 'qwen2.5-coder:7b', 'Why': '4.7 GB download, runs on an 8 GB card' },
        ],
      },
      body2: {
        title: 'How to Pick Without Reading 50 Reviews',
        content: [
          '<strong>Start with the constraint.</strong> Budget, privacy, latency, or capability? Pick the model that clears your hardest constraint first. If privacy is the constraint, no cloud flagship qualifies and the question becomes which local model fits your card.',
          '<strong>Test two models on your actual task.</strong> Published benchmarks do not predict your use case, and this is more true now than it was a year ago — the three vendors report on three different evals, so there is no like-for-like number to rank them by. Use free API tiers for the cloud models and run the local ones through Ollama.',
          '<strong>Re-check quarterly, not monthly.</strong> All three flagships landed in July 2026 within about two weeks of each other. That clustering is the pattern worth planning around: the landscape moves in bursts, and a comparison written before a burst is a full generation stale rather than slightly dated.',
        ],
        callouts: [{ type: 'info', text: 'Verified August 2026. Claude Opus 5 shipped 24 July 2026, the GPT-5.6 family 9 July 2026. Benchmark figures are the vendors\' own published results on their own chosen evals — they are not directly comparable to each other.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About the Best LLM Right Now',
        faqs: [
          {
            q: 'Is Claude Opus 5 or GPT-5.6 better?',
            a: 'They lead different evaluations, and neither vendor publishes a figure on the other\'s benchmark. Anthropic reports Claude Opus 5 surpassing all other models on Frontier-Bench v0.1 and more than doubling Opus 4.8 at a lower cost per task. OpenAI reports GPT-5.6 Sol setting the state of the art on Terminal-Bench 2.1 for command-line and tool-coordination work. Pick Opus 5 for code generation and analysis, Sol for agentic workflows that drive a terminal.',
          },
          {
            q: 'What is the difference between GPT-5.6 Sol, Terra and Luna?',
            a: 'Sol is the frontier model in the family. Terra is the balanced option and performs as well as GPT-5.5 on intelligence benchmarks at half the price. Luna is the cost-efficient option, priced 80% below Sol. Most everyday work does not need Sol, so if you are paying per token the honest starting point is Terra.',
          },
          {
            q: 'What is the best local LLM if I only have 8 GB VRAM?',
            a: 'qwen2.5-coder:7b at a 4.7 GB download for coding, or llama3.2:3b at 2.0 GB for general use with room to spare. Those are download sizes rather than VRAM requirements, so allow a couple of GB above them for your context window. An 8 GB card handles both comfortably.',
          },
          {
            q: 'How does Gemini 3.1 Pro compare to the other two?',
            a: 'Gemini 3.1 Pro is the pick when the input is not just text. It is natively multimodal across text, audio, images, video and whole code repositories, and Google reports a verified 77.1% on ARC-AGI-2. For pure text reasoning and code generation, Claude Opus 5 and GPT-5.6 Sol are the stronger choices. See our <a href="/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR prompt framework guide</a> for getting better output from any cloud model.',
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
    metaDescription: 'Cloud-Coding: Claude Opus 5 (führt Frontier-Bench v0.1). Allgemein: GPT-5.6 Sol. Multimodal: Gemini 3.1 Pro (77,1% ARC-AGI-2). Lokal: qwen3.5:9b. Geprüft im August 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      de: {
        question: 'Welches LLM ist aktuell das beste?',
        answer: 'Im Juli 2026 kamen drei Flaggschiffe heraus, die jeweils anderes anführen. Claude Opus 5 (24. Juli) führt Frontier-Bench v0.1 und ist die Wahl fürs Coding. GPT-5.6 Sol (9. Juli) setzt den Stand der Technik bei Terminal-Bench 2.1 für Kommandozeilen- und Agentenarbeit. Gemini 3.1 Pro führt bei nativ multimodalen Aufgaben mit geprüften 77,1% auf ARC-AGI-2. Lokal ist qwen3.5:9b ein 6,6-GB-Download.',
        bullets: [
          'Cloud-Coding: Claude Opus 5 — führt Frontier-Bench v0.1',
          'Cloud agentisch/CLI: GPT-5.6 Sol — Stand der Technik bei Terminal-Bench 2.1',
          'Multimodal: Gemini 3.1 Pro — geprüfte 77,1% auf ARC-AGI-2',
          'Lokal: qwen3.5:9b — 6,6 GB Download',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Kein einzelnes LLM gewinnt jede Aufgabe — Claude Opus 5 führt Frontier-Bench v0.1, GPT-5.6 Sol führt Terminal-Bench 2.1, Gemini 3.1 Pro führt multimodal',
          'Alle drei Flaggschiffe erschienen im Juli 2026, jeder vorher geschriebene Vergleich ist also eine Generation veraltet',
          'GPT-5.6 ist eine Familie, kein einzelnes Modell: Sol ist das Flaggschiff, Terra erreicht GPT-5.5-Niveau zum halben Preis, Luna kostet 80% weniger als Sol',
          'Lokal deckt qwen3.5:9b (6,6 GB) allgemeine Arbeit ab und qwen2.5-coder:7b (4,7 GB) das Coding — beide weit unter der Hardware, die die meisten Ratgeber voraussetzen',
          'Cloud-Modelle brauchen API-Schlüssel und kosten pro Token; lokale Modelle laufen nach dem Hardwarekauf kostenlos',
        ],
      },
      body1: {
        title: 'Das beste LLM hängt von der Aufgabe ab — hier die Übersicht',
        content: [
          '<strong>Drei Flaggschiffe kamen im Juli 2026 binnen zwei Wochen heraus. Claude Opus 5 (24. Juli) fürs Coding, GPT-5.6 Sol (9. Juli) für agentische und Kommandozeilenarbeit, Gemini 3.1 Pro für alles Multimodale.</strong> Nachfolgend: wann welches gewinnt und welches zu welchem Arbeitsablauf passt.',
          'Die Anbieter veröffentlichen keinen gemeinsamen Leitbenchmark mehr, ein Vergleich bedeutet also, unterschiedliche Evaluationen zu vergleichen. Anthropic berichtet, dass Opus 5 auf Frontier-Bench v0.1 alle anderen Modelle übertrifft und Opus 4.8 bei geringeren Kosten je Aufgabe mehr als verdoppelt. OpenAI berichtet, dass GPT-5.6 Sol den Stand der Technik auf Terminal-Bench 2.1 setzt, der Planung und Werkzeugkoordination in Kommandozeilen-Abläufen prüft. Google berichtet für Gemini 3.1 Pro geprüfte 77,1% auf ARC-AGI-2.',
          'Eine strukturelle Änderung ist erwähnenswert: GPT-5.6 ist eine Dreier-Familie statt eines einzelnen Release. Sol ist das Frontier-Modell, Terra erreicht GPT-5.5 auf Intelligenz-Benchmarks zum halben Preis, und Luna liegt preislich 80% unter Sol. Wenn Kosten Ihre bindende Beschränkung sind, ist der interessante Vergleich Terra oder Luna gegen ein Konkurrenz-Flaggschiff, nicht Sol.',
        ],
        columns: ['Anwendungsfall', 'Bestes LLM', 'Warum'],
        rows: [
          { 'Anwendungsfall': 'Coding', 'Bestes LLM': 'Claude Opus 5', 'Warum': 'Führt Frontier-Bench v0.1; >2x Opus 4.8 bei geringeren Kosten je Aufgabe' },
          { 'Anwendungsfall': 'Agentisch / Kommandozeile', 'Bestes LLM': 'GPT-5.6 Sol', 'Warum': 'Stand der Technik auf Terminal-Bench 2.1' },
          { 'Anwendungsfall': 'Multimodal (Video, Bild, Audio)', 'Bestes LLM': 'Gemini 3.1 Pro', 'Warum': 'Nativ multimodal; geprüfte 77,1% auf ARC-AGI-2' },
          { 'Anwendungsfall': 'Kostensensibler Durchsatz', 'Bestes LLM': 'GPT-5.6 Luna oder Terra', 'Warum': 'Luna 80% unter Sol; Terra auf GPT-5.5-Niveau zum halben Preis' },
          { 'Anwendungsfall': 'Lokal / offline allgemein', 'Bestes LLM': 'qwen3.5:9b', 'Warum': '6,6 GB Download, neuestes in Ollama verfügbares Qwen' },
          { 'Anwendungsfall': 'Lokal / offline Coding', 'Bestes LLM': 'qwen2.5-coder:7b', 'Warum': '4,7 GB Download, läuft auf einer 8-GB-Karte' },
        ],
      },
      body2: {
        title: 'Wie Sie wählen, ohne 50 Reviews zu lesen',
        content: [
          '<strong>Beginnen Sie bei der Beschränkung.</strong> Budget, Datenschutz, Latenz oder Fähigkeit? Wählen Sie das Modell, das Ihre härteste Beschränkung zuerst löst. Ist Datenschutz die Beschränkung, kommt kein Cloud-Flaggschiff infrage und die Frage lautet, welches lokale Modell auf Ihre Karte passt.',
          '<strong>Testen Sie zwei Modelle an Ihrer echten Aufgabe.</strong> Veröffentlichte Benchmarks sagen Ihren Anwendungsfall nicht vorher, und das gilt heute mehr als vor einem Jahr: Die drei Anbieter berichten über drei verschiedene Evaluationen, es gibt also keine vergleichbare Zahl, nach der sich ordnen ließe. Nutzen Sie kostenlose API-Stufen für die Cloud-Modelle und Ollama für die lokalen.',
          '<strong>Prüfen Sie vierteljährlich, nicht monatlich.</strong> Alle drei Flaggschiffe erschienen im Juli 2026 binnen etwa zwei Wochen. Genau dieses Muster sollte Ihre Planung leiten: Der Markt bewegt sich in Schüben, und ein vor einem Schub geschriebener Vergleich ist eine ganze Generation veraltet statt nur leicht angestaubt.',
        ],
        callouts: [{ type: 'info', text: 'Geprüft im August 2026. Claude Opus 5 erschien am 24. Juli 2026, die GPT-5.6-Familie am 9. Juli 2026. Die Benchmark-Zahlen sind die selbst veröffentlichten Ergebnisse der Anbieter auf selbst gewählten Evaluationen — sie sind untereinander nicht direkt vergleichbar.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum besten LLM',
        faqs: [
          {
            q: 'Ist Claude Opus 5 oder GPT-5.6 besser?',
            a: 'Sie führen unterschiedliche Evaluationen, und keiner der Anbieter veröffentlicht eine Zahl auf dem Benchmark des anderen. Anthropic berichtet, dass Claude Opus 5 auf Frontier-Bench v0.1 alle anderen Modelle übertrifft und Opus 4.8 bei geringeren Kosten je Aufgabe mehr als verdoppelt. OpenAI berichtet, dass GPT-5.6 Sol auf Terminal-Bench 2.1 den Stand der Technik setzt. Wählen Sie Opus 5 für Codeerzeugung und -analyse, Sol für agentische Abläufe, die ein Terminal steuern.',
          },
          {
            q: 'Was unterscheidet GPT-5.6 Sol, Terra und Luna?',
            a: 'Sol ist das Frontier-Modell der Familie. Terra ist die ausgewogene Option und erreicht auf Intelligenz-Benchmarks GPT-5.5-Niveau zum halben Preis. Luna ist die kosteneffiziente Option, preislich 80% unter Sol. Die meiste Alltagsarbeit braucht Sol nicht — wenn Sie pro Token zahlen, ist Terra der ehrliche Ausgangspunkt.',
          },
          {
            q: 'Welches lokale LLM eignet sich bei nur 8 GB VRAM?',
            a: 'qwen2.5-coder:7b mit 4,7 GB Download fürs Coding, oder llama3.2:3b mit 2,0 GB für allgemeine Nutzung mit reichlich Reserve. Das sind Download-Größen, keine VRAM-Anforderungen, planen Sie also ein paar GB darüber für Ihr Kontextfenster ein. Eine 8-GB-Karte trägt beide bequem.',
          },
          {
            q: 'Wie schneidet Gemini 3.1 Pro gegen die beiden anderen ab?',
            a: 'Gemini 3.1 Pro ist die Wahl, wenn die Eingabe nicht nur Text ist. Es ist nativ multimodal über Text, Audio, Bilder, Video und ganze Code-Repositories hinweg, und Google berichtet geprüfte 77,1% auf ARC-AGI-2. Für reines Textdenken und Codeerzeugung sind Claude Opus 5 und GPT-5.6 Sol die stärkeren Wahlen. Siehe unseren <a href="/de/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR-Framework-Leitfaden</a> für bessere Ausgaben aus jedem Cloud-Modell.',
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
    metaDescription: 'Code cloud : Claude Opus 5 (en tête de Frontier-Bench v0.1). Général : GPT-5.6 Sol. Multimodal : Gemini 3.1 Pro (77,1% ARC-AGI-2). Local : qwen3.5:9b. Vérifié en août 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM en ce moment ?',
        answer: 'Trois modèles phares sont sortis en juillet 2026 et chacun mène sur un terrain différent. Claude Opus 5 (24 juillet) domine Frontier-Bench v0.1 et reste le choix pour le code. GPT-5.6 Sol (9 juillet) établit l\'état de l\'art sur Terminal-Bench 2.1 pour le travail agentique et en ligne de commande. Gemini 3.1 Pro mène sur les tâches nativement multimodales avec 77,1% vérifiés sur ARC-AGI-2. En local, qwen3.5:9b pèse 6,6 Go.',
        bullets: [
          'Code cloud : Claude Opus 5 — en tête de Frontier-Bench v0.1',
          'Cloud agentique/CLI : GPT-5.6 Sol — état de l\'art sur Terminal-Bench 2.1',
          'Multimodal : Gemini 3.1 Pro — 77,1% vérifiés sur ARC-AGI-2',
          'Local : qwen3.5:9b — 6,6 Go de téléchargement',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Aucun LLM ne gagne sur toutes les tâches — Claude Opus 5 mène Frontier-Bench v0.1, GPT-5.6 Sol mène Terminal-Bench 2.1, Gemini 3.1 Pro mène le multimodal',
          'Les trois modèles phares sont sortis en juillet 2026 : tout comparatif écrit avant cette date a une génération de retard',
          'GPT-5.6 est une famille, pas un modèle unique : Sol est le vaisseau amiral, Terra égale GPT-5.5 à moitié prix, Luna coûte 80% de moins que Sol',
          'En local, qwen3.5:9b (6,6 Go) couvre le travail général et qwen2.5-coder:7b (4,7 Go) le code — tous deux bien en dessous du matériel supposé par la plupart des guides',
          'Les modèles cloud exigent des clés API et coûtent au token ; les modèles locaux tournent gratuitement une fois le matériel acheté',
        ],
      },
      body1: {
        title: 'Le meilleur LLM dépend de la tâche — voici la carte',
        content: [
          '<strong>Trois modèles phares sont arrivés en quinze jours en juillet 2026. Claude Opus 5 (24 juillet) pour le code, GPT-5.6 Sol (9 juillet) pour l\'agentique et la ligne de commande, Gemini 3.1 Pro pour tout ce qui est multimodal.</strong> Ci-dessous : quand chacun l\'emporte, et lequel choisir selon votre flux de travail.',
          'Les éditeurs ne publient plus de benchmark commun, comparer revient donc à comparer des évaluations différentes. Anthropic indique qu\'Opus 5 surpasse tous les autres modèles sur Frontier-Bench v0.1 et fait plus que doubler Opus 4.8 pour un coût par tâche inférieur. OpenAI indique que GPT-5.6 Sol établit l\'état de l\'art sur Terminal-Bench 2.1, qui teste la planification et la coordination d\'outils en ligne de commande. Google annonce 77,1% vérifiés sur ARC-AGI-2 pour Gemini 3.1 Pro.',
          'Un changement structurel mérite d\'être noté : GPT-5.6 est une famille de trois modèles et non une sortie unique. Sol est le modèle de pointe, Terra égale GPT-5.5 sur les benchmarks d\'intelligence à moitié prix, et Luna est facturé 80% en dessous de Sol. Si le coût est votre contrainte déterminante, la comparaison intéressante oppose Terra ou Luna à un vaisseau amiral concurrent, pas Sol.',
        ],
        columns: ['Cas d\'usage', 'Meilleur LLM', 'Pourquoi'],
        rows: [
          { 'Cas d\'usage': 'Code', 'Meilleur LLM': 'Claude Opus 5', 'Pourquoi': 'En tête de Frontier-Bench v0.1 ; >2x Opus 4.8 à coût par tâche inférieur' },
          { 'Cas d\'usage': 'Agentique / ligne de commande', 'Meilleur LLM': 'GPT-5.6 Sol', 'Pourquoi': 'État de l\'art sur Terminal-Bench 2.1' },
          { 'Cas d\'usage': 'Multimodal (vidéo, image, audio)', 'Meilleur LLM': 'Gemini 3.1 Pro', 'Pourquoi': 'Nativement multimodal ; 77,1% vérifiés sur ARC-AGI-2' },
          { 'Cas d\'usage': 'Débit sensible au coût', 'Meilleur LLM': 'GPT-5.6 Luna ou Terra', 'Pourquoi': 'Luna 80% sous Sol ; Terra au niveau de GPT-5.5 à moitié prix' },
          { 'Cas d\'usage': 'Local / hors ligne général', 'Meilleur LLM': 'qwen3.5:9b', 'Pourquoi': '6,6 Go, Qwen le plus récent disponible dans Ollama' },
          { 'Cas d\'usage': 'Local / hors ligne code', 'Meilleur LLM': 'qwen2.5-coder:7b', 'Pourquoi': '4,7 Go, tourne sur une carte de 8 Go' },
        ],
      },
      body2: {
        title: 'Comment choisir sans lire 50 tests',
        content: [
          '<strong>Partez de la contrainte.</strong> Budget, confidentialité, latence ou capacité ? Choisissez le modèle qui lève d\'abord votre contrainte la plus dure. Si c\'est la confidentialité, aucun modèle cloud ne convient et la question devient : quel modèle local tient sur votre carte.',
          '<strong>Testez deux modèles sur votre tâche réelle.</strong> Les benchmarks publiés ne prédisent pas votre cas d\'usage, et c\'est plus vrai aujourd\'hui qu\'il y a un an : les trois éditeurs rendent compte de trois évaluations différentes, il n\'existe donc aucun chiffre comparable pour les classer. Utilisez les paliers API gratuits pour le cloud et Ollama pour le local.',
          '<strong>Revérifiez chaque trimestre, pas chaque mois.</strong> Les trois modèles phares sont sortis en juillet 2026 à environ deux semaines d\'intervalle. C\'est ce regroupement qu\'il faut anticiper : le marché avance par salves, et un comparatif écrit avant une salve accuse une génération complète de retard plutôt qu\'un léger décalage.',
        ],
        callouts: [{ type: 'info', text: 'Vérifié en août 2026. Claude Opus 5 est sorti le 24 juillet 2026, la famille GPT-5.6 le 9 juillet 2026. Les chiffres de benchmark sont les résultats publiés par les éditeurs sur les évaluations qu\'ils ont eux-mêmes choisies — ils ne sont pas directement comparables entre eux.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur le meilleur LLM',
        faqs: [
          {
            q: 'Claude Opus 5 ou GPT-5.6, lequel est meilleur ?',
            a: 'Ils mènent sur des évaluations différentes, et aucun éditeur ne publie de chiffre sur le benchmark de l\'autre. Anthropic indique que Claude Opus 5 surpasse tous les autres modèles sur Frontier-Bench v0.1 et fait plus que doubler Opus 4.8 à coût par tâche inférieur. OpenAI indique que GPT-5.6 Sol établit l\'état de l\'art sur Terminal-Bench 2.1. Choisissez Opus 5 pour la génération et l\'analyse de code, Sol pour les flux agentiques qui pilotent un terminal.',
          },
          {
            q: 'Quelle différence entre GPT-5.6 Sol, Terra et Luna ?',
            a: 'Sol est le modèle de pointe de la famille. Terra est l\'option équilibrée et égale GPT-5.5 sur les benchmarks d\'intelligence à moitié prix. Luna est l\'option économique, facturée 80% en dessous de Sol. La plupart des tâches quotidiennes n\'ont pas besoin de Sol : si vous payez au token, le point de départ honnête est Terra.',
          },
          {
            q: 'Quel est le meilleur LLM local avec seulement 8 Go de VRAM ?',
            a: 'qwen2.5-coder:7b, 4,7 Go de téléchargement, pour le code, ou llama3.2:3b à 2,0 Go pour un usage général avec de la marge. Ce sont des tailles de téléchargement et non des besoins en VRAM : prévoyez quelques Go au-dessus pour votre fenêtre de contexte. Une carte de 8 Go accueille les deux confortablement.',
          },
          {
            q: 'Comment Gemini 3.1 Pro se compare-t-il aux deux autres ?',
            a: 'Gemini 3.1 Pro s\'impose quand l\'entrée n\'est pas seulement du texte. Il est nativement multimodal sur le texte, l\'audio, les images, la vidéo et des dépôts de code entiers, et Google annonce 77,1% vérifiés sur ARC-AGI-2. Pour le raisonnement purement textuel et la génération de code, Claude Opus 5 et GPT-5.6 Sol restent plus forts. Voir notre <a href="/fr/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guide du framework CO-STAR</a> pour de meilleures sorties de n\'importe quel modèle cloud.',
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
    metaDescription: 'クラウドのコーディングはClaude Opus 5（Frontier-Bench v0.1首位）。汎用はGPT-5.6 Sol。マルチモーダルはGemini 3.1 Pro（ARC-AGI-2で77.1%）。ローカルはqwen3.5:9b。2026年8月確認。',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      ja: {
        question: '現在最良のLLMは何ですか？',
        answer: '2026年7月に3つの旗艦モデルが登場し、それぞれ別の領域で先行しています。Claude Opus 5（7月24日）はFrontier-Bench v0.1で首位、コーディング向けの選択です。GPT-5.6 Sol（7月9日）はコマンドラインとエージェント作業を測るTerminal-Bench 2.1で最高水準を打ち立てました。Gemini 3.1 Proはネイティブなマルチモーダル処理で先行し、ARC-AGI-2の検証済みスコアは77.1%です。ローカルではqwen3.5:9bがダウンロード6.6 GBです。',
        bullets: [
          'クラウドのコーディング：Claude Opus 5 — Frontier-Bench v0.1で首位',
          'クラウドのエージェント／CLI：GPT-5.6 Sol — Terminal-Bench 2.1で最高水準',
          'マルチモーダル：Gemini 3.1 Pro — ARC-AGI-2で検証済み77.1%',
          'ローカル：qwen3.5:9b — ダウンロード6.6 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'すべての作業で勝つ単一のLLMはありません — Claude Opus 5はFrontier-Bench v0.1、GPT-5.6 SolはTerminal-Bench 2.1、Gemini 3.1 Proはマルチモーダルで先行します',
          '3つの旗艦モデルはいずれも2026年7月に登場したため、それ以前に書かれた比較は一世代古いことになります',
          'GPT-5.6は単一モデルではなくファミリーです。Solが旗艦、TerraはGPT-5.5相当の知能を半額で、LunaはSolより80%安価です',
          'ローカルではqwen3.5:9b（6.6 GB）が汎用を、qwen2.5-coder:7b（4.7 GB）がコーディングを担います。いずれも多くの記事が前提とするハードウェアよりはるかに軽量です',
          'クラウドモデルはAPIキーが必要でトークン単位の費用がかかりますが、ローカルモデルはハードウェア購入後は無償で動きます',
        ],
      },
      body1: {
        title: '最良のLLMは用途で決まる — その地図',
        content: [
          '<strong>2026年7月、3つの旗艦モデルが約2週間のうちに登場しました。コーディングにはClaude Opus 5（7月24日）、エージェントとコマンドライン作業にはGPT-5.6 Sol（7月9日）、マルチモーダル全般にはGemini 3.1 Proです。</strong>以下では、それぞれがどこで勝つか、作業内容ごとにどれを選ぶかを示します。',
          '各社はもはや共通の主要ベンチマークを公表しておらず、比較とは異なる評価同士を比べることを意味します。AnthropicはOpus 5がFrontier-Bench v0.1で他のすべてのモデルを上回り、1タスクあたりの費用を抑えつつOpus 4.8の2倍以上になったと報告しています。OpenAIはGPT-5.6 Solが、コマンドライン作業での計画とツール連携を測るTerminal-Bench 2.1で最高水準を打ち立てたと報告しています。GoogleはGemini 3.1 ProがARC-AGI-2で検証済み77.1%だと報告しています。',
          '構造上の変化も触れておく価値があります。GPT-5.6は単一のリリースではなく3モデルのファミリーです。Solが最先端モデル、TerraはGPT-5.5と同等の知能ベンチマークを半額で、LunaはSolより80%低い価格です。費用が制約になっているなら、比べるべきはSolではなく、TerraやLunaと競合の旗艦モデルです。',
        ],
        columns: ['用途', '最良のLLM', '理由'],
        rows: [
          { '用途': 'コーディング', '最良のLLM': 'Claude Opus 5', '理由': 'Frontier-Bench v0.1で首位。1タスクあたり低コストでOpus 4.8の2倍超' },
          { '用途': 'エージェント／コマンドライン', '最良のLLM': 'GPT-5.6 Sol', '理由': 'Terminal-Bench 2.1で最高水準' },
          { '用途': 'マルチモーダル（動画・画像・音声）', '最良のLLM': 'Gemini 3.1 Pro', '理由': 'ネイティブにマルチモーダル。ARC-AGI-2で検証済み77.1%' },
          { '用途': '費用重視のスループット', '最良のLLM': 'GPT-5.6 LunaまたはTerra', '理由': 'LunaはSolより80%低価格、TerraはGPT-5.5相当を半額で' },
          { '用途': 'ローカル／オフライン汎用', '最良のLLM': 'qwen3.5:9b', '理由': 'ダウンロード6.6 GB、Ollamaで入手できる最新のQwen' },
          { '用途': 'ローカル／オフラインのコーディング', '最良のLLM': 'qwen2.5-coder:7b', '理由': 'ダウンロード4.7 GB、8 GBのカードで動作' },
        ],
      },
      body2: {
        title: 'レビューを50本読まずに選ぶ方法',
        content: [
          '<strong>制約から始めてください。</strong>予算、プライバシー、レイテンシ、能力のどれでしょうか。最も厳しい制約を先に満たすモデルを選びます。プライバシーが制約なら、クラウドの旗艦はいずれも該当せず、問いは「どのローカルモデルが自分のカードに載るか」に変わります。',
          '<strong>実際の作業で2つのモデルを試してください。</strong>公表されたベンチマークはあなたの用途を予測しません。しかも1年前より事情は厳しく、3社は3つの異なる評価で報告しているため、順位づけできる同一指標が存在しません。クラウドは無料のAPI枠を、ローカルはOllamaを使ってください。',
          '<strong>見直しは毎月ではなく四半期ごとに。</strong>3つの旗艦はいずれも2026年7月、約2週間のうちに登場しました。この固まり方こそ計画の前提にすべきものです。市場は波でしか動かず、波の前に書かれた比較は「少し古い」ではなく「一世代古い」ものになります。',
        ],
        callouts: [{ type: 'info', text: '2026年8月時点で確認。Claude Opus 5は2026年7月24日、GPT-5.6ファミリーは2026年7月9日に登場しました。ベンチマークの数値は各社が自ら選んだ評価で公表した自社結果であり、相互に直接比較できるものではありません。' }],
      },
      faq: {
        id: 'faq',
        title: '最良のLLMに関するクイックアンサー',
        faqs: [
          {
            q: 'Claude Opus 5とGPT-5.6ではどちらが優れていますか？',
            a: '両者は別々の評価で先行しており、どちらの提供元も相手のベンチマークでの数値を公表していません。AnthropicはClaude Opus 5がFrontier-Bench v0.1で他のすべてのモデルを上回り、1タスクあたり低コストでOpus 4.8の2倍以上になったと報告しています。OpenAIはGPT-5.6 SolがTerminal-Bench 2.1で最高水準を打ち立てたと報告しています。コード生成と分析にはOpus 5を、ターミナルを操作するエージェント処理にはSolを選んでください。',
          },
          {
            q: 'GPT-5.6のSol、Terra、Lunaの違いは何ですか？',
            a: 'Solはファミリーの最先端モデルです。Terraはバランス型で、知能ベンチマークではGPT-5.5と同等の性能を半額で提供します。Lunaは費用効率型で、Solより80%低い価格です。日常業務の多くはSolを必要としないため、トークン単位で支払うなら出発点はTerraが妥当です。',
          },
          {
            q: 'VRAMが8 GBしかない場合、最適なローカルLLMは何ですか？',
            a: 'コーディングにはダウンロード4.7 GBのqwen2.5-coder:7b、汎用には2.0 GBのllama3.2:3bが余裕をもって動きます。これらはVRAM要件ではなくダウンロードサイズなので、コンテキストウィンドウのぶん数GB多めに見てください。8 GBのカードなら両方とも快適に扱えます。',
          },
          {
            q: 'Gemini 3.1 Proは他の2つと比べてどうですか？',
            a: '入力がテキストだけではない場合にGemini 3.1 Proが選択肢になります。テキスト、音声、画像、動画、コードリポジトリ全体にわたってネイティブにマルチモーダルで、GoogleはARC-AGI-2で検証済み77.1%と報告しています。純粋なテキスト推論とコード生成では、Claude Opus 5とGPT-5.6 Solのほうが強力です。クラウドモデルからよりよい出力を得るコツは<a href="/ja/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STARフレームワークガイド</a>をご覧ください。',
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
    metaDescription: 'Código en la nube: Claude Opus 5 (lidera Frontier-Bench v0.1). General: GPT-5.6 Sol. Multimodal: Gemini 3.1 Pro (77,1% ARC-AGI-2). Local: qwen3.5:9b. Verificado en agosto de 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5', 'GPT-5.6', 'Gemini 3.1 Pro', 'Llama 4 Scout'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios que comparan los mejores LLM disponibles en la nube y en local',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM ahora mismo?',
        answer: 'En julio de 2026 llegaron tres modelos insignia y cada uno lidera algo distinto. Claude Opus 5 (24 de julio) encabeza Frontier-Bench v0.1 y es la opción para código. GPT-5.6 Sol (9 de julio) marca el estado del arte en Terminal-Bench 2.1 para trabajo agéntico y de línea de comandos. Gemini 3.1 Pro lidera las tareas nativamente multimodales con un 77,1% verificado en ARC-AGI-2. En local, qwen3.5:9b son 6,6 GB de descarga.',
        bullets: [
          'Código en la nube: Claude Opus 5 — lidera Frontier-Bench v0.1',
          'Nube agéntica/CLI: GPT-5.6 Sol — estado del arte en Terminal-Bench 2.1',
          'Multimodal: Gemini 3.1 Pro — 77,1% verificado en ARC-AGI-2',
          'Local: qwen3.5:9b — 6,6 GB de descarga',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ningún LLM gana en todas las tareas — Claude Opus 5 lidera Frontier-Bench v0.1, GPT-5.6 Sol lidera Terminal-Bench 2.1, Gemini 3.1 Pro lidera lo multimodal',
          'Los tres modelos insignia salieron en julio de 2026, así que cualquier comparativa escrita antes lleva una generación de retraso',
          'GPT-5.6 es una familia, no un modelo único: Sol es el buque insignia, Terra iguala a GPT-5.5 a mitad de precio, Luna cuesta un 80% menos que Sol',
          'En local, qwen3.5:9b (6,6 GB) cubre el trabajo general y qwen2.5-coder:7b (4,7 GB) el código — ambos muy por debajo del hardware que suponen la mayoría de las guías',
          'Los modelos en la nube requieren claves API y cuestan por token; los locales se ejecutan gratis tras comprar el hardware',
        ],
      },
      body1: {
        title: 'El mejor LLM depende de la tarea — este es el mapa',
        content: [
          '<strong>Tres modelos insignia llegaron en quince días en julio de 2026. Claude Opus 5 (24 de julio) para código, GPT-5.6 Sol (9 de julio) para trabajo agéntico y de línea de comandos, Gemini 3.1 Pro para todo lo multimodal.</strong> A continuación: cuándo gana cada uno y cuál elegir según tu flujo de trabajo.',
          'Los proveedores ya no publican un benchmark común, así que compararlos significa comparar evaluaciones distintas. Anthropic informa de que Opus 5 supera a todos los demás modelos en Frontier-Bench v0.1 y más que duplica a Opus 4.8 con un coste por tarea menor. OpenAI informa de que GPT-5.6 Sol marca el estado del arte en Terminal-Bench 2.1, que evalúa planificación y coordinación de herramientas en flujos de línea de comandos. Google informa de un 77,1% verificado en ARC-AGI-2 para Gemini 3.1 Pro.',
          'Merece la pena señalar un cambio estructural: GPT-5.6 es una familia de tres modelos, no un lanzamiento único. Sol es el modelo de frontera, Terra iguala a GPT-5.5 en benchmarks de inteligencia a mitad de precio, y Luna cuesta un 80% menos que Sol. Si el coste es tu restricción determinante, la comparación interesante enfrenta a Terra o Luna con un buque insignia rival, no a Sol.',
        ],
        columns: ['Caso de uso', 'Mejor LLM', 'Por qué'],
        rows: [
          { 'Caso de uso': 'Código', 'Mejor LLM': 'Claude Opus 5', 'Por qué': 'Encabeza Frontier-Bench v0.1; >2x Opus 4.8 con menor coste por tarea' },
          { 'Caso de uso': 'Agéntico / línea de comandos', 'Mejor LLM': 'GPT-5.6 Sol', 'Por qué': 'Estado del arte en Terminal-Bench 2.1' },
          { 'Caso de uso': 'Multimodal (vídeo, imagen, audio)', 'Mejor LLM': 'Gemini 3.1 Pro', 'Por qué': 'Nativamente multimodal; 77,1% verificado en ARC-AGI-2' },
          { 'Caso de uso': 'Rendimiento sensible al coste', 'Mejor LLM': 'GPT-5.6 Luna o Terra', 'Por qué': 'Luna un 80% bajo Sol; Terra al nivel de GPT-5.5 a mitad de precio' },
          { 'Caso de uso': 'Local / sin conexión general', 'Mejor LLM': 'qwen3.5:9b', 'Por qué': '6,6 GB de descarga, el Qwen más reciente disponible en Ollama' },
          { 'Caso de uso': 'Local / sin conexión código', 'Mejor LLM': 'qwen2.5-coder:7b', 'Por qué': '4,7 GB de descarga, funciona en una tarjeta de 8 GB' },
        ],
      },
      body2: {
        title: 'Cómo elegir sin leer 50 análisis',
        content: [
          '<strong>Empieza por la restricción.</strong> ¿Presupuesto, privacidad, latencia o capacidad? Elige el modelo que resuelva primero tu restricción más dura. Si la restricción es la privacidad, ningún buque insignia en la nube califica y la pregunta pasa a ser qué modelo local cabe en tu tarjeta.',
          '<strong>Prueba dos modelos con tu tarea real.</strong> Los benchmarks publicados no predicen tu caso de uso, y eso es más cierto ahora que hace un año: los tres proveedores informan sobre tres evaluaciones distintas, así que no existe una cifra equiparable con la que ordenarlos. Usa los niveles API gratuitos para la nube y Ollama para lo local.',
          '<strong>Revisa cada trimestre, no cada mes.</strong> Los tres modelos insignia salieron en julio de 2026 con unas dos semanas de diferencia. Ese agrupamiento es el patrón a tener en cuenta: el panorama se mueve a rachas, y una comparativa escrita antes de una racha queda una generación entera desfasada, no ligeramente anticuada.',
        ],
        callouts: [{ type: 'info', text: 'Verificado en agosto de 2026. Claude Opus 5 salió el 24 de julio de 2026 y la familia GPT-5.6 el 9 de julio de 2026. Las cifras de benchmark son los resultados que cada proveedor publica sobre las evaluaciones que ellos mismos eligen — no son directamente comparables entre sí.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre el mejor LLM',
        faqs: [
          {
            q: '¿Es mejor Claude Opus 5 o GPT-5.6?',
            a: 'Lideran evaluaciones distintas, y ninguno de los dos proveedores publica una cifra en el benchmark del otro. Anthropic informa de que Claude Opus 5 supera a todos los demás modelos en Frontier-Bench v0.1 y más que duplica a Opus 4.8 con menor coste por tarea. OpenAI informa de que GPT-5.6 Sol marca el estado del arte en Terminal-Bench 2.1. Elige Opus 5 para generación y análisis de código, y Sol para flujos agénticos que manejan una terminal.',
          },
          {
            q: '¿Qué diferencia hay entre GPT-5.6 Sol, Terra y Luna?',
            a: 'Sol es el modelo de frontera de la familia. Terra es la opción equilibrada y rinde igual que GPT-5.5 en benchmarks de inteligencia a mitad de precio. Luna es la opción económica, con un precio un 80% inferior al de Sol. La mayoría del trabajo cotidiano no necesita Sol, así que si pagas por token el punto de partida honesto es Terra.',
          },
          {
            q: '¿Cuál es el mejor LLM local si solo tengo 8 GB de VRAM?',
            a: 'qwen2.5-coder:7b con 4,7 GB de descarga para código, o llama3.2:3b con 2,0 GB para uso general con margen de sobra. Son tamaños de descarga, no requisitos de VRAM, así que deja un par de GB por encima para tu ventana de contexto. Una tarjeta de 8 GB maneja ambos con holgura.',
          },
          {
            q: '¿Cómo se compara Gemini 3.1 Pro con los otros dos?',
            a: 'Gemini 3.1 Pro es la opción cuando la entrada no es solo texto. Es nativamente multimodal en texto, audio, imágenes, vídeo y repositorios de código completos, y Google informa de un 77,1% verificado en ARC-AGI-2. Para razonamiento puramente textual y generación de código, Claude Opus 5 y GPT-5.6 Sol son más fuertes. Consulta nuestra <a href="/es/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guía del framework CO-STAR</a> para obtener mejores salidas de cualquier modelo en la nube.',
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
    metaDescription: 'Código na nuvem: Claude Opus 5 (lidera o Frontier-Bench v0.1). Geral: GPT-5.6 Sol. Multimodal: Gemini 3.1 Pro (77,1% no ARC-AGI-2). Local: qwen3.5:9b. Verificado em agosto de 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5', 'GPT-5.6', 'Gemini 3.1 Pro', 'Llama 4 Scout'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuários que comparam os melhores LLMs disponíveis na nuvem e localmente',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM agora?',
        answer: 'Três carros-chefe chegaram em julho de 2026 e cada um lidera em algo diferente. O Claude Opus 5 (24 de julho) encabeça o Frontier-Bench v0.1 e é a escolha para código. O GPT-5.6 Sol (9 de julho) define o estado da arte no Terminal-Bench 2.1 para trabalho agêntico e de linha de comando. O Gemini 3.1 Pro lidera tarefas nativamente multimodais com 77,1% verificados no ARC-AGI-2. No local, qwen3.5:9b tem 6,6 GB de download.',
        bullets: [
          'Código na nuvem: Claude Opus 5 — lidera o Frontier-Bench v0.1',
          'Nuvem agêntica/CLI: GPT-5.6 Sol — estado da arte no Terminal-Bench 2.1',
          'Multimodal: Gemini 3.1 Pro — 77,1% verificados no ARC-AGI-2',
          'Local: qwen3.5:9b — 6,6 GB de download',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Nenhum LLM vence em todas as tarefas — o Claude Opus 5 lidera o Frontier-Bench v0.1, o GPT-5.6 Sol lidera o Terminal-Bench 2.1, o Gemini 3.1 Pro lidera o multimodal',
          'Os três carros-chefe saíram em julho de 2026, então qualquer comparação escrita antes disso está uma geração atrasada',
          'GPT-5.6 é uma família, não um modelo único: Sol é o carro-chefe, Terra iguala o GPT-5.5 pela metade do preço, Luna custa 80% menos que o Sol',
          'No local, qwen3.5:9b (6,6 GB) cobre o trabalho geral e qwen2.5-coder:7b (4,7 GB) cobre código — ambos bem abaixo do hardware que a maioria dos guias pressupõe',
          'Modelos na nuvem exigem chaves de API e custam por token; modelos locais rodam de graça depois que o hardware é comprado',
        ],
      },
      body1: {
        title: 'O melhor LLM depende da tarefa — eis o mapa',
        content: [
          '<strong>Três carros-chefe chegaram em quinze dias, em julho de 2026. Claude Opus 5 (24 de julho) para código, GPT-5.6 Sol (9 de julho) para trabalho agêntico e de linha de comando, Gemini 3.1 Pro para tudo que é multimodal.</strong> A seguir: quando cada um vence e qual escolher conforme seu fluxo de trabalho.',
          'Os fornecedores não publicam mais um benchmark comum, então compará-los significa comparar avaliações diferentes. A Anthropic relata que o Opus 5 supera todos os outros modelos no Frontier-Bench v0.1 e mais que dobra o Opus 4.8 com custo menor por tarefa. A OpenAI relata que o GPT-5.6 Sol define o estado da arte no Terminal-Bench 2.1, que avalia planejamento e coordenação de ferramentas em fluxos de linha de comando. O Google relata 77,1% verificados no ARC-AGI-2 para o Gemini 3.1 Pro.',
          'Vale notar uma mudança estrutural: o GPT-5.6 é uma família de três modelos, não um lançamento único. O Sol é o modelo de fronteira, o Terra iguala o GPT-5.5 em benchmarks de inteligência pela metade do preço, e o Luna custa 80% menos que o Sol. Se o custo é a sua restrição determinante, a comparação interessante coloca Terra ou Luna contra um carro-chefe concorrente, não o Sol.',
        ],
        columns: ['Caso de uso', 'Melhor LLM', 'Por quê'],
        rows: [
          { 'Caso de uso': 'Código', 'Melhor LLM': 'Claude Opus 5', 'Por quê': 'Encabeça o Frontier-Bench v0.1; >2x o Opus 4.8 com menor custo por tarefa' },
          { 'Caso de uso': 'Agêntico / linha de comando', 'Melhor LLM': 'GPT-5.6 Sol', 'Por quê': 'Estado da arte no Terminal-Bench 2.1' },
          { 'Caso de uso': 'Multimodal (vídeo, imagem, áudio)', 'Melhor LLM': 'Gemini 3.1 Pro', 'Por quê': 'Nativamente multimodal; 77,1% verificados no ARC-AGI-2' },
          { 'Caso de uso': 'Vazão sensível a custo', 'Melhor LLM': 'GPT-5.6 Luna ou Terra', 'Por quê': 'Luna 80% abaixo do Sol; Terra no nível do GPT-5.5 pela metade do preço' },
          { 'Caso de uso': 'Local / offline geral', 'Melhor LLM': 'qwen3.5:9b', 'Por quê': '6,6 GB de download, o Qwen mais recente disponível no Ollama' },
          { 'Caso de uso': 'Local / offline código', 'Melhor LLM': 'qwen2.5-coder:7b', 'Por quê': '4,7 GB de download, roda numa placa de 8 GB' },
        ],
      },
      body2: {
        title: 'Como escolher sem ler 50 análises',
        content: [
          '<strong>Comece pela restrição.</strong> Orçamento, privacidade, latência ou capacidade? Escolha o modelo que resolve primeiro a sua restrição mais dura. Se a restrição for privacidade, nenhum carro-chefe da nuvem se qualifica e a pergunta passa a ser qual modelo local cabe na sua placa.',
          '<strong>Teste dois modelos na sua tarefa real.</strong> Benchmarks publicados não preveem o seu caso de uso, e isso vale mais hoje do que há um ano: os três fornecedores reportam sobre três avaliações diferentes, então não existe número equivalente para ordená-los. Use as camadas gratuitas de API para a nuvem e o Ollama para o local.',
          '<strong>Revise a cada trimestre, não a cada mês.</strong> Os três carros-chefe saíram em julho de 2026, com cerca de duas semanas de diferença. Esse agrupamento é o padrão a considerar: o cenário se move em ondas, e uma comparação escrita antes de uma onda fica uma geração inteira defasada, não apenas um pouco antiga.',
        ],
        callouts: [{ type: 'info', text: 'Verificado em agosto de 2026. O Claude Opus 5 saiu em 24 de julho de 2026 e a família GPT-5.6 em 9 de julho de 2026. Os números de benchmark são os resultados que cada fornecedor publica nas avaliações que eles próprios escolhem — não são diretamente comparáveis entre si.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre o melhor LLM',
        faqs: [
          {
            q: 'Claude Opus 5 ou GPT-5.6, qual é melhor?',
            a: 'Eles lideram avaliações diferentes, e nenhum dos fornecedores publica número no benchmark do outro. A Anthropic relata que o Claude Opus 5 supera todos os outros modelos no Frontier-Bench v0.1 e mais que dobra o Opus 4.8 com menor custo por tarefa. A OpenAI relata que o GPT-5.6 Sol define o estado da arte no Terminal-Bench 2.1. Escolha o Opus 5 para geração e análise de código, e o Sol para fluxos agênticos que operam um terminal.',
          },
          {
            q: 'Qual a diferença entre GPT-5.6 Sol, Terra e Luna?',
            a: 'O Sol é o modelo de fronteira da família. O Terra é a opção equilibrada e rende como o GPT-5.5 em benchmarks de inteligência pela metade do preço. O Luna é a opção econômica, com preço 80% abaixo do Sol. A maior parte do trabalho cotidiano não precisa do Sol, então, se você paga por token, o ponto de partida honesto é o Terra.',
          },
          {
            q: 'Qual o melhor LLM local se eu só tenho 8 GB de VRAM?',
            a: 'qwen2.5-coder:7b com 4,7 GB de download para código, ou llama3.2:3b com 2,0 GB para uso geral com folga. Esses são tamanhos de download, não requisitos de VRAM, então reserve alguns GB acima deles para a sua janela de contexto. Uma placa de 8 GB lida com ambos com conforto.',
          },
          {
            q: 'Como o Gemini 3.1 Pro se compara aos outros dois?',
            a: 'O Gemini 3.1 Pro é a escolha quando a entrada não é só texto. Ele é nativamente multimodal em texto, áudio, imagens, vídeo e repositórios de código inteiros, e o Google relata 77,1% verificados no ARC-AGI-2. Para raciocínio puramente textual e geração de código, Claude Opus 5 e GPT-5.6 Sol são mais fortes. Veja nosso <a href="/pt/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">guia do framework CO-STAR</a> para obter melhores saídas de qualquer modelo na nuvem.',
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
    metaDescription: '云端编程：Claude Opus 5（领先 Frontier-Bench v0.1）。通用：GPT-5.6 Sol。多模态：Gemini 3.1 Pro（ARC-AGI-2 达 77.1%）。本地：qwen3.5:9b。2026 年 8 月核实。',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      zh: {
        question: '当前最好的 LLM 是什么？',
        answer: '2026 年 7 月有三款旗舰接连发布，各自在不同领域领先。Claude Opus 5（7 月 24 日）在 Frontier-Bench v0.1 上居首，是编程之选。GPT-5.6 Sol（7 月 9 日）在考察命令行与智能体工作的 Terminal-Bench 2.1 上确立了新的技术水准。Gemini 3.1 Pro 在原生多模态任务上领先，ARC-AGI-2 的核实成绩为 77.1%。本地方面，qwen3.5:9b 下载体积为 6.6 GB。',
        bullets: [
          '云端编程：Claude Opus 5 — 领先 Frontier-Bench v0.1',
          '云端智能体/命令行：GPT-5.6 Sol — Terminal-Bench 2.1 新水准',
          '多模态：Gemini 3.1 Pro — ARC-AGI-2 核实 77.1%',
          '本地：qwen3.5:9b — 下载 6.6 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '没有哪一个 LLM 能在所有任务上取胜——Claude Opus 5 领先 Frontier-Bench v0.1，GPT-5.6 Sol 领先 Terminal-Bench 2.1，Gemini 3.1 Pro 领先多模态',
          '三款旗舰都在 2026 年 7 月发布，因此此前撰写的任何对比都落后了一代',
          'GPT-5.6 是一个系列而非单一模型：Sol 为旗舰，Terra 以半价达到 GPT-5.5 的水平，Luna 价格比 Sol 低 80%',
          '本地方面，qwen3.5:9b（6.6 GB）覆盖通用工作，qwen2.5-coder:7b（4.7 GB）覆盖编程——两者都远低于多数指南所假设的硬件',
          '云端模型需要 API 密钥并按令牌计费；本地模型在购置硬件后可免费运行',
        ],
      },
      body1: {
        title: '最好的 LLM 取决于任务——这是一张地图',
        content: [
          '<strong>2026 年 7 月，三款旗舰在半个月内相继登场。编程选 Claude Opus 5（7 月 24 日），智能体与命令行工作选 GPT-5.6 Sol（7 月 9 日），一切多模态选 Gemini 3.1 Pro。</strong>下文说明各自何时胜出，以及按工作流该选哪一个。',
          '各厂商不再发布共同的头部基准，因此比较它们意味着比较不同的评测。Anthropic 称 Opus 5 在 Frontier-Bench v0.1 上超越所有其他模型，并以更低的单任务成本达到 Opus 4.8 的两倍以上。OpenAI 称 GPT-5.6 Sol 在考察命令行工作流中规划与工具协调能力的 Terminal-Bench 2.1 上确立了新的技术水准。Google 称 Gemini 3.1 Pro 在 ARC-AGI-2 上取得 77.1% 的核实成绩。',
          '有一项结构性变化值得注意：GPT-5.6 是三款模型组成的系列，而非单次发布。Sol 是前沿模型，Terra 在智能基准上以半价达到 GPT-5.5 的水平，Luna 的价格比 Sol 低 80%。如果成本是你的硬约束，值得比较的是 Terra 或 Luna 与竞品旗舰，而不是 Sol。',
        ],
        columns: ['使用场景', '最佳 LLM', '原因'],
        rows: [
          { '使用场景': '编程', '最佳 LLM': 'Claude Opus 5', '原因': '居首 Frontier-Bench v0.1；以更低单任务成本达 Opus 4.8 两倍以上' },
          { '使用场景': '智能体 / 命令行', '最佳 LLM': 'GPT-5.6 Sol', '原因': 'Terminal-Bench 2.1 新技术水准' },
          { '使用场景': '多模态（视频、图像、音频）', '最佳 LLM': 'Gemini 3.1 Pro', '原因': '原生多模态；ARC-AGI-2 核实 77.1%' },
          { '使用场景': '成本敏感的吞吐', '最佳 LLM': 'GPT-5.6 Luna 或 Terra', '原因': 'Luna 低于 Sol 80%；Terra 以半价达 GPT-5.5 水平' },
          { '使用场景': '本地 / 离线通用', '最佳 LLM': 'qwen3.5:9b', '原因': '下载 6.6 GB，Ollama 中可获取的最新 Qwen' },
          { '使用场景': '本地 / 离线编程', '最佳 LLM': 'qwen2.5-coder:7b', '原因': '下载 4.7 GB，8 GB 显卡即可运行' },
        ],
      },
      body2: {
        title: '不读 50 篇评测该如何选择',
        content: [
          '<strong>从约束出发。</strong>预算、隐私、延迟还是能力？先选能解开你最硬约束的那个模型。如果约束是隐私，那么没有任何云端旗舰符合条件，问题就变成了哪款本地模型装得进你的显卡。',
          '<strong>用你真实的任务测试两个模型。</strong>公开基准无法预测你的用例，而且今天比一年前更是如此：三家厂商各自报告三种不同的评测，因此不存在可用于排序的同口径数字。云端用免费 API 额度，本地用 Ollama。',
          '<strong>按季度复查，而非按月。</strong>三款旗舰都在 2026 年 7 月、前后约两周内发布。这种扎堆正是规划时该考虑的模式：这个领域是成批推进的，而在一批发布之前写下的对比，落后的是整整一代，而不是稍显陈旧。',
        ],
        callouts: [{ type: 'info', text: '2026 年 8 月核实。Claude Opus 5 于 2026 年 7 月 24 日发布，GPT-5.6 系列于 2026 年 7 月 9 日发布。基准数字均为各厂商在自选评测上公布的自家结果——彼此之间不可直接比较。' }],
      },
      faq: {
        id: 'faq',
        title: '关于当前最佳 LLM 的快速解答',
        faqs: [
          {
            q: 'Claude Opus 5 和 GPT-5.6 哪个更好？',
            a: '它们在不同评测上领先，而且两家厂商都没有在对方的基准上公布数字。Anthropic 称 Claude Opus 5 在 Frontier-Bench v0.1 上超越所有其他模型，并以更低的单任务成本达到 Opus 4.8 的两倍以上。OpenAI 称 GPT-5.6 Sol 在 Terminal-Bench 2.1 上确立了新的技术水准。代码生成与分析选 Opus 5，驱动终端的智能体流程选 Sol。',
          },
          {
            q: 'GPT-5.6 的 Sol、Terra 和 Luna 有什么区别？',
            a: 'Sol 是该系列的前沿模型。Terra 是均衡之选，在智能基准上以半价达到 GPT-5.5 的表现。Luna 是经济之选，价格比 Sol 低 80%。多数日常工作用不上 Sol，因此若按令牌付费，诚实的起点是 Terra。',
          },
          {
            q: '只有 8 GB 显存时最好的本地 LLM 是哪个？',
            a: '编程选下载 4.7 GB 的 qwen2.5-coder:7b，通用选 2.0 GB 的 llama3.2:3b，都很宽裕。这些是下载体积而非显存需求，因此请在其之上再留出几 GB 给上下文窗口。8 GB 显卡运行两者都很从容。',
          },
          {
            q: 'Gemini 3.1 Pro 与另外两款相比如何？',
            a: '当输入不只是文本时，Gemini 3.1 Pro 是首选。它在文本、音频、图像、视频以及整个代码仓库上原生多模态，Google 公布其 ARC-AGI-2 核实成绩为 77.1%。若是纯文本推理与代码生成，Claude Opus 5 与 GPT-5.6 Sol 更强。想从任何云端模型获得更好输出，请参阅我们的 <a href="/zh/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR 提示框架指南</a>。',
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
    metaDescription: 'البرمجة السحابية: Claude Opus 5 (يتصدر Frontier-Bench v0.1). العام: GPT-5.6 Sol. متعدد الوسائط: Gemini 3.1 Pro (77.1% في ARC-AGI-2). محليًا: qwen3.5:9b. جرى التحقق في أغسطس 2026.',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5', 'GPT-5.6', 'Gemini 3.1 Pro', 'Llama 4 Scout'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون الذين يقارنون أفضل النماذج اللغوية المتاحة سحابيًا ومحليًا',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج لغوي كبير الآن؟',
        answer: 'صدرت ثلاثة نماذج رائدة في يوليو 2026، ويتصدر كل منها مجالًا مختلفًا. فـ Claude Opus 5 (24 يوليو) يتصدر Frontier-Bench v0.1 وهو خيار البرمجة. وGPT-5.6 Sol (9 يوليو) يرسي أحدث مستوى في Terminal-Bench 2.1 لعمل سطر الأوامر والوكلاء. ويتصدر Gemini 3.1 Pro المهام متعددة الوسائط أصلًا بنتيجة مُتحقَّق منها 77.1% في ARC-AGI-2. ومحليًا، حجم تنزيل qwen3.5:9b هو 6.6 غيغابايت.',
        bullets: [
          'البرمجة السحابية: Claude Opus 5 — يتصدر Frontier-Bench v0.1',
          'الوكلاء وسطر الأوامر: GPT-5.6 Sol — أحدث مستوى في Terminal-Bench 2.1',
          'متعدد الوسائط: Gemini 3.1 Pro — 77.1% مُتحقَّق منها في ARC-AGI-2',
          'محليًا: qwen3.5:9b — تنزيل 6.6 غيغابايت',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'لا يفوز نموذج واحد في كل المهام — يتصدر Claude Opus 5 في Frontier-Bench v0.1، وGPT-5.6 Sol في Terminal-Bench 2.1، وGemini 3.1 Pro في تعدد الوسائط',
          'صدرت النماذج الرائدة الثلاثة في يوليو 2026، لذا فأي مقارنة كُتبت قبل ذلك متأخرة بجيل كامل',
          'GPT-5.6 عائلة لا نموذجًا واحدًا: Sol هو الرائد، وTerra يضاهي GPT-5.5 بنصف السعر، وLuna أقل من Sol بنسبة 80%',
          'محليًا يغطي qwen3.5:9b (6.6 غيغابايت) العمل العام، ويغطي qwen2.5-coder:7b (4.7 غيغابايت) البرمجة — وكلاهما دون العتاد الذي تفترضه معظم الأدلة بكثير',
          'النماذج السحابية تتطلب مفاتيح واجهة برمجية وتُحاسب على الرموز؛ أما المحلية فتعمل مجانًا بعد شراء العتاد',
        ],
      },
      body1: {
        title: 'أفضل نموذج يتوقف على المهمة — وهذه الخريطة',
        content: [
          '<strong>وصلت ثلاثة نماذج رائدة خلال أسبوعين في يوليو 2026. Claude Opus 5 (24 يوليو) للبرمجة، وGPT-5.6 Sol (9 يوليو) لعمل الوكلاء وسطر الأوامر، وGemini 3.1 Pro لكل ما هو متعدد الوسائط.</strong> وفيما يلي: متى يتفوق كل منها، وأيها تختار حسب سير عملك.',
          'لم يعد المزوّدون ينشرون معيارًا رئيسيًا مشتركًا، ما يعني أن المقارنة بينهم هي مقارنة بين تقييمات مختلفة. تفيد Anthropic بأن Opus 5 يتجاوز كل النماذج الأخرى في Frontier-Bench v0.1 ويزيد على ضعف Opus 4.8 بتكلفة أقل لكل مهمة. وتفيد OpenAI بأن GPT-5.6 Sol يرسي أحدث مستوى في Terminal-Bench 2.1 الذي يختبر التخطيط وتنسيق الأدوات في سير عمل سطر الأوامر. وتفيد Google بأن Gemini 3.1 Pro حقق 77.1% مُتحقَّقًا منها في ARC-AGI-2.',
          'ثمة تغيّر بنيوي يستحق الذكر: GPT-5.6 عائلة من ثلاثة نماذج لا إصدارًا واحدًا. فـ Sol هو نموذج الحدود، وTerra يضاهي GPT-5.5 في معايير الذكاء بنصف السعر، وLuna أقل سعرًا من Sol بنسبة 80%. وإن كانت التكلفة قيدك الحاسم، فالمقارنة المهمة هي بين Terra أو Luna ونموذج رائد منافس، لا Sol.',
        ],
        columns: ['حالة الاستخدام', 'أفضل نموذج', 'السبب'],
        rows: [
          { 'حالة الاستخدام': 'البرمجة', 'أفضل نموذج': 'Claude Opus 5', 'السبب': 'يتصدر Frontier-Bench v0.1؛ أكثر من ضعف Opus 4.8 بتكلفة أقل لكل مهمة' },
          { 'حالة الاستخدام': 'الوكلاء / سطر الأوامر', 'أفضل نموذج': 'GPT-5.6 Sol', 'السبب': 'أحدث مستوى في Terminal-Bench 2.1' },
          { 'حالة الاستخدام': 'متعدد الوسائط (فيديو، صور، صوت)', 'أفضل نموذج': 'Gemini 3.1 Pro', 'السبب': 'متعدد الوسائط أصلًا؛ 77.1% مُتحقَّق منها في ARC-AGI-2' },
          { 'حالة الاستخدام': 'إنتاجية حساسة للتكلفة', 'أفضل نموذج': 'GPT-5.6 Luna أو Terra', 'السبب': 'Luna أقل من Sol بـ80%؛ وTerra بمستوى GPT-5.5 بنصف السعر' },
          { 'حالة الاستخدام': 'محلي / دون اتصال، عام', 'أفضل نموذج': 'qwen3.5:9b', 'السبب': 'تنزيل 6.6 غيغابايت، أحدث Qwen متاح في Ollama' },
          { 'حالة الاستخدام': 'محلي / دون اتصال، برمجة', 'أفضل نموذج': 'qwen2.5-coder:7b', 'السبب': 'تنزيل 4.7 غيغابايت، يعمل على بطاقة 8 غيغابايت' },
        ],
      },
      body2: {
        title: 'كيف تختار دون قراءة 50 مراجعة',
        content: [
          '<strong>ابدأ من القيد.</strong> أهو الميزانية أم الخصوصية أم زمن الاستجابة أم القدرة؟ اختر النموذج الذي يتجاوز أقسى قيودك أولًا. فإن كانت الخصوصية هي القيد، فلا يصلح أي نموذج سحابي رائد، ويصير السؤال: أي نموذج محلي يتسع في بطاقتك.',
          '<strong>اختبر نموذجين على مهمتك الحقيقية.</strong> المعايير المنشورة لا تتنبأ بحالتك، وهذا أصح اليوم منه قبل عام: فالمزوّدون الثلاثة يبلّغون عن ثلاثة تقييمات مختلفة، ولا يوجد رقم متكافئ لترتيبهم به. استخدم الطبقات المجانية للواجهات البرمجية للنماذج السحابية، وOllama للمحلية.',
          '<strong>راجع فصليًا لا شهريًا.</strong> صدرت النماذج الرائدة الثلاثة في يوليو 2026 بفارق أسبوعين تقريبًا. هذا التجمّع هو النمط الذي ينبغي التخطيط حوله: المشهد يتحرك على دفعات، والمقارنة المكتوبة قبل دفعة تصير متأخرة بجيل كامل لا قديمة قليلًا.',
        ],
        callouts: [{ type: 'info', text: 'جرى التحقق في أغسطس 2026. صدر Claude Opus 5 في 24 يوليو 2026، وعائلة GPT-5.6 في 9 يوليو 2026. أرقام المعايير هي نتائج المزوّدين المنشورة ذاتيًا على تقييمات اختاروها بأنفسهم — وهي ليست قابلة للمقارنة المباشرة فيما بينها.' }],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن أفضل نموذج لغوي',
        faqs: [
          {
            q: 'أيهما أفضل: Claude Opus 5 أم GPT-5.6؟',
            a: 'كلٌّ منهما يتصدر تقييمًا مختلفًا، ولا ينشر أيٌّ من المزوّدَين رقمًا على معيار الآخر. تفيد Anthropic بأن Claude Opus 5 يتجاوز كل النماذج الأخرى في Frontier-Bench v0.1 ويزيد على ضعف Opus 4.8 بتكلفة أقل لكل مهمة. وتفيد OpenAI بأن GPT-5.6 Sol يرسي أحدث مستوى في Terminal-Bench 2.1. اختر Opus 5 لتوليد الشيفرة وتحليلها، وSol لتدفقات الوكلاء التي تشغّل طرفية.',
          },
          {
            q: 'ما الفرق بين GPT-5.6 Sol وTerra وLuna؟',
            a: 'Sol هو نموذج الحدود في العائلة. وTerra هو الخيار المتوازن ويؤدي مثل GPT-5.5 في معايير الذكاء بنصف السعر. وLuna هو الخيار الاقتصادي بسعر أقل من Sol بنسبة 80%. ومعظم العمل اليومي لا يحتاج Sol، فإن كنت تدفع مقابل الرموز فنقطة البداية الصادقة هي Terra.',
          },
          {
            q: 'ما أفضل نموذج محلي إن كان لديّ 8 غيغابايت ذاكرة رسومية فقط؟',
            a: 'qwen2.5-coder:7b بحجم تنزيل 4.7 غيغابايت للبرمجة، أو llama3.2:3b بحجم 2.0 غيغابايت للاستخدام العام مع هامش وافر. وهذه أحجام تنزيل لا متطلبات ذاكرة رسومية، فاترك بضعة غيغابايت فوقها لنافذة السياق. وبطاقة 8 غيغابايت تستوعب كليهما بأريحية.',
          },
          {
            q: 'كيف يقارَن Gemini 3.1 Pro بالاثنين الآخرين؟',
            a: 'Gemini 3.1 Pro هو الخيار حين لا يكون المدخل نصًا فقط. فهو متعدد الوسائط أصلًا عبر النص والصوت والصور والفيديو ومستودعات الشيفرة الكاملة، وتفيد Google بنتيجة 77.1% مُتحقَّق منها في ARC-AGI-2. أما للاستدلال النصي الخالص وتوليد الشيفرة فـ Claude Opus 5 وGPT-5.6 Sol أقوى. راجع <a href="/ar/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">دليل إطار CO-STAR</a> للحصول على مخرجات أفضل من أي نموذج سحابي.',
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
    metaDescription: '코딩: Claude Opus 5 (Frontier-Bench v0.1 선두). 일반: GPT-5.6 Sol. 멀티모달: Gemini 3.1 Pro (ARC-AGI-2 77.1%). 로컬: qwen3.5:9b. 2026년 8월 확인.',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Claude Opus 5', 'GPT-5.6', 'Gemini 3.1 Pro', 'Llama 4 Scout'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '클라우드 및 로컬에서 이용 가능한 최고의 LLM을 비교하는 사용자',
    parentArticle: '/local-llms/best-local-llms-2026',
    siblingBites: ['co-star-prompt-framework', 'ai-model-knowledge-cutoff-dates'],
    is_living_page: true,
    targetKeywords: ['최고의 LLM 2026', '지금 가장 좋은 AI 모델', 'Claude vs GPT 비교', '로컬 LLM 추천', 'GPT-5.6 Sol'],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: '지금 가장 좋은 LLM은 무엇입니까?',
        answer: '2026년 7월에 세 가지 플래그십이 출시되었고 각각 다른 영역을 이끕니다. Claude Opus 5(7월 24일)는 Frontier-Bench v0.1에서 선두이며 코딩용 선택입니다. GPT-5.6 Sol(7월 9일)은 명령줄과 에이전트 작업을 평가하는 Terminal-Bench 2.1에서 최고 수준을 세웠습니다. Gemini 3.1 Pro는 네이티브 멀티모달 작업을 이끌며 ARC-AGI-2에서 검증된 77.1%를 기록했습니다. 로컬에서는 qwen3.5:9b가 6.6 GB 다운로드입니다.',
        bullets: [
          '클라우드 코딩: Claude Opus 5 — Frontier-Bench v0.1 선두',
          '클라우드 에이전트/CLI: GPT-5.6 Sol — Terminal-Bench 2.1 최고 수준',
          '멀티모달: Gemini 3.1 Pro — ARC-AGI-2 검증 77.1%',
          '로컬: qwen3.5:9b — 다운로드 6.6 GB',
        ],
        updatedDate: '2026-08',
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
          '모든 작업에서 앞서는 단일 LLM은 없습니다 — Claude Opus 5는 Frontier-Bench v0.1, GPT-5.6 Sol은 Terminal-Bench 2.1, Gemini 3.1 Pro는 멀티모달에서 선두입니다',
          '세 플래그십 모두 2026년 7월에 나왔으므로, 그 이전에 작성된 비교는 한 세대 뒤처진 것입니다',
          'GPT-5.6은 단일 모델이 아니라 제품군입니다: Sol이 플래그십, Terra는 절반 가격에 GPT-5.5 수준, Luna는 Sol보다 80% 저렴합니다',
          '로컬에서는 qwen3.5:9b(6.6 GB)가 범용을, qwen2.5-coder:7b(4.7 GB)가 코딩을 담당합니다 — 둘 다 대부분의 가이드가 전제하는 하드웨어보다 훨씬 가볍습니다',
          '클라우드 모델은 API 키가 필요하고 토큰당 비용이 들지만, 로컬 모델은 하드웨어 구입 후 무료로 실행됩니다',
        ],
      },
      body1: {
        title: '최고의 LLM은 작업에 따라 다릅니다 — 지도는 이렇습니다',
        content: [
          '<strong>2026년 7월, 세 플래그십이 2주 사이에 등장했습니다. 코딩에는 Claude Opus 5(7월 24일), 에이전트와 명령줄 작업에는 GPT-5.6 Sol(7월 9일), 멀티모달 전반에는 Gemini 3.1 Pro입니다.</strong> 아래에서 각각이 언제 앞서는지, 워크플로별로 무엇을 골라야 하는지 정리합니다.',
          '이제 업체들은 공통의 대표 벤치마크를 발표하지 않으므로, 비교한다는 것은 서로 다른 평가를 비교한다는 뜻입니다. Anthropic은 Opus 5가 Frontier-Bench v0.1에서 다른 모든 모델을 앞서고 작업당 비용은 낮추면서 Opus 4.8의 두 배를 넘어섰다고 밝힙니다. OpenAI는 GPT-5.6 Sol이 명령줄 워크플로에서 계획 수립과 도구 조율을 평가하는 Terminal-Bench 2.1에서 최고 수준을 세웠다고 밝힙니다. Google은 Gemini 3.1 Pro가 ARC-AGI-2에서 검증된 77.1%를 기록했다고 밝힙니다.',
          '짚어둘 구조적 변화가 있습니다. GPT-5.6은 단일 출시가 아니라 세 모델로 이루어진 제품군입니다. Sol이 프런티어 모델이고, Terra는 지능 벤치마크에서 절반 가격에 GPT-5.5 수준을 내며, Luna는 Sol보다 80% 낮은 가격입니다. 비용이 결정적 제약이라면 비교해야 할 대상은 Sol이 아니라 Terra나 Luna 대 경쟁사 플래그십입니다.',
        ],
        columns: ['사용 사례', '최고의 LLM', '이유'],
        rows: [
          { '사용 사례': '코딩', '최고의 LLM': 'Claude Opus 5', '이유': 'Frontier-Bench v0.1 선두; 작업당 낮은 비용으로 Opus 4.8의 2배 이상' },
          { '사용 사례': '에이전트 / 명령줄', '최고의 LLM': 'GPT-5.6 Sol', '이유': 'Terminal-Bench 2.1 최고 수준' },
          { '사용 사례': '멀티모달(영상, 이미지, 음성)', '최고의 LLM': 'Gemini 3.1 Pro', '이유': '네이티브 멀티모달; ARC-AGI-2 검증 77.1%' },
          { '사용 사례': '비용 민감 처리량', '최고의 LLM': 'GPT-5.6 Luna 또는 Terra', '이유': 'Luna는 Sol보다 80% 저렴; Terra는 절반 가격에 GPT-5.5 수준' },
          { '사용 사례': '로컬 / 오프라인 범용', '최고의 LLM': 'qwen3.5:9b', '이유': '다운로드 6.6 GB, Ollama에서 받을 수 있는 최신 Qwen' },
          { '사용 사례': '로컬 / 오프라인 코딩', '최고의 LLM': 'qwen2.5-coder:7b', '이유': '다운로드 4.7 GB, 8 GB 카드에서 실행' },
        ],
      },
      body2: {
        title: '리뷰 50개를 읽지 않고 고르는 법',
        content: [
          '<strong>제약에서 출발하세요.</strong> 예산, 프라이버시, 지연 시간, 성능 중 무엇입니까? 가장 강한 제약을 먼저 해소하는 모델을 고르십시오. 프라이버시가 제약이라면 어떤 클라우드 플래그십도 해당되지 않으며, 질문은 어떤 로컬 모델이 내 카드에 올라가느냐로 바뀝니다.',
          '<strong>실제 작업으로 두 모델을 시험하세요.</strong> 공개된 벤치마크는 여러분의 사용 사례를 예측하지 못하며, 이는 1년 전보다 지금 더 그렇습니다. 세 업체가 서로 다른 세 가지 평가로 보고하므로 순위를 매길 동일 기준 수치가 존재하지 않습니다. 클라우드는 무료 API 등급을, 로컬은 Ollama를 쓰십시오.',
          '<strong>매월이 아니라 분기별로 재점검하세요.</strong> 세 플래그십 모두 2026년 7월, 약 2주 간격으로 나왔습니다. 이 몰림이야말로 계획의 기준이 되어야 할 패턴입니다. 이 분야는 물결처럼 움직이며, 물결 직전에 쓰인 비교는 조금 낡은 것이 아니라 한 세대가 뒤처집니다.',
        ],
        callouts: [{ type: 'info', text: '2026년 8월 확인. Claude Opus 5는 2026년 7월 24일, GPT-5.6 제품군은 2026년 7월 9일 출시되었습니다. 벤치마크 수치는 각 업체가 스스로 고른 평가에서 발표한 자체 결과이며, 서로 직접 비교할 수 있는 값이 아닙니다.' }],
      },
      faq: {
        id: 'faq',
        title: '최고의 LLM에 대한 빠른 답변',
        faqs: [
          {
            q: 'Claude Opus 5와 GPT-5.6 중 어느 것이 더 낫습니까?',
            a: '둘은 서로 다른 평가에서 앞서며, 어느 쪽도 상대의 벤치마크 수치를 발표하지 않습니다. Anthropic은 Claude Opus 5가 Frontier-Bench v0.1에서 다른 모든 모델을 앞서고 작업당 비용은 낮추면서 Opus 4.8의 두 배를 넘어섰다고 밝힙니다. OpenAI는 GPT-5.6 Sol이 Terminal-Bench 2.1에서 최고 수준을 세웠다고 밝힙니다. 코드 생성과 분석에는 Opus 5를, 터미널을 다루는 에이전트 워크플로에는 Sol을 고르십시오.',
          },
          {
            q: 'GPT-5.6의 Sol, Terra, Luna는 무엇이 다릅니까?',
            a: 'Sol은 제품군의 프런티어 모델입니다. Terra는 균형형으로 지능 벤치마크에서 절반 가격에 GPT-5.5와 동등한 성능을 냅니다. Luna는 비용 효율형으로 Sol보다 80% 낮은 가격입니다. 일상 업무 대부분은 Sol이 필요 없으므로, 토큰당 비용을 낸다면 정직한 출발점은 Terra입니다.',
          },
          {
            q: 'VRAM이 8GB뿐이라면 최고의 로컬 LLM은 무엇입니까?',
            a: '코딩에는 다운로드 4.7 GB의 qwen2.5-coder:7b, 범용에는 2.0 GB의 llama3.2:3b가 여유롭게 동작합니다. 이는 VRAM 요구치가 아니라 다운로드 용량이므로, 컨텍스트 창을 위해 그보다 몇 GB 여유를 두십시오. 8GB 카드로 둘 다 무리 없이 다룰 수 있습니다.',
          },
          {
            q: 'Gemini 3.1 Pro는 나머지 둘과 비교하면 어떻습니까?',
            a: '입력이 텍스트만이 아닐 때 Gemini 3.1 Pro가 선택지입니다. 텍스트, 음성, 이미지, 영상, 코드 저장소 전체에 걸쳐 네이티브 멀티모달이며, Google은 ARC-AGI-2에서 검증된 77.1%를 보고합니다. 순수 텍스트 추론과 코드 생성에서는 Claude Opus 5와 GPT-5.6 Sol이 더 강합니다. 어떤 클라우드 모델에서든 더 나은 출력을 얻는 요령은 <a href="/ko/prompt-bites/co-star-prompt-framework" class="text-primary hover:underline">CO-STAR 프레임워크 가이드</a>를 참조하십시오.',
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
