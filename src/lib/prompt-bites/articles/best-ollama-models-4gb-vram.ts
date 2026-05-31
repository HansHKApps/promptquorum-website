import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Ollama Models for 4 GB VRAM?',
    seoTitle: 'Ollama 4 GB VRAM Models 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB VRAM is tight. Phi-4 Mini Q4 (3.2 GB), Gemma 2 2B (1.5 GB), SmolLM 1.7B (1.0 GB). Llama 3 8B will not fit. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 2 2B', 'SmolLM 1.7B'],
    current_hardware_mentioned: ['RTX 3050 4 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 4 GB VRAM GPUs running local LLMs',
    parentArticle: '/local-llms/fastest-local-llms-low-end-pcs',
    siblingBites: ['best-local-llm-6gb-vram', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for 4 GB VRAM?',
        answer: '4 GB VRAM is tight but usable with small models like Phi-4 Mini Q4 at ~3.2 GB, Gemma 2 2B at ~1.5 GB, and SmolLM 1.7B at ~1.0 GB for flexible allocation. Llama 3 8B will not fit.',
        bullets: [
          'Phi-4 Mini Q4: best quality in 4 GB (3.2 GB VRAM)',
          'Gemma 2 2B: fast and lightweight (1.5 GB)',
          'SmolLM 1.7B: smallest option, 1.0 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Beste Ollama-Modelle für 4 GB VRAM?',
        answer: '4 GB VRAM ist eng, aber mit kleinen Modellen wie Phi-4 Mini Q4 (~3,2 GB), Gemma 2 2B (~1,5 GB) und SmolLM 1.7B (~1,0 GB) für flexible Allokation nutzbar. Llama 3 8B passt nicht.',
        bullets: [
          'Phi-4 Mini Q4: beste Qualität bei 4 GB (3,2 GB VRAM)',
          'Gemma 2 2B: schnell und leichtgewichtig (1,5 GB)',
          'SmolLM 1.7B: kleinstes Modell, 1,0 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleurs modèles Ollama pour 4 Go de VRAM ?',
        answer: '4 Go de VRAM est serré mais utilisable avec petits modèles comme Phi-4 Mini Q4 (~3,2 Go), Gemma 2 2B (~1,5 Go) et SmolLM 1.7B (~1,0 Go) pour allocation flexible. Llama 3 8B ne rentrera pas.',
        bullets: [
          'Phi-4 Mini Q4 : meilleure qualité en 4 Go (3,2 Go de VRAM)',
          'Gemma 2 2B : rapide et léger (1,5 Go)',
          'SmolLM 1.7B : empreinte VRAM minimale, 1,0 Go',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '4 GB VRAM向け最良Ollamaモデルは？',
        answer: '4 GB VRAMは制限がありますがPhi-4 Mini Q4（~3.2 GB）、Gemma 2 2B（~1.5 GB）、SmolLM 1.7B（~1.0 GB）など小型モデルで柔軟配分して使えます。Llama 3 8Bは収まりません。',
        bullets: [
          'Phi-4 Mini Q4: 4 GBで最高品質（3.2 GB VRAM）',
          'Gemma 2 2B: 高速で軽量（1.5 GB）',
          'SmolLM 1.7B: 最小のVRAMフットプリント（1.0 GB）',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '4 GB显存最佳Ollama模型？',
        answer: '4 GB显存很紧张但可用小型模型如Phi-4 Mini Q4（约3.2 GB）、Gemma 2 2B（约1.5 GB）、SmolLM 1.7B（约1.0 GB）实现灵活分配。Llama 3 8B不适合。',
        bullets: [
          'Phi-4 Mini Q4: 4 GB下最高质量（3.2 GB显存）',
          'Gemma 2 2B: 快速轻量（1.5 GB）',
          'SmolLM 1.7B: 最小显存占用（1.0 GB）',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Mejores modelos Ollama para 4 GB de VRAM?',
        answer: '4 GB de VRAM es ajustado pero utilizable con modelos pequeños como Phi-4 Mini Q4 (~3,2 GB), Gemma 2 2B (~1,5 GB) y SmolLM 1.7B (~1,0 GB). Llama 3 8B no cabe.',
        bullets: [
          'Phi-4 Mini Q4: mejor calidad en 4 GB (3,2 GB VRAM)',
          'Gemma 2 2B: rápido y ligero (1,5 GB)',
          'SmolLM 1.7B: huella VRAM mínima (1,0 GB)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best for 4 GB VRAM: Phi-4 Mini Q4 at ~3.2 GB — highest quality at this tier',
          'Gemma 2 2B (1.5 GB) is the fastest option; SmolLM 1.7B (1.0 GB) is the smallest',
          'Llama 3 8B will not fit at any quantization — it needs 5.5 GB minimum',
        ],
      },
      body1: {
        title: 'What Fits in 4 GB VRAM',
        content: [
          'As of May 2026, <strong>at 4 GB VRAM you are limited to models with 3 billion parameters or fewer at Q4 quantization.</strong> This rules out every mainstream local model — Llama 3 8B, Mistral 7B, Qwen 14B. Three modern small models perform surprisingly well: Phi-4 Mini matches GPT-3.5 on instruction following, Gemma 2 2B handles fast chat, and SmolLM 1.7B runs on integrated graphics.',
          'Phi-4 Mini is the top pick at this tier. Despite its small size, it handles general Q&A, light coding, and document summarization at ~25 tokens per second. Gemma 2 2B is faster for single-turn chat. SmolLM 1.7B is the fallback if even Phi-4 Mini pushes your VRAM too close to the limit.',
        ],
        columns: ['Model', 'VRAM', 'Best For'],
        rows: [
          { 'Model': 'Phi-4 Mini Q4', 'VRAM': '3.2 GB', 'Best For': 'Best quality at 4 GB' },
          { 'Model': 'Gemma 2 2B Q4', 'VRAM': '1.5 GB', 'Best For': 'Fast single-turn chat' },
          { 'Model': 'SmolLM 1.7B Q4', 'VRAM': '1.0 GB', 'Best For': 'Minimal VRAM footprint' },
        ],
      },
      body2: {
        title: 'What Won\'t Fit in 4 GB',
        content: [
          'These models are commonly requested but require more than 4 GB VRAM at every quantization level:',
          'Upgrading to 6 GB unlocks Llama 3 8B and Mistral 7B — the two most popular local models. See the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best local LLMs for 6 GB VRAM</a>. For a full hardware comparison, see <a href="/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">fastest local LLMs for low-end PCs</a>.',
        ],
        items: [
          'Llama 3 8B — needs ~5.5 GB at Q4_K_M (minimum)',
          'Mistral 7B — needs ~4.5 GB at Q4_K_M (marginal; risky at 4 GB with context overhead)',
          'Phi-4 (full 14B) — needs ~9.8 GB',
          'Qwen 14B — needs ~9.5 GB at Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 4 GB VRAM Models',
        faqs: [
          {
            q: 'Is 4 GB VRAM enough for a useful LLM?',
            a: 'Yes, for basic tasks. Phi-4 Mini handles general Q&A and light coding at ~25 tok/s. For longer context, multi-step coding agents, or document analysis, 4 GB is a bottleneck — upgrade to 6 GB or more.',
          },
          {
            q: 'Can I run Llama 3 on 4 GB VRAM?',
            a: 'No. Llama 3 8B needs ~5.5 GB at Q4_K_M minimum. Llama 3.2 3B fits in ~2.5 GB if you specifically want a Llama variant. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the full VRAM requirements guide</a>.',
          },
          {
            q: 'What GPU has 4 GB VRAM?',
            a: 'RTX 3050 Ti (4 GB), GTX 1650 Super (4 GB), and AMD RX 6500 XT (4 GB) are the most common. All three work with Ollama — NVIDIA via CUDA, AMD via ROCm or Vulkan.',
          },
          {
            q: 'Can CPU-only mode bypass the 4 GB VRAM limit?',
            a: 'Yes. Running without GPU, Llama 3 8B Q4 uses ~6 GB of system RAM and runs at 3–6 tok/s on a modern 8-core CPU. Slower but works if you have enough RAM.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Beste Ollama-Modelle für 4 GB VRAM?',
    seoTitle: 'Ollama 4 GB VRAM Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB VRAM ist eng. Phi-4 Mini Q4 (3,2 GB), Gemma 2 2B (1,5 GB), SmolLM 1.7B (1,0 GB). Llama 3 8B passt nicht. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bestes Modell für 4 GB VRAM: Phi-4 Mini Q4 mit ~3,2 GB — höchste Qualität in diesem Tier',
          'Gemma 2 2B (1,5 GB) ist die schnellste Option; SmolLM 1.7B (1,0 GB) ist das kleinste',
          'Llama 3 8B passt bei keiner Quantisierung — es benötigt mindestens 5,5 GB',
        ],
      },
      body1: {
        title: 'Was in 4 GB VRAM passt',
        content: [
          'Stand Mai 2026: <strong>Mit 4 GB VRAM sind Sie auf Modelle mit 3 Milliarden Parametern oder weniger bei Q4-Quantisierung beschränkt.</strong> Das schließt alle gängigen lokalen Modelle aus — Llama 3 8B, Mistral 7B, Qwen 14B. Drei moderne kleine Modelle performen überraschend gut: Phi-4 Mini entspricht GPT-3.5 bei Instruction Following, Gemma 2 2B bewältigt schnellen Chat und SmolLM 1.7B läuft auf integrierten Grafiken.',
          'Phi-4 Mini ist die erste Wahl in diesem Tier. Trotz seiner kleinen Größe bewältigt es allgemeines Q&A, leichtes Coding und Dokumentenzusammenfassung mit ~25 Token pro Sekunde. Gemma 2 2B ist schneller für Single-Turn-Chat. SmolLM 1.7B ist die Rückfallalternative, wenn sogar Phi-4 Mini Ihren VRAM zu nah an das Limit bringt.',
        ],
        columns: ['Modell', 'VRAM', 'Anwendungsbereich'],
        rows: [
          { 'Modell': 'Phi-4 Mini Q4', 'VRAM': '3,2 GB', 'Anwendungsbereich': 'Beste Qualität bei 4 GB' },
          { 'Modell': 'Gemma 2 2B Q4', 'VRAM': '1,5 GB', 'Anwendungsbereich': 'Schneller Single-Turn-Chat' },
          { 'Modell': 'SmolLM 1.7B Q4', 'VRAM': '1,0 GB', 'Anwendungsbereich': 'Minimaler VRAM-Bedarf' },
        ],
      },
      body2: {
        title: 'Was nicht in 4 GB passt',
        content: [
          'Diese Modelle werden häufig angefragt, benötigen aber bei jeder Quantisierungsstufe mehr als 4 GB VRAM:',
          'Ein Upgrade auf 6 GB schaltet Llama 3 8B und Mistral 7B frei — die zwei beliebtesten lokalen Modelle. Siehe <a href="/de/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">beste lokale LLMs für 6 GB VRAM</a>. Für einen vollständigen Hardware-Vergleich, siehe <a href="/de/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">schnellste lokale LLMs für Low-End-PCs</a>.',
        ],
        items: [
          'Llama 3 8B — benötigt ~5,5 GB bei Q4_K_M (Minimum)',
          'Mistral 7B — benötigt ~4,5 GB bei Q4_K_M (marginal; riskant bei 4 GB mit Kontext-Overhead)',
          'Phi-4 (vollständig 14B) — benötigt ~9,8 GB',
          'Qwen 14B — benötigt ~9,5 GB bei Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu 4-GB-VRAM-Modellen',
        faqs: [
          {
            q: 'Reicht 4 GB VRAM für ein nützliches LLM?',
            a: 'Ja, für grundlegende Aufgaben. Phi-4 Mini bewältigt allgemeines Q&A und leichtes Coding mit ~25 Tok/s. Für längere Kontexte, mehrstufige Coding-Agenten oder Dokumentenanalyse ist 4 GB ein Engpass — upgraden Sie auf 6 GB oder mehr.',
          },
          {
            q: 'Kann ich Llama 3 mit 4 GB VRAM betreiben?',
            a: 'Nein. Llama 3 8B benötigt mindestens ~5,5 GB bei Q4_K_M. Llama 3.2 3B passt in ~2,5 GB, wenn Sie speziell eine Llama-Variante wollen. Siehe <a href="/de/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">den vollständigen VRAM-Anforderungsleitfaden</a>.',
          },
          {
            q: 'Welche GPU hat 4 GB VRAM?',
            a: 'RTX 3050 Ti (4 GB), GTX 1650 Super (4 GB) und AMD RX 6500 XT (4 GB) sind die häufigsten. Alle drei funktionieren mit Ollama — NVIDIA via CUDA, AMD via ROCm oder Vulkan.',
          },
          {
            q: 'Kann der CPU-only-Modus das 4-GB-VRAM-Limit umgehen?',
            a: 'Ja. Ohne GPU verwendet Llama 3 8B Q4 ~6 GB System-RAM und läuft mit 3–6 Tok/s auf einer modernen 8-Kern-CPU. Langsamer, funktioniert aber, wenn genug RAM vorhanden ist.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Meilleurs modèles Ollama pour 4 Go de VRAM ?',
    seoTitle: 'Ollama 4 Go VRAM modèles 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 Go de VRAM est serré. Phi-4 Mini Q4 (3,2 Go), Gemma 2 2B (1,5 Go), SmolLM 1.7B (1,0 Go). Llama 3 8B ne rentrera pas. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur modèle pour 4 Go de VRAM : Phi-4 Mini Q4 à ~3,2 Go — meilleure qualité à ce niveau',
          'Gemma 2 2B (1,5 Go) est l\'option la plus rapide ; SmolLM 1.7B (1,0 Go) est le plus petit',
          'Llama 3 8B ne rentre à aucune quantisation — il nécessite au moins 5,5 Go',
        ],
      },
      body1: {
        title: 'Ce qui tient dans 4 Go de VRAM',
        content: [
          'En mai 2026, <strong>avec 4 Go de VRAM, vous êtes limité aux modèles de 3 milliards de paramètres ou moins en quantisation Q4.</strong> Cela exclut tous les modèles locaux populaires — Llama 3 8B, Mistral 7B, Qwen 14B. Trois petits modèles modernes s\'en sortent étonnamment bien : Phi-4 Mini rivalise avec GPT-3.5 sur le suivi d\'instructions, Gemma 2 2B gère le chat rapide, et SmolLM 1.7B tourne sur des graphiques intégrés.',
          'Phi-4 Mini est le premier choix à ce niveau. Malgré sa petite taille, il gère les Q&R généraux, le code léger et la synthèse de documents à ~25 tokens par seconde. Gemma 2 2B est plus rapide pour le chat en une seule passe. SmolLM 1.7B est le repli si même Phi-4 Mini pousse votre VRAM trop près de la limite.',
        ],
        columns: ['Modèle', 'VRAM', 'Usage optimal'],
        rows: [
          { 'Modèle': 'Phi-4 Mini Q4', 'VRAM': '3,2 Go', 'Usage optimal': 'Meilleure qualité à 4 Go' },
          { 'Modèle': 'Gemma 2 2B Q4', 'VRAM': '1,5 Go', 'Usage optimal': 'Chat rapide en une passe' },
          { 'Modèle': 'SmolLM 1.7B Q4', 'VRAM': '1,0 Go', 'Usage optimal': 'Empreinte VRAM minimale' },
        ],
      },
      body2: {
        title: 'Ce qui ne tient pas dans 4 Go',
        content: [
          'Ces modèles sont souvent demandés mais nécessitent plus de 4 Go de VRAM à tous les niveaux de quantisation :',
          'Passer à 6 Go débloque Llama 3 8B et Mistral 7B — les deux modèles locaux les plus populaires. Voir <a href="/fr/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">les meilleurs LLM locaux pour 6 Go de VRAM</a>. Pour une comparaison matérielle complète, voir <a href="/fr/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">les LLM locaux les plus rapides pour PC d\'entrée de gamme</a>.',
        ],
        items: [
          'Llama 3 8B — nécessite ~5,5 Go en Q4_K_M (minimum)',
          'Mistral 7B — nécessite ~4,5 Go en Q4_K_M (marginal ; risqué à 4 Go avec la surcharge de contexte)',
          'Phi-4 (complet 14B) — nécessite ~9,8 Go',
          'Qwen 14B — nécessite ~9,5 Go en Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles 4 Go de VRAM',
        faqs: [
          {
            q: '4 Go de VRAM suffisent-ils pour un LLM utile ?',
            a: 'Oui, pour les tâches de base. Phi-4 Mini gère les Q&R généraux et le code léger à ~25 tok/s. Pour les contextes longs, les agents de code multi-étapes ou l\'analyse de documents, 4 Go est un goulot d\'étranglement — passez à 6 Go ou plus.',
          },
          {
            q: 'Puis-je faire tourner Llama 3 avec 4 Go de VRAM ?',
            a: 'Non. Llama 3 8B nécessite au moins ~5,5 Go en Q4_K_M. Llama 3.2 3B tient en ~2,5 Go si vous voulez spécifiquement une variante Llama. Voir <a href="/fr/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">le guide complet des besoins VRAM</a>.',
          },
          {
            q: 'Quel GPU a 4 Go de VRAM ?',
            a: 'RTX 3050 Ti (4 Go), GTX 1650 Super (4 Go) et AMD RX 6500 XT (4 Go) sont les plus courants. Les trois fonctionnent avec Ollama — NVIDIA via CUDA, AMD via ROCm ou Vulkan.',
          },
          {
            q: 'Le mode CPU uniquement peut-il contourner la limite de 4 Go de VRAM ?',
            a: 'Oui. Sans GPU, Llama 3 8B Q4 utilise ~6 Go de RAM système et tourne à 3–6 tok/s sur un processeur 8 cœurs moderne. Plus lent, mais fonctionne si vous avez suffisamment de RAM.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '4 GB VRAM向け最良Ollamaモデルは？',
    seoTitle: '4 GB VRAM最良Ollamaモデル 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB VRAMは制限がありますが使えます。Phi-4 Mini Q4（3.2 GB）、Gemma 2 2B（1.5 GB）、SmolLM 1.7B（1.0 GB）。Llama 3 8Bは収まりません。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB VRAMに最適なモデル：Phi-4 Mini Q4（~3.2 GB）— このティアで最高品質',
          'Gemma 2 2B（1.5 GB）が最速オプション；SmolLM 1.7B（1.0 GB）は最小',
          'Llama 3 8Bはどの量化でも収まりません — 最低5.5 GBが必要です',
        ],
      },
      body1: {
        title: '4 GB VRAMに何が収まるか',
        content: [
          '2026年5月現在、<strong>4 GB VRAMではQ4量化で30億パラメータ以下のモデルに制限されます。</strong>これはすべての主流のローカルモデル — Llama 3 8B、Mistral 7B、Qwen 14B — を除外します。3つのモダンな小型モデルが驚くほど良いパフォーマンスを発揮します：Phi-4 Miniは指示追従でGPT-3.5に匹敵し、Gemma 2 2Bは高速チャットを処理し、SmolLM 1.7Bは統合グラフィックスで動作します。',
          'Phi-4 Miniがこのティアの最有力候補です。小さいながらも、一般的なQ&A、軽度のコーディング、ドキュメント要約を~25トークン/秒で処理します。Gemma 2 2BはSingle-Turnチャットで速い。SmolLM 1.7BはPhi-4 Miniでさえメモリ制限に近すぎる場合のフォールバックです。',
        ],
        columns: ['モデル', 'VRAM', '最適な用途'],
        rows: [
          { 'モデル': 'Phi-4 Mini Q4', 'VRAM': '3.2 GB', '最適な用途': '4 GBで最高品質' },
          { 'モデル': 'Gemma 2 2B Q4', 'VRAM': '1.5 GB', '最適な用途': '高速なSingle-Turnチャット' },
          { 'モデル': 'SmolLM 1.7B Q4', 'VRAM': '1.0 GB', '最適な用途': '最小VRAMフットプリント' },
        ],
      },
      body2: {
        title: '4 GBに収まらないもの',
        content: [
          'よく要望されますが、すべての量化レベルで4 GB以上を必要とするモデル：',
          '6 GBへのアップグレードでLlama 3 8BとMistral 7B — 最も人気の2つのローカルモデル — が解放されます。<a href="/ja/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM向け最良ローカルLLM</a>を参照してください。ハードウェアの完全な比較については<a href="/ja/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">ローエンドPCの最速ローカルLLM</a>をご覧ください。',
        ],
        items: [
          'Llama 3 8B — Q4_K_Mで~5.5 GB必要（最小）',
          'Mistral 7B — Q4_K_Mで~4.5 GB必要（ギリギリ；コンテキストオーバーヘッドで4 GBでは危険）',
          'Phi-4（フル14B）— ~9.8 GB必要',
          'Qwen 14B — Q4_K_Mで~9.5 GB必要',
        ],
      },
      faq: {
        id: 'faq',
        title: '4 GB VRAMモデルに関するよくある質問',
        faqs: [
          {
            q: '4 GB VRAMは役立つLLMに十分ですか？',
            a: 'はい、基本的なタスクには。Phi-4 Miniは~25トークン/秒で一般的なQ&Aと軽度のコーディングを処理します。長いコンテキスト、複数ステップのコーディングエージェント、またはドキュメント分析には4 GBがボトルネックになります — 6 GB以上にアップグレードしてください。',
          },
          {
            q: '4 GB VRAMでLlama 3を動かせますか？',
            a: 'いいえ。Llama 3 8BはQ4_K_Mで最低~5.5 GBが必要です。Llamaバリアントが必要な場合、Llama 3.2 3Bは~2.5 GBに収まります。<a href="/ja/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">完全なVRAM要件ガイド</a>を参照してください。',
          },
          {
            q: '4 GB VRAMのGPUはどれですか？',
            a: 'RTX 3050 Ti（4 GB）、GTX 1650 Super（4 GB）、AMD RX 6500 XT（4 GB）が最も一般的です。3つすべてOllamaで動作します — NVIDIAはCUDA経由、AMDはROCmまたはVulkan経由。',
          },
          {
            q: 'CPU-onlyモードは4 GB VRAMの制限を回避できますか？',
            a: 'はい。GPUなしで、Llama 3 8B Q4は~6 GBのシステムRAMを使用し、現代的な8コアCPUで3–6トークン/秒で動作します。遅いですが、十分なRAMがあれば動作します。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '4 GB显存最佳Ollama模型？',
    seoTitle: '4 GB显存最佳Ollama模型 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB显存很紧张。Phi-4 Mini Q4（3.2 GB）、Gemma 2 2B（1.5 GB）、SmolLM 1.7B（1.0 GB）。Llama 3 8B不适合。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB显存最佳模型：Phi-4 Mini Q4（约3.2 GB）——该层级最高质量',
          'Gemma 2 2B（1.5 GB）是最快选项；SmolLM 1.7B（1.0 GB）是最小的',
          'Llama 3 8B在任何量化下都不适合——至少需要5.5 GB',
        ],
      },
      body1: {
        title: '4 GB显存能装什么',
        content: [
          '截至2026年5月，<strong>4 GB显存下您只能使用Q4量化的30亿参数或更少的模型。</strong>这排除了所有主流本地模型——Llama 3 8B、Mistral 7B、Qwen 14B。三款现代小型模型表现出色：Phi-4 Mini在指令执行上与GPT-3.5相当，Gemma 2 2B处理快速聊天，SmolLM 1.7B可在集成显卡上运行。',
          'Phi-4 Mini是该层级的首选。尽管体积小，它能以约25 tok/s处理通用问答、轻度编程和文档摘要。Gemma 2 2B在单轮聊天中更快。SmolLM 1.7B是Phi-4 Mini也让显存太接近上限时的备选方案。',
        ],
        columns: ['模型', '显存', '适用场景'],
        rows: [
          { '模型': 'Phi-4 Mini Q4', '显存': '3.2 GB', '适用场景': '4 GB下最高质量' },
          { '模型': 'Gemma 2 2B Q4', '显存': '1.5 GB', '适用场景': '快速单轮聊天' },
          { '模型': 'SmolLM 1.7B Q4', '显存': '1.0 GB', '适用场景': '最小显存占用' },
        ],
      },
      body2: {
        title: '4 GB装不下的模型',
        content: [
          '以下模型经常被问到，但在所有量化级别下都需要超过4 GB显存：',
          '升级到6 GB可解锁Llama 3 8B和Mistral 7B——两款最流行的本地模型。参阅<a href="/zh/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB显存最佳本地LLM</a>。完整硬件比较请参阅<a href="/zh/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">低端PC最快本地LLM</a>。',
        ],
        items: [
          'Llama 3 8B——Q4_K_M至少需要约5.5 GB',
          'Mistral 7B——Q4_K_M需要约4.5 GB（勉强；带上下文开销在4 GB下有风险）',
          'Phi-4（完整14B）——需要约9.8 GB',
          'Qwen 14B——Q4_K_M需要约9.5 GB',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于4 GB显存模型的常见问题',
        faqs: [
          {
            q: '4 GB显存足够运行有用的LLM吗？',
            a: '对于基础任务足够。Phi-4 Mini以约25 tok/s处理通用问答和轻度编程。对于长上下文、多步骤编程代理或文档分析，4 GB是瓶颈——升级到6 GB或更多。',
          },
          {
            q: '4 GB显存能运行Llama 3吗？',
            a: '不能。Llama 3 8B在Q4_K_M下至少需要约5.5 GB。如果特别想要Llama变体，Llama 3.2 3B需约2.5 GB。参阅<a href="/zh/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">完整显存需求指南</a>。',
          },
          {
            q: '哪些GPU有4 GB显存？',
            a: 'RTX 3050 Ti（4 GB）、GTX 1650 Super（4 GB）和AMD RX 6500 XT（4 GB）最为常见。三者均可与Ollama配合使用——NVIDIA通过CUDA，AMD通过ROCm或Vulkan。',
          },
          {
            q: '仅CPU模式能绕过4 GB显存限制吗？',
            a: '可以。不使用GPU时，Llama 3 8B Q4使用约6 GB系统内存，在现代8核CPU上以3–6 tok/s运行。速度较慢，但如果有足够内存则可用。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Mejores modelos Ollama para 4 GB de VRAM?',
    seoTitle: 'Modelos Ollama para 4 GB VRAM 2026 | PromptQuorum',
    metaDescription: '4 GB de VRAM es ajustado. Phi-4 Mini Q4 (3,2 GB), Gemma 2 2B (1,5 GB), SmolLM 1.7B (1,0 GB). Llama 3 8B no cabe. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Mejores modelos Ollama para 4 GB de VRAM?',
        answer: '4 GB de VRAM es ajustado pero utilizable con modelos pequeños como Phi-4 Mini Q4 (~3,2 GB), Gemma 2 2B (~1,5 GB) y SmolLM 1.7B (~1,0 GB). Llama 3 8B no cabe.',
        bullets: [
          'Phi-4 Mini Q4: mejor calidad en 4 GB (3,2 GB VRAM)',
          'Gemma 2 2B: rápido y ligero (1,5 GB)',
          'SmolLM 1.7B: huella VRAM mínima (1,0 GB)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor para 4 GB VRAM: Phi-4 Mini Q4 con ~3,2 GB — la mayor calidad en este rango',
          'Gemma 2 2B (1,5 GB) es la opción más rápida; SmolLM 1.7B (1,0 GB) es la más pequeña',
          'Llama 3 8B no cabe en ninguna cuantización — necesita 5,5 GB como mínimo',
        ],
      },
      body1: {
        title: 'Qué cabe en 4 GB de VRAM',
        content: [
          'A mayo de 2026, <strong>con 4 GB de VRAM estás limitado a modelos con 3.000 millones de parámetros o menos en cuantización Q4.</strong> Esto descarta todos los modelos locales populares — Llama 3 8B, Mistral 7B, Qwen 14B. Tres modelos pequeños modernos rinden sorprendentemente bien: Phi-4 Mini iguala a GPT-3.5 en seguimiento de instrucciones, Gemma 2 2B gestiona chat rápido, y SmolLM 1.7B funciona en gráficos integrados.',
          'Phi-4 Mini es la mejor opción en este rango. A pesar de su pequeño tamaño, maneja preguntas generales, código ligero y resumen de documentos a ~25 tokens por segundo. Gemma 2 2B es más rápido para chat de un solo turno. SmolLM 1.7B es la alternativa si incluso Phi-4 Mini acerca tu VRAM demasiado al límite.',
        ],
        columns: ['Modelo', 'VRAM', 'Mejor para'],
        rows: [
          { 'Modelo': 'Phi-4 Mini Q4', 'VRAM': '3,2 GB', 'Mejor para': 'Mejor calidad en 4 GB' },
          { 'Modelo': 'Gemma 2 2B Q4', 'VRAM': '1,5 GB', 'Mejor para': 'Chat rápido de un turno' },
          { 'Modelo': 'SmolLM 1.7B Q4', 'VRAM': '1,0 GB', 'Mejor para': 'Huella VRAM mínima' },
        ],
      },
      body2: {
        title: 'Qué no cabe en 4 GB',
        content: [
          'Estos modelos se solicitan frecuentemente pero requieren más de 4 GB de VRAM en todos los niveles de cuantización:',
          'Actualizar a 6 GB desbloquea Llama 3 8B y Mistral 7B — los dos modelos locales más populares. Consulta <a href="/es/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">los mejores LLMs locales para 6 GB de VRAM</a>. Para una comparación completa de hardware, consulta <a href="/es/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">los LLMs locales más rápidos para PCs de gama baja</a>.',
        ],
        items: [
          'Llama 3 8B — necesita ~5,5 GB en Q4_K_M (mínimo)',
          'Mistral 7B — necesita ~4,5 GB en Q4_K_M (marginal; arriesgado en 4 GB con sobrecarga de contexto)',
          'Phi-4 (completo 14B) — necesita ~9,8 GB',
          'Qwen 14B — necesita ~9,5 GB en Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos con 4 GB de VRAM',
        faqs: [
          {
            q: '¿Son suficientes 4 GB de VRAM para un LLM útil?',
            a: 'Sí, para tareas básicas. Phi-4 Mini maneja preguntas generales y código ligero a ~25 tok/s. Para contextos largos, agentes de código de múltiples pasos o análisis de documentos, 4 GB es un cuello de botella — actualiza a 6 GB o más.',
          },
          {
            q: '¿Puedo ejecutar Llama 3 con 4 GB de VRAM?',
            a: 'No. Llama 3 8B necesita ~5,5 GB en Q4_K_M como mínimo. Llama 3.2 3B cabe en ~2,5 GB si quieres específicamente una variante Llama. Consulta <a href="/es/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">la guía completa de requisitos de VRAM</a>.',
          },
          {
            q: '¿Qué GPU tiene 4 GB de VRAM?',
            a: 'RTX 3050 Ti (4 GB), GTX 1650 Super (4 GB) y AMD RX 6500 XT (4 GB) son las más comunes. Las tres funcionan con Ollama — NVIDIA vía CUDA, AMD vía ROCm o Vulkan.',
          },
          {
            q: '¿Puede el modo solo-CPU superar el límite de 4 GB de VRAM?',
            a: 'Sí. Sin GPU, Llama 3 8B Q4 usa ~6 GB de RAM del sistema y funciona a 3–6 tok/s en una CPU moderna de 8 núcleos. Es más lento, pero funciona si tienes suficiente RAM.',
          },
        ],
      },
    },
  },
}
