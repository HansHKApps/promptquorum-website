import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'Which Local LLM Models Support Japanese Best?',
    dateModified: '2026-06-21',
    seoTitle: 'Best Local LLMs Japanese 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Rinna 3.6B (4 GB), ELYZA-7B (6 GB), Qwen3 7B (multilingual JA/ZH/EN), Phi-4 (10–12 GB): four local LLMs for Japanese tasks, all via Ollama in 2026.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'CyberAgent CALM3-22B', 'Qwen3 7B', 'Phi-4'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers and users running Japanese-language LLMs locally',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-ollama-models-cpu-only', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which local LLM models support Japanese best?',
        answer: 'The best Japanese local LLM depends on your task. For conversation: Rinna 3.6B (runs on 4 GB RAM). For instruction following: ELYZA-7B. For coding with Japanese: Qwen3-Coder. All run via Ollama.',
        bullets: [
          'Rinna 3.6B — Japanese-native, 4 GB RAM minimum, daily conversation',
          'ELYZA-7B — instruction following and Q&A, 6 GB RAM',
          'Qwen3 7B — multilingual JA/ZH/EN and coding, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welche lokalen LLM-Modelle unterstützen Japanisch am besten?',
        answer: 'Das beste japanische Lokal-LLM hängt vom Einsatzzweck ab. Für Konversation: Rinna 3.6B (läuft ab 4 GB RAM). Für Instruktionen: ELYZA-7B. Für Coding + Japanisch: Qwen3-Coder. Alle laufen über Ollama.',
        bullets: [
          'Rinna 3.6B — Japanisch-nativ, ab 4 GB RAM, tägliche Konversation',
          'ELYZA-7B — Instruktionsbefolgung und Q&A, 6 GB RAM',
          'Qwen3 7B — mehrsprachig JA/ZH/EN und Coding, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quels modèles LLM locaux prennent le mieux en charge le japonais ?',
        answer: 'Le meilleur LLM local japonais dépend de votre usage. Pour la conversation : Rinna 3.6B (fonctionne avec 4 Go de RAM). Pour le suivi d\'instructions : ELYZA-7B. Pour le codage avec japonais : Qwen3-Coder. Tous via Ollama.',
        bullets: [
          'Rinna 3.6B — natif japonais, 4 Go de RAM minimum, conversation quotidienne',
          'ELYZA-7B — suivi d\'instructions et Q&R, 6 Go de RAM',
          'Qwen3 7B — multilingue JA/ZH/EN et codage, 6 Go de RAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '日本語対応のローカルLLMモデルはどれがベスト？',
        answer: '用途によって最適な日本語ローカルLLMは異なります。会話なら：Rinna 3.6B（4 GB RAMで動作）。指示追従なら：ELYZA-7B。コーディング+日本語なら：Qwen3-Coder。すべてOllama経由で実行可能です。',
        bullets: [
          'Rinna 3.6B — 日本語ネイティブ、4 GB RAM最小、日常会話',
          'ELYZA-7B — 指示追従・Q&A、6 GB RAM',
          'Qwen3 7B — 多言語JA/ZH/EN対応・コーディング、6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '哪些本地LLM模型对日语支持最好？',
        answer: '最佳日语本地LLM取决于用途。对话用：Rinna 3.6B（4 GB内存可运行）。指令跟随：ELYZA-7B。日语编码：Qwen3-Coder。均可通过Ollama运行。',
        bullets: [
          'Rinna 3.6B — 日语原生，最低4 GB内存，日常对话',
          'ELYZA-7B — 指令跟随和问答，6 GB内存',
          'Qwen3 7B — 多语言JA/ZH/EN和编码，6 GB内存',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B is the lightest Japanese-native model — runs on 4 GB RAM via Ollama (dedicated inference only; close all background apps) with no fine-tuning needed',
          'ELYZA-7B (fine-tuned Llama) leads on instruction following in Japanese; use for Q&A and task automation',
          'Qwen3 7B is the best multilingual choice: strong Japanese alongside Chinese and English, plus coding support',
          'Japanese tokenization runs ~20–30% fewer effective tokens/second than English due to kanji/kana overhead — factor this into latency expectations',
          'Q4_K_M is the minimum recommended quantization for Japanese; Q3 and below show measurable quality degradation',
        ],
      },
      body1: {
        title: 'Japanese Model Comparison Table',
        content: [
          '<strong>As of May 2026, five local LLMs stand out for Japanese-language tasks: Rinna 3.6B, ELYZA-7B, CyberAgent CALM3-22B, Qwen3 7B, and Phi-4.</strong> Each fills a different hardware and use-case niche. The table below gives you the decision anchor points.',
          'Decision shortcut: Use Rinna 3.6B if you have only 4 GB RAM and need Japanese-native conversation. Use ELYZA-7B for structured instruction following on 6 GB hardware. Use Qwen3 7B when you need multilingual output across Japanese, Chinese, and English in a single model.',
        ],
        columns: ['Model', 'Size / Min RAM', 'Best for'],
        rows: [
          { 'Model': 'Rinna 3.6B', 'Size / Min RAM': '3.6B / 4 GB RAM', 'Best for': 'Daily conversation in Japanese' },
          { 'Model': 'ELYZA-7B', 'Size / Min RAM': '7B / 6 GB RAM', 'Best for': 'Instruction following, Q&A' },
          { 'Model': 'CyberAgent CALM3-22B', 'Size / Min RAM': '22B / 16 GB RAM', 'Best for': 'Business documents in Japanese' },
          { 'Model': 'Qwen3 7B', 'Size / Min RAM': '7B / 6 GB RAM', 'Best for': 'Multilingual JA/ZH/EN, coding' },
          { 'Model': 'Phi-4', 'Size / Min RAM': '14B / 10–12 GB RAM', 'Best for': 'Reasoning + Japanese (via fine-tune)' },
        ],
      },
      body2: {
        title: 'Recommendations by Task',
        content: [
          '<strong>Match the model to your task rather than defaulting to the largest available.</strong> Japanese tokenization produces ~20–30% fewer effective tokens per second compared to English text — kanji, hiragana, and katakana each require separate token slots, which means a model rated at 20 tok/s on English delivers roughly 14–16 effective tok/s on Japanese. Plan latency accordingly.',
          'Task-to-model mapping: <strong>Daily chat</strong> → Rinna 3.6B (lightest, Japanese-native, no fine-tuning required). <strong>Business documents and formal writing</strong> → ELYZA-7B or CyberAgent CALM3-22B (CALM3 is the stronger option when RAM allows 16 GB). <strong>Coding assistance in Japanese</strong> → Qwen3-Coder (multilingual code model with strong Japanese comment and documentation support). <strong>Translation between Japanese, English, and Chinese</strong> → Qwen3 7B (single model handles all three languages without swapping).',
          'Quantization matters more for Japanese than English. Q4_K_M is the recommended minimum — testing shows minimal quality degradation. Q3_K_M produces a ~5–10% reduction in Japanese output quality. Q2 quantization is not recommended for Japanese use. All models in this comparison are available at Q4_K_M via Ollama or LM Studio.',
          'For apps to run these models on Android in Japan, see the <a href="/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Android LLM apps for Japan guide</a>. For GPU recommendations to run 7B+ Japanese models locally in Japan, see the <a href="/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">Japan GPU price guide</a>. For a broader local model selection guide, see <a href="/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">best local LLMs for coding</a> and <a href="/local-llms/llm-quantization-explained" class="text-primary hover:underline">LLM quantization explained</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Japanese Local LLMs',
        faqs: [
          {
            q: 'Do Llama and Mistral support Japanese?',
            a: 'Basic support only. Llama 3.3 8B includes some Japanese training data but performs 30–40% worse than Japanese-specific models on Japanese-language benchmarks. Mistral Small has minimal Japanese training data and is not recommended for Japanese tasks. Use ELYZA-7B (Llama fine-tune) or Rinna 3.6B for reliable Japanese output.',
          },
          {
            q: 'Does quantization hurt Japanese quality?',
            a: 'Q4_K_M has minimal degradation and is the recommended minimum for Japanese. Q3_K_M shows approximately 5–10% quality reduction on Japanese text — noticeable in longer responses and formal writing. Avoid Q2 for Japanese use entirely. Q8_0 provides the best quality when VRAM is available.',
          },
          {
            q: 'Does a Japanese model run on an 8 GB MacBook?',
            a: 'Yes. Rinna 3.6B Q4 and ELYZA-7B Q4_K_M both run on a MacBook with 8 GB unified memory via Ollama. Apple Silicon treats system RAM as unified memory, so the full 8 GB is available to the model. Expect ~8–12 tok/s on M1/M2 hardware at these sizes.',
          },
          {
            q: 'How do I start a Japanese model in Ollama?',
            a: 'Run <code>ollama run rinna</code> or <code>ollama run elyza</code> in a terminal. Ollama downloads the model automatically on first run. Check the Ollama model library at ollama.com/library for the latest available variants and quantization options for each Japanese model.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'Welche lokalen LLM-Modelle unterstützen Japanisch am besten?',
    seoTitle: 'Lokale LLMs für Japanisch 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Rinna 3.6B (4 GB), ELYZA-7B (6 GB), Qwen3 7B (JA/ZH/EN), Phi-4 (10–12 GB): vier lokale LLMs für japanische Texte — alle über Ollama ausführbar.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      de: {
        question: 'Welche lokalen LLM-Modelle unterstützen Japanisch am besten?',
        answer: 'Das beste japanische Lokal-LLM hängt vom Einsatzzweck ab. Für Konversation: Rinna 3.6B (läuft ab 4 GB RAM). Für Instruktionen: ELYZA-7B. Für Coding + Japanisch: Qwen3-Coder. Alle laufen über Ollama.',
        bullets: [
          'Rinna 3.6B — Japanisch-nativ, ab 4 GB RAM, tägliche Konversation',
          'ELYZA-7B — Instruktionsbefolgung und Q&A, 6 GB RAM',
          'Qwen3 7B — mehrsprachig JA/ZH/EN und Coding, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B ist das leichteste japanische Modell — läuft ab 4 GB RAM via Ollama (nur Inferenz; alle Hintergrund-Apps schließen) ohne Fine-Tuning',
          'ELYZA-7B (fine-tuned Llama) führt bei japanischer Instruktionsbefolgung; ideal für Q&A und Aufgabenautomatisierung',
          'Qwen3 7B ist die beste mehrsprachige Wahl: starkes Japanisch neben Chinesisch und Englisch, plus Coding-Unterstützung',
          'Japanische Tokenisierung liefert ~20–30% weniger effektive Tokens/Sekunde als Englisch — Kanji/Kana-Overhead einplanen',
          'Q4_K_M ist die empfohlene Mindest-Quantisierung für Japanisch; Q3 und darunter zeigen messbare Qualitätsverluste',
        ],
      },
      body1: {
        title: 'Vergleichstabelle japanischer Modelle',
        content: [
          '<strong>Stand Mai 2026 stechen fünf lokale LLMs für japanischsprachige Aufgaben hervor: Rinna 3.6B, ELYZA-7B, CyberAgent CALM3-22B, Qwen3 7B und Phi-4.</strong> Jedes füllt eine andere Hardware- und Anwendungsnische. Die Tabelle unten liefert die entscheidenden Vergleichspunkte.',
          'Entscheidungshilfe: Rinna 3.6B bei nur 4 GB RAM für japanische Konversation. ELYZA-7B für strukturierte Instruktionsbefolgung auf 6-GB-Hardware. Qwen3 7B wenn mehrsprachige Ausgabe über Japanisch, Chinesisch und Englisch in einem Modell benötigt wird.',
        ],
        columns: ['Modell', 'Größe / Min RAM', 'Geeignet für'],
        rows: [
          { 'Modell': 'Rinna 3.6B', 'Größe / Min RAM': '3,6B / 4 GB RAM', 'Geeignet für': 'Tägliche Konversation auf Japanisch' },
          { 'Modell': 'ELYZA-7B', 'Größe / Min RAM': '7B / 6 GB RAM', 'Geeignet für': 'Instruktionsbefolgung, Q&A' },
          { 'Modell': 'CyberAgent CALM3-22B', 'Größe / Min RAM': '22B / 16 GB RAM', 'Geeignet für': 'Geschäftsdokumente auf Japanisch' },
          { 'Modell': 'Qwen3 7B', 'Größe / Min RAM': '7B / 6 GB RAM', 'Geeignet für': 'Mehrsprachig JA/ZH/EN, Coding' },
          { 'Modell': 'Phi-4', 'Größe / Min RAM': '14B / 10–12 GB RAM', 'Geeignet für': 'Reasoning + Japanisch (via Fine-Tune)' },
        ],
      },
      body2: {
        title: 'Empfehlungen nach Aufgabenbereich',
        content: [
          '<strong>Das Modell an die Aufgabe anpassen, nicht automatisch das größte verfügbare wählen.</strong> Japanische Tokenisierung liefert ~20–30% weniger effektive Tokens pro Sekunde als englischer Text — Kanji, Hiragana und Katakana belegen jeweils eigene Token-Slots. Ein Modell mit 20 tok/s auf Englisch liefert auf Japanisch ca. 14–16 effektive tok/s. Latenzen entsprechend einplanen.',
          '<strong>Täglicher Chat</strong> → Rinna 3.6B (leichtestes, japanisch-nativ, kein Fine-Tuning erforderlich). <strong>Geschäftsdokumente und formelles Schreiben</strong> → ELYZA-7B oder CyberAgent CALM3-22B (CALM3 ist die stärkere Option wenn 16 GB RAM verfügbar). <strong>Coding-Unterstützung auf Japanisch</strong> → Qwen3-Coder (mehrsprachiges Code-Modell mit starker japanischer Kommentar- und Dokumentationsunterstützung). <strong>Übersetzung zwischen Japanisch, Englisch und Chinesisch</strong> → Qwen3 7B (ein Modell für alle drei Sprachen ohne Wechsel).',
          'Quantisierung ist bei Japanisch wichtiger als bei Englisch. Q4_K_M ist die empfohlene Mindeststufe — Tests zeigen minimale Qualitätsverluste. Q3_K_M liefert ~5–10% schlechtere japanische Ausgabequalität. Q2 ist für japanische Nutzung nicht empfehlenswert. Alle Modelle sind via Ollama oder LM Studio als Q4_K_M verfügbar.',
          'Für Apps zur Ausführung dieser Modelle auf Android in Japan, siehe den <a href="/de/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">Android-LLM-Apps-Leitfaden für Japan</a>. Für GPU-Empfehlungen zum lokalen Betrieb von 7B+-Modellen in Japan, siehe den <a href="/de/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">Japan-GPU-Preisleitfaden</a>. Für eine breitere Modellauswahl: <a href="/de/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">beste lokale LLMs für Coding</a> und <a href="/de/local-llms/llm-quantization-explained" class="text-primary hover:underline">LLM-Quantisierung erklärt</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zu japanischen Lokal-LLMs',
        faqs: [
          {
            q: 'Unterstützen Llama und Mistral Japanisch?',
            a: 'Nur grundlegende Unterstützung. Llama 3.3 8B enthält einige japanische Trainingsdaten, liefert aber 30–40% schlechtere Ergebnisse als japanisch-spezifische Modelle auf japanischen Benchmarks. Mistral Small hat minimale japanische Trainingsdaten und wird für japanische Aufgaben nicht empfohlen. ELYZA-7B (Llama Fine-Tune) oder Rinna 3.6B für zuverlässige japanische Ausgabe verwenden.',
          },
          {
            q: 'Schadet Quantisierung der japanischen Qualität?',
            a: 'Q4_K_M hat minimale Degradation und ist die empfohlene Mindeststufe für Japanisch. Q3_K_M zeigt ca. 5–10% Qualitätseinbuße bei japanischem Text — spürbar bei längeren Antworten und formellen Texten. Q2 für japanische Nutzung vollständig vermeiden. Q8_0 bietet die beste Qualität wenn ausreichend VRAM verfügbar ist.',
          },
          {
            q: 'Läuft ein japanisches Modell auf einem 8-GB-MacBook?',
            a: 'Ja. Rinna 3.6B Q4 und ELYZA-7B Q4_K_M laufen beide auf einem MacBook mit 8 GB Unified Memory via Ollama. Apple Silicon behandelt System-RAM als Unified Memory, sodass die vollen 8 GB dem Modell zur Verfügung stehen. Auf M1/M2-Hardware sind bei diesen Größen ~8–12 tok/s zu erwarten.',
          },
          {
            q: 'Wie starte ich ein japanisches Modell in Ollama?',
            a: 'Im Terminal <code>ollama run rinna</code> oder <code>ollama run elyza</code> ausführen. Ollama lädt das Modell beim ersten Start automatisch herunter. Die aktuelle Modellbibliothek unter ollama.com/library prüfen für die neuesten verfügbaren Varianten und Quantisierungsoptionen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Quels modèles LLM locaux prennent le mieux en charge le japonais ?',
    seoTitle: 'LLMs locaux japonais 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Rinna 3.6B (4 Go), ELYZA-7B (6 Go), Qwen3 7B (JA/ZH/EN), Phi-4 (10–12 Go) : quatre LLM locaux pour le japonais, tous compatibles Ollama en 2026.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles LLM locaux prennent le mieux en charge le japonais ?',
        answer: 'Le meilleur LLM local japonais dépend de votre usage. Pour la conversation : Rinna 3.6B (fonctionne avec 4 Go de RAM). Pour le suivi d\'instructions : ELYZA-7B. Pour le codage avec japonais : Qwen3-Coder. Tous via Ollama.',
        bullets: [
          'Rinna 3.6B — natif japonais, 4 Go de RAM minimum, conversation quotidienne',
          'ELYZA-7B — suivi d\'instructions et Q&R, 6 Go de RAM',
          'Qwen3 7B — multilingue JA/ZH/EN et codage, 6 Go de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B est le modèle natif japonais le plus léger — fonctionne avec 4 Go de RAM via Ollama (inférence dédiée uniquement ; fermer toutes les applications en arrière-plan) sans fine-tuning',
          'ELYZA-7B (Llama fine-tuné) mène sur le suivi d\'instructions en japonais ; idéal pour les Q&R et l\'automatisation de tâches',
          'Qwen3 7B est le meilleur choix multilingue : japonais robuste aux côtés du chinois et de l\'anglais, plus le codage',
          'La tokenisation japonaise produit ~20–30% moins de tokens effectifs/seconde qu\'en anglais — prévoir ce overhead dans les estimations de latence',
          'Q4_K_M est la quantisation minimale recommandée pour le japonais ; Q3 et en dessous montrent une dégradation mesurable',
        ],
      },
      body1: {
        title: 'Tableau comparatif des modèles japonais',
        content: [
          '<strong>En mai 2026, cinq LLM locaux se distinguent pour les tâches en japonais : Rinna 3.6B, ELYZA-7B, CyberAgent CALM3-22B, Qwen3 7B et Phi-4.</strong> Chacun répond à un profil matériel et un cas d\'usage différent. Le tableau ci-dessous donne les points de décision essentiels.',
          'Raccourci décisionnel : Rinna 3.6B si vous disposez seulement de 4 Go de RAM et avez besoin de conversation native en japonais. ELYZA-7B pour le suivi d\'instructions structuré sur hardware 6 Go. Qwen3 7B quand vous avez besoin d\'une sortie multilingue japonais, chinois et anglais dans un seul modèle.',
        ],
        columns: ['Modèle', 'Taille / RAM min.', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Rinna 3.6B', 'Taille / RAM min.': '3,6B / 4 Go de RAM', 'Idéal pour': 'Conversation quotidienne en japonais' },
          { 'Modèle': 'ELYZA-7B', 'Taille / RAM min.': '7B / 6 Go de RAM', 'Idéal pour': 'Suivi d\'instructions, Q&R' },
          { 'Modèle': 'CyberAgent CALM3-22B', 'Taille / RAM min.': '22B / 16 Go de RAM', 'Idéal pour': 'Documents professionnels en japonais' },
          { 'Modèle': 'Qwen3 7B', 'Taille / RAM min.': '7B / 6 Go de RAM', 'Idéal pour': 'Multilingue JA/ZH/EN, codage' },
          { 'Modèle': 'Phi-4', 'Taille / RAM min.': '14B / 10–12 Go de RAM', 'Idéal pour': 'Raisonnement + japonais (via fine-tune)' },
        ],
      },
      body2: {
        title: 'Recommandations par type de tâche',
        content: [
          '<strong>Adaptez le modèle à votre tâche plutôt que de prendre par défaut le plus grand disponible.</strong> La tokenisation japonaise produit ~20–30% moins de tokens effectifs par seconde comparé à l\'anglais — kanji, hiragana et katakana occupent chacun des emplacements de tokens séparés. Un modèle évalué à 20 tok/s sur l\'anglais produit environ 14–16 tok/s effectifs sur le japonais. Planifiez la latence en conséquence.',
          '<strong>Chat quotidien</strong> → Rinna 3.6B (le plus léger, natif japonais, aucun fine-tuning requis). <strong>Documents professionnels et écriture formelle</strong> → ELYZA-7B ou CyberAgent CALM3-22B (CALM3 est la meilleure option si 16 Go de RAM sont disponibles). <strong>Aide au codage en japonais</strong> → Qwen3-Coder (modèle de code multilingue avec forte prise en charge des commentaires et de la documentation en japonais). <strong>Traduction japonais↔anglais↔chinois</strong> → Qwen3 7B (un seul modèle gère les trois langues sans changement).',
          'La quantisation compte davantage pour le japonais que pour l\'anglais. Q4_K_M est le minimum recommandé — les tests montrent une dégradation minimale. Q3_K_M produit une réduction d\'environ 5–10% de la qualité en japonais. Q2 n\'est pas recommandé pour un usage japonais. Tous les modèles de cette comparaison sont disponibles en Q4_K_M via Ollama ou LM Studio.',
          'Pour les applications permettant d\'utiliser ces modèles sur Android au Japon, consultez le <a href="/fr/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guide des apps LLM Android pour le Japon</a>. Pour les recommandations GPU pour les modèles 7B+ en japonais au Japon, consultez le <a href="/fr/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guide des prix GPU au Japon</a>. Pour une sélection plus large : <a href="/fr/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">meilleurs LLM locaux pour le codage</a> et <a href="/fr/local-llms/llm-quantization-explained" class="text-primary hover:underline">la quantisation LLM expliquée</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLM locaux japonais',
        faqs: [
          {
            q: 'Llama et Mistral supportent-ils le japonais ?',
            a: 'Support basique uniquement. Llama 3.3 8B inclut quelques données d\'entraînement en japonais mais performe 30–40% moins bien que les modèles spécifiques au japonais sur les benchmarks japonais. Mistral Small a des données d\'entraînement japonaises minimales et n\'est pas recommandé pour les tâches japonaises. Utilisez ELYZA-7B (fine-tune Llama) ou Rinna 3.6B pour une sortie japonaise fiable.',
          },
          {
            q: 'La quantisation nuit-elle à la qualité en japonais ?',
            a: 'Q4_K_M a une dégradation minimale et est le minimum recommandé pour le japonais. Q3_K_M montre environ 5–10% de réduction de qualité sur le texte japonais — perceptible dans les réponses longues et l\'écriture formelle. Évitez totalement Q2 pour un usage japonais. Q8_0 offre la meilleure qualité quand la VRAM le permet.',
          },
          {
            q: 'Un modèle japonais tourne-t-il sur un MacBook 8 Go ?',
            a: 'Oui. Rinna 3.6B Q4 et ELYZA-7B Q4_K_M fonctionnent tous deux sur un MacBook avec 8 Go de mémoire unifiée via Ollama. Apple Silicon traite la RAM système comme mémoire unifiée, donc les 8 Go complets sont disponibles pour le modèle. Attendez ~8–12 tok/s sur hardware M1/M2 à ces tailles.',
          },
          {
            q: 'Comment démarrer un modèle japonais dans Ollama ?',
            a: 'Exécutez <code>ollama run rinna</code> ou <code>ollama run elyza</code> dans un terminal. Ollama télécharge le modèle automatiquement au premier lancement. Consultez la bibliothèque de modèles Ollama sur ollama.com/library pour les dernières variantes disponibles et options de quantisation.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: '日本語対応のローカルLLMモデルはどれがベスト？',
    seoTitle: '日本語対応ローカルLLMモデル比較2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Rinna 3.6Bは4 GB RAMで動作する最軽量の日本語ネイティブモデル。ELYZA-7Bは指示追従に最適。Qwen3 7BはJA/ZH/ENの多言語とコーディングをカバー。すべてOllama経由。2026年5月更新。',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      ja: {
        question: '日本語対応のローカルLLMモデルはどれがベスト？',
        answer: '用途によって最適な日本語ローカルLLMは異なります。会話なら：Rinna 3.6B（4 GB RAMで動作）。指示追従なら：ELYZA-7B。コーディング+日本語なら：Qwen3-Coder。すべてOllama経由で実行可能です。',
        bullets: [
          'Rinna 3.6B — 日本語ネイティブ（Rinna株式会社製）、4 GB RAM最小、日常会話向け',
          'ELYZA-7B — 指示追従・Q&A、6 GB RAM、Llama 3ファインチューン',
          'Qwen3 7B — 多言語JA/ZH/EN対応・コーディング、6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B（Rinna株式会社製）が最軽量の日本語ネイティブモデル — 4 GB RAMでOllama経由（専用推論のみ；他のアプリはすべて終了すること）、ファインチューン不要',
          'ELYZA-7B（Llama 3ファインチューン）が日本語の指示追従でトップ — Q&AやタスクオートメーションはELYZAが適切',
          'Qwen3 7Bが最良の多言語モデル：日本語・中国語・英語を一つのモデルで処理、コーディングにも対応',
          '日本語トークナイズは漢字・ひらがな・カタカナのオーバーヘッドで英語比~20–30%トークン/秒が低下 — レイテンシ計算に注意',
          'Q4_K_Mが日本語の推奨最低量子化。Q3以下では品質劣化が顕著、Q2は非推奨',
        ],
      },
      body1: {
        title: '日本語モデル比較表',
        content: [
          '<strong>2026年5月時点で、日本語タスクに優れた5つのローカルLLMがあります：Rinna 3.6B、ELYZA-7B、CyberAgent CALM3-22B、Qwen3 7B、Phi-4。</strong>それぞれ異なるハードウェア環境と用途に対応しています。日本国内では特に、Rinna株式会社とELYZA株式会社のモデルがオープンソースコミュニティで広く使われています。',
          '決断のショートカット：RAMが4 GBしかない場合はRinna 3.6Bを選択。6 GBハードウェアで構造的な指示追従が必要な場合はELYZA-7Bを選択。日本語・中国語・英語の多言語出力が一つのモデルで必要な場合はQwen3 7Bを選択。',
        ],
        columns: ['モデル', 'サイズ / 最低RAM', '用途'],
        rows: [
          { 'モデル': 'Rinna 3.6B', 'サイズ / 最低RAM': '3.6B / 4 GB RAM', '用途': '日常会話（日本語ネイティブ）' },
          { 'モデル': 'ELYZA-7B', 'サイズ / 最低RAM': '7B / 6 GB RAM', '用途': '指示追従・Q&A' },
          { 'モデル': 'CyberAgent CALM3-22B', 'サイズ / 最低RAM': '22B / 16 GB RAM', '用途': 'ビジネス文書・フォーマル文章' },
          { 'モデル': 'Qwen3 7B', 'サイズ / 最低RAM': '7B / 6 GB RAM', '用途': '多言語JA/ZH/EN・コーディング' },
          { 'モデル': 'Phi-4', 'サイズ / 最低RAM': '14B / 10–12 GB RAM', '用途': '推論+日本語（ファインチューン経由）' },
        ],
      },
      body2: {
        title: 'タスク別推奨モデル',
        content: [
          '<strong>最大サイズではなく、タスクに合ったモデルを選ぶことが重要です。</strong>日本語の特性として、漢字・ひらがな・カタカナがそれぞれ個別のトークンスロットを占有するため、英語比で~20–30%トークン/秒が低下します。英語で20 tok/sのモデルは日本語では約14～16有効tok/sになります。レイテンシ計算に注意してください。',
          '<strong>日常チャット</strong> → Rinna 3.6B（最軽量、日本語ネイティブ、ファインチューン不要）。<strong>ビジネス文書・フォーマル文章</strong> → ELYZA-7BまたはCyberAgent CALM3-22B（16 GB RAMが使えるならCALM3がより高品質）。<strong>日本語でのコーディング支援</strong> → Qwen3-Coder（日本語コメント・ドキュメントに強い多言語コードモデル）。<strong>日英中の翻訳</strong> → Qwen3 7B（モデル切り替えなしで3言語対応）。',
          '日本語においては量子化の影響が英語より大きいです。Q4_K_Mが推奨最低ライン — 品質劣化は最小限。Q3_K_Mは日本語テキストで~5–10%の品質低下を示します（長文・フォーマル文章で顕著）。日本語用途ではQ2は完全に非推奨。すべてのモデルはOllamaまたはLM Studio経由でQ4_K_Mとして利用可能です。',
          '日本でAndroid上でこれらのモデルを使用するアプリについては、<a href="/ja/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本向けAndroid LLMアプリガイド</a>を参照してください。日本で7B以上の日本語モデルをローカル実行するためのGPU推奨については、<a href="/ja/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本向けGPU価格ガイド</a>を参照してください。より広範なモデル選択ガイドとして、<a href="/ja/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">コーディング向け最良ローカルLLM</a>と<a href="/ja/local-llms/llm-quantization-explained" class="text-primary hover:underline">LLM量子化の解説</a>もご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '日本語ローカルLLMに関するよくある質問',
        faqs: [
          {
            q: 'LlamaやMistralは日本語に対応していますか？',
            a: '基本的なサポートのみです。Llama 3.3 8Bには一部の日本語訓練データが含まれていますが、日本語ベンチマークでは日本語特化モデルより30–40%性能が低下します。Mistral Smallは日本語訓練データが最小限であり、日本語タスクには推奨されません。信頼性の高い日本語出力にはELYZA-7B（Llamaファインチューン）またはRinna 3.6Bを使用してください。',
          },
          {
            q: '量子化は日本語品質に影響しますか？',
            a: 'Q4_K_Mは劣化が最小限で、日本語の推奨最低量子化です。Q3_K_Mは日本語テキストで約5–10%の品質低下を示します — 長い返答やフォーマル文章で顕著です。日本語用途ではQ2は完全に使用を避けてください。VRAMに余裕がある場合はQ8_0が最高品質を提供します。',
          },
          {
            q: '8 GBのMacBookで日本語モデルは動きますか？',
            a: 'はい。Rinna 3.6B Q4とELYZA-7B Q4_K_Mはどちらも8 GBユニファイドメモリのMacBook上でOllama経由で動作します。Apple SiliconはシステムRAMをユニファイドメモリとして扱うため、8 GB全体がモデルに利用可能です。M1/M2ハードウェアではこれらのサイズで~8–12 tok/sが期待できます。',
          },
          {
            q: 'Ollamaで日本語モデルを起動するには？',
            a: 'ターミナルで<code>ollama run rinna</code>または<code>ollama run elyza</code>を実行してください。Ollamaは初回起動時に自動的にモデルをダウンロードします。最新の利用可能なバリアントと量子化オプションはollama.com/libraryのOllamaモデルライブラリを確認してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: '哪些本地LLM模型对日语支持最好？',
    seoTitle: '最佳日语本地LLM模型2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Rinna 3.6B最低4 GB内存即可运行，是最轻量的日语原生本地LLM。ELYZA-7B在指令跟随方面领先。Qwen3 7B覆盖JA/ZH/EN多语言和编码。均可通过Ollama运行。2026年5月更新。',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    quickAnswerTop: {
      zh: {
        question: '哪些本地LLM模型对日语支持最好？',
        answer: '最佳日语本地LLM取决于用途。对话用：Rinna 3.6B（4 GB内存可运行）。指令跟随：ELYZA-7B。日语编码：Qwen3-Coder。均可通过Ollama运行。',
        bullets: [
          'Rinna 3.6B — 日语原生，最低4 GB内存，日常对话',
          'ELYZA-7B — 指令跟随和问答，6 GB内存',
          'Qwen3 7B — 多语言JA/ZH/EN和编码，6 GB内存',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B是最轻量的日语原生模型 — 通过Ollama在4 GB内存上运行（专用推理模式；关闭所有后台应用），无需微调',
          'ELYZA-7B（Llama微调版）在日语指令跟随方面领先；适用于问答和任务自动化',
          'Qwen3 7B是最佳多语言选择：日语能力强，同时支持中文和英文，以及代码生成',
          '日语分词比英语每秒产生约20–30%更少的有效token——汉字/假名开销影响实际推理速度',
          'Q4_K_M是日语推荐的最低量化级别；Q3及以下显示可测量的质量下降',
        ],
      },
      body1: {
        title: '日语模型对比表',
        content: [
          '<strong>截至2026年5月，五款本地LLM在日语任务中表现突出：Rinna 3.6B、ELYZA-7B、CyberAgent CALM3-22B、Qwen3 7B和Phi-4。</strong>每款模型填补不同的硬件和使用场景需求。下表提供关键决策参考点。',
          '决策捷径：如果只有4 GB内存且需要日语原生对话，选Rinna 3.6B。在6 GB硬件上需要结构化指令跟随，选ELYZA-7B。需要在单一模型中实现日语、中文、英文多语言输出，选Qwen3 7B。',
        ],
        columns: ['模型', '规模 / 最低内存', '最适合场景'],
        rows: [
          { '模型': 'Rinna 3.6B', '规模 / 最低内存': '3.6B / 4 GB内存', '最适合场景': '日常日语对话' },
          { '模型': 'ELYZA-7B', '规模 / 最低内存': '7B / 6 GB内存', '最适合场景': '指令跟随、问答' },
          { '模型': 'CyberAgent CALM3-22B', '规模 / 最低内存': '22B / 16 GB内存', '最适合场景': '日语商业文档' },
          { '模型': 'Qwen3 7B', '规模 / 最低内存': '7B / 6 GB内存', '最适合场景': '多语言JA/ZH/EN、代码生成' },
          { '模型': 'Phi-4', '规模 / 最低内存': '14B / 10–12 GB内存', '最适合场景': '推理+日语（通过微调）' },
        ],
      },
      body2: {
        title: '按任务类型的模型推荐',
        content: [
          '<strong>根据任务选择模型，而非默认使用最大的可用模型。</strong>日语分词的特点是汉字、平假名和片假名各占独立token位，与英语相比每秒有效token数减少约20–30%。英语评分20 tok/s的模型在日语下只能产生约14–16有效tok/s。相应规划延迟预期。',
          '<strong>日常对话</strong> → Rinna 3.6B（最轻量、日语原生、无需微调）。<strong>商业文档和正式写作</strong> → ELYZA-7B或CyberAgent CALM3-22B（如有16 GB内存，CALM3效果更好）。<strong>日语编程辅助</strong> → Qwen3-Coder（支持日语注释和文档的多语言代码模型）。<strong>日英中翻译</strong> → Qwen3 7B（单一模型处理三种语言，无需切换）。',
          '量化对日语的影响比英语更大。Q4_K_M是推荐最低量化——测试显示质量下降极小。Q3_K_M日语文本质量下降约5–10%（长篇回复和正式文本中明显）。日语使用完全不推荐Q2量化。本次对比中所有模型均可通过Ollama或LM Studio以Q4_K_M获取。',
          '在日本Android设备上运行这些模型的应用，请参阅<a href="/zh/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">日本Android LLM应用指南</a>。在日本本地运行7B+日语模型的GPU推荐，请参阅<a href="/zh/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本GPU价格指南</a>。更广泛的模型选择，请参阅<a href="/zh/local-llms/best-local-llms-for-coding" class="text-primary hover:underline">最佳本地编程LLM</a>和<a href="/zh/local-llms/llm-quantization-explained" class="text-primary hover:underline">LLM量化详解</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '日语本地LLM常见问题',
        faqs: [
          {
            q: 'Llama和Mistral支持日语吗？',
            a: '仅基础支持。Llama 3.3 8B包含一些日语训练数据，但在日语基准测试中比日语特化模型差30–40%。Mistral Small的日语训练数据极少，不推荐用于日语任务。可靠的日语输出请使用ELYZA-7B（Llama微调版）或Rinna 3.6B。',
          },
          {
            q: '量化会损害日语质量吗？',
            a: 'Q4_K_M质量下降极小，是日语推荐的最低量化。Q3_K_M在日语文本上显示约5–10%的质量下降——在长篇回复和正式写作中明显。日语使用完全避免Q2量化。VRAM充足时，Q8_0提供最佳质量。',
          },
          {
            q: '8 GB MacBook能运行日语模型吗？',
            a: '可以。Rinna 3.6B Q4和ELYZA-7B Q4_K_M都能在8 GB统一内存的MacBook上通过Ollama运行。Apple Silicon将系统内存作为统一内存处理，因此全部8 GB都可供模型使用。在M1/M2硬件上，这些规模预计可达~8–12 tok/s。',
          },
          {
            q: '如何在Ollama中启动日语模型？',
            a: '在终端运行<code>ollama run rinna</code>或<code>ollama run elyza</code>。Ollama在首次运行时自动下载模型。在ollama.com/library的Ollama模型库中查看最新可用变体和量化选项。',
          },
        ],
      },
    },
  },

  es: {
    theme: 'Model Comparisons',
    title: '¿Qué modelos LLM locales admiten mejor el japonés?',
    seoTitle: 'Mejores LLMs locales en japonés 2026 | PromptQuorum',
    metaDescription: 'Rinna 3.6B (4 GB), ELYZA-7B (6 GB), Qwen3 7B (multilingüe JA/ZH/EN), Phi-4 (10–12 GB): cuatro LLMs locales para tareas en japonés, todos vía Ollama en 2026.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'CyberAgent CALM3-22B', 'Qwen3 7B', 'Phi-4'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores y usuarios que ejecutan LLMs en japonés en local',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-ollama-models-cpu-only', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Which local LLM models support Japanese best?', answer: 'Depends on task: Rinna 3.6B for conversation, ELYZA-7B for instruction following, Qwen3-Coder for coding.', bullets: ['Rinna 3.6B: 4 GB RAM', 'ELYZA-7B: 6 GB RAM', 'Qwen3 7B: multilingual'], updatedDate: '2026-05' },
      de: { question: 'Beste lokale LLMs für Japanisch?', answer: 'Rinna 3.6B für Konversation, ELYZA-7B für Instruktionen.', bullets: ['Rinna 3.6B: ab 4 GB RAM', 'ELYZA-7B: 6 GB RAM'], updatedDate: '2026-05' },
      fr: { question: 'Meilleurs LLM locaux pour le japonais ?', answer: 'Rinna 3.6B pour la conversation, ELYZA-7B pour les instructions.', bullets: ['Rinna 3.6B: 4 Go RAM', 'ELYZA-7B: 6 Go RAM'], updatedDate: '2026-05' },
      ja: { question: '日本語対応ローカルLLMは？', answer: '会話はRinna 3.6B、指示追従はELYZA-7B。', bullets: ['Rinna 3.6B: 4 GB RAM', 'ELYZA-7B: 6 GB RAM'], updatedDate: '2026-05' },
      zh: { question: '日语本地LLM推荐？', answer: '对话用Rinna 3.6B，指令跟随用ELYZA-7B。', bullets: ['Rinna 3.6B: 4 GB内存', 'ELYZA-7B: 6 GB内存'], updatedDate: '2026-05' },
      es: {
        question: '¿Qué modelos LLM locales admiten mejor el japonés?',
        answer: 'El mejor LLM local en japonés depende de tu tarea. Para conversación: Rinna 3.6B (funciona con 4 GB RAM). Para seguimiento de instrucciones: ELYZA-7B. Para programación con japonés: Qwen3-Coder. Todos corren vía Ollama.',
        bullets: [
          'Rinna 3.6B — nativo en japonés, 4 GB RAM mínimo, conversación cotidiana',
          'ELYZA-7B — seguimiento de instrucciones y Q&A, 6 GB RAM',
          'Qwen3 7B — multilingüe JA/ZH/EN y programación, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B es el modelo nativo en japonés más ligero — funciona con 4 GB RAM vía Ollama (solo inferencia; cierra todas las apps en segundo plano) sin fine-tuning',
          'ELYZA-7B (Llama fine-tuneado) lidera en seguimiento de instrucciones en japonés; úsalo para Q&A y automatización de tareas',
          'Qwen3 7B es la mejor opción multilingüe: japonés robusto junto con chino e inglés, más soporte de programación',
          'La tokenización japonesa produce ~20–30% menos tokens efectivos/segundo que el inglés debido al overhead de kanji/kana — ten esto en cuenta en las expectativas de latencia',
          'Q4_K_M es la cuantización mínima recomendada para japonés; Q3 y por debajo muestran degradación medible de calidad',
        ],
      },
      body1: {
        title: 'Tabla comparativa de modelos en japonés',
        content: [
          '<strong>A mayo de 2026, cinco LLMs locales destacan para tareas en japonés: Rinna 3.6B, ELYZA-7B, CyberAgent CALM3-22B, Qwen3 7B y Phi-4.</strong> Cada uno cubre un nicho de hardware y caso de uso diferente. La tabla ofrece los puntos de decisión clave.',
          'Atajo de decisión: usa Rinna 3.6B si solo tienes 4 GB RAM y necesitas conversación nativa en japonés. Usa ELYZA-7B para seguimiento estructurado de instrucciones en hardware de 6 GB. Usa Qwen3 7B cuando necesites salida multilingüe en japonés, chino e inglés en un solo modelo.',
        ],
        columns: ['Modelo', 'Tamaño / RAM mínima', 'Mejor para'],
        rows: [
          { 'Modelo': 'Rinna 3.6B', 'Tamaño / RAM mínima': '3.6B / 4 GB RAM', 'Mejor para': 'Conversación cotidiana en japonés' },
          { 'Modelo': 'ELYZA-7B', 'Tamaño / RAM mínima': '7B / 6 GB RAM', 'Mejor para': 'Seguimiento de instrucciones, Q&A' },
          { 'Modelo': 'CyberAgent CALM3-22B', 'Tamaño / RAM mínima': '22B / 16 GB RAM', 'Mejor para': 'Documentos de negocio en japonés' },
          { 'Modelo': 'Qwen3 7B', 'Tamaño / RAM mínima': '7B / 6 GB RAM', 'Mejor para': 'Multilingüe JA/ZH/EN, programación' },
          { 'Modelo': 'Phi-4', 'Tamaño / RAM mínima': '14B / 10–12 GB RAM', 'Mejor para': 'Razonamiento + japonés (vía fine-tune)' },
        ],
      },
      body2: {
        title: 'Recomendaciones por tarea',
        content: [
          '<strong>Adapta el modelo a tu tarea en lugar de elegir por defecto el más grande disponible.</strong> La tokenización japonesa produce ~20–30% menos tokens efectivos por segundo comparado con texto inglés — el kanji, hiragana y katakana ocupan slots de tokens separados. Un modelo evaluado en 20 tok/s en inglés entrega aproximadamente 14–16 tok/s efectivos en japonés.',
          'Mapeo tarea-modelo: <strong>Chat cotidiano</strong> → Rinna 3.6B (el más ligero, nativo en japonés, sin fine-tuning requerido). <strong>Documentos de negocio y escritura formal</strong> → ELYZA-7B o CyberAgent CALM3-22B (CALM3 es la opción más fuerte cuando se dispone de 16 GB RAM). <strong>Asistencia de programación en japonés</strong> → Qwen3-Coder (modelo de código multilingüe con buen soporte de comentarios y documentación en japonés). <strong>Traducción entre japonés, inglés y chino</strong> → Qwen3 7B (un solo modelo para los tres idiomas sin cambiar de modelo).',
          'La cuantización importa más para japonés que para inglés. Q4_K_M es el mínimo recomendado — los tests muestran una degradación mínima de calidad. Q3_K_M produce una reducción de ~5–10% en la calidad de salida en japonés. La cuantización Q2 no se recomienda para uso en japonés. Todos los modelos de esta comparativa están disponibles en Q4_K_M vía Ollama o LM Studio.',
          'Para apps que ejecuten estos modelos en Android en Japón, consulta la <a href="/es/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guía de apps LLM Android para Japón</a>. Para recomendaciones de GPU para ejecutar modelos 7B+ en japonés en Japón, consulta la <a href="/es/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guía de precios de GPUs en Japón</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLMs locales en japonés',
        faqs: [
          {
            q: '¿Admiten japonés Llama y Mistral?',
            a: 'Solo soporte básico. Llama 3.3 8B incluye algunos datos de entrenamiento en japonés pero rinde un 30–40% peor que los modelos específicos de japonés en benchmarks de japonés. Mistral Small tiene datos de entrenamiento en japonés mínimos y no se recomienda para tareas en japonés. Usa ELYZA-7B (fine-tune de Llama) o Rinna 3.6B para salida fiable en japonés.',
          },
          {
            q: '¿Daña la cuantización la calidad en japonés?',
            a: 'Q4_K_M tiene una degradación mínima y es el mínimo recomendado para japonés. Q3_K_M muestra aproximadamente un 5–10% de reducción de calidad en texto japonés — perceptible en respuestas largas y escritura formal. Evita completamente Q2 para uso en japonés. Q8_0 proporciona la mejor calidad cuando hay VRAM disponible.',
          },
          {
            q: '¿Funciona un modelo en japonés en un MacBook de 8 GB?',
            a: 'Sí. Rinna 3.6B Q4 y ELYZA-7B Q4_K_M funcionan ambos en un MacBook con 8 GB de memoria unificada vía Ollama. Apple Silicon trata la RAM del sistema como memoria unificada, por lo que los 8 GB completos están disponibles para el modelo. Espera ~8–12 tok/s en hardware M1/M2 con estos tamaños.',
          },
          {
            q: '¿Cómo inicio un modelo en japonés en Ollama?',
            a: 'Ejecuta <code>ollama run rinna</code> o <code>ollama run elyza</code> en un terminal. Ollama descarga el modelo automáticamente en el primer arranque. Consulta la biblioteca de modelos de Ollama en ollama.com/library para las últimas variantes disponibles y opciones de cuantización.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'ما أفضل النماذج اللغوية الكبيرة المحلية لدعم اللغة اليابانية؟',
    seoTitle: 'أفضل ⁨LLMs⁩ محلية لليابانية ⁨2026⁩: ⁨Rinna⁩ و⁨ELYZA⁩ و⁨Qwen3⁩',
    metaDescription: '⁨Rinna 3.6B⁩ يعمل بـ⁨4 GB RAM⁩، و⁨ELYZA-7B⁩ بـ⁨6 GB⁩ للتعليمات، و⁨Qwen3 7B⁩ يغطي ⁨JA/ZH/EN⁩ — جميعها تعمل محلياً عبر ⁨Ollama⁩ بتكميم ⁨Q4⁩_⁨K⁩_⁨M⁩.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'CyberAgent CALM3-22B', 'Qwen3 7B', 'Phi-4'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون والمستخدمون الذين يشغّلون النماذج اللغوية الكبيرة باللغة اليابانية محلياً',
    parentArticle: '/ar/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-ollama-models-cpu-only', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل النماذج اللغوية الكبيرة المحلية لدعم اللغة اليابانية؟',
        answer: 'أفضل نموذج لغوي كبير محلي باللغة اليابانية يعتمد على مهمتك. للمحادثة: Rinna 3.6B (يعمل بـ4 جيجابايت RAM). لاتباع التعليمات: ELYZA-7B. للبرمجة باليابانية: Qwen3-Coder. جميعها تعمل عبر Ollama.',
        bullets: [
          'Rinna 3.6B — أصيل في اليابانية، 4 جيجابايت RAM كحد أدنى، المحادثة اليومية',
          'ELYZA-7B — اتباع التعليمات والأسئلة والأجوبة، 6 جيجابايت RAM',
          'Qwen3 7B — متعدد اللغات JA/ZH/EN والبرمجة، 6 جيجابايت RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B هو أخف نموذج أصيل في اليابانية — يعمل بـ4 جيجابايت RAM عبر Ollama بدون ضبط دقيق',
          'ELYZA-7B (ضبط دقيق لـ Llama) يتصدر في اتباع التعليمات باليابانية؛ استخدمه للأسئلة والأجوبة وأتمتة المهام',
          'Qwen3 7B هو أفضل خيار متعدد اللغات: يابانية قوية إلى جانب الصينية والإنجليزية، مع دعم للبرمجة',
          'تُنتج التضمينات اليابانية ~20–30% رموزاً فعّالة/ثانية أقل من الإنجليزية بسبب عبء الكانجي/الكانا — ضعها في الاعتبار في توقعات الكمون',
          'Q4_K_M هو الحد الأدنى الموصى به للتكميم في اليابانية؛ Q3 وما دونه يُظهر تدهوراً ملحوظاً في الجودة',
        ],
      },
      body1: {
        title: 'جدول مقارنة النماذج اليابانية',
        content: [
          '<strong>اعتباراً من مايو 2026، تبرز خمسة نماذج لغوية كبيرة محلية للمهام اليابانية: Rinna 3.6B وELYZA-7B وCyberAgent CALM3-22B وQwen3 7B وPhi-4.</strong> كل منها يغطي نيشاً مختلفاً من الأجهزة وحالات الاستخدام. يوفر الجدول نقاط القرار الرئيسية.',
          'اختصار القرار: استخدم Rinna 3.6B إذا كان لديك 4 جيجابايت RAM فقط وتحتاج محادثة يابانية أصيلة. استخدم ELYZA-7B لاتباع التعليمات المنظّم في أجهزة بـ6 جيجابايت. استخدم Qwen3 7B عندما تحتاج إخراجاً متعدد اللغات باليابانية والصينية والإنجليزية في نموذج واحد.',
        ],
        columns: ['النموذج', 'الحجم / الحد الأدنى من RAM', 'الأفضل لـ'],
        rows: [
          { 'النموذج': 'Rinna 3.6B', 'الحجم / الحد الأدنى من RAM': '3.6B / 4 جيجابايت RAM', 'الأفضل لـ': 'المحادثة اليومية باليابانية' },
          { 'النموذج': 'ELYZA-7B', 'الحجم / الحد الأدنى من RAM': '7B / 6 جيجابايت RAM', 'الأفضل لـ': 'اتباع التعليمات، الأسئلة والأجوبة' },
          { 'النموذج': 'CyberAgent CALM3-22B', 'الحجم / الحد الأدنى من RAM': '22B / 16 جيجابايت RAM', 'الأفضل لـ': 'وثائق الأعمال اليابانية' },
          { 'النموذج': 'Qwen3 7B', 'الحجم / الحد الأدنى من RAM': '7B / 6 جيجابايت RAM', 'الأفضل لـ': 'متعدد اللغات JA/ZH/EN، البرمجة' },
          { 'النموذج': 'Phi-4', 'الحجم / الحد الأدنى من RAM': '14B / 10–12 جيجابايت RAM', 'الأفضل لـ': 'الاستدلال + اليابانية (عبر الضبط الدقيق)' },
        ],
      },
      body2: {
        title: 'التوصيات حسب المهمة',
        content: [
          '<strong>كيّف النموذج لمهمتك بدلاً من الاختيار تلقائياً لأكبر نموذج متاح.</strong> تُنتج التضمينات اليابانية ~20–30% رموزاً فعّالة/ثانية أقل مقارنةً بالنص الإنجليزي — الكانجي والهيراغانا والكاتاكانا تشغل خانات رموز منفصلة. نموذج يُقيَّم بـ20 رمز/ثانية في الإنجليزية يُنتج نحو 14–16 رمز/ثانية فعّالاً باليابانية.',
          'خريطة المهام والنماذج: <strong>محادثة يومية</strong> → Rinna 3.6B (الأخف، أصيل في اليابانية، لا يتطلب ضبطاً دقيقاً). <strong>وثائق أعمال والكتابة الرسمية</strong> → ELYZA-7B أو CyberAgent CALM3-22B (CALM3 هو الأقوى عند توفر 16 جيجابايت RAM). <strong>مساعدة البرمجة باليابانية</strong> → Qwen3-Coder (نموذج برمجة متعدد اللغات مع دعم جيد للتعليقات والوثائق اليابانية). <strong>الترجمة بين اليابانية والإنجليزية والصينية</strong> → Qwen3 7B (نموذج واحد للغات الثلاث بدون تبديل النموذج).',
          'التكميم يُهمّ أكثر لليابانية مما يُهمّ للإنجليزية. Q4_K_M هو الحد الأدنى الموصى به — الاختبارات تُظهر تدهوراً ضئيلاً في الجودة. Q3_K_M يُنتج انخفاضاً ~5–10% في جودة الإخراج باليابانية. لا يُنصح بتكميم Q2 للاستخدام باليابانية. جميع النماذج في هذه المقارنة متاحة بتكميم Q4_K_M عبر Ollama أو LM Studio.',
          'للتطبيقات التي تشغّل هذه النماذج على Android في اليابان، راجع <a href="/ar/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">دليل تطبيقات LLM على Android لليابان</a>. لتوصيات معالج الرسومات لتشغيل نماذج 7B+ باليابانية في اليابان، راجع <a href="/ar/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">دليل أسعار معالجات الرسومات في اليابان</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول النماذج اللغوية الكبيرة المحلية باللغة اليابانية',
        faqs: [
          {
            q: 'هل تدعم Llama وMistral اللغة اليابانية؟',
            a: 'دعم محدود فقط. تتضمن Llama 3.3 8B بعض بيانات التدريب باليابانية لكن أداؤها أضعف بـ30–40% من النماذج المتخصصة في اليابانية في الاختبارات المعيارية. Mistral Small لديها بيانات تدريب يابانية ضئيلة وغير موصى بها للمهام اليابانية. استخدم ELYZA-7B (ضبط دقيق لـ Llama) أو Rinna 3.6B للإخراج الموثوق باليابانية.',
          },
          {
            q: 'هل يُضرّ التكميم بالجودة في اليابانية؟',
            a: 'Q4_K_M له تدهور ضئيل وهو الحد الأدنى الموصى به لليابانية. Q3_K_M يُظهر انخفاضاً ~5–10% في جودة النص الياباني — ملحوظ في الردود الطويلة والكتابة الرسمية. تجنّب Q2 كلياً للاستخدام باليابانية. Q8_0 يوفر أفضل جودة عند توفر VRAM.',
          },
          {
            q: 'هل يعمل نموذج ياباني على MacBook بـ8 جيجابايت؟',
            a: 'نعم. يعمل Rinna 3.6B Q4 وELYZA-7B Q4_K_M كلاهما على MacBook بـ8 جيجابايت ذاكرة موحدة عبر Ollama. يعامل Apple Silicon RAM النظام كذاكرة موحدة، لذا تتوفر الـ8 جيجابايت كاملة للنموذج. توقّع ~8–12 رمز/ثانية على أجهزة M1/M2 بهذه الأحجام.',
          },
          {
            q: 'كيف أُشغّل نموذجاً يابانياً في Ollama؟',
            a: 'شغّل <code>ollama run rinna</code> أو <code>ollama run elyza</code> في terminal. يُنزّل Ollama النموذج تلقائياً في أول تشغيل. راجع مكتبة نماذج Ollama على ollama.com/library لأحدث الإصدارات المتاحة وخيارات التكميم.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    title: 'Quais modelos LLM locais têm melhor suporte ao japonês?',
    seoTitle: 'Melhores LLMs locais em japonês 2026 | PromptQuorum',
    metaDescription: 'Rinna 3.6B (4 GB), ELYZA-7B (6 GB), Qwen3 7B (multilíngue JA/ZH/EN), Phi-4 (10–12 GB): quatro LLMs locais para tarefas em japonês, todos via Ollama em 2026.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'CyberAgent CALM3-22B', 'Qwen3 7B', 'Phi-4'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e usuários executando LLMs em japonês localmente',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-ollama-models-cpu-only', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Which local LLM models support Japanese best?', answer: 'Depends on task: Rinna 3.6B for conversation, ELYZA-7B for instruction following, Qwen3-Coder for coding.', bullets: ['Rinna 3.6B: 4 GB RAM', 'ELYZA-7B: 6 GB RAM', 'Qwen3 7B: multilingual'], updatedDate: '2026-05' },
      de: { question: 'Beste lokale LLMs für Japanisch?', answer: 'Rinna 3.6B für Konversation, ELYZA-7B für Instruktionen.', bullets: ['Rinna 3.6B: ab 4 GB RAM', 'ELYZA-7B: 6 GB RAM'], updatedDate: '2026-05' },
      fr: { question: 'Meilleurs LLM locaux pour le japonais ?', answer: 'Rinna 3.6B pour la conversation, ELYZA-7B pour les instructions.', bullets: ['Rinna 3.6B: 4 Go RAM', 'ELYZA-7B: 6 Go RAM'], updatedDate: '2026-05' },
      ja: { question: '日本語対応ローカルLLMは？', answer: '会話はRinna 3.6B、指示追従はELYZA-7B。', bullets: ['Rinna 3.6B: 4 GB RAM', 'ELYZA-7B: 6 GB RAM'], updatedDate: '2026-05' },
      zh: { question: '日语本地LLM推荐？', answer: '对话用Rinna 3.6B，指令跟随用ELYZA-7B。', bullets: ['Rinna 3.6B: 4 GB内存', 'ELYZA-7B: 6 GB内存'], updatedDate: '2026-05' },
      es: {
        question: '¿Qué modelos LLM locales admiten mejor el japonés?',
        answer: 'El mejor LLM local en japonés depende de tu tarea. Para conversación: Rinna 3.6B (funciona con 4 GB RAM). Para seguimiento de instrucciones: ELYZA-7B. Para programación con japonés: Qwen3-Coder. Todos corren vía Ollama.',
        bullets: [
          'Rinna 3.6B — nativo en japonés, 4 GB RAM mínimo, conversación cotidiana',
          'ELYZA-7B — seguimiento de instrucciones y Q&A, 6 GB RAM',
          'Qwen3 7B — multilingüe JA/ZH/EN y programación, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      pt: {
        question: 'Quais modelos LLM locais têm melhor suporte ao japonês?',
        answer: 'O melhor LLM local em japonês depende da sua tarefa. Para conversação: Rinna 3.6B (funciona com 4 GB de RAM). Para seguimento de instruções: ELYZA-7B. Para programação com japonês: Qwen3-Coder. Todos rodam via Ollama.',
        bullets: [
          'Rinna 3.6B — nativo em japonês, 4 GB RAM mínimo, conversação cotidiana',
          'ELYZA-7B — seguimento de instruções e Q&A, 6 GB RAM',
          'Qwen3 7B — multilíngue JA/ZH/EN e programação, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B é o modelo nativo em japonês mais leve — funciona com 4 GB de RAM via Ollama sem fine-tuning',
          'ELYZA-7B (fine-tune do Llama) lidera no seguimento de instruções em japonês; use para Q&A e automação de tarefas',
          'Qwen3 7B é a melhor opção multilíngue: japonês robusto junto com chinês e inglês, mais suporte a programação',
          'A tokenização japonesa produz ~20–30% menos tokens efetivos/segundo do que o inglês devido ao overhead de kanji/kana — considere isso nas expectativas de latência',
          'Q4_K_M é a quantização mínima recomendada para japonês; Q3 e abaixo mostram degradação de qualidade mensurável',
        ],
      },
      body1: {
        title: 'Tabela comparativa de modelos em japonês',
        content: [
          '<strong>Em maio de 2026, cinco LLMs locais se destacam para tarefas em japonês: Rinna 3.6B, ELYZA-7B, CyberAgent CALM3-22B, Qwen3 7B e Phi-4.</strong> Cada um cobre um nicho de hardware e caso de uso diferente. A tabela oferece os pontos de decisão principais.',
          'Atalho de decisão: use Rinna 3.6B se tiver apenas 4 GB de RAM e precisar de conversação nativa em japonês. Use ELYZA-7B para seguimento estruturado de instruções em hardware de 6 GB. Use Qwen3 7B quando precisar de saída multilíngue em japonês, chinês e inglês em um único modelo.',
        ],
        columns: ['Modelo', 'Tamanho / RAM mínima', 'Melhor para'],
        rows: [
          { 'Modelo': 'Rinna 3.6B', 'Tamanho / RAM mínima': '3.6B / 4 GB RAM', 'Melhor para': 'Conversação cotidiana em japonês' },
          { 'Modelo': 'ELYZA-7B', 'Tamanho / RAM mínima': '7B / 6 GB RAM', 'Melhor para': 'Seguimento de instruções, Q&A' },
          { 'Modelo': 'CyberAgent CALM3-22B', 'Tamanho / RAM mínima': '22B / 16 GB RAM', 'Melhor para': 'Documentos de negócio em japonês' },
          { 'Modelo': 'Qwen3 7B', 'Tamanho / RAM mínima': '7B / 6 GB RAM', 'Melhor para': 'Multilíngue JA/ZH/EN, programação' },
          { 'Modelo': 'Phi-4', 'Tamanho / RAM mínima': '14B / 10–12 GB RAM', 'Melhor para': 'Raciocínio + japonês (via fine-tune)' },
        ],
      },
      body2: {
        title: 'Recomendações por tarefa',
        content: [
          '<strong>Adapte o modelo à sua tarefa em vez de escolher por padrão o maior disponível.</strong> A tokenização japonesa produz ~20–30% menos tokens efetivos por segundo em comparação com texto em inglês — kanji, hiragana e katakana ocupam slots de tokens separados. Um modelo avaliado a 20 tok/s em inglês entrega aproximadamente 14–16 tok/s efetivos em japonês.',
          'Mapeamento tarefa-modelo: <strong>Chat cotidiano</strong> → Rinna 3.6B (o mais leve, nativo em japonês, sem fine-tuning necessário). <strong>Documentos de negócio e escrita formal</strong> → ELYZA-7B ou CyberAgent CALM3-22B (CALM3 é a opção mais forte quando há 16 GB de RAM disponível). <strong>Assistência de programação em japonês</strong> → Qwen3-Coder (modelo de código multilíngue com bom suporte a comentários e documentação em japonês). <strong>Tradução entre japonês, inglês e chinês</strong> → Qwen3 7B (um único modelo para os três idiomas sem trocar de modelo).',
          'A quantização importa mais para japonês do que para inglês. Q4_K_M é o mínimo recomendado — os testes mostram degradação mínima de qualidade. Q3_K_M produz uma redução de ~5–10% na qualidade de saída em japonês. A quantização Q2 não é recomendada para uso em japonês. Todos os modelos desta comparação estão disponíveis em Q4_K_M via Ollama ou LM Studio.',
          'Para apps que executem esses modelos no Android no Japão, consulte o <a href="/pt/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">guia de apps LLM Android para o Japão</a>. Para recomendações de GPU para executar modelos 7B+ em japonês no Japão, consulte o <a href="/pt/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guia de preços de GPUs no Japão</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs locais em japonês',
        faqs: [
          {
            q: 'Llama e Mistral suportam japonês?',
            a: 'Apenas suporte básico. Llama 3.3 8B inclui alguns dados de treinamento em japonês, mas tem desempenho 30–40% pior do que modelos específicos de japonês em benchmarks de japonês. Mistral Small tem dados de treinamento mínimos em japonês e não é recomendado para tarefas em japonês. Use ELYZA-7B (fine-tune do Llama) ou Rinna 3.6B para saída confiável em japonês.',
          },
          {
            q: 'A quantização prejudica a qualidade em japonês?',
            a: 'Q4_K_M tem degradação mínima e é o mínimo recomendado para japonês. Q3_K_M mostra aproximadamente 5–10% de redução de qualidade em texto japonês — perceptível em respostas longas e escrita formal. Evite completamente Q2 para uso em japonês. Q8_0 fornece a melhor qualidade quando há VRAM disponível.',
          },
          {
            q: 'Um modelo em japonês funciona em um MacBook de 8 GB?',
            a: 'Sim. Rinna 3.6B Q4 e ELYZA-7B Q4_K_M funcionam ambos em um MacBook com 8 GB de memória unificada via Ollama. O Apple Silicon trata a RAM do sistema como memória unificada, então os 8 GB completos ficam disponíveis para o modelo. Espere ~8–12 tok/s em hardware M1/M2 com esses tamanhos.',
          },
          {
            q: 'Como inicio um modelo em japonês no Ollama?',
            a: 'Execute <code>ollama run rinna</code> ou <code>ollama run elyza</code> em um terminal. O Ollama baixa o modelo automaticamente na primeira execução. Consulte a biblioteca de modelos do Ollama em ollama.com/library para as últimas variantes disponíveis e opções de quantização.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: '일본어를 가장 잘 지원하는 로컬 LLM 모델은 무엇입니까?',
    seoTitle: '최고의 일본어 로컬 LLM 2026 | PromptQuorum',
    metaDescription: 'Rinna 3.6B (4 GB), ELYZA-7B (6 GB), Qwen3 7B (다국어 JA/ZH/EN), Phi-4 (10–12 GB): 2026년 Ollama를 통해 실행하는 일본어 작업용 로컬 LLM 4종 비교.',
    publishDate: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: ['Rinna 3.6B', 'ELYZA-7B', 'CyberAgent CALM3-22B', 'Qwen3 7B', 'Phi-4'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬에서 일본어 LLM을 실행하는 개발자 및 사용자',
    parentArticle: '/local-llms/best-local-llms-for-coding',
    siblingBites: ['best-ollama-models-cpu-only', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '일본어를 가장 잘 지원하는 로컬 LLM 모델은 무엇입니까?',
        answer: '일본어에 최적화된 로컬 LLM은 사용 목적에 따라 다릅니다. 대화에는 Rinna 3.6B(4 GB RAM에서 실행 가능), 명령어 수행에는 ELYZA-7B, 일본어 코딩에는 Qwen3-Coder를 권장합니다. 모두 Ollama를 통해 실행됩니다.',
        bullets: [
          'Rinna 3.6B — 일본어 네이티브 모델, 최소 4 GB RAM, 일상 대화에 적합',
          'ELYZA-7B — 명령어 수행 및 Q&A, 6 GB RAM 필요',
          'Qwen3 7B — JA/ZH/EN 다국어 지원 및 코딩, 6 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Rinna 3.6B는 가장 가벼운 일본어 네이티브 모델입니다 — 파인튜닝 없이 Ollama를 통해 4 GB RAM으로 실행됩니다',
          'ELYZA-7B(Llama 파인튜닝)는 일본어 명령어 수행에서 최고 성능을 발휘합니다; Q&A 및 작업 자동화에 활용하십시오',
          'Qwen3 7B는 최고의 다국어 선택입니다: 일본어와 함께 중국어, 영어를 지원하며 코딩 기능도 포함합니다',
          '일본어 토크나이제이션은 한자/가나 처리 오버헤드로 인해 영어 대비 유효 토큰/초가 약 20–30% 낮습니다 — 지연 시간 예상치 설정 시 이를 고려하십시오',
          'Q4_K_M은 일본어 사용 시 권장되는 최소 양자화 수준입니다; Q3 이하는 측정 가능한 품질 저하를 보입니다',
        ],
      },
      body1: {
        title: '일본어 모델 비교표',
        content: [
          '<strong>2026년 5월 기준, 일본어 작업에 특화된 로컬 LLM 5종이 주목받고 있습니다: Rinna 3.6B, ELYZA-7B, CyberAgent CALM3-22B, Qwen3 7B, Phi-4입니다.</strong> 각 모델은 하드웨어 요구사항과 사용 사례가 다릅니다. 아래 표에서 핵심 결정 기준을 확인하십시오.',
          '선택 기준 요약: RAM이 4 GB뿐이고 일본어 네이티브 대화가 필요하다면 Rinna 3.6B를 사용하십시오. 6 GB 하드웨어에서 구조화된 명령어 수행이 필요하다면 ELYZA-7B를 선택하십시오. 단일 모델로 일본어, 중국어, 영어 다국어 출력이 필요하다면 Qwen3 7B를 사용하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 일본어 로컬 LLM 최적 선택은 대화에 Rinna 3.6B, 명령어 수행에 ELYZA-7B, 다국어 작업에 Qwen3 7B입니다.',
          },
          {
            type: 'plain-terms',
            text: '로컬 LLM은 인터넷 연결 없이 자신의 컴퓨터에서 실행되는 AI 언어 모델입니다 — 데이터가 외부로 전송되지 않아 개인 정보 보호에 유리합니다.',
          },
        ],
        columns: ['모델', '크기 / 최소 RAM', '최적 용도'],
        rows: [
          { '모델': 'Rinna 3.6B', '크기 / 최소 RAM': '3.6B / 4 GB RAM', '최적 용도': '일본어 일상 대화' },
          { '모델': 'ELYZA-7B', '크기 / 최소 RAM': '7B / 6 GB RAM', '최적 용도': '명령어 수행, Q&A' },
          { '모델': 'CyberAgent CALM3-22B', '크기 / 최소 RAM': '22B / 16 GB RAM', '최적 용도': '일본어 비즈니스 문서' },
          { '모델': 'Qwen3 7B', '크기 / 최소 RAM': '7B / 6 GB RAM', '최적 용도': '다국어 JA/ZH/EN, 코딩' },
          { '모델': 'Phi-4', '크기 / 최소 RAM': '14B / 10–12 GB RAM', '최적 용도': '추론 + 일본어 (파인튜닝 활용)' },
        ],
      },
      body2: {
        title: '작업별 모델 추천',
        content: [
          '<strong>가장 큰 모델을 기본으로 선택하는 대신, 작업에 맞는 모델을 선택하십시오.</strong> 일본어 토크나이제이션은 영어 텍스트 대비 유효 토큰/초가 약 20–30% 낮습니다 — 한자, 히라가나, 가타카나가 각각 별도의 토큰 슬롯을 차지하기 때문입니다. 영어 기준 20 tok/s로 평가된 모델은 일본어에서 약 14–16 tok/s의 실효 처리 속도를 보입니다.',
          '작업-모델 매핑: <strong>일상 대화</strong> → Rinna 3.6B(가장 가볍고 일본어 네이티브, 파인튜닝 불필요). <strong>비즈니스 문서 및 공식 작성</strong> → ELYZA-7B 또는 CyberAgent CALM3-22B(16 GB RAM이 있을 경우 CALM3이 가장 강력한 선택). <strong>일본어 코딩 지원</strong> → Qwen3-Coder(일본어 주석과 문서를 잘 지원하는 다국어 코드 모델). <strong>일본어, 영어, 중국어 간 번역</strong> → Qwen3 7B(모델 전환 없이 세 언어를 단일 모델로 처리).',
          '일본어에서는 영어보다 양자화가 품질에 더 큰 영향을 미칩니다. Q4_K_M이 권장 최소 수준입니다 — 테스트 결과 품질 저하가 최소화되었습니다. Q3_K_M은 일본어 출력 품질이 약 5–10% 감소합니다. Q2 양자화는 일본어 사용에 권장하지 않습니다. 이 비교에 포함된 모든 모델은 Ollama 또는 LM Studio를 통해 Q4_K_M으로 제공됩니다.',
          '일본에서 Android에 이 모델들을 실행하는 앱에 대해서는 <a href="/ko/prompt-bites/best-local-llm-apps-japan-android" class="text-primary hover:underline">일본 Android용 LLM 앱 가이드</a>를 참조하십시오. 일본에서 7B+ 모델을 일본어로 실행하기 위한 GPU 추천은 <a href="/ko/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">일본 GPU 가격 가이드</a>를 확인하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '일본어 로컬 LLM에 관한 자주 묻는 질문',
        faqs: [
          {
            q: 'Llama와 Mistral은 일본어를 지원합니까?',
            a: '기본적인 지원만 가능합니다. Llama 3.3 8B는 일부 일본어 학습 데이터를 포함하지만, 일본어 벤치마크에서 일본어 특화 모델보다 30–40% 낮은 성능을 보입니다. Mistral Small은 일본어 학습 데이터가 매우 적으며 일본어 작업에는 권장하지 않습니다. 안정적인 일본어 출력을 위해서는 ELYZA-7B(Llama 파인튜닝) 또는 Rinna 3.6B를 사용하십시오.',
          },
          {
            q: '양자화가 일본어 품질에 영향을 미칩니까?',
            a: 'Q4_K_M은 품질 저하가 최소화되어 일본어 사용 시 권장되는 최소 수준입니다. Q3_K_M은 일본어 텍스트 품질이 약 5–10% 감소합니다 — 긴 응답과 공식 문서 작성에서 눈에 띄게 나타납니다. 일본어 사용 시 Q2는 완전히 피하십시오. VRAM이 충분하다면 Q8_0이 최고의 품질을 제공합니다.',
          },
          {
            q: '8 GB MacBook에서 일본어 모델이 작동합니까?',
            a: '예. Rinna 3.6B Q4와 ELYZA-7B Q4_K_M 모두 Ollama를 통해 8 GB 통합 메모리를 갖춘 MacBook에서 실행됩니다. Apple Silicon은 시스템 RAM을 통합 메모리로 처리하므로 8 GB 전체가 모델에 사용됩니다. M1/M2 하드웨어에서 이 크기의 모델은 약 8–12 tok/s를 기대할 수 있습니다.',
          },
          {
            q: 'Ollama에서 일본어 모델을 시작하는 방법은 무엇입니까?',
            a: '터미널에서 <code>ollama run rinna</code> 또는 <code>ollama run elyza</code>를 실행하십시오. Ollama는 첫 실행 시 모델을 자동으로 다운로드합니다. 최신 모델 변형 및 양자화 옵션은 ollama.com/library의 Ollama 모델 라이브러리를 참조하십시오.',
          },
        ],
      },
      relatedReading: {
        heading: '관련 콘텐츠',
        items: [
          '[CPU 전용 최고의 Ollama 모델](/ko/prompt-bites/best-ollama-models-cpu-only)',
          '[Ollama에서 Qwen3 실행 가능 여부](/ko/prompt-bites/can-you-run-qwen3-on-ollama)',
          '[코딩용 최고의 로컬 LLM](/ko/local-llms/best-local-llms-for-coding)',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Llama와 Mistral은 일본어를 지원합니까?',
          acceptedAnswer: { '@type': 'Answer', text: '기본적인 지원만 가능합니다. Llama 3.3 8B는 일본어 벤치마크에서 일본어 특화 모델보다 30–40% 낮은 성능을 보입니다. ELYZA-7B 또는 Rinna 3.6B를 사용하십시오.' },
        },
        {
          '@type': 'Question',
          name: '양자화가 일본어 품질에 영향을 미칩니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'Q4_K_M은 품질 저하가 최소화되어 일본어 사용 시 권장되는 최소 수준입니다. Q3_K_M은 품질이 약 5–10% 감소하며, Q2는 일본어 사용에 권장하지 않습니다.' },
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: '프롬프트 바이트', item: 'https://www.promptquorum.com/ko/prompt-bites' },
        { '@type': 'ListItem', position: 3, name: '일본어를 가장 잘 지원하는 로친 LLM 모델은 무엇입니까?', item: 'https://www.promptquorum.com/ko/prompt-bites/best-japanese-language-models-local' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '일본어를 가장 잘 지원하는 로친 LLM 모델은 무엇입니까?', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-27', url: 'https://www.promptquorum.com/ko/prompt-bites/best-japanese-language-models-local', inLanguage: 'ko' },
  },
}
