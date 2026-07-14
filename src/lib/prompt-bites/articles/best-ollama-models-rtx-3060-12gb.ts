import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Ollama Models for RTX 3060 12 GB?',
    dateModified: '2026-06-20',
    seoTitle: 'Best Ollama Models for RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Qwen3 7B (7 GB VRAM, 40 tok/s) for general tasks, Phi-4 Q4_K_M for reasoning, Mistral Nemo 12B for chat. All run at 30–50 tok/s. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    current_models_mentioned: ['Qwen3 7B', 'Phi-4', 'Mistral Nemo 12B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama on an RTX 3060',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-6gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for RTX 3060 12 GB?',
        answer: 'The best Ollama models for an RTX 3060 12 GB are **Qwen3 7B** (general tasks, 7 GB VRAM), **Phi-4** in Q4_K_M (reasoning, ~9 GB VRAM), and **Mistral Nemo 12B** (8 GB VRAM). All run at 30–50 tokens/second on this GPU.',
        bullets: [
          'Qwen3 7B: best general purpose on RTX 3060 — 7 GB VRAM, 30–50 tok/s',
          'Phi-4 Q4_K_M: best for reasoning and coding — ~9 GB VRAM',
          'Mistral Nemo 12B: strong chat alternative — 8 GB VRAM',
        ],
        updatedDate: '2026-06-19',
      },
      de: {
        question: 'Beste Ollama-Modelle für RTX 3060 12 GB?',
        answer: 'Mit 12 GB VRAM ist das beste Allzweckmodell Llama 3 8B bei Q5_K_M, liefert 20-30 Tokens pro Sekunde mit ausgewogener Qualität. Für Coding verwenden Sie Qwen 3 Coder 14B bei Q4_K_M. Beide laufen mit 20–30 Token pro Sekunde.',
        bullets: [
          'Llama 3 8B Q5_K_M: bestes Allzweckmodell für RTX 3060',
          'Qwen 3 Coder 14B Q4_K_M: beste Wahl für Coding',
          'Mistral Small Q6_K: schnelle Alternative für Chat',
        ],
        updatedDate: '2026-06-19',
      },
      fr: {
        question: 'Meilleurs modèles Ollama pour RTX 3060 12 Go ?',
        answer: 'Avec 12 Go de VRAM, le meilleur modèle général est Llama 3 8B en Q5_K_M, délivrant 20-30 tokens par seconde avec qualité équilibrée. Pour le code, utilisez Qwen 3 Coder 14B en Q4_K_M. Les deux tournent à 20–30 tokens par seconde.',
        bullets: [
          'Llama 3 8B Q5_K_M : meilleur usage général sur RTX 3060',
          'Qwen 3 Coder 14B Q4_K_M : meilleur pour le code',
          'Mistral Small Q6_K : alternative rapide pour le chat',
        ],
        updatedDate: '2026-06-19',
      },
      ja: {
        question: 'RTX 3060 12 GB向け最良Ollamaモデルは？',
        answer: '12 GB VRAMでは、汎用最良モデルはQ5_K_MのLlama 3 8Bで、バランスの取れた品質で20-30トークン/秒を配信。コーディングにはQ4_K_MのQwen 3 Coder 14Bを使用してください。どちらも20–30トークン/秒で動作します。',
        bullets: [
          'Llama 3 8B Q5_K_M：RTX 3060での最良汎用モデル',
          'Qwen 3 Coder 14B Q4_K_M：コーディングに最適',
          'Mistral Small Q6_K：チャット向けの高速な代替',
        ],
        updatedDate: '2026-06-19',
      },
      zh: {
        question: 'RTX 3060 12 GB最佳Ollama模型？',
        answer: '12 GB显存下，最佳通用模型是Q5_K_M的Llama 3 8B，提供20-30 tok/s平衡质量。编程用途选择Q4_K_M的Qwen 3 Coder 14B。两者均可达到20–30 tok/s。',
        bullets: [
          'Llama 3 8B Q5_K_M：RTX 3060最佳通用模型',
          'Qwen 3 Coder 14B Q4_K_M：编程最佳选择',
          'Mistral Small Q6_K：聊天用途的快速替代',
        ],
        updatedDate: '2026-06-19',
      },
      es: {
        question: '¿Mejores modelos Ollama para RTX 3060 12 GB?',
        answer: 'Con 12 GB de VRAM, el mejor modelo de uso general es Llama 3 8B en Q5_K_M, entregando 20–30 tokens por segundo con calidad equilibrada. Para programación, usa Qwen 3 Coder 14B en Q4_K_M. Ambos funcionan a 20–30 tok/s.',
        bullets: [
          'Llama 3 8B Q5_K_M: mejor uso general en RTX 3060',
          'Qwen 3 Coder 14B Q4_K_M: mejor para programación',
          'Mistral Small Q6_K: alternativa rápida para chat',
        ],
        updatedDate: '2026-06-19',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best general: Qwen3 7B — 7 GB VRAM, 30–50 tok/s, excellent chat and instruction quality',
          'Best for reasoning/coding: Phi-4 Q4_K_M — ~9 GB VRAM, top reasoning score in the sub-10B class',
          'RTX 3060 12 GB fits any model under 10 GB at Q4 quantization, including Qwen3 7B, Phi-4, and Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'Top 3 Ollama Models for RTX 3060 12 GB',
        content: [
          'As of June 2026, <strong>the RTX 3060 12 GB is the best-value GPU for running 7–12B models locally.</strong> Its 12 GB VRAM handles any model under 10 GB at Q4 quantization, including the latest Qwen3 and Phi-4 generations. For a $280–$350 used card, you get 30–50 tokens per second on the top 7B models.',
          'All three models below run with Ollama out of the box. Speed figures are at default 2048-token context on a desktop PC with no CPU offload.',
        ],
        columns: ['Model', 'VRAM Used', 'Speed'],
        rows: [
          { 'Model': 'Qwen3 7B', 'VRAM Used': '7.0 GB', 'Speed': '~40 tok/s' },
          { 'Model': 'Phi-4 Q4_K_M', 'VRAM Used': '~9.0 GB', 'Speed': '~35 tok/s' },
          { 'Model': 'Mistral Nemo 12B Q4_K_M', 'VRAM Used': '~8.0 GB', 'Speed': '~30 tok/s' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For an RTX 3060 12 GB, Qwen3 7B is the best general model — 7 GB VRAM, 30–50 tok/s, available via `ollama pull qwen3:7b`.',
          },
          {
            type: 'plain-terms',
            text: 'The RTX 3060 12 GB handles any model under 10 GB in Q4 quantization, including Qwen3 7B, Phi-4, and Mistral Nemo 12B.',
          },
        ],
      },
      body2: {
        title: 'How to Get the Best Performance on RTX 3060',
        content: [
          'For the general-use pick, run Qwen3 7B with a 4096-token context window. This uses ~7 GB VRAM and leaves 5 GB of headroom — enough to avoid VRAM overflow when switching between models.',
          'For reasoning and coding tasks, Phi-4 at Q4_K_M is the clear choice: it fits in ~9 GB VRAM and handles Python, TypeScript, and Go without fine-tuning.',
          'Leave at least 1.5–2 GB of VRAM free at all times. Loading two models back-to-back without unloading the first triggers VRAM overflow and forces slow CPU offload. For the full GPU benchmark context, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs</a>. If your GPU has less than 12 GB, see the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best models for 6 GB VRAM</a>. To install all three top picks:',
        ],
        codeBlock: 'ollama pull qwen3:7b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: 'Each pull downloads 4–8 GB on first run. Subsequent runs start instantly from cache. Use <code>--num-ctx 4096</code> if you need a larger context window.' }],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About RTX 3060 Models',
        faqs: [
          {
            q: 'Can the RTX 3060 run a 70B model?',
            a: 'No. A 70B model at Q4_K_M needs approximately 40 GB of VRAM. The RTX 3060 12 GB maxes out at ~14B models at Q4. See <a href="/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">how much VRAM a 70B model needs</a> for options.',
          },
          {
            q: 'Is RTX 3060 12 GB good for local LLMs?',
            a: 'Yes — it is the best value at this VRAM tier. The 12 GB capacity (shared with the more expensive RTX 4060 Ti 16 GB and RTX 3060 Ti) enables 14B models at Q4, which 8 GB cards cannot run. Street price is typically $280–$350 used.',
          },
          {
            q: 'What quantization should I use on RTX 3060 12 GB?',
            a: 'Q5_K_M for 7–8B models (best quality within 12 GB budget). Q4_K_M for 13–14B models (required to fit). See <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a> for the quality trade-off.',
          },
          {
            q: 'Does Ollama automatically use the RTX 3060 GPU?',
            a: 'Yes. Ollama detects NVIDIA GPUs via CUDA automatically on Windows and Linux. No manual configuration is needed. Run <code>ollama run modelname</code> and it loads entirely to GPU if VRAM is sufficient.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Beste Ollama-Modelle für RTX 3060 12 GB?',
    seoTitle: 'Beste Ollama-Modelle für RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Llama 3 8B Q5_K_M für Chat, Qwen 3 Coder 14B Q4 für Code. Beide laufen mit 20–30 Tok/s. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bestes Allzweck: Llama 3 8B bei Q5_K_M — 7 GB VRAM, ~25 Tok/s, ausgezeichnete Chat- und Coding-Qualität',
          'Bestes für Coding: Qwen 3 Coder 14B bei Q4_K_M — 10 GB VRAM, top HumanEval-Score in der 14B-Klasse',
          'RTX 3060 12 GB ist die einzige Consumer-GPU unter ca. 350 € mit genug VRAM für 14B-Modelle bei Q4',
        ],
      },
      body1: {
        title: 'Top 5 Ollama-Modelle für RTX 3060 12 GB',
        content: [
          'Stand Mai 2026: <strong>Die RTX 3060 12 GB ist der günstigste Weg, 14B-Modelle lokal auszuführen.</strong> Ihre 12 GB VRAM entsprechen der RTX 4070 Ti (~650 €) und RTX 4080 (~900 €) zu einem Bruchteil des Preises. Für eine gebrauchte Karte für ca. 250–310 € erhalten Sie die gleiche Modellkapazität wie Karten, die 3× mehr kosten — nur durch die reine Geschwindigkeit begrenzt, nicht durch das, was Sie laden können.',
          'Alle fünf Modelle unten laufen mit Ollama sofort. Geschwindigkeitswerte bei Standard-2048-Token-Kontext auf einem Desktop-PC ohne CPU-Offload.',
        ],
        columns: ['Modell', 'VRAM-Bedarf', 'Geschwindigkeit'],
        rows: [
          { 'Modell': 'Llama 3 8B Q5_K_M', 'VRAM-Bedarf': '7,0 GB', 'Geschwindigkeit': '~25 Tok/s' },
          { 'Modell': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM-Bedarf': '10,0 GB', 'Geschwindigkeit': '~20 Tok/s' },
          { 'Modell': 'Mistral Small Q6_K', 'VRAM-Bedarf': '6,5 GB', 'Geschwindigkeit': '~27 Tok/s' },
          { 'Modell': 'Phi-4 Q5_K_M', 'VRAM-Bedarf': '6,2 GB', 'Geschwindigkeit': '~28 Tok/s' },
          { 'Modell': 'Qwen 14B Q4_K_M', 'VRAM-Bedarf': '10,0 GB', 'Geschwindigkeit': '~18 Tok/s' },
        ],
      },
      body2: {
        title: 'So erzielen Sie die beste Leistung auf dem RTX 3060',
        content: [
          'Für den Allzweck-Pick führen Sie Llama 3 8B bei Q5_K_M mit einem 4096-Token-Kontextfenster aus. Dies verwendet ~8 GB VRAM gesamt und lässt 4 GB Headroom — genug, um VRAM-Überlauf beim Wechseln zwischen Modellen zu vermeiden.',
          'Für Coding ist Qwen 3 Coder 14B bei Q4_K_M die klare Wahl: es übertrifft Llama 3 8B bei HumanEval, passt in 10 GB VRAM und verarbeitet Python, TypeScript und Go ohne Fine-Tuning.',
          'Halten Sie immer mindestens 1,5–2 GB VRAM frei. Das Laden zweier Modelle nacheinander ohne das erste zu entladen löst VRAM-Überlauf aus und erzwingt langsames CPU-Offload. Für den vollständigen GPU-Benchmark-Kontext, siehe <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">beste GPUs für lokale LLMs</a>. Wenn Ihre GPU weniger als 12 GB hat, siehe <a href="/de/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">beste Modelle für 6 GB VRAM</a>. So führen Sie den besten Allzweck-Pick auf Ihrem RTX 3060 aus:',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'Pull lädt ~7 GB beim ersten Ausführen herunter. Nachfolgende Ausführungen starten sofort aus dem Cache. Verwenden Sie <code>--num-ctx 4096</code> für ein größeres Kontextfenster.' }],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu RTX 3060 Modellen',
        faqs: [
          {
            q: 'Kann die RTX 3060 ein 70B-Modell ausführen?',
            a: 'Nein. Ein 70B-Modell bei Q4_K_M benötigt ca. 40 GB VRAM. Die RTX 3060 12 GB kommt maximal auf ~14B-Modelle bei Q4. Siehe <a href="/de/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">wie viel VRAM ein 70B-Modell benötigt</a> für Optionen.',
          },
          {
            q: 'Ist RTX 3060 12 GB gut für lokale LLMs?',
            a: 'Ja — es ist das beste Preis-Leistungs-Verhältnis in diesem VRAM-Tier. Die 12-GB-Kapazität ermöglicht 14B-Modelle bei Q4, die 8-GB-Karten nicht ausführen können. Straßenpreis typischerweise ca. 250–310 € gebraucht.',
          },
          {
            q: 'Welche Quantisierung sollte ich auf RTX 3060 12 GB verwenden?',
            a: 'Q5_K_M für 7–8B-Modelle (beste Qualität im 12-GB-Budget). Q4_K_M für 13–14B-Modelle (erforderlich, um hineinzupassen). Siehe <a href="/de/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">was Q4_K_M bedeutet</a> für den Qualitäts-Kompromiss.',
          },
          {
            q: 'Verwendet Ollama automatisch die RTX 3060 GPU?',
            a: 'Ja. Ollama erkennt NVIDIA-GPUs via CUDA automatisch unter Windows und Linux. Es ist keine manuelle Konfiguration erforderlich. Führen Sie <code>ollama run modellname</code> aus, und es lädt vollständig auf die GPU, wenn VRAM ausreicht.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Meilleurs modèles Ollama pour RTX 3060 12 Go ?',
    seoTitle: 'Meilleurs modèles Ollama RTX 3060 12 Go 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 Go : Llama 3 8B Q5_K_M pour le chat, Qwen 3 Coder 14B Q4 pour le code. Les deux à 20–30 tok/s. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur usage général : Llama 3 8B en Q5_K_M — 7 Go de VRAM, ~25 tok/s, excellente qualité chat et code',
          'Meilleur pour le code : Qwen 3 Coder 14B en Q4_K_M — 10 Go de VRAM, meilleur score HumanEval en classe 14B',
          'La RTX 3060 12 Go est le seul GPU grand public sous env. 350 € avec assez de VRAM pour les modèles 14B en Q4',
        ],
      },
      body1: {
        title: 'Top 5 des modèles Ollama pour RTX 3060 12 Go',
        content: [
          'En mai 2026, <strong>la RTX 3060 12 Go est le chemin le moins cher pour faire tourner des modèles 14B localement.</strong> Ses 12 Go de VRAM rivalisent avec la RTX 4070 Ti (~800 €) et la RTX 4080 (~1 100 €) à une fraction du coût. Pour une carte d\'occasion à env. 280–350 €, vous obtenez la même capacité de modèle que des cartes 3× plus chères — limité uniquement par la vitesse brute.',
          'Les cinq modèles ci-dessous fonctionnent avec Ollama sans configuration. Les vitesses sont mesurées avec un contexte de 2 048 tokens par défaut sur un PC de bureau sans déchargement CPU.',
        ],
        columns: ['Modèle', 'VRAM utilisé', 'Vitesse'],
        rows: [
          { 'Modèle': 'Llama 3 8B Q5_K_M', 'VRAM utilisé': '7,0 Go', 'Vitesse': '~25 tok/s' },
          { 'Modèle': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM utilisé': '10,0 Go', 'Vitesse': '~20 tok/s' },
          { 'Modèle': 'Mistral Small Q6_K', 'VRAM utilisé': '6,5 Go', 'Vitesse': '~27 tok/s' },
          { 'Modèle': 'Phi-4 Q5_K_M', 'VRAM utilisé': '6,2 Go', 'Vitesse': '~28 tok/s' },
          { 'Modèle': 'Qwen 14B Q4_K_M', 'VRAM utilisé': '10,0 Go', 'Vitesse': '~18 tok/s' },
        ],
      },
      body2: {
        title: 'Comment obtenir les meilleures performances sur RTX 3060',
        content: [
          'Pour l\'usage général, lancez Llama 3 8B en Q5_K_M avec une fenêtre de contexte de 4 096 tokens. Cela utilise ~8 Go de VRAM au total et laisse 4 Go de marge — suffisant pour éviter les débordements lors du changement de modèle.',
          'Pour le code, Qwen 3 Coder 14B en Q4_K_M est le choix évident : il surpasse Llama 3 8B sur HumanEval, tient en 10 Go de VRAM et gère Python, TypeScript et Go sans fine-tuning.',
          'Laissez toujours au moins 1,5–2 Go de VRAM libres. Pour le contexte complet des benchmarks GPU, voir <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">les meilleurs GPU pour LLM locaux</a>. Si votre GPU a moins de 12 Go, voir <a href="/fr/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">les meilleurs modèles pour 6 Go de VRAM</a>. Pour lancer le meilleur choix général sur votre RTX 3060 :',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'Pull télécharge ~7 Go à la première exécution. Les exécutions suivantes démarrent instantanément depuis le cache. Utilisez <code>--num-ctx 4096</code> pour une fenêtre de contexte plus grande.' }],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les modèles RTX 3060',
        faqs: [
          {
            q: 'La RTX 3060 peut-elle faire tourner un modèle 70B ?',
            a: 'Non. Un modèle 70B en Q4_K_M nécessite environ 40 Go de VRAM. La RTX 3060 12 Go est limitée aux modèles ~14B en Q4. Voir <a href="/fr/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">combien de VRAM un modèle 70B nécessite</a> pour les options.',
          },
          {
            q: 'La RTX 3060 12 Go est-elle bonne pour les LLM locaux ?',
            a: 'Oui — c\'est le meilleur rapport qualité-prix à ce niveau de VRAM. La capacité de 12 Go permet les modèles 14B en Q4, que les cartes 8 Go ne peuvent pas exécuter. Prix de revente typiquement env. 280–350 € d\'occasion.',
          },
          {
            q: 'Quelle quantisation utiliser sur RTX 3060 12 Go ?',
            a: 'Q5_K_M pour les modèles 7–8B (meilleure qualité dans le budget 12 Go). Q4_K_M pour les modèles 13–14B (requis pour tenir). Voir <a href="/fr/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ce que signifie Q4_K_M</a> pour le compromis qualité.',
          },
          {
            q: 'Ollama utilise-t-il automatiquement le GPU RTX 3060 ?',
            a: 'Oui. Ollama détecte les GPU NVIDIA via CUDA automatiquement sur Windows et Linux. Aucune configuration manuelle n\'est nécessaire. Lancez <code>ollama run nomdumodele</code> et il se charge entièrement sur le GPU si le VRAM est suffisant.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: 'RTX 3060 12 GB向け最良Ollamaモデルは？',
    seoTitle: 'RTX 3060 12 GB最良Ollamaモデル2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GBはLlama 3 8B Q5_K_Mでチャット、Qwen 3 Coder 14B Q4でコーディングを20–30トークン/秒で実行します。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '汎用ベスト：Q5_K_MのLlama 3 8B — 7 GB VRAM、~25トークン/秒、優秀なチャットとコーディング品質',
          'コーディングベスト：Q4_K_MのQwen 3 Coder 14B — 10 GB VRAM、14Bクラス最高HumanEvalスコア',
          'RTX 3060 12 GBはQ4の14Bモデルを動かせる$400未満の唯一のコンシューマーGPU',
        ],
      },
      body1: {
        title: 'RTX 3060 12 GB向けトップ5 Ollamaモデル',
        content: [
          '2026年5月現在、<strong>RTX 3060 12 GBは14Bモデルをローカルで動かす最安のルートです。</strong>その12 GB VRAMはRTX 4070 Ti（約$800）やRTX 4080（約$1,100）と同等の能力を、はるかに低コストで実現します。¥40,000–¥53,000の中古カードで、3倍以上の価格のカードと同じモデル容量を得られます。',
          '以下の5つのモデルはすべてOllamaで即座に動作します。速度数値はCPUオフロードなしのデスクトップPCでデフォルト2048トークンコンテキスト時の値です。',
        ],
        columns: ['モデル', '使用VRAM', '速度'],
        rows: [
          { 'モデル': 'Llama 3 8B Q5_K_M', '使用VRAM': '7.0 GB', '速度': '~25トークン/秒' },
          { 'モデル': 'Qwen 3 Coder 14B Q4_K_M', '使用VRAM': '10.0 GB', '速度': '~20トークン/秒' },
          { 'モデル': 'Mistral Small Q6_K', '使用VRAM': '6.5 GB', '速度': '~27トークン/秒' },
          { 'モデル': 'Phi-4 Q5_K_M', '使用VRAM': '6.2 GB', '速度': '~28トークン/秒' },
          { 'モデル': 'Qwen 14B Q4_K_M', '使用VRAM': '10.0 GB', '速度': '~18トークン/秒' },
        ],
      },
      body2: {
        title: 'RTX 3060で最高のパフォーマンスを得る方法',
        content: [
          '汎用用途には、4096トークンコンテキストウィンドウでQ5_K_MのLlama 3 8Bを実行してください。合計約8 GB VRAMを使用し、4 GBの余裕を残します。',
          'コーディングには、Q4_K_MのQwen 3 Coder 14Bが明確な選択です：HumanEvalでLlama 3 8Bを上回り、10 GB VRAMに収まり、ファインチューニングなしでPython、TypeScript、Goを処理します。',
          '常に少なくとも1.5–2 GB VRAMを空けておいてください。完全なGPUベンチマーク背景については<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカルLLM向け最良GPU</a>を参照してください。GPUが12 GB未満の場合は<a href="/ja/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM向け最良モデル</a>をご覧ください。RTX 3060で汎用Pickを実行するには：',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'Pullは初回実行時に約7 GBをダウンロードします。以降の実行はキャッシュから即座に開始します。より大きなコンテキストウィンドウが必要な場合は<code>--num-ctx 4096</code>を使用してください。' }],
      },
      faq: {
        id: 'faq',
        title: 'RTX 3060モデルに関するよくある質問',
        faqs: [
          {
            q: 'RTX 3060は70Bモデルを動かせますか？',
            a: 'いいえ。Q4_K_Mの70Bモデルには約40 GB VRAMが必要です。RTX 3060 12 GBはQ4で最大~14Bモデルまでです。選択肢については<a href="/ja/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">70Bモデルに必要なVRAM</a>を参照してください。',
          },
          {
            q: 'RTX 3060 12 GBはローカルLLMに良いですか？',
            a: 'はい — このVRAMティアで最高のコストパフォーマンスです。12 GBの容量により、8 GBカードでは実行できないQ4の14Bモデルが可能になります。街価は通常¥40,000–¥53,000（中古）です。',
          },
          {
            q: 'RTX 3060 12 GBではどの量化を使うべきですか？',
            a: '7–8BモデルにはQ5_K_M（12 GBバジェット内での最高品質）。13–14BモデルにはQ4_K_M（収めるために必要）。品質のトレードオフについては<a href="/ja/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_Mの意味</a>を参照してください。',
          },
          {
            q: 'OllamaはRTX 3060 GPUを自動的に使用しますか？',
            a: 'はい。OllamaはWindowsとLinuxでCUDA経由でNVIDIA GPUを自動的に検出します。手動設定は不要です。<code>ollama run モデル名</code>を実行すると、VRAMが十分であれば完全にGPUにロードされます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: 'RTX 3060 12 GB最佳Ollama模型？',
    seoTitle: 'RTX 3060 12 GB最佳Ollama模型2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB：Llama 3 8B Q5_K_M用于聊天，Qwen 3 Coder 14B Q4用于编程，速度20–30 tok/s。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳通用：Q5_K_M的Llama 3 8B——7 GB显存，约25 tok/s，聊天和编程质量出色',
          '最佳编程：Q4_K_M的Qwen 3 Coder 14B——10 GB显存，14B级别最高HumanEval分数',
          'RTX 3060 12 GB是400美元以下唯一能以Q4运行14B模型的消费级GPU',
        ],
      },
      body1: {
        title: 'RTX 3060 12 GB最佳5款Ollama模型',
        content: [
          '截至2026年5月，<strong>RTX 3060 12 GB是本地运行14B模型的最经济路径。</strong>其12 GB显存与RTX 4070 Ti（约$800）和RTX 4080（约$1,100）相当，但价格只是其零头。一张$280–$350的二手卡能提供与3倍价格显卡相同的模型容量。',
          '以下五款模型均可通过Ollama直接运行，无需配置。速度数据基于桌面PC上默认2048 token上下文、无CPU卸载的测量值。',
        ],
        columns: ['模型', '显存占用', '速度'],
        rows: [
          { '模型': 'Llama 3 8B Q5_K_M', '显存占用': '7.0 GB', '速度': '~25 tok/s' },
          { '模型': 'Qwen 3 Coder 14B Q4_K_M', '显存占用': '10.0 GB', '速度': '~20 tok/s' },
          { '模型': 'Mistral Small Q6_K', '显存占用': '6.5 GB', '速度': '~27 tok/s' },
          { '模型': 'Phi-4 Q5_K_M', '显存占用': '6.2 GB', '速度': '~28 tok/s' },
          { '模型': 'Qwen 14B Q4_K_M', '显存占用': '10.0 GB', '速度': '~18 tok/s' },
        ],
      },
      body2: {
        title: '如何在RTX 3060上获得最佳性能',
        content: [
          '对于通用用途，以4096 token上下文窗口运行Q5_K_M的Llama 3 8B。总计使用约8 GB显存，留有4 GB余量。',
          '对于编程，Q4_K_M的Qwen 3 Coder 14B是明确的选择：它在HumanEval上超越Llama 3 8B，适合10 GB显存，无需微调即可处理Python、TypeScript和Go。',
          '始终保持至少1.5–2 GB显存空闲。完整的GPU基准测试背景请参阅<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地LLM最佳GPU</a>。如果您的GPU显存小于12 GB，请参阅<a href="/zh/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB显存最佳模型</a>。在您的RTX 3060上运行最佳通用选择：',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: '首次运行时Pull下载约7 GB。后续运行从缓存即时启动。如需更大上下文窗口，使用<code>--num-ctx 4096</code>。' }],
      },
      faq: {
        id: 'faq',
        title: '关于RTX 3060模型的常见问题',
        faqs: [
          {
            q: 'RTX 3060能运行70B模型吗？',
            a: '不能。Q4_K_M的70B模型需要约40 GB显存。RTX 3060 12 GB最多支持Q4的约14B模型。选择方案请参阅<a href="/zh/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">70B模型所需显存</a>。',
          },
          {
            q: 'RTX 3060 12 GB适合运行本地LLM吗？',
            a: '适合——这是此显存层级的最佳性价比之选。12 GB容量可运行Q4的14B模型，而8 GB显卡则不行。二手市场价格通常为$280–$350。',
          },
          {
            q: 'RTX 3060 12 GB应该使用哪种量化？',
            a: '7–8B模型使用Q5_K_M（12 GB预算内的最佳质量）。13–14B模型使用Q4_K_M（装入所必需的）。质量权衡请参阅<a href="/zh/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M的含义</a>。',
          },
          {
            q: 'Ollama会自动使用RTX 3060 GPU吗？',
            a: '会。Ollama在Windows和Linux上通过CUDA自动检测NVIDIA GPU，无需手动配置。运行<code>ollama run 模型名</code>，如果显存充足则完全加载到GPU。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Quantization & VRAM',
    title: 'Melhores modelos Ollama para RTX 3060 12 GB?',
    seoTitle: 'Melhores modelos Ollama RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Llama 3 8B Q5_K_M para chat (20 tok/s), Qwen 3 Coder 14B Q4 para código. Ambos cabem em 12 GB de VRAM. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    quickAnswerTop: {
      pt: {
        question: 'Melhores modelos Ollama para RTX 3060 12 GB?',
        answer: 'Com 12 GB de VRAM, o melhor modelo de uso geral é Llama 3 8B em Q5_K_M, entregando 20–30 tokens por segundo com qualidade equilibrada. Para programação, use Qwen 3 Coder 14B em Q4_K_M. Ambos funcionam a 20–30 tok/s.',
        bullets: [
          'Llama 3 8B Q5_K_M: melhor uso geral na RTX 3060',
          'Qwen 3 Coder 14B Q4_K_M: melhor para programação',
          'Mistral Small Q6_K: alternativa rápida para chat',
        ],
        updatedDate: '2026-06-19',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor geral: Llama 3 8B em Q5_K_M — 7 GB de VRAM, ~25 tok/s, excelente qualidade para chat e código',
          'Melhor para código: Qwen 3 Coder 14B em Q4_K_M — 10 GB de VRAM, melhor pontuação HumanEval na classe 14B',
          'RTX 3060 12 GB é a única GPU de consumo abaixo de $400 com VRAM suficiente para rodar modelos 14B em Q4',
        ],
      },
      body1: {
        title: 'Top 5 modelos Ollama para RTX 3060 12 GB',
        content: [
          'Em maio de 2026, <strong>a RTX 3060 12 GB é o caminho mais barato para rodar modelos 14B localmente.</strong> Seus 12 GB de VRAM equivalem à RTX 4070 Ti (~$800) e RTX 4080 (~$1.100) a uma fração do custo. Por $280–$350 de segunda mão, você obtém a mesma capacidade de modelo que placas 3× mais caras — limitado apenas pela velocidade bruta, não pelo que pode carregar.',
          'Os cinco modelos abaixo funcionam com Ollama sem configuração. Os valores de velocidade são com contexto padrão de 2048 tokens em um PC desktop sem offload de CPU.',
        ],
        columns: ['Modelo', 'VRAM usada', 'Velocidade'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q5_K_M', 'VRAM usada': '7,0 GB', 'Velocidade': '~25 tok/s' },
          { 'Modelo': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM usada': '10,0 GB', 'Velocidade': '~20 tok/s' },
          { 'Modelo': 'Mistral Small Q6_K', 'VRAM usada': '6,5 GB', 'Velocidade': '~27 tok/s' },
          { 'Modelo': 'Phi-4 Q5_K_M', 'VRAM usada': '6,2 GB', 'Velocidade': '~28 tok/s' },
          { 'Modelo': 'Qwen 14B Q4_K_M', 'VRAM usada': '10,0 GB', 'Velocidade': '~18 tok/s' },
        ],
      },
      body2: {
        title: 'Como obter o melhor desempenho na RTX 3060',
        content: [
          'Para uso geral, execute Llama 3 8B em Q5_K_M com uma janela de contexto de 4096 tokens. Isso usa ~8 GB de VRAM no total e deixa 4 GB de margem — suficiente para evitar estouro de VRAM ao alternar entre modelos.',
          'Para código, Qwen 3 Coder 14B em Q4_K_M é a escolha clara: supera o Llama 3 8B no HumanEval, cabe em 10 GB de VRAM e lida com Python, TypeScript e Go sem ajuste fino.',
          'Deixe sempre pelo menos 1,5–2 GB de VRAM livre. Carregar dois modelos em sequência sem descarregar o primeiro provoca estouro de VRAM e força o lento offload para CPU. Para o contexto completo de benchmarks de GPU, consulte <a href="/pt/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">as melhores GPUs para LLMs locais</a>. Se sua GPU tiver menos de 12 GB, consulte <a href="/pt/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">os melhores modelos para 6 GB de VRAM</a>. Para executar a melhor opção de uso geral na sua RTX 3060:',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'Pull baixa ~7 GB na primeira execução. As execuções seguintes iniciam instantaneamente do cache. Use <code>--num-ctx 4096</code> se precisar de uma janela de contexto maior.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre modelos para RTX 3060',
        faqs: [
          {
            q: 'A RTX 3060 consegue rodar um modelo 70B?',
            a: 'Não. Um modelo 70B em Q4_K_M precisa de aproximadamente 40 GB de VRAM. A RTX 3060 12 GB chega no máximo a ~14B modelos em Q4. Consulte <a href="/pt/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">quanta VRAM um modelo 70B precisa</a> para as opções.',
          },
          {
            q: 'A RTX 3060 12 GB é boa para LLMs locais?',
            a: 'Sim — é a melhor relação custo-benefício neste nível de VRAM. A capacidade de 12 GB permite modelos 14B em Q4, que placas de 8 GB não conseguem executar. O preço de segunda mão é tipicamente $280–$350.',
          },
          {
            q: 'Qual quantização usar na RTX 3060 12 GB?',
            a: 'Q5_K_M para modelos 7–8B (melhor qualidade dentro do orçamento de 12 GB). Q4_K_M para modelos 13–14B (necessário para caber). Consulte <a href="/pt/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">o que significa Q4_K_M</a> para o compromisso de qualidade.',
          },
          {
            q: 'O Ollama usa automaticamente a GPU RTX 3060?',
            a: 'Sim. O Ollama detecta GPUs NVIDIA via CUDA automaticamente no Windows e no Linux. Nenhuma configuração manual é necessária. Execute <code>ollama run nomedomodelo</code> e ele carrega completamente na GPU se a VRAM for suficiente.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Mejores modelos Ollama para RTX 3060 12 GB?',
    seoTitle: 'Mejores modelos Ollama RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Llama 3 8B Q5_K_M para chat (20 tok/s), Qwen 3 Coder 14B Q4 para código. Ambos caben en 12 GB de VRAM. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    quickAnswerTop: {
      es: {
        question: '¿Mejores modelos Ollama para RTX 3060 12 GB?',
        answer: 'Con 12 GB de VRAM, el mejor modelo de uso general es Llama 3 8B en Q5_K_M, entregando 20–30 tokens por segundo con calidad equilibrada. Para programación, usa Qwen 3 Coder 14B en Q4_K_M. Ambos funcionan a 20–30 tok/s.',
        bullets: [
          'Llama 3 8B Q5_K_M: mejor uso general en RTX 3060',
          'Qwen 3 Coder 14B Q4_K_M: mejor para programación',
          'Mistral Small Q6_K: alternativa rápida para chat',
        ],
        updatedDate: '2026-06-19',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor uso general: Llama 3 8B en Q5_K_M — 7 GB VRAM, ~25 tok/s, excelente calidad para chat y código',
          'Mejor para código: Qwen 3 Coder 14B en Q4_K_M — 10 GB VRAM, mejor puntuación HumanEval en la clase 14B',
          'RTX 3060 12 GB es la única GPU de consumo bajo $400 con suficiente VRAM para ejecutar modelos 14B en Q4',
        ],
      },
      body1: {
        title: 'Top 5 modelos Ollama para RTX 3060 12 GB',
        content: [
          'A mayo de 2026, <strong>la RTX 3060 12 GB es el camino más barato para ejecutar modelos 14B localmente.</strong> Sus 12 GB de VRAM igualan a la RTX 4070 Ti (~$800) y RTX 4080 (~$1.100) a una fracción del coste. Por $280–$350 de segunda mano, obtienes la misma capacidad de modelo que tarjetas 3 veces más caras — limitado solo por la velocidad bruta, no por lo que puedes cargar.',
          'Los cinco modelos siguientes funcionan con Ollama sin configuración. Las cifras de velocidad son con contexto predeterminado de 2048 tokens en un PC de escritorio sin offloading a CPU.',
        ],
        columns: ['Modelo', 'VRAM usada', 'Velocidad'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q5_K_M', 'VRAM usada': '7,0 GB', 'Velocidad': '~25 tok/s' },
          { 'Modelo': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM usada': '10,0 GB', 'Velocidad': '~20 tok/s' },
          { 'Modelo': 'Mistral Small Q6_K', 'VRAM usada': '6,5 GB', 'Velocidad': '~27 tok/s' },
          { 'Modelo': 'Phi-4 Q5_K_M', 'VRAM usada': '6,2 GB', 'Velocidad': '~28 tok/s' },
          { 'Modelo': 'Qwen 14B Q4_K_M', 'VRAM usada': '10,0 GB', 'Velocidad': '~18 tok/s' },
        ],
      },
      body2: {
        title: 'Cómo obtener el mejor rendimiento en RTX 3060',
        content: [
          'Para uso general, ejecuta Llama 3 8B en Q5_K_M con una ventana de contexto de 4096 tokens. Esto usa ~8 GB de VRAM en total y deja 4 GB de margen — suficiente para evitar desbordamiento al cambiar entre modelos.',
          'Para código, Qwen 3 Coder 14B en Q4_K_M es la elección clara: supera a Llama 3 8B en HumanEval, cabe en 10 GB de VRAM y maneja Python, TypeScript y Go sin ajuste fino.',
          'Deja siempre al menos 1,5–2 GB de VRAM libres. Cargar dos modelos seguidos sin descargar el primero provoca desbordamiento de VRAM y fuerza un lento offloading a CPU. Para el contexto completo de benchmarks de GPU, consulta <a href="/es/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">las mejores GPUs para LLMs locales</a>. Si tu GPU tiene menos de 12 GB, consulta <a href="/es/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">los mejores modelos para 6 GB de VRAM</a>. Para ejecutar la mejor opción general en tu RTX 3060:',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'Pull descarga ~7 GB en la primera ejecución. Las ejecuciones siguientes arrancan al instante desde la caché. Usa <code>--num-ctx 4096</code> si necesitas una ventana de contexto más grande.' }],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre modelos para RTX 3060',
        faqs: [
          {
            q: '¿Puede la RTX 3060 ejecutar un modelo 70B?',
            a: 'No. Un modelo 70B en Q4_K_M necesita aproximadamente 40 GB de VRAM. La RTX 3060 12 GB llega como máximo a ~14B modelos en Q4. Consulta <a href="/es/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">cuánta VRAM necesita un modelo 70B</a> para las opciones.',
          },
          {
            q: '¿Es buena la RTX 3060 12 GB para LLMs locales?',
            a: 'Sí — es la mejor relación calidad-precio en este rango de VRAM. La capacidad de 12 GB permite modelos 14B en Q4, que las tarjetas de 8 GB no pueden ejecutar. El precio de segunda mano suele ser $280–$350.',
          },
          {
            q: '¿Qué cuantización usar en RTX 3060 12 GB?',
            a: 'Q5_K_M para modelos 7–8B (mejor calidad dentro del presupuesto de 12 GB). Q4_K_M para modelos 13–14B (necesario para que quepan). Consulta <a href="/es/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">qué significa Q4_K_M</a> para el compromiso de calidad.',
          },
          {
            q: '¿Ollama usa automáticamente la GPU RTX 3060?',
            a: 'Sí. Ollama detecta GPUs NVIDIA vía CUDA automáticamente en Windows y Linux. No se necesita configuración manual. Ejecuta <code>ollama run nombremodelo</code> y carga completamente en la GPU si la VRAM es suficiente.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Quantization & VRAM',
    title: 'أفضل نماذج ⁨Ollama⁩ لـ⁨RTX 3060 12 GB⁩؟',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ لبطاقة ⁨RTX 3060 12 GB 2026⁩',
    metaDescription: '⁨RTX 3060 12 GB⁩ يُشغّل ⁨Llama 3 8B Q5⁩_⁨K⁩_⁨M⁩ بـ⁨25⁩ رمز/ثانية، و⁨Qwen 3 Coder 14B Q4⁩_⁨K⁩_⁨M⁩ بـ⁨10 GB VRAM⁩. كلاهما يعمل بالكامل على ⁨GPU⁩ بدون تفريغ.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-20',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama لـRTX 3060 12 GB؟',
        answer: 'مع 12 GB VRAM، أفضل نموذج للاستخدام العام هو Llama 3 8B في Q5_K_M بـ20–30 رمز/ثانية بجودة متوازنة. للبرمجة، استخدم Qwen 3 Coder 14B في Q4_K_M. كلاهما يعمل بـ20–30 رمز/ثانية.',
        bullets: [
          'Llama 3 8B Q5_K_M: الأفضل للاستخدام العام على RTX 3060',
          'Qwen 3 Coder 14B Q4_K_M: الأفضل للبرمجة',
          'Mistral Small Q6_K: بديل سريع للدردشة',
        ],
        updatedDate: '2026-06-19',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل للاستخدام العام: Llama 3 8B في Q5_K_M — 7 GB VRAM، ~25 رمز/ثانية، جودة ممتازة للدردشة والكود',
          'الأفضل للبرمجة: Qwen 3 Coder 14B في Q4_K_M — 10 GB VRAM، أفضل نقاط HumanEval في فئة 14B',
          'RTX 3060 12 GB هي الـGPU الاستهلاكية الوحيدة دون $400 مع VRAM كافية لتشغيل نماذج 14B في Q4',
        ],
      },
      body1: {
        title: 'أفضل 5 نماذج Ollama لـRTX 3060 12 GB',
        content: [
          'اعتباراً من مايو 2026، <strong>RTX 3060 12 GB هي أرخص طريق لتشغيل نماذج 14B محلياً.</strong> 12 GB VRAM لديها تعادل RTX 4070 Ti (~$800) وRTX 4080 (~$1100) بجزء بسيط من التكلفة. بـ$280–$350 مستعملة، تحصل على نفس قدرة النماذج كبطاقات أغلى 3 مرات — محدود فقط بالسرعة الخام لا بما يمكنك تحميله.',
          'النماذج الخمسة التالية تعمل مع Ollama دون إعداد. أرقام السرعة مع سياق 2048 رمز افتراضي على حاسوب مكتبي دون تفريغ على CPU.',
        ],
        columns: ['النموذج', 'VRAM المستخدمة', 'السرعة'],
        rows: [
          { 'النموذج': 'Llama 3 8B Q5_K_M', 'VRAM المستخدمة': '7.0 GB', 'السرعة': '~25 رمز/ثانية' },
          { 'النموذج': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM المستخدمة': '10.0 GB', 'السرعة': '~20 رمز/ثانية' },
          { 'النموذج': 'Mistral Small Q6_K', 'VRAM المستخدمة': '6.5 GB', 'السرعة': '~27 رمز/ثانية' },
          { 'النموذج': 'Phi-4 Q5_K_M', 'VRAM المستخدمة': '6.2 GB', 'السرعة': '~28 رمز/ثانية' },
          { 'النموذج': 'Qwen 14B Q4_K_M', 'VRAM المستخدمة': '10.0 GB', 'السرعة': '~18 رمز/ثانية' },
        ],
      },
      body2: {
        title: 'كيف تحصل على أفضل أداء على RTX 3060',
        content: [
          'للاستخدام العام، شغّل Llama 3 8B في Q5_K_M مع نافذة سياق 4096 رمز. هذا يستخدم ~8 GB VRAM إجمالاً ويترك 4 GB هامشاً — كافٍ لتجنب تجاوز الحد عند التبديل بين النماذج.',
          'للبرمجة، Qwen 3 Coder 14B في Q4_K_M هو الاختيار الواضح: يتفوق على Llama 3 8B في HumanEval، يتسع في 10 GB VRAM ويتعامل مع Python وTypeScript وGo دون ضبط دقيق.',
          'اترك دائماً 1.5–2 GB VRAM حرة على الأقل. تحميل نموذجين متتاليين دون تفريغ الأول يسبب تجاوز VRAM ويُجبر على تفريغ بطيء على CPU. للسياق الكامل لمعايير GPU، راجع <a href="/ar/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">أفضل بطاقات GPU لنماذج اللغة الكبيرة المحلية</a>. إذا كانت GPU لديك أقل من 12 GB، راجع <a href="/ar/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">أفضل النماذج لـ6 GB VRAM</a>. لتشغيل أفضل خيار عام على RTX 3060:',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'التنزيل يحمّل ~7 GB في التشغيل الأول. التشغيلات التالية تبدأ فوراً من الذاكرة المؤقتة. استخدم <code>--num-ctx 4096</code> إذا احتجت نافذة سياق أكبر.' }],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول النماذج لـRTX 3060',
        faqs: [
          {
            q: 'هل يمكن لـRTX 3060 تشغيل نموذج 70B؟',
            a: 'لا. نموذج 70B في Q4_K_M يحتاج حوالي 40 GB VRAM. RTX 3060 12 GB تصل كحد أقصى لنماذج ~14B في Q4. راجع <a href="/ar/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">كم VRAM يحتاج نموذج 70B</a> للخيارات.',
          },
          {
            q: 'هل RTX 3060 12 GB جيدة لنماذج اللغة الكبيرة المحلية؟',
            a: 'نعم — هي أفضل جودة/سعر في هذا النطاق من VRAM. السعة 12 GB تتيح نماذج 14B في Q4، وهو ما لا تستطيع بطاقات 8 GB فعله. السعر المستعمل عادةً $280–$350.',
          },
          {
            q: 'ما التكميم الذي يجب استخدامه على RTX 3060 12 GB؟',
            a: 'Q5_K_M لنماذج 7–8B (أفضل جودة ضمن ميزانية 12 GB). Q4_K_M لنماذج 13–14B (ضروري للتناسب). راجع <a href="/ar/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">ما معنى Q4_K_M</a> للتوازن في الجودة.',
          },
          {
            q: 'هل Ollama يستخدم GPU RTX 3060 تلقائياً؟',
            a: 'نعم. Ollama يكتشف بطاقات NVIDIA عبر CUDA تلقائياً على Windows وLinux. لا يلزم إعداد يدوي. شغّل <code>ollama run اسم_النموذج</code> وسيُحمَّل كلياً على GPU إذا كانت VRAM كافية.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Quantization & VRAM',
    title: 'RTX 3060 12 GB에 최적인 Ollama 모델은?',
    seoTitle: 'RTX 3060 12 GB 최적 Ollama 모델 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: 채팅용 Llama 3 8B Q5_K_M (20 토큰/초), 코딩용 Qwen 3 Coder 14B Q4. 두 모델 모두 12 GB VRAM에 탑재 가능합니다. PromptQuorum의 빠른 답변.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    quickAnswerTop: {
      ko: {
        question: 'RTX 3060 12 GB에 최적인 Ollama 모델은?',
        answer: '12 GB VRAM 환경에서 최적의 범용 모델은 Q5_K_M의 Llama 3 8B로, 균형 잡힌 품질로 초당 20–30 토큰을 제공합니다. 코딩에는 Q4_K_M의 Qwen 3 Coder 14B를 사용하십시오. 두 모델 모두 초당 20–30 토큰으로 동작합니다.',
        bullets: [
          'Llama 3 8B Q5_K_M: RTX 3060 최적 범용 모델',
          'Qwen 3 Coder 14B Q4_K_M: 코딩에 최적',
          'Mistral Small Q6_K: 채팅용 고속 대안',
        ],
        updatedDate: '2026-06-19',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적 범용 모델: Q5_K_M의 Llama 3 8B — 7 GB VRAM, ~25 토큰/초, 채팅 및 코딩 품질 우수',
          '최적 코딩 모델: Q4_K_M의 Qwen 3 Coder 14B — 10 GB VRAM, 14B 클래스 최고 HumanEval 점수',
          'RTX 3060 12 GB는 $400 미만의 소비자용 GPU 중 Q4 양자화로 14B 모델을 실행할 수 있는 유일한 제품입니다',
        ],
      },
      body1: {
        title: 'RTX 3060 12 GB 최적 Ollama 모델 Top 5',
        content: [
          '2026년 5월 기준, <strong>RTX 3060 12 GB는 14B 모델을 로컬에서 실행하는 가장 저렴한 경로입니다.</strong> 12 GB VRAM은 RTX 4070 Ti (~$800)와 RTX 4080 (~$1,100)과 동일한 용량을 훨씬 낮은 비용에 제공합니다. 중고 $280–$350에 3배 비싼 카드와 동일한 모델 탑재 능력을 얻을 수 있으며, 제한은 로드 가능한 모델이 아닌 원시 속도에만 있습니다.',
          '아래 다섯 모델은 모두 Ollama에서 별도 설정 없이 바로 실행됩니다. 속도 수치는 CPU 오프로드 없는 데스크탑 PC에서 기본 2048 토큰 컨텍스트 기준입니다.',
        ],
        columns: ['모델', 'VRAM 사용량', '속도'],
        rows: [
          { '모델': 'Llama 3 8B Q5_K_M', 'VRAM 사용량': '7.0 GB', '속도': '~25 토큰/초' },
          { '모델': 'Qwen 3 Coder 14B Q4_K_M', 'VRAM 사용량': '10.0 GB', '속도': '~20 토큰/초' },
          { '모델': 'Mistral Small Q6_K', 'VRAM 사용량': '6.5 GB', '속도': '~27 토큰/초' },
          { '모델': 'Phi-4 Q5_K_M', 'VRAM 사용량': '6.2 GB', '속도': '~28 토큰/초' },
          { '모델': 'Qwen 14B Q4_K_M', 'VRAM 사용량': '10.0 GB', '속도': '~18 토큰/초' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RTX 3060 12 GB에서 범용 최적 모델은 Q5_K_M의 Llama 3 8B(7 GB VRAM, ~25 토큰/초)이며, 코딩에는 Q4_K_M의 Qwen 3 Coder 14B(10 GB VRAM)가 최선입니다.',
          },
          {
            type: 'plain-terms',
            text: 'RTX 3060 12 GB를 보유하고 있다면 채팅에는 Llama 3 8B Q5_K_M을, 코딩에는 Qwen 3 Coder 14B Q4_K_M을 사용하십시오. 두 모델 모두 VRAM에 완전히 탑재되며 CPU 오프로드가 필요하지 않습니다.',
          },
        ],
      },
      body2: {
        title: 'RTX 3060에서 최고 성능 달성 방법',
        content: [
          '범용 사용에는 4096 토큰 컨텍스트 창을 사용하여 Q5_K_M의 Llama 3 8B를 실행하십시오. 이 구성은 총 ~8 GB VRAM을 사용하며 4 GB의 여유를 남겨 모델 전환 시 VRAM 오버플로를 방지합니다.',
          '코딩에는 Q4_K_M의 Qwen 3 Coder 14B가 명확한 선택입니다. HumanEval에서 Llama 3 8B를 능가하고, 10 GB VRAM에 탑재되며, 파인튜닝 없이 Python, TypeScript, Go를 처리합니다.',
          '항상 최소 1.5–2 GB VRAM을 여유 공간으로 확보하십시오. 첫 번째 모델을 언로드하지 않고 두 모델을 연속으로 로드하면 VRAM 오버플로가 발생하고 느린 CPU 오프로드가 강제됩니다. GPU 벤치마크 전체 비교는 <a href="/ko/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">로컬 LLM 최적 GPU</a>를 참조하십시오. GPU가 12 GB 미만이라면 <a href="/ko/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM 최적 모델</a>을 참조하십시오. RTX 3060에서 최적 범용 모델을 실행하려면:',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: '최초 실행 시 Pull이 약 7 GB를 다운로드합니다. 이후 실행은 캐시에서 즉시 시작됩니다. 더 큰 컨텍스트 창이 필요한 경우 <code>--num-ctx 4096</code>을 사용하십시오.' }],
      },
      faq: {
        id: 'faq',
        title: 'RTX 3060 모델에 관한 자주 묻는 질문',
        faqs: [
          {
            q: 'RTX 3060으로 70B 모델을 실행할 수 있습니까?',
            a: '불가합니다. Q4_K_M의 70B 모델은 약 40 GB VRAM이 필요합니다. RTX 3060 12 GB는 Q4 기준 최대 ~14B 모델까지 실행 가능합니다. 옵션은 <a href="/ko/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">70B 모델에 필요한 VRAM</a>을 참조하십시오.',
          },
          {
            q: 'RTX 3060 12 GB는 로컬 LLM에 적합합니까?',
            a: '예 — 이 VRAM 등급에서 최고의 가성비를 제공합니다. 12 GB 용량은 Q4 기준 14B 모델을 실행할 수 있으며, 8 GB 카드로는 불가능합니다. 중고 가격은 보통 $280–$350입니다.',
          },
          {
            q: 'RTX 3060 12 GB에서 어떤 양자화를 사용해야 합니까?',
            a: '7–8B 모델에는 Q5_K_M(12 GB 예산 내 최고 품질), 13–14B 모델에는 Q4_K_M(탑재를 위해 필수)을 사용하십시오. 품질 트레이드오프는 <a href="/ko/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M의 의미</a>를 참조하십시오.',
          },
          {
            q: 'Ollama는 RTX 3060 GPU를 자동으로 사용합니까?',
            a: '예. Ollama는 Windows와 Linux에서 CUDA를 통해 NVIDIA GPU를 자동으로 감지합니다. 수동 설정이 필요하지 않습니다. <code>ollama run 모델이름</code>을 실행하면 VRAM이 충분할 경우 GPU에 완전히 로드됩니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[6 GB VRAM 최적 로컬 LLM](/ko/prompt-bites/best-local-llm-6gb-vram)',
          '[Q4_K_M 양자화란?](/ko/prompt-bites/what-is-q4-k-m-quantization)',
          '[로컬 LLM 최적 GPU](/ko/local-llms/best-gpus-for-local-llms)',
          '[70B 모델에 필요한 VRAM](/ko/prompt-bites/vram-for-70b-model)',
        ],
      },
    },
  },
}
