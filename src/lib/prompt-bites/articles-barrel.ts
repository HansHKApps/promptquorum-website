import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from './types'

import { article as howMuchVramForLocalLlm } from './articles/how-much-vram-for-local-llm'
import { article as whatIsQ4KMQuantization } from './articles/what-is-q4-k-m-quantization'
import { article as q4KMVsQ80 } from './articles/q4-k-m-vs-q8-0'
import { article as bestOllamaModelsRtx3060 } from './articles/best-ollama-models-rtx-3060-12gb'
import { article as bestOllamaModels4gbVram } from './articles/best-ollama-models-4gb-vram'
import { article as howMuchRamFor7bModel } from './articles/how-much-ram-for-7b-model'
import { article as vramFor70bModel } from './articles/vram-for-70b-model'
import { article as bestLocalLlm6gbVram } from './articles/best-local-llm-6gb-vram'
import { article as ollamaLatestVersion } from './articles/ollama-latest-version'
import { article as bestOllamaModelsRightNow } from './articles/best-ollama-models-right-now'
import { article as bestOllamaModelsCpuOnly } from './articles/best-ollama-models-cpu-only'
import { article as canYouRunQwen3OnOllama } from './articles/can-you-run-qwen3-on-ollama'
import { article as whichOllamaModelsVision } from './articles/which-ollama-models-support-vision'
import { article as ollama128kContextModels } from './articles/ollama-128k-context-models'
import { article as qwenCoderVsDeepseekCoder } from './articles/qwen-coder-vs-deepseek-coder'
import { article as ollamaVsLmStudio } from './articles/ollama-vs-lm-studio'
import { article as janVsLmStudio } from './articles/jan-vs-lm-studio'
import { article as bestLocalLlmAppsAndroid } from './articles/best-local-llm-apps-android'
import { article as bestFrontendForOllama } from './articles/best-frontend-for-ollama'
import { article as qwen14bVsLlama8b } from './articles/qwen-14b-vs-llama-8b'
import { article as best14bModelsCoding } from './articles/best-14b-models-coding'
import { article as bestMiniPcForLocalLlm } from './articles/best-mini-pc-for-local-llm'
import { article as bestMoeModelsLocalCoding } from './articles/best-moe-models-local-coding'
import { article as bestLocalLlmCoding12gbVram } from './articles/best-local-llm-coding-12gb-vram'
import { article as bestModelsAmd5700x3070ti } from './articles/best-models-amd-5700x-3070ti'
import { article as radeon6800mLocalLlm } from './articles/radeon-6800m-local-llm'
import { article as canYouRunRagOn2gbRam } from './articles/can-you-run-rag-on-2gb-ram'
import { article as bestLocalLlm16gbRamLaptop } from './articles/best-local-llm-16gb-ram-laptop'
import { article as coStarPromptFramework } from './articles/co-star-prompt-framework'
import { article as bestLlmRightNow } from './articles/best-llm-right-now'
import { article as isQwenGdprCompliant } from './articles/is-qwen-gdpr-compliant'
import { article as isDeepseekGdprSafe } from './articles/is-deepseek-gdpr-safe'
import { article as canLocalLlmHelpGdpr } from './articles/can-local-llm-help-gdpr'
import { article as bestGpuUnder300LocalLlm } from './articles/best-gpu-under-300-local-llm'
import { article as bestGpuUnder600LocalLlm } from './articles/best-gpu-under-600-local-llm'
import { article as bestSsdFastModelLoading } from './articles/best-ssd-fast-model-loading'
import { article as macMiniM4LocalLlm } from './articles/mac-mini-m4-local-llm'
import { article as runpodVsVastaiPricing } from './articles/runpod-vs-vastai-pricing'
import { article as cursorProVsContinueDev } from './articles/cursor-pro-vs-continue-dev'
import { article as cloudGpuCostPerHour } from './articles/cloud-gpu-cost-per-hour'
import { article as bestEgpuOllamaMacbook } from './articles/best-egpu-ollama-macbook'
import { article as bestBudgetAiLaptopUnder1000 } from './articles/best-budget-ai-laptop-under-1000'
import { article as bestVpnDownloadingAiModels } from './articles/best-vpn-downloading-ai-models'

export const promptBitesContent: Record<string, Partial<Record<Language, PromptBiteArticle>>> = {
  howMuchVramForLocalLlm,
  whatIsQ4KMQuantization,
  q4KMVsQ80,
  bestOllamaModelsRtx3060,
  bestOllamaModels4gbVram,
  howMuchRamFor7bModel,
  vramFor70bModel,
  bestLocalLlm6gbVram,
  ollamaLatestVersion,
  bestOllamaModelsRightNow,
  bestOllamaModelsCpuOnly,
  canYouRunQwen3OnOllama,
  whichOllamaModelsVision,
  ollama128kContextModels,
  qwenCoderVsDeepseekCoder,
  ollamaVsLmStudio,
  janVsLmStudio,
  bestLocalLlmAppsAndroid,
  bestFrontendForOllama,
  qwen14bVsLlama8b,
  best14bModelsCoding,
  bestMiniPcForLocalLlm,
  bestMoeModelsLocalCoding,
  bestLocalLlmCoding12gbVram,
  bestModelsAmd5700x3070ti,
  radeon6800mLocalLlm,
  canYouRunRagOn2gbRam,
  bestLocalLlm16gbRamLaptop,
  coStarPromptFramework,
  bestLlmRightNow,
  isQwenGdprCompliant,
  isDeepseekGdprSafe,
  canLocalLlmHelpGdpr,
  bestGpuUnder300LocalLlm,
  bestGpuUnder600LocalLlm,
  bestSsdFastModelLoading,
  macMiniM4LocalLlm,
  runpodVsVastaiPricing,
  cursorProVsContinueDev,
  cloudGpuCostPerHour,
  bestEgpuOllamaMacbook,
  bestBudgetAiLaptopUnder1000,
  bestVpnDownloadingAiModels,
}
