import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-en.webp',
    title: 'Does Ollama Support MLX on Apple Silicon?',
    dateModified: '2026-10-17',
    seoTitle: 'Does Ollama Support MLX on Apple Silicon? (2026)',
    metaDescription: 'Yes — Ollama added an MLX backend on Apple Silicon in 0.19; since 0.40, supported model architectures run on MLX automatically. See what is covered.',
    publishDate: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M5 family'],
    educationalLevel: 'Beginner',
    audience: 'Mac users wondering whether Ollama uses MLX for acceleration',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'convert-ollama-model-to-mlx', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Does Ollama support MLX on Apple Silicon?',
        answer: 'Yes. Ollama added an MLX backend for Apple Silicon in version 0.19 (30 March 2026, preview), and since version 0.40 (25 September 2026) model architectures supported by its MLX runtime run on MLX automatically. Architectures outside that support are not switched automatically; for those, or for direct Python control, use mlx-lm or LM Studio.',
        bullets: [
          'Ollama on Mac: MLX runner for supported architectures (qwen3.5, qwen3.6 and gemma4 are named in the 0.40 notes)',
          'The 0.19 preview required a Mac with more than 32 GB of unified memory',
          'Other MLX options: mlx-lm (CLI/Python) or LM Studio (GUI with an MLX engine)',
        ],
        updatedDate: '2026-10',
      },
      de: {
        question: 'Unterstützt Ollama MLX auf Apple Silicon?',
        answer: 'Ja. Ollama hat in Version 0.19 (30. März 2026, Vorschau) ein MLX-Backend für Apple Silicon ergänzt, und seit Version 0.40 (25. September 2026) laufen Modellarchitekturen, die der MLX-Runtime unterstützt, automatisch auf MLX. Nicht unterstützte Architekturen werden nicht automatisch umgeschaltet; dafür oder für direkte Python-Kontrolle nutzen Sie mlx-lm oder LM Studio.',
        bullets: [
          'Ollama auf dem Mac: MLX-Runner für unterstützte Architekturen (qwen3.5, qwen3.6 und gemma4 werden in den Notes zu 0.40 genannt)',
          'Die Vorschau in 0.19 setzte einen Mac mit mehr als 32 GB Unified Memory voraus',
          'Weitere MLX-Optionen: mlx-lm (CLI/Python) oder LM Studio (GUI mit MLX-Engine)',
        ],
        updatedDate: '2026-10',
      },
      fr: {
        question: 'Ollama prend-il en charge MLX sur Apple Silicon ?',
        answer: 'Oui. Ollama a ajouté un backend MLX pour Apple Silicon dans la version 0.19 (30 mars 2026, préversion) et, depuis la version 0.40 (25 septembre 2026), les architectures prises en charge par son runtime MLX s\'exécutent automatiquement sur MLX. Les autres architectures ne sont pas basculées automatiquement ; pour elles, ou pour un contrôle Python direct, utilisez mlx-lm ou LM Studio.',
        bullets: [
          'Ollama sur Mac : runner MLX pour les architectures prises en charge (qwen3.5, qwen3.6 et gemma4 sont cités dans les notes de la 0.40)',
          'La préversion 0.19 exigeait un Mac avec plus de 32 Go de mémoire unifiée',
          'Autres options MLX : mlx-lm (CLI/Python) ou LM Studio (GUI avec moteur MLX)',
        ],
        updatedDate: '2026-10',
      },
      ja: {
        question: 'OllamaはApple SiliconでMLXをサポートしていますか？',
        answer: 'はい。Ollamaはバージョン0.19（2026年3月30日、プレビュー）でApple Silicon向けMLXバックエンドを追加し、バージョン0.40（2026年9月25日）以降はMLXランタイムが対応するアーキテクチャが自動的にMLXで動作します。対応外のアーキテクチャは自動では切り替わらないため、それらやPythonからの直接制御にはmlx-lmまたはLM Studioを使ってください。',
        bullets: [
          'Mac上のOllama：対応アーキテクチャにMLXランナー（0.40のノートにqwen3.5、qwen3.6、gemma4が記載）',
          '0.19のプレビューは統合メモリ32GB超のMacが必要だった',
          'その他のMLXオプション：mlx-lm（CLI/Python）またはLM Studio（MLXエンジン搭載のGUI）',
        ],
        updatedDate: '2026-10',
      },
      zh: {
        question: 'Ollama 在 Apple Silicon 上支持 MLX 吗？',
        answer: '支持。Ollama 在 0.19 版（2026年3月30日，预览版）为 Apple Silicon 新增了 MLX 后端，自 0.40 版（2026年9月25日）起，其 MLX 运行时支持的架构会自动在 MLX 上运行。不在支持范围内的架构不会自动切换；对这些架构，或需要直接用 Python 控制时，请使用 mlx-lm 或 LM Studio。',
        bullets: [
          'Mac 上的 Ollama：对受支持的架构使用 MLX 运行器（0.40 的说明中提到 qwen3.5、qwen3.6 和 gemma4）',
          '0.19 预览版要求统一内存超过 32 GB 的 Mac',
          '其他 MLX 选项：mlx-lm（CLI/Python）或 LM Studio（带 MLX 引擎的图形界面）',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19 (30 March 2026) rebuilt its Apple Silicon backend on Apple\'s MLX framework as a preview, covering Qwen3.5-35B-A3B on Macs with more than 32 GB of unified memory',
          'Since version 0.40 (25 September 2026), Ollama\'s release notes say model architectures supported by the MLX runtime run on MLX automatically on Apple Silicon',
          'In Ollama\'s own benchmark, Qwen3.5-35B-A3B decode rose from 58 to 112 tokens/s and prefill from 1,154 to 1,810 tokens/s between version 0.18 (Q4_K_M) and 0.19 (NVFP4) — different quantization formats, so not a general speed ratio',
        ],
      },
      body1: {
        title: 'How Ollama Uses MLX Today',
        content: [
          '<strong>Ollama now has two kinds of Apple Silicon support.</strong> Before version 0.19 it ran models through llama.cpp with Metal. Version 0.19 (30 March 2026) added an MLX backend as a preview, and version 0.40 (25 September 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) makes model architectures supported by the MLX runtime run on MLX automatically. Ollama\'s release notes name qwen3.5, qwen3.6 and gemma4 among them; the list changes with each release.',
          'MLX is Apple\'s machine-learning framework for Apple Silicon and uses the unified memory architecture directly. The <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> announcement also describes NVFP4 quantization support, cache reuse across conversations, and says the GPU Neural Accelerators in M5, M5 Pro and M5 Max chips speed up time to first token and generation.',
        ],
        columns: ['Tool', 'Backend on Mac', 'Uses MLX?', 'Latest release checked'],
        rows: [
          { 'Tool': 'Ollama', 'Backend on Mac': 'MLX (supported models) / llama.cpp', 'Uses MLX?': 'Yes, for supported models', 'Latest release checked': 'v0.40.6 (16 October 2026)' },
          { 'Tool': 'LM Studio', 'Backend on Mac': 'MLX engine or llama.cpp', 'Uses MLX?': 'Yes (selectable)', 'Latest release checked': 'MLX engine v1.8.5 (5 June 2026)' },
          { 'Tool': 'mlx-lm', 'Backend on Mac': 'MLX native', 'Uses MLX?': 'Yes', 'Latest release checked': 'v0.32.2 (16 October 2026)' },
          { 'Tool': 'llama.cpp', 'Backend on Mac': 'llama.cpp + Metal', 'Uses MLX?': 'No', 'Latest release checked': 'b11714 (17 October 2026)' },
        ],
      },
      body2: {
        title: 'Which Option to Pick on a Mac',
        content: [
          '<strong>Start with <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> if you want a background service with an OpenAI-compatible API.</strong> If the model\'s architecture is supported by Ollama\'s MLX runtime, it runs on MLX without extra setup; check the release notes of your installed version for the current list.',
          '<strong>Choose <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> for a GUI with a per-model engine choice, or <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'en\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> for Python control.</strong> LM Studio lets you pick its MLX engine or llama.cpp for each model. mlx-lm installs with <code>pip install mlx-lm</code> and provides its own OpenAI-compatible server. See <a href="/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> for the full comparison.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama and MLX on Apple Silicon',
        faqs: [
          {
            q: 'Does Ollama use MLX by default on Mac?',
            a: 'For supported architectures, yes: Ollama\'s version 0.40 release notes say model architectures supported by the MLX runtime run on MLX automatically on Apple Silicon. The 0.19 preview was limited to one model and a Mac with more than 32 GB of unified memory. Check the release notes of your installed version.',
          },
          {
            q: 'Which models run on MLX in Ollama?',
            a: 'The version 0.40 release notes name qwen3.5, qwen3.6 and gemma4 among the models that run on the MLX runtime. The list grows with releases, so check the notes for your version.',
          },
          {
            q: 'Is Ollama still slower than mlx-lm on Apple Silicon?',
            a: 'The gap is likely smaller now that Ollama uses MLX for supported models, but PromptQuorum has not benchmarked them head to head. Speed depends on chip, model, quantization and context length, so measure your own model.',
          },
          {
            q: 'Does LM Studio come with MLX installed?',
            a: 'Yes — LM Studio bundles MLX support on macOS and lets you select it per model. You do not need to install Python or mlx-lm separately. Download LM Studio from lmstudio.ai, load a model, and choose the MLX engine in model settings.',
          },
          {
            q: 'Can I use Ollama and mlx-lm at the same time on Mac?',
            a: 'Yes. Ollama runs as a background service on port 11434; mlx-lm\'s server runs on a port you specify (default 8080). They do not conflict. See <a href="/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> for the full comparison.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Ollama Latest Version: What\'s New?](/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  de: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-de.webp',
    title: 'Unterstützt Ollama MLX auf Apple Silicon?',
    seoTitle: 'Unterstützt Ollama MLX auf Apple Silicon? (2026)',
    metaDescription: 'Ja — Ollama hat in 0.19 ein MLX-Backend für Apple Silicon ergänzt; seit 0.40 laufen unterstützte Modellarchitekturen automatisch auf MLX. Was abgedeckt ist.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      de: {
        question: 'Unterstützt Ollama MLX auf Apple Silicon?',
        answer: 'Ja. Ollama hat in Version 0.19 (30. März 2026, Vorschau) ein MLX-Backend für Apple Silicon ergänzt, und seit Version 0.40 (25. September 2026) laufen Modellarchitekturen, die der MLX-Runtime unterstützt, automatisch auf MLX. Nicht unterstützte Architekturen werden nicht automatisch umgeschaltet; dafür oder für direkte Python-Kontrolle nutzen Sie mlx-lm oder LM Studio.',
        bullets: [
          'Ollama auf dem Mac: MLX-Runner für unterstützte Architekturen (qwen3.5, qwen3.6 und gemma4 werden in den Notes zu 0.40 genannt)',
          'Die Vorschau in 0.19 setzte einen Mac mit mehr als 32 GB Unified Memory voraus',
          'Weitere MLX-Optionen: mlx-lm (CLI/Python) oder LM Studio (GUI mit MLX-Engine)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19 (30. März 2026) hat sein Apple-Silicon-Backend als Vorschau auf Apples MLX-Framework umgebaut, zunächst für Qwen3.5-35B-A3B auf Macs mit mehr als 32 GB Unified Memory',
          'Laut Release Notes laufen seit Version 0.40 (25. September 2026) von der MLX-Runtime unterstützte Modellarchitekturen auf Apple Silicon automatisch auf MLX',
          'Im eigenen Benchmark von Ollama stieg die Decode-Geschwindigkeit von Qwen3.5-35B-A3B von 58 auf 112 Token/s und das Prefill von 1.154 auf 1.810 Token/s zwischen Version 0.18 (Q4_K_M) und 0.19 (NVFP4) — unterschiedliche Quantisierungsformate, also kein allgemeines Geschwindigkeitsverhältnis',
        ],
      },
      body1: {
        title: 'Wie Ollama heute MLX nutzt',
        content: [
          '<strong>Ollama hat auf Apple Silicon jetzt zwei Arten der Unterstützung.</strong> Vor Version 0.19 liefen Modelle über llama.cpp mit Metal. Version 0.19 (30. März 2026) ergänzte ein MLX-Backend als Vorschau, und Version 0.40 (25. September 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) lässt von der MLX-Runtime unterstützte Modellarchitekturen automatisch auf MLX laufen. Die Release Notes nennen unter anderem qwen3.5, qwen3.6 und gemma4; die Liste ändert sich mit jedem Release.',
          'MLX ist Apples Machine-Learning-Framework für Apple Silicon und nutzt die Unified-Memory-Architektur direkt. Die Ankündigung auf <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> beschreibt außerdem NVFP4-Quantisierung und Cache-Wiederverwendung über Unterhaltungen hinweg und nennt die GPU Neural Accelerators der Chips M5, M5 Pro und M5 Max als Beschleuniger für Time-to-first-Token und Generierung.',
        ],
        columns: ['Tool', 'Backend auf dem Mac', 'Nutzt MLX?', 'Geprüfte Version'],
        rows: [
          { 'Tool': 'Ollama', 'Backend auf dem Mac': 'MLX (unterstützte Modelle) / llama.cpp', 'Nutzt MLX?': 'Ja, für unterstützte Modelle', 'Geprüfte Version': 'v0.40.6 (16. Oktober 2026)' },
          { 'Tool': 'LM Studio', 'Backend auf dem Mac': 'MLX-Engine oder llama.cpp', 'Nutzt MLX?': 'Ja (wählbar)', 'Geprüfte Version': 'MLX-Engine v1.8.5 (5. Juni 2026)' },
          { 'Tool': 'mlx-lm', 'Backend auf dem Mac': 'MLX nativ', 'Nutzt MLX?': 'Ja', 'Geprüfte Version': 'v0.32.2 (16. Oktober 2026)' },
          { 'Tool': 'llama.cpp', 'Backend auf dem Mac': 'llama.cpp + Metal', 'Nutzt MLX?': 'Nein', 'Geprüfte Version': 'b11714 (17. Oktober 2026)' },
        ],
      },
      body2: {
        title: 'Welche Option auf dem Mac passt',
        content: [
          '<strong>Beginnen Sie mit <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>, wenn Sie einen Hintergrunddienst mit OpenAI-kompatibler API wollen.</strong> Ist die Architektur des Modells von Ollamas MLX-Runtime unterstützt, läuft es ohne Zusatzaufwand auf MLX; die aktuelle Liste steht in den Release Notes Ihrer installierten Version.',
          '<strong>Wählen Sie <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> für eine GUI mit Engine-Wahl pro Modell oder <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'de\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> für Python-Kontrolle.</strong> LM Studio lässt Sie pro Modell die MLX-Engine oder llama.cpp wählen. mlx-lm installieren Sie mit <code>pip install mlx-lm</code>, es bringt einen eigenen OpenAI-kompatiblen Server mit. Den ganzen Vergleich finden Sie unter <a href="/de/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu Ollama und MLX auf Apple Silicon',
        faqs: [
          {
            q: 'Nutzt Ollama auf dem Mac standardmäßig MLX?',
            a: 'Für unterstützte Architekturen ja: Laut Release Notes zu Version 0.40 laufen von der MLX-Runtime unterstützte Modellarchitekturen auf Apple Silicon automatisch auf MLX. Die Vorschau in 0.19 war auf ein Modell und einen Mac mit mehr als 32 GB Unified Memory beschränkt. Prüfen Sie die Release Notes Ihrer installierten Version.',
          },
          {
            q: 'Welche Modelle laufen in Ollama auf MLX?',
            a: 'Die Release Notes zu Version 0.40 nennen unter anderem qwen3.5, qwen3.6 und gemma4 als Modelle, die auf der MLX-Runtime laufen. Die Liste wächst mit den Releases — prüfen Sie die Notes Ihrer Version.',
          },
          {
            q: 'Ist Ollama auf Apple Silicon noch langsamer als mlx-lm?',
            a: 'Der Abstand dürfte kleiner sein, seit Ollama für unterstützte Modelle MLX nutzt, doch PromptQuorum hat beide nicht direkt gegeneinander gemessen. Die Geschwindigkeit hängt von Chip, Modell, Quantisierung und Kontextlänge ab — testen Sie Ihr eigenes Modell.',
          },
          {
            q: 'Wird LM Studio mit MLX geliefert?',
            a: 'Ja — LM Studio bringt MLX-Unterstützung für macOS mit und lässt Sie sie pro Modell auswählen. Sie müssen weder Python noch mlx-lm separat installieren. Laden Sie LM Studio von lmstudio.ai herunter, laden Sie ein Modell und wählen Sie in den Modelleinstellungen die MLX-Engine.',
          },
          {
            q: 'Kann ich Ollama und mlx-lm auf dem Mac gleichzeitig nutzen?',
            a: 'Ja. Ollama läuft als Hintergrunddienst auf Port 11434; der Server von mlx-lm läuft auf einem Port Ihrer Wahl (Standard 8080). Sie stören sich nicht. Den ganzen Vergleich finden Sie unter <a href="/de/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Ollama Neueste Version: Was ist neu?](/de/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  fr: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-fr.webp',
    title: 'Ollama prend-il en charge MLX sur Apple Silicon ?',
    seoTitle: 'Ollama prend-il en charge MLX sur Apple Silicon ? (2026)',
    metaDescription: 'Oui — Ollama a ajouté un backend MLX sur Apple Silicon en 0.19 ; depuis 0.40, les architectures prises en charge tournent automatiquement sur MLX.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      fr: {
        question: 'Ollama prend-il en charge MLX sur Apple Silicon ?',
        answer: 'Oui. Ollama a ajouté un backend MLX pour Apple Silicon dans la version 0.19 (30 mars 2026, préversion) et, depuis la version 0.40 (25 septembre 2026), les architectures prises en charge par son runtime MLX s\'exécutent automatiquement sur MLX. Les autres architectures ne sont pas basculées automatiquement ; pour elles, ou pour un contrôle Python direct, utilisez mlx-lm ou LM Studio.',
        bullets: [
          'Ollama sur Mac : runner MLX pour les architectures prises en charge (qwen3.5, qwen3.6 et gemma4 sont cités dans les notes de la 0.40)',
          'La préversion 0.19 exigeait un Mac avec plus de 32 Go de mémoire unifiée',
          'Autres options MLX : mlx-lm (CLI/Python) ou LM Studio (GUI avec moteur MLX)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19 (30 mars 2026) a reconstruit son backend Apple Silicon sur le framework MLX d\'Apple en préversion, pour Qwen3.5-35B-A3B sur des Mac avec plus de 32 Go de mémoire unifiée',
          'Selon les notes de version, depuis la version 0.40 (25 septembre 2026) les architectures prises en charge par le runtime MLX s\'exécutent automatiquement sur MLX sur Apple Silicon',
          'Dans le benchmark d\'Ollama, le décodage de Qwen3.5-35B-A3B est passé de 58 à 112 tokens/s et le prefill de 1 154 à 1 810 tokens/s entre la version 0.18 (Q4_K_M) et la 0.19 (NVFP4) — formats de quantification différents, donc pas un rapport de vitesse général',
        ],
      },
      body1: {
        title: 'Comment Ollama utilise MLX aujourd\'hui',
        content: [
          '<strong>Ollama propose désormais deux types de prise en charge sur Apple Silicon.</strong> Avant la version 0.19, les modèles passaient par llama.cpp avec Metal. La version 0.19 (30 mars 2026) a ajouté un backend MLX en préversion, et la version 0.40 (25 septembre 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) exécute automatiquement sur MLX les architectures prises en charge par le runtime MLX. Les notes de version citent notamment qwen3.5, qwen3.6 et gemma4 ; la liste évolue à chaque version.',
          'MLX est le framework d\'apprentissage automatique d\'Apple pour Apple Silicon et exploite directement l\'architecture de mémoire unifiée. L\'annonce <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> décrit aussi la quantification NVFP4 et la réutilisation du cache entre conversations, et indique que les accélérateurs neuronaux GPU des puces M5, M5 Pro et M5 Max accélèrent le temps jusqu\'au premier token et la génération.',
        ],
        columns: ['Outil', 'Backend sur Mac', 'Utilise MLX ?', 'Version vérifiée'],
        rows: [
          { 'Outil': 'Ollama', 'Backend sur Mac': 'MLX (modèles pris en charge) / llama.cpp', 'Utilise MLX ?': 'Oui, modèles pris en charge', 'Version vérifiée': 'v0.40.6 (16 octobre 2026)' },
          { 'Outil': 'LM Studio', 'Backend sur Mac': 'Moteur MLX ou llama.cpp', 'Utilise MLX ?': 'Oui (au choix)', 'Version vérifiée': 'Moteur MLX v1.8.5 (5 juin 2026)' },
          { 'Outil': 'mlx-lm', 'Backend sur Mac': 'MLX natif', 'Utilise MLX ?': 'Oui', 'Version vérifiée': 'v0.32.2 (16 octobre 2026)' },
          { 'Outil': 'llama.cpp', 'Backend sur Mac': 'llama.cpp + Metal', 'Utilise MLX ?': 'Non', 'Version vérifiée': 'b11714 (17 octobre 2026)' },
        ],
      },
      body2: {
        title: 'Quelle option choisir sur Mac',
        content: [
          '<strong>Commencez par <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> si vous voulez un service en arrière-plan avec une API compatible OpenAI.</strong> Si l\'architecture du modèle est prise en charge par le runtime MLX d\'Ollama, il s\'exécute sur MLX sans configuration supplémentaire ; consultez les notes de version de votre version installée pour la liste actuelle.',
          '<strong>Choisissez <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> pour une interface graphique avec choix du moteur par modèle, ou <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'fr\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> pour un contrôle Python.</strong> LM Studio permet de choisir son moteur MLX ou llama.cpp pour chaque modèle. mlx-lm s\'installe avec <code>pip install mlx-lm</code> et fournit son propre serveur compatible OpenAI. Voir <a href="/fr/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> pour la comparaison complète.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur Ollama et MLX sur Apple Silicon',
        faqs: [
          {
            q: 'Ollama utilise-t-il MLX par défaut sur Mac ?',
            a: 'Pour les architectures prises en charge, oui : selon les notes de la version 0.40, les architectures prises en charge par le runtime MLX s\'exécutent automatiquement sur MLX sur Apple Silicon. La préversion 0.19 se limitait à un modèle et à un Mac avec plus de 32 Go de mémoire unifiée. Consultez les notes de votre version installée.',
          },
          {
            q: 'Quels modèles tournent sur MLX dans Ollama ?',
            a: 'Les notes de la version 0.40 citent notamment qwen3.5, qwen3.6 et gemma4 parmi les modèles exécutés par le runtime MLX. La liste s\'allonge avec les versions : consultez les notes de la vôtre.',
          },
          {
            q: 'Ollama est-il encore plus lent que mlx-lm sur Apple Silicon ?',
            a: 'L\'écart est probablement plus faible maintenant qu\'Ollama utilise MLX pour les modèles pris en charge, mais PromptQuorum ne les a pas comparés directement. La vitesse dépend de la puce, du modèle, de la quantification et de la longueur de contexte : testez votre propre modèle.',
          },
          {
            q: 'LM Studio est-il fourni avec MLX ?',
            a: 'Oui — LM Studio intègre la prise en charge de MLX sur macOS et vous permet de la choisir par modèle. Inutile d\'installer Python ou mlx-lm séparément. Téléchargez LM Studio sur lmstudio.ai, chargez un modèle et choisissez le moteur MLX dans les réglages du modèle.',
          },
          {
            q: 'Puis-je utiliser Ollama et mlx-lm en même temps sur Mac ?',
            a: 'Oui. Ollama tourne comme service en arrière-plan sur le port 11434 ; le serveur de mlx-lm utilise le port que vous indiquez (8080 par défaut). Ils n\'entrent pas en conflit. Voir <a href="/fr/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> pour la comparaison complète.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Ollama Dernière Version : Quoi de neuf ?](/fr/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  ja: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-ja.webp',
    title: 'OllamaはApple SiliconでMLXをサポートしていますか？',
    seoTitle: 'OllamaはApple SiliconでMLXをサポート？（2026年）',
    metaDescription: 'はい。OllamaはApple Siliconで0.19からMLXバックエンドを追加し、0.40以降は対応アーキテクチャが自動的にMLXで動作します。対応範囲を解説。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      ja: {
        question: 'OllamaはApple SiliconでMLXをサポートしていますか？',
        answer: 'はい。Ollamaはバージョン0.19（2026年3月30日、プレビュー）でApple Silicon向けMLXバックエンドを追加し、バージョン0.40（2026年9月25日）以降はMLXランタイムが対応するアーキテクチャが自動的にMLXで動作します。対応外のアーキテクチャは自動では切り替わらないため、それらやPythonからの直接制御にはmlx-lmまたはLM Studioを使ってください。',
        bullets: [
          'Mac上のOllama：対応アーキテクチャにMLXランナー（0.40のノートにqwen3.5、qwen3.6、gemma4が記載）',
          '0.19のプレビューは統合メモリ32GB超のMacが必要だった',
          'その他のMLXオプション：mlx-lm（CLI/Python）またはLM Studio（MLXエンジン搭載のGUI）',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19（2026年3月30日）は、Apple SiliconバックエンドをAppleのMLXフレームワークで作り直してプレビュー提供し、対象は統合メモリ32GB超のMac上のQwen3.5-35B-A3Bでした',
          'リリースノートによると、バージョン0.40（2026年9月25日）以降はMLXランタイムが対応するモデルアーキテクチャがApple Silicon上で自動的にMLXで動作します',
          'Ollama自身のベンチマークでは、Qwen3.5-35B-A3Bのデコードが58から112 tokens/s、プリフィルが1,154から1,810 tokens/sへ、バージョン0.18（Q4_K_M）から0.19（NVFP4）で向上しました。量子化形式が異なるため、一般的な速度比ではありません',
        ],
      },
      body1: {
        title: 'OllamaがMLXを使う現在の仕組み',
        content: [
          '<strong>OllamaのApple Siliconサポートは現在2種類あります。</strong>バージョン0.19より前は、モデルはllama.cppとMetalで動作していました。バージョン0.19（2026年3月30日）がMLXバックエンドをプレビューとして追加し、バージョン0.40（2026年9月25日, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>）ではMLXランタイムが対応するアーキテクチャが自動的にMLXで動作します。リリースノートにはqwen3.5、qwen3.6、gemma4などが挙げられており、一覧はリリースごとに変わります。',
          'MLXはApple Silicon向けのAppleの機械学習フレームワークで、統合メモリアーキテクチャを直接利用します。<a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a>の発表では、NVFP4量子化や会話をまたぐキャッシュ再利用も説明されており、M5、M5 Pro、M5 MaxチップのGPUニューラルアクセラレータが最初のトークンまでの時間と生成を高速化するとされています。',
        ],
        columns: ['ツール', 'Macのバックエンド', 'MLX使用', '確認した版'],
        rows: [
          { 'ツール': 'Ollama', 'Macのバックエンド': 'MLX（対応モデル）/ llama.cpp', 'MLX使用': 'はい（対応モデル）', '確認した版': 'v0.40.6（2026年10月16日）' },
          { 'ツール': 'LM Studio', 'Macのバックエンド': 'MLXエンジンまたはllama.cpp', 'MLX使用': 'はい（選択可）', '確認した版': 'MLXエンジン v1.8.5（2026年6月5日）' },
          { 'ツール': 'mlx-lm', 'Macのバックエンド': 'MLXネイティブ', 'MLX使用': 'はい', '確認した版': 'v0.32.2（2026年10月16日）' },
          { 'ツール': 'llama.cpp', 'Macのバックエンド': 'llama.cpp + Metal', 'MLX使用': 'いいえ', '確認した版': 'b11714（2026年10月17日）' },
        ],
      },
      body2: {
        title: 'Macでどれを選ぶか',
        content: [
          '<strong>OpenAI互換APIを持つバックグラウンドサービスが欲しいなら、まず<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>から始めましょう。</strong>モデルのアーキテクチャがOllamaのMLXランタイムの対応範囲なら、追加設定なしでMLXで動作します。最新の一覧は、インストール済みバージョンのリリースノートで確認してください。',
          '<strong>モデルごとにエンジンを選べるGUIなら<a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a>、Pythonで制御したいなら<a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'ja\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a>を選びましょう。</strong>LM Studioではモデルごとに同社のMLXエンジンかllama.cppを選べます。mlx-lmは<code>pip install mlx-lm</code>でインストールでき、独自のOpenAI互換サーバーを備えています。詳しい比較は<a href="/ja/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Apple SiliconでのOllamaとMLXのよくある質問',
        faqs: [
          {
            q: 'OllamaはMacでデフォルトでMLXを使いますか？',
            a: '対応アーキテクチャではそうです。バージョン0.40のリリースノートによると、MLXランタイムが対応するモデルアーキテクチャはApple Silicon上で自動的にMLXで動作します。0.19のプレビューは1モデル、かつ統合メモリ32GB超のMacに限られていました。インストール済みバージョンのリリースノートを確認してください。',
          },
          {
            q: 'OllamaのMLXで動くモデルは？',
            a: 'バージョン0.40のリリースノートには、MLXランタイムで動作するモデルとしてqwen3.5、qwen3.6、gemma4などが挙げられています。一覧はリリースごとに増えるため、お使いのバージョンのノートを確認してください。',
          },
          {
            q: 'Apple SiliconではOllamaはまだmlx-lmより遅いですか？',
            a: '対応モデルでOllamaがMLXを使うようになったため差は小さくなっていると考えられますが、PromptQuorumは両者を直接比較測定していません。速度はチップ、モデル、量子化、コンテキスト長によって変わるため、ご自身のモデルで測定してください。',
          },
          {
            q: 'LM StudioにはMLXが付属していますか？',
            a: 'はい。LM StudioはmacOS向けにMLXサポートを内蔵しており、モデルごとに選択できます。Pythonやmlx-lmを別途インストールする必要はありません。lmstudio.aiからLM Studioをダウンロードし、モデルを読み込んで、モデル設定でMLXエンジンを選んでください。',
          },
          {
            q: 'MacでOllamaとmlx-lmを同時に使えますか？',
            a: 'はい。Ollamaはポート11434のバックグラウンドサービスとして動作し、mlx-lmのサーバーは指定したポート（デフォルト8080）で動作します。両者は競合しません。詳しい比較は<a href="/ja/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>をご覧ください。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Ollama最新バージョン：新機能は？](/ja/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  zh: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-zh.webp',
    title: 'Ollama 在 Apple Silicon 上支持 MLX 吗？',
    seoTitle: 'Ollama 在 Apple Silicon 上支持 MLX 吗？（2026）',
    metaDescription: '支持——Ollama 在 0.19 版为 Apple Silicon 新增 MLX 后端；自 0.40 版起，受支持的模型架构会自动在 MLX 上运行。了解覆盖范围。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    quickAnswerTop: {
      zh: {
        question: 'Ollama 在 Apple Silicon 上支持 MLX 吗？',
        answer: '支持。Ollama 在 0.19 版（2026年3月30日，预览版）为 Apple Silicon 新增了 MLX 后端，自 0.40 版（2026年9月25日）起，其 MLX 运行时支持的架构会自动在 MLX 上运行。不在支持范围内的架构不会自动切换；对这些架构，或需要直接用 Python 控制时，请使用 mlx-lm 或 LM Studio。',
        bullets: [
          'Mac 上的 Ollama：对受支持的架构使用 MLX 运行器（0.40 的说明中提到 qwen3.5、qwen3.6 和 gemma4）',
          '0.19 预览版要求统一内存超过 32 GB 的 Mac',
          '其他 MLX 选项：mlx-lm（CLI/Python）或 LM Studio（带 MLX 引擎的图形界面）',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19（2026年3月30日）以预览形式将其 Apple Silicon 后端重建在 Apple 的 MLX 框架之上，覆盖统一内存超过 32 GB 的 Mac 上的 Qwen3.5-35B-A3B',
          '根据发行说明，自 0.40 版（2026年9月25日）起，MLX 运行时支持的模型架构会在 Apple Silicon 上自动使用 MLX 运行',
          'Ollama 自己的基准测试显示，Qwen3.5-35B-A3B 的解码速度由 58 提升到 112 tokens/s，预填充由 1,154 提升到 1,810 tokens/s（0.18 版 Q4_K_M 对比 0.19 版 NVFP4）——量化格式不同，因此不是通用的速度比值',
        ],
      },
      body1: {
        title: 'Ollama 目前如何使用 MLX',
        content: [
          '<strong>Ollama 现在在 Apple Silicon 上有两类支持。</strong>0.19 版之前，模型通过 llama.cpp 和 Metal 运行。0.19 版（2026年3月30日）以预览形式新增 MLX 后端，0.40 版（2026年9月25日, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>）则让 MLX 运行时支持的模型架构自动在 MLX 上运行。发行说明中提到了 qwen3.5、qwen3.6 和 gemma4 等；该列表随版本变化。',
          'MLX 是 Apple 面向 Apple Silicon 的机器学习框架，直接利用统一内存架构。<a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> 的公告还介绍了 NVFP4 量化和跨对话的缓存复用，并指出 M5、M5 Pro 和 M5 Max 芯片中的 GPU 神经加速器可加快首个 token 的时间和生成速度。',
        ],
        columns: ['工具', 'Mac 后端', '使用 MLX？', '已核对版本'],
        rows: [
          { '工具': 'Ollama', 'Mac 后端': 'MLX（受支持模型）/ llama.cpp', '使用 MLX？': '是（受支持模型）', '已核对版本': 'v0.40.6（2026年10月16日）' },
          { '工具': 'LM Studio', 'Mac 后端': 'MLX 引擎或 llama.cpp', '使用 MLX？': '是（可选）', '已核对版本': 'MLX 引擎 v1.8.5（2026年6月5日）' },
          { '工具': 'mlx-lm', 'Mac 后端': 'MLX 原生', '使用 MLX？': '是', '已核对版本': 'v0.32.2（2026年10月16日）' },
          { '工具': 'llama.cpp', 'Mac 后端': 'llama.cpp + Metal', '使用 MLX？': '否', '已核对版本': 'b11714（2026年10月17日）' },
        ],
      },
      body2: {
        title: '在 Mac 上选哪个',
        content: [
          '<strong>如果你想要带 OpenAI 兼容 API 的后台服务，先从<a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>开始。</strong>如果模型架构受 Ollama 的 MLX 运行时支持，无需额外设置就会在 MLX 上运行；当前列表请查看所安装版本的发行说明。',
          '<strong>想要可按模型选择引擎的图形界面选<a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a>，想用 Python 控制选<a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'zh\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a>。</strong>LM Studio 可为每个模型选择其 MLX 引擎或 llama.cpp。mlx-lm 通过 <code>pip install mlx-lm</code> 安装，并自带 OpenAI 兼容服务器。完整对比见<a href="/zh/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于 Apple Silicon 上 Ollama 与 MLX 的快速解答',
        faqs: [
          {
            q: 'Ollama 在 Mac 上默认使用 MLX 吗？',
            a: '对受支持的架构是的：根据 0.40 版发行说明，MLX 运行时支持的模型架构会在 Apple Silicon 上自动使用 MLX 运行。0.19 预览版仅限一个模型，且要求统一内存超过 32 GB 的 Mac。请查看所安装版本的发行说明。',
          },
          {
            q: 'Ollama 中哪些模型在 MLX 上运行？',
            a: '0.40 版发行说明提到 qwen3.5、qwen3.6 和 gemma4 等模型在 MLX 运行时上运行。该列表随版本增加，请查看你所用版本的说明。',
          },
          {
            q: '在 Apple Silicon 上 Ollama 仍然比 mlx-lm 慢吗？',
            a: 'Ollama 现在对受支持的模型使用 MLX，差距可能已经缩小，但 PromptQuorum 没有对二者做直接对比测试。速度取决于芯片、模型、量化方式和上下文长度，请用你自己的模型测试。',
          },
          {
            q: 'LM Studio 自带 MLX 吗？',
            a: '是的——LM Studio 在 macOS 上内置 MLX 支持，并可按模型选择。你不需要单独安装 Python 或 mlx-lm。从 lmstudio.ai 下载 LM Studio，加载模型，然后在模型设置中选择 MLX 引擎。',
          },
          {
            q: '在 Mac 上可以同时使用 Ollama 和 mlx-lm 吗？',
            a: '可以。Ollama 作为后台服务运行在 11434 端口；mlx-lm 的服务器运行在你指定的端口（默认 8080），二者互不冲突。完整对比见<a href="/zh/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Ollama最新版本：有什么新功能？](/zh/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  pt: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-pt.webp',
    title: 'O Ollama suporta MLX no Apple Silicon?',
    seoTitle: 'O Ollama oferece suporte a MLX no Apple Silicon? (2026)',
    metaDescription: 'Sim — o Ollama adicionou um backend MLX no Apple Silicon na 0.19; desde a 0.40, arquiteturas compatíveis rodam automaticamente em MLX.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M5 family'],
    educationalLevel: 'Beginner',
    audience: 'Usuários Mac se perguntando se o Ollama usa MLX para aceleração',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'convert-ollama-model-to-mlx', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      pt: {
        question: 'O Ollama oferece suporte a MLX no Apple Silicon?',
        answer: 'Sim. O Ollama adicionou um backend MLX para Apple Silicon na versão 0.19 (30 de março de 2026, prévia) e, desde a versão 0.40 (25 de setembro de 2026), as arquiteturas compatíveis com seu runtime MLX rodam automaticamente em MLX. Arquiteturas fora dessa compatibilidade não são trocadas automaticamente; para elas, ou para controle direto em Python, use o mlx-lm ou o LM Studio.',
        bullets: [
          'Ollama no Mac: runner MLX para arquiteturas compatíveis (qwen3.5, qwen3.6 e gemma4 aparecem nas notas da 0.40)',
          'A prévia da 0.19 exigia um Mac com mais de 32 GB de memória unificada',
          'Outras opções MLX: mlx-lm (CLI/Python) ou LM Studio (GUI com motor MLX)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'O Ollama 0.19 (30 de março de 2026) reconstruiu seu backend de Apple Silicon sobre o framework MLX da Apple como prévia, para o Qwen3.5-35B-A3B em Macs com mais de 32 GB de memória unificada',
          'Segundo as notas de versão, desde a versão 0.40 (25 de setembro de 2026) as arquiteturas compatíveis com o runtime MLX rodam automaticamente em MLX no Apple Silicon',
          'No benchmark do próprio Ollama, a decodificação do Qwen3.5-35B-A3B subiu de 58 para 112 tokens/s e o prefill de 1.154 para 1.810 tokens/s entre a versão 0.18 (Q4_K_M) e a 0.19 (NVFP4) — formatos de quantização diferentes, portanto não é uma proporção geral de velocidade',
        ],
      },
      body1: {
        title: 'Como o Ollama usa o MLX hoje',
        content: [
          '<strong>O Ollama agora tem dois tipos de suporte no Apple Silicon.</strong> Antes da versão 0.19, os modelos rodavam via llama.cpp com Metal. A versão 0.19 (30 de março de 2026) adicionou um backend MLX como prévia, e a versão 0.40 (25 de setembro de 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) executa automaticamente em MLX as arquiteturas compatíveis com o runtime MLX. As notas de versão citam, entre outras, qwen3.5, qwen3.6 e gemma4; a lista muda a cada versão.',
          'O MLX é o framework de aprendizado de máquina da Apple para Apple Silicon e usa diretamente a arquitetura de memória unificada. O anúncio em <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> também descreve a quantização NVFP4 e o reaproveitamento de cache entre conversas, e diz que os aceleradores neurais de GPU dos chips M5, M5 Pro e M5 Max aceleram o tempo até o primeiro token e a geração.',
        ],
        columns: ['Ferramenta', 'Backend no Mac', 'Usa MLX?', 'Versão verificada'],
        rows: [
          { 'Ferramenta': 'Ollama', 'Backend no Mac': 'MLX (modelos compatíveis) / llama.cpp', 'Usa MLX?': 'Sim, em modelos compatíveis', 'Versão verificada': 'v0.40.6 (16 de outubro de 2026)' },
          { 'Ferramenta': 'LM Studio', 'Backend no Mac': 'Motor MLX ou llama.cpp', 'Usa MLX?': 'Sim (à escolha)', 'Versão verificada': 'Motor MLX v1.8.5 (5 de junho de 2026)' },
          { 'Ferramenta': 'mlx-lm', 'Backend no Mac': 'MLX nativo', 'Usa MLX?': 'Sim', 'Versão verificada': 'v0.32.2 (16 de outubro de 2026)' },
          { 'Ferramenta': 'llama.cpp', 'Backend no Mac': 'llama.cpp + Metal', 'Usa MLX?': 'Não', 'Versão verificada': 'b11714 (17 de outubro de 2026)' },
        ],
      },
      body2: {
        title: 'Qual opção escolher no Mac',
        content: [
          '<strong>Comece com o <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> se quiser um serviço em segundo plano com API compatível com OpenAI.</strong> Se a arquitetura do modelo for compatível com o runtime MLX do Ollama, ele roda em MLX sem configuração extra; consulte as notas de versão da sua versão instalada para ver a lista atual.',
          '<strong>Escolha o <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> para uma GUI com escolha de motor por modelo, ou o <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'pt\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> para controle em Python.</strong> O LM Studio permite escolher seu motor MLX ou o llama.cpp para cada modelo. O mlx-lm é instalado com <code>pip install mlx-lm</code> e traz seu próprio servidor compatível com OpenAI. Veja <a href="/pt/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> para a comparação completa.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas rápidas: Ollama e MLX',
        faqs: [
          {
            q: 'O Ollama usa MLX por padrão no Mac?',
            a: 'Nas arquiteturas compatíveis, sim: segundo as notas da versão 0.40, as arquiteturas compatíveis com o runtime MLX rodam automaticamente em MLX no Apple Silicon. A prévia da 0.19 se limitava a um modelo e a um Mac com mais de 32 GB de memória unificada. Consulte as notas da sua versão instalada.',
          },
          {
            q: 'Quais modelos rodam em MLX no Ollama?',
            a: 'As notas da versão 0.40 citam, entre outros, qwen3.5, qwen3.6 e gemma4 entre os modelos que rodam no runtime MLX. A lista cresce a cada versão: consulte as notas da sua.',
          },
          {
            q: 'O Ollama ainda é mais lento que o mlx-lm no Apple Silicon?',
            a: 'A diferença provavelmente é menor agora que o Ollama usa MLX nos modelos compatíveis, mas a PromptQuorum não os comparou diretamente. A velocidade depende do chip, do modelo, da quantização e do tamanho do contexto: teste o seu próprio modelo.',
          },
          {
            q: 'O LM Studio já vem com MLX instalado?',
            a: 'Sim — o LM Studio inclui suporte a MLX no macOS e permite escolhê-lo por modelo. Você não precisa instalar Python nem o mlx-lm separadamente. Baixe o LM Studio em lmstudio.ai, carregue um modelo e escolha o motor MLX nas configurações do modelo.',
          },
          {
            q: 'Posso usar o Ollama e o mlx-lm ao mesmo tempo no Mac?',
            a: 'Sim. O Ollama roda como serviço em segundo plano na porta 11434; o servidor do mlx-lm usa a porta que você indicar (padrão 8080). Eles não entram em conflito. Veja <a href="/pt/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> para a comparação completa.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Ollama Última Versão: O que há de novo?](/pt/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  es: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-es.webp',
    title: '¿Ollama soporta MLX en Apple Silicon?',
    seoTitle: '¿Ollama es compatible con MLX en Apple Silicon? (2026)',
    metaDescription: 'Sí: Ollama añadió un backend MLX en Apple Silicon en la 0.19; desde la 0.40, las arquitecturas compatibles se ejecutan automáticamente en MLX.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M5 family'],
    educationalLevel: 'Principiante',
    audience: 'Usuarios Mac preguntándose si Ollama usa MLX para aceleración',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'convert-ollama-model-to-mlx', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      es: {
        question: '¿Ollama es compatible con MLX en Apple Silicon?',
        answer: 'Sí. Ollama añadió un backend MLX para Apple Silicon en la versión 0.19 (30 de marzo de 2026, vista previa) y, desde la versión 0.40 (25 de septiembre de 2026), las arquitecturas compatibles con su runtime MLX se ejecutan automáticamente en MLX. Las arquitecturas fuera de esa compatibilidad no se cambian automáticamente; para ellas, o para control directo en Python, usa mlx-lm o LM Studio.',
        bullets: [
          'Ollama en Mac: runner MLX para arquitecturas compatibles (qwen3.5, qwen3.6 y gemma4 aparecen en las notas de la 0.40)',
          'La vista previa de la 0.19 requería un Mac con más de 32 GB de memoria unificada',
          'Otras opciones MLX: mlx-lm (CLI/Python) o LM Studio (GUI con motor MLX)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19 (30 de marzo de 2026) reconstruyó su backend de Apple Silicon sobre el framework MLX de Apple como vista previa, para Qwen3.5-35B-A3B en Mac con más de 32 GB de memoria unificada',
          'Según las notas de versión, desde la versión 0.40 (25 de septiembre de 2026) las arquitecturas compatibles con el runtime MLX se ejecutan automáticamente en MLX en Apple Silicon',
          'En el benchmark propio de Ollama, la decodificación de Qwen3.5-35B-A3B pasó de 58 a 112 tokens/s y el prefill de 1.154 a 1.810 tokens/s entre la versión 0.18 (Q4_K_M) y la 0.19 (NVFP4): formatos de cuantización distintos, no una proporción general de velocidad',
        ],
      },
      body1: {
        title: 'Cómo usa Ollama MLX hoy',
        content: [
          '<strong>Ollama tiene ahora dos tipos de compatibilidad en Apple Silicon.</strong> Antes de la versión 0.19 ejecutaba los modelos con llama.cpp y Metal. La versión 0.19 (30 de marzo de 2026) añadió un backend MLX como vista previa, y la versión 0.40 (25 de septiembre de 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) ejecuta automáticamente en MLX las arquitecturas compatibles con el runtime MLX. Las notas de versión citan, entre otras, qwen3.5, qwen3.6 y gemma4; la lista cambia con cada versión.',
          'MLX es el framework de aprendizaje automático de Apple para Apple Silicon y usa directamente la arquitectura de memoria unificada. El anuncio de <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> describe también la cuantización NVFP4 y la reutilización de caché entre conversaciones, e indica que los aceleradores neuronales de GPU de los chips M5, M5 Pro y M5 Max aceleran el tiempo hasta el primer token y la generación.',
        ],
        columns: ['Herramienta', 'Backend en Mac', '¿Usa MLX?', 'Versión comprobada'],
        rows: [
          { 'Herramienta': 'Ollama', 'Backend en Mac': 'MLX (modelos compatibles) / llama.cpp', '¿Usa MLX?': 'Sí, en modelos compatibles', 'Versión comprobada': 'v0.40.6 (16 de octubre de 2026)' },
          { 'Herramienta': 'LM Studio', 'Backend en Mac': 'Motor MLX o llama.cpp', '¿Usa MLX?': 'Sí (a elegir)', 'Versión comprobada': 'Motor MLX v1.8.5 (5 de junio de 2026)' },
          { 'Herramienta': 'mlx-lm', 'Backend en Mac': 'MLX nativo', '¿Usa MLX?': 'Sí', 'Versión comprobada': 'v0.32.2 (16 de octubre de 2026)' },
          { 'Herramienta': 'llama.cpp', 'Backend en Mac': 'llama.cpp + Metal', '¿Usa MLX?': 'No', 'Versión comprobada': 'b11714 (17 de octubre de 2026)' },
        ],
      },
      body2: {
        title: 'Qué opción elegir en Mac',
        content: [
          '<strong>Empieza con <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> si quieres un servicio en segundo plano con una API compatible con OpenAI.</strong> Si la arquitectura del modelo es compatible con el runtime MLX de Ollama, se ejecuta en MLX sin configuración extra; consulta las notas de versión de tu versión instalada para ver la lista actual.',
          '<strong>Elige <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> para una GUI con elección de motor por modelo, o <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'es\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> para control en Python.</strong> LM Studio permite elegir su motor MLX o llama.cpp para cada modelo. mlx-lm se instala con <code>pip install mlx-lm</code> y ofrece su propio servidor compatible con OpenAI. Consulta <a href="/es/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> para la comparación completa.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas rápidas: Ollama y MLX',
        faqs: [
          {
            q: '¿Ollama usa MLX por defecto en Mac?',
            a: 'En las arquitecturas compatibles, sí: según las notas de la versión 0.40, las arquitecturas compatibles con el runtime MLX se ejecutan automáticamente en MLX en Apple Silicon. La vista previa de la 0.19 se limitaba a un modelo y a un Mac con más de 32 GB de memoria unificada. Consulta las notas de tu versión instalada.',
          },
          {
            q: '¿Qué modelos se ejecutan en MLX en Ollama?',
            a: 'Las notas de la versión 0.40 citan, entre otros, qwen3.5, qwen3.6 y gemma4 entre los modelos que se ejecutan en el runtime MLX. La lista crece con las versiones: consulta las notas de la tuya.',
          },
          {
            q: '¿Ollama sigue siendo más lento que mlx-lm en Apple Silicon?',
            a: 'La diferencia probablemente es menor ahora que Ollama usa MLX en los modelos compatibles, pero PromptQuorum no los ha comparado directamente. La velocidad depende del chip, el modelo, la cuantización y la longitud de contexto: prueba tu propio modelo.',
          },
          {
            q: '¿LM Studio incluye MLX instalado?',
            a: 'Sí — LM Studio incluye compatibilidad con MLX en macOS y permite elegirla por modelo. No necesitas instalar Python ni mlx-lm por separado. Descarga LM Studio desde lmstudio.ai, carga un modelo y elige el motor MLX en la configuración del modelo.',
          },
          {
            q: '¿Puedo usar Ollama y mlx-lm a la vez en Mac?',
            a: 'Sí. Ollama funciona como servicio en segundo plano en el puerto 11434; el servidor de mlx-lm usa el puerto que indiques (8080 por defecto). No entran en conflicto. Consulta <a href="/es/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a> para la comparación completa.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Ollama Última Versión: ¿Qué hay de nuevo?](/es/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  ar: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-ar.webp',
    title: 'هل يدعم ⁨Ollama MLX⁩ على ⁨Apple Silicon⁩؟',
    seoTitle: 'هل يدعم ⁨Ollama⁩ مكتبة ⁨MLX⁩ على ⁨Apple Silicon⁩؟ (2026)',
    metaDescription: 'نعم — أضاف ⁨Ollama⁩ واجهة ⁨MLX⁩ الخلفية على ⁨Apple Silicon⁩ في ⁨0.19⁩؛ ومنذ ⁨0.40⁩ تعمل البنى المدعومة على ⁨MLX⁩ تلقائياً. تعرّف على نطاق الدعم.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M5 family'],
    educationalLevel: 'Principiante',
    audience: 'مستخدمو Mac الذين يتساءلون عما إذا كان Ollama يستخدم MLX للتسريع',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'convert-ollama-model-to-mlx', 'ollama-vs-lm-studio'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل يدعم Ollama مكتبة MLX على Apple Silicon؟',
        answer: 'نعم. أضاف Ollama واجهة MLX الخلفية لـ Apple Silicon في الإصدار 0.19 (30 مارس 2026، معاينة)، ومنذ الإصدار 0.40 (25 سبتمبر 2026) تعمل البنى التي يدعمها مشغّل MLX لديه على MLX تلقائياً. البنى خارج هذا الدعم لا تُحوَّل تلقائياً؛ وبالنسبة لها، أو للتحكم المباشر عبر Python، استخدم mlx-lm أو LM Studio.',
        bullets: [
          'Ollama على Mac: مشغّل MLX للبنى المدعومة (تُذكر qwen3.5 وqwen3.6 وgemma4 في ملاحظات 0.40)',
          'تطلبت معاينة 0.19 جهاز Mac بذاكرة موحّدة تزيد على 32 جيجابايت',
          'خيارات MLX الأخرى: mlx-lm (سطر أوامر/Python) أو LM Studio (واجهة رسومية بمحرك MLX)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أعاد Ollama 0.19 (30 مارس 2026) بناء واجهته الخلفية لـ Apple Silicon على إطار MLX من Apple كمعاينة، لنموذج Qwen3.5-35B-A3B على أجهزة Mac بذاكرة موحّدة تزيد على 32 جيجابايت',
          'بحسب ملاحظات الإصدار، تعمل منذ الإصدار 0.40 (25 سبتمبر 2026) بنى النماذج التي يدعمها مشغّل MLX على MLX تلقائياً على Apple Silicon',
          'في اختبار Ollama نفسه ارتفع فك التشفير لنموذج Qwen3.5-35B-A3B من 58 إلى 112 رمزاً/ثانية، والمعالجة المسبقة من 1,154 إلى 1,810 رمزاً/ثانية بين الإصدار 0.18 (Q4_K_M) والإصدار 0.19 (NVFP4) — صيغ تكميم مختلفة، فهي ليست نسبة سرعة عامة',
        ],
      },
      body1: {
        title: 'كيف يستخدم Ollama مكتبة MLX اليوم',
        content: [
          '<strong>لدى Ollama الآن نوعان من الدعم على Apple Silicon.</strong> قبل الإصدار 0.19 كانت النماذج تعمل عبر llama.cpp مع Metal. أضاف الإصدار 0.19 (30 مارس 2026) واجهة MLX الخلفية كمعاينة، ويشغّل الإصدار 0.40 (25 سبتمبر 2026, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>) بنى النماذج التي يدعمها مشغّل MLX على MLX تلقائياً. تذكر ملاحظات الإصدار qwen3.5 وqwen3.6 وgemma4 وغيرها؛ وتتغير القائمة مع كل إصدار.',
          'MLX هو إطار تعلّم الآلة من Apple لمعالجات Apple Silicon، ويستفيد مباشرة من بنية الذاكرة الموحّدة. ويصف إعلان <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> أيضاً تكميم NVFP4 وإعادة استخدام الذاكرة المؤقتة بين المحادثات، ويذكر أن مسرّعات GPU العصبية في شرائح M5 وM5 Pro وM5 Max تسرّع الزمن حتى أول رمز والتوليد.',
        ],
        columns: ['الأداة', 'الواجهة على Mac', 'تستخدم MLX؟', 'الإصدار المفحوص'],
        rows: [
          { 'الأداة': 'Ollama', 'الواجهة على Mac': 'MLX (النماذج المدعومة) / llama.cpp', 'تستخدم MLX؟': 'نعم، للنماذج المدعومة', 'الإصدار المفحوص': 'v0.40.6 (16 أكتوبر 2026)' },
          { 'الأداة': 'LM Studio', 'الواجهة على Mac': 'محرك MLX أو llama.cpp', 'تستخدم MLX؟': 'نعم (يُختار)', 'الإصدار المفحوص': 'محرك MLX v1.8.5 (5 يونيو 2026)' },
          { 'الأداة': 'mlx-lm', 'الواجهة على Mac': 'MLX أصلي', 'تستخدم MLX؟': 'نعم', 'الإصدار المفحوص': 'v0.32.2 (16 أكتوبر 2026)' },
          { 'الأداة': 'llama.cpp', 'الواجهة على Mac': 'llama.cpp + Metal', 'تستخدم MLX؟': 'لا', 'الإصدار المفحوص': 'b11714 (17 أكتوبر 2026)' },
        ],
      },
      body2: {
        title: 'أي خيار تختار على Mac',
        content: [
          '<strong>ابدأ بـ <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">Ollama</a> إذا أردت خدمة في الخلفية بواجهة API متوافقة مع OpenAI.</strong> إذا كانت بنية النموذج مدعومة في مشغّل MLX لدى Ollama فسيعمل على MLX دون إعداد إضافي؛ وللاطلاع على القائمة الحالية راجع ملاحظات الإصدار الذي ثبّتّه.',
          '<strong>اختر <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a> لواجهة رسومية مع اختيار المحرك لكل نموذج، أو <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'ar\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a> للتحكم عبر Python.</strong> يتيح LM Studio اختيار محرك MLX الخاص به أو llama.cpp لكل نموذج. ويُثبَّت mlx-lm بالأمر <code>pip install mlx-lm</code> ويوفّر خادماً خاصاً متوافقاً مع OpenAI. راجع <a href="/ar/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX مقابل Ollama مقابل llama.cpp</a> للمقارنة الكاملة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة سريعة: Ollama وMLX',
        faqs: [
          {
            q: 'هل يستخدم Ollama مكتبة MLX افتراضياً على Mac؟',
            a: 'للبنى المدعومة نعم: بحسب ملاحظات الإصدار 0.40 تعمل بنى النماذج التي يدعمها مشغّل MLX على MLX تلقائياً على Apple Silicon. أما معاينة 0.19 فكانت مقتصرة على نموذج واحد وعلى جهاز Mac بذاكرة موحّدة تزيد على 32 جيجابايت. راجع ملاحظات الإصدار الذي ثبّتّه.',
          },
          {
            q: 'ما النماذج التي تعمل على MLX في Ollama؟',
            a: 'تذكر ملاحظات الإصدار 0.40 نماذج منها qwen3.5 وqwen3.6 وgemma4 ضمن النماذج التي تعمل على مشغّل MLX. وتتسع القائمة مع الإصدارات، فراجع ملاحظات إصدارك.',
          },
          {
            q: 'هل ما زال Ollama أبطأ من mlx-lm على Apple Silicon؟',
            a: 'من المرجّح أن الفارق أصغر الآن بعد أن صار Ollama يستخدم MLX للنماذج المدعومة، لكن PromptQuorum لم تقارنهما مباشرة. تعتمد السرعة على الشريحة والنموذج والتكميم وطول السياق، فاختبر نموذجك بنفسك.',
          },
          {
            q: 'هل يأتي LM Studio مع MLX مثبّتاً؟',
            a: 'نعم — يتضمن LM Studio دعم MLX على macOS ويتيح اختياره لكل نموذج. لا تحتاج إلى تثبيت Python أو mlx-lm بشكل منفصل. نزّل LM Studio من lmstudio.ai وحمّل نموذجاً ثم اختر محرك MLX في إعدادات النموذج.',
          },
          {
            q: 'هل يمكنني استخدام Ollama وmlx-lm معاً على Mac؟',
            a: 'نعم. يعمل Ollama كخدمة في الخلفية على المنفذ 11434، ويعمل خادم mlx-lm على منفذ تحدده (الافتراضي 8080). لا يتعارضان. راجع <a href="/ar/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX مقابل Ollama مقابل llama.cpp</a> للمقارنة الكاملة.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أحدث إصدار من Ollama: ما الجديد؟](/ar/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
  ko: {
    theme: 'Tool Comparisons',
    heroImage: '/images/ollama-mlx-apple-silicon-overview-hero-ko.webp',
    title: 'Ollama는 Apple Silicon에서 MLX를 지원합니까?',
    seoTitle: 'Ollama는 Apple Silicon에서 MLX를 지원할까? (2026)',
    metaDescription: '네. Ollama는 0.19에서 Apple Silicon용 MLX 백엔드를 추가했고, 0.40부터 지원 모델 아키텍처가 자동으로 MLX에서 실행됩니다. 지원 범위를 확인하세요.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen3.5-35B-A3B'],
    current_hardware_mentioned: ['Apple Silicon', 'Apple M5 family'],
    educationalLevel: '초급',
    audience: 'Ollama가 MLX 가속을 사용하는지 궁금한 Mac 사용자',
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mlx-vs-ollama-vs-llamacpp', 'convert-ollama-model-to-mlx', 'ollama-vs-lm-studio'],
    is_living_page: false,
    targetKeywords: [
      'Ollama MLX 지원',
      'Apple Silicon 로컬 LLM',
      'mlx-lm 설치 방법',
      'LM Studio MLX 백엔드',
      'Ollama MLX 백엔드',
    ],
    readTime: '3분 분량',
    quickAnswerTop: {
      ko: {
        question: 'Ollama는 Apple Silicon에서 MLX를 지원합니까?',
        answer: '네. Ollama는 버전 0.19(2026년 3월 30일, 미리보기)에서 Apple Silicon용 MLX 백엔드를 추가했고, 버전 0.40(2026년 9월 25일)부터는 MLX 런타임이 지원하는 아키텍처가 자동으로 MLX에서 실행됩니다. 그 밖의 아키텍처는 자동으로 전환되지 않으므로, 그런 경우나 Python 직접 제어에는 mlx-lm 또는 LM Studio를 사용하십시오.',
        bullets: [
          'Mac의 Ollama: 지원 아키텍처에 MLX 러너(0.40 노트에 qwen3.5, qwen3.6, gemma4 언급)',
          '0.19 미리보기는 통합 메모리 32GB 초과 Mac이 필요했음',
          '다른 MLX 옵션: mlx-lm(CLI/Python) 또는 LM Studio(MLX 엔진이 있는 GUI)',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ollama 0.19(2026년 3월 30일)는 Apple Silicon 백엔드를 Apple의 MLX 프레임워크 기반으로 다시 구축해 미리보기로 제공했으며, 통합 메모리 32GB 초과 Mac의 Qwen3.5-35B-A3B를 대상으로 했습니다',
          '릴리스 노트에 따르면 버전 0.40(2026년 9월 25일)부터 MLX 런타임이 지원하는 모델 아키텍처가 Apple Silicon에서 자동으로 MLX에서 실행됩니다',
          'Ollama 자체 벤치마크에서 Qwen3.5-35B-A3B의 디코드는 58에서 112 tokens/s로, 프리필은 1,154에서 1,810 tokens/s로 올랐습니다(버전 0.18 Q4_K_M 대 0.19 NVFP4). 양자화 형식이 다르므로 일반적인 속도 비율이 아닙니다',
        ],
      },
      body1: {
        title: 'Ollama가 지금 MLX를 사용하는 방식',
        content: [
          '<strong>Ollama는 이제 Apple Silicon에서 두 가지 방식으로 지원됩니다.</strong> 버전 0.19 이전에는 모델이 llama.cpp와 Metal로 실행되었습니다. 버전 0.19(2026년 3월 30일)가 MLX 백엔드를 미리보기로 추가했고, 버전 0.40(2026년 9월 25일, <a href="https://github.com/ollama/ollama/releases/tag/v0.40.0" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">v0.40.0</a>)은 MLX 런타임이 지원하는 모델 아키텍처를 자동으로 MLX에서 실행합니다. 릴리스 노트에는 qwen3.5, qwen3.6, gemma4 등이 언급되며, 목록은 릴리스마다 바뀝니다.',
          'MLX는 Apple Silicon을 위한 Apple의 머신러닝 프레임워크로, 통합 메모리 아키텍처를 직접 활용합니다. <a href="https://ollama.com/blog/mlx" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">ollama.com/blog/mlx</a> 발표는 NVFP4 양자화와 대화 간 캐시 재사용도 설명하며, M5·M5 Pro·M5 Max 칩의 GPU 뉴럴 액셀러레이터가 첫 토큰까지의 시간과 생성 속도를 높인다고 밝힙니다.',
        ],
        columns: ['도구', 'Mac 백엔드', 'MLX 사용?', '확인한 버전'],
        rows: [
          { '도구': 'Ollama', 'Mac 백엔드': 'MLX(지원 모델) / llama.cpp', 'MLX 사용?': '예(지원 모델)', '확인한 버전': 'v0.40.6(2026년 10월 16일)' },
          { '도구': 'LM Studio', 'Mac 백엔드': 'MLX 엔진 또는 llama.cpp', 'MLX 사용?': '예(선택 가능)', '확인한 버전': 'MLX 엔진 v1.8.5(2026년 6월 5일)' },
          { '도구': 'mlx-lm', 'Mac 백엔드': 'MLX 네이티브', 'MLX 사용?': '예', '확인한 버전': 'v0.32.2(2026년 10월 16일)' },
          { '도구': 'llama.cpp', 'Mac 백엔드': 'llama.cpp + Metal', 'MLX 사용?': '아니요', '확인한 버전': 'b11714(2026년 10월 17일)' },
        ],
      },
      body2: {
        title: 'Mac에서 어떤 옵션을 선택할까',
        content: [
          '<strong>OpenAI 호환 API를 갖춘 백그라운드 서비스를 원하면 <a href="https://ollama.com" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'Ollama\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">Ollama</a>로 시작하십시오.</strong> 모델 아키텍처가 Ollama의 MLX 런타임이 지원하는 것이라면 추가 설정 없이 MLX에서 실행됩니다. 현재 목록은 설치된 버전의 릴리스 노트에서 확인하십시오.',
          '<strong>모델별로 엔진을 고르는 GUI라면 <a href="https://lmstudio.ai" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'LM Studio\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">LM Studio</a>, Python 제어가 필요하면 <a href="https://github.com/ml-explore/mlx-lm" rel="nofollow noopener noreferrer" target="_blank" onclick="try{window.umami&&window.umami.track(\'outbound_click\',{product_name:\'mlx-lm\',source_page:window.location.pathname,language:\'ko\'})}catch(e){}" class="text-primary hover:underline">mlx-lm</a>을 선택하십시오.</strong> LM Studio는 모델마다 자체 MLX 엔진 또는 llama.cpp를 고를 수 있습니다. mlx-lm은 <code>pip install mlx-lm</code>으로 설치하며 자체 OpenAI 호환 서버를 제공합니다. 전체 비교는 <a href="/ko/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>를 참고하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Apple Silicon의 Ollama와 MLX에 대한 빠른 답변',
        faqs: [
          {
            q: 'Ollama는 Mac에서 기본적으로 MLX를 사용합니까?',
            a: '지원 아키텍처에서는 그렇습니다. 버전 0.40 릴리스 노트에 따르면 MLX 런타임이 지원하는 모델 아키텍처는 Apple Silicon에서 자동으로 MLX에서 실행됩니다. 0.19 미리보기는 하나의 모델과 통합 메모리 32GB 초과 Mac으로 제한되었습니다. 설치된 버전의 릴리스 노트를 확인하십시오.',
          },
          {
            q: 'Ollama에서 MLX로 실행되는 모델은 무엇입니까?',
            a: '버전 0.40 릴리스 노트는 MLX 런타임에서 실행되는 모델로 qwen3.5, qwen3.6, gemma4 등을 언급합니다. 목록은 릴리스마다 늘어나므로 사용 중인 버전의 노트를 확인하십시오.',
          },
          {
            q: 'Apple Silicon에서 Ollama는 여전히 mlx-lm보다 느립니까?',
            a: '지원 모델에서 Ollama가 MLX를 사용하므로 차이는 줄었을 가능성이 높지만, PromptQuorum은 둘을 직접 비교 측정하지 않았습니다. 속도는 칩, 모델, 양자화, 컨텍스트 길이에 따라 달라지므로 직접 쓰는 모델로 측정하십시오.',
          },
          {
            q: 'LM Studio에는 MLX가 설치되어 있습니까?',
            a: '네. LM Studio는 macOS에서 MLX 지원을 내장하고 있으며 모델별로 선택할 수 있습니다. Python이나 mlx-lm을 따로 설치할 필요가 없습니다. lmstudio.ai에서 LM Studio를 내려받아 모델을 불러온 뒤 모델 설정에서 MLX 엔진을 선택하십시오.',
          },
          {
            q: 'Mac에서 Ollama와 mlx-lm을 동시에 사용할 수 있습니까?',
            a: '네. Ollama는 포트 11434의 백그라운드 서비스로 실행되고, mlx-lm 서버는 지정한 포트(기본 8080)에서 실행됩니다. 서로 충돌하지 않습니다. 전체 비교는 <a href="/ko/prompt-bites/mlx-vs-ollama-vs-llamacpp" class="text-primary hover:underline">MLX vs Ollama vs llama.cpp</a>를 참고하십시오.',
          },
        ],
      },
      relatedReading: {
        title: '관련 자료',
        items: [
          '[MLX vs Ollama vs llama.cpp: 빠른 비교](/ko/prompt-bites/mlx-vs-ollama-vs-llamacpp)',
          '[Ollama 모델을 MLX로 변환하기](/ko/prompt-bites/convert-ollama-model-to-mlx)',
          '[Ollama vs LM Studio 비교](/ko/prompt-bites/ollama-vs-lm-studio)',
          '[Apple Silicon 로컬 LLM 종합 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026)',
          '[Ollama 최신 버전: 새로운 기능은?](/ko/prompt-bites/ollama-latest-version) -- Ollama updates',
        ],
      },
    },
  },
}
