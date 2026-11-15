// Auto-generated from src/lib/local-llms/content.ts
// Slug: how-to-install-lm-studio
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      specific_year: 2026,
      designSkin: 'hub',
      theme: 'Getting Started',
      title: 'Install LM Studio: GUI Setup for macOS, Windows & Linux',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-en.webp',
      dateModified: '2026-11-14',
      seoTitle: 'Install LM Studio: Download, Setup and Models per GPU',
      intro: 'LM Studio is a desktop application that lets you browse, download, and run local LLMs through a graphical interface -- no terminal commands required. It runs on macOS, Windows, and Linux, and includes a built-in chat UI and an OpenAI-compatible local server. LM Studio supports many GGUF-quantized models from Hugging Face; models with an unsupported architecture may not load.',
      metaDescription: 'Install LM Studio on macOS, Windows or Linux: official download link, one install step per OS and which models fit 8, 12, 16 and 24 GB VRAM.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio is a desktop application that lets you browse, download, and run local LLMs through a graphical interface -- no terminal commands required. It runs on macOS, Windows, and Linux, and includes a built-in chat UI and an OpenAI-compatible local server.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '7 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Download and Install in One Step per OS', anchor: '#download-install-quick' },
        { label: 'Which Model Fits Your GPU', anchor: '#models-by-gpu' },
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
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studio is a desktop application for macOS, Windows, and Linux that lets you browse, download, and chat with many GGUF-quantized models from Hugging Face (models with an unsupported architecture may not load) through a graphical interface, with no terminal commands required and a built-in OpenAI-compatible local server. According to the vendor, use is free, but the terms can change.' },
            { type: 'plain-terms', text: "If you don't want to use a command line, LM Studio is the point-and-click way to run AI models on your own computer. Download the app, search for a model by name inside it, click download, and start chatting -- the whole thing takes under 5 minutes and includes a built-in server so other apps can talk to it too." },
          ],
          items: [
            'Download LM Studio from lmstudio.ai -- available for macOS (Apple Silicon), Windows, and Linux (AppImage).',
            'Requirements: macOS 14.0+ on Apple Silicon, Windows x64 (AVX2) or ARM64, or Ubuntu 20.04+; 16 GB RAM recommended. Apple Silicon Macs use GPU acceleration by default.',
            'The built-in model browser searches Hugging Face directly -- download GGUF models without leaving the app.',
            'LM Studio includes a built-in chat UI and a local OpenAI-compatible server on port 1234.',
            'Best for: beginners who prefer a GUI, users who want to compare multiple models side-by-side, and anyone who wants a complete package without terminal commands.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'Download LM Studio and Install It: One Step per OS',
          content: '**Download LM Studio from the official [LM Studio download page](https://lmstudio.ai/download), then follow the one install step for your system below.** It needs Apple Silicon with macOS 14.0 or newer, a Windows x64 (AVX2) or ARM64 PC, or Ubuntu 20.04 or newer, and 16 GB of RAM is recommended (see the [requirements table](#system-requirements)). According to the vendor ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), use is free, but the terms can change.',
          items: [
          '**macOS:** open the downloaded .dmg file and drag LM Studio into the Applications folder.',
          '**Windows:** run the downloaded installer and follow the prompts.',
          '**Linux:** make the downloaded AppImage executable with `chmod +x LM-Studio-*.AppImage`, then run it.',
          ],
          note: 'There is no Intel Mac build. After the first launch, search for a model inside the app (steps further down).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'Which Model Fits Your GPU',
          content: '**Match the model to your GPU memory: 8 GB VRAM runs 7–8B models, 12 GB runs 14B, 16 GB runs 24B, 24 GB runs 27–32B, and a 70B model needs about 40 GB.** Sizes are approximate estimates for Q4_K_M quantization from the PromptQuorum [local LLM hardware guide](/local-llms/local-llm-hardware-guide), which also covers GPUs, prices and speeds. On Apple Silicon, unified memory counts as VRAM.',
          itemHeadings: true,
          columns: ['Your VRAM', 'Models that fit', 'Examples', 'Size at Q4_K_M'],
          rows: [
          { 'Your VRAM': '8 GB', 'Models that fit': '7–8B', 'Examples': 'Llama 3.1 8B, Qwen3 8B', 'Size at Q4_K_M': '~5 GB' },
          { 'Your VRAM': '12 GB', 'Models that fit': '14B', 'Examples': 'Qwen3 14B', 'Size at Q4_K_M': '~9 GB' },
          { 'Your VRAM': '16 GB', 'Models that fit': '24B', 'Examples': 'Mistral Small 3.1 24B', 'Size at Q4_K_M': '~14 GB' },
          { 'Your VRAM': '24 GB', 'Models that fit': '27–32B', 'Examples': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Size at Q4_K_M': '~16–19 GB' },
          { 'Your VRAM': '40 GB+', 'Models that fit': '70B', 'Examples': 'Llama 3.3 70B', 'Size at Q4_K_M': '~40 GB' },
          ],
          note: 'Estimates, not measurements by PromptQuorum. See the [VRAM guide](/local-llms/how-much-vram-local-llm) for the formula behind the sizes.',
        },
        whatIsLmStudio: {
          title: 'What Is LM Studio?',
          content: [
            '**LM Studio is a desktop application for running local LLMs.** It provides a graphical model browser, a built-in chat interface, and a local API server -- all in one app. Under the hood, it runs GGUF models with llama.cpp (and with MLX on Apple Silicon), an open-source engine that [Ollama](/local-llms/how-to-install-ollama) also supports as a backend.',
            'The key difference from Ollama is that LM Studio is entirely GUI-driven. You browse and download models through the app interface, start chats with a click, and manage model settings with sliders rather than configuration files.',
            'According to the vendor ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio has been free for personal and work use since July 2025. It is developed by Element Labs, Inc. As of 2026, it supports NVIDIA CUDA, AMD ROCm, and Apple Metal acceleration.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'What Are the System Requirements for LM Studio?',
          rows: [
            { 'Spec': 'Operating System', 'Minimum': 'macOS 14.0+, Windows x64 (AVX2) or ARM64, Ubuntu 20.04+', 'Recommended': 'Ubuntu 22.04 (newer: less tested)' },
            { 'Spec': 'RAM', 'Minimum': 'No fixed minimum (8 GB Macs: small models)', 'Recommended': '16 GB or more' },
            { 'Spec': 'Storage', 'Minimum': 'App plus space for each model', 'Recommended': '50 GB+ free for several models' },
            { 'Spec': 'GPU (optional)', 'Minimum': 'Optional (Windows: 4 GB+ dedicated VRAM)', 'Recommended': 'Apple Silicon, or NVIDIA/AMD with enough VRAM' },
          ],
          columns: ['Spec', 'Minimum', 'Recommended'],
        },
        download: {
          id: 'download-and-install',
          title: 'How Do You Download and Install LM Studio?',
          numberedItems: [
            'Go to lmstudio.ai and click the download button for your OS.',
            'macOS: Open the .dmg file and drag LM Studio to Applications. On first launch, approve the security prompt in System Preferences → Privacy & Security.',
            'Windows: Run the LM-Studio-Setup.exe installer. LM Studio installs to %LOCALAPPDATA%\\LM-Studio.',
            'Linux: Download the .AppImage file. Make it executable with `chmod +x LM-Studio-*.AppImage` and run it. No system installation required.',
            'On first launch, LM Studio shows a welcome screen and prompts you to download a model.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'LM Studio installation flow: download from lmstudio.ai, install on macOS, Windows, or Linux, search Hugging Face for a GGUF model, pick Q4_K_M quantization (~4.5 GB), and start chatting in 5-30 seconds.',
        },
        findModel: {
          id: 'find-and-download-a-model',
          title: 'How Do You Find and Download a Model in LM Studio?',
          content: 'Use the Search tab (magnifying glass icon in the left sidebar) to find models:',
          numberedItems: [
            'Click the Search tab in the left sidebar.',
            'Type a model name -- for example "llama 3.1" or "phi-3 mini".',
            'LM Studio shows matching GGUF models from Hugging Face with file sizes and quantization options.',
            'Select a quantization level. For 8 GB RAM: choose Q4_K_M (~4.5 GB for a 7B model). For 16 GB RAM: Q5_K_M or Q6_K offer better quality.',
            'Click the download arrow. Progress shows in the Downloads tab.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'RAM-based quantization guide for LM Studio: 8 GB RAM fits Q4_K_M (~4.5 GB, small quality loss that varies by model); 16 GB RAM fits Q5_K_M or Q6_K (~5.7-6.5 GB, near-lossless) with headroom for 8K+ token context.',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'How Do You Start Chatting with a Model in LM Studio?',
          numberedItems: [
            'Click the Chat tab (speech bubble icon) in the left sidebar.',
            'At the top of the chat window, click the model selector dropdown and choose your downloaded model.',
            'LM Studio loads the model into memory -- this takes 5-30 seconds depending on model size and hardware.',
            'Type your message in the input field at the bottom and press Enter or click Send.',
            'The model\'s response streams token by token. Generation speed appears in the status bar at the bottom of the window.',
          ],
        },
        modelSettings: {
          title: 'How Do You Adjust Model Settings in LM Studio?',
          content: 'The right panel in the Chat tab exposes key inference parameters:',
          items: [
            '**Temperature** (default 0.8): controls response randomness. Lower values (0.1-0.4) produce more focused, predictable output. Higher values (0.8-1.2) produce more varied, creative output.',
            '**Context Length** (default 4096 tokens): the maximum conversation history the model can process. Longer context uses more RAM. Most 7B models support 4096-8192 tokens.',
            '**GPU Layers** (macOS/Linux/Windows with GPU): how many model layers to offload to the GPU. Set to max for fastest inference if your GPU has enough VRAM.',
            '**System Prompt**: a persistent instruction prepended to every conversation. Use this to set the model\'s role or behavior.',
          ],
        },
        localServer: {
          id: 'enable-the-local-server',
          title: 'How Do You Enable the LM Studio Local Server?',
          content: 'LM Studio includes a local server that mimics the OpenAI API. Many applications built for the OpenAI API can use your local model through this server, though compatibility is not guaranteed for every feature:',
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
          id: 'lm-studio-vs-ollama',
          title: 'LM Studio vs Ollama: Which Should You Use?',
          rows: [
            { 'Factor': 'Interface', 'LM Studio': 'Graphical desktop app', 'Ollama': 'Terminal + API' },
            { 'Factor': 'Model source', 'LM Studio': 'Hugging Face (many GGUF models)', 'Ollama': 'Ollama library (curated)' },
            { 'Factor': 'API port', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Factor': 'Model management', 'LM Studio': 'GUI browser with file size info', 'Ollama': 'CLI commands (ollama pull, list, rm)' },
            { 'Factor': 'Automation', 'LM Studio': 'GUI-first; local API and lms CLI available', 'Ollama': 'CLI-first (scripting, Docker, CI)' },
            { 'Factor': 'Best for', 'LM Studio': 'Beginners, GUI users, model exploration', 'Ollama': 'Developers, automation, server deployments' },
          ],
          columns: ['Factor', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Troubleshooting Common LM Studio Issues',
          faqs: [
            { q: 'LM Studio says "Not enough memory to load model"', a: 'The model requires more RAM than is available. Close other applications to free memory, or select a smaller quantization (Q3_K_S instead of Q4_K_M). As a rule: multiply the model file size by 1.2 to estimate the RAM needed. A 4.5 GB file needs ~5.4 GB free RAM.' },
            { q: 'The model is generating very slowly (under 5 tokens/sec)', a: 'The model is running entirely on CPU. Check GPU Layers in the right panel -- if it shows 0, your GPU is not being used. On macOS, LM Studio enables Metal (GPU) automatically for Apple Silicon. On Windows/Linux with NVIDIA, ensure your driver is up to date and increase GPU Layers to the maximum value shown.' },
            { q: 'I cannot find a specific model in the LM Studio search', a: 'LM Studio searches Hugging Face for GGUF files. If a model is not appearing, try searching by the Hugging Face repository name directly (e.g., "bartowski/Llama-3.1-8B-Instruct-GGUF"). Some newer models may not be indexed yet.' },
            { q: 'The local server returns "model not found" errors', a: 'A model must be loaded in the Local Server tab before the server can respond. Open the Local Server tab, select a model from the dropdown, and click Start Server. The model name in API requests can be any string -- LM Studio uses whichever model is currently loaded.' },
            { q: 'How do I download LM Studio?', a: 'Go to lmstudio.ai and click the download button for your OS. Available for macOS (Apple Silicon), Windows, and Linux (AppImage).' },
            { q: 'What are the minimum requirements for LM Studio?', a: 'Apple Silicon with macOS 14.0 or newer, Windows x64 (AVX2) or ARM64, or Ubuntu 20.04 or newer; 16 GB RAM is recommended (8 GB Macs only for smaller models). No GPU required -- Apple Silicon Macs and NVIDIA/AMD GPUs are supported for acceleration.' },
            { q: 'How do I find and download models in LM Studio?', a: 'Click the Search tab (magnifying glass) in the sidebar, search for a model name (e.g., "llama 3.1"), select a quantization level (Q4_K_M for 8GB RAM), and click the download arrow.' },
            { q: 'What quantization should I use in LM Studio with 8GB RAM?', a: 'Q4_K_M is the recommended quantization for 8GB RAM systems. It gives the best balance of model quality and memory usage for 7B models (~4.5GB file size).' },
            { q: 'Does LM Studio include an OpenAI-compatible API?', a: 'Yes. Enable the Local Server tab in LM Studio to start an OpenAI-compatible API at http://localhost:1234. Many OpenAI SDK apps can connect using this URL as the base_url, but compatibility is partial, so test the features you rely on.' },
            { q: 'How is LM Studio different from Ollama?', a: 'LM Studio is GUI-first: browse models, manage settings, and chat through a visual interface. Ollama is CLI-first: faster to set up for developers, but requires terminal commands. LM Studio runs GGUF models with llama.cpp (and MLX on Apple Silicon); Ollama also supports llama.cpp as a backend.' },
            { q: 'Can I use LM Studio on Linux?', a: 'Yes. Download the .AppImage file from lmstudio.ai. Make it executable: chmod +x LM-Studio-*.AppImage and run it. No system installation is needed -- it runs as a portable app.' },
            { q: 'Is LM Studio free?', a: 'According to the vendor ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio has been free for personal and work use since July 2025. It is developed by Element Labs, Inc.; only the separate Enterprise/Teams tier is paid. Terms can change, so check the current terms on [lmstudio.ai](https://lmstudio.ai). Models you download are covered by their own licenses.' },
            { q: 'How do I enable GPU acceleration in LM Studio?', a: 'On NVIDIA: ensure CUDA drivers are installed. On AMD: ROCm is required. On Apple Silicon: Metal is used automatically. Go to Settings → GPU in LM Studio to verify GPU is detected and layers are offloaded.' },
            { q: 'What is the difference between Q4_K_M and Q5_K_M in LM Studio?', a: 'Q4_K_M uses 4-bit quantization (~4.5GB for 7B) with a small, model-dependent quality loss. Q5_K_M uses 5-bit (~5.7GB) with minimal loss. Use Q4_K_M for 8GB RAM; Q5_K_M or Q6_K for 16GB RAM systems.' },
          ],
        },
        nextSteps: {
          title: 'Next Steps After Installing LM Studio',
          content: 'With LM Studio running, try [Run Your First Local LLM](/local-llms/run-first-local-llm) to understand what response quality and speed to expect. For model recommendations matched to your hardware, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models). If you want to troubleshoot setup issues, see [Troubleshooting Local LLM Setup](/local-llms/troubleshooting-local-llm-setup).',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '**LM Studio Official Website** -- Downloads and documentation',
            '**Hugging Face Model Hub** -- Full range of GGUF-quantized models',
            '**LM Studio on GitHub** -- SDKs, CLI and bug tracker (the desktop app\'s own source code is not published there)',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes When Installing LM Studio',
          items: [
            'Not allocating enough system RAM for the model you selected in LM Studio settings.',
            'Using a pre-quantized model that is still too large for your GPU VRAM.',
            'Expecting instant responses from large models on CPU-only systems -- response time will be 10-30 seconds.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[What Are Local LLMs?](/local-llms/what-are-local-llms) -- Core concepts and components',
            '[Run Your First Local LLM](/local-llms/run-first-local-llm) -- Next steps after installation',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Terminal-based alternative to LM Studio',
            '[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- Model recommendations by hardware',
            '[Best Local LLMs for Coding 2026](/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek benchmark comparison',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/local-llms/how-to-install-lm-studio',
        'headline': 'Install LM Studio: GUI Setup for macOS, Windows & Linux',
        'description': 'Install LM Studio on macOS, Windows or Linux: official download link, one install step per OS and which models fit 8, 12, 16 and 24 GB VRAM.',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'LM Studio' },
          { '@type': 'Thing', 'name': 'local LLM installation' },
          { '@type': 'Thing', 'name': 'GGUF model' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
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
            'name': 'LM Studio says "Not enough memory to load model"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The model requires more RAM than is available. Close other applications to free memory, or select a smaller quantization (Q3_K_S instead of Q4_K_M). As a rule: multiply the model file size by 1.2 to estimate the RAM needed. A 4.5 GB file needs ~5.4 GB free RAM.',
            },
          },
          {
            '@type': 'Question',
            'name': 'The model is generating very slowly (under 5 tokens/sec)',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The model is running entirely on CPU. Check GPU Layers in the right panel -- if it shows 0, your GPU is not being used. On macOS, LM Studio enables Metal (GPU) automatically for Apple Silicon. On Windows/Linux with NVIDIA, ensure your driver is up to date and increase GPU Layers to the maximum value shown.',
            },
          },
          {
            '@type': 'Question',
            'name': 'I cannot find a specific model in the LM Studio search',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio searches Hugging Face for GGUF files. If a model is not appearing, try searching by the Hugging Face repository name directly (e.g., "bartowski/Llama-3.1-8B-Instruct-GGUF"). Some newer models may not be indexed yet.',
            },
          },
          {
            '@type': 'Question',
            'name': 'The local server returns "model not found" errors',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A model must be loaded in the Local Server tab before the server can respond. Open the Local Server tab, select a model from the dropdown, and click Start Server. The model name in API requests can be any string -- LM Studio uses whichever model is currently loaded.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I download LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Go to lmstudio.ai and click the download button for your OS. Available for macOS (Apple Silicon), Windows, and Linux (AppImage).',
            },
          },
          {
            '@type': 'Question',
            'name': 'What are the minimum requirements for LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Apple Silicon with macOS 14.0 or newer, Windows x64 (AVX2) or ARM64, or Ubuntu 20.04 or newer; 16 GB RAM is recommended (8 GB Macs only for smaller models). No GPU required -- Apple Silicon Macs and NVIDIA/AMD GPUs are supported for acceleration.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I find and download models in LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Click the Search tab (magnifying glass) in the sidebar, search for a model name (e.g., "llama 3.1"), select a quantization level (Q4_K_M for 8GB RAM), and click the download arrow.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What quantization should I use in LM Studio with 8GB RAM?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M is the recommended quantization for 8GB RAM systems. It gives the best balance of model quality and memory usage for 7B models (~4.5GB file size).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does LM Studio include an OpenAI-compatible API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Enable the Local Server tab in LM Studio to start an OpenAI-compatible API at http://localhost:1234. Many OpenAI SDK apps can connect using this URL as the base_url, but compatibility is partial, so test the features you rely on.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How is LM Studio different from Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio is GUI-first: browse models, manage settings, and chat through a visual interface. Ollama is CLI-first: faster to set up for developers, but requires terminal commands. LM Studio runs GGUF models with llama.cpp (and MLX on Apple Silicon); Ollama also supports llama.cpp as a backend.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I use LM Studio on Linux?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Download the .AppImage file from lmstudio.ai. Make it executable: chmod +x LM-Studio-*.AppImage and run it. No system installation is needed -- it runs as a portable app.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is LM Studio free?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'According to the vendor ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio has been free for personal and work use since July 2025. It is developed by Element Labs, Inc.; only the separate Enterprise/Teams tier is paid. Terms can change, so check the current terms on [lmstudio.ai](https://lmstudio.ai). Models you download are covered by their own licenses.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I enable GPU acceleration in LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'On NVIDIA: ensure CUDA drivers are installed. On AMD: ROCm is required. On Apple Silicon: Metal is used automatically. Go to Settings → GPU in LM Studio to verify GPU is detected and layers are offloaded.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between Q4_K_M and Q5_K_M in LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M uses 4-bit quantization (~4.5GB for 7B) with a small, model-dependent quality loss. Q5_K_M uses 5-bit (~5.7GB) with minimal loss. Use Q4_K_M for 8GB RAM; Q5_K_M or Q6_K for 16GB RAM systems.',
            },
          },
        ]
      },
    },
    es: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'Getting Started',
      title: 'Instalar LM Studio: configuración de interfaz gráfica para macOS, Windows y Linux',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-es.webp',
      seoTitle: 'Instalar LM Studio: descarga, pasos y modelos según tu GPU',
      intro: 'LM Studio es una aplicación de escritorio que te permite explorar, descargar y ejecutar LLMs locales a través de una interfaz gráfica, sin necesidad de comandos en la terminal. Funciona en macOS, Windows y Linux, e incluye una interfaz de chat integrada y un servidor local compatible con OpenAI. LM Studio admite muchos modelos GGUF cuantizados de Hugging Face; los de arquitectura no compatible pueden no cargarse.',
      metaDescription: 'Instala LM Studio en macOS, Windows o Linux: descarga oficial, un paso por sistema y qué modelos caben en 8, 12, 16 y 24 GB de VRAM de tu GPU.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio es una aplicación de escritorio que te permite explorar, descargar y ejecutar LLMs locales a través de una interfaz gráfica, sin necesidad de comandos en la terminal. Funciona en macOS, Windows y Linux, e incluye una interfaz de chat integrada y un servidor local compatible con OpenAI.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '7 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Descargar e instalar: un paso por sistema', anchor: '#download-install-quick' },
        { label: 'Qué modelo cabe en tu GPU', anchor: '#models-by-gpu' },
        { label: '¿Qué es LM Studio?', anchor: '#what-is-lm-studio' },
        { label: 'Requisitos del sistema', anchor: '#system-requirements' },
        { label: 'Descargar e instalar', anchor: '#download-and-install' },
        { label: 'Buscar y descargar un modelo', anchor: '#find-and-download-a-model' },
        { label: 'Empezar a chatear', anchor: '#start-chatting' },
        { label: 'Activar el servidor local', anchor: '#enable-the-local-server' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'Solución de problemas', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studio es una aplicación de escritorio para macOS, Windows y Linux que te permite explorar, descargar y chatear con muchos modelos GGUF cuantizados de Hugging Face (los de arquitectura no compatible pueden no cargarse) a través de una interfaz gráfica, sin comandos de terminal y con un servidor local compatible con OpenAI integrado. Según el fabricante, el uso es gratuito, pero las condiciones pueden cambiar.' },
            { type: 'plain-terms', text: 'Si no quieres usar la línea de comandos, LM Studio es la forma de apuntar y hacer clic para ejecutar modelos de IA en tu propio ordenador. Descarga la app, busca un modelo por nombre dentro de ella, haz clic en descargar y empieza a chatear -- todo el proceso lleva menos de 5 minutos e incluye un servidor integrado para que otras apps también puedan usarlo.' },
          ],
          items: [
            'Descarga LM Studio desde lmstudio.ai -- disponible para macOS (Apple Silicon), Windows y Linux (AppImage).',
            'Requisitos: macOS 14.0+ con Apple Silicon, Windows x64 (AVX2) o ARM64, o Ubuntu 20.04+; se recomiendan 16 GB de RAM. Los Mac con Apple Silicon usan aceleración GPU por defecto.',
            'El navegador de modelos integrado busca directamente en Hugging Face -- descarga modelos GGUF sin salir de la app.',
            'LM Studio incluye una interfaz de chat integrada y un servidor local compatible con OpenAI en el puerto 1234.',
            'Ideal para: principiantes que prefieren una interfaz gráfica, usuarios que quieren comparar varios modelos en paralelo y cualquiera que quiera un paquete completo sin comandos de terminal.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'Descargar LM Studio e instalarlo: un paso por sistema',
          content: '**Descarga LM Studio desde la [página de descarga oficial](https://lmstudio.ai/download) y sigue el paso de instalación de tu sistema.** Necesita un Mac con Apple Silicon y macOS 14.0 o posterior, un PC con Windows x64 (AVX2) o ARM64, o Ubuntu 20.04 o posterior, y se recomiendan 16 GB de RAM (consulta la [tabla de requisitos](#system-requirements)). Según el fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), el uso es gratuito, pero las condiciones pueden cambiar.',
          items: [
          '**macOS:** abre el archivo .dmg descargado y arrastra LM Studio a la carpeta Aplicaciones.',
          '**Windows:** ejecuta el instalador descargado y sigue las indicaciones.',
          '**Linux:** da permiso de ejecución al AppImage descargado con `chmod +x LM-Studio-*.AppImage` y ejecútalo.',
          ],
          note: 'No existe una versión para Mac con Intel. Tras el primer arranque, busca un modelo dentro de la app (pasos más abajo).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'Qué modelo cabe en tu GPU',
          content: '**Ajusta el modelo a la memoria de tu GPU: 8 GB de VRAM admiten modelos de 7–8B, 12 GB de 14B, 16 GB de 24B, 24 GB de 27–32B, y un modelo de 70B necesita unos 40 GB.** Los tamaños son estimaciones aproximadas con cuantización Q4_K_M, tomadas de la [guía de hardware para LLM locales](/es/local-llms/local-llm-hardware-guide) de PromptQuorum, que también recoge GPU, precios y velocidades. En Apple Silicon, la memoria unificada hace de VRAM.',
          itemHeadings: true,
          columns: ['Tu VRAM', 'Modelos que caben', 'Ejemplos', 'Tamaño en Q4_K_M'],
          rows: [
          { 'Tu VRAM': '8 GB', 'Modelos que caben': '7–8B', 'Ejemplos': 'Llama 3.1 8B, Qwen3 8B', 'Tamaño en Q4_K_M': '~5 GB' },
          { 'Tu VRAM': '12 GB', 'Modelos que caben': '14B', 'Ejemplos': 'Qwen3 14B', 'Tamaño en Q4_K_M': '~9 GB' },
          { 'Tu VRAM': '16 GB', 'Modelos que caben': '24B', 'Ejemplos': 'Mistral Small 3.1 24B', 'Tamaño en Q4_K_M': '~14 GB' },
          { 'Tu VRAM': '24 GB', 'Modelos que caben': '27–32B', 'Ejemplos': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Tamaño en Q4_K_M': '~16–19 GB' },
          { 'Tu VRAM': '40 GB+', 'Modelos que caben': '70B', 'Ejemplos': 'Llama 3.3 70B', 'Tamaño en Q4_K_M': '~40 GB' },
          ],
          note: 'Estimaciones, no mediciones de PromptQuorum. La fórmula detrás de los tamaños está en la [guía de VRAM](/es/local-llms/how-much-vram-local-llm).',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: '¿Qué es LM Studio?',
          content: [
            '**LM Studio es una aplicación de escritorio para ejecutar LLMs locales.** Proporciona un navegador gráfico de modelos, una interfaz de chat integrada y un servidor de API local, todo en una sola app. Internamente ejecuta los modelos GGUF con llama.cpp (y con MLX en Apple Silicon), un motor de código abierto que [Ollama](/es/local-llms/how-to-install-ollama) también admite como backend.',
            'La diferencia clave con Ollama es que LM Studio es completamente visual. Exploras y descargas modelos desde la interfaz de la app, inicias chats con un clic y ajustas la configuración con controles deslizantes en lugar de archivos de configuración.',
            'Según el fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio es gratuito para uso personal y laboral desde julio de 2025. Lo desarrolla Element Labs, Inc. A partir de 2026, admite aceleración NVIDIA CUDA, AMD ROCm y Apple Metal.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: '¿Cuáles son los requisitos del sistema para LM Studio?',
          rows: [
            { 'Especificación': 'Sistema operativo', 'Mínimo': 'macOS 14.0+, Windows x64 (AVX2) o ARM64, Ubuntu 20.04+', 'Recomendado': 'Ubuntu 22.04 (las más nuevas: menos probadas)' },
            { 'Especificación': 'RAM', 'Mínimo': 'Sin mínimo fijo (Mac de 8 GB: modelos pequeños)', 'Recomendado': '16 GB o más' },
            { 'Especificación': 'Almacenamiento', 'Mínimo': 'La app y espacio para cada modelo', 'Recomendado': '50 GB+ libres para varios modelos' },
            { 'Especificación': 'GPU (opcional)', 'Mínimo': 'Opcional (Windows: 4 GB+ de VRAM dedicada)', 'Recomendado': 'Apple Silicon, o NVIDIA/AMD con VRAM suficiente' },
          ],
          columns: ['Especificación', 'Mínimo', 'Recomendado'],
        },
        download: {
          id: 'download-and-install',
          title: '¿Cómo descargar e instalar LM Studio?',
          numberedItems: [
            'Ve a lmstudio.ai y haz clic en el botón de descarga para tu sistema operativo.',
            'macOS: Abre el archivo .dmg y arrastra LM Studio a la carpeta Aplicaciones. En el primer inicio, aprueba el aviso de seguridad en Preferencias del Sistema → Privacidad y Seguridad.',
            'Windows: Ejecuta el instalador LM-Studio-Setup.exe. LM Studio se instala en %LOCALAPPDATA%\\LM-Studio.',
            'Linux: Descarga el archivo .AppImage. Hazlo ejecutable con `chmod +x LM-Studio-*.AppImage` y ejecútalo. No se requiere instalación en el sistema.',
            'En el primer inicio, LM Studio muestra una pantalla de bienvenida y te pide descargar un modelo.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'Flujo de instalación de LM Studio: descarga desde lmstudio.ai, instala en macOS, Windows o Linux, busca un modelo GGUF en Hugging Face, elige la cuantización Q4_K_M (~4,5 GB) y empieza a chatear en 5-30 segundos.',
        },
        findModel: {
          id: 'find-and-download-a-model',
          title: '¿Cómo buscar y descargar un modelo en LM Studio?',
          content: 'Usa la pestaña de búsqueda (icono de lupa en la barra lateral izquierda) para encontrar modelos:',
          numberedItems: [
            'Haz clic en la pestaña Search en la barra lateral izquierda.',
            'Escribe el nombre de un modelo, por ejemplo "llama 3.1" o "phi-3 mini".',
            'LM Studio muestra los modelos GGUF coincidentes de Hugging Face con tamaños de archivo y opciones de cuantización.',
            'Selecciona un nivel de cuantización. Para 8 GB de RAM: elige Q4_K_M (~4,5 GB para un modelo 7B). Para 16 GB de RAM: Q5_K_M o Q6_K ofrecen mejor calidad.',
            'Haz clic en la flecha de descarga. El progreso se muestra en la pestaña Downloads.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'Guía de cuantización según la RAM en LM Studio: 8 GB de RAM admite Q4_K_M (~4,5 GB, pequeña pérdida de calidad según el modelo); 16 GB de RAM admite Q5_K_M o Q6_K (~5,7-6,5 GB, casi sin pérdida) con margen para contexto de 8K+ tokens.',
        },
        firstChat: {
          id: 'start-chatting',
          title: '¿Cómo empezar a chatear con un modelo en LM Studio?',
          numberedItems: [
            'Haz clic en la pestaña Chat (icono de bocadillo) en la barra lateral izquierda.',
            'En la parte superior de la ventana de chat, haz clic en el menú desplegable del selector de modelo y elige el modelo descargado.',
            'LM Studio carga el modelo en memoria -- esto tarda entre 5 y 30 segundos según el tamaño del modelo y el hardware.',
            'Escribe tu mensaje en el campo de entrada de la parte inferior y pulsa Enter o haz clic en Enviar.',
            'La respuesta del modelo se transmite token a token. La velocidad de generación aparece en la barra de estado en la parte inferior de la ventana.',
          ],
        },
        modelSettings: {
          title: '¿Cómo ajustar la configuración del modelo en LM Studio?',
          content: 'El panel derecho de la pestaña Chat expone los parámetros de inferencia principales:',
          items: [
            '**Temperature** (por defecto 0.8): controla la aleatoriedad de las respuestas. Valores bajos (0.1-0.4) producen salidas más enfocadas y predecibles. Valores altos (0.8-1.2) producen salidas más variadas y creativas.',
            '**Context Length** (por defecto 4096 tokens): el historial máximo de conversación que el modelo puede procesar. Un contexto más largo usa más RAM. La mayoría de los modelos 7B admiten entre 4096 y 8192 tokens.',
            '**GPU Layers** (macOS/Linux/Windows con GPU): cuántas capas del modelo se descargan a la GPU. Establece el valor máximo para la inferencia más rápida si tu GPU tiene suficiente VRAM.',
            '**System Prompt**: una instrucción persistente que se antepone a cada conversación. Úsala para definir el rol o el comportamiento del modelo.',
          ],
        },
        localServer: {
          id: 'enable-the-local-server',
          title: '¿Cómo activar el servidor local de LM Studio?',
          content: 'LM Studio incluye un servidor local que imita la API de OpenAI. Muchas aplicaciones creadas para la API de OpenAI pueden usar tu modelo local a través de este servidor, aunque la compatibilidad no está garantizada para todas las funciones:',
          numberedItems: [
            'Haz clic en la pestaña Local Server (el icono "<->") en la barra lateral izquierda.',
            'Selecciona un modelo en el menú desplegable de la parte superior.',
            'Haz clic en "Start Server". El servidor se inicia en http://localhost:1234.',
            'Tu aplicación debe establecer `base_url = "http://localhost:1234/v1"` y cualquier cadena como clave de API (el servidor acepta cualquier valor).',
          ],
        },
        localServerCode: {
          title: 'Conectar con LM Studio mediante Python',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'LM Studio vs Ollama: ¿cuál debes usar?',
          rows: [
            { 'Factor': 'Interfaz', 'LM Studio': 'Aplicación de escritorio gráfica', 'Ollama': 'Terminal + API' },
            { 'Factor': 'Fuente de modelos', 'LM Studio': 'Hugging Face (muchos modelos GGUF)', 'Ollama': 'Biblioteca de Ollama (curada)' },
            { 'Factor': 'Puerto de API', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Factor': 'Gestión de modelos', 'LM Studio': 'Navegador GUI con info de tamaño de archivo', 'Ollama': 'Comandos CLI (ollama pull, list, rm)' },
            { 'Factor': 'Automatización', 'LM Studio': 'Orientada a GUI; API local y CLI lms disponibles', 'Ollama': 'Orientado a CLI (scripting, Docker, CI)' },
            { 'Factor': 'Ideal para', 'LM Studio': 'Principiantes, usuarios de GUI, exploración de modelos', 'Ollama': 'Desarrolladores, automatización, despliegues en servidor' },
          ],
          columns: ['Factor', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Solución de problemas comunes en LM Studio',
          faqs: [
            { q: '¿Cómo instalo LM Studio en Ubuntu o Linux Mint?', a: 'Descarga el archivo .AppImage desde lmstudio.ai, hazlo ejecutable con `chmod +x LM-Studio-*.AppImage` y ejecútalo directamente. No hace falta instalarlo en el sistema ni usar apt, así que el procedimiento es el mismo en Ubuntu, Linux Mint y otras distribuciones derivadas de Debian. El requisito mínimo es Ubuntu 20.04 o posterior; se recomienda Ubuntu 22.04.' },
            { q: '¿Dónde está el .exe de LM Studio para Windows?', a: 'El instalador se llama LM-Studio-Setup.exe y se descarga desde lmstudio.ai eligiendo Windows. Al ejecutarlo, LM Studio queda instalado en %LOCALAPPDATA%\\LM-Studio.' },
            { q: '¿Cómo instalo LM Studio en Mac?', a: 'Descarga el archivo .dmg desde lmstudio.ai, ábrelo y arrastra LM Studio a la carpeta Aplicaciones. La primera vez que lo abras, macOS mostrará un aviso de seguridad: apruébalo en Preferencias del Sistema → Privacidad y Seguridad. Se requiere macOS 14.0 o posterior.' },
            { q: '¿Se llama LM Studio o LLM Studio?', a: 'El nombre correcto es LM Studio, sin la segunda L. "LLM Studio", "LMStudio" y "LM Estudio" son variantes que mucha gente escribe al buscarlo, pero el producto y su web oficial son LM Studio ([lmstudio.ai](https://lmstudio.ai)). Si buscas el instalador con otro nombre puede que no llegues a la descarga oficial, así que conviene comprobar el dominio antes de descargar nada.' },
            { q: 'LM Studio muestra "Not enough memory to load model"', a: 'El modelo requiere más RAM de la disponible. Cierra otras aplicaciones para liberar memoria o selecciona una cuantización menor (Q3_K_S en lugar de Q4_K_M). Como regla general: multiplica el tamaño del archivo del modelo por 1.2 para estimar la RAM necesaria. Un archivo de 4.5 GB necesita ~5.4 GB de RAM libre.' },
            { q: 'El modelo genera texto muy lentamente (menos de 5 tokens/seg)', a: 'El modelo está ejecutándose completamente en CPU. Comprueba GPU Layers en el panel derecho -- si muestra 0, tu GPU no se está usando. En macOS, LM Studio activa Metal (GPU) automáticamente para Apple Silicon. En Windows/Linux con NVIDIA, asegúrate de tener el driver actualizado y aumenta GPU Layers al valor máximo que se muestre.' },
            { q: 'No encuentro un modelo específico en la búsqueda de LM Studio', a: 'LM Studio busca archivos GGUF en Hugging Face. Si un modelo no aparece, intenta buscar directamente por el nombre del repositorio de Hugging Face (por ejemplo, "bartowski/Llama-3.1-8B-Instruct-GGUF"). Es posible que algunos modelos más recientes aún no estén indexados.' },
            { q: 'El servidor local devuelve errores "model not found"', a: 'Es necesario que haya un modelo cargado en la pestaña Local Server antes de que el servidor pueda responder. Abre la pestaña Local Server, selecciona un modelo en el menú desplegable y haz clic en Start Server. El nombre del modelo en las solicitudes de API puede ser cualquier cadena -- LM Studio usa el modelo que esté cargado en ese momento.' },
            { q: '¿Cómo descargo LM Studio?', a: 'Ve a lmstudio.ai y haz clic en el botón de descarga para tu sistema operativo. Disponible para macOS (Apple Silicon), Windows y Linux (AppImage).' },
            { q: '¿Cuáles son los requisitos mínimos para LM Studio?', a: 'Apple Silicon con macOS 14.0 o posterior, Windows x64 (AVX2) o ARM64, o Ubuntu 20.04 o posterior; se recomiendan 16 GB de RAM (con 8 GB, solo modelos pequeños). No se requiere GPU -- los Mac con Apple Silicon y las GPU NVIDIA/AMD son compatibles para acelerar la inferencia.' },
            { q: '¿Cómo busco y descargo modelos en LM Studio?', a: 'Haz clic en la pestaña Search (lupa) en la barra lateral, busca el nombre del modelo (por ejemplo, "llama 3.1"), selecciona un nivel de cuantización (Q4_K_M para 8 GB de RAM) y haz clic en la flecha de descarga.' },
            { q: '¿Qué cuantización debo usar en LM Studio con 8 GB de RAM?', a: 'Q4_K_M es la cuantización recomendada para sistemas con 8 GB de RAM. Ofrece el mejor equilibrio entre calidad del modelo y uso de memoria para modelos 7B (~4.5 GB de tamaño de archivo).' },
            { q: '¿LM Studio incluye una API compatible con OpenAI?', a: 'Sí. Activa la pestaña Local Server en LM Studio para iniciar una API compatible con OpenAI en http://localhost:1234. Muchas apps con el SDK de OpenAI pueden conectarse usando esta URL como base_url, pero la compatibilidad es parcial: prueba las funciones que necesitas.' },
            { q: '¿En qué se diferencia LM Studio de Ollama?', a: 'LM Studio prioriza la interfaz gráfica: explora modelos, gestiona ajustes y chatea desde una interfaz visual. Ollama prioriza la línea de comandos: configuración más rápida para desarrolladores, pero requiere comandos de terminal. LM Studio ejecuta modelos GGUF con llama.cpp (y MLX en Apple Silicon); Ollama también admite llama.cpp como backend.' },
            { q: '¿Puedo usar LM Studio en Linux?', a: 'Sí. Descarga el archivo .AppImage desde lmstudio.ai. Hazlo ejecutable: chmod +x LM-Studio-*.AppImage y ejecútalo. No se necesita instalación en el sistema -- funciona como app portátil.' },
            { q: '¿LM Studio es gratuito?', a: 'Según el fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio es gratuito para uso personal y laboral desde julio de 2025. Lo desarrolla Element Labs, Inc.; solo el nivel Enterprise/Teams, aparte, es de pago. Las condiciones pueden cambiar: consulta los términos vigentes en [lmstudio.ai](https://lmstudio.ai). Los modelos que descargues se rigen por sus propias licencias, que pueden limitar ciertos usos (por ejemplo, el comercial).' },
            { q: '¿Cómo activo la aceleración GPU en LM Studio?', a: 'En NVIDIA: asegúrate de tener los drivers CUDA instalados. En AMD: se requiere ROCm. En Apple Silicon: Metal se usa automáticamente. Ve a Configuración → GPU en LM Studio para verificar que la GPU está detectada y que las capas se están descargando.' },
            { q: '¿Cuál es la diferencia entre Q4_K_M y Q5_K_M en LM Studio?', a: 'Q4_K_M usa cuantización de 4 bits (~4.5 GB para 7B) con una pérdida de calidad normalmente pequeña, que depende del modelo y de la cuantización. Q5_K_M usa 5 bits (~5.7 GB) con pérdida mínima. Usa Q4_K_M para 8 GB de RAM; Q5_K_M o Q6_K para sistemas con 16 GB de RAM.' },
          ],
        },
        nextSteps: {
          title: 'Próximos pasos tras instalar LM Studio',
          content: 'Con LM Studio funcionando, prueba [Ejecuta tu primer LLM local](/es/local-llms/run-first-local-llm) para entender qué calidad de respuesta y velocidad esperar. Para recomendaciones de modelos adaptadas a tu hardware, consulta [Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models). Si quieres solucionar problemas de configuración, consulta [Solución de problemas de configuración de LLM local](/es/local-llms/troubleshooting-local-llm-setup).',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '**Sitio oficial de LM Studio** -- Descargas y documentación',
            '**Hugging Face Model Hub** -- Amplia gama de modelos cuantizados GGUF',
            '**LM Studio en GitHub** -- SDK, CLI y seguimiento de errores (el código fuente de la aplicación de escritorio no se publica allí)',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes al instalar LM Studio',
          items: [
            'No asignar suficiente RAM del sistema para el modelo seleccionado en la configuración de LM Studio.',
            'Usar un modelo pre-cuantizado que sigue siendo demasiado grande para la VRAM de tu GPU.',
            'Esperar respuestas instantáneas de modelos grandes en sistemas solo CPU -- el tiempo de respuesta será de 10 a 30 segundos.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[¿Qué son los LLMs locales?](/es/local-llms/what-are-local-llms) -- Conceptos y componentes clave',
            '[Ejecuta tu primer LLM local](/es/local-llms/run-first-local-llm) -- Próximos pasos tras la instalación',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Alternativa basada en terminal a LM Studio',
            '[Mejores modelos LLM locales para principiantes](/es/local-llms/best-beginner-local-llm-models) -- Recomendaciones de modelos por hardware',
            '[Mejores LLMs locales para programación 2026](/es/local-llms/best-local-llms-for-coding) — Comparativa Qwen3-Coder vs DeepSeek',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/es/local-llms/how-to-install-lm-studio',
        'headline': 'Instalar LM Studio: configuración de interfaz gráfica para macOS, Windows y Linux',
        'description': 'Instala LM Studio en macOS, Windows o Linux: descarga oficial, un paso por sistema y qué modelos caben en 8, 12, 16 y 24 GB de VRAM de tu GPU.',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'LM Studio' },
          { '@type': 'Thing', 'name': 'instalación de LLM local' },
          { '@type': 'Thing', 'name': 'modelo GGUF' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
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
            'name': '¿Cómo instalo LM Studio en Ubuntu o Linux Mint?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Descarga el archivo .AppImage desde lmstudio.ai, hazlo ejecutable con `chmod +x LM-Studio-*.AppImage` y ejecútalo directamente. No hace falta instalarlo en el sistema ni usar apt, así que el procedimiento es el mismo en Ubuntu, Linux Mint y otras distribuciones derivadas de Debian. El requisito mínimo es Ubuntu 20.04 o posterior; se recomienda Ubuntu 22.04.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Dónde está el .exe de LM Studio para Windows?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El instalador se llama LM-Studio-Setup.exe y se descarga desde lmstudio.ai eligiendo Windows. Al ejecutarlo, LM Studio queda instalado en %LOCALAPPDATA%\\LM-Studio.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo instalo LM Studio en Mac?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Descarga el archivo .dmg desde lmstudio.ai, ábrelo y arrastra LM Studio a la carpeta Aplicaciones. La primera vez que lo abras, macOS mostrará un aviso de seguridad: apruébalo en Preferencias del Sistema → Privacidad y Seguridad. Se requiere macOS 14.0 o posterior.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Se llama LM Studio o LLM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El nombre correcto es LM Studio, sin la segunda L. "LLM Studio", "LMStudio" y "LM Estudio" son variantes que mucha gente escribe al buscarlo, pero el producto y su web oficial son LM Studio ([lmstudio.ai](https://lmstudio.ai)). Si buscas el instalador con otro nombre puede que no llegues a la descarga oficial, así que conviene comprobar el dominio antes de descargar nada.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio muestra "Not enough memory to load model"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El modelo requiere más RAM de la disponible. Cierra otras aplicaciones para liberar memoria o selecciona una cuantización menor (Q3_K_S en lugar de Q4_K_M). Como regla general: multiplica el tamaño del archivo del modelo por 1.2 para estimar la RAM necesaria. Un archivo de 4.5 GB necesita ~5.4 GB de RAM libre.',
            },
          },
          {
            '@type': 'Question',
            'name': 'El modelo genera texto muy lentamente (menos de 5 tokens/seg)',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El modelo está ejecutándose completamente en CPU. Comprueba GPU Layers en el panel derecho -- si muestra 0, tu GPU no se está usando. En macOS, LM Studio activa Metal (GPU) automáticamente para Apple Silicon. En Windows/Linux con NVIDIA, asegúrate de tener el driver actualizado y aumenta GPU Layers al valor máximo que se muestre.',
            },
          },
          {
            '@type': 'Question',
            'name': 'No encuentro un modelo específico en la búsqueda de LM Studio',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio busca archivos GGUF en Hugging Face. Si un modelo no aparece, intenta buscar directamente por el nombre del repositorio de Hugging Face (por ejemplo, "bartowski/Llama-3.1-8B-Instruct-GGUF"). Es posible que algunos modelos más recientes aún no estén indexados.',
            },
          },
          {
            '@type': 'Question',
            'name': 'El servidor local devuelve errores "model not found"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Es necesario que haya un modelo cargado en la pestaña Local Server antes de que el servidor pueda responder. Abre la pestaña Local Server, selecciona un modelo en el menú desplegable y haz clic en Start Server. El nombre del modelo en las solicitudes de API puede ser cualquier cadena -- LM Studio usa el modelo que esté cargado en ese momento.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo descargo LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ve a lmstudio.ai y haz clic en el botón de descarga para tu sistema operativo. Disponible para macOS (Apple Silicon), Windows y Linux (AppImage).',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son los requisitos mínimos para LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Apple Silicon con macOS 14.0 o posterior, Windows x64 (AVX2) o ARM64, o Ubuntu 20.04 o posterior; se recomiendan 16 GB de RAM (con 8 GB, solo modelos pequeños). No se requiere GPU -- los Mac con Apple Silicon y las GPU NVIDIA/AMD son compatibles para acelerar la inferencia.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo busco y descargo modelos en LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Haz clic en la pestaña Search (lupa) en la barra lateral, busca el nombre del modelo (por ejemplo, "llama 3.1"), selecciona un nivel de cuantización (Q4_K_M para 8 GB de RAM) y haz clic en la flecha de descarga.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué cuantización debo usar en LM Studio con 8 GB de RAM?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M es la cuantización recomendada para sistemas con 8 GB de RAM. Ofrece el mejor equilibrio entre calidad del modelo y uso de memoria para modelos 7B (~4.5 GB de tamaño de archivo).',
            },
          },
          {
            '@type': 'Question',
            'name': '¿LM Studio incluye una API compatible con OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Activa la pestaña Local Server en LM Studio para iniciar una API compatible con OpenAI en http://localhost:1234. Muchas apps con el SDK de OpenAI pueden conectarse usando esta URL como base_url, pero la compatibilidad es parcial: prueba las funciones que necesitas.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿En qué se diferencia LM Studio de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio prioriza la interfaz gráfica: explora modelos, gestiona ajustes y chatea desde una interfaz visual. Ollama prioriza la línea de comandos: configuración más rápida para desarrolladores, pero requiere comandos de terminal. LM Studio ejecuta modelos GGUF con llama.cpp (y MLX en Apple Silicon); Ollama también admite llama.cpp como backend.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar LM Studio en Linux?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Descarga el archivo .AppImage desde lmstudio.ai. Hazlo ejecutable: chmod +x LM-Studio-*.AppImage y ejecútalo. No se necesita instalación en el sistema -- funciona como app portátil.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿LM Studio es gratuito?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Según el fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio es gratuito para uso personal y laboral desde julio de 2025. Lo desarrolla Element Labs, Inc.; solo el nivel Enterprise/Teams, aparte, es de pago. Las condiciones pueden cambiar: consulta los términos vigentes en [lmstudio.ai](https://lmstudio.ai). Los modelos que descargues se rigen por sus propias licencias, que pueden limitar ciertos usos (por ejemplo, el comercial).',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo activo la aceleración GPU en LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En NVIDIA: asegúrate de tener los drivers CUDA instalados. En AMD: se requiere ROCm. En Apple Silicon: Metal se usa automáticamente. Ve a Configuración → GPU en LM Studio para verificar que la GPU está detectada y que las capas se están descargando.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre Q4_K_M y Q5_K_M en LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M usa cuantización de 4 bits (~4.5 GB para 7B) con una pérdida de calidad normalmente pequeña, que depende del modelo y de la cuantización. Q5_K_M usa 5 bits (~5.7 GB) con pérdida mínima. Usa Q4_K_M para 8 GB de RAM; Q5_K_M o Q6_K para sistemas con 16 GB de RAM.',
            },
          },
        ]
      },
    },
    ar: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'Getting Started',
      title: 'تثبيت ⁨LM Studio⁩: إعداد الواجهة الرسومية لـ ⁨macOS⁩ و ⁨Windows⁩ و ⁨Linux⁩',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-ar.webp',
      seoTitle: 'تثبيت LM Studio: التنزيل والإعداد والنماذج حسب GPU',
      intro: 'LM Studio تطبيق سطح مكتب يتيح لك استكشاف نماذج LLM المحلية وتنزيلها وتشغيلها عبر واجهة رسومية، دون الحاجة إلى أوامر في الطرفية. يعمل على macOS و Windows و Linux، ويتضمن واجهة محادثة مدمجة وخادمًا محليًا متوافقًا مع OpenAI. يدعم LM Studio كثيرًا من نماذج GGUF المُكمّمة من Hugging Face، وقد لا تُحمَّل النماذج ذات البنية غير المدعومة.',
      metaDescription: 'ثبّت LM Studio على Windows أو macOS أو Linux: رابط التنزيل الرسمي وخطوة لكل نظام والنماذج المناسبة لذاكرة VRAM بسعة 8 و12 و16 و24 GB.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio تطبيق سطح مكتب يتيح لك استكشاف نماذج LLM المحلية وتنزيلها وتشغيلها عبر واجهة رسومية، دون الحاجة إلى أوامر في الطرفية. يعمل على macOS و Windows و Linux، ويتضمن واجهة محادثة مدمجة وخادمًا محليًا متوافقًا مع OpenAI.**',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على أجهزة استهلاكية',
      readTime: '7 دقائق للقراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'التنزيل والتثبيت: خطوة لكل نظام', anchor: '#download-install-quick' },
        { label: 'أي نموذج يناسب بطاقة GPU لديك', anchor: '#models-by-gpu' },
        { label: 'ما هو LM Studio؟', anchor: '#what-is-lm-studio' },
        { label: 'متطلبات النظام', anchor: '#system-requirements' },
        { label: 'التنزيل والتثبيت', anchor: '#download-and-install' },
        { label: 'البحث عن نموذج وتنزيله', anchor: '#find-and-download-a-model' },
        { label: 'بدء المحادثة', anchor: '#start-chatting' },
        { label: 'تفعيل الخادم المحلي', anchor: '#enable-the-local-server' },
        { label: 'LM Studio مقابل Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'حل المشكلات', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studio هو تطبيق سطح مكتب لـ macOS وWindows وLinux يتيح لك تصفح وتنزيل والدردشة مع كثير من نماذج GGUF المُكمَّمة من Hugging Face (وقد لا تُحمَّل النماذج ذات البنية غير المدعومة) عبر واجهة رسومية، دون أوامر طرفية ومع خادم محلي متوافق مع OpenAI مدمج. بحسب الجهة المطوِّرة، الاستخدام مجاني، لكن الشروط قد تتغير.' },
            { type: 'plain-terms', text: 'إذا كنت لا تريد استخدام سطر الأوامر، فإن LM Studio هو الطريقة السهلة لتشغيل نماذج الذكاء الاصطناعي على جهازك الخاص بنقرات فقط. نزّل التطبيق، ابحث عن نموذج بالاسم داخله، انقر على تنزيل، وابدأ الدردشة -- تستغرق العملية بأكملها أقل من 5 دقائق وتتضمن خادماً مدمجاً لتتمكن تطبيقات أخرى من استخدامه أيضاً.' },
          ],
          items: [
            'نزّل LM Studio من lmstudio.ai -- متاح لـ macOS (Apple Silicon) و Windows و Linux (AppImage).',
            'المتطلبات: macOS 14.0+ مع Apple Silicon أو Windows x64 (مع AVX2) أو ARM64 أو Ubuntu 20.04+؛ ويوصى بذاكرة RAM بسعة 16 GB. تستخدم أجهزة Mac بـ Apple Silicon تسريع GPU افتراضيًا.',
            'يبحث متصفح النماذج المدمج مباشرةً في Hugging Face -- نزّل نماذج GGUF دون مغادرة التطبيق.',
            'يتضمن LM Studio واجهة محادثة مدمجة وخادمًا محليًا متوافقًا مع OpenAI على المنفذ 1234.',
            'مثالي لـ: المبتدئين الذين يفضّلون واجهة رسومية، والمستخدمين الذين يريدون مقارنة عدة نماذج بالتوازي، وكل من يريد حزمة كاملة دون أوامر طرفية.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'تنزيل LM Studio وتثبيته: خطوة لكل نظام',
          content: '**نزّل LM Studio من [صفحة التنزيل الرسمية](https://lmstudio.ai/download) ثم اتبع خطوة التثبيت الخاصة بنظامك.** يحتاج إلى Apple Silicon مع macOS 14.0 أو أحدث، أو حاسوب Windows بمعالج x64 (مع AVX2) أو ARM64، أو Ubuntu 20.04 أو أحدث، ويوصى بذاكرة RAM بسعة 16 GB (راجع [جدول المتطلبات](#system-requirements)). بحسب الجهة المطوِّرة ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))، الاستخدام مجاني، لكن الشروط قد تتغير.',
          items: [
          '**macOS:** افتح ملف .dmg الذي نزّلته واسحب LM Studio إلى مجلد Applications.',
          '**Windows:** شغّل ملف التثبيت الذي نزّلته واتبع التعليمات.',
          '**Linux:** امنح ملف AppImage صلاحية التنفيذ بالأمر `chmod +x LM-Studio-*.AppImage` ثم شغّله.',
          ],
          note: 'لا توجد نسخة لأجهزة Mac بمعالج Intel. بعد أول تشغيل ابحث عن نموذج داخل التطبيق (الخطوات أدناه).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'أي نموذج يناسب بطاقة GPU لديك',
          content: '**اختر النموذج بحسب ذاكرة GPU: سعة 8 GB من VRAM تناسب نماذج 7–8B، و12 GB تناسب 14B، و16 GB تناسب 24B، و24 GB تناسب 27–32B، أما نموذج 70B فيحتاج نحو 40 GB.** الأحجام تقديرات تقريبية لتكميم Q4_K_M مأخوذة من [دليل عتاد النماذج المحلية](/ar/local-llms/local-llm-hardware-guide) لدى PromptQuorum، وفيه أيضًا وحدات GPU والأسعار والسرعات. في Apple Silicon تعمل الذاكرة الموحدة عمل VRAM.',
          itemHeadings: true,
          columns: ['VRAM لديك', 'النماذج المناسبة', 'أمثلة', 'الحجم عند Q4_K_M'],
          rows: [
          { 'VRAM لديك': '8 GB', 'النماذج المناسبة': '7–8B', 'أمثلة': 'Llama 3.1 8B, Qwen3 8B', 'الحجم عند Q4_K_M': '~5 GB' },
          { 'VRAM لديك': '12 GB', 'النماذج المناسبة': '14B', 'أمثلة': 'Qwen3 14B', 'الحجم عند Q4_K_M': '~9 GB' },
          { 'VRAM لديك': '16 GB', 'النماذج المناسبة': '24B', 'أمثلة': 'Mistral Small 3.1 24B', 'الحجم عند Q4_K_M': '~14 GB' },
          { 'VRAM لديك': '24 GB', 'النماذج المناسبة': '27–32B', 'أمثلة': 'Qwen3.6 27B, DeepSeek-R1 32B', 'الحجم عند Q4_K_M': '~16–19 GB' },
          { 'VRAM لديك': '40 GB+', 'النماذج المناسبة': '70B', 'أمثلة': 'Llama 3.3 70B', 'الحجم عند Q4_K_M': '~40 GB' },
          ],
          note: 'تقديرات وليست قياسات أجرتها PromptQuorum. تجد معادلة الأحجام في [دليل VRAM](/ar/local-llms/how-much-vram-local-llm).',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: 'ما هو LM Studio؟',
          content: [
            '**LM Studio تطبيق سطح مكتب لتشغيل نماذج LLM المحلية.** يوفر متصفح نماذج رسوميًا وواجهة محادثة مدمجة وخادم API محلي، كلها في تطبيق واحد. ويشغّل داخليًا نماذج GGUF باستخدام llama.cpp (وباستخدام MLX على Apple Silicon)، وهو محرك مفتوح المصدر يدعمه [Ollama](/ar/local-llms/how-to-install-ollama) أيضًا كواجهة خلفية.',
            'الفرق الأساسي عن Ollama هو أن LM Studio مرئي بالكامل. تستكشف النماذج وتنزّلها من واجهة التطبيق، وتبدأ المحادثات بنقرة واحدة، وتضبط الإعدادات بأشرطة تمرير بدلًا من ملفات التهيئة.',
            'بحسب الجهة المطوِّرة ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))، LM Studio مجاني للاستخدام الشخصي والمهني منذ يوليو 2025. تطوّره Element Labs, Inc. واعتبارًا من 2026، يدعم تسريع NVIDIA CUDA و AMD ROCm و Apple Metal.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'ما متطلبات النظام لـ LM Studio؟',
          rows: [
            { 'المواصفة': 'نظام التشغيل', 'الحد الأدنى': 'macOS 14.0+ وWindows x64 (مع AVX2) أو ARM64 وUbuntu 20.04+', 'الموصى به': 'Ubuntu 22.04 (الأحدث: أقل اختبارًا)' },
            { 'المواصفة': 'RAM', 'الحد الأدنى': 'لا حد أدنى ثابت (Mac بسعة 8 GB: نماذج صغيرة)', 'الموصى به': '16 GB أو أكثر' },
            { 'المواصفة': 'التخزين', 'الحد الأدنى': 'التطبيق ومساحة لكل نموذج', 'الموصى به': '50 GB+ فارغة لعدة نماذج' },
            { 'المواصفة': 'GPU (اختياري)', 'الحد الأدنى': 'اختياري (Windows: VRAM مخصصة 4 GB+)', 'الموصى به': 'Apple Silicon أو NVIDIA/AMD بذاكرة VRAM كافية' },
          ],
          columns: ['المواصفة', 'الحد الأدنى', 'الموصى به'],
        },
        download: {
          id: 'download-and-install',
          title: 'كيف تنزّل LM Studio وتثبّته؟',
          numberedItems: [
            'اذهب إلى lmstudio.ai وانقر زر التنزيل لنظام تشغيلك.',
            'macOS: افتح ملف .dmg واسحب LM Studio إلى مجلد التطبيقات. عند أول تشغيل، وافق على تنبيه الأمان في تفضيلات النظام ← الخصوصية والأمان.',
            'Windows: شغّل المثبّت LM-Studio-Setup.exe. يُثبَّت LM Studio في %LOCALAPPDATA%\\LM-Studio.',
            'Linux: نزّل ملف .AppImage. اجعله قابلًا للتنفيذ بـ `chmod +x LM-Studio-*.AppImage` وشغّله. لا حاجة لتثبيت على النظام.',
            'عند أول تشغيل، يعرض LM Studio شاشة ترحيب ويطلب منك تنزيل نموذج.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'مسار تثبيت LM Studio: التنزيل من lmstudio.ai، والتثبيت على macOS أو Windows أو Linux، والبحث عن نموذج GGUF في Hugging Face، واختيار تكميم Q4_K_M (~4.5 GB)، وبدء المحادثة خلال 5-30 ثانية.',
        },
        findModel: {
          id: 'find-and-download-a-model',
          title: 'كيف تبحث عن نموذج وتنزّله في LM Studio؟',
          content: 'استخدم تبويب البحث (أيقونة العدسة في الشريط الجانبي الأيسر) للعثور على النماذج:',
          numberedItems: [
            'انقر تبويب Search في الشريط الجانبي الأيسر.',
            'اكتب اسم نموذج، مثل "llama 3.1" أو "phi-3 mini".',
            'يعرض LM Studio نماذج GGUF المطابقة من Hugging Face مع أحجام الملفات وخيارات التكميم.',
            'اختر مستوى تكميم. لـ 8 GB من RAM: اختر Q4_K_M (~4.5 GB لنموذج 7B). لـ 16 GB من RAM: يقدّم Q5_K_M أو Q6_K جودة أفضل.',
            'انقر سهم التنزيل. يظهر التقدم في تبويب Downloads.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'دليل التكميم حسب سعة RAM في LM Studio: 8 GB من RAM تناسب Q4_K_M (~4.5 GB، فقدان جودة صغير عادةً)؛ و16 GB من RAM تناسب Q5_K_M أو Q6_K (~5.7-6.5 GB، فقدان شبه معدوم) مع مساحة إضافية لسياق 8K+ من الرموز.',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'كيف تبدأ المحادثة مع نموذج في LM Studio؟',
          numberedItems: [
            'انقر تبويب Chat (أيقونة الفقاعة) في الشريط الجانبي الأيسر.',
            'في أعلى نافذة المحادثة، انقر القائمة المنسدلة لمحدد النموذج واختر النموذج المنزَّل.',
            'يحمّل LM Studio النموذج في الذاكرة -- يستغرق ذلك بين 5 و30 ثانية حسب حجم النموذج والأجهزة.',
            'اكتب رسالتك في حقل الإدخال أسفل النافذة واضغط Enter أو انقر إرسال.',
            'تُبثّ استجابة النموذج token تلو الآخر. وتظهر سرعة التوليد في شريط الحالة أسفل النافذة.',
          ],
        },
        modelSettings: {
          title: 'كيف تضبط إعدادات النموذج في LM Studio؟',
          content: 'يكشف اللوحة اليمنى في تبويب Chat معاملات الاستدلال الرئيسية:',
          items: [
            '**Temperature** (افتراضيًا 0.8): يتحكم في عشوائية الاستجابات. القيم المنخفضة (0.1-0.4) تنتج مخرجات أكثر تركيزًا وقابلية للتنبؤ. والقيم العالية (0.8-1.2) تنتج مخرجات أكثر تنوعًا وإبداعًا.',
            '**Context Length** (افتراضيًا 4096 token): الحد الأقصى لسجل المحادثة الذي يستطيع النموذج معالجته. السياق الأطول يستخدم RAM أكثر. تدعم معظم نماذج 7B بين 4096 و8192 token.',
            '**GPU Layers** (macOS/Linux/Windows مع GPU): عدد طبقات النموذج التي تُنزَّل إلى GPU. اضبطها على الحد الأقصى لأسرع استدلال إذا كان لدى GPU ما يكفي من VRAM.',
            '**System Prompt**: تعليمة دائمة تُضاف قبل كل محادثة. استخدمها لتحديد دور النموذج أو سلوكه.',
          ],
        },
        localServer: {
          id: 'enable-the-local-server',
          title: 'كيف تفعّل الخادم المحلي لـ LM Studio؟',
          content: 'يتضمن LM Studio خادمًا محليًا يحاكي API الخاص بـ OpenAI. ويمكن لكثير من التطبيقات المبنية لواجهة OpenAI استخدام نموذجك المحلي عبر هذا الخادم، دون ضمان توافق كامل مع كل الميزات:',
          numberedItems: [
            'انقر تبويب Local Server (أيقونة "<->") في الشريط الجانبي الأيسر.',
            'اختر نموذجًا من القائمة المنسدلة في الأعلى.',
            'انقر "Start Server". يبدأ الخادم على http://localhost:1234.',
            'يجب أن يضبط تطبيقك `base_url = "http://localhost:1234/v1"` وأي نص كمفتاح API (يقبل الخادم أي قيمة).',
          ],
        },
        localServerCode: {
          title: 'الاتصال بـ LM Studio عبر Python',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'LM Studio مقابل Ollama: أيهما تستخدم؟',
          rows: [
            { 'العامل': 'الواجهة', 'LM Studio': 'تطبيق سطح مكتب رسومي', 'Ollama': 'طرفية + API' },
            { 'العامل': 'مصدر النماذج', 'LM Studio': 'Hugging Face (كثير من نماذج GGUF)', 'Ollama': 'مكتبة Ollama (منتقاة)' },
            { 'العامل': 'منفذ API', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'العامل': 'إدارة النماذج', 'LM Studio': 'متصفح GUI بمعلومات حجم الملف', 'Ollama': 'أوامر CLI (ollama pull, list, rm)' },
            { 'العامل': 'الأتمتة', 'LM Studio': 'موجّه للواجهة الرسومية؛ API محلي وأداة lms متاحان', 'Ollama': 'موجّه لسطر الأوامر (برمجة نصية، Docker، CI)' },
            { 'العامل': 'مثالي لـ', 'LM Studio': 'المبتدئين ومستخدمي الواجهة الرسومية واستكشاف النماذج', 'Ollama': 'المطورين والأتمتة وعمليات نشر الخوادم' },
          ],
          columns: ['العامل', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'حل المشكلات الشائعة في LM Studio',
          faqs: [
            { q: 'يعرض LM Studio "Not enough memory to load model"', a: 'يتطلب النموذج RAM أكثر من المتاحة. أغلق تطبيقات أخرى لتحرير الذاكرة أو اختر تكميمًا أقل (Q3_K_S بدلًا من Q4_K_M). كقاعدة عامة: اضرب حجم ملف النموذج في 1.2 لتقدير RAM اللازمة. يحتاج ملف بسعة 4.5 GB إلى ~5.4 GB من RAM المتاحة.' },
            { q: 'يولّد النموذج النص ببطء شديد (أقل من 5 tokens/ثانية)', a: 'يعمل النموذج بالكامل على CPU. تحقّق من GPU Layers في اللوحة اليمنى -- إذا أظهرت 0، فإن GPU لديك لا يُستخدم. على macOS، يفعّل LM Studio تلقائيًا Metal (GPU) لـ Apple Silicon. وعلى Windows/Linux مع NVIDIA، تأكّد من تحديث التعريف وزِد GPU Layers إلى الحد الأقصى المعروض.' },
            { q: 'لا أجد نموذجًا محددًا في بحث LM Studio', a: 'يبحث LM Studio عن ملفات GGUF في Hugging Face. إذا لم يظهر نموذج، فجرّب البحث مباشرةً باسم مستودع Hugging Face (مثل "bartowski/Llama-3.1-8B-Instruct-GGUF"). قد لا تكون بعض النماذج الأحدث مفهرسة بعد.' },
            { q: 'يعيد الخادم المحلي أخطاء "model not found"', a: 'يلزم تحميل نموذج في تبويب Local Server قبل أن يتمكن الخادم من الاستجابة. افتح تبويب Local Server، اختر نموذجًا من القائمة المنسدلة وانقر Start Server. ويمكن أن يكون اسم النموذج في طلبات API أي نص -- يستخدم LM Studio النموذج المحمّل في تلك اللحظة.' },
            { q: 'كيف أنزّل LM Studio؟', a: 'اذهب إلى lmstudio.ai وانقر زر التنزيل لنظام تشغيلك. متاح لـ macOS (Apple Silicon) و Windows و Linux (AppImage).' },
            { q: 'ما الحد الأدنى لمتطلبات LM Studio؟', a: 'Apple Silicon مع macOS 14.0 أو أحدث، أو Windows بمعالج x64 (مع AVX2) أو ARM64، أو Ubuntu 20.04 أو أحدث؛ ويوصى بذاكرة RAM بسعة 16 GB (مع 8 GB نماذج صغيرة فقط). لا حاجة لـ GPU -- أجهزة Mac بـ Apple Silicon وبطاقات NVIDIA/AMD مدعومة لتسريع الاستدلال.' },
            { q: 'كيف أبحث عن نماذج وأنزّلها في LM Studio؟', a: 'انقر تبويب Search (العدسة) في الشريط الجانبي، وابحث باسم النموذج (مثل "llama 3.1")، واختر مستوى تكميم (Q4_K_M لـ 8 GB من RAM)، وانقر سهم التنزيل.' },
            { q: 'أي تكميم أستخدم في LM Studio مع 8 GB من RAM؟', a: 'Q4_K_M هو التكميم الموصى به للأنظمة بسعة 8 GB من RAM. يقدّم أفضل توازن بين جودة النموذج واستخدام الذاكرة لنماذج 7B (~4.5 GB حجم ملف).' },
            { q: 'هل يتضمن LM Studio API متوافقًا مع OpenAI؟', a: 'نعم. فعّل تبويب Local Server في LM Studio لبدء API متوافق مع OpenAI على http://localhost:1234. ويمكن لكثير من التطبيقات التي تستخدم SDK الخاص بـ OpenAI الاتصال باستخدام هذا العنوان كـ base_url، لكن التوافق جزئي، لذا اختبر الميزات التي تعتمد عليها.' },
            { q: 'بماذا يختلف LM Studio عن Ollama؟', a: 'يعطي LM Studio الأولوية للواجهة الرسومية: استكشف النماذج وأدر الإعدادات وحادث من واجهة مرئية. ويعطي Ollama الأولوية لسطر الأوامر: إعداد أسرع للمطورين، لكنه يتطلب أوامر طرفية. يشغّل LM Studio نماذج GGUF عبر llama.cpp (وMLX على Apple Silicon)، ويدعم Ollama أيضًا llama.cpp كواجهة خلفية.' },
            { q: 'هل يمكنني استخدام LM Studio على Linux؟', a: 'نعم. نزّل ملف .AppImage من lmstudio.ai. اجعله قابلًا للتنفيذ: chmod +x LM-Studio-*.AppImage وشغّله. لا حاجة لتثبيت على النظام -- يعمل كتطبيق محمول.' },
            { q: 'هل LM Studio مجاني؟', a: 'بحسب الجهة المطوِّرة ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))، LM Studio مجاني للاستخدام الشخصي والمهني منذ يوليو 2025. تطوّره Element Labs, Inc.، ولا تُدفع سوى فئة Enterprise/Teams المنفصلة. قد تتغير الشروط، لذا راجع الشروط الحالية على [lmstudio.ai](https://lmstudio.ai). وتخضع النماذج التي تنزّلها لتراخيصها الفردية.' },
            { q: 'كيف أفعّل تسريع GPU في LM Studio؟', a: 'على NVIDIA: تأكّد من تثبيت تعريفات CUDA. على AMD: يلزم ROCm. على Apple Silicon: يُستخدم Metal تلقائيًا. اذهب إلى الإعدادات ← GPU في LM Studio للتحقق من اكتشاف GPU ومن أن الطبقات تُنزَّل.' },
            { q: 'ما الفرق بين Q4_K_M و Q5_K_M في LM Studio؟', a: 'يستخدم Q4_K_M تكميم 4 بت (~4.5 GB لـ 7B) بفقدان جودة صغير عادةً ويتوقف على النموذج والتكميم. ويستخدم Q5_K_M 5 بت (~5.7 GB) بفقدان ضئيل. استخدم Q4_K_M لـ 8 GB من RAM؛ و Q5_K_M أو Q6_K للأنظمة بسعة 16 GB من RAM.' },
          ],
        },
        nextSteps: {
          title: 'الخطوات التالية بعد تثبيت LM Studio',
          content: 'بعد تشغيل LM Studio، جرّب [شغّل أول نموذج LLM محلي لديك](/ar/local-llms/run-first-local-llm) لفهم جودة الاستجابة والسرعة المتوقعة. وللحصول على توصيات نماذج مناسبة لجهازك، راجع [أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models). وإذا أردت حل مشكلات الإعداد، راجع [حل مشكلات إعداد LLM المحلي](/ar/local-llms/troubleshooting-local-llm-setup).',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '**الموقع الرسمي لـ LM Studio** -- التنزيلات والتوثيق',
            '**Hugging Face Model Hub** -- نطاق واسع من النماذج المُكمّمة GGUF',
            '**LM Studio على GitHub** -- حزم SDK وواجهة سطر الأوامر ومتتبّع الأخطاء (الكود المصدري لتطبيق سطح المكتب غير منشور هناك)',
          ],
        },
        commonMistakes: {
          title: 'أخطاء شائعة عند تثبيت LM Studio',
          items: [
            'عدم تخصيص ما يكفي من RAM النظام للنموذج المحدد في إعدادات LM Studio.',
            'استخدام نموذج مُكمّم مسبقًا لا يزال كبيرًا جدًا على VRAM الخاصة بـ GPU لديك.',
            'توقع استجابات فورية من النماذج الكبيرة على أنظمة CPU فقط -- سيكون زمن الاستجابة من 10 إلى 30 ثانية.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[ما هي نماذج LLM المحلية؟](/ar/local-llms/what-are-local-llms) -- المفاهيم والمكونات الأساسية',
            '[شغّل أول نموذج LLM محلي لديك](/ar/local-llms/run-first-local-llm) -- الخطوات التالية بعد التثبيت',
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- بديل قائم على الطرفية لـ LM Studio',
            '[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- توصيات نماذج حسب الجهاز',
            '[أفضل نماذج LLM المحلية للبرمجة 2026](/ar/local-llms/best-local-llms-for-coding) — مقارنة Qwen3-Coder مقابل DeepSeek',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/ar/local-llms/how-to-install-lm-studio',
        'headline': 'تثبيت ⁨LM Studio⁩: إعداد الواجهة الرسومية لـ ⁨macOS⁩ و ⁨Windows⁩ و ⁨Linux⁩',
        'description': 'ثبّت LM Studio على macOS أو Windows أو Linux: نزّل نموذجًا وابدأ المحادثة خلال 5 دقائق. دون طرفية. دليل للمبتدئين 2026.',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'LM Studio' },
          { '@type': 'Thing', 'name': 'تثبيت LLM محلي' },
          { '@type': 'Thing', 'name': 'نموذج GGUF' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
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
            'name': 'يعرض LM Studio "Not enough memory to load model"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يتطلب النموذج RAM أكثر من المتاحة. أغلق تطبيقات أخرى لتحرير الذاكرة أو اختر تكميمًا أقل (Q3_K_S بدلًا من Q4_K_M). كقاعدة عامة: اضرب حجم ملف النموذج في 1.2 لتقدير RAM اللازمة. يحتاج ملف بسعة 4.5 GB إلى ~5.4 GB من RAM المتاحة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'يولّد النموذج النص ببطء شديد (أقل من 5 tokens/ثانية)',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يعمل النموذج بالكامل على CPU. تحقّق من GPU Layers في اللوحة اليمنى -- إذا أظهرت 0، فإن GPU لديك لا يُستخدم. على macOS، يفعّل LM Studio تلقائيًا Metal (GPU) لـ Apple Silicon. وعلى Windows/Linux مع NVIDIA، تأكّد من تحديث التعريف وزِد GPU Layers إلى الحد الأقصى المعروض.',
            },
          },
          {
            '@type': 'Question',
            'name': 'لا أجد نموذجًا محددًا في بحث LM Studio',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يبحث LM Studio عن ملفات GGUF في Hugging Face. إذا لم يظهر نموذج، فجرّب البحث مباشرةً باسم مستودع Hugging Face (مثل "bartowski/Llama-3.1-8B-Instruct-GGUF"). قد لا تكون بعض النماذج الأحدث مفهرسة بعد.',
            },
          },
          {
            '@type': 'Question',
            'name': 'يعيد الخادم المحلي أخطاء "model not found"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يلزم تحميل نموذج في تبويب Local Server قبل أن يتمكن الخادم من الاستجابة. افتح تبويب Local Server، اختر نموذجًا من القائمة المنسدلة وانقر Start Server. ويمكن أن يكون اسم النموذج في طلبات API أي نص -- يستخدم LM Studio النموذج المحمّل في تلك اللحظة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كيف أنزّل LM Studio؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'اذهب إلى lmstudio.ai وانقر زر التنزيل لنظام تشغيلك. متاح لـ macOS (Apple Silicon) و Windows و Linux (AppImage).',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الحد الأدنى لمتطلبات LM Studio؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Apple Silicon مع macOS 14.0 أو أحدث، أو Windows بمعالج x64 (مع AVX2) أو ARM64، أو Ubuntu 20.04 أو أحدث؛ ويوصى بذاكرة RAM بسعة 16 GB (مع 8 GB نماذج صغيرة فقط). لا حاجة لـ GPU -- أجهزة Mac بـ Apple Silicon وبطاقات NVIDIA/AMD مدعومة لتسريع الاستدلال.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كيف أبحث عن نماذج وأنزّلها في LM Studio؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'انقر تبويب Search (العدسة) في الشريط الجانبي، وابحث باسم النموذج (مثل "llama 3.1")، واختر مستوى تكميم (Q4_K_M لـ 8 GB من RAM)، وانقر سهم التنزيل.',
            },
          },
          {
            '@type': 'Question',
            'name': 'أي تكميم أستخدم في LM Studio مع 8 GB من RAM؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M هو التكميم الموصى به للأنظمة بسعة 8 GB من RAM. يقدّم أفضل توازن بين جودة النموذج واستخدام الذاكرة لنماذج 7B (~4.5 GB حجم ملف).',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يتضمن LM Studio API متوافقًا مع OpenAI؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. فعّل تبويب Local Server في LM Studio لبدء API متوافق مع OpenAI على http://localhost:1234. ويمكن لكثير من التطبيقات التي تستخدم SDK الخاص بـ OpenAI الاتصال باستخدام هذا العنوان كـ base_url، لكن التوافق جزئي، لذا اختبر الميزات التي تعتمد عليها.',
            },
          },
          {
            '@type': 'Question',
            'name': 'بماذا يختلف LM Studio عن Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يعطي LM Studio الأولوية للواجهة الرسومية: استكشف النماذج وأدر الإعدادات وحادث من واجهة مرئية. ويعطي Ollama الأولوية لسطر الأوامر: إعداد أسرع للمطورين، لكنه يتطلب أوامر طرفية. يشغّل LM Studio نماذج GGUF عبر llama.cpp (وMLX على Apple Silicon)، ويدعم Ollama أيضًا llama.cpp كواجهة خلفية.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام LM Studio على Linux؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. نزّل ملف .AppImage من lmstudio.ai. اجعله قابلًا للتنفيذ: chmod +x LM-Studio-*.AppImage وشغّله. لا حاجة لتثبيت على النظام -- يعمل كتطبيق محمول.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل LM Studio مجاني؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'بحسب الجهة المطوِّرة ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))، LM Studio مجاني للاستخدام الشخصي والمهني منذ يوليو 2025. تطوّره Element Labs, Inc.، ولا تُدفع سوى فئة Enterprise/Teams المنفصلة. قد تتغير الشروط، لذا راجع الشروط الحالية على [lmstudio.ai](https://lmstudio.ai). وتخضع النماذج التي تنزّلها لتراخيصها الفردية.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كيف أفعّل تسريع GPU في LM Studio؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'على NVIDIA: تأكّد من تثبيت تعريفات CUDA. على AMD: يلزم ROCm. على Apple Silicon: يُستخدم Metal تلقائيًا. اذهب إلى الإعدادات ← GPU في LM Studio للتحقق من اكتشاف GPU ومن أن الطبقات تُنزَّل.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين Q4_K_M و Q5_K_M في LM Studio؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يستخدم Q4_K_M تكميم 4 بت (~4.5 GB لـ 7B) بفقدان جودة صغير عادةً ويتوقف على النموذج والتكميم. ويستخدم Q5_K_M 5 بت (~5.7 GB) بفقدان ضئيل. استخدم Q4_K_M لـ 8 GB من RAM؛ و Q5_K_M أو Q6_K للأنظمة بسعة 16 GB من RAM.',
            },
          },
        ]
      },
    },
    pt: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: 'Getting Started',
      title: 'Instalar LM Studio: configuração de interface gráfica para macOS, Windows e Linux',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-pt.webp',
      seoTitle: 'Instalar o LM Studio: download, passos e modelos por GPU',
      intro: 'LM Studio é um aplicativo de desktop que permite explorar, baixar e executar LLMs locais por meio de uma interface gráfica, sem necessidade de comandos no terminal. Funciona no macOS, Windows e Linux, e inclui uma interface de chat integrada e um servidor local compatível com OpenAI. O LM Studio suporta muitos modelos GGUF quantizados do Hugging Face; modelos com arquitetura não compatível podem não carregar.',
      metaDescription: 'Instale o LM Studio no Windows, macOS ou Linux: download oficial, um passo por sistema e quais modelos cabem em 8, 12, 16 e 24 GB de VRAM, sem terminal.',
      publishDate: '2026-04-04',
      dateModified: '2026-11-14',
      leadAnswerBlock: '**LM Studio é um aplicativo de desktop que permite explorar, baixar e executar LLMs locais por meio de uma interface gráfica, sem necessidade de comandos no terminal. Funciona no macOS, Windows e Linux, e inclui uma interface de chat integrada e um servidor local compatível com OpenAI.**',
      audience: 'Iniciantes executando o primeiro LLM local em hardware de consumo',
      readTime: '7 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'Baixar e instalar: um passo por sistema', anchor: '#download-install-quick' },
        { label: 'Qual modelo cabe na sua GPU', anchor: '#models-by-gpu' },
        { label: 'O que é o LM Studio?', anchor: '#what-is-lm-studio' },
        { label: 'Requisitos do sistema', anchor: '#system-requirements' },
        { label: 'Baixar e instalar', anchor: '#download-and-install' },
        { label: 'Buscar e baixar um modelo', anchor: '#find-and-download-a-model' },
        { label: 'Começar a conversar', anchor: '#start-chatting' },
        { label: 'Ativar o servidor local', anchor: '#enable-the-local-server' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'Solução de problemas', anchor: '#troubleshooting' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'O LM Studio é um aplicativo de desktop para macOS, Windows e Linux que permite explorar, baixar e conversar com muitos modelos GGUF quantizados do Hugging Face (modelos com arquitetura não compatível podem não carregar) por meio de uma interface gráfica, sem comandos de terminal e com um servidor local compatível com OpenAI integrado. Segundo o fabricante, o uso é gratuito, mas as condições podem mudar.' },
            { type: 'plain-terms', text: 'Se você não quer usar a linha de comando, o LM Studio é a forma de apontar e clicar para rodar modelos de IA no seu próprio computador. Baixe o app, procure um modelo pelo nome dentro dele, clique em baixar e comece a conversar -- todo o processo leva menos de 5 minutos e inclui um servidor integrado para que outros apps também possam usá-lo.' },
          ],
          items: [
            'LM Studio é uma forma simples de executar LLMs locais — sem terminal, sem Python.',
            'Baixe em lmstudio.ai, instale, pesquise um modelo (ex.: Llama 3.2 3B Q4), baixe e converse.',
            'Inclui um servidor local compatível com a API da OpenAI — muitos apps feitos para essa API podem usá-lo, mas a compatibilidade é parcial.',
            'Funciona no macOS (Apple Silicon), Windows e Linux.',
            'Requisitos: macOS 14.0+ com Apple Silicon, Windows x64 (AVX2) ou ARM64, ou Ubuntu 20.04+; recomendam-se 16 GB de RAM.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'Baixar o LM Studio e instalar: um passo por sistema',
          content: '**Baixe o LM Studio na [página de download oficial](https://lmstudio.ai/download) e siga o passo de instalação do seu sistema.** Ele exige um Mac com Apple Silicon e macOS 14.0 ou mais recente, um PC com Windows x64 (AVX2) ou ARM64, ou Ubuntu 20.04 ou mais recente, e recomenda-se 16 GB de RAM (veja a [tabela de requisitos](#system-requirements)). Segundo o fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), o uso é gratuito, mas as condições podem mudar.',
          items: [
          '**macOS:** abra o arquivo .dmg baixado e arraste o LM Studio para a pasta Aplicativos.',
          '**Windows:** execute o instalador baixado e siga as instruções.',
          '**Linux:** dê permissão de execução ao AppImage baixado com `chmod +x LM-Studio-*.AppImage` e execute-o.',
          ],
          note: 'Não existe versão para Mac com Intel. Depois da primeira abertura, procure um modelo dentro do app (passos abaixo).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'Qual modelo cabe na sua GPU',
          content: '**Escolha o modelo pela memória da sua GPU: 8 GB de VRAM comportam modelos de 7–8B, 12 GB de 14B, 16 GB de 24B, 24 GB de 27–32B, e um modelo de 70B precisa de cerca de 40 GB.** Os tamanhos são estimativas aproximadas com quantização Q4_K_M, retiradas do [guia de hardware para LLMs locais](/pt/local-llms/local-llm-hardware-guide) da PromptQuorum, que também traz GPUs, preços e velocidades. No Apple Silicon, a memória unificada faz o papel de VRAM.',
          itemHeadings: true,
          columns: ['Sua VRAM', 'Modelos que cabem', 'Exemplos', 'Tamanho em Q4_K_M'],
          rows: [
          { 'Sua VRAM': '8 GB', 'Modelos que cabem': '7–8B', 'Exemplos': 'Llama 3.1 8B, Qwen3 8B', 'Tamanho em Q4_K_M': '~5 GB' },
          { 'Sua VRAM': '12 GB', 'Modelos que cabem': '14B', 'Exemplos': 'Qwen3 14B', 'Tamanho em Q4_K_M': '~9 GB' },
          { 'Sua VRAM': '16 GB', 'Modelos que cabem': '24B', 'Exemplos': 'Mistral Small 3.1 24B', 'Tamanho em Q4_K_M': '~14 GB' },
          { 'Sua VRAM': '24 GB', 'Modelos que cabem': '27–32B', 'Exemplos': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Tamanho em Q4_K_M': '~16–19 GB' },
          { 'Sua VRAM': '40 GB+', 'Modelos que cabem': '70B', 'Exemplos': 'Llama 3.3 70B', 'Tamanho em Q4_K_M': '~40 GB' },
          ],
          note: 'Estimativas, não medições da PromptQuorum. A fórmula por trás dos tamanhos está no [guia de VRAM](/pt/local-llms/how-much-vram-local-llm).',
        },
        whatIsLMStudio: {
          id: 'what-is-lm-studio',
          title: 'O que é o LM Studio?',
          content: [
            '**LM Studio é um aplicativo de desktop que facilita o download e a execução de LLMs locais sem linha de comando. Segundo o fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), o uso é gratuito, mas as condições podem mudar.**',
            'Funcionalidades principais: interface de chat integrada, biblioteca de modelos do Hugging Face, servidor local compatível com OpenAI (porta 1234), suporte a múltiplas plataformas (macOS, Windows, Linux).',
          ],
        },
        systemRequirements: {
          id: 'system-requirements',
          title: 'Requisitos do sistema',
          rows: [
            { 'Componente': 'Sistema operacional', 'Mínimo': 'macOS 14.0+, Windows x64 (AVX2) ou ARM64, Ubuntu 20.04+', 'Recomendado': 'Ubuntu 22.04 (as mais novas: menos testadas)' },
            { 'Componente': 'RAM', 'Mínimo': 'Sem mínimo fixo (Mac de 8 GB: modelos pequenos)', 'Recomendado': '16 GB ou mais' },
            { 'Componente': 'Espaço em disco', 'Mínimo': 'O app e espaço para cada modelo', 'Recomendado': '50 GB+ livres para vários modelos' },
            { 'Componente': 'GPU (opcional)', 'Mínimo': 'Opcional (Windows: 4 GB+ de VRAM dedicada)', 'Recomendado': 'Apple Silicon, ou NVIDIA/AMD com VRAM suficiente' },
          ],
          columns: ['Componente', 'Mínimo', 'Recomendado'],
        },
        downloadAndInstall: {
          id: 'download-and-install',
          title: 'Como baixar e instalar o LM Studio',
          numberedItems: [
            'Acesse **lmstudio.ai** no navegador.',
            'Clique em **Download** e selecione sua plataforma (macOS, Windows, Linux).',
            'Abra o arquivo baixado e siga as instruções de instalação.',
            'Inicie o LM Studio — a janela principal aparece com a barra de pesquisa de modelos.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'Fluxo de instalação do LM Studio: baixe em lmstudio.ai, instale no macOS, Windows ou Linux, procure um modelo GGUF no Hugging Face, escolha a quantização Q4_K_M (~4,5 GB) e comece a conversar em 5-30 segundos.',
        },
        findModel: {
          id: 'find-and-download-a-model',
          title: 'Como buscar e baixar um modelo no LM Studio',
          content: 'Use a aba de busca (ícone de lupa na barra lateral esquerda) para encontrar modelos:',
          numberedItems: [
            'Clique na aba Search na barra lateral esquerda.',
            'Digite o nome de um modelo -- por exemplo "llama 3.1" ou "phi-3 mini".',
            'O LM Studio exibe os modelos GGUF correspondentes do Hugging Face, com tamanho de arquivo e opções de quantização.',
            'Selecione um nível de quantização. Para 8 GB de RAM: escolha Q4_K_M (~4,5 GB para um modelo 7B). Para 16 GB de RAM: Q5_K_M ou Q6_K oferecem melhor qualidade.',
            'Clique na seta de download. O progresso aparece na aba Downloads.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'Guia de quantização por RAM no LM Studio: 8 GB de RAM comportam Q4_K_M (~4,5 GB, perda de qualidade geralmente pequena); 16 GB de RAM comportam Q5_K_M ou Q6_K (~5,7-6,5 GB, quase sem perdas), com folga para contexto de 8K+ tokens.',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'Como começar a conversar com um modelo no LM Studio',
          numberedItems: [
            'Clique na aba Chat (ícone de balão de fala) na barra lateral esquerda.',
            'No topo da janela de chat, clique no menu suspenso de seleção de modelo e escolha o modelo baixado.',
            'O LM Studio carrega o modelo na memória -- isso leva de 5 a 30 segundos, dependendo do tamanho do modelo e do hardware.',
            'Digite sua mensagem no campo de entrada na parte inferior e pressione Enter ou clique em Enviar.',
            'A resposta do modelo é transmitida token a token. A velocidade de geração aparece na barra de status na parte inferior da janela.',
          ],
        },
        modelSettings: {
          title: 'Como ajustar as configurações do modelo no LM Studio',
          content: 'O painel direito na aba Chat expõe os principais parâmetros de inferência:',
          items: [
            '**Temperature** (padrão 0,8): controla a aleatoriedade da resposta. Valores mais baixos (0,1-0,4) produzem saídas mais focadas e previsíveis. Valores mais altos (0,8-1,2) produzem saídas mais variadas e criativas.',
            '**Context Length** (padrão 4096 tokens): o histórico máximo de conversa que o modelo consegue processar. Um contexto maior usa mais RAM. A maioria dos modelos 7B suporta de 4096 a 8192 tokens.',
            '**GPU Layers** (macOS/Linux/Windows com GPU): quantas camadas do modelo são descarregadas para a GPU. Defina o máximo para a inferência mais rápida se sua GPU tiver VRAM suficiente.',
            '**System Prompt**: uma instrução persistente adicionada antes de cada conversa. Use isso para definir o papel ou o comportamento do modelo.',
          ],
        },
        localServer: {
          id: 'enable-the-local-server',
          title: 'Como ativar o servidor local do LM Studio',
          content: 'O LM Studio inclui um servidor local que imita a API da OpenAI. Muitos aplicativos feitos para a API da OpenAI podem usar seu modelo local por meio deste servidor, embora a compatibilidade não seja garantida para todos os recursos:',
          numberedItems: [
            'Clique na aba Local Server (ícone "<->") na barra lateral esquerda.',
            'Selecione um modelo no menu suspenso na parte superior.',
            'Clique em "Start Server". O servidor inicia em http://localhost:1234.',
            'Seu aplicativo deve definir `base_url = "http://localhost:1234/v1"` e usar qualquer string como chave de API (o servidor aceita qualquer valor).',
          ],
        },
        localServerCode: {
          title: 'Conectar ao LM Studio via linha de comando',
          codeBlock: '# O LM Studio inclui um servidor local compatível com OpenAI\n# Inicie-o via Menu → Local Server → Start Server\n# Então use com qualquer cliente OpenAI:\n\ncurl http://localhost:1234/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d \'{"messages": [{"role": "user", "content": "Olá!"}], "model": "local-model"}\'',
          codeLanguage: 'bash',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'LM Studio ou Ollama: qual usar?',
          rows: [
            { 'Fator': 'Interface', 'LM Studio': 'App de desktop gráfico', 'Ollama': 'Terminal + API' },
            { 'Fator': 'Fonte de modelos', 'LM Studio': 'Hugging Face (muitos GGUF)', 'Ollama': 'Biblioteca Ollama (curada)' },
            { 'Fator': 'Porta da API', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Fator': 'Gerenciamento', 'LM Studio': 'Navegador GUI c/ tamanho', 'Ollama': 'Comandos CLI (pull, list, rm)' },
            { 'Fator': 'Automação', 'LM Studio': 'Focado em GUI; API local e CLI lms disponíveis', 'Ollama': 'Focado em CLI (scripts, Docker, CI)' },
            { 'Fator': 'Ideal para', 'LM Studio': 'Iniciantes, usuários de GUI', 'Ollama': 'Desenvolvedores, automação' },
          ],
          columns: ['Fator', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Solução de problemas comuns do LM Studio',
          faqs: [
            {
              q: 'O LM Studio mostra "Not enough memory to load model"',
              a: 'O modelo requer mais RAM do que a disponível. Feche outros aplicativos para liberar memória ou selecione uma quantização menor (Q3_K_S em vez de Q4_K_M). Regra geral: multiplique o tamanho do arquivo do modelo por 1,2 para estimar a RAM necessária. Um arquivo de 4,5 GB precisa de ~5,4 GB de RAM livre.',
            },
            {
              q: 'O modelo gera texto muito devagar (menos de 5 tokens/seg)',
              a: 'O modelo está rodando totalmente na CPU. Verifique GPU Layers no painel direito -- se mostrar 0, sua GPU não está sendo usada. No macOS, o LM Studio ativa o Metal (GPU) automaticamente para Apple Silicon. No Windows/Linux com NVIDIA, verifique se o driver está atualizado e aumente GPU Layers para o valor máximo exibido.',
            },
            {
              q: 'Não encontro um modelo específico na busca do LM Studio',
              a: 'O LM Studio busca arquivos GGUF no Hugging Face. Se um modelo não aparecer, tente buscar diretamente pelo nome do repositório do Hugging Face (ex.: "bartowski/Llama-3.1-8B-Instruct-GGUF"). Alguns modelos mais recentes podem ainda não estar indexados.',
            },
            {
              q: 'O servidor local retorna erros "model not found"',
              a: 'É necessário carregar um modelo na aba Local Server antes que o servidor possa responder. Abra a aba Local Server, selecione um modelo no menu suspenso e clique em Start Server. O nome do modelo nas requisições de API pode ser qualquer string -- o LM Studio usa o modelo atualmente carregado.',
            },
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erros comuns ao instalar o LM Studio',
          items: [
            'Não alocar RAM suficiente do sistema para o modelo selecionado nas configurações do LM Studio.',
            'Usar um modelo pré-quantizado que ainda é grande demais para a VRAM da sua GPU.',
            'Esperar respostas instantâneas de modelos grandes em sistemas somente CPU -- o tempo de resposta será de 10 a 30 segundos.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '**Site oficial do LM Studio** -- Downloads e documentação',
            '**Hugging Face Model Hub** -- Amplo catálogo de modelos quantizados GGUF',
            '**LM Studio no GitHub** -- SDKs, CLI e rastreador de bugs (o código-fonte do aplicativo de desktop não é publicado lá)',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes sobre LM Studio',
          faqs: [
            { q: 'O LM Studio é gratuito?', a: 'Sim. Segundo o fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), o LM Studio é gratuito para uso pessoal e profissional desde julho de 2025. Só o nível Enterprise/Teams, separado, é pago. Ele é desenvolvido pela Element Labs, Inc. As condições podem mudar; confira os termos atuais em [lmstudio.ai](https://lmstudio.ai). Os modelos que você baixa têm licenças próprias, que podem limitar usos como o comercial.' },
            { q: 'LM Studio ou Ollama — qual devo usar?', a: 'LM Studio para iniciantes que preferem GUI. Ollama para usuários avançados que preferem linha de comando e integração com API. Os aplicativos têm uso gratuito (o LM Studio, segundo o fabricante, para uso pessoal e profissional; o Ollama, de código aberto sob a licença MIT, conforme o [repositório oficial](https://github.com/ollama/ollama)), mas existem planos pagos separados e as condições podem mudar. Ambos executam muitos modelos de peso aberto em comum; o Ollama usa sobretudo a sua própria biblioteca, enquanto o LM Studio carrega muitos modelos GGUF do Hugging Face.' },
            { q: 'Posso usar o LM Studio em português?', a: 'Confira nas configurações do LM Studio se o idioma da interface está disponível em português na sua versão. Independentemente disso, você pode conversar com os modelos em qualquer idioma, incluindo português. Escolha modelos multilíngues como Aya 8B ou Qwen para melhor suporte ao PT-BR.' },
            { q: 'Quais são os requisitos mínimos do LM Studio?', a: 'Apple Silicon com macOS 14.0 ou mais recente, Windows x64 (AVX2) ou ARM64, ou Ubuntu 20.04 ou mais recente; recomendam-se 16 GB de RAM (com 8 GB, só modelos pequenos). GPU não é obrigatória -- Macs com Apple Silicon e GPUs NVIDIA/AMD são suportados para aceleração.' },
            { q: 'Qual quantização usar no LM Studio com 8 GB de RAM?', a: 'Q4_K_M é a quantização recomendada para sistemas com 8 GB de RAM. Ela oferece o melhor equilíbrio entre qualidade do modelo e uso de memória para modelos 7B (~4,5 GB de arquivo).' },
            { q: 'O LM Studio inclui uma API compatível com a OpenAI?', a: 'Sim. Ative a aba Local Server no LM Studio para iniciar uma API compatível com a OpenAI em http://localhost:1234. Muitos apps que usam o SDK da OpenAI podem se conectar usando essa URL como base_url, mas a compatibilidade é parcial: teste os recursos de que você precisa.' },
            { q: 'Posso usar o LM Studio no Linux?', a: 'Sim. Baixe o arquivo .AppImage em lmstudio.ai. Torne-o executável com chmod +x LM-Studio-*.AppImage e execute-o. Não é necessária instalação no sistema -- ele roda como um app portátil.' },
            { q: 'Como encontro e baixo modelos no LM Studio?', a: 'Clique na aba Search (lupa) na barra lateral, busque pelo nome do modelo (ex.: "llama 3.1"), selecione um nível de quantização (Q4_K_M para 8 GB de RAM) e clique na seta de download.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leituras relacionadas',
          items: [
            '[O que são LLMs locais?](/pt/local-llms/what-are-local-llms) -- Conceitos e componentes principais',
            '[Execute seu primeiro LLM local](/pt/local-llms/run-first-local-llm) -- Próximos passos após a instalação',
            '[Como instalar Ollama](/pt/local-llms/how-to-install-ollama) -- Alternativa baseada em linha de comando ao LM Studio',
            '[Melhores modelos de LLM local para iniciantes](/pt/local-llms/best-beginner-local-llm-models) -- Recomendações de modelos por hardware',
            '[Melhores LLMs locais para programação 2026](/pt/local-llms/best-local-llms-for-coding) — Comparativo Qwen3-Coder vs DeepSeek',
            '[LLMs locais mais rápidos para PCs de baixo custo](/pt/local-llms/fastest-local-llms-low-end-pcs) -- Modelos para seu hardware.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Instalar LM Studio: configuração de interface gráfica para macOS, Windows e Linux',
        description: 'Instale o LM Studio no macOS, Windows ou Linux: baixe um modelo e comece a conversar em 5 minutos. Sem terminal.',
        url: 'https://www.promptquorum.com/pt/local-llms/how-to-install-lm-studio',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-04',
        dateModified: '2026-11-14',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'LM Studio' },
          { '@type': 'Thing', name: 'instalação de LLM local' },
          { '@type': 'Thing', name: 'modelo GGUF' },
          { '@type': 'Thing', name: 'llama.cpp' },
        ],
        proficiencyLevel: 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          {
            '@type': 'Question',
            'name': 'O LM Studio mostra "Not enough memory to load model"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O modelo requer mais RAM do que a disponível. Feche outros aplicativos para liberar memória ou selecione uma quantização menor (Q3_K_S em vez de Q4_K_M). Regra geral: multiplique o tamanho do arquivo do modelo por 1,2 para estimar a RAM necessária. Um arquivo de 4,5 GB precisa de ~5,4 GB de RAM livre.',
            },
          },
          {
            '@type': 'Question',
            'name': 'O modelo gera texto muito devagar (menos de 5 tokens/seg)',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O modelo está rodando totalmente na CPU. Verifique GPU Layers no painel direito -- se mostrar 0, sua GPU não está sendo usada. No macOS, o LM Studio ativa o Metal (GPU) automaticamente para Apple Silicon. No Windows/Linux com NVIDIA, verifique se o driver está atualizado e aumente GPU Layers para o valor máximo exibido.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Não encontro um modelo específico na busca do LM Studio',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O LM Studio busca arquivos GGUF no Hugging Face. Se um modelo não aparecer, tente buscar diretamente pelo nome do repositório do Hugging Face (ex.: "bartowski/Llama-3.1-8B-Instruct-GGUF"). Alguns modelos mais recentes podem ainda não estar indexados.',
            },
          },
          {
            '@type': 'Question',
            'name': 'O servidor local retorna erros "model not found"',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'É necessário carregar um modelo na aba Local Server antes que o servidor possa responder. Abra a aba Local Server, selecione um modelo no menu suspenso e clique em Start Server. O nome do modelo nas requisições de API pode ser qualquer string -- o LM Studio usa o modelo atualmente carregado.',
            },
          },
          {
            '@type': 'Question',
            'name': 'O LM Studio é gratuito?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Segundo o fabricante ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), o LM Studio é gratuito para uso pessoal e profissional desde julho de 2025. Só o nível Enterprise/Teams, separado, é pago. Ele é desenvolvido pela Element Labs, Inc. As condições podem mudar; confira os termos atuais em [lmstudio.ai](https://lmstudio.ai). Os modelos que você baixa têm licenças próprias, que podem limitar usos como o comercial.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio ou Ollama — qual devo usar?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio para iniciantes que preferem GUI. Ollama para usuários avançados que preferem linha de comando e integração com API. Os aplicativos têm uso gratuito (o LM Studio, segundo o fabricante, para uso pessoal e profissional; o Ollama, de código aberto sob a licença MIT, conforme o [repositório oficial](https://github.com/ollama/ollama)), mas existem planos pagos separados e as condições podem mudar. Ambos executam muitos modelos de peso aberto em comum; o Ollama usa sobretudo a sua própria biblioteca, enquanto o LM Studio carrega muitos modelos GGUF do Hugging Face.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Posso usar o LM Studio em português?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Confira nas configurações do LM Studio se o idioma da interface está disponível em português na sua versão. Independentemente disso, você pode conversar com os modelos em qualquer idioma, incluindo português. Escolha modelos multilíngues como Aya 8B ou Qwen para melhor suporte ao PT-BR.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quais são os requisitos mínimos do LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Apple Silicon com macOS 14.0 ou mais recente, Windows x64 (AVX2) ou ARM64, ou Ubuntu 20.04 ou mais recente; recomendam-se 16 GB de RAM (com 8 GB, só modelos pequenos). GPU não é obrigatória -- Macs com Apple Silicon e GPUs NVIDIA/AMD são suportados para aceleração.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qual quantização usar no LM Studio com 8 GB de RAM?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M é a quantização recomendada para sistemas com 8 GB de RAM. Ela oferece o melhor equilíbrio entre qualidade do modelo e uso de memória para modelos 7B (~4,5 GB de arquivo).',
            },
          },
          {
            '@type': 'Question',
            'name': 'O LM Studio inclui uma API compatível com a OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Ative a aba Local Server no LM Studio para iniciar uma API compatível com a OpenAI em http://localhost:1234. Muitos apps que usam o SDK da OpenAI podem se conectar usando essa URL como base_url, mas a compatibilidade é parcial: teste os recursos de que você precisa.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Posso usar o LM Studio no Linux?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Baixe o arquivo .AppImage em lmstudio.ai. Torne-o executável com chmod +x LM-Studio-*.AppImage e execute-o. Não é necessária instalação no sistema -- ele roda como um app portátil.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Como encontro e baixo modelos no LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Clique na aba Search (lupa) na barra lateral, busque pelo nome do modelo (ex.: "llama 3.1"), selecione um nível de quantização (Q4_K_M para 8 GB de RAM) e clique na seta de download.',
            },
          },
        ],
      },
    },
    de: {
      designSkin: 'hub',
      theme: 'Getting Started',
      title: 'LM Studio installieren: Desktop-App-Einrichtung für macOS, Windows und Linux',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-de.webp',
      seoTitle: 'LM Studio installieren: Download, Setup und Modelle je GPU',
      intro: 'LM Studio ist eine Desktop-Anwendung zum Ausführen lokaler LLMs ohne Terminalbefehle. Laden Sie das Installationsprogramm von lmstudio.ai herunter, öffnen Sie die App, suchen Sie nach einem Modell nach Name, klicken Sie auf „Download", und beginnen Sie zu chatten -- der gesamte Vorgang dauert weniger als 5 Minuten. Nach Angaben des Herstellers ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)) ist die Nutzung kostenlos; die Bedingungen können sich ändern. LM Studio läuft auf macOS (Apple Silicon), Windows und Linux (AppImage) und unterstützt viele GGUF-quantisierte Modelle aus der umfangreichen Hugging Face-Modellbibliothek (Modelle mit nicht unterstützter Architektur lassen sich ggf. nicht laden). Es enthält eine integrierte Chat-Benutzeroberfläche, einen OpenAI-kompatiblen lokalen Server auf localhost:1234 und automatische GPU-Beschleunigung für Apple Metal, NVIDIA CUDA und AMD ROCm.',
      metaDescription: 'LM Studio installieren auf Windows, Mac und Linux: offizieller Download, ein Schritt pro System und welche Modelle in 8, 12, 16 und 24 GB VRAM passen.',
      leadAnswerBlock: '**LM Studio ist eine Desktop-Anwendung, mit der Sie lokale LLMs über eine grafische Oberfläche durchsuchen, herunterladen und ausführen, ganz ohne Terminalbefehle. Es läuft unter macOS, Windows und Linux und enthält eine integrierte Chat-Oberfläche sowie einen OpenAI-kompatiblen lokalen Server.**',
      publishDate: '2026-04-04',
      dateModified: '2026-11-14',
      readTime: '7 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Download und Installation: ein Schritt pro System', anchor: '#download-install-quick' },
        { label: 'Welches Modell passt zu Ihrer GPU', anchor: '#models-by-gpu' },
        { label: 'Was ist LM Studio?', anchor: '#what-is-lm-studio' },
        { label: 'Systemanforderungen', anchor: '#system-requirements' },
        { label: 'Download und Installation', anchor: '#download-and-install' },
        { label: 'Modell suchen und herunterladen', anchor: '#find-and-download' },
        { label: 'Mit dem Chat beginnen', anchor: '#start-chatting' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
        { label: 'Regionaler Kontext', anchor: '#regional-context' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studio ist eine Desktop-Anwendung für macOS, Windows und Linux, mit der Sie viele GGUF-quantisierte Modelle von Hugging Face über eine grafische Oberfläche durchsuchen, herunterladen und nutzen können (Modelle mit nicht unterstützter Architektur lassen sich ggf. nicht laden) -- ganz ohne Terminalbefehle und mit integriertem OpenAI-kompatiblem lokalem Server. Nach Angaben des Herstellers ist die Nutzung kostenlos, die Bedingungen können sich ändern.' },
            { type: 'plain-terms', text: 'Wer keine Kommandozeile nutzen möchte, findet in LM Studio den Weg per Mausklick, um KI-Modelle auf dem eigenen Computer auszuführen. App herunterladen, ein Modell nach Namen darin suchen, auf Herunterladen klicken und loschatten -- der gesamte Vorgang dauert unter 5 Minuten und bringt einen integrierten Server mit, damit auch andere Apps darauf zugreifen können.' },
          ],
          title: 'Zusammenfassung',
          items: [
            'LM Studio von lmstudio.ai herunterladen -- verfügbar für macOS (Apple Silicon), Windows und Linux (AppImage).',
            'Voraussetzungen: macOS 14.0+ mit Apple Silicon, Windows x64 (AVX2) oder ARM64 oder Ubuntu 20.04+; empfohlen sind 16 GB RAM. Apple Silicon Macs verwenden standardmäßig GPU-Beschleunigung.',
            'Der integrierte Modellbrowser sucht direkt auf Hugging Face -- laden Sie GGUF-Modelle herunter, ohne die App zu verlassen.',
            'LM Studio enthält eine integrierte Chat-Benutzeroberfläche und einen lokalen OpenAI-kompatiblen Server auf Port 1234.',
            'Am besten für: Anfänger, die eine GUI bevorzugen, Benutzer, die mehrere Modelle nebeneinander vergleichen möchten, und alle, die ein komplettes Paket ohne Terminalbefehle möchten.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'LM Studio herunterladen und installieren: ein Schritt pro System',
          content: '**Laden Sie LM Studio von der offiziellen [LM-Studio-Download-Seite](https://lmstudio.ai/download) herunter und führen Sie den Installationsschritt für Ihr System aus.** Voraussetzung sind Apple Silicon mit macOS 14.0 oder neuer, ein Windows-PC mit x64 (AVX2) oder ARM64 oder Ubuntu 20.04 oder neuer; empfohlen sind 16 GB RAM (siehe [Anforderungstabelle](#system-requirements)). Nach Angaben des Herstellers ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)) ist die Nutzung kostenlos; die Bedingungen können sich ändern.',
          items: [
          '**macOS:** Öffnen Sie die heruntergeladene .dmg-Datei und ziehen Sie LM Studio in den Ordner „Programme“.',
          '**Windows:** Starten Sie das heruntergeladene Installationsprogramm und folgen Sie den Anweisungen.',
          '**Linux:** Machen Sie das heruntergeladene AppImage mit `chmod +x LM-Studio-*.AppImage` ausführbar und starten Sie es.',
          ],
          note: 'Einen Intel-Mac-Build gibt es nicht. Suchen Sie nach dem ersten Start in der App nach einem Modell (Schritte weiter unten).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'Welches Modell passt zu Ihrer GPU',
          content: '**Wählen Sie das Modell nach dem Speicher Ihrer GPU: 8 GB VRAM reichen für 7–8B-Modelle, 12 GB für 14B, 16 GB für 24B, 24 GB für 27–32B, und ein 70B-Modell braucht etwa 40 GB.** Die Größen sind ungefähre Schätzwerte für die Quantisierung Q4_K_M aus dem PromptQuorum-[Hardware-Ratgeber für lokale LLMs](/de/local-llms/local-llm-hardware-guide), der auch GPUs, Preise und Geschwindigkeiten nennt. Bei Apple Silicon zählt der einheitliche Speicher als VRAM.',
          itemHeadings: true,
          columns: ['Ihr VRAM', 'Passende Modelle', 'Beispiele', 'Größe bei Q4_K_M'],
          rows: [
          { 'Ihr VRAM': '8 GB', 'Passende Modelle': '7–8B', 'Beispiele': 'Llama 3.1 8B, Qwen3 8B', 'Größe bei Q4_K_M': '~5 GB' },
          { 'Ihr VRAM': '12 GB', 'Passende Modelle': '14B', 'Beispiele': 'Qwen3 14B', 'Größe bei Q4_K_M': '~9 GB' },
          { 'Ihr VRAM': '16 GB', 'Passende Modelle': '24B', 'Beispiele': 'Mistral Small 3.1 24B', 'Größe bei Q4_K_M': '~14 GB' },
          { 'Ihr VRAM': '24 GB', 'Passende Modelle': '27–32B', 'Beispiele': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Größe bei Q4_K_M': '~16–19 GB' },
          { 'Ihr VRAM': '40 GB+', 'Passende Modelle': '70B', 'Beispiele': 'Llama 3.3 70B', 'Größe bei Q4_K_M': '~40 GB' },
          ],
          note: 'Schätzwerte, keine Messungen von PromptQuorum. Die Formel hinter den Größen steht im [VRAM-Ratgeber](/de/local-llms/how-much-vram-local-llm).',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: 'Was ist LM Studio?',
          content: [
            '**LM Studio ist eine Desktop-Anwendung zum Ausführen lokaler LLMs.** Es bietet einen grafischen Modellbrowser, eine integrierte Chat-Benutzeroberfläche und einen lokalen API-Server -- alles in einer App. Unter der Haube führt es GGUF-Modelle mit llama.cpp aus (auf Apple Silicon auch mit MLX), einer Open-Source-Engine, die auch [Ollama](/de/local-llms/how-to-install-ollama) als Backend unterstützt.',
            'Der Hauptunterschied zu Ollama ist, dass LM Studio völlig GUI-gesteuert ist. Sie durchsuchen und laden Modelle über die App-Oberfläche herunter, starten Chats mit einem Klick und verwalten Modelleinstellungen mit Schiebereglern anstelle von Konfigurationsdateien.',
            'Nach Angaben des Herstellers ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)) ist LM Studio seit Juli 2025 für die private und berufliche Nutzung kostenlos; die Bedingungen können sich ändern. Es wird von Element Labs, Inc. entwickelt. Ab 2026 unterstützt es NVIDIA CUDA-, AMD ROCm- und Apple Metal-Beschleunigung.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'Welche Systemanforderungen hat LM Studio?',
          columns: ['Spezifikation', 'Minimum', 'Empfohlen'],
          rows: [
            { 'Spezifikation': 'Betriebssystem', 'Minimum': 'macOS 14.0+, Windows x64 (AVX2) oder ARM64, Ubuntu 20.04+', 'Empfohlen': 'Ubuntu 22.04 (neuere: weniger getestet)' },
            { 'Spezifikation': 'RAM', 'Minimum': 'Kein festes Minimum (8-GB-Macs: kleine Modelle)', 'Empfohlen': '16 GB oder mehr' },
            { 'Spezifikation': 'Speicher', 'Minimum': 'App plus Platz für jedes Modell', 'Empfohlen': '50 GB+ frei für mehrere Modelle' },
            { 'Spezifikation': 'GPU (optional)', 'Minimum': 'Optional (Windows: 4 GB+ dedizierter VRAM)', 'Empfohlen': 'Apple Silicon oder NVIDIA/AMD mit genug VRAM' },
          ],
        },
        download: {
          id: 'download-and-install',
          title: 'Wie laden Sie LM Studio herunter und installieren es',
          numberedItems: [
            'Gehen Sie zu lmstudio.ai und klicken Sie auf die Download-Schaltfläche für Ihr Betriebssystem.',
            'macOS: Öffnen Sie die .dmg-Datei und ziehen Sie LM Studio in den Ordner „Anwendungen". Beim ersten Start genehmigen Sie die Sicherheitsaufforderung unter Systemeinstellungen → Datenschutz & Sicherheit.',
            'Windows: Führen Sie das Installationsprogramm LM-Studio-Setup.exe aus. LM Studio wird in %LOCALAPPDATA%\LM-Studio installiert.',
            'Linux: Laden Sie die .AppImage-Datei herunter. Machen Sie sie mit `chmod +x LM-Studio-*.AppImage` ausführbar und starten Sie sie. Keine Systeminstallation erforderlich.',
            'Beim ersten Start zeigt LM Studio einen Willkommensbildschirm und fordert Sie auf, ein Modell herunterzuladen.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'LM Studio Installationsablauf: Download von lmstudio.ai, Installation unter macOS, Windows oder Linux, Suche eines GGUF-Modells auf Hugging Face, Wahl der Q4_K_M-Quantisierung (~4,5 GB) und Chat-Start in 5-30 Sekunden.',
        },
        findModel: {
          id: 'find-and-download',
          title: 'Wie finden und laden Sie ein Modell in LM Studio herunter',
          content: 'Verwenden Sie die Registerkarte „Search" (Lupe-Symbol in der linken Seitenleiste), um Modelle zu finden:',
          numberedItems: [
            'Klicken Sie auf die Registerkarte „Search" in der linken Seitenleiste.',
            'Geben Sie einen Modellnamen ein -- z.B. „llama 3.1" oder „phi-3 mini".',
            'LM Studio zeigt passende GGUF-Modelle von Hugging Face mit Dateigröße und Quantisierungsoptionen.',
            'Wählen Sie ein Quantisierungsniveau. Für 8 GB RAM: Q4_K_M (~4,5 GB für ein 7B-Modell) wählen. Für 16 GB RAM: Q5_K_M oder Q6_K bieten bessere Qualität.',
            'Klicken Sie auf den Download-Pfeil. Der Fortschritt wird auf der Registerkarte „Downloads" angezeigt.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'RAM-basierter Quantisierungsleitfaden für LM Studio: 8 GB RAM eignen sich für Q4_K_M (~4,5 GB, meist geringer Qualitätsverlust); 16 GB RAM eignen sich für Q5_K_M oder Q6_K (~5,7-6,5 GB, nahezu verlustfrei) mit Spielraum für 8K+ Token Kontext.',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'Wie beginnen Sie zu chatten mit einem Modell in LM Studio',
          numberedItems: [
            'Klicken Sie auf die Registerkarte „Chat" (Sprechblase-Symbol) in der linken Seitenleiste.',
            'Klicken Sie oben im Chat-Fenster auf das Dropdown-Menü für Modellauswahl und wählen Sie Ihr heruntergeladenes Modell.',
            'LM Studio lädt das Modell in den Speicher -- dies dauert 5-30 Sekunden je nach Modellgröße und Hardware.',
            'Geben Sie Ihre Nachricht in das Eingabefeld unten ein und drücken Sie die Eingabetaste oder klicken Sie auf „Senden".',
            'Die Antwort des Modells wird Token für Token übertragen. Die Generierungsgeschwindigkeit wird in der Statusleiste am unteren Fensterrand angezeigt.',
          ],
        },
        modelSettings: {
          title: 'Wie passen Sie Modelleinstellungen in LM Studio an',
          content: 'Das rechte Bedienfeld auf der Registerkarte „Chat" zeigt wichtige Inferenzparameter:',
          items: [
            '**Temperatur** (Standard 0,8): steuert die Zufälligkeit der Antwort. Niedrigere Werte (0,1-0,4) erzeugen konzentriertere, vorhersehbarere Ausgaben. Höhere Werte (0,8-1,2) erzeugen vielfältigere, kreativere Ausgaben.',
            '**Kontextlänge** (Standard 4096 Token): die maximale Gesprächshistorie, die das Modell verarbeiten kann. Ein längerer Kontext benötigt mehr RAM. Die meisten 7B-Modelle unterstützen 4096-8192 Token.',
            '**GPU-Ebenen** (macOS/Linux/Windows mit GPU): wie viele Modellschichten auf die GPU ausgelagert werden. Setzen Sie auf Maximum für schnellste Inferenz, wenn Ihre GPU genügend VRAM hat.',
            '**Systemprompt**: eine persistente Anweisung, die vor jedem Gespräch vorangestellt wird. Verwenden Sie dies, um die Rolle oder das Verhalten des Modells festzulegen.',
          ],
        },
        localServer: {
          title: 'Wie aktivieren Sie den lokalen Server in LM Studio',
          content: 'LM Studio enthält einen lokalen Server, der die OpenAI-API imitiert. Viele für die OpenAI-API entwickelte Anwendungen können Ihr lokales Modell über diesen Server nutzen; vollständige Kompatibilität ist jedoch nicht für jede Funktion garantiert:',
          numberedItems: [
            'Klicken Sie auf die Registerkarte „Local Server" (das „<->"-Symbol) in der linken Seitenleiste.',
            'Wählen Sie ein Modell im Modell-Dropdown oben aus.',
            'Klicken Sie auf „Start Server". Der Server wird auf http://localhost:1234 gestartet.',
            'Ihre Anwendung sollte `base_url = "http://localhost:1234/v1"` und einen beliebigen String als API-Schlüssel festlegen (der Server akzeptiert jeden Wert).',
          ],
        },
        localServerCode: {
          title: 'Wie verbinden Sie sich mit LM Studio über Python?',
          codeLanguage: 'python',
          codeBlock: `from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="local-model",
    messages=[{"role": "user", "content": "What is a local LLM?"}]
)
print(response.choices[0].message.content)`,
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'Was sollten Sie verwenden: LM Studio oder Ollama?',
          columns: ['Faktor', 'LM Studio', 'Ollama'],
          rows: [
            { 'Faktor': 'Oberfläche', 'LM Studio': 'GUI-Desktop-App', 'Ollama': 'Terminal + API' },
            { 'Faktor': 'Modellquelle', 'LM Studio': 'Hugging Face (viele GGUF-Modelle)', 'Ollama': 'Ollama-Bibliothek (kuratiert)' },
            { 'Faktor': 'API-Port', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Faktor': 'Modellverwaltung', 'LM Studio': 'GUI-Browser mit Dateigröße', 'Ollama': 'CLI-Befehle (ollama pull, list, rm)' },
            { 'Faktor': 'Automatisierung', 'LM Studio': 'GUI-fokussiert; lokale API und lms-CLI verfügbar', 'Ollama': 'CLI-fokussiert (Scripting, Docker, CI)' },
            { 'Faktor': 'Am besten für', 'LM Studio': 'Anfänger, GUI-Benutzer, Modell-Erkundung', 'Ollama': 'Entwickler, Automatisierung, Server-Bereitstellungen' },
          ],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Wie beheben Sie häufige LM Studio-Probleme?',
          faqs: [
            {
              q: 'LM Studio zeigt „Not enough memory to load model" (Nicht genug Speicher zum Laden des Modells)',
              a: 'Das Modell benötigt mehr RAM als verfügbar. Schließen Sie andere Anwendungen, um Speicher freizugeben, oder wählen Sie eine kleinere Quantisierung (Q3_K_S statt Q4_K_M). Faustregel: Multiplizieren Sie die Modell-Dateigröße mit 1,2, um den benötigten RAM zu schätzen. Eine 4,5-GB-Datei benötigt ~5,4 GB freien RAM.'
            },
            {
              q: 'Das Modell generiert sehr langsam (unter 5 Token/Sekunde)',
              a: 'Das Modell läuft komplett auf der CPU. Überprüfen Sie „GPU-Ebenen" im rechten Bedienfeld -- wenn es 0 anzeigt, wird Ihre GPU nicht genutzt. Auf macOS aktiviert LM Studio Metal (GPU) automatisch für Apple Silicon. Auf Windows/Linux mit NVIDIA stellen Sie sicher, dass Ihr Treiber aktuell ist, und erhöhen Sie GPU-Ebenen auf den Maximalwert.'
            },
            {
              q: 'Ich kann ein bestimmtes Modell in der LM Studio-Suche nicht finden',
              a: 'LM Studio durchsucht Hugging Face nach GGUF-Dateien. Wenn ein Modell nicht angezeigt wird, versuchen Sie, direkt nach dem Hugging Face-Repository-Namen zu suchen (z.B. „bartowski/Llama-3.1-8B-Instruct-GGUF"). Manche neuere Modelle sind möglicherweise noch nicht indexiert.'
            },
            {
              q: 'Der lokale Server gibt „model not found"-Fehler zurück',
              a: 'Ein Modell muss auf der Registerkarte „Local Server" geladen werden, bevor der Server antworten kann. Öffnen Sie die Registerkarte „Local Server", wählen Sie ein Modell aus dem Dropdown aus und klicken Sie auf „Start Server". Der Modellname in API-Anfragen kann beliebig sein -- LM Studio verwendet das gerade geladene Modell.'
            },
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'LM Studio für datenschutzsensible Anwendungsfälle',
          content: [
            '**EU / DSGVO**: LM Studio mit lokalen Modellen kann eine datenschutzfreundliche KI-Konfiguration für Desktop-Nutzer sein, da die Inferenzdaten bei lokaler Nutzung das Gerät nicht verlassen; Modell-Downloads und Update-Prüfungen laufen weiterhin über das Internet. Eingabetexte, Kontexte und Ausgaben werden für die Inferenz nicht an externe Server übertragen, sodass sich die Frage einer Drittlandübermittlung (Art. 44 ff. DSGVO) für diese Ebene nicht stellt. Ob Ihr Gesamtaufbau die DSGVO einhält, hängt von Rechtsgrundlage, technischen und organisatorischen Maßnahmen und gegebenenfalls einer Datenschutz-Folgenabschätzung ab; dies ist keine Rechtsberatung. Für den deutschen Mittelstand ohne IT-Personal ist die GUI von LM Studio ein einfacher Einstieg, ohne Terminal-Befehle erlernen zu müssen. Bei rein lokaler Inferenz entfällt außerdem ein externer Auftragsverarbeiter nach Artikel 28 DSGVO.',
            '**Japan**: Muss Ihre Organisation dokumentieren, wo KI-Inferenz stattfindet, speichert LM Studio den lokalen Modell-Cache auf einem festen Pfad auf der Festplatte, sodass sich Inferenzen Gerät, Modelldatei und Version zuordnen lassen. Die Einhaltung rechtlicher oder behördlicher Vorgaben ist damit nicht automatisch gegeben. Dies ist keine Rechtsberatung.',
            '**China**: LM Studio findet Qwen3-Modelle über die Hugging-Face-Suche -- suchen Sie im Modellbrowser nach „qwen3“, um alle verfügbaren Größen zu finden. Die Inferenz läuft lokal ohne externe API-Aufrufe; ob dies die Anforderungen des chinesischen Datensicherheitsgesetzes (数据安全法) für Ihren Anwendungsfall erfüllt, ist im Einzelfall zu prüfen (keine Rechtsberatung).',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Welche häufigen Fehler gibt es bei der Installation von LM Studio?',
          items: [
            '**Nicht genügend System-RAM für das in den LM Studio-Einstellungen ausgewählte Modell zuweisen.** Überprüfen Sie die Modell-Dateigröße und multiplizieren Sie mit 1,2 -- das ist der erforderliche Mindest-RAM. Ein 4,5-GB Q4_K_M 7B-Modell benötigt ~5,4 GB freien RAM.',
            '**Ein vorquantisiertes Modell verwenden, das immer noch zu groß für Ihren GPU-VRAM ist.** Wenn ein Modell den VRAM übersteigt, fällt LM Studio auf CPU-Inferenz zurück, die je nach System ein Vielfaches langsamer sein kann. Überprüfen Sie die Dateigröße vs. Ihren GPU-VRAM, bevor Sie herunterladen.',
            '**Erwarten Sie sofortige Antworten von großen Modellen auf CPU-only Systemen.** Ein 7B-Modell antwortet auf der CPU je nach System spürbar langsamer als auf einer GPU, oft erst nach mehreren Sekunden. Das ist normal. Verwenden Sie ein 3B-Modell für schnellere Antworten auf CPU-only Maschinen.',
            '**GPU-Ebenen auf 0 bei einer NVIDIA-Maschine setzen:** LM Studio sollte CUDA automatisch erkennen. Prüfen Sie nach einer Neuinstallation den Wert „GPU-Ebenen“: Steht er auf 0, wird die GPU nicht genutzt. Öffnen Sie das Modellbedienfeld → GPU-Ebenen → auf Maximum ziehen. Der Geschwindigkeitsunterschied zwischen CPU- und GPU-Inferenz kann je nach Modell, Quantisierung und Hardware sehr groß ausfallen (oft ein Vielfaches); die genauen Werte hängen stark von Ihrem System ab.',
            '**FP16-Modelle herunterladen, wenn Q4_K_M verfügbar ist:** FP16-Modelle sind zweimal so groß wie Q4_K_M mit vernachlässigbarem Qualitätsgewinn für Chat-Aufgaben. Ein 7B-Modell in FP16 ist ~14 GB; das gleiche Modell bei Q4_K_M ist ~4,5 GB. Laden Sie immer Q4_K_M als Standard herunter, es sei denn, Sie haben einen spezifischen Grund für höhere Präzision.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Literatur',
          items: [
            '[Was sind lokale LLMs?](/de/local-llms/what-are-local-llms) -- Kernkonzepte und Komponenten',
            '[Führen Sie Ihr erstes lokales LLM aus](/de/local-llms/run-first-local-llm) -- Nächste Schritte nach der Installation',
            '[Wie installieren Sie Ollama](/de/local-llms/how-to-install-ollama) -- Terminal-basierte Alternative zu LM Studio',
            '[Best Beginner Local LLM Models](/de/local-llms/best-beginner-local-llm-models) -- Modellempfehlungen nach Hardware',
            '[Local LLM Hardware Guide](/de/local-llms/local-llm-hardware-guide) -- GPU- und RAM-Empfehlungen für beste Leistung mit LM Studio auf Ihrer Hardware',
            '[Local LLMs vs Cloud APIs](/de/local-llms/local-llms-vs-cloud-apis) -- Kosten- und Geschwindigkeitsvergleich, um zu entscheiden, wann lokale Inferenz in LM Studio die richtige Wahl ist',
            '[Beste LLMs für Coding 2026](/de/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek Benchmark-Vergleich',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'LM Studio zeigt „Not enough memory to load model"',
              a: 'Das Modell benötigt mehr RAM als verfügbar. Schließen Sie andere Anwendungen, um Speicher freizugeben, oder wählen Sie eine kleinere Quantisierung (Q3_K_S statt Q4_K_M). Faustregel: Multiplizieren Sie die Modell-Dateigröße mit 1,2, um den erforderlichen RAM zu schätzen. Eine 4,5-GB-Datei benötigt ~5,4 GB freien RAM.'
            },
            {
              q: 'Das Modell generiert sehr langsam (unter 5 Token/Sekunde)',
              a: 'Das Modell läuft komplett auf der CPU. Überprüfen Sie GPU-Ebenen im rechten Bedienfeld -- wenn es 0 anzeigt, wird Ihre GPU nicht genutzt. Auf macOS aktiviert LM Studio Metal (GPU) automatisch für Apple Silicon. Auf Windows/Linux mit NVIDIA stellen Sie sicher, dass Ihr Treiber aktuell ist, und erhöhen Sie GPU-Ebenen auf den Maximalwert.'
            },
            {
              q: 'Ich kann ein bestimmtes Modell in der LM Studio-Suche nicht finden',
              a: 'LM Studio durchsucht Hugging Face nach GGUF-Dateien. Wenn ein Modell nicht angezeigt wird, versuchen Sie, direkt nach dem Hugging Face-Repository-Namen zu suchen (z.B. „bartowski/Llama-3.1-8B-Instruct-GGUF"). Manche neuere Modelle sind möglicherweise noch nicht indexiert.'
            },
            {
              q: 'Der lokale Server gibt „model not found"-Fehler zurück',
              a: 'Ein Modell muss auf der Registerkarte „Local Server" geladen werden, bevor der Server antworten kann. Öffnen Sie die Registerkarte „Local Server", wählen Sie ein Modell aus dem Dropdown aus und klicken Sie auf „Start Server". Der Modellname in API-Anfragen kann beliebig sein -- LM Studio verwendet das gerade geladene Modell.'
            },
            {
              q: 'Ist LM Studio kostenlos?',
              a: 'Ja. Nach Angaben des Herstellers ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)) ist LM Studio seit Juli 2025 für die private und berufliche Nutzung kostenlos; kostenpflichtig ist nur die separate Enterprise/Teams-Stufe. Die Bedingungen können sich ändern – prüfen Sie die aktuellen Nutzungsbedingungen auf [lmstudio.ai](https://lmstudio.ai). Für heruntergeladene Modelle gelten jeweils eigene Lizenzen, die z. B. die kommerzielle Nutzung einschränken können.'
            },
            {
              q: 'Was ist der Unterschied zwischen LM Studio und Ollama?',
              a: 'LM Studio ist eine grafische Desktop-App -- Sie durchsuchen und laden Modelle über eine visuelle Oberfläche herunter, starten Chats mit einem Klick und passen Einstellungen mit Schiebereglern an. Ollama ist ein Befehlszeilen-Tool und Hintergrunddienst -- schneller einzurichten mit einem einzigen Befehl, besser für Automatisierung und Scripting. LM Studio führt GGUF-Modelle mit llama.cpp aus (auf Apple Silicon auch mit MLX); Ollama unterstützt llama.cpp ebenfalls als Backend. Wählen Sie LM Studio für GUI-gesteuerte Nutzung; wählen Sie Ollama für Entwickler-Workflows und Automatisierung.'
            },
            {
              q: 'Welche Modelle funktionieren mit LM Studio?',
              a: 'Viele GGUF-Format-Modelle von Hugging Face; Modelle mit nicht unterstützter Architektur lassen sich ggf. nicht laden. Die integrierte Suche greift auf den Hugging Face-Modell-Hub zu. Beliebte Optionen sind Llama 3.1 8B, Qwen3 8B, Mistral Small, Phi-4 Mini und Gemma 4 E2B. Suchen Sie nach Modellname auf der Registerkarte „Discover". LM Studio zeigt Dateigröße für jedes Quantisierungsniveau vor dem Download.'
            },
            {
              q: 'Verwendet LM Studio meine GPU automatisch?',
              a: 'Ja auf Apple Silicon -- Metal-Beschleunigung ist standardmäßig aktiviert. Auf Windows und Linux mit NVIDIA-GPUs erkennt LM Studio CUDA automatisch, wenn die Treiber installiert sind. Überprüfen Sie die Einstellung GPU-Ebenen im Modellbedienfeld -- wenn es 0 Ebenen auf GPU anzeigt, wird Ihre GPU nicht genutzt. Erhöhen Sie GPU-Ebenen auf den angezeigten Maximalwert, um verfügbaren VRAM vollständig auszunutzen.'
            },
            {
              q: 'Wo speichert LM Studio heruntergeladene Modelle?',
              a: 'Auf macOS: ~/Library/Application Support/LM Studio/Models/lmstudio-community/. Auf Windows: %USERPROFILE%\.cache\lm-studio\models\. Auf Linux: ~/.cache/lm-studio/models/. Sie können den Speicherort in LM Studio Einstellungen → Allgemein → Modell-Speicherverzeichnis ändern.'
            },
            {
              q: 'Kann ich LM Studio mit VS Code oder Cursor verwenden?',
              a: 'Ja. Starten Sie den LM Studio-lokalen Server auf localhost:1234, konfigurieren Sie dann Ihre IDE-Erweiterung zur Verwendung von http://localhost:1234/v1 als API-Basis-URL mit beliebiger Zeichenkette als API-Schlüssel. VS Code-Erweiterungen, die OpenAI-kompatible APIs unterstützen (Continue, GitHub Copilot-Alternativen) lassen sich in der Regel mit LM Studio verwenden; testen Sie die benötigten Funktionen.'
            },
            {
              q: 'Muss ich bei der Verwendung von LM Studio die DSGVO beachten?',
              a: 'Die Inferenz läuft lokal auf Ihrem Gerät; Eingabe- und Ausgabedaten werden dafür nicht an externe Server übertragen (Modell-Downloads und Update-Prüfungen laufen weiterhin über das Internet). Bei rein lokaler Inferenz entfällt für diese Ebene ein externer Auftragsverarbeiter nach Artikel 28 DSGVO. Laut ihrer Dokumentation lauschen Ollama und LM Studio standardmäßig nur auf dem eigenen Rechner ([Ollama-FAQ](https://github.com/ollama/ollama/blob/main/docs/faq.md)); wer den Server im Netzwerk freigibt, muss ihn selbst absichern. Das kann die Umsetzung der DSGVO unterstützen; ob Ihr Gesamtaufbau konform ist, hängt von Rechtsgrundlage und technischen und organisatorischen Maßnahmen ab (keine Rechtsberatung).'
            },
            {
              q: 'Ist LM Studio für den deutschen Mittelstand geeignet?',
              a: 'Ja -- nach Angaben des Herstellers kostenlos für private und berufliche Nutzung (die Bedingungen können sich ändern), für die Installation sind in der Regel keine IT-Kenntnisse nötig, die lokale Verarbeitung kann die Umsetzung der DSGVO erleichtern (die Konformität hängt von Ihrem Gesamtaufbau ab). LM Studio kann für mittlere Unternehmen ohne IT-Personal ein niedrigschwelliger Einstieg in KI-gestützte Workflows sein; die lokale Verarbeitung kann zudem die Umsetzung des Datenschutzes erleichtern. Die GUI erfordert kein Terminal-Wissen.'
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'LM Studio. (2026). „LM Studio Dokumentation und Release Notes." lmstudio.ai. [lmstudio.ai/docs](https://lmstudio.ai/docs) -- Offizielle Installationsleitfäden, API-Dokumentation und Hardware-Kompatibilitätsinformationen.',
            'Hugging Face. (2026). „GGUF Model Hub." [huggingface.co/models?library=gguf](https://huggingface.co/models?library=gguf) -- Vollständiges Verzeichnis von GGUF-quantisierten Modellen, die mit LM Studios Modellbrowser kompatibel sind.',
            'llama.cpp-Mitwirkende. (2026). „llama.cpp -- CPU/GPU-Inferenz-Engine." [github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) -- Das von LM Studio verwendete Inferenz-Backend mit Hardware-Kompatibilität und Leistungsdaten.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'LM Studio installieren: Desktop-App-Einrichtung für macOS, Windows und Linux',
        description: 'Schritt-für-Schritt LM Studio Installation und erstes Modell-Setup. GUI-gesteuerte lokale LLM-Runner mit Chat-UI und OpenAI-kompatiblem lokalem Server.',
        url: 'https://www.promptquorum.com/de/local-llms/how-to-install-lm-studio',
        inLanguage: 'de',
        datePublished: '2026-04-04',
        dateModified: '2026-11-14',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum' },
        proficiencyLevel: 'Beginner',
        about: ['LM Studio', 'Lokales LLM', 'GGUF-Modell', 'OpenAI-kompatible API', 'Ollama', 'llama.cpp'],
        mentions: ['LM Studio', 'Ollama', 'llama.cpp'],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] }
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'So installieren Sie LM Studio und führen Ihr erstes Modell aus',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'LM Studio von lmstudio.ai herunterladen' },
          { '@type': 'HowToStep', position: 2, name: 'Installieren auf macOS, Windows oder Linux' },
          { '@type': 'HowToStep', position: 3, name: 'Nach einem Modell auf der Registerkarte „Discover" suchen' },
          { '@type': 'HowToStep', position: 4, name: 'Q4_K_M-Quantisierung herunterladen' },
          { '@type': 'HowToStep', position: 5, name: 'Registerkarte „Chat" öffnen und zu chatten beginnen' },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'LM Studio zeigt „Not enough memory to load model"',
            acceptedAnswer: { '@type': 'Answer', text: 'Das Modell benötigt mehr RAM als verfügbar. Schließen Sie andere Anwendungen, um Speicher freizugeben, oder wählen Sie eine kleinere Quantisierung (Q3_K_S statt Q4_K_M). Faustregel: Multiplizieren Sie die Modell-Dateigröße mit 1,2, um den erforderlichen RAM zu schätzen. Eine 4,5-GB-Datei benötigt ~5,4 GB freien RAM.' }
          },
          {
            '@type': 'Question',
            name: 'Das Modell generiert sehr langsam (unter 5 Token/Sekunde)',
            acceptedAnswer: { '@type': 'Answer', text: 'Das Modell läuft komplett auf der CPU. Überprüfen Sie GPU-Ebenen im rechten Bedienfeld -- wenn es 0 anzeigt, wird Ihre GPU nicht genutzt. Auf macOS aktiviert LM Studio Metal (GPU) automatisch für Apple Silicon. Auf Windows/Linux mit NVIDIA stellen Sie sicher, dass Ihr Treiber aktuell ist, und erhöhen Sie GPU-Ebenen auf den Maximalwert.' }
          },
          {
            '@type': 'Question',
            name: 'Ich kann ein bestimmtes Modell in der LM Studio-Suche nicht finden',
            acceptedAnswer: { '@type': 'Answer', text: 'LM Studio durchsucht Hugging Face nach GGUF-Dateien. Wenn ein Modell nicht angezeigt wird, versuchen Sie, direkt nach dem Hugging Face-Repository-Namen zu suchen (z.B. „bartowski/Llama-3.1-8B-Instruct-GGUF"). Manche neuere Modelle sind möglicherweise noch nicht indexiert.' }
          },
          {
            '@type': 'Question',
            name: 'Der lokale Server gibt „model not found"-Fehler zurück',
            acceptedAnswer: { '@type': 'Answer', text: 'Ein Modell muss auf der Registerkarte „Local Server" geladen werden, bevor der Server antworten kann. Öffnen Sie die Registerkarte „Local Server", wählen Sie ein Modell aus dem Dropdown aus und klicken Sie auf „Start Server". Der Modellname in API-Anfragen kann beliebig sein -- LM Studio verwendet das gerade geladene Modell.' }
          },
          {
            '@type': 'Question',
            name: 'Ist LM Studio kostenlos?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Nach Angaben des Herstellers ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)) ist LM Studio seit Juli 2025 für die private und berufliche Nutzung kostenlos; kostenpflichtig ist nur die separate Enterprise/Teams-Stufe. Die Bedingungen können sich ändern – prüfen Sie die aktuellen Nutzungsbedingungen auf [lmstudio.ai](https://lmstudio.ai). Für heruntergeladene Modelle gelten jeweils eigene Lizenzen, die z. B. die kommerzielle Nutzung einschränken können.' }
          },
          {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen LM Studio und Ollama?',
            acceptedAnswer: { '@type': 'Answer', text: 'LM Studio ist eine grafische Desktop-App -- Sie durchsuchen und laden Modelle über eine visuelle Oberfläche herunter, starten Chats mit einem Klick und passen Einstellungen mit Schiebereglern an. Ollama ist ein Befehlszeilen-Tool und Hintergrunddienst -- schneller einzurichten mit einem einzigen Befehl, besser für Automatisierung und Scripting. LM Studio führt GGUF-Modelle mit llama.cpp aus (auf Apple Silicon auch mit MLX); Ollama unterstützt llama.cpp ebenfalls als Backend.' }
          },
          {
            '@type': 'Question',
            name: 'Welche Modelle funktionieren mit LM Studio?',
            acceptedAnswer: { '@type': 'Answer', text: 'Viele GGUF-Format-Modelle von Hugging Face; Modelle mit nicht unterstützter Architektur lassen sich ggf. nicht laden. Die integrierte Suche greift auf den Hugging Face-Modell-Hub zu. Beliebte Optionen sind Llama 3.1 8B, Qwen3 8B, Mistral Small, Phi-4 Mini und Gemma 4 E2B. Suchen Sie nach Modellname auf der Registerkarte „Discover". LM Studio zeigt Dateigröße für jedes Quantisierungsniveau vor dem Download.' }
          },
          {
            '@type': 'Question',
            name: 'Verwendet LM Studio meine GPU automatisch?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja auf Apple Silicon -- Metal-Beschleunigung ist standardmäßig aktiviert. Auf Windows und Linux mit NVIDIA-GPUs erkennt LM Studio CUDA automatisch, wenn die Treiber installiert sind. Überprüfen Sie die Einstellung GPU-Ebenen im Modellbedienfeld -- wenn es 0 Ebenen auf GPU anzeigt, wird Ihre GPU nicht genutzt.' }
          },
          {
            '@type': 'Question',
            name: 'Wo speichert LM Studio heruntergeladene Modelle?',
            acceptedAnswer: { '@type': 'Answer', text: 'Auf macOS: ~/Library/Application Support/LM Studio/Models/lmstudio-community/. Auf Windows: %USERPROFILE%\.cache\lm-studio\models\. Auf Linux: ~/.cache/lm-studio/models/. Sie können den Speicherort in LM Studio Einstellungen → Allgemein → Modell-Speicherverzeichnis ändern.' }
          },
          {
            '@type': 'Question',
            name: 'Kann ich LM Studio mit VS Code oder Cursor verwenden?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Starten Sie den LM Studio-lokalen Server auf localhost:1234, konfigurieren Sie dann Ihre IDE-Erweiterung zur Verwendung von http://localhost:1234/v1 als API-Basis-URL mit beliebiger Zeichenkette als API-Schlüssel. VS Code-Erweiterungen, die OpenAI-kompatible APIs unterstützen (Continue, GitHub Copilot-Alternativen) lassen sich in der Regel mit LM Studio verwenden; testen Sie die benötigten Funktionen.' }
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von LM Studio die DSGVO beachten?',
            acceptedAnswer: { '@type': 'Answer', text: 'Die Inferenz läuft lokal auf Ihrem Gerät; Eingabe- und Ausgabedaten werden dafür nicht an externe Server übertragen (Modell-Downloads und Update-Prüfungen laufen weiterhin über das Internet). Bei rein lokaler Inferenz entfällt für diese Ebene ein externer Auftragsverarbeiter nach Artikel 28 DSGVO. Laut ihrer Dokumentation lauschen Ollama und LM Studio standardmäßig nur auf dem eigenen Rechner ([Ollama-FAQ](https://github.com/ollama/ollama/blob/main/docs/faq.md)); wer den Server im Netzwerk freigibt, muss ihn selbst absichern. Das kann die Umsetzung der DSGVO unterstützen; ob Ihr Gesamtaufbau konform ist, hängt von Rechtsgrundlage und technischen und organisatorischen Maßnahmen ab (keine Rechtsberatung).' }
          },
          {
            '@type': 'Question',
            name: 'Ist LM Studio für den deutschen Mittelstand geeignet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja -- nach Angaben des Herstellers kostenlos für private und berufliche Nutzung (die Bedingungen können sich ändern), für die Installation sind in der Regel keine IT-Kenntnisse nötig, die lokale Verarbeitung kann die Umsetzung der DSGVO erleichtern (die Konformität hängt von Ihrem Gesamtaufbau ab). LM Studio kann für mittlere Unternehmen ohne IT-Personal ein niedrigschwelliger Einstieg in KI-gestützte Workflows sein; die lokale Verarbeitung kann zudem die Umsetzung des Datenschutzes erleichtern.' }
          },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'LM Studio vs Ollama Vergleich',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Oberfläche', description: 'LM Studio: GUI-Desktop-App. Ollama: Terminal + API.' },
          { '@type': 'ListItem', position: 2, name: 'Modellquelle', description: 'LM Studio: Hugging Face (viele GGUF-Modelle). Ollama: Ollama-Bibliothek (kuratiert).' },
          { '@type': 'ListItem', position: 3, name: 'API-Port', description: 'LM Studio: localhost:1234. Ollama: localhost:11434.' },
          { '@type': 'ListItem', position: 4, name: 'Modellverwaltung', description: 'LM Studio: GUI-Browser mit Dateigröße. Ollama: CLI-Befehle (ollama pull, list, rm).' },
          { '@type': 'ListItem', position: 5, name: 'Automatisierung', description: 'LM Studio: GUI-fokussiert; lokale API und lms-CLI verfügbar. Ollama: CLI-fokussiert (Scripting, Docker, CI).' },
          { '@type': 'ListItem', position: 6, name: 'Am besten für', description: 'LM Studio: Anfänger, GUI-Benutzer, Modell-Erkundung. Ollama: Entwickler, Automatisierung, Server-Bereitstellungen.' },
        ]
      },
    },
    fr: {
      designSkin: 'hub',
      theme: 'Bien démarrer',
      title: 'Installer LM Studio : guide de configuration de l\'application desktop pour macOS, Windows et Linux',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-fr.webp',
      seoTitle: 'Installer LM Studio : téléchargement et modèles par GPU',
      intro: 'LM Studio est une application desktop pour exécuter des LLM locaux sans commandes terminal. Téléchargez l\'installeur depuis lmstudio.ai, ouvrez l\'application, recherchez un modèle par nom, cliquez sur télécharger et commencez à discuter -- tout le processus prend moins de 5 minutes. Selon l\'éditeur ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), son usage est gratuit ; les conditions peuvent évoluer. LM Studio fonctionne sur macOS (Apple Silicon), Windows et Linux (AppImage), et supporte de nombreux modèles quantifiés GGUF de la vaste bibliothèque de modèles de Hugging Face (un modèle d\'architecture non prise en charge peut ne pas se charger). Il inclut une interface de chat intégrée, un serveur local compatible OpenAI sur localhost:1234, et l\'accélération GPU automatique pour Apple Metal, NVIDIA CUDA et AMD ROCm.',
      metaDescription: 'Installez LM Studio sur macOS, Windows ou Linux : lien officiel, une étape par système et les modèles adaptés à 8, 12, 16 et 24 GB de VRAM, sans terminal.',
      leadAnswerBlock: '**LM Studio est une application de bureau qui permet de parcourir, télécharger et exécuter des LLM locaux via une interface graphique, sans aucune commande terminal. Elle fonctionne sur macOS, Windows et Linux, et inclut une interface de chat intégrée et un serveur local compatible OpenAI.**',
      publishDate: '2026-04-04',
      dateModified: '2026-11-14',
      readTime: '7 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Télécharger et installer : une étape par système', anchor: '#download-install-quick' },
        { label: 'Quel modèle convient à votre GPU', anchor: '#models-by-gpu' },
        { label: 'Qu\'est-ce que LM Studio ?', anchor: '#what-is-lm-studio' },
        { label: 'Configuration système requise', anchor: '#system-requirements' },
        { label: 'Télécharger et installer', anchor: '#download-and-install' },
        { label: 'Trouver et télécharger un modèle', anchor: '#find-and-download' },
        { label: 'Commencer à discuter', anchor: '#start-chatting' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'Dépannage', anchor: '#troubleshooting' },
        { label: 'Contexte régional', anchor: '#regional-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: "LM Studio est une application de bureau pour macOS, Windows et Linux qui permet de parcourir, télécharger et discuter avec de nombreux modèles GGUF quantifiés de Hugging Face (un modèle d'architecture non prise en charge peut ne pas se charger) via une interface graphique, sans commande terminal, avec un serveur local compatible OpenAI intégré. Selon l'éditeur, l'usage est gratuit, mais les conditions peuvent évoluer." },
            { type: 'plain-terms', text: "Pour ceux qui ne veulent pas utiliser la ligne de commande, LM Studio permet de faire tourner des modèles d'IA sur son ordinateur en quelques clics. Téléchargez l'appli, cherchez un modèle par son nom, cliquez sur télécharger et commencez à discuter -- le tout en moins de 5 minutes, avec un serveur intégré pour que d'autres applications puissent aussi s'y connecter." },
          ],
          title: 'Points clés',
          items: [
            'Téléchargez LM Studio depuis lmstudio.ai -- disponible pour macOS (Apple Silicon), Windows et Linux (AppImage).',
            'Prérequis : macOS 14.0+ avec Apple Silicon, Windows x64 (AVX2) ou ARM64, ou Ubuntu 20.04+ ; 16 GB de RAM recommandés. Les Mac Apple Silicon utilisent l\'accélération GPU par défaut.',
            'Le navigateur de modèles intégré recherche Hugging Face directement -- téléchargez des modèles GGUF sans quitter l\'application.',
            'LM Studio inclut une interface de chat intégrée et un serveur compatible OpenAI sur le port 1234.',
            'Idéal pour : les débutants qui préfèrent une interface graphique, ceux qui veulent comparer plusieurs modèles côte à côte, et tous ceux qui veulent un package complet sans commandes terminal.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'Télécharger et installer LM Studio : une étape par système',
          content: '**Téléchargez LM Studio depuis la [page de téléchargement officielle](https://lmstudio.ai/download), puis suivez l\'étape d\'installation de votre système.** Il faut un Mac Apple Silicon avec macOS 14.0 ou plus récent, un PC Windows x64 (AVX2) ou ARM64, ou Ubuntu 20.04 ou plus récent, avec 16 GB de RAM recommandés (voir le [tableau des prérequis](#system-requirements)). Selon l\'éditeur ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), l\'usage est gratuit ; les conditions peuvent évoluer.',
          items: [
          '**macOS :** ouvrez le fichier .dmg téléchargé et glissez LM Studio dans le dossier Applications.',
          '**Windows :** lancez l\'installeur téléchargé et suivez les instructions.',
          '**Linux :** rendez l\'AppImage téléchargé exécutable avec `chmod +x LM-Studio-*.AppImage`, puis lancez-le.',
          ],
          note: 'Il n\'existe pas de version pour Mac Intel. Après le premier lancement, cherchez un modèle dans l\'application (étapes plus bas).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'Quel modèle convient à votre GPU',
          content: '**Choisissez le modèle selon la mémoire de votre GPU : 8 GB de VRAM pour les modèles 7–8B, 12 GB pour 14B, 16 GB pour 24B, 24 GB pour 27–32B, et un modèle 70B demande environ 40 GB.** Les tailles sont des estimations approximatives en quantification Q4_K_M, tirées du [guide matériel des LLM locaux](/fr/local-llms/local-llm-hardware-guide) de PromptQuorum, qui indique aussi GPU, prix et vitesses. Sur Apple Silicon, la mémoire unifiée joue le rôle de VRAM.',
          itemHeadings: true,
          columns: ['Votre VRAM', 'Modèles adaptés', 'Exemples', 'Taille en Q4_K_M'],
          rows: [
          { 'Votre VRAM': '8 GB', 'Modèles adaptés': '7–8B', 'Exemples': 'Llama 3.1 8B, Qwen3 8B', 'Taille en Q4_K_M': '~5 GB' },
          { 'Votre VRAM': '12 GB', 'Modèles adaptés': '14B', 'Exemples': 'Qwen3 14B', 'Taille en Q4_K_M': '~9 GB' },
          { 'Votre VRAM': '16 GB', 'Modèles adaptés': '24B', 'Exemples': 'Mistral Small 3.1 24B', 'Taille en Q4_K_M': '~14 GB' },
          { 'Votre VRAM': '24 GB', 'Modèles adaptés': '27–32B', 'Exemples': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Taille en Q4_K_M': '~16–19 GB' },
          { 'Votre VRAM': '40 GB+', 'Modèles adaptés': '70B', 'Exemples': 'Llama 3.3 70B', 'Taille en Q4_K_M': '~40 GB' },
          ],
          note: 'Estimations, pas des mesures de PromptQuorum. La formule derrière ces tailles figure dans le [guide de la VRAM](/fr/local-llms/how-much-vram-local-llm).',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: 'Qu\'est-ce que LM Studio ?',
          content: [
            '**LM Studio est une application desktop pour exécuter des LLM locaux.** Elle fournit un navigateur de modèles graphique, une interface de chat intégrée et un serveur API local -- tout dans une seule application. Sous le capot, elle exécute les modèles GGUF avec llama.cpp (et avec MLX sur Apple Silicon), un moteur open source que [Ollama](/fr/local-llms/how-to-install-ollama) prend aussi en charge comme backend.',
            'La différence clé par rapport à Ollama est que LM Studio est entièrement piloté par l\'interface graphique. Vous parcourez et téléchargez des modèles via l\'interface de l\'application, lancez des discussions en un clic et gérez les paramètres du modèle avec des curseurs plutôt que des fichiers de configuration.',
            'Selon l\'éditeur ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio est gratuit pour un usage personnel et professionnel depuis juillet 2025 ; les conditions peuvent évoluer. Elle est développée par Element Labs, Inc. En 2026, elle supporte l\'accélération NVIDIA CUDA, AMD ROCm et Apple Metal.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'Quelles sont les exigences système pour LM Studio ?',
          rows: [
            { 'Spécification': 'Système d\'exploitation', 'Minimum': 'macOS 14.0+, Windows x64 (AVX2) ou ARM64, Ubuntu 20.04+', 'Recommandé': 'Ubuntu 22.04 (plus récentes : moins testées)' },
            { 'Spécification': 'RAM', 'Minimum': 'Pas de minimum fixe (Mac 8 GB : petits modèles)', 'Recommandé': '16 GB ou plus' },
            { 'Spécification': 'Stockage', 'Minimum': 'L\'app plus de la place pour chaque modèle', 'Recommandé': '50 GB+ libres pour plusieurs modèles' },
            { 'Spécification': 'GPU (optionnel)', 'Minimum': 'Optionnel (Windows : 4 GB+ de VRAM dédiée)', 'Recommandé': 'Apple Silicon, ou NVIDIA/AMD avec assez de VRAM' },
          ],
          columns: ['Spécification', 'Minimum', 'Recommandé'],
        },
        download: {
          id: 'download-and-install',
          title: 'Comment télécharger et installer LM Studio ?',
          numberedItems: [
            'Allez sur lmstudio.ai et cliquez sur le bouton télécharger pour votre système d\'exploitation.',
            'macOS : Ouvrez le fichier .dmg et glissez LM Studio vers Applications. Au premier lancement, approuvez l\'invite de sécurité dans Préférences Système → Confidentialité & Sécurité.',
            'Windows : Exécutez l\'installeur LM-Studio-Setup.exe. LM Studio s\'installe dans %LOCALAPPDATA%\\LM-Studio.',
            'Linux : Téléchargez le fichier .AppImage. Rendez-le exécutable avec `chmod +x LM-Studio-*.AppImage` et lancez-le. Aucune installation système requise.',
            'Au premier lancement, LM Studio affiche un écran d\'accueil et vous invite à télécharger un modèle.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'Flux d\'installation de LM Studio : téléchargement depuis lmstudio.ai, installation sur macOS, Windows ou Linux, recherche d\'un modèle GGUF sur Hugging Face, choix de la quantification Q4_K_M (~4,5 Go), et démarrage du chat en 5-30 secondes.',
        },
        findModel: {
          id: 'find-and-download',
          title: 'Comment trouver et télécharger un modèle dans LM Studio ?',
          content: 'Utilisez l\'onglet Recherche (icône loupe dans la barre latérale gauche) pour trouver des modèles :',
          numberedItems: [
            'Cliquez sur l\'onglet Recherche dans la barre latérale gauche.',
            'Tapez un nom de modèle -- par exemple « llama 3.1 » ou « phi-3 mini ».',
            'LM Studio affiche les modèles GGUF correspondants de Hugging Face avec les tailles de fichier et les options de quantification.',
            'Sélectionnez un niveau de quantification. Pour 8 GB de RAM : choisissez Q4_K_M (~4,5 GB pour un modèle 7B). Pour 16 GB de RAM : Q5_K_M ou Q6_K offrent une meilleure qualité.',
            'Cliquez sur la flèche de téléchargement. La progression s\'affiche dans l\'onglet Téléchargements.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'Guide de quantification selon la RAM pour LM Studio : 8 Go de RAM conviennent à Q4_K_M (~4,5 Go, perte de qualité généralement faible) ; 16 Go de RAM conviennent à Q5_K_M ou Q6_K (~5,7-6,5 Go, quasi sans perte) avec marge pour un contexte de 8K+ tokens.',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'Comment commencer à discuter avec un modèle dans LM Studio ?',
          numberedItems: [
            'Cliquez sur l\'onglet Chat (icône bulle de dialogue) dans la barre latérale gauche.',
            'En haut de la fenêtre de chat, cliquez sur la liste déroulante du sélecteur de modèle et choisissez votre modèle téléchargé.',
            'LM Studio charge le modèle en mémoire -- cela prend 5-30 secondes selon la taille du modèle et le matériel.',
            'Tapez votre message dans le champ de saisie en bas et appuyez sur Entrée ou cliquez sur Envoyer.',
            'La réponse du modèle s\'affiche token par token. La vitesse de génération apparaît dans la barre d\'état en bas de la fenêtre.',
          ],
        },
        modelSettings: {
          title: 'Comment ajuster les paramètres du modèle dans LM Studio ?',
          content: 'Le panneau de droite dans l\'onglet Chat expose les paramètres d\'inférence clés :',
          items: [
            '**Température** (par défaut 0,8) : contrôle l\'aléatoire de la réponse. Les valeurs plus basses (0,1-0,4) produisent une sortie plus concentrée et prévisible. Les valeurs plus élevées (0,8-1,2) produisent une sortie plus variée et créative.',
            '**Longueur du contexte** (par défaut 4096 tokens) : l\'historique de conversation maximal que le modèle peut traiter. Un contexte plus long utilise plus de RAM. La plupart des modèles 7B supportent 4096-8192 tokens.',
            '**Couches GPU** (macOS/Linux/Windows avec GPU) : combien de couches du modèle décharger sur le GPU. Réglez au maximum pour l\'inférence la plus rapide si votre GPU a assez de VRAM.',
            '**Invite système** : une instruction persistante ajoutée au début de chaque conversation. Utilisez-la pour définir le rôle ou le comportement du modèle.',
          ],
        },
        localServer: {
          title: 'Comment activer le serveur local de LM Studio ?',
          content: 'LM Studio inclut un serveur local qui imite l\'API OpenAI. De nombreuses applications conçues pour l\'API OpenAI peuvent utiliser votre modèle local via ce serveur, sans garantie de compatibilité complète pour chaque fonctionnalité :',
          numberedItems: [
            'Cliquez sur l\'onglet Serveur Local (l\'icône « <-> ») dans la barre latérale gauche.',
            'Sélectionnez un modèle dans la liste déroulante du modèle en haut.',
            'Cliquez sur « Démarrer le serveur ». Le serveur démarre sur http://localhost:1234.',
            'Votre application doit définir `base_url = "http://localhost:1234/v1"` et n\'importe quelle chaîne comme clé API (le serveur accepte n\'importe quelle valeur).',
          ],
        },
        localServerCode: {
          title: 'Comment se connecter à LM Studio via Python ?',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'Lequel choisir : LM Studio ou Ollama ?',
          rows: [
            { 'Facteur': 'Interface', 'LM Studio': 'Application desktop graphique', 'Ollama': 'Terminal + API' },
            { 'Facteur': 'Source de modèles', 'LM Studio': 'Hugging Face (de nombreux modèles GGUF)', 'Ollama': 'Bibliothèque Ollama (sélectionnée)' },
            { 'Facteur': 'Port API', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Facteur': 'Gestion des modèles', 'LM Studio': 'Navigateur GUI avec info taille fichier', 'Ollama': 'Commandes CLI (ollama pull, list, rm)' },
            { 'Facteur': 'Automatisation', 'LM Studio': 'Orientée GUI ; API locale et CLI lms disponibles', 'Ollama': 'Orientée CLI (scripting, Docker, CI)' },
            { 'Facteur': 'Idéal pour', 'LM Studio': 'Débutants, utilisateurs GUI, exploration de modèles', 'Ollama': 'Développeurs, automatisation, déploiements serveur' },
          ],
          columns: ['Facteur', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Comment dépanner les problèmes courants de LM Studio ?',
          faqs: [
            {
              q: 'LM Studio affiche « Not enough memory to load model »',
              a: 'Le modèle nécessite plus de RAM que disponible. Fermez autres applications pour libérer de la mémoire, ou sélectionnez une quantification plus petite (Q3_K_S au lieu de Q4_K_M). Règle générale : multipliez la taille du fichier par 1,2 pour estimer la RAM requise. Un fichier de 4,5 GB nécessite ~5,4 GB de RAM libres.',
            },
            {
              q: 'Le modèle génère très lentement (moins de 5 tokens/seconde)',
              a: 'Le modèle s\'exécute entièrement sur le CPU. Vérifiez Couches GPU dans le panneau droit -- si cela affiche 0, votre GPU n\'est pas utilisé. Sur macOS, LM Studio active Metal (GPU) automatiquement pour Apple Silicon. Sur Windows/Linux avec NVIDIA, assurez-vous que votre pilote est à jour et augmentez Couches GPU au maximum.',
            },
            {
              q: 'Je ne peux pas trouver un modèle spécifique dans la recherche LM Studio',
              a: 'LM Studio recherche Hugging Face pour les fichiers GGUF. Si un modèle n\'apparaît pas, essayez de rechercher directement par le nom du référentiel Hugging Face (par exemple « bartowski/Llama-3.1-8B-Instruct-GGUF »). Certains modèles plus récents peuvent ne pas être indexés.',
            },
            {
              q: 'Le serveur local retourne des erreurs « model not found »',
              a: 'Un modèle doit être chargé dans l\'onglet Serveur Local avant que le serveur puisse répondre. Ouvrez l\'onglet Serveur Local, sélectionnez un modèle dans la liste déroulante et cliquez sur Démarrer le serveur. Le nom du modèle dans les requêtes API peut être n\'importe quelle chaîne -- LM Studio utilise le modèle actuellement chargé.',
            },
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'LM Studio pour les cas d\'usage sensibles à la confidentialité',
          content: [
            '**UE / RGPD** : LM Studio exécutant des modèles locaux peut être une configuration IA respectueuse de la vie privée pour les utilisateurs de bureau, car en usage local aucune donnée d\'inférence ne quitte l\'appareil ; les téléchargements de modèles et les vérifications de mise à jour passent toujours par Internet. Les prompts, contextes et sorties ne sont pas transmis à des serveurs externes pour l\'inférence, de sorte que la question d\'un transfert hors UE (RGPD, art. 44 et suivants) ne se pose pas pour cette couche. La conformité de votre dispositif global dépend de la base légale, des mesures techniques et organisationnelles et, le cas échéant, d\'une AIPD ; ceci ne constitue pas un conseil juridique. L\'interface graphique de LM Studio rend cette configuration accessible aux professionnels non techniques qui ne peuvent pas utiliser les outils de terminal comme Ollama.',
            '**Japon** : si votre organisation doit documenter où se produit l\'inférence d\'IA, LM Studio maintient un cache de modèles locaux à un chemin fixe sur le disque, ce qui permet de rattacher l\'inférence à un appareil, un fichier de modèle et une version. Cela ne garantit pas à lui seul le respect d\'obligations légales ou réglementaires. Ceci n\'est pas un conseil juridique.',
            '**Chine** : LM Studio permet de trouver les modèles Qwen3 via la recherche Hugging Face -- recherchez « qwen3 » dans le navigateur de modèles pour trouver toutes les tailles disponibles. L\'inférence s\'exécute localement sans appel API externe ; il appartient à chaque organisation de vérifier si cela répond aux exigences de la Loi sur la sécurité des données chinoise (数据安全法) pour son cas d\'usage ; ceci ne constitue pas un conseil juridique.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs courantes lors de l\'installation de LM Studio ?',
          items: [
            '**Ne pas allouer suffisamment de RAM système pour le modèle que vous avez sélectionné.** Vérifiez la taille du fichier modèle et multipliez par 1,2 -- c\'est la RAM libre minimale requise. Un modèle 7B Q4_K_M de 4,5 GB nécessite ~5,4 GB de RAM libres.',
            '**Utiliser un modèle pré-quantifié qui est encore trop volumineux pour la VRAM GPU.** Si un modèle dépasse la VRAM, LM Studio bascule vers l\'inférence CPU, souvent bien plus lente. Vérifiez la taille du fichier par rapport à la VRAM GPU avant le téléchargement.',
            '**S\'attendre à des réponses instantanées de grands modèles sur des systèmes CPU uniquement.** Un modèle 7B sur CPU répond, selon le système, nettement plus lentement que sur GPU, souvent après plusieurs secondes. C\'est normal. Utilisez un modèle 3B pour des réponses plus rapides sur les machines CPU uniquement.',
            '**Définir Couches GPU à 0 sur une machine NVIDIA** : LM Studio doit auto-détecter CUDA. Après une installation fraîche, vérifiez la valeur « Couches GPU » : si elle affiche 0, le GPU n\'est pas utilisé. Ouvrez le panneau modèle → Couches GPU → glissez au maximum. L\'écart de vitesse entre l\'inférence CPU et GPU peut être très important selon le modèle, la quantification et le matériel (souvent un multiple) ; les valeurs exactes dépendent fortement de votre système.',
            '**Télécharger des modèles FP16 quand Q4_K_M est disponible** : Les modèles FP16 sont deux fois plus volumineux que Q4_K_M sans gain de qualité appréciable pour les tâches de chat. Un modèle 7B en FP16 est ~14 GB ; le même modèle à Q4_K_M est ~4,5 GB. Téléchargez toujours Q4_K_M par défaut sauf si vous avez une raison spécifique d\'utiliser une précision supérieure.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Qu\'est-ce que les LLM locaux ?](/fr/local-llms/what-are-local-llms) -- Concepts et composants clés',
            '[Exécuter votre premier LLM local](/fr/local-llms/run-first-local-llm) -- Prochaines étapes après l\'installation',
            '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Alternative basée sur terminal à LM Studio',
            '[Meilleurs modèles LLM locaux pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- Recommandations de modèles par matériel',
            '[Guide de matériel LLM local](/fr/local-llms/local-llm-hardware-guide) -- Recommandations GPU et RAM pour obtenir les meilleures performances de LM Studio',
            '[LLM locaux vs APIs cloud](/fr/local-llms/local-llms-vs-cloud-apis) -- Comparaison de coûts et de vitesse pour décider quand l\'inférence locale dans LM Studio est le bon choix',
            '[Meilleurs LLMs pour le code 2026](/fr/local-llms/best-local-llms-for-coding) — Comparatif Qwen3-Coder vs DeepSeek',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'LM Studio affiche « Not enough memory to load model »',
              a: 'Le modèle nécessite plus de RAM que disponible. Fermez autres applications pour libérer de la mémoire, ou sélectionnez une quantification plus petite (Q3_K_S au lieu de Q4_K_M). Règle générale : multipliez la taille du fichier par 1,2 pour estimer la RAM requise. Un fichier de 4,5 GB nécessite ~5,4 GB de RAM libres.',
            },
            {
              q: 'Le modèle génère très lentement (moins de 5 tokens/seconde)',
              a: 'Le modèle s\'exécute entièrement sur le CPU. Vérifiez Couches GPU dans le panneau droit -- si cela affiche 0, votre GPU n\'est pas utilisé. Sur macOS, LM Studio active Metal (GPU) automatiquement pour Apple Silicon. Sur Windows/Linux avec NVIDIA, assurez-vous que votre pilote est à jour et augmentez Couches GPU au maximum.',
            },
            {
              q: 'Je ne peux pas trouver un modèle spécifique dans la recherche LM Studio',
              a: 'LM Studio recherche Hugging Face pour les fichiers GGUF. Si un modèle n\'apparaît pas, essayez de rechercher directement par le nom du référentiel Hugging Face (par exemple « bartowski/Llama-3.1-8B-Instruct-GGUF »). Certains modèles plus récents peuvent ne pas être indexés.',
            },
            {
              q: 'Le serveur local retourne des erreurs « model not found »',
              a: 'Un modèle doit être chargé dans l\'onglet Serveur Local avant que le serveur puisse répondre. Ouvrez l\'onglet Serveur Local, sélectionnez un modèle dans la liste déroulante et cliquez sur Démarrer le serveur. Le nom du modèle dans les requêtes API peut être n\'importe quelle chaîne -- LM Studio utilise le modèle actuellement chargé.',
            },
            {
              q: 'LM Studio est-il gratuit ?',
              a: 'Oui. Selon l\'éditeur ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio est gratuit depuis juillet 2025 pour un usage personnel et professionnel ; seul le niveau Enterprise/Teams, distinct, est payant. Les conditions peuvent évoluer : consultez les conditions d\'utilisation actuelles sur [lmstudio.ai](https://lmstudio.ai). Les modèles téléchargés sont soumis à leurs propres licences, qui peuvent limiter certains usages (par exemple commerciaux).',
            },
            {
              q: 'Quelle est la différence entre LM Studio et Ollama ?',
              a: 'LM Studio est une application desktop graphique -- vous parcourez et téléchargez des modèles via une interface visuelle, lancez des discussions en un clic et ajustez les paramètres avec des curseurs. Ollama est un outil en ligne de commande et service d\'arrière-plan -- plus rapide à configurer avec une seule commande, meilleur pour l\'automatisation et le scripting. LM Studio exécute les modèles GGUF avec llama.cpp (et MLX sur Apple Silicon) ; Ollama prend aussi en charge llama.cpp comme backend. Choisissez LM Studio pour un usage piloté par interface graphique ; choisissez Ollama pour les flux de travail de développeurs et l\'automatisation.',
            },
            {
              q: 'Quels modèles fonctionnent avec LM Studio ?',
              a: 'De nombreux modèles au format GGUF de Hugging Face (un modèle d\'architecture non prise en charge peut ne pas se charger). La recherche intégrée interroge le hub de modèles Hugging Face. Les choix populaires incluent Llama 3.1 8B, Qwen3 8B, Mistral Small, Phi-4 Mini et Gemma 4 E2B. Recherchez par nom de modèle dans l\'onglet Discover. LM Studio affiche les tailles de fichier pour chaque niveau de quantification avant le téléchargement.',
            },
            {
              q: 'LM Studio utilise-t-il mon GPU automatiquement ?',
              a: 'Oui sur Apple Silicon -- l\'accélération Metal est activée par défaut. Sur Windows et Linux avec GPU NVIDIA, LM Studio détecte CUDA automatiquement si les pilotes sont installés. Vérifiez le paramètre Couches GPU dans le panneau modèle -- s\'il affiche 0 couche sur GPU, votre GPU n\'est pas utilisé. Augmentez Couches GPU au maximum pour utiliser pleinement la VRAM disponible.',
            },
            {
              q: 'Où LM Studio stocke-t-il les modèles téléchargés ?',
              a: 'Sur macOS : ~/Library/Application Support/LM Studio/Models/lmstudio-community/. Sur Windows : %USERPROFILE%\\.cache\\lm-studio\\models\\. Sur Linux : ~/.cache/lm-studio/models/. Vous pouvez modifier l\'emplacement du stockage dans LM Studio Paramètres → Général → Répertoire de stockage des modèles.',
            },
            {
              q: 'Puis-je utiliser LM Studio avec VS Code ou Cursor ?',
              a: 'Oui. Lancez le serveur local de LM Studio sur localhost:1234, puis configurez votre extension IDE pour utiliser http://localhost:1234/v1 comme URL de base API avec n\'importe quelle chaîne comme clé API. Les extensions VS Code qui supportent les APIs compatibles OpenAI (Continue, alternatives GitHub Copilot) peuvent généralement être utilisées avec LM Studio ; testez les fonctionnalités dont vous avez besoin.',
            },
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            'LM Studio. (2026). « Documentation de LM Studio et notes de publication. » lmstudio.ai. [lmstudio.ai/docs](https://lmstudio.ai/docs) -- Guides d\'installation officiels, documentation API et informations de compatibilité matérielle.',
            'Hugging Face. (2026). « Hub de modèles GGUF. » [huggingface.co/models?library=gguf](https://huggingface.co/models?library=gguf) -- Répertoire complet des modèles quantifiés GGUF compatibles avec le navigateur de modèles de LM Studio.',
            'Contributeurs llama.cpp. (2026). « llama.cpp -- Moteur d\'inférence CPU/GPU. » [github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) -- Backend d\'inférence utilisé par LM Studio, avec données de compatibilité matérielle et de performance.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Installer LM Studio : guide de configuration de l\'application desktop pour macOS, Windows et Linux',
        'description': 'Guide étape par étape d\'installation de LM Studio et configuration du premier modèle. Exécuteur de LLM local piloté par interface graphique avec interface de chat et serveur local compatible OpenAI.',
        'url': 'https://www.promptquorum.com/fr/local-llms/how-to-install-lm-studio',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'LM Studio' },
          { '@type': 'Thing', 'name': 'LLM local' },
          { '@type': 'Thing', 'name': 'Modèle GGUF' },
          { '@type': 'Thing', 'name': 'API compatible OpenAI' },
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'llama.cpp' }
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways']
        },
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'LM Studio' },
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' }
        ]
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment installer LM Studio et exécuter votre premier modèle',
        'totalTime': 'PT5M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Télécharger LM Studio depuis lmstudio.ai' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Installer sur macOS, Windows ou Linux' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Rechercher un modèle dans l\'onglet Discover' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Télécharger la quantification Q4_K_M' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Ouvrir l\'onglet Chat et commencer à discuter' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'LM Studio affiche « Not enough memory to load model »', acceptedAnswer: { '@type': 'Answer', text: 'Le modèle nécessite plus de RAM que disponible. Fermez autres applications pour libérer de la mémoire, ou sélectionnez une quantification plus petite (Q3_K_S au lieu de Q4_K_M). Règle générale : multipliez la taille du fichier par 1,2 pour estimer la RAM requise. Un fichier de 4,5 GB nécessite ~5,4 GB de RAM libres.' } },
          { '@type': 'Question', name: 'Le modèle génère très lentement (moins de 5 tokens/seconde)', acceptedAnswer: { '@type': 'Answer', text: 'Le modèle s\'exécute entièrement sur le CPU. Vérifiez Couches GPU dans le panneau droit -- si cela affiche 0, votre GPU n\'est pas utilisé. Sur macOS, LM Studio active Metal (GPU) automatiquement pour Apple Silicon. Sur Windows/Linux avec NVIDIA, assurez-vous que votre pilote est à jour et augmentez Couches GPU au maximum.' } },
          { '@type': 'Question', name: 'Je ne peux pas trouver un modèle spécifique dans la recherche LM Studio', acceptedAnswer: { '@type': 'Answer', text: 'LM Studio recherche Hugging Face pour les fichiers GGUF. Si un modèle n\'apparaît pas, essayez de rechercher directement par le nom du référentiel Hugging Face (par exemple « bartowski/Llama-3.1-8B-Instruct-GGUF »). Certains modèles plus récents peuvent ne pas être indexés.' } },
          { '@type': 'Question', name: 'Le serveur local retourne des erreurs « model not found »', acceptedAnswer: { '@type': 'Answer', text: 'Un modèle doit être chargé dans l\'onglet Serveur Local avant que le serveur puisse répondre. Ouvrez l\'onglet Serveur Local, sélectionnez un modèle dans la liste déroulante et cliquez sur Démarrer le serveur. Le nom du modèle dans les requêtes API peut être n\'importe quelle chaîne -- LM Studio utilise le modèle actuellement chargé.' } },
          { '@type': 'Question', name: 'LM Studio est-il gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Selon l\'éditeur ([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)), LM Studio est gratuit depuis juillet 2025 pour un usage personnel et professionnel ; seul le niveau Enterprise/Teams, distinct, est payant. Les conditions peuvent évoluer : consultez les conditions d\'utilisation actuelles sur [lmstudio.ai](https://lmstudio.ai). Les modèles téléchargés sont soumis à leurs propres licences, qui peuvent limiter certains usages (par exemple commerciaux).' } },
          { '@type': 'Question', name: 'Quelle est la différence entre LM Studio et Ollama ?', acceptedAnswer: { '@type': 'Answer', text: 'LM Studio est une application desktop graphique -- vous parcourez et téléchargez des modèles via une interface visuelle, lancez des discussions en un clic et ajustez les paramètres avec des curseurs. Ollama est un outil en ligne de commande et service d\'arrière-plan -- plus rapide à configurer avec une seule commande, meilleur pour l\'automatisation et le scripting. LM Studio exécute les modèles GGUF avec llama.cpp (et MLX sur Apple Silicon) ; Ollama prend aussi en charge llama.cpp comme backend.' } },
          { '@type': 'Question', name: 'Quels modèles fonctionnent avec LM Studio ?', acceptedAnswer: { '@type': 'Answer', text: 'De nombreux modèles au format GGUF de Hugging Face (un modèle d\'architecture non prise en charge peut ne pas se charger). Les choix populaires incluent Llama 3.1 8B, Qwen3 8B, Mistral Small, Phi-4 Mini et Gemma 4 E2B. Recherchez par nom de modèle dans l\'onglet Discover. LM Studio affiche les tailles de fichier pour chaque niveau de quantification avant le téléchargement.' } },
          { '@type': 'Question', name: 'LM Studio utilise-t-il mon GPU automatiquement ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui sur Apple Silicon -- l\'accélération Metal est activée par défaut. Sur Windows et Linux avec GPU NVIDIA, LM Studio détecte CUDA automatiquement si les pilotes sont installés. Vérifiez le paramètre Couches GPU dans le panneau modèle -- s\'il affiche 0 couche sur GPU, votre GPU n\'est pas utilisé.' } },
          { '@type': 'Question', name: 'Où LM Studio stocke-t-il les modèles téléchargés ?', acceptedAnswer: { '@type': 'Answer', text: 'Sur macOS : ~/Library/Application Support/LM Studio/Models/lmstudio-community/. Sur Windows : %USERPROFILE%\\.cache\\lm-studio\\models\\. Sur Linux : ~/.cache/lm-studio/models/. Vous pouvez modifier l\'emplacement du stockage dans LM Studio Paramètres → Général → Répertoire de stockage des modèles.' } },
          { '@type': 'Question', name: 'Puis-je utiliser LM Studio avec VS Code ou Cursor ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Lancez le serveur local de LM Studio sur localhost:1234, puis configurez votre extension IDE pour utiliser http://localhost:1234/v1 comme URL de base API avec n\'importe quelle chaîne comme clé API. Les extensions VS Code qui supportent les APIs compatibles OpenAI (Continue, alternatives GitHub Copilot) peuvent généralement être utilisées avec LM Studio ; testez les fonctionnalités dont vous avez besoin.' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Comparaison LM Studio vs Ollama',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Interface', 'description': 'LM Studio : application desktop graphique. Ollama : terminal plus API.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Source de modèles', 'description': 'LM Studio : de nombreux GGUF sur Hugging Face. Ollama : bibliothèque sélectionnée de modèles.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Port API', 'description': 'LM Studio : localhost:1234. Ollama : localhost:11434.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Gestion des modèles', 'description': 'LM Studio : navigateur GUI avec tailles. Ollama : commandes CLI.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Automatisation', 'description': 'LM Studio : orientée GUI, avec API locale et CLI lms. Ollama : orientée CLI, avec scripting et Docker.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Idéal pour', 'description': 'LM Studio : débutants et utilisateurs GUI. Ollama : développeurs et déploiements serveur.' }
        ]
      },
    },
    ja: {
      designSkin: 'hub',
      theme: 'はじめに',
      title: 'LM Studio のインストール方法：macOS・Windows・Linux 向けデスクトップアプリ設定ガイド',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-ja.webp',
      seoTitle: 'LM Studioのインストール方法とGPU別モデルの目安',
      intro: 'LM Studioは、ターミナルコマンドなしでローカルLLMを実行できるデスクトップアプリケーションです。lmstudio.aiからインストーラーをダウンロードしてアプリを開き、モデルを名前で検索してダウンロードボタンをクリックしてチャットを開始します--プロセス全体が5分以内に完了します。提供元の説明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)）によれば利用は無料ですが、条件は変更される場合があります。LM StudioはmacOS（Apple Silicon）、Windows、およびLinux（AppImage）で動作し、Hugging Faceの大規模なモデルライブラリから多くのGGUF量子化モデルをサポートしています（未対応のアーキテクチャのモデルは読み込めない場合があります）。組み込みのチャットUI、localhost:1234上のOpenAI互換ローカルサーバー、およびApple Metal、NVIDIA CUDA、AMD ROCmの自動GPU加速が含まれています。',
      metaDescription: 'LM StudioをWindows・Mac・Linuxに入れる手順。公式ダウンロード、OS別のインストール手順、VRAM 8・12・16・24GBで動くモデルの目安を紹介します。',
      leadAnswerBlock: '**LM Studioは、ターミナルコマンドなしで、グラフィカルインターフェースからローカルLLMを閲覧・ダウンロード・実行できるデスクトップアプリです。macOS、Windows、Linuxで動作し、組み込みのチャットUIとOpenAI互換のローカルサーバーを備えています。**',
      publishDate: '2026-04-04',
      dateModified: '2026-11-14',
      readTime: '7分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'キーポイント', anchor: '#key-takeaways' },
        { label: 'ダウンロードとインストール：OS別に1ステップ', anchor: '#download-install-quick' },
        { label: 'GPUに合うモデルの目安', anchor: '#models-by-gpu' },
        { label: 'LM Studioとは', anchor: '#what-is-lm-studio' },
        { label: 'システム要件', anchor: '#system-requirements' },
        { label: 'ダウンロードとインストール', anchor: '#download-and-install' },
        { label: 'モデルの検索とダウンロード', anchor: '#find-and-download' },
        { label: 'チャット開始', anchor: '#start-chatting' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: 'トラブルシューティング', anchor: '#troubleshooting' },
        { label: '地域コンテキスト', anchor: '#regional-context' },
        { label: '一般的な間違い', anchor: '#common-mistakes' },
        { label: '関連読み物', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'ソース', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studioは、macOS、Windows、Linux向けのデスクトップアプリで、グラフィカルインターフェースを通じてHugging Faceの多くのGGUF量子化モデルを閲覧・ダウンロード・チャットでき（未対応のアーキテクチャのモデルは読み込めない場合があります）、ターミナルコマンドは不要で、OpenAI互換のローカルサーバーも内蔵しています。提供元によれば利用は無料ですが、条件は変更される場合があります。' },
            { type: 'plain-terms', text: 'コマンドラインを使いたくない人にとって、LM StudioはクリックだけでAIモデルを自分のコンピューターで実行できる方法です。アプリをダウンロードし、その中で名前でモデルを検索し、ダウンロードをクリックしてチャットを始めるだけです -- 全体で5分もかからず、他のアプリからも使えるサーバーが内蔵されています。' },
          ],
          title: '重要ポイント',
          items: [
            'LM Studio を lmstudio.ai からダウンロード--macOS（Apple Silicon）、Windows、および Linux（AppImage）で利用可能です。',
            '要件：Apple SiliconのmacOS 14.0以降、Windows x64（AVX2）またはARM64、Ubuntu 20.04以降。RAMは16GB推奨。Apple Silicon Mac はデフォルトで GPU 加速を使用します。',
            '組み込みモデルブラウザは Hugging Face を直接検索--アプリを離れずに GGUF モデルをダウンロード。',
            'LM Studio は組み込みチャット UI と、ポート 1234 上の OpenAI 互換ローカルサーバーを含みます。',
            '最適なユースケース：GUI を好む初心者、複数のモデルを並べて比較したいユーザー、ターミナルコマンドなしで完全なパッケージが必要な全員向け。',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'LM Studioのダウンロードとインストール：OS別に1ステップ',
          content: '**LM Studioは[公式ダウンロードページ](https://lmstudio.ai/download)から入手し、お使いのOSの手順に従ってインストールします。** 対応環境はmacOS 14.0以降のApple Silicon、Windowsのx64（AVX2）またはARM64、Ubuntu 20.04以降で、RAMは16GBが推奨です（[要件表](#system-requirements)を参照）。提供元の説明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)）によれば利用は無料ですが、条件は変更される場合があります。',
          items: [
          '**macOS：** ダウンロードした.dmgファイルを開き、LM Studioを「アプリケーション」フォルダにドラッグします。',
          '**Windows：** ダウンロードしたインストーラーを実行し、画面の指示に従います。',
          '**Linux：** ダウンロードしたAppImageに`chmod +x LM-Studio-*.AppImage`で実行権限を付けて起動します。',
          ],
          note: 'Intel Mac向けのビルドはありません。初回起動後は、アプリ内でモデルを検索します（手順は下記）。',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'GPUに合うモデルの目安',
          content: '**モデルはGPUメモリに合わせて選びます。VRAM 8GBなら7〜8B、12GBなら14B、16GBなら24B、24GBなら27〜32Bが目安で、70Bには約40GBが必要です。** サイズはQ4_K_M量子化での概算で、PromptQuorumの[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide)の数値に基づきます（GPU・価格・速度もこちらに掲載）。Apple SiliconではユニファイドメモリがVRAMの役割を果たします。',
          itemHeadings: true,
          columns: ['VRAM', '動作するモデル', '例', 'Q4_K_M時のサイズ'],
          rows: [
          { 'VRAM': '8 GB', '動作するモデル': '7–8B', '例': 'Llama 3.1 8B, Qwen3 8B', 'Q4_K_M時のサイズ': '~5 GB' },
          { 'VRAM': '12 GB', '動作するモデル': '14B', '例': 'Qwen3 14B', 'Q4_K_M時のサイズ': '~9 GB' },
          { 'VRAM': '16 GB', '動作するモデル': '24B', '例': 'Mistral Small 3.1 24B', 'Q4_K_M時のサイズ': '~14 GB' },
          { 'VRAM': '24 GB', '動作するモデル': '27–32B', '例': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Q4_K_M時のサイズ': '~16–19 GB' },
          { 'VRAM': '40 GB+', '動作するモデル': '70B', '例': 'Llama 3.3 70B', 'Q4_K_M時のサイズ': '~40 GB' },
          ],
          note: '推定値であり、PromptQuorumによる実測ではありません。サイズの計算式は[VRAMガイド](/ja/local-llms/how-much-vram-local-llm)を参照してください。',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: 'LM Studio とは',
          content: [
            '**LM Studioはローカルの大規模言語モデル（LLM）を実行するためのデスクトップアプリケーション。** グラフィカルモデルブラウザ、組み込みのチャットインターフェース、およびローカルAPIサーバー--すべて1つのアプリケーションに含まれている。内部では、GGUFモデルをllama.cpp（Apple SiliconではMLXも）で実行します。llama.cppは、[Ollama](/ja/local-llms/how-to-install-ollama)もバックエンドとして対応しているオープンソースのエンジンです。',
            'Ollamaとの主な違いは、LM StudioがGUIによって完全に駆動されていること。アプリケーションインターフェースを通じてモデルを閲覧およびダウンロード、ワンクリックでチャットを開始、構成ファイルではなくスライダーでモデル設定を管理。',
            '提供元の説明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)）によれば、LM Studioは2025年7月から個人利用・業務利用ともに無料です（条件は変更される場合があります）。開発元はElement Labs, Inc.です。2026年現在、NVIDIA CUDA、AMD ROCm、およびApple Metal加速をサポート。',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'LM Studioのシステム要件は何ですか？',
          rows: [
            { '仕様': 'オペレーティングシステム', '最小要件': 'macOS 14.0以降、Windows x64（AVX2）またはARM64、Ubuntu 20.04以降', '推奨': 'Ubuntu 22.04（それより新しい版は検証が少ない）' },
            { '仕様': 'RAM', '最小要件': '固定の最小値なし（8GBのMacは小型モデルのみ）', '推奨': '16GB以上' },
            { '仕様': 'ストレージ', '最小要件': 'アプリ本体＋各モデル分の空き容量', '推奨': '複数モデル用に50GB以上の空き容量' },
            { '仕様': 'GPU（オプション）', '最小要件': '任意（Windowsは専用VRAM 4GB以上）', '推奨': 'Apple Silicon、または十分なVRAMのNVIDIA/AMD' },
          ],
          columns: ['仕様', '最小要件', '推奨'],
        },
        download: {
          id: 'download-and-install',
          title: 'LM Studioをダウンロードしてインストールする方法',
          numberedItems: [
            'lmstudio.aiにアクセスして、お使いのOSのダウンロードボタンをクリック。',
            'macOS：.dmgファイルを開いてLM Studioをアプリケーションにドラッグ。初回起動時に、システム環境設定→プライバシーとセキュリティでセキュリティプロンプトを承認。',
            'Windows：LM-Studio-Setup.exeインストーラーを実行。LM Studioは%LOCALAPPDATA%\\LM-Studioにインストール。',
            'Linux：.AppImageファイルをダウンロード。`chmod +x LM-Studio-*.AppImage`で実行可能にして実行。システムインストール不要。',
            '初回起動時に、LM Studioはウェルカムスクリーンを表示し、モデルのダウンロードをお願い。',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'LM Studioのインストールの流れ: lmstudio.aiからダウンロード、macOS・Windows・Linuxへのインストール、Hugging FaceでのGGUFモデル検索、Q4_K_M量子化（約4.5GB）の選択、5〜30秒でのチャット開始。',
        },
        findModel: {
          id: 'find-and-download',
          title: 'LM Studioでモデルを検索してダウンロードする方法',
          content: '検索タブ（左サイドバーの虫眼鏡アイコン）を使用してモデルを検索：',
          numberedItems: [
            '左サイドバーの検索タブをクリック。',
            'モデル名を入力--例えば「llama 3.1」または「phi-3 mini」。',
            'LM Studioはファイルサイズと量子化オプションを含むHugging FaceのマッチングGGUFモデルを表示。',
            '量子化レベルを選択。8GBのRAM用：Q4_K_M（7Bモデルの場合～4.5GB）を選択。16GBのRAM用：Q5_K_MまたはQ6_Kの方が品質が良い。',
            'ダウンロード矢印をクリック。プログレスはダウンロードタブに表示。',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'LM StudioのRAM別量子化ガイド: 8GBのRAMにはQ4_K_M（約4.5GB、品質低下は通常小さい）が適し、16GBのRAMにはQ5_K_MまたはQ6_K（約5.7〜6.5GB、ほぼ無損失）が適し、8K以上のコンテキストに余裕がある。',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'LM Studioでモデルとのチャットを開始する方法',
          numberedItems: [
            '左サイドバーのチャットタブ（吹き出しアイコン）をクリック。',
            'チャットウィンドウの上部で、モデルセレクタードロップダウンをクリックしてダウンロード済みモデルを選択。',
            'LM Studioはモデルをメモリにロード--これはモデルサイズとハードウェアによって5～30秒かかる。',
            '下部の入力フィールドにメッセージを入力し、Enterキーを押すか送信をクリック。',
            'モデルの応答はトークンバイトークンでストリーム配信。生成速度はウィンドウの下部のステータスバーに表示。',
          ],
        },
        modelSettings: {
          title: 'LM Studioでモデル設定を調整する方法',
          content: 'チャットタブの右パネルは主要な推論パラメータを公開：',
          items: [
            '**Temperature**（デフォルト0.8）：応答のランダム性を制御。低い値（0.1～0.4）はより焦点を絞った、予測可能な出力を生成。高い値（0.8～1.2）はより多様で創造的な出力を生成。',
            '**Context Length**（デフォルト4096トークン）：モデルが処理できる最大会話履歴。より長いコンテキストはより多くのRAMを使用。ほとんどの7Bモデルは4096～8192トークンをサポート。',
            '**GPU Layers**（macOS/Linux/Windows with GPU）：モデルレイヤーの数をGPUにオフロード。GPU用に十分なVRAMがあれば、高速推論のため最大に設定。',
            '**System Prompt**：すべての会話の前に付加される永続的な指示。これを使用してモデルの役割または動作を設定。',
          ],
        },
        localServer: {
          title: 'LM Studioのローカルサーバーを有効にする方法',
          content: 'LM StudioにはOpenAI APIをミミックするローカルサーバーが含まれている。OpenAI API 向けの多くのアプリケーションはこのサーバー経由でローカルモデルを使用できますが、すべての機能で互換性が保証されるわけではありません：',
          numberedItems: [
            '左サイドバーのローカルサーバータブ（「<->」アイコン）をクリック。',
            '上部のモデルドロップダウンでモデルを選択。',
            '「サーバーを開始」をクリック。サーバーはhttp://localhost:1234で起動。',
            'アプリケーションは`base_url = "http://localhost:1234/v1"`を設定し、APIキーとして任意の文字列を使用する必要がある（サーバーは任意の値を受け入れる）。',
          ],
        },
        localServerCode: {
          title: 'Pythonを介してLM Studioに接続する方法',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'LM StudioまたはOllamaを選択する方法',
          rows: [
            { '要素': 'インターフェース', 'LM Studio': 'グラフィカルデスクトップアプリ', 'Ollama': 'ターミナル + API' },
            { '要素': 'モデルソース', 'LM Studio': 'Hugging Face（多くのGGUFモデル）', 'Ollama': 'Ollama Library（キュレーション）' },
            { '要素': 'APIポート', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { '要素': 'モデル管理', 'LM Studio': 'ファイルサイズ情報を含むGUI Browser', 'Ollama': 'CLIコマンド（ollama pull、list、rm）' },
            { '要素': '自動化', 'LM Studio': 'GUI中心（ローカルAPIとlms CLIも利用可）', 'Ollama': 'CLI中心（スクリプティング、Docker、CI）' },
            { '要素': '最適ユースケース', 'LM Studio': '初心者、GUIユーザー、モデル探索', 'Ollama': '開発者、自動化、サーバー展開' },
          ],
          columns: ['要素', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'LM Studioの一般的な問題をトラブルシューティングする方法',
          faqs: [
            {
              q: 'LM Studioが「モデルをロードするメモリが不足しています」と表示される',
              a: 'モデルには利用可能なメモリより多いRAMが必要。他のアプリケーションを閉じてメモリを解放するか、より小さい量子化を選択（Q4_K_MではなくQ3_K_S）。一般的なルール：推定RAMを取得するためにモデルファイルサイズに1.2を掛ける。4.5GBファイルは～5.4GB空きRAMが必要。',
            },
            {
              q: 'モデルが非常にゆっくり生成される（秒あたり5トークン未満）',
              a: 'モデルはCPU上で完全に実行されている。右パネルのGPU Layersをチェック--0が表示される場合、GPUは使用されていない。macOSでは、LM StudioはApple SiliconのMetalを自動的に有効にする。Windows/Linuxの場合、NVIDIAドライバーが最新であることを確認し、GPU Layersを最大値に増やす。',
            },
            {
              q: 'LM Studio検索で特定のモデルが見つからない',
              a: 'LM StudioはGGUFファイルをHugging Faceで検索している。モデルが表示されない場合は、Hugging Faceリポジトリ名を直接検索（例：「bartowski/Llama-3.1-8B-Instruct-GGUF」）。新しいモデルの一部はまだインデックス化されていない可能性。',
            },
            {
              q: 'ローカルサーバーが「モデルが見つかりません」エラーを返す',
              a: 'モデルは、サーバーが応答する前にローカルサーバータブにロードされている必要がある。ローカルサーバータブを開き、ドロップダウンからモデルを選択し、サーバーの開始をクリック。APIリクエストのモデル名は任意の文字列にできる--LM Studioは現在ロードされているモデルを使用。',
            },
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'プライバシーに敏感なユースケース向けのLM Studio',
          content: [
            '**日本**：組織がAI推論の実行場所を文書化する必要がある場合、LM Studioは固定パスにモデルキャッシュを保持するため、推論をデバイス、モデルファイル、バージョンに紐づけて記録しやすくなります。法令やガイドラインへの適合が自動的に保証されるわけではありません。これは法的助言ではありません。',
            '**東アジア地域**：LM StudioではHugging Face検索を通じてQwen3モデルを探せます--モデルブラウザで「qwen3」を検索すると、利用可能なサイズが見つかります。',
            '**データセキュリティ**：LM Studioの推論はローカルで実行され、推論自体に外部API呼び出しはありません（モデルのダウンロードやアップデート確認にはインターネット接続が必要です）。データセキュリティ法（数据安全法）など各地域のデータ処理要件を満たすかどうかは、利用目的ごとに確認が必要です（法的助言ではありません）。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'LM Studioをインストールするときの一般的な間違いは何ですか？',
          items: [
            '**選択したモデルに十分なシステムRAMを割り当てていない。** モデルファイルサイズをチェックして1.2を掛ける--これは必要な最小空きRAM。4.5GB Q4_K_M 7Bモデルは～5.4GB空きRAMが必要。',
            '**GPU VRAMにはまだ大きすぎる事前量子化モデルを使用している。** モデルがVRAMを超える場合、LM StudioはCPU推論にフォールバックし、ハードウェアによっては大幅に遅くなる場合があります。ダウンロード前にファイルサイズとGPU VRAMを確認。',
            '**CPU専用システムから大規模モデルからの即座の応答を期待している。** 7Bモデルは、ハードウェアによっては秒あたり数トークンから数十トークン程度しか生成できず、200トークンの応答に数秒からそれ以上かかる場合があります。これは正常です。CPU専用マシンで高速応答を見つけるためには3Bモデルを使用。',
            '**NVIDIAマシンのGPU Layersを0に設定している：** LM StudioはCUDAを自動検出するはずです。新規インストール後は「GPU Layers」の値を確認してください。0の場合、GPUは使用されていません。モデルパネルを開く→GPU Layers→最大値にドラッグ。CPU推論とGPU推論の速度差は、モデル・量子化・ハードウェアによって大きく変わり、数倍以上になることもあります。正確な値はお使いの環境に大きく左右されます。',
            '**FP16モデルが利用可能であるときQ4_K_Mをダウンロードしている。** FP16モデルはチャットタスク用のQ4_K_Mより2倍大きく、品質面の向上はわずか。7BモデルのFP16は～14GB；同じモデルはQ4_K_Mでは約4.5GB。より高い精度を使用する特定の理由がない限り、常にデフォルトとしてQ4_K_Mをダウンロード。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連読み物',
          items: [
            '[ローカルLLMとは何ですか？](/ja/local-llms/what-are-local-llms) -- コア概念とコンポーネント',
            '[はじめてのローカルLLMを実行](/ja/local-llms/run-first-local-llm) -- インストール後の次のステップ',
            '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- LM Studioのターミナルベースの代替案',
            '[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) -- ハードウェアごとのモデル推奨',
            '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) -- LM Studioでお使いのハードウェアから最高のパフォーマンスを取得するためのGPUおよびRAM推奨',
            '[ローカルLLM対クラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis) -- ローカル推論がお使いのハードウェアにとって正しい選択であるときを決定するためのコストと速度の比較',
            '[2026年コーディング用ローカルLLM比較](/ja/local-llms/best-local-llms-for-coding) — Qwen3-CoderとDeepSeekのベンチマーク',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: 'LM Studioが「モデルをロードするメモリが不足しています」と表示される', a: 'モデルには利用可能なメモリより多いRAMが必要。他のアプリケーションを閉じてメモリを解放するか、より小さい量子化を選択。一般的なルール：推定RAMを取得するためにモデルファイルサイズに1.2を掛ける。4.5GBファイルは～5.4GB空きRAMが必要。' },
            { q: 'モデルが非常にゆっくり生成される（秒あたり5トークン未満）', a: 'モデルはCPU上で完全に実行。右パネルのGPU Layersをチェック--0が表示される場合、GPUは使用されていない。macOSでは、LM StudioはApple SiliconのMetalを自動的に有効。Windows/Linuxの場合、NVIDIAドライバーが最新であることを確認し、GPU Layersを最大値に増やす。' },
            { q: 'LM Studio検索で特定のモデルが見つからない', a: 'LM StudioはGGUFファイルをHugging Faceで検索している。モデルが表示されない場合は、Hugging Faceリポジトリ名を直接検索。新しいモデルの一部はまだインデックス化されていない可能性。' },
            { q: 'ローカルサーバーが「モデルが見つかりません」エラーを返す', a: 'モデルは、サーバーが応答する前にローカルサーバータブにロードされている必要がある。ローカルサーバータブを開き、ドロップダウンからモデルを選択し、サーバーの開始をクリック。APIリクエストのモデル名は任意の文字列にできる。' },
            { q: 'LM Studioは無料ですか？', a: 'はい。提供元の説明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)）によれば、2025年7月以降は個人利用・業務利用ともに無料で、有料なのは別枠のEnterprise/Teamsのみです。条件は変更される場合があるため、最新の利用規約を[lmstudio.ai](https://lmstudio.ai)でご確認ください。ダウンロードしたモデルには、それぞれ個別のライセンスが適用され、商用利用などが制限される場合があります。' },
            { q: 'LM StudioとOllamaの違いは何ですか？', a: 'LM Studioはグラフィカルデスクトップアプリ。視覚的インターフェースを通じてモデルを閲覧およびダウンロード、ワンクリックでチャット開始、スライダーで設定を調整。Ollamaはコマンドラインツールおよびバックグラウンドサービス--1つのコマンドで設定するのが高速。' },
            { q: 'LM Studioはどのモデルで動作しますか？', a: 'Hugging Faceの多くのGGUF形式モデルに対応しています（未対応のアーキテクチャのモデルは読み込めない場合があります）。人気のある選択肢には、Llama 3.1 8B、Qwen3 8B、Mistral Small、Phi-4 Mini、およびGemma 4 E2Bが含まれる。Discover tabでモデル名で検索。LM Studioはダウンロード前に各量子化レベルのファイルサイズを表示。' },
            { q: 'LM StudioはGPUを自動的に使用していますか？', a: 'Apple Siliconでははい--Metal加速はデフォルトで有効。Windows and Linux with NVIDIAの場合、ドライバーがインストールされている場合、LM StudioはCUDAを自動検出。モデルパネルのGPU Layers設定をチェック--GPU上に0レイヤーが表示される場合、GPUは使用されていない。' },
            { q: 'LM Studioはダウンロードモデルをどこに保存していますか？', a: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows：%USERPROFILE%\.cache\lm-studio\models\。Linux：~/.cache/lm-studio/models/。LM Studio Settings→General→Model Storage Directoryでストレージロケーションを変更。' },
            { q: 'VS CodeやCursorでLM Studioを使用できますか？', a: 'はい。localhost:1234でLM Studio localサーバーを起動し、IDE拡張を設定してhttp://localhost:1234/v1をAPI基本URLとして使用し、API キーとして任意の文字列を使用。OpenAI互換APIをサポートするVS Code拡張は通常LM Studioで利用できますが、必要な機能は事前にテストしてください。' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'ソース',
          items: [
            'LM Studio. (2026). "LM Studioドキュメンテーションおよびリリースノート。" lmstudio.ai. [lmstudio.ai/docs](https://lmstudio.ai/docs) -- 公式インストールガイド、APIドキュメンテーション、およびハードウェア互換情報。',
            'Hugging Face. (2026). "GGUFモデルハブ。" [huggingface.co/models?library=gguf](https://huggingface.co/models?library=gguf) -- LM Studio model browserと互換性のあるGGUF-量子化モデルの完全ディレクトリ。',
            'llama.cppコントリビューター。(2026). "llama.cpp -- CPU/GPU推論エンジン。" [github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) -- LM Studioによって使用される推論バックエンド、ハードウェア互換性およびパフォーマンスデータ付き。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'LM Studio のインストール方法：macOS・Windows・Linux 向けデスクトップアプリ設定ガイド',
        'description': 'LM Studioのステップバイステップインストールおよびはじめてのモデルセットアップ。チャットUIおよびOpenAI互換ローカルサーバーを備えたGUI駆動ローカルLLMランナー。',
        'url': 'https://www.promptquorum.com/ja/local-llms/how-to-install-lm-studio',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'LM Studioをインストールしてはじめてのモデルを実行する方法',
        'totalTime': 'PT5M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'lmstudio.aiからLM Studioをダウンロード' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'macOS、WindowsまたはLinuxにインストール' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Discoverタブでモデルを検索' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Q4_K_M量子化をダウンロード' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Chatタブを開いてチャット開始' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'LM Studioが「モデルをロードするメモリが不足しています」と表示される', acceptedAnswer: { '@type': 'Answer', text: 'モデルには利用可能なメモリより多いRAMが必要。他のアプリケーションを閉じてメモリを解放するか、より小さい量子化を選択。' } },
          { '@type': 'Question', name: 'モデルが非常にゆっくり生成される（秒あたり5トークン未満）', acceptedAnswer: { '@type': 'Answer', text: 'モデルはCPU上で完全に実行。右パネルのGPU Layersをチェック--0が表示される場合、GPUは使用されていない。' } },
          { '@type': 'Question', name: 'LM Studio検索で特定のモデルが見つからない', acceptedAnswer: { '@type': 'Answer', text: 'LM StudioはGGUFファイルをHugging Faceで検索している。モデルが表示されない場合は、Hugging Faceリポジトリ名を直接検索。' } },
          { '@type': 'Question', name: 'ローカルサーバーが「モデルが見つかりません」エラーを返す', acceptedAnswer: { '@type': 'Answer', text: 'モデルは、サーバーが応答する前にローカルサーバータブにロードされている必要がある。ローカルサーバータブを開き、ドロップダウンからモデルを選択。' } },
          { '@type': 'Question', name: 'LM Studioは無料ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。提供元の説明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)）によれば、2025年7月以降は個人利用・業務利用ともに無料で、有料なのは別枠のEnterprise/Teamsのみです。条件は変更される場合があるため、最新の利用規約を[lmstudio.ai](https://lmstudio.ai)でご確認ください。ダウンロードしたモデルには、それぞれ個別のライセンスが適用され、商用利用などが制限される場合があります。' } },
          { '@type': 'Question', name: 'LM StudioとOllamaの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'LM Studioはグラフィカルデスクトップアプリ。視覚的インターフェースを通じてモデルを閲覧およびダウンロード、ワンクリックでチャット開始。Ollamaはコマンドラインツール。' } },
          { '@type': 'Question', name: 'LM Studioはどのモデルで動作しますか？', acceptedAnswer: { '@type': 'Answer', text: 'Hugging Faceの多くのGGUF形式モデルに対応しています（未対応のアーキテクチャのモデルは読み込めない場合があります）。人気のある選択肢には、Llama 3.1 8B、Qwen3 8B、Mistral Small、Phi-4 Mini、およびGemma 4 E2Bが含まれる。' } },
          { '@type': 'Question', name: 'LM StudioはGPUを自動的に使用していますか？', acceptedAnswer: { '@type': 'Answer', text: 'Apple Siliconでははい--Metal加速はデフォルトで有効。Windows and Linux with NVIDIAの場合、LM StudioはCUDAを自動検出。' } },
          { '@type': 'Question', name: 'LM Studioはダウンロードモデルをどこに保存していますか？', acceptedAnswer: { '@type': 'Answer', text: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows：%USERPROFILE%\.cache\lm-studio\models\。Linux：~/.cache/lm-studio/models/。' } },
          { '@type': 'Question', name: 'VS CodeやCursorでLM Studioを使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。localhost:1234でLM Studio localサーバーを起動し、IDE拡張を設定してhttp://localhost:1234/v1をAPI基本URLとして使用。' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LM StudioとOllamaの比較',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'インターフェース', 'description': 'LM Studio：グラフィカルなデスクトップアプリ。Ollama：ターミナルとAPI。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'モデルの入手元', 'description': 'LM Studio：Hugging Face上の多くのGGUFモデル。Ollama：Ollama公式ライブラリ（キュレーション済み）。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'APIポート', 'description': 'LM Studio：localhost:1234。Ollama：localhost:11434。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'モデル管理', 'description': 'LM Studio：ファイルサイズを表示するGUIブラウザ。Ollama：CLIコマンド。' },
          { '@type': 'ListItem', 'position': 5, 'name': '自動化', 'description': 'LM Studio：GUI中心で、ローカルAPIとlms CLIも利用可能。Ollama：CLI中心で、スクリプティングとDockerに対応。' },
          { '@type': 'ListItem', 'position': 6, 'name': '最適なユースケース', 'description': 'LM Studio：初心者とGUIユーザー。Ollama：開発者とサーバー展開。' }
        ]
      },
    },
    zh: {
      designSkin: 'hub',
      theme: '入门',
      title: '如何安装 LM Studio：macOS、Windows 和 Linux 的桌面应用设置指南',
      heroImage: '/images/how-to-install-lm-studio-overview-hero-zh.webp',
      seoTitle: 'LM Studio下载安装教程与各显卡适合的模型',
      intro: 'LM Studio 是一个桌面应用程序，可以不需要终端命令就运行本地 LLM。从 lmstudio.ai 下载安装程序，打开应用，按名称搜索模型，单击下载，然后开始聊天 - 整个过程在 5 分钟内完成。据开发商说明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)），个人和工作使用均免费，但条款可能变更。LM Studio 在 macOS（Apple Silicon）、Windows 和 Linux（AppImage）上运行，支持 Hugging Face 庞大模型库中的众多 GGUF 量化模型（架构不受支持的模型可能无法加载）。它包括内置聊天 UI、localhost:1234 上的 OpenAI 兼容本地服务器，以及 Apple Metal、NVIDIA CUDA 和 AMD ROCm 的自动 GPU 加速。',
      metaDescription: '在Windows、macOS或Linux上安装LM Studio：官方下载链接、各系统安装步骤，以及8、12、16、24 GB显存分别适合哪些模型。',
      leadAnswerBlock: '**LM Studio是一款桌面应用，可通过图形界面浏览、下载并运行本地LLM，无需终端命令。它支持macOS、Windows和Linux，内置聊天界面和兼容OpenAI的本地服务器。**',
      publishDate: '2026-04-04',
      dateModified: '2026-11-14',
      readTime: '阅读约7分钟',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: '关键要点', anchor: '#key-takeaways' },
        { label: '下载与安装：每个系统一步', anchor: '#download-install-quick' },
        { label: '你的显卡适合哪些模型', anchor: '#models-by-gpu' },
        { label: 'LM Studio 是什么', anchor: '#what-is-lm-studio' },
        { label: '系统要求', anchor: '#system-requirements' },
        { label: '下载和安装', anchor: '#download-and-install' },
        { label: '查找和下载模型', anchor: '#find-and-download' },
        { label: '开始聊天', anchor: '#start-chatting' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: '故障排除', anchor: '#troubleshooting' },
        { label: '地区背景', anchor: '#regional-context' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: '资源', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studio是一款适用于macOS、Windows和Linux的桌面应用，可通过图形界面浏览、下载并与Hugging Face上众多GGUF量化模型对话（架构不受支持的模型可能无法加载），无需终端命令，并内置兼容OpenAI的本地服务器。据开发商说明，使用免费，但条款可能变更。' },
            { type: 'plain-terms', text: '如果你不想使用命令行，LM Studio是点点鼠标就能在自己电脑上运行AI模型的方式。下载应用，在其中按名称搜索模型，点击下载，然后开始对话——整个过程不到5分钟，还内置了一个服务器，方便其他应用也能连接使用。' },
          ],
          title: '核心要点',
          items: [
            '从 lmstudio.ai 下载 LM Studio - 可在 macOS（Apple Silicon）、Windows 和 Linux（AppImage）上使用。',
            '要求：Apple Silicon 搭配 macOS 14.0 及以上、Windows x64（AVX2）或 ARM64，或 Ubuntu 20.04 及以上；建议 16GB RAM。Apple Silicon Mac 默认使用 GPU 加速。',
            '内置模型浏览器直接搜索 Hugging Face - 不离开应用下载 GGUF 模型。',
            'LM Studio 包括内置聊天 UI 和端口 1234 上的 OpenAI 兼容本地服务器。',
            '最适合：喜欢 GUI 的初学者、想并排比较多个模型的用户、需要完整包而不使用终端命令的所有人。',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'LM Studio下载与安装：每个系统一步',
          content: '**从[官方下载页面](https://lmstudio.ai/download)下载LM Studio，然后按你的系统执行对应的安装步骤。** 需要macOS 14.0或更高版本的Apple Silicon、Windows x64（支持AVX2）或ARM64电脑，或Ubuntu 20.04及以上，建议16 GB内存（见[要求表](#system-requirements)）。据开发商说明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)），个人和工作使用均免费，但条款可能变更。',
          items: [
          '**macOS：** 打开下载的.dmg文件，把LM Studio拖入“应用程序”文件夹。',
          '**Windows：** 运行下载的安装程序并按提示操作。',
          '**Linux：** 用`chmod +x LM-Studio-*.AppImage`给下载的AppImage添加执行权限，然后运行。',
          ],
          note: '没有适用于Intel Mac的版本。首次启动后，在应用内搜索模型（步骤见下文）。',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: '你的显卡适合哪些模型',
          content: '**按显卡显存选择模型：8 GB适合7–8B模型，12 GB适合14B，16 GB适合24B，24 GB适合27–32B，70B模型约需40 GB。** 表中大小是Q4_K_M量化下的估算值，取自PromptQuorum的[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide)（该指南还列出GPU、价格与速度）。在Apple Silicon上，统一内存相当于显存。',
          itemHeadings: true,
          columns: ['你的显存', '可运行的模型', '示例', 'Q4_K_M大小'],
          rows: [
          { '你的显存': '8 GB', '可运行的模型': '7–8B', '示例': 'Llama 3.1 8B, Qwen3 8B', 'Q4_K_M大小': '~5 GB' },
          { '你的显存': '12 GB', '可运行的模型': '14B', '示例': 'Qwen3 14B', 'Q4_K_M大小': '~9 GB' },
          { '你的显存': '16 GB', '可运行的模型': '24B', '示例': 'Mistral Small 3.1 24B', 'Q4_K_M大小': '~14 GB' },
          { '你的显存': '24 GB', '可运行的模型': '27–32B', '示例': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Q4_K_M大小': '~16–19 GB' },
          { '你的显存': '40 GB+', '可运行的模型': '70B', '示例': 'Llama 3.3 70B', 'Q4_K_M大小': '~40 GB' },
          ],
          note: '为估算值，并非PromptQuorum实测。大小的计算公式见[显存指南](/zh/local-llms/how-much-vram-local-llm)。',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: 'LM Studio 是什么？',
          content: [
            '**LM Studio 是运行本地 LLM 的桌面应用程序。** 它提供图形模型浏览器、内置聊天界面和本地 API 服务器 - 全部在一个应用中。在内部，它使用 llama.cpp（在 Apple Silicon 上还可使用 MLX）运行 GGUF 模型；llama.cpp 是一个开源引擎，[Ollama](/zh/local-llms/how-to-install-ollama) 同样支持将其作为后端。',
            'LM Studio 与 Ollama 的主要区别是它完全由 GUI 驱动。您通过应用界面浏览和下载模型、通过一次单击启动聊天，并使用滑块而不是配置文件管理模型设置。',
            '据开发商说明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)），LM Studio 自 2025 年 7 月起个人和工作使用均免费，但条款可能变更；由 Element Labs, Inc. 开发。它支持 NVIDIA CUDA、AMD ROCm 和 Apple Metal 加速。',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'LM Studio 的系统要求是什么？',
          rows: [
            { '规格': '操作系统', '最低要求': 'macOS 14.0+、Windows x64（AVX2）或ARM64、Ubuntu 20.04+', '推荐': 'Ubuntu 22.04（更新版本测试较少）' },
            { '规格': 'RAM', '最低要求': '无固定下限（8 GB的Mac仅限小模型）', '推荐': '16 GB或更高' },
            { '规格': '存储', '最低要求': '应用本体加每个模型所需空间', '推荐': '50 GB以上，用于多个模型' },
            { '规格': 'GPU（可选）', '最低要求': '可选（Windows：4 GB以上独立显存）', '推荐': 'Apple Silicon，或显存足够的NVIDIA/AMD' },
          ],
          columns: ['规格', '最低要求', '推荐'],
        },
        download: {
          id: 'download-and-install',
          title: '如何下载和安装 LM Studio',
          numberedItems: [
            '访问 lmstudio.ai 并单击您的操作系统的下载按钮。',
            'macOS：打开 .dmg 文件并将 LM Studio 拖到应用程序。首次启动时，在系统偏好设置 → 隐私和安全中批准安全提示。',
            'Windows：运行 LM-Studio-Setup.exe 安装程序。LM Studio 安装在 %LOCALAPPDATA%\\LM-Studio。',
            'Linux：下载 .AppImage 文件。用 `chmod +x LM-Studio-*.AppImage` 使其可执行并运行。不需要系统安装。',
            '首次启动时，LM Studio 会显示欢迎屏幕并提示您下载模型。',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'LM Studio 安装流程：从 lmstudio.ai 下载，在 macOS、Windows 或 Linux 上安装，在 Hugging Face 搜索 GGUF 模型，选择 Q4_K_M 量化（约 4.5GB），5-30 秒内开始聊天。',
        },
        findModel: {
          id: 'find-and-download',
          title: '如何在 LM Studio 中查找和下载模型',
          content: '使用搜索选项卡（左侧边栏中的放大镜图标）查找模型：',
          numberedItems: [
            '单击左侧边栏中的搜索选项卡。',
            '键入模型名称 - 例如"llama 3.1"或"phi-3 mini"。',
            'LM Studio 显示来自 Hugging Face 的匹配 GGUF 模型，带有文件大小和量化选项。',
            '选择量化级别。对于 8GB RAM：选择 Q4_K_M（7B 模型约 4.5GB）。对于 16GB RAM：Q5_K_M 或 Q6_K 提供更好的质量。',
            '单击下载箭头。进度显示在下载选项卡中。',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'LM Studio 按 RAM 选择量化指南：8GB RAM 适合 Q4_K_M（约 4.5GB，质量损失通常较小）；16GB RAM 适合 Q5_K_M 或 Q6_K（约 5.7-6.5GB，几乎无损），并为 8K+ token 上下文留有余量。',
        },
        firstChat: {
          id: 'start-chatting',
          title: '如何在 LM Studio 中开始与模型聊天',
          numberedItems: [
            '单击左侧边栏中的聊天选项卡（语音气泡图标）。',
            '在聊天窗口顶部，单击模型选择器下拉菜单并选择您下载的模型。',
            'LM Studio 将模型加载到内存 - 这根据模型大小和硬件需要 5-30 秒。',
            '在底部的输入字段中输入您的消息，然后按 Enter 或单击发送。',
            '模型的响应逐个令牌流式传输。生成速度出现在窗口底部的状态栏中。',
          ],
        },
        modelSettings: {
          title: '如何在 LM Studio 中调整模型设置',
          content: '聊天选项卡中的右窗格公开关键推理参数：',
          items: [
            '**温度**（默认 0.8）：控制响应随机性。较低的值（0.1-0.4）产生更集中、可预测的输出。较高的值（0.8-1.2）产生更多样化、创意的输出。',
            '**上下文长度**（默认 4096 令牌）：模型可以处理的最大对话历史。更长的上下文使用更多 RAM。大多数 7B 模型支持 4096-8192 令牌。',
            '**GPU 层**（macOS/Linux/Windows with GPU）：有多少模型层卸载到 GPU。如果您的 GPU 有足够的 VRAM，设置为最大以实现最快推理。',
            '**系统提示**：在每次对话前添加的持久指令。使用此设置模型的角色或行为。',
          ],
        },
        localServer: {
          title: '如何启用 LM Studio 本地服务器',
          content: 'LM Studio 包括一个模仿 OpenAI API 的本地服务器。许多为 OpenAI API 开发的应用可以通过此服务器使用您的本地模型，但不保证所有功能都完全兼容：',
          numberedItems: [
            '单击左侧边栏中的本地服务器选项卡（"<->"图标）。',
            '在顶部的模型下拉菜单中选择一个模型。',
            '单击"启动服务器"。服务器在 http://localhost:1234 上启动。',
            '您的应用应设置 `base_url = "http://localhost:1234/v1"` 和任何字符串作为 API 密钥（服务器接受任何值）。',
          ],
        },
        localServerCode: {
          title: '如何通过 Python 连接到 LM Studio',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: '应该使用 LM Studio 还是 Ollama',
          rows: [
            { '因素': '界面', 'LM Studio': '图形桌面应用', 'Ollama': '终端 + API' },
            { '因素': '模型源', 'LM Studio': 'Hugging Face（众多 GGUF 模型）', 'Ollama': 'Ollama 库（精选）' },
            { '因素': 'API 端口', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { '因素': '模型管理', 'LM Studio': '带文件大小信息的 GUI 浏览器', 'Ollama': 'CLI 命令（ollama pull、list、rm）' },
            { '因素': '自动化', 'LM Studio': '以 GUI 为中心（另有本地 API 和 lms CLI）', 'Ollama': '以 CLI 为中心（脚本、Docker、CI）' },
            { '因素': '最适合', 'LM Studio': '初学者、GUI 用户、模型探索', 'Ollama': '开发人员、自动化、服务器部署' },
          ],
          columns: ['因素', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: '如何排查 LM Studio 常见问题',
          faqs: [
            {
              q: 'LM Studio 显示"没有足够的内存来加载模型"',
              a: '模型需要比可用更多的 RAM。关闭其他应用以释放内存，或选择更小的量化（Q3_K_S 而不是 Q4_K_M）。一般规则：将模型文件大小乘以 1.2 以估计所需的 RAM。4.5GB 文件需要约 5.4GB 可用 RAM。',
            },
            {
              q: '模型生成非常缓慢（每秒 5 个令牌以下）',
              a: '模型完全在 CPU 上运行。检查右窗格中的 GPU 层 - 如果显示 0，您的 GPU 未被使用。在 macOS 上，LM Studio 自动为 Apple Silicon 启用 Metal（GPU）。在 Windows/Linux with NVIDIA 上，确保您的驱动程序是最新的，并将 GPU 层增加到显示的最大值。',
            },
            {
              q: '我在 LM Studio 搜索中找不到特定模型',
              a: 'LM Studio 搜索 Hugging Face 以查找 GGUF 文件。如果模型没有出现，请尝试直接按 Hugging Face 存储库名称搜索（例如"bartowski/Llama-3.1-8B-Instruct-GGUF"）。某些较新的模型可能尚未建立索引。',
            },
            {
              q: '本地服务器返回"找不到模型"错误',
              a: '必须在本地服务器选项卡中加载模型，服务器才能响应。打开本地服务器选项卡，从下拉菜单中选择一个模型，然后单击启动服务器。API 请求中的模型名称可以是任何字符串 - LM Studio 使用当前加载的模型。',
            },
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '对隐私敏感的用例 LM Studio',
          content: [
            '**中国（数据安全法）**：LM Studio 可通过 Hugging Face 搜索找到 Qwen3 模型 - 在模型浏览器中搜索"qwen3"以查找所有可用大小。推理在本地运行，无外部 API 调用；是否满足中国数据安全法（数据安全法）对具体用途的要求，需要自行核实（不构成法律建议）。',
            '**亚太地区（数据跨境）**：LM Studio 在本地运行推理时，输入与输出内容不会为推理而发送到外部服务器（模型下载和更新检查仍需联网），因此在推理这一环节不涉及向境外传输数据的问题。各地的数据跨境和数据本地化要求能否满足，取决于企业自身的法律依据、技术与组织措施以及所在地法规，需要自行评估（不构成法律建议）。',
            '**企业部署**：LM Studio 在本地运行推理，推理内容不会为推理而发送到外部服务器（模型下载和更新检查仍需联网），金融、医疗和法律等受监管行业如考虑使用，仍需自行评估法律依据、技术与组织措施，并由合格人员做最终决定（不构成法律建议）。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '安装 LM Studio 时常见的错误是什么',
          items: [
            '**未为所选模型分配足够的系统 RAM。** 检查模型文件大小并乘以 1.2 - 这是所需的最小可用 RAM。4.5GB Q4_K_M 7B 模型需要约 5.4GB 可用 RAM。',
            '**使用预量化模型仍然对您的 GPU VRAM 来说太大。** 如果模型超过 VRAM，LM Studio 会回退到 CPU 推理，速度可能会慢很多。在下载前检查文件大小与您的 GPU VRAM。',
            '**期望来自 CPU 专用系统上大型模型的即时响应。** 7B 模型在纯 CPU 上的生成速度取决于硬件，往往只有每秒几个到几十个令牌 - 200 令牌的响应可能需要数秒甚至更久。这是正常的。对于仅 CPU 机器上的更快响应，使用 3B 模型。',
            '**在 NVIDIA 机器上设置 GPU 层为 0：** LM Studio 应自动检测 CUDA。新安装后请检查“GPU 层”的值：如果为 0，说明 GPU 未被使用。打开模型面板 → GPU 层 → 拖到最大。CPU 推理与 GPU 推理的速度差异会因模型、量化方式和硬件而有很大不同（往往是数倍以上），具体数值取决于您的系统。',
            '**当 Q4_K_M 可用时下载 FP16 模型。** FP16 模型对于聊天任务比 Q4_K_M 大两倍，质量收益可忽略不计。7B 模型的 FP16 约为 14GB；同一模型在 Q4_K_M 约为 4.5GB。除非您有特定理由使用更高精度，否则始终默认下载 Q4_K_M。',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '延伸阅读',
          items: [
            '[什么是本地 LLM？](/zh/local-llms/what-are-local-llms) -- 核心概念和组件',
            '[运行您的第一个本地 LLM](/zh/local-llms/run-first-local-llm) -- 安装后的后续步骤',
            '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) -- LM Studio 的基于终端的替代方案',
            '[初学者最佳本地 LLM 模型](/zh/local-llms/best-beginner-local-llm-models) -- 按硬件的模型建议',
            '[本地 LLM 硬件指南](/zh/local-llms/local-llm-hardware-guide) -- GPU 和 RAM 建议以从您的硬件获得 LM Studio 的最佳性能',
            '[本地 LLM vs 云 API](/zh/local-llms/local-llms-vs-cloud-apis) -- 成本和速度比较以决定何时本地 LM Studio 推理是正确的选择',
            '[2026年最佳编程本地LLM对比](/zh/local-llms/best-local-llms-for-coding) — Qwen3-Coder与DeepSeek基准测试',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: 'LM Studio 显示"没有足够的内存来加载模型"', a: '模型需要比可用更多的 RAM。关闭其他应用以释放内存，或选择更小的量化。一般规则：将模型文件大小乘以 1.2 以估计所需的 RAM。' },
            { q: '模型生成非常缓慢（每秒 5 个令牌以下）', a: '模型完全在 CPU 上运行。检查右窗格中的 GPU 层 - 如果显示 0，您的 GPU 未被使用。在 macOS 上，LM Studio 自动为 Apple Silicon 启用 Metal。' },
            { q: '我在 LM Studio 搜索中找不到特定模型', a: 'LM Studio 搜索 Hugging Face 以查找 GGUF 文件。如果模型没有出现，请尝试直接按 Hugging Face 存储库名称搜索。某些较新的模型可能尚未建立索引。' },
            { q: '本地服务器返回"找不到模型"错误', a: '必须在本地服务器选项卡中加载模型，服务器才能响应。打开本地服务器选项卡，从下拉菜单中选择一个模型，然后单击启动服务器。' },
            { q: 'LM Studio 免费吗？', a: '是的。据开发商说明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)），自2025年7月起个人和工作用途均可免费使用，仅单独的 Enterprise/Teams 层级收费。条款可能变更，请以 [lmstudio.ai](https://lmstudio.ai) 上的最新使用条款为准。您下载的模型适用各自的许可证，可能限制商业使用等用途。' },
            { q: 'LM Studio 和 Ollama 之间有什么区别？', a: 'LM Studio 是图形桌面应用 - 您通过可视界面浏览和下载模型、通过一次单击启动聊天、用滑块调整设置。Ollama 是命令行工具和后台服务 - 用单个命令设置更快。' },
            { q: 'LM Studio 可以使用哪些模型？', a: '支持 Hugging Face 上众多 GGUF 格式模型（架构不受支持的模型可能无法加载）。热门选择包括 Llama 3.1 8B、Qwen3 8B、Mistral Small、Phi-4 Mini 和 Gemma 4 E2B。在 Discover 选项卡中按模型名称搜索。' },
            { q: 'LM Studio 自动使用我的 GPU 吗？', a: '在 Apple Silicon 上是的 - Metal 加速默认启用。在 Windows and Linux with NVIDIA 上，如果驱动程序已安装，LM Studio 会自动检测 CUDA。' },
            { q: 'LM Studio 在哪里存储下载的模型？', a: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows：%USERPROFILE%\.cache\lm-studio\models\。Linux：~/.cache/lm-studio/models/。' },
            { q: '我可以在 VS Code 或 Cursor 中使用 LM Studio 吗？', a: '可以。在 localhost:1234 启动 LM Studio 本地服务器，然后配置您的 IDE 扩展以使用 http://localhost:1234/v1 作为 API 基本 URL。' },
          ],
        },
        sources: {
          id: 'sources',
          title: '资源',
          items: [
            'LM Studio. (2026). "LM Studio 文档和发行说明。" lmstudio.ai. [lmstudio.ai/docs](https://lmstudio.ai/docs) -- 官方安装指南、API 文档和硬件兼容性信息。',
            'Hugging Face. (2026). "GGUF 模型中心。" [huggingface.co/models?library=gguf](https://huggingface.co/models?library=gguf) -- 与 LM Studio 模型浏览器兼容的 GGUF 量化模型的完整目录。',
            'llama.cpp 贡献者。(2026). "llama.cpp -- CPU/GPU 推理引擎。" [github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) -- LM Studio 使用的推理后端，带有硬件兼容性和性能数据。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '如何安装 LM Studio：macOS、Windows 和 Linux 的桌面应用设置指南',
        'description': 'LM Studio 的分步安装和第一个模型设置。带有聊天 UI 和 OpenAI 兼容本地服务器的 GUI 驱动本地 LLM 运行器。',
        'url': 'https://www.promptquorum.com/zh/local-llms/how-to-install-lm-studio',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Beginner',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何安装 LM Studio 并运行您的第一个模型',
        'totalTime': 'PT5M',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': '从 lmstudio.ai 下载 LM Studio' },
          { '@type': 'HowToStep', 'position': 2, 'name': '在 macOS、Windows 或 Linux 上安装' },
          { '@type': 'HowToStep', 'position': 3, 'name': '在 Discover 选项卡中搜索模型' },
          { '@type': 'HowToStep', 'position': 4, 'name': '下载 Q4_K_M 量化' },
          { '@type': 'HowToStep', 'position': 5, 'name': '打开 Chat 选项卡并开始聊天' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'LM Studio 显示"没有足够的内存来加载模型"', acceptedAnswer: { '@type': 'Answer', text: '模型需要比可用更多的 RAM。关闭其他应用以释放内存，或选择更小的量化。' } },
          { '@type': 'Question', name: '模型生成非常缓慢（每秒 5 个令牌以下）', acceptedAnswer: { '@type': 'Answer', text: '模型完全在 CPU 上运行。检查右窗格中的 GPU 层 - 如果显示 0，您的 GPU 未被使用。' } },
          { '@type': 'Question', name: '我在 LM Studio 搜索中找不到特定模型', acceptedAnswer: { '@type': 'Answer', text: 'LM Studio 搜索 Hugging Face 以查找 GGUF 文件。如果模型没有出现，请尝试直接按名称搜索。' } },
          { '@type': 'Question', name: '本地服务器返回"找不到模型"错误', acceptedAnswer: { '@type': 'Answer', text: '必须在本地服务器选项卡中加载模型，服务器才能响应。' } },
          { '@type': 'Question', name: 'LM Studio 免费吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。据开发商说明（[lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work)），自2025年7月起个人和工作用途均可免费使用，仅单独的 Enterprise/Teams 层级收费。条款可能变更，请以 [lmstudio.ai](https://lmstudio.ai) 上的最新使用条款为准。您下载的模型适用各自的许可证，可能限制商业使用等用途。' } },
          { '@type': 'Question', name: 'LM Studio 和 Ollama 之间有什么区别？', acceptedAnswer: { '@type': 'Answer', text: 'LM Studio 是图形桌面应用。Ollama 是命令行工具和后台服务。LM Studio 使用 llama.cpp 运行 GGUF 模型（Apple Silicon 上还可使用 MLX）；Ollama 也支持将 llama.cpp 作为后端。' } },
          { '@type': 'Question', name: 'LM Studio 可以使用哪些模型？', acceptedAnswer: { '@type': 'Answer', text: '支持 Hugging Face 上众多 GGUF 格式模型（架构不受支持的模型可能无法加载）。热门选择包括 Llama 3.1 8B、Qwen3 8B、Mistral Small。' } },
          { '@type': 'Question', name: 'LM Studio 自动使用我的 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '在 Apple Silicon 上是的 - Metal 加速默认启用。在 Windows and Linux with NVIDIA 上，LM Studio 自动检测 CUDA。' } },
          { '@type': 'Question', name: 'LM Studio 在哪里存储下载的模型？', acceptedAnswer: { '@type': 'Answer', text: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows 和 Linux 有类似位置。' } },
          { '@type': 'Question', name: '我可以在 VS Code 或 Cursor 中使用 LM Studio 吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。在 localhost:1234 启动 LM Studio 本地服务器，然后配置您的 IDE 扩展以使用兼容的 API 端点。' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LM Studio 与 Ollama 对比',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '界面', 'description': 'LM Studio：图形桌面应用。Ollama：终端加 API。' },
          { '@type': 'ListItem', 'position': 2, 'name': '模型来源', 'description': 'LM Studio：Hugging Face 上的众多 GGUF 模型。Ollama：Ollama 官方模型库（经过精选）。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'API 端口', 'description': 'LM Studio：localhost:1234。Ollama：localhost:11434。' },
          { '@type': 'ListItem', 'position': 4, 'name': '模型管理', 'description': 'LM Studio：显示文件大小的 GUI 浏览器。Ollama：CLI 命令。' },
          { '@type': 'ListItem', 'position': 5, 'name': '自动化', 'description': 'LM Studio：以 GUI 为中心，另有本地 API 和 lms CLI。Ollama：以 CLI 为中心，支持脚本和 Docker。' },
          { '@type': 'ListItem', 'position': 6, 'name': '最适合', 'description': 'LM Studio：初学者和 GUI 用户。Ollama：开发人员和服务器部署。' }
        ]
      },
    },
  ko: {
      freshness_tier: 'annual',
      designSkin: 'hub',
      theme: '시작하기',
      title: 'LM Studio 설치: macOS, Windows 및 Linux GUI 설정 가이드',
    heroImage: '/images/how-to-install-lm-studio-overview-hero-ko.webp',
      seoTitle: 'LM Studio 설치 방법과 GPU별 모델 추천 가이드',
      intro: 'LM Studio는 터미널 명령어 없이 그래픽 인터페이스를 통해 로컬 LLM을 탐색하고, 다운로드하고, 실행할 수 있는 데스크톱 애플리케이션입니다. macOS, Windows, Linux에서 작동하며, 내장 채팅 UI와 OpenAI 호환 로컬 서버를 포함합니다. LM Studio는 Hugging Face의 많은 GGUF 양자화 모델을 지원하며, 지원되지 않는 아키텍처의 모델은 로드되지 않을 수 있습니다.',
      metaDescription: 'Windows, macOS, Linux에 LM Studio를 설치하는 방법입니다. 공식 다운로드 링크, OS별 설치 단계, VRAM 8·12·16·24GB별 모델을 안내합니다.',
      publishDate: '2026-04-04',
      dateModified: '2026-11-14',
      leadAnswerBlock: '**LM Studio는 터미널 명령어 없이 그래픽 인터페이스를 통해 로컬 LLM을 탐색하고, 다운로드하고, 실행할 수 있는 데스크톱 애플리케이션입니다. macOS, Windows, Linux에서 작동하며, 내장 채팅 UI와 OpenAI 호환 로컬 서버를 포함합니다.**',
      audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
      readTime: '7분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: '핵심 요약', anchor: '#key-takeaways' },
        { label: '다운로드와 설치: OS별 한 단계', anchor: '#download-install-quick' },
        { label: 'GPU에 맞는 모델 고르기', anchor: '#models-by-gpu' },
        { label: 'LM Studio란 무엇입니까?', anchor: '#what-is-lm-studio' },
        { label: '시스템 요구 사항', anchor: '#system-requirements' },
        { label: '다운로드 및 설치', anchor: '#download-and-install' },
        { label: '모델 찾기 및 다운로드', anchor: '#find-and-download-a-model' },
        { label: '채팅 시작하기', anchor: '#start-chatting' },
        { label: '로컬 서버 활성화', anchor: '#enable-the-local-server' },
        { label: 'LM Studio vs Ollama', anchor: '#lm-studio-vs-ollama' },
        { label: '문제 해결', anchor: '#troubleshooting' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'LM Studio는 macOS, Windows, Linux용 데스크톱 애플리케이션으로, 그래픽 인터페이스를 통해 Hugging Face의 많은 GGUF 양자화 모델을 탐색, 다운로드, 대화할 수 있으며(지원되지 않는 아키텍처의 모델은 로드되지 않을 수 있습니다) 터미널 명령어가 필요 없고 OpenAI 호환 로컬 서버가 내장되어 있습니다. 개발사 안내에 따르면 사용은 무료이지만 약관은 변경될 수 있습니다.' },
            { type: 'plain-terms', text: '명령줄을 사용하고 싶지 않다면, LM Studio는 클릭만으로 자신의 컴퓨터에서 AI 모델을 실행하는 방법입니다. 앱을 다운로드하고, 그 안에서 이름으로 모델을 검색하고, 다운로드를 클릭한 뒤 대화를 시작하면 됩니다 -- 전체 과정이 5분도 걸리지 않으며, 다른 앱도 사용할 수 있는 서버가 내장되어 있습니다.' },
          ],
          items: [
            'lmstudio.ai에서 LM Studio를 다운로드하십시오 -- macOS(Apple Silicon), Windows, Linux(AppImage)용으로 제공됩니다.',
            '요구 사항: macOS 14.0 이상의 Apple Silicon, Windows x64(AVX2) 또는 ARM64, Ubuntu 20.04 이상. RAM 16GB 권장. Apple Silicon Mac은 기본적으로 GPU 가속을 사용합니다.',
            '내장 모델 브라우저가 Hugging Face를 직접 검색합니다 -- 앱을 벗어나지 않고 GGUF 모델을 다운로드할 수 있습니다.',
            'LM Studio에는 내장 채팅 UI와 포트 1234의 로컬 OpenAI 호환 서버가 포함되어 있습니다.',
            '적합한 대상: GUI를 선호하는 초보자, 여러 모델을 나란히 비교하려는 사용자, 터미널 명령어 없이 완전한 패키지를 원하는 모든 분.',
          ],
        },
        quickInstall: {
          id: 'download-install-quick',
          title: 'LM Studio 다운로드와 설치: OS별 한 단계',
          content: '**LM Studio는 [공식 다운로드 페이지](https://lmstudio.ai/download)에서 받은 뒤, 사용 중인 OS의 설치 단계를 따르면 됩니다.** macOS 14.0 이상의 Apple Silicon, Windows x64(AVX2) 또는 ARM64 PC, Ubuntu 20.04 이상이 필요하며 RAM 16GB를 권장합니다([요구 사항 표](#system-requirements) 참고). 개발사 안내([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))에 따르면 사용은 무료이지만 약관은 변경될 수 있습니다.',
          items: [
          '**macOS:** 내려받은 .dmg 파일을 열고 LM Studio를 Applications 폴더로 끌어다 놓습니다.',
          '**Windows:** 내려받은 설치 프로그램을 실행하고 안내에 따릅니다.',
          '**Linux:** 내려받은 AppImage에 `chmod +x LM-Studio-*.AppImage`로 실행 권한을 주고 실행합니다.',
          ],
          note: 'Intel Mac용 빌드는 없습니다. 처음 실행한 뒤 앱 안에서 모델을 검색합니다(단계는 아래 참고).',
        },
        modelsByVram: {
          id: 'models-by-gpu',
          title: 'GPU에 맞는 모델 고르기',
          content: '**모델은 GPU 메모리에 맞춰 고릅니다. VRAM 8GB는 7–8B, 12GB는 14B, 16GB는 24B, 24GB는 27–32B 모델이 기준이며 70B 모델에는 약 40GB가 필요합니다.** 크기는 Q4_K_M 양자화 기준의 대략적인 추정값으로, PromptQuorum의 [로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide)를 따릅니다(GPU, 가격, 속도도 이 가이드에 있습니다). Apple Silicon에서는 통합 메모리가 VRAM 역할을 합니다.',
          itemHeadings: true,
          columns: ['VRAM', '실행 가능한 모델', '예시', 'Q4_K_M 크기'],
          rows: [
          { 'VRAM': '8 GB', '실행 가능한 모델': '7–8B', '예시': 'Llama 3.1 8B, Qwen3 8B', 'Q4_K_M 크기': '~5 GB' },
          { 'VRAM': '12 GB', '실행 가능한 모델': '14B', '예시': 'Qwen3 14B', 'Q4_K_M 크기': '~9 GB' },
          { 'VRAM': '16 GB', '실행 가능한 모델': '24B', '예시': 'Mistral Small 3.1 24B', 'Q4_K_M 크기': '~14 GB' },
          { 'VRAM': '24 GB', '실행 가능한 모델': '27–32B', '예시': 'Qwen3.6 27B, DeepSeek-R1 32B', 'Q4_K_M 크기': '~16–19 GB' },
          { 'VRAM': '40 GB+', '실행 가능한 모델': '70B', '예시': 'Llama 3.3 70B', 'Q4_K_M 크기': '~40 GB' },
          ],
          note: '추정값이며 PromptQuorum의 실측이 아닙니다. 크기 계산식은 [VRAM 가이드](/ko/local-llms/how-much-vram-local-llm)를 참고하십시오.',
        },
        whatIsLmStudio: {
          id: 'what-is-lm-studio',
          title: 'LM Studio란 무엇입니까?',
          content: [
            '**LM Studio는 로컬 LLM을 실행하기 위한 데스크톱 애플리케이션입니다.** 그래픽 모델 브라우저, 내장 채팅 인터페이스, 로컬 API 서버를 하나의 앱에서 제공합니다. 내부적으로는 llama.cpp(Apple Silicon에서는 MLX도)로 GGUF 모델을 실행하며, llama.cpp는 [Ollama](/ko/local-llms/how-to-install-ollama)도 백엔드로 지원하는 오픈 소스 엔진입니다.',
            'Ollama와의 주요 차이점은 LM Studio가 완전히 GUI 방식으로 구동된다는 점입니다. 앱 인터페이스를 통해 모델을 탐색하고 다운로드하며, 클릭 한 번으로 채팅을 시작하고, 설정 파일 대신 슬라이더로 모델 설정을 관리합니다.',
            '개발사 안내([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))에 따르면 LM Studio는 2025년 7월부터 개인 및 업무용 모두 무료이며, Element Labs, Inc.에서 개발합니다. 2026년 현재 NVIDIA CUDA, AMD ROCm, Apple Metal 가속을 지원합니다.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'LM Studio의 시스템 요구 사항은 무엇입니까?',
          rows: [
            { 'Spec': '운영 체제', 'Minimum': 'macOS 14.0+, Windows x64(AVX2) 또는 ARM64, Ubuntu 20.04+', 'Recommended': 'Ubuntu 22.04 (더 최신 버전은 검증 적음)' },
            { 'Spec': 'RAM', 'Minimum': '고정 최소값 없음 (8GB Mac은 소형 모델만)', 'Recommended': '16GB 이상' },
            { 'Spec': '저장 공간', 'Minimum': '앱 본체와 모델별 공간', 'Recommended': '여러 모델용 50GB 이상 여유 공간' },
            { 'Spec': 'GPU (선택 사항)', 'Minimum': '선택 사항 (Windows: 전용 VRAM 4GB 이상)', 'Recommended': 'Apple Silicon 또는 VRAM이 충분한 NVIDIA/AMD' },
          ],
          columns: ['Spec', 'Minimum', 'Recommended'],
        },
        download: {
          id: 'download-and-install',
          title: 'LM Studio를 어떻게 다운로드하고 설치합니까?',
          numberedItems: [
            'lmstudio.ai로 이동하여 운영 체제에 맞는 다운로드 버튼을 클릭하십시오.',
            'macOS: .dmg 파일을 열고 LM Studio를 응용 프로그램 폴더로 드래그하십시오. 처음 실행 시 시스템 환경설정 → 개인 정보 보호 및 보안에서 보안 프롬프트를 승인하십시오.',
            'Windows: LM-Studio-Setup.exe 설치 프로그램을 실행하십시오. LM Studio는 %LOCALAPPDATA%\\LM-Studio에 설치됩니다.',
            'Linux: .AppImage 파일을 다운로드하십시오. `chmod +x LM-Studio-*.AppImage`로 실행 권한을 부여하고 실행하십시오. 시스템 설치가 필요하지 않습니다.',
            '처음 실행 시 LM Studio는 환영 화면을 표시하고 모델 다운로드를 안내합니다.',
          ],
          image: '/images/how-to-install-lm-studio-quick-start-flow-en.svg',
          imageCaption: 'LM Studio 설치 흐름: lmstudio.ai에서 다운로드, macOS/Windows/Linux에 설치, Hugging Face에서 GGUF 모델 검색, Q4_K_M 양자화(약 4.5GB) 선택, 5-30초 내 채팅 시작.',
        },
        findModel: {
          id: 'find-and-download-a-model',
          title: 'LM Studio에서 모델을 어떻게 찾고 다운로드합니까?',
          content: '왼쪽 사이드바의 검색 탭(돋보기 아이콘)을 사용하여 모델을 찾으십시오:',
          numberedItems: [
            '왼쪽 사이드바에서 검색 탭을 클릭하십시오.',
            '모델 이름을 입력하십시오 -- 예: "llama 3.1" 또는 "phi-3 mini".',
            'LM Studio는 Hugging Face에서 파일 크기 및 양자화 옵션과 함께 일치하는 GGUF 모델을 표시합니다.',
            '양자화 수준을 선택하십시오. RAM 8 GB: Q4_K_M 선택(7B 모델 기준 약 4.5 GB). RAM 16 GB: Q5_K_M 또는 Q6_K가 더 높은 품질을 제공합니다.',
            '다운로드 화살표를 클릭하십시오. 진행 상황은 다운로드 탭에서 확인할 수 있습니다.',
          ],
          image: '/images/how-to-install-lm-studio-ram-quantization-guide-en.svg',
          imageCaption: 'RAM별 LM Studio 양자화 가이드: RAM 8GB는 Q4_K_M(약 4.5GB, 품질 손실은 대체로 작음)에 적합하고, RAM 16GB는 Q5_K_M 또는 Q6_K(약 5.7-6.5GB, 거의 무손실)에 적합하며 8K+ 토큰 컨텍스트에 여유가 있습니다.',
        },
        firstChat: {
          id: 'start-chatting',
          title: 'LM Studio에서 모델과 채팅을 어떻게 시작합니까?',
          numberedItems: [
            '왼쪽 사이드바에서 채팅 탭(말풍선 아이콘)을 클릭하십시오.',
            '채팅 창 상단에서 모델 선택 드롭다운을 클릭하고 다운로드된 모델을 선택하십시오.',
            'LM Studio가 모델을 메모리에 로드합니다 -- 모델 크기와 하드웨어에 따라 5~30초가 소요됩니다.',
            '하단 입력 필드에 메시지를 입력하고 Enter를 누르거나 전송 버튼을 클릭하십시오.',
            '모델의 응답이 토큰 단위로 스트리밍됩니다. 생성 속도는 창 하단의 상태 표시줄에 표시됩니다.',
          ],
        },
        modelSettings: {
          title: 'LM Studio에서 모델 설정을 어떻게 조정합니까?',
          content: '채팅 탭의 오른쪽 패널에서 주요 추론 매개변수를 조정할 수 있습니다:',
          items: [
            '**Temperature** (기본값 0.8): 응답의 무작위성을 제어합니다. 낮은 값(0.1~0.4)은 더 집중적이고 예측 가능한 출력을 생성합니다. 높은 값(0.8~1.2)은 더 다양하고 창의적인 출력을 생성합니다.',
            '**Context Length** (기본값 4096 토큰): 모델이 처리할 수 있는 최대 대화 기록입니다. 컨텍스트가 길수록 RAM을 더 많이 사용합니다. 대부분의 7B 모델은 4096~8192 토큰을 지원합니다.',
            '**GPU Layers** (GPU가 있는 macOS/Linux/Windows): GPU로 오프로드할 모델 레이어 수입니다. GPU에 충분한 VRAM이 있다면 최대로 설정하여 가장 빠른 추론 속도를 얻으십시오.',
            '**System Prompt**: 모든 대화에 앞서 추가되는 고정 지시문입니다. 모델의 역할이나 동작을 설정하는 데 사용하십시오.',
          ],
        },
        localServer: {
          id: 'enable-the-local-server',
          title: 'LM Studio 로컬 서버를 어떻게 활성화합니까?',
          content: 'LM Studio에는 OpenAI API를 모방하는 로컬 서버가 포함되어 있습니다. OpenAI API용으로 만들어진 많은 애플리케이션은 이 서버를 통해 로컬 모델을 사용할 수 있지만, 모든 기능에서 호환성이 보장되는 것은 아닙니다:',
          numberedItems: [
            '왼쪽 사이드바에서 로컬 서버 탭("<->" 아이콘)을 클릭하십시오.',
            '상단의 모델 드롭다운에서 모델을 선택하십시오.',
            '"Start Server"를 클릭하십시오. 서버가 http://localhost:1234에서 시작됩니다.',
            '애플리케이션에서 `base_url = "http://localhost:1234/v1"`로 설정하고 API 키는 임의의 문자열을 사용하십시오(서버는 어떤 값이든 허용합니다).',
          ],
        },
        localServerCode: {
          title: 'Python으로 LM Studio에 연결하기',
          codeBlock: 'from openai import OpenAI\n\nclient = OpenAI(\n    base_url="http://localhost:1234/v1",\n    api_key="not-needed"\n)\n\nresponse = client.chat.completions.create(\n    model="local-model",\n    messages=[{"role": "user", "content": "What is a local LLM?"}]\n)\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        vsOllama: {
          id: 'lm-studio-vs-ollama',
          title: 'LM Studio vs Ollama: 어느 것을 사용해야 합니까?',
          rows: [
            { 'Factor': '인터페이스', 'LM Studio': '그래픽 데스크톱 앱', 'Ollama': '터미널 + API' },
            { 'Factor': '모델 소스', 'LM Studio': 'Hugging Face (많은 GGUF 모델)', 'Ollama': 'Ollama 라이브러리 (큐레이션됨)' },
            { 'Factor': 'API 포트', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Factor': '모델 관리', 'LM Studio': '파일 크기 정보 포함 GUI 브라우저', 'Ollama': 'CLI 명령어 (ollama pull, list, rm)' },
            { 'Factor': '자동화', 'LM Studio': 'GUI 중심 (로컬 API와 lms CLI 제공)', 'Ollama': 'CLI 중심 (스크립팅, Docker, CI)' },
            { 'Factor': '적합 대상', 'LM Studio': '초보자, GUI 사용자, 모델 탐색', 'Ollama': '개발자, 자동화, 서버 배포' },
          ],
          columns: ['Factor', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'LM Studio 일반적인 문제 해결',
          faqs: [
            { q: 'LM Studio에서 "메모리가 부족하여 모델을 로드할 수 없습니다"라고 표시됩니다', a: '선택한 모델이 사용 가능한 RAM보다 더 많은 메모리를 필요로 합니다. 다른 애플리케이션을 종료하여 메모리를 확보하거나, 더 작은 양자화(Q4_K_M 대신 Q3_K_S)를 선택하십시오. 기준으로: 모델 파일 크기에 1.2를 곱하면 필요한 RAM을 추정할 수 있습니다. 4.5 GB 파일은 약 5.4 GB의 여유 RAM이 필요합니다.' },
            { q: '모델 생성 속도가 매우 느립니다 (초당 5 토큰 미만)', a: '모델이 완전히 CPU에서 실행되고 있습니다. 오른쪽 패널에서 GPU Layers를 확인하십시오 -- 0으로 표시되면 GPU가 사용되지 않는 것입니다. macOS에서 LM Studio는 Apple Silicon용 Metal(GPU)을 자동으로 활성화합니다. NVIDIA가 탑재된 Windows/Linux에서는 드라이버가 최신 상태인지 확인하고 GPU Layers를 표시된 최대값으로 늘리십시오.' },
            { q: 'LM Studio 검색에서 특정 모델을 찾을 수 없습니다', a: 'LM Studio는 GGUF 파일에 대해 Hugging Face를 검색합니다. 모델이 표시되지 않는 경우 Hugging Face 리포지토리 이름으로 직접 검색해 보십시오(예: "bartowski/Llama-3.1-8B-Instruct-GGUF"). 일부 최신 모델은 아직 인덱싱되지 않았을 수 있습니다.' },
            { q: '로컬 서버가 "model not found" 오류를 반환합니다', a: '서버가 응답하려면 로컬 서버 탭에 모델이 로드되어 있어야 합니다. 로컬 서버 탭을 열고 드롭다운에서 모델을 선택한 후 Start Server를 클릭하십시오. API 요청의 모델 이름은 어떤 문자열이든 상관없습니다 -- LM Studio는 현재 로드된 모델을 사용합니다.' },
            { q: 'LM Studio는 어떻게 다운로드합니까?', a: 'lmstudio.ai로 이동하여 운영 체제에 맞는 다운로드 버튼을 클릭하십시오. macOS(Apple Silicon), Windows, Linux(AppImage)용으로 제공됩니다.' },
            { q: 'LM Studio의 최소 요구 사항은 무엇입니까?', a: 'macOS 14.0 이상의 Apple Silicon, Windows x64(AVX2) 또는 ARM64, Ubuntu 20.04 이상이 필요하며 RAM 16GB를 권장합니다(8GB는 소형 모델만). GPU는 필수가 아닙니다 -- Apple Silicon Mac과 NVIDIA/AMD GPU는 가속을 위해 지원됩니다.' },
            { q: 'LM Studio에서 모델을 어떻게 찾고 다운로드합니까?', a: '사이드바의 검색 탭(돋보기 아이콘)을 클릭하고, 모델 이름(예: "llama 3.1")을 검색한 후, 양자화 수준(RAM 8GB의 경우 Q4_K_M)을 선택하고 다운로드 화살표를 클릭하십시오.' },
            { q: 'RAM 8GB에서는 어떤 양자화를 사용해야 합니까?', a: 'Q4_K_M이 RAM 8GB 시스템에 권장되는 양자화입니다. 7B 모델(파일 크기 약 4.5GB)에서 모델 품질과 메모리 사용량 사이의 최적 균형을 제공합니다.' },
            { q: 'LM Studio는 OpenAI 호환 API를 포함합니까?', a: '예. LM Studio에서 로컬 서버 탭을 활성화하면 http://localhost:1234에서 OpenAI 호환 API가 시작됩니다. OpenAI SDK를 사용하는 많은 앱이 이 URL을 base_url로 사용하여 연결할 수 있지만, 호환성은 부분적이므로 필요한 기능을 먼저 테스트하십시오.' },
            { q: 'LM Studio는 Ollama와 어떻게 다릅니까?', a: 'LM Studio는 GUI 중심입니다: 시각적 인터페이스를 통해 모델을 탐색하고, 설정을 관리하고, 채팅합니다. Ollama는 CLI 중심입니다: 개발자에게는 설정이 더 빠르지만 터미널 명령어가 필요합니다. LM Studio는 llama.cpp(Apple Silicon에서는 MLX도)로 GGUF 모델을 실행하고, Ollama도 llama.cpp를 백엔드로 지원합니다.' },
            { q: 'Linux에서 LM Studio를 사용할 수 있습니까?', a: '예. lmstudio.ai에서 .AppImage 파일을 다운로드하십시오. chmod +x LM-Studio-*.AppImage로 실행 권한을 부여하고 실행하십시오. 시스템 설치가 필요하지 않습니다 -- 휴대용 앱으로 실행됩니다.' },
            { q: 'LM Studio는 무료입니까?', a: '개발사 안내([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))에 따르면 LM Studio는 2025년 7월부터 개인 및 업무용 모두 무료입니다. Element Labs, Inc.에서 개발하며, 별도의 Enterprise/Teams 등급만 유료입니다. 약관은 변경될 수 있으니 [lmstudio.ai](https://lmstudio.ai)에서 최신 약관을 확인하십시오. 다운로드한 모델에는 각자의 라이선스가 적용됩니다.' },
            { q: 'LM Studio에서 GPU 가속을 어떻게 활성화합니까?', a: 'NVIDIA: CUDA 드라이버가 설치되어 있는지 확인하십시오. AMD: ROCm이 필요합니다. Apple Silicon: Metal이 자동으로 사용됩니다. LM Studio의 설정 → GPU에서 GPU가 감지되고 레이어가 오프로드되는지 확인하십시오.' },
            { q: 'LM Studio에서 Q4_K_M과 Q5_K_M의 차이는 무엇입니까?', a: 'Q4_K_M은 4비트 양자화(7B 기준 약 4.5GB)를 사용하며 품질 손실은 대체로 작으며 모델과 양자화 방식에 따라 다릅니다. Q5_K_M은 5비트(약 5.7GB)를 사용하며 손실이 최소화됩니다. RAM 8GB에는 Q4_K_M을, RAM 16GB 시스템에는 Q5_K_M 또는 Q6_K를 사용하십시오.' },
          ],
        },
        nextSteps: {
          title: 'LM Studio 설치 후 다음 단계',
          content: 'LM Studio가 실행되면 [첫 번째 로컬 LLM 실행하기](/ko/local-llms/run-first-local-llm)를 통해 응답 품질과 속도를 확인하십시오. 하드웨어에 맞는 모델 추천은 [초보자용 최고의 로컬 LLM 모델](/ko/local-llms/best-beginner-local-llm-models)을 참조하십시오. 설정 문제를 해결하려면 [로컬 LLM 설정 문제 해결](/ko/local-llms/troubleshooting-local-llm-setup)을 확인하십시오.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '**LM Studio 공식 웹사이트** -- 다운로드 및 문서',
            '**Hugging Face Model Hub** -- 전체 GGUF 양자화 모델 목록',
            '**LM Studio GitHub** -- SDK, CLI, 버그 트래커(데스크톱 앱 자체의 소스 코드는 그곳에 공개되어 있지 않음)',
          ],
        },
        commonMistakes: {
          title: 'LM Studio 설치 시 흔한 실수',
          items: [
            'LM Studio 설정에서 선택한 모델에 충분한 시스템 RAM을 할당하지 않는 경우.',
            '사전 양자화된 모델임에도 불구하고 GPU VRAM에 비해 여전히 너무 큰 모델을 사용하는 경우.',
            'CPU 전용 시스템에서 대형 모델의 즉각적인 응답을 기대하는 경우 -- 응답 시간은 10~30초가 소요됩니다.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[로컬 LLM이란 무엇입니까?](/ko/local-llms/what-are-local-llms) -- 핵심 개념 및 구성 요소',
            '[첫 번째 로컬 LLM 실행하기](/ko/local-llms/run-first-local-llm) -- 설치 후 다음 단계',
            '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) -- LM Studio의 터미널 기반 대안',
            '[초보자용 최고의 로컬 LLM 모델](/ko/local-llms/best-beginner-local-llm-models) -- 하드웨어별 모델 추천',
            '[코딩용 최고의 로컬 LLM 2026](/ko/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek 벤치마크 비교',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/ko/local-llms/how-to-install-lm-studio',
        'headline': 'LM Studio 설치: macOS, Windows 및 Linux GUI 설정 가이드',
        'description': 'Windows, macOS, Linux에 LM Studio를 설치하는 방법입니다. 공식 다운로드 링크, OS별 설치 단계, VRAM 8·12·16·24GB별 모델을 안내합니다.',
        'datePublished': '2026-04-04',
        'dateModified': '2026-11-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'LM Studio' },
          { '@type': 'Thing', 'name': '로컬 LLM 설치' },
          { '@type': 'Thing', 'name': 'GGUF 모델' },
          { '@type': 'Thing', 'name': 'llama.cpp' },
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
            'name': 'LM Studio에서 "메모리가 부족하여 모델을 로드할 수 없습니다"라고 표시됩니다',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '선택한 모델이 사용 가능한 RAM보다 더 많은 메모리를 필요로 합니다. 다른 애플리케이션을 종료하여 메모리를 확보하거나, 더 작은 양자화(Q4_K_M 대신 Q3_K_S)를 선택하십시오. 기준으로: 모델 파일 크기에 1.2를 곱하면 필요한 RAM을 추정할 수 있습니다. 4.5 GB 파일은 약 5.4 GB의 여유 RAM이 필요합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '모델 생성 속도가 매우 느립니다 (초당 5 토큰 미만)',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '모델이 완전히 CPU에서 실행되고 있습니다. 오른쪽 패널에서 GPU Layers를 확인하십시오 -- 0으로 표시되면 GPU가 사용되지 않는 것입니다. macOS에서 LM Studio는 Apple Silicon용 Metal(GPU)을 자동으로 활성화합니다. NVIDIA가 탑재된 Windows/Linux에서는 드라이버가 최신 상태인지 확인하고 GPU Layers를 표시된 최대값으로 늘리십시오.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio 검색에서 특정 모델을 찾을 수 없습니다',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio는 GGUF 파일에 대해 Hugging Face를 검색합니다. 모델이 표시되지 않는 경우 Hugging Face 리포지토리 이름으로 직접 검색해 보십시오(예: "bartowski/Llama-3.1-8B-Instruct-GGUF"). 일부 최신 모델은 아직 인덱싱되지 않았을 수 있습니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '로컬 서버가 "model not found" 오류를 반환합니다',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '서버가 응답하려면 로컬 서버 탭에 모델이 로드되어 있어야 합니다. 로컬 서버 탭을 열고 드롭다운에서 모델을 선택한 후 Start Server를 클릭하십시오. API 요청의 모델 이름은 어떤 문자열이든 상관없습니다 -- LM Studio는 현재 로드된 모델을 사용합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio는 어떻게 다운로드합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'lmstudio.ai로 이동하여 운영 체제에 맞는 다운로드 버튼을 클릭하십시오. macOS(Apple Silicon), Windows, Linux(AppImage)용으로 제공됩니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio의 최소 요구 사항은 무엇입니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'macOS 14.0 이상의 Apple Silicon, Windows x64(AVX2) 또는 ARM64, Ubuntu 20.04 이상이 필요하며 RAM 16GB를 권장합니다(8GB는 소형 모델만). GPU는 필수가 아닙니다 -- Apple Silicon Mac과 NVIDIA/AMD GPU는 가속을 위해 지원됩니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio에서 모델을 어떻게 찾고 다운로드합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '사이드바의 검색 탭(돋보기 아이콘)을 클릭하고, 모델 이름(예: "llama 3.1")을 검색한 후, 양자화 수준(RAM 8GB의 경우 Q4_K_M)을 선택하고 다운로드 화살표를 클릭하십시오.',
            },
          },
          {
            '@type': 'Question',
            'name': 'RAM 8GB에서는 어떤 양자화를 사용해야 합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M이 RAM 8GB 시스템에 권장되는 양자화입니다. 7B 모델(파일 크기 약 4.5GB)에서 모델 품질과 메모리 사용량 사이의 최적 균형을 제공합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio는 OpenAI 호환 API를 포함합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '예. LM Studio에서 로컬 서버 탭을 활성화하면 http://localhost:1234에서 OpenAI 호환 API가 시작됩니다. OpenAI SDK를 사용하는 많은 앱이 이 URL을 base_url로 사용하여 연결할 수 있지만, 호환성은 부분적이므로 필요한 기능을 먼저 테스트하십시오.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio는 Ollama와 어떻게 다릅니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio는 GUI 중심입니다: 시각적 인터페이스를 통해 모델을 탐색하고, 설정을 관리하고, 채팅합니다. Ollama는 CLI 중심입니다: 개발자에게는 설정이 더 빠르지만 터미널 명령어가 필요합니다. LM Studio는 llama.cpp(Apple Silicon에서는 MLX도)로 GGUF 모델을 실행하고, Ollama도 llama.cpp를 백엔드로 지원합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Linux에서 LM Studio를 사용할 수 있습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '예. lmstudio.ai에서 .AppImage 파일을 다운로드하십시오. chmod +x LM-Studio-*.AppImage로 실행 권한을 부여하고 실행하십시오. 시스템 설치가 필요하지 않습니다 -- 휴대용 앱으로 실행됩니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio는 무료입니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '개발사 안내([lmstudio.ai/blog/free-for-work](https://lmstudio.ai/blog/free-for-work))에 따르면 LM Studio는 2025년 7월부터 개인 및 업무용 모두 무료입니다. Element Labs, Inc.에서 개발하며, 별도의 Enterprise/Teams 등급만 유료입니다. 약관은 변경될 수 있으니 [lmstudio.ai](https://lmstudio.ai)에서 최신 약관을 확인하십시오. 다운로드한 모델에는 각자의 라이선스가 적용됩니다.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio에서 GPU 가속을 어떻게 활성화합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'NVIDIA: CUDA 드라이버가 설치되어 있는지 확인하십시오. AMD: ROCm이 필요합니다. Apple Silicon: Metal이 자동으로 사용됩니다. LM Studio의 설정 → GPU에서 GPU가 감지되고 레이어가 오프로드되는지 확인하십시오.',
            },
          },
          {
            '@type': 'Question',
            'name': 'LM Studio에서 Q4_K_M과 Q5_K_M의 차이는 무엇입니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Q4_K_M은 4비트 양자화(7B 기준 약 4.5GB)를 사용하며 품질 손실은 대체로 작으며 모델과 양자화 방식에 따라 다릅니다. Q5_K_M은 5비트(약 5.7GB)를 사용하며 손실이 최소화됩니다. RAM 8GB에는 Q4_K_M을, RAM 16GB 시스템에는 Q5_K_M 또는 Q6_K를 사용하십시오.',
            },
          },
        ]
      },
    },
  };
