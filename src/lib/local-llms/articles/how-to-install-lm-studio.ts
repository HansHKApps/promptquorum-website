// Auto-generated from src/lib/local-llms/content.ts
// Slug: how-to-install-lm-studio
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'Getting Started',
      title: 'Install LM Studio: GUI Setup for macOS, Windows & Linux',
      seoTitle: 'Install LM Studio: GUI Setup for macOS, Windows & Linux',
      intro: 'LM Studio is a desktop application that lets you browse, download, and run local LLMs through a graphical interface -- no terminal commands required. It runs on macOS, Windows, and Linux, and includes a built-in chat UI and an OpenAI-compatible local server. As of April 2026, LM Studio supports any GGUF-quantized model from Hugging Face.',
      metaDescription: 'Install LM Studio on macOS, Windows, or Linux: download, load a model, and start chatting in 5 minutes. No terminal needed. Beginner guide 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio is a desktop application that lets you browse, download, and run local LLMs through a graphical interface -- no terminal commands required. It runs on macOS, Windows, and Linux, and includes a built-in chat UI and an OpenAI-compatible local server.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
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
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Download LM Studio from lmstudio.ai -- available for macOS (Apple Silicon + Intel), Windows, and Linux (AppImage).',
            'Minimum: 8 GB RAM. Recommended: 16 GB RAM for 7B models. Apple Silicon Macs use GPU acceleration by default.',
            'The built-in model browser searches Hugging Face directly -- download GGUF models without leaving the app.',
            'LM Studio includes a built-in chat UI and a local OpenAI-compatible server on port 1234.',
            'Best for: beginners who prefer a GUI, users who want to compare multiple models side-by-side, and anyone who wants a complete package without terminal commands.',
          ],
        },
        whatIsLmStudio: {
          title: 'What Is LM Studio?',
          content: [
            '**LM Studio is a desktop application for running local LLMs.** It provides a graphical model browser, a built-in chat interface, and a local API server -- all in one app. Under the hood, it uses llama.cpp for inference, the same engine that powers [Ollama](/local-llms/how-to-install-ollama).',
            'The key difference from Ollama is that LM Studio is entirely GUI-driven. You browse and download models through the app interface, start chats with a click, and manage model settings with sliders rather than configuration files.',
            'LM Studio is free for personal use. It is developed by LM Studio, Inc. and was released in 2023. As of 2026, it supports NVIDIA CUDA, AMD ROCm, and Apple Metal acceleration.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: 'What Are the System Requirements for LM Studio?',
          rows: [
            { 'Spec': 'Operating System', 'Minimum': 'macOS 13.6, Windows 10, Ubuntu 22.04', 'Recommended': 'macOS 14+, Windows 11, Ubuntu 24.04' },
            { 'Spec': 'RAM', 'Minimum': '8 GB', 'Recommended': '16 GB or more' },
            { 'Spec': 'Storage', 'Minimum': '500 MB for app + model space', 'Recommended': '50 GB+ free for multiple models' },
            { 'Spec': 'GPU (optional)', 'Minimum': 'NVIDIA GTX 10-series or newer', 'Recommended': 'NVIDIA RTX 40/50-series, AMD RX 7000+, or Apple M-series' },
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
          id: 'lm-studio-vs-ollama',
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
          id: 'troubleshooting',
          title: 'Troubleshooting Common LM Studio Issues',
          faqs: [
            {
              q: 'LM Studio says "Not enough memory to load model"',
              a: 'The model requires more RAM than is available. Close other applications to free memory, or select a smaller quantization (Q3_K_S instead of Q4_K_M). As a rule: multiply the model file size by 1.2 to estimate the RAM needed. A 4.5 GB file needs ~5.4 GB free RAM.',
            },
            {
              q: 'The model is generating very slowly (under 5 tokens/sec)',
              a: 'The model is running entirely on CPU. Check GPU Layers in the right panel -- if it shows 0, your GPU is not being used. On macOS, LM Studio enables Metal (GPU) automatically for Apple Silicon. On Windows/Linux with NVIDIA, ensure your driver is up to date and increase GPU Layers to the maximum value shown.',
            },
            {
              q: 'I cannot find a specific model in the LM Studio search',
              a: 'LM Studio searches Hugging Face for GGUF files. If a model is not appearing, try searching by the Hugging Face repository name directly (e.g., "bartowski/Llama-3.1-8B-Instruct-GGUF"). Some newer models may not be indexed yet.',
            },
            {
              q: 'The local server returns "model not found" errors',
              a: 'A model must be loaded in the Local Server tab before the server can respond. Open the Local Server tab, select a model from the dropdown, and click Start Server. The model name in API requests can be any string -- LM Studio uses whichever model is currently loaded.',
            },
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
            '**LM Studio GitHub** -- Source code and community discussions',
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
        'description': 'Install LM Studio on macOS, Windows, or Linux: download, load a model, and start chatting in 5 minutes. No terminal needed. Beginner guide 2026.',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do I download LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Go to lmstudio.ai and click the download button for your OS. Available for macOS (Apple Silicon + Intel), Windows 10/11, and Linux (AppImage).' }
          },
          {
            '@type': 'Question',
            'name': 'What are the minimum requirements for LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Minimum: 8GB RAM, macOS 13.6, Windows 10, or Ubuntu 22.04. No GPU required -- Apple Silicon Macs and NVIDIA/AMD GPUs are supported for acceleration.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I find and download models in LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Click the Search tab (magnifying glass) in the sidebar, search for a model name (e.g., "llama 3.1"), select a quantization level (Q4_K_M for 8GB RAM), and click the download arrow.' }
          },
          {
            '@type': 'Question',
            'name': 'What quantization should I use in LM Studio with 8GB RAM?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Q4_K_M is the recommended quantization for 8GB RAM systems. It gives the best balance of model quality and memory usage for 7B models (~4.5GB file size).' }
          },
          {
            '@type': 'Question',
            'name': 'Does LM Studio include an OpenAI-compatible API?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Enable the Local Server tab in LM Studio to start an OpenAI-compatible API at http://localhost:1234. Any OpenAI SDK app can connect using this URL as the base_url.' }
          },
          {
            '@type': 'Question',
            'name': 'How is LM Studio different from Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'LM Studio is GUI-first: browse models, manage settings, and chat through a visual interface. Ollama is CLI-first: faster to set up for developers, but requires terminal commands. Both use llama.cpp under the hood.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I use LM Studio on Linux?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Download the .AppImage file from lmstudio.ai. Make it executable: chmod +x LM-Studio-*.AppImage and run it. No system installation is needed -- it runs as a portable app.' }
          },
          {
            '@type': 'Question',
            'name': 'Is LM Studio free?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'LM Studio is free for personal use. As of April 2026, it is developed by LM Studio, Inc. Commercial use requires a paid license. All downloaded models are free depending on their individual licenses.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I enable GPU acceleration in LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'On NVIDIA: ensure CUDA drivers are installed. On AMD: ROCm is required. On Apple Silicon: Metal is used automatically. Go to Settings → GPU in LM Studio to verify GPU is detected and layers are offloaded.' }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between Q4_K_M and Q5_K_M in LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Q4_K_M uses 4-bit quantization (~4.5GB for 7B) with ~1% quality loss. Q5_K_M uses 5-bit (~5.7GB) with minimal loss. Use Q4_K_M for 8GB RAM; Q5_K_M or Q6_K for 16GB RAM systems.' }
          }
        ]
      },
    },
    es: {
      freshness_tier: 'annual',
      theme: 'Getting Started',
      title: 'Instalar LM Studio: configuración de interfaz gráfica para macOS, Windows y Linux',
      seoTitle: 'Instalar LM Studio: guía GUI para macOS, Windows y Linux',
      intro: 'LM Studio es una aplicación de escritorio que te permite explorar, descargar y ejecutar LLMs locales a través de una interfaz gráfica, sin necesidad de comandos en la terminal. Funciona en macOS, Windows y Linux, e incluye una interfaz de chat integrada y un servidor local compatible con OpenAI. A partir de abril de 2026, LM Studio admite cualquier modelo GGUF cuantizado de Hugging Face.',
      metaDescription: 'Instala LM Studio en macOS, Windows o Linux: descarga un modelo y empieza a chatear en 5 minutos. Sin terminal. Guía para principiantes 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio es una aplicación de escritorio que te permite explorar, descargar y ejecutar LLMs locales a través de una interfaz gráfica, sin necesidad de comandos en la terminal. Funciona en macOS, Windows y Linux, e incluye una interfaz de chat integrada y un servidor local compatible con OpenAI.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '7 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
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
          items: [
            'Descarga LM Studio desde lmstudio.ai -- disponible para macOS (Apple Silicon + Intel), Windows y Linux (AppImage).',
            'Mínimo: 8 GB de RAM. Recomendado: 16 GB de RAM para modelos 7B. Los Mac con Apple Silicon usan aceleración GPU por defecto.',
            'El navegador de modelos integrado busca directamente en Hugging Face -- descarga modelos GGUF sin salir de la app.',
            'LM Studio incluye una interfaz de chat integrada y un servidor local compatible con OpenAI en el puerto 1234.',
            'Ideal para: principiantes que prefieren una interfaz gráfica, usuarios que quieren comparar varios modelos en paralelo y cualquiera que quiera un paquete completo sin comandos de terminal.',
          ],
        },
        whatIsLmStudio: {
          title: '¿Qué es LM Studio?',
          content: [
            '**LM Studio es una aplicación de escritorio para ejecutar LLMs locales.** Proporciona un navegador gráfico de modelos, una interfaz de chat integrada y un servidor de API local, todo en una sola app. Internamente usa llama.cpp para la inferencia, el mismo motor que impulsa [Ollama](/es/local-llms/how-to-install-ollama).',
            'La diferencia clave con Ollama es que LM Studio es completamente visual. Exploras y descargas modelos desde la interfaz de la app, inicias chats con un clic y ajustas la configuración con controles deslizantes en lugar de archivos de configuración.',
            'LM Studio es gratuito para uso personal. Lo desarrolla LM Studio, Inc. y fue lanzado en 2023. A partir de 2026, admite aceleración NVIDIA CUDA, AMD ROCm y Apple Metal.',
          ],
        },
        requirements: {
          id: 'system-requirements',
          title: '¿Cuáles son los requisitos del sistema para LM Studio?',
          rows: [
            { 'Especificación': 'Sistema operativo', 'Mínimo': 'macOS 13.6, Windows 10, Ubuntu 22.04', 'Recomendado': 'macOS 14+, Windows 11, Ubuntu 24.04' },
            { 'Especificación': 'RAM', 'Mínimo': '8 GB', 'Recomendado': '16 GB o más' },
            { 'Especificación': 'Almacenamiento', 'Mínimo': '500 MB para la app + espacio para modelos', 'Recomendado': '50 GB+ libres para varios modelos' },
            { 'Especificación': 'GPU (opcional)', 'Mínimo': 'NVIDIA GTX serie 10 o más reciente', 'Recomendado': 'NVIDIA RTX 40/50, AMD RX 7000+ o Apple M-series' },
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
          content: 'LM Studio incluye un servidor local que imita la API de OpenAI. Cualquier aplicación que funcione con OpenAI puede usar tu modelo local a través de este servidor:',
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
            { 'Factor': 'Fuente de modelos', 'LM Studio': 'Hugging Face (cualquier modelo GGUF)', 'Ollama': 'Biblioteca de Ollama (curada, ~200 modelos)' },
            { 'Factor': 'Puerto de API', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Factor': 'Gestión de modelos', 'LM Studio': 'Navegador GUI con info de tamaño de archivo', 'Ollama': 'Comandos CLI (ollama pull, list, rm)' },
            { 'Factor': 'Automatización', 'LM Studio': 'Limitada (orientada a GUI)', 'Ollama': 'Potente (scripting, Docker, CI)' },
            { 'Factor': 'Ideal para', 'LM Studio': 'Principiantes, usuarios de GUI, exploración de modelos', 'Ollama': 'Desarrolladores, automatización, despliegues en servidor' },
          ],
          columns: ['Factor', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          id: 'troubleshooting',
          title: 'Solución de problemas comunes en LM Studio',
          faqs: [
            {
              q: 'LM Studio muestra "Not enough memory to load model"',
              a: 'El modelo requiere más RAM de la disponible. Cierra otras aplicaciones para liberar memoria o selecciona una cuantización menor (Q3_K_S en lugar de Q4_K_M). Como regla general: multiplica el tamaño del archivo del modelo por 1.2 para estimar la RAM necesaria. Un archivo de 4.5 GB necesita ~5.4 GB de RAM libre.',
            },
            {
              q: 'El modelo genera texto muy lentamente (menos de 5 tokens/seg)',
              a: 'El modelo está ejecutándose completamente en CPU. Comprueba GPU Layers en el panel derecho -- si muestra 0, tu GPU no se está usando. En macOS, LM Studio activa Metal (GPU) automáticamente para Apple Silicon. En Windows/Linux con NVIDIA, asegúrate de tener el driver actualizado y aumenta GPU Layers al valor máximo que se muestre.',
            },
            {
              q: 'No encuentro un modelo específico en la búsqueda de LM Studio',
              a: 'LM Studio busca archivos GGUF en Hugging Face. Si un modelo no aparece, intenta buscar directamente por el nombre del repositorio de Hugging Face (por ejemplo, "bartowski/Llama-3.1-8B-Instruct-GGUF"). Es posible que algunos modelos más recientes aún no estén indexados.',
            },
            {
              q: 'El servidor local devuelve errores "model not found"',
              a: 'Es necesario que haya un modelo cargado en la pestaña Local Server antes de que el servidor pueda responder. Abre la pestaña Local Server, selecciona un modelo en el menú desplegable y haz clic en Start Server. El nombre del modelo en las solicitudes de API puede ser cualquier cadena -- LM Studio usa el modelo que esté cargado en ese momento.',
            },
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
            '**GitHub de LM Studio** -- Código fuente y debates de la comunidad',
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
        'url': 'https://www.promptquorum.com/es/local-llms/how-to-install-lm-studio?lang=es',
        'headline': 'Instalar LM Studio: configuración de interfaz gráfica para macOS, Windows y Linux',
        'description': 'Instala LM Studio en macOS, Windows o Linux: descarga un modelo y empieza a chatear en 5 minutos. Sin terminal. Guía para principiantes 2026.',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo descargo LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ve a lmstudio.ai y haz clic en el botón de descarga para tu sistema operativo. Disponible para macOS (Apple Silicon + Intel), Windows 10/11 y Linux (AppImage).' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son los requisitos mínimos para LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Mínimo: 8 GB de RAM, macOS 13.6, Windows 10 o Ubuntu 22.04. No se requiere GPU -- los Mac con Apple Silicon y las GPU NVIDIA/AMD son compatibles para acelerar la inferencia.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo busco y descargo modelos en LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Haz clic en la pestaña Search (lupa) en la barra lateral, busca el nombre del modelo (por ejemplo, "llama 3.1"), selecciona un nivel de cuantización (Q4_K_M para 8 GB de RAM) y haz clic en la flecha de descarga.' }
          },
          {
            '@type': 'Question',
            'name': '¿Qué cuantización debo usar en LM Studio con 8 GB de RAM?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Q4_K_M es la cuantización recomendada para sistemas con 8 GB de RAM. Ofrece el mejor equilibrio entre calidad del modelo y uso de memoria para modelos 7B (~4.5 GB de tamaño de archivo).' }
          },
          {
            '@type': 'Question',
            'name': '¿LM Studio incluye una API compatible con OpenAI?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Activa la pestaña Local Server en LM Studio para iniciar una API compatible con OpenAI en http://localhost:1234. Cualquier app con el SDK de OpenAI puede conectarse usando esta URL como base_url.' }
          },
          {
            '@type': 'Question',
            'name': '¿En qué se diferencia LM Studio de Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'LM Studio prioriza la interfaz gráfica: explora modelos, gestiona ajustes y chatea desde una interfaz visual. Ollama prioriza la línea de comandos: configuración más rápida para desarrolladores, pero requiere comandos de terminal. Ambos usan llama.cpp internamente.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar LM Studio en Linux?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Descarga el archivo .AppImage desde lmstudio.ai. Hazlo ejecutable: chmod +x LM-Studio-*.AppImage y ejecútalo. No se necesita instalación en el sistema -- funciona como app portátil.' }
          },
          {
            '@type': 'Question',
            'name': '¿LM Studio es gratuito?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'LM Studio es gratuito para uso personal. A partir de abril de 2026, lo desarrolla LM Studio, Inc. El uso comercial requiere una licencia de pago. Todos los modelos descargados son gratuitos según sus licencias individuales.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo activo la aceleración GPU en LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'En NVIDIA: asegúrate de tener los drivers CUDA instalados. En AMD: se requiere ROCm. En Apple Silicon: Metal se usa automáticamente. Ve a Configuración → GPU en LM Studio para verificar que la GPU está detectada y que las capas se están descargando.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre Q4_K_M y Q5_K_M en LM Studio?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Q4_K_M usa cuantización de 4 bits (~4.5 GB para 7B) con una pérdida de calidad de ~1%. Q5_K_M usa 5 bits (~5.7 GB) con pérdida mínima. Usa Q4_K_M para 8 GB de RAM; Q5_K_M o Q6_K para sistemas con 16 GB de RAM.' }
          }
        ]
      },
    },
    de: {
      theme: 'Getting Started',
      title: 'LM Studio installieren: Desktop-App-Einrichtung für macOS, Windows und Linux',
      seoTitle: 'LM Studio Setup: Die beste GUI für lokale LLMs',
      intro: 'LM Studio ist eine kostenlose Desktop-Anwendung zum Ausführen lokaler LLMs ohne Terminalbefehle. Laden Sie das Installationsprogramm von lmstudio.ai herunter, öffnen Sie die App, suchen Sie nach einem Modell nach Name, klicken Sie auf „Download", und beginnen Sie zu chatten -- der gesamte Vorgang dauert weniger als 5 Minuten. Ab April 2026 läuft LM Studio auf macOS (Apple Silicon und Intel), Windows 10+ und Linux (AppImage) und unterstützt alle GGUF-quantisierten Modelle aus der Hugging Face-Modellbibliothek mit 500.000+ Modellen. Es enthält eine integrierte Chat-Benutzeroberfläche, einen OpenAI-kompatiblen lokalen Server auf localhost:1234 und automatische GPU-Beschleunigung für Apple Metal, NVIDIA CUDA und AMD ROCm.',
      metaDescription: 'Starten Sie lokale LLMs ohne Terminal-Befehle. Modelle herunterladen, suchen, chatten--alles in 5 Minuten. NVIDIA CUDA, AMD ROCm, Apple Metal unterstützt.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '7 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was ist LM Studio?', anchor: '#what-is-lm-studio' },
        { label: 'Systemanforderungen', anchor: '#system-requirements' },
        { label: 'Download und Installation', anchor: '#download-and-install' },
        { label: 'Modell suchen und herunterladen', anchor: '#find-and-download' },
        { label: 'Mit dem Chat beginnen', anchor: '#start-chatting' },
        { label: 'Modelleinstellungen anpassen', anchor: '#adjust-settings' },
        { label: 'Lokalen Server aktivieren', anchor: '#enable-server' },
        { label: 'Mit Python verbinden', anchor: '#connect-python' },
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
          title: 'Zusammenfassung',
          items: [
            'LM Studio von lmstudio.ai herunterladen -- verfügbar für macOS (Apple Silicon + Intel), Windows und Linux (AppImage).',
            'Minimum: 8 GB RAM. Empfohlen: 16 GB RAM für 7B-Modelle. Apple Silicon Macs verwenden standardmäßig GPU-Beschleunigung.',
            'Der integrierte Modellbrowser sucht direkt auf Hugging Face -- laden Sie GGUF-Modelle herunter, ohne die App zu verlassen.',
            'LM Studio enthält eine integrierte Chat-Benutzeroberfläche und einen lokalen OpenAI-kompatiblen Server auf Port 1234.',
            'Am besten für: Anfänger, die eine GUI bevorzugen, Benutzer, die mehrere Modelle nebeneinander vergleichen möchten, und alle, die ein komplettes Paket ohne Terminalbefehle möchten.',
          ],
        },
        whatIsLmStudio: {
          title: 'Was ist LM Studio?',
          content: [
            '**LM Studio ist eine Desktop-Anwendung zum Ausführen lokaler LLMs.** Es bietet einen grafischen Modellbrowser, eine integrierte Chat-Benutzeroberfläche und einen lokalen API-Server -- alles in einer App. Unter der Haube verwendet es llama.cpp für Inferenz, das gleiche Modul, das Ollama antreibt (/de/local-llms/how-to-install-ollama).',
            'Der Hauptunterschied zu Ollama ist, dass LM Studio völlig GUI-gesteuert ist. Sie durchsuchen und laden Modelle über die App-Oberfläche herunter, starten Chats mit einem Klick und verwalten Modelleinstellungen mit Schiebereglern anstelle von Konfigurationsdateien.',
            'LM Studio ist kostenlos für die private Nutzung. Es wird von LM Studio, Inc. entwickelt und wurde 2023 veröffentlicht. Ab 2026 unterstützt es NVIDIA CUDA-, AMD ROCm- und Apple Metal-Beschleunigung.',
          ],
        },
        requirements: {
          title: 'Welche Systemanforderungen hat LM Studio?',
          columns: ['Spezifikation', 'Minimum', 'Empfohlen'],
          rows: [
            { 'Spezifikation': 'Betriebssystem', 'Minimum': 'macOS 13.6, Windows 10, Ubuntu 22.04', 'Empfohlen': 'macOS 14+, Windows 11, Ubuntu 24.04' },
            { 'Spezifikation': 'RAM', 'Minimum': '8 GB', 'Empfohlen': '16 GB oder mehr' },
            { 'Spezifikation': 'Speicher', 'Minimum': '500 MB für App + Modellspeicher', 'Empfohlen': '50 GB+ frei für mehrere Modelle' },
            { 'Spezifikation': 'GPU (optional)', 'Minimum': 'NVIDIA GTX 10er oder neuer', 'Empfohlen': 'NVIDIA RTX 40/50er, AMD RX 7000+, oder Apple M-Serie' },
          ],
        },
        download: {
          title: 'Wie laden Sie LM Studio herunter und installieren es',
          numberedItems: [
            'Gehen Sie zu lmstudio.ai und klicken Sie auf die Download-Schaltfläche für Ihr Betriebssystem.',
            'macOS: Öffnen Sie die .dmg-Datei und ziehen Sie LM Studio in den Ordner „Anwendungen". Beim ersten Start genehmigen Sie die Sicherheitsaufforderung unter Systemeinstellungen → Datenschutz & Sicherheit.',
            'Windows: Führen Sie das Installationsprogramm LM-Studio-Setup.exe aus. LM Studio wird in %LOCALAPPDATA%\LM-Studio installiert.',
            'Linux: Laden Sie die .AppImage-Datei herunter. Machen Sie sie mit `chmod +x LM-Studio-*.AppImage` ausführbar und starten Sie sie. Keine Systeminstallation erforderlich.',
            'Beim ersten Start zeigt LM Studio einen Willkommensbildschirm und fordert Sie auf, ein Modell herunterzuladen.',
          ],
        },
        findModel: {
          title: 'Wie finden und laden Sie ein Modell in LM Studio herunter',
          content: 'Verwenden Sie die Registerkarte „Search" (Lupe-Symbol in der linken Seitenleiste), um Modelle zu finden:',
          numberedItems: [
            'Klicken Sie auf die Registerkarte „Search" in der linken Seitenleiste.',
            'Geben Sie einen Modellnamen ein -- z.B. „llama 3.1" oder „phi-3 mini".',
            'LM Studio zeigt passende GGUF-Modelle von Hugging Face mit Dateigröße und Quantisierungsoptionen.',
            'Wählen Sie ein Quantisierungsniveau. Für 8 GB RAM: Q4_K_M (~4,5 GB für ein 7B-Modell) wählen. Für 16 GB RAM: Q5_K_M oder Q6_K bieten bessere Qualität.',
            'Klicken Sie auf den Download-Pfeil. Der Fortschritt wird auf der Registerkarte „Downloads" angezeigt.',
          ],
        },
        firstChat: {
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
          content: 'LM Studio enthält einen lokalen Server, der die OpenAI-API imitiert. Jede Anwendung, die mit OpenAI funktioniert, kann Ihr lokales Modell über diesen Server nutzen:',
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
          title: 'Was sollten Sie verwenden: LM Studio oder Ollama?',
          columns: ['Faktor', 'LM Studio', 'Ollama'],
          rows: [
            { 'Faktor': 'Oberfläche', 'LM Studio': 'GUI-Desktop-App', 'Ollama': 'Terminal + API' },
            { 'Faktor': 'Modellquelle', 'LM Studio': 'Hugging Face (beliebiges GGUF-Modell)', 'Ollama': 'Ollama-Bibliothek (kuratiert, ~200 Modelle)' },
            { 'Faktor': 'API-Port', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Faktor': 'Modellverwaltung', 'LM Studio': 'GUI-Browser mit Dateigröße', 'Ollama': 'CLI-Befehle (ollama pull, list, rm)' },
            { 'Faktor': 'Automatisierung', 'LM Studio': 'Begrenzt (GUI-fokussiert)', 'Ollama': 'Stark (Scripting, Docker, CI)' },
            { 'Faktor': 'Am besten für', 'LM Studio': 'Anfänger, GUI-Benutzer, Modell-Erkundung', 'Ollama': 'Entwickler, Automatisierung, Server-Bereitstellungen' },
          ],
        },
        troubleshooting: {
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
              a: 'Ein Modell muss auf der Registerkarte „Local Server" geladen werden, bevor der Server antworten kann. Öffnen Sie die Registerkarte „Local Server", wählen Sie ein Modell aus dem Dropdown aus und klicken Sie auf „Start Server". Der Modellname in API-Anfragen kann beliebig sein -- LM Studio verwendet whichever Modell gerade geladen ist.'
            },
          ],
        },
        regionalContext: {
          title: 'LM Studio für datenschutzsensible Anwendungsfälle',
          content: [
            '**EU / DSGVO**: LM Studio mit lokalen Modellen ist die datenschutzkonformste KI-Konfiguration, die für Desktop-Benutzer verfügbar ist. Keine Eingabetexte, Kontexte oder Ausgaben werden außerhalb des Geräts übertragen -- DSGVO Artikel 46 Transfermechanismen finden keine Anwendung. Für EU-Fachleute, die mit personenbezogenen Daten arbeiten (Rechtsdokumente, medizinische Unterlagen, Finanzanalysen), bietet LM Studio auf einem MacBook M-Serie oder Windows-Arbeitsplatz mit dedizierter GPU eine vollständig konforme lokale Inferenz-Umgebung. Die BSI-Grundschutz-Kataloge empfehlen lokale Inferenz für KI-Systeme, die sensitive personenbezogene Daten verarbeiten. Für den deutschen Mittelstand ohne IT-Personal ist die GUI von LM Studio der einfachste Weg zu DSGVO-konformem KI-Einsatz, ohne Terminal-Befehle erlernen zu müssen. Artikel 28 DSGVO-Auftragsverarbeiter fallen weg, da keine Daten an externe API-Anbieter gehen.',
            '**Japan (METI)**: Die METI AI Governance Guidelines erfordern die Dokumentation, wo KI-Inferenz stattfindet. LM Studio speichert den lokalen Modell-Cache auf einem festen Pfad auf der Festplatte -- alle Inferenzen sind rückverfolgbar auf Gerät, Modelldatei und Version. Japanische Enterprise-Teams verwenden LM Studio als Zero-Egress-Dokumenten-Analysetool für vertrauliche behördliche und Compliance-Arbeiten.',
            '**China**: LM Studio unterstützt Qwen3-Modelle nativ über Hugging Face-Suche -- suchen Sie „qwen2.5" im Modellbrowser, um alle verfügbaren Größen zu finden. Für chinesische Workflows bietet Qwen3 7B oder 14B 30-40% bessere Token-Effizienz auf chinesischem Text als westlich trainierte Modelle bei der gleichen Parametergröße. Alle Inferenzen laufen lokal unter Chinas Datensicherheitsgesetz (数据安全法) mit null externen API-Aufrufen.',
          ],
        },
        commonMistakes: {
          title: 'Welche häufigen Fehler gibt es bei der Installation von LM Studio?',
          items: [
            '**Nicht genügend System-RAM für das in den LM Studio-Einstellungen ausgewählte Modell zuweisen.** Überprüfen Sie die Modell-Dateigröße und multiplizieren Sie mit 1,2 -- das ist der erforderliche Mindest-RAM. Ein 4,5-GB Q4_K_M 7B-Modell benötigt ~5,4 GB freien RAM.',
            '**Ein vorquantisiertes Modell verwenden, das immer noch zu groß für Ihren GPU-VRAM ist.** Wenn ein Modell den VRAM übersteigt, fällt LM Studio auf CPU-Inferenz zurück, die 5-10× langsamer ist. Überprüfen Sie die Dateigröße vs. Ihren GPU-VRAM, bevor Sie herunterladen.',
            '**Erwarten Sie sofortige Antworten von großen Modellen auf CPU-only Systemen.** Ein 7B-Modell auf CPU erzeugt 8-20 Token/Sekunde -- eine 200-Token-Antwort dauert 10-25 Sekunden. Das ist normal. Verwenden Sie ein 3B-Modell für schnellere Antworten auf CPU-only Maschinen.',
            '**GPU-Ebenen auf 0 bei einer NVIDIA-Maschine setzen:** LM Studio sollte CUDA automatisch erkennen, setzt aber nach einer Neuinstallation manchmal GPU-Ebenen auf 0 zurück. Öffnen Sie das Modellbedienfeld → GPU-Ebenen → auf Maximum ziehen. Auf einer RTX 4070 (12 GB VRAM) bewegt das die Geschwindigkeit von 8 Token/Sekunde (CPU) auf 80+ Token/Sekunde (GPU) -- ein 10x Unterschied.',
            '**FP16-Modelle herunterladen, wenn Q4_K_M verfügbar ist:** FP16-Modelle sind zweimal so groß wie Q4_K_M mit vernachlässigbarem Qualitätsgewinn für Chat-Aufgaben. Ein 7B-Modell in FP16 ist ~14 GB; das gleiche Modell bei Q4_K_M ist ~4,5 GB. Laden Sie immer Q4_K_M als Standard herunter, es sei denn, Sie haben einen spezifischen Grund für höhere Präzision.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Was sind lokale LLMs?](/de/local-llms/what-are-local-llms) -- Kernkonzepte und Komponenten',
            '[Führen Sie Ihr erstes lokales LLM aus](/de/local-llms/run-first-local-llm) -- Nächste Schritte nach der Installation',
            '[Wie installieren Sie Ollama](/de/local-llms/how-to-install-ollama) -- Terminal-basierte Alternative zu LM Studio',
            '[Best Beginner Local LLM Models](/de/local-llms/best-beginner-local-llm-models) -- Modellempfehlungen nach Hardware',
            '[Local LLM Hardware Guide 2026](/de/local-llms/local-llm-hardware-guide-2026) -- GPU- und RAM-Empfehlungen für beste Leistung mit LM Studio auf Ihrer Hardware',
            '[Local LLMs vs Cloud APIs](/de/local-llms/local-llms-vs-cloud-apis) -- Kosten- und Geschwindigkeitsvergleich, um zu entscheiden, wann lokale Inferenz in LM Studio die richtige Wahl ist',
            '[Beste LLMs für Coding 2026](/de/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek Benchmark-Vergleich',
          ],
        },
        faqSection: {
          title: 'FAQ',
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
              a: 'Ja. LM Studio ist kostenlos für die private Nutzung ohne Funktionsbegrenzungen. Eine kommerzielle Lizenz ist für geschäftliche Nutzung erforderlich -- siehe lmstudio.ai/pricing für aktuelle Bedingungen. Ab April 2026 hat die kostenlose Version keine Nutzungsgrenzen, Modellbeschränkungen oder Wasserzeichen.'
            },
            {
              q: 'Was ist der Unterschied zwischen LM Studio und Ollama?',
              a: 'LM Studio ist eine grafische Desktop-App -- Sie durchsuchen und laden Modelle über eine visuelle Oberfläche herunter, starten Chats mit einem Klick und passen Einstellungen mit Schiebereglern an. Ollama ist ein Befehlszeilen-Tool und Hintergrunddienst -- schneller einzurichten mit einem einzigen Befehl, besser für Automatisierung und Scripting. Beide verwenden unter der Haube die gleiche llama.cpp Inferenz-Engine. Wählen Sie LM Studio für GUI-gesteuerte Nutzung; wählen Sie Ollama für Entwickler-Workflows und Automatisierung.'
            },
            {
              q: 'Welche Modelle funktionieren mit LM Studio?',
              a: 'Jedes GGUF-Format-Modell von Hugging Face. Die integrierte Suche deckt den vollständigen Hugging Face-Modell-Hub ab. Beliebte Optionen sind Llama 3.3 8B, Qwen3 7B, Mistral Small, Phi-4 Mini und Gemma 3 9B. Suchen Sie nach Modellname auf der Registerkarte „Discover". LM Studio zeigt Dateigröße für jedes Quantisierungsniveau vor dem Download.'
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
              a: 'Ja. Starten Sie den LM Studio-lokalen Server auf localhost:1234, konfigurieren Sie dann Ihre IDE-Erweiterung zur Verwendung von http://localhost:1234/v1 als API-Basis-URL mit beliebiger Zeichenkette als API-Schlüssel. VS Code-Erweiterungen, die OpenAI-kompatible APIs unterstützen (Continue, GitHub Copilot-Alternativen) funktionieren direkt mit LM Studio.'
            },
            {
              q: 'Muss ich bei der Verwendung von LM Studio die DSGVO beachten?',
              a: 'LM Studio verarbeitet alle Daten lokal auf Ihrem Gerät. Es gibt keinen externen API-Anbieter als Auftragsverarbeiter gemäß Artikel 28 DSGVO, da Daten das Gerät nie verlassen. Ollama und LM Studio binden standardmäßig nur an localhost -- keine externe Zugänglichkeit. Dies erfüllt alle DSGVO-Anforderungen für On-Premises-Deployment mit vollständiger Datenkontrolle.'
            },
            {
              q: 'Ist LM Studio für den deutschen Mittelstand geeignet?',
              a: 'Ja -- kostenlos für private Nutzung, keine IT-Kenntnisse für die Installation erforderlich, DSGVO-konform durch lokale Datenverarbeitung, und BSI-Grundschutz-kompatibel für vertrauliche Dokumente. LM Studio ist der einfachste Weg für mittlere Unternehmen ohne IT-Personal zu AI-gestützten Workflows, während gleichzeitig Datenschutz gewährleistet wird. Die GUI erfordert kein Terminal-Wissen.'
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'LM Studio. (2026). „LM Studio Dokumentation und Release Notes." lmstudio.ai. https://lmstudio.ai/docs -- Offizielle Installationsleitfäden, API-Dokumentation und Hardware-Kompatibilitätsinformationen.',
            'Hugging Face. (2026). „GGUF Model Hub." https://huggingface.co/models?library=gguf -- Vollständiges Verzeichnis von GGUF-quantisierten Modellen, die mit LM Studios Modellbrowser kompatibel sind.',
            'llama.cpp-Mitwirkende. (2026). „llama.cpp -- CPU/GPU-Inferenz-Engine." https://github.com/ggerganov/llama.cpp -- Das von LM Studio verwendete Inferenz-Backend mit Hardware-Kompatibilität und Leistungsdaten.',
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
        dateModified: '2026-04-05',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
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
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. LM Studio ist kostenlos für die private Nutzung ohne Funktionsbegrenzungen. Eine kommerzielle Lizenz ist für geschäftliche Nutzung erforderlich -- siehe lmstudio.ai/pricing für aktuelle Bedingungen. Ab April 2026 hat die kostenlose Version keine Nutzungsgrenzen, Modellbeschränkungen oder Wasserzeichen.' }
          },
          {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen LM Studio und Ollama?',
            acceptedAnswer: { '@type': 'Answer', text: 'LM Studio ist eine grafische Desktop-App -- Sie durchsuchen und laden Modelle über eine visuelle Oberfläche herunter, starten Chats mit einem Klick und passen Einstellungen mit Schiebereglern an. Ollama ist ein Befehlszeilen-Tool und Hintergrunddienst -- schneller einzurichten mit einem einzigen Befehl, besser für Automatisierung und Scripting. Beide verwenden unter der Haube die gleiche llama.cpp Inferenz-Engine.' }
          },
          {
            '@type': 'Question',
            name: 'Welche Modelle funktionieren mit LM Studio?',
            acceptedAnswer: { '@type': 'Answer', text: 'Jedes GGUF-Format-Modell von Hugging Face. Die integrierte Suche deckt den vollständigen Hugging Face-Modell-Hub ab. Beliebte Optionen sind Llama 3.3 8B, Qwen3 7B, Mistral Small, Phi-4 Mini und Gemma 3 9B. Suchen Sie nach Modellname auf der Registerkarte „Discover". LM Studio zeigt Dateigröße für jedes Quantisierungsniveau vor dem Download.' }
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
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Starten Sie den LM Studio-lokalen Server auf localhost:1234, konfigurieren Sie dann Ihre IDE-Erweiterung zur Verwendung von http://localhost:1234/v1 als API-Basis-URL mit beliebiger Zeichenkette als API-Schlüssel. VS Code-Erweiterungen, die OpenAI-kompatible APIs unterstützen (Continue, GitHub Copilot-Alternativen) funktionieren direkt mit LM Studio.' }
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von LM Studio die DSGVO beachten?',
            acceptedAnswer: { '@type': 'Answer', text: 'LM Studio verarbeitet alle Daten lokal auf Ihrem Gerät. Es gibt keinen externen API-Anbieter als Auftragsverarbeiter gemäß Artikel 28 DSGVO, da Daten das Gerät nie verlassen. Ollama und LM Studio binden standardmäßig nur an localhost -- keine externe Zugänglichkeit.' }
          },
          {
            '@type': 'Question',
            name: 'Ist LM Studio für den deutschen Mittelstand geeignet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja -- kostenlos für private Nutzung, keine IT-Kenntnisse für die Installation erforderlich, DSGVO-konform durch lokale Datenverarbeitung, und BSI-Grundschutz-kompatibel für vertrauliche Dokumente. LM Studio ist der einfachste Weg für mittlere Unternehmen ohne IT-Personal zu AI-gestützten Workflows, während gleichzeitig Datenschutz gewährleistet wird.' }
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
          { '@type': 'ListItem', position: 2, name: 'Modellquelle', description: 'LM Studio: Hugging Face (beliebiges GGUF-Modell). Ollama: Ollama-Bibliothek (kuratiert, ~200 Modelle).' },
          { '@type': 'ListItem', position: 3, name: 'API-Port', description: 'LM Studio: localhost:1234. Ollama: localhost:11434.' },
          { '@type': 'ListItem', position: 4, name: 'Modellverwaltung', description: 'LM Studio: GUI-Browser mit Dateigröße. Ollama: CLI-Befehle (ollama pull, list, rm).' },
          { '@type': 'ListItem', position: 5, name: 'Automatisierung', description: 'LM Studio: Begrenzt (GUI-fokussiert). Ollama: Stark (Scripting, Docker, CI).' },
          { '@type': 'ListItem', position: 6, name: 'Am besten für', description: 'LM Studio: Anfänger, GUI-Benutzer, Modell-Erkundung. Ollama: Entwickler, Automatisierung, Server-Bereitstellungen.' },
        ]
      },
    },
    fr: {
      theme: 'Bien démarrer',
      title: 'Installer LM Studio : guide de configuration de l\'application desktop pour macOS, Windows et Linux',
      seoTitle: 'LM Studio : La meilleure interface pour LLM local',
      intro: 'LM Studio est une application desktop gratuite pour exécuter des LLM locaux sans commandes terminal. Téléchargez l\'installeur depuis lmstudio.ai, ouvrez l\'application, recherchez un modèle par nom, cliquez sur télécharger et commencez à discuter -- tout le processus prend moins de 5 minutes. En avril 2026, LM Studio fonctionne sur macOS (Apple Silicon et Intel), Windows 10+ et Linux (AppImage), et supporte n\'importe quel modèle quantifié GGUF de la bibliothèque de plus de 500 000 modèles de Hugging Face. Il inclut une interface de chat intégrée, un serveur local compatible OpenAI sur localhost:1234, et l\'accélération GPU automatique pour Apple Metal, NVIDIA CUDA et AMD ROCm.',
      metaDescription: 'Exécutez des LLM locaux sans lignes de commande. Téléchargez, recherchez, chattez en 5 minutes. Support NVIDIA CUDA, AMD ROCm, Apple Metal inclus.',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '7 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que LM Studio ?', anchor: '#what-is-lm-studio' },
        { label: 'Configuration système requise', anchor: '#system-requirements' },
        { label: 'Télécharger et installer', anchor: '#download-and-install' },
        { label: 'Trouver et télécharger un modèle', anchor: '#find-and-download' },
        { label: 'Commencer à discuter', anchor: '#start-chatting' },
        { label: 'Ajuster les paramètres du modèle', anchor: '#adjust-settings' },
        { label: 'Activer le serveur local', anchor: '#enable-server' },
        { label: 'Se connecter via Python', anchor: '#connect-python' },
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
          title: 'Points clés',
          items: [
            'Téléchargez LM Studio depuis lmstudio.ai -- disponible pour macOS (Apple Silicon + Intel), Windows et Linux (AppImage).',
            'Minimum : 8 GB de RAM. Recommandé : 16 GB de RAM pour les modèles 7B. Les Mac Apple Silicon utilisent l\'accélération GPU par défaut.',
            'Le navigateur de modèles intégré recherche Hugging Face directement -- téléchargez des modèles GGUF sans quitter l\'application.',
            'LM Studio inclut une interface de chat intégrée et un serveur compatible OpenAI sur le port 1234.',
            'Idéal pour : les débutants qui préfèrent une interface graphique, ceux qui veulent comparer plusieurs modèles côte à côte, et tous ceux qui veulent un package complet sans commandes terminal.',
          ],
        },
        whatIsLmStudio: {
          title: 'Qu\'est-ce que LM Studio ?',
          content: [
            '**LM Studio est une application desktop pour exécuter des LLM locaux.** Elle fournit un navigateur de modèles graphique, une interface de chat intégrée et un serveur API local -- tout dans une seule application. Sous le capot, elle utilise llama.cpp pour l\'inférence, le même moteur qui alimente [Ollama](/fr/local-llms/how-to-install-ollama).',
            'La différence clé par rapport à Ollama est que LM Studio est entièrement piloté par l\'interface graphique. Vous parcourez et téléchargez des modèles via l\'interface de l\'application, lancez des discussions en un clic et gérez les paramètres du modèle avec des curseurs plutôt que des fichiers de configuration.',
            'LM Studio est gratuit pour un usage personnel. Elle a été développée par LM Studio, Inc. et lancée en 2023. En 2026, elle supporte l\'accélération NVIDIA CUDA, AMD ROCm et Apple Metal.',
          ],
        },
        requirements: {
          title: 'Quelles sont les exigences système pour LM Studio ?',
          rows: [
            { 'Spécification': 'Système d\'exploitation', 'Minimum': 'macOS 13.6, Windows 10, Ubuntu 22.04', 'Recommandé': 'macOS 14+, Windows 11, Ubuntu 24.04' },
            { 'Spécification': 'RAM', 'Minimum': '8 GB', 'Recommandé': '16 GB ou plus' },
            { 'Spécification': 'Stockage', 'Minimum': '500 MB pour l\'app + espace modèle', 'Recommandé': '50 GB+ libres pour plusieurs modèles' },
            { 'Spécification': 'GPU (optionnel)', 'Minimum': 'NVIDIA GTX série 10 ou plus récent', 'Recommandé': 'NVIDIA RTX 30/40, AMD RX 6000+ ou Apple M-série' },
          ],
          columns: ['Spécification', 'Minimum', 'Recommandé'],
        },
        download: {
          title: 'Comment télécharger et installer LM Studio ?',
          numberedItems: [
            'Allez sur lmstudio.ai et cliquez sur le bouton télécharger pour votre système d\'exploitation.',
            'macOS : Ouvrez le fichier .dmg et glissez LM Studio vers Applications. Au premier lancement, approuvez l\'invite de sécurité dans Préférences Système → Confidentialité & Sécurité.',
            'Windows : Exécutez l\'installeur LM-Studio-Setup.exe. LM Studio s\'installe dans %LOCALAPPDATA%\\LM-Studio.',
            'Linux : Téléchargez le fichier .AppImage. Rendez-le exécutable avec `chmod +x LM-Studio-*.AppImage` et lancez-le. Aucune installation système requise.',
            'Au premier lancement, LM Studio affiche un écran d\'accueil et vous invite à télécharger un modèle.',
          ],
        },
        findModel: {
          title: 'Comment trouver et télécharger un modèle dans LM Studio ?',
          content: 'Utilisez l\'onglet Recherche (icône loupe dans la barre latérale gauche) pour trouver des modèles :',
          numberedItems: [
            'Cliquez sur l\'onglet Recherche dans la barre latérale gauche.',
            'Tapez un nom de modèle -- par exemple « llama 3.1 » ou « phi-3 mini ».',
            'LM Studio affiche les modèles GGUF correspondants de Hugging Face avec les tailles de fichier et les options de quantification.',
            'Sélectionnez un niveau de quantification. Pour 8 GB de RAM : choisissez Q4_K_M (~4,5 GB pour un modèle 7B). Pour 16 GB de RAM : Q5_K_M ou Q6_K offrent une meilleure qualité.',
            'Cliquez sur la flèche de téléchargement. La progression s\'affiche dans l\'onglet Téléchargements.',
          ],
        },
        firstChat: {
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
          content: 'LM Studio inclut un serveur local qui imite l\'API OpenAI. Toute application fonctionnant avec OpenAI peut utiliser votre modèle local via ce serveur :',
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
          title: 'Lequel choisir : LM Studio ou Ollama ?',
          rows: [
            { 'Facteur': 'Interface', 'LM Studio': 'Application desktop graphique', 'Ollama': 'Terminal + API' },
            { 'Facteur': 'Source de modèles', 'LM Studio': 'Hugging Face (tout modèle GGUF)', 'Ollama': 'Bibliothèque Ollama (sélectionné, ~200 modèles)' },
            { 'Facteur': 'Port API', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { 'Facteur': 'Gestion des modèles', 'LM Studio': 'Navigateur GUI avec info taille fichier', 'Ollama': 'Commandes CLI (ollama pull, list, rm)' },
            { 'Facteur': 'Automatisation', 'LM Studio': 'Limitée (orientée GUI)', 'Ollama': 'Forte (scripting, Docker, CI)' },
            { 'Facteur': 'Idéal pour', 'LM Studio': 'Débutants, utilisateurs GUI, exploration de modèles', 'Ollama': 'Développeurs, automatisation, déploiements serveur' },
          ],
          columns: ['Facteur', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
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
          title: 'LM Studio pour les cas d\'usage sensibles à la confidentialité',
          content: [
            '**UE / RGPD** : La CNIL recommande le déploiement d\'IA locale pour les professionnels français traitant des données personnelles. LM Studio exécutant des modèles locaux est la configuration la plus préservant la confidentialité disponible pour les utilisateurs desktop. Aucun texte de prompt, contexte ou sortie n\'est transmis en dehors de l\'appareil -- les mécanismes de transfert RGPD Article 46 ne s\'appliquent pas. Pour les professionnels de l\'UE gérant des données personnelles (documents juridiques, notes médicales, analyse financière), LM Studio sur un MacBook M-series ou une station de travail Windows avec GPU discret fournit un environnement d\'inférence locale entièrement conforme. Les directives BSI allemandes recommandent l\'inférence locale pour les systèmes d\'IA traitant des données personnelles sensibles. L\'interface graphique de LM Studio rend cette configuration accessible aux professionnels non techniques qui ne peuvent pas utiliser les outils de terminal comme Ollama.',
            '**Japon (METI)** : Les directives de gouvernance de l\'IA du METI exigent de documenter où se produit l\'inférence d\'IA. LM Studio maintient un cache de modèles locaux à un chemin fixe sur le disque -- toute l\'inférence est traçable au périphérique, au fichier de modèle et à la version. Les équipes d\'entreprise japonaises utilisent LM Studio comme outil d\'analyse de documents à zéro sortie pour les travaux de conformité et réglementaires sensibles.',
            '**Chine** : LM Studio supporte les modèles Qwen3 en natif via la recherche Hugging Face -- recherchez « qwen2.5 » dans le navigateur de modèles pour trouver toutes les tailles disponibles. Pour les flux de travail en langue chinoise, Qwen3 7B ou 14B offrent une efficacité de token de 30-40% meilleure sur le texte chinois que les modèles entraînés occidentaux du même nombre de paramètres. Toute l\'inférence s\'exécute localement en vertu de la Loi sur la sécurité des données chinoises (数据安全法) sans aucun appel API externe.',
          ],
        },
        commonMistakes: {
          title: 'Quelles sont les erreurs courantes lors de l\'installation de LM Studio ?',
          items: [
            '**Ne pas allouer suffisamment de RAM système pour le modèle que vous avez sélectionné.** Vérifiez la taille du fichier modèle et multipliez par 1,2 -- c\'est la RAM libre minimale requise. Un modèle 7B Q4_K_M de 4,5 GB nécessite ~5,4 GB de RAM libres.',
            '**Utiliser un modèle pré-quantifié qui est encore trop volumineux pour la VRAM GPU.** Si un modèle dépasse la VRAM, LM Studio bascule vers l\'inférence CPU, 5-10× plus lente. Vérifiez la taille du fichier par rapport à la VRAM GPU avant le téléchargement.',
            '**S\'attendre à des réponses instantanées de grands modèles sur des systèmes CPU uniquement.** Un modèle 7B sur CPU produit 8-20 tokens/sec -- une réponse de 200 tokens prend 10-25 secondes. C\'est normal. Utilisez un modèle 3B pour des réponses plus rapides sur les machines CPU uniquement.',
            '**Définir Couches GPU à 0 sur une machine NVIDIA** : LM Studio doit auto-détecter CUDA mais définit parfois par défaut 0 couches GPU après une installation fraîche. Ouvrez le panneau modèle → Couches GPU → glissez au maximum. Sur une RTX 4070 (12 GB VRAM), les couches max sur un modèle 7B passent de 8 tok/sec (CPU) à 80+ tok/sec (GPU) -- une différence de 10×.',
            '**Télécharger des modèles FP16 quand Q4_K_M est disponible** : Les modèles FP16 sont deux fois plus volumineux que Q4_K_M sans gain de qualité appréciable pour les tâches de chat. Un modèle 7B en FP16 est ~14 GB ; le même modèle à Q4_K_M est ~4,5 GB. Téléchargez toujours Q4_K_M par défaut sauf si vous avez une raison spécifique d\'utiliser une précision supérieure.',
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Qu\'est-ce que les LLM locaux ?](/fr/local-llms/what-are-local-llms) -- Concepts et composants clés',
            '[Exécuter votre premier LLM local](/fr/local-llms/run-first-local-llm) -- Prochaines étapes après l\'installation',
            '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Alternative basée sur terminal à LM Studio',
            '[Meilleurs modèles LLM locaux pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- Recommandations de modèles par matériel',
            '[Guide de matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- Recommandations GPU et RAM pour obtenir les meilleures performances de LM Studio',
            '[LLM locaux vs APIs cloud](/fr/local-llms/local-llms-vs-cloud-apis) -- Comparaison de coûts et de vitesse pour décider quand l\'inférence locale dans LM Studio est le bon choix',
            '[Meilleurs LLMs pour le code 2026](/fr/local-llms/best-local-llms-for-coding) — Comparatif Qwen3-Coder vs DeepSeek',
          ],
        },
        faqSection: {
          title: 'FAQ',
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
              a: 'Oui. LM Studio est gratuit pour un usage personnel sans limitations de fonctionnalités. Une licence commerciale est requise pour un usage professionnel -- voir lmstudio.ai/pricing pour les conditions actuelles. En avril 2026, le niveau personnel n\'a pas de limites d\'utilisation, de restrictions de modèles ou de filigranes.',
            },
            {
              q: 'Quelle est la différence entre LM Studio et Ollama ?',
              a: 'LM Studio est une application desktop graphique -- vous parcourez et téléchargez des modèles via une interface visuelle, lancez des discussions en un clic et ajustez les paramètres avec des curseurs. Ollama est un outil en ligne de commande et service d\'arrière-plan -- plus rapide à configurer avec une seule commande, meilleur pour l\'automatisation et le scripting. Les deux utilisent le même moteur d\'inférence llama.cpp. Choisissez LM Studio pour un usage piloté par interface graphique ; choisissez Ollama pour les flux de travail de développeurs et l\'automatisation.',
            },
            {
              q: 'Quels modèles fonctionnent avec LM Studio ?',
              a: 'N\'importe quel modèle au format GGUF de Hugging Face. La recherche intégrée couvre l\'intégralité du hub de modèles Hugging Face. Les choix populaires incluent Llama 3.3 8B, Qwen3 7B, Mistral Small, Phi-4 Mini et Gemma 3 9B. Recherchez par nom de modèle dans l\'onglet Discover. LM Studio affiche les tailles de fichier pour chaque niveau de quantification avant le téléchargement.',
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
              a: 'Oui. Lancez le serveur local de LM Studio sur localhost:1234, puis configurez votre extension IDE pour utiliser http://localhost:1234/v1 comme URL de base API avec n\'importe quelle chaîne comme clé API. Les extensions VS Code qui supportent les APIs compatibles OpenAI (Continue, alternatives GitHub Copilot) fonctionnent avec LM Studio directement.',
            },
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            'LM Studio. (2026). « Documentation de LM Studio et notes de publication. » lmstudio.ai. https://lmstudio.ai/docs -- Guides d\'installation officiels, documentation API et informations de compatibilité matérielle.',
            'Hugging Face. (2026). « Hub de modèles GGUF. » https://huggingface.co/models?library=gguf -- Répertoire complet des modèles quantifiés GGUF compatibles avec le navigateur de modèles de LM Studio.',
            'Contributeurs llama.cpp. (2026). « llama.cpp -- Moteur d\'inférence CPU/GPU. » https://github.com/ggerganov/llama.cpp -- Backend d\'inférence utilisé par LM Studio, avec données de compatibilité matérielle et de performance.',
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
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
          { '@type': 'Question', name: 'LM Studio est-il gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. LM Studio est gratuit pour un usage personnel sans limitations de fonctionnalités. Une licence commerciale est requise pour un usage professionnel -- voir lmstudio.ai/pricing pour les conditions actuelles. En avril 2026, le niveau personnel n\'a pas de limites d\'utilisation, de restrictions de modèles ou de filigranes.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre LM Studio et Ollama ?', acceptedAnswer: { '@type': 'Answer', text: 'LM Studio est une application desktop graphique -- vous parcourez et téléchargez des modèles via une interface visuelle, lancez des discussions en un clic et ajustez les paramètres avec des curseurs. Ollama est un outil en ligne de commande et service d\'arrière-plan -- plus rapide à configurer avec une seule commande, meilleur pour l\'automatisation et le scripting. Les deux utilisent le même moteur d\'inférence llama.cpp.' } },
          { '@type': 'Question', name: 'Quels modèles fonctionnent avec LM Studio ?', acceptedAnswer: { '@type': 'Answer', text: 'N\'importe quel modèle au format GGUF de Hugging Face. Les choix populaires incluent Llama 3.3 8B, Qwen3 7B, Mistral Small, Phi-4 Mini et Gemma 3 9B. Recherchez par nom de modèle dans l\'onglet Discover. LM Studio affiche les tailles de fichier pour chaque niveau de quantification avant le téléchargement.' } },
          { '@type': 'Question', name: 'LM Studio utilise-t-il mon GPU automatiquement ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui sur Apple Silicon -- l\'accélération Metal est activée par défaut. Sur Windows et Linux avec GPU NVIDIA, LM Studio détecte CUDA automatiquement si les pilotes sont installés. Vérifiez le paramètre Couches GPU dans le panneau modèle -- s\'il affiche 0 couche sur GPU, votre GPU n\'est pas utilisé.' } },
          { '@type': 'Question', name: 'Où LM Studio stocke-t-il les modèles téléchargés ?', acceptedAnswer: { '@type': 'Answer', text: 'Sur macOS : ~/Library/Application Support/LM Studio/Models/lmstudio-community/. Sur Windows : %USERPROFILE%\\.cache\\lm-studio\\models\\. Sur Linux : ~/.cache/lm-studio/models/. Vous pouvez modifier l\'emplacement du stockage dans LM Studio Paramètres → Général → Répertoire de stockage des modèles.' } },
          { '@type': 'Question', name: 'Puis-je utiliser LM Studio avec VS Code ou Cursor ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Lancez le serveur local de LM Studio sur localhost:1234, puis configurez votre extension IDE pour utiliser http://localhost:1234/v1 comme URL de base API avec n\'importe quelle chaîne comme clé API. Les extensions VS Code qui supportent les APIs compatibles OpenAI (Continue, alternatives GitHub Copilot) fonctionnent avec LM Studio directement.' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Comparaison LM Studio vs Ollama',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Interface', 'description': 'LM Studio : application desktop graphique. Ollama : terminal plus API.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Source de modèles', 'description': 'LM Studio : tout GGUF sur Hugging Face. Ollama : bibliothèque sélectionnée d\'environ 200 modèles.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Port API', 'description': 'LM Studio : localhost:1234. Ollama : localhost:11434.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Gestion des modèles', 'description': 'LM Studio : navigateur GUI avec tailles. Ollama : commandes CLI.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Automatisation', 'description': 'LM Studio : limitée, orientée GUI. Ollama : forte, support du scripting et Docker.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Idéal pour', 'description': 'LM Studio : débutants et utilisateurs GUI. Ollama : développeurs et déploiements serveur.' }
        ]
      },
    },
    ja: {
      theme: 'はじめに',
      title: 'LM Studio のインストール方法：macOS・Windows・Linux 向けデスクトップアプリ設定ガイド',
      seoTitle: 'LM Studio：2026年最高GUI本地LLM実行ツール',
      intro: 'LM Studioは、ターミナルコマンドなしでローカルLLMを実行できる無料のデスクトップアプリケーションです。lmstudio.aiからインストーラーをダウンロードしてアプリを開き、モデルを名前で検索してダウンロードボタンをクリックしてチャットを開始します--プロセス全体が5分以内に完了します。2026年4月現在、LM StudioはmacOS（Apple SiliconおよびIntel）、Windows 10+、およびLinux（AppImage）で動作し、Hugging Faceの500,000以上のモデルライブラリから任意のGGUF量子化モデルをサポートしています。組み込みのチャットUI、localhost:1234上のOpenAI互換ローカルサーバー、およびApple Metal、NVIDIA CUDA、AMD ROCmの自動GPU加速が含まれています。',
      metaDescription: 'ターミナル不要でローカルLLM実行。モデル検索、ダウンロード、チャット5分で完結。NVIDIA CUDA・AMD ROCm・Apple Metal対応。初心者向け完全ガイド。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '7分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: 'キーポイント', anchor: '#key-takeaways' },
        { label: 'LM Studioとは', anchor: '#what-is-lm-studio' },
        { label: 'システム要件', anchor: '#system-requirements' },
        { label: 'ダウンロードとインストール', anchor: '#download-and-install' },
        { label: 'モデルの検索とダウンロード', anchor: '#find-and-download' },
        { label: 'チャット開始', anchor: '#start-chatting' },
        { label: 'モデル設定の調整', anchor: '#adjust-settings' },
        { label: 'ローカルサーバーの有効化', anchor: '#enable-server' },
        { label: 'Pythonで接続', anchor: '#connect-python' },
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
          title: '重要ポイント',
          items: [
            'LM Studio を lmstudio.ai からダウンロード--macOS（Apple Silicon + Intel）、Windows、および Linux（AppImage）で利用可能です。',
            '最小要件：8GB RAM。推奨：7B モデル用に 16GB RAM。Apple Silicon Mac はデフォルトで GPU 加速を使用します。',
            '組み込みモデルブラウザは Hugging Face を直接検索--アプリを離れずに GGUF モデルをダウンロード。',
            'LM Studio は組み込みチャット UI と、ポート 1234 上の OpenAI 互換ローカルサーバーを含みます。',
            '最適なユースケース：GUI を好む初心者、複数のモデルを並べて比較したいユーザー、ターミナルコマンドなしで完全なパッケージが必要な全員向け。',
          ],
        },
        whatIsLmStudio: {
          title: 'LM Studio とは',
          content: [
            '**LM Studioはローカルのメッセージングシステムを実行するためのデスクトップアプリケーション。** グラフィカルモデルブラウザ、組み込みのチャットインターフェース、およびローカルAPIサーバー--すべて1つのアプリケーションに含まれている。内部では、推論にllama.cppを使用。これはOllamaを操作するのと同じエンジン（[Ollama](/ja/local-llms/how-to-install-ollama)）。',
            'Ollamaとの主な違いは、LM StudioがGUIによって完全に駆動されていること。アプリケーションインターフェースを通じてモデルを閲覧およびダウンロード、ワンクリックでチャットを開始、構成ファイルではなくスライダーでモデル設定を管理。',
            'LM Studioは個人の利用に無料。LM Studio、Inc.によって開発され、2023年に発売。2026年現在、NVIDIA CUDA、AMD ROCm、およびApple Metal加速をサポート。',
          ],
        },
        requirements: {
          title: 'LM Studioのシステム要件は何ですか？',
          rows: [
            { '仕様': 'オペレーティングシステム', '最小要件': 'macOS 13.6、Windows 10、Ubuntu 22.04', '推奨': 'macOS 14+、Windows 11、Ubuntu 24.04' },
            { '仕様': 'RAM', '最小要件': '8GB', '推奨': '16GB以上' },
            { '仕様': 'ストレージ', '最小要件': 'アプリ用500 MB + モデルスペース', '推奨': '複数のモデル用に50GB以上の空き容量' },
            { '仕様': 'GPU（オプション）', '最小要件': 'NVIDIA GTX 10シリーズ以降', '推奨': 'NVIDIA RTX 40/50シリーズ、AMD RX 7000+、またはApple M-series' },
          ],
          columns: ['仕様', '最小要件', '推奨'],
        },
        download: {
          title: 'LM Studioをダウンロードしてインストールする方法',
          numberedItems: [
            'lmstudio.aiにアクセスして、お使いのOSのダウンロードボタンをクリック。',
            'macOS：.dmgファイルを開いてLM Studioをアプリケーションにドラッグ。初回起動時に、システム環境設定→プライバシーとセキュリティでセキュリティプロンプトを承認。',
            'Windows：LM-Studio-Setup.exeインストーラーを実行。LM Studioは%LOCALAPPDATA%\\LM-Studioにインストール。',
            'Linux：.AppImageファイルをダウンロード。`chmod +x LM-Studio-*.AppImage`で実行可能にして実行。システムインストール不要。',
            '初回起動時に、LM Studioはウェルカムスクリーンを表示し、モデルのダウンロードをお願い。',
          ],
        },
        findModel: {
          title: 'LM StudioでモデルをNative検索してダウンロードする方法',
          content: '検索タブ（左サイドバーの虫眼鏡アイコン）を使用してモデルを検索：',
          numberedItems: [
            '左サイドバーの検索タブをクリック。',
            'モデル名を入力--例えば「llama 3.1」または「phi-3 mini」。',
            'LM Studioはファイルサイズと量子化オプションを含むHugging FaceのマッチングGGUFモデルを表示。',
            '量子化レベルを選択。8GBのRAM用：Q4_K_M（7Bモデルの場合～4.5GB）を選択。16GBのRAM用：Q5_K_MまたはQ6_Kの方が品質が良い。',
            'ダウンロード矢印をクリック。プログレスはダウンロードタブに表示。',
          ],
        },
        firstChat: {
          title: 'LM StudioでモデルとのチャットをNative開始する方法',
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
          title: 'LM StudioローカルサーバーをNative有効にする方法',
          content: 'LM StudioにはOpenAI APIをミミックするローカルサーバーが含まれている。OpenAIで動作するアプリケーションはこのサーバーを通じてローカルモデルを使用可能：',
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
          title: 'LM StudioまたはOllamaを選択する方法',
          rows: [
            { '要素': 'インターフェース', 'LM Studio': 'グラフィカルデスクトップアプリ', 'Ollama': 'ターミナル + API' },
            { '要素': 'モデルソース', 'LM Studio': 'Hugging Face（任意のGGUFモデル）', 'Ollama': 'Ollama Library（キュレーション、～200モデル）' },
            { '要素': 'APIポート', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { '要素': 'モデル管理', 'LM Studio': 'ファイルサイズ情報を含むGUI Browser', 'Ollama': 'CLIコマンド（ollama pull、list、rm）' },
            { '要素': 'Automation', 'LM Studio': '制限（GUI-focused）', 'Ollama': '強い（Scripting、Docker、CI）' },
            { '要素': '最適ユースケース', 'LM Studio': '初心者、GUIユーザー、モデル探索', 'Ollama': '開発者、Automation、Server deployments' },
          ],
          columns: ['要素', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
          title: 'LM Studioの一般的な問題をNativeトラブルシューティングする方法',
          faqs: [
            {
              q: 'LM Studioが「モデルをロードするメモリが不足しています」と表示される',
              a: 'モデルには利用可能なメモリより多いRAMが必要。他のアプリケーションを閉じてメモリを解放するか、より小さい量子化を選択（Q4_K_MではなくQ3_K_S）。一般的なルール：推定RAMを取得するためにモデルファイルサイズに1.2を掛ける。4.5GBファイルは～5.4GB空きRAMが必要。',
            },
            {
              q: 'モデルが非常にゆっくり生成される（秒あたり5トークン未満）',
              a: 'モデルはCPU上で完全に実行されている。右パネルのGPU Layersをチェック--0が表示される場合、GPUは使用されていない。macOSでは、LM StudioはApple SiliconのMetalを自動的に有効にする。Windows/Linuxの場合、NVIDIAドライバーが最新であることを確認し、GPU LayersをNathan大値に増やす。',
            },
            {
              q: 'LM Studio検索で特定のモデルが見つからない',
              a: 'LM Studioはこれ以降GGUFファイルをHugging Faceで検索。モデルが表示されない場合は、Hugging FaceリポジトリNativeを直接検索（例：「bartowski/Llama-3.1-8B-Instruct-GGUF」）。新しいモデルの一部はまだインデックス化されていない可能性。',
            },
            {
              q: 'ローカルサーバーが「モデルが見つかりません」エラーを返す',
              a: 'モデルは、サーバーが応答する前にローカルサーバータブにロードされている必要がある。ローカルサーバータブを開き、ドロップダウンからモデルを選択し、サーバーの開始をクリック。APIリクエストのモデル名は任意の文字列にできる--LM Studioは現在ロードされているモデルを使用。',
            },
          ],
        },
        regionalContext: {
          title: 'プライバシーに敏感なユースケース向けのLM Studio',
          content: [
            '**日本（METI）**：METI AI Governance Guidelinesは、AI推論がどこで発生するかを文書化することを要求。LM Studioは固定パスをディスク上に保持--すべての推論はデバイス、モデルファイル、およびバージョンに追跡可能。日本の企業チームは、機密規制およびコンプライアンス作業のためのゼロ出口文書分析ツールとしてLM Studioを使用。METI要件では、リモートAPI呼び出しなしで、オンプレミス推論実装が必須。',
            '**東アジア地域**：LM Studioは、Hugging Face検索を通じてQwen3モデルをネイティブにサポート--モデルブラウザで「qwen2.5」を検索してすべての利用可能なサイズを見つける。中国語テキストワークロードの場合、Qwen3 7Bまたは14Bは、同じパラメータ数の西部トレーニングモデルよりも中国語テキストで30～40％優れたトークン効率を提供。',
            '**データセキュリティ**：LM Studioのすべての推論はローカルで実行され、外部API呼び出しはない。これは、データセキュリティ法（数据安全法）など、厳密なローカルデータ処理要件を持つすべての地域で完全にコンプライアント。',
          ],
        },
        commonMistakes: {
          title: 'LM Studioをインストールするときの一般的な間違いは何ですか？',
          items: [
            '**選択したモデルに十分なシステムRAMを割り当てていない。** モデルファイルサイズをチェックして1.2を掛ける--これは必要な最小空きRAM。4.5GB Q4_K_M 7Bモデルは～5.4GB空きRAMが必要。',
            '**GPU VRAMにはまだ大きすぎる事前量子化モデルを使用している。** モデルがVRAMを超える場合、LM StudioはCPU推論にフォールバック--5～10倍低速。ダウンロード前にファイルサイズとGPU VRAMを確認。',
            '**CPU専用システムから大規模モデルからの即座の応答を期待している。** 7Bモデルは秒あたり8～20トークンを生成--200トークン応答は10～25秒かかる。これは正常。CPU専用マシンで高速応答を見つけるためには3Bモデルを使用。',
            '**NVIDIAマシンのGPU Layersを0に設定している：** LM StudioはCUDAを自動検出すべきだが、新規インストール後に時々デフォルト0 GPUレイヤーになる。モデルパネルを開く→GPU Layers→最大値にドラッグ。RTX 4070（12GB VRAM）では、7Bモデルで最大レイヤーは8 tok/sec（CPU）から80+ tok/sec（GPU）に移動--10倍の違い。',
            '**FP16モデルが利用可能であるときQ4_K_Mをダウンロードしている。** FP16モデルはチャットタスク用のNativeQ4_K_Mより2倍大きい。7BモデルのFP16は～14GB；同じモデルがQ4_K_MではNative～4.5GB。より高い精度を使用する特定の理由がない限り、常にデフォルトとしてQ4_K_Mをダウンロード。',
          ],
        },
        relatedReading: {
          title: '関連読み物',
          items: [
            '[ローカルLLMとは何ですか？](/ja/local-llms/what-are-local-llms) -- コア概念とコンポーネント',
            '[はじめてのローカルLLMを実行](/ja/local-llms/run-first-local-llm) -- インストール後の次のステップ',
            '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- LM Studioのターミナルベースの代替案',
            '[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) -- ハードウェアごとのモデル推奨',
            '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) -- LM StudioでNativeハードウェアから最高のパフォーマンスを取得するためのGPUおよびRAM推奨',
            '[ローカルLLM対クラウドAPI](/ja/local-llms/local-llms-vs-cloud-apis) -- ローカル推論がNativeハードウェアの正しい選択であるときを決定するためのコストと速度の比較',
            '[2026年コーディング用ローカルLLM比較](/ja/local-llms/best-local-llms-for-coding) — Qwen3-CoderとDeepSeekのベンチマーク',
          ],
        },
        faqSection: {
          title: 'FAQ',
          faqs: [
            { q: 'LM Studioが「モデルをロードするメモリが不足しています」と表示される', a: 'モデルには利用可能なメモリより多いRAMが必要。他のアプリケーションを閉じてメモリを解放するか、より小さい量子化を選択。一般的なルール：推定RAMを取得するためにモデルファイルサイズに1.2を掛ける。4.5GBファイルは～5.4GB空きRAMが必要。' },
            { q: 'モデルが非常にゆっくり生成される（秒あたり5トークン未満）', a: 'モデルはCPU上で完全に実行。右パネルのGPU Layersをチェック--0が表示される場合、GPUは使用されていない。macOSでは、LM StudioはApple SiliconのMetalを自動的に有効。Windows/Linuxの場合、NVIDIAドライバーが最新であることを確認し、GPU Layersを最大値に増やす。' },
            { q: 'LM Studio検索で特定のモデルが見つからない', a: 'LM Studioはこれ以降GGUFファイルをHugging Faceで検索。モデルが表示されない場合は、Hugging FaceリポジトリNameを直接検索。新しいモデルの一部はまだインデックス化されていない可能性。' },
            { q: 'ローカルサーバーが「モデルが見つかりません」エラーを返す', a: 'モデルは、サーバーが応答する前にローカルサーバータブにロードされている必要がある。ローカルサーバータブを開き、ドロップダウンからモデルを選択し、サーバーの開始をクリック。APIリクエストのモデル名は任意の文字列にできる。' },
            { q: 'LM Studioは無料ですか？', a: 'はい。LM Studioは個人使用のための機能制限なし無料。商用ライセンスはビジネス使用に必要。2026年4月の時点で、個人層は使用量の上限、モデル制限、または透かしはない。' },
            { q: 'LM StudioとOllamaの違いは何ですか？', a: 'LM Studioはグラフィカルデスクトップアプリ。視覚的インターフェースを通じてモデルを閲覧およびダウンロード、ワンクリックでチャット開始、スライダーで設定を調整。Ollamaはコマンドラインツールおよびバックグラウンドサービス--1つのコマンドで設定するのが高速。' },
            { q: 'LM Studioはどのモデルで動作しますか？', a: 'Hugging Faceからの任意のGGUF形式モデル。人気のある選択肢には、Llama 3.3 8B、Qwen3 7B、Mistral Small、Phi-4 Mini、およびGemma 3 9Bが含まれる。Discover tabでモデル名で検索。LM Studioはダウンロード前に各量子化レベルのファイルサイズを表示。' },
            { q: 'LM StudioはGPUを自動的に使用していますか？', a: 'Apple Siliconでははい--Metal加速はデフォルトで有効。Windows and Linux with NVIDIAの場合、ドライバーがインストールされている場合、LM StudioはCUDAを自動検出。モデルパネルのGPU Layers設定をチェック--GPU上に0レイヤーが表示される場合、GPUは使用されていない。' },
            { q: 'LM Studioはダウンロードモデルをどこに保存していますか？', a: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows：%USERPROFILE%\.cache\lm-studio\models\。Linux：~/.cache/lm-studio/models/。LM Studio Settings→General→Model Storage Directoryでストレージロケーションを変更。' },
            { q: 'VS CodeやCursorでLM Studioを使用できますか？', a: 'はい。localhost:1234でLM Studio localサーバーを起動し、IDE拡張を設定してhttp://localhost:1234/v1をAPI基本URLとして使用し、API キーとして任意の文字列を使用。OpenAI互換APIをサポートするVS Code拡張はLM Studioでボックスから動作。' },
          ],
        },
        sources: {
          title: 'ソース',
          items: [
            'LM Studio. (2026). "LM Studioドキュメンテーションおよびリリースノート。" lmstudio.ai. https://lmstudio.ai/docs -- 公式インストールガイド、APIドキュメンテーション、およびハードウェア互換情報。',
            'Hugging Face. (2026). "GGUFモデルハブ。" https://huggingface.co/models?library=gguf -- LM Studio model browserと互換性のあるGGUF-量子化モデルの完全ディレクトリ。',
            'llama.cppコントリビューター。(2026). "llama.cpp -- CPU/GPU推論エンジン。" https://github.com/ggerganov/llama.cpp -- LM Studioによって使用される推論バックエンド、ハードウェア互換性およびパフォーマンスデータ付き。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'LM Studioのインストール：macOS、Windows、Linuxのためのデスクトップアプリセットアップガイド',
        'description': 'LM Studioのステップバイステップインストールおよびはじめてのモデルセットアップ。チャットUIおよびOpenAI互換ローカルサーバーを備えたGUI駆動ローカルLLMランナー。',
        'url': 'https://www.promptquorum.com/ja/local-llms/how-to-install-lm-studio',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
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
          { '@type': 'Question', name: 'LM Studio検索で特定のモデルが見つからない', acceptedAnswer: { '@type': 'Answer', text: 'LM Studioはこれ以降GGUFファイルをHugging Faceで検索。モデルが表示されない場合は、Hugging FaceリポジトリNameを直接検索。' } },
          { '@type': 'Question', name: 'ローカルサーバーが「モデルが見つかりません」エラーを返す', acceptedAnswer: { '@type': 'Answer', text: 'モデルは、サーバーが応答する前にローカルサーバータブにロードされている必要がある。ローカルサーバータブを開き、ドロップダウンからモデルを選択。' } },
          { '@type': 'Question', name: 'LM Studioは無料ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。LM Studioは個人使用のための機能制限なし無料。商用ライセンスはビジネス使用に必要。' } },
          { '@type': 'Question', name: 'LM StudioとOllamaの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'LM Studioはグラフィカルデスクトップアプリ。視覚的インターフェースを通じてモデルを閲覧およびダウンロード、ワンクリックでチャット開始。Ollamaはコマンドラインツール。' } },
          { '@type': 'Question', name: 'LM Studioはどのモデルで動作しますか？', acceptedAnswer: { '@type': 'Answer', text: 'Hugging Faceからの任意のGGUF形式モデル。人気のある選択肢には、Llama 3.3 8B、Qwen3 7B、Mistral Small、Phi-4 Mini、およびGemma 3 9Bが含まれる。' } },
          { '@type': 'Question', name: 'LM StudioはGPUを自動的に使用していますか？', acceptedAnswer: { '@type': 'Answer', text: 'Apple Siliconでははい--Metal加速はデフォルトで有効。Windows and Linux with NVIDIAの場合、LM StudioはCUDAを自動検出。' } },
          { '@type': 'Question', name: 'LM Studioはダウンロードモデルをどこに保存していますか？', acceptedAnswer: { '@type': 'Answer', text: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows：%USERPROFILE%\.cache\lm-studio\models\。Linux：~/.cache/lm-studio/models/。' } },
          { '@type': 'Question', name: 'VS CodeやCursorでLM Studioを使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。localhost:1234でLM Studio localサーバーを起動し、IDE拡張を設定してhttp://localhost:1234/v1をAPI基本URLとして使用。' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LM Studio vs Ollama Comparison',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Interface', 'description': 'LM Studio: graphical desktop app. Ollama: terminal plus API.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Model source', 'description': 'LM Studio: any GGUF on Hugging Face. Ollama: curated library of ~200 models.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'API port', 'description': 'LM Studio: localhost:1234. Ollama: localhost:11434.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Model management', 'description': 'LM Studio: GUI browser with sizes. Ollama: CLI commands.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Automation', 'description': 'LM Studio: limited, GUI-focused. Ollama: strong, scripting and Docker support.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Best for', 'description': 'LM Studio: beginners and GUI users. Ollama: developers and server deployments.' }
        ]
      },
    },
    zh: {
      theme: '入门',
      title: '如何安装 LM Studio：macOS、Windows 和 Linux 的桌面应用设置指南',
      seoTitle: 'LM Studio 2026：本地LLM最强免费GUI工具',
      intro: 'LM Studio 是一个免费的桌面应用程序，可以不需要终端命令就运行本地 LLM。从 lmstudio.ai 下载安装程序，打开应用，按名称搜索模型，单击下载，然后开始聊天 - 整个过程在 5 分钟内完成。截至 2026 年 4 月，LM Studio 在 macOS（Apple Silicon 和 Intel）、Windows 10+ 和 Linux（AppImage）上运行，支持 Hugging Face 500,000 多个模型库中的任何 GGUF 量化模型。它包括内置聊天 UI、localhost:1234 上的 OpenAI 兼容本地服务器，以及 Apple Metal、NVIDIA CUDA 和 AMD ROCm 的自动 GPU 加速。',
      metaDescription: '无需终端轻松运行本地LLM。搜索模型、下载、聊天仅需5分钟。支持NVIDIA CUDA、AMD ROCm、Apple Metal加速。完整入门指南和Ollama对比。',
      publishDate: '2026-04-04',
      dateModified: '2026-04-05',
      readTime: '阅读约7分钟',
      educationalLevel: 'Beginner',
      primaryTerm: 'LM Studio',
      toc: [
        { label: '关键要点', anchor: '#key-takeaways' },
        { label: 'LM Studio 是什么', anchor: '#what-is-lm-studio' },
        { label: '系统要求', anchor: '#system-requirements' },
        { label: '下载和安装', anchor: '#download-and-install' },
        { label: '查找和下载模型', anchor: '#find-and-download' },
        { label: '开始聊天', anchor: '#start-chatting' },
        { label: '调整模型设置', anchor: '#adjust-settings' },
        { label: '启用本地服务器', anchor: '#enable-server' },
        { label: '通过 Python 连接', anchor: '#connect-python' },
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
          title: '核心要点',
          items: [
            '从 lmstudio.ai 下载 LM Studio - 可在 macOS（Apple Silicon + Intel）、Windows 和 Linux（AppImage）上使用。',
            '最低要求：8GB RAM。推荐：7B 模型使用 16GB RAM。Apple Silicon Mac 默认使用 GPU 加速。',
            '内置模型浏览器直接搜索 Hugging Face - 不离开应用下载 GGUF 模型。',
            'LM Studio 包括内置聊天 UI 和端口 1234 上的 OpenAI 兼容本地服务器。',
            '最适合：喜欢 GUI 的初学者、想并排比较多个模型的用户、需要完整包而不使用终端命令的所有人。',
          ],
        },
        whatIsLmStudio: {
          title: 'LM Studio 是什么？',
          content: [
            '**LM Studio 是运行本地 LLM 的桌面应用程序。** 它提供图形模型浏览器、内置聊天界面和本地 API 服务器 - 全部在一个应用中。在内部，它使用 llama.cpp 进行推理，这是与 Ollama（[Ollama](/zh/local-llms/how-to-install-ollama)）相同的引擎。',
            'LM Studio 与 Ollama 的主要区别是它完全由 GUI 驱动。您通过应用界面浏览和下载模型、通过一次单击启动聊天，并使用滑块而不是配置文件管理模型设置。',
            'LM Studio 可供个人使用免费。由 LM Studio，Inc. 开发，2023 年发布。截至 2026 年，它支持 NVIDIA CUDA、AMD ROCm 和 Apple Metal 加速。',
          ],
        },
        requirements: {
          title: 'LM Studio 的系统要求是什么？',
          rows: [
            { '规格': '操作系统', '最低要求': 'macOS 13.6、Windows 10、Ubuntu 22.04', '推荐': 'macOS 14+、Windows 11、Ubuntu 24.04' },
            { '规格': 'RAM', '最低要求': '8GB', '推荐': '16GB 或更高' },
            { '规格': '存储', '最低要求': 'App 500 MB + 模型空间', '推荐': '50GB+ 多个模型的空闲空间' },
            { '规格': 'GPU（可选）', '最低要求': 'NVIDIA GTX 10 系列或更新版本', '推荐': 'NVIDIA RTX 40/50 系列、AMD RX 7000+ 或 Apple M-series' },
          ],
          columns: ['规格', '最低要求', '推荐'],
        },
        download: {
          title: '如何下载和安装 LM Studio',
          numberedItems: [
            '访问 lmstudio.ai 并单击您的操作系统的下载按钮。',
            'macOS：打开 .dmg 文件并将 LM Studio 拖到应用程序。首次启动时，在系统偏好设置 → 隐私和安全中批准安全提示。',
            'Windows：运行 LM-Studio-Setup.exe 安装程序。LM Studio 安装在 %LOCALAPPDATA%\\LM-Studio。',
            'Linux：下载 .AppImage 文件。用 `chmod +x LM-Studio-*.AppImage` 使其可执行并运行。不需要系统安装。',
            '首次启动时，LM Studio 会显示欢迎屏幕并提示您下载模型。',
          ],
        },
        findModel: {
          title: '如何在 LM Studio 中查找和下载模型',
          content: '使用搜索选项卡（左侧边栏中的放大镜图标）查找模型：',
          numberedItems: [
            '单击左侧边栏中的搜索选项卡。',
            '键入模型名称 - 例如"llama 3.1"或"phi-3 mini"。',
            'LM Studio 显示来自 Hugging Face 的匹配 GGUF 模型，带有文件大小和量化选项。',
            '选择量化级别。对于 8GB RAM：选择 Q4_K_M（7B 模型约 4.5GB）。对于 16GB RAM：Q5_K_M 或 Q6_K 提供更好的质量。',
            '单击下载箭头。进度显示在下载选项卡中。',
          ],
        },
        firstChat: {
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
          content: 'LM Studio 包括一个模仿 OpenAI API 的本地服务器。任何适用于 OpenAI 的应用都可以通过此服务器使用您的本地模型：',
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
          title: '应该使用 LM Studio 还是 Ollama',
          rows: [
            { '因素': '界面', 'LM Studio': '图形桌面应用', 'Ollama': '终端 + API' },
            { '因素': '模型源', 'LM Studio': 'Hugging Face（任何 GGUF 模型）', 'Ollama': 'Ollama 库（策划，约 200 个模型）' },
            { '因素': 'API 端口', 'LM Studio': 'localhost:1234', 'Ollama': 'localhost:11434' },
            { '因素': '模型管理', 'LM Studio': '带文件大小信息的 GUI 浏览器', 'Ollama': 'CLI 命令（ollama pull、list、rm）' },
            { '因素': '自动化', 'LM Studio': '有限（GUI 为中心）', 'Ollama': '强大（脚本、Docker、CI）' },
            { '因素': '最适合', 'LM Studio': '初学者、GUI 用户、模型探索', 'Ollama': '开发人员、自动化、服务器部署' },
          ],
          columns: ['因素', 'LM Studio', 'Ollama'],
        },
        troubleshooting: {
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
          title: '对隐私敏感的用例 LM Studio',
          content: [
            '**中国（数据安全法）**：LM Studio 支持通过 Hugging Face 搜索原生 Qwen3 模型 - 在模型浏览器中搜索"qwen2.5"以查找所有可用大小。对于中文文本工作流，Qwen3 7B 或 14B 比同参数数量的西方训练模型在中文文本上提供 30-40% 更好的令牌效率。所有推理在本地运行，根据中国数据安全法（数据安全法），无外部 API 调用。',
            '**亚太地区（数据跨境）**：LM Studio 在本地运行所有推理，符合 MLAI（多边人工智能）框架和地区数据驻留要求。对于在亚太地区处理敏感数据的企业，LM Studio 消除了数据跨越国界的风险。',
            '**企业部署**：LM Studio 提供零出口推理，适合金融、医疗和法律行业的监管合规。所有数据留在本地设备上，简化了审计和数据保护认证。',
          ],
        },
        commonMistakes: {
          title: '安装 LM Studio 时常见的错误是什么',
          items: [
            '**未为所选模型分配足够的系统 RAM。** 检查模型文件大小并乘以 1.2 - 这是所需的最小可用 RAM。4.5GB Q4_K_M 7B 模型需要约 5.4GB 可用 RAM。',
            '**使用预量化模型仍然对您的 GPU VRAM 来说太大。** 如果模型超过 VRAM，LM Studio 会回退到 CPU 推理，速度快 5-10 倍。在下载前检查文件大小与您的 GPU VRAM。',
            '**期望来自 CPU 专用系统上大型模型的即时响应。** 7B 模型在 CPU 上生成 8-20 令牌/秒 - 200 令牌响应需要 10-25 秒。这是正常的。对于仅 CPU 机器上的更快响应，使用 3B 模型。',
            '**在 NVIDIA 机器上设置 GPU 层为 0：** LM Studio 应自动检测 CUDA，但在新安装后有时默认为 0 GPU 层。打开模型面板 → GPU 层 → 拖到最大。在 RTX 4070（12GB VRAM）上，7B 模型的最大层从 8 tok/sec（CPU）移动到 80+ tok/sec（GPU）- 10 倍差异。',
            '**当 Q4_K_M 可用时下载 FP16 模型。** FP16 模型对于聊天任务比 Q4_K_M 大两倍，质量收益可忽略不计。7B 模型的 FP16 约为 14GB；同一模型在 Q4_K_M 约为 4.5GB。除非您有特定理由使用更高精度，否则始终默认下载 Q4_K_M。',
          ],
        },
        relatedReading: {
          title: '延伸阅读',
          items: [
            '[什么是本地 LLM？](/zh/local-llms/what-are-local-llms) -- 核心概念和组件',
            '[运行您的第一个本地 LLM](/zh/local-llms/run-first-local-llm) -- 安装后的后续步骤',
            '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) -- LM Studio 的基于终端的替代方案',
            '[初学者最佳本地 LLM 模型](/zh/local-llms/best-beginner-local-llm-models) -- 按硬件的模型建议',
            '[本地 LLM 硬件指南 2026](/zh/local-llms/local-llm-hardware-guide-2026) -- GPU 和 RAM 建议以从您的硬件获得 LM Studio 的最佳性能',
            '[本地 LLM vs 云 API](/zh/local-llms/local-llms-vs-cloud-apis) -- 成本和速度比较以决定何时本地 LM Studio 推理是正确的选择',
            '[2026年最佳编程本地LLM对比](/zh/local-llms/best-local-llms-for-coding) — Qwen3-Coder与DeepSeek基准测试',
          ],
        },
        faqSection: {
          title: 'FAQ',
          faqs: [
            { q: 'LM Studio 显示"没有足够的内存来加载模型"', a: '模型需要比可用更多的 RAM。关闭其他应用以释放内存，或选择更小的量化。一般规则：将模型文件大小乘以 1.2 以估计所需的 RAM。' },
            { q: '模型生成非常缓慢（每秒 5 个令牌以下）', a: '模型完全在 CPU 上运行。检查右窗格中的 GPU 层 - 如果显示 0，您的 GPU 未被使用。在 macOS 上，LM Studio 自动为 Apple Silicon 启用 Metal。' },
            { q: '我在 LM Studio 搜索中找不到特定模型', a: 'LM Studio 搜索 Hugging Face 以查找 GGUF 文件。如果模型没有出现，请尝试直接按 Hugging Face 存储库名称搜索。某些较新的模型可能尚未建立索引。' },
            { q: '本地服务器返回"找不到模型"错误', a: '必须在本地服务器选项卡中加载模型，服务器才能响应。打开本地服务器选项卡，从下拉菜单中选择一个模型，然后单击启动服务器。' },
            { q: 'LM Studio 免费吗？', a: '是的。LM Studio 可供个人使用免费，没有功能限制。商业用途需要商业许可。截至 2026 年 4 月，个人级别没有使用上限、模型限制或水印。' },
            { q: 'LM Studio 和 Ollama 之间有什么区别？', a: 'LM Studio 是图形桌面应用 - 您通过可视界面浏览和下载模型、通过一次单击启动聊天、用滑块调整设置。Ollama 是命令行工具和后台服务 - 用单个命令设置更快。' },
            { q: 'LM Studio 可以使用哪些模型？', a: '来自 Hugging Face 的任何 GGUF 格式模型。热门选择包括 Llama 3.3 8B、Qwen3 7B、Mistral Small、Phi-4 Mini 和 Gemma 3 9B。在 Discover 选项卡中按模型名称搜索。' },
            { q: 'LM Studio 自动使用我的 GPU 吗？', a: '在 Apple Silicon 上是的 - Metal 加速默认启用。在 Windows and Linux with NVIDIA 上，如果驱动程序已安装，LM Studio 会自动检测 CUDA。' },
            { q: 'LM Studio 在哪里存储下载的模型？', a: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows：%USERPROFILE%\.cache\lm-studio\models\。Linux：~/.cache/lm-studio/models/。' },
            { q: '我可以在 VS Code 或 Cursor 中使用 LM Studio 吗？', a: '可以。在 localhost:1234 启动 LM Studio 本地服务器，然后配置您的 IDE 扩展以使用 http://localhost:1234/v1 作为 API 基本 URL。' },
          ],
        },
        sources: {
          title: '资源',
          items: [
            'LM Studio. (2026). "LM Studio 文档和发行说明。" lmstudio.ai. https://lmstudio.ai/docs -- 官方安装指南、API 文档和硬件兼容性信息。',
            'Hugging Face. (2026). "GGUF 模型中心。" https://huggingface.co/models?library=gguf -- 与 LM Studio 模型浏览器兼容的 GGUF 量化模型的完整目录。',
            'llama.cpp 贡献者。(2026). "llama.cpp -- CPU/GPU 推理引擎。" https://github.com/ggerganov/llama.cpp -- LM Studio 使用的推理后端，带有硬件兼容性和性能数据。',
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
        'dateModified': '2026-04-18',
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
          { '@type': 'Question', name: 'LM Studio 免费吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。LM Studio 可供个人使用免费，没有功能限制。商业用途需要商业许可。' } },
          { '@type': 'Question', name: 'LM Studio 和 Ollama 之间有什么区别？', acceptedAnswer: { '@type': 'Answer', text: 'LM Studio 是图形桌面应用。Ollama 是命令行工具和后台服务。两者使用相同的 llama.cpp 推理引擎。' } },
          { '@type': 'Question', name: 'LM Studio 可以使用哪些模型？', acceptedAnswer: { '@type': 'Answer', text: '来自 Hugging Face 的任何 GGUF 格式模型。热门选择包括 Llama 3.3 8B、Qwen3 7B、Mistral Small。' } },
          { '@type': 'Question', name: 'LM Studio 自动使用我的 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '在 Apple Silicon 上是的 - Metal 加速默认启用。在 Windows and Linux with NVIDIA 上，LM Studio 自动检测 CUDA。' } },
          { '@type': 'Question', name: 'LM Studio 在哪里存储下载的模型？', acceptedAnswer: { '@type': 'Answer', text: 'macOS：~/Library/Application Support/LM Studio/Models/lmstudio-community/。Windows 和 Linux 有类似位置。' } },
          { '@type': 'Question', name: '我可以在 VS Code 或 Cursor 中使用 LM Studio 吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。在 localhost:1234 启动 LM Studio 本地服务器，然后配置您的 IDE 扩展以使用兼容的 API 端点。' } }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'LM Studio vs Ollama Comparison',
        'numberOfItems': 6,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Interface', 'description': 'LM Studio: graphical desktop app. Ollama: terminal plus API.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Model source', 'description': 'LM Studio: any GGUF on Hugging Face. Ollama: curated library of ~200 models.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'API port', 'description': 'LM Studio: localhost:1234. Ollama: localhost:11434.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Model management', 'description': 'LM Studio: GUI browser with sizes. Ollama: CLI commands.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Automation', 'description': 'LM Studio: limited, GUI-focused. Ollama: strong, scripting and Docker support.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Best for', 'description': 'LM Studio: beginners and GUI users. Ollama: developers and server deployments.' }
        ]
      },
    },
  };
