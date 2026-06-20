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
          'As of May 2026, <strong>at 4 GB VRAM you are limited to models with 3 billion parameters or fewer at Q4 quantization.</strong> This rules out every mainstream local model — Llama 3 8B, Mistral Small, Qwen 14B. Three modern small models perform surprisingly well: Phi-4 Mini approaches GPT-5.5 mini on instruction following, Gemma 2 2B handles fast chat, and SmolLM 1.7B runs on integrated graphics.',
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
          'Upgrading to 6 GB unlocks Llama 3 8B and Mistral Small — the two most popular local models. See the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best local LLMs for 6 GB VRAM</a>. For a full hardware comparison, see <a href="/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">fastest local LLMs for low-end PCs</a>.',
        ],
        items: [
          'Llama 3 8B — needs ~5.5 GB at Q4_K_M (minimum)',
          'Mistral Small — needs ~4.5 GB at Q4_K_M (marginal; risky at 4 GB with context overhead)',
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
          'Stand Mai 2026: <strong>Mit 4 GB VRAM sind Sie auf Modelle mit 3 Milliarden Parametern oder weniger bei Q4-Quantisierung beschränkt.</strong> Das schließt alle gängigen lokalen Modelle aus — Llama 3 8B, Mistral Small, Qwen 14B. Drei moderne kleine Modelle performen überraschend gut: Phi-4 Mini entspricht GPT-4o mini bei Instruction Following, Gemma 2 2B bewältigt schnellen Chat und SmolLM 1.7B läuft auf integrierten Grafiken.',
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
          'Ein Upgrade auf 6 GB schaltet Llama 3 8B und Mistral Small frei — die zwei beliebtesten lokalen Modelle. Siehe <a href="/de/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">beste lokale LLMs für 6 GB VRAM</a>. Für einen vollständigen Hardware-Vergleich, siehe <a href="/de/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">schnellste lokale LLMs für Low-End-PCs</a>.',
        ],
        items: [
          'Llama 3 8B — benötigt ~5,5 GB bei Q4_K_M (Minimum)',
          'Mistral Small — benötigt ~4,5 GB bei Q4_K_M (marginal; riskant bei 4 GB mit Kontext-Overhead)',
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
          'En mai 2026, <strong>avec 4 Go de VRAM, vous êtes limité aux modèles de 3 milliards de paramètres ou moins en quantisation Q4.</strong> Cela exclut tous les modèles locaux populaires — Llama 3 8B, Mistral Small, Qwen 14B. Trois petits modèles modernes s\'en sortent étonnamment bien : Phi-4 Mini rivalise avec GPT-4o mini sur le suivi d\'instructions, Gemma 2 2B gère le chat rapide, et SmolLM 1.7B tourne sur des graphiques intégrés.',
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
          'Passer à 6 Go débloque Llama 3 8B et Mistral Small — les deux modèles locaux les plus populaires. Voir <a href="/fr/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">les meilleurs LLM locaux pour 6 Go de VRAM</a>. Pour une comparaison matérielle complète, voir <a href="/fr/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">les LLM locaux les plus rapides pour PC d\'entrée de gamme</a>.',
        ],
        items: [
          'Llama 3 8B — nécessite ~5,5 Go en Q4_K_M (minimum)',
          'Mistral Small — nécessite ~4,5 Go en Q4_K_M (marginal ; risqué à 4 Go avec la surcharge de contexte)',
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
          '2026年5月現在、<strong>4 GB VRAMではQ4量化で30億パラメータ以下のモデルに制限されます。</strong>これはすべての主流のローカルモデル — Llama 3 8B、Mistral Small、Qwen 14B — を除外します。3つのモダンな小型モデルが驚くほど良いパフォーマンスを発揮します：Phi-4 Miniは指示追従でGPT-4o miniに匹敵し、Gemma 2 2Bは高速チャットを処理し、SmolLM 1.7Bは統合グラフィックスで動作します。',
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
          '6 GBへのアップグレードでLlama 3 8BとMistral Small — 最も人気の2つのローカルモデル — が解放されます。<a href="/ja/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM向け最良ローカルLLM</a>を参照してください。ハードウェアの完全な比較については<a href="/ja/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">ローエンドPCの最速ローカルLLM</a>をご覧ください。',
        ],
        items: [
          'Llama 3 8B — Q4_K_Mで~5.5 GB必要（最小）',
          'Mistral Small — Q4_K_Mで~4.5 GB必要（ギリギリ；コンテキストオーバーヘッドで4 GBでは危険）',
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
          '截至2026年5月，<strong>4 GB显存下您只能使用Q4量化的30亿参数或更少的模型。</strong>这排除了所有主流本地模型——Llama 3 8B、Mistral Small、Qwen 14B。三款现代小型模型表现出色：Phi-4 Mini在指令执行上与GPT-4o mini相当，Gemma 2 2B处理快速聊天，SmolLM 1.7B可在集成显卡上运行。',
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
          '升级到6 GB可解锁Llama 3 8B和Mistral Small——两款最流行的本地模型。参阅<a href="/zh/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB显存最佳本地LLM</a>。完整硬件比较请参阅<a href="/zh/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">低端PC最快本地LLM</a>。',
        ],
        items: [
          'Llama 3 8B——Q4_K_M至少需要约5.5 GB',
          'Mistral Small——Q4_K_M需要约4.5 GB（勉强；带上下文开销在4 GB下有风险）',
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
          'A mayo de 2026, <strong>con 4 GB de VRAM estás limitado a modelos con 3.000 millones de parámetros o menos en cuantización Q4.</strong> Esto descarta todos los modelos locales populares — Llama 3 8B, Mistral Small, Qwen 14B. Tres modelos pequeños modernos rinden sorprendentemente bien: Phi-4 Mini iguala a GPT-4o mini en seguimiento de instrucciones, Gemma 2 2B gestiona chat rápido, y SmolLM 1.7B funciona en gráficos integrados.',
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
          'Actualizar a 6 GB desbloquea Llama 3 8B y Mistral Small — los dos modelos locales más populares. Consulta <a href="/es/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">los mejores LLMs locales para 6 GB de VRAM</a>. Para una comparación completa de hardware, consulta <a href="/es/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">los LLMs locales más rápidos para PCs de gama baja</a>.',
        ],
        items: [
          'Llama 3 8B — necesita ~5,5 GB en Q4_K_M (mínimo)',
          'Mistral Small — necesita ~4,5 GB en Q4_K_M (marginal; arriesgado en 4 GB con sobrecarga de contexto)',
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
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Melhores modelos Ollama para 4 GB de VRAM?',
    seoTitle: 'Modelos Ollama para 4 GB VRAM 2026 | PromptQuorum',
    metaDescription: '4 GB de VRAM é justo. Phi-4 Mini Q4 (3,2 GB), Gemma 2 2B (1,5 GB), SmolLM 1.7B (1,0 GB). Llama 3 8B não cabe. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Melhores modelos Ollama para 4 GB de VRAM?',
        answer: '4 GB de VRAM é justo mas utilizável com modelos pequenos como Phi-4 Mini Q4 (~3,2 GB), Gemma 2 2B (~1,5 GB) e SmolLM 1.7B (~1,0 GB). Llama 3 8B não cabe.',
        bullets: [
          'Phi-4 Mini Q4: melhor qualidade em 4 GB (3,2 GB VRAM)',
          'Gemma 2 2B: rápido e leve (1,5 GB)',
          'SmolLM 1.7B: menor ocupação de VRAM (1,0 GB)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor para 4 GB VRAM: Phi-4 Mini Q4 com ~3,2 GB — maior qualidade neste nível',
          'Gemma 2 2B (1,5 GB) é a opção mais rápida; SmolLM 1.7B (1,0 GB) é a menor',
          'Llama 3 8B não cabe em nenhuma quantização — precisa de 5,5 GB no mínimo',
        ],
      },
      body1: {
        title: 'O que cabe em 4 GB de VRAM',
        content: [
          'Em maio de 2026, <strong>com 4 GB de VRAM você está limitado a modelos com 3 bilhões de parâmetros ou menos em quantização Q4.</strong> Isso exclui todos os modelos locais populares — Llama 3 8B, Mistral Small, Qwen 14B. Três modelos pequenos modernos apresentam desempenho surpreendentemente bom: Phi-4 Mini iguala ao GPT-4o mini no seguimento de instruções, Gemma 2 2B lida com chat rápido e SmolLM 1.7B funciona em gráficos integrados.',
          'Phi-4 Mini é a melhor escolha neste nível. Apesar do tamanho pequeno, ele lida com Q&A geral, codificação leve e resumo de documentos a ~25 tokens por segundo. Gemma 2 2B é mais rápido para chat de turno único. SmolLM 1.7B é a alternativa se mesmo o Phi-4 Mini deixar sua VRAM muito perto do limite.',
        ],
        columns: ['Modelo', 'VRAM', 'Melhor para'],
        rows: [
          { 'Modelo': 'Phi-4 Mini Q4', 'VRAM': '3,2 GB', 'Melhor para': 'Melhor qualidade em 4 GB' },
          { 'Modelo': 'Gemma 2 2B Q4', 'VRAM': '1,5 GB', 'Melhor para': 'Chat rápido de turno único' },
          { 'Modelo': 'SmolLM 1.7B Q4', 'VRAM': '1,0 GB', 'Melhor para': 'Menor ocupação de VRAM' },
        ],
      },
      body2: {
        title: 'O que não cabe em 4 GB',
        content: [
          'Estes modelos são frequentemente solicitados, mas requerem mais de 4 GB de VRAM em todos os níveis de quantização:',
          'Atualizar para 6 GB desbloqueia Llama 3 8B e Mistral Small — os dois modelos locais mais populares. Veja os <a href="/pt/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">melhores LLMs locais para 6 GB de VRAM</a>. Para uma comparação completa de hardware, veja os <a href="/pt/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">LLMs locais mais rápidos para PCs de baixo custo</a>.',
        ],
        items: [
          'Llama 3 8B — precisa de ~5,5 GB em Q4_K_M (mínimo)',
          'Mistral Small — precisa de ~4,5 GB em Q4_K_M (marginal; arriscado em 4 GB com sobrecarga de contexto)',
          'Phi-4 (completo 14B) — precisa de ~9,8 GB',
          'Qwen 14B — precisa de ~9,5 GB em Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos com 4 GB de VRAM',
        faqs: [
          {
            q: '4 GB de VRAM é suficiente para um LLM útil?',
            a: 'Sim, para tarefas básicas. Phi-4 Mini lida com Q&A geral e codificação leve a ~25 tok/s. Para contextos longos, agentes de codificação em múltiplas etapas ou análise de documentos, 4 GB é um gargalo — atualize para 6 GB ou mais.',
          },
          {
            q: 'Posso executar Llama 3 com 4 GB de VRAM?',
            a: 'Não. Llama 3 8B precisa de ~5,5 GB em Q4_K_M no mínimo. Llama 3.2 3B cabe em ~2,5 GB se você quiser especificamente uma variante Llama. Veja <a href="/pt/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">o guia completo de requisitos de VRAM</a>.',
          },
          {
            q: 'Qual GPU tem 4 GB de VRAM?',
            a: 'RTX 3050 Ti (4 GB), GTX 1650 Super (4 GB) e AMD RX 6500 XT (4 GB) são as mais comuns. As três funcionam com Ollama — NVIDIA via CUDA, AMD via ROCm ou Vulkan.',
          },
          {
            q: 'O modo somente-CPU pode contornar o limite de 4 GB de VRAM?',
            a: 'Sim. Sem GPU, Llama 3 8B Q4 usa ~6 GB de RAM do sistema e funciona a 3–6 tok/s em uma CPU moderna de 8 núcleos. É mais lento, mas funciona se você tiver RAM suficiente.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'أفضل نماذج ⁨Ollama⁩ لـ⁨4 GB VRAM⁩؟',
    seoTitle: '⁨Ollama⁩ بـ⁨4 GB VRAM⁩: أفضل النماذج ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: '⁨4 GB VRAM⁩ تتسع لـ⁨Phi-4 Mini Q4⁩ (⁨3.2 GB⁩) و⁨Gemma 2 2B⁩ (⁨1.5 GB⁩) و⁨SmolLM 1.7B⁩ (⁨1.0 GB⁩). أما ⁨Llama 3 8B⁩ فيحتاج ⁨5.5 GB⁩ ولا يتسع.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama لـ4 GB VRAM؟',
        answer: '4 GB VRAM ضيّقة لكن قابلة للاستخدام مع نماذج صغيرة كـPhi-4 Mini Q4 (~3.2 GB) وGemma 2 2B (~1.5 GB) وSmolLM 1.7B (~1.0 GB). Llama 3 8B لا يتسع.',
        bullets: [
          'Phi-4 Mini Q4: أفضل جودة في 4 GB (3.2 GB VRAM)',
          'Gemma 2 2B: سريع وخفيف (1.5 GB)',
          'SmolLM 1.7B: أدنى استهلاك VRAM (1.0 GB)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل لـ4 GB VRAM: Phi-4 Mini Q4 بـ~3.2 GB — أعلى جودة في هذا النطاق',
          'Gemma 2 2B (1.5 GB) هو الخيار الأسرع؛ SmolLM 1.7B (1.0 GB) هو الأصغر',
          'Llama 3 8B لا يتسع في أي تكميم — يحتاج 5.5 GB كحد أدنى',
        ],
      },
      body1: {
        title: 'ما يتسع في 4 GB VRAM',
        content: [
          'اعتباراً من مايو 2026، <strong>مع 4 GB VRAM أنت محدود بنماذج بـ3 مليارات معامل أو أقل في تكميم Q4.</strong> هذا يستبعد جميع النماذج المحلية الشائعة — Llama 3 8B وMistral Small وQwen 14B. ثلاثة نماذج صغيرة حديثة تؤدي أداءً مفاجئاً جيداً: Phi-4 Mini يعادل GPT-4o mini في اتباع التعليمات، وGemma 2 2B يتعامل مع الدردشة السريعة، وSmolLM 1.7B يعمل على الرسوميات المدمجة.',
          'Phi-4 Mini هو الخيار الأمثل في هذا النطاق. رغم صغر حجمه، يتعامل مع الأسئلة العامة والبرمجة الخفيفة وتلخيص المستندات بـ~25 رمز/ثانية. Gemma 2 2B أسرع للدردشة أحادية الدور. SmolLM 1.7B هو البديل إذا كان حتى Phi-4 Mini يقرّب VRAM لديك من الحد.',
        ],
        columns: ['النموذج', 'VRAM', 'الأفضل لـ'],
        rows: [
          { 'النموذج': 'Phi-4 Mini Q4', 'VRAM': '3.2 GB', 'الأفضل لـ': 'أفضل جودة في 4 GB' },
          { 'النموذج': 'Gemma 2 2B Q4', 'VRAM': '1.5 GB', 'الأفضل لـ': 'دردشة سريعة أحادية الدور' },
          { 'النموذج': 'SmolLM 1.7B Q4', 'VRAM': '1.0 GB', 'الأفضل لـ': 'أدنى استهلاك VRAM' },
        ],
      },
      body2: {
        title: 'ما لا يتسع في 4 GB',
        content: [
          'هذه النماذج تُطلب كثيراً لكنها تحتاج أكثر من 4 GB VRAM في جميع مستويات التكميم:',
          'الترقية إلى 6 GB تتيح Llama 3 8B وMistral Small — أكثر النماذج المحلية شعبية. راجع <a href="/ar/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">أفضل نماذج اللغة الكبيرة المحلية لـ6 GB VRAM</a>. للمقارنة الشاملة للعتاد، راجع <a href="/ar/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">أسرع نماذج اللغة الكبيرة المحلية للحواسيب منخفضة المستوى</a>.',
        ],
        items: [
          'Llama 3 8B — يحتاج ~5.5 GB في Q4_K_M (الحد الأدنى)',
          'Mistral Small — يحتاج ~4.5 GB في Q4_K_M (هامشي؛ محفوف بالمخاطر في 4 GB مع تكلفة السياق)',
          'Phi-4 (14B كامل) — يحتاج ~9.8 GB',
          'Qwen 14B — يحتاج ~9.5 GB في Q4_K_M',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول النماذج بـ4 GB VRAM',
        faqs: [
          {
            q: 'هل 4 GB VRAM كافٍ لنموذج لغة كبير مفيد؟',
            a: 'نعم، للمهام الأساسية. Phi-4 Mini يتعامل مع الأسئلة العامة والبرمجة الخفيفة بـ~25 رمز/ثانية. للسياقات الطويلة أو وكلاء البرمجة متعددة الخطوات أو تحليل المستندات، 4 GB هو عنق الزجاجة — قم بالترقية إلى 6 GB أو أكثر.',
          },
          {
            q: 'هل يمكنني تشغيل Llama 3 بـ4 GB VRAM؟',
            a: 'لا. Llama 3 8B يحتاج ~5.5 GB في Q4_K_M كحد أدنى. Llama 3.2 3B يتسع في ~2.5 GB إذا أردت تحديداً متغيراً Llama. راجع <a href="/ar/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">الدليل الشامل لمتطلبات VRAM</a>.',
          },
          {
            q: 'ما بطاقات GPU التي تحتوي 4 GB VRAM؟',
            a: 'RTX 3050 Ti (4 GB) وGTX 1650 Super (4 GB) وAMD RX 6500 XT (4 GB) هي الأكثر شيوعاً. الثلاثة تعمل مع Ollama — NVIDIA عبر CUDA وAMD عبر ROCm أو Vulkan.',
          },
          {
            q: 'هل يمكن لوضع CPU فقط تجاوز حد 4 GB VRAM؟',
            a: 'نعم. بدون GPU، Llama 3 8B Q4 يستخدم ~6 GB من RAM النظام ويعمل بـ3–6 رمز/ثانية على CPU حديثة 8 أنوية. أبطأ، لكنه يعمل إذا كانت لديك RAM كافية.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    title: '4GB VRAM에 최적화된 Ollama 모델은?',
    seoTitle: 'Ollama 4GB VRAM 모델 2026 | PromptQuorum',
    metaDescription: '4GB VRAM은 좁지만 사용 가능합니다. Phi-4 Mini Q4 (3.2GB), Gemma 2 2B (1.5GB), SmolLM 1.7B (1.0GB). Llama 3 8B는 들어가지 않습니다. PromptQuorum의 빠른 답변.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ko: {
        question: '4GB VRAM에 최적화된 Ollama 모델은 무엇입니까?',
        answer: '4GB VRAM은 제한적이지만 Phi-4 Mini Q4 (~3.2GB), Gemma 2 2B (~1.5GB), SmolLM 1.7B (~1.0GB) 같은 소형 모델과 함께 사용 가능합니다. Llama 3 8B는 탑재되지 않습니다.',
        bullets: [
          'Phi-4 Mini Q4: 4GB에서 최고 품질 (3.2GB VRAM)',
          'Gemma 2 2B: 빠르고 경량 (1.5GB)',
          'SmolLM 1.7B: 최소 VRAM 점유 (1.0GB)',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4GB VRAM 최적 모델: Phi-4 Mini Q4 (~3.2GB) — 이 등급에서 가장 높은 품질',
          'Gemma 2 2B (1.5GB)는 가장 빠른 옵션이며, SmolLM 1.7B (1.0GB)는 가장 소형',
          'Llama 3 8B는 어떤 양자화에서도 탑재 불가 — 최소 5.5GB가 필요합니다',
        ],
      },
      body1: {
        title: '4GB VRAM에 탑재 가능한 모델',
        content: [
          '2026년 5월 기준, <strong>4GB VRAM에서는 Q4 양자화 기준 30억 개 이하의 파라미터를 가진 모델로 제한됩니다.</strong> 이는 모든 주류 로컬 모델 — Llama 3 8B, Mistral Small, Qwen 14B — 을 배제합니다. 세 가지 최신 소형 모델이 놀라울 정도로 우수한 성능을 발휘합니다: Phi-4 Mini는 지시 수행에서 GPT-4o mini에 필적하고, Gemma 2 2B는 빠른 채팅을 처리하며, SmolLM 1.7B는 내장 그래픽에서도 동작합니다.',
          'Phi-4 Mini가 이 등급에서 최우선 선택입니다. 소형임에도 일반 Q&A, 경량 코딩, 문서 요약을 초당 약 25 토큰 속도로 처리합니다. Gemma 2 2B는 단일 대화 채팅에서 더 빠릅니다. SmolLM 1.7B는 Phi-4 Mini조차 VRAM 한계에 너무 근접할 때의 대안입니다.',
        ],
        columns: ['모델', 'VRAM', '최적 용도'],
        rows: [
          { '모델': 'Phi-4 Mini Q4', 'VRAM': '3.2 GB', '최적 용도': '4GB에서 최고 품질' },
          { '모델': 'Gemma 2 2B Q4', 'VRAM': '1.5 GB', '최적 용도': '빠른 단일 대화 채팅' },
          { '모델': 'SmolLM 1.7B Q4', 'VRAM': '1.0 GB', '최적 용도': '최소 VRAM 점유' },
        ],
      },
      body2: {
        title: '4GB에 탑재되지 않는 모델',
        content: [
          '다음 모델들은 자주 요청되지만 모든 양자화 수준에서 4GB VRAM을 초과합니다:',
          '6GB로 업그레이드하면 Llama 3 8B와 Mistral Small — 가장 인기 있는 두 로컬 모델 — 을 사용할 수 있습니다. <a href="/ko/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6GB VRAM 최적 로컬 LLM</a>을 참조하십시오. 전체 하드웨어 비교는 <a href="/ko/local-llms/fastest-local-llms-low-end-pcs" class="text-primary hover:underline">저사양 PC용 최속 로컬 LLM</a>을 참조하십시오.',
        ],
        items: [
          'Llama 3 8B — Q4_K_M에서 최소 ~5.5GB 필요',
          'Mistral Small — Q4_K_M에서 ~4.5GB 필요 (한계적; 컨텍스트 오버헤드로 4GB에서 위험)',
          'Phi-4 (전체 14B) — ~9.8GB 필요',
          'Qwen 14B — Q4_K_M에서 ~9.5GB 필요',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '4GB VRAM에서는 Q4 양자화 기준 Phi-4 Mini Q4 (3.2GB), Gemma 2 2B (1.5GB), SmolLM 1.7B (1.0GB)만 탑재 가능합니다.',
          },
          {
            type: 'plain-terms',
            text: '4GB VRAM GPU를 보유하고 있다면 Phi-4 Mini Q4가 최선의 선택입니다. Gemma 2 2B는 더 빠르고, SmolLM 1.7B는 더 작습니다. Llama 3 8B는 최소 5.5GB가 필요하므로 탑재가 불가합니다.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '4GB VRAM 모델에 관한 자주 묻는 질문',
        faqs: [
          {
            q: '4GB VRAM으로 유용한 LLM을 실행할 수 있습니까?',
            a: '예, 기본 작업에는 충분합니다. Phi-4 Mini는 초당 약 25 토큰으로 일반 Q&A와 경량 코딩을 처리합니다. 긴 컨텍스트, 다단계 코딩 에이전트, 문서 분석에는 4GB가 병목이 됩니다 — 6GB 이상으로 업그레이드하십시오.',
          },
          {
            q: '4GB VRAM으로 Llama 3를 실행할 수 있습니까?',
            a: '불가합니다. Llama 3 8B는 Q4_K_M에서 최소 ~5.5GB가 필요합니다. Llama 변형을 원하신다면 Llama 3.2 3B가 ~2.5GB에 탑재됩니다. <a href="/ko/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">전체 VRAM 요구사항 가이드</a>를 참조하십시오.',
          },
          {
            q: '4GB VRAM을 갖춘 GPU는 어떤 것이 있습니까?',
            a: 'RTX 3050 Ti (4GB), GTX 1650 Super (4GB), AMD RX 6500 XT (4GB)가 가장 일반적입니다. 세 가지 모두 Ollama와 호환됩니다 — NVIDIA는 CUDA, AMD는 ROCm 또는 Vulkan을 통해 지원합니다.',
          },
          {
            q: 'CPU 전용 모드로 4GB VRAM 제한을 우회할 수 있습니까?',
            a: '예. GPU 없이 Llama 3 8B Q4는 시스템 RAM 약 6GB를 사용하며 현대적인 8코어 CPU에서 초당 3–6 토큰으로 동작합니다. 속도가 느리지만 충분한 RAM이 있으면 작동합니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[6GB VRAM 최적 로컬 LLM](/ko/prompt-bites/best-local-llm-6gb-vram)',
          '[VRAM 요구사항 전체 가이드](/ko/prompt-bites/how-much-vram-for-local-llm)',
          '[저사양 PC용 최속 로컬 LLM](/ko/local-llms/fastest-local-llms-low-end-pcs)',
        ],
      },
    },
  },
}
