// Structured copy of the "Common Real-World Stacks" table in
// articles/local-llm-software-directory-2026.ts (section `stacks`). The
// article keeps its prose rows; this file is what the MCP recommend_stack tool
// reads, so an assistant gets resolvable app slugs and numeric hardware floors
// instead of free text. scripts/check-mcp-tools.ts fails if a slug here stops
// resolving to a directory entry, or if a row's goal/stack text drifts from the
// article's EN table.

import type { OSKey } from '@/lib/power-local-llm/apps/types'

export interface StackFloor {
  /** Minimum system RAM (GB) from the article's hardware-floor cell. null = not stated as a number. */
  ramGb: number | null
  /** Minimum GPU VRAM (GB). null = not stated as a number. */
  vramGb: number | null
  /** true when the article states the stack runs without a GPU. */
  cpuOnly: boolean
}

export interface StackRecipe {
  id: string
  /** Must equal the article's EN "Goal" cell. */
  goal: string
  /** Must equal the article's EN "Stack" cell. */
  stack: string
  /** Must equal the article's EN "Hardware floor" cell. */
  hardwareFloorText: string
  /** Directory slugs of the apps in the stack (all must exist in the app directory). */
  appSlugs: string[]
  floor: StackFloor
  /** Words an assistant can match a user's goal against. */
  tags: string[]
  /** Restrict to these platforms when the stack is OS-specific. */
  platforms?: OSKey[]
}

export const STACK_RECIPES: StackRecipe[] = [
  { id: 'casual-chat', goal: 'Just chat casually', stack: 'LM Studio standalone', hardwareFloorText: '16 GB RAM, no GPU', appSlugs: ['lm-studio'], floor: { ramGb: 16, vramGb: null, cpuOnly: true }, tags: ['chat', 'beginner', 'casual', 'assistant', 'desktop'] },
  { id: 'power-user', goal: 'Best balance for power users', stack: 'Ollama + Open WebUI', hardwareFloorText: '16 GB RAM, optional GPU', appSlugs: ['ollama', 'open-webui'], floor: { ramGb: 16, vramGb: null, cpuOnly: true }, tags: ['chat', 'power', 'api', 'web ui', 'general'] },
  { id: 'document-chat', goal: 'Document chat', stack: 'Ollama + AnythingLLM', hardwareFloorText: '16 GB RAM, optional GPU', appSlugs: ['ollama', 'anythingllm'], floor: { ramGb: 16, vramGb: null, cpuOnly: true }, tags: ['docs', 'documents', 'pdf', 'rag', 'knowledge'] },
  { id: 'coding', goal: 'Coding', stack: 'Ollama + Cline', hardwareFloorText: '16 GB RAM + GPU recommended', appSlugs: ['ollama', 'cline'], floor: { ramGb: 16, vramGb: null, cpuOnly: false }, tags: ['code', 'coding', 'programming', 'agent', 'ide'] },
  { id: 'roleplay', goal: 'Roleplay / creative', stack: 'KoboldCpp + SillyTavern', hardwareFloorText: '16 GB RAM, GPU recommended', appSlugs: ['koboldcpp', 'sillytavern'], floor: { ramGb: 16, vramGb: null, cpuOnly: false }, tags: ['roleplay', 'creative', 'writing', 'story', 'characters'] },
  { id: 'privacy-business', goal: 'Privacy-first business', stack: 'Ollama + Open WebUI + PrivateGPT', hardwareFloorText: '32 GB RAM + 12 GB VRAM', appSlugs: ['ollama', 'open-webui', 'privategpt'], floor: { ramGb: 32, vramGb: 12, cpuOnly: false }, tags: ['privacy', 'business', 'enterprise', 'compliance', 'documents', 'gdpr'] },
  { id: 'mobile', goal: 'Mobile / on-the-go', stack: 'MLC Chat or PocketPal AI', hardwareFloorText: 'iPhone 13+ / Pixel 7+', appSlugs: ['mlc-chat', 'pocketpal-ai'], floor: { ramGb: null, vramGb: null, cpuOnly: true }, tags: ['mobile', 'phone', 'ios', 'android', 'offline'], platforms: ['ios', 'android'] },
  { id: 'apple-silicon', goal: 'Apple Silicon', stack: 'Ollama (MLX backend) or LM Studio', hardwareFloorText: 'M2/M3/M4/M5 with 16+ GB unified', appSlugs: ['ollama', 'lm-studio'], floor: { ramGb: 16, vramGb: null, cpuOnly: false }, tags: ['mac', 'apple', 'apple silicon', 'macbook', 'mlx', 'unified memory'], platforms: ['mac'] },
  { id: 'multi-user', goal: 'Multi-user team', stack: 'vLLM + Open WebUI', hardwareFloorText: '32+ GB RAM + multi-GPU', appSlugs: ['vllm', 'open-webui'], floor: { ramGb: 32, vramGb: null, cpuOnly: false }, tags: ['team', 'multi-user', 'server', 'serve', 'production', 'company'] },
  { id: 'image-generation', goal: 'Image generation', stack: 'Stable Diffusion + ComfyUI or Invoke AI', hardwareFloorText: '6+ GB VRAM GPU', appSlugs: ['stable-diffusion', 'comfyui', 'invoke-ai'], floor: { ramGb: null, vramGb: 6, cpuOnly: false }, tags: ['image', 'images', 'art', 'diffusion', 'generation', 'picture'] },
  { id: 'voice-assistant', goal: 'Voice assistant', stack: 'Ollama + Whisper.cpp + Piper TTS', hardwareFloorText: '8 GB RAM, CPU-only possible', appSlugs: ['ollama', 'whisper-cpp', 'piper-tts'], floor: { ramGb: 8, vramGb: null, cpuOnly: true }, tags: ['voice', 'audio', 'speech', 'assistant', 'tts', 'stt', 'transcription'] },
]
