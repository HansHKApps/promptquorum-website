import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-en.webp',
    title: 'MLX vs Ollama vs llama.cpp: Which Inference Engine Should You Use?',
    dateModified: '2026-10-17',
    seoTitle: 'MLX vs Ollama vs llama.cpp: Which for Mac in 2026?',
    metaDescription: 'Ollama now runs MLX on Apple Silicon (since 0.19). Compare Ollama, mlx-lm, llama.cpp and LM Studio: which engine to pick on Mac, NVIDIA or CPU.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple M5 family', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing between MLX, Ollama, and llama.cpp for local inference',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'MLX vs Ollama vs llama.cpp: which inference engine should you use?',
        answer: 'Ollama is no longer llama.cpp-only on Apple Silicon: it added an MLX backend in version 0.19 (March 2026), and since version 0.40 it runs the architectures its MLX runtime supports on MLX automatically. Use Ollama for the easiest setup, mlx-lm for direct Python control on a Mac, and llama.cpp for maximum control or non-Apple hardware.',
        bullets: [
          'Ollama: any platform, OpenAI-compatible API, MLX runner for supported models on Apple Silicon',
          'mlx-lm: Apple Silicon only, Python package with its own OpenAI-compatible server',
          'llama.cpp: any hardware, most control over quantization and sampling, compiled directly',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'MLX vs Ollama vs llama.cpp: Welche Inferenz-Engine sollten Sie verwenden?',
        answer: 'Ollama basiert auf Apple Silicon nicht mehr nur auf llama.cpp: Version 0.19 (März 2026) brachte ein MLX-Backend, und seit Version 0.40 laufen die von der MLX-Runtime unterstützten Architekturen automatisch auf MLX. Nutzen Sie Ollama für die einfachste Einrichtung, mlx-lm für direkte Python-Kontrolle auf dem Mac und llama.cpp für maximale Kontrolle oder Nicht-Apple-Hardware.',
        bullets: [
          'Ollama: jede Plattform, OpenAI-kompatible API, MLX-Runner für unterstützte Modelle auf Apple Silicon',
          'mlx-lm: nur Apple Silicon, Python-Paket mit eigenem OpenAI-kompatiblem Server',
          'llama.cpp: jede Hardware, die meiste Kontrolle über Quantisierung und Sampling, direkt kompiliert',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'MLX vs Ollama vs llama.cpp : quel moteur d\'inférence utiliser ?',
        answer: 'Sur Apple Silicon, Ollama n\'est plus limité à llama.cpp : la version 0.19 (mars 2026) a ajouté un backend MLX et, depuis la version 0.40, les architectures prises en charge par son runtime MLX s\'exécutent automatiquement sur MLX. Utilisez Ollama pour la configuration la plus simple, mlx-lm pour un contrôle Python direct sur Mac, et llama.cpp pour un contrôle maximal ou un matériel non-Apple.',
        bullets: [
          'Ollama : toute plateforme, API compatible OpenAI, runner MLX pour les modèles pris en charge sur Apple Silicon',
          'mlx-lm : Apple Silicon uniquement, paquet Python avec son propre serveur compatible OpenAI',
          'llama.cpp : tout matériel, le plus de contrôle sur la quantification et l\'échantillonnage, compilé directement',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'MLX vs Ollama vs llama.cpp：どの推論エンジンを使うべきですか？',
        answer: 'Apple Siliconでは、Ollamaはもはやllama.cpp専用ではありません。バージョン0.19（2026年3月）でMLXバックエンドが加わり、バージョン0.40以降はMLXランタイムが対応するアーキテクチャが自動的にMLXで動作します。最も簡単な導入ならOllama、MacでPythonから直接制御するならmlx-lm、最大限の制御やApple以外のハードウェアならllama.cppを使ってください。',
        bullets: [
          'Ollama：あらゆるプラットフォーム、OpenAI互換API、Apple Siliconでは対応モデルにMLXランナー',
          'mlx-lm：Apple Silicon専用、独自のOpenAI互換サーバーを備えたPythonパッケージ',
          'llama.cpp：あらゆるハードウェア、量子化とサンプリングを最も細かく制御、直接コンパイル',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: 'MLX vs Ollama vs llama.cpp：应该选哪个推理引擎？',
        answer: '在 Apple Silicon 上，Ollama 不再只依赖 llama.cpp：0.19 版（2026 年 3 月）新增了 MLX 后端，自 0.40 版起，其 MLX 运行时支持的架构会自动在 MLX 上运行。想要最简单的安装用 Ollama，想在 Mac 上直接用 Python 控制用 mlx-lm，追求最大控制权或使用非 Apple 硬件用 llama.cpp。',
        bullets: [
          'Ollama：任意平台，OpenAI 兼容 API，Apple Silicon 上对受支持模型使用 MLX 运行器',
          'mlx-lm：仅限 Apple Silicon，自带 OpenAI 兼容服务器的 Python 包',
          'llama.cpp：任意硬件，对量化和采样控制最多，直接编译',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama added an MLX backend for Apple Silicon in version 0.19 (preview, 30 March 2026); since version 0.40 (25 September 2026) its release notes say model architectures supported by the MLX runtime run on MLX automatically',
          'In Ollama\'s own benchmark, decode speed for Qwen3.5-35B-A3B rose from 58 to 112 tokens/s between version 0.18 (Q4_K_M) and 0.19 (NVFP4 on MLX) — different quantization formats, so read it as Ollama\'s figure for that model, not a general MLX-vs-llama.cpp ratio',
          'mlx-lm is the direct route when you want Python control or a model Ollama\'s MLX runner does not cover; llama.cpp compiled directly gives the most control and runs on any hardware',
        ],
      },
      body1: {
        title: 'Engine-by-Engine Comparison',
        content: [
          '<strong>Pick Ollama if you want one-command setup and a stable OpenAI-compatible API</strong> on any platform. On Apple Silicon, <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> introduced an MLX backend as a preview in version 0.19 (30 March 2026; the preview covered Qwen3.5-35B-A3B on Macs with more than 32 GB of unified memory, per the <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> announcement). Version 0.40 (25 September 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) runs every architecture its MLX runtime supports on MLX automatically, with qwen3.5, qwen3.6 and gemma4 named in the release notes.',
          '<strong>Pick mlx-lm if you have Apple Silicon and want MLX directly.</strong> <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> is a Python package (<code>pip install mlx-lm</code>) from Apple\'s ml-explore group with its own OpenAI-compatible server (<code>mlx_lm.server</code>), and it loads models from the <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> organization on Hugging Face. Trade-off: it only works on Apple Silicon, and you manage the Python environment and the server process yourself.',
          '<strong>Pick llama.cpp directly if you need maximum control</strong>: custom quantization, specific sampling parameters, or inference embedded in a C/C++ application. Setup cost is higher than Ollama, but new features land in <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> before they reach wrappers. On Macs it uses Metal, not MLX.',
          '<strong>LM Studio and oMLX are the other Mac options.</strong> <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> is a GUI app that runs models with its MLX engine or with llama.cpp, selectable per model. oMLX is an open-source MLX-based inference server for Apple Silicon — see our <a href="/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX review</a>.',
        ],
        columns: ['Engine', 'Best for', 'Mac backend', 'Setup', 'Latest release checked'],
        rows: [
          { 'Engine': 'Ollama', 'Best for': 'Any platform, easy API', 'Mac backend': 'MLX (supported models) / llama.cpp', 'Setup': 'Easy (one install)', 'Latest release checked': 'v0.40.6 (16 October 2026)' },
          { 'Engine': 'mlx-lm', 'Best for': 'Apple Silicon, Python control', 'Mac backend': 'MLX native', 'Setup': 'Medium (pip install)', 'Latest release checked': 'v0.32.2 (16 October 2026)' },
          { 'Engine': 'llama.cpp', 'Best for': 'Maximum control, any hardware', 'Mac backend': 'llama.cpp + Metal', 'Setup': 'Medium (brew or build)', 'Latest release checked': 'b11714 (17 October 2026)' },
          { 'Engine': 'LM Studio', 'Best for': 'GUI, MLX or llama.cpp per model', 'Mac backend': 'MLX engine / llama.cpp', 'Setup': 'Easy (installer)', 'Latest release checked': 'MLX engine v1.8.5 (5 June 2026)' },
        ],
      },
      body2: {
        title: 'Best Pick by Hardware',
        content: [
          '<strong>If you have a Mac with Apple Silicon: start with Ollama, and switch to mlx-lm when you need more control.</strong> Install <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> and pull a model from its library; if the architecture is one its MLX runtime supports, it runs on MLX automatically. Choose mlx-lm (<code>pip install mlx-lm</code>, models from <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>) if you want Python scripting or a model Ollama does not run on MLX. For an OpenAI-compatible API from mlx-lm, run <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>If you have an NVIDIA GPU or other hardware: use <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> One command installs it, models download automatically, and it exposes an OpenAI-compatible API on port 11434. For advanced control without Ollama\'s layer, compile <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> directly and use its built-in server mode.',
          'PromptQuorum has not benchmarked these engines head to head. Speed depends on chip, model, quantization and context length, so test your own model before committing.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About MLX, Ollama, and llama.cpp',
        faqs: [
          {
            q: 'Does Ollama use MLX on Mac?',
            a: 'Yes, for supported models. Ollama 0.19 (30 March 2026) added an MLX backend as a preview, and since version 0.40 (25 September 2026) model architectures supported by its MLX runtime run on MLX automatically on Apple Silicon. See <a href="/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Does Ollama support MLX on Apple Silicon?</a> for details.',
          },
          {
            q: 'Is MLX faster than Ollama?',
            a: 'It depends on the model, chip and Ollama version, and since Ollama now uses MLX itself the gap is smaller than it used to be. Ollama\'s own benchmark showed Qwen3.5-35B-A3B decode rising from 58 to 112 tokens/s between version 0.18 (Q4_K_M) and 0.19 (NVFP4 on MLX). Those are different quantization formats, so run your own test on your model.',
          },
          {
            q: 'Is llama.cpp faster than Ollama?',
            a: 'Not necessarily. Ollama adds its own server, model management and runners, so a directly built llama.cpp can differ slightly in either direction depending on settings. PromptQuorum has not measured a consistent gap — choose llama.cpp for control, not for speed.',
          },
          {
            q: 'How do I run an MLX server with quantized models on Apple Silicon?',
            a: 'Install mlx-lm with <code>pip install mlx-lm</code>, then run <code>mlx_lm.server --model mlx-community/model-name</code> for an OpenAI-compatible endpoint. Pick a pre-quantized model from the mlx-community organization (4-bit variants are common), or quantize your own with <code>mlx_lm.convert --hf-path model-id -q</code>. See <a href="/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">How to convert Ollama models to MLX</a>.',
          },
          {
            q: 'Should I use LM Studio instead of Ollama on a Mac?',
            a: 'LM Studio is a GUI app that runs models with its MLX engine or llama.cpp, chosen per model. Ollama runs as a background service with an API and, since version 0.40, runs supported models on MLX itself. Choose LM Studio for a graphical model browser, Ollama for a service other apps call.',
          },
          {
            q: 'What is oMLX (also written omlx or olmx)?',
            a: 'oMLX is an open-source (Apache-2.0) MLX-based inference server for Apple Silicon by the developer jundot (<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). It is separate from Ollama and from Apple\'s mlx-lm. See our <a href="/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX review</a>.',
          },
          {
            q: 'Can I use MLX on Windows or Linux?',
            a: 'MLX is built for Apple Silicon (M1 and later), and mlx-lm is mainly used there. Ollama\'s release notes also list MLX runner changes for NVIDIA GPUs (version 0.40.4), but on Windows and Linux the usual choices remain Ollama and llama.cpp with CUDA or ROCm.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Radeon 6800M for Local LLM: Full Setup Guide](/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Performance Guide](/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-de.webp',
    title: 'MLX vs Ollama vs llama.cpp: Welche Inferenz-Engine sollten Sie verwenden?',
    seoTitle: 'MLX vs. Ollama vs. llama.cpp: Was passt zum Mac 2026?',
    metaDescription: 'Ollama nutzt auf Apple Silicon jetzt MLX (seit 0.19). Ollama, mlx-lm, llama.cpp und LM Studio im Vergleich: welche Engine auf Mac, NVIDIA oder CPU.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'MLX vs Ollama vs llama.cpp: Welche Inferenz-Engine sollten Sie verwenden?',
        answer: 'Ollama basiert auf Apple Silicon nicht mehr nur auf llama.cpp: Version 0.19 (März 2026) brachte ein MLX-Backend, und seit Version 0.40 laufen die von der MLX-Runtime unterstützten Architekturen automatisch auf MLX. Nutzen Sie Ollama für die einfachste Einrichtung, mlx-lm für direkte Python-Kontrolle auf dem Mac und llama.cpp für maximale Kontrolle oder Nicht-Apple-Hardware.',
        bullets: [
          'Ollama: jede Plattform, OpenAI-kompatible API, MLX-Runner für unterstützte Modelle auf Apple Silicon',
          'mlx-lm: nur Apple Silicon, Python-Paket mit eigenem OpenAI-kompatiblem Server',
          'llama.cpp: jede Hardware, die meiste Kontrolle über Quantisierung und Sampling, direkt kompiliert',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama hat in Version 0.19 (Vorschau, 30. März 2026) ein MLX-Backend für Apple Silicon ergänzt; laut Release Notes laufen seit Version 0.40 (25. September 2026) die von der MLX-Runtime unterstützten Modellarchitekturen automatisch auf MLX',
          'Im eigenen Benchmark von Ollama stieg die Decode-Geschwindigkeit für Qwen3.5-35B-A3B von 58 auf 112 Token/s zwischen Version 0.18 (Q4_K_M) und 0.19 (NVFP4 auf MLX) — unterschiedliche Quantisierungsformate, also als Ollama-Angabe für dieses Modell zu lesen, nicht als allgemeines MLX-vs-llama.cpp-Verhältnis',
          'mlx-lm ist der direkte Weg, wenn Sie Python-Kontrolle oder ein Modell brauchen, das Ollamas MLX-Runner nicht abdeckt; direkt kompiliertes llama.cpp bietet die meiste Kontrolle und läuft auf jeder Hardware',
        ],
      },
      body1: {
        title: 'Vergleich der Engines',
        content: [
          '<strong>Wählen Sie Ollama, wenn Sie Ein-Befehl-Setup und eine stabile OpenAI-kompatible API auf jeder Plattform wollen.</strong> Auf Apple Silicon führte <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> in Version 0.19 (30. März 2026) ein MLX-Backend als Vorschau ein (laut Ankündigung auf <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> für Qwen3.5-35B-A3B auf Macs mit mehr als 32 GB Unified Memory). Version 0.40 (25. September 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) führt jede von der MLX-Runtime unterstützte Architektur automatisch auf MLX aus; die Release Notes nennen qwen3.5, qwen3.6 und gemma4.',
          '<strong>Wählen Sie mlx-lm, wenn Sie Apple Silicon haben und MLX direkt nutzen wollen.</strong> <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> ist ein Python-Paket (<code>pip install mlx-lm</code>) von Apples ml-explore-Gruppe mit eigenem OpenAI-kompatiblem Server (<code>mlx_lm.server</code>) und lädt Modelle aus der Organisation <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> auf Hugging Face. Nachteil: nur Apple Silicon, und Python-Umgebung sowie Serverprozess verwalten Sie selbst.',
          '<strong>Wählen Sie llama.cpp direkt, wenn Sie maximale Kontrolle brauchen</strong>: eigene Quantisierung, bestimmte Sampling-Parameter oder Inferenz in einer C/C++-Anwendung. Der Einrichtungsaufwand ist höher als bei Ollama, dafür landen neue Funktionen zuerst in <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a>. Auf Macs nutzt es Metal, nicht MLX.',
          '<strong>LM Studio und oMLX sind weitere Mac-Optionen.</strong> <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> ist eine GUI-App, die Modelle mit der MLX-Engine oder mit llama.cpp ausführt, pro Modell wählbar. oMLX ist ein quelloffener MLX-basierter Inferenzserver für Apple Silicon — siehe unseren <a href="/de/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX-Test</a>.',
        ],
        columns: ['Engine', 'Am besten für', 'Mac-Backend', 'Einrichtung', 'Geprüfte Version'],
        rows: [
          { 'Engine': 'Ollama', 'Am besten für': 'Jede Plattform, einfache API', 'Mac-Backend': 'MLX (unterstützte Modelle) / llama.cpp', 'Einrichtung': 'Einfach (eine Installation)', 'Geprüfte Version': 'v0.40.6 (16. Oktober 2026)' },
          { 'Engine': 'mlx-lm', 'Am besten für': 'Apple Silicon, Python-Kontrolle', 'Mac-Backend': 'MLX nativ', 'Einrichtung': 'Mittel (pip install)', 'Geprüfte Version': 'v0.32.2 (16. Oktober 2026)' },
          { 'Engine': 'llama.cpp', 'Am besten für': 'Maximale Kontrolle, jede Hardware', 'Mac-Backend': 'llama.cpp + Metal', 'Einrichtung': 'Mittel (brew oder Build)', 'Geprüfte Version': 'b11714 (17. Oktober 2026)' },
          { 'Engine': 'LM Studio', 'Am besten für': 'GUI, MLX oder llama.cpp pro Modell', 'Mac-Backend': 'MLX-Engine / llama.cpp', 'Einrichtung': 'Einfach (Installer)', 'Geprüfte Version': 'MLX-Engine v1.8.5 (5. Juni 2026)' },
        ],
      },
      body2: {
        title: 'Beste Wahl nach Hardware',
        content: [
          '<strong>Mac mit Apple Silicon: Beginnen Sie mit Ollama und wechseln Sie zu mlx-lm, wenn Sie mehr Kontrolle brauchen.</strong> Installieren Sie <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> und laden Sie ein Modell aus der Bibliothek; ist die Architektur von der MLX-Runtime unterstützt, läuft sie automatisch auf MLX. Wählen Sie mlx-lm (<code>pip install mlx-lm</code>, Modelle aus <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>) für Python-Skripte oder ein Modell, das Ollama nicht auf MLX ausführt. Für eine OpenAI-kompatible API von mlx-lm starten Sie <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>NVIDIA-GPU oder andere Hardware: Nutzen Sie <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> Ein Befehl installiert es, Modelle werden automatisch geladen, und es stellt eine OpenAI-kompatible API auf Port 11434 bereit. Für fortgeschrittene Kontrolle ohne Ollamas Schicht kompilieren Sie <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> direkt und nutzen den eingebauten Servermodus.',
          'PromptQuorum hat diese Engines nicht direkt gegeneinander gemessen. Die Geschwindigkeit hängt von Chip, Modell, Quantisierung und Kontextlänge ab — testen Sie Ihr eigenes Modell, bevor Sie sich festlegen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu MLX, Ollama und llama.cpp',
        faqs: [
          {
            q: 'Nutzt Ollama auf dem Mac MLX?',
            a: 'Ja, für unterstützte Modelle. Ollama 0.19 (30. März 2026) brachte ein MLX-Backend als Vorschau, und seit Version 0.40 (25. September 2026) laufen von der MLX-Runtime unterstützte Modellarchitekturen auf Apple Silicon automatisch auf MLX. Details unter <a href="/de/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Unterstützt Ollama MLX auf Apple Silicon?</a>.',
          },
          {
            q: 'Ist MLX schneller als Ollama?',
            a: 'Das hängt von Modell, Chip und Ollama-Version ab; da Ollama inzwischen selbst MLX nutzt, ist der Abstand kleiner als früher. Ollamas eigener Benchmark zeigte für Qwen3.5-35B-A3B einen Anstieg der Decode-Geschwindigkeit von 58 auf 112 Token/s zwischen Version 0.18 (Q4_K_M) und 0.19 (NVFP4 auf MLX). Das sind unterschiedliche Quantisierungsformate — testen Sie Ihr eigenes Modell.',
          },
          {
            q: 'Ist llama.cpp schneller als Ollama?',
            a: 'Nicht unbedingt. Ollama bringt eigenen Server, Modellverwaltung und Runner mit, daher kann direkt gebautes llama.cpp je nach Einstellungen leicht in beide Richtungen abweichen. PromptQuorum hat keinen durchgängigen Unterschied gemessen — wählen Sie llama.cpp wegen der Kontrolle, nicht wegen der Geschwindigkeit.',
          },
          {
            q: 'Wie betreibe ich einen MLX-Server mit quantisierten Modellen auf Apple Silicon?',
            a: 'Installieren Sie mlx-lm mit <code>pip install mlx-lm</code> und starten Sie <code>mlx_lm.server --model mlx-community/model-name</code> für einen OpenAI-kompatiblen Endpunkt. Wählen Sie ein vorquantisiertes Modell aus der Organisation mlx-community (4-Bit-Varianten sind üblich) oder quantisieren Sie selbst mit <code>mlx_lm.convert --hf-path model-id -q</code>. Siehe <a href="/de/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Wie man Ollama-Modelle in MLX konvertiert</a>.',
          },
          {
            q: 'Sollte ich auf dem Mac LM Studio statt Ollama nutzen?',
            a: 'LM Studio ist eine GUI-App, die Modelle pro Modell wählbar mit der MLX-Engine oder llama.cpp ausführt. Ollama läuft als Hintergrunddienst mit API und führt seit Version 0.40 unterstützte Modelle selbst auf MLX aus. Wählen Sie LM Studio für einen grafischen Modellbrowser, Ollama für einen Dienst, den andere Apps aufrufen.',
          },
          {
            q: 'Was ist oMLX (auch omlx oder olmx geschrieben)?',
            a: 'oMLX ist ein quelloffener (Apache-2.0) MLX-basierter Inferenzserver für Apple Silicon vom Entwickler jundot (<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). Er ist unabhängig von Ollama und von Apples mlx-lm. Siehe unseren <a href="/de/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX-Test</a>.',
          },
          {
            q: 'Kann ich MLX unter Windows oder Linux verwenden?',
            a: 'MLX ist für Apple Silicon (M1 und neuer) gebaut, und mlx-lm wird hauptsächlich dort genutzt. Ollamas Release Notes nennen zwar auch MLX-Runner-Änderungen für NVIDIA-GPUs (Version 0.40.4), doch unter Windows und Linux bleiben Ollama und llama.cpp mit CUDA oder ROCm die üblichen Optionen.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Radeon 6800M für lokale LLMs: Vollständiger Setup-Leitfaden](/de/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Performance-Leitfaden](/de/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-fr.webp',
    title: 'MLX vs Ollama vs llama.cpp : quel moteur d\'inférence utiliser ?',
    seoTitle: 'MLX vs Ollama vs llama.cpp : lequel sur Mac en 2026 ?',
    metaDescription: 'Ollama utilise désormais MLX sur Apple Silicon (depuis 0.19). Comparez Ollama, mlx-lm, llama.cpp et LM Studio : quel moteur choisir sur Mac, NVIDIA ou CPU.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'MLX vs Ollama vs llama.cpp : quel moteur d\'inférence utiliser ?',
        answer: 'Sur Apple Silicon, Ollama n\'est plus limité à llama.cpp : la version 0.19 (mars 2026) a ajouté un backend MLX et, depuis la version 0.40, les architectures prises en charge par son runtime MLX s\'exécutent automatiquement sur MLX. Utilisez Ollama pour la configuration la plus simple, mlx-lm pour un contrôle Python direct sur Mac, et llama.cpp pour un contrôle maximal ou un matériel non-Apple.',
        bullets: [
          'Ollama : toute plateforme, API compatible OpenAI, runner MLX pour les modèles pris en charge sur Apple Silicon',
          'mlx-lm : Apple Silicon uniquement, paquet Python avec son propre serveur compatible OpenAI',
          'llama.cpp : tout matériel, le plus de contrôle sur la quantification et l\'échantillonnage, compilé directement',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama a ajouté un backend MLX pour Apple Silicon dans la version 0.19 (préversion, 30 mars 2026) ; selon ses notes de version, depuis la version 0.40 (25 septembre 2026) les architectures prises en charge par le runtime MLX s\'exécutent automatiquement sur MLX',
          'Dans le benchmark d\'Ollama lui-même, le décodage de Qwen3.5-35B-A3B est passé de 58 à 112 tokens/s entre la version 0.18 (Q4_K_M) et la 0.19 (NVFP4 sur MLX) — des formats de quantification différents, donc à lire comme un chiffre d\'Ollama pour ce modèle, pas comme un rapport général MLX/llama.cpp',
          'mlx-lm est la voie directe si vous voulez un contrôle Python ou un modèle que le runner MLX d\'Ollama ne couvre pas ; llama.cpp compilé directement offre le plus de contrôle et fonctionne sur tout matériel',
        ],
      },
      body1: {
        title: 'Comparaison des moteurs',
        content: [
          '<strong>Choisissez Ollama si vous voulez une installation en une commande et une API stable compatible OpenAI</strong> sur toute plateforme. Sur Apple Silicon, <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> a introduit un backend MLX en préversion dans la version 0.19 (30 mars 2026 ; selon l\'annonce <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a>, pour Qwen3.5-35B-A3B sur des Mac avec plus de 32 Go de mémoire unifiée). La version 0.40 (25 septembre 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) exécute automatiquement sur MLX toute architecture prise en charge par son runtime MLX ; les notes de version citent qwen3.5, qwen3.6 et gemma4.',
          '<strong>Choisissez mlx-lm si vous avez Apple Silicon et voulez MLX directement.</strong> <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> est un paquet Python (<code>pip install mlx-lm</code>) du groupe ml-explore d\'Apple, avec son propre serveur compatible OpenAI (<code>mlx_lm.server</code>) ; il charge les modèles de l\'organisation <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> sur Hugging Face. Contrepartie : Apple Silicon uniquement, et vous gérez vous-même l\'environnement Python et le processus serveur.',
          '<strong>Choisissez llama.cpp directement si vous avez besoin d\'un contrôle maximal</strong> : quantification personnalisée, paramètres d\'échantillonnage précis ou inférence intégrée à une application C/C++. L\'installation est plus lourde qu\'avec Ollama, mais les nouveautés arrivent dans <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> avant les surcouches. Sur Mac, il utilise Metal, pas MLX.',
          '<strong>LM Studio et oMLX sont les autres options sur Mac.</strong> <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> est une application graphique qui exécute les modèles avec son moteur MLX ou avec llama.cpp, au choix par modèle. oMLX est un serveur d\'inférence open source basé sur MLX pour Apple Silicon — voir notre <a href="/fr/power-local-llm/omlx-review" class="text-primary hover:underline">test d\'oMLX</a>.',
        ],
        columns: ['Moteur', 'Idéal pour', 'Backend sur Mac', 'Installation', 'Version vérifiée'],
        rows: [
          { 'Moteur': 'Ollama', 'Idéal pour': 'Toute plateforme, API simple', 'Backend sur Mac': 'MLX (modèles pris en charge) / llama.cpp', 'Installation': 'Facile (une installation)', 'Version vérifiée': 'v0.40.6 (16 octobre 2026)' },
          { 'Moteur': 'mlx-lm', 'Idéal pour': 'Apple Silicon, contrôle Python', 'Backend sur Mac': 'MLX natif', 'Installation': 'Moyenne (pip install)', 'Version vérifiée': 'v0.32.2 (16 octobre 2026)' },
          { 'Moteur': 'llama.cpp', 'Idéal pour': 'Contrôle maximal, tout matériel', 'Backend sur Mac': 'llama.cpp + Metal', 'Installation': 'Moyenne (brew ou build)', 'Version vérifiée': 'b11714 (17 octobre 2026)' },
          { 'Moteur': 'LM Studio', 'Idéal pour': 'GUI, MLX ou llama.cpp par modèle', 'Backend sur Mac': 'Moteur MLX / llama.cpp', 'Installation': 'Facile (installeur)', 'Version vérifiée': 'Moteur MLX v1.8.5 (5 juin 2026)' },
        ],
      },
      body2: {
        title: 'Meilleur choix selon le matériel',
        content: [
          '<strong>Mac avec Apple Silicon : commencez par Ollama, passez à mlx-lm quand vous avez besoin de plus de contrôle.</strong> Installez <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> et téléchargez un modèle de sa bibliothèque ; si l\'architecture est prise en charge par son runtime MLX, il s\'exécute automatiquement sur MLX. Choisissez mlx-lm (<code>pip install mlx-lm</code>, modèles de <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>) pour scripter en Python ou pour un modèle qu\'Ollama n\'exécute pas sur MLX. Pour une API compatible OpenAI avec mlx-lm, lancez <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>GPU NVIDIA ou autre matériel : utilisez <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> Une commande l\'installe, les modèles se téléchargent automatiquement et il expose une API compatible OpenAI sur le port 11434. Pour un contrôle avancé sans la couche d\'Ollama, compilez <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> directement et utilisez son mode serveur intégré.',
          'PromptQuorum n\'a pas comparé ces moteurs directement. La vitesse dépend de la puce, du modèle, de la quantification et de la longueur de contexte : testez votre propre modèle avant de vous engager.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur MLX, Ollama et llama.cpp',
        faqs: [
          {
            q: 'Ollama utilise-t-il MLX sur Mac ?',
            a: 'Oui, pour les modèles pris en charge. Ollama 0.19 (30 mars 2026) a ajouté un backend MLX en préversion et, depuis la version 0.40 (25 septembre 2026), les architectures prises en charge par son runtime MLX s\'exécutent automatiquement sur MLX sur Apple Silicon. Détails dans <a href="/fr/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Ollama prend-il en charge MLX sur Apple Silicon ?</a>.',
          },
          {
            q: 'MLX est-il plus rapide qu\'Ollama ?',
            a: 'Cela dépend du modèle, de la puce et de la version d\'Ollama ; comme Ollama utilise maintenant MLX lui-même, l\'écart est plus faible qu\'avant. Le benchmark d\'Ollama montre un décodage de Qwen3.5-35B-A3B passant de 58 à 112 tokens/s entre la version 0.18 (Q4_K_M) et la 0.19 (NVFP4 sur MLX). Les formats de quantification diffèrent : testez votre propre modèle.',
          },
          {
            q: 'llama.cpp est-il plus rapide qu\'Ollama ?',
            a: 'Pas forcément. Ollama ajoute son propre serveur, sa gestion des modèles et ses runners, donc un llama.cpp compilé directement peut différer légèrement dans un sens ou l\'autre selon les réglages. PromptQuorum n\'a pas mesuré d\'écart constant — choisissez llama.cpp pour le contrôle, pas pour la vitesse.',
          },
          {
            q: 'Comment lancer un serveur MLX avec des modèles quantifiés sur Apple Silicon ?',
            a: 'Installez mlx-lm avec <code>pip install mlx-lm</code>, puis lancez <code>mlx_lm.server --model mlx-community/model-name</code> pour obtenir un point d\'accès compatible OpenAI. Choisissez un modèle déjà quantifié de l\'organisation mlx-community (les variantes 4 bits sont courantes) ou quantifiez le vôtre avec <code>mlx_lm.convert --hf-path model-id -q</code>. Voir <a href="/fr/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Comment convertir des modèles Ollama en MLX</a>.',
          },
          {
            q: 'Faut-il utiliser LM Studio plutôt qu\'Ollama sur Mac ?',
            a: 'LM Studio est une application graphique qui exécute les modèles avec son moteur MLX ou llama.cpp, au choix par modèle. Ollama tourne comme service en arrière-plan avec une API et, depuis la version 0.40, exécute lui-même les modèles pris en charge sur MLX. Choisissez LM Studio pour un navigateur de modèles graphique, Ollama pour un service appelé par d\'autres applications.',
          },
          {
            q: 'Qu\'est-ce qu\'oMLX (aussi écrit omlx ou olmx) ?',
            a: 'oMLX est un serveur d\'inférence open source (Apache-2.0) basé sur MLX pour Apple Silicon, développé par jundot (<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). Il est distinct d\'Ollama et du mlx-lm d\'Apple. Voir notre <a href="/fr/power-local-llm/omlx-review" class="text-primary hover:underline">test d\'oMLX</a>.',
          },
          {
            q: 'Puis-je utiliser MLX sous Windows ou Linux ?',
            a: 'MLX est conçu pour Apple Silicon (M1 et suivants) et mlx-lm y est surtout utilisé. Les notes de version d\'Ollama mentionnent aussi des changements du runner MLX pour les GPU NVIDIA (version 0.40.4), mais sous Windows et Linux les choix habituels restent Ollama et llama.cpp avec CUDA ou ROCm.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Radeon 6800M pour LLM local : Guide complet](/fr/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan : Guide de performance](/fr/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-ja.webp',
    title: 'MLX vs Ollama vs llama.cpp：どの推論エンジンを使うべきですか？',
    seoTitle: 'MLX vs Ollama vs llama.cpp：2026年のMacはどれ？',
    metaDescription: 'OllamaはApple SiliconでMLXを利用（0.19以降）。Ollama・mlx-lm・llama.cpp・LM Studioを比較し、Mac・NVIDIA・CPUでの選び方を解説。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'MLX vs Ollama vs llama.cpp：どの推論エンジンを使うべきですか？',
        answer: 'Apple Siliconでは、Ollamaはもはやllama.cpp専用ではありません。バージョン0.19（2026年3月）でMLXバックエンドが加わり、バージョン0.40以降はMLXランタイムが対応するアーキテクチャが自動的にMLXで動作します。最も簡単な導入ならOllama、MacでPythonから直接制御するならmlx-lm、最大限の制御やApple以外のハードウェアならllama.cppを使ってください。',
        bullets: [
          'Ollama：あらゆるプラットフォーム、OpenAI互換API、Apple Siliconでは対応モデルにMLXランナー',
          'mlx-lm：Apple Silicon専用、独自のOpenAI互換サーバーを備えたPythonパッケージ',
          'llama.cpp：あらゆるハードウェア、量子化とサンプリングを最も細かく制御、直接コンパイル',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollamaはバージョン0.19（プレビュー、2026年3月30日）でApple Silicon向けMLXバックエンドを追加しました。リリースノートによると、バージョン0.40（2026年9月25日）以降はMLXランタイムが対応するモデルアーキテクチャが自動的にMLXで動作します',
          'Ollama自身のベンチマークでは、Qwen3.5-35B-A3Bのデコード速度はバージョン0.18（Q4_K_M）から0.19（MLX上のNVFP4）で58から112 tokens/sに向上しました。量子化形式が異なるため、一般的なMLXとllama.cppの比率ではなく、そのモデルに関するOllamaの数値として読んでください',
          'PythonからMLXを制御したい場合や、OllamaのMLXランナーが対応しないモデルにはmlx-lmが直接的な選択肢です。直接コンパイルしたllama.cppは最も細かく制御でき、あらゆるハードウェアで動作します',
        ],
      },
      body1: {
        title: 'エンジン別の比較',
        content: [
          '<strong>1コマンドで導入でき、安定したOpenAI互換APIが欲しいならOllamaを選びましょう</strong>（全プラットフォーム対応）。Apple Siliconでは、<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>がバージョン0.19（2026年3月30日）でMLXバックエンドをプレビューとして導入しました（<a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a>の発表によると、対象は統合メモリ32GB超のMac上のQwen3.5-35B-A3B）。バージョン0.40（2026年9月25日, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>）では、MLXランタイムが対応するすべてのアーキテクチャが自動的にMLXで動作し、リリースノートにはqwen3.5、qwen3.6、gemma4が挙げられています。',
          '<strong>Apple SiliconでMLXを直接使いたいならmlx-lmを選びましょう。</strong><a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a>はAppleのml-exploreグループによるPythonパッケージ（<code>pip install mlx-lm</code>）で、独自のOpenAI互換サーバー（<code>mlx_lm.server</code>）を備え、Hugging Faceの<a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>組織からモデルを読み込みます。トレードオフ：Apple Silicon専用で、Python環境とサーバープロセスは自分で管理します。',
          '<strong>最大限の制御が必要ならllama.cppを直接使いましょう</strong>：独自の量子化、特定のサンプリングパラメータ、C/C++アプリへの組み込み推論など。導入コストはOllamaより高いものの、新機能はラッパーより先に<a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a>に入ります。MacではMetalを使い、MLXは使いません。',
          '<strong>LM StudioとoMLXもMacの選択肢です。</strong><a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a>はGUIアプリで、モデルごとにMLXエンジンまたはllama.cppを選んで実行できます。oMLXはApple Silicon向けのオープンソースのMLXベース推論サーバーです。詳しくは<a href="/ja/power-local-llm/omlx-review" class="text-primary hover:underline">oMLXレビュー</a>をご覧ください。',
        ],
        columns: ['エンジン', '最適な用途', 'Macのバックエンド', '導入', '確認した版'],
        rows: [
          { 'エンジン': 'Ollama', '最適な用途': '全プラットフォーム、簡単なAPI', 'Macのバックエンド': 'MLX（対応モデル）/ llama.cpp', '導入': '簡単（インストール1回）', '確認した版': 'v0.40.6（2026年10月16日）' },
          { 'エンジン': 'mlx-lm', '最適な用途': 'Apple Silicon、Python制御', 'Macのバックエンド': 'MLXネイティブ', '導入': '中（pip install）', '確認した版': 'v0.32.2（2026年10月16日）' },
          { 'エンジン': 'llama.cpp', '最適な用途': '最大限の制御、全ハードウェア', 'Macのバックエンド': 'llama.cpp + Metal', '導入': '中（brewまたはビルド）', '確認した版': 'b11714（2026年10月17日）' },
          { 'エンジン': 'LM Studio', '最適な用途': 'GUI、モデルごとにMLX/llama.cpp', 'Macのバックエンド': 'MLXエンジン / llama.cpp', '導入': '簡単（インストーラー）', '確認した版': 'MLXエンジン v1.8.5（2026年6月5日）' },
        ],
      },
      body2: {
        title: 'ハードウェア別のおすすめ',
        content: [
          '<strong>Apple SiliconのMacなら、まずOllamaから始め、さらに制御が必要になったらmlx-lmに移りましょう。</strong><a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>をインストールしてライブラリからモデルを取得すると、アーキテクチャがMLXランタイムの対応範囲であれば自動的にMLXで動作します。Pythonスクリプトで使いたい場合や、OllamaがMLXで実行しないモデルにはmlx-lm（<code>pip install mlx-lm</code>、モデルは<a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>）を選んでください。mlx-lmでOpenAI互換APIを使うには<code>mlx_lm.server --model mlx-community/model-name</code>を実行します。',
          '<strong>NVIDIA GPUやその他のハードウェアなら<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>を使いましょう。</strong>1コマンドでインストールでき、モデルは自動でダウンロードされ、ポート11434でOpenAI互換APIを公開します。Ollamaの層を介さない高度な制御が必要なら、<a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a>を直接コンパイルして組み込みのサーバーモードを使ってください。',
          'PromptQuorumはこれらのエンジンを直接比較測定していません。速度はチップ、モデル、量子化、コンテキスト長によって変わるため、決める前にご自身のモデルで試してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'MLX・Ollama・llama.cppのよくある質問',
        faqs: [
          {
            q: 'OllamaはMacでMLXを使いますか？',
            a: 'はい、対応モデルでは使います。Ollama 0.19（2026年3月30日）がMLXバックエンドをプレビューとして追加し、バージョン0.40（2026年9月25日）以降はMLXランタイムが対応するモデルアーキテクチャがApple Silicon上で自動的にMLXで動作します。詳細は<a href="/ja/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">OllamaはApple SiliconでMLXをサポートしていますか？</a>をご覧ください。',
          },
          {
            q: 'MLXはOllamaより速いですか？',
            a: 'モデル、チップ、Ollamaのバージョンによります。Ollama自身がMLXを使うようになったため、以前より差は小さくなっています。Ollama自身のベンチマークでは、Qwen3.5-35B-A3Bのデコード速度がバージョン0.18（Q4_K_M）から0.19（MLX上のNVFP4）で58から112 tokens/sに向上しました。量子化形式が異なるため、ご自身のモデルで試してください。',
          },
          {
            q: 'llama.cppはOllamaより速いですか？',
            a: '必ずしもそうではありません。Ollamaは独自のサーバー、モデル管理、ランナーを加えるため、直接ビルドしたllama.cppは設定次第でどちらの方向にもわずかに差が出ます。PromptQuorumは一貫した差を測定していません。llama.cppは速度ではなく制御のために選んでください。',
          },
          {
            q: 'Apple Siliconで量子化モデルのMLXサーバーを動かすには？',
            a: '<code>pip install mlx-lm</code>でmlx-lmをインストールし、<code>mlx_lm.server --model mlx-community/model-name</code>を実行するとOpenAI互換エンドポイントが得られます。mlx-communityにある量子化済みモデル（4ビット版が一般的）を選ぶか、<code>mlx_lm.convert --hf-path model-id -q</code>で自分で量子化できます。<a href="/ja/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">OllamaモデルをMLXに変換する方法</a>も参照してください。',
          },
          {
            q: 'MacではOllamaの代わりにLM Studioを使うべきですか？',
            a: 'LM StudioはGUIアプリで、モデルごとにMLXエンジンまたはllama.cppを選んで実行します。OllamaはバックグラウンドサービスとしてAPIを提供し、バージョン0.40以降は対応モデルを自らMLXで実行します。グラフィカルなモデルブラウザが欲しいならLM Studio、他のアプリから呼び出すサービスが欲しいならOllamaを選んでください。',
          },
          {
            q: 'oMLX（omlxやolmxとも表記）とは何ですか？',
            a: 'oMLXは、開発者jundotによるApple Silicon向けのオープンソース（Apache-2.0）のMLXベース推論サーバーです（<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>）。OllamaやAppleのmlx-lmとは別物です。<a href="/ja/power-local-llm/omlx-review" class="text-primary hover:underline">oMLXレビュー</a>もご覧ください。',
          },
          {
            q: 'WindowsやLinuxでMLXを使えますか？',
            a: 'MLXはApple Silicon（M1以降）向けに作られており、mlx-lmも主にそこで使われます。OllamaのリリースノートにはNVIDIA GPU向けMLXランナーの変更（バージョン0.40.4）も記載されていますが、WindowsやLinuxでは引き続きOllamaや、CUDA/ROCmを使うllama.cppが一般的な選択肢です。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Radeon 6800MでローカルLLMを動かす：完全セットアップガイド](/ja/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan：パフォーマンスガイド](/ja/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-pt.webp',
    title: 'MLX vs Ollama vs llama.cpp: Qual motor de inferência usar?',
    seoTitle: 'MLX vs Ollama vs llama.cpp: qual usar no Mac em 2026?',
    metaDescription: 'O Ollama agora usa MLX no Apple Silicon (desde a 0.19). Compare Ollama, mlx-lm, llama.cpp e LM Studio: qual motor escolher no Mac, NVIDIA ou CPU.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple M5 family', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores escolhendo entre MLX, Ollama e llama.cpp para inferência local',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'MLX vs Ollama vs llama.cpp: qual motor de inferência usar?',
        answer: 'No Apple Silicon, o Ollama não se limita mais ao llama.cpp: a versão 0.19 (março de 2026) adicionou um backend MLX e, desde a versão 0.40, as arquiteturas compatíveis com seu runtime MLX rodam automaticamente em MLX. Use o Ollama pela configuração mais simples, o mlx-lm para controle direto em Python no Mac e o llama.cpp para controle máximo ou hardware que não seja da Apple.',
        bullets: [
          'Ollama: qualquer plataforma, API compatível com OpenAI, runner MLX para modelos compatíveis no Apple Silicon',
          'mlx-lm: apenas Apple Silicon, pacote Python com servidor próprio compatível com OpenAI',
          'llama.cpp: qualquer hardware, mais controle sobre quantização e amostragem, compilado diretamente',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Ollama adicionou um backend MLX para Apple Silicon na versão 0.19 (prévia, 30 de março de 2026); segundo as notas de versão, desde a versão 0.40 (25 de setembro de 2026) as arquiteturas compatíveis com o runtime MLX rodam automaticamente em MLX',
          'No benchmark do próprio Ollama, a velocidade de decodificação do Qwen3.5-35B-A3B subiu de 58 para 112 tokens/s entre a versão 0.18 (Q4_K_M) e a 0.19 (NVFP4 em MLX) — formatos de quantização diferentes, portanto é um número do Ollama para esse modelo, não uma proporção geral MLX vs llama.cpp',
          'O mlx-lm é o caminho direto quando você quer controle em Python ou um modelo que o runner MLX do Ollama não cobre; o llama.cpp compilado diretamente dá o maior controle e roda em qualquer hardware',
        ],
      },
      body1: {
        title: 'Comparação entre os motores',
        content: [
          '<strong>Escolha o Ollama se quiser instalação com um comando e uma API estável compatível com OpenAI</strong> em qualquer plataforma. No Apple Silicon, o <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> introduziu um backend MLX como prévia na versão 0.19 (30 de março de 2026; segundo o anúncio em <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a>, para o Qwen3.5-35B-A3B em Macs com mais de 32 GB de memória unificada). A versão 0.40 (25 de setembro de 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) executa automaticamente em MLX toda arquitetura compatível com seu runtime MLX; as notas de versão citam qwen3.5, qwen3.6 e gemma4.',
          '<strong>Escolha o mlx-lm se tiver Apple Silicon e quiser MLX diretamente.</strong> O <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> é um pacote Python (<code>pip install mlx-lm</code>) do grupo ml-explore da Apple, com servidor próprio compatível com OpenAI (<code>mlx_lm.server</code>); ele carrega modelos da organização <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> no Hugging Face. Contrapartida: funciona só no Apple Silicon, e você gerencia o ambiente Python e o processo do servidor.',
          '<strong>Escolha o llama.cpp diretamente se precisar de controle máximo</strong>: quantização personalizada, parâmetros de amostragem específicos ou inferência embutida em um aplicativo C/C++. A instalação dá mais trabalho que a do Ollama, mas os recursos novos chegam ao <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> antes de chegar às camadas acima dele. No Mac, ele usa Metal, não MLX.',
          '<strong>LM Studio e oMLX são as outras opções no Mac.</strong> O <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> é um aplicativo com interface gráfica que executa modelos com seu motor MLX ou com o llama.cpp, à escolha por modelo. O oMLX é um servidor de inferência de código aberto baseado em MLX para Apple Silicon — veja nossa <a href="/pt/power-local-llm/omlx-review" class="text-primary hover:underline">análise do oMLX</a>.',
        ],
        columns: ['Motor', 'Ideal para', 'Backend no Mac', 'Instalação', 'Versão verificada'],
        rows: [
          { 'Motor': 'Ollama', 'Ideal para': 'Qualquer plataforma, API fácil', 'Backend no Mac': 'MLX (modelos compatíveis) / llama.cpp', 'Instalação': 'Fácil (uma instalação)', 'Versão verificada': 'v0.40.6 (16 de outubro de 2026)' },
          { 'Motor': 'mlx-lm', 'Ideal para': 'Apple Silicon, controle em Python', 'Backend no Mac': 'MLX nativo', 'Instalação': 'Média (pip install)', 'Versão verificada': 'v0.32.2 (16 de outubro de 2026)' },
          { 'Motor': 'llama.cpp', 'Ideal para': 'Controle máximo, qualquer hardware', 'Backend no Mac': 'llama.cpp + Metal', 'Instalação': 'Média (brew ou compilar)', 'Versão verificada': 'b11714 (17 de outubro de 2026)' },
          { 'Motor': 'LM Studio', 'Ideal para': 'GUI, MLX ou llama.cpp por modelo', 'Backend no Mac': 'Motor MLX / llama.cpp', 'Instalação': 'Fácil (instalador)', 'Versão verificada': 'Motor MLX v1.8.5 (5 de junho de 2026)' },
        ],
      },
      body2: {
        title: 'Melhor escolha por hardware',
        content: [
          '<strong>Se você tem um Mac com Apple Silicon: comece com o Ollama e passe para o mlx-lm quando precisar de mais controle.</strong> Instale o <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> e baixe um modelo da biblioteca; se a arquitetura for compatível com o runtime MLX, ele roda automaticamente em MLX. Escolha o mlx-lm (<code>pip install mlx-lm</code>, modelos de <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>) se quiser scripts em Python ou um modelo que o Ollama não executa em MLX. Para uma API compatível com OpenAI no mlx-lm, execute <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>Se você tem uma GPU NVIDIA ou outro hardware: use o <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> Um comando instala, os modelos são baixados automaticamente e ele expõe uma API compatível com OpenAI na porta 11434. Para controle avançado sem a camada do Ollama, compile o <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> diretamente e use o modo servidor embutido.',
          'A PromptQuorum não comparou esses motores diretamente. A velocidade depende do chip, do modelo, da quantização e do tamanho do contexto: teste o seu próprio modelo antes de decidir.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre MLX, Ollama e llama.cpp',
        faqs: [
          {
            q: 'O Ollama usa MLX no Mac?',
            a: 'Sim, para modelos compatíveis. O Ollama 0.19 (30 de março de 2026) adicionou um backend MLX como prévia e, desde a versão 0.40 (25 de setembro de 2026), as arquiteturas compatíveis com seu runtime MLX rodam automaticamente em MLX no Apple Silicon. Detalhes em <a href="/pt/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">O Ollama oferece suporte a MLX no Apple Silicon?</a>.',
          },
          {
            q: 'O MLX é mais rápido que o Ollama?',
            a: 'Depende do modelo, do chip e da versão do Ollama; como o Ollama agora usa MLX, a diferença é menor do que antes. O benchmark do próprio Ollama mostrou a decodificação do Qwen3.5-35B-A3B subindo de 58 para 112 tokens/s entre a versão 0.18 (Q4_K_M) e a 0.19 (NVFP4 em MLX). São formatos de quantização diferentes: teste o seu próprio modelo.',
          },
          {
            q: 'O llama.cpp é mais rápido que o Ollama?',
            a: 'Não necessariamente. O Ollama adiciona servidor próprio, gerenciamento de modelos e runners, então um llama.cpp compilado diretamente pode diferir um pouco, para mais ou para menos, conforme as configurações. A PromptQuorum não mediu uma diferença consistente — escolha o llama.cpp pelo controle, não pela velocidade.',
          },
          {
            q: 'Como rodar um servidor MLX com modelos quantizados no Apple Silicon?',
            a: 'Instale o mlx-lm com <code>pip install mlx-lm</code> e execute <code>mlx_lm.server --model mlx-community/model-name</code> para obter um endpoint compatível com OpenAI. Escolha um modelo já quantizado da organização mlx-community (variantes de 4 bits são comuns) ou quantize o seu com <code>mlx_lm.convert --hf-path model-id -q</code>. Veja <a href="/pt/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Como converter modelos do Ollama para MLX</a>.',
          },
          {
            q: 'Devo usar o LM Studio em vez do Ollama no Mac?',
            a: 'O LM Studio é um aplicativo gráfico que executa modelos com seu motor MLX ou com o llama.cpp, à escolha por modelo. O Ollama roda como serviço em segundo plano com uma API e, desde a versão 0.40, executa por conta própria em MLX os modelos compatíveis. Escolha o LM Studio por um navegador gráfico de modelos e o Ollama por um serviço que outros aplicativos chamam.',
          },
          {
            q: 'O que é o oMLX (também escrito omlx ou olmx)?',
            a: 'O oMLX é um servidor de inferência de código aberto (Apache-2.0) baseado em MLX para Apple Silicon, do desenvolvedor jundot (<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). É independente do Ollama e do mlx-lm da Apple. Veja nossa <a href="/pt/power-local-llm/omlx-review" class="text-primary hover:underline">análise do oMLX</a>.',
          },
          {
            q: 'Posso usar MLX no Windows ou no Linux?',
            a: 'O MLX foi feito para Apple Silicon (M1 e posteriores), e o mlx-lm é usado principalmente lá. As notas de versão do Ollama também citam mudanças no runner MLX para GPUs NVIDIA (versão 0.40.4), mas no Windows e no Linux as opções usuais continuam sendo Ollama e llama.cpp com CUDA ou ROCm.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Radeon 6800M para LLM local: Guia completo de configuração](/pt/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Guia de desempenho](/pt/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-es.webp',
    title: 'MLX vs Ollama vs llama.cpp: ¿Cuál motor de inferencia deberías usar?',
    seoTitle: 'MLX vs Ollama vs llama.cpp: ¿cuál en Mac en 2026?',
    metaDescription: 'Ollama ya usa MLX en Apple Silicon (desde 0.19). Compara Ollama, mlx-lm, llama.cpp y LM Studio: qué motor elegir en Mac, NVIDIA o CPU.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple M5 family', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermedio',
    audience: 'Desarrolladores eligiendo entre MLX, Ollama y llama.cpp para inferencia local',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: 'MLX vs Ollama vs llama.cpp: ¿qué motor de inferencia debes usar?',
        answer: 'En Apple Silicon, Ollama ya no se limita a llama.cpp: la versión 0.19 (marzo de 2026) añadió un backend MLX y, desde la versión 0.40, las arquitecturas que admite su runtime MLX se ejecutan automáticamente en MLX. Usa Ollama para la configuración más sencilla, mlx-lm para control directo en Python en un Mac y llama.cpp para el máximo control o hardware que no sea de Apple.',
        bullets: [
          'Ollama: cualquier plataforma, API compatible con OpenAI, runner MLX para modelos compatibles en Apple Silicon',
          'mlx-lm: solo Apple Silicon, paquete de Python con su propio servidor compatible con OpenAI',
          'llama.cpp: cualquier hardware, más control sobre cuantización y muestreo, compilado directamente',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama añadió un backend MLX para Apple Silicon en la versión 0.19 (vista previa, 30 de marzo de 2026); según sus notas de versión, desde la versión 0.40 (25 de septiembre de 2026) las arquitecturas compatibles con el runtime MLX se ejecutan automáticamente en MLX',
          'En el benchmark propio de Ollama, la velocidad de decodificación de Qwen3.5-35B-A3B pasó de 58 a 112 tokens/s entre la versión 0.18 (Q4_K_M) y la 0.19 (NVFP4 en MLX): formatos de cuantización distintos, así que es una cifra de Ollama para ese modelo, no una proporción general MLX frente a llama.cpp',
          'mlx-lm es la vía directa si quieres control en Python o un modelo que el runner MLX de Ollama no cubre; llama.cpp compilado directamente da el máximo control y funciona en cualquier hardware',
        ],
      },
      body1: {
        title: 'Comparación de motores',
        content: [
          '<strong>Elige Ollama si quieres instalación con un comando y una API estable compatible con OpenAI</strong> en cualquier plataforma. En Apple Silicon, <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> introdujo un backend MLX como vista previa en la versión 0.19 (30 de marzo de 2026; según el anuncio de <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a>, para Qwen3.5-35B-A3B en Mac con más de 32 GB de memoria unificada). La versión 0.40 (25 de septiembre de 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) ejecuta automáticamente en MLX toda arquitectura que admite su runtime MLX; las notas de versión citan qwen3.5, qwen3.6 y gemma4.',
          '<strong>Elige mlx-lm si tienes Apple Silicon y quieres MLX directamente.</strong> <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> es un paquete de Python (<code>pip install mlx-lm</code>) del grupo ml-explore de Apple con su propio servidor compatible con OpenAI (<code>mlx_lm.server</code>); carga modelos de la organización <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> en Hugging Face. Contrapartida: solo funciona en Apple Silicon y tú gestionas el entorno de Python y el proceso del servidor.',
          '<strong>Elige llama.cpp directamente si necesitas el máximo control</strong>: cuantización personalizada, parámetros de muestreo concretos o inferencia integrada en una aplicación C/C++. La instalación es más laboriosa que con Ollama, pero las novedades llegan a <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> antes que a las capas superiores. En Mac usa Metal, no MLX.',
          '<strong>LM Studio y oMLX son las otras opciones en Mac.</strong> <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> es una aplicación con interfaz gráfica que ejecuta modelos con su motor MLX o con llama.cpp, a elegir por modelo. oMLX es un servidor de inferencia de código abierto basado en MLX para Apple Silicon: consulta nuestro <a href="/es/power-local-llm/omlx-review" class="text-primary hover:underline">análisis de oMLX</a>.',
        ],
        columns: ['Motor', 'Ideal para', 'Backend en Mac', 'Instalación', 'Versión comprobada'],
        rows: [
          { 'Motor': 'Ollama', 'Ideal para': 'Cualquier plataforma, API fácil', 'Backend en Mac': 'MLX (modelos compatibles) / llama.cpp', 'Instalación': 'Fácil (una instalación)', 'Versión comprobada': 'v0.40.6 (16 de octubre de 2026)' },
          { 'Motor': 'mlx-lm', 'Ideal para': 'Apple Silicon, control en Python', 'Backend en Mac': 'MLX nativo', 'Instalación': 'Media (pip install)', 'Versión comprobada': 'v0.32.2 (16 de octubre de 2026)' },
          { 'Motor': 'llama.cpp', 'Ideal para': 'Máximo control, cualquier hardware', 'Backend en Mac': 'llama.cpp + Metal', 'Instalación': 'Media (brew o compilar)', 'Versión comprobada': 'b11714 (17 de octubre de 2026)' },
          { 'Motor': 'LM Studio', 'Ideal para': 'GUI, MLX o llama.cpp por modelo', 'Backend en Mac': 'Motor MLX / llama.cpp', 'Instalación': 'Fácil (instalador)', 'Versión comprobada': 'Motor MLX v1.8.5 (5 de junio de 2026)' },
        ],
      },
      body2: {
        title: 'Mejor opción según el hardware',
        content: [
          '<strong>Si tienes un Mac con Apple Silicon: empieza con Ollama y pasa a mlx-lm cuando necesites más control.</strong> Instala <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> y descarga un modelo de su biblioteca; si la arquitectura es compatible con su runtime MLX, se ejecuta automáticamente en MLX. Elige mlx-lm (<code>pip install mlx-lm</code>, modelos de <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>) si quieres scripts en Python o un modelo que Ollama no ejecuta en MLX. Para una API compatible con OpenAI desde mlx-lm, ejecuta <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>Si tienes una GPU NVIDIA u otro hardware: usa <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> Un comando lo instala, los modelos se descargan solos y expone una API compatible con OpenAI en el puerto 11434. Para control avanzado sin la capa de Ollama, compila <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> directamente y usa su modo servidor integrado.',
          'PromptQuorum no ha comparado estos motores directamente. La velocidad depende del chip, el modelo, la cuantización y la longitud de contexto: prueba tu propio modelo antes de decidir.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre MLX, Ollama y llama.cpp',
        faqs: [
          {
            q: '¿Ollama usa MLX en Mac?',
            a: 'Sí, para los modelos compatibles. Ollama 0.19 (30 de marzo de 2026) añadió un backend MLX como vista previa y, desde la versión 0.40 (25 de septiembre de 2026), las arquitecturas compatibles con su runtime MLX se ejecutan automáticamente en MLX en Apple Silicon. Más detalles en <a href="/es/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">¿Ollama es compatible con MLX en Apple Silicon?</a>.',
          },
          {
            q: '¿MLX es más rápido que Ollama?',
            a: 'Depende del modelo, del chip y de la versión de Ollama; como Ollama ya usa MLX, la diferencia es menor que antes. El benchmark de Ollama mostró que la decodificación de Qwen3.5-35B-A3B pasó de 58 a 112 tokens/s entre la versión 0.18 (Q4_K_M) y la 0.19 (NVFP4 en MLX). Son formatos de cuantización distintos: prueba tu propio modelo.',
          },
          {
            q: '¿llama.cpp es más rápido que Ollama?',
            a: 'No necesariamente. Ollama añade su propio servidor, gestión de modelos y runners, por lo que un llama.cpp compilado directamente puede diferir ligeramente en cualquier sentido según la configuración. PromptQuorum no ha medido una diferencia constante: elige llama.cpp por el control, no por la velocidad.',
          },
          {
            q: '¿Cómo ejecuto un servidor MLX con modelos cuantizados en Apple Silicon?',
            a: 'Instala mlx-lm con <code>pip install mlx-lm</code> y ejecuta <code>mlx_lm.server --model mlx-community/model-name</code> para obtener un endpoint compatible con OpenAI. Elige un modelo ya cuantizado de la organización mlx-community (las variantes de 4 bits son habituales) o cuantiza el tuyo con <code>mlx_lm.convert --hf-path model-id -q</code>. Consulta <a href="/es/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Cómo convertir modelos de Ollama a MLX</a>.',
          },
          {
            q: '¿Debo usar LM Studio en lugar de Ollama en un Mac?',
            a: 'LM Studio es una aplicación gráfica que ejecuta modelos con su motor MLX o con llama.cpp, a elegir por modelo. Ollama funciona como servicio en segundo plano con una API y, desde la versión 0.40, ejecuta por sí mismo en MLX los modelos compatibles. Elige LM Studio por su explorador gráfico de modelos y Ollama por un servicio al que llaman otras aplicaciones.',
          },
          {
            q: '¿Qué es oMLX (también escrito omlx u olmx)?',
            a: 'oMLX es un servidor de inferencia de código abierto (Apache-2.0) basado en MLX para Apple Silicon, del desarrollador jundot (<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). Es independiente de Ollama y del mlx-lm de Apple. Consulta nuestro <a href="/es/power-local-llm/omlx-review" class="text-primary hover:underline">análisis de oMLX</a>.',
          },
          {
            q: '¿Puedo usar MLX en Windows o Linux?',
            a: 'MLX está pensado para Apple Silicon (M1 y posteriores) y mlx-lm se usa sobre todo allí. Las notas de versión de Ollama también mencionan cambios del runner MLX para GPU NVIDIA (versión 0.40.4), pero en Windows y Linux las opciones habituales siguen siendo Ollama y llama.cpp con CUDA o ROCm.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Radeon 6800M para LLM local: Guía completa de configuración](/es/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: Guía de rendimiento](/es/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-zh.webp',
    title: 'MLX vs Ollama vs llama.cpp：应该选哪个推理引擎？',
    seoTitle: 'MLX vs Ollama vs llama.cpp：2026 年 Mac 怎么选？',
    metaDescription: 'Ollama 现已在 Apple Silicon 上使用 MLX（0.19 起）。对比 Ollama、mlx-lm、llama.cpp 与 LM Studio：Mac、NVIDIA 或 CPU 该选哪个引擎。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'MLX vs Ollama vs llama.cpp：应该选哪个推理引擎？',
        answer: '在 Apple Silicon 上，Ollama 不再只依赖 llama.cpp：0.19 版（2026 年 3 月）新增了 MLX 后端，自 0.40 版起，其 MLX 运行时支持的架构会自动在 MLX 上运行。想要最简单的安装用 Ollama，想在 Mac 上直接用 Python 控制用 mlx-lm，追求最大控制权或使用非 Apple 硬件用 llama.cpp。',
        bullets: [
          'Ollama：任意平台，OpenAI 兼容 API，Apple Silicon 上对受支持模型使用 MLX 运行器',
          'mlx-lm：仅限 Apple Silicon，自带 OpenAI 兼容服务器的 Python 包',
          'llama.cpp：任意硬件，对量化和采样控制最多，直接编译',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 在 0.19 版（预览版，2026年3月30日）中为 Apple Silicon 新增了 MLX 后端；根据其发行说明，自 0.40 版（2026年9月25日）起，MLX 运行时支持的模型架构会自动在 MLX 上运行',
          'Ollama 自己的基准测试显示，Qwen3.5-35B-A3B 的解码速度从 0.18 版（Q4_K_M）到 0.19 版（MLX 上的 NVFP4）由 58 提升到 112 tokens/s——量化格式不同，因此应视为 Ollama 针对该模型的数据，而非 MLX 与 llama.cpp 的通用比值',
          '如果你想用 Python 控制，或需要 Ollama 的 MLX 运行器尚未覆盖的模型，mlx-lm 是直接途径；直接编译的 llama.cpp 提供最大控制权，且可在任意硬件上运行',
        ],
      },
      body1: {
        title: '引擎逐项对比',
        content: [
          '<strong>如果你想要一条命令安装和稳定的 OpenAI 兼容 API，选择 Ollama</strong>（支持任意平台）。在 Apple Silicon 上，<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>于 0.19 版（2026年3月30日）以预览形式引入 MLX 后端（据 <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> 的公告，针对统一内存超过 32 GB 的 Mac 上的 Qwen3.5-35B-A3B）。0.40 版（2026年9月25日, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>）会自动在 MLX 上运行其 MLX 运行时支持的所有架构，发行说明中提到了 qwen3.5、qwen3.6 和 gemma4。',
          '<strong>如果你使用 Apple Silicon 并想直接使用 MLX，选择 mlx-lm。</strong><a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a>是 Apple 的 ml-explore 团队提供的 Python 包（<code>pip install mlx-lm</code>），自带 OpenAI 兼容服务器（<code>mlx_lm.server</code>），并从 Hugging Face 的 <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> 组织加载模型。代价：仅限 Apple Silicon，且需要自己管理 Python 环境和服务进程。',
          '<strong>如果需要最大控制权，直接使用 llama.cpp</strong>：自定义量化、特定采样参数，或将推理嵌入 C/C++ 应用。安装成本高于 Ollama，但新功能会先进入 <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a>，再到达上层封装。在 Mac 上它使用 Metal，而非 MLX。',
          '<strong>LM Studio 和 oMLX 是 Mac 上的另外两个选项。</strong><a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a>是图形界面应用，可按模型选择用其 MLX 引擎或 llama.cpp 运行。oMLX 是面向 Apple Silicon 的开源、基于 MLX 的推理服务器——见我们的<a href="/zh/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX 评测</a>。',
        ],
        columns: ['引擎', '最适合', 'Mac 后端', '安装', '已核对版本'],
        rows: [
          { '引擎': 'Ollama', '最适合': '任意平台，简单 API', 'Mac 后端': 'MLX（受支持模型）/ llama.cpp', '安装': '简单（一次安装）', '已核对版本': 'v0.40.6（2026年10月16日）' },
          { '引擎': 'mlx-lm', '最适合': 'Apple Silicon，Python 控制', 'Mac 后端': 'MLX 原生', '安装': '中等（pip install）', '已核对版本': 'v0.32.2（2026年10月16日）' },
          { '引擎': 'llama.cpp', '最适合': '最大控制权，任意硬件', 'Mac 后端': 'llama.cpp + Metal', '安装': '中等（brew 或编译）', '已核对版本': 'b11714（2026年10月17日）' },
          { '引擎': 'LM Studio', '最适合': '图形界面，按模型选 MLX/llama.cpp', 'Mac 后端': 'MLX 引擎 / llama.cpp', '安装': '简单（安装包）', '已核对版本': 'MLX 引擎 v1.8.5（2026年6月5日）' },
        ],
      },
      body2: {
        title: '按硬件选择',
        content: [
          '<strong>如果你有 Apple Silicon 的 Mac：先用 Ollama，需要更多控制时再换 mlx-lm。</strong>安装<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>并从其库中拉取模型；如果该架构受其 MLX 运行时支持，就会自动在 MLX 上运行。想用 Python 脚本，或使用 Ollama 不在 MLX 上运行的模型时，选择 mlx-lm（<code>pip install mlx-lm</code>，模型来自 <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>）。要通过 mlx-lm 获得 OpenAI 兼容 API，运行 <code>mlx_lm.server --model mlx-community/model-name</code>。',
          '<strong>如果你有 NVIDIA GPU 或其他硬件：使用<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>。</strong>一条命令即可安装，模型自动下载，并在 11434 端口提供 OpenAI 兼容 API。若需要绕开 Ollama 这一层的高级控制，请直接编译 <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> 并使用其内置服务器模式。',
          'PromptQuorum 没有对这些引擎做过直接对比测试。速度取决于芯片、模型、量化方式和上下文长度，请在决定前用你自己的模型测试。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 MLX、Ollama 和 llama.cpp 的快速解答',
        faqs: [
          {
            q: 'Ollama 在 Mac 上使用 MLX 吗？',
            a: '对受支持的模型是的。Ollama 0.19（2026年3月30日）以预览形式新增了 MLX 后端，自 0.40 版（2026年9月25日）起，其 MLX 运行时支持的模型架构会在 Apple Silicon 上自动使用 MLX 运行。详见<a href="/zh/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Ollama 在 Apple Silicon 上支持 MLX 吗？</a>。',
          },
          {
            q: 'MLX 比 Ollama 快吗？',
            a: '这取决于模型、芯片和 Ollama 版本；由于 Ollama 现在自己也使用 MLX，差距比以前小。Ollama 自己的基准测试显示，Qwen3.5-35B-A3B 的解码速度从 0.18 版（Q4_K_M）到 0.19 版（MLX 上的 NVFP4）由 58 提升到 112 tokens/s。量化格式不同，请用你自己的模型测试。',
          },
          {
            q: 'llama.cpp 比 Ollama 快吗？',
            a: '不一定。Ollama 增加了自己的服务器、模型管理和运行器，因此直接编译的 llama.cpp 视设置不同可能略快或略慢。PromptQuorum 没有测得一致的差距——选择 llama.cpp 是为了控制权，而不是速度。',
          },
          {
            q: '如何在 Apple Silicon 上运行带量化模型的 MLX 服务器？',
            a: '用 <code>pip install mlx-lm</code> 安装 mlx-lm，然后运行 <code>mlx_lm.server --model mlx-community/model-name</code> 即可获得 OpenAI 兼容端点。可从 mlx-community 组织选择已量化的模型（4 位版本很常见），或用 <code>mlx_lm.convert --hf-path model-id -q</code> 自行量化。参见<a href="/zh/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">如何将 Ollama 模型转换为 MLX</a>。',
          },
          {
            q: '在 Mac 上应该用 LM Studio 代替 Ollama 吗？',
            a: 'LM Studio 是图形界面应用，可按模型选择用其 MLX 引擎或 llama.cpp 运行。Ollama 作为后台服务提供 API，自 0.40 版起会自己在 MLX 上运行受支持的模型。想要图形化的模型浏览器选 LM Studio，想要供其他应用调用的服务选 Ollama。',
          },
          {
            q: '什么是 oMLX（也写作 omlx 或 olmx）？',
            a: 'oMLX 是开发者 jundot 开发的、面向 Apple Silicon 的开源（Apache-2.0）、基于 MLX 的推理服务器（<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>）。它独立于 Ollama 和 Apple 的 mlx-lm。参见我们的<a href="/zh/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX 评测</a>。',
          },
          {
            q: '可以在 Windows 或 Linux 上使用 MLX 吗？',
            a: 'MLX 是为 Apple Silicon（M1 及更新）构建的，mlx-lm 也主要在那里使用。Ollama 的发行说明还提到了面向 NVIDIA GPU 的 MLX 运行器改动（0.40.4 版），但在 Windows 和 Linux 上，常见选择仍是 Ollama 以及搭配 CUDA 或 ROCm 的 llama.cpp。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Radeon 6800M本地LLM：完整设置指南](/zh/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan：性能指南](/zh/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-ar.webp',
    title: '⁨MLX⁩ مقابل ⁨Ollama⁩ مقابل ⁨llama.cpp⁩: أي محرك استنتاج يجب أن تستخدم؟',
    seoTitle: '⁨MLX⁩ مقابل ⁨Ollama⁩ مقابل ⁨llama.cpp⁩: أيّها لـ ⁨Mac⁩ في 2026؟',
    metaDescription: 'يستخدم ⁨Ollama⁩ الآن ⁨MLX⁩ على ⁨Apple Silicon⁩ (منذ ⁨0.19⁩). قارن ⁨Ollama⁩ و⁨mlx-lm⁩ و⁨llama.cpp⁩ و⁨LM Studio⁩: أي محرك تختار على ⁨Mac⁩ أو ⁨NVIDIA⁩ أو المعالج.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple M5 family', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: 'Intermedio',
    audience: 'المطورون الذين يختارون بين MLX وOllama وllama.cpp للاستنتاج المحلي',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'MLX مقابل Ollama مقابل llama.cpp: أي محرك استنتاج يجب أن تستخدم؟',
        answer: 'على Apple Silicon لم يعد Ollama قائماً على llama.cpp فقط: أضاف الإصدار 0.19 (مارس 2026) واجهة MLX الخلفية، ومنذ الإصدار 0.40 تعمل البنى التي يدعمها مشغّل MLX لديه على MLX تلقائياً. استخدم Ollama لأبسط إعداد، وmlx-lm للتحكم المباشر عبر Python على Mac، وllama.cpp لأقصى تحكم أو للعتاد غير التابع لـ Apple.',
        bullets: [
          'Ollama: أي منصة، واجهة API متوافقة مع OpenAI، ومشغّل MLX للنماذج المدعومة على Apple Silicon',
          'mlx-lm: Apple Silicon فقط، حزمة Python بخادمها المتوافق مع OpenAI',
          'llama.cpp: أي عتاد، أكبر تحكم في التكميم وأخذ العينات، يُبنى مباشرة',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أضاف Ollama واجهة MLX الخلفية لـ Apple Silicon في الإصدار 0.19 (معاينة، 30 مارس 2026)؛ وبحسب ملاحظات الإصدار، تعمل منذ الإصدار 0.40 (25 سبتمبر 2026) بنى النماذج التي يدعمها مشغّل MLX على MLX تلقائياً',
          'في اختبار Ollama نفسه ارتفعت سرعة فك التشفير لنموذج Qwen3.5-35B-A3B من 58 إلى 112 رمزاً/ثانية بين الإصدار 0.18 (Q4_K_M) والإصدار 0.19 (NVFP4 على MLX) — صيغ تكميم مختلفة، لذا اقرأ الرقم على أنه رقم Ollama لهذا النموذج وليس نسبة عامة بين MLX وllama.cpp',
          'mlx-lm هو الطريق المباشر إذا أردت تحكماً عبر Python أو نموذجاً لا يغطيه مشغّل MLX في Ollama؛ أما llama.cpp المبني مباشرة فيمنح أكبر تحكم ويعمل على أي عتاد',
        ],
      },
      body1: {
        title: 'مقارنة المحركات واحداً واحداً',
        content: [
          '<strong>اختر Ollama إذا أردت إعداداً بأمر واحد وواجهة API مستقرة متوافقة مع OpenAI</strong> على أي منصة. على Apple Silicon قدّم <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> واجهة MLX الخلفية كمعاينة في الإصدار 0.19 (30 مارس 2026؛ وبحسب إعلان <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> كانت لنموذج Qwen3.5-35B-A3B على أجهزة Mac بذاكرة موحّدة تزيد على 32 جيجابايت). ويشغّل الإصدار 0.40 (25 سبتمبر 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) كل بنية يدعمها مشغّل MLX لديه على MLX تلقائياً، وتذكر ملاحظات الإصدار qwen3.5 وqwen3.6 وgemma4.',
          '<strong>اختر mlx-lm إذا كان لديك Apple Silicon وتريد MLX مباشرة.</strong> <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> حزمة Python (<code>pip install mlx-lm</code>) من مجموعة ml-explore التابعة لـ Apple، ولها خادم متوافق مع OpenAI (<code>mlx_lm.server</code>)، وتحمّل النماذج من منظمة <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> على Hugging Face. المقابل: تعمل على Apple Silicon فقط، وتدير بيئة Python وعملية الخادم بنفسك.',
          '<strong>اختر llama.cpp مباشرة إذا احتجت أقصى تحكم</strong>: تكميم مخصص، أو معاملات أخذ عينات محددة، أو تضمين الاستنتاج في تطبيق C/C++. كلفة الإعداد أعلى من Ollama، لكن الميزات الجديدة تصل إلى <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> قبل أن تصل إلى الطبقات التي تغلّفه. وعلى Mac يستخدم Metal وليس MLX.',
          '<strong>LM Studio وoMLX خياران آخران على Mac.</strong> <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> تطبيق بواجهة رسومية يشغّل النماذج بمحرك MLX الخاص به أو بـ llama.cpp، ويُختار لكل نموذج. أما oMLX فهو خادم استنتاج مفتوح المصدر قائم على MLX لـ Apple Silicon — راجع <a href="/ar/power-local-llm/omlx-review" class="text-primary hover:underline">مراجعتنا لـ oMLX</a>.',
        ],
        columns: ['المحرك', 'الأنسب لـ', 'الواجهة على Mac', 'الإعداد', 'الإصدار المفحوص'],
        rows: [
          { 'المحرك': 'Ollama', 'الأنسب لـ': 'أي منصة، API سهلة', 'الواجهة على Mac': 'MLX (النماذج المدعومة) / llama.cpp', 'الإعداد': 'سهل (تثبيت واحد)', 'الإصدار المفحوص': 'v0.40.6 (16 أكتوبر 2026)' },
          { 'المحرك': 'mlx-lm', 'الأنسب لـ': 'Apple Silicon، تحكم عبر Python', 'الواجهة على Mac': 'MLX أصلي', 'الإعداد': 'متوسط (pip install)', 'الإصدار المفحوص': 'v0.32.2 (16 أكتوبر 2026)' },
          { 'المحرك': 'llama.cpp', 'الأنسب لـ': 'أقصى تحكم، أي عتاد', 'الواجهة على Mac': 'llama.cpp + Metal', 'الإعداد': 'متوسط (brew أو بناء)', 'الإصدار المفحوص': 'b11714 (17 أكتوبر 2026)' },
          { 'المحرك': 'LM Studio', 'الأنسب لـ': 'واجهة رسومية، MLX أو llama.cpp لكل نموذج', 'الواجهة على Mac': 'محرك MLX / llama.cpp', 'الإعداد': 'سهل (مثبّت)', 'الإصدار المفحوص': 'محرك MLX v1.8.5 (5 يونيو 2026)' },
        ],
      },
      body2: {
        title: 'أفضل اختيار حسب العتاد',
        content: [
          '<strong>إذا كان لديك Mac بمعالج Apple Silicon: ابدأ بـ Ollama وانتقل إلى mlx-lm عندما تحتاج تحكماً أكبر.</strong> ثبّت <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> ونزّل نموذجاً من مكتبته؛ فإن كانت البنية مدعومة في مشغّل MLX لديه عمل على MLX تلقائياً. اختر mlx-lm (<code>pip install mlx-lm</code>، والنماذج من <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>) إذا أردت سكربتات Python أو نموذجاً لا يشغّله Ollama على MLX. وللحصول على واجهة API متوافقة مع OpenAI من mlx-lm شغّل <code>mlx_lm.server --model mlx-community/model-name</code>.',
          '<strong>إذا كان لديك معالج رسوميات NVIDIA أو عتاد آخر: استخدم <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>.</strong> يثبَّت بأمر واحد، وتُنزَّل النماذج تلقائياً، ويوفّر واجهة API متوافقة مع OpenAI على المنفذ 11434. وللتحكم المتقدم دون طبقة Ollama ابنِ <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a> مباشرة واستخدم وضع الخادم المدمج فيه.',
          'لم تُجرِ PromptQuorum مقارنة مباشرة بين هذه المحركات. تعتمد السرعة على الشريحة والنموذج والتكميم وطول السياق، فاختبر نموذجك بنفسك قبل أن تحسم قرارك.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن MLX وOllama وllama.cpp',
        faqs: [
          {
            q: 'هل يستخدم Ollama مكتبة MLX على Mac؟',
            a: 'نعم، للنماذج المدعومة. أضاف Ollama 0.19 (30 مارس 2026) واجهة MLX الخلفية كمعاينة، ومنذ الإصدار 0.40 (25 سبتمبر 2026) تعمل بنى النماذج التي يدعمها مشغّل MLX لديه على MLX تلقائياً على Apple Silicon. التفاصيل في <a href="/ar/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">هل يدعم Ollama مكتبة MLX على Apple Silicon؟</a>.',
          },
          {
            q: 'هل MLX أسرع من Ollama؟',
            a: 'يعتمد ذلك على النموذج والشريحة وإصدار Ollama؛ وبما أن Ollama نفسه يستخدم MLX الآن فالفارق أصغر مما كان. أظهر اختبار Ollama نفسه ارتفاع فك التشفير لنموذج Qwen3.5-35B-A3B من 58 إلى 112 رمزاً/ثانية بين الإصدار 0.18 (Q4_K_M) والإصدار 0.19 (NVFP4 على MLX). هذه صيغ تكميم مختلفة، فاختبر نموذجك بنفسك.',
          },
          {
            q: 'هل llama.cpp أسرع من Ollama؟',
            a: 'ليس بالضرورة. يضيف Ollama خادمه الخاص وإدارة النماذج والمشغّلات، لذا قد يختلف llama.cpp المبني مباشرة قليلاً في أي اتجاه حسب الإعدادات. لم تقس PromptQuorum فارقاً ثابتاً — اختر llama.cpp من أجل التحكم لا من أجل السرعة.',
          },
          {
            q: 'كيف أشغّل خادم MLX بنماذج مكمَّمة على Apple Silicon؟',
            a: 'ثبّت mlx-lm بالأمر <code>pip install mlx-lm</code> ثم شغّل <code>mlx_lm.server --model mlx-community/model-name</code> للحصول على نقطة اتصال متوافقة مع OpenAI. اختر نموذجاً مكمَّماً مسبقاً من منظمة mlx-community (نسخ 4 بت شائعة) أو كمِّم نموذجك بنفسك بالأمر <code>mlx_lm.convert --hf-path model-id -q</code>. راجع <a href="/ar/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">كيفية تحويل نماذج Ollama إلى MLX</a>.',
          },
          {
            q: 'هل أستخدم LM Studio بدلاً من Ollama على Mac؟',
            a: 'LM Studio تطبيق بواجهة رسومية يشغّل النماذج بمحرك MLX الخاص به أو بـ llama.cpp، ويُختار لكل نموذج. أما Ollama فيعمل كخدمة في الخلفية مع واجهة API، ومنذ الإصدار 0.40 يشغّل النماذج المدعومة بنفسه على MLX. اختر LM Studio إذا أردت متصفح نماذج رسومياً، واختر Ollama إذا أردت خدمة تستدعيها تطبيقات أخرى.',
          },
          {
            q: 'ما هو oMLX (ويُكتب أيضاً omlx أو olmx)؟',
            a: 'oMLX خادم استنتاج مفتوح المصدر (Apache-2.0) قائم على MLX لـ Apple Silicon من المطوّر jundot (<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). وهو مستقل عن Ollama وعن mlx-lm التابع لـ Apple. راجع <a href="/ar/power-local-llm/omlx-review" class="text-primary hover:underline">مراجعتنا لـ oMLX</a>.',
          },
          {
            q: 'هل يمكنني استخدام MLX على Windows أو Linux؟',
            a: 'صُمّمت MLX لـ Apple Silicon (M1 وما بعده)، ويُستخدم mlx-lm هناك في الغالب. وتذكر ملاحظات إصدار Ollama أيضاً تغييرات في مشغّل MLX لمعالجات NVIDIA (الإصدار 0.40.4)، لكن على Windows وLinux تبقى الخيارات المعتادة هي Ollama وllama.cpp مع CUDA أو ROCm.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[Radeon 6800M للنماذج المحلية: دليل الإعداد الكامل](/ar/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
          '[Strix Halo + Ollama + Vulkan: دليل الأداء](/ar/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/mlx-vs-ollama-vs-llamacpp-overview-hero-ko.webp',
    title: 'MLX vs Ollama vs llama.cpp: 어떤 추론 엔진을 사용해야 합니까?',
    seoTitle: 'MLX vs Ollama vs llama.cpp: 2026년 Mac에는 무엇?',
    metaDescription: 'Ollama가 Apple Silicon에서 MLX를 사용합니다(0.19부터). Ollama, mlx-lm, llama.cpp, LM Studio를 비교해 Mac·NVIDIA·CPU별 엔진을 고르세요.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple M5 family', 'Apple Silicon', 'NVIDIA GPU'],
    educationalLevel: '중급',
    audience: '로컬 추론을 위해 MLX, Ollama, llama.cpp 중에서 선택하는 개발자',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['ollama-vs-lm-studio', 'convert-ollama-model-to-mlx', 'ollama-mlx-apple-silicon'],
    is_living_page: false,
    targetKeywords: [
      'MLX Ollama llama.cpp 비교',
      '로컬 LLM 추론 엔진 선택',
      'Apple Silicon 추론 엔진',
      'MLX vs Ollama 속도',
      'llama.cpp 사용법',
    ],
    readTime: '4분 분량',
    quickAnswerTop: {
      ko: {
        question: 'MLX vs Ollama vs llama.cpp: 어떤 추론 엔진을 사용해야 합니까?',
        answer: 'Apple Silicon에서 Ollama는 더 이상 llama.cpp 전용이 아닙니다. 버전 0.19(2026년 3월)에서 MLX 백엔드가 추가되었고, 버전 0.40부터는 MLX 런타임이 지원하는 아키텍처가 자동으로 MLX에서 실행됩니다. 가장 쉬운 설정에는 Ollama, Mac에서 Python으로 직접 제어하려면 mlx-lm, 최대 제어나 Apple 외 하드웨어에는 llama.cpp를 사용하십시오.',
        bullets: [
          'Ollama: 모든 플랫폼, OpenAI 호환 API, Apple Silicon에서 지원 모델용 MLX 러너',
          'mlx-lm: Apple Silicon 전용, 자체 OpenAI 호환 서버를 갖춘 Python 패키지',
          'llama.cpp: 모든 하드웨어, 양자화와 샘플링을 가장 세밀하게 제어, 직접 컴파일',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama는 버전 0.19(미리보기, 2026년 3월 30일)에서 Apple Silicon용 MLX 백엔드를 추가했으며, 릴리스 노트에 따르면 버전 0.40(2026년 9월 25일)부터 MLX 런타임이 지원하는 모델 아키텍처가 자동으로 MLX에서 실행됩니다',
          'Ollama 자체 벤치마크에서 Qwen3.5-35B-A3B의 디코드 속도는 버전 0.18(Q4_K_M)에서 0.19(MLX 기반 NVFP4)로 58에서 112 tokens/s로 올랐습니다. 양자화 형식이 다르므로 MLX 대 llama.cpp의 일반적인 비율이 아니라 해당 모델에 대한 Ollama의 수치로 읽어야 합니다',
          'Python 제어가 필요하거나 Ollama의 MLX 러너가 다루지 않는 모델에는 mlx-lm이 직접적인 경로이며, 직접 컴파일한 llama.cpp는 가장 많은 제어를 제공하고 모든 하드웨어에서 동작합니다',
        ],
      },
      body1: {
        title: '엔진별 비교',
        content: [
          '<strong>한 줄 설치와 안정적인 OpenAI 호환 API를 원하면 Ollama를 선택하십시오</strong>(모든 플랫폼). Apple Silicon에서 <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>는 버전 0.19(2026년 3월 30일)에서 MLX 백엔드를 미리보기로 도입했습니다(<a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> 발표에 따르면 통합 메모리 32GB 초과 Mac의 Qwen3.5-35B-A3B 대상). 버전 0.40(2026년 9월 25일, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>)은 MLX 런타임이 지원하는 모든 아키텍처를 자동으로 MLX에서 실행하며, 릴리스 노트에는 qwen3.5, qwen3.6, gemma4가 언급되어 있습니다.',
          '<strong>Apple Silicon에서 MLX를 직접 쓰려면 mlx-lm을 선택하십시오.</strong> <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a>은 Apple의 ml-explore 그룹이 만든 Python 패키지(<code>pip install mlx-lm</code>)로, 자체 OpenAI 호환 서버(<code>mlx_lm.server</code>)를 갖추고 Hugging Face의 <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a> 조직에서 모델을 불러옵니다. 단점: Apple Silicon에서만 동작하며 Python 환경과 서버 프로세스를 직접 관리해야 합니다.',
          '<strong>최대 제어가 필요하면 llama.cpp를 직접 사용하십시오</strong>: 사용자 지정 양자화, 특정 샘플링 매개변수, C/C++ 애플리케이션에 내장하는 추론 등. 설정 비용은 Ollama보다 높지만 새 기능은 래퍼보다 먼저 <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a>에 들어옵니다. Mac에서는 MLX가 아닌 Metal을 사용합니다.',
          '<strong>LM Studio와 oMLX도 Mac의 다른 선택지입니다.</strong> <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a>는 모델별로 MLX 엔진 또는 llama.cpp를 선택해 실행하는 GUI 앱입니다. oMLX는 Apple Silicon용 오픈소스 MLX 기반 추론 서버입니다. <a href="/ko/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX 리뷰</a>를 참고하십시오.',
        ],
        columns: ['엔진', '적합한 용도', 'Mac 백엔드', '설정', '확인한 버전'],
        rows: [
          { '엔진': 'Ollama', '적합한 용도': '모든 플랫폼, 쉬운 API', 'Mac 백엔드': 'MLX(지원 모델) / llama.cpp', '설정': '쉬움(설치 1회)', '확인한 버전': 'v0.40.6(2026년 10월 16일)' },
          { '엔진': 'mlx-lm', '적합한 용도': 'Apple Silicon, Python 제어', 'Mac 백엔드': 'MLX 네이티브', '설정': '보통(pip install)', '확인한 버전': 'v0.32.2(2026년 10월 16일)' },
          { '엔진': 'llama.cpp', '적합한 용도': '최대 제어, 모든 하드웨어', 'Mac 백엔드': 'llama.cpp + Metal', '설정': '보통(brew 또는 빌드)', '확인한 버전': 'b11714(2026년 10월 17일)' },
          { '엔진': 'LM Studio', '적합한 용도': 'GUI, 모델별 MLX/llama.cpp', 'Mac 백엔드': 'MLX 엔진 / llama.cpp', '설정': '쉬움(설치 프로그램)', '확인한 버전': 'MLX 엔진 v1.8.5(2026년 6월 5일)' },
        ],
      },
      body2: {
        title: '하드웨어별 최선의 선택',
        content: [
          '<strong>Apple Silicon Mac이라면 Ollama로 시작하고, 더 많은 제어가 필요할 때 mlx-lm으로 옮기십시오.</strong> <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>를 설치하고 라이브러리에서 모델을 받으면, 아키텍처가 MLX 런타임의 지원 대상일 경우 자동으로 MLX에서 실행됩니다. Python 스크립트가 필요하거나 Ollama가 MLX로 실행하지 않는 모델이라면 mlx-lm(<code>pip install mlx-lm</code>, 모델은 <a href="https://huggingface.co/mlx-community" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-community\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">mlx-community</a>)을 선택하십시오. mlx-lm에서 OpenAI 호환 API를 쓰려면 <code>mlx_lm.server --model mlx-community/model-name</code>을 실행하십시오.',
          '<strong>NVIDIA GPU나 다른 하드웨어라면 <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>를 사용하십시오.</strong> 명령 한 줄로 설치되고 모델은 자동으로 내려받으며, 포트 11434에서 OpenAI 호환 API를 제공합니다. Ollama 계층 없이 고급 제어가 필요하면 <a href="https://github.com/ggml-org/llama.cpp" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'llama.cpp\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">llama.cpp</a>를 직접 컴파일해 내장 서버 모드를 사용하십시오.',
          'PromptQuorum은 이 엔진들을 직접 맞붙여 측정하지 않았습니다. 속도는 칩, 모델, 양자화, 컨텍스트 길이에 따라 달라지므로 결정하기 전에 직접 사용하는 모델로 테스트하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'MLX, Ollama, llama.cpp에 대한 빠른 답변',
        faqs: [
          {
            q: 'Ollama는 Mac에서 MLX를 사용합니까?',
            a: '지원 모델에서는 그렇습니다. Ollama 0.19(2026년 3월 30일)가 MLX 백엔드를 미리보기로 추가했고, 버전 0.40(2026년 9월 25일)부터는 MLX 런타임이 지원하는 모델 아키텍처가 Apple Silicon에서 자동으로 MLX로 실행됩니다. 자세한 내용은 <a href="/ko/prompt-bites/ollama-mlx-apple-silicon" class="text-primary hover:underline">Ollama는 Apple Silicon에서 MLX를 지원합니까?</a>를 참고하십시오.',
          },
          {
            q: 'MLX가 Ollama보다 빠릅니까?',
            a: '모델, 칩, Ollama 버전에 따라 다르며, Ollama 자체가 이제 MLX를 사용하므로 예전보다 차이가 작습니다. Ollama 자체 벤치마크에서는 Qwen3.5-35B-A3B의 디코드 속도가 버전 0.18(Q4_K_M)에서 0.19(MLX 기반 NVFP4)로 58에서 112 tokens/s로 올랐습니다. 양자화 형식이 다르므로 직접 쓰는 모델로 테스트하십시오.',
          },
          {
            q: 'llama.cpp가 Ollama보다 빠릅니까?',
            a: '반드시 그렇지는 않습니다. Ollama는 자체 서버, 모델 관리, 러너를 더하므로 직접 빌드한 llama.cpp는 설정에 따라 어느 쪽으로든 약간 다를 수 있습니다. PromptQuorum은 일관된 차이를 측정하지 않았습니다. llama.cpp는 속도가 아니라 제어를 위해 선택하십시오.',
          },
          {
            q: 'Apple Silicon에서 양자화 모델로 MLX 서버를 실행하려면 어떻게 합니까?',
            a: '<code>pip install mlx-lm</code>으로 mlx-lm을 설치한 뒤 <code>mlx_lm.server --model mlx-community/model-name</code>을 실행하면 OpenAI 호환 엔드포인트를 얻습니다. mlx-community 조직의 사전 양자화 모델(4비트 변형이 흔함)을 고르거나 <code>mlx_lm.convert --hf-path model-id -q</code>로 직접 양자화할 수 있습니다. <a href="/ko/prompt-bites/convert-ollama-model-to-mlx" class="text-primary hover:underline">Ollama 모델을 MLX로 변환하는 방법</a>을 참고하십시오.',
          },
          {
            q: 'Mac에서 Ollama 대신 LM Studio를 써야 합니까?',
            a: 'LM Studio는 모델별로 MLX 엔진 또는 llama.cpp를 선택해 실행하는 GUI 앱입니다. Ollama는 API를 제공하는 백그라운드 서비스로 동작하며, 버전 0.40부터는 지원 모델을 직접 MLX로 실행합니다. 그래픽 모델 브라우저가 필요하면 LM Studio, 다른 앱이 호출하는 서비스가 필요하면 Ollama를 선택하십시오.',
          },
          {
            q: 'oMLX(omlx 또는 olmx로도 표기)란 무엇입니까?',
            a: 'oMLX는 개발자 jundot이 만든 Apple Silicon용 오픈소스(Apache-2.0) MLX 기반 추론 서버입니다(<a href="https://github.com/jundot/omlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'oMLX\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">github.com/jundot/omlx</a>). Ollama 및 Apple의 mlx-lm과는 별개입니다. <a href="/ko/power-local-llm/omlx-review" class="text-primary hover:underline">oMLX 리뷰</a>를 참고하십시오.',
          },
          {
            q: 'Windows나 Linux에서 MLX를 사용할 수 있습니까?',
            a: 'MLX는 Apple Silicon(M1 이상)용으로 만들어졌고 mlx-lm도 주로 그곳에서 쓰입니다. Ollama 릴리스 노트에는 NVIDIA GPU용 MLX 러너 변경(버전 0.40.4)도 나와 있지만, Windows와 Linux에서는 여전히 Ollama와 CUDA 또는 ROCm을 쓰는 llama.cpp가 일반적인 선택입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[Ollama vs LM Studio: 어떤 것을 선택해야 합니까?](/ko/prompt-bites/ollama-vs-lm-studio)',
          '[Ollama 모델을 MLX로 변환하는 방법](/ko/prompt-bites/convert-ollama-model-to-mlx)',
          '[Apple Silicon에서 Ollama와 MLX 비교](/ko/prompt-bites/ollama-mlx-apple-silicon)',
          '[Apple Silicon 로컬 LLM 완전 가이드 2026](/ko/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Strix Halo + Ollama + Vulkan: 성능 가이드](/ko/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo guide',
          '[Radeon 6800M 로컬 LLM: 완전 설치 가이드](/ko/prompt-bites/radeon-6800m-local-llm) -- Radeon GPU guide',
        ],
      },
    },
  },
}
