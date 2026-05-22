// Power Local LLM — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map will fall through to the
// "Coming Soon" template at the article page level.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

import { article as a_anythingllm_vs_privategpt_vs_openwebui_rag } from './articles/anythingllm-vs-privategpt-vs-openwebui-rag'
import { article as a_autonomous_local_agents_actually_work } from './articles/autonomous-local-agents-actually-work'
import { article as a_best_embedding_models_local_rag_2026 } from './articles/best-embedding-models-local-rag-2026'
import { article as a_best_gpu_buying_guide_local_llm_2026 } from './articles/best-gpu-buying-guide-local-llm-2026'
import { article as a_best_mac_for_local_ai_2026 } from './articles/best-mac-for-local-ai-2026'
import { article as a_cloud_gpu_rental_guide_2026 } from './articles/cloud-gpu-rental-guide-2026'
import { article as a_local_ai_workstation_build_guide_2026 } from './articles/local-ai-workstation-build-guide-2026'
import { article as a_best_vpn_ai_privacy_local_llm_2026 } from './articles/best-vpn-ai-privacy-local-llm-2026'
import { article as a_best_nas_storage_local_ai_models_2026 } from './articles/best-nas-storage-local-ai-models-2026'
import { article as a_best_ai_coding_tools_comparison_2026 } from './articles/best-ai-coding-tools-comparison-2026'
import { article as a_best_monitors_ai_development_2026 } from './articles/best-monitors-ai-development-2026'
import { article as a_best_laptops_local_llm_2026 } from './articles/best-laptops-local-llm-2026'
import { article as a_best_local_ai_app_low_end_pc } from './articles/best-local-ai-app-low-end-pc'
import { article as a_best_local_coding_models_2026 } from './articles/best-local-coding-models-2026'
import { article as a_best_local_llm_apps_android_2026 } from './articles/best-local-llm-apps-android-2026'
import { article as a_best_local_llm_apps_iphone_2026 } from './articles/best-local-llm-apps-iphone-2026'
import { article as a_best_local_llm_creative_writing_2026 } from './articles/best-local-llm-creative-writing-2026'
import { article as a_best_local_models_tool_calling_2026 } from './articles/best-local-models-tool-calling-2026'
import { article as a_chat_with_1000_pdfs_locally } from './articles/chat-with-1000-pdfs-locally'
import { article as a_continue_dev_vs_cline_vs_aider_local } from './articles/continue-dev-vs-cline-vs-aider-local'
import { article as a_local_ai_agents_business_workflows_eu_compliance } from './articles/local-ai-agents-business-workflows-eu-compliance'
import { article as a_local_ai_agents_with_mcp_2026 } from './articles/local-ai-agents-with-mcp-2026'
import { article as a_lm_studio_vs_jan_vs_gpt4all_2026 } from './articles/lm-studio-vs-jan-vs-gpt4all-2026'
import { article as a_local_ai_app_non_technical_users } from './articles/local-ai-app-non-technical-users'
import { article as a_local_ai_app_with_built_in_rag } from './articles/local-ai-app-with-built-in-rag'
import { article as a_local_coding_llm_without_internet } from './articles/local-coding-llm-without-internet'
import { article as a_local_llm_code_review_ci_cd } from './articles/local-llm-code-review-ci-cd'
import { article as a_local_llm_software_directory_2026 } from './articles/local-llm-software-directory-2026'
import { article as a_local_llm_with_obsidian_2026 } from './articles/local-llm-with-obsidian-2026'
import { article as a_local_llm_with_logseq_and_joplin } from './articles/local-llm-with-logseq-and-joplin'
import { article as a_local_llm_personal_knowledge_base_2026 } from './articles/local-llm-personal-knowledge-base-2026'
import { article as a_local_rag_for_private_business_data } from './articles/local-rag-for-private-business-data'
import { article as a_local_rag_on_your_pdfs_step_by_step } from './articles/local-rag-on-your-pdfs-step-by-step'
import { article as a_mobile_llm_models_phi4_gemma_smollm } from './articles/mobile-llm-models-phi4-gemma-smollm'
import { article as a_replace_github_copilot_with_local_llm } from './articles/replace-github-copilot-with-local-llm'
import { article as a_replace_grammarly_notion_ai_with_local } from './articles/replace-grammarly-notion-ai-with-local'
import { article as a_run_ai_on_tablet_ipad_android } from './articles/run-ai-on-tablet-ipad-android'
import { article as a_replace_zapier_with_local_ai_agents } from './articles/replace-zapier-with-local-ai-agents'
import { article as a_easiest_local_ai_app_windows_mac_linux } from './articles/easiest-local-ai-app-windows-mac-linux'
import { article as a_local_llm_email_and_calendar_automation } from './articles/local-llm-email-and-calendar-automation'
import { article as a_local_llm_prompts_for_fiction_writers } from './articles/local-llm-prompts-for-fiction-writers'
import { article as a_local_llm_screenwriting_and_novel_drafting } from './articles/local-llm-screenwriting-and-novel-drafting'
import { article as a_sillytavern_vs_agnai_vs_risuai_roleplay } from './articles/sillytavern-vs-agnai-vs-risuai-roleplay'
import { article as a_uncensored_local_llm_creative_writing_ethics } from './articles/uncensored-local-llm-creative-writing-ethics'
import { article as a_voice_assistant_local_mobile_offline } from './articles/voice-assistant-local-mobile-offline'
import { article as a_local_whisper_stt_comparison_2026 } from './articles/local-whisper-stt-comparison-2026'
import { article as a_local_vision_models_llava_ollama_2026 } from './articles/local-vision-models-llava-ollama-2026'
import { article as a_local_tts_voice_cloning_piper_coqui_xtts } from './articles/local-tts-voice-cloning-piper-coqui-xtts'
import { article as a_build_local_voice_assistant_2026 } from './articles/build-local-voice-assistant-2026'
import { article as a_local_multimodal_pipeline_voice_vision_text } from './articles/local-multimodal-pipeline-voice-vision-text'

export const powerLLMContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'anythingllm-vs-privategpt-vs-openwebui-rag': a_anythingllm_vs_privategpt_vs_openwebui_rag,
  'autonomous-local-agents-actually-work':  a_autonomous_local_agents_actually_work,
  'best-embedding-models-local-rag-2026':   a_best_embedding_models_local_rag_2026,
  'best-gpu-buying-guide-local-llm-2026':   a_best_gpu_buying_guide_local_llm_2026,
  'best-mac-for-local-ai-2026':             a_best_mac_for_local_ai_2026,
  'cloud-gpu-rental-guide-2026':            a_cloud_gpu_rental_guide_2026,
  'local-ai-workstation-build-guide-2026':  a_local_ai_workstation_build_guide_2026,
  'best-vpn-ai-privacy-local-llm-2026':     a_best_vpn_ai_privacy_local_llm_2026,
  'best-nas-storage-local-ai-models-2026':  a_best_nas_storage_local_ai_models_2026,
  'best-ai-coding-tools-comparison-2026':   a_best_ai_coding_tools_comparison_2026,
  'best-monitors-ai-development-2026':      a_best_monitors_ai_development_2026,
  'best-laptops-local-llm-2026':            a_best_laptops_local_llm_2026,
  'best-local-ai-app-low-end-pc':           a_best_local_ai_app_low_end_pc,
  'best-local-coding-models-2026':          a_best_local_coding_models_2026,
  'best-local-llm-apps-android-2026':       a_best_local_llm_apps_android_2026,
  'best-local-llm-apps-iphone-2026':        a_best_local_llm_apps_iphone_2026,
  'best-local-llm-creative-writing-2026':   a_best_local_llm_creative_writing_2026,
  'best-local-models-tool-calling-2026':    a_best_local_models_tool_calling_2026,
  'chat-with-1000-pdfs-locally':            a_chat_with_1000_pdfs_locally,
  'continue-dev-vs-cline-vs-aider-local':   a_continue_dev_vs_cline_vs_aider_local,
  'local-ai-agents-business-workflows-eu-compliance': a_local_ai_agents_business_workflows_eu_compliance,
  'local-ai-agents-with-mcp-2026':          a_local_ai_agents_with_mcp_2026,
  'lm-studio-vs-jan-vs-gpt4all-2026':       a_lm_studio_vs_jan_vs_gpt4all_2026,
  'local-ai-app-non-technical-users':       a_local_ai_app_non_technical_users,
  'local-ai-app-with-built-in-rag':         a_local_ai_app_with_built_in_rag,
  'local-coding-llm-without-internet':      a_local_coding_llm_without_internet,
  'local-llm-code-review-ci-cd':            a_local_llm_code_review_ci_cd,
  'local-llm-software-directory-2026':      a_local_llm_software_directory_2026,
  'local-llm-with-obsidian-2026':           a_local_llm_with_obsidian_2026,
  'local-llm-with-logseq-and-joplin':       a_local_llm_with_logseq_and_joplin,
  'local-llm-personal-knowledge-base-2026': a_local_llm_personal_knowledge_base_2026,
  'local-rag-for-private-business-data':    a_local_rag_for_private_business_data,
  'local-rag-on-your-pdfs-step-by-step':    a_local_rag_on_your_pdfs_step_by_step,
  'mobile-llm-models-phi4-gemma-smollm':    a_mobile_llm_models_phi4_gemma_smollm,
  'replace-github-copilot-with-local-llm':  a_replace_github_copilot_with_local_llm,
  'replace-grammarly-notion-ai-with-local': a_replace_grammarly_notion_ai_with_local,
  'run-ai-on-tablet-ipad-android':          a_run_ai_on_tablet_ipad_android,
  'replace-zapier-with-local-ai-agents':    a_replace_zapier_with_local_ai_agents,
  'easiest-local-ai-app-windows-mac-linux':       a_easiest_local_ai_app_windows_mac_linux,
  'local-llm-email-and-calendar-automation':     a_local_llm_email_and_calendar_automation,
  'local-llm-prompts-for-fiction-writers':       a_local_llm_prompts_for_fiction_writers,
  'local-llm-screenwriting-and-novel-drafting':  a_local_llm_screenwriting_and_novel_drafting,
  'sillytavern-vs-agnai-vs-risuai-roleplay':     a_sillytavern_vs_agnai_vs_risuai_roleplay,
  'uncensored-local-llm-creative-writing-ethics': a_uncensored_local_llm_creative_writing_ethics,
  'voice-assistant-local-mobile-offline':              a_voice_assistant_local_mobile_offline,
  'local-whisper-stt-comparison-2026':                 a_local_whisper_stt_comparison_2026,
  'local-vision-models-llava-ollama-2026':             a_local_vision_models_llava_ollama_2026,
  'local-tts-voice-cloning-piper-coqui-xtts':          a_local_tts_voice_cloning_piper_coqui_xtts,
  'build-local-voice-assistant-2026':                  a_build_local_voice_assistant_2026,
  'local-multimodal-pipeline-voice-vision-text':       a_local_multimodal_pipeline_voice_vision_text,
}
