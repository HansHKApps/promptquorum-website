// Auto-generated from src/lib/local-llms/content.ts
// Slug: how-to-install-ollama
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Getting Started',
      title: 'Install Ollama: 2-Minute Setup for macOS, Windows & Linux',
      dateModified: '2026-06-21',
      seoTitle: 'Install Ollama: 2-Minute Setup for macOS, Windows & Linux',
      intro: 'Ollama installs in under 2 minutes on macOS, Windows, and Linux. After installation, one command downloads and runs any model from the Ollama library -- no Python environment, no configuration files, and no GPU required to get started. Ollama maintains a curated model library at ollama.com/library, including Meta Llama 3.3, Qwen3, and Mistral.',
      metaDescription: 'Install Ollama in 2 minutes on any OS: download, run `ollama run llama3.2`, start chatting. Complete setup guide with troubleshooting for Beginners 2026.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-en.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ollama installs in under 2 minutes on macOS, Windows, and Linux. After installation, one command downloads and runs any model from the Ollama library -- no Python environment, no configuration files, and no GPU required to get started.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Install on macOS', anchor: '#install-on-macos' },
        { label: 'Install on Windows', anchor: '#install-on-windows' },
        { label: 'Install on Linux', anchor: '#install-on-linux' },
        { label: 'Pull and Run Your First Model', anchor: '#pull-and-run-your-first-model' },
        { label: 'Verify Ollama Is Working', anchor: '#verify-ollama-is-working' },
        { label: 'Useful Ollama Commands', anchor: '#useful-ollama-commands' },
        { label: 'Troubleshooting', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'macOS: download the .dmg from ollama.com or run `brew install ollama` -- then `ollama run llama3.2` to start chatting.',
            'Windows: download the installer from ollama.com/download. Ollama runs as a background service in the system tray.',
            'Linux: one curl command installs everything -- `curl -fsSL https://ollama.com/install.sh | sh`.',
            'Minimum requirements: 4 GB RAM for a 3B model, 8 GB RAM for a 7B model. No GPU needed to start.',
            'Ollama exposes an OpenAI-compatible API at `http://localhost:11434/v1` -- point an existing OpenAI SDK app at that `base_url` with any non-empty `api_key` and it works unchanged. The native Ollama REST API is separate, at `http://localhost:11434/api/...`.',
            '👉 **Before installing, confirm local is right for your use case** — see [Local LLM vs Cloud API](/local-llms/local-llm-limitations) for when cloud outperforms local inference.',
          ],
        },
        beforeYouInstall: {
          id: 'before-you-install',
          title: 'Before You Install: Is Local LLM Right for Your Use Case?',
          content: [
            'Installing Ollama takes 5 minutes, but running your first model well can take 20–40 minutes if you hit GPU detection issues, driver mismatches, or RAM constraints.',
            'If you\'re unsure whether local inference is the right choice for you, **[compare the full local vs cloud trade-offs first](https://www.promptquorum.com/local-llms/local-llm-limitations)** — you may find that starting with a cloud API (ready in 5 minutes, no troubleshooting) is the smarter path. Many users discover this after installation; better to decide now.',
            'For users committed to local, continue below. For users evaluating cloud first, [see the full comparison](https://www.promptquorum.com/local-llms/local-llm-limitations).',
          ],
        },
        whatIsOllama: {
          title: 'What Is Ollama and Why Use It?',
          content: [
            '**Ollama is an open-source inference engine that runs large language models locally.** It packages model management, the llama.cpp inference backend, and an OpenAI-compatible REST API into a single lightweight application. No Python, no conda environment, and no CUDA setup is required.',
            'Ollama maintains a curated model library (ollama.com/library) with one-command downloads for Meta Llama 3.3, Microsoft Phi-3, Google Gemma 2, Mistral, Qwen3, and other models. A model is downloaded once and cached on disk -- subsequent runs skip the download and load straight from disk, though Ollama unloads an idle model from memory after its keep-alive window (5 minutes by default), so a cold reload still takes as long as loading the model fresh.',
            'For alternatives to Ollama, see [Local LLM One-Click Installers](/local-llms/local-llm-one-click-installers). To compare Ollama with LM Studio, see [How to Install LM Studio](/local-llms/how-to-install-lm-studio).',
          ],
        },
        installMac: {
          id: 'install-on-macos',
          title: 'How Do You Install Ollama on macOS?',
          content: 'There are two methods. The installer download is faster; Homebrew is better if you manage software with brew.',
          numberedItems: [
            'Go to ollama.com/download and click "Download for macOS".',
            'Open the downloaded Ollama.dmg file and drag Ollama to your Applications folder.',
            'Launch Ollama from Applications. A llama icon appears in your menu bar -- Ollama is now running as a background service.',
            'Open Terminal and run your first model: `ollama run llama3.2`',
            'The model downloads (~2 GB for llama3.2:3b) and a chat prompt appears. Type a message and press Enter.',
          ],
        },
        installMacBrew: {
          title: 'Install Ollama on macOS with Homebrew',
          codeBlock: 'brew install ollama\n\n# Start the Ollama service\nollama serve &\n\n# Pull and run a model\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: 'How Do You Install Ollama on Windows?',
          numberedItems: [
            'Go to ollama.com/download and click "Download for Windows".',
            'Run the downloaded OllamaSetup.exe installer. Ollama installs to %LOCALAPPDATA%\\Programs\\Ollama.',
            'Ollama starts automatically and appears as a system tray icon.',
            'Open PowerShell or Command Prompt and run: `ollama run llama3.2`',
            'The model downloads on first run. Subsequent runs use the cached model.',
          ],
        },
        installWindowsNote: {
          title: 'GPU Support on Windows',
          content: 'Ollama on Windows automatically detects and uses NVIDIA GPUs (CUDA 11.3+) and AMD GPUs (ROCm 6+). If you have an NVIDIA RTX card, Ollama will offload model layers to VRAM automatically -- no manual configuration needed. To verify GPU is being used, run `ollama run llama3.2` and check Task Manager → GPU for activity.',
        },
        installLinux: {
          id: 'install-on-linux',
          title: 'How Do You Install Ollama on Linux?',
          content: 'A single command installs Ollama on any Linux distribution:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Run Ollama as a systemd Service on Linux',
          content: 'The install script automatically registers Ollama as a systemd service. To manage it:',
          codeBlock: '# Check service status\nsystemctl status ollama\n\n# Start / stop / restart\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# View logs\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-en.png',
          imageCaption: 'Four-step flow for running Ollama as a systemd service on Linux: install with `curl -fsSL https://ollama.com/install.sh | sh`, check status with `systemctl status ollama`, control it with `start`/`stop`/`restart`, and tail logs with `journalctl -u ollama -f`.',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: 'How Do You Pull and Run Your First Model in Ollama?',
          content: 'After installing Ollama, run this command to download and start a model:',
          codeBlock: '# Pull a model (downloads to ~/.ollama/models)\nollama pull llama3.2\n\n# Run it interactively\nollama run llama3.2\n\n# Or pull and run in one step\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          title: 'Which Model Should You Start With?',
          content: 'For a first run, these three models cover different hardware profiles:',
          rows: [
            { 'Model': 'Llama 3.2 3B', 'Download Size': '~2 GB', 'RAM Required': '4 GB', 'Best For': 'First test -- any machine' },
            { 'Model': 'Llama 3.3 8B', 'Download Size': '~4.7 GB', 'RAM Required': '8 GB', 'Best For': 'General use on most laptops' },
            { 'Model': 'phi4-mini', 'Download Size': '~2.3 GB', 'RAM Required': '4 GB', 'Best For': 'Fast responses, low RAM' },
          ],
          columns: ['Model', 'Download Size', 'RAM Required', 'Best For'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: 'How Do You Verify Ollama Is Working?',
          content: 'Test the REST API directly to confirm Ollama is running and accessible:',
          codeBlock: '# Check Ollama is running\ncurl http://localhost:11434\n# Expected: "Ollama is running"\n\n# List downloaded models\nollama list\n\n# Send a prompt via API (OpenAI-compatible)\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "What is 2+2?",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          title: 'Useful Ollama Commands',
          rows: [
            { 'Command': 'ollama list', 'What It Does': 'Show all downloaded models and their sizes' },
            { 'Command': 'ollama pull <model>', 'What It Does': 'Download a model without running it' },
            { 'Command': 'ollama rm <model>', 'What It Does': 'Delete a model from disk' },
            { 'Command': 'ollama ps', 'What It Does': 'Show models currently loaded in memory' },
            { 'Command': 'ollama show <model>', 'What It Does': 'Show model details (parameters, template, licence)' },
            { 'Command': 'ollama serve', 'What It Does': 'Start the Ollama server manually (if not running as service)' },
          ],
          columns: ['Command', 'What It Does'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Troubleshooting Common Ollama Installation Issues',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-en.png',
          imageCaption: 'Reference table of 5 common Ollama installation errors -- service not running, stalled 2-47 GB downloads, out-of-memory errors, undetected GPUs, and prompts truncated at 4096 tokens -- each mapped to its fix command.',
          faqs: [
            {
              q: 'Ollama says "could not connect to ollama app, is it running?"',
              a: 'Ollama is not running as a background service. On macOS: open the Ollama app from Applications. On Linux: run `systemctl start ollama` or `ollama serve` in a terminal. On Windows: launch Ollama from the Start menu.',
            },
            {
              q: 'The model download is very slow or stalled',
              a: 'Model downloads are large (2-47 GB). If the download stalls, press Ctrl+C and re-run `ollama pull <model>` -- Ollama resumes partial downloads. For faster downloads, use a wired connection instead of Wi-Fi.',
            },
            {
              q: 'I get "error: model requires more system memory" when running a model',
              a: 'The model is too large for your available RAM. Try a smaller quantization: `ollama run llama3.2-instruct-q4_0` instead of the default Q4_K_M. Or switch to a smaller model like `llama3.2:3b`. See [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) for RAM-matched recommendations.',
            },
            {
              q: 'Ollama is running but my GPU is not being used',
              a: 'For a native install (not Docker), you need the NVIDIA driver and CUDA runtime -- check with `nvidia-smi`, which should print your GPU and driver version. Ollama offloads layers to GPU automatically when VRAM is available; run `ollama ps` and check the PROCESSOR column reads 100% GPU. Only if you\'re running Ollama inside a Docker container do you additionally need the NVIDIA Container Toolkit on the host, plus `--gpus=all` on the container.',
            },
            {
              q: 'My prompt or document gets cut off partway through',
              a: 'Ollama\'s context window defaults to 4096 tokens on most consumer GPUs (it scales up automatically to 32K or 256K on higher-VRAM cards). Anything longer than the active window is silently truncated. Raise it per session with `/set parameter num_ctx 8192` in `ollama run`, per API call with `"options": {"num_ctx": 8192}`, or for every model with the `OLLAMA_CONTEXT_LENGTH` environment variable before starting the server. A larger context window uses more memory, so watch VRAM if you raise it a lot.',
            },
            {
              q: 'Where are Ollama model files stored?',
              a: 'Models are stored at ~/.ollama/models on macOS and Linux. On Windows, the default path is C:\\Users\\<username>\\.ollama\\models. You can change the storage location by setting the OLLAMA_MODELS environment variable before starting the service.',
            },
          ],
        },
        nextSteps: {
          title: 'What to Do After Installing Ollama?',
          content: 'Once Ollama is running, the next step is [Run Your First Local LLM](/local-llms/run-first-local-llm) to understand prompting, context length, and what to expect from local inference speed. To pick the best model for your hardware, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models). If you prefer a graphical chat interface over the terminal, [How to Install LM Studio](/local-llms/how-to-install-lm-studio) covers the desktop app alternative.',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '**[Ollama Official Website](https://ollama.com/download)** -- Installation downloads and official documentation',
            '**[Ollama GitHub Repository](https://github.com/ollama/ollama)** -- Source code, issues, and official docs (including [context length](https://github.com/ollama/ollama/blob/main/docs/context-length.mdx) and [GPU support](https://github.com/ollama/ollama/blob/main/docs/gpu.mdx))',
            '**[Ollama Model Library](https://ollama.com/library)** -- Curated collection of available models with download links',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes When Installing Ollama',
          items: [
            'Not checking that Ollama is running as a background service before expecting the API to respond.',
            'Attempting to run models larger than available RAM without checking memory requirements first.',
            'Ignoring GPU detection -- Ollama supports NVIDIA and AMD but requires up-to-date drivers.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Developer Stack](/local-llms/local-llm-developer-stack) -- Build a complete dev environment: CLI → API server → production multi-GPU.',
            '[What Are Local LLMs?](/local-llms/what-are-local-llms) -- Definition and core concepts',
            '[Run Your First Local LLM](/local-llms/run-first-local-llm) -- Next step after installation',
            '[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- Model recommendations by hardware',
            '[Local LLM One-Click Installers](/local-llms/local-llm-one-click-installers) -- Alternative tools to Ollama',
            '[MLX vs Ollama vs llama.cpp on Mac 2026](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Framework comparison for Apple Silicon: speed, setup time, and ecosystem trade-offs.',
            'Ollama is now installed and ready. The next challenge: writing prompts that get good results. Start here: [what is prompt engineering](https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering) covers fundamentals in plain language.',
            '[Como Instalar o Ollama (Português)](/pt/local-llms/how-to-install-ollama) — versão em português deste guia',
          '[Local LLM Model Updates 2026](/local-llms/local-llm-model-updates-2026) -- full timeline of every major open-weight model released for Ollama this year.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Install Ollama: 2-Minute Setup for macOS, Windows & Linux',
        'description': 'Install Ollama in 2 minutes on any OS: download, run ollama run llama3.2, start chatting. Complete setup guide with troubleshooting for Beginners 2026.',
        'url': 'https://www.promptquorum.com/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'local LLM installation' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
          { '@type': 'Thing', 'name': 'local AI inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do I install Ollama on macOS?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Download the .dmg from ollama.com, drag to Applications, launch, then run ollama run llama3.2 in Terminal. Alternatively: brew install ollama && ollama serve.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I install Ollama on Windows?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Download OllamaSetup.exe from ollama.com/download/windows and run it. Ollama installs as a background service. Open Command Prompt and run ollama run llama3.2.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I install Ollama on Linux?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Run: curl -fsSL https://ollama.com/install.sh | sh. This installs Ollama as a systemd service. Then: ollama pull llama3.2 to download your first model.' }
          },
          {
            '@type': 'Question',
            'name': 'What is the minimum RAM required for Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum 4GB RAM for a 3B model, 8GB for a 7B model at Q4 quantization. No GPU is required -- Ollama falls back to CPU inference automatically.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I run Ollama without a GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Ollama runs on CPU with no GPU. Inference is slower (2-5 tokens/sec vs 30-60 on GPU) but functional. Use small models like llama3.2:3b or phi3.5 on CPU-only systems.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I pull a new model with Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Run: ollama pull modelname. For example: ollama pull mistral or ollama pull qwen2.5:7b. Models are stored in ~/.ollama/models. List downloaded models with ollama list.' }
          },
          {
            '@type': 'Question',
            'name': 'What port does Ollama use?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama serves its API on port 11434 by default. Access it at http://localhost:11434. Change the port with the OLLAMA_HOST environment variable: OLLAMA_HOST=0.0.0.0:11435.' }
          },
          {
            '@type': 'Question',
            'name': 'Is Ollama API compatible with the OpenAI API?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Ollama supports the OpenAI chat completions endpoint at /v1/chat/completions. Any app built for OpenAI can use Ollama by setting base_url to http://localhost:11434/v1.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I see which models are installed in Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Run: ollama list. This shows all downloaded models, their sizes, and quantization levels. Remove a model with ollama rm modelname.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I update Ollama to the latest version?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'macOS/Windows: re-download the installer from ollama.com -- it overwrites the old version. Linux: re-run curl -fsSL https://ollama.com/install.sh | sh to update in place.' }
          }
        ]
      },
    },
    es: {
      freshness_tier: 'annual',
      theme: 'Getting Started',
      title: 'Instalar Ollama: Configuración en 2 Minutos para macOS, Windows y Linux',
      seoTitle: 'Instalar Ollama en 2 minutos: macOS, Windows y Linux',
      intro: 'Ollama se instala en menos de 2 minutos en macOS, Windows y Linux. Tras la instalación, un solo comando descarga y ejecuta cualquier modelo de la biblioteca de Ollama -- sin entorno Python, sin archivos de configuración y sin necesidad de GPU para empezar. A partir de abril de 2026, Ollama admite más de 200 modelos, incluidos Meta Llama 3.3, Qwen3 y Mistral.',
      metaDescription: 'Instala Ollama en 2 minutos en cualquier sistema: descarga, ejecuta `ollama run llama3.2` y empieza a chatear. Guía completa con solución de problemas.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-es.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ollama se instala en menos de 2 minutos en macOS, Windows y Linux. Tras la instalación, un solo comando descarga y ejecuta cualquier modelo de la biblioteca de Ollama -- sin entorno Python, sin archivos de configuración y sin necesidad de GPU para empezar.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '8 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Instalar en macOS', anchor: '#install-on-macos' },
        { label: 'Instalar en Windows', anchor: '#install-on-windows' },
        { label: 'Instalar en Linux', anchor: '#install-on-linux' },
        { label: 'Descargar y ejecutar tu primer modelo', anchor: '#pull-and-run-your-first-model' },
        { label: 'Verificar que Ollama funciona', anchor: '#verify-ollama-is-working' },
        { label: 'Comandos útiles de Ollama', anchor: '#useful-ollama-commands' },
        { label: 'Solución de problemas', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'macOS: descarga el .dmg desde ollama.com o ejecuta `brew install ollama` -- luego `ollama run llama3.2` para empezar a chatear.',
            'Windows: descarga el instalador desde ollama.com/download. Ollama se ejecuta como servicio en segundo plano en la bandeja del sistema.',
            'Linux: un solo comando curl lo instala todo -- `curl -fsSL https://ollama.com/install.sh | sh`.',
            'Requisitos mínimos: 4 GB de RAM para un modelo 3B, 8 GB de RAM para un modelo 7B. No se necesita GPU para empezar.',
            'Ollama expone una API REST compatible con OpenAI en `http://localhost:11434` -- cualquier app con el SDK de OpenAI puede usarla sin cambios en el código.',
            '👉 **Antes de instalar, confirma que la ejecución local es la opción adecuada para tu caso de uso** — consulta [LLM local vs API en la nube](/es/local-llms/local-llm-limitations) para saber cuándo la nube supera a la inferencia local.',
          ],
        },
        beforeYouInstall: {
          id: 'before-you-install',
          title: 'Antes de instalar: ¿Es el LLM local la opción correcta para tu caso de uso?',
          content: [
            'Instalar Ollama tarda 5 minutos, pero ejecutar correctamente tu primer modelo puede llevar 20-40 minutos si encuentras problemas de detección de GPU, incompatibilidades de controladores o limitaciones de RAM.',
            'Si no estás seguro de si la inferencia local es la opción correcta para ti, **[compara primero los pros y contras completos entre local y nube](https://www.promptquorum.com/es/local-llms/local-llm-limitations)** — puede que descubras que empezar con una API en la nube (lista en 5 minutos, sin necesidad de solucionar problemas) es el camino más inteligente. Muchos usuarios lo descubren después de instalar; es mejor decidirlo ahora.',
            'Para los usuarios comprometidos con la ejecución local, continúa a continuación. Para los que evalúan primero la nube, [consulta la comparación completa](https://www.promptquorum.com/es/local-llms/local-llm-limitations).',
          ],
        },
        whatIsOllama: {
          title: '¿Qué es Ollama y por qué usarlo?',
          content: [
            '**Ollama es un motor de inferencia de código abierto que ejecuta grandes modelos de lenguaje de forma local.** Integra la gestión de modelos, el backend de inferencia llama.cpp y una API REST compatible con OpenAI en una sola aplicación ligera. Sin Python, sin entorno conda y sin configuración de CUDA.',
            'Ollama mantiene una biblioteca de modelos curada (ollama.com/library) con descargas en un solo comando para Meta Llama 3.3, Microsoft Phi-3, Google Gemma 2, Mistral, Qwen3 y más de 100 modelos adicionales. Un modelo se descarga una vez y se almacena en caché en disco -- las ejecuciones posteriores arrancan en menos de 5 segundos.',
            'Para ver alternativas a Ollama, consulta [Instaladores de LLM local con un clic](/es/local-llms/local-llm-one-click-installers). Para comparar Ollama con LM Studio, consulta [Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio).',
          ],
        },
        installMac: {
          id: 'install-on-macos',
          title: '¿Cómo se instala Ollama en macOS?',
          content: 'Hay dos métodos. La descarga del instalador es más rápida; Homebrew es mejor si gestionas el software con brew.',
          numberedItems: [
            'Ve a ollama.com/download y haz clic en "Descargar para macOS".',
            'Abre el archivo Ollama.dmg descargado y arrastra Ollama a tu carpeta de Aplicaciones.',
            'Abre Ollama desde Aplicaciones. Aparece un icono de llama en tu barra de menú -- Ollama ya se está ejecutando como servicio en segundo plano.',
            'Abre Terminal y ejecuta tu primer modelo: `ollama run llama3.2`',
            'El modelo se descarga (~2 GB para llama3.2:3b) y aparece un prompt de chat. Escribe un mensaje y pulsa Enter.',
          ],
        },
        installMacBrew: {
          title: 'Instalar Ollama en macOS con Homebrew',
          codeBlock: 'brew install ollama\n\n# Start the Ollama service\nollama serve &\n\n# Pull and run a model\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: '¿Cómo se instala Ollama en Windows?',
          numberedItems: [
            'Ve a ollama.com/download y haz clic en "Descargar para Windows".',
            'Ejecuta el instalador OllamaSetup.exe descargado. Ollama se instala en %LOCALAPPDATA%\\Programs\\Ollama.',
            'Ollama arranca automáticamente y aparece como icono en la bandeja del sistema.',
            'Abre PowerShell o el Símbolo del sistema y ejecuta: `ollama run llama3.2`',
            'El modelo se descarga en la primera ejecución. Las ejecuciones posteriores usan el modelo en caché.',
          ],
        },
        installWindowsNote: {
          title: 'Soporte de GPU en Windows',
          content: 'Ollama en Windows detecta y utiliza automáticamente las GPU NVIDIA (CUDA 11.3+) y AMD (ROCm 6+). Si tienes una tarjeta NVIDIA RTX, Ollama descargará las capas del modelo a la VRAM automáticamente -- sin necesidad de configuración manual. Para verificar que se está usando la GPU, ejecuta `ollama run llama3.2` y comprueba el Administrador de tareas → GPU para ver la actividad.',
        },
        installLinux: {
          id: 'install-on-linux',
          title: '¿Cómo se instala Ollama en Linux?',
          content: 'Un solo comando instala Ollama en cualquier distribución de Linux:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Ejecutar Ollama como servicio systemd en Linux',
          content: 'El script de instalación registra Ollama automáticamente como servicio systemd. Para gestionarlo:',
          codeBlock: '# Check service status\nsystemctl status ollama\n\n# Start / stop / restart\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# View logs\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-es.png',
          imageCaption: 'Flujo de cuatro pasos para ejecutar Ollama como servicio systemd en Linux: instalar con `curl -fsSL https://ollama.com/install.sh | sh`, verificar el estado con `systemctl status ollama`, controlarlo con `start`/`stop`/`restart`, y seguir los logs con `journalctl -u ollama -f`.',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: '¿Cómo se descarga y ejecuta el primer modelo en Ollama?',
          content: 'Después de instalar Ollama, ejecuta este comando para descargar e iniciar un modelo:',
          codeBlock: '# Pull a model (downloads to ~/.ollama/models)\nollama pull llama3.2\n\n# Run it interactively\nollama run llama3.2\n\n# Or pull and run in one step\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          title: '¿Con qué modelo deberías empezar?',
          content: 'Para una primera ejecución, estos tres modelos cubren diferentes perfiles de hardware:',
          rows: [
            { 'Modelo': 'Llama 3.2 3B', 'Tamaño de descarga': '~2 GB', 'RAM necesaria': '4 GB', 'Mejor para': 'Primera prueba -- cualquier máquina' },
            { 'Modelo': 'Llama 3.3 8B', 'Tamaño de descarga': '~4.7 GB', 'RAM necesaria': '8 GB', 'Mejor para': 'Uso general en la mayoría de portátiles' },
            { 'Modelo': 'phi4-mini', 'Tamaño de descarga': '~2.3 GB', 'RAM necesaria': '4 GB', 'Mejor para': 'Respuestas rápidas, poca RAM' },
          ],
          columns: ['Modelo', 'Tamaño de descarga', 'RAM necesaria', 'Mejor para'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: '¿Cómo verificas que Ollama está funcionando?',
          content: 'Prueba la API REST directamente para confirmar que Ollama se está ejecutando y es accesible:',
          codeBlock: '# Check Ollama is running\ncurl http://localhost:11434\n# Expected: "Ollama is running"\n\n# List downloaded models\nollama list\n\n# Send a prompt via API (OpenAI-compatible)\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "What is 2+2?",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          title: 'Comandos útiles de Ollama',
          rows: [
            { 'Comando': 'ollama list', 'Qué hace': 'Muestra todos los modelos descargados y sus tamaños' },
            { 'Comando': 'ollama pull <model>', 'Qué hace': 'Descarga un modelo sin ejecutarlo' },
            { 'Comando': 'ollama rm <model>', 'Qué hace': 'Elimina un modelo del disco' },
            { 'Comando': 'ollama ps', 'Qué hace': 'Muestra los modelos cargados actualmente en memoria' },
            { 'Comando': 'ollama show <model>', 'Qué hace': 'Muestra los detalles del modelo (parámetros, plantilla, licencia)' },
            { 'Comando': 'ollama serve', 'Qué hace': 'Inicia el servidor de Ollama manualmente (si no se ejecuta como servicio)' },
          ],
          columns: ['Comando', 'Qué hace'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Solución de problemas comunes de instalación de Ollama',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-es.png',
          imageCaption: 'Tabla de referencia de 5 errores comunes al instalar Ollama -- servicio inactivo, descargas de 2-47 GB detenidas, errores de memoria insuficiente, GPUs no detectadas y prompts truncados a 4096 tokens -- cada uno con su comando de solución.',
          faqs: [
            {
              q: 'Ollama dice "could not connect to ollama app, is it running?"',
              a: 'Ollama no se está ejecutando como servicio en segundo plano. En macOS: abre la app de Ollama desde Aplicaciones. En Linux: ejecuta `systemctl start ollama` o `ollama serve` en un terminal. En Windows: abre Ollama desde el menú Inicio.',
            },
            {
              q: 'La descarga del modelo es muy lenta o se ha detenido',
              a: 'Las descargas de modelos son grandes (2-47 GB). Si la descarga se detiene, pulsa Ctrl+C y vuelve a ejecutar `ollama pull <model>` -- Ollama reanuda las descargas parciales. Para descargas más rápidas, usa una conexión por cable en lugar de Wi-Fi.',
            },
            {
              q: 'Aparece el error "error: model requires more system memory" al ejecutar un modelo',
              a: 'El modelo es demasiado grande para la RAM disponible. Prueba una cuantización menor: `ollama run llama3.2-instruct-q4_0` en lugar del Q4_K_M predeterminado. O cambia a un modelo más pequeño como `llama3.2:3b`. Consulta [Los mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) para obtener recomendaciones ajustadas a la RAM.',
            },
            {
              q: 'Ollama está en ejecución pero no se usa la GPU',
              a: 'En Windows, verifica que el controlador de NVIDIA sea la versión 452.39 o superior. En Linux, confirma que el NVIDIA container toolkit está instalado (`nvidia-smi` debe devolver información de la GPU). Ollama descarga las capas a la GPU automáticamente cuando hay VRAM disponible -- ejecuta `ollama ps` después de iniciar un modelo para ver la utilización de la GPU.',
            },
            {
              q: '¿Dónde se almacenan los archivos de modelo de Ollama?',
              a: 'Los modelos se almacenan en ~/.ollama/models en macOS y Linux. En Windows, la ruta predeterminada es C:\\Users\\<username>\\.ollama\\models. Puedes cambiar la ubicación de almacenamiento configurando la variable de entorno OLLAMA_MODELS antes de iniciar el servicio.',
            },
          ],
        },
        nextSteps: {
          title: '¿Qué hacer después de instalar Ollama?',
          content: 'Una vez que Ollama está en ejecución, el siguiente paso es [Ejecutar tu primer LLM local](/es/local-llms/run-first-local-llm) para entender el prompting, la longitud del contexto y qué esperar de la velocidad de inferencia local. Para elegir el mejor modelo para tu hardware, consulta [Los mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models). Si prefieres una interfaz de chat gráfica en lugar del terminal, [Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) cubre la alternativa de aplicación de escritorio.',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '**Sitio web oficial de Ollama** -- Descargas de instalación y documentación oficial',
            '**Repositorio de Ollama en GitHub** -- Código fuente, issues y discusiones de la comunidad',
            '**Biblioteca de modelos de Ollama** -- Colección curada de modelos disponibles con enlaces de descarga',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes al instalar Ollama',
          items: [
            'No comprobar que Ollama se está ejecutando como servicio en segundo plano antes de esperar que la API responda.',
            'Intentar ejecutar modelos más grandes que la RAM disponible sin comprobar primero los requisitos de memoria.',
            'Ignorar la detección de GPU -- Ollama admite NVIDIA y AMD pero requiere controladores actualizados.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Stack de desarrollo LLM local](/es/local-llms/local-llm-developer-stack) -- Construye un entorno de desarrollo completo: CLI → servidor API → multi-GPU en producción.',
            '[¿Qué son los LLM locales?](/es/local-llms/what-are-local-llms) -- Definición y conceptos básicos',
            '[Ejecutar tu primer LLM local](/es/local-llms/run-first-local-llm) -- Siguiente paso tras la instalación',
            '[Los mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) -- Recomendaciones de modelos por hardware',
            '[Instaladores de LLM local con un clic](/es/local-llms/local-llm-one-click-installers) -- Herramientas alternativas a Ollama',
            '[MLX vs Ollama vs llama.cpp en Mac 2026](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Comparación de frameworks para Apple Silicon: velocidad, tiempo de configuración y ventajas e inconvenientes del ecosistema.',
            'Ollama ya está instalado y listo. El siguiente reto: escribir prompts que den buenos resultados. Empieza aquí: [qué es la ingeniería de prompts](https://www.promptquorum.com/es/prompt-engineering/what-is-prompt-engineering) cubre los fundamentos en lenguaje claro.',
          '[Actualizaciones de Modelos LLM Locales 2026](/es/local-llms/local-llm-model-updates-2026) -- cronología completa de todos los modelos de peso abierto lanzados para Ollama este año.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Instalar Ollama: Configuración en 2 Minutos para macOS, Windows y Linux',
        'description': 'Instala Ollama en 2 minutos en cualquier sistema operativo: descarga, ejecuta ollama run llama3.2, empieza a chatear. Guía completa de configuración con solución de problemas para principiantes 2026.',
        'url': 'https://www.promptquorum.com/es/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'instalación de LLM local' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
          { '@type': 'Thing', 'name': 'inferencia de IA local' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo instalo Ollama en macOS?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Descarga el .dmg desde ollama.com, arrástralo a Aplicaciones, ábrelo y luego ejecuta ollama run llama3.2 en Terminal. Alternativamente: brew install ollama && ollama serve.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo instalo Ollama en Windows?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Descarga OllamaSetup.exe desde ollama.com/download y ejecútalo. Ollama se instala como servicio en segundo plano. Abre el Símbolo del sistema y ejecuta ollama run llama3.2.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo instalo Ollama en Linux?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ejecuta: curl -fsSL https://ollama.com/install.sh | sh. Esto instala Ollama como servicio systemd. Luego: ollama pull llama3.2 para descargar tu primer modelo.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuánta RAM mínima necesita Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Mínimo 4 GB de RAM para un modelo 3B, 8 GB para un modelo 7B con cuantización Q4. No se requiere GPU -- Ollama cambia automáticamente a inferencia por CPU.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo ejecutar Ollama sin GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Ollama funciona en CPU sin GPU. La inferencia es más lenta (2-5 tokens/seg frente a 30-60 con GPU) pero funcional. Usa modelos pequeños como llama3.2:3b o phi3.5 en sistemas sin GPU.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo descargo un nuevo modelo con Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ejecuta: ollama pull nombremodelo. Por ejemplo: ollama pull mistral o ollama pull qwen2.5:7b. Los modelos se almacenan en ~/.ollama/models. Lista los modelos descargados con ollama list.' }
          },
          {
            '@type': 'Question',
            'name': '¿Qué puerto usa Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama sirve su API en el puerto 11434 por defecto. Accede a ella en http://localhost:11434. Cambia el puerto con la variable de entorno OLLAMA_HOST: OLLAMA_HOST=0.0.0.0:11435.' }
          },
          {
            '@type': 'Question',
            'name': '¿La API de Ollama es compatible con la API de OpenAI?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Ollama admite el endpoint de chat completions de OpenAI en /v1/chat/completions. Cualquier app creada para OpenAI puede usar Ollama estableciendo base_url en http://localhost:11434/v1.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo veo qué modelos están instalados en Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ejecuta: ollama list. Esto muestra todos los modelos descargados, sus tamaños y niveles de cuantización. Elimina un modelo con ollama rm nombremodelo.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo actualizo Ollama a la última versión?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'macOS/Windows: vuelve a descargar el instalador desde ollama.com -- sobrescribe la versión anterior. Linux: vuelve a ejecutar curl -fsSL https://ollama.com/install.sh | sh para actualizar en el mismo lugar.' }
          }
        ]
      },
    },
    ar: {
      freshness_tier: 'annual',
      theme: 'Getting Started',
      title: 'تثبيت ⁨Ollama⁩: إعداد في دقيقتين لـ ⁨macOS⁩ و ⁨Windows⁩ و ⁨Linux⁩',
      seoTitle: 'تثبيت ⁨Ollama⁩ في دقيقتين: ⁨macOS⁩ و ⁨Windows⁩ و ⁨Linux⁩',
      intro: 'يُثبَّت Ollama في أقل من دقيقتين على macOS و Windows و Linux. وبعد التثبيت، يقوم أمر واحد بتنزيل وتشغيل أي نموذج من مكتبة Ollama -- دون بيئة Python ودون ملفات تهيئة ودون حاجة إلى GPU للبدء. واعتبارًا من أبريل 2026، يدعم Ollama أكثر من 200 نموذج، بما في ذلك Meta Llama 3.3 و Qwen3 و Mistral.',
      metaDescription: '⁨Ollama⁩ يدعم أكثر من ⁨200⁩ نموذج بأمر واحد. ثبّته على ⁨macOS⁩ أو ⁨Windows⁩ أو ⁨Linux⁩، شغّل ⁨Llama⁩ أو ⁨Qwen⁩ أو ⁨Mistral⁩ دون إعداد ⁨Python⁩ أو ملفات تهيئة.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-ar.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**يُثبَّت Ollama في أقل من دقيقتين على macOS و Windows و Linux. وبعد التثبيت، يقوم أمر واحد بتنزيل وتشغيل أي نموذج من مكتبة Ollama -- دون بيئة Python ودون ملفات تهيئة ودون حاجة إلى GPU للبدء.**',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على أجهزة استهلاكية',
      readTime: '8 دقائق للقراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'التثبيت على macOS', anchor: '#install-on-macos' },
        { label: 'التثبيت على Windows', anchor: '#install-on-windows' },
        { label: 'التثبيت على Linux', anchor: '#install-on-linux' },
        { label: 'تنزيل وتشغيل أول نموذج لديك', anchor: '#pull-and-run-your-first-model' },
        { label: 'التحقق من عمل Ollama', anchor: '#verify-ollama-is-working' },
        { label: 'أوامر مفيدة في Ollama', anchor: '#useful-ollama-commands' },
        { label: 'حل المشكلات', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'macOS: نزّل ملف .dmg من ollama.com أو شغّل `brew install ollama` -- ثم `ollama run llama3.2` لبدء المحادثة.',
            'Windows: نزّل المثبّت من ollama.com/download. يعمل Ollama كخدمة في الخلفية في علبة النظام.',
            'Linux: أمر curl واحد يثبّت كل شيء -- `curl -fsSL https://ollama.com/install.sh | sh`.',
            'الحد الأدنى من المتطلبات: 4 GB من RAM لنموذج 3B، و8 GB من RAM لنموذج 7B. لا حاجة إلى GPU للبدء.',
            'يكشف Ollama واجهة REST API متوافقة مع OpenAI على `http://localhost:11434` -- ويستطيع أي تطبيق يستخدم SDK الخاص بـ OpenAI استخدامها دون تغيير في الكود.',
            '👉 **قبل التثبيت، تأكّد من أن التشغيل المحلي هو الخيار المناسب لحالة استخدامك** — راجع [LLM محلي مقابل API سحابية](/ar/local-llms/local-llm-limitations) لمعرفة متى تتفوق السحابة على الاستدلال المحلي.',
          ],
        },
        beforeYouInstall: {
          id: 'before-you-install',
          title: 'قبل التثبيت: هل LLM المحلي هو الخيار المناسب لحالة استخدامك؟',
          content: [
            'يستغرق تثبيت Ollama 5 دقائق، لكن تشغيل أول نموذج لديك بنجاح قد يستغرق 20-40 دقيقة إذا واجهت مشكلات في اكتشاف GPU أو عدم توافق التعريفات أو قيود RAM.',
            'إذا لم تكن متأكدًا من أن الاستدلال المحلي هو الخيار المناسب لك، **[قارن أولًا الإيجابيات والسلبيات الكاملة بين المحلي والسحابة](https://www.promptquorum.com/ar/local-llms/local-llm-limitations)** — قد تكتشف أن البدء بـ API سحابية (جاهزة في 5 دقائق، دون حاجة لحل مشكلات) هو الطريق الأذكى. يكتشف كثير من المستخدمين ذلك بعد التثبيت؛ والأفضل تقريره الآن.',
            'وللمستخدمين الملتزمين بالتشغيل المحلي، تابع أدناه. وللذين يقيّمون السحابة أولًا، [راجع المقارنة الكاملة](https://www.promptquorum.com/ar/local-llms/local-llm-limitations).',
          ],
        },
        whatIsOllama: {
          title: 'ما هو Ollama ولماذا تستخدمه؟',
          content: [
            '**Ollama محرك استدلال مفتوح المصدر يشغّل نماذج اللغة الكبيرة محليًا.** يدمج إدارة النماذج وخلفية الاستدلال llama.cpp وواجهة REST API متوافقة مع OpenAI في تطبيق واحد خفيف. دون Python ودون بيئة conda ودون إعداد CUDA.',
            'يحافظ Ollama على مكتبة نماذج منتقاة (ollama.com/library) بتنزيلات بأمر واحد لـ Meta Llama 3.3 و Microsoft Phi-3 و Google Gemma 2 و Mistral و Qwen3 وأكثر من 100 نموذج إضافي. يُنزَّل النموذج مرة واحدة ويُخزَّن مؤقتًا على القرص -- وتنطلق التشغيلات اللاحقة في أقل من 5 ثوانٍ.',
            'للاطلاع على بدائل Ollama، راجع [مثبّتات LLM المحلية بنقرة واحدة](/ar/local-llms/local-llm-one-click-installers). ولمقارنة Ollama بـ LM Studio، راجع [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio).',
          ],
        },
        installMac: {
          id: 'install-on-macos',
          title: 'كيف يُثبَّت Ollama على macOS؟',
          content: 'توجد طريقتان. تنزيل المثبّت أسرع؛ و Homebrew أفضل إذا كنت تدير البرامج بـ brew.',
          numberedItems: [
            'اذهب إلى ollama.com/download وانقر "تنزيل لـ macOS".',
            'افتح ملف Ollama.dmg المنزَّل واسحب Ollama إلى مجلد التطبيقات.',
            'افتح Ollama من التطبيقات. تظهر أيقونة llama في شريط القوائم -- وأصبح Ollama يعمل بالفعل كخدمة في الخلفية.',
            'افتح Terminal وشغّل أول نموذج لديك: `ollama run llama3.2`',
            'يُنزَّل النموذج (~2 GB لـ llama3.2:3b) وتظهر واجهة محادثة. اكتب رسالة واضغط Enter.',
          ],
        },
        installMacBrew: {
          title: 'تثبيت Ollama على macOS بـ Homebrew',
          codeBlock: 'brew install ollama\n\n# Start the Ollama service\nollama serve &\n\n# Pull and run a model\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: 'كيف يُثبَّت Ollama على Windows؟',
          numberedItems: [
            'اذهب إلى ollama.com/download وانقر "تنزيل لـ Windows".',
            'شغّل المثبّت OllamaSetup.exe المنزَّل. يُثبَّت Ollama في %LOCALAPPDATA%\\Programs\\Ollama.',
            'ينطلق Ollama تلقائيًا ويظهر كأيقونة في علبة النظام.',
            'افتح PowerShell أو موجّه الأوامر وشغّل: `ollama run llama3.2`',
            'يُنزَّل النموذج عند أول تشغيل. وتستخدم التشغيلات اللاحقة النموذج المخزَّن مؤقتًا.',
          ],
        },
        installWindowsNote: {
          title: 'دعم GPU على Windows',
          content: 'يكتشف Ollama على Windows ويستخدم تلقائيًا بطاقات NVIDIA (CUDA 11.3+) و AMD (ROCm 6+). إذا كانت لديك بطاقة NVIDIA RTX، فسيُنزِّل Ollama طبقات النموذج إلى VRAM تلقائيًا -- دون حاجة إلى إعداد يدوي. للتحقق من استخدام GPU، شغّل `ollama run llama3.2` وراجع مدير المهام ← GPU لرؤية النشاط.',
        },
        installLinux: {
          id: 'install-on-linux',
          title: 'كيف يُثبَّت Ollama على Linux؟',
          content: 'أمر واحد يثبّت Ollama على أي توزيعة Linux:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'تشغيل Ollama كخدمة systemd على Linux',
          content: 'يسجّل سكربت التثبيت Ollama تلقائيًا كخدمة systemd. لإدارتها:',
          codeBlock: '# Check service status\nsystemctl status ollama\n\n# Start / stop / restart\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# View logs\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-ar.png',
          imageCaption: 'مخطط من أربع خطوات لتشغيل Ollama كخدمة systemd على Linux: التثبيت باستخدام `curl -fsSL https://ollama.com/install.sh | sh`، التحقق من الحالة باستخدام `systemctl status ollama`، التحكم بها عبر `start`/`stop`/`restart`، ومتابعة السجلات باستخدام `journalctl -u ollama -f`.',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: 'كيف يُنزَّل ويُشغَّل أول نموذج في Ollama؟',
          content: 'بعد تثبيت Ollama، شغّل هذا الأمر لتنزيل نموذج وبدئه:',
          codeBlock: '# Pull a model (downloads to ~/.ollama/models)\nollama pull llama3.2\n\n# Run it interactively\nollama run llama3.2\n\n# Or pull and run in one step\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          title: 'بأي نموذج ينبغي أن تبدأ؟',
          content: 'لأول تشغيل، تغطي هذه النماذج الثلاثة ملفات أجهزة مختلفة:',
          rows: [
            { 'النموذج': 'Llama 3.2 3B', 'حجم التنزيل': '~2 GB', 'RAM المطلوبة': '4 GB', 'الأفضل لـ': 'أول تجربة -- أي جهاز' },
            { 'النموذج': 'Llama 3.3 8B', 'حجم التنزيل': '~4.7 GB', 'RAM المطلوبة': '8 GB', 'الأفضل لـ': 'استخدام عام على معظم الحواسيب المحمولة' },
            { 'النموذج': 'phi4-mini', 'حجم التنزيل': '~2.3 GB', 'RAM المطلوبة': '4 GB', 'الأفضل لـ': 'استجابات سريعة، RAM قليلة' },
          ],
          columns: ['النموذج', 'حجم التنزيل', 'RAM المطلوبة', 'الأفضل لـ'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: 'كيف تتحقق من أن Ollama يعمل؟',
          content: 'اختبر REST API مباشرةً للتأكد من أن Ollama يعمل ويمكن الوصول إليه:',
          codeBlock: '# Check Ollama is running\ncurl http://localhost:11434\n# Expected: "Ollama is running"\n\n# List downloaded models\nollama list\n\n# Send a prompt via API (OpenAI-compatible)\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "What is 2+2?",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          title: 'أوامر مفيدة في Ollama',
          rows: [
            { 'الأمر': 'ollama list', 'ما يفعله': 'يعرض كل النماذج المنزَّلة وأحجامها' },
            { 'الأمر': 'ollama pull <model>', 'ما يفعله': 'ينزّل نموذجًا دون تشغيله' },
            { 'الأمر': 'ollama rm <model>', 'ما يفعله': 'يحذف نموذجًا من القرص' },
            { 'الأمر': 'ollama ps', 'ما يفعله': 'يعرض النماذج المحمّلة حاليًا في الذاكرة' },
            { 'الأمر': 'ollama show <model>', 'ما يفعله': 'يعرض تفاصيل النموذج (المعاملات، القالب، الترخيص)' },
            { 'الأمر': 'ollama serve', 'ما يفعله': 'يبدأ خادم Ollama يدويًا (إذا لم يعمل كخدمة)' },
          ],
          columns: ['الأمر', 'ما يفعله'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'حل مشكلات تثبيت Ollama الشائعة',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-ar.png',
          imageCaption: 'جدول مرجعي لـ 5 أخطاء شائعة عند تثبيت Ollama -- خدمة غير نشطة، توقف تنزيلات 2-47 جيجابايت، أخطاء نفاد الذاكرة، عدم اكتشاف GPU، واقتطاع الطلبات عند 4096 رمزاً -- مع أمر الحل لكل منها.',
          faqs: [
            {
              q: 'يقول Ollama "could not connect to ollama app, is it running?"',
              a: 'لا يعمل Ollama كخدمة في الخلفية. على macOS: افتح تطبيق Ollama من التطبيقات. على Linux: شغّل `systemctl start ollama` أو `ollama serve` في طرفية. على Windows: افتح Ollama من قائمة ابدأ.',
            },
            {
              q: 'تنزيل النموذج بطيء جدًا أو توقّف',
              a: 'تنزيلات النماذج كبيرة (2-47 GB). إذا توقّف التنزيل، اضغط Ctrl+C وأعد تشغيل `ollama pull <model>` -- يستأنف Ollama التنزيلات الجزئية. وللتنزيلات الأسرع، استخدم اتصالًا سلكيًا بدلًا من Wi-Fi.',
            },
            {
              q: 'يظهر الخطأ "error: model requires more system memory" عند تشغيل نموذج',
              a: 'النموذج كبير جدًا على RAM المتاحة. جرّب تكميمًا أقل: `ollama run llama3.2-instruct-q4_0` بدلًا من Q4_K_M الافتراضي. أو انتقل إلى نموذج أصغر مثل `llama3.2:3b`. راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) للحصول على توصيات مناسبة لـ RAM.',
            },
            {
              q: 'Ollama يعمل لكن GPU غير مُستخدمة',
              a: 'على Windows، تحقّق من أن تعريف NVIDIA إصدار 452.39 أو أحدث. على Linux، تأكّد من تثبيت NVIDIA container toolkit (يجب أن يعيد `nvidia-smi` معلومات GPU). يُنزِّل Ollama الطبقات إلى GPU تلقائيًا عند توفر VRAM -- شغّل `ollama ps` بعد بدء نموذج لرؤية استخدام GPU.',
            },
            {
              q: 'أين تُخزَّن ملفات نماذج Ollama؟',
              a: 'تُخزَّن النماذج في ~/.ollama/models على macOS و Linux. وعلى Windows، المسار الافتراضي هو C:\\Users\\<username>\\.ollama\\models. يمكنك تغيير موقع التخزين بضبط متغير البيئة OLLAMA_MODELS قبل بدء الخدمة.',
            },
          ],
        },
        nextSteps: {
          title: 'ماذا تفعل بعد تثبيت Ollama؟',
          content: 'بمجرد عمل Ollama، تكون الخطوة التالية [تشغيل أول نموذج LLM محلي لديك](/ar/local-llms/run-first-local-llm) لفهم الـ prompting وطول السياق وما تتوقعه من سرعة الاستدلال المحلي. ولاختيار أفضل نموذج لجهازك، راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models). وإذا كنت تفضّل واجهة محادثة رسومية بدلًا من الطرفية، فإن [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) يغطي بديل تطبيق سطح المكتب.',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '**الموقع الرسمي لـ Ollama** -- تنزيلات التثبيت والتوثيق الرسمي',
            '**مستودع Ollama على GitHub** -- الكود المصدري والمشكلات ونقاشات المجتمع',
            '**مكتبة نماذج Ollama** -- مجموعة منتقاة من النماذج المتاحة بروابط تنزيل',
          ],
        },
        commonMistakes: {
          title: 'أخطاء شائعة عند تثبيت Ollama',
          items: [
            'عدم التحقق من أن Ollama يعمل كخدمة في الخلفية قبل توقع استجابة API.',
            'محاولة تشغيل نماذج أكبر من RAM المتاحة دون التحقق أولًا من متطلبات الذاكرة.',
            'تجاهل اكتشاف GPU -- يدعم Ollama NVIDIA و AMD لكنه يتطلب تعريفات محدّثة.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[حزمة تطوير LLM المحلي](/ar/local-llms/local-llm-developer-stack) -- ابنِ بيئة تطوير كاملة: CLI ← خادم API ← متعدد GPU في الإنتاج.',
            '[ما هي نماذج LLM المحلية؟](/ar/local-llms/what-are-local-llms) -- التعريف والمفاهيم الأساسية',
            '[تشغيل أول نموذج LLM محلي لديك](/ar/local-llms/run-first-local-llm) -- الخطوة التالية بعد التثبيت',
            '[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- توصيات نماذج حسب الجهاز',
            '[مثبّتات LLM المحلية بنقرة واحدة](/ar/local-llms/local-llm-one-click-installers) -- أدوات بديلة لـ Ollama',
            '[MLX مقابل Ollama مقابل llama.cpp على Mac 2026](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- مقارنة أطر العمل لـ Apple Silicon: السرعة ووقت الإعداد وإيجابيات وسلبيات المنظومة.',
            'Ollama مثبّت وجاهز الآن. التحدي التالي: كتابة prompts تحقق نتائج جيدة. ابدأ هنا: [ما هي هندسة الـ prompts](https://www.promptquorum.com/ar/prompt-engineering/what-is-prompt-engineering) يغطي الأساسيات بلغة واضحة.',
          '[تحديثات نماذج LLM المحلية 2026](/ar/local-llms/local-llm-model-updates-2026) -- الجدول الزمني الكامل لجميع النماذج مفتوحة الأوزان الصادرة لـ Ollama هذا العام.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'تثبيت Ollama: إعداد في دقيقتين لـ macOS و Windows و Linux',
        'description': 'ثبّت Ollama في دقيقتين على أي نظام تشغيل: نزّل، شغّل ollama run llama3.2، ابدأ المحادثة. دليل إعداد كامل مع حل المشكلات للمبتدئين 2026.',
        'url': 'https://www.promptquorum.com/ar/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'تثبيت LLM محلي' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
          { '@type': 'Thing', 'name': 'استدلال الذكاء الاصطناعي المحلي' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'كيف أثبّت Ollama على macOS؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نزّل ملف .dmg من ollama.com، واسحبه إلى التطبيقات، وافتحه، ثم شغّل ollama run llama3.2 في Terminal. أو بديلًا: brew install ollama && ollama serve.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أثبّت Ollama على Windows؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نزّل OllamaSetup.exe من ollama.com/download وشغّله. يُثبَّت Ollama كخدمة في الخلفية. افتح موجّه الأوامر وشغّل ollama run llama3.2.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أثبّت Ollama على Linux؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'شغّل: curl -fsSL https://ollama.com/install.sh | sh. يثبّت هذا Ollama كخدمة systemd. ثم: ollama pull llama3.2 لتنزيل أول نموذج لديك.' }
          },
          {
            '@type': 'Question',
            'name': 'كم تحتاج Ollama من RAM كحد أدنى؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'الحد الأدنى 4 GB من RAM لنموذج 3B، و8 GB لنموذج 7B بتكميم Q4. لا حاجة إلى GPU -- ينتقل Ollama تلقائيًا إلى الاستدلال عبر CPU.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني تشغيل Ollama دون GPU؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. يعمل Ollama على CPU دون GPU. يكون الاستدلال أبطأ (2-5 tokens/ثانية مقابل 30-60 مع GPU) لكنه عملي. استخدم نماذج صغيرة مثل llama3.2:3b أو phi3.5 على الأنظمة بلا GPU.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أنزّل نموذجًا جديدًا بـ Ollama؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'شغّل: ollama pull اسم-النموذج. مثلًا: ollama pull mistral أو ollama pull qwen2.5:7b. تُخزَّن النماذج في ~/.ollama/models. اعرض النماذج المنزَّلة بـ ollama list.' }
          },
          {
            '@type': 'Question',
            'name': 'أي منفذ يستخدم Ollama؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يقدّم Ollama واجهة API على المنفذ 11434 افتراضيًا. ادخل إليها على http://localhost:11434. غيّر المنفذ بمتغير البيئة OLLAMA_HOST: OLLAMA_HOST=0.0.0.0:11435.' }
          },
          {
            '@type': 'Question',
            'name': 'هل API الخاص بـ Ollama متوافق مع API الخاص بـ OpenAI؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. يدعم Ollama نقطة chat completions الخاصة بـ OpenAI على /v1/chat/completions. ويستطيع أي تطبيق مبني لـ OpenAI استخدام Ollama بضبط base_url على http://localhost:11434/v1.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أرى أي النماذج مثبّتة في Ollama؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'شغّل: ollama list. يعرض هذا كل النماذج المنزَّلة وأحجامها ومستويات التكميم. احذف نموذجًا بـ ollama rm اسم-النموذج.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أحدّث Ollama إلى أحدث إصدار؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'macOS/Windows: أعد تنزيل المثبّت من ollama.com -- يستبدل الإصدار السابق. Linux: أعد تشغيل curl -fsSL https://ollama.com/install.sh | sh للتحديث في المكان نفسه.' }
          }
        ]
      },
    },
    pt: {
      freshness_tier: 'annual',
      theme: 'Getting Started',
      title: 'Instalar Ollama: Configuração em 2 Minutos para macOS, Windows e Linux',
      seoTitle: 'Instalar Ollama em 2 minutos: macOS, Windows e Linux',
      intro: 'O Ollama se instala em menos de 2 minutos no macOS, Windows e Linux. Após a instalação, um único comando baixa e executa qualquer modelo da biblioteca do Ollama — sem ambiente Python, sem arquivos de configuração e sem necessidade de GPU para começar. A partir de abril de 2026, o Ollama suporta mais de 200 modelos, incluindo Meta Llama 3.3, Qwen3 e Mistral.',
      metaDescription: 'Instale o Ollama em 2 minutos em qualquer sistema: baixe, execute `ollama run llama3.2` e comece a conversar. Guia completo com solução de problemas.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-pt.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**O Ollama se instala em menos de 2 minutos no macOS, Windows e Linux. Após a instalação, um único comando baixa e executa qualquer modelo da biblioteca do Ollama — sem ambiente Python, sem arquivos de configuração e sem necessidade de GPU para começar.**',
      audience: 'Iniciantes executando o primeiro LLM local em hardware de consumo',
      readTime: '8 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'Instalar no macOS', anchor: '#install-on-macos' },
        { label: 'Instalar no Windows', anchor: '#install-on-windows' },
        { label: 'Instalar no Linux', anchor: '#install-on-linux' },
        { label: 'Baixar e executar o primeiro modelo', anchor: '#pull-and-run-your-first-model' },
        { label: 'Verificar que o Ollama está funcionando', anchor: '#verify-ollama-is-working' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama se instala em menos de 2 minutos — um único instalador para macOS, Windows e Linux.',
            'Após a instalação: `ollama run llama3.2` baixa e executa o modelo automaticamente.',
            'Sem Python, sem pip, sem dependências — o Ollama gerencia tudo.',
            'Funciona sem GPU — mas é mais rápido com uma.',
            'Mais de 200 modelos disponíveis: `ollama list` para ver os instalados, `ollama pull [modelo]` para baixar.',
          ],
        },
        installOnMacos: {
          id: 'install-on-macos',
          title: 'Como instalar o Ollama no macOS',
          codeBlock: '# Opção 1: Baixe o instalador em ollama.com\n# Clique em Download, abra o .dmg, arraste Ollama para Aplicativos\n\n# Opção 2: Homebrew\nbrew install ollama\n\n# Verificar instalação\nollama --version\n\n# Executar o primeiro modelo\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installOnWindows: {
          id: 'install-on-windows',
          title: 'Como instalar o Ollama no Windows',
          codeBlock: '# Baixe OllamaSetup.exe em ollama.com\n# Execute o instalador e siga as instruções\n# O Ollama adiciona automaticamente o PATH\n\n# No PowerShell ou CMD:\nollama run llama3.2\n\n# Verificar instalação\nollama --version',
          codeLanguage: 'bash',
        },
        installOnLinux: {
          id: 'install-on-linux',
          title: 'Como instalar o Ollama no Linux',
          codeBlock: '# Script de instalação oficial\ncurl -fsSL https://ollama.com/install.sh | sh\n\n# Verificar instalação\nollama --version\n\n# Executar o primeiro modelo\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        pullAndRun: {
          id: 'pull-and-run-your-first-model',
          title: 'Baixar e executar o primeiro modelo',
          codeBlock: '# Baixar e executar Llama 3.2 8B (padrão)\nollama run llama3.2\n\n# Outros modelos populares\nollama run phi4-mini      # 3.8B, rápido\nollama run qwen3:8b       # Qwen3 com PT-BR\nollama run aya:8b         # Multilíngue 101 idiomas\n\n# Listar modelos instalados\nollama list\n\n# API REST (compatível com OpenAI)\ncurl http://localhost:11434/api/generate \\\n  -d \'{"model": "llama3.2", "prompt": "Olá!"}\'',
          codeLanguage: 'bash',
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes sobre Ollama',
          faqs: [
            { q: 'O Ollama é gratuito?', a: 'Sim, o Ollama é totalmente gratuito e open-source. Todos os modelos da biblioteca do Ollama também são gratuitos para uso local.' },
            { q: 'O Ollama precisa de GPU para funcionar?', a: 'Não. O Ollama funciona em CPU somente, mas é mais lento (5–15 tok/s). Com uma GPU discreta (mesmo 4 GB VRAM), a velocidade sobe para 20–40 tok/s.' },
            { q: 'Como conversar em português com o Ollama?', a: 'Basta digitar em português no prompt. Modelos como Aya 8B e Qwen3 têm melhor suporte para PT-BR. Use `ollama run aya:8b` para o modelo com melhor suporte multilíngue.' },
            { q: 'Posso usar o Ollama com outros aplicativos?', a: 'Sim. O Ollama expõe uma API REST compatível com OpenAI na porta 11434. Qualquer aplicativo que suporte OpenAI pode usar o Ollama como backend local.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[Como instalar LM Studio](/pt/local-llms/how-to-install-lm-studio) -- Alternativa com interface gráfica.',
            '[LLMs locais mais rápidos para PCs de baixo custo](/pt/local-llms/fastest-local-llms-low-end-pcs) -- Modelos recomendados por hardware.',
            '[Melhores ferramentas RAG locais](/pt/local-llms/best-local-rag-tools) -- Use Ollama com embeddings RAG.',
          '[Atualizações de Modelos LLM Locais 2026](/pt/local-llms/local-llm-model-updates-2026) -- linha do tempo completa de todos os principais modelos de peso aberto lançados para Ollama este ano.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Instalar Ollama: Configuração em 2 Minutos para macOS, Windows e Linux',
        description: 'Instale o Ollama em 2 minutos em qualquer sistema: baixe, execute `ollama run llama3.2` e comece a conversar.',
        url: 'https://www.promptquorum.com/pt/local-llms/how-to-install-ollama',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-04',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'O Ollama é gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, o Ollama é totalmente gratuito e open-source. Todos os modelos da biblioteca do Ollama também são gratuitos para uso local.' } },
          { '@type': 'Question', name: 'O Ollama precisa de GPU para funcionar?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O Ollama funciona em CPU somente, mas é mais lento (5–15 tok/s). Com uma GPU discreta (mesmo 4 GB VRAM), a velocidade sobe para 20–40 tok/s.' } },
        ],
      },
    },
    de: {
      theme: 'Getting Started',
      title: 'Ollama installieren: Vollständige Einrichtungsanleitung für macOS, Windows und Linux',
      seoTitle: 'Ollama installieren 2026 - Vollständige Anleitung',
      intro: 'Ollama ist eine leichte Inference-Engine, die große Sprachmodelle lokal mit einem einzigen Befehl ausführt. Nach einer 2-Minuten-Installation lädt `ollama pull llama3.2:3b` ein 2-GB-Modell herunter, und `ollama run llama3.2` öffnet eine Chat-Schnittstelle. Ollama kombiniert Modellverwaltung, das llama.cpp-Inference-Backend und eine OpenAI-kompatible REST-API auf `localhost:11434` in einer einzigen Anwendung ohne Python-Umgebung, ohne Konfigurationsdateien und ohne erforderliche GPU zum Starten. Ab April 2026 unterstützt Ollama über 200 Modelle einschließlich Meta Llama 3.2, Qwen3, Mistral und DeepSeek und stellt seine API für jeden OpenAI-SDK ohne Codeänderungen bereit.',
      metaDescription: 'Ollama in unter 2 Minuten auf macOS, Windows oder Linux installieren. Ein Befehl startet Ihr erstes Modell. Zugriff auf 200+ Open-Source-Modelle lokal.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-de.png',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '8 min Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Was ist Ollama?', anchor: '#what-is-ollama' },
        { label: 'Installation auf macOS', anchor: '#install-on-macos' },
        { label: 'Installation auf Windows', anchor: '#install-on-windows' },
        { label: 'Installation auf Linux', anchor: '#install-on-linux' },
        { label: 'Ihr erstes Modell herunterladen und ausführen', anchor: '#pull-and-run-your-first-model' },
        { label: 'Mit welchem Modell sollte ich anfangen?', anchor: '#which-model-to-start-with' },
        { label: 'Verifizieren Sie, dass Ollama funktioniert', anchor: '#verify-ollama-is-working' },
        { label: 'Nützliche Ollama-Befehle', anchor: '#useful-ollama-commands' },
        { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
        { label: 'Regionale Einsatzszenarien', anchor: '#regional-context' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Zusammenfassung',
          isTldr: true,
          items: [
            'macOS: Laden Sie die .dmg-Datei von ollama.com herunter, oder führen Sie `brew install ollama` aus -- dann `ollama run llama3.2` zum Chatten.',
            'Windows: Laden Sie das Installationsprogramm von ollama.com/download herunter. Ollama wird als Hintergrunddienst im Systembereich ausgeführt.',
            'Linux: Ein einzelner curl-Befehl installiert alles -- `curl -fsSL https://ollama.com/install.sh | sh`.',
            'Mindestanforderungen: 4 GB RAM für ein 3B-Modell, 8 GB RAM für ein 7B-Modell. Keine GPU erforderlich zum Starten.',
            'Ollama stellt eine OpenAI-kompatible REST-API auf `http://localhost:11434` bereit -- jede OpenAI-SDK-App kann sie ohne Codeänderungen verwenden.',
          ],
        },
        beforeYouInstall: {
          id: 'vor-installation',
          title: 'Vor der Installation: Ist lokales LLM die richtige Wahl für Ihren Anwendungsfall?',
          content: [
            'Ollama-Installation dauert 5 Minuten, aber das optimale Ausführen Ihres ersten Modells kann 20–40 Minuten dauern, wenn Sie auf GPU-Erkennungsprobleme, Treiberabstimmungen oder RAM-Engpässe stoßen.',
            'Wenn Sie unsicher sind, ob lokale Inferenz die richtige Wahl für Sie ist, **[vergleichen Sie zunächst den vollständigen Kompromiss zwischen lokal und Cloud](https://www.promptquorum.com/de/local-llms/local-llm-limitations)** — Sie könnten feststellen, dass der Start mit einer Cloud-API (in 5 Minuten einsatzbereit, keine Fehlerbehebung) der klügere Weg ist. Viele Benutzer entdecken dies nach der Installation; besser jetzt entscheiden.',
            'Für Benutzer, die sich zum Lokalen verpflichtet haben, fahren Sie unten fort. Für Benutzer, die Cloud zuerst bewerten, [lesen Sie den vollständigen Vergleich](https://www.promptquorum.com/de/local-llms/local-llm-limitations).',
          ],
        },
        whatIsOllama: {
          id: 'what-is-ollama',
          title: 'Was ist Ollama und warum sollte ich es nutzen?',
          content: [
            '**Ollama ist eine Open-Source-Inference-Engine, die große Sprachmodelle lokal ausführt.** Sie kombiniert Modellverwaltung, das llama.cpp-Inference-Backend und eine OpenAI-kompatible REST-API in einer einzigen leichten Anwendung. Keine Python, keine Conda-Umgebung und kein CUDA-Setup erforderlich.',
            'Ollama betreut eine kuratierte Modellbibliothek (ollama.com/library) mit Ein-Befehl-Downloads für Meta Llama 3.3, Microsoft Phi-3, Google Gemma 2, Mistral, Qwen3 und über 100 weitere Modelle. Ein Modell wird einmal heruntergeladen und auf der Festplatte zwischengespeichert -- nachfolgende Ausführungen starten in unter 5 Sekunden.',
            'Für Alternativen zu Ollama siehe [Local-LLM-One-Click-Installer](/de/local-llms/local-llm-one-click-installers). Zum Vergleich von Ollama und LM Studio siehe [So installieren Sie LM Studio](/de/local-llms/how-to-install-lm-studio).',
          ],
          blockquote: 'In einem Satz: Ollama ist ein Tool zum Herunterladen und lokalen Ausführen von Open-Source-Sprachmodellen (wie Mistral oder Llama 3.3) auf Ihrem Computer mit nur einem Befehl.',
        },
        installMac: {
          id: 'install-on-macos',
          title: 'Wie installiert man Ollama auf macOS?',
          content: 'Es gibt zwei Methoden. Der Installer-Download ist schneller; Homebrew ist besser, wenn Sie Software mit brew verwalten.',
          numberedItems: [
            'Gehen Sie zu ollama.com/download und klicken Sie auf „Download für macOS".',
            'Öffnen Sie die heruntergeladene Ollama.dmg-Datei und ziehen Sie Ollama in Ihren Anwendungsordner.',
            'Starten Sie Ollama über die Anwendungen. Ein Llama-Symbol erscheint in der Menüleiste -- Ollama wird jetzt als Hintergrunddienst ausgeführt.',
            'Öffnen Sie das Terminal und führen Sie Ihr erstes Modell aus: `ollama run llama3.2`',
            'Das Modell wird heruntergeladen (~2 GB für llama3.2:3b) und eine Chat-Eingabeaufforderung wird angezeigt. Geben Sie eine Nachricht ein und drücken Sie die Eingabetaste.',
          ],
          blockquote: 'In einem Satz: Ollama wird auf macOS als Hintergrunddienst ausgeführt -- sobald es installiert und gestartet ist, wird die lokale API auf `http://localhost:11434` auf Modellanforderungen überwacht.',
        },
        installMacBrew: {
          title: 'Wie installiert man Ollama auf macOS mit Homebrew?',
          codeBlock: 'brew install ollama\n\n# Starten Sie den Ollama-Dienst\nollama serve &\n\n# Ziehen Sie ein Modell herunter und führen Sie es aus\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: 'Wie installiert man Ollama auf Windows?',
          numberedItems: [
            'Gehen Sie zu ollama.com/download und klicken Sie auf „Download für Windows".',
            'Führen Sie das heruntergeladene OllamaSetup.exe-Installationsprogramm aus. Ollama wird in %LOCALAPPDATA%\\Programs\\Ollama installiert.',
            'Ollama wird automatisch gestartet und als Systembereich-Symbol angezeigt.',
            'Öffnen Sie PowerShell oder Eingabeaufforderung und führen Sie aus: `ollama run llama3.2`',
            'Das Modell wird beim ersten Ausführen heruntergeladen. Nachfolgende Ausführungen verwenden das zwischengespeicherte Modell.',
          ],
        },
        installWindowsNote: {
          title: 'Wie aktiviert man GPU-Unterstützung unter Windows?',
          content: 'Ollama unter Windows erkennt automatisch und nutzt NVIDIA-GPUs (CUDA 11.3+) und AMD-GPUs (ROCm 6+). Wenn Sie eine NVIDIA-RTX-Karte haben, wird Ollama Modellebenen automatisch in den VRAM verschieben -- keine manuelle Konfiguration erforderlich. Zum Verifizieren, dass die GPU verwendet wird, führen Sie `ollama run llama3.2` aus und überprüfen Sie den Task Manager → GPU auf Aktivität.',
        },
        installLinux: {
          id: 'install-on-linux',
          title: 'Wie installiert man Ollama auf Linux?',
          content: 'Ein einzelner Befehl installiert Ollama auf jeder Linux-Distribution:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Wie führt man Ollama als systemd-Dienst auf Linux aus?',
          content: 'Das Installationsskript registriert Ollama automatisch als systemd-Dienst. So verwalten Sie ihn:',
          codeBlock: '# Dienststatus überprüfen\nsystemctl status ollama\n\n# Starten / Stoppen / Neustarten\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# Protokolle anzeigen\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-de.png',
          imageCaption: 'Vierstufiger Ablauf, um Ollama als systemd-Dienst unter Linux auszuführen: Installation mit `curl -fsSL https://ollama.com/install.sh | sh`, Statusprüfung mit `systemctl status ollama`, Steuerung über `start`/`stop`/`restart`, und Log-Verfolgung mit `journalctl -u ollama -f`.',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: 'Wie zieht man sein erstes Modell in Ollama herunter und führt es aus?',
          content: 'Führen Sie nach der Installation von Ollama diesen Befehl aus, um ein Modell herunterzuladen und zu starten:',
          codeBlock: '# Ziehen Sie ein Modell herunter (speichern Sie es unter ~/.ollama/models)\nollama pull llama3.2\n\n# Führen Sie es interaktiv aus\nollama run llama3.2\n\n# Oder herunterladen und in einem Schritt ausführen\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          id: 'which-model-to-start-with',
          title: 'Mit welchem Modell sollte ich anfangen?',
          content: 'Für einen ersten Durchlauf decken diese drei Modelle verschiedene Hardware-Profile ab:',
          rows: [
            { 'Modell': 'Llama 3.2 3B', 'Download-Größe': '~2 GB', 'Benötigter RAM': '4 GB', 'Am besten für': 'Erster Test -- auf jeder Maschine' },
            { 'Modell': 'Llama 3.3 8B', 'Download-Größe': '~4,7 GB', 'Benötigter RAM': '8 GB', 'Am besten für': 'Allgemeine Nutzung auf den meisten Laptops' },
            { 'Modell': 'phi4-mini', 'Download-Größe': '~2,3 GB', 'Benötigter RAM': '4 GB', 'Am besten für': 'Schnelle Antworten, niedriger RAM' },
          ],
          columns: ['Modell', 'Download-Größe', 'Benötigter RAM', 'Am besten für'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: 'Wie überprüft man, ob Ollama funktioniert?',
          content: 'Testen Sie die REST-API direkt, um zu bestätigen, dass Ollama läuft und verfügbar ist:',
          codeBlock: '# Überprüfen Sie, ob Ollama läuft\ncurl http://localhost:11434\n# Erwartet: "Ollama is running"\n\n# Heruntergeladene Modelle auflisten\nollama list\n\n# Senden Sie eine Eingabeaufforderung über die API (OpenAI-kompatibel)\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "Was ist 2+2?",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          id: 'useful-ollama-commands',
          title: 'Welche Ollama-Befehle sind am nützlichsten?',
          rows: [
            { 'Befehl': 'ollama list', 'Funktion': 'Zeige alle heruntergeladenen Modelle und ihre Größen' },
            { 'Befehl': 'ollama pull <model>', 'Funktion': 'Laden Sie ein Modell herunter, ohne es auszuführen' },
            { 'Befehl': 'ollama rm <model>', 'Funktion': 'Löschen Sie ein Modell von der Festplatte' },
            { 'Befehl': 'ollama ps', 'Funktion': 'Zeige Modelle, die derzeit im Speicher geladen sind' },
            { 'Befehl': 'ollama show <model>', 'Funktion': 'Zeige Modelldetails (Parameter, Vorlage, Lizenz)' },
            { 'Befehl': 'ollama serve', 'Funktion': 'Starten Sie den Ollama-Server manuell (falls nicht als Dienst ausgeführt)' },
          ],
          columns: ['Befehl', 'Funktion'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Wie behebe ich häufige Probleme bei der Installation von Ollama?',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-de.png',
          imageCaption: 'Referenztabelle mit 5 häufigen Ollama-Installationsfehlern -- Dienst läuft nicht, gestoppte 2-47 GB Downloads, Speicherfehler, nicht erkannte GPUs und bei 4096 Tokens abgeschnittene Prompts -- jeweils mit passendem Fix-Befehl.',
          faqs: [
            {
              q: 'Ollama sagt „could not connect to ollama app, is it running?" (Fehler: Keine Verbindung zur Ollama-App möglich. Läuft sie?)',
              a: 'Ollama wird nicht als Hintergrunddienst ausgeführt. Auf macOS: Öffnen Sie die Ollama-App über Anwendungen. Unter Linux: Führen Sie `systemctl start ollama` oder `ollama serve` in einem Terminal aus. Unter Windows: Starten Sie Ollama über das Startmenü.',
            },
            {
              q: 'Der Modell-Download ist sehr langsam oder hängt fest',
              a: 'Modell-Downloads sind groß (2-47 GB). Wenn der Download stecken bleibt, drücken Sie Strg+C und führen Sie `ollama pull <model>` erneut aus -- Ollama setzt partielle Downloads fort. Verwenden Sie für schnellere Downloads eine kabelgebundene Verbindung statt WLAN.',
            },
            {
              q: 'Ich erhalte die Fehlermeldung „error: model requires more system memory" (Fehler: Modell benötigt mehr Systemspeicher)',
              a: 'Das Modell ist zu groß für Ihren verfügbaren RAM. Versuchen Sie eine kleinere Quantisierung: `ollama run llama3.2-instruct-q4_0` statt der Standard-Q4_K_M. Oder wechseln Sie zu einem kleineren Modell wie `llama3.2:3b`. Siehe [Die besten anfänglichen Local-LLM-Modelle](/de/local-llms/best-beginner-local-llm-models) für RAM-abgestimmte Empfehlungen.',
            },
            {
              q: 'Ollama läuft, aber meine GPU wird nicht verwendet',
              a: 'Unter Windows überprüfen Sie, ob Ihr NVIDIA-Treiber Version 452.39 oder höher ist. Unter Linux bestätigen Sie, dass das NVIDIA-Container-Toolkit installiert ist (`nvidia-smi` sollte GPU-Informationen zurückgeben). Ollama versetzt Ebenen automatisch in den GPU-Speicher, wenn VRAM verfügbar ist -- führen Sie `ollama ps` aus, nachdem Sie ein Modell gestartet haben, um die GPU-Auslastung anzusehen.',
            },
            {
              q: 'Wo werden Ollama-Modelldateien gespeichert?',
              a: 'Modelle werden unter ~/.ollama/models auf macOS und Linux gespeichert. Unter Windows ist der Standardpfad C:\\Users\\<benutzername>\\.ollama\\models. Sie können den Speicherort ändern, indem Sie die Umgebungsvariable OLLAMA_MODELS festlegen, bevor Sie den Dienst starten.',
            },
          ],
        },
        nextSteps: {
          title: 'Was sollte ich nach der Installation von Ollama tun?',
          content: 'Sobald Ollama ausgeführt wird, ist der nächste Schritt [Führen Sie Ihr erstes lokales LLM aus](/de/local-llms/run-first-local-llm), um das Prompting, die Kontextlänge und die erwartete Geschwindigkeit der lokalen Inference zu verstehen. Um das beste Modell für Ihre Hardware auszuwählen, siehe [Die besten anfänglichen Local-LLM-Modelle](/de/local-llms/best-beginner-local-llm-models). Wenn Sie eine grafische Chat-Schnittstelle dem Terminal vorziehen, wird in [So installieren Sie LM Studio](/de/local-llms/how-to-install-lm-studio) die Desktop-App-Alternative behandelt.',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Regionale Einsatzszenarien und Compliance-Kontext',
          content: [
            '**EU / DSGVO**: Ollama, das lokal vor Ort ausgeführt wird, bedeutet, dass persönliche Daten die Infrastruktur der Organisation nie verlassen. Die DSGVO Artikel 5 (Datensparsamkeit) ist standardmäßig erfüllt, da die Inference auf Ihrer Maschine stattfindet. Deutsche Datenschutzbehörden und die französische CNIL empfehlen die lokale LLM-Bereitstellung zur Verarbeitung von Mitarbeiter- oder Kundendaten. Das Binden von Ollama an `localhost` (die Standardeinstellung) stellt sicher, dass kein externer Netzwerkzugriff erfolgt.',
            '**Japan / METI**: Japans METI-KI-Governance-Richtlinien verlangen eine Dokumentation, wo KI-Inference stattfindet. Organisationen können Ollama vor Ort bereitstellen, um die Datenschutzbestimmungen einzuhalten, insbesondere in den Bereichen Finanzdienstleistungen, Gesundheitswesen und Fertigung. Lokale Bereitstellung mit Ollama wird als datenschutzfreundlicher Ansatz anerkannt, der den APPI-Anforderungen (Gesetz zum Schutz persönlicher Informationen) entspricht.',
            '**China / CAC**: Die Interim-Maßnahmen der Cyberspace-Verwaltung Chinas für generative KI-Dienste (2023) regulieren KI-Services, die chinesischen Nutzern angeboten werden. Eine lokal laufende Ollama-Bereitstellung, die vollständig auf-Site läuft, liegt außerhalb der CAC-Anbieter-Definition und reduziert die Compliance-Belastung für Unternehmensanwendungsfälle erheblich, die mit sensiblen Daten arbeiten.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Offizielle Ollama-Dokumentation](https://ollama.com) -- Installationsanleitung und API-Dokumentation',
            '[Ollama GitHub-Repository](https://github.com/ollama/ollama) -- Quellcode, Probleme und Versionshinweise',
            '[Ollama-Modellbibliothek](https://ollama.com/library) -- Vollständige Liste der verfügbaren Modelle mit Download-Links',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Was sind häufige Fehler bei der Installation von Ollama?',
          items: [
            'Nicht überprüfen, ob Ollama als Hintergrunddienst läuft, bevor Sie erwarten, dass die API antwortet. Unter macOS überprüfen Sie, ob das Llama-Symbol in der Menüleiste angezeigt wird. Unter Linux führen Sie `systemctl status ollama` aus. Unter Windows überprüfen Sie den Systembereich.',
            'Versuchen, Modelle auszuführen, die größer sind als der verfügbare RAM, ohne Speicheranforderungen zuerst zu überprüfen. Ein 7B-Modell mit Q4-Quantisierung benötigt ~4-5 GB VRAM. Multiplizieren Sie immer die Modelldateigröße mit 1,2, um den benötigten RAM zu schätzen.',
            'GPU-Erkennung ignorieren -- Ollama unterstützt NVIDIA und AMD, benötigt aber aktuelle Treiber. Unter Windows überprüfen Sie die NVIDIA-Treiberversion 452.39+ mit `nvidia-smi`. Unter Linux bestätigen Sie, dass das NVIDIA-Container-Toolkit installiert ist.',
            'VRAM (GPU-Speicher) mit System-RAM verwechseln. Ollama kann auf CPU laufen, aber GPU-Beschleunigung ist 5-10× schneller. Wenn Sie eine diskrete GPU haben, aber die Inference langsam ist, kann Ollama aufgrund fehlender oder veralteter GPU-Treiber auf CPU zurückfallen.',
            'Nicht verstehen, dass Modell-Downloads zwischengespeichert werden. Beim ersten Ausführen benötigt `ollama pull llama3.2` 5-10 Minuten für einen 2-GB-Download. Nachfolgende Ausführungen verwenden das zwischengespeicherte Modell und starten in unter 5 Sekunden.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Literatur',
          items: [
            '[Lokaler LLM-Entwickler-Stack](/de/local-llms/local-llm-developer-stack) -- Vollständige Entwicklungsumgebung: CLI → API-Server → Multi-GPU-Produktion.',
            '[Was sind Local LLMs?](/de/local-llms/what-are-local-llms) -- Definition und Kernkonzepte',
            '[Führen Sie Ihr erstes lokales LLM aus](/de/local-llms/run-first-local-llm) -- Nächster Schritt nach der Installation',
            '[Die besten anfänglichen Local-LLM-Modelle](/de/local-llms/best-beginner-local-llm-models) -- Modellempfehlungen nach Hardware',
            '[Local-LLM-One-Click-Installer](/de/local-llms/local-llm-one-click-installers) -- Alternative Tools zu Ollama',
            '[So installieren Sie LM Studio](/de/local-llms/how-to-install-lm-studio) -- GUI-Alternative für Anfänger',
            '[How to Install LM Studio](/de/local-llms/how-to-install-lm-studio) -- Detaillierter Vergleich von CLI vs. GUI-Ansätzen',
            '[MLX vs Ollama vs llama.cpp auf Mac 2026](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Framework-Vergleich für Apple Silicon: Geschwindigkeit, Setup-Zeit und Ökosystem-Kompromisse.',
          '[Lokale LLM-Modell-Updates 2026](/de/local-llms/local-llm-model-updates-2026) -- vollständige Zeitleiste aller wichtigen Open-Weight-Modelle, die dieses Jahr für Ollama veröffentlicht wurden.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Ist Ollama kostenlos?',
              a: 'Ja, Ollama ist kostenlos und Open-Source unter der MIT-Lizenz. Es gibt keine Nutzungsbeschränkungen, keine erforderlichen API-Schlüssel, und die gesamte Inference läuft lokal auf Ihrem Computer.',
            },
            {
              q: 'Funktioniert Ollama unter Windows?',
              a: 'Ja. Ollama hat seit 2024 ein stabiles natives Windows-Installationsprogramm (2026 mit verbesserter Performance). Laden Sie es von ollama.com herunter. Es unterstützt NVIDIA-GPUs über CUDA und AMD-GPUs über ROCm unter Windows.',
            },
            {
              q: 'Wie viel RAM brauche ich, um Ollama auszuführen?',
              a: 'Mindestens 8 GB RAM für 3B-7B-Modelle bei Q4-Quantisierung. 16 GB RAM verwaltet 7B-Modelle komfortabel und 13B-Modelle bei Q4. 32 GB+ RAM wird für 34B-Modelle mit nur CPU empfohlen.',
            },
            {
              q: 'Wie aktualisiere ich Ollama auf die neueste Version?',
              a: 'Auf macOS wird Ollama automatisch aktualisiert. Unter Windows laden Sie das neueste Installationsprogramm von ollama.com herunter und führen es aus. Unter Linux führen Sie das Installationsskript erneut aus: curl -fsSL https://ollama.com/install.sh | sh',
            },
            {
              q: 'Kann ich Ollama über das OpenAI-SDK ohne Codeänderungen nutzen?',
              a: 'Ja. Legen Sie base_url auf http://localhost:11434/v1 im OpenAI-SDK fest und übergeben Sie einen beliebigen String als API-Schlüssel. Die REST-API von Ollama ist vollständig OpenAI-kompatibel, sodass jede für GPT oder Claude geschriebene Anwendung Ihr lokales Modell nutzen kann.',
            },
            {
              q: 'Warum ist meine Ollama-Inference langsam (unter 5 Token/Sek)?',
              a: 'Das Modell wird wahrscheinlich auf der CPU statt auf der GPU ausgeführt. Überprüfen Sie mit ollama ps, dass das Modell geladen ist. Wenn die GPU-Auslastung 0% ist, überprüfen Sie, dass Ihre GPU-Treiber installiert und aktuell sind. Auf NVIDIA: nvidia-smi sollte Ihre GPU anzeigen. Auf AMD: rocm-smi. Auf Mac: Metal-GPU-Beschleunigung ist auf Apple Silicon automatisch.',
            },
            {
              q: 'Kann Ollama mehrere Modelle gleichzeitig ausführen?',
              a: 'Ollama kann ein Modell gleichzeitig pro Prozess ausführen. Sie können jedoch mehrere Instanzen von Ollama auf verschiedenen Ports ausführen (z. B. OLLAMA_HOST=localhost:11434 und OLLAMA_HOST=localhost:11435), um mehrere Modelle parallel zu bedienen. Dies erfordert mehr RAM.',
            },
            {
              q: 'Was ist der Unterschied zwischen ollama pull und ollama run?',
              a: 'ollama pull lädt ein Modell aus der Ollama-Bibliothek herunter, ohne es in den Speicher zu laden. ollama run lädt das Modell herunter (falls nicht zwischengespeichert) und startet sofort eine Chat-Sitzung. Um ein Modell über die API ohne die Chat-Schnittstelle zu verwenden, führen Sie zuerst pull durch und fragen dann die API ab.',
            },
            {
              q: 'Ist ein lokales LLM mit Ollama DSGVO-konform?',
              a: 'Nicht automatisch. Ein lokales LLM verarbeitet Daten lokal, aber DSGVO-Konformität erfordert zusätzlich: Festplattenverschlüsselung, Zugriffskontrolle, Verarbeitungsverzeichnis und ggf. Auftragsverarbeitungsverträge. Lokale Verarbeitung mit Ollama ist ein wichtiger Schritt, aber kein vollständiger DSGVO-Nachweis. Konsultieren Sie Ihren Datenschutzbeauftragten (DSB) zur Compliance.',
            },
            {
              q: 'Kann ich Ollama im deutschen Mittelstand produktiv einsetzen?',
              a: 'Ja. Viele mittelständische Unternehmen nutzen Ollama lokal für interne Dokumentenverarbeitung, Code-Review und Datenanalyse. Wichtig: Binden Sie Ollama auf localhost (Standardeinstellung), aktivieren Sie Festplattenverschlüsselung für sensible Daten, und prüfen Sie Ihre Compliance-Anforderungen (besonders bei Kundendaten). Mit diesen Maßnahmen ist Ollama ein kostengünstiger Weg zu KI im Betrieb, ohne Cloud-Abhängigkeiten.',
            },
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Ollama installieren 2026 - Vollständige Anleitung',
        'description': 'Ollama installiert sich in weniger als 2 Minuten auf macOS, Windows oder Linux. Das Ausführen Ihres ersten Modells erfordert einen einzigen Befehl -- hier ist die Schritt-für-Schritt-Anleitung.',
        'url': 'https://www.promptquorum.com/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Beginner',
        'keywords': ['Ollama-Installation', 'Ollama installieren', 'Ollama macOS', 'Ollama Windows', 'Ollama Linux', 'lokales LLM-Setup', 'llama.cpp', 'OpenAI-kompatible API'],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen 3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral' },
          { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' }
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', 'h2', '.key-takeaways'] }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Wie man Ollama 2026 installiert',
        'description': 'Schritt-für-Schritt-Anleitung zur Installation von Ollama unter macOS, Windows und Linux.',
        'step': [
          { '@type': 'HowToStep', 'name': 'Laden Sie Ollama herunter', 'text': 'Besuchen Sie ollama.com und laden Sie das Installationsprogramm für Ihr Betriebssystem herunter (macOS-App, Windows-Installer oder Linux curl-Befehl).' },
          { '@type': 'HowToStep', 'name': 'Installieren Sie Ollama', 'text': 'Führen Sie das macOS-/Windows-Installationsprogramm aus, oder führen Sie unter Linux aus: curl -fsSL https://ollama.com/install.sh | sh' },
          { '@type': 'HowToStep', 'name': 'Ziehen Sie Ihr erstes Modell herunter', 'text': 'Führen Sie im Terminal aus: ollama pull llama3.2:3b (für 8 GB RAM) oder ollama pull qwen2.5:7b (für 16 GB RAM).' },
          { '@type': 'HowToStep', 'name': 'Führen Sie das Modell aus', 'text': 'Starten Sie einen Chat: ollama run llama3.2:3b' },
          { '@type': 'HowToStep', 'name': 'Überprüfen Sie die Installation', 'text': 'Testen Sie die REST-API: curl http://localhost:11434. Erwartete Antwort: "Ollama is running"' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Ist Ollama kostenlos?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Ollama ist kostenlos und Open-Source unter der MIT-Lizenz. Es gibt keine Nutzungsbeschränkungen, keine erforderlichen API-Schlüssel, und die gesamte Inference läuft lokal auf Ihrem Computer.' } },
          { '@type': 'Question', name: 'Funktioniert Ollama unter Windows?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Ollama hat seit 2024 ein stabiles natives Windows-Installationsprogramm (2026 mit verbesserter Performance). Laden Sie es von ollama.com herunter. Es unterstützt NVIDIA-GPUs über CUDA und AMD-GPUs über ROCm unter Windows.' } },
          { '@type': 'Question', name: 'Wie viel RAM brauche ich, um Ollama auszuführen?', acceptedAnswer: { '@type': 'Answer', text: 'Mindestens 8 GB RAM für 3B-7B-Modelle bei Q4-Quantisierung. 16 GB RAM verwaltet 7B-Modelle komfortabel und 13B-Modelle bei Q4. 32 GB+ RAM wird für 34B-Modelle mit nur CPU empfohlen.' } },
          { '@type': 'Question', name: 'Wie aktualisiere ich Ollama auf die neueste Version?', acceptedAnswer: { '@type': 'Answer', text: 'Auf macOS wird Ollama automatisch aktualisiert. Unter Windows laden Sie das neueste Installationsprogramm von ollama.com herunter und führen es aus. Unter Linux führen Sie das Installationsskript erneut aus: curl -fsSL https://ollama.com/install.sh | sh' } },
          { '@type': 'Question', name: 'Kann ich Ollama über das OpenAI-SDK ohne Codeänderungen nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Legen Sie base_url auf http://localhost:11434/v1 im OpenAI-SDK fest und übergeben Sie einen beliebigen String als API-Schlüssel. Die REST-API von Ollama ist vollständig OpenAI-kompatibel, sodass jede für GPT oder Claude geschriebene Anwendung Ihr lokales Modell nutzen kann.' } },
          { '@type': 'Question', name: 'Warum ist meine Ollama-Inference langsam (unter 5 Token/Sek)?', acceptedAnswer: { '@type': 'Answer', text: 'Das Modell wird wahrscheinlich auf der CPU statt auf der GPU ausgeführt. Überprüfen Sie mit ollama ps, dass das Modell geladen ist. Wenn die GPU-Auslastung 0% ist, überprüfen Sie, dass Ihre GPU-Treiber installiert und aktuell sind. Auf NVIDIA: nvidia-smi sollte Ihre GPU anzeigen. Auf AMD: rocm-smi. Auf Mac: Metal-GPU-Beschleunigung ist auf Apple Silicon automatisch.' } },
          { '@type': 'Question', name: 'Kann Ollama mehrere Modelle gleichzeitig ausführen?', acceptedAnswer: { '@type': 'Answer', text: 'Ollama kann ein Modell gleichzeitig pro Prozess ausführen. Sie können jedoch mehrere Instanzen von Ollama auf verschiedenen Ports ausführen (z. B. OLLAMA_HOST=localhost:11434 und OLLAMA_HOST=localhost:11435), um mehrere Modelle parallel zu bedienen. Dies erfordert mehr RAM.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen ollama pull und ollama run?', acceptedAnswer: { '@type': 'Answer', text: 'ollama pull lädt ein Modell aus der Ollama-Bibliothek herunter, ohne es in den Speicher zu laden. ollama run lädt das Modell herunter (falls nicht zwischengespeichert) und startet sofort eine Chat-Sitzung. Um ein Modell über die API ohne die Chat-Schnittstelle zu verwenden, führen Sie zuerst pull durch und fragen dann die API ab.' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Ollama installieren: Vollständige Einrichtungsanleitung für macOS, Windows und Linux',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'macOS: Laden Sie die .dmg-Datei von ollama.com herunter, oder führen Sie `brew install ollama` aus -- dann `ollama run llama3.2` zum Chatten.' },
          { '@type': 'ListItem', position: 2, name: 'Windows: Laden Sie das Installationsprogramm von ollama.com/download herunter. Ollama wird als Hintergrunddienst im Systembereich ausgeführt.' },
          { '@type': 'ListItem', position: 3, name: 'Linux: Ein einzelner curl-Befehl installiert alles -- `curl -fsSL https://ollama.com/install.sh | sh`.' },
          { '@type': 'ListItem', position: 4, name: 'Mindestanforderungen: 4 GB RAM für ein 3B-Modell, 8 GB RAM für ein 7B-Modell. Keine GPU erforderlich zum Starten.' },
          { '@type': 'ListItem', position: 5, name: 'Ollama stellt eine OpenAI-kompatible REST-API auf `http://localhost:11434` bereit -- jede OpenAI-SDK-App kann sie ohne Codeänderungen verwenden.' },
        ],
      },
    },
    fr: {
      theme: 'Getting Started',
      title: 'Installation d\'Ollama : Guide complet de configuration pour macOS, Windows et Linux',
      seoTitle: 'Installer Ollama 2026: macOS, Windows, Linux',
      intro: 'Ollama est un moteur d\'inférence léger qui exécute de grands modèles de langage localement avec une seule commande. Après une installation de 2 minutes, `ollama pull llama3.2:3b` télécharge un modèle de 2 Go, et `ollama run llama3.2` ouvre une interface de chat. Ollama combine la gestion de modèles, le backend d\'inférence llama.cpp et une API REST compatible OpenAI sur `localhost:11434` dans une seule application sans environnement Python, sans fichiers de configuration et sans GPU requis pour commencer. En avril 2026, Ollama supporte plus de 200 modèles incluant Meta Llama 3.2, Qwen3, Mistral et DeepSeek, et expose son API à tout SDK OpenAI sans modifications de code.',
      metaDescription: 'Installer Ollama en moins de 2 minutes sur macOS, Windows ou Linux. Exécutez votre premier modèle avec un seul commande -- guide complet étape par étape.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-fr.png',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '8 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce qu\'Ollama ?', anchor: '#what-is-ollama' },
        { label: 'Installation sur macOS', anchor: '#install-on-macos' },
        { label: 'Installation sur Windows', anchor: '#install-on-windows' },
        { label: 'Installation sur Linux', anchor: '#install-on-linux' },
        { label: 'Télécharger et exécuter votre premier modèle', anchor: '#pull-and-run-your-first-model' },
        { label: 'Quel modèle utiliser pour commencer ?', anchor: '#which-model-to-start-with' },
        { label: 'Vérifier qu\'Ollama fonctionne', anchor: '#verify-ollama-is-working' },
        { label: 'Commandes Ollama utiles', anchor: '#useful-ollama-commands' },
        { label: 'Dépannage', anchor: '#troubleshooting' },
        { label: 'Contexte régional', anchor: '#regional-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures recommandées', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Résumé',
          isTldr: true,
          items: [
            'macOS : téléchargez le .dmg depuis ollama.com, ou exécutez `brew install ollama` -- puis `ollama run llama3.2` pour discuter.',
            'Windows : téléchargez le programme d\'installation depuis ollama.com/download. Ollama s\'exécute comme service en arrière-plan dans la barre des tâches système.',
            'Linux : une seule commande curl installe tout -- `curl -fsSL https://ollama.com/install.sh | sh`.',
            'Configuration minimale : 4 Go de RAM pour un modèle 3B, 8 Go de RAM pour un modèle 7B. Aucun GPU requis pour commencer.',
            'Ollama expose une API REST compatible OpenAI sur `http://localhost:11434` -- toute application SDK OpenAI peut l\'utiliser sans modifications de code.',
          ],
        },
        beforeYouInstall: {
          id: 'avant-installation',
          title: 'Avant d\'installer : L\'inférence locale convient-elle à votre cas d\'usage ?',
          content: [
            'L\'installation d\'Ollama prend 5 minutes, mais faire fonctionner correctement votre premier modèle peut prendre 20–40 minutes si vous rencontrez des problèmes de détection GPU, des incompatibilités de pilotes ou des contraintes de RAM.',
            'Si vous hésitez sur le fait que l\'inférence locale soit le bon choix pour vous, **[comparez d\'abord le compromis complet entre local et cloud](https://www.promptquorum.com/fr/local-llms/local-llm-limitations)** — vous découvrirez peut-être que commencer par une API cloud (prête en 5 minutes, sans dépannage) est le chemin plus intelligent. De nombreux utilisateurs découvrent cela après l\'installation ; il est préférable de décider maintenant.',
            'Pour les utilisateurs engagés dans le local, continuez ci-dessous. Pour les utilisateurs évaluant d\'abord le cloud, [consultez la comparaison complète](https://www.promptquorum.com/fr/local-llms/local-llm-limitations).',
          ],
        },
        whatIsOllama: {
          id: 'what-is-ollama',
          title: 'Qu\'est-ce qu\'Ollama et pourquoi l\'utiliser ?',
          content: [
            '**Ollama est un moteur d\'inférence open-source qui exécute de grands modèles de langage localement.** Il combine la gestion de modèles, le backend d\'inférence llama.cpp et une API REST compatible OpenAI dans une seule application légère. Aucun Python, aucun environnement conda et aucune configuration CUDA requise.',
            'Ollama maintient une bibliothèque de modèles triée sur le volet (ollama.com/library) avec des téléchargements en une seule commande pour Meta Llama 3.3, Microsoft Phi-3, Google Gemma 2, Mistral, Qwen3 et plus de 100 autres modèles. Un modèle est téléchargé une fois et mis en cache sur le disque -- les exécutions ultérieures démarrent en moins de 5 secondes.',
            'Pour les alternatives à Ollama, voir [Installateurs Local LLM en un clic](/fr/local-llms/local-llm-one-click-installers). Pour comparer Ollama avec LM Studio, voir [Installation de LM Studio](/fr/local-llms/how-to-install-lm-studio).',
          ],
          blockquote: 'En une phrase : Ollama est un outil pour télécharger et exécuter localement des modèles de langage open-source (comme Mistral ou Llama 3.3) sur votre ordinateur avec une seule commande.',
        },
        installMac: {
          id: 'install-on-macos',
          title: 'Comment installer Ollama sur macOS ?',
          content: 'Il y a deux méthodes. Le téléchargement du programme d\'installation est plus rapide ; Homebrew est mieux si vous gérez les logiciels avec brew.',
          numberedItems: [
            'Allez sur ollama.com/download et cliquez sur « Télécharger pour macOS ».',
            'Ouvrez le fichier Ollama.dmg téléchargé et glissez Ollama vers votre dossier Applications.',
            'Lancez Ollama depuis Applications. Une icône llama apparaît dans votre barre de menu -- Ollama s\'exécute maintenant comme service en arrière-plan.',
            'Ouvrez Terminal et exécutez votre premier modèle : `ollama run llama3.2`',
            'Le modèle est téléchargé (~2 Go pour llama3.2:3b) et une invite de chat apparaît. Tapez un message et appuyez sur Entrée.',
          ],
          blockquote: 'En une phrase : Ollama s\'exécute comme service en arrière-plan sur macOS -- une fois installé et démarré, l\'API locale écoute sur `http://localhost:11434` les requêtes de modèles.',
        },
        installMacBrew: {
          title: 'Comment installer Ollama sur macOS avec Homebrew ?',
          codeBlock: 'brew install ollama\n\n# Démarrer le service Ollama\nollama serve &\n\n# Télécharger et exécuter un modèle\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: 'Comment installer Ollama sur Windows ?',
          numberedItems: [
            'Allez sur ollama.com/download et cliquez sur « Télécharger pour Windows ».',
            'Exécutez le programme d\'installation OllamaSetup.exe téléchargé. Ollama s\'installe dans %LOCALAPPDATA%\\Programs\\Ollama.',
            'Ollama démarre automatiquement et s\'affiche comme icône de la barre des tâches système.',
            'Ouvrez PowerShell ou Invite de commandes et exécutez : `ollama run llama3.2`',
            'Le modèle est téléchargé à la première exécution. Les exécutions ultérieures utilisent le modèle en cache.',
          ],
        },
        installWindowsNote: {
          title: 'Comment activer le support GPU sur Windows ?',
          content: 'Ollama sur Windows détecte et utilise automatiquement les GPU NVIDIA (CUDA 11.3+) et AMD (ROCm 6+). Si vous avez une carte NVIDIA RTX, Ollama déchargera automatiquement les couches de modèles vers la VRAM -- aucune configuration manuelle requise. Pour vérifier que le GPU est utilisé, exécutez `ollama run llama3.2` et consultez le Gestionnaire des tâches → GPU pour l\'activité.',
        },
        installLinux: {
          id: 'install-on-linux',
          title: 'Comment installer Ollama sur Linux ?',
          content: 'Une seule commande installe Ollama sur toute distribution Linux :',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Comment exécuter Ollama comme service systemd sur Linux ?',
          content: 'Le script d\'installation enregistre automatiquement Ollama comme service systemd. Pour le gérer :',
          codeBlock: '# Vérifier l\'état du service\nsystemctl status ollama\n\n# Démarrer / Arrêter / Redémarrer\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# Afficher les journaux\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-fr.png',
          imageCaption: 'Flux en quatre étapes pour exécuter Ollama comme service systemd sur Linux : installer avec `curl -fsSL https://ollama.com/install.sh | sh`, vérifier le statut avec `systemctl status ollama`, le contrôler avec `start`/`stop`/`restart`, et suivre les logs avec `journalctl -u ollama -f`.',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: 'Comment télécharger et exécuter votre premier modèle dans Ollama ?',
          content: 'Après l\'installation d\'Ollama, exécutez cette commande pour télécharger et démarrer un modèle :',
          codeBlock: '# Télécharger un modèle (stockage dans ~/.ollama/models)\nollama pull llama3.2\n\n# L\'exécuter de manière interactive\nollama run llama3.2\n\n# Ou télécharger et exécuter en une étape\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          id: 'which-model-to-start-with',
          title: 'Quel modèle utiliser pour commencer ?',
          content: 'Pour un premier passage, ces trois modèles couvrent différents profils matériels :',
          rows: [
            { 'Modèle': 'Llama 3.2 3B', 'Taille du téléchargement': '~2 Go', 'RAM requise': '4 Go', 'Meilleur pour': 'Premier test -- toute machine' },
            { 'Modèle': 'Llama 3.3 8B', 'Taille du téléchargement': '~4,7 Go', 'RAM requise': '8 Go', 'Meilleur pour': 'Utilisation générale sur la plupart des ordinateurs portables' },
            { 'Modèle': 'phi4-mini', 'Taille du téléchargement': '~2,3 Go', 'RAM requise': '4 Go', 'Meilleur pour': 'Réponses rapides, faible RAM' },
          ],
          columns: ['Modèle', 'Taille du téléchargement', 'RAM requise', 'Meilleur pour'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: 'Comment vérifier qu\'Ollama fonctionne ?',
          content: 'Testez l\'API REST directement pour confirmer qu\'Ollama s\'exécute et est accessible :',
          codeBlock: '# Vérifier qu\'Ollama s\'exécute\ncurl http://localhost:11434\n# Attendu: "Ollama is running"\n\n# Lister les modèles téléchargés\nollama list\n\n# Envoyer une invite via l\'API (compatible OpenAI)\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "Qu\'est-ce que 2+2 ?",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          id: 'useful-ollama-commands',
          title: 'Quelles commandes Ollama sont les plus utiles ?',
          rows: [
            { 'Commande': 'ollama list', 'Fonction': 'Afficher tous les modèles téléchargés et leurs tailles' },
            { 'Commande': 'ollama pull <model>', 'Fonction': 'Télécharger un modèle sans l\'exécuter' },
            { 'Commande': 'ollama rm <model>', 'Fonction': 'Supprimer un modèle du disque' },
            { 'Commande': 'ollama ps', 'Fonction': 'Afficher les modèles actuellement chargés en mémoire' },
            { 'Commande': 'ollama show <model>', 'Fonction': 'Afficher les détails du modèle (paramètres, modèle, licence)' },
            { 'Commande': 'ollama serve', 'Fonction': 'Démarrer le serveur Ollama manuellement (s\'il n\'est pas exécuté en tant que service)' },
          ],
          columns: ['Commande', 'Fonction'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Comment résoudre les problèmes courants d\'installation d\'Ollama ?',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-fr.png',
          imageCaption: 'Tableau de référence de 5 erreurs courantes d\'installation d\'Ollama -- service inactif, téléchargements de 2-47 Go bloqués, erreurs de mémoire insuffisante, GPU non détectés et prompts tronqués à 4096 tokens -- chacune avec sa commande de correction.',
          faqs: [
            {
              q: 'Ollama dit « could not connect to ollama app, is it running? » (impossible de se connecter à l\'application Ollama, fonctionne-t-elle ?)',
              a: 'Ollama ne s\'exécute pas comme service en arrière-plan. Sur macOS : ouvrez l\'application Ollama depuis Applications. Sous Linux : exécutez `systemctl start ollama` ou `ollama serve` dans un terminal. Sous Windows : lancez Ollama depuis le menu Démarrer.',
            },
            {
              q: 'Le téléchargement du modèle est très lent ou bloqué',
              a: 'Les téléchargements de modèles sont volumineux (2-47 Go). Si le téléchargement s\'arrête, appuyez sur Ctrl+C et réexécutez `ollama pull <model>` -- Ollama reprend les téléchargements partiels. Pour des téléchargements plus rapides, utilisez une connexion filaire plutôt que le Wi-Fi.',
            },
            {
              q: 'J\'obtiens l\'erreur « error: model requires more system memory » (le modèle nécessite plus de mémoire système)',
              a: 'Le modèle est trop volumineux pour votre RAM disponible. Essayez une quantification plus petite : `ollama run llama3.2-instruct-q4_0` au lieu de la Q4_K_M par défaut. Ou passez à un modèle plus petit comme `llama3.2:3b`. Voir [Les meilleurs modèles Local LLM pour débutants](/fr/local-llms/best-beginner-local-llm-models) pour des recommandations adaptées à la RAM.',
            },
            {
              q: 'Ollama s\'exécute mais mon GPU n\'est pas utilisé',
              a: 'Sous Windows, vérifiez que votre driver NVIDIA est version 452.39 ou supérieure. Sous Linux, confirmez que NVIDIA container toolkit est installé (`nvidia-smi` devrait retourner les informations GPU). Ollama décharge automatiquement les couches vers le GPU quand la VRAM est disponible -- exécutez `ollama ps` après le démarrage d\'un modèle pour voir l\'utilisation du GPU.',
            },
            {
              q: 'Où sont stockés les fichiers de modèles Ollama ?',
              a: 'Les modèles sont stockés dans ~/.ollama/models sur macOS et Linux. Sous Windows, le chemin par défaut est C:\\Users\\<username>\\.ollama\\models. Vous pouvez modifier l\'emplacement de stockage en définissant la variable d\'environnement OLLAMA_MODELS avant de démarrer le service.',
            },
          ],
        },
        nextSteps: {
          title: 'Que faire après l\'installation d\'Ollama ?',
          content: 'Une fois Ollama en cours d\'exécution, l\'étape suivante est [Exécuter votre premier LLM local](/fr/local-llms/run-first-local-llm) pour comprendre le prompting, la longueur du contexte et ce qu\'il faut attendre de la vitesse d\'inférence locale. Pour choisir le meilleur modèle pour votre matériel, consultez [Les meilleurs modèles Local LLM pour débutants](/fr/local-llms/best-beginner-local-llm-models). Si vous préférez une interface de chat graphique au terminal, [Installation de LM Studio](/fr/local-llms/how-to-install-lm-studio) couvre l\'alternative de l\'application de bureau.',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Contexte de déploiement régional et conformité',
          content: [
            '**UE / RGPD**: Ollama s\'exécutant localement sur site signifie que les données personnelles ne quittent jamais l\'infrastructure de l\'organisation. Le RGPD Article 5 (minimisation des données) est satisfait par défaut car l\'inférence se produit sur votre machine. Les autorités allemandes de protection des données et la CNIL française recommandent le déploiement de modèles LLM locaux pour traiter les données des employés ou des clients. La liaison d\'Ollama à `localhost` (la valeur par défaut) garantit aucun accès réseau externe.',
            '**Japon / METI**: Les lignes directrices de gouvernance de l\'IA du METI japonais exigent de documenter où l\'inférence de l\'IA se produit. Les organisations peuvent déployer Ollama sur site pour se conformer aux règles de résidence des données, particulièrement dans les services financiers, la santé et la fabrication. Le déploiement local avec Ollama est reconnu comme une approche préservant la vie privée qui s\'aligne sur les exigences de la LAPPD (Loi sur la protection des informations personnelles).',
            '**Chine / CAC**: Les mesures intérimaires de l\'Administration du cyberespace de Chine pour les services d\'IA générative (2023) réglementent les services d\'IA offerts aux utilisateurs chinois. Un déploiement Ollama s\'exécutant localement entièrement sur site se situe en dehors de la définition du fournisseur du CAC, réduisant considérablement le fardeau de conformité pour les cas d\'utilisation en entreprise traitant les données sensibles.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Documentation officielle Ollama](https://ollama.com) -- Guides d\'installation et documentation API',
            '[Dépôt Ollama GitHub](https://github.com/ollama/ollama) -- Code source, problèmes et notes de version',
            '[Bibliothèque de modèles Ollama](https://ollama.com/library) -- Liste complète des modèles disponibles avec liens de téléchargement',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs courantes lors de l\'installation d\'Ollama ?',
          items: [
            'Ne pas vérifier qu\'Ollama s\'exécute comme service en arrière-plan avant de s\'attendre à ce que l\'API réponde. Sur macOS, vérifiez que l\'icône llama s\'affiche dans la barre de menu. Sous Linux, exécutez `systemctl status ollama`. Sous Windows, consultez la barre des tâches système.',
            'Tenter d\'exécuter des modèles plus volumineux que la RAM disponible sans vérifier d\'abord les exigences de mémoire. Un modèle 7B avec quantification Q4 nécessite ~4-5 Go de VRAM. Multipliez toujours la taille du fichier de modèle par 1,2 pour estimer la RAM totale requise.',
            'Ignorer la détection du GPU -- Ollama supporte NVIDIA et AMD mais nécessite des drivers à jour. Sous Windows, vérifiez la version du driver NVIDIA 452.39+ avec `nvidia-smi`. Sous Linux, confirmez que NVIDIA container toolkit est installé.',
            'Confondre VRAM (mémoire GPU) avec RAM système. Ollama peut s\'exécuter sur CPU, mais l\'accélération GPU est 5-10× plus rapide. Si vous avez un GPU discret mais l\'inférence est lente, Ollama peut se rabattre sur le CPU en raison de drivers GPU manquants ou obsolètes.',
            'Ne pas comprendre que les téléchargements de modèles sont mis en cache. À la première exécution, `ollama pull llama3.2` prend 5-10 minutes pour un téléchargement de 2 Go. Les exécutions ultérieures utilisent le modèle en cache et démarrent en moins de 5 secondes.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures recommandées',
          items: [
            '[Stack LLM Développeur Local](/fr/local-llms/local-llm-developer-stack) -- Environnement de développement complet : CLI → serveur API → multi-GPU production.',
            '[Qu\'est-ce que les LLM locaux ?](/fr/local-llms/what-are-local-llms) -- Définition et concepts fondamentaux',
            '[Exécutez votre premier LLM local](/fr/local-llms/run-first-local-llm) -- Prochaine étape après l\'installation',
            '[Les meilleurs modèles Local LLM pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- Recommandations de modèles par matériel',
            '[Installateurs Local LLM en un clic](/fr/local-llms/local-llm-one-click-installers) -- Outils alternatifs à Ollama',
            '[Installation de LM Studio](/fr/local-llms/how-to-install-lm-studio) -- Alternative GUI pour les débutants',
            '[How to Install LM Studio](/fr/local-llms/how-to-install-lm-studio) -- Comparaison détaillée des approches CLI vs GUI',
            '[MLX vs Ollama vs llama.cpp sur Mac 2026](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Comparaison de framework pour Apple Silicon : vitesse, temps de setup, et compromis écosystème.',
          '[Mises à jour des modèles LLM locaux 2026](/fr/local-llms/local-llm-model-updates-2026) -- chronologie complète de tous les modèles open-weight majeurs publiés pour Ollama cette année.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Ollama est-il gratuit ?',
              a: 'Oui, Ollama est gratuit et open-source sous licence MIT. Il n\'y a pas de limites d\'utilisation, pas de clés API requises, et toute l\'inférence s\'exécute localement sur votre machine.',
            },
            {
              q: 'Ollama fonctionne-t-il sur Windows ?',
              a: 'Oui. Ollama dispose d\'un programme d\'installation Windows natif stable depuis 2024 (2026 avec performances améliorées). Téléchargez-le depuis ollama.com. Il supporte les GPU NVIDIA via CUDA et les GPU AMD via ROCm sur Windows.',
            },
            {
              q: 'Combien de RAM me faut-il pour exécuter Ollama ?',
              a: 'Un minimum de 8 Go de RAM pour les modèles 3B-7B à quantification Q4. 16 Go de RAM gère confortablement les modèles 7B et les modèles 13B à Q4. 32 Go+ de RAM sont recommandés pour les modèles 34B exécutés sur CPU uniquement.',
            },
            {
              q: 'Comment mettent à jour Ollama vers la dernière version ?',
              a: 'Sur macOS, Ollama se met à jour automatiquement. Sous Windows, téléchargez et exécutez le dernier programme d\'installation depuis ollama.com. Sous Linux, réexécutez le script d\'installation : curl -fsSL https://ollama.com/install.sh | sh',
            },
            {
              q: 'Puis-je utiliser Ollama via le SDK OpenAI sans modifications de code ?',
              a: 'Oui. Définissez base_url sur http://localhost:11434/v1 dans le SDK OpenAI et transmettez n\'importe quelle chaîne comme clé API. L\'API REST d\'Ollama est entièrement compatible OpenAI, donc toute application écrite pour GPT ou Claude peut utiliser votre modèle local.',
            },
            {
              q: 'Pourquoi mon inférence Ollama est-elle lente (moins de 5 tokens/sec) ?',
              a: 'Le modèle s\'exécute probablement sur CPU au lieu du GPU. Vérifiez avec ollama ps que le modèle est chargé. Si l\'utilisation du GPU est 0%, vérifiez que vos drivers GPU sont installés et à jour. Sur NVIDIA : nvidia-smi devrait afficher votre GPU. Sur AMD : rocm-smi. Sur Mac : l\'accélération GPU Metal est automatique sur Apple Silicon.',
            },
            {
              q: 'Ollama peut-il exécuter plusieurs modèles simultanément ?',
              a: 'Ollama peut exécuter un modèle à la fois par processus. Cependant, vous pouvez exécuter plusieurs instances d\'Ollama sur des ports différents (par exemple, OLLAMA_HOST=localhost:11434 et OLLAMA_HOST=localhost:11435) pour servir plusieurs modèles en parallèle. Cela nécessite plus de RAM.',
            },
            {
              q: 'Quelle est la différence entre ollama pull et ollama run ?',
              a: 'ollama pull télécharge un modèle depuis la bibliothèque Ollama sans le charger en mémoire. ollama run télécharge le modèle (s\'il n\'est pas en cache) et démarre immédiatement une session de chat. Pour utiliser un modèle via l\'API sans l\'interface de chat, pull d\'abord puis interrogez l\'API.',
            },
            {
              q: 'Un LLM local avec Ollama est-il conforme au RGPD ?',
              a: 'Pas automatiquement. Un LLM local traite les données localement, mais la conformité au RGPD nécessite en outre : chiffrement du disque, contrôle d\'accès, registre de traitement et éventuellement contrats de traitement. Le traitement local avec Ollama est une étape importante, mais pas une preuve complète de conformité au RGPD. Consultez votre délégué à la protection des données (DPO) pour la conformité.',
            },
            {
              q: 'Puis-je utiliser Ollama en production dans une PME française ?',
              a: 'Oui. De nombreuses PME utilisent Ollama localement pour le traitement interne de documents, la révision de code et l\'analyse de données. Important : liez Ollama à localhost (valeur par défaut), activez le chiffrement du disque pour les données sensibles, et vérifiez vos exigences de conformité (en particulier avec les données clients). Avec ces mesures, Ollama est un moyen rentable de l\'IA dans les opérations, sans dépendances cloud.',
            },
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Installer Ollama 2026 - Guide complet',
        'description': 'Ollama s\'installe en moins de 2 minutes sur macOS, Windows ou Linux. L\'exécution de votre premier modèle ne nécessite qu\'une seule commande -- voici le guide étape par étape.',
        'url': 'https://www.promptquorum.com/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Beginner',
        'keywords': ['Installation Ollama', 'installer Ollama', 'Ollama macOS', 'Ollama Windows', 'Ollama Linux', 'configuration Local LLM', 'llama.cpp', 'API compatible OpenAI'],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen 3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral' },
          { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' }
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', 'h2', '.key-takeaways'] }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment installer Ollama 2026',
        'description': 'Instructions étape par étape pour installer Ollama sur macOS, Windows et Linux.',
        'step': [
          { '@type': 'HowToStep', 'name': 'Télécharger Ollama', 'text': 'Visitez ollama.com et téléchargez le programme d\'installation pour votre OS (application macOS, programme d\'installation Windows ou commande curl Linux).' },
          { '@type': 'HowToStep', 'name': 'Installer Ollama', 'text': 'Exécutez le programme d\'installation macOS/Windows, ou sous Linux exécutez : curl -fsSL https://ollama.com/install.sh | sh' },
          { '@type': 'HowToStep', 'name': 'Télécharger votre premier modèle', 'text': 'Exécutez dans un terminal : ollama pull llama3.2:3b (pour 8 Go RAM) ou ollama pull qwen2.5:7b (pour 16 Go RAM).' },
          { '@type': 'HowToStep', 'name': 'Exécuter le modèle', 'text': 'Démarrer une discussion : ollama run llama3.2:3b' },
          { '@type': 'HowToStep', 'name': 'Vérifier l\'installation', 'text': 'Testez l\'API REST : curl http://localhost:11434. Réponse attendue : "Ollama is running"' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Ollama est-il gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, Ollama est gratuit et open-source sous licence MIT. Il n\'y a pas de limites d\'utilisation, pas de clés API requises, et toute l\'inférence s\'exécute localement sur votre machine.' } },
          { '@type': 'Question', name: 'Ollama fonctionne-t-il sur Windows ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Ollama dispose d\'un programme d\'installation Windows natif stable depuis 2024 (2026 avec performances améliorées). Téléchargez-le depuis ollama.com. Il supporte les GPU NVIDIA via CUDA et les GPU AMD via ROCm sur Windows.' } },
          { '@type': 'Question', name: 'Combien de RAM me faut-il pour exécuter Ollama ?', acceptedAnswer: { '@type': 'Answer', text: 'Un minimum de 8 Go de RAM pour les modèles 3B-7B à quantification Q4. 16 Go de RAM gère confortablement les modèles 7B et les modèles 13B à Q4. 32 Go+ de RAM sont recommandés pour les modèles 34B exécutés sur CPU uniquement.' } },
          { '@type': 'Question', name: 'Comment mettre à jour Ollama vers la dernière version ?', acceptedAnswer: { '@type': 'Answer', text: 'Sur macOS, Ollama se met à jour automatiquement. Sous Windows, téléchargez et exécutez le dernier programme d\'installation depuis ollama.com. Sous Linux, réexécutez le script d\'installation : curl -fsSL https://ollama.com/install.sh | sh' } },
          { '@type': 'Question', name: 'Puis-je utiliser Ollama via le SDK OpenAI sans modifications de code ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Définissez base_url sur http://localhost:11434/v1 dans le SDK OpenAI et transmettez n\'importe quelle chaîne comme clé API. L\'API REST d\'Ollama est entièrement compatible OpenAI, donc toute application écrite pour GPT ou Claude peut utiliser votre modèle local.' } },
          { '@type': 'Question', name: 'Pourquoi mon inférence Ollama est-elle lente (moins de 5 tokens/sec) ?', acceptedAnswer: { '@type': 'Answer', text: 'Le modèle s\'exécute probablement sur CPU au lieu du GPU. Vérifiez avec ollama ps que le modèle est chargé. Si l\'utilisation du GPU est 0%, vérifiez que vos drivers GPU sont installés et à jour. Sur NVIDIA : nvidia-smi devrait afficher votre GPU. Sur AMD : rocm-smi. Sur Mac : l\'accélération GPU Metal est automatique sur Apple Silicon.' } },
          { '@type': 'Question', name: 'Ollama peut-il exécuter plusieurs modèles simultanément ?', acceptedAnswer: { '@type': 'Answer', text: 'Ollama peut exécuter un modèle à la fois par processus. Cependant, vous pouvez exécuter plusieurs instances d\'Ollama sur des ports différents (par exemple, OLLAMA_HOST=localhost:11434 et OLLAMA_HOST=localhost:11435) pour servir plusieurs modèles en parallèle. Cela nécessite plus de RAM.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre ollama pull et ollama run ?', acceptedAnswer: { '@type': 'Answer', text: 'ollama pull télécharge un modèle depuis la bibliothèque Ollama sans le charger en mémoire. ollama run télécharge le modèle (s\'il n\'est pas en cache) et démarre immédiatement une session de chat. Pour utiliser un modèle via l\'API sans l\'interface de chat, pull d\'abord puis interrogez l\'API.' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Installation d\'Ollama : Guide complet de configuration pour macOS, Windows et Linux',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'macOS : téléchargez le .dmg depuis ollama.com, ou exécutez `brew install ollama` -- puis `ollama run llama3.2` pour discuter.' },
          { '@type': 'ListItem', position: 2, name: 'Windows : téléchargez le programme d\'installation depuis ollama.com/download. Ollama s\'exécute comme service en arrière-plan dans la barre des tâches système.' },
          { '@type': 'ListItem', position: 3, name: 'Linux : une seule commande curl installe tout -- `curl -fsSL https://ollama.com/install.sh | sh`.' },
          { '@type': 'ListItem', position: 4, name: 'Configuration minimale : 4 Go de RAM pour un modèle 3B, 8 Go de RAM pour un modèle 7B. Aucun GPU requis pour commencer.' },
          { '@type': 'ListItem', position: 5, name: 'Ollama expose une API REST compatible OpenAI sur `http://localhost:11434` -- toute application SDK OpenAI peut l\'utiliser sans modifications de code.' },
        ],
      },
    },
    ja: {
      theme: 'はじめに',
      title: 'Ollama のインストール方法：macOS、Windows、Linux の完全なセットアップガイド',
      seoTitle: 'Ollama をインストール: macOS、Windows、Linux ガイド (2026)',
      intro: 'Ollama は、単一のコマンドで大規模言語モデルをローカルで実行する軽量推論エンジンです。2 分のインストール後、`ollama pull llama3.2:3b` は 2 GB のモデルをダウンロードし、`ollama run llama3.2` はチャット インターフェースを開きます。Ollama は、モデル管理、llama.cpp 推論バックエンド、および OpenAI 互換の REST API を `localhost:11434` に結合しており、Python 環境、構成ファイル、開始時の GPU は不要です。2026 年 4 月現在、Ollama は Meta Llama 3.2、Qwen3、Mistral、DeepSeek を含む 200 を超えるモデルをサポートし、その API を任意の OpenAI SDK にコード変更なしで公開しています。',
      metaDescription: '2 分以内に Ollama をインストール。1 つのコマンドで最初のモデルを実行----完全なステップバイステップガイド。',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-ja.png',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '読了約8分',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'Ollama とは何か？', anchor: '#what-is-ollama' },
        { label: 'macOS にインストール', anchor: '#install-on-macos' },
        { label: 'Windows にインストール', anchor: '#install-on-windows' },
        { label: 'Linux にインストール', anchor: '#install-on-linux' },
        { label: '最初のモデルをダウンロードして実行', anchor: '#pull-and-run-your-first-model' },
        { label: 'どのモデルから始めるべきか？', anchor: '#which-model-to-start-with' },
        { label: 'Ollama が動作していることを確認', anchor: '#verify-ollama-is-working' },
        { label: '便利な Ollama コマンド', anchor: '#useful-ollama-commands' },
        { label: 'トラブルシューティング', anchor: '#troubleshooting' },
        { label: '地域別の背景', anchor: '#regional-context' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: 'ソース', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '重要ポイント',
          isTldr: true,
          items: [
            'macOS : ollama.com から .dmg をダウンロードするか、`brew install ollama` を実行 - その後 `ollama run llama3.2` でチャット開始。',
            'Windows : ollama.com/download からインストーラーをダウンロード。Ollama はシステム トレイでバックグラウンド サービスとして実行。',
            'Linux : curl コマンド 1 つですべてをインストール - `curl -fsSL https://ollama.com/install.sh | sh`',
            '最小要件 : 3B モデルは 4 GB RAM、7B モデルは 8 GB RAM。開始時に GPU は不要。',
            'Ollama は `http://localhost:11434` で OpenAI 互換の REST API を公開 - コード変更なしで任意の OpenAI SDK アプリが使用できます。',
          ],
        },
        beforeYouInstall: {
          id: 'before-install',
          title: 'インストール前に：ローカルLLMはあなたのユースケースに適していますか？',
          content: [
            'Ollamaのインストールは5分かかりますが、GPU検出の問題、ドライバーの不一致、またはRAM制約に遭遇すると、最初のモデルを正しく実行するのに20～40分かかる可能性があります。',
            'ローカル推論があなたにとって正しい選択かどうか不確かな場合は、**[ローカルとクラウドの完全な権衡分析を比較してください](https://www.promptquorum.com/ja/local-llms/local-llm-limitations)** — クラウドAPIで開始する方が賢いかもしれません（5分で準備完了、トラブルシューティング不要）。多くのユーザーはインストール後にこれを発見します；今決めるのが良いでしょう。',
            'ローカルにコミットしたユーザーは下記をご覧ください。クラウドを最初に評価しているユーザーは、[完全な比較](https://www.promptquorum.com/ja/local-llms/local-llm-limitations)を参照してください。',
          ],
        },
        whatIsOllama: {
          id: 'what-is-ollama',
          title: 'Ollama とは何か、そしてなぜ使用するのか？',
          content: [
            '**Ollama は大規模言語モデルをローカルで実行するオープンソースの推論エンジンです。** モデル管理、llama.cpp 推論バックエンド、OpenAI 互換 REST API を単一の軽量アプリケーションに結合します。Python なし、conda 環境なし、CUDA セットアップなし。',
            'Ollama は Meta Llama 3.3、Microsoft Phi-3、Google Gemma 2、Mistral、Qwen3、および 100 以上の他のモデル用にワンコマンド ダウンロード機能を備えたキュレーションされたモデル ライブラリ（ollama.com/library）を保持しています。モデルは 1 回ダウンロードされてディスクにキャッシュされ、以降の実行は 5 秒以内に開始します。',
            'Ollama の代わりについては、[Local LLM ワンクリック インストーラー](/ja/local-llms/local-llm-one-click-installers) を参照してください。Ollama と LM Studio を比較するには、[LM Studio のインストール方法](/ja/local-llms/how-to-install-lm-studio) を参照してください。',
          ],
          blockquote: '一文で表すと、Ollama はオープンソース言語モデル（Mistral や Llama 3.3 など）をコンピュータにダウンロードしてローカルで実行するツールで、1 つのコマンドで実行できます。',
        },
        installMac: {
          id: 'install-on-macos',
          title: 'Ollama を macOS にインストールするにはどうすればよいですか？',
          content: '2 つの方法があります。インストーラー ダウンロードの方が速いです。Homebrew は brew でソフトウェアを管理する場合に適しています。',
          numberedItems: [
            'ollama.com/download にアクセスし、「macOS 用ダウンロード」をクリック。',
            'ダウンロードした Ollama.dmg ファイルを開き、Ollama をアプリケーション フォルダにドラッグ。',
            'アプリケーションから Ollama を起動。Llama アイコンがメニュー バーに表示 - Ollama がバックグラウンド サービスとして実行中。',
            'ターミナルを開いて最初のモデルを実行: `ollama run llama3.2`',
            'モデルがダウンロード（llama3.2:3b 用に約 2 GB）され、チャット プロンプトが表示。メッセージを入力して Enter キーを押します。',
          ],
          blockquote: '一文で表すと、Ollama は macOS でバックグラウンド サービスとして実行され、インストール・起動後、ローカル API が `http://localhost:11434` でモデル リクエストをリッスン。',
        },
        installMacBrew: {
          title: 'Ollama を Homebrew で macOS にインストールするにはどうすればよいですか？',
          codeBlock: 'brew install ollama\n\n# Ollama サービスを起動\nollama serve &\n\n# モデルをダウンロードして実行\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: 'Ollama を Windows にインストールするにはどうすればよいですか？',
          numberedItems: [
            'ollama.com/download にアクセスし、「Windows 用ダウンロード」をクリック。',
            'ダウンロードした OllamaSetup.exe インストーラーを実行。Ollama は %LOCALAPPDATA%\\Programs\\Ollama にインストール。',
            'Ollama が自動的に起動し、システム トレイ アイコンとして表示。',
            'PowerShell またはコマンド プロンプトを開いて実行: `ollama run llama3.2`',
            'モデルは初回実行時にダウンロード。以降の実行はキャッシュされたモデルを使用。',
          ],
        },
        installWindowsNote: {
          title: 'Windows で GPU サポートを有効にするにはどうすればよいですか？',
          content: 'Windows 上の Ollama は NVIDIA GPU（CUDA 11.3+）と AMD GPU（ROCm 6+）を自動的に検出して使用。NVIDIA RTX カードがある場合、Ollama はモデル レイヤーを VRAM に自動的にオフロード - 手動設定は不要。GPU が使用されていることを確認するには、`ollama run llama3.2` を実行してタスク マネージャー → GPU で確認。',
        },
        installLinux: {
          id: 'install-on-linux',
          title: 'Ollama を Linux にインストールするにはどうすればよいですか？',
          content: '1 つのコマンドで任意の Linux ディストリビューションに Ollama をインストール:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Linux で Ollama を systemd サービスとして実行するにはどうすればよいですか？',
          content: 'インストール スクリプトは自動的に Ollama を systemd サービスとして登録。管理方法は:',
          codeBlock: '# サービス ステータスを確認\nsystemctl status ollama\n\n# 開始 / 停止 / 再起動\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# ログを表示\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-ja.png',
          imageCaption: 'Linux で Ollama を systemd サービスとして実行する4ステップ: `curl -fsSL https://ollama.com/install.sh | sh` でインストール、`systemctl status ollama` でステータス確認、`start`/`stop`/`restart` で制御、`journalctl -u ollama -f` でログを追跡します。',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: 'Ollama で最初のモデルをダウンロードして実行するにはどうすればよいですか？',
          content: 'Ollama のインストール後、このコマンドを実行してモデルをダウンロードして起動:',
          codeBlock: '# モデルをダウンロード（~/.ollama/models に保存）\nollama pull llama3.2\n\n# 対話的に実行\nollama run llama3.2\n\n# または 1 ステップでダウンロードして実行\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          id: 'which-model-to-start-with',
          title: '最初に使用すべきモデルはどれか？',
          content: '初回実行では、これらの 3 つのモデルはさまざまなハードウェア プロファイルに対応:',
          rows: [
            { 'モデル': 'Llama 3.2 3B', 'ダウンロード サイズ': '~2 GB', '必要な RAM': '4 GB', '用途': '初回テスト - すべてのマシン' },
            { 'モデル': 'Llama 3.3 8B', 'ダウンロード サイズ': '~4.7 GB', '必要な RAM': '8 GB', '用途': 'ほとんどのノートパソコンで一般的に使用' },
            { 'モデル': 'phi4-mini', 'ダウンロード サイズ': '~2.3 GB', '必要な RAM': '4 GB', '用途': '高速応答、低 RAM' },
          ],
          columns: ['モデル', 'ダウンロード サイズ', '必要な RAM', '用途'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: 'Ollama が動作していることを確認するにはどうすればよいですか？',
          content: 'REST API を直接テストして、Ollama が実行され、アクセス可能であることを確認:',
          codeBlock: '# Ollama が実行中であることを確認\ncurl http://localhost:11434\n# 期待: "Ollama is running"\n\n# ダウンロードされたモデルをリスト\nollama list\n\n# API 経由でプロンプトを送信（OpenAI 互換）\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "2+2 は何ですか？",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          id: 'useful-ollama-commands',
          title: '最も便利な Ollama コマンドはどれですか？',
          rows: [
            { 'コマンド': 'ollama list', '機能': 'ダウンロードされたすべてのモデルとそのサイズを表示' },
            { 'コマンド': 'ollama pull <model>', '機能': 'モデルを実行せずにダウンロード' },
            { 'コマンド': 'ollama rm <model>', '機能': 'ディスクからモデルを削除' },
            { 'コマンド': 'ollama ps', '機能': '現在メモリに読み込まれているモデルを表示' },
            { 'コマンド': 'ollama show <model>', '機能': 'モデルの詳細を表示（パラメータ、テンプレート、ライセンス）' },
            { 'コマンド': 'ollama serve', '機能': 'Ollama サーバーを手動で開始（サービスとして実行されていない場合）' },
          ],
          columns: ['コマンド', '機能'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Ollama インストール時の一般的な問題をトラブルシューティングするにはどうすればよいですか？',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-ja.png',
          imageCaption: 'Ollama インストールでよくある5つのエラーのリファレンステーブル -- サービス未起動、2〜47GBのダウンロード停止、メモリ不足エラー、GPU未検出、4096トークンでのプロンプト切り捨て -- それぞれに対応する修正コマンド付き。',
          faqs: [
            {
              q: 'Ollama が「could not connect to ollama app, is it running?」（Ollama アプリに接続できません。実行していますか？）と表示',
              a: 'Ollama がバックグラウンド サービスとして実行されていません。macOS でアプリケーションから Ollama アプリを開く。Linux で、ターミナルで `systemctl start ollama` または `ollama serve` を実行。Windows でスタート メニューから Ollama を起動。',
            },
            {
              q: 'モデルのダウンロードが非常に遅い、またはスタック状態',
              a: 'モデル ダウンロードは大きい（2～47 GB）。ダウンロードが停止した場合、Ctrl+C を押して `ollama pull <model>` を再実行 - Ollama は部分ダウンロードを再開。より速いダウンロードには Wi-Fi ではなく有線接続を使用。',
            },
            {
              q: '「error: model requires more system memory」（エラー：モデルにはシステム メモリが必要）エラーが表示',
              a: 'モデルが利用可能な RAM に対して大きすぎます。より小さい量化を試す: デフォルトの Q4_K_M ではなく `ollama run llama3.2-instruct-q4_0`。または `llama3.2:3b` のような小さいモデルに切り替え。[初心者向けの最高のローカル LLM モデル](/ja/local-llms/best-beginner-local-llm-models) を参照して RAM に対応した推奨事項。',
            },
            {
              q: 'Ollama は実行していますが、GPU が使用されていません',
              a: 'Windows で NVIDIA ドライバーがバージョン 452.39 以上であることを確認。Linux で NVIDIA コンテナ ツールキットがインストールされていることを確認（`nvidia-smi` は GPU 情報を返す必要があります）。Ollama は VRAM が利用可能な場合、レイヤーを GPU に自動的にオフロード - モデルを開始した後 `ollama ps` を実行して GPU 使用率を確認。',
            },
            {
              q: 'Ollama モデル ファイルはどこに保存されていますか？',
              a: 'モデルは macOS と Linux 上の ~/.ollama/models に保存。Windows では既定のパスは C:\\Users\\<username>\\.ollama\\models。OLLAMA_MODELS 環境変数を設定してサービス開始前にストレージの場所を変更可能。',
            },
          ],
        },
        nextSteps: {
          title: 'Ollama インストール後は何をする必要がありますか？',
          content: 'Ollama が実行され始めたら、次のステップは [最初のローカル LLM を実行](/ja/local-llms/run-first-local-llm) してプロンプト作成、コンテキスト長、および予想されるローカル推論速度を理解。ハードウェアに最適なモデルを選択するには、[初心者向けの最高のローカル LLM モデル](/ja/local-llms/best-beginner-local-llm-models) を参照。ターミナルよりグラフィカルなチャット インターフェースを優先する場合、[LM Studio のインストール方法](/ja/local-llms/how-to-install-lm-studio) はデスクトップ アプリの代替をカバー。',
        },
        regionalContext: {
          id: 'regional-context',
          title: '地域別デプロイメントとコンプライアンス背景',
          content: [
            '**日本 / METI**: 日本 METI AI ガバナンス ガイドラインでは AI 推論が発生する場所の文書化を要求。組織は、特に金融サービス、医療、製造におけるデータ所在地ルール遵守のため Ollama をオンサイトで展開可能。Ollama ローカル展開は APPI（個人情報保護方針法）要件に合致するプライバシー保全アプローチとして認識。',
            '**EU / GDPR**: Ollama をオンサイト で実行することは個人データが組織のインフラストラクチャを離れないことを意味。GDPR 記事 5（データ最小化）は推論がマシン上で発生するため既定で満たされます。ドイツおよびフランスのデータ保護機関は従業員またはカスタマー データ処理のためローカル LLM デプロイメントを推奨。Ollama を `localhost` にバインド（既定値）は外部ネットワーク アクセスを保証しません。',
            '**中国 / CAC**: 中国のサイバー空間管理局の生成 AI サービス暫定措置（2023）は中国ユーザーに提供される AI サービスを規制。オンサイト で完全に実行される Ollama ローカル デプロイメントは CAC プロバイダー定義外であり、機密データを処理するエンタープライズ使用ケースのコンプライアンス負担を大幅に低減。',
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            '[Ollama 公式ドキュメント](https://ollama.com) - インストール ガイドと API ドキュメント',
            '[Ollama GitHub リポジトリ](https://github.com/ollama/ollama) - ソース コード、問題、およびリリース ノート',
            '[Ollama モデル ライブラリ](https://ollama.com/library) - 利用可能なモデルの完全なリストとダウンロード リンク',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Ollama インストール時の一般的な間違いとは？',
          items: [
            'Ollama がバックグラウンド サービスとして実行されていることを確認せずに、API が応答すると予想。macOS では メニュー バーに Llama アイコンが表示されることを確認。Linux で `systemctl status ollama` を実行。Windows でシステム トレイを確認。',
            '最初にメモリ要件を確認せずに、利用可能な RAM より大きいモデルを実行しようとする。7B モデルが Q4 量化には約 4～5 GB VRAM が必要。モデル ファイル サイズに 1.2 を常に乗じて必要な RAM を推定。',
            'GPU 検出を無視 - Ollama は NVIDIA と AMD をサポート但し最新のドライバーが必要。Windows で NVIDIA ドライバー バージョン 452.39+ を `nvidia-smi` で確認。Linux で NVIDIA コンテナ ツールキットがインストールされていることを確認。',
            'VRAM（GPU メモリ）とシステム RAM を混同。Ollama は CPU で実行でき但し GPU 加速が 5～10 倍高速。離散 GPU があるが推論が遅い場合、Ollama は GPU ドライバーが不足または時代遅れのため CPU にフォール バック。',
            'モデル ダウンロードがキャッシュされていることを理解していない。初回実行時 `ollama pull llama3.2` は 2 GB ダウンロードに 5～10 分。以降の実行はキャッシュされたモデルを使用して 5 秒以内に開始。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[ローカルLLM開発スタック](/ja/local-llms/local-llm-developer-stack) - 完全な開発環境構築：CLI → APIサーバー → 本番マルチGPU。',
            '[ローカル LLM とは何ですか？](/ja/local-llms/what-are-local-llms) - 定義とコア コンセプト',
            '[最初のローカル LLM を実行](/ja/local-llms/run-first-local-llm) - インストール後の次のステップ',
            '[初心者向けの最高のローカル LLM モデル](/ja/local-llms/best-beginner-local-llm-models) - ハードウェアごとのモデル推奨',
            '[Local LLM ワンクリック インストーラー](/ja/local-llms/local-llm-one-click-installers) - Ollama への代替ツール',
            '[LM Studio のインストール方法](/ja/local-llms/how-to-install-lm-studio) - 初心者向けの GUI 代替',
            '[How to Install LM Studio](/ja/local-llms/how-to-install-lm-studio) - CLI vs GUI アプローチの詳細比較',
            '[Mac 2026 での MLX vs Ollama vs llama.cpp](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) - Apple Silicon フレームワーク比較：速度、セットアップ時間、エコシステムのトレードオフ。',
          '[ローカルLLMモデル更新情報2026](/ja/local-llms/local-llm-model-updates-2026) -- 今年Ollamaにリリースされた主要なオープンウェイトモデルの完全タイムライン。',
          ],
        },
        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'Ollama は無料ですか？',
              a: 'はい、Ollama は MIT ライセンス下で無料かつオープンソース。使用制限、API キー不要、すべての推論はマシンでローカルに実行。',
            },
            {
              q: 'Ollama は Windows で動作しますか？',
              a: 'はい。Ollama は 2024 年以降、安定したネイティブ Windows インストーラーを持つ (2026 年にパフォーマンス改善)。ollama.com からダウンロード。Windows で NVIDIA GPU を CUDA 経由で、AMD GPU を ROCm 経由でサポート。',
            },
            {
              q: 'Ollama を実行するのに必要な RAM はどれくらいですか？',
              a: 'Q4 量化の 3B～7B モデルに最小 8 GB RAM。16 GB RAM は 7B モデルを快適に処理、13B モデルを Q4 で。CPU のみの 34B モデルには 32 GB+ RAM をお勧め。',
            },
            {
              q: 'Ollama を最新バージョンに更新するにはどうすればよいですか？',
              a: 'macOS では Ollama は自動更新。Windows では ollama.com から最新インストーラーをダウンロードして実行。Linux ではインストール スクリプトを再実行: curl -fsSL https://ollama.com/install.sh | sh',
            },
            {
              q: 'コード変更なしで OpenAI SDK 経由で Ollama を使用できますか？',
              a: 'はい。OpenAI SDK で base_url を http://localhost:11434/v1 に設定し、任意の文字列を API キーとして渡す。Ollama の REST API は完全に OpenAI 互換なので、GPT または Claude 向けに記述されたアプリケーションはローカル モデルを使用できます。',
            },
            {
              q: 'Ollama 推論が遅い（5 トークン/秒未満）のはなぜですか？',
              a: 'モデルは GPU ではなく CPU で実行可能。ollama ps でモデルが読み込まれていることを確認。GPU 使用率が 0% の場合、GPU ドライバーがインストール・最新化されていることを確認。NVIDIA では nvidia-smi が GPU を表示すべき。AMD では rocm-smi。Mac では Metal GPU 加速が Apple Silicon で自動。',
            },
            {
              q: 'Ollama は複数のモデルを同時に実行できますか？',
              a: 'Ollama はプロセスあたり一度に 1 つのモデルを実行。ただし、複数の Ollama インスタンスを異なるポート（例：OLLAMA_HOST=localhost:11434 および OLLAMA_HOST=localhost:11435）で実行し、複数のモデルを並列で提供可能。これには さらなる RAM が必要。',
            },
            {
              q: 'ollama pull と ollama run の違いは？',
              a: 'ollama pull は Ollama ライブラリからモデルをダウンロード、メモリに読み込まず。ollama run はモデルをダウンロード（キャッシュされていない場合）し、即座にチャット セッション開始。API 経由でチャット インターフェースなしにモデルを使用するには、最初に pull してから API をクエリ。',
            },
            {
              q: 'Ollama を使用したローカル LLM は個人情報保護方針法（APPI）準拠ですか？',
              a: 'すべてではありませんが、一部です。ローカル LLM は データをローカルに処理し但し APPI 準拠には さらに: ディスク暗号化、アクセス制御、処理記録、および該当する場合は業務委託契約が必要。Ollama によるローカル処理は重要なステップ但し APPI 準拠の完全な証拠ではなく、データ保護責任者（DPO）に相談。',
            },
            {
              q: '日本の大企業で Ollama を本番環境で使用できますか？',
              a: 'はい。多くの日本企業は内部ドキュメント処理、コード レビュー、データ分析のため Ollama をローカルで使用。重要: Ollama を localhost にバインド（既定値）、機密データ用にディスク暗号化を有効化、コンプライアンス要件を確認（特にカスタマー データ）。これらの対策により、Ollama はクラウド依存なしに組織内で AI を利用する費用効率的な方法。',
            },
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '2026 年に Ollama をインストール - 完全ガイド',
        'description': 'Ollama は macOS、Windows、Linux に 2 分以内にインストールされます。最初のモデルを実行するには 1 つのコマンドが必要です - ここはステップバイステップのガイドです。',
        'url': 'https://www.promptquorum.com/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Beginner',
        'keywords': ['Ollama インストール', 'Ollama をインストール', 'Ollama macOS', 'Ollama Windows', 'Ollama Linux', 'ローカル LLM セットアップ', 'llama.cpp', 'OpenAI 互換 API'],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen 3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral' },
          { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' }
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', 'h2', '.key-takeaways'] }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '2026 年に Ollama をインストールする方法',
        'description': 'macOS、Windows、Linux に Ollama をインストールするためのステップバイステップの指示。',
        'step': [
          { '@type': 'HowToStep', 'name': 'Ollama をダウンロード', 'text': 'ollama.com にアクセスし、OS（macOS アプリ、Windows インストーラー、または Linux curl コマンド）用のインストーラーをダウンロード。' },
          { '@type': 'HowToStep', 'name': 'Ollama をインストール', 'text': 'macOS/Windows インストーラーを実行、または Linux では実行: curl -fsSL https://ollama.com/install.sh | sh' },
          { '@type': 'HowToStep', 'name': '最初のモデルをダウンロード', 'text': 'ターミナルで実行: ollama pull llama3.2:3b（8 GB RAM）または ollama pull qwen2.5:7b（16 GB RAM）。' },
          { '@type': 'HowToStep', 'name': 'モデルを実行', 'text': 'チャット開始: ollama run llama3.2:3b' },
          { '@type': 'HowToStep', 'name': 'インストールを確認', 'text': 'REST API をテスト: curl http://localhost:11434。予想される応答: "Ollama is running"' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Ollama は無料ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、Ollama は MIT ライセンス下で無料かつオープンソース。使用制限、API キー不要、すべての推論はマシンでローカルに実行。' } },
          { '@type': 'Question', name: 'Ollama は Windows で動作しますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Ollama は 2024 年以降、安定したネイティブ Windows インストーラーを持つ (2026 年にパフォーマンス改善)。ollama.com からダウンロード。Windows で NVIDIA GPU を CUDA 経由で、AMD GPU を ROCm 経由でサポート。' } },
          { '@type': 'Question', name: 'Ollama を実行するのに必要な RAM はどれくらいですか？', acceptedAnswer: { '@type': 'Answer', text: 'Q4 量化の 3B～7B モデルに最小 8 GB RAM。16 GB RAM は 7B モデルを快適に処理、13B モデルを Q4 で。CPU のみの 34B モデルには 32 GB+ RAM をお勧め。' } },
          { '@type': 'Question', name: 'Ollama を最新バージョンに更新するにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'macOS では Ollama は自動更新。Windows では ollama.com から最新インストーラーをダウンロードして実行。Linux ではインストール スクリプトを再実行: curl -fsSL https://ollama.com/install.sh | sh' } },
          { '@type': 'Question', name: 'コード変更なしで OpenAI SDK 経由で Ollama を使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。OpenAI SDK で base_url を http://localhost:11434/v1 に設定し、任意の文字列を API キーとして渡す。Ollama の REST API は完全に OpenAI 互換なので、GPT または Claude 向けに記述されたアプリケーションはローカル モデルを使用できます。' } },
          { '@type': 'Question', name: 'Ollama 推論が遅い（5 トークン/秒未満）のはなぜですか？', acceptedAnswer: { '@type': 'Answer', text: 'モデルは GPU ではなく CPU で実行可能。ollama ps でモデルが読み込まれていることを確認。GPU 使用率が 0% の場合、GPU ドライバーがインストール・最新化されていることを確認。NVIDIA では nvidia-smi が GPU を表示すべき。AMD では rocm-smi。Mac では Metal GPU 加速が Apple Silicon で自動。' } },
          { '@type': 'Question', name: 'Ollama は複数のモデルを同時に実行できますか？', acceptedAnswer: { '@type': 'Answer', text: 'Ollama はプロセスあたり一度に 1 つのモデルを実行。ただし、複数の Ollama インスタンスを異なるポート（例：OLLAMA_HOST=localhost:11434 および OLLAMA_HOST=localhost:11435）で実行し、複数のモデルを並列で提供可能。これには さらなる RAM が必要。' } },
          { '@type': 'Question', name: 'ollama pull と ollama run の違いは？', acceptedAnswer: { '@type': 'Answer', text: 'ollama pull は Ollama ライブラリからモデルをダウンロード、メモリに読み込まず。ollama run はモデルをダウンロード（キャッシュされていない場合）し、即座にチャット セッション開始。API 経由でチャット インターフェースなしにモデルを使用するには、最初に pull してから API をクエリ。' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Ollama のインストール方法：macOS、Windows、Linux の完全なセットアップガイド',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'macOS : ollama.com から .dmg をダウンロードするか、`brew install ollama` を実行 - その後 `ollama run llama3.2` でチャット開始。' },
          { '@type': 'ListItem', position: 2, name: 'Windows : ollama.com/download からインストーラーをダウンロード。Ollama はシステム トレイでバックグラウンド サービスとして実行。' },
          { '@type': 'ListItem', position: 3, name: 'Linux : curl コマンド 1 つですべてをインストール - `curl -fsSL https://ollama.com/install.sh | sh`' },
          { '@type': 'ListItem', position: 4, name: '最小要件 : 3B モデルは 4 GB RAM、7B モデルは 8 GB RAM。開始時に GPU は不要。' },
          { '@type': 'ListItem', position: 5, name: 'Ollama は `http://localhost:11434` で OpenAI 互換の REST API を公開 - コード変更なしで任意の OpenAI SDK アプリが使用できます。' },
        ],
      },
    },
    zh: {
      theme: '入门',
      title: '如何安装 Ollama：macOS、Windows 和 Linux 完整设置指南',
      seoTitle: '安装 Ollama: macOS、Windows、Linux 指南 (2026)',
      intro: 'Ollama 是一个轻量级推理引擎，使用单一命令在本地运行大型语言模型。安装 2 分钟后，`ollama pull llama3.2:3b` 下载 2 GB 模型，`ollama run llama3.2` 打开聊天界面。Ollama 将模型管理、llama.cpp 推理后端和 OpenAI 兼容的 REST API 整合到 `localhost:11434` 的单一应用程序中，无需 Python 环境、配置文件和 GPU。截至 2026 年 4 月，Ollama 支持 200 多个模型，包括 Meta Llama 3.2、Qwen3、Mistral 和 DeepSeek，并将其 API 公开给任何 OpenAI SDK，无需代码修改。',
      metaDescription: '在 2 分钟内安装 Ollama。一条命令运行第一个模型----完整分步指南。',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-zh.png',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '阅读约8分钟',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '什么是 Ollama？', anchor: '#what-is-ollama' },
        { label: '在 macOS 上安装', anchor: '#install-on-macos' },
        { label: '在 Windows 上安装', anchor: '#install-on-windows' },
        { label: '在 Linux 上安装', anchor: '#install-on-linux' },
        { label: '下载并运行第一个模型', anchor: '#pull-and-run-your-first-model' },
        { label: '从哪个模型开始？', anchor: '#which-model-to-start-with' },
        { label: '验证 Ollama 正常工作', anchor: '#verify-ollama-is-working' },
        { label: '有用的 Ollama 命令', anchor: '#useful-ollama-commands' },
        { label: '故障排除', anchor: '#troubleshooting' },
        { label: '地区背景', anchor: '#regional-context' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '推荐阅读', anchor: '#related-reading' },
        { label: '常见问题', anchor: '#faq' },
        { label: '来源', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '核心要点',
          isTldr: true,
          items: [
            'macOS：从 ollama.com 下载 .dmg，或运行 `brew install ollama` -- 然后 `ollama run llama3.2` 开始聊天。',
            'Windows：从 ollama.com/download 下载安装程序。Ollama 作为系统托盘的后台服务运行。',
            'Linux：一个 curl 命令安装一切 -- `curl -fsSL https://ollama.com/install.sh | sh`',
            '最低要求：3B 模型需要 4 GB RAM，7B 模型需要 8 GB RAM。不需要 GPU 即可开始。',
            'Ollama 在 `http://localhost:11434` 公开 OpenAI 兼容的 REST API -- 任何 OpenAI SDK 应用都可以无代码修改地使用它。',
          ],
        },
        beforeYouInstall: {
          id: 'before-install',
          title: '安装前：本地LLM是否适合您的用例？',
          content: [
            'Ollama安装需要5分钟，但如果遇到GPU检测问题、驱动程序不匹配或RAM限制，第一个模型正常运行可能需要20～40分钟。',
            '如果您不确定本地推理是否是正确的选择，**[先比较本地和云的完整权衡分析](https://www.promptquorum.com/zh/local-llms/local-llm-limitations)** — 您可能会发现使用云API开始更聪明（5分钟准备就绪，无需故障排除）。许多用户在安装后发现这一点；现在决定更好。',
            '对于致力于本地的用户，请继续下面。对于首先评估云的用户，[查看完整比较](https://www.promptquorum.com/zh/local-llms/local-llm-limitations)。',
          ],
        },
        whatIsOllama: {
          id: 'what-is-ollama',
          title: '什么是 Ollama，为什么使用它？',
          content: [
            '**Ollama 是一个开源推理引擎，在本地运行大型语言模型。** 它将模型管理、llama.cpp 推理后端和 OpenAI 兼容的 REST API 整合到一个轻量级应用程序中。无需 Python、无需 conda 环境、无需 CUDA 设置。',
            'Ollama 维护一个精选的模型库（ollama.com/library），提供 Meta Llama 3.3、Microsoft Phi-3、Google Gemma 2、Mistral、Qwen3 等 100 多个模型的一键下载。模型下载一次并缓存在磁盘上 -- 后续运行在 5 秒内启动。',
            '有关 Ollama 的替代品，请参阅 [Local LLM 一键安装程序](/zh/local-llms/local-llm-one-click-installers)。要比较 Ollama 和 LM Studio，请参阅 [如何安装 LM Studio](/zh/local-llms/how-to-install-lm-studio)。',
          ],
          blockquote: '一句话来说，Ollama 是一个工具，用于在计算机上下载和本地运行开源语言模型（如 Mistral 或 Llama 3.3），只需一个命令。',
        },
        installMac: {
          id: 'install-on-macos',
          title: '如何在 macOS 上安装 Ollama？',
          content: '有两种方法。安装程序下载更快；如果使用 brew 管理软件，Homebrew 更好。',
          numberedItems: [
            '访问 ollama.com/download 并点击"macOS 下载"。',
            '打开下载的 Ollama.dmg 文件并将 Ollama 拖到应用程序文件夹。',
            '从应用程序启动 Ollama。菜单栏中出现 llama 图标 -- Ollama 现在作为后台服务运行。',
            '打开终端并运行第一个模型：`ollama run llama3.2`',
            '模型被下载（llama3.2:3b 约 2 GB）和聊天提示出现。输入消息并按 Enter。',
          ],
          blockquote: '一句话来说，Ollama 在 macOS 上作为后台服务运行 -- 安装和启动后，本地 API 在 `http://localhost:11434` 监听模型请求。',
        },
        installMacBrew: {
          title: '如何使用 Homebrew 在 macOS 上安装 Ollama？',
          codeBlock: 'brew install ollama\n\n# 启动 Ollama 服务\nollama serve &\n\n# 拉取并运行模型\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: '如何在 Windows 上安装 Ollama？',
          numberedItems: [
            '访问 ollama.com/download 并点击"Windows 下载"。',
            '运行下载的 OllamaSetup.exe 安装程序。Ollama 安装到 %LOCALAPPDATA%\\Programs\\Ollama。',
            'Ollama 自动启动并显示为系统托盘图标。',
            '打开 PowerShell 或命令提示符并运行：`ollama run llama3.2`',
            '模型在首次运行时下载。后续运行使用缓存的模型。',
          ],
        },
        installWindowsNote: {
          title: '如何在 Windows 上启用 GPU 支持？',
          content: 'Windows 上的 Ollama 自动检测并使用 NVIDIA GPU（CUDA 11.3+）和 AMD GPU（ROCm 6+）。如果有 NVIDIA RTX 卡，Ollama 将自动将模型层卸载到 VRAM -- 无需手动配置。要验证 GPU 是否被使用，运行 `ollama run llama3.2` 并检查任务管理器 → GPU 的活动。',
        },
        installLinux: {
          id: 'install-on-linux',
          title: '如何在 Linux 上安装 Ollama？',
          content: '一个命令在任何 Linux 发行版上安装 Ollama：',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: '如何在 Linux 上以 systemd 服务运行 Ollama？',
          content: '安装脚本自动将 Ollama 注册为 systemd 服务。要管理它：',
          codeBlock: '# 检查服务状态\nsystemctl status ollama\n\n# 启动 / 停止 / 重启\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# 查看日志\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-zh.png',
          imageCaption: '在 Linux 上将 Ollama 作为 systemd 服务运行的四步流程：使用 `curl -fsSL https://ollama.com/install.sh | sh` 安装，用 `systemctl status ollama` 检查状态，通过 `start`/`stop`/`restart` 控制，并用 `journalctl -u ollama -f` 查看实时日志。',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: '如何在 Ollama 中下载并运行第一个模型？',
          content: 'Ollama 安装后，运行此命令下载并启动模型：',
          codeBlock: '# 拉取模型（保存到 ~/.ollama/models）\nollama pull llama3.2\n\n# 以交互方式运行\nollama run llama3.2\n\n# 或在一步中拉取并运行\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          id: 'which-model-to-start-with',
          title: '应该从哪个模型开始？',
          content: '对于初次运行，这三个模型涵盖不同的硬件配置：',
          rows: [
            { '模型': 'Llama 3.2 3B', '下载大小': '~2 GB', '所需 RAM': '4 GB', '最适合': '初次测试 -- 任何机器' },
            { '模型': 'Llama 3.3 8B', '下载大小': '~4.7 GB', '所需 RAM': '8 GB', '最适合': '大多数笔记本电脑的一般使用' },
            { '模型': 'phi4-mini', '下载大小': '~2.3 GB', '所需 RAM': '4 GB', '最适合': '快速响应，低 RAM' },
          ],
          columns: ['模型', '下载大小', '所需 RAM', '最适合'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: '如何验证 Ollama 正常工作？',
          content: '直接测试 REST API 以确认 Ollama 正在运行并可访问：',
          codeBlock: '# 检查 Ollama 是否运行\ncurl http://localhost:11434\n# 预期："Ollama is running"\n\n# 列出下载的模型\nollama list\n\n# 通过 API 发送提示（OpenAI 兼容）\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "2+2 是多少？",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          id: 'useful-ollama-commands',
          title: '最有用的 Ollama 命令是什么？',
          rows: [
            { '命令': 'ollama list', '功能': '显示所有下载的模型及其大小' },
            { '命令': 'ollama pull <model>', '功能': '下载模型而不运行它' },
            { '命令': 'ollama rm <model>', '功能': '从磁盘删除模型' },
            { '命令': 'ollama ps', '功能': '显示当前在内存中加载的模型' },
            { '命令': 'ollama show <model>', '功能': '显示模型详细信息（参数、模板、许可证）' },
            { '命令': 'ollama serve', '功能': '手动启动 Ollama 服务器（如果不作为服务运行）' },
          ],
          columns: ['命令', '功能'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: '如何解决 Ollama 安装中的常见问题？',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-zh.png',
          imageCaption: '5 个常见 Ollama 安装错误参考表 -- 服务未运行、2-47GB 下载停滞、内存不足错误、GPU 未检测到、提示词在 4096 tokens 处被截断 -- 每项均附带修复命令。',
          faqs: [
            {
              q: 'Ollama 说"could not connect to ollama app, is it running?"（无法连接到 ollama 应用程序，是否正在运行？）',
              a: 'Ollama 不作为后台服务运行。在 macOS 上：从应用程序打开 Ollama 应用程序。在 Linux 上：在终端中运行 `systemctl start ollama` 或 `ollama serve`。在 Windows 上：从开始菜单启动 Ollama。',
            },
            {
              q: '模型下载非常缓慢或卡住',
              a: '模型下载很大（2-47 GB）。如果下载卡住，按 Ctrl+C 并重新运行 `ollama pull <model>` -- Ollama 将恢复部分下载。为了更快的下载，使用有线连接而不是 Wi-Fi。',
            },
            {
              q: '我收到"error: model requires more system memory"（错误：模型需要更多系统内存）',
              a: '该模型对于可用 RAM 来说太大。尝试更小的量化：使用 `ollama run llama3.2-instruct-q4_0` 而不是默认的 Q4_K_M。或切换到 `llama3.2:3b` 等较小的模型。请参阅[初学者最佳本地 LLM 模型](/zh/local-llms/best-beginner-local-llm-models)获取 RAM 匹配的建议。',
            },
            {
              q: 'Ollama 正在运行，但我的 GPU 未被使用',
              a: '在 Windows 上，验证 NVIDIA 驱动程序版本为 452.39 或更高。在 Linux 上，确认安装了 NVIDIA 容器工具包（`nvidia-smi` 应该返回 GPU 信息）。当 VRAM 可用时，Ollama 自动将层卸载到 GPU -- 启动模型后运行 `ollama ps` 以查看 GPU 利用率。',
            },
            {
              q: 'Ollama 模型文件存储在哪里？',
              a: '模型在 macOS 和 Linux 上存储在 ~/.ollama/models。在 Windows 上，默认路径是 C:\\Users\\<username>\\.ollama\\models。在启动服务之前，可以通过设置 OLLAMA_MODELS 环境变量来更改存储位置。',
            },
          ],
        },
        nextSteps: {
          title: 'Ollama 安装后应该做什么？',
          content: 'Ollama 运行后，下一步是[运行您的第一个本地 LLM](/zh/local-llms/run-first-local-llm)以了解提示、上下文长度和本地推理速度的预期。要为您的硬件选择最佳模型，请参阅[初学者最佳本地 LLM 模型](/zh/local-llms/best-beginner-local-llm-models)。如果您更喜欢图形聊天界面而不是终端，[如何安装 LM Studio](/zh/local-llms/how-to-install-lm-studio)涵盖了桌面应用程序的替代方案。',
        },
        regionalContext: {
          id: 'regional-context',
          title: '地区部署和合规背景',
          content: [
            '**中国 / 网信办**: 中国网络空间管理局的《生成式人工智能服务管理暂行办法》（2023）对提供给中国用户的 AI 服务进行监管。完全在内部运行的本地 Ollama 部署不在 CAC 提供商定义范围内，大大减少了处理敏感数据的企业用例的合规负担。',
            '**欧盟 / GDPR**: Ollama 在本地运行意味着个人数据永远不会离开组织的基础设施。GDPR 第 5 条（数据最小化）默认满足，因为推理在您的机器上进行。德国和法国数据保护机构推荐本地 LLM 部署以处理员工或客户数据。将 Ollama 绑定到 `localhost`（默认值）确保无外部网络访问。',
            '**日本 / METI**: 日本 METI AI 治理指南要求记录 AI 推理发生的地点。组织可以在本地部署 Ollama 以遵守数据驻留规则，特别是在金融服务、医疗保健和制造业中。本地 Ollama 部署被视为与 APPI（个人信息保护法）要求一致的隐私保护方法。',
          ],
        },
        sources: {
          id: 'sources',
          title: '来源',
          items: [
            '[Ollama 官方文档](https://ollama.com) - 安装指南和 API 文档',
            '[Ollama GitHub 存储库](https://github.com/ollama/ollama) - 源代码、问题和发行说明',
            '[Ollama 模型库](https://ollama.com/library) - 可用模型的完整列表和下载链接',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Ollama 安装中的常见错误是什么？',
          items: [
            '未检查 Ollama 是否作为后台服务运行即期望 API 响应。在 macOS 上，验证菜单栏中出现 llama 图标。在 Linux 上，运行 `systemctl status ollama`。在 Windows 上，检查系统托盘。',
            '未首先检查内存要求就尝试运行大于可用 RAM 的模型。7B 模型的 Q4 量化需要约 4-5 GB VRAM。始终将模型文件大小乘以 1.2 以估计所需的 RAM。',
            '忽略 GPU 检测 -- Ollama 支持 NVIDIA 和 AMD 但需要最新的驱动程序。在 Windows 上，使用 `nvidia-smi` 验证 NVIDIA 驱动程序版本 452.39+。在 Linux 上，确认安装了 NVIDIA 容器工具包。',
            '将 VRAM（GPU 内存）与系统 RAM 混淆。Ollama 可以在 CPU 上运行，但 GPU 加速速度快 5-10 倍。如果有独立 GPU 但推理缓慢，Ollama 可能因为 GPU 驱动程序丢失或过时而回退到 CPU。',
            '不理解模型下载被缓存。首次运行时，`ollama pull llama3.2` 花费 5-10 分钟下载 2 GB。后续运行使用缓存的模型并在 5 秒内启动。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '推荐阅读',
          items: [
            '[本地LLM开发栈](/zh/local-llms/local-llm-developer-stack) - 构建完整开发环境：CLI → API服务器 → 生产多GPU。',
            '[什么是本地 LLM？](/zh/local-llms/what-are-local-llms) - 定义和核心概念',
            '[运行您的第一个本地 LLM](/zh/local-llms/run-first-local-llm) - 安装后的下一步',
            '[初学者最佳本地 LLM 模型](/zh/local-llms/best-beginner-local-llm-models) - 按硬件推荐模型',
            '[Local LLM 一键安装程序](/zh/local-llms/local-llm-one-click-installers) - Ollama 的替代工具',
            '[如何安装 LM Studio](/zh/local-llms/how-to-install-lm-studio) - 初学者 GUI 替代方案',
            '[Ollama 与 LM Studio 的对比](/zh/local-llms/how-to-install-lm-studio) - CLI 与 GUI 方法的详细比较',
            '[2026年Mac上的MLX对比Ollama对比llama.cpp](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) - Apple Silicon框架比较：速度、设置时间和生态系统权衡。',
          '[本地LLM模型更新2026](/zh/local-llms/local-llm-model-updates-2026) -- 今年为Ollama发布的所有主要开权重模型的完整时间线。',
          ],
        },
        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'Ollama 是免费的吗？',
              a: '是的，Ollama 在 MIT 许可证下免费且开源。没有使用限制、不需要 API 密钥，所有推理都在您的机器上本地运行。',
            },
            {
              q: 'Ollama 可以在 Windows 上使用吗？',
              a: '是的。Ollama 自 2024 年以来有稳定的原生 Windows 安装程序 (2026 年性能改进)。从 ollama.com 下载。在 Windows 上通过 CUDA 支持 NVIDIA GPU，通过 ROCm 支持 AMD GPU。',
            },
            {
              q: '运行 Ollama 需要多少 RAM？',
              a: '3B-7B 模型的 Q4 量化至少需要 8 GB RAM。16 GB RAM 可舒适处理 7B 模型和 Q4 下的 13B 模型。建议 32 GB+ RAM 用于仅 CPU 运行的 34B 模型。',
            },
            {
              q: '如何将 Ollama 更新到最新版本？',
              a: '在 macOS 上，Ollama 自动更新。在 Windows 上，从 ollama.com 下载并运行最新安装程序。在 Linux 上，重新运行安装脚本：curl -fsSL https://ollama.com/install.sh | sh',
            },
            {
              q: '我可以在不修改代码的情况下通过 OpenAI SDK 使用 Ollama 吗？',
              a: '是的。在 OpenAI SDK 中将 base_url 设置为 http://localhost:11434/v1 并传递任何字符串作为 API 密钥。Ollama 的 REST API 完全与 OpenAI 兼容，因此为 GPT 或 Claude 编写的任何应用程序都可以使用您的本地模型。',
            },
            {
              q: '为什么我的 Ollama 推理很慢（5 tokens/秒以下）？',
              a: '该模型可能在 CPU 而非 GPU 上运行。使用 ollama ps 验证模型已加载。如果 GPU 利用率为 0%，检查 GPU 驱动程序是否已安装且最新。在 NVIDIA 上：nvidia-smi 应显示您的 GPU。在 AMD 上：rocm-smi。在 Mac 上：Apple Silicon 上自动使用 Metal GPU 加速。',
            },
            {
              q: 'Ollama 可以同时运行多个模型吗？',
              a: 'Ollama 每个进程一次只能运行一个模型。但是，您可以在不同端口上运行多个 Ollama 实例（例如 OLLAMA_HOST=localhost:11434 和 OLLAMA_HOST=localhost:11435）以并行提供多个模型。这需要更多 RAM。',
            },
            {
              q: 'ollama pull 和 ollama run 之间有什么区别？',
              a: 'ollama pull 从 Ollama 库下载模型而不将其加载到内存。ollama run 下载模型（如果未缓存）并立即启动聊天会话。要通过 API 使用模型而不使用聊天界面，首先 pull，然后查询 API。',
            },
            {
              q: '使用 Ollama 的本地 LLM 符合数据合规要求吗？',
              a: '不是自动的。本地 LLM 在本地处理数据，但合规性需要另外：磁盘加密、访问控制、处理记录和数据处理协议。本地 Ollama 处理是重要一步，但不是完整的合规证明。请咨询您的数据保护官员（DPO）以获得合规指导。',
            },
            {
              q: '我可以在中国企业中以生产方式使用 Ollama 吗？',
              a: '可以。许多中国企业在本地使用 Ollama 进行内部文档处理、代码审查和数据分析。重要：将 Ollama 绑定到 localhost（默认值），为敏感数据启用磁盘加密，并验证您的合规要求。通过这些措施，Ollama 是在组织内部使用 AI 的经济高效方式，无需云依赖。',
            },
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '2026 年安装 Ollama - 完整指南',
        'description': 'Ollama 在 macOS、Windows 或 Linux 上 2 分钟内安装。运行第一个模型只需要一个命令----这是分步指南。',
        'url': 'https://www.promptquorum.com/local-llms/how-to-install-ollama',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
        'proficiencyLevel': 'Beginner',
        'keywords': ['Ollama 安装', '安装 Ollama', 'Ollama macOS', 'Ollama Windows', 'Ollama Linux', '本地 LLM 设置', 'llama.cpp', 'OpenAI 兼容 API'],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen 3' },
          { '@type': 'SoftwareApplication', 'name': 'Mistral' },
          { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' }
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', 'h2', '.key-takeaways'] }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何 2026 年安装 Ollama',
        'description': '在 macOS、Windows 和 Linux 上安装 Ollama 的分步说明。',
        'step': [
          { '@type': 'HowToStep', 'name': '下载 Ollama', 'text': '访问 ollama.com 并为您的 OS（macOS 应用程序、Windows 安装程序或 Linux curl 命令）下载安装程序。' },
          { '@type': 'HowToStep', 'name': '安装 Ollama', 'text': '运行 macOS/Windows 安装程序，或在 Linux 上运行：curl -fsSL https://ollama.com/install.sh | sh' },
          { '@type': 'HowToStep', 'name': '下载第一个模型', 'text': '在终端中运行：ollama pull llama3.2:3b（8 GB RAM）或 ollama pull qwen2.5:7b（16 GB RAM）。' },
          { '@type': 'HowToStep', 'name': '运行模型', 'text': '启动聊天：ollama run llama3.2:3b' },
          { '@type': 'HowToStep', 'name': '验证安装', 'text': '测试 REST API：curl http://localhost:11434。预期的响应："Ollama is running"' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Ollama 是免费的吗？', acceptedAnswer: { '@type': 'Answer', text: '是的，Ollama 在 MIT 许可证下免费且开源。没有使用限制、不需要 API 密钥，所有推理都在您的机器上本地运行。' } },
          { '@type': 'Question', name: 'Ollama 可以在 Windows 上使用吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。Ollama 自 2024 年以来有稳定的原生 Windows 安装程序 (2026 年性能改进)。从 ollama.com 下载。在 Windows 上通过 CUDA 支持 NVIDIA GPU，通过 ROCm 支持 AMD GPU。' } },
          { '@type': 'Question', name: '运行 Ollama 需要多少 RAM？', acceptedAnswer: { '@type': 'Answer', text: '3B-7B 模型的 Q4 量化至少需要 8 GB RAM。16 GB RAM 可舒适处理 7B 模型和 Q4 下的 13B 模型。建议 32 GB+ RAM 用于仅 CPU 运行的 34B 模型。' } },
          { '@type': 'Question', name: '如何将 Ollama 更新到最新版本？', acceptedAnswer: { '@type': 'Answer', text: '在 macOS 上，Ollama 自动更新。在 Windows 上，从 ollama.com 下载并运行最新安装程序。在 Linux 上，重新运行安装脚本：curl -fsSL https://ollama.com/install.sh | sh' } },
          { '@type': 'Question', name: '我可以在不修改代码的情况下通过 OpenAI SDK 使用 Ollama 吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。在 OpenAI SDK 中将 base_url 设置为 http://localhost:11434/v1 并传递任何字符串作为 API 密钥。Ollama 的 REST API 完全与 OpenAI 兼容，因此为 GPT 或 Claude 编写的任何应用程序都可以使用您的本地模型。' } },
          { '@type': 'Question', name: '为什么我的 Ollama 推理很慢（5 tokens/秒以下）？', acceptedAnswer: { '@type': 'Answer', text: '该模型可能在 CPU 而非 GPU 上运行。使用 ollama ps 验证模型已加载。如果 GPU 利用率为 0%，检查 GPU 驱动程序是否已安装且最新。在 NVIDIA 上：nvidia-smi 应显示您的 GPU。在 AMD 上：rocm-smi。在 Mac 上：Apple Silicon 上自动使用 Metal GPU 加速。' } },
          { '@type': 'Question', name: 'Ollama 可以同时运行多个模型吗？', acceptedAnswer: { '@type': 'Answer', text: 'Ollama 每个进程一次只能运行一个模型。但是，您可以在不同端口上运行多个 Ollama 实例（例如 OLLAMA_HOST=localhost:11434 和 OLLAMA_HOST=localhost:11435）以并行提供多个模型。这需要更多 RAM。' } },
          { '@type': 'Question', name: 'ollama pull 和 ollama run 之间有什么区别？', acceptedAnswer: { '@type': 'Answer', text: 'ollama pull 从 Ollama 库下载模型而不将其加载到内存。ollama run 下载模型（如果未缓存）并立即启动聊天会话。要通过 API 使用模型而不使用聊天界面，首先 pull，然后查询 API。' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '如何安装 Ollama：macOS、Windows 和 Linux 完整设置指南',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '从 ollama.com 下载 .dmg，或运行 `brew install ollama` -- 然后 `ollama run llama3.2` 开始聊天。' },
          { '@type': 'ListItem', position: 2, name: '从 ollama.com/download 下载安装程序。Ollama 作为系统托盘的后台服务运行。' },
          { '@type': 'ListItem', position: 3, name: '一个 curl 命令安装一切 -- `curl -fsSL https://ollama.com/install.sh | sh`' },
          { '@type': 'ListItem', position: 4, name: '最低要求：3B 模型需要 4 GB RAM，7B 模型需要 8 GB RAM。不需要 GPU 即可开始。' },
          { '@type': 'ListItem', position: 5, name: 'Ollama 在 `http://localhost:11434` 公开 OpenAI 兼容的 REST API -- 任何 OpenAI SDK 应用都可以无代码修改地使用它。' },
        ],
      },
    },
  ko: {
      freshness_tier: 'annual',
      theme: '시작하기',
      title: 'Ollama 설치: macOS, Windows & Linux 2분 설치 가이드',
      seoTitle: 'Ollama 설치: macOS, Windows & Linux 2분 설치 가이드',
      intro: 'Ollama는 macOS, Windows, Linux에서 2분 이내에 설치할 수 있습니다. 설치 후 명령어 하나로 Ollama 라이브러리의 모든 모델을 다운로드하고 실행할 수 있습니다 -- Python 환경, 설정 파일, 시작을 위한 GPU가 필요하지 않습니다. 2026년 4월 기준으로 Ollama는 Meta Llama 3.3, Qwen3, Mistral을 포함한 200개 이상의 모델을 지원합니다.',
      metaDescription: '모든 OS에서 2분 만에 Ollama를 설치하세요: 다운로드 후 `ollama run llama3.2`를 실행하면 바로 대화를 시작할 수 있습니다. 초보자를 위한 문제 해결 포함 완전 설치 가이드 2026.',
      heroImage: '/images/how-to-install-ollama-linux-systemd-flow-hero-ko.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ollama는 macOS, Windows, Linux에서 2분 이내에 설치할 수 있습니다. 설치 후 명령어 하나로 Ollama 라이브러리의 모든 모델을 다운로드하고 실행할 수 있습니다 -- Python 환경, 설정 파일, 시작을 위한 GPU가 필요하지 않습니다.**',
      audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
      readTime: '8분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: 'Ollama',
      toc: [
        { label: '핵심 요점', anchor: '#key-takeaways' },
        { label: 'macOS에 설치', anchor: '#install-on-macos' },
        { label: 'Windows에 설치', anchor: '#install-on-windows' },
        { label: 'Linux에 설치', anchor: '#install-on-linux' },
        { label: '첫 번째 모델 다운로드 및 실행', anchor: '#pull-and-run-your-first-model' },
        { label: 'Ollama 작동 확인', anchor: '#verify-ollama-is-working' },
        { label: '유용한 Ollama 명령어', anchor: '#useful-ollama-commands' },
        { label: '문제 해결', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'macOS: ollama.com에서 .dmg를 다운로드하거나 `brew install ollama`를 실행한 후 -- `ollama run llama3.2`로 대화를 시작하십시오.',
            'Windows: ollama.com/download에서 설치 프로그램을 다운로드하십시오. Ollama는 시스템 트레이에서 백그라운드 서비스로 실행됩니다.',
            'Linux: 명령어 하나로 모든 것을 설치합니다 -- `curl -fsSL https://ollama.com/install.sh | sh`.',
            '최소 요구 사항: 3B 모델에는 4 GB RAM, 7B 모델에는 8 GB RAM. 시작하는 데 GPU는 필요하지 않습니다.',
            'Ollama는 `http://localhost:11434`에서 OpenAI 호환 REST API를 제공합니다 -- OpenAI SDK 앱이라면 코드 변경 없이 사용할 수 있습니다.',
            '👉 **설치 전에 로컬 실행이 귀하의 사용 사례에 적합한지 확인하십시오** — 클라우드가 로컬 추론보다 나은 경우는 [로컬 LLM vs 클라우드 API](/local-llms/local-llm-limitations)를 참조하십시오.',
          ],
        },
        beforeYouInstall: {
          id: 'before-you-install',
          title: '설치 전: 로컬 LLM이 귀하의 사용 사례에 적합합니까?',
          content: [
            'Ollama 설치는 5분이 걸리지만, GPU 감지 문제, 드라이버 불일치 또는 RAM 제약이 발생하면 첫 번째 모델을 제대로 실행하는 데 20~40분이 걸릴 수 있습니다.',
            '로컬 추론이 올바른 선택인지 확신하지 못하는 경우, **[로컬 vs 클라우드의 전체 트레이드오프를 먼저 비교하십시오](https://www.promptquorum.com/local-llms/local-llm-limitations)** — 클라우드 API(5분이면 준비 완료, 문제 해결 불필요)로 시작하는 것이 더 현명한 방법임을 알 수 있습니다. 많은 사용자가 설치 후에 이를 발견합니다. 지금 결정하는 것이 좋습니다.',
            '로컬을 선택한 사용자는 아래를 계속 읽으십시오. 먼저 클라우드를 평가하려는 사용자는 [전체 비교를 참조하십시오](https://www.promptquorum.com/local-llms/local-llm-limitations).',
          ],
        },
        whatIsOllama: {
          title: 'Ollama란 무엇이며 왜 사용합니까?',
          content: [
            '**Ollama는 대형 언어 모델을 로컬에서 실행하는 오픈 소스 추론 엔진입니다.** 모델 관리, llama.cpp 추론 백엔드, OpenAI 호환 REST API를 단일 경량 애플리케이션으로 패키징합니다. Python, conda 환경, CUDA 설정이 필요하지 않습니다.',
            'Ollama는 Meta Llama 3.3, Microsoft Phi-3, Google Gemma 2, Mistral, Qwen3 및 100개 이상의 다른 모델을 원클릭으로 다운로드할 수 있는 큐레이션된 모델 라이브러리(ollama.com/library)를 유지 관리합니다. 모델은 한 번 다운로드되어 디스크에 캐시됩니다 -- 이후 실행은 5초 이내에 시작됩니다.',
            'Ollama의 대안은 [로컬 LLM 원클릭 설치 프로그램](/local-llms/local-llm-one-click-installers)을 참조하십시오. Ollama와 LM Studio의 비교는 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)을 참조하십시오.',
          ],
        },
        installMac: {
          id: 'install-on-macos',
          title: 'macOS에서 Ollama를 어떻게 설치합니까?',
          content: '두 가지 방법이 있습니다. 설치 프로그램 다운로드가 더 빠르며, Homebrew는 brew로 소프트웨어를 관리하는 경우에 적합합니다.',
          numberedItems: [
            'ollama.com/download로 이동하여 "Download for macOS"를 클릭하십시오.',
            '다운로드한 Ollama.dmg 파일을 열고 Ollama를 응용 프로그램 폴더로 드래그하십시오.',
            '응용 프로그램에서 Ollama를 실행하십시오. 메뉴 바에 라마 아이콘이 표시됩니다 -- Ollama가 이제 백그라운드 서비스로 실행 중입니다.',
            '터미널을 열고 첫 번째 모델을 실행하십시오: `ollama run llama3.2`',
            '모델이 다운로드됩니다(llama3.2:3b의 경우 약 2 GB). 채팅 프롬프트가 표시됩니다. 메시지를 입력하고 Enter를 누르십시오.',
          ],
        },
        installMacBrew: {
          title: 'Homebrew로 macOS에 Ollama 설치',
          codeBlock: 'brew install ollama\n\n# Start the Ollama service\nollama serve &\n\n# Pull and run a model\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        installWindows: {
          id: 'install-on-windows',
          title: 'Windows에서 Ollama를 어떻게 설치합니까?',
          numberedItems: [
            'ollama.com/download로 이동하여 "Download for Windows"를 클릭하십시오.',
            '다운로드한 OllamaSetup.exe 설치 프로그램을 실행하십시오. Ollama는 %LOCALAPPDATA%\\Programs\\Ollama에 설치됩니다.',
            'Ollama가 자동으로 시작되어 시스템 트레이 아이콘으로 표시됩니다.',
            'PowerShell 또는 명령 프롬프트를 열고 실행하십시오: `ollama run llama3.2`',
            '첫 번째 실행 시 모델이 다운로드됩니다. 이후 실행은 캐시된 모델을 사용합니다.',
          ],
        },
        installWindowsNote: {
          title: 'Windows에서의 GPU 지원',
          content: 'Windows의 Ollama는 NVIDIA GPU(CUDA 11.3+)와 AMD GPU(ROCm 6+)를 자동으로 감지하여 사용합니다. NVIDIA RTX 카드가 있는 경우 Ollama가 자동으로 모델 레이어를 VRAM에 오프로드합니다 -- 수동 설정이 필요하지 않습니다. GPU가 사용되고 있는지 확인하려면 `ollama run llama3.2`를 실행한 후 작업 관리자 → GPU에서 활동을 확인하십시오.',
        },
        installLinux: {
          id: 'install-on-linux',
          title: 'Linux에서 Ollama를 어떻게 설치합니까?',
          content: '단일 명령어로 모든 Linux 배포판에 Ollama를 설치합니다:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Linux에서 systemd 서비스로 Ollama 실행',
          content: '설치 스크립트가 자동으로 Ollama를 systemd 서비스로 등록합니다. 관리 방법:',
          codeBlock: '# Check service status\nsystemctl status ollama\n\n# Start / stop / restart\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# View logs\njournalctl -u ollama -f',
          codeLanguage: 'bash',
          image: '/images/how-to-install-ollama-linux-systemd-flow-hero-ko.png',
          imageCaption: 'Linux에서 Ollama를 systemd 서비스로 실행하는 4단계 흐름: `curl -fsSL https://ollama.com/install.sh | sh`로 설치, `systemctl status ollama`로 상태 확인, `start`/`stop`/`restart`로 제어, `journalctl -u ollama -f`로 로그 실시간 확인.',
        },
        firstModel: {
          id: 'pull-and-run-your-first-model',
          title: 'Ollama에서 첫 번째 모델을 어떻게 다운로드하고 실행합니까?',
          content: 'Ollama를 설치한 후 이 명령어를 실행하여 모델을 다운로드하고 시작하십시오:',
          codeBlock: '# Pull a model (downloads to ~/.ollama/models)\nollama pull llama3.2\n\n# Run it interactively\nollama run llama3.2\n\n# Or pull and run in one step\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          title: '처음에 어떤 모델로 시작해야 합니까?',
          content: '첫 번째 실행을 위해 다양한 하드웨어 프로필을 다루는 세 가지 모델을 권장합니다:',
          rows: [
            { 'Model': 'Llama 3.2 3B', '다운로드 크기': '약 2 GB', '필요 RAM': '4 GB', '적합 용도': '첫 테스트 -- 모든 기기' },
            { 'Model': 'Llama 3.3 8B', '다운로드 크기': '약 4.7 GB', '필요 RAM': '8 GB', '적합 용도': '대부분의 노트북에서 일반 사용' },
            { 'Model': 'phi4-mini', '다운로드 크기': '약 2.3 GB', '필요 RAM': '4 GB', '적합 용도': '빠른 응답, 낮은 RAM' },
          ],
          columns: ['Model', '다운로드 크기', '필요 RAM', '적합 용도'],
        },
        verify: {
          id: 'verify-ollama-is-working',
          title: 'Ollama가 작동하는지 어떻게 확인합니까?',
          content: 'REST API를 직접 테스트하여 Ollama가 실행 중이고 접근 가능한지 확인하십시오:',
          codeBlock: '# Check Ollama is running\ncurl http://localhost:11434\n# Expected: "Ollama is running"\n\n# List downloaded models\nollama list\n\n# Send a prompt via API (OpenAI-compatible)\ncurl http://localhost:11434/api/generate -d \'{\n  "model": "llama3.2",\n  "prompt": "What is 2+2?",\n  "stream": false\n}\'',
          codeLanguage: 'bash',
        },
        commands: {
          title: '유용한 Ollama 명령어',
          rows: [
            { '명령어': 'ollama list', '기능': '다운로드된 모든 모델과 크기 표시' },
            { '명령어': 'ollama pull <model>', '기능': '실행하지 않고 모델 다운로드' },
            { '명령어': 'ollama rm <model>', '기능': '디스크에서 모델 삭제' },
            { '명령어': 'ollama ps', '기능': '현재 메모리에 로드된 모델 표시' },
            { '명령어': 'ollama show <model>', '기능': '모델 세부 정보 표시(파라미터, 템플릿, 라이선스)' },
            { '명령어': 'ollama serve', '기능': 'Ollama 서버 수동 시작(서비스로 실행되지 않는 경우)' },
          ],
          columns: ['명령어', '기능'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: '일반적인 Ollama 설치 문제 해결',
          image: '/images/how-to-install-ollama-troubleshooting-table-hero-ko.png',
          imageCaption: 'Ollama 설치 시 흔한 5가지 오류 참조표 -- 서비스 미실행, 2-47GB 다운로드 멈춤, 메모리 부족 오류, GPU 미감지, 4096 토큰에서 프롬프트 잘림 -- 각각의 해결 명령 포함.',
          faqs: [
            {
              q: 'Ollama에서 "could not connect to ollama app, is it running?"이라고 표시됩니다',
              a: 'Ollama가 백그라운드 서비스로 실행되고 있지 않습니다. macOS에서는 응용 프로그램에서 Ollama 앱을 여십시오. Linux에서는 `systemctl start ollama` 또는 터미널에서 `ollama serve`를 실행하십시오. Windows에서는 시작 메뉴에서 Ollama를 실행하십시오.',
            },
            {
              q: '모델 다운로드가 매우 느리거나 멈춥니다',
              a: '모델 다운로드 크기가 큽니다(2~47 GB). 다운로드가 멈추면 Ctrl+C를 누르고 `ollama pull <model>`을 다시 실행하십시오 -- Ollama가 부분 다운로드를 재개합니다. 더 빠른 다운로드를 위해 Wi-Fi 대신 유선 연결을 사용하십시오.',
            },
            {
              q: '모델 실행 시 "error: model requires more system memory"가 표시됩니다',
              a: '모델이 사용 가능한 RAM보다 큽니다. 더 작은 양자화를 시도하십시오: 기본 Q4_K_M 대신 `ollama run llama3.2-instruct-q4_0`을 사용하십시오. 또는 `llama3.2:3b`와 같은 더 작은 모델로 전환하십시오. RAM에 맞는 권장 사항은 [초보자를 위한 최고의 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models)을 참조하십시오.',
            },
            {
              q: 'Ollama가 실행 중인데 GPU가 사용되지 않습니다',
              a: 'Windows에서는 NVIDIA 드라이버 버전이 452.39 이상인지 확인하십시오. Linux에서는 NVIDIA 컨테이너 툴킷이 설치되어 있는지 확인하십시오(`nvidia-smi`가 GPU 정보를 반환해야 합니다). Ollama는 VRAM이 사용 가능할 때 자동으로 레이어를 GPU에 오프로드합니다 -- 모델을 시작한 후 `ollama ps`를 실행하여 GPU 사용률을 확인하십시오.',
            },
            {
              q: 'Ollama 모델 파일은 어디에 저장됩니까?',
              a: '모델은 macOS와 Linux에서 ~/.ollama/models에 저장됩니다. Windows에서 기본 경로는 C:\\Users\\<username>\\.ollama\\models입니다. 서비스 시작 전에 OLLAMA_MODELS 환경 변수를 설정하여 저장 위치를 변경할 수 있습니다.',
            },
          ],
        },
        nextSteps: {
          title: 'Ollama 설치 후 무엇을 해야 합니까?',
          content: 'Ollama가 실행되면 다음 단계는 [첫 번째 로컬 LLM 실행](/local-llms/run-first-local-llm)으로 프롬프팅, 컨텍스트 길이, 로컬 추론 속도에서 무엇을 기대할 수 있는지 이해하는 것입니다. 하드웨어에 적합한 최고의 모델을 선택하려면 [초보자를 위한 최고의 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models)을 참조하십시오. 터미널 대신 그래픽 채팅 인터페이스를 선호하는 경우 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)에서 데스크톱 앱 대안을 다루고 있습니다.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '**Ollama 공식 웹사이트** -- 설치 다운로드 및 공식 문서',
            '**Ollama GitHub 저장소** -- 소스 코드, 이슈 및 커뮤니티 토론',
            '**Ollama 모델 라이브러리** -- 다운로드 링크가 있는 사용 가능한 모델의 큐레이션된 컬렉션',
          ],
        },
        commonMistakes: {
          title: 'Ollama 설치 시 일반적인 실수',
          items: [
            'API가 응답할 것을 기대하기 전에 Ollama가 백그라운드 서비스로 실행 중인지 확인하지 않는 것.',
            '먼저 메모리 요구 사항을 확인하지 않고 사용 가능한 RAM보다 큰 모델을 실행하려는 것.',
            'GPU 감지를 무시하는 것 -- Ollama는 NVIDIA와 AMD를 지원하지만 최신 드라이버가 필요합니다.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽기',
          items: [
            '[로컬 LLM 개발자 스택](/local-llms/local-llm-developer-stack) -- 완전한 개발 환경 구축: CLI → API 서버 → 프로덕션 멀티 GPU.',
            '[로컬 LLM이란 무엇입니까?](/local-llms/what-are-local-llms) -- 정의 및 핵심 개념',
            '[첫 번째 로컬 LLM 실행](/local-llms/run-first-local-llm) -- 설치 후 다음 단계',
            '[초보자를 위한 최고의 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models) -- 하드웨어별 모델 권장 사항',
            '[로컬 LLM 원클릭 설치 프로그램](/local-llms/local-llm-one-click-installers) -- Ollama의 대안 도구',
            '[Mac 2026에서 MLX vs Ollama vs llama.cpp](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac) -- Apple Silicon용 프레임워크 비교: 속도, 설정 시간 및 생태계 트레이드오프.',
            'Ollama가 설치되어 준비되었습니다. 다음 과제: 좋은 결과를 얻는 프롬프트 작성. 여기서 시작하세요: [프롬프트 엔지니어링이란](https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering)에서 평이한 언어로 기초를 다룹니다.',
            '[Como Instalar o Ollama (Português)](/pt/local-llms/how-to-install-ollama) — versão em português deste guia',
          '[로컬 LLM 모델 업데이트 2026](/ko/local-llms/local-llm-model-updates-2026) -- 올해 Ollama용으로 출시된 모든 주요 오픈 웨이트 모델의 완전한 타임라인.',
        ],
        },
      },
    },
  };
