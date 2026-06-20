// Auto-generated from src/lib/local-llms/content.ts
// Slug: troubleshooting-local-llm-setup
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Fix Local LLM Errors in 2026: 10 Common Problems in Ollama, LM Studio, and vLLM',
      seoTitle: 'Fix Local LLM Errors: OOM, GPU Detection, Port 11434',
      intro: 'The most common errors in local LLMs are out-of-memory crashes, GPU not detected, extremely slow CPU inference, connection refused from the API, and garbled output. As of April 2026, there are solutions for all 10 errors -- most require only one or two terminal commands. This guide covers Ollama (port 11434), LM Studio (port 1234), and vLLM with exact commands for each error.',
      metaDescription: '10 common local LLM errors fixed: OOM kills, GPU not detected, port 11434 refused, slow CPU fallback. Fix commands for Ollama + LM Studio. April 2026.',
      twitterDescription: '10 local LLM errors fixed: OOM, GPU not detected, port 11434 refused, CPU fallback. Fix commands for Ollama + LM Studio. April 2026.',
      leadAnswerBlock: '**The most common errors in local LLMs are out-of-memory crashes, GPU not detected, extremely slow CPU inference, connection refused from the API, and garbled output.**',
      dateModified: '2026-04-16',
      publishDate: '2026-04-04',
      audience: 'Beginners running their first local LLM on consumer hardware',
      readTime: '9 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM troubleshooting',
      toc: [
        { label: 'Summary', anchor: '#key-takeaways' },
        { label: 'Error 1: Out of Memory', anchor: '#error-1-out-of-memory' },
        { label: 'Error 2: GPU Not Detected', anchor: '#error-2-gpu-not-detected' },
        { label: 'Error 3: Very Slow Inference', anchor: '#error-3-very-slow-inference' },
        { label: 'Error 4: Connection Refused', anchor: '#error-4-connection-refused' },
        { label: 'Error 5: Model Not Found', anchor: '#error-5-model-not-found' },
        { label: 'Error 6: Corrupted Model File', anchor: '#error-6-corrupted-model-file' },
        { label: 'Error 7: CUDA / ROCm Errors', anchor: '#error-7-cuda-errors' },
        { label: 'Error 8: Garbled or Repetitive Output', anchor: '#error-8-garbled-output' },
        { label: 'Error 9: Port Already in Use', anchor: '#error-9-port-already-in-use' },
        { label: 'Error 10: Model Stops Mid-Response', anchor: '#error-10-model-stops-mid-response' },
      ],
sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Out of Memory: Switch to smaller quantization (Q4_K_M → Q3_K_S) or smaller model.',
            'GPU not detected on NVIDIA: Update driver to 525+ on Linux, 452+ on Windows. Run `nvidia-smi` to confirm.',
            'Extremely slow inference: You are running on CPU only. Enable GPU offloading in Ollama with `OLLAMA_GPU_LAYERS` environment variable.',
            'Connection refused: Ollama is not running. Start it with `ollama serve` or restart the service.',
            'Garbled output: wrong prompt template. Use the Instruct variant of the model, not the base variant.',
          ],
          image: '/images/troubleshooting-error-symptoms-quick-ref-en.svg',
          imageCaption: '10 most common local LLM errors with symptoms and fixes — quick reference for Ollama, LM Studio, and vLLM setups (April 2026).',
        },
        error1: {
          id: 'error-1-out-of-memory',
          title: 'Error 1: "Out of Memory" / Out-of-Memory Crash',
          content: '**Out-of-Memory errors mean the model needs more RAM than available -- not a hardware failure.** This is the most common error for first-time users. See [LLM Quantization Explained](/local-llms/llm-quantization-explained) for background on how quantization reduces RAM requirements.',
          items: [
            '**Check available RAM**: Run `free -h` on macOS/Linux, or open Task Manager → Performance → Memory on Windows.',
            '**Switch to smaller quantization**: Replace `Q8_0` or `Q5_K_M` with `Q4_K_M`. For Ollama: `ollama run llama3.2-instruct-q4_K_M`.',
            '**Close background applications before loading the model** -- browsers and other apps consume RAM, reducing what the model has available.',
            '**Switch to smaller model**: if 8B fails on 8 GB RAM, try `llama3.2:3b` (requires only ~2.5 GB).',
          ],
          image: '/images/troubleshooting-ram-by-model-size-en.svg',
          imageCaption: 'Local LLM RAM requirements by model size: llama3.2 1B–3B fits in 8 GB, 7B–8B models need 16 GB, 70B models need 64 GB at Q4_K_M quantization.',
        },
        error1Code: {
          title: 'Check Available RAM on Linux / macOS',
          codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# More readable on macOS\ntop -l 1 | grep "PhysMem"',
          codeLanguage: 'bash',
        },
        error2: {
          id: 'error-2-gpu-not-detected',
          title: 'Error 2: GPU Not Being Used (Running on CPU Only)',
          content: [
            '**GPU not being used means the LLM runs 5–10× slower than expected -- check driver installation before anything else.** Verify that your GPU is visible to the system:',
          ],
          codeBlock: '# NVIDIA — should show GPU name and driver version\nnvidia-smi\n\n# AMD on Linux\nrocm-smi\n\n# macOS — check if Metal is available\nsystem_profiler SPDisplaysDataType | grep "Metal"',
          codeLanguage: 'bash',
          image: '/images/troubleshooting-gpu-detection-en.svg',
          imageCaption: 'CPU-only vs GPU-active: Ollama on CPU gives 2–8 tok/s; GPU mode gives 30–120 tok/s. Check with ollama ps or nvidia-smi.',
        },
        error2Fixes: {
          title: 'How Do You Enable GPU in Ollama?',
          items: [
            '**NVIDIA on Linux**: Install NVIDIA driver 525+ and CUDA Toolkit 11.3+. Ollama auto-detects CUDA on restart.',
            '**NVIDIA on Windows**: Ensure driver version is 452.39 or higher. Ollama automatically installs CUDA support via the Windows installer.',
            '**AMD on Linux**: Install ROCm 5.7+. If detection fails, set `HSA_OVERRIDE_GFX_VERSION=11.0.0` for RX 6000-series cards.',
            '**Apple Silicon**: Ollama uses Metal by default -- no configuration needed. Confirm with `ollama ps` after loading a model; GPU layers appear in output.',
          ],
        },
        error3: {
          id: 'error-3-very-slow-inference',
          title: 'Error 3: Inference Is Extremely Slow (Under 5 Tokens/Second)',
          content: '**Under 5 tokens/second means the model is running on CPU only or the model is too large for available VRAM.** A 7B model on GPU generates 30–80 tok/s; the same model on CPU generates 3–10 tok/s.',
          items: [
            '**Confirm whether GPU is active**: Run `ollama ps` while a model is loaded. The output shows how many layers are on GPU vs CPU.',
            '**Reduce model size**: a 13B model on CPU generates 3–6 tok/s. Switching to 7B doubles the speed; switching to 3B quadruples it.',
            '**Increase GPU layers in Ollama**: Set `OLLAMA_GPU_LAYERS=999` to push all layers to GPU (Ollama will cap to what fits in VRAM).',
            '**Use faster quantization**: Q4_K_M is the fastest quantization that maintains acceptable quality. Q8_0 is higher quality but ~30% slower.',
          ],
        },
        error3Code: {
          title: 'Set GPU Layers in Ollama',
          codeBlock: '# Set environment variable before starting Ollama\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# Or in a Modelfile\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
          codeLanguage: 'bash',
        },
        error4: {
          id: 'error-4-connection-refused',
          title: 'Error 4: "Connection Refused" When Calling the API',
          content: '**Connection Refused means Ollama is not running -- the API at `localhost:11434` only responds when the service is active.** Start it before making API calls.',
          codeBlock: '# Start Ollama manually\nollama serve\n\n# On Linux -- restart the systemd service\nsystemctl restart ollama\n\n# Verify it is running\ncurl http://localhost:11434\n# Expected: "Ollama is running"',
          codeLanguage: 'bash',
        },
        error5: {
          id: 'error-5-model-not-found',
          title: 'Error 5: "Model Not Found" Error',
          content: [
            '**"Model not found" means the model name in your command does not match any downloaded model.** Model names in Ollama are case-sensitive and include version tags.',
          ],
          codeBlock: '# List all downloaded models\nollama list\n\n# Pull a model if it is missing\nollama pull llama3.2\n\n# Check the exact model name -- tags matter\n# "llama3.2" and "llama3.2:3b" are different entries',
          codeLanguage: 'bash',
        },
        error6: {
          id: 'error-6-corrupted-model-file',
          title: 'Error 6: Corrupted Model File',
          content: '**Corrupted model files are caused by interrupted downloads -- delete and re-pull to fix.** Ollama does not always auto-detect partial downloads.',
          codeBlock: '# Remove the corrupted model\nollama rm llama3.2\n\n# Re-pull it\nollama pull llama3.2\n\n# For LM Studio: manually delete model files\n# Default location: ~/.cache/lm-studio/models/',
          codeLanguage: 'bash',
        },
        error6lmstudio: {
          id: 'error-6b-lm-studio-model-resolution',
          title: 'Error 6b: "Failed to Resolve Model" in LM Studio',
          content: '**"Failed to resolve model lmstudio-community/..." means LM Studio cannot find the model in its registry.** This typically happens when a model is downloaded from `lmstudio-community` on Hugging Face but the registry reference has changed. LM Studio is using a cached registry entry that no longer matches available model files.',
          items: [
            '**Open LM Studio → My Models tab → click the three-dot menu on the failed model → select "Delete model"** (keeps the file, removes registry)',
            '**Search for the same model in the model browser and re-download it** -- LM Studio will re-register it',
            '**Alternative: quit LM Studio, navigate to `~/.cache/lm-studio/models/`, delete the specific model folder, then re-download**',
          ],
          codeBlock: '# Manually clear LM Studio model cache (macOS/Linux)\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
          codeLanguage: 'bash',
        },
        error7: {
          id: 'error-7-cuda-errors',
          title: 'Error 7: CUDA / ROCm Initialization Errors',
          content: '**CUDA and ROCm errors mean driver/library version mismatch -- update your driver to the required minimum version.**',
          items: [
            '**"CUDA driver version insufficient"**: Update NVIDIA driver. The minimum for llama.cpp is CUDA 11.3 / driver 450.80.',
            '**"No kernel image available for execution"**: Your GPU architecture is unsupported. GTX 900-series (Maxwell) and older are not supported by recent CUDA builds.',
            '**AMD ROCm "HSA_STATUS_ERROR_INVALID_ISA"**: Set `HSA_OVERRIDE_GFX_VERSION=10.3.0` (for RX 6000) or `11.0.0` (for RX 7000) before starting Ollama.',
            '**Check CUDA version**: Run `nvcc --version` or `nvidia-smi | grep CUDA`.',
          ],
        },
        error8: {
          id: 'error-8-garbled-output',
          title: 'Error 8: Garbled, Repetitive, or Nonsensical Output',
          content: [
            '**Garbled output almost always means you are using a base model instead of an instruct/chat variant.** Base models generate raw text completions, not answers to questions.',
            'Base models (e.g., `llama3.1:8b`) are not fine-tuned for conversation, and when prompted with a question, generate raw completions that look like gibberish. Always use the instruct variant: `llama3.1:8b-instruct`. See [How to Install LM Studio](/local-llms/how-to-install-lm-studio) for a GUI-based method to switch model variants.',
            'In Ollama, the default tag for most models already points to the instruct variant. If you manually downloaded from Hugging Face, confirm the filename includes "Instruct" or "chat".',
          ],
        },
        error9: {
          id: 'error-9-port-already-in-use',
          title: 'Error 9: "Address Already in Use" -- Port Conflict',
          content: '**"Address already in use" means another process is occupying port 11434 (Ollama) or 1234 (LM Studio).** Find and kill the conflicting process.',
          codeBlock: '# Find what is using port 11434 (Ollama)\nlsof -i :11434\n\n# Kill it by PID\nkill -9 <PID>\n\n# Or change Ollama port\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
          codeLanguage: 'bash',
        },
        error10: {
          id: 'error-10-model-stops-mid-response',
          title: 'Error 10: Model Stops Generating Mid-Response',
          content: '**Stopping mid-response is caused by reaching context length limits or `num_predict` set too low.** The default `num_predict` in many configurations is 128 tokens -- just enough for 1–2 sentences.',
          items: [
            '**Increase num_predict**: This parameter sets the maximum tokens to generate. Default is often 128. Increase it: In Ollama, add `PARAMETER num_predict 2048` to the Modelfile.',
            '**Check context window**: If your conversation is very long, the model may hit its context limit. Start a new session or use a model with a larger context window (Llama 3.2 3B supports 128K).',
            '**Check stop tokens**: Some Modelfiles include stop sequences that terminate generation early. Check the system prompt and template for unexpected stop patterns.',
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- Why Q4_K_M is the default and how quantization affects RAM',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- Hardware requirements to run 7B–70B models',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Installation and setup guide',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Comparison of the two most popular local LLM tools',
            '[How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop) -- Laptop-specific thermal and battery optimization',
            '[Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models) -- Model recommendations for 8 GB RAM',
            '[Best Local LLMs for Coding 2026](/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek benchmark comparison',
          ],
        },
        moreTroubleshooting: {
          title: 'Where to Find More Help',
          content: 'For hardware-specific issues on laptops (thermal throttling, battery drain), see [How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop). For security and privacy configuration questions, see [Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist). The Ollama GitHub issues page (github.com/ollama/ollama/issues) and r/LocalLLaMA subreddit are the most active community resources for model-specific bugs.',
        },
        commonMistakes: {
          title: 'Common Mistakes in Local LLM Troubleshooting',
          items: [
            '**Confusing OOM errors with hardware failure** -- the error means RAM is too small for the model, not that hardware is broken. Fix: use Q4_K_M quantization or smaller model.',
            '**Not checking system load** -- inference speed degrades significantly when other applications consume CPU/GPU. Close your browser, video player, and background processes before benchmarking.',
            '**Ignoring driver version incompatibility** -- NVIDIA CUDA requires specific driver versions per CUDA release. Check `nvidia-smi` output; driver version must be ≥450.80 for CUDA 11.x.',
            '**Using wrong model name in Ollama** -- `llama3.2` and `llama3.2:3b` are different Ollama tags. Run `ollama list` to see the exact names of downloaded models.',
            '**Not restarting Ollama after driver update** -- Ollama detects GPU at startup. After updating NVIDIA or ROCm drivers, fully restart Ollama (`ollama serve`) to re-detect GPU.',
          ],
          image: '/images/troubleshooting-debug-steps-en.svg',
          imageCaption: '5-step local LLM debugging process: check RAM → check GPU → check server → check model → check output quality. Stop at the first failure step.',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ — Official CUDA driver version requirements per release.',
            'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md — Official Ollama documentation for common errors.',
            'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ — Official AMD ROCm installation and Linux GPU support.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Fix Local LLM Errors in 2026: 10 Common Problems in Ollama, LM Studio, and vLLM',
        'description': 'Fix out-of-memory crashes, GPU not detected, connection refused, and garbled output in Ollama and LM Studio. Exact commands: OLLAMA_GPU_LAYERS, ollama rm, nvidia-smi.',
        'url': 'https://www.promptquorum.com/local-llms/troubleshooting-local-llm-setup',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-16',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama troubleshooting' },
          { '@type': 'Thing', 'name': 'LM Studio errors' },
          { '@type': 'Thing', 'name': 'local LLM out of memory' },
          { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
          { '@type': 'Thing', 'name': 'GPU not detected local LLM' },
        ],
        'proficiencyLevel': 'Beginner',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Debug Local LLM Setup Errors',
        'step': [
          { '@type': 'HowToStep', 'name': 'Fix out-of-memory errors', 'text': 'Switch to a smaller quantization (Q4_K_M) or smaller model. Check RAM with free -h.' },
          { '@type': 'HowToStep', 'name': 'Enable GPU detection', 'text': 'Update drivers (NVIDIA 525+), set OLLAMA_GPU_LAYERS=999, verify with nvidia-smi.' },
          { '@type': 'HowToStep', 'name': 'Speed up slow inference', 'text': 'Confirm GPU activity with ollama ps, reduce model size or use Q4_K_M quantization.' },
          { '@type': 'HowToStep', 'name': 'Fix connection refused', 'text': 'Start Ollama with ollama serve or restart the systemd service. Verify with curl localhost:11434.' },
          { '@type': 'HowToStep', 'name': 'Resolve model not found', 'text': 'List models with ollama list, pull missing models with ollama pull, verify exact names/tags.' },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What causes OOM errors in local LLMs?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'OOM (out of memory) errors occur when the model size exceeds available RAM or VRAM. Fix: switch to a smaller model (`ollama run llama3.2:3b` requires ~2.5 GB) or use a lower quantization level. Run `free -h` (Linux/macOS) to check available RAM before pulling models above 7B.' }
          },
          {
            '@type': 'Question',
            'name': 'Why is my GPU not detected by Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA: install driver 525+ and CUDA toolkit 11.3+, then restart Ollama. AMD on Linux: install ROCm 5.7+. Verify detection with `nvidia-smi` (NVIDIA) or `rocm-smi` (AMD). Apple Silicon: Ollama uses Metal by default — no configuration needed. Set OLLAMA_GPU_LAYERS=999 to force full GPU offloading.' }
          },
          {
            '@type': 'Question',
            'name': 'Why is port 11434 refused when I run Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Port 11434 is refused when the Ollama server is not running. Start it with `ollama serve`, then verify with `curl http://localhost:11434` — expected response is "Ollama is running". On Linux, restart the systemd service: `systemctl restart ollama`.' }
          },
          {
            '@type': 'Question',
            'name': 'Why is my local LLM running on CPU instead of GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama falls back to CPU if GPU is not detected or VRAM is insufficient. Set the environment variable `OLLAMA_GPU_LAYERS=999` before starting Ollama to force maximum GPU offloading. Check GPU visibility first with `nvidia-smi`. If VRAM is insufficient for the full model, Ollama splits layers across GPU and CPU automatically.' }
          },
          {
            '@type': 'Question',
            'name': 'What are the most common local LLM deployment errors?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'The 10 most common local LLM errors are: (1) OOM/out of memory, (2) GPU not detected, (3) port 11434 refused, (4) slow CPU fallback, (5) model not found, (6) partial download corrupt, (7) generation stops early, (8) CUDA version mismatch, (9) context length exceeded, (10) incorrect model tag. Each has a specific fix command in Ollama and LM Studio.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I fix a corrupt Ollama model download?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Delete the cached model and re-pull: `ollama rm <model-name>` then `ollama pull <model-name>`. Corrupt downloads happen when a pull is interrupted. Ollama does not always detect partial downloads automatically.' }
          },
          {
            '@type': 'Question',
            'name': 'How do I check if Ollama is using my GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Run `ollama ps` while a model is loaded — the output shows which layers are on GPU vs CPU. Alternatively, monitor GPU utilization with `nvidia-smi -l 1` (updates every second). If GPU utilization stays at 0%, Ollama is running on CPU only — check driver installation and CUDA compatibility.' }
          },
          {
            '@type': 'Question',
            'name': 'Why does my LLM generation stop early?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Early generation stops are usually caused by stop tokens in the Modelfile. Check the system prompt and template for unexpected stop sequences. Also verify the `num_predict` parameter — if set low, Ollama will truncate output at that token count. Default is -1 (unlimited).' }
          }
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Local LLM Troubleshooting Essentials',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'OOM Errors', 'description': 'Fix out-of-memory crashes by switching to Q4_K_M quantization or smaller models. Check RAM with free -h before pulling models.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'GPU Detection', 'description': 'Enable GPU by installing NVIDIA drivers 525+, CUDA 11.3+, or ROCm 5.7+ for AMD. Set OLLAMA_GPU_LAYERS=999 for full GPU offloading.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Slow Inference', 'description': 'Confirm GPU activity with ollama ps. If CPU-only, reduce model size or use Q4_K_M quantization.' },
        ]
      },
      gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
      gammaDescription: 'The following presentation covers: the 10 most common local LLM setup errors (out-of-memory, GPU not detected, slow inference, connection refused, garbled output), RAM requirements for 3B–14B models at Q4_K_M and Q8_0 quantization, a 5-step debug process, and Ollama commands for each fix. Download the PDF as a local LLM troubleshooting reference card.',
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Corregir errores de LLM local en 2026: 10 problemas frecuentes en Ollama, LM Studio y vLLM',
      seoTitle: 'Errores de LLM local: OOM, GPU no detectada y puerto 11434',
      intro: 'Los errores más comunes en los LLM locales son los cuelgues por falta de memoria, la GPU no detectada, la inferencia en CPU extremadamente lenta, la conexión rechazada por la API y la salida corrupta. A partir de abril de 2026, existen soluciones para los 10 errores — la mayoría requieren solo uno o dos comandos de terminal. Esta guía cubre Ollama (puerto 11434), LM Studio (puerto 1234) y vLLM con comandos exactos para cada error.',
      metaDescription: '10 errores comunes de LLM local resueltos: cuelgues OOM, GPU no detectada, puerto 11434 rechazado y CPU lenta. Comandos para Ollama y LM Studio. 2026.',
      twitterDescription: '10 errores de LLM local resueltos: OOM, GPU no detectada, puerto 11434 rechazado, CPU lenta. Comandos para Ollama + LM Studio. Abril 2026.',
      leadAnswerBlock: '**Los errores más comunes en los LLM locales son los cuelgues por falta de memoria, la GPU no detectada, la inferencia en CPU extremadamente lenta, la conexión rechazada por la API y la salida corrupta.**',
      dateModified: '2026-04-16',
      publishDate: '2026-04-04',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      readTime: '9 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'solución de problemas de LLM local',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Error 1: Sin memoria', anchor: '#error-1-out-of-memory' },
        { label: 'Error 2: GPU no detectada', anchor: '#error-2-gpu-not-detected' },
        { label: 'Error 3: Inferencia muy lenta', anchor: '#error-3-very-slow-inference' },
        { label: 'Error 4: Conexión rechazada', anchor: '#error-4-connection-refused' },
        { label: 'Error 5: Modelo no encontrado', anchor: '#error-5-model-not-found' },
        { label: 'Error 6: Archivo de modelo corrupto', anchor: '#error-6-corrupted-model-file' },
        { label: 'Error 7: Errores de CUDA / ROCm', anchor: '#error-7-cuda-errors' },
        { label: 'Error 8: Salida corrupta o repetitiva', anchor: '#error-8-garbled-output' },
        { label: 'Error 9: Puerto en uso', anchor: '#error-9-port-already-in-use' },
        { label: 'Error 10: El modelo se detiene a mitad de la respuesta', anchor: '#error-10-model-stops-mid-response' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Sin memoria: cambia a una cuantización más pequeña (Q4_K_M → Q3_K_S) o a un modelo más pequeño.',
            'GPU no detectada en NVIDIA: actualiza el driver a 525+ en Linux, 452+ en Windows. Ejecuta `nvidia-smi` para confirmar.',
            'Inferencia extremadamente lenta: estás ejecutando solo en CPU. Activa la descarga en GPU en Ollama con la variable de entorno `OLLAMA_GPU_LAYERS`.',
            'Conexión rechazada: Ollama no está en ejecución. Inícialo con `ollama serve` o reinicia el servicio.',
            'Salida corrupta: plantilla de prompt incorrecta. Usa la variante Instruct del modelo, no la variante base.',
          ],
          image: '/images/troubleshooting-error-symptoms-quick-ref-es.svg',
          imageCaption: 'Los 10 errores más comunes de LLM local con síntomas y soluciones — referencia rápida para configuraciones de Ollama, LM Studio y vLLM (abril de 2026).',
        },
        error1: {
          id: 'error-1-out-of-memory',
          title: 'Error 1: "Sin memoria" / Cuelgue por falta de memoria',
          content: '**Los errores de falta de memoria significan que el modelo necesita más RAM de la disponible — no es un fallo de hardware.** Este es el error más común para los usuarios nuevos. Consulta [Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) para entender cómo la cuantización reduce los requisitos de RAM.',
          items: [
            '**Verifica la RAM disponible**: ejecuta `free -h` en macOS/Linux, o abre el Administrador de tareas → Rendimiento → Memoria en Windows.',
            '**Cambia a una cuantización más pequeña**: reemplaza `Q8_0` o `Q5_K_M` por `Q4_K_M`. Para Ollama: `ollama run llama3.2-instruct-q4_K_M`.',
            '**Cierra las aplicaciones en segundo plano antes de cargar el modelo** — los navegadores y otras apps consumen RAM que el modelo necesita.',
            '**Cambia a un modelo más pequeño**: si 8B falla con 8 GB de RAM, prueba `llama3.2:3b` (requiere solo ~2,5 GB).',
          ],
          image: '/images/troubleshooting-ram-by-model-size-es.svg',
          imageCaption: 'Requisitos de RAM de LLM local por tamaño de modelo: llama3.2 1B–3B cabe en 8 GB, los modelos 7B–8B necesitan 16 GB, los modelos 70B necesitan 64 GB con cuantización Q4_K_M.',
        },
        error1Code: {
          title: 'Verificar la RAM disponible en Linux / macOS',
          codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# Más legible en macOS\ntop -l 1 | grep "PhysMem"',
          codeLanguage: 'bash',
        },
        error2: {
          id: 'error-2-gpu-not-detected',
          title: 'Error 2: GPU no usada (ejecutando solo en CPU)',
          content: [
            '**La GPU no usada significa que el LLM corre 5–10× más lento de lo esperado — verifica la instalación del driver antes que cualquier otra cosa.** Confirma que tu GPU es visible para el sistema:',
          ],
          codeBlock: '# NVIDIA — debe mostrar el nombre de la GPU y la versión del driver\nnvidia-smi\n\n# AMD en Linux\nrocm-smi\n\n# macOS — verificar si Metal está disponible\nsystem_profiler SPDisplaysDataType | grep "Metal"',
          codeLanguage: 'bash',
          image: '/images/troubleshooting-gpu-detection-es.svg',
          imageCaption: 'Solo CPU vs GPU activa: Ollama en CPU da 2–8 tok/s; el modo GPU da 30–120 tok/s. Verifica con ollama ps o nvidia-smi.',
        },
        error2Fixes: {
          title: '¿Cómo activar la GPU en Ollama?',
          items: [
            '**NVIDIA en Linux**: instala el driver NVIDIA 525+ y CUDA Toolkit 11.3+. Ollama detecta CUDA automáticamente al reiniciar.',
            '**NVIDIA en Windows**: asegúrate de que la versión del driver sea 452.39 o superior. Ollama instala el soporte CUDA automáticamente mediante el instalador de Windows.',
            '**AMD en Linux**: instala ROCm 5.7+. Si la detección falla, establece `HSA_OVERRIDE_GFX_VERSION=11.0.0` para tarjetas de la serie RX 6000.',
            '**Apple Silicon**: Ollama usa Metal por defecto — no se necesita configuración. Confirma con `ollama ps` después de cargar un modelo; las capas de GPU aparecen en la salida.',
          ],
        },
        error3: {
          id: 'error-3-very-slow-inference',
          title: 'Error 3: Inferencia extremadamente lenta (menos de 5 tokens por segundo)',
          content: '**Menos de 5 tokens por segundo significa que el modelo corre solo en CPU o que el modelo es demasiado grande para la VRAM disponible.** Un modelo 7B en GPU genera 30–80 tok/s; el mismo modelo en CPU genera 3–10 tok/s.',
          items: [
            '**Confirma si la GPU está activa**: ejecuta `ollama ps` mientras un modelo está cargado. La salida muestra cuántas capas están en GPU vs CPU.',
            '**Reduce el tamaño del modelo**: un modelo 13B en CPU genera 3–6 tok/s. Cambiar a 7B duplica la velocidad; cambiar a 3B la cuadruplica.',
            '**Aumenta las capas de GPU en Ollama**: establece `OLLAMA_GPU_LAYERS=999` para mover todas las capas a la GPU (Ollama limitará al máximo que cabe en VRAM).',
            '**Usa una cuantización más rápida**: Q4_K_M es la cuantización más rápida que mantiene una calidad aceptable. Q8_0 tiene mayor calidad pero es ~30% más lenta.',
          ],
        },
        error3Code: {
          title: 'Establecer capas de GPU en Ollama',
          codeBlock: '# Establecer la variable de entorno antes de iniciar Ollama\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# O en un Modelfile\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
          codeLanguage: 'bash',
        },
        error4: {
          id: 'error-4-connection-refused',
          title: 'Error 4: "Conexión rechazada" al llamar a la API',
          content: '**Conexión rechazada significa que Ollama no está en ejecución — la API en `localhost:11434` solo responde cuando el servicio está activo.** Inícialo antes de hacer llamadas a la API.',
          codeBlock: '# Iniciar Ollama manualmente\nollama serve\n\n# En Linux — reiniciar el servicio systemd\nsystemctl restart ollama\n\n# Verificar que está en ejecución\ncurl http://localhost:11434\n# Esperado: "Ollama is running"',
          codeLanguage: 'bash',
        },
        error5: {
          id: 'error-5-model-not-found',
          title: 'Error 5: Error "Modelo no encontrado"',
          content: [
            '**"Modelo no encontrado" significa que el nombre del modelo en tu comando no coincide con ningún modelo descargado.** Los nombres de modelos en Ollama distinguen mayúsculas de minúsculas e incluyen etiquetas de versión.',
          ],
          codeBlock: '# Listar todos los modelos descargados\nollama list\n\n# Descargar un modelo si falta\nollama pull llama3.2\n\n# Verifica el nombre exacto del modelo — las etiquetas importan\n# "llama3.2" y "llama3.2:3b" son entradas diferentes',
          codeLanguage: 'bash',
        },
        error6: {
          id: 'error-6-corrupted-model-file',
          title: 'Error 6: Archivo de modelo corrupto',
          content: '**Los archivos de modelo corruptos son causados por descargas interrumpidas — elimina y vuelve a descargar para solucionar.** Ollama no siempre detecta automáticamente las descargas parciales.',
          codeBlock: '# Eliminar el modelo corrupto\nollama rm llama3.2\n\n# Volver a descargarlo\nollama pull llama3.2\n\n# Para LM Studio: eliminar archivos de modelo manualmente\n# Ubicación predeterminada: ~/.cache/lm-studio/models/',
          codeLanguage: 'bash',
        },
        error6lmstudio: {
          id: 'error-6b-lm-studio-model-resolution',
          title: 'Error 6b: "Error al resolver el modelo" en LM Studio',
          content: '**"Failed to resolve model lmstudio-community/..." significa que LM Studio no puede encontrar el modelo en su registro.** Esto ocurre normalmente cuando un modelo se descarga desde `lmstudio-community` en Hugging Face pero la referencia del registro ha cambiado. LM Studio usa una entrada de registro en caché que ya no coincide con los archivos de modelo disponibles.',
          items: [
            '**Abre LM Studio → pestaña My Models → haz clic en el menú de tres puntos del modelo fallido → selecciona "Delete model"** (conserva el archivo, elimina el registro)',
            '**Busca el mismo modelo en el explorador de modelos y vuelve a descargarlo** — LM Studio lo volverá a registrar',
            '**Alternativa: cierra LM Studio, navega a `~/.cache/lm-studio/models/`, elimina la carpeta del modelo específico y vuelve a descargarlo**',
          ],
          codeBlock: '# Limpiar manualmente la caché de modelos de LM Studio (macOS/Linux)\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
          codeLanguage: 'bash',
        },
        error7: {
          id: 'error-7-cuda-errors',
          title: 'Error 7: Errores de inicialización de CUDA / ROCm',
          content: '**Los errores de CUDA y ROCm indican una incompatibilidad de versión de driver/biblioteca — actualiza tu driver a la versión mínima requerida.**',
          items: [
            '**"Versión del driver CUDA insuficiente"**: actualiza el driver NVIDIA. El mínimo para llama.cpp es CUDA 11.3 / driver 450.80.',
            '**"No hay imagen de kernel disponible para ejecución"**: la arquitectura de tu GPU no está soportada. La serie GTX 900 (Maxwell) y anteriores no están soportadas por las versiones recientes de CUDA.',
            '**AMD ROCm "HSA_STATUS_ERROR_INVALID_ISA"**: establece `HSA_OVERRIDE_GFX_VERSION=10.3.0` (para RX 6000) o `11.0.0` (para RX 7000) antes de iniciar Ollama.',
            '**Verifica la versión de CUDA**: ejecuta `nvcc --version` o `nvidia-smi | grep CUDA`.',
          ],
        },
        error8: {
          id: 'error-8-garbled-output',
          title: 'Error 8: Salida corrupta, repetitiva o sin sentido',
          content: [
            '**La salida corrupta casi siempre significa que estás usando un modelo base en lugar de una variante instruct/chat.** Los modelos base generan completaciones de texto sin formato, no respuestas a preguntas.',
            'Los modelos base (por ejemplo, `llama3.1:8b`) no están ajustados para conversación y, cuando se les hace una pregunta, generan completaciones sin formato que parecen incoherentes. Usa siempre la variante instruct: `llama3.1:8b-instruct`. Consulta [Cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio) para un método basado en GUI para cambiar variantes de modelo.',
            'En Ollama, la etiqueta predeterminada para la mayoría de los modelos ya apunta a la variante instruct. Si descargaste manualmente desde Hugging Face, confirma que el nombre del archivo incluya "Instruct" o "chat".',
          ],
        },
        error9: {
          id: 'error-9-port-already-in-use',
          title: 'Error 9: "Dirección ya en uso" — Conflicto de puerto',
          content: '**"Dirección ya en uso" significa que otro proceso está ocupando el puerto 11434 (Ollama) o 1234 (LM Studio).** Encuentra y termina el proceso en conflicto.',
          codeBlock: '# Encontrar qué usa el puerto 11434 (Ollama)\nlsof -i :11434\n\n# Terminar por PID\nkill -9 <PID>\n\n# O cambiar el puerto de Ollama\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
          codeLanguage: 'bash',
        },
        error10: {
          id: 'error-10-model-stops-mid-response',
          title: 'Error 10: El modelo se detiene a mitad de la respuesta',
          content: '**Detenerse a mitad de la respuesta es causado por alcanzar los límites de longitud de contexto o por tener `num_predict` demasiado bajo.** El `num_predict` predeterminado en muchas configuraciones es 128 tokens — suficiente para solo 1–2 oraciones.',
          items: [
            '**Aumenta num_predict**: este parámetro establece el máximo de tokens a generar. El valor predeterminado suele ser 128. Auméntalo: en Ollama, agrega `PARAMETER num_predict 2048` al Modelfile.',
            '**Verifica la ventana de contexto**: si tu conversación es muy larga, el modelo puede haber alcanzado su límite de contexto. Inicia una nueva sesión o usa un modelo con una ventana de contexto más grande (Llama 3.2 3B soporta 128K).',
            '**Verifica los tokens de parada**: algunos Modelfiles incluyen secuencias de parada que terminan la generación anticipadamente. Revisa el prompt del sistema y la plantilla para patrones de parada inesperados.',
          ],
        },
        relatedReading: {
          title: 'Lectura relacionada',
          items: [
            '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) — Por qué Q4_K_M es el predeterminado y cómo la cuantización afecta la RAM',
            '[Guía de hardware para LLM local 2026](/es/local-llms/local-llm-hardware-guide-2026) — Requisitos de hardware para ejecutar modelos 7B–70B',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — Guía de instalación y configuración',
            '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) — Comparación de las dos herramientas de LLM local más populares',
            '[Cómo ejecutar LLM locales en un portátil](/es/local-llms/local-llm-on-laptop) — Optimización térmica y de batería específica para portátiles',
            '[Mejores modelos de LLM local para principiantes](/es/local-llms/best-beginner-local-llm-models) — Recomendaciones de modelos para 8 GB de RAM',
            '[Mejores LLM locales para programar 2026](/es/local-llms/best-local-llms-for-coding) — Comparativa Qwen3-Coder vs DeepSeek',
          ],
        },
        moreTroubleshooting: {
          title: 'Dónde encontrar más ayuda',
          content: 'Para problemas específicos de hardware en portátiles (limitación térmica, consumo de batería), consulta [Cómo ejecutar LLM locales en un portátil](/es/local-llms/local-llm-on-laptop). Para preguntas de configuración de seguridad y privacidad, consulta [Lista de verificación de seguridad y privacidad de LLM local](/es/local-llms/local-llm-security-privacy-checklist). La página de issues de Ollama en GitHub (github.com/ollama/ollama/issues) y el subreddit r/LocalLLaMA son los recursos de comunidad más activos para bugs específicos de modelos.',
        },
        commonMistakes: {
          title: 'Errores comunes en la resolución de problemas de LLM local',
          items: [
            '**Confundir errores OOM con fallos de hardware** — el error significa que la RAM es demasiado pequeña para el modelo, no que el hardware esté roto. Solución: usa cuantización Q4_K_M o un modelo más pequeño.',
            '**No verificar la carga del sistema** — la velocidad de inferencia se degrada significativamente cuando otras aplicaciones consumen CPU/GPU. Cierra el navegador, el reproductor de video y los procesos en segundo plano antes de hacer benchmarks.',
            '**Ignorar la incompatibilidad de versión del driver** — NVIDIA CUDA requiere versiones de driver específicas por versión de CUDA. Verifica la salida de `nvidia-smi`; la versión del driver debe ser ≥450.80 para CUDA 11.x.',
            '**Usar el nombre de modelo incorrecto en Ollama** — `llama3.2` y `llama3.2:3b` son etiquetas de Ollama diferentes. Ejecuta `ollama list` para ver los nombres exactos de los modelos descargados.',
            '**No reiniciar Ollama después de actualizar el driver** — Ollama detecta la GPU al arrancar. Después de actualizar los drivers de NVIDIA o ROCm, reinicia Ollama completamente (`ollama serve`) para volver a detectar la GPU.',
          ],
          image: '/images/troubleshooting-debug-steps-es.svg',
          imageCaption: 'Proceso de depuración de LLM local en 5 pasos: verificar RAM → verificar GPU → verificar servidor → verificar modelo → verificar calidad de salida. Detente en el primer paso fallido.',
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ — Requisitos oficiales de versión de driver CUDA por versión.',
            'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md — Documentación oficial de Ollama para errores comunes.',
            'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ — Instalación oficial de AMD ROCm y soporte de GPU para Linux.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Corregir errores de LLM local en 2026: 10 problemas frecuentes en Ollama, LM Studio y vLLM',
        'description': 'Soluciona cuelgues por falta de memoria, GPU no detectada, conexión rechazada y salida corrupta en Ollama y LM Studio. Comandos exactos: OLLAMA_GPU_LAYERS, ollama rm, nvidia-smi.',
        'url': 'https://www.promptquorum.com/es/local-llms/troubleshooting-local-llm-setup',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-16',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Solución de problemas de Ollama' },
          { '@type': 'Thing', 'name': 'Errores de LM Studio' },
          { '@type': 'Thing', 'name': 'LLM local sin memoria' },
          { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
          { '@type': 'Thing', 'name': 'GPU no detectada LLM local' },
        ],
        'proficiencyLevel': 'Beginner',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Depurar errores de configuración de LLM local',
        'step': [
          { '@type': 'HowToStep', 'name': 'Corregir errores de falta de memoria', 'text': 'Cambia a una cuantización más pequeña (Q4_K_M) o a un modelo más pequeño. Verifica la RAM con free -h.' },
          { '@type': 'HowToStep', 'name': 'Activar la detección de GPU', 'text': 'Actualiza los drivers (NVIDIA 525+), establece OLLAMA_GPU_LAYERS=999, verifica con nvidia-smi.' },
          { '@type': 'HowToStep', 'name': 'Acelerar la inferencia lenta', 'text': 'Confirma la actividad de la GPU con ollama ps, reduce el tamaño del modelo o usa cuantización Q4_K_M.' },
          { '@type': 'HowToStep', 'name': 'Corregir la conexión rechazada', 'text': 'Inicia Ollama con ollama serve o reinicia el servicio systemd. Verifica con curl localhost:11434.' },
          { '@type': 'HowToStep', 'name': 'Resolver modelo no encontrado', 'text': 'Lista los modelos con ollama list, descarga los faltantes con ollama pull, verifica nombres y etiquetas exactos.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Qué causa los errores OOM en los LLM locales?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Los errores OOM (sin memoria) ocurren cuando el tamaño del modelo supera la RAM o VRAM disponible. Solución: cambia a un modelo más pequeño (`ollama run llama3.2:3b` requiere ~2,5 GB) o usa un nivel de cuantización más bajo. Ejecuta `free -h` (Linux/macOS) para verificar la RAM disponible antes de descargar modelos de más de 7B.' }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué Ollama no detecta mi GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA: instala el driver 525+ y CUDA Toolkit 11.3+, luego reinicia Ollama. AMD en Linux: instala ROCm 5.7+. Verifica la detección con `nvidia-smi` (NVIDIA) o `rocm-smi` (AMD). Apple Silicon: Ollama usa Metal por defecto — no se necesita configuración. Establece OLLAMA_GPU_LAYERS=999 para forzar la descarga completa en GPU.' }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué se rechaza el puerto 11434 cuando ejecuto Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'El puerto 11434 se rechaza cuando el servidor Ollama no está en ejecución. Inícialo con `ollama serve`, luego verifica con `curl http://localhost:11434` — la respuesta esperada es "Ollama is running". En Linux, reinicia el servicio systemd: `systemctl restart ollama`.' }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué mi LLM local corre en CPU en lugar de GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama recurre a la CPU si no detecta la GPU o si la VRAM es insuficiente. Establece la variable de entorno `OLLAMA_GPU_LAYERS=999` antes de iniciar Ollama para forzar la máxima descarga en GPU. Verifica primero la visibilidad de la GPU con `nvidia-smi`. Si la VRAM es insuficiente para el modelo completo, Ollama divide automáticamente las capas entre GPU y CPU.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son los errores más comunes en el despliegue de LLM local?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Los 10 errores más comunes de LLM local son: (1) OOM/sin memoria, (2) GPU no detectada, (3) puerto 11434 rechazado, (4) CPU lenta como alternativa, (5) modelo no encontrado, (6) descarga parcial corrupta, (7) generación se detiene pronto, (8) incompatibilidad de versión CUDA, (9) longitud de contexto superada, (10) etiqueta de modelo incorrecta. Cada uno tiene un comando de corrección específico en Ollama y LM Studio.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo reparo una descarga de modelo de Ollama corrupta?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Elimina el modelo en caché y vuelve a descargarlo: `ollama rm <nombre-del-modelo>` y luego `ollama pull <nombre-del-modelo>`. Las descargas corruptas ocurren cuando una descarga es interrumpida. Ollama no siempre detecta descargas parciales automáticamente.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo verifico si Ollama está usando mi GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ejecuta `ollama ps` mientras un modelo está cargado — la salida muestra qué capas están en GPU vs CPU. Alternativamente, monitorea la utilización de GPU con `nvidia-smi -l 1` (se actualiza cada segundo). Si la utilización de GPU se mantiene en 0%, Ollama está corriendo solo en CPU — verifica la instalación del driver y la compatibilidad con CUDA.' }
          },
          {
            '@type': 'Question',
            'name': '¿Por qué se detiene la generación del LLM antes de tiempo?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Las detenciones anticipadas generalmente son causadas por tokens de parada en el Modelfile. Verifica el prompt del sistema y la plantilla para secuencias de parada inesperadas. También verifica el parámetro `num_predict` — si está configurado muy bajo, Ollama truncará la salida en ese número de tokens. El valor predeterminado es -1 (ilimitado).' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Aspectos esenciales para resolver problemas de LLM local',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Errores OOM', 'description': 'Soluciona los cuelgues por falta de memoria cambiando a cuantización Q4_K_M o a modelos más pequeños. Verifica la RAM con free -h antes de descargar modelos.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Detección de GPU', 'description': 'Activa la GPU instalando drivers NVIDIA 525+, CUDA 11.3+, o ROCm 5.7+ para AMD. Establece OLLAMA_GPU_LAYERS=999 para la descarga completa en GPU.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Inferencia lenta', 'description': 'Confirma la actividad de la GPU con ollama ps. Si solo usa CPU, reduce el tamaño del modelo o usa cuantización Q4_K_M.' },
        ],
      },
      gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
      gammaDescription: 'La siguiente presentación cubre: los 10 errores más comunes en la configuración de LLM local (sin memoria, GPU no detectada, inferencia lenta, conexión rechazada, salida corrupta), los requisitos de RAM para modelos 3B–14B con cuantización Q4_K_M y Q8_0, un proceso de depuración en 5 pasos y los comandos de Ollama para cada corrección. Descarga el PDF como tarjeta de referencia para la resolución de problemas de LLM local.',
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'إصلاح أخطاء LLM المحلي في 2026: 10 مشكلات شائعة في Ollama وLM Studio وvLLM',
      seoTitle: 'إصلاح أخطاء LLM المحلي: OOM وGPU والمنفذ 11434',
      intro: 'أكثر الأخطاء شيوعًا في نماذج LLM المحلية هي التعليق بسبب نفاد الذاكرة، وعدم اكتشاف GPU، والاستدلال البطيء للغاية على CPU، ورفض الاتصال من API، والمخرجات التالفة. اعتبارًا من أبريل 2026، توجد حلول لكل الأخطاء العشرة -- معظمها يتطلب أمرًا أو أمرين فقط في الطرفية. يغطي هذا الدليل Ollama (المنفذ 11434)، وLM Studio (المنفذ 1234)، وvLLM بأوامر دقيقة لكل خطأ.',
      metaDescription: '10 أخطاء شائعة في LLM المحلي: تعليق OOM يُحل بـ Q4_K_M، GPU غير محتجزة، رفض منفذ 11434. أوامر دقيقة لـ Ollama وLM Studio. 2026.',
      twitterDescription: '10 أخطاء لـ LLM المحلي محلولة: OOM، وعدم اكتشاف GPU، ورفض المنفذ 11434، وبطء CPU. أوامر لـ Ollama + LM Studio. أبريل 2026.',
      leadAnswerBlock: '**أكثر الأخطاء شيوعًا في نماذج LLM المحلية هي التعليق بسبب نفاد الذاكرة، وعدم اكتشاف GPU، والاستدلال البطيء للغاية على CPU، ورفض الاتصال من API، والمخرجات التالفة.**',
      dateModified: '2026-04-16',
      publishDate: '2026-04-04',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي على عتاد استهلاكي',
      readTime: '9 دقائق قراءة',
      educationalLevel: 'Beginner',
      primaryTerm: 'استكشاف أخطاء LLM المحلي وإصلاحها',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'الخطأ 1: نفاد الذاكرة', anchor: '#error-1-out-of-memory' },
        { label: 'الخطأ 2: عدم اكتشاف GPU', anchor: '#error-2-gpu-not-detected' },
        { label: 'الخطأ 3: استدلال بطيء جدًا', anchor: '#error-3-very-slow-inference' },
        { label: 'الخطأ 4: رفض الاتصال', anchor: '#error-4-connection-refused' },
        { label: 'الخطأ 5: النموذج غير موجود', anchor: '#error-5-model-not-found' },
        { label: 'الخطأ 6: ملف نموذج تالف', anchor: '#error-6-corrupted-model-file' },
        { label: 'الخطأ 7: أخطاء CUDA / ROCm', anchor: '#error-7-cuda-errors' },
        { label: 'الخطأ 8: مخرجات تالفة أو متكررة', anchor: '#error-8-garbled-output' },
        { label: 'الخطأ 9: المنفذ قيد الاستخدام', anchor: '#error-9-port-already-in-use' },
        { label: 'الخطأ 10: يتوقف النموذج في منتصف الاستجابة', anchor: '#error-10-model-stops-mid-response' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'نفاد الذاكرة: بدّل إلى تكميم أصغر (Q4_K_M ← Q3_K_S) أو نموذج أصغر.',
            'عدم اكتشاف GPU على NVIDIA: حدّث البرنامج المشغّل إلى 525+ على Linux، و452+ على Windows. شغّل `nvidia-smi` للتأكيد.',
            'استدلال بطيء للغاية: أنت تشغّل على CPU فقط. فعّل التفريغ على GPU في Ollama بمتغير البيئة `OLLAMA_GPU_LAYERS`.',
            'رفض الاتصال: Ollama غير قيد التشغيل. ابدأه بـ `ollama serve` أو أعد تشغيل الخدمة.',
            'مخرجات تالفة: قالب موجّه خاطئ. استخدم نسخة Instruct من النموذج، وليس النسخة الأساسية.',
          ],
          image: '/images/troubleshooting-error-symptoms-quick-ref-es.svg',
          imageCaption: 'أكثر 10 أخطاء شيوعًا لـ LLM المحلي مع الأعراض والحلول -- مرجع سريع لإعدادات Ollama وLM Studio وvLLM (أبريل 2026).',
        },
        error1: {
          id: 'error-1-out-of-memory',
          title: 'الخطأ 1: "نفاد الذاكرة" / تعليق بسبب نقص الذاكرة',
          content: '**أخطاء نفاد الذاكرة تعني أن النموذج يحتاج ذاكرة RAM أكثر من المتاح -- وليست عطلًا في العتاد.** هذا أكثر الأخطاء شيوعًا للمستخدمين الجدد. راجع [شرح تكميم LLM](/ar/local-llms/llm-quantization-explained) لفهم كيف يقلل التكميم متطلبات RAM.',
          items: [
            '**تحقق من RAM المتاحة**: شغّل `free -h` على macOS/Linux، أو افتح إدارة المهام ← الأداء ← الذاكرة على Windows.',
            '**بدّل إلى تكميم أصغر**: استبدل `Q8_0` أو `Q5_K_M` بـ `Q4_K_M`. لـ Ollama: `ollama run llama3.2-instruct-q4_K_M`.',
            '**أغلق التطبيقات في الخلفية قبل تحميل النموذج** -- المتصفحات والتطبيقات الأخرى تستهلك RAM التي يحتاجها النموذج.',
            '**بدّل إلى نموذج أصغر**: إذا فشل 8B بذاكرة 8 GB من RAM، جرّب `llama3.2:3b` (يتطلب ~2.5 GB فقط).',
          ],
          image: '/images/troubleshooting-ram-by-model-size-es.svg',
          imageCaption: 'متطلبات RAM لـ LLM المحلي حسب حجم النموذج: llama3.2 1B–3B يتسع في 8 GB، ونماذج 7B–8B تحتاج 16 GB، ونماذج 70B تحتاج 64 GB بتكميم Q4_K_M.',
        },
        error1Code: {
          title: 'التحقق من RAM المتاحة على Linux / macOS',
          codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# Más legible en macOS\ntop -l 1 | grep "PhysMem"',
          codeLanguage: 'bash',
        },
        error2: {
          id: 'error-2-gpu-not-detected',
          title: 'الخطأ 2: عدم استخدام GPU (التشغيل على CPU فقط)',
          content: [
            '**عدم استخدام GPU يعني أن LLM يعمل أبطأ بـ 5–10 مرات من المتوقع -- تحقق من تثبيت البرنامج المشغّل قبل أي شيء آخر.** تأكد من أن GPU مرئية للنظام:',
          ],
          codeBlock: '# NVIDIA — debe mostrar el nombre de la GPU y la versión del driver\nnvidia-smi\n\n# AMD en Linux\nrocm-smi\n\n# macOS — verificar si Metal está disponible\nsystem_profiler SPDisplaysDataType | grep "Metal"',
          codeLanguage: 'bash',
          image: '/images/troubleshooting-gpu-detection-es.svg',
          imageCaption: 'CPU فقط مقابل GPU نشطة: Ollama على CPU يعطي 2–8 tok/ثانية؛ ووضع GPU يعطي 30–120 tok/ثانية. تحقق بـ ollama ps أو nvidia-smi.',
        },
        error2Fixes: {
          title: 'كيف تفعّل GPU في Ollama؟',
          items: [
            '**NVIDIA على Linux**: ثبّت البرنامج المشغّل NVIDIA 525+ وCUDA Toolkit 11.3+. يكتشف Ollama CUDA تلقائيًا عند إعادة التشغيل.',
            '**NVIDIA على Windows**: تأكد من أن إصدار البرنامج المشغّل 452.39 أو أعلى. يثبّت Ollama دعم CUDA تلقائيًا عبر مثبّت Windows.',
            '**AMD على Linux**: ثبّت ROCm 5.7+. إذا فشل الاكتشاف، اضبط `HSA_OVERRIDE_GFX_VERSION=11.0.0` لبطاقات سلسلة RX 6000.',
            '**Apple Silicon**: يستخدم Ollama Metal افتراضيًا -- لا حاجة لتكوين. تأكد بـ `ollama ps` بعد تحميل نموذج؛ تظهر طبقات GPU في المخرجات.',
          ],
        },
        error3: {
          id: 'error-3-very-slow-inference',
          title: 'الخطأ 3: استدلال بطيء للغاية (أقل من 5 token في الثانية)',
          content: '**أقل من 5 token في الثانية يعني أن النموذج يعمل على CPU فقط أو أن النموذج أكبر من VRAM المتاحة.** نموذج 7B على GPU يولّد 30–80 tok/ثانية؛ والنموذج نفسه على CPU يولّد 3–10 tok/ثانية.',
          items: [
            '**تأكد إن كانت GPU نشطة**: شغّل `ollama ps` أثناء تحميل نموذج. تُظهر المخرجات عدد الطبقات على GPU مقابل CPU.',
            '**قلّل حجم النموذج**: نموذج 13B على CPU يولّد 3–6 tok/ثانية. التبديل إلى 7B يضاعف السرعة؛ والتبديل إلى 3B يربّعها.',
            '**زِد طبقات GPU في Ollama**: اضبط `OLLAMA_GPU_LAYERS=999` لنقل كل الطبقات إلى GPU (سيقتصر Ollama على الحد الأقصى الذي يتسع في VRAM).',
            '**استخدم تكميمًا أسرع**: Q4_K_M هو أسرع تكميم يحافظ على جودة مقبولة. Q8_0 ذو جودة أعلى لكنه أبطأ بـ ~30%.',
          ],
        },
        error3Code: {
          title: 'ضبط طبقات GPU في Ollama',
          codeBlock: '# Establecer la variable de entorno antes de iniciar Ollama\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# O en un Modelfile\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
          codeLanguage: 'bash',
        },
        error4: {
          id: 'error-4-connection-refused',
          title: 'الخطأ 4: "رفض الاتصال" عند استدعاء API',
          content: '**رفض الاتصال يعني أن Ollama غير قيد التشغيل -- لا تستجيب API على `localhost:11434` إلا عندما تكون الخدمة نشطة.** ابدأها قبل إجراء استدعاءات API.',
          codeBlock: '# Iniciar Ollama manualmente\nollama serve\n\n# En Linux — reiniciar el servicio systemd\nsystemctl restart ollama\n\n# Verificar que está en ejecución\ncurl http://localhost:11434\n# Esperado: "Ollama is running"',
          codeLanguage: 'bash',
        },
        error5: {
          id: 'error-5-model-not-found',
          title: 'الخطأ 5: خطأ "النموذج غير موجود"',
          content: [
            '**"النموذج غير موجود" يعني أن اسم النموذج في أمرك لا يطابق أي نموذج تم تنزيله.** أسماء النماذج في Ollama حساسة لحالة الأحرف وتتضمن وسوم الإصدار.',
          ],
          codeBlock: '# Listar todos los modelos descargados\nollama list\n\n# Descargar un modelo si falta\nollama pull llama3.2\n\n# Verifica el nombre exacto del modelo — las etiquetas importan\n# "llama3.2" y "llama3.2:3b" son entradas diferentes',
          codeLanguage: 'bash',
        },
        error6: {
          id: 'error-6-corrupted-model-file',
          title: 'الخطأ 6: ملف نموذج تالف',
          content: '**ملفات النماذج التالفة تنتج عن عمليات تنزيل مقطوعة -- احذف وأعد التنزيل للإصلاح.** لا يكتشف Ollama دائمًا عمليات التنزيل الجزئية تلقائيًا.',
          codeBlock: '# Eliminar el modelo corrupto\nollama rm llama3.2\n\n# Volver a descargarlo\nollama pull llama3.2\n\n# Para LM Studio: eliminar archivos de modelo manualmente\n# Ubicación predeterminada: ~/.cache/lm-studio/models/',
          codeLanguage: 'bash',
        },
        error6lmstudio: {
          id: 'error-6b-lm-studio-model-resolution',
          title: 'الخطأ 6b: "فشل في حل النموذج" في LM Studio',
          content: '**"Failed to resolve model lmstudio-community/..." يعني أن LM Studio لا يستطيع العثور على النموذج في سجله.** يحدث هذا عادةً عندما يُنزَّل نموذج من `lmstudio-community` على Hugging Face لكن مرجع السجل تغيّر. يستخدم LM Studio إدخال سجل مخزّنًا مؤقتًا لم يعد يطابق ملفات النماذج المتاحة.',
          items: [
            '**افتح LM Studio ← علامة التبويب My Models ← انقر قائمة النقاط الثلاث للنموذج الفاشل ← اختر "Delete model"** (يحتفظ بالملف، ويحذف السجل)',
            '**ابحث عن النموذج نفسه في مستكشف النماذج وأعد تنزيله** -- سيعيد LM Studio تسجيله',
            '**بديل: أغلق LM Studio، وانتقل إلى `~/.cache/lm-studio/models/`، واحذف مجلد النموذج المحدد وأعد تنزيله**',
          ],
          codeBlock: '# Limpiar manualmente la caché de modelos de LM Studio (macOS/Linux)\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
          codeLanguage: 'bash',
        },
        error7: {
          id: 'error-7-cuda-errors',
          title: 'الخطأ 7: أخطاء تهيئة CUDA / ROCm',
          content: '**أخطاء CUDA وROCm تشير إلى عدم توافق إصدار البرنامج المشغّل/المكتبة -- حدّث برنامجك المشغّل إلى الإصدار الأدنى المطلوب.**',
          items: [
            '**"إصدار برنامج تشغيل CUDA غير كافٍ"**: حدّث البرنامج المشغّل NVIDIA. الحد الأدنى لـ llama.cpp هو CUDA 11.3 / البرنامج المشغّل 450.80.',
            '**"لا توجد صورة kernel متاحة للتنفيذ"**: بنية GPU لديك غير مدعومة. سلسلة GTX 900 (Maxwell) وما قبلها غير مدعومة في إصدارات CUDA الحديثة.',
            '**AMD ROCm "HSA_STATUS_ERROR_INVALID_ISA"**: اضبط `HSA_OVERRIDE_GFX_VERSION=10.3.0` (لـ RX 6000) أو `11.0.0` (لـ RX 7000) قبل بدء Ollama.',
            '**تحقق من إصدار CUDA**: شغّل `nvcc --version` أو `nvidia-smi | grep CUDA`.',
          ],
        },
        error8: {
          id: 'error-8-garbled-output',
          title: 'الخطأ 8: مخرجات تالفة أو متكررة أو بلا معنى',
          content: [
            '**المخرجات التالفة تعني دائمًا تقريبًا أنك تستخدم نموذجًا أساسيًا بدلًا من نسخة instruct/chat.** تولّد النماذج الأساسية إكمالات نص خام، وليس إجابات عن الأسئلة.',
            'النماذج الأساسية (مثل `llama3.1:8b`) ليست مضبوطة للمحادثة، وعند طرح سؤال عليها، تولّد إكمالات خام تبدو غير متماسكة. استخدم دائمًا نسخة instruct: `llama3.1:8b-instruct`. راجع [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio) لطريقة قائمة على الواجهة الرسومية لتبديل نسخ النماذج.',
            'في Ollama، يشير الوسم الافتراضي لمعظم النماذج إلى نسخة instruct بالفعل. إذا نزّلت يدويًا من Hugging Face، فتأكد من أن اسم الملف يتضمن "Instruct" أو "chat".',
          ],
        },
        error9: {
          id: 'error-9-port-already-in-use',
          title: 'الخطأ 9: "العنوان قيد الاستخدام بالفعل" -- تعارض المنفذ',
          content: '**"العنوان قيد الاستخدام بالفعل" يعني أن عملية أخرى تشغل المنفذ 11434 (Ollama) أو 1234 (LM Studio).** اعثر على العملية المتعارضة وأنهِها.',
          codeBlock: '# Encontrar qué usa el puerto 11434 (Ollama)\nlsof -i :11434\n\n# Terminar por PID\nkill -9 <PID>\n\n# O cambiar el puerto de Ollama\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
          codeLanguage: 'bash',
        },
        error10: {
          id: 'error-10-model-stops-mid-response',
          title: 'الخطأ 10: يتوقف النموذج في منتصف الاستجابة',
          content: '**التوقف في منتصف الاستجابة سببه بلوغ حدود طول السياق أو ضبط `num_predict` منخفضًا جدًا.** قيمة `num_predict` الافتراضية في كثير من الإعدادات هي 128 token -- تكفي لجملة أو جملتين فقط.',
          items: [
            '**زِد num_predict**: يحدد هذا المعامل أقصى عدد token للتوليد. القيمة الافتراضية غالبًا 128. زِدها: في Ollama، أضف `PARAMETER num_predict 2048` إلى الـ Modelfile.',
            '**تحقق من نافذة السياق**: إذا كانت محادثتك طويلة جدًا، فقد يكون النموذج قد بلغ حد سياقه. ابدأ جلسة جديدة أو استخدم نموذجًا بنافذة سياق أكبر (يدعم Llama 3.2 3B سياق 128K).',
            '**تحقق من token التوقف**: تتضمن بعض ملفات Modelfile تسلسلات توقف تنهي التوليد مبكرًا. راجع موجّه النظام والقالب بحثًا عن أنماط توقف غير متوقعة.',
          ],
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[شرح تكميم LLM](/ar/local-llms/llm-quantization-explained) -- لماذا Q4_K_M هو الافتراضي وكيف يؤثر التكميم في RAM',
            '[دليل عتاد LLM المحلي 2026](/ar/local-llms/local-llm-hardware-guide-2026) -- متطلبات العتاد لتشغيل نماذج 7B–70B',
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- دليل التثبيت والإعداد',
            '[Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) -- مقارنة أشهر أداتين لـ LLM المحلي',
            '[كيفية تشغيل نماذج LLM المحلية على حاسوب محمول](/ar/local-llms/local-llm-on-laptop) -- تحسين حراري وبطارية خاص بالحواسيب المحمولة',
            '[أفضل نماذج LLM المحلية للمبتدئين](/ar/local-llms/best-beginner-local-llm-models) -- توصيات نماذج لذاكرة 8 GB من RAM',
            '[أفضل نماذج LLM المحلية للبرمجة 2026](/ar/local-llms/best-local-llms-for-coding) -- مقارنة Qwen3-Coder مقابل DeepSeek',
          ],
        },
        moreTroubleshooting: {
          title: 'أين تجد مزيدًا من المساعدة',
          content: 'للمشكلات الخاصة بعتاد الحواسيب المحمولة (الخنق الحراري، واستهلاك البطارية)، راجع [كيفية تشغيل نماذج LLM المحلية على حاسوب محمول](/ar/local-llms/local-llm-on-laptop). لأسئلة إعداد الأمان والخصوصية، راجع [قائمة تحقق أمان وخصوصية LLM المحلي](/ar/local-llms/local-llm-security-privacy-checklist). صفحة مشكلات Ollama على GitHub (github.com/ollama/ollama/issues) ومنتدى r/LocalLLaMA الفرعي هما أكثر موارد المجتمع نشاطًا للأخطاء الخاصة بالنماذج.',
        },
        commonMistakes: {
          title: 'أخطاء شائعة في استكشاف أخطاء LLM المحلي وإصلاحها',
          items: [
            '**الخلط بين أخطاء OOM وأعطال العتاد** -- الخطأ يعني أن RAM أصغر من أن تستوعب النموذج، وليس أن العتاد معطّل. الحل: استخدم تكميم Q4_K_M أو نموذجًا أصغر.',
            '**عدم التحقق من حمل النظام** -- تتدهور سرعة الاستدلال بشكل كبير عندما تستهلك تطبيقات أخرى CPU/GPU. أغلق المتصفح، ومشغّل الفيديو، والعمليات في الخلفية قبل قياس الأداء.',
            '**تجاهل عدم توافق إصدار البرنامج المشغّل** -- يتطلب NVIDIA CUDA إصدارات برنامج مشغّل محددة لكل إصدار CUDA. تحقق من مخرجات `nvidia-smi`؛ يجب أن يكون إصدار البرنامج المشغّل ≥450.80 لـ CUDA 11.x.',
            '**استخدام اسم نموذج خاطئ في Ollama** -- `llama3.2` و`llama3.2:3b` وسمان مختلفان في Ollama. شغّل `ollama list` لرؤية الأسماء الدقيقة للنماذج المنزّلة.',
            '**عدم إعادة تشغيل Ollama بعد تحديث البرنامج المشغّل** -- يكتشف Ollama GPU عند الإقلاع. بعد تحديث برامج تشغيل NVIDIA أو ROCm، أعد تشغيل Ollama بالكامل (`ollama serve`) لإعادة اكتشاف GPU.',
          ],
          image: '/images/troubleshooting-debug-steps-es.svg',
          imageCaption: 'عملية تصحيح أخطاء LLM المحلي في 5 خطوات: تحقق من RAM ← تحقق من GPU ← تحقق من الخادم ← تحقق من النموذج ← تحقق من جودة المخرجات. توقّف عند أول خطوة فاشلة.',
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ -- المتطلبات الرسمية لإصدار برنامج تشغيل CUDA لكل إصدار.',
            'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md -- التوثيق الرسمي لـ Ollama للأخطاء الشائعة.',
            'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ -- التثبيت الرسمي لـ AMD ROCm ودعم GPU لـ Linux.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'إصلاح أخطاء LLM المحلي في 2026: 10 مشكلات شائعة في Ollama وLM Studio وvLLM',
        'description': 'صحّح التعليق بسبب نقص الذاكرة، وعدم اكتشاف GPU، ورفض الاتصال، والمخرجات التالفة في Ollama وLM Studio. أوامر دقيقة: OLLAMA_GPU_LAYERS، وollama rm، وnvidia-smi.',
        'url': 'https://www.promptquorum.com/ar/local-llms/troubleshooting-local-llm-setup',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-16',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'inLanguage': 'ar',
        'about': [
          { '@type': 'Thing', 'name': 'استكشاف أخطاء Ollama وإصلاحها' },
          { '@type': 'Thing', 'name': 'أخطاء LM Studio' },
          { '@type': 'Thing', 'name': 'LLM محلي بنفاد الذاكرة' },
          { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
          { '@type': 'Thing', 'name': 'عدم اكتشاف GPU لـ LLM محلي' },
        ],
        'proficiencyLevel': 'Beginner',
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'تصحيح أخطاء إعداد LLM المحلي',
        'step': [
          { '@type': 'HowToStep', 'name': 'تصحيح أخطاء نفاد الذاكرة', 'text': 'بدّل إلى تكميم أصغر (Q4_K_M) أو نموذج أصغر. تحقق من RAM بـ free -h.' },
          { '@type': 'HowToStep', 'name': 'تفعيل اكتشاف GPU', 'text': 'حدّث برامج التشغيل (NVIDIA 525+)، اضبط OLLAMA_GPU_LAYERS=999، تحقق بـ nvidia-smi.' },
          { '@type': 'HowToStep', 'name': 'تسريع الاستدلال البطيء', 'text': 'تأكد من نشاط GPU بـ ollama ps، قلّل حجم النموذج أو استخدم تكميم Q4_K_M.' },
          { '@type': 'HowToStep', 'name': 'تصحيح رفض الاتصال', 'text': 'ابدأ Ollama بـ ollama serve أو أعد تشغيل خدمة systemd. تحقق بـ curl localhost:11434.' },
          { '@type': 'HowToStep', 'name': 'حل النموذج غير موجود', 'text': 'اسرد النماذج بـ ollama list، نزّل المفقودة بـ ollama pull، تحقق من الأسماء والوسوم الدقيقة.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ar',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'ما الذي يسبب أخطاء OOM في نماذج LLM المحلية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'تحدث أخطاء OOM (نفاد الذاكرة) عندما يتجاوز حجم النموذج RAM أو VRAM المتاحة. الحل: بدّل إلى نموذج أصغر (`ollama run llama3.2:3b` يتطلب ~2.5 GB) أو استخدم مستوى تكميم أقل. شغّل `free -h` (Linux/macOS) للتحقق من RAM المتاحة قبل تنزيل نماذج أكبر من 7B.' }
          },
          {
            '@type': 'Question',
            'name': 'لماذا لا يكتشف Ollama وحدة GPU لدي؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA: ثبّت البرنامج المشغّل 525+ وCUDA Toolkit 11.3+، ثم أعد تشغيل Ollama. AMD على Linux: ثبّت ROCm 5.7+. تحقق من الاكتشاف بـ `nvidia-smi` (NVIDIA) أو `rocm-smi` (AMD). Apple Silicon: يستخدم Ollama Metal افتراضيًا -- لا حاجة لتكوين. اضبط OLLAMA_GPU_LAYERS=999 لفرض التفريغ الكامل على GPU.' }
          },
          {
            '@type': 'Question',
            'name': 'لماذا يُرفض المنفذ 11434 عند تشغيل Ollama؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يُرفض المنفذ 11434 عندما لا يكون خادم Ollama قيد التشغيل. ابدأه بـ `ollama serve`، ثم تحقق بـ `curl http://localhost:11434` -- الاستجابة المتوقعة هي "Ollama is running". على Linux، أعد تشغيل خدمة systemd: `systemctl restart ollama`.' }
          },
          {
            '@type': 'Question',
            'name': 'لماذا يعمل LLM المحلي لدي على CPU بدلًا من GPU؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'يلجأ Ollama إلى CPU إذا لم يكتشف GPU أو إذا كانت VRAM غير كافية. اضبط متغير البيئة `OLLAMA_GPU_LAYERS=999` قبل بدء Ollama لفرض أقصى تفريغ على GPU. تحقق أولًا من رؤية GPU بـ `nvidia-smi`. إذا كانت VRAM غير كافية للنموذج الكامل، يقسّم Ollama الطبقات تلقائيًا بين GPU وCPU.' }
          },
          {
            '@type': 'Question',
            'name': 'ما هي أكثر الأخطاء شيوعًا في نشر LLM المحلي؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'أكثر 10 أخطاء شيوعًا لـ LLM المحلي هي: (1) OOM/نفاد الذاكرة، (2) عدم اكتشاف GPU، (3) رفض المنفذ 11434، (4) CPU بطيئة كبديل، (5) النموذج غير موجود، (6) تنزيل جزئي تالف، (7) توقف التوليد مبكرًا، (8) عدم توافق إصدار CUDA، (9) تجاوز طول السياق، (10) وسم نموذج خاطئ. لكلٍّ منها أمر تصحيح محدد في Ollama وLM Studio.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أصلح تنزيل نموذج Ollama تالفًا؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'احذف النموذج المخزّن مؤقتًا وأعد تنزيله: `ollama rm <اسم-النموذج>` ثم `ollama pull <اسم-النموذج>`. تحدث عمليات التنزيل التالفة عند مقاطعة التنزيل. لا يكتشف Ollama دائمًا عمليات التنزيل الجزئية تلقائيًا.' }
          },
          {
            '@type': 'Question',
            'name': 'كيف أتحقق من أن Ollama يستخدم وحدة GPU لدي؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'شغّل `ollama ps` أثناء تحميل نموذج -- تُظهر المخرجات أي طبقات على GPU مقابل CPU. بدلًا من ذلك، راقب استخدام GPU بـ `nvidia-smi -l 1` (يُحدّث كل ثانية). إذا بقي استخدام GPU عند 0%، فإن Ollama يعمل على CPU فقط -- تحقق من تثبيت البرنامج المشغّل والتوافق مع CUDA.' }
          },
          {
            '@type': 'Question',
            'name': 'لماذا يتوقف توليد LLM قبل الأوان؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'عادةً ما يكون التوقف المبكر بسبب token توقف في الـ Modelfile. تحقق من موجّه النظام والقالب بحثًا عن تسلسلات توقف غير متوقعة. تحقق أيضًا من معامل `num_predict` -- إذا كان مضبوطًا منخفضًا جدًا، فسيقتطع Ollama المخرجات عند ذلك العدد من token. القيمة الافتراضية -1 (غير محدود).' }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'أساسيات استكشاف أخطاء LLM المحلي وإصلاحها',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'أخطاء OOM', 'description': 'صحّح التعليق بسبب نقص الذاكرة بالتبديل إلى تكميم Q4_K_M أو نماذج أصغر. تحقق من RAM بـ free -h قبل تنزيل النماذج.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'اكتشاف GPU', 'description': 'فعّل GPU بتثبيت برامج تشغيل NVIDIA 525+، أو CUDA 11.3+، أو ROCm 5.7+ لـ AMD. اضبط OLLAMA_GPU_LAYERS=999 للتفريغ الكامل على GPU.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'استدلال بطيء', 'description': 'تأكد من نشاط GPU بـ ollama ps. إذا كان يستخدم CPU فقط، قلّل حجم النموذج أو استخدم تكميم Q4_K_M.' },
        ],
      },
      gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
      gammaDescription: 'يغطي العرض التقديمي التالي: أكثر 10 أخطاء شيوعًا في إعداد LLM المحلي (نفاد الذاكرة، وعدم اكتشاف GPU، والاستدلال البطيء، ورفض الاتصال، والمخرجات التالفة)، ومتطلبات RAM لنماذج 3B–14B بتكميم Q4_K_M وQ8_0، وعملية تصحيح في 5 خطوات، وأوامر Ollama لكل تصحيح. نزّل ملف PDF كبطاقة مرجعية لاستكشاف أخطاء LLM المحلي وإصلاحها.',
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: 'Corrigir erros de LLM local em 2026: 10 problemas frequentes no Ollama, LM Studio e vLLM',
      seoTitle: 'Erros de LLM local: OOM, GPU não detectada e porta 11434',
      intro: 'Os erros mais comuns em LLMs locais são travamentos por falta de memória, GPU não detectada, inferência em CPU extremamente lenta, conexão recusada pela API e saída corrompida. A partir de abril de 2026, existem soluções para os 10 erros — a maioria requer apenas um ou dois comandos de terminal. Este guia cobre Ollama (porta 11434), LM Studio (porta 1234) e vLLM com comandos exatos para cada erro.',
      metaDescription: '10 erros comuns de LLM local resolvidos: travamentos OOM, GPU não detectada, porta 11434 recusada e CPU lenta. Comandos para Ollama e LM Studio. 2026.',
      leadAnswerBlock: '**Os erros mais comuns em LLMs locais são travamentos por falta de memória, GPU não detectada, inferência em CPU extremamente lenta, conexão recusada pela API e saída corrompida.**',
      publishDate: '2026-04-04',
      audience: 'Iniciantes executando seu primeiro LLM local em hardware de consumo',
      readTime: '9 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'solução de problemas de LLM local',
      toc: [
        { label: 'Principais conclusões', anchor: '#key-takeaways' },
        { label: 'Travamentos OOM (falta de memória)', anchor: '#oom-crashes' },
        { label: 'GPU não detectada', anchor: '#gpu-not-detected' },
        { label: 'Inferência extremamente lenta', anchor: '#slow-inference' },
        { label: 'Conexão recusada na API', anchor: '#connection-refused' },
        { label: 'Saída corrompida ou sem sentido', anchor: '#corrupted-output' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '**OOM (falta de memória)**: use quantização Q4_K_M ou um modelo menor. Verifique a RAM com `free -h` antes de baixar modelos.',
            '**GPU não detectada**: instale drivers NVIDIA 525+, CUDA 11.3+, ou ROCm 5.7+ para AMD. Defina `OLLAMA_GPU_LAYERS=999`.',
            '**Inferência lenta**: confirme atividade da GPU com `ollama ps`. Se apenas CPU, reduza o tamanho do modelo.',
            '**Porta 11434 recusada**: o Ollama não está em execução. Execute `ollama serve` em um terminal separado.',
            '**Saída corrompida**: o modelo errado foi baixado ou o arquivo GGUF está corrompido. Exclua e rebaixe.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Por que meu LLM local está travando com erro OOM?', a: 'O modelo não cabe na VRAM disponível. Solução: use quantização Q4_K_M (reduce VRAM em ~55% vs FP16) ou mude para um modelo menor. Verifique a VRAM disponível com `nvidia-smi` antes de baixar.' },
            { q: 'Por que o Ollama não detecta minha GPU NVIDIA?', a: 'Drivers desatualizados são a causa mais comum. Instale drivers NVIDIA 525+ e CUDA 11.3+. No Linux, execute `nvidia-smi` para verificar. Se a GPU aparecer no nvidia-smi mas não no Ollama, tente definir `OLLAMA_GPU_LAYERS=999` como variável de ambiente.' },
            { q: 'Como sei se meu LLM está rodando na GPU ou na CPU?', a: 'Execute `ollama ps` enquanto um modelo está carregado — a saída mostra quais camadas estão na GPU vs CPU. Alternativamente, monitore a utilização da GPU com `nvidia-smi -l 1`. Se a utilização da GPU ficar em 0%, o Ollama está rodando apenas em CPU.' },
            { q: 'Por que a geração do LLM para antes do tempo?', a: 'Paradas antecipadas geralmente são causadas por tokens de parada no Modelfile. Verifique o prompt do sistema e o template para sequências de parada inesperadas. Também verifique o parâmetro `num_predict` — se configurado muito baixo, o Ollama truncará a saída nesse número de tokens.' },
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Corrigir erros de LLM local em 2026: 10 problemas frequentes no Ollama, LM Studio e vLLM',
        description: '10 erros comuns de LLM local resolvidos: travamentos OOM, GPU não detectada, porta 11434 recusada e CPU lenta.',
        url: 'https://www.promptquorum.com/pt/local-llms/troubleshooting-local-llm-setup',
        inLanguage: 'pt-BR',
        datePublished: '2026-04-04',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
      gammaDescription: 'A apresentação abaixo cobre: os 10 erros mais comuns na configuração de LLM local (sem memória, GPU não detectada, inferência lenta, conexão recusada, saída corrompida), os requisitos de RAM para modelos 3B–14B com quantização Q4_K_M e Q8_0, um processo de depuração em 5 etapas e os comandos do Ollama para cada correção. Baixe o PDF como cartão de referência para solução de problemas de LLM local.',
    },
    de: {
  theme: 'Getting Started',
  title: 'Lokale LLM-Fehler 2026 beheben: 10 häufige Probleme in Ollama, LM Studio und vLLM',
  seoTitle: 'Lokale LLM-Fehler beheben: OOM, GPU, Port 11434 2026',
  intro: 'Die häufigsten Fehler bei lokalen LLMs sind Out-of-Memory-Abstürze, GPU wird nicht erkannt, extrem langsame CPU-Inferenz, Connection Refused vom API und fehlerhafte Ausgabe. Stand April 2026 gibt es Lösungen für alle 10 Fehler — die meisten erfordern nur ein bis zwei Terminal-Befehle. Dieser Leitfaden behandelt Ollama (Port 11434), LM Studio (Port 1234) und vLLM mit exakten Befehlen für jeden Fehler.',
  metaDescription: '10 häufige lokale LLM-Fehler behoben: OOM, GPU nicht erkannt, Port 11434 abgelehnt, langsamer CPU-Fallback. Fix-Befehle für Ollama + LM Studio. April 2026.',
  twitterDescription: '10 LLM-Fehler behoben: OOM, GPU nicht erkannt, Port 11434 abgelehnt, CPU-Fallback. Ollama + LM Studio. April 2026.',
  publishDate: '2026-04-04',
  dateModified: '2026-04-16',
  leadAnswerBlock: '**Die häufigsten Fehler bei lokalen LLMs sind Out-of-Memory-Abstürze, GPU wird nicht erkannt, extrem langsame CPU-Inferenz, Connection Refused vom API und fehlerhafte Ausgabe.**',
  audience: 'Anfänger, die ihr erstes lokales LLM auf Consumer-Hardware ausführen',
  readTime: '9 Min. Lesezeit',
  educationalLevel: 'Beginner',
  primaryTerm: 'Fehlersuche bei lokalem LLM',
  toc: [
    { label: 'Zusammenfassung', anchor: '#key-takeaways' },
    { label: 'Fehler 1: Speicher voll', anchor: '#error-1-out-of-memory' },
    { label: 'Fehler 2: GPU nicht erkannt', anchor: '#error-2-gpu-not-detected' },
    { label: 'Fehler 3: Extrem langsame Inferenz', anchor: '#error-3-very-slow-inference' },
    { label: 'Fehler 4: Verbindung verweigert', anchor: '#error-4-connection-refused' },
    { label: 'Fehler 5: Modell nicht gefunden', anchor: '#error-5-model-not-found' },
    { label: 'Fehler 6: Beschädigtes Modelldatei', anchor: '#error-6-corrupted-model-file' },
    { label: 'Fehler 7: CUDA / ROCm-Fehler', anchor: '#error-7-cuda-errors' },
    { label: 'Fehler 8: Fehlerhafte oder repetitive Ausgabe', anchor: '#error-8-garbled-output' },
    { label: 'Fehler 9: Port wird bereits verwendet', anchor: '#error-9-port-already-in-use' },
    { label: 'Fehler 10: Modell stoppt mitten im Response', anchor: '#error-10-model-stops-mid-response' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': 'Lokale LLM-Fehler 2026 beheben: 10 häufige Probleme in Ollama, LM Studio und vLLM',
    'description': 'Beheben Sie Out-of-Memory-Abstürze, GPU nicht erkannt, Connection Refused und fehlerhafte Ausgabe in Ollama und LM Studio. Exakte Befehle: OLLAMA_GPU_LAYERS, ollama rm, nvidia-smi.',
    'url': 'https://www.promptquorum.com/de/local-llms/troubleshooting-local-llm-setup',
    'datePublished': '2026-04-04',
    'dateModified': '2026-04-16',
    'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'audience': { '@type': 'Audience', 'audienceType': 'Entwickler und Benutzer, die lokale LLMs zum ersten Mal einrichten' },
    'about': [
      { '@type': 'Thing', 'name': 'Ollama-Fehlersuche' },
      { '@type': 'Thing', 'name': 'LM Studio-Fehler' },
      { '@type': 'Thing', 'name': 'lokales LLM Speichermangel' },
      { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
      { '@type': 'Thing', 'name': 'GPU nicht erkannt lokales LLM' },
    ],
    'proficiencyLevel': 'Beginner',
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
    },
    'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Fehler bei der Einrichtung lokaler LLMs debuggen',
    'step': [
      { '@type': 'HowToStep', 'name': 'Out-of-Memory-Fehler beheben', 'text': 'Wechsel zu kleinerer Quantisierung (Q4_K_M) oder kleinerem Modell. Speicher mit free -h überprüfen.' },
      { '@type': 'HowToStep', 'name': 'GPU-Erkennung aktivieren', 'text': 'Treiber aktualisieren (NVIDIA 525+), OLLAMA_GPU_LAYERS=999 setzen, nvidia-smi zur Überprüfung ausführen.' },
      { '@type': 'HowToStep', 'name': 'Langsame Inferenz beschleunigen', 'text': 'GPU-Aktivität mit ollama ps bestätigen, Modellgröße reduzieren oder Q4_K_M-Quantisierung verwenden.' },
      { '@type': 'HowToStep', 'name': 'Connection Refused beheben', 'text': 'Ollama mit ollama serve starten oder systemd-Service neu starten. Mit curl localhost:11434 überprüfen.' },
      { '@type': 'HowToStep', 'name': 'Modell nicht gefunden auflösen', 'text': 'Modelle mit ollama list auflisten, fehlende mit ollama pull laden, exakte Modellname/Tags überprüfen.' },
    ]
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Was verursacht OOM-Fehler bei lokalen LLMs?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'OOM-Fehler (Out of Memory) treten auf, wenn die Modellgröße den verfügbaren RAM oder VRAM übersteigt. Behebung: wechseln Sie zu einem kleineren Modell (`ollama run llama3.2:3b` benötigt ~2,5 GB) oder verwenden Sie eine niedrigere Quantisierungsstufe. Führen Sie `free -h` (Linux/macOS) aus, um den verfügbaren RAM zu überprüfen, bevor Sie Modelle über 7B herunterladen.' }
      },
      {
        '@type': 'Question',
        'name': 'Warum wird meine GPU von Ollama nicht erkannt?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA: Treiber 525+ und CUDA-Toolkit 11.3+ installieren, dann Ollama neu starten. AMD unter Linux: ROCm 5.7+ installieren. Erkennung überprüfen mit `nvidia-smi` (NVIDIA) oder `rocm-smi` (AMD). Apple Silicon: Ollama nutzt standardmäßig Metal — keine Konfiguration erforderlich. Setzen Sie OLLAMA_GPU_LAYERS=999, um maximale GPU-Auslagerung zu erzwingen.' }
      },
      {
        '@type': 'Question',
        'name': 'Warum wird Port 11434 abgelehnt, wenn ich Ollama ausführe?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Port 11434 wird abgelehnt, wenn der Ollama-Server nicht läuft. Starten Sie ihn mit `ollama serve`, überprüfen Sie dann mit `curl http://localhost:11434` — die erwartete Antwort ist "Ollama is running". Unter Linux: systemd-Service neu starten mit `systemctl restart ollama`.' }
      },
      {
        '@type': 'Question',
        'name': 'Warum läuft mein lokales LLM auf CPU statt GPU?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama fällt auf CPU zurück, wenn GPU nicht erkannt wird oder VRAM unzureichend ist. Setzen Sie die Umgebungsvariable `OLLAMA_GPU_LAYERS=999` vor dem Start von Ollama, um maximale GPU-Auslagerung zu erzwingen. Überprüfen Sie zuerst die GPU-Sichtbarkeit mit `nvidia-smi`. Wenn VRAM für das gesamte Modell unzureichend ist, teilt Ollama automatisch Layer zwischen GPU und CPU auf.' }
      },
      {
        '@type': 'Question',
        'name': 'Was sind die häufigsten Fehler bei lokaler LLM-Bereitstellung?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Die 10 häufigsten lokalen LLM-Fehler sind: (1) OOM/Speicher voll, (2) GPU nicht erkannt, (3) Port 11434 abgelehnt, (4) langsames CPU-Fallback, (5) Modell nicht gefunden, (6) partieller Download beschädigt, (7) Generierung stoppt vorzeitig, (8) CUDA-Versionsfehler, (9) Kontextlänge überschritten, (10) falsches Modell-Tag. Jeder Fehler hat einen spezifischen Fix-Befehl in Ollama und LM Studio.' }
      },
      {
        '@type': 'Question',
        'name': 'Wie behebe ich einen beschädigten Ollama-Modell-Download?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Löschen Sie das gecachte Modell und laden Sie es neu: `ollama rm <modellname>` dann `ollama pull <modellname>`. Beschädigte Downloads entstehen durch unterbrochene Zugriffe. Ollama erkennt Teile-Downloads nicht immer automatisch.' }
      },
      {
        '@type': 'Question',
        'name': 'Wie prüfe ich, ob Ollama meine GPU verwendet?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Führen Sie `ollama ps` aus, während ein Modell geladen ist — die Ausgabe zeigt, welche Layer auf GPU gegen CPU sind. Alternativ überwachen Sie die GPU-Auslastung mit `nvidia-smi -l 1` (aktualisiert jede Sekunde). Wenn die GPU-Auslastung bei 0% bleibt, läuft Ollama nur auf CPU — überprüfen Sie Treiberinstallation und CUDA-Kompatibilität.' }
      },
      {
        '@type': 'Question',
        'name': 'Warum stoppt meine LLM-Generierung vorzeitig?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Vorzeitige Stopps werden normalerweise durch Stop-Tokens in der Modelfile verursacht. Überprüfen Sie die Systemaufforderung und Vorlage auf unerwartete Stopp-Sequenzen. Überprüfen Sie auch den `num_predict`-Parameter — wenn zu niedrig eingestellt, wird die Ausgabe bei dieser Token-Zahl abgeschnitten. Standard ist -1 (unbegrenzt).' }
      }
    ]
  },
  sections: {
    tldr: {
      id: 'key-takeaways',
      isTldr: true,
      items: [
        'Speicher voll: Wechsel zu kleinerer Quantisierung (Q4_K_M → Q3_K_S) oder kleinerem Modell.',
        'GPU nicht erkannt auf NVIDIA: Treiber auf 525+ unter Linux, 452+ unter Windows aktualisieren. `nvidia-smi` ausführen zur Bestätigung.',
        'Extrem langsame Inferenz: Sie laufen nur auf CPU. GPU-Offloading in Ollama mit `OLLAMA_GPU_LAYERS`-Umgebungsvariable aktivieren.',
        'Verbindung verweigert: Ollama läuft nicht. Mit `ollama serve` starten oder den Service neu starten.',
        'Fehlerhafte Ausgabe: falsche Prompt-Vorlage. Verwenden Sie die Instruct-Variante des Modells, nicht die Basis-Variante.',
      ],
      image: '/images/troubleshooting-error-symptoms-quick-ref-de.svg',
      imageCaption: '10 häufigste lokale LLM-Fehler mit Symptomen und Lösungen — Schnellreferenz für Ollama, LM Studio und vLLM-Setups (April 2026).',
    },
    error1: {
      id: 'error-1-out-of-memory',
      title: 'Fehler 1: "Nicht genug Speicher" / Out-of-Memory-Absturz',
      content: '**Out-of-Memory-Fehler bedeuten, dass das Modell mehr RAM benötigt als verfügbar ist — kein Hardware-Fehler.** Dies ist der häufigste Fehler für Erstbenutzer. Siehe [LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) für Hintergrund, wie Quantisierung RAM-Anforderungen reduziert.',
      items: [
        '**Verfügbaren Speicher überprüfen**: auf macOS/Linux `free -h` ausführen, auf Windows Task Manager → Performance → Memory öffnen.',
        '**Zu kleinerer Quantisierung wechseln**: Ersetzen Sie `Q8_0` oder `Q5_K_M` mit `Q4_K_M`. Für Ollama: `ollama run llama3.2-instruct-q4_K_M`.',
        '**Hintergrundanwendungen schließen** vor dem Modellladen — Browser und andere Apps verbrauchen RAM, das dem Modell fehlt.',
        '**Zu kleinerem Modell wechseln**: wenn 8B bei 8 GB RAM fehlschlägt, versuchen Sie `llama3.2:3b` (benötigt nur ~2,5 GB).',
      ],
      image: '/images/troubleshooting-ram-by-model-size-de.svg',
      imageCaption: 'Lokale LLM-RAM-Anforderungen nach Modellgröße: llama3.2 1B–3B passt in 8 GB, 7B–8B-Modelle brauchen 16 GB, 70B-Modelle benötigen 64 GB bei Q4_K_M-Quantisierung.',
    },
    error1Code: {
      title: 'Verfügbaren RAM unter Linux / macOS überprüfen',
      codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# Lesbarer unter macOS\ntop -l 1 | grep "PhysMem"',
      codeLanguage: 'bash',
    },
    error2: {
      id: 'error-2-gpu-not-detected',
      title: 'Fehler 2: GPU wird nicht verwendet (läuft nur auf CPU)',
      content: [
        '**GPU wird nicht verwendet bedeutet, das LLM läuft 5–10× langsamer als erwartet — Treiberinstallation vor allem anderen überprüfen.** Überprüfen Sie, dass Ihre GPU für das System sichtbar ist:',
      ],
      codeBlock: '# NVIDIA — sollte GPU-Name und Treiberversion anzeigen\nnvidia-smi\n\n# AMD unter Linux\nrocm-smi\n\n# macOS — überprüfen Sie, ob Metal verfügbar ist\nsystem_profiler SPDisplaysDataType | grep "Metal"',
      codeLanguage: 'bash',
      image: '/images/troubleshooting-gpu-detection-de.svg',
      imageCaption: 'Nur-CPU gegen GPU-aktiv: Ollama auf CPU liefert 2–8 tok/s; GPU-Modus liefert 30–120 tok/s. Mit ollama ps oder nvidia-smi überprüfen.',
    },
    error2Fixes: {
      title: 'Wie aktivieren Sie GPU in Ollama?',
      items: [
        '**NVIDIA unter Linux**: installieren Sie NVIDIA-Treiber 525+ und CUDA Toolkit 11.3+. Ollama erkennt CUDA beim Neustart automatisch.',
        '**NVIDIA unter Windows**: stellen Sie sicher, dass Treiberversion 452.39 oder höher ist. Ollama installiert CUDA-Unterstützung automatisch über den Windows-Installer.',
        '**AMD unter Linux**: installieren Sie ROCm 5.7+. Setzen Sie `HSA_OVERRIDE_GFX_VERSION=11.0.0` für RX 6000-Serie-Karten, falls Erkennung fehlschlägt.',
        '**Apple Silicon**: Ollama verwendet standardmäßig Metal — keine Konfiguration erforderlich. Bestätigen Sie mit `ollama ps` nach dem Laden eines Modells; GPU-Layer erscheinen in der Ausgabe.',
      ],
    },
    error3: {
      id: 'error-3-very-slow-inference',
      title: 'Fehler 3: Inferenz ist extrem langsam (unter 5 Token/Sekunde)',
      content: '**Unter 5 Token/Sekunde bedeutet, dass das Modell nur auf CPU läuft oder das Modell zu groß für verfügbare VRAM ist.** Ein 7B-Modell auf GPU generiert 30–80 tok/s; dasselbe Modell auf CPU generiert 3–10 tok/s.',
      items: [
        '**Bestätigen Sie, ob GPU aktiv ist**: führen Sie `ollama ps` aus, während ein Modell geladen ist. Die Ausgabe zeigt, wie viele Layer auf GPU gegen CPU sind.',
        '**Modellgröße reduzieren**: ein 13B-Modell auf CPU generiert 3–6 tok/s. Wechsel zu 7B verdoppelt die Geschwindigkeit; Wechsel zu 3B vervierfacht sie.',
        '**GPU-Layer in Ollama erhöhen**: setzen Sie `OLLAMA_GPU_LAYERS=999`, um alle Layer auf GPU zu verschieben (Ollama wird auf das begrenzen, was in VRAM passt).',
        '**Schnellere Quantisierung verwenden**: Q4_K_M ist die schnellste Quantisierung, die akzeptable Qualität behält. Q8_0 ist höhere Qualität, aber ~30% langsamer.',
      ],
    },
    error3Code: {
      title: 'GPU-Layer in Ollama setzen',
      codeBlock: '# Umgebungsvariable vor dem Starten von Ollama setzen\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# Oder in einer Modelfile\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
      codeLanguage: 'bash',
    },
    error4: {
      id: 'error-4-connection-refused',
      title: 'Fehler 4: "Connection Refused" beim API-Aufruf',
      content: '**Connection Refused bedeutet, Ollama läuft nicht — der API bei `localhost:11434` antwortet nur wenn der Service aktiv ist.** Starten Sie es vor API-Aufrufen.',
      codeBlock: '# Ollama manuell starten\nollama serve\n\n# Unter Linux — systemd-Service neu starten\nsystemctl restart ollama\n\n# Überprüfen Sie, dass es läuft\ncurl http://localhost:11434\n# Erwartet: "Ollama is running"',
      codeLanguage: 'bash',
    },
    error5: {
      id: 'error-5-model-not-found',
      title: 'Fehler 5: "Model Not Found"-Fehler',
      content: [
        '**"Modell nicht gefunden" bedeutet, der Modellname in Ihrem Befehl passt zu keinem heruntergeladenen Modell.** Modellnamen in Ollama beachten Groß-/Kleinschreibung und umfassen Versions-Tags.',
      ],
      codeBlock: '# Alle heruntergeladenen Modelle auflisten\nollama list\n\n# Modell laden, wenn es fehlt\nollama pull llama3.2\n\n# Exakten Modellnamen überprüfen — Tags sind wichtig\n# "llama3.2" und "llama3.2:3b" sind unterschiedliche Einträge',
      codeLanguage: 'bash',
    },
    error6: {
      id: 'error-6-corrupted-model-file',
      title: 'Fehler 6: Beschädigte Modelldatei',
      content: '**Eine beschädigte Modelldatei entsteht durch unterbrochene Downloads — löschen und neu laden zum Beheben.** Ollama erkennt teilweise Downloads nicht immer selbst.',
      codeBlock: '# Beschädigtes Modell entfernen\nollama rm llama3.2\n\n# Erneut laden\nollama pull llama3.2\n\n# Für LM Studio: Modelldatei manuell löschen\n# Standardort: ~/.cache/lm-studio/models/',
      codeLanguage: 'bash',
    },
    error6lmstudio: {
      id: 'error-6b-lm-studio-model-resolution',
      title: 'Fehler 6b: "Failed to Resolve Model" in LM Studio',
      content: '**"Failed to resolve model lmstudio-community/..." bedeutet, LM Studio kann das Modell nicht in seiner Registry finden.** Dies tritt typischerweise auf, wenn das Modell von `lmstudio-community` auf Hugging Face heruntergeladen wurde, aber die Registry-Referenz sich geändert hat. LM Studio verwendet einen zwischengespeicherten Registry-Eintrag, der nicht mehr den verfügbaren Modelldateien entspricht.',
      items: [
        '**Öffnen Sie LM Studio → My Models-Reiter → klicken Sie auf das Drei-Punkte-Menü bei dem fehlerhaften Modell → wählen Sie "Delete model"** (behält die Datei, entfernt Registry)',
        '**Suchen Sie im Model-Browser nach demselben Modell und laden Sie es erneut herunter** — LM Studio wird es erneut registrieren',
        '**Alternative: Beenden Sie LM Studio, navigieren Sie zu `~/.cache/lm-studio/models/` und löschen Sie den spezifischen Modellordner, laden Sie dann erneut herunter**',
      ],
      codeBlock: '# LM Studio-Modell-Cache manuell löschen (macOS/Linux)\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
      codeLanguage: 'bash',
    },
    error7: {
      id: 'error-7-cuda-errors',
      title: 'Fehler 7: CUDA oder ROCm-Fehler',
      content: '**CUDA-Fehler zeigen, dass die GPU erkannt wird, aber die Treiber oder Bibliotheken inkompatibel sind.** Dies ist häufiger auf Linux als Windows/macOS.',
      items: [
        '**NVIDIA-Treiber-Version überprüfen**: `nvidia-smi` sollte Treiberversion ≥ 450.80 anzeigen. Outdated Treiber können CUDA nicht starten.',
        '**CUDA-Toolkit überprüfen**: Ollama benötigt CUDA 11.3+. Installieren Sie auf Linux: `ubuntu-drivers devices` und `sudo ubuntu-drivers autoinstall`.',
        '**ROCm für AMD konfigurieren**: Setzen Sie Umgebungsvariablen vor dem Start. Für RX 6000-Serie: `HSA_OVERRIDE_GFX_VERSION=10.3.0`, für RX 7000: `11.0.0`.',
      ],
    },
    error8: {
      id: 'error-8-garbled-output',
      title: 'Fehler 8: Fehlerhafte oder repetitive Ausgabe',
      content: '**Fehlerhafte oder wiederholte Ausgabe bedeutet fast immer, dass Sie die falsche Modell-Variante verwenden.** Base-Modelle ohne Instruct-Format erzeugen Müll; Instruct-Modelle sind für Gespräche trainiert.',
      items: [
        '**Verwenden Sie die Instruct-Variante**: bei Ollama, ersetzen Sie `llama3.1:8b` mit `llama3.1:8b-instruct`. Die "-instruct"-Variante versteht Befehle und antwortet richtig.',
        '**LM Studio Chat-Vorlage überprüfen**: Model-Einstellungen → Chat Format. Wählen Sie das richtige Format für das Modell (z.B. "Llama 3.3 Chat" für Llama-Modelle).',
        '**System-Prompt überprüfen**: manchmal hat ein fehlerhafter System-Prompt (z.B. zu lange, zirkulär) Auswirkung auf die Ausgabe. Versuchen Sie einen generischen Prompt: "You are a helpful assistant."',
      ],
    },
    error9: {
      id: 'error-9-port-already-in-use',
      title: 'Fehler 9: "Port Already in Use"',
      content: '**"Port bereits in Verwendung" bedeutet, ein anderer Prozess bindet bereits Port 11434 (Ollama) oder Port 1234 (LM Studio).** Dies ist häufig ein zweiter Ollama-Prozess oder ein anderer Dienst.',
      codeBlock: '# Port-Nutzer finden (macOS/Linux)\nlsof -i :11434\n\n# Windows\nnetstat -ano | findstr 11434\n\n# Prozess beenden (Note PID)\nkill -9 <PID>  # macOS/Linux\ntaskkill /PID <PID> /F  # Windows',
      codeLanguage: 'bash',
      items: [
        '**Alternativer Port für Ollama**: setzen Sie `OLLAMA_HOST=0.0.0.0:11435` vor dem Start, um einen anderen Port zu verwenden.',
      ],
    },
    error10: {
      id: 'error-10-model-stops-mid-response',
      title: 'Fehler 10: Modell stoppt mitten im Response',
      content: '**Das Modell produziert keine vorhersehbare Ausgabe mehr, nachdem wenige Sätze generiert wurden.** Dies ist normalerweise begrenzte Ausgabe-Token oder ein Speicherproblem.',
      items: [
        '**Erhöhen Sie max_tokens Limit**: die Standard num_predict ist oft 128 Token. In Ollama, setzen Sie `OLLAMA_NUM_PREDICT=2048`. In LM Studio, erhöhen Sie "Max Tokens" im Schieberegler.',
        '**Stop-Sequenzen überprüfen**: einige Chat-Vorlagen erzeugen Stop-Sequenzen (z.B. "[INST]") die die Ausgabe vorzeitig beenden. Überprüfen Sie im System-Prompt oder den Chat-Format-Einstellungen.',
        '**RAM-Druck überprüfen**: wenn Sie Swap nutzen (Festplatte statt RAM), stoppt die Inferenz. Überprüfen Sie mit `free -h` während das Modell lädt.',
      ],
    },
    relatedReading: {
      title: 'Weiterführende Lektüre',
      items: [
        '[Wie führen Sie lokale LLMs auf einem Laptop aus](/de/local-llms/local-llm-on-laptop) — Wärmeverwaltung und Batterielebensdauer auf limitierter Hardware',
        '[Lokale LLM-Sicherheits- und Datenschutz-Checkliste](/de/local-llms/local-llm-security-privacy-checklist) — Vollständige Audit-Anleitung',
        '[Beste Anfänger-Lokale-LLM-Modelle](/de/local-llms/best-beginner-local-llm-models) — RAM-passende Modellempfehlungen',
        '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) — warum Q4_K_M Standard ist und Q3_K_M für extreme RAM-Einschränkungen',
        '[Beste LLMs für Coding 2026](/de/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek Benchmark-Vergleich',
      ],
    },
    moreTroubleshooting: {
      title: 'Wo finde ich mehr Hilfe',
      content: 'Für Hardware-spezifische Probleme auf Laptops (thermische Drosselung, Batterieabfluss), siehe [Wie führen Sie lokale LLMs auf einem Laptop aus](/de/local-llms/local-llm-on-laptop). Für Sicherheits- und Datenschutz-Konfigurationsfragen, siehe die [Lokale LLM-Sicherheits- und Datenschutz-Checkliste](/de/local-llms/local-llm-security-privacy-checklist). Die Ollama GitHub-Issues-Seite (github.com/ollama/ollama/issues) und das r/LocalLLaMA-Subreddit sind die aktivsten Community-Ressourcen für modellspezifische Bugs.',
    },
    commonMistakes: {
      title: 'Häufige Fehler bei der Fehlersuche lokaler LLMs',
      items: [
        '**OOM-Fehler mit Hardware-Fehler verwechseln** — der Fehler bedeutet, RAM ist zu klein für das Modell, nicht dass Hardware kaputt ist. Behebung: Q4_K_M-Quantisierung oder kleineres Modell verwenden.',
        '**Systemlast nicht überprüfen** — Inferenz-Geschwindigkeit verschlechtert sich erheblich, wenn andere Anwendungen CPU/GPU verbrauchen. Browser, Videoplayer und Hintergrundprozesse vor dem Benchmarking schließen.',
        '**Treiberversions-Inkompatibilität ignorieren** — NVIDIA CUDA erfordert spezifische Treiberversionen pro CUDA-Version. Überprüfen Sie `nvidia-smi`-Ausgabe; Treiberversion muss ≥450.80 für CUDA 11.x sein.',
        '**Falschen Modellnamen in Ollama verwenden** — `llama3.2` und `llama3.2:3b` sind unterschiedliche Ollama-Tags. Führen Sie `ollama list` aus, um exakte Namen heruntergeladener Modelle zu sehen.',
        '**Ollama nach Treiberupdate nicht neu starten** — Ollama erkennt GPU beim Start. Nach Update von NVIDIA oder ROCm-Treibern, starten Sie Ollama komplett neu (`ollama serve`), um die GPU erneut zu erkennen.',
      ],
      image: '/images/troubleshooting-debug-steps-de.svg',
      imageCaption: '5-Schritte-Fehlersuche-Prozess für lokale LLMs: RAM überprüfen → GPU überprüfen → Server überprüfen → Modell überprüfen → Ausgabequalität überprüfen. Stopp beim ersten Fehlschlag.',
    },
    sources: {
      id: 'sources',
      title: 'Quellen',
      items: [
        'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ — Offizielle CUDA-Treiberversionsanforderungen pro Version.',
        'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md — Offizielle Ollama-Dokumentation für häufige Fehler.',
        'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ — Offizielle AMD ROCm-Installation und GPU-Unterstützung für Linux.',
      ],
    },
  },
  gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
  gammaDescription: 'Die folgende Präsentation behandelt: die 10 häufigsten Fehler beim Einrichten lokaler LLMs (Out-of-Memory, GPU nicht erkannt, langsame Inferenz, Connection Refused, fehlerhafte Ausgabe), RAM-Anforderungen für 3B–14B-Modelle bei Q4_K_M- und Q8_0-Quantisierung, einen 5-Schritte-Debugprozess und Ollama-Befehle für jeden Fix. Als PDF herunterladen als Referenzkarte für die Fehlerbehebung bei lokalen LLMs.',
},
    fr: {
    theme: 'Getting Started',
    title: 'Corriger les erreurs locales LLM 2026 : 10 problèmes courants dans Ollama, LM Studio et vLLM',
    seoTitle: 'Corriger les erreurs LLM local : OOM, GPU, port 2026',
    intro: 'Les erreurs les plus courantes dans les LLM locaux sont les plantages manque de mémoire, GPU non détecté, inférence CPU extrêmement lente, connexion refusée par l\'API et sortie brouillée. En avril 2026, il y a des solutions pour les 10 erreurs - la plupart nécessitent seulement une ou deux commandes de terminal. Ce guide couvre Ollama (port 11434), LM Studio (port 1234) et vLLM avec des commandes exactes pour chaque erreur.',
    metaDescription: '10 erreurs LLM local corrigées : OOM, GPU non détecté, port 11434 refusé, repli CPU lent. Commandes de correction Ollama + LM Studio. Avril 2026.',
    twitterDescription: '10 erreurs LLM local corrigées : OOM, GPU non détecté, port 11434. Commandes Ollama + LM Studio. Avril 2026.',
    leadAnswerBlock: '**Les erreurs les plus courantes dans les LLM locaux sont les plantages manque de mémoire, GPU non détecté, inférence CPU extrêmement lente, connexion refusée par l\'API et sortie brouillée.**',
    dateModified: '2026-04-16',
    publishDate: '2026-04-04',
    audience: 'Les débutants exécutent leur premier LLM local sur du matériel grand public',
    readTime: 'Lire 9 min',
    educationalLevel: 'Beginner',
    primaryTerm: 'dépannage local LLM',
    toc: [
      { label: 'Résumé', anchor: '#key-takeaways' },
      { label: 'Erreur 1 : Manque de mémoire', anchor: '#error-1-out-of-memory' },
      { label: 'Erreur 2 : GPU non détecté', anchor: '#error-2-gpu-not-detected' },
      { label: 'Erreur 3 : Inférence très lente', anchor: '#error-3-very-slow-inference' },
      { label: 'Erreur 4 : Connexion refusée', anchor: '#error-4-connection-refused' },
      { label: 'Erreur 5 : Modèle non trouvé', anchor: '#error-5-model-not-found' },
      { label: 'Erreur 6 : Fichier de modèle corrompu', anchor: '#error-6-corrupted-model-file' },
      { label: 'Erreur 7 : Erreurs CUDA / ROCm', anchor: '#error-7-cuda-errors' },
      { label: 'Erreur 8 : Sortie brouillée ou répétitive', anchor: '#error-8-garbled-output' },
      { label: 'Erreur 9 : Port déjà utilisé', anchor: '#error-9-port-already-in-use' },
      { label: 'Erreur 10 : Le modèle s\'arrête au milieu de la réponse', anchor: '#error-10-model-stops-mid-response' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Corriger les erreurs locales LLM 2026 : 10 problèmes courants dans Ollama, LM Studio et vLLM',
      'description': 'Correction des plantages dus au manque de mémoire, du GPU non détecté, de la connexion refusée et de la sortie brouillée dans Ollama et LM Studio. Commandes exactes : OLLAMA_GPU_LAYERS, ollama rm, nvidia-smi.',
      'url': 'https://www.promptquorum.com/fr/local-llms/troubleshooting-local-llm-setup',
      'datePublished': '2026-04-04',
      'dateModified': '2026-04-16',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'audience': { '@type': 'Audience', 'audienceType': 'Les développeurs et utilisateurs mettant en place des LLM locaux pour la première fois' },
      'about': [
        { '@type': 'Thing', 'name': 'Dépannage Ollama' },
        { '@type': 'Thing', 'name': 'Erreurs LM Studio' },
        { '@type': 'Thing', 'name': 'manque de mémoire local LLM' },
        { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
        { '@type': 'Thing', 'name': 'GPU non détecté local LLM' },
      ],
      'proficiencyLevel': 'Beginner',
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
      },
        'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Déboguer les erreurs de configuration LLM local',
        'step': [
          { '@type': 'HowToStep', 'name': 'Corriger les erreurs de mémoire insuffisante', 'text': 'Passer à une quantification plus petite (Q4_K_M) ou un modèle plus petit. Vérifier la RAM avec free -h.' },
          { '@type': 'HowToStep', 'name': 'Activer la détection du GPU', 'text': 'Mettre à jour les pilotes (NVIDIA 525+), définir OLLAMA_GPU_LAYERS=999, vérifier avec nvidia-smi.' },
          { '@type': 'HowToStep', 'name': "Accélérer l'inférence lente", 'text': "Confirmer l'activité du GPU avec ollama ps, réduire la taille du modèle ou utiliser Q4_K_M." },
          { '@type': 'HowToStep', 'name': 'Corriger la connexion refusée', 'text': 'Démarrer Ollama avec ollama serve ou redémarrer le service systemd. Vérifier avec curl localhost:11434.' },
          { '@type': 'HowToStep', 'name': 'Résoudre le modèle non trouvé', 'text': 'Lister les modèles avec ollama list, extraire les modèles manquants avec ollama pull, vérifier les noms/tags exacts.' },
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Qu\'est-ce qui cause les erreurs OOM dans les LLM locaux ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Les erreurs OOM (Out of Memory) se produisent lorsque la taille du modèle dépasse la RAM ou VRAM disponible. Correction : passez à un modèle plus petit (`ollama run llama3.2:3b` nécessite ~2,5 GB) ou utilisez un niveau de quantification inférieur. Exécutez `free -h` (Linux/macOS) pour vérifier la RAM disponible avant de télécharger des modèles supérieurs à 7B.' }
          },
          {
            '@type': 'Question',
            'name': 'Pourquoi mon GPU n\'est-il pas détecté par Ollama ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA : installez le pilote 525+ et le toolkit CUDA 11.3+, puis redémarrez Ollama. AMD sur Linux : installez ROCm 5.7+. Vérifiez la détection avec `nvidia-smi` (NVIDIA) ou `rocm-smi` (AMD). Apple Silicon : Ollama utilise Metal par défaut — aucune configuration requise. Définissez OLLAMA_GPU_LAYERS=999 pour forcer le déchargement complet du GPU.' }
          },
          {
            '@type': 'Question',
            'name': 'Pourquoi le port 11434 est-il refusé quand je démarre Ollama ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Le port 11434 est refusé lorsque le serveur Ollama n\'est pas en cours d\'exécution. Démarrez-le avec `ollama serve`, vérifiez ensuite avec `curl http://localhost:11434` — la réponse attendue est "Ollama is running". Sur Linux, redémarrez le service systemd : `systemctl restart ollama`.' }
          },
          {
            '@type': 'Question',
            'name': 'Pourquoi mon LLM local s\'exécute-t-il sur CPU au lieu de GPU ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama bascule sur CPU si le GPU n\'est pas détecté ou si la VRAM est insuffisante. Définissez la variable d\'environnement `OLLAMA_GPU_LAYERS=999` avant de démarrer Ollama pour forcer le déchargement maximal du GPU. Vérifiez d\'abord la visibilité du GPU avec `nvidia-smi`. Si la VRAM est insuffisante pour le modèle complet, Ollama divise automatiquement les couches entre GPU et CPU.' }
          },
          {
            '@type': 'Question',
            'name': 'Quelles sont les erreurs les plus courantes dans le déploiement local de LLM ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Les 10 erreurs les plus courantes des LLM locaux sont : (1) OOM/manque de mémoire, (2) GPU non détecté, (3) port 11434 refusé, (4) repli CPU lent, (5) modèle non trouvé, (6) téléchargement partiel corrompu, (7) génération s\'arrête tôt, (8) désadaptation de version CUDA, (9) longueur de contexte dépassée, (10) balise de modèle incorrecte. Chaque erreur a une commande de correction spécifique dans Ollama et LM Studio.' }
          },
          {
            '@type': 'Question',
            'name': 'Comment corriger un téléchargement de modèle Ollama corrompu ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Supprimez le modèle en cache et retéléchargez : `ollama rm <nom-du-modèle>` puis `ollama pull <nom-du-modèle>`. Les téléchargements corrompus se produisent lorsqu\'un pull est interrompu. Ollama ne détecte pas toujours les téléchargements partiels automatiquement.' }
          },
          {
            '@type': 'Question',
            'name': 'Comment vérifier si Ollama utilise mon GPU ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Exécutez `ollama ps` pendant qu\'un modèle est chargé — la sortie indique quelles couches sont sur GPU par rapport au CPU. Alternativement, surveillez l\'utilisation du GPU avec `nvidia-smi -l 1` (mise à jour chaque seconde). Si l\'utilisation du GPU reste à 0 %, Ollama s\'exécute sur CPU uniquement — vérifiez l\'installation du pilote et la compatibilité CUDA.' }
          },
          {
            '@type': 'Question',
            'name': 'Pourquoi la génération LLM s\'arrête-t-elle prématurément ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Les arrêts prématurés sont généralement causés par des jetons d\'arrêt dans le Modelfile. Vérifiez l\'invite système et le modèle pour les séquences d\'arrêt inattendues. Vérifiez également le paramètre `num_predict` — s\'il est trop bas, Ollama tronquera la sortie à ce nombre de jetons. La valeur par défaut est -1 (illimité).' }
          }
        ]
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Manque de mémoire : passez à une quantification plus petite (Q4_K_M → Q3_K_S) ou un modèle plus petit.',
            'GPU non détecté sur NVIDIA : Mettez à jour le pilote vers 525+ sous Linux, 452+ sous Windows. Exécutez `nvidia-smi` pour confirmer.',
            'Inférence extrêmement lente : Vous exécutez uniquement sur CPU. Activez le déchargement GPU dans Ollama avec la variable d\'environnement `OLLAMA_GPU_LAYERS`.',
            'Connexion refusée : Ollama n\'est pas en cours d\'exécution. Démarrez-le avec `ollama serve` ou redémarrez le service.',
            'Sortie brouillée : mauvais modèle de saisie. Utilisez la variante Instruct du modèle, pas la variante de base.',
          ],
          image: '/images/troubleshooting-error-symptoms-quick-ref-fr.svg',
          imageCaption: '10 erreurs LLM locales les plus courantes avec symptômes et correctifs — référence rapide pour les configurations Ollama, LM Studio et vLLM (avril 2026).',
        },
        error1: {
          id: 'error-1-out-of-memory',
          title: 'Erreur 1 : « Manque de mémoire » / Plantage Out-of-Memory',
          content: '**Les erreurs manque de mémoire signifient que le modèle nécessite plus de RAM que disponible — ce n\'est pas une panne matérielle.** C\'est l\'erreur la plus courante pour les utilisateurs novices. Voir [Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) pour les détails sur la façon dont la quantification réduit les exigences RAM.',
          items: [
            '**Vérifier la mémoire disponible** : Exécuter `free -h` sur macOS/Linux, ou ouvrir le Gestionnaire des tâches → Performance → Mémoire sur Windows.',
            '**Passer à une quantification plus petite** : Remplacer `Q8_0` ou `Q5_K_M` par `Q4_K_M`. Pour Ollama: `ollama run llama3.2-instruct-q4_K_M`.',
            '**Fermer les applications en arrière-plan** avant de charger le modèle — les navigateurs et autres applications consomment de la RAM que le modèle n\'aura pas.',
            '**Passer à un modèle plus petit** : si 8B échoue sur 8 Go de RAM, essayez `llama3.2:3b` (ne nécessite que ~2,5 Go).',
          ],
          image: '/images/troubleshooting-ram-by-model-size-fr.svg',
          imageCaption: 'Exigences RAM LLM local par taille de modèle : llama3.2 1B–3B tient dans 8 Go, modèles 7B–8B ont besoin de 16 Go, modèles 70B ont besoin de 64 Go à quantification Q4_K_M.',
        },
        error1Code: {
          title: 'Vérifier la mémoire disponible sur Linux / macOS',
          codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# Plus lisible sur macOS\ntop -l 1 | grep "PhysMem"',
          codeLanguage: 'bash',
        },
        error2: {
          id: 'error-2-gpu-not-detected',
          title: 'Erreur 2 : GPU non utilisé (exécution CPU uniquement)',
          content: [
            '**GPU non utilisé signifie que le LLM s\'exécute 5–10× plus lentement que prévu — vérifier l\'installation du pilote avant tout.** Vérifier que votre GPU est visible pour le système :',
          ],
          codeBlock: '# NVIDIA — doit afficher le nom GPU et la version du pilote\nnvidia-smi\n\n# AMD sous Linux\nrocm-smi\n\n# macOS — vérifier si Metal est disponible\nsystem_profiler SPDisplaysDataType | grep "Metal"',
          codeLanguage: 'bash',
          image: '/images/troubleshooting-gpu-detection-fr.svg',
          imageCaption: 'Processeur seul vs GPU actif : Ollama sur CPU donne 2–8 tok/s ; mode GPU donne 30–120 tok/s. Vérifier avec ollama ps ou nvidia-smi.',
        },
        error2Fixes: {
          title: 'Comment activez-vous le GPU dans Ollama ?',
          items: [
            '**NVIDIA sur Linux** : Installer le pilote NVIDIA 525+ et CUDA Toolkit 11.3+. Ollama détecte automatiquement CUDA au redémarrage.',
            '**NVIDIA sur Windows** : Assurez-vous que la version du pilote est 452.39 ou plus. Ollama installe automatiquement le support CUDA via l\'installateur Windows.',
            '**AMD sur Linux** : Installer ROCm 5.7+. Si la détection échoue, définir `HSA_OVERRIDE_GFX_VERSION=11.0.0` pour les cartes RX 6000.',
            '**Apple Silicon** : Ollama utilise Metal par défaut — aucune configuration requise. Confirmer avec `ollama ps` après avoir chargé un modèle ; les couches GPU apparaissent dans la sortie.',
          ],
        },
        error3: {
          id: 'error-3-very-slow-inference',
          title: 'Erreur 3 : L\'inférence est extrêmement lente (moins de 5 Token/Seconde)',
          content: '**Moins de 5 tokens/seconde signifie que le modèle s\'exécute uniquement sur CPU ou que le modèle est trop grand pour la VRAM disponible.** Un modèle 7B sur GPU génère 30–80 tok/s ; le même modèle sur CPU génère 3–10 tok/s.',
          items: [
            '**Confirmer si le GPU est actif** : Exécuter `ollama ps` tandis qu\'un modèle est chargé. La sortie montre combien de couches sont sur GPU vs CPU.',
            '**Réduire la taille du modèle** : un modèle 13B sur CPU génère 3–6 tok/s. Passer à 7B double la vitesse ; passer à 3B la quadruple.',
            '**Augmenter les couches GPU dans Ollama** : Définir `OLLAMA_GPU_LAYERS=999` pour pousser toutes les couches sur GPU (Ollama capped à ce qui rentre dans VRAM).',
            '**Utiliser une quantification plus rapide** : Q4_K_M est la quantification la plus rapide qui maintient une qualité acceptable. Q8_0 est meilleure qualité mais ~30% plus lent.',
          ],
        },
        error3Code: {
          title: 'Définir les couches GPU dans Ollama',
          codeBlock: '# Définir la variable d\'environnement avant de démarrer Ollama\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# Ou dans un Modelfile\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
          codeLanguage: 'bash',
        },
        error4: {
          id: 'error-4-connection-refused',
          title: 'Erreur 4 : « Connexion refusée » lors de l\'appel de l\'API',
          content: '**Connexion refusée signifie qu\'Ollama n\'est pas en cours d\'exécution — l\'API à `localhost:11434` répond uniquement quand le service est actif.** Démarrez-le avant d\'effectuer des appels API.',
          codeBlock: '# Démarrer Ollama manuellement\nollama serve\n\n# Sur Linux — redémarrer le service systemd\nsystemctl restart ollama\n\n# Vérifier qu\'il s\'exécute\ncurl http://localhost:11434\n# Attendu : "Ollama is running"',
          codeLanguage: 'bash',
        },
        error5: {
          id: 'error-5-model-not-found',
          title: 'Erreur 5 : Erreur « Modèle non trouvé »',
          content: [
            '**« Modèle non trouvé » signifie que le nom du modèle dans votre commande ne correspond à aucun modèle téléchargé.** Les noms de modèles dans Ollama sont sensibles à la casse et incluent les balises de version.',
          ],
          codeBlock: '# Lister tous les modèles téléchargés\nollama list\n\n# Télécharger un modèle s\'il manque\nollama pull llama3.2\n\n# Vérifier le nom de modèle exact — les balises importent\n# "llama3.2" et "llama3.2:3b" sont des entrées différentes',
          codeLanguage: 'bash',
        },
        error6: {
          id: 'error-6-corrupted-model-file',
          title: 'Erreur 6 : Fichier de modèle corrompu',
          content: '**Les fichiers de modèle corrompus sont causés par des téléchargements interrompus — supprimer et retélécharger pour corriger.** Ollama ne détecte pas toujours automatiquement les téléchargements partiels.',
          codeBlock: '# Supprimer le modèle corrompu\nollama rm llama3.2\n\n# Le retélécharger\nollama pull llama3.2\n\n# Pour LM Studio : supprimer manuellement les fichiers de modèle\n# Localisation par défaut : ~/.cache/lm-studio/models/',
          codeLanguage: 'bash',
        },
        error6lmstudio: {
          id: 'error-6b-lm-studio-model-resolution',
          title: 'Erreur 6b : « Failed to Resolve Model » dans LM Studio',
          content: '**« Failed to resolve model lmstudio-community/... » signifie que LM Studio ne peut pas trouver le modèle dans son registre.** Cela se produit généralement lorsqu\'un modèle est téléchargé depuis `lmstudio-community` sur Hugging Face mais que la référence de registre a changé. LM Studio utilise une entrée de registre mise en cache qui ne correspond plus aux fichiers de modèle disponibles.',
          items: [
            '**Ouvrir LM Studio → My Models → cliquer sur le menu trois points sur le modèle défaillant → sélectionner « Delete model »** (conserve le fichier, supprime le registre)',
            '**Rechercher le même modèle dans le navigateur de modèles et le retélécharger** — LM Studio le réenregistrera',
            '**Alternative : quitter LM Studio, naviguer vers `~/.cache/lm-studio/models/`, supprimer le dossier du modèle spécifique, puis retélécharger**',
          ],
          codeBlock: '# Effacer manuellement le cache du modèle LM Studio (macOS/Linux)\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
          codeLanguage: 'bash',
        },
        error7: {
          id: 'error-7-cuda-errors',
          title: 'Erreur 7 : Erreurs d\'initialisation CUDA / ROCm',
          content: '**Les erreurs CUDA et ROCm signifient une incompatibilité de version de pilote/bibliothèque — mettre à jour votre pilote vers la version minimale requise.**',
          items: [
            '**« CUDA driver version insufficient »** : Mettre à jour le pilote NVIDIA. Le minimum pour llama.cpp est CUDA 11.3 / driver 450.80.',
            '**« No kernel image available for execution »** : L\'architecture de votre GPU n\'est pas prise en charge. Les cartes GTX 900-series (Maxwell) et plus anciennes ne sont pas prises en charge par les versions récentes de CUDA.',
            '**AMD ROCm « HSA_STATUS_ERROR_INVALID_ISA »** : Définir `HSA_OVERRIDE_GFX_VERSION=10.3.0` (pour RX 6000) ou `11.0.0` (pour RX 7000) avant de démarrer Ollama.',
            '**Vérifier la version CUDA** : Exécuter `nvcc --version` ou `nvidia-smi | grep CUDA`.',
          ],
        },
        error8: {
          id: 'error-8-garbled-output',
          title: 'Erreur 8 : Sortie brouillée, répétitive ou dénuée de sens',
          content: [
            '**La sortie brouillée signifie presque toujours que vous utilisez un modèle de base au lieu d\'une variante instruct/chat.** Les modèles de base génèrent des complétions de texte brut, pas des réponses aux questions.',
            'Les modèles de base (par exemple, `llama3.1:8b`) ne sont pas optimisés pour la conversation, et lorsqu\'on les invite avec une question, ils génèrent des complétions brutes qui ressemblent à du charabia. Utilisez toujours la variante instruct : `llama3.1:8b-instruct`. Voir [Comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio) pour une méthode basée sur GUI pour basculer les variantes de modèle.',
            'Dans Ollama, la balise par défaut pour la plupart des modèles pointe déjà vers la variante instruct. Si vous avez téléchargé manuellement depuis Hugging Face, confirmez que le nom de fichier inclut « Instruct » ou « chat ».',
          ],
        },
        error9: {
          id: 'error-9-port-already-in-use',
          title: 'Erreur 9 : « Address Already in Use » -- Conflit de port',
          content: '**« Address already in use » signifie qu\'un autre processus occupe le port 11434 (Ollama) ou 1234 (LM Studio).** Trouvez et tuez le processus conflictuel.',
          codeBlock: '# Trouvez ce qui utilise le port 11434 (Ollama)\nlsof -i :11434\n\n# Tuez-le par PID\nkill -9 <PID>\n\n# Ou changez le port Ollama\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
          codeLanguage: 'bash',
        },
        error10: {
          id: 'error-10-model-stops-mid-response',
          title: 'Erreur 10 : Le modèle s\'arrête au milieu de la réponse',
          content: '**S\'arrêter au milieu de la réponse est causé par le dépassement des limites de longueur de contexte ou `num_predict` trop bas.** Le `num_predict` par défaut dans de nombreuses configurations est de 128 jetons — juste assez pour 1–2 phrases.',
          items: [
            '**Augmenter num_predict** : Ce paramètre définit les jetons maximum à générer. La valeur par défaut est souvent 128. Augmentez-la : Dans Ollama, ajoutez `PARAMETER num_predict 2048` au Modelfile.',
            '**Vérifier la fenêtre de contexte** : Si votre conversation est très longue, le modèle peut atteindre sa limite de contexte. Commencez une nouvelle session ou utilisez un modèle avec une fenêtre de contexte plus grande (Llama 3.2 3B supporte 128K).',
            '**Vérifier les jetons d\'arrêt** : Certains Modelfiles incluent des séquences d\'arrêt qui terminent la génération plus tôt. Vérifiez le invite système et le modèle pour des modèles d\'arrêt inattendus.',
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) -- Pourquoi Q4_K_M est la valeur par défaut et comment la quantification affecte la RAM',
            '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- Exigences matérielles pour exécuter des modèles 7B–70B',
            '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Guide d\'installation et de configuration',
            '[Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) -- Comparaison des deux outils LLM locaux les plus populaires',
            '[Comment exécuter des LLMs locaux sur un portable](/fr/local-llms/local-llm-on-laptop) -- Optimisation thermique et batterie spécifique au portable',
            '[Meilleurs modèles LLM locaux pour débutants](/fr/local-llms/best-beginner-local-llm-models) -- Recommandations de modèles pour 8 Go de RAM',
            '[Meilleurs LLMs pour le code 2026](/fr/local-llms/best-local-llms-for-coding) — Comparatif Qwen3-Coder vs DeepSeek',
          ],
        },
        moreTroubleshooting: {
          title: 'Où trouver plus d\'aide',
          content: 'Pour les problèmes spécifiques au matériel sur les ordinateurs portables (étranglement thermique, drainage de la batterie), voir [Comment exécuter des LLMs locaux sur un portable](/fr/local-llms/local-llm-on-laptop). Pour les questions de configuration de sécurité et de confidentialité, voir [Liste de contrôle sécurité et confidentialité LLM local](/fr/local-llms/local-llm-security-privacy-checklist). La page des problèmes GitHub d\'Ollama (github.com/ollama/ollama/issues) et le subreddit r/LocalLLaMA sont les ressources communautaires les plus actives pour les bugs spécifiques aux modèles.',
        },
        commonMistakes: {
          title: 'Erreurs courantes dans le dépannage LLM local',
          items: [
            '**Confondre les erreurs OOM avec une panne matérielle** -- l\'erreur signifie que la RAM est trop petite pour le modèle, pas que le matériel est cassé. Correctif : utilisez la quantification Q4_K_M ou un modèle plus petit.',
            '**Ne pas vérifier la charge du système** -- la vitesse d\'inférence se dégrade considérablement lorsque d\'autres applications consomment CPU/GPU. Fermez votre navigateur, lecteur vidéo et processus en arrière-plan avant de faire un benchmarking.',
            '**Ignorer l\'incompatibilité de la version du pilote** -- NVIDIA CUDA nécessite des versions de pilote spécifiques par version CUDA. Vérifiez la sortie `nvidia-smi` ; la version du pilote doit être ≥450.80 pour CUDA 11.x.',
            '**Utiliser un mauvais nom de modèle dans Ollama** -- `llama3.2` et `llama3.2:3b` sont différentes balises Ollama. Exécutez `ollama list` pour voir les noms exacts des modèles téléchargés.',
            '**Ne pas redémarrer Ollama après une mise à jour du pilote** -- Ollama détecte le GPU au démarrage. Après la mise à jour des pilotes NVIDIA ou ROCm, redémarrez complètement Ollama (`ollama serve`) pour re-détecter le GPU.',
          ],
          image: '/images/troubleshooting-debug-steps-fr.svg',
          imageCaption: 'Processus de débogage LLM local en 5 étapes : vérifier RAM → vérifier GPU → vérifier serveur → vérifier modèle → vérifier qualité de sortie. Arrêtez à la première étape défaillante.',
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'NVIDIA. (2024). « CUDA Toolkit Release Notes. » https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ — Exigences de version de pilote CUDA officielles par version.',
            'Ollama. (2026). « Ollama Troubleshooting. » https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md — Documentation officielle d\'Ollama pour les erreurs courantes.',
            'AMD. (2024). « ROCm Installation Guide. » https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ — Installation ROCm AMD officielle et support GPU Linux.',
          ],
        },
      },
      gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
      gammaDescription: 'La présentation suivante couvre : les 10 erreurs les plus courantes dans la configuration des LLM locaux (manque de mémoire, GPU non détecté, inférence lente, connexion refusée, sortie brouillée), les exigences RAM pour les modèles 3B–14B en quantification Q4_K_M et Q8_0, un processus de débogage en 5 étapes et les commandes Ollama pour chaque correction. Télécharger le PDF comme carte de référence pour le dépannage des LLM locaux.',
    },
    ja: {
  theme: 'Getting Started',
  title: 'ローカルLLMエラーを2026年に修正する：Ollama、LM Studio、vLLMの10個の一般的な問題',
  seoTitle: 'ローカルLLMエラー修正：OOM・GPU未検出・ポート11434対処法2026',
  intro: 'ローカルLLMで最も一般的なエラーは、メモリ不足のクラッシュ、GPUが検出されない、CPU推論が非常に遅い、APIからの接続拒否、出力が破損しているです。2026年4月現在、すべての10のエラーに対する修正が存在します。ほとんどの場合、1、2個のターミナルコマンドのみが必要です。このガイドは、Ollama（ポート11434）、LM Studio（ポート1234）、vLLMをカバーし、各エラーのための正確なコマンドを提供します。',
  metaDescription: 'OOMエラー、GPU未検出、ポート11434拒否など10の頻出ローカルLLMエラーをOllama・LM Studioで修正するコマンド一覧。2026年4月更新。',
  twitterDescription: 'OOM・GPU未検出・ポート11434など10エラーをOllamaで修正。2026年4月。',
  publishDate: '2026-04-04',
  dateModified: '2026-04-16',
  leadAnswerBlock: '**ローカルLLMで最も一般的なエラーは、メモリ不足のクラッシュ、GPUが検出されない、CPU推論が非常に遅い、APIからの接続拒否、出力が破損しているです。**',
  audience: 'コンシューマーハードウェアで初めてローカルLLMを実行する初心者',
  readTime: '9分で読める',
  educationalLevel: 'Beginner',
  primaryTerm: 'ローカルLLMトラブルシューティング',
  toc: [
    { label: '重要ポイント', anchor: '#key-takeaways' },
    { label: 'エラー1：メモリ不足', anchor: '#error-1-out-of-memory' },
    { label: 'エラー2：GPU検出されない', anchor: '#error-2-gpu-not-detected' },
    { label: 'エラー3：推論が極めて遅い', anchor: '#error-3-very-slow-inference' },
    { label: 'エラー4：接続拒否', anchor: '#error-4-connection-refused' },
    { label: 'エラー5：モデル見つからない', anchor: '#error-5-model-not-found' },
    { label: 'エラー6：モデルファイルが破損している', anchor: '#error-6-corrupted-model-file' },
    { label: 'エラー7：CUDAまたはROCmエラー', anchor: '#error-7-cuda-errors' },
    { label: 'エラー8：出力が破損しているか反復的', anchor: '#error-8-garbled-output' },
    { label: 'エラー9：ポートが既に使用中', anchor: '#error-9-port-already-in-use' },
    { label: 'エラー10：モデルが途中で応答を停止', anchor: '#error-10-model-stops-mid-response' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': 'ローカルLLMエラーを2026年に修正する：Ollama、LM Studio、vLLMの10個の一般的な問題',
    'description': 'ローカルLLMのメモリ不足のクラッシュ、GPU検出エラー、接続拒否、出力破損を修正します。各エラーの正確なコマンド — OLLAMA_GPU_LAYERS、ollama rm、nvidia-smi。',
    'url': 'https://www.promptquorum.com/ja/local-llms/troubleshooting-local-llm-setup',
    'datePublished': '2026-04-04',
    'dateModified': '2026-04-16',
    'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'audience': { '@type': 'Audience', 'audienceType': '初めてローカルLLMをセットアップする開発者とユーザー' },
    'about': [
      { '@type': 'Thing', 'name': 'Ollamaトラブルシューティング' },
      { '@type': 'Thing', 'name': 'LM Studioエラー' },
      { '@type': 'Thing', 'name': 'ローカルLLMメモリ不足' },
      { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
      { '@type': 'Thing', 'name': 'GPU検出されないローカルLLM' },
    ],
    'proficiencyLevel': 'Beginner',
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
    },
    'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'ローカルLLMセットアップエラーをデバッグする',
    'step': [
      { '@type': 'HowToStep', 'name': 'メモリ不足エラーを修正する', 'text': '小さい量子化（Q4_K_M）または小さいモデルに切り替えます。free -hでRAMを確認します。' },
      { '@type': 'HowToStep', 'name': 'GPU検出を有効にする', 'text': 'ドライバをアップデートします（NVIDIA 525+）、OLLAMA_GPU_LAYERS=999を設定します、nvidia-smiで確認します。' },
      { '@type': 'HowToStep', 'name': '遅い推論を高速化する', 'text': 'ollama psでGPU動作を確認します。モデルサイズを減らすか、Q4_K_Mを使用します。' },
      { '@type': 'HowToStep', 'name': '接続拒否を修正する', 'text': 'ollama serveでOllamaを開始するか、systemdサービスを再起動します。curl localhost:11434で確認します。' },
      { '@type': 'HowToStep', 'name': 'モデルが見つからないを解決する', 'text': 'ollama listでモデルをリストします。ollama pullで不足するモデルを取得します。正確なモデル名とタグを確認します。' },
    ]
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ローカルLLMでOOMエラーの原因は何ですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'OOM（メモリ不足）エラーは、モデルサイズが利用可能なRAMまたはVRAMを超えた場合に発生します。修正：より小さいモデルに切り替えます（`ollama run llama3.2:3b`は~2.5 GBを必要）、または低い量子化レベルを使用します。7B以上のモデルをプルする前に、`free -h`（Linux/macOS）を実行して利用可能なRAMを確認します。' }
      },
      {
        '@type': 'Question',
        'name': 'Ollamaで私のGPUが検出されない理由は何ですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA：ドライバ525+とCUDA Toolkit 11.3+をインストール後、Ollamaを再起動。AMD on Linux：ROCm 5.7+をインストール。`nvidia-smi`（NVIDIA）または`rocm-smi`（AMD）で検出を確認。Apple Silicon：Ollamaはデフォルトでメタルを使用します。OLLAMA_GPU_LAYERS=999を設定して、最大GPU オフロードを強制します。' }
      },
      {
        '@type': 'Question',
        'name': 'OllamaでポートU11434が拒否されるのはなぜですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'ポート11434が拒否されるのは、Ollamaサーバーが実行されていないためです。`ollama serve`で起動し、`curl http://localhost:11434`で確認します。期待される応答は「Ollama is running」です。Linux上では、systemdサービスを再起動します：`systemctl restart ollama`。' }
      },
      {
        '@type': 'Question',
        'name': 'ローカルLLMがCPUで実行されているのに、GPUがあるのはなぜですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'OllamaはGPUが検出されないか、VRAM が不十分な場合、CPUにフォールバックします。Ollamaを開始する前に、環境変数`OLLAMA_GPU_LAYERS=999`を設定して、最大GPU オフロードを強制します。最初に`nvidia-smi`でGPU可視性をチェック。全モデルのVRAMが不足している場合、Ollamaは自動的にGPUとCPU間でレイヤーを分割します。' }
      },
      {
        '@type': 'Question',
        'name': 'ローカルLLMデプロイの最も一般的なエラーは何ですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '10個の最も一般的なローカルLLMエラーは：（1）OOM/メモリ不足、（2）GPU未検出、（3）ポート11434拒否、（4）遅いCPUフォールバック、（5）モデル未検出、（6）部分ダウンロード破損、（7）生成が早期に停止、（8）CUDAバージョン不一致、（9）コンテキスト長超過、（10）不正なモデルタグ。各エラーはOllamaとLM Studioに固有の修正コマンドがあります。' }
      },
      {
        '@type': 'Question',
        'name': '破損したOllamaモデルダウンロードを修正するにはどうすればよいですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'キャッシュされたモデルを削除して再プル：`ollama rm <モデル名>`次に`ollama pull <モデル名>`。破損したダウンロードはプルが中断された場合に発生します。Ollamaは部分ダウンロードを常に自動検出するわけではありません。' }
      },
      {
        '@type': 'Question',
        'name': 'OllamaがGPUを使用しているかを確認するにはどうすればよいですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'モデルが読み込まれている間に`ollama ps`を実行します。出力にはGPU vs CPU のどのレイヤーがあるかが表示されます。また、`nvidia-smi -l 1`でGPU利用率をリアルタイム監視できます。GPU利用率が0%のままの場合、OllamaはレイトンlyCPUのみで実行しています。ドライバのインストールとCUDA互換性を確認します。' }
      },
      {
        '@type': 'Question',
        'name': 'LLM生成が早期に停止するのはなぜですか？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '早期の停止は通常、Modelfileのストップトークンが原因です。予期しないストップシーケンスのシステムプロンプトとテンプレートを確認します。また`num_predict`パラメータを確認します。低く設定されている場合、Ollamaはそのトークン数で出力を切り詰めます。デフォルトは-1（無制限）です。' }
      }
    ]
  },
  sections: {
    tldr: {
      id: 'key-takeaways',
      isTldr: true,
      items: [
        'メモリ不足：より小さい量子化（Q4_K_M → Q3_K_S）またはより小さいモデルに切り替えます。',
        'NVIDIAで検出されないGPU：LinuxではドライバをバージョンNVIDIA 525+に、Windowsではバージョン452+にアップデートします。nvidia-smiで確認してください。',
        '極めて遅い推論：CPUのみで実行しています。OllamaのOLLAMA_GPU_LAYERS環境変数でGPUオフロードを有効にします。',
        '接続拒否：Ollamaが実行されていません。ollama serveで起動するか、サービスを再起動します。',
        '破損した出力：プロンプトテンプレートが間違っています。ベースvariantではなく、モデルのInstruct variantを使用します。',
      ],
      image: '/images/troubleshooting-error-symptoms-quick-ref-ja.svg',
      imageCaption: '最も一般的な10個のローカルLLMエラーと症状と修正 — Ollama、LM Studio、vLLMセットアップのクイックリファレンス（2026年4月）。',
    },
    error1: {
      id: 'error-1-out-of-memory',
      title: 'エラー1：「メモリ不足」/メモリ不足クラッシュ',
      content: '**メモリ不足エラーは、モデルが利用可能なRAMより多くメモリを必要とすることを意味します。ハードウェア障害ではありません。**これは初めてのユーザーにとって最も一般的なエラーです。背景について、[LLM量子化について説明](/ja/local-llms/llm-quantization-explained)を参照してください。',
      items: [
        '**利用可能なRAMをチェックします**：macOS/Linuxではfree -hを実行します。Windowsではタスクマネージャー → パフォーマンス → メモリを開きます。',
        '**小さい量子化に切り替えます**：Q8_0またはQ5_K_Mをq4_K_Mに置き換えます。Ollamaの場合：ollama run llama3.2-instruct-q4_K_M。',
        '**バックグラウンドアプリケーションを閉じます**。モデルロードの前に、ブラウザと他のアプリはRAMを消費し、モデルに利用可能なものを減らします。',
        '**より小さいモデルに切り替えます**：8 GBのRAMで8Bが失敗した場合、llama3.2:3bを試してください（約2.5 GBのみが必要です）。',
      ],
      image: '/images/troubleshooting-ram-by-model-size-ja.svg',
      imageCaption: 'ローカルLLM RAM要件（モデルサイズ別）：llama3.2 1B-3Bは8GBに適合、7B-8Bモデルは16GB必要、70Bモデルはq4_K_M量子化で64GB必要です。',
    },
    error1Code: {
      title: 'Linux / macOSで利用可能なRAMを確認する',
      codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# macOSでより読みやすい\ntop -l 1 | grep "PhysMem"',
      codeLanguage: 'bash',
    },
    error2: {
      id: 'error-2-gpu-not-detected',
      title: 'エラー2：GPUが使用されていない（CPUのみで実行）',
      content: [
        '**GPUが使用されないことは、LLMが予想より5–10倍遅く実行されることを意味します。他に何もする前にドライバインストールをチェックしてください。**システムがGPUを見ることができることを確認してください：',
      ],
      codeBlock: '# NVIDIA — GPU名とドライババージョンを表示する必要があります\nnvidia-smi\n\n# Linux上のAMD\nrocm-smi\n\n# macOS — Metalが利用可能かどうかを確認します\nsystem_profiler SPDisplaysDataType | grep "Metal"',
      codeLanguage: 'bash',
      image: '/images/troubleshooting-gpu-detection-ja.svg',
      imageCaption: 'CPU-onlyとGPU-active：OllamaがCPUで実行すると2–8 tok/s。GPUモードで30–120 tok/s。ollama psまたはnvidia-smiで確認します。',
    },
    error2Fixes: {
      title: 'OllamaでGPUを有効にするにはどうしますか？',
      items: [
        '**LinuxのNVIDIA**：NVIDIAドライバ525+とCUDAToolkit 11.3+をインストールします。Ollamaは再起動時にCUDAを自動検出します。',
        '**WindowsのNVIDIA**：ドライババージョン452.39以上であることを確認します。OllamaはWindowsインストーラーを通じてCUDAサポートを自動的にインストールします。',
        '**Linux上のAMD**：ROCm 5.7+をインストールします。検出に失敗した場合、RX 6000シリーズカードに対してHSA_OVERRIDE_GFX_VERSION=11.0.0を設定します。',
        '**Apple Silicon**：Ollamaはデフォルトでメタルを使用します。設定は不要です。モデルを開始した後、ollama psで確認します。GPU layers出力に表示されます。',
      ],
    },
    error3: {
      id: 'error-3-very-slow-inference',
      title: 'エラー3：推論が極めて遅い（秒あたり5トークン未満）',
      content: '**秒あたり5トークン未満は、モデルがCPUのみで実行されているか、モデルが利用可能なVRAMに対して大きすぎることを意味します。**GPU上の7Bモデルは30–80 tok/sを生成します。CPU上の同じモデルは3–10 tok/sを生成します。',
      items: [
        '**GPUがアクティブかどうかを確認します**：モデルが読み込まれている間にollama psを実行します。出力は、GPUとCPUの間にいくつのレイヤーがあるかを示します。',
        '**モデルサイズを減らします**：CPU上の13Bモデルは3–6 tok/sを生成します。7Bへの切り替えは速度を2倍にします。3Bへの切り替えは4倍にします。',
        '**Ollamaで GPU layersを増やします**：OLLAMA_GPU_LAYERS=999を設定して、すべてのレイヤーをGPUに移動します（OllamaはVRAMに合致するようにキャップします）。',
        '**より高速な量子化を使用します**：Q4_K_Mは許容可能な品質を維持する最速の量子化です。Q8_0はより高品質ですが、約30%遅いです。',
      ],
    },
    error3Code: {
      title: 'OllamaでGPUレイヤーを設定する',
      codeBlock: '# Ollamaを開始する前に環境変数を設定します\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# またはModelfileで\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
      codeLanguage: 'bash',
    },
    error4: {
      id: 'error-4-connection-refused',
      title: 'エラー4：APIを呼び出すときに「接続拒否」',
      content: '**接続拒否は、Ollamaが実行されていないことを意味します。APIはlocalhost:11434にあり、サービスがアクティブな場合のみ応答します。**API呼び出しの前に開始します。',
      codeBlock: '# Ollamaを手動で開始する\nollama serve\n\n# Linux上 — systemdサービスを再起動します\nsystemctl restart ollama\n\n# 実行していることを確認します\ncurl http://localhost:11434\n# 予想：「Ollama is running」',
      codeLanguage: 'bash',
    },
    error5: {
      id: 'error-5-model-not-found',
      title: 'エラー5：「モデルが見つかりません」エラー',
      content: [
        '**「モデルが見つかりません」はコマンドのモデル名がダウンロードされたモデルと一致していないことを意味します。**Ollamaのモデル名は大文字と小文字を区別し、バージョンタグが含まれます。',
      ],
      codeBlock: '# ダウンロード済みのすべてのモデルをリストします\nollama list\n\n# 不足しているモデルをプルします\nollama pull llama3.2\n\n# 正確なモデル名を確認します — タグは重要です\n# 「llama3.2」と「llama3.2:3b」は異なるエントリです',
      codeLanguage: 'bash',
    },
    error6: {
      id: 'error-6-corrupted-model-file',
      title: 'エラー6：破損したモデルファイル',
      content: '**破損したモデルファイルは中断されたダウンロードから発生します。修正するには削除して再プルします。**Ollamaは常に部分的なダウンロードを検出するわけではありません。',
      codeBlock: '# 破損したモデルを削除します\nollama rm llama3.2\n\n# 再度プルします\nollama pull llama3.2\n\n# LM Studio：モデルファイルを手動で削除します\n# デフォルトの場所：~/.cache/lm-studio/models/',
      codeLanguage: 'bash',
    },
    error6lmstudio: {
      id: 'error-6b-lm-studio-model-resolution',
      title: 'エラー6b：LM Studioで「モデル解決に失敗」',
      content: '**「failed to resolve model lmstudio-community/...」は、LM Studioがレジストリでモデルを見つけられないことを意味します。**これは通常、モデルが「lmstudio-community」からHugging Faceでダウンロードされたが、レジストリ参照が変更されたときに発生します。LM Studioは、利用可能なモデルファイルと一致しなくなったキャッシュレジストリエントリを使用しています。',
      items: [
        '**LM Studioを開きます → My Models tab → 失敗したモデルの3ドット メニューをクリック → 「Delete model」を選択します**（ファイルは保持、レジストリを削除）',
        '**モデルブラウザーで同じモデルを検索して再度ダウンロードします** — LM Studioが再度登録します',
        '**代替案：LM Studioを終了します、~/.cache/lm-studio/models/に移動して特定のモデルフォルダーを削除します。その後、再度ダウンロードします**',
      ],
      codeBlock: '# LM Studioモデルキャッシュを手動でクリアします（macOS/Linux）\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
      codeLanguage: 'bash',
    },
    error7: {
      id: 'error-7-cuda-errors',
      title: 'エラー7：CUDAまたはROCm初期化エラー',
      content: '**CUDAおよびROCmエラーは、ドライバ/ライブラリのバージョンが不一致であることを意味します。最小限必要なバージョンにドライバをアップデートします。**',
      items: [
        '**「CUDAドライババージョンが不十分」**：NVIDIAドライバをアップデートします。llama.cppの最小値はCUDA 11.3 /ドライバ450.80です。',
        '**「実行に利用可能なカーネルイメージがない」**：GPUアーキテクチャがサポートされていません。GTX 900シリーズ（Maxwell）以前はサポートされていません。',
        '**AMD ROCm「HSA_STATUS_ERROR_INVALID_ISA」**：Ollamaを開始する前にHSA_OVERRIDE_GFX_VERSION=10.3.0（RX 6000用）または11.0.0（RX 7000用）を設定します。',
        '**CUDAバージョンをチェックします**：nvcc --versionまたはnvidia-smi | grep CUDAを実行します。',
      ],
    },
    error8: {
      id: 'error-8-garbled-output',
      title: 'エラー8：出力が破損しているか反復的',
      content: [
        '**破損した出力はほぼ常に、ベースモデルではなくinstruct/chatvariantを使用していることを意味します。**ベースモデルは生のテキスト完成を生成し、質問への回答ではありません。',
        'ベースモデル（例えば、llama3.1:8b）は会話用にファインチューニングされていないため、質問で促された場合、破損したテキストのような生の完成を生成します。常にinstruct variantを使用します：llama3.1:8b-instruct。詳細については、[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio)を参照してください。',
        'Ollamaでは、ほとんどのモデルのデフォルトタグはすでにinstruct variantを指します。Hugging Faceから手動でダウンロードした場合は、ファイル名に「Instruct」または「chat」が含まれていることを確認してください。',
      ],
    },
    error9: {
      id: 'error-9-port-already-in-use',
      title: 'エラー9：「アドレス既に使用中」—ポートが競合',
      content: '**「アドレス既に使用中」は、別のプロセスがポート11434（Ollama）またはポート1234（LM Studio）を占有していることを意味します。**競合しているプロセスを検索して終了します。',
      codeBlock: '# ポート11434を使用しているものを検索します（Ollama）\nlsof -i :11434\n\n# PIDで終了します\nkill -9 <PID>\n\n# またはOllamaのポートを変更します\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
      codeLanguage: 'bash',
    },
    error10: {
      id: 'error-10-model-stops-mid-response',
      title: 'エラー10：モデルが途中で応答を停止',
      content: '**途中で応答を停止は、コンテキスト長制限またはnum_predictが低く設定されていることが原因です。**多くの設定でのデフォルトnum_predictは128トケン — 1–2文に十分です。',
      items: [
        '**num_predictを増やします**：このパラメーターは生成する最大トークン数を設定します。デフォルトは128の場合が多いです。増やします：Ollamaでは、Modelfileに「PARAMETER num_predict 2048」を追加します。',
        '**コンテキストウィンドウをチェックします**：会話が非常に長い場合、モデルはコンテキスト制限に達している可能性があります。新しいセッションを開始するか、より大きなコンテキストウィンドウを持つモデルを使用します（Llama 3.2 3Bは128Kをサポート）。',
        '**停止トークンをチェックします**：一部のModelfileには生成を早期に終了する停止シーケンスが含まれています。システムプロンプトとテンプレートで予期しない停止パターンを確認してください。',
      ],
    },
    regionalContext: {
      id: 'regional-context',
      title: 'ローカルLLMトラブルシューティング（地域別）',
      content: [
        '**日本 / APPI：** 日本の企業向けハードウェア上のオンプレミスローカルLLM推論（通常8–16 GBのRAMラップトップ）は、APPIのオンプレミス除外の対象です。日本語モデルの場合、破損した出力（エラー8）はトークナイザーテンプレートが間違っているために多く発生します。モデルファイルにファイル名に「instruct」が含まれていることを確認し、チャットテンプレートに日本語トークナイザーサポートが含まれていることを確認してください。',
        '**アジア太平洋地域（データクロスボーダー）：** データレジデンシー枠組み、MLAI（マルチASEAN/APAC）コンプライアンスパターン。複数の国でのローカルLLM展開は、データレジデンシー規制の対象です。ASEAN/APACの大幅なデータクロスボーダーの制限がある場合、Ollama/LM Studioはすべての推論をローカルに保ちます。',
        '**エンタープライズ展開：** 大規模エンタープライズの金融/医療/法務規制コンプライアンス。銀行、病院、弁護士事務所は、データセキュリティと機密性のため、ローカルLLM推論が必須の場合があります。これらの組織は、Ollama/LM StudioをオンプレミスGPUサーバー（RTX 4090、A100）にデプロイします。',
      ],
    },
    relatedReading: {
      id: 'related-reading',
      title: '関連記事',
      items: [
        '[LLM量子化について説明](/ja/local-llms/llm-quantization-explained) — Q4_K_Mがデフォルトな理由と、量子化がRAMにどう影響するか',
        '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — 7B–70Bモデルを実行するためのハードウェア要件',
        '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) — インストールとセットアップガイド',
        '[Ollama対LM Studio](/ja/local-llms/ollama-vs-lm-studio) — 2つの最も一般的なローカルLLMツールの比較',
        '[ラップトップでローカルLLMを実行する方法](/ja/local-llms/local-llm-on-laptop) — ラップトップ固有の熱とバッテリー最適化',
        '[初心者向けの最高のローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) — 8 GBのRAMのモデル推奨事項',
        '[2026年コーディング用ローカルLLM比較](/ja/local-llms/best-local-llms-for-coding) — Qwen3-CoderとDeepSeekのベンチマーク',
      ],
    },
    faqSection: {
      id: 'common-questions',
      title: 'ローカルLLMエラーについてよくある質問',
      faqs: [
        {
          q: 'ローカルLLMで最も一般的なエラーは何ですか？',
          a: 'メモリ不足（OOM）エラーは初めてのユーザーにとって最も一般的です。これは、モデルが利用可能なRAMより多くのメモリを必要とすることを意味します。小さい量子化（Q4_K_M）またはより小さいモデル（3Bではなく7B）に切り替えます。',
        },
        {
          q: 'NVIDIAでOllamaのGPUを有効にするにはどうすればよいですか？',
          a: 'LinuxではNVIDIAドライバを525+に、WindowsではドライバをバージョンNVIDIA 452+にアップデートします。OLLAMA_GPU_LAYERS=999を設定します。nvidia-smiで実行してGPUが検出されることを確認します。Ollamaは再起動時にCUDAを自動検出します。',
        },
        {
          q: '推論がこんなに遅いのはなぜですか？',
          a: 'CPUのみで実行しています。モデルが読み込まれている間、ollama psで確認します。OLLAMA_GPU_LAYERS=999でGPUを有効にします。モデルサイズを減らします（13Bではなく7B）か、より高速な量子化（Q4_K_M）を使用します。',
        },
        {
          q: 'Ollamaで「接続拒否」エラーをどのように修正しますか？',
          a: 'Ollamaが実行されていません。ターミナルでollama serveで起動します（Mac/Linux）、またはOllamaアプリを再起動します（Windows）。curl http://localhost:11434でサーバーが起動していることを確認します。「Ollama is running」が返される必要があります。',
        },
        {
          q: 'ローカルLLMからの出力が破損しているまたは反復的な理由は何ですか？',
          a: 'プロンプトテンプレートが間違っています。Instruct形式なしでベースモデルを使用しています。Instruct variant（例えば、llama3.1:8b-instruct）に切り替えるか、LM Studioで正しいチャットテンプレートを適用します。',
        },
        {
          q: 'Ollamaで破損したモデルファイルをどのように修正しますか？',
          a: '削除して再ダウンロードします：ollama rm modelname && ollama pull modelname。破損は中断されたダウンロードから発生します。sha256ハッシュはダウンロード時に検証されます。',
        },
        {
          q: 'GPUがあるのに、モデルがCPUで実行しているのはなぜですか？',
          a: 'CUDAドライバがインストールされていないか検出されていません。nvidia-smiで確認します。GPUがない場合は、NVIDIAドライバを再インストールします。その後、Ollamaを再起動します。自動的にCUDAを検出し、ログに「GPU layers: 35」と表示されます。',
        },
        {
          q: '「CUDAエラー：メモリ不足」とはどういう意味ですか？',
          a: 'GPU VRAMがいっぱいです。モデルは選択された量子化に適合しません。修正：小さいモデルを使用します、Q4_K_M（低い量子化）に切り替えます、または--n-gpu-layers 20でいくつかのレイヤーをCPUにオフロードします。',
        },
        {
          q: 'Ollamaの「ポート既に使用中」とはどういう意味ですか？',
          a: '別のプロセスがポート11434を使用しています。lsof -i :11434（Mac/Linux）またはnetstat -ano | findstr 11434（Windows）で探します。プロセスを終了するか、OLLAMA_HOST=0.0.0.0:11435を変更して別のポートを使用します。',
        },
        {
          q: 'ローカルLLMが途中で応答を停止するのはなぜですか？',
          a: 'コンテキストウィンドウの制限に達しました。モデルがmax_tokensに達しました。Ollamaでnum_ctxを増やします（例えば、OLLAMA_NUM_CTX=4096）。またはLM Studioでより高いmax_tokensを設定します。RAMの負荷も確認します。スワップ使用は推論を途中で停止させます。',
        },
      ],
    },
    moreTroubleshooting: {
      title: 'さらに支援を探す場所',
      content: 'ラップトップでのハードウェア固有の問題（熱スロットリング、バッテリードレイン）については、[ラップトップでローカルLLMを実行する方法](/ja/local-llms/local-llm-on-laptop)を参照してください。セキュリティおよびプライバシー構成の質問については、[ローカルLLMセキュリティ&プライバシーチェックリスト](/ja/local-llms/local-llm-security-privacy-checklist)を参照してください。Ollama GitHubの問題ページ（github.com/ollama/ollama/issues）とr/LocalLLaMAサブレディットは、モデル固有のバグ最もアクティブなコミュニティリソースです。',
    },
    commonMistakes: {
      title: 'ローカルLLMのトラブルシューティングでよくある間違い',
      items: [
        '**OOMエラーをハードウェアエラーと混同します** — エラーは、RAMがモデルに対して小さすぎることを意味します。ハードウェアが壊れていません。修正：Q4_K_M量子化またはより小さいモデルを使用します。',
        '**システム負荷をチェックしません** — 他のアプリがCPU/GPUを消費すると推論速度が大幅に低下します。ベンチマークの前にブラウザ、ビデオプレーヤー、バックグラウンドプロセスを閉じます。',
        '**ドライババージョンの不一致を無視します** — NVIDIA CUDAはCUDAリリースごとに特定のドライババージョンが必要です。nvidia-smi出力を確認します。ドライババージョンはCUDA 11.xでは≥450.80である必要があります。',
        '**Ollamaで間違ったモデル名を使用します** — llama3.2とllama3.2:3bは異なるOllamaタグです。ollama listを実行して、ダウンロード済みモデルの正確な名前を確認します。',
        '**ドライバアップデート後、Ollamaを再起動しません** — Ollamaはスタートアップ時にGPUを検出します。NVIDIAまたはROCmドライバのアップデート後、GPUを再度検出するにはOllamaを完全に再起動します（ollama serve）。',
      ],
      image: '/images/troubleshooting-debug-steps-ja.svg',
      imageCaption: '5つのステップのローカルLLMデバッグプロセス：RAMをチェック → GPUをチェック → サーバーをチェック → モデルをチェック → 出力品質をチェック。最初に失敗したステップで停止します。',
    },
    sources: {
      id: 'sources',
      title: 'ソース',
      items: [
        'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ — リリースごとの公式CUDAドライババージョン要件。',
        'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md — 一般的なエラーの公式Ollama ドキュメンテーション。',
        'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ — 公式AMD ROCmインストールとLinux用GPUサポート。',
      ],
    },
  },
  gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
  gammaDescription: '以下のプレゼンテーションでは、ローカルLLMセットアップの最も一般的な10のエラー（メモリ不足、GPU未検出、推論遅延、接続拒否、出力破損）、Q4_K_MとQ8_0量子化での3B〜14Bモデルのメモリ要件、5ステップのデバッグプロセス、各修正のOllamaコマンドを解説します。ローカルLLMトラブルシューティングリファレンスカードとしてPDFをダウンロード。',
},
    zh: {
      theme: '入门指南',
  title: '修复本地 LLM 错误 2026：Ollama、LM Studio 和 vLLM 的 10 个常见问题',
  seoTitle: '本地LLM报错修复：OOM、GPU未检测、端口11434故障解决指南2026',
  intro: '本地 LLM 最常见的错误包括内存不足崩溃、GPU 无法检测、CPU 推理速度极慢、API 连接被拒绝和输出乱码。截至 2026 年 4 月，所有 10 个错误都有解决方案——大多数只需要一两个终端命令。本指南涵盖 Ollama（端口 11434）、LM Studio（端口 1234）和 vLLM，包含每个错误的确切命令。',
  metaDescription: '10个常见本地LLM报错修复方案：OOM内存溢出、GPU未检测、端口11434被拒、CPU降速。Ollama与LM Studio修复命令大全。2026年4月。',
  twitterDescription: '10个本地LLM报错修复：OOM、GPU未检测、端口11434。Ollama命令大全。2026年4月。',
  publishDate: '2026-04-04',
  dateModified: '2026-04-16',
  leadAnswerBlock: '**本地 LLM 最常见的错误包括内存不足崩溃、GPU 无法检测、CPU 推理速度极慢、API 连接被拒绝和输出乱码。**',
  audience: '首次在消费级硬件上运行本地 LLM 的初学者',
  readTime: '阅读约9分钟',
  educationalLevel: 'Beginner',
  primaryTerm: '本地 LLM 故障排除',
  toc: [
    { label: '核心要点', anchor: '#key-takeaways' },
    { label: '错误 1：内存不足', anchor: '#error-1-out-of-memory' },
    { label: '错误 2：GPU 无法检测', anchor: '#error-2-gpu-not-detected' },
    { label: '错误 3：推理速度极慢', anchor: '#error-3-very-slow-inference' },
    { label: '错误 4：连接被拒绝', anchor: '#error-4-connection-refused' },
    { label: '错误 5：找不到模型', anchor: '#error-5-model-not-found' },
    { label: '错误 6：模型文件损坏', anchor: '#error-6-corrupted-model-file' },
    { label: '错误 7：CUDA/ROCm 错误', anchor: '#error-7-cuda-errors' },
    { label: '错误 8：输出乱码或重复', anchor: '#error-8-garbled-output' },
    { label: '错误 9：端口已占用', anchor: '#error-9-port-already-in-use' },
    { label: '错误 10：模型在中间停止响应', anchor: '#error-10-model-stops-mid-response' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': '修复本地 LLM 错误 2026：Ollama、LM Studio 和 vLLM 的 10 个常见问题',
    'description': '修复本地 LLM 的内存不足崩溃、GPU 无法检测、连接被拒绝和输出乱码问题。Ollama 和 LM Studio 的确切命令：OLLAMA_GPU_LAYERS、ollama rm、nvidia-smi。',
    'url': 'https://www.promptquorum.com/zh/local-llms/troubleshooting-local-llm-setup',
    'datePublished': '2026-04-04',
    'dateModified': '2026-04-16',
    'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'audience': { '@type': 'Audience', 'audienceType': '首次设置本地 LLM 的开发者和用户' },
    'about': [
      { '@type': 'Thing', 'name': 'Ollama 故障排除' },
      { '@type': 'Thing', 'name': 'LM Studio 错误' },
      { '@type': 'Thing', 'name': '本地 LLM 内存不足' },
      { '@type': 'Thing', 'name': 'OLLAMA_GPU_LAYERS' },
      { '@type': 'Thing', 'name': 'GPU 无法检测本地 LLM' },
    ],
    'proficiencyLevel': 'Beginner',
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
    },
    'educationalLevel': 'Beginner',
        'proficiencyLevel': 'Beginner',
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': '调试本地 LLM 设置错误',
    'step': [
      { '@type': 'HowToStep', 'name': '修复内存不足错误', 'text': '切换到更小的量化（Q4_K_M）或更小的模型。使用 free -h 检查 RAM。' },
      { '@type': 'HowToStep', 'name': '启用 GPU 检测', 'text': '更新驱动程序（NVIDIA 525+），设置 OLLAMA_GPU_LAYERS=999，运行 nvidia-smi 验证。' },
      { '@type': 'HowToStep', 'name': '加快缓慢的推理', 'text': '使用 ollama ps 确认 GPU 活动，减小模型大小或使用 Q4_K_M 量化。' },
      { '@type': 'HowToStep', 'name': '修复连接被拒绝', 'text': '使用 ollama serve 启动 Ollama 或重启 systemd 服务。使用 curl localhost:11434 验证。' },
      { '@type': 'HowToStep', 'name': '解决找不到模型的问题', 'text': '使用 ollama list 列出模型，使用 ollama pull 拉取缺失的模型，检查确切的模型名称/标签。' },
    ]
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '本地 LLM 中 OOM 错误的原因是什么？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'OOM（内存不足）错误发生在模型大小超过可用 RAM 或 VRAM 时。解决方案：切换到较小的模型（`ollama run llama3.2:3b`需要 ~2.5 GB）或使用较低的量化级别。在拉取超过 7B 的模型之前，运行 `free -h`（Linux/macOS）检查可用 RAM。' }
      },
      {
        '@type': 'Question',
        'name': '为什么 Ollama 无法检测到我的 GPU？',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'NVIDIA：安装驱动程序 525+ 和 CUDA Toolkit 11.3+，然后重启 Ollama。AMD on Linux：安装 ROCm 5.7+。用 `nvidia-smi`（NVIDIA）或 `rocm-smi`（AMD）验证检测。Apple Silicon：Ollama 默认使用 Metal——无需配置。设置 OLLAMA_GPU_LAYERS=999 强制完整 GPU 卸载。' }
      },
      {
        '@type': 'Question',
        'name': '为什么运行 Ollama 时端口 11434 被拒绝？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '端口 11434 被拒绝是因为 Ollama 服务器未运行。用 `ollama serve` 启动它，然后用 `curl http://localhost:11434` 验证——预期响应是"Ollama is running"。在 Linux 上，重启 systemd 服务：`systemctl restart ollama`。' }
      },
      {
        '@type': 'Question',
        'name': '为什么我的本地 LLM 在 CPU 上运行而不是 GPU？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '如果 GPU 未检测到或 VRAM 不足，Ollama 会回退到 CPU。在启动 Ollama 之前设置环境变量 `OLLAMA_GPU_LAYERS=999` 以强制最大 GPU 卸载。首先用 `nvidia-smi` 检查 GPU 可见性。如果整个模型 VRAM 不足，Ollama 会自动在 GPU 和 CPU 之间分割层。' }
      },
      {
        '@type': 'Question',
        'name': '本地 LLM 部署的最常见错误是什么？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '10 个最常见的本地 LLM 错误是：(1) OOM/内存不足，(2) GPU 未检测，(3) 端口 11434 被拒，(4) CPU 缓慢回退，(5) 模型未找到，(6) 部分下载损坏，(7) 生成早期停止，(8) CUDA 版本不匹配，(9) 上下文长度超出，(10) 错误的模型标签。每个错误在 Ollama 和 LM Studio 中都有特定的修复命令。' }
      },
      {
        '@type': 'Question',
        'name': '如何修复损坏的 Ollama 模型下载？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '删除缓存的模型并重新拉取：`ollama rm <模型名>`然后 `ollama pull <模型名>`。损坏发生在拉取被中断时。Ollama 不总是自动检测部分下载。' }
      },
      {
        '@type': 'Question',
        'name': '如何检查 Ollama 是否在使用我的 GPU？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '在加载模型时运行 `ollama ps`——输出显示哪些层在 GPU vs CPU 上。或者用 `nvidia-smi -l 1` 实时监控 GPU 利用率（每秒更新）。如果 GPU 利用率保持在 0%，Ollama 仅在 CPU 上运行——检查驱动程序安装和 CUDA 兼容性。' }
      },
      {
        '@type': 'Question',
        'name': '为什么 LLM 生成提前停止？',
        'acceptedAnswer': { '@type': 'Answer', 'text': '早期停止通常由 Modelfile 中的停止令牌引起。检查系统提示和模板中的意外停止序列。还要验证 `num_predict` 参数——如果设置得太低，Ollama 会在该令牌计数时截断输出。默认值为 -1（无限制）。' }
      }
    ]
  },
  sections: {
    tldr: {
      id: 'key-takeaways',
      isTldr: true,
      items: [
        '内存不足：切换到较小的量化（Q4_K_M → Q3_K_S）或较小的模型。',
        'NVIDIA 上 GPU 无法检测：在 Linux 上将驱动程序更新到 525+，在 Windows 上更新到 452+。运行 `nvidia-smi` 确认。',
        '推理速度极慢：您仅在 CPU 上运行。使用 `OLLAMA_GPU_LAYERS` 环境变量在 Ollama 中启用 GPU 卸载。',
        '连接被拒绝：Ollama 未运行。使用 `ollama serve` 启动它或重启服务。',
        '输出乱码：提示模板错误。使用模型的 instruct 变体，而不是基础变体。',
      ],
      image: '/images/troubleshooting-error-symptoms-quick-ref-en.svg',
      imageCaption: '10 个最常见的本地 LLM 错误及症状和修复——Ollama、LM Studio 和 vLLM 设置的快速参考（2026 年 4 月）。',
    },
    error1: {
      id: 'error-1-out-of-memory',
      title: '错误 1："内存不足" / 内存不足崩溃',
      content: '**内存不足错误意味着模型需要的 RAM 超过可用 RAM——不是硬件故障。** 这是首次使用者最常见的错误。请参阅 [LLM 量化解释](/zh/local-llms/llm-quantization-explained) 了解量化如何减少 RAM 需求的背景。',
      items: [
        '**检查可用 RAM**：在 macOS/Linux 上运行 `free -h`，在 Windows 上打开任务管理器→性能→内存。',
        '**切换到更小的量化**：将 `Q8_0` 或 `Q5_K_M` 替换为 `Q4_K_M`。对于 Ollama：`ollama run llama3.2-instruct-q4_K_M`。',
        '**加载模型前关闭后台应用**——浏览器和其他应用消耗 RAM，减少了模型可用的内存。',
        '**切换到较小的模型**：如果 8B 在 8 GB RAM 上失败，尝试 `llama3.2:3b`（仅需约 2.5 GB）。',
      ],
      image: '/images/troubleshooting-ram-by-model-size-en.svg',
      imageCaption: '按模型大小的本地 LLM RAM 需求：llama3.2 1B–3B 适合 8 GB，7B–8B 模型需要 16 GB，70B 模型在 Q4_K_M 量化下需要 64 GB。',
    },
    error1Code: {
      title: '在 Linux / macOS 上检查可用 RAM',
      codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# macOS 上更易读\ntop -l 1 | grep "PhysMem"',
      codeLanguage: 'bash',
    },
    error2: {
      id: 'error-2-gpu-not-detected',
      title: '错误 2：GPU 未被使用（仅在 CPU 上运行）',
      content: [
        '**GPU 未被使用意味着 LLM 运行速度比预期慢 5–10 倍——在其他任何事情之前检查驱动程序安装。** 验证您的 GPU 对系统可见：',
      ],
      codeBlock: '# NVIDIA——应该显示 GPU 名称和驱动程序版本\nnvidia-smi\n\n# Linux 上的 AMD\nrocm-smi\n\n# macOS——检查 Metal 是否可用\nsystem_profiler SPDisplaysDataType | grep "Metal"',
      codeLanguage: 'bash',
      image: '/images/troubleshooting-gpu-detection-en.svg',
      imageCaption: '仅 CPU 与 GPU 活动：Ollama 在 CPU 上给出 2–8 tok/s；GPU 模式给出 30–120 tok/s。使用 ollama ps 或 nvidia-smi 检查。',
    },
    error2Fixes: {
      title: '如何在 Ollama 中启用 GPU？',
      items: [
        '**Linux 上的 NVIDIA**：安装 NVIDIA 驱动程序 525+ 和 CUDA 工具包 11.3+。Ollama 会在重启时自动检测 CUDA。',
        '**Windows 上的 NVIDIA**：确保驱动程序版本为 452.39 或更高。Ollama 通过 Windows 安装程序自动安装 CUDA 支持。',
        '**Linux 上的 AMD**：安装 ROCm 5.7+。如果检测失败，为 RX 6000 系列卡设置 `HSA_OVERRIDE_GFX_VERSION=11.0.0`。',
        '**Apple Silicon**：Ollama 默认使用 Metal——无需配置。在启动模型后使用 `ollama ps` 确认；GPU 层出现在输出中。',
      ],
    },
    error3: {
      id: 'error-3-very-slow-inference',
      title: '错误 3：推理速度极慢（低于 5 Token/秒）',
      content: '**低于 5 token/秒意味着模型仅在 CPU 上运行或模型对可用 VRAM 来说过大。** 7B 模型在 GPU 上生成 30–80 tok/s；同一模型在 CPU 上生成 3–10 tok/s。',
      items: [
        '**确认 GPU 是否活动**：在加载模型时运行 `ollama ps`。输出显示有多少层在 GPU 上，有多少在 CPU 上。',
        '**减小模型大小**：CPU 上的 13B 模型生成 3–6 tok/s。切换到 7B 会使速度翻倍；切换到 3B 会使速度翻四倍。',
        '**增加 Ollama 中的 GPU 层**：设置 `OLLAMA_GPU_LAYERS=999` 以将所有层推送到 GPU（Ollama 会限制为 VRAM 中适合的）。',
        '**使用更快的量化**：Q4_K_M 是保持可接受质量的最快量化。Q8_0 质量更高，但速度慢约 30%。',
      ],
    },
    error3Code: {
      title: '在 Ollama 中设置 GPU 层',
      codeBlock: '# 在启动 Ollama 之前设置环境变量\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# 或在 Modelfile 中\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
      codeLanguage: 'bash',
    },
    error4: {
      id: 'error-4-connection-refused',
      title: '错误 4：调用 API 时"连接被拒绝"',
      content: '**连接被拒绝意味着 Ollama 未运行——`localhost:11434` 处的 API 仅在服务活动时响应。** 在进行 API 调用之前启动它。',
      codeBlock: '# 手动启动 Ollama\nollama serve\n\n# 在 Linux 上——重启 systemd 服务\nsystemctl restart ollama\n\n# 验证它正在运行\ncurl http://localhost:11434\n# 预期："Ollama is running"',
      codeLanguage: 'bash',
    },
    error5: {
      id: 'error-5-model-not-found',
      title: '错误 5："找不到模型"错误',
      content: [
        '**"找不到模型"意味着您命令中的模型名称与任何已下载的模型不匹配。** Ollama 中的模型名称区分大小写，并包括版本标签。',
      ],
      codeBlock: '# 列出所有已下载的模型\nollama list\n\n# 如果缺少模型则拉取\nollama pull llama3.2\n\n# 检查确切的模型名称——标签重要\n# "llama3.2" 和 "llama3.2:3b" 是不同的条目',
      codeLanguage: 'bash',
    },
    error6: {
      id: 'error-6-corrupted-model-file',
      title: '错误 6：模型文件损坏',
      content: '**损坏的模型文件是由下载中断导致的——删除并重新拉取以修复。** Ollama 不总是自动检测部分下载。',
      codeBlock: '# 移除损坏的模型\nollama rm llama3.2\n\n# 重新拉取\nollama pull llama3.2\n\n# 对于 LM Studio：手动删除模型文件\n# 默认位置：~/.cache/lm-studio/models/',
      codeLanguage: 'bash',
    },
    error6lmstudio: {
      id: 'error-6b-lm-studio-model-resolution',
      title: '错误 6b：LM Studio 中的"无法解析模型"',
      content: '**"无法解析模型 lmstudio-community/..." 意味着 LM Studio 在其注册表中找不到该模型。** 这通常发生在从 Hugging Face 上的 `lmstudio-community` 下载模型但注册表引用已更改时。LM Studio 使用的是不再与可用模型文件匹配的缓存注册表条目。',
      items: [
        '**打开 LM Studio→My Models 选项卡→单击失败模型上的三点菜单→选择"Delete model"**（保留文件，删除注册表）',
        '**在模型浏览器中搜索相同模型并重新下载**——LM Studio 会重新注册它',
        '**替代方案：退出 LM Studio，导航到 `~/.cache/lm-studio/models/`，删除特定的模型文件夹，然后重新下载**',
      ],
      codeBlock: '# 手动清除 LM Studio 模型缓存（macOS/Linux）\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
      codeLanguage: 'bash',
    },
    error7: {
      id: 'error-7-cuda-errors',
      title: '错误 7：CUDA / ROCm 初始化错误',
      content: '**CUDA 和 ROCm 错误意味着驱动程序/库版本不匹配——将驱动程序更新到所需的最低版本。**',
      items: [
        '**"CUDA 驱动程序版本不足"**：更新 NVIDIA 驱动程序。llama.cpp 的最低版本是 CUDA 11.3 / 驱动程序 450.80。',
        '**"没有可用于执行的内核映像"**：您的 GPU 架构不受支持。GTX 900 系列（Maxwell）及更旧的不受最近 CUDA 构建支持。',
        '**AMD ROCm"HSA_STATUS_ERROR_INVALID_ISA"**：在启动 Ollama 之前设置 `HSA_OVERRIDE_GFX_VERSION=10.3.0`（对于 RX 6000）或 `11.0.0`（对于 RX 7000）。',
        '**检查 CUDA 版本**：运行 `nvcc --version` 或 `nvidia-smi | grep CUDA`。',
      ],
    },
    error8: {
      id: 'error-8-garbled-output',
      title: '错误 8：输出乱码、重复或无意义',
      content: [
        '**输出乱码几乎总是意味着您使用的是基础模型而不是 instruct/chat 变体。** 基础模型生成原始文本补全，而不是对问题的答案。',
        '基础模型（例如 `llama3.1:8b`）不是针对对话微调的，当用问题提示时会生成看起来像乱码的原始补全。始终使用 instruct 变体：`llama3.1:8b-instruct`。请参阅 [如何安装 LM Studio](/zh/local-llms/how-to-install-lm-studio) 了解基于 GUI 的方法来切换模型变体。',
        '在 Ollama 中，大多数模型的默认标签已经指向 instruct 变体。如果您从 Hugging Face 手动下载，确认文件名包括"Instruct"或"chat"。',
      ],
    },
    error9: {
      id: 'error-9-port-already-in-use',
      title: '错误 9："地址已在使用"——端口冲突',
      content: '**"地址已在使用"意味着另一个进程占用了端口 11434（Ollama）或 1234（LM Studio）。** 查找并杀死冲突的进程。',
      codeBlock: '# 查找什么在使用端口 11434（Ollama）\nlsof -i :11434\n\n# 按 PID 杀死它\nkill -9 <PID>\n\n# 或更改 Ollama 的端口\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
      codeLanguage: 'bash',
    },
    error10: {
      id: 'error-10-model-stops-mid-response',
      title: '错误 10：模型在响应中途停止生成',
      content: '**中途停止是由达到上下文长度限制或 `num_predict` 设置过低引起的。** 许多配置中的默认 `num_predict` 是 128 个 token——仅够 1–2 句话。',
      items: [
        '**增加 num_predict**：此参数设置要生成的最大 token 数。默认值通常是 128。增加它：在 Ollama 中，将 `PARAMETER num_predict 2048` 添加到 Modelfile。',
        '**检查上下文窗口**：如果您的对话很长，模型可能达到了其上下文限制。开始新会话或使用具有更大上下文窗口的模型（Llama 3.2 3B 支持 128K）。',
        '**检查停止 token**：某些 Modelfile 包括提前终止生成的停止序列。查看系统提示和模板以查找意外的停止模式。',
      ],
    },
    regionalContext: {
      id: 'regional-context',
      title: '按地区划分的本地 LLM 故障排除',
      content: [
        '**中国（数据安全法）**：根据中国 2021 年《数据安全法》部署时，使用 Ollama 和 Qwen3 7B 满足数据本地化要求。个人数据和敏感数据需要本地部署。GPU 驱动程序安装遵循与 Linux 相同的流程。对于中国制造的 GPU 卡（Biren BR100），ROCm 支持需要自定义 ROCm 构建。在阿里云、腾讯云或华为云上部署时，选择中国地区的实例以确保数据驻留合规性。',
        '**亚太地区（数据跨境）**：数据跨境限制通常要求在当地数据中心运行推理。Ollama 和 LM Studio 在本地服务器上运行时避免了跨境数据传输。对于医疗、金融或法律数据，请咨询当地合规专家。',
        '**企业部署**：大型企业（银行、医院、律师事务所）处理受管制数据应使用经过审计的本地 LLM 部署。Ollama 不保存日志的事实减少了监管负担。使用强身份验证和磁盘上的模型加密。对于生产环境，在联想 ThinkPad 或华为 MateBook 上运行 13B 模型需要 32 GB RAM 和配置的 CUDA 驱动程序。',
      ],
    },
    relatedReading: {
      title: '相关阅读',
      items: [
        '[LLM 量化解释](/zh/local-llms/llm-quantization-explained) —— Q4_K_M 为什么是默认值以及量化如何影响 RAM',
        '[本地 LLM 硬件指南 2026](/zh/local-llms/local-llm-hardware-guide-2026) —— 本地运行 7B–70B 模型的硬件需求',
        '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) —— 安装和设置指南',
        '[Ollama vs LM Studio](/zh/local-llms/ollama-vs-lm-studio) —— 两个最流行的本地 LLM 工具的比较',
        '[如何在笔记本电脑上运行本地 LLM](/zh/local-llms/local-llm-on-laptop) —— 笔记本电脑特定的热管理和电池优化',
        '[最佳初学者本地 LLM 模型](/zh/local-llms/best-beginner-local-llm-models) —— 8 GB RAM 的模型建议',
        '[2026年最佳编程本地LLM对比](/zh/local-llms/best-local-llms-for-coding) — Qwen3-Coder与DeepSeek基准测试',
      ],
    },
    moreTroubleshooting: {
      title: '在哪里寻找更多帮助',
      content: '对于笔记本电脑上的硬件特定问题（热节流、电池耗尽），请参阅 [如何在笔记本电脑上运行本地 LLM](/zh/local-llms/local-llm-on-laptop)。对于安全和隐私配置问题，请参阅 [本地 LLM 安全和隐私检查清单](/zh/local-llms/local-llm-security-privacy-checklist)。Ollama GitHub 问题页面（github.com/ollama/ollama/issues）和 r/LocalLLaMA subreddit 是特定于模型的错误的最活跃社区资源。',
    },
    commonMistakes: {
      title: '本地 LLM 故障排除中的常见错误',
      items: [
        '**将 OOM 错误与硬件故障混淆**——错误意味着 RAM 对模型来说太小，而不是硬件已损坏。修复：使用 Q4_K_M 量化或较小的模型。',
        '**不检查系统负载**——当其他应用使用 CPU/GPU 时，推理速度会显著下降。在基准测试前关闭浏览器、视频播放器和后台进程。',
        '**忽视驱动程序版本不兼容**——NVIDIA CUDA 需要特定的驱动程序版本（每个 CUDA 版本）。检查 `nvidia-smi` 输出；CUDA 11.x 的驱动程序版本必须 ≥450.80。',
        '**在 Ollama 中使用错误的模型名称**——`llama3.2` 和 `llama3.2:3b` 是不同的 Ollama 标签。运行 `ollama list` 查看已下载模型的确切名称。',
        '**驱动程序更新后不重启 Ollama**——Ollama 在启动时检测 GPU。更新 NVIDIA 或 ROCm 驱动程序后，完全重启 Ollama（`ollama serve`）以重新检测 GPU。',
      ],
      image: '/images/troubleshooting-debug-steps-zh.svg',
      imageCaption: '5 步本地 LLM 调试过程：检查 RAM→检查 GPU→检查服务器→检查模型→检查输出质量。在第一个失败步骤处停止。',
    },
    sources: {
      id: 'sources',
      title: '来源',
      items: [
        'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ —— 按版本的官方 CUDA 驱动程序版本需求。',
        'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md —— 常见错误的官方 Ollama 文档。',
        'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ —— 官方 AMD ROCm 安装和 Linux GPU 支持。',
      ],
    },
  },
  gammaEmbedUrl: '/presentations/troubleshooting-local-llm-setup-static.html',
  gammaDescription: '以下的演示文稿涵盖：本地 LLM 设置中最常见的 10 个错误（内存不足、GPU 未检测到、推理缓慢、连接被拒绝、输出乱码），Q4_K_M 和 Q8_0 量化下 3B–14B 模型的内存要求，5 步调试流程以及每个修复的 Ollama 命令。下载 PDF 作为本地 LLM 故障排除参考卡。',
},
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Getting Started',
      title: '2026년 로컬 LLM 오류 해결: Ollama, LM Studio, vLLM의 10가지 주요 문제',
      seoTitle: '로컬 LLM 오류 수정: OOM, GPU 감지, 포트 11434',
      intro: '로컬 LLM에서 가장 자주 발생하는 오류는 메모리 부족 충돌, GPU 미감지, 극도로 느린 CPU 추론, API 연결 거부, 그리고 비정상 출력입니다. 2026년 4월 기준, 이 10가지 오류 모두에 대한 해결책이 있으며, 대부분 터미널 명령 한두 개만으로 해결됩니다. 이 가이드는 Ollama(포트 11434), LM Studio(포트 1234), vLLM을 대상으로 각 오류에 대한 정확한 명령을 제공합니다.',
      metaDescription: '10가지 로컬 LLM 오류 해결: OOM 충돌, GPU 미감지, 포트 11434 거부, 느린 CPU 폴백. Ollama + LM Studio 수정 명령. 2026년 4월.',
      twitterDescription: '10가지 로컬 LLM 오류 해결: OOM, GPU 미감지, 포트 11434 거부, CPU 폴백. Ollama + LM Studio 수정 명령. 2026년 4월.',
      leadAnswerBlock: '로컬 LLM에서 가장 자주 발생하는 오류는 메모리 부족 충돌, GPU 미감지, 극도로 느린 CPU 추론, API 연결 거부, 그리고 비정상 출력입니다.',
      dateModified: '2026-04-16',
      publishDate: '2026-04-04',
      audience: '소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
      readTime: '9분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: '로컬 LLM 문제 해결',
      toc: [
        { label: '요약', anchor: '#key-takeaways' },
        { label: '오류 1: 메모리 부족', anchor: '#error-1-out-of-memory' },
        { label: '오류 2: GPU 미감지', anchor: '#error-2-gpu-not-detected' },
        { label: '오류 3: 매우 느린 추론', anchor: '#error-3-very-slow-inference' },
        { label: '오류 4: 연결 거부', anchor: '#error-4-connection-refused' },
        { label: '오류 5: 모델을 찾을 수 없음', anchor: '#error-5-model-not-found' },
        { label: '오류 6: 손상된 모델 파일', anchor: '#error-6-corrupted-model-file' },
        { label: '오류 7: CUDA / ROCm 오류', anchor: '#error-7-cuda-errors' },
        { label: '오류 8: 비정상 또는 반복 출력', anchor: '#error-8-garbled-output' },
        { label: '오류 9: 포트 이미 사용 중', anchor: '#error-9-port-already-in-use' },
        { label: '오류 10: 응답 도중 모델 중단', anchor: '#error-10-model-stops-mid-response' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            '메모리 부족: 더 작은 양자화(Q4_K_M → Q3_K_S)로 전환하거나 더 작은 모델을 사용하십시오.',
            'NVIDIA GPU 미감지: Linux에서 드라이버를 525+로, Windows에서 452+로 업데이트하십시오. `nvidia-smi`로 확인하십시오.',
            '극도로 느린 추론: CPU 전용으로 실행 중입니다. `OLLAMA_GPU_LAYERS` 환경 변수를 사용하여 Ollama에서 GPU 오프로딩을 활성화하십시오.',
            '연결 거부: Ollama가 실행 중이 아닙니다. `ollama serve`로 시작하거나 서비스를 재시작하십시오.',
            '비정상 출력: 잘못된 프롬프트 템플릿입니다. 기본 변형이 아닌 Instruct 변형 모델을 사용하십시오.',
          ],
          image: '/images/troubleshooting-error-symptoms-quick-ref-en.svg',
          imageCaption: '10가지 주요 로컬 LLM 오류와 증상 및 해결책 — Ollama, LM Studio, vLLM 설정에 대한 빠른 참조 (2026년 4월).',
        },
        error1: {
          id: 'error-1-out-of-memory',
          title: '오류 1: "메모리 부족" / OOM 충돌',
          content: '**메모리 부족 오류는 모델에 사용 가능한 것보다 더 많은 RAM이 필요하다는 의미이지 하드웨어 오류가 아닙니다.** 처음 사용하는 분들에게 가장 흔한 오류입니다. 양자화가 RAM 요구 사항을 줄이는 방법에 대한 배경은 [LLM 양자화 설명](/local-llms/llm-quantization-explained)을 참고하십시오.',
          items: [
            '**사용 가능한 RAM 확인**: macOS/Linux에서 `free -h`를 실행하거나, Windows에서 작업 관리자 → 성능 → 메모리를 여십시오.',
            '**더 작은 양자화로 전환**: `Q8_0` 또는 `Q5_K_M`을 `Q4_K_M`으로 교체하십시오. Ollama에서는 `ollama run llama3.2-instruct-q4_K_M`을 실행하십시오.',
            '**모델 로드 전 백그라운드 애플리케이션 종료** — 브라우저와 다른 앱이 RAM을 소비하여 모델에서 사용 가능한 메모리를 줄입니다.',
            '**더 작은 모델로 전환**: 8GB RAM에서 8B 모델이 실패하면 `llama3.2:3b`를 시도하십시오 (약 2.5GB만 필요).',
          ],
          image: '/images/troubleshooting-ram-by-model-size-en.svg',
          imageCaption: '모델 크기별 로컬 LLM RAM 요구 사항: llama3.2 1B–3B는 8GB에 적합하고, 7B–8B 모델은 16GB가 필요하며, 70B 모델은 Q4_K_M 양자화에서 64GB가 필요합니다.',
        },
        error1Code: {
          title: 'Linux / macOS에서 사용 가능한 RAM 확인',
          codeBlock: '# Linux\nfree -h\n\n# macOS\nvm_stat | grep "Pages free"\n\n# macOS에서 더 읽기 쉽게\ntop -l 1 | grep "PhysMem"',
          codeLanguage: 'bash',
        },
        error2: {
          id: 'error-2-gpu-not-detected',
          title: '오류 2: GPU가 사용되지 않음 (CPU 전용 실행)',
          content: [
            '**GPU가 사용되지 않으면 LLM이 예상보다 5~10배 느리게 실행됩니다 — 무엇보다 먼저 드라이버 설치를 확인하십시오.** GPU가 시스템에서 인식되는지 확인하십시오:',
          ],
          codeBlock: '# NVIDIA — GPU 이름과 드라이버 버전이 표시되어야 함\nnvidia-smi\n\n# Linux의 AMD\nrocm-smi\n\n# macOS — Metal 사용 가능 여부 확인\nsystem_profiler SPDisplaysDataType | grep "Metal"',
          codeLanguage: 'bash',
          image: '/images/troubleshooting-gpu-detection-en.svg',
          imageCaption: 'CPU 전용 vs GPU 활성: CPU의 Ollama는 2–8 tok/s를 제공하고, GPU 모드는 30–120 tok/s를 제공합니다. ollama ps 또는 nvidia-smi로 확인하십시오.',
        },
        error2Fixes: {
          title: 'Ollama에서 GPU를 활성화하는 방법은?',
          items: [
            '**Linux의 NVIDIA**: NVIDIA 드라이버 525+ 및 CUDA Toolkit 11.3+를 설치하십시오. Ollama는 재시작 시 CUDA를 자동으로 감지합니다.',
            '**Windows의 NVIDIA**: 드라이버 버전이 452.39 이상인지 확인하십시오. Ollama는 Windows 설치 프로그램을 통해 자동으로 CUDA 지원을 설치합니다.',
            '**Linux의 AMD**: ROCm 5.7+를 설치하십시오. 감지에 실패하면 RX 6000 시리즈 카드에 `HSA_OVERRIDE_GFX_VERSION=11.0.0`을 설정하십시오.',
            '**Apple Silicon**: Ollama는 기본적으로 Metal을 사용합니다 — 별도 설정이 필요하지 않습니다. 모델 로드 후 `ollama ps`로 확인하십시오. 출력에 GPU 레이어가 표시됩니다.',
          ],
        },
        error3: {
          id: 'error-3-very-slow-inference',
          title: '오류 3: 추론이 매우 느림 (초당 5 토큰 미만)',
          content: '**초당 5 토큰 미만은 모델이 CPU 전용으로 실행 중이거나 사용 가능한 VRAM에 비해 모델이 너무 크다는 의미입니다.** GPU에서 7B 모델은 30–80 tok/s를 생성하고, 동일한 모델이 CPU에서는 3–10 tok/s를 생성합니다.',
          items: [
            '**GPU 활성 여부 확인**: 모델이 로드된 상태에서 `ollama ps`를 실행하십시오. 출력에 GPU 대 CPU의 레이어 수가 표시됩니다.',
            '**모델 크기 줄이기**: CPU에서 13B 모델은 3–6 tok/s를 생성합니다. 7B로 전환하면 속도가 두 배, 3B로 전환하면 네 배가 됩니다.',
            '**Ollama에서 GPU 레이어 늘리기**: `OLLAMA_GPU_LAYERS=999`를 설정하여 모든 레이어를 GPU로 보내십시오 (Ollama는 VRAM에 맞는 수준으로 제한합니다).',
            '**더 빠른 양자화 사용**: Q4_K_M은 허용 가능한 품질을 유지하는 가장 빠른 양자화입니다. Q8_0은 품질이 더 높지만 약 30% 느립니다.',
          ],
        },
        error3Code: {
          title: 'Ollama에서 GPU 레이어 설정',
          codeBlock: '# Ollama 시작 전 환경 변수 설정\nexport OLLAMA_GPU_LAYERS=999\nollama serve\n\n# 또는 Modelfile에서\nFROM llama3.1:8b\nPARAMETER num_gpu 999',
          codeLanguage: 'bash',
        },
        error4: {
          id: 'error-4-connection-refused',
          title: '오류 4: API 호출 시 "연결 거부"',
          content: '**연결 거부는 Ollama가 실행 중이 아님을 의미합니다 — `localhost:11434`의 API는 서비스가 활성 상태일 때만 응답합니다.** API 호출 전에 서버를 시작하십시오.',
          codeBlock: '# Ollama 수동 시작\nollama serve\n\n# Linux — systemd 서비스 재시작\nsystemctl restart ollama\n\n# 실행 중인지 확인\ncurl http://localhost:11434\n# 예상 결과: "Ollama is running"',
          codeLanguage: 'bash',
        },
        error5: {
          id: 'error-5-model-not-found',
          title: '오류 5: "모델을 찾을 수 없음" 오류',
          content: [
            '**"모델을 찾을 수 없음"은 명령의 모델 이름이 다운로드된 모델과 일치하지 않음을 의미합니다.** Ollama의 모델 이름은 대소문자를 구분하며 버전 태그가 포함됩니다.',
          ],
          codeBlock: '# 다운로드된 모든 모델 나열\nollama list\n\n# 모델이 없는 경우 가져오기\nollama pull llama3.2\n\n# 정확한 모델 이름 확인 — 태그가 중요함\n# "llama3.2"와 "llama3.2:3b"는 다른 항목',
          codeLanguage: 'bash',
        },
        error6: {
          id: 'error-6-corrupted-model-file',
          title: '오류 6: 손상된 모델 파일',
          content: '**손상된 모델 파일은 중단된 다운로드로 인해 발생합니다 — 삭제 후 다시 가져와서 해결하십시오.** Ollama가 항상 부분 다운로드를 자동으로 감지하지는 않습니다.',
          codeBlock: '# 손상된 모델 제거\nollama rm llama3.2\n\n# 다시 가져오기\nollama pull llama3.2\n\n# LM Studio의 경우: 모델 파일을 수동으로 삭제\n# 기본 위치: ~/.cache/lm-studio/models/',
          codeLanguage: 'bash',
        },
        error6lmstudio: {
          id: 'error-6b-lm-studio-model-resolution',
          title: '오류 6b: LM Studio에서 "모델 해석 실패"',
          content: '**"Failed to resolve model lmstudio-community/..."는 LM Studio가 레지스트리에서 모델을 찾을 수 없음을 의미합니다.** 이는 Hugging Face의 `lmstudio-community`에서 모델을 다운로드했지만 레지스트리 참조가 변경된 경우에 발생합니다. LM Studio가 더 이상 사용 가능한 모델 파일과 일치하지 않는 캐시된 레지스트리 항목을 사용하고 있습니다.',
          items: [
            '**LM Studio 열기 → My Models 탭 → 실패한 모델의 점 세 개 메뉴 클릭 → "모델 삭제" 선택** (파일은 유지하고 레지스트리에서만 제거)',
            '**모델 브라우저에서 동일한 모델을 검색하여 다시 다운로드** — LM Studio가 다시 등록합니다',
            '**대안: LM Studio 종료 → `~/.cache/lm-studio/models/`로 이동 → 특정 모델 폴더 삭제 → 다시 다운로드**',
          ],
          codeBlock: '# LM Studio 모델 캐시 수동 삭제 (macOS/Linux)\nrm -rf ~/.cache/lm-studio/models/lmstudio-community/<model-name>',
          codeLanguage: 'bash',
        },
        error7: {
          id: 'error-7-cuda-errors',
          title: '오류 7: CUDA / ROCm 초기화 오류',
          content: '**CUDA 및 ROCm 오류는 드라이버/라이브러리 버전 불일치를 의미합니다 — 드라이버를 필요한 최소 버전으로 업데이트하십시오.**',
          items: [
            '**"CUDA 드라이버 버전이 충분하지 않음"**: NVIDIA 드라이버를 업데이트하십시오. llama.cpp의 최소 요구 사항은 CUDA 11.3 / 드라이버 450.80입니다.',
            '**"실행 가능한 커널 이미지 없음"**: GPU 아키텍처가 지원되지 않습니다. GTX 900 시리즈(Maxwell) 이하는 최신 CUDA 빌드에서 지원되지 않습니다.',
            '**AMD ROCm "HSA_STATUS_ERROR_INVALID_ISA"**: Ollama 시작 전 `HSA_OVERRIDE_GFX_VERSION=10.3.0`(RX 6000의 경우) 또는 `11.0.0`(RX 7000의 경우)을 설정하십시오.',
            '**CUDA 버전 확인**: `nvcc --version` 또는 `nvidia-smi | grep CUDA`를 실행하십시오.',
          ],
        },
        error8: {
          id: 'error-8-garbled-output',
          title: '오류 8: 비정상, 반복, 또는 무의미한 출력',
          content: [
            '**비정상 출력은 거의 항상 Instruct/채팅 변형 대신 기본 모델을 사용하고 있음을 의미합니다.** 기본 모델은 질문에 대한 답변이 아닌 원시 텍스트 완성을 생성합니다.',
            '기본 모델(예: `llama3.1:8b`)은 대화용으로 파인튜닝되지 않았으며, 질문으로 프롬프트하면 횡설수설처럼 보이는 원시 완성을 생성합니다. 항상 Instruct 변형을 사용하십시오: `llama3.1:8b-instruct`. 모델 변형을 전환하는 GUI 기반 방법은 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)을 참고하십시오.',
            'Ollama에서 대부분의 모델에 대한 기본 태그는 이미 Instruct 변형을 가리킵니다. Hugging Face에서 수동으로 다운로드한 경우 파일 이름에 "Instruct" 또는 "chat"이 포함되어 있는지 확인하십시오.',
          ],
        },
        error9: {
          id: 'error-9-port-already-in-use',
          title: '오류 9: "주소가 이미 사용 중" — 포트 충돌',
          content: '**"주소가 이미 사용 중"은 다른 프로세스가 포트 11434(Ollama) 또는 1234(LM Studio)를 점유하고 있음을 의미합니다.** 충돌하는 프로세스를 찾아 종료하십시오.',
          codeBlock: '# 포트 11434(Ollama)를 사용 중인 프로세스 찾기\nlsof -i :11434\n\n# PID로 종료\nkill -9 <PID>\n\n# 또는 Ollama 포트 변경\nexport OLLAMA_HOST=0.0.0.0:11435\nollama serve',
          codeLanguage: 'bash',
        },
        error10: {
          id: 'error-10-model-stops-mid-response',
          title: '오류 10: 응답 도중 모델 생성 중단',
          content: '**응답 도중 중단은 컨텍스트 길이 한계에 도달하거나 `num_predict`가 너무 낮게 설정되어 발생합니다.** 많은 설정에서 기본 `num_predict`는 128 토큰으로, 1~2 문장에 불과합니다.',
          items: [
            '**num_predict 늘리기**: 이 매개변수는 생성할 최대 토큰 수를 설정합니다. 기본값은 종종 128입니다. 늘리는 방법: Ollama에서 Modelfile에 `PARAMETER num_predict 2048`을 추가하십시오.',
            '**컨텍스트 창 확인**: 대화가 매우 길면 모델이 컨텍스트 한계에 도달할 수 있습니다. 새 세션을 시작하거나 더 큰 컨텍스트 창을 가진 모델을 사용하십시오 (Llama 3.2 3B는 128K를 지원합니다).',
            '**중지 토큰 확인**: 일부 Modelfile에는 생성을 일찍 종료하는 중지 시퀀스가 포함되어 있습니다. 예상치 못한 중지 패턴을 위해 시스템 프롬프트와 템플릿을 확인하십시오.',
          ],
        },
        relatedReading: {
          title: '관련 자료',
          items: [
            '[LLM 양자화 설명](/local-llms/llm-quantization-explained) — Q4_K_M이 기본값인 이유와 양자화가 RAM에 미치는 영향',
            '[로컬 LLM 하드웨어 가이드 2026](/local-llms/local-llm-hardware-guide-2026) — 7B~70B 모델 실행을 위한 하드웨어 요구 사항',
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) — 설치 및 설정 가이드',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) — 가장 인기 있는 두 로컬 LLM 도구 비교',
            '[노트북에서 로컬 LLM 실행하기](/local-llms/local-llm-on-laptop) — 노트북 특화 열 및 배터리 최적화',
            '[초보자를 위한 최고의 로컬 LLM 모델](/local-llms/best-beginner-local-llm-models) — 8GB RAM에 대한 모델 추천',
            '[2026년 코딩용 최고의 로컬 LLM](/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek 벤치마크 비교',
          ],
        },
        moreTroubleshooting: {
          title: '추가 도움 받는 곳',
          content: '노트북의 하드웨어 특화 문제(열 제한, 배터리 소모)는 [노트북에서 로컬 LLM 실행하기](/local-llms/local-llm-on-laptop)를 참고하십시오. 보안 및 개인 정보 설정 질문은 [로컬 LLM 보안 및 개인 정보 체크리스트](/local-llms/local-llm-security-privacy-checklist)를 참고하십시오. Ollama GitHub 이슈 페이지(github.com/ollama/ollama/issues)와 r/LocalLLaMA 서브레딧은 모델별 버그에 대한 가장 활발한 커뮤니티 자원입니다.',
        },
        commonMistakes: {
          title: '로컬 LLM 문제 해결의 흔한 실수',
          items: [
            '**OOM 오류를 하드웨어 오류로 혼동** — 이 오류는 모델에 비해 RAM이 너무 작다는 의미이지 하드웨어가 고장났다는 게 아닙니다. 해결책: Q4_K_M 양자화 또는 더 작은 모델을 사용하십시오.',
            '**시스템 부하 확인 미흡** — 다른 애플리케이션이 CPU/GPU를 소비할 때 추론 속도가 크게 저하됩니다. 벤치마크 전 브라우저, 비디오 플레이어, 백그라운드 프로세스를 종료하십시오.',
            '**드라이버 버전 비호환성 무시** — NVIDIA CUDA는 CUDA 릴리스별로 특정 드라이버 버전이 필요합니다. `nvidia-smi` 출력을 확인하십시오. CUDA 11.x를 위한 드라이버 버전은 ≥450.80이어야 합니다.',
            '**Ollama에서 잘못된 모델 이름 사용** — `llama3.2`와 `llama3.2:3b`는 다른 Ollama 태그입니다. `ollama list`를 실행하여 다운로드된 모델의 정확한 이름을 확인하십시오.',
            '**드라이버 업데이트 후 Ollama 재시작 미흡** — Ollama는 시작 시 GPU를 감지합니다. NVIDIA 또는 ROCm 드라이버를 업데이트한 후 GPU를 다시 감지하도록 Ollama를 완전히 재시작하십시오 (`ollama serve`).',
          ],
          image: '/images/troubleshooting-debug-steps-en.svg',
          imageCaption: '5단계 로컬 LLM 디버그 프로세스: RAM 확인 → GPU 확인 → 서버 확인 → 모델 확인 → 출력 품질 확인. 첫 번째 실패 단계에서 중단하십시오.',
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            'NVIDIA. (2024). "CUDA Toolkit Release Notes." https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/ — 릴리스별 공식 CUDA 드라이버 버전 요구 사항.',
            'Ollama. (2026). "Ollama Troubleshooting." https://github.com/ollama/ollama/blob/main/docs/troubleshooting.md — 일반 오류에 대한 공식 Ollama 문서.',
            'AMD. (2024). "ROCm Installation Guide." https://rocm.docs.amd.com/projects/install-on-linux/en/latest/ — 공식 AMD ROCm 설치 및 Linux GPU 지원.',
          ],
        },
      },
    },
};
