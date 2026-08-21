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
      title: 'LM Studio & Ollama OpenAI-Compatible API Documentation: Python, Node.js, Aider, Cline & Roo Code (2026)',
      seoTitle: 'LM Studio & Ollama OpenAI API Docs: Setup Guide (2026)',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434), and vLLM (localhost:8000) all expose REST APIs in the OpenAI format -- this page documents every endpoint, request format, and code example. Use the official OpenAI Python or Node.js SDK with any local model by changing two lines: set base_url to your local endpoint and api_key to any string. The same base_url setting connects AI coding tools like Aider, Cline, and Roo Code to local models. As of May 2026, this is the standard way to run local LLMs in production Python and Node.js applications without cloud costs or vendor lock-in.',
      metaDescription: 'LM Studio (localhost:1234) & Ollama (localhost:11434) OpenAI-compatible API docs: Python, Node.js, streaming, plus Aider, Cline & Roo Code setup.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-en.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434), and vLLM (localhost:8000) all expose REST APIs in the OpenAI format -- this is the documentation for every endpoint, request format, and code example. Use the official OpenAI Python or Node.js SDK with any local model by changing two lines: set base_url to your local endpoint and api_key to any string.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      dateModified: '2026-07-14',
      readTime: '11 min read',
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
        { label: 'Aider, Cline & Roo Code Setup', anchor: '#ai-coding-tools' },
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
            'The OpenAI-compatible API share the same base format across Ollama, vLLM, and LM Studio -- no code changes needed to switch providers.',
            'As of May 2026, streaming (streaming responses token-by-token) and function calling both work with local models via this API.',
            'Aider, Cline, and Roo Code all connect to local models through this same base_url setting -- no separate integration required.',
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
            '**AI coding tools:** Aider, Cline, and Roo Code all support an OpenAI-compatible provider mode using the same base_url',
            '**Authentication:** commonly starts without auth, bound to localhost by default. Add reverse proxy and authentication if exposing beyond localhost, since vLLM supports API-key auth and LM Studio can be exposed publicly.',
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
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-en.png',
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
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-en.png',
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
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: 'How Do You Connect Aider, Cline, or Roo Code to a Local Model?',
          content: [
            '**Point Aider, Cline, or Roo Code at the same OpenAI-compatible base_url used elsewhere in this guide -- `http://localhost:11434/v1` for Ollama or `http://localhost:1234/v1` for LM Studio -- and use any string as the API key.** All three tools support a generic "OpenAI Compatible" provider mode built for exactly this case.',
            'Cline and Roo Code (a Cline fork) share the same configuration pattern: open the extension settings in VS Code, select the OpenAI Compatible API provider, enter the Base URL and any API key, then enter the exact model name shown in `ollama list` or the LM Studio model browser.',
            'Aider connects through the same OpenAI-compatible layer using the `OPENAI_API_BASE` and `OPENAI_API_KEY` environment variables (or their equivalent command-line flags), pointed at your local server. Aider also has native Ollama support through its own provider prefix -- check Aider\'s current documentation for the preferred method, since exact flag names change between releases.',
            'Use Aider, Cline, or Roo Code with local models if: you want zero API costs during development, your codebase cannot leave your machine, or you are testing prompts before switching to a cloud model for production. Avoid local models in these tools if you need long-context reasoning beyond what an 8-24 GB VRAM model can hold accurately -- switch to a cloud model or a larger local model (Llama 4 Scout) for that case.',
          ],
          rows: [
            { 'Tool': 'Cline', 'Config Location': 'VS Code extension settings → API Provider → OpenAI Compatible', 'Local Base URL': 'http://localhost:11434/v1 (Ollama) or :1234/v1 (LM Studio)' },
            { 'Tool': 'Roo Code', 'Config Location': 'VS Code extension settings → API Provider (same pattern as Cline)', 'Local Base URL': 'http://localhost:11434/v1 (Ollama) or :1234/v1 (LM Studio)' },
            { 'Tool': 'Aider', 'Config Location': 'OPENAI_API_BASE / OPENAI_API_KEY environment variables or CLI flags', 'Local Base URL': 'http://localhost:11434/v1 (Ollama) or :1234/v1 (LM Studio)' },
          ],
          columns: ['Tool', 'Config Location', 'Local Base URL'],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Local LLM OpenAI APIs by Region',
          content: [
            '**EU / GDPR & AI Act:** For EU developers, running Ollama locally ensures GDPR Article 5 compliance (data minimization) -- all inference stays on-device with no data egress to cloud APIs. Ollama downloads from GitHub under MIT license, meeting EU compliance requirements. EU AI Act high-risk system obligations apply from August 2, 2026 (pending Digital Omnibus). Local API inference satisfies GDPR data residency requirements by default. For enterprises, this eliminates vendor lock-in -- inference data stays within your own network (no Art. 44 GDPR cross-border transfer risk for inference data).',
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
            {
              q: 'How do I use Aider with a local model via Ollama or LM Studio?',
              a: 'Point Aider at your local OpenAI-compatible server by setting the OPENAI_API_BASE and OPENAI_API_KEY environment variables (or the matching CLI flags) to http://localhost:11434/v1 (Ollama) or http://localhost:1234/v1 (LM Studio), with any string as the key. Aider also has native Ollama support through its own provider prefix -- check Aider\'s documentation for the current preferred method, since flag names change between releases.',
            },
            {
              q: 'Can Cline or Roo Code use local models through LM Studio or Ollama?',
              a: 'Yes. Both VS Code extensions include an OpenAI Compatible provider option in their settings. Enter http://localhost:11434/v1 (Ollama) or http://localhost:1234/v1 (LM Studio) as the Base URL, any string as the API key, and the exact model name. Roo Code is a Cline fork and uses the same configuration pattern.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- Setup Ollama to expose the API.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Both expose OpenAI-compatible APIs.',
            '[Local LLMs for Coding Workflows](/local-llms/local-llms-for-coding-workflows) -- Using Aider, Cline, and other AI coding tools with local models.',
            '[Best Local LLM Frontends](/local-llms/best-local-llm-frontends) -- UIs that use this API internally.',
            '[Local LLMs with VS Code and Cursor](/local-llms/local-llms-with-vscode-cursor) -- Code editors that use this API.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Different backends that expose this API.',
            '[Local LLM Developer Stack](/local-llms/local-llm-developer-stack) -- For a complete 3-tier stack (CLI → API → production) beyond API compatibility setup.',
            '[Structured Output and JSON Mode](/prompt-engineering/structured-output-and-json-mode) -- Using the API to enforce output format.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- Building multi-step API pipelines with local models.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- API-level format enforcement.',
            '[Headless Local LLMs: Running Models Without a UI (2026)](/local-llms/headless-local-llms) -- headless local LLM deployment',
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
        'headline': 'LM Studio & Ollama OpenAI-Compatible API Documentation: Python, Node.js, Aider, Cline & Roo Code (2026)',
        'description': 'LM Studio (localhost:1234) & Ollama (localhost:11434) OpenAI-compatible API docs: Python, Node.js, streaming, plus Aider, Cline & Roo Code setup.',
        'url': 'https://www.promptquorum.com/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'Developers integrating local LLMs into Python, Node.js, or JavaScript applications' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Python Library' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
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
          },
          {
            '@type': 'Question',
            'name': 'How do I use Aider with a local model via Ollama or LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Point Aider at your local OpenAI-compatible server by setting the OPENAI_API_BASE and OPENAI_API_KEY environment variables (or the matching CLI flags) to http://localhost:11434/v1 (Ollama) or http://localhost:1234/v1 (LM Studio), with any string as the key. Aider also has native Ollama support through its own provider prefix -- check Aider\'s documentation for the current preferred method.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Can Cline or Roo Code use local models through LM Studio or Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Both VS Code extensions include an OpenAI Compatible provider option in their settings. Enter http://localhost:11434/v1 (Ollama) or http://localhost:1234/v1 (LM Studio) as the Base URL, any string as the API key, and the exact model name. Roo Code is a Cline fork and uses the same configuration pattern.',
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
      title: 'LM Studio & Ollama OpenAI-kompatible API-Dokumentation: Python, Node.js, Aider, Cline & Roo Code (2026)',
      seoTitle: 'LM Studio & Ollama OpenAI API-Dokumentation (2026)',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) und vLLM (localhost:8000) stellen REST-APIs bereit, die OpenAI-Format nachahmen -- diese Seite dokumentiert jeden Endpoint, jedes Request-Format und jedes Code-Beispiel. Nutzen Sie die offizielle OpenAI Python oder Node.js SDK mit jedem lokalen Modell, indem Sie nur zwei Zeilen ändern: Setzen Sie base_url auf Ihren lokalen Endpoint und api_key auf beliebige Zeichenfolge. Dieselbe base_url-Einstellung verbindet auch KI-Coding-Tools wie Aider, Cline und Roo Code mit lokalen Modellen. Ab May 2026 ist dies der Standard für lokale LLMs in Produktions-Python und Node.js Anwendungen ohne Cloud-Kosten oder Vendor Lock-in.',
      metaDescription: 'LM Studio (localhost:1234) & Ollama (localhost:11434) OpenAI-kompatible API-Dokumentation: Python, Node.js, Streaming, plus Aider, Cline & Roo Code Setup.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-de.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434) und vLLM (localhost:8000) stellen REST-APIs in OpenAI-Format bereit -- dies ist die Dokumentation für jeden Endpoint, jedes Request-Format und jedes Code-Beispiel. Nutzen Sie die offizielle OpenAI Python oder Node.js SDK mit beliebigem lokalem Modell, indem Sie nur zwei Zeilen ändern: base_url auf localhost setzen und api_key auf beliebige Zeichenfolge.**',
      audience: 'Anfänger, die ihr erstes lokales LLM auf Consumer-Hardware laufen lassen',
      dateModified: '2026-07-14',
      readTime: '11 Min. Lesezeit',
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
        { label: 'Aider, Cline & Roo Code Setup', anchor: '#ai-coding-tools' },
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
            'Aider, Cline und Roo Code verbinden sich alle über dieselbe base_url-Einstellung mit lokalen Modellen -- keine separate Integration nötig.',
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
            '**KI-Coding-Tools:** Aider, Cline und Roo Code unterstützen alle einen OpenAI-kompatiblen Provider-Modus über dieselbe base_url',
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
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-de.png',
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
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-de.png',
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
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: 'Wie verbinde ich Aider, Cline oder Roo Code mit einem lokalen Modell?',
          content: [
            '**Zeigen Sie Aider, Cline oder Roo Code auf dieselbe OpenAI-kompatible base_url, die auch sonst in diesem Guide verwendet wird -- `http://localhost:11434/v1` für Ollama oder `http://localhost:1234/v1` für LM Studio -- und nutzen Sie eine beliebige Zeichenfolge als API-Key.** Alle drei Tools unterstützen einen generischen "OpenAI Compatible"-Provider-Modus genau für diesen Fall.',
            'Cline und Roo Code (ein Cline-Fork) teilen dasselbe Konfigurationsmuster: Öffnen Sie die Erweiterungseinstellungen in VS Code, wählen Sie den OpenAI-Compatible-API-Provider, geben Sie Base URL und einen beliebigen API-Key ein, und tragen Sie den exakten Modellnamen aus `ollama list` oder dem LM-Studio-Modell-Browser ein.',
            'Aider verbindet sich über dieselbe OpenAI-kompatible Schicht mithilfe der Umgebungsvariablen `OPENAI_API_BASE` und `OPENAI_API_KEY` (oder der entsprechenden Kommandozeilen-Flags), die auf Ihren lokalen Server zeigen. Aider hat zudem native Ollama-Unterstützung über einen eigenen Provider-Präfix -- prüfen Sie die aktuelle Aider-Dokumentation für die bevorzugte Methode, da sich exakte Flag-Namen zwischen Releases ändern.',
            'Nutzen Sie Aider, Cline oder Roo Code mit lokalen Modellen, wenn: Sie während der Entwicklung keine API-Kosten wollen, Ihr Code die Maschine nicht verlassen darf, oder Sie Prompts testen, bevor Sie für Produktion auf ein Cloud-Modell wechseln. Vermeiden Sie lokale Modelle in diesen Tools, wenn Sie längeres Kontext-Reasoning benötigen, als ein Modell mit 8-24 GB VRAM zuverlässig leisten kann -- wechseln Sie dann zu einem Cloud-Modell oder einem größeren lokalen Modell (Llama 4 Scout).',
          ],
          rows: [
            { 'Tool': 'Cline', 'Konfigurationsort': 'VS Code Erweiterungseinstellungen → API Provider → OpenAI Compatible', 'Lokale Base URL': 'http://localhost:11434/v1 (Ollama) oder :1234/v1 (LM Studio)' },
            { 'Tool': 'Roo Code', 'Konfigurationsort': 'VS Code Erweiterungseinstellungen → API Provider (gleiches Muster wie Cline)', 'Lokale Base URL': 'http://localhost:11434/v1 (Ollama) oder :1234/v1 (LM Studio)' },
            { 'Tool': 'Aider', 'Konfigurationsort': 'OPENAI_API_BASE / OPENAI_API_KEY Umgebungsvariablen oder CLI-Flags', 'Lokale Base URL': 'http://localhost:11434/v1 (Ollama) oder :1234/v1 (LM Studio)' },
          ],
          columns: ['Tool', 'Konfigurationsort', 'Lokale Base URL'],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Lokale LLM OpenAI APIs nach Region',
          content: [
            '**EU / DSGVO & AI Act:** Für EU Entwickler stellt Ollama lokal sicher, dass DSGVO Artikel 5 konform ist (Datensparsamkeit) -- alle Inferenz bleibt on-device ohne Datensicherung zu Cloud APIs. Ollama wird von GitHub unter MIT Lizenz heruntergeladen und erfüllt EU Compliance-Anforderungen. Hochrisiko-Systeme der EU AI Act Verpflichtungen gelten ab August 2, 2026 (ausstehend Digital Omnibus). Lokale API Inferenz erfüllt DSGVO Daten-Residenz-Anforderungen by default. Für Unternehmen eliminiert dies Vendor Lock-in -- Eingabedaten verlassen das eigene Netzwerk nicht (kein Art.-44-DSGVO-Transferrisiko für Inferenzdaten).',
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
            {
              q: 'Wie nutze ich Aider mit einem lokalen Modell über Ollama oder LM Studio?',
              a: 'Zeigen Sie Aider über die Umgebungsvariablen OPENAI_API_BASE und OPENAI_API_KEY (oder die entsprechenden CLI-Flags) auf http://localhost:11434/v1 (Ollama) oder http://localhost:1234/v1 (LM Studio), mit beliebiger Zeichenfolge als Key. Aider hat zudem native Ollama-Unterstützung über einen eigenen Provider-Präfix -- prüfen Sie die Aider-Dokumentation für die aktuell bevorzugte Methode.',
            },
            {
              q: 'Können Cline oder Roo Code lokale Modelle über LM Studio oder Ollama nutzen?',
              a: 'Ja. Beide VS-Code-Erweiterungen bieten eine OpenAI-Compatible-Provider-Option in den Einstellungen. Tragen Sie http://localhost:11434/v1 (Ollama) oder http://localhost:1234/v1 (LM Studio) als Base URL, eine beliebige Zeichenfolge als API-Key und den exakten Modellnamen ein. Roo Code ist ein Cline-Fork und nutzt dasselbe Konfigurationsmuster.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Lektüre',
          items: [
            '[Wie installiere ich Ollama](/local-llms/how-to-install-ollama) -- Ollama Setup um API freizugeben.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- Beide geben OpenAI-kompatible APIs frei.',
            '[Lokale LLMs für Coding-Workflows](/local-llms/local-llms-for-coding-workflows) -- Aider, Cline und andere KI-Coding-Tools mit lokalen Modellen nutzen.',
            '[Beste lokale LLM Frontends](/local-llms/best-local-llm-frontends) -- UIs die diese API intern nutzen.',
            '[Lokale LLMs mit VS Code und Cursor](/local-llms/local-llms-with-vscode-cursor) -- Code Editoren die diese API nutzen.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Unterschiedliche Backends die diese API freigeben.',
            '[Lokaler LLM Entwickler Stack](/local-llms/local-llm-developer-stack) -- Für kompletten 3-Tier Stack (CLI → API → Produktion) über API Kompatibilität Setup hinaus.',
            '[Strukturierte Output und JSON Mode](/prompt-engineering/structured-output-and-json-mode) -- Nutze API um Output Format durchzusetzen.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- Baue Multi-Step API Pipelines mit lokalen Modellen.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- API-Level Format Enforcement.',
            '[Headless Local LLMs: Modelle ohne Benutzeroberfläche ausführen (2026)](/de/local-llms/headless-local-llms) -- Headless lokale LLM Bereitstellung',
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
        'headline': 'LM Studio & Ollama OpenAI-kompatible API-Dokumentation: Python, Node.js, Aider, Cline & Roo Code (2026)',
        'description': 'LM Studio (localhost:1234) & Ollama (localhost:11434) OpenAI-kompatible API-Dokumentation: Python, Node.js, Streaming, plus Aider, Cline & Roo Code Setup.',
        'url': 'https://www.promptquorum.com/de/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'Entwickler, die lokale LLMs in Python, Node.js, oder JavaScript Anwendungen integrieren' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'lokale LLM Inferenz' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Python Bibliothek' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Beginner to Advanced',
        'proficiencyLevel': 'Intermediate',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'So nutzen Sie LM Studio oder Ollama mit der OpenAI-kompatiblen API',
        'description': 'Verbinden Sie Python oder Node.js mit LM Studio (localhost:1234) oder Ollama (localhost:11434) über das OpenAI SDK.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'OpenAI SDK installieren',
            'text': 'Führen Sie pip install openai (Python) oder npm install openai (Node.js) aus. Kein plattformspezifisches Paket erforderlich.',
          },
          {
            '@type': 'HowToStep',
            'name': 'LM Studio oder Ollama starten',
            'text': 'Für LM Studio: Modell laden und Local Server aktivieren (Port 1234). Für Ollama: ollama serve ausführen (Port 11434). Beide starten automatisch auf ihrem jeweiligen Port.',
          },
          {
            '@type': 'HowToStep',
            'name': 'base_url und api_key setzen',
            'text': 'LM Studio: base_url="http://localhost:1234/v1", api_key="lm-studio". Ollama: base_url="http://localhost:11434/v1", api_key="ollama". Der api_key wird lokal ignoriert, ist aber vom SDK erforderlich.',
          },
          {
            '@type': 'HowToStep',
            'name': 'chat.completions.create aufrufen',
            'text': 'Nutzen Sie client.chat.completions.create(model="model-name", messages=[...]) -- identisch zum OpenAI API Aufruf. Der Modellname muss dem in LM Studio geladenen bzw. in Ollama installierten Modell entsprechen.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Lokale LLM OpenAI-kompatible API Ports: LM Studio, Ollama und vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Aktivierung im Local Server Tab; GUI-basiertes Modell-Management; keine GPU erforderlich; OpenAI-kompatible API' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- Start mit ollama serve; ideal für Skripting und Automatisierung; keine GPU erforderlich; OpenAI-kompatible API' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- Start mit python -m vllm.entrypoints.openai.api_server; GPU empfohlen; Produktionseinsatz mit hohem Durchsatz' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Chat Completions Endpoint', 'description': 'POST /v1/chat/completions -- identischer Endpoint-Pfad bei LM Studio, Ollama und vLLM; derselbe Client-Code funktioniert mit allen drei' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'Die Präsentation unten behandelt: den OpenAI-kompatiblen API-Standard, Ollama-Endpoint-Setup, Python- und Node.js-Integration in 3 Schritten, Streaming, Function Calling und regionale Compliance (EU DSGVO, Japan APPI, China CAC). PDF als lokale LLM-API-Integrations-Referenzkarte herunterladen.',
    },
    fr: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Outils & Interfaces',
      title: 'LM Studio & Ollama : documentation API compatible OpenAI — Python, Node.js, Aider, Cline & Roo Code (2026)',
      seoTitle: 'LM Studio & Ollama : documentation API OpenAI (2026)',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) et vLLM (localhost:8000) exposent tous des API REST au format OpenAI -- cette page documente chaque endpoint, chaque format de requête et chaque exemple de code. Utilisez le SDK Python ou Node.js officiel d\'OpenAI avec n\'importe quel modèle local en modifiant deux lignes : définissez base_url sur votre endpoint local et api_key sur n\'importe quelle chaîne. Le même réglage base_url connecte aussi des outils de codage IA comme Aider, Cline et Roo Code à vos modèles locaux. Depuis avril 2026, c\'est le moyen standard d\'exécuter des LLM locaux en production sans coûts cloud ni dépendance fournisseur.',
      metaDescription: 'LM Studio (localhost:1234) et Ollama (localhost:11434) : API compatible OpenAI. Python, Node.js, streaming, plus configuration Aider, Cline et Roo Code.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-fr.png',
      publishDate: '2026-04-04',
      dateModified: '2026-07-14',
      readTime: '11 min de lecture',
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
        { label: 'Configurer Aider, Cline & Roo Code', anchor: '#ai-coding-tools' },
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
            'Aider, Cline et Roo Code se connectent tous aux modèles locaux via ce même réglage base_url -- aucune intégration séparée nécessaire.',
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
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-fr.png',
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
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-fr.png',
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
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: 'Comment connecter Aider, Cline ou Roo Code à un modèle local ?',
          content: [
            '**Pointez Aider, Cline ou Roo Code vers la même base_url compatible OpenAI utilisée ailleurs dans ce guide -- `http://localhost:11434/v1` pour Ollama ou `http://localhost:1234/v1` pour LM Studio -- et utilisez n\'importe quelle chaîne comme clé API.** Les trois outils proposent un mode de fournisseur générique « OpenAI Compatible » conçu exactement pour ce cas.',
            'Cline et Roo Code (un fork de Cline) partagent le même schéma de configuration : ouvrez les paramètres de l\'extension dans VS Code, sélectionnez le fournisseur API OpenAI Compatible, saisissez la Base URL et une clé API quelconque, puis indiquez le nom exact du modèle affiché par `ollama list` ou le navigateur de modèles de LM Studio.',
            'Aider se connecte via la même couche compatible OpenAI grâce aux variables d\'environnement `OPENAI_API_BASE` et `OPENAI_API_KEY` (ou aux options en ligne de commande équivalentes), pointées vers votre serveur local. Aider dispose aussi d\'une prise en charge native d\'Ollama via son propre préfixe de fournisseur -- consultez la documentation actuelle d\'Aider pour la méthode recommandée, les noms exacts des options changeant d\'une version à l\'autre.',
            'Utilisez Aider, Cline ou Roo Code avec des modèles locaux si : vous voulez zéro coût d\'API pendant le développement, votre code ne doit pas quitter votre machine, ou vous testez des prompts avant de basculer vers un modèle cloud en production. Évitez les modèles locaux dans ces outils si vous avez besoin d\'un raisonnement sur un contexte plus long que ce qu\'un modèle avec 8 à 24 Go de VRAM peut gérer fiablement -- passez alors à un modèle cloud ou à un modèle local plus grand (Llama 4 Scout).',
          ],
          rows: [
            { 'Outil': 'Cline', 'Emplacement de configuration': 'Paramètres de l\'extension VS Code → API Provider → OpenAI Compatible', 'Base URL locale': 'http://localhost:11434/v1 (Ollama) ou :1234/v1 (LM Studio)' },
            { 'Outil': 'Roo Code', 'Emplacement de configuration': 'Paramètres de l\'extension VS Code → API Provider (même schéma que Cline)', 'Base URL locale': 'http://localhost:11434/v1 (Ollama) ou :1234/v1 (LM Studio)' },
            { 'Outil': 'Aider', 'Emplacement de configuration': 'Variables d\'environnement OPENAI_API_BASE / OPENAI_API_KEY ou options CLI', 'Base URL locale': 'http://localhost:11434/v1 (Ollama) ou :1234/v1 (LM Studio)' },
          ],
          columns: ['Outil', 'Emplacement de configuration', 'Base URL locale'],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'API LLM locaux par région',
          content: [
            '**UE / RGPD :** Pour les développeurs européens, exécuter Ollama en local garantit la conformité à l\'article 5 du RGPD (minimisation des données) -- toute inférence reste sur l\'appareil sans transfert de données vers des API cloud. La CNIL recommande l\'inférence locale pour les applications professionnelles traitant des données sensibles (financières, médicales, juridiques), ce qui fait d\'Ollama et LM Studio des choix privilégiés pour les entreprises soumises au droit français. Pour les entreprises, cela élimine la dépendance fournisseur -- les données d\'entrée ne quittent pas votre propre réseau (aucun risque de transfert transfrontalier art. 44 RGPD pour les données d\'inférence).',
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
            {
              q: 'Comment utiliser Aider avec un modèle local via Ollama ou LM Studio ?',
              a: 'Pointez Aider vers votre serveur local compatible OpenAI en définissant les variables d\'environnement OPENAI_API_BASE et OPENAI_API_KEY (ou les options CLI équivalentes) sur http://localhost:11434/v1 (Ollama) ou http://localhost:1234/v1 (LM Studio), avec n\'importe quelle chaîne comme clé. Aider dispose aussi d\'une prise en charge native d\'Ollama via son propre préfixe de fournisseur -- consultez la documentation d\'Aider pour la méthode actuellement recommandée.',
            },
            {
              q: 'Cline ou Roo Code peuvent-ils utiliser des modèles locaux via LM Studio ou Ollama ?',
              a: 'Oui. Les deux extensions VS Code proposent une option de fournisseur OpenAI Compatible dans leurs paramètres. Saisissez http://localhost:11434/v1 (Ollama) ou http://localhost:1234/v1 (LM Studio) comme Base URL, n\'importe quelle chaîne comme clé API, et le nom exact du modèle. Roo Code est un fork de Cline et utilise le même schéma de configuration.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- Configurer Ollama pour exposer l\'API.',
            '[Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) -- Les deux exposent des API compatibles OpenAI.',
            '[LLM locaux pour les workflows de code](/fr/local-llms/local-llms-for-coding-workflows) -- Utiliser Aider, Cline et d\'autres outils de codage IA avec des modèles locaux.',
            '[Meilleures interfaces LLM locaux](/fr/local-llms/best-local-llm-frontends) -- Interfaces qui utilisent cette API en interne.',
            '[LLM locaux avec VS Code et Cursor](/fr/local-llms/local-llms-with-vscode-cursor) -- Éditeurs de code qui utilisent cette API.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/fr/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Différents backends exposant cette API.',
            '[Stack développeur LLM local](/fr/local-llms/local-llm-developer-stack) -- Pour une stack complète 3 niveaux au-delà de la compatibilité API.',
            '[LLMs Headless locaux : exécuter des modèles sans interface utilisateur (2026)](/fr/local-llms/headless-local-llms) -- déploiement LLM local headless',
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
        'headline': 'LM Studio & Ollama : documentation API compatible OpenAI — Python, Node.js, Aider, Cline & Roo Code (2026)',
        'description': 'LM Studio (localhost:1234) et Ollama (localhost:11434) : API compatible OpenAI. Python, Node.js, streaming, plus configuration Aider, Cline et Roo Code.',
        'url': 'https://www.promptquorum.com/fr/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'API OpenAI' },
          { '@type': 'Thing', 'name': 'inférence LLM locale' },
          { '@type': 'Thing', 'name': 'API REST' },
          { '@type': 'Thing', 'name': 'Bibliothèque Python OpenAI' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
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
          { '@type': 'Question', 'name': 'Comment utiliser Aider avec un modèle local via Ollama ou LM Studio ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Définissez OPENAI_API_BASE et OPENAI_API_KEY (ou les options CLI équivalentes) sur http://localhost:11434/v1 (Ollama) ou http://localhost:1234/v1 (LM Studio), avec n\'importe quelle chaîne comme clé. Aider a aussi une prise en charge native d\'Ollama.' } },
          { '@type': 'Question', 'name': 'Cline ou Roo Code peuvent-ils utiliser des modèles locaux via LM Studio ou Ollama ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les deux extensions VS Code ont une option de fournisseur OpenAI Compatible dans leurs paramètres : Base URL http://localhost:11434/v1 (Ollama) ou http://localhost:1234/v1 (LM Studio), n\'importe quelle clé API, et le nom exact du modèle.' } },
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
      title: 'LM Studio & Ollama OpenAI互換APIドキュメント：Python・Node.js・Aider・Cline・Roo Code対応 (2026)',
      seoTitle: 'LM Studio & Ollama OpenAI APIドキュメント (2026)',
      intro: 'LM Studio（localhost:1234）、Ollama（localhost:11434）、vLLM（localhost:8000）はすべてOpenAI形式のREST APIを公開しています -- 本ページは各エンドポイント、リクエスト形式、コード例をすべて解説するドキュメントです。公式OpenAI PythonまたはNode.js SDKをどのローカルモデルとでも使用できます。変更するのはbase_urlとapi_keyの2行のみ。同じbase_url設定でAider・Cline・Roo CodeなどのAIコーディングツールもローカルモデルに接続できます。2026年4月現在、これがクラウドコストやベンダーロックインなしにローカルLLMを本番アプリで動かす標準的な方法です。',
      metaDescription: 'LM Studio（localhost:1234）とOllama（localhost:11434）のOpenAI互換APIドキュメント。Python・Node.js・ストリーミングに加え、Aider・Cline・Roo Codeの設定方法も解説。',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-ja.png',
      publishDate: '2026-04-04',
      dateModified: '2026-07-14',
      readTime: '11分で読める',
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
        { label: 'Aider・Cline・Roo Codeの設定', anchor: '#ai-coding-tools' },
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
            'Aider・Cline・Roo Codeはいずれも同じbase_url設定でローカルモデルに接続できます -- 別途の統合作業は不要です。',
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
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-ja.png',
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
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-ja.png',
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
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: 'Aider・Cline・Roo Codeをローカルモデルに接続する方法は？',
          content: [
            '**Aider・Cline・Roo Codeを、このガイドで使っているのと同じOpenAI互換base_url -- Ollamaなら`http://localhost:11434/v1`、LM Studioなら`http://localhost:1234/v1` -- に向け、APIキーには任意の文字列を使用します。** 3つのツールすべてに、まさにこの用途向けの汎用「OpenAI Compatible」プロバイダーモードが用意されています。',
            'ClineとRoo Code（Clineのフォーク）は同じ設定パターンを共有します：VS Codeの拡張機能設定を開き、OpenAI Compatible APIプロバイダーを選択し、Base URLと任意のAPIキーを入力、`ollama list`またはLM Studioのモデルブラウザに表示される正確なモデル名を入力します。',
            'Aiderも同じOpenAI互換レイヤーを使用し、`OPENAI_API_BASE`と`OPENAI_API_KEY`環境変数（または対応するコマンドラインフラグ）をローカルサーバーに向けて接続します。Aiderには独自のプロバイダープレフィックスによるネイティブOllamaサポートもあります -- フラグ名はバージョンごとに変わるため、推奨方法は最新のAiderドキュメントで確認してください。',
            '開発中のAPIコストをゼロにしたい、コードを外部に出したくない、本番でクラウドモデルに切り替える前にプロンプトをテストしたい場合は、Aider・Cline・Roo Codeでローカルモデルを使ってください。8〜24GB VRAMのモデルで扱える範囲を超える長いコンテキスト推論が必要な場合は、クラウドモデルまたはより大きなローカルモデル（Llama 4 Scout）に切り替えてください。',
          ],
          rows: [
            { 'ツール': 'Cline', '設定場所': 'VS Code拡張機能設定 → API Provider → OpenAI Compatible', 'ローカルBase URL': 'http://localhost:11434/v1（Ollama）または:1234/v1（LM Studio）' },
            { 'ツール': 'Roo Code', '設定場所': 'VS Code拡張機能設定 → API Provider（Clineと同じパターン）', 'ローカルBase URL': 'http://localhost:11434/v1（Ollama）または:1234/v1（LM Studio）' },
            { 'ツール': 'Aider', '設定場所': 'OPENAI_API_BASE / OPENAI_API_KEY 環境変数またはCLIフラグ', 'ローカルBase URL': 'http://localhost:11434/v1（Ollama）または:1234/v1（LM Studio）' },
          ],
          columns: ['ツール', '設定場所', 'ローカルBase URL'],
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
            { q: 'AiderでOllamaやLM Studioのローカルモデルを使う方法は？', a: 'OPENAI_API_BASEとOPENAI_API_KEY環境変数（または対応するCLIフラグ）を、Ollamaならhttp://localhost:11434/v1、LM Studioならhttp://localhost:1234/v1に設定し、キーには任意の文字列を使います。Aiderには独自のプロバイダープレフィックスによるネイティブOllamaサポートもあります -- 推奨方法は最新のAiderドキュメントで確認してください。' },
            { q: 'ClineやRoo CodeでLM StudioやOllamaのローカルモデルを使えますか？', a: 'はい。両方のVS Code拡張機能に設定画面でOpenAI Compatibleプロバイダーオプションがあります。Base URLにhttp://localhost:11434/v1（Ollama）またはhttp://localhost:1234/v1（LM Studio）、APIキーに任意の文字列、そして正確なモデル名を入力してください。Roo CodeはClineのフォークで、同じ設定パターンを使用します。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- APIを公開するためのOllamaセットアップ。',
            '[Ollama vs LM Studio](/ja/local-llms/ollama-vs-lm-studio) -- 両方ともOpenAI互換APIを公開しています。',
            '[コーディングワークフロー向けローカルLLM](/ja/local-llms/local-llms-for-coding-workflows) -- Aider・Cline等のAIコーディングツールをローカルモデルで使う方法。',
            '[ベストなローカルLLMフロントエンド](/ja/local-llms/best-local-llm-frontends) -- このAPIを内部で使用するUI。',
            '[VS Code・CursorでのローカルLLM](/ja/local-llms/local-llms-with-vscode-cursor) -- このAPIを使用するコードエディタ。',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/ja/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- このAPIを公開する異なるバックエンド。',
            '[ローカルLLM開発者スタック](/ja/local-llms/local-llm-developer-stack) -- API互換性設定を超えた完全な3層スタック。',
            '[Headless Local LLMs: UIなしでモデルを実行する (2026)](/ja/local-llms/headless-local-llms) -- ヘッドレスローカルLLMデプロイメント',
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
        'headline': 'LM Studio & Ollama OpenAI互換APIドキュメント：Python・Node.js・Aider・Cline・Roo Code対応 (2026)',
        'description': 'LM Studio（localhost:1234）とOllama（localhost:11434）のOpenAI互換APIドキュメント。Python・Node.js・ストリーミングに加え、Aider・Cline・Roo Codeの設定方法も解説。',
        'url': 'https://www.promptquorum.com/ja/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'ローカルLLM推論' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Pythonライブラリ' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
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
          { '@type': 'Question', 'name': 'AiderでOllamaやLM Studioのローカルモデルを使う方法は？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'OPENAI_API_BASEとOPENAI_API_KEYを、Ollamaならhttp://localhost:11434/v1、LM Studioならhttp://localhost:1234/v1に設定します。Aiderには独自のネイティブOllamaサポートもあります。' } },
          { '@type': 'Question', 'name': 'ClineやRoo CodeでLM StudioやOllamaのローカルモデルを使えますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。両方のVS Code拡張機能にOpenAI Compatibleプロバイダーオプションがあります。Base URLにhttp://localhost:11434/v1（Ollama）またはhttp://localhost:1234/v1（LM Studio）を設定してください。' } },
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
      title: 'LM Studio和Ollama OpenAI兼容API文档：Python、Node.js、Aider、Cline与Roo Code (2026)',
      seoTitle: 'LM Studio & Ollama OpenAI API文档 (2026)',
      intro: 'LM Studio（localhost:1234）、Ollama（localhost:11434）和vLLM（localhost:8000）均提供OpenAI格式的REST API——本文档详细说明每个端点、请求格式和代码示例。使用官方OpenAI Python或Node.js SDK连接任意本地模型，只需修改两行代码：将base_url设为本地端点，api_key设为任意字符串。同一个base_url设置也可将Aider、Cline、Roo Code等AI编程工具连接到本地模型。截至2026年4月，这是在Python和Node.js生产应用中运行本地LLM的标准方式，无需云端费用或供应商绑定。',
      metaDescription: 'LM Studio（localhost:1234）和Ollama（localhost:11434）OpenAI兼容API文档：Python、Node.js、流式输出，以及Aider、Cline、Roo Code配置方法。',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-zh.png',
      publishDate: '2026-04-04',
      dateModified: '2026-07-14',
      readTime: '阅读约11分钟',
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
        { label: '配置Aider、Cline与Roo Code', anchor: '#ai-coding-tools' },
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
            'Aider、Cline和Roo Code均通过同一个base_url设置连接本地模型——无需单独集成。',
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
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-zh.png',
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
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-zh.png',
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
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: '如何将Aider、Cline或Roo Code连接到本地模型？',
          content: [
            '**将Aider、Cline或Roo Code指向本文档中使用的同一个OpenAI兼容base_url——Ollama为`http://localhost:11434/v1`，LM Studio为`http://localhost:1234/v1`——API密钥可使用任意字符串。** 这三款工具都提供专为此场景设计的通用"OpenAI Compatible"提供商模式。',
            'Cline和Roo Code（Cline的分支）采用相同的配置模式：在VS Code中打开扩展设置，选择OpenAI Compatible API提供商，输入Base URL和任意API密钥，然后输入`ollama list`或LM Studio模型浏览器中显示的确切模型名称。',
            'Aider通过相同的OpenAI兼容层连接，使用`OPENAI_API_BASE`和`OPENAI_API_KEY`环境变量（或对应的命令行参数）指向本地服务器。Aider还通过自己的提供商前缀提供原生Ollama支持——具体参数名称在不同版本间可能变化，请以Aider官方文档中当前推荐的方法为准。',
            '在以下情况使用Aider、Cline或Roo Code配合本地模型：开发阶段希望零API成本、代码不能离开本机、或在切换到云端模型用于生产前测试提示词。如果需要超出8-24GB VRAM模型可靠处理范围的长上下文推理，请改用云端模型或更大的本地模型（Llama 4 Scout）。',
          ],
          rows: [
            { '工具': 'Cline', '配置位置': 'VS Code扩展设置 → API Provider → OpenAI Compatible', '本地Base URL': 'http://localhost:11434/v1（Ollama）或:1234/v1（LM Studio）' },
            { '工具': 'Roo Code', '配置位置': 'VS Code扩展设置 → API Provider（与Cline相同模式）', '本地Base URL': 'http://localhost:11434/v1（Ollama）或:1234/v1（LM Studio）' },
            { '工具': 'Aider', '配置位置': 'OPENAI_API_BASE / OPENAI_API_KEY 环境变量或CLI参数', '本地Base URL': 'http://localhost:11434/v1（Ollama）或:1234/v1（LM Studio）' },
          ],
          columns: ['工具', '配置位置', '本地Base URL'],
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
            { q: '如何通过Ollama或LM Studio在Aider中使用本地模型？', a: '将Aider的OPENAI_API_BASE和OPENAI_API_KEY环境变量（或对应的CLI参数）指向http://localhost:11434/v1（Ollama）或http://localhost:1234/v1（LM Studio），密钥可用任意字符串。Aider还通过自己的提供商前缀提供原生Ollama支持——请参阅Aider官方文档了解当前推荐方法。' },
            { q: 'Cline或Roo Code可以通过LM Studio或Ollama使用本地模型吗？', a: '可以。两款VS Code扩展的设置中都有OpenAI Compatible提供商选项。将Base URL设为http://localhost:11434/v1（Ollama）或http://localhost:1234/v1（LM Studio），API密钥用任意字符串，并填入确切的模型名称。Roo Code是Cline的分支，采用相同的配置模式。' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[如何安装Ollama](/zh/local-llms/how-to-install-ollama) -- 设置Ollama以公开API。',
            '[Ollama vs LM Studio](/zh/local-llms/ollama-vs-lm-studio) -- 两者均公开OpenAI兼容API。',
            '[编程工作流的本地LLM](/zh/local-llms/local-llms-for-coding-workflows) -- 在本地模型中使用Aider、Cline等AI编程工具。',
            '[最佳本地LLM界面](/zh/local-llms/best-local-llm-frontends) -- 内部使用此API的UI。',
            '[VS Code和Cursor使用本地LLM](/zh/local-llms/local-llms-with-vscode-cursor) -- 使用此API的代码编辑器。',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/zh/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- 公开此API的不同后端。',
            '[本地LLM开发者技术栈](/zh/local-llms/local-llm-developer-stack) -- 超越API兼容设置的完整三层技术栈。',
            '[Headless本地LLMs: 无界面运行模型 (2026)](/zh/local-llms/headless-local-llms) -- 无界面本地LLM部署',
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
        'headline': 'LM Studio和Ollama OpenAI兼容API文档：Python、Node.js、Aider、Cline与Roo Code (2026)',
        'description': 'LM Studio（localhost:1234）和Ollama（localhost:11434）OpenAI兼容API文档：Python、Node.js、流式输出，以及Aider、Cline、Roo Code配置方法。',
        'url': 'https://www.promptquorum.com/zh/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': '本地LLM推理' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'OpenAI Python库' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
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
          { '@type': 'Question', 'name': '如何通过Ollama或LM Studio在Aider中使用本地模型？', 'acceptedAnswer': { '@type': 'Answer', 'text': '将OPENAI_API_BASE和OPENAI_API_KEY指向http://localhost:11434/v1（Ollama）或http://localhost:1234/v1（LM Studio）。Aider还提供原生Ollama支持。' } },
          { '@type': 'Question', 'name': 'Cline或Roo Code可以通过LM Studio或Ollama使用本地模型吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '可以。两款VS Code扩展都有OpenAI Compatible提供商选项，将Base URL设为http://localhost:11434/v1（Ollama）或http://localhost:1234/v1（LM Studio）即可。' } },
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
      title: 'LM Studio y Ollama: documentación de la API compatible con OpenAI — Python, Node.js, Aider, Cline y Roo Code (2026)',
      seoTitle: 'LM Studio y Ollama: documentación de la API OpenAI (2026)',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) y vLLM (localhost:8000) exponen APIs REST en formato OpenAI -- esta página documenta cada endpoint, formato de petición y ejemplo de código. Usa el SDK oficial de Python o Node.js de OpenAI con cualquier modelo local cambiando solo dos líneas: establece base_url en tu endpoint local y api_key en cualquier cadena de texto. El mismo ajuste de base_url conecta herramientas de código con IA como Aider, Cline y Roo Code a tus modelos locales. A partir de mayo de 2026, esta es la forma estándar de ejecutar LLMs locales en aplicaciones Python y Node.js de producción sin costes en la nube ni dependencia de un proveedor.',
      metaDescription: 'LM Studio (localhost:1234) y Ollama (localhost:11434): documentación de la API compatible con OpenAI. Python, Node.js, streaming, y configuración de Aider, Cline y Roo Code.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-es.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434) y vLLM (localhost:8000) exponen APIs REST en formato OpenAI -- esta es la documentación de cada endpoint, formato de petición y ejemplo de código. Usa el SDK oficial de Python o Node.js de OpenAI con cualquier modelo local cambiando solo dos líneas: establece base_url en tu endpoint local y api_key en cualquier cadena de texto.**',
      audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
      dateModified: '2026-07-14',
      readTime: '11 min de lectura',
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
        { label: 'Configurar Aider, Cline y Roo Code', anchor: '#ai-coding-tools' },
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
            'Aider, Cline y Roo Code se conectan a modelos locales mediante el mismo ajuste de base_url -- no requiere integración por separado.',
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
            '**Herramientas de código con IA:** Aider, Cline y Roo Code soportan un modo de proveedor compatible con OpenAI usando el mismo base_url',
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
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-es.png',
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
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-es.png',
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
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: '¿Cómo conectar Aider, Cline o Roo Code a un modelo local?',
          content: [
            '**Apunta Aider, Cline o Roo Code al mismo base_url compatible con OpenAI usado en el resto de esta guía -- `http://localhost:11434/v1` para Ollama o `http://localhost:1234/v1` para LM Studio -- y usa cualquier cadena como API key.** Las tres herramientas incluyen un modo de proveedor genérico "OpenAI Compatible" pensado exactamente para este caso.',
            'Cline y Roo Code (un fork de Cline) comparten el mismo patrón de configuración: abre los ajustes de la extensión en VS Code, selecciona el proveedor API OpenAI Compatible, introduce la Base URL y cualquier API key, y añade el nombre exacto del modelo que aparece en `ollama list` o en el explorador de modelos de LM Studio.',
            'Aider se conecta a través de la misma capa compatible con OpenAI usando las variables de entorno `OPENAI_API_BASE` y `OPENAI_API_KEY` (o las opciones de línea de comandos equivalentes) apuntando a tu servidor local. Aider también tiene soporte nativo para Ollama mediante su propio prefijo de proveedor -- consulta la documentación actual de Aider para el método preferido, ya que los nombres exactos de las opciones cambian entre versiones.',
            'Usa Aider, Cline o Roo Code con modelos locales si: quieres coste cero de API durante el desarrollo, tu código no puede salir de tu máquina, o estás probando prompts antes de pasar a un modelo en la nube en producción. Evita los modelos locales en estas herramientas si necesitas razonamiento con un contexto más largo del que un modelo con 8-24 GB de VRAM puede manejar de forma fiable -- en ese caso, cambia a un modelo en la nube o a un modelo local más grande (Llama 4 Scout).',
          ],
          rows: [
            { 'Herramienta': 'Cline', 'Ubicación de configuración': 'Ajustes de la extensión VS Code → API Provider → OpenAI Compatible', 'Base URL local': 'http://localhost:11434/v1 (Ollama) o :1234/v1 (LM Studio)' },
            { 'Herramienta': 'Roo Code', 'Ubicación de configuración': 'Ajustes de la extensión VS Code → API Provider (mismo patrón que Cline)', 'Base URL local': 'http://localhost:11434/v1 (Ollama) o :1234/v1 (LM Studio)' },
            { 'Herramienta': 'Aider', 'Ubicación de configuración': 'Variables de entorno OPENAI_API_BASE / OPENAI_API_KEY u opciones CLI', 'Base URL local': 'http://localhost:11434/v1 (Ollama) o :1234/v1 (LM Studio)' },
          ],
          columns: ['Herramienta', 'Ubicación de configuración', 'Base URL local'],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'APIs de LLMs locales compatibles con OpenAI por región',
          content: [
            '**UE / RGPD y AI Act:** Para los desarrolladores de la UE, ejecutar Ollama localmente garantiza el cumplimiento del artículo 5 del RGPD (minimización de datos) -- toda la inferencia permanece en el dispositivo sin transferencia de datos a APIs en la nube. Ollama se descarga desde GitHub bajo licencia MIT, cumpliendo los requisitos de conformidad de la UE. Las obligaciones de sistemas de alto riesgo del AI Act de la UE aplican desde el 2 de agosto de 2026 (pendiente Digital Omnibus). La inferencia local de API satisface los requisitos de residencia de datos del RGPD por defecto. Para empresas, esto elimina la dependencia del proveedor -- los datos de inferencia permanecen en su propia red (sin riesgo de transferencia transfronteriza del art. 44 del RGPD para datos de inferencia).',
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
            {
              q: '¿Cómo uso Aider con un modelo local a través de Ollama o LM Studio?',
              a: 'Apunta Aider a tu servidor local compatible con OpenAI estableciendo las variables de entorno OPENAI_API_BASE y OPENAI_API_KEY (o las opciones CLI equivalentes) en http://localhost:11434/v1 (Ollama) o http://localhost:1234/v1 (LM Studio), con cualquier cadena como key. Aider también tiene soporte nativo para Ollama mediante su propio prefijo de proveedor -- consulta la documentación de Aider para el método actualmente preferido.',
            },
            {
              q: '¿Pueden Cline o Roo Code usar modelos locales a través de LM Studio u Ollama?',
              a: 'Sí. Ambas extensiones de VS Code incluyen una opción de proveedor OpenAI Compatible en sus ajustes. Introduce http://localhost:11434/v1 (Ollama) o http://localhost:1234/v1 (LM Studio) como Base URL, cualquier cadena como API key, y el nombre exacto del modelo. Roo Code es un fork de Cline y usa el mismo patrón de configuración.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectura relacionada',
          items: [
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- Configura Ollama para exponer la API.',
            '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) -- Ambos exponen APIs compatibles con OpenAI.',
            '[LLMs locales para flujos de trabajo de código](/es/local-llms/local-llms-for-coding-workflows) -- Usar Aider, Cline y otras herramientas de código con IA con modelos locales.',
            '[Los mejores frontends de LLMs locales](/es/local-llms/best-local-llm-frontends) -- Interfaces que usan esta API internamente.',
            '[LLMs locales con VS Code y Cursor](/es/local-llms/local-llms-with-vscode-cursor) -- Editores de código que usan esta API.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/es/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- Diferentes backends que exponen esta API.',
            '[Stack de desarrollo local LLM](/es/local-llms/local-llm-developer-stack) -- Para un stack completo de 3 niveles (CLI → API → producción) más allá de la configuración de compatibilidad de API.',
            '[Salida estructurada y modo JSON](/prompt-engineering/structured-output-and-json-mode) -- Usar la API para aplicar el formato de salida.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- Construir pipelines de API de múltiples pasos con modelos locales.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- Aplicación de formato a nivel de API.',
            '[LLMs locales headless: ejecutar modelos sin interfaz de usuario (2026)](/es/local-llms/headless-local-llms) -- despliegue headless de LLMs locales',
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
        'headline': 'LM Studio y Ollama: documentación de la API compatible con OpenAI — Python, Node.js, Aider, Cline y Roo Code (2026)',
        'description': 'LM Studio (localhost:1234) y Ollama (localhost:11434): documentación de la API compatible con OpenAI. Python, Node.js, streaming, y configuración de Aider, Cline y Roo Code.',
        'url': 'https://www.promptquorum.com/es/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'Desarrolladores que integran LLMs locales en aplicaciones Python, Node.js o JavaScript' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'inferencia de LLM local' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'Biblioteca Python de OpenAI' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
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
          },
          {
            '@type': 'Question',
            'name': '¿Cómo uso Aider con un modelo local a través de Ollama o LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Establece OPENAI_API_BASE y OPENAI_API_KEY (o las opciones CLI equivalentes) en http://localhost:11434/v1 (Ollama) o http://localhost:1234/v1 (LM Studio), con cualquier cadena como key. Aider también tiene soporte nativo para Ollama mediante su propio prefijo de proveedor.',
            }
          },
          {
            '@type': 'Question',
            'name': '¿Pueden Cline o Roo Code usar modelos locales a través de LM Studio u Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Ambas extensiones de VS Code incluyen una opción de proveedor OpenAI Compatible: Base URL http://localhost:11434/v1 (Ollama) o http://localhost:1234/v1 (LM Studio), cualquier cadena como API key, y el nombre exacto del modelo.',
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
    ar: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Tools & Interfaces',
      title: 'توثيق واجهة ⁨OpenAI⁩ المتوافقة لـ ⁨LM Studio⁩ و⁨Ollama⁩: ⁨Python⁩ و⁨Node.js⁩ و⁨Aider⁩ و⁨Cline⁩ و⁨Roo Code⁩ (⁨2026⁩)',
      seoTitle: 'توثيق واجهة ⁨OpenAI⁩ لـ ⁨LM Studio⁩ و⁨Ollama⁩ (⁨2026⁩)',
      intro: 'يكشف كل من LM Studio (localhost:1234) و Ollama (localhost:11434) و vLLM (localhost:8000) عن واجهات REST API بتنسيق OpenAI -- وهذه الصفحة توثّق كل endpoint وكل تنسيق طلب وكل مثال برمجي. استخدم SDK الرسمي لـ OpenAI الخاص بـ Python أو Node.js مع أي نموذج محلي عبر تغيير سطرين فقط: عيّن base_url إلى endpoint المحلي و api_key إلى أي سلسلة نصية. يربط إعداد base_url نفسه أدوات البرمجة بالذكاء الاصطناعي مثل Aider و Cline و Roo Code بالنماذج المحلية أيضاً. اعتباراً من مايو 2026، هذه هي الطريقة القياسية لتشغيل نماذج LLM المحلية في تطبيقات Python و Node.js الإنتاجية دون تكاليف سحابية أو الاعتماد على مزوّد معيّن.',
      metaDescription: 'توثيق واجهة OpenAI المتوافقة لـ LM Studio (localhost:1234) و Ollama (localhost:11434): Python و Node.js والبث المتدفق، بالإضافة إلى إعداد Aider و Cline و Roo Code.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-ar.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**يكشف كل من LM Studio (localhost:1234) و Ollama (localhost:11434) و vLLM (localhost:8000) عن واجهات REST API بتنسيق OpenAI -- وهذا هو التوثيق الكامل لكل endpoint وتنسيق طلب ومثال برمجي. استخدم SDK الرسمي لـ OpenAI الخاص بـ Python أو Node.js مع أي نموذج محلي عبر تغيير سطرين فقط: عيّن base_url إلى endpoint المحلي و api_key إلى أي سلسلة نصية.**',
      audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي لهم على عتاد استهلاكي',
      dateModified: '2026-07-14',
      readTime: '11 دقائق للقراءة',
      educationalLevel: 'Beginner to Advanced',
      primaryTerm: 'OpenAI-compatible API',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'حقائق سريعة', anchor: '#quick-facts' },
        { label: 'ما المقصود بالتوافق مع OpenAI؟', anchor: '#what-is-openai-compatibility' },
        { label: 'endpoint واجهة Ollama', anchor: '#ollama-api-endpoint' },
        { label: 'Python: استخدام مكتبة OpenAI الرسمية', anchor: '#python-openai-library' },
        { label: 'Node.js: SDK الخاص بـ OpenAI', anchor: '#nodejs-openai' },
        { label: 'LM Studio: خادم متوافق مع OpenAI', anchor: '#lm-studio-api' },
        { label: 'JavaScript: الاستخدام في المتصفح', anchor: '#javascript-browser' },
        { label: 'متقدم: الاستجابات المتدفقة', anchor: '#streaming-responses' },
        { label: 'متقدم: استدعاء الدوال', anchor: '#function-calling' },
        { label: 'إعداد Aider و Cline و Roo Code', anchor: '#ai-coding-tools' },
        { label: 'واجهات نماذج LLM المحلية حسب المنطقة', anchor: '#regional-context' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'الأسئلة الشائعة', anchor: '#common-questions' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'يكشف Ollama عن واجهة REST API على `http://localhost:11434/v1` تطابق واجهة OpenAI تماماً.',
            'استخدم مكتبة Python الخاصة بـ OpenAI: غيّر `api_key="openai"` إلى `api_key="ollama"` وعيّن `base_url="http://localhost:11434/v1"`.',
            'النهج نفسه في Node.js: SDK الخاص بـ OpenAI موجَّه إلى localhost:11434.',
            'الواجهة المتوافقة مع OpenAI متطابقة في Ollama و vLLM و LM Studio -- لا حاجة لأي تغييرات برمجية عند تبديل المزوّد.',
            'اعتباراً من مايو 2026، يعمل البث المتدفق (الاستجابات token بـ token) واستدعاء الدوال مع النماذج المحلية عبر هذه الواجهة.',
            'تتصل Aider و Cline و Roo Code جميعها بالنماذج المحلية عبر إعداد base_url نفسه -- دون الحاجة إلى تكامل منفصل.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '⚡ حقائق سريعة',
          content: [
            '**واجهة Ollama:** `http://localhost:11434/v1` — تطابق `/chat/completions` الخاصة بـ OpenAI تماماً',
            '**واجهة LM Studio:** `http://localhost:1234/v1` — التنسيق نفسه، منفذ مختلف',
            '**واجهة vLLM:** `http://localhost:8000/v1` — خدمة بجودة إنتاجية',
            '**التغيير البرمجي:** سطران — `base_url` و `api_key`. تبقى بقية الشيفرة متطابقة.',
            '**المدعوم:** Chat completions و text completions و embeddings والبث المتدفق واستدعاء الدوال',
            '**أدوات البرمجة بالذكاء الاصطناعي:** تدعم Aider و Cline و Roo Code جميعها وضع مزوّد متوافق مع OpenAI باستخدام base_url نفسه',
            '**المصادقة:** لا شيء افتراضياً — وصول من localhost فقط. أضف reverse proxy للوصول عبر الشبكة.',
            '**النموذج المستخدم في الأمثلة البرمجية:** Llama 4 Scout (أفضل جودة على 12 GB) أو Llama 3.2 3B (خفيف)',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: 'ماذا يعني متوافق مع OpenAI؟',
          content: [
            '**متوافق مع OpenAI يعني أن endpoint الواجهة يعيد الاستجابات بالتنسيق نفسه الذي تستخدمه واجهة OpenAI.** يتيح ذلك لأي مكتبة أو أداة مبنية لـ OpenAI أن تعمل مع النماذج المحلية بمجرد توجيهها إلى عنوان URL مختلف. اطّلع على كيفية مقارنة [Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) في تطبيقهما لهذا المعيار.',
            'مثال: ترسل مكتبة Python الخاصة بـ OpenAI الطلبات هكذا:',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'تقبل واجهة Ollama الطلب نفسه تماماً على `localhost:11434/v1/chat/completions` وتعيد الاستجابة بتنسيق OpenAI:',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            'بما أن التنسيق متطابق، فلا حاجة لتعلّم واجهة جديدة أو إعادة كتابة شيفرتك.',
            '---',
            '🔍 **هل تعلم:** أصبح تنسيق واجهة OpenAI المعيار غير الرسمي لجميع واجهات نماذج LLM. وتدعمه الآن Anthropic (Claude) و Google (Gemini) وجميع أدوات الاستدلال المحلية الرئيسية (Ollama و vLLM و LM Studio و llama.cpp). الشيفرة المكتوبة وفق هذا التنسيق محايدة فعلاً تجاه المزوّد — وهي أقرب ما توصلت إليه صناعة الذكاء الاصطناعي إلى واجهة عالمية.',
          ],
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-ar.png',
          imageCaption: 'يتطلب التبديل من OpenAI إلى Ollama تعديل سطرين -- base_url و api_key -- وتبقى بقية الشيفرة متطابقة.',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'ما هو endpoint واجهة Ollama؟',
          content: '**عند تشغيل `ollama serve`، يبدأ Ollama واجهة REST API على `http://localhost:11434`.** الـ endpoints المتوافقة مع OpenAI هي:',
          rows: [
            { 'Endpoint': 'Chat Completions', 'URL': 'POST http://localhost:11434/v1/chat/completions', 'Descripción': 'يكافئ `/chat/completions` الخاصة بـ OpenAI' },
            { 'Endpoint': 'Text Completions', 'URL': 'POST http://localhost:11434/v1/completions', 'Descripción': 'يكافئ `/completions` الخاصة بـ OpenAI' },
            { 'Endpoint': 'Embeddings', 'URL': 'POST http://localhost:11434/v1/embeddings', 'Descripción': 'يحوّل النص إلى متجهات' },
            { 'Endpoint': 'List Models', 'URL': 'GET http://localhost:11434/v1/models', 'Descripción': 'يسرد النماذج المتاحة' },
          ],
          columns: ['Endpoint', 'URL', 'Descripción'],
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-ar.png',
          imageCaption: 'يعترض Ollama الطلب بتنسيق OpenAI ويشغّل الاستدلال محلياً -- وتُعاد الاستجابة بتنسيق OpenAI نفسه، دون الحاجة إلى الإنترنت.',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: 'كيف تستخدم واجهة Ollama مع Python (مكتبة OpenAI)؟',
          content: [
            '**ثبّت مكتبة OpenAI ووجّهها إلى localhost.**',
            '🔍 **نصيحة احترافية:** عيّن `OPENAI_BASE_URL=http://localhost:11434/v1` كمتغيّر بيئة. تقرأ العديد من الأدوات (LangChain و LlamaIndex و aider) هذا المتغيّر تلقائياً — دون أي تغييرات برمجية. يمكنك التبديل بين OpenAI و Ollama عبر تعديل متغيّر بيئة واحد فقط.',
          ],
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama4:scout",  # Best quality on 12 GB VRAM (MoE)\n  # model="llama3.2:3b",  # Lightweight alternative for 8 GB RAM\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: 'كيف تستخدم واجهة Ollama مع Node.js؟',
          content: '**ثبّت SDK الخاص بـ OpenAI واربطه بنسخة Ollama المحلية لديك.**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama4:scout",       // Best quality on 12 GB VRAM\n  // model: "llama3.2:3b",     // Lightweight for 8 GB RAM\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'كيف تستخدم خادم LM Studio المتوافق مع OpenAI (localhost:1234)',
          content: [
            '**يكشف LM Studio عن واجهة متوافقة مع OpenAI على `http://localhost:1234/v1`.** فعّلها في علامة التبويب Local Server -- حمّل نموذجاً وانقر على Start Server. تعمل شيفرة Python و Node.js نفسها مع LM Studio -- ما عليك سوى تغيير المنفذ من 11434 إلى 1234.',
            'يناسب LM Studio مستخدمي الواجهة الرسومية الذين يريدون استكشاف النماذج بصرياً والتبديل بينها بسهولة. ويُفضَّل Ollama للنصوص البرمجية والأتمتة وخطوط CI.',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'Plataforma': 'LM Studio', 'Puerto': 'localhost:1234', 'Ideal para': 'مستخدمو الواجهة الرسومية، الإدارة البصرية للنماذج', 'GPU requerida': 'لا (يعمل على CPU)' },
            { 'Plataforma': 'Ollama', 'Puerto': 'localhost:11434', 'Ideal para': 'النصوص البرمجية، الأتمتة، الإنتاج', 'GPU requerida': 'لا (يعمل على CPU)' },
            { 'Plataforma': 'vLLM', 'Puerto': 'localhost:8000', 'Ideal para': 'تعدد وحدات GPU، خوادم عالية الأداء', 'GPU requerida': 'مُوصى بها' },
          ],
          columns: ['Plataforma', 'Puerto', 'Ideal para', 'GPU requerida'],
        },
        javascript: {
          id: 'javascript-browser',
          title: 'كيف تستخدم واجهة Ollama من JavaScript في المتصفح؟',
          content: [
            '**يتطلب استدعاء Ollama من JavaScript على جانب المتصفح أن يكون المتصفح والخادم على الجهاز نفسه (أو أن يكون CORS مسموحاً).** لأسباب أمنية، لا تعمل طلبات المتصفح إلى localhost إلا إذا كان JavaScript يُقدَّم أيضاً من localhost. اطّلع على [أفضل واجهات نماذج LLM المحلية](/ar/local-llms/best-local-llm-frontends) للحصول على واجهات جاهزة للمتصفح تتعامل مع ذلك بشفافية.',
            'إذا كنت بحاجة إلى استدعاء Ollama من متصفح على عنوان IP مختلف، فاضبط proxy لـ CORS أو استخدم middleware على جانب الخادم.',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama4:scout",      // Best quality on 12 GB VRAM\n    // model: "llama3.2:3b",    // Lightweight for 8 GB RAM\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: 'كيف تبث الاستجابات token بـ token؟',
          content: '**يتيح لك البث المتدفق عرض الاستجابات أثناء توليدها، token بـ token، بدلاً من انتظار الاستجابة الكاملة.** اعتباراً من مايو 2026، يعمل البث المتدفق مع جميع النماذج المحلية عبر الواجهة المتوافقة مع OpenAI.',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-es.svg',
          imageCaption: 'مع stream=True، يسلّم Ollama أول token خلال نحو 0.1 ثانية -- يرى المستخدمون المخرجات فوراً بدلاً من انتظار الاستجابة الكاملة.',
        },
        functionCalling: {
          id: 'function-calling',
          title: 'هل يستطيع نموذجك المحلي استدعاء الدوال؟',
          content: [
            '**نعم، اعتباراً من مايو 2026، يعمل استدعاء الدوال مع النماذج المحلية عبر واجهة OpenAI.** تُعرّف مخطط دالة، ويستطيع النموذج الرد بوسائط لتمريرها إلى دالتك. يتيح ذلك لـ [أفضل نماذج LLM المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding) أن تتكامل مع منظومة أدواتك.',
            'يعتمد دعم استدعاء الدوال على النموذج. تدعم Llama 4 Scout و Qwen3 8B و Gemma 4 9B و Mistral Small 3.1 استدعاء الأدوات بشكل موثوق. كما تدعمه Llama 3.3 8B و Qwen3 7B أيضاً (إصدارات أقدم). قد لا تنتج النماذج الأصغر (3B) JSON منظَّماً لاستدعاء الأدوات بشكل موثوق.',
            'في عام 2026، يوسّع Model Context Protocol (MCP) استدعاء الدوال إلى طبقة موحَّدة لربط الأدوات. يتيح MCP لأي عميل (Claude Code و Cursor والتطبيقات المخصصة) الاتصال بأي خادم أدوات عبر بروتوكول واحد — متجاوزاً تعريفات الأدوات لكل طلب الموضحة أعلاه. يدعم Ollama استدعاء الأدوات بأسلوب MCP عبر واجهة استدعاء الدوال القياسية المتوافقة مع OpenAI. لتكاملات الأدوات الإنتاجية، يتحول MCP إلى المعيار؛ وتبقى أمثلة استدعاء الدوال هنا هي الأساس.',
            'عند استخدام الواجهات المتوافقة مع OpenAI محلياً، يعمل الإخراج المنظَّم ووضع JSON تماماً كما هو الحال مع الواجهات السحابية. لفرض مطابقة المخطط والتحكم في التنسيق على النماذج المحلية والسحابية، اطّلع على [الإخراج المنظَّم ووضع JSON](https://www.promptquorum.com/prompt-engineering/structured-output-and-json-mode).',
            'تقبل الواجهات المتوافقة مع OpenAI تنسيقات الـ prompt نفسها التي تقبلها الإصدارات السحابية — رسائل النظام ورسائل المستخدم والإخراج المنظَّم. تنطبق المكتبة الكاملة لـ [تقنيات هندسة الـ prompt](https://www.promptquorum.com/prompt-engineering) مباشرة على استدعاءات الواجهة المحلية.',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-es.svg',
          imageCaption: 'تدفق استدعاء الدوال مع Ollama: يعيد النموذج المحلي JSON من نوع tool_call ويشغّل تطبيقك الدالة -- مدعوم من Llama 4 Scout و Qwen3 8B و Gemma 4 9B و Mistral.',
        },
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: 'كيف تربط Aider أو Cline أو Roo Code بنموذج محلي؟',
          content: [
            '**وجّه Aider أو Cline أو Roo Code إلى base_url نفسه المتوافق مع OpenAI المستخدم في بقية هذا الدليل -- `http://localhost:11434/v1` لـ Ollama أو `http://localhost:1234/v1` لـ LM Studio -- واستخدم أي سلسلة نصية كمفتاح API.** تتيح الأدوات الثلاث جميعها وضع مزوّد عام "OpenAI Compatible" مصمَّم تحديداً لهذه الحالة.',
            'تشترك Cline و Roo Code (وهي نسخة مشتقة من Cline) في نمط الإعداد نفسه: افتح إعدادات الإضافة في VS Code، واختر مزوّد OpenAI Compatible API، وأدخل Base URL وأي مفتاح API، ثم أدخل اسم النموذج الدقيق كما يظهر في `ollama list` أو في متصفح النماذج الخاص بـ LM Studio.',
            'تتصل Aider عبر الطبقة المتوافقة مع OpenAI نفسها باستخدام متغيّرَي البيئة `OPENAI_API_BASE` و `OPENAI_API_KEY` (أو خيارات سطر الأوامر المكافئة) الموجَّهة إلى خادمك المحلي. تملك Aider أيضاً دعماً أصلياً لـ Ollama عبر بادئة مزوّد خاصة بها -- راجع توثيق Aider الحالي للطريقة المفضَّلة، لأن أسماء الخيارات الدقيقة تتغيّر بين الإصدارات.',
            'استخدم Aider أو Cline أو Roo Code مع النماذج المحلية إذا: أردت تكلفة API صفرية أثناء التطوير، أو لا يمكن لشيفرتك مغادرة جهازك، أو كنت تختبر الـ prompts قبل التبديل إلى نموذج سحابي في الإنتاج. تجنّب النماذج المحلية في هذه الأدوات إذا احتجت إلى استدلال بسياق أطول مما يستطيع نموذج بذاكرة VRAM من 8 إلى 24 GB معالجته بشكل موثوق -- وحينها انتقل إلى نموذج سحابي أو نموذج محلي أكبر (Llama 4 Scout).',
          ],
          rows: [
            { 'الأداة': 'Cline', 'موقع الإعداد': 'إعدادات إضافة VS Code ← API Provider ← OpenAI Compatible', 'Base URL المحلي': 'http://localhost:11434/v1 (Ollama) أو :1234/v1 (LM Studio)' },
            { 'الأداة': 'Roo Code', 'موقع الإعداد': 'إعدادات إضافة VS Code ← API Provider (النمط نفسه لـ Cline)', 'Base URL المحلي': 'http://localhost:11434/v1 (Ollama) أو :1234/v1 (LM Studio)' },
            { 'الأداة': 'Aider', 'موقع الإعداد': 'متغيّرا البيئة OPENAI_API_BASE / OPENAI_API_KEY أو خيارات CLI', 'Base URL المحلي': 'http://localhost:11434/v1 (Ollama) أو :1234/v1 (LM Studio)' },
          ],
          columns: ['الأداة', 'موقع الإعداد', 'Base URL المحلي'],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'واجهات نماذج LLM المحلية المتوافقة مع OpenAI حسب المنطقة',
          content: [
            '**الاتحاد الأوروبي / اللائحة العامة لحماية البيانات وقانون الذكاء الاصطناعي:** بالنسبة لمطوري الاتحاد الأوروبي، يضمن تشغيل Ollama محلياً الامتثال للمادة 5 من اللائحة العامة لحماية البيانات (تقليل البيانات) -- يبقى كل الاستدلال على الجهاز دون نقل بيانات إلى واجهات سحابية. يُنزَّل Ollama من GitHub بموجب رخصة MIT، بما يلبي متطلبات الامتثال في الاتحاد الأوروبي. تسري التزامات أنظمة المخاطر العالية في قانون الذكاء الاصطناعي للاتحاد الأوروبي اعتباراً من 2 أغسطس 2026 (في انتظار Digital Omnibus). يلبي الاستدلال المحلي للواجهة متطلبات إقامة البيانات في اللائحة العامة لحماية البيانات افتراضياً. وبالنسبة للمؤسسات، يلغي ذلك الاعتماد على المزوّد -- تبقى بيانات الاستنتاج داخل شبكتك الخاصة (لا يوجد خطر نقل عابر للحدود وفق المادة 44 من اللائحة العامة لحماية البيانات لبيانات الاستنتاج).',
            '**إسبانيا وأمريكا اللاتينية / اللائحة العامة لحماية البيانات و LSSI:** في إسبانيا، يفرض قانون خدمات مجتمع المعلومات (LSSI) واللائحة العامة لحماية البيانات معالجة مسؤولة للبيانات الشخصية. يلبي تشغيل Ollama محلياً هذه المتطلبات: لا يوجد نقل للبيانات إلى خوادم خارجية. وفي أمريكا اللاتينية، تفرض دول مثل المكسيك (LFPDPPP) والأرجنتين (القانون 25.326) والبرازيل (LGPD) حماية البيانات الشخصية؛ ويلبي الاستدلال المحلي مع Ollama هذه المتطلبات. يعمل Ollama + Qwen3 8B على حواسيب الشركات المحمولة القياسية (8 GB RAM).',
            '**الصين / CAC:** بالنسبة لعمليات النشر بموجب قانون الأمن السيبراني الصيني (المادة 37 من CAC)، يلبي الاستدلال المحلي متطلبات توطين البيانات -- يعمل Ollama + Qwen3 على أي جهاز Linux دون استدعاءات لواجهات خارجية. تضيف التجزئة اللغوية الأصلية للصينية في Qwen3 كفاءة بنسبة 30-40% مقارنة بـ Llama، مما يقلل من عبء الاستدلال المحلي.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'ما هي الأخطاء الشائعة مع واجهات نماذج LLM المحلية المتوافقة مع OpenAI؟',
          items: [
            '**نسيان أن مفتاح الواجهة يُتجاهَل.** يتطلب Ollama `api_key="ollama"` (أي سلسلة نصية تعمل) لأنه لا يصادق. تعتمد المصادقة الفعلية على ورود الطلب من localhost أو من شبكتك المحلية، لا من الإنترنت.',
            '**عدم إدراك أن اسم النموذج مهم.** إذا استدعيت `/chat/completions` بـ `model="gpt-4"` بينما لم تنزّل سوى `llama3.2:3b` في Ollama، سيفشل الطلب. استخدم أسماء النماذج الدقيقة من `ollama list`.',
            '**افتراض أن Ollama يحتاج إلى الإنترنت.** لا يحتاج إليه. الواجهة محلية بالكامل. لكن إذا حاولت شيفرة Python لديك الاتصال بخوادم OpenAI أولاً (افتراضياً)، فستفشل. عيّن `base_url` صراحةً دائماً.',
            '**أخطاء CORS من المتصفح.** إذا استدعيت Ollama من نص برمجي على جانب المتصفح وحصلت على خطأ CORS، فهذا يعني أن المتصفح حظر الطلب لأسباب أمنية. اطّلع على [نماذج LLM المحلية مع VS Code و Cursor](/ar/local-llms/local-llms-with-vscode-cursor) للحصول على حلول قائمة على المحرر تتجاوز CORS.',
            '**عدم تعيين stream=True عند توقّع البث المتدفق.** إذا أردت استجابات token بـ token، فيجب أن تعيّن `stream=True` صراحةً في الطلب. افتراضياً، ينتظر الاستجابة الكاملة.',
            '**استخدام `llama3.2:3b` في الأمثلة رغم توفّر نماذج أفضل.** تستخدم العديد من الدروس Llama 3.2 3B لأنها تتسع في 8 GB من RAM. إذا كان لديك 12+ GB من VRAM، فانتقل إلى `llama4:scout` — جودة أفضل بشكل كبير لشيفرة الواجهة نفسها. استخدم نماذج 3B فقط لاختبار التكامل مع الواجهة، لا لأحمال العمل الإنتاجية.',
            '**عدم تعيين `OLLAMA_NUM_PARALLEL` للطلبات المتزامنة.** افتراضياً، يعالج Ollama طلباً واحداً في كل مرة. للتطبيقات متعددة المستخدمين أو مجموعات الاختبار المتوازية، عيّن `OLLAMA_NUM_PARALLEL=4` (أو أكثر) للتعامل مع استدعاءات الواجهة المتزامنة. بدون ذلك، تُصطفّ الطلبات ويزداد زمن الاستجابة.',
            '---',
            '⚠️ **تحذير:** لا تملك واجهة Ollama أي مصادقة افتراضياً. إذا كشفتها لشبكتك (`OLLAMA_HOST=0.0.0.0`)، فيمكن لأي شخص على تلك الشبكة إرسال الطلبات وتحميل النماذج واستهلاك موارد GPU. للإعدادات متعددة المستخدمين أو الإنتاجية، ضع reverse proxy (nginx أو Caddy) مع مصادقة أمام Ollama — لا تكشف المنفذ 11434 مباشرة للإنترنت أبداً.',
          ],
          image: '/images/openai-compatible-platform-comparison-es.svg',
          imageCaption: 'يكشف Ollama (المنفذ 11434) و vLLM (المنفذ 8000) و LM Studio (المنفذ 1234) جميعها عن endpoints متوافقة مع OpenAI -- شيفرة عميل متطابقة، منافذ وحالات استخدام مختلفة.',
        },
        faqSection: {
          id: 'common-questions',
          title: 'الأسئلة الشائعة حول واجهات نماذج LLM المحلية',
          faqs: [
            {
              q: 'هل أحتاج إلى تعديل شيفرة OpenAI الخاصة بي لاستخدام Ollama؟',
              a: 'لا. عيّن `base_url="http://localhost:11434/v1"` و `api_key="ollama"`. يبقى كل ما عداهما كما هو. إذا كانت لديك شيفرة تستخدم مكتبة OpenAI، فغيّر هذين السطرين وستعمل مع نموذجك المحلي.',
            },
            {
              q: 'هل يمكنني استخدام الواجهة من حاسوب آخر على شبكتي؟',
              a: 'نعم. افتراضياً، يستمع Ollama على localhost فقط. للسماح بالوصول عبر الشبكة، عيّن متغيّر البيئة `OLLAMA_HOST=0.0.0.0:11434` قبل تشغيل Ollama. ثم وجّه شيفرتك إلى `http://<عنوان-ip-الجهاز>:11434/v1`. انتبه للأمان -- استخدم جدار حماية إن كان الإعداد إنتاجياً.',
            },
            {
              q: 'هل يملك LM Studio واجهة متوافقة مع OpenAI؟',
              a: 'نعم. يكشف LM Studio عن واجهة متوافقة مع OpenAI على `http://localhost:1234/v1`. فعّلها في علامة التبويب Local Server، وحمّل نموذجاً، وانقر على Start Server. استخدم شيفرة Python أو Node.js نفسها التي تستخدمها مع Ollama -- مع تغيير المنفذ فقط (1234 بدلاً من 11434).',
            },
            {
              q: 'هل يمكنني استدعاء عدة نماذج في وقت واحد؟',
              a: 'إذا كانت محمَّلة في Ollama، فنعم. لكن انتبه إلى أن تشغيل نموذجين في وقت واحد يضاعف استخدام VRAM. يجب أن تتوفر لديك ذاكرة GPU كافية.',
            },
            {
              q: 'هل الواجهة مصادَق عليها؟',
              a: 'لا. افتراضياً، لا تملك واجهة Ollama أي مصادقة. يمكن لأي شخص لديه وصول إلى localhost:11434 استخدامها. للإنتاج مع الوصول عبر الشبكة، أضف المصادقة عبر reverse proxy (nginx مع Basic Auth، إلخ).',
            },
            {
              q: 'كيف أستخدم البث المتدفق مع واجهة OpenAI الخاصة بـ Ollama؟',
              a: 'عيّن stream=True في استدعائك لمكتبة OpenAI. يعيد Ollama server-sent events (SSE) مع كل token. في Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).',
            },
            {
              q: 'هل يدعم Ollama استدعاء الدوال / استخدام الأدوات عبر الواجهة؟',
              a: 'نعم، للنماذج التي تدعمه (Llama 4 Scout و Qwen3 8B و Gemma 4 9B و Mistral Small 3.1). كما تدعمه النماذج الأقدم (Llama 3.3 8B و Qwen3 7B) أيضاً. مرّر tools=[] في استدعاء الواجهة كما تفعل مع OpenAI. يحلّل Ollama استدعاءات الأدوات ويعيد JSON منظَّماً. لا تدعمه كل النماذج -- اطّلع على توثيق النموذج.',
            },
            {
              q: 'ما هو MCP وكيف يرتبط بالواجهة المتوافقة مع OpenAI؟',
              a: 'MCP (Model Context Protocol) بروتوكول موحَّد لربط نماذج الذكاء الاصطناعي بالأدوات ومصادر البيانات الخارجية. يبنى على استدعاء الدوال — المعامل نفسه `tools=[]` الموضح في الأمثلة — لكنه يضيف بنية عميل-خادم قياسية تجعل الأدوات قابلة للاكتشاف وإعادة الاستخدام عبر التطبيقات. يدعم Ollama تفاعلات الأدوات بأسلوب MCP عبر endpoint استدعاء الدوال المتوافق مع OpenAI. للتكاملات البسيطة، تكفي أمثلة استدعاء الدوال في هذا المقال. ولسير العمل المعقدة متعددة الأدوات، يوفر MCP نهجاً أكثر تنظيماً.',
            },
            {
              q: 'ما الفرق بين /api/generate و /v1/chat/completions في Ollama؟',
              a: '/api/generate هو endpoint Ollama الأصلي ذو الدور الواحد. أما /v1/chat/completions فهو endpoint المتوافق مع OpenAI متعدد الأدوار. استخدم /v1/chat/completions لجميع المشاريع الجديدة -- فهو يدعم سجل المحادثة ومتوافق مع مكتبات OpenAI.',
            },
            {
              q: 'هل يمكنني استخدام vLLM كواجهة متوافقة مع OpenAI؟',
              a: 'نعم. يشغّل vLLM خادماً متوافقاً مع OpenAI على http://localhost:8000/v1 افتراضياً. ابدأه بـ: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. استخدم شيفرة العميل نفسها التي تستخدمها مع Ollama.',
            },
            {
              q: 'كيف أستخدم واجهة Ollama مع حزمة Node.js openai؟',
              a: 'استورد OpenAI من openai. عيّن baseURL: "http://localhost:11434/v1" و apiKey: "ollama" في المُنشئ. ثم استدعِ client.chat.completions.create() تماماً كما تفعل مع واجهة OpenAI الحقيقية -- دون أي تغييرات أخرى.',
            },
            {
              q: 'كيف أبدّل بين Ollama و OpenAI في الشيفرة نفسها؟',
              a: 'استخدم متغيّر بيئة: عيّن USE_LOCAL=true لـ Ollama (base_url http://localhost:11434/v1، api_key "ollama") و USE_LOCAL=false لـ OpenAI. تقبل مكتبة Python الخاصة بـ OpenAI الـ base_url كوسيط للمُنشئ. عيّن USE_LOCAL=false في الإنتاج للتبديل إلى OpenAI دون تعديل أي شيفرة أخرى.',
            },
            {
              q: 'هل يمكنني استخدام الواجهة المتوافقة مع OpenAI مع LangChain؟',
              a: 'نعم. استخدم ChatOpenAI مع base_url="http://localhost:11434/v1" و api_key="ollama". يحوّل ذلك Ollama إلى بديل مباشر لـ OpenAI في أي خط معالجة في LangChain -- تعمل سلاسل RAG والوكلاء والأدوات دون تعديل. كما يملك LangChain فئة ChatOllama مخصصة لميزات Ollama المحددة.',
            },
            {
              q: 'كيف أستخدم Aider مع نموذج محلي عبر Ollama أو LM Studio؟',
              a: 'وجّه Aider إلى خادمك المحلي المتوافق مع OpenAI عبر تعيين متغيّرَي البيئة OPENAI_API_BASE و OPENAI_API_KEY (أو خيارات CLI المكافئة) إلى http://localhost:11434/v1 (Ollama) أو http://localhost:1234/v1 (LM Studio)، مع أي سلسلة نصية كمفتاح. تملك Aider أيضاً دعماً أصلياً لـ Ollama عبر بادئة مزوّد خاصة بها -- راجع توثيق Aider للطريقة المفضَّلة حالياً.',
            },
            {
              q: 'هل يمكن لـ Cline أو Roo Code استخدام نماذج محلية عبر LM Studio أو Ollama؟',
              a: 'نعم. تتيح إضافتا VS Code كلتاهما خيار مزوّد OpenAI Compatible في الإعدادات. أدخل http://localhost:11434/v1 (Ollama) أو http://localhost:1234/v1 (LM Studio) كـ Base URL، وأي سلسلة نصية كمفتاح API، واسم النموذج الدقيق. Roo Code نسخة مشتقة من Cline وتستخدم نمط الإعداد نفسه.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- اضبط Ollama لكشف الواجهة.',
            '[Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) -- كلاهما يكشف عن واجهات متوافقة مع OpenAI.',
            '[نماذج LLM المحلية لسير عمل البرمجة](/ar/local-llms/local-llms-for-coding-workflows) -- استخدام Aider و Cline وأدوات برمجة أخرى بالذكاء الاصطناعي مع النماذج المحلية.',
            '[أفضل واجهات نماذج LLM المحلية](/ar/local-llms/best-local-llm-frontends) -- واجهات تستخدم هذه الواجهة داخلياً.',
            '[نماذج LLM المحلية مع VS Code و Cursor](/ar/local-llms/local-llms-with-vscode-cursor) -- محررات شيفرة تستخدم هذه الواجهة.',
            '[Text-Generation-WebUI مقابل vLLM مقابل llama.cpp](/ar/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- خلفيات مختلفة تكشف عن هذه الواجهة.',
            '[حزمة تطوير نماذج LLM المحلية](/ar/local-llms/local-llm-developer-stack) -- للحصول على حزمة كاملة من 3 مستويات (CLI ← API ← الإنتاج) تتجاوز إعداد توافق الواجهة.',
            '[الإخراج المنظَّم ووضع JSON](/prompt-engineering/structured-output-and-json-mode) -- استخدام الواجهة لفرض تنسيق الإخراج.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) -- بناء خطوط معالجة واجهة متعددة الخطوات بنماذج محلية.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) -- فرض التنسيق على مستوى الواجهة.',
            '[نماذج LLM المحلية بلا واجهة (headless): تشغيل النماذج دون واجهة مستخدم (2026)](/ar/local-llms/headless-local-llms) -- نشر نماذج LLM المحلية بلا واجهة',
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- التوثيق الرسمي لـ endpoints REST المتوافقة مع OpenAI في Ollama.',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- توثيق الخادم المحلي المتوافق مع OpenAI في LM Studio على localhost:1234.',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- SDK الرسمي لـ Python المستخدم للاتصال بكل من OpenAI ونماذج LLM المحلية عبر تجاوز base_url.',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- توثيق خادم الواجهة المتوافق مع OpenAI في vLLM (المنفذ 8000، الاستخدام الإنتاجي).',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'توثيق واجهة OpenAI المتوافقة لـ LM Studio و Ollama: Python و Node.js و Aider و Cline و Roo Code (2026)',
        'description': 'توثيق واجهة OpenAI المتوافقة لـ LM Studio (localhost:1234) و Ollama (localhost:11434): Python و Node.js والبث المتدفق، بالإضافة إلى إعداد Aider و Cline و Roo Code.',
        'url': 'https://www.promptquorum.com/ar/local-llms/local-llm-openai-compatible-api',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'inLanguage': 'ar',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'audience': { '@type': 'Audience', 'audienceType': 'المطورون الذين يدمجون نماذج LLM المحلية في تطبيقات Python أو Node.js أو JavaScript' },
        'about': [
          { '@type': 'Thing', 'name': 'Ollama' },
          { '@type': 'Thing', 'name': 'OpenAI API' },
          { '@type': 'Thing', 'name': 'الاستدلال المحلي لنماذج LLM' },
          { '@type': 'Thing', 'name': 'REST API' },
          { '@type': 'Thing', 'name': 'مكتبة Python الخاصة بـ OpenAI' },
          { '@type': 'Thing', 'name': 'Aider' },
          { '@type': 'Thing', 'name': 'Cline' },
          { '@type': 'Thing', 'name': 'Roo Code' },
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
        'inLanguage': 'ar',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'هل أحتاج إلى تعديل شيفرة OpenAI الخاصة بي لاستخدام Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لا. عيّن base_url="http://localhost:11434/v1" و api_key="ollama". يبقى كل ما عداهما كما هو. إذا كانت لديك شيفرة قائمة تستخدم مكتبة OpenAI، فغيّر هذين السطرين وستعمل مع نموذجك المحلي.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام واجهة Ollama من حاسوب آخر على شبكتي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. افتراضياً، يستمع Ollama على localhost فقط. عيّن OLLAMA_HOST=0.0.0.0:11434 قبل تشغيل Ollama للسماح بالوصول عبر الشبكة. وجّه الشيفرة إلى http://<عنوان-ip-الجهاز>:11434/v1. أضف جدار حماية أو reverse proxy لمزيد من الأمان.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يملك LM Studio واجهة متوافقة مع OpenAI؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. يكشف LM Studio عن واجهة متوافقة مع OpenAI على http://localhost:1234/v1. فعّلها في علامة التبويب Local Server. استخدم الشيفرة نفسها التي تستخدمها مع Ollama، مع تغيير المنفذ فقط من 11434 إلى 1234.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استدعاء عدة نماذج في وقت واحد عبر واجهة Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'إذا كان كلا النموذجين محمَّلاً في Ollama، فنعم. تشغيل نموذجين في وقت واحد يضاعف تقريباً استخدام VRAM. تأكد من توفّر ذاكرة GPU كافية قبل تحميل عدة نماذج في وقت واحد.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل واجهة Ollama مصادَق عليها؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لا. افتراضياً، لا يملك Ollama أي مصادقة. يمكن لأي شخص لديه وصول إلى localhost:11434 استخدامها. للاستخدام الإنتاجي المكشوف عبر الشبكة، أضف المصادقة عبر reverse proxy (nginx مع Basic Auth أو OAuth2-proxy).'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أستخدم البث المتدفق مع واجهة OpenAI الخاصة بـ Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'عيّن stream=True في استدعائك لمكتبة OpenAI. يعيد Ollama server-sent events (SSE) مع كل token. في Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يدعم Ollama استدعاء الدوال / استخدام الأدوات عبر الواجهة؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، للنماذج التي تدعمه (Llama 4 Scout و Qwen3 8B و Gemma 4 9B و Mistral Small 3.1). مرّر tools=[] في استدعاء الواجهة كما تفعل مع OpenAI. يحلّل Ollama استدعاءات الأدوات ويعيد JSON منظَّماً. لا تدعمه كل النماذج -- اطّلع على توثيق النموذج.'
            }
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين /api/generate و /v1/chat/completions في Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '/api/generate هو endpoint Ollama الأصلي ذو الدور الواحد. أما /v1/chat/completions فهو endpoint المتوافق مع OpenAI متعدد الأدوار. استخدم /v1/chat/completions لجميع المشاريع الجديدة -- فهو يدعم سجل المحادثة ومتوافق مع مكتبات OpenAI.'
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام vLLM كواجهة متوافقة مع OpenAI؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. يشغّل vLLM خادماً متوافقاً مع OpenAI على http://localhost:8000/v1 افتراضياً. ابدأه بـ: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. استخدم شيفرة العميل نفسها التي تستخدمها مع Ollama.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أستخدم واجهة Ollama مع حزمة Node.js openai؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'استورد OpenAI من openai. عيّن baseURL: "http://localhost:11434/v1" و apiKey: "ollama" في المُنشئ. ثم استدعِ client.chat.completions.create() تماماً كما تفعل مع واجهة OpenAI الحقيقية -- دون أي تغييرات أخرى.'
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أبدّل بين Ollama و OpenAI في الشيفرة نفسها؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'استخدم متغيّر بيئة: عيّن USE_LOCAL=true لـ Ollama (base_url http://localhost:11434/v1، api_key "ollama") و USE_LOCAL=false لـ OpenAI. تقبل مكتبة Python الخاصة بـ OpenAI الـ base_url كوسيط للمُنشئ.',
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام الواجهة المتوافقة مع OpenAI مع LangChain؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. استخدم ChatOpenAI مع base_url="http://localhost:11434/v1" و api_key="ollama". كما يملك LangChain فئة ChatOllama مخصصة لميزات Ollama المحددة.',
            }
          },
          {
            '@type': 'Question',
            'name': 'ما المنفذ الذي يستخدمه LM Studio لواجهته المتوافقة مع OpenAI؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يستخدم LM Studio المنفذ 1234. عنوان URL الأساسي للواجهة هو http://localhost:1234/v1. فعّلها في علامة التبويب Local Server في LM Studio، وحمّل نموذجاً، واستخدم SDK الخاص بـ OpenAI مع base_url="http://localhost:1234/v1" و api_key="lm-studio" (أي سلسلة نصية).',
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أضبط LM Studio كخادم واجهة محلي متوافق مع OpenAI؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'افتح LM Studio، وحمّل نموذجاً، وانتقل إلى علامة التبويب Local Server وانقر على Start Server. يبدأ LM Studio واجهة متوافقة مع OpenAI على http://localhost:1234/v1. ثبّت SDK الخاص بـ OpenAI (pip install openai)، ثم: client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio"). استدعِ client.chat.completions.create() تماماً كما مع OpenAI.',
            }
          },
          {
            '@type': 'Question',
            'name': 'كيف أستخدم Aider مع نموذج محلي عبر Ollama أو LM Studio؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'عيّن OPENAI_API_BASE و OPENAI_API_KEY (أو خيارات CLI المكافئة) إلى http://localhost:11434/v1 (Ollama) أو http://localhost:1234/v1 (LM Studio)، مع أي سلسلة نصية كمفتاح. تملك Aider أيضاً دعماً أصلياً لـ Ollama عبر بادئة مزوّد خاصة بها.',
            }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكن لـ Cline أو Roo Code استخدام نماذج محلية عبر LM Studio أو Ollama؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. تتيح إضافتا VS Code كلتاهما خيار مزوّد OpenAI Compatible: Base URL هو http://localhost:11434/v1 (Ollama) أو http://localhost:1234/v1 (LM Studio)، وأي سلسلة نصية كمفتاح API، واسم النموذج الدقيق.',
            }
          }
        ]
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'ar',
        'name': 'كيفية استخدام LM Studio أو Ollama مع الواجهة المتوافقة مع OpenAI',
        'description': 'اربط Python أو Node.js بـ LM Studio (localhost:1234) أو Ollama (localhost:11434) باستخدام SDK الخاص بـ OpenAI.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'ثبّت SDK الخاص بـ OpenAI',
            'text': 'شغّل pip install openai (Python) أو npm install openai (Node.js). لا حاجة لأي حزمة خاصة بمنصة معينة.',
          },
          {
            '@type': 'HowToStep',
            'name': 'ابدأ LM Studio أو Ollama',
            'text': 'لـ LM Studio: حمّل نموذجاً وفعّل Local Server (المنفذ 1234). لـ Ollama: شغّل ollama serve (المنفذ 11434). يبدأ كلاهما تلقائياً على منفذيهما الخاصين.',
          },
          {
            '@type': 'HowToStep',
            'name': 'عيّن base_url و api_key',
            'text': 'LM Studio: base_url="http://localhost:1234/v1"، api_key="lm-studio". Ollama: base_url="http://localhost:11434/v1"، api_key="ollama". يُتجاهَل api_key محلياً لكن يتطلبه الـ SDK.',
          },
          {
            '@type': 'HowToStep',
            'name': 'استدعِ chat.completions.create',
            'text': 'استخدم client.chat.completions.create(model="اسم-النموذج", messages=[...]) -- مطابق لاستدعاء واجهة OpenAI. يجب أن يطابق اسم النموذج النموذج المحمَّل في LM Studio أو المثبَّت في Ollama.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'ar',
        'name': 'منافذ الواجهة المتوافقة مع OpenAI لنماذج LLM المحلية: LM Studio و Ollama و vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- التفعيل في علامة التبويب Local Server؛ إدارة نماذج قائمة على الواجهة الرسومية؛ لا يتطلب GPU؛ واجهة متوافقة مع OpenAI' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- البدء بـ ollama serve؛ مثالي للنصوص البرمجية والأتمتة؛ لا يتطلب GPU؛ واجهة متوافقة مع OpenAI' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- البدء بـ python -m vllm.entrypoints.openai.api_server؛ يُوصى بـ GPU؛ استخدام إنتاجي عالي الأداء' },
          { '@type': 'ListItem', 'position': 4, 'name': 'endpoint Chat Completions', 'description': 'POST /v1/chat/completions -- مسار endpoint متطابق في LM Studio و Ollama و vLLM؛ تعمل شيفرة العميل نفسها مع الثلاثة' },
        ],
      },
      gammaEmbedUrl: '/presentations/local-llm-openai-compatible-api-static.html',
      gammaDescription: 'يغطي العرض التقديمي أدناه: معيار الواجهة المتوافقة مع OpenAI، وإعداد endpoint الخاص بـ Ollama، وتكامل Python و Node.js في 3 خطوات، والبث المتدفق، واستدعاء الدوال، والامتثال التنظيمي الإقليمي (اللائحة العامة لحماية البيانات في الاتحاد الأوروبي، و APPI اليابان، و CAC الصين). نزّل ملف PDF كبطاقة مرجعية لتكامل واجهة نموذج LLM المحلي.',
    },
    pt: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: 'Tools & Interfaces',
      title: 'Documentação da API compatível com OpenAI: LM Studio, Ollama, Aider, Cline e Roo Code (2026)',
      seoTitle: 'Documentação da API OpenAI: LM Studio e Ollama (2026)',
      intro: 'LM Studio (localhost:1234), Ollama (localhost:11434) e vLLM (localhost:8000) expõem APIs REST no formato OpenAI -- esta página documenta cada endpoint, formato de requisição e exemplo de código. Use o SDK oficial de Python ou Node.js da OpenAI com qualquer modelo local alterando apenas duas linhas: defina base_url para seu endpoint local e api_key para qualquer string. O mesmo ajuste de base_url conecta ferramentas de codificação com IA como Aider, Cline e Roo Code aos seus modelos locais. A partir de maio de 2026, esta é a forma padrão de executar LLMs locais em aplicações Python e Node.js de produção sem custos na nuvem ou dependência de fornecedor.',
      metaDescription: 'Documentação da API compatível com OpenAI do LM Studio (localhost:1234) e Ollama (localhost:11434): Python, Node.js, streaming e configuração de Aider, Cline e Roo Code.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-pt.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio (localhost:1234), Ollama (localhost:11434) e vLLM (localhost:8000) expõem APIs REST no formato OpenAI -- esta é a documentação de cada endpoint, formato de requisição e exemplo de código. Use o SDK oficial de Python ou Node.js da OpenAI com qualquer modelo local alterando apenas duas linhas: defina base_url para seu endpoint local e api_key para qualquer string.**',
      audience: 'Desenvolvedores que querem integrar LLMs locais em aplicações Python ou Node.js',
      dateModified: '2026-07-14',
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
        'headline': 'Documentação da API compatível com OpenAI: LM Studio, Ollama, Aider, Cline e Roo Code (2026)',
        'description': 'Documentação da API compatível com OpenAI do LM Studio (localhost:1234) e Ollama (localhost:11434): Python, Node.js, streaming e configuração de Aider, Cline e Roo Code.',
        'url': 'https://www.promptquorum.com/pt/local-llms/local-llm-openai-compatible-api',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-04',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Preciso modificar meu código OpenAI para usar o Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Não. Defina base_url="http://localhost:11434/v1" e api_key="ollama". O restante permanece igual. Se você já tem código com a biblioteca OpenAI, basta trocar essas duas linhas e ele funciona com seu modelo local.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Posso usar a API do Ollama a partir de outro computador na minha rede?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Por padrão, o Ollama escuta apenas em localhost. Defina OLLAMA_HOST=0.0.0.0:11434 antes de executar o Ollama para permitir acesso pela rede. Aponte o código para http://<ip-da-maquina>:11434/v1. Adicione um firewall ou proxy reverso por segurança.'
            }
          },
          {
            '@type': 'Question',
            'name': 'O LM Studio tem uma API compatível com OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. O LM Studio expõe uma API compatível com OpenAI em http://localhost:1234/v1. Ative-a na aba Local Server. Use o mesmo código do Ollama, alterando apenas a porta de 11434 para 1234.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Posso chamar vários modelos simultaneamente via API do Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Se ambos os modelos estiverem carregados no Ollama, sim. Executar dois modelos simultaneamente aproximadamente dobra o uso de VRAM. Certifique-se de ter memória de GPU suficiente antes de carregar vários modelos ao mesmo tempo.'
            }
          },
          {
            '@type': 'Question',
            'name': 'A API do Ollama é autenticada?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Não. Por padrão, o Ollama não tem autenticação. Qualquer pessoa com acesso a localhost:11434 pode usá-la. Para uso em produção exposto à rede, adicione autenticação via proxy reverso (nginx com Basic Auth ou OAuth2-proxy).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Como uso streaming com a API OpenAI do Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Defina stream=True na sua chamada da biblioteca OpenAI. O Ollama retorna eventos enviados pelo servidor (SSE) com cada token. Em Python: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).'
            }
          },
          {
            '@type': 'Question',
            'name': 'O Ollama suporta function calling / uso de ferramentas via API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim, para modelos que suportam isso (Llama 3.3 8B, Qwen3 7B, Mistral). Passe tools=[] na chamada da API como faria com a OpenAI. O Ollama analisa as chamadas de ferramentas e retorna JSON estruturado. Nem todos os modelos suportam isso -- verifique a documentação do modelo.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Qual a diferença entre /api/generate e /v1/chat/completions do Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '/api/generate é o endpoint nativo de turno único do Ollama. /v1/chat/completions é o endpoint multi-turno compatível com OpenAI. Use /v1/chat/completions para todos os novos projetos -- ele suporta histórico de conversa e é compatível com bibliotecas OpenAI.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Posso usar o vLLM como uma API compatível com OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. O vLLM executa um servidor compatível com OpenAI em http://localhost:8000/v1 por padrão. Inicie-o com: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Use o mesmo código de cliente do Ollama.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Como uso a API do Ollama com o pacote openai do Node.js?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Importe OpenAI de openai. Defina baseURL: "http://localhost:11434/v1" e apiKey: "ollama" no construtor. Depois chame client.chat.completions.create() exatamente como faria com a API real da OpenAI -- nenhuma outra alteração é necessária.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Como alterno entre Ollama e OpenAI na mesma base de código?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use uma variável de ambiente: defina USE_LOCAL=true para o Ollama (base_url http://localhost:11434/v1, api_key "ollama") e USE_LOCAL=false para a OpenAI. A biblioteca Python da OpenAI aceita base_url como argumento do construtor.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Posso usar a API compatível com OpenAI com o LangChain?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Use ChatOpenAI com base_url="http://localhost:11434/v1" e api_key="ollama". O LangChain também tem uma classe ChatOllama dedicada para recursos específicos do Ollama.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Qual porta o LM Studio usa para sua API compatível com OpenAI?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'O LM Studio usa a porta 1234. A URL base da API é http://localhost:1234/v1. Ative-a na aba Local Server no LM Studio, carregue um modelo e use o SDK da OpenAI com base_url="http://localhost:1234/v1" e api_key="lm-studio" (qualquer string).',
            }
          },
          {
            '@type': 'Question',
            'name': 'Como configuro o LM Studio como um servidor de API OpenAI local?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Abra o LM Studio, carregue um modelo, vá até a aba Local Server e clique em Start Server. O LM Studio inicia uma API compatível com OpenAI em http://localhost:1234/v1. Instale o SDK da OpenAI (pip install openai) e execute: client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio"). Chame client.chat.completions.create() exatamente como faria com a OpenAI.',
            }
          },
          {
            '@type': 'Question',
            'name': 'Como uso o Aider com um modelo local via Ollama ou LM Studio?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Aponte o Aider para seu servidor local compatível com OpenAI definindo as variáveis de ambiente OPENAI_API_BASE e OPENAI_API_KEY (ou as flags de CLI correspondentes) para http://localhost:11434/v1 (Ollama) ou http://localhost:1234/v1 (LM Studio), com qualquer string como chave. O Aider também tem suporte nativo ao Ollama através de seu próprio prefixo de provedor -- consulte a documentação do Aider para o método atualmente recomendado.',
            }
          },
          {
            '@type': 'Question',
            'name': 'O Cline ou o Roo Code podem usar modelos locais através do LM Studio ou Ollama?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Ambas as extensões do VS Code incluem uma opção de provedor OpenAI Compatible em suas configurações. Insira http://localhost:11434/v1 (Ollama) ou http://localhost:1234/v1 (LM Studio) como Base URL, qualquer string como chave de API e o nome exato do modelo. O Roo Code é um fork do Cline e usa o mesmo padrão de configuração.',
            }
          }
        ]
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Como usar o LM Studio ou Ollama com a API compatível com OpenAI',
        'description': 'Conecte Python ou Node.js ao LM Studio (localhost:1234) ou Ollama (localhost:11434) usando o SDK da OpenAI.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Instalar o SDK da OpenAI',
            'text': 'Execute pip install openai (Python) ou npm install openai (Node.js). Nenhum pacote específico de plataforma é necessário.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Iniciar o LM Studio ou Ollama',
            'text': 'Para o LM Studio: carregue um modelo e ative o Local Server (porta 1234). Para o Ollama: execute ollama serve (porta 11434). Ambos iniciam automaticamente em suas respectivas portas.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Definir base_url e api_key',
            'text': 'LM Studio: base_url="http://localhost:1234/v1", api_key="lm-studio". Ollama: base_url="http://localhost:11434/v1", api_key="ollama". O api_key é ignorado localmente, mas é exigido pelo SDK.',
          },
          {
            '@type': 'HowToStep',
            'name': 'Chamar chat.completions.create',
            'text': 'Use client.chat.completions.create(model="model-name", messages=[...]) -- idêntico à chamada da API OpenAI. O nome do modelo deve corresponder ao que está carregado no LM Studio ou instalado no Ollama.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Portas de API compatíveis com OpenAI para LLM local: LM Studio, Ollama e vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Ative na aba Local Server; gerenciamento de modelos via GUI; sem necessidade de GPU; API compatível com OpenAI' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- Inicie com ollama serve; ideal para scripts e automação; sem necessidade de GPU; API compatível com OpenAI' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- Inicie com python -m vllm.entrypoints.openai.api_server; GPU recomendada; uso em produção de alto throughput' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Endpoint Chat Completions', 'description': 'POST /v1/chat/completions -- caminho de endpoint idêntico entre LM Studio, Ollama e vLLM; o mesmo código de cliente funciona com os três' },
        ],
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
            'Aider, Cline e Roo Code se conectam aos modelos locais usando o mesmo ajuste de base_url -- sem integração separada.',
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

  ko: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-11-04',
      theme: '도구 및 인터페이스',
      title: 'LM Studio 및 Ollama OpenAI 호환 API 문서: Python, Node.js, Aider, Cline, Roo Code (2026)',
      seoTitle: 'LM Studio & Ollama OpenAI API 문서 (2026)',
      intro: 'LM Studio(localhost:1234), Ollama(localhost:11434), vLLM(localhost:8000)은 모두 OpenAI 형식의 REST API를 제공합니다. 이 페이지는 모든 엔드포인트, 요청 형식, 코드 예제를 문서화합니다. 두 줄만 변경하면 공식 OpenAI Python 또는 Node.js SDK로 로컬 모델을 사용할 수 있습니다. base_url을 로컬 엔드포인트로, api_key를 임의의 문자열로 설정하면 됩니다. 동일한 base_url 설정으로 Aider, Cline, Roo Code와 같은 AI 코딩 도구도 로컬 모델에 연결할 수 있습니다. 2026년 5월 기준, 이 방식은 클라우드 비용이나 벤더 종속 없이 로컬 LLM을 Python 및 Node.js 프로덕션 애플리케이션에서 실행하는 표준 방법입니다.',
      metaDescription: 'LM Studio(localhost:1234) 및 Ollama(localhost:11434) OpenAI 호환 API 문서: Python, Node.js, 스트리밍, Aider·Cline·Roo Code 설정 방법.',
      heroImage: '/images/local-llm-openai-compatible-api-one-line-change-hero-ko.png',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**LM Studio(localhost:1234), Ollama(localhost:11434), vLLM(localhost:8000)은 모두 OpenAI 형식의 REST API를 제공합니다. 이는 모든 엔드포인트, 요청 형식, 코드 예제에 대한 문서입니다. 두 줄만 변경하면 공식 OpenAI Python 또는 Node.js SDK로 로컬 모델을 사용할 수 있습니다. base_url을 로컬 엔드포인트로, api_key를 임의의 문자열로 설정하면 됩니다.**',
      audience: '소비자용 하드웨어에서 첫 번째 로컬 LLM을 실행하는 입문자',
      dateModified: '2026-07-14',
      readTime: '11분 읽기',
      educationalLevel: '초급에서 고급까지',
      primaryTerm: 'OpenAI 호환 API',
      toc: [
        { label: '핵심 요약', anchor: '#key-takeaways' },
        { label: '빠른 정보', anchor: '#quick-facts' },
        { label: 'OpenAI 호환성이란?', anchor: '#what-is-openai-compatibility' },
        { label: 'Ollama API 엔드포인트', anchor: '#ollama-api-endpoint' },
        { label: 'Python: 공식 OpenAI 라이브러리 사용법', anchor: '#python-openai-library' },
        { label: 'Node.js: OpenAI SDK', anchor: '#nodejs-openai' },
        { label: 'LM Studio: OpenAI 호환 서버', anchor: '#lm-studio-api' },
        { label: 'JavaScript: 브라우저 사용법', anchor: '#javascript-browser' },
        { label: '고급: 스트리밍 응답', anchor: '#streaming-responses' },
        { label: '고급: 함수 호출', anchor: '#function-calling' },
        { label: 'Aider, Cline, Roo Code 설정', anchor: '#ai-coding-tools' },
        { label: '지역별 로컬 LLM OpenAI API', anchor: '#regional-context' },
        { label: '자주 발생하는 실수', anchor: '#common-mistakes' },
        { label: '자주 묻는 질문', anchor: '#common-questions' },
        { label: '관련 문서', anchor: '#related-reading' },
        { label: '출처', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Ollama는 OpenAI API와 동일한 형식의 REST API를 `http://localhost:11434/v1`에서 제공합니다.',
            'OpenAI Python 라이브러리 사용 시: `api_key="openai"`를 `api_key="ollama"`로, `base_url="http://localhost:11434/v1"`로 변경하면 됩니다.',
            'Node.js도 동일한 방식으로 사용 가능합니다. OpenAI SDK를 사용하여 localhost:11434로 연결하면 됩니다.',
            'OpenAI 호환 API는 Ollama, vLLM, LM Studio 모두 동일합니다. 코드 변경 없이 제공자를 전환할 수 있습니다.',
            '2026년 5월 기준, 스트리밍(토큰별 응답)과 함수 호출 모두 이 API를 통해 로컬 모델에서 작동합니다.',
            'Aider, Cline, Roo Code는 모두 동일한 base_url 설정으로 로컬 모델에 연결됩니다. 별도의 통합 작업이 필요하지 않습니다.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: '⚡ 빠른 정보',
          content: [
            '**Ollama API:** `http://localhost:11434/v1` — OpenAI의 `/chat/completions`와 완전히 동일',
            '**LM Studio API:** `http://localhost:1234/v1` — 동일한 형식, 다른 포트',
            '**vLLM API:** `http://localhost:8000/v1` — 프로덕션 수준 서빙',
            '**코드 변경:** 2줄 — `base_url`과 `api_key`. 나머지 코드는 그대로 유지됩니다.',
            '**지원 기능:** 채팅 완성, 텍스트 완성, 임베딩, 스트리밍, 함수 호출',
            '**AI 코딩 도구:** Aider, Cline, Roo Code는 모두 동일한 base_url을 사용하는 OpenAI 호환 제공자 모드를 지원합니다',
            '**인증:** 기본적으로 없음 — localhost 접근만 가능. 네트워크 접근을 위해서는 리버스 프록시를 추가하세요.',
            '**코드 예제 모델:** Llama 4 Scout (12 GB에서 최고 품질, MoE) 또는 Llama 3.2 3B (경량형)',
          ],
        },
        whatIsOpenAI: {
          id: 'what-is-openai-compatibility',
          title: 'OpenAI 호환이란 무엇을 의미합니까?',
          content: [
            '**OpenAI 호환이란 API 엔드포인트가 OpenAI API와 동일한 형식으로 응답을 반환한다는 의미입니다.** 이를 통해 OpenAI용으로 만들어진 모든 라이브러리나 도구가 다른 URL을 가리키는 것만으로 로컬 모델과 함께 작동할 수 있습니다. 이 표준의 구현 방식에서 [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio)가 어떻게 다른지 알아보세요.',
            '예시: OpenAI Python 라이브러리는 다음과 같이 요청을 보냅니다:',
            '```\nPOST /chat/completions\n{\n  "model": "gpt-4o",\n  "messages": [...],\n  "temperature": 0.7\n}\n```',
            'Ollama의 API는 `localhost:11434/v1/chat/completions`에서 완전히 동일한 요청을 수신하며 OpenAI 형식으로 응답을 반환합니다:',
            '```\n{\n  "choices": [{\"message\": {\"content\": \"...\"}}],\n  "usage\": {\"prompt_tokens\": 10, \"completion_tokens\": 20}\n}\n```',
            '형식이 동일하기 때문에 새로운 API를 배울 필요도, 코드를 다시 작성할 필요도 없습니다.',
            '---',
            '🔍 **알고 계셨습니까?** OpenAI API 형식은 모든 LLM API의 비공식 표준이 되었습니다. Anthropic(Claude), Google(Gemini), 그리고 모든 주요 로컬 추론 도구(Ollama, vLLM, LM Studio, llama.cpp)가 이 형식을 지원합니다. 이 형식으로 작성된 코드는 진정한 의미에서 제공자에 독립적입니다. AI 업계가 보유한 범용 API에 가장 가까운 형태입니다.',
          ],
          image: '/images/local-llm-openai-compatible-api-one-line-change-hero-ko.png',
          imageCaption: 'OpenAI에서 Ollama로 전환하려면 base_url과 api_key 두 줄만 변경하면 됩니다. 나머지 코드는 그대로 유지됩니다.',
        },
        ollamaEndpoint: {
          id: 'ollama-api-endpoint',
          title: 'Ollama의 API 엔드포인트는 무엇입니까?',
          content: '**`ollama serve`를 실행하면 Ollama가 `http://localhost:11434`에서 REST API를 시작합니다.** OpenAI 호환 엔드포인트는 다음과 같습니다:',
          rows: [
            { 'Endpoint': '채팅 완성', 'URL': 'POST http://localhost:11434/v1/chat/completions', 'Description': 'OpenAI의 `/chat/completions`와 일치' },
            { 'Endpoint': '텍스트 완성', 'URL': 'POST http://localhost:11434/v1/completions', 'Description': 'OpenAI의 `/completions`와 일치' },
            { 'Endpoint': '임베딩', 'URL': 'POST http://localhost:11434/v1/embeddings', 'Description': '텍스트를 벡터로 변환' },
            { 'Endpoint': '모델 목록', 'URL': 'GET http://localhost:11434/v1/models', 'Description': '사용 가능한 모델 목록 조회' },
          ],
          columns: ['Endpoint', 'URL', 'Description'],
          image: '/images/local-llm-openai-compatible-api-api-request-flow-hero-ko.png',
          imageCaption: 'Ollama는 OpenAI 형식의 요청을 받아 로컬에서 추론을 실행합니다. 응답은 동일한 OpenAI 형식으로 반환되며 인터넷 연결이 필요 없습니다.',
        },
        pythonOpenAI: {
          id: 'python-openai-library',
          title: 'Python에서 Ollama API를 사용하는 방법(OpenAI 라이브러리)?',
          content: [
            '**OpenAI 라이브러리를 설치하고 localhost를 가리키도록 설정하면 됩니다.**',
            '🔍 **전문가 팁:** `OPENAI_BASE_URL=http://localhost:11434/v1`을 환경 변수로 설정하세요. 많은 도구(LangChain, LlamaIndex, aider)가 이 변수를 자동으로 읽습니다. 코드를 변경할 필요 없이 환경 변수 하나만 바꿔서 OpenAI와 Ollama를 전환할 수 있습니다.',
          ],
          codeBlock: '# 1. Install the OpenAI library\npip install openai\n\n# 2. Connect to Ollama\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"  # dummy key; Ollama ignores it\n)\n\n# 3. Make a request\nresponse = client.chat.completions.create(\n  model="llama4:scout",  # Best quality on 12 GB VRAM (MoE)\n  # model="llama3.2:3b",  # Lightweight alternative for 8 GB RAM\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
        },
        nodejs: {
          id: 'nodejs-openai',
          title: 'Node.js에서 Ollama API를 사용하는 방법은?',
          content: '**OpenAI SDK를 설치하고 로컬 Ollama 인스턴스에 연결하면 됩니다.**',
          codeBlock: '// 1. Install\nnpm install openai\n\n// 2. Connect to Ollama\nconst OpenAI = require("openai").default;\n\nconst client = new OpenAI({\n  baseURL: "http://localhost:11434/v1",\n  apiKey: "ollama"\n});\n\n// 3. Make a request\nconst response = await client.chat.completions.create({\n  model: "llama4:scout",       // Best quality on 12 GB VRAM\n  // model: "llama3.2:3b",     // Lightweight for 8 GB RAM\n  messages: [{\n    role: "user",\n    content: "What is 2+2?"\n  }]\n});\n\nconsole.log(response.choices[0].message.content);',
          codeLanguage: 'javascript',
        },
        lmStudio: {
          id: 'lm-studio-api',
          title: 'LM Studio OpenAI 호환 서버 사용법(localhost:1234)',
          content: [
            '**LM Studio는 `http://localhost:1234/v1`에서 OpenAI 호환 API를 제공합니다.** 로컬 서버 탭에서 활성화하고 모델을 불러온 후 서버 시작을 클릭하면 됩니다. 동일한 Python 및 Node.js 코드가 LM Studio에서도 작동합니다. 포트만 11434에서 1234로 변경하면 됩니다.',
            'LM Studio는 GUI를 통해 모델을 탐색하고 쉽게 전환하려는 사용자에게 적합합니다. 스크립팅, 자동화, CI 파이프라인에는 Ollama가 더 적합합니다.',
          ],
          codeBlock: '# Python: Connect to LM Studio (localhost:1234)\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:1234/v1",\n  api_key="lm-studio"  # any string; LM Studio ignores it\n)\n\nresponse = client.chat.completions.create(\n  model="llama-3.2-3b-instruct",  # exact model name shown in LM Studio\n  messages=[\n    {"role": "user", "content": "What is 2+2?"}\n  ]\n)\n\nprint(response.choices[0].message.content)',
          codeLanguage: 'python',
          rows: [
            { 'Platform': 'LM Studio', 'Port': 'localhost:1234', 'Best For': 'GUI 사용자, 시각적 모델 관리', 'GPU Required': '아니오 (CPU 가능)' },
            { 'Platform': 'Ollama', 'Port': 'localhost:11434', 'Best For': '스크립팅, 자동화, 프로덕션', 'GPU Required': '아니오 (CPU 가능)' },
            { 'Platform': 'vLLM', 'Port': 'localhost:8000', 'Best For': '다중 GPU, 고처리량 서버', 'GPU Required': '권장' },
          ],
          columns: ['Platform', 'Port', 'Best For', 'GPU Required'],
        },
        javascript: {
          id: 'javascript-browser',
          title: '브라우저 JavaScript에서 Ollama API를 사용하는 방법은?',
          content: [
            '**브라우저 측 JavaScript에서 Ollama를 호출하려면 브라우저와 서버가 같은 머신에 있어야 하거나 CORS를 허용해야 합니다.** 보안상의 이유로 localhost에 대한 브라우저 요청은 JavaScript가 localhost에서 제공될 때만 작동합니다. CORS를 원활하게 처리하는 브라우저용 UI는 [최고의 로컬 LLM 프론트엔드](/local-llms/best-local-llm-frontends)를 확인하세요.',
            '다른 IP의 브라우저에서 Ollama를 호출해야 하는 경우 CORS 프록시를 설정하거나 서버 측 미들웨어를 사용하세요.',
          ],
          codeBlock: '// Browser-side JavaScript (if server is localhost:3000, Ollama is localhost:11434)\nfetch("http://localhost:11434/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "llama4:scout",      // Best quality on 12 GB VRAM\n    // model: "llama3.2:3b",    // Lightweight for 8 GB RAM\n    messages: [{ role: "user", content: "What is 2+2?" }]\n  })\n})\n  .then(res => res.json())\n  .then(data => console.log(data.choices[0].message.content))',
          codeLanguage: 'javascript',
        },
        streaming: {
          id: 'streaming-responses',
          title: '토큰별 응답 스트리밍 방법은?',
          content: '**스트리밍을 사용하면 전체 응답을 기다리지 않고 생성되는 대로 토큰 단위로 응답을 표시할 수 있습니다.** 2026년 5월 기준, 스트리밍은 OpenAI 호환 API를 통한 모든 로컬 모델에서 작동합니다.',
          codeBlock: '# Python: streaming example\nfrom openai import OpenAI\n\nclient = OpenAI(\n  base_url="http://localhost:11434/v1",\n  api_key="ollama"\n)\n\nstream = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "Count to 10"}],\n  stream=True\n)\n\nfor chunk in stream:\n  if chunk.choices[0].delta.content:\n    print(chunk.choices[0].delta.content, end="", flush=True)',
          codeLanguage: 'python',
          image: '/images/openai-compatible-streaming-vs-batch-en.svg',
          imageCaption: 'stream=True를 사용하면 Ollama가 약 0.1초 내에 첫 번째 토큰을 전달합니다. 전체 응답을 기다리지 않고 즉시 출력을 볼 수 있습니다.',
        },
        functionCalling: {
          id: 'function-calling',
          title: '로컬 모델에서 함수를 호출할 수 있습니까?',
          content: [
            '**네, 2026년 5월 기준으로 OpenAI API를 통해 로컬 모델에서 함수 호출이 가능합니다.** 함수 스키마를 정의하면 모델이 함수에 전달할 인수로 응답할 수 있습니다. 이를 통해 [코딩을 위한 최고의 로컬 LLM](/local-llms/best-local-llms-for-coding)이 도구 생태계와 통합될 수 있습니다.',
            '함수 호출 지원 여부는 모델에 따라 다릅니다. Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral Small 3.1 모두 도구 호출을 안정적으로 지원합니다. Llama 3.3 8B와 Qwen3 7B도 지원됩니다(레거시). 더 작은 모델(3B)은 구조화된 도구 호출 JSON을 안정적으로 생성하지 못할 수 있습니다.',
            '2026년에는 Model Context Protocol(MCP)이 함수 호출을 표준화된 도구 연결 레이어로 확장합니다. MCP는 모든 클라이언트(Claude Code, Cursor, 커스텀 앱)가 단일 프로토콜을 통해 모든 도구 서버에 연결할 수 있게 합니다. 위에 표시된 요청별 도구 정의를 넘어섭니다. Ollama는 표준 OpenAI 호환 함수 호출 API를 통해 MCP 스타일의 도구 호출을 지원합니다. 프로덕션 도구 통합의 경우 MCP가 표준이 되고 있으며, 여기의 함수 호출 예제는 그 기반입니다.',
            'OpenAI 호환 API를 로컬에서 사용할 때 구조화된 출력과 JSON 모드는 클라우드 API와 동일한 방식으로 작동합니다. 로컬 및 클라우드 모델에서 스키마 준수 및 형식 제어를 위해 [구조화된 출력 및 JSON 모드](https://www.promptquorum.com/prompt-engineering/structured-output-and-json-mode)를 참조하세요.',
            'OpenAI 호환 API는 클라우드 버전과 동일한 프롬프트 형식을 수용합니다. 시스템 메시지, 사용자 메시지, 구조화된 출력이 모두 포함됩니다. [프롬프트 엔지니어링 기법](https://www.promptquorum.com/prompt-engineering)의 전체 라이브러리가 로컬 API 호출에 직접 적용됩니다.',
          ],
          codeBlock: '# Example: local model calls a weather function\ntools = [{\n  "type": "function",\n  "function": {\n    "name": "get_weather",\n    "description": "Get current weather",\n    "parameters": {\n      "type": "object",\n      "properties": {\n        "location": {"type": "string"}\n      }\n    }\n  }\n}]\n\nresponse = client.chat.completions.create(\n  model="llama4:scout",\n  messages=[{"role": "user", "content": "What is the weather in SF?"}],\n  tools=tools\n)\n\n# Check if model returned a function call\nif response.choices[0].message.tool_calls:\n  call = response.choices[0].message.tool_calls[0]\n  print(f"Call function: {call.function.name} with {call.function.arguments}")',
          codeLanguage: 'python',
          image: '/images/openai-compatible-function-calling-en.svg',
          imageCaption: 'Ollama를 사용한 함수 호출 흐름: 로컬 모델이 tool_call JSON을 반환하면 앱이 함수를 실행합니다. Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral에서 지원됩니다.',
        },
        aiCodingTools: {
          id: 'ai-coding-tools',
          title: 'Aider, Cline, Roo Code를 로컬 모델에 연결하는 방법은?',
          content: [
            '**Aider, Cline, Roo Code를 이 가이드의 다른 부분에서 사용한 것과 동일한 OpenAI 호환 base_url -- Ollama는 `http://localhost:11434/v1`, LM Studio는 `http://localhost:1234/v1` -- 로 지정하고, API 키에는 임의의 문자열을 사용하면 됩니다.** 세 도구 모두 이러한 용도를 위해 만들어진 범용 "OpenAI Compatible" 제공자 모드를 지원합니다.',
            'Cline과 Roo Code(Cline의 포크)는 동일한 설정 패턴을 공유합니다. VS Code에서 확장 프로그램 설정을 열고, OpenAI Compatible API 제공자를 선택한 다음, Base URL과 임의의 API 키를 입력하고, `ollama list` 또는 LM Studio 모델 브라우저에 표시된 정확한 모델 이름을 입력하면 됩니다.',
            'Aider는 동일한 OpenAI 호환 계층을 사용하여 `OPENAI_API_BASE`와 `OPENAI_API_KEY` 환경 변수(또는 이에 상응하는 명령줄 플래그)를 로컬 서버로 지정하는 방식으로 연결됩니다. Aider는 자체 제공자 접두사를 통한 네이티브 Ollama 지원도 갖추고 있습니다. 정확한 플래그 이름은 버전마다 달라지므로 현재 권장되는 방법은 Aider의 최신 문서를 확인하시기 바랍니다.',
            '개발 중 API 비용을 없애고 싶거나, 코드가 외부로 나가면 안 되거나, 프로덕션에서 클라우드 모델로 전환하기 전에 프롬프트를 테스트하려는 경우에는 Aider, Cline, Roo Code에서 로컬 모델을 사용하십시오. 8-24 GB VRAM 모델이 안정적으로 처리할 수 있는 범위를 넘어서는 긴 컨텍스트 추론이 필요한 경우에는 로컬 모델 사용을 피하고, 클라우드 모델이나 더 큰 로컬 모델(Llama 4 Scout)로 전환하십시오.',
          ],
          rows: [
            { 'Tool': 'Cline', 'Config Location': 'VS Code 확장 설정 → API Provider → OpenAI Compatible', 'Local Base URL': 'http://localhost:11434/v1 (Ollama) 또는 :1234/v1 (LM Studio)' },
            { 'Tool': 'Roo Code', 'Config Location': 'VS Code 확장 설정 → API Provider (Cline과 동일한 패턴)', 'Local Base URL': 'http://localhost:11434/v1 (Ollama) 또는 :1234/v1 (LM Studio)' },
            { 'Tool': 'Aider', 'Config Location': 'OPENAI_API_BASE / OPENAI_API_KEY 환경 변수 또는 CLI 플래그', 'Local Base URL': 'http://localhost:11434/v1 (Ollama) 또는 :1234/v1 (LM Studio)' },
          ],
          columns: ['Tool', 'Config Location', 'Local Base URL'],
        },
        regionalContext: {
          id: 'regional-context',
          title: '지역별 로컬 LLM OpenAI API',
          content: [
            '**EU / GDPR 및 AI 법:** EU 개발자의 경우 Ollama를 로컬에서 실행하면 GDPR 제5조 준수(데이터 최소화)가 보장됩니다. 모든 추론이 클라우드 API로의 데이터 유출 없이 기기에서 처리됩니다. Ollama는 MIT 라이선스로 GitHub에서 다운로드할 수 있어 EU 규정 준수 요건을 충족합니다. EU AI 법 고위험 시스템 의무는 2026년 8월 2일부터 적용됩니다(Digital Omnibus 대기 중). 로컬 API 추론은 기본적으로 GDPR 데이터 거주 요건을 충족합니다. 기업의 경우 벤더 종속을 없애고 데이터 거주를 보장합니다.',
            '**일본 / APPI:** 일본의 개인정보보호법(APPI)에 따르면 온프레미스 모델 추론은 클라우드 데이터 전송 요건을 우회합니다. Ollama + Qwen3 8B는 표준 기업 노트북(8 GB RAM)에서 실행 가능하며 Qwen3 대비 향상된 일본어 지원과 30-50 tok/sec 지연 시간으로 일본어 처리의 실시간 응답 기대치를 충족합니다.',
            '**중국 / CAC:** 중국 사이버보안법(CAC 제37조)에 따른 배포 시 로컬 추론이 데이터 현지화 요건을 충족합니다. Ollama + Qwen3는 외부 API 호출 없이 모든 Linux 기기에서 실행됩니다. Qwen3의 네이티브 중국어 토크나이저는 Llama 대비 30-40% 효율을 높여 로컬 추론 오버헤드를 줄입니다.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '로컬 LLM OpenAI API에서 자주 발생하는 실수는?',
          items: [
            '**API 키가 무시된다는 것을 잊는 경우.** Ollama는 인증하지 않으므로 `api_key="ollama"`(임의의 문자열 가능)가 필요합니다. 실제 인증은 요청이 인터넷이 아닌 localhost나 로컬 네트워크에서 온다는 것입니다.',
            '**모델 이름이 중요하다는 것을 인식하지 못하는 경우.** `/chat/completions`를 `model="gpt-4"`로 호출했지만 Ollama에 `llama3.2:3b`만 풀링되어 있다면 요청이 실패합니다. `ollama list`에서 정확한 모델 이름을 사용하세요.',
            '**Ollama가 인터넷이 필요하다고 가정하는 경우.** 그렇지 않습니다. API는 완전히 로컬입니다. 하지만 Python 코드가 기본적으로 OpenAI 서버에 먼저 접근하려 하면 실패합니다. 항상 `base_url`을 명시적으로 설정하세요.',
            '**브라우저에서의 CORS 오류.** 브라우저 측 스크립트에서 Ollama를 호출할 때 CORS 오류가 발생하면 보안 이유로 브라우저가 요청을 차단한 것입니다. CORS를 우회하는 에디터 기반 솔루션은 [VS Code 및 Cursor로 로컬 LLM 사용하기](/local-llms/local-llms-with-vscode-cursor)를 참조하세요.',
            '**스트리밍을 원할 때 stream=True를 설정하지 않는 경우.** 토큰별 응답을 원한다면 요청에 `stream=True`를 명시적으로 설정해야 합니다. 기본값은 전체 응답을 기다립니다.',
            '**더 나은 모델이 있는데도 예제에서 `llama3.2:3b`를 사용하는 경우.** 많은 튜토리얼이 8 GB RAM에서 실행되기 때문에 아직도 Llama 3.2 3B를 사용합니다. 12+ GB VRAM이 있다면 `llama4:scout`로 전환하세요. 동일한 API 코드로 훨씬 높은 품질을 얻을 수 있습니다. 3B 모델은 API 통합 테스트용으로만 사용하고 프로덕션 워크로드에는 사용하지 마세요.',
            '**동시 요청을 위해 `OLLAMA_NUM_PARALLEL`을 설정하지 않는 경우.** 기본적으로 Ollama는 한 번에 하나의 요청만 처리합니다. 다중 사용자 앱이나 병렬 테스트 스위트의 경우 동시 API 호출을 처리하기 위해 `OLLAMA_NUM_PARALLEL=4`(또는 더 높게)를 설정하세요. 이를 설정하지 않으면 요청이 대기열에 쌓이고 지연 시간이 급증합니다.',
            '---',
            '⚠️ **경고:** Ollama의 API는 기본적으로 인증이 없습니다. 네트워크에 노출하면(`OLLAMA_HOST=0.0.0.0`) 해당 네트워크의 누구나 요청을 보내고, 모델을 불러오고, GPU 리소스를 소비할 수 있습니다. 다중 사용자 또는 프로덕션 설정의 경우 인증이 있는 리버스 프록시(nginx, Caddy)를 Ollama 앞에 배치하세요. 포트 11434를 인터넷에 직접 노출하지 마세요.',
          ],
          image: '/images/openai-compatible-platform-comparison-en.svg',
          imageCaption: 'Ollama(포트 11434), vLLM(포트 8000), LM Studio(포트 1234) 모두 OpenAI 호환 엔드포인트를 제공합니다. 동일한 클라이언트 코드, 다른 포트와 사용 사례입니다.',
        },
        faqSection: {
          id: 'common-questions',
          title: '로컬 LLM API에 관한 자주 묻는 질문',
          faqs: [
            {
              q: 'Ollama를 사용하기 위해 OpenAI 코드를 수정해야 합니까?',
              a: '아니요. `base_url="http://localhost:11434/v1"`와 `api_key="ollama"`를 설정하면 됩니다. 나머지는 그대로 유지됩니다. OpenAI 라이브러리를 사용하는 코드가 있다면 이 두 줄을 교체하면 로컬 모델에서 작동합니다.',
            },
            {
              q: '네트워크의 다른 컴퓨터에서 API를 사용할 수 있습니까?',
              a: '네. 기본적으로 Ollama는 localhost에서만 수신합니다. 네트워크 접근을 허용하려면 Ollama를 실행하기 전에 환경 변수 `OLLAMA_HOST=0.0.0.0:11434`를 설정하세요. 그런 다음 코드에서 `http://<machine-ip>:11434/v1`로 연결하면 됩니다. 보안에 주의하세요. 프로덕션 환경이라면 방화벽을 사용하세요.',
            },
            {
              q: 'LM Studio에는 OpenAI 호환 API가 있습니까?',
              a: '네. LM Studio는 `http://localhost:1234/v1`에서 OpenAI 호환 API를 제공합니다. 로컬 서버 탭에서 활성화하고 모델을 불러온 후 서버 시작을 클릭하세요. Ollama와 동일한 Python 또는 Node.js 코드를 사용하면 됩니다. 포트만 11434에서 1234로 변경하면 됩니다.',
            },
            {
              q: '여러 모델을 동시에 호출할 수 있습니까?',
              a: 'Ollama에 로드되어 있다면 가능합니다. 하지만 두 모델을 동시에 실행하면 VRAM 사용량이 두 배가 됩니다. 충분한 GPU 메모리가 있어야 합니다.',
            },
            {
              q: 'API에 인증이 있습니까?',
              a: '아니요. 기본적으로 Ollama API에는 인증이 없습니다. localhost:11434에 접근할 수 있는 누구나 사용할 수 있습니다. 네트워크 접근이 있는 프로덕션 환경에서는 리버스 프록시(nginx Basic Auth 등)를 통해 인증을 추가하세요.',
            },
            {
              q: 'Ollama OpenAI API에서 스트리밍을 사용하는 방법은?',
              a: 'OpenAI 라이브러리 호출에서 stream=True를 설정하세요. Ollama는 각 토큰과 함께 서버 전송 이벤트(SSE)를 반환합니다. Python에서: for chunk in client.chat.completions.create(stream=True, ...): print(chunk.choices[0].delta.content).',
            },
            {
              q: 'Ollama가 API를 통한 함수 호출/도구 사용을 지원합니까?',
              a: '네, 지원하는 모델에서 가능합니다(Llama 4 Scout, Qwen3 8B, Gemma 4 9B, Mistral Small 3.1). 레거시 모델(Llama 3.3 8B, Qwen3 7B)도 지원됩니다. OpenAI와 동일하게 API 호출에 tools=[]를 전달하면 됩니다. Ollama는 도구 호출을 파싱하고 구조화된 JSON을 반환합니다. 모든 모델이 이를 지원하는 것은 아니므로 모델 문서를 확인하세요.',
            },
            {
              q: 'MCP란 무엇이며 OpenAI 호환 API와 어떤 관계가 있습니까?',
              a: 'MCP(Model Context Protocol)는 AI 모델을 외부 도구 및 데이터 소스에 연결하기 위한 표준화된 프로토콜입니다. 함수 호출 위에 구축됩니다. 위 예제의 동일한 `tools=[]` 매개변수를 사용하지만 표준 서버-클라이언트 아키텍처를 추가하여 도구를 발견 가능하고 애플리케이션 간에 재사용 가능하게 합니다. Ollama는 OpenAI 호환 함수 호출 엔드포인트를 통해 MCP 스타일 도구 상호 작용을 지원합니다. 간단한 통합의 경우 이 문서의 함수 호출 예제로 충분합니다. 복잡한 다중 도구 워크플로의 경우 MCP가 더 구조화된 접근 방식을 제공합니다.',
            },
            {
              q: 'Ollama /api/generate와 /v1/chat/completions의 차이점은?',
              a: '/api/generate는 Ollama의 네이티브 단일 턴 엔드포인트입니다. /v1/chat/completions는 OpenAI 호환 다중 턴 엔드포인트입니다. 모든 새 프로젝트에서는 /v1/chat/completions를 사용하세요. 대화 기록을 지원하며 OpenAI 라이브러리와 호환됩니다.',
            },
            {
              q: 'vLLM을 OpenAI 호환 API로 사용할 수 있습니까?',
              a: '네. vLLM은 기본적으로 http://localhost:8000/v1에서 OpenAI 호환 서버를 실행합니다. 다음 명령으로 시작하세요: python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-v0.1. Ollama와 동일한 클라이언트 코드를 사용하면 됩니다.',
            },
            {
              q: 'Node.js openai 패키지로 Ollama API를 사용하는 방법은?',
              a: 'openai에서 OpenAI를 가져오세요. 생성자에서 baseURL: "http://localhost:11434/v1"과 apiKey: "ollama"를 설정하세요. 그런 다음 실제 OpenAI API와 동일하게 client.chat.completions.create()를 호출하면 됩니다. 다른 변경이 필요 없습니다.',
            },
            {
              q: '동일한 코드베이스에서 Ollama와 OpenAI를 어떻게 전환합니까?',
              a: '환경 변수를 사용하세요. Ollama의 경우 USE_LOCAL=true를 설정하고(base_url http://localhost:11434/v1, api_key "ollama"), OpenAI의 경우 USE_LOCAL=false를 설정합니다. OpenAI Python 라이브러리는 생성자 인수로 base_url을 수용합니다. 프로덕션에서 USE_LOCAL=false로 설정하면 다른 코드를 변경하지 않고도 OpenAI로 전환됩니다.',
            },
            {
              q: 'LangChain과 함께 OpenAI 호환 API를 사용할 수 있습니까?',
              a: '네. base_url="http://localhost:11434/v1"과 api_key="ollama"를 사용하여 ChatOpenAI를 사용하면 됩니다. 이를 통해 Ollama가 모든 LangChain 파이프라인에서 OpenAI의 드롭인 대체품이 됩니다. RAG 체인, 에이전트, 도구 모두 수정 없이 작동합니다. LangChain에는 Ollama 전용 기능을 위한 전용 ChatOllama 클래스도 있습니다.',
            },
            {
              q: 'Ollama나 LM Studio를 통해 Aider에서 로컬 모델을 사용하는 방법은?',
              a: 'OPENAI_API_BASE와 OPENAI_API_KEY 환경 변수(또는 이에 상응하는 CLI 플래그)를 Ollama의 경우 http://localhost:11434/v1, LM Studio의 경우 http://localhost:1234/v1로 설정하고, 키에는 임의의 문자열을 사용하면 됩니다. Aider는 자체 제공자 접두사를 통한 네이티브 Ollama 지원도 갖추고 있습니다. 현재 권장되는 방법은 Aider 문서를 확인하시기 바랍니다.',
            },
            {
              q: 'Cline이나 Roo Code에서 LM Studio나 Ollama를 통해 로컬 모델을 사용할 수 있습니까?',
              a: '네. 두 VS Code 확장 프로그램 모두 설정에 OpenAI Compatible 제공자 옵션이 있습니다. Base URL에 http://localhost:11434/v1(Ollama) 또는 http://localhost:1234/v1(LM Studio), API 키에는 임의의 문자열, 그리고 정확한 모델 이름을 입력하면 됩니다. Roo Code는 Cline의 포크이며 동일한 설정 패턴을 사용합니다.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 문서',
          items: [
            '[Ollama 설치 방법](/local-llms/how-to-install-ollama) -- API를 노출하기 위한 Ollama 설정.',
            '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) -- 둘 다 OpenAI 호환 API를 제공합니다.',
            '[코딩 워크플로를 위한 로컬 LLM](/local-llms/local-llms-for-coding-workflows) -- Aider, Cline 등 AI 코딩 도구를 로컬 모델과 함께 사용하는 방법.',
            '[최고의 로컬 LLM 프론트엔드](/local-llms/best-local-llm-frontends) -- 이 API를 내부적으로 사용하는 UI.',
            '[VS Code 및 Cursor로 로컬 LLM 사용하기](/local-llms/local-llms-with-vscode-cursor) -- 이 API를 사용하는 코드 에디터.',
            '[Text-Generation-WebUI vs vLLM vs llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp) -- 이 API를 노출하는 다양한 백엔드.',
            '[로컬 LLM 개발자 스택](/local-llms/local-llm-developer-stack) -- API 호환성 설정을 넘어선 완전한 3계층 스택(CLI → API → 프로덕션).',
            '[구조화된 출력 및 JSON 모드](/prompt-engineering/structured-output-and-json-mode) -- API를 사용하여 출력 형식을 강제하는 방법.',
            '[프롬프트 체이닝](/prompt-engineering/prompt-chaining) -- 로컬 모델로 다단계 API 파이프라인 구축.',
            '[제약 프롬프팅](/prompt-engineering/constrained-prompting) -- API 수준의 형식 강제.',
            '[헤드리스 로컬 LLM: UI 없이 모델 실행하기 (2026)](/ko/local-llms/headless-local-llms) -- 헤드리스 로컬 LLM 배포',
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            'Ollama. (2026). "Ollama OpenAI Compatibility." https://github.com/ollama/ollama/blob/main/docs/openai.md -- Ollama의 OpenAI 호환 REST API 엔드포인트에 대한 공식 문서.',
            'LM Studio. (2026). "LM Studio Local Server." https://lmstudio.ai/docs/local-server -- localhost:1234의 LM Studio OpenAI 호환 로컬 서버 문서.',
            'OpenAI. (2024). "OpenAI Python Library." https://github.com/openai/openai-python -- base_url 재정의를 통해 OpenAI와 로컬 LLM 모두에 연결하는 데 사용되는 공식 Python SDK.',
            'vLLM Team. (2024). "vLLM OpenAI-Compatible Server." https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html -- vLLM의 OpenAI 호환 API 서버 문서(포트 8000, 프로덕션 사용).',
          ],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'LM Studio 또는 Ollama를 OpenAI 호환 API로 사용하는 방법',
        'description': 'OpenAI SDK를 사용하여 Python 또는 Node.js를 LM Studio(localhost:1234) 또는 Ollama(localhost:11434)에 연결합니다.',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'OpenAI SDK 설치',
            'text': 'pip install openai(Python) 또는 npm install openai(Node.js)를 실행하세요. 플랫폼별 패키지는 필요하지 않습니다.',
          },
          {
            '@type': 'HowToStep',
            'name': 'LM Studio 또는 Ollama 시작',
            'text': 'LM Studio의 경우: 모델을 로드하고 Local Server를 활성화합니다(포트 1234). Ollama의 경우: ollama serve를 실행합니다(포트 11434). 두 경우 모두 해당 포트에서 자동으로 시작됩니다.',
          },
          {
            '@type': 'HowToStep',
            'name': 'base_url과 api_key 설정',
            'text': 'LM Studio: base_url="http://localhost:1234/v1", api_key="lm-studio". Ollama: base_url="http://localhost:11434/v1", api_key="ollama". api_key는 로컬에서는 무시되지만 SDK에서 요구됩니다.',
          },
          {
            '@type': 'HowToStep',
            'name': 'chat.completions.create 호출',
            'text': 'client.chat.completions.create(model="model-name", messages=[...])를 사용하세요. OpenAI API 호출과 동일합니다. 모델 이름은 LM Studio에 로드되었거나 Ollama에 설치된 모델과 일치해야 합니다.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': '로컬 LLM OpenAI 호환 API 포트: LM Studio, Ollama, vLLM',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'LM Studio', 'description': 'localhost:1234/v1 -- Local Server 탭에서 활성화; GUI 기반 모델 관리; GPU 불필요; OpenAI 호환 API' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Ollama', 'description': 'localhost:11434/v1 -- ollama serve로 시작; 스크립팅과 자동화에 최적; GPU 불필요; OpenAI 호환 API' },
          { '@type': 'ListItem', 'position': 3, 'name': 'vLLM', 'description': 'localhost:8000/v1 -- python -m vllm.entrypoints.openai.api_server로 시작; GPU 권장; 고처리량 프로덕션 사용' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Chat Completions 엔드포인트', 'description': 'POST /v1/chat/completions -- LM Studio, Ollama, vLLM 모두 동일한 엔드포인트 경로; 동일한 클라이언트 코드가 세 가지 모두에서 작동함' },
        ],
      },
    },
  };
