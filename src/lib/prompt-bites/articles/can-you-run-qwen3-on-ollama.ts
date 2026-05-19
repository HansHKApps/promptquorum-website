import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Can You Run Qwen 3 on Ollama?',
    seoTitle: 'Run Qwen 3 on Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — Ollama supports all Qwen 3 sizes from 0.6B to 72B. Run with: ollama run qwen3:8b. The 8B model needs ~6 GB VRAM. MoE variant available. Updated May 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 3 0.6B', 'Qwen 3 8B', 'Qwen 3 72B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers wanting to run Qwen 3 models locally',
    parentArticle: '/local-llms/run-qwen-locally-guide-2026',
    siblingBites: ['which-ollama-models-support-vision', 'ollama-128k-context-models'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run Qwen 3 on Ollama?',
        answer: 'Yes — Ollama supports all Qwen 3 model sizes from 0.6B to 72B. Run any size with ollama run qwen3:8b. The 8B model needs ~6 GB VRAM at Q4.',
        bullets: [
          'ollama run qwen3:0.6b — fits in 1 GB VRAM',
          'ollama run qwen3:8b — needs ~6 GB VRAM',
          'ollama run qwen3:72b — needs ~40 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: { question: 'Kann man Qwen 3 mit Ollama ausführen?', answer: 'Ja — Ollama unterstützt alle Qwen 3-Modellgrößen von 0,6B bis 72B. Starten Sie eine beliebige Größe mit ollama run qwen3:8b. Das 8B-Modell benötigt ~6 GB VRAM bei Q4.', bullets: ['ollama run qwen3:0.6b — benötigt 1 GB VRAM', 'ollama run qwen3:8b — benötigt ~6 GB VRAM', 'ollama run qwen3:72b — benötigt ~40 GB VRAM'], updatedDate: '2026-05' },
      fr: { question: 'Peut-on faire tourner Qwen 3 sur Ollama ?', answer: 'Oui — Ollama prend en charge toutes les tailles de modèle Qwen 3, de 0,6B à 72B. Lancez n\'importe quelle taille avec ollama run qwen3:8b. Le modèle 8B nécessite ~6 Go de VRAM en Q4.', bullets: ['ollama run qwen3:0.6b — nécessite 1 Go de VRAM', 'ollama run qwen3:8b — nécessite ~6 Go de VRAM', 'ollama run qwen3:72b — nécessite ~40 Go de VRAM'], updatedDate: '2026-05' },
      ja: { question: 'OllamaでQwen 3を動かせますか？', answer: 'はい — OllamaはQwen 3の全サイズ（0.6Bから72B）に対応しています。ollama run qwen3:8bで任意のサイズを起動できます。8BモデルはQ4で~6 GB VRAMが必要です。', bullets: ['ollama run qwen3:0.6b — 1 GB VRAMで動作', 'ollama run qwen3:8b — ~6 GB VRAM必要', 'ollama run qwen3:72b — ~40 GB VRAM必要'], updatedDate: '2026-05' },
      zh: { question: '可以在Ollama上运行Qwen 3吗？', answer: '可以——Ollama支持所有Qwen 3型号，从0.6B到72B均可运行。使用ollama run qwen3:8b启动任意规格。8B模型Q4量化需要约6 GB显存。', bullets: ['ollama run qwen3:0.6b — 需要1 GB显存', 'ollama run qwen3:8b — 需要约6 GB显存', 'ollama run qwen3:72b — 需要约40 GB显存'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama supports all Qwen 3 sizes: 0.6B, 1.5B, 3B, 7B, 14B, 32B, and 72B',
          'Pull any size with <code>ollama run qwen3:8b</code> — replace the tag with your target size',
          'The 7B model needs ~6 GB VRAM at Q4 and runs at ~20 tok/s on a mid-range GPU',
          'Qwen 3 supports tool calling natively via the standard Ollama API — no custom Modelfile required',
        ],
      },
      body1: {
        title: 'Yes — Here\'s What\'s Available',
        content: [
          '<strong>As of May 2026, Ollama supports all major Qwen 3 model sizes from 0.6B to 72B.</strong> Pull any size with a single command: <code>ollama run qwen3:8b</code>. Replace <code>8b</code> with <code>0.6b</code>, <code>1.5b</code>, <code>3b</code>, <code>14b</code>, <code>32b</code>, or <code>72b</code> for other sizes.',
          'Each size is available in multiple quantizations. Q4_K_M is the default and recommended starting point — it delivers the best quality-to-file-size ratio. Q8_0 is available for 7B and 14B if you have the VRAM headroom.',
          'Tool calling is supported natively on all Qwen 3 sizes via the standard Ollama API. No custom Modelfile or special prompt template is required.',
        ],
        codeBlock: 'ollama run qwen3:8b',
      },
      body2: {
        title: 'Which Qwen 3 Size to Pick',
        content: [
          'The right Qwen 3 size depends entirely on available VRAM. <strong>For most users on a mid-range GPU (6–8 GB VRAM), the 7B model at Q4_K_M is the practical choice — it needs ~6 GB and runs at ~20 tok/s.</strong>',
          'The 14B model at Q4 is the recommended coding tier: it outperforms the 7B on code generation and fits comfortably in 10–12 GB VRAM. For a full comparison of Qwen 3 coding performance versus other local models, see the <a href="/local-llms/run-qwen-locally-guide-2026" class="text-primary hover:underline">guide to running Qwen locally in 2026</a>.',
        ],
        columns: ['VRAM', 'Qwen 3 Size', 'Best For'],
        rows: [
          { 'VRAM': '< 4 GB', 'Qwen 3 Size': '0.6B / 1.5B', 'Best For': 'Edge devices, testing, CPU-only' },
          { 'VRAM': '4–6 GB', 'Qwen 3 Size': '3B', 'Best For': 'Budget GPU or low-RAM CPU' },
          { 'VRAM': '6–12 GB', 'Qwen 3 Size': '7B / 14B', 'Best For': 'General use and coding' },
          { 'VRAM': '12–24 GB', 'Qwen 3 Size': '14B / 32B', 'Best For': 'High-quality coding and reasoning' },
          { 'VRAM': '40+ GB', 'Qwen 3 Size': '72B', 'Best For': 'Near-frontier local quality' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Qwen 3 on Ollama',
        faqs: [
          {
            q: 'How do I install Qwen 3 on Ollama?',
            a: 'Run <code>ollama run qwen3:8b</code> in a terminal. Ollama downloads the model automatically on first run. Replace <code>8b</code> with your target size: 0.6b, 1.5b, 3b, 14b, 32b, or 72b.',
          },
          {
            q: 'Is Qwen 3 better than Llama 3 for coding?',
            a: 'For coding: yes, Qwen 3 14B outperforms Llama 3 8B on HumanEval benchmarks. For general conversation at the 8B tier: Llama 3 8B remains competitive. For the current top Ollama picks across all tasks, see <a href="/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">the best Ollama models right now</a>.',
          },
          {
            q: 'Does Qwen 3 support tool calling on Ollama?',
            a: 'Yes. Qwen 3 supports function and tool calling natively via the standard Ollama API. No custom Modelfile or special configuration is required — it works with any client that supports the Ollama tool-use format.',
          },
          {
            q: 'Can I run Qwen 3 72B on consumer hardware?',
            a: 'Technically yes, but it requires ~40 GB of VRAM at Q4 — meaning a dual-GPU setup (two RTX 3090s) or an Apple M-series Mac with 64+ GB unified memory. Most consumer setups max out at the 32B tier.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Ollama',
    title: 'Kann man Qwen 3 mit Ollama ausführen?',
    seoTitle: 'Qwen 3 mit Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja — Ollama unterstützt alle Qwen 3-Größen von 0,6B bis 72B. Befehl: ollama run qwen3:8b. Das 8B-Modell benötigt ~6 GB VRAM. Stand Mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Kann man Qwen 3 mit Ollama ausführen?',
        answer: 'Ja — Ollama unterstützt alle Qwen 3-Modellgrößen von 0.6B bis 72B. Starten Sie jede Größe mit ollama run qwen3:8b. Das 8B-Modell benötigt bei Q4 ~6 GB VRAM.',
        bullets: [
          'ollama run qwen3:0.6b — passt in 1 GB VRAM',
          'ollama run qwen3:8b — benötigt ~6 GB VRAM',
          'ollama run qwen3:72b — benötigt ~40 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama unterstützt alle Qwen 3-Größen: 0.6B, 1.5B, 3B, 7B, 14B, 32B und 72B',
          'Laden Sie jede Größe mit <code>ollama run qwen3:8b</code> — ersetzen Sie den Tag durch Ihre Zielgröße',
          'Das 7B-Modell benötigt ~6 GB VRAM bei Q4 und läuft mit ~20 tok/s auf einer Mid-Range-GPU',
          'Qwen 3 unterstützt Tool Calling nativ über die Standard-Ollama-API — kein benutzerdefiniertes Modelfile erforderlich',
        ],
      },
      body1: {
        title: 'Ja — das ist verfügbar',
        content: [
          '<strong>Stand Mai 2026 unterstützt Ollama alle wichtigen Qwen 3-Modellgrößen von 0.6B bis 72B.</strong> Laden Sie jede Größe mit einem einzigen Befehl: <code>ollama run qwen3:8b</code>. Ersetzen Sie <code>8b</code> durch <code>0.6b</code>, <code>1.5b</code>, <code>3b</code>, <code>14b</code>, <code>32b</code> oder <code>72b</code> für andere Größen.',
          'Jede Größe ist in mehreren Quantisierungsstufen verfügbar. Q4_K_M ist die Standardeinstellung und empfohlene Ausgangsstufe — sie bietet das beste Verhältnis aus Qualität und Dateigröße. Q8_0 ist für 7B und 14B verfügbar, wenn Sie VRAM-Spielraum haben.',
          'Tool Calling wird nativ für alle Qwen 3-Größen über die Standard-Ollama-API unterstützt. Es ist kein benutzerdefiniertes Modelfile oder spezielles Prompt-Template erforderlich.',
        ],
        codeBlock: 'ollama run qwen3:8b',
      },
      body2: {
        title: 'Die richtige Qwen 3-Größe wählen',
        content: [
          'Die richtige Qwen 3-Größe hängt vollständig vom verfügbaren VRAM ab. <strong>Für die meisten Nutzer mit einer Mid-Range-GPU (6–8 GB VRAM) ist das 7B-Modell bei Q4_K_M die praktische Wahl — es benötigt ~6 GB und läuft mit ~20 tok/s.</strong>',
          'Das 14B-Modell bei Q4 ist die empfohlene Stufe für Programmieraufgaben: Es übertrifft das 7B-Modell bei der Code-Generierung und passt bequem in 10–12 GB VRAM. Einen vollständigen Vergleich der Qwen 3-Coding-Performance gegenüber anderen lokalen Modellen finden Sie im <a href="/de/local-llms/run-qwen-locally-guide-2026" class="text-primary hover:underline">Leitfaden zum lokalen Ausführen von Qwen im Jahr 2026</a>.',
        ],
        columns: ['VRAM', 'Qwen 3-Größe', 'Geeignet für'],
        rows: [
          { 'VRAM': '< 4 GB', 'Qwen 3-Größe': '0.6B / 1.5B', 'Geeignet für': 'Edge-Geräte, Tests, CPU-only' },
          { 'VRAM': '4–6 GB', 'Qwen 3-Größe': '3B', 'Geeignet für': 'Budget-GPU oder CPU mit wenig RAM' },
          { 'VRAM': '6–12 GB', 'Qwen 3-Größe': '7B / 14B', 'Geeignet für': 'Allgemeine Nutzung und Coding' },
          { 'VRAM': '12–24 GB', 'Qwen 3-Größe': '14B / 32B', 'Geeignet für': 'Hochwertiges Coding und Reasoning' },
          { 'VRAM': '40+ GB', 'Qwen 3-Größe': '72B', 'Geeignet für': 'Nahezu frontier-nahe lokale Qualität' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Qwen 3 auf Ollama',
        faqs: [
          {
            q: 'Wie installiere ich Qwen 3 auf Ollama?',
            a: 'Führen Sie <code>ollama run qwen3:8b</code> in einem Terminal aus. Ollama lädt das Modell beim ersten Start automatisch herunter. Ersetzen Sie <code>8b</code> durch Ihre Zielgröße: 0.6b, 1.5b, 3b, 14b, 32b oder 72b.',
          },
          {
            q: 'Ist Qwen 3 besser als Llama 3 für Coding?',
            a: 'Für Coding: Ja, Qwen 3 14B übertrifft Llama 3 8B bei HumanEval-Benchmarks. Für allgemeine Unterhaltung auf 8B-Niveau bleibt Llama 3 8B wettbewerbsfähig. Die aktuellen Top-Ollama-Empfehlungen für alle Aufgaben finden Sie unter <a href="/de/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">den besten Ollama-Modellen aktuell</a>.',
          },
          {
            q: 'Unterstützt Qwen 3 Tool Calling auf Ollama?',
            a: 'Ja. Qwen 3 unterstützt Function- und Tool Calling nativ über die Standard-Ollama-API. Es ist kein benutzerdefiniertes Modelfile oder spezielle Konfiguration erforderlich — es funktioniert mit jedem Client, der das Ollama-Tool-Use-Format unterstützt.',
          },
          {
            q: 'Kann ich Qwen 3 72B auf Consumer-Hardware ausführen?',
            a: 'Technisch ja, aber es erfordert ~40 GB VRAM bei Q4 — also ein Dual-GPU-Setup (zwei RTX 3090) oder einen Apple M-series Mac mit 64+ GB Unified Memory. Die meisten Consumer-Setups sind auf das 32B-Tier begrenzt.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Ollama',
    title: 'Peut-on exécuter Qwen 3 avec Ollama ?',
    seoTitle: 'Qwen 3 sur Ollama 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui — Ollama supporte toutes les tailles de Qwen 3, de 0.6B à 72B. Lancez : ollama run qwen3:8b. Le modèle 8B nécessite ~6 Go de VRAM. Vérifié mai 2026.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter Qwen 3 avec Ollama ?',
        answer: 'Oui — Ollama supporte toutes les tailles de Qwen 3 de 0.6B à 72B. Lancez n\'importe quelle taille avec ollama run qwen3:8b. Le modèle 8B nécessite ~6 Go de VRAM en Q4.',
        bullets: [
          'ollama run qwen3:0.6b — tient dans 1 Go de VRAM',
          'ollama run qwen3:8b — nécessite ~6 Go de VRAM',
          'ollama run qwen3:72b — nécessite ~40 Go de VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama supporte toutes les tailles de Qwen 3 : 0.6B, 1.5B, 3B, 7B, 14B, 32B et 72B',
          'Téléchargez n\'importe quelle taille avec <code>ollama run qwen3:8b</code> — remplacez le tag par la taille souhaitée',
          'Le modèle 7B nécessite ~6 Go de VRAM en Q4 et tourne à ~20 tok/s sur un GPU milieu de gamme',
          'Qwen 3 supporte nativement le tool calling via l\'API Ollama standard — aucun Modelfile personnalisé requis',
        ],
      },
      body1: {
        title: 'Oui — voici ce qui est disponible',
        content: [
          '<strong>En mai 2026, Ollama supporte toutes les tailles majeures de Qwen 3, de 0.6B à 72B.</strong> Téléchargez n\'importe quelle taille avec une seule commande : <code>ollama run qwen3:8b</code>. Remplacez <code>8b</code> par <code>0.6b</code>, <code>1.5b</code>, <code>3b</code>, <code>14b</code>, <code>32b</code> ou <code>72b</code> pour d\'autres tailles.',
          'Chaque taille est disponible en plusieurs quantisations. Q4_K_M est la quantisation par défaut et recommandée — elle offre le meilleur rapport qualité/taille de fichier. Q8_0 est disponible pour les 7B et 14B si vous disposez de marge VRAM.',
          'Le tool calling est supporté nativement sur toutes les tailles de Qwen 3 via l\'API Ollama standard. Aucun Modelfile personnalisé ni template de prompt spécial n\'est requis.',
        ],
        codeBlock: 'ollama run qwen3:8b',
      },
      body2: {
        title: 'Quelle taille de Qwen 3 choisir',
        content: [
          'La bonne taille de Qwen 3 dépend entièrement de la VRAM disponible. <strong>Pour la plupart des utilisateurs avec un GPU milieu de gamme (6–8 Go de VRAM), le modèle 7B en Q4_K_M est le choix pratique — il nécessite ~6 Go et tourne à ~20 tok/s.</strong>',
          'Le modèle 14B en Q4 est la référence recommandée pour le code : il surpasse le 7B en génération de code et tient confortablement dans 10–12 Go de VRAM. Pour une comparaison complète des performances de codage de Qwen 3 face aux autres modèles locaux, consultez le <a href="/fr/local-llms/run-qwen-locally-guide-2026" class="text-primary hover:underline">guide pour exécuter Qwen localement en 2026</a>.',
        ],
        columns: ['VRAM', 'Taille Qwen 3', 'Idéal pour'],
        rows: [
          { 'VRAM': '< 4 GB', 'Taille Qwen 3': '0.6B / 1.5B', 'Idéal pour': 'Appareils edge, tests, CPU uniquement' },
          { 'VRAM': '4–6 GB', 'Taille Qwen 3': '3B', 'Idéal pour': 'GPU entrée de gamme ou CPU faible RAM' },
          { 'VRAM': '6–12 GB', 'Taille Qwen 3': '7B / 14B', 'Idéal pour': 'Usage général et programmation' },
          { 'VRAM': '12–24 GB', 'Taille Qwen 3': '14B / 32B', 'Idéal pour': 'Programmation et raisonnement avancés' },
          { 'VRAM': '40+ GB', 'Taille Qwen 3': '72B', 'Idéal pour': 'Qualité locale proche du frontier' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Qwen 3 avec Ollama',
        faqs: [
          {
            q: 'Comment installer Qwen 3 sur Ollama ?',
            a: 'Exécutez <code>ollama run qwen3:8b</code> dans un terminal. Ollama télécharge le modèle automatiquement au premier lancement. Remplacez <code>8b</code> par la taille souhaitée : 0.6b, 1.5b, 3b, 14b, 32b ou 72b.',
          },
          {
            q: 'Qwen 3 est-il meilleur que Llama 3 pour le code ?',
            a: 'Pour le code : oui, Qwen 3 14B surpasse Llama 3 8B sur les benchmarks HumanEval. Pour la conversation générale au niveau 8B : Llama 3 8B reste compétitif. Pour les meilleures recommandations Ollama toutes tâches confondues, consultez <a href="/fr/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">les meilleurs modèles Ollama en ce moment</a>.',
          },
          {
            q: 'Qwen 3 supporte-t-il le tool calling sur Ollama ?',
            a: 'Oui. Qwen 3 supporte les function calls et le tool calling nativement via l\'API Ollama standard. Aucun Modelfile personnalisé ni configuration spéciale n\'est requis — il fonctionne avec tout client supportant le format tool-use d\'Ollama.',
          },
          {
            q: 'Peut-on exécuter Qwen 3 72B sur du matériel grand public ?',
            a: 'Techniquement oui, mais cela nécessite ~40 Go de VRAM en Q4 — soit un setup double GPU (deux RTX 3090) ou un Mac Apple M-series avec 64+ Go de mémoire unifiée. La plupart des configurations grand public sont limitées au tier 32B.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Ollama',
    title: 'Qwen 3 は Ollama で動かせますか？',
    seoTitle: 'Qwen 3はOllamaで動く？2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'はい — Ollama は Qwen 3 の 0.6B から 72B まで全サイズに対応しています。実行コマンド：ollama run qwen3:8b。8B モデルには ~6 GB VRAM が必要です。2026年5月確認済み。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Qwen 3 は Ollama で動かせますか？',
        answer: 'はい — Ollama は Qwen 3 の全モデルサイズ（0.6B〜72B）に対応しています。ollama run qwen3:8b で任意のサイズを実行できます。8B モデルは Q4 で ~6 GB VRAM が必要です。',
        bullets: [
          'ollama run qwen3:0.6b — 1 GB VRAM に収まります',
          'ollama run qwen3:8b — ~6 GB VRAM が必要',
          'ollama run qwen3:72b — ~40 GB VRAM が必要',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama は Qwen 3 の全サイズ（0.6B、1.5B、3B、7B、14B、32B、72B）をサポートしています',
          '<code>ollama run qwen3:8b</code> で任意のサイズを取得できます — タグを目的のサイズに置き換えてください',
          '7B モデルは Q4 で ~6 GB VRAM が必要で、ミドルレンジ GPU で ~20 tok/s で動作します',
          'Qwen 3 は標準 Ollama API 経由でネイティブにツール呼び出しをサポートしています — カスタム Modelfile は不要です',
        ],
      },
      body1: {
        title: 'はい — 利用可能な内容',
        content: [
          '<strong>2026年5月時点で、Ollama は Qwen 3 の全主要モデルサイズ（0.6B〜72B）をサポートしています。</strong> 単一コマンドで任意のサイズをダウンロードできます：<code>ollama run qwen3:8b</code>。他のサイズには <code>8b</code> を <code>0.6b</code>、<code>1.5b</code>、<code>3b</code>、<code>14b</code>、<code>32b</code>、または <code>72b</code> に置き換えてください。',
          '各サイズは複数の量子化形式で利用可能です。Q4_K_M がデフォルトで推奨の出発点です — 品質とファイルサイズの最良のバランスを提供します。VRAM に余裕がある場合、7B と 14B では Q8_0 も利用できます。',
          'ツール呼び出しは標準 Ollama API を通じて全 Qwen 3 サイズでネイティブにサポートされています。カスタム Modelfile や特別なプロンプトテンプレートは必要ありません。',
        ],
        codeBlock: 'ollama run qwen3:8b',
      },
      body2: {
        title: 'Qwen 3 のサイズ選択',
        content: [
          '最適な Qwen 3 のサイズは利用可能な VRAM によって完全に決まります。<strong>ミドルレンジ GPU（6〜8 GB VRAM）を持つほとんどのユーザーには、Q4_K_M の 7B モデルが実用的な選択です — ~6 GB が必要で ~20 tok/s で動作します。</strong>',
          'Q4 の 14B モデルはコーディング向けの推奨ティアです：コード生成において 7B を上回り、10〜12 GB VRAM に快適に収まります。Qwen 3 のコーディング性能と他のローカルモデルの完全な比較については、<a href="/ja/local-llms/run-qwen-locally-guide-2026" class="text-primary hover:underline">2026年版 Qwen をローカルで実行するガイド</a>をご覧ください。',
        ],
        columns: ['VRAM', 'Qwen 3 サイズ', '用途'],
        rows: [
          { 'VRAM': '< 4 GB', 'Qwen 3 サイズ': '0.6B / 1.5B', '用途': 'エッジデバイス、テスト、CPU 専用' },
          { 'VRAM': '4–6 GB', 'Qwen 3 サイズ': '3B', '用途': 'バジェット GPU または低 RAM CPU' },
          { 'VRAM': '6–12 GB', 'Qwen 3 サイズ': '7B / 14B', '用途': '汎用およびコーディング' },
          { 'VRAM': '12–24 GB', 'Qwen 3 サイズ': '14B / 32B', '用途': '高品質コーディングと推論' },
          { 'VRAM': '40+ GB', 'Qwen 3 サイズ': '72B', '用途': 'フロンティアに近いローカル品質' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama 上の Qwen 3 に関するよくある質問',
        faqs: [
          {
            q: 'Ollama に Qwen 3 をインストールするには？',
            a: 'ターミナルで <code>ollama run qwen3:8b</code> を実行してください。Ollama は初回起動時に自動的にモデルをダウンロードします。<code>8b</code> を目的のサイズに置き換えてください：0.6b、1.5b、3b、14b、32b、または 72b。',
          },
          {
            q: 'Qwen 3 はコーディングで Llama 3 より優れていますか？',
            a: 'コーディングに関しては：はい、Qwen 3 14B は HumanEval ベンチマークで Llama 3 8B を上回ります。8B ティアでの一般的な会話では、Llama 3 8B は競争力を維持しています。全タスクの現在のトップ Ollama 推奨については、<a href="/ja/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">現在の最適 Ollama モデル</a>をご覧ください。',
          },
          {
            q: 'Qwen 3 は Ollama でツール呼び出しをサポートしていますか？',
            a: 'はい。Qwen 3 は標準 Ollama API 経由でファンクション呼び出しとツール呼び出しをネイティブにサポートしています。カスタム Modelfile や特別な設定は不要です — Ollama のツール使用形式をサポートする任意のクライアントで動作します。',
          },
          {
            q: 'Qwen 3 72B はコンシューマーハードウェアで動かせますか？',
            a: '技術的には可能ですが、Q4 で ~40 GB VRAM が必要です — つまりデュアル GPU 構成（RTX 3090 2枚）または 64GB 以上のユニファイドメモリを持つ Apple M-series Mac が必要です。ほとんどのコンシューマー環境では 32B ティアが上限となります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Ollama',
    title: '可以在Ollama上运行Qwen 3吗？',
    seoTitle: 'Qwen 3能在Ollama上运行吗？2026 | Prompt Bites | PromptQuorum',
    metaDescription: '可以——Ollama支持Qwen 3的全部规格，从0.6B到72B。运行命令：ollama run qwen3:8b。8B模型约需6 GB VRAM。2026年5月更新。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '可以在Ollama上运行Qwen 3吗？',
        answer: '可以——Ollama支持从0.6B到72B的所有Qwen 3模型规格。用单条命令运行任意规格：ollama run qwen3:8b。8B模型在Q4下需要约6 GB VRAM。',
        bullets: [
          'ollama run qwen3:0.6b — 仅需1 GB VRAM',
          'ollama run qwen3:8b — 需要约6 GB VRAM',
          'ollama run qwen3:72b — 需要约40 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama支持所有Qwen 3规格：0.6B、1.5B、3B、7B、14B、32B和72B',
          '用<code>ollama run qwen3:8b</code>拉取任意规格——将标签替换为目标规格',
          '7B模型在Q4下需要约6 GB VRAM，在中端GPU上运行约20 tok/s',
          'Qwen 3通过标准Ollama API原生支持工具调用——无需自定义Modelfile',
        ],
      },
      body1: {
        title: '可以——以下是可用的规格',
        content: [
          '<strong>截至2026年5月，Ollama支持从0.6B到72B的所有主要Qwen 3模型规格。</strong>用单条命令拉取任意规格：<code>ollama run qwen3:8b</code>。将<code>8b</code>替换为<code>0.6b</code>、<code>1.5b</code>、<code>3b</code>、<code>14b</code>、<code>32b</code>或<code>72b</code>。',
          '每个规格提供多种量化版本。Q4_K_M是默认的推荐起点——它提供最佳的质量与文件大小比。如果VRAM充足，7B和14B还提供Q8_0版本。',
          '所有Qwen 3规格均通过标准Ollama API原生支持工具调用。无需自定义Modelfile或特殊提示词模板。',
        ],
        codeBlock: 'ollama run qwen3:8b',
      },
      body2: {
        title: '选择哪个Qwen 3规格',
        content: [
          '选择Qwen 3规格完全取决于可用VRAM。<strong>对于使用中端GPU（6–8 GB VRAM）的大多数用户，Q4_K_M的7B模型是实用之选——需要约6 GB，运行约20 tok/s。</strong>',
          'Q4的14B模型是推荐的代码层级：代码生成性能优于7B，且可稳定运行在10–12 GB VRAM中。Qwen 3代码性能与其他本地模型的完整对比，请参阅<a href="/zh/local-llms/run-qwen-locally-guide-2026" class="text-primary hover:underline">2026年本地运行Qwen指南</a>。',
        ],
        columns: ['VRAM', 'Qwen 3规格', '适用场景'],
        rows: [
          { 'VRAM': '< 4 GB', 'Qwen 3规格': '0.6B / 1.5B', '适用场景': '边缘设备、测试、纯CPU' },
          { 'VRAM': '4–6 GB', 'Qwen 3规格': '3B', '适用场景': '入门级GPU或低内存CPU' },
          { 'VRAM': '6–12 GB', 'Qwen 3规格': '7B / 14B', '适用场景': '通用使用和代码生成' },
          { 'VRAM': '12–24 GB', 'Qwen 3规格': '14B / 32B', '适用场景': '高质量代码和推理' },
          { 'VRAM': '40+ GB', 'Qwen 3规格': '72B', '适用场景': '接近前沿的本地质量' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Ollama上运行Qwen 3的常见问题',
        faqs: [
          {
            q: '如何在Ollama上安装Qwen 3？',
            a: '在终端运行<code>ollama run qwen3:8b</code>。Ollama在首次运行时自动下载模型。将<code>8b</code>替换为目标规格：0.6b、1.5b、3b、14b、32b或72b。',
          },
          {
            q: 'Qwen 3在代码任务上比Llama 3更好吗？',
            a: '代码任务：是的，Qwen 3 14B在HumanEval基准上优于Llama 3 8B。8B层级的通用对话：Llama 3 8B仍具竞争力。跨任务的当前最佳Ollama选择，请参阅<a href="/zh/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">当前最佳Ollama模型</a>。',
          },
          {
            q: 'Qwen 3在Ollama上支持工具调用吗？',
            a: '支持。Qwen 3通过标准Ollama API原生支持函数和工具调用。无需自定义Modelfile或特殊配置——适用于任何支持Ollama工具使用格式的客户端。',
          },
          {
            q: '可以在消费级硬件上运行Qwen 3 72B吗？',
            a: '理论上可以，但在Q4下需要约40 GB VRAM——即双GPU配置（两块RTX 3090）或64 GB以上统一内存的Apple M-series Mac。大多数消费级配置的上限是32B。',
          },
        ],
      },
    },
  },
}
