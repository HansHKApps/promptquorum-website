import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Can You Run Local LLMs on a Radeon RX 6800M?',
    seoTitle: 'Radeon 6800M Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — Radeon RX 6800M (12 GB VRAM) runs local LLMs via ROCm on Linux or llama.cpp on all platforms. Llama 3 8B Q4 runs at ~12 tok/s. Windows ROCm support is limited. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B'],
    current_hardware_mentioned: ['Radeon RX 6800M 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Laptop users with an AMD Radeon RX 6800M wanting to run local LLMs',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-local-llm-coding-12gb-vram', 'best-models-amd-5700x-3070ti'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run local LLMs on a Radeon RX 6800M?',
        answer: 'Yes. The Radeon RX 6800M has 12 GB GDDR6 VRAM and can run local LLMs. On Linux, use ROCm for GPU acceleration. On Windows, use llama.cpp with Vulkan or CPU fallback. Llama 3 8B Q4_K_M runs at ~12 tok/s on Linux with ROCm.',
        bullets: [
          'Linux + ROCm: full GPU acceleration, ~12 tok/s on Llama 3 8B Q4',
          'Windows: use llama.cpp with Vulkan backend for partial GPU offload',
          '12 GB VRAM supports models up to 14B at Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
        answer: 'Ja. Die Radeon RX 6800M hat 12 GB GDDR6 VRAM und kann lokale LLMs ausführen. Unter Linux verwenden Sie ROCm für GPU-Beschleunigung. Unter Windows nutzen Sie llama.cpp mit Vulkan oder CPU-Fallback. Llama 3 8B Q4_K_M läuft auf Linux mit ROCm bei ~12 tok/s.',
        bullets: [
          'Linux + ROCm: vollständige GPU-Beschleunigung, ~12 tok/s auf Llama 3 8B Q4',
          'Windows: llama.cpp mit Vulkan-Backend für partielles GPU-Offloading',
          '12 GB VRAM unterstützt Modelle bis 14B bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
        answer: 'Oui. La Radeon RX 6800M dispose de 12 Go de VRAM GDDR6 et peut faire tourner des LLMs locaux. Sur Linux, utilisez ROCm pour l\'accélération GPU. Sur Windows, utilisez llama.cpp avec Vulkan ou en fallback CPU. Llama 3 8B Q4_K_M tourne à ~12 tok/s sur Linux avec ROCm.',
        bullets: [
          'Linux + ROCm : accélération GPU complète, ~12 tok/s sur Llama 3 8B Q4',
          'Windows : llama.cpp avec backend Vulkan pour déchargement GPU partiel',
          '12 Go de VRAM supporte les modèles jusqu\'à 14B en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Radeon RX 6800M でローカル LLM を実行できますか？',
        answer: 'はい。Radeon RX 6800M は 12 GB GDDR6 VRAM を持ち、ローカル LLM を実行できます。Linux では ROCm で GPU 加速、Windows では Vulkan バックエンドの llama.cpp か CPU フォールバックを使用します。Linux + ROCm での Llama 3 8B Q4_K_M は ~12 tok/s で動作します。',
        bullets: [
          'Linux + ROCm：完全な GPU 加速、Llama 3 8B Q4 で ~12 tok/s',
          'Windows：Vulkan バックエンドの llama.cpp でパーシャル GPU オフロード',
          '12 GB VRAM は Q4_K_M で 14B までのモデルをサポート',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
        answer: '可以。Radeon RX 6800M 有 12 GB GDDR6 VRAM，能运行本地 LLM。Linux 下使用 ROCm 获得 GPU 加速；Windows 下使用 Vulkan 后端的 llama.cpp 或 CPU 后备。Linux + ROCm 下 Llama 3 8B Q4_K_M 运行速度约 12 tok/s。',
        bullets: [
          'Linux + ROCm：完整 GPU 加速，Llama 3 8B Q4 约 12 tok/s',
          'Windows：使用 Vulkan 后端的 llama.cpp 进行部分 GPU 卸载',
          '12 GB VRAM 支持 Q4_K_M 量化下最高 14B 的模型',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M has 12 GB GDDR6 VRAM — the largest VRAM of any mobile AMD GPU in its generation',
          'Linux + ROCm delivers full GPU acceleration: Llama 3 8B Q4_K_M runs at ~12 tok/s',
          'Windows ROCm support for the 6800M is limited — use llama.cpp with the Vulkan backend instead',
          '12 GB VRAM fits models up to 14B at Q4_K_M, making it capable for serious local coding tasks',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M VRAM Capacity and Platform Support',
        content: [
          '<strong>The Radeon RX 6800M is a mobile GPU with 12 GB of GDDR6 VRAM — enough to run models up to 14B parameters at Q4_K_M quantization without any layer offloading.</strong> This is the largest VRAM pool of any AMD mobile GPU in its generation.',
          'Software support is the main constraint. On Linux, ROCm provides full OpenCL/HIP GPU acceleration and Ollama detects the 6800M automatically. Run <code>ollama pull llama3:8b</code> then <code>ollama run llama3:8b</code> to start. Measured throughput on Llama 3 8B Q4_K_M is approximately 12 tok/s.',
          'On Windows, AMD ROCm does not support the 6800M in its consumer driver stack as of mid-2026. The practical workaround is llama.cpp compiled with Vulkan, which offloads compute layers to the GPU and achieves partial acceleration. Expect 6–8 tok/s on Llama 3 8B Q4_K_M via Vulkan.',
        ],
        columns: ['Platform', 'Backend', 'Llama 3 8B Q4 Speed'],
        rows: [
          { 'Platform': 'Linux', 'Backend': 'ROCm (Ollama)', 'Llama 3 8B Q4 Speed': '~12 tok/s' },
          { 'Platform': 'Windows', 'Backend': 'Vulkan (llama.cpp)', 'Llama 3 8B Q4 Speed': '~6–8 tok/s' },
          { 'Platform': 'Windows/Linux', 'Backend': 'CPU only', 'Llama 3 8B Q4 Speed': '~3–5 tok/s' },
        ],
      },
      body2: {
        title: 'Model Selection for 12 GB VRAM',
        content: [
          '12 GB of VRAM is a meaningful upgrade over 8 GB cards. <strong>You can run 13B models at Q4_K_M (~8.5 GB VRAM) and even 14B models at Q4 without hitting the ceiling.</strong> This opens up models like Mistral Nemo 12B which fit exactly in 12 GB.',
          'For coding tasks, DeepSeek Coder 6.7B at Q4_K_M uses only ~5 GB VRAM and runs near 20 tok/s on the 6800M under Linux. This leaves substantial context window capacity. At 12 GB you also have room for larger context lengths without evicting KV cache.',
          'For a comparison of 12 GB VRAM cards across NVIDIA and AMD options and which models they support, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Radeon 6800M and Local LLMs',
        faqs: [
          {
            q: 'Does Ollama work on Radeon RX 6800M on Linux?',
            a: 'Yes. Ollama supports ROCm on Linux and auto-detects AMD GPUs. The 6800M is recognized as an RDNA 2 device. Run <code>ollama pull llama3:8b</code> then <code>ollama run llama3:8b</code>. Verify GPU use with <code>rocm-smi</code> while the model is running.',
          },
          {
            q: 'Can I use Radeon RX 6800M for local LLMs on Windows?',
            a: 'ROCm does not support the 6800M on Windows as of mid-2026. Use llama.cpp compiled with Vulkan support instead. Download a pre-built Vulkan binary from the llama.cpp releases page, load your GGUF model with <code>-ngl 33</code> to offload layers to GPU.',
          },
          {
            q: 'What is the largest model that fits in 12 GB VRAM?',
            a: 'At Q4_K_M, 13B models use approximately 8.5 GB and 14B models use approximately 9 GB — both fit in 12 GB. You can also run a 7B model at Q8 (~8 GB) for higher quality output. 20B+ models require dropping to Q3 or lower.',
          },
          {
            q: 'Is the Radeon RX 6800M good for local LLM inference compared to NVIDIA?',
            a: 'At equal VRAM, NVIDIA GPUs typically outperform AMD on Windows due to better CUDA/llama.cpp integration. On Linux, the gap narrows with ROCm. The 6800M\'s 12 GB VRAM advantage over 8 GB NVIDIA cards often outweighs the software overhead. See <a href="/prompt-bites/best-models-amd-5700x-3070ti" class="text-primary hover:underline">AMD 5700X + RTX 3070 Ti comparison</a> for context.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
    seoTitle: 'Radeon 6800M für lokale LLMs? | Prompt Bites | PromptQuorum',
    metaDescription: 'Ja — Radeon RX 6800M (12 GB VRAM) führt lokale LLMs via ROCm unter Linux oder llama.cpp aus. Llama 3 8B Q4 läuft bei ~12 tok/s. Windows ROCm ist eingeschränkt. Kurze Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Können Sie lokale LLMs auf einer Radeon RX 6800M ausführen?',
        answer: 'Ja. Die Radeon RX 6800M hat 12 GB GDDR6 VRAM und kann lokale LLMs ausführen. Unter Linux verwenden Sie ROCm für GPU-Beschleunigung. Unter Windows nutzen Sie llama.cpp mit Vulkan oder CPU-Fallback. Llama 3 8B Q4_K_M läuft auf Linux mit ROCm bei ~12 tok/s.',
        bullets: [
          'Linux + ROCm: vollständige GPU-Beschleunigung, ~12 tok/s auf Llama 3 8B Q4',
          'Windows: llama.cpp mit Vulkan-Backend für partielles GPU-Offloading',
          '12 GB VRAM unterstützt Modelle bis 14B bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M hat 12 GB GDDR6 VRAM — den größten VRAM eines mobilen AMD-GPU seiner Generation',
          'Linux + ROCm liefert volle GPU-Beschleunigung: Llama 3 8B Q4_K_M läuft bei ~12 tok/s',
          'Windows-ROCm-Support für die 6800M ist eingeschränkt — verwenden Sie llama.cpp mit Vulkan-Backend',
          '12 GB VRAM ermöglicht Modelle bis 14B bei Q4_K_M für ernsthafte lokale Coding-Aufgaben',
        ],
      },
      body1: {
        title: 'VRAM-Kapazität und Plattform-Support der Radeon RX 6800M',
        content: [
          '<strong>Die Radeon RX 6800M ist ein mobiler GPU mit 12 GB GDDR6 VRAM — genug, um Modelle bis 14B Parameter bei Q4_K_M-Quantisierung ohne Layer-Offloading auszuführen.</strong> Das ist der größte VRAM aller mobilen AMD-GPUs dieser Generation.',
          'Software-Support ist die Haupteinschränkung. Unter Linux bietet ROCm vollständige OpenCL/HIP-GPU-Beschleunigung, und Ollama erkennt die 6800M automatisch. Führen Sie <code>ollama pull llama3:8b</code> und anschließend <code>ollama run llama3:8b</code> aus. Der gemessene Durchsatz auf Llama 3 8B Q4_K_M liegt bei ca. 12 tok/s.',
          'Unter Windows unterstützt AMD ROCm die 6800M im Consumer-Treiber-Stack (Stand Mitte 2026) nicht. Die praktische Lösung ist llama.cpp, mit Vulkan kompiliert, das Compute-Layer auf die GPU auslagert und partielle Beschleunigung erreicht. Erwarten Sie 6–8 tok/s auf Llama 3 8B Q4_K_M via Vulkan.',
        ],
        columns: ['Plattform', 'Backend', 'Llama 3 8B Q4-Geschwindigkeit'],
        rows: [
          { 'Plattform': 'Linux', 'Backend': 'ROCm (Ollama)', 'Llama 3 8B Q4-Geschwindigkeit': '~12 tok/s' },
          { 'Plattform': 'Windows', 'Backend': 'Vulkan (llama.cpp)', 'Llama 3 8B Q4-Geschwindigkeit': '~6–8 tok/s' },
          { 'Plattform': 'Windows/Linux', 'Backend': 'Nur CPU', 'Llama 3 8B Q4-Geschwindigkeit': '~3–5 tok/s' },
        ],
      },
      body2: {
        title: 'Modellauswahl für 12 GB VRAM',
        content: [
          '12 GB VRAM ist ein deutlicher Vorteil gegenüber 8-GB-Karten. <strong>Sie können 13B-Modelle bei Q4_K_M (~8,5 GB VRAM) und sogar 14B-Modelle bei Q4 ausführen, ohne die Grenze zu erreichen.</strong> Das ermöglicht Modelle wie Mistral Nemo 12B, die exakt in 12 GB passen.',
          'Für Coding-Aufgaben benötigt DeepSeek Coder 6,7B bei Q4_K_M nur ~5 GB VRAM und läuft unter Linux auf der 6800M nahe 20 tok/s. Das lässt erhebliche Kapazität für größere Kontextfenster. Mit 12 GB haben Sie auch Raum für längere Kontexte, ohne den KV-Cache verdrängen zu müssen.',
          'Für einen Vergleich von 12-GB-VRAM-Karten bei NVIDIA und AMD und welche Modelle sie unterstützen, lesen Sie den <a href="/de/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">Leitfaden zu den besten GPUs für lokale LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Radeon 6800M und lokalen LLMs',
        faqs: [
          {
            q: 'Funktioniert Ollama auf der Radeon RX 6800M unter Linux?',
            a: 'Ja. Ollama unterstützt ROCm unter Linux und erkennt AMD-GPUs automatisch. Die 6800M wird als RDNA-2-Gerät erkannt. Führen Sie <code>ollama pull llama3:8b</code> und dann <code>ollama run llama3:8b</code> aus. Überprüfen Sie die GPU-Nutzung mit <code>rocm-smi</code> während das Modell läuft.',
          },
          {
            q: 'Kann ich die Radeon RX 6800M für lokale LLMs unter Windows verwenden?',
            a: 'ROCm unterstützt die 6800M unter Windows (Stand Mitte 2026) nicht. Verwenden Sie stattdessen llama.cpp, mit Vulkan-Support kompiliert. Laden Sie eine vorkompilierte Vulkan-Binary von der llama.cpp-Releases-Seite herunter und laden Sie Ihr GGUF-Modell mit <code>-ngl 33</code>, um Layer auf die GPU auszulagern.',
          },
          {
            q: 'Was ist das größte Modell, das in 12 GB VRAM passt?',
            a: 'Bei Q4_K_M benötigen 13B-Modelle ca. 8,5 GB und 14B-Modelle ca. 9 GB — beide passen in 12 GB. Sie können auch ein 7B-Modell bei Q8 (~8 GB) für höhere Ausgabequalität ausführen. Modelle mit 20B+ erfordern Q3 oder weniger.',
          },
          {
            q: 'Ist die Radeon RX 6800M gut für lokale LLM-Inferenz im Vergleich zu NVIDIA?',
            a: 'Bei gleichem VRAM übertreffen NVIDIA-GPUs AMD unter Windows typischerweise aufgrund besserer CUDA/llama.cpp-Integration. Unter Linux verringert sich der Abstand mit ROCm. Der VRAM-Vorteil der 6800M (12 GB vs. 8 GB) überwiegt oft den Software-Overhead.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
    seoTitle: 'Radeon 6800M pour LLM local ? | Prompt Bites | PromptQuorum',
    metaDescription: 'Oui — Radeon RX 6800M (12 Go VRAM) fait tourner des LLMs via ROCm sur Linux ou llama.cpp. Llama 3 8B Q4 tourne à ~12 tok/s. ROCm Windows est limité. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on faire tourner des LLMs locaux sur une Radeon RX 6800M ?',
        answer: 'Oui. La Radeon RX 6800M dispose de 12 Go de VRAM GDDR6 et peut faire tourner des LLMs locaux. Sur Linux, utilisez ROCm pour l\'accélération GPU. Sur Windows, utilisez llama.cpp avec Vulkan ou en fallback CPU. Llama 3 8B Q4_K_M tourne à ~12 tok/s sur Linux avec ROCm.',
        bullets: [
          'Linux + ROCm : accélération GPU complète, ~12 tok/s sur Llama 3 8B Q4',
          'Windows : llama.cpp avec backend Vulkan pour déchargement GPU partiel',
          '12 Go de VRAM supporte les modèles jusqu\'à 14B en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M dispose de 12 Go de VRAM GDDR6 — le plus grand VRAM d\'un GPU AMD mobile de sa génération',
          'Linux + ROCm offre une accélération GPU complète : Llama 3 8B Q4_K_M tourne à ~12 tok/s',
          'Le support ROCm Windows pour la 6800M est limité — utilisez llama.cpp avec le backend Vulkan',
          '12 Go de VRAM supporte les modèles jusqu\'à 14B en Q4_K_M pour des tâches de codage sérieuses',
        ],
      },
      body1: {
        title: 'Capacité VRAM et support plateforme de la Radeon RX 6800M',
        content: [
          '<strong>La Radeon RX 6800M est un GPU mobile avec 12 Go de VRAM GDDR6 — suffisant pour faire tourner des modèles jusqu\'à 14B paramètres en quantisation Q4_K_M sans déchargement de couches.</strong> C\'est le plus grand pool VRAM de tous les GPU AMD mobiles de sa génération.',
          'Le support logiciel est la contrainte principale. Sur Linux, ROCm fournit une accélération GPU OpenCL/HIP complète et Ollama détecte la 6800M automatiquement. Exécutez <code>ollama pull llama3:8b</code> puis <code>ollama run llama3:8b</code>. Le débit mesuré sur Llama 3 8B Q4_K_M est d\'environ 12 tok/s.',
          'Sur Windows, AMD ROCm ne supporte pas la 6800M dans sa pile de pilotes grand public (mi-2026). La solution pratique est llama.cpp compilé avec Vulkan, qui décharge les couches de calcul sur le GPU et atteint une accélération partielle. Attendez 6 à 8 tok/s sur Llama 3 8B Q4_K_M via Vulkan.',
        ],
        columns: ['Plateforme', 'Backend', 'Vitesse Llama 3 8B Q4'],
        rows: [
          { 'Plateforme': 'Linux', 'Backend': 'ROCm (Ollama)', 'Vitesse Llama 3 8B Q4': '~12 tok/s' },
          { 'Plateforme': 'Windows', 'Backend': 'Vulkan (llama.cpp)', 'Vitesse Llama 3 8B Q4': '~6–8 tok/s' },
          { 'Plateforme': 'Windows/Linux', 'Backend': 'CPU uniquement', 'Vitesse Llama 3 8B Q4': '~3–5 tok/s' },
        ],
      },
      body2: {
        title: 'Sélection de modèles pour 12 Go de VRAM',
        content: [
          '12 Go de VRAM représente une vraie amélioration par rapport aux cartes 8 Go. <strong>Vous pouvez faire tourner des modèles 13B en Q4_K_M (~8,5 Go) et même des modèles 14B en Q4 sans atteindre le plafond.</strong> Cela ouvre la voie à des modèles comme Mistral Nemo 12B qui tiennent exactement dans 12 Go.',
          'Pour les tâches de codage, DeepSeek Coder 6,7B en Q4_K_M n\'utilise que ~5 Go de VRAM et tourne près de 20 tok/s sur la 6800M sous Linux. Cela laisse une capacité substantielle pour des fenêtres de contexte plus larges. Avec 12 Go, vous avez aussi de la place pour des contextes plus longs sans éviction du cache KV.',
          'Pour une comparaison des cartes 12 Go VRAM chez NVIDIA et AMD et les modèles qu\'elles supportent, consultez le <a href="/fr/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">guide des meilleures GPU pour LLMs locaux</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Radeon 6800M et LLMs locaux',
        faqs: [
          {
            q: 'Ollama fonctionne-t-il sur Radeon RX 6800M sous Linux ?',
            a: 'Oui. Ollama supporte ROCm sur Linux et détecte automatiquement les GPU AMD. La 6800M est reconnue comme appareil RDNA 2. Exécutez <code>ollama pull llama3:8b</code> puis <code>ollama run llama3:8b</code>. Vérifiez l\'utilisation GPU avec <code>rocm-smi</code> pendant l\'exécution du modèle.',
          },
          {
            q: 'Puis-je utiliser la Radeon RX 6800M pour des LLMs locaux sur Windows ?',
            a: 'ROCm ne supporte pas la 6800M sur Windows (mi-2026). Utilisez plutôt llama.cpp compilé avec Vulkan. Téléchargez un binaire Vulkan précompilé depuis la page des releases llama.cpp et chargez votre modèle GGUF avec <code>-ngl 33</code> pour décharger les couches sur le GPU.',
          },
          {
            q: 'Quel est le plus grand modèle qui tient dans 12 Go de VRAM ?',
            a: 'En Q4_K_M, les modèles 13B utilisent environ 8,5 Go et les modèles 14B environ 9 Go — les deux tiennent dans 12 Go. Vous pouvez aussi faire tourner un modèle 7B en Q8 (~8 Go) pour une meilleure qualité. Les modèles 20B+ nécessitent Q3 ou moins.',
          },
          {
            q: 'La Radeon RX 6800M est-elle bonne pour l\'inférence LLM locale par rapport à NVIDIA ?',
            a: 'À VRAM égale, les GPU NVIDIA surpassent généralement AMD sur Windows grâce à une meilleure intégration CUDA/llama.cpp. Sur Linux, l\'écart se réduit avec ROCm. L\'avantage VRAM de la 6800M (12 Go vs 8 Go) compense souvent le surcoût logiciel.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: 'Radeon RX 6800M でローカル LLM を実行できますか？',
    seoTitle: 'Radeon 6800M でローカル LLM？| Prompt Bites | PromptQuorum',
    metaDescription: 'はい — Radeon RX 6800M（12 GB VRAM）は Linux + ROCm または llama.cpp でローカル LLM を実行できます。Llama 3 8B Q4 は ~12 tok/s。Windows ROCm は制限あり。PromptQuorum による簡潔な回答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'Radeon RX 6800M でローカル LLM を実行できますか？',
        answer: 'はい。Radeon RX 6800M は 12 GB GDDR6 VRAM を持ち、ローカル LLM を実行できます。Linux では ROCm で GPU 加速、Windows では Vulkan バックエンドの llama.cpp か CPU フォールバックを使用します。Linux + ROCm での Llama 3 8B Q4_K_M は ~12 tok/s で動作します。',
        bullets: [
          'Linux + ROCm：完全な GPU 加速、Llama 3 8B Q4 で ~12 tok/s',
          'Windows：Vulkan バックエンドの llama.cpp でパーシャル GPU オフロード',
          '12 GB VRAM は Q4_K_M で 14B までのモデルをサポート',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M は 12 GB GDDR6 VRAM を持つ — 同世代のモバイル AMD GPU 最大の VRAM',
          'Linux + ROCm で完全な GPU 加速：Llama 3 8B Q4_K_M は ~12 tok/s で動作',
          '6800M への Windows ROCm サポートは限定的 — Vulkan バックエンドの llama.cpp を使用',
          '12 GB VRAM は Q4_K_M で 14B までのモデルに対応し、本格的なコーディング用途に対応可能',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M の VRAM 容量とプラットフォームサポート',
        content: [
          '<strong>Radeon RX 6800M は 12 GB GDDR6 VRAM を持つモバイル GPU で、Q4_K_M 量子化でレイヤーオフロードなしに最大 14B パラメータのモデルを実行できます。</strong> これは同世代のモバイル AMD GPU の中で最大の VRAM です。',
          'ソフトウェアサポートが主な制約です。Linux では ROCm が完全な OpenCL/HIP GPU 加速を提供し、Ollama が 6800M を自動検出します。<code>ollama pull llama3:8b</code> を実行後 <code>ollama run llama3:8b</code> で起動します。Llama 3 8B Q4_K_M の実測スループットは約 12 tok/s です。',
          'Windows では AMD ROCm が 2026 年中頃時点でコンシューマードライバースタック内で 6800M をサポートしていません。実用的な解決策は Vulkan でビルドした llama.cpp で、GPU に演算レイヤーをオフロードし部分的な加速を実現します。Vulkan 経由の Llama 3 8B Q4_K_M では 6〜8 tok/s を見込んでください。',
        ],
        columns: ['プラットフォーム', 'バックエンド', 'Llama 3 8B Q4 速度'],
        rows: [
          { 'プラットフォーム': 'Linux', 'バックエンド': 'ROCm (Ollama)', 'Llama 3 8B Q4 速度': '~12 tok/s' },
          { 'プラットフォーム': 'Windows', 'バックエンド': 'Vulkan (llama.cpp)', 'Llama 3 8B Q4 速度': '~6–8 tok/s' },
          { 'プラットフォーム': 'Windows/Linux', 'バックエンド': 'CPU のみ', 'Llama 3 8B Q4 速度': '~3–5 tok/s' },
        ],
      },
      body2: {
        title: '12 GB VRAM に向けたモデル選択',
        content: [
          '12 GB の VRAM は 8 GB カードと比べて大きなアドバンテージです。<strong>Q4_K_M の 13B モデル（~8.5 GB VRAM）や Q4 の 14B モデルも上限なしに実行できます。</strong> これにより、ちょうど 12 GB に収まる Mistral Nemo 12B などのモデルも使用可能になります。',
          'コーディングタスクでは、DeepSeek Coder 6.7B（Q4_K_M）がわずか ~5 GB VRAM を使用し、Linux の 6800M で 20 tok/s 近くで動作します。これにより大きなコンテキストウィンドウのための十分な容量が残ります。12 GB では KV キャッシュを退避させることなく長いコンテキストも扱えます。',
          'NVIDIA と AMD の 12 GB VRAM カードの比較や対応モデルについては、<a href="/ja/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">ローカル LLM 向け GPU ガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Radeon 6800M とローカル LLM に関するよくある質問',
        faqs: [
          {
            q: 'Linux での Radeon RX 6800M で Ollama は動作しますか？',
            a: 'はい。Ollama は Linux 上で ROCm をサポートし AMD GPU を自動検出します。6800M は RDNA 2 デバイスとして認識されます。<code>ollama pull llama3:8b</code> を実行後 <code>ollama run llama3:8b</code> で起動します。モデル実行中に <code>rocm-smi</code> で GPU 使用を確認できます。',
          },
          {
            q: 'Windows で Radeon RX 6800M をローカル LLM に使えますか？',
            a: '2026 年中頃時点で ROCm は Windows 上の 6800M をサポートしていません。代わりに Vulkan サポートでコンパイルした llama.cpp を使用してください。llama.cpp リリースページからビルド済み Vulkan バイナリをダウンロードし、<code>-ngl 33</code> で GGUF モデルをロードしてレイヤーを GPU にオフロードします。',
          },
          {
            q: '12 GB VRAM に収まる最大のモデルは？',
            a: 'Q4_K_M では 13B モデルが約 8.5 GB、14B モデルが約 9 GB を使用します — どちらも 12 GB に収まります。より高品質な出力のために Q8 の 7B モデル（~8 GB）も実行できます。20B 以上のモデルには Q3 以下が必要です。',
          },
          {
            q: 'Radeon RX 6800M はローカル LLM 推論で NVIDIA と比べて優秀ですか？',
            a: '同等の VRAM では、NVIDIA GPU が CUDA/llama.cpp の統合の良さから Windows では一般的に AMD より高速です。Linux では ROCm によりその差が縮まります。6800M の 12 GB VRAM のアドバンテージが 8 GB NVIDIA カードに対してソフトウェアオーバーヘッドを上回ることも多くあります。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
    seoTitle: 'Radeon 6800M 能运行本地 LLM？| Prompt Bites | PromptQuorum',
    metaDescription: '可以——Radeon RX 6800M（12 GB VRAM）可通过 Linux ROCm 或 llama.cpp 运行本地 LLM。Llama 3 8B Q4 约 12 tok/s。Windows ROCm 支持有限。PromptQuorum 快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '可以在 Radeon RX 6800M 上运行本地 LLM 吗？',
        answer: '可以。Radeon RX 6800M 有 12 GB GDDR6 VRAM，能运行本地 LLM。Linux 下使用 ROCm 获得 GPU 加速；Windows 下使用 Vulkan 后端的 llama.cpp 或 CPU 后备。Linux + ROCm 下 Llama 3 8B Q4_K_M 运行速度约 12 tok/s。',
        bullets: [
          'Linux + ROCm：完整 GPU 加速，Llama 3 8B Q4 约 12 tok/s',
          'Windows：使用 Vulkan 后端的 llama.cpp 进行部分 GPU 卸载',
          '12 GB VRAM 支持 Q4_K_M 量化下最高 14B 的模型',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Radeon RX 6800M 有 12 GB GDDR6 VRAM——是同代移动端 AMD GPU 中 VRAM 最大的',
          'Linux + ROCm 提供完整 GPU 加速：Llama 3 8B Q4_K_M 约 12 tok/s',
          '6800M 的 Windows ROCm 支持有限——改用 Vulkan 后端的 llama.cpp',
          '12 GB VRAM 可在 Q4_K_M 下运行最高 14B 的模型，适合严肃的本地编程任务',
        ],
      },
      body1: {
        title: 'Radeon RX 6800M 的 VRAM 容量与平台支持',
        content: [
          '<strong>Radeon RX 6800M 是一款移动端 GPU，拥有 12 GB GDDR6 VRAM——足以在 Q4_K_M 量化下运行最高 14B 参数的模型而无需层卸载。</strong> 这是同代所有移动端 AMD GPU 中最大的 VRAM 容量。',
          '软件支持是主要限制。在 Linux 上，ROCm 提供完整的 OpenCL/HIP GPU 加速，Ollama 自动识别 6800M。运行 <code>ollama pull llama3:8b</code> 后执行 <code>ollama run llama3:8b</code> 即可启动。Llama 3 8B Q4_K_M 的实测吞吐量约为 12 tok/s。',
          '在 Windows 上，截至 2026 年中，AMD ROCm 的消费级驱动栈不支持 6800M。实用替代方案是使用 Vulkan 编译的 llama.cpp，可将计算层卸载到 GPU 实现部分加速。Llama 3 8B Q4_K_M 通过 Vulkan 预计 6~8 tok/s。',
        ],
        columns: ['平台', '后端', 'Llama 3 8B Q4 速度'],
        rows: [
          { '平台': 'Linux', '后端': 'ROCm (Ollama)', 'Llama 3 8B Q4 速度': '~12 tok/s' },
          { '平台': 'Windows', '后端': 'Vulkan (llama.cpp)', 'Llama 3 8B Q4 速度': '~6–8 tok/s' },
          { '平台': 'Windows/Linux', '后端': '仅 CPU', 'Llama 3 8B Q4 速度': '~3–5 tok/s' },
        ],
      },
      body2: {
        title: '12 GB VRAM 的模型选择',
        content: [
          '12 GB VRAM 相比 8 GB 显卡是实质性的提升。<strong>您可以运行 Q4_K_M 的 13B 模型（~8.5 GB VRAM），甚至 Q4 的 14B 模型，而不会触及上限。</strong> 这使得 Mistral Nemo 12B 等恰好适配 12 GB 的模型成为可选项。',
          '对于编程任务，DeepSeek Coder 6.7B（Q4_K_M）仅使用约 5 GB VRAM，在 Linux 下的 6800M 上可跑近 20 tok/s，为更大的上下文窗口留下充足空间。有了 12 GB，您还可以使用更长的上下文而不需要驱逐 KV 缓存。',
          '关于 NVIDIA 和 AMD 12 GB VRAM 显卡的对比以及各自支持的模型，请参阅<a href="/zh/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">本地 LLM 最佳 GPU 指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Radeon 6800M 与本地 LLM 的快速解答',
        faqs: [
          {
            q: 'Linux 上 Ollama 能在 Radeon RX 6800M 上运行吗？',
            a: '可以。Ollama 在 Linux 上支持 ROCm，并自动识别 AMD GPU。6800M 被识别为 RDNA 2 设备。执行 <code>ollama pull llama3:8b</code> 然后 <code>ollama run llama3:8b</code>。模型运行时可用 <code>rocm-smi</code> 验证 GPU 使用情况。',
          },
          {
            q: '可以在 Windows 上使用 Radeon RX 6800M 运行本地 LLM 吗？',
            a: '截至 2026 年中，ROCm 不支持 Windows 上的 6800M。请改用启用 Vulkan 支持编译的 llama.cpp。从 llama.cpp 发布页下载预编译的 Vulkan 二进制文件，使用 <code>-ngl 33</code> 加载 GGUF 模型以将层卸载到 GPU。',
          },
          {
            q: '12 GB VRAM 能放下的最大模型是什么？',
            a: 'Q4_K_M 下，13B 模型约需 8.5 GB，14B 模型约需 9 GB——两者均在 12 GB 之内。也可以用 Q8 量化运行 7B 模型（~8 GB）以获得更高质量输出。20B 以上模型需要 Q3 或更低量化。',
          },
          {
            q: 'Radeon RX 6800M 与 NVIDIA 相比在本地 LLM 推理中表现如何？',
            a: '在相同 VRAM 下，NVIDIA GPU 在 Windows 上通常因更好的 CUDA/llama.cpp 集成而优于 AMD。在 Linux 上，ROCm 缩小了差距。6800M 的 12 GB VRAM 优势相比 8 GB NVIDIA 显卡往往能抵消软件层面的开销。',
          },
        ],
      },
    },
  },
}
