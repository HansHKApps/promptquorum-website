import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'SillyTavern Chinese Roleplay Setup',
    seoTitle: 'SillyTavern Chinese Roleplay 2026: Qwen2.5 & Yi-34B',
    metaDescription: 'Best local models for Chinese roleplay in SillyTavern 2026: Qwen2.5-72B, Yi-34B, ChatGLM. UTF-8 character cards and Ollama API bridge setup.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Chinese-language users setting up SillyTavern with local LLMs for roleplay',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M is the best local model for Chinese roleplay — native Chinese training, rich vocabulary, and 128K context. Yi-34B excels at emotional character depth. For users with 8 GB VRAM, Qwen2.5-7B runs well at 8–12 tok/s.',
        bullets: [
          'Qwen2.5-72B Q4_K_M: 46 GB RAM, best Chinese prose quality, 128K context — for workstation or Mac Studio',
          'Yi-34B Q4_K_M: 21 GB RAM, excellent character voice and emotional range',
          'Qwen2.5-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — best for 8 GB VRAM cards',
          'ChatGLM3-6B: 4.5 GB VRAM, fastest inference but weaker character consistency',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel — natives chinesisches Training, reichhaltiger Wortschatz und 128K Kontext. Yi-34B glänzt bei emotionaler Charaktertiefe. Mit 8 GB VRAM läuft Qwen2.5-7B flüssig mit 8–12 tok/s.',
        bullets: [
          'Qwen2.5-72B Q4_K_M: 46 GB RAM, beste chinesische Prosaqualität, 128K Kontext',
          'Yi-34B Q4_K_M: 21 GB RAM, exzellente Charakterstimme und emotionale Tiefe',
          'Qwen2.5-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s — ideal für 8-GB-Grafikkarten',
          'ChatGLM3-6B: 4,5 GB VRAM, schnellste Inferenz, aber schwächere Charakterkonsistenz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: "Qwen2.5-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois — entraîné nativement en chinois, vocabulaire riche, contexte 128K. Yi-34B excelle dans la profondeur émotionnelle des personnages. Avec 8 Go de VRAM, Qwen2.5-7B tourne à 8–12 tok/s.",
        bullets: [
          'Qwen2.5-72B Q4_K_M : 46 Go RAM, meilleure qualité de prose chinoise, contexte 128K',
          'Yi-34B Q4_K_M : 21 Go RAM, excellente voix de personnage et gamme émotionnelle',
          'Qwen2.5-7B Q4_K_M : 5,5 Go VRAM, 8–12 tok/s — idéal pour les cartes 8 Go',
          'ChatGLM3-6B : 4,5 Go VRAM, inférence la plus rapide mais cohérence de personnage plus faible',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen2.5-72B Q4_K_Mが中国語ロールプレイに最適なローカルモデルです。ネイティブ中国語学習、豊富な語彙、128Kコンテキストを備えています。Yi-34Bは感情的なキャラクター表現に優れています。8GB VRAMならQwen2.5-7Bが8〜12トークン/秒で動作します。',
        bullets: [
          'Qwen2.5-72B Q4_K_M: RAM 46GB、最高の中国語文章品質、128Kコンテキスト',
          'Yi-34B Q4_K_M: RAM 21GB、優れたキャラクターボイスと感情表現',
          'Qwen2.5-7B Q4_K_M: VRAM 5.5GB、8〜12トークン/秒 — 8GB GPUに最適',
          'ChatGLM3-6B: VRAM 4.5GB、最速推論だがキャラクター一貫性は低め',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen2.5-72B Q4_K_M 是中文角色扮演的最佳本地模型——原生中文训练、词汇丰富、支持 128K 上下文。Yi-34B 擅长角色情感深度。8GB 显存用户推荐 Qwen2.5-7B，速度 8–12 token/秒。',
        bullets: [
          'Qwen2.5-72B Q4_K_M：46 GB 内存，最佳中文散文质量，128K 上下文——适合工作站或 Mac Studio',
          'Yi-34B Q4_K_M：21 GB 内存，出色的角色声音和情感层次',
          'Qwen2.5-7B Q4_K_M：5.5 GB 显存，8–12 token/秒——8GB 显卡首选',
          'ChatGLM3-6B：4.5 GB 显存，推理最快但角色一致性较弱',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 min read',
    intro: 'Running SillyTavern with a Chinese-language local model requires three things: a model trained natively on Chinese text, correct UTF-8 encoding in your character cards, and an API bridge from SillyTavern to Ollama or llama.cpp. This guide covers the best models for each VRAM tier, character card setup in Chinese, and the connection settings that actually work.',
    leadAnswerBlock: 'Qwen2.5-72B Q4_K_M is the best local model for Chinese roleplay at 46 GB RAM. For 8 GB VRAM, use Qwen2.5-7B. Always set character cards to UTF-8 and connect SillyTavern to Ollama at http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen2.5-72B Q4_K_M delivers the best Chinese-language roleplay quality locally; for 8 GB VRAM, Qwen2.5-7B is the practical choice at 8–12 tok/s.',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern is a chat UI for roleplay. Ollama runs the AI model on your machine. To do Chinese roleplay locally: (1) pull a Chinese-trained model via Ollama, (2) point SillyTavern at Ollama\'s API, (3) write character cards in Chinese with UTF-8 encoding.',
      },
    ],
    toc: [
      { label: 'Model Comparison by VRAM', anchor: 'model-comparison' },
      { label: 'Connecting SillyTavern to Ollama', anchor: 'connection-setup' },
      { label: 'Character Card Setup in Chinese', anchor: 'character-cards' },
      { label: 'Encoding Settings', anchor: 'encoding-settings' },
      { label: 'Prompt Template for Chinese', anchor: 'prompt-template' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Qwen2.5-72B Q4_K_M: best Chinese prose, 46 GB RAM needed',
          'Yi-34B Q4_K_M: best character depth, 21 GB RAM',
          'Qwen2.5-7B Q4_K_M: best for 8 GB VRAM, 8–12 tok/s',
          'SillyTavern → API type: OpenAI-compatible → URL: http://127.0.0.1:11434/v1',
          'Character cards: paste Chinese text directly, save as UTF-8',
          'System prompt: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Which Qwen or Chinese Model to Use for Roleplay',
        content: [
          'Four models cover the main hardware tiers. Qwen2.5-72B leads on prose quality but requires a workstation or Mac Studio with 46 GB of unified memory. Yi-34B is the runner-up for users who prioritise character voice and emotional range over raw fluency. Qwen2.5-7B is the practical choice for anyone with a standard gaming GPU.',
        ],
        comparisonTable: {
          columns: ['Model', 'VRAM / RAM', 'Chinese Score', 'Speed', 'Best For'],
          rows: [
            { 'Model': 'Qwen2.5-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'Chinese Score': '★★★★★', 'Speed': '1–3 tok/s', 'Best For': 'Best prose, long narratives' },
            { 'Model': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'Chinese Score': '★★★★☆', 'Speed': '2–5 tok/s', 'Best For': 'Emotional depth, character voice' },
            { 'Model': 'Qwen2.5-14B Q4_K_M', 'VRAM / RAM': '9.5 GB VRAM', 'Chinese Score': '★★★★☆', 'Speed': '4–8 tok/s', 'Best For': 'Balance of quality + speed' },
            { 'Model': 'Qwen2.5-7B Q4_K_M', 'VRAM / RAM': '5.5 GB VRAM', 'Chinese Score': '★★★☆☆', 'Speed': '8–12 tok/s', 'Best For': 'RTX 3060, 8 GB VRAM cards' },
            { 'Model': 'ChatGLM3-6B', 'VRAM / RAM': '4.5 GB VRAM', 'Chinese Score': '★★★☆☆', 'Speed': '12–18 tok/s', 'Best For': 'Fastest, limited context (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'Connect SillyTavern to Ollama in 4 Steps',
        content: [
          'SillyTavern communicates with Ollama through an OpenAI-compatible API endpoint. No plugin needed — Ollama exposes this natively at port 11434.',
        ],
        numberedItems: [
          'Pull the model: run `ollama pull qwen2.5:7b` (or `qwen2.5:72b`, `yi:34b`) in your terminal',
          'Open SillyTavern → API Connections → select **OpenAI-compatible**',
          'Set Custom API URL to: `http://127.0.0.1:11434/v1`',
          'Set API Key to any non-empty string (e.g., `ollama`) — Ollama ignores the key',
          'Click Connect → select your model from the dropdown',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Writing Character Cards in Chinese',
        content: [
          'SillyTavern character cards (persona descriptions, greeting messages, and example dialogue) fully support Chinese text. Write directly in Simplified Chinese — no special encoding steps needed as long as your system locale is UTF-8.',
          'A minimal Chinese character card structure:',
        ],
        codeBlock: `名字：苏云
描述：苏云是一名二十五岁的古风侠女，性格冷静、话语简洁，行事果断。她来自江湖，精通剑术，内心深处渴望平静的生活。
开场白：（苏云缓缓抬头，眸色沉静）你来了。有什么事？
示例对话：
{{user}}: 我需要你的帮助。
苏云: 先说清楚，值不值得我出手。`,
        codeLanguage: 'text',
      },
      encodingSettings: {
        id: 'encoding-settings',
        title: 'Encoding Settings to Prevent Garbled Chinese',
        content: [
          'Garbled Chinese output (乱码) is almost always caused by one of three issues: wrong system prompt language instruction, model not trained on Chinese, or a terminal/editor not set to UTF-8.',
        ],
        items: [
          '**SillyTavern config:** No special setting needed — the app uses UTF-8 internally. If you export/import character cards as JSON, verify your editor saves as UTF-8 (not ANSI or GB2312).',
          '**Windows terminal:** Run `chcp 65001` before starting Ollama to force UTF-8 code page.',
          '**Ollama model file:** If using a custom Modelfile, set `PARAMETER stop ""` — Chinese punctuation like 。！？ can trigger premature stop tokens on some base models.',
          '**llama.cpp backend:** Add `--log-disable` flag — the default log output can break Unicode in some Windows terminals.',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: 'System Prompt Template for Chinese Roleplay',
        content: [
          'Place this in SillyTavern\'s system prompt field (API → Instruction Template). Adjust the character name and tone as needed.',
        ],
        codeBlock: `你是{{char}}。请始终用简体中文回复，保持角色一致性。
规则：
- 不要破坏角色（OOC）
- 回复长度：100–300字，根据情境调整
- 使用符合古风/现代/科幻（选择一种）语境的词汇
- 如有动作描写，用括号标注，如：（她轻轻叹气）`,
        codeLanguage: 'text',
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can Qwen2.5-7B handle long roleplay sessions in Chinese?',
            a: 'Yes. Qwen2.5-7B Q4_K_M supports 32K context by default in Ollama. For long sessions with world-lore or extensive dialogue history, increase the context window in SillyTavern\'s API settings and use Qwen2.5-14B or higher for better coherence across 10K+ tokens.',
          },
          {
            q: 'Does SillyTavern support Chinese character names and descriptions?',
            a: 'Yes. SillyTavern stores all character data as UTF-8 JSON. You can write names, descriptions, greeting messages, and example dialogue entirely in Chinese. The UI renders Chinese characters correctly without any plugin.',
          },
          {
            q: 'Is Yi-34B better than Qwen2.5-14B for Chinese roleplay?',
            a: 'Yi-34B produces more expressive and emotionally varied character responses, especially for emotionally complex or literary scenes. Qwen2.5-14B is faster (4–8 tok/s vs 2–5 tok/s) and requires less RAM. For pure roleplay immersion, Yi-34B wins; for speed and lower hardware requirements, Qwen2.5-14B is the better choice.',
          },
          {
            q: 'Why is the model outputting mixed Chinese and English?',
            a: 'The system prompt is missing a language instruction. Add 始终用简体中文回复，不要使用英文。 to the system prompt in SillyTavern\'s instruction template. Also ensure you are using a model with strong Chinese training (Qwen2.5, Yi, ChatGLM) rather than Llama or Mistral, which default to English.',
          },
          {
            q: 'Can I use traditional Chinese instead of simplified?',
            a: 'Yes. Replace 简体中文 with 繁體中文 in the system prompt. Qwen2.5 handles traditional Chinese well. Yi-34B also supports traditional Chinese but with slightly lower consistency than simplified. ChatGLM3 was primarily trained on simplified Chinese and is not recommended for traditional Chinese use.',
          },
          {
            q: 'Does this work on a Mac?',
            a: 'Yes. Ollama on Apple Silicon runs Qwen2.5-7B and 14B via Metal (MLX backend). For Qwen2.5-72B, you need at least 64 GB unified memory (Mac Studio M2 Ultra or M3 Ultra, or Mac Pro). Use `ollama pull qwen2.5:72b` and connect SillyTavern the same way.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern Chinese Roleplay Setup 2026',
      description: 'Best models for Chinese roleplay in SillyTavern: Qwen2.5-72B leads, Yi-34B for character depth, ChatGLM for speed. Character card encoding, API bridge to Ollama.',
      url: 'https://www.promptquorum.com/prompt-bites/sillytavern-chinese-roleplay-setup?lang=en',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: 'Chinese Language LLM' },
        { '@type': 'Thing', name: 'Local LLM Roleplay' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Qwen2.5-7B handle long roleplay sessions in Chinese?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Qwen2.5-7B Q4_K_M supports 32K context by default in Ollama. For long sessions, increase the context window in SillyTavern API settings and use Qwen2.5-14B or higher for better coherence across 10K+ tokens.' },
        },
        {
          '@type': 'Question',
          name: 'Does SillyTavern support Chinese character names and descriptions?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. SillyTavern stores all character data as UTF-8 JSON. You can write names, descriptions, and dialogue entirely in Chinese. The UI renders Chinese characters correctly without any plugin.' },
        },
        {
          '@type': 'Question',
          name: 'Why is the model outputting mixed Chinese and English?',
          acceptedAnswer: { '@type': 'Answer', text: 'Add 始终用简体中文回复，不要使用英文 to the system prompt. Also ensure you are using a Chinese-trained model (Qwen2.5, Yi, ChatGLM) rather than Llama or Mistral, which default to English.' },
        },
      ],
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'SillyTavern Chinesisches Rollenspiel Einrichten',
    seoTitle: 'SillyTavern Chinesisch Rollenspiel 2026: Qwen2.5 & Yi-34B',
    metaDescription: 'Beste Modelle für chinesisches Rollenspiel in SillyTavern 2026: Qwen2.5-72B, Yi-34B, ChatGLM. Charakterkarten-UTF-8 und Ollama-API-Verbindung.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Chinesischsprachige Nutzer, die SillyTavern mit lokalen LLMs für Rollenspiele einrichten',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M is the best local model for Chinese roleplay — native Chinese training, rich vocabulary, and 128K context. Yi-34B excels at emotional character depth. For users with 8 GB VRAM, Qwen2.5-7B runs well at 8–12 tok/s.',
        bullets: [
          'Qwen2.5-72B Q4_K_M: 46 GB RAM, best Chinese prose quality, 128K context — for workstation or Mac Studio',
          'Yi-34B Q4_K_M: 21 GB RAM, excellent character voice and emotional range',
          'Qwen2.5-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — best for 8 GB VRAM cards',
          'ChatGLM3-6B: 4.5 GB VRAM, fastest inference but weaker character consistency',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel — natives chinesisches Training, reichhaltiger Wortschatz und 128K Kontext. Yi-34B glänzt bei emotionaler Charaktertiefe. Mit 8 GB VRAM läuft Qwen2.5-7B flüssig mit 8–12 tok/s.',
        bullets: [
          'Qwen2.5-72B Q4_K_M: 46 GB RAM, beste chinesische Prosaqualität, 128K Kontext',
          'Yi-34B Q4_K_M: 21 GB RAM, exzellente Charakterstimme und emotionale Tiefe',
          'Qwen2.5-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s — ideal für 8-GB-Grafikkarten',
          'ChatGLM3-6B: 4,5 GB VRAM, schnellste Inferenz, aber schwächere Charakterkonsistenz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: "Qwen2.5-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois — entraîné nativement en chinois, vocabulaire riche, contexte 128K. Yi-34B excelle dans la profondeur émotionnelle des personnages. Avec 8 Go de VRAM, Qwen2.5-7B tourne à 8–12 tok/s.",
        bullets: [
          'Qwen2.5-72B Q4_K_M : 46 Go RAM, meilleure qualité de prose chinoise, contexte 128K',
          'Yi-34B Q4_K_M : 21 Go RAM, excellente voix de personnage et gamme émotionnelle',
          'Qwen2.5-7B Q4_K_M : 5,5 Go VRAM, 8–12 tok/s — idéal pour les cartes 8 Go',
          'ChatGLM3-6B : 4,5 Go VRAM, inférence la plus rapide mais cohérence de personnage plus faible',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen2.5-72B Q4_K_Mが中国語ロールプレイに最適なローカルモデルです。ネイティブ中国語学習、豊富な語彙、128Kコンテキストを備えています。Yi-34Bは感情的なキャラクター表現に優れています。8GB VRAMならQwen2.5-7Bが8〜12トークン/秒で動作します。',
        bullets: [
          'Qwen2.5-72B Q4_K_M: RAM 46GB、最高の中国語文章品質、128Kコンテキスト',
          'Yi-34B Q4_K_M: RAM 21GB、優れたキャラクターボイスと感情表現',
          'Qwen2.5-7B Q4_K_M: VRAM 5.5GB、8〜12トークン/秒 — 8GB GPUに最適',
          'ChatGLM3-6B: VRAM 4.5GB、最速推論だがキャラクター一貫性は低め',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen2.5-72B Q4_K_M 是中文角色扮演的最佳本地模型——原生中文训练、词汇丰富、支持 128K 上下文。Yi-34B 擅长角色情感深度。8GB 显存用户推荐 Qwen2.5-7B，速度 8–12 token/秒。',
        bullets: [
          'Qwen2.5-72B Q4_K_M：46 GB 内存，最佳中文散文质量，128K 上下文——适合工作站或 Mac Studio',
          'Yi-34B Q4_K_M：21 GB 内存，出色的角色声音和情感层次',
          'Qwen2.5-7B Q4_K_M：5.5 GB 显存，8–12 token/秒——8GB 显卡首选',
          'ChatGLM3-6B：4.5 GB 显存，推理最快但角色一致性较弱',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 Min. Lesezeit',
    intro: 'SillyTavern mit einem chinesischsprachigen lokalen Modell zu betreiben erfordert drei Dinge: ein nativ auf Chinesisch trainiertes Modell, korrekte UTF-8-Kodierung in den Charakterkarten und eine API-Bridge von SillyTavern zu Ollama oder llama.cpp. Dieser Leitfaden behandelt die besten Modelle für jede VRAM-Stufe, die Einrichtung von Charakterkarten auf Chinesisch und die Verbindungseinstellungen.',
    leadAnswerBlock: 'Qwen2.5-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel bei 46 GB RAM. Für 8 GB VRAM verwenden Sie Qwen2.5-7B. Setzen Sie Charakterkarten immer auf UTF-8 und verbinden Sie SillyTavern mit Ollama unter http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen2.5-72B Q4_K_M liefert die beste chinesischsprachige Rollenspielqualität lokal; für 8 GB VRAM ist Qwen2.5-7B die praktische Wahl mit 8–12 tok/s.',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern ist eine Chat-Oberfläche für Rollenspiele. Ollama führt das KI-Modell auf Ihrem Rechner aus. Für chinesisches Rollenspiel lokal: (1) Ein chinesisch trainiertes Modell über Ollama herunterladen, (2) SillyTavern auf die Ollama-API zeigen lassen, (3) Charakterkarten auf Chinesisch in UTF-8 verfassen.',
      },
    ],
    toc: [
      { label: 'Modellvergleich nach VRAM', anchor: 'model-comparison' },
      { label: 'SillyTavern mit Ollama verbinden', anchor: 'connection-setup' },
      { label: 'Charakterkarten auf Chinesisch', anchor: 'character-cards' },
      { label: 'Kodierungseinstellungen', anchor: 'encoding-settings' },
      { label: 'Prompt-Vorlage für Chinesisch', anchor: 'prompt-template' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Qwen2.5-72B Q4_K_M: beste chinesische Prosa, 46 GB RAM erforderlich',
          'Yi-34B Q4_K_M: beste Charaktertiefe, 21 GB RAM',
          'Qwen2.5-7B Q4_K_M: beste Wahl für 8 GB VRAM, 8–12 tok/s',
          'SillyTavern → API-Typ: OpenAI-kompatibel → URL: http://127.0.0.1:11434/v1',
          'Charakterkarten: Chinesischen Text direkt einfügen, als UTF-8 speichern',
          'Systemprompt: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Welches Qwen- oder chinesisches Modell für Rollenspiele verwenden',
        content: [
          'Vier Modelle decken die wichtigsten Hardware-Stufen ab. Qwen2.5-72B führt bei der Prosaqualität, benötigt aber einen Workstation oder Mac Studio mit 46 GB Unified Memory. Yi-34B ist die zweite Wahl für Nutzer, die Charakterstimme und emotionale Tiefe priorisieren. Qwen2.5-7B ist die praktische Wahl für Standard-Gaming-GPUs.',
        ],
        comparisonTable: {
          columns: ['Modell', 'VRAM / RAM', 'Chinesisch-Score', 'Geschwindigkeit', 'Ideal für'],
          rows: [
            { 'Modell': 'Qwen2.5-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'Chinesisch-Score': '★★★★★', 'Geschwindigkeit': '1–3 tok/s', 'Ideal für': 'Beste Prosa, lange Erzählungen' },
            { 'Modell': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'Chinesisch-Score': '★★★★☆', 'Geschwindigkeit': '2–5 tok/s', 'Ideal für': 'Emotionale Tiefe, Charakterstimme' },
            { 'Modell': 'Qwen2.5-14B Q4_K_M', 'VRAM / RAM': '9,5 GB VRAM', 'Chinesisch-Score': '★★★★☆', 'Geschwindigkeit': '4–8 tok/s', 'Ideal für': 'Balance aus Qualität und Geschwindigkeit' },
            { 'Modell': 'Qwen2.5-7B Q4_K_M', 'VRAM / RAM': '5,5 GB VRAM', 'Chinesisch-Score': '★★★☆☆', 'Geschwindigkeit': '8–12 tok/s', 'Ideal für': 'RTX 3060, 8-GB-VRAM-Karten' },
            { 'Modell': 'ChatGLM3-6B', 'VRAM / RAM': '4,5 GB VRAM', 'Chinesisch-Score': '★★★☆☆', 'Geschwindigkeit': '12–18 tok/s', 'Ideal für': 'Schnellste Inferenz, begrenzter Kontext (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'SillyTavern mit Ollama in 4 Schritten verbinden',
        content: [
          'SillyTavern kommuniziert mit Ollama über einen OpenAI-kompatiblen API-Endpunkt. Kein Plugin erforderlich — Ollama stellt diesen nativ auf Port 11434 bereit.',
        ],
        numberedItems: [
          'Modell herunterladen: `ollama pull qwen2.5:7b` (oder `qwen2.5:72b`, `yi:34b`) im Terminal ausführen',
          'SillyTavern öffnen → API-Verbindungen → **OpenAI-kompatibel** auswählen',
          'Benutzerdefinierte API-URL setzen auf: `http://127.0.0.1:11434/v1`',
          'API-Schlüssel auf einen beliebigen nicht leeren String setzen (z.B. `ollama`) — Ollama ignoriert den Schlüssel',
          'Verbinden klicken → Modell aus der Dropdown-Liste auswählen',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Charakterkarten auf Chinesisch erstellen',
        content: [
          'SillyTavern-Charakterkarten (Persona-Beschreibungen, Begrüßungsnachrichten und Beispieldialoge) unterstützen vollständig chinesischen Text. Schreiben Sie direkt auf vereinfachtem Chinesisch — keine besonderen Kodierungsschritte erforderlich, solange Ihr System-Locale auf UTF-8 eingestellt ist.',
        ],
        codeBlock: `名字：苏云
描述：苏云是一名二十五岁的古风侠女，性格冷静、话语简洁，行事果断。她来自江湖，精通剑术，内心深处渴望平静的生活。
开场白：（苏云缓缓抬头，眸色沉静）你来了。有什么事？
示例对话：
{{user}}: 我需要你的帮助。
苏云: 先说清楚，值不值得我出手。`,
        codeLanguage: 'text',
      },
      encodingSettings: {
        id: 'encoding-settings',
        title: 'Kodierungseinstellungen gegen unlesbares Chinesisch',
        content: [
          'Unlesbares Chinesisch (乱码) hat fast immer eine von drei Ursachen: fehlende Sprachanweisung im Systemprompt, Modell nicht auf Chinesisch trainiert, oder Terminal/Editor nicht auf UTF-8 eingestellt.',
        ],
        items: [
          '**SillyTavern-Konfiguration:** Keine besondere Einstellung erforderlich — die App verwendet intern UTF-8. Beim Export/Import von Charakterkarten als JSON sicherstellen, dass der Editor als UTF-8 (nicht ANSI oder GB2312) speichert.',
          '**Windows-Terminal:** `chcp 65001` ausführen, bevor Ollama gestartet wird, um UTF-8-Codepage zu erzwingen.',
          '**Ollama-Modelldatei:** Bei Verwendung einer benutzerdefinierten Modelfile `PARAMETER stop ""` setzen — chinesische Satzzeichen wie 。！？ können bei einigen Basismodellen vorzeitige Stop-Token auslösen.',
          '**llama.cpp-Backend:** Flag `--log-disable` hinzufügen — die Standard-Log-Ausgabe kann Unicode in manchen Windows-Terminals beschädigen.',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: 'Systemprompt-Vorlage für chinesisches Rollenspiel',
        content: [
          'Dies in das Systemprompt-Feld von SillyTavern (API → Instruction Template) einfügen. Charaktername und Tonalität nach Bedarf anpassen.',
        ],
        codeBlock: `你是{{char}}。请始终用简体中文回复，保持角色一致性。
规则：
- 不要破坏角色（OOC）
- 回复长度：100–300字，根据情境调整
- 使用符合古风/现代/科幻（选择一种）语境的词汇
- 如有动作描写，用括号标注，如：（她轻轻叹气）`,
        codeLanguage: 'text',
      },
      faqSection: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          {
            q: 'Kann Qwen2.5-7B lange Rollenspiel-Sitzungen auf Chinesisch verarbeiten?',
            a: 'Ja. Qwen2.5-7B Q4_K_M unterstützt standardmäßig 32K Kontext in Ollama. Für lange Sitzungen den Kontextfenster in den SillyTavern-API-Einstellungen erhöhen und Qwen2.5-14B oder höher für bessere Kohärenz bei 10K+ Token verwenden.',
          },
          {
            q: 'Unterstützt SillyTavern chinesische Charakternamen und -beschreibungen?',
            a: 'Ja. SillyTavern speichert alle Charakterdaten als UTF-8-JSON. Namen, Beschreibungen, Begrüßungsnachrichten und Beispieldialoge können vollständig auf Chinesisch verfasst werden. Die Oberfläche rendert chinesische Zeichen korrekt ohne Plugin.',
          },
          {
            q: 'Warum gibt das Modell gemischtes Chinesisch und Englisch aus?',
            a: 'Das Systemprompt enthält keine Sprachanweisung. 始终用简体中文回复，不要使用英文 zum Systemprompt hinzufügen. Außerdem sicherstellen, dass ein chinesisch trainiertes Modell (Qwen2.5, Yi, ChatGLM) und nicht Llama oder Mistral verwendet wird, da diese standardmäßig Englisch ausgeben.',
          },
          {
            q: 'Muss ich bei der Nutzung von SillyTavern die DSGVO beachten?',
            a: 'Da SillyTavern und Ollama vollständig lokal laufen und keine Daten an externe Server senden, ist die DSGVO-Relevanz minimal. Trotzdem sollten Sie gemäß DSGVO-Artikel 5 keine personenbezogenen Daten Dritter in Rollenspiele einfließen lassen, ohne deren Einwilligung.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern Chinesisches Rollenspiel Einrichten 2026',
      description: 'Beste Modelle für chinesisches Rollenspiel in SillyTavern: Qwen2.5-72B führt, Yi-34B für Charaktertiefe, ChatGLM für Geschwindigkeit. Charakterkarten-Kodierung und Ollama-API-Bridge.',
      url: 'https://www.promptquorum.com/prompt-bites/sillytavern-chinese-roleplay-setup?lang=de',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: 'Chinesisches Sprachmodell' },
        { '@type': 'Thing', name: 'Lokales LLM Rollenspiel' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann Qwen2.5-7B lange Rollenspiel-Sitzungen auf Chinesisch verarbeiten?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja. Qwen2.5-7B Q4_K_M unterstützt standardmäßig 32K Kontext in Ollama. Für lange Sitzungen den Kontextfenster erhöhen und Qwen2.5-14B oder höher für bessere Kohärenz bei 10K+ Token verwenden.' },
        },
        {
          '@type': 'Question',
          name: 'Warum gibt das Modell gemischtes Chinesisch und Englisch aus?',
          acceptedAnswer: { '@type': 'Answer', text: '始终用简体中文回复，不要使用英文 zum Systemprompt hinzufügen. Außerdem sicherstellen, dass Qwen2.5, Yi oder ChatGLM verwendet wird — Llama und Mistral geben standardmäßig Englisch aus.' },
        },
      ],
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Configuration SillyTavern pour le jeu de rôle en chinois',
    seoTitle: 'SillyTavern jeu de rôle chinois 2026 : Qwen2.5 & Yi-34B',
    metaDescription: 'Meilleurs modèles pour le roleplay en chinois sur SillyTavern : Qwen2.5-72B, Yi-34B, ChatGLM. Encodage UTF-8 des cartes et connexion API Ollama.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs chinois configurant SillyTavern avec des LLM locaux pour le jeu de rôle',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M is the best local model for Chinese roleplay — native Chinese training, rich vocabulary, and 128K context. Yi-34B excels at emotional character depth. For users with 8 GB VRAM, Qwen2.5-7B runs well at 8–12 tok/s.',
        bullets: [
          'Qwen2.5-72B Q4_K_M: 46 GB RAM, best Chinese prose quality, 128K context — for workstation or Mac Studio',
          'Yi-34B Q4_K_M: 21 GB RAM, excellent character voice and emotional range',
          'Qwen2.5-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — best for 8 GB VRAM cards',
          'ChatGLM3-6B: 4.5 GB VRAM, fastest inference but weaker character consistency',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel — natives chinesisches Training, reichhaltiger Wortschatz und 128K Kontext.',
        bullets: [
          'Qwen2.5-72B Q4_K_M: 46 GB RAM, beste chinesische Prosaqualität',
          'Yi-34B Q4_K_M: 21 GB RAM, exzellente Charakterstimme',
          'Qwen2.5-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s',
          'ChatGLM3-6B: 4,5 GB VRAM, schnellste Inferenz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: "Qwen2.5-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois — entraîné nativement en chinois, vocabulaire riche, contexte 128K. Yi-34B excelle dans la profondeur émotionnelle des personnages. Avec 8 Go de VRAM, Qwen2.5-7B tourne à 8–12 tok/s.",
        bullets: [
          'Qwen2.5-72B Q4_K_M : 46 Go RAM, meilleure qualité de prose chinoise, contexte 128K',
          'Yi-34B Q4_K_M : 21 Go RAM, excellente voix de personnage et gamme émotionnelle',
          'Qwen2.5-7B Q4_K_M : 5,5 Go VRAM, 8–12 tok/s — idéal pour les cartes 8 Go',
          'ChatGLM3-6B : 4,5 Go VRAM, inférence la plus rapide mais cohérence de personnage plus faible',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen2.5-72B Q4_K_Mが最適です。',
        bullets: [
          'Qwen2.5-72B Q4_K_M: RAM 46GB',
          'Yi-34B Q4_K_M: RAM 21GB',
          'Qwen2.5-7B Q4_K_M: VRAM 5.5GB',
          'ChatGLM3-6B: VRAM 4.5GB',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen2.5-72B Q4_K_M 是最佳选择。',
        bullets: [
          'Qwen2.5-72B Q4_K_M：46 GB 内存',
          'Yi-34B Q4_K_M：21 GB 内存',
          'Qwen2.5-7B Q4_K_M：5.5 GB 显存',
          'ChatGLM3-6B：4.5 GB 显存',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 min de lecture',
    intro: "Faire fonctionner SillyTavern avec un modèle local en langue chinoise nécessite trois choses : un modèle entraîné nativement sur du texte chinois, un encodage UTF-8 correct dans les cartes de personnage, et un bridge API de SillyTavern vers Ollama ou llama.cpp. Ce guide couvre les meilleurs modèles par niveau de VRAM, la configuration des cartes de personnage en chinois et les paramètres de connexion.",
    leadAnswerBlock: "Qwen2.5-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois avec 46 Go de RAM. Pour 8 Go de VRAM, utilisez Qwen2.5-7B. Définissez toujours les cartes de personnage en UTF-8 et connectez SillyTavern à Ollama via http://127.0.0.1:11434.",
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen2.5-72B Q4_K_M offre la meilleure qualité de jeu de rôle en chinois en local ; pour 8 Go de VRAM, Qwen2.5-7B est le choix pratique à 8–12 tok/s.',
      },
      {
        type: 'plain-terms',
        content: "SillyTavern est une interface de chat pour le jeu de rôle. Ollama exécute le modèle IA sur votre machine. Pour le jeu de rôle en chinois en local : (1) télécharger un modèle entraîné en chinois via Ollama, (2) pointer SillyTavern vers l'API Ollama, (3) rédiger les cartes de personnage en chinois en UTF-8.",
      },
    ],
    toc: [
      { label: 'Comparaison des modèles par VRAM', anchor: 'model-comparison' },
      { label: 'Connexion SillyTavern à Ollama', anchor: 'connection-setup' },
      { label: 'Cartes de personnage en chinois', anchor: 'character-cards' },
      { label: "Paramètres d'encodage", anchor: 'encoding-settings' },
      { label: 'Modèle de prompt pour le chinois', anchor: 'prompt-template' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En résumé',
        isTldr: true,
        items: [
          'Qwen2.5-72B Q4_K_M : meilleure prose chinoise, 46 Go RAM nécessaires',
          'Yi-34B Q4_K_M : meilleure profondeur de personnage, 21 Go RAM',
          'Qwen2.5-7B Q4_K_M : meilleur pour 8 Go VRAM, 8–12 tok/s',
          'SillyTavern → Type API : Compatible OpenAI → URL : http://127.0.0.1:11434/v1',
          'Cartes de personnage : coller le texte chinois directement, enregistrer en UTF-8',
          'Prompt système : 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Quel modèle Qwen ou chinois utiliser pour le jeu de rôle',
        content: [
          "Quatre modèles couvrent les principaux niveaux matériels. Qwen2.5-72B est en tête pour la qualité de la prose mais nécessite une station de travail ou un Mac Studio avec 46 Go de mémoire unifiée. Yi-34B est le second choix pour les utilisateurs qui privilégient la voix des personnages et la profondeur émotionnelle. Qwen2.5-7B est le choix pratique pour un GPU de jeu standard.",
        ],
        comparisonTable: {
          columns: ['Modèle', 'VRAM / RAM', 'Score chinois', 'Vitesse', 'Idéal pour'],
          rows: [
            { 'Modèle': 'Qwen2.5-72B Q4_K_M', 'VRAM / RAM': '46 Go RAM', 'Score chinois': '★★★★★', 'Vitesse': '1–3 tok/s', 'Idéal pour': 'Meilleure prose, longues narrations' },
            { 'Modèle': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 Go RAM', 'Score chinois': '★★★★☆', 'Vitesse': '2–5 tok/s', 'Idéal pour': 'Profondeur émotionnelle, voix de personnage' },
            { 'Modèle': 'Qwen2.5-14B Q4_K_M', 'VRAM / RAM': '9,5 Go VRAM', 'Score chinois': '★★★★☆', 'Vitesse': '4–8 tok/s', 'Idéal pour': 'Équilibre qualité + vitesse' },
            { 'Modèle': 'Qwen2.5-7B Q4_K_M', 'VRAM / RAM': '5,5 Go VRAM', 'Score chinois': '★★★☆☆', 'Vitesse': '8–12 tok/s', 'Idéal pour': 'RTX 3060, cartes 8 Go VRAM' },
            { 'Modèle': 'ChatGLM3-6B', 'VRAM / RAM': '4,5 Go VRAM', 'Score chinois': '★★★☆☆', 'Vitesse': '12–18 tok/s', 'Idéal pour': 'Inférence la plus rapide, contexte limité (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'Connecter SillyTavern à Ollama en 4 étapes',
        content: [
          "SillyTavern communique avec Ollama via un endpoint API compatible OpenAI. Aucun plugin nécessaire — Ollama l'expose nativement sur le port 11434.",
        ],
        numberedItems: [
          'Télécharger le modèle : exécuter `ollama pull qwen2.5:7b` (ou `qwen2.5:72b`, `yi:34b`) dans le terminal',
          'Ouvrir SillyTavern → Connexions API → sélectionner **Compatible OpenAI**',
          "Définir l'URL API personnalisée sur : `http://127.0.0.1:11434/v1`",
          "Définir la clé API sur n'importe quelle chaîne non vide (ex. `ollama`) — Ollama ignore la clé",
          'Cliquer sur Connecter → sélectionner votre modèle dans la liste déroulante',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Rédiger des cartes de personnage en chinois',
        content: [
          "Les cartes de personnage SillyTavern (descriptions de persona, messages d'accueil et dialogues exemples) supportent pleinement le texte chinois. Rédigez directement en chinois simplifié — aucune étape d'encodage spéciale n'est nécessaire si votre locale système est UTF-8.",
        ],
        codeBlock: `名字：苏云
描述：苏云是一名二十五岁的古风侠女，性格冷静、话语简洁，行事果断。她来自江湖，精通剑术，内心深处渴望平静的生活。
开场白：（苏云缓缓抬头，眸色沉静）你来了。有什么事？
示例对话：
{{user}}: 我需要你的帮助。
苏云: 先说清楚，值不值得我出手。`,
        codeLanguage: 'text',
      },
      encodingSettings: {
        id: 'encoding-settings',
        title: "Paramètres d'encodage pour éviter le chinois illisible",
        content: [
          "Le chinois illisible (乱码) est presque toujours causé par l'une de ces trois raisons : instruction de langue manquante dans le prompt système, modèle non entraîné en chinois, ou terminal/éditeur non configuré en UTF-8.",
        ],
        items: [
          "**Configuration SillyTavern :** Aucun paramètre spécial nécessaire — l'application utilise UTF-8 en interne. Lors de l'export/import de cartes de personnage en JSON, vérifier que l'éditeur enregistre en UTF-8 (pas ANSI ou GB2312).",
          '**Terminal Windows :** Exécuter `chcp 65001` avant de démarrer Ollama pour forcer la page de code UTF-8.',
          "**Fichier modèle Ollama :** Si vous utilisez un Modelfile personnalisé, définir `PARAMETER stop \"\"` — la ponctuation chinoise comme 。！？ peut déclencher des tokens d'arrêt prématurés sur certains modèles de base.",
          "**Backend llama.cpp :** Ajouter le flag `--log-disable` — la sortie de log par défaut peut corrompre l'Unicode dans certains terminaux Windows.",
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: 'Modèle de prompt système pour le jeu de rôle en chinois',
        content: [
          "Placer ceci dans le champ de prompt système de SillyTavern (API → Modèle d'instruction). Adapter le nom du personnage et le ton selon les besoins.",
        ],
        codeBlock: `你是{{char}}。请始终用简体中文回复，保持角色一致性。
规则：
- 不要破坏角色（OOC）
- 回复长度：100–300字，根据情境调整
- 使用符合古风/现代/科幻（选择一种）语境的词汇
- 如有动作描写，用括号标注，如：（她轻轻叹气）`,
        codeLanguage: 'text',
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Qwen2.5-7B peut-il gérer de longues sessions de jeu de rôle en chinois ?',
            a: "Oui. Qwen2.5-7B Q4_K_M supporte 32K de contexte par défaut dans Ollama. Pour les longues sessions, augmentez la fenêtre de contexte dans les paramètres API de SillyTavern et utilisez Qwen2.5-14B ou supérieur pour une meilleure cohérence au-delà de 10K tokens.",
          },
          {
            q: 'Pourquoi le modèle produit-il du chinois et de l\'anglais mélangés ?',
            a: "Ajoutez 始终用简体中文回复，不要使用英文 au prompt système. Assurez-vous également d'utiliser un modèle entraîné en chinois (Qwen2.5, Yi, ChatGLM) plutôt que Llama ou Mistral, qui produisent de l'anglais par défaut.",
          },
          {
            q: 'Puis-je utiliser le chinois traditionnel au lieu du simplifié ?',
            a: "Oui. Remplacez 简体中文 par 繁體中文 dans le prompt système. Qwen2.5 gère bien le chinois traditionnel. Yi-34B supporte également le chinois traditionnel mais avec une cohérence légèrement inférieure au simplifié.",
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configuration SillyTavern pour le jeu de rôle en chinois 2026',
      description: 'Meilleurs modèles pour le jeu de rôle chinois dans SillyTavern : Qwen2.5-72B en tête, Yi-34B pour la profondeur des personnages. Encodage des cartes et bridge API Ollama.',
      url: 'https://www.promptquorum.com/prompt-bites/sillytavern-chinese-roleplay-setup?lang=fr',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: 'Modèle de langue chinoise' },
        { '@type': 'Thing', name: 'Jeu de rôle LLM local' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi le modèle produit-il du chinois et de l\'anglais mélangés ?',
          acceptedAnswer: { '@type': 'Answer', text: "Ajoutez 始终用简体中文回复，不要使用英文 au prompt système. Utilisez Qwen2.5, Yi ou ChatGLM plutôt que Llama ou Mistral." },
        },
      ],
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'SillyTavern 中国語ロールプレイ設定ガイド',
    seoTitle: 'SillyTavern 中国語ロールプレイ設定 2026：Qwen2.5・Yi-34B最適ガイド',
    metaDescription: 'SillyTavernで中国語ロールプレイに最適なローカルモデルを解説します。Qwen2.5-72Bが文章品質トップ、Yi-34Bはキャラクター感情表現に優れ、ChatGLM3-6Bは最速推論。キャラクターカードのUTF-8設定とOllama APIブリッジの接続方法も説明します。',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLMでSillyTavernを使った中国語ロールプレイを設定する中国語ユーザー',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M is the best local model for Chinese roleplay.',
        bullets: ['Qwen2.5-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen2.5-7B Q4_K_M: 5.5 GB VRAM', 'ChatGLM3-6B: 4.5 GB VRAM'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M ist das beste lokale Modell.',
        bullets: ['Qwen2.5-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen2.5-7B Q4_K_M: 5,5 GB VRAM', 'ChatGLM3-6B: 4,5 GB VRAM'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: 'Qwen2.5-72B Q4_K_M est le meilleur modèle local.',
        bullets: ['Qwen2.5-72B Q4_K_M : 46 Go RAM', 'Yi-34B Q4_K_M : 21 Go RAM', 'Qwen2.5-7B Q4_K_M : 5,5 Go VRAM', 'ChatGLM3-6B : 4,5 Go VRAM'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen2.5-72B Q4_K_Mが中国語ロールプレイに最適なローカルモデルです。ネイティブ中国語学習、豊富な語彙、128Kコンテキストを備えています。Yi-34Bは感情的なキャラクター表現に優れています。',
        bullets: [
          'Qwen2.5-72B Q4_K_M: RAM 46GB、最高の中国語文章品質、128Kコンテキスト',
          'Yi-34B Q4_K_M: RAM 21GB、優れたキャラクターボイスと感情表現',
          'Qwen2.5-7B Q4_K_M: VRAM 5.5GB、8〜12トークン/秒 — 8GB GPUに最適',
          'ChatGLM3-6B: VRAM 4.5GB、最速推論',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen2.5-72B Q4_K_M 是最佳本地模型。',
        bullets: ['Qwen2.5-72B Q4_K_M：46 GB 内存', 'Yi-34B Q4_K_M：21 GB 内存', 'Qwen2.5-7B Q4_K_M：5.5 GB 显存', 'ChatGLM3-6B：4.5 GB 显存'],
        updatedDate: '2026-05',
      },
    },
    readTime: '5分で読める',
    intro: 'SillyTavernを中国語のローカルモデルで動かすには3つのことが必要です：中国語テキストでネイティブに学習されたモデル、キャラクターカードの正しいUTF-8エンコード、SillyTavernからOllamaまたはllama.cppへのAPIブリッジ。このガイドではVRAMレベル別の最適モデル、中国語でのキャラクターカード設定、接続設定を解説します。',
    leadAnswerBlock: 'Qwen2.5-72B Q4_K_Mが46GB RAMで中国語ロールプレイの最適ローカルモデルです。8GB VRAMにはQwen2.5-7Bを使用してください。キャラクターカードは常にUTF-8に設定し、SillyTavernをhttp://127.0.0.1:11434でOllamaに接続してください。',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen2.5-72B Q4_K_Mがローカルで最高の中国語ロールプレイ品質を提供します。8GB VRAMにはQwen2.5-7B（8〜12トークン/秒）が実用的な選択肢です。',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavernはロールプレイ用のチャットUIです。OllamaはAIモデルをあなたのマシンで動かします。ローカルで中国語ロールプレイをするには：(1) Ollama経由で中国語学習モデルをダウンロード、(2) SillyTavernをOllama APIに向ける、(3) キャラクターカードをUTF-8で中国語で書く。',
      },
    ],
    toc: [
      { label: 'VRAMレベル別モデル比較', anchor: 'model-comparison' },
      { label: 'SillyTavernをOllamaに接続', anchor: 'connection-setup' },
      { label: '中国語でのキャラクターカード設定', anchor: 'character-cards' },
      { label: 'エンコード設定', anchor: 'encoding-settings' },
      { label: '中国語用プロンプトテンプレート', anchor: 'prompt-template' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'まとめ',
        isTldr: true,
        items: [
          'Qwen2.5-72B Q4_K_M：最高の中国語散文、RAM 46GB必要',
          'Yi-34B Q4_K_M：最高のキャラクター深度、RAM 21GB',
          'Qwen2.5-7B Q4_K_M：8GB VRAMに最適、8〜12トークン/秒',
          'SillyTavern → APIタイプ：OpenAI互換 → URL：http://127.0.0.1:11434/v1',
          'キャラクターカード：中国語テキストを直接貼り付け、UTF-8で保存',
          'システムプロンプト：始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'ロールプレイに使うQwenまたは中国語モデルの選び方',
        content: [
          '4つのモデルが主要なハードウェアレベルをカバーしています。Qwen2.5-72Bは文章品質でトップですが、46GBのユニファイドメモリを持つワークステーションまたはMac Studioが必要です。Yi-34Bはキャラクターの声と感情の深さを優先するユーザーに最適です。Qwen2.5-7Bは標準的なゲーミングGPUの実用的な選択肢です。',
        ],
        comparisonTable: {
          columns: ['モデル', 'VRAM / RAM', '中国語スコア', '速度', '最適な用途'],
          rows: [
            { 'モデル': 'Qwen2.5-72B Q4_K_M', 'VRAM / RAM': 'RAM 46GB', '中国語スコア': '★★★★★', '速度': '1〜3トークン/秒', '最適な用途': '最高の散文、長い物語' },
            { 'モデル': 'Yi-34B Q4_K_M', 'VRAM / RAM': 'RAM 21GB', '中国語スコア': '★★★★☆', '速度': '2〜5トークン/秒', '最適な用途': '感情的深度、キャラクターの声' },
            { 'モデル': 'Qwen2.5-14B Q4_K_M', 'VRAM / RAM': 'VRAM 9.5GB', '中国語スコア': '★★★★☆', '速度': '4〜8トークン/秒', '最適な用途': '品質と速度のバランス' },
            { 'モデル': 'Qwen2.5-7B Q4_K_M', 'VRAM / RAM': 'VRAM 5.5GB', '中国語スコア': '★★★☆☆', '速度': '8〜12トークン/秒', '最適な用途': 'RTX 3060、8GB VRAMカード' },
            { 'モデル': 'ChatGLM3-6B', 'VRAM / RAM': 'VRAM 4.5GB', '中国語スコア': '★★★☆☆', '速度': '12〜18トークン/秒', '最適な用途': '最速推論、限られたコンテキスト(8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'SillyTavernをOllamaに4ステップで接続',
        content: [
          'SillyTavernはOpenAI互換APIエンドポイントを通じてOllamaと通信します。プラグイン不要 — Ollamaはポート11434でこれをネイティブに公開しています。',
        ],
        numberedItems: [
          'モデルのダウンロード：ターミナルで`ollama pull qwen2.5:7b`（または`qwen2.5:72b`、`yi:34b`）を実行',
          'SillyTavernを開く → API接続 → **OpenAI互換**を選択',
          'カスタムAPI URLを設定：`http://127.0.0.1:11434/v1`',
          'APIキーを任意の空でない文字列に設定（例：`ollama`）— Ollamaはキーを無視',
          '接続をクリック → ドロップダウンからモデルを選択',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: '中国語でのキャラクターカード作成',
        content: [
          'SillyTavernのキャラクターカード（ペルソナ説明、挨拶メッセージ、サンプル対話）は中国語テキストを完全にサポートしています。システムロケールがUTF-8に設定されていれば、特別なエンコード手順は不要です。',
        ],
        codeBlock: `名字：苏云
描述：苏云是一名二十五岁的古风侠女，性格冷静、话语简洁，行事果断。她来自江湖，精通剑术，内心深处渴望平静的生活。
开场白：（苏云缓缓抬头，眸色沉静）你来了。有什么事？
示例对话：
{{user}}: 我需要你的帮助。
苏云: 先说清楚，值不值得我出手。`,
        codeLanguage: 'text',
      },
      encodingSettings: {
        id: 'encoding-settings',
        title: '文字化けを防ぐエンコード設定',
        content: [
          '文字化け（乱码）の原因はほぼ3つのいずれかです：システムプロンプトの言語指示が欠けている、中国語で学習されていないモデル、またはターミナル/エディタがUTF-8に設定されていない。',
        ],
        items: [
          '**SillyTavern設定：** 特別な設定は不要 — アプリは内部でUTF-8を使用。キャラクターカードをJSONでエクスポート/インポートする際は、エディタがUTF-8（ANSIやGB2312ではなく）で保存することを確認。',
          '**Windowsターミナル：** Ollamaを起動する前に`chcp 65001`を実行してUTF-8コードページを強制。',
          '**Ollamaモデルファイル：** カスタムModelfileを使用する場合、`PARAMETER stop ""`を設定 — 。！？などの中国語句読点が一部のベースモデルで早期停止トークンを引き起こす可能性がある。',
          '**llama.cppバックエンド：** `--log-disable`フラグを追加 — デフォルトのログ出力が一部のWindowsターミナルでUnicodeを破損する可能性がある。',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: '中国語ロールプレイ用システムプロンプトテンプレート',
        content: [
          'これをSillyTavernのシステムプロンプトフィールド（API → インストラクションテンプレート）に配置します。必要に応じてキャラクター名とトーンを調整してください。',
        ],
        codeBlock: `你是{{char}}。请始终用简体中文回复，保持角色一致性。
规则：
- 不要破坏角色（OOC）
- 回复长度：100–300字，根据情境调整
- 使用符合古风/现代/科幻（选择一种）语境的词汇
- 如有动作描写，用括号标注，如：（她轻轻叹气）`,
        codeLanguage: 'text',
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Qwen2.5-7Bは中国語の長いロールプレイセッションを処理できますか？',
            a: 'はい。Qwen2.5-7B Q4_K_MはOllamaでデフォルトで32Kコンテキストをサポートしています。長いセッションには、SillyTavernのAPI設定でコンテキストウィンドウを増やし、10K+トークン以上の一貫性向上のためQwen2.5-14B以上を使用してください。',
          },
          {
            q: 'なぜモデルが中国語と英語が混在した出力をするのですか？',
            a: 'システムプロンプトに言語指示が欠けています。始终用简体中文回复，不要使用英文をシステムプロンプトに追加してください。また、デフォルトで英語を出力するLlamaやMistralではなく、中国語学習モデル（Qwen2.5、Yi、ChatGLM）を使用していることを確認してください。',
          },
          {
            q: '繁体字中国語は使えますか？',
            a: 'はい。システムプロンプトで简体中文を繁體中文に置き換えてください。Qwen2.5は繁体字中国語を適切に処理します。Yi-34Bも繁体字中国語をサポートしていますが、簡体字よりも一貫性がやや低いです。',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern 中国語ロールプレイ設定ガイド 2026',
      description: 'SillyTavernで中国語ロールプレイに最適なモデル：Qwen2.5-72Bがトップ、Yi-34Bはキャラクター深度。キャラクターカードのエンコードとOllama APIブリッジ。',
      url: 'https://www.promptquorum.com/prompt-bites/sillytavern-chinese-roleplay-setup?lang=ja',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: '中国語言語モデル' },
        { '@type': 'Thing', name: 'ローカルLLMロールプレイ' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'なぜモデルが中国語と英語が混在した出力をするのですか？',
          acceptedAnswer: { '@type': 'Answer', text: '始终用简体中文回复，不要使用英文をシステムプロンプトに追加してください。Qwen2.5、Yi、またはChatGLMを使用していることも確認してください。' },
        },
      ],
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: 'SillyTavern 中文角色扮演配置指南',
    seoTitle: 'SillyTavern 中文角色扮演 2026：Qwen2.5、Yi-34B最优模型与配置完整指南',
    metaDescription: 'SillyTavern本地中文角色扮演完整配置指南：Qwen2.5-72B中文散文质量最佳，Yi-34B角色情感层次最丰富，ChatGLM3-6B速度最快（8 GB显存可运行）。角色卡UTF-8中文编码设置与Ollama API桥接步骤详解，助您搭建流畅的中文本地角色扮演环境。',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: '使用本地 LLM 在 SillyTavern 进行中文角色扮演的用户',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M is the best local model.',
        bullets: ['Qwen2.5-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen2.5-7B Q4_K_M: 5.5 GB VRAM', 'ChatGLM3-6B: 4.5 GB VRAM'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen2.5-72B Q4_K_M ist das beste lokale Modell.',
        bullets: ['Qwen2.5-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen2.5-7B Q4_K_M: 5,5 GB VRAM', 'ChatGLM3-6B: 4,5 GB VRAM'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: 'Qwen2.5-72B Q4_K_M est le meilleur modèle local.',
        bullets: ['Qwen2.5-72B Q4_K_M : 46 Go RAM', 'Yi-34B Q4_K_M : 21 Go RAM', 'Qwen2.5-7B Q4_K_M : 5,5 Go VRAM', 'ChatGLM3-6B : 4,5 Go VRAM'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen2.5-72B Q4_K_Mが最適です。',
        bullets: ['Qwen2.5-72B Q4_K_M: RAM 46GB', 'Yi-34B Q4_K_M: RAM 21GB', 'Qwen2.5-7B Q4_K_M: VRAM 5.5GB', 'ChatGLM3-6B: VRAM 4.5GB'],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen2.5-72B Q4_K_M 是中文角色扮演的最佳本地模型——原生中文训练、词汇丰富、支持 128K 上下文。Yi-34B 擅长角色情感深度。8GB 显存推荐 Qwen2.5-7B，速度 8–12 token/秒。',
        bullets: [
          'Qwen2.5-72B Q4_K_M：46 GB 内存，最佳中文散文质量，128K 上下文——适合工作站或 Mac Studio',
          'Yi-34B Q4_K_M：21 GB 内存，出色的角色声音与情感层次',
          'Qwen2.5-7B Q4_K_M：5.5 GB 显存，8–12 token/秒——8GB 显卡首选',
          'ChatGLM3-6B：4.5 GB 显存，推理最快但角色一致性较弱',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 分钟阅读',
    intro: '在 SillyTavern 中使用中文本地模型需要三样东西：原生中文训练的模型、角色卡正确的 UTF-8 编码，以及从 SillyTavern 到 Ollama 或 llama.cpp 的 API 桥接。本指南涵盖各显存档次的最佳模型、中文角色卡设置，以及实际可用的连接配置。',
    leadAnswerBlock: 'Qwen2.5-72B Q4_K_M 是中文角色扮演的最佳本地模型，需要 46 GB 内存。8GB 显存用 Qwen2.5-7B。角色卡始终设为 UTF-8，SillyTavern 通过 http://127.0.0.1:11434 连接 Ollama。',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen2.5-72B Q4_K_M 在本地提供最佳中文角色扮演质量；8GB 显存用户选 Qwen2.5-7B（8–12 token/秒）。',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern 是角色扮演聊天界面。Ollama 在本机运行 AI 模型。本地中文角色扮演步骤：(1) 通过 Ollama 下载中文训练模型，(2) 将 SillyTavern 指向 Ollama API，(3) 用 UTF-8 编写中文角色卡。',
      },
    ],
    toc: [
      { label: '按显存对比模型', anchor: 'model-comparison' },
      { label: 'SillyTavern 连接 Ollama', anchor: 'connection-setup' },
      { label: '中文角色卡设置', anchor: 'character-cards' },
      { label: '编码设置', anchor: 'encoding-settings' },
      { label: '中文角色扮演提示词模板', anchor: 'prompt-template' },
      { label: '常见问题', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '简要总结',
        isTldr: true,
        items: [
          'Qwen2.5-72B Q4_K_M：最佳中文散文，需要 46 GB 内存',
          'Yi-34B Q4_K_M：最佳角色深度，21 GB 内存',
          'Qwen2.5-7B Q4_K_M：8GB 显存首选，8–12 token/秒',
          'SillyTavern → API 类型：OpenAI 兼容 → URL：http://127.0.0.1:11434/v1',
          '角色卡：直接粘贴中文文本，保存为 UTF-8',
          '系统提示词：始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: '中文角色扮演选哪个 Qwen 或中文模型',
        content: [
          '四款模型覆盖主要硬件档次。Qwen2.5-72B 散文质量最高，但需要配备 46 GB 统一内存的工作站或 Mac Studio。Yi-34B 适合重视角色声音和情感层次的用户。Qwen2.5-7B 是标准游戏显卡的实用之选。',
        ],
        comparisonTable: {
          columns: ['模型', '显存 / 内存', '中文评分', '速度', '最适场景'],
          rows: [
            { '模型': 'Qwen2.5-72B Q4_K_M', '显存 / 内存': '46 GB 内存', '中文评分': '★★★★★', '速度': '1–3 token/秒', '最适场景': '最佳散文，长篇叙事' },
            { '模型': 'Yi-34B Q4_K_M', '显存 / 内存': '21 GB 内存', '中文评分': '★★★★☆', '速度': '2–5 token/秒', '最适场景': '情感深度，角色声音' },
            { '模型': 'Qwen2.5-14B Q4_K_M', '显存 / 内存': '9.5 GB 显存', '中文评分': '★★★★☆', '速度': '4–8 token/秒', '最适场景': '质量与速度的平衡' },
            { '模型': 'Qwen2.5-7B Q4_K_M', '显存 / 内存': '5.5 GB 显存', '中文评分': '★★★☆☆', '速度': '8–12 token/秒', '最适场景': 'RTX 3060，8GB 显存显卡' },
            { '模型': 'ChatGLM3-6B', '显存 / 内存': '4.5 GB 显存', '中文评分': '★★★☆☆', '速度': '12–18 token/秒', '最适场景': '速度最快，上下文有限（8K）' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: '4 步将 SillyTavern 连接到 Ollama',
        content: [
          'SillyTavern 通过 OpenAI 兼容 API 端点与 Ollama 通信。无需插件——Ollama 原生在 11434 端口暴露此接口。',
        ],
        numberedItems: [
          '下载模型：在终端运行 `ollama pull qwen2.5:7b`（或 `qwen2.5:72b`、`yi:34b`）',
          '打开 SillyTavern → API 连接 → 选择 **OpenAI 兼容**',
          '自定义 API URL 设为：`http://127.0.0.1:11434/v1`',
          'API 密钥设为任意非空字符串（如 `ollama`）——Ollama 忽略密钥',
          '点击连接 → 从下拉列表选择模型',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: '中文角色卡设置',
        content: [
          'SillyTavern 的角色卡（人设描述、开场白、示例对话）完全支持中文文本。系统语言为 UTF-8 时，直接用简体中文书写即可，无需额外编码步骤。',
        ],
        codeBlock: `名字：苏云
描述：苏云是一名二十五岁的古风侠女，性格冷静、话语简洁，行事果断。她来自江湖，精通剑术，内心深处渴望平静的生活。
开场白：（苏云缓缓抬头，眸色沉静）你来了。有什么事？
示例对话：
{{user}}: 我需要你的帮助。
苏云: 先说清楚，值不值得我出手。`,
        codeLanguage: 'text',
      },
      encodingSettings: {
        id: 'encoding-settings',
        title: '防止乱码的编码设置',
        content: [
          '乱码几乎总是由以下三个原因之一造成：系统提示词缺少语言指令、模型未经中文训练，或终端/编辑器未设为 UTF-8。',
        ],
        items: [
          '**SillyTavern 配置：** 无需特殊设置——应用内部使用 UTF-8。导出/导入 JSON 格式角色卡时，确认编辑器以 UTF-8（非 ANSI 或 GB2312）保存。',
          '**Windows 终端：** 启动 Ollama 前运行 `chcp 65001` 强制 UTF-8 代码页。',
          '**Ollama 模型文件：** 使用自定义 Modelfile 时，设置 `PARAMETER stop ""`——某些基础模型的。！？等中文标点可能触发提前停止 token。',
          '**llama.cpp 后端：** 添加 `--log-disable` 标志——默认日志输出在部分 Windows 终端中可能破坏 Unicode。',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: '中文角色扮演系统提示词模板',
        content: [
          '将以下内容填入 SillyTavern 的系统提示词字段（API → 指令模板）。根据需要调整角色名和语气风格。',
        ],
        codeBlock: `你是{{char}}。请始终用简体中文回复，保持角色一致性。
规则：
- 不要破坏角色（OOC）
- 回复长度：100–300字，根据情境调整
- 使用符合古风/现代/科幻（选择一种）语境的词汇
- 如有动作描写，用括号标注，如：（她轻轻叹气）`,
        codeLanguage: 'text',
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Qwen2.5-7B 能处理长篇中文角色扮演吗？',
            a: '可以。Ollama 中 Qwen2.5-7B Q4_K_M 默认支持 32K 上下文。长篇对话可在 SillyTavern API 设置中增大上下文窗口，10K+ token 的一致性建议升级到 Qwen2.5-14B 或更高。',
          },
          {
            q: 'SillyTavern 支持中文角色名和描述吗？',
            a: '支持。SillyTavern 将所有角色数据存储为 UTF-8 JSON，姓名、描述、开场白、示例对话均可用中文书写。界面无需插件即可正确显示中文字符。',
          },
          {
            q: '为什么模型输出中英文混杂？',
            a: '系统提示词缺少语言指令。在系统提示词中添加：始终用简体中文回复，不要使用英文。同时确认使用的是中文训练模型（Qwen2.5、Yi、ChatGLM），而非 Llama 或 Mistral——后者默认输出英文。',
          },
          {
            q: '能用繁体中文吗？',
            a: '可以。将系统提示词中的 简体中文 替换为 繁體中文。Qwen2.5 对繁体中文支持良好。Yi-34B 也支持繁体中文，但一致性略低于简体。ChatGLM3 主要在简体中文上训练，不推荐用于繁体中文场景。',
          },
          {
            q: '在 Mac 上能用吗？',
            a: '可以。Apple Silicon 上的 Ollama 通过 Metal 后端运行 Qwen2.5-7B 和 14B。Qwen2.5-72B 需要至少 64 GB 统一内存（Mac Studio M2 Ultra/M3 Ultra 或 Mac Pro）。运行 `ollama pull qwen2.5:72b`，SillyTavern 连接方式相同。',
          },
          {
            q: '模型中文角色扮演效果怎么评估？',
            a: '重点看三点：(1) 是否坚持用中文回复而不夹杂英文；(2) 是否保持角色一致性，不出现 OOC（出戏）；(3) 用词是否符合设定语境（古风/现代/科幻）。Qwen2.5-72B 在这三点上综合表现最佳，Yi-34B 在情感表达上有优势。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[中英文提示词对比](/prompt-bites/chinese-prompting-vs-english-prompting?lang=zh) — 用Qwen3本地部署进行中英文提示词效果对比实测。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern 中文角色扮演配置指南 2026',
      description: 'SillyTavern 中文角色扮演最佳本地模型：Qwen2.5-72B 首选，Yi-34B 角色深度突出。角色卡中文设置与 Ollama API 桥接。',
      url: 'https://www.promptquorum.com/prompt-bites/sillytavern-chinese-roleplay-setup?lang=zh',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: '中文语言模型' },
        { '@type': 'Thing', name: '本地 LLM 角色扮演' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: '为什么模型输出中英文混杂？',
          acceptedAnswer: { '@type': 'Answer', text: '在系统提示词中添加：始终用简体中文回复，不要使用英文。同时确认使用 Qwen2.5、Yi 或 ChatGLM，而非 Llama 或 Mistral。' },
        },
        {
          '@type': 'Question',
          name: 'SillyTavern 支持中文角色名和描述吗？',
          acceptedAnswer: { '@type': 'Answer', text: '支持。SillyTavern 将所有角色数据存储为 UTF-8 JSON，姓名、描述、开场白、示例对话均可用中文书写，无需插件。' },
        },
      ],
    },
  },
}
