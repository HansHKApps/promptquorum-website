// Auto-generated from src/lib/local-llms/content.ts
// Slug: local-llm-openai-compatible-api
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Tools & Interfaces',
      title: 'Ollama OpenAI API: Python & Node.js Integration in 3 Steps (Code Examples + Streaming + Tool Calling)',
      seoTitle: 'LM Studio & Ollama OpenAI API: Python & Node.js Setup (2026)',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434), and vLLM (localhost:8000) all expose REST APIs in the OpenAI format. Use the official OpenAI Python or Node.js SDK with any local model by changing two lines: set base_url to your local endpoint and api_key to any string. As of May 2026, this is the standard way to run local LLMs in production Python and Node.js applications without cloud costs or vendor lock-in.',
      metaDescription: 'Setup guides for LM Studio & Ollama OpenAI-compatible API with Python/Node.js code examples, streaming, and function calling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434), and vLLM (localhost:8000) all expose REST APIs in the OpenAI format. Use the official OpenAI Python or Node.js SDK with any local model by changing two lines: set base_url to your local endpoint and api_key to any string.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      dateModified: '2026-05-17',
      readTime: '10 min read',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'OpenAI-compatible API',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'What Is OpenAI Compatibility?', anchor: '#what-is-openai-compatibility' },
        { label: 'Ollama API Endpoint', anchor: '#ollama-api-endpoint' },
        { label: 'Python: Using the Official OpenAI Library', anchor: '#python-openai-library' },
        { label: 'Node.js: OpenAI SDK', anchor: '#nodejs-openai' },
        { label: 'LM Studio: OpenAI-Compatible Server', anchor: '#lm-studio-api' },
        { label: 'JavaScript: Browser Usage', anchor: '#javascript-browser' },
        { label: 'Advanced: Streaming Responses', anchor: '#streaming-responses' },
        { label: 'Advanced: Function Calling', anchor: '#function-calling' },
        { label: 'Local LLM OpenAI APIs by Region', anchor: '#regional-context' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Common Questions', anchor: '#common-questions' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama exposes a REST API at `http://localhost:11434/v1` that mirrors OpenAI\'s API exactly.',
            'Use the OpenAI Python library: change `api_key="openai"` to `api_key="ollama"` and `base_url="http://localhost:11434/v1"`.',
            'Same approach in Node.js: OpenAI SDK, point to localhost:11434.',
            'The OpenAI-compatible API is identical across Ollama, vLLM, and LM Studio -- no code changes needed to switch providers.',
            'As of May 2026, streaming (streaming responses token-by-token) and function calling both work with local models via this API.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '⚡ Quick Facts',
          content: [
            '**Ollama API:** `http://localhost:11434/v1` — mirrors OpenAI\'s `/chat/completions` exactly',
            '**LM Studio API:** `http://localhost:1234/v1` — same format, different port',
            '**vLLM API:** `http://localhost:8000/v1` — production-grade serving',
            '**Code change:** 2 lines — `base_url` and `api_key`. All other code stays identical.',
            '**Supported:** Chat completions, text completions, embeddings, streaming, function calling',
            '**Authentication:** None by default — localhost access only. Add reverse proxy for network access.',
            '**Model for code examples:** Llama 4 Scout (best quality on 12 GB) or Llama 3.2 3B (lightweight)',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: 'What Does OpenAI-Compatible Mean?',
          content: [
            '**OpenAI-compatible means the API endpoint returns responses in the same format as OpenAI\'s API.** This allows any library or tool built for OpenAI to work with local models by pointing to a different URL. Learn how [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) compare in their implementation of this standard.',
            'Example: The OpenAI Python library sends requests like this:',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'Ollama\'s API accepts the exact same request at `localhost:11434/v1/chat/completions` and returns the response in OpenAI\'s format:',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            'Because the format is identical, you do not need to learn a new API or rewrite your code.',
            '---',
            '🔍 **Did You Know:** The OpenAI API format has become the unofficial standard for all LLM APIs. Anthropic (Claude), Google (Gemini), and every major local inference tool (Ollama, vLLM, LM Studio, llama.cpp) now support it. Code written against this format is truly provider-agnostic — the closest thing the AI industry has to a universal API.',
          ],
          image: '/images/openai-compatible-one-line-change-en.svg',
          imageCaption: 'Switching from OpenAI to Ollama requires changing 2 lines -- base_url and api_key -- all other code stays identical.',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'What Is Ollama\'s API Endpoint?',
          content: '**When you run `ollama serve`, Ollama starts a REST API at `http://localhost:11434`.** The OpenAI-compatible endpoints are:',
          rows: [
            { 'Endpoint': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', 'Description': 'Matches `/chat/completions` from OpenAI' },
            { 'Endpoint': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', 'Description': 'Matches `/completions` from OpenAI' },
            { 'Endpoint': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', 'Description': 'Convert text to vectors' },
            { 'Endpoint': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', 'Description': 'List available models' },
          ],
          columns: ['Endpoint', 'URL', 'Description'],
          image: '/images/openai-compatible-api-request-flow-en.svg',
          imageCaption: 'Ollama intercepts the OpenAI-formatted request and runs inference locally -- the response returns in identical OpenAI format, no internet required.',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: 'How to Use Ollama API With Python (OpenAI Library)?',
          content: [
            '**Install the OpenAI library and point it to localhost.**',
            '🔍 **Pro Tip:** Set `OPENAI_BASE_URL=http://localhost:11434/v1` as an environment variable. Many tools (LangChain, LlamaIndex, aider) read this variable automatically — no code changes needed. You can switch between OpenAI and Ollama by changing a single env var.',
          ],
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama4:scout",  # Best quality on 12 GB VRAM (MoE)\n  # model="llama3.2:3b",  # Lightweight alternative for 8 GB RAM\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: 'How to Use Ollama API With Node.js?',
          content: '**Install the OpenAI SDK and connect it to your local Ollama instance.**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama4:scout",       // Best quality on 12 GB VRAM\n  // model: "llama3.2:3b",     // Lightweight for 8 GB RAM\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'How to Use LM Studio OpenAI-Compatible Server (localhost:1234)',
          content: [
            '**LM Studio exposes an OpenAI-compatible API at `http://localhost:1234/v1`.** Enable it under the Local Server tab -- load a model, then click Start Server. The same Python and Node.js code works with LM Studio -- change only the port from 11434 to 1234.',
            'LM Studio is suited for GUI users who want visual model browsing and easy switching between models. Ollama is preferred for scripting, automation, and CI pipelines.',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'Platform': 'LM Studio', 'Port': 'localhost:1234', 'Best For': 'GUI users, visual model management', 'GPU Required': 'No (CPU works)' },
            { 'Platform': 'Ollama', 'Port': 'localhost:11434', 'Best For': 'Scripting, automation, production', 'GPU Required': 'No (CPU works)' },
            { 'Platform': 'vLLM', 'Port': 'localhost:8000', 'Best For': 'Multi-GPU, high-throughput servers', 'GPU Required': 'Recommended' },
          ],
          columns: ['Platform', 'Port', 'Best For', 'GPU Required'],
        },
        javascript: {
          id: 'javascript-browser',
          title: 'How to Use Ollama API From JavaScript in the Browser?',
          content: [
            '**Calling Ollama from browser-side JavaScript requires the browser and server to be on the same machine (or allow CORS).** For security, browser requests to localhost work only if the JavaScript is served from localhost. Check [Best Local LLM Frontends](/local-llms/best-local-llm-frontends) for browser-ready UIs that handle this seamlessly.',
            'If you need to call Ollama from a browser on a different IP, set up a CORS proxy or use a server-side middleware.',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama4:scout",      // Best quality on 12 GB VRAM\n    // model: "llama3.2:3b",    // Lightweight for 8 GB RAM\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: 'How Do You Stream Responses Token-by-Token?',
          content: '**Streaming lets you display responses as they are generated, token by token, instead of waiting for the entire response.** As of May 2026, streaming works with all local models via the OpenAI-compatible API.',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-en.svg',
          imageCaption: 'With stream=True, Ollama delivers the first token in ~0.1s -- users see output immediately instead of waiting for the full response.',
        },
        functionCalling: {
          id: 'function-calling',
          title: 'Can Your Local Model Call Functions?',
          content: [
            '**Yes, as of May 2026, function calling works with local models via the OpenAI API.** You define a function schema, and the model can respond with arguments to pass to your function. This enables [Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding) to integrate with your tool ecosystem.',
            'Function calling support depends on the model. Llama 4 Scout, Qwen3 8B, Gemma 4 9B, and Mistral Small 3.1 all support tool calling reliably. Llama 3.3 8B and Qwen3 7B also support it (legacy). Smaller models (3B) may not reliably produce structured tool call JSON.',
            'In 2026, the Model Context Protocol (MCP) extends function calling into a standardized tool connection layer. MCP lets any client (Claude Code, Cursor, custom apps) connect to any tool server via a single protocol — going beyond the per-request tool definitions shown above. Ollama supports MCP-style tool calling through the standard OpenAI-compatible function calling API. For production tool integrations, MCP is becoming the standard; the function calling examples here remain the foundation.',
            'When using OpenAI-compatible APIs locally, structured output and JSON mode work the same way as with cloud APIs. For enforcing schema compliance and format control across local and cloud models, see [structured output and JSON mode](https://www.promptquorum.com/prompt-engineering/structured-output-and-json-mode).',
            'OpenAI-compatible APIs accept the same prompt formats as the cloud versions — system messages, user messages, and structured output. The full library of [prompt engineering techniques](https://www.promptquorum.com/prompt-engineering) applies directly to local API calls.',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-en.svg',
          imageCaption: 'Function calling flow with Ollama: the local model returns tool_call JSON, and your app executes the function -- supported by Llama 4 Scout, Qwen3 8B, Gemma 4 9B, and Mistral.',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Local LLM OpenAI APIs by Region',
          content: [
            '**EU / GDPR & AI Act:** For EU developers, running Ollama locally ensures GDPR Article 5 compliance (data minimization) -- all inference stays on-device with no data egress to cloud APIs. Ollama downloads from GitHub under MIT license, meeting EU compliance requirements. EU AI Act high-risk system obligations apply from August 2, 2026 (pending Digital Omnibus). Local API inference satisfies GDPR data residency requirements by default. For enterprises, this eliminates vendor lock-in and guarantees data residency.',
            '**Japan / APPI:** Under Japan\'s Act on Protection of Personal Information (APPI), on-premises model inference bypasses cloud data transfer requirements. Ollama + Qwen3 8B runs on standard corporate laptops (8 GB RAM) with improved Japanese language support over Qwen3, with 30-50 tok/sec latency meeting real-time response expectations for Japanese language processing.',
            '**China / CAC:** For deployment under China\'s Cybersecurity Law (CAC Article 37), local inference satisfies data localization mandates -- Ollama + Qwen3 runs on any Linux device without external API calls. Qwen3\'s native Chinese tokenization adds 30-40% efficiency over Llama, reducing local inference overhead.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are Common Mistakes With Local LLM OpenAI APIs?',
          items: [
            '**Forgetting that the API key is ignored.** Ollama requires `api_key="ollama"` (any string works) because it is not authenticating. The real authentication is that the request comes from localhost or your local network, not the internet.',
            '**Not realizing the model name matters.** If you call `/chat/completions` with `model="gpt-4"` but have only pulled `llama3.2:3b` in Ollama, the request will fail. Use the exact model names from `ollama list`.',
            '**Assuming Ollama needs internet.** It does not. The API is entirely local. But if your Python code tries to reach OpenAI\'s servers first (by default), it will fail. Always set `base_url` explicitly.',
            '**CORS errors from browser.** If you call Ollama from a browser-side script and get a CORS error, it means the browser blocked the request for security. See [Local LLMs with VS Code and Cursor](/local-llms/local-llms-with-vscode-cursor) for editor-based solutions that bypass CORS.',
            '**Not setting stream=True when expecting streaming.** If you want token-by-token responses, you must explicitly set `stream=True` in the request. By default, it waits for the full response.',
            '**Using `llama3.2:3b` in examples when better models are available.** Many tutorials still use Llama 3.2 3B because it fits on 8 GB RAM. If you have 12+ GB VRAM, switch to `llama4:scout` — dramatically better quality for the same API code. Only use 3B models for testing API integration, not production workloads.',
            '**Not setting `OLLAMA_NUM_PARALLEL` for concurrent requests.** By default, Ollama processes one request at a time. For multi-user apps or parallel test suites, set `OLLAMA_NUM_PARALLEL=4` (or higher) to handle concurrent API calls. Without this, requests queue and latency spikes.',
            '---',
            '⚠️ **Warning:** Ollama\'s API has NO authentication by default. If you expose it to your network (`OLLAMA_HOST=0.0.0.0`), anyone on that network can send requests, load models, and consume GPU resources. For multi-user or production setups, place a reverse proxy (nginx, Caddy) with authentication in front of Ollama — never expose port 11434 directly to the internet.',
          ],
          image: '/images/openai-compatible-platform-comparison-en.svg',
          imageCaption: 'Ollama (port 11434), vLLM (port 8000), and LM Studio (port 1234) all expose OpenAI-compatible endpoints -- identical client code, different ports and use cases.',
        },
        faqSection: {
          id: 'common-questions',
          title: 'Common Questions About Local LLM APIs',
          faqs: [
            {
              q: 'Do I need to modify my OpenAI code to use Ollama?',
              a: 'No. Set `base_url="http://localhost:11434/v1"` and `api_key="ollama"`. Everything else stays the same. If you have code using the OpenAI library, swap these two lines and it works with your local model.',
            },
            {
              q: 'Can I use the API from a different computer on my network?',
              a: 'Yes. By default, Ollama listens on localhost only. To allow network access, set the environment variable `OLLAMA_HOST=0.0.0.0:11434` before running Ollama. Then point your code to `http://<machine-ip>:11434/v1`. Be careful with security -- use a firewall if this is production.',
            },
            {
              q: 'Does LM Studio have an OpenAI-compatible API?',
              a: 'Yes. LM Studio exposes an OpenAI-compatible API at `http://localhost:1234/v1`. Enable it under the Local Server tab, load a model, then click Start Server. Use the same Python or Node.js code as Ollama -- only the port changes (1234 instead of 11434).',
            },
            {
              q: 'Can I call multiple models simultaneously?',
              a: 'If you have them loaded in Ollama, yes. But note that running two models simultaneously doubles VRAM usage. You must have enough GPU memory.',
            },
            {
              q: 'Is the API authenticated?',
              a: 'No. By default, Ollama\'s API has no authentication. Anyone with access to localhost:11434 can use it. For production with network access, add authentication via a reverse proxy (nginx with Basic Auth, etc.).',
            },
            {
              q: 'How do I use streaming with the Ollama OpenAI API?',
              a: 'Set stream=True in your OpenAI library call. Ollama returns server-sent events (SSE) with each token. In Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).',
            },
            {
              q: 'Does Ollama support function calling / tool use via the API?',
              a: 'Yes, for models that support it (Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral Small 3.1). Legacy models (Llama 3.3 8B, Qwen3 7B) also supported. Pass tools=[] in the API call as you would with OpenAI. Ollama parses tool calls and returns structured JSON. Not all models support this -- check model documentation.',
            },
            {
              q: 'What is MCP and how does it relate to the OpenAI-compatible API?',
              a: 'MCP (Model Context Protocol) is a standardized protocol for connecting AI models to external tools and data sources. It builds on top of function calling — the same `tools=[]` parameter shown in the examples above — but adds a standard server-client architecture so tools are discoverable and reusable across applications. Ollama supports MCP-style tool interactions through its OpenAI-compatible function calling endpoint. For simple integrations, the function calling examples in this article are sufficient. For complex multi-tool workflows, MCP provides a more structured approach.',
            },
            {
              q: 'What is the difference between Ollama /api/generate and /v1/chat/completions?',
              a: '/api/generate is Ollama\'s native single-turn endpoint. /v1/chat/completions is the OpenAI-compatible multi-turn endpoint. Use /v1/chat/completions for all new projects -- it supports conversation history and is compatible with OpenAI libraries.',
            },
            {
              q: 'Can I use vLLM as an OpenAI-compatible API?',
              a: 'Yes. vLLM runs an OpenAI-compatible server at http://localhost:8000/v1 by default. Start it with: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Use the same client code as Ollama.',
            },
            {
              q: 'How do I use the Ollama API with the Node.js openai package?',
              a: 'Import OpenAI from openai. Set baseURL: "http://localhost:11434/v1" and apiKey: "ollama" in the constructor. Then call client.chat.completions.create() exactly as you would with the real OpenAI API -- no other changes needed.',
            },
            {
              q: 'How do I switch between Ollama and OpenAI in the same codebase?',
              a: 'Use an environment variable: set USE_LOCAL=true for Ollama (base_url http://localhost:11434/v1, api_key "ollama") and USE_LOCAL=false for OpenAI. The OpenAI Python library accepts base_url as a constructor argument. Set USE_LOCAL=false in production to switch to OpenAI without changing any other code.',
            },
            {
              q: 'Can I use the OpenAI-compatible API with LangChain?',
              a: 'Yes. Use ChatOpenAI with base_url="http://localhost:11434/v1" and api_key="ollama". This makes Ollama a drop-in replacement for OpenAI in any LangChain pipeline -- RAG chains, agents, and tools all work without modification. LangChain also has a dedicated ChatOllama class for Ollama-specific features.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Setup Ollama to expose the API.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Both expose OpenAI-compatible APIs.',
            '[Best Local LLM Frontends](/local-llms/best-local-llm-frontends) -- UIs that use this API internally.',
            '[Local LLMs with VS Code and Cursor](/local-llms/local-llms-with-vscode-cursor) -- Code editors that use this API.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Different backends that expose this API.',
            '[Local LLM Developer Stack](/local-llms/local-llm-developer-stack) -- For a complete 3-tier stack (CLI → API → production) beyond API compatibility setup.',
            '[Structured Output and JSON Mode](/prompt-engineering/structured-output-and-json-mode) -- Using the API to enforce output format.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- Building multi-step API pipelines with local models.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- API-level format enforcement.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- Official documentation for Ollama\'s OpenAI-compatible REST API endpoints.',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- Documentation for LM Studio\'s OpenAI-compatible Local Server at localhost:1234.',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- Official Python SDK used to connect to both OpenAI and local LLMs via base_url override.',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- vLLM\'s OpenAI-compatible API server docs (port 8000, production use).',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'LM Studio and Ollama OpenAI-Compatible API: Python and Node.js Setup Guide (localhost:1234 and 11434)',
        'description': 'Change one line -- base_url to localhost -- to run Ollama as a drop-in OpenAI API. Python, Node.js, streaming, and function calling all work unchanged.',
        'url': 'https://www.promptquorum.com/local-llms/local-llm-openai-compatible-api?lang=en',
        'datePublished': '2026-04-04',
        'dateModified': '2026-05-05',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'Developers integrating local LLMs into Python, Node.js, or JavaScript applications' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Python Library' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner to Advanced',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Do I need to modify my OpenAI code to use Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Set base_url="http://localhost:11434/v1" and api_key="ollama". Everything else stays the same. If you have existing OpenAI library code, swap these two lines and it works with your local model.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use the Ollama API from a different computer on my network?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. By default, Ollama listens on localhost only. Set OLLAMA_HOST=0.0.0.0:11434 before running Ollama to allow network access. Point code to http://<machine-ip>:11434/v1. Add a firewall or reverse proxy for security.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does LM Studio have an OpenAI-compatible API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. LM Studio exposes an OpenAI-compatible API at http://localhost:1234/v1. Enable it under the Local Server tab. Use the same code as Ollama, changing only the port from 11434 to 1234.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I call multiple models simultaneously via the Ollama API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'If both models are loaded in Ollama, yes. Running two models simultaneously roughly doubles VRAM usage. Ensure you have enough GPU memory before loading multiple models at once.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is the Ollama API authenticated?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. By default, Ollama has no authentication. Anyone with access to localhost:11434 can use it. For network-exposed production use, add authentication via a reverse proxy (nginx with Basic Auth or OAuth2-proxy).'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I use streaming with the Ollama OpenAI API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Set stream=True in your OpenAI library call. Ollama returns server-sent events (SSE) with each token. In Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does Ollama support function calling / tool use via the API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, for models that support it (Llama 3.3 8B, Qwen3 7B, Mistral). Pass tools=[] in the API call as you would with OpenAI. Ollama parses tool calls and returns structured JSON. Not all models support this -- check model documentation.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between Ollama /api/generate and /v1/chat/completions?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '/api/generate is Ollama\'s native single-turn endpoint. /v1/chat/completions is the OpenAI-compatible multi-turn endpoint. Use /v1/chat/completions for all new projects -- it supports conversation history and is compatible with OpenAI libraries.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use vLLM as an OpenAI-compatible API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. vLLM runs an OpenAI-compatible server at http://localhost:8000/v1 by default. Start it with: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Use the same client code as Ollama.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I use the Ollama API with the Node.js openai package?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Import OpenAI from openai. Set baseURL: "http://localhost:11434/v1" and apiKey: "ollama" in the constructor. Then call client.chat.completions.create() exactly as you would with the real OpenAI API -- no other changes needed.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I switch between Ollama and OpenAI in the same codebase?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use an environment variable: set USE_LOCAL=true for Ollama (base_url http://localhost:11434/v1, api_key "ollama") and USE_LOCAL=false for OpenAI. The OpenAI Python library accepts base_url as a constructor argument.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use the OpenAI-compatible API with LangChain?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Use ChatOpenAI with base_url="http://localhost:11434/v1" and api_key="ollama". LangChain also has a dedicated ChatOllama class for Ollama-specific features.',
            }
          },
          {
            '@type': 'Question',
            'name': 'What port does LM Studio use for its OpenAI-compatible API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio uses port 1234. The API base URL is http://localhost:1234/v1. Enable it under the Local Server tab in LM Studio, load a model, then use the OpenAI SDK with base_url="http://localhost:1234/v1" and api_key="lm-studio" (any string).',
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I set up LM Studio as a local OpenAI API server?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Open LM Studio, load a model, go to the Local Server tab, and click Start Server. LM Studio starts an OpenAI-compatible API at http://localhost:1234/v1. Install the OpenAI SDK (pip install openai), then: client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio"). Call client.chat.completions.create() exactly as with OpenAI.',
            }
          }
        ]
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Use LM Studio or Ollama With the OpenAI-Compatible API',
        'description': 'Connect Python or Node.js to LM Studio (localhost:1234) or Ollama (localhost:11434) using the OpenAI SDK.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Install the OpenAI SDK',
            'text': 'Run pip install openai (Python) or npm install openai (Node.js). No platform-specific package needed.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Start LM Studio or Ollama',
            'text': 'For LM Studio: load a model and enable Local Server (port 1234). For Ollama: run ollama serve (port 11434). Both start automatically on their respective ports.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Set base_url and api_key',
            'text': 'LM Studio: base_url="http://localhost:1234/v1", api_key="lm-studio". Ollama: base_url="http://localhost:11434/v1", api_key="ollama". The api_key is ignored locally but required by the SDK.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Call chat.completions.create',
            'text': 'Use client.chat.completions.create(model="model-name", messages=[...]) -- identical to the OpenAI API call. The model name must match what is loaded in LM Studio or installed in Ollama.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Local LLM OpenAI-Compatible API Ports: LM Studio, Ollama, and vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Enable under Local Server tab; GUI-based model management; no GPU required; OpenAI-compatible API' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- Start with ollama serve; best for scripting and automation; no GPU required; OpenAI-compatible API' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- Start with python -m vllm.entrypoints.openai.api_server; GPU recommended; high-throughput production use' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Chat Completions endpoint', 'description': 'POST /v1/chat/completions -- identical endpoint path across LM Studio, Ollama, and vLLM; same client code works with all three' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'The slide deck below covers: the OpenAI-compatible API standard, Ollama endpoint setup, Python and Node.js integration in 3 steps, streaming, function calling, and regional compliance (EU GDPR, Japan APPI, China CAC). Download the PDF as a Local LLM API integration reference card.',
    },
    de: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Tools & Interfaces',
      title: 'OpenAI-kompatible API für lokale LLMs (Ollama, vLLM, LM Studio) - Python & Node.js Guide 2026',
      seoTitle: 'Lokale LLM OpenAI-kompatible API: Setup-Anleitung',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) und vLLM (localhost:8000) stellen REST-APIs bereit, die OpenAI-Format nachahmen. Nutzen Sie die offizielle OpenAI Python oder Node.js SDK mit jedem lokalen Modell, indem Sie nur zwei Zeilen ändern: Setzen Sie base_url auf Ihren lokalen Endpoint und api_key auf beliebige Zeichenfolge. Ab May 2026 ist dies der Standard für lokale LLMs in Produktions-Python und Node.js Anwendungen ohne Cloud-Kosten oder Vendor Lock-in.',
      metaDescription: 'Anleitung für LM Studio & Ollama OpenAI-kompatible API mit Python/Node.js Code-Beispielen, Streaming und Function Calling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434) und vLLM (localhost:8000) stellen REST-APIs in OpenAI-Format bereit. Nutzen Sie die offizielle OpenAI Python oder Node.js SDK mit beliebigem lokalem Modell, indem Sie nur zwei Zeilen ändern: base_url auf localhost setzen und api_key auf beliebige Zeichenfolge.**',
      audience: 'Anfänger, die ihr erstes lokales LLM auf Consumer-Hardware laufen lassen',
      dateModified: '2026-05-17',
      readTime: '10 min read',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'OpenAI-compatible API',
      toc: [
        { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Schnelle Fakten', anchor: '#quick-facts' },
        { label: 'Was ist OpenAI-Kompatibilität?', anchor: '#what-is-openai-compatibility' },
        { label: 'Ollama API Endpoint', anchor: '#ollama-api-endpoint' },
        { label: 'Python: OpenAI Bibliothek nutzen', anchor: '#python-openai-library' },
        { label: 'Node.js: OpenAI SDK', anchor: '#nodejs-openai' },
        { label: 'LM Studio: OpenAI-kompatibler Server', anchor: '#lm-studio-api' },
        { label: 'JavaScript: Browser Nutzung', anchor: '#javascript-browser' },
        { label: 'Fortgeschrittenes: Streaming Responses', anchor: '#streaming-responses' },
        { label: 'Fortgeschrittenes: Function Calling', anchor: '#function-calling' },
        { label: 'Lokale LLM OpenAI APIs nach Region', anchor: '#regional-context' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
        { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama stellt eine REST API unter `http://localhost:11434/v1` bereit, die OpenAI-API exakt abbildet.',
            'Nutzen Sie die OpenAI Python Bibliothek: ändern Sie `api_key="openai"` zu `api_key="ollama"` und setzen Sie `base_url="http://localhost:11434/v1"`.',
            'Gleicher Ansatz in Node.js: OpenAI SDK zeigt auf localhost:11434.',
            'Die OpenAI-kompatible API ist identisch über Ollama, vLLM und LM Studio -- kein Code-Wechsel nötig zum Provideraustausch.',
            'Seit May 2026 funktionieren Streaming (token-für-token Responses) und Function Calling mit lokalen Modellen über diese API.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '⚡ Schnelle Fakten',
          content: [
            '**Ollama API:** `http://localhost:11434/v1` — bildet OpenAI `/chat/completions` exakt ab',
            '**LM Studio API:** `http://localhost:1234/v1` — gleicherFormat, anderer Port',
            '**vLLM API:** `http://localhost:8000/v1` — Produktionsreife Server',
            '**Code-Änderung:** 2 Zeilen — `base_url` und `api_key`. Rest des Codes bleibt identisch.',
            '**Unterstützt:** Chat Completions, Text Completions, Embeddings, Streaming, Function Calling',
            '**Authentifizierung:** Keine standardmäßig — nur Localhost-Zugang. Reverse Proxy für Netzwerkzugang.',
            '**Modell für Code-Beispiele:** Llama 4 Scout (beste Qualität auf 12 GB) oder Llama 3.2 3B (leichtgewichtig)',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: 'Was bedeutet OpenAI-kompatibel?',
          content: [
            '**OpenAI-kompatibel bedeutet, dass der API-Endpoint Responses in gleichem Format wie OpenAI API zurückgibt.** Dies ermöglicht jeder Bibliothek oder jedem Tool, das für OpenAI gebaut wurde, mit lokalen Modellen zu arbeiten, indem nur auf andere URL gezeigt wird. Erfahren Sie, wie [Ollama vs LM Studio](/de/local-llms/ollama-vs-lm-studio) diese Standard-Implementierung vergleichen.',
            'Beispiel: OpenAI Python Bibliothek sendet Requests so:',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'Ollama API akzeptiert exakt denselben Request auf `localhost:11434/v1/chat/completions` und gibt Response in OpenAI Format zurück:',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            'Da das Format identisch ist, müssen Sie keine neue API lernen oder Code umschreiben.',
            '---',
            '🔍 **Wussten Sie:** OpenAI API Format ist de facto Standard für alle LLM APIs geworden. Anthropic (Claude), Google (Gemini), und jedes große lokale Inference Tool (Ollama, vLLM, LM Studio, llama.cpp) unterstützen es jetzt. Code gegen dieses Format ist echte Provider-agnostisch — das nächste zur universalen API, das die AI-Industrie hat.',
          ],
          image: '/images/openai-compatible-one-line-change-en.svg',
          imageCaption: 'Wechsel von OpenAI zu Ollama erfordert 2 Zeilen ändern -- base_url und api_key -- rest des Codes bleibt identisch.',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'Was ist Ollamas API Endpoint?',
          content: '**Wenn Sie `ollama serve` laufen lassen, startet Ollama eine REST API unter `http://localhost:11434`.** OpenAI-kompatible Endpoints sind:',
          rows: [
            { 'Endpoint': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', 'Beschreibung': 'Entspricht `/chat/completions` von OpenAI' },
            { 'Endpoint': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', 'Beschreibung': 'Entspricht `/completions` von OpenAI' },
            { 'Endpoint': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', 'Beschreibung': 'Konvertiert Text zu Vektoren' },
            { 'Endpoint': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', 'Beschreibung': 'Listet verfügbare Modelle' },
          ],
          columns: ['Endpoint', 'URL', 'Beschreibung'],
          image: '/images/openai-compatible-api-request-flow-en.svg',
          imageCaption: 'Ollama fängt OpenAI-formatierten Request ab und führt Inferenz lokal aus -- Response wird in identischem OpenAI Format zurückgegeben, kein Internet erforderlich.',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: 'Wie nutze ich Ollama API mit Python (OpenAI Bibliothek)?',
          content: [
            '**Installieren Sie OpenAI Bibliothek und zeigen Sie auf localhost.**',
            '🔍 **Pro Tipp:** Setzen Sie `OPENAI_BASE_URL=http://localhost:11434/v1` als Umgebungsvariable. Viele Tools (LangChain, LlamaIndex, aider) lesen diese Variable automatisch — keine Code-Änderungen nötig. Sie können zwischen OpenAI und Ollama wechseln, indem Sie nur eine env var ändern.',
          ],
          codeBlock: '# 1. OpenAI Bibliothek installieren\npip install openai\n\n# 2. Mit Ollama verbinden\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # Dummy-Key; Ollama ignoriert ihn\n)\n\n# 3. Request stellen\nresponse = client.chat.completions.create(\n  model="llama4:scout",  # Beste Qualität auf 12 GB VRAM (MoE)\n  # model="llama3.2:3b",  # Leichte Alternative für 8 GB RAM\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: 'Wie nutze ich Ollama API mit Node.js?',
          content: '**Installieren Sie OpenAI SDK und verbinden Sie es mit lokaler Ollama Instance.**',
          codeBlock: '// 1. Installieren\nnpm install openai\n\n// 2. Mit Ollama verbinden\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Request stellen\nconst response = await client.chat.completions.create({\n  model: "llama4:scout",       // Beste Qualität auf 12 GB VRAM\n  // model: "llama3.2:3b",     // Leicht für 8 GB RAM\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'Wie nutze ich LM Studio OpenAI-kompatibler Server (localhost:1234)',
          content: [
            '**LM Studio stellt OpenAI-kompatible API unter `http://localhost:1234/v1` bereit.** Aktivieren Sie unter Local Server Tab -- Modell laden, dann Start Server klicken. Gleicher Python und Node.js Code funktioniert mit LM Studio -- ändern Sie nur Port von 11434 zu 1234.',
            'LM Studio eignet sich für GUI-Nutzer, die visuell Modelle durchsuchen und leicht wechseln wollen. Ollama ist bevorzugt für Scripting, Automatisierung und CI Pipelines.',
          ],
          codeBlock: '# Python: Mit LM Studio verbinden (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # Beliebiger String; LM Studio ignoriert ihn\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # Exakter Modellname in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'Plattform': 'LM Studio', 'Port': 'localhost:1234', 'Beste für': 'GUI Nutzer, visuelles Modell-Management', 'GPU erforderlich': 'Nein (CPU funktioniert)' },
            { 'Plattform': 'Ollama', 'Port': 'localhost:11434', 'Beste für': 'Scripting, Automatisierung, Produktion', 'GPU erforderlich': 'Nein (CPU funktioniert)' },
            { 'Plattform': 'vLLM', 'Port': 'localhost:8000', 'Beste für': 'Multi-GPU, hochdurchsatzige Server', 'GPU erforderlich': 'Empfohlen' },
          ],
          columns: ['Plattform', 'Port', 'Beste für', 'GPU erforderlich'],
        },
        javascript: {
          id: 'javascript-browser',
          title: 'Wie nutze ich Ollama API von JavaScript im Browser?',
          content: [
            '**Ollama vom Browser-JavaScript aufrufen erfordert, dass Browser und Server auf gleicher Maschine sind (oder CORS erlaubt).** Aus Sicherheitsgründen funktionieren Browser-Requests zu localhost nur, wenn JavaScript auch von localhost serviert wird. Schauen Sie [beste lokale LLM Frontends](/local-llms/best-local-llm-frontends) für Browser-ready UIs, die dies nahtlos handhaben.',
            'Wenn Sie Ollama von Browser auf anderem IP aufrufen müssen, richten Sie CORS Proxy oder Server-seitigen Middleware auf.',
          ],
          codeBlock: '// Browser-seitiges JavaScript (wenn Server localhost:3000, Ollama ist localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama4:scout",      // Beste Qualität auf 12 GB VRAM\n    // model: "llama3.2:3b",    // Leicht für 8 GB RAM\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: 'Wie streame ich Responses Token-für-Token?',
          content: '**Streaming lässt Sie Responses anzeigen, während sie generiert werden, Token für Token, anstatt auf ganze Response zu warten.** Seit May 2026 funktioniert Streaming mit allen lokalen Modellen via OpenAI-kompatible API.',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-en.svg',
          imageCaption: 'Mit stream=True liefert Ollama ersten Token in ~0.1s -- Nutzer sehen Output sofort anstatt auf komplette Response zu warten.',
        },
        functionCalling: {
          id: 'function-calling',
          title: 'Kann mein lokales Modell Funktionen aufrufen?',
          content: [
            '**Ja, seit May 2026 funktioniert Function Calling mit lokalen Modellen via OpenAI API.** Sie definieren Funktions-Schema und Modell kann mit Argumenten zum Aufrufen antworten. Dies ermöglicht [beste lokale LLMs zum Codieren](/local-llms/best-local-llms-for-coding) sich in Ihr Tool-Ökosystem zu integrieren.',
            'Function Calling Support hängt vom Modell ab. Llama 4 Scout, Qwen3 8B, Gemma 4 9B, und Mistral Small 3.1 unterstützen Tool Calling zuverlässig. Llama 3.3 8B und Qwen3 7B unterstützen es auch (legacy). Kleinere Modelle (3B) erzeugen möglicherweise nicht zuverlässig strukturiertes Tool Call JSON.',
            'In 2026 erweitert Model Context Protocol (MCP) Function Calling zu standardisiertem Tool Connection Layer. MCP ermöglicht jedem Client (Claude Code, Cursor, custom Apps) sich über einheitliches Protokoll mit jedem Tool Server zu verbinden — über diese pro-Request Tool Definitionen hinaus. Ollama unterstützt MCP-style Tool Calling durch standard OpenAI-kompatibles Function Calling API. Für Produktion Tool Integrationen wird MCP Standard; die Function Calling Beispiele hier bleiben Grundlage.',
            'Wenn Sie OpenAI-kompatible APIs lokal nutzen, funktionieren structured Output und JSON Mode gleich wie bei Cloud APIs. Für Schema Compliance und Format Kontrolle über lokale und Cloud Modelle, siehe [strukturierte Output und JSON Mode](https://www.promptquorum.com/prompt-engineering/structured-output-and-json-mode).',
            'OpenAI-kompatible APIs akzeptieren gleiche Prompt Formate wie Cloud Versionen — System Messages, User Messages, und Structured Output. Ganze Bibliothek von [Prompt Engineering Techniken](https://www.promptquorum.com/prompt-engineering) wendet sich direkt auf lokale API Aufrufe an.',
          ],
          codeBlock: '# Beispiel: lokales Modell ruft Wetter-Funktion auf\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Prüfen, ob Modell Function Call zurückgab\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-en.svg',
          imageCaption: 'Function Calling Flow mit Ollama: lokales Modell gibt tool_call JSON zurück, und Ihre App führt Funktion aus -- unterstützt von Llama 4 Scout, Qwen3 8B, Gemma 4 9B, und Mistral.',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Lokale LLM OpenAI APIs nach Region',
          content: [
            '**EU / DSGVO & AI Act:** Für EU Entwickler stellt Ollama lokal sicher, dass DSGVO Artikel 5 konform ist (Datensparsamkeit) -- alle Inferenz bleibt on-device ohne Datensicherung zu Cloud APIs. Ollama wird von GitHub unter MIT Lizenz heruntergeladen und erfüllt EU Compliance-Anforderungen. Hochrisiko-Systeme der EU AI Act Verpflichtungen gelten ab August 2, 2026 (ausstehend Digital Omnibus). Lokale API Inferenz erfüllt DSGVO Daten-Residenz-Anforderungen by default. Für Unternehmen eliminiert dies Vendor Lock-in und garantiert Daten-Residenz.',
            '**Japan / APPI:** Unter Japans Act on Protection of Personal Information (APPI), umgeht On-Premises Modell Inferenz Cloud Datentransfer-Anforderungen. Ollama + Qwen3 8B läuft auf Standard-Corporate-Laptops (8 GB RAM) mit verbesserter Japanischer Sprach-Unterstützung über Qwen3, mit 30-50 tok/sek Latenz, die Echtzeit-Response-Erwartungen für Japanische Sprachverarbeitung erfüllt.',
            '**China / CAC:** Für Deployment unter Chinas Cybersecurity Law (CAC Artikel 37), erfüllt lokale Inferenz Daten-Lokalisierungs-Mandates -- Ollama + Qwen3 läuft auf jedem Linux Device ohne externe API Aufrufe. Qwen3\'s native Chinesische Tokenisierung fügt 30-40% Effizienz über Llama hinzu, reduziert lokale Inferenz Overhead.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Was sind häufige Fehler mit lokalen LLM OpenAI APIs?',
          items: [
            '**API Key wird ignoriert vergessen.** Ollama erfordert `api_key="ollama"` (beliebiger String funktioniert) da es nicht authentifiziert. Die echte Authentifizierung ist, dass Request von localhost kommt oder lokalem Netzwerk, nicht Internet.',
            '**Nicht realisieren, dass Modellname zählt.** Wenn Sie `/chat/completions` mit `model="gpt-4"` aufrufen aber nur `llama3.2:3b` in Ollama gepullt haben, schlägt Request fehl. Verwenden Sie exakte Modellnamen von `ollama list`.',
            '**Annehmen Ollama braucht Internet.** Das macht es nicht. API ist vollständig lokal. Aber wenn Ihr Python Code versucht, zuerst OpenAI Server zu erreichen (default), schlägt es fehl. Setzen Sie `base_url` immer explizit.',
            '**CORS Fehler vom Browser.** Wenn Sie Ollama von Browser-Skript aufrufen und CORS Fehler bekommen, hat Browser Request aus Sicherheit blockiert. Siehe [Lokale LLMs mit VS Code und Cursor](/local-llms/local-llms-with-vscode-cursor) für Editor-basierte Lösungen, die CORS umgehen.',
            '**Nicht stream=True setzen wenn Streaming erwartet.** Wenn Sie Token-für-Token Responses wollen, müssen Sie explizit `stream=True` setzen. Default wartet auf ganze Response.',
            '**`llama3.2:3b` in Beispielen verwenden wenn bessere Modelle verfügbar.** Viele Tutorials verwenden Llama 3.2 3B da es auf 8 GB RAM passt. Wenn Sie 12+ GB VRAM haben, wechseln Sie zu `llama4:scout` — dramatisch bessere Qualität für gleichen API Code. Verwenden Sie 3B Modelle nur für API Integration Testen, nicht Produktions-Workloads.',
            '**`OLLAMA_NUM_PARALLEL` für concurrent Requests nicht setzen.** Default verarbeitet Ollama einen Request aufs Mal. Für Multi-User Apps oder parallele Test Suites, setzen Sie `OLLAMA_NUM_PARALLEL=4` (oder höher) um concurrent API Calls zu handhaben. Ohne das, Requests queue und Latenz spikt.',
            '---',
            '⚠️ **Warnung:** Ollama API hat KEINE Authentifizierung by default. Wenn Sie es für Netzwerk freigeben (`OLLAMA_HOST=0.0.0.0`), jeder auf dem Netzwerk kann Requests senden, Modelle laden, und GPU Ressourcen verbrauchen. Für Multi-User oder Produktions Setups, stellen Sie Reverse Proxy (nginx, Caddy) mit Authentifizierung vor Ollama -- geben Sie Port 11434 niemals direkt an Internet frei.',
          ],
          image: '/images/openai-compatible-platform-comparison-en.svg',
          imageCaption: 'Ollama (Port 11434), vLLM (Port 8000), und LM Studio (Port 1234) stellen alle OpenAI-kompatible Endpoints bereit -- identischer Client Code, unterschiedliche Ports und Use Cases.',
        },
        faqSection: {
          id: 'common-questions',
          title: 'Häufig gestellte Fragen über lokale LLM APIs',
          faqs: [
            {
              q: 'Muss ich meinen OpenAI Code ändern um Ollama zu nutzen?',
              a: 'Nein. Setzen Sie `base_url="http://localhost:11434/v1"` und `api_key="ollama"`. Alles andere bleibt gleich. Wenn Sie Code mit OpenAI Bibliothek haben, tauschen Sie diese zwei Zeilen aus und es funktioniert mit Ihrem lokalen Modell.',
            },
            {
              q: 'Kann ich API von anderem Computer auf meinem Netzwerk nutzen?',
              a: 'Ja. Default hört Ollama nur auf localhost. Um Netzwerk Zugang zu erlauben, setzen Sie Umgebungsvariable `OLLAMA_HOST=0.0.0.0:11434` bevor Sie Ollama laufen lassen. Dann zeigen Sie Ihren Code auf `http://<machine-ip>:11434/v1`. Seien Sie mit Sicherheit vorsichtig -- nutzen Sie Firewall wenn das Produktion ist.',
            },
            {
              q: 'Hat LM Studio OpenAI-kompatible API?',
              a: 'Ja. LM Studio stellt OpenAI-kompatible API unter `http://localhost:1234/v1` bereit. Aktivieren Sie unter Local Server Tab, laden Sie Modell, dann klicken Sie Start Server. Nutzen Sie gleichen Python oder Node.js Code wie Ollama -- nur Port ändert sich (1234 statt 11434).',
            },
            {
              q: 'Kann ich mehrere Modelle gleichzeitig aufrufen?',
              a: 'Wenn Sie sie in Ollama geladen haben, ja. Aber beachten Sie, dass zwei Modelle gleichzeitig laufen VRAM Nutzung verdoppelt. Sie müssen genug GPU Speicher haben.',
            },
            {
              q: 'Ist API authentifiziert?',
              a: 'Nein. By default hat Ollama API keine Authentifizierung. Jeder mit Zugang zu localhost:11434 kann sie nutzen. Für Produktion mit Netzwerk Zugang, fügen Sie Authentifizierung über Reverse Proxy (nginx mit Basic Auth, etc.) hinzu.',
            },
            {
              q: 'Wie nutze ich Streaming mit Ollama OpenAI API?',
              a: 'Setzen Sie stream=True in Ihrem OpenAI Bibliotheks Aufruf. Ollama gibt Server-Sent Events (SSE) mit jedem Token zurück. In Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).',
            },
            {
              q: 'Unterstützt Ollama Function Calling / Tool Use via API?',
              a: 'Ja, für Modelle die es unterstützen (Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral Small 3.1). Legacy Modelle (Llama 3.3 8B, Qwen3 7B) auch unterstützt. Übergeben Sie tools=[] im API Aufruf wie Sie es mit OpenAI täten. Ollama parst Tool Calls und gibt strukturiertes JSON zurück. Nicht alle Modelle unterstützen das -- schau Modell Dokumentation.',
            },
            {
              q: 'Was ist MCP und wie bezieht sich das auf OpenAI-kompatible API?',
              a: 'MCP (Model Context Protocol) ist standardisiertes Protokoll zum Verbinden von AI Modellen mit externen Tools und Datenquellen. Es basiert auf Function Calling — gleicher `tools=[]` Parameter wie oben -- aber fügt standardisierten Server-Client Architektur hinzu damit Tools entdeckbar und wiederverwendbar über Applikationen sind. Ollama unterstützt MCP-style Tool Interaktionen durch sein OpenAI-kompatibles Function Calling Endpoint. Für einfache Integrationen reichen Function Calling Beispiele hier. Für komplexe Multi-Tool Workflows bietet MCP strukturierteren Ansatz.',
            },
            {
              q: 'Unterschied zwischen Ollama /api/generate und /v1/chat/completions?',
              a: '/api/generate ist Ollamas natives Single-Turn Endpoint. /v1/chat/completions ist OpenAI-kompatibles Multi-Turn Endpoint. Nutzen Sie /v1/chat/completions für alle neuen Projekte -- es unterstützt Konversations-History und ist kompatibel mit OpenAI Bibliotheken.',
            },
            {
              q: 'Kann ich vLLM als OpenAI-kompatible API nutzen?',
              a: 'Ja. vLLM läuft OpenAI-kompatible Server unter http://localhost:8000/v1 by default. Starten Sie mit: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Nutzen Sie gleichen Client Code wie Ollama.',
            },
            {
              q: 'Wie nutze ich Ollama API mit Node.js openai Package?',
              a: 'Importieren Sie OpenAI aus openai. Setzen Sie baseURL: "http://localhost:11434/v1" und apiKey: "ollama" im Constructor. Rufen Sie dann client.chat.completions.create() exakt wie mit echter OpenAI API auf -- keine anderen Änderungen nötig.',
            },
            {
              q: 'Wie wechsle ich zwischen Ollama und OpenAI in gleicher Codebase?',
              a: 'Nutzen Sie Umgebungsvariable: Setzen Sie USE_LOCAL=true für Ollama (base_url http://localhost:11434/v1, api_key "ollama") und USE_LOCAL=false für OpenAI. OpenAI Python Bibliothek akzeptiert base_url als Constructor Argument. Setzen Sie USE_LOCAL=false in Produktion um zu OpenAI zu wechseln ohne Code zu ändern.',
            },
            {
              q: 'Kann ich OpenAI-kompatible API mit LangChain nutzen?',
              a: 'Ja. Nutzen Sie ChatOpenAI mit base_url="http://localhost:11434/v1" und api_key="ollama". Das macht Ollama Drop-in Replacement für OpenAI in jedem LangChain Pipeline -- RAG Chains, Agents, und Tools funktionieren ohne Änderung. LangChain hat auch dedizierte ChatOllama Klasse für Ollama-spezifische Features.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Lektüre',
          items: [
            '[Wie installiere ich Ollama](/local-llms/how-to-install-ollama) -- Ollama Setup um API freizugeben.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Beide geben OpenAI-kompatible APIs frei.',
            '[Beste lokale LLM Frontends](/local-llms/best-local-llm-frontends) -- UIs die diese API intern nutzen.',
            '[Lokale LLMs mit VS Code und Cursor](/local-llms/local-llms-with-vscode-cursor) -- Code Editoren die diese API nutzen.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Unterschiedliche Backends die diese API freigeben.',
            '[Lokaler LLM Entwickler Stack](/local-llms/local-llm-developer-stack) -- Für kompletten 3-Tier Stack (CLI → API → Produktion) über API Kompatibilität Setup hinaus.',
            '[Strukturierte Output und JSON Mode](/prompt-engineering/structured-output-and-json-mode) -- Nutze API um Output Format durchzusetzen.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- Baue Multi-Step API Pipelines mit lokalen Modellen.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- API-Level Format Enforcement.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- Offizielle Dokumentation für Ollama OpenAI-kompatible REST API Endpoints.',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- Dokumentation für LM Studio OpenAI-kompatibler Local Server auf localhost:1234.',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- Offizielle Python SDK um sich mit OpenAI und lokalen LLMs via base_url Override zu verbinden.',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- vLLM OpenAI-kompatible API Server Docs (Port 8000, Produktions Nutzung).',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'LM Studio und Ollama OpenAI-kompatible API: Python und Node.js Setup Guide (localhost:1234 und 11434)',
        'description': 'Ändere eine Zeile -- base_url zu localhost -- um Ollama als Drop-in OpenAI API zu laufen. Python, Node.js, Streaming und Function Calling funktionieren alle unverändert.',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-05-17',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'Entwickler, die lokale LLMs in Python, Node.js, oder JavaScript Anwendungen integrieren' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'lokale LLM Inferenz' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Python Bibliothek' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner to Advanced',
        'proficiencyLevel': 'Intermediate',
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'Die Präsentation unten behandelt: den OpenAI-kompatiblen API-Standard, Ollama-Endpoint-Setup, Python- und Node.js-Integration in 3 Schritten, Streaming, Function Calling und regionale Compliance (EU DSGVO, Japan APPI, China CAC). PDF als lokale LLM-API-Integrations-Referenzkarte herunterladen.',
    },
    fr: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Outils & Interfaces',
      title: 'API compatible OpenAI pour LLM locaux (Ollama, vLLM, LM Studio) - Guide Python & Node.js 2026',
      seoTitle: 'LM Studio & Ollama API OpenAI : Guide Python & Node.js 2026',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) et vLLM (localhost:8000) exposent tous des API REST au format OpenAI. Utilisez le SDK Python ou Node.js officiel d\'OpenAI avec n\'importe quel modèle local en modifiant deux lignes : définissez base_url sur votre endpoint local et api_key sur n\'importe quelle chaîne. Depuis avril 2026, c\'est le moyen standard d\'exécuter des LLM locaux en production sans coûts cloud ni dépendance fournisseur.',
      metaDescription: 'Guides de configuration pour LM Studio & Ollama API compatible OpenAI avec code Python/Node.js, streaming et appels de fonction.',
      publishDate: '2026-04-04',
      dateModified: '2026-05-17',
      readTime: '10 min de lecture',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'API compatible OpenAI',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que la compatibilité OpenAI ?', anchor: '#what-is-openai-compatibility' },
        { label: 'Endpoint API Ollama', anchor: '#ollama-api-endpoint' },
        { label: 'Python : utiliser la bibliothèque OpenAI', anchor: '#python-openai-library' },
        { label: 'Node.js : SDK OpenAI', anchor: '#nodejs-openai' },
        { label: 'LM Studio : serveur compatible OpenAI', anchor: '#lm-studio-api' },
        { label: 'JavaScript : utilisation dans le navigateur', anchor: '#javascript-browser' },
        { label: 'Avancé : réponses en streaming', anchor: '#streaming-responses' },
        { label: 'Avancé : appels de fonctions', anchor: '#function-calling' },
        { label: 'API LLM locaux par région', anchor: '#regional-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Questions fréquentes', anchor: '#common-questions' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama expose une API REST sur `http://localhost:11434/v1` qui reproduit exactement l\'API OpenAI.',
            'Bibliothèque Python OpenAI : remplacez `api_key="openai"` par `api_key="ollama"` et définissez `base_url="http://localhost:11434/v1"`.',
            'Même approche en Node.js : SDK OpenAI pointé vers localhost:11434.',
            'L\'API compatible OpenAI est identique sur Ollama, vLLM et LM Studio -- aucun changement de code pour changer de fournisseur.',
            'Depuis avril 2026, le streaming (token par token) et les appels de fonctions fonctionnent avec les modèles locaux via cette API.',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: 'Que signifie « compatible OpenAI » ?',
          content: [
            '**Compatible OpenAI signifie que l\'endpoint API retourne des réponses dans le même format que l\'API OpenAI.** Tout outil ou bibliothèque conçu pour OpenAI fonctionne avec des modèles locaux en changeant simplement l\'URL. Découvrez comment [Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) implémentent ce standard.',
            'Exemple : la bibliothèque Python OpenAI envoie des requêtes ainsi :',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'L\'API Ollama accepte exactement la même requête sur `localhost:11434/v1/chat/completions` et retourne la réponse au format OpenAI :',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            'Le format étant identique, vous n\'avez pas besoin d\'apprendre une nouvelle API ni de réécrire votre code.',
          ],
          image: '/images/openai-compatible-one-line-change-en.svg',
          imageCaption: 'Passer d\'OpenAI à Ollama nécessite de changer 2 lignes -- base_url et api_key -- tout le reste du code reste identique.',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'Quel est l\'endpoint API d\'Ollama ?',
          content: '**En exécutant `ollama serve`, Ollama démarre une API REST sur `http://localhost:11434`.** Les endpoints compatibles OpenAI sont :',
          rows: [
            { 'Point de terminaison': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', 'Description': 'Correspond à `/chat/completions` d\'OpenAI' },
            { 'Point de terminaison': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', 'Description': 'Correspond à `/completions` d\'OpenAI' },
            { 'Point de terminaison': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', 'Description': 'Convertit du texte en vecteurs' },
            { 'Point de terminaison': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', 'Description': 'Liste les modèles disponibles' },
          ],
          columns: ['Point de terminaison', 'URL', 'Description'],
          image: '/images/openai-compatible-api-request-flow-en.svg',
          imageCaption: 'Ollama intercepte la requête au format OpenAI et exécute l\'inférence en local -- la réponse revient au format OpenAI identique, sans connexion internet.',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: 'Comment utiliser l\'API Ollama avec Python (bibliothèque OpenAI) ?',
          content: '**Installez la bibliothèque OpenAI et pointez-la sur localhost.**',
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: 'Comment utiliser l\'API Ollama avec Node.js ?',
          content: '**Installez le SDK OpenAI et connectez-le à votre instance Ollama locale.**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama3.2:3b",\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'Comment utiliser le serveur compatible OpenAI de LM Studio (localhost:1234) ?',
          content: [
            '**LM Studio expose une API compatible OpenAI sur `http://localhost:1234/v1`.** Activez-la sous l\'onglet Local Server -- chargez un modèle, puis cliquez sur Start Server. Le même code Python et Node.js fonctionne avec LM Studio -- changez uniquement le port de 11434 à 1234.',
            'LM Studio convient aux utilisateurs GUI qui souhaitent parcourir les modèles visuellement. Ollama est préférable pour les scripts, l\'automatisation et les pipelines CI.',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'Plateforme': 'LM Studio', 'Port': 'localhost:1234', 'Idéal pour': 'Utilisateurs GUI, gestion visuelle des modèles', 'GPU requis': 'Non (CPU fonctionne)' },
            { 'Plateforme': 'Ollama', 'Port': 'localhost:11434', 'Idéal pour': 'Scripts, automatisation, production', 'GPU requis': 'Non (CPU fonctionne)' },
            { 'Plateforme': 'vLLM', 'Port': 'localhost:8000', 'Idéal pour': 'Multi-GPU, serveurs haute performance', 'GPU requis': 'Recommandé' },
          ],
          columns: ['Plateforme', 'Port', 'Idéal pour', 'GPU requis'],
        },
        javascript: {
          id: 'javascript-browser',
          title: 'Comment utiliser l\'API Ollama depuis JavaScript dans le navigateur ?',
          content: [
            '**L\'appel d\'Ollama depuis JavaScript côté navigateur nécessite que le navigateur et le serveur soient sur la même machine (ou que CORS soit autorisé).** Pour des raisons de sécurité, les requêtes vers localhost ne fonctionnent que si le JavaScript est servi depuis localhost. Consultez les [Meilleures interfaces LLM locaux](/fr/local-llms/best-local-llm-frontends) pour des UI prêtes pour le navigateur.',
            'Pour appeler Ollama depuis un navigateur sur une IP différente, configurez un proxy CORS ou utilisez un middleware côté serveur.',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama3.2:3b",\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: 'Comment diffuser les réponses token par token ?',
          content: '**Le streaming permet d\'afficher les réponses au fur et à mesure de leur génération, token par token, sans attendre la réponse complète.** Depuis avril 2026, le streaming fonctionne avec tous les modèles locaux via l\'API compatible OpenAI.',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-en.svg',
          imageCaption: 'Avec stream=True, Ollama délivre le premier token en ~0.1s -- les utilisateurs voient la sortie immédiatement.',
        },
        functionCalling: {
          id: 'function-calling',
          title: 'Votre modèle local peut-il appeler des fonctions ?',
          content: [
            '**Oui, depuis avril 2026, les appels de fonctions fonctionnent avec les modèles locaux via l\'API OpenAI.** Vous définissez un schéma de fonction et le modèle peut répondre avec des arguments. Cela permet aux [Meilleurs LLM locaux pour le code](/fr/local-llms/best-local-llms-for-coding) de s\'intégrer à votre écosystème d\'outils.',
            'La prise en charge des appels de fonctions dépend du modèle. Llama 3.3 8B, Qwen3 7B et la plupart des modèles récents la supportent. Les modèles plus petits (3B) peuvent ne pas l\'utiliser de manière fiable.',
            'Lors de l\'utilisation d\'API compatibles OpenAI localement, les sorties structurées et le mode JSON fonctionnent de la même manière qu\'avec les API cloud. Pour contrôler la conformité des schémas et le format sur les modèles locaux et cloud, consultez [sorties structurées et mode JSON](https://www.promptquorum.com/fr/prompt-engineering/structured-output-and-json-mode).',
            'Les APIs compatibles avec OpenAI acceptent les mêmes formats de prompt que les versions cloud — messages système, messages utilisateur et sortie structurée. La bibliothèque complète des [techniques de prompt engineering](https://www.promptquorum.com/prompt-engineering) s\'applique directement aux appels d\'API locaux.',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama3.2:8b",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-en.svg',
          imageCaption: 'Flux d\'appel de fonctions avec Ollama : le modèle local retourne un JSON tool_call, et votre application exécute la fonction.',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'API LLM locaux par région',
          content: [
            '**UE / RGPD :** Pour les développeurs européens, exécuter Ollama en local garantit la conformité à l\'article 5 du RGPD (minimisation des données) -- toute inférence reste sur l\'appareil sans transfert de données vers des API cloud. La CNIL recommande l\'inférence locale pour les applications professionnelles traitant des données sensibles (financières, médicales, juridiques), ce qui fait d\'Ollama et LM Studio des choix privilégiés pour les entreprises soumises au droit français. Pour les entreprises, cela élimine la dépendance fournisseur et garantit la résidence des données.',
            '**Japon / APPI :** En vertu de la loi japonaise sur la protection des informations personnelles (APPI), l\'inférence sur site contourne les exigences de transfert de données cloud. Ollama + Qwen3 7B fonctionne sur des ordinateurs portables d\'entreprise standard (8 Go de RAM) avec une latence de 30 à 50 tok/sec.',
            '**Chine / CAC :** Pour un déploiement sous la loi sur la cybersécurité (article 37 du CAC), l\'inférence locale satisfait les mandats de localisation des données. Ollama + Qwen3 fonctionne sur n\'importe quel appareil Linux sans appels API externes.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs courantes avec les API OpenAI de LLM locaux ?',
          items: [
            '**Oublier que la clé API est ignorée.** Ollama requiert `api_key="ollama"` (n\'importe quelle chaîne fonctionne) car il n\'authentifie pas. La vraie sécurité vient du fait que la requête provient de localhost.',
            '**Ne pas réaliser que le nom du modèle est important.** Si vous appelez `/chat/completions` avec `model="gpt-4"` mais n\'avez téléchargé que `llama3.2:3b` dans Ollama, la requête échouera. Utilisez les noms exacts de `ollama list`.',
            '**Supposer qu\'Ollama nécessite internet.** Ce n\'est pas le cas. Mais si votre code Python tente d\'abord d\'atteindre les serveurs OpenAI, il échouera. Définissez toujours `base_url` explicitement.',
            '**Erreurs CORS depuis le navigateur.** Si vous appelez Ollama depuis un script côté navigateur et obtenez une erreur CORS, le navigateur a bloqué la requête. Voir [LLM locaux avec VS Code et Cursor](/fr/local-llms/local-llms-with-vscode-cursor) pour des solutions.',
            '**Ne pas définir stream=True pour le streaming.** Si vous souhaitez des réponses token par token, vous devez explicitement définir `stream=True`.',
          ],
          image: '/images/openai-compatible-platform-comparison-en.svg',
          imageCaption: 'Ollama (port 11434), vLLM (port 8000) et LM Studio (port 1234) exposent tous des endpoints compatibles OpenAI -- code client identique, ports et cas d\'usage différents.',
        },
        faqSection: {
          id: 'common-questions',
          title: 'Questions fréquentes sur les API LLM locaux',
          faqs: [
            {
              q: 'Dois-je modifier mon code OpenAI pour utiliser Ollama ?',
              a: 'Non. Définissez `base_url="http://localhost:11434/v1"` et `api_key="ollama"`. Tout le reste reste identique. Si vous avez du code utilisant la bibliothèque OpenAI, échangez ces deux lignes et il fonctionne avec votre modèle local.',
            },
            {
              q: 'Puis-je utiliser l\'API depuis un autre ordinateur sur mon réseau ?',
              a: 'Oui. Par défaut, Ollama écoute uniquement sur localhost. Pour autoriser l\'accès réseau, définissez la variable d\'environnement `OLLAMA_HOST=0.0.0.0:11434` avant de lancer Ollama. Pointez ensuite votre code sur `http://<ip-machine>:11434/v1`. Utilisez un pare-feu en production.',
            },
            {
              q: 'LM Studio dispose-t-il d\'une API compatible OpenAI ?',
              a: 'Oui. LM Studio expose une API compatible OpenAI sur `http://localhost:1234/v1`. Activez-la sous l\'onglet Local Server, chargez un modèle, puis cliquez sur Start Server. Utilisez le même code Python ou Node.js qu\'Ollama -- seul le port change (1234 au lieu de 11434).',
            },
            {
              q: 'Puis-je appeler plusieurs modèles simultanément ?',
              a: 'Si vous les avez chargés dans Ollama, oui. Exécuter deux modèles simultanément double l\'utilisation de VRAM. Vous devez disposer de suffisamment de mémoire GPU.',
            },
            {
              q: 'L\'API est-elle authentifiée ?',
              a: 'Non. Par défaut, l\'API d\'Ollama n\'a pas d\'authentification. Toute personne ayant accès à localhost:11434 peut l\'utiliser. Pour la production avec accès réseau, ajoutez une authentification via un reverse proxy (nginx avec Basic Auth, etc.).',
            },
            {
              q: 'Comment utiliser le streaming avec l\'API OpenAI d\'Ollama ?',
              a: 'Définissez stream=True dans votre appel à la bibliothèque OpenAI. Ollama retourne des server-sent events (SSE) pour chaque token. En Python : for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).',
            },
            {
              q: 'Ollama prend-il en charge les appels de fonctions via l\'API ?',
              a: 'Oui, pour les modèles qui le supportent (Llama 3.3 8B, Qwen3 7B, Mistral). Passez tools=[] dans l\'appel API comme vous le feriez avec OpenAI. Ollama analyse les appels d\'outils et retourne du JSON structuré.',
            },
            {
              q: 'Quelle est la différence entre Ollama /api/generate et /v1/chat/completions ?',
              a: '/api/generate est l\'endpoint natif à un tour d\'Ollama. /v1/chat/completions est l\'endpoint compatible OpenAI multi-tours. Utilisez /v1/chat/completions pour tous les nouveaux projets -- il supporte l\'historique de conversation et est compatible avec les bibliothèques OpenAI.',
            },
            {
              q: 'Puis-je utiliser vLLM comme API compatible OpenAI ?',
              a: 'Oui. vLLM exécute un serveur compatible OpenAI sur http://localhost:8000/v1 par défaut. Lancez-le avec : python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Utilisez le même code client qu\'Ollama.',
            },
            {
              q: 'Comment utiliser l\'API Ollama avec le package Node.js openai ?',
              a: 'Importez OpenAI depuis openai. Définissez baseURL: "http://localhost:11434/v1" et apiKey: "ollama" dans le constructeur. Appelez ensuite client.chat.completions.create() exactement comme avec la vraie API OpenAI.',
            },
            {
              q: 'Comment basculer entre Ollama et OpenAI dans le même code ?',
              a: 'Utilisez une variable d\'environnement : définissez USE_LOCAL=true pour Ollama (base_url http://localhost:11434/v1, api_key "ollama") et USE_LOCAL=false pour OpenAI. La bibliothèque Python OpenAI accepte base_url comme argument de constructeur.',
            },
            {
              q: 'Puis-je utiliser l\'API compatible OpenAI avec LangChain ?',
              a: 'Oui. Utilisez ChatOpenAI avec base_url="http://localhost:11434/v1" et api_key="ollama". Cela fait d\'Ollama un remplacement direct d\'OpenAI dans tout pipeline LangChain -- les chaînes RAG, agents et outils fonctionnent sans modification.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Configurer Ollama pour exposer l\'API.',
            '[Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) -- Les deux exposent des API compatibles OpenAI.',
            '[Meilleures interfaces LLM locaux](/fr/local-llms/best-local-llm-frontends) -- Interfaces qui utilisent cette API en interne.',
            '[LLM locaux avec VS Code et Cursor](/fr/local-llms/local-llms-with-vscode-cursor) -- Éditeurs de code qui utilisent cette API.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/fr/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Différents backends exposant cette API.',
            '[Stack développeur LLM local](/fr/local-llms/local-llm-developer-stack) -- Pour une stack complète 3 niveaux au-delà de la compatibilité API.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- Documentation officielle pour les endpoints REST compatibles OpenAI d\'Ollama.',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- Documentation du serveur local compatible OpenAI de LM Studio sur localhost:1234.',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- SDK Python officiel utilisé pour se connecter à OpenAI et aux LLM locaux via base_url.',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- Documentation du serveur API compatible OpenAI de vLLM.',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'API compatible OpenAI pour LLM locaux : Guide Python & Node.js 2026',
        'description': 'Changez une ligne -- base_url vers localhost -- pour utiliser Ollama comme API OpenAI. Python, Node.js, streaming et appels de fonctions fonctionnent sans modification.',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-16',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'API OpenAI' },
          { '@type': 'Thing', 'name': 'inférence LLM locale' },
          { '@type': 'Thing', 'name': 'API REST' },
          { '@type': 'Thing', 'name': 'Bibliothèque Python OpenAI' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Dois-je modifier mon code OpenAI pour utiliser Ollama ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Définissez base_url="http://localhost:11434/v1" et api_key="ollama". Tout le reste reste identique.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser l\'API depuis un autre ordinateur sur mon réseau ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Définissez OLLAMA_HOST=0.0.0.0:11434 avant de lancer Ollama. Pointez le code sur http://<ip-machine>:11434/v1.' } },
          { '@type': 'Question', 'name': 'LM Studio dispose-t-il d\'une API compatible OpenAI ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, sur http://localhost:1234/v1. Activez sous l\'onglet Local Server. Même code qu\'Ollama, seul le port change.' } },
          { '@type': 'Question', 'name': 'L\'API est-elle authentifiée ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Par défaut, aucune authentification. Pour la production exposée sur le réseau, ajoutez une authentification via un reverse proxy.' } },
          { '@type': 'Question', 'name': 'Comment utiliser le streaming avec l\'API Ollama ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Définissez stream=True dans votre appel. Ollama retourne des server-sent events (SSE) avec chaque token.' } },
          { '@type': 'Question', 'name': 'Ollama supporte-t-il les appels de fonctions ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, pour Llama 3.3 8B, Qwen3 7B, Mistral. Passez tools=[] comme avec OpenAI.' } },
          { '@type': 'Question', 'name': 'Quelle différence entre /api/generate et /v1/chat/completions ?', 'acceptedAnswer': { '@type': 'Answer', 'text': '/api/generate est natif Ollama (un tour). /v1/chat/completions est compatible OpenAI (multi-tours). Utilisez /v1/chat/completions pour les nouveaux projets.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser vLLM comme API compatible OpenAI ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. vLLM expose une API sur http://localhost:8000/v1. Même code client qu\'Ollama.' } },
          { '@type': 'Question', 'name': 'Comment utiliser l\'API Ollama avec Node.js ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Définissez baseURL: "http://localhost:11434/v1" et apiKey: "ollama" dans le constructeur OpenAI. Appelez client.chat.completions.create() normalement.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser l\'API compatible OpenAI avec LangChain ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Utilisez ChatOpenAI avec base_url="http://localhost:11434/v1". LangChain dispose aussi d\'une classe ChatOllama dédiée.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment utiliser LM Studio ou Ollama avec l\'API compatible OpenAI',
        'description': 'Connectez Python ou Node.js à LM Studio (localhost:1234) ou Ollama (localhost:11434) avec le SDK OpenAI.',
        'step': [
          { '@type': 'HowToStep', 'name': 'Installer le SDK OpenAI', 'text': 'Exécutez pip install openai (Python) ou npm install openai (Node.js). Aucun package spécifique à la plateforme nécessaire.' },
          { '@type': 'HowToStep', 'name': 'Démarrer LM Studio ou Ollama', 'text': 'LM Studio : chargez un modèle et activez Local Server (port 1234). Ollama : exécutez ollama serve (port 11434).' },
          { '@type': 'HowToStep', 'name': 'Définir base_url et api_key', 'text': 'LM Studio : base_url="http://localhost:1234/v1", api_key="lm-studio". Ollama : base_url="http://localhost:11434/v1", api_key="ollama".' },
          { '@type': 'HowToStep', 'name': 'Appeler chat.completions.create', 'text': 'Utilisez client.chat.completions.create(model="nom-modele", messages=[...]) -- identique à l\'appel API OpenAI. Le nom du modèle doit correspondre à celui chargé dans LM Studio ou installé dans Ollama.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Ports API compatibles OpenAI pour LLM locaux : LM Studio, Ollama et vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Activer sous l\'onglet Local Server ; gestion des modèles par interface graphique ; GPU non requis ; API compatible OpenAI' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- Démarrer avec ollama serve ; idéal pour scripts et automatisation ; GPU non requis ; API compatible OpenAI' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- Démarrer avec python -m vllm.entrypoints.openai.api_server ; GPU recommandé ; usage en production haute performance' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Endpoint Chat Completions', 'description': 'POST /v1/chat/completions -- endpoint identique sur LM Studio, Ollama et vLLM ; le même code client fonctionne avec les trois' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'La présentation ci-dessous couvre : le standard API compatible OpenAI, la configuration de l\'endpoint Ollama, l\'intégration Python et Node.js en 3 étapes, le streaming, les appels de fonctions et la conformité régionale (RGPD UE, APPI Japon, CAC Chine). Téléchargez le PDF comme référence d\'intégration API LLM locale.',
    },
    ja: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'ツール＆インターフェース',
      title: 'ローカルLLM向けOpenAI互換API（Ollama・vLLM・LM Studio）- Python / Node.jsガイド 2026',
      seoTitle: 'LM Studio & Ollama OpenAI API：Python & Node.js セットアップガイド 2026',
      intro: 'LM Studio（localhost:1234）、Ollama（localhost:11434）、vLLM（localhost:8000）はすべてOpenAI形式のREST APIを公開しています。公式OpenAI PythonまたはNode.js SDKをどのローカルモデルとでも使用できます。変更するのはbase_urlとapi_keyの2行のみ。2026年4月現在、これがクラウドコストやベンダーロックインなしにローカルLLMを本番アプリで動かす標準的な方法です。',
      metaDescription: 'LM Studio & Ollama OpenAI互換API：Python/Node.jsコード例、ストリーミング、関数呼び出し対応のセットアップガイド。',
      publishDate: '2026-04-04',
      dateModified: '2026-05-17',
      readTime: '10分で読める',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'OpenAI互換API',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'OpenAI互換とは？', anchor: '#what-is-openai-compatibility' },
        { label: 'OllamaのAPIエンドポイント', anchor: '#ollama-api-endpoint' },
        { label: 'Python：OpenAIライブラリの使い方', anchor: '#python-openai-library' },
        { label: 'Node.js：OpenAI SDK', anchor: '#nodejs-openai' },
        { label: 'LM Studio：OpenAI互換サーバー', anchor: '#lm-studio-api' },
        { label: 'JavaScript：ブラウザからの利用', anchor: '#javascript-browser' },
        { label: '上級：ストリーミングレスポンス', anchor: '#streaming-responses' },
        { label: '上級：Function Calling', anchor: '#function-calling' },
        { label: 'ローカルLLM OpenAI APIの地域別状況', anchor: '#regional-context' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: 'よくある質問', anchor: '#common-questions' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: '参考資料', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollamaは`http://localhost:11434/v1`にOpenAI APIと完全互換のREST APIを公開します。',
            'Python OpenAIライブラリ：`api_key="openai"`を`api_key="ollama"`に、`base_url="http://localhost:11434/v1"`を設定するだけ。',
            'Node.jsも同様：OpenAI SDKをlocalhost:11434に向けるだけ。',
            'OpenAI互換APIはOllama・vLLM・LM Studioで同一です -- プロバイダーを切り替えてもコード変更不要。',
            '2026年4月現在、ストリーミング（token単位）とFunction CallingがすべてのローカルモデルでこのAPIを通じて動作します。',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: 'OpenAI互換とはどういう意味か？',
          content: [
            '**OpenAI互換とは、APIエンドポイントがOpenAI APIと同じ形式でレスポンスを返すことを意味します。** URLを変更するだけで、OpenAI向けに作られたライブラリやツールがローカルモデルでも動作します。このAPI標準の実装における[Ollama vs LM Studio](/ja/local-llms/ollama-vs-lm-studio)の違いも参照ください。',
            'OpenAI Pythonライブラリはこのような形式でリクエストを送信します：',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'OllamaのAPIは`localhost:11434/v1/chat/completions`で全く同じリクエストを受け付け、OpenAI形式でレスポンスを返します：',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            '形式が同一のため、新しいAPIを学んだりコードを書き直したりする必要はありません。',
          ],
          image: '/images/openai-compatible-one-line-change-en.svg',
          imageCaption: 'OpenAIからOllamaへの切り替えに必要な変更は2行のみ -- base_urlとapi_key。他のコードはすべてそのまま。',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'OllamaのAPIエンドポイントとは？',
          content: '**`ollama serve`を実行すると、Ollamaは`http://localhost:11434`にREST APIを起動します。** OpenAI互換エンドポイントは以下の通りです：',
          rows: [
            { 'エンドポイント': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', '説明': 'OpenAIの`/chat/completions`と同一' },
            { 'エンドポイント': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', '説明': 'OpenAIの`/completions`と同一' },
            { 'エンドポイント': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', '説明': 'テキストをベクトルに変換' },
            { 'エンドポイント': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', '説明': '利用可能なモデルを一覧表示' },
          ],
          columns: ['エンドポイント', 'URL', '説明'],
          image: '/images/openai-compatible-api-request-flow-en.svg',
          imageCaption: 'OllamaはOpenAI形式のリクエストを受け取りローカルで推論を実行 -- レスポンスはOpenAI形式のまま返される。インターネット不要。',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: 'PythonでOllama APIを使う方法（OpenAIライブラリ）',
          content: '**OpenAIライブラリをインストールし、localhostに向けるだけです。**',
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: 'Node.jsでOllama APIを使う方法',
          content: '**OpenAI SDKをインストールし、ローカルOllamaインスタンスに接続します。**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama3.2:3b",\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'LM StudioのOpenAI互換サーバー（localhost:1234）の使い方',
          content: [
            '**LM Studioは`http://localhost:1234/v1`にOpenAI互換APIを公開しています。** Local Serverタブで有効化 -- モデルを読み込み、Start Serverをクリック。PythonとNode.jsのコードはLM Studioでも同様に動作します -- ポートを11434から1234に変更するだけ。',
            'LM StudioはGUIでモデルを視覚的に管理したいユーザーに適しています。スクリプト・自動化・CIパイプラインにはOllamaが推奨されます。',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'プラットフォーム': 'LM Studio', 'ポート': 'localhost:1234', '最適用途': 'GUIユーザー、ビジュアルモデル管理', 'GPU必要': '不要（CPUで動作）' },
            { 'プラットフォーム': 'Ollama', 'ポート': 'localhost:11434', '最適用途': 'スクリプト、自動化、本番環境', 'GPU必要': '不要（CPUで動作）' },
            { 'プラットフォーム': 'vLLM', 'ポート': 'localhost:8000', '最適用途': 'マルチGPU、高スループットサーバー', 'GPU必要': '推奨' },
          ],
          columns: ['プラットフォーム', 'ポート', '最適用途', 'GPU必要'],
        },
        javascript: {
          id: 'javascript-browser',
          title: 'ブラウザのJavaScriptからOllama APIを呼び出す方法',
          content: [
            '**ブラウザ側JavaScriptからOllamaを呼び出すには、ブラウザとサーバーが同じマシンにある（またはCORSを許可する）必要があります。** セキュリティ上、localhostへのブラウザリクエストはJavaScriptもlocalhostから配信される場合のみ動作します。[ベストなローカルLLMフロントエンド](/ja/local-llms/best-local-llm-frontends)ではCORSを処理するブラウザ対応UIを紹介しています。',
            '別のIPのブラウザからOllamaを呼び出す場合はCORSプロキシまたはサーバー側ミドルウェアを設定してください。',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama3.2:3b",\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: 'レスポンスをtoken単位でストリーミングする方法',
          content: '**ストリーミングを使うと、レスポンス全体を待つことなく、生成されるにつれてtoken単位で表示できます。** 2026年4月現在、OpenAI互換APIを通じてすべてのローカルモデルでストリーミングが動作します。',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-en.svg',
          imageCaption: 'stream=Trueを設定するとOllamaは最初のtokenを~0.1秒で配信 -- ユーザーはレスポンス全体を待たずに出力を即座に確認できます。',
        },
        functionCalling: {
          id: 'function-calling',
          title: 'ローカルモデルはFunction Callingに対応していますか？',
          content: [
            '**はい、2026年4月現在、Function CallingがOpenAI APIを通じてローカルモデルで動作します。** 関数スキーマを定義すると、モデルはその関数に渡す引数でレスポンスを返せます。これにより[コーディング向けベストローカルLLM](/ja/local-llms/best-local-llms-for-coding)をツールエコシステムと統合できます。',
            'Function Callingのサポートはモデルによります。Llama 3.3 8B、Qwen3 7B、最新の多くのモデルがサポートしています。小さいモデル（3B）は信頼性が低い場合があります。',
            'ローカルでOpenAI互換APIを使用する場合、構造化出力とJSONモードはクラウドAPIと同じように機能します。ローカルおよびクラウドモデル全体のスキーマ準拠とフォーマット制御については、[構造化出力とJSONモード](https://www.promptquorum.com/ja/prompt-engineering/structured-output-and-json-mode)をご覧ください。',
            'OpenAI互換APIはクラウド版と同じプロンプト形式を受け入れます — システムメッセージ、ユーザーメッセージ、構造化出力。[プロンプトエンジニアリング技法](https://www.promptquorum.com/prompt-engineering)の完全なライブラリがローカルAPI呼び出しに直接適用されます。',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama3.2:8b",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-en.svg',
          imageCaption: 'OllamaでのFunction Callingフロー：ローカルモデルがtool_call JSONを返し、アプリが関数を実行 -- Llama 3.3 8B・Qwen3 7B・Mistralで対応。',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'ローカルLLM OpenAI APIの地域別状況',
          content: [
            '**日本（METI・APPI）：** 経済産業省（METI）は国産AIソブリンティを推進しています。個人情報保護法（APPI）に基づき、オンプレミスモデル推論はクラウドデータ転送要件を回避します。OllamaとLM StudioはMETI AI Governance 2024フレームワークに準拠した企業展開に適しています。Ollama + Qwen3 7Bは標準的な企業ノートPC（8GB RAM）で30〜50 tok/secで動作し、日本語処理のリアルタイム要件を満たします。',
            '**アジア太平洋地域（データ主権）：** 韓国・台湾・東南アジア各国はデータ居住フレームワークを強化しています。ローカル推論はこれらの規制要件を満たし、Q4_K_M量子化により国内サーバー上でのコスト効率の高い展開が可能です。',
            '**グローバル（コスト最適化）：** クラウドコストとベンダー依存なしで本番アプリを運用したい開発者にとって、OllamaのOpenAI互換APIは直接的な代替手段です。既存のOpenAIコードベースを2行の変更でローカル推論に移行できます。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'ローカルLLM OpenAI APIでよくある間違いは？',
          items: [
            '**APIキーが無視されることを忘れる。** Ollamaは`api_key="ollama"`（任意の文字列）を必要としますが、認証は行いません。実際のセキュリティはリクエストがlocalhostから来ることによります。',
            '**モデル名が重要であることに気づかない。** `model="gpt-4"`で呼び出してもOllamaに`llama3.2:3b`しかプルされていなければリクエストは失敗します。`ollama list`から正確なモデル名を使用してください。',
            '**OllamaがインターネットをN必要とすると思い込む。** 不要です。ただしPythonコードがデフォルトでOpenAIのサーバーに接続しようとすると失敗します。`base_url`は必ず明示的に設定してください。',
            '**ブラウザからのCORSエラー。** ブラウザ側スクリプトからOllamaを呼び出してCORSエラーが出た場合、セキュリティ上ブロックされています。[VS Code・CursorでのローカルLLM](/ja/local-llms/local-llms-with-vscode-cursor)でエディタベースの解決策を参照。',
            '**ストリーミング時にstream=Trueを設定しない。** token単位のレスポンスには`stream=True`を明示的に設定する必要があります。デフォルトは完全なレスポンスを待ちます。',
          ],
          image: '/images/openai-compatible-platform-comparison-en.svg',
          imageCaption: 'Ollama（ポート11434）、vLLM（8000）、LM Studio（1234）はすべてOpenAI互換エンドポイントを公開 -- 同じクライアントコード、異なるポートと用途。',
        },
        faqSection: {
          id: 'common-questions',
          title: 'ローカルLLM APIについてのよくある質問',
          faqs: [
            { q: 'OllamaでOpenAIのコードを変更する必要がありますか？', a: '不要です。`base_url="http://localhost:11434/v1"`と`api_key="ollama"`を設定するだけ。他はすべてそのままで動作します。' },
            { q: 'ネットワーク上の別のコンピューターからAPIを使用できますか？', a: 'はい。デフォルトではOllamaはlocalhostのみ。`OLLAMA_HOST=0.0.0.0:11434`を設定してから起動し、コードを`http://<マシンIP>:11434/v1`に向けてください。本番環境ではファイアウォールを設定してください。' },
            { q: 'LM StudioにはOpenAI互換APIがありますか？', a: 'はい。`http://localhost:1234/v1`に公開されています。Local ServerタブでStart Serverをクリック。Ollamaと同じコードでポートを1234に変えるだけです。' },
            { q: '複数のモデルを同時に呼び出せますか？', a: 'Ollamaに読み込まれていれば可能です。ただし2つのモデルを同時に実行するとVRAM使用量が約2倍になります。' },
            { q: 'APIは認証されていますか？', a: 'デフォルトでは認証なし。localhost:11434にアクセスできれば誰でも使用できます。ネットワーク公開する本番環境では、リバースプロキシで認証を追加してください。' },
            { q: 'OllamaのOpenAI APIでストリーミングを使う方法は？', a: 'OpenAIライブラリの呼び出しでstream=Trueを設定します。Ollamaは各tokenのSSEを返します。Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content)。' },
            { q: 'OllamaはAPIを通じたFunction Callingに対応していますか？', a: 'はい、対応モデル（Llama 3.3 8B・Qwen3 7B・Mistral）で動作します。OpenAIと同様にtools=[]を渡すだけです。' },
            { q: 'Ollamaの/api/generateと/v1/chat/completionsの違いは？', a: '/api/generateはOllama独自の1ターンエンドポイント。/v1/chat/completionsはOpenAI互換のマルチターンエンドポイント。新しいプロジェクトでは/v1/chat/completionsを使用してください。' },
            { q: 'vLLMをOpenAI互換APIとして使えますか？', a: 'はい。vLLMはデフォルトでhttp://localhost:8000/v1にOpenAI互換サーバーを起動します。Ollamaと同じクライアントコードが使えます。' },
            { q: 'Node.jsのopenaiパッケージでOllama APIを使う方法は？', a: 'コンストラクタでbaseURL: "http://localhost:11434/v1"とapiKey: "ollama"を設定します。あとはreal OpenAI APIと同様にclient.chat.completions.create()を呼ぶだけです。' },
            { q: '同じコードベースでOllamaとOpenAIを切り替えるには？', a: '環境変数を使用します：USE_LOCAL=trueでOllama（base_url localhost:11434/v1、api_key "ollama"）、USE_LOCAL=falseでOpenAI。Python OpenAIライブラリはbase_urlをコンストラクタ引数として受け付けます。' },
            { q: 'OpenAI互換APIはLangChainで使えますか？', a: 'はい。ChatOpenAIにbase_url="http://localhost:11434/v1"を設定するだけです。LangChainにはOllama専用のChatOllamaクラスもあります。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- APIを公開するためのOllamaセットアップ。',
            '[Ollama vs LM Studio](/ja/local-llms/ollama-vs-lm-studio) -- 両方ともOpenAI互換APIを公開しています。',
            '[ベストなローカルLLMフロントエンド](/ja/local-llms/best-local-llm-frontends) -- このAPIを内部で使用するUI。',
            '[VS Code・CursorでのローカルLLM](/ja/local-llms/local-llms-with-vscode-cursor) -- このAPIを使用するコードエディタ。',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/ja/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- このAPIを公開する異なるバックエンド。',
            '[ローカルLLM開発者スタック](/ja/local-llms/local-llm-developer-stack) -- API互換性設定を超えた完全な3層スタック。',
          ],
        },
        sources: {
          id: 'sources',
          title: '参考資料',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- OllamaのOpenAI互換REST APIエンドポイントの公式ドキュメント。',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- localhost:1234のLM StudioのOpenAI互換ローカルサーバーのドキュメント。',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- base_urlオーバーライドでOpenAIとローカルLLM両方に接続するための公式Python SDK。',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- vLLMのOpenAI互換APIサーバードキュメント（ポート8000、本番用途）。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'ローカルLLM向けOpenAI互換API：Python・Node.jsセットアップガイド 2026',
        'description': 'base_urlをlocalhostに変更するだけでOllamaをOpenAI APIの代替として使用できます。Python・Node.js・ストリーミング・Function Callingがコード変更なしで動作します。',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-16',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'ローカルLLM推論' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Pythonライブラリ' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'OllamaでOpenAIのコードを変更する必要がありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不要です。base_url="http://localhost:11434/v1"とapi_key="ollama"を設定するだけで他はすべてそのまま動作します。' } },
          { '@type': 'Question', 'name': 'LM StudioにはOpenAI互換APIがありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。http://localhost:1234/v1に公開。Local ServerタブでStart Serverをクリック。Ollamaと同じコードでポートを1234に変更するだけです。' } },
          { '@type': 'Question', 'name': 'OllamaのAPIは認証されていますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'デフォルトでは認証なし。ネットワーク公開する場合はリバースプロキシで認証を追加してください。' } },
          { '@type': 'Question', 'name': 'ストリーミングはどのように使いますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'stream=TrueをOpenAIライブラリの呼び出しに設定します。OllamaはSSEで各tokenを返します。' } },
          { '@type': 'Question', 'name': 'Function Callingに対応していますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい、Llama 3.3 8B・Qwen3 7B・MistralでOpenAI APIと同様にtools=[]を渡すだけです。' } },
          { '@type': 'Question', 'name': '/api/generateと/v1/chat/completionsの違いは？', 'acceptedAnswer': { '@type': 'Answer', 'text': '/api/generateはOllama独自の1ターンエンドポイント。/v1/chat/completionsはOpenAI互換のマルチターン。新規プロジェクトでは後者を使用してください。' } },
          { '@type': 'Question', 'name': 'vLLMをOpenAI互換APIとして使えますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。localhost:8000/v1でOpenAI互換サーバーを起動します。Ollamaと同じクライアントコードで動作します。' } },
          { '@type': 'Question', 'name': 'Node.jsでOllama APIを使う方法は？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'baseURL: "http://localhost:11434/v1"とapiKey: "ollama"をコンストラクタに設定し、client.chat.completions.create()を呼ぶだけです。' } },
          { '@type': 'Question', 'name': 'LangChainでOpenAI互換APIは使えますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。ChatOpenAIにbase_url="http://localhost:11434/v1"を設定するだけです。ChatOllamaクラスも利用できます。' } },
          { '@type': 'Question', 'name': '同じコードでOllamaとOpenAIを切り替えるには？', 'acceptedAnswer': { '@type': 'Answer', 'text': '環境変数でbase_urlを切り替えます。USE_LOCAL=trueでlocalhost:11434/v1（api_key "ollama"）、falseでOpenAIを使用します。' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'LM StudioまたはOllamaでOpenAI互換APIを使う方法',
        'description': 'OpenAI SDKを使ってPythonまたはNode.jsをLM Studio（localhost:1234）またはOllama（localhost:11434）に接続します。',
        'step': [
          { '@type': 'HowToStep', 'name': 'OpenAI SDKのインストール', 'text': 'pip install openai（Python）またはnpm install openai（Node.js）を実行。プラットフォーム固有のパッケージは不要です。' },
          { '@type': 'HowToStep', 'name': 'LM StudioまたはOllamaを起動', 'text': 'LM Studio：モデルを読み込みLocal Serverを有効化（ポート1234）。Ollama：ollama serveを実行（ポート11434）。' },
          { '@type': 'HowToStep', 'name': 'base_urlとapi_keyの設定', 'text': 'LM Studio：base_url="http://localhost:1234/v1"、api_key="lm-studio"。Ollama：base_url="http://localhost:11434/v1"、api_key="ollama"。' },
          { '@type': 'HowToStep', 'name': 'chat.completions.createを呼び出す', 'text': 'client.chat.completions.create(model="モデル名", messages=[...])を使用 -- OpenAI APIと同一。モデル名はLM Studioに表示されているものまたはollamaにインストールされているものを使用してください。' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'ローカルLLM OpenAI互換APIポート：LM Studio・Ollama・vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Local Serverタブで有効化；GUIベースのモデル管理；GPU不要；OpenAI互換API' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- ollama serveで起動；スクリプト・自動化に最適；GPU不要；OpenAI互換API' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- python -m vllm.entrypoints.openai.api_serverで起動；GPU推奨；高スループット本番用途' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Chat Completionsエンドポイント', 'description': 'POST /v1/chat/completions -- LM Studio・Ollama・vLLMで同一のエンドポイントパス；同じクライアントコードですべてに対応' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: '以下のスライドは、OpenAI互換APIの標準、Ollamaエンドポイントのセットアップ、3ステップのPythonおよびNode.js統合、ストリーミング、Function Calling、地域コンプライアンス（EU GDPR・日本APPI・中国CAC）を解説します。ローカルLLM API統合リファレンスカードとしてPDFをダウンロード。',
    },
    zh: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: '工具与接口',
      title: '本地LLM的OpenAI兼容API（Ollama、vLLM、LM Studio）-- Python与Node.js指南 2026',
      seoTitle: 'LM Studio & Ollama OpenAI API：Python & Node.js设置指南 2026',
      intro: 'LM Studio（localhost:1234）、Ollama（localhost:11434）和vLLM（localhost:8000）均提供OpenAI格式的REST API。使用官方OpenAI Python或Node.js SDK连接任意本地模型，只需修改两行代码：将base_url设为本地端点，api_key设为任意字符串。截至2026年4月，这是在Python和Node.js生产应用中运行本地LLM的标准方式，无需云端费用或供应商绑定。',
      metaDescription: 'LM Studio & Ollama OpenAI兼容API设置指南，含Python/Node.js代码示例、流式输出和函数调用。',
      publishDate: '2026-04-04',
      dateModified: '2026-05-17',
      readTime: '阅读约10分钟',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'OpenAI兼容API',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '什么是OpenAI兼容性？', anchor: '#what-is-openai-compatibility' },
        { label: 'Ollama API端点', anchor: '#ollama-api-endpoint' },
        { label: 'Python：使用官方OpenAI库', anchor: '#python-openai-library' },
        { label: 'Node.js：OpenAI SDK', anchor: '#nodejs-openai' },
        { label: 'LM Studio：OpenAI兼容服务器', anchor: '#lm-studio-api' },
        { label: 'JavaScript：浏览器端使用', anchor: '#javascript-browser' },
        { label: '进阶：流式响应', anchor: '#streaming-responses' },
        { label: '进阶：函数调用', anchor: '#function-calling' },
        { label: '各地区本地LLM OpenAI API', anchor: '#regional-context' },
        { label: '常见错误', anchor: '#common-mistakes' },
        { label: '常见问题', anchor: '#common-questions' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '参考资料', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama在`http://localhost:11434/v1`公开与OpenAI API完全兼容的REST API。',
            '使用OpenAI Python库：将`api_key="openai"`改为`api_key="ollama"`，设置`base_url="http://localhost:11434/v1"`即可。',
            'Node.js同理：OpenAI SDK指向localhost:11434。',
            'OpenAI兼容API在Ollama、vLLM和LM Studio上完全相同——切换提供商无需修改代码。',
            '截至2026年4月，流式输出（逐token）和函数调用均可通过此API与本地模型配合使用。',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: '什么是OpenAI兼容API？',
          content: [
            '**OpenAI兼容意味着API端点以与OpenAI API相同的格式返回响应。** 只需将URL指向本地，任何为OpenAI构建的库或工具都能与本地模型配合使用。了解[Ollama vs LM Studio](/zh/local-llms/ollama-vs-lm-studio)如何实现此标准。',
            'OpenAI Python库发送如下请求：',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'Ollama的API在`localhost:11434/v1/chat/completions`接受完全相同的请求，并以OpenAI格式返回响应：',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            '由于格式完全相同，您无需学习新API或重写代码。',
          ],
          image: '/images/openai-compatible-one-line-change-en.svg',
          imageCaption: '从OpenAI切换到Ollama只需修改2行——base_url和api_key——其他所有代码保持不变。',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'Ollama的API端点是什么？',
          content: '**运行`ollama serve`时，Ollama在`http://localhost:11434`启动REST API。** OpenAI兼容端点如下：',
          rows: [
            { '端点类型': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', '说明': '与OpenAI的`/chat/completions`完全匹配' },
            { '端点类型': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', '说明': '与OpenAI的`/completions`完全匹配' },
            { '端点类型': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', '说明': '将文本转换为向量' },
            { '端点类型': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', '说明': '列出可用模型' },
          ],
          columns: ['端点类型', 'URL', '说明'],
          image: '/images/openai-compatible-api-request-flow-en.svg',
          imageCaption: 'Ollama拦截OpenAI格式的请求并在本地执行推理——响应以相同的OpenAI格式返回，无需联网。',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: '如何在Python中使用Ollama API（OpenAI库）？',
          content: '**安装OpenAI库并将其指向localhost即可。**',
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: '如何在Node.js中使用Ollama API？',
          content: '**安装OpenAI SDK并将其连接到本地Ollama实例。**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama3.2:3b",\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: '如何使用LM Studio的OpenAI兼容服务器（localhost:1234）？',
          content: [
            '**LM Studio在`http://localhost:1234/v1`公开OpenAI兼容API。** 在Local Server选项卡下启用——加载模型后点击Start Server。同样的Python和Node.js代码可用于LM Studio——只需将端口从11434改为1234。',
            'LM Studio适合希望可视化浏览和切换模型的GUI用户。Ollama更适合脚本、自动化和CI流水线。',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { '平台': 'LM Studio', '端口': 'localhost:1234', '最适用途': 'GUI用户，可视化模型管理', '需要GPU': '否（CPU可运行）' },
            { '平台': 'Ollama', '端口': 'localhost:11434', '最适用途': '脚本、自动化、生产环境', '需要GPU': '否（CPU可运行）' },
            { '平台': 'vLLM', '端口': 'localhost:8000', '最适用途': '多GPU、高吞吐量服务器', '需要GPU': '推荐' },
          ],
          columns: ['平台', '端口', '最适用途', '需要GPU'],
        },
        javascript: {
          id: 'javascript-browser',
          title: '如何从浏览器端JavaScript调用Ollama API？',
          content: [
            '**从浏览器端JavaScript调用Ollama需要浏览器和服务器在同一台机器上（或允许CORS）。** 出于安全原因，对localhost的浏览器请求仅在JavaScript也从localhost提供时才有效。查看[最佳本地LLM界面](/zh/local-llms/best-local-llm-frontends)了解处理此问题的浏览器就绪UI。',
            '如需从不同IP的浏览器调用Ollama，请设置CORS代理或使用服务器端中间件。',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama3.2:3b",\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: '如何逐token流式传输响应？',
          content: '**流式传输让您可以在响应生成时逐token显示，而无需等待完整响应。** 截至2026年4月，流式传输可通过OpenAI兼容API与所有本地模型配合使用。',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama3.2:3b",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-en.svg',
          imageCaption: '设置stream=True后，Ollama在~0.1秒内传递第一个token——用户即时看到输出，无需等待完整响应。',
        },
        functionCalling: {
          id: 'function-calling',
          title: '本地模型可以调用函数吗？',
          content: [
            '**是的，截至2026年4月，函数调用通过OpenAI API在本地模型上可用。** 您定义函数schema，模型可以返回传递给函数的参数。这使[最佳本地LLM编程助手](/zh/local-llms/best-local-llms-for-coding)能够集成到您的工具生态系统中。',
            '函数调用支持取决于模型。Llama 3.3 8B、Qwen3 7B和大多数近期模型支持它。较小的模型（3B）可能不可靠。',
            '在本地使用OpenAI兼容API时，结构化输出和JSON模式的工作方式与云端API相同。关于在本地和云模型中强制执行schema合规性和格式控制，请参阅[结构化输出和JSON模式](https://www.promptquorum.com/zh/prompt-engineering/structured-output-and-json-mode)。',
            '与OpenAI兼容的API接受与云版本相同的提示词格式——系统消息、用户消息和结构化输出。完整的[提示词工程技术](https://www.promptquorum.com/prompt-engineering)库直接适用于本地API调用。',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama3.2:8b",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-en.svg',
          imageCaption: 'Ollama函数调用流程：本地模型返回tool_call JSON，应用执行函数——Llama 3.3 8B、Qwen3 7B和Mistral支持此功能。',
        },
        regionalContext: {
          id: 'regional-context',
          title: '各地区本地LLM OpenAI API',
          content: [
            '**中国（数据安全法）：** 中国2021年《数据安全法》要求大多数AI应用实现本地运行。Ollama在本地执行所有推理，满足数据本地化要求，无外部API调用。Qwen3原生中文分词比Llama效率高30-40%，降低本地推理开销。金融机构、医疗组织和政府部门通过使用Ollama+Qwen3满足数据驻留合规要求，同时保持OpenAI代码库兼容性。',
            '**亚太地区（跨境数据）：** 新加坡、印度尼西亚、泰国和韩国等亚太国家实施严格的数据驻留框架。OllamaOpenAI兼容API允许企业在国内服务器上运行LLM，满足PDPA（泰国）、PDPC（新加坡）和类似法规的合规要求。Q4_K_M量子化使7B-13B模型可在16GB企业服务器上运行，无需专用GPU基础设施。',
            '**企业部署（金融/医疗/法律）：** 银行、医院和律师事务所通过Ollama OpenAI兼容API处理敏感数据，在保持与现有OpenAI工具链兼容的同时，实现完全数据主权。切换只需两行代码——任何LangChain、AutoGen或自定义OpenAI代码库无需重写即可在本地运行。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '使用本地LLM OpenAI API有哪些常见错误？',
          items: [
            '**忘记API密钥被忽略。** Ollama需要`api_key="ollama"`（任何字符串均可），因为它不进行身份验证。真正的安全性来自请求来自localhost或本地网络。',
            '**没意识到模型名称很重要。** 如果您用`model="gpt-4"`调用但Ollama只有`llama3.2:3b`，请求将失败。使用`ollama list`中的确切模型名称。',
            '**认为Ollama需要联网。** 不需要。但如果您的Python代码默认尝试连接OpenAI服务器，它会失败。请始终明确设置`base_url`。',
            '**浏览器CORS错误。** 从浏览器端脚本调用Ollama出现CORS错误时，表示浏览器出于安全原因阻止了请求。参见[VS Code和Cursor使用本地LLM](/zh/local-llms/local-llms-with-vscode-cursor)了解基于编辑器的解决方案。',
            '**期望流式传输时未设置stream=True。** 如需逐token响应，必须显式设置`stream=True`。默认情况下等待完整响应。',
          ],
          image: '/images/openai-compatible-platform-comparison-en.svg',
          imageCaption: 'Ollama（端口11434）、vLLM（8000）和LM Studio（1234）均公开OpenAI兼容端点——相同的客户端代码，不同的端口和用途。',
        },
        faqSection: {
          id: 'common-questions',
          title: '关于本地LLM API的常见问题',
          faqs: [
            { q: '使用Ollama需要修改OpenAI代码吗？', a: '不需要。设置`base_url="http://localhost:11434/v1"`和`api_key="ollama"`。其他一切保持不变。' },
            { q: '可以从网络上的另一台计算机使用API吗？', a: '可以。默认情况下Ollama仅监听localhost。设置`OLLAMA_HOST=0.0.0.0:11434`后启动Ollama，将代码指向`http://<机器IP>:11434/v1`。生产环境请配置防火墙。' },
            { q: 'LM Studio有OpenAI兼容API吗？', a: '有。LM Studio在`http://localhost:1234/v1`公开OpenAI兼容API。在Local Server选项卡下启用。与Ollama代码相同，只需将端口改为1234。' },
            { q: '可以同时调用多个模型吗？', a: '如果模型已加载到Ollama，可以。同时运行两个模型会使VRAM使用量翻倍，需要足够的GPU内存。' },
            { q: 'API需要认证吗？', a: '默认不需要。能访问localhost:11434的任何人都可以使用。生产环境网络访问时，通过反向代理添加认证。' },
            { q: '如何使用Ollama OpenAI API进行流式传输？', a: '在OpenAI库调用中设置stream=True。Ollama为每个token返回server-sent events（SSE）。Python示例：for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content)。' },
            { q: 'Ollama是否通过API支持函数调用？', a: '是的，支持的模型（Llama 3.3 8B、Qwen3 7B、Mistral）可用。与OpenAI一样传递tools=[]，Ollama解析工具调用并返回结构化JSON。' },
            { q: 'Ollama /api/generate与/v1/chat/completions有什么区别？', a: '/api/generate是Ollama原生的单轮端点。/v1/chat/completions是OpenAI兼容的多轮端点。所有新项目请使用/v1/chat/completions。' },
            { q: '可以将vLLM用作OpenAI兼容API吗？', a: '可以。vLLM默认在http://localhost:8000/v1运行OpenAI兼容服务器。使用与Ollama相同的客户端代码。' },
            { q: '如何使用Node.js openai包调用Ollama API？', a: '在构造函数中设置baseURL: "http://localhost:11434/v1"和apiKey: "ollama"，然后正常调用client.chat.completions.create()。' },
            { q: '如何在同一代码库中切换Ollama和OpenAI？', a: '使用环境变量：USE_LOCAL=true时使用Ollama（base_url localhost:11434/v1，api_key "ollama"），false时使用OpenAI。无需其他代码更改。' },
            { q: '可以在LangChain中使用OpenAI兼容API吗？', a: '可以。使用ChatOpenAI并设置base_url="http://localhost:11434/v1"。LangChain还有专用的ChatOllama类。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 设置Ollama以公开API。',
            '[Ollama vs LM Studio](/zh/local-llms/ollama-vs-lm-studio) -- 两者均公开OpenAI兼容API。',
            '[最佳本地LLM界面](/zh/local-llms/best-local-llm-frontends) -- 内部使用此API的UI。',
            '[VS Code和Cursor使用本地LLM](/zh/local-llms/local-llms-with-vscode-cursor) -- 使用此API的代码编辑器。',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/zh/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- 公开此API的不同后端。',
            '[本地LLM开发者技术栈](/zh/local-llms/local-llm-developer-stack) -- 超越API兼容设置的完整三层技术栈。',
          ],
        },
        sources: {
          id: 'sources',
          title: '参考资料',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- Ollama OpenAI兼容REST API端点的官方文档。',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- LM Studio localhost:1234 OpenAI兼容本地服务器的文档。',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- 通过base_url覆盖连接OpenAI和本地LLM的官方Python SDK。',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- vLLM OpenAI兼容API服务器文档（端口8000，生产用途）。',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '本地LLM的OpenAI兼容API：Python与Node.js实战指南 2026',
        'description': '只需将base_url改为localhost，即可用Ollama完全替代OpenAI的Python和Node.js客户端。支持流式输出和函数调用，无需修改代码。',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-16',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': '本地LLM推理' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Python库' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': '使用Ollama需要修改OpenAI代码吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不需要。设置base_url="http://localhost:11434/v1"和api_key="ollama"，其他代码保持不变。' } },
          { '@type': 'Question', 'name': 'LM Studio有OpenAI兼容API吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '有，在http://localhost:1234/v1。在Local Server选项卡下启用。与Ollama代码相同，端口改为1234。' } },
          { '@type': 'Question', 'name': 'API需要认证吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '默认不需要。生产环境通过反向代理添加认证。' } },
          { '@type': 'Question', 'name': '如何使用流式传输？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在OpenAI库调用中设置stream=True。Ollama为每个token返回SSE。' } },
          { '@type': 'Question', 'name': 'Ollama支持函数调用吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的，Llama 3.3 8B、Qwen3 7B、Mistral支持。与OpenAI一样传递tools=[]即可。' } },
          { '@type': 'Question', 'name': '/api/generate与/v1/chat/completions有什么区别？', 'acceptedAnswer': { '@type': 'Answer', 'text': '/api/generate是Ollama原生单轮端点。/v1/chat/completions是OpenAI兼容多轮端点。新项目请使用后者。' } },
          { '@type': 'Question', 'name': '可以将vLLM用作OpenAI兼容API吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。vLLM在localhost:8000/v1提供OpenAI兼容服务器，使用与Ollama相同的客户端代码。' } },
          { '@type': 'Question', 'name': '如何在Node.js中使用Ollama API？', 'acceptedAnswer': { '@type': 'Answer', 'text': '设置baseURL: "http://localhost:11434/v1"和apiKey: "ollama"，正常调用client.chat.completions.create()。' } },
          { '@type': 'Question', 'name': '可以在LangChain中使用OpenAI兼容API吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。ChatOpenAI设置base_url="http://localhost:11434/v1"，或使用专用ChatOllama类。' } },
          { '@type': 'Question', 'name': '如何在代码库中切换Ollama和OpenAI？', 'acceptedAnswer': { '@type': 'Answer', 'text': '使用环境变量控制base_url：本地时用localhost:11434/v1，生产时用OpenAI。无需其他代码更改。' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何将LM Studio或Ollama与OpenAI兼容API配合使用',
        'description': '使用OpenAI SDK将Python或Node.js连接到LM Studio（localhost:1234）或Ollama（localhost:11434）。',
        'step': [
          { '@type': 'HowToStep', 'name': '安装OpenAI SDK', 'text': '运行pip install openai（Python）或npm install openai（Node.js）。无需特定平台的软件包。' },
          { '@type': 'HowToStep', 'name': '启动LM Studio或Ollama', 'text': 'LM Studio：加载模型并启用Local Server（端口1234）。Ollama：运行ollama serve（端口11434）。' },
          { '@type': 'HowToStep', 'name': '设置base_url和api_key', 'text': 'LM Studio：base_url="http://localhost:1234/v1"，api_key="lm-studio"。Ollama：base_url="http://localhost:11434/v1"，api_key="ollama"。' },
          { '@type': 'HowToStep', 'name': '调用chat.completions.create', 'text': '使用client.chat.completions.create(model="模型名", messages=[...])——与OpenAI API调用完全相同。模型名必须与LM Studio中加载的或Ollama中安装的一致。' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '本地LLM OpenAI兼容API端口：LM Studio、Ollama和vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- 在Local Server选项卡下启用；基于GUI的模型管理；无需GPU；OpenAI兼容API' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- 通过ollama serve启动；适合脚本和自动化；无需GPU；OpenAI兼容API' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- 通过python -m vllm.entrypoints.openai.api_server启动；建议使用GPU；高吞吐量生产用途' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Chat Completions端点', 'description': 'POST /v1/chat/completions -- LM Studio、Ollama和vLLM上的相同端点路径；相同的客户端代码适用于所有三者' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: '以下幻灯片涵盖：OpenAI兼容API标准、Ollama端点设置、3步完成Python和Node.js集成、流式传输、函数调用以及地区合规性（数据安全法、亚太跨境数据、企业部署）。将PDF下载为本地LLM API集成参考卡。',
    },
    es: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Tools & Interfaces',
      title: 'API compatible con OpenAI para LLMs locales (Ollama, vLLM, LM Studio) — Guía Python y Node.js 2026',
      seoTitle: 'API OpenAI con LM Studio y Ollama: Python y Node.js 2026',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) y vLLM (localhost:8000) exponen APIs REST en formato OpenAI. Usa el SDK oficial de Python o Node.js de OpenAI con cualquier modelo local cambiando solo dos líneas: establece base_url en tu endpoint local y api_key en cualquier cadena de texto. A partir de mayo de 2026, esta es la forma estándar de ejecutar LLMs locales en aplicaciones Python y Node.js de producción sin costes en la nube ni dependencia de un proveedor.',
      metaDescription: 'Guías de configuración para la API compatible con OpenAI de LM Studio y Ollama con ejemplos de código en Python/Node.js, streaming y function calling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434) y vLLM (localhost:8000) exponen APIs REST en formato OpenAI. Usa el SDK oficial de Python o Node.js de OpenAI con cualquier modelo local cambiando solo dos líneas: establece base_url en tu endpoint local y api_key en cualquier cadena de texto.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      dateModified: '2026-05-17',
      readTime: '10 min de lectura',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'OpenAI-compatible API',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Datos rápidos', anchor: '#quick-facts' },
        { label: '¿Qué es la compatibilidad con OpenAI?', anchor: '#what-is-openai-compatibility' },
        { label: 'Endpoint de la API de Ollama', anchor: '#ollama-api-endpoint' },
        { label: 'Python: uso de la biblioteca oficial de OpenAI', anchor: '#python-openai-library' },
        { label: 'Node.js: SDK de OpenAI', anchor: '#nodejs-openai' },
        { label: 'LM Studio: servidor compatible con OpenAI', anchor: '#lm-studio-api' },
        { label: 'JavaScript: uso en el navegador', anchor: '#javascript-browser' },
        { label: 'Avanzado: respuestas en streaming', anchor: '#streaming-responses' },
        { label: 'Avanzado: function calling', anchor: '#function-calling' },
        { label: 'APIs de LLMs locales por región', anchor: '#regional-context' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Preguntas frecuentes', anchor: '#common-questions' },
        { label: 'Lectura relacionada', anchor: '#related-reading' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama expone una API REST en `http://localhost:11434/v1` que replica exactamente la API de OpenAI.',
            'Usa la biblioteca Python de OpenAI: cambia `api_key="openai"` por `api_key="ollama"` y establece `base_url="http://localhost:11434/v1"`.',
            'El mismo enfoque en Node.js: SDK de OpenAI apuntando a localhost:11434.',
            'La API compatible con OpenAI es idéntica en Ollama, vLLM y LM Studio -- no se necesitan cambios de código para cambiar de proveedor.',
            'A partir de mayo de 2026, el streaming (respuestas token a token) y el function calling funcionan con modelos locales a través de esta API.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '⚡ Datos rápidos',
          content: [
            '**API de Ollama:** `http://localhost:11434/v1` — replica exactamente `/chat/completions` de OpenAI',
            '**API de LM Studio:** `http://localhost:1234/v1` — mismo formato, puerto diferente',
            '**API de vLLM:** `http://localhost:8000/v1` — servicio de calidad de producción',
            '**Cambio de código:** 2 líneas — `base_url` y `api_key`. El resto del código permanece idéntico.',
            '**Soportado:** Chat completions, text completions, embeddings, streaming, function calling',
            '**Autenticación:** Ninguna por defecto — solo acceso desde localhost. Añade un reverse proxy para acceso en red.',
            '**Modelo para los ejemplos de código:** Llama 4 Scout (mejor calidad en 12 GB) o Llama 3.2 3B (ligero)',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: '¿Qué significa compatible con OpenAI?',
          content: [
            '**Compatible con OpenAI significa que el endpoint de la API devuelve respuestas en el mismo formato que la API de OpenAI.** Esto permite que cualquier biblioteca o herramienta construida para OpenAI funcione con modelos locales simplemente apuntando a una URL diferente. Consulta cómo [Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) comparan su implementación de este estándar.',
            'Ejemplo: la biblioteca Python de OpenAI envía peticiones así:',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'La API de Ollama acepta exactamente la misma petición en `localhost:11434/v1/chat/completions` y devuelve la respuesta en formato OpenAI:',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            'Como el formato es idéntico, no necesitas aprender una nueva API ni reescribir tu código.',
            '---',
            '🔍 **¿Sabías que:** El formato de la API de OpenAI se ha convertido en el estándar no oficial para todas las APIs de LLMs. Anthropic (Claude), Google (Gemini) y todas las principales herramientas de inferencia local (Ollama, vLLM, LM Studio, llama.cpp) ahora lo soportan. El código escrito contra este formato es verdaderamente agnóstico al proveedor — lo más parecido a una API universal que tiene la industria de la IA.',
          ],
          image: '/images/openai-compatible-one-line-change-es.svg',
          imageCaption: 'Cambiar de OpenAI a Ollama requiere modificar 2 líneas -- base_url y api_key -- el resto del código permanece idéntico.',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: '¿Cuál es el endpoint de la API de Ollama?',
          content: '**Al ejecutar `ollama serve`, Ollama inicia una API REST en `http://localhost:11434`.** Los endpoints compatibles con OpenAI son:',
          rows: [
            { 'Endpoint': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', 'Descripción': 'Equivale a `/chat/completions` de OpenAI' },
            { 'Endpoint': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', 'Descripción': 'Equivale a `/completions` de OpenAI' },
            { 'Endpoint': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', 'Descripción': 'Convierte texto en vectores' },
            { 'Endpoint': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', 'Descripción': 'Lista los modelos disponibles' },
          ],
          columns: ['Endpoint', 'URL', 'Descripción'],
          image: '/images/openai-compatible-api-request-flow-es.svg',
          imageCaption: 'Ollama intercepta la petición en formato OpenAI y ejecuta la inferencia localmente -- la respuesta se devuelve en el mismo formato OpenAI, sin necesidad de internet.',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: '¿Cómo usar la API de Ollama con Python (biblioteca OpenAI)?',
          content: [
            '**Instala la biblioteca de OpenAI y apúntala a localhost.**',
            '🔍 **Consejo profesional:** Establece `OPENAI_BASE_URL=http://localhost:11434/v1` como variable de entorno. Muchas herramientas (LangChain, LlamaIndex, aider) leen esta variable automáticamente — sin cambios de código. Puedes cambiar entre OpenAI y Ollama modificando solo una variable de entorno.',
          ],
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama4:scout",  # Best quality on 12 GB VRAM (MoE)\n  # model="llama3.2:3b",  # Lightweight alternative for 8 GB RAM\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: '¿Cómo usar la API de Ollama con Node.js?',
          content: '**Instala el SDK de OpenAI y conéctalo a tu instancia local de Ollama.**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama4:scout",       // Best quality on 12 GB VRAM\n  // model: "llama3.2:3b",     // Lightweight for 8 GB RAM\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'Cómo usar el servidor compatible con OpenAI de LM Studio (localhost:1234)',
          content: [
            '**LM Studio expone una API compatible con OpenAI en `http://localhost:1234/v1`.** Actívala en la pestaña Local Server -- carga un modelo y haz clic en Start Server. El mismo código Python y Node.js funciona con LM Studio -- solo cambia el puerto de 11434 a 1234.',
            'LM Studio es adecuado para usuarios de interfaz gráfica que quieren explorar modelos visualmente y cambiar entre ellos fácilmente. Ollama es preferible para scripts, automatización y pipelines de CI.',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'Plataforma': 'LM Studio', 'Puerto': 'localhost:1234', 'Ideal para': 'Usuarios GUI, gestión visual de modelos', 'GPU requerida': 'No (CPU funciona)' },
            { 'Plataforma': 'Ollama', 'Puerto': 'localhost:11434', 'Ideal para': 'Scripts, automatización, producción', 'GPU requerida': 'No (CPU funciona)' },
            { 'Plataforma': 'vLLM', 'Puerto': 'localhost:8000', 'Ideal para': 'Multi-GPU, servidores de alto rendimiento', 'GPU requerida': 'Recomendada' },
          ],
          columns: ['Plataforma', 'Puerto', 'Ideal para', 'GPU requerida'],
        },
        javascript: {
          id: 'javascript-browser',
          title: '¿Cómo usar la API de Ollama desde JavaScript en el navegador?',
          content: [
            '**Llamar a Ollama desde JavaScript del lado del navegador requiere que el navegador y el servidor estén en la misma máquina (o que CORS esté permitido).** Por seguridad, las peticiones del navegador a localhost solo funcionan si el JavaScript también se sirve desde localhost. Consulta [Los mejores frontends de LLMs locales](/es/local-llms/best-local-llm-frontends) para UIs listas para el navegador que gestionan esto de forma transparente.',
            'Si necesitas llamar a Ollama desde un navegador en una IP diferente, configura un proxy CORS o usa un middleware del lado del servidor.',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama4:scout",      // Best quality on 12 GB VRAM\n    // model: "llama3.2:3b",    // Lightweight for 8 GB RAM\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: '¿Cómo hacer streaming de respuestas token a token?',
          content: '**El streaming te permite mostrar las respuestas a medida que se generan, token a token, en lugar de esperar a la respuesta completa.** A partir de mayo de 2026, el streaming funciona con todos los modelos locales a través de la API compatible con OpenAI.',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-es.svg',
          imageCaption: 'Con stream=True, Ollama entrega el primer token en ~0.1s -- los usuarios ven la salida inmediatamente en lugar de esperar la respuesta completa.',
        },
        functionCalling: {
          id: 'function-calling',
          title: '¿Tu modelo local puede llamar funciones?',
          content: [
            '**Sí, a partir de mayo de 2026, el function calling funciona con modelos locales a través de la API de OpenAI.** Defines un esquema de función y el modelo puede responder con argumentos para pasarle a tu función. Esto permite que los [mejores LLMs locales para programación](/es/local-llms/best-local-llms-for-coding) se integren con tu ecosistema de herramientas.',
            'El soporte de function calling depende del modelo. Llama 4 Scout, Qwen3 8B, Gemma 4 9B y Mistral Small 3.1 soportan tool calling de forma fiable. Llama 3.3 8B y Qwen3 7B también lo soportan (versiones anteriores). Los modelos más pequeños (3B) pueden no producir JSON de tool call estructurado de forma fiable.',
            'En 2026, el Model Context Protocol (MCP) extiende el function calling hacia una capa de conexión de herramientas estandarizada. MCP permite que cualquier cliente (Claude Code, Cursor, apps personalizadas) se conecte a cualquier servidor de herramientas a través de un único protocolo — yendo más allá de las definiciones de herramientas por petición mostradas arriba. Ollama soporta tool calling estilo MCP a través de la API estándar de function calling compatible con OpenAI. Para integraciones de herramientas en producción, MCP se está convirtiendo en el estándar; los ejemplos de function calling aquí siguen siendo la base.',
            'Al usar APIs compatibles con OpenAI localmente, la salida estructurada y el modo JSON funcionan igual que con las APIs en la nube. Para aplicar conformidad de esquemas y control de formato en modelos locales y en la nube, consulta [salida estructurada y modo JSON](https://www.promptquorum.com/prompt-engineering/structured-output-and-json-mode).',
            'Las APIs compatibles con OpenAI aceptan los mismos formatos de prompt que las versiones en la nube — mensajes de sistema, mensajes de usuario y salida estructurada. La biblioteca completa de [técnicas de prompt engineering](https://www.promptquorum.com/prompt-engineering) se aplica directamente a las llamadas de API locales.',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-es.svg',
          imageCaption: 'Flujo de function calling con Ollama: el modelo local devuelve JSON tool_call y tu app ejecuta la función -- soportado por Llama 4 Scout, Qwen3 8B, Gemma 4 9B y Mistral.',
        },
        regionalContext: {
          id: 'regional-context',
          title: 'APIs de LLMs locales compatibles con OpenAI por región',
          content: [
            '**UE / RGPD y AI Act:** Para los desarrolladores de la UE, ejecutar Ollama localmente garantiza el cumplimiento del artículo 5 del RGPD (minimización de datos) -- toda la inferencia permanece en el dispositivo sin transferencia de datos a APIs en la nube. Ollama se descarga desde GitHub bajo licencia MIT, cumpliendo los requisitos de conformidad de la UE. Las obligaciones de sistemas de alto riesgo del AI Act de la UE aplican desde el 2 de agosto de 2026 (pendiente Digital Omnibus). La inferencia local de API satisface los requisitos de residencia de datos del RGPD por defecto. Para empresas, esto elimina la dependencia del proveedor y garantiza la residencia de datos.',
            '**España y América Latina / RGPD y LSSI:** En España, la Ley de Servicios de la Sociedad de la Información (LSSI) y el RGPD exigen el tratamiento responsable de datos personales. Ejecutar Ollama localmente cumple estos requisitos: no hay transferencia de datos a servidores externos. En América Latina, países como México (LFPDPPP), Argentina (Ley 25.326) y Brasil (LGPD) exigen la protección de datos personales; la inferencia local con Ollama satisface estos requerimientos. Ollama + Qwen3 8B funciona en laptops corporativos estándar (8 GB RAM).',
            '**China / CAC:** Para despliegues bajo la Ley de Ciberseguridad de China (artículo 37 del CAC), la inferencia local satisface los mandatos de localización de datos -- Ollama + Qwen3 funciona en cualquier dispositivo Linux sin llamadas a APIs externas. La tokenización nativa en chino de Qwen3 añade un 30-40% de eficiencia respecto a Llama, reduciendo la sobrecarga de inferencia local.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '¿Cuáles son los errores comunes con las APIs de LLMs locales compatibles con OpenAI?',
          items: [
            '**Olvidar que la API key se ignora.** Ollama requiere `api_key="ollama"` (cualquier cadena funciona) porque no autentica. La autenticación real se basa en que la petición proviene de localhost o de tu red local, no de internet.',
            '**No darse cuenta de que el nombre del modelo importa.** Si llamas a `/chat/completions` con `model="gpt-4"` pero solo has descargado `llama3.2:3b` en Ollama, la petición fallará. Usa los nombres exactos de modelo de `ollama list`.',
            '**Asumir que Ollama necesita internet.** No lo necesita. La API es completamente local. Pero si tu código Python intenta conectarse primero a los servidores de OpenAI (por defecto), fallará. Establece siempre `base_url` explícitamente.',
            '**Errores CORS desde el navegador.** Si llamas a Ollama desde un script del lado del navegador y obtienes un error CORS, significa que el navegador bloqueó la petición por seguridad. Consulta [LLMs locales con VS Code y Cursor](/es/local-llms/local-llms-with-vscode-cursor) para soluciones basadas en editores que evitan CORS.',
            '**No establecer stream=True cuando se espera streaming.** Si quieres respuestas token a token, debes establecer explícitamente `stream=True` en la petición. Por defecto, espera la respuesta completa.',
            '**Usar `llama3.2:3b` en los ejemplos cuando hay modelos mejores disponibles.** Muchos tutoriales usan Llama 3.2 3B porque cabe en 8 GB de RAM. Si tienes 12+ GB de VRAM, cambia a `llama4:scout` — calidad dramáticamente mejor para el mismo código de API. Usa modelos 3B solo para probar la integración con la API, no para cargas de trabajo de producción.',
            '**No establecer `OLLAMA_NUM_PARALLEL` para peticiones concurrentes.** Por defecto, Ollama procesa una petición a la vez. Para apps multiusuario o suites de pruebas paralelas, establece `OLLAMA_NUM_PARALLEL=4` (o más) para manejar llamadas de API concurrentes. Sin esto, las peticiones se encolan y la latencia aumenta.',
            '---',
            '⚠️ **Advertencia:** La API de Ollama NO tiene autenticación por defecto. Si la expones a tu red (`OLLAMA_HOST=0.0.0.0`), cualquier persona en esa red puede enviar peticiones, cargar modelos y consumir recursos de GPU. Para configuraciones multiusuario o de producción, coloca un reverse proxy (nginx, Caddy) con autenticación delante de Ollama — nunca expongas el puerto 11434 directamente a internet.',
          ],
          image: '/images/openai-compatible-platform-comparison-es.svg',
          imageCaption: 'Ollama (puerto 11434), vLLM (puerto 8000) y LM Studio (puerto 1234) exponen todos endpoints compatibles con OpenAI -- código cliente idéntico, diferentes puertos y casos de uso.',
        },
        faqSection: {
          id: 'common-questions',
          title: 'Preguntas frecuentes sobre las APIs de LLMs locales',
          faqs: [
            {
              q: '¿Necesito modificar mi código de OpenAI para usar Ollama?',
              a: 'No. Establece `base_url="http://localhost:11434/v1"` y `api_key="ollama"`. Todo lo demás permanece igual. Si tienes código que usa la biblioteca de OpenAI, cambia estas dos líneas y funcionará con tu modelo local.',
            },
            {
              q: '¿Puedo usar la API desde otro ordenador en mi red?',
              a: 'Sí. Por defecto, Ollama escucha solo en localhost. Para permitir el acceso en red, establece la variable de entorno `OLLAMA_HOST=0.0.0.0:11434` antes de ejecutar Ollama. Luego apunta tu código a `http://<ip-de-la-máquina>:11434/v1`. Ten cuidado con la seguridad -- usa un firewall si es producción.',
            },
            {
              q: '¿LM Studio tiene una API compatible con OpenAI?',
              a: 'Sí. LM Studio expone una API compatible con OpenAI en `http://localhost:1234/v1`. Actívala en la pestaña Local Server, carga un modelo y haz clic en Start Server. Usa el mismo código Python o Node.js que con Ollama -- solo cambia el puerto (1234 en lugar de 11434).',
            },
            {
              q: '¿Puedo llamar a varios modelos simultáneamente?',
              a: 'Si los tienes cargados en Ollama, sí. Pero ten en cuenta que ejecutar dos modelos simultáneamente duplica el uso de VRAM. Debes tener suficiente memoria GPU.',
            },
            {
              q: '¿La API está autenticada?',
              a: 'No. Por defecto, la API de Ollama no tiene autenticación. Cualquiera con acceso a localhost:11434 puede usarla. Para producción con acceso en red, añade autenticación a través de un reverse proxy (nginx con Basic Auth, etc.).',
            },
            {
              q: '¿Cómo uso el streaming con la API OpenAI de Ollama?',
              a: 'Establece stream=True en tu llamada a la biblioteca de OpenAI. Ollama devuelve server-sent events (SSE) con cada token. En Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).',
            },
            {
              q: '¿Ollama soporta function calling / uso de herramientas a través de la API?',
              a: 'Sí, para los modelos que lo soportan (Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral Small 3.1). Los modelos anteriores (Llama 3.3 8B, Qwen3 7B) también lo soportan. Pasa tools=[] en la llamada de API como lo harías con OpenAI. Ollama analiza las llamadas de herramientas y devuelve JSON estructurado. No todos los modelos lo soportan -- consulta la documentación del modelo.',
            },
            {
              q: '¿Qué es MCP y cómo se relaciona con la API compatible con OpenAI?',
              a: 'MCP (Model Context Protocol) es un protocolo estandarizado para conectar modelos de IA con herramientas y fuentes de datos externas. Se basa en el function calling — el mismo parámetro `tools=[]` mostrado en los ejemplos — pero añade una arquitectura cliente-servidor estándar para que las herramientas sean descubribles y reutilizables entre aplicaciones. Ollama soporta interacciones de herramientas estilo MCP a través de su endpoint de function calling compatible con OpenAI. Para integraciones simples, los ejemplos de function calling de este artículo son suficientes. Para flujos de trabajo complejos con múltiples herramientas, MCP ofrece un enfoque más estructurado.',
            },
            {
              q: '¿Cuál es la diferencia entre /api/generate y /v1/chat/completions de Ollama?',
              a: '/api/generate es el endpoint nativo de un solo turno de Ollama. /v1/chat/completions es el endpoint compatible con OpenAI de múltiples turnos. Usa /v1/chat/completions para todos los proyectos nuevos -- soporta historial de conversación y es compatible con las bibliotecas de OpenAI.',
            },
            {
              q: '¿Puedo usar vLLM como API compatible con OpenAI?',
              a: 'Sí. vLLM ejecuta un servidor compatible con OpenAI en http://localhost:8000/v1 por defecto. Inícialo con: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Usa el mismo código cliente que con Ollama.',
            },
            {
              q: '¿Cómo uso la API de Ollama con el paquete Node.js openai?',
              a: 'Importa OpenAI desde openai. Establece baseURL: "http://localhost:11434/v1" y apiKey: "ollama" en el constructor. Luego llama a client.chat.completions.create() exactamente como lo harías con la API real de OpenAI -- sin más cambios.',
            },
            {
              q: '¿Cómo cambio entre Ollama y OpenAI en el mismo código?',
              a: 'Usa una variable de entorno: establece USE_LOCAL=true para Ollama (base_url http://localhost:11434/v1, api_key "ollama") y USE_LOCAL=false para OpenAI. La biblioteca Python de OpenAI acepta base_url como argumento del constructor. Establece USE_LOCAL=false en producción para cambiar a OpenAI sin modificar ningún otro código.',
            },
            {
              q: '¿Puedo usar la API compatible con OpenAI con LangChain?',
              a: 'Sí. Usa ChatOpenAI con base_url="http://localhost:11434/v1" y api_key="ollama". Esto convierte a Ollama en un reemplazo directo de OpenAI en cualquier pipeline de LangChain -- las cadenas RAG, agentes y herramientas funcionan sin modificación. LangChain también tiene una clase ChatOllama dedicada para características específicas de Ollama.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectura relacionada',
          items: [
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Configura Ollama para exponer la API.',
            '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) -- Ambos exponen APIs compatibles con OpenAI.',
            '[Los mejores frontends de LLMs locales](/es/local-llms/best-local-llm-frontends) -- Interfaces que usan esta API internamente.',
            '[LLMs locales con VS Code y Cursor](/es/local-llms/local-llms-with-vscode-cursor) -- Editores de código que usan esta API.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/es/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Diferentes backends que exponen esta API.',
            '[Stack de desarrollo local LLM](/es/local-llms/local-llm-developer-stack) -- Para un stack completo de 3 niveles (CLI → API → producción) más allá de la configuración de compatibilidad de API.',
            '[Salida estructurada y modo JSON](/prompt-engineering/structured-output-and-json-mode) -- Usar la API para aplicar el formato de salida.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- Construir pipelines de API de múltiples pasos con modelos locales.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- Aplicación de formato a nivel de API.',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- Documentación oficial para los endpoints REST compatibles con OpenAI de Ollama.',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- Documentación del servidor local compatible con OpenAI de LM Studio en localhost:1234.',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- SDK de Python oficial usado para conectarse tanto a OpenAI como a LLMs locales mediante la anulación de base_url.',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- Documentación del servidor API compatible con OpenAI de vLLM (puerto 8000, uso en producción).',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'API compatible con OpenAI para LLMs locales: Guía de configuración con Python y Node.js (localhost:1234 y 11434)',
        'description': 'Cambia una línea -- base_url a localhost -- para usar Ollama como API OpenAI de reemplazo directo. Python, Node.js, streaming y function calling funcionan sin cambios.',
        'url': 'https://www.promptquorum.com/es/local-llms/local-llm-openai-compatible-api?lang=es',
        'datePublished': '2026-04-04',
        'dateModified': '2026-05-17',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'Desarrolladores que integran LLMs locales en aplicaciones Python, Node.js o JavaScript' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'inferencia de LLM local' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'Biblioteca Python de OpenAI' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Beginner to Advanced',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Necesito modificar mi código de OpenAI para usar Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Establece base_url="http://localhost:11434/v1" y api_key="ollama". Todo lo demás permanece igual. Si tienes código existente con la biblioteca de OpenAI, cambia estas dos líneas y funcionará con tu modelo local.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar la API de Ollama desde otro ordenador en mi red?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Por defecto, Ollama escucha solo en localhost. Establece OLLAMA_HOST=0.0.0.0:11434 antes de ejecutar Ollama para permitir el acceso en red. Apunta el código a http://<ip-de-la-máquina>:11434/v1. Añade un firewall o reverse proxy para mayor seguridad.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿LM Studio tiene una API compatible con OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. LM Studio expone una API compatible con OpenAI en http://localhost:1234/v1. Actívala en la pestaña Local Server. Usa el mismo código que con Ollama, cambiando solo el puerto de 11434 a 1234.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo llamar a varios modelos simultáneamente con la API de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Si ambos modelos están cargados en Ollama, sí. Ejecutar dos modelos simultáneamente aproximadamente duplica el uso de VRAM. Asegúrate de tener suficiente memoria GPU antes de cargar múltiples modelos a la vez.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿La API de Ollama está autenticada?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Por defecto, Ollama no tiene autenticación. Cualquiera con acceso a localhost:11434 puede usarla. Para uso en producción expuesto en red, añade autenticación a través de un reverse proxy (nginx con Basic Auth u OAuth2-proxy).'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo uso el streaming con la API OpenAI de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Establece stream=True en tu llamada a la biblioteca de OpenAI. Ollama devuelve server-sent events (SSE) con cada token. En Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Ollama soporta function calling / uso de herramientas a través de la API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, para los modelos que lo soportan (Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral Small 3.1). Pasa tools=[] en la llamada de API como lo harías con OpenAI. Ollama analiza las llamadas de herramientas y devuelve JSON estructurado. No todos los modelos lo soportan -- consulta la documentación del modelo.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre /api/generate y /v1/chat/completions de Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '/api/generate es el endpoint nativo de un solo turno de Ollama. /v1/chat/completions es el endpoint compatible con OpenAI de múltiples turnos. Usa /v1/chat/completions para todos los proyectos nuevos -- soporta historial de conversación y es compatible con las bibliotecas de OpenAI.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar vLLM como API compatible con OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. vLLM ejecuta un servidor compatible con OpenAI en http://localhost:8000/v1 por defecto. Inícialo con: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Usa el mismo código cliente que con Ollama.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo uso la API de Ollama con el paquete Node.js openai?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Importa OpenAI desde openai. Establece baseURL: "http://localhost:11434/v1" y apiKey: "ollama" en el constructor. Luego llama a client.chat.completions.create() exactamente como lo harías con la API real de OpenAI -- sin más cambios.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo cambio entre Ollama y OpenAI en el mismo código?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Usa una variable de entorno: establece USE_LOCAL=true para Ollama (base_url http://localhost:11434/v1, api_key "ollama") y USE_LOCAL=false para OpenAI. La biblioteca Python de OpenAI acepta base_url como argumento del constructor.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar la API compatible con OpenAI con LangChain?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Usa ChatOpenAI con base_url="http://localhost:11434/v1" y api_key="ollama". LangChain también tiene una clase ChatOllama dedicada para características específicas de Ollama.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Qué puerto usa LM Studio para su API compatible con OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LM Studio usa el puerto 1234. La URL base de la API es http://localhost:1234/v1. Actívala en la pestaña Local Server de LM Studio, carga un modelo y usa el SDK de OpenAI con base_url="http://localhost:1234/v1" y api_key="lm-studio" (cualquier cadena).',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Cómo configuro LM Studio como servidor de API local compatible con OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Abre LM Studio, carga un modelo, ve a la pestaña Local Server y haz clic en Start Server. LM Studio inicia una API compatible con OpenAI en http://localhost:1234/v1. Instala el SDK de OpenAI (pip install openai), luego: client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio"). Llama a client.chat.completions.create() exactamente como con OpenAI.',
            }
          }
        ]
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Cómo usar LM Studio u Ollama con la API compatible con OpenAI',
        'description': 'Conecta Python o Node.js a LM Studio (localhost:1234) u Ollama (localhost:11434) usando el SDK de OpenAI.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Instala el SDK de OpenAI',
            'text': 'Ejecuta pip install openai (Python) o npm install openai (Node.js). No se necesita ningún paquete específico de plataforma.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Inicia LM Studio u Ollama',
            'text': 'Para LM Studio: carga un modelo y activa Local Server (puerto 1234). Para Ollama: ejecuta ollama serve (puerto 11434). Ambos se inician automáticamente en sus respectivos puertos.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Establece base_url y api_key',
            'text': 'LM Studio: base_url="http://localhost:1234/v1", api_key="lm-studio". Ollama: base_url="http://localhost:11434/v1", api_key="ollama". La api_key se ignora localmente pero la requiere el SDK.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Llama a chat.completions.create',
            'text': 'Usa client.chat.completions.create(model="nombre-del-modelo", messages=[...]) -- idéntico a la llamada de API de OpenAI. El nombre del modelo debe coincidir con el cargado en LM Studio o instalado en Ollama.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Puertos de API compatibles con OpenAI para LLMs locales: LM Studio, Ollama y vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Activar en la pestaña Local Server; gestión de modelos basada en GUI; no requiere GPU; API compatible con OpenAI' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- Iniciar con ollama serve; ideal para scripts y automatización; no requiere GPU; API compatible con OpenAI' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- Iniciar con python -m vllm.entrypoints.openai.api_server; GPU recomendada; uso en producción de alto rendimiento' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Endpoint Chat Completions', 'description': 'POST /v1/chat/completions -- ruta de endpoint idéntica en LM Studio, Ollama y vLLM; el mismo código cliente funciona con los tres' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'La presentación a continuación cubre: el estándar de API compatible con OpenAI, la configuración del endpoint de Ollama, la integración de Python y Node.js en 3 pasos, el streaming, el function calling y el cumplimiento normativo regional (RGPD UE, APPI Japón, CAC China). Descarga el PDF como tarjeta de referencia de integración de API de LLM local.',
    },
    pt: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Tools & Interfaces',
      title: 'API compatível com OpenAI para LLMs locais (Ollama, vLLM, LM Studio) — Guia Python e Node.js 2026',
      seoTitle: 'API OpenAI com LM Studio e Ollama: Python e Node.js 2026',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) e vLLM (localhost:8000) expõem APIs REST no formato OpenAI. Use o SDK oficial de Python ou Node.js da OpenAI com qualquer modelo local alterando apenas duas linhas: defina base_url para seu endpoint local e api_key para qualquer string. A partir de maio de 2026, esta é a forma padrão de executar LLMs locais em aplicações Python e Node.js de produção sem custos na nuvem ou dependência de fornecedor.',
      metaDescription: 'Guias de configuração para a API compatível com OpenAI do LM Studio e Ollama com exemplos de código Python/Node.js, streaming e function calling.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434) e vLLM (localhost:8000) expõem APIs REST no formato OpenAI. Use o SDK oficial de Python ou Node.js da OpenAI com qualquer modelo local alterando apenas duas linhas: defina base_url para seu endpoint local e api_key para qualquer string.**',
      audience: 'Desenvolvedores que querem integrar LLMs locais em aplicações Python ou Node.js',
      readTime: '11 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'API compatível com OpenAI para LLM local',
      toc: [
        { label: 'Pontos principais', anchor: '#tldr' },
        { label: 'Ports de API por ferramenta', anchor: '#api-ports' },
        { label: 'Integração Python', anchor: '#python' },
        { label: 'Integração Node.js', anchor: '#nodejs' },
        { label: 'Streaming', anchor: '#streaming' },
        { label: 'Function calling', anchor: '#function-calling' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'API compatível com OpenAI para LLMs locais (Ollama, vLLM, LM Studio) — Guia Python e Node.js 2026',
        'description': 'Configure a API compatível com OpenAI do LM Studio e Ollama. Exemplos Python/Node.js, streaming e function calling. Maio 2026.',
        'url': 'https://www.promptquorum.com/pt/local-llms/local-llm-openai-compatible-api',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'O conjunto de slides abaixo cobre: o padrão de API compatível com OpenAI, configuração do endpoint do Ollama, integração de Python e Node.js em 3 passos, streaming, function calling e conformidade regional (LGPD Brasil, GDPR UE, APPI Japão). Baixe o PDF como cartão de referência de integração de API de LLM local.',
      sections: {
        tldr: {
          id: 'tldr',
          isTldr: true,
          items: [
            'LM Studio: localhost:1234/v1 — Ative na aba Local Server; sem GPU necessária; compatível com OpenAI.',
            'Ollama: localhost:11434/v1 — Inicie com `ollama serve`; ideal para scripts e automação.',
            'vLLM: localhost:8000/v1 — GPU recomendada; uso em produção de alto throughput.',
            'Altere apenas duas linhas no seu código OpenAI existente: `base_url` e `api_key`.',
            'Streaming e function calling funcionam com os três backends.',
            'A LGPD brasileira é atendida: nenhum dado de prompt sai da sua infraestrutura local.',
          ],
        },
        regionalContext: {
          title: 'Contexto regional e conformidade',
          content: [
            '**Brasil (LGPD / ANPD)** — A API de LLM local mantém todos os dados de prompt na sua infraestrutura. A LGPD (Lei nº 13.709/2018) exige controles adequados para dados pessoais sensíveis. A inferência local elimina a necessidade de Acordos de Processamento de Dados com provedores de nuvem.',
            '**UE/GDPR** — A inferência local satisfaz o Artigo 28 do GDPR. Nenhum dado sai da sua infraestrutura, satisfazendo os requisitos de residência de dados do setor financeiro, de saúde e jurídico da UE.',
            '**Global** — A API compatível com OpenAI permite migrar entre modelos locais e de nuvem sem alterações de código.',
          ],
        },
      },
    },

  };
