// Power Local LLM — The Complete Local LLM Software Directory: 70+ Tools to Run AI on Your Own Hardware (2026)
// Slug: local-llm-software-directory-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Overview & Reference',
    title: 'The Complete Local LLM Software Directory: 70+ Tools to Run AI on Your Own Hardware (2026)',
    seoTitle: 'Local LLM Software Directory 2026: 70+ Tools to Run AI Locally',
    intro:
      'The local-LLM ecosystem in 2026 is large enough that picking the wrong tool first costs hours, not minutes. This directory catalogues 87 actively-maintained projects across nine layers — runtimes, desktop apps, web UIs, coding assistants, RAG systems, agent frameworks, voice and multimodal, mobile clients, and specialized productivity plugins — with the description, licence, and primary URL for each. Use it as the "what exists" map before you commit to a stack; every category ends with a link to the deeper PromptQuorum comparison guide for that layer.',
    metaDescription:
      '87 local-LLM tools across 9 categories: runtimes, desktop apps, web UIs, coding agents, RAG, multi-agent, voice, mobile. With licences and links. 2026.',
    twitterDescription:
      '87 local-LLM tools across 9 categories — runtimes, desktop apps, web UIs, coding agents, RAG, multi-agent frameworks, voice, mobile. Licences and links. The "what exists" map before you commit to a stack.',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    audience:
      'Anyone evaluating the local-LLM ecosystem for the first time, or auditing whether their current stack still represents best-in-class — engineers, IT decision-makers, technical writers, and power users who want a single navigable index instead of five Reddit threads.',
    readTime: '20 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM software',
    targetKeywords: [
      'local llm software directory',
      'best local llm tools 2026',
      'local llm software list',
      'open source llm tools',
      'self-hosted llm software',
      'local ai software ecosystem',
    ],
    leadAnswerBlock:
      '**The local-LLM ecosystem in 2026 splits cleanly into nine layers.** Runtimes (Ollama, llama.cpp, vLLM) move tokens through the model; desktop apps (LM Studio, Jan, GPT4All) wrap a runtime in a chat UI; web UIs (Open WebUI, LibreChat) do the same in a browser; coding assistants (Continue.dev, Cline, Aider) plug a local model into your editor; RAG systems (AnythingLLM, PrivateGPT) point it at your documents; agent frameworks (LangChain, CrewAI, LangGraph) chain calls into multi-step workflows; voice and multimodal stacks (Whisper.cpp, Piper, LLaVA) extend it beyond text; mobile clients (MLC Chat, PocketPal AI) put it on a phone; and specialized productivity plugins (Obsidian, Logseq, AutoGPT) embed it in tools you already use. Pick a runtime first (Ollama for almost everyone), then add one or two layers above. The directory below lists every project worth knowing in each layer along with its licence, so you can plan a stack that is open-source end-to-end if that matters to you.**',
    quickAnswerTop: {
      en: {
        question: 'What are the best local LLM tools to run AI on my own hardware in 2026?',
        answer:
          'Start with a runtime — Ollama is the fastest path for almost everyone, llama.cpp if you want the lowest-level control, vLLM if you need to serve multiple users. Layer a desktop app (LM Studio, Jan, GPT4All) or web UI (Open WebUI, LibreChat) on top for chat. Add a coding harness (Continue.dev, Cline, Aider) if you want autocomplete and chat in your IDE. Add a RAG system (AnythingLLM, PrivateGPT, Open WebUI built-in RAG) if you want to chat with your own documents. Beyond that the catalogue covers agent frameworks, voice and multimodal, mobile clients, and Obsidian/Logseq integrations. The full directory below lists 87 projects with licences and primary URLs.',
        bullets: [
          'Pick a runtime first — Ollama (easiest), llama.cpp (foundational), or vLLM (multi-user serving) cover 95% of use cases.',
          'Add a chat surface — LM Studio (best GUI), Jan (privacy-first), or Open WebUI (browser-based, popular self-host).',
          'For coding: Continue.dev for autocomplete and chat, Cline for autonomous agent edits, Aider for git-native terminal work.',
          'For RAG: AnythingLLM (easiest), PrivateGPT (offline-leaning), Open WebUI (built-in RAG inside the chat UI).',
          'For mobile: MLC Chat or PocketPal AI on Android, Private LLM or Enchanted on iOS — all run actually-useful 2-4B models on flagship phones.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: '1. Runtimes & Inference Engines', anchor: '#runtimes' },
      { label: '2. Desktop GUI Apps', anchor: '#desktop-apps' },
      { label: '3. Web UIs & Browser Frontends', anchor: '#web-uis' },
      { label: '4. Coding Assistants & IDE Integrations', anchor: '#coding-assistants' },
      { label: '5. RAG & Document Chat Systems', anchor: '#rag-systems' },
      { label: '6. Agent Frameworks & Orchestration', anchor: '#agent-frameworks' },
      { label: '7. Voice, Speech & Multimodal', anchor: '#voice-multimodal' },
      { label: '8. Mobile & Edge Clients', anchor: '#mobile-edge' },
      { label: '9. Specialized & Productivity Tools', anchor: '#specialized' },
      { label: 'Common Real-World Stacks', anchor: '#stacks' },
      { label: 'How This Directory Stays Current', anchor: '#how-current' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Nine layers, 87 projects, one map.** Runtimes, desktop apps, web UIs, coding assistants, RAG systems, agent frameworks, voice/multimodal, mobile clients, and specialized productivity plugins — almost every popular project in 2026 fits in exactly one layer.',
          '**Pick a runtime first.** Ollama is the right default for ~95% of readers; llama.cpp is the foundational engine underneath most other tools; vLLM is the production-serving pick for multi-user setups.',
          '**Most layers above the runtime are optional.** A desktop app OR a web UI is enough for chat. Add a coding harness only when you want IDE integration; add a RAG system only when you want to chat with your own documents; add an agent framework only when one-shot calls stop being enough.',
          '**Licence matters for commercial use.** MIT and Apache 2.0 dominate the ecosystem. AGPL appears on a handful of UIs (text-generation-webui, KoboldCpp, Jan, SillyTavern) — fine for personal use, more deliberate for commercial deployments. The "License" column below names every one explicitly.',
          '**Multi-tool stacks are normal.** Ollama + Open WebUI + AnythingLLM + Continue.dev is a single-machine setup that covers chat, RAG, and coding without compromise. The "Common Real-World Stacks" table below names the recipes that actually work in 2026.',
        ],
      },
      runtimes: {
        id: 'runtimes',
        title: '1. Local LLM Runtimes & Inference Engines',
        content:
          '**A runtime is the engine that loads model weights into memory and turns prompts into tokens.** It is the first decision in a local-LLM stack and the one that constrains everything above it — every desktop app, web UI, and coding harness ultimately calls a runtime. Ollama dominates user-facing share in 2026 because it ships an OpenAI-compatible API and a one-command install; llama.cpp is the C++ engine underneath most of the others; vLLM is the right pick when you need to serve concurrent users on a real GPU.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**Ollama**', 'Link': '[ollama.com](https://ollama.com)', 'Description': 'Easiest overall — one-command install, OpenAI-compatible API, huge model library', 'License': 'MIT' },
          { 'Tool': '**llama.cpp**', 'Link': '[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)', 'Description': 'Foundational C++ engine behind most other tools, runs anywhere including Apple Silicon', 'License': 'MIT' },
          { 'Tool': '**vLLM**', 'Link': '[github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)', 'Description': 'High-throughput serving for multi-user GPU deployments', 'License': 'Apache 2.0' },
          { 'Tool': '**LocalAI**', 'Link': '[localai.io](https://localai.io)', 'Description': 'Drop-in OpenAI API replacement supporting multiple backends', 'License': 'MIT' },
          { 'Tool': '**TensorRT-LLM**', 'Link': '[github.com/NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)', 'Description': 'NVIDIA-optimized inference for enterprise GPU rigs', 'License': 'Apache 2.0' },
          { 'Tool': '**MLC LLM**', 'Link': '[mlc.ai/mlc-llm](https://mlc.ai/mlc-llm)', 'Description': 'Mobile and edge device deployment runtime', 'License': 'Apache 2.0' },
          { 'Tool': '**SGLang**', 'Link': '[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)', 'Description': 'Structured inference serving for agent pipelines', 'License': 'Apache 2.0' },
          { 'Tool': '**ExLlamaV2**', 'Link': '[github.com/turboderp-org/exllamav2](https://github.com/turboderp-org/exllamav2)', 'Description': 'Fast quantized inference optimized for RTX GPUs', 'License': 'MIT' },
          { 'Tool': '**KoboldCpp**', 'Link': '[github.com/LostRuins/koboldcpp](https://github.com/LostRuins/koboldcpp)', 'Description': 'Lightweight llama.cpp wrapper with built-in UI', 'License': 'AGPL 3.0' },
          { 'Tool': '**Llamafile**', 'Link': '[github.com/Mozilla-Ocho/llamafile](https://github.com/Mozilla-Ocho/llamafile)', 'Description': 'Single-file portable LLM execution by Mozilla', 'License': 'Apache 2.0' },
          { 'Tool': '**MLX-LM**', 'Link': '[github.com/ml-explore/mlx-examples](https://github.com/ml-explore/mlx-examples)', 'Description': 'Apple Silicon-native runtime by Apple research', 'License': 'MIT' },
        ],
        note: 'Deeper guide: [llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm)',
      },
      desktopApps: {
        id: 'desktop-apps',
        title: '2. Desktop GUI Apps',
        content:
          '**Desktop apps wrap a runtime in a chat interface and a model browser.** They are where most non-technical users start because there is no terminal step — download, click, chat. LM Studio, Jan, and GPT4All hold the bulk of the user base in 2026; AnythingLLM doubles as a desktop app and a RAG layer; Open Interpreter is the outlier that lets a local model drive your computer.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**LM Studio**', 'Link': '[lmstudio.ai](https://lmstudio.ai)', 'Description': 'Most polished GUI, built-in HuggingFace model browser, server mode', 'License': 'Free (closed)' },
          { 'Tool': '**Jan**', 'Link': '[jan.ai](https://jan.ai)', 'Description': 'Privacy-focused offline ChatGPT clone, fully open-source', 'License': 'AGPL 3.0' },
          { 'Tool': '**GPT4All**', 'Link': '[nomic.ai/gpt4all](https://nomic.ai/gpt4all)', 'Description': 'Beginner-friendly with strong CPU-only support', 'License': 'MIT' },
          { 'Tool': '**AnythingLLM**', 'Link': '[anythingllm.com](https://anythingllm.com)', 'Description': 'RAG and document chat with built-in vector store', 'License': 'MIT' },
          { 'Tool': '**Msty**', 'Link': '[msty.app](https://msty.app)', 'Description': 'Clean consumer UX, multi-provider support', 'License': 'Free (closed)' },
          { 'Tool': '**Cherry Studio**', 'Link': '[cherry-ai.com](https://cherry-ai.com)', 'Description': 'Multi-provider desktop AI with extensive customization', 'License': 'Apache 2.0' },
          { 'Tool': '**Faraday**', 'Link': '[faraday.dev](https://faraday.dev)', 'Description': 'Character chat and roleplay desktop client', 'License': 'Free (closed)' },
          { 'Tool': '**Enchanted**', 'Link': '[enchantedlabs.ai](https://enchantedlabs.ai)', 'Description': 'Native macOS/iOS minimal Ollama client', 'License': 'MIT' },
          { 'Tool': '**h2oGPT**', 'Link': '[github.com/h2oai/h2ogpt](https://github.com/h2oai/h2ogpt)', 'Description': 'Enterprise-feature-heavy desktop and server', 'License': 'Apache 2.0' },
          { 'Tool': '**Open Interpreter**', 'Link': '[github.com/OpenInterpreter/open-interpreter](https://github.com/OpenInterpreter/open-interpreter)', 'Description': 'Lets local LLM control your computer and execute code', 'License': 'AGPL 3.0' },
        ],
        note: 'Deeper guide: [LM Studio vs Jan vs GPT4All](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026)',
      },
      webUis: {
        id: 'web-uis',
        title: '3. Web UIs & Browser Frontends',
        content:
          '**Web UIs are self-hosted ChatGPT clones — same conversational surface, but you point them at a runtime running on your own machine or LAN.** They are the natural choice when you want multi-device access (laptop, phone, tablet hitting one server) or team usage. Open WebUI dominates the self-hosted segment in 2026, with LibreChat as the team-features alternative and SillyTavern as the dedicated roleplay UI.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**Open WebUI**', 'Link': '[openwebui.com](https://openwebui.com)', 'Description': 'Most popular self-hosted ChatGPT-like UI with built-in RAG', 'License': 'BSD 3-Clause' },
          { 'Tool': '**LibreChat**', 'Link': '[librechat.ai](https://librechat.ai)', 'Description': 'Multi-model ChatGPT alternative with team features', 'License': 'MIT' },
          { 'Tool': '**text-generation-webui**', 'Link': '[github.com/oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui)', 'Description': 'Power-user UI with extensive plugin ecosystem', 'License': 'AGPL 3.0' },
          { 'Tool': '**SillyTavern**', 'Link': '[github.com/SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern)', 'Description': 'Roleplay and character chat with lorebooks', 'License': 'AGPL 3.0' },
          { 'Tool': '**LobeChat**', 'Link': '[lobehub.com](https://lobehub.com)', 'Description': 'Modern polished UI with plugin marketplace', 'License': 'MIT' },
          { 'Tool': '**Big-AGI**', 'Link': '[github.com/enricoros/big-AGI](https://github.com/enricoros/big-AGI)', 'Description': 'Advanced multi-provider frontend with personas', 'License': 'MIT' },
          { 'Tool': '**NextChat**', 'Link': '[github.com/ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat)', 'Description': 'Lightweight web chat, simple deployment', 'License': 'MIT' },
          { 'Tool': '**Page Assist**', 'Link': '[github.com/n4ze3m/page-assist](https://github.com/n4ze3m/page-assist)', 'Description': 'Browser sidebar AI for Chrome and Firefox', 'License': 'MIT' },
          { 'Tool': '**Chatbox**', 'Link': '[chatboxai.app](https://chatboxai.app)', 'Description': 'Cross-platform desktop and web client', 'License': 'GPLv3' },
        ],
        note: 'Deeper guide: [SillyTavern vs Agnai vs RisuAI](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
      },
      codingAssistants: {
        id: 'coding-assistants',
        title: '4. Coding Assistants & IDE Integrations',
        content:
          '**Coding assistants connect a local LLM to your editor or terminal via OpenAI-compatible APIs.** The choice is mostly about workflow primitive: autocomplete-in-editor (Continue.dev), autonomous agent edits (Cline, OpenHands), or git-native diff edits at the terminal (Aider). All three patterns work against any runtime that speaks the OpenAI Chat Completions protocol — Ollama is the most common backend in 2026.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**Continue.dev**', 'Link': '[continue.dev](https://continue.dev)', 'Description': 'VS Code and JetBrains autocomplete and chat with local models', 'License': 'Apache 2.0' },
          { 'Tool': '**Aider**', 'Link': '[aider.chat](https://aider.chat)', 'Description': 'Terminal pair programmer with multi-file edit support', 'License': 'Apache 2.0' },
          { 'Tool': '**Cline**', 'Link': '[cline.bot](https://cline.bot)', 'Description': 'Autonomous coding agent for VS Code', 'License': 'Apache 2.0' },
          { 'Tool': '**Tabby**', 'Link': '[tabby.tabbyml.com](https://tabby.tabbyml.com)', 'Description': 'Self-hosted GitHub Copilot alternative', 'License': 'Apache 2.0' },
          { 'Tool': '**CodeGPT**', 'Link': '[codegpt.co](https://codegpt.co)', 'Description': 'IDE integrations across multiple editors', 'License': 'MIT' },
          { 'Tool': '**OpenHands**', 'Link': '[github.com/All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)', 'Description': 'AI software engineer agent (formerly OpenDevin)', 'License': 'MIT' },
          { 'Tool': '**Cursor (local mode)**', 'Link': '[cursor.com](https://cursor.com)', 'Description': 'AI-first code editor with local model support', 'License': 'Free (closed)' },
          { 'Tool': '**Twinny**', 'Link': '[github.com/twinnydotdev/twinny](https://github.com/twinnydotdev/twinny)', 'Description': 'Free Copilot alternative for VS Code', 'License': 'MIT' },
        ],
        note: 'Deeper guide: [Continue.dev vs Cline vs Aider](/power-local-llm/continue-dev-vs-cline-vs-aider-local)',
      },
      ragSystems: {
        id: 'rag-systems',
        title: '5. RAG & Document Chat Systems',
        content:
          '**[RAG (Retrieval-Augmented Generation)](/prompt-engineering/rag-explained) systems combine a local LLM with an embedding model and a vector store so the model can answer from your own documents.** The split is between turn-key apps (AnythingLLM, PrivateGPT, Quivr, Khoj) that "just work" and framework libraries (LlamaIndex, Haystack, txtai) that you build on. RAGFlow has gained share in 2026 specifically for documents that need citation-grade retrieval.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**AnythingLLM**', 'Link': '[anythingllm.com](https://anythingllm.com)', 'Description': 'Easiest all-in-one personal RAG with workspaces', 'License': 'MIT' },
          { 'Tool': '**PrivateGPT**', 'Link': '[github.com/zylon-ai/private-gpt](https://github.com/zylon-ai/private-gpt)', 'Description': 'Fully offline enterprise-leaning RAG', 'License': 'Apache 2.0' },
          { 'Tool': '**Quivr**', 'Link': '[github.com/QuivrHQ/quivr](https://github.com/QuivrHQ/quivr)', 'Description': 'Self-hosted personal knowledge assistant', 'License': 'Apache 2.0' },
          { 'Tool': '**Khoj**', 'Link': '[khoj.dev](https://khoj.dev)', 'Description': 'Personal AI second brain, syncs with Obsidian and Notion', 'License': 'AGPL 3.0' },
          { 'Tool': '**Dify**', 'Link': '[dify.ai](https://dify.ai)', 'Description': 'AI workflow builder with RAG and agent support', 'License': 'Modified Apache 2.0' },
          { 'Tool': '**Flowise**', 'Link': '[flowiseai.com](https://flowiseai.com)', 'Description': 'Visual LangChain workflow builder', 'License': 'Apache 2.0' },
          { 'Tool': '**Langflow**', 'Link': '[langflow.org](https://langflow.org)', 'Description': 'Visual AI orchestration with RAG components', 'License': 'MIT' },
          { 'Tool': '**LlamaIndex**', 'Link': '[llamaindex.ai](https://llamaindex.ai)', 'Description': 'RAG framework / Python library — foundation for custom builds', 'License': 'MIT' },
          { 'Tool': '**Haystack**', 'Link': '[haystack.deepset.ai](https://haystack.deepset.ai)', 'Description': 'Search and RAG framework by deepset', 'License': 'Apache 2.0' },
          { 'Tool': '**RAGFlow**', 'Link': '[ragflow.io](https://ragflow.io)', 'Description': 'Deep document understanding for RAG with citation extraction', 'License': 'Apache 2.0' },
          { 'Tool': '**txtai**', 'Link': '[github.com/neuml/txtai](https://github.com/neuml/txtai)', 'Description': 'Embedded vector + LLM database in one library', 'License': 'Apache 2.0' },
        ],
        note: 'Deeper guide: [AnythingLLM vs PrivateGPT vs Open WebUI](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag)',
      },
      agentFrameworks: {
        id: 'agent-frameworks',
        title: '6. Agent Frameworks & Orchestration',
        content:
          '**Agent frameworks turn one-shot LLM calls into multi-step workflows — plan, act, observe, repeat.** LangChain remains the general-purpose default; CrewAI and AutoGen specialise in role-based multi-agent setups; LangGraph is the right pick when state management matters across long-running flows. All eight frameworks below run cleanly against a local Ollama backend.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**LangChain**', 'Link': '[langchain.com](https://langchain.com)', 'Description': 'General-purpose LLM application framework', 'License': 'MIT' },
          { 'Tool': '**LlamaIndex**', 'Link': '[llamaindex.ai](https://llamaindex.ai)', 'Description': 'RAG-focused agent and data framework', 'License': 'MIT' },
          { 'Tool': '**CrewAI**', 'Link': '[crewai.com](https://crewai.com)', 'Description': 'Multi-agent role-based workflows', 'License': 'MIT' },
          { 'Tool': '**AutoGen**', 'Link': '[github.com/microsoft/autogen](https://github.com/microsoft/autogen)', 'Description': 'Microsoft multi-agent orchestration framework', 'License': 'CC-BY-4.0 / MIT' },
          { 'Tool': '**Semantic Kernel**', 'Link': '[learn.microsoft.com/semantic-kernel](https://learn.microsoft.com/semantic-kernel)', 'Description': 'Microsoft enterprise orchestration SDK in C#/Python/Java', 'License': 'MIT' },
          { 'Tool': '**LangGraph**', 'Link': '[langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph)', 'Description': 'Stateful graph-based agent workflows', 'License': 'MIT' },
          { 'Tool': '**Letta** (formerly MemGPT)', 'Link': '[letta.com](https://letta.com)', 'Description': 'Long-term memory agents', 'License': 'Apache 2.0' },
          { 'Tool': '**Pydantic AI**', 'Link': '[ai.pydantic.dev](https://ai.pydantic.dev)', 'Description': 'Type-safe agent framework built on Pydantic', 'License': 'MIT' },
        ],
        note: 'Deeper guide: [Local AI Agents With MCP](/power-local-llm/local-ai-agents-with-mcp-2026)',
      },
      voiceMultimodal: {
        id: 'voice-multimodal',
        title: '7. Voice, Speech & Multimodal',
        content:
          '**Voice and multimodal stacks extend a local LLM beyond text — speech in (STT), speech out (TTS), and vision.** Whisper.cpp and faster-whisper own the local STT layer; Piper and Coqui share the TTS layer with XTTS v2 dominating voice cloning; LLaVA and Ollama vision models cover the vision side. A fully-offline voice assistant is buildable from this layer plus a small chat model.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**Whisper.cpp**', 'Link': '[github.com/ggerganov/whisper.cpp](https://github.com/ggerganov/whisper.cpp)', 'Description': 'Local speech recognition, runs on CPU or GPU', 'License': 'MIT' },
          { 'Tool': '**faster-whisper**', 'Link': '[github.com/SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)', 'Description': 'Fast Whisper transcription via CTranslate2', 'License': 'MIT' },
          { 'Tool': '**Piper TTS**', 'Link': '[github.com/rhasspy/piper](https://github.com/rhasspy/piper)', 'Description': 'Lightweight local text-to-speech', 'License': 'MIT' },
          { 'Tool': '**Coqui TTS**', 'Link': '[coqui.ai](https://coqui.ai)', 'Description': 'Open-source voice synthesis with multiple model options', 'License': 'MPL 2.0' },
          { 'Tool': '**XTTS v2**', 'Link': '[docs.coqui.ai/en/latest/models/xtts.html](https://docs.coqui.ai/en/latest/models/xtts.html)', 'Description': 'Voice cloning with multilingual support', 'License': 'CPML' },
          { 'Tool': '**Bark**', 'Link': '[github.com/suno-ai/bark](https://github.com/suno-ai/bark)', 'Description': 'Generative voice with non-speech sounds', 'License': 'MIT' },
          { 'Tool': '**StyleTTS 2**', 'Link': '[github.com/yl4579/StyleTTS2](https://github.com/yl4579/StyleTTS2)', 'Description': 'High-quality natural-sounding TTS', 'License': 'MIT' },
          { 'Tool': '**LLaVA**', 'Link': '[llava-vl.github.io](https://llava-vl.github.io)', 'Description': 'Local vision + language model', 'License': 'Apache 2.0' },
          { 'Tool': '**Ollama vision models**', 'Link': '[ollama.com](https://ollama.com)', 'Description': 'Local vision via Ollama (Llama 3.2 Vision, Llava, etc.)', 'License': 'Various' },
        ],
        note: 'Deeper guide: [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline)',
      },
      mobileEdge: {
        id: 'mobile-edge',
        title: '8. Mobile & Edge Clients',
        content:
          '**Mobile clients run a quantised model directly on the phone using Apple Neural Engine, Qualcomm NPU, or pure CPU inference.** The MLC LLM project is the foundational layer; consumer apps (PocketPal AI, Private LLM, LLM Farm, Layla) wrap it with a chat UI. Flagship phones in 2026 run 2-4B models at usable speeds (8-15 tokens/sec); 7B is on the edge of feasibility for top-tier hardware.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**MLC Chat**', 'Link': '[mlc.ai/mlc-llm](https://mlc.ai/mlc-llm)', 'Description': 'Cross-platform mobile LLM runtime', 'License': 'Apache 2.0' },
          { 'Tool': '**PocketPal AI**', 'Link': '[github.com/a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai)', 'Description': 'Free iOS and Android local LLM client', 'License': 'MIT' },
          { 'Tool': '**Private LLM**', 'Link': '[privatellm.app](https://privatellm.app)', 'Description': 'Polished iOS and macOS local LLM app', 'License': 'Paid (closed)' },
          { 'Tool': '**LLM Farm**', 'Link': '[github.com/guinmoon/LLMFarm](https://github.com/guinmoon/LLMFarm)', 'Description': 'iOS local LLM with model browser', 'License': 'MIT' },
          { 'Tool': '**Layla**', 'Link': '[layla-network.ai](https://layla-network.ai)', 'Description': 'Android-first local LLM app', 'License': 'Free (closed)' },
          { 'Tool': '**Maid**', 'Link': '[github.com/Mobile-Artificial-Intelligence/maid](https://github.com/Mobile-Artificial-Intelligence/maid)', 'Description': 'Open-source Flutter mobile LLM app', 'License': 'MIT' },
          { 'Tool': '**Enchanted**', 'Link': '[enchantedlabs.ai](https://enchantedlabs.ai)', 'Description': 'Native iOS/macOS Ollama client', 'License': 'MIT' },
          { 'Tool': '**Chapper**', 'Link': '[prevolut.uk](https://prevolut.uk)', 'Description': 'Native Ollama and LM Studio mobile client', 'License': 'Free' },
          { 'Tool': '**RikkaHub**', 'Link': '[github.com/rikkahub/rikkahub](https://github.com/rikkahub/rikkahub)', 'Description': 'Open-source Android local AI', 'License': 'MIT' },
          { 'Tool': '**AnythingLLM Mobile**', 'Link': '[anythingllm.com](https://anythingllm.com)', 'Description': 'Remote access to your local AnythingLLM workspace', 'License': 'MIT' },
        ],
        note: 'Deeper guide: [Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026)',
      },
      specialized: {
        id: 'specialized',
        title: '9. Specialized & Productivity Tools',
        content:
          '**Specialized tools embed local LLMs into apps you already use** — note-taking platforms (Obsidian, Logseq, Joplin), autonomous task agents (AutoGPT, BabyAGI, MetaGPT), and roleplay frontends (Agnai, RisuAI). These are not generic chat surfaces; they are workflow-specific integrations that assume you already have a host app and a runtime.',
        columns: ['Tool', 'Link', 'Description', 'License'],
        rows: [
          { 'Tool': '**Smart Connections**', 'Link': '[github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)', 'Description': 'Obsidian semantic search and chat plugin', 'License': 'GPL 3.0' },
          { 'Tool': '**Copilot for Obsidian**', 'Link': '[github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)', 'Description': 'Obsidian local LLM chat plugin', 'License': 'AGPL 3.0' },
          { 'Tool': '**Text Generator**', 'Link': '[github.com/nhaouari/obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin)', 'Description': 'Obsidian content generation plugin', 'License': 'MIT' },
          { 'Tool': '**logseq-copilot**', 'Link': '[github.com/logancyang/logseq-copilot](https://github.com/logancyang/logseq-copilot)', 'Description': 'Logseq plugin for local and cloud LLM chat, same author as Obsidian Copilot', 'License': 'AGPL 3.0' },
          { 'Tool': '**BMO Chatbot**', 'Link': '[github.com/longy2k/obsidian-bmo-chatbot](https://github.com/longy2k/obsidian-bmo-chatbot)', 'Description': 'Obsidian chatbot with local LLM', 'License': 'MIT' },
          { 'Tool': '**Joplin AI**', 'Link': '[joplinapp.org](https://joplinapp.org)', 'Description': 'Joplin notes with local AI integrations', 'License': 'MIT' },
          { 'Tool': '**AutoGPT (local)**', 'Link': '[github.com/Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)', 'Description': 'Autonomous task agent with Ollama support', 'License': 'MIT' },
          { 'Tool': '**BabyAGI**', 'Link': '[github.com/yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi)', 'Description': 'Lightweight autonomous agent', 'License': 'MIT' },
          { 'Tool': '**MetaGPT**', 'Link': '[github.com/geekan/MetaGPT](https://github.com/geekan/MetaGPT)', 'Description': 'Multi-agent software company simulation', 'License': 'MIT' },
          { 'Tool': '**Agnai**', 'Link': '[agnai.chat](https://agnai.chat)', 'Description': 'Roleplay frontend with character cards', 'License': 'MIT' },
          { 'Tool': '**RisuAI**', 'Link': '[github.com/kwaroran/RisuAI](https://github.com/kwaroran/RisuAI)', 'Description': 'Mobile-friendly roleplay frontend', 'License': 'GPL 3.0' },
        ],
        note: 'Deeper guide: [Local LLM With Obsidian in 2026](/power-local-llm/local-llm-with-obsidian-2026)',
      },
      stacks: {
        id: 'stacks',
        title: 'Common Real-World Stacks',
        content:
          '**For readers who do not want to read nine categories, pick the closest stack and copy it.** Each row pairs a real goal with a tested combination and the hardware floor it actually runs on.',
        columns: ['Goal', 'Stack', 'Hardware floor'],
        rows: [
          { 'Goal': 'Just chat casually', 'Stack': 'LM Studio standalone', 'Hardware floor': '16 GB RAM, no GPU' },
          { 'Goal': 'Best balance for power users', 'Stack': 'Ollama + Open WebUI', 'Hardware floor': '16 GB RAM, optional GPU' },
          { 'Goal': 'Document chat', 'Stack': 'Ollama + AnythingLLM', 'Hardware floor': '16 GB RAM, optional GPU' },
          { 'Goal': 'Coding', 'Stack': 'Ollama + Continue.dev', 'Hardware floor': '16 GB RAM + GPU recommended' },
          { 'Goal': 'Roleplay / creative', 'Stack': 'KoboldCpp + SillyTavern', 'Hardware floor': '16 GB RAM, GPU recommended' },
          { 'Goal': 'Privacy-first business', 'Stack': 'Ollama + Open WebUI + PrivateGPT', 'Hardware floor': '32 GB RAM + 12 GB VRAM' },
          { 'Goal': 'Mobile / on-the-go', 'Stack': 'MLC Chat or PocketPal AI', 'Hardware floor': 'iPhone 13+ / Pixel 7+' },
          { 'Goal': 'Apple Silicon', 'Stack': 'Ollama (MLX backend) or LM Studio', 'Hardware floor': 'M2/M3/M4/M5 with 16+ GB unified' },
          { 'Goal': 'Multi-user team', 'Stack': 'vLLM + Open WebUI', 'Hardware floor': '32+ GB RAM + multi-GPU' },
        ],
      },
      howCurrent: {
        id: 'how-current',
        title: 'How This Directory Stays Current',
        content:
          '**This directory is reviewed every six months** (next refresh: November 2026). Inclusion criteria: project is actively maintained (commits in the last 90 days), has a verifiable open-source licence or a clear commercial-use statement, and either holds meaningful user share in 2026 or fills a layer that would otherwise be empty. Projects that go inactive for more than two release cycles are removed; new entrants that pass the criteria are added at the next review. To suggest a project for inclusion, open an issue or PR against the PromptQuorum repository — include the project URL, licence, and a one-sentence description in the format above.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp) — primary source for runtime architecture and supported models.',
          '[Ollama Library](https://ollama.com/library) — official model catalogue and runtime documentation.',
          '[LM Studio Documentation](https://lmstudio.ai/docs) — feature reference for the dominant desktop GUI.',
          '[Open WebUI Documentation](https://docs.openwebui.com/) — feature reference for the dominant self-hosted web UI.',
          '[Hugging Face Hub](https://huggingface.co/) — primary location for downloading model weights consumed by every runtime listed above.',
          '[awesome-local-llm GitHub list](https://github.com/janhq/awesome-local-ai) — community-maintained inventory used as a sanity check for project inclusion.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is the difference between a local LLM runtime and a desktop app?',
            a: 'A runtime (Ollama, llama.cpp, vLLM) is the engine that loads model weights and serves an API — typically OpenAI-compatible. A desktop app (LM Studio, Jan, GPT4All) is a chat UI that calls a runtime under the hood. Some apps bundle their own runtime (LM Studio embeds llama.cpp), others require you to install a runtime separately (Open WebUI calls Ollama). The runtime decides what is possible; the app decides what is convenient.',
          },
          {
            q: 'Can I use multiple tools from this list at the same time?',
            a: 'Yes — most stacks combine 2-4 tools. A common setup: Ollama as the runtime, Open WebUI for chat, AnythingLLM for document chat, and Continue.dev for coding — all four run against the same Ollama instance on a single machine. The "Common Real-World Stacks" table above lists the recipes that work without conflict.',
          },
          {
            q: 'Which tools work fully offline with no telemetry?',
            a: 'Ollama, llama.cpp, vLLM, Jan, GPT4All, Open WebUI, AnythingLLM, PrivateGPT, Continue.dev, Aider, KoboldCpp, Llamafile, MLX-LM, and most of the AGPL/MIT-licensed apps in this directory work fully offline once the model is downloaded. LM Studio and several closed-source tools have optional analytics that can be disabled in settings — verify by running a packet capture once after install. Browser-based UIs (Open WebUI, LibreChat) are local-only when configured to use a local backend.',
          },
          {
            q: 'Are any of these commercial-licensed (not free for commercial use)?',
            a: 'A handful: LM Studio, Msty, Faraday, Layla, and Cursor are closed-source — generally free to use but not redistributable, and commercial terms vary. Private LLM is paid. AGPL-licensed tools (Jan, KoboldCpp, text-generation-webui, SillyTavern, Khoj, Open Interpreter, Copilot for Obsidian) are free for any use including commercial, but the AGPL terms require source disclosure if you modify and host them publicly. Apache 2.0 and MIT projects (the majority) are usable in any context including commercial without attribution constraints beyond the licence text.',
          },
          {
            q: 'Which tools support Apple Silicon (M-series chips) natively?',
            a: 'Ollama, llama.cpp, MLX-LM, LM Studio, Jan, Enchanted, GPT4All, MLC Chat, AnythingLLM, and most Electron/Tauri apps run natively on Apple Silicon and use the Metal backend. MLX-LM is Apple-specific and the fastest for large models on M-series. vLLM, TensorRT-LLM, and ExLlamaV2 are NVIDIA-focused and either do not run or run poorly on Apple Silicon — for Apple users, Ollama with the Metal backend is the default.',
          },
          {
            q: 'Do all these tools support GGUF model format?',
            a: 'GGUF is the native format for llama.cpp and any tool that wraps it (Ollama, LM Studio, Jan, GPT4All, KoboldCpp, Llamafile). vLLM and TensorRT-LLM use their own optimised formats (typically AWQ or FP16) for higher throughput. ExLlamaV2 uses EXL2 quantisation. MLX-LM uses MLX-converted weights. Most listed tools accept GGUF; a few (vLLM, TensorRT-LLM, ExLlamaV2, MLX-LM) require a one-time conversion step from the original Hugging Face weights.',
          },
          {
            q: 'Which tools are best for users with no coding experience?',
            a: 'GPT4All has the simplest install (one click, runs on 8 GB RAM). LM Studio is the most feature-rich without requiring a terminal. Jan is the most privacy-conscious of the no-code options. For document chat without command-line work, AnythingLLM is the easiest. All four are listed in the Desktop GUI Apps category above.',
          },
          {
            q: 'Can I run these tools on a server and access them remotely?',
            a: 'Most server-capable tools (Ollama, vLLM, LocalAI, Open WebUI, LibreChat, PrivateGPT, AnythingLLM) expose an HTTP API and bind to a network interface configurable in settings. Standard pattern: run Ollama on a home server or VPS, run a UI on your laptop or phone pointing at the server\'s IP. Treat the API like any web service — bind to localhost behind a reverse proxy, or to a private network with proper authentication. Open WebUI ships with multi-user support out of the box.',
          },
          {
            q: 'Which tools support multi-user / team setups?',
            a: 'Open WebUI, LibreChat, h2oGPT, AnythingLLM (with admin features enabled), and Dify are designed for multi-user use, with role-based access and per-user conversation history. vLLM is the right serving layer underneath when concurrent inference matters — it batches requests across users for throughput unattainable on Ollama at concurrency above ~3.',
          },
          {
            q: 'How often does this directory get updated?',
            a: 'Every six months — the next scheduled refresh is November 2026. Mid-cycle changes (a project goes inactive, a new tool gains meaningful share, a licence changes) get patched into the existing entry. Entirely new categories or layers wait for a refresh to keep the structure stable. The "Sources" section above lists the community indexes used to spot-check what the ecosystem is actually doing between refreshes.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm) — runtime layer, head-to-head.',
          '[LM Studio vs Jan vs GPT4All](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — desktop GUI showdown.',
          '[AnythingLLM vs PrivateGPT vs Open WebUI for RAG](/power-local-llm/anythingllm-vs-privategpt-vs-openwebui-rag) — RAG layer comparison.',
          '[Continue.dev vs Cline vs Aider](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — coding harness comparison.',
          '[Local AI Agents With MCP](/power-local-llm/local-ai-agents-with-mcp-2026) — protocol that turns the runtimes above into agents.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — mobile clients in depth.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library across all 9 layers.',
        ],
      },
    },
  },
}
