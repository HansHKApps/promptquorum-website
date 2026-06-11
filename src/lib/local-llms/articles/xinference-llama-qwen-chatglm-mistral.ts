// Slug: xinference-llama-qwen-chatglm-mistral

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference: Run Llama 3, Qwen, ChatGLM & Mistral Locally 2026',
    seoTitle: 'Xinference 2026: Llama 3, Qwen, ChatGLM & Mistral Setup',
    intro: 'Xinference (Xorbits Inference) is an open-source framework that lets you serve Llama 3, Qwen 3, ChatGLM4, Mistral, and 30+ other model families through a single OpenAI-compatible API — installed in one pip command, launched in one CLI call. Unlike Ollama, which targets end-user convenience, Xinference is designed for teams that need multi-model serving, GPU cluster support, and embedding/reranking alongside LLM inference. This guide covers supported model families, installation, per-model launch commands, and how Xinference compares to Ollama and vLLM.',
    metaDescription: 'Xinference supports Llama 3, Qwen 3, ChatGLM4, and Mistral out of the box. pip install, xi launch, done — OpenAI-compatible API at localhost:9997.',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and ML engineers who need a multi-model local inference server that handles Llama 3, Qwen, ChatGLM, Mistral, and embedding models through one unified OpenAI-compatible API',
    primaryTerm: 'Xinference supported models',
    targetKeywords: [
      'xinference supported models',
      'xinference llama 3 qwen chatglm mistral',
      'xinference setup guide 2026',
      'xinference vs ollama',
      'run multiple LLMs locally xinference',
      'xinference openai compatible api',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: [
      '5 GB VRAM',
      '6 GB VRAM',
      '7 GB VRAM',
      '16 GB VRAM',
      '40 GB VRAM',
    ],
    leadAnswerBlock: '**Install Xinference with `pip install "xinference[all]"`, start it with `xinference-local`, then run `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`.** Xinference natively supports Llama 3, Qwen 3, ChatGLM4, Mistral, and 30+ other families — all served through an OpenAI-compatible API at localhost:9997.',
    quickAnswerTop: {
      en: {
        question: 'What models does Xinference support?',
        answer: 'Xinference natively supports Llama 3.3 (8B and 70B), Qwen 3 (0.5B to 72B), ChatGLM4 (9B), Mistral Small v0.3, Mixtral 8x22B, and 30+ other families. Each launches with a single `xinference launch` command and serves via an OpenAI-compatible REST API at localhost:9997.',
        bullets: [
          'Install: `pip install "xinference[all]"` — includes CUDA, llama.cpp, and transformers backends',
          'Start server: `xinference-local` — web UI opens at http://localhost:9997',
          'Launch model: `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'API endpoint: `http://localhost:9997/v1` — drop-in replacement for any OpenAI API client',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          '**Xinference serves 30+ model families through one API** — Llama 3, Qwen 3, ChatGLM4, Mistral, embedding models, and rerankers all share the same endpoint at localhost:9997/v1.',
          '**One pip install, one CLI command** — `pip install "xinference[all]"` then `xinference-local` starts the server with a web UI; `xinference launch --model-name <name>` deploys any model.',
          '**Three selectable backends** — `transformers` (GPU, full precision), `llama.cpp` (CPU + quantized GGUF, no GPU required), `vllm` (high-throughput multi-GPU). Switch per model.',
          '**Qwen 3 and ChatGLM4 are the best Xinference choices for CJK tasks** — both run in ~6–7 GB of VRAM and outperform comparable EN-only models on Chinese and Japanese benchmarks.',
          '**Pick Xinference over Ollama when you need multi-model serving, embedding + reranking, or GPU cluster support** — Ollama wins for single-user desktop simplicity.',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'What Xinference Is and How It Works',
        content: 'Xinference (github.com/xorbitsai/inference) is an open-source LLM and multimodal model serving framework built by Xorbits. It started as an enterprise inference platform for distributed clusters and was open-sourced in 2023. The core idea: you register a model by name, Xinference downloads the weights, selects the right backend, and exposes a REST API. You never touch model loading code directly.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference is an open-source inference server that natively supports Llama 3, Qwen 3, ChatGLM4, Mistral, and 30+ other model families through a single OpenAI-compatible API.' },
          { type: 'plain-terms', text: 'Think of Xinference as a switchboard for local AI models. You tell it which model to load by name, it downloads and starts it, and your app talks to it the same way it would talk to the OpenAI API — no code changes needed.' },
        ],
        items: [
          '**Model registry**: 200+ pre-registered models. You reference them by name (`llama-3.1-instruct`, `qwen2.5-instruct`, `chatglm4`) instead of managing weight paths manually.',
          '**Backend abstraction**: one command switches between transformers, llama.cpp, and vLLM backends — same API regardless of backend.',
          '**Multi-model concurrency**: run Llama 3 for text generation and a BGE embedding model for RAG simultaneously on the same GPU.',
          '**Web UI**: a React dashboard at localhost:9997 lets you launch, inspect, and terminate models without writing code.',
          '**Cluster mode**: a supervisor + worker architecture scales across multiple GPU nodes via `xinference start --host 0.0.0.0` on workers.',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: 'Supported Model Families: Llama 3, Qwen, ChatGLM, Mistral',
        content: 'The table below shows the seven most-requested model configurations in Xinference and the minimum VRAM required for each. All seven share the same launch command pattern — only `--model-name`, `--model-size-in-billions`, and optionally `--quantization` change.',
        columns: ['Model', 'Family', 'VRAM (Q4)', 'Best Backend', 'Best For'],
        rows: [
          { 'Model': 'llama-3.1-instruct 8B', 'Family': 'Meta', 'VRAM (Q4)': '~6 GB', 'Best Backend': 'transformers / llama.cpp', 'Best For': 'English general-purpose' },
          { 'Model': 'llama-3.1-instruct 70B', 'Family': 'Meta', 'VRAM (Q4)': '~40 GB', 'Best Backend': 'vLLM', 'Best For': 'High-quality English output' },
          { 'Model': 'qwen2.5-instruct 7B', 'Family': 'Alibaba', 'VRAM (Q4)': '~6 GB', 'Best Backend': 'transformers / llama.cpp', 'Best For': 'Multilingual, CJK, coding' },
          { 'Model': 'qwen2.5-instruct 72B', 'Family': 'Alibaba', 'VRAM (Q4)': '~40 GB', 'Best Backend': 'vLLM', 'Best For': 'Large-scale CJK tasks' },
          { 'Model': 'chatglm4 9B', 'Family': 'Zhipu AI', 'VRAM (Q4)': '~7 GB', 'Best Backend': 'transformers', 'Best For': 'Chinese enterprise tasks' },
          { 'Model': 'mistral-instruct-v0.3 7B', 'Family': 'Mistral AI', 'VRAM (Q4)': '~5 GB', 'Best Backend': 'transformers / llama.cpp', 'Best For': 'European languages, function calling' },
          { 'Model': 'mixtral-instruct-v0.1 8x7B', 'Family': 'Mistral AI', 'VRAM (Q4)': '~26 GB', 'Best Backend': 'vLLM', 'Best For': 'High-quality multilingual' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference natively supports Llama 3.3 (8B/70B), Qwen 3 (7B/72B), ChatGLM4 9B, Mistral Small v0.3, and Mixtral 8x22B — each launchable with a single CLI command.' },
          { type: 'plain-terms', text: 'VRAM is the memory on your GPU. A model that needs 6 GB of VRAM needs a GPU with at least that much — like an RTX 3060 (12 GB) or RTX 4060 (8 GB). If your GPU is smaller, use the llama.cpp backend with a Q4 quantization, which cuts memory use roughly in half.' },
        ],
        faqs: [
          { q: 'Does Xinference support Llama 3.3?', a: 'Yes. Use `--model-name llama-3.1-instruct` with `--model-size-in-billions 8` for the 8B variant or `70` for the 70B. Both use the transformers backend by default; switch to llama.cpp with `--model-engine llama.cpp` and `--quantization q4_k_m` for CPU or low-VRAM use.' },
          { q: 'Does Xinference support Qwen 3?', a: 'Yes. Qwen 3 Instruct is registered as `qwen2.5-instruct`. Sizes 0.5B, 1.5B, 3B, 7B, 14B, 32B, and 72B are all available. The 7B variant runs in ~6 GB of VRAM and handles Chinese, Japanese, Korean, and English with comparable quality to Llama 3.3 8B.' },
          { q: 'Does Xinference support ChatGLM?', a: 'Yes. ChatGLM3 (`chatglm3`), ChatGLM4 (`chatglm4`), and the vision variant ChatGLM4-Vision (`chatglm4v`) are all registered. ChatGLM4 9B is the recommended choice for Chinese-language tasks in 2026.' },
          { q: 'Does Xinference support Mistral?', a: 'Yes. `mistral-instruct-v0.3` (7B) and `mixtral-instruct-v0.1` (8x7B MoE) are both registered. For function calling and JSON output, Mistral Small v0.3 is the best small-model option in Xinference.' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: 'Install Xinference: pip and Start the Server',
        content: 'Xinference requires Python 3.9+ and pip. The `[all]` extra installs CUDA support, the llama.cpp backend, and the transformers backend in one shot. On CPU-only machines, use `pip install xinference` (no `[all]`) and add `--model-engine llama.cpp` when launching models.',
        codeBlock: `# Full install — CUDA + transformers + llama.cpp backends
pip install "xinference[all]"

# CPU-only install (no GPU required)
pip install xinference

# Start the local server (web UI at http://localhost:9997)
xinference-local

# Or bind to a specific host for LAN access
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: 'First startup downloads no model weights — only the Xinference server starts. Model weights download on the first `xinference launch` call for each model.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Install Xinference with `pip install "xinference[all]"` and start the server with `xinference-local` — the web UI opens at http://localhost:9997.' },
        ],
        faqs: [
          { q: 'Does Xinference need a GPU?', a: 'No. Use the llama.cpp backend (`--model-engine llama.cpp`) to run quantized GGUF models entirely on CPU. Performance is slower than GPU inference but works on any machine with Python 3.9+.' },
          { q: 'How do I update Xinference?', a: 'Run `pip install --upgrade xinference`. Check the GitHub releases page for breaking changes before upgrading, especially if using cluster mode.' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: 'Launch Llama 3, Qwen, ChatGLM, and Mistral',
        content: 'Use `xinference launch` to deploy any registered model. The pattern is always the same: `--model-name` sets the model family, `--model-size-in-billions` sets the parameter count, and `--model-engine` selects the backend. Once launched, Xinference returns a model UID that you use in API calls.',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, transformers backend)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, Q4_K_M quantization)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (vLLM backend, requires 26+ GB VRAM)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Launch any Xinference model with `xinference launch --model-name <name> --model-engine transformers --model-size-in-billions <size>` — the model is available at localhost:9997/v1 within seconds of downloading.' },
        ],
        faqs: [
          { q: 'How do I list all models Xinference supports?', a: 'Run `xinference registrations --model-type LLM` to see all registered LLM families, or open the web UI at http://localhost:9997 and browse the model library.' },
          { q: 'Can I run two models at the same time in Xinference?', a: 'Yes — run `xinference launch` twice with different model names. Each model gets its own UID and endpoint. Your total VRAM budget must cover both models simultaneously.' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: 'Use the OpenAI-Compatible API',
        content: 'Xinference\'s API is a drop-in replacement for the OpenAI API. Point any OpenAI client at `http://localhost:9997/v1`, set `api_key` to any non-empty string, and use the model\'s UID (returned by `xinference launch`) as the `model` parameter. Existing LangChain, LlamaIndex, or custom OpenAI-client code works unchanged.',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",   # use the model name as the UID
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect any OpenAI-compatible client to Xinference by setting base_url to http://localhost:9997/v1 and using the model name as the model ID.' },
          { type: 'plain-terms', text: 'An OpenAI-compatible API means your code does not need to change. The same Python code that calls GPT-4 can call Llama 3 through Xinference — you only swap the base URL and the model name.' },
        ],
        faqs: [
          { q: 'Does Xinference support streaming responses?', a: 'Yes. Set `stream=True` in the `chat.completions.create` call. Xinference streams tokens in real time for all supported backends.' },
          { q: 'Can I use LangChain with Xinference?', a: 'Yes. Use `ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")` from `langchain_openai`. No additional Xinference-specific library is required.' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference vs Ollama vs vLLM: When to Pick Each',
        content: 'The three most common local inference frameworks each target a different user. Pick based on your primary constraint.',
        rows: [
          { 'Criterion': 'Best for', 'Xinference': 'Teams, multi-model, embeddings + LLM', 'Ollama': 'Single-user desktop, Modelfile workflows', 'vLLM': 'High-throughput GPU serving' },
          { 'Criterion': 'GPU required?', 'Xinference': 'No (llama.cpp backend)', 'Ollama': 'No (CPU mode available)', 'vLLM': 'Yes (CUDA/ROCm)' },
          { 'Criterion': 'Model switching', 'Xinference': 'Multiple models run simultaneously', 'Ollama': 'One model at a time (swap)', 'vLLM': 'One model per server instance' },
          { 'Criterion': 'Embedding support', 'Xinference': 'Yes (BGE, E5, etc.)', 'Ollama': 'Yes (limited)', 'vLLM': 'No (separate embedding server)' },
          { 'Criterion': 'Web UI', 'Xinference': 'Built-in at localhost:9997', 'Ollama': 'None (use Open WebUI)', 'vLLM': 'None' },
          { 'Criterion': 'ChatGLM support', 'Xinference': 'Native (chatglm4)', 'Ollama': 'Limited', 'vLLM': 'Limited' },
        ],
        columns: ['Criterion', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Choose Xinference when you need to serve multiple model types simultaneously (LLM + embeddings + reranker) or when you need native ChatGLM support — choose Ollama for single-user desktop convenience.' },
        ],
        faqs: [
          { q: 'Is Xinference harder to set up than Ollama?', a: 'Slightly. Ollama is a single binary download; Xinference requires Python and pip. But both are ready in under 5 minutes. Xinference offers a richer multi-model environment once running.' },
          { q: 'Can Xinference replace vLLM?', a: 'For single-machine serving, yes — Xinference can use vLLM as its backend (`--model-engine vllm`) and adds a web UI and model registry on top. For maximum raw throughput across multiple GPU nodes, dedicated vLLM deployments are still faster.' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What is Xinference?', a: 'Xinference (Xorbits Inference) is an open-source model serving framework that runs Llama 3, Qwen, ChatGLM, Mistral, and 30+ other families locally via an OpenAI-compatible API. It supports GPU, CPU (via llama.cpp), and multi-GPU cluster deployments.' },
          { q: 'What models does Xinference support in 2026?', a: 'Xinference registers 200+ model configurations. The most popular in 2026 are Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3, and Mixtral 8x22B Instruct. Run `xinference registrations --model-type LLM` to see the full list.' },
          { q: 'How does Xinference download model weights?', a: 'On the first `xinference launch` for each model, Xinference downloads weights from Hugging Face or ModelScope (configurable). Weights are cached locally so subsequent launches are instant. Set `XINFERENCE_HOME` to control the cache directory.' },
          { q: 'Does Xinference work on Windows?', a: 'Yes, via pip on Python 3.9+. The llama.cpp backend works on Windows CPU without additional dependencies. For GPU support on Windows, install CUDA 12.x and the matching PyTorch wheel before installing Xinference.' },
          { q: 'Can I use Xinference for RAG?', a: 'Yes. Launch a BGE or E5 embedding model (`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`) alongside your LLM. Both share the same API endpoint — your RAG pipeline calls the embedding endpoint for indexing and the chat endpoint for generation.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference: Run Llama 3, Qwen, ChatGLM & Mistral Locally 2026',
      'description': 'Xinference supports Llama 3, Qwen 3, ChatGLM4, and Mistral out of the box. pip install, xi launch, done — OpenAI-compatible API at localhost:9997.',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'What is Xinference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference (Xorbits Inference) is an open-source model serving framework that runs Llama 3, Qwen, ChatGLM, Mistral, and 30+ other families locally via an OpenAI-compatible API.' } },
        { '@type': 'Question', 'name': 'What models does Xinference support in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference registers 200+ model configurations. The most popular are Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3, and Mixtral 8x22B Instruct.' } },
        { '@type': 'Question', 'name': 'Does Xinference support Llama 3?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Use --model-name llama-3.1-instruct with --model-size-in-billions 8 for the 8B variant. Switch to llama.cpp with --quantization q4_k_m for CPU or low-VRAM use.' } },
        { '@type': 'Question', 'name': 'Does Xinference support ChatGLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. ChatGLM3, ChatGLM4, and ChatGLM4-Vision are all registered. ChatGLM4 9B is the recommended choice for Chinese-language tasks in 2026.' } },
        { '@type': 'Question', 'name': 'Can I use Xinference for RAG?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Launch a BGE embedding model alongside your LLM — both share the same API endpoint. Your RAG pipeline calls the embedding endpoint for indexing and the chat endpoint for generation.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Xinference Supported Models 2026',
      'description': 'The seven most-requested model configurations in Xinference with VRAM requirements',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — ~6 GB VRAM (Q4), best for English general-purpose tasks' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — ~40 GB VRAM, high-quality English output via vLLM backend' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — ~6 GB VRAM (Q4), multilingual, CJK, coding' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — ~40 GB VRAM, large-scale CJK tasks via vLLM' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — ~7 GB VRAM, Chinese enterprise tasks' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — ~5 GB VRAM (Q4), European languages and function calling' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — ~26 GB VRAM, high-quality multilingual via vLLM' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference: ejecutar Llama 3, Qwen, ChatGLM y Mistral localmente 2026',
    seoTitle: 'Xinference 2026: Llama 3, Qwen, ChatGLM y Mistral en local',
    intro: 'Xinference (Xorbits Inference) es un framework de código abierto que permite servir Llama 3, Qwen 3, ChatGLM4, Mistral y más de 30 familias de modelos a través de una única API compatible con OpenAI — instalado con un comando pip y lanzado con una sola llamada CLI. A diferencia de Ollama, orientado a la comodidad del usuario final, Xinference está diseñado para equipos que necesitan servicio multi-modelo, soporte de clústeres GPU y embeddings/reranking junto a la inferencia LLM. Esta guía cubre las familias de modelos compatibles, la instalación, los comandos de lanzamiento por modelo y cómo Xinference se compara con Ollama y vLLM.',
    metaDescription: 'Xinference soporta Llama 3, Qwen 3, ChatGLM4 y Mistral de forma nativa. pip install, xi launch — API compatible con OpenAI disponible en localhost:9997.',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores e ingenieros de ML que necesitan un servidor de inferencia multi-modelo local que gestione Llama 3, Qwen, ChatGLM, Mistral y modelos de embeddings a través de una API compatible con OpenAI unificada',
    primaryTerm: 'modelos compatibles con Xinference',
    targetKeywords: [
      'modelos compatibles xinference',
      'xinference llama 3 qwen chatglm mistral',
      'guía configuración xinference 2026',
      'xinference vs ollama',
      'ejecutar múltiples llm localmente xinference',
      'xinference api compatible openai',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: ['5 GB VRAM', '6 GB VRAM', '7 GB VRAM', '16 GB VRAM', '40 GB VRAM'],
    leadAnswerBlock: '**Instala Xinference con `pip install "xinference[all]"`, inícialo con `xinference-local` y luego ejecuta `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`.** Xinference soporta de forma nativa Llama 3, Qwen 3, ChatGLM4, Mistral y más de 30 familias — todos servidos a través de una API compatible con OpenAI en localhost:9997.',
    quickAnswerTop: {
      es: {
        question: '¿Qué modelos soporta Xinference?',
        answer: 'Xinference soporta de forma nativa Llama 3.3 (8B y 70B), Qwen 3 (0,5B a 72B), ChatGLM4 (9B), Mistral Small v0.3, Mixtral 8x22B y más de 30 familias adicionales. Cada modelo se lanza con un único comando `xinference launch` y se sirve a través de una API REST compatible con OpenAI en localhost:9997.',
        bullets: [
          'Instalación: `pip install "xinference[all]"` — incluye backends CUDA, llama.cpp y transformers',
          'Iniciar servidor: `xinference-local` — la interfaz web se abre en http://localhost:9997',
          'Lanzar modelo: `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'Endpoint de la API: `http://localhost:9997/v1` — reemplazo directo para cualquier cliente de la API de OpenAI',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Puntos clave',
        isTldr: true,
        items: [
          '**Xinference sirve más de 30 familias de modelos a través de una única API** — Llama 3, Qwen 3, ChatGLM4, Mistral, modelos de embeddings y rerankers comparten el mismo endpoint en localhost:9997/v1.',
          '**Un pip install, un comando CLI** — `pip install "xinference[all]"` y luego `xinference-local` inicia el servidor con interfaz web; `xinference launch --model-name <nombre>` despliega cualquier modelo.',
          '**Tres backends seleccionables** — `transformers` (GPU, precisión completa), `llama.cpp` (CPU + GGUF cuantizado, sin GPU), `vllm` (alto rendimiento, multi-GPU). Configurable por modelo.',
          '**Qwen 3 y ChatGLM4 son las mejores opciones de Xinference para tareas CJK** — ambos funcionan con ~6–7 GB de VRAM y superan a modelos equivalentes solo en inglés en benchmarks de chino y japonés.',
          '**Elige Xinference sobre Ollama cuando necesites servicio multi-modelo, embedding + reranking o soporte de clúster GPU** — Ollama es superior para la simplicidad de escritorio de un solo usuario.',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'Qué es Xinference y cómo funciona',
        content: 'Xinference (github.com/xorbitsai/inference) es un framework de código abierto para servir modelos LLM y multimodales, desarrollado por Xorbits. Comenzó como una plataforma de inferencia empresarial para clústeres distribuidos y fue publicado como código abierto en 2023. La idea central: registras un modelo por nombre, Xinference descarga los pesos, selecciona el backend adecuado y expone una API REST. Nunca tienes que tocar el código de carga de modelos directamente.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference es un servidor de inferencia de código abierto que soporta de forma nativa Llama 3, Qwen 3, ChatGLM4, Mistral y más de 30 familias de modelos a través de una única API compatible con OpenAI.' },
          { type: 'plain-terms', text: 'Piensa en Xinference como una centralita para modelos de IA locales. Le dices qué modelo cargar por nombre, lo descarga y lo inicia, y tu aplicación se comunica con él de la misma forma que con la API de OpenAI — sin cambios de código.' },
        ],
        items: [
          '**Registro de modelos**: más de 200 modelos preregistrados. Los referencias por nombre (`llama-3.1-instruct`, `qwen2.5-instruct`, `chatglm4`) en lugar de gestionar rutas de pesos manualmente.',
          '**Abstracción de backend**: un comando cambia entre los backends transformers, llama.cpp y vLLM — la misma API independientemente del backend.',
          '**Concurrencia multi-modelo**: ejecuta Llama 3 para generación de texto y un modelo de embedding BGE para RAG simultáneamente en la misma GPU.',
          '**Interfaz web**: un dashboard React en localhost:9997 te permite lanzar, inspeccionar y terminar modelos sin escribir código.',
          '**Modo clúster**: una arquitectura supervisor + trabajadores escala a través de múltiples nodos GPU mediante `xinference start --host 0.0.0.0` en los trabajadores.',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: 'Familias de modelos compatibles: Llama 3, Qwen, ChatGLM, Mistral',
        content: 'La tabla siguiente muestra las siete configuraciones de modelos más solicitadas en Xinference y la VRAM mínima requerida para cada una. Las siete comparten el mismo patrón de comando de lanzamiento — solo cambian `--model-name`, `--model-size-in-billions` y opcionalmente `--quantization`.',
        columns: ['Modelo', 'Familia', 'VRAM (Q4)', 'Mejor backend', 'Mejor para'],
        rows: [
          { 'Modelo': 'llama-3.1-instruct 8B', 'Familia': 'Meta', 'VRAM (Q4)': '~6 GB', 'Mejor backend': 'transformers / llama.cpp', 'Mejor para': 'Uso general en inglés' },
          { 'Modelo': 'llama-3.1-instruct 70B', 'Familia': 'Meta', 'VRAM (Q4)': '~40 GB', 'Mejor backend': 'vLLM', 'Mejor para': 'Salida en inglés de alta calidad' },
          { 'Modelo': 'qwen2.5-instruct 7B', 'Familia': 'Alibaba', 'VRAM (Q4)': '~6 GB', 'Mejor backend': 'transformers / llama.cpp', 'Mejor para': 'Multilingüe, CJK, programación' },
          { 'Modelo': 'qwen2.5-instruct 72B', 'Familia': 'Alibaba', 'VRAM (Q4)': '~40 GB', 'Mejor backend': 'vLLM', 'Mejor para': 'Tareas CJK a gran escala' },
          { 'Modelo': 'chatglm4 9B', 'Familia': 'Zhipu AI', 'VRAM (Q4)': '~7 GB', 'Mejor backend': 'transformers', 'Mejor para': 'Tareas empresariales en chino' },
          { 'Modelo': 'mistral-instruct-v0.3 7B', 'Familia': 'Mistral AI', 'VRAM (Q4)': '~5 GB', 'Mejor backend': 'transformers / llama.cpp', 'Mejor para': 'Idiomas europeos, llamadas a funciones' },
          { 'Modelo': 'mixtral-instruct-v0.1 8x7B', 'Familia': 'Mistral AI', 'VRAM (Q4)': '~26 GB', 'Mejor backend': 'vLLM', 'Mejor para': 'Multilingüe de alta calidad' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference soporta de forma nativa Llama 3.3 (8B/70B), Qwen 3 (7B/72B), ChatGLM4 9B, Mistral Small v0.3 y Mixtral 8x22B — cada uno lanzable con un único comando CLI.' },
          { type: 'plain-terms', text: 'La VRAM es la memoria de tu GPU. Un modelo que necesita 6 GB de VRAM requiere una GPU con al menos esa cantidad — como una RTX 3060 (12 GB) o RTX 4060 (8 GB). Si tu GPU es más pequeña, usa el backend llama.cpp con cuantización Q4, que reduce el uso de memoria aproximadamente a la mitad.' },
        ],
        faqs: [
          { q: '¿Xinference soporta Llama 3.3?', a: 'Sí. Usa `--model-name llama-3.1-instruct` con `--model-size-in-billions 8` para la variante 8B o `70` para la 70B. Cambia a llama.cpp con `--model-engine llama.cpp` y `--quantization q4_k_m` para CPU o VRAM reducida.' },
          { q: '¿Xinference soporta Qwen 3?', a: 'Sí. Qwen 3 Instruct está registrado como `qwen2.5-instruct`. Los tamaños 0,5B, 1,5B, 3B, 7B, 14B, 32B y 72B están disponibles. La variante 7B funciona con ~6 GB de VRAM y gestiona chino, japonés, coreano e inglés con una calidad comparable a Llama 3.3 8B.' },
          { q: '¿Xinference soporta ChatGLM?', a: 'Sí. ChatGLM3 (`chatglm3`), ChatGLM4 (`chatglm4`) y la variante de visión ChatGLM4-Vision (`chatglm4v`) están todos registrados. ChatGLM4 9B es la opción recomendada para tareas en chino en 2026.' },
          { q: '¿Xinference soporta Mistral?', a: 'Sí. `mistral-instruct-v0.3` (7B) y `mixtral-instruct-v0.1` (8x7B MoE) están ambos registrados. Para llamadas a funciones y salida JSON, Mistral Small v0.3 es la mejor opción de modelo pequeño en Xinference.' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: 'Instalar Xinference: pip e iniciar el servidor',
        content: 'Xinference requiere Python 3.9+ y pip. El extra `[all]` instala soporte CUDA, el backend llama.cpp y el backend transformers de una sola vez. En máquinas sin GPU, usa `pip install xinference` (sin `[all]`) y añade `--model-engine llama.cpp` al lanzar modelos.',
        codeBlock: `# Instalación completa — backends CUDA + transformers + llama.cpp
pip install "xinference[all]"

# Instalación solo CPU (sin GPU)
pip install xinference

# Iniciar el servidor local (interfaz web en http://localhost:9997)
xinference-local

# O vincular a un host específico para acceso por LAN
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: 'El primer inicio no descarga pesos de modelos — solo inicia el servidor Xinference. Los pesos del modelo se descargan en la primera llamada `xinference launch` para cada modelo.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Instala Xinference con `pip install "xinference[all]"` e inicia el servidor con `xinference-local` — la interfaz web se abre en http://localhost:9997.' },
        ],
        faqs: [
          { q: '¿Xinference necesita una GPU?', a: 'No. Usa el backend llama.cpp (`--model-engine llama.cpp`) para ejecutar modelos GGUF cuantizados completamente en CPU. El rendimiento es más lento que la inferencia con GPU, pero funciona en cualquier máquina con Python 3.9+.' },
          { q: '¿Cómo actualizo Xinference?', a: 'Ejecuta `pip install --upgrade xinference`. Revisa la página de lanzamientos de GitHub para detectar cambios incompatibles antes de actualizar, especialmente si usas el modo clúster.' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: 'Lanzar Llama 3, Qwen, ChatGLM y Mistral',
        content: 'Usa `xinference launch` para desplegar cualquier modelo registrado. El patrón es siempre el mismo: `--model-name` define la familia del modelo, `--model-size-in-billions` el número de parámetros, y `--model-engine` selecciona el backend. Una vez lanzado, Xinference devuelve un UID de modelo que usas en las llamadas a la API.',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, backend transformers)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, cuantización Q4_K_M)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (backend vLLM, requiere 26+ GB VRAM)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Lanza cualquier modelo de Xinference con `xinference launch --model-name <nombre> --model-engine transformers --model-size-in-billions <tamaño>` — el modelo está disponible en localhost:9997/v1 segundos después de la descarga.' },
        ],
        faqs: [
          { q: '¿Cómo listo todos los modelos que Xinference soporta?', a: 'Ejecuta `xinference registrations --model-type LLM` para ver todas las familias LLM registradas, o abre la interfaz web en http://localhost:9997 y navega por la biblioteca de modelos.' },
          { q: '¿Puedo ejecutar dos modelos al mismo tiempo en Xinference?', a: 'Sí — ejecuta `xinference launch` dos veces con diferentes nombres de modelo. Cada modelo obtiene su propio UID y endpoint. Tu presupuesto total de VRAM debe cubrir ambos modelos simultáneamente.' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: 'Usar la API compatible con OpenAI',
        content: 'La API de Xinference es un reemplazo directo de la API de OpenAI. Apunta cualquier cliente de OpenAI a `http://localhost:9997/v1`, establece `api_key` con cualquier cadena no vacía y usa el UID del modelo (devuelto por `xinference launch`) como parámetro `model`. El código existente de LangChain, LlamaIndex o cliente personalizado de OpenAI funciona sin cambios.',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",   # use the model name as the UID
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Conecta cualquier cliente compatible con OpenAI a Xinference configurando base_url en http://localhost:9997/v1 y usando el nombre del modelo como ID de modelo.' },
          { type: 'plain-terms', text: 'Una API compatible con OpenAI significa que tu código no necesita cambiar. El mismo código Python que llama a GPT-4 puede llamar a Llama 3 a través de Xinference — solo cambias la URL base y el nombre del modelo.' },
        ],
        faqs: [
          { q: '¿Xinference soporta respuestas en streaming?', a: 'Sí. Establece `stream=True` en la llamada `chat.completions.create`. Xinference transmite tokens en tiempo real para todos los backends soportados.' },
          { q: '¿Puedo usar LangChain con Xinference?', a: 'Sí. Usa `ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")` de `langchain_openai`. No se requiere ninguna biblioteca específica de Xinference adicional.' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference vs Ollama vs vLLM: cuándo elegir cada uno',
        content: 'Los tres frameworks de inferencia local más comunes están orientados a perfiles de usuario diferentes. Elige según tu restricción principal.',
        rows: [
          { 'Criterio': 'Mejor para', 'Xinference': 'Equipos, multi-modelo, embeddings + LLM', 'Ollama': 'Escritorio de un solo usuario, flujos de trabajo con Modelfile', 'vLLM': 'Servicio GPU de alto rendimiento' },
          { 'Criterio': '¿Requiere GPU?', 'Xinference': 'No (backend llama.cpp)', 'Ollama': 'No (modo CPU disponible)', 'vLLM': 'Sí (CUDA/ROCm)' },
          { 'Criterio': 'Cambio de modelos', 'Xinference': 'Múltiples modelos ejecutándose simultáneamente', 'Ollama': 'Un modelo a la vez (swap)', 'vLLM': 'Un modelo por instancia de servidor' },
          { 'Criterio': 'Soporte de embeddings', 'Xinference': 'Sí (BGE, E5, etc.)', 'Ollama': 'Sí (limitado)', 'vLLM': 'No (servidor de embeddings separado)' },
          { 'Criterio': 'Interfaz web', 'Xinference': 'Integrada en localhost:9997', 'Ollama': 'Ninguna (usar Open WebUI)', 'vLLM': 'Ninguna' },
          { 'Criterio': 'Soporte de ChatGLM', 'Xinference': 'Nativo (chatglm4)', 'Ollama': 'Limitado', 'vLLM': 'Limitado' },
        ],
        columns: ['Criterio', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Elige Xinference cuando necesites servir múltiples tipos de modelos simultáneamente (LLM + embeddings + reranker) o soporte nativo de ChatGLM — elige Ollama para la comodidad de escritorio de un solo usuario.' },
        ],
        faqs: [
          { q: '¿Xinference es más difícil de configurar que Ollama?', a: 'Ligeramente. Ollama es una descarga de un único binario; Xinference requiere Python y pip. Pero ambos están listos en menos de 5 minutos. Xinference ofrece un entorno multi-modelo más rico una vez en funcionamiento.' },
          { q: '¿Puede Xinference reemplazar a vLLM?', a: 'Para el servicio en una sola máquina, sí — Xinference puede usar vLLM como backend (`--model-engine vllm`) y añade una interfaz web y registro de modelos. Para el máximo rendimiento bruto en múltiples nodos GPU, los despliegues dedicados de vLLM siguen siendo más rápidos.' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué es Xinference?', a: 'Xinference (Xorbits Inference) es un framework de código abierto para servir modelos que ejecuta Llama 3, Qwen, ChatGLM, Mistral y más de 30 familias localmente a través de una API compatible con OpenAI. Soporta despliegues en GPU, CPU (via llama.cpp) y clústeres multi-GPU.' },
          { q: '¿Qué modelos soporta Xinference en 2026?', a: 'Xinference registra más de 200 configuraciones de modelos. Los más populares en 2026 son Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 y Mixtral 8x22B Instruct. Ejecuta `xinference registrations --model-type LLM` para ver la lista completa.' },
          { q: '¿Cómo descarga Xinference los pesos del modelo?', a: 'En el primer `xinference launch` para cada modelo, Xinference descarga los pesos desde Hugging Face o ModelScope (configurable). Los pesos se almacenan en caché localmente, por lo que los lanzamientos posteriores son instantáneos. Establece `XINFERENCE_HOME` para controlar el directorio de caché.' },
          { q: '¿Xinference funciona en Windows?', a: 'Sí, a través de pip en Python 3.9+. El backend llama.cpp funciona en CPU de Windows sin dependencias adicionales. Para soporte de GPU en Windows, instala CUDA 12.x y el wheel de PyTorch correspondiente antes de instalar Xinference.' },
          { q: '¿Puedo usar Xinference para RAG?', a: 'Sí. Lanza un modelo de embedding BGE o E5 (`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`) junto a tu LLM. Ambos comparten el mismo endpoint de la API — tu pipeline de RAG llama al endpoint de embedding para indexar y al endpoint de chat para la generación.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/es/es/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference: ejecutar Llama 3, Qwen, ChatGLM y Mistral localmente 2026',
      'description': 'Xinference soporta Llama 3, Qwen 3, ChatGLM4 y Mistral de forma nativa. pip install, xi launch — API compatible con OpenAI disponible en localhost:9997.',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': '¿Qué es Xinference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference (Xorbits Inference) es un framework de código abierto para servir modelos que ejecuta Llama 3, Qwen, ChatGLM, Mistral y más de 30 familias localmente a través de una API compatible con OpenAI.' } },
        { '@type': 'Question', 'name': '¿Qué modelos soporta Xinference en 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Los más populares son Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 y Mixtral 8x22B Instruct.' } },
        { '@type': 'Question', 'name': '¿Xinference soporta Llama 3?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Usa --model-name llama-3.1-instruct con --model-size-in-billions 8 para la variante 8B. Cambia a llama.cpp con --quantization q4_k_m para CPU o VRAM reducida.' } },
        { '@type': 'Question', 'name': '¿Xinference soporta ChatGLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. ChatGLM3, ChatGLM4 y ChatGLM4-Vision están todos registrados. ChatGLM4 9B es la opción recomendada para tareas en chino en 2026.' } },
        { '@type': 'Question', 'name': '¿Puedo usar Xinference para RAG?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Lanza un modelo de embedding BGE junto a tu LLM — ambos comparten el mismo endpoint de la API en localhost:9997/v1.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Modelos compatibles con Xinference 2026',
      'description': 'Las siete configuraciones de modelos más solicitadas en Xinference con requisitos de VRAM',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — ~6 GB VRAM (Q4), uso general en inglés' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — ~40 GB VRAM, salida en inglés de alta calidad via vLLM' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — ~6 GB VRAM (Q4), multilingüe, CJK, programación' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — ~40 GB VRAM, tareas CJK a gran escala via vLLM' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — ~7 GB VRAM, tareas empresariales en chino' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — ~5 GB VRAM (Q4), idiomas europeos y llamadas a funciones' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — ~26 GB VRAM, multilingüe de alta calidad via vLLM' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference: تشغيل Llama 3 وQwen وChatGLM وMistral محليًا 2026',
    seoTitle: 'Xinference 2026: Llama 3 وQwen وChatGLM وMistral محليًا',
    intro: 'Xinference (Xorbits Inference) هو إطار مفتوح المصدر يتيح تقديم Llama 3 وQwen 3 وChatGLM4 وMistral وأكثر من 30 عائلة نماذج عبر واجهة API واحدة متوافقة مع OpenAI — يُثبَّت بأمر pip ويُطلَق باستدعاء CLI واحد. على عكس Ollama الموجّه لراحة المستخدم النهائي، صُمم Xinference للفرق التي تحتاج خدمة متعددة النماذج، ودعم عناقيد GPU، وembeddings/إعادة الترتيب جنبًا إلى جنب مع استدلال LLM. يغطي هذا الدليل عائلات النماذج المدعومة، والتثبيت، وأوامر الإطلاق لكل نموذج، وكيف يُقارن Xinference بـ Ollama وvLLM.',
    metaDescription: 'يدعم Xinference Llama 3 وQwen 3 وChatGLM4 وMistral أصليًا. pip install، xi launch — واجهة API متوافقة مع OpenAI متاحة على localhost:9997.',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '10 دقائق قراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون ومهندسو التعلم الآلي الذين يحتاجون خادم استدلال محليًا متعدد النماذج يدير Llama 3 وQwen وChatGLM وMistral ونماذج embeddings عبر واجهة API موحّدة متوافقة مع OpenAI',
    primaryTerm: 'النماذج المدعومة في Xinference',
    targetKeywords: [
      'النماذج المدعومة في xinference',
      'xinference llama 3 qwen chatglm mistral',
      'دليل إعداد xinference 2026',
      'xinference مقابل ollama',
      'تشغيل عدة llm محليًا xinference',
      'xinference واجهة api متوافقة مع openai',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: ['5 GB VRAM', '6 GB VRAM', '7 GB VRAM', '16 GB VRAM', '40 GB VRAM'],
    leadAnswerBlock: '**ثبّت Xinference بـ `pip install "xinference[all]"`، وابدأه بـ `xinference-local`، ثم شغّل `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`.** يدعم Xinference أصليًا Llama 3 وQwen 3 وChatGLM4 وMistral وأكثر من 30 عائلة — جميعها تُقدَّم عبر واجهة API متوافقة مع OpenAI على localhost:9997.',
    quickAnswerTop: {
      ar: {
        question: 'أي نماذج يدعم Xinference؟',
        answer: 'يدعم Xinference أصليًا Llama 3.3 (8B و70B)، وQwen 3 (0.5B إلى 72B)، وChatGLM4 (9B)، وMistral Small v0.3، وMixtral 8x22B، وأكثر من 30 عائلة إضافية. يُطلَق كل نموذج بأمر `xinference launch` واحد ويُقدَّم عبر واجهة REST API متوافقة مع OpenAI على localhost:9997.',
        bullets: [
          'التثبيت: `pip install "xinference[all]"` — يتضمن خلفيات CUDA وllama.cpp وtransformers',
          'بدء الخادم: `xinference-local` — تُفتح واجهة الويب على http://localhost:9997',
          'إطلاق النموذج: `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'نقطة نهاية API: `http://localhost:9997/v1` — بديل مباشر لأي عميل لواجهة API الخاصة بـ OpenAI',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          '**يقدّم Xinference أكثر من 30 عائلة نماذج عبر واجهة API واحدة** — Llama 3 وQwen 3 وChatGLM4 وMistral ونماذج embeddings وrerankers تشترك في نقطة النهاية نفسها على localhost:9997/v1.',
          '**pip install واحد، أمر CLI واحد** — `pip install "xinference[all]"` ثم `xinference-local` يبدأ الخادم بواجهة ويب؛ و`xinference launch --model-name <الاسم>` ينشر أي نموذج.',
          '**ثلاث خلفيات قابلة للاختيار** — `transformers` (GPU، دقة كاملة)، و`llama.cpp` (CPU + GGUF مكمَّم، بلا GPU)، و`vllm` (إنتاجية عالية، متعدد GPU). قابلة للتكوين لكل نموذج.',
          '**Qwen 3 وChatGLM4 هما أفضل خياري Xinference لمهام CJK** — كلاهما يعمل بـ ~6–7 GB من VRAM ويتفوقان على نماذج إنجليزية فقط مكافئة في معايير الصينية واليابانية.',
          '**اختر Xinference على Ollama عندما تحتاج خدمة متعددة النماذج، أو embedding + إعادة ترتيب، أو دعم عنقود GPU** — Ollama أفضل لبساطة سطح المكتب لمستخدم واحد.',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'ما هو Xinference وكيف يعمل',
        content: 'Xinference (github.com/xorbitsai/inference) هو إطار مفتوح المصدر لتقديم نماذج LLM والنماذج متعددة الوسائط، طوّرته Xorbits. بدأ كمنصة استدلال مؤسسية للعناقيد الموزّعة ونُشر كمصدر مفتوح في 2023. الفكرة الأساسية: تسجّل نموذجًا بالاسم، فينزّل Xinference الأوزان، ويختار الخلفية المناسبة، ويعرض واجهة REST API. لا تضطر أبدًا إلى لمس شيفرة تحميل النموذج مباشرة.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference هو خادم استدلال مفتوح المصدر يدعم أصليًا Llama 3 وQwen 3 وChatGLM4 وMistral وأكثر من 30 عائلة نماذج عبر واجهة API واحدة متوافقة مع OpenAI.' },
          { type: 'plain-terms', text: 'فكّر في Xinference كلوحة تحكم لنماذج الذكاء الاصطناعي المحلية. تخبره بأي نموذج يحمّل بالاسم، فيُنزّله ويبدأه، ويتواصل تطبيقك معه بالطريقة نفسها التي يتواصل بها مع واجهة API الخاصة بـ OpenAI — بلا تغييرات في الشيفرة.' },
        ],
        items: [
          '**سجل النماذج**: أكثر من 200 نموذج مسجّل مسبقًا. تشير إليها بالاسم (`llama-3.1-instruct`، `qwen2.5-instruct`، `chatglm4`) بدلًا من إدارة مسارات الأوزان يدويًا.',
          '**تجريد الخلفية**: أمر واحد يبدّل بين خلفيات transformers وllama.cpp وvLLM — واجهة API نفسها بغض النظر عن الخلفية.',
          '**التزامن متعدد النماذج**: شغّل Llama 3 لتوليد النص ونموذج embedding من BGE لـ RAG في وقت واحد على وحدة GPU نفسها.',
          '**واجهة الويب**: لوحة تحكم React على localhost:9997 تتيح لك إطلاق النماذج وفحصها وإنهاءها دون كتابة شيفرة.',
          '**وضع العنقود**: بنية مشرف + عمّال تتوسّع عبر عدة عُقد GPU بـ `xinference start --host 0.0.0.0` على العمّال.',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: 'عائلات النماذج المدعومة: Llama 3 وQwen وChatGLM وMistral',
        content: 'يُظهر الجدول التالي أكثر سبعة تكوينات نماذج طلبًا في Xinference والحد الأدنى من VRAM المطلوب لكلٍّ منها. تشترك السبعة في نمط أمر الإطلاق نفسه — تتغيّر فقط `--model-name` و`--model-size-in-billions` واختياريًا `--quantization`.',
        columns: ['النموذج', 'العائلة', 'VRAM (Q4)', 'أفضل خلفية', 'الأفضل لـ'],
        rows: [
          { 'Modelo': 'llama-3.1-instruct 8B', 'Familia': 'Meta', 'VRAM (Q4)': '~6 GB', 'Mejor backend': 'transformers / llama.cpp', 'Mejor para': 'استخدام عام بالإنجليزية' },
          { 'Modelo': 'llama-3.1-instruct 70B', 'Familia': 'Meta', 'VRAM (Q4)': '~40 GB', 'Mejor backend': 'vLLM', 'Mejor para': 'مخرجات إنجليزية عالية الجودة' },
          { 'Modelo': 'qwen2.5-instruct 7B', 'Familia': 'Alibaba', 'VRAM (Q4)': '~6 GB', 'Mejor backend': 'transformers / llama.cpp', 'Mejor para': 'متعدد اللغات، CJK، البرمجة' },
          { 'Modelo': 'qwen2.5-instruct 72B', 'Familia': 'Alibaba', 'VRAM (Q4)': '~40 GB', 'Mejor backend': 'vLLM', 'Mejor para': 'مهام CJK واسعة النطاق' },
          { 'Modelo': 'chatglm4 9B', 'Familia': 'Zhipu AI', 'VRAM (Q4)': '~7 GB', 'Mejor backend': 'transformers', 'Mejor para': 'مهام مؤسسية بالصينية' },
          { 'Modelo': 'mistral-instruct-v0.3 7B', 'Familia': 'Mistral AI', 'VRAM (Q4)': '~5 GB', 'Mejor backend': 'transformers / llama.cpp', 'Mejor para': 'اللغات الأوروبية، استدعاء الدوال' },
          { 'Modelo': 'mixtral-instruct-v0.1 8x7B', 'Familia': 'Mistral AI', 'VRAM (Q4)': '~26 GB', 'Mejor backend': 'vLLM', 'Mejor para': 'متعدد اللغات عالي الجودة' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'يدعم Xinference أصليًا Llama 3.3 (8B/70B)، وQwen 3 (7B/72B)، وChatGLM4 9B، وMistral Small v0.3، وMixtral 8x22B — كلٌّ قابل للإطلاق بأمر CLI واحد.' },
          { type: 'plain-terms', text: 'VRAM هي ذاكرة وحدة GPU لديك. نموذج يحتاج 6 GB من VRAM يتطلب GPU بهذا القدر على الأقل — مثل RTX 3060 (12 GB) أو RTX 4060 (8 GB). إذا كانت GPU لديك أصغر، استخدم خلفية llama.cpp بتكميم Q4 الذي يخفض استخدام الذاكرة إلى النصف تقريبًا.' },
        ],
        faqs: [
          { q: 'هل يدعم Xinference نموذج Llama 3.3؟', a: 'نعم. استخدم `--model-name llama-3.1-instruct` مع `--model-size-in-billions 8` لنسخة 8B أو `70` لنسخة 70B. بدّل إلى llama.cpp بـ `--model-engine llama.cpp` و`--quantization q4_k_m` لـ CPU أو VRAM المنخفض.' },
          { q: 'هل يدعم Xinference نموذج Qwen 3؟', a: 'نعم. Qwen 3 Instruct مسجّل باسم `qwen2.5-instruct`. الأحجام 0.5B و1.5B و3B و7B و14B و32B و72B متاحة. تعمل نسخة 7B بـ ~6 GB من VRAM وتتعامل مع الصينية واليابانية والكورية والإنجليزية بجودة مماثلة لـ Llama 3.3 8B.' },
          { q: 'هل يدعم Xinference نموذج ChatGLM؟', a: 'نعم. ChatGLM3 (`chatglm3`)، وChatGLM4 (`chatglm4`)، ونسخة الرؤية ChatGLM4-Vision (`chatglm4v`) جميعها مسجّلة. ChatGLM4 9B هو الخيار الموصى به للمهام بالصينية في 2026.' },
          { q: 'هل يدعم Xinference نموذج Mistral؟', a: 'نعم. `mistral-instruct-v0.3` (7B) و`mixtral-instruct-v0.1` (8x7B MoE) كلاهما مسجّل. لاستدعاء الدوال ومخرجات JSON، Mistral Small v0.3 هو أفضل خيار نموذج صغير في Xinference.' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: 'تثبيت Xinference: pip وبدء الخادم',
        content: 'يتطلب Xinference بايثون 3.9+ وpip. يثبّت الإضافي `[all]` دعم CUDA، وخلفية llama.cpp، وخلفية transformers دفعة واحدة. على الأجهزة بلا GPU، استخدم `pip install xinference` (دون `[all]`) وأضف `--model-engine llama.cpp` عند إطلاق النماذج.',
        codeBlock: `# Instalación completa — backends CUDA + transformers + llama.cpp
pip install "xinference[all]"

# Instalación solo CPU (sin GPU)
pip install xinference

# Iniciar el servidor local (interfaz web en http://localhost:9997)
xinference-local

# O vincular a un host específico para acceso por LAN
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: 'البدء الأول لا ينزّل أوزان النماذج — يبدأ خادم Xinference فقط. تُنزَّل أوزان النموذج عند أول استدعاء `xinference launch` لكل نموذج.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'ثبّت Xinference بـ `pip install "xinference[all]"` وابدأ الخادم بـ `xinference-local` — تُفتح واجهة الويب على http://localhost:9997.' },
        ],
        faqs: [
          { q: 'هل يحتاج Xinference إلى GPU؟', a: 'لا. استخدم خلفية llama.cpp (`--model-engine llama.cpp`) لتشغيل نماذج GGUF المكمَّمة على CPU بالكامل. الأداء أبطأ من الاستدلال بـ GPU، لكنه يعمل على أي جهاز ببايثون 3.9+.' },
          { q: 'كيف أحدّث Xinference؟', a: 'شغّل `pip install --upgrade xinference`. راجع صفحة الإصدارات على GitHub لاكتشاف التغييرات غير المتوافقة قبل التحديث، خاصةً إذا كنت تستخدم وضع العنقود.' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: 'إطلاق Llama 3 وQwen وChatGLM وMistral',
        content: 'استخدم `xinference launch` لنشر أي نموذج مسجّل. النمط ثابت دائمًا: `--model-name` يحدد عائلة النموذج، و`--model-size-in-billions` عدد المعاملات، و`--model-engine` يختار الخلفية. بمجرد الإطلاق، يعيد Xinference معرّف UID للنموذج تستخدمه في استدعاءات API.',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, backend transformers)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, cuantización Q4_K_M)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (backend vLLM, requiere 26+ GB VRAM)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'أطلِق أي نموذج في Xinference بـ `xinference launch --model-name <الاسم> --model-engine transformers --model-size-in-billions <الحجم>` — يصبح النموذج متاحًا على localhost:9997/v1 بعد ثوانٍ من التنزيل.' },
        ],
        faqs: [
          { q: 'كيف أسرد كل النماذج التي يدعمها Xinference؟', a: 'شغّل `xinference registrations --model-type LLM` لرؤية جميع عائلات LLM المسجّلة، أو افتح واجهة الويب على http://localhost:9997 وتصفّح مكتبة النماذج.' },
          { q: 'هل يمكنني تشغيل نموذجين في الوقت نفسه في Xinference؟', a: 'نعم — شغّل `xinference launch` مرتين بأسماء نماذج مختلفة. يحصل كل نموذج على UID ونقطة نهاية خاصين به. يجب أن تغطي ميزانية VRAM الإجمالية لديك كلا النموذجين في وقت واحد.' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: 'استخدام واجهة API المتوافقة مع OpenAI',
        content: 'واجهة API الخاصة بـ Xinference بديل مباشر لواجهة API الخاصة بـ OpenAI. وجّه أي عميل OpenAI إلى `http://localhost:9997/v1`، اضبط `api_key` بأي سلسلة غير فارغة، واستخدم UID النموذج (المُعاد من `xinference launch`) كمعامل `model`. تعمل الشيفرة الموجودة من LangChain أو LlamaIndex أو عميل OpenAI المخصص دون تغييرات.',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",   # use the model name as the UID
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: 'وصّل أي عميل متوافق مع OpenAI بـ Xinference بضبط base_url على http://localhost:9997/v1 واستخدام اسم النموذج كمعرّف للنموذج.' },
          { type: 'plain-terms', text: 'واجهة API متوافقة مع OpenAI تعني أن شيفرتك لا تحتاج إلى تغيير. شيفرة بايثون نفسها التي تستدعي GPT-4 يمكنها استدعاء Llama 3 عبر Xinference — تغيّر فقط عنوان URL الأساسي واسم النموذج.' },
        ],
        faqs: [
          { q: 'هل يدعم Xinference الاستجابات المتدفقة (streaming)؟', a: 'نعم. اضبط `stream=True` في استدعاء `chat.completions.create`. يبث Xinference token في الوقت الفعلي لجميع الخلفيات المدعومة.' },
          { q: 'هل يمكنني استخدام LangChain مع Xinference؟', a: 'نعم. استخدم `ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")` من `langchain_openai`. لا تلزم أي مكتبة إضافية خاصة بـ Xinference.' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference مقابل Ollama مقابل vLLM: متى تختار كلًّا منها',
        content: 'أكثر ثلاثة أطر استدلال محلية شيوعًا موجّهة لملفات مستخدمين مختلفة. اختر حسب قيدك الأساسي.',
        rows: [
          { 'Criterio': 'الأفضل لـ', 'Xinference': 'الفرق، متعدد النماذج، embeddings + LLM', 'Ollama': 'سطح مكتب لمستخدم واحد، سير عمل بـ Modelfile', 'vLLM': 'خدمة GPU عالية الإنتاجية' },
          { 'Criterio': 'هل يتطلب GPU؟', 'Xinference': 'لا (خلفية llama.cpp)', 'Ollama': 'لا (وضع CPU متاح)', 'vLLM': 'نعم (CUDA/ROCm)' },
          { 'Criterio': 'تبديل النماذج', 'Xinference': 'عدة نماذج تعمل في وقت واحد', 'Ollama': 'نموذج واحد في كل مرة (تبديل)', 'vLLM': 'نموذج واحد لكل نسخة خادم' },
          { 'Criterio': 'دعم embeddings', 'Xinference': 'نعم (BGE، E5، إلخ)', 'Ollama': 'نعم (محدود)', 'vLLM': 'لا (خادم embeddings منفصل)' },
          { 'Criterio': 'واجهة الويب', 'Xinference': 'مدمجة على localhost:9997', 'Ollama': 'لا شيء (استخدم Open WebUI)', 'vLLM': 'لا شيء' },
          { 'Criterio': 'دعم ChatGLM', 'Xinference': 'أصلي (chatglm4)', 'Ollama': 'محدود', 'vLLM': 'محدود' },
        ],
        columns: ['المعيار', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: 'اختر Xinference عندما تحتاج إلى تقديم أنواع نماذج متعددة في وقت واحد (LLM + embeddings + reranker) أو دعمًا أصليًا لـ ChatGLM — اختر Ollama لراحة سطح المكتب لمستخدم واحد.' },
        ],
        faqs: [
          { q: 'هل Xinference أصعب في الإعداد من Ollama؟', a: 'قليلًا. Ollama تنزيل ثنائي واحد؛ بينما يتطلب Xinference بايثون وpip. لكن كليهما جاهز في أقل من 5 دقائق. يقدّم Xinference بيئة متعددة النماذج أغنى بمجرد تشغيله.' },
          { q: 'هل يمكن لـ Xinference أن يحل محل vLLM؟', a: 'للخدمة على جهاز واحد، نعم — يمكن لـ Xinference استخدام vLLM كخلفية (`--model-engine vllm`) ويضيف واجهة ويب وسجل نماذج. لأقصى إنتاجية خام عبر عدة عُقد GPU، تبقى عمليات نشر vLLM المخصصة أسرع.' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هو Xinference؟', a: 'Xinference (Xorbits Inference) هو إطار مفتوح المصدر لتقديم النماذج يشغّل Llama 3 وQwen وChatGLM وMistral وأكثر من 30 عائلة محليًا عبر واجهة API متوافقة مع OpenAI. يدعم عمليات النشر على GPU، وCPU (عبر llama.cpp)، وعناقيد متعددة GPU.' },
          { q: 'أي نماذج يدعم Xinference في 2026؟', a: 'يسجّل Xinference أكثر من 200 تكوين نماذج. الأكثر شيوعًا في 2026 هي Llama 3.3 8B/70B Instruct، وQwen 3 7B/72B Instruct، وChatGLM4 9B، وMistral Small Instruct v0.3، وMixtral 8x22B Instruct. شغّل `xinference registrations --model-type LLM` لرؤية القائمة الكاملة.' },
          { q: 'كيف ينزّل Xinference أوزان النموذج؟', a: 'عند أول `xinference launch` لكل نموذج، ينزّل Xinference الأوزان من Hugging Face أو ModelScope (قابل للتكوين). تُخزّن الأوزان مؤقتًا محليًا، لذا فالإطلاقات اللاحقة فورية. اضبط `XINFERENCE_HOME` للتحكم في دليل التخزين المؤقت.' },
          { q: 'هل يعمل Xinference على Windows؟', a: 'نعم، عبر pip على بايثون 3.9+. تعمل خلفية llama.cpp على CPU في Windows دون اعتماديات إضافية. لدعم GPU على Windows، ثبّت CUDA 12.x وwheel PyTorch المقابل قبل تثبيت Xinference.' },
          { q: 'هل يمكنني استخدام Xinference لـ RAG؟', a: 'نعم. أطلِق نموذج embedding من BGE أو E5 (`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`) جنبًا إلى جنب مع LLM لديك. يشترك كلاهما في نقطة نهاية API نفسها — يستدعي مسار RAG نقطة نهاية embedding للفهرسة ونقطة نهاية الدردشة للتوليد.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ar/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference: تشغيل Llama 3 وQwen وChatGLM وMistral محليًا 2026',
      'description': 'يدعم Xinference Llama 3 وQwen 3 وChatGLM4 وMistral أصليًا. pip install، xi launch — واجهة API متوافقة مع OpenAI متاحة على localhost:9997.',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'ar',
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ar',
      'mainEntity': [
        { '@type': 'Question', 'name': 'ما هو Xinference؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference (Xorbits Inference) هو إطار مفتوح المصدر لتقديم النماذج يشغّل Llama 3 وQwen وChatGLM وMistral وأكثر من 30 عائلة محليًا عبر واجهة API متوافقة مع OpenAI.' } },
        { '@type': 'Question', 'name': 'أي نماذج يدعم Xinference في 2026؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'الأكثر شيوعًا هي Llama 3.3 8B/70B Instruct، وQwen 3 7B/72B Instruct، وChatGLM4 9B، وMistral Small Instruct v0.3، وMixtral 8x22B Instruct.' } },
        { '@type': 'Question', 'name': 'هل يدعم Xinference نموذج Llama 3؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. استخدم --model-name llama-3.1-instruct مع --model-size-in-billions 8 لنسخة 8B. بدّل إلى llama.cpp بـ --quantization q4_k_m لـ CPU أو VRAM المنخفض.' } },
        { '@type': 'Question', 'name': 'هل يدعم Xinference نموذج ChatGLM؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. ChatGLM3 وChatGLM4 وChatGLM4-Vision جميعها مسجّلة. ChatGLM4 9B هو الخيار الموصى به للمهام بالصينية في 2026.' } },
        { '@type': 'Question', 'name': 'هل يمكنني استخدام Xinference لـ RAG؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. أطلِق نموذج embedding من BGE جنبًا إلى جنب مع LLM لديك — يشترك كلاهما في نقطة نهاية API نفسها على localhost:9997/v1.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'النماذج المدعومة في Xinference 2026',
      'description': 'أكثر سبعة تكوينات نماذج طلبًا في Xinference مع متطلبات VRAM',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — ~6 GB VRAM (Q4)، استخدام عام بالإنجليزية' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — ~40 GB VRAM، مخرجات إنجليزية عالية الجودة عبر vLLM' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — ~6 GB VRAM (Q4)، متعدد اللغات، CJK، البرمجة' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — ~40 GB VRAM، مهام CJK واسعة النطاق عبر vLLM' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — ~7 GB VRAM، مهام مؤسسية بالصينية' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — ~5 GB VRAM (Q4)، اللغات الأوروبية واستدعاء الدوال' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — ~26 GB VRAM، متعدد اللغات عالي الجودة عبر vLLM' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference: executar Llama 3, Qwen, ChatGLM e Mistral localmente 2026',
    seoTitle: 'Xinference 2026: Llama 3, Qwen, ChatGLM e Mistral local',
    intro: 'O Xinference (Xorbits Inference) é um framework de código aberto que permite servir Llama 3, Qwen 3, ChatGLM4, Mistral e mais de 30 famílias de modelos via uma única API compatível com OpenAI — instalado com um comando pip e lançado com uma única chamada CLI. Ao contrário do Ollama, voltado para a conveniência do usuário final, o Xinference é projetado para equipes que precisam de serviço multi-modelo, suporte a clusters GPU e embeddings/reranking junto à inferência LLM. Este guia cobre as famílias de modelos suportadas, instalação, comandos de lançamento por modelo e como o Xinference se compara ao Ollama e vLLM.',
    metaDescription: 'Xinference suporta Llama 3, Qwen 3, ChatGLM4 e Mistral nativamente. pip install, xi launch — API compatível com OpenAI disponível em localhost:9997.',
    publishDate: '2026-05-23',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e engenheiros de ML que precisam de um servidor de inferência multi-modelo local que gerencie Llama 3, Qwen, ChatGLM, Mistral e modelos de embeddings via uma API compatível com OpenAI unificada',
    primaryTerm: 'modelos compatíveis com Xinference',
    leadAnswerBlock: '**O Xinference suporta Llama 3, Qwen 3, ChatGLM4, Mistral e mais de 30 famílias de modelos via API compatível com OpenAI. Instale com `pip install xinference[all]` e lance qualquer modelo com `xi launch --model-name <nome> --model-type LLM`.**',
    quickAnswerTop: {
      pt: {
        question: 'Quais modelos o Xinference suporta?', // VERIFY
        answer: 'O Xinference suporta nativamente Llama 3.3 (8B e 70B), Qwen 3 (0,5B a 72B), ChatGLM4 (9B), Mistral Small v0.3, Mixtral 8x22B e mais de 30 famílias adicionais. Cada modelo é lançado com um único comando `xinference launch` e servido via uma API REST compatível com OpenAI em localhost:9997.', // VERIFY
        bullets: [
          'Instalação: `pip install "xinference[all]"` — inclui os backends CUDA, llama.cpp e transformers', // VERIFY
          'Iniciar servidor: `xinference-local` — a interface web abre em http://localhost:9997', // VERIFY
          'Lançar modelo: `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`', // VERIFY
          'Endpoint da API: `http://localhost:9997/v1` — substituto direto para qualquer cliente da API da OpenAI', // VERIFY
        ],
        updatedDate: '2026-05-23',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Por que usar Xinference em vez de Ollama?', anchor: '#vs-ollama' },
      { label: 'Modelos suportados', anchor: '#supported-models' },
      { label: 'Instalação', anchor: '#installation' },
      { label: 'Lançar modelos', anchor: '#launch-models' },
      { label: 'Xinference vs Ollama vs vLLM', anchor: '#comparison' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Instalação em um comando**: `pip install xinference[all]` + `xinference-local`.',
          '**Suporta 30+ famílias**: Llama 3, Qwen 3, ChatGLM4, Mistral, Mixtral, Gemma, DeepSeek, BGE (embeddings) e mais.',
          '**API compatível com OpenAI** disponível em `localhost:9997/v1` — sem mudanças no código da aplicação.',
          '**Multi-modelo simultâneo**: execute Qwen 3 7B para chat + BGE para embeddings ao mesmo tempo, no mesmo servidor.',
          '**Escolha de backend**: llama.cpp (CPU/GPU consumidor) ou vLLM (produção de alto rendimento).',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'O Xinference serve Llama 3, Qwen 3, ChatGLM4 e Mistral via uma única API compatível com OpenAI — instalado com um pip install e lançado com xi launch.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que é o Xinference?', a: 'Xinference (Xorbits Inference) é um framework de código aberto para servir modelos que executa Llama 3, Qwen, ChatGLM, Mistral e mais de 30 famílias localmente via uma API compatível com OpenAI.' },
          { q: 'Quais modelos o Xinference suporta em 2026?', a: 'Os mais populares são Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 e Mixtral 8x22B Instruct.' },
          { q: 'O Xinference suporta o Llama 3?', a: 'Sim. Use `--model-name llama-3.1-instruct` com `--model-size-in-billions 8` para a variante 8B. Mude para llama.cpp com `--quantization q4_k_m` para CPU ou VRAM reduzida.' },
          { q: 'O Xinference suporta o ChatGLM?', a: 'Sim. ChatGLM3, ChatGLM4 e ChatGLM4-Vision estão todos registrados. ChatGLM4 9B é a opção recomendada para tarefas em chinês em 2026.' },
          { q: 'Posso usar o Xinference para RAG?', a: 'Sim. Lance um modelo de embedding BGE junto ao seu LLM — ambos compartilham o mesmo endpoint da API em localhost:9997/v1.' },
          { q: 'Xinference vs Ollama: qual devo usar?', a: 'Use o Ollama para uso pessoal e desenvolvimento — mais simples, melhor UX. Use o Xinference para equipes que precisam de multi-modelo simultâneo, embeddings + LLM no mesmo servidor, ou suporte nativo ao vLLM para produção de alto rendimento.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Xinference: executar Llama 3, Qwen, ChatGLM e Mistral localmente 2026',
      description: 'Xinference suporta Llama 3, Qwen 3, ChatGLM4 e Mistral nativamente. pip install, xi launch — API compatível com OpenAI em localhost:9997.',
      url: 'https://www.promptquorum.com/pt/local-llms/xinference-llama-qwen-chatglm-mistral',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-23',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', 'name': 'O que é o Xinference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference (Xorbits Inference) é um framework de código aberto para servir modelos que executa Llama 3, Qwen, ChatGLM, Mistral e mais de 30 famílias localmente via uma API compatível com OpenAI.' } },
        { '@type': 'Question', 'name': 'Quais modelos o Xinference suporta em 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Os mais populares são Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 e Mixtral 8x22B Instruct.' } },
        { '@type': 'Question', 'name': 'O Xinference suporta o Llama 3?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim. Use --model-name llama-3.1-instruct com --model-size-in-billions 8 para a variante 8B. Mude para llama.cpp com --quantization q4_k_m para CPU ou VRAM reduzida.' } },
        { '@type': 'Question', 'name': 'O Xinference suporta o ChatGLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim. ChatGLM3, ChatGLM4 e ChatGLM4-Vision estão todos registrados. ChatGLM4 9B é a opção recomendada para tarefas em chinês em 2026.' } },
        { '@type': 'Question', 'name': 'Posso usar o Xinference para RAG?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim. Lance um modelo de embedding BGE junto ao seu LLM — ambos compartilham o mesmo endpoint da API em localhost:9997/v1.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'pt-BR',
      'name': 'Modelos compatíveis com Xinference 2026',
      'description': 'As sete configurações de modelos mais solicitadas no Xinference com requisitos de VRAM',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — ~6 GB VRAM (Q4), uso geral em inglês' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — ~40 GB VRAM, saída em inglês de alta qualidade via vLLM' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — ~6 GB VRAM (Q4), multilíngue, CJK, programação' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — ~40 GB VRAM, tarefas CJK em grande escala via vLLM' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — ~7 GB VRAM, tarefas empresariais em chinês' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — ~5 GB VRAM (Q4), idiomas europeus e chamadas de função' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — ~26 GB VRAM, multilíngue de alta qualidade via vLLM' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference: Llama 3, Qwen, ChatGLM & Mistral lokal ausführen 2026',
    seoTitle: 'Xinference 2026: Llama 3, Qwen, ChatGLM & Mistral lokal',
    intro: 'Xinference (Xorbits Inference) ist ein Open-Source-Framework, mit dem Sie Llama 3, Qwen 3, ChatGLM4, Mistral und über 30 weitere Modellfamilien über eine einzige OpenAI-kompatible API bereitstellen können — installiert mit einem pip-Befehl, gestartet mit einem CLI-Aufruf. Im Gegensatz zu Ollama, das auf Benutzerfreundlichkeit ausgelegt ist, wurde Xinference für Teams entwickelt, die Multi-Modell-Serving, GPU-Cluster-Unterstützung und Embedding/Reranking neben der LLM-Inferenz benötigen. Diese Anleitung behandelt unterstützte Modellfamilien, Installation, Startbefehle und einen Vergleich mit Ollama und vLLM.',
    metaDescription: 'Xinference unterstützt Llama 3, Qwen 3, ChatGLM4 und Mistral nativ. Einrichten mit pip, Modell per xi launch starten — OpenAI-API auf localhost:9997.',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler und ML-Ingenieure, die einen Multi-Modell-Inferenz-Server für Llama 3, Qwen, ChatGLM, Mistral und Embedding-Modelle über eine einheitliche OpenAI-kompatible API benötigen',
    primaryTerm: 'Xinference unterstützte Modelle',
    targetKeywords: [
      'xinference unterstützte modelle',
      'xinference llama 3 qwen chatglm mistral',
      'xinference einrichten 2026',
      'xinference vs ollama',
      'mehrere llms lokal xinference',
      'xinference openai kompatible api',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: ['5 GB VRAM', '6 GB VRAM', '7 GB VRAM', '16 GB VRAM', '40 GB VRAM'],
    leadAnswerBlock: '**Installieren Sie Xinference mit `pip install "xinference[all]"`, starten Sie es mit `xinference-local`, und führen Sie dann `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8` aus.** Xinference unterstützt nativ Llama 3, Qwen 3, ChatGLM4, Mistral und über 30 weitere Familien — alle über eine OpenAI-kompatible API auf localhost:9997.',
    quickAnswerTop: {
      de: {
        question: 'Welche Modelle unterstützt Xinference?',
        answer: 'Xinference unterstützt nativ Llama 3.3 (8B und 70B), Qwen 3 (0,5B bis 72B), ChatGLM4 (9B), Mistral Small v0.3, Mixtral 8x22B und über 30 weitere Familien. Jedes Modell wird mit einem einzigen `xinference launch`-Befehl gestartet und stellt eine OpenAI-kompatible REST-API auf localhost:9997 bereit.',
        bullets: [
          'Installation: `pip install "xinference[all]"` — enthält CUDA-, llama.cpp- und transformers-Backends',
          'Server starten: `xinference-local` — Web-Oberfläche öffnet sich auf http://localhost:9997',
          'Modell starten: `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'API-Endpunkt: `http://localhost:9997/v1` — direkter Ersatz für jeden OpenAI-API-Client',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          '**Xinference bedient über 30 Modellfamilien über eine einzige API** — Llama 3, Qwen 3, ChatGLM4, Mistral, Embedding-Modelle und Reranker teilen denselben Endpunkt auf localhost:9997/v1.',
          '**Ein pip install, ein CLI-Befehl** — `pip install "xinference[all]"` dann `xinference-local` startet den Server mit Web-Oberfläche; `xinference launch --model-name <Name>` deployt jedes Modell.',
          '**Drei wählbare Backends** — `transformers` (GPU, volle Präzision), `llama.cpp` (CPU + quantisiertes GGUF, kein GPU erforderlich), `vllm` (hoher Durchsatz, mehrere GPUs). Pro Modell konfigurierbar.',
          '**Qwen 3 und ChatGLM4 sind die besten Xinference-Optionen für CJK-Aufgaben** — beide laufen in ~6–7 GB VRAM und übertreffen vergleichbare englischsprachige Modelle auf chinesischen und japanischen Benchmarks.',
          '**Bevorzuge Xinference gegenüber Ollama, wenn du Multi-Modell-Serving, Embedding + Reranking oder GPU-Cluster-Unterstützung benötigst** — Ollama ist besser für einfache Desktop-Nutzung.',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'Was Xinference ist und wie es funktioniert',
        content: 'Xinference (github.com/xorbitsai/inference) ist ein Open-Source-Framework für LLM- und multimodale Modellbereitstellung von Xorbits. Es wurde als Enterprise-Inferenzplattform für verteilte Cluster entwickelt und 2023 als Open Source veröffentlicht. Kernidee: Du registrierst ein Modell nach Name, Xinference lädt die Gewichte herunter, wählt das richtige Backend und stellt eine REST-API bereit.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference ist ein Open-Source-Inferenz-Server, der Llama 3, Qwen 3, ChatGLM4, Mistral und über 30 weitere Modellfamilien nativ über eine einzige OpenAI-kompatible API unterstützt.' },
          { type: 'plain-terms', text: 'Stell dir Xinference als eine Vermittlungsstelle für lokale KI-Modelle vor. Du sagst ihr, welches Modell geladen werden soll, sie lädt es herunter und startet es — deine App kommuniziert damit wie mit der OpenAI-API, ohne Code-Änderungen.' },
        ],
        items: [
          '**Modell-Registrierung**: Über 200 vorregistrierte Modelle. Referenzierung nach Name (`llama-3.1-instruct`, `qwen2.5-instruct`, `chatglm4`) statt manueller Gewichtspfad-Verwaltung.',
          '**Backend-Abstraktion**: Ein Befehl wechselt zwischen transformers-, llama.cpp- und vLLM-Backends — dieselbe API unabhängig vom Backend.',
          '**Multi-Modell-Parallelität**: Llama 3 für Textgenerierung und ein BGE-Embedding-Modell für RAG gleichzeitig auf derselben GPU.',
          '**Web-Oberfläche**: Ein React-Dashboard auf localhost:9997 zum Starten, Inspizieren und Beenden von Modellen ohne Code.',
          '**Cluster-Modus**: Supervisor-Worker-Architektur skaliert über mehrere GPU-Knoten via `xinference start --host 0.0.0.0` auf Workers.',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: 'Unterstützte Modellfamilien: Llama 3, Qwen, ChatGLM, Mistral',
        content: 'Die folgende Tabelle zeigt die sieben meistgefragten Modellkonfigurationen in Xinference mit dem minimal erforderlichen VRAM. Alle sieben teilen dasselbe Befehlsmuster — nur `--model-name`, `--model-size-in-billions` und optional `--quantization` ändern sich.',
        columns: ['Modell', 'Familie', 'VRAM (Q4)', 'Backend', 'Am besten für'],
        rows: [
          { 'Modell': 'llama-3.1-instruct 8B', 'Familie': 'Meta', 'VRAM (Q4)': '~6 GB', 'Backend': 'transformers / llama.cpp', 'Am besten für': 'Allgemeiner Englisch-Einsatz' },
          { 'Modell': 'llama-3.1-instruct 70B', 'Familie': 'Meta', 'VRAM (Q4)': '~40 GB', 'Backend': 'vLLM', 'Am besten für': 'Hochwertige englische Ausgabe' },
          { 'Modell': 'qwen2.5-instruct 7B', 'Familie': 'Alibaba', 'VRAM (Q4)': '~6 GB', 'Backend': 'transformers / llama.cpp', 'Am besten für': 'Mehrsprachig, CJK, Programmierung' },
          { 'Modell': 'qwen2.5-instruct 72B', 'Familie': 'Alibaba', 'VRAM (Q4)': '~40 GB', 'Backend': 'vLLM', 'Am besten für': 'Großmaßstäbliche CJK-Aufgaben' },
          { 'Modell': 'chatglm4 9B', 'Familie': 'Zhipu AI', 'VRAM (Q4)': '~7 GB', 'Backend': 'transformers', 'Am besten für': 'Chinesische Unternehmensaufgaben' },
          { 'Modell': 'mistral-instruct-v0.3 7B', 'Familie': 'Mistral AI', 'VRAM (Q4)': '~5 GB', 'Backend': 'transformers / llama.cpp', 'Am besten für': 'Europäische Sprachen, Funktionsaufruf' },
          { 'Modell': 'mixtral-instruct-v0.1 8x7B', 'Familie': 'Mistral AI', 'VRAM (Q4)': '~26 GB', 'Backend': 'vLLM', 'Am besten für': 'Hochwertige Mehrsprachigkeit' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference unterstützt nativ Llama 3.3 (8B/70B), Qwen 3 (7B/72B), ChatGLM4 9B, Mistral Small v0.3 und Mixtral 8x22B — jedes mit einem einzigen CLI-Befehl startbar.' },
          { type: 'plain-terms', text: 'VRAM ist der Speicher auf Ihrer GPU. Ein Modell, das 6 GB VRAM benötigt, braucht eine GPU mit mindestens diesem Speicher. Bei kleineren GPUs nutzen Sie das llama.cpp-Backend mit Q4-Quantisierung, was den Speicherbedarf etwa halbiert.' },
        ],
        faqs: [
          { q: 'Unterstützt Xinference Llama 3.3?', a: 'Ja. Verwenden Sie `--model-name llama-3.1-instruct` mit `--model-size-in-billions 8` für die 8B-Variante oder `70` für 70B. Wechseln Sie zu llama.cpp mit `--model-engine llama.cpp` und `--quantization q4_k_m` für CPU- oder Low-VRAM-Nutzung.' },
          { q: 'Unterstützt Xinference Qwen 3?', a: 'Ja. Qwen 3 Instruct ist als `qwen2.5-instruct` registriert. Größen 0,5B bis 72B sind verfügbar. Die 7B-Variante läuft in ~6 GB VRAM und verarbeitet Chinesisch, Japanisch, Koreanisch und Englisch mit vergleichbarer Qualität zu Llama 3.3 8B.' },
          { q: 'Unterstützt Xinference ChatGLM?', a: 'Ja. ChatGLM3 (`chatglm3`), ChatGLM4 (`chatglm4`) und ChatGLM4-Vision (`chatglm4v`) sind alle registriert. ChatGLM4 9B ist 2026 die empfohlene Wahl für chinesischsprachige Aufgaben.' },
          { q: 'Unterstützt Xinference Mistral?', a: 'Ja. `mistral-instruct-v0.3` (7B) und `mixtral-instruct-v0.1` (8x7B MoE) sind beide registriert. Für Funktionsaufruf und JSON-Ausgabe ist Mistral Small v0.3 die beste Kleinmodell-Option in Xinference.' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: 'Xinference installieren: pip und Server starten',
        content: 'Xinference erfordert Python 3.9+ und pip. Das `[all]`-Extra installiert CUDA-Unterstützung, das llama.cpp-Backend und das transformers-Backend in einem Schritt. Auf reinen CPU-Maschinen verwenden Sie `pip install xinference` (ohne `[all]`) und fügen `--model-engine llama.cpp` beim Modellstart hinzu.',
        codeBlock: `# Vollständige Installation — CUDA + transformers + llama.cpp Backends
pip install "xinference[all]"

# Nur-CPU-Installation (kein GPU erforderlich)
pip install xinference

# Lokalen Server starten (Web-Oberfläche auf http://localhost:9997)
xinference-local

# Oder an bestimmten Host für LAN-Zugriff binden
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: 'Beim ersten Start werden keine Modellgewichte heruntergeladen — nur der Xinference-Server wird gestartet. Gewichte werden beim ersten `xinference launch`-Aufruf für jedes Modell heruntergeladen.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Installiere Xinference mit `pip install "xinference[all]"` und starte den Server mit `xinference-local` — die Web-Oberfläche öffnet sich auf http://localhost:9997.' },
        ],
        faqs: [
          { q: 'Benötigt Xinference eine GPU?', a: 'Nein. Verwenden Sie das llama.cpp-Backend (`--model-engine llama.cpp`), um quantisierte GGUF-Modelle vollständig auf der CPU auszuführen. Die Performance ist langsamer als GPU-Inferenz, funktioniert aber auf jeder Maschine mit Python 3.9+.' },
          { q: 'Wie aktualisiere ich Xinference?', a: 'Führen Sie `pip install --upgrade xinference` aus. Prüfen Sie vor dem Upgrade die GitHub-Releases auf Breaking Changes, besonders im Cluster-Modus.' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: 'Llama 3, Qwen, ChatGLM und Mistral starten',
        content: 'Verwenden Sie `xinference launch`, um jedes registrierte Modell zu deployen. Das Muster ist immer dasselbe: `--model-name` setzt die Modellfamilie, `--model-size-in-billions` die Parameteranzahl, und `--model-engine` wählt das Backend. Nach dem Start gibt Xinference eine Modell-UID zurück, die Sie in API-Aufrufen verwenden.',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, transformers backend)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, Q4_K_M quantization)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (vLLM backend, requires 26+ GB VRAM)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Starte jedes Xinference-Modell mit `xinference launch --model-name <Name> --model-engine transformers --model-size-in-billions <Größe>` — das Modell ist kurz nach dem Download auf localhost:9997/v1 verfügbar.' },
        ],
        faqs: [
          { q: 'Wie liste ich alle von Xinference unterstützten Modelle auf?', a: 'Führe `xinference registrations --model-type LLM` aus, oder öffne die Web-Oberfläche auf http://localhost:9997 und durchsuche die Modellbibliothek.' },
          { q: 'Kann ich in Xinference gleichzeitig zwei Modelle ausführen?', a: 'Ja — führe `xinference launch` zweimal mit verschiedenen Modellnamen aus. Jedes Modell erhält eine eigene UID und einen eigenen Endpunkt. Das gesamte VRAM-Budget muss beide Modelle gleichzeitig abdecken.' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: 'Die OpenAI-kompatible API verwenden',
        content: 'Xinferences API ist ein Drop-in-Ersatz für die OpenAI-API. Zeige jeden OpenAI-Client auf `http://localhost:9997/v1`, setze `api_key` auf einen beliebigen nicht leeren String, und verwende die Modell-UID als `model`-Parameter. Bestehender LangChain-, LlamaIndex- oder benutzerdefinierter OpenAI-Client-Code funktioniert unverändert.',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Verbinde jeden OpenAI-kompatiblen Client mit Xinference, indem du base_url auf http://localhost:9997/v1 setzt und den Modellnamen als Modell-ID verwendest.' },
          { type: 'plain-terms', text: 'Eine OpenAI-kompatible API bedeutet, dass sich dein Code nicht ändern muss. Derselbe Python-Code, der GPT-4 aufruft, kann über Xinference Llama 3 aufrufen — du tauschst nur die Basis-URL und den Modellnamen aus.' },
        ],
        faqs: [
          { q: 'Unterstützt Xinference Streaming-Antworten?', a: 'Ja. Setze `stream=True` im `chat.completions.create`-Aufruf. Xinference streamt Tokens in Echtzeit für alle unterstützten Backends.' },
          { q: 'Kann ich LangChain mit Xinference verwenden?', a: 'Ja. Verwende `ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")` aus `langchain_openai`. Es ist keine zusätzliche Xinference-spezifische Bibliothek erforderlich.' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference vs. Ollama vs. vLLM: Wann welches Framework wählen',
        content: 'Die drei häufigsten lokalen Inferenz-Frameworks richten sich jeweils an unterschiedliche Nutzergruppen. Wähle anhand deiner primären Anforderung.',
        rows: [
          { 'Kriterium': 'Am besten für', 'Xinference': 'Teams, Multi-Modell, Embeddings + LLM', 'Ollama': 'Einzelnutzer-Desktop, Modelfile-Workflows', 'vLLM': 'Hoher GPU-Durchsatz' },
          { 'Kriterium': 'GPU erforderlich?', 'Xinference': 'Nein (llama.cpp-Backend)', 'Ollama': 'Nein (CPU-Modus verfügbar)', 'vLLM': 'Ja (CUDA/ROCm)' },
          { 'Kriterium': 'Modellwechsel', 'Xinference': 'Mehrere Modelle gleichzeitig', 'Ollama': 'Ein Modell gleichzeitig (Swap)', 'vLLM': 'Ein Modell pro Server-Instanz' },
          { 'Kriterium': 'Embedding-Unterstützung', 'Xinference': 'Ja (BGE, E5 usw.)', 'Ollama': 'Ja (eingeschränkt)', 'vLLM': 'Nein (separater Embedding-Server)' },
          { 'Kriterium': 'Web-Oberfläche', 'Xinference': 'Eingebaut auf localhost:9997', 'Ollama': 'Keine (Open WebUI verwenden)', 'vLLM': 'Keine' },
          { 'Kriterium': 'ChatGLM-Unterstützung', 'Xinference': 'Nativ (chatglm4)', 'Ollama': 'Eingeschränkt', 'vLLM': 'Eingeschränkt' },
        ],
        columns: ['Kriterium', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Wähle Xinference, wenn du mehrere Modelltypen gleichzeitig bereitstellen musst (LLM + Embeddings + Reranker) oder nativen ChatGLM-Support benötigst — wähle Ollama für einfache Desktop-Nutzung.' },
        ],
        faqs: [
          { q: 'Ist Xinference schwieriger einzurichten als Ollama?', a: 'Etwas schwieriger. Ollama ist ein einzelner Binary-Download; Xinference erfordert Python und pip. Aber beide sind in unter 5 Minuten einsatzbereit. Xinference bietet eine reichhaltigere Multi-Modell-Umgebung nach dem Start.' },
          { q: 'Kann Xinference vLLM ersetzen?', a: 'Für Single-Machine-Serving ja — Xinference kann vLLM als Backend verwenden (`--model-engine vllm`) und fügt Web-Oberfläche und Modell-Registrierung hinzu. Für maximalen Rohdurchsatz über mehrere GPU-Knoten sind dedizierte vLLM-Deployments noch schneller.' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist Xinference?', a: 'Xinference (Xorbits Inference) ist ein Open-Source-Framework für Modellbereitstellung, das Llama 3, Qwen, ChatGLM, Mistral und über 30 weitere Familien lokal über eine OpenAI-kompatible API ausführt. Es unterstützt GPU-, CPU- (via llama.cpp) und Multi-GPU-Cluster-Deployments.' },
          { q: 'Welche Modelle unterstützt Xinference 2026?', a: 'Xinference registriert über 200 Modellkonfigurationen. Die beliebtesten 2026 sind Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 und Mixtral 8x22B Instruct. Führe `xinference registrations --model-type LLM` aus, um die vollständige Liste zu sehen.' },
          { q: 'Wie lädt Xinference Modellgewichte herunter?', a: 'Beim ersten `xinference launch` für jedes Modell lädt Xinference Gewichte von Hugging Face oder ModelScope (konfigurierbar) herunter. Gewichte werden lokal gecacht, sodass nachfolgende Starts sofort erfolgen. Setze `XINFERENCE_HOME` zur Steuerung des Cache-Verzeichnisses.' },
          { q: 'Funktioniert Xinference auf Windows?', a: 'Ja, über pip auf Python 3.9+. Das llama.cpp-Backend funktioniert auf Windows CPU ohne zusätzliche Abhängigkeiten. Für GPU-Unterstützung installiere CUDA 12.x und das entsprechende PyTorch-Wheel vor der Xinference-Installation.' },
          { q: 'Kann ich Xinference für RAG verwenden?', a: 'Ja. Starte ein BGE- oder E5-Embedding-Modell (`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`) neben deinem LLM. Beide teilen denselben API-Endpunkt — deine RAG-Pipeline ruft den Embedding-Endpunkt für die Indizierung und den Chat-Endpunkt für die Generierung auf.' },
          { q: 'Muss ich bei der Verwendung von Xinference die DSGVO beachten?', a: 'Xinference verarbeitet alle Anfragen lokal — keine Daten werden an externe Dienste übertragen. Das erfüllt DSGVO Art. 32 (technische Sicherheitsmaßnahmen) und Art. 25 (Datenschutz durch Technikgestaltung). Für den Unternehmenseinsatz: Verarbeitungsverzeichnis (Art. 30) führen und bei besonders sensiblen Daten eine Datenschutz-Folgenabschätzung (Art. 35) durchführen.' },
          { q: 'Ist Xinference für den deutschen Mittelstand geeignet?', a: 'Ja, besonders gut. Mittelständische Unternehmen profitieren von vollständiger Datensouveränität, einfacher Python-Integration und Multi-Modell-Serving für verschiedene Fachabteilungen. Das BSI empfiehlt lokale KI-Systeme für kritische Verarbeitungsprozesse statt Cloud-APIs. Xinference läuft auf handelsüblicher Hardware (RTX 4070 oder besser).' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/de/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference: Llama 3, Qwen, ChatGLM & Mistral lokal ausführen 2026',
      'description': 'Xinference unterstützt Llama 3, Qwen 3, ChatGLM4 und Mistral nativ. Einrichten mit pip, Modell per xi launch starten — OpenAI-API auf localhost:9997.',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Was ist Xinference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference ist ein Open-Source-Framework für Modellbereitstellung, das Llama 3, Qwen, ChatGLM, Mistral und über 30 weitere Familien lokal über eine OpenAI-kompatible API ausführt.' } },
        { '@type': 'Question', 'name': 'Welche Modelle unterstützt Xinference 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Die beliebtesten sind Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 und Mixtral 8x22B Instruct.' } },
        { '@type': 'Question', 'name': 'Unterstützt Xinference Llama 3?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. --model-name llama-3.1-instruct mit --model-size-in-billions 8 für 8B. Wechsel zu llama.cpp mit --quantization q4_k_m für CPU.' } },
        { '@type': 'Question', 'name': 'Unterstützt Xinference ChatGLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. ChatGLM3, ChatGLM4 und ChatGLM4-Vision sind alle registriert. ChatGLM4 9B ist 2026 die empfohlene Wahl für chinesischsprachige Aufgaben.' } },
        { '@type': 'Question', 'name': 'Muss ich bei der Verwendung von Xinference die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference verarbeitet Daten ausschließlich lokal ohne externe Übertragung — erfüllt DSGVO Art. 32 und Art. 25 (Privacy by Design). Für Enterprise: Verarbeitungsverzeichnis Art. 30 führen.' } },
        { '@type': 'Question', 'name': 'Ist Xinference für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Vollständige Datensouveränität, einfache Python-Integration, Multi-Modell-Serving. BSI empfiehlt lokale KI für kritische Prozesse. Läuft auf RTX 4070 oder besser.' } },
        { '@type': 'Question', 'name': 'Kann ich Xinference für RAG verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. BGE-Embedding-Modell neben dem LLM starten — beide teilen denselben API-Endpunkt auf localhost:9997/v1.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Xinference unterstützte Modelle 2026',
      'description': 'Die sieben meistgefragten Modellkonfigurationen in Xinference mit VRAM-Anforderungen',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — ~6 GB VRAM (Q4), allgemeiner Englisch-Einsatz' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — ~40 GB VRAM, hochwertige englische Ausgabe via vLLM' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — ~6 GB VRAM (Q4), mehrsprachig, CJK, Programmierung' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — ~40 GB VRAM, großmaßstäbliche CJK-Aufgaben via vLLM' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — ~7 GB VRAM, chinesische Unternehmensaufgaben' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — ~5 GB VRAM (Q4), europäische Sprachen und Funktionsaufruf' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — ~26 GB VRAM, hochwertige Mehrsprachigkeit via vLLM' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference : exécuter Llama 3, Qwen, ChatGLM & Mistral localement 2026',
    seoTitle: 'Xinference 2026 : Llama 3, Qwen, ChatGLM et Mistral en local',
    intro: 'Xinference (Xorbits Inference) est un framework open source qui permet de servir Llama 3, Qwen 3, ChatGLM4, Mistral et plus de 30 autres familles de modèles via une API compatible OpenAI — installé en une commande pip, lancé en un appel CLI. Contrairement à Ollama, conçu pour la commodité utilisateur, Xinference cible les équipes qui ont besoin du service multi-modèle, du support cluster GPU et des embeddings/reranking aux côtés de l\'inférence LLM.',
    metaDescription: 'Xinference supporte Llama 3, Qwen 3, ChatGLM4 et Mistral nativement. pip install, xi launch — API compatible OpenAI disponible sur localhost:9997.',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs et ingénieurs ML ayant besoin d\'un serveur d\'inférence multi-modèle local gérant Llama 3, Qwen, ChatGLM, Mistral et modèles d\'embeddings via une API compatible OpenAI unifiée',
    primaryTerm: 'modèles supportés Xinference',
    targetKeywords: [
      'modèles supportés xinference',
      'xinference llama 3 qwen chatglm mistral',
      'guide configuration xinference 2026',
      'xinference vs ollama',
      'exécuter plusieurs llm localement xinference',
      'xinference api compatible openai',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: ['5 GB VRAM', '6 GB VRAM', '7 GB VRAM', '16 GB VRAM', '40 GB VRAM'],
    leadAnswerBlock: '**Installez Xinference avec `pip install "xinference[all]"`, démarrez-le avec `xinference-local`, puis exécutez `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`.** Xinference supporte nativement Llama 3, Qwen 3, ChatGLM4, Mistral et plus de 30 autres familles — tous servis via une API compatible OpenAI sur localhost:9997.',
    quickAnswerTop: {
      fr: {
        question: 'Quels modèles Xinference supporte-t-il ?',
        answer: 'Xinference supporte nativement Llama 3.3 (8B et 70B), Qwen 3 (0,5B à 72B), ChatGLM4 (9B), Mistral Small v0.3, Mixtral 8x22B et plus de 30 autres familles. Chaque modèle se lance avec une seule commande `xinference launch` et est servi via une API REST compatible OpenAI sur localhost:9997.',
        bullets: [
          'Installation : `pip install "xinference[all]"` — inclut les backends CUDA, llama.cpp et transformers',
          'Démarrer le serveur : `xinference-local` — l\'interface web s\'ouvre sur http://localhost:9997',
          'Lancer un modèle : `xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'Point d\'entrée API : `http://localhost:9997/v1` — remplacement direct pour tout client API OpenAI',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Points clés',
        isTldr: true,
        items: [
          '**Xinference sert plus de 30 familles de modèles via une seule API** — Llama 3, Qwen 3, ChatGLM4, Mistral, modèles d\'embeddings et rerankers partagent le même point d\'entrée sur localhost:9997/v1.',
          '**Un pip install, une commande CLI** — `pip install "xinference[all]"` puis `xinference-local` démarre le serveur ; `xinference launch --model-name <nom>` déploie n\'importe quel modèle.',
          '**Trois backends au choix** — `transformers` (GPU, pleine précision), `llama.cpp` (CPU + GGUF quantifié, sans GPU), `vllm` (GPU multi, haut débit). Commutable par modèle.',
          '**Qwen 3 et ChatGLM4 sont les meilleurs choix pour les tâches CJK** — tous deux en ~6–7 Go de VRAM, surpassant les modèles anglais équivalents sur les benchmarks chinois et japonais.',
          '**Préférez Xinference à Ollama pour le service multi-modèle, les embeddings + reranking ou le support cluster GPU** — Ollama reste préférable pour la simplicité desktop mono-utilisateur.',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'Ce qu\'est Xinference et comment il fonctionne',
        content: 'Xinference (github.com/xorbitsai/inference) est un framework open source de service de modèles LLM développé par Xorbits, open-sourcé en 2023. L\'idée centrale : vous enregistrez un modèle par nom, Xinference télécharge les poids, sélectionne le bon backend et expose une API REST. Vous ne touchez jamais directement au code de chargement de modèle. La CNIL recommande l\'inférence locale pour le traitement de données professionnelles sensibles (juridique, médical, financier).',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference est un serveur d\'inférence open source qui supporte nativement Llama 3, Qwen 3, ChatGLM4, Mistral et plus de 30 autres familles via une API compatible OpenAI.' },
          { type: 'plain-terms', text: 'Imaginez Xinference comme un standard téléphonique pour les modèles d\'IA locaux. Vous indiquez le nom du modèle, il le télécharge et le démarre, et votre application lui parle comme à l\'API OpenAI — sans modification de code.' },
        ],
        items: [
          '**Registre de modèles** : plus de 200 modèles pré-enregistrés. Référencés par nom (`llama-3.1-instruct`, `qwen2.5-instruct`, `chatglm4`) sans gestion manuelle des chemins.',
          '**Abstraction de backend** : une commande bascule entre transformers, llama.cpp et vLLM — même API quel que soit le backend.',
          '**Concurrence multi-modèle** : Llama 3 pour la génération de texte et BGE pour RAG simultanément sur le même GPU.',
          '**Interface web** : tableau de bord React sur localhost:9997 pour lancer, inspecter et arrêter des modèles sans code.',
          '**Mode cluster** : architecture superviseur + workers s\'étend sur plusieurs nœuds GPU via `xinference start --host 0.0.0.0`.',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: 'Familles de modèles supportées : Llama 3, Qwen, ChatGLM, Mistral',
        content: 'Le tableau ci-dessous présente les sept configurations les plus demandées dans Xinference avec le VRAM minimum requis. Toutes partagent le même schéma de commande — seuls `--model-name`, `--model-size-in-billions` et optionnellement `--quantization` changent.',
        columns: ['Modèle', 'Famille', 'VRAM (Q4)', 'Backend', 'Idéal pour'],
        rows: [
          { 'Modèle': 'llama-3.1-instruct 8B', 'Famille': 'Meta', 'VRAM (Q4)': '~6 Go', 'Backend': 'transformers / llama.cpp', 'Idéal pour': 'Usage général en anglais' },
          { 'Modèle': 'llama-3.1-instruct 70B', 'Famille': 'Meta', 'VRAM (Q4)': '~40 Go', 'Backend': 'vLLM', 'Idéal pour': 'Sortie anglaise haute qualité' },
          { 'Modèle': 'qwen2.5-instruct 7B', 'Famille': 'Alibaba', 'VRAM (Q4)': '~6 Go', 'Backend': 'transformers / llama.cpp', 'Idéal pour': 'Multilingue, CJK, code' },
          { 'Modèle': 'qwen2.5-instruct 72B', 'Famille': 'Alibaba', 'VRAM (Q4)': '~40 Go', 'Backend': 'vLLM', 'Idéal pour': 'Tâches CJK à grande échelle' },
          { 'Modèle': 'chatglm4 9B', 'Famille': 'Zhipu AI', 'VRAM (Q4)': '~7 Go', 'Backend': 'transformers', 'Idéal pour': 'Tâches entreprise en chinois' },
          { 'Modèle': 'mistral-instruct-v0.3 7B', 'Famille': 'Mistral AI', 'VRAM (Q4)': '~5 Go', 'Backend': 'transformers / llama.cpp', 'Idéal pour': 'Langues européennes, appels de fonctions' },
          { 'Modèle': 'mixtral-instruct-v0.1 8x7B', 'Famille': 'Mistral AI', 'VRAM (Q4)': '~26 Go', 'Backend': 'vLLM', 'Idéal pour': 'Multilingue haute qualité' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference supporte nativement Llama 3.3 (8B/70B), Qwen 3 (7B/72B), ChatGLM4 9B, Mistral Small v0.3 et Mixtral 8x22B — chacun lançable avec une seule commande CLI.' },
          { type: 'plain-terms', text: 'La VRAM est la mémoire de votre GPU. Un modèle nécessitant 6 Go requiert un GPU avec au moins cette capacité. Si votre GPU est plus petit, utilisez le backend llama.cpp avec la quantification Q4, qui réduit la mémoire requise d\'environ moitié.' },
        ],
        faqs: [
          { q: 'Xinference supporte-t-il Llama 3.3 ?', a: 'Oui. Utilisez `--model-name llama-3.1-instruct` avec `--model-size-in-billions 8` pour la variante 8B ou `70` pour la 70B. Basculez vers llama.cpp avec `--quantization q4_k_m` pour CPU ou faible VRAM.' },
          { q: 'Xinference supporte-t-il Qwen 3 ?', a: 'Oui. Enregistré sous `qwen2.5-instruct`, tailles 0.5B à 72B disponibles. La variante 7B tourne en ~6 Go de VRAM et gère le chinois, japonais, coréen et anglais avec une qualité comparable à Llama 3.3 8B.' },
          { q: 'Xinference supporte-t-il ChatGLM ?', a: 'Oui. ChatGLM3, ChatGLM4 et ChatGLM4-Vision sont tous enregistrés. ChatGLM4 9B est le choix recommandé pour les tâches en chinois en 2026.' },
          { q: 'Xinference supporte-t-il Mistral ?', a: 'Oui. `mistral-instruct-v0.3` (7B) et `mixtral-instruct-v0.1` (8x7B MoE) sont tous deux enregistrés. Mistral Small v0.3 est la meilleure option petite taille pour les appels de fonctions.' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: 'Installer Xinference : pip et démarrer le serveur',
        content: 'Xinference nécessite Python 3.9+ et pip. L\'extra `[all]` installe le support CUDA, le backend llama.cpp et le backend transformers en une fois. Sur les machines sans GPU, utilisez `pip install xinference` (sans `[all]`) et ajoutez `--model-engine llama.cpp` lors du lancement des modèles.',
        codeBlock: `# Installation complète — backends CUDA + transformers + llama.cpp
pip install "xinference[all]"

# Installation CPU uniquement (pas de GPU requis)
pip install xinference

# Démarrer le serveur local (interface web sur http://localhost:9997)
xinference-local

# Ou lier à un hôte spécifique pour accès LAN
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: 'Au premier démarrage, aucun poids de modèle n\'est téléchargé — seul le serveur Xinference démarre. Les poids se téléchargent lors du premier appel `xinference launch` pour chaque modèle.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Installez Xinference avec `pip install "xinference[all]"` et démarrez le serveur avec `xinference-local` — l\'interface web s\'ouvre sur http://localhost:9997.' },
        ],
        faqs: [
          { q: 'Xinference nécessite-t-il un GPU ?', a: 'Non. Utilisez le backend llama.cpp (`--model-engine llama.cpp`) pour exécuter des modèles GGUF quantifiés entièrement sur CPU. Fonctionne sur toute machine avec Python 3.9+, plus lentement qu\'avec GPU.' },
          { q: 'Comment mettre à jour Xinference ?', a: 'Exécutez `pip install --upgrade xinference`. Consultez les notes de version GitHub avant de mettre à jour, surtout en mode cluster.' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: 'Lancer Llama 3, Qwen, ChatGLM et Mistral',
        content: 'Utilisez `xinference launch` pour déployer tout modèle enregistré. Le schéma est identique pour tous : `--model-name` définit la famille, `--model-size-in-billions` le nombre de paramètres, `--model-engine` sélectionne le backend. Xinference retourne un UID de modèle à utiliser dans les appels API.',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, backend transformers)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, quantization Q4_K_M)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (backend vLLM, nécessite 26+ Go VRAM)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Lancez tout modèle Xinference avec `xinference launch --model-name <nom> --model-engine transformers --model-size-in-billions <taille>` — disponible sur localhost:9997/v1 peu après le téléchargement.' },
        ],
        faqs: [
          { q: 'Comment lister tous les modèles supportés par Xinference ?', a: 'Exécutez `xinference registrations --model-type LLM` ou ouvrez l\'interface web sur http://localhost:9997 pour parcourir la bibliothèque de modèles.' },
          { q: 'Puis-je exécuter deux modèles simultanément dans Xinference ?', a: 'Oui — exécutez `xinference launch` deux fois avec des noms différents. Chaque modèle reçoit son propre UID et point d\'entrée. Votre VRAM total doit couvrir les deux modèles simultanément.' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: 'Utiliser l\'API compatible OpenAI',
        content: 'L\'API de Xinference est un remplacement direct de l\'API OpenAI. Pointez n\'importe quel client OpenAI sur `http://localhost:9997/v1`, définissez `api_key` sur n\'importe quelle chaîne non vide, et utilisez l\'UID du modèle comme paramètre `model`. Le code LangChain, LlamaIndex ou OpenAI existant fonctionne sans modification.',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connectez tout client compatible OpenAI à Xinference en définissant base_url sur http://localhost:9997/v1 et en utilisant le nom du modèle comme identifiant.' },
          { type: 'plain-terms', text: 'Une API compatible OpenAI signifie que votre code n\'a pas besoin de changer. Le même Python qui appelle GPT-4 peut appeler Llama 3 via Xinference — vous n\'échangez que l\'URL de base et le nom du modèle.' },
        ],
        faqs: [
          { q: 'Xinference supporte-t-il les réponses en streaming ?', a: 'Oui. Définissez `stream=True` dans l\'appel `chat.completions.create`. Xinference diffuse les tokens en temps réel pour tous les backends supportés.' },
          { q: 'Puis-je utiliser LangChain avec Xinference ?', a: 'Oui. `ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")` de `langchain_openai`. Aucune bibliothèque Xinference supplémentaire requise.' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference vs Ollama vs vLLM : quand choisir lequel',
        content: 'Les trois frameworks d\'inférence locaux les plus courants ciblent chacun un profil différent. Choisissez selon votre contrainte principale.',
        rows: [
          { 'Critère': 'Idéal pour', 'Xinference': 'Équipes, multi-modèle, embeddings + LLM', 'Ollama': 'Desktop mono-utilisateur, workflows Modelfile', 'vLLM': 'Service GPU haut débit' },
          { 'Critère': 'GPU requis ?', 'Xinference': 'Non (backend llama.cpp)', 'Ollama': 'Non (mode CPU disponible)', 'vLLM': 'Oui (CUDA/ROCm)' },
          { 'Critère': 'Changement de modèle', 'Xinference': 'Plusieurs modèles simultanément', 'Ollama': 'Un modèle à la fois (swap)', 'vLLM': 'Un modèle par instance serveur' },
          { 'Critère': 'Support embeddings', 'Xinference': 'Oui (BGE, E5, etc.)', 'Ollama': 'Oui (limité)', 'vLLM': 'Non (serveur séparé)' },
          { 'Critère': 'Interface web', 'Xinference': 'Intégrée sur localhost:9997', 'Ollama': 'Aucune (utiliser Open WebUI)', 'vLLM': 'Aucune' },
          { 'Critère': 'Support ChatGLM', 'Xinference': 'Natif (chatglm4)', 'Ollama': 'Limité', 'vLLM': 'Limité' },
        ],
        columns: ['Critère', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Choisissez Xinference pour servir plusieurs types de modèles simultanément (LLM + embeddings + reranker) ou pour le support natif ChatGLM — Ollama pour la simplicité desktop.' },
        ],
        faqs: [
          { q: 'Xinference est-il plus difficile à configurer qu\'Ollama ?', a: 'Légèrement. Ollama est un téléchargement binaire unique ; Xinference nécessite Python et pip. Les deux sont prêts en moins de 5 minutes. Xinference offre un environnement multi-modèle plus riche.' },
          { q: 'Xinference peut-il remplacer vLLM ?', a: 'Pour le service mono-machine, oui — Xinference peut utiliser vLLM comme backend (`--model-engine vllm`) et ajoute une interface web et un registre. Pour un débit brut maximal multi-GPU, vLLM dédié reste plus rapide.' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Qu\'est-ce que Xinference ?', a: 'Xinference (Xorbits Inference) est un framework open source qui exécute Llama 3, Qwen, ChatGLM, Mistral et plus de 30 autres familles localement via une API compatible OpenAI. Il supporte les déploiements GPU, CPU (via llama.cpp) et cluster multi-GPU.' },
          { q: 'Quels modèles Xinference supporte-t-il en 2026 ?', a: 'Plus de 200 configurations. Les plus populaires : Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 et Mixtral 8x22B Instruct. Exécutez `xinference registrations --model-type LLM` pour la liste complète.' },
          { q: 'Comment Xinference télécharge-t-il les poids ?', a: 'Au premier `xinference launch` pour chaque modèle, Xinference télécharge les poids depuis Hugging Face ou ModelScope (configurable). Les poids sont mis en cache localement. Définissez `XINFERENCE_HOME` pour contrôler le répertoire de cache.' },
          { q: 'Xinference fonctionne-t-il sur Windows ?', a: 'Oui, via pip sur Python 3.9+. Le backend llama.cpp fonctionne sur Windows CPU sans dépendances supplémentaires. Pour le GPU, installez CUDA 12.x et le wheel PyTorch correspondant avant Xinference.' },
          { q: 'Puis-je utiliser Xinference pour le RAG ?', a: 'Oui. Lancez un modèle d\'embedding BGE ou E5 (`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`) aux côtés de votre LLM. Les deux partagent le même point d\'entrée API.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/fr/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference : exécuter Llama 3, Qwen, ChatGLM & Mistral localement 2026',
      'description': 'Xinference supporte Llama 3, Qwen 3, ChatGLM4 et Mistral nativement. pip install, xi launch — API compatible OpenAI disponible sur localhost:9997.',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Qu\'est-ce que Xinference ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference est un framework open source qui exécute Llama 3, Qwen, ChatGLM, Mistral et plus de 30 autres familles localement via une API compatible OpenAI.' } },
        { '@type': 'Question', 'name': 'Quels modèles Xinference supporte-t-il en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Les plus populaires : Llama 3.3 8B/70B Instruct, Qwen 3 7B/72B Instruct, ChatGLM4 9B, Mistral Small Instruct v0.3 et Mixtral 8x22B Instruct.' } },
        { '@type': 'Question', 'name': 'Xinference supporte-t-il Llama 3 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. --model-name llama-3.1-instruct avec --model-size-in-billions 8. Basculez vers llama.cpp avec --quantization q4_k_m pour CPU ou faible VRAM.' } },
        { '@type': 'Question', 'name': 'Xinference supporte-t-il ChatGLM ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. ChatGLM3, ChatGLM4 et ChatGLM4-Vision sont tous enregistrés. ChatGLM4 9B est recommandé pour le chinois en 2026.' } },
        { '@type': 'Question', 'name': 'Puis-je utiliser Xinference pour le RAG ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Lancez un modèle d\'embedding BGE aux côtés de votre LLM — les deux partagent le même point d\'entrée API sur localhost:9997/v1.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Modèles supportés par Xinference 2026',
      'description': 'Les sept configurations de modèles les plus demandées dans Xinference avec exigences VRAM',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — ~6 Go VRAM (Q4), usage général en anglais' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — ~40 Go VRAM, sortie anglaise haute qualité via vLLM' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — ~6 Go VRAM (Q4), multilingue, CJK, code' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — ~40 Go VRAM, tâches CJK à grande échelle via vLLM' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — ~7 Go VRAM, tâches entreprise en chinois' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — ~5 Go VRAM (Q4), langues européennes et appels de fonctions' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — ~26 Go VRAM, multilingue haute qualité via vLLM' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference：Llama 3・Qwen・ChatGLM・Mistralをローカルで実行する2026年版ガイド',
    seoTitle: 'Xinference 2026：Llama 3・Qwen・ChatGLM・Mistralをローカル実行',
    intro: 'Xinference（Xorbits Inference）は、Llama 3、Qwen 3、ChatGLM4、Mistralをはじめ30以上のモデルファミリーを、単一のOpenAI互換APIで提供できるオープンソースの推論フレームワークです。pipコマンド1つでインストールし、CLIコマンド1つで起動できます。エンドユーザー向けのOllamaとは異なり、Xinferenceはマルチモデルサービング、GPUクラスターサポート、LLM推論と並行したEmbedding/Rerankingを必要とするチーム向けに設計されています。',
    metaDescription: 'XinferenceはLlama 3、Qwen 3、ChatGLM4、Mistralをネイティブサポート。pip installで導入、xinference-localで起動、xi launchで任意のモデルをlocalhost:9997のOpenAI互換APIで利用できます。',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Llama 3、Qwen、ChatGLM、Mistral、Embeddingモデルを統一OpenAI互換APIで提供するマルチモデルローカル推論サーバーを必要とする開発者・MLエンジニア',
    primaryTerm: 'Xinferenceサポートモデル',
    targetKeywords: [
      'xinferenceサポートモデル',
      'xinference llama 3 qwen chatglm mistral',
      'xinference セットアップ 2026',
      'xinference vs ollama',
      '複数llmローカル実行 xinference',
      'xinference openai互換api',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: ['5 GB VRAM', '6 GB VRAM', '7 GB VRAM', '16 GB VRAM', '40 GB VRAM'],
    leadAnswerBlock: '**`pip install "xinference[all]"`でXinferenceをインストールし、`xinference-local`で起動後、`xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`を実行します。** XinferenceはLlama 3、Qwen 3、ChatGLM4、Mistralなど30以上のファミリーをネイティブサポートし、localhost:9997のOpenAI互換APIで提供します。',
    quickAnswerTop: {
      ja: {
        question: 'Xinferenceはどのモデルをサポートしていますか？',
        answer: 'XinferenceはLlama 3.3（8B・70B）、Qwen 3（0.5B〜72B）、ChatGLM4（9B）、Mistral Small v0.3、Mixtral 8x22Bなど30以上のファミリーをネイティブサポートしています。各モデルは`xinference launch`コマンド1つで起動し、localhost:9997のOpenAI互換REST APIで利用できます。',
        bullets: [
          'インストール：`pip install "xinference[all]"` — CUDA・llama.cpp・transformersバックエンドを含む',
          'サーバー起動：`xinference-local` — http://localhost:9997 にWeb UIが起動',
          'モデル起動：`xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'APIエンドポイント：`http://localhost:9997/v1` — OpenAI APIクライアントのdrop-in代替',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '重要ポイント',
        isTldr: true,
        items: [
          '**Xinferenceは30以上のモデルファミリーを1つのAPIで提供** — Llama 3、Qwen 3、ChatGLM4、Mistral、Embeddingモデル、Rerankerがすべてlocalhost:9997/v1の同一エンドポイントを共有。',
          '**pip install 1つ、CLIコマンド1つ** — `pip install "xinference[all]"`後に`xinference-local`でWeb UI付きサーバーが起動。`xinference launch --model-name <名前>`で任意のモデルをデプロイ。',
          '**3つのバックエンドを選択可能** — `transformers`（GPU・フル精度）、`llama.cpp`（CPU＋量子化GGUF・GPU不要）、`vllm`（高スループット・マルチGPU）。モデルごとに切替可能。',
          '**CJKタスクにはQwen 3とChatGLM4が最適** — どちらも約6〜7 GB VRAMで動作し、中国語・日本語ベンチマークで英語専用モデルを上回る。',
          '**マルチモデルサービング・Embedding＋Reranking・GPUクラスターが必要なときはOllamaよりXinferenceを選ぶ** — Ollamaは単一ユーザーのデスクトップ用途に優れる。',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'Xinferenceとは何か・どのように動作するか',
        content: 'Xinference（github.com/xorbitsai/inference）はXorbitsが開発したオープンソースのLLM・マルチモーダルモデルサービングフレームワークです。2023年にオープンソース化され、分散クラスター向けのエンタープライズ推論プラットフォームとして設計されました。基本的な考え方：モデルを名前で登録すると、Xinferenceが重みをダウンロードし、適切なバックエンドを選択してREST APIを公開します。モデルロードのコードを直接触る必要はありません。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'XinferenceはLlama 3、Qwen 3、ChatGLM4、Mistralなど30以上のモデルファミリーを単一のOpenAI互換APIでネイティブサポートするオープンソース推論サーバーです。' },
          { type: 'plain-terms', text: 'XinferenceはローカルAIモデルの交換台のようなものです。モデル名を指定すると自動でダウンロード・起動し、アプリはOpenAI APIと同じ方法で通信できます — コード変更は不要です。' },
        ],
        items: [
          '**モデルレジストリ**：200以上の事前登録モデル。`llama-3.1-instruct`・`qwen2.5-instruct`・`chatglm4`など名前で参照でき、重みパスの手動管理が不要。',
          '**バックエンド抽象化**：1コマンドでtransformers・llama.cpp・vLLMバックエンドを切替 — バックエンドに関わらず同じAPI。',
          '**マルチモデル同時実行**：テキスト生成のLlama 3とRAG用のBGE Embeddingモデルを同一GPU上で同時実行可能。',
          '**Web UI**：localhost:9997のReactダッシュボードでコードなしにモデルを起動・確認・停止。',
          '**クラスターモード**：スーパーバイザー＋ワーカー構成で`xinference start --host 0.0.0.0`により複数GPUノードにスケール。',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: 'サポートモデルファミリー：Llama 3・Qwen・ChatGLM・Mistral',
        content: '以下の表はXinferenceで最も利用されている7つのモデル設定と最小VRAM要件を示しています。すべて同じlaunchコマンドパターンを使用し、変わるのは`--model-name`・`--model-size-in-billions`・オプションの`--quantization`のみです。',
        columns: ['モデル', 'ファミリー', 'VRAM (Q4)', 'バックエンド', '最適な用途'],
        rows: [
          { 'モデル': 'llama-3.1-instruct 8B', 'ファミリー': 'Meta', 'VRAM (Q4)': '~6 GB', 'バックエンド': 'transformers / llama.cpp', '最適な用途': '英語汎用タスク' },
          { 'モデル': 'llama-3.1-instruct 70B', 'ファミリー': 'Meta', 'VRAM (Q4)': '~40 GB', 'バックエンド': 'vLLM', '最適な用途': '高品質英語出力' },
          { 'モデル': 'qwen2.5-instruct 7B', 'ファミリー': 'Alibaba', 'VRAM (Q4)': '~6 GB', 'バックエンド': 'transformers / llama.cpp', '最適な用途': '多言語・CJK・コーディング' },
          { 'モデル': 'qwen2.5-instruct 72B', 'ファミリー': 'Alibaba', 'VRAM (Q4)': '~40 GB', 'バックエンド': 'vLLM', '最適な用途': '大規模CJKタスク' },
          { 'モデル': 'chatglm4 9B', 'ファミリー': 'Zhipu AI', 'VRAM (Q4)': '~7 GB', 'バックエンド': 'transformers', '最適な用途': '中国語エンタープライズタスク' },
          { 'モデル': 'mistral-instruct-v0.3 7B', 'ファミリー': 'Mistral AI', 'VRAM (Q4)': '~5 GB', 'バックエンド': 'transformers / llama.cpp', '最適な用途': 'ヨーロッパ言語・ファンクションコール' },
          { 'モデル': 'mixtral-instruct-v0.1 8x7B', 'ファミリー': 'Mistral AI', 'VRAM (Q4)': '~26 GB', 'バックエンド': 'vLLM', '最適な用途': '高品質多言語出力' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'XinferenceはLlama 3.3（8B/70B）・Qwen 3（7B/72B）・ChatGLM4 9B・Mistral Small v0.3・Mixtral 8x22Bをネイティブサポートし、いずれもCLIコマンド1つで起動できます。' },
          { type: 'plain-terms', text: 'VRAMはGPUのメモリです。6 GB VRAMが必要なモデルにはRTX 3060（12 GB）やRTX 4060（8 GB）のようなGPUが必要です。GPUが小さい場合は、llama.cppバックエンドとQ4量子化を使用するとメモリ使用量を約半分に削減できます。' },
        ],
        faqs: [
          { q: 'XinferenceはLlama 3.3をサポートしていますか？', a: 'はい。`--model-name llama-3.1-instruct`と`--model-size-in-billions 8`（8B）または`70`（70B）を指定します。CPU・低VRAM環境では`--model-engine llama.cpp`と`--quantization q4_k_m`に切り替えてください。' },
          { q: 'XinferenceはQwen 3をサポートしていますか？', a: 'はい。Qwen 3 Instructは`qwen2.5-instruct`として登録されており、0.5B〜72Bのサイズが利用可能です。7Bは約6 GB VRAMで動作し、中国語・日本語・韓国語・英語をLlama 3.3 8Bと同等の品質で処理します。' },
          { q: 'XinferenceはChatGLMをサポートしていますか？', a: 'はい。ChatGLM3（`chatglm3`）・ChatGLM4（`chatglm4`）・ChatGLM4-Vision（`chatglm4v`）がすべて登録されています。ChatGLM4 9Bは2026年の中国語タスクに推奨される選択肢です。' },
          { q: 'XinferenceはMistralをサポートしていますか？', a: 'はい。`mistral-instruct-v0.3`（7B）と`mixtral-instruct-v0.1`（8x7B MoE）が両方登録されています。ファンクションコールとJSON出力にはMistral Small v0.3が最適です。' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: 'Xinferenceのインストール：pipとサーバー起動',
        content: 'XinferenceにはPython 3.9以上とpipが必要です。`[all]`オプションでCUDAサポート・llama.cppバックエンド・transformersバックエンドをまとめてインストールできます。CPU専用マシンでは`pip install xinference`（`[all]`なし）を使い、モデル起動時に`--model-engine llama.cpp`を指定します。',
        codeBlock: `# フルインストール — CUDA + transformers + llama.cpp バックエンド
pip install "xinference[all]"

# CPUのみのインストール（GPU不要）
pip install xinference

# ローカルサーバー起動（Web UI: http://localhost:9997）
xinference-local

# LAN向けに特定ホストにバインドする場合
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: '初回起動時はモデルの重みはダウンロードされず、Xinferenceサーバーのみが起動します。モデルの重みは各モデルへの最初の`xinference launch`呼び出し時にダウンロードされます。',
        snippetBlocks: [
          { type: 'one-sentence', text: '`pip install "xinference[all]"`でインストールし、`xinference-local`でサーバーを起動すると、http://localhost:9997 にWeb UIが表示されます。' },
        ],
        faqs: [
          { q: 'XinferenceにGPUは必要ですか？', a: 'いいえ。llama.cppバックエンド（`--model-engine llama.cpp`）を使用すれば、量子化GGUFモデルをCPUのみで実行できます。GPU推論より遅いですが、Python 3.9以上が動作する任意のマシンで利用可能です。' },
          { q: 'Xinferenceを更新するにはどうすればいいですか？', a: '`pip install --upgrade xinference`を実行します。アップグレード前にGitHubのリリースノートで破壊的変更を確認してください。特にクラスターモードを使用している場合は注意が必要です。' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: 'Llama 3・Qwen・ChatGLM・Mistralの起動',
        content: '`xinference launch`コマンドで任意の登録モデルをデプロイします。パターンは常に同じで、`--model-name`でモデルファミリー、`--model-size-in-billions`でパラメータ数、`--model-engine`でバックエンドを指定します。起動後、XinferenceはAPIコールで使用するモデルUIDを返します。',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, transformers backend)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, Q4_K_M quantization)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (vLLM backend, 26+ GB VRAM必要)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '`xinference launch --model-name <名前> --model-engine transformers --model-size-in-billions <サイズ>`でXinferenceの任意のモデルを起動し、ダウンロード完了後すぐにlocalhost:9997/v1で利用できます。' },
        ],
        faqs: [
          { q: 'Xinferenceがサポートするすべてのモデルを一覧表示するにはどうすればいいですか？', a: '`xinference registrations --model-type LLM`を実行するか、http://localhost:9997 のWeb UIでモデルライブラリを閲覧してください。' },
          { q: 'Xinferenceで2つのモデルを同時に実行できますか？', a: 'はい — 異なるモデル名で`xinference launch`を2回実行します。各モデルは独自のUIDとエンドポイントを持ちます。合計VRAMバジェットが両モデルを同時にカバーする必要があります。' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: 'OpenAI互換APIの使用方法',
        content: 'XinferenceのAPIはOpenAI APIのdrop-in代替品です。任意のOpenAIクライアントを`http://localhost:9997/v1`に向け、`api_key`に任意の非空文字列を設定し、`xinference launch`が返すモデルUIDを`model`パラメータに使用します。既存のLangChain・LlamaIndex・カスタムOpenAIクライアントのコードはそのまま動作します。',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: 'base_urlをhttp://localhost:9997/v1に設定し、モデル名をモデルIDとして使用することで、任意のOpenAI互換クライアントをXinferenceに接続できます。' },
          { type: 'plain-terms', text: 'OpenAI互換APIとは、コードを変更する必要がないことを意味します。GPT-4を呼び出すPythonコードはXinference経由でLlama 3を呼び出せます — ベースURLとモデル名を変えるだけです。' },
        ],
        faqs: [
          { q: 'Xinferenceはストリーミングレスポンスをサポートしていますか？', a: 'はい。`chat.completions.create`呼び出しで`stream=True`を設定します。Xinferenceはすべてのサポートバックエンドでリアルタイムにトークンをストリーミングします。' },
          { q: 'LangChainをXinferenceと一緒に使えますか？', a: 'はい。`langchain_openai`から`ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")`を使用します。Xinference固有のライブラリは不要です。' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference vs Ollama vs vLLM：いつどれを選ぶか',
        content: '最も一般的な3つのローカル推論フレームワークはそれぞれ異なるユーザーを対象としています。主な制約に基づいて選択してください。日本のエンタープライズ環境では、METIのAIガバナンスガイドライン（2024年版）はローカル推論をデータ主権・プライバシーリスク軽減策として推奨しています。',
        rows: [
          { '比較項目': '最適な用途', 'Xinference': 'チーム・マルチモデル・Embeddings＋LLM', 'Ollama': '単一ユーザーデスクトップ・Modelfileワークフロー', 'vLLM': '高スループットGPUサービング' },
          { '比較項目': 'GPU必要?', 'Xinference': '不要（llama.cppバックエンド）', 'Ollama': '不要（CPUモード対応）', 'vLLM': '必要（CUDA/ROCm）' },
          { '比較項目': 'モデル切替', 'Xinference': '複数モデルを同時実行', 'Ollama': '1モデルずつ（スワップ）', 'vLLM': 'サーバーインスタンスごとに1モデル' },
          { '比較項目': 'Embeddingサポート', 'Xinference': 'あり（BGE・E5など）', 'Ollama': 'あり（限定的）', 'vLLM': 'なし（別途Embeddingサーバー）' },
          { '比較項目': 'Web UI', 'Xinference': 'localhost:9997に内蔵', 'Ollama': 'なし（Open WebUI推奨）', 'vLLM': 'なし' },
          { '比較項目': 'ChatGLMサポート', 'Xinference': 'ネイティブ（chatglm4）', 'Ollama': '限定的', 'vLLM': '限定的' },
        ],
        columns: ['比較項目', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: '複数のモデルタイプを同時に提供する必要がある場合（LLM＋Embeddings＋Reranker）またはChatGLMのネイティブサポートが必要な場合はXinferenceを、シンプルなデスクトップ使用にはOllamaを選択してください。' },
        ],
        faqs: [
          { q: 'XinferenceはOllamaより設定が難しいですか？', a: 'わずかに難しいです。OllamaはバイナリをダウンロードするだけですがXinferenceはPythonとpipが必要です。ただし両方とも5分以内に起動できます。Xinferenceは起動後のマルチモデル環境がより充実しています。' },
          { q: 'XinferenceはvLLMを代替できますか？', a: 'シングルマシンのサービングには可能です — Xinferenceは`--model-engine vllm`でvLLMをバックエンドとして使用でき、Web UIとモデルレジストリが追加されます。複数GPUノードにまたがる最大スループットには専用vLLMデプロイの方が高速です。' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: 'よくある質問',
        faqs: [
          { q: 'Xinferenceとは何ですか？', a: 'Xinference（Xorbits Inference）はLlama 3、Qwen、ChatGLM、Mistralなど30以上のファミリーをOpenAI互換APIでローカルに実行するオープンソースフレームワークです。GPU・CPU（llama.cpp経由）・マルチGPUクラスターデプロイをサポートします。' },
          { q: '2026年にXinferenceがサポートするモデルは何ですか？', a: '200以上のモデル設定が登録されています。2026年で最も人気なのはLlama 3.3 8B/70B Instruct、Qwen 3 7B/72B Instruct、ChatGLM4 9B、Mistral Small Instruct v0.3、Mixtral 8x22B Instructです。`xinference registrations --model-type LLM`で完全なリストを確認できます。' },
          { q: 'Xinferenceはモデルの重みをどのようにダウンロードしますか？', a: '各モデルへの最初の`xinference launch`時に、XinferenceはHugging FaceまたはModelScope（設定可能）から重みをダウンロードします。重みはローカルにキャッシュされるため、2回目以降の起動は即時です。`XINFERENCE_HOME`でキャッシュディレクトリを制御できます。' },
          { q: 'XinferenceはWindowsで動作しますか？', a: 'はい、Python 3.9以上のpipで動作します。llama.cppバックエンドは追加の依存関係なしにWindows CPUで動作します。WindowsでGPUサポートが必要な場合は、Xinferenceのインストール前にCUDA 12.xと対応するPyTorchホイールをインストールしてください。' },
          { q: 'XinferenceをRAGに使用できますか？', a: 'はい。BGEまたはE5のEmbeddingモデル（`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`）をLLMと並行して起動します。両方が同じAPIエンドポイントを共有するため、RAGパイプラインはインデックス作成にEmbeddingエンドポイント、生成にチャットエンドポイントを呼び出せます。' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ja/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference：Llama 3・Qwen・ChatGLM・Mistralをローカルで実行する2026年版ガイド',
      'description': 'XinferenceはLlama 3、Qwen 3、ChatGLM4、Mistralをネイティブサポート。pip installで導入、xinference-localで起動、xi launchで任意のモデルをlocalhost:9997のOpenAI互換APIで利用できます。',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Xinferenceとは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'XinferenceはLlama 3、Qwen、ChatGLM、Mistralなど30以上のファミリーをOpenAI互換APIでローカルに実行するオープンソースフレームワークです。' } },
        { '@type': 'Question', 'name': '2026年にXinferenceがサポートするモデルは？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 8B/70B Instruct、Qwen 3 7B/72B Instruct、ChatGLM4 9B、Mistral Small Instruct v0.3、Mixtral 8x22B Instructが最も人気です。' } },
        { '@type': 'Question', 'name': 'XinferenceはLlama 3をサポートしていますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。--model-name llama-3.1-instruct --model-size-in-billions 8で8Bを起動できます。CPU環境では--model-engine llama.cpp --quantization q4_k_mを使用してください。' } },
        { '@type': 'Question', 'name': 'XinferenceはChatGLMをサポートしていますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。ChatGLM3・ChatGLM4・ChatGLM4-Visionがすべて登録されています。ChatGLM4 9Bは2026年の中国語タスクに推奨です。' } },
        { '@type': 'Question', 'name': 'XinferenceをRAGに使用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。BGE EmbeddingモデルをLLMと並行して起動すると、両方がlocalhost:9997/v1の同じAPIエンドポイントを共有します。' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Xinference サポートモデル 2026',
      'description': 'XinferenceでVRAM要件とともに最も利用されている7つのモデル設定',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — 約6 GB VRAM（Q4）、英語汎用タスク' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — 約40 GB VRAM、vLLMバックエンドで高品質英語出力' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — 約6 GB VRAM（Q4）、多言語・CJK・コーディング' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — 約40 GB VRAM、vLLMで大規模CJKタスク' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — 約7 GB VRAM、中国語エンタープライズタスク' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — 約5 GB VRAM（Q4）、ヨーロッパ言語とファンクションコール' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — 約26 GB VRAM、vLLMで高品質多言語出力' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-23',
    theme: 'Tools & Interfaces',
    title: 'Xinference：本地运行Llama 3、Qwen、ChatGLM与Mistral — 2026年完整指南',
    seoTitle: 'Xinference 2026：本地运行Llama 3、Qwen、ChatGLM与Mistral',
    intro: 'Xinference（Xorbits Inference）是一个开源推理框架，可通过单一OpenAI兼容API提供Llama 3、Qwen 3、ChatGLM4、Mistral等30多个模型系列——一条pip命令完成安装，一条CLI命令完成启动。与面向个人用户的Ollama不同，Xinference专为需要多模型服务、GPU集群支持以及在LLM推理旁运行Embedding/Reranking的团队而设计。',
    metaDescription: 'Xinference是原生支持Llama 3、Qwen 3、ChatGLM4和Mistral的开源本地推理框架。单条pip install命令安装，xinference-local启动服务器，xi launch加载模型，通过localhost:9997的OpenAI兼容API提供服务，无需额外配置。',
    publishDate: '2026-05-23',
    dateModified: '2026-05-23',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    audience: '需要通过统一OpenAI兼容API提供Llama 3、Qwen、ChatGLM、Mistral和Embedding模型的多模型本地推理服务器的开发者和机器学习工程师',
    primaryTerm: 'Xinference支持的模型',
    targetKeywords: [
      'xinference支持的模型',
      'xinference llama 3 qwen chatglm mistral',
      'xinference部署指南2026',
      'xinference与ollama对比',
      '本地运行多个llm xinference',
      'xinference openai兼容api',
    ],
    current_models_mentioned: [
      'Llama 3.3 8B Instruct',
      'Llama 3.3 70B Instruct',
      'Qwen 3 7B Instruct',
      'Qwen 3 72B Instruct',
      'ChatGLM4 9B',
      'Mistral Small Instruct v0.3',
      'Mixtral 8x22B Instruct',
    ],
    current_hardware_mentioned: ['5 GB VRAM', '6 GB VRAM', '7 GB VRAM', '16 GB VRAM', '40 GB VRAM'],
    leadAnswerBlock: '**使用`pip install "xinference[all]"`安装Xinference，运行`xinference-local`启动服务，然后执行`xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`。** Xinference原生支持Llama 3、Qwen 3、ChatGLM4、Mistral等30多个系列，通过localhost:9997的OpenAI兼容API统一提供服务。',
    quickAnswerTop: {
      zh: {
        question: 'Xinference支持哪些模型？',
        answer: 'Xinference原生支持Llama 3.3（8B和70B）、Qwen 3（0.5B至72B）、ChatGLM4（9B）、Mistral Small v0.3、Mixtral 8x22B等30多个系列。每个模型通过单条`xinference launch`命令启动，并通过localhost:9997的OpenAI兼容REST API提供服务。',
        bullets: [
          '安装：`pip install "xinference[all]"` — 包含CUDA、llama.cpp和transformers后端',
          '启动服务器：`xinference-local` — Web界面在 http://localhost:9997 打开',
          '启动模型：`xinference launch --model-name llama-3.1-instruct --model-engine transformers --model-size-in-billions 8`',
          'API端点：`http://localhost:9997/v1` — 可直接替换任何OpenAI API客户端',
        ],
        updatedDate: '2026-05-23',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '核心要点',
        isTldr: true,
        items: [
          '**Xinference通过单一API提供30多个模型系列** — Llama 3、Qwen 3、ChatGLM4、Mistral、Embedding模型和Reranker共享localhost:9997/v1同一端点。',
          '**一条pip install，一条CLI命令** — `pip install "xinference[all]"`后运行`xinference-local`启动带Web界面的服务器；`xinference launch --model-name <名称>`部署任意模型。',
          '**三种可选后端** — `transformers`（GPU·全精度）、`llama.cpp`（CPU+量化GGUF·无需GPU）、`vllm`（高吞吐量·多GPU）。可按模型切换。',
          '**Qwen 3和ChatGLM4是Xinference中CJK任务的最佳选择** — 两者均在约6–7 GB VRAM下运行，在中文和日文基准测试中超越同等英语模型。',
          '**需要多模型服务、Embedding+Reranking或GPU集群支持时选Xinference，单用户桌面使用选Ollama。**',
        ],
      },
      whatIs: {
        id: 'what-is-xinference',
        title: 'Xinference是什么及其工作原理',
        content: 'Xinference（github.com/xorbitsai/inference）是Xorbits开发的开源LLM和多模态模型服务框架，于2023年开源，最初作为分布式集群的企业推理平台设计。核心理念：按名称注册模型，Xinference自动下载权重、选择合适后端并暴露REST API。无需直接编写模型加载代码。根据中国《数据安全法》（2021年）和《个人信息保护法》（2021年），本地推理确保数据不离开企业内部环境，是处理敏感数据的合规选择。',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference是一个开源推理服务器，通过单一OpenAI兼容API原生支持Llama 3、Qwen 3、ChatGLM4、Mistral等30多个模型系列。' },
          { type: 'plain-terms', text: '可以将Xinference理解为本地AI模型的调度中心。你指定要加载的模型名称，它自动下载并启动，你的应用以与OpenAI API完全相同的方式与其通信——无需修改代码。' },
        ],
        items: [
          '**模型注册表**：200多个预注册模型，通过名称（`llama-3.1-instruct`、`qwen2.5-instruct`、`chatglm4`）引用，无需手动管理权重路径。',
          '**后端抽象**：一条命令在transformers、llama.cpp和vLLM后端之间切换——无论使用哪个后端API完全相同。',
          '**多模型并发**：在同一GPU上同时运行Llama 3用于文本生成和BGE Embedding模型用于RAG。',
          '**Web界面**：localhost:9997的React仪表盘，无需代码即可启动、查看和停止模型。',
          '**集群模式**：通过在工作节点运行`xinference start --host 0.0.0.0`，监督者+工作者架构可横向扩展到多个GPU节点。',
        ],
      },
      supportedModels: {
        id: 'supported-model-families',
        title: '支持的模型系列：Llama 3、Qwen、ChatGLM、Mistral',
        content: '下表展示了Xinference中最常用的七种模型配置及每种所需的最低VRAM。所有七种共享相同的启动命令模式——只有`--model-name`、`--model-size-in-billions`和可选的`--quantization`会变化。',
        columns: ['模型', '系列', 'VRAM (Q4)', '最佳后端', '最适用于'],
        rows: [
          { '模型': 'llama-3.1-instruct 8B', '系列': 'Meta', 'VRAM (Q4)': '~6 GB', '最佳后端': 'transformers / llama.cpp', '最适用于': '英语通用任务' },
          { '模型': 'llama-3.1-instruct 70B', '系列': 'Meta', 'VRAM (Q4)': '~40 GB', '最佳后端': 'vLLM', '最适用于': '高质量英语输出' },
          { '模型': 'qwen2.5-instruct 7B', '系列': 'Alibaba', 'VRAM (Q4)': '~6 GB', '最佳后端': 'transformers / llama.cpp', '最适用于': '多语言、CJK、代码' },
          { '模型': 'qwen2.5-instruct 72B', '系列': 'Alibaba', 'VRAM (Q4)': '~40 GB', '最佳后端': 'vLLM', '最适用于': '大规模CJK任务' },
          { '模型': 'chatglm4 9B', '系列': 'Zhipu AI', 'VRAM (Q4)': '~7 GB', '最佳后端': 'transformers', '最适用于': '中文企业任务' },
          { '模型': 'mistral-instruct-v0.3 7B', '系列': 'Mistral AI', 'VRAM (Q4)': '~5 GB', '最佳后端': 'transformers / llama.cpp', '最适用于': '欧洲语言、函数调用' },
          { '模型': 'mixtral-instruct-v0.1 8x7B', '系列': 'Mistral AI', 'VRAM (Q4)': '~26 GB', '最佳后端': 'vLLM', '最适用于': '高质量多语言输出' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Xinference原生支持Llama 3.3（8B/70B）、Qwen 3（7B/72B）、ChatGLM4 9B、Mistral Small v0.3和Mixtral 8x22B——每个均可通过单条CLI命令启动。' },
          { type: 'plain-terms', text: 'VRAM是GPU的显存。需要6 GB VRAM的模型需要至少有这么多显存的GPU——例如RTX 3060（12 GB）或RTX 4060（8 GB）。如果GPU较小，使用llama.cpp后端配合Q4量化可将内存需求减少约一半。' },
        ],
        faqs: [
          { q: 'Xinference支持Llama 3.3吗？', a: '支持。使用`--model-name llama-3.1-instruct`配合`--model-size-in-billions 8`（8B）或`70`（70B）。CPU或低VRAM环境下切换到`--model-engine llama.cpp`和`--quantization q4_k_m`。' },
          { q: 'Xinference支持Qwen 3吗？', a: '支持。Qwen 3 Instruct注册为`qwen2.5-instruct`，提供0.5B至72B的尺寸。7B版本在约6 GB VRAM下运行，处理中文、日文、韩文和英文的质量与Llama 3.3 8B相当。' },
          { q: 'Xinference支持ChatGLM吗？', a: '支持。ChatGLM3（`chatglm3`）、ChatGLM4（`chatglm4`）和视觉版本ChatGLM4-Vision（`chatglm4v`）均已注册。ChatGLM4 9B是2026年中文任务的推荐选择。' },
          { q: 'Xinference支持Mistral吗？', a: '支持。`mistral-instruct-v0.3`（7B）和`mixtral-instruct-v0.1`（8x7B MoE）均已注册。对于函数调用和JSON输出，Mistral Small v0.3是Xinference中的最佳小模型选择。' },
        ],
      },
      install: {
        id: 'install-xinference',
        title: '安装Xinference：pip安装与启动服务器',
        content: 'Xinference需要Python 3.9+和pip。`[all]`额外包一次性安装CUDA支持、llama.cpp后端和transformers后端。纯CPU机器使用`pip install xinference`（不带`[all]`），启动模型时添加`--model-engine llama.cpp`。',
        codeBlock: `# 完整安装 — CUDA + transformers + llama.cpp 后端
pip install "xinference[all]"

# 纯CPU安装（无需GPU）
pip install xinference

# 启动本地服务器（Web界面在 http://localhost:9997）
xinference-local

# 或绑定到特定主机以供局域网访问
xinference-local --host 0.0.0.0 --port 9997`,
        codeLanguage: 'bash',
        note: '首次启动时不下载任何模型权重——仅启动Xinference服务器。模型权重在每个模型首次`xinference launch`调用时下载。',
        snippetBlocks: [
          { type: 'one-sentence', text: '使用`pip install "xinference[all]"`安装Xinference，运行`xinference-local`启动服务器——Web界面在 http://localhost:9997 打开。' },
        ],
        faqs: [
          { q: 'Xinference需要GPU吗？', a: '不需要。使用llama.cpp后端（`--model-engine llama.cpp`）可在CPU上完全运行量化GGUF模型。性能比GPU推理慢，但可在任何运行Python 3.9+的机器上使用。' },
          { q: '如何更新Xinference？', a: '运行`pip install --upgrade xinference`。升级前检查GitHub发布说明中的破坏性变更，特别是在使用集群模式时。' },
        ],
      },
      launchModels: {
        id: 'launch-models',
        title: '启动Llama 3、Qwen、ChatGLM和Mistral',
        content: '使用`xinference launch`部署任意已注册模型。模式始终相同：`--model-name`设置模型系列，`--model-size-in-billions`设置参数数量，`--model-engine`选择后端。启动后，Xinference返回用于API调用的模型UID。',
        codeBlock: `# Llama 3.3 8B Instruct (GPU, transformers backend)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 8

# Llama 3.3 8B Instruct (CPU, Q4_K_M quantization)
xinference launch \\
  --model-name llama-3.1-instruct \\
  --model-engine llama.cpp \\
  --model-size-in-billions 8 \\
  --quantization q4_k_m

# Qwen 3 7B Instruct (GPU)
xinference launch \\
  --model-name qwen2.5-instruct \\
  --model-engine transformers \\
  --model-size-in-billions 7

# ChatGLM4 9B (GPU)
xinference launch \\
  --model-name chatglm4 \\
  --model-engine transformers \\
  --model-size-in-billions 9

# Mistral Small Instruct v0.3 (GPU)
xinference launch \\
  --model-name mistral-instruct-v0.3 \\
  --model-engine transformers \\
  --model-size-in-billions 7

# Mixtral 8x22B Instruct (vLLM backend, 需要26+ GB VRAM)
xinference launch \\
  --model-name mixtral-instruct-v0.1 \\
  --model-engine vllm \\
  --model-size-in-billions 46`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '使用`xinference launch --model-name <名称> --model-engine transformers --model-size-in-billions <大小>`启动任意Xinference模型——下载完成后立即可通过localhost:9997/v1使用。' },
        ],
        faqs: [
          { q: '如何列出Xinference支持的所有模型？', a: '运行`xinference registrations --model-type LLM`查看所有已注册的LLM系列，或打开 http://localhost:9997 的Web界面浏览模型库。' },
          { q: '可以在Xinference中同时运行两个模型吗？', a: '可以——用不同的模型名称运行两次`xinference launch`。每个模型有自己的UID和端点。总VRAM预算必须同时覆盖两个模型。' },
        ],
      },
      apiUsage: {
        id: 'openai-compatible-api',
        title: '使用OpenAI兼容API',
        content: 'Xinference的API是OpenAI API的直接替代品。将任何OpenAI客户端指向`http://localhost:9997/v1`，将`api_key`设置为任意非空字符串，并使用模型UID（由`xinference launch`返回）作为`model`参数。现有的LangChain、LlamaIndex或自定义OpenAI客户端代码无需修改即可使用。',
        codeBlock: `from openai import OpenAI

client = OpenAI(
    api_key="not-required",   # Xinference accepts any non-empty string
    base_url="http://localhost:9997/v1"
)

# Chat completion — works for Llama 3, Qwen, ChatGLM, Mistral
response = client.chat.completions.create(
    model="llama-3.1-instruct",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Summarise the GDPR in 3 bullet points."}
    ]
)
print(response.choices[0].message.content)

# Embedding model (run a separate xinference launch for bge-base-en-v1.5 first)
embedding = client.embeddings.create(
    model="bge-base-en-v1.5",
    input="Local LLMs preserve data privacy."
)
print(embedding.data[0].embedding[:5])`,
        codeLanguage: 'python',
        snippetBlocks: [
          { type: 'one-sentence', text: '将base_url设置为http://localhost:9997/v1并使用模型名称作为模型ID，即可将任何OpenAI兼容客户端连接到Xinference。' },
          { type: 'plain-terms', text: 'OpenAI兼容API意味着代码无需修改。调用GPT-4的Python代码可以通过Xinference调用Llama 3——只需更换基础URL和模型名称。' },
        ],
        faqs: [
          { q: 'Xinference支持流式响应吗？', a: '支持。在`chat.completions.create`调用中设置`stream=True`。Xinference对所有支持的后端实时流式传输token。' },
          { q: '可以将LangChain与Xinference一起使用吗？', a: '可以。使用`langchain_openai`中的`ChatOpenAI(base_url="http://localhost:9997/v1", api_key="x", model="llama-3.1-instruct")`。不需要额外的Xinference专用库。' },
        ],
      },
      vsAlternatives: {
        id: 'xinference-vs-ollama-vllm',
        title: 'Xinference vs Ollama vs vLLM：如何选择',
        content: '三种最常见的本地推理框架各自针对不同用户群体。根据主要需求进行选择。对于中国企业合规场景，Xinference的本地推理满足《数据安全法》（2021）和《个人信息保护法》（2021）中数据不出境的要求。金融机构和医疗机构可将Xinference作为符合监管要求的本地AI基础设施。',
        rows: [
          { '对比项': '最适合', 'Xinference': '团队·多模型·Embeddings+LLM', 'Ollama': '单用户桌面·Modelfile工作流', 'vLLM': '高吞吐量GPU服务' },
          { '对比项': '需要GPU？', 'Xinference': '不需要（llama.cpp后端）', 'Ollama': '不需要（CPU模式可用）', 'vLLM': '需要（CUDA/ROCm）' },
          { '对比项': '模型切换', 'Xinference': '多模型同时运行', 'Ollama': '每次一个模型（切换）', 'vLLM': '每个服务器实例一个模型' },
          { '对比项': 'Embedding支持', 'Xinference': '支持（BGE、E5等）', 'Ollama': '支持（有限）', 'vLLM': '不支持（需单独服务器）' },
          { '对比项': 'Web界面', 'Xinference': 'localhost:9997内置', 'Ollama': '无（使用Open WebUI）', 'vLLM': '无' },
          { '对比项': 'ChatGLM支持', 'Xinference': '原生（chatglm4）', 'Ollama': '有限', 'vLLM': '有限' },
        ],
        columns: ['对比项', 'Xinference', 'Ollama', 'vLLM'],
        snippetBlocks: [
          { type: 'one-sentence', text: '需要同时提供多种模型类型（LLM+Embeddings+Reranker）或需要原生ChatGLM支持时选择Xinference；单用户桌面便捷使用选择Ollama。' },
        ],
        faqs: [
          { q: 'Xinference比Ollama更难配置吗？', a: '略难一些。Ollama是单一二进制下载；Xinference需要Python和pip。但两者都能在5分钟内启动。Xinference启动后提供更丰富的多模型环境。' },
          { q: 'Xinference可以替代vLLM吗？', a: '对于单机服务可以——Xinference可以使用vLLM作为后端（`--model-engine vllm`）并添加Web界面和模型注册表。对于跨多个GPU节点的最大原始吞吐量，专用vLLM部署仍然更快。' },
        ],
      },
      faqs: {
        id: 'faqs',
        title: '常见问题',
        faqs: [
          { q: 'Xinference是什么？', a: 'Xinference（Xorbits Inference）是一个开源模型服务框架，通过OpenAI兼容API在本地运行Llama 3、Qwen、ChatGLM、Mistral等30多个系列。支持GPU、CPU（通过llama.cpp）和多GPU集群部署。' },
          { q: '2026年Xinference支持哪些模型？', a: 'Xinference注册了200多个模型配置。2026年最受欢迎的是Llama 3.3 8B/70B Instruct、Qwen 3 7B/72B Instruct、ChatGLM4 9B、Mistral Small Instruct v0.3和Mixtral 8x22B Instruct。运行`xinference registrations --model-type LLM`查看完整列表。' },
          { q: 'Xinference如何下载模型权重？', a: '每个模型首次`xinference launch`时，Xinference从Hugging Face或ModelScope（可配置）下载权重。权重在本地缓存，后续启动即时完成。设置`XINFERENCE_HOME`控制缓存目录。' },
          { q: 'Xinference在Windows上运行吗？', a: '可以，通过Python 3.9+的pip运行。llama.cpp后端在Windows CPU上无需额外依赖即可运行。Windows上的GPU支持需要在安装Xinference前安装CUDA 12.x和对应的PyTorch包。' },
          { q: '可以将Xinference用于RAG吗？', a: '可以。在LLM旁边启动BGE或E5 Embedding模型（`xinference launch --model-name bge-base-en-v1.5 --model-type embedding`）。两者共享同一API端点——RAG流水线调用Embedding端点进行索引，调用Chat端点进行生成。' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/zh/local-llms/xinference-llama-qwen-chatglm-mistral',
      'headline': 'Xinference：本地运行Llama 3、Qwen、ChatGLM与Mistral — 2026年完整指南',
      'description': 'Xinference是原生支持Llama 3、Qwen 3、ChatGLM4和Mistral的开源本地推理框架。pip install安装，xinference-local启动，通过localhost:9997的OpenAI兼容API提供服务。',
      'datePublished': '2026-05-23',
      'dateModified': '2026-05-23',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'about': { '@type': 'SoftwareApplication', 'name': 'Xinference', 'applicationCategory': 'DeveloperApplication' },
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Xinference是什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Xinference是通过OpenAI兼容API在本地运行Llama 3、Qwen、ChatGLM、Mistral等30多个系列的开源模型服务框架。' } },
        { '@type': 'Question', 'name': '2026年Xinference支持哪些模型？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 8B/70B Instruct、Qwen 3 7B/72B Instruct、ChatGLM4 9B、Mistral Small Instruct v0.3和Mixtral 8x22B Instruct是2026年最受欢迎的模型。' } },
        { '@type': 'Question', 'name': 'Xinference支持Llama 3吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '支持。使用--model-name llama-3.1-instruct --model-size-in-billions 8启动8B版本。CPU环境下加--model-engine llama.cpp --quantization q4_k_m。' } },
        { '@type': 'Question', 'name': 'Xinference支持ChatGLM吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '支持。ChatGLM3、ChatGLM4和ChatGLM4-Vision均已注册。ChatGLM4 9B是2026年中文任务的推荐选择。' } },
        { '@type': 'Question', 'name': '可以将Xinference用于RAG吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。在LLM旁边启动BGE Embedding模型，两者共享localhost:9997/v1的同一API端点——RAG流水线调用Embedding端点索引，调用Chat端点生成。' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Xinference支持的模型 2026',
      'description': 'Xinference中最常用的七种模型配置及VRAM要求',
      'numberOfItems': 7,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Llama 3.3 8B Instruct', 'description': 'Meta — 约6 GB VRAM（Q4），英语通用任务' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Llama 3.3 70B Instruct', 'description': 'Meta — 约40 GB VRAM，通过vLLM实现高质量英语输出' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Qwen 3 7B Instruct', 'description': 'Alibaba — 约6 GB VRAM（Q4），多语言、CJK、代码' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Qwen 3 72B Instruct', 'description': 'Alibaba — 约40 GB VRAM，通过vLLM处理大规模CJK任务' },
        { '@type': 'ListItem', 'position': 5, 'name': 'ChatGLM4 9B', 'description': 'Zhipu AI — 约7 GB VRAM，中文企业任务' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Mistral Small Instruct v0.3', 'description': 'Mistral AI — 约5 GB VRAM（Q4），欧洲语言和函数调用' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Mixtral 8x22B Instruct', 'description': 'Mistral AI — 约26 GB VRAM，通过vLLM实现高质量多语言输出' },
      ],
    },
  },
};
