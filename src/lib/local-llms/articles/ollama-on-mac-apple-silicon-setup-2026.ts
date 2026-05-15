import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Hardware & Performance',
    title: 'Ollama on Mac 2026: Complete Apple Silicon Setup Guide (M1–M5, Metal GPU)',
    seoTitle: 'Ollama on Mac Setup: Install & Run Local LLMs on Apple Silicon (M1-M5 Metal GPU)',
    intro: 'Complete Ollama setup guide for Apple Silicon Mac 2026. One-command installation, Metal GPU verification, model management (pull, run, list), memory optimization for multi-model setups, and REST API configuration for developers.',
    metaDescription: 'Install and configure Ollama on Mac with Apple Silicon 2026. Metal GPU automatic, model downloads, API setup, memory optimization.',
    twitterDescription: 'Ollama on Mac: install in 2 minutes, Metal GPU automatic, run any LLM locally. Complete setup guide for M1-M5.',
    publishDate: '2026-05-15',
    dateModified: '2026-05-15',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.1 70B', 'Mistral 7B'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max'],
    audience: 'Beginner Mac users installing Ollama for the first time.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'Ollama setup Mac',
    targetKeywords: ['Ollama install Mac', 'Apple Silicon Ollama', 'Metal GPU acceleration'],
    leadAnswerBlock: '**Install Ollama: `brew install ollama`. Metal GPU is automatic. Pull models: `ollama pull llama2`. Run: `ollama run llama2`. REST API available at `localhost:11434`.**',
    quickAnswerTop: {
      en: {
        question: 'How do I install Ollama on Mac?',
        answer: '`brew install ollama`. Metal GPU automatic. `ollama pull model_name` to download. `ollama run model_name` to chat. Rest API: `localhost:11434`.',
        bullets: ['`brew install ollama` (2 min)', 'Metal GPU automatic', '`ollama pull llama2` (download)', '`ollama run llama2` (chat)', 'REST API on :11434', 'Multiple models: use `OLLAMA_MAX_LOADED_MODELS`'],
        updatedDate: '2026-05-15',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Quick Setup', anchor: '#quick-setup' },
      { label: 'Metal GPU Verification', anchor: '#metal-verify' },
      { label: 'Model Management', anchor: '#model-manage' },
      { label: 'Memory Optimization', anchor: '#memory-opt' },
      { label: 'API Setup for Developers', anchor: '#api-setup' },
      { label: 'Modelfile Customization', anchor: '#modelfile' },
      { label: 'Troubleshooting', anchor: '#troubleshooting' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      quickSetup: {
        id: 'quick-setup',
        title: 'Quick Setup (3 Commands)',
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: '`brew install ollama` — one-click installation.' },
          { title: 'Pull a model', whyItMatters: '`ollama pull llama2` — downloads Llama 2 7B.' },
          { title: 'Start chatting', whyItMatters: '`ollama run llama2` — interactive chat interface.' },
        ],
      },
      metalVerify: {
        id: 'metal-verify',
        title: 'Metal GPU Verification',
        content: 'Metal GPU acceleration is automatic in Ollama on macOS. No configuration needed. To verify: run `ollama run llama2` and check console for "Metal acceleration" messages. Speed should be 20–60 tok/s depending on Mac configuration.',
      },
      modelManage: {
        id: 'model-manage',
        title: 'Model Management',
        numberedItems: [
          { title: '`ollama pull <model>`', whyItMatters: 'Download model. Example: `ollama pull mistral`.' },
          { title: '`ollama list`', whyItMatters: 'List all downloaded models.' },
          { title: '`ollama run <model>`', whyItMatters: 'Start interactive chat with model.' },
          { title: '`ollama rm <model>`', whyItMatters: 'Delete model to free space.' },
        ],
      },
      memoryOpt: {
        id: 'memory-opt',
        title: 'Memory Optimization for Apple Silicon',
        items: [
          'OLLAMA_MAX_LOADED_MODELS: Number of models to keep in memory. Default: 1. Set to 2–3 for multi-model setups.',
          'GPU layers: By default, Ollama uses all available unified memory. For sub-optimal memory, set `num_gpu_layers` in Modelfile.',
          'Whisper: Combine with embedding model and LLM — fits in 64GB M5 Pro with Ollama.',
        ],
      },
      apiSetup: {
        id: 'api-setup',
        title: 'API Setup for Developers',
        content: 'Ollama exposes OpenAI-compatible REST API at `localhost:11434`. Use from any language: Python `requests.post("http://localhost:11434/api/generate", ...)`, JavaScript, Go, etc. See Ollama docs for full API reference.',
      },
      modelfile: {
        id: 'modelfile',
        title: 'Modelfile Customization',
        content: 'Create custom model with system prompt and parameters. Example: Create file "Modelfile": FROM llama2 SYSTEM "You are a helpful assistant..." PARAMETER temperature 0.7. Build: `ollama create mymodel -f Modelfile`. Run: `ollama run mymodel`.',
      },
      troubleshooting: {
        id: 'troubleshooting',
        items: [
          'Metal not detected: Check `ollama pull` output for Metal messages. If missing, try restarting Ollama: `pkill ollama` then `ollama run model`.',
          'Slow inference: Check system resources (Activity Monitor). Other apps consuming RAM will slow model. 8GB threshold: models swap to SSD.',
          'OOM errors: Model doesn\'t fit in available memory. Reduce `num_gpu_layers`, use smaller model, or lower quantization (Q4 instead of Q5).',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Is Ollama free?', a: 'Yes. Ollama is open-source. Models (Llama, Mistral) are licensed free. No charges.' },
          { q: 'Can I use Ollama without GPU?', a: 'Yes, but slow. CPU-only: ~1–5 tok/s on 7B models. GPU (Metal on Mac): 20–60 tok/s depending on Mac.' },
          { q: 'Which model should I start with?', a: 'Mistral 7B or Llama 2 7B. Both run on any M1+ Mac, produce good output. About 4GB each.' },
          { q: 'Can multiple people use Ollama API simultaneously?', a: 'Yes. `ollama serve` on one machine, everyone on LAN can access REST API on that machine\'s IP:11434.' },
        ],
      },
    },
  },
  de: { theme: 'Hardware & Performance', title: '', sections: {} },
  fr: { theme: 'Hardware & Performance', title: '', sections: {} },
  ja: { theme: 'Hardware & Performance', title: '', sections: {} },
  zh: { theme: 'Hardware & Performance', title: '', sections: {} },
}
