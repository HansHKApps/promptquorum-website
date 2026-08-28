import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Best Ollama Models Right Now?',
    dateModified: '2026-08-28',
    seoTitle: 'Best Ollama Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Best general Ollama model: qwen3.5:9b (6.6 GB). Best coding: qwen2.5-coder:7b (4.7 GB). Best compact: llama3.2:3b (2.0 GB). Sizes verified August 2026.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-en.webp',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    current_models_mentioned: ['Llama 3.2 3B', 'DeepSeek-R1 7B', 'Gemma 4'],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Developers choosing Ollama models for everyday use',
    parentArticle: '/local-llms/top-open-source-models-ollama',
    siblingBites: ['ollama-latest-version', 'best-ollama-models-cpu-only'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models right now?',
        answer: 'For general use, qwen3.5:9b is the strongest current pick at a 6.6 GB download. For coding, qwen2.5-coder:7b at 4.7 GB does the job on far less hardware than most guides claim. For compact setups, llama3.2:3b runs in 2.0 GB. All sizes read from the Ollama library on 28 August 2026.',
        bullets: [
          'Best general: qwen3.5:9b — 6.6 GB',
          'Best coding: qwen2.5-coder:7b — 4.7 GB',
          'Best compact: llama3.2:3b — 2.0 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best general use: qwen3.5:9b — 6.6 GB download, the newest Qwen generation actually available in Ollama',
          'Best coding: qwen2.5-coder:7b — 4.7 GB, and it is the value pick because qwen3-coder starts at 19 GB',
          'Best compact: llama3.2:3b — 2.0 GB, or deepseek-r1:1.5b at 1.1 GB if you want reasoning traces',
          'Watch the figure you are comparing: these are download sizes from the Ollama library, not VRAM requirements. Leave headroom above the download size for your context window',
          'A model from six months ago with mature quantization often beats a brand-new release with limited community support',
        ],
      },
      body1: {
        title: 'The Three Tier Leaders',
        content: [
          '<strong>For general use the current pick is qwen3.5:9b at a 6.6 GB download. Sizes below were read directly from the Ollama library on 28 August 2026.</strong>',
          '"Best" in practice means the highest balance of output quality, inference speed, and memory efficiency — not raw benchmark score alone. A 9B model you can actually fit is more useful than a 30B model that swaps to disk.',
          'One number worth correcting: coding models are cheaper than most guides suggest. <code>qwen2.5-coder:7b</code> is a 4.7 GB download and handles Python, TypeScript and Go without special prompting. The newer <code>qwen3-coder</code> starts at 19 GB, so it is a different class of hardware entirely, not a drop-in upgrade.',
        ],
        columns: ['Tier', 'Model', 'Download', 'Why It Leads'],
        rows: [
          { 'Tier': 'Compact', 'Model': 'llama3.2:3b', 'Download': '2.0 GB', 'Why It Leads': 'Best quality-per-GB at the small end; 81.6M pulls' },
          { 'Tier': 'General', 'Model': 'qwen3.5:9b', 'Download': '6.6 GB', 'Why It Leads': 'Newest Qwen generation available in Ollama' },
          { 'Tier': 'Coding', 'Model': 'qwen2.5-coder:7b', 'Download': '4.7 GB', 'Why It Leads': 'Strong coding output at a fraction of qwen3-coder size' },
          { 'Tier': 'Reasoning', 'Model': 'deepseek-r1:8b', 'Download': '5.2 GB', 'Why It Leads': 'Second most-pulled model on Ollama at 92M pulls' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-en.webp',
        imageCaption: 'Best Ollama Models by Tier -- Current leader per tier',
      },
      body2: {
        title: 'When Newer Isn\'t Better',
        content: [
          'A new model release does not automatically become the best Ollama pick. <strong>Quantization quality, community fine-tunes, and Ollama integration maturity take 4–8 weeks to catch up with a fresh release.</strong>',
          'The pull counts make the point better than any benchmark. <code>llama3.1</code> is still the most-downloaded model in the library at 118.9M pulls, and <code>llama3.2</code> sits at 81.6M — both ahead of every newer arrival. That is not inertia; it is people picking the thing whose quantizations are well-optimized and whose behaviour is predictable across hardware.',
          'If you want the newer generation, <code>gemma4</code> (7.2 GB) and <code>gpt-oss:20b</code> (14 GB, 128K context) are both worth a look. Give a model 6+ weeks at the top before you rely on it in production. For a deeper look at evaluating models for your specific workload, see the <a href="/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">top open-source models for Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Sizes verified against ollama.com/library on 28 August 2026. Model tags change often — run ollama pull and check the reported size before planning around any figure here.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-en.webp',
        imageCaption: 'Why Newer Isn\'t Always Better -- What it takes for a model to mature',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Models',
        faqs: [
          {
            q: 'Should I always use the newest Ollama model?',
            a: 'Not automatically. New releases need 4–8 weeks for community quantizations, fine-tunes, and Ollama integration to mature — which is why llama3.1 is still the most-pulled model in the library. Check the table above for current vetted picks. For CPU-only setups, see <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">best Ollama models for CPU-only use</a>.',
          },
          {
            q: 'Which Ollama model is best for coding right now?',
            a: 'qwen2.5-coder:7b at a 4.7 GB download. It handles Python, TypeScript and Go without special prompting and fits comfortably on an 8 GB card. Note that qwen3-coder, despite the higher version number, starts at 19 GB — so it is not a drop-in upgrade unless you have the hardware for it.',
          },
          {
            q: 'How much VRAM do I actually need?',
            a: 'The sizes quoted here are download sizes, not VRAM requirements. As a rule of thumb, allow a couple of GB above the download size for the context window and overhead. A 6.6 GB model like qwen3.5:9b is comfortable on a 12 GB card and workable on 8 GB with a modest context.',
          },
          {
            q: 'Are Qwen models better than Llama models in 2026?',
            a: 'For coding, the Qwen line leads — qwen2.5-coder and qwen3-coder have no direct Llama equivalent in the library. For general use it is closer than the version numbers suggest: llama3.1 and llama3.2 remain the two most-downloaded models on Ollama, ahead of every newer release, because their quantizations are mature and their behaviour is predictable.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best VPN for Downloading AI Models](/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Ollama 128K Context Models](/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Ollama Latest Version: What\'s New?](/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Die besten Ollama-Modelle im Moment?',
    seoTitle: 'Beste Ollama-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Bestes allgemeines Ollama-Modell: qwen3.5:9b (6,6 GB). Bestes Coding: qwen2.5-coder:7b (4,7 GB). Kompakt: llama3.2:3b (2,0 GB). Größen geprüft im August 2026.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-de.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      de: {
        question: 'Die besten Ollama-Modelle im Moment?',
        answer: 'Für den allgemeinen Gebrauch ist qwen3.5:9b mit 6,6 GB Download die derzeit stärkste Wahl. Für Coding erledigt qwen2.5-coder:7b mit 4,7 GB die Arbeit auf deutlich weniger Hardware, als die meisten Ratgeber behaupten. Für kompakte Setups läuft llama3.2:3b in 2,0 GB. Alle Größen am 28. August 2026 aus der Ollama-Bibliothek gelesen.',
        bullets: [
          'Bestes allgemeines Modell: qwen3.5:9b — 6,6 GB',
          'Bestes Coding-Modell: qwen2.5-coder:7b — 4,7 GB',
          'Bestes kompaktes Modell: llama3.2:3b — 2,0 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Allzwecknutzung: qwen3.5:9b — 6,6 GB Download, die neueste Qwen-Generation, die in Ollama tatsächlich verfügbar ist',
          'Bestes Coding: qwen2.5-coder:7b — 4,7 GB, und die Preis-Leistungs-Wahl, denn qwen3-coder beginnt erst bei 19 GB',
          'Bestes kompaktes Modell: llama3.2:3b — 2,0 GB, oder deepseek-r1:1.5b mit 1,1 GB, wenn Sie Reasoning-Spuren wollen',
          'Achten Sie darauf, welche Zahl Sie vergleichen: Dies sind Download-Größen aus der Ollama-Bibliothek, keine VRAM-Anforderungen. Planen Sie über der Download-Größe Reserve für Ihr Kontextfenster ein',
          'Ein Modell von vor sechs Monaten mit ausgereifter Quantisierung übertrifft oft ein brandneues Release mit begrenzter Community-Unterstützung',
        ],
      },
      body1: {
        title: 'Die drei Tier-Spitzenreiter',
        content: [
          '<strong>Für den allgemeinen Gebrauch ist qwen3.5:9b mit 6,6 GB Download die aktuelle Wahl. Die Größen unten wurden am 28. August 2026 direkt aus der Ollama-Bibliothek gelesen.</strong>',
          '"Bestes" bedeutet in der Praxis die höchste Balance aus Ausgabequalität, Inferenzgeschwindigkeit und Speichereffizienz — nicht allein ein roher Benchmark-Score. Ein 9B-Modell, das tatsächlich hineinpasst, ist nützlicher als ein 30B-Modell, das auf die Festplatte auslagert.',
          'Eine Zahl gehört korrigiert: Coding-Modelle sind günstiger, als die meisten Ratgeber nahelegen. <code>qwen2.5-coder:7b</code> ist ein 4,7-GB-Download und bearbeitet Python, TypeScript und Go ohne spezielles Prompting. Das neuere <code>qwen3-coder</code> beginnt bei 19 GB und ist damit eine ganz andere Hardwareklasse, kein einfaches Upgrade.',
        ],
        columns: ['Tier', 'Modell', 'Download', 'Warum führend'],
        rows: [
          { 'Tier': 'Kompakt', 'Modell': 'llama3.2:3b', 'Download': '2,0 GB', 'Warum führend': 'Beste Qualität-pro-GB am unteren Ende; 81,6 Mio. Pulls' },
          { 'Tier': 'Allgemein', 'Modell': 'qwen3.5:9b', 'Download': '6,6 GB', 'Warum führend': 'Neueste in Ollama verfügbare Qwen-Generation' },
          { 'Tier': 'Coding', 'Modell': 'qwen2.5-coder:7b', 'Download': '4,7 GB', 'Warum führend': 'Starke Coding-Ausgabe bei einem Bruchteil der qwen3-coder-Größe' },
          { 'Tier': 'Reasoning', 'Modell': 'deepseek-r1:8b', 'Download': '5,2 GB', 'Warum führend': 'Zweitmeistgeladenes Modell auf Ollama mit 92 Mio. Pulls' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-de.webp',
        imageCaption: 'Beste Ollama-Modelle nach Stufe -- Aktueller Spitzenreiter je Stufe',
      },
      body2: {
        title: 'Wenn Neuer Nicht Besser Ist',
        content: [
          'Ein neues Modell-Release wird nicht automatisch zur besten Ollama-Wahl. <strong>Quantisierungsqualität, Community-Fine-Tunes und Ollama-Integrationsreife brauchen 4–8 Wochen, um mit einem frischen Release Schritt zu halten.</strong>',
          'Die Pull-Zahlen belegen das besser als jeder Benchmark. <code>llama3.1</code> ist mit 118,9 Mio. Pulls weiterhin das meistgeladene Modell der Bibliothek, <code>llama3.2</code> liegt bei 81,6 Mio. — beide vor jedem neueren Zugang. Das ist keine Trägheit, sondern die Wahl dessen, dessen Quantisierungen gut optimiert und dessen Verhalten über Hardware hinweg vorhersagbar ist.',
          'Wenn Sie die neuere Generation wollen, lohnen sich <code>gemma4</code> (7,2 GB) und <code>gpt-oss:20b</code> (14 GB, 128K Kontext). Geben Sie einem Modell 6+ Wochen an der Spitze, bevor Sie im Produktivbetrieb darauf bauen. Für einen tieferen Einblick in die Modellbewertung für Ihre Arbeitslast lesen Sie die <a href="/de/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Top-Open-Source-Modelle für Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Größen am 28. August 2026 gegen ollama.com/library geprüft. Modell-Tags ändern sich häufig — führen Sie ollama pull aus und prüfen Sie die gemeldete Größe, bevor Sie mit einer Zahl von hier planen.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-de.webp',
        imageCaption: 'Warum Neuer Nicht Immer Besser Ist -- Was ein Modell zur Reife braucht',
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Ollama-Modellen',
        faqs: [
          {
            q: 'Sollte ich immer das neueste Ollama-Modell verwenden?',
            a: 'Nicht automatisch. Neue Releases brauchen 4–8 Wochen, bis Community-Quantisierungen, Fine-Tunes und Ollama-Integration ausgereift sind — deshalb ist llama3.1 weiterhin das meistgeladene Modell der Bibliothek. Die aktuell geprüften Empfehlungen stehen in der Tabelle oben. Für reine CPU-Setups lesen Sie <a href="/de/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">beste Ollama-Modelle für CPU-only-Nutzung</a>.',
          },
          {
            q: 'Welches Ollama-Modell ist derzeit das beste für Coding?',
            a: 'qwen2.5-coder:7b mit 4,7 GB Download. Es bearbeitet Python, TypeScript und Go ohne spezielles Prompting und passt bequem auf eine 8-GB-Karte. Beachten Sie: qwen3-coder beginnt trotz höherer Versionsnummer bei 19 GB und ist damit kein einfaches Upgrade, sofern Sie nicht die Hardware dafür haben.',
          },
          {
            q: 'Wie viel VRAM brauche ich tatsächlich?',
            a: 'Die hier genannten Größen sind Download-Größen, keine VRAM-Anforderungen. Als Faustregel planen Sie ein paar GB über der Download-Größe für Kontextfenster und Overhead ein. Ein 6,6-GB-Modell wie qwen3.5:9b läuft bequem auf einer 12-GB-Karte und mit moderatem Kontext auch auf 8 GB.',
          },
          {
            q: 'Sind Qwen-Modelle im Jahr 2026 besser als Llama-Modelle?',
            a: 'Beim Coding führt die Qwen-Linie — zu qwen2.5-coder und qwen3-coder gibt es in der Bibliothek kein direktes Llama-Gegenstück. Im allgemeinen Gebrauch ist es enger, als die Versionsnummern vermuten lassen: llama3.1 und llama3.2 bleiben die beiden meistgeladenen Modelle auf Ollama, vor jedem neueren Release, weil ihre Quantisierungen ausgereift und ihr Verhalten vorhersagbar ist.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Bestes VPN zum Herunterladen von KI-Modellen](/de/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Ollama 128K-Kontext-Modelle](/de/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Ollama neueste Version: Was ist neu?](/de/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/de/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Les meilleurs modèles Ollama en ce moment ?',
    seoTitle: 'Meilleurs modèles Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Meilleur Ollama général : qwen3.5:9b (6,6 Go). Code : qwen2.5-coder:7b (4,7 Go). Compact : llama3.2:3b (2,0 Go). Tailles vérifiées en août 2026.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-fr.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      fr: {
        question: 'Les meilleurs modèles Ollama en ce moment ?',
        answer: 'Pour un usage général, qwen3.5:9b est le choix le plus solide avec 6,6 Go de téléchargement. Pour le code, qwen2.5-coder:7b à 4,7 Go fait le travail sur bien moins de matériel que ne le prétendent la plupart des guides. Pour les configurations compactes, llama3.2:3b tient dans 2,0 Go. Toutes les tailles relevées dans la bibliothèque Ollama le 28 août 2026.',
        bullets: [
          'Meilleur polyvalent : qwen3.5:9b — 6,6 Go',
          'Meilleur pour le code : qwen2.5-coder:7b — 4,7 Go',
          'Meilleur compact : llama3.2:3b — 2,0 Go',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur usage polyvalent : qwen3.5:9b — 6,6 Go de téléchargement, la génération Qwen la plus récente réellement disponible dans Ollama',
          'Meilleur code : qwen2.5-coder:7b — 4,7 Go, et c\'est le choix rapport qualité-prix car qwen3-coder démarre à 19 Go',
          'Meilleur compact : llama3.2:3b — 2,0 Go, ou deepseek-r1:1.5b à 1,1 Go si vous voulez des traces de raisonnement',
          'Attention au chiffre comparé : ce sont des tailles de téléchargement de la bibliothèque Ollama, pas des besoins en VRAM. Prévoyez de la marge au-dessus pour votre fenêtre de contexte',
          'Un modèle de six mois avec une quantization mature surpasse souvent une toute nouvelle release au support communautaire limité',
        ],
      },
      body1: {
        title: 'Les trois leaders par tier',
        content: [
          '<strong>Pour un usage général, le choix actuel est qwen3.5:9b avec 6,6 Go de téléchargement. Les tailles ci-dessous ont été relevées directement dans la bibliothèque Ollama le 28 août 2026.</strong>',
          '"Meilleur" en pratique signifie le meilleur équilibre entre qualité de sortie, vitesse d\'inférence et efficacité mémoire — pas uniquement un score de benchmark brut. Un modèle 9B qui tient réellement est plus utile qu\'un modèle 30B qui déborde sur le disque.',
          'Un chiffre mérite correction : les modèles de code coûtent moins cher que ne le suggèrent la plupart des guides. <code>qwen2.5-coder:7b</code> pèse 4,7 Go et gère Python, TypeScript et Go sans prompting spécial. Le plus récent <code>qwen3-coder</code> démarre à 19 Go : c\'est une tout autre classe de matériel, pas une mise à niveau directe.',
        ],
        columns: ['Tier', 'Modèle', 'Téléchargement', 'Pourquoi il est en tête'],
        rows: [
          { 'Tier': 'Compact', 'Modèle': 'llama3.2:3b', 'Téléchargement': '2,0 Go', 'Pourquoi il est en tête': 'Meilleure qualité/Go dans le bas de gamme ; 81,6 M de pulls' },
          { 'Tier': 'Polyvalent', 'Modèle': 'qwen3.5:9b', 'Téléchargement': '6,6 Go', 'Pourquoi il est en tête': 'Génération Qwen la plus récente disponible dans Ollama' },
          { 'Tier': 'Code', 'Modèle': 'qwen2.5-coder:7b', 'Téléchargement': '4,7 Go', 'Pourquoi il est en tête': 'Sortie de code solide pour une fraction de la taille de qwen3-coder' },
          { 'Tier': 'Raisonnement', 'Modèle': 'deepseek-r1:8b', 'Téléchargement': '5,2 Go', 'Pourquoi il est en tête': 'Deuxième modèle le plus téléchargé sur Ollama avec 92 M de pulls' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-fr.webp',
        imageCaption: 'Meilleurs Modèles Ollama par Niveau -- Leader actuel par niveau',
      },
      body2: {
        title: 'Quand le plus récent n\'est pas le meilleur',
        content: [
          'Une nouvelle release de modèle ne devient pas automatiquement le meilleur choix Ollama. <strong>La qualité de quantization, les fine-tunes communautaires et la maturité d\'intégration Ollama mettent 4–8 semaines à rattraper une nouvelle release.</strong>',
          'Les compteurs de téléchargement le démontrent mieux que n\'importe quel benchmark. <code>llama3.1</code> reste le modèle le plus téléchargé de la bibliothèque avec 118,9 M de pulls, et <code>llama3.2</code> atteint 81,6 M — tous deux devant chaque arrivée plus récente. Ce n\'est pas de l\'inertie : les gens choisissent ce dont les quantizations sont bien optimisées et le comportement prévisible.',
          'Si vous voulez la génération récente, <code>gemma4</code> (7,2 Go) et <code>gpt-oss:20b</code> (14 Go, contexte 128K) méritent un essai. Laissez un modèle tenir la tête 6+ semaines avant de compter dessus en production. Pour approfondir l\'évaluation des modèles selon votre charge, consultez les <a href="/fr/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">meilleurs modèles open-source pour Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Tailles vérifiées sur ollama.com/library le 28 août 2026. Les tags de modèles changent souvent — lancez ollama pull et vérifiez la taille annoncée avant de planifier autour d\'un chiffre d\'ici.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-fr.webp',
        imageCaption: 'Pourquoi le Plus Récent N\'est Pas Toujours Meilleur -- Ce qu\'il faut pour qu\'un modèle mûrisse',
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles Ollama',
        faqs: [
          {
            q: 'Faut-il toujours utiliser le modèle Ollama le plus récent ?',
            a: 'Pas automatiquement. Les nouvelles releases ont besoin de 4–8 semaines pour que les quantizations communautaires, les fine-tunes et l\'intégration Ollama arrivent à maturité — c\'est pourquoi llama3.1 reste le modèle le plus téléchargé. Consultez le tableau ci-dessus pour les sélections vérifiées. Pour les configurations CPU uniquement, voir <a href="/fr/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">meilleurs modèles Ollama pour usage CPU uniquement</a>.',
          },
          {
            q: 'Quel modèle Ollama est actuellement le meilleur pour le code ?',
            a: 'qwen2.5-coder:7b, 4,7 Go de téléchargement. Il gère Python, TypeScript et Go sans prompting spécial et tient confortablement sur une carte de 8 Go. À noter : qwen3-coder, malgré son numéro de version plus élevé, démarre à 19 Go — ce n\'est donc pas une mise à niveau directe sans le matériel adéquat.',
          },
          {
            q: 'De combien de VRAM ai-je réellement besoin ?',
            a: 'Les tailles citées ici sont des tailles de téléchargement, pas des besoins en VRAM. En règle générale, prévoyez quelques Go au-dessus de la taille de téléchargement pour la fenêtre de contexte et la surcharge. Un modèle de 6,6 Go comme qwen3.5:9b est confortable sur une carte de 12 Go et exploitable sur 8 Go avec un contexte modeste.',
          },
          {
            q: 'Les modèles Qwen sont-ils meilleurs que les modèles Llama en 2026 ?',
            a: 'Pour le code, la gamme Qwen mène — qwen2.5-coder et qwen3-coder n\'ont pas d\'équivalent Llama direct dans la bibliothèque. Pour l\'usage général c\'est plus serré que ne le laissent croire les numéros de version : llama3.1 et llama3.2 restent les deux modèles les plus téléchargés sur Ollama, devant chaque release plus récente, car leurs quantizations sont matures et leur comportement prévisible.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleur VPN pour télécharger des modèles IA](/fr/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Modèles Ollama à contexte 128K](/fr/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Dernière version Ollama : quoi de neuf ?](/fr/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/fr/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: '今おすすめのOllamaモデルは？',
    seoTitle: '2026年おすすめOllamaモデル | Prompt Bites | PromptQuorum',
    metaDescription: '汎用の最適解はqwen3.5:9b（6.6 GB）。コーディングはqwen2.5-coder:7b（4.7 GB）。軽量はllama3.2:3b（2.0 GB）。サイズは2026年8月に確認。',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-ja.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      ja: {
        question: '今おすすめのOllamaモデルは？',
        answer: '汎用ではqwen3.5:9b（ダウンロード6.6 GB）が現時点で最も有力です。コーディングにはqwen2.5-coder:7b（4.7 GB）があり、多くの記事が主張するよりずっと控えめなハードウェアで足ります。軽量構成ならllama3.2:3bが2.0 GBで動きます。サイズはすべて2026年8月28日にOllamaライブラリから読み取ったものです。',
        bullets: [
          '汎用最良: qwen3.5:9b — 6.6 GB',
          'コーディング最良: qwen2.5-coder:7b — 4.7 GB',
          '軽量最良: llama3.2:3b — 2.0 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '汎用最良: qwen3.5:9b — ダウンロード6.6 GB。Ollamaで実際に入手できる最新のQwen世代',
          'コーディング最良: qwen2.5-coder:7b — 4.7 GB。qwen3-coderが19 GBからなので、費用対効果ではこちらが有利',
          '軽量最良: llama3.2:3b — 2.0 GB。推論の過程を見たいならdeepseek-r1:1.5b（1.1 GB）も',
          '比較している数値に注意してください。これはOllamaライブラリのダウンロードサイズであり、VRAM要件ではありません。コンテキストウィンドウのぶん、ダウンロードサイズより余裕を見てください',
          '半年前のモデルでも量子化が成熟していれば、コミュニティの支援が限られた最新リリースを上回ることが多くあります',
        ],
      },
      body1: {
        title: '3つのティアのリーダー',
        content: [
          '<strong>汎用では現在qwen3.5:9b（ダウンロード6.6 GB）が選択肢です。以下のサイズは2026年8月28日にOllamaライブラリから直接読み取りました。</strong>',
          '実際の「最良」とは、出力品質・推論速度・メモリ効率の最高バランスを意味します。生のベンチマークスコアだけではありません。実際に収まる9Bモデルのほうが、ディスクにあふれる30Bモデルより役立ちます。',
          '訂正しておきたい数値があります。コーディングモデルは多くの記事が示すより手頃です。<code>qwen2.5-coder:7b</code> はダウンロード4.7 GBで、特別なプロンプトなしにPython、TypeScript、Goを扱えます。新しい <code>qwen3-coder</code> は19 GBからで、単なるアップグレードではなくまったく別のハードウェア階層です。',
        ],
        columns: ['ティア', 'モデル', 'ダウンロード', 'リードの理由'],
        rows: [
          { 'ティア': '軽量', 'モデル': 'llama3.2:3b', 'ダウンロード': '2.0 GB', 'リードの理由': '小型帯でGB当たり品質が最良。8,160万プル' },
          { 'ティア': '汎用', 'モデル': 'qwen3.5:9b', 'ダウンロード': '6.6 GB', 'リードの理由': 'Ollamaで入手できる最新のQwen世代' },
          { 'ティア': 'コーディング', 'モデル': 'qwen2.5-coder:7b', 'ダウンロード': '4.7 GB', 'リードの理由': 'qwen3-coderのごく一部のサイズで強いコード出力' },
          { 'ティア': '推論', 'モデル': 'deepseek-r1:8b', 'ダウンロード': '5.2 GB', 'リードの理由': '9,200万プルでOllama第2位のダウンロード数' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-ja.webp',
        imageCaption: 'ティア別ベストOllamaモデル -- 各ティアの現在のリーダー',
      },
      body2: {
        title: '新しいモデルが必ずしも優れているわけではない',
        content: [
          '新しいモデルのリリースが自動的に最良のOllamaの選択になるわけではありません。<strong>量子化の品質、コミュニティのファインチューン、Ollama統合の成熟には、新しいリリースから4〜8週間かかります。</strong>',
          'プル数はどのベンチマークよりも雄弁です。<code>llama3.1</code> は1億1,890万プルでいまもライブラリ最多、<code>llama3.2</code> は8,160万プルで、いずれも新しい参入をすべて上回ります。これは惰性ではなく、量子化がよく最適化され、ハードウェアをまたいで挙動が読める製品が選ばれているということです。',
          '新世代を使いたいなら <code>gemma4</code>（7.2 GB）と <code>gpt-oss:20b</code>（14 GB、128Kコンテキスト）が候補です。本番で頼る前に、6週間以上首位を保つか見てください。ワークロードに応じた評価方法の詳細は<a href="/ja/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama向けトップオープンソースモデル</a>をご覧ください。',
        ],
        callouts: [{ type: 'info', text: 'サイズは2026年8月28日にollama.com/libraryで確認しました。モデルのタグは頻繁に変わります。ここの数値をもとに計画する前に、ollama pullを実行して表示されるサイズを確認してください。' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-ja.webp',
        imageCaption: '新しいモデルが常に優れているとは限らない理由 -- モデルが成熟するために必要なこと',
      },
      faq: {
        id: 'faq',
        title: 'Ollamaモデルに関するクイックアンサー',
        faqs: [
          {
            q: '常に最新のOllamaモデルを使うべきですか？',
            a: '自動的にそうとは言えません。新しいリリースはコミュニティの量子化、ファインチューン、Ollama統合が成熟するまで4〜8週間かかります。llama3.1がいまもライブラリ最多のダウンロード数なのはそのためです。現在の検証済みの選択は上記の表をご覧ください。CPU専用の構成については<a href="/ja/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU専用のベストOllamaモデル</a>をご覧ください。',
          },
          {
            q: '現在コーディングに最適なOllamaモデルはどれですか？',
            a: 'ダウンロード4.7 GBのqwen2.5-coder:7bです。特別なプロンプトなしにPython、TypeScript、Goを扱え、8 GBのカードに余裕をもって収まります。なお、qwen3-coderはバージョン番号こそ大きいものの19 GBからで、相応のハードウェアがない限り単純な移行先にはなりません。',
          },
          {
            q: '実際にどれだけのVRAMが必要ですか？',
            a: 'ここに挙げたサイズはダウンロードサイズであり、VRAM要件ではありません。目安として、コンテキストウィンドウとオーバーヘッドのぶん、ダウンロードサイズより数GB多めに見てください。qwen3.5:9bのような6.6 GBのモデルは12 GBのカードで快適に動き、コンテキストを控えめにすれば8 GBでも実用になります。',
          },
          {
            q: '2026年においてQwenモデルはLlamaモデルより優れていますか？',
            a: 'コーディングではQwen系が先行しています。qwen2.5-coderやqwen3-coderに直接対応するLlamaはライブラリにありません。汎用ではバージョン番号が示すより差は小さく、llama3.1とllama3.2はいまもOllamaで最も多くダウンロードされている2つで、どの新しいリリースより上位です。量子化が成熟し、挙動が読めるからです。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[AIモデルダウンロードに最適なVPN](/ja/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Ollama 128Kコンテキストモデル](/ja/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Ollamaの最新バージョン：何が新しい？](/ja/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/ja/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: '目前最佳的Ollama模型是什么？',
    seoTitle: '2026年最佳Ollama本地模型推荐 | Prompt Bites | PromptQuorum',
    metaDescription: '通用首选qwen3.5:9b（6.6 GB），代码首选qwen2.5-coder:7b（4.7 GB），轻量首选llama3.2:3b（2.0 GB）。体积于2026年8月核实。',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-zh.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      zh: {
        question: '目前最佳的Ollama模型是什么？',
        answer: '通用场景下，qwen3.5:9b（下载 6.6 GB）是目前最有力的选择。代码方面，qwen2.5-coder:7b 仅 4.7 GB，所需硬件远低于多数指南的说法。轻量场景可用 llama3.2:3b，只需 2.0 GB。所有体积均于 2026 年 8 月 28 日从 Ollama 模型库读取。',
        bullets: ['最佳通用：qwen3.5:9b — 6.6 GB', '最佳代码：qwen2.5-coder:7b — 4.7 GB', '最佳轻量：llama3.2:3b — 2.0 GB'],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳通用模型：qwen3.5:9b — 下载 6.6 GB，是 Ollama 中实际可获取的最新一代 Qwen',
          '最佳代码模型：qwen2.5-coder:7b — 4.7 GB，性价比之选，因为 qwen3-coder 起步就是 19 GB',
          '最佳轻量模型：llama3.2:3b — 2.0 GB；若想看推理过程，可选 deepseek-r1:1.5b（1.1 GB）',
          '注意你在比较的数字：这些是 Ollama 模型库的下载体积，不是显存需求。请在下载体积之上为上下文窗口预留余量',
          '半年前的模型若量化成熟，往往胜过社区支持有限的全新发布版本',
        ],
      },
      body1: {
        title: '三个层级的领先模型',
        content: [
          '<strong>通用场景当前的选择是 qwen3.5:9b，下载 6.6 GB。下列体积于 2026 年 8 月 28 日直接从 Ollama 模型库读取。</strong>',
          '"最佳"的实际含义是输出质量、推理速度和内存效率的最优平衡——而非单纯的基准分数。一个真正装得下的 9B 模型，比一个溢出到磁盘的 30B 模型更有用。',
          '有一个数字需要更正：代码模型比多数指南所说的便宜得多。<code>qwen2.5-coder:7b</code> 下载 4.7 GB，无需特殊提示即可处理 Python、TypeScript 和 Go。更新的 <code>qwen3-coder</code> 起步 19 GB，属于完全不同的硬件档次，并非顺手可换的升级。',
        ],
        columns: ['层级', '模型', '下载体积', '领先原因'],
        rows: [
          { '层级': '轻量', '模型': 'llama3.2:3b', '下载体积': '2.0 GB', '领先原因': '小体积档位每 GB 质量最佳；8160 万次拉取' },
          { '层级': '通用', '模型': 'qwen3.5:9b', '下载体积': '6.6 GB', '领先原因': 'Ollama 中可获取的最新一代 Qwen' },
          { '层级': '代码', '模型': 'qwen2.5-coder:7b', '下载体积': '4.7 GB', '领先原因': '以 qwen3-coder 零头的体积提供强劲代码输出' },
          { '层级': '推理', '模型': 'deepseek-r1:8b', '下载体积': '5.2 GB', '领先原因': '9200 万次拉取，Ollama 上下载量第二' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-zh.webp',
        imageCaption: '按档位划分的最佳Ollama模型 -- 各档位当前领先者',
      },
      body2: {
        title: '新发布不代表更好',
        content: [
          '新模型发布不会自动成为最佳Ollama选择。<strong>量化质量、社区微调和Ollama集成成熟度通常需要4–8周才能赶上新发布版本。</strong>',
          '拉取量比任何基准都更能说明问题。<code>llama3.1</code> 以 1.189 亿次拉取仍是模型库中下载最多的，<code>llama3.2</code> 为 8160 万次——两者都领先于所有更新的后来者。这不是惯性，而是人们在选择量化优化充分、跨硬件行为可预测的那一个。',
          '若想用新一代，<code>gemma4</code>（7.2 GB）与 <code>gpt-oss:20b</code>（14 GB，128K 上下文）都值得一试。在投入生产前，先看它能否在首位稳定 6 周以上。关于如何针对自身工作负载评估模型，请参阅<a href="/zh/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama顶级开源模型指南</a>。',
          '体积于 2026 年 8 月 28 日在 ollama.com/library 核实。模型标签变动频繁——在依据此处数字做规划前，请运行 ollama pull 并查看实际报告的体积。',
        ],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-zh.webp',
        imageCaption: '为何更新的模型未必更好 -- 模型成熟所需的条件',
      },
      faq: {
        id: 'faq',
        title: 'Ollama模型常见问题',
        faqs: [
          {
            q: '应该总是使用最新的Ollama模型吗？',
            a: '不需要。新发布的模型需要4–8周让社区量化版本、微调和Ollama集成趋于成熟——这正是 llama3.1 至今仍是下载量第一的原因。请参考上方表格中经过验证的当前推荐模型。纯CPU使用建议参阅<a href="/zh/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">最佳CPU专用Ollama模型</a>。',
          },
          {
            q: '目前最佳代码Ollama模型是哪个？',
            a: 'qwen2.5-coder:7b，下载 4.7 GB。它无需特殊提示即可处理 Python、TypeScript 和 Go，在 8 GB 显卡上运行从容。请注意：qwen3-coder 虽然版本号更高，但起步为 19 GB——除非你有相应硬件，否则并非顺手可换的升级。',
          },
          {
            q: '我实际需要多少显存？',
            a: '此处给出的是下载体积，不是显存需求。经验法则是在下载体积之上再留出几 GB，用于上下文窗口和额外开销。像 qwen3.5:9b 这样 6.6 GB 的模型在 12 GB 显卡上很宽裕，上下文适中时 8 GB 也可用。',
          },
          {
            q: '2026年Qwen模型比Llama模型更好吗？',
            a: '代码任务上 Qwen 系列领先——qwen2.5-coder 和 qwen3-coder 在模型库中没有直接对应的 Llama 版本。通用场景则比版本号显示的更接近：llama3.1 和 llama3.2 仍是 Ollama 上下载量最高的两个模型，领先于所有更新的发布，因为其量化成熟、行为可预测。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[下载AI模型的最佳VPN](/zh/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Ollama 128K上下文模型](/zh/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Ollama最新版本：有什么新功能？](/zh/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/zh/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  es: {
    theme: 'Ollama',
    title: '¿Los mejores modelos de Ollama ahora mismo?',
    seoTitle: 'Mejores modelos de Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Mejor modelo general de Ollama: qwen3.5:9b (6,6 GB). Mejor para código: qwen2.5-coder:7b (4,7 GB). Mejor compacto: llama3.2:3b (2,0 GB). Tamaños verificados en agosto de 2026.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-es.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      es: {
        question: '¿Los mejores modelos de Ollama ahora mismo?',
        answer: 'Para uso general, qwen3.5:9b es la opción más sólida con 6,6 GB de descarga. Para código, qwen2.5-coder:7b con 4,7 GB hace el trabajo con mucho menos hardware del que afirman la mayoría de las guías. Para configuraciones compactas, llama3.2:3b funciona en 2,0 GB. Todos los tamaños leídos de la biblioteca de Ollama el 28 de agosto de 2026.',
        bullets: [
          'Mejor general: qwen3.5:9b — 6,6 GB',
          'Mejor para código: qwen2.5-coder:7b — 4,7 GB',
          'Mejor compacto: llama3.2:3b — 2,0 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor uso general: qwen3.5:9b — 6,6 GB de descarga, la generación de Qwen más reciente realmente disponible en Ollama',
          'Mejor para código: qwen2.5-coder:7b — 4,7 GB, y es la opción de valor porque qwen3-coder empieza en 19 GB',
          'Mejor compacto: llama3.2:3b — 2,0 GB, o deepseek-r1:1.5b con 1,1 GB si quieres trazas de razonamiento',
          'Atención a la cifra que comparas: estos son tamaños de descarga de la biblioteca de Ollama, no requisitos de VRAM. Deja margen por encima del tamaño de descarga para tu ventana de contexto',
          'Un modelo de hace seis meses con cuantización madura suele superar a un lanzamiento completamente nuevo con soporte comunitario limitado',
        ],
      },
      body1: {
        title: 'Los tres líderes por nivel',
        content: [
          '<strong>Para uso general la opción actual es qwen3.5:9b con 6,6 GB de descarga. Los tamaños siguientes se leyeron directamente de la biblioteca de Ollama el 28 de agosto de 2026.</strong>',
          '"Mejor" en la práctica significa el equilibrio más alto entre calidad de salida, velocidad de inferencia y eficiencia de memoria — no solo la puntuación de referencia bruta. Un modelo 9B que realmente cabe es más útil que un modelo 30B que se desborda al disco.',
          'Una cifra merece corrección: los modelos de código cuestan menos de lo que sugieren la mayoría de las guías. <code>qwen2.5-coder:7b</code> pesa 4,7 GB y maneja Python, TypeScript y Go sin prompts especiales. El más reciente <code>qwen3-coder</code> empieza en 19 GB, así que es otra clase de hardware por completo, no una actualización directa.',
        ],
        columns: ['Nivel', 'Modelo', 'Descarga', 'Por qué lidera'],
        rows: [
          { 'Nivel': 'Compacto', 'Modelo': 'llama3.2:3b', 'Descarga': '2,0 GB', 'Por qué lidera': 'Mejor calidad por GB en la gama baja; 81,6 M de descargas' },
          { 'Nivel': 'General', 'Modelo': 'qwen3.5:9b', 'Descarga': '6,6 GB', 'Por qué lidera': 'Generación de Qwen más reciente disponible en Ollama' },
          { 'Nivel': 'Código', 'Modelo': 'qwen2.5-coder:7b', 'Descarga': '4,7 GB', 'Por qué lidera': 'Salida de código sólida por una fracción del tamaño de qwen3-coder' },
          { 'Nivel': 'Razonamiento', 'Modelo': 'deepseek-r1:8b', 'Descarga': '5,2 GB', 'Por qué lidera': 'Segundo modelo más descargado de Ollama con 92 M de descargas' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-es.webp',
        imageCaption: 'Mejores Modelos Ollama por Nivel -- Líder actual por nivel',
      },
      body2: {
        title: 'Cuando lo más nuevo no es lo mejor',
        content: [
          'Un nuevo lanzamiento de modelo no se convierte automáticamente en la mejor opción de Ollama. <strong>La calidad de cuantización, los ajustes finos de la comunidad y la madurez de integración con Ollama tardan entre 4 y 8 semanas en ponerse al día con un lanzamiento reciente.</strong>',
          'Los contadores de descargas lo demuestran mejor que cualquier benchmark. <code>llama3.1</code> sigue siendo el modelo más descargado de la biblioteca con 118,9 M, y <code>llama3.2</code> alcanza 81,6 M — ambos por delante de cada llegada más reciente. No es inercia: la gente elige aquello cuyas cuantizaciones están bien optimizadas y cuyo comportamiento es predecible entre distintos equipos.',
          'Si quieres la generación reciente, <code>gemma4</code> (7,2 GB) y <code>gpt-oss:20b</code> (14 GB, contexto 128K) merecen una prueba. Deja que un modelo mantenga la cabeza 6+ semanas antes de confiar en él en producción. Para un análisis más profundo sobre evaluar modelos para tu carga de trabajo, consulta los <a href="/es/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">mejores modelos de código abierto para Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Tamaños verificados en ollama.com/library el 28 de agosto de 2026. Las etiquetas de modelos cambian a menudo — ejecuta ollama pull y comprueba el tamaño informado antes de planificar en torno a cualquier cifra de aquí.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-es.webp',
        imageCaption: 'Por Qué Lo Más Nuevo No Siempre Es Mejor -- Lo que necesita un modelo para madurar',
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre los modelos de Ollama',
        faqs: [
          {
            q: '¿Debería usar siempre el modelo de Ollama más reciente?',
            a: 'No automáticamente. Los nuevos lanzamientos necesitan entre 4 y 8 semanas para que las cuantizaciones comunitarias, los ajustes finos y la integración con Ollama maduren — por eso llama3.1 sigue siendo el modelo más descargado de la biblioteca. Consulta la tabla anterior para ver las opciones verificadas. Para configuraciones solo con CPU, consulta <a href="/es/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">los mejores modelos de Ollama para uso solo con CPU</a>.',
          },
          {
            q: '¿Qué modelo de Ollama es el mejor para código ahora mismo?',
            a: 'qwen2.5-coder:7b, con 4,7 GB de descarga. Maneja Python, TypeScript y Go sin prompts especiales y cabe con holgura en una tarjeta de 8 GB. Ten en cuenta que qwen3-coder, pese a su número de versión más alto, empieza en 19 GB — así que no es una actualización directa salvo que tengas el hardware.',
          },
          {
            q: '¿Cuánta VRAM necesito realmente?',
            a: 'Los tamaños citados aquí son de descarga, no requisitos de VRAM. Como regla general, deja un par de GB por encima del tamaño de descarga para la ventana de contexto y la sobrecarga. Un modelo de 6,6 GB como qwen3.5:9b va cómodo en una tarjeta de 12 GB y es viable en 8 GB con un contexto modesto.',
          },
          {
            q: '¿Son los modelos Qwen mejores que los modelos Llama en 2026?',
            a: 'Para código, la línea Qwen lidera — qwen2.5-coder y qwen3-coder no tienen equivalente Llama directo en la biblioteca. Para uso general está más reñido de lo que sugieren los números de versión: llama3.1 y llama3.2 siguen siendo los dos modelos más descargados de Ollama, por delante de todo lanzamiento más reciente, porque sus cuantizaciones son maduras y su comportamiento predecible.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejor VPN para descargar modelos de IA](/es/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Modelos Ollama con contexto de 128K](/es/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Última versión de Ollama: ¿qué hay de nuevo?](/es/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/es/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  pt: {
    theme: 'Ollama',
    title: 'Os melhores modelos Ollama agora?',
    seoTitle: 'Melhores modelos Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Melhor modelo Ollama geral: qwen3.5:9b (6,6 GB). Melhor para código: qwen2.5-coder:7b (4,7 GB). Melhor compacto: llama3.2:3b (2,0 GB). Tamanhos verificados em agosto de 2026.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-pt.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      pt: {
        question: 'Os melhores modelos Ollama agora?',
        answer: 'Para uso geral, qwen3.5:9b é a escolha mais forte, com 6,6 GB de download. Para código, qwen2.5-coder:7b com 4,7 GB dá conta do recado em bem menos hardware do que a maioria dos guias afirma. Para configurações compactas, llama3.2:3b roda em 2,0 GB. Todos os tamanhos lidos da biblioteca do Ollama em 28 de agosto de 2026.',
        bullets: [
          'Melhor geral: qwen3.5:9b — 6,6 GB',
          'Melhor para código: qwen2.5-coder:7b — 4,7 GB',
          'Melhor compacto: llama3.2:3b — 2,0 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor uso geral: qwen3.5:9b — 6,6 GB de download, a geração Qwen mais recente realmente disponível no Ollama',
          'Melhor para código: qwen2.5-coder:7b — 4,7 GB, e é a escolha de custo-benefício porque o qwen3-coder começa em 19 GB',
          'Melhor compacto: llama3.2:3b — 2,0 GB, ou deepseek-r1:1.5b com 1,1 GB se você quiser ver o raciocínio',
          'Atenção ao número que você compara: estes são tamanhos de download da biblioteca do Ollama, não requisitos de VRAM. Deixe folga acima do tamanho de download para a sua janela de contexto',
          'Um modelo de seis meses atrás com quantização madura costuma superar um lançamento novo com suporte limitado da comunidade',
        ],
      },
      body1: {
        title: 'Os três líderes por nível',
        content: [
          '<strong>Para uso geral, a escolha atual é qwen3.5:9b, com 6,6 GB de download. Os tamanhos abaixo foram lidos diretamente da biblioteca do Ollama em 28 de agosto de 2026.</strong>',
          '"Melhor" na prática significa o maior equilíbrio entre qualidade de saída, velocidade de inferência e eficiência de memória — não apenas pontuação bruta de benchmark. Um modelo 9B que realmente cabe é mais útil do que um modelo 30B que transborda para o disco.',
          'Um número merece correção: modelos de código custam menos do que a maioria dos guias sugere. O <code>qwen2.5-coder:7b</code> tem 4,7 GB de download e lida com Python, TypeScript e Go sem prompts especiais. O mais recente <code>qwen3-coder</code> começa em 19 GB, ou seja, é outra classe de hardware por completo, não uma atualização direta.',
        ],
        columns: ['Nível', 'Modelo', 'Download', 'Por que lidera'],
        rows: [
          { 'Nível': 'Compacto', 'Modelo': 'llama3.2:3b', 'Download': '2,0 GB', 'Por que lidera': 'Melhor qualidade por GB na faixa baixa; 81,6 mi de downloads' },
          { 'Nível': 'Geral', 'Modelo': 'qwen3.5:9b', 'Download': '6,6 GB', 'Por que lidera': 'Geração Qwen mais recente disponível no Ollama' },
          { 'Nível': 'Código', 'Modelo': 'qwen2.5-coder:7b', 'Download': '4,7 GB', 'Por que lidera': 'Saída de código forte por uma fração do tamanho do qwen3-coder' },
          { 'Nível': 'Raciocínio', 'Modelo': 'deepseek-r1:8b', 'Download': '5,2 GB', 'Por que lidera': 'Segundo modelo mais baixado do Ollama, com 92 mi de downloads' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-pt.webp',
        imageCaption: 'Melhores Modelos Ollama por Nível -- Líder atual por nível',
      },
      body2: {
        title: 'Quando o mais novo não é o melhor',
        content: [
          'Um novo lançamento de modelo não se torna automaticamente a melhor escolha no Ollama. <strong>A qualidade da quantização, os ajustes finos da comunidade e a maturidade de integração com o Ollama levam 4–8 semanas para acompanhar um lançamento recente.</strong>',
          'Os contadores de download mostram isso melhor do que qualquer benchmark. O <code>llama3.1</code> continua sendo o modelo mais baixado da biblioteca, com 118,9 mi, e o <code>llama3.2</code> está em 81,6 mi — ambos à frente de todo recém-chegado. Não é inércia: as pessoas escolhem aquilo cujas quantizações estão bem otimizadas e cujo comportamento é previsível entre hardwares.',
          'Se você quer a geração mais nova, <code>gemma4</code> (7,2 GB) e <code>gpt-oss:20b</code> (14 GB, contexto de 128K) valem um teste. Deixe um modelo manter a liderança por 6 semanas ou mais antes de depender dele em produção. Para uma análise mais profunda sobre avaliar modelos para a sua carga de trabalho, veja os <a href="/pt/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">melhores modelos de código aberto para Ollama</a>.',
        ],
        callouts: [{ type: 'info', text: 'Tamanhos verificados em ollama.com/library em 28 de agosto de 2026. As tags de modelos mudam com frequência — rode ollama pull e confira o tamanho informado antes de planejar com base em qualquer número daqui.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-pt.webp',
        imageCaption: 'Por Que Mais Novo Nem Sempre É Melhor -- O que um modelo precisa para amadurecer',
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre os modelos Ollama',
        faqs: [
          {
            q: 'Devo sempre usar o modelo Ollama mais recente?',
            a: 'Não automaticamente. Novos lançamentos precisam de 4–8 semanas para que as quantizações da comunidade, os ajustes finos e a integração com o Ollama amadureçam — por isso o llama3.1 ainda é o modelo mais baixado da biblioteca. Consulte a tabela acima para as opções verificadas. Para configurações somente CPU, consulte <a href="/pt/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">os melhores modelos Ollama para uso somente CPU</a>.',
          },
          {
            q: 'Qual modelo Ollama é o melhor para código agora?',
            a: 'qwen2.5-coder:7b, com 4,7 GB de download. Ele lida com Python, TypeScript e Go sem prompts especiais e cabe com folga em uma placa de 8 GB. Note que o qwen3-coder, apesar do número de versão maior, começa em 19 GB — portanto não é uma atualização direta, a menos que você tenha o hardware.',
          },
          {
            q: 'De quanta VRAM eu realmente preciso?',
            a: 'Os tamanhos citados aqui são de download, não requisitos de VRAM. Como regra prática, reserve alguns GB acima do tamanho de download para a janela de contexto e a sobrecarga. Um modelo de 6,6 GB como o qwen3.5:9b fica confortável em uma placa de 12 GB e é viável em 8 GB com contexto modesto.',
          },
          {
            q: 'Os modelos Qwen são melhores do que os modelos Llama em 2026?',
            a: 'Para código, a linha Qwen lidera — qwen2.5-coder e qwen3-coder não têm equivalente Llama direto na biblioteca. Para uso geral está mais equilibrado do que os números de versão sugerem: llama3.1 e llama3.2 continuam sendo os dois modelos mais baixados do Ollama, à frente de qualquer lançamento mais recente, porque suas quantizações são maduras e seu comportamento é previsível.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhor VPN para baixar modelos de IA](/pt/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Modelos Ollama com contexto de 128K](/pt/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Versão mais recente do Ollama: o que há de novo?](/pt/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/pt/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  ar: {
    theme: 'Ollama',
    title: 'أفضل نماذج ⁨Ollama⁩ الآن؟',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ الآن ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: '‏qwen3.5:9b (6.6 GB) أفضل نموذج ⁨Ollama⁩ عام. qwen2.5-coder:7b (4.7 GB) للبرمجة. llama3.2:3b (2.0 GB) للأجهزة المحدودة. أحجام مُتحقَّق منها في أغسطس ⁨2026⁩.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-ar.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama الآن؟',
        answer: 'للاستخدام العام، qwen3.5:9b هو الخيار الأقوى حاليًا بحجم تنزيل 6.6 غيغابايت. وللبرمجة، ينجز qwen2.5-coder:7b بحجم 4.7 غيغابايت المهمة على عتاد أقل بكثير مما تدّعيه معظم الأدلة. وللإعدادات المدمجة، يعمل llama3.2:3b في 2.0 غيغابايت. جميع الأحجام قُرئت من مكتبة Ollama في 28 أغسطس 2026.',
        bullets: [
          'الأفضل عمومًا: qwen3.5:9b — 6.6 غيغابايت',
          'الأفضل للبرمجة: qwen2.5-coder:7b — 4.7 غيغابايت',
          'الأفضل المدمج: llama3.2:3b — 2.0 غيغابايت',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل للاستخدام العام: qwen3.5:9b — تنزيل 6.6 غيغابايت، وهو أحدث جيل من Qwen متاح فعليًا في Ollama',
          'الأفضل للبرمجة: qwen2.5-coder:7b — 4.7 غيغابايت، وهو خيار القيمة لأن qwen3-coder يبدأ من 19 غيغابايت',
          'الأفضل المدمج: llama3.2:3b — 2.0 غيغابايت، أو deepseek-r1:1.5b بحجم 1.1 غيغابايت إن أردت تتبّع خطوات الاستدلال',
          'انتبه إلى الرقم الذي تقارنه: هذه أحجام تنزيل من مكتبة Ollama، وليست متطلبات ذاكرة رسومية. اترك هامشًا فوق حجم التنزيل لنافذة السياق',
          'نموذج عمره ستة أشهر بتكميم ناضج غالبًا يتفوق على إصدار جديد كليًا بدعم مجتمعي محدود',
        ],
      },
      body1: {
        title: 'القادة الثلاثة حسب المستوى',
        content: [
          '<strong>للاستخدام العام، الخيار الحالي هو qwen3.5:9b بحجم تنزيل 6.6 غيغابايت. قُرئت الأحجام أدناه مباشرةً من مكتبة Ollama في 28 أغسطس 2026.</strong>',
          '"الأفضل" عمليًا يعني أعلى توازن بين جودة الإخراج وسرعة الاستدلال وكفاءة الذاكرة — لا مجرد أعلى نقاط معيار. نموذج 9B يتسع فعلًا أنفع من نموذج 30B يفيض إلى القرص.',
          'ثمة رقم يستحق التصحيح: نماذج البرمجة أرخص مما توحي به معظم الأدلة. فـ <code>qwen2.5-coder:7b</code> حجم تنزيله 4.7 غيغابايت ويتعامل مع Python وTypeScript وGo دون موجّهات خاصة. أما <code>qwen3-coder</code> الأحدث فيبدأ من 19 غيغابايت، أي إنه فئة عتاد مختلفة تمامًا لا ترقية مباشرة.',
        ],
        columns: ['المستوى', 'النموذج', 'حجم التنزيل', 'سبب التصدر'],
        rows: [
          { 'المستوى': 'مدمج', 'النموذج': 'llama3.2:3b', 'حجم التنزيل': '2.0 غيغابايت', 'سبب التصدر': 'أفضل جودة لكل غيغابايت في الفئة الصغيرة؛ 81.6 مليون تنزيل' },
          { 'المستوى': 'عام', 'النموذج': 'qwen3.5:9b', 'حجم التنزيل': '6.6 غيغابايت', 'سبب التصدر': 'أحدث جيل Qwen متاح في Ollama' },
          { 'المستوى': 'برمجة', 'النموذج': 'qwen2.5-coder:7b', 'حجم التنزيل': '4.7 غيغابايت', 'سبب التصدر': 'إخراج برمجي قوي بجزء يسير من حجم qwen3-coder' },
          { 'المستوى': 'استدلال', 'النموذج': 'deepseek-r1:8b', 'حجم التنزيل': '5.2 غيغابايت', 'سبب التصدر': 'ثاني أكثر النماذج تنزيلًا على Ollama بـ 92 مليون تنزيل' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-ar.webp',
        imageCaption: 'أفضل نماذج Ollama حسب المستوى -- الرائد الحالي لكل مستوى',
      },
      body2: {
        title: 'عندما لا يكون الأحدث هو الأفضل',
        content: [
          'إصدار نموذج جديد لا يصبح تلقائيًا أفضل خيار في Ollama. <strong>جودة التكميم والضبط الدقيق المجتمعي ونضج تكامل Ollama تحتاج 4–8 أسابيع لتواكب إصدارًا حديثًا.</strong>',
          'أعداد التنزيل تُثبت ذلك أفضل من أي معيار. فـ <code>llama3.1</code> لا يزال الأكثر تنزيلًا في المكتبة بـ 118.9 مليون، و<code>llama3.2</code> عند 81.6 مليون — وكلاهما متقدم على كل وافد أحدث. هذا ليس جمودًا، بل اختيار لما تكون تكميماته محسّنة جيدًا وسلوكه قابلًا للتنبؤ عبر العتاد المختلف.',
          'إن أردت الجيل الأحدث، يستحق <code>gemma4</code> (7.2 غيغابايت) و<code>gpt-oss:20b</code> (14 غيغابايت، سياق 128K) التجربة. امنح النموذج 6 أسابيع أو أكثر في الصدارة قبل الاعتماد عليه في الإنتاج. ولنظرة أعمق في تقييم النماذج لحمل عملك، راجع <a href="/ar/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">أفضل النماذج مفتوحة المصدر لـOllama</a>.',
        ],
        callouts: [{ type: 'info', text: 'جرى التحقق من الأحجام على ollama.com/library في 28 أغسطس 2026. وسوم النماذج تتغير كثيرًا — شغّل ollama pull وتحقّق من الحجم المُعلن قبل التخطيط بناءً على أي رقم هنا.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-ar.webp',
        imageCaption: 'لماذا الأحدث ليس دائمًا الأفضل -- ما يحتاجه النموذج لينضج',
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج Ollama',
        faqs: [
          {
            q: 'هل يجب دائماً استخدام أحدث نموذج Ollama؟',
            a: 'ليس تلقائيًا. الإصدارات الجديدة تحتاج 4–8 أسابيع لنضج تكميمات المجتمع والضبط الدقيق وتكامل Ollama — ولهذا لا يزال llama3.1 الأكثر تنزيلًا في المكتبة. راجع الجدول أعلاه للخيارات المتحقق منها. وللإعدادات بـCPU فقط، راجع <a href="/ar/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">أفضل نماذج Ollama للاستخدام بـCPU فقط</a>.',
          },
          {
            q: 'ما أفضل نموذج Ollama للبرمجة الآن؟',
            a: '‏qwen2.5-coder:7b بحجم تنزيل 4.7 غيغابايت. يتعامل مع Python وTypeScript وGo دون موجّهات خاصة ويتسع بأريحية على بطاقة 8 غيغابايت. لاحظ أن qwen3-coder، رغم رقم إصداره الأعلى، يبدأ من 19 غيغابايت — فهو ليس ترقية مباشرة ما لم يتوفر لديك العتاد المناسب.',
          },
          {
            q: 'كم أحتاج فعليًا من الذاكرة الرسومية؟',
            a: 'الأحجام المذكورة هنا أحجام تنزيل لا متطلبات ذاكرة رسومية. وكقاعدة عملية، اترك بضعة غيغابايت فوق حجم التنزيل لنافذة السياق والحمل الإضافي. نموذج بحجم 6.6 غيغابايت مثل qwen3.5:9b مريح على بطاقة 12 غيغابايت، وقابل للعمل على 8 غيغابايت مع سياق متواضع.',
          },
          {
            q: 'هل نماذج Qwen أفضل من نماذج Llama في 2026؟',
            a: 'في البرمجة يتصدر خط Qwen — إذ لا نظير مباشر لـ qwen2.5-coder وqwen3-coder من Llama في المكتبة. أما في الاستخدام العام فالفارق أضيق مما توحي به أرقام الإصدارات: يظل llama3.1 وllama3.2 أكثر نموذجين تنزيلًا على Ollama، متقدمين على كل إصدار أحدث، لأن تكميماتهما ناضجة وسلوكهما قابل للتنبؤ.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل VPN لتنزيل نماذج الذكاء الاصطناعي](/ar/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[نماذج Ollama ذات السياق 128K](/ar/prompt-bites/ollama-128k-context-models) -- long context models',
          '[أحدث إصدار Ollama: ما الجديد؟](/ar/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/ar/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
  ko: {
    theme: 'Ollama',
    title: '지금 최고의 Ollama 모델은?',
    seoTitle: '최고의 Ollama 모델 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '최고의 범용 Ollama 모델: qwen3.5:9b (6.6 GB). 코딩 최강: qwen2.5-coder:7b (4.7 GB). 경량 최강: llama3.2:3b (2.0 GB). 용량은 2026년 8월 확인.',
    heroImage: '/images/best-ollama-models-right-now-tier-leaders-hero-ko.webp',
    publishDate: '2026-05-18',
    dateModified: '2026-08-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-28',
    is_living_page: true,
    targetKeywords: [
      'Ollama 최고 모델',
      '2026년 최고 Ollama 모델',
      'Ollama 추천 모델',
      'Ollama 로컬 LLM 모델 비교',
      'qwen3.5 Ollama',
      'qwen2.5-coder Ollama',
    ],
    readTime: '3분 분량',
    quickAnswerTop: {
      ko: {
        question: '지금 최고의 Ollama 모델은?',
        answer: '범용으로는 다운로드 6.6 GB의 qwen3.5:9b가 현재 가장 강력한 선택입니다. 코딩에는 4.7 GB의 qwen2.5-coder:7b가 대부분의 가이드가 주장하는 것보다 훨씬 적은 하드웨어로 제 몫을 합니다. 경량 구성에는 llama3.2:3b가 2.0 GB로 동작합니다. 모든 용량은 2026년 8월 28일 Ollama 라이브러리에서 확인했습니다.',
        bullets: [
          '범용 최강: qwen3.5:9b — 6.6 GB',
          '코딩 최강: qwen2.5-coder:7b — 4.7 GB',
          '경량 최강: llama3.2:3b — 2.0 GB',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '범용 최강: qwen3.5:9b — 다운로드 6.6 GB, Ollama에서 실제로 받을 수 있는 가장 최신 Qwen 세대',
          '코딩 최강: qwen2.5-coder:7b — 4.7 GB. qwen3-coder가 19 GB부터 시작하므로 가성비 선택',
          '경량 최강: llama3.2:3b — 2.0 GB, 추론 과정을 보고 싶다면 deepseek-r1:1.5b(1.1 GB)',
          '어떤 숫자를 비교하는지 유의하세요. 이것은 Ollama 라이브러리의 다운로드 용량이지 VRAM 요구치가 아닙니다. 컨텍스트 창을 위해 다운로드 용량보다 여유를 두세요',
          '양자화가 성숙한 6개월 전 모델이 커뮤니티 지원이 제한된 최신 출시 모델보다 나은 경우가 많습니다',
        ],
      },
      body1: {
        title: '단계별 3대 선두 모델',
        snippetBlocks: [
          { type: 'one-sentence', text: '범용 Ollama 모델은 다운로드 6.6 GB의 qwen3.5:9b, 코딩은 4.7 GB의 qwen2.5-coder:7b, 경량은 2.0 GB의 llama3.2:3b가 현재 선두입니다.' },
          { type: 'plain-terms', text: 'Ollama는 로컬에서 LLM을 실행하는 도구입니다. 여기 적힌 GB 수치는 모델을 내려받을 때의 파일 크기이며, 그래픽카드 메모리 요구치와는 다릅니다.' },
        ],
        content: [
          '<strong>범용으로는 다운로드 6.6 GB의 qwen3.5:9b가 현재 선택입니다. 아래 용량은 2026년 8월 28일 Ollama 라이브러리에서 직접 확인했습니다.</strong>',
          '실제 "최강"이란 출력 품질, 추론 속도, 메모리 효율의 최적 균형을 의미합니다 — 단순히 벤치마크 점수가 높은 것이 아닙니다. 실제로 올라가는 9B 모델이 디스크로 넘치는 30B 모델보다 유용합니다.',
          '바로잡아야 할 숫자가 하나 있습니다. 코딩 모델은 대부분의 가이드가 시사하는 것보다 저렴합니다. <code>qwen2.5-coder:7b</code>는 다운로드 4.7 GB이며 특별한 프롬프트 없이 Python, TypeScript, Go를 처리합니다. 더 최신인 <code>qwen3-coder</code>는 19 GB부터 시작하므로, 손쉬운 업그레이드가 아니라 아예 다른 하드웨어 등급입니다.',
        ],
        columns: ['단계', '모델', '다운로드', '선두 이유'],
        rows: [
          { '단계': '경량', '모델': 'llama3.2:3b', '다운로드': '2.0 GB', '선두 이유': '소형 구간에서 GB당 품질 최고; 8,160만 다운로드' },
          { '단계': '범용', '모델': 'qwen3.5:9b', '다운로드': '6.6 GB', '선두 이유': 'Ollama에서 받을 수 있는 최신 Qwen 세대' },
          { '단계': '코딩', '모델': 'qwen2.5-coder:7b', '다운로드': '4.7 GB', '선두 이유': 'qwen3-coder의 일부 용량으로 강력한 코딩 출력' },
          { '단계': '추론', '모델': 'deepseek-r1:8b', '다운로드': '5.2 GB', '선두 이유': '9,200만 다운로드로 Ollama 전체 2위' },
        ],
        image: '/images/best-ollama-models-right-now-tier-leaders-hero-ko.webp',
        imageCaption: '등급별 최고의 Ollama 모델 -- 등급별 현재 선두 모델',
      },
      body2: {
        title: '최신 모델이 항상 최고는 아닙니다',
        content: [
          '새 모델 출시가 자동으로 Ollama 최고의 선택이 되는 것은 아닙니다. <strong>양자화 품질, 커뮤니티 파인튜닝, Ollama 통합 성숙도가 최신 출시 모델을 따라잡는 데 4–8주가 걸립니다.</strong>',
          '다운로드 수가 어떤 벤치마크보다 이를 잘 보여줍니다. <code>llama3.1</code>은 1억 1,890만 다운로드로 여전히 라이브러리에서 가장 많이 받은 모델이고, <code>llama3.2</code>는 8,160만으로 그 뒤를 잇습니다 — 둘 다 이후 등장한 모든 모델보다 앞섭니다. 관성이 아니라, 양자화가 잘 최적화되고 하드웨어를 넘나들며 동작이 예측 가능한 쪽을 고르는 것입니다.',
          '최신 세대를 원한다면 <code>gemma4</code>(7.2 GB)와 <code>gpt-oss:20b</code>(14 GB, 128K 컨텍스트)를 살펴볼 만합니다. 프로덕션에서 의존하기 전에 6주 이상 선두를 유지하는지 지켜보세요. 특정 워크로드에 맞는 모델 평가 방법은 <a href="/ko/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">Ollama용 최고 오픈소스 모델</a>을 참조하십시오.',
        ],
        callouts: [{ type: 'info', text: '용량은 2026년 8월 28일 ollama.com/library에서 확인했습니다. 모델 태그는 자주 바뀌므로, 여기 숫자를 기준으로 계획하기 전에 ollama pull을 실행해 표시되는 용량을 확인하십시오.' }],
        image: '/images/best-ollama-models-right-now-maturity-factors-hero-ko.webp',
        imageCaption: '최신 모델이 항상 더 나은 것은 아닌 이유 -- 모델이 성숙하기 위해 필요한 것',
      },
      faq: {
        id: 'faq',
        title: 'Ollama 모델에 대한 빠른 답변',
        faqs: [
          {
            q: '항상 최신 Ollama 모델을 사용해야 합니까?',
            a: '자동으로 그렇지는 않습니다. 새 출시 모델은 커뮤니티 양자화, 파인튜닝, Ollama 통합이 성숙하는 데 4–8주가 필요합니다 — llama3.1이 여전히 라이브러리에서 가장 많이 받은 모델인 이유입니다. 현재 검증된 선택지는 위 표를 참조하십시오. CPU 전용 구성은 <a href="/ko/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU 전용 최고 Ollama 모델</a>을 참조하십시오.',
          },
          {
            q: '현재 코딩에 최고의 Ollama 모델은 무엇입니까?',
            a: '다운로드 4.7 GB의 qwen2.5-coder:7b입니다. 특별한 프롬프트 없이 Python, TypeScript, Go를 처리하며 8 GB 그래픽카드에 여유롭게 올라갑니다. 다만 qwen3-coder는 버전 번호가 더 높음에도 19 GB부터 시작하므로, 그만한 하드웨어가 없다면 손쉬운 업그레이드가 아닙니다.',
          },
          {
            q: 'VRAM이 실제로 얼마나 필요합니까?',
            a: '여기 적힌 용량은 다운로드 용량이지 VRAM 요구치가 아닙니다. 경험칙으로 컨텍스트 창과 오버헤드를 위해 다운로드 용량보다 몇 GB 여유를 두십시오. qwen3.5:9b 같은 6.6 GB 모델은 12 GB 카드에서 여유롭고, 컨텍스트를 적당히 잡으면 8 GB에서도 쓸 만합니다.',
          },
          {
            q: '2026년에 Qwen 모델이 Llama 모델보다 뛰어납니까?',
            a: '코딩에서는 Qwen 계열이 앞섭니다 — qwen2.5-coder와 qwen3-coder에 직접 대응하는 Llama가 라이브러리에 없습니다. 범용에서는 버전 번호가 시사하는 것보다 격차가 작습니다. llama3.1과 llama3.2는 여전히 Ollama에서 가장 많이 받은 두 모델로, 이후의 모든 출시보다 앞서 있습니다. 양자화가 성숙하고 동작이 예측 가능하기 때문입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽기',
        items: [
          '[Ollama용 최고 오픈소스 모델](/ko/local-llms/top-open-source-models-ollama)',
          '[CPU 전용 최고 Ollama 모델](/ko/prompt-bites/best-ollama-models-cpu-only)',
          '[Ollama 최신 버전](/ko/prompt-bites/ollama-latest-version)',
          '[AI 모델 다운로드를 위한 최고의 VPN](/ko/prompt-bites/best-vpn-downloading-ai-models) -- VPN for AI downloads',
          '[Ollama 128K 컨텍스트 모델](/ko/prompt-bites/ollama-128k-context-models) -- long context models',
          '[Mistral Small 24B vs Qwen 3 14B vs Llama 3.1 8B](/ko/prompt-bites/mistral-small-24b-vs-qwen-14b-vs-llama-8b) -- model comparison',
        ],
      },
    },
  },
}
