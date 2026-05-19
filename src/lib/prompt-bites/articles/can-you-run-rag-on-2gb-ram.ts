import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    title: 'Can You Run RAG on 2 GB RAM?',
    seoTitle: 'Can You Run RAG on 2 GB RAM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Full RAG requires 8+ GB RAM. With 2 GB RAM, only tiny models (Phi-2, TinyLlama) work for the LLM part. The embedding model adds another 0.5–1 GB.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Phi-2', 'TinyLlama'],
    current_hardware_mentioned: [],
    educationalLevel: 'Beginner',
    audience: 'Developers asking whether RAG is feasible on very low-memory systems',
    parentArticle: '/local-llms/local-rag-2026',
    siblingBites: ['best-local-llm-16gb-ram-laptop'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run RAG on 2 GB RAM?',
        answer: 'A full RAG pipeline requires at least 8 GB RAM. With only 2 GB, you can run a tiny LLM like TinyLlama or Phi-2 (both need ~1.5 GB), but the embedding model adds another 0.5–1 GB, leaving almost no room for the vector store or context. Results will be limited.',
        bullets: [
          '2 GB RAM: only tiny models (TinyLlama, Phi-2) — poor RAG quality',
          'Minimum for decent RAG: 8 GB RAM (7B LLM + embeddings + vector store)',
          'Alternative: run embeddings remotely, only the LLM locally',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Kann man RAG mit 2 GB RAM betreiben?',
        answer: 'Eine vollständige RAG-Pipeline benötigt mindestens 8 GB RAM. Mit nur 2 GB können Sie ein kleines LLM wie TinyLlama oder Phi-2 ausführen (beide benötigen ~1,5 GB), aber das Embedding-Modell benötigt weitere 0,5–1 GB und lässt kaum Platz für den Vektor-Speicher oder den Kontext. Die Ergebnisse werden begrenzt sein.',
        bullets: [
          '2 GB RAM: nur kleine Modelle (TinyLlama, Phi-2) — schlechte RAG-Qualität',
          'Minimum für brauchbares RAG: 8 GB RAM (7B LLM + Embeddings + Vektor-Speicher)',
          'Alternative: Embeddings remote ausführen, nur das LLM lokal',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Peut-on exécuter RAG avec 2 Go de RAM ?',
        answer: 'Un pipeline RAG complet nécessite au moins 8 Go de RAM. Avec seulement 2 Go, vous pouvez exécuter un petit LLM comme TinyLlama ou Phi-2 (tous deux nécessitent ~1,5 Go), mais le modèle d\'embedding ajoute 0,5 à 1 Go supplémentaire, ne laissant presque aucune place pour le vector store ou le contexte. Les résultats seront limités.',
        bullets: [
          '2 Go de RAM : seulement les petits modèles (TinyLlama, Phi-2) — qualité RAG médiocre',
          'Minimum pour un RAG correct : 8 Go de RAM (LLM 7B + embeddings + vector store)',
          'Alternative : exécuter les embeddings à distance, uniquement le LLM en local',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '2 GB RAMでRAGを実行できますか？',
        answer: '完全なRAGパイプラインには最低8 GB RAMが必要です。2 GBのみでは、TinyLlamaやPhi-2のような小さなLLM（どちらも約1.5 GBが必要）を実行できますが、埋め込みモデルがさらに0.5〜1 GBを追加し、ベクターストアやコンテキストのための余裕がほとんどありません。結果は限定的になります。',
        bullets: [
          '2 GB RAM：小型モデルのみ（TinyLlama、Phi-2）— RAG品質は低い',
          '実用的なRAGの最低限：8 GB RAM（7B LLM + Embeddings + ベクターストア）',
          '代替案：Embeddingsをリモートで実行、LLMのみローカルで',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '2 GB 内存能运行 RAG 吗？',
        answer: '完整的 RAG 管道需要至少 8 GB 内存。仅有 2 GB 时，您可以运行 TinyLlama 或 Phi-2 等小型 LLM（均需约 1.5 GB），但嵌入模型还需额外 0.5-1 GB，几乎没有空间留给向量数据库或上下文。结果会非常有限。',
        bullets: [
          '2 GB 内存：只能运行小型模型（TinyLlama、Phi-2）——RAG 质量差',
          '实用 RAG 的最低要求：8 GB 内存（7B LLM + Embeddings + 向量数据库）',
          '替代方案：远程运行 Embeddings，仅在本地运行 LLM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'Yes — But Only Tiny Setups Work',
        content: [
          'At 2 GB RAM, the only viable RAG pipeline uses a 1B-class LLM (Llama 3.2 1B or Phi-3 Mini) with a lightweight embedding model (MiniLM-L6-v2 at ~80 MB) and a flat-file or in-memory vector store. As of May 2026, this works — but only for small personal document sets (under ~200 pages).',
          'The table below shows the RAM footprint of each RAG component at minimum viable settings.',
        ],
        columns: ['Component', 'Memory Use', 'Notes'],
        rows: [
          { 'Component': 'LLM (Llama 3.2 1B Q4_K_M)', 'Memory Use': '~750 MB', 'Notes': 'Smallest usable instruction-tuned model' },
          { 'Component': 'Embedding model (MiniLM-L6-v2)', 'Memory Use': '~80 MB', 'Notes': 'Runs on CPU; no GPU required' },
          { 'Component': 'Vector store (Chroma in-memory)', 'Memory Use': '~150 MB', 'Notes': 'Scales with corpus size' },
          { 'Component': 'Python runtime + framework overhead', 'Memory Use': '~300 MB', 'Notes': 'LangChain or bare llama-index' },
          { 'Component': 'Total minimum', 'Memory Use': '~1.3–1.5 GB', 'Notes': 'Leaves ~500 MB for OS on a 2 GB device' },
        ],
        content2: [
          'This configuration fits a Raspberry Pi 4 (2 GB variant) or any low-power device with 2 GB RAM. Retrieval quality is limited by MiniLM-L6\'s 384-dim embeddings, which are effective for short-passage matching but degrade on multi-page documents.',
        ],
      },
      body2: {
        title: 'What Breaks at 2 GB',
        content: [
          '<strong>The most common failure is the LLM exceeding available RAM during context window expansion.</strong> At 2 GB, a 1B model context is capped at roughly 2k tokens before the OS starts swapping. Loading a 7B or larger model fails immediately — Llama 3 8B Q4_K_M requires ~5 GB alone.',
          'The second failure mode is vector store growth. A Chroma database for 500 PDF pages uses approximately 400–600 MB depending on chunk size. Combined with the LLM and embedding model, total RAM exceeds 2 GB. The fix: limit ingestion to under 150 pages, use 256-token chunks, and prune the store after each session.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About RAG on 2 GB RAM',
        faqs: [
          {
            q: 'What\'s the smallest LLM that works for RAG?',
            a: 'Llama 3.2 1B Q4_K_M (~750 MB) is the smallest instruction-tuned model that produces coherent answers for retrieval-augmented tasks. Phi-3 Mini (3.8B) is a better choice if you have 3–4 GB available — its 4k context handles longer retrieved passages. Below 1B parameters, output quality degrades sharply for RAG-style question answering.',
          },
          {
            q: 'Can I use Ollama on 2 GB RAM?',
            a: 'Ollama\'s minimum recommended RAM is 8 GB. On 2 GB, Ollama itself loads but model serving fails or swaps heavily. For 2 GB devices, use llama.cpp directly via CLI or the llama-cpp-python bindings — these have a smaller resident memory footprint than the Ollama server process.',
          },
          {
            q: 'Will Raspberry Pi 5 (8 GB) run proper RAG?',
            a: 'Yes. A Raspberry Pi 5 with 8 GB RAM runs Llama 3 8B Q4_K_M (~5 GB) alongside a full embedding + vector store stack with room to spare. Speed is ~1–2 tok/s on the Pi 5 CPU — slow but functional for offline personal search use cases. See the <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">best Ollama models for CPU-only inference</a> for speed benchmarks.',
          },
          {
            q: 'Is local RAG worth doing on 2 GB RAM?',
            a: 'For small personal document sets (notes, a few PDFs), yes — the 1B + MiniLM pipeline is genuinely useful. For anything requiring precise retrieval over large corpora or complex multi-hop reasoning, 2 GB RAM is a hard constraint. Upgrade to at least 8 GB before expecting production-grade RAG quality.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quick Answers',
    title: 'Kann man RAG mit 2 GB RAM betreiben?',
    seoTitle: 'RAG mit 2 GB RAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Vollständiges RAG benötigt 8+ GB RAM. Mit 2 GB RAM funktionieren nur kleine Modelle (Phi-2, TinyLlama). Das Embedding-Modell benötigt weitere 0,5–1 GB.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Kann man RAG mit 2 GB RAM betreiben?',
        answer: 'Eine vollständige RAG-Pipeline benötigt mindestens 8 GB RAM. Mit nur 2 GB können Sie ein kleines LLM wie TinyLlama oder Phi-2 ausführen (beide benötigen ~1,5 GB), aber das Embedding-Modell benötigt weitere 0,5–1 GB und lässt kaum Platz für den Vektor-Speicher oder den Kontext. Die Ergebnisse werden begrenzt sein.',
        bullets: [
          '2 GB RAM: nur kleine Modelle (TinyLlama, Phi-2) — schlechte RAG-Qualität',
          'Minimum für brauchbares RAG: 8 GB RAM (7B LLM + Embeddings + Vektor-Speicher)',
          'Alternative: Embeddings remote ausführen, nur das LLM lokal',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein vollständiger RAG-Stack (LLM + Embeddings + Vektor-Speicher) benötigt mindestens 8 GB RAM; 2 GB reichen nicht für alle drei Komponenten',
          'TinyLlama (1,1B, ~1,5 GB) und Phi-2 (2,7B, ~2,0 GB) sind die einzigen LLMs, die in 2 GB passen, lassen aber keinen Platz für ein Embedding-Modell',
          'Ein praktikabler Workaround: eine Remote-Embeddings-API verwenden (z. B. OpenAI ada-002) und Vektoren lokal speichern, spart ~0,5 GB RAM',
          'Für gute RAG-Qualität läuft auf 8 GB RAM Llama 3 8B + all-MiniLM-Embeddings + ChromaDB problemlos',
        ],
      },
      body1: {
        title: 'Was eine RAG-Pipeline wirklich an RAM benötigt',
        content: [
          '<strong>Eine vollständige RAG-Pipeline hat drei Speicherverbraucher: das LLM (1,5–5 GB je nach Modellgröße), ein Embedding-Modell (~0,5 GB für all-MiniLM) und einen Vektor-Speicher wie ChromaDB (0,1–0,5 GB je nach Indexgröße).</strong> Bei 2 GB Gesamt-RAM können Sie nur eine dieser Komponenten auf einem nützlichen Qualitätsniveau laden.',
          'TinyLlama mit 1,1B Parametern benötigt bei Q4-Quantisierung etwa 1,5 GB, und Phi-2 mit 2,7B etwa 2,0 GB. Beide Modelle lassen kaum Speicher für ein Embedding-Modell — und ohne Embeddings können Sie keine semantische Ähnlichkeitssuche durchführen, die das Kernelement jedes RAG-Systems ist.',
          'Der Versuch, RAG auf 2 GB RAM auszuführen, führt entweder zu Speichermangel-Abstürzen oder extremer Leistungsverschlechterung. Das Betriebssystem selbst verbraucht 0,3–0,6 GB, bevor ein ML-Workload beginnt.',
        ],
        columns: ['Verfügbarer RAM', 'Was passt', 'RAG-Qualität'],
        rows: [
          { 'Verfügbarer RAM': '2 GB', 'Was passt': 'Nur TinyLlama, keine Embeddings', 'RAG-Qualität': 'Schlecht' },
          { 'Verfügbarer RAM': '8 GB', 'Was passt': 'Llama 3 8B + Embeddings + ChromaDB', 'RAG-Qualität': 'Gut' },
          { 'Verfügbarer RAM': '16 GB', 'Was passt': '13B LLM + vollständiger RAG-Stack', 'RAG-Qualität': 'Ausgezeichnet' },
        ],
      },
      body2: {
        title: 'Der praktische Workaround für Geräte mit wenig RAM',
        content: [
          'Wenn Sie ein speicherarmes Gerät verwenden müssen, ist der effektivste Workaround, den Embedding-Schritt an eine Remote-API auszulagern. Dienste wie OpenAI\'s ada-002 generieren Embeddings per API-Aufruf — Sie senden Text, erhalten einen Vektor und speichern ihn lokal in einem leichtgewichtigen Vektor-Speicher. Dadurch entfallen die ~0,5 GB des lokalen Embedding-Modells.',
          '<strong>Mit Remote-Embeddings kann ein 2-GB-Gerät TinyLlama lokal für die Generierung ausführen und gleichzeitig Cloud-Embeddings für das Retrieval verwenden.</strong> Die Qualität bleibt durch die Reasoning-Fähigkeiten von TinyLlama begrenzt, aber die Pipeline wird technisch funktionsfähig. Beachten Sie, dass Remote-Embeddings API-Kosten verursachen und eine Internetverbindung erfordern.',
          'Einen vollständigen Leitfaden zur Einrichtung eines lokal funktionierenden RAG-Systems finden Sie im <a href="/de/local-llms/local-rag-2026" class="text-primary hover:underline">Leitfaden zur lokalen RAG-Einrichtung</a> mit Informationen zu Mindesthardware und Modellauswahl.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu RAG mit wenig RAM',
        faqs: [
          {
            q: 'Was ist der minimale RAM für ein funktionierendes RAG-System?',
            a: 'Das praktische Minimum sind 8 GB RAM. Damit passt Llama 3 8B bei Q4-Quantisierung (~5 GB), das all-MiniLM-L6-v2-Embedding-Modell (~0,5 GB) und ChromaDB mit einem mittelgroßen Index (~0,2–0,5 GB).',
          },
          {
            q: 'Kann ich ChromaDB mit nur 2 GB RAM verwenden?',
            a: 'ChromaDB selbst ist leichtgewichtig — 0,1–0,3 GB für kleine Indizes. Das Problem ist nicht der Vektor-Speicher; LLM und Embedding-Modell zusammen überschreiten 2 GB und lassen keinen Platz für ChromaDB daneben.',
          },
          {
            q: 'Hilft Q4-Quantisierung, einen RAG-Stack in 2 GB unterzubringen?',
            a: 'Q4-Quantisierung reduziert den LLM-Speicher um etwa das 4-Fache im Vergleich zur vollen Präzision. Trotzdem benötigt ein 7B-Modell bei Q4 noch ~5 GB. Nur 1–2B-Modelle bei Q4 passen unter 2 GB, und diese sind für qualitativ hochwertige RAG-Antworten zu klein.',
          },
          {
            q: 'Welches Embedding-Modell ist für lokales RAG am speichereffizientesten?',
            a: 'all-MiniLM-L6-v2 ist die Standardwahl — es benötigt etwa 0,5 GB RAM und bietet solide semantische Suchqualität. Erwägen Sie bei engerem Speicherbudget eine Remote-Embedding-API, um lokalen RAM zu sparen.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    title: 'Peut-on exécuter RAG avec 2 Go de RAM ?',
    seoTitle: 'RAG avec 2 Go de RAM ? | Prompt Bites | PromptQuorum',
    metaDescription: 'RAG complet nécessite 8+ Go de RAM. Avec 2 Go, seuls les petits modèles (Phi-2, TinyLlama) fonctionnent pour le LLM. Le modèle d\'embedding ajoute 0,5–1 Go.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter RAG avec 2 Go de RAM ?',
        answer: 'Un pipeline RAG complet nécessite au moins 8 Go de RAM. Avec seulement 2 Go, vous pouvez exécuter un petit LLM comme TinyLlama ou Phi-2 (tous deux nécessitent ~1,5 Go), mais le modèle d\'embedding ajoute 0,5 à 1 Go supplémentaire, ne laissant presque aucune place pour le vector store ou le contexte. Les résultats seront limités.',
        bullets: [
          '2 Go de RAM : seulement les petits modèles (TinyLlama, Phi-2) — qualité RAG médiocre',
          'Minimum pour un RAG correct : 8 Go de RAM (LLM 7B + embeddings + vector store)',
          'Alternative : exécuter les embeddings à distance, uniquement le LLM en local',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un stack RAG complet (LLM + embeddings + vector store) nécessite au moins 8 Go de RAM ; 2 Go ne suffisent pas pour les trois composants',
          'TinyLlama (1,1B, ~1,5 Go) et Phi-2 (2,7B, ~2,0 Go) sont les seuls LLMs tenant dans 2 Go, sans laisser de place pour un modèle d\'embedding',
          'Solution pratique : utiliser une API d\'embeddings distante (ex. OpenAI ada-002) et stocker les vecteurs localement, économisant ~0,5 Go de RAM',
          'Pour une bonne qualité RAG, 8 Go de RAM font tourner Llama 3 8B + embeddings all-MiniLM + ChromaDB confortablement',
        ],
      },
      body1: {
        title: 'Ce qu\'un pipeline RAG nécessite réellement en RAM',
        content: [
          '<strong>Un pipeline RAG complet a trois consommateurs de mémoire : le LLM (1,5 à 5 Go selon la taille du modèle), un modèle d\'embedding (~0,5 Go pour all-MiniLM) et un vector store comme ChromaDB (0,1 à 0,5 Go selon la taille de l\'index).</strong> Avec 2 Go de RAM au total, vous ne pouvez charger qu\'un seul de ces composants à un niveau de qualité utile.',
          'TinyLlama à 1,1B de paramètres utilise environ 1,5 Go en quantification Q4, et Phi-2 à 2,7B environ 2,0 Go. Les deux modèles ne laissent presque aucune mémoire pour un modèle d\'embedding — et sans embeddings, vous ne pouvez pas effectuer de recherche par similarité sémantique, qui est le cœur de tout système RAG.',
          'Tenter RAG sur 2 Go de RAM entraîne soit des plantages par manque de mémoire, soit une dégradation extrême des performances. Le système d\'exploitation lui-même consomme 0,3 à 0,6 Go avant le démarrage de toute charge de travail ML.',
        ],
        columns: ['RAM disponible', 'Ce qui tient', 'Qualité RAG'],
        rows: [
          { 'RAM disponible': '2 Go', 'Ce qui tient': 'TinyLlama uniquement, sans embeddings', 'Qualité RAG': 'Médiocre' },
          { 'RAM disponible': '8 Go', 'Ce qui tient': 'Llama 3 8B + embeddings + ChromaDB', 'Qualité RAG': 'Bonne' },
          { 'RAM disponible': '16 Go', 'Ce qui tient': 'LLM 13B + stack RAG complet', 'Qualité RAG': 'Excellente' },
        ],
      },
      body2: {
        title: 'La solution pratique pour les appareils avec peu de RAM',
        content: [
          'Si vous devez utiliser un appareil à faible mémoire, la solution la plus efficace est de déléguer l\'étape d\'embedding à une API distante. Des services comme ada-002 d\'OpenAI génèrent des embeddings via un appel API — vous envoyez du texte, recevez un vecteur et le stockez localement dans un vector store léger. Cela élimine le coût des ~0,5 Go du modèle d\'embedding local.',
          '<strong>Avec des embeddings distants, un appareil de 2 Go peut exécuter TinyLlama localement pour la génération tout en utilisant des embeddings cloud pour la récupération.</strong> La qualité reste limitée par les capacités de raisonnement de TinyLlama, mais le pipeline devient techniquement fonctionnel. Notez que les embeddings distants entraînent des coûts d\'API et nécessitent une connexion internet.',
          'Pour un guide complet sur la configuration d\'un système RAG local efficace, consultez le <a href="/fr/local-llms/local-rag-2026" class="text-primary hover:underline">guide de configuration RAG local</a> couvrant le matériel minimum et la sélection des modèles.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur RAG avec peu de RAM',
        faqs: [
          {
            q: 'Quelle est la RAM minimale pour un système RAG fonctionnel ?',
            a: 'Le minimum pratique est 8 Go de RAM. Cela permet de faire tourner Llama 3 8B en quantification Q4 (~5 Go), le modèle d\'embedding all-MiniLM-L6-v2 (~0,5 Go) et ChromaDB avec un index de taille modérée (~0,2 à 0,5 Go).',
          },
          {
            q: 'Puis-je utiliser ChromaDB avec seulement 2 Go de RAM ?',
            a: 'ChromaDB lui-même est léger — 0,1 à 0,3 Go pour les petits index. Le problème n\'est pas le vector store ; c\'est que le LLM et le modèle d\'embedding ensemble dépassent 2 Go, ne laissant aucune place à ChromaDB.',
          },
          {
            q: 'La quantification Q4 aide-t-elle à faire tenir un stack RAG dans 2 Go ?',
            a: 'La quantification Q4 réduit la mémoire du LLM d\'environ 4× par rapport à la pleine précision. Malgré cela, un modèle 7B en Q4 nécessite encore ~5 Go. Seuls les modèles de 1 à 2B en Q4 tiennent sous 2 Go, et ils sont trop petits pour des réponses RAG de qualité.',
          },
          {
            q: 'Quel modèle d\'embedding est le plus efficace en mémoire pour le RAG local ?',
            a: 'all-MiniLM-L6-v2 est le choix standard — il utilise environ 0,5 Go de RAM et offre une bonne qualité de recherche sémantique. Pour les budgets mémoire plus serrés, envisagez une API d\'embeddings distante pour économiser de la RAM locale.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    title: '2 GB RAMでRAGを実行できますか？',
    seoTitle: '2 GB RAMでRAGを実行できる？ | Prompt Bites | PromptQuorum',
    metaDescription: '完全なRAGには8 GB以上のRAMが必要です。2 GBでは小型モデル（Phi-2、TinyLlama）のみ動作します。埋め込みモデルがさらに0.5-1 GBを追加します。PromptQuorumによる簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: '2 GB RAMでRAGを実行できますか？',
        answer: '完全なRAGパイプラインには最低8 GB RAMが必要です。2 GBのみでは、TinyLlamaやPhi-2のような小さなLLM（どちらも約1.5 GBが必要）を実行できますが、埋め込みモデルがさらに0.5〜1 GBを追加し、ベクターストアやコンテキストのための余裕がほとんどありません。結果は限定的になります。',
        bullets: [
          '2 GB RAM：小型モデルのみ（TinyLlama、Phi-2）— RAG品質は低い',
          '実用的なRAGの最低限：8 GB RAM（7B LLM + Embeddings + ベクターストア）',
          '代替案：Embeddingsをリモートで実行、LLMのみローカルで',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '完全なRAGスタック（LLM + Embeddings + ベクターストア）には最低8 GB RAMが必要；2 GBでは3つのコンポーネントすべてに対応できない',
          'TinyLlama（1.1B、~1.5 GB）とPhi-2（2.7B、~2.0 GB）が2 GBに収まる唯一のLLMだが、埋め込みモデルの余裕はない',
          '実用的な回避策：リモートEmbeddings API（例：OpenAI ada-002）を使用してベクターをローカルに保存し、~0.5 GB RAMを節約する',
          '良好なRAG品質のためには、8 GB RAMでLlama 3 8B + all-MiniLM Embeddings + ChromaDBが快適に動作する',
        ],
      },
      body1: {
        title: 'RAGパイプラインが実際に必要とするRAM',
        content: [
          '<strong>完全なRAGパイプラインには3つのメモリ消費コンポーネントがあります：LLM（モデルサイズにより1.5〜5 GB）、埋め込みモデル（all-MiniLMで~0.5 GB）、ChromaDBなどのベクターストア（インデックスサイズにより0.1〜0.5 GB）。</strong> 合計2 GB RAMでは、これらのコンポーネントのうち1つしか有用な品質レベルでロードできません。',
          'TinyLlamaは1.1Bパラメータで、Q4量子化では約1.5 GBを使用します。Phi-2は2.7Bで約2.0 GBを使用します。どちらのモデルも埋め込みモデルのためのメモリがほとんど残りません — そして埋め込みなしでは、RAGシステムの核心であるセマンティック類似性検索を実行できません。',
          '2 GB RAMでRAGを試みると、メモリ不足のクラッシュか極端なパフォーマンス低下のどちらかが発生します。オペレーティングシステム自体がMLワークロード開始前に0.3〜0.6 GBを消費します。',
        ],
        columns: ['利用可能なRAM', '収まるもの', 'RAG品質'],
        rows: [
          { '利用可能なRAM': '2 GB', '収まるもの': 'TinyLlamaのみ、Embeddingsなし', 'RAG品質': '低品質' },
          { '利用可能なRAM': '8 GB', '収まるもの': 'Llama 3 8B + Embeddings + ChromaDB', 'RAG品質': '良好' },
          { '利用可能なRAM': '16 GB', '収まるもの': '13B LLM + 完全RAGスタック', 'RAG品質': '優秀' },
        ],
      },
      body2: {
        title: '低RAMデバイスの実用的な回避策',
        content: [
          'メモリが少ないデバイスを使用する必要がある場合、最も効果的な回避策はEmbeddingステップをリモートAPIに委任することです。OpenAIのada-002などのサービスはAPIコールを通じてEmbeddingsを生成します — テキストを送信し、ベクターを受け取り、軽量なベクターストアにローカルに保存します。これにより、ローカル埋め込みモデルの~0.5 GBコストがなくなります。',
          '<strong>リモートEmbeddingsを使用することで、2 GBデバイスでは生成にTinyLlamaをローカルで実行しながら、検索にはクラウドEmbeddingsを使用できます。</strong> 品質はTinyLlamaの推論能力によって制限されますが、パイプラインは技術的に機能するようになります。リモートEmbeddingsはAPIコストが発生し、インターネット接続が必要なことに注意してください。',
          '実際に良好に動作するローカルRAGシステムの設定に関する完全なガイドについては、最低ハードウェアとモデル選択をカバーした<a href="/ja/local-llms/local-rag-2026" class="text-primary hover:underline">ローカルRAGセットアップガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '低RAMでのRAGに関するよくある質問',
        faqs: [
          {
            q: '機能するRAGシステムに必要な最低RAMはどのくらいですか？',
            a: '実用的な最低限は8 GB RAMです。これにより、Q4量子化のLlama 3 8B（~5 GB）、all-MiniLM-L6-v2埋め込みモデル（~0.5 GB）、適度なサイズのインデックスのChromaDB（~0.2〜0.5 GB）が収まります。',
          },
          {
            q: '2 GB RAMだけでChromaDBを使用できますか？',
            a: 'ChromaDB自体は軽量です — 小さなインデックスで0.1〜0.3 GB。問題はベクターストアではなく、LLMと埋め込みモデルを合わせると2 GBを超え、ChromaDBの余裕がなくなることです。',
          },
          {
            q: 'Q4量子化はRAGスタックを2 GBに収めるのに役立ちますか？',
            a: 'Q4量子化はLLMのメモリを全精度と比べて約4倍削減します。それでも、Q4の7Bモデルは依然として~5 GBが必要です。Q4で2 GB以下に収まるのは1〜2Bモデルのみであり、それらは品質の高いRAGレスポンスには小さすぎます。',
          },
          {
            q: 'ローカルRAGで最もメモリ効率の良い埋め込みモデルはどれですか？',
            a: 'all-MiniLM-L6-v2が標準的な選択です — 約0.5 GB RAMを使用し、堅実なセマンティック検索品質を提供します。メモリ予算がより厳しい場合は、ローカルRAMを節約するためにリモートEmbeddings APIを検討してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    title: '2 GB 内存能运行 RAG 吗？',
    seoTitle: '2 GB 内存可以运行 RAG 吗？ | Prompt Bites | PromptQuorum',
    metaDescription: '完整 RAG 需要 8+ GB 内存。2 GB 时只有小型模型（Phi-2、TinyLlama）可用于 LLM 部分。嵌入模型还需额外 0.5-1 GB。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '2 GB 内存能运行 RAG 吗？',
        answer: '完整的 RAG 管道需要至少 8 GB 内存。仅有 2 GB 时，您可以运行 TinyLlama 或 Phi-2 等小型 LLM（均需约 1.5 GB），但嵌入模型还需额外 0.5-1 GB，几乎没有空间留给向量数据库或上下文。结果会非常有限。',
        bullets: [
          '2 GB 内存：只能运行小型模型（TinyLlama、Phi-2）——RAG 质量差',
          '实用 RAG 的最低要求：8 GB 内存（7B LLM + Embeddings + 向量数据库）',
          '替代方案：远程运行 Embeddings，仅在本地运行 LLM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '完整的 RAG 技术栈（LLM + Embeddings + 向量数据库）至少需要 8 GB 内存；2 GB 无法同时容纳三个组件',
          'TinyLlama（1.1B，~1.5 GB）和 Phi-2（2.7B，~2.0 GB）是唯一能放入 2 GB 的 LLM，但没有空间放嵌入模型',
          '实用变通方案：使用远程 Embeddings API（如 OpenAI ada-002）并将向量存储在本地，节省约 0.5 GB 内存',
          '获得良好 RAG 质量，8 GB 内存可舒适运行 Llama 3 8B + all-MiniLM Embeddings + ChromaDB',
        ],
      },
      body1: {
        title: 'RAG 管道实际需要多少内存',
        content: [
          '<strong>完整的 RAG 管道有三个内存消耗组件：LLM（根据模型大小需 1.5-5 GB）、嵌入模型（all-MiniLM 约 0.5 GB）和 ChromaDB 等向量数据库（根据索引大小需 0.1-0.5 GB）。</strong> 总内存只有 2 GB 时，您只能将其中一个组件加载到可用的质量级别。',
          'TinyLlama 有 1.1B 参数，Q4 量化下约使用 1.5 GB；Phi-2 有 2.7B，约使用 2.0 GB。两个模型几乎没有为嵌入模型留下内存空间——没有嵌入，您就无法执行语义相似性搜索，而这是任何 RAG 系统的核心。',
          '尝试在 2 GB 内存上运行 RAG 要么导致内存不足崩溃，要么导致极端性能下降。操作系统本身在任何 ML 工作负载启动之前就消耗 0.3-0.6 GB。',
        ],
        columns: ['可用内存', '能放什么', 'RAG 质量'],
        rows: [
          { '可用内存': '2 GB', '能放什么': '仅 TinyLlama，无 Embeddings', 'RAG 质量': '差' },
          { '可用内存': '8 GB', '能放什么': 'Llama 3 8B + Embeddings + ChromaDB', 'RAG 质量': '良好' },
          { '可用内存': '16 GB', '能放什么': '13B LLM + 完整 RAG 技术栈', 'RAG 质量': '优秀' },
        ],
      },
      body2: {
        title: '低内存设备的实用变通方案',
        content: [
          '如果必须使用低内存设备，最有效的变通方案是将嵌入步骤委托给远程 API。OpenAI 的 ada-002 等服务通过 API 调用生成嵌入——您发送文本，获取向量，并将其存储在轻量级本地向量数据库中。这消除了约 0.5 GB 本地嵌入模型的内存开销。',
          '<strong>使用远程 Embeddings，2 GB 设备可以在本地运行 TinyLlama 进行生成，同时使用云端 Embeddings 进行检索。</strong> 质量仍受 TinyLlama 推理能力限制，但管道在技术上变得可用。请注意，远程 Embeddings 会产生 API 费用并需要网络连接。',
          '有关设置真正可用的本地 RAG 系统的完整指南，请参阅涵盖最低硬件和模型选择的<a href="/zh/local-llms/local-rag-2026" class="text-primary hover:underline">本地 RAG 设置指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于低内存 RAG 的快速解答',
        faqs: [
          {
            q: '一个可用的 RAG 系统最低需要多少内存？',
            a: '实际最低要求是 8 GB 内存。这可以运行 Q4 量化的 Llama 3 8B（~5 GB）、all-MiniLM-L6-v2 嵌入模型（~0.5 GB）和中等大小索引的 ChromaDB（~0.2-0.5 GB）。',
          },
          {
            q: '只有 2 GB 内存时能使用 ChromaDB 吗？',
            a: 'ChromaDB 本身很轻量——小索引只需 0.1-0.3 GB。问题不是向量数据库；而是 LLM 和嵌入模型合在一起超过了 2 GB，没有空间再放 ChromaDB。',
          },
          {
            q: 'Q4 量化有助于将 RAG 技术栈压缩到 2 GB 吗？',
            a: 'Q4 量化与全精度相比将 LLM 内存减少约 4 倍。即便如此，Q4 的 7B 模型仍需约 5 GB。只有 Q4 的 1-2B 模型能低于 2 GB，而这些模型太小，无法提供高质量的 RAG 响应。',
          },
          {
            q: '本地 RAG 中内存效率最高的嵌入模型是哪个？',
            a: 'all-MiniLM-L6-v2 是标准选择——约使用 0.5 GB 内存，提供良好的语义搜索质量。对于更紧张的内存预算，考虑使用远程 Embeddings API 以节省本地内存。',
          },
        ],
      },
    },
  },
}
