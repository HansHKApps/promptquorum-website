// Power Local LLM — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map will fall through to the
// "Coming Soon" template at the article page level.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

import { article as a_aori_ai_personal_agent_review } from './articles/aori-ai-personal-agent-review'
import { article as a_rapr_ai_review } from './articles/rapr-ai-review'
import { article as a_open_felix_review } from './articles/open-felix-review'
import { article as a_bobe_review } from './articles/bobe-review'
import { article as a_osaurus_ai_review } from './articles/osaurus-ai-review'
import { article as a_hanoki_review } from './articles/hanoki-review'
import { article as a_voxa_review } from './articles/voxa-review'
import { article as a_jarvis_mac_review } from './articles/jarvis-mac-review'
import { article as a_locally_ai_review } from './articles/locally-ai-review'
import { article as a_arbiter_local_ai_chat_review } from './articles/arbiter-local-ai-chat-review'
import { article as a_chatty_mini_review } from './articles/chatty-mini-review'
import { article as a_continue_dev_review } from './articles/continue-dev-review'
import { article as a_cline_review } from './articles/cline-review'
import { article as a_pearai_review } from './articles/pearai-review'
import { article as a_windsurf_review } from './articles/windsurf-review'
import { article as a_sourcegraph_cody_review } from './articles/sourcegraph-cody-review'
import { article as a_tabby_review } from './articles/tabby-review'
import { article as a_codegpt_review } from './articles/codegpt-review'
import { article as a_openhands_review } from './articles/openhands-review'
import { article as a_cursor_local_mode_review } from './articles/cursor-local-mode-review'
import { article as a_twinny_review } from './articles/twinny-review'
import { article as a_aider_review } from './articles/aider-review'
import { article as a_shell_gpt_review } from './articles/shell-gpt-review'
import { article as a_aichat_review } from './articles/aichat-review'
import { article as a_tgpt_review } from './articles/tgpt-review'
import { article as a_blackbox_ai_cli_review } from './articles/blackbox-ai-cli-review'
import { article as a_privategpt_review } from './articles/privategpt-review'
import { article as a_whisper_cpp_review } from './articles/whisper-cpp-review'
import { article as a_faster_whisper_review } from './articles/faster-whisper-review'
import { article as a_piper_tts_review } from './articles/piper-tts-review'
import { article as a_coqui_tts_review } from './articles/coqui-tts-review'
import { article as a_xtts_v2_review } from './articles/xtts-v2-review'
import { article as a_bark_tts_review } from './articles/bark-tts-review'
import { article as a_styletts_2_review } from './articles/styletts-2-review'
import { article as a_pocketpal_ai_review } from './articles/pocketpal-ai-review'
import { article as a_private_llm_review } from './articles/private-llm-review'
import { article as a_stable_diffusion_review } from './articles/stable-diffusion-review'
import { article as a_enterprise_llm_inference_servers_vllm_tgi_nim_2026 } from './articles/enterprise-llm-inference-servers-vllm-tgi-nim-2026'
import { article as a_best_local_llms_customer_support_call_centers_enterprise } from './articles/best-local-llms-customer-support-call-centers-enterprise'
import { article as a_enterprise_chatbot_deployment_helpdesk_hr_bots } from './articles/enterprise-chatbot-deployment-helpdesk-hr-bots'
import { article as a_best_ai_hr_software_enterprise_2026 } from './articles/best-ai-hr-software-enterprise-2026'
import { article as a_best_ai_marketing_software_enterprise_2026 } from './articles/best-ai-marketing-software-enterprise-2026'
import { article as a_shadow_ai_controls_by_company_size } from './articles/shadow-ai-controls-by-company-size'
import { article as a_agentic_ai_security_identity_access } from './articles/agentic-ai-security-identity-access'
import { article as a_ai_generated_content_ip_risk } from './articles/ai-generated-content-ip-risk'
import { article as a_us_state_ai_employment_laws_compliance } from './articles/us-state-ai-employment-laws-compliance'
import { article as a_anythingllm_vs_privategpt_vs_openwebui_rag } from './articles/anythingllm-vs-privategpt-vs-openwebui-rag'
import { article as a_autonomous_local_agents_actually_work } from './articles/autonomous-local-agents-actually-work'
import { article as a_babyagi_review_autonomous_agent } from './articles/babyagi-review-autonomous-agent'
import { article as a_best_embedding_models_local_rag_2026 } from './articles/best-embedding-models-local-rag-2026'
import { article as a_best_gpu_buying_guide_local_llm_2026 } from './articles/best-gpu-buying-guide-local-llm-2026'
import { article as a_best_mac_for_local_ai_2026 } from './articles/best-mac-for-local-ai-2026'
import { article as a_asus_mini_pc_local_ai_2026 } from './articles/asus-mini-pc-local-ai-2026'
import { article as a_local_llm_electricity_cost_balcony_solar_2026 } from './articles/local-llm-electricity-cost-balcony-solar-2026'
import { article as a_local_ai_workstation_build_guide_2026 } from './articles/local-ai-workstation-build-guide-2026'
import { article as a_best_vpn_ai_privacy_local_llm_2026 } from './articles/best-vpn-ai-privacy-local-llm-2026'
import { article as a_best_nas_storage_local_ai_models_2026 } from './articles/best-nas-storage-local-ai-models-2026'
import { article as a_best_ai_coding_tools_comparison_2026 } from './articles/best-ai-coding-tools-comparison-2026'
import { article as a_best_monitors_ai_development_2026 } from './articles/best-monitors-ai-development-2026'
import { article as a_best_laptops_local_llm_2026 } from './articles/best-laptops-local-llm-2026'
import { article as a_best_ai_courses_certifications_2026 } from './articles/best-ai-courses-certifications-2026'
import { article as a_elevenlabs_vs_local_tts_piper_xtts } from './articles/elevenlabs-vs-local-tts-piper-xtts'
import { article as a_best_local_ai_app_low_end_pc } from './articles/best-local-ai-app-low-end-pc'
import { article as a_best_local_coding_models_2026 } from './articles/best-local-coding-models-2026'
import { article as a_best_local_llm_apps_android_2026 } from './articles/best-local-llm-apps-android-2026'
import { article as a_best_local_llm_apps_iphone_2026 } from './articles/best-local-llm-apps-iphone-2026'
import { article as a_enclave_ai_review_2026 } from './articles/enclave-ai-review-2026'
import { article as a_best_local_llm_creative_writing_2026 } from './articles/best-local-llm-creative-writing-2026'
import { article as a_best_local_models_tool_calling_2026 } from './articles/best-local-models-tool-calling-2026'
import { article as a_chat_with_1000_pdfs_locally } from './articles/chat-with-1000-pdfs-locally'
import { article as a_continue_dev_vs_cline_vs_aider_local } from './articles/continue-dev-vs-cline-vs-aider-local'
import { article as a_bodega_one_code_review_2026 } from './articles/bodega-one-code-review-2026'
import { article as a_edge_ai_hardware_for_local_llms } from './articles/edge-ai-hardware-for-local-llms'
import { article as a_vla_models_robots_local_inference } from './articles/vla-models-robots-local-inference'
import { article as a_vlm_video_analytics_drones_edge } from './articles/vlm-video-analytics-drones-edge'
import { article as a_local_ai_agents_business_workflows_eu_compliance } from './articles/local-ai-agents-business-workflows-eu-compliance'
import { article as a_local_ai_agents_with_mcp_2026 } from './articles/local-ai-agents-with-mcp-2026'
import { article as a_lm_studio_vs_jan_vs_gpt4all_2026 } from './articles/lm-studio-vs-jan-vs-gpt4all-2026'
import { article as a_local_ai_app_non_technical_users } from './articles/local-ai-app-non-technical-users'
import { article as a_local_ai_app_with_built_in_rag } from './articles/local-ai-app-with-built-in-rag'
import { article as a_local_coding_llm_without_internet } from './articles/local-coding-llm-without-internet'
import { article as a_local_llm_code_review_ci_cd } from './articles/local-llm-code-review-ci-cd'
import { article as a_local_llm_software_directory_2026 } from './articles/local-llm-software-directory-2026'
import { article as a_ai_tool_licenses_explained } from './articles/ai-tool-licenses-explained'
import { article as a_local_llm_with_obsidian_2026 } from './articles/local-llm-with-obsidian-2026'
import { article as a_local_llm_with_logseq_and_joplin } from './articles/local-llm-with-logseq-and-joplin'
import { article as a_obsidian_logseq_ai_plugins } from './articles/obsidian-logseq-ai-plugins'
import { article as a_local_llm_personal_knowledge_base_2026 } from './articles/local-llm-personal-knowledge-base-2026'
import { article as a_local_rag_for_private_business_data } from './articles/local-rag-for-private-business-data'
import { article as a_local_rag_on_your_pdfs_step_by_step } from './articles/local-rag-on-your-pdfs-step-by-step'
import { article as a_mobile_llm_models_phi4_gemma_smollm } from './articles/mobile-llm-models-phi4-gemma-smollm'
import { article as a_replace_github_copilot_with_local_llm } from './articles/replace-github-copilot-with-local-llm'
import { article as a_replace_grammarly_notion_ai_with_local } from './articles/replace-grammarly-notion-ai-with-local'
import { article as a_rtx_3090_local_llm_buy_or_rent } from './articles/rtx-3090-local-llm-buy-or-rent'
import { article as a_run_ai_on_tablet_ipad_android } from './articles/run-ai-on-tablet-ipad-android'
import { article as a_replace_zapier_with_local_ai_agents } from './articles/replace-zapier-with-local-ai-agents'
import { article as a_easiest_local_ai_app_windows_mac_linux } from './articles/easiest-local-ai-app-windows-mac-linux'
import { article as a_local_llm_email_and_calendar_automation } from './articles/local-llm-email-and-calendar-automation'
import { article as a_local_llm_prompts_for_fiction_writers } from './articles/local-llm-prompts-for-fiction-writers'
import { article as a_local_llm_screenwriting_and_novel_drafting } from './articles/local-llm-screenwriting-and-novel-drafting'
import { article as a_sillytavern_vs_agnai_vs_risuai_roleplay } from './articles/sillytavern-vs-agnai-vs-risuai-roleplay'
import { article as a_metagpt_agnai_risuai_explained } from './articles/metagpt-agnai-risuai-explained'
import { article as a_uncensored_local_llm_creative_writing_ethics } from './articles/uncensored-local-llm-creative-writing-ethics'
import { article as a_voice_assistant_local_mobile_offline } from './articles/voice-assistant-local-mobile-offline'
import { article as a_local_whisper_stt_comparison_2026 } from './articles/local-whisper-stt-comparison-2026'
import { article as a_local_vision_models_llava_ollama_2026 } from './articles/local-vision-models-llava-ollama-2026'
import { article as a_local_tts_voice_cloning_piper_coqui_xtts } from './articles/local-tts-voice-cloning-piper-coqui-xtts'
import { article as a_build_local_voice_assistant_2026 } from './articles/build-local-voice-assistant-2026'
import { article as a_local_multimodal_pipeline_voice_vision_text } from './articles/local-multimodal-pipeline-voice-vision-text'
import { article as a_best_affiliate_tools_ai_developers_2026 } from './articles/best-affiliate-tools-ai-developers-2026'
import { article as a_apple_mlx_vs_nvidia_cuda_local_llm_2026 } from './articles/apple-mlx-vs-nvidia-cuda-local-llm-2026'
import { article as a_cursor_vs_windsurf_vs_copilot_cline_2026 } from './articles/cursor-vs-windsurf-vs-copilot-cline-2026'
import { article as a_pinecone_vs_weaviate_vs_qdrant_vs_chroma_2026 } from './articles/pinecone-vs-weaviate-vs-qdrant-vs-chroma-2026'
// Commercial Sprint 2026-05-26
import { article as a_qwen_local_deployment_complete_guide_2026 } from './articles/qwen-local-deployment-complete-guide-2026'
// China Sprint 2026-05-26
import { article as a_deepseek_vs_qwen_local_comparison_2026 } from './articles/deepseek-vs-qwen-local-comparison-2026'
import { article as a_local_ai_behind_firewall_offline_2026 } from './articles/local-ai-behind-firewall-offline-2026'
import { article as a_wechat_local_llm_integration_2026 } from './articles/wechat-local-llm-integration-2026'
// DeepSeek Series 2026-06-19
import { article as a_deepseek_r1_vs_distills_explained_2026 } from './articles/deepseek-r1-vs-distills-explained-2026'
import { article as a_deepseek_offline_china_self_hosted_2026 } from './articles/deepseek-offline-china-self-hosted-2026'
import { article as a_local_ai_video_generation_vs_cloud } from './articles/local-ai-video-generation-vs-cloud'
import { article as a_local_ai_image_generation_vs_cloud } from './articles/local-ai-image-generation-vs-cloud'
import { article as a_animatediff_video_generation_guide_2026 } from './articles/animatediff-video-generation-guide-2026'
import { article as a_loci_ai_review_offline_local_ai } from './articles/loci-ai-review-offline-local-ai'
import { article as a_backyard_ai_review_local_roleplay_2026 } from './articles/backyard-ai-review-local-roleplay-2026'
import { article as a_voice_ai_writers_cloud_vs_local } from './articles/voice-ai-writers-cloud-vs-local'
import { article as a_deepseek_vs_qwen_coding_local_2026 } from './articles/deepseek-vs-qwen-coding-local-2026'
import { article as a_best_workstation_build_local_ai_2026 } from './articles/best-workstation-build-local-ai-2026'
import { article as a_best_local_llm_ide_plugins_2026 } from './articles/best-local-llm-ide-plugins-2026'
import { article as a_best_rag_tools_for_business_documents_2026 } from './articles/best-rag-tools-for-business-documents-2026'
import { article as a_enterprise_rag_vector_database_deployment_guide_2026 } from './articles/enterprise-rag-vector-database-deployment-guide-2026'
import { article as a_wechat_bot_local_llm_personal_assistant_2026 } from './articles/wechat-bot-local-llm-personal-assistant-2026'
import { article as a_best_web_hosting_2026 } from './articles/best-web-hosting-2026'
import { article as a_digitalocean_vs_aws_cloud_for_ai_companies } from './articles/digitalocean-vs-aws-cloud-for-ai-companies'
import { article as a_flowise_ai_visual_workflow_builder_review } from './articles/flowise-ai-visual-workflow-builder-review'
import { article as a_haystack_deepset_rag_framework_review } from './articles/haystack-deepset-rag-framework-review'
import { article as a_dify_ai_workflow_builder_review } from './articles/dify-ai-workflow-builder-review'
import { article as a_h2ogpt_review_2026 } from './articles/h2ogpt-review-2026'
import { article as a_langflow_visual_ai_orchestration_review } from './articles/langflow-visual-ai-orchestration-review'
import { article as a_langchain_review } from './articles/langchain-review'
import { article as a_autogen_review } from './articles/autogen-review'
import { article as a_crewai_review } from './articles/crewai-review'
import { article as a_langgraph_review } from './articles/langgraph-review'
import { article as a_llamaindex_rag_framework_review } from './articles/llamaindex-rag-framework-review'
import { article as a_txtai_embedded_vector_database_review } from './articles/txtai-embedded-vector-database-review'
import { article as a_librechat_review_2026 } from './articles/librechat-review-2026'
import { article as a_quivr_self_hosted_knowledge_assistant_review } from './articles/quivr-self-hosted-knowledge-assistant-review'
import { article as a_ragflow_document_understanding_rag_review } from './articles/ragflow-document-understanding-rag-review'
import { article as a_khoj_ai_second_brain_review } from './articles/khoj-ai-second-brain-review'
import { article as a_second_me_review_2026 } from './articles/second-me-review-2026'
import { article as a_real_esrgan_ai_image_upscaler_review } from './articles/real-esrgan-ai-image-upscaler-review'
import { article as a_autogpt_local_review_2026 } from './articles/autogpt-local-review-2026'
import { article as a_atomic_chat_review } from './articles/atomic-chat-review'
import { article as a_hermes_agent_review_2026 } from './articles/hermes-agent-review-2026'
import { article as a_open_interpreter_review } from './articles/open-interpreter-review'
import { article as a_openclaw_review } from './articles/openclaw-review'
import { article as a_msty_go_review_2026 } from './articles/msty-go-review-2026'
import { article as a_msty_review } from './articles/msty-review'
import { article as a_enchanted_review } from './articles/enchanted-review'
import { article as a_llama_cpp_explained } from './articles/llama-cpp-explained'
import { article as a_llama_cpp_review } from './articles/llama-cpp-review'

export const powerLLMContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'hermes-agent-review-2026':               a_hermes_agent_review_2026,
  'anythingllm-vs-privategpt-vs-openwebui-rag': a_anythingllm_vs_privategpt_vs_openwebui_rag,
  'autonomous-local-agents-actually-work':  a_autonomous_local_agents_actually_work,
  'babyagi-review-autonomous-agent':        a_babyagi_review_autonomous_agent,
  'best-embedding-models-local-rag-2026':   a_best_embedding_models_local_rag_2026,
  'best-gpu-buying-guide-local-llm-2026':   a_best_gpu_buying_guide_local_llm_2026,
  'best-mac-for-local-ai-2026':             a_best_mac_for_local_ai_2026,
  'asus-mini-pc-local-ai-2026':             a_asus_mini_pc_local_ai_2026,
  'local-llm-electricity-cost-balcony-solar-2026': a_local_llm_electricity_cost_balcony_solar_2026,
  'local-ai-workstation-build-guide-2026':  a_local_ai_workstation_build_guide_2026,
  'best-vpn-ai-privacy-local-llm-2026':     a_best_vpn_ai_privacy_local_llm_2026,
  'best-nas-storage-local-ai-models-2026':  a_best_nas_storage_local_ai_models_2026,
  'best-ai-coding-tools-comparison-2026':   a_best_ai_coding_tools_comparison_2026,
  'best-monitors-ai-development-2026':      a_best_monitors_ai_development_2026,
  'best-laptops-local-llm-2026':            a_best_laptops_local_llm_2026,
  'best-ai-courses-certifications-2026':    a_best_ai_courses_certifications_2026,
  'elevenlabs-vs-local-tts-piper-xtts':     a_elevenlabs_vs_local_tts_piper_xtts,
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
  'ai-tool-licenses-explained':              a_ai_tool_licenses_explained,
  'local-llm-with-obsidian-2026':           a_local_llm_with_obsidian_2026,
  'local-llm-with-logseq-and-joplin':       a_local_llm_with_logseq_and_joplin,
  'obsidian-logseq-ai-plugins':             a_obsidian_logseq_ai_plugins,
  'local-llm-personal-knowledge-base-2026': a_local_llm_personal_knowledge_base_2026,
  'local-rag-for-private-business-data':    a_local_rag_for_private_business_data,
  'local-rag-on-your-pdfs-step-by-step':    a_local_rag_on_your_pdfs_step_by_step,
  'loci-ai-review-offline-local-ai':        a_loci_ai_review_offline_local_ai,
  'backyard-ai-review-local-roleplay-2026': a_backyard_ai_review_local_roleplay_2026,
  'mobile-llm-models-phi4-gemma-smollm':    a_mobile_llm_models_phi4_gemma_smollm,
  'replace-github-copilot-with-local-llm':  a_replace_github_copilot_with_local_llm,
  'replace-grammarly-notion-ai-with-local': a_replace_grammarly_notion_ai_with_local,
  'rtx-3090-local-llm-buy-or-rent':         a_rtx_3090_local_llm_buy_or_rent,
  'run-ai-on-tablet-ipad-android':          a_run_ai_on_tablet_ipad_android,
  'replace-zapier-with-local-ai-agents':    a_replace_zapier_with_local_ai_agents,
  'easiest-local-ai-app-windows-mac-linux':       a_easiest_local_ai_app_windows_mac_linux,
  'local-llm-email-and-calendar-automation':     a_local_llm_email_and_calendar_automation,
  'local-llm-prompts-for-fiction-writers':       a_local_llm_prompts_for_fiction_writers,
  'local-llm-screenwriting-and-novel-drafting':  a_local_llm_screenwriting_and_novel_drafting,
  'sillytavern-vs-agnai-vs-risuai-roleplay':     a_sillytavern_vs_agnai_vs_risuai_roleplay,
  'metagpt-agnai-risuai-explained':              a_metagpt_agnai_risuai_explained,
  'uncensored-local-llm-creative-writing-ethics': a_uncensored_local_llm_creative_writing_ethics,
  'voice-assistant-local-mobile-offline':              a_voice_assistant_local_mobile_offline,
  'local-whisper-stt-comparison-2026':                 a_local_whisper_stt_comparison_2026,
  'local-vision-models-llava-ollama-2026':             a_local_vision_models_llava_ollama_2026,
  'local-tts-voice-cloning-piper-coqui-xtts':          a_local_tts_voice_cloning_piper_coqui_xtts,
  'build-local-voice-assistant-2026':                  a_build_local_voice_assistant_2026,
  'local-multimodal-pipeline-voice-vision-text':       a_local_multimodal_pipeline_voice_vision_text,
  'voice-ai-writers-cloud-vs-local':                   a_voice_ai_writers_cloud_vs_local,
  'best-affiliate-tools-ai-developers-2026':           a_best_affiliate_tools_ai_developers_2026,
  'apple-mlx-vs-nvidia-cuda-local-llm-2026':           a_apple_mlx_vs_nvidia_cuda_local_llm_2026,
  'cursor-vs-windsurf-vs-copilot-cline-2026':          a_cursor_vs_windsurf_vs_copilot_cline_2026,
  'pinecone-vs-weaviate-vs-qdrant-vs-chroma-2026':     a_pinecone_vs_weaviate_vs_qdrant_vs_chroma_2026,
  // Commercial Sprint 2026-05-26
  'qwen-local-deployment-complete-guide-2026':         a_qwen_local_deployment_complete_guide_2026,
  'deepseek-vs-qwen-coding-local-2026':                a_deepseek_vs_qwen_coding_local_2026,
  'best-workstation-build-local-ai-2026':              a_best_workstation_build_local_ai_2026,
  'best-local-llm-ide-plugins-2026':                   a_best_local_llm_ide_plugins_2026,
  'best-rag-tools-for-business-documents-2026':        a_best_rag_tools_for_business_documents_2026,
  'enterprise-rag-vector-database-deployment-guide-2026': a_enterprise_rag_vector_database_deployment_guide_2026,
  'wechat-bot-local-llm-personal-assistant-2026':      a_wechat_bot_local_llm_personal_assistant_2026,
  // China Sprint 2026-05-26
  'deepseek-vs-qwen-local-comparison-2026':            a_deepseek_vs_qwen_local_comparison_2026,
  'local-ai-behind-firewall-offline-2026':             a_local_ai_behind_firewall_offline_2026,
  'wechat-local-llm-integration-2026':                 a_wechat_local_llm_integration_2026,
  // DeepSeek Series 2026-06-19
  'deepseek-r1-vs-distills-explained-2026':            a_deepseek_r1_vs_distills_explained_2026,
  'deepseek-offline-china-self-hosted-2026':           a_deepseek_offline_china_self_hosted_2026,
  // Category 11 — Image & Video Generation
  'local-ai-video-generation-vs-cloud':                a_local_ai_video_generation_vs_cloud,
  'local-ai-image-generation-vs-cloud':                a_local_ai_image_generation_vs_cloud,
  'animatediff-video-generation-guide-2026':           a_animatediff_video_generation_guide_2026,
  'best-web-hosting-2026':                             a_best_web_hosting_2026,
  'digitalocean-vs-aws-cloud-for-ai-companies':         a_digitalocean_vs_aws_cloud_for_ai_companies,
  'flowise-ai-visual-workflow-builder-review':         a_flowise_ai_visual_workflow_builder_review,
  'haystack-deepset-rag-framework-review':             a_haystack_deepset_rag_framework_review,
  'enterprise-llm-inference-servers-vllm-tgi-nim-2026': a_enterprise_llm_inference_servers_vllm_tgi_nim_2026,
  'dify-ai-workflow-builder-review':                   a_dify_ai_workflow_builder_review,
  'h2ogpt-review-2026':                                a_h2ogpt_review_2026,
  'langflow-visual-ai-orchestration-review':           a_langflow_visual_ai_orchestration_review,
  'langchain-review':                                  a_langchain_review,
  'autogen-review':                                    a_autogen_review,
  'crewai-review':                                     a_crewai_review,
  'langgraph-review':                                  a_langgraph_review,
  'llamaindex-rag-framework-review':                   a_llamaindex_rag_framework_review,
  'txtai-embedded-vector-database-review':             a_txtai_embedded_vector_database_review,
  'quivr-self-hosted-knowledge-assistant-review':      a_quivr_self_hosted_knowledge_assistant_review,
  'ragflow-document-understanding-rag-review':         a_ragflow_document_understanding_rag_review,
  'khoj-ai-second-brain-review':                       a_khoj_ai_second_brain_review,
  'second-me-review-2026':                             a_second_me_review_2026,
  'real-esrgan-ai-image-upscaler-review':              a_real_esrgan_ai_image_upscaler_review,
  'best-local-llms-customer-support-call-centers-enterprise': a_best_local_llms_customer_support_call_centers_enterprise,
  'enterprise-chatbot-deployment-helpdesk-hr-bots': a_enterprise_chatbot_deployment_helpdesk_hr_bots,
  'best-ai-hr-software-enterprise-2026':            a_best_ai_hr_software_enterprise_2026,
  'best-ai-marketing-software-enterprise-2026':     a_best_ai_marketing_software_enterprise_2026,
  // AutoGPT classic-vs-Platform review — 2026-09-02
  'autogpt-local-review-2026':                         a_autogpt_local_review_2026,
  // Atomic Chat review — 2026-09-03
  'atomic-chat-review':                                a_atomic_chat_review,
  // LibreChat review — 2026-09-03
  'librechat-review-2026':                             a_librechat_review_2026,
  // Bodega One Code review — 2026-09-03
  'bodega-one-code-review-2026':                       a_bodega_one_code_review_2026,
  // Open Interpreter Rust/Codex-fork review — 2026-09-03
  'open-interpreter-review':                           a_open_interpreter_review,
  'openclaw-review':                                   a_openclaw_review,
  // Edge & Embedded AI — 2026-09-02, folded in from the removed /edge-ai cluster
  'edge-ai-hardware-for-local-llms':                   a_edge_ai_hardware_for_local_llms,
  'vla-models-robots-local-inference':                 a_vla_models_robots_local_inference,
  'vlm-video-analytics-drones-edge':                   a_vlm_video_analytics_drones_edge,
  'msty-go-review-2026':                               a_msty_go_review_2026,
  'msty-review':                                       a_msty_review,
  'enchanted-review':                                  a_enchanted_review,
  // Enterprise/B2B — governance & risk — 2026-09-03
  'shadow-ai-controls-by-company-size':                a_shadow_ai_controls_by_company_size,
  'agentic-ai-security-identity-access':               a_agentic_ai_security_identity_access,
  'ai-generated-content-ip-risk':                      a_ai_generated_content_ip_risk,
  'us-state-ai-employment-laws-compliance':            a_us_state_ai_employment_laws_compliance,
  // Enclave AI review — 2026-09-03
  'enclave-ai-review-2026':                            a_enclave_ai_review_2026,
  // Aori, RAPR AI, Open Felix, BoBe, Osaurus, Hanoki, Voxa, Jarvis (Mac),
  // Locally AI, Arbiter reviews — 2026-09-04
  'aori-ai-personal-agent-review':                     a_aori_ai_personal_agent_review,
  'rapr-ai-review':                                a_rapr_ai_review,
  'open-felix-review':                             a_open_felix_review,
  'bobe-review':                                   a_bobe_review,
  'osaurus-ai-review':                             a_osaurus_ai_review,
  'hanoki-review':                                 a_hanoki_review,
  'voxa-review':                                   a_voxa_review,
  'jarvis-mac-review':                             a_jarvis_mac_review,
  'locally-ai-review':                             a_locally_ai_review,
  'arbiter-local-ai-chat-review':                  a_arbiter_local_ai_chat_review,
  'chatty-mini-review':                            a_chatty_mini_review,
  // Continue.dev, Cline, PearAI reviews — 2026-09-05
  'continue-dev-review':                           a_continue_dev_review,
  'cline-review':                                  a_cline_review,
  'pearai-review':                                 a_pearai_review,
  'whisper-cpp-review':                            a_whisper_cpp_review,
  'faster-whisper-review':                         a_faster_whisper_review,
  'piper-tts-review':                               a_piper_tts_review,
  'coqui-tts-review':                               a_coqui_tts_review,
  'xtts-v2-review':                                 a_xtts_v2_review,
  'bark-tts-review':                                a_bark_tts_review,
  'styletts-2-review':                             a_styletts_2_review,
  'pocketpal-ai-review':                           a_pocketpal_ai_review,
  'private-llm-review':                            a_private_llm_review,
  // Stable Diffusion review — 2026-09-05
  'stable-diffusion-review':                        a_stable_diffusion_review,
  'llama-cpp-explained':                           a_llama_cpp_explained,
  // Runtimes & Engines — 2026-09-05
  'llama-cpp-review':                              a_llama_cpp_review,
  // Windsurf, Sourcegraph Cody, Tabby reviews — 2026-09-05
  'windsurf-review':                               a_windsurf_review,
  'sourcegraph-cody-review':                       a_sourcegraph_cody_review,
  'tabby-review':                                  a_tabby_review,
  // CodeGPT, OpenHands, Cursor (local mode) reviews — 2026-09-05
  'codegpt-review':                                a_codegpt_review,
  'openhands-review':                              a_openhands_review,
  'cursor-local-mode-review':                       a_cursor_local_mode_review,
  // Twinny, Aider, shell-gpt reviews — 2026-09-06
  'twinny-review':                                  a_twinny_review,
  'aider-review':                                   a_aider_review,
  'shell-gpt-review':                               a_shell_gpt_review,
  // aichat, tgpt, Blackbox AI CLI, PrivateGPT reviews — 2026-09-06
  'aichat-review':                                  a_aichat_review,
  'tgpt-review':                                    a_tgpt_review,
  'blackbox-ai-cli-review':                         a_blackbox_ai_cli_review,
  'privategpt-review':                              a_privategpt_review,
}
