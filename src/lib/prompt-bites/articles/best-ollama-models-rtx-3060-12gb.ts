import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Ollama Models for RTX 3060 12 GB?',
    seoTitle: 'RTX 3060: Ollama Picks 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Llama 3 8B Q5_K_M for chat (20 tok/s), Qwen 2.5 Coder 14B Q4 for code. Both fit in 12 GB VRAM. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Qwen 2.5 Coder 14B', 'Mistral 7B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama on an RTX 3060',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-6gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for RTX 3060 12 GB?',
        answer: 'With 12 GB VRAM, the best general model is Llama 3 8B at Q5_K_M, delivering 20-30 tokens per second with balanced quality. For coding, use Qwen 2.5 Coder 14B at Q4_K_M. Both run at 20–30 tokens per second.',
        bullets: [
          'Llama 3 8B Q5_K_M: best general purpose on RTX 3060',
          'Qwen 2.5 Coder 14B Q4_K_M: best for coding',
          'Mistral 7B Q6_K: fast alternative for chat',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Beste Ollama-Modelle für RTX 3060 12 GB?',
        answer: 'Mit 12 GB VRAM ist das beste Allzweckmodell Llama 3 8B bei Q5_K_M, liefert 20-30 Tokens pro Sekunde mit ausgewogener Qualität. Für Coding verwenden Sie Qwen 2.5 Coder 14B bei Q4_K_M. Beide laufen mit 20–30 Token pro Sekunde.',
        bullets: [
          'Llama 3 8B Q5_K_M: bestes Allzweckmodell für RTX 3060',
          'Qwen 2.5 Coder 14B Q4_K_M: beste Wahl für Coding',
          'Mistral 7B Q6_K: schnelle Alternative für Chat',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleurs modèles Ollama pour RTX 3060 12 Go ?',
        answer: 'Avec 12 Go de VRAM, le meilleur modèle général est Llama 3 8B en Q5_K_M, délivrant 20-30 tokens par seconde avec qualité équilibrée. Pour le code, utilisez Qwen 2.5 Coder 14B en Q4_K_M. Les deux tournent à 20–30 tokens par seconde.',
        bullets: [
          'Llama 3 8B Q5_K_M : meilleur usage général sur RTX 3060',
          'Qwen 2.5 Coder 14B Q4_K_M : meilleur pour le code',
          'Mistral 7B Q6_K : alternative rapide pour le chat',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'RTX 3060 12 GB向け最良Ollamaモデルは？',
        answer: '12 GB VRAMでは、汎用最良モデルはQ5_K_MのLlama 3 8Bで、バランスの取れた品質で20-30トークン/秒を配信。コーディングにはQ4_K_MのQwen 2.5 Coder 14Bを使用してください。どちらも20–30トークン/秒で動作します。',
        bullets: [
          'Llama 3 8B Q5_K_M：RTX 3060での最良汎用モデル',
          'Qwen 2.5 Coder 14B Q4_K_M：コーディングに最適',
          'Mistral 7B Q6_K：チャット向けの高速な代替',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'RTX 3060 12 GB最佳Ollama模型？',
        answer: '12 GB显存下，最佳通用模型是Q5_K_M的Llama 3 8B，提供20-30 tok/s平衡质量。编程用途选择Q4_K_M的Qwen 2.5 Coder 14B。两者均可达到20–30 tok/s。',
        bullets: [
          'Llama 3 8B Q5_K_M：RTX 3060最佳通用模型',
          'Qwen 2.5 Coder 14B Q4_K_M：编程最佳选择',
          'Mistral 7B Q6_K：聊天用途的快速替代',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best general: Llama 3 8B at Q5_K_M — 7 GB VRAM, ~25 tok/s, excellent chat and coding quality',
          'Best for coding: Qwen 2.5 Coder 14B at Q4_K_M — 10 GB VRAM, top HumanEval score in the 14B class',
          'RTX 3060 12 GB is the only consumer GPU under $400 with enough VRAM to run 14B models at Q4',
        ],
      },
      body1: {
        title: 'Top 5 Ollama Models for RTX 3060 12 GB',
        content: [
          'As of May 2026, <strong>the RTX 3060 12 GB is the cheapest path to running 14B models locally.</strong> Its 12 GB VRAM matches the RTX 4070 Ti (~$800) and RTX 4080 (~$1,100) at a fraction of the cost. For a $280–$350 used card, you get the same model capacity as cards costing 3× more — limited only by raw speed, not what you can load.',
          'All five models below run with Ollama out of the box. Speed figures are at default 2048-token context on a desktop PC with no CPU offload.',
        ],
        columns: ['Model', 'VRAM Used', 'Speed'],
        rows: [
          { 'Model': 'Llama 3 8B Q5_K_M', 'VRAM Used': '7.0 GB', 'Speed': '~25 tok/s' },
          { 'Model': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM Used': '10.0 GB', 'Speed': '~20 tok/s' },
          { 'Model': 'Mistral 7B Q6_K', 'VRAM Used': '6.5 GB', 'Speed': '~27 tok/s' },
          { 'Model': 'Phi-4 Q5_K_M', 'VRAM Used': '6.2 GB', 'Speed': '~28 tok/s' },
          { 'Model': 'Qwen 14B Q4_K_M', 'VRAM Used': '10.0 GB', 'Speed': '~18 tok/s' },
        ],
      },
      body2: {
        title: 'How to Get the Best Performance on RTX 3060',
        content: [
          'For the general-use pick, run Llama 3 8B at Q5_K_M with a 4096-token context window. This uses ~8 GB VRAM total and leaves 4 GB of headroom — enough to avoid VRAM overflow when switching between models.',
          'For coding, Qwen 2.5 Coder 14B at Q4_K_M is the clear choice: it outperforms Llama 3 8B on HumanEval, fits in 10 GB VRAM, and handles Python, TypeScript, and Go without fine-tuning.',
          'Leave at least 1.5–2 GB of VRAM free at all times. Loading two models back-to-back without unloading the first triggers VRAM overflow and forces slow CPU offload. For the full GPU benchmark context, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs</a>. If your GPU has less than 12 GB, see the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best models for 6 GB VRAM</a>. To run the top general-purpose pick on your RTX 3060:',
        ],
        codeBlock: 'ollama pull llama3:8b-instruct-q5_K_M\nollama run llama3:8b-instruct-q5_K_M',
        callouts: [{ type: 'tip', text: 'Pull downloads ~7 GB on first run. Subsequent runs start instantly from cache. Use <code>--num-ctx 4096</code> if you need a larger context window.' }],
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
    seoTitle: 'RTX 3060: Ollama-Picks 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Llama 3 8B Q5_K_M für Chat, Qwen 2.5 Coder 14B Q4 für Code. Beide laufen mit 20–30 Tok/s. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bestes Allzweck: Llama 3 8B bei Q5_K_M — 7 GB VRAM, ~25 Tok/s, ausgezeichnete Chat- und Coding-Qualität',
          'Bestes für Coding: Qwen 2.5 Coder 14B bei Q4_K_M — 10 GB VRAM, top HumanEval-Score in der 14B-Klasse',
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
          { 'Modell': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM-Bedarf': '10,0 GB', 'Geschwindigkeit': '~20 Tok/s' },
          { 'Modell': 'Mistral 7B Q6_K', 'VRAM-Bedarf': '6,5 GB', 'Geschwindigkeit': '~27 Tok/s' },
          { 'Modell': 'Phi-4 Q5_K_M', 'VRAM-Bedarf': '6,2 GB', 'Geschwindigkeit': '~28 Tok/s' },
          { 'Modell': 'Qwen 14B Q4_K_M', 'VRAM-Bedarf': '10,0 GB', 'Geschwindigkeit': '~18 Tok/s' },
        ],
      },
      body2: {
        title: 'So erzielen Sie die beste Leistung auf dem RTX 3060',
        content: [
          'Für den Allzweck-Pick führen Sie Llama 3 8B bei Q5_K_M mit einem 4096-Token-Kontextfenster aus. Dies verwendet ~8 GB VRAM gesamt und lässt 4 GB Headroom — genug, um VRAM-Überlauf beim Wechseln zwischen Modellen zu vermeiden.',
          'Für Coding ist Qwen 2.5 Coder 14B bei Q4_K_M die klare Wahl: es übertrifft Llama 3 8B bei HumanEval, passt in 10 GB VRAM und verarbeitet Python, TypeScript und Go ohne Fine-Tuning.',
          'Halten Sie immer mindestens 1,5–2 GB VRAM frei. Das Laden zweier Modelle nacheinander ohne das erste zu entladen löst VRAM-Überlauf aus und erzwingt langsames CPU-Offload. Für den vollständigen GPU-Benchmark-Kontext, siehe <a href="/local-llms/best-gpus-for-local-llms?lang=de" class="text-primary hover:underline">beste GPUs für lokale LLMs</a>. Wenn Ihre GPU weniger als 12 GB hat, siehe <a href="/prompt-bites/best-local-llm-6gb-vram?lang=de" class="text-primary hover:underline">beste Modelle für 6 GB VRAM</a>. So führen Sie den besten Allzweck-Pick auf Ihrem RTX 3060 aus:',
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
            a: 'Nein. Ein 70B-Modell bei Q4_K_M benötigt ca. 40 GB VRAM. Die RTX 3060 12 GB kommt maximal auf ~14B-Modelle bei Q4. Siehe <a href="/prompt-bites/vram-for-70b-model?lang=de" class="text-primary hover:underline">wie viel VRAM ein 70B-Modell benötigt</a> für Optionen.',
          },
          {
            q: 'Ist RTX 3060 12 GB gut für lokale LLMs?',
            a: 'Ja — es ist das beste Preis-Leistungs-Verhältnis in diesem VRAM-Tier. Die 12-GB-Kapazität ermöglicht 14B-Modelle bei Q4, die 8-GB-Karten nicht ausführen können. Straßenpreis typischerweise ca. 250–310 € gebraucht.',
          },
          {
            q: 'Welche Quantisierung sollte ich auf RTX 3060 12 GB verwenden?',
            a: 'Q5_K_M für 7–8B-Modelle (beste Qualität im 12-GB-Budget). Q4_K_M für 13–14B-Modelle (erforderlich, um hineinzupassen). Siehe <a href="/prompt-bites/what-is-q4-k-m-quantization?lang=de" class="text-primary hover:underline">was Q4_K_M bedeutet</a> für den Qualitäts-Kompromiss.',
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
    seoTitle: 'Ollama sur RTX 3060 12 Go 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3060 12 Go : Llama 3 8B Q5_K_M pour le chat, Qwen 2.5 Coder 14B Q4 pour le code. Les deux à 20–30 tok/s. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur usage général : Llama 3 8B en Q5_K_M — 7 Go de VRAM, ~25 tok/s, excellente qualité chat et code',
          'Meilleur pour le code : Qwen 2.5 Coder 14B en Q4_K_M — 10 Go de VRAM, meilleur score HumanEval en classe 14B',
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
          { 'Modèle': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM utilisé': '10,0 Go', 'Vitesse': '~20 tok/s' },
          { 'Modèle': 'Mistral 7B Q6_K', 'VRAM utilisé': '6,5 Go', 'Vitesse': '~27 tok/s' },
          { 'Modèle': 'Phi-4 Q5_K_M', 'VRAM utilisé': '6,2 Go', 'Vitesse': '~28 tok/s' },
          { 'Modèle': 'Qwen 14B Q4_K_M', 'VRAM utilisé': '10,0 Go', 'Vitesse': '~18 tok/s' },
        ],
      },
      body2: {
        title: 'Comment obtenir les meilleures performances sur RTX 3060',
        content: [
          'Pour l\'usage général, lancez Llama 3 8B en Q5_K_M avec une fenêtre de contexte de 4 096 tokens. Cela utilise ~8 Go de VRAM au total et laisse 4 Go de marge — suffisant pour éviter les débordements lors du changement de modèle.',
          'Pour le code, Qwen 2.5 Coder 14B en Q4_K_M est le choix évident : il surpasse Llama 3 8B sur HumanEval, tient en 10 Go de VRAM et gère Python, TypeScript et Go sans fine-tuning.',
          'Laissez toujours au moins 1,5–2 Go de VRAM libres. Pour le contexte complet des benchmarks GPU, voir <a href="/local-llms/best-gpus-for-local-llms?lang=fr" class="text-primary hover:underline">les meilleurs GPU pour LLM locaux</a>. Si votre GPU a moins de 12 Go, voir <a href="/prompt-bites/best-local-llm-6gb-vram?lang=fr" class="text-primary hover:underline">les meilleurs modèles pour 6 Go de VRAM</a>. Pour lancer le meilleur choix général sur votre RTX 3060 :',
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
            a: 'Non. Un modèle 70B en Q4_K_M nécessite environ 40 Go de VRAM. La RTX 3060 12 Go est limitée aux modèles ~14B en Q4. Voir <a href="/prompt-bites/vram-for-70b-model?lang=fr" class="text-primary hover:underline">combien de VRAM un modèle 70B nécessite</a> pour les options.',
          },
          {
            q: 'La RTX 3060 12 Go est-elle bonne pour les LLM locaux ?',
            a: 'Oui — c\'est le meilleur rapport qualité-prix à ce niveau de VRAM. La capacité de 12 Go permet les modèles 14B en Q4, que les cartes 8 Go ne peuvent pas exécuter. Prix de revente typiquement env. 280–350 € d\'occasion.',
          },
          {
            q: 'Quelle quantisation utiliser sur RTX 3060 12 Go ?',
            a: 'Q5_K_M pour les modèles 7–8B (meilleure qualité dans le budget 12 Go). Q4_K_M pour les modèles 13–14B (requis pour tenir). Voir <a href="/prompt-bites/what-is-q4-k-m-quantization?lang=fr" class="text-primary hover:underline">ce que signifie Q4_K_M</a> pour le compromis qualité.',
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
    seoTitle: 'RTX 3060 12 GB最良Ollamaモデル 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3060 12 GBはLlama 3 8B Q5_K_Mでチャット、Qwen 2.5 Coder 14B Q4でコーディングを20–30トークン/秒で実行します。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '汎用ベスト：Q5_K_MのLlama 3 8B — 7 GB VRAM、~25トークン/秒、優秀なチャットとコーディング品質',
          'コーディングベスト：Q4_K_MのQwen 2.5 Coder 14B — 10 GB VRAM、14Bクラス最高HumanEvalスコア',
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
          { 'モデル': 'Qwen 2.5 Coder 14B Q4_K_M', '使用VRAM': '10.0 GB', '速度': '~20トークン/秒' },
          { 'モデル': 'Mistral 7B Q6_K', '使用VRAM': '6.5 GB', '速度': '~27トークン/秒' },
          { 'モデル': 'Phi-4 Q5_K_M', '使用VRAM': '6.2 GB', '速度': '~28トークン/秒' },
          { 'モデル': 'Qwen 14B Q4_K_M', '使用VRAM': '10.0 GB', '速度': '~18トークン/秒' },
        ],
      },
      body2: {
        title: 'RTX 3060で最高のパフォーマンスを得る方法',
        content: [
          '汎用用途には、4096トークンコンテキストウィンドウでQ5_K_MのLlama 3 8Bを実行してください。合計約8 GB VRAMを使用し、4 GBの余裕を残します。',
          'コーディングには、Q4_K_MのQwen 2.5 Coder 14Bが明確な選択です：HumanEvalでLlama 3 8Bを上回り、10 GB VRAMに収まり、ファインチューニングなしでPython、TypeScript、Goを処理します。',
          '常に少なくとも1.5–2 GB VRAMを空けておいてください。完全なGPUベンチマーク背景については<a href="/local-llms/best-gpus-for-local-llms?lang=ja" class="text-primary hover:underline">ローカルLLM向け最良GPU</a>を参照してください。GPUが12 GB未満の場合は<a href="/prompt-bites/best-local-llm-6gb-vram?lang=ja" class="text-primary hover:underline">6 GB VRAM向け最良モデル</a>をご覧ください。RTX 3060で汎用Pickを実行するには：',
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
            a: 'いいえ。Q4_K_Mの70Bモデルには約40 GB VRAMが必要です。RTX 3060 12 GBはQ4で最大~14Bモデルまでです。選択肢については<a href="/prompt-bites/vram-for-70b-model?lang=ja" class="text-primary hover:underline">70Bモデルに必要なVRAM</a>を参照してください。',
          },
          {
            q: 'RTX 3060 12 GBはローカルLLMに良いですか？',
            a: 'はい — このVRAMティアで最高のコストパフォーマンスです。12 GBの容量により、8 GBカードでは実行できないQ4の14Bモデルが可能になります。街価は通常¥40,000–¥53,000（中古）です。',
          },
          {
            q: 'RTX 3060 12 GBではどの量化を使うべきですか？',
            a: '7–8BモデルにはQ5_K_M（12 GBバジェット内での最高品質）。13–14BモデルにはQ4_K_M（収めるために必要）。品質のトレードオフについては<a href="/prompt-bites/what-is-q4-k-m-quantization?lang=ja" class="text-primary hover:underline">Q4_K_Mの意味</a>を参照してください。',
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
    seoTitle: 'RTX 3060 12 GB最佳Ollama模型 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB：Llama 3 8B Q5_K_M用于聊天，Qwen 2.5 Coder 14B Q4用于编程，速度20–30 tok/s。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳通用：Q5_K_M的Llama 3 8B——7 GB显存，约25 tok/s，聊天和编程质量出色',
          '最佳编程：Q4_K_M的Qwen 2.5 Coder 14B——10 GB显存，14B级别最高HumanEval分数',
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
          { '模型': 'Qwen 2.5 Coder 14B Q4_K_M', '显存占用': '10.0 GB', '速度': '~20 tok/s' },
          { '模型': 'Mistral 7B Q6_K', '显存占用': '6.5 GB', '速度': '~27 tok/s' },
          { '模型': 'Phi-4 Q5_K_M', '显存占用': '6.2 GB', '速度': '~28 tok/s' },
          { '模型': 'Qwen 14B Q4_K_M', '显存占用': '10.0 GB', '速度': '~18 tok/s' },
        ],
      },
      body2: {
        title: '如何在RTX 3060上获得最佳性能',
        content: [
          '对于通用用途，以4096 token上下文窗口运行Q5_K_M的Llama 3 8B。总计使用约8 GB显存，留有4 GB余量。',
          '对于编程，Q4_K_M的Qwen 2.5 Coder 14B是明确的选择：它在HumanEval上超越Llama 3 8B，适合10 GB显存，无需微调即可处理Python、TypeScript和Go。',
          '始终保持至少1.5–2 GB显存空闲。完整的GPU基准测试背景请参阅<a href="/local-llms/best-gpus-for-local-llms?lang=zh" class="text-primary hover:underline">本地LLM最佳GPU</a>。如果您的GPU显存小于12 GB，请参阅<a href="/prompt-bites/best-local-llm-6gb-vram?lang=zh" class="text-primary hover:underline">6 GB显存最佳模型</a>。在您的RTX 3060上运行最佳通用选择：',
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
            a: '不能。Q4_K_M的70B模型需要约40 GB显存。RTX 3060 12 GB最多支持Q4的约14B模型。选择方案请参阅<a href="/prompt-bites/vram-for-70b-model?lang=zh" class="text-primary hover:underline">70B模型所需显存</a>。',
          },
          {
            q: 'RTX 3060 12 GB适合运行本地LLM吗？',
            a: '适合——这是此显存层级的最佳性价比之选。12 GB容量可运行Q4的14B模型，而8 GB显卡则不行。二手市场价格通常为$280–$350。',
          },
          {
            q: 'RTX 3060 12 GB应该使用哪种量化？',
            a: '7–8B模型使用Q5_K_M（12 GB预算内的最佳质量）。13–14B模型使用Q4_K_M（装入所必需的）。质量权衡请参阅<a href="/prompt-bites/what-is-q4-k-m-quantization?lang=zh" class="text-primary hover:underline">Q4_K_M的含义</a>。',
          },
          {
            q: 'Ollama会自动使用RTX 3060 GPU吗？',
            a: '会。Ollama在Windows和Linux上通过CUDA自动检测NVIDIA GPU，无需手动配置。运行<code>ollama run 模型名</code>，如果显存充足则完全加载到GPU。',
          },
        ],
      },
    },
  },
}
