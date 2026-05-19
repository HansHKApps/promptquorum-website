import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best LLM for AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti: LLMs | Prompt Bites | PromptQuorum',
    metaDescription: 'With an RTX 3070 Ti (8 GB VRAM), best LLMs are Llama 3 8B and Mistral 7B at Q4_K_M. Both fit in 6 GB VRAM. The 5700X CPU handles fast tokenization.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Mistral 7B'],
    current_hardware_mentioned: ['AMD Ryzen 7 5700X', 'RTX 3070 Ti 8 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Users with an AMD 5700X and RTX 3070 Ti choosing a local LLM',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best LLM for AMD 5700X + RTX 3070 Ti?',
        answer: 'With an RTX 3070 Ti (8 GB VRAM), Llama 3 8B Q4_K_M and Mistral 7B Q5_K_M are the best local LLMs. Both use ~6 GB VRAM and run at ~22–25 tok/s. The AMD Ryzen 7 5700X handles fast tokenization as a CPU fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s on RTX 3070 Ti',
          'Mistral 7B Q5_K_M: ~6 GB VRAM, strong reasoning per VRAM used',
          'RTX 3070 Ti has 8 GB VRAM — 13B models at Q4 may be too large',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes LLM für AMD 5700X + RTX 3070 Ti?',
        answer: 'Mit einer RTX 3070 Ti (8 GB VRAM) sind Llama 3 8B und Mistral 7B bei Q4_K_M die besten lokalen LLMs. Beide benötigen ~6 GB VRAM und laufen mit ~25 tok/s. Der AMD Ryzen 7 5700X übernimmt die schnelle Tokenisierung als CPU-Fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s auf der RTX 3070 Ti',
          'Mistral 7B Q4_K_M: ~6 GB VRAM, starkes Reasoning pro genutztem VRAM',
          'RTX 3070 Ti hat 8 GB VRAM — 13B-Modelle bei Q4 passen möglicherweise nicht',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur LLM pour AMD 5700X + RTX 3070 Ti ?',
        answer: 'Avec une RTX 3070 Ti (8 Go de VRAM), Llama 3 8B et Mistral 7B en Q4_K_M sont les meilleurs LLMs locaux. Les deux utilisent ~6 Go de VRAM et tournent à ~25 tok/s. Le AMD Ryzen 7 5700X assure une tokenisation rapide en fallback CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M : ~6 Go de VRAM, ~25 tok/s sur RTX 3070 Ti',
          'Mistral 7B Q4_K_M : ~6 Go de VRAM, excellent raisonnement par Go de VRAM',
          'RTX 3070 Ti dispose de 8 Go de VRAM — les modèles 13B en Q4 peuvent ne pas tenir',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'AMD 5700X + RTX 3070 Ti に最適な LLM は？',
        answer: 'RTX 3070 Ti（8 GB VRAM）では、Q4_K_M の Llama 3 8B と Mistral 7B が最適なローカル LLM です。どちらも VRAM を約 6 GB 使用し、約 25 tok/s で動作します。AMD Ryzen 7 5700X は CPU フォールバックとして高速なトークン化を担います。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM、RTX 3070 Ti で ~25 tok/s',
          'Mistral 7B Q4_K_M：~6 GB VRAM、使用 VRAM あたりの推論品質が高い',
          'RTX 3070 Ti の VRAM は 8 GB — Q4 の 13B モデルは収まらない場合あり',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'AMD 5700X + RTX 3070 Ti 最适合哪款 LLM？',
        answer: '搭配 RTX 3070 Ti（8 GB VRAM），Q4_K_M 量化的 Llama 3 8B 和 Mistral 7B 是最佳本地 LLM。两者均使用约 6 GB VRAM，运行速度约 25 tok/s。AMD Ryzen 7 5700X 作为 CPU 后备负责快速 tokenization。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM，RTX 3070 Ti 上约 25 tok/s',
          'Mistral 7B Q4_K_M：~6 GB VRAM，每 GB VRAM 推理能力出色',
          'RTX 3070 Ti 有 8 GB VRAM——Q4 量化的 13B 模型可能超出限制',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti has 8 GB GDDR6X VRAM — Llama 3 8B and Mistral 7B Q4_K_M run fully in VRAM at ~25 tok/s',
          '14B models at Q4_K_M need ~10 GB and do not fit; Q3_K_M (~7 GB) fits but quality drops noticeably',
          'The 5700X\'s 8-core Zen 3 design makes partial CPU offload viable for occasional 14B use at ~8 tok/s',
          'This rig handles most chat, Python, and TypeScript work — GPU is the bottleneck, not the CPU',
        ],
      },
      body1: {
        title: 'What Runs Well on This Rig',
        content: [
          'As of May 2026, <strong>the RTX 3070 Ti (8 GB GDDR6X, 608 GB/s bandwidth) runs Llama 3 8B and Mistral 7B at Q4_K_M fully in VRAM — approximately 6 GB each — at ~25 tok/s.</strong> The 14B model class is the hard ceiling: it needs ~10 GB at Q4, which exceeds the 8 GB limit.',
          'If a 14B model is required, three paths exist: Q3_K_M drops the footprint to ~7 GB and fits entirely in VRAM, but degrades output quality on reasoning and code tasks. Partial CPU offload via llama.cpp (splitting layers between VRAM and RAM) is viable at ~8 tok/s — the 5700X\'s 8 Zen 3 cores handle this better than a 4-core CPU. Running a 70B model at Q2_K is technically possible at ~1 tok/s but not practical for interactive use.',
          'If 14B coding models at full quality are the goal, see the <a href="/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">best coding LLMs for 12 GB VRAM</a> for the hardware upgrade path.',
        ],
        columns: ['Model', 'Setup', 'Speed'],
        rows: [
          { 'Model': 'Llama 3 8B Q4_K_M', 'Setup': 'Full VRAM', 'Speed': '~25 tok/s' },
          { 'Model': 'Mistral 7B Q5_K_M', 'Setup': 'Full VRAM', 'Speed': '~22 tok/s' },
          { 'Model': 'Qwen 14B Q3_K_M', 'Setup': 'Full VRAM (tight)', 'Speed': '~14 tok/s (quality drop)' },
          { 'Model': 'Qwen 14B Q4_K_M', 'Setup': 'Partial CPU offload', 'Speed': '~8 tok/s' },
          { 'Model': 'Llama 3 70B Q2_K', 'Setup': 'CPU-heavy', 'Speed': '~1 tok/s (slow)' },
        ],
      },
      body2: {
        title: 'When to Upgrade or Stay',
        content: [
          '<strong>This rig runs 7B–8B models at 20+ tok/s — sufficient for general chat, Python scripting, TypeScript tooling, and single-file code review.</strong> If that describes your workload, there is no pressing reason to upgrade.',
          'If you need 14B coding models without a quality or speed penalty, the GPU is the upgrade target — not the CPU. A used RTX 3060 12 GB (typically $200–$300) or RTX 4070 base (12 GB) unlocks Qwen 2.5 Coder 14B at Q4 at full throughput. The 5800X3D is the top AM4 CPU upgrade, but its 3D V-Cache benefit is specific to gaming and CPU-bound scientific workloads — LLM inference is GPU-memory-bandwidth-bound and the 5700X is not the bottleneck here.',
          'For the full GPU selection guide and how memory bandwidth maps to LLM inference speed, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About LLMs for AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Can I run a 14B model on RTX 3070 Ti 8 GB?',
            a: 'Not at Q4_K_M — 14B models need approximately 10 GB, which exceeds the 8 GB limit. Q3_K_M (~7 GB) fits but output quality drops noticeably on reasoning and code tasks. Partial CPU offload via llama.cpp is possible at ~8 tok/s.',
          },
          {
            q: 'Should I upgrade GPU or CPU for better LLM performance?',
            a: 'GPU. LLM inference speed is GPU-memory-bandwidth-bound; the 5700X is not the bottleneck. Upgrading to a 12 GB GPU (RTX 3060 12 GB or RTX 4070 base) unlocks the 14B model tier at full Q4 quality and speed.',
          },
          {
            q: 'Does RAM speed matter for partial CPU offload?',
            a: 'Yes, as a secondary factor. DDR4-3600 vs DDR4-2133 gives roughly 15% more CPU-offload throughput for the RAM-resident layers. The GPU remains the primary constraint for the layers that fit in VRAM.',
          },
          {
            q: 'Is the 5800X3D worth it over the 5700X for LLMs?',
            a: 'No. The 5800X3D\'s 3D V-Cache benefits gaming and certain CPU-bound workloads, but LLM inference is GPU-memory-bandwidth-bound. The 5700X is not the bottleneck on this rig — put the upgrade budget toward a 12 GB GPU instead.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Bestes LLM für AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti: LLMs | Prompt Bites | PromptQuorum',
    metaDescription: 'Mit RTX 3070 Ti (8 GB VRAM) sind Llama 3 8B und Mistral 7B bei Q4_K_M die besten lokalen LLMs. Beide passen in 6 GB VRAM. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bestes LLM für AMD 5700X + RTX 3070 Ti?',
        answer: 'Mit einer RTX 3070 Ti (8 GB VRAM) sind Llama 3 8B und Mistral 7B bei Q4_K_M die besten lokalen LLMs. Beide benötigen ~6 GB VRAM und laufen mit ~25 tok/s. Der AMD Ryzen 7 5700X übernimmt die schnelle Tokenisierung als CPU-Fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s auf der RTX 3070 Ti',
          'Mistral 7B Q4_K_M: ~6 GB VRAM, starkes Reasoning pro genutztem VRAM',
          'RTX 3070 Ti hat 8 GB VRAM — 13B-Modelle bei Q4 passen möglicherweise nicht',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti hat 8 GB GDDR6 VRAM und 608 GB/s Speicherbandbreite — erwarten Sie ~25 tok/s bei 7B Q4-Modellen',
          'Llama 3 8B Q4_K_M verwendet ~6 GB VRAM, lässt 2 GB Puffer auf der RTX 3070 Ti',
          'Mistral 7B Q4_K_M benötigt ebenfalls ~6 GB VRAM und bietet vergleichbare Geschwindigkeit',
          '13B-Modelle bei Q4 überschreiten 8 GB VRAM und erfordern niedrigere Quantisierung (Q3 oder weniger)',
        ],
      },
      body1: {
        title: 'RTX 3070 Ti VRAM-Limit bestimmt die Modell-Obergrenze',
        content: [
          '<strong>Die RTX 3070 Ti verfügt über 8 GB GDDR6 VRAM und 608 GB/s Speicherbandbreite, was bei 7B-Modellen mit Q4_K_M-Quantisierung ca. 25 Tokens pro Sekunde liefert.</strong> Dies platziert die 3070 Ti klar im optimalen Bereich für 7B–8B-Modelle.',
          'Bei Q4_K_M verwendet Llama 3 8B ca. 6 GB VRAM und lässt 2 GB für Kontext und Overhead frei. Mistral 7B bei gleicher Quantisierung benötigt ähnliche 6 GB. Beide Modelle laufen ohne Layer-Offloading auf die CPU.',
          '13B-Modelle sind die harte Obergrenze. Llama 3 13B bei Q4_K_M benötigt ca. 8,5–9 GB VRAM, was den 8-GB-Limit der 3070 Ti überschreitet. Mit Q3_K_M (~7 GB) passt es, aber die Ausgabequalität verschlechtert sich merklich gegenüber einem nativen Q4 7B-Modell.',
        ],
        columns: ['Modell', 'VRAM bei Q4_K_M', 'Geschwindigkeit auf RTX 3070 Ti'],
        rows: [
          { 'Modell': 'Llama 3 8B Q4_K_M', 'VRAM bei Q4_K_M': '~6 GB', 'Geschwindigkeit auf RTX 3070 Ti': '~25 tok/s' },
          { 'Modell': 'Mistral 7B Q4_K_M', 'VRAM bei Q4_K_M': '~6 GB', 'Geschwindigkeit auf RTX 3070 Ti': '~24 tok/s' },
          { 'Modell': 'Llama 3 13B Q4_K_M', 'VRAM bei Q4_K_M': '~9 GB', 'Geschwindigkeit auf RTX 3070 Ti': 'Passt nicht' },
        ],
      },
      body2: {
        title: 'Die Rolle des AMD 5700X in diesem Setup',
        content: [
          'Der AMD Ryzen 7 5700X ist ein Zen 3 8-Kern-Prozessor, der Tokenisierung und Prompt-Vorverarbeitung übernimmt, bevor die GPU die Generierung übernimmt. <strong>Die Tokenisierungsgeschwindigkeit ist bei 7B-Modellgrößen kein Engpass — der 5700X schließt diesen Schritt schneller ab, als die GPU Tokens generiert.</strong>',
          'Falls Sie ein 13B-Modell mit dieser Hardware betreiben müssen, laden Sie es mit llama.cpp und Layer-Offloading: Behalten Sie so viele Layer wie möglich im VRAM und lagern Sie den Rest in den System-RAM aus. Erwarten Sie, dass die Generierungsgeschwindigkeit aufgrund des PCIe-Flaschenhals auf 5–8 tok/s sinkt.',
          'Für den vollständigen GPU-Auswahlratgeber und wie die Bandbreite die Inferenzgeschwindigkeit beeinflusst, lesen Sie den <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">Leitfaden zu den besten GPUs für lokale LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu LLMs für AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Kann ich ein 13B-Modell auf einer RTX 3070 Ti ausführen?',
            a: 'Nicht bei Q4_K_M — 13B-Modelle benötigen 8,5–9 GB VRAM, was das 8-GB-Limit überschreitet. Mit Q3_K_M (~7 GB) passt es, aber die Qualität sinkt. Alternativ können Sie Layer-Offloading mit llama.cpp verwenden, um das Modell auf VRAM und RAM aufzuteilen, bei reduzierter Geschwindigkeit.',
          },
          {
            q: 'Was ist die beste Quantisierung für die RTX 3070 Ti?',
            a: 'Q4_K_M bietet die beste Balance aus Qualität und VRAM für 7B–8B-Modelle. Es bewahrt die meiste Modellqualität bei komfortablen 6 GB, mit 2 GB Puffer für KV-Cache und Kontext. Q5_K_M bietet etwas bessere Qualität, benötigt aber ~7 GB.',
          },
          {
            q: 'Beeinflusst der AMD 5700X die LLM-Inferenzgeschwindigkeit?',
            a: 'Minimal. Tokenisierung ist bei 7B-Modellgrößen vernachlässigbar. Der Engpass ist die GPU-Speicherbandbreite. Der 5700X ist ein leistungsfähiger Zen 3-Prozessor, seine Rolle bei GPU-beschleunigter Inferenz beschränkt sich jedoch auf Vorverarbeitung und Orchestrierung.',
          },
          {
            q: 'Welcher Ollama-Befehl startet Llama 3 8B auf einer RTX 3070 Ti?',
            a: '<code>ollama pull llama3:8b</code> lädt das Modell herunter; <code>ollama run llama3:8b</code> startet es. Ollama erkennt die NVIDIA GPU automatisch über CUDA und lädt das vollständige Modell in den VRAM.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Meilleur LLM pour AMD 5700X + RTX 3070 Ti ?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti : LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'Avec une RTX 3070 Ti (8 Go VRAM), Llama 3 8B et Mistral 7B en Q4_K_M sont les meilleurs LLMs locaux. Les deux tiennent en 6 Go. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur LLM pour AMD 5700X + RTX 3070 Ti ?',
        answer: 'Avec une RTX 3070 Ti (8 Go de VRAM), Llama 3 8B et Mistral 7B en Q4_K_M sont les meilleurs LLMs locaux. Les deux utilisent ~6 Go de VRAM et tournent à ~25 tok/s. Le AMD Ryzen 7 5700X assure une tokenisation rapide en fallback CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M : ~6 Go de VRAM, ~25 tok/s sur RTX 3070 Ti',
          'Mistral 7B Q4_K_M : ~6 Go de VRAM, excellent raisonnement par Go de VRAM',
          'RTX 3070 Ti dispose de 8 Go de VRAM — les modèles 13B en Q4 peuvent ne pas tenir',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti dispose de 8 Go de VRAM GDDR6 et 608 Go/s de bande passante — attendez ~25 tok/s sur les modèles 7B en Q4',
          'Llama 3 8B Q4_K_M utilise ~6 Go de VRAM, laissant 2 Go de marge sur la RTX 3070 Ti',
          'Mistral 7B Q4_K_M utilise également ~6 Go de VRAM et offre une vitesse comparable',
          'Les modèles 13B en Q4 dépassent 8 Go de VRAM et nécessitent Q3 ou moins pour fonctionner',
        ],
      },
      body1: {
        title: 'La limite VRAM de la RTX 3070 Ti définit le plafond des modèles',
        content: [
          '<strong>La RTX 3070 Ti dispose de 8 Go de VRAM GDDR6 et 608 Go/s de bande passante mémoire, ce qui délivre environ 25 tokens par seconde sur les modèles 7B en quantisation Q4_K_M.</strong> Cela positionne la 3070 Ti dans la plage optimale des modèles 7B–8B.',
          'En Q4_K_M, Llama 3 8B utilise environ 6 Go de VRAM, laissant 2 Go libres pour le contexte et les données d\'exécution. Mistral 7B à la même quantisation consomme une quantité similaire de 6 Go. Les deux fonctionnent sans déchargement de couches vers le CPU.',
          'La classe 13B représente le plafond absolu. Llama 3 13B en Q4_K_M nécessite environ 8,5–9 Go de VRAM, dépassant la limite de 8 Go de la 3070 Ti. En passant à Q3_K_M (~7 Go), il rentre, mais la qualité de sortie se dégrade notablement par rapport à un modèle 7B natif en Q4.',
        ],
        columns: ['Modèle', 'VRAM en Q4_K_M', 'Vitesse sur RTX 3070 Ti'],
        rows: [
          { 'Modèle': 'Llama 3 8B Q4_K_M', 'VRAM en Q4_K_M': '~6 Go', 'Vitesse sur RTX 3070 Ti': '~25 tok/s' },
          { 'Modèle': 'Mistral 7B Q4_K_M', 'VRAM en Q4_K_M': '~6 Go', 'Vitesse sur RTX 3070 Ti': '~24 tok/s' },
          { 'Modèle': 'Llama 3 13B Q4_K_M', 'VRAM en Q4_K_M': '~9 Go', 'Vitesse sur RTX 3070 Ti': 'Ne rentre pas' },
        ],
      },
      body2: {
        title: 'Le rôle du AMD 5700X dans cette configuration',
        content: [
          'Le AMD Ryzen 7 5700X est un processeur Zen 3 à 8 cœurs qui gère la tokenisation et le prétraitement des prompts avant que le GPU prenne le relais pour la génération. <strong>La vitesse de tokenisation n\'est pas un goulot d\'étranglement pour les modèles 7B — le 5700X complète cette étape plus vite que le GPU ne génère des tokens.</strong>',
          'Si vous devez exécuter un modèle 13B avec ce matériel, chargez-le via llama.cpp avec le déchargement de couches : conservez autant de couches que possible en VRAM et déversez le reste en RAM système. Attendez-vous à une vitesse de génération réduite à 5–8 tok/s en raison du goulot PCIe sur les couches résidant en RAM.',
          'Pour le guide complet de sélection GPU et la correspondance entre bande passante et vitesse d\'inférence, consultez le <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guide des meilleures GPU pour LLMs locaux</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLMs pour AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Puis-je faire tourner un modèle 13B sur une RTX 3070 Ti ?',
            a: 'Pas en Q4_K_M — les modèles 13B nécessitent 8,5–9 Go de VRAM, dépassant la limite de 8 Go. En Q3_K_M (~7 Go), c\'est possible, mais la qualité diminue. Vous pouvez aussi utiliser le déchargement de couches avec llama.cpp pour répartir le modèle entre VRAM et RAM, à vitesse réduite.',
          },
          {
            q: 'Quelle est la meilleure quantisation pour la RTX 3070 Ti ?',
            a: 'Q4_K_M offre le meilleur équilibre qualité/VRAM pour les modèles 7B–8B. Elle préserve la plupart de la qualité tout en tenant confortablement dans 6 Go, laissant 2 Go pour le cache KV et le contexte. Q5_K_M offre une qualité légèrement supérieure mais utilise ~7 Go.',
          },
          {
            q: 'Le AMD 5700X affecte-t-il la vitesse d\'inférence des LLMs ?',
            a: 'Marginalement. La tokenisation est négligeable pour les modèles 7B. Le goulot d\'étranglement est la bande passante mémoire du GPU. Le 5700X est un CPU Zen 3 performant, mais son rôle dans l\'inférence accélérée par GPU se limite au prétraitement et à l\'orchestration.',
          },
          {
            q: 'Quelle commande Ollama lance Llama 3 8B sur une RTX 3070 Ti ?',
            a: '<code>ollama pull llama3:8b</code> télécharge le modèle ; <code>ollama run llama3:8b</code> le lance. Ollama détecte automatiquement le GPU NVIDIA via CUDA et charge le modèle complet en VRAM.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: 'AMD 5700X + RTX 3070 Ti に最適な LLM は？',
    seoTitle: 'AMD 5700X + 3070 Ti 向け最適 LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3070 Ti（8 GB VRAM）では、Q4_K_M の Llama 3 8B と Mistral 7B が最適なローカル LLM です。両モデルとも 6 GB VRAM に収まり ~25 tok/s で動作。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'AMD 5700X + RTX 3070 Ti に最適な LLM は？',
        answer: 'RTX 3070 Ti（8 GB VRAM）では、Q4_K_M の Llama 3 8B と Mistral 7B が最適なローカル LLM です。どちらも VRAM を約 6 GB 使用し、約 25 tok/s で動作します。AMD Ryzen 7 5700X は CPU フォールバックとして高速なトークン化を担います。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM、RTX 3070 Ti で ~25 tok/s',
          'Mistral 7B Q4_K_M：~6 GB VRAM、使用 VRAM あたりの推論品質が高い',
          'RTX 3070 Ti の VRAM は 8 GB — Q4 の 13B モデルは収まらない場合あり',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti は 8 GB GDDR6 VRAM と 608 GB/s のメモリ帯域幅を持ち、7B Q4 モデルで ~25 tok/s を実現',
          'Llama 3 8B Q4_K_M は VRAM を ~6 GB 使用し、RTX 3070 Ti に 2 GB のヘッドルームを残す',
          'Mistral 7B Q4_K_M も ~6 GB VRAM を使用し、同等の速度と強力な命令追従能力を提供',
          'Q4 の 13B モデルは 8 GB VRAM を超えるため、Q3 以下の量子化が必要',
        ],
      },
      body1: {
        title: 'RTX 3070 Ti の VRAM 制限がモデルの上限を決める',
        content: [
          '<strong>RTX 3070 Ti は 8 GB の GDDR6 VRAM と 608 GB/s のメモリ帯域幅を持ち、Q4_K_M 量子化の 7B モデルで毎秒約 25 トークンを生成します。</strong> これにより 3070 Ti は 7B〜8B モデルの推論に最適なポジションに位置します。',
          'Q4_K_M では、Llama 3 8B は約 6 GB の VRAM を使用し、コンテキストとオーバーヘッドのために 2 GB が空きます。同じ量子化の Mistral 7B も同様に 6 GB を使用します。どちらも CPU へのレイヤーオフロードなしで動作します。',
          '13B モデルクラスが実質的な上限です。Llama 3 13B（Q4_K_M）は約 8.5〜9 GB の VRAM を必要とし、3070 Ti の 8 GB を超えます。Q3_K_M（~7 GB）に下げれば収まりますが、ネイティブ Q4 の 7B モデルと比べて出力品質が顕著に低下します。',
        ],
        columns: ['モデル', 'Q4_K_M での VRAM', 'RTX 3070 Ti での速度'],
        rows: [
          { 'モデル': 'Llama 3 8B Q4_K_M', 'Q4_K_M での VRAM': '~6 GB', 'RTX 3070 Ti での速度': '~25 tok/s' },
          { 'モデル': 'Mistral 7B Q4_K_M', 'Q4_K_M での VRAM': '~6 GB', 'RTX 3070 Ti での速度': '~24 tok/s' },
          { 'モデル': 'Llama 3 13B Q4_K_M', 'Q4_K_M での VRAM': '~9 GB', 'RTX 3070 Ti での速度': '収まらない' },
        ],
      },
      body2: {
        title: 'このセットアップにおける AMD 5700X の役割',
        content: [
          'AMD Ryzen 7 5700X は Zen 3 の 8 コア CPU で、GPU が生成処理を担う前にトークン化とプロンプト前処理を行います。<strong>7B モデルサイズではトークン化速度はボトルネックになりません — 5700X は GPU がトークンを生成するよりも速くこのステップを完了します。</strong>',
          'このハードウェアで 13B モデルを実行する必要がある場合は、llama.cpp のレイヤーオフロードを使用してください。VRAM に収まるだけのレイヤーを保持し、残りをシステム RAM にスピルします。RAM 上のレイヤーの PCIe ボトルネックにより生成速度は 5〜8 tok/s に低下します。',
          'GPU 選択ガイドの全詳細と帯域幅と推論速度の関係については、<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカル LLM 向け GPU ガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'AMD 5700X + RTX 3070 Ti 向け LLM に関するよくある質問',
        faqs: [
          {
            q: 'RTX 3070 Ti で 13B モデルを実行できますか？',
            a: 'Q4_K_M では無理です — 13B モデルは 8.5〜9 GB の VRAM が必要で、8 GB の制限を超えます。Q3_K_M（~7 GB）なら収まりますが品質が低下します。llama.cpp のレイヤーオフロードを使えば VRAM と RAM にモデルを分散させることもできますが、速度は低下します。',
          },
          {
            q: 'RTX 3070 Ti に最適な量子化レベルは？',
            a: 'Q4_K_M が 7B〜8B モデルに対して最良の品質と VRAM のバランスを提供します。6 GB に快適に収まり、KV キャッシュとコンテキスト用に 2 GB のヘッドルームを残します。Q5_K_M はわずかに品質が高くなりますが、~7 GB を使用します。',
          },
          {
            q: 'AMD 5700X は LLM 推論速度に影響しますか？',
            a: 'ほとんど影響しません。7B モデルサイズではトークン化は無視できます。ボトルネックは GPU のメモリ帯域幅です。5700X は有能な Zen 3 CPU ですが、GPU 加速推論における役割は前処理とオーケストレーションに限られます。',
          },
          {
            q: 'RTX 3070 Ti で Llama 3 8B を起動する Ollama コマンドは？',
            a: '<code>ollama pull llama3:8b</code> でモデルをダウンロードし、<code>ollama run llama3:8b</code> で起動します。Ollama は CUDA 経由で NVIDIA GPU を自動検出し、モデル全体を VRAM に読み込みます。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: 'AMD 5700X + RTX 3070 Ti 最适合哪款 LLM？',
    seoTitle: 'AMD 5700X + RTX 3070 Ti 最佳 LLM | Prompt Bites | PromptQuorum',
    metaDescription: '搭配 RTX 3070 Ti（8 GB VRAM），Q4_K_M 的 Llama 3 8B 和 Mistral 7B 是最佳本地 LLM。均在 6 GB VRAM 内运行，速度约 25 tok/s。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'AMD 5700X + RTX 3070 Ti 最适合哪款 LLM？',
        answer: '搭配 RTX 3070 Ti（8 GB VRAM），Q4_K_M 量化的 Llama 3 8B 和 Mistral 7B 是最佳本地 LLM。两者均使用约 6 GB VRAM，运行速度约 25 tok/s。AMD Ryzen 7 5700X 作为 CPU 后备负责快速 tokenization。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM，RTX 3070 Ti 上约 25 tok/s',
          'Mistral 7B Q4_K_M：~6 GB VRAM，每 GB VRAM 推理能力出色',
          'RTX 3070 Ti 有 8 GB VRAM——Q4 量化的 13B 模型可能超出限制',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti 有 8 GB GDDR6 VRAM 和 608 GB/s 内存带宽——7B Q4 模型预计约 25 tok/s',
          'Llama 3 8B Q4_K_M 使用约 6 GB VRAM，在 RTX 3070 Ti 上留有 2 GB 余量',
          'Mistral 7B Q4_K_M 同样使用约 6 GB VRAM，速度相近且指令遵循能力强',
          'Q4 量化的 13B 模型超过 8 GB VRAM，需要 Q3 或更低量化才能运行',
        ],
      },
      body1: {
        title: 'RTX 3070 Ti 的 VRAM 限制决定了模型上限',
        content: [
          '<strong>RTX 3070 Ti 拥有 8 GB GDDR6 VRAM 和 608 GB/s 内存带宽，在 Q4_K_M 量化的 7B 模型上可达每秒约 25 个 token。</strong> 这使 3070 Ti 处于 7B~8B 本地推理的最佳区间。',
          '在 Q4_K_M 量化下，Llama 3 8B 使用约 6 GB VRAM，为上下文和运行时留出 2 GB 空间。相同量化的 Mistral 7B 也使用类似的 6 GB。两款模型均无需将层卸载到 CPU。',
          '13B 模型是硬性上限。Llama 3 13B（Q4_K_M）需要约 8.5~9 GB VRAM，超过 3070 Ti 的 8 GB 限制。降至 Q3_K_M（~7 GB）可以放入，但输出质量相比原生 Q4 的 7B 模型会明显下降。',
        ],
        columns: ['模型', 'Q4_K_M 下的 VRAM', 'RTX 3070 Ti 上的速度'],
        rows: [
          { '模型': 'Llama 3 8B Q4_K_M', 'Q4_K_M 下的 VRAM': '~6 GB', 'RTX 3070 Ti 上的速度': '~25 tok/s' },
          { '模型': 'Mistral 7B Q4_K_M', 'Q4_K_M 下的 VRAM': '~6 GB', 'RTX 3070 Ti 上的速度': '~24 tok/s' },
          { '模型': 'Llama 3 13B Q4_K_M', 'Q4_K_M 下的 VRAM': '~9 GB', 'RTX 3070 Ti 上的速度': '超出限制' },
        ],
      },
      body2: {
        title: 'AMD 5700X 在这套配置中的作用',
        content: [
          'AMD Ryzen 7 5700X 是一款 Zen 3 架构的 8 核 CPU，负责在 GPU 接手生成之前完成 tokenization 和 prompt 预处理。<strong>在 7B 模型规模下，tokenization 速度不是瓶颈——5700X 完成该步骤的速度比 GPU 生成 token 更快。</strong>',
          '如果需要在此硬件上运行 13B 模型，可使用 llama.cpp 的层卸载功能：将尽量多的层保留在 VRAM 中，其余部分溢出到系统内存。由于 RAM 层的 PCIe 瓶颈，生成速度将降至 5~8 tok/s。',
          '关于完整的 GPU 选购指南以及带宽与推理速度的对应关系，请参阅<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地 LLM 最佳 GPU 指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 AMD 5700X + RTX 3070 Ti LLM 的快速解答',
        faqs: [
          {
            q: '能在 RTX 3070 Ti 上运行 13B 模型吗？',
            a: 'Q4_K_M 不行——13B 模型需要 8.5~9 GB VRAM，超出 8 GB 限制。降至 Q3_K_M（~7 GB）可以运行，但质量下降。也可以使用 llama.cpp 的层卸载将模型分散在 VRAM 和内存中，但速度会降低。',
          },
          {
            q: 'RTX 3070 Ti 最佳量化级别是什么？',
            a: 'Q4_K_M 为 7B~8B 模型提供最佳质量与 VRAM 的平衡。6 GB 可轻松容纳，留出 2 GB 用于 KV 缓存和上下文。Q5_K_M 质量略高，但需要约 7 GB。',
          },
          {
            q: 'AMD 5700X 会影响 LLM 推理速度吗？',
            a: '影响很小。7B 模型规模下 tokenization 可忽略不计。瓶颈是 GPU 内存带宽。5700X 是一款出色的 Zen 3 CPU，但在 GPU 加速推理中其作用仅限于预处理和调度。',
          },
          {
            q: '在 RTX 3070 Ti 上启动 Llama 3 8B 的 Ollama 命令是什么？',
            a: '<code>ollama pull llama3:8b</code> 下载模型；<code>ollama run llama3:8b</code> 启动模型。Ollama 通过 CUDA 自动识别 NVIDIA GPU，并将完整模型加载到 VRAM 中。',
          },
        ],
      },
    },
  },
}
