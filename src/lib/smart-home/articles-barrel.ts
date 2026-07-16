// Smart Home — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map fall through to the
// "Coming Soon" template at the article page level.
//
// All 30 articles are authored (all 9 languages each). To add a new one:
//   1. src/lib/smart-home/articles/{slug}.ts
//   2. an `import { article as a_{slug} } from './articles/{slug}'` line
//   3. a `'{slug}': a_{slug},` entry to smartHomeContent
// The `theme` field on each article must be one of the four canonical Smart Home
// themes (see THEME_COLORS in src/components/SmartHomePostClient.tsx).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// Category 1 — Smart Home Foundations
import { article as a_what_is_a_smart_home } from './articles/what-is-a-smart-home'
import { article as a_history_of_smart_home_technology } from './articles/history-of-smart-home-technology'
import { article as a_smart_home_ecosystems_compared } from './articles/smart-home-ecosystems-compared'
import { article as a_smart_home_protocols_explained } from './articles/smart-home-protocols-explained'
import { article as a_best_smart_home_devices_2026 } from './articles/best-smart-home-devices-2026'
import { article as a_smart_home_for_beginners_where_to_start } from './articles/smart-home-for-beginners-where-to-start'
import { article as a_smart_home_privacy_risks } from './articles/smart-home-privacy-risks'
// Category 2 — Local-First Smart Home
import { article as a_local_smart_home_complete_guide } from './articles/local-smart-home-complete-guide'
import { article as a_home_assistant_getting_started } from './articles/home-assistant-getting-started'
import { article as a_why_local_smart_home_beats_cloud } from './articles/why-local-smart-home-beats-cloud'
import { article as a_best_hardware_for_local_smart_home } from './articles/best-hardware-for-local-smart-home'
import { article as a_private_smart_home_gdpr } from './articles/private-smart-home-gdpr'
import { article as a_matter_local_control_guide } from './articles/matter-local-control-guide'
import { article as a_migrating_from_cloud_to_local_smart_home } from './articles/migrating-from-cloud-to-local-smart-home'
// Category 3 — Local AI & LLMs in the Smart Home
import { article as a_local_llm_smart_home_complete_guide } from './articles/local-llm-smart-home-complete-guide'
import { article as a_home_assistant_ollama_integration } from './articles/home-assistant-ollama-integration'
import { article as a_local_voice_assistant_smart_home } from './articles/local-voice-assistant-smart-home'
import { article as a_local_whisper_home_assistant } from './articles/local-whisper-home-assistant'
import { article as a_ai_automations_local_llm } from './articles/ai-automations-local-llm'
import { article as a_local_ai_security_camera } from './articles/local-ai-security-camera'
import { article as a_best_local_llm_models_smart_home } from './articles/best-local-llm-models-smart-home'
// Category 4 — Decision & Comparison
import { article as a_home_assistant_vs_alexa_vs_google } from './articles/home-assistant-vs-alexa-vs-google'
import { article as a_best_mini_pc_home_assistant_local_ai } from './articles/best-mini-pc-home-assistant-local-ai'
import { article as a_local_vs_cloud_voice_assistant } from './articles/local-vs-cloud-voice-assistant'
import { article as a_smart_home_without_subscriptions } from './articles/smart-home-without-subscriptions'
// Category 4 — Mini-PC single-product reviews (spokes of the best-mini-pc roundup)
import { article as a_geekom_a9_max_local_ai_review } from './articles/geekom-a9-max-local-ai-review'
import { article as a_beelink_ser8_local_ai_review } from './articles/beelink-ser8-local-ai-review'
import { article as a_beelink_eq14_local_ai_review } from './articles/beelink-eq14-local-ai-review'
import { article as a_gmktec_g3_plus_local_ai_review } from './articles/gmktec-g3-plus-local-ai-review'
import { article as a_minisforum_um890_pro_local_ai_review } from './articles/minisforum-um890-pro-local-ai-review'

export const smartHomeContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  // Category 1 — Smart Home Foundations
  'what-is-a-smart-home':                 a_what_is_a_smart_home,
  'history-of-smart-home-technology':     a_history_of_smart_home_technology,
  'smart-home-ecosystems-compared':       a_smart_home_ecosystems_compared,
  'smart-home-protocols-explained':       a_smart_home_protocols_explained,
  'best-smart-home-devices-2026':         a_best_smart_home_devices_2026,
  'smart-home-for-beginners-where-to-start': a_smart_home_for_beginners_where_to_start,
  'smart-home-privacy-risks':             a_smart_home_privacy_risks,
  // Category 2 — Local-First Smart Home
  'local-smart-home-complete-guide':      a_local_smart_home_complete_guide,
  'home-assistant-getting-started':       a_home_assistant_getting_started,
  'why-local-smart-home-beats-cloud':     a_why_local_smart_home_beats_cloud,
  'best-hardware-for-local-smart-home':   a_best_hardware_for_local_smart_home,
  'private-smart-home-gdpr':              a_private_smart_home_gdpr,
  'matter-local-control-guide':           a_matter_local_control_guide,
  'migrating-from-cloud-to-local-smart-home': a_migrating_from_cloud_to_local_smart_home,
  'local-llm-smart-home-complete-guide':  a_local_llm_smart_home_complete_guide,
  'home-assistant-ollama-integration':    a_home_assistant_ollama_integration,
  'local-voice-assistant-smart-home':     a_local_voice_assistant_smart_home,
  'local-whisper-home-assistant':         a_local_whisper_home_assistant,
  'ai-automations-local-llm':             a_ai_automations_local_llm,
  'local-ai-security-camera':             a_local_ai_security_camera,
  'best-local-llm-models-smart-home':     a_best_local_llm_models_smart_home,
  // Category 4 — Decision & Comparison
  'home-assistant-vs-alexa-vs-google':    a_home_assistant_vs_alexa_vs_google,
  'best-mini-pc-home-assistant-local-ai': a_best_mini_pc_home_assistant_local_ai,
  'local-vs-cloud-voice-assistant':       a_local_vs_cloud_voice_assistant,
  'smart-home-without-subscriptions':     a_smart_home_without_subscriptions,
  // Category 4 — Mini-PC single-product reviews
  'geekom-a9-max-local-ai-review':        a_geekom_a9_max_local_ai_review,
  'beelink-ser8-local-ai-review':         a_beelink_ser8_local_ai_review,
  'beelink-eq14-local-ai-review':         a_beelink_eq14_local_ai_review,
  'gmktec-g3-plus-local-ai-review':       a_gmktec_g3_plus_local_ai_review,
  'minisforum-um890-pro-local-ai-review': a_minisforum_um890_pro_local_ai_review,
}
