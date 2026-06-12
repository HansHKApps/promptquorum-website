import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    title: 'Can You Run RAG on 2 GB RAM?',
    seoTitle: 'Run RAG on 2 GB RAM 2026? | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.2 1B + MiniLM-L6-v2 embeddings run RAG on 2 GB RAM with ~1.3–1.5 GB footprint. 7B+ models need 8 GB. Quick answer from PromptQuorum.',
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
        answer: 'Yes — but only for small personal document sets using Llama 3.2 1B (~750 MB) with MiniLM-L6-v2 embeddings (~80 MB) and an in-memory vector store fitting ~1.3–1.5 GB total on a 2 GB device. Larger models (7B+) and larger document sets (200+ pages) need 8 GB minimum.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 MB) + MiniLM-L6-v2 embeddings (~80 MB) fits 2 GB',
          'Document set must be under ~200 pages to stay within RAM',
          '7B+ models or larger corpora need at least 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Kann man RAG mit 2 GB RAM betreiben?',
        answer: 'Ja — aber nur für kleine persönliche Dokumentsammlungen mit Llama 3.2 1B (~750 MB), MiniLM-L6-v2-Embeddings (~80 MB) und Speichervektorstore insgesamt ~1,3–1,5 GB auf 2-GB-Gerät. Größere Modelle (7B+) und größere Dokumentsammlungen (200+ Seiten) benötigen mindestens 8 GB.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 MB) + MiniLM-L6-v2-Embeddings (~80 MB) passen in 2 GB',
          'Dokumentensammlung muss unter ~200 Seiten bleiben, um im RAM zu bleiben',
          '7B+ Modelle oder größere Korpora benötigen mindestens 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Peut-on exécuter RAG avec 2 Go de RAM ?',
        answer: 'Oui — mais uniquement petites collections documents personnels avec Llama 3.2 1B (~750 Mo), embeddings MiniLM-L6-v2 (~80 Mo) et vector store mémoire total ~1,3–1,5 Go sur appareil 2 Go. Modèles plus grands (7B+) et collections plus importantes (200+ pages) nécessitent 8 Go minimum.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 Mo) + embeddings MiniLM-L6-v2 (~80 Mo) tient dans 2 Go',
          'La collection de documents doit faire moins de ~200 pages pour rester en RAM',
          'Les modèles 7B+ ou les corpus plus volumineux nécessitent au minimum 8 Go de RAM',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '2 GB RAMでRAGを実行できますか？',
        answer: 'はい — ただしLlama 3.2 1B（~750 MB）とMiniLM-L6-v2 Embeddings（~80 MB）およびメモリベクターストアで合計~1.3–1.5 GBが2 GBデバイスに収まる小規模個人ドキュメント限定です。大型モデル（7B+）や大きなドキュメントセット（200ページ以上）には最低8 GBが必要です。',
        bullets: [
          'Llama 3.2 1B Q4_K_M（~750 MB）+ MiniLM-L6-v2 Embeddings（~80 MB）が2 GBに収まる',
          'ドキュメントセットはRAM内に収めるために~200ページ未満に制限する必要がある',
          '7B+モデルや大きなコーパスには最低8 GB RAMが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '2 GB 内存能运行 RAG 吗？',
        answer: '可以 — 但仅限用 Llama 3.2 1B（~750 MB）、MiniLM-L6-v2 Embeddings（~80 MB）和内存向量存储合计 ~1.3–1.5 GB 放入 2 GB 设备的小型个人文档集。更大的模型（7B+）和更大的文档集（200+ 页）至少需要 8 GB。',
        bullets: [
          'Llama 3.2 1B Q4_K_M（~750 MB）+ MiniLM-L6-v2 Embeddings（~80 MB）可放入 2 GB',
          '文档集必须低于 ~200 页才能保持在 RAM 内',
          '7B+ 模型或更大语料库至少需要 8 GB RAM',
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
    metaDescription: 'Llama 3.2 1B + MiniLM-L6-v2-Embeddings ermöglichen RAG auf 2 GB RAM mit ~1,3–1,5 GB Speicher. 7B+ Modelle benötigen 8 GB minimum. Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Kann man RAG mit 2 GB RAM betreiben?',
        answer: 'Ja — aber nur für kleine persönliche Dokumentensammlungen. Mit 2 GB RAM verwendet eine funktionsfähige RAG-Pipeline Llama 3.2 1B (~750 MB) mit MiniLM-L6-v2-Embeddings (~80 MB) und einem In-Memory-Vektorspeicher. Insgesamt ~1,3–1,5 GB passt auf ein 2-GB-Gerät. Größere Modelle (7B+) und größere Dokumentensammlungen (200+ Seiten) benötigen mindestens 8 GB.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 MB) + MiniLM-L6-v2-Embeddings (~80 MB) passt in 2 GB',
          'Dokumentensammlung muss unter ~200 Seiten bleiben, um im RAM zu bleiben',
          '7B+ Modelle oder größere Korpora benötigen mindestens 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'Ja — Aber Nur Minimale Setups Funktionieren',
        content: [
          'Mit 2 GB RAM verwendet die einzig funktionsfähige RAG-Pipeline ein 1B-LLM (Llama 3.2 1B oder Phi-3 Mini) mit einem leichtgewichtigen Embedding-Modell (MiniLM-L6-v2 mit ~80 MB) und einem Flat-File- oder In-Memory-Vektorspeicher. Stand Mai 2026 funktioniert dies — aber nur für kleine persönliche Dokumentensammlungen (unter ~200 Seiten).',
          'Die Tabelle unten zeigt den RAM-Bedarf jeder RAG-Komponente bei minimalen Einstellungen.',
        ],
        columns: ['Komponente', 'Speicherbedarf', 'Hinweise'],
        rows: [
          { 'Komponente': 'LLM (Llama 3.2 1B Q4_K_M)', 'Speicherbedarf': '~750 MB', 'Hinweise': 'Kleinstes nutzbares instruction-tuned Modell' },
          { 'Komponente': 'Embedding-Modell (MiniLM-L6-v2)', 'Speicherbedarf': '~80 MB', 'Hinweise': 'Läuft auf CPU; keine GPU erforderlich' },
          { 'Komponente': 'Vektorspeicher (Chroma in-memory)', 'Speicherbedarf': '~150 MB', 'Hinweise': 'Skaliert mit Korpusgröße' },
          { 'Komponente': 'Python-Laufzeit + Framework-Overhead', 'Speicherbedarf': '~300 MB', 'Hinweise': 'LangChain oder bare llama-index' },
          { 'Komponente': 'Gesamtminimum', 'Speicherbedarf': '~1,3–1,5 GB', 'Hinweise': 'Lässt ~500 MB für das Betriebssystem auf einem 2-GB-Gerät' },
        ],
        content2: [
          'Diese Konfiguration passt auf einen Raspberry Pi 4 (2-GB-Variante) oder jedes andere stromsparende Gerät mit 2 GB RAM. Die Abrufqualität ist durch MiniLM-L6\'s 384-dim-Embeddings begrenzt, die für kurze Passagen effektiv sind, bei mehrseitigen Dokumenten jedoch nachlassen.',
        ],
      },
      body2: {
        title: 'Was bei 2 GB Scheitert',
        content: [
          '<strong>Das häufigste Versagen ist, dass das LLM den verfügbaren RAM bei der Kontextfenster-Erweiterung überschreitet.</strong> Bei 2 GB ist der Kontext eines 1B-Modells auf etwa 2k Tokens begrenzt, bevor das Betriebssystem anfängt zu swappen. Das Laden eines 7B- oder größeren Modells schlägt sofort fehl — Llama 3 8B Q4_K_M benötigt allein ~5 GB.',
          'Das zweite Versagensmuster ist das Wachstum des Vektorspeichers. Eine Chroma-Datenbank für 500 PDF-Seiten verwendet je nach Chunk-Größe etwa 400–600 MB. In Kombination mit LLM und Embedding-Modell überschreitet der Gesamt-RAM 2 GB. Die Lösung: Eingabe auf unter 150 Seiten begrenzen, 256-Token-Chunks verwenden und den Speicher nach jeder Sitzung bereinigen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu RAG mit 2 GB RAM',
        faqs: [
          {
            q: 'Was ist das kleinste LLM, das für RAG funktioniert?',
            a: 'Llama 3.2 1B Q4_K_M (~750 MB) ist das kleinste instruction-tuned Modell, das kohärente Antworten für retrieval-augmentierte Aufgaben erzeugt. Phi-3 Mini (3.8B) ist die bessere Wahl bei 3–4 GB verfügbarem RAM — sein 4k-Kontext verarbeitet längere abgerufene Passagen. Unter 1B Parametern sinkt die Ausgabequalität für RAG-Frage-Antwort-Aufgaben stark ab.',
          },
          {
            q: 'Kann ich Ollama mit 2 GB RAM verwenden?',
            a: 'Ollamas minimaler empfohlener RAM beträgt 8 GB. Auf 2 GB lädt Ollama selbst, aber das Ausführen von Modellen schlägt fehl oder beansprucht intensiv den Swap-Speicher. Für 2-GB-Geräte verwenden Sie llama.cpp direkt über die CLI oder die llama-cpp-python-Bindings — diese haben einen kleineren residenten Speicherbedarf als der Ollama-Serverprozess.',
          },
          {
            q: 'Wird Raspberry Pi 5 (8 GB) ordentliches RAG ausführen?',
            a: 'Ja. Ein Raspberry Pi 5 mit 8 GB RAM führt Llama 3 8B Q4_K_M (~5 GB) zusammen mit einem vollständigen Embedding- und Vektorspeicher-Stack mit Puffer aus. Die Geschwindigkeit beträgt ~1–2 tok/s auf der Pi 5 CPU — langsam, aber funktional für Offline-Anwendungsfälle der persönlichen Suche. Geschwindigkeits-Benchmarks finden Sie bei den <a href="/de/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">besten Ollama-Modellen für CPU-only-Inferenz</a>.',
          },
          {
            q: 'Lohnt sich lokales RAG mit 2 GB RAM?',
            a: 'Für kleine persönliche Dokumentensammlungen (Notizen, einige PDFs) — ja, die 1B + MiniLM-Pipeline ist genutzlich nützlich. Für alles, das präzises Abrufen über große Korpora oder komplexes mehrstufiges Reasoning erfordert, ist 2 GB RAM eine harte Grenze. Upgraden Sie auf mindestens 8 GB, bevor Sie produktionsreife RAG-Qualität erwarten.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    title: 'Peut-on exécuter RAG avec 2 Go de RAM ?',
    seoTitle: 'RAG avec 2 Go de RAM 2026 ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.2 1B + MiniLM-L6-v2 permettent RAG sur 2 Go de RAM (~1,3–1,5 Go total). Modèles 7B+ nécessitent 8 Go minimum. Réponse rapide de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter RAG avec 2 Go de RAM ?',
        answer: 'Oui — mais uniquement pour de petites collections de documents personnels. Avec 2 Go de RAM, un pipeline RAG viable utilise Llama 3.2 1B (~750 Mo) avec les embeddings MiniLM-L6-v2 (~80 Mo) et un vector store en mémoire. Au total ~1,3–1,5 Go tient sur un appareil de 2 Go. Les modèles plus grands (7B+) et les collections de documents plus importantes (200+ pages) nécessitent 8 Go minimum.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 Mo) + embeddings MiniLM-L6-v2 (~80 Mo) tient dans 2 Go',
          'La collection de documents doit faire moins de ~200 pages pour rester en RAM',
          'Les modèles 7B+ ou les corpus plus volumineux nécessitent au minimum 8 Go de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'Oui — Mais Uniquement les Configurations Minimales Fonctionnent',
        content: [
          'Avec 2 Go de RAM, le seul pipeline RAG viable utilise un LLM de classe 1B (Llama 3.2 1B ou Phi-3 Mini) avec un modèle d\'embedding léger (MiniLM-L6-v2 à ~80 Mo) et un vector store en mémoire ou fichier plat. En mai 2026, cela fonctionne — mais uniquement pour de petites collections de documents personnels (moins de ~200 pages).',
          'Le tableau ci-dessous montre l\'empreinte RAM de chaque composant RAG avec les paramètres minimaux.',
        ],
        columns: ['Composant', 'Utilisation mémoire', 'Notes'],
        rows: [
          { 'Composant': 'LLM (Llama 3.2 1B Q4_K_M)', 'Utilisation mémoire': '~750 Mo', 'Notes': 'Plus petit modèle instruction-tuned utilisable' },
          { 'Composant': 'Modèle d\'embedding (MiniLM-L6-v2)', 'Utilisation mémoire': '~80 Mo', 'Notes': 'Fonctionne sur CPU ; pas de GPU requis' },
          { 'Composant': 'Vector store (Chroma en mémoire)', 'Utilisation mémoire': '~150 Mo', 'Notes': 'Évolue avec la taille du corpus' },
          { 'Composant': 'Environnement Python + overhead framework', 'Utilisation mémoire': '~300 Mo', 'Notes': 'LangChain ou llama-index minimal' },
          { 'Composant': 'Total minimum', 'Utilisation mémoire': '~1,3–1,5 Go', 'Notes': 'Laisse ~500 Mo pour l\'OS sur un appareil de 2 Go' },
        ],
        content2: [
          'Cette configuration convient à un Raspberry Pi 4 (variante 2 Go) ou tout appareil basse consommation avec 2 Go de RAM. La qualité de récupération est limitée par les embeddings à 384 dimensions de MiniLM-L6, efficaces pour les passages courts mais dégradés sur les documents multi-pages.',
        ],
      },
      body2: {
        title: 'Ce Qui Échoue à 2 Go',
        content: [
          '<strong>L\'échec le plus courant est que le LLM dépasse la RAM disponible lors de l\'expansion de la fenêtre de contexte.</strong> À 2 Go, le contexte d\'un modèle 1B est plafonné à environ 2k tokens avant que l\'OS commence à swapper. Le chargement d\'un modèle 7B ou plus grand échoue immédiatement — Llama 3 8B Q4_K_M nécessite ~5 Go à lui seul.',
          'Le second mode d\'échec est la croissance du vector store. Une base de données Chroma pour 500 pages PDF utilise environ 400 à 600 Mo selon la taille des chunks. Combiné avec le LLM et le modèle d\'embedding, la RAM totale dépasse 2 Go. La solution : limiter l\'ingestion à moins de 150 pages, utiliser des chunks de 256 tokens et purger le store après chaque session.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses Rapides sur RAG avec 2 Go de RAM',
        faqs: [
          {
            q: 'Quel est le plus petit LLM qui fonctionne pour RAG ?',
            a: 'Llama 3.2 1B Q4_K_M (~750 Mo) est le plus petit modèle instruction-tuned produisant des réponses cohérentes pour les tâches d\'augmentation par récupération. Phi-3 Mini (3.8B) est un meilleur choix si vous disposez de 3 à 4 Go — son contexte 4k gère les passages récupérés plus longs. En dessous de 1B paramètres, la qualité des réponses se dégrade fortement pour les questions RAG.',
          },
          {
            q: 'Puis-je utiliser Ollama avec 2 Go de RAM ?',
            a: 'La RAM minimale recommandée par Ollama est 8 Go. Avec 2 Go, Ollama lui-même se charge mais le service de modèles échoue ou sollicite intensément le swap. Pour les appareils de 2 Go, utilisez llama.cpp directement via la CLI ou les bindings llama-cpp-python — ceux-ci ont une empreinte mémoire résidente plus faible que le processus serveur Ollama.',
          },
          {
            q: 'Le Raspberry Pi 5 (8 Go) fera-t-il tourner un vrai RAG ?',
            a: 'Oui. Un Raspberry Pi 5 avec 8 Go de RAM fait tourner Llama 3 8B Q4_K_M (~5 Go) avec une pile complète embedding + vector store avec de la marge. La vitesse est ~1–2 tok/s sur le CPU Pi 5 — lent mais fonctionnel pour les cas d\'usage de recherche personnelle hors ligne. Consultez les <a href="/fr/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">meilleurs modèles Ollama pour l\'inférence CPU uniquement</a> pour les benchmarks de vitesse.',
          },
          {
            q: 'Le RAG local vaut-il la peine avec 2 Go de RAM ?',
            a: 'Pour de petites collections de documents personnels (notes, quelques PDFs), oui — le pipeline 1B + MiniLM est genuinement utile. Pour tout ce qui nécessite une récupération précise sur de larges corpus ou un raisonnement multi-étapes complexe, 2 Go de RAM est une contrainte dure. Passez à au moins 8 Go avant d\'espérer une qualité RAG de niveau production.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    title: '2 GB RAMでRAGを実行できますか？',
    seoTitle: '2 GB RAM での RAG 実行 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.2 1B + MiniLM-L6-v2 で 2 GB RAM 上の RAG が可能（~1.3–1.5 GB）。7B+ モデルは 8 GB 必須。PromptQuorum より。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: '2 GB RAMでRAGを実行できますか？',
        answer: 'はい — ただし小規模な個人ドキュメントセット限定です。2 GB RAMでは、Llama 3.2 1B（~750 MB）にMiniLM-L6-v2 Embeddings（~80 MB）とインメモリベクターストアを組み合わせた実用的なRAGパイプラインが可能です。合計~1.3–1.5 GBは2 GBデバイスに収まります。大型モデル（7B+）や大きなドキュメントセット（200ページ以上）には最低8 GBが必要です。',
        bullets: [
          'Llama 3.2 1B Q4_K_M（~750 MB）+ MiniLM-L6-v2 Embeddings（~80 MB）が2 GBに収まる',
          'ドキュメントセットはRAM内に収めるために~200ページ未満に制限する必要がある',
          '7B+モデルや大きなコーパスには最低8 GB RAMが必要',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'はい — ただし最小限のセットアップのみ機能します',
        content: [
          '2 GB RAMでは、唯一実用的なRAGパイプラインは1BクラスのLLM（Llama 3.2 1BまたはPhi-3 Mini）と軽量な埋め込みモデル（MiniLM-L6-v2、~80 MB）とフラットファイルまたはインメモリベクターストアを組み合わせたものです。2026年5月現在、これは機能します — ただし小規模な個人ドキュメントセット（~200ページ未満）限定です。',
          '以下の表は最小限の設定における各RAGコンポーネントのRAM使用量を示しています。',
        ],
        columns: ['コンポーネント', 'メモリ使用量', '備考'],
        rows: [
          { 'コンポーネント': 'LLM（Llama 3.2 1B Q4_K_M）', 'メモリ使用量': '~750 MB', '備考': '最小の実用的なinstruction-tunedモデル' },
          { 'コンポーネント': '埋め込みモデル（MiniLM-L6-v2）', 'メモリ使用量': '~80 MB', '備考': 'CPU上で動作；GPU不要' },
          { 'コンポーネント': 'ベクターストア（Chroma in-memory）', 'メモリ使用量': '~150 MB', '備考': 'コーパスサイズに合わせてスケール' },
          { 'コンポーネント': 'Pythonランタイム + フレームワークオーバーヘッド', 'メモリ使用量': '~300 MB', '備考': 'LangChainまたは最小限のllama-index' },
          { 'コンポーネント': '合計最小値', 'メモリ使用量': '~1.3–1.5 GB', '備考': '2 GBデバイスのOSに~500 MBを残す' },
        ],
        content2: [
          'この構成はRaspberry Pi 4（2 GB版）または2 GB RAMを持つ省電力デバイスに適しています。MiniLM-L6の384次元Embeddingsによる検索品質は短いパッセージのマッチングには効果的ですが、複数ページにわたるドキュメントでは低下します。',
        ],
      },
      body2: {
        title: '2 GBで失敗するもの',
        content: [
          '<strong>最も一般的な失敗は、コンテキストウィンドウ拡張時にLLMが利用可能なRAMを超えることです。</strong> 2 GBでは、1Bモデルのコンテキストはオペレーティングシステムがスワッピングを開始する前に約2kトークンに制限されます。7B以上のモデルのロードは即座に失敗します — Llama 3 8B Q4_K_Mだけで~5 GBが必要です。',
          '2番目の失敗パターンはベクターストアの成長です。500ページのPDF用のChromaデータベースはチャンクサイズによって約400–600 MBを使用します。LLMと埋め込みモデルと合わせると、合計RAMが2 GBを超えます。解決策：インジェストを150ページ未満に制限し、256トークンチャンクを使用し、各セッション後にストアをプルーニングします。',
        ],
      },
      faq: {
        id: 'faq',
        title: '2 GB RAMでのRAGに関するよくある質問',
        faqs: [
          {
            q: 'RAGに機能する最小のLLMは何ですか？',
            a: 'Llama 3.2 1B Q4_K_M（~750 MB）は、検索拡張タスクに対して一貫した回答を生成する最小のinstruction-tunedモデルです。3–4 GBが利用できる場合はPhi-3 Mini（3.8B）がより良い選択です — その4kコンテキストはより長い検索済みパッセージを処理します。1B未満のパラメータでは、RAGスタイルの質問応答の出力品質が急激に低下します。',
          },
          {
            q: 'Ollamaを2 GB RAMで使用できますか？',
            a: 'Ollamaの推奨最低RAMは8 GBです。2 GBではOllama自体はロードされますが、モデルのサービングが失敗するかスワップを大量に使用します。2 GBデバイスには、CLIまたはllama-cpp-pythonバインディングを通じてllama.cppを直接使用してください — これらはOllamaサーバープロセスよりも常駐メモリフットプリントが小さいです。',
          },
          {
            q: 'Raspberry Pi 5（8 GB）は適切なRAGを実行できますか？',
            a: 'はい。8 GB RAMを持つRaspberry Pi 5は、完全な埋め込み + ベクターストアスタックとともにLlama 3 8B Q4_K_M（~5 GB）を余裕を持って実行できます。速度はPi 5 CPUで~1–2 tok/sです — オフライン個人検索ユースケースには遅いですが機能的です。スピードベンチマークについては<a href="/ja/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">CPU専用推論のための最良のOllamaモデル</a>を参照してください。',
          },
          {
            q: '2 GB RAMでのローカルRAGは価値がありますか？',
            a: '小規模な個人ドキュメントセット（ノート、いくつかのPDF）には、1B + MiniLMパイプラインは本当に有用です。大規模コーパスにわたる精確な検索や複雑な多段階推論が必要なものには、2 GB RAMは厳しい制約です。プロダクションレベルのRAG品質を期待する前に、少なくとも8 GBにアップグレードしてください。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Quick Answers',
    title: 'Você pode executar RAG com 2 GB de RAM?',
    seoTitle: 'RAG com 2 GB de RAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.2 1B + embeddings MiniLM-L6-v2 permitem RAG com 2 GB de RAM (~1,3–1,5 GB no total). Modelos 7B+ precisam de 8 GB. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Você pode executar RAG com 2 GB de RAM?',
        answer: 'Sim — mas apenas para conjuntos pequenos de documentos pessoais usando Llama 3.2 1B (~750 MB), embeddings MiniLM-L6-v2 (~80 MB) e um vector store em memória totalizando ~1,3–1,5 GB em um dispositivo de 2 GB. Modelos maiores (7B+) e conjuntos de documentos maiores (200+ páginas) precisam de 8 GB no mínimo.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 MB) + embeddings MiniLM-L6-v2 (~80 MB) cabem em 2 GB',
          'O conjunto de documentos deve ter menos de ~200 páginas para caber na RAM',
          'Modelos 7B+ ou corpora maiores precisam de pelo menos 8 GB de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'Sim — Mas Apenas as Configurações Mínimas Funcionam',
        content: [
          'Com 2 GB de RAM, o único pipeline RAG viável usa um LLM da classe 1B (Llama 3.2 1B ou Phi-3 Mini) com um modelo de embeddings leve (MiniLM-L6-v2 a ~80 MB) e um vector store em memória ou arquivo plano. Em maio de 2026, isso funciona — mas apenas para conjuntos pequenos de documentos pessoais (menos de ~200 páginas).',
          'A tabela abaixo mostra o uso de RAM de cada componente RAG na configuração mínima viável.',
        ],
        columns: ['Componente', 'Uso de memória', 'Notas'],
        rows: [
          { 'Componente': 'LLM (Llama 3.2 1B Q4_K_M)', 'Uso de memória': '~750 MB', 'Notas': 'O menor modelo instruction-tuned utilizável' },
          { 'Componente': 'Modelo de embeddings (MiniLM-L6-v2)', 'Uso de memória': '~80 MB', 'Notas': 'Roda na CPU; não requer GPU' },
          { 'Componente': 'Vector store (Chroma em memória)', 'Uso de memória': '~150 MB', 'Notas': 'Escala com o tamanho do corpus' },
          { 'Componente': 'Runtime Python + overhead do framework', 'Uso de memória': '~300 MB', 'Notas': 'LangChain ou llama-index mínimo' },
          { 'Componente': 'Total mínimo', 'Uso de memória': '~1,3–1,5 GB', 'Notas': 'Deixa ~500 MB para o SO em um dispositivo de 2 GB' },
        ],
        content2: [
          'Essa configuração cabe em um Raspberry Pi 4 (variante de 2 GB) ou qualquer dispositivo de baixo consumo com 2 GB de RAM. A qualidade da recuperação é limitada pelos embeddings de 384 dimensões do MiniLM-L6, eficazes para passagens curtas mas que degradam em documentos de várias páginas.',
        ],
      },
      body2: {
        title: 'O que Falha com 2 GB de RAM',
        content: [
          '<strong>A falha mais comum é o LLM ultrapassar a RAM disponível ao expandir a janela de contexto.</strong> Com 2 GB, o contexto de um modelo 1B é limitado a cerca de 2k tokens antes de o SO começar a usar swap. Carregar um modelo 7B ou maior falha imediatamente — Llama 3 8B Q4_K_M requer ~5 GB sozinho.',
          'O segundo modo de falha é o crescimento do vector store. Um banco de dados Chroma para 500 páginas PDF usa aproximadamente 400–600 MB dependendo do tamanho do chunk. Combinado com o LLM e o modelo de embeddings, a RAM total ultrapassa 2 GB. A solução: limitar a ingestão a menos de 150 páginas, usar chunks de 256 tokens e limpar o store após cada sessão.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas Rápidas sobre RAG com 2 GB de RAM',
        faqs: [
          {
            q: 'Qual é o menor LLM que funciona para RAG?',
            a: 'Llama 3.2 1B Q4_K_M (~750 MB) é o menor modelo instruction-tuned que produz respostas coerentes para tarefas de recuperação aumentada. Phi-3 Mini (3,8B) é melhor se você tiver 3–4 GB disponíveis — seu contexto de 4k lida melhor com passagens recuperadas mais longas. Abaixo de 1B parâmetros, a qualidade das respostas cai drasticamente para perguntas no estilo RAG.',
          },
          {
            q: 'Posso usar Ollama com 2 GB de RAM?',
            a: 'A RAM mínima recomendada pelo Ollama é 8 GB. Com 2 GB, o Ollama carrega, mas o serviço de modelos falha ou usa swap intensamente. Para dispositivos de 2 GB, use llama.cpp diretamente pela CLI ou os bindings llama-cpp-python — têm uma pegada de memória residente menor do que o processo do servidor Ollama.',
          },
          {
            q: 'Um Raspberry Pi 5 (8 GB) pode executar RAG de verdade?',
            a: 'Sim. Um Raspberry Pi 5 com 8 GB de RAM executa Llama 3 8B Q4_K_M (~5 GB) junto com uma pilha completa de embeddings + vector store com margem. A velocidade é ~1–2 tok/s na CPU do Pi 5 — lento mas funcional para pesquisa pessoal offline. Consulte os benchmarks nos <a href="/pt/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">melhores modelos do Ollama para inferência somente em CPU</a>.',
          },
          {
            q: 'Vale a pena o RAG local com 2 GB de RAM?',
            a: 'Para conjuntos pequenos de documentos pessoais (notas, alguns PDFs), sim — o pipeline 1B + MiniLM é genuinamente útil. Para tudo que exige recuperação precisa em corpora grandes ou raciocínio complexo de múltiplas etapas, 2 GB de RAM é um limite rígido. Atualize para pelo menos 8 GB antes de esperar qualidade RAG de nível produção.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quick Answers',
    title: '¿Puedes Ejecutar RAG con 2 GB de RAM?',
    seoTitle: 'RAG con 2 GB de RAM 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.2 1B + MiniLM-L6-v2 permiten RAG con 2 GB de RAM (~1,3–1,5 GB total). Los modelos 7B+ necesitan al menos 8 GB. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar RAG con 2 GB de RAM?',
        answer: 'Sí — pero solo para conjuntos pequeños de documentos personales con Llama 3.2 1B (~750 MB), embeddings MiniLM-L6-v2 (~80 MB) y un vector store en memoria que suman ~1.3–1.5 GB en un dispositivo de 2 GB. Los modelos más grandes (7B+) y conjuntos de documentos más grandes (200+ páginas) necesitan 8 GB como mínimo.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 MB) + embeddings MiniLM-L6-v2 (~80 MB) caben en 2 GB',
          'El conjunto de documentos debe tener menos de ~200 páginas para caber en RAM',
          'Los modelos 7B+ o corpus más grandes necesitan al menos 8 GB de RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'Sí — Pero Solo las Configuraciones Mínimas Funcionan',
        content: [
          'Con 2 GB de RAM, el único pipeline RAG viable usa un LLM de clase 1B (Llama 3.2 1B o Phi-3 Mini) con un modelo de embeddings ligero (MiniLM-L6-v2 a ~80 MB) y un vector store en memoria o archivo plano. A mayo de 2026, esto funciona — pero solo para conjuntos pequeños de documentos personales (menos de ~200 páginas).',
          'La tabla siguiente muestra el uso de RAM de cada componente RAG con la configuración mínima viable.',
        ],
        columns: ['Componente', 'Uso de memoria', 'Notas'],
        rows: [
          { 'Componente': 'LLM (Llama 3.2 1B Q4_K_M)', 'Uso de memoria': '~750 MB', 'Notas': 'El modelo instruction-tuned más pequeño utilizable' },
          { 'Componente': 'Modelo de embeddings (MiniLM-L6-v2)', 'Uso de memoria': '~80 MB', 'Notas': 'Corre en CPU; no requiere GPU' },
          { 'Componente': 'Vector store (Chroma en memoria)', 'Uso de memoria': '~150 MB', 'Notas': 'Escala con el tamaño del corpus' },
          { 'Componente': 'Runtime de Python + overhead del framework', 'Uso de memoria': '~300 MB', 'Notas': 'LangChain o llama-index mínimo' },
          { 'Componente': 'Total mínimo', 'Uso de memoria': '~1.3–1.5 GB', 'Notas': 'Deja ~500 MB para el SO en un dispositivo de 2 GB' },
        ],
        content2: [
          'Esta configuración cabe en una Raspberry Pi 4 (variante de 2 GB) o cualquier dispositivo de bajo consumo con 2 GB de RAM. La calidad de recuperación está limitada por los embeddings de 384 dimensiones de MiniLM-L6, efectivos para pasajes cortos pero que se degradan en documentos de varias páginas.',
        ],
      },
      body2: {
        title: 'Qué Falla con 2 GB de RAM',
        content: [
          '<strong>El fallo más común es que el LLM supere la RAM disponible al expandir la ventana de contexto.</strong> Con 2 GB, el contexto de un modelo 1B está limitado a unos 2k tokens antes de que el SO empiece a usar swap. Cargar un modelo 7B o más grande falla de inmediato — Llama 3 8B Q4_K_M requiere ~5 GB solo.',
          'El segundo modo de fallo es el crecimiento del vector store. Una base de datos Chroma para 500 páginas PDF usa aproximadamente 400–600 MB según el tamaño del chunk. Combinado con el LLM y el modelo de embeddings, la RAM total supera los 2 GB. La solución: limitar la ingesta a menos de 150 páginas, usar chunks de 256 tokens y limpiar el store después de cada sesión.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas Rápidas sobre RAG con 2 GB de RAM',
        faqs: [
          {
            q: '¿Cuál es el LLM más pequeño que funciona para RAG?',
            a: 'Llama 3.2 1B Q4_K_M (~750 MB) es el modelo instruction-tuned más pequeño que produce respuestas coherentes para tareas de recuperación aumentada. Phi-3 Mini (3.8B) es mejor si tienes 3–4 GB disponibles — su contexto de 4k maneja pasajes recuperados más largos. Por debajo de 1B parámetros, la calidad de las respuestas cae drásticamente para preguntas estilo RAG.',
          },
          {
            q: '¿Puedo usar Ollama con 2 GB de RAM?',
            a: 'La RAM mínima recomendada de Ollama es 8 GB. Con 2 GB, Ollama carga pero el servicio de modelos falla o usa el swap intensamente. Para dispositivos de 2 GB, usa llama.cpp directamente por CLI o los bindings llama-cpp-python — tienen una huella de memoria residente menor que el proceso del servidor de Ollama.',
          },
          {
            q: '¿Una Raspberry Pi 5 (8 GB) puede ejecutar RAG de verdad?',
            a: 'Sí. Una Raspberry Pi 5 con 8 GB de RAM ejecuta Llama 3 8B Q4_K_M (~5 GB) junto con una pila completa de embeddings + vector store con margen. La velocidad es ~1–2 tok/s en el CPU del Pi 5 — lento pero funcional para búsqueda personal offline. Consulta los benchmarks en los <a href="/es/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">mejores modelos de Ollama para inferencia solo en CPU</a>.',
          },
          {
            q: '¿Vale la pena el RAG local con 2 GB de RAM?',
            a: 'Para conjuntos pequeños de documentos personales (notas, algunos PDFs), sí — el pipeline 1B + MiniLM es genuinamente útil. Para todo lo que requiera recuperación precisa sobre corpus grandes o razonamiento complejo de múltiples pasos, 2 GB de RAM es un límite duro. Actualiza a al menos 8 GB antes de esperar calidad RAG de nivel producción.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    title: '2 GB 内存能运行 RAG 吗？',
    seoTitle: '2 GB 内存 RAG 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.2 1B + MiniLM-L6-v2 让 2 GB RAM 可运行 RAG（~1.3–1.5 GB）。7B+ 模型需 8 GB。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '2 GB 内存能运行 RAG 吗？',
        answer: '可以 — 但仅限小型个人文档集。2 GB 内存下，可行的 RAG 管道使用 Llama 3.2 1B（~750 MB）配合 MiniLM-L6-v2 Embeddings（~80 MB）和内存向量数据库。总计 ~1.3–1.5 GB 可放入 2 GB 设备。更大的模型（7B+）和更大的文档集（200+ 页）至少需要 8 GB。',
        bullets: [
          'Llama 3.2 1B Q4_K_M（~750 MB）+ MiniLM-L6-v2 Embeddings（~80 MB）可放入 2 GB',
          '文档集必须低于 ~200 页才能保持在 RAM 内',
          '7B+ 模型或更大语料库至少需要 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: '可以 — 但只有最小配置能正常工作',
        content: [
          '在 2 GB 内存下，唯一可行的 RAG 管道是使用 1B 级 LLM（Llama 3.2 1B 或 Phi-3 Mini）配合轻量级嵌入模型（MiniLM-L6-v2，~80 MB）和文件或内存向量数据库。截至 2026 年 5 月，这可行——但仅适用于小型个人文档集（~200 页以下）。',
          '下表显示了最小可行设置下每个 RAG 组件的内存占用。',
        ],
        columns: ['组件', '内存占用', '说明'],
        rows: [
          { '组件': 'LLM（Llama 3.2 1B Q4_K_M）', '内存占用': '~750 MB', '说明': '最小可用的 instruction-tuned 模型' },
          { '组件': '嵌入模型（MiniLM-L6-v2）', '内存占用': '~80 MB', '说明': '在 CPU 上运行；无需 GPU' },
          { '组件': '向量数据库（Chroma 内存模式）', '内存占用': '~150 MB', '说明': '随语料库大小增长' },
          { '组件': 'Python 运行时 + 框架开销', '内存占用': '~300 MB', '说明': 'LangChain 或精简版 llama-index' },
          { '组件': '总最低要求', '内存占用': '~1.3–1.5 GB', '说明': '2 GB 设备上为系统保留 ~500 MB' },
        ],
        content2: [
          '该配置适用于 Raspberry Pi 4（2 GB 版本）或任何拥有 2 GB 内存的低功耗设备。检索质量受限于 MiniLM-L6 的 384 维 Embeddings，对短段落匹配有效，但在多页文档上效果下降。',
        ],
      },
      body2: {
        title: '2 GB 下会出问题的情况',
        content: [
          '<strong>最常见的失败是 LLM 在上下文窗口扩展时超出可用内存。</strong> 在 2 GB 下，1B 模型的上下文在操作系统开始交换前约限制在 2k token。加载 7B 或更大的模型会立即失败——Llama 3 8B Q4_K_M 单独就需要 ~5 GB。',
          '第二个失败模式是向量数据库的增长。500 个 PDF 页面的 Chroma 数据库根据 chunk 大小使用约 400–600 MB。加上 LLM 和嵌入模型，总内存超过 2 GB。解决方法：将摄入限制在 150 页以下，使用 256 token chunk，并在每次会话后清理数据库。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 2 GB 内存 RAG 的快速解答',
        faqs: [
          {
            q: '适合 RAG 的最小 LLM 是什么？',
            a: 'Llama 3.2 1B Q4_K_M（~750 MB）是能为检索增强任务生成连贯回答的最小 instruction-tuned 模型。如果有 3–4 GB 可用，Phi-3 Mini（3.8B）是更好的选择——其 4k 上下文可处理更长的检索段落。低于 1B 参数时，RAG 式问答的输出质量会急剧下降。',
          },
          {
            q: '2 GB 内存能使用 Ollama 吗？',
            a: 'Ollama 推荐的最低内存是 8 GB。在 2 GB 上，Ollama 本身可以加载，但模型服务会失败或大量使用交换空间。对于 2 GB 设备，建议直接通过 CLI 使用 llama.cpp 或 llama-cpp-python 绑定——这些比 Ollama 服务器进程的常驻内存占用更小。',
          },
          {
            q: 'Raspberry Pi 5（8 GB）能运行真正的 RAG 吗？',
            a: '可以。8 GB 内存的 Raspberry Pi 5 可以轻松运行 Llama 3 8B Q4_K_M（~5 GB）以及完整的 Embeddings + 向量数据库技术栈。Pi 5 CPU 的速度约为 ~1–2 tok/s——慢，但对离线个人搜索用例是可用的。速度基准测试请参阅<a href="/zh/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">仅 CPU 推理的最佳 Ollama 模型</a>。',
          },
          {
            q: '2 GB 内存下的本地 RAG 值得做吗？',
            a: '对于小型个人文档集（笔记、几个 PDF），是的——1B + MiniLM 管道确实有用。对于需要在大型语料库上精确检索或复杂多步推理的任务，2 GB 内存是硬性限制。在期待生产级 RAG 质量之前，请先升级到至少 8 GB。',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Quick Answers',
    title: 'هل يمكنك تشغيل RAG بذاكرة 2 GB RAM؟',
    seoTitle: 'تشغيل RAG على 2 GB RAM في 2026: دليل عملي',
    metaDescription: 'Llama 3.2 1B Q4_K_M (~750 MB) مع تضمينات MiniLM-L6-v2 (~80 MB) يُشغّل RAG على 2 GB RAM بإجمالي ~1.3-1.5 GB. النماذج 7B+ تحتاج 8 GB RAM كحدٍّ أدنى.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنك تشغيل RAG بذاكرة 2 GB RAM؟',
        answer: 'نعم — لكن فقط لمجموعات وثائق شخصية صغيرة باستخدام Llama 3.2 1B (~750 MB) مع تضمينات MiniLM-L6-v2 (~80 MB) ومخزن متجهات في الذاكرة بإجمالي ~1.3-1.5 GB على جهاز 2 GB. النماذج الأكبر (7B+) ومجموعات الوثائق الأكبر (200+ صفحة) تحتاج 8 GB كحدٍّ أدنى.',
        bullets: [
          'Llama 3.2 1B Q4_K_M (~750 MB) + تضمينات MiniLM-L6-v2 (~80 MB) تناسب 2 GB',
          'يجب أن تكون مجموعة الوثائق أقل من ~200 صفحة للبقاء ضمن الذاكرة',
          'النماذج 7B+ أو المجموعات الأكبر تحتاج على الأقل 8 GB RAM',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      body1: {
        title: 'نعم — لكن فقط الإعدادات الدنيا تعمل',
        content: [
          'على 2 GB RAM، الأنبوب الوحيد الصالح لـ RAG يستخدم نموذج LLM من فئة 1B (Llama 3.2 1B أو Phi-3 Mini) مع نموذج تضمين خفيف (MiniLM-L6-v2 بحجم ~80 MB) ومخزن متجهات في الذاكرة أو ملف مسطّح. اعتبارًا من مايو 2026، هذا يعمل — لكن فقط لمجموعات الوثائق الشخصية الصغيرة (أقل من ~200 صفحة).',
          'يوضّح الجدول أدناه استخدام الذاكرة لكل مكوّن من مكوّنات RAG في الإعدادات الدنيا.',
        ],
        columns: ['المكوّن', 'استخدام الذاكرة', 'ملاحظات'],
        rows: [
          { 'المكوّن': 'نموذج LLM (Llama 3.2 1B Q4_K_M)', 'استخدام الذاكرة': '~750 MB', 'ملاحظات': 'أصغر نموذج instruction-tuned صالح للاستخدام' },
          { 'المكوّن': 'نموذج التضمين (MiniLM-L6-v2)', 'استخدام الذاكرة': '~80 MB', 'ملاحظات': 'يعمل على المعالج المركزي؛ لا يتطلب GPU' },
          { 'المكوّن': 'مخزن المتجهات (Chroma في الذاكرة)', 'استخدام الذاكرة': '~150 MB', 'ملاحظات': 'يتوسّع مع حجم المجموعة' },
          { 'المكوّن': 'وقت تشغيل Python + عبء الإطار', 'استخدام الذاكرة': '~300 MB', 'ملاحظات': 'LangChain أو llama-index المبسّط' },
          { 'المكوّن': 'الحدّ الأدنى الإجمالي', 'استخدام الذاكرة': '~1.3-1.5 GB', 'ملاحظات': 'يترك ~500 MB لنظام التشغيل على جهاز 2 GB' },
        ],
        content2: [
          'يتناسب هذا الإعداد مع Raspberry Pi 4 (الإصدار 2 GB) أو أي جهاز منخفض الاستهلاك بذاكرة 2 GB. تُقيَّد جودة الاسترجاع بتضمينات MiniLM-L6 ذات الأبعاد 384، وهي فعّالة لمطابقة الفقرات القصيرة لكنها تتراجع مع الوثائق المتعددة الصفحات.',
        ],
      },
      body2: {
        title: 'ما الذي يفشل على 2 GB RAM',
        content: [
          '<strong>الفشل الأكثر شيوعًا هو تجاوز نموذج LLM للذاكرة المتاحة عند توسيع نافذة السياق.</strong> على 2 GB، يُقيَّد سياق نموذج 1B بحوالي 2k رمز قبل أن يبدأ نظام التشغيل في استخدام مساحة التبادل. تحميل نموذج 7B أو أكبر يفشل فورًا — Llama 3 8B Q4_K_M وحده يتطلب ~5 GB.',
          'نمط الفشل الثاني هو نمو مخزن المتجهات. قاعدة بيانات Chroma لـ 500 صفحة PDF تستخدم تقريبًا 400-600 MB حسب حجم القطعة. مجتمعةً مع نموذج LLM ونموذج التضمين، يتجاوز إجمالي الذاكرة 2 GB. الحل: قصر الاستيعاب على أقل من 150 صفحة، استخدام قطع 256 رمزًا، وتقليم المخزن بعد كل جلسة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول RAG على 2 GB RAM',
        faqs: [
          {
            q: 'ما أصغر نموذج LLM يعمل مع RAG؟',
            a: 'Llama 3.2 1B Q4_K_M (~750 MB) هو أصغر نموذج instruction-tuned ينتج إجابات متماسكة لمهام الاسترجاع المعزَّز. Phi-3 Mini (3.8B) خيار أفضل إذا كانت لديك 3-4 GB متاحة — سياقه البالغ 4k يتعامل مع الفقرات المسترجعة الأطول. دون 1B معامل، تتراجع جودة المخرجات بشكل حاد في الإجابة على أسئلة بأسلوب RAG.',
          },
          {
            q: 'هل يمكنني استخدام Ollama على 2 GB RAM؟',
            a: 'الحدّ الأدنى الموصى به للذاكرة في Ollama هو 8 GB. على 2 GB، يُحمَّل Ollama ذاته لكن خدمة النماذج تفشل أو تستخدم مساحة التبادل بشكل مكثّف. لأجهزة 2 GB، استخدم llama.cpp مباشرةً عبر سطر الأوامر أو روابط llama-cpp-python — هذه أقل استهلاكًا للذاكرة المقيمة مقارنةً بعملية خادم Ollama.',
          },
          {
            q: 'هل يمكن لـ Raspberry Pi 5 (8 GB) تشغيل RAG حقيقي؟',
            a: 'نعم. Raspberry Pi 5 بذاكرة 8 GB يُشغّل Llama 3 8B Q4_K_M (~5 GB) مع مكدّس كامل من التضمينات ومخزن المتجهات مع هامش وفير. السرعة ~1-2 tok/s على معالج Pi 5 — بطيء لكن صالح للاستخدام في حالات البحث الشخصي غير المتصل. راجع معايير السرعة في <a href="/ar/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">أفضل نماذج Ollama للاستنتاج بالمعالج فقط</a>.',
          },
          {
            q: 'هل يستحق RAG المحلي الجهد على 2 GB RAM؟',
            a: 'لمجموعات الوثائق الشخصية الصغيرة (ملاحظات، بضعة ملفات PDF)، نعم — أنبوب 1B + MiniLM مفيد فعلًا. لأي شيء يتطلب استرجاعًا دقيقًا عبر مجموعات كبيرة أو استدلالًا معقدًا متعدد الخطوات، 2 GB RAM قيد صارم. قم بالترقية إلى 8 GB على الأقل قبل توقّع جودة RAG على مستوى الإنتاج.',
          },
        ],
      },
    },
  },
}
