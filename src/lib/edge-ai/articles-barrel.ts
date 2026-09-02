// Barrel for split edge-ai content. Mirrors src/lib/local-llms/articles-barrel.ts.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

import { article as a_edge_ai_hardware_for_local_llms } from './articles/edge-ai-hardware-for-local-llms'
import { article as a_vla_models_robots_local_inference } from './articles/vla-models-robots-local-inference'
import { article as a_vlm_video_analytics_drones_edge } from './articles/vlm-video-analytics-drones-edge'

export const edgeAiContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'edge-ai-hardware-for-local-llms': a_edge_ai_hardware_for_local_llms,
  'vla-models-robots-local-inference': a_vla_models_robots_local_inference,
  'vlm-video-analytics-drones-edge': a_vlm_video_analytics_drones_edge,
}
