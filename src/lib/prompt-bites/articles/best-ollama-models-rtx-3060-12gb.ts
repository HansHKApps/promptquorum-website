import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-en.webp',
    title: 'Best Ollama Models for RTX 3060 12 GB?',
    dateModified: '2026-09-02',
    seoTitle: 'Best Ollama Models for RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Qwen3 8B (6 GB VRAM, ~40 tok/s) for general tasks, Phi-4 Q4_K_M for reasoning, Mistral Nemo 12B for chat. All run at 30–40 tok/s. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    current_models_mentioned: ['Qwen3 8B', 'Phi-4', 'Mistral Nemo 12B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama on an RTX 3060',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-6gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for RTX 3060 12 GB?',
        answer: 'The best Ollama models for an RTX 3060 12 GB are **Qwen3 8B** (general tasks, 6 GB VRAM), **Phi-4** in Q4_K_M (reasoning, ~9 GB VRAM), and **Mistral Nemo 12B** (8 GB VRAM). All run at 30–40 tokens/second on this GPU.',
        bullets: [
          'Qwen3 8B: best general purpose on RTX 3060 — 6 GB VRAM, ~40 tok/s',
          'Phi-4 Q4_K_M: best for reasoning and coding — ~9 GB VRAM',
          'Mistral Nemo 12B: strong chat alternative — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
      de: {
        question: 'Beste Ollama-Modelle für RTX 3060 12 GB?',
        answer: 'Mit 12 GB VRAM ist das beste Allzweckmodell Qwen3 8B, das mit 6 GB VRAM ~40 Token pro Sekunde liefert. Für Reasoning und Coding verwenden Sie Phi-4 bei Q4_K_M (~9 GB VRAM). Mistral Nemo 12B ist eine starke Chat-Alternative mit 8 GB VRAM.',
        bullets: [
          'Qwen3 8B: bestes Allzweckmodell für RTX 3060 — 6 GB VRAM, ~40 Tok/s',
          'Phi-4 Q4_K_M: beste Wahl für Reasoning und Coding — ~9 GB VRAM',
          'Mistral Nemo 12B: starke Chat-Alternative — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
      fr: {
        question: 'Meilleurs modèles Ollama pour RTX 3060 12 Go ?',
        answer: 'Avec 12 Go de VRAM, le meilleur modèle général est Qwen3 8B, qui délivre environ 40 tokens par seconde avec 6 Go de VRAM. Pour le raisonnement et le code, utilisez Phi-4 en Q4_K_M (~9 Go de VRAM). Mistral Nemo 12B est une bonne alternative pour le chat avec 8 Go de VRAM.',
        bullets: [
          'Qwen3 8B : meilleur usage général sur RTX 3060 — 6 Go de VRAM, ~40 tok/s',
          'Phi-4 Q4_K_M : meilleur pour le raisonnement et le code — ~9 Go de VRAM',
          'Mistral Nemo 12B : bonne alternative pour le chat — 8 Go de VRAM',
        ],
        updatedDate: '2026-09-02',
      },
      ja: {
        question: 'RTX 3060 12 GB向け最良Ollamaモデルは？',
        answer: '12 GB VRAMでは、汎用最良モデルはQwen3 8Bで、6 GB VRAMで約40トークン/秒を実現します。推論とコーディングにはQ4_K_MのPhi-4（約9 GB VRAM）を使用してください。Mistral Nemo 12Bは8 GB VRAMで動作する優れたチャット向け代替です。',
        bullets: [
          'Qwen3 8B：RTX 3060での最良汎用モデル — 6 GB VRAM、約40トークン/秒',
          'Phi-4 Q4_K_M：推論とコーディングに最適 — 約9 GB VRAM',
          'Mistral Nemo 12B：チャット向けの優れた代替 — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
      zh: {
        question: 'RTX 3060 12 GB最佳Ollama模型？',
        answer: '12 GB显存下，最佳通用模型是Qwen3 8B，6 GB显存下可达约40 tok/s。推理和编程任务推荐Q4_K_M的Phi-4（约9 GB显存）。Mistral Nemo 12B是聊天场景的强力替代，占用8 GB显存。',
        bullets: [
          'Qwen3 8B：RTX 3060最佳通用模型——6 GB显存，约40 tok/s',
          'Phi-4 Q4_K_M：推理和编程最佳选择——约9 GB显存',
          'Mistral Nemo 12B：聊天场景的强力替代——8 GB显存',
        ],
        updatedDate: '2026-09-02',
      },
      es: {
        question: '¿Mejores modelos Ollama para RTX 3060 12 GB?',
        answer: 'Con 12 GB de VRAM, el mejor modelo de uso general es Qwen3 8B, que entrega unos 40 tokens por segundo con 6 GB de VRAM. Para razonamiento y programación, usa Phi-4 en Q4_K_M (~9 GB de VRAM). Mistral Nemo 12B es una buena alternativa para chat con 8 GB de VRAM.',
        bullets: [
          'Qwen3 8B: mejor uso general en RTX 3060 — 6 GB VRAM, ~40 tok/s',
          'Phi-4 Q4_K_M: mejor para razonamiento y programación — ~9 GB VRAM',
          'Mistral Nemo 12B: buena alternativa para chat — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best general: Qwen3 8B — 6 GB VRAM, ~40 tok/s, excellent chat and instruction quality',
          'Best for reasoning/coding: Phi-4 Q4_K_M — ~9 GB VRAM, top reasoning score in the sub-10B class',
          'RTX 3060 12 GB fits any model under 10 GB at Q4 quantization, including Qwen3 8B, Phi-4, and Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'Top 3 Ollama Models for RTX 3060 12 GB',
        content: [
          'As of September 2026, <strong>the RTX 3060 12 GB is the best-value GPU for running 6–12B models locally.</strong> Its 12 GB VRAM handles any model under 10 GB at Q4 quantization, including the current Qwen3 and Phi-4 generations. On a used card, you get 30–40 tokens per second on the top picks below.',
          'All three models below run with Ollama out of the box. Speed figures are at default 2048-token context on a desktop PC with no CPU offload.',
        ],
        columns: ['Model', 'VRAM Used', 'Speed'],
        rows: [
          { 'Model': 'Qwen3 8B', 'VRAM Used': '6.0 GB', 'Speed': '~40 tok/s' },
          { 'Model': 'Phi-4 Q4_K_M', 'VRAM Used': '~9.0 GB', 'Speed': '~35 tok/s' },
          { 'Model': 'Mistral Nemo 12B Q4_K_M', 'VRAM Used': '~8.0 GB', 'Speed': '~30 tok/s' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For an RTX 3060 12 GB, Qwen3 8B is the best general model — 6 GB VRAM, ~40 tok/s, available via `ollama pull qwen3:8b`.',
          },
          {
            type: 'plain-terms',
            text: 'The RTX 3060 12 GB handles any model under 10 GB in Q4 quantization, including Qwen3 8B, Phi-4, and Mistral Nemo 12B.',
          },
        ],
      },
      body2: {
        title: 'How to Get the Best Performance on RTX 3060',
        content: [
          'For the general-use pick, run Qwen3 8B with a 4096-token context window. This uses ~6 GB VRAM and leaves 6 GB of headroom — enough to avoid VRAM overflow when switching between models.',
          'For reasoning and coding tasks, Phi-4 at Q4_K_M is the clear choice: it fits in ~9 GB VRAM and handles Python, TypeScript, and Go without fine-tuning.',
          'Leave at least 1.5–2 GB of VRAM free at all times. Loading two models back-to-back without unloading the first triggers VRAM overflow and forces slow CPU offload. For the full GPU benchmark context, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs</a>. If your GPU has less than 12 GB, see the <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best models for 6 GB VRAM</a>. To install all three top picks:',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-de.webp',
    title: 'Beste Ollama-Modelle für RTX 3060 12 GB?',
    seoTitle: 'Beste Ollama-Modelle für RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Qwen3 8B (6 GB VRAM, ~40 Tok/s) für Allzweck, Phi-4 Q4_K_M für Reasoning, Mistral Nemo 12B für Chat. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Bestes Allzweck: Qwen3 8B — 6 GB VRAM, ~40 Tok/s, ausgezeichnete Chat- und Instruction-Qualität',
          'Bestes für Reasoning/Coding: Phi-4 bei Q4_K_M — ~9 GB VRAM, top Reasoning-Score in der Sub-10B-Klasse',
          'RTX 3060 12 GB fasst jedes Modell unter 10 GB bei Q4-Quantisierung, einschließlich Qwen3 8B, Phi-4 und Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'Top 3 Ollama-Modelle für RTX 3060 12 GB',
        content: [
          'Stand September 2026 ist <strong>die RTX 3060 12 GB die beste Preis-Leistungs-GPU, um 6–12B-Modelle lokal auszuführen.</strong> Ihre 12 GB VRAM fassen jedes Modell unter 10 GB bei Q4-Quantisierung, einschließlich der aktuellen Qwen3- und Phi-4-Generation. Auf einer gebrauchten Karte erreichen Sie 30–40 Tokens pro Sekunde bei den folgenden Top-Picks.',
          'Alle drei Modelle unten laufen mit Ollama sofort. Geschwindigkeitswerte bei Standard-2048-Token-Kontext auf einem Desktop-PC ohne CPU-Offload.',
        ],
        columns: ['Modell', 'VRAM-Bedarf', 'Geschwindigkeit'],
        rows: [
          { 'Modell': 'Qwen3 8B', 'VRAM-Bedarf': '6,0 GB', 'Geschwindigkeit': '~40 Tok/s' },
          { 'Modell': 'Phi-4 Q4_K_M', 'VRAM-Bedarf': '~9,0 GB', 'Geschwindigkeit': '~35 Tok/s' },
          { 'Modell': 'Mistral Nemo 12B Q4_K_M', 'VRAM-Bedarf': '~8,0 GB', 'Geschwindigkeit': '~30 Tok/s' },
        ],
      },
      body2: {
        title: 'So erzielen Sie die beste Leistung auf dem RTX 3060',
        content: [
          'Für den Allzweck-Pick führen Sie Qwen3 8B mit einem 4096-Token-Kontextfenster aus. Dies verwendet ~6 GB VRAM und lässt 6 GB Headroom — genug, um VRAM-Überlauf beim Wechseln zwischen Modellen zu vermeiden.',
          'Für Reasoning- und Coding-Aufgaben ist Phi-4 bei Q4_K_M die klare Wahl: es passt in ~9 GB VRAM und verarbeitet Python, TypeScript und Go ohne Fine-Tuning.',
          'Halten Sie immer mindestens 1,5–2 GB VRAM frei. Das Laden zweier Modelle nacheinander ohne das erste zu entladen löst VRAM-Überlauf aus und erzwingt langsames CPU-Offload. Für den vollständigen GPU-Benchmark-Kontext, siehe <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">beste GPUs für lokale LLMs</a>. Wenn Ihre GPU weniger als 12 GB hat, siehe <a href="/de/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">beste Modelle für 6 GB VRAM</a>. So installieren Sie alle drei Top-Picks:',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: 'Jeder Pull lädt beim ersten Ausführen 4–8 GB herunter. Nachfolgende Ausführungen starten sofort aus dem Cache. Verwenden Sie <code>--num-ctx 4096</code> für ein größeres Kontextfenster.' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-fr.webp',
    title: 'Meilleurs modèles Ollama pour RTX 3060 12 Go ?',
    seoTitle: 'Meilleurs modèles Ollama RTX 3060 12 Go 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 Go : Qwen3 8B (6 Go de VRAM, ~40 tok/s) pour l\'usage général, Phi-4 Q4_K_M pour le raisonnement, Mistral Nemo 12B pour le chat. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur usage général : Qwen3 8B — 6 Go de VRAM, ~40 tok/s, excellente qualité chat et instructions',
          'Meilleur pour le raisonnement/code : Phi-4 en Q4_K_M — ~9 Go de VRAM, meilleur score de raisonnement en classe sub-10B',
          'La RTX 3060 12 Go fait tourner tout modèle de moins de 10 Go en quantisation Q4, dont Qwen3 8B, Phi-4 et Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'Top 3 des modèles Ollama pour RTX 3060 12 Go',
        content: [
          'En septembre 2026, <strong>la RTX 3060 12 Go reste le GPU au meilleur rapport qualité-prix pour faire tourner des modèles de 6 à 12 Go localement.</strong> Ses 12 Go de VRAM font tourner tout modèle de moins de 10 Go en quantisation Q4, dont les générations actuelles de Qwen3 et Phi-4. Sur une carte d\'occasion, vous obtenez 30 à 40 tokens par seconde sur les modèles ci-dessous.',
          'Les trois modèles ci-dessous fonctionnent avec Ollama sans configuration. Les vitesses sont mesurées avec un contexte de 2 048 tokens par défaut sur un PC de bureau sans déchargement CPU.',
        ],
        columns: ['Modèle', 'VRAM utilisé', 'Vitesse'],
        rows: [
          { 'Modèle': 'Qwen3 8B', 'VRAM utilisé': '6,0 Go', 'Vitesse': '~40 tok/s' },
          { 'Modèle': 'Phi-4 Q4_K_M', 'VRAM utilisé': '~9,0 Go', 'Vitesse': '~35 tok/s' },
          { 'Modèle': 'Mistral Nemo 12B Q4_K_M', 'VRAM utilisé': '~8,0 Go', 'Vitesse': '~30 tok/s' },
        ],
      },
      body2: {
        title: 'Comment obtenir les meilleures performances sur RTX 3060',
        content: [
          'Pour l\'usage général, lancez Qwen3 8B avec une fenêtre de contexte de 4 096 tokens. Cela utilise ~6 Go de VRAM et laisse 6 Go de marge — suffisant pour éviter les débordements lors du changement de modèle.',
          'Pour le raisonnement et le code, Phi-4 en Q4_K_M est le choix évident : il tient en ~9 Go de VRAM et gère Python, TypeScript et Go sans fine-tuning.',
          'Laissez toujours au moins 1,5–2 Go de VRAM libres. Pour le contexte complet des benchmarks GPU, voir <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">les meilleurs GPU pour LLM locaux</a>. Si votre GPU a moins de 12 Go, voir <a href="/fr/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">les meilleurs modèles pour 6 Go de VRAM</a>. Pour installer les trois meilleurs choix :',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: 'Chaque pull télécharge 4 à 8 Go à la première exécution. Les exécutions suivantes démarrent instantanément depuis le cache. Utilisez <code>--num-ctx 4096</code> pour une fenêtre de contexte plus grande.' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-ja.webp',
    title: 'RTX 3060 12 GB向け最良Ollamaモデルは？',
    seoTitle: 'RTX 3060 12 GB最良Ollamaモデル2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GBは汎用用途にQwen3 8B（6 GB VRAM、約40トークン/秒）、推論にPhi-4 Q4_K_M、チャットにMistral Nemo 12Bが最適です。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '汎用ベスト：Qwen3 8B — 6 GB VRAM、約40トークン/秒、優秀なチャットと指示追従品質',
          '推論・コーディングベスト：Q4_K_MのPhi-4 — 約9 GB VRAM、sub-10Bクラス最高の推論スコア',
          'RTX 3060 12 GBはQ4量子化で10 GB未満のあらゆるモデル（Qwen3 8B、Phi-4、Mistral Nemo 12B含む）を動かせます',
        ],
      },
      body1: {
        title: 'RTX 3060 12 GB向けトップ3 Ollamaモデル',
        content: [
          '2026年9月現在、<strong>RTX 3060 12 GBは6～12Bモデルをローカルで動かす最良のコストパフォーマンスGPUです。</strong>その12 GB VRAMはQ4量子化で10 GB未満のあらゆるモデル（現行のQwen3およびPhi-4世代を含む）を動かせます。中古カードでも、以下のトップピックで30～40トークン/秒を得られます。',
          '以下の3つのモデルはすべてOllamaで即座に動作します。速度数値はCPUオフロードなしのデスクトップPCでデフォルト2048トークンコンテキスト時の値です。',
        ],
        columns: ['モデル', '使用VRAM', '速度'],
        rows: [
          { 'モデル': 'Qwen3 8B', '使用VRAM': '6.0 GB', '速度': '~40トークン/秒' },
          { 'モデル': 'Phi-4 Q4_K_M', '使用VRAM': '~9.0 GB', '速度': '~35トークン/秒' },
          { 'モデル': 'Mistral Nemo 12B Q4_K_M', '使用VRAM': '~8.0 GB', '速度': '~30トークン/秒' },
        ],
      },
      body2: {
        title: 'RTX 3060で最高のパフォーマンスを得る方法',
        content: [
          '汎用用途には、4096トークンコンテキストウィンドウでQwen3 8Bを実行してください。約6 GB VRAMを使用し、6 GBの余裕を残します。',
          '推論・コーディングタスクには、Q4_K_MのPhi-4が明確な選択です：約9 GB VRAMに収まり、ファインチューニングなしでPython、TypeScript、Goを処理します。',
          '常に少なくとも1.5–2 GB VRAMを空けておいてください。完全なGPUベンチマーク背景については<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカルLLM向け最良GPU</a>を参照してください。GPUが12 GB未満の場合は<a href="/ja/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM向け最良モデル</a>をご覧ください。トップ3ピックすべてをインストールするには：',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: '各Pullは初回実行時に4～8 GBをダウンロードします。以降の実行はキャッシュから即座に開始します。より大きなコンテキストウィンドウが必要な場合は<code>--num-ctx 4096</code>を使用してください。' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-zh.webp',
    title: 'RTX 3060 12 GB最佳Ollama模型？',
    seoTitle: 'RTX 3060 12 GB最佳Ollama模型2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB：Qwen3 8B（6 GB显存，约40 tok/s）适合通用任务，Phi-4 Q4_K_M适合推理，Mistral Nemo 12B适合聊天。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳通用：Qwen3 8B——6 GB显存，约40 tok/s，聊天和指令遵循质量出色',
          '最佳推理/编程：Q4_K_M的Phi-4——约9 GB显存，sub-10B级别最高推理分数',
          'RTX 3060 12 GB可在Q4量化下运行任何低于10 GB的模型，包括Qwen3 8B、Phi-4和Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'RTX 3060 12 GB最佳3款Ollama模型',
        content: [
          '截至2026年9月，<strong>RTX 3060 12 GB仍是本地运行6–12B模型性价比最高的GPU。</strong>其12 GB显存可在Q4量化下运行任何低于10 GB的模型，包括当前的Qwen3和Phi-4系列。即使是二手卡，运行以下推荐模型也能达到30–40 tok/s。',
          '以下三款模型均可通过Ollama直接运行，无需配置。速度数据基于桌面PC上默认2048 token上下文、无CPU卸载的测量值。',
        ],
        columns: ['模型', '显存占用', '速度'],
        rows: [
          { '模型': 'Qwen3 8B', '显存占用': '6.0 GB', '速度': '~40 tok/s' },
          { '模型': 'Phi-4 Q4_K_M', '显存占用': '~9.0 GB', '速度': '~35 tok/s' },
          { '模型': 'Mistral Nemo 12B Q4_K_M', '显存占用': '~8.0 GB', '速度': '~30 tok/s' },
        ],
      },
      body2: {
        title: '如何在RTX 3060上获得最佳性能',
        content: [
          '对于通用用途，以4096 token上下文窗口运行Qwen3 8B。约占用6 GB显存，留有6 GB余量。',
          '对于推理和编程任务，Q4_K_M的Phi-4是明确的选择：适合9 GB显存，无需微调即可处理Python、TypeScript和Go。',
          '始终保持至少1.5–2 GB显存空闲。完整的GPU基准测试背景请参阅<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地LLM最佳GPU</a>。如果您的GPU显存小于12 GB，请参阅<a href="/zh/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB显存最佳模型</a>。安装全部三款推荐模型：',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: '每次首次运行Pull下载4–8 GB。后续运行从缓存即时启动。如需更大上下文窗口，使用<code>--num-ctx 4096</code>。' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-pt.webp',
    title: 'Melhores modelos Ollama para RTX 3060 12 GB?',
    seoTitle: 'Melhores modelos Ollama RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Qwen3 8B (6 GB de VRAM, ~40 tok/s) para uso geral, Phi-4 Q4_K_M para raciocínio, Mistral Nemo 12B para chat. Resposta rápida do PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      pt: {
        question: 'Melhores modelos Ollama para RTX 3060 12 GB?',
        answer: 'Com 12 GB de VRAM, o melhor modelo de uso geral é Qwen3 8B, entregando cerca de 40 tokens por segundo com 6 GB de VRAM. Para raciocínio e programação, use Phi-4 em Q4_K_M (~9 GB de VRAM). Mistral Nemo 12B é uma boa alternativa para chat com 8 GB de VRAM.',
        bullets: [
          'Qwen3 8B: melhor uso geral na RTX 3060 — 6 GB VRAM, ~40 tok/s',
          'Phi-4 Q4_K_M: melhor para raciocínio e programação — ~9 GB VRAM',
          'Mistral Nemo 12B: boa alternativa para chat — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor geral: Qwen3 8B — 6 GB de VRAM, ~40 tok/s, excelente qualidade para chat e instruções',
          'Melhor para raciocínio/código: Phi-4 em Q4_K_M — ~9 GB de VRAM, melhor pontuação de raciocínio na classe sub-10B',
          'RTX 3060 12 GB cabe em qualquer modelo abaixo de 10 GB em quantização Q4, incluindo Qwen3 8B, Phi-4 e Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'Top 3 modelos Ollama para RTX 3060 12 GB',
        content: [
          'Em setembro de 2026, <strong>a RTX 3060 12 GB continua a melhor GPU custo-benefício para rodar modelos de 6–12 GB localmente.</strong> Seus 12 GB de VRAM cabem em qualquer modelo abaixo de 10 GB em quantização Q4, incluindo as gerações atuais de Qwen3 e Phi-4. Mesmo numa placa de segunda mão, você obtém 30–40 tokens por segundo nos modelos recomendados abaixo.',
          'Os três modelos abaixo funcionam com Ollama sem configuração. Os valores de velocidade são com contexto padrão de 2048 tokens em um PC desktop sem offload de CPU.',
        ],
        columns: ['Modelo', 'VRAM usada', 'Velocidade'],
        rows: [
          { 'Modelo': 'Qwen3 8B', 'VRAM usada': '6,0 GB', 'Velocidade': '~40 tok/s' },
          { 'Modelo': 'Phi-4 Q4_K_M', 'VRAM usada': '~9,0 GB', 'Velocidade': '~35 tok/s' },
          { 'Modelo': 'Mistral Nemo 12B Q4_K_M', 'VRAM usada': '~8,0 GB', 'Velocidade': '~30 tok/s' },
        ],
      },
      body2: {
        title: 'Como obter o melhor desempenho na RTX 3060',
        content: [
          'Para uso geral, execute Qwen3 8B com uma janela de contexto de 4096 tokens. Isso usa ~6 GB de VRAM e deixa 6 GB de margem — suficiente para evitar estouro de VRAM ao alternar entre modelos.',
          'Para raciocínio e programação, Phi-4 em Q4_K_M é a escolha clara: cabe em ~9 GB de VRAM e lida com Python, TypeScript e Go sem ajuste fino.',
          'Deixe sempre pelo menos 1,5–2 GB de VRAM livre. Carregar dois modelos em sequência sem descarregar o primeiro provoca estouro de VRAM e força o lento offload para CPU. Para o contexto completo de benchmarks de GPU, consulte <a href="/pt/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">as melhores GPUs para LLMs locais</a>. Se sua GPU tiver menos de 12 GB, consulte <a href="/pt/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">os melhores modelos para 6 GB de VRAM</a>. Para instalar as três melhores opções:',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: 'Cada pull baixa 4–8 GB na primeira execução. As execuções seguintes iniciam instantaneamente do cache. Use <code>--num-ctx 4096</code> se precisar de uma janela de contexto maior.' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-es.webp',
    title: '¿Mejores modelos Ollama para RTX 3060 12 GB?',
    seoTitle: 'Mejores modelos Ollama RTX 3060 12 GB 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: Qwen3 8B (6 GB de VRAM, ~40 tok/s) para uso general, Phi-4 Q4_K_M para razonamiento, Mistral Nemo 12B para chat. Respuesta rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      es: {
        question: '¿Mejores modelos Ollama para RTX 3060 12 GB?',
        answer: 'Con 12 GB de VRAM, el mejor modelo de uso general es Qwen3 8B, que entrega unos 40 tokens por segundo con 6 GB de VRAM. Para razonamiento y programación, usa Phi-4 en Q4_K_M (~9 GB de VRAM). Mistral Nemo 12B es una buena alternativa para chat con 8 GB de VRAM.',
        bullets: [
          'Qwen3 8B: mejor uso general en RTX 3060 — 6 GB VRAM, ~40 tok/s',
          'Phi-4 Q4_K_M: mejor para razonamiento y programación — ~9 GB VRAM',
          'Mistral Nemo 12B: buena alternativa para chat — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor uso general: Qwen3 8B — 6 GB VRAM, ~40 tok/s, excelente calidad de chat e instrucciones',
          'Mejor para razonamiento/código: Phi-4 en Q4_K_M — ~9 GB VRAM, mejor puntuación de razonamiento en la clase sub-10B',
          'RTX 3060 12 GB ejecuta cualquier modelo bajo 10 GB en cuantización Q4, incluidos Qwen3 8B, Phi-4 y Mistral Nemo 12B',
        ],
      },
      body1: {
        title: 'Top 3 modelos Ollama para RTX 3060 12 GB',
        content: [
          'A septiembre de 2026, <strong>la RTX 3060 12 GB sigue siendo la GPU con mejor relación calidad-precio para ejecutar modelos de 6–12 GB localmente.</strong> Sus 12 GB de VRAM ejecutan cualquier modelo bajo 10 GB en cuantización Q4, incluidas las generaciones actuales de Qwen3 y Phi-4. Incluso en una tarjeta de segunda mano, obtienes 30–40 tokens por segundo en los modelos recomendados a continuación.',
          'Los tres modelos siguientes funcionan con Ollama sin configuración. Las cifras de velocidad son con contexto predeterminado de 2048 tokens en un PC de escritorio sin offloading a CPU.',
        ],
        columns: ['Modelo', 'VRAM usada', 'Velocidad'],
        rows: [
          { 'Modelo': 'Qwen3 8B', 'VRAM usada': '6,0 GB', 'Velocidad': '~40 tok/s' },
          { 'Modelo': 'Phi-4 Q4_K_M', 'VRAM usada': '~9,0 GB', 'Velocidad': '~35 tok/s' },
          { 'Modelo': 'Mistral Nemo 12B Q4_K_M', 'VRAM usada': '~8,0 GB', 'Velocidad': '~30 tok/s' },
        ],
      },
      body2: {
        title: 'Cómo obtener el mejor rendimiento en RTX 3060',
        content: [
          'Para uso general, ejecuta Qwen3 8B con una ventana de contexto de 4096 tokens. Esto usa ~6 GB de VRAM y deja 6 GB de margen — suficiente para evitar desbordamiento al cambiar entre modelos.',
          'Para razonamiento y programación, Phi-4 en Q4_K_M es la elección clara: cabe en ~9 GB de VRAM y maneja Python, TypeScript y Go sin ajuste fino.',
          'Deja siempre al menos 1,5–2 GB de VRAM libres. Cargar dos modelos seguidos sin descargar el primero provoca desbordamiento de VRAM y fuerza un lento offloading a CPU. Para el contexto completo de benchmarks de GPU, consulta <a href="/es/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">las mejores GPUs para LLMs locales</a>. Si tu GPU tiene menos de 12 GB, consulta <a href="/es/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">los mejores modelos para 6 GB de VRAM</a>. Para instalar las tres mejores opciones:',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: 'Cada pull descarga 4–8 GB en la primera ejecución. Las ejecuciones siguientes arrancan al instante desde la caché. Usa <code>--num-ctx 4096</code> si necesitas una ventana de contexto más grande.' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-ar.webp',
    title: 'أفضل نماذج ⁨Ollama⁩ لـ⁨RTX 3060 12 GB⁩؟',
    seoTitle: 'أفضل نماذج ⁨Ollama⁩ لبطاقة ⁨RTX 3060 12 GB 2026⁩',
    metaDescription: '⁨RTX 3060 12 GB⁩: ⁨Qwen3 8B⁩ (⁨6 GB VRAM⁩، ⁨~40⁩ رمز/ثانية) للاستخدام العام، ⁨Phi-4 Q4⁩_⁨K⁩_⁨M⁩ للاستدلال، ⁨Mistral Nemo 12B⁩ للدردشة. إجابة سريعة من ⁨PromptQuorum⁩.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نماذج Ollama لـRTX 3060 12 GB؟',
        answer: 'مع 12 GB VRAM، أفضل نموذج للاستخدام العام هو Qwen3 8B، ويقدّم حوالي 40 رمز/ثانية بـ6 GB VRAM. للاستدلال والبرمجة، استخدم Phi-4 في Q4_K_M (~9 GB VRAM). يُعد Mistral Nemo 12B بديلاً جيداً للدردشة بـ8 GB VRAM.',
        bullets: [
          'Qwen3 8B: الأفضل للاستخدام العام على RTX 3060 — 6 GB VRAM، ~40 رمز/ثانية',
          'Phi-4 Q4_K_M: الأفضل للاستدلال والبرمجة — ~9 GB VRAM',
          'Mistral Nemo 12B: بديل جيد للدردشة — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل للاستخدام العام: Qwen3 8B — 6 GB VRAM، ~40 رمز/ثانية، جودة ممتازة للدردشة واتباع التعليمات',
          'الأفضل للاستدلال/البرمجة: Phi-4 في Q4_K_M — ~9 GB VRAM، أفضل نقاط استدلال في فئة ما دون 10B',
          'RTX 3060 12 GB تُشغّل أي نموذج دون 10 GB بتكميم Q4، بما في ذلك Qwen3 8B وPhi-4 وMistral Nemo 12B',
        ],
      },
      body1: {
        title: 'أفضل 3 نماذج Ollama لـRTX 3060 12 GB',
        content: [
          'اعتباراً من سبتمبر 2026، لا تزال <strong>RTX 3060 12 GB أفضل GPU من حيث القيمة لتشغيل نماذج 6–12B محلياً.</strong> 12 GB VRAM لديها تُشغّل أي نموذج دون 10 GB بتكميم Q4، بما في ذلك أجيال Qwen3 وPhi-4 الحالية. حتى على بطاقة مستعملة، تحصل على 30–40 رمز/ثانية مع النماذج الموصى بها أدناه.',
          'النماذج الثلاثة التالية تعمل مع Ollama دون إعداد. أرقام السرعة مع سياق 2048 رمز افتراضي على حاسوب مكتبي دون تفريغ على CPU.',
        ],
        columns: ['النموذج', 'VRAM المستخدمة', 'السرعة'],
        rows: [
          { 'النموذج': 'Qwen3 8B', 'VRAM المستخدمة': '6.0 GB', 'السرعة': '~40 رمز/ثانية' },
          { 'النموذج': 'Phi-4 Q4_K_M', 'VRAM المستخدمة': '~9.0 GB', 'السرعة': '~35 رمز/ثانية' },
          { 'النموذج': 'Mistral Nemo 12B Q4_K_M', 'VRAM المستخدمة': '~8.0 GB', 'السرعة': '~30 رمز/ثانية' },
        ],
      },
      body2: {
        title: 'كيف تحصل على أفضل أداء على RTX 3060',
        content: [
          'للاستخدام العام، شغّل Qwen3 8B مع نافذة سياق 4096 رمز. هذا يستخدم ~6 GB VRAM ويترك 6 GB هامشاً — كافٍ لتجنب تجاوز الحد عند التبديل بين النماذج.',
          'للاستدلال والبرمجة، Phi-4 في Q4_K_M هو الاختيار الواضح: يتسع في ~9 GB VRAM ويتعامل مع Python وTypeScript وGo دون ضبط دقيق.',
          'اترك دائماً 1.5–2 GB VRAM حرة على الأقل. تحميل نموذجين متتاليين دون تفريغ الأول يسبب تجاوز VRAM ويُجبر على تفريغ بطيء على CPU. للسياق الكامل لمعايير GPU، راجع <a href="/ar/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">أفضل بطاقات GPU لنماذج اللغة الكبيرة المحلية</a>. إذا كانت GPU لديك أقل من 12 GB، راجع <a href="/ar/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">أفضل النماذج لـ6 GB VRAM</a>. لتثبيت النماذج الثلاثة الموصى بها كلها:',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: 'كل تنزيل يحمّل 4–8 GB في التشغيل الأول. التشغيلات التالية تبدأ فوراً من الذاكرة المؤقتة. استخدم <code>--num-ctx 4096</code> إذا احتجت نافذة سياق أكبر.' }],
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
    heroImage: '/images/best-ollama-models-rtx-3060-12gb-overview-hero-ko.webp',
    title: 'RTX 3060 12 GB에 최적인 Ollama 모델은?',
    seoTitle: 'RTX 3060 12 GB 최적 Ollama 모델 2026 | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB: 범용 작업에는 Qwen3 8B (6 GB VRAM, 약 40 토큰/초), 추론에는 Phi-4 Q4_K_M, 채팅에는 Mistral Nemo 12B가 최적입니다. PromptQuorum의 빠른 답변.',
    publishDate: '2026-05-18',
    dateModified: '2026-09-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    quickAnswerTop: {
      ko: {
        question: 'RTX 3060 12 GB에 최적인 Ollama 모델은?',
        answer: '12 GB VRAM 환경에서 최적의 범용 모델은 Qwen3 8B로, 6 GB VRAM에서 초당 약 40 토큰을 제공합니다. 추론과 코딩에는 Q4_K_M의 Phi-4(~9 GB VRAM)를 사용하십시오. Mistral Nemo 12B는 8 GB VRAM으로 동작하는 우수한 채팅용 대안입니다.',
        bullets: [
          'Qwen3 8B: RTX 3060 최적 범용 모델 — 6 GB VRAM, ~40 토큰/초',
          'Phi-4 Q4_K_M: 추론 및 코딩에 최적 — ~9 GB VRAM',
          'Mistral Nemo 12B: 채팅용 우수한 대안 — 8 GB VRAM',
        ],
        updatedDate: '2026-09-02',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적 범용 모델: Qwen3 8B — 6 GB VRAM, ~40 토큰/초, 채팅 및 지시 이행 품질 우수',
          '최적 추론/코딩 모델: Q4_K_M의 Phi-4 — ~9 GB VRAM, sub-10B 클래스 최고 추론 점수',
          'RTX 3060 12 GB는 Q4 양자화로 10 GB 미만의 모든 모델(Qwen3 8B, Phi-4, Mistral Nemo 12B 포함)을 실행할 수 있습니다',
        ],
      },
      body1: {
        title: 'RTX 3060 12 GB 최적 Ollama 모델 Top 3',
        content: [
          '2026년 9월 기준, <strong>RTX 3060 12 GB는 여전히 6–12B 모델을 로컬에서 실행하는 데 가장 가성비 좋은 GPU입니다.</strong> 12 GB VRAM은 현재의 Qwen3 및 Phi-4 세대를 포함해 Q4 양자화로 10 GB 미만의 모든 모델을 실행할 수 있습니다. 중고 카드에서도 아래 추천 모델로 초당 30–40 토큰을 얻을 수 있습니다.',
          '아래 세 모델은 모두 Ollama에서 별도 설정 없이 바로 실행됩니다. 속도 수치는 CPU 오프로드 없는 데스크탑 PC에서 기본 2048 토큰 컨텍스트 기준입니다.',
        ],
        columns: ['모델', 'VRAM 사용량', '속도'],
        rows: [
          { '모델': 'Qwen3 8B', 'VRAM 사용량': '6.0 GB', '속도': '~40 토큰/초' },
          { '모델': 'Phi-4 Q4_K_M', 'VRAM 사용량': '~9.0 GB', '속도': '~35 토큰/초' },
          { '모델': 'Mistral Nemo 12B Q4_K_M', 'VRAM 사용량': '~8.0 GB', '속도': '~30 토큰/초' },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RTX 3060 12 GB에서 범용 최적 모델은 Qwen3 8B(6 GB VRAM, ~40 토큰/초)이며, 추론과 코딩에는 Q4_K_M의 Phi-4(~9 GB VRAM)가 최선입니다.',
          },
          {
            type: 'plain-terms',
            text: 'RTX 3060 12 GB를 보유하고 있다면 범용 작업에는 Qwen3 8B를, 추론과 코딩에는 Phi-4 Q4_K_M을 사용하십시오. 두 모델 모두 VRAM에 완전히 탑재되며 CPU 오프로드가 필요하지 않습니다.',
          },
        ],
      },
      body2: {
        title: 'RTX 3060에서 최고 성능 달성 방법',
        content: [
          '범용 사용에는 4096 토큰 컨텍스트 창을 사용하여 Qwen3 8B를 실행하십시오. 이 구성은 ~6 GB VRAM을 사용하며 6 GB의 여유를 남겨 모델 전환 시 VRAM 오버플로를 방지합니다.',
          '추론과 코딩에는 Q4_K_M의 Phi-4가 명확한 선택입니다. ~9 GB VRAM에 탑재되며, 파인튜닝 없이 Python, TypeScript, Go를 처리합니다.',
          '항상 최소 1.5–2 GB VRAM을 여유 공간으로 확보하십시오. 첫 번째 모델을 언로드하지 않고 두 모델을 연속으로 로드하면 VRAM 오버플로가 발생하고 느린 CPU 오프로드가 강제됩니다. GPU 벤치마크 전체 비교는 <a href="/ko/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">로컬 LLM 최적 GPU</a>를 참조하십시오. GPU가 12 GB 미만이라면 <a href="/ko/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">6 GB VRAM 최적 모델</a>을 참조하십시오. 추천 모델 세 가지를 모두 설치하려면:',
        ],
        codeBlock: 'ollama pull qwen3:8b\nollama pull phi4\nollama pull mistral-nemo',
        callouts: [{ type: 'tip', text: '각 Pull은 최초 실행 시 4–8 GB를 다운로드합니다. 이후 실행은 캐시에서 즉시 시작됩니다. 더 큰 컨텍스트 창이 필요한 경우 <code>--num-ctx 4096</code>을 사용하십시오.' }],
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
