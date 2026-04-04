import type { Language } from '@/lib/blog/blogContent'

// ─── Section & Article types (mirrors PESection / PEArticle) ─────────────────

export interface LLMSection {
  title?: string
  content?: string | string[]
  blockquote?: string
  blockquoteSource?: string
  items?: string[]
  numberedItems?: string[]
  rows?: Array<{ [key: string]: string }>
  columns?: string[]
  faqs?: Array<{ q: string; a: string }>
  isTldr?: boolean
  tableFormat?: boolean
  image?: string
  imageCaption?: string
  imagePlaceholder?: boolean
  codeBlock?: string
  codeLanguage?: string
}

export interface LLMArticle {
  theme: string
  title: string
  intro: string
  metaDescription?: string
  seoTitle?: string
  publishDate: string
  dateModified?: string
  readTime: string
  sections: Record<string, LLMSection>
  schema?: Record<string, unknown>
  supplementalSchema?: Record<string, unknown>
  howToSchema?: Record<string, unknown>
  faqSchema?: Record<string, unknown>
  tableSchema?: Record<string, unknown>
  itemListSchema?: Record<string, unknown>
  educationalLevel?: string
  primaryTerm?: string
  toc?: { label: string; anchor: string }[]
}

// ─── Content registry ────────────────────────────────────────────────────────

export const llmContent: Record<string, Partial<Record<Language, LLMArticle>>> = {

  'what-are-local-llms': {
    en: {
      theme: 'Getting Started',
      title: 'What Are Local LLMs? How Running AI Models on Your Own Hardware Works',
      seoTitle: 'What Are Local LLMs?',
      intro: 'A local LLM is an AI language model that runs entirely on your own hardware — no internet connection, no API calls, no data leaving your machine. You download the model weights as a file, run an inference engine like Ollama or LM Studio, and the model responds from your CPU or GPU alone.',
      metaDescription: 'Local LLMs run AI models on your own hardware with no internet required. Learn what they are, how they work, and when to use them instead of cloud APIs.',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is a Local LLM?', anchor: '#what-is-a-local-llm' },
        { label: 'How Does a Local LLM Work?', anchor: '#how-does-a-local-llm-work' },
        { label: 'What Hardware Do You Need?', anchor: '#what-hardware-do-you-need' },
        { label: 'Local LLM vs Cloud API: What Is the Difference?', anchor: '#local-llm-vs-cloud-api' },
        { label: 'Which Model Formats Are Used?', anchor: '#which-model-formats-are-used' },
        { label: 'When Should You Use a Local LLM?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Common Questions', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'A local LLM runs on your own CPU or GPU — no internet, no API costs, no data sent to third-party servers.',
            'Three components are required: the model file (GGUF or safetensors format), an inference engine (Ollama, LM Studio, or llama.cpp), and optionally a chat interface.',
            'Minimum hardware: 8 GB RAM for a 7B-parameter model at 4-bit quantization. 16 GB RAM handles most everyday models comfortably.',
            'Local models are slower than cloud APIs on consumer hardware — a 7B model on a modern laptop produces 15–40 tokens/sec vs. ~100 tokens/sec from GPT-4o Mini via API.',
            'Best use cases: private data processing, offline work, zero recurring cost, and learning how LLMs work.',
          ],
        },
        whatIsLocalLlm: {
          title: 'What Is a Local LLM?',
          content: [
            'A local LLM (large language model) is an AI model that runs on hardware you control — your laptop, desktop, or on-premise server. The model weights are stored as a file on your disk, and all processing happens on your own CPU or GPU. No prompt text or response data is transmitted to any external server.',
            'The term "local" distinguishes these models from cloud-hosted services like OpenAI GPT-4o, Anthropic Claude 4.6, or Google Gemini 2.5 Pro, which process your prompts on remote servers and return results over the internet.',
            'Local LLMs range from small 1B-parameter models that run on a phone to 70B-parameter models that require a workstation with 48 GB of VRAM. The most commonly used beginner models — Meta Llama 3.2 3B, Microsoft Phi-3 Mini, and Google Gemma 2 2B — run on any laptop with 8 GB of RAM.',
          ],
        },
        howItWorks: {
          title: 'How Does a Local LLM Work?',
          content: [
            'Running a local LLM involves three layers working together: the model file, the inference engine, and the interface.',
            '**The model file** contains the neural network weights — the learned numerical values that define how the model processes and generates text. For local use, these weights are almost always stored in GGUF format (a compressed format developed by the llama.cpp project) or safetensors format. A 7B-parameter model quantized to 4-bit precision is approximately 4.5 GB on disk.',
            '**The inference engine** reads the model file and performs the matrix calculations needed to generate tokens. The most popular engines are [Ollama](/local-llms/how-to-install-ollama) (runs as a background service with an OpenAI-compatible API), [LM Studio](/local-llms/how-to-install-lm-studio) (a desktop app with a built-in chat UI), and llama.cpp (the underlying C++ library that most other tools build on).',
            '**The interface** is where you interact with the model — a terminal, a web UI, or an API endpoint. Many tools like Ollama expose a REST API at `http://localhost:11434` so you can connect any OpenAI-compatible application to your local model.',
          ],
        },
        hardware: {
          title: 'What Hardware Do You Need to Run a Local LLM?',
          content: 'The hardware requirement depends entirely on which model you want to run and how fast you need responses.',
          rows: [
            { 'Model Size': '1B–3B parameters', 'RAM Required': '4–6 GB', 'Speed (CPU)': '20–60 tok/sec', 'Example Models': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Model Size': '7B–8B parameters', 'RAM Required': '6–8 GB', 'Speed (CPU)': '10–30 tok/sec', 'Example Models': 'Llama 3.1 8B, Mistral 7B' },
            { 'Model Size': '13B–14B parameters', 'RAM Required': '10–12 GB', 'Speed (CPU)': '5–15 tok/sec', 'Example Models': 'Llama 2 13B, Qwen2.5 14B' },
            { 'Model Size': '32B–34B parameters', 'RAM Required': '20–24 GB', 'Speed (CPU)': '2–6 tok/sec', 'Example Models': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { 'Model Size': '70B+ parameters', 'RAM Required': '40–48 GB', 'Speed (CPU)': '1–3 tok/sec', 'Example Models': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['Model Size', 'RAM Required', 'Speed (CPU)', 'Example Models'],
        },
        hardwareGpu: {
          title: 'Does a GPU Make a Local LLM Faster?',
          content: 'GPU acceleration dramatically improves speed. An NVIDIA RTX 4070 Ti (12 GB VRAM) runs a 7B model at 80–120 tokens/sec — 4–8× faster than CPU-only mode. Apple Silicon Macs (M1, M2, M3, M4) use unified memory and achieve 40–80 tokens/sec on 7B models without a discrete GPU. For laptop users, see [How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop) for hardware-specific tips.',
        },
        vsCloud: {
          title: 'Local LLM vs Cloud API: What Is the Difference?',
          content: 'The core tradeoff is privacy and cost vs. capability and speed. See the full comparison in [Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Factor': 'Privacy', 'Local LLM': 'Complete — data never leaves your machine', 'Cloud API': 'Data processed on provider servers' },
            { 'Factor': 'Cost', 'Local LLM': '$0 per token after hardware cost', 'Cloud API': '$0.15–$15 per 1M tokens depending on model' },
            { 'Factor': 'Speed', 'Local LLM': '10–120 tok/sec on consumer hardware', 'Cloud API': '50–200 tok/sec, varies by load' },
            { 'Factor': 'Model quality', 'Local LLM': 'Good — competitive at 70B scale', 'Cloud API': 'Best available (GPT-4o, Claude 4.6 Opus)' },
            { 'Factor': 'Setup time', 'Local LLM': '5–15 minutes with Ollama or LM Studio', 'Cloud API': '2–5 minutes to get an API key' },
            { 'Factor': 'Offline use', 'Local LLM': 'Yes — works without internet', 'Cloud API': 'No — requires active connection' },
          ],
          columns: ['Factor', 'Local LLM', 'Cloud API'],
        },
        modelFormats: {
          title: 'Which Model Formats Are Used for Local LLMs?',
          content: [
            '**GGUF** (GPT-Generated Unified Format) is the dominant format for local inference. Developed by the llama.cpp project, GGUF files embed all model metadata and support multiple quantization levels in a single file. When you run `ollama pull llama3.2`, Ollama downloads a GGUF file internally.',
            '**Safetensors** is a format from Hugging Face used primarily with PyTorch-based inference tools like transformers and vLLM. It is more common in research and server deployments.',
            '**Quantization** reduces model precision to lower memory requirements. A 7B model in full FP16 precision requires ~14 GB of RAM. At Q4_K_M quantization (4-bit), the same model requires ~4.5 GB with minimal quality loss. Most beginner guides use Q4_K_M or Q5_K_M.',
          ],
        },
        whenToUse: {
          title: 'When Should You Use a Local LLM Instead of a Cloud API?',
          items: [
            '**Processing sensitive data** — medical records, legal documents, financial data, or any personally identifiable information (PII) that cannot leave your infrastructure.',
            '**Eliminating API costs** — high-volume batch processing where per-token cloud costs accumulate quickly. A 7B model running locally costs $0 per query after hardware.',
            '**Offline or air-gapped environments** — field work, secure facilities, or applications that must function without internet connectivity.',
            '**Learning and experimentation** — understanding how LLMs work internally, testing prompts without cost concerns, or building local AI-powered tools.',
            '**Low-latency applications** — when network round-trip time is unacceptable and a smaller local model is fast enough for the task.',
          ],
        },
        faqSection: {
          title: 'Common Questions About Local LLMs',
          faqs: [
            {
              q: 'Can a local LLM match GPT-4o quality?',
              a: 'No — not on current consumer hardware. GPT-4o and Claude 4.6 Opus outperform any locally-runnable model on complex reasoning, code generation, and instruction-following benchmarks. However, for summarization, translation, and everyday writing tasks, a well-quantized 13B–34B model produces results that are difficult to distinguish from frontier models.',
            },
            {
              q: 'Do I need a GPU to run a local LLM?',
              a: 'No. All major inference engines (Ollama, LM Studio, llama.cpp) run on CPU only. A GPU significantly speeds things up — an NVIDIA RTX 4060 (8 GB VRAM) runs a 7B model at 60–90 tokens/sec vs. 10–20 tokens/sec on CPU. Apple Silicon Macs use GPU-accelerated unified memory by default and are well-suited for local LLMs without a discrete GPU.',
            },
            {
              q: 'Where do I download local LLM models?',
              a: 'The three main sources are: Ollama\'s model library (ollama.com/library) for easy one-command downloads; Hugging Face (huggingface.co) for the full range of GGUF and safetensors models; and LM Studio\'s built-in model browser which searches Hugging Face directly. See [How to Install Ollama](/local-llms/how-to-install-ollama) and [How to Install LM Studio](/local-llms/how-to-install-lm-studio) for setup guides.',
            },
            {
              q: 'Is running a local LLM private?',
              a: 'Yes — with caveats. The model inference itself is fully local. However, some applications built on top of local LLMs may send data to external servers. Always check whether the interface or plugin layer you use has telemetry or cloud sync enabled. See the [Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) for a full audit guide.',
            },
          ],
        },
        nextSteps: {
          title: 'How to Get Started with Local LLMs',
          content: 'The fastest path to running your first local LLM is [How to Install Ollama](/local-llms/how-to-install-ollama) — a single command installs the engine and pulls a model in under 5 minutes on macOS, Windows, or Linux. If you prefer a graphical interface, [How to Install LM Studio](/local-llms/how-to-install-lm-studio) walks through the desktop app setup. To choose which model to start with, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models).',
        },
      },
    },
  },

  'how-to-install-ollama': {
    en: {
      theme: 'Getting Started',
      title: 'How to Install Ollama: Complete Setup Guide for macOS, Windows, and Linux',
      seoTitle: 'How to Install Ollama',
      intro: 'Ollama installs in under 2 minutes on macOS, Windows, and Linux. After installation, one command downloads and runs any model from the Ollama library — no Python environment, no configuration files, and no GPU required to get started.',
      metaDescription: 'How to install Ollama on macOS, Windows, and Linux. Step-by-step guide with exact commands, first model walkthrough, and troubleshooting for common errors.',
      publishDate: '2026-04-04',
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
          isTldr: true,
          items: [
            'macOS: download the .dmg from ollama.com or run `brew install ollama` — then `ollama run llama3.2` to start chatting.',
            'Windows: download the installer from ollama.com/download. Ollama runs as a background service in the system tray.',
            'Linux: one curl command installs everything — `curl -fsSL https://ollama.com/install.sh | sh`.',
            'Minimum requirements: 4 GB RAM for a 3B model, 8 GB RAM for a 7B model. No GPU needed to start.',
            'Ollama exposes an OpenAI-compatible REST API at `http://localhost:11434` — any OpenAI SDK app can use it without code changes.',
          ],
        },
        whatIsOllama: {
          title: 'What Is Ollama and Why Use It?',
          content: [
            'Ollama is an open-source inference engine that runs large language models locally. It packages model management, the llama.cpp inference backend, and an OpenAI-compatible REST API into a single lightweight application. No Python, no conda environment, and no CUDA setup is required.',
            'Ollama maintains a curated model library (ollama.com/library) with one-command downloads for Meta Llama 3.1, Microsoft Phi-3, Google Gemma 2, Mistral, Qwen2.5, and 100+ other models. A model is downloaded once and cached on disk — subsequent runs start in under 5 seconds.',
            'For alternatives to Ollama, see [Local LLM One-Click Installers](/local-llms/local-llm-one-click-installers). To compare Ollama with LM Studio, see [How to Install LM Studio](/local-llms/how-to-install-lm-studio).',
          ],
        },
        installMac: {
          title: 'How to Install Ollama on macOS',
          content: 'There are two methods. The installer download is faster; Homebrew is better if you manage software with brew.',
          numberedItems: [
            'Go to ollama.com/download and click "Download for macOS".',
            'Open the downloaded Ollama.dmg file and drag Ollama to your Applications folder.',
            'Launch Ollama from Applications. A llama icon appears in your menu bar — Ollama is now running as a background service.',
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
          title: 'How to Install Ollama on Windows',
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
          content: 'Ollama on Windows automatically detects and uses NVIDIA GPUs (CUDA 11.3+) and AMD GPUs (ROCm 6+). If you have an NVIDIA RTX card, Ollama will offload model layers to VRAM automatically — no manual configuration needed. To verify GPU is being used, run `ollama run llama3.2` and check Task Manager → GPU for activity.',
        },
        installLinux: {
          title: 'How to Install Ollama on Linux',
          content: 'A single command installs Ollama on any Linux distribution:',
          codeBlock: 'curl -fsSL https://ollama.com/install.sh | sh',
          codeLanguage: 'bash',
        },
        installLinuxService: {
          title: 'Run Ollama as a systemd Service on Linux',
          content: 'The install script automatically registers Ollama as a systemd service. To manage it:',
          codeBlock: '# Check service status\nsystemctl status ollama\n\n# Start / stop / restart\nsystemctl start ollama\nsystemctl stop ollama\nsystemctl restart ollama\n\n# View logs\njournalctl -u ollama -f',
          codeLanguage: 'bash',
        },
        firstModel: {
          title: 'How to Pull and Run Your First Model in Ollama',
          content: 'After installing Ollama, run this command to download and start a model:',
          codeBlock: '# Pull a model (downloads to ~/.ollama/models)\nollama pull llama3.2\n\n# Run it interactively\nollama run llama3.2\n\n# Or pull and run in one step\nollama run llama3.2',
          codeLanguage: 'bash',
        },
        recommendedModels: {
          title: 'Which Model Should You Start With?',
          content: 'For a first run, these three models cover different hardware profiles:',
          rows: [
            { 'Model': 'llama3.2:3b', 'Download Size': '~2 GB', 'RAM Required': '4 GB', 'Best For': 'First test — any machine' },
            { 'Model': 'llama3.1:8b', 'Download Size': '~4.7 GB', 'RAM Required': '8 GB', 'Best For': 'General use on most laptops' },
            { 'Model': 'phi3:mini', 'Download Size': '~2.3 GB', 'RAM Required': '4 GB', 'Best For': 'Fast responses, low RAM' },
          ],
          columns: ['Model', 'Download Size', 'RAM Required', 'Best For'],
        },
        verify: {
          title: 'How to Verify Ollama Is Working',
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
          title: 'Troubleshooting Common Ollama Installation Issues',
          faqs: [
            {
              q: 'Ollama says "could not connect to ollama app, is it running?"',
              a: 'Ollama is not running as a background service. On macOS: open the Ollama app from Applications. On Linux: run `systemctl start ollama` or `ollama serve` in a terminal. On Windows: launch Ollama from the Start menu.',
            },
            {
              q: 'The model download is very slow or stalled',
              a: 'Model downloads are large (2–47 GB). If the download stalls, press Ctrl+C and re-run `ollama pull <model>` — Ollama resumes partial downloads. For faster downloads, use a wired connection instead of Wi-Fi.',
            },
            {
              q: 'I get "error: model requires more system memory" when running a model',
              a: 'The model is too large for your available RAM. Try a smaller quantization: `ollama run llama3.1:8b-instruct-q4_0` instead of the default Q4_K_M. Or switch to a smaller model like `llama3.2:3b`. See [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) for RAM-matched recommendations.',
            },
            {
              q: 'Ollama is running but my GPU is not being used',
              a: 'On Windows, verify your NVIDIA driver is version 452.39 or higher. On Linux, confirm the NVIDIA container toolkit is installed (`nvidia-smi` should return GPU info). Ollama offloads layers to GPU automatically when VRAM is available — run `ollama ps` after starting a model to see GPU utilization.',
            },
            {
              q: 'Where are Ollama model files stored?',
              a: 'Models are stored at ~/.ollama/models on macOS and Linux. On Windows, the default path is C:\\Users\\<username>\\.ollama\\models. You can change the storage location by setting the OLLAMA_MODELS environment variable before starting the service.',
            },
          ],
        },
        nextSteps: {
          title: 'What to Do After Installing Ollama',
          content: 'Once Ollama is running, the next step is [Run Your First Local LLM](/local-llms/run-first-local-llm) to understand prompting, context length, and what to expect from local inference speed. To pick the best model for your hardware, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models). If you prefer a graphical chat interface over the terminal, [How to Install LM Studio](/local-llms/how-to-install-lm-studio) covers the desktop app alternative.',
        },
      },
    },
  },

  'how-to-install-lm-studio': {
    en: {
      theme: 'Getting Started',
      title: 'How to Install LM Studio: Desktop App Setup Guide for macOS, Windows, and Linux',
      seoTitle: 'How to Install LM Studio',
      intro: 'LM Studio is a desktop application that lets you browse, download, and run local LLMs through a graphical interface — no terminal commands required. It runs on macOS, Windows, and Linux, and includes a built-in chat UI and an OpenAI-compatible local server.',
      metaDescription: 'Install LM Studio on macOS, Windows, or Linux. Step-by-step guide covering download, first model setup, the built-in chat UI, and local server configuration.',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is LM Studio?', anchor: '#what-is-lm-studio' },
        { label: 'System Requirements', anchor: '#system-requirements' },
        { label: 'Download and Install', anchor: '#download-and-install' },
        { label: 'Find and Download a Model', anchor: '#find-and-download-a-model' },
        { label: 'Start Chatting', anchor: '#start-chatting' },
        { label: 'Enable the Local Server', anchor: '#enable-the-local-server' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'Troubleshooting', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'Download LM Studio from lmstudio.ai — available for macOS (Apple Silicon + Intel), Windows, and Linux (AppImage).',
            'Minimum: 8 GB RAM. Recommended: 16 GB RAM for 7B models. Apple Silicon Macs use GPU acceleration by default.',
            'The built-in model browser searches Hugging Face directly — download GGUF models without leaving the app.',
            'LM Studio includes a built-in chat UI and a local OpenAI-compatible server on port 1234.',
            'Best for: beginners who prefer a GUI, users who want to compare multiple models side-by-side, and anyone who wants a complete package without terminal commands.',
          ],
        },
        whatIsLmStudio: {
          title: 'What Is LM Studio?',
          content: [
            'LM Studio is a desktop application for running local LLMs. It provides a graphical model browser, a built-in chat interface, and a local API server — all in one app. Under the hood, it uses llama.cpp for inference, the same engine that powers [Ollama](/local-llms/how-to-install-ollama).',
            'The key difference from Ollama is that LM Studio is entirely GUI-driven. You browse and download models through the app interface, start chats with a click, and manage model settings with sliders rather than configuration files.',
            'LM Studio is free for personal use. It is developed by LM Studio, Inc. and was released in 2023. As of 2026, it supports NVIDIA CUDA, AMD ROCm, and Apple Metal acceleration.',
          ],
        },
        requirements: {
          title: 'What Are the System Requirements for LM Studio?',
          rows: [
            { 'Spec': 'Operating System', 'Minimum': 'macOS 13.6, Windows 10, Ubuntu 22.04', 'Recommended': 'macOS 14+, Windows 11, Ubuntu 24.04' },
            { 'Spec': 'RAM', 'Minimum': '8 GB', 'Recommended': '16 GB or more' },
            { 'Spec': 'Storage', 'Minimum': '500 MB for app + model space', 'Recommended': '50 GB+ free for multiple models' },
            { 'Spec': 'GPU (optional)', 'Minimum': 'NVIDIA GTX 10-series or newer', 'Recommended': 'NVIDIA RTX 30/40-series, AMD RX 6000+, or Apple M-series' },
          ],
          columns: ['Spec', 'Minimum', 'Recommended'],
        },
        download: {
          title: 'How to Download and Install LM Studio',
          numberedItems: [
            'Go to lmstudio.ai and click the download button for your OS.',
            'macOS: Open the .dmg file and drag LM Studio to Applications. On first launch, approve the security prompt in System Preferences → Privacy & Security.',
            'Windows: Run the LM-Studio-Setup.exe installer. LM Studio installs to %LOCALAPPDATA%\\LM-Studio.',
            'Linux: Download the .AppImage file. Make it executable with `chmod +x LM-Studio-*.AppImage` and run it. No system installation required.',
            'On first launch, LM Studio shows a welcome screen and prompts you to download a model.',
          ],
        },
        findModel: {
          title: 'How to Find and Download a Model in LM Studio',
          content: 'Use the Search tab (magnifying glass icon in the left sidebar) to find models:',
          numberedItems: [
            'Click the Search tab in the left sidebar.',
            'Type a model name — for example "llama 3.1" or "phi-3 mini".',
            'LM Studio shows matching GGUF models from Hugging Face with file sizes and quantization options.',
            'Select a quantization level. For 8 GB RAM: choose Q4_K_M (~4.5 GB for a 7B model). For 16 GB RAM: Q5_K_M or Q6_K offer better quality.',
            'Click the download arrow. Progress shows in the Downloads tab.',
          ],
        },
        firstChat: {
          title: 'How to Start Chatting with a Model in LM Studio',
          numberedItems: [
            'Click the Chat tab (speech bubble icon) in the left sidebar.',
            'At the top of the chat window, click the model selector dropdown and choose your downloaded model.',
            'LM Studio loads the model into memory — this takes 5–30 seconds depending on model size and hardware.',
            'Type your message in the input field at the bottom and press Enter or click Send.',
            'The model\'s response streams token by token. Generation speed appears in the status bar at the bottom of the window.',
          ],
        },
        modelSettings: {
          title: 'How to Adjust Model Settings in LM Studio',
          content: 'The right panel in the Chat tab exposes key inference parameters:',
          items: [
            '**Temperature** (default 0.8): controls response randomness. Lower values (0.1–0.4) produce more focused, predictable output. Higher values (0.8–1.2) produce more varied, creative output.',
            '**Context Length** (default 4096 tokens): the maximum conversation history the model can process. Longer context uses more RAM. Most 7B models support 4096–8192 tokens.',
            '**GPU Layers** (macOS/Linux/Windows with GPU): how many model layers to offload to the GPU. Set to max for fastest inference if your GPU has enough VRAM.',
            '**System Prompt**: a persistent instruction prepended to every conversation. Use this to set the model\'s role or behavior.',
          ],
        },
        localServer: {
          title: 'How to Enable the LM Studio Local Server',
          content: 'LM Studio includes a local server that mimics the OpenAI API. Any application that works with OpenAI can use your local model through this server:',
          numberedItems: [
            'Click the Local Server tab (the "<->" icon) in the left sidebar.',
            'Select a model in the model dropdown at the top.',
            'Click "Start Server". The server starts on http://localhost:1234.',
            'Your application should set `base_url = "http://localhost:1234/v1"` and any string as the API key (the server accepts any value).',
          ],
        },
        localServerCode: {
          title: 'Connect to LM Studio via Python',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          title: 'LM Studio vs Ollama: Which Should You Use?',
          rows: [
            { 'Factor': 'Interface', 'LM Studio': 'Graphical desktop app', 'Ollama': 'Terminal + API' },
            { 'Factor': 'Model source', 'LM Studio': 'Hugging Face (any GGUF model)', 'Ollama': 'Ollama library (curated, ~200 models)' },
            { 'Factor': 'API port', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Factor': 'Model management', 'LM Studio': 'GUI browser with file size info', 'Ollama': 'CLI commands (ollama pull, list, rm)' },
            { 'Factor': 'Automation', 'LM Studio': 'Limited (GUI-focused)', 'Ollama': 'Strong (scripting, Docker, CI)' },
            { 'Factor': 'Best for', 'LM Studio': 'Beginners, GUI users, model exploration', 'Ollama': 'Developers, automation, server deployments' },
          ],
          columns: ['Factor', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          title: 'Troubleshooting Common LM Studio Issues',
          faqs: [
            {
              q: 'LM Studio says "Not enough memory to load model"',
              a: 'The model requires more RAM than is available. Close other applications to free memory, or select a smaller quantization (Q3_K_S instead of Q4_K_M). As a rule: multiply the model file size by 1.2 to estimate the RAM needed. A 4.5 GB file needs ~5.4 GB free RAM.',
            },
            {
              q: 'The model is generating very slowly (under 5 tokens/sec)',
              a: 'The model is running entirely on CPU. Check GPU Layers in the right panel — if it shows 0, your GPU is not being used. On macOS, LM Studio enables Metal (GPU) automatically for Apple Silicon. On Windows/Linux with NVIDIA, ensure your driver is up to date and increase GPU Layers to the maximum value shown.',
            },
            {
              q: 'I cannot find a specific model in the LM Studio search',
              a: 'LM Studio searches Hugging Face for GGUF files. If a model is not appearing, try searching by the Hugging Face repository name directly (e.g., "bartowski/Llama-3.1-8B-Instruct-GGUF"). Some newer models may not be indexed yet.',
            },
            {
              q: 'The local server returns "model not found" errors',
              a: 'A model must be loaded in the Local Server tab before the server can respond. Open the Local Server tab, select a model from the dropdown, and click Start Server. The model name in API requests can be any string — LM Studio uses whichever model is currently loaded.',
            },
          ],
        },
        nextSteps: {
          title: 'Next Steps After Installing LM Studio',
          content: 'With LM Studio running, try [Run Your First Local LLM](/local-llms/run-first-local-llm) to understand what response quality and speed to expect. For model recommendations matched to your hardware, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models). If you want to troubleshoot setup issues, see [Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup).',
        },
      },
    },
  },

  'local-llms-vs-cloud-apis': {
    en: {
      theme: 'Getting Started',
      title: 'Local LLMs vs Cloud APIs: Which Should You Use in 2026?',
      seoTitle: 'Local LLMs vs Cloud APIs',
      intro: 'Local LLMs run on your own hardware with zero API costs and full data privacy. Cloud APIs like OpenAI GPT-4o and Anthropic Claude 4.6 deliver higher output quality and require no hardware setup. The right choice depends on your data sensitivity, budget, required model quality, and whether you need offline access.',
      metaDescription: 'Local LLMs vs cloud APIs compared: privacy, cost, speed, quality, and setup. Decide which is right for your use case with a concrete comparison table.',
      publishDate: '2026-04-04',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is the Core Difference?', anchor: '#what-is-the-core-difference' },
        { label: 'Full Comparison: 8 Factors', anchor: '#full-comparison' },
        { label: 'How Do the Costs Compare?', anchor: '#how-do-costs-compare' },
        { label: 'Which Is More Private?', anchor: '#which-is-more-private' },
        { label: 'How Does Speed Compare?', anchor: '#how-does-speed-compare' },
        { label: 'Which Has Better Model Quality?', anchor: '#which-has-better-model-quality' },
        { label: 'Which Should You Choose?', anchor: '#which-should-you-choose' },
        { label: 'Common Questions', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'Local LLMs cost $0 per token after hardware. Cloud APIs cost $0.15–$60 per 1M tokens depending on the model.',
            'Cloud APIs (GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro) outperform all locally-runnable models on complex reasoning and code tasks.',
            'Local models match cloud quality for summarization, translation, and simple Q&A at 7B–13B scale.',
            'Local inference is 2–10× slower than cloud APIs on consumer hardware. An RTX 4070 Ti narrows this gap to roughly equal speed for 7B models.',
            'Use local LLMs when: data privacy is non-negotiable, costs are high, or offline access is required. Use cloud APIs when: maximum quality matters and cost is acceptable.',
          ],
        },
        coreDifference: {
          title: 'What Is the Core Difference Between Local LLMs and Cloud APIs?',
          content: [
            'A **cloud API** means your prompt is sent over the internet to a provider\'s server (OpenAI, Anthropic, Google), processed by their model, and the response is returned to you. You pay per token and never touch the model weights.',
            'A **local LLM** means the model file is stored on your disk and all computation happens on your CPU or GPU. Nothing leaves your machine. You pay nothing per inference, but you need hardware capable of running the model.',
            'Both approaches use the same underlying transformer architecture. The practical differences are in where the compute happens, who controls the data, and what quality/speed tradeoff you get.',
          ],
        },
        fullComparison: {
          title: 'Full Comparison: Local LLMs vs Cloud APIs Across 8 Factors',
          rows: [
            { 'Factor': 'Data privacy', 'Local LLM': 'Complete — data never leaves your device', 'Cloud API': 'Data processed on provider servers; subject to their privacy policy' },
            { 'Factor': 'Cost per token', 'Local LLM': '$0 (after hardware investment)', 'Cloud API': '$0.15–$60 per 1M tokens (varies by model)' },
            { 'Factor': 'Output quality', 'Local LLM': 'Good at 13B–70B; competitive on many tasks', 'Cloud API': 'Best available — GPT-4o, Claude 4.6 Opus lead benchmarks' },
            { 'Factor': 'Response speed', 'Local LLM': '10–120 tok/sec (hardware dependent)', 'Cloud API': '50–200 tok/sec (provider load dependent)' },
            { 'Factor': 'Setup time', 'Local LLM': '5–15 minutes with Ollama or LM Studio', 'Cloud API': '2–5 minutes to create an account and get an API key' },
            { 'Factor': 'Offline access', 'Local LLM': 'Yes — works without internet', 'Cloud API': 'No — requires active connection' },
            { 'Factor': 'Model updates', 'Local LLM': 'Manual — you choose when to update', 'Cloud API': 'Automatic — provider updates without notice' },
            { 'Factor': 'Customization', 'Local LLM': 'Full — fine-tuning, system prompts, quantization', 'Cloud API': 'Limited — system prompts only; no weight access' },
          ],
          columns: ['Factor', 'Local LLM', 'Cloud API'],
        },
        costComparison: {
          title: 'How Do the Costs of Local LLMs and Cloud APIs Compare?',
          content: [
            'Cloud API pricing varies by model tier. In 2026, representative prices per 1M tokens: GPT-4o at $2.50 input / $10 output, Claude 4.6 Sonnet at $3.00 / $15, Gemini 2.5 Pro at $1.25 / $5, and GPT-4o Mini at $0.15 / $0.60.',
            'A developer running 10M output tokens per month on GPT-4o pays approximately $100/month. The same workload on a local 8B model costs $0 per token — the only cost is electricity (roughly $0.10–0.30/hour for GPU inference) and the upfront hardware.',
            'Local LLMs become cost-effective within weeks for high-volume use cases. For occasional use (a few thousand tokens per day), cloud APIs are cheaper when you factor in the time cost of setup and maintenance.',
          ],
        },
        privacy: {
          title: 'Which Is More Private: a Local LLM or a Cloud API?',
          content: [
            'Local LLMs are categorically more private. No prompt text, no context, and no response data is transmitted to any external server. This makes local inference the only viable option for regulated industries (healthcare HIPAA, finance PCI-DSS, legal privilege) and for personal data that must stay on-device.',
            'Cloud API providers publish data-use policies that typically exclude training on API inputs, but the data still transits their infrastructure and is subject to legal process. Enterprise tiers (OpenAI Enterprise, Google Workspace) offer stricter data isolation, but at a significant cost premium.',
            'For the full security audit checklist for local models, see [Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist).',
          ],
        },
        speed: {
          title: 'How Does Speed Compare Between Local and Cloud Models?',
          content: 'Speed depends heavily on hardware. On CPU only, a 7B model produces 10–30 tokens/sec — noticeably slower than cloud APIs. With a modern GPU, the gap closes significantly:',
          rows: [
            { 'Hardware': 'CPU only (modern laptop)', 'Model': 'Llama 3.1 8B Q4', 'Speed': '10–25 tok/sec' },
            { 'Hardware': 'Apple M3 Pro (18 GB unified)', 'Model': 'Llama 3.1 8B Q4', 'Speed': '55–75 tok/sec' },
            { 'Hardware': 'NVIDIA RTX 4060 (8 GB VRAM)', 'Model': 'Llama 3.1 8B Q4', 'Speed': '70–100 tok/sec' },
            { 'Hardware': 'NVIDIA RTX 4090 (24 GB VRAM)', 'Model': 'Llama 3.1 8B Q4', 'Speed': '130–160 tok/sec' },
            { 'Hardware': 'Cloud API (GPT-4o Mini)', 'Model': 'GPT-4o Mini', 'Speed': '80–150 tok/sec (varies)' },
          ],
          columns: ['Hardware', 'Model', 'Speed'],
        },
        quality: {
          title: 'Which Has Better Model Quality: Local or Cloud?',
          content: [
            'Cloud frontier models (GPT-4o, Claude 4.6 Opus, Gemini 2.5 Pro) currently lead on complex multi-step reasoning, advanced code generation, and nuanced instruction-following. On MMLU (knowledge breadth) and HumanEval (coding) benchmarks, frontier cloud models score 85–90% vs. 65–80% for the best local 70B models.',
            'For everyday tasks — summarization, translation, classification, simple Q&A, and document drafting — a well-prompted 13B local model produces results that are difficult to distinguish from GPT-4o Mini in blind evaluations. The quality gap is most visible on tasks requiring deep world knowledge or multi-step reasoning chains.',
            'The gap is narrowing. Meta Llama 3.3 70B (2025) matches GPT-4 (2023) on most benchmarks. Local model quality at the 7B scale has improved by roughly one generation per year.',
          ],
        },
        whichToChoose: {
          title: 'Which Should You Choose: Local LLM or Cloud API?',
          content: 'Use this decision framework:',
          items: [
            '**Choose a local LLM if:** you process sensitive or regulated data, you run high-volume workloads where per-token costs accumulate, you need offline capability, or you want to learn how LLMs work internally.',
            '**Choose a cloud API if:** you need the highest available output quality, you want zero setup friction, you are prototyping and don\'t want to manage infrastructure, or your usage is low-volume.',
            '**Use both in parallel:** Tools like [PromptQuorum](/) let you dispatch one prompt to your local Ollama model alongside 25+ cloud models simultaneously, so you can compare local vs. cloud results in one view and route tasks to the right model for each job.',
          ],
        },
        faqSection: {
          title: 'Common Questions About Local LLMs vs Cloud APIs',
          faqs: [
            {
              q: 'Can I switch between local and cloud models in the same application?',
              a: 'Yes. Ollama and LM Studio both expose an OpenAI-compatible REST API at localhost. Any application built on the OpenAI SDK can point its base URL to localhost:11434 (Ollama) or localhost:1234 (LM Studio) to use a local model without changing code. Switching back to cloud requires only changing the base URL and API key.',
            },
            {
              q: 'Do cloud API providers train on my prompts?',
              a: 'For paid API tiers, most major providers (OpenAI, Anthropic, Google) explicitly opt API customers out of training data collection by default. Free tiers and consumer products typically do use inputs for improvement. Always verify the current data policy for the specific tier and product you are using.',
            },
            {
              q: 'Is a local 70B model better than GPT-4o Mini?',
              a: 'On most benchmarks in 2026, yes — Meta Llama 3.3 70B and Qwen2.5 72B score above GPT-4o Mini on standard reasoning and coding tasks. However, 70B models require 40–48 GB of RAM, putting them out of reach for most consumer hardware. For practical local use, 7B–13B models are the common range.',
            },
          ],
        },
      },
    },
  },

}
