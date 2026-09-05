// Power Local LLM — Local AI App Directory barrel.
// Phase 1 data migration — one ToolRecord per tool, generated from
// local-llm-software-directory-2026.ts. See plan:
// /Users/hanskuepper/.claude/plans/see-the-directory-page-virtual-cocke.md
//
// Mirrors the articles-barrel.ts / slugs.ts pattern used by every other
// content cluster in this repo, so existing auto-discovery conventions
// (validators, search-index scanning, etc.) can be pointed at this pair
// with minimal new code once Phase 2/3 wire it up.

import type { ToolRecord } from './apps/types'

import { app as app_ollama } from './apps/ollama'
import { app as app_llama_cpp } from './apps/llama-cpp'
import { app as app_vllm } from './apps/vllm'
import { app as app_localai } from './apps/localai'
import { app as app_tensorrt_llm } from './apps/tensorrt-llm'
import { app as app_mlc_llm } from './apps/mlc-llm'
import { app as app_sglang } from './apps/sglang'
import { app as app_exllamav2 } from './apps/exllamav2'
import { app as app_koboldcpp } from './apps/koboldcpp'
import { app as app_llamafile } from './apps/llamafile'
import { app as app_mlx_lm } from './apps/mlx-lm'
import { app as app_lm_studio } from './apps/lm-studio'
import { app as app_atomic_chat } from './apps/atomic-chat'
import { app as app_jan } from './apps/jan'
import { app as app_gpt4all } from './apps/gpt4all'
import { app as app_anythingllm } from './apps/anythingllm'
import { app as app_msty } from './apps/msty'
import { app as app_cherry_studio } from './apps/cherry-studio'
import { app as app_backyard_ai } from './apps/backyard-ai'
import { app as app_enchanted } from './apps/enchanted'
import { app as app_h2ogpt } from './apps/h2ogpt'
import { app as app_open_interpreter } from './apps/open-interpreter'
import { app as app_locally_uncensored } from './apps/locally-uncensored'
import { app as app_boltai } from './apps/boltai'
import { app as app_draw_things } from './apps/draw-things'
import { app as app_ekorbia } from './apps/ekorbia'
import { app as app_hanoki } from './apps/hanoki'
import { app as app_open_felix } from './apps/open-felix'
import { app as app_osaurus } from './apps/osaurus'
import { app as app_bobe } from './apps/bobe'
import { app as app_voxa } from './apps/voxa'
import { app as app_jarvis } from './apps/jarvis'
import { app as app_open_webui } from './apps/open-webui'
import { app as app_librechat } from './apps/librechat'
import { app as app_text_generation_webui } from './apps/text-generation-webui'
import { app as app_sillytavern } from './apps/sillytavern'
import { app as app_lobechat } from './apps/lobechat'
import { app as app_big_agi } from './apps/big-agi'
import { app as app_nextchat } from './apps/nextchat'
import { app as app_page_assist } from './apps/page-assist'
import { app as app_chatbox } from './apps/chatbox'
import { app as app_continue_dev } from './apps/continue-dev'
import { app as app_cline } from './apps/cline'
import { app as app_pearai } from './apps/pearai'
import { app as app_windsurf } from './apps/windsurf'
import { app as app_sourcegraph_cody } from './apps/sourcegraph-cody'
import { app as app_tabby } from './apps/tabby'
import { app as app_codegpt } from './apps/codegpt'
import { app as app_openhands } from './apps/openhands'
import { app as app_cursor } from './apps/cursor'
import { app as app_twinny } from './apps/twinny'
import { app as app_bodega_one_code } from './apps/bodega-one-code'
import { app as app_aider } from './apps/aider'
import { app as app_shellgpt } from './apps/shellgpt'
import { app as app_aichat } from './apps/aichat'
import { app as app_tgpt } from './apps/tgpt'
import { app as app_blackbox_ai } from './apps/blackbox-ai'
import { app as app_privategpt } from './apps/privategpt'
import { app as app_quivr } from './apps/quivr'
import { app as app_khoj } from './apps/khoj'
import { app as app_dify } from './apps/dify'
import { app as app_flowise } from './apps/flowise'
import { app as app_langflow } from './apps/langflow'
import { app as app_llamaindex } from './apps/llamaindex'
import { app as app_haystack } from './apps/haystack'
import { app as app_ragflow } from './apps/ragflow'
import { app as app_txtai } from './apps/txtai'
import { app as app_langchain } from './apps/langchain'
import { app as app_crewai } from './apps/crewai'
import { app as app_autogen } from './apps/autogen'
import { app as app_semantic_kernel } from './apps/semantic-kernel'
import { app as app_langgraph } from './apps/langgraph'
import { app as app_letta } from './apps/letta'
import { app as app_pydantic_ai } from './apps/pydantic-ai'
import { app as app_superagi } from './apps/superagi'
import { app as app_leon_ai } from './apps/leon-ai'
import { app as app_agent_zero } from './apps/agent-zero'
import { app as app_gpt_engineer } from './apps/gpt-engineer'
import { app as app_camel } from './apps/camel'
import { app as app_taskweaver } from './apps/taskweaver'
import { app as app_dspy } from './apps/dspy'
import { app as app_openclaw } from './apps/openclaw'
import { app as app_hermes_agent } from './apps/hermes-agent'
import { app as app_msty_go } from './apps/msty-go'
import { app as app_whisper_cpp } from './apps/whisper-cpp'
import { app as app_faster_whisper } from './apps/faster-whisper'
import { app as app_piper_tts } from './apps/piper-tts'
import { app as app_coqui_tts } from './apps/coqui-tts'
import { app as app_xtts_v2 } from './apps/xtts-v2'
import { app as app_bark } from './apps/bark'
import { app as app_styletts_2 } from './apps/styletts-2'
import { app as app_llava } from './apps/llava'
import { app as app_ollama_vision_models } from './apps/ollama-vision-models'
import { app as app_idefics } from './apps/idefics'
import { app as app_mlc_chat } from './apps/mlc-chat'
import { app as app_pocketpal_ai } from './apps/pocketpal-ai'
import { app as app_private_llm } from './apps/private-llm'
import { app as app_llm_farm } from './apps/llm-farm'
import { app as app_layla } from './apps/layla'
import { app as app_maid } from './apps/maid'
import { app as app_chapper } from './apps/chapper'
import { app as app_rikkahub } from './apps/rikkahub'
import { app as app_anythingllm_mobile } from './apps/anythingllm-mobile'
import { app as app_enclave_ai } from './apps/enclave-ai'
import { app as app_locally_ai } from './apps/locally-ai'
import { app as app_arbiter } from './apps/arbiter'
import { app as app_loci_ai } from './apps/loci-ai'
import { app as app_stable_diffusion } from './apps/stable-diffusion'
import { app as app_comfyui } from './apps/comfyui'
import { app as app_automatic1111_webui } from './apps/automatic1111-webui'
import { app as app_invoke_ai } from './apps/invoke-ai'
import { app as app_fooocus } from './apps/fooocus'
import { app as app_stableswarmui } from './apps/stableswarmui'
import { app as app_controlnet } from './apps/controlnet'
import { app as app_real_esrgan } from './apps/real-esrgan'
import { app as app_animatediff } from './apps/animatediff'
import { app as app_dall_e_3_local_ollama_vision } from './apps/dall-e-3-local-ollama-vision'
import { app as app_smart_connections } from './apps/smart-connections'
import { app as app_copilot_for_obsidian } from './apps/copilot-for-obsidian'
import { app as app_text_generator } from './apps/text-generator'
import { app as app_logseq_copilot } from './apps/logseq-copilot'
import { app as app_bmo_chatbot } from './apps/bmo-chatbot'
import { app as app_joplin_ai } from './apps/joplin-ai'
import { app as app_autogpt } from './apps/autogpt'
import { app as app_babyagi } from './apps/babyagi'
import { app as app_metagpt } from './apps/metagpt'
import { app as app_agnai } from './apps/agnai'
import { app as app_risuai } from './apps/risuai'
import { app as app_second_me } from './apps/second-me'

// Section A + B additions from apps-to-add.md — approved 2026-09-05
import { app as app_goose } from './apps/goose'
import { app as app_zed } from './apps/zed'
import { app as app_lemonade } from './apps/lemonade'
import { app as app_foundry_local } from './apps/foundry-local'
import { app as app_amd_gaia } from './apps/amd-gaia'
import { app as app_atomic_agent } from './apps/atomic-agent'
import { app as app_dograh } from './apps/dograh'
import { app as app_kilo_code } from './apps/kilo-code'
import { app as app_opencode } from './apps/opencode'
import { app as app_maxkb } from './apps/maxkb'
import { app as app_runanywhere } from './apps/runanywhere'
import { app as app_nvidia_g_assist } from './apps/nvidia-g-assist'
import { app as app_hyperlink_nexa } from './apps/hyperlink-nexa'
import { app as app_github_copilot_cli_local } from './apps/github-copilot-cli-local'
import { app as app_atomic_bot } from './apps/atomic-bot'
import { app as app_odysseus } from './apps/odysseus'
import { app as app_exo } from './apps/exo'
import { app as app_gpustack } from './apps/gpustack'
import { app as app_onyx } from './apps/onyx'
import { app as app_phoneclaw } from './apps/phoneclaw'
import { app as app_ypipe } from './apps/ypipe'
import { app as app_n8n } from './apps/n8n'

export const localAiApps: ToolRecord[] = [
  app_ollama,
  app_llama_cpp,
  app_vllm,
  app_localai,
  app_tensorrt_llm,
  app_mlc_llm,
  app_sglang,
  app_exllamav2,
  app_koboldcpp,
  app_llamafile,
  app_mlx_lm,
  app_lm_studio,
  app_atomic_chat,
  app_jan,
  app_gpt4all,
  app_anythingllm,
  app_msty,
  app_cherry_studio,
  app_backyard_ai,
  app_enchanted,
  app_h2ogpt,
  app_open_interpreter,
  app_locally_uncensored,
  app_boltai,
  app_draw_things,
  app_ekorbia,
  app_hanoki,
  app_open_felix,
  app_osaurus,
  app_bobe,
  app_voxa,
  app_jarvis,
  app_open_webui,
  app_librechat,
  app_text_generation_webui,
  app_sillytavern,
  app_lobechat,
  app_big_agi,
  app_nextchat,
  app_page_assist,
  app_chatbox,
  app_continue_dev,
  app_cline,
  app_pearai,
  app_windsurf,
  app_sourcegraph_cody,
  app_tabby,
  app_codegpt,
  app_openhands,
  app_cursor,
  app_twinny,
  app_bodega_one_code,
  app_aider,
  app_shellgpt,
  app_aichat,
  app_tgpt,
  app_blackbox_ai,
  app_privategpt,
  app_quivr,
  app_khoj,
  app_dify,
  app_flowise,
  app_langflow,
  app_llamaindex,
  app_haystack,
  app_ragflow,
  app_txtai,
  app_langchain,
  app_crewai,
  app_autogen,
  app_semantic_kernel,
  app_langgraph,
  app_letta,
  app_pydantic_ai,
  app_superagi,
  app_leon_ai,
  app_agent_zero,
  app_gpt_engineer,
  app_camel,
  app_taskweaver,
  app_dspy,
  app_openclaw,
  app_hermes_agent,
  app_msty_go,
  app_whisper_cpp,
  app_faster_whisper,
  app_piper_tts,
  app_coqui_tts,
  app_xtts_v2,
  app_bark,
  app_styletts_2,
  app_llava,
  app_ollama_vision_models,
  app_idefics,
  app_mlc_chat,
  app_pocketpal_ai,
  app_private_llm,
  app_llm_farm,
  app_layla,
  app_maid,
  app_chapper,
  app_rikkahub,
  app_anythingllm_mobile,
  app_enclave_ai,
  app_locally_ai,
  app_arbiter,
  app_loci_ai,
  app_stable_diffusion,
  app_comfyui,
  app_automatic1111_webui,
  app_invoke_ai,
  app_fooocus,
  app_stableswarmui,
  app_controlnet,
  app_real_esrgan,
  app_animatediff,
  app_dall_e_3_local_ollama_vision,
  app_smart_connections,
  app_copilot_for_obsidian,
  app_text_generator,
  app_logseq_copilot,
  app_bmo_chatbot,
  app_joplin_ai,
  app_autogpt,
  app_babyagi,
  app_metagpt,
  app_agnai,
  app_risuai,
  app_second_me,
  app_goose,
  app_zed,
  app_lemonade,
  app_foundry_local,
  app_amd_gaia,
  app_atomic_agent,
  app_dograh,
  app_kilo_code,
  app_opencode,
  app_maxkb,
  app_runanywhere,
  app_nvidia_g_assist,
  app_hyperlink_nexa,
  app_github_copilot_cli_local,
  app_atomic_bot,
  app_odysseus,
  app_exo,
  app_gpustack,
  app_onyx,
  app_phoneclaw,
  app_ypipe,
  app_n8n,
]
