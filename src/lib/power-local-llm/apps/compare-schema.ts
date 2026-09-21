// Comparison schema for the category comparison articles and the homepage comparison tool.
//
// The tool record (./types.ts) is the single source of truth: the category article's table and
// the homepage tool both render columns from here, filling cells from the tool's own fields
// (COMMON_COLUMNS) and from `ToolRecord.compare` (category-specific attributes below). Never
// hand-write a comparison value into article prose that the record could supply.
//
// A category group can mix tools that are not comparable on the same attributes (voice-audio holds
// text-to-speech, speech-to-text and real-time voice agents), so each group is split into SEGMENTS,
// each with its own attributes; the article and the tool compare within a segment only. Groups
// with no segments yet render only the common columns until their pilot defines them.

import type { CategoryGroupKey, CategorySubKey, InterfaceKey } from './categories'

export type CompareAttributeKind = 'boolean' | 'text' | 'number' | 'list'

export interface CompareAttribute {
  key: string
  label: string
  kind: CompareAttributeKind
  /** Optional short hint shown as a tooltip / footnote in the table. */
  hint?: string
}

/** Columns every category shares, read straight from ToolRecord fields (no `compare` entry needed). */
export const COMMON_COLUMNS = [
  { key: 'price', label: 'Price' },
  { key: 'license', label: 'License' },
  { key: 'platforms', label: 'Platforms' },
  { key: 'locality', label: 'Runs' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'version', label: 'Version' },
] as const

export interface CompareSegment {
  key: string
  label: string
  /** A tool belongs to the segment when any of its `categories` is in this list. */
  subs: CategorySubKey[]
  /** Optional: also require the tool to be delivered through one of these interfaces (desktop/mobile/web/cli/…). */
  interfaces?: InterfaceKey[]
  attributes: CompareAttribute[]
}

export const COMPARE_SEGMENTS: Record<CategoryGroupKey, CompareSegment[]> = {
  // Pilot category — attributes are proposals until each is confirmed against the tools' reviews.
  'voice-audio': [
    {
      key: 'text-to-speech',
      label: 'Text-to-speech',
      subs: ['text-to-speech', 'voice-cloning'],
      attributes: [
        { key: 'languages', label: 'Languages', kind: 'number', hint: 'Count of supported languages' },
        { key: 'voiceCloning', label: 'Voice cloning', kind: 'boolean' },
        { key: 'streaming', label: 'Streaming output', kind: 'boolean' },
        { key: 'cpuUsable', label: 'Usable on CPU only', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
      ],
    },
    {
      key: 'speech-to-text',
      label: 'Speech-to-text',
      subs: ['speech-to-text'],
      attributes: [
        { key: 'languages', label: 'Languages', kind: 'number', hint: 'Count of supported languages' },
        { key: 'realtime', label: 'Real-time transcription', kind: 'boolean' },
        { key: 'speakerLabels', label: 'Speaker labels', kind: 'boolean' },
        { key: 'cpuUsable', label: 'Usable on CPU only', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
      ],
    },
    {
      key: 'voice-agents',
      label: 'Real-time voice agents',
      subs: ['realtime-voice-agents'],
      attributes: [
        { key: 'fullyLocal', label: 'Fully local pipeline', kind: 'boolean' },
        { key: 'bargeIn', label: 'Interruption (barge-in)', kind: 'boolean' },
        { key: 'customLlm', label: 'Bring your own LLM', kind: 'boolean' },
        { key: 'telephony', label: 'Phone / telephony', kind: 'boolean' },
      ],
    },
  ],
  // Pilot 2. Editing & upscaling (Real-ESRGAN, FunClip) is intentionally not a segment: two unrelated
  // tools with nothing in common to compare. Tools without their own review are not in the table.
  'images-video': [
    {
      key: 'image-video-generation',
      label: 'Image & video generation',
      subs: ['image-generation', 'video-generation'],
      attributes: [
        { key: 'inpainting', label: 'Inpainting', kind: 'boolean' },
        { key: 'videoGeneration', label: 'Video generation', kind: 'boolean' },
        { key: 'nodeWorkflow', label: 'Node / graph workflow editor', kind: 'boolean' },
        { key: 'extensions', label: 'Extensions / plugins', kind: 'boolean' },
        { key: 'lowVram', label: 'Low-VRAM mode', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API', kind: 'boolean' },
      ],
    },
    {
      key: 'vision-ocr',
      label: 'Vision & OCR',
      subs: ['vision-ocr'],
      attributes: [
        { key: 'ocr', label: 'Reads text in images (OCR)', kind: 'boolean' },
        { key: 'multiImage', label: 'Multiple images per prompt', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API', kind: 'boolean' },
      ],
    },
  ],
  // Pilot 3. "API servers" is not its own segment: nearly every API-server tool is also an inference
  // engine or a runtime, so it would only duplicate rows. Tools listed only as API servers (h2oGPT,
  // Tabby, OpenAI Edge TTS) are compared in their own categories instead.
  'run-serve': [
    {
      key: 'inference-engines',
      label: 'Inference engines',
      subs: ['inference-engines', 'quantization-conversion'],
      attributes: [
        { key: 'openaiApi', label: 'OpenAI-compatible API', kind: 'boolean' },
        { key: 'nvidiaGpu', label: 'NVIDIA GPU', kind: 'boolean' },
        { key: 'appleSilicon', label: 'Apple Silicon', kind: 'boolean' },
        { key: 'amdGpu', label: 'AMD GPU', kind: 'boolean' },
        { key: 'cpuInference', label: 'CPU inference', kind: 'boolean' },
        { key: 'distributed', label: 'Multi-GPU / multi-node', kind: 'boolean' },
      ],
    },
    {
      key: 'runtimes-managers',
      label: 'Runtimes & managers',
      subs: ['runtimes-managers'],
      attributes: [
        { key: 'openaiApi', label: 'OpenAI-compatible API', kind: 'boolean' },
        { key: 'desktopApp', label: 'Desktop app', kind: 'boolean' },
        { key: 'modelLibrary', label: 'Built-in model library', kind: 'boolean' },
        { key: 'headless', label: 'Headless / server mode', kind: 'boolean' },
      ],
    },
    {
      key: 'routers-gateways',
      label: 'Routers & gateways',
      subs: ['routers-gateways'],
      attributes: [
        { key: 'openaiApi', label: 'OpenAI-compatible API', kind: 'boolean' },
        { key: 'localModels', label: 'Routes to local models', kind: 'boolean' },
        { key: 'fallback', label: 'Fallback / load balancing', kind: 'boolean' },
      ],
    },
  ],
  // Pilot 4. Tools in several groups (for example Onyx, Karakeep, Surf) appear in each group they belong to.
  'knowledge-retrieval': [
    {
      key: 'rag-frameworks',
      label: 'RAG frameworks & pipelines',
      subs: ['rag-frameworks', 'embeddings-indexing'],
      attributes: [
        { key: 'visualBuilder', label: 'Visual / drag-and-drop builder', kind: 'boolean' },
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'agents', label: 'Agent support', kind: 'boolean' },
        { key: 'multiVector', label: 'Several vector stores', kind: 'boolean' },
        { key: 'dockerDeploy', label: 'Docker / self-hosting', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
      ],
    },
    {
      key: 'document-chat',
      label: 'Document & PDF chat',
      subs: ['document-pdf-chat'],
      attributes: [
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'multiFormat', label: 'Several document formats', kind: 'boolean' },
        { key: 'citations', label: 'Cites sources', kind: 'boolean' },
        { key: 'desktopApp', label: 'Desktop app', kind: 'boolean' },
        { key: 'dockerDeploy', label: 'Docker / self-hosting', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
      ],
    },
    {
      key: 'vector-databases',
      label: 'Vector databases',
      subs: ['vector-databases'],
      attributes: [
        { key: 'hybridSearch', label: 'Hybrid search', kind: 'boolean' },
        { key: 'metadataFilter', label: 'Metadata filtering', kind: 'boolean' },
        { key: 'clustered', label: 'Distributed / clustered', kind: 'boolean' },
        { key: 'dockerDeploy', label: 'Docker / self-hosting', kind: 'boolean' },
        { key: 'managedCloud', label: 'Managed cloud offering', kind: 'boolean' },
      ],
    },
    {
      key: 'notes-integrations',
      label: 'Notes app integrations',
      subs: ['notes-integrations'],
      attributes: [
        { key: 'noteApp', label: 'Notes app', kind: 'text' },
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'semanticSearch', label: 'Semantic search over notes', kind: 'boolean' },
        { key: 'chatNotes', label: 'Chat with your notes', kind: 'boolean' },
      ],
    },
    {
      key: 'local-search',
      label: 'Local search & research',
      subs: ['local-search'],
      attributes: [
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'webSearch', label: 'Searches the web', kind: 'boolean' },
        { key: 'privateDocs', label: 'Searches your own files / notes', kind: 'boolean' },
        { key: 'citations', label: 'Cites sources', kind: 'boolean' },
      ],
    },
  ],
  // Pilot 5. general-chat-clients is split by interface (desktop / mobile / web+CLI) because those are different products;
  // a tool delivered through several interfaces appears in each matching segment.
  'chat-assistants': [
    {
      key: 'desktop-chat',
      label: 'Desktop chat apps',
      subs: ['general-chat-clients'],
      interfaces: ['desktop'],
      attributes: [
        { key: 'builtInEngine', label: 'Runs models itself', kind: 'boolean' },
        { key: 'ollama', label: 'Connects to Ollama', kind: 'boolean' },
        { key: 'customEndpoint', label: 'OpenAI-compatible endpoints', kind: 'boolean' },
        { key: 'mcp', label: 'MCP support', kind: 'boolean' },
        { key: 'fileChat', label: 'Chat with your files', kind: 'boolean' },
        { key: 'voice', label: 'Voice input / output', kind: 'boolean' },
      ],
    },
    {
      key: 'mobile-chat',
      label: 'Mobile chat apps',
      subs: ['general-chat-clients'],
      interfaces: ['mobile'],
      attributes: [
        { key: 'offline', label: 'Runs fully offline', kind: 'boolean' },
        { key: 'importModels', label: 'Import your own models', kind: 'boolean' },
        { key: 'modelDownloads', label: 'In-app model downloads', kind: 'boolean' },
        { key: 'visionInput', label: 'Image input', kind: 'boolean' },
        { key: 'voice', label: 'Voice input / output', kind: 'boolean' },
      ],
    },
    {
      key: 'web-chat',
      label: 'Web & CLI chat clients',
      subs: ['general-chat-clients'],
      interfaces: ['web', 'cli'],
      attributes: [
        { key: 'dockerDeploy', label: 'Docker / self-hosting', kind: 'boolean' },
        { key: 'multiUser', label: 'Multiple users', kind: 'boolean' },
        { key: 'ollama', label: 'Connects to Ollama', kind: 'boolean' },
        { key: 'customEndpoint', label: 'OpenAI-compatible endpoints', kind: 'boolean' },
        { key: 'fileChat', label: 'Chat with your files', kind: 'boolean' },
        { key: 'mcp', label: 'MCP support', kind: 'boolean' },
      ],
    },
    {
      key: 'assistants',
      label: 'Personal assistants',
      subs: ['personal-assistants'],
      attributes: [
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'voice', label: 'Voice input / output', kind: 'boolean' },
        { key: 'memory', label: 'Persistent memory', kind: 'boolean' },
        { key: 'toolUse', label: 'Tool use / actions', kind: 'boolean' },
      ],
    },
    {
      key: 'roleplay',
      label: 'Roleplay & companions',
      subs: ['roleplay-companions'],
      attributes: [
        { key: 'lorebooks', label: 'Lorebooks / world info', kind: 'boolean' },
        { key: 'groupChats', label: 'Group chats', kind: 'boolean' },
      ],
    },
  ],
  // Pilot 6. A tool in several sub-categories appears in each matching segment. Prompt tooling/evals (1 tool) is folded into agent frameworks & SDKs.
  'code-development': [
    {
      key: 'coding-assistants',
      label: 'Coding assistants & IDE plugins',
      subs: ['code-assistants-ide-plugins'],
      attributes: [
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'ollama', label: 'Connects to Ollama', kind: 'boolean' },
        { key: 'vscode', label: 'VS Code extension', kind: 'boolean' },
        { key: 'jetbrains', label: 'JetBrains plugin', kind: 'boolean' },
        { key: 'agentMode', label: 'Agent mode (multi-step edits)', kind: 'boolean' },
        { key: 'autocomplete', label: 'Inline code completion', kind: 'boolean' },
        { key: 'mcp', label: 'MCP support', kind: 'boolean' },
      ],
    },
    {
      key: 'agent-frameworks',
      label: 'Agent frameworks & SDKs',
      subs: ['agent-frameworks', 'sdks-libraries', 'prompt-tooling-evals'],
      attributes: [
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'ollama', label: 'Connects to Ollama', kind: 'boolean' },
        { key: 'multiAgent', label: 'Multi-agent workflows', kind: 'boolean' },
        { key: 'memory', label: 'Persistent memory', kind: 'boolean' },
        { key: 'mcp', label: 'MCP support', kind: 'boolean' },
        { key: 'toolCalling', label: 'Tool calling', kind: 'boolean' },
      ],
    },
    {
      key: 'autonomous-agents',
      label: 'Autonomous agents',
      subs: ['autonomous-agents'],
      attributes: [
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'ollama', label: 'Connects to Ollama', kind: 'boolean' },
        { key: 'codeExecution', label: 'Runs code', kind: 'boolean' },
        { key: 'webBrowsing', label: 'Browses the web', kind: 'boolean' },
        { key: 'memory', label: 'Persistent memory', kind: 'boolean' },
        { key: 'sandbox', label: 'Sandboxed execution', kind: 'boolean' },
      ],
    },
    {
      key: 'workflow-builders',
      label: 'Workflow builders',
      subs: ['workflow-node-builders'],
      attributes: [
        { key: 'visualBuilder', label: 'Visual / drag-and-drop builder', kind: 'boolean' },
        { key: 'localLlm', label: 'Works with local LLMs', kind: 'boolean' },
        { key: 'ollama', label: 'Connects to Ollama', kind: 'boolean' },
        { key: 'dockerDeploy', label: 'Docker / self-hosting', kind: 'boolean' },
        { key: 'apiServer', label: 'Local API server', kind: 'boolean' },
        { key: 'mcp', label: 'MCP support', kind: 'boolean' },
      ],
    },
  ],
  'train-operate': [],
}

/**
 * Slug (in the power-local-llm cluster) of each category's comparison article. `null` = no article
 * yet, so the homepage tool and review pages simply omit the "full guide" link for that group.
 */
export const CATEGORY_COMPARE_ARTICLE: Record<CategoryGroupKey, string | null> = {
  'voice-audio': 'local-llm-voice-audio-compared',
  'run-serve': 'local-llm-run-serve-compared',
  'chat-assistants': 'local-llm-chat-assistants-compared',
  'code-development': 'local-llm-code-development-compared',
  'knowledge-retrieval': 'local-llm-knowledge-retrieval-compared',
  'images-video': 'local-llm-images-video-compared',
  'train-operate': null,
}
