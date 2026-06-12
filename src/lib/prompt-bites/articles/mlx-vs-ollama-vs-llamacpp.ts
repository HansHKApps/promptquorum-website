import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp: Which Inference Engine Should You Use?',
    seoTitle: 'MLX vs Ollama vs llama.cpp 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'On Apple Silicon, use MLX (~65 tok/s on M5 Pro). On NVIDIA GPUs, use Ollama for simplicity or llama.cpp for control. Ollama wraps llama.cpp. Quick answer.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple M5 Pro', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between MLX, Ollama, and llama.cpp for local inference',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'MLX vs Ollama vs llama.cpp: which inference engine should you use?',
        answer: 'On Apple Silicon, use MLX — it runs ~65 tok/s versus ~35 tok/s for Ollama on an M5 Pro with an 8B model. On NVIDIA GPUs, use Ollama for simplicity or llama.cpp for maximum control. Ollama uses llama.cpp under the hood and adds an API layer on top.',
        bullets: [
          'MLX: Apple Silicon only, fastest native inference, Python-based',
          'Ollama: any platform, OpenAI-compatible API, easiest setup',
          'llama.cpp: any hardware, maximum control, requires compiling',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'MLX vs Ollama vs llama.cpp: Welche Inferenz-Engine sollten Sie verwenden?',
        answer: 'Auf Apple Silicon verwenden Sie MLX — es liefert ~65 tok/s im Vergleich zu ~35 tok/s für Ollama auf einem M5 Pro mit einem 8B-Modell. Auf NVIDIA-GPUs verwenden Sie Ollama für Einfachheit oder llama.cpp für maximale Kontrolle. Ollama nutzt llama.cpp unter der Haube und fügt eine API-Schicht darüber hinzu.',
        bullets: [
          'MLX: nur Apple Silicon, schnellste native Inferenz, Python-basiert',
          'Ollama: jede Plattform, OpenAI-kompatibler API, einfachste Einrichtung',
          'llama.cpp: jede Hardware, maximale Kontrolle, erfordert Kompilierung',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'MLX vs Ollama vs llama.cpp : quel moteur d\'inférence utiliser ?',
        answer: 'Sur Apple Silicon, utilisez MLX — il atteint ~65 tok/s contre ~35 tok/s pour Ollama sur un M5 Pro avec un modèle 8B. Sur les GPU NVIDIA, utilisez Ollama pour la simplicité ou llama.cpp pour un contrôle maximal. Ollama utilise llama.cpp sous le capot et ajoute une couche API par-dessus.',
        bullets: [
          'MLX : Apple Silicon uniquement, inférence native la plus rapide, basé sur Python',
          'Ollama : toute plateforme, API compatible OpenAI, installation la plus simple',
          'llama.cpp : tout matériel, contrôle maximal, nécessite une compilation',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'MLX vs Ollama vs llama.cpp：どの推論エンジンを使うべきですか？',
        answer: 'Apple Siliconでは、MLXを使用してください — M5 ProでOllamaの~35 tok/sに対して~65 tok/sを実現します（8Bモデル使用時）。NVIDIA GPUでは、シンプルさを求めるならOllamaを、最大限の制御を求めるならllama.cppを使用してください。OllamaはllaMa.cppを内部で使用し、その上にAPIレイヤーを追加しています。',
        bullets: [
          'MLX：Apple Siliconのみ、最速のネイティブ推論、Pythonベース',
          'Ollama：あらゆるプラットフォーム、OpenAI互換API、最も簡単なセットアップ',
          'llama.cpp：あらゆるハードウェア、最大限の制御、コンパイルが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'MLX vs Ollama vs llama.cpp：应该选哪个推理引擎？',
        answer: '在 Apple Silicon 上，使用 MLX — 在 M5 Pro 上，8B 模型的速度约为 ~65 tok/s，而 Ollama 约为 ~35 tok/s。在 NVIDIA GPU 上，追求简便选 Ollama，追求最大控制权选 llama.cpp。Ollama 在底层使用 llama.cpp，并在其上增加了一个 API 层。',
        bullets: [
          'MLX：仅限 Apple Silicon，最快的原生推理，基于 Python',
          'Ollama：任意平台，OpenAI 兼容 API，最简单的安装',
          'llama.cpp：任意硬件，最大控制权，需要编译',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama uses llama.cpp as its backend — choosing Ollama means choosing llama.cpp plus an HTTP API and model management layer on top',
          'MLX is Apple\'s own ML framework; mlx-lm delivers ~65 tok/s for an 8B model on M5 Pro by using Apple\'s unified memory architecture natively — significantly faster than Ollama\'s llama.cpp+Metal path on the same chip',
          'llama.cpp compiled directly gives marginally more control over quantization and sampling, but requires a C++ build step — most users are better served by Ollama',
        ],
      },
      body1: {
        title: 'Engine-by-Engine Comparison',
        content: [
          '<strong>Pick MLX if you have Apple Silicon and want the fastest possible inference.</strong> mlx-lm is a Python package (install with <code>pip install mlx-lm</code>) and uses Apple\'s unified memory, which is why it outperforms Ollama\'s llama.cpp+Metal path on the same hardware. Trade-off: MLX only works on Apple Silicon, and you run Python scripts rather than a persistent API service.',
          '<strong>Pick Ollama if you want one-command setup and a stable OpenAI-compatible API</strong>, regardless of hardware. It works on Mac, Windows, and Linux. On Apple Silicon it uses llama.cpp with Metal — fast, but not as optimized as native MLX.',
          '<strong>Pick llama.cpp directly if you need maximum control</strong>: custom quantization, specific sampling parameters, or embedding inference into a C/C++ application. Setup cost is higher (compile from source), but you get every feature before it lands in Ollama.',
        ],
        columns: ['Engine', 'Best for', 'Speed (M5 Pro, 8B)', 'Setup difficulty'],
        rows: [
          { 'Engine': 'MLX', 'Best for': 'Apple Silicon native', 'Speed (M5 Pro, 8B)': '~65 tok/s', 'Setup difficulty': 'Medium (Python)' },
          { 'Engine': 'Ollama', 'Best for': 'Any platform, easy API', 'Speed (M5 Pro, 8B)': '~35 tok/s', 'Setup difficulty': 'Easy (one install)' },
          { 'Engine': 'llama.cpp', 'Best for': 'Maximum control, any HW', 'Speed (M5 Pro, 8B)': '~40 tok/s', 'Setup difficulty': 'Hard (compile)' },
        ],
      },
      body2: {
        title: 'Best Pick by Hardware',
        content: [
          '<strong>If you have a Mac with Apple Silicon: use MLX.</strong> Install with <code>pip install mlx-lm</code>, then run any model from the <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">mlx-community organization on Hugging Face</a>. If you also need an OpenAI-compatible API, run <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>If you have an NVIDIA GPU or any other hardware: use <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> One command installs it, models download automatically, and it exposes an OpenAI-compatible API on port 11434. For advanced control without Ollama\'s overhead, compile <a href="https://github.com/ggerganov/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">llama.cpp directly</a> and use its built-in server mode.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About MLX, Ollama, and llama.cpp',
        faqs: [
          {
            q: 'Does Ollama use MLX on Mac?',
            a: 'No. Ollama uses llama.cpp with Metal GPU acceleration on Apple Silicon, not MLX. For native MLX inference, use mlx-lm directly or LM Studio (which supports both backends). See <a href="/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Does Ollama support MLX on Apple Silicon?</a> for the full explanation.',
          },
          {
            q: 'Is llama.cpp faster than Ollama?',
            a: 'Marginally — llama.cpp compiled natively runs about 5–10% faster than Ollama because Ollama adds HTTP API and model management overhead. The difference is small for most workloads. MLX is significantly faster than both on Apple Silicon hardware.',
          },
          {
            q: 'Can I use MLX on Windows or Linux?',
            a: 'No. MLX is Apple\'s framework and only runs on Apple Silicon (M1 and later). On Windows or Linux with NVIDIA or AMD GPUs, use Ollama or llama.cpp with CUDA or ROCm.',
          },
          {
            q: 'How do I convert an Ollama model to MLX format?',
            a: 'You cannot convert an Ollama model directly to MLX. Download the original weights from Hugging Face and use mlx-lm\'s converter, or find a pre-converted version in the mlx-community organization. See <a href="/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">How to convert Ollama models to MLX</a>.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp: Welche Inferenz-Engine sollten Sie verwenden?',
    seoTitle: 'MLX vs. Ollama vs. llama.cpp: lokale Engines 2026',
    metaDescription: 'Auf Apple Silicon: MLX (~65 tok/s auf M5 Pro). Auf NVIDIA-GPUs: Ollama für Einfachheit oder llama.cpp für Kontrolle. Ollama nutzt llama.cpp. Schnelle Antwort.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      de: {
        question: 'MLX vs Ollama vs llama.cpp: Welche Inferenz-Engine sollten Sie verwenden?',
        answer: 'Auf Apple Silicon verwenden Sie MLX — es liefert ~65 tok/s im Vergleich zu ~35 tok/s für Ollama auf einem M5 Pro mit einem 8B-Modell. Auf NVIDIA-GPUs verwenden Sie Ollama für Einfachheit oder llama.cpp für maximale Kontrolle. Ollama nutzt llama.cpp unter der Haube und fügt eine API-Schicht darüber hinzu.',
        bullets: [
          'MLX: nur Apple Silicon, schnellste native Inferenz, Python-basiert',
          'Ollama: jede Plattform, OpenAI-kompatibler API, einfachste Einrichtung',
          'llama.cpp: jede Hardware, maximale Kontrolle, erfordert Kompilierung',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama verwendet llama.cpp als Backend — die Wahl von Ollama bedeutet llama.cpp plus eine HTTP-API und eine Modellverwaltungsschicht darüber',
          'MLX ist Apples eigenes ML-Framework; mlx-lm liefert ~65 tok/s für ein 8B-Modell auf dem M5 Pro durch native Nutzung von Apples Unified-Memory-Architektur — deutlich schneller als Ollamasv llama.cpp+Metal-Pfad auf demselben Chip',
          'Direkt kompiliertes llama.cpp gibt etwas mehr Kontrolle über Quantisierung und Sampling, erfordert aber einen C++-Build-Schritt — die meisten Nutzer sind mit Ollama besser bedient',
        ],
      },
      body1: {
        title: 'Engine-für-Engine-Vergleich',
        content: [
          '<strong>Wählen Sie MLX, wenn Sie Apple Silicon haben und die schnellstmögliche Inferenz möchten.</strong> mlx-lm ist ein Python-Paket (Installation mit <code>pip install mlx-lm</code>) und nutzt Apples Unified Memory, weshalb es Ollamasv llama.cpp+Metal-Pfad auf derselben Hardware übertrifft. Nachteil: MLX funktioniert nur auf Apple Silicon, und Sie führen Python-Skripte statt eines dauerhaften API-Dienstes aus.',
          '<strong>Wählen Sie Ollama, wenn Sie eine Ein-Befehl-Einrichtung und eine stabile OpenAI-kompatible API möchten</strong>, unabhängig von der Hardware. Es funktioniert auf Mac, Windows und Linux. Auf Apple Silicon verwendet es llama.cpp mit Metal — schnell, aber nicht so optimiert wie natives MLX.',
          '<strong>Wählen Sie llama.cpp direkt, wenn Sie maximale Kontrolle benötigen</strong>: benutzerdefinierte Quantisierung, spezifische Sampling-Parameter oder die Einbettung von Inferenz in eine C/C++-Anwendung. Der Einrichtungsaufwand ist höher (aus dem Quellcode kompilieren), aber Sie erhalten jede Funktion, bevor sie in Ollama landet.',
        ],
        columns: ['Engine', 'Beste Verwendung', 'Geschwindigkeit (M5 Pro, 8B)', 'Einrichtungsaufwand'],
        rows: [
          { 'Engine': 'MLX', 'Beste Verwendung': 'Apple Silicon nativ', 'Geschwindigkeit (M5 Pro, 8B)': '~65 tok/s', 'Einrichtungsaufwand': 'Mittel (Python)' },
          { 'Engine': 'Ollama', 'Beste Verwendung': 'Jede Plattform, einfacher API', 'Geschwindigkeit (M5 Pro, 8B)': '~35 tok/s', 'Einrichtungsaufwand': 'Einfach (eine Installation)' },
          { 'Engine': 'llama.cpp', 'Beste Verwendung': 'Maximale Kontrolle, jede HW', 'Geschwindigkeit (M5 Pro, 8B)': '~40 tok/s', 'Einrichtungsaufwand': 'Schwer (kompilieren)' },
        ],
      },
      body2: {
        title: 'Beste Wahl nach Hardware',
        content: [
          '<strong>Wenn Sie einen Mac mit Apple Silicon haben: verwenden Sie MLX.</strong> Installieren Sie mit <code>pip install mlx-lm</code> und führen Sie dann jedes Modell der <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">mlx-community-Organisation auf Hugging Face</a> aus. Wenn Sie auch eine OpenAI-kompatible API benötigen, führen Sie <code>mlx_lm.server --model mlx-community/model-name</code> aus.',
          '<strong>Wenn Sie eine NVIDIA-GPU oder andere Hardware haben: verwenden Sie <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> Ein Befehl installiert es, Modelle werden automatisch heruntergeladen, und es stellt eine OpenAI-kompatible API auf Port 11434 bereit. Für erweiterte Kontrolle ohne Ollamasv Overhead kompilieren Sie <a href="https://github.com/ggerganov/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">llama.cpp direkt</a> und verwenden Sie dessen eingebauten Servermodus.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu MLX, Ollama und llama.cpp',
        faqs: [
          {
            q: 'Verwendet Ollama MLX auf dem Mac?',
            a: 'Nein. Ollama verwendet llama.cpp mit Metal-GPU-Beschleunigung auf Apple Silicon, nicht MLX. Für native MLX-Inferenz verwenden Sie mlx-lm direkt oder LM Studio (das beide Backends unterstützt). Siehe <a href="/de/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Unterstützt Ollama MLX auf Apple Silicon?</a> für die vollständige Erklärung.',
          },
          {
            q: 'Ist llama.cpp schneller als Ollama?',
            a: 'Geringfügig — nativ kompiliertes llama.cpp läuft etwa 5–10 % schneller als Ollama, da Ollama HTTP-API- und Modellverwaltungs-Overhead hinzufügt. Der Unterschied ist für die meisten Workloads gering. MLX ist auf Apple-Silicon-Hardware deutlich schneller als beide.',
          },
          {
            q: 'Kann ich MLX auf Windows oder Linux verwenden?',
            a: 'Nein. MLX ist Apples Framework und läuft nur auf Apple Silicon (M1 und neuer). Auf Windows oder Linux mit NVIDIA- oder AMD-GPUs verwenden Sie Ollama oder llama.cpp mit CUDA oder ROCm.',
          },
          {
            q: 'Wie konvertiere ich ein Ollama-Modell in das MLX-Format?',
            a: 'Sie können ein Ollama-Modell nicht direkt in MLX konvertieren. Laden Sie die Original-Gewichte von Hugging Face herunter und verwenden Sie mlx-lms Konverter, oder finden Sie eine bereits konvertierte Version in der mlx-community-Organisation. Siehe <a href="/de/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Wie man Ollama-Modelle in MLX konvertiert</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp : quel moteur d\'inférence utiliser ?',
    seoTitle: 'MLX vs Ollama vs llama.cpp 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Sur Apple Silicon : MLX (~65 tok/s sur M5 Pro). Sur GPU NVIDIA : Ollama pour la simplicité ou llama.cpp pour le contrôle. Ollama encapsule llama.cpp. Réponse rapide.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      fr: {
        question: 'MLX vs Ollama vs llama.cpp : quel moteur d\'inférence utiliser ?',
        answer: 'Sur Apple Silicon, utilisez MLX — il atteint ~65 tok/s contre ~35 tok/s pour Ollama sur un M5 Pro avec un modèle 8B. Sur les GPU NVIDIA, utilisez Ollama pour la simplicité ou llama.cpp pour un contrôle maximal. Ollama utilise llama.cpp sous le capot et ajoute une couche API par-dessus.',
        bullets: [
          'MLX : Apple Silicon uniquement, inférence native la plus rapide, basé sur Python',
          'Ollama : toute plateforme, API compatible OpenAI, installation la plus simple',
          'llama.cpp : tout matériel, contrôle maximal, nécessite une compilation',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama utilise llama.cpp comme backend — choisir Ollama signifie choisir llama.cpp plus une couche API HTTP et de gestion de modèles par-dessus',
          'MLX est le propre framework ML d\'Apple ; mlx-lm délivre ~65 tok/s pour un modèle 8B sur M5 Pro en utilisant nativement l\'architecture de mémoire unifiée d\'Apple — significativement plus rapide que le chemin llama.cpp+Metal d\'Ollama sur la même puce',
          'llama.cpp compilé directement donne marginalement plus de contrôle sur la quantification et l\'échantillonnage, mais nécessite une étape de compilation C++ — la plupart des utilisateurs sont mieux servis par Ollama',
        ],
      },
      body1: {
        title: 'Comparaison moteur par moteur',
        content: [
          '<strong>Choisissez MLX si vous avez Apple Silicon et souhaitez l\'inférence la plus rapide possible.</strong> mlx-lm est un paquet Python (installez avec <code>pip install mlx-lm</code>) et utilise la mémoire unifiée d\'Apple, ce qui explique pourquoi il surpasse le chemin llama.cpp+Metal d\'Ollama sur le même matériel. Inconvénient : MLX ne fonctionne que sur Apple Silicon, et vous exécutez des scripts Python plutôt qu\'un service API persistant.',
          '<strong>Choisissez Ollama si vous souhaitez une installation en une commande et une API stable compatible OpenAI</strong>, quel que soit le matériel. Il fonctionne sur Mac, Windows et Linux. Sur Apple Silicon, il utilise llama.cpp avec Metal — rapide, mais pas aussi optimisé que MLX natif.',
          '<strong>Choisissez llama.cpp directement si vous avez besoin d\'un contrôle maximal</strong> : quantification personnalisée, paramètres d\'échantillonnage spécifiques, ou intégration de l\'inférence dans une application C/C++. Le coût d\'installation est plus élevé (compiler depuis les sources), mais vous obtenez chaque fonctionnalité avant qu\'elle n\'arrive dans Ollama.',
        ],
        columns: ['Moteur', 'Idéal pour', 'Vitesse (M5 Pro, 8B)', 'Difficulté d\'installation'],
        rows: [
          { 'Moteur': 'MLX', 'Idéal pour': 'Apple Silicon natif', 'Vitesse (M5 Pro, 8B)': '~65 tok/s', 'Difficulté d\'installation': 'Moyen (Python)' },
          { 'Moteur': 'Ollama', 'Idéal pour': 'Toute plateforme, API facile', 'Vitesse (M5 Pro, 8B)': '~35 tok/s', 'Difficulté d\'installation': 'Facile (une installation)' },
          { 'Moteur': 'llama.cpp', 'Idéal pour': 'Contrôle maximal, tout HW', 'Vitesse (M5 Pro, 8B)': '~40 tok/s', 'Difficulté d\'installation': 'Difficile (compiler)' },
        ],
      },
      body2: {
        title: 'Meilleur choix selon le matériel',
        content: [
          '<strong>Si vous avez un Mac avec Apple Silicon : utilisez MLX.</strong> Installez avec <code>pip install mlx-lm</code>, puis exécutez n\'importe quel modèle de l\'<a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">organisation mlx-community sur Hugging Face</a>. Si vous avez également besoin d\'une API compatible OpenAI, exécutez <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>Si vous avez un GPU NVIDIA ou tout autre matériel : utilisez <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> Une commande l\'installe, les modèles se téléchargent automatiquement, et il expose une API compatible OpenAI sur le port 11434. Pour un contrôle avancé sans la surcharge d\'Ollama, compilez <a href="https://github.com/ggerganov/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">llama.cpp directement</a> et utilisez son mode serveur intégré.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur MLX, Ollama et llama.cpp',
        faqs: [
          {
            q: 'Ollama utilise-t-il MLX sur Mac ?',
            a: 'Non. Ollama utilise llama.cpp avec accélération GPU Metal sur Apple Silicon, pas MLX. Pour l\'inférence MLX native, utilisez mlx-lm directement ou LM Studio (qui prend en charge les deux backends). Voir <a href="/fr/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Ollama prend-il en charge MLX sur Apple Silicon ?</a> pour l\'explication complète.',
          },
          {
            q: 'llama.cpp est-il plus rapide qu\'Ollama ?',
            a: 'Marginalement — llama.cpp compilé nativement est environ 5 à 10 % plus rapide qu\'Ollama car Ollama ajoute une surcharge d\'API HTTP et de gestion de modèles. La différence est faible pour la plupart des charges de travail. MLX est significativement plus rapide que les deux sur le matériel Apple Silicon.',
          },
          {
            q: 'Puis-je utiliser MLX sur Windows ou Linux ?',
            a: 'Non. MLX est le framework d\'Apple et ne fonctionne que sur Apple Silicon (M1 et ultérieur). Sur Windows ou Linux avec des GPU NVIDIA ou AMD, utilisez Ollama ou llama.cpp avec CUDA ou ROCm.',
          },
          {
            q: 'Comment convertir un modèle Ollama au format MLX ?',
            a: 'Vous ne pouvez pas convertir directement un modèle Ollama en MLX. Téléchargez les poids originaux depuis Hugging Face et utilisez le convertisseur de mlx-lm, ou trouvez une version pré-convertie dans l\'organisation mlx-community. Voir <a href="/fr/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Comment convertir des modèles Ollama en MLX</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp：どの推論エンジンを使うべきですか？',
    seoTitle: 'MLX vs Ollama vs llama.cpp 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Apple Siliconには MLX（M5 Proで~65 tok/s）。NVIDIA GPUにはシンプルさならOllama、制御力ならllama.cpp。OllamaはllaMa.cppをラップ。簡潔な回答。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      ja: {
        question: 'MLX vs Ollama vs llama.cpp：どの推論エンジンを使うべきですか？',
        answer: 'Apple Siliconでは、MLXを使用してください — M5 ProでOllamaの~35 tok/sに対して~65 tok/sを実現します（8Bモデル使用時）。NVIDIA GPUでは、シンプルさを求めるならOllamaを、最大限の制御を求めるならllama.cppを使用してください。OllamaはllaMa.cppを内部で使用し、その上にAPIレイヤーを追加しています。',
        bullets: [
          'MLX：Apple Siliconのみ、最速のネイティブ推論、Pythonベース',
          'Ollama：あらゆるプラットフォーム、OpenAI互換API、最も簡単なセットアップ',
          'llama.cpp：あらゆるハードウェア、最大限の制御、コンパイルが必要',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'OllamaはllaMa.cppをバックエンドとして使用しています — Ollamaを選ぶということは、llaMa.cppにHTTP APIとモデル管理レイヤーを追加したものを選ぶことを意味します',
          'MLXはApple独自のMLフレームワークです。mlx-lmはAppleのUnified Memoryアーキテクチャをネイティブで活用することで、M5 Proで8Bモデルに対して~65 tok/sを実現します — 同じチップ上のOllamaのllaMa.cpp+Metalパスより大幅に高速です',
          '直接コンパイルされたllaMa.cppは量子化とサンプリングに対してわずかに多くの制御を提供しますが、C++のビルドステップが必要です — ほとんどのユーザーにはOllamaの方が適しています',
        ],
      },
      body1: {
        title: 'エンジン別比較',
        content: [
          '<strong>Apple Siliconがあり、最速の推論を求めるならMLXを選んでください。</strong> mlx-lmはPythonパッケージ（<code>pip install mlx-lm</code>でインストール）で、AppleのUnified Memoryを使用するため、同じハードウェア上でOllamaのllaMa.cpp+Metalパスを上回ります。トレードオフ：MLXはApple Siliconでのみ動作し、永続的なAPIサービスではなくPythonスクリプトを実行します。',
          '<strong>ハードウェアを問わず、ワンコマンドのセットアップと安定したOpenAI互換APIが必要ならOllamaを選んでください</strong>。Mac、Windows、Linuxで動作します。Apple Silicon上ではMetal付きllaMa.cppを使用 — 高速ですが、ネイティブMLXほど最適化されていません。',
          '<strong>最大限の制御が必要ならllaMa.cppを直接選んでください</strong>：カスタム量子化、特定のサンプリングパラメータ、またはC/C++アプリケーションへの推論の組み込み。セットアップコストは高く（ソースからコンパイル）なりますが、Ollamaに実装される前のすべての機能を入手できます。',
        ],
        columns: ['エンジン', '最適用途', '速度（M5 Pro、8B）', 'セットアップ難易度'],
        rows: [
          { 'エンジン': 'MLX', '最適用途': 'Apple Siliconネイティブ', '速度（M5 Pro、8B）': '~65 tok/s', 'セットアップ難易度': '中程度（Python）' },
          { 'エンジン': 'Ollama', '最適用途': 'あらゆるプラットフォーム、簡単なAPI', '速度（M5 Pro、8B）': '~35 tok/s', 'セットアップ難易度': '簡単（ワンインストール）' },
          { 'エンジン': 'llama.cpp', '最適用途': '最大限の制御、あらゆるHW', '速度（M5 Pro、8B）': '~40 tok/s', 'セットアップ難易度': '難しい（コンパイル）' },
        ],
      },
      body2: {
        title: 'ハードウェア別のベストな選択',
        content: [
          '<strong>Apple Silicon搭載のMacをお持ちの場合：MLXを使用してください。</strong> <code>pip install mlx-lm</code>でインストールし、<a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Hugging Face上のmlx-communityオーガニゼーション</a>から任意のモデルを実行してください。日本ではMacのシェアが非常に高く、Apple Siliconを使う日本人開発者が多いため、MLXは特に関連性が高い選択肢です。mlx-communityにはアクティブな日本人コントリビューターも参加しており、日本語向けモデルの変換も積極的に行われています。OpenAI互換のAPIも必要な場合は、<code>mlx_lm.server --model mlx-community/model-name</code>を実行してください。',
          '<strong>NVIDIA GPUまたはその他のハードウェアをお持ちの場合：<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>を使用してください。</strong> ワンコマンドでインストールでき、モデルが自動的にダウンロードされ、ポート11434でOpenAI互換のAPIを公開します。Ollamaのオーバーヘッドなしで高度な制御が必要な場合は、<a href="https://github.com/ggerganov/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">llaMa.cppを直接コンパイル</a>して、内蔵のサーバーモードを使用してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'MLX、Ollama、llama.cppに関するよくある質問',
        faqs: [
          {
            q: 'OllamaはMacでMLXを使用しますか？',
            a: 'いいえ。OllamaはApple Silicon上でMLXではなく、Metal GPU加速付きのllaMa.cppを使用します。ネイティブMLX推論には、mlx-lmを直接使用するか、LM Studio（両方のバックエンドをサポート）を使用してください。詳しい説明は<a href="/ja/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">OllamaはApple SiliconでMLXをサポートしていますか？</a>をご覧ください。',
          },
          {
            q: 'llama.cppはOllamaより速いですか？',
            a: 'わずかに — ネイティブでコンパイルされたllaMa.cppは、OllamaがHTTP APIとモデル管理のオーバーヘッドを追加するため、Ollamaより約5〜10%速く動作します。ほとんどのワークロードでは差は小さいです。MLXはApple Siliconハードウェア上では両方よりも大幅に高速です。',
          },
          {
            q: 'MLXをWindowsやLinuxで使用できますか？',
            a: 'いいえ。MLXはAppleのフレームワークであり、Apple Silicon（M1以降）でのみ動作します。NVIDIAまたはAMD GPUを搭載したWindowsまたはLinuxでは、CUDAまたはROCm対応のOllamaまたはllaMa.cppを使用してください。',
          },
          {
            q: 'OllamaモデルをMLX形式に変換するにはどうすればよいですか？',
            a: 'OllamaモデルをMLXに直接変換することはできません。Hugging Faceから元のウェイトをダウンロードし、mlx-lmのコンバーターを使用するか、mlx-communityオーガニゼーションで事前変換されたバージョンを探してください。<a href="/ja/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">OllamaモデルをMLXに変換する方法</a>をご覧ください。',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp: Qual motor de inferência usar?',
    seoTitle: 'MLX vs Ollama vs llama.cpp 2026 | PromptQuorum',
    metaDescription: 'No Apple Silicon use MLX (~65 tok/s no M5 Pro). Em NVIDIA, Ollama pela simplicidade ou llama.cpp pelo controle. Ollama encapsula llama.cpp. Resposta rápida.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple M5 Pro', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo entre MLX, Ollama e llama.cpp para inferência local',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'MLX vs Ollama vs llama.cpp: qual motor de inferência usar?',
        answer: 'No Apple Silicon, use MLX — roda ~65 tok/s versus ~35 tok/s do Ollama em um M5 Pro com um modelo 8B. Em GPUs NVIDIA, use Ollama pela simplicidade ou llama.cpp pelo controle máximo. Ollama usa llama.cpp internamente e adiciona uma camada de API por cima.',
        bullets: [
          'MLX: apenas Apple Silicon, inferência nativa mais rápida, baseado em Python',
          'Ollama: qualquer plataforma, API compatível com OpenAI, configuração mais fácil',
          'llama.cpp: qualquer hardware, controle máximo, requer compilação',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLX é o mais rápido no Apple Silicon nativo — ~65 tok/s no M5 Pro, mas funciona apenas em Macs',
          'Ollama é o mais simples em qualquer plataforma — wrapper do llama.cpp com API REST compatível com OpenAI',
          'llama.cpp é o mais flexível — inferência direta, compilável para qualquer hardware, sem camada de API',
          'Ollama usa llama.cpp internamente — é uma camada mais conveniente, mas com menor controle granular',
        ],
      },
      body1: {
        title: 'Comparação de motores',
        content: [
          '<strong>Se você tem Apple Silicon e precisa de máxima velocidade de inferência, escolha MLX.</strong> mlx-lm é um pacote Python (instale com <code>pip install mlx-lm</code>) que usa memória unificada da Apple, o que o torna mais rápido que o caminho llama.cpp+Metal do Ollama no mesmo hardware. Trade-off: MLX só funciona no Apple Silicon e você executa scripts Python, não um serviço API persistente.',
          '<strong>Se quiser configuração com um comando e uma API compatível com OpenAI estável em qualquer hardware, escolha Ollama.</strong> Funciona no Mac, Windows e Linux. No Apple Silicon usa llama.cpp com Metal — rápido, mas não tão otimizado quanto o MLX nativo.',
          '<strong>Se precisar de controle máximo, escolha llama.cpp diretamente:</strong> quantização personalizada, parâmetros de amostragem específicos, ou embutir inferência em aplicações C/C++. O custo de configuração é maior (compilar a partir do código-fonte), mas você obtém todas as funcionalidades antes de chegarem ao Ollama.',
        ],
        columns: ['Motor', 'Melhor para', 'Velocidade (M5 Pro, 8B)', 'Dificuldade de configuração'],
        rows: [
          { 'Motor': 'MLX', 'Melhor para': 'Apple Silicon nativo', 'Velocidade (M5 Pro, 8B)': '~65 tok/s', 'Dificuldade de configuração': 'Média (Python)' },
          { 'Motor': 'Ollama', 'Melhor para': 'Qualquer plataforma, API fácil', 'Velocidade (M5 Pro, 8B)': '~35 tok/s', 'Dificuldade de configuração': 'Fácil (um comando)' },
          { 'Motor': 'llama.cpp', 'Melhor para': 'Controle máximo, qualquer HW', 'Velocidade (M5 Pro, 8B)': '~40 tok/s', 'Dificuldade de configuração': 'Difícil (compilação)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas rápidas: MLX vs Ollama vs llama.cpp',
        faqs: [
          {
            q: 'O Ollama usa MLX no Mac?',
            a: 'Não. O Ollama usa llama.cpp com aceleração Metal no Apple Silicon, não MLX nativo. Para inferência MLX nativa, use mlx-lm diretamente ou LM Studio (que suporta ambos os backends).',
          },
          {
            q: 'O llama.cpp é mais rápido que o Ollama?',
            a: 'Levemente — llama.cpp compilado nativamente é ~5-10% mais rápido que o Ollama porque o Ollama adiciona overhead de API HTTP e gerenciamento de modelos. Na maioria das cargas de trabalho a diferença é pequena. MLX é significativamente mais rápido que ambos no hardware Apple Silicon.',
          },
          {
            q: 'Posso usar MLX no Windows ou Linux?',
            a: 'Não. MLX é um framework da Apple que funciona apenas no Apple Silicon (M1 em diante). No Windows ou Linux com GPUs NVIDIA ou AMD, use Ollama ou llama.cpp com suporte para CUDA ou ROCm.',
          },
          {
            q: 'Como converto modelos do Ollama para o formato MLX?',
            a: 'Não é possível converter modelos do Ollama diretamente para MLX. Baixe os pesos originais do Hugging Face e use o conversor do mlx-lm, ou busque versões pré-convertidas na organização mlx-community. Consulte <a href="/pt/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Converter modelos do Ollama para MLX</a>.',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp: ¿Cuál motor de inferencia deberías usar?',
    seoTitle: 'MLX vs Ollama vs llama.cpp 2026 | PromptQuorum',
    metaDescription: 'En Apple Silicon usa MLX (~65 tok/s en M5 Pro). En NVIDIA, Ollama por simplicidad o llama.cpp por control. Ollama envuelve a llama.cpp. Respuesta rápida.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple M5 Pro', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores eligiendo entre MLX, Ollama y llama.cpp para inferencia local',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿MLX vs Ollama vs llama.cpp: cuál motor de inferencia deberías usar?',
        answer: 'En Apple Silicon, usa MLX — ejecuta ~65 tok/s versus ~35 tok/s para Ollama en un M5 Pro con un modelo 8B. En GPUs NVIDIA, usa Ollama por simplicidad o llama.cpp por control máximo. Ollama usa llama.cpp bajo el capó y agrega una capa API encima.',
        bullets: [
          'MLX: solo Apple Silicon, inferencia nativa más rápida, basado en Python',
          'Ollama: cualquier plataforma, API compatible con OpenAI, configuración más fácil',
          'llama.cpp: cualquier hardware, control máximo, requiere compilación',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLX es el más rápido en Apple Silicon nativo — ~65 tok/s en M5 Pro, pero solo funciona en Macs',
          'Ollama es el más simple en cualquier plataforma — envoltura de llama.cpp con API REST, OpenAI-compatible',
          'llama.cpp es el más flexible — inferencia directa, compilable para cualquier hardware, sin capa de API',
          'Ollama usa llama.cpp internamente — es una capa más conveniente pero con menor control granular',
        ],
      },
      body1: {
        title: 'Comparación de motores',
        content: [
          '<strong>Si tienes Apple Silicon y necesitas máxima velocidad de inferencia, elige MLX.</strong> mlx-lm es un paquete Python (instala con <code>pip install mlx-lm</code>) que usa memoria unificada de Apple, lo que lo hace más rápido que la ruta de llama.cpp+Metal de Ollama en el mismo hardware. Tradeoff: MLX solo funciona en Apple Silicon y ejecutas un script Python, no un servicio API persistente.',
          '<strong>Si quieres configuración de un comando y un API OpenAI-compatible estable en cualquier hardware, elige Ollama.</strong> Funciona en Mac, Windows y Linux. En Apple Silicon usa llama.cpp con Metal — rápido, pero no tan optimizado como MLX nativo.',
          '<strong>Si necesitas máximo control, elige llama.cpp directamente:</strong> cuantización personalizada, parámetros de muestreo específicos, o incrustar inferencia en aplicaciones C/C++. El costo de configuración es mayor (compilar desde el código fuente), pero obtienes todas las características antes de que Ollama las implemente.',
        ],
        columns: ['Motor', 'Mejor para', 'Velocidad (M5 Pro, 8B)', 'Dificultad de configuración'],
        rows: [
          { 'Motor': 'MLX', 'Mejor para': 'Nativo Apple Silicon', 'Velocidad (M5 Pro, 8B)': '~65 tok/s', 'Dificultad de configuración': 'Media (Python)' },
          { 'Motor': 'Ollama', 'Mejor para': 'Cualquier plataforma, API fácil', 'Velocidad (M5 Pro, 8B)': '~35 tok/s', 'Dificultad de configuración': 'Fácil (un comando)' },
          { 'Motor': 'llama.cpp', 'Mejor para': 'Control máximo, cualquier HW', 'Velocidad (M5 Pro, 8B)': '~40 tok/s', 'Dificultad de configuración': 'Difícil (compilación)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas rápidas: MLX vs Ollama vs llama.cpp',
        faqs: [
          {
            q: '¿Usa Ollama MLX en Mac?',
            a: 'No. Ollama usa llama.cpp con aceleración Metal en Apple Silicon, no MLX nativo. Para inferencia MLX nativa, usa mlx-lm directamente o LM Studio (que soporta ambos backends).',
          },
          {
            q: '¿Es llama.cpp más rápido que Ollama?',
            a: 'Ligeramente — llama.cpp compilado nativamente es ~5-10% más rápido que Ollama porque Ollama agrega overhead de API HTTP y gestión de modelos. En la mayoría de cargas de trabajo la diferencia es pequeña. MLX es significativamente más rápido que ambos en hardware Apple Silicon.',
          },
          {
            q: '¿Puedo usar MLX en Windows o Linux?',
            a: 'No. MLX es un framework de Apple que solo funciona en Apple Silicon (M1 en adelante). En Windows o Linux con GPUs NVIDIA o AMD, usa Ollama o llama.cpp con soporte para CUDA o ROCm.',
          },
          {
            q: '¿Cómo convierto modelos de Ollama a formato MLX?',
            a: 'No puedes convertir directamente modelos de Ollama a MLX. Descarga los pesos originales desde Hugging Face y usa el convertidor de mlx-lm, o busca versiones preconvertidas en la organización mlx-community. Consulta <a href="/es/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Convertir modelos de Ollama a MLX</a>.',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    title: 'MLX vs Ollama vs llama.cpp：应该选哪个推理引擎？',
    seoTitle: 'MLX vs Ollama vs llama.cpp 2026 | Prompt Bites | PromptQuorum',
    metaDescription: '在 Apple Silicon 上用 MLX（M5 Pro ~65 tok/s）。在 NVIDIA GPU 上，追求简便选 Ollama，追求控制选 llama.cpp。Ollama 封装了 llama.cpp。快速解答。',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    quickAnswerTop: {
      zh: {
        question: 'MLX vs Ollama vs llama.cpp：应该选哪个推理引擎？',
        answer: '在 Apple Silicon 上，使用 MLX — 在 M5 Pro 上，8B 模型的速度约为 ~65 tok/s，而 Ollama 约为 ~35 tok/s。在 NVIDIA GPU 上，追求简便选 Ollama，追求最大控制权选 llama.cpp。Ollama 在底层使用 llama.cpp，并在其上增加了一个 API 层。',
        bullets: [
          'MLX：仅限 Apple Silicon，最快的原生推理，基于 Python',
          'Ollama：任意平台，OpenAI 兼容 API，最简单的安装',
          'llama.cpp：任意硬件，最大控制权，需要编译',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 使用 llama.cpp 作为后端 — 选择 Ollama 意味着选择 llama.cpp 加上 HTTP API 和模型管理层',
          'MLX 是 Apple 自己的 ML 框架；mlx-lm 通过原生利用 Apple 的统一内存架构，在 M5 Pro 上为 8B 模型提供 ~65 tok/s — 在同一芯片上比 Ollama 的 llama.cpp+Metal 路径快得多',
          '直接编译的 llama.cpp 对量化和采样提供了略多的控制，但需要 C++ 构建步骤 — 大多数用户使用 Ollama 更合适',
        ],
      },
      body1: {
        title: '逐引擎对比',
        content: [
          '<strong>如果您拥有 Apple Silicon 并希望获得最快的推理速度，请选择 MLX。</strong> mlx-lm 是一个 Python 包（使用 <code>pip install mlx-lm</code> 安装），并使用 Apple 的统一内存，这就是它在相同硬件上优于 Ollama 的 llama.cpp+Metal 路径的原因。权衡：MLX 只在 Apple Silicon 上工作，您运行的是 Python 脚本而不是持久的 API 服务。',
          '<strong>如果您想要一键安装和稳定的 OpenAI 兼容 API，无论使用什么硬件，请选择 Ollama</strong>。它可在 Mac、Windows 和 Linux 上运行。在 Apple Silicon 上，它使用带有 Metal 的 llama.cpp — 速度快，但不如原生 MLX 优化。',
          '<strong>如果您需要最大控制权，请直接选择 llama.cpp</strong>：自定义量化、特定采样参数，或将推理嵌入 C/C++ 应用程序。安装成本更高（从源代码编译），但您可以在 Ollama 添加之前获得每项功能。特别值得一提的是，llama.cpp 对中文模型的支持最为全面——Qwen、Yi 和 DeepSeek 都有优秀的 llama.cpp GGUF 版本可用，这使得 llama.cpp 成为中文开发者进行中文模型推理的优选。',
        ],
        columns: ['引擎', '最佳用途', '速度（M5 Pro，8B）', '设置难度'],
        rows: [
          { '引擎': 'MLX', '最佳用途': 'Apple Silicon 原生', '速度（M5 Pro，8B）': '~65 tok/s', '设置难度': '中等（Python）' },
          { '引擎': 'Ollama', '最佳用途': '任意平台，简易 API', '速度（M5 Pro，8B）': '~35 tok/s', '设置难度': '简单（一键安装）' },
          { '引擎': 'llama.cpp', '最佳用途': '最大控制权，任意硬件', '速度（M5 Pro，8B）': '~40 tok/s', '设置难度': '困难（编译）' },
        ],
      },
      body2: {
        title: '按硬件选择最佳方案',
        content: [
          '<strong>如果您有搭载 Apple Silicon 的 Mac：使用 MLX。</strong> 使用 <code>pip install mlx-lm</code> 安装，然后运行 <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Hugging Face 上 mlx-community 组织</a>中的任何模型。如果您还需要 OpenAI 兼容的 API，请运行 <code>mlx_lm.server --model mlx-community/model-name</code>。',
          '<strong>如果您有 NVIDIA GPU 或其他硬件：使用 <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>。</strong> 一条命令即可安装，模型自动下载，并在 11434 端口提供 OpenAI 兼容的 API。如需要在没有 Ollama 开销的情况下进行高级控制，请<a href="https://github.com/ggerganov/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">直接编译 llama.cpp</a> 并使用其内置服务器模式。对于处理 Qwen、Yi、DeepSeek 等中文模型的开发者，llama.cpp 的 GGUF 格式支持尤为完善，是优先考虑的方案。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 MLX、Ollama 和 llama.cpp 的快速解答',
        faqs: [
          {
            q: 'Ollama 在 Mac 上使用 MLX 吗？',
            a: '不。Ollama 在 Apple Silicon 上使用带有 Metal GPU 加速的 llama.cpp，而不是 MLX。如需原生 MLX 推理，请直接使用 mlx-lm 或 LM Studio（支持两种后端）。完整说明请参阅<a href="/zh/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Ollama 是否支持 Apple Silicon 上的 MLX？</a>。',
          },
          {
            q: 'llama.cpp 比 Ollama 更快吗？',
            a: '略快 — 原生编译的 llama.cpp 比 Ollama 快约 5–10%，因为 Ollama 增加了 HTTP API 和模型管理的开销。对于大多数工作负载，差异很小。在 Apple Silicon 硬件上，MLX 比两者都快得多。',
          },
          {
            q: '我可以在 Windows 或 Linux 上使用 MLX 吗？',
            a: '不可以。MLX 是 Apple 的框架，只能在 Apple Silicon（M1 及更新版本）上运行。在使用 NVIDIA 或 AMD GPU 的 Windows 或 Linux 上，请使用支持 CUDA 或 ROCm 的 Ollama 或 llama.cpp。',
          },
          {
            q: '如何将 Ollama 模型转换为 MLX 格式？',
            a: '您无法直接将 Ollama 模型转换为 MLX。请从 Hugging Face 下载原始权重并使用 mlx-lm 的转换器，或在 mlx-community 组织中寻找预转换版本。请参阅<a href="/zh/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">如何将 Ollama 模型转换为 MLX</a>。',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    title: 'MLX مقابل Ollama مقابل llama.cpp: أي محرك استنتاج يجب أن تستخدم؟',
    seoTitle: 'MLX مقابل Ollama مقابل llama.cpp 2026: دليل الاختيار',
    metaDescription: 'على Apple Silicon استخدم MLX: يحقق ~65 توكن/ثانية على M5 Pro مقابل ~35 لـ Ollama. على NVIDIA اختر Ollama للبساطة أو llama.cpp للتحكم الكامل.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple M5 Pro', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermedio',
    audience: 'المطورون الذين يختارون بين MLX وOllama وllama.cpp للاستنتاج المحلي',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'MLX مقابل Ollama مقابل llama.cpp: أي محرك استنتاج يجب أن تستخدم؟',
        answer: 'على Apple Silicon، استخدم MLX — يحقق حوالي 65 رمزاً/ثانية مقابل حوالي 35 رمزاً/ثانية لـ Ollama على M5 Pro مع نموذج 8B. على NVIDIA، استخدم Ollama للبساطة أو llama.cpp للتحكم الأقصى. يستخدم Ollama llama.cpp في الخلفية ويضيف طبقة API فوقه.',
        bullets: [
          'MLX: لـ Apple Silicon فقط، أسرع استنتاج محلي، مبني على Python',
          'Ollama: لأي منصة، واجهة API متوافقة مع OpenAI، الإعداد الأسهل',
          'llama.cpp: لأي جهاز، أقصى تحكم، يتطلب تجميعاً',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MLX هو الأسرع على Apple Silicon الأصلي — حوالي 65 رمزاً/ثانية على M5 Pro، لكنه يعمل على أجهزة Mac فقط',
          'Ollama هو الأبسط على أي منصة — غلاف لـ llama.cpp مع واجهة REST، متوافق مع OpenAI',
          'llama.cpp هو الأكثر مرونة — استنتاج مباشر، قابل للتجميع على أي جهاز، بدون طبقة API',
          'Ollama يستخدم llama.cpp داخلياً — طبقة أكثر راحة لكن بتحكم أقل دقة',
        ],
      },
      body1: {
        title: 'مقارنة المحركات',
        content: [
          '<strong>إذا كنت تمتلك Apple Silicon وتحتاج إلى أقصى سرعة استنتاج، اختر MLX.</strong> mlx-lm هو حزمة Python (ثبّتها بـ <code>pip install mlx-lm</code>) وتستخدم الذاكرة الموحدة من Apple، مما يجعلها أسرع من مسار llama.cpp+Metal لـ Ollama على نفس الجهاز. المقايضة: MLX يعمل فقط على Apple Silicon وتُشغّل سكريبت Python لا خدمة API دائمة.',
          '<strong>إذا أردت إعداداً بأمر واحد وواجهة API مستقرة متوافقة مع OpenAI على أي جهاز، اختر Ollama.</strong> يعمل على Mac وWindows وLinux. على Apple Silicon يستخدم llama.cpp مع Metal — سريع، لكن ليس محسَّناً كـ MLX الأصلي.',
          '<strong>إذا احتجت أقصى تحكم، اختر llama.cpp مباشرةً:</strong> تكميم مخصص، معاملات أخذ عينات محددة، أو تضمين الاستنتاج في تطبيقات C/C++. تكلفة الإعداد أعلى (التجميع من الكود المصدري)، لكنك تحصل على كل الميزات قبل أن يضيفها Ollama.',
        ],
        columns: ['المحرك', 'الأفضل لـ', 'السرعة (M5 Pro، 8B)', 'صعوبة الإعداد'],
        rows: [
          { 'المحرك': 'MLX', 'الأفضل لـ': 'Apple Silicon الأصلي', 'السرعة (M5 Pro، 8B)': '~65 tok/s', 'صعوبة الإعداد': 'متوسطة (Python)' },
          { 'المحرك': 'Ollama', 'الأفضل لـ': 'أي منصة، API سهل', 'السرعة (M5 Pro، 8B)': '~35 tok/s', 'صعوبة الإعداد': 'سهلة (أمر واحد)' },
          { 'المحرك': 'llama.cpp', 'الأفضل لـ': 'تحكم أقصى، أي جهاز', 'السرعة (M5 Pro، 8B)': '~40 tok/s', 'صعوبة الإعداد': 'صعبة (تجميع)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة: MLX مقابل Ollama مقابل llama.cpp',
        faqs: [
          {
            q: 'هل يستخدم Ollama MLX على Mac؟',
            a: 'لا. يستخدم Ollama llama.cpp مع تسريع Metal على Apple Silicon، وليس MLX الأصلي. للاستنتاج الأصلي عبر MLX، استخدم mlx-lm مباشرةً أو LM Studio (الذي يدعم كلا الخلفيتين).',
          },
          {
            q: 'هل llama.cpp أسرع من Ollama؟',
            a: 'بشكل طفيف — llama.cpp المُجمَّع محلياً أسرع بحوالي 5-10% من Ollama لأن Ollama يضيف حمل HTTP API وإدارة النماذج. في معظم أحمال العمل، الفارق صغير. على Apple Silicon، MLX أسرع بكثير من كليهما.',
          },
          {
            q: 'هل يمكنني استخدام MLX على Windows أو Linux؟',
            a: 'لا. MLX إطار عمل من Apple يعمل فقط على Apple Silicon (M1 فصاعداً). على Windows أو Linux مع GPU من NVIDIA أو AMD، استخدم Ollama أو llama.cpp مع دعم CUDA أو ROCm.',
          },
          {
            q: 'كيف أحوّل نماذج Ollama إلى صيغة MLX؟',
            a: 'لا يمكنك تحويل نماذج Ollama مباشرةً إلى MLX. نزّل الأوزان الأصلية من Hugging Face واستخدم محوّل mlx-lm، أو ابحث عن إصدارات محوّلة مسبقاً في منظمة mlx-community. راجع <a href="/ar/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">تحويل نماذج Ollama إلى MLX</a>.',
          },
        ],
      },
    },
  },
}
