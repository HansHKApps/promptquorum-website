import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-en.png',
    title: 'Best LLM for AMD 5700X + RTX 3070 Ti?',
    dateModified: '2026-06-20',
    seoTitle: 'AMD 5700X + RTX 3070 Ti: LLMs | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M and Mistral Small Q5_K_M run 22–25 tok/s on RTX 3070 Ti: both use ~6 GB VRAM. GPU, not CPU, is the upgrade path for LLMs.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Mistral Small'],
    current_hardware_mentioned: ['AMD Ryzen 7 5700X', 'RTX 3070 Ti 8 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Users with an AMD 5700X and RTX 3070 Ti choosing a local LLM',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'radeon-6800m-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best LLM for AMD 5700X + RTX 3070 Ti?',
        answer: 'With an RTX 3070 Ti (8 GB VRAM), Llama 3 8B Q4_K_M and Mistral Small Q5_K_M are the best local LLMs, both using ~6 GB VRAM and running at ~22-25 tok/s for fast inference. The AMD Ryzen 7 5700X handles fast tokenization as a CPU fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s on RTX 3070 Ti',
          'Mistral Small Q5_K_M: ~6 GB VRAM, strong reasoning per VRAM used',
          'RTX 3070 Ti has 8 GB VRAM — 13B models at Q4 may be too large',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes LLM für AMD 5700X + RTX 3070 Ti?',
        answer: 'Mit einer RTX 3070 Ti (8 GB VRAM) sind Llama 3 8B Q4_K_M und Mistral Small Q5_K_M die besten lokalen LLMs, beide verwenden ~6 GB VRAM und laufen mit ~22-25 tok/s für schnelle Inferenz. Der AMD Ryzen 7 5700X übernimmt die schnelle Tokenisierung als CPU-Fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s auf der RTX 3070 Ti',
          'Mistral Small Q4_K_M: ~6 GB VRAM, starkes Reasoning pro genutztem VRAM',
          'RTX 3070 Ti hat 8 GB VRAM — 13B-Modelle bei Q4 passen möglicherweise nicht',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur LLM pour AMD 5700X + RTX 3070 Ti ?',
        answer: 'Avec une RTX 3070 Ti (8 Go de VRAM), Llama 3 8B Q4_K_M et Mistral Small Q5_K_M sont les meilleurs LLMs locaux, utilisant tous deux ~6 Go VRAM et tournant à ~22-25 tok/s pour inférence rapide. Le AMD Ryzen 7 5700X assure une tokenisation rapide en fallback CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M : ~6 Go de VRAM, ~25 tok/s sur RTX 3070 Ti',
          'Mistral Small Q4_K_M : ~6 Go de VRAM, excellent raisonnement par Go de VRAM',
          'RTX 3070 Ti dispose de 8 Go de VRAM — les modèles 13B en Q4 peuvent ne pas tenir',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'AMD 5700X + RTX 3070 Ti に最適な LLM は？',
        answer: 'RTX 3070 Ti（8 GB VRAM）では、Llama 3 8B Q4_K_M と Mistral Small Q5_K_M が最適なローカル LLM で、両者とも約6 GB VRAM で ~22-25 tok/s の高速推論を実現。AMD Ryzen 7 5700X は CPU フォールバックとして高速なトークン化を担います。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM、RTX 3070 Ti で ~25 tok/s',
          'Mistral Small Q4_K_M：~6 GB VRAM、使用 VRAM あたりの推論品質が高い',
          'RTX 3070 Ti の VRAM は 8 GB — Q4 の 13B モデルは収まらない場合あり',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'AMD 5700X + RTX 3070 Ti 最适合哪款 LLM？',
        answer: '搭配 RTX 3070 Ti（8 GB VRAM），Llama 3 8B Q4_K_M 和 Mistral Small Q5_K_M 是最佳本地 LLM，两者均使用约 6 GB VRAM，运行速度约 22-25 tok/s 实现快速推理。AMD Ryzen 7 5700X 作为 CPU 后备负责快速 tokenization。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM，RTX 3070 Ti 上约 25 tok/s',
          'Mistral Small Q4_K_M：~6 GB VRAM，每 GB VRAM 推理能力出色',
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
          'RTX 3070 Ti has 8 GB GDDR6X VRAM — Llama 3 8B Q4_K_M and Mistral Small Q5_K_M run fully in VRAM at ~22–25 tok/s',
          '14B models at Q4_K_M need ~10 GB and do not fit; Q3_K_M (~7 GB) fits but quality drops noticeably',
          'The 5700X\'s 8-core Zen 3 design makes partial CPU offload viable for occasional 14B use at ~8 tok/s',
          'This rig handles most chat, Python, and TypeScript work — GPU is the bottleneck, not the CPU',
        ],
      },
      body1: {
        title: 'What Runs Well on This Rig',
        content: [
          'As of May 2026, <strong>the RTX 3070 Ti (8 GB GDDR6X, 608 GB/s bandwidth) runs Llama 3 8B Q4_K_M and Mistral Small Q5_K_M fully in VRAM — approximately 6 GB each — at ~22–25 tok/s.</strong> The 14B model class is the hard ceiling: it needs ~10 GB at Q4, which exceeds the 8 GB limit.',
          'If a 14B model is required, three paths exist: Q3_K_M drops the footprint to ~7 GB and fits entirely in VRAM, but degrades output quality on reasoning and code tasks. Partial CPU offload via llama.cpp (splitting layers between VRAM and RAM) is viable at ~8 tok/s — the 5700X\'s 8 Zen 3 cores handle this better than a 4-core CPU. Running a 70B model at Q2_K is technically possible at ~1 tok/s but not practical for interactive use.',
          'If 14B coding models at full quality are the goal, see the <a href="/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">best coding LLMs for 12 GB VRAM</a> for the hardware upgrade path.',
        ],
        columns: ['Model', 'Setup', 'Speed'],
        rows: [
          { 'Model': 'Llama 3 8B Q4_K_M', 'Setup': 'Full VRAM', 'Speed': '~25 tok/s' },
          { 'Model': 'Mistral Small Q5_K_M', 'Setup': 'Full VRAM', 'Speed': '~22 tok/s' },
          { 'Model': 'Qwen 14B Q3_K_M', 'Setup': 'Full VRAM (tight)', 'Speed': '~14 tok/s (quality drop)' },
          { 'Model': 'Qwen 14B Q4_K_M', 'Setup': 'Partial CPU offload', 'Speed': '~8 tok/s' },
          { 'Model': 'Llama 3 70B Q2_K', 'Setup': 'CPU-heavy', 'Speed': '~1 tok/s (slow)' },
        ],
      },
      body2: {
        title: 'When to Upgrade or Stay',
        content: [
          '<strong>This rig runs 7B–8B models at 20+ tok/s — sufficient for general chat, Python scripting, TypeScript tooling, and single-file code review.</strong> If that describes your workload, there is no pressing reason to upgrade.',
          'If you need 14B coding models without a quality or speed penalty, the GPU is the upgrade target — not the CPU. A used RTX 3060 12 GB (typically $200–$300) or RTX 4070 base (12 GB) unlocks Qwen 3 Coder 14B at Q4 at full throughput. The 5800X3D is the top AM4 CPU upgrade, but its 3D V-Cache benefit is specific to gaming and CPU-bound scientific workloads — LLM inference is GPU-memory-bandwidth-bound and the 5700X is not the bottleneck here.',
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
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-de.png',
    title: 'Bestes LLM für AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'Beste lokale LLMs: AMD 5700X + RTX 3070 Ti',
    metaDescription: 'Llama 3 8B Q4_K_M und Mistral Small Q5_K_M laufen mit 22–25 tok/s auf RTX 3070 Ti: beide nutzen ~6 GB VRAM. GPU, nicht CPU, ist das Upgrade-Ziel für LLMs.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bestes LLM für AMD 5700X + RTX 3070 Ti?',
        answer: 'Mit einer RTX 3070 Ti (8 GB VRAM) sind Llama 3 8B Q4_K_M und Mistral Small Q5_K_M die besten lokalen LLMs. Beide benötigen ~6 GB VRAM und laufen mit ~22–25 tok/s. Der AMD Ryzen 7 5700X übernimmt die schnelle Tokenisierung als CPU-Fallback.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s auf der RTX 3070 Ti',
          'Mistral Small Q5_K_M: ~6 GB VRAM, starkes Reasoning pro genutztem VRAM',
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
          'Mistral Small Q4_K_M benötigt ebenfalls ~6 GB VRAM und bietet vergleichbare Geschwindigkeit',
          '13B-Modelle bei Q4 überschreiten 8 GB VRAM und erfordern niedrigere Quantisierung (Q3 oder weniger)',
        ],
      },
      body1: {
        title: 'Was gut auf dieser Ausstattung läuft',
        content: [
          '<strong>Stand Mai 2026: Die RTX 3070 Ti (8 GB GDDR6X, 608 GB/s Speicherbandbreite) führt Llama 3 8B Q4_K_M und Mistral Small Q5_K_M vollständig im VRAM aus — jeweils ca. 6 GB — mit ~22–25 tok/s.</strong> Die 14B-Modellklasse ist die harte Grenze: Sie benötigt ~10 GB, was das 8-GB-Limit überschreitet.',
          'Wenn ein 14B-Modell erforderlich ist, gibt es drei Wege: Q3_K_M reduziert den Speicherbedarf auf ~7 GB und passt vollständig in den VRAM, verschlechtert aber die Ausgabequalität bei Reasoning und Code-Aufgaben. Partial CPU Offloading via llama.cpp (Aufteilung von Schichten zwischen VRAM und RAM) ist mit ~8 tok/s machbar — die 8 Zen-3-Kerne des 5700X bewältigen dies besser als ein 4-Kern-CPU. Ein 70B-Modell mit Q2_K ist technisch möglich mit ~1 tok/s, aber nicht praktisch für interaktive Nutzung.',
          'Wenn 14B-Coding-Modelle in voller Qualität das Ziel sind, siehe den <a href="/de/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">Leitfaden zu den besten Coding-LLMs für 12 GB VRAM</a> für den Hardware-Upgrade-Weg.',
        ],
        columns: ['Modell', 'Setup', 'Geschwindigkeit'],
        rows: [
          { 'Modell': 'Llama 3 8B Q4_K_M', 'Setup': 'Vollständig im VRAM', 'Geschwindigkeit': '~25 tok/s' },
          { 'Modell': 'Mistral Small Q5_K_M', 'Setup': 'Vollständig im VRAM', 'Geschwindigkeit': '~22 tok/s' },
          { 'Modell': 'Qwen 14B Q3_K_M', 'Setup': 'Vollständig im VRAM (eng)', 'Geschwindigkeit': '~14 tok/s (Qualitätsverlust)' },
          { 'Modell': 'Qwen 14B Q4_K_M', 'Setup': 'Partial CPU Offload', 'Geschwindigkeit': '~8 tok/s' },
          { 'Modell': 'Llama 3 70B Q2_K', 'Setup': 'CPU-lastig', 'Geschwindigkeit': '~1 tok/s (langsam)' },
        ],
      },
      body2: {
        title: 'Wann upgraden oder wann bleiben?',
        content: [
          '<strong>Diese Ausstattung läuft 7B–8B-Modelle mit 20+ tok/s — ausreichend für allgemeines Chat, Python-Scripting, TypeScript-Tooling und Code-Review einzelner Dateien.</strong> Wenn das Ihre Workload beschreibt, gibt es keinen drängenden Grund zu upgraden.',
          'Wenn Sie 14B-Coding-Modelle ohne Qualitäts- oder Geschwindigkeitsverlust benötigen, ist die GPU das Upgrade-Ziel — nicht die CPU. Eine gebrauchte RTX 3060 12 GB (typischerweise 200–300 EUR) oder RTX 4070 base (12 GB) freischalt Qwen 3 Coder 14B bei Q4 mit voller Durchsatzrate. Die 5800X3D ist das beste AM4-CPU-Upgrade, aber ihr 3D-V-Cache-Vorteil ist spezifisch für Gaming und CPU-gebundene wissenschaftliche Workloads — LLM-Inferenz ist GPU-Speicherbandbreiten-gebunden und der 5700X ist hier nicht der Engpass.',
          'Für den vollständigen GPU-Auswahlratgeber und die Zuordnung von Speicherbandbreite zu LLM-Inferenzgeschwindigkeit, siehe den <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">Leitfaden zu den besten GPUs für lokale LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu LLMs für AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Kann ich ein 14B-Modell auf einer RTX 3070 Ti 8 GB ausführen?',
            a: 'Nicht bei Q4_K_M — 14B-Modelle benötigen ca. 10 GB, was das 8-GB-Limit überschreitet. Q3_K_M (~7 GB) passt, aber die Ausgabequalität verschlechtert sich deutlich bei Reasoning- und Code-Aufgaben. Partial CPU Offload via llama.cpp ist mit ~8 tok/s möglich.',
          },
          {
            q: 'Sollte ich GPU oder CPU für bessere LLM-Leistung upgraden?',
            a: 'GPU. LLM-Inferenzgeschwindigkeit ist GPU-Speicherbandbreiten-gebunden; der 5700X ist nicht der Engpass. Ein Upgrade zu 12 GB GPU (RTX 3060 12 GB oder RTX 4070 base) freischalt die 14B-Modellklasse in voller Q4-Qualität und -Geschwindigkeit.',
          },
          {
            q: 'Spielt RAM-Geschwindigkeit für Partial CPU Offload eine Rolle?',
            a: 'Ja, als Sekundärfaktor. DDR4-3600 vs. DDR4-2133 ergibt grob 15% mehr CPU-Offload-Durchsatz für die RAM-Schichten. Die GPU bleibt die primäre Einschränkung für Schichten, die in den VRAM passen.',
          },
          {
            q: 'Lohnt sich die 5800X3D im Vergleich zur 5700X für LLMs?',
            a: 'Nein. Der 3D-V-Cache der 5800X3D hilft Gaming und gewissen CPU-gebundenen Workloads, aber LLM-Inferenz ist GPU-Speicherbandbreiten-gebunden. Der 5700X ist auf dieser Ausstattung nicht der Engpass — investieren Sie das Upgrade-Budget in eine 12 GB GPU.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-fr.png',
    title: 'Meilleur LLM pour AMD 5700X + RTX 3070 Ti ?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti : LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M et Mistral Small Q5_K_M tournent à 22–25 tok/s sur RTX 3070 Ti : tous deux 6 Go VRAM. GPU, pas CPU, est la cible d\'upgrade pour LLMs.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur LLM pour AMD 5700X + RTX 3070 Ti ?',
        answer: 'Avec une RTX 3070 Ti (8 Go de VRAM), Llama 3 8B Q4_K_M et Mistral Small Q5_K_M sont les meilleurs LLMs locaux. Les deux utilisent ~6 Go de VRAM et tournent à ~22–25 tok/s. Le AMD Ryzen 7 5700X assure une tokenisation rapide en fallback CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M : ~6 Go de VRAM, ~25 tok/s sur RTX 3070 Ti',
          'Mistral Small Q5_K_M : ~6 Go de VRAM, excellent raisonnement par Go de VRAM',
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
          'Mistral Small Q4_K_M utilise également ~6 Go de VRAM et offre une vitesse comparable',
          'Les modèles 13B en Q4 dépassent 8 Go de VRAM et nécessitent Q3 ou moins pour fonctionner',
        ],
      },
      body1: {
        title: 'Ce qui fonctionne bien sur cette configuration',
        content: [
          '<strong>À partir de mai 2026, la RTX 3070 Ti (8 Go de VRAM GDDR6X, 608 Go/s de bande passante) exécute complètement en VRAM Llama 3 8B Q4_K_M et Mistral Small Q5_K_M — environ 6 Go chacun — à ~22–25 tok/s.</strong> La classe 14B est la limite absolue : elle a besoin d\'environ 10 Go, ce qui dépasse la limite de 8 Go.',
          'Si un modèle 14B est requis, trois chemins existent : Q3_K_M réduit l\'empreinte à ~7 Go et rentre entièrement en VRAM, mais dégrade la qualité de sortie sur les tâches de raisonnement et de code. Le déchargement partiel via llama.cpp (répartition de couches entre VRAM et RAM) est viable à ~8 tok/s — les 8 cœurs Zen 3 du 5700X gèrent cela mieux qu\'un CPU 4-cœurs. L\'exécution d\'un modèle 70B en Q2_K est techniquement possible à ~1 tok/s mais pas pratique pour une utilisation interactive.',
          'Si les modèles 14B de codage à qualité complète sont l\'objectif, consultez le <a href="/fr/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">guide des meilleurs LLMs de codage pour 12 Go de VRAM</a> pour le chemin de mise à niveau du matériel.',
        ],
        columns: ['Modèle', 'Configuration', 'Vitesse'],
        rows: [
          { 'Modèle': 'Llama 3 8B Q4_K_M', 'Configuration': 'Entièrement en VRAM', 'Vitesse': '~25 tok/s' },
          { 'Modèle': 'Mistral Small Q5_K_M', 'Configuration': 'Entièrement en VRAM', 'Vitesse': '~22 tok/s' },
          { 'Modèle': 'Qwen 14B Q3_K_M', 'Configuration': 'Entièrement en VRAM (serré)', 'Vitesse': '~14 tok/s (perte de qualité)' },
          { 'Modèle': 'Qwen 14B Q4_K_M', 'Configuration': 'Déchargement partiel CPU', 'Vitesse': '~8 tok/s' },
          { 'Modèle': 'Llama 3 70B Q2_K', 'Configuration': 'Intensive CPU', 'Vitesse': '~1 tok/s (lent)' },
        ],
      },
      body2: {
        title: 'Quand faire une mise à niveau ou rester',
        content: [
          '<strong>Cette configuration exécute les modèles 7B–8B à 20+ tok/s — suffisant pour le chat général, les scripts Python, les outils TypeScript et la révision de code d\'un seul fichier.</strong> Si c\'est votre charge de travail, il n\'y a pas de raison impérieuse de faire une mise à niveau.',
          'Si vous avez besoin de modèles 14B de codage sans perte de qualité ou de vitesse, c\'est la GPU qui est la cible de mise à niveau — pas le CPU. Une RTX 3060 12 Go d\'occasion (typiquement 200–300 EUR) ou RTX 4070 base (12 Go) déverrouille Qwen 3 Coder 14B en Q4 à débit complet. La 5800X3D est la meilleure mise à niveau CPU AM4, mais son avantage 3D V-Cache est spécifique aux jeux et aux charges de travail scientifiques liées au CPU — l\'inférence LLM est limitée par la bande passante mémoire du GPU et le 5700X n\'est pas le goulot d\'étranglement ici.',
          'Pour le guide complet de sélection GPU et comment la bande passante se traduit en vitesse d\'inférence, consultez le <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guide des meilleures GPU pour LLMs locaux</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les LLMs pour AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Puis-je faire tourner un modèle 14B sur une RTX 3070 Ti 8 Go ?',
            a: 'Pas en Q4_K_M — les modèles 14B nécessitent environ 10 Go de VRAM, ce qui dépasse la limite de 8 Go. Q3_K_M (~7 Go) rentre, mais la qualité de sortie diminue notablement sur les tâches de raisonnement et de code. Le déchargement partiel via llama.cpp est possible à ~8 tok/s.',
          },
          {
            q: 'Dois-je mettre à niveau le GPU ou le CPU pour une meilleure performance LLM ?',
            a: 'Le GPU. La vitesse d\'inférence LLM est limitée par la bande passante mémoire du GPU ; le 5700X n\'est pas le goulot d\'étranglement. Une mise à niveau vers une GPU 12 Go (RTX 3060 12 Go ou RTX 4070 base) déverrouille la classe modèle 14B à qualité Q4 complète et à vitesse maximale.',
          },
          {
            q: 'La vitesse de la RAM a-t-elle une importance pour le déchargement partiel CPU ?',
            a: 'Oui, comme facteur secondaire. DDR4-3600 vs. DDR4-2133 offre environ 15% plus de débit de déchargement CPU pour les couches résidant en RAM. Le GPU reste la contrainte primaire pour les couches qui tiennent en VRAM.',
          },
          {
            q: 'La 5800X3D vaut-elle le coup par rapport à la 5700X pour les LLMs ?',
            a: 'Non. Le 3D V-Cache de la 5800X3D aide les jeux et certaines charges de travail liées au CPU, mais l\'inférence LLM est limitée par la bande passante mémoire du GPU. Le 5700X n\'est pas le goulot d\'étranglement sur cette configuration — investissez votre budget de mise à niveau dans une GPU 12 Go à la place.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-ja.png',
    title: 'AMD 5700X + RTX 3070 Ti に最適な LLM は？',
    seoTitle: 'AMD 5700X + 3070 Ti 向け最適 LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M と Mistral Small Q5_K_M は RTX 3070 Ti で22–25 tok/s：両者とも6 GB VRAM。GPU が CPU でなくアップグレード対象。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'AMD 5700X + RTX 3070 Ti に最適な LLM は？',
        answer: 'RTX 3070 Ti（8 GB VRAM）では、Llama 3 8B Q4_K_M と Mistral Small Q5_K_M が最適なローカル LLM です。どちらも VRAM を約 6 GB 使用し、約 22–25 tok/s で動作します。AMD Ryzen 7 5700X は CPU フォールバックとして高速なトークン化を担います。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM、RTX 3070 Ti で ~25 tok/s',
          'Mistral Small Q5_K_M：~6 GB VRAM、使用 VRAM あたりの推論品質が高い',
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
          'RTX 3070 Ti は 8 GB GDDR6 VRAM と 608 GB/s のメモリ帯域幅を持ち、7B Q4 モデルで 約 25 tok/s を実現',
          'Llama 3 8B Q4_K_M は VRAM を 約 6 GB 使用し、RTX 3070 Ti に 2 GB のヘッドルームを残す',
          'Mistral Small Q4_K_M も 約 6 GB VRAM を使用し、同等の速度と強力な命令追従能力を提供',
          'Q4 の 13B モデルは 8 GB VRAM を超えるため、Q3 以下の量子化が必要',
        ],
      },
      body1: {
        title: 'このリグで良好に動作するもの',
        content: [
          '<strong>2026年5月時点で、RTX 3070 Ti（8 GB GDDR6X、608 GB/s 帯域幅）は Llama 3 8B Q4_K_M と Mistral Small Q5_K_M を VRAM 内で完全に実行します — 各モデル約 6 GB — 約 22–25 tok/s で動作します。</strong> 14B モデルクラスがハード上限です：約 10 GB 必要で、8 GB 制限を超えます。',
          '14B モデルが必要な場合、3つのパスがあります：Q3_K_M はフットプリントを 約 7 GB に削減し、完全に VRAM に収まりますが、推論とコード タスクの出力品質が低下します。llama.cpp を介した部分的 CPU オフロード（VRAM と RAM 間のレイヤー分割）は 約 8 tok/s で実行可能です — 5700X の 8 個の Zen 3 コアは 4 コア CPU よりもこれをより適切に処理します。70B モデルを Q2_K で実行することは技術的には 約 1 tok/s で可能ですが、対話的使用には実用的ではありません。',
          '14B コーディングモデルが完全な品質で目標である場合、<a href="/ja/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 向けベストコーディング LLM ガイド</a>を参照して、ハードウェアアップグレードパスを確認してください。',
        ],
        columns: ['モデル', 'セットアップ', '速度'],
        rows: [
          { 'モデル': 'Llama 3 8B Q4_K_M', 'セットアップ': '完全 VRAM', '速度': '約 25 tok/s' },
          { 'モデル': 'Mistral Small Q5_K_M', 'セットアップ': '完全 VRAM', '速度': '約 22 tok/s' },
          { 'モデル': 'Qwen 14B Q3_K_M', 'セットアップ': '完全 VRAM（タイト）', '速度': '約 14 tok/s（品質低下）' },
          { 'モデル': 'Qwen 14B Q4_K_M', 'セットアップ': '部分的 CPU オフロード', '速度': '約 8 tok/s' },
          { 'モデル': 'Llama 3 70B Q2_K', 'セットアップ': 'CPU 集約的', '速度': '約 1 tok/s（遅い）' },
        ],
      },
      body2: {
        title: 'いつアップグレードするか、いつ留まるか',
        content: [
          '<strong>このリグは 7B–8B モデルを 20+ tok/s で実行します — 一般的なチャット、Python スクリプティング、TypeScript ツール、および単一ファイルコード レビューに十分です。</strong> それがあなたのワークロードを説明する場合、アップグレードする差し迫った理由はありません。',
          '品質またはスピードの低下なしで 14B コーディング モデルが必要な場合、アップグレード対象は GPU です — CPU ではありません。中古の RTX 3060 12 GB（通常 200–300 USD）または RTX 4070 ベース（12 GB）は Qwen 3 Coder 14B を Q4 で完全スループット時にロック解除します。5800X3D は最高の AM4 CPU アップグレードですが、その 3D V-Cache の利点はゲーミングおよび CPU バウンド科学ワークロードに固有です — LLM 推論は GPU メモリ帯域幅バウンドであり、5700X はこのリグではボトルネックではありません。',
          '完全な GPU 選択ガイドおよびメモリ帯域幅が LLM 推論速度にどのようにマップするかについては、<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカル LLM 向けベスト GPU ガイド</a>を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'AMD 5700X + RTX 3070 Ti 向け LLM に関するよくある質問',
        faqs: [
          {
            q: 'RTX 3070 Ti 8 GB で 14B モデルを実行できますか？',
            a: 'Q4_K_M ではできません — 14B モデルは約 10 GB が必要で、8 GB 制限を超えます。Q3_K_M（約 7 GB）は収まりますが、推論とコード タスクの出力品質が顕著に低下します。llama.cpp を介した部分的 CPU オフロードは 約 8 tok/s で可能です。',
          },
          {
            q: 'より良い LLM パフォーマンスのために GPU または CPU をアップグレードすべきですか？',
            a: 'GPU。LLM 推論速度は GPU メモリ帯域幅バウンドです；5700X はボトルネックではありません。12 GB GPU（RTX 3060 12 GB または RTX 4070 ベース）へのアップグレードは、14B モデルティアを完全 Q4 品質と速度でロック解除します。',
          },
          {
            q: '部分的 CPU オフロードの場合、RAM 速度は重要ですか？',
            a: 'はい、二次要因として。DDR4-3600 対 DDR4-2133 は RAM 常駐レイヤーの CPU オフロード スループットを約 15% 向上させます。GPU は VRAM に適応するレイヤーの一次制約のままです。',
          },
          {
            q: 'LLM の場合、5800X3D は 5700X より価値がありますか？',
            a: 'いいえ。5800X3D の 3D V-Cache 利点はゲーミングと特定の CPU バウンド ワークロードに限定されます。LLM 推論は GPU メモリ帯域幅バウンドです。5700X はこのリグではボトルネックではありません — アップグレード予算を 12 GB GPU に投資してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-zh.png',
    title: 'AMD 5700X + RTX 3070 Ti 最适合哪款 LLM？',
    seoTitle: 'AMD 5700X + RTX 3070 Ti 最佳 LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M和Mistral Small Q5_K_M在RTX 3070 Ti上22–25 tok/s：均占用6 GB VRAM。GPU而非CPU是LLM升级目标。',
    publishDate: '2026-05-18',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: 'AMD 5700X + RTX 3070 Ti 最适合哪款 LLM？',
        answer: '搭配 RTX 3070 Ti（8 GB VRAM），Llama 3 8B Q4_K_M 和 Mistral Small Q5_K_M 是最佳本地 LLM。两者均使用约 6 GB VRAM，运行速度约 22–25 tok/s。AMD Ryzen 7 5700X 作为 CPU 后备负责快速 tokenization。',
        bullets: [
          'Llama 3 8B Q4_K_M：~6 GB VRAM，RTX 3070 Ti 上约 25 tok/s',
          'Mistral Small Q5_K_M：~6 GB VRAM，每 GB VRAM 推理能力出色',
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
          'Mistral Small Q4_K_M 同样使用约 6 GB VRAM，速度相近且指令遵循能力强',
          'Q4 量化的 13B 模型超过 8 GB VRAM，需要 Q3 或更低量化才能运行',
        ],
      },
      body1: {
        title: '这套配置能运行什么模型',
        content: [
          '<strong>截至 2026 年 5 月，RTX 3070 Ti（8 GB GDDR6X，608 GB/s 带宽）在 VRAM 内完整运行 Llama 3 8B Q4_K_M 和 Mistral Small Q5_K_M——各约 6 GB——速度约 22–25 tok/s。</strong> 14B 模型类是硬性上限：需要约 10 GB，超过 8 GB 限制。',
          '如果需要 14B 模型，有三条路：Q3_K_M 将占用空间削减至约 7 GB，完整装入 VRAM，但在推理和代码任务上的输出质量会下降。通过 llama.cpp 进行部分 CPU 卸载（在 VRAM 和 RAM 间分割层）可在约 8 tok/s 下工作——5700X 的 8 个 Zen 3 核心比 4 核 CPU 能更好地处理这种情况。运行 70B 模型 Q2_K 技术上可在约 1 tok/s 下工作，但不适合交互式使用。',
          '如果目标是以完整质量运行 14B 编码模型，请参阅<a href="/zh/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 最佳编码 LLM 指南</a>了解硬件升级路径。',
        ],
        columns: ['模型', '配置', '速度'],
        rows: [
          { '模型': 'Llama 3 8B Q4_K_M', '配置': '完整 VRAM', '速度': '~25 tok/s' },
          { '模型': 'Mistral Small Q5_K_M', '配置': '完整 VRAM', '速度': '~22 tok/s' },
          { '模型': 'Qwen 14B Q3_K_M', '配置': '完整 VRAM（紧凑）', '速度': '~14 tok/s（质量下降）' },
          { '模型': 'Qwen 14B Q4_K_M', '配置': '部分 CPU 卸载', '速度': '~8 tok/s' },
          { '模型': 'Llama 3 70B Q2_K', '配置': 'CPU 集约型', '速度': '~1 tok/s（很慢）' },
        ],
      },
      body2: {
        title: '何时升级或保持不变',
        content: [
          '<strong>这套配置以 20+ tok/s 运行 7B–8B 模型——足以胜任通用聊天、Python 脚本编写、TypeScript 工具编写和单文件代码审查。</strong> 如果这描述了你的工作负载，就没有迫切的升级理由。',
          '如果你需要 14B 编码模型而不牺牲质量或速度，升级目标是 GPU——而非 CPU。二手 RTX 3060 12 GB（通常 200–300 美元）或 RTX 4070 基础版（12 GB）可以解锁 Qwen 3 Coder 14B Q4 全速运行。5800X3D 是最好的 AM4 CPU 升级，但其 3D V-Cache 优势仅限于游戏和 CPU 密集型科学工作负载——LLM 推理受 GPU 内存带宽限制，而 5700X 在这套配置中不是瓶颈。',
          '关于完整 GPU 选购指南及带宽与 LLM 推理速度的对应关系，请参阅<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地 LLM 最佳 GPU 指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 AMD 5700X + RTX 3070 Ti LLM 的快速解答',
        faqs: [
          {
            q: '能在 RTX 3070 Ti 8 GB 上运行 14B 模型吗？',
            a: 'Q4_K_M 不行——14B 模型需要约 10 GB VRAM，超过 8 GB 限制。Q3_K_M（~7 GB）可以运行，但输出质量在推理和代码任务上会明显下降。部分 CPU 卸载通过 llama.cpp 可在约 8 tok/s 下工作。',
          },
          {
            q: '是应该升级 GPU 还是 CPU 以获得更好的 LLM 性能？',
            a: 'GPU。LLM 推理速度受 GPU 内存带宽限制；5700X 不是瓶颈。升级到 12 GB GPU（RTX 3060 12 GB 或 RTX 4070 基础版）可以解锁完整 Q4 质量和速度的 14B 模型类。',
          },
          {
            q: '部分 CPU 卸载时，RAM 速度重要吗？',
            a: '重要，作为次要因素。DDR4-3600 对比 DDR4-2133 大约能为 RAM 常驻层的 CPU 卸载吞吐量提升 15%。GPU 对 VRAM 适配的层仍是主要约束。',
          },
          {
            q: 'LLM 方面，5800X3D 相比 5700X 值得吗？',
            a: '不值。5800X3D 的 3D V-Cache 优势仅限于游戏和某些 CPU 密集型工作负载。LLM 推理受 GPU 内存带宽限制。5700X 在这套配置中不是瓶颈——把升级预算投在 12 GB GPU 上。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-es.png',
    title: '¿Mejor LLM para AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti: LLMs | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M y Mistral Small Q5_K_M funcionan a 22–25 tok/s en RTX 3070 Ti: ambos usan ~6 GB VRAM. La GPU, no la CPU, es el objetivo de mejora para LLMs.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Mejor LLM para AMD 5700X + RTX 3070 Ti?',
        answer: 'Con una RTX 3070 Ti (8 GB VRAM), Llama 3 8B Q4_K_M y Mistral Small Q5_K_M son los mejores LLMs locales. Ambos usan ~6 GB VRAM y corren a ~22–25 tok/s. El AMD Ryzen 7 5700X gestiona la tokenización rápida como fallback de CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM, ~25 tok/s en RTX 3070 Ti',
          'Mistral Small Q5_K_M: ~6 GB VRAM, razonamiento sólido por GB de VRAM utilizado',
          'RTX 3070 Ti tiene 8 GB VRAM — los modelos 13B en Q4 pueden no caber',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti tiene 8 GB GDDR6X VRAM — Llama 3 8B Q4_K_M y Mistral Small Q5_K_M corren completamente en VRAM a ~22–25 tok/s',
          'Los modelos 14B en Q4_K_M necesitan ~10 GB y no caben; Q3_K_M (~7 GB) cabe pero la calidad cae notablemente',
          'El diseño de 8 núcleos Zen 3 del 5700X hace viable el offload parcial a CPU para uso ocasional de modelos 14B a ~8 tok/s',
          'Este equipo gestiona la mayoría de tareas de chat, Python y TypeScript — la GPU es el cuello de botella, no la CPU',
        ],
      },
      body1: {
        title: 'Qué funciona bien en este equipo',
        content: [
          'A partir de mayo de 2026, <strong>la RTX 3070 Ti (8 GB GDDR6X, 608 GB/s de ancho de banda) ejecuta Llama 3 8B Q4_K_M y Mistral Small Q5_K_M completamente en VRAM — aproximadamente 6 GB cada uno — a ~22–25 tok/s.</strong> La clase de modelos 14B es el límite duro: necesitan ~10 GB en Q4, lo que supera el límite de 8 GB.',
          'Si se requiere un modelo 14B, existen tres caminos: Q3_K_M reduce el uso a ~7 GB y cabe completamente en VRAM, pero degrada la calidad de salida en tareas de razonamiento y código. El offload parcial a CPU mediante llama.cpp (dividir capas entre VRAM y RAM) es viable a ~8 tok/s — los 8 núcleos Zen 3 del 5700X lo gestionan mejor que una CPU de 4 núcleos. Ejecutar un modelo 70B en Q2_K es técnicamente posible a ~1 tok/s, pero no es práctico para uso interactivo.',
          'Si el objetivo son modelos de codificación 14B con calidad completa, consulta la <a href="/es/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">guía de los mejores LLMs de codificación para 12 GB VRAM</a> para conocer el camino de actualización de hardware.',
        ],
        columns: ['Modelo', 'Configuración', 'Velocidad'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q4_K_M', 'Configuración': 'VRAM completa', 'Velocidad': '~25 tok/s' },
          { 'Modelo': 'Mistral Small Q5_K_M', 'Configuración': 'VRAM completa', 'Velocidad': '~22 tok/s' },
          { 'Modelo': 'Qwen 14B Q3_K_M', 'Configuración': 'VRAM completa (ajustado)', 'Velocidad': '~14 tok/s (caída de calidad)' },
          { 'Modelo': 'Qwen 14B Q4_K_M', 'Configuración': 'Offload parcial a CPU', 'Velocidad': '~8 tok/s' },
          { 'Modelo': 'Llama 3 70B Q2_K', 'Configuración': 'Intensivo en CPU', 'Velocidad': '~1 tok/s (lento)' },
        ],
      },
      body2: {
        title: 'Cuándo actualizar o quedarse',
        content: [
          '<strong>Este equipo ejecuta modelos 7B–8B a 20+ tok/s — suficiente para chat general, scripting en Python, herramientas TypeScript y revisión de código de un solo archivo.</strong> Si eso describe tu carga de trabajo, no hay razón urgente para actualizar.',
          'Si necesitas modelos de codificación 14B sin penalización de calidad o velocidad, la GPU es el objetivo de actualización — no la CPU. Una RTX 3060 12 GB usada (típicamente $200–$300) o RTX 4070 base (12 GB) desbloquea Qwen 3 Coder 14B en Q4 con rendimiento completo. La 5800X3D es la mejor actualización de CPU AM4, pero su ventaja de 3D V-Cache es específica para gaming y cargas de trabajo científicas limitadas por CPU — la inferencia LLM está limitada por el ancho de banda de memoria de la GPU y el 5700X no es el cuello de botella aquí.',
          'Para la guía completa de selección de GPU y cómo el ancho de banda de memoria se traduce en velocidad de inferencia LLM, consulta la <a href="/es/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guía de las mejores GPUs para LLMs locales</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre LLMs para AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: '¿Puedo ejecutar un modelo 14B en RTX 3070 Ti 8 GB?',
            a: 'No en Q4_K_M — los modelos 14B necesitan aproximadamente 10 GB, lo que supera el límite de 8 GB. Q3_K_M (~7 GB) cabe pero la calidad de salida cae notablemente en tareas de razonamiento y código. El offload parcial a CPU mediante llama.cpp es posible a ~8 tok/s.',
          },
          {
            q: '¿Debo actualizar la GPU o la CPU para mejor rendimiento en LLMs?',
            a: 'La GPU. La velocidad de inferencia LLM está limitada por el ancho de banda de memoria de la GPU; el 5700X no es el cuello de botella. Actualizar a una GPU de 12 GB (RTX 3060 12 GB o RTX 4070 base) desbloquea la clase de modelos 14B con calidad y velocidad Q4 completas.',
          },
          {
            q: '¿Importa la velocidad de la RAM para el offload parcial a CPU?',
            a: 'Sí, como factor secundario. DDR4-3600 frente a DDR4-2133 ofrece aproximadamente un 15% más de rendimiento de offload a CPU para las capas residentes en RAM. La GPU sigue siendo la restricción principal para las capas que caben en VRAM.',
          },
          {
            q: '¿Vale la pena la 5800X3D sobre la 5700X para LLMs?',
            a: 'No. El 3D V-Cache de la 5800X3D beneficia al gaming y ciertas cargas de trabajo limitadas por CPU, pero la inferencia LLM está limitada por el ancho de banda de memoria de la GPU. El 5700X no es el cuello de botella en este equipo — destina el presupuesto de actualización a una GPU de 12 GB.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-pt.png',
    title: 'Melhor LLM para AMD 5700X + RTX 3070 Ti?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti: LLMs | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M e Mistral Small Q5_K_M rodam a 22–25 tok/s na RTX 3070 Ti: ambos usam ~6 GB de VRAM. A GPU, não a CPU, é o alvo de atualização para LLMs.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-02',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Melhor LLM para AMD 5700X + RTX 3070 Ti?',
        answer: 'Com uma RTX 3070 Ti (8 GB de VRAM), Llama 3 8B Q4_K_M e Mistral Small Q5_K_M são os melhores LLMs locais. Ambos usam ~6 GB de VRAM e rodam a ~22–25 tok/s. O AMD Ryzen 7 5700X gerencia a tokenização rápida como fallback de CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB de VRAM, ~25 tok/s na RTX 3070 Ti',
          'Mistral Small Q5_K_M: ~6 GB de VRAM, raciocínio sólido por GB de VRAM usado',
          'RTX 3070 Ti tem 8 GB de VRAM — modelos 13B em Q4 podem não caber',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti tem 8 GB GDDR6X de VRAM — Llama 3 8B Q4_K_M e Mistral Small Q5_K_M rodam completamente na VRAM a ~22–25 tok/s',
          'Modelos 14B em Q4_K_M precisam de ~10 GB e não cabem; Q3_K_M (~7 GB) cabe mas a qualidade cai notavelmente',
          'O design de 8 núcleos Zen 3 do 5700X torna o offload parcial para CPU viável para uso ocasional de modelos 14B a ~8 tok/s',
          'Esse equipamento lida com a maioria das tarefas de chat, Python e TypeScript — a GPU é o gargalo, não a CPU',
        ],
      },
      body1: {
        title: 'O que funciona bem nesse equipamento',
        content: [
          'Em maio de 2026, <strong>a RTX 3070 Ti (8 GB GDDR6X, 608 GB/s de largura de banda) executa Llama 3 8B Q4_K_M e Mistral Small Q5_K_M completamente na VRAM — aproximadamente 6 GB cada — a ~22–25 tok/s.</strong> A classe de modelos 14B é o limite rígido: precisa de ~10 GB em Q4, o que excede o limite de 8 GB.',
          'Se um modelo 14B for necessário, existem três caminhos: Q3_K_M reduz o uso para ~7 GB e cabe completamente na VRAM, mas degrada a qualidade de saída em tarefas de raciocínio e código. O offload parcial para CPU via llama.cpp (dividir camadas entre VRAM e RAM) é viável a ~8 tok/s — os 8 núcleos Zen 3 do 5700X lidam melhor com isso do que uma CPU de 4 núcleos. Executar um modelo 70B em Q2_K é tecnicamente possível a ~1 tok/s, mas não é prático para uso interativo.',
          'Se modelos de programação 14B com qualidade total forem o objetivo, consulte o <a href="/pt/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">guia dos melhores LLMs de programação para 12 GB de VRAM</a> para o caminho de atualização de hardware.',
        ],
        columns: ['Modelo', 'Configuração', 'Velocidade'],
        rows: [
          { 'Modelo': 'Llama 3 8B Q4_K_M', 'Configuração': 'VRAM completa', 'Velocidade': '~25 tok/s' },
          { 'Modelo': 'Mistral Small Q5_K_M', 'Configuração': 'VRAM completa', 'Velocidade': '~22 tok/s' },
          { 'Modelo': 'Qwen 14B Q3_K_M', 'Configuração': 'VRAM completa (apertado)', 'Velocidade': '~14 tok/s (queda de qualidade)' },
          { 'Modelo': 'Qwen 14B Q4_K_M', 'Configuração': 'Offload parcial para CPU', 'Velocidade': '~8 tok/s' },
          { 'Modelo': 'Llama 3 70B Q2_K', 'Configuração': 'Intensivo em CPU', 'Velocidade': '~1 tok/s (lento)' },
        ],
      },
      body2: {
        title: 'Quando atualizar ou ficar',
        content: [
          '<strong>Esse equipamento executa modelos 7B–8B a 20+ tok/s — suficiente para chat geral, scripts Python, ferramentas TypeScript e revisão de código de arquivo único.</strong> Se isso descreve sua carga de trabalho, não há razão urgente para atualizar.',
          'Se você precisar de modelos de programação 14B sem penalidade de qualidade ou velocidade, a GPU é o alvo de atualização — não a CPU. Uma RTX 3060 12 GB usada (tipicamente $200–$300) ou RTX 4070 base (12 GB) desbloqueia o Qwen 3 Coder 14B em Q4 com throughput total. A 5800X3D é a melhor atualização de CPU AM4, mas sua vantagem de 3D V-Cache é específica para jogos e cargas de trabalho científicas vinculadas à CPU — a inferência de LLM é limitada pela largura de banda de memória da GPU e o 5700X não é o gargalo aqui.',
          'Para o guia completo de seleção de GPU e como a largura de banda de memória se traduz em velocidade de inferência de LLM, consulte o <a href="/pt/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guia das melhores GPUs para LLMs locais</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre LLMs para AMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'Posso executar um modelo 14B na RTX 3070 Ti 8 GB?',
            a: 'Não em Q4_K_M — modelos 14B precisam de aproximadamente 10 GB de VRAM, o que excede o limite de 8 GB. Q3_K_M (~7 GB) cabe, mas a qualidade de saída cai notavelmente em tarefas de raciocínio e código. O offload parcial para CPU via llama.cpp é possível a ~8 tok/s.',
          },
          {
            q: 'Devo atualizar a GPU ou a CPU para melhor desempenho em LLMs?',
            a: 'A GPU. A velocidade de inferência de LLM é limitada pela largura de banda de memória da GPU; o 5700X não é o gargalo. Atualizar para uma GPU de 12 GB (RTX 3060 12 GB ou RTX 4070 base) desbloqueia a classe de modelos 14B com qualidade e velocidade Q4 completas.',
          },
          {
            q: 'A velocidade da RAM importa para o offload parcial para CPU?',
            a: 'Sim, como fator secundário. DDR4-3600 vs. DDR4-2133 oferece aproximadamente 15% mais throughput de offload para CPU nas camadas residentes em RAM. A GPU continua sendo a restrição principal para as camadas que cabem na VRAM.',
          },
          {
            q: 'A 5800X3D vale mais do que a 5700X para LLMs?',
            a: 'Não. O 3D V-Cache da 5800X3D beneficia jogos e certos workloads vinculados à CPU, mas a inferência de LLM é limitada pela largura de banda de memória da GPU. O 5700X não é o gargalo nesse equipamento — invista o orçamento de atualização em uma GPU de 12 GB.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-ar.png',
    title: 'أفضل نموذج لغة كبير لـ⁨AMD 5700X + RTX 3070 Ti⁩؟',
    seoTitle: '⁨LLMs⁩ على ⁨AMD 5700X + RTX 3070 Ti⁩ | ⁨PromptQuorum⁩',
    metaDescription: '⁨Llama 3 8B Q4⁩_⁨K⁩_⁨M⁩ و⁨Mistral Small Q5⁩_⁨K⁩_⁨M⁩ يعملان بـ⁨22⁩–⁨25⁩ رمز/ثانية على ⁨RTX 3070 Ti⁩ بـ~⁨6 GB VRAM⁩ لكل منهما. ⁨GPU⁩ هي هدف الترقية لا ⁨CPU⁩.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-20',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'أفضل نموذج لغة كبير لـAMD 5700X + RTX 3070 Ti؟',
        answer: 'مع RTX 3070 Ti (8 GB VRAM)، Llama 3 8B Q4_K_M وMistral Small Q5_K_M هما أفضل نماذج اللغة الكبيرة المحلية. كلاهما يستخدم ~6 GB VRAM ويعمل بـ~22–25 رمز/ثانية. AMD Ryzen 7 5700X يتولى التوكينيزيشن السريعة كبديل CPU.',
        bullets: [
          'Llama 3 8B Q4_K_M: ~6 GB VRAM، ~25 رمز/ثانية على RTX 3070 Ti',
          'Mistral Small Q5_K_M: ~6 GB VRAM، استدلال قوي لكل GB VRAM مستخدم',
          'RTX 3070 Ti تحتوي 8 GB VRAM — نماذج 13B في Q4 قد لا تتسع',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti تحتوي 8 GB GDDR6X VRAM — Llama 3 8B Q4_K_M وMistral Small Q5_K_M يعملان كاملاً في VRAM بـ~22–25 رمز/ثانية',
          'نماذج 14B في Q4_K_M تحتاج ~10 GB ولا تتسع؛ Q3_K_M (~7 GB) يتسع لكن الجودة تنخفض ملحوظاً',
          'تصميم 5700X بـ8 أنوية Zen 3 يجعل التفريغ الجزئي على CPU ممكناً للاستخدام العرضي لنماذج 14B بـ~8 رمز/ثانية',
          'هذا الجهاز يتعامل مع معظم مهام الدردشة وPython وTypeScript — GPU هو عنق الزجاجة لا CPU',
        ],
      },
      body1: {
        title: 'ما يعمل جيداً على هذا الجهاز',
        content: [
          'اعتباراً من مايو 2026، <strong>RTX 3070 Ti (8 GB GDDR6X، 608 GB/s عرض نطاق) تشغّل Llama 3 8B Q4_K_M وMistral Small Q5_K_M كاملاً في VRAM — حوالي 6 GB لكل منهما — بـ~22–25 رمز/ثانية.</strong> فئة النماذج 14B هي الحد الصارم: تحتاج ~10 GB في Q4، مما يتجاوز حد 8 GB.',
          'إذا كان نموذج 14B ضرورياً، هناك ثلاثة مسارات: Q3_K_M يخفض الاستخدام إلى ~7 GB ويتسع كاملاً في VRAM، لكنه يدهور جودة الإخراج في مهام الاستدلال والكود. التفريغ الجزئي على CPU عبر llama.cpp (توزيع الطبقات بين VRAM وRAM) ممكن بـ~8 رمز/ثانية — أنوية Zen 3 الثمانية في 5700X تتعامل مع هذا أفضل من CPU رباعية الأنوية. تشغيل نموذج 70B في Q2_K ممكن تقنياً بـ~1 رمز/ثانية، لكنه غير عملي للاستخدام التفاعلي.',
          'إذا كانت نماذج البرمجة 14B بجودة كاملة هي الهدف، راجع <a href="/ar/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">دليل أفضل نماذج اللغة الكبيرة للبرمجة لـ12 GB VRAM</a> لمسار ترقية العتاد.',
        ],
        columns: ['النموذج', 'التهيئة', 'السرعة'],
        rows: [
          { 'النموذج': 'Llama 3 8B Q4_K_M', 'التهيئة': 'VRAM كاملة', 'السرعة': '~25 رمز/ثانية' },
          { 'النموذج': 'Mistral Small Q5_K_M', 'التهيئة': 'VRAM كاملة', 'السرعة': '~22 رمز/ثانية' },
          { 'النموذج': 'Qwen 14B Q3_K_M', 'التهيئة': 'VRAM كاملة (ضيّق)', 'السرعة': '~14 رمز/ثانية (انخفاض جودة)' },
          { 'النموذج': 'Qwen 14B Q4_K_M', 'التهيئة': 'تفريغ جزئي على CPU', 'السرعة': '~8 رمز/ثانية' },
          { 'النموذج': 'Llama 3 70B Q2_K', 'التهيئة': 'مكثّف على CPU', 'السرعة': '~1 رمز/ثانية (بطيء)' },
        ],
      },
      body2: {
        title: 'متى تترقى أو تبقى',
        content: [
          '<strong>هذا الجهاز يشغّل نماذج 7B–8B بـ20+ رمز/ثانية — كافٍ للدردشة العامة وكتابة سكريبتات Python وأدوات TypeScript ومراجعة كود ملف واحد.</strong> إذا كان ذلك يصف حمل عملك، لا يوجد سبب عاجل للترقية.',
          'إذا احتجت لنماذج برمجة 14B دون عقوبة جودة أو سرعة، GPU هو هدف الترقية — لا CPU. RTX 3060 12 GB مستعملة (عادةً $200–$300) أو RTX 4070 الأساسية (12 GB) تتيح Qwen 3 Coder 14B في Q4 بأداء كامل. 5800X3D هي أفضل ترقية CPU لـAM4، لكن ميزة 3D V-Cache خاصة بالألعاب وأحمال العمل العلمية المحدودة بـCPU — استدلال نماذج اللغة الكبيرة محدود بعرض نطاق ذاكرة GPU و5700X ليس عنق الزجاجة هنا.',
          'للدليل الشامل لاختيار GPU وكيف يتحول عرض نطاق الذاكرة إلى سرعة استدلال نماذج اللغة الكبيرة، راجع <a href="/ar/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">دليل أفضل بطاقات GPU لنماذج اللغة الكبيرة المحلية</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول نماذج اللغة الكبيرة لـAMD 5700X + RTX 3070 Ti',
        faqs: [
          {
            q: 'هل يمكنني تشغيل نموذج 14B على RTX 3070 Ti 8 GB؟',
            a: 'لا في Q4_K_M — نماذج 14B تحتاج حوالي 10 GB VRAM، مما يتجاوز حد 8 GB. Q3_K_M (~7 GB) يتسع لكن جودة الإخراج تنخفض ملحوظاً في مهام الاستدلال والكود. التفريغ الجزئي على CPU عبر llama.cpp ممكن بـ~8 رمز/ثانية.',
          },
          {
            q: 'هل يجب ترقية GPU أم CPU لأداء أفضل في نماذج اللغة الكبيرة؟',
            a: 'GPU. سرعة استدلال نماذج اللغة الكبيرة محدودة بعرض نطاق ذاكرة GPU؛ 5700X ليس عنق الزجاجة. الترقية إلى GPU بـ12 GB (RTX 3060 12 GB أو RTX 4070 الأساسية) تتيح فئة النماذج 14B بجودة وسرعة Q4 كاملة.',
          },
          {
            q: 'هل سرعة RAM مهمة للتفريغ الجزئي على CPU؟',
            a: 'نعم، كعامل ثانوي. DDR4-3600 مقابل DDR4-2133 يوفر حوالي 15% إنتاجية تفريغ CPU إضافية للطبقات المقيمة في RAM. GPU تظل القيد الرئيسي للطبقات التي تتسع في VRAM.',
          },
          {
            q: 'هل 5800X3D تستحق على 5700X لنماذج اللغة الكبيرة؟',
            a: 'لا. 3D V-Cache لـ5800X3D يفيد الألعاب وبعض أحمال العمل المحدودة بـCPU، لكن استدلال نماذج اللغة الكبيرة محدود بعرض نطاق ذاكرة GPU. 5700X ليس عنق الزجاجة في هذا الجهاز — خصّص ميزانية الترقية لـGPU بـ12 GB.',
          },
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-models-amd-5700x-3070ti-overview-hero-ko.png',
    title: 'AMD 5700X + RTX 3070 Ti에 최적인 LLM은?',
    seoTitle: 'AMD 5700X + RTX 3070 Ti 최적 LLM | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M과 Mistral Small Q5_K_M은 RTX 3070 Ti에서 22~25 tok/s로 실행됩니다. 두 모델 모두 VRAM 약 6 GB를 사용합니다. LLM 성능 향상의 핵심은 GPU입니다.',
    publishDate: '2026-05-18',
    dateModified: '2026-06-12',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    targetKeywords: [
      'AMD 5700X RTX 3070 Ti LLM',
      'RTX 3070 Ti 로컬 LLM',
      '3070 Ti 8GB VRAM 추천 모델',
      '로컬 LLM VRAM 8GB',
    ],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: 'AMD 5700X + RTX 3070 Ti에 최적인 LLM은?',
        answer: 'RTX 3070 Ti(8 GB VRAM)에서는 Llama 3 8B Q4_K_M과 Mistral Small Q5_K_M이 최선의 로컬 LLM입니다. 두 모델 모두 VRAM 약 6 GB를 사용하며 약 22~25 tok/s로 실행됩니다. AMD Ryzen 7 5700X는 CPU 폴백으로서 빠른 토크나이제이션을 담당합니다.',
        bullets: [
          'Llama 3 8B Q4_K_M: VRAM 약 6 GB, RTX 3070 Ti에서 약 25 tok/s',
          'Mistral Small Q5_K_M: VRAM 약 6 GB, VRAM 대비 우수한 추론 성능',
          'RTX 3070 Ti는 VRAM 8 GB — Q4 양자화 13B 모델은 용량 초과 가능',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'RTX 3070 Ti는 VRAM 8 GB GDDR6X — Llama 3 8B Q4_K_M과 Mistral Small Q5_K_M이 VRAM에서 완전히 실행되며 약 22~25 tok/s를 달성합니다.',
          'Q4_K_M 양자화의 14B 모델은 약 10 GB가 필요하므로 적재 불가; Q3_K_M(약 7 GB)은 적재되지만 품질이 눈에 띄게 저하됩니다.',
          '5700X의 8코어 Zen 3 설계 덕분에 14B 모델을 가끔 사용할 때 CPU 부분 오프로드로 약 8 tok/s가 가능합니다.',
          '이 구성은 일반 채팅, Python 스크립팅, TypeScript 툴링 작업에 충분합니다 — 병목은 CPU가 아닌 GPU입니다.',
        ],
      },
      body1: {
        title: '이 구성에서 잘 작동하는 모델',
        content: [
          '2026년 5월 기준, <strong>RTX 3070 Ti(8 GB GDDR6X, 608 GB/s 대역폭)는 Llama 3 8B Q4_K_M과 Mistral Small Q5_K_M을 VRAM에서 완전히 실행합니다 — 각각 약 6 GB를 사용하며 약 22~25 tok/s를 달성합니다.</strong> 14B 모델 클래스가 절대적인 한계입니다: Q4 양자화에서 약 10 GB가 필요하여 8 GB 한도를 초과합니다.',
          '14B 모델이 필요한 경우 세 가지 방법이 있습니다: Q3_K_M으로 사용량을 약 7 GB로 낮추면 VRAM에 완전히 적재되지만 추론 및 코드 작업에서 출력 품질이 저하됩니다. llama.cpp를 통한 부분 CPU 오프로드(VRAM과 RAM에 레이어 분산)는 약 8 tok/s로 실행 가능합니다 — 5700X의 8개 Zen 3 코어는 4코어 CPU보다 이를 더 잘 처리합니다. 70B 모델을 Q2_K로 실행하는 것은 기술적으로 약 1 tok/s로 가능하지만 대화형 사용에는 실용적이지 않습니다.',
          '전체 품질의 14B 코딩 모델이 목표라면 하드웨어 업그레이드 경로에 대해 <a href="/ko/prompt-bites/best-local-llm-coding-12gb-vram" class="text-primary hover:underline">12 GB VRAM 최적 코딩 LLM 가이드</a>를 참조하십시오.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'RTX 3070 Ti(8 GB VRAM)에서 Llama 3 8B Q4_K_M은 약 6 GB를 사용하며 약 25 tok/s의 추론 속도를 제공합니다.' },
          { type: 'plain-terms', text: 'VRAM 8 GB가 있으면 8B 모델이 완전히 적재됩니다. 14B 모델은 약 10 GB가 필요하므로 부분 오프로드나 Q3 양자화가 필요합니다.' },
        ],
        columns: ['모델', '설정', '속도'],
        rows: [
          { '모델': 'Llama 3 8B Q4_K_M', '설정': 'VRAM 전체 사용', '속도': '약 25 tok/s' },
          { '모델': 'Mistral Small Q5_K_M', '설정': 'VRAM 전체 사용', '속도': '약 22 tok/s' },
          { '모델': 'Qwen 14B Q3_K_M', '설정': 'VRAM 전체 사용(여유 없음)', '속도': '약 14 tok/s (품질 저하)' },
          { '모델': 'Qwen 14B Q4_K_M', '설정': 'CPU 부분 오프로드', '속도': '약 8 tok/s' },
          { '모델': 'Llama 3 70B Q2_K', '설정': 'CPU 집중', '속도': '약 1 tok/s (매우 느림)' },
        ],
      },
      body2: {
        title: '업그레이드 시점과 현재 유지 판단',
        content: [
          '<strong>이 구성은 7B~8B 모델을 20+ tok/s로 실행합니다 — 일반 채팅, Python 스크립팅, TypeScript 툴링, 단일 파일 코드 리뷰에 충분합니다.</strong> 이것이 귀하의 작업 부하에 해당한다면 업그레이드할 긴급한 이유가 없습니다.',
          '품질이나 속도 저하 없이 14B 코딩 모델이 필요하다면 업그레이드 대상은 GPU입니다 — CPU가 아닙니다. 중고 RTX 3060 12 GB(일반적으로 약 30~40만 원) 또는 RTX 4070 기본형(12 GB)으로 업그레이드하면 Qwen 3 Coder 14B를 Q4 전체 처리량으로 실행할 수 있습니다. 5800X3D는 최고의 AM4 CPU 업그레이드이지만, 3D V-Cache 이점은 게임 및 CPU에 제한된 과학 작업에 특화되어 있습니다 — LLM 추론은 GPU 메모리 대역폭에 의해 제한되며 5700X는 이 구성에서 병목이 아닙니다.',
          '전체 GPU 선택 가이드와 메모리 대역폭이 LLM 추론 속도에 어떻게 작용하는지는 <a href="/ko/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">로컬 LLM 최적 GPU 가이드</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'AMD 5700X + RTX 3070 Ti LLM에 관한 빠른 답변',
        faqs: [
          {
            q: 'RTX 3070 Ti 8 GB에서 14B 모델을 실행할 수 있습니까?',
            a: 'Q4_K_M에서는 불가능합니다 — 14B 모델은 약 10 GB가 필요하여 8 GB 한도를 초과합니다. Q3_K_M(약 7 GB)은 적재되지만 추론 및 코드 작업에서 출력 품질이 눈에 띄게 저하됩니다. llama.cpp를 통한 CPU 부분 오프로드는 약 8 tok/s로 가능합니다.',
          },
          {
            q: 'LLM 성능 향상을 위해 GPU와 CPU 중 어느 것을 업그레이드해야 합니까?',
            a: 'GPU입니다. LLM 추론 속도는 GPU 메모리 대역폭에 의해 제한됩니다; 5700X는 병목이 아닙니다. 12 GB GPU(RTX 3060 12 GB 또는 RTX 4070 기본형)로 업그레이드하면 전체 Q4 품질과 속도로 14B 모델 계열을 사용할 수 있습니다.',
          },
          {
            q: 'CPU 부분 오프로드에서 RAM 속도가 중요합니까?',
            a: '예, 부차적인 요소로서 중요합니다. DDR4-3600 대 DDR4-2133은 RAM에 상주하는 레이어의 CPU 오프로드 처리량을 약 15% 향상시킵니다. GPU는 VRAM에 맞는 레이어에 대한 주요 제약으로 남아 있습니다.',
          },
          {
            q: 'LLM을 위해 5800X3D가 5700X보다 가치 있습니까?',
            a: '아닙니다. 5800X3D의 3D V-Cache는 게임과 특정 CPU에 제한된 작업에는 도움이 되지만, LLM 추론은 GPU 메모리 대역폭에 의해 제한됩니다. 5700X는 이 구성에서 병목이 아닙니다 — 업그레이드 예산을 12 GB GPU에 투자하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[12 GB VRAM 최적 코딩 LLM](/ko/prompt-bites/best-local-llm-coding-12gb-vram)',
          '[로컬 LLM 최적 GPU 가이드](/ko/local-llms/best-gpus-for-local-llms)',
          '[로컬 LLM에 필요한 VRAM 용량](/ko/local-llms/how-much-vram-local-llm)',
        ],
      },
    },
  },
}
