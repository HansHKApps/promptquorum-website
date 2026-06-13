// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-local-llm-stack-use-case
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Best Local LLM Stack by Use Case 2026: Writing, Coding, RAG, Agents',
      seoTitle: 'Best Local LLM Stack 2026: Coding, RAG, Writing & Agents',
      intro: '**The best local LLM stack depends on your workflow: writers need Ollama + OpenWebUI + Llama 3.3, developers need vLLM + Qwen3-Coder + IDE extension, researchers need LangGraph + vLLM. As of April 2026, no single tool excels at everything.** This guide maps 7 common use cases to their optimal stack (backend + UI + integrations) and hardware tiers (8–24 GB VRAM).',
      metaDescription: 'Coding: vLLM + Qwen3-Coder. Writing: Ollama + Llama 3.3. RAG: LlamaIndex + Qdrant. Agents: CrewAI. VRAM tiers 8–24 GB with setup commands. 2026.',
      twitterDescription: 'Local LLM stacks by use case: Coding → vLLM + Qwen3-Coder. Writing → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. Agents → LangGraph + vLLM. April 2026 guide.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**The best local LLM stack depends on your workflow: writers need OpenWebUI + Llama 3, developers need vLLM + Python SDK, researchers need LangGraph + custom scripts. As of April 2026, no single tool excels at everything.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '10 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM Stack',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Hardware Decision Table', anchor: '#hardware' },
        { label: 'Writing & Content Creation', anchor: '#writing' },
        { label: 'Software Development & Code Review', anchor: '#coding' },
        { label: 'Local RAG (Document Q&A)', anchor: '#rag' },
        { label: 'AI Agents & Workflows', anchor: '#agents' },
        { label: 'Multi-User API Server', anchor: '#api' },
        { label: 'Fine-Tuning & Research', anchor: '#finetuning' },
        { label: 'Real-Time Chat (Streaming)', anchor: '#streaming' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',

          isTldr: true,
          items: [
            '**Writing/content creation:** Ollama + OpenWebUI. Zero config, beautiful chat UI, context window adjustable.',
            '**Coding/code review:** vLLM + FastAPI + VS Code extension. Batch processing, parallel inference, streaming.',
            '**Local RAG:** LlamaIndex + Ollama/vLLM + Qdrant vector DB. Document chunking, embedding, retrieval integrated.',
            '**AI agents:** LangGraph + vLLM backend. Tool use, memory, planning loop. Steeper learning curve.',
            '**Multi-user API:** vLLM behind load balancer (nginx). Handles 10+ concurrent requests. Most scalable.',
            '**Fine-tuning:** HuggingFace Transformers + LoRA + Ollama for inference. Training separate from serving.',
            '**Real-time streaming:** Ollama (native streaming) or vLLM + token streaming endpoint. Best UX for chatbots.',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: 'Quick Decision: Stack by Hardware Tier (April 2026)',
          content: 'Match your GPU/VRAM to the optimal stack. Each combination is tested against real benchmarks. Coding and agent workflows benefit more from larger models than writing; RAG benefits more from embedding quality than LLM size.',
          columns: ['Your Hardware', 'Writing', 'Coding', 'RAG', 'Agents'],
          rows: [
            { 'Your Hardware': '4–8 GB VRAM (GTX 1660, RTX 3050)', 'Writing': 'Ollama + Phi-4 Mini', 'Coding': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'Agents': 'Not recommended' },
            { 'Your Hardware': '12 GB VRAM (RTX 3060, RTX 4070)', 'Writing': 'Ollama + Llama 3.2 8B', 'Coding': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'Agents': 'LangGraph + Ollama (slower)' },
            { 'Your Hardware': '16 GB VRAM (RTX 4070 Ti, RTX 4080)', 'Writing': 'Ollama + Mistral Small 3.1', 'Coding': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'Agents': 'LangGraph + vLLM' },
            { 'Your Hardware': '24 GB VRAM (RTX 3090, RTX 4090)', 'Writing': 'Ollama + Llama 3.3 70B Q4', 'Coding': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'Agents': 'LangGraph + vLLM (fastest)' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**Best stack: [Ollama](/local-llms/how-to-install-ollama) + [OpenWebUI](/local-llms/open-webui-vs-sillytavern) + Markdown editor**',
            'Why this stack: OpenWebUI has the best chat UX. No coding required. Context window flexibility (4K–32K) beats LM Studio for long-form writing. Cheaper than cloud APIs for writers.',
          ],
          numberedItems: [
            'For 24 GB VRAM: `ollama pull llama3.3:70b` — highest quality, matches GPT-4 (2023) on writing benchmarks.',
            'For 16 GB VRAM: `ollama pull mistral-small3.1` — 128K context, best quality under 24 GB.',
            'For 8 GB VRAM: `ollama pull llama3.2:8b` — good writing quality, fast on consumer hardware.',
            'Install OpenWebUI via Docker: `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
            'Configure context window (8K–32K tokens) in OpenWebUI settings based on document length.',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**Best stack: [vLLM](/local-llms/vllm-performance-guide) + Qwen3-Coder + IDE extension**',
            'Why this stack: Qwen3-Coder scores 82% on HumanEval (best open-source coding model, April 2026). vLLM is 3–5× faster than Ollama for batch inference. Native OpenAI API compatibility fits existing IDE tools. Streaming enabled for real-time suggestions.',
            '',
            '**AI-Powered Code Review for Multiple Files**',
            'For automated code review across files, use vLLM\'s batch processing:',
          ],
          numberedItems: [
            'Install vLLM: `pip install vllm`.',
            'Start vLLM server with Qwen3-Coder-7B: `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
            'For 16+ GB VRAM, use 14B: `--model Qwen/Qwen3-Coder-14B-Instruct`.',
            'Connect IDE extension (VS Code Continue.dev, Cursor, etc.) to `http://localhost:8000/v1`.',
            'Enable batch processing for code review: process 10 files in parallel via single API call (`vllm` supports batch=10 by default).',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**Best stack: LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
            'Why this stack: [LlamaIndex](/local-llms/local-rag-2026) handles chunking + retrieval. Qdrant is fast, local, private. Ollama provides embeddings (free) or use vLLM for LLM inference.',
          ],
          numberedItems: [
            'Install LlamaIndex (`pip install llama-index`).',
            'Load documents (PDF, TXT, markdown) into LlamaIndex.',
            'Chunk documents (1024 tokens default), embed with local model or OpenAI (backup).',
            'Store embeddings in Qdrant vector DB (runs locally via Docker).',
            'Query via LlamaIndex: retrieve top-K similar docs, prompt LLM with context.',
            'Wrap in FastAPI endpoint for web UI or IDE integration.',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**Best stack: LangGraph + vLLM + tool definitions**',
            'Why this stack: [LangGraph](/local-llms/local-llm-agents-with-langgraph) provides structured agent flow. vLLM is fast enough for 10+ sequential LLM calls. Tool use is explicit and debuggable.',
          ],
          numberedItems: [
            'Install LangGraph (`pip install langchain langgraph`).',
            'Define tools (web search, calculator, file I/O) as function signatures.',
            'Create agent graph with LLM as decision node, tools as action nodes.',
            'Use vLLM backend for low-latency LLM calls in tight loops.',
            'Run agent loop: LLM → tool selection → tool execution → repeat until done.',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**Best stack: vLLM + nginx load balancer + monitoring**',
            'Why this stack: vLLM supports distributed serving. Nginx multiplexes requests. Scales to 10+ concurrent users on dual-GPU rig. Monitor token throughput per user.',
          ],
          numberedItems: [
            'Deploy vLLM with `--served-model-name model-name` on fixed port.',
            'Configure nginx to load-balance across 2+ vLLM instances (one per GPU if multi-GPU).',
            'Use OpenAI-compatible `/v1/chat/completions` endpoint for client compatibility.',
            'Monitor via prometheus scrape endpoint (vLLM exports request latency, throughput metrics).',
            'Set rate limiting per user token bucket algorithm).',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**Best stack: HuggingFace Transformers + LoRA + Ollama (inference)**',
            'Why this stack: LoRA reduces fine-tuning VRAM 10×. Ollama loads fine-tuned models easily. Modular: train on one box, serve on another.',
            '',
            '**Note (April 2026):** Meta deprecated Llama 3.3 for commercial fine-tuning. Fine-tune on Llama 3.2 (`meta-llama/Llama-3.2-1B` or larger) or Qwen3 (`Qwen/Qwen3-7B`) for Apache 2.0 / open-source license terms. Both support LoRA and load easily in Ollama.',
          ],
          numberedItems: [
            'Fine-tune with `peft` library (LoRA) to reduce VRAM footprint.',
            'Training: 4× model VRAM needed (optimizer state, gradients). Run separately from inference.',
            'Export LoRA adapter to HuggingFace Hub or local filesystem.',
            'Load fine-tuned model in Ollama: `ollama create mymodel -f Modelfile`.',
            'Or use HuggingFace TRL (Transformers Reinforcement Learning) for RLHF.',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**Best stack: Ollama (native streaming) or vLLM + Server-Sent Events (SSE)**',
            'Why this stack: Streaming improves perceived performance (user sees tokens appear). Ollama is simplest. vLLM is fastest token throughput.',
          ],
          numberedItems: [
            'Ollama: Call `/api/generate` with `stream: true`. Tokens arrive as newline-delimited JSON.',
            'vLLM: Use `/v1/chat/completions` with `stream: true`. Returns OpenAI-compatible SSE stream.',
            'Frontend: Use EventSource API (JavaScript) to consume stream, update UI per token.',
            'Disable batch processing (batch=1) for lowest latency.',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: 'Should I use Ollama or vLLM?', a: 'Ollama for chat UI + simplicity. vLLM for API server + batch processing + performance. Not mutually exclusive; can run both.' },
            { q: 'Can I use Ollama for production API?', a: 'Yes, but vLLM is faster (3–5× higher throughput). Ollama is good for <10 req/sec. vLLM for 10+ req/sec.' },
            { q: 'What\'s the best local LLM for code review?', a: 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder scores 82% on HumanEval (best open-source). vLLM processes 10 files in parallel. ~30–50 tok/sec on RTX 3060 12GB.' },
            { q: 'Do I need a vector DB for simple RAG?', a: 'For <100 documents: in-memory embeddings (np.ndarray) OK. For >100: use Qdrant or Weaviate to avoid memory bloat.' },
            { q: 'Is LangGraph overkill for simple chatbots?', a: 'Yes. Use Ollama or vLLM alone. LangGraph is for multi-step workflows (agent loops, planning).' },
            { q: 'Can I mix Ollama and vLLM backends?', a: 'Yes. E.g., Ollama for chat UI, vLLM for batch API. They can run on same machine (different ports).' },
          ],
        },
        'relatedReading': {
          title: 'Related Reading',
          items: [
            '[Best AI Coding Assistant for Local LLM](/local-llms/best-ai-coding-assistant-local-llm) — IDE choice for your coding stack (Cursor, Continue.dev, Cody).',
            '[Best Local LLMs for Coding 2026](/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek-Coder HumanEval rankings.',
            '[Local RAG Setup 2026](/local-llms/local-rag-2026) — Complete LlamaIndex + Qdrant + Ollama implementation guide.',
            '[Local LLM Agents with LangGraph](/local-llms/local-llm-agents-with-langgraph) — Agent workflow framework with step-by-step examples.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) — Backend comparison: CLI vs GUI, speed, batch processing.',
            '[Open WebUI vs SillyTavern](/local-llms/open-webui-vs-sillytavern) — Chat UI comparison: professional vs roleplay.',
            '[How much VRAM do local LLMs need?](/local-llms/how-much-vram-local-llm) — Hardware requirements by model size and use case.',
          ],
        },
        'commonMistakes': {
          title: 'Common Mistakes When Choosing an LLM Stack',
          items: [
            '**Using Ollama for production API without vLLM:** Ollama maxes out at <10 req/sec. For production serving 10+ concurrent users, vLLM is mandatory. Test throughput under load before deploying.',
            '**Running LangGraph without vLLM backend:** LangGraph agents make 10+ sequential LLM calls. Ollama introduces latency bottleneck. Always pair LangGraph with vLLM for sub-second round-trip times.',
            '**Mixing Ollama + vLLM on same GPU without memory management:** Both tools load weights into VRAM. Running two instances of 70B model consumes 32 GB. Use separate GPUs or quantize heavily (Q2) to fit both.',
            '**Choosing wrong context window for writing:** Default 4K context limits brainstorming sessions. For long-form writing, set 16K-32K context window in OpenWebUI. Trade-off: slower inference (2-3× slower per token).',
            '**Assuming all backends are equally fast:** vLLM + Ollama use different kernels. On same hardware, vLLM is 2-3× faster for inference. Speed difference is backend, not frontend (OpenWebUI, LM Studio are just UIs).',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            '[Ollama GitHub](https://github.com/ollama/ollama) — Official documentation, streaming API specification, and model library.',
            '[vLLM GitHub](https://github.com/lm-sys/vllm) — OpenAI API compatibility, batch processing, and continuous batching documentation.',
            '[Qwen3-Coder Technical Report](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen. 82% HumanEval score, specialized for coding tasks. Apache 2.0 licensed.',
            '[LlamaIndex documentation](https://docs.llamaindex.ai) — Document indexing, chunking, and RAG retrieval framework.',
            '[LangGraph documentation](https://langchain-ai.github.io/langgraph/) — Agent workflow framework, state machines, tool use patterns.',
            '[Qdrant documentation](https://qdrant.tech/documentation/) — Vector database for local embedding storage, Docker-ready, Apache 2.0.',
            '[Continue.dev documentation](https://docs.continue.dev/) — IDE extension for VS Code and JetBrains using local LLM backends.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Best Local LLM Stack by Use Case 2026: Coding, Writing, RAG, Agents',
        'description': 'Best local LLM stack by use case April 2026: Coding → vLLM + Qwen3-Coder. Writing → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. Hardware tiers 8–24 GB VRAM. Complete setup guide.',
        'url': 'https://www.promptquorum.com/local-llms/best-local-llm-stack-use-case',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Should I use Ollama or vLLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama for chat UI + simplicity. vLLM for API server + batch processing + performance. Not mutually exclusive; can run both.' } },
          { '@type': 'Question', 'name': 'Can I use Ollama for production API?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, but vLLM is faster (3–5× higher throughput). Ollama is good for <10 req/sec. vLLM for 10+ req/sec.' } },
          { '@type': 'Question', 'name': 'What\'s the best local LLM for code review?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder scores 82% on HumanEval (best open-source). vLLM processes 10 files in parallel. ~30–50 tok/sec on RTX 3060 12GB.' } },
          { '@type': 'Question', 'name': 'Do I need a vector DB for simple RAG?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For <100 documents: in-memory embeddings (np.ndarray) OK. For >100: use Qdrant or Weaviate to avoid memory bloat.' } },
          { '@type': 'Question', 'name': 'Is LangGraph overkill for simple chatbots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Use Ollama or vLLM alone. LangGraph is for multi-step workflows (agent loops, planning).' } },
          { '@type': 'Question', 'name': 'Can I mix Ollama and vLLM backends?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. E.g., Ollama for chat UI, vLLM for batch API. They can run on same machine (different ports).' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Local LLM Stack Guide by Use Case',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Writing & Content Creation', 'description': 'Ollama + OpenWebUI + Llama 3.3 (24GB) or Llama 3.2 8B (8GB). Best for long-form writing with adjustable 8K–32K context windows. Simple setup, no coding required. Best chat UX among local LLM frontends.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Software Development & Code Review', 'description': 'vLLM + Qwen3-Coder-7B-Instruct (RTX 3060 12GB) or -14B (RTX 4070+). Fastest for batch inference (3–5× faster than Ollama). 82% HumanEval score. OpenAI-compatible API, token streaming for real-time completions. Batch processing for multi-file code review.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Local RAG (Document Q&A)', 'description': 'LlamaIndex + Ollama/vLLM + Qdrant vector database + FastAPI UI. Integrated document chunking, embedding, and retrieval. Qdrant is self-hosted, private, and fast. Embedding model matters more than LLM size for RAG quality.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'AI Agents & Workflows', 'description': 'LangGraph + vLLM (not Ollama) + tool definitions. Structured agent loops with explicit tool use and memory. vLLM required for sub-second latency in tight loops. Steeper learning curve but production-ready.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Multi-User API Server', 'description': 'vLLM + nginx load balancer + Prometheus monitoring. Distributed inference across multiple GPUs or instances. Scales to 10+ concurrent users. Token rate limiting per user. Production-grade observability.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Fine-Tuning & Research', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM for inference. LoRA reduces VRAM footprint 10×. Train separately on dedicated hardware, serve on inference box. Llama 3.2 and Qwen3 recommended (Llama 3.3 deprecated as of April 2026).' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Real-Time Streaming', 'description': 'Ollama (native streaming endpoint) or vLLM + Server-Sent Events (SSE). Streaming tokens improve perceived performance and UX. Ollama simplest setup, vLLM fastest throughput. Both support OpenAI-compatible streaming API.' },
        ],
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Mejor stack de LLM local por caso de uso 2026: Escritura, Código, RAG, Agentes',
      seoTitle: 'Mejor stack LLM local 2026: Código, RAG, Escritura y Agentes',
      intro: '**El mejor stack de LLM local depende de tu flujo de trabajo: escritura → Ollama + OpenWebUI + Llama 3.3, desarrollo → vLLM + Qwen3-Coder + extensión IDE, investigación → LangGraph + vLLM. En abril de 2026, ninguna herramienta lo hace todo bien.** Esta guía mapea 7 casos de uso comunes a su stack óptimo (backend + UI + integraciones) y niveles de hardware (8–24 GB VRAM).',
      metaDescription: 'Stack LLM local por caso de uso 2026: código → vLLM + Qwen3-Coder; escritura → Ollama + Llama 3.3; RAG → LlamaIndex + Qdrant. VRAM 8–24 GB.',
      twitterDescription: 'Stacks LLM local por caso de uso: Código → vLLM + Qwen3-Coder. Escritura → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. Agentes → LangGraph + vLLM. Guía abril 2026.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**El mejor stack de LLM local depende de tu flujo de trabajo: escritores necesitan OpenWebUI + Llama 3, desarrolladores necesitan vLLM + Python SDK, investigadores necesitan LangGraph + scripts personalizados. En abril de 2026, ninguna herramienta es líder en todo.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan flujos de trabajo con LLM locales',
      readTime: '10 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM Stack',
      toc: [
        { label: 'Puntos clave', anchor: '#tldr' },
        { label: 'Tabla de decisión por hardware', anchor: '#hardware' },
        { label: 'Escritura y creación de contenido', anchor: '#writing' },
        { label: 'Desarrollo de software y revisión de código', anchor: '#coding' },
        { label: 'RAG local (preguntas sobre documentos)', anchor: '#rag' },
        { label: 'Agentes IA y workflows', anchor: '#agents' },
        { label: 'Servidor API multiusuario', anchor: '#api' },
        { label: 'Fine-tuning e investigación', anchor: '#finetuning' },
        { label: 'Chat en tiempo real (streaming)', anchor: '#streaming' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**Escritura/creación de contenido:** Ollama + OpenWebUI. Sin configuración, UI de chat excelente, ventana de contexto ajustable.',
            '**Código/revisión de código:** vLLM + FastAPI + extensión VS Code. Procesamiento por lotes, inferencia paralela, streaming.',
            '**RAG local:** LlamaIndex + Ollama/vLLM + Qdrant vector DB. Chunking de documentos, embedding y recuperación integrados.',
            '**Agentes IA:** LangGraph + backend vLLM. Uso de herramientas, memoria, bucle de planificación. Curva de aprendizaje más pronunciada.',
            '**API multiusuario:** vLLM detrás de un load balancer (nginx). Gestiona 10+ solicitudes concurrentes. La opción más escalable.',
            '**Fine-tuning:** HuggingFace Transformers + LoRA + Ollama para inferencia. Entrenamiento separado del serving.',
            '**Streaming en tiempo real:** Ollama (streaming nativo) o vLLM + endpoint de streaming de tokens. Mejor UX para chatbots.',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: 'Decisión rápida: stack por nivel de hardware (abril 2026)',
          content: 'Elige el stack según tu GPU/VRAM. Cada combinación está probada con benchmarks reales. Los flujos de código y agentes se benefician más de modelos grandes que la escritura; el RAG depende más de la calidad del embedding que del tamaño del LLM.',
          columns: ['Tu hardware', 'Escritura', 'Código', 'RAG', 'Agentes'],
          rows: [
            { 'Tu hardware': '4–8 GB VRAM (GTX 1660, RTX 3050)', 'Escritura': 'Ollama + Phi-4 Mini', 'Código': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'Agentes': 'No recomendado' },
            { 'Tu hardware': '12 GB VRAM (RTX 3060, RTX 4070)', 'Escritura': 'Ollama + Llama 3.2 8B', 'Código': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'Agentes': 'LangGraph + Ollama (más lento)' },
            { 'Tu hardware': '16 GB VRAM (RTX 4070 Ti, RTX 4080)', 'Escritura': 'Ollama + Mistral Small 3.1', 'Código': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'Agentes': 'LangGraph + vLLM' },
            { 'Tu hardware': '24 GB VRAM (RTX 3090, RTX 4090)', 'Escritura': 'Ollama + Llama 3.3 70B Q4', 'Código': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'Agentes': 'LangGraph + vLLM (el más rápido)' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**Mejor stack: [Ollama](/es/local-llms/how-to-install-ollama) + [OpenWebUI](/es/local-llms/open-webui-vs-sillytavern) + editor Markdown**',
            'Por qué este stack: OpenWebUI tiene la mejor UX de chat. No requiere código. La flexibilidad de la ventana de contexto (4K–32K) supera a LM Studio para escritura de texto largo. Más económico que las API cloud para escritores.',
          ],
          numberedItems: [
            'Para 24 GB VRAM: `ollama pull llama3.3:70b` — calidad máxima, equiparable a GPT-4 (2023) en benchmarks de escritura.',
            'Para 16 GB VRAM: `ollama pull mistral-small3.1` — contexto de 128K, mejor calidad por debajo de 24 GB.',
            'Para 8 GB VRAM: `ollama pull llama3.2:8b` — buena calidad de escritura, rápido en hardware de consumo.',
            'Instala OpenWebUI via Docker: `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
            'Configura la ventana de contexto (8K–32K tokens) en la configuración de OpenWebUI según la longitud del documento.',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**Mejor stack: [vLLM](/es/local-llms/vllm-performance-guide) + Qwen3-Coder + extensión IDE**',
            'Por qué este stack: Qwen3-Coder obtiene un 82% en HumanEval (mejor modelo de código open-source, abril 2026). vLLM es 3–5× más rápido que Ollama para inferencia por lotes. La compatibilidad nativa con la API de OpenAI encaja con las herramientas IDE existentes. Streaming habilitado para sugerencias en tiempo real.',
            '',
            '**Revisión de código con IA para múltiples archivos**',
            'Para revisión automatizada de varios archivos, usa el procesamiento por lotes de vLLM:',
          ],
          numberedItems: [
            'Instala vLLM: `pip install vllm`.',
            'Inicia el servidor vLLM con Qwen3-Coder-7B: `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
            'Para 16+ GB VRAM, usa el modelo 14B: `--model Qwen/Qwen3-Coder-14B-Instruct`.',
            'Conecta la extensión IDE (VS Code Continue.dev, Cursor, etc.) a `http://localhost:8000/v1`.',
            'Habilita el procesamiento por lotes para revisión de código: procesa 10 archivos en paralelo con una sola llamada API (`vllm` admite batch=10 por defecto).',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**Mejor stack: LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
            'Por qué este stack: [LlamaIndex](/es/local-llms/local-rag-2026) gestiona el chunking y la recuperación. Qdrant es rápido, local y privado. Ollama proporciona embeddings (gratuito) o usa vLLM para la inferencia LLM.',
          ],
          numberedItems: [
            'Instala LlamaIndex (`pip install llama-index`).',
            'Carga documentos (PDF, TXT, markdown) en LlamaIndex.',
            'Divide los documentos en chunks (1024 tokens por defecto), genera embeddings con un modelo local u OpenAI (respaldo).',
            'Almacena los embeddings en la vector DB Qdrant (se ejecuta localmente via Docker).',
            'Consulta via LlamaIndex: recupera los top-K documentos similares y envía el contexto al LLM.',
            'Envuelve en un endpoint FastAPI para UI web o integración con IDE.',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**Mejor stack: LangGraph + vLLM + definiciones de herramientas**',
            'Por qué este stack: [LangGraph](/es/local-llms/local-llm-agents-with-langgraph) proporciona un flujo de agente estructurado. vLLM es lo suficientemente rápido para 10+ llamadas LLM secuenciales. El uso de herramientas es explícito y fácil de depurar.',
          ],
          numberedItems: [
            'Instala LangGraph (`pip install langchain langgraph`).',
            'Define las herramientas (búsqueda web, calculadora, E/S de archivos) como firmas de funciones.',
            'Crea el grafo del agente con el LLM como nodo de decisión y las herramientas como nodos de acción.',
            'Usa el backend vLLM para llamadas LLM de baja latencia en bucles ajustados.',
            'Ejecuta el bucle del agente: LLM → selección de herramienta → ejecución → repetir hasta completar.',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**Mejor stack: vLLM + load balancer nginx + monitoreo**',
            'Por qué este stack: vLLM admite serving distribuido. Nginx multiplexa las solicitudes. Escala a 10+ usuarios concurrentes en un equipo con dual GPU. Monitorea el throughput de tokens por usuario.',
          ],
          numberedItems: [
            'Despliega vLLM con `--served-model-name model-name` en un puerto fijo.',
            'Configura nginx para balancear la carga entre 2+ instancias de vLLM (una por GPU si tienes múltiples GPUs).',
            'Usa el endpoint `/v1/chat/completions` compatible con OpenAI para compatibilidad con clientes.',
            'Monitorea mediante el endpoint de scrape de Prometheus (vLLM exporta latencia de solicitudes y métricas de throughput).',
            'Configura el rate limiting por usuario con el algoritmo token bucket.',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**Mejor stack: HuggingFace Transformers + LoRA + Ollama (inferencia)**',
            'Por qué este stack: LoRA reduce el uso de VRAM para fine-tuning 10×. Ollama carga modelos ajustados fácilmente. Modular: entrena en una máquina, sirve en otra.',
            '',
            '**Nota (abril 2026):** Meta deprecó Llama 3.3 para fine-tuning comercial. Haz fine-tuning en Llama 3.2 (`meta-llama/Llama-3.2-1B` o más grande) o Qwen3 (`Qwen/Qwen3-7B`) para términos de licencia Apache 2.0 / open-source. Ambos admiten LoRA y se cargan fácilmente en Ollama.',
          ],
          numberedItems: [
            'Realiza fine-tuning con la librería `peft` (LoRA) para reducir el uso de VRAM.',
            'Entrenamiento: se necesita 4× la VRAM del modelo (estado del optimizador, gradientes). Ejecuta por separado de la inferencia.',
            'Exporta el adaptador LoRA a HuggingFace Hub o al sistema de archivos local.',
            'Carga el modelo ajustado en Ollama: `ollama create mymodel -f Modelfile`.',
            'O usa HuggingFace TRL (Transformers Reinforcement Learning) para RLHF.',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**Mejor stack: Ollama (streaming nativo) o vLLM + Server-Sent Events (SSE)**',
            'Por qué este stack: El streaming mejora el rendimiento percibido (el usuario ve cómo aparecen los tokens). Ollama es el más sencillo. vLLM tiene el mayor throughput de tokens.',
          ],
          numberedItems: [
            'Ollama: llama a `/api/generate` con `stream: true`. Los tokens llegan como JSON delimitado por saltos de línea.',
            'vLLM: usa `/v1/chat/completions` con `stream: true`. Devuelve un stream SSE compatible con OpenAI.',
            'Frontend: usa la API EventSource (JavaScript) para consumir el stream y actualizar la UI por token.',
            'Deshabilita el procesamiento por lotes (batch=1) para la menor latencia posible.',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: '¿Debo usar Ollama o vLLM?', a: 'Ollama para UI de chat + simplicidad. vLLM para servidor API + procesamiento por lotes + rendimiento. No son mutuamente excluyentes; puedes ejecutar ambos.' },
            { q: '¿Puedo usar Ollama como API de producción?', a: 'Sí, pero vLLM es más rápido (3–5× mayor throughput). Ollama es adecuado para <10 req/seg. vLLM para 10+ req/seg.' },
            { q: '¿Cuál es el mejor LLM local para revisión de código?', a: 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder obtiene un 82% en HumanEval (el mejor open-source). vLLM procesa 10 archivos en paralelo. ~30–50 tok/seg en RTX 3060 12GB.' },
            { q: '¿Necesito una vector DB para RAG simple?', a: 'Para <100 documentos: embeddings en memoria (np.ndarray) son suficientes. Para >100: usa Qdrant o Weaviate para evitar el exceso de memoria.' },
            { q: '¿LangGraph es exagerado para chatbots simples?', a: 'Sí. Usa Ollama o vLLM directamente. LangGraph es para flujos de trabajo de múltiples pasos (bucles de agentes, planificación).' },
            { q: '¿Puedo combinar backends de Ollama y vLLM?', a: 'Sí. Por ejemplo, Ollama para la UI de chat, vLLM para la API por lotes. Pueden ejecutarse en la misma máquina en puertos diferentes.' },
          ],
        },
        'relatedReading': {
          title: 'Lectura relacionada',
          items: [
            '[Mejor asistente de código IA para LLM local](/es/local-llms/best-ai-coding-assistant-local-llm) — Elección de IDE para tu stack de código (Cursor, Continue.dev, Cody).',
            '[Mejores LLM locales para código 2026](/es/local-llms/best-local-llms-for-coding) — Rankings HumanEval: Qwen3-Coder vs DeepSeek-Coder.',
            '[Configuración RAG local 2026](/es/local-llms/local-rag-2026) — Guía completa de implementación con LlamaIndex + Qdrant + Ollama.',
            '[Agentes LLM locales con LangGraph](/es/local-llms/local-llm-agents-with-langgraph) — Framework de workflows de agentes con ejemplos paso a paso.',
            '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) — Comparativa de backends: CLI vs GUI, velocidad, procesamiento por lotes.',
            '[Open WebUI vs SillyTavern](/es/local-llms/open-webui-vs-sillytavern) — Comparativa de UI de chat: profesional vs roleplay.',
            '[¿Cuánta VRAM necesitan los LLM locales?](/es/local-llms/how-much-vram-local-llm) — Requisitos de hardware por tamaño de modelo y caso de uso.',
          ],
        },
        'commonMistakes': {
          title: 'Errores comunes al elegir un stack de LLM',
          items: [
            '**Usar Ollama para API de producción sin vLLM:** Ollama tiene un límite de <10 req/seg. Para producción con 10+ usuarios concurrentes, vLLM es obligatorio. Prueba el throughput bajo carga antes de desplegar.',
            '**Ejecutar LangGraph sin backend vLLM:** Los agentes de LangGraph realizan 10+ llamadas LLM secuenciales. Ollama introduce cuellos de botella de latencia. Combina siempre LangGraph con vLLM para tiempos de respuesta por debajo del segundo.',
            '**Mezclar Ollama + vLLM en la misma GPU sin gestión de memoria:** Ambas herramientas cargan pesos en la VRAM. Dos instancias de un modelo 70B consumen 32 GB. Usa GPUs separadas o cuantiza fuertemente (Q2) para que ambos quepan.',
            '**Elegir la ventana de contexto incorrecta para escribir:** El contexto por defecto de 4K limita las sesiones de brainstorming. Para escritura de texto largo, configura una ventana de 16K–32K tokens en OpenWebUI. Compromiso: inferencia más lenta (2–3× más lento por token).',
            '**Asumir que todos los backends son igual de rápidos:** vLLM y Ollama usan kernels diferentes. En el mismo hardware, vLLM es 2–3× más rápido para inferencia. La diferencia de velocidad está en el backend, no en el frontend (OpenWebUI, LM Studio son solo UIs).',
          ],
        },
        'sources': {
          title: 'Fuentes',
          items: [
            '[Ollama GitHub](https://github.com/ollama/ollama) — Documentación oficial, especificación de la API de streaming y biblioteca de modelos.',
            '[vLLM GitHub](https://github.com/lm-sys/vllm) — Compatibilidad con la API de OpenAI, procesamiento por lotes y documentación de continuous batching.',
            '[Informe técnico de Qwen3-Coder](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen. Puntuación HumanEval del 82%, especializado en tareas de código. Licencia Apache 2.0.',
            '[Documentación de LlamaIndex](https://docs.llamaindex.ai) — Framework de indexación de documentos, chunking y recuperación RAG.',
            '[Documentación de LangGraph](https://langchain-ai.github.io/langgraph/) — Framework de workflows de agentes, máquinas de estado, patrones de uso de herramientas.',
            '[Documentación de Qdrant](https://qdrant.tech/documentation/) — Base de datos vectorial para almacenamiento local de embeddings, lista para Docker, Apache 2.0.',
            '[Documentación de Continue.dev](https://docs.continue.dev/) — Extensión IDE para VS Code y JetBrains usando backends LLM locales.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Mejor stack de LLM local por caso de uso 2026: Código, Escritura, RAG, Agentes',
        'description': 'Mejor stack LLM local por caso de uso abril 2026: Código → vLLM + Qwen3-Coder. Escritura → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. VRAM 8–24 GB. Guía completa de configuración.',
        'url': 'https://www.promptquorum.com/es/local-llms/best-local-llm-stack-use-case',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'vLLM' },
          { '@type': 'Thing', 'name': 'OpenWebUI' },
          { '@type': 'Thing', 'name': 'Qwen3-Coder' },
          { '@type': 'Thing', 'name': 'LlamaIndex' },
          { '@type': 'Thing', 'name': 'LangGraph' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
          { '@type': 'SoftwareApplication', 'name': 'Qdrant' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': '¿Debo usar Ollama o vLLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama para UI de chat + simplicidad. vLLM para servidor API + procesamiento por lotes + rendimiento. No son mutuamente excluyentes; puedes ejecutar ambos.' } },
          { '@type': 'Question', 'name': '¿Puedo usar Ollama como API de producción?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, pero vLLM es más rápido (3–5× mayor throughput). Ollama es adecuado para <10 req/seg. vLLM para 10+ req/seg.' } },
          { '@type': 'Question', 'name': '¿Cuál es el mejor LLM local para revisión de código?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder obtiene un 82% en HumanEval (el mejor open-source). vLLM procesa 10 archivos en paralelo. ~30–50 tok/seg en RTX 3060 12GB.' } },
          { '@type': 'Question', 'name': '¿Necesito una vector DB para RAG simple?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para <100 documentos: embeddings en memoria (np.ndarray) son suficientes. Para >100: usa Qdrant o Weaviate para evitar el exceso de memoria.' } },
          { '@type': 'Question', 'name': '¿LangGraph es exagerado para chatbots simples?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Usa Ollama o vLLM directamente. LangGraph es para flujos de trabajo de múltiples pasos (bucles de agentes, planificación).' } },
          { '@type': 'Question', 'name': '¿Puedo combinar backends de Ollama y vLLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Por ejemplo, Ollama para la UI de chat, vLLM para la API por lotes. Pueden ejecutarse en la misma máquina en puertos diferentes.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Guía de stack de LLM local por caso de uso',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Escritura y creación de contenido', 'description': 'Ollama + OpenWebUI + Llama 3.3 (24 GB) o Llama 3.2 8B (8 GB). Ideal para escritura de texto largo con ventanas de contexto ajustables de 8K–32K. Configuración sencilla, sin necesidad de código. Mejor UX de chat entre los frontends de LLM locales.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Desarrollo de software y revisión de código', 'description': 'vLLM + Qwen3-Coder-7B-Instruct (RTX 3060 12 GB) o -14B (RTX 4070+). El más rápido para inferencia por lotes (3–5× más que Ollama). Puntuación HumanEval del 82%. API compatible con OpenAI, streaming de tokens para autocompletado en tiempo real. Procesamiento por lotes para revisión de múltiples archivos.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'RAG local (preguntas sobre documentos)', 'description': 'LlamaIndex + Ollama/vLLM + base de datos vectorial Qdrant + FastAPI UI. Chunking de documentos, embedding y recuperación integrados. Qdrant es autoalojado, privado y rápido. La calidad del modelo de embedding importa más que el tamaño del LLM para la calidad del RAG.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Agentes IA y workflows', 'description': 'LangGraph + vLLM (no Ollama) + definiciones de herramientas. Bucles de agentes estructurados con uso explícito de herramientas y memoria. vLLM es necesario para latencia por debajo del segundo en bucles ajustados. Mayor curva de aprendizaje pero listo para producción.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Servidor API multiusuario', 'description': 'vLLM + load balancer nginx + monitoreo Prometheus. Inferencia distribuida entre múltiples GPUs o instancias. Escala a 10+ usuarios concurrentes. Rate limiting de tokens por usuario. Observabilidad de nivel producción.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Fine-tuning e investigación', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM para inferencia. LoRA reduce el uso de VRAM 10×. Entrena por separado en hardware dedicado, sirve en la máquina de inferencia. Se recomienda Llama 3.2 y Qwen3 (Llama 3.3 deprecated desde abril 2026).' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Streaming en tiempo real', 'description': 'Ollama (endpoint de streaming nativo) o vLLM + Server-Sent Events (SSE). El streaming de tokens mejora el rendimiento percibido y la UX. Ollama tiene la configuración más sencilla, vLLM el mayor throughput. Ambos admiten la API de streaming compatible con OpenAI.' },
        ],
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'أفضل منظومة LLM محلية حسب حالة الاستخدام 2026: الكتابة، البرمجة، RAG، الوكلاء',
      seoTitle: 'منظومة LLM محلية 2026: برمجة، RAG، كتابة، وكلاء',
      intro: '**أفضل منظومة LLM محلية تعتمد على سير عملك: الكتابة ← Ollama + OpenWebUI + Llama 3.3، التطوير ← vLLM + Qwen3-Coder + امتداد IDE، البحث ← LangGraph + vLLM. في أبريل 2026، لا توجد أداة واحدة تتقن كل شيء.** يربط هذا الدليل 7 حالات استخدام شائعة بمنظومتها المثلى (الخلفية + الواجهة + التكاملات) وفئات العتاد (8–24 GB VRAM).',
      metaDescription: 'البرمجة: vLLM + Qwen3-Coder. الكتابة: Ollama + Llama 3.3. RAG: LlamaIndex + Qdrant. فئات VRAM من 8 إلى 24 GB مع أوامر إعداد لكل حالة استخدام.',
      twitterDescription: 'منظومات LLM محلية حسب حالة الاستخدام: البرمجة ← vLLM + Qwen3-Coder. الكتابة ← Ollama + Llama 3.3. RAG ← LlamaIndex + Qdrant. الوكلاء ← LangGraph + vLLM. دليل أبريل 2026.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**أفضل منظومة LLM محلية تعتمد على سير عملك: الكتّاب يحتاجون OpenWebUI + Llama 3، والمطورون يحتاجون vLLM + Python SDK، والباحثون يحتاجون LangGraph + سكربتات مخصصة. في أبريل 2026، لا توجد أداة واحدة رائدة في كل شيء.**',
      audience: 'المطورون المعتادون على Ollama أو LM Studio الذين يحسّنون سير العمل مع نماذج LLM المحلية',
      readTime: '10 دقائق للقراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM Stack',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#tldr' },
        { label: 'جدول القرار حسب العتاد', anchor: '#hardware' },
        { label: 'الكتابة وإنشاء المحتوى', anchor: '#writing' },
        { label: 'تطوير البرمجيات ومراجعة الكود', anchor: '#coding' },
        { label: 'RAG محلي (أسئلة عن المستندات)', anchor: '#rag' },
        { label: 'وكلاء الذكاء الاصطناعي وسير العمل', anchor: '#agents' },
        { label: 'خادم API متعدد المستخدمين', anchor: '#api' },
        { label: 'fine-tuning والبحث', anchor: '#finetuning' },
        { label: 'دردشة في الوقت الفعلي (streaming)', anchor: '#streaming' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**الكتابة/إنشاء المحتوى:** Ollama + OpenWebUI. دون تهيئة، وواجهة دردشة ممتازة، ونافذة سياق قابلة للضبط.',
            '**البرمجة/مراجعة الكود:** vLLM + FastAPI + امتداد VS Code. معالجة بالدفعات، واستدلال متوازٍ، وstreaming.',
            '**RAG محلي:** LlamaIndex + Ollama/vLLM + قاعدة بيانات متجهية Qdrant. تقطيع المستندات، وembedding، والاسترجاع مدمجة.',
            '**وكلاء الذكاء الاصطناعي:** LangGraph + خلفية vLLM. استخدام الأدوات، والذاكرة، وحلقة التخطيط. منحنى تعلّم أكثر حدّة.',
            '**API متعدد المستخدمين:** vLLM خلف موزّع أحمال (nginx). يدير 10+ طلبات متزامنة. الخيار الأكثر قابلية للتوسّع.',
            '**fine-tuning:** HuggingFace Transformers + LoRA + Ollama للاستدلال. التدريب منفصل عن الخدمة.',
            '**streaming في الوقت الفعلي:** Ollama (streaming أصلي) أو vLLM + نقطة نهاية لتدفّق الـ token. أفضل تجربة مستخدم لروبوتات الدردشة.',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: 'قرار سريع: المنظومة حسب فئة العتاد (أبريل 2026)',
          content: 'اختر المنظومة وفقاً لـ GPU/VRAM لديك. كل تركيبة مختبرة بقياسات حقيقية. تستفيد مسارات البرمجة والوكلاء من النماذج الكبيرة أكثر من الكتابة؛ ويعتمد RAG على جودة embedding أكثر من حجم LLM.',
          columns: ['عتادك', 'الكتابة', 'البرمجة', 'RAG', 'الوكلاء'],
          rows: [
            { 'عتادك': '4–8 GB VRAM (GTX 1660, RTX 3050)', 'الكتابة': 'Ollama + Phi-4 Mini', 'البرمجة': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'الوكلاء': 'غير موصى به' },
            { 'عتادك': '12 GB VRAM (RTX 3060, RTX 4070)', 'الكتابة': 'Ollama + Llama 3.2 8B', 'البرمجة': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'الوكلاء': 'LangGraph + Ollama (أبطأ)' },
            { 'عتادك': '16 GB VRAM (RTX 4070 Ti, RTX 4080)', 'الكتابة': 'Ollama + Mistral Small 3.1', 'البرمجة': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'الوكلاء': 'LangGraph + vLLM' },
            { 'عتادك': '24 GB VRAM (RTX 3090, RTX 4090)', 'الكتابة': 'Ollama + Llama 3.3 70B Q4', 'البرمجة': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'الوكلاء': 'LangGraph + vLLM (الأسرع)' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**أفضل منظومة: [Ollama](/ar/local-llms/how-to-install-ollama) + [OpenWebUI](/ar/local-llms/open-webui-vs-sillytavern) + محرر Markdown**',
            'لماذا هذه المنظومة: لدى OpenWebUI أفضل تجربة مستخدم للدردشة. لا تتطلب كوداً. مرونة نافذة السياق (4K–32K) تتفوق على LM Studio لكتابة النصوص الطويلة. أكثر اقتصاداً من واجهات API السحابية للكتّاب.',
          ],
          numberedItems: [
            'لـ 24 GB VRAM: `ollama pull llama3.3:70b` — أقصى جودة، تضاهي GPT-4 (2023) في قياسات الكتابة.',
            'لـ 16 GB VRAM: `ollama pull mistral-small3.1` — سياق 128K، أفضل جودة دون 24 GB.',
            'لـ 8 GB VRAM: `ollama pull llama3.2:8b` — جودة كتابة جيدة، وسريع على العتاد الاستهلاكي.',
            'ثبّت OpenWebUI عبر Docker: `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
            'اضبط نافذة السياق (8K–32K token) في إعدادات OpenWebUI وفقاً لطول المستند.',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**أفضل منظومة: [vLLM](/ar/local-llms/vllm-performance-guide) + Qwen3-Coder + امتداد IDE**',
            'لماذا هذه المنظومة: يحقق Qwen3-Coder نسبة 82% في HumanEval (أفضل نموذج برمجي مفتوح المصدر، أبريل 2026). vLLM أسرع بمقدار 3–5× من Ollama للاستدلال بالدفعات. التوافق الأصلي مع API من OpenAI يناسب أدوات IDE الحالية. streaming مُفعَّل للاقتراحات في الوقت الفعلي.',
            '',
            '**مراجعة الكود بالذكاء الاصطناعي لملفات متعددة**',
            'للمراجعة الآلية لعدة ملفات، استخدم معالجة الدفعات في vLLM:',
          ],
          numberedItems: [
            'ثبّت vLLM: `pip install vllm`.',
            'ابدأ خادم vLLM مع Qwen3-Coder-7B: `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
            'لـ 16+ GB VRAM، استخدم نموذج 14B: `--model Qwen/Qwen3-Coder-14B-Instruct`.',
            'اربط امتداد IDE (VS Code Continue.dev، Cursor، إلخ) بـ `http://localhost:8000/v1`.',
            'فعّل معالجة الدفعات لمراجعة الكود: عالج 10 ملفات بالتوازي باستدعاء API واحد (`vllm` يدعم batch=10 افتراضياً).',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**أفضل منظومة: LlamaIndex + Ollama/vLLM + Qdrant + واجهة FastAPI**',
            'لماذا هذه المنظومة: يدير [LlamaIndex](/ar/local-llms/local-rag-2026) التقطيع والاسترجاع. Qdrant سريع، ومحلي، وخاص. يوفّر Ollama embeddings (مجاناً) أو استخدم vLLM لاستدلال LLM.',
          ],
          numberedItems: [
            'ثبّت LlamaIndex (`pip install llama-index`).',
            'حمّل المستندات (PDF، TXT، markdown) في LlamaIndex.',
            'قسّم المستندات إلى أجزاء (1024 token افتراضياً)، وولّد embeddings بنموذج محلي أو OpenAI (احتياطي).',
            'خزّن embeddings في قاعدة البيانات المتجهية Qdrant (تعمل محلياً عبر Docker).',
            'استعلم عبر LlamaIndex: استرجع أعلى K مستندات متشابهة وأرسل السياق إلى LLM.',
            'غلّفها في نقطة نهاية FastAPI لواجهة ويب أو تكامل مع IDE.',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**أفضل منظومة: LangGraph + vLLM + تعريفات الأدوات**',
            'لماذا هذه المنظومة: يوفّر [LangGraph](/ar/local-llms/local-llm-agents-with-langgraph) تدفّق وكيل منظّم. vLLM سريع بما يكفي لـ 10+ استدعاءات LLM متتالية. استخدام الأدوات صريح وسهل التصحيح.',
          ],
          numberedItems: [
            'ثبّت LangGraph (`pip install langchain langgraph`).',
            'عرّف الأدوات (البحث على الويب، الآلة الحاسبة، إدخال/إخراج الملفات) كتواقيع دوال.',
            'أنشئ رسم الوكيل مع LLM كعقدة قرار والأدوات كعقد إجراء.',
            'استخدم خلفية vLLM لاستدعاءات LLM منخفضة الكمون في الحلقات الضيقة.',
            'شغّل حلقة الوكيل: LLM ← اختيار الأداة ← التنفيذ ← التكرار حتى الاكتمال.',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**أفضل منظومة: vLLM + موزّع أحمال nginx + مراقبة**',
            'لماذا هذه المنظومة: يدعم vLLM الخدمة الموزّعة. يوزّع nginx الطلبات. يتوسّع إلى 10+ مستخدمين متزامنين على جهاز بـ GPU مزدوجة. راقب إنتاجية الـ token لكل مستخدم.',
          ],
          numberedItems: [
            'انشر vLLM مع `--served-model-name model-name` على منفذ ثابت.',
            'هيّئ nginx لموازنة الحمل بين مثيلين أو أكثر من vLLM (واحد لكل GPU إن كان لديك عدة بطاقات GPU).',
            'استخدم نقطة النهاية `/v1/chat/completions` المتوافقة مع OpenAI للتوافق مع العملاء.',
            'راقب عبر نقطة نهاية Prometheus للجمع (يصدّر vLLM كمون الطلبات ومقاييس الإنتاجية).',
            'هيّئ تحديد المعدّل لكل مستخدم بخوارزمية token bucket.',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**أفضل منظومة: HuggingFace Transformers + LoRA + Ollama (للاستدلال)**',
            'لماذا هذه المنظومة: يقلّل LoRA استخدام VRAM لـ fine-tuning بمقدار 10×. يحمّل Ollama النماذج المضبوطة بسهولة. معياري: درّب على جهاز، وقدّم الخدمة على آخر.',
            '',
            '**ملاحظة (أبريل 2026):** أوقفت Meta دعم Llama 3.3 لـ fine-tuning التجاري. نفّذ fine-tuning على Llama 3.2 (`meta-llama/Llama-3.2-1B` أو أكبر) أو Qwen3 (`Qwen/Qwen3-7B`) لشروط ترخيص Apache 2.0 / مفتوح المصدر. كلاهما يدعم LoRA ويُحمَّل بسهولة في Ollama.',
          ],
          numberedItems: [
            'نفّذ fine-tuning باستخدام مكتبة `peft` (LoRA) لتقليل استخدام VRAM.',
            'التدريب: يحتاج 4× من VRAM النموذج (حالة المحسّن، التدرّجات). شغّله منفصلاً عن الاستدلال.',
            'صدّر محوّل LoRA إلى HuggingFace Hub أو نظام الملفات المحلي.',
            'حمّل النموذج المضبوط في Ollama: `ollama create mymodel -f Modelfile`.',
            'أو استخدم HuggingFace TRL (Transformers Reinforcement Learning) لـ RLHF.',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**أفضل منظومة: Ollama (streaming أصلي) أو vLLM + Server-Sent Events (SSE)**',
            'لماذا هذه المنظومة: يحسّن streaming الأداء المُدرَك (يرى المستخدم الـ token تظهر). Ollama هو الأبسط. vLLM لديه أعلى إنتاجية token.',
          ],
          numberedItems: [
            'Ollama: استدعِ `/api/generate` مع `stream: true`. تصل الـ token كـ JSON مفصول بأسطر جديدة.',
            'vLLM: استخدم `/v1/chat/completions` مع `stream: true`. يعيد تدفّق SSE متوافقاً مع OpenAI.',
            'الواجهة الأمامية: استخدم EventSource API (JavaScript) لاستهلاك التدفّق وتحديث الواجهة لكل token.',
            'عطّل معالجة الدفعات (batch=1) لأقل كمون ممكن.',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: 'هل أستخدم Ollama أم vLLM؟', a: 'Ollama لواجهة الدردشة + البساطة. vLLM لخادم API + معالجة الدفعات + الأداء. ليسا متعارضين؛ يمكنك تشغيل كليهما.' },
            { q: 'هل يمكنني استخدام Ollama كـ API إنتاجي؟', a: 'نعم، لكن vLLM أسرع (إنتاجية أعلى بمقدار 3–5×). Ollama مناسب لـ <10 طلب/ثانية. vLLM لـ 10+ طلب/ثانية.' },
            { q: 'ما هو أفضل نموذج LLM محلي لمراجعة الكود؟', a: 'vLLM + Qwen3-Coder-7B-Instruct. يحقق Qwen3-Coder نسبة 82% في HumanEval (الأفضل مفتوح المصدر). يعالج vLLM 10 ملفات بالتوازي. ~30–50 tok/ثانية على RTX 3060 12GB.' },
            { q: 'هل أحتاج إلى قاعدة بيانات متجهية لـ RAG بسيط؟', a: 'لـ <100 مستند: embeddings في الذاكرة (np.ndarray) كافية. لـ >100: استخدم Qdrant أو Weaviate لتجنّب فرط الذاكرة.' },
            { q: 'هل LangGraph مبالغ فيه لروبوتات الدردشة البسيطة؟', a: 'نعم. استخدم Ollama أو vLLM مباشرة. LangGraph لسير العمل متعدد الخطوات (حلقات الوكلاء، التخطيط).' },
            { q: 'هل يمكنني دمج خلفيتي Ollama وvLLM؟', a: 'نعم. مثلاً، Ollama لواجهة الدردشة، وvLLM لـ API الدفعات. يمكنهما العمل على الجهاز نفسه على منافذ مختلفة.' },
          ],
        },
        'relatedReading': {
          title: 'قراءات ذات صلة',
          items: [
            '[أفضل مساعد برمجي بالذكاء الاصطناعي لنموذج LLM محلي](/ar/local-llms/best-ai-coding-assistant-local-llm) — اختيار IDE لمنظومة البرمجة لديك (Cursor، Continue.dev، Cody).',
            '[أفضل نماذج LLM المحلية للبرمجة 2026](/ar/local-llms/best-local-llms-for-coding) — تصنيفات HumanEval: Qwen3-Coder مقابل DeepSeek-Coder.',
            '[تهيئة RAG محلي 2026](/ar/local-llms/local-rag-2026) — دليل تنفيذ شامل مع LlamaIndex + Qdrant + Ollama.',
            '[وكلاء LLM محليون مع LangGraph](/ar/local-llms/local-llm-agents-with-langgraph) — إطار عمل سير عمل الوكلاء مع أمثلة خطوة بخطوة.',
            '[Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) — مقارنة الخلفيات: CLI مقابل GUI، السرعة، معالجة الدفعات.',
            '[Open WebUI مقابل SillyTavern](/ar/local-llms/open-webui-vs-sillytavern) — مقارنة واجهات الدردشة: احترافية مقابل تقمّص أدوار.',
            '[كم من VRAM تحتاج نماذج LLM المحلية؟](/ar/local-llms/how-much-vram-local-llm) — متطلبات العتاد حسب حجم النموذج وحالة الاستخدام.',
          ],
        },
        'commonMistakes': {
          title: 'أخطاء شائعة عند اختيار منظومة LLM',
          items: [
            '**استخدام Ollama لـ API إنتاجي دون vLLM:** لدى Ollama حد <10 طلب/ثانية. للإنتاج مع 10+ مستخدمين متزامنين، vLLM إلزامي. اختبر الإنتاجية تحت الحمل قبل النشر.',
            '**تشغيل LangGraph دون خلفية vLLM:** يجري وكلاء LangGraph 10+ استدعاءات LLM متتالية. يُدخل Ollama اختناقات كمون. ادمج دائماً LangGraph مع vLLM لأزمنة استجابة دون الثانية.',
            '**خلط Ollama + vLLM على نفس GPU دون إدارة ذاكرة:** كلتا الأداتين تحمّلان الأوزان في VRAM. مثيلان من نموذج 70B يستهلكان 32 GB. استخدم بطاقات GPU منفصلة أو كمّم بقوة (Q2) ليناسبا معاً.',
            '**اختيار نافذة السياق الخاطئة للكتابة:** السياق الافتراضي 4K يحد جلسات العصف الذهني. لكتابة النصوص الطويلة، اضبط نافذة 16K–32K token في OpenWebUI. المقايضة: استدلال أبطأ (2–3× أبطأ لكل token).',
            '**افتراض أن جميع الخلفيات بالسرعة نفسها:** يستخدم vLLM وOllama أنوية مختلفة. على العتاد نفسه، vLLM أسرع بمقدار 2–3× للاستدلال. فرق السرعة في الخلفية، لا في الواجهة الأمامية (OpenWebUI، LM Studio مجرد واجهات).',
          ],
        },
        'sources': {
          title: 'المصادر',
          items: [
            '[Ollama GitHub](https://github.com/ollama/ollama) — الوثائق الرسمية، ومواصفات API الـ streaming، ومكتبة النماذج.',
            '[vLLM GitHub](https://github.com/lm-sys/vllm) — التوافق مع API من OpenAI، ومعالجة الدفعات، ووثائق continuous batching.',
            '[التقرير التقني لـ Qwen3-Coder](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen. نسبة 82% في HumanEval، متخصص في مهام البرمجة. ترخيص Apache 2.0.',
            '[وثائق LlamaIndex](https://docs.llamaindex.ai) — إطار عمل لفهرسة المستندات، والتقطيع، واسترجاع RAG.',
            '[وثائق LangGraph](https://langchain-ai.github.io/langgraph/) — إطار عمل سير عمل الوكلاء، وآلات الحالة، وأنماط استخدام الأدوات.',
            '[وثائق Qdrant](https://qdrant.tech/documentation/) — قاعدة بيانات متجهية للتخزين المحلي لـ embeddings، جاهزة لـ Docker، Apache 2.0.',
            '[وثائق Continue.dev](https://docs.continue.dev/) — امتداد IDE لـ VS Code وJetBrains باستخدام خلفيات LLM محلية.',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'أفضل منظومة LLM محلية حسب حالة الاستخدام 2026: البرمجة، الكتابة، RAG، الوكلاء',
        'description': 'أفضل منظومة LLM محلية حسب حالة الاستخدام أبريل 2026: البرمجة ← vLLM + Qwen3-Coder. الكتابة ← Ollama + Llama 3.3. RAG ← LlamaIndex + Qdrant. VRAM 8–24 GB. دليل تهيئة شامل.',
        'url': 'https://www.promptquorum.com/ar/local-llms/best-local-llm-stack-use-case',
        'inLanguage': 'ar',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'vLLM' },
          { '@type': 'Thing', 'name': 'OpenWebUI' },
          { '@type': 'Thing', 'name': 'Qwen3-Coder' },
          { '@type': 'Thing', 'name': 'LlamaIndex' },
          { '@type': 'Thing', 'name': 'LangGraph' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
          { '@type': 'SoftwareApplication', 'name': 'Qdrant' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ar',
        'mainEntity': [
          { '@type': 'Question', 'name': 'هل أستخدم Ollama أم vLLM؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama لواجهة الدردشة + البساطة. vLLM لخادم API + معالجة الدفعات + الأداء. ليسا متعارضين؛ يمكنك تشغيل كليهما.' } },
          { '@type': 'Question', 'name': 'هل يمكنني استخدام Ollama كـ API إنتاجي؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم، لكن vLLM أسرع (إنتاجية أعلى بمقدار 3–5×). Ollama مناسب لـ <10 طلب/ثانية. vLLM لـ 10+ طلب/ثانية.' } },
          { '@type': 'Question', 'name': 'ما هو أفضل نموذج LLM محلي لمراجعة الكود؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct. يحقق Qwen3-Coder نسبة 82% في HumanEval (الأفضل مفتوح المصدر). يعالج vLLM 10 ملفات بالتوازي. ~30–50 tok/ثانية على RTX 3060 12GB.' } },
          { '@type': 'Question', 'name': 'هل أحتاج إلى قاعدة بيانات متجهية لـ RAG بسيط؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'لـ <100 مستند: embeddings في الذاكرة (np.ndarray) كافية. لـ >100: استخدم Qdrant أو Weaviate لتجنّب فرط الذاكرة.' } },
          { '@type': 'Question', 'name': 'هل LangGraph مبالغ فيه لروبوتات الدردشة البسيطة؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. استخدم Ollama أو vLLM مباشرة. LangGraph لسير العمل متعدد الخطوات (حلقات الوكلاء، التخطيط).' } },
          { '@type': 'Question', 'name': 'هل يمكنني دمج خلفيتي Ollama وvLLM؟', 'acceptedAnswer': { '@type': 'Answer', 'text': 'نعم. مثلاً، Ollama لواجهة الدردشة، وvLLM لـ API الدفعات. يمكنهما العمل على الجهاز نفسه على منافذ مختلفة.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'دليل منظومة LLM محلية حسب حالة الاستخدام',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'الكتابة وإنشاء المحتوى', 'description': 'Ollama + OpenWebUI + Llama 3.3 (24 GB) أو Llama 3.2 8B (8 GB). مثالي لكتابة النصوص الطويلة بنوافذ سياق قابلة للضبط 8K–32K. تهيئة بسيطة، دون حاجة إلى كود. أفضل تجربة دردشة بين واجهات LLM المحلية.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'تطوير البرمجيات ومراجعة الكود', 'description': 'vLLM + Qwen3-Coder-7B-Instruct (RTX 3060 12 GB) أو -14B (RTX 4070+). الأسرع للاستدلال بالدفعات (3–5× أكثر من Ollama). نسبة 82% في HumanEval. API متوافق مع OpenAI، وتدفّق token للإكمال التلقائي في الوقت الفعلي. معالجة بالدفعات لمراجعة ملفات متعددة.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'RAG محلي (أسئلة عن المستندات)', 'description': 'LlamaIndex + Ollama/vLLM + قاعدة بيانات متجهية Qdrant + واجهة FastAPI. تقطيع المستندات، وembedding، والاسترجاع مدمجة. Qdrant مستضاف ذاتياً، وخاص، وسريع. جودة نموذج embedding أهم من حجم LLM لجودة RAG.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'وكلاء الذكاء الاصطناعي وسير العمل', 'description': 'LangGraph + vLLM (ليس Ollama) + تعريفات الأدوات. حلقات وكلاء منظّمة مع استخدام صريح للأدوات والذاكرة. vLLM ضروري لكمون دون الثانية في الحلقات الضيقة. منحنى تعلّم أعلى لكنه جاهز للإنتاج.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'خادم API متعدد المستخدمين', 'description': 'vLLM + موزّع أحمال nginx + مراقبة Prometheus. استدلال موزّع عبر عدة بطاقات GPU أو مثيلات. يتوسّع إلى 10+ مستخدمين متزامنين. تحديد معدّل الـ token لكل مستخدم. قابلية ملاحظة بمستوى الإنتاج.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'fine-tuning والبحث', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM للاستدلال. يقلّل LoRA استخدام VRAM بمقدار 10×. درّب منفصلاً على عتاد مخصص، وقدّم الخدمة على جهاز الاستدلال. يُوصى بـ Llama 3.2 وQwen3 (Llama 3.3 موقوف منذ أبريل 2026).' },
          { '@type': 'ListItem', 'position': 7, 'name': 'streaming في الوقت الفعلي', 'description': 'Ollama (نقطة نهاية streaming أصلية) أو vLLM + Server-Sent Events (SSE). تدفّق الـ token يحسّن الأداء المُدرَك وتجربة المستخدم. لدى Ollama أبسط تهيئة، ولدى vLLM أعلى إنتاجية. كلاهما يدعم API الـ streaming المتوافق مع OpenAI.' },
        ],
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Tools & Interfaces',
      title: 'Melhor stack de LLM local por caso de uso 2026: Escrita, Código, RAG, Agentes',
      seoTitle: 'Melhor stack LLM local 2026: Código, RAG, Escrita e Agentes',
      intro: '**O melhor stack de LLM local depende do seu fluxo de trabalho: escrita → Ollama + OpenWebUI + Llama 3.3, desenvolvimento → vLLM + Qwen3-Coder + extensão IDE, pesquisa → LangGraph + vLLM. Em abril de 2026, nenhuma ferramenta faz tudo bem.** Este guia mapeia 7 casos de uso comuns para o stack ideal (backend + UI + integrações) e níveis de hardware (8-24 GB VRAM).',
      metaDescription: 'Stack LLM local por caso de uso 2026: código → vLLM + Qwen3-Coder; escrita → Ollama + Llama 3.3; RAG → LlamaIndex + Qdrant. VRAM 8-24 GB.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**O melhor stack de LLM local depende do seu fluxo de trabalho: escritores precisam de OpenWebUI + Llama 3, desenvolvedores precisam de vLLM + Python SDK, pesquisadores precisam de LangGraph + scripts personalizados. Em abril de 2026, nenhuma ferramenta lidera em tudo.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam fluxos de trabalho com LLMs locais',
      readTime: '10 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM Stack',
      toc: [
        { label: 'Pontos-chave', anchor: '#tldr' },
        { label: 'Tabela de decisão por hardware', anchor: '#hardware' },
        { label: 'Escrita e criação de conteúdo', anchor: '#writing' },
        { label: 'Desenvolvimento de software e revisão de código', anchor: '#coding' },
        { label: 'RAG local (perguntas sobre documentos)', anchor: '#rag' },
        { label: 'Agentes IA e workflows', anchor: '#agents' },
        { label: 'Servidor API multi-usuário', anchor: '#api' },
        { label: 'Fine-tuning e pesquisa', anchor: '#finetuning' },
        { label: 'Chat em tempo real (streaming)', anchor: '#streaming' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**Escrita/criação de conteúdo:** Ollama + OpenWebUI. Sem configuração, UI de chat excelente, janela de contexto ajustável.',
            '**Código/revisão de código:** vLLM + FastAPI + extensão VS Code. Processamento em lote, inferência paralela, streaming.',
            '**RAG local:** LlamaIndex + Ollama/vLLM + Qdrant vector DB. Chunking de documentos, embedding e recuperação integrados.',
            '**Agentes IA:** LangGraph + backend vLLM. Uso de ferramentas, memória, loop de planejamento. Curva de aprendizado mais íngreme.',
            '**API multi-usuário:** vLLM atrás de um load balancer (nginx). Gerencia 10+ requisições concorrentes. A opção mais escalável.',
            '**Fine-tuning:** HuggingFace Transformers + LoRA + Ollama para inferência. Treinamento separado do serving.',
            '**Streaming em tempo real:** Ollama (streaming nativo) ou vLLM + endpoint de streaming de tokens. Melhor UX para chatbots.',
          ],
        },
        hardware: {
          id: 'hardware',
          title: 'Decisão rápida: stack por nível de hardware (abril 2026)',
          content: 'Escolha o stack de acordo com sua GPU/VRAM. Cada combinação foi testada com benchmarks reais.',
          columns: ['Seu hardware', 'Escrita', 'Código', 'RAG', 'Agentes'],
          rows: [
            { 'Seu hardware': '4-8 GB VRAM (GTX 1660, RTX 3050)', 'Escrita': 'Ollama + Phi-4 Mini', 'Código': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'Agentes': 'Não recomendado' },
            { 'Seu hardware': '12 GB VRAM (RTX 3060, RTX 4070)', 'Escrita': 'Ollama + Llama 3.2 8B', 'Código': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'Agentes': 'LangGraph + Ollama (mais lento)' },
            { 'Seu hardware': '16 GB VRAM (RTX 4070 Ti, RTX 4080)', 'Escrita': 'Ollama + Mistral Small 3.1', 'Código': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'Agentes': 'LangGraph + vLLM' },
            { 'Seu hardware': '24 GB VRAM (RTX 3090, RTX 4090)', 'Escrita': 'Ollama + Llama 3.3 70B Q4', 'Código': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'Agentes': 'LangGraph + vLLM (o mais rápido)' },
          ],
        },
        writing: {
          id: 'writing',
          content: [
            '**Melhor stack: Ollama + OpenWebUI + editor Markdown**',
            'Por que este stack: OpenWebUI tem a melhor UX de chat. Não requer código. A flexibilidade da janela de contexto (4K-32K) supera o LM Studio para escrita de texto longo. Mais econômico que APIs de nuvem para escritores.',
          ],
          numberedItems: [
            'Para 24 GB VRAM: `ollama pull llama3.3:70b` -- qualidade máxima, comparável ao GPT-4 (2023) em benchmarks de escrita.',
            'Para 16 GB VRAM: `ollama pull mistral-small3.1` -- contexto de 128K, melhor qualidade abaixo de 24 GB.',
            'Para 8 GB VRAM: `ollama pull llama3.2:8b` -- boa qualidade de escrita, rápido em hardware de consumo.',
            'Instale OpenWebUI via Docker: `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
          ],
        },
        coding: {
          id: 'coding',
          content: [
            '**Melhor stack: vLLM + Qwen3-Coder + extensão IDE**',
            'Por que este stack: Qwen3-Coder obtém 82% no HumanEval (melhor modelo de código open-source, abril 2026). vLLM é 3-5× mais rápido que Ollama para inferência em lote. Compatibilidade nativa com a API OpenAI encaixa com ferramentas IDE existentes.',
          ],
          numberedItems: [
            'Instale vLLM: `pip install vllm`.',
            'Inicie o servidor vLLM com Qwen3-Coder-7B: `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
            'Para 16+ GB VRAM, use o modelo 14B: `--model Qwen/Qwen3-Coder-14B-Instruct`.',
          ],
        },
        rag: {
          id: 'rag',
          content: [
            '**Melhor stack: LlamaIndex + Ollama/vLLM + Qdrant**',
            'Por que este stack: LlamaIndex tem as melhores abstrações de RAG para Python. Qdrant é rápido, eficiente em memória e fácil de configurar localmente. Sem dependências de nuvem.',
          ],
          numberedItems: [
            'Instale dependências: `pip install llama-index qdrant-client`.',
            'Inicie Qdrant via Docker: `docker run -p 6333:6333 qdrant/qdrant`.',
            'Use Ollama como backend de embedding e geração.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Qual stack de LLM local é melhor para desenvolvimento em Python?', a: 'vLLM + Qwen3-Coder-14B + Continue.dev é o melhor stack para desenvolvimento Python em 2026. Qwen3-Coder obtém 82% no HumanEval, vLLM fornece inferência rápida com API compatível com OpenAI.' },
            { q: 'Como implementar RAG em português com LLMs locais?', a: 'Use LlamaIndex + Ollama + Qdrant. Para documentos em português, use um modelo de embedding multilíngue (ex: multilingual-e5-large) e Llama 3.3 ou Qwen3 como modelo de geração. Ambos têm bom suporte para português.' },
            { q: 'O stack local precisa de conexão à internet?', a: 'Não. Todos os componentes desta lista (Ollama, vLLM, LlamaIndex, Qdrant, Open WebUI) funcionam totalmente offline. Ideal para ambientes com requisitos de conformidade com LGPD.' },
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Melhor stack de LLM local por caso de uso 2026',
        'description': 'Stack LLM local por caso de uso 2026: código → vLLM + Qwen3-Coder; escrita → Ollama + Llama 3.3; RAG → LlamaIndex + Qdrant.',
        'url': 'https://www.promptquorum.com/pt/local-llms/best-local-llm-stack-use-case',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-05',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
    },
    de: {
      theme: 'Tools & Schnittstellen',
      title: 'Bester lokaler LLM-Stack nach Anwendungsfall 2026: Schreiben, Coding, RAG, Agenten',
      seoTitle: 'Lokaler LLM-Stack 2026: Coding, Schreiben, RAG, Agenten',
      intro: '**Der beste lokale LLM-Stack hängt von Ihrem Workflow ab: Autoren benötigen Ollama + OpenWebUI + Llama 3.3, Entwickler benötigen vLLM + Qwen3-Coder + IDE-Erweiterung, Forscher benötigen LangGraph + vLLM. Stand April 2026 überzeugt kein einzelnes Tool in allen Bereichen.** Dieser Leitfaden ordnet 7 gängige Anwendungsfälle ihrem optimalen Stack (Backend + UI + Integrationen) und Hardware-Stufen (8–24 GB VRAM) zu.',
      metaDescription: 'Lokaler LLM-Stack nach Anwendungsfall April 2026: Coding → vLLM + Qwen3-Coder. Schreiben → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. 8–24 GB VRAM.',
      twitterDescription: 'Lokaler LLM-Stack nach Anwendungsfall: Coding → vLLM + Qwen3-Coder. Schreiben → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. Agenten → LangGraph + vLLM. April 2026.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Der beste lokale LLM-Stack hängt von Ihrem Workflow ab: Autoren benötigen OpenWebUI + Llama 3, Entwickler benötigen vLLM + Python SDK, Forscher benötigen LangGraph + benutzerdefinierte Skripte. Stand April 2026: Kein einzelnes Tool ist in allem führend.**',
      audience: 'Entwickler mit Kenntnissen in Ollama oder LM Studio, die lokale LLM-Workflows optimieren möchten',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM Stack',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'Hardware-Entscheidungstabelle', anchor: '#hardware' },
        { label: 'Schreiben & Content-Erstellung', anchor: '#writing' },
        { label: 'Softwareentwicklung & Code-Review', anchor: '#coding' },
        { label: 'Lokales RAG (Dokument-Q&A)', anchor: '#rag' },
        { label: 'KI-Agenten & Workflows', anchor: '#agents' },
        { label: 'Multi-Benutzer-API-Server', anchor: '#api' },
        { label: 'Fine-Tuning & Forschung', anchor: '#finetuning' },
        { label: 'Echtzeit-Chat (Streaming)', anchor: '#streaming' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**Schreiben/Content-Erstellung:** Ollama + OpenWebUI. Keine Konfiguration, übersichtliche Chat-Oberfläche, Kontextfenster einstellbar.',
            '**Coding/Code-Review:** vLLM + FastAPI + VS-Code-Erweiterung. Batch-Verarbeitung, parallele Inferenz, Streaming.',
            '**Lokales RAG:** LlamaIndex + Ollama/vLLM + Qdrant Vector DB. Dokument-Chunking, Embedding und Retrieval integriert.',
            '**KI-Agenten:** LangGraph + vLLM-Backend. Tool-Nutzung, Speicher, Planungsloop. Steilere Lernkurve.',
            '**Multi-Benutzer-API:** vLLM hinter Load Balancer (nginx). Verarbeitet 10+ gleichzeitige Anfragen. Am skalierbarsten.',
            '**Fine-Tuning:** HuggingFace Transformers + LoRA + Ollama für Inferenz. Training und Serving getrennt.',
            '**Echtzeit-Streaming:** Ollama (natives Streaming) oder vLLM + Token-Streaming-Endpunkt. Beste UX für Chatbots.',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: 'Schnellentscheidung: Stack nach Hardware-Stufe (April 2026)',
          content: 'Passen Sie Ihre GPU/VRAM der optimalen Stack-Konfiguration an. Jede Kombination wurde anhand realer Benchmarks getestet. Coding- und Agenten-Workflows profitieren mehr von größeren Modellen als das Schreiben; RAG profitiert mehr von Embedding-Qualität als von LLM-Größe.',
          columns: ['Ihre Hardware', 'Schreiben', 'Coding', 'RAG', 'Agenten'],
          rows: [
            { 'Ihre Hardware': '4–8 GB VRAM (GTX 1660, RTX 3050)', 'Schreiben': 'Ollama + Phi-4 Mini', 'Coding': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'Agenten': 'Nicht empfohlen' },
            { 'Ihre Hardware': '12 GB VRAM (RTX 3060, RTX 4070)', 'Schreiben': 'Ollama + Llama 3.2 8B', 'Coding': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'Agenten': 'LangGraph + Ollama (langsamer)' },
            { 'Ihre Hardware': '16 GB VRAM (RTX 4070 Ti, RTX 4080)', 'Schreiben': 'Ollama + Mistral Small 3.1', 'Coding': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'Agenten': 'LangGraph + vLLM' },
            { 'Ihre Hardware': '24 GB VRAM (RTX 3090, RTX 4090)', 'Schreiben': 'Ollama + Llama 3.3 70B Q4', 'Coding': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'Agenten': 'LangGraph + vLLM (schnellstes)' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**Bester Stack: [Ollama](/de/local-llms/how-to-install-ollama) + [OpenWebUI](/de/local-llms/open-webui-vs-sillytavern) + Markdown-Editor**',
            'Warum dieser Stack: OpenWebUI bietet die beste Chat-UX. Kein Coding erforderlich. Flexible Kontextfenster (4K–32K) übertreffen LM Studio für langes Schreiben. Günstiger als Cloud-APIs für Autoren.',
          ],
          numberedItems: [
            'Für 24 GB VRAM: `ollama pull llama3.3:70b` — höchste Qualität, entspricht GPT-4 (2023) in Writing-Benchmarks.',
            'Für 16 GB VRAM: `ollama pull mistral-small3.1` — 128K Kontext, beste Qualität unter 24 GB.',
            'Für 8 GB VRAM: `ollama pull llama3.2:8b` — gute Schreibqualität, schnell auf Consumer-Hardware.',
            'OpenWebUI per Docker installieren: `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
            'Kontextfenster (8K–32K Tokens) in den OpenWebUI-Einstellungen entsprechend der Dokumentlänge konfigurieren.',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**Bester Stack: [vLLM](/de/local-llms/vllm-performance-guide) + Qwen3-Coder + IDE-Erweiterung**',
            'Warum dieser Stack: Qwen3-Coder erzielt 82% auf HumanEval (bestes Open-Source-Coding-Modell, April 2026). vLLM ist 3–5-fach schneller als Ollama für Batch-Inferenz. Native OpenAI-API-Kompatibilität passt zu bestehenden IDE-Tools. Streaming für Echtzeit-Vorschläge aktiviert.',
            '',
            '**KI-gestützter Code-Review für mehrere Dateien**',
            'Für automatisierten Code-Review über mehrere Dateien nutzen Sie die Batch-Verarbeitung von vLLM:',
          ],
          numberedItems: [
            'vLLM installieren: `pip install vllm`.',
            'vLLM-Server mit Qwen3-Coder-7B starten: `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
            'Für 16+ GB VRAM, 14B verwenden: `--model Qwen/Qwen3-Coder-14B-Instruct`.',
            'IDE-Erweiterung (VS Code Continue.dev, Cursor etc.) mit `http://localhost:8000/v1` verbinden.',
            'Batch-Verarbeitung für Code-Review aktivieren: 10 Dateien parallel über einen API-Aufruf verarbeiten (`vllm` unterstützt standardmäßig batch=10).',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**Bester Stack: LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
            'Warum dieser Stack: [LlamaIndex](/de/local-llms/local-rag-2026) übernimmt Chunking + Retrieval. Qdrant ist schnell, lokal und privat. Ollama liefert Embeddings (kostenlos) oder vLLM für LLM-Inferenz nutzen.',
          ],
          numberedItems: [
            'LlamaIndex installieren (`pip install llama-index`).',
            'Dokumente (PDF, TXT, Markdown) in LlamaIndex laden.',
            'Dokumente in Chunks aufteilen (Standard: 1024 Tokens), mit lokalem Modell oder OpenAI (Backup) einbetten.',
            'Embeddings in Qdrant Vector DB speichern (läuft lokal via Docker).',
            'Per LlamaIndex abfragen: Top-K ähnliche Dokumente abrufen, LLM mit Kontext prompten.',
            'In FastAPI-Endpunkt für Web-UI oder IDE-Integration einbetten.',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**Bester Stack: LangGraph + vLLM + Tool-Definitionen**',
            'Warum dieser Stack: [LangGraph](/de/local-llms/local-llm-agents-with-langgraph) bietet strukturierten Agenten-Flow. vLLM ist schnell genug für 10+ sequentielle LLM-Aufrufe. Tool-Nutzung ist explizit und debuggbar.',
          ],
          numberedItems: [
            'LangGraph installieren (`pip install langchain langgraph`).',
            'Tools (Web-Suche, Rechner, Datei-I/O) als Funktionssignaturen definieren.',
            'Agenten-Graph erstellen: LLM als Entscheidungsknoten, Tools als Aktionsknoten.',
            'vLLM-Backend für latenzarme LLM-Aufrufe in engen Schleifen verwenden.',
            'Agenten-Loop ausführen: LLM → Tool-Auswahl → Tool-Ausführung → wiederholen bis abgeschlossen.',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**Bester Stack: vLLM + nginx Load Balancer + Monitoring**',
            'Warum dieser Stack: vLLM unterstützt verteiltes Serving. Nginx multiplext Anfragen. Skaliert auf 10+ gleichzeitige Benutzer auf einem Dual-GPU-System. Token-Durchsatz pro Benutzer überwachen.',
            'Für den Einsatz in deutschen Unternehmen empfiehlt der BSI-IT-Grundschutz die Verarbeitung sensibler Daten auf lokal kontrollierten Systemen. Ein selbst betriebener vLLM-Server mit nginx erfüllt die Anforderungen von DSGVO Art. 28 (Auftragsverarbeitung) und ermöglicht Datensouveränität im DACH-Raum.',
          ],
          numberedItems: [
            'vLLM mit `--served-model-name model-name` auf festem Port deployen.',
            'Nginx konfigurieren, um 2+ vLLM-Instanzen lastverteilt anzusprechen (eine pro GPU bei Multi-GPU).',
            'OpenAI-kompatiblen `/v1/chat/completions`-Endpunkt für Client-Kompatibilität verwenden.',
            'Über Prometheus-Scrape-Endpunkt überwachen (vLLM exportiert Anfragelatenz und Durchsatz-Metriken).',
            'Rate-Limiting pro Benutzer mit Token-Bucket-Algorithmus einrichten.',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**Bester Stack: HuggingFace Transformers + LoRA + Ollama (Inferenz)**',
            'Warum dieser Stack: LoRA reduziert den VRAM-Bedarf beim Fine-Tuning um den Faktor 10. Ollama lädt fine-getunete Modelle problemlos. Modular: auf einer Maschine trainieren, auf einer anderen serving betreiben.',
            '',
            '**Hinweis (April 2026):** Meta hat Llama 3.3 für kommerzielles Fine-Tuning eingestellt. Fine-Tuning auf Llama 3.2 (`meta-llama/Llama-3.2-1B` oder größer) oder Qwen3 (`Qwen/Qwen3-7B`) für Apache 2.0 / Open-Source-Lizenzbedingungen durchführen. Beide unterstützen LoRA und werden in Ollama problemlos geladen.',
          ],
          numberedItems: [
            'Mit der `peft`-Bibliothek (LoRA) fine-tunen, um den VRAM-Bedarf zu reduzieren.',
            'Training: 4-facher Modell-VRAM erforderlich (Optimizer-Zustand, Gradienten). Separat von Inferenz ausführen.',
            'LoRA-Adapter auf HuggingFace Hub oder im lokalen Dateisystem exportieren.',
            'Fine-getunetes Modell in Ollama laden: `ollama create mymodel -f Modelfile`.',
            'Oder HuggingFace TRL (Transformers Reinforcement Learning) für RLHF verwenden.',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**Bester Stack: Ollama (natives Streaming) oder vLLM + Server-Sent Events (SSE)**',
            'Warum dieser Stack: Streaming verbessert die wahrgenommene Performance (Benutzer sieht Token erscheinen). Ollama ist am einfachsten einzurichten. vLLM hat den höchsten Token-Durchsatz.',
          ],
          numberedItems: [
            'Ollama: `/api/generate` mit `stream: true` aufrufen. Tokens kommen als newline-delimited JSON an.',
            'vLLM: `/v1/chat/completions` mit `stream: true` verwenden. Gibt OpenAI-kompatiblen SSE-Stream zurück.',
            'Frontend: EventSource API (JavaScript) verwenden, um Stream zu konsumieren und UI pro Token zu aktualisieren.',
            'Batch-Verarbeitung deaktivieren (batch=1) für niedrigste Latenz.',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: 'Soll ich Ollama oder vLLM verwenden?', a: 'Ollama für Chat-UI + Einfachheit. vLLM für API-Server + Batch-Verarbeitung + Performance. Nicht gegenseitig ausschließend; beide können gleichzeitig betrieben werden.' },
            { q: 'Kann ich Ollama als Produktions-API verwenden?', a: 'Ja, aber vLLM ist schneller (3–5-fach höherer Durchsatz). Ollama eignet sich für <10 Anfragen/Sek. vLLM für 10+ Anfragen/Sek.' },
            { q: 'Was ist der beste lokale LLM für Code-Review?', a: 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder erzielt 82% auf HumanEval (bestes Open-Source-Coding-Modell). vLLM verarbeitet 10 Dateien parallel. Ca. 30–50 Tok/Sek auf RTX 3060 12 GB.' },
            { q: 'Brauche ich eine Vektordatenbank für einfaches RAG?', a: 'Für <100 Dokumente: In-Memory-Embeddings (np.ndarray) ausreichend. Für >100: Qdrant oder Weaviate verwenden, um Speicher-Bloat zu vermeiden.' },
            { q: 'Ist LangGraph zu aufwändig für einfache Chatbots?', a: 'Ja. Ollama oder vLLM allein verwenden. LangGraph ist für mehrstufige Workflows (Agenten-Loops, Planung).' },
            { q: 'Kann ich Ollama- und vLLM-Backends mischen?', a: 'Ja. Z. B. Ollama für Chat-UI, vLLM für Batch-API. Beide können auf derselben Maschine auf verschiedenen Ports betrieben werden.' },
            { q: 'Muss ich bei der Verwendung eines lokalen LLM-Stacks die DSGVO beachten?', a: 'Ja, wenn personenbezogene Daten verarbeitet werden. Lokale Inferenz mit Ollama oder vLLM hält alle Daten auf Ihrem eigenen Server – kein Datentransfer an externe Anbieter. Dies erfüllt die Anforderungen von DSGVO Art. 28 (Auftragsverarbeitung) und den BSI-IT-Grundschutz-Katalogen. Für den deutschen Mittelstand und DACH-Unternehmenseinsatz ist lokales LLM-Serving die datenschutzrechtlich sicherste Option.' },
            { q: 'Ist ein lokaler LLM-Stack für den deutschen Mittelstand geeignet?', a: 'Ja. Der Einsatz von vLLM oder Ollama auf eigener Hardware entspricht den BSI-Grundschutz-Empfehlungen für IT-Sicherheit im Mittelstand. Für interne Prozesse (Dokumentenanalyse, Code-Review, RAG über Firmenwissen) bietet lokales LLM-Serving volle Datensouveränität ohne monatliche API-Kosten. Empfohlener Einstieg: Ollama auf einem dedizierten Server mit 24 GB VRAM (RTX 3090) – stabil, DSGVO-konform und skalierbar.' },
          ],
        },
        'relatedReading': {
          title: 'Weiterführende Artikel',
          items: [
            '[Beste KI-Coding-Assistenten für lokale LLM](/de/local-llms/best-ai-coding-assistant-local-llm) — IDE-Wahl für Ihren Coding-Stack (Cursor, Continue.dev, Cody).',
            '[Beste lokale LLMs für Coding 2026](/de/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs. DeepSeek-Coder HumanEval-Rankings.',
            '[Lokales RAG einrichten 2026](/de/local-llms/local-rag-2026) — Vollständige Implementierungsanleitung: LlamaIndex + Qdrant + Ollama.',
            '[Lokale LLM-Agenten mit LangGraph](/de/local-llms/local-llm-agents-with-langgraph) — Agenten-Workflow-Framework mit Schritt-für-Schritt-Beispielen.',
            '[Ollama vs. LM Studio](/de/local-llms/ollama-vs-lm-studio) — Backend-Vergleich: CLI vs. GUI, Geschwindigkeit, Batch-Verarbeitung.',
            '[Open WebUI vs. SillyTavern](/de/local-llms/open-webui-vs-sillytavern) — Chat-UI-Vergleich: professionell vs. Rollenspiel.',
            '[Wie viel VRAM brauchen lokale LLMs?](/de/local-llms/how-much-vram-local-llm) — Hardware-Anforderungen nach Modellgröße und Anwendungsfall.',
          ],
        },
        'commonMistakes': {
          title: 'Häufige Fehler bei der Stack-Wahl',
          items: [
            '**Ollama für Produktions-API ohne vLLM verwenden:** Ollama erreicht maximal <10 Anfragen/Sek. Für Produktionsumgebungen mit 10+ gleichzeitigen Benutzern ist vLLM obligatorisch. Throughput unter Last testen, bevor deployt wird.',
            '**LangGraph ohne vLLM-Backend ausführen:** LangGraph-Agenten führen 10+ sequentielle LLM-Aufrufe durch. Ollama verursacht Latenz-Engpässe. LangGraph immer mit vLLM für Sub-Sekunden-Round-Trip-Zeiten kombinieren.',
            '**Ollama + vLLM ohne Speicherverwaltung auf derselben GPU ausführen:** Beide Tools laden Gewichte in den VRAM. Zwei Instanzen eines 70B-Modells belegen 32 GB. Separate GPUs verwenden oder stark quantisieren (Q2), damit beide passen.',
            '**Falsches Kontextfenster für das Schreiben wählen:** Standard-4K-Kontext begrenzt Brainstorming-Sessions. Für langes Schreiben 16K–32K Kontext in OpenWebUI einstellen. Trade-off: langsamere Inferenz (2–3-fach langsamer pro Token).',
            '**Davon ausgehen, dass alle Backends gleich schnell sind:** vLLM und Ollama verwenden unterschiedliche Kernel. Auf gleicher Hardware ist vLLM 2–3-fach schneller für Inferenz. Der Geschwindigkeitsunterschied liegt am Backend, nicht am Frontend (OpenWebUI, LM Studio sind nur UIs).',
          ],
        },
        'sources': {
          title: 'Quellen',
          items: [
            '[Ollama GitHub](https://github.com/ollama/ollama) — Offizielle Dokumentation, Streaming-API-Spezifikation und Modellbibliothek.',
            '[vLLM GitHub](https://github.com/lm-sys/vllm) — OpenAI-API-Kompatibilität, Batch-Verarbeitung und Continuous-Batching-Dokumentation.',
            '[Qwen3-Coder Technical Report](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen. 82% HumanEval-Score, spezialisiert für Coding-Aufgaben. Apache 2.0 lizenziert.',
            '[LlamaIndex-Dokumentation](https://docs.llamaindex.ai) — Dokument-Indexierung, Chunking und RAG-Retrieval-Framework.',
            '[LangGraph-Dokumentation](https://langchain-ai.github.io/langgraph/) — Agenten-Workflow-Framework, Zustandsmaschinen, Tool-Use-Muster.',
            '[Qdrant-Dokumentation](https://qdrant.tech/documentation/) — Vektordatenbank für lokale Embedding-Speicherung, Docker-ready, Apache 2.0.',
            '[Continue.dev-Dokumentation](https://docs.continue.dev/) — IDE-Erweiterung für VS Code und JetBrains mit lokalen LLM-Backends.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Bester lokaler LLM-Stack nach Anwendungsfall 2026: Coding, Schreiben, RAG, Agenten',
        'description': 'Lokaler LLM-Stack nach Anwendungsfall April 2026: Coding → vLLM + Qwen3-Coder. Schreiben → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. 8–24 GB VRAM.',
        'url': 'https://www.promptquorum.com/de/local-llms/best-local-llm-stack-use-case',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Soll ich Ollama oder vLLM verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama für Chat-UI + Einfachheit. vLLM für API-Server + Batch-Verarbeitung + Performance. Nicht gegenseitig ausschließend; beide können gleichzeitig betrieben werden.' } },
          { '@type': 'Question', 'name': 'Kann ich Ollama als Produktions-API verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, aber vLLM ist schneller (3–5-fach höherer Durchsatz). Ollama eignet sich für <10 Anfragen/Sek. vLLM für 10+ Anfragen/Sek.' } },
          { '@type': 'Question', 'name': 'Was ist der beste lokale LLM für Code-Review?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder erzielt 82% auf HumanEval (bestes Open-Source-Coding-Modell). vLLM verarbeitet 10 Dateien parallel. Ca. 30–50 Tok/Sek auf RTX 3060 12 GB.' } },
          { '@type': 'Question', 'name': 'Brauche ich eine Vektordatenbank für einfaches RAG?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Für <100 Dokumente: In-Memory-Embeddings (np.ndarray) ausreichend. Für >100: Qdrant oder Weaviate verwenden, um Speicher-Bloat zu vermeiden.' } },
          { '@type': 'Question', 'name': 'Ist LangGraph zu aufwändig für einfache Chatbots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Ollama oder vLLM allein verwenden. LangGraph ist für mehrstufige Workflows (Agenten-Loops, Planung).' } },
          { '@type': 'Question', 'name': 'Kann ich Ollama- und vLLM-Backends mischen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Z. B. Ollama für Chat-UI, vLLM für Batch-API. Beide können auf derselben Maschine auf verschiedenen Ports betrieben werden.' } },
          { '@type': 'Question', 'name': 'Muss ich bei der Verwendung eines lokalen LLM-Stacks die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, wenn personenbezogene Daten verarbeitet werden. Lokale Inferenz mit Ollama oder vLLM hält alle Daten auf Ihrem eigenen Server. Dies erfüllt DSGVO Art. 28 und BSI-IT-Grundschutz-Anforderungen.' } },
          { '@type': 'Question', 'name': 'Ist ein lokaler LLM-Stack für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. vLLM oder Ollama auf eigener Hardware entspricht BSI-Grundschutz-Empfehlungen. Bietet volle Datensouveränität ohne monatliche API-Kosten. Einstieg: Ollama mit 24 GB VRAM (RTX 3090).' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Lokaler LLM-Stack-Leitfaden nach Anwendungsfall',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Schreiben & Content-Erstellung', 'description': 'Ollama + OpenWebUI + Llama 3.3 (24 GB) oder Llama 3.2 8B (8 GB). Bestens für langes Schreiben mit einstellbaren 8K–32K-Kontextfenstern. Einfache Einrichtung, kein Coding erforderlich. Beste Chat-UX unter lokalen LLM-Frontends.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Softwareentwicklung & Code-Review', 'description': 'vLLM + Qwen3-Coder-7B-Instruct (RTX 3060 12 GB) oder -14B (RTX 4070+). 3–5-fach schneller als Ollama für Batch-Inferenz. 82% HumanEval-Score. OpenAI-kompatible API, Token-Streaming für Echtzeit-Codevervollständigungen.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Lokales RAG (Dokument-Q&A)', 'description': 'LlamaIndex + Ollama/vLLM + Qdrant Vektordatenbank + FastAPI UI. Integriertes Dokument-Chunking, Embedding und Retrieval. Qdrant selbst gehostet, privat und schnell. Embedding-Modell entscheidender als LLM-Größe für RAG-Qualität.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'KI-Agenten & Workflows', 'description': 'LangGraph + vLLM (nicht Ollama) + Tool-Definitionen. Strukturierte Agenten-Loops mit expliziter Tool-Nutzung und Speicher. vLLM erforderlich für Sub-Sekunden-Latenz. Steilere Lernkurve, aber produktionsreif.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Multi-Benutzer-API-Server', 'description': 'vLLM + nginx Load Balancer + Prometheus Monitoring. Verteilte Inferenz über mehrere GPUs. Skaliert auf 10+ gleichzeitige Benutzer. Token Rate-Limiting pro Benutzer. DSGVO-konform bei lokaler Datenhaltung.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Fine-Tuning & Forschung', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM für Inferenz. LoRA reduziert VRAM-Bedarf um das 10-Fache. Separat trainieren, auf Inferenz-Box deployen. Llama 3.2 und Qwen3 empfohlen (Llama 3.3 ab April 2026 eingestellt).' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Echtzeit-Streaming', 'description': 'Ollama (nativer Streaming-Endpunkt) oder vLLM + Server-Sent Events (SSE). Streaming verbessert wahrgenommene Performance. Ollama einfachstes Setup, vLLM höchster Durchsatz. Beide OpenAI-kompatibel.' },
        ],
      },
    },
    fr: {
      theme: 'Outils & Interfaces',
      title: 'Meilleur stack LLM local par cas d\'usage 2026 : Rédaction, Coding, RAG, Agents',
      seoTitle: 'Stack LLM local 2026 : Coding, Rédaction, RAG, Agents',
      intro: '**Le meilleur stack LLM local dépend de votre flux de travail : rédaction → Ollama + OpenWebUI + Llama 3.3, développement → vLLM + Qwen3-Coder + extension IDE, recherche → LangGraph + vLLM. En avril 2026, aucun outil ne couvre tous les cas d\'usage.** Ce guide associe 7 cas d\'usage courants à leur stack optimal (backend + interface + intégrations) et aux niveaux matériels requis (8–24 Go VRAM).',
      metaDescription: 'Stack LLM local par cas d\'usage avril 2026 : Coding → vLLM + Qwen3-Coder. Rédaction → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. 8–24 Go VRAM. Guide complet.',
      twitterDescription: 'Stack LLM local par cas d\'usage : Coding → vLLM + Qwen3-Coder. Rédaction → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. Agents → LangGraph + vLLM. Avril 2026.',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**Le meilleur stack LLM local dépend de votre flux de travail : rédacteurs → OpenWebUI + Llama 3, développeurs → vLLM + SDK Python, chercheurs → LangGraph + scripts personnalisés. En avril 2026, aucun outil ne couvre tout.**',
      audience: 'Développeurs familiers avec Ollama ou LM Studio souhaitant optimiser leurs workflows LLM locaux',
      readTime: '10 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Stack LLM',
      toc: [
        { label: 'Points clés', anchor: '#tldr' },
        { label: 'Tableau de décision matérielle', anchor: '#hardware' },
        { label: 'Rédaction & création de contenu', anchor: '#writing' },
        { label: 'Développement logiciel & revue de code', anchor: '#coding' },
        { label: 'RAG local (Q&R sur documents)', anchor: '#rag' },
        { label: 'Agents IA & workflows', anchor: '#agents' },
        { label: 'Serveur API multi-utilisateur', anchor: '#api' },
        { label: 'Fine-tuning & recherche', anchor: '#finetuning' },
        { label: 'Chat en temps réel (streaming)', anchor: '#streaming' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**Rédaction/création de contenu :** Ollama + OpenWebUI. Aucune configuration, interface chat intuitive, fenêtre de contexte ajustable.',
            '**Coding/revue de code :** vLLM + FastAPI + extension VS Code. Traitement par lots, inférence parallèle, streaming.',
            '**RAG local :** LlamaIndex + Ollama/vLLM + base vectorielle Qdrant. Découpage, embedding et récupération intégrés.',
            '**Agents IA :** LangGraph + backend vLLM. Utilisation d\'outils, mémoire, boucle de planification. Courbe d\'apprentissage plus élevée.',
            '**API multi-utilisateur :** vLLM derrière un répartiteur de charge nginx. Gère 10+ requêtes simultanées. Plus scalable.',
            '**Fine-tuning :** HuggingFace Transformers + LoRA + Ollama pour l\'inférence. Entraînement séparé du serving.',
            '**Streaming temps réel :** Ollama (streaming natif) ou vLLM + endpoint de streaming de tokens. Meilleure UX pour les chatbots.',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: 'Décision rapide : stack par niveau matériel (avril 2026)',
          content: 'Associez votre GPU/VRAM au stack optimal. Chaque combinaison est testée sur des benchmarks réels. Les workflows de coding et d\'agents bénéficient davantage de modèles plus grands que la rédaction ; le RAG dépend plus de la qualité des embeddings que de la taille du LLM.',
          columns: ['Votre matériel', 'Rédaction', 'Coding', 'RAG', 'Agents'],
          rows: [
            { 'Votre matériel': '4–8 Go VRAM (GTX 1660, RTX 3050)', 'Rédaction': 'Ollama + Phi-4 Mini', 'Coding': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'Agents': 'Non recommandé' },
            { 'Votre matériel': '12 Go VRAM (RTX 3060, RTX 4070)', 'Rédaction': 'Ollama + Llama 3.2 8B', 'Coding': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'Agents': 'LangGraph + Ollama (plus lent)' },
            { 'Votre matériel': '16 Go VRAM (RTX 4070 Ti, RTX 4080)', 'Rédaction': 'Ollama + Mistral Small 3.1', 'Coding': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'Agents': 'LangGraph + vLLM' },
            { 'Votre matériel': '24 Go VRAM (RTX 3090, RTX 4090)', 'Rédaction': 'Ollama + Llama 3.3 70B Q4', 'Coding': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'Agents': 'LangGraph + vLLM (le plus rapide)' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**Stack recommandé : [Ollama](/fr/local-llms/how-to-install-ollama) + [OpenWebUI](/fr/local-llms/open-webui-vs-sillytavern) + éditeur Markdown**',
            'Pourquoi ce stack : OpenWebUI offre la meilleure UX de chat. Aucun code requis. La flexibilité de la fenêtre de contexte (4K–32K) surpasse LM Studio pour la rédaction longue. Moins coûteux que les API cloud pour les rédacteurs.',
          ],
          numberedItems: [
            'Pour 24 Go VRAM : `ollama pull llama3.3:70b` — qualité maximale, équivalent GPT-4 (2023) sur les benchmarks de rédaction.',
            'Pour 16 Go VRAM : `ollama pull mistral-small3.1` — contexte 128K, meilleure qualité sous 24 Go.',
            'Pour 8 Go VRAM : `ollama pull llama3.2:8b` — bonne qualité de rédaction, rapide sur matériel grand public.',
            'Installez OpenWebUI via Docker : `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
            'Configurez la fenêtre de contexte (8K–32K tokens) dans les paramètres OpenWebUI selon la longueur du document.',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**Stack recommandé : [vLLM](/fr/local-llms/vllm-performance-guide) + Qwen3-Coder + extension IDE**',
            'Pourquoi ce stack : Qwen3-Coder obtient 82 % sur HumanEval (meilleur modèle de coding open-source, avril 2026). vLLM est 3–5× plus rapide qu\'Ollama pour l\'inférence par lots. Compatibilité OpenAI API native avec les outils IDE existants. Streaming activé pour les suggestions en temps réel.',
            '',
            '**Revue de code IA sur plusieurs fichiers**',
            'Pour la revue automatisée sur plusieurs fichiers, utilisez le traitement par lots de vLLM :',
          ],
          numberedItems: [
            'Installez vLLM : `pip install vllm`.',
            'Démarrez le serveur vLLM avec Qwen3-Coder-7B : `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
            'Pour 16+ Go VRAM, utilisez 14B : `--model Qwen/Qwen3-Coder-14B-Instruct`.',
            'Connectez l\'extension IDE (VS Code Continue.dev, Cursor, etc.) à `http://localhost:8000/v1`.',
            'Activez le traitement par lots pour la revue de code : traitez 10 fichiers en parallèle via un appel API unique (`vllm` supporte batch=10 par défaut).',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**Stack recommandé : LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
            'Pourquoi ce stack : [LlamaIndex](/fr/local-llms/local-rag-2026) gère le découpage et la récupération. Qdrant est rapide, local et privé. Ollama fournit les embeddings (gratuit) ou utilisez vLLM pour l\'inférence LLM.',
          ],
          numberedItems: [
            'Installez LlamaIndex (`pip install llama-index`).',
            'Chargez les documents (PDF, TXT, markdown) dans LlamaIndex.',
            'Découpez les documents (1024 tokens par défaut), créez des embeddings avec un modèle local ou OpenAI (secours).',
            'Stockez les embeddings dans la base vectorielle Qdrant (fonctionne localement via Docker).',
            'Interrogez via LlamaIndex : récupérez les K documents les plus similaires, soumettez le contexte au LLM.',
            'Encapsulez dans un endpoint FastAPI pour une interface web ou une intégration IDE.',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**Stack recommandé : LangGraph + vLLM + définitions d\'outils**',
            'Pourquoi ce stack : [LangGraph](/fr/local-llms/local-llm-agents-with-langgraph) fournit un flux d\'agent structuré. vLLM est suffisamment rapide pour 10+ appels LLM séquentiels. L\'utilisation des outils est explicite et déboguable.',
          ],
          numberedItems: [
            'Installez LangGraph (`pip install langchain langgraph`).',
            'Définissez les outils (recherche web, calculatrice, E/S fichiers) comme signatures de fonctions.',
            'Créez le graphe d\'agent avec le LLM comme nœud de décision et les outils comme nœuds d\'action.',
            'Utilisez le backend vLLM pour des appels LLM à faible latence dans des boucles serrées.',
            'Exécutez la boucle d\'agent : LLM → sélection d\'outil → exécution → répétition jusqu\'à complétion.',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**Stack recommandé : vLLM + répartiteur de charge nginx + monitoring**',
            'Pourquoi ce stack : vLLM supporte le serving distribué. Nginx multiplexe les requêtes. Passe à l\'échelle pour 10+ utilisateurs simultanés sur une configuration bi-GPU. Surveillez le débit en tokens par utilisateur.',
            'Pour le traitement de données professionnelles sensibles (financières, médicales, juridiques), la CNIL recommande le recours à des solutions d\'inférence locale afin de garantir la maîtrise des données personnelles. Un serveur vLLM auto-hébergé avec nginx remplit cette exigence sans transfert de données vers des tiers.',
          ],
          numberedItems: [
            'Déployez vLLM avec `--served-model-name model-name` sur un port fixe.',
            'Configurez nginx pour répartir la charge entre 2+ instances vLLM (une par GPU si multi-GPU).',
            'Utilisez l\'endpoint `/v1/chat/completions` compatible OpenAI pour la compatibilité client.',
            'Surveillez via l\'endpoint scrape Prometheus (vLLM exporte latence des requêtes, métriques de débit).',
            'Définissez une limite de débit par utilisateur (algorithme token bucket).',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**Stack recommandé : HuggingFace Transformers + LoRA + Ollama (inférence)**',
            'Pourquoi ce stack : LoRA réduit la VRAM de fine-tuning par 10×. Ollama charge facilement les modèles affinés. Modulaire : entraînez sur une machine, servez sur une autre.',
            '',
            '**Note (avril 2026) :** Meta a déprécié Llama 3.3 pour le fine-tuning commercial. Affinez sur Llama 3.2 (`meta-llama/Llama-3.2-1B` ou plus grand) ou Qwen3 (`Qwen/Qwen3-7B`) pour les termes de licence Apache 2.0 / open-source. Les deux supportent LoRA et se chargent facilement dans Ollama.',
          ],
          numberedItems: [
            'Affinez avec la bibliothèque `peft` (LoRA) pour réduire l\'empreinte VRAM.',
            'Entraînement : 4× la VRAM du modèle nécessaire (état optimiseur, gradients). Exécutez séparément de l\'inférence.',
            'Exportez l\'adaptateur LoRA vers HuggingFace Hub ou le système de fichiers local.',
            'Chargez le modèle affiné dans Ollama : `ollama create monmodele -f Modelfile`.',
            'Ou utilisez HuggingFace TRL (Transformers Reinforcement Learning) pour le RLHF.',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**Stack recommandé : Ollama (streaming natif) ou vLLM + Server-Sent Events (SSE)**',
            'Pourquoi ce stack : Le streaming améliore la performance perçue (l\'utilisateur voit les tokens apparaître). Ollama est le plus simple. vLLM offre le débit de tokens le plus élevé.',
          ],
          numberedItems: [
            'Ollama : appelez `/api/generate` avec `stream: true`. Les tokens arrivent en JSON délimité par des sauts de ligne.',
            'vLLM : utilisez `/v1/chat/completions` avec `stream: true`. Retourne un flux SSE compatible OpenAI.',
            'Frontend : utilisez l\'API EventSource (JavaScript) pour consommer le flux et mettre à jour l\'interface par token.',
            'Désactivez le traitement par lots (batch=1) pour la latence minimale.',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: 'Dois-je utiliser Ollama ou vLLM ?', a: 'Ollama pour l\'interface chat + simplicité. vLLM pour le serveur API + traitement par lots + performance. Pas mutuellement exclusifs ; les deux peuvent fonctionner simultanément.' },
            { q: 'Puis-je utiliser Ollama pour une API de production ?', a: 'Oui, mais vLLM est plus rapide (débit 3–5× supérieur). Ollama convient pour <10 req/s. vLLM pour 10+ req/s.' },
            { q: 'Quel est le meilleur LLM local pour la revue de code ?', a: 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder obtient 82 % sur HumanEval. vLLM traite 10 fichiers en parallèle. ~30–50 tok/s sur RTX 3060 12 Go.' },
            { q: 'Ai-je besoin d\'une base vectorielle pour un RAG simple ?', a: 'Pour <100 documents : embeddings en mémoire (np.ndarray) suffisants. Pour >100 : utilisez Qdrant ou Weaviate.' },
            { q: 'LangGraph est-il excessif pour de simples chatbots ?', a: 'Oui. Utilisez Ollama ou vLLM seuls. LangGraph est conçu pour les workflows multi-étapes (boucles d\'agents, planification).' },
            { q: 'Puis-je combiner les backends Ollama et vLLM ?', a: 'Oui. Par exemple, Ollama pour l\'interface chat, vLLM pour l\'API par lots. Ils peuvent tourner sur la même machine sur des ports différents.' },
          ],
        },
        'relatedReading': {
          title: 'Pour aller plus loin',
          items: [
            '[Meilleur assistant IA de code pour LLM local](/fr/local-llms/best-ai-coding-assistant-local-llm) — Choix IDE pour votre stack de codage (Cursor, Continue.dev, Cody).',
            '[Meilleurs LLM locaux pour le coding 2026](/fr/local-llms/best-local-llms-for-coding) — Classements HumanEval : Qwen3-Coder vs DeepSeek-Coder.',
            '[Configuration RAG local 2026](/fr/local-llms/local-rag-2026) — Guide complet LlamaIndex + Qdrant + Ollama.',
            '[Agents LLM locaux avec LangGraph](/fr/local-llms/local-llm-agents-with-langgraph) — Framework de workflows agents avec exemples étape par étape.',
            '[Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) — Comparaison des backends : CLI vs GUI, vitesse, traitement par lots.',
            '[Open WebUI vs SillyTavern](/fr/local-llms/open-webui-vs-sillytavern) — Comparaison d\'interfaces : professionnel vs roleplay.',
            '[Quelle VRAM pour les LLM locaux ?](/fr/local-llms/how-much-vram-local-llm) — Exigences matérielles par taille de modèle et cas d\'usage.',
          ],
        },
        'commonMistakes': {
          title: 'Erreurs fréquentes lors du choix d\'un stack LLM',
          items: [
            '**Utiliser Ollama pour une API de production sans vLLM :** Ollama plafonne à <10 req/s. Pour servir 10+ utilisateurs simultanés en production, vLLM est indispensable. Testez le débit sous charge avant de déployer.',
            '**Faire tourner LangGraph sans backend vLLM :** Les agents LangGraph effectuent 10+ appels LLM séquentiels. Ollama introduit un goulot d\'étranglement de latence. Associez toujours LangGraph à vLLM pour des temps d\'aller-retour inférieurs à la seconde.',
            '**Mélanger Ollama + vLLM sur le même GPU sans gestion mémoire :** Les deux outils chargent les poids en VRAM. Deux instances d\'un modèle 70B consomment 32 Go. Utilisez des GPU séparés ou quantifiez fortement (Q2) pour faire tenir les deux.',
            '**Choisir une fenêtre de contexte inadaptée pour la rédaction :** Le contexte par défaut de 4K limite les sessions de brainstorming. Pour la rédaction longue, définissez une fenêtre de 16K–32K tokens dans OpenWebUI. Contrepartie : inférence plus lente (2–3× par token).',
            '**Supposer que tous les backends sont également rapides :** vLLM + Ollama utilisent des noyaux différents. Sur le même matériel, vLLM est 2–3× plus rapide pour l\'inférence. La différence de vitesse vient du backend, pas du frontend (OpenWebUI, LM Studio ne sont que des interfaces).',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            '[GitHub Ollama](https://github.com/ollama/ollama) — Documentation officielle, spécification de l\'API streaming et bibliothèque de modèles.',
            '[GitHub vLLM](https://github.com/lm-sys/vllm) — Compatibilité API OpenAI, traitement par lots et documentation sur le batching continu.',
            '[Rapport technique Qwen3-Coder](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen. Score HumanEval 82 %, spécialisé pour le coding. Licence Apache 2.0.',
            '[Documentation LlamaIndex](https://docs.llamaindex.ai) — Framework d\'indexation de documents, découpage et récupération RAG.',
            '[Documentation LangGraph](https://langchain-ai.github.io/langgraph/) — Framework de workflows agents, machines d\'état, patterns d\'utilisation des outils.',
            '[Documentation Qdrant](https://qdrant.tech/documentation/) — Base de données vectorielle pour le stockage local d\'embeddings, Docker-ready, Apache 2.0.',
            '[Documentation Continue.dev](https://docs.continue.dev/) — Extension IDE pour VS Code et JetBrains utilisant des backends LLM locaux.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Stack LLM local 2026 : Coding, Rédaction, RAG, Agents',
        'description': 'Stack LLM local par cas d\'usage avril 2026 : Coding → vLLM + Qwen3-Coder. Rédaction → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. 8–24 Go VRAM. Guide complet.',
        'url': 'https://www.promptquorum.com/fr/local-llms/best-local-llm-stack-use-case',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/about' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Dois-je utiliser Ollama ou vLLM ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama pour l\'interface chat + simplicité. vLLM pour le serveur API + traitement par lots + performance. Pas mutuellement exclusifs ; les deux peuvent fonctionner simultanément.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser Ollama pour une API de production ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, mais vLLM est plus rapide (débit 3–5× supérieur). Ollama convient pour <10 req/s. vLLM pour 10+ req/s.' } },
          { '@type': 'Question', 'name': 'Quel est le meilleur LLM local pour la revue de code ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct. Qwen3-Coder obtient 82 % sur HumanEval. vLLM traite 10 fichiers en parallèle. ~30–50 tok/s sur RTX 3060 12 Go.' } },
          { '@type': 'Question', 'name': 'Ai-je besoin d\'une base vectorielle pour un RAG simple ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pour <100 documents : embeddings en mémoire (np.ndarray) suffisants. Pour >100 : utilisez Qdrant ou Weaviate.' } },
          { '@type': 'Question', 'name': 'LangGraph est-il excessif pour de simples chatbots ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Utilisez Ollama ou vLLM seuls. LangGraph est conçu pour les workflows multi-étapes (boucles d\'agents, planification).' } },
          { '@type': 'Question', 'name': 'Puis-je combiner les backends Ollama et vLLM ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Par exemple, Ollama pour l\'interface chat, vLLM pour l\'API par lots. Ils peuvent tourner sur la même machine sur des ports différents.' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Guide du stack LLM local par cas d\'usage',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Rédaction & création de contenu', 'description': 'Ollama + OpenWebUI + Llama 3.3 (24 Go) ou Llama 3.2 8B (8 Go). Idéal pour la rédaction longue avec fenêtres de contexte ajustables 8K–32K. Configuration simple, aucun code requis. Meilleure UX chat parmi les interfaces LLM locales.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Développement logiciel & revue de code', 'description': 'vLLM + Qwen3-Coder-7B-Instruct (RTX 3060 12 Go) ou -14B (RTX 4070+). Plus rapide pour l\'inférence par lots (3–5× vs Ollama). Score HumanEval 82 %. API compatible OpenAI, streaming de tokens pour les complétions en temps réel.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'RAG local (Q&R sur documents)', 'description': 'LlamaIndex + Ollama/vLLM + base vectorielle Qdrant + FastAPI UI. Découpage, embedding et récupération de documents intégrés. Qdrant est auto-hébergé, privé et rapide. La qualité du modèle d\'embedding importe plus que la taille du LLM pour le RAG.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Agents IA & workflows', 'description': 'LangGraph + vLLM (pas Ollama) + définitions d\'outils. Boucles d\'agents structurées avec utilisation explicite des outils et mémoire. vLLM requis pour une latence inférieure à la seconde dans les boucles serrées. Courbe d\'apprentissage plus élevée mais prêt pour la production.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Serveur API multi-utilisateur', 'description': 'vLLM + répartiteur de charge nginx + monitoring Prometheus. Inférence distribuée sur plusieurs GPU ou instances. Passe à l\'échelle pour 10+ utilisateurs simultanés. Limitation de débit par utilisateur. Observabilité production.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Fine-tuning & recherche', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM pour l\'inférence. LoRA réduit l\'empreinte VRAM par 10×. Entraînez séparément sur du matériel dédié, servez sur la machine d\'inférence. Llama 3.2 et Qwen3 recommandés (Llama 3.3 déprécié depuis avril 2026).' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Streaming temps réel', 'description': 'Ollama (endpoint streaming natif) ou vLLM + Server-Sent Events (SSE). Le streaming de tokens améliore la performance perçue et l\'UX. Ollama configuration la plus simple, vLLM débit le plus élevé. Les deux supportent l\'API streaming compatible OpenAI.' },
        ],
      },
    },
    ja: {
      theme: 'ツール & インターフェース',
      title: 'ユースケース別ローカルLLMスタック2026：ライティング、コーディング、RAG、エージェント',
      seoTitle: 'ローカルLLMスタック2026：コーディング、ライティング、RAG、エージェント別最適構成',
      intro: '**最適なローカルLLMスタックはワークフロー次第で決まる：ライティング→Ollama + OpenWebUI + Llama 3.3、開発→vLLM + Qwen3-Coder + IDE拡張、研究→LangGraph + vLLM。2026年4月現在、すべてのユースケースをカバーする単一ツールは存在しない。** 本ガイドは7つの主要ユースケースを最適スタック（backend + UI + インテグレーション）とハードウェア層（8–24 GB VRAM）にマッピングします。',
      metaDescription: 'ユースケース別ローカルLLMスタック2026年4月：コーディング→vLLM + Qwen3-Coder。ライティング→Ollama + Llama 3.3。RAG→LlamaIndex + Qdrant。VRAM 8–24 GB対応。完全セットアップガイド。',
      twitterDescription: 'ユースケース別ローカルLLMスタック：コーディング→vLLM + Qwen3-Coder。ライティング→Ollama + Llama 3.3。RAG→LlamaIndex + Qdrant。エージェント→LangGraph + vLLM。2026年4月版。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**最適スタックはワークフロー次第：ライター→OpenWebUI + Llama 3、開発者→vLLM + Python SDK、研究者→LangGraph + カスタムスクリプト。2026年4月現在、すべてをカバーする単一ツールはない。**',
      audience: 'OllamaまたはLM Studioに慣れた開発者で、ローカルLLMワークフローを最適化したい方',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLMスタック',
      toc: [
        { label: '重要ポイント', anchor: '#tldr' },
        { label: 'ハードウェア別判断テーブル', anchor: '#hardware' },
        { label: 'ライティング & コンテンツ作成', anchor: '#writing' },
        { label: 'ソフトウェア開発 & コードレビュー', anchor: '#coding' },
        { label: 'ローカルRAG（文書Q&A）', anchor: '#rag' },
        { label: 'AIエージェント & ワークフロー', anchor: '#agents' },
        { label: 'マルチユーザーAPIサーバー', anchor: '#api' },
        { label: 'ファインチューニング & 研究', anchor: '#finetuning' },
        { label: 'リアルタイムチャット（ストリーミング）', anchor: '#streaming' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**ライティング/コンテンツ作成：** Ollama + OpenWebUI。設定不要、美しいチャットUI、コンテキストウィンドウ調整可能。',
            '**コーディング/コードレビュー：** vLLM + FastAPI + VS Code拡張。バッチ処理、並列推論、ストリーミング対応。',
            '**ローカルRAG：** LlamaIndex + Ollama/vLLM + QdrantベクトルDB。チャンク分割、埋め込み、検索を一体化。',
            '**AIエージェント：** LangGraph + vLLMバックエンド。ツール使用、メモリ、計画ループ。学習曲線はやや高め。',
            '**マルチユーザーAPI：** nginxロードバランサー配後vLLM。同時リクエスツ10+堆。最もスケーラブルな構成。',
            '**ファインチューニング：** HuggingFace Transformers + LoRA + Ollama（推論）。トレーニングとservingは分離。',
            '**リアルタイムストリーミング：** Ollama（ネイティブストリーミング）またはvLLM + トークンストリーミングエンドポイント。チャットボットのUX最強。',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: 'ハードウェア別判断テーブル（2026年4月）',
          content: 'GPU/VRAMに合わせた最適スタックを選択。実ベンチマークで検証済みの組み合わせ。コーディング・エージェントは大型モデルの恩恵が大きい。RAGはLLMサイズより埋め込み品質が重要。',
          columns: ['お使いのハード', 'ライティング', 'コーディング', 'RAG', 'エージェント'],
          rows: [
            { 'お使いのハード': '4–8 GB VRAM（GTX 1660、RTX 3050）', 'ライティング': 'Ollama + Phi-4 Mini', 'コーディング': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', 'エージェント': '非推奨' },
            { 'お使いのハード': '12 GB VRAM（RTX 3060、RTX 4070）', 'ライティング': 'Ollama + Llama 3.2 8B', 'コーディング': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', 'エージェント': 'LangGraph + Ollama（低速）' },
            { 'お使いのハード': '16 GB VRAM（RTX 4070 Ti、RTX 4080）', 'ライティング': 'Ollama + Mistral Small 3.1', 'コーディング': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', 'エージェント': 'LangGraph + vLLM' },
            { 'お使いのハード': '24 GB VRAM（RTX 3090、RTX 4090）', 'ライティング': 'Ollama + Llama 3.3 70B Q4', 'コーディング': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', 'エージェント': 'LangGraph + vLLM（最速）' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**推奨スタック： [Ollama](/ja/local-llms/how-to-install-ollama) + [OpenWebUI](/ja/local-llms/open-webui-vs-sillytavern) + Markdownエディター**',
            '次の理由からこのスタックを推奨：OpenWebUIは最高のチャットUX。コード不要。長文ライティング向けにコンテキストウィンドウ（4K–32K）の柔軟性がLM Studioを上回る。クラウドAPIよりコスト安。',
          ],
          numberedItems: [
            '24 GB VRAMの場合：`ollama pull llama3.3:70b` — 最高品質、ライティングベンチマークでGPT-4（2023）等。',
            '16 GB VRAMの場合：`ollama pull mistral-small3.1` — 128Kコンテキスト、24 GB以下で最高品質。',
            '8 GB VRAMの場合：`ollama pull llama3.2:8b` — 良好なライティング品質、コンシューマーハードで高速。',
            'OpenWebUIをDockerでインストール：`docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`',
            '文書の長さに応じてOpenWebUI設定でコンテキストウィンドウ（8K–32Kトークン）を設定。',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**推奨スタック： [vLLM](/ja/local-llms/vllm-performance-guide) + Qwen3-Coder + IDE拡張**',
            'Qwen3-CoderはHumanEvalで82％（2026年4月現在最高のオープンソースコーディングモデル）。vLLMはバッチ推論でOllamaよ3–5倍高速。既存IDEツールとのネイティブOpenAI API互换性。リアルタイム潔歋候補のストリーミング有効。',
            '',
            '**複数ファイルの並列コードレビュー**',
            '複数ファイルの自動レビューにはvLLMのバッチ処理を活用：',
          ],
          numberedItems: [
            'vLLMをインストール：`pip install vllm`',
            'Qwen3-Coder-7BでvLLMサーバーを起動：`python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`',
            '16+ GB VRAMの場合は14Bを使用：`--model Qwen/Qwen3-Coder-14B-Instruct`',
            'IDE拡張（VS Code Continue.dev、Cursor等）を`http://localhost:8000/v1`に接続。',
            'コードレビューのバッチ処理を有効化：1回のAPI呼び出しで最大8ファイルを並列処理（`vllm`はデフォルトでbatch=10対応）。',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**推奨スタック： LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
            '[LlamaIndex](/ja/local-llms/local-rag-2026)がチャンク分割・検索を歋当。Qdrantは高速・ローカル・プライベート。Ollamaで埋め込みを生成（無料）、またはvLLMでLLM推論。',
          ],
          numberedItems: [
            'LlamaIndexをインストール：`pip install llama-index`',
            '文書（PDF、TXT、markdown）をLlamaIndexに読み込み。',
            '文書をチャンク分割（1024トークンデフォルト）し、ローカルモデルで埋め込みを作成。',
            'QdrantベクトルDBに埋め込みを保存（Dockerでローカル動作）。',
            'LlamaIndexでクエリ：最上K件の類似文書を取得し、コンテキストを付きでLLMにプロンプト。',
            'FastAPIエンドポイントにラップしてウェブUIまたはIDE連携。',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**推奨スタック： LangGraph + vLLM + ツール定義**',
            '[LangGraph](/ja/local-llms/local-llm-agents-with-langgraph)が構造化されたエージェントフローを提供。vLLMは10+回の連続LLM呼び出しに十分な速度。ツール使用は明示的でデバッグ容易。',
          ],
          numberedItems: [
            'LangGraphをインストール：`pip install langchain langgraph`',
            'ツール（ウェブ検索、計算機、ファイルI/O）を関数シグネチャとして定義。',
            'エージェントグラフをLLMを判断ノード、ツールをアクションノードとして作成。',
            'タイトなループ内で低レイテンシなLLM呼び出しにはvLLMバックエンドを使用。',
            'エージェントループを実行：LLM → ツール選択 → 実行 → 完了まで繰り返し。',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**推奨スタック： vLLM + nginxロードバランサー + モニタリング**',
            'vLLMは分散serving対応。Nginxがリクエストを多重化。デュアルGPU構成で同時ユーザー10+までスケール。ユーザー別トークンスループットを監視。',
            '日本の企業・研究機騯では、METI（2024年AIガバナンスガイドライン）が推奨するローカル推論により、大手企業がプライバシーリスクの少ないLLMデプロイを実現しています。vLLM自己ホスティングとnginxは、第三者へのデータ送信なしでこの要件を満たします。',
          ],
          numberedItems: [
            'vLLMを`--served-model-name model-name`で固定ポートにデプロイ。',
            'nginxを2+のvLLMインスタンス間で負荷分散するように設定（マルチGPUの場合はGPUごとに1インスタンス）。',
            'クライアント互换性のためにOpenAI互换`/v1/chat/completions`エンドポイントを使用。',
            'Prometheusスクレイプエンドポイントでモニタリング（vLLMはリクエストレイテンシ、スループットメトリクスをエクスポート）。',
            'ユーザーごとのレート制限をトークンバケットアルゴリズムで設定。',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**推奨スタック： HuggingFace Transformers + LoRA + Ollama（推論）**',
            'LoRAはVRAMフットプリントを１０分の１に削減。Ollamaはファインチューニング済みモデルを簡単に読み込み。モジュール式：トレーニングとservingを分離。',
            '',
            '**注意（2026年4月）：** MetaはLlama 3.3の商用ファインチューニングを非推奨。Llama 3.2（`meta-llama/Llama-3.2-1B`以上）またはQwen3（`Qwen/Qwen3-7B`）のApache 2.0ライセンスを選択。両方ともLoRAとOllama読み込みに対応。',
          ],
          numberedItems: [
            '`peft`ライブラリ（LoRA）でVRAMフットプリントを削減。',
            'トレーニング：モデル VRAMの4倍必要（オプティマイザーステート、勧配）。推論と分離して実行。',
            'LoRAアダプターをHuggingFace Hubまたはローカルファイルシステムにエクスポート。',
            'ファインチューニング済みモデルをOllamaに読み込み：`ollama create mymodel -f Modelfile`',
            'またはHuggingFace TRL（Transformers Reinforcement Learning）でRLHF。',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**推奨スタック： Ollama（ネイティブストリーミング）またはvLLM + Server-Sent Events（SSE）**',
            'ストリーミングは知覚パフォーマンスを向上（ユーザーがトークン表示を確認できる）。Ollamaは最も簡単。vLLMはトークンスループット最高。',
          ],
          numberedItems: [
            'Ollama：`/api/generate`を`stream: true`で呼び出し。トークンは改行区切りJSONで届く。',
            'vLLM：`/v1/chat/completions`を`stream: true`で使用。OpenAI互换SSEストリームを返却。',
            'フロントエンド：EventSource API（JavaScript）でストリームを受信しトークンごとにUIを更新。',
            '最小レイテンシのためバッチ処理を無効化（batch=1）。',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: 'OllamaとvLLMはどちらを使うべきですか？', a: 'OllamaはチャットUI + シンプルさ向け。vLLMはAPIサーバー + バッチ処理 + パフォーマンス向け。相互排他ではない。両方並行実行可能。' },
            { q: 'Ollamaを本番環境のAPIに使えますか？', a: '使えますが、vLLMの方が高速（3–5倍のスループット）。Ollamaは<10 req/s向け。vLLMは10+ req/s向け。' },
            { q: 'コードレビューに最適なローカルLLMは？', a: 'vLLM + Qwen3-Coder-7B-Instruct。Qwen3-CoderはHumanEvalで８２％（オープンソース最高）。vLLMは10ファイルを並列分。RTX 3060 12GBで絀30–50 tok/s。' },
            { q: '簡単なRAGにベクトルDBは必要ですか？', a: '<100文書の場合はインメモリ埋め込み（np.ndarray）で十分。>100文書の場合はQdrantまたはWeaviateを推奨。' },
            { q: 'LangGraphはシンプルなチャットボットには过剰ですか？', a: 'はい。OllamaまたはvLLM単体で十分。LangGraphはマルチステップワークフロー（エージェントループ、計画）向け。' },
            { q: 'OllamaとvLLMのバックエンドを並行使用できますか？', a: 'できます。例：OllamaでチャットUI、vLLMでバッチAPI。同一マシンで別ポートで動作可能。' },
          ],
        },
        'relatedReading': {
          title: '関連記事',
          items: [
            '[ローカルLLM向け最高のAIコーディングアシスタント](/ja/local-llms/best-ai-coding-assistant-local-llm) — コーディングスタック用IDE選択（Cursor、Continue.dev、Cody）。',
            '[コーディング向きローカルLLM 2026](/ja/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek-CoderのHumanEvalランキング。',
            '[ローカルRAG設定 2026](/ja/local-llms/local-rag-2026) — LlamaIndex + Qdrant + Ollamaの完全実装ガイド。',
            '[ローカルLLMエージェント（LangGraph）](/ja/local-llms/local-llm-agents-with-langgraph) — ステップごとのエージェントワークフローフレームワーク。',
            '[Ollama vs LM Studio](/ja/local-llms/ollama-vs-lm-studio) — バックエンド比較：CLI vs GUI、速度、バッチ処理。',
            '[Open WebUI vs SillyTavern](/ja/local-llms/open-webui-vs-sillytavern) — チャットUI比較：プロフェッショナル vs ロールプレイ。',
            '[ローカルLLMに必要なVRAMは？](/ja/local-llms/how-much-vram-local-llm) — モデルサイズとユースケース別ハードウェア要件。',
          ],
        },
        'commonMistakes': {
          title: 'LLMスタック選択時のよくある間違い',
          items: [
            '**vLLMなしでOllamaを本番環境APIに使用：** Ollamaは<10 req/sが上限。10+同時ユーザーの本番環境ではvLLMが必須。デプロイ前に負荷下でスループットをテスト。',
            '**vLLMバックエンドなしでLangGraphを実行：** LangGraphエージェントは10+回の連続LLM呼び出し。Ollamaはレイテンシのボトルネックになりやすい。サブ秒の応答時間にはLangGraph + vLLMの組み合わせが必須。',
            '**メモリ管理なしに同じGPUでOllama + vLLMを混在：** 両ツールがVRAMに重みを読み込む。70Bモデルを2インスタンス実行するとVRAM 32 GB消費。GPUを分けるか、Q2高圧縮で充分なスペースを確保。',
            '**ライティング用に不適切なコンテキストウィンドウを選択：** デフォルトの4Kコンテキストはブレインストーミングセッションに制約。長文ライティングではOpenWebUIのコンテキストウィンドウをトークン16K–32Kに設定。トレードオフ：トークンごとの推論速度が2–3倍低下。',
            '**すべてのバックエンドが同じ速度だと誤解：** vLLMとOllamaは異なるカーネルを使用。同じハードウェアで、vLLMは推論速度が2–3倍高い。速度の違いはフロントエンド（OpenWebUI、LM StudioはUIに過ぎない）ではなくバックエンド。',
          ],
        },
        'sources': {
          title: '参考資料',
          items: [
            '[Ollama GitHub](https://github.com/ollama/ollama) — 公式ドキュメント、ストリーミングAPI仕様、モデルライブラリ。',
            '[vLLM GitHub](https://github.com/lm-sys/vllm) — OpenAI API互换性、バッチ処理、連続バッチングのドキュメント。',
            '[Qwen3-Coder技術レポート](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen。HumanEval 82％、コーディング特化。Apache 2.0ライセンス。',
            '[LlamaIndexドキュメント](https://docs.llamaindex.ai) — 文書インデックス、チャンク分割、RAG検索フレームワーク。',
            '[LangGraphドキュメント](https://langchain-ai.github.io/langgraph/) — エージェントワークフロー、ステートマシン、ツール使用パターン。',
            '[Qdrantドキュメント](https://qdrant.tech/documentation/) — ローカル埋め込み保存用ベクトルDB、Docker対応、Apache 2.0。',
            '[Continue.devドキュメント](https://docs.continue.dev/) — ローカルLLMバックエンドを使用するVS Code / JetBrains用IDE拡張。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'ユースケース別ローカルLLMスタック2026：コーディング、ライティング、RAG、エージェント',
        'description': 'ユースケース別ローカルLLMスタック2026年4月：コーディング→vLLM + Qwen3-Coder。ライティング→Ollama + Llama 3.3。RAG→LlamaIndex + Qdrant。VRAM 8–24 GB対応。',
        'url': 'https://www.promptquorum.com/ja/local-llms/best-local-llm-stack-use-case',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'OllamaとvLLMはどちらを使うべきですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'OllamaはチャットUI + シンプルさ向け。vLLMはAPIサーバー + バッチ処理 + パフォーマンス向け。両方並行実行可能。' } },
          { '@type': 'Question', 'name': 'Ollamaを本番環境のAPIに使えますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '使えますが、vLLMの方が高速（3–5倍のスループット）。Ollamaは<10 req/s向け。vLLMは10+ req/s向け。' } },
          { '@type': 'Question', 'name': 'コードレビューに最適なローカルLLMは？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct。HumanEval 82％。vLLMは10ファイルを並列分。RTX 3060 12GBで絀30–50 tok/s。' } },
          { '@type': 'Question', 'name': '簡単なRAGにベクトルDBは必要ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '<100文書の場合はインメモリ埋め込み（np.ndarray）で十分。>100文書の場合はQdrantまたはWeaviateを推奨。' } },
          { '@type': 'Question', 'name': 'LangGraphはシンプルなチャットボットには过剰ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。OllamaまたはvLLM単体で十分。LangGraphはマルチステップワークフロー向け。' } },
          { '@type': 'Question', 'name': 'OllamaとvLLMのバックエンドを並行使用できますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'できます。同一マシンで別ポートで動作可能。例：OllamaでチャットUI、vLLMでバッチAPI。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'ユースケース別ローカルLLMスタックガイド',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ライティング & コンテンツ作成', 'description': 'Ollama + OpenWebUI + Llama 3.3（24 GB）またはLlama 3.2 8B（8 GB）。調整可能なコンテキストウィンドウ（8K–32K）で長文ライティングに最適。シンプルな設定、コード不要。ローカルLLMフロントエンドの中で最高のUX。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'ソフトウェア開発 & コードレビュー', 'description': 'vLLM + Qwen3-Coder-7B-Instruct（RTX 3060 12 GB）または-14B（RTX 4070+）。バッチ推論に最高速（Ollamaの3–5倍）。HumanEval 82％。リアルタイム補完向けストリーミング仑8、OpenAI互换API。' },
          { '@type': 'ListItem', 'position': 3, 'name': 'ローカルRAG（文書Q&A）', 'description': 'LlamaIndex + Ollama/vLLM + QdrantベクトルDB + FastAPI UI。文書チャンク分割、埋め込み、検索を一体化。Qdrantは自己ホスティング・プライベート・高速。LLMサイズより埋め込みモデルの品質が重要。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'AIエージェント & ワークフロー', 'description': 'LangGraph + vLLM（Ollama不可）+ ツール定義。明示的なツール使用とメモリを持つ構造化エージェントループ。タイトなループ内でサブ秒のレイテンシにはvLLM必須。学習曲線は高いが本番環境準備が整っている。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'マルチユーザーAPIサーバー', 'description': 'vLLM + nginxロードバランサー + Prometheusモニタリング。複数GPU・インスタンスでの分散推論。同時ユーザー10+までスケール。ユーザー別トークンレート制限。本番環境対応の可観测性。' },
          { '@type': 'ListItem', 'position': 6, 'name': 'ファインチューニング & 研究', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM（推論）。LoRAはVRAMフットプリントを１０分の１に削減。専用ハードで別流トレーニング、推論マシンでserving。Llama 3.2とQwen3推奨（2026年4月以降Llama 3.3は非推奨）。' },
          { '@type': 'ListItem', 'position': 7, 'name': 'リアルタイムストリーミング', 'description': 'Ollama（ネイティブストリーミングエンドポイント）またはvLLM + Server-Sent Events（SSE）。トークンストリーミングは知覚パフォーマンスとUXを向上。Ollamaは最もシンプルな設定、vLLMは最高スループット。両方ともOpenAI互换ストリーミングAPI対応。' },
        ],
      },
    },
    zh: {
      theme: '工具 & 界面',
      title: '按用途分类的2026年最佳本地LLM堆栈：写作、编程、RAG、智能体',
      seoTitle: '本地LLM堆栈护23：编程、写作、RAG、智能体最优方案',
      intro: '**最佳本地LLM堆栈取决于具体工作流：内容写作→Ollama + OpenWebUI + Llama 3.3，软件开发→vLLM + Qwen3-Coder + IDE插件，程式研究→LangGraph + vLLM。2026年4月更新：无单一工具能涵盖所有场景。** 本指南将的7个常见用途与最佳堆栈（后端 + UI + 集成）及硬件配置（8–24 GB显存）一一对应。',
      metaDescription: '按用途本地LLM堆捨2026年4月：编程→vLLM+Qwen3-Coder，写作→Ollama+Llama 3.3，RAG→LlamaIndex+Qdrant。8-24GB显存。完整配置指南。',
      twitterDescription: '本地LLM堆栈：编程→vLLM+Qwen3-Coder，写作→Ollama+Llama 3.3，RAG→LlamaIndex+Qdrant，智能体→LangGraph+vLLM。2026年4月。',
      publishDate: '2026-04-05',
      dateModified: '2026-04-19',
      leadAnswerBlock: '**最佳堆栈取决于工作流：内容创作者→OpenWebUI + Llama 3，开发者→vLLM + Python SDK，研究人员→LangGraph + 自定义脚本。2026年4月：没有万能工具。**',
      audience: '熟悉Ollama或LM Studio、希望优化本地LLM工作流的开发者',
      readTime: '阅读冖10分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM堆栈',
      toc: [
        { label: '核心要点', anchor: '#tldr' },
        { label: '硬件分级决策表', anchor: '#hardware' },
        { label: '写作 & 内容创作', anchor: '#writing' },
        { label: '软件开发 & 代码审查', anchor: '#coding' },
        { label: '本地RAG（文档问答）', anchor: '#rag' },
        { label: 'AI智能体 & 工作流', anchor: '#agents' },
        { label: '多用户API服务器', anchor: '#api' },
        { label: '微调 & 研究', anchor: '#finetuning' },
        { label: '实时聊天（流式传输）', anchor: '#streaming' },
        { label: '常见问题', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            '**写作/内容创作：** Ollama + OpenWebUI。零配置、精美聊天界面、上下文窗口可调。',
            '**编程/代码审查：** vLLM + FastAPI + VS Code插件。批量处理、并行推理、流式传输。',
            '**本地RAG：** LlamaIndex + Ollama/vLLM + Qdrant向量数据库。分块、嵌入、检索一体化。',
            '**AI智能体：** LangGraph + vLLM后端。工具调用、记忆、规划循环。学习曲线较陈。',
            '**多用户API：** nginx负载均衡器 + vLLM。支持并发请10+。扩展性最佳。',
            '**微调：** HuggingFace Transformers + LoRA + Ollama推理。训练与serving分离。',
            '**实时流式：** Ollama原生流式或vLLM + 令牌流式传输。聊天机器人最佳UX。',
          ],
        },
        'hardware': {
          id: 'hardware',
          title: '硬件分级决策表（2026年4月）',
          content: '根据GPU/显存选择最佳堆栈。每种组合均有真实基准测试。编程和智能体工作流比写作更需要大模型；RAG质量更取决于嵌入模型而非LLM大小。',
          columns: ['您的硬件', '写作', '编程', 'RAG', '智能体'],
          rows: [
            { '您的硬件': '4–8 GB显存（GTX 1660、RTX 3050）', '写作': 'Ollama + Phi-4 Mini', '编程': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', '智能体': '不推荐' },
            { '您的硬件': '12 GB显存（RTX 3060、RTX 4070）', '写作': 'Ollama + Llama 3.2 8B', '编程': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', '智能体': 'LangGraph + Ollama（较慢）' },
            { '您的硬件': '16 GB显存（RTX 4070 Ti、RTX 4080）', '写作': 'Ollama + Mistral Small 3.1', '编程': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', '智能体': 'LangGraph + vLLM' },
            { '您的硬件': '24 GB显存（RTX 3090、RTX 4090）', '写作': 'Ollama + Llama 3.3 70B Q4', '编程': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', '智能体': 'LangGraph + vLLM（最快）' },
          ],
        },
        'writing': {
          id: 'writing',
          content: [
            '**推荐堆栈： [Ollama](/zh/local-llms/how-to-install-ollama) + [OpenWebUI](/zh/local-llms/open-webui-vs-sillytavern) + Markdown编辑器**',
            '选择理由：OpenWebUI提供最佳聊天体验。无需编程。长文写作的上下文窗口灵活性（4K–32K）超过LM Studio。比云端API更经济实惠。',
          ],
          numberedItems: [
            '24 GB显存：`ollama pull llama3.3:70b` — 质量最高，写作基准测试相当GPT-4（2023）。',
            '16 GB显存：`ollama pull mistral-small3.1` — 128K上下文，24 GB以下最高质量。',
            '8 GB显存：`ollama pull llama3.2:8b` — 写作质量良好，消费级硬件上运行流畅。',
            '通过Docker安装OpenWebUI：`docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`',
            '在OpenWebUI设置中按文档长度配置上下文窗口（8K–32K Token）。',
          ],
        },
        'coding': {
          id: 'coding',
          content: [
            '**推荐堆栈： [vLLM](/zh/local-llms/vllm-performance-guide) + Qwen3-Coder + IDE插件**',
            'Qwen3-Coder在HumanEval得劆8剸2%（2026年4月最佳开源代码模型）。vLLM批量推理比Ollama快3–5倍。原生OpenAI API兼容，完美适配现有IDE工具。实时补全流式传输已启用。',
            '',
            '**多文件并行代码审查**',
            '自动化多文件代码审查可利用vLLM批量处理：',
          ],
          numberedItems: [
            '安装vLLM：`pip install vllm`',
            '启动Qwen3-Coder-7B服务：`python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`',
            '16+ GB显存可使用更大的14B模型：`--model Qwen/Qwen3-Coder-14B-Instruct`',
            '将IDE插件（VS Code Continue.dev、Cursor等）连接至`http://localhost:8000/v1`。',
            '开启批量代码审查：单次API调用并行处理最多10个文件（`vllm`默认支持batch=10）。',
          ],
          codeBlock: `# Review 10 files in parallel using vLLM batch processing
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... up to 10 files
]

# vLLM processes all 10 in parallel (1 batch request)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # Deterministic for review tasks
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
          codeLanguage: 'python',
        },
        'rag': {
          id: 'rag',
          content: [
            '**推荐堆栈： LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
            '[LlamaIndex](/zh/local-llms/local-rag-2026)负责分块与检索。Qdrant高速、本地、隐私。Ollama免费生成Embedding，或用vLLM做LLM推理。',
          ],
          numberedItems: [
            '安装LlamaIndex：`pip install llama-index`',
            '将文档（PDF、TXT、Markdown）加载到LlamaIndex。',
            '将文档分块（1024 Token默认），用本地模型生成Embedding。',
            '将Embedding存入Qdrant向量数据库（通过Docker本地运行）。',
            '通过LlamaIndex查询：检索最相似K个文档，带上上下文提示 LLM。',
            '包装成FastAPI端点，支持Web UI或IDE集成。',
          ],
        },
        'agents': {
          id: 'agents',
          content: [
            '**推荐堆栈： LangGraph + vLLM + 工具定义**',
            '[LangGraph](/zh/local-llms/local-llm-agents-with-langgraph)提供结构化的智能体流。vLLM足够快以支持连续10+次LLM调用。工具调用显式且易于调试。',
          ],
          numberedItems: [
            '安装LangGraph：`pip install langchain langgraph`',
            '将工具（搜索、计算器、文件I/O）定义为函数签名。',
            '创建LLM为决策节点、工具为动作节点的智能体图。',
            '在紧密循环中使用vLLM后端实现低延迟 LLM调用。',
            '执行智能体循环：LLM → 工具选择 → 执行 → 循环直到完成。',
          ],
        },
        'api': {
          id: 'api',
          content: [
            '**推荐堆栈： vLLM + nginx负载均衡 + 监控**',
            'vLLM支持分布式serving。Nginx多路复用请求。双卡配置支持并发10+用户。监控每用户Token吸吐量。',
            '中国企业应特别注意：根据2021年《数据安全法》和《个人信息保护法》，金融、医疗、法律等领域的敦感数据建议使用本地推理。自托管vLLM + nginx方案可实现数据不出本地服务器。',
          ],
          numberedItems: [
            '将vLLM部署到固定端口，参数`--served-model-name model-name`。',
            '配置nginx对2+个vLLM实例做负载均衡（多卡时每卡一个实例）。',
            '使用OpenAI兼容`/v1/chat/completions`端点保证客户端兼容性。',
            '通过Prometheus端点监控（vLLM导出请求延迟、吸吐量指标）。',
            '为每个用户设置Token桶算法限流。',
          ],
        },
        'finetuning': {
          id: 'finetuning',
          content: [
            '**推荐堆栈： HuggingFace Transformers + LoRA + Ollama（推理）**',
            'LoRA将微调所需显存降伕10倍。Ollama轻松加载微调后模型。模块化：训练和serving分离。',
            '',
            '**注意（2026年4月）：** Meta已对Llama 3.3商业微调不再推荐。建议在Llama 3.2（`meta-llama/Llama-3.2-1B`或更大）或Qwen3（`Qwen/Qwen3-7B`）上微调，遵循pache 2.0许可证。两者均支持LoRA且可在Ollama中加载。',
          ],
          numberedItems: [
            '使用`peft`库（LoRA）减少显存占用。',
            '训练阶段需要模型显存的4倍（优化器状态、梯度），与推理分开运行。',
            '将LoRA适配器导出到HuggingFace Hub或本地文件系统。',
            '将微调后模型加载到Ollama：`ollama create mymodel -f Modelfile`',
            '或使用HuggingFace TRL进行RLHF训练。',
          ],
        },
        'streaming': {
          id: 'streaming',
          content: [
            '**推荐堆栈： Ollama（原生流式）或vLLM + Server-Sent Events（SSE）**',
            '流式传输提升感知性能（用户看到Token逐个呈现）。Ollama配置最简单。vLLM Token吸吐量最高。',
          ],
          numberedItems: [
            'Ollama：调用`/api/generate`并设置`stream: true`，Token以换行符分隔的JSON返回。',
            'vLLM：使用`/v1/chat/completions`并设置`stream: true`，返回OpenAI兼容SSE流。',
            '前端：使用EventSource API（JavaScript）消费流，每个Token更新UI。',
            '禁用批量处理（batch=1）实现最低延迟。',
          ],
        },
        'faqSection': {
          id: 'faq',
          faqs: [
            { q: '应该选Ollama还是vLLM？', a: 'Ollama适合聊天UI + 简单开发。vLLM適合API服务器 + 批量处理 + 高性能場景。两者不互斥，可同时运行。' },
            { q: 'Ollama可以用于生产环API吗？', a: '可以，但vLLM更快（吐射2刀3–5倍）。Ollama适合<10 req/s。vLLM适合高10+ req/s场景。' },
            { q: '代码审查最佳本地LLM是什么？', a: 'vLLM + Qwen3-Coder-7B-Instruct。Qwen3-Coder在HumanEval得劆8剸2%（开源最佳）。vLLM并行处理10个文件。RTX 3060 12GB成逗30–50 tok/s。' },
            { q: '简单RAG是否需要向量数据库？', a: '<100个文档：内存Embedding（np.ndarray）即可。>100个文档：建议Qdrant或Weaviate避免内存溢出。' },
            { q: 'LangGraph对于简单聊天机器人是否过于复杂？', a: '是的。直接用Ollama或vLLM即可。LangGraph适合多步骤工作流（智能体循环、规划）场景。' },
            { q: '可以同时使用Ollama和vLLM吗？', a: '可以。例：Ollama负责聊天UI，vLLM负责批量 API。同一台机器不同端口并运。' },
          ],
        },
        'relatedReading': {
          title: '相关阅读',
          items: [
            '[本地LLM最佳AI编码助手](/zh/local-llms/best-ai-coding-assistant-local-llm) — 编码栈的IDE选择（Cursor、Continue.dev、Cody）。',
            '[编程最佳本地LLM 2026](/zh/local-llms/best-local-llms-for-coding) — Qwen3-Coder vs DeepSeek-Coder HumanEval排名。',
            '[本地RAG配置 2026](/zh/local-llms/local-rag-2026) — LlamaIndex + Qdrant + Ollama完整实现指南。',
            '[LangGraph本地LLM智能体](/zh/local-llms/local-llm-agents-with-langgraph) — 逐步示例的智能体工作流框架。',
            '[Ollama vs LM Studio](/zh/local-llms/ollama-vs-lm-studio) — 后端对比：CLI vs GUI、速度、批量处理。',
            '[Open WebUI vs SillyTavern](/zh/local-llms/open-webui-vs-sillytavern) — 聊天界面对比：专业与角色扮演。',
            '[本地LLM需要多少显存？](/zh/local-llms/how-much-vram-local-llm) — 按模型大小和用途划分硬件需求。',
          ],
        },
        'commonMistakes': {
          title: '选择LLM堆栈时的常见错误',
          items: [
            '**未配备vLLM就用Ollama作为生产API：** Ollama上限<10 req/s。服务10+并发用户的生产环必须vLLM。部署前务必进行负载测试。',
            '**未配备vLLM后端就运行LangGraph：** LangGraph智能体需褵10+次连续LLM调用。Ollama引入延迟瓶颈。亚秒级响应必须LangGraph + vLLM组合。',
            '**未管理内存在同一GPU混跑Ollama + vLLM：** 两个工具均将权重加载到显存。两个70B模型实例占用5632 GB显存。建议使用独立GPU或Q2量化失空间。',
            '**写作时上下文窗口选择不当：** 默认4K上下文限制头脑风暴。长文写作应在OpenWebUI设置中配置16K–32K Token窗口。代价：每个Token推理慢2–3倍。',
            '**误以为所有后端速度相同：** vLLM与Ollama使用不同的内核。同硬件上vLLM推理速度快2–3倍。速度差异源于后端，不是前端（OpenWebUI、LM Studio仅是UI）。',
          ],
        },
        'sources': {
          title: '参考资料',
          items: [
            '[Ollama GitHub](https://github.com/ollama/ollama) — 官方文档、流式API规范、模型库。',
            '[vLLM GitHub](https://github.com/lm-sys/vllm) — OpenAI API兼容性、批量处理、连续批处理文档。',
            '[Qwen3-Coder技术报告](https://qwenlm.github.io/blog/qwen2.5-coder/) — 阿里巴巴通义千问。HumanEval 82%，代码专用。Apache 2.0许可。',
            '[LlamaIndex文档](https://docs.llamaindex.ai) — 文档索引、分块、RAG检索框架。',
            '[LangGraph文档](https://langchain-ai.github.io/langgraph/) — 智能体工作流、状态机、工具调用模式。',
            '[Qdrant文档](https://qdrant.tech/documentation/) — 本地Embedding存储用向量数据库，Docker就绪，Apache 2.0。',
            '[Continue.dev文档](https://docs.continue.dev/) — 使用本地LLM后端的VS Code / JetBrains IDE插件。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '按用途分类2026年最佳本地LLM堆栈：编程、写作、RAG、智能体',
        'description': '按用途本地LLM堆捨2026年4月：编程→vLLM+Qwen3-Coder，写作→Ollama+Llama 3.3，RAG→LlamaIndex+Qdrant。8-24 GB显存。完整配置指南。',
        'url': 'https://www.promptquorum.com/zh/local-llms/best-local-llm-stack-use-case',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'about': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
          { '@type': 'SoftwareApplication', 'name': 'OpenWebUI' },
          { '@type': 'SoftwareApplication', 'name': 'Qwen3-Coder' },
          { '@type': 'SoftwareApplication', 'name': 'LlamaIndex' },
          { '@type': 'SoftwareApplication', 'name': 'LangGraph' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': '应该选Ollama还是vLLM？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ollama适合聊天UI + 简单开发。vLLM適合API服务器 + 批量处理。两者不互斥。' } },
          { '@type': 'Question', 'name': 'Ollama可以用于生产环API吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以，但vLLM更快（吐射3–5倍）。Ollama适合<10 req/s，vLLM适合高10+ req/s。' } },
          { '@type': 'Question', 'name': '代码审查最佳本地LLM是什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'vLLM + Qwen3-Coder-7B-Instruct。HumanEval 82%。vLLM并行处理10个文件。RTX 3060 12GB成逗30–50 tok/s。' } },
          { '@type': 'Question', 'name': '简单RAG是否需要向量数据库？', 'acceptedAnswer': { '@type': 'Answer', 'text': '<100个文档：内存Embedding（np.ndarray）即可。>100个文档：建议Qdrant或Weaviate。' } },
          { '@type': 'Question', 'name': 'LangGraph对于简单聊天机器人是否过于复杂？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。直接用Ollama或vLLM即可。LangGraph适合多步骤工作流场景。' } },
          { '@type': 'Question', 'name': '可以同时使用Ollama和vLLM吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。同一台机器不同端口并运。例：Ollama负责聊天UI，vLLM负责批量 API。' } },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '按用途本地LLM堆栈指南',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '写作 & 内容创作', 'description': 'Ollama + OpenWebUI + Llama 3.3（24 GB）或Llama 3.2 8B（8 GB）。可调节的上下文窗口（8K–32K）适合长文写作。配置简单，无需编程。本地LLM前端中最佳聊天体验。' },
          { '@type': 'ListItem', 'position': 2, 'name': '软件开发 & 代码审查', 'description': 'vLLM + Qwen3-Coder-7B-Instruct（RTX 3060 12 GB）或-14B（RTX 4070+）。批量推理最快（Ollama的3–5倍）。HumanEval 82%。支持实时补全流式传输与OpenAI兼容API。' },
          { '@type': 'ListItem', 'position': 3, 'name': '本地RAG（文档问答）', 'description': 'LlamaIndex + Ollama/vLLM + Qdrant向量数据库 + FastAPI UI。文档分块、Embedding、检索一体化。Qdrant本地自托管、隐私、高速。Embedding模型质量比LLM大小更重要。' },
          { '@type': 'ListItem', 'position': 4, 'name': 'AI智能体 & 工作流', 'description': 'LangGraph + vLLM（非Ollama）+ 工具定义。显式工具调用和记忆的结构化智能体循环。亚秒级延迟必须vLLM。学习曲线较陈但具备生产水准。' },
          { '@type': 'ListItem', 'position': 5, 'name': '多用户API服务器', 'description': 'vLLM + nginx负载均衡 + Prometheus监控。多卡/实例分布式推理。支持并发10+用户。每用户限流。具备生产级可观测性。' },
          { '@type': 'ListItem', 'position': 6, 'name': '微调 & 研究', 'description': 'HuggingFace Transformers + LoRA + Ollama/vLLM推理。LoRA将显存占用减小10倍。在层用硬件单独训练，在推理机器serving。推荐Llama 3.2和Qwen3（2026年4月起Llama 3.3已不推荐）。' },
          { '@type': 'ListItem', 'position': 7, 'name': '实时流式传输', 'description': 'Ollama（原生流式端点）或vLLM + Server-Sent Events（SSE）。Token流式传输提升感知性能与UX。Ollama配置最简单，vLLM吐射量最高。两者均支持OpenAI兼容流式API。' },
        ],
      },
    },
  ko: {
  freshness_tier: 'semi_annual',
  theme: '도구 및 인터페이스',
  title: '사용 사례별 최적 로컬 LLM 스택 2026: 글쓰기, 코딩, RAG, 에이전트',
  seoTitle: '최적 로컬 LLM 스택 2026: 코딩, RAG, 글쓰기 & 에이전트',
  intro: '**최적의 로컬 LLM 스택은 워크플로에 따라 다릅니다. 작가에게는 Ollama + OpenWebUI + Llama 3.3, 개발자에게는 vLLM + Qwen3-Coder + IDE 확장, 연구자에게는 LangGraph + vLLM이 적합합니다. 2026년 4월 기준, 모든 영역에서 우수한 단일 도구는 존재하지 않습니다.** 이 가이드는 7가지 일반적인 사용 사례를 최적의 스택(백엔드 + UI + 통합)과 하드웨어 등급(VRAM 8~24 GB)에 매핑합니다.',
  metaDescription: '코딩: vLLM + Qwen3-Coder. 글쓰기: Ollama + Llama 3.3. RAG: LlamaIndex + Qdrant. 에이전트: CrewAI. VRAM 등급 8~24 GB 및 설정 명령어 포함. 2026년.',
  twitterDescription: '사용 사례별 로컬 LLM 스택: 코딩 → vLLM + Qwen3-Coder. 글쓰기 → Ollama + Llama 3.3. RAG → LlamaIndex + Qdrant. 에이전트 → LangGraph + vLLM. 2026년 4월 가이드.',
  publishDate: '2026-04-05',
  dateModified: '2026-04-19',
  leadAnswerBlock: '**최적의 로컬 LLM 스택은 워크플로에 따라 다릅니다. 작가에게는 OpenWebUI + Llama 3, 개발자에게는 vLLM + Python SDK, 연구자에게는 LangGraph + 커스텀 스크립트가 필요합니다. 2026년 4월 기준, 모든 영역에서 우수한 단일 도구는 존재하지 않습니다.**',
  audience: 'Ollama 또는 LM Studio에 익숙한 개발자로서 로컬 LLM 워크플로를 최적화하고자 하는 분',
  readTime: '10분 분량',
  educationalLevel: 'Intermediate',
  primaryTerm: 'LLM 스택',
  toc: [
    { label: '요약', anchor: '#tldr' },
    { label: '하드웨어 결정 테이블', anchor: '#hardware' },
    { label: '글쓰기 및 콘텐츠 제작', anchor: '#writing' },
    { label: '소프트웨어 개발 및 코드 리뷰', anchor: '#coding' },
    { label: '로컬 RAG (문서 Q&A)', anchor: '#rag' },
    { label: 'AI 에이전트 및 워크플로', anchor: '#agents' },
    { label: '다중 사용자 API 서버', anchor: '#api' },
    { label: '파인튜닝 및 연구', anchor: '#finetuning' },
    { label: '실시간 채팅 (스트리밍)', anchor: '#streaming' },
    { label: '자주 묻는 질문', anchor: '#faq' },
  ],
  sections: {
    tldr: {
      id: 'tldr',
      isTldr: true,
      items: [
        '**글쓰기/콘텐츠 제작:** Ollama + OpenWebUI. 별도 설정 불필요, 우수한 채팅 UI, 컨텍스트 창 조절 가능.',
        '**코딩/코드 리뷰:** vLLM + FastAPI + VS Code 확장. 배치 처리, 병렬 추론, 스트리밍 지원.',
        '**로컬 RAG:** LlamaIndex + Ollama/vLLM + Qdrant 벡터 DB. 문서 청킹, 임베딩, 검색이 통합되어 있습니다.',
        '**AI 에이전트:** LangGraph + vLLM 백엔드. 도구 사용, 메모리, 계획 루프. 학습 곡선이 가파릅니다.',
        '**다중 사용자 API:** nginx 뒤의 vLLM. 동시 요청 10건 이상 처리 가능. 가장 확장성이 뛰어납니다.',
        '**파인튜닝:** HuggingFace Transformers + LoRA + Ollama(추론용). 학습과 서빙을 분리하여 진행합니다.',
        '**실시간 스트리밍:** Ollama(네이티브 스트리밍) 또는 vLLM + 토큰 스트리밍 엔드포인트. 챗봇에서 최고의 UX를 제공합니다.',
      ],
    },
    'hardware': {
      id: 'hardware',
      title: '빠른 결정: 하드웨어 등급별 스택 (2026년 4월)',
      content: 'GPU/VRAM에 맞는 최적 스택을 선택하십시오. 각 조합은 실제 벤치마크를 기준으로 테스트되었습니다. 코딩 및 에이전트 워크플로는 글쓰기보다 대형 모델의 혜택을 더 크게 받으며, RAG는 LLM 크기보다 임베딩 품질이 더 중요합니다.',
      columns: ['하드웨어', '글쓰기', '코딩', 'RAG', '에이전트'],
      rows: [
        { '하드웨어': '4~8 GB VRAM (GTX 1660, RTX 3050)', '글쓰기': 'Ollama + Phi-4 Mini', '코딩': 'Ollama + Qwen3-Coder-1.5B', 'RAG': 'LlamaIndex + Phi-4 Mini', '에이전트': '권장하지 않음' },
        { '하드웨어': '12 GB VRAM (RTX 3060, RTX 4070)', '글쓰기': 'Ollama + Llama 3.2 8B', '코딩': 'vLLM + Qwen3-Coder-7B', 'RAG': 'LlamaIndex + Llama 3.2 8B', '에이전트': 'LangGraph + Ollama (느림)' },
        { '하드웨어': '16 GB VRAM (RTX 4070 Ti, RTX 4080)', '글쓰기': 'Ollama + Mistral Small 3.1', '코딩': 'vLLM + Qwen3-Coder-14B', 'RAG': 'LlamaIndex + Mistral 3.1', '에이전트': 'LangGraph + vLLM' },
        { '하드웨어': '24 GB VRAM (RTX 3090, RTX 4090)', '글쓰기': 'Ollama + Llama 3.3 70B Q4', '코딩': 'vLLM + Qwen3-Coder-32B', 'RAG': 'LlamaIndex + Llama 3.3 70B', '에이전트': 'LangGraph + vLLM (가장 빠름)' },
      ],
    },
    'writing': {
      id: 'writing',
      content: [
        '**최적 스택: [Ollama](/local-llms/how-to-install-ollama) + [OpenWebUI](/local-llms/open-webui-vs-sillytavern) + 마크다운 편집기**',
        '이 스택을 선택하는 이유: OpenWebUI는 최고의 채팅 UX를 제공합니다. 코딩이 필요하지 않습니다. 컨텍스트 창 유연성(4K~32K)은 장문 글쓰기에서 LM Studio보다 뛰어납니다. 작가에게 클라우드 API보다 경제적입니다.',
      ],
      numberedItems: [
        'VRAM 24 GB의 경우: `ollama pull llama3.3:70b` — 최고 품질, 글쓰기 벤치마크에서 GPT-4(2023)에 필적합니다.',
        'VRAM 16 GB의 경우: `ollama pull mistral-small3.1` — 128K 컨텍스트, 24 GB 미만에서 최고 품질.',
        'VRAM 8 GB의 경우: `ollama pull llama3.2:8b` — 양호한 글쓰기 품질, 소비자 하드웨어에서 빠릅니다.',
        'Docker를 통해 OpenWebUI 설치: `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:latest`.',
        '문서 길이에 따라 OpenWebUI 설정에서 컨텍스트 창(8K~32K 토큰)을 구성하십시오.',
      ],
    },
    'coding': {
      id: 'coding',
      content: [
        '**최적 스택: [vLLM](/local-llms/vllm-performance-guide) + Qwen3-Coder + IDE 확장**',
        '이 스택을 선택하는 이유: Qwen3-Coder는 HumanEval에서 82%를 기록합니다(2026년 4월 기준 최고의 오픈소스 코딩 모델). vLLM은 배치 추론에서 Ollama보다 3~5배 빠릅니다. 네이티브 OpenAI API 호환성으로 기존 IDE 도구에 적합합니다. 실시간 제안을 위한 스트리밍이 활성화됩니다.',
        '',
        '**여러 파일에 대한 AI 기반 코드 리뷰**',
        '여러 파일에 대한 자동 코드 리뷰를 위해 vLLM의 배치 처리를 사용하십시오:',
      ],
      numberedItems: [
        'vLLM 설치: `pip install vllm`.',
        'Qwen3-Coder-7B로 vLLM 서버 시작: `python -m vllm.entrypoints.openai.api_server --model Qwen/Qwen3-Coder-7B-Instruct --port 8000`.',
        'VRAM 16 GB 이상의 경우 14B 사용: `--model Qwen/Qwen3-Coder-14B-Instruct`.',
        'IDE 확장(VS Code Continue.dev, Cursor 등)을 `http://localhost:8000/v1`에 연결하십시오.',
        '코드 리뷰를 위한 배치 처리 활성화: 단일 API 호출로 10개 파일을 병렬 처리합니다(`vllm`은 기본적으로 batch=10을 지원합니다).',
      ],
      codeBlock: `# vLLM 배치 처리를 사용하여 10개 파일을 병렬로 리뷰
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-needed")

code_files = [
    ("utils.py", open("utils.py").read()),
    ("models.py", open("models.py").read()),
    # ... 최대 10개 파일
]

# vLLM은 10개를 병렬로 처리 (배치 요청 1회)
reviews = []
for filename, code in code_files:
    prompt = f"Review this code for bugs, style, and performance:\n\n{code}"
    response = client.chat.completions.create(
        model="Qwen3-Coder-7B-Instruct",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,  # 리뷰 작업에는 결정론적 설정 권장
    )
    reviews.append((filename, response.choices[0].message.content))

for filename, review in reviews:
    print(f"=== {filename} ===\n{review}\n")`,
      codeLanguage: 'python',
    },
    'rag': {
      id: 'rag',
      content: [
        '**최적 스택: LlamaIndex + Ollama/vLLM + Qdrant + FastAPI UI**',
        '이 스택을 선택하는 이유: [LlamaIndex](/local-llms/local-rag-2026)는 청킹 + 검색을 처리합니다. Qdrant는 빠르고, 로컬에서 실행되며, 프라이버시를 보호합니다. Ollama는 임베딩을 무료로 제공하거나 vLLM을 LLM 추론에 사용할 수 있습니다.',
      ],
      numberedItems: [
        'LlamaIndex 설치(`pip install llama-index`).',
        'LlamaIndex에 문서(PDF, TXT, 마크다운)를 로드합니다.',
        '문서를 청킹(기본 1024 토큰)하고 로컬 모델 또는 OpenAI(백업)로 임베딩합니다.',
        'Docker를 통해 로컬에서 실행되는 Qdrant 벡터 DB에 임베딩을 저장합니다.',
        'LlamaIndex를 통해 쿼리합니다: 상위 K개의 유사 문서를 검색하고 컨텍스트와 함께 LLM에 프롬프트를 전달합니다.',
        '웹 UI 또는 IDE 통합을 위해 FastAPI 엔드포인트로 래핑합니다.',
      ],
    },
    'agents': {
      id: 'agents',
      content: [
        '**최적 스택: LangGraph + vLLM + 도구 정의**',
        '이 스택을 선택하는 이유: [LangGraph](/local-llms/local-llm-agents-with-langgraph)는 구조화된 에이전트 플로를 제공합니다. vLLM은 순차적 LLM 호출 10회 이상에도 충분히 빠릅니다. 도구 사용이 명시적이고 디버그 가능합니다.',
      ],
      numberedItems: [
        'LangGraph 설치(`pip install langchain langgraph`).',
        '도구(웹 검색, 계산기, 파일 I/O)를 함수 서명으로 정의합니다.',
        'LLM을 결정 노드로, 도구를 액션 노드로 하는 에이전트 그래프를 생성합니다.',
        '타이트 루프에서 낮은 지연 시간의 LLM 호출을 위해 vLLM 백엔드를 사용합니다.',
        '에이전트 루프를 실행합니다: LLM → 도구 선택 → 도구 실행 → 완료까지 반복.',
      ],
    },
    'api': {
      id: 'api',
      content: [
        '**최적 스택: vLLM + nginx 로드 밸런서 + 모니터링**',
        '이 스택을 선택하는 이유: vLLM은 분산 서빙을 지원합니다. Nginx는 요청을 멀티플렉싱합니다. 듀얼 GPU 시스템에서 동시 사용자 10명 이상으로 확장됩니다. 사용자별 토큰 처리량을 모니터링합니다.',
      ],
      numberedItems: [
        '고정 포트에서 `--served-model-name model-name`으로 vLLM을 배포합니다.',
        '2개 이상의 vLLM 인스턴스(멀티 GPU인 경우 GPU당 하나)에 걸쳐 nginx 로드 밸런싱을 구성합니다.',
        '클라이언트 호환성을 위해 OpenAI 호환 `/v1/chat/completions` 엔드포인트를 사용합니다.',
        'Prometheus 스크레이프 엔드포인트를 통해 모니터링합니다(vLLM은 요청 지연 시간, 처리량 메트릭을 내보냅니다).',
        '사용자별 토큰 버킷 알고리즘으로 속도 제한을 설정합니다.',
      ],
    },
    'finetuning': {
      id: 'finetuning',
      content: [
        '**최적 스택: HuggingFace Transformers + LoRA + Ollama(추론)**',
        '이 스택을 선택하는 이유: LoRA는 파인튜닝 VRAM을 10분의 1로 줄입니다. Ollama는 파인튜닝된 모델을 쉽게 로드합니다. 모듈식 구조: 한 박스에서 학습하고 다른 박스에서 서빙합니다.',
        '',
        '**참고 사항 (2026년 4월):** Meta는 상업적 파인튜닝에서 Llama 3.3을 지원 중단했습니다. Apache 2.0 / 오픈소스 라이선스 조건을 위해 Llama 3.2(`meta-llama/Llama-3.2-1B` 또는 더 큰 모델) 또는 Qwen3(`Qwen/Qwen3-7B`)에서 파인튜닝하십시오. 두 모델 모두 LoRA를 지원하고 Ollama에서 쉽게 로드됩니다.',
      ],
      numberedItems: [
        '`peft` 라이브러리(LoRA)로 파인튜닝하여 VRAM 사용량을 줄입니다.',
        '학습: 모델 VRAM의 4배가 필요합니다(옵티마이저 상태, 그래디언트). 추론과 별도로 실행합니다.',
        'LoRA 어댑터를 HuggingFace Hub 또는 로컬 파일 시스템으로 내보냅니다.',
        'Ollama에서 파인튜닝된 모델 로드: `ollama create mymodel -f Modelfile`.',
        '또는 RLHF를 위해 HuggingFace TRL(Transformers Reinforcement Learning)을 사용합니다.',
      ],
    },
    'streaming': {
      id: 'streaming',
      content: [
        '**최적 스택: Ollama(네이티브 스트리밍) 또는 vLLM + Server-Sent Events (SSE)**',
        '이 스택을 선택하는 이유: 스트리밍은 체감 성능을 향상시킵니다(사용자가 토큰이 나타나는 것을 확인). Ollama가 가장 간단합니다. vLLM은 토큰 처리량이 가장 빠릅니다.',
      ],
      numberedItems: [
        'Ollama: `stream: true`로 `/api/generate`를 호출합니다. 토큰은 줄바꿈으로 구분된 JSON으로 도착합니다.',
        'vLLM: `stream: true`로 `/v1/chat/completions`를 사용합니다. OpenAI 호환 SSE 스트림을 반환합니다.',
        '프론트엔드: EventSource API(JavaScript)를 사용하여 스트림을 소비하고 토큰당 UI를 업데이트합니다.',
        '최저 지연 시간을 위해 배치 처리를 비활성화합니다(batch=1).',
      ],
    },
    'faqSection': {
      id: 'faq',
      faqs: [
        { q: 'Ollama와 vLLM 중 어떤 것을 사용해야 합니까?', a: 'Ollama는 채팅 UI와 간편함에 적합합니다. vLLM은 API 서버, 배치 처리, 성능에 적합합니다. 상호 배타적이지 않으므로 둘 다 실행할 수 있습니다.' },
        { q: 'Ollama를 프로덕션 API에 사용할 수 있습니까?', a: '예, 하지만 vLLM이 더 빠릅니다(처리량 3~5배 높음). Ollama는 초당 10건 미만 요청에 적합합니다. 초당 10건 이상에는 vLLM을 사용하십시오.' },
        { q: '코드 리뷰에 가장 적합한 로컬 LLM은 무엇입니까?', a: 'vLLM + Qwen3-Coder-7B-Instruct입니다. Qwen3-Coder는 HumanEval에서 82%를 기록합니다(최고의 오픈소스). vLLM은 10개 파일을 병렬로 처리합니다. RTX 3060 12GB에서 약 30~50 tok/sec입니다.' },
        { q: '간단한 RAG에 벡터 DB가 필요합니까?', a: '문서 100개 미만의 경우: 인메모리 임베딩(np.ndarray)으로 충분합니다. 100개 이상의 경우: 메모리 과부하를 방지하기 위해 Qdrant 또는 Weaviate를 사용하십시오.' },
        { q: 'LangGraph는 간단한 챗봇에 과도합니까?', a: '예. Ollama 또는 vLLM만 사용하십시오. LangGraph는 다단계 워크플로(에이전트 루프, 계획)를 위한 것입니다.' },
        { q: 'Ollama와 vLLM 백엔드를 혼합할 수 있습니까?', a: '예. 예를 들어, Ollama는 채팅 UI용, vLLM은 배치 API용으로 사용합니다. 같은 머신에서 서로 다른 포트로 실행할 수 있습니다.' },
      ],
    },
    'relatedReading': {
      title: '관련 읽을거리',
      items: [
        '[로컬 LLM을 위한 최고의 AI 코딩 어시스턴트](/local-llms/best-ai-coding-assistant-local-llm) — 코딩 스택을 위한 IDE 선택(Cursor, Continue.dev, Cody).',
        '[2026년 코딩용 최고의 로컬 LLM](/local-llms/best-local-llms-for-coding) — Qwen3-Coder 대 DeepSeek-Coder HumanEval 순위.',
        '[2026년 로컬 RAG 설정](/local-llms/local-rag-2026) — LlamaIndex + Qdrant + Ollama 완전 구현 가이드.',
        '[LangGraph로 로컬 LLM 에이전트 구축](/local-llms/local-llm-agents-with-langgraph) — 단계별 예시가 포함된 에이전트 워크플로 프레임워크.',
        '[Ollama 대 LM Studio](/local-llms/ollama-vs-lm-studio) — 백엔드 비교: CLI 대 GUI, 속도, 배치 처리.',
        '[Open WebUI 대 SillyTavern](/local-llms/open-webui-vs-sillytavern) — 채팅 UI 비교: 전문적 vs 롤플레이.',
        '[로컬 LLM에 VRAM이 얼마나 필요합니까?](/local-llms/how-much-vram-local-llm) — 모델 크기 및 사용 사례별 하드웨어 요구 사항.',
      ],
    },
    'commonMistakes': {
      title: 'LLM 스택 선택 시 일반적인 실수',
      items: [
        '**vLLM 없이 Ollama를 프로덕션 API에 사용하는 것:** Ollama는 초당 10건 미만으로 한계가 있습니다. 동시 사용자 10명 이상을 서빙하는 프로덕션 환경에서는 vLLM이 필수입니다. 배포 전에 부하 테스트로 처리량을 확인하십시오.',
        '**vLLM 백엔드 없이 LangGraph를 실행하는 것:** LangGraph 에이전트는 순차적 LLM 호출을 10회 이상 수행합니다. Ollama는 지연 시간 병목 현상을 유발합니다. 1초 미만의 왕복 시간을 위해 항상 LangGraph와 vLLM을 함께 사용하십시오.',
        '**메모리 관리 없이 같은 GPU에서 Ollama + vLLM을 혼합하는 것:** 두 도구 모두 VRAM에 가중치를 로드합니다. 70B 모델 두 인스턴스를 실행하면 32 GB를 소비합니다. 별도의 GPU를 사용하거나 두 모델을 모두 수용하기 위해 많이 양자화(Q2)하십시오.',
        '**글쓰기에 잘못된 컨텍스트 창을 선택하는 것:** 기본 4K 컨텍스트는 브레인스토밍 세션을 제한합니다. 장문 글쓰기의 경우 OpenWebUI에서 16K~32K 컨텍스트 창을 설정하십시오. 트레이드오프: 추론 속도가 느려집니다(토큰당 2~3배 느림).',
        '**모든 백엔드의 속도가 동일하다고 가정하는 것:** vLLM과 Ollama는 서로 다른 커널을 사용합니다. 동일한 하드웨어에서 vLLM은 추론에서 2~3배 더 빠릅니다. 속도 차이는 백엔드에 있으며, 프론트엔드(OpenWebUI, LM Studio는 단순한 UI)에는 없습니다.',
      ],
    },
    'sources': {
      title: '출처',
      items: [
        '[Ollama GitHub](https://github.com/ollama/ollama) — 공식 문서, 스트리밍 API 사양, 모델 라이브러리.',
        '[vLLM GitHub](https://github.com/lm-sys/vllm) — OpenAI API 호환성, 배치 처리, 연속 배치 문서.',
        '[Qwen3-Coder 기술 보고서](https://qwenlm.github.io/blog/qwen2.5-coder/) — Alibaba Qwen. HumanEval 점수 82%, 코딩 작업 특화. Apache 2.0 라이선스.',
        '[LlamaIndex 문서](https://docs.llamaindex.ai) — 문서 인덱싱, 청킹, RAG 검색 프레임워크.',
        '[LangGraph 문서](https://langchain-ai.github.io/langgraph/) — 에이전트 워크플로 프레임워크, 상태 머신, 도구 사용 패턴.',
        '[Qdrant 문서](https://qdrant.tech/documentation/) — 로컬 임베딩 저장을 위한 벡터 데이터베이스, Docker 지원, Apache 2.0.',
        '[Continue.dev 문서](https://docs.continue.dev/) — 로컬 LLM 백엔드를 사용하는 VS Code 및 JetBrains용 IDE 확장.',
      ],
    },
  },
},
  };
