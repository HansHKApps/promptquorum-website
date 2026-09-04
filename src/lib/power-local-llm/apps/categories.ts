// Power Local LLM — Local AI App Directory taxonomy.
//
// Replaces the single-select `layer` field (which mixed form-factor —
// desktop/mobile/webui/cli/ide — with function — runtime/agent/rag/image/
// tts/vision/stt — into one value a tool could only ever have one of).
// A tool like LM Studio is simultaneously a desktop app AND a full
// inference runtime AND an API server; `layer` could only ever record one
// of those. Two orthogonal facets fix that:
//
//   `category`   — WHAT the tool does. Multi-assign, hierarchical: a
//                   7-group top level (the stable public surface — meant
//                   to hold for ~2 years without restructuring) and a
//                   35-value subcategory level underneath (where new tool
//                   classes get absorbed as they appear). First entry in a
//                   tool's `categories[]` array is its primary category.
//   `interface`  — HOW you use the tool. desktop app / web app / CLI /
//                   editor-or-notes plugin / mobile app / code library.
//                   Independent of category: a RAG framework can ship as
//                   a CLI, a library, or both.
//
// This file is the single source of truth for both enums and their
// display labels — component code imports from here rather than
// hardcoding category/interface strings.

export type CategoryGroupKey =
  | 'run-serve'
  | 'chat-assistants'
  | 'code-development'
  | 'knowledge-retrieval'
  | 'voice-audio'
  | 'images-video'
  | 'train-operate'

export type CategorySubKey =
  // Run & Serve
  | 'inference-engines'
  | 'runtimes-managers'
  | 'api-servers'
  | 'routers-gateways'
  | 'quantization-conversion'
  // Chat & Assistants
  | 'general-chat-clients'
  | 'roleplay-companions'
  | 'personal-assistants'
  // Code & Development
  | 'code-assistants-ide-plugins'
  | 'agent-frameworks'
  | 'autonomous-agents'
  | 'sdks-libraries'
  | 'workflow-node-builders'
  | 'prompt-tooling-evals'
  // Knowledge & Retrieval
  | 'rag-frameworks'
  | 'document-pdf-chat'
  | 'vector-databases'
  | 'notes-integrations'
  | 'embeddings-indexing'
  | 'local-search'
  // Voice & Audio
  | 'speech-to-text'
  | 'text-to-speech'
  | 'voice-cloning'
  | 'realtime-voice-agents'
  | 'music-audio'
  // Images & Video
  | 'image-generation'
  | 'editing-upscaling'
  | 'vision-ocr'
  | 'video-generation'
  | 'avatars-3d'
  // Train & Operate
  | 'fine-tuning-lora'
  | 'datasets-synthetic-data'
  | 'evaluation-benchmarking'
  | 'observability'
  | 'model-hubs'

export type InterfaceKey = 'desktop' | 'web' | 'cli' | 'plugin' | 'mobile' | 'library'

export const CATEGORY_GROUP_LABEL: Record<CategoryGroupKey, string> = {
  'run-serve': 'Run & Serve',
  'chat-assistants': 'Chat & Assistants',
  'code-development': 'Code & Development',
  'knowledge-retrieval': 'Knowledge & Retrieval',
  'voice-audio': 'Voice & Audio',
  'images-video': 'Images & Video',
  'train-operate': 'Train & Operate',
}

export const CATEGORY_SUB_LABEL: Record<CategorySubKey, string> = {
  'inference-engines': 'Inference engines',
  'runtimes-managers': 'Runtimes & model managers',
  'api-servers': 'API servers',
  'routers-gateways': 'Routers & gateways',
  'quantization-conversion': 'Quantization & conversion',
  'general-chat-clients': 'General chat clients',
  'roleplay-companions': 'Roleplay & companions',
  'personal-assistants': 'Personal assistants',
  'code-assistants-ide-plugins': 'Code assistants & IDE plugins',
  'agent-frameworks': 'Agent frameworks',
  'autonomous-agents': 'Autonomous agents',
  'sdks-libraries': 'SDKs & libraries',
  'workflow-node-builders': 'Workflow & node builders',
  'prompt-tooling-evals': 'Prompt tooling & evals',
  'rag-frameworks': 'RAG frameworks',
  'document-pdf-chat': 'Document & PDF chat',
  'vector-databases': 'Vector databases',
  'notes-integrations': 'Notes integrations',
  'embeddings-indexing': 'Embeddings & indexing',
  'local-search': 'Local search',
  'speech-to-text': 'Speech-to-text',
  'text-to-speech': 'Text-to-speech',
  'voice-cloning': 'Voice cloning',
  'realtime-voice-agents': 'Real-time voice agents',
  'music-audio': 'Music & audio',
  'image-generation': 'Image generation',
  'editing-upscaling': 'Editing & upscaling',
  'vision-ocr': 'Vision & OCR',
  'video-generation': 'Video generation',
  'avatars-3d': 'Avatars & 3D',
  'fine-tuning-lora': 'Fine-tuning & LoRA',
  'datasets-synthetic-data': 'Datasets & synthetic data',
  'evaluation-benchmarking': 'Evaluation & benchmarking',
  observability: 'Observability',
  'model-hubs': 'Model hubs',
}

/** Which top-level group each subcategory belongs to — drives per-group accent colour and grouped filter UI. */
export const CATEGORY_SUB_GROUP: Record<CategorySubKey, CategoryGroupKey> = {
  'inference-engines': 'run-serve',
  'runtimes-managers': 'run-serve',
  'api-servers': 'run-serve',
  'routers-gateways': 'run-serve',
  'quantization-conversion': 'run-serve',
  'general-chat-clients': 'chat-assistants',
  'roleplay-companions': 'chat-assistants',
  'personal-assistants': 'chat-assistants',
  'code-assistants-ide-plugins': 'code-development',
  'agent-frameworks': 'code-development',
  'autonomous-agents': 'code-development',
  'sdks-libraries': 'code-development',
  'workflow-node-builders': 'code-development',
  'prompt-tooling-evals': 'code-development',
  'rag-frameworks': 'knowledge-retrieval',
  'document-pdf-chat': 'knowledge-retrieval',
  'vector-databases': 'knowledge-retrieval',
  'notes-integrations': 'knowledge-retrieval',
  'embeddings-indexing': 'knowledge-retrieval',
  'local-search': 'knowledge-retrieval',
  'speech-to-text': 'voice-audio',
  'text-to-speech': 'voice-audio',
  'voice-cloning': 'voice-audio',
  'realtime-voice-agents': 'voice-audio',
  'music-audio': 'voice-audio',
  'image-generation': 'images-video',
  'editing-upscaling': 'images-video',
  'vision-ocr': 'images-video',
  'video-generation': 'images-video',
  'avatars-3d': 'images-video',
  'fine-tuning-lora': 'train-operate',
  'datasets-synthetic-data': 'train-operate',
  'evaluation-benchmarking': 'train-operate',
  observability: 'train-operate',
  'model-hubs': 'train-operate',
}

export const CATEGORY_GROUPS: { key: CategoryGroupKey; subs: CategorySubKey[] }[] = [
  { key: 'run-serve', subs: ['inference-engines', 'runtimes-managers', 'api-servers', 'routers-gateways', 'quantization-conversion'] },
  { key: 'chat-assistants', subs: ['general-chat-clients', 'roleplay-companions', 'personal-assistants'] },
  { key: 'code-development', subs: ['code-assistants-ide-plugins', 'agent-frameworks', 'autonomous-agents', 'sdks-libraries', 'workflow-node-builders', 'prompt-tooling-evals'] },
  { key: 'knowledge-retrieval', subs: ['rag-frameworks', 'document-pdf-chat', 'vector-databases', 'notes-integrations', 'embeddings-indexing', 'local-search'] },
  { key: 'voice-audio', subs: ['speech-to-text', 'text-to-speech', 'voice-cloning', 'realtime-voice-agents', 'music-audio'] },
  { key: 'images-video', subs: ['image-generation', 'editing-upscaling', 'vision-ocr', 'video-generation', 'avatars-3d'] },
  { key: 'train-operate', subs: ['fine-tuning-lora', 'datasets-synthetic-data', 'evaluation-benchmarking', 'observability', 'model-hubs'] },
]

export const INTERFACE_LABEL: Record<InterfaceKey, string> = {
  desktop: 'Desktop app',
  web: 'Web app',
  cli: 'Command line',
  plugin: 'Editor / notes plugin',
  mobile: 'Mobile app',
  library: 'Library / SDK',
}
