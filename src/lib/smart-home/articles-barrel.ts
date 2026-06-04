// Smart Home — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map fall through to the
// "Coming Soon" template at the article page level.
//
// SCAFFOLD STATE (Phase 1): no articles authored yet — the map is empty and every
// slug renders Coming Soon. As articles land in Phase 2, add:
//   1. src/lib/smart-home/articles/{slug}.ts
//   2. an `import { article as a_{slug} } from './articles/{slug}'` line
//   3. a `'{slug}': a_{slug},` entry to smartHomeContent
// The `theme` field on each article must be one of the four canonical Smart Home
// themes (see THEME_COLORS in src/components/SmartHomePostClient.tsx).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// Category 2 — Local-First Smart Home
import { article as a_local_smart_home_complete_guide } from './articles/local-smart-home-complete-guide'
// Category 3 — Local AI & LLMs in the Smart Home
import { article as a_local_llm_smart_home_complete_guide } from './articles/local-llm-smart-home-complete-guide'
import { article as a_home_assistant_ollama_integration } from './articles/home-assistant-ollama-integration'
import { article as a_local_voice_assistant_smart_home } from './articles/local-voice-assistant-smart-home'
import { article as a_local_whisper_home_assistant } from './articles/local-whisper-home-assistant'
import { article as a_ai_automations_local_llm } from './articles/ai-automations-local-llm'
import { article as a_local_ai_security_camera } from './articles/local-ai-security-camera'
import { article as a_best_local_llm_models_smart_home } from './articles/best-local-llm-models-smart-home'

export const smartHomeContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'local-smart-home-complete-guide':      a_local_smart_home_complete_guide,
  'local-llm-smart-home-complete-guide':  a_local_llm_smart_home_complete_guide,
  'home-assistant-ollama-integration':    a_home_assistant_ollama_integration,
  'local-voice-assistant-smart-home':     a_local_voice_assistant_smart_home,
  'local-whisper-home-assistant':         a_local_whisper_home_assistant,
  'ai-automations-local-llm':             a_ai_automations_local_llm,
  'local-ai-security-camera':             a_local_ai_security_camera,
  'best-local-llm-models-smart-home':     a_best_local_llm_models_smart_home,
}
