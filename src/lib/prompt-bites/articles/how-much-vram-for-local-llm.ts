import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much VRAM Do You Need for a Local LLM?',
    seoTitle: 'VRAM Tiers for Local LLMs 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB runs Phi-4 Mini at Q4. 6 GB handles Llama 3 8B Q4_K_M. 12 GB unlocks Qwen 14B. Formula: params × 0.7 = GB at Q4. VRAM tier guide from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Phi-4 Mini', 'Llama 3 8B', 'Mistral 7B', 'Qwen 14B'],
    current_hardware_mentioned: ['RTX 3060', 'RTX 3050'],
    educationalLevel: 'Beginner',
    audience: 'Developers and enthusiasts running local LLMs',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['how-much-ram-for-7b-model', 'best-local-llm-6gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much VRAM do you need for a local LLM?',
        answer: '4 GB VRAM handles Phi-4 Mini and Gemma 2B comfortably with safe headroom for context expansion. 6 GB runs Llama 3 8B at Q4. 12 GB fits Qwen 14B Q4 efficiently. 16+ GB is needed for 70B models at Q4.',
        bullets: [
          '4 GB: Phi-4 Mini Q4, Gemma 2 2B',
          '6 GB: Llama 3 8B Q4_K_M',
          '8–12 GB: Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie viel VRAM benötigen Sie für ein lokales LLM?',
        answer: '4 GB VRAM reichen für Phi-4 Mini und Gemma 2B mit sicherer Pufferzone für Kontexterweiterung. 6 GB betreiben Llama 3 8B bei Q4. 12 GB fassen Qwen 14B Q4 effizient. Für 70B-Modelle bei Q4 werden 16+ GB benötigt.',
        bullets: [
          '4 GB: Phi-4 Mini Q4, Gemma 2 2B',
          '6 GB: Llama 3 8B Q4_K_M',
          '8–12 GB: Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'De combien de VRAM avez-vous besoin pour un LLM local ?',
        answer: '4 Go VRAM suffisent pour Phi-4 Mini et Gemma 2B avec marge sûre pour expansion contexte. 6 Go font tourner Llama 3 8B en Q4. 12 Go accueillent Qwen 14B Q4 efficacement. Les modèles 70B Q4 nécessitent 16+ Go.',
        bullets: [
          '4 Go : Phi-4 Mini Q4, Gemma 2 2B',
          '6 Go : Llama 3 8B Q4_K_M',
          '8–12 Go : Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルLLMにはどれくらいのVRAMが必要ですか？',
        answer: '4 GB VRAMでPhi-4 MiniとGemma 2Bがコンテキスト拡張用安全余裕で動作します。6 GBではQ4でLlama 3 8Bが動作します。12 GBでQwen 14B Q4を効率的に収納できます。70BモデルのQ4には16+ GBが必要です。',
        bullets: [
          '4 GB: Phi-4 Mini Q4, Gemma 2 2B',
          '6 GB: Llama 3 8B Q4_K_M',
          '8–12 GB: Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '运行本地LLM需要多少显存？',
        answer: '4 GB显存可安全运行Phi-4 Mini和Gemma 2B并具有上下文扩展足够余量。6 GB可Q4运行Llama 3 8B。12 GB有效容纳Qwen 14B Q4。70B模型Q4需16+ GB。',
        bullets: [
          '4 GB：Phi-4 Mini Q4，Gemma 2 2B',
          '6 GB：Llama 3 8B Q4_K_M',
          '8–12 GB：Mistral 7B Q5，Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuánta VRAM necesitas para un LLM local?',
        answer: '4 GB de VRAM soporta Phi-4 Mini y Gemma 2B cómodamente con margen para expansión de contexto. 6 GB ejecuta Llama 3 8B en Q4. 12 GB aloja Qwen 14B Q4 eficientemente. Los modelos 70B en Q4 requieren 16+ GB.',
        bullets: [
          '4 GB: Phi-4 Mini Q4, Gemma 2 2B',
          '6 GB: Llama 3 8B Q4_K_M',
          '8–12 GB: Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB VRAM runs Phi-4 Mini Q4 and Gemma 2 2B comfortably',
          '6 GB is the entry point for Llama 3 8B at Q4_K_M — the most popular local model',
          '12 GB unlocks Qwen 14B Q4, the best quality-per-dollar tier',
          '70B models require 40+ GB — plan for dual RTX 3090 or Apple M-series with large unified memory',
        ],
      },
      body1: {
        title: 'VRAM Requirements by Model Size',
        content: [
          'As of May 2026, a model\'s VRAM need follows a simple formula: parameter count in billions × 0.7 = approximate GB at Q4 quantization. <strong>A 7B model needs ~4.9 GB for weights, plus 0.5–1 GB of context overhead.</strong> This is why 6 GB is the minimum for the 7–8B tier, and why 12 GB unlocks the 14B tier with breathing room.',
          'Use the table below as a quick decision reference. The "Speed" column assumes Ollama on a desktop GPU running at default context (2048 tokens).',
          '<strong>Always keep 1–2 GB of VRAM free above your model\'s stated needs.</strong> Operating systems, browser tabs, and Ollama\'s runtime consume 500 MB–1 GB even with no model loaded. A 6 GB card running a 5.5 GB model leaves only 500 MB headroom — you\'ll hit out-of-memory errors the moment you increase <code>--num-ctx</code> beyond 2048 tokens. For the 6 GB tier with safe headroom, see <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best local LLMs for 6 GB VRAM</a>.',
        ],
        columns: ['VRAM', 'Best Model at Q4_K_M', 'Speed'],
        rows: [
          { 'VRAM': '4 GB', 'Best Model at Q4_K_M': 'Phi-4 Mini Q4', 'Speed': '~25 tok/s' },
          { 'VRAM': '6 GB', 'Best Model at Q4_K_M': 'Llama 3 8B Q4_K_M', 'Speed': '~20 tok/s' },
          { 'VRAM': '8 GB', 'Best Model at Q4_K_M': 'Mistral 7B Q5_K_M', 'Speed': '~18 tok/s' },
          { 'VRAM': '12 GB', 'Best Model at Q4_K_M': 'Qwen 14B Q4_K_M', 'Speed': '~15 tok/s' },
          { 'VRAM': '16+ GB', 'Best Model at Q4_K_M': 'Qwen 32B Q4 or Llama 70B partial', 'Speed': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'When Your VRAM Is Not Enough',
        content: [
          'If a model exceeds your VRAM, you have three options: lower the quantization (Q4_K_M instead of Q5), reduce the context window with <code>--num-ctx 2048</code>, or let Ollama offload layers to system RAM.',
          'CPU offload works but is slow — each layer moved to RAM adds latency. For interactive use, stay within your GPU\'s VRAM limit. Reducing context from 4096 to 2048 tokens saves approximately 2 GB on a 7B model.',
          'For a full breakdown of model sizes and the math behind VRAM estimates, see the <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">complete VRAM guide for local LLMs</a>. For the 7B tier specifically, see <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">how much RAM a 7B model needs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About VRAM',
        faqs: [
          {
            q: 'Is 8 GB VRAM enough for local LLMs?',
            a: 'Yes. 8 GB runs Llama 3 8B at Q5_K_M at around 18 tokens per second, or Mistral 7B at Q5_K_M with headroom to spare. Most day-to-day chat and coding tasks are well-covered at this tier.',
          },
          {
            q: 'Can I run a 7B model on 4 GB VRAM?',
            a: 'No. A 7B model at Q4 needs 5–6 GB of VRAM. The smallest usable quantization still exceeds 4 GB. See <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">how much RAM a 7B model needs</a> for the full breakdown.',
          },
          {
            q: 'Does context window size affect VRAM usage?',
            a: 'Yes. Each additional 1,000 context tokens uses approximately 250 MB of VRAM on a 7B model. The default 2048-token context uses ~0.5 GB; 16,384 tokens uses ~4 GB on top of the model weight.',
          },
          {
            q: 'What should I do if my model uses more VRAM than expected?',
            a: 'Set <code>--num-ctx 2048</code> in your Ollama command. This reduces VRAM by up to 2 GB on 7B models without changing the model file.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Wie viel VRAM brauchen Sie für ein lokales LLM?',
    seoTitle: 'VRAM-Stufen lokale LLMs 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB für Phi-4 Mini Q4. 6 GB für Llama 3 8B Q4_K_M. 12 GB für Qwen 14B. Formel: Parameter × 0,7 = GB bei Q4. VRAM-Stufenführer von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB VRAM betreibt Phi-4 Mini Q4 und Gemma 2 2B problemlos',
          '6 GB ist der Einstiegspunkt für Llama 3 8B bei Q4_K_M — das beliebteste lokale Modell',
          '12 GB schaltet Qwen 14B Q4 frei, die beste Qualitäts-pro-Dollar-Stufe',
          '70B-Modelle benötigen 40+ GB — planen Sie für Dual-RTX 3090 oder Apple M-Series mit großem Unified Memory',
        ],
      },
      body1: {
        title: 'VRAM-Anforderungen nach Modellgröße',
        content: [
          'Stand Mai 2026 folgt der VRAM-Bedarf eines Modells einer einfachen Formel: Parameteranzahl in Milliarden × 0,7 = ungefähre GB bei Q4-Quantisierung. <strong>Ein 7B-Modell benötigt ~4,9 GB für die Gewichte plus 0,5–1 GB Kontext-Overhead.</strong> Deshalb sind 6 GB das Minimum für die 7–8B-Tier und warum 12 GB die 14B-Tier mit Spielraum freischaltet.',
          'Verwenden Sie die nachstehende Tabelle als schnelle Entscheidungsreferenz. Die Spalte "Geschwindigkeit" setzt Ollama auf einer Desktop-GPU mit Standard-Kontext (2048 Tokens) voraus.',
          '<strong>Halten Sie stets 1–2 GB VRAM über dem angegebenen Bedarf Ihres Modells frei.</strong> Betriebssysteme, Browser-Tabs und die Ollama-Laufzeit verbrauchen 500 MB–1 GB, selbst wenn kein Modell geladen ist. Eine 6-GB-Karte, die ein 5,5-GB-Modell betreibt, lässt nur 500 MB Spielraum — beim Erhöhen von <code>--num-ctx</code> über 2048 Tokens treten sofort Out-of-Memory-Fehler auf. Für die 6-GB-Tier mit sicherem Spielraum, siehe <a href="/prompt-bites/best-local-llm-6gb-vram?lang=de" class="text-primary hover:underline">beste lokale LLMs für 6 GB VRAM</a>.',
        ],
        columns: ['VRAM', 'Bestes Modell bei Q4_K_M', 'Geschwindigkeit'],
        rows: [
          { 'VRAM': '4 GB', 'Bestes Modell bei Q4_K_M': 'Phi-4 Mini Q4', 'Geschwindigkeit': '~25 tok/s' },
          { 'VRAM': '6 GB', 'Bestes Modell bei Q4_K_M': 'Llama 3 8B Q4_K_M', 'Geschwindigkeit': '~20 tok/s' },
          { 'VRAM': '8 GB', 'Bestes Modell bei Q4_K_M': 'Mistral 7B Q5_K_M', 'Geschwindigkeit': '~18 tok/s' },
          { 'VRAM': '12 GB', 'Bestes Modell bei Q4_K_M': 'Qwen 14B Q4_K_M', 'Geschwindigkeit': '~15 tok/s' },
          { 'VRAM': '16+ GB', 'Bestes Modell bei Q4_K_M': 'Qwen 32B Q4 oder Llama 70B partiell', 'Geschwindigkeit': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Was tun, wenn der VRAM nicht ausreicht',
        content: [
          'Wenn ein Modell Ihren VRAM überschreitet, haben Sie drei Möglichkeiten: Quantisierung reduzieren (Q4_K_M statt Q5), das Kontextfenster mit <code>--num-ctx 2048</code> verkleinern oder Ollama Schichten in den System-RAM auslagern lassen.',
          'CPU-Offload funktioniert, ist aber langsam — jede in den RAM verschobene Schicht erhöht die Latenz. Für interaktive Nutzung bleiben Sie innerhalb des VRAM-Limits Ihrer GPU. Die Reduzierung des Kontexts von 4096 auf 2048 Tokens spart etwa 2 GB bei einem 7B-Modell.',
          'Für eine vollständige Aufschlüsselung der Modellgrößen und die Berechnung hinter VRAM-Schätzungen, siehe den <a href="/local-llms/how-much-vram-local-llm?lang=de" class="text-primary hover:underline">vollständigen VRAM-Leitfaden für lokale LLMs</a>. Speziell für die 7B-Tier, siehe <a href="/prompt-bites/how-much-ram-for-7b-model?lang=de" class="text-primary hover:underline">wie viel RAM ein 7B-Modell benötigt</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zum Thema VRAM',
        faqs: [
          {
            q: 'Reichen 8 GB VRAM für lokale LLMs aus?',
            a: 'Ja. 8 GB betreibt Llama 3 8B bei Q5_K_M mit etwa 18 Tokens pro Sekunde oder Mistral 7B bei Q5_K_M mit ausreichend Spielraum. Die meisten alltäglichen Chat- und Coding-Aufgaben sind bei dieser Tier gut abgedeckt.',
          },
          {
            q: 'Kann ich ein 7B-Modell auf 4 GB VRAM betreiben?',
            a: 'Nein. Ein 7B-Modell bei Q4 benötigt 5–6 GB VRAM. Die kleinste nutzbare Quantisierung überschreitet immer noch 4 GB. Siehe <a href="/prompt-bites/how-much-ram-for-7b-model?lang=de" class="text-primary hover:underline">wie viel RAM ein 7B-Modell benötigt</a> für die vollständige Aufschlüsselung.',
          },
          {
            q: 'Beeinflusst die Kontextfenstergröße den VRAM-Verbrauch?',
            a: 'Ja. Jede zusätzliche 1.000 Kontext-Tokens verbraucht etwa 250 MB VRAM bei einem 7B-Modell. Der Standard-2048-Token-Kontext verbraucht ~0,5 GB; 16.384 Tokens verbrauchen ~4 GB zusätzlich zum Modellgewicht.',
          },
          {
            q: 'Was sollte ich tun, wenn mein Modell mehr VRAM als erwartet verbraucht?',
            a: 'Setzen Sie <code>--num-ctx 2048</code> in Ihrem Ollama-Befehl. Das reduziert den VRAM-Verbrauch bei 7B-Modellen um bis zu 2 GB, ohne die Modelldatei zu ändern.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'De combien de VRAM avez-vous besoin pour un LLM local ?',
    seoTitle: 'Paliers VRAM LLM local 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 Go pour Phi-4 Mini Q4. 6 Go pour Llama 3 8B Q4_K_M. 12 Go pour Qwen 14B. Formule : params × 0,7 = Go en Q4. Paliers VRAM par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 Go de VRAM fait tourner Phi-4 Mini Q4 et Gemma 2 2B sans problème',
          '6 Go est le point d\'entrée pour Llama 3 8B en Q4_K_M — le modèle local le plus populaire',
          '12 Go débloque Qwen 14B Q4, le meilleur rapport qualité/prix',
          'Les modèles 70B nécessitent 40+ Go — prévoyez un double RTX 3090 ou Apple M-series avec une grande mémoire unifiée',
        ],
      },
      body1: {
        title: 'Besoins en VRAM par taille de modèle',
        content: [
          'En mai 2026, le besoin en VRAM d\'un modèle suit une formule simple : nombre de paramètres en milliards × 0,7 = Go approximatifs en quantisation Q4. <strong>Un modèle 7B nécessite ~4,9 Go pour les poids, plus 0,5–1 Go de surcharge de contexte.</strong> C\'est pourquoi 6 Go est le minimum pour le tier 7–8B, et pourquoi 12 Go débloque le tier 14B avec de la marge.',
          'Utilisez le tableau ci-dessous comme référence de décision rapide. La colonne "Vitesse" suppose Ollama sur un GPU de bureau tournant avec le contexte par défaut (2048 tokens).',
          '<strong>Gardez toujours 1–2 Go de VRAM libres au-dessus des besoins déclarés de votre modèle.</strong> Les systèmes d\'exploitation, les onglets de navigateur et le runtime d\'Ollama consomment 500 Mo–1 Go même sans modèle chargé. Une carte 6 Go faisant tourner un modèle de 5,5 Go ne laisse que 500 Mo de marge — vous rencontrerez des erreurs de mémoire insuffisante dès que vous augmentez <code>--num-ctx</code> au-delà de 2048 tokens. Pour le tier 6 Go avec une marge sécurisée, voir <a href="/prompt-bites/best-local-llm-6gb-vram?lang=fr" class="text-primary hover:underline">les meilleurs LLMs locaux pour 6 Go de VRAM</a>.',
        ],
        columns: ['VRAM', 'Meilleur modèle en Q4_K_M', 'Vitesse'],
        rows: [
          { 'VRAM': '4 Go', 'Meilleur modèle en Q4_K_M': 'Phi-4 Mini Q4', 'Vitesse': '~25 tok/s' },
          { 'VRAM': '6 Go', 'Meilleur modèle en Q4_K_M': 'Llama 3 8B Q4_K_M', 'Vitesse': '~20 tok/s' },
          { 'VRAM': '8 Go', 'Meilleur modèle en Q4_K_M': 'Mistral 7B Q5_K_M', 'Vitesse': '~18 tok/s' },
          { 'VRAM': '12 Go', 'Meilleur modèle en Q4_K_M': 'Qwen 14B Q4_K_M', 'Vitesse': '~15 tok/s' },
          { 'VRAM': '16+ Go', 'Meilleur modèle en Q4_K_M': 'Qwen 32B Q4 ou Llama 70B partiel', 'Vitesse': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Quand votre VRAM est insuffisante',
        content: [
          'Si un modèle dépasse votre VRAM, vous avez trois options : réduire la quantisation (Q4_K_M au lieu de Q5), réduire la fenêtre de contexte avec <code>--num-ctx 2048</code>, ou laisser Ollama décharger des couches vers la RAM système.',
          'Le déchargement CPU fonctionne mais est lent — chaque couche déplacée vers la RAM ajoute de la latence. Pour un usage interactif, restez dans les limites VRAM de votre GPU. Réduire le contexte de 4096 à 2048 tokens économise environ 2 Go sur un modèle 7B.',
          'Pour une répartition complète des tailles de modèles et les calculs derrière les estimations VRAM, voir le <a href="/local-llms/how-much-vram-local-llm?lang=fr" class="text-primary hover:underline">guide VRAM complet pour les LLMs locaux</a>. Pour le tier 7B spécifiquement, voir <a href="/prompt-bites/how-much-ram-for-7b-model?lang=fr" class="text-primary hover:underline">combien de RAM nécessite un modèle 7B</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la VRAM',
        faqs: [
          {
            q: '8 Go de VRAM suffisent-ils pour les LLMs locaux ?',
            a: 'Oui. 8 Go fait tourner Llama 3 8B en Q5_K_M à environ 18 tokens par seconde, ou Mistral 7B en Q5_K_M avec de la marge. La plupart des tâches quotidiennes de chat et de coding sont bien couvertes à ce tier.',
          },
          {
            q: 'Puis-je faire tourner un modèle 7B sur 4 Go de VRAM ?',
            a: 'Non. Un modèle 7B en Q4 nécessite 5–6 Go de VRAM. La plus petite quantisation utilisable dépasse encore les 4 Go. Voir <a href="/prompt-bites/how-much-ram-for-7b-model?lang=fr" class="text-primary hover:underline">combien de RAM nécessite un modèle 7B</a> pour la répartition complète.',
          },
          {
            q: 'La taille de la fenêtre de contexte affecte-t-elle l\'utilisation de la VRAM ?',
            a: 'Oui. Chaque tranche supplémentaire de 1 000 tokens de contexte utilise environ 250 Mo de VRAM sur un modèle 7B. Le contexte par défaut de 2048 tokens utilise ~0,5 Go ; 16 384 tokens utilisent ~4 Go en plus du poids du modèle.',
          },
          {
            q: 'Que faire si mon modèle consomme plus de VRAM que prévu ?',
            a: 'Définissez <code>--num-ctx 2048</code> dans votre commande Ollama. Cela réduit la VRAM de jusqu\'à 2 Go sur les modèles 7B sans modifier le fichier modèle.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: 'ローカルLLMに必要なVRAM量は？',
    seoTitle: 'ローカルLLM VRAMティア 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GBでPhi-4 Miniが動作。6 GBでLlama 3 8B Q4が動作。12 GBでQwen 14B Q4が収まります。PromptQuorumによるVRAM選択ガイド。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB VRAMでPhi-4 Mini Q4とGemma 2 2Bが快適に動作します',
          '6 GBは最も人気のあるローカルモデルLlama 3 8B Q4_K_Mの最小ラインです',
          '12 GBでQwen 14B Q4が解放され、最高のコスト対品質ティアになります',
          '70Bモデルには40+ GBが必要です — デュアルRTX 3090か、大容量ユニファイドメモリを持つApple M-seriesを検討してください',
        ],
      },
      body1: {
        title: 'モデルサイズ別のVRAM要件',
        content: [
          '2026年5月現在、モデルのVRAM要件は単純な計算式に従います：パラメータ数（十億単位）× 0.7 = Q4量化での概算GB。<strong>7Bモデルは重みに~4.9 GB、加えてコンテキストオーバーヘッドに0.5–1 GBが必要です。</strong>これが7–8Bティアの最小が6 GBである理由であり、12 GBが余裕を持って14Bティアを解放する理由です。',
          '以下の表を素早い決定リファレンスとして使用してください。「速度」列はデフォルトコンテキスト（2048トークン）で動作するデスクトップGPU上のOllamaを前提としています。',
          '<strong>モデルの必要VRAMより常に1–2 GB多くの空き容量を確保してください。</strong>OSや、ブラウザタブ、Ollamaのランタイムは、モデルを読み込んでいない状態でも500 MB–1 GBを消費します。5.5 GBのモデルを動かす6 GBカードには500 MBしか余裕がなく、<code>--num-ctx</code>を2048トークン超に増やした瞬間にメモリ不足エラーが発生します。安全な余裕のある6 GBティアについては、<a href="/prompt-bites/best-local-llm-6gb-vram?lang=ja" class="text-primary hover:underline">6 GB VRAM向け最良ローカルLLM</a>を参照してください。',
        ],
        columns: ['VRAM', 'Q4_K_Mでの最良モデル', '速度'],
        rows: [
          { 'VRAM': '4 GB', 'Q4_K_Mでの最良モデル': 'Phi-4 Mini Q4', '速度': '~25 tok/s' },
          { 'VRAM': '6 GB', 'Q4_K_Mでの最良モデル': 'Llama 3 8B Q4_K_M', '速度': '~20 tok/s' },
          { 'VRAM': '8 GB', 'Q4_K_Mでの最良モデル': 'Mistral 7B Q5_K_M', '速度': '~18 tok/s' },
          { 'VRAM': '12 GB', 'Q4_K_Mでの最良モデル': 'Qwen 14B Q4_K_M', '速度': '~15 tok/s' },
          { 'VRAM': '16+ GB', 'Q4_K_Mでの最良モデル': 'Qwen 32B Q4またはLlama 70B部分実行', '速度': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'VRAMが不足している場合の対処法',
        content: [
          'モデルがVRAMを超える場合、3つの選択肢があります：量化を下げる（Q5の代わりにQ4_K_M）、<code>--num-ctx 2048</code>でコンテキストウィンドウを縮小する、またはOllamaにレイヤーをシステムRAMにオフロードさせる。',
          'CPUオフロードは機能しますが低速です — RAMに移動された各レイヤーがレイテンシを増加させます。インタラクティブな使用では、GPUのVRAM制限内に収めてください。コンテキストを4096から2048トークンに削減すると、7Bモデルで約2 GBを節約できます。',
          'モデルサイズの完全な内訳とVRAM推定の計算については、<a href="/local-llms/how-much-vram-local-llm?lang=ja" class="text-primary hover:underline">ローカルLLMの完全VRAMガイド</a>を参照してください。7Bティアについては、<a href="/prompt-bites/how-much-ram-for-7b-model?lang=ja" class="text-primary hover:underline">7Bモデルに必要なRAM量</a>を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'VRAMに関するよくある質問',
        faqs: [
          {
            q: '8 GB VRAMはローカルLLMに十分ですか？',
            a: 'はい。8 GBはLlama 3 8BをQ5_K_Mで毎秒約18トークン、またはMistral 7BをQ5_K_Mで余裕を持って動作させられます。このティアでは日常的なチャットやコーディングタスクのほとんどに対応できます。',
          },
          {
            q: '4 GB VRAMで7Bモデルを動かせますか？',
            a: 'いいえ。Q4の7BモデルにはVRAM 5–6 GBが必要です。最小の使用可能な量化でも4 GBを超えます。完全な内訳については<a href="/prompt-bites/how-much-ram-for-7b-model?lang=ja" class="text-primary hover:underline">7Bモデルに必要なRAM量</a>を参照してください。',
          },
          {
            q: 'コンテキストウィンドウのサイズはVRAM使用量に影響しますか？',
            a: 'はい。7Bモデルでは追加1,000コンテキストトークンごとに約250 MB VRAMを使用します。デフォルトの2048トークンコンテキストは~0.5 GB、16,384トークンはモデルウェイトに加えて~4 GBを使用します。',
          },
          {
            q: 'モデルが予想より多くのVRAMを使用している場合はどうすればいいですか？',
            a: 'Ollamaコマンドに<code>--num-ctx 2048</code>を設定してください。これにより、モデルファイルを変更せずに7Bモデルで最大2 GBのVRAMを削減できます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '运行本地LLM需要多少显存？',
    seoTitle: 'LLM显存速查 2026：4GB到24GB各档位运行哪款模型',
    metaDescription: '本地大模型各参数规模所需显存参考（2026）：4 GB运行Phi-4 Mini Q4；6 GB运行Llama 3 8B Q4_K_M；12 GB解锁Qwen 14B；24 GB承载Qwen 32B。通用公式：参数量（B）×0.7≈Q4量化所需显存（GB）。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB显存可流畅运行Phi-4 Mini Q4和Gemma 2 2B',
          '6 GB是运行最流行本地模型Llama 3 8B Q4_K_M的最低门槛',
          '12 GB解锁Qwen 14B Q4，性价比最优档位',
          '70B模型需要40+ GB——计划使用双RTX 3090或具备大容量统一内存的Apple M系列',
        ],
      },
      body1: {
        title: '按模型大小划分的显存需求',
        content: [
          '截至2026年5月，模型的显存需求遵循一个简单公式：参数量（十亿为单位）× 0.7 = Q4量化下的近似GB数。<strong>7B模型的权重需要约4.9 GB，另加0.5–1 GB的上下文开销。</strong>这就是为什么6 GB是7–8B档位的最低要求，以及12 GB能够为14B档位留有余量的原因。',
          '请将下表作为快速决策参考。「速度」列假设Ollama在台式机GPU上以默认上下文（2048令牌）运行。',
          '<strong>始终在模型声明需求基础上保留1–2 GB的空闲显存。</strong>操作系统、浏览器标签页和Ollama运行时即使在未加载模型时也会消耗500 MB–1 GB。运行5.5 GB模型的6 GB显卡只剩500 MB余量——一旦将<code>--num-ctx</code>增加到2048令牌以上就会出现内存不足错误。有关安全余量的6 GB档位建议，请参阅<a href="/prompt-bites/best-local-llm-6gb-vram?lang=zh" class="text-primary hover:underline">6 GB显存最佳本地LLM</a>。',
        ],
        columns: ['显存', 'Q4_K_M最佳模型', '速度'],
        rows: [
          { '显存': '4 GB', 'Q4_K_M最佳模型': 'Phi-4 Mini Q4', '速度': '~25 tok/s' },
          { '显存': '6 GB', 'Q4_K_M最佳模型': 'Llama 3 8B Q4_K_M', '速度': '~20 tok/s' },
          { '显存': '8 GB', 'Q4_K_M最佳模型': 'Mistral 7B Q5_K_M', '速度': '~18 tok/s' },
          { '显存': '12 GB', 'Q4_K_M最佳模型': 'Qwen 14B Q4_K_M', '速度': '~15 tok/s' },
          { '显存': '16+ GB', 'Q4_K_M最佳模型': 'Qwen 32B Q4或Llama 70B部分运行', '速度': '~8 tok/s' },
        ],
      },
      body2: {
        title: '显存不足时的解决方案',
        content: [
          '当模型超出显存时，您有三个选择：降低量化等级（用Q4_K_M代替Q5）、使用<code>--num-ctx 2048</code>缩小上下文窗口，或让Ollama将层卸载到系统RAM。',
          'CPU卸载可以运行但速度较慢——每个移至RAM的层都会增加延迟。对于交互式使用，请保持在GPU显存限制内。将上下文从4096缩减到2048令牌，7B模型约可节省2 GB显存。',
          '有关模型大小的完整分类以及显存估算的计算方法，请参阅<a href="/local-llms/how-much-vram-local-llm?lang=zh" class="text-primary hover:underline">本地LLM完整显存指南</a>。关于7B档位的详情，请参阅<a href="/prompt-bites/how-much-ram-for-7b-model?lang=zh" class="text-primary hover:underline">7B模型所需RAM量</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于显存的常见问题',
        faqs: [
          {
            q: '8 GB显存足够运行本地LLM吗？',
            a: '足够。8 GB可以Q5_K_M运行Llama 3 8B，速度约每秒18个令牌；或以Q5_K_M运行Mistral 7B，还有充足余量。在此档位下，日常聊天和编程任务都能得到良好支持。',
          },
          {
            q: '4 GB显存能运行7B模型吗？',
            a: '不能。Q4的7B模型需要5–6 GB显存，最小可用量化仍超过4 GB。完整分析请参阅<a href="/prompt-bites/how-much-ram-for-7b-model?lang=zh" class="text-primary hover:underline">7B模型所需RAM量</a>。',
          },
          {
            q: '上下文窗口大小会影响显存使用量吗？',
            a: '会。7B模型每增加1,000个上下文令牌约使用250 MB显存。默认2048令牌上下文使用约0.5 GB；16,384令牌在模型权重基础上额外使用约4 GB。',
          },
          {
            q: '如果模型占用的显存超出预期怎么办？',
            a: '在Ollama命令中设置<code>--num-ctx 2048</code>。这可以在不修改模型文件的情况下，将7B模型的显存使用减少最多2 GB。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Cuánta VRAM necesitas para un LLM local?',
    seoTitle: 'Requisitos de VRAM para LLMs locales 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB para Phi-4 Mini Q4. 6 GB para Llama 3 8B Q4_K_M. 12 GB para Qwen 14B. Fórmula: params × 0,7 = GB en Q4. Guía de VRAM de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuánta VRAM necesitas para un LLM local?',
        answer: '4 GB de VRAM soporta Phi-4 Mini y Gemma 2B cómodamente con margen para expansión de contexto. 6 GB ejecuta Llama 3 8B en Q4. 12 GB aloja Qwen 14B Q4 eficientemente. Los modelos 70B en Q4 requieren 16+ GB.',
        bullets: [
          '4 GB: Phi-4 Mini Q4, Gemma 2 2B',
          '6 GB: Llama 3 8B Q4_K_M',
          '8–12 GB: Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB de VRAM ejecuta Phi-4 Mini Q4 y Gemma 2 2B sin problemas',
          '6 GB es el punto de entrada para Llama 3 8B en Q4_K_M — el modelo local más popular',
          '12 GB desbloquea Qwen 14B Q4, el mejor escalón de calidad por precio',
          'Los modelos 70B requieren 40+ GB — planifica con dual RTX 3090 o Apple M-series con mucha memoria unificada',
        ],
      },
      body1: {
        title: 'Requisitos de VRAM por tamaño de modelo',
        content: [
          'A mayo de 2026, el consumo de VRAM de un modelo sigue una fórmula sencilla: parámetros en miles de millones × 0,7 = GB aproximados en cuantización Q4. <strong>Un modelo 7B necesita ~4,9 GB para los pesos, más 0,5–1 GB de sobrecarga de contexto.</strong> Por eso 6 GB es el mínimo para el rango 7–8B, y 12 GB desbloquea el rango 14B con margen.',
          'Usa la tabla siguiente como referencia rápida. La columna "Velocidad" asume Ollama en una GPU de escritorio con contexto predeterminado (2048 tokens).',
          '<strong>Deja siempre 1–2 GB de VRAM libres por encima de las necesidades declaradas del modelo.</strong> El sistema operativo, las pestañas del navegador y el runtime de Ollama consumen 500 MB–1 GB incluso sin modelo cargado. Una tarjeta de 6 GB ejecutando un modelo de 5,5 GB solo deja 500 MB de margen — tendrás errores de memoria en cuanto aumente <code>--num-ctx</code> más allá de 2048 tokens. Para el rango de 6 GB con margen seguro, consulta <a href="/prompt-bites/best-local-llm-6gb-vram?lang=es" class="text-primary hover:underline">los mejores LLMs locales para 6 GB de VRAM</a>.',
        ],
        columns: ['VRAM', 'Mejor modelo en Q4_K_M', 'Velocidad'],
        rows: [
          { 'VRAM': '4 GB', 'Mejor modelo en Q4_K_M': 'Phi-4 Mini Q4', 'Velocidad': '~25 tok/s' },
          { 'VRAM': '6 GB', 'Mejor modelo en Q4_K_M': 'Llama 3 8B Q4_K_M', 'Velocidad': '~20 tok/s' },
          { 'VRAM': '8 GB', 'Mejor modelo en Q4_K_M': 'Mistral 7B Q5_K_M', 'Velocidad': '~18 tok/s' },
          { 'VRAM': '12 GB', 'Mejor modelo en Q4_K_M': 'Qwen 14B Q4_K_M', 'Velocidad': '~15 tok/s' },
          { 'VRAM': '16+ GB', 'Mejor modelo en Q4_K_M': 'Qwen 32B Q4 o Llama 70B parcial', 'Velocidad': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'Qué hacer cuando la VRAM no es suficiente',
        content: [
          'Si un modelo supera tu VRAM tienes tres opciones: reducir la cuantización (Q4_K_M en lugar de Q5), reducir la ventana de contexto con <code>--num-ctx 2048</code>, o dejar que Ollama descargue capas en la RAM del sistema.',
          'El offloading a CPU funciona pero es lento — cada capa movida a RAM añade latencia. Para uso interactivo, mantente dentro del límite de VRAM de tu GPU. Reducir el contexto de 4096 a 2048 tokens ahorra aproximadamente 2 GB en un modelo 7B.',
          'Para un desglose completo de tamaños de modelos y el cálculo de estimación de VRAM, consulta la <a href="/local-llms/how-much-vram-local-llm?lang=es" class="text-primary hover:underline">guía completa de VRAM para LLMs locales</a>. Para el rango 7B específicamente, consulta <a href="/prompt-bites/how-much-ram-for-7b-model?lang=es" class="text-primary hover:underline">cuánta RAM necesita un modelo 7B</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre la VRAM',
        faqs: [
          {
            q: '¿Son suficientes 8 GB de VRAM para LLMs locales?',
            a: 'Sí. Con 8 GB puedes ejecutar Llama 3 8B en Q5_K_M a unos 18 tokens por segundo, o Mistral 7B en Q5_K_M con margen de sobra. La mayoría de las tareas cotidianas de chat y programación están bien cubiertas en este rango.',
          },
          {
            q: '¿Puedo ejecutar un modelo 7B con 4 GB de VRAM?',
            a: 'No. Un modelo 7B en Q4 necesita 5–6 GB de VRAM. La cuantización más pequeña utilizable sigue superando los 4 GB. Consulta <a href="/prompt-bites/how-much-ram-for-7b-model?lang=es" class="text-primary hover:underline">cuánta RAM necesita un modelo 7B</a> para el desglose completo.',
          },
          {
            q: '¿Afecta el tamaño de la ventana de contexto al uso de VRAM?',
            a: 'Sí. Cada 1.000 tokens adicionales de contexto consume aproximadamente 250 MB de VRAM en un modelo 7B. El contexto predeterminado de 2048 tokens usa ~0,5 GB; 16.384 tokens usan ~4 GB adicionales sobre el peso del modelo.',
          },
          {
            q: '¿Qué hago si mi modelo usa más VRAM de lo esperado?',
            a: 'Establece <code>--num-ctx 2048</code> en tu comando de Ollama. Esto reduce el uso de VRAM hasta en 2 GB en modelos 7B sin modificar el archivo del modelo.',
          },
        ],
      },
    },
  },
}
