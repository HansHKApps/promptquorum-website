import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    title: 'SillyTavern Chinese Roleplay Setup',
    seoTitle: 'SillyTavern Chinese Roleplay 2026: Qwen3 & Yi-34B',
    metaDescription: 'Best local models for Chinese roleplay in SillyTavern 2026: Qwen3-72B, Yi-34B, ChatGLM. UTF-8 character cards and Ollama API bridge setup.',
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
        answer: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay — native Chinese training, rich vocabulary, and 128K context. Yi-34B excels at emotional character depth. For users with 8 GB VRAM, Qwen3-7B runs well at 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, best Chinese prose quality, 128K context — for workstation or Mac Studio',
          'Yi-34B Q4_K_M: 21 GB RAM, excellent character voice and emotional range',
          'Qwen3-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — best for 8 GB VRAM cards',
          'ChatGLM3-6B: 4.5 GB VRAM, fastest inference but weaker character consistency',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel — natives chinesisches Training, reichhaltiger Wortschatz und 128K Kontext. Yi-34B glänzt bei emotionaler Charaktertiefe. Mit 8 GB VRAM läuft Qwen3-7B flüssig mit 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, beste chinesische Prosaqualität, 128K Kontext',
          'Yi-34B Q4_K_M: 21 GB RAM, exzellente Charakterstimme und emotionale Tiefe',
          'Qwen3-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s — ideal für 8-GB-Grafikkarten',
          'ChatGLM3-6B: 4,5 GB VRAM, schnellste Inferenz, aber schwächere Charakterkonsistenz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: "Qwen3-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois — entraîné nativement en chinois, vocabulaire riche, contexte 128K. Yi-34B excelle dans la profondeur émotionnelle des personnages. Avec 8 Go de VRAM, Qwen3-7B tourne à 8–12 tok/s.",
        bullets: [
          'Qwen3-72B Q4_K_M : 46 Go RAM, meilleure qualité de prose chinoise, contexte 128K',
          'Yi-34B Q4_K_M : 21 Go RAM, excellente voix de personnage et gamme émotionnelle',
          'Qwen3-7B Q4_K_M : 5,5 Go VRAM, 8–12 tok/s — idéal pour les cartes 8 Go',
          'ChatGLM3-6B : 4,5 Go VRAM, inférence la plus rapide mais cohérence de personnage plus faible',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが中国語ロールプレイに最適なローカルモデルです。ネイティブ中国語学習、豊富な語彙、128Kコンテキストを備えています。Yi-34Bは感情的なキャラクター表現に優れています。8GB VRAMならQwen3-7Bが8〜12トークン/秒で動作します。',
        bullets: [
          'Qwen3-72B Q4_K_M: RAM 46GB、最高の中国語文章品質、128Kコンテキスト',
          'Yi-34B Q4_K_M: RAM 21GB、優れたキャラクターボイスと感情表現',
          'Qwen3-7B Q4_K_M: VRAM 5.5GB、8〜12トークン/秒 — 8GB GPUに最適',
          'ChatGLM3-6B: VRAM 4.5GB、最速推論だがキャラクター一貫性は低め',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是中文角色扮演的最佳本地模型——原生中文训练、词汇丰富、支持 128K 上下文。Yi-34B 擅长角色情感深度。8GB 显存用户推荐 Qwen3-7B，速度 8–12 token/秒。',
        bullets: [
          'Qwen3-72B Q4_K_M：46 GB 内存，最佳中文散文质量，128K 上下文——适合工作站或 Mac Studio',
          'Yi-34B Q4_K_M：21 GB 内存，出色的角色声音和情感层次',
          'Qwen3-7B Q4_K_M：5.5 GB 显存，8–12 token/秒——8GB 显卡首选',
          'ChatGLM3-6B：4.5 GB 显存，推理最快但角色一致性较弱',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 min read',
    intro: 'Running SillyTavern with a Chinese-language local model requires three things: a model trained natively on Chinese text, correct UTF-8 encoding in your character cards, and an API bridge from SillyTavern to Ollama or llama.cpp. This guide covers the best models for each VRAM tier, character card setup in Chinese, and the connection settings that actually work.',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay at 46 GB RAM. For 8 GB VRAM, use Qwen3-7B. Always set character cards to UTF-8 and connect SillyTavern to Ollama at http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M delivers the best Chinese-language roleplay quality locally; for 8 GB VRAM, Qwen3-7B is the practical choice at 8–12 tok/s.',
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
          'Qwen3-72B Q4_K_M: best Chinese prose, 46 GB RAM needed',
          'Yi-34B Q4_K_M: best character depth, 21 GB RAM',
          'Qwen3-7B Q4_K_M: best for 8 GB VRAM, 8–12 tok/s',
          'SillyTavern → API type: OpenAI-compatible → URL: http://127.0.0.1:11434/v1',
          'Character cards: paste Chinese text directly, save as UTF-8',
          'System prompt: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Which Qwen or Chinese Model to Use for Roleplay',
        content: [
          'Four models cover the main hardware tiers. Qwen3-72B leads on prose quality but requires a workstation or Mac Studio with 46 GB of unified memory. Yi-34B is the runner-up for users who prioritise character voice and emotional range over raw fluency. Qwen3-7B is the practical choice for anyone with a standard gaming GPU.',
        ],
        comparisonTable: {
          columns: ['Model', 'VRAM / RAM', 'Chinese Score', 'Speed', 'Best For'],
          rows: [
            { 'Model': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'Chinese Score': '★★★★★', 'Speed': '1–3 tok/s', 'Best For': 'Best prose, long narratives' },
            { 'Model': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'Chinese Score': '★★★★☆', 'Speed': '2–5 tok/s', 'Best For': 'Emotional depth, character voice' },
            { 'Model': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9.5 GB VRAM', 'Chinese Score': '★★★★☆', 'Speed': '4–8 tok/s', 'Best For': 'Balance of quality + speed' },
            { 'Model': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5.5 GB VRAM', 'Chinese Score': '★★★☆☆', 'Speed': '8–12 tok/s', 'Best For': 'RTX 3060, 8 GB VRAM cards' },
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
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can Qwen3-7B handle long roleplay sessions in Chinese?',
            a: 'Yes. Qwen3-7B Q4_K_M supports 32K context by default in Ollama. For long sessions with world-lore or extensive dialogue history, increase the context window in SillyTavern\'s API settings and use Qwen3-14B or higher for better coherence across 10K+ tokens.',
          },
          {
            q: 'Does SillyTavern support Chinese character names and descriptions?',
            a: 'Yes. SillyTavern stores all character data as UTF-8 JSON. You can write names, descriptions, greeting messages, and example dialogue entirely in Chinese. The UI renders Chinese characters correctly without any plugin.',
          },
          {
            q: 'Is Yi-34B better than Qwen3-14B for Chinese roleplay?',
            a: 'Yi-34B produces more expressive and emotionally varied character responses, especially for emotionally complex or literary scenes. Qwen3-14B is faster (4–8 tok/s vs 2–5 tok/s) and requires less RAM. For pure roleplay immersion, Yi-34B wins; for speed and lower hardware requirements, Qwen3-14B is the better choice.',
          },
          {
            q: 'Why is the model outputting mixed Chinese and English?',
            a: 'The system prompt is missing a language instruction. Add 始终用简体中文回复，不要使用英文。 to the system prompt in SillyTavern\'s instruction template. Also ensure you are using a model with strong Chinese training (Qwen3, Yi, ChatGLM) rather than Llama or Mistral, which default to English.',
          },
          {
            q: 'Can I use traditional Chinese instead of simplified?',
            a: 'Yes. Replace 简体中文 with 繁體中文 in the system prompt. Qwen3 handles traditional Chinese well. Yi-34B also supports traditional Chinese but with slightly lower consistency than simplified. ChatGLM3 was primarily trained on simplified Chinese and is not recommended for traditional Chinese use.',
          },
          {
            q: 'Does this work on a Mac?',
            a: 'Yes. Ollama on Apple Silicon runs Qwen3-7B and 14B via Metal (MLX backend). For Qwen3-72B, you need at least 64 GB unified memory (Mac Studio M2 Ultra or M3 Ultra, or Mac Pro). Use `ollama pull qwen2.5:72b` and connect SillyTavern the same way.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern Chinese Roleplay Setup 2026',
      description: 'Best models for Chinese roleplay in SillyTavern: Qwen3-72B leads, Yi-34B for character depth, ChatGLM for speed. Character card encoding, API bridge to Ollama.',
      url: 'https://www.promptquorum.com/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Qwen3-7B handle long roleplay sessions in Chinese?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Qwen3-7B Q4_K_M supports 32K context by default in Ollama. For long sessions, increase the context window in SillyTavern API settings and use Qwen3-14B or higher for better coherence across 10K+ tokens.' },
        },
        {
          '@type': 'Question',
          name: 'Does SillyTavern support Chinese character names and descriptions?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. SillyTavern stores all character data as UTF-8 JSON. You can write names, descriptions, and dialogue entirely in Chinese. The UI renders Chinese characters correctly without any plugin.' },
        },
        {
          '@type': 'Question',
          name: 'Why is the model outputting mixed Chinese and English?',
          acceptedAnswer: { '@type': 'Answer', text: 'Add 始终用简体中文回复，不要使用英文 to the system prompt. Also ensure you are using a Chinese-trained model (Qwen3, Yi, ChatGLM) rather than Llama or Mistral, which default to English.' },
        },
      ],
    },
  },
  de: {
    theme: 'Model Comparisons',
    title: 'SillyTavern Chinesisches Rollenspiel Einrichten',
    seoTitle: 'SillyTavern Chinesisch Rollenspiel 2026: Qwen3 & Yi-34B',
    metaDescription: 'Beste Modelle für chinesisches Rollenspiel in SillyTavern 2026: Qwen3-72B, Yi-34B, ChatGLM. Charakterkarten-UTF-8 und Ollama-API-Verbindung.',
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
        answer: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay — native Chinese training, rich vocabulary, and 128K context. Yi-34B excels at emotional character depth. For users with 8 GB VRAM, Qwen3-7B runs well at 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, best Chinese prose quality, 128K context — for workstation or Mac Studio',
          'Yi-34B Q4_K_M: 21 GB RAM, excellent character voice and emotional range',
          'Qwen3-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — best for 8 GB VRAM cards',
          'ChatGLM3-6B: 4.5 GB VRAM, fastest inference but weaker character consistency',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel — natives chinesisches Training, reichhaltiger Wortschatz und 128K Kontext. Yi-34B glänzt bei emotionaler Charaktertiefe. Mit 8 GB VRAM läuft Qwen3-7B flüssig mit 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, beste chinesische Prosaqualität, 128K Kontext',
          'Yi-34B Q4_K_M: 21 GB RAM, exzellente Charakterstimme und emotionale Tiefe',
          'Qwen3-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s — ideal für 8-GB-Grafikkarten',
          'ChatGLM3-6B: 4,5 GB VRAM, schnellste Inferenz, aber schwächere Charakterkonsistenz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: "Qwen3-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois — entraîné nativement en chinois, vocabulaire riche, contexte 128K. Yi-34B excelle dans la profondeur émotionnelle des personnages. Avec 8 Go de VRAM, Qwen3-7B tourne à 8–12 tok/s.",
        bullets: [
          'Qwen3-72B Q4_K_M : 46 Go RAM, meilleure qualité de prose chinoise, contexte 128K',
          'Yi-34B Q4_K_M : 21 Go RAM, excellente voix de personnage et gamme émotionnelle',
          'Qwen3-7B Q4_K_M : 5,5 Go VRAM, 8–12 tok/s — idéal pour les cartes 8 Go',
          'ChatGLM3-6B : 4,5 Go VRAM, inférence la plus rapide mais cohérence de personnage plus faible',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが中国語ロールプレイに最適なローカルモデルです。ネイティブ中国語学習、豊富な語彙、128Kコンテキストを備えています。Yi-34Bは感情的なキャラクター表現に優れています。8GB VRAMならQwen3-7Bが8〜12トークン/秒で動作します。',
        bullets: [
          'Qwen3-72B Q4_K_M: RAM 46GB、最高の中国語文章品質、128Kコンテキスト',
          'Yi-34B Q4_K_M: RAM 21GB、優れたキャラクターボイスと感情表現',
          'Qwen3-7B Q4_K_M: VRAM 5.5GB、8〜12トークン/秒 — 8GB GPUに最適',
          'ChatGLM3-6B: VRAM 4.5GB、最速推論だがキャラクター一貫性は低め',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是中文角色扮演的最佳本地模型——原生中文训练、词汇丰富、支持 128K 上下文。Yi-34B 擅长角色情感深度。8GB 显存用户推荐 Qwen3-7B，速度 8–12 token/秒。',
        bullets: [
          'Qwen3-72B Q4_K_M：46 GB 内存，最佳中文散文质量，128K 上下文——适合工作站或 Mac Studio',
          'Yi-34B Q4_K_M：21 GB 内存，出色的角色声音和情感层次',
          'Qwen3-7B Q4_K_M：5.5 GB 显存，8–12 token/秒——8GB 显卡首选',
          'ChatGLM3-6B：4.5 GB 显存，推理最快但角色一致性较弱',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 Min. Lesezeit',
    intro: 'SillyTavern mit einem chinesischsprachigen lokalen Modell zu betreiben erfordert drei Dinge: ein nativ auf Chinesisch trainiertes Modell, korrekte UTF-8-Kodierung in den Charakterkarten und eine API-Bridge von SillyTavern zu Ollama oder llama.cpp. Dieser Leitfaden behandelt die besten Modelle für jede VRAM-Stufe, die Einrichtung von Charakterkarten auf Chinesisch und die Verbindungseinstellungen.',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel bei 46 GB RAM. Für 8 GB VRAM verwenden Sie Qwen3-7B. Setzen Sie Charakterkarten immer auf UTF-8 und verbinden Sie SillyTavern mit Ollama unter http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M liefert die beste chinesischsprachige Rollenspielqualität lokal; für 8 GB VRAM ist Qwen3-7B die praktische Wahl mit 8–12 tok/s.',
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
          'Qwen3-72B Q4_K_M: beste chinesische Prosa, 46 GB RAM erforderlich',
          'Yi-34B Q4_K_M: beste Charaktertiefe, 21 GB RAM',
          'Qwen3-7B Q4_K_M: beste Wahl für 8 GB VRAM, 8–12 tok/s',
          'SillyTavern → API-Typ: OpenAI-kompatibel → URL: http://127.0.0.1:11434/v1',
          'Charakterkarten: Chinesischen Text direkt einfügen, als UTF-8 speichern',
          'Systemprompt: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Welches Qwen- oder chinesisches Modell für Rollenspiele verwenden',
        content: [
          'Vier Modelle decken die wichtigsten Hardware-Stufen ab. Qwen3-72B führt bei der Prosaqualität, benötigt aber einen Workstation oder Mac Studio mit 46 GB Unified Memory. Yi-34B ist die zweite Wahl für Nutzer, die Charakterstimme und emotionale Tiefe priorisieren. Qwen3-7B ist die praktische Wahl für Standard-Gaming-GPUs.',
        ],
        comparisonTable: {
          columns: ['Modell', 'VRAM / RAM', 'Chinesisch-Score', 'Geschwindigkeit', 'Ideal für'],
          rows: [
            { 'Modell': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'Chinesisch-Score': '★★★★★', 'Geschwindigkeit': '1–3 tok/s', 'Ideal für': 'Beste Prosa, lange Erzählungen' },
            { 'Modell': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'Chinesisch-Score': '★★★★☆', 'Geschwindigkeit': '2–5 tok/s', 'Ideal für': 'Emotionale Tiefe, Charakterstimme' },
            { 'Modell': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9,5 GB VRAM', 'Chinesisch-Score': '★★★★☆', 'Geschwindigkeit': '4–8 tok/s', 'Ideal für': 'Balance aus Qualität und Geschwindigkeit' },
            { 'Modell': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5,5 GB VRAM', 'Chinesisch-Score': '★★★☆☆', 'Geschwindigkeit': '8–12 tok/s', 'Ideal für': 'RTX 3060, 8-GB-VRAM-Karten' },
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
            q: 'Kann Qwen3-7B lange Rollenspiel-Sitzungen auf Chinesisch verarbeiten?',
            a: 'Ja. Qwen3-7B Q4_K_M unterstützt standardmäßig 32K Kontext in Ollama. Für lange Sitzungen den Kontextfenster in den SillyTavern-API-Einstellungen erhöhen und Qwen3-14B oder höher für bessere Kohärenz bei 10K+ Token verwenden.',
          },
          {
            q: 'Unterstützt SillyTavern chinesische Charakternamen und -beschreibungen?',
            a: 'Ja. SillyTavern speichert alle Charakterdaten als UTF-8-JSON. Namen, Beschreibungen, Begrüßungsnachrichten und Beispieldialoge können vollständig auf Chinesisch verfasst werden. Die Oberfläche rendert chinesische Zeichen korrekt ohne Plugin.',
          },
          {
            q: 'Warum gibt das Modell gemischtes Chinesisch und Englisch aus?',
            a: 'Das Systemprompt enthält keine Sprachanweisung. 始终用简体中文回复，不要使用英文 zum Systemprompt hinzufügen. Außerdem sicherstellen, dass ein chinesisch trainiertes Modell (Qwen3, Yi, ChatGLM) und nicht Llama oder Mistral verwendet wird, da diese standardmäßig Englisch ausgeben.',
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
      description: 'Beste Modelle für chinesisches Rollenspiel in SillyTavern: Qwen3-72B führt, Yi-34B für Charaktertiefe, ChatGLM für Geschwindigkeit. Charakterkarten-Kodierung und Ollama-API-Bridge.',
      url: 'https://www.promptquorum.com/de/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          name: 'Kann Qwen3-7B lange Rollenspiel-Sitzungen auf Chinesisch verarbeiten?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja. Qwen3-7B Q4_K_M unterstützt standardmäßig 32K Kontext in Ollama. Für lange Sitzungen den Kontextfenster erhöhen und Qwen3-14B oder höher für bessere Kohärenz bei 10K+ Token verwenden.' },
        },
        {
          '@type': 'Question',
          name: 'Warum gibt das Modell gemischtes Chinesisch und Englisch aus?',
          acceptedAnswer: { '@type': 'Answer', text: '始终用简体中文回复，不要使用英文 zum Systemprompt hinzufügen. Außerdem sicherstellen, dass Qwen3, Yi oder ChatGLM verwendet wird — Llama und Mistral geben standardmäßig Englisch aus.' },
        },
      ],
    },
  },
  fr: {
    theme: 'Model Comparisons',
    title: 'Configuration SillyTavern pour le jeu de rôle en chinois',
    seoTitle: 'SillyTavern jeu de rôle chinois 2026 : Qwen3 & Yi-34B',
    metaDescription: 'Meilleurs modèles pour le roleplay en chinois sur SillyTavern : Qwen3-72B, Yi-34B, ChatGLM. Encodage UTF-8 des cartes et connexion API Ollama.',
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
        answer: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay — native Chinese training, rich vocabulary, and 128K context. Yi-34B excels at emotional character depth. For users with 8 GB VRAM, Qwen3-7B runs well at 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, best Chinese prose quality, 128K context — for workstation or Mac Studio',
          'Yi-34B Q4_K_M: 21 GB RAM, excellent character voice and emotional range',
          'Qwen3-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — best for 8 GB VRAM cards',
          'ChatGLM3-6B: 4.5 GB VRAM, fastest inference but weaker character consistency',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell für chinesisches Rollenspiel — natives chinesisches Training, reichhaltiger Wortschatz und 128K Kontext.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, beste chinesische Prosaqualität',
          'Yi-34B Q4_K_M: 21 GB RAM, exzellente Charakterstimme',
          'Qwen3-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s',
          'ChatGLM3-6B: 4,5 GB VRAM, schnellste Inferenz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: "Qwen3-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois — entraîné nativement en chinois, vocabulaire riche, contexte 128K. Yi-34B excelle dans la profondeur émotionnelle des personnages. Avec 8 Go de VRAM, Qwen3-7B tourne à 8–12 tok/s.",
        bullets: [
          'Qwen3-72B Q4_K_M : 46 Go RAM, meilleure qualité de prose chinoise, contexte 128K',
          'Yi-34B Q4_K_M : 21 Go RAM, excellente voix de personnage et gamme émotionnelle',
          'Qwen3-7B Q4_K_M : 5,5 Go VRAM, 8–12 tok/s — idéal pour les cartes 8 Go',
          'ChatGLM3-6B : 4,5 Go VRAM, inférence la plus rapide mais cohérence de personnage plus faible',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが最適です。',
        bullets: [
          'Qwen3-72B Q4_K_M: RAM 46GB',
          'Yi-34B Q4_K_M: RAM 21GB',
          'Qwen3-7B Q4_K_M: VRAM 5.5GB',
          'ChatGLM3-6B: VRAM 4.5GB',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是最佳选择。',
        bullets: [
          'Qwen3-72B Q4_K_M：46 GB 内存',
          'Yi-34B Q4_K_M：21 GB 内存',
          'Qwen3-7B Q4_K_M：5.5 GB 显存',
          'ChatGLM3-6B：4.5 GB 显存',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 min de lecture',
    intro: "Faire fonctionner SillyTavern avec un modèle local en langue chinoise nécessite trois choses : un modèle entraîné nativement sur du texte chinois, un encodage UTF-8 correct dans les cartes de personnage, et un bridge API de SillyTavern vers Ollama ou llama.cpp. Ce guide couvre les meilleurs modèles par niveau de VRAM, la configuration des cartes de personnage en chinois et les paramètres de connexion.",
    leadAnswerBlock: "Qwen3-72B Q4_K_M est le meilleur modèle local pour le jeu de rôle en chinois avec 46 Go de RAM. Pour 8 Go de VRAM, utilisez Qwen3-7B. Définissez toujours les cartes de personnage en UTF-8 et connectez SillyTavern à Ollama via http://127.0.0.1:11434.",
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M offre la meilleure qualité de jeu de rôle en chinois en local ; pour 8 Go de VRAM, Qwen3-7B est le choix pratique à 8–12 tok/s.',
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
          'Qwen3-72B Q4_K_M : meilleure prose chinoise, 46 Go RAM nécessaires',
          'Yi-34B Q4_K_M : meilleure profondeur de personnage, 21 Go RAM',
          'Qwen3-7B Q4_K_M : meilleur pour 8 Go VRAM, 8–12 tok/s',
          'SillyTavern → Type API : Compatible OpenAI → URL : http://127.0.0.1:11434/v1',
          'Cartes de personnage : coller le texte chinois directement, enregistrer en UTF-8',
          'Prompt système : 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Quel modèle Qwen ou chinois utiliser pour le jeu de rôle',
        content: [
          "Quatre modèles couvrent les principaux niveaux matériels. Qwen3-72B est en tête pour la qualité de la prose mais nécessite une station de travail ou un Mac Studio avec 46 Go de mémoire unifiée. Yi-34B est le second choix pour les utilisateurs qui privilégient la voix des personnages et la profondeur émotionnelle. Qwen3-7B est le choix pratique pour un GPU de jeu standard.",
        ],
        comparisonTable: {
          columns: ['Modèle', 'VRAM / RAM', 'Score chinois', 'Vitesse', 'Idéal pour'],
          rows: [
            { 'Modèle': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 Go RAM', 'Score chinois': '★★★★★', 'Vitesse': '1–3 tok/s', 'Idéal pour': 'Meilleure prose, longues narrations' },
            { 'Modèle': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 Go RAM', 'Score chinois': '★★★★☆', 'Vitesse': '2–5 tok/s', 'Idéal pour': 'Profondeur émotionnelle, voix de personnage' },
            { 'Modèle': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9,5 Go VRAM', 'Score chinois': '★★★★☆', 'Vitesse': '4–8 tok/s', 'Idéal pour': 'Équilibre qualité + vitesse' },
            { 'Modèle': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5,5 Go VRAM', 'Score chinois': '★★★☆☆', 'Vitesse': '8–12 tok/s', 'Idéal pour': 'RTX 3060, cartes 8 Go VRAM' },
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
            q: 'Qwen3-7B peut-il gérer de longues sessions de jeu de rôle en chinois ?',
            a: "Oui. Qwen3-7B Q4_K_M supporte 32K de contexte par défaut dans Ollama. Pour les longues sessions, augmentez la fenêtre de contexte dans les paramètres API de SillyTavern et utilisez Qwen3-14B ou supérieur pour une meilleure cohérence au-delà de 10K tokens.",
          },
          {
            q: 'Pourquoi le modèle produit-il du chinois et de l\'anglais mélangés ?',
            a: "Ajoutez 始终用简体中文回复，不要使用英文 au prompt système. Assurez-vous également d'utiliser un modèle entraîné en chinois (Qwen3, Yi, ChatGLM) plutôt que Llama ou Mistral, qui produisent de l'anglais par défaut.",
          },
          {
            q: 'Puis-je utiliser le chinois traditionnel au lieu du simplifié ?',
            a: "Oui. Remplacez 简体中文 par 繁體中文 dans le prompt système. Qwen3 gère bien le chinois traditionnel. Yi-34B supporte également le chinois traditionnel mais avec une cohérence légèrement inférieure au simplifié.",
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configuration SillyTavern pour le jeu de rôle en chinois 2026',
      description: 'Meilleurs modèles pour le jeu de rôle chinois dans SillyTavern : Qwen3-72B en tête, Yi-34B pour la profondeur des personnages. Encodage des cartes et bridge API Ollama.',
      url: 'https://www.promptquorum.com/fr/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          acceptedAnswer: { '@type': 'Answer', text: "Ajoutez 始终用简体中文回复，不要使用英文 au prompt système. Utilisez Qwen3, Yi ou ChatGLM plutôt que Llama ou Mistral." },
        },
      ],
    },
  },
  ja: {
    theme: 'Model Comparisons',
    title: 'SillyTavern 中国語ロールプレイ設定ガイド',
    seoTitle: 'SillyTavern 中国語ロールプレイ設定 2026：Qwen3・Yi-34B最適ガイド',
    metaDescription: 'SillyTavernで中国語ロールプレイに最適なローカルモデルを解説します。Qwen3-72Bが文章品質トップ、Yi-34Bはキャラクター感情表現に優れ、ChatGLM3-6Bは最速推論。キャラクターカードのUTF-8設定とOllama APIブリッジの接続方法も説明します。',
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
        answer: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B Q4_K_M: 5.5 GB VRAM', 'ChatGLM3-6B: 4.5 GB VRAM'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B Q4_K_M: 5,5 GB VRAM', 'ChatGLM3-6B: 4,5 GB VRAM'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: 'Qwen3-72B Q4_K_M est le meilleur modèle local.',
        bullets: ['Qwen3-72B Q4_K_M : 46 Go RAM', 'Yi-34B Q4_K_M : 21 Go RAM', 'Qwen3-7B Q4_K_M : 5,5 Go VRAM', 'ChatGLM3-6B : 4,5 Go VRAM'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが中国語ロールプレイに最適なローカルモデルです。ネイティブ中国語学習、豊富な語彙、128Kコンテキストを備えています。Yi-34Bは感情的なキャラクター表現に優れています。',
        bullets: [
          'Qwen3-72B Q4_K_M: RAM 46GB、最高の中国語文章品質、128Kコンテキスト',
          'Yi-34B Q4_K_M: RAM 21GB、優れたキャラクターボイスと感情表現',
          'Qwen3-7B Q4_K_M: VRAM 5.5GB、8〜12トークン/秒 — 8GB GPUに最適',
          'ChatGLM3-6B: VRAM 4.5GB、最速推論',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是最佳本地模型。',
        bullets: ['Qwen3-72B Q4_K_M：46 GB 内存', 'Yi-34B Q4_K_M：21 GB 内存', 'Qwen3-7B Q4_K_M：5.5 GB 显存', 'ChatGLM3-6B：4.5 GB 显存'],
        updatedDate: '2026-05',
      },
    },
    readTime: '5分で読める',
    intro: 'SillyTavernを中国語のローカルモデルで動かすには3つのことが必要です：中国語テキストでネイティブに学習されたモデル、キャラクターカードの正しいUTF-8エンコード、SillyTavernからOllamaまたはllama.cppへのAPIブリッジ。このガイドではVRAMレベル別の最適モデル、中国語でのキャラクターカード設定、接続設定を解説します。',
    leadAnswerBlock: 'Qwen3-72B Q4_K_Mが46GB RAMで中国語ロールプレイの最適ローカルモデルです。8GB VRAMにはQwen3-7Bを使用してください。キャラクターカードは常にUTF-8に設定し、SillyTavernをhttp://127.0.0.1:11434でOllamaに接続してください。',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_Mがローカルで最高の中国語ロールプレイ品質を提供します。8GB VRAMにはQwen3-7B（8〜12トークン/秒）が実用的な選択肢です。',
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
          'Qwen3-72B Q4_K_M：最高の中国語散文、RAM 46GB必要',
          'Yi-34B Q4_K_M：最高のキャラクター深度、RAM 21GB',
          'Qwen3-7B Q4_K_M：8GB VRAMに最適、8〜12トークン/秒',
          'SillyTavern → APIタイプ：OpenAI互換 → URL：http://127.0.0.1:11434/v1',
          'キャラクターカード：中国語テキストを直接貼り付け、UTF-8で保存',
          'システムプロンプト：始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'ロールプレイに使うQwenまたは中国語モデルの選び方',
        content: [
          '4つのモデルが主要なハードウェアレベルをカバーしています。Qwen3-72Bは文章品質でトップですが、46GBのユニファイドメモリを持つワークステーションまたはMac Studioが必要です。Yi-34Bはキャラクターの声と感情の深さを優先するユーザーに最適です。Qwen3-7Bは標準的なゲーミングGPUの実用的な選択肢です。',
        ],
        comparisonTable: {
          columns: ['モデル', 'VRAM / RAM', '中国語スコア', '速度', '最適な用途'],
          rows: [
            { 'モデル': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': 'RAM 46GB', '中国語スコア': '★★★★★', '速度': '1〜3トークン/秒', '最適な用途': '最高の散文、長い物語' },
            { 'モデル': 'Yi-34B Q4_K_M', 'VRAM / RAM': 'RAM 21GB', '中国語スコア': '★★★★☆', '速度': '2〜5トークン/秒', '最適な用途': '感情的深度、キャラクターの声' },
            { 'モデル': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': 'VRAM 9.5GB', '中国語スコア': '★★★★☆', '速度': '4〜8トークン/秒', '最適な用途': '品質と速度のバランス' },
            { 'モデル': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': 'VRAM 5.5GB', '中国語スコア': '★★★☆☆', '速度': '8〜12トークン/秒', '最適な用途': 'RTX 3060、8GB VRAMカード' },
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
            q: 'Qwen3-7Bは中国語の長いロールプレイセッションを処理できますか？',
            a: 'はい。Qwen3-7B Q4_K_MはOllamaでデフォルトで32Kコンテキストをサポートしています。長いセッションには、SillyTavernのAPI設定でコンテキストウィンドウを増やし、10K+トークン以上の一貫性向上のためQwen3-14B以上を使用してください。',
          },
          {
            q: 'なぜモデルが中国語と英語が混在した出力をするのですか？',
            a: 'システムプロンプトに言語指示が欠けています。始终用简体中文回复，不要使用英文をシステムプロンプトに追加してください。また、デフォルトで英語を出力するLlamaやMistralではなく、中国語学習モデル（Qwen3、Yi、ChatGLM）を使用していることを確認してください。',
          },
          {
            q: '繁体字中国語は使えますか？',
            a: 'はい。システムプロンプトで简体中文を繁體中文に置き換えてください。Qwen3は繁体字中国語を適切に処理します。Yi-34Bも繁体字中国語をサポートしていますが、簡体字よりも一貫性がやや低いです。',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern 中国語ロールプレイ設定ガイド 2026',
      description: 'SillyTavernで中国語ロールプレイに最適なモデル：Qwen3-72Bがトップ、Yi-34Bはキャラクター深度。キャラクターカードのエンコードとOllama APIブリッジ。',
      url: 'https://www.promptquorum.com/ja/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          acceptedAnswer: { '@type': 'Answer', text: '始终用简体中文回复，不要使用英文をシステムプロンプトに追加してください。Qwen3、Yi、またはChatGLMを使用していることも確認してください。' },
        },
      ],
    },
  },
  zh: {
    theme: 'Model Comparisons',
    title: 'SillyTavern 中文角色扮演配置指南',
    seoTitle: 'SillyTavern 中文角色扮演 2026：Qwen3、Yi-34B最优模型与配置完整指南',
    metaDescription: 'SillyTavern本地中文角色扮演完整配置指南：Qwen3-72B中文散文质量最佳，Yi-34B角色情感层次最丰富，ChatGLM3-6B速度最快（8 GB显存可运行）。角色卡UTF-8中文编码设置与Ollama API桥接步骤详解，助您搭建流畅的中文本地角色扮演环境。',
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
        answer: 'Qwen3-72B Q4_K_M is the best local model.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B Q4_K_M: 5.5 GB VRAM', 'ChatGLM3-6B: 4.5 GB VRAM'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B Q4_K_M: 5,5 GB VRAM', 'ChatGLM3-6B: 4,5 GB VRAM'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: 'Qwen3-72B Q4_K_M est le meilleur modèle local.',
        bullets: ['Qwen3-72B Q4_K_M : 46 Go RAM', 'Yi-34B Q4_K_M : 21 Go RAM', 'Qwen3-7B Q4_K_M : 5,5 Go VRAM', 'ChatGLM3-6B : 4,5 Go VRAM'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが最適です。',
        bullets: ['Qwen3-72B Q4_K_M: RAM 46GB', 'Yi-34B Q4_K_M: RAM 21GB', 'Qwen3-7B Q4_K_M: VRAM 5.5GB', 'ChatGLM3-6B: VRAM 4.5GB'],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是中文角色扮演的最佳本地模型——原生中文训练、词汇丰富、支持 128K 上下文。Yi-34B 擅长角色情感深度。8GB 显存推荐 Qwen3-7B，速度 8–12 token/秒。',
        bullets: [
          'Qwen3-72B Q4_K_M：46 GB 内存，最佳中文散文质量，128K 上下文——适合工作站或 Mac Studio',
          'Yi-34B Q4_K_M：21 GB 内存，出色的角色声音与情感层次',
          'Qwen3-7B Q4_K_M：5.5 GB 显存，8–12 token/秒——8GB 显卡首选',
          'ChatGLM3-6B：4.5 GB 显存，推理最快但角色一致性较弱',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 分钟阅读',
    intro: '在 SillyTavern 中使用中文本地模型需要三样东西：原生中文训练的模型、角色卡正确的 UTF-8 编码，以及从 SillyTavern 到 Ollama 或 llama.cpp 的 API 桥接。本指南涵盖各显存档次的最佳模型、中文角色卡设置，以及实际可用的连接配置。',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M 是中文角色扮演的最佳本地模型，需要 46 GB 内存。8GB 显存用 Qwen3-7B。角色卡始终设为 UTF-8，SillyTavern 通过 http://127.0.0.1:11434 连接 Ollama。',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M 在本地提供最佳中文角色扮演质量；8GB 显存用户选 Qwen3-7B（8–12 token/秒）。',
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
          'Qwen3-72B Q4_K_M：最佳中文散文，需要 46 GB 内存',
          'Yi-34B Q4_K_M：最佳角色深度，21 GB 内存',
          'Qwen3-7B Q4_K_M：8GB 显存首选，8–12 token/秒',
          'SillyTavern → API 类型：OpenAI 兼容 → URL：http://127.0.0.1:11434/v1',
          '角色卡：直接粘贴中文文本，保存为 UTF-8',
          '系统提示词：始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: '中文角色扮演选哪个 Qwen 或中文模型',
        content: [
          '四款模型覆盖主要硬件档次。Qwen3-72B 散文质量最高，但需要配备 46 GB 统一内存的工作站或 Mac Studio。Yi-34B 适合重视角色声音和情感层次的用户。Qwen3-7B 是标准游戏显卡的实用之选。',
        ],
        comparisonTable: {
          columns: ['模型', '显存 / 内存', '中文评分', '速度', '最适场景'],
          rows: [
            { '模型': 'Qwen3-72B Q4_K_M', '显存 / 内存': '46 GB 内存', '中文评分': '★★★★★', '速度': '1–3 token/秒', '最适场景': '最佳散文，长篇叙事' },
            { '模型': 'Yi-34B Q4_K_M', '显存 / 内存': '21 GB 内存', '中文评分': '★★★★☆', '速度': '2–5 token/秒', '最适场景': '情感深度，角色声音' },
            { '模型': 'Qwen3-14B Q4_K_M', '显存 / 内存': '9.5 GB 显存', '中文评分': '★★★★☆', '速度': '4–8 token/秒', '最适场景': '质量与速度的平衡' },
            { '模型': 'Qwen3-7B Q4_K_M', '显存 / 内存': '5.5 GB 显存', '中文评分': '★★★☆☆', '速度': '8–12 token/秒', '最适场景': 'RTX 3060，8GB 显存显卡' },
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
            q: 'Qwen3-7B 能处理长篇中文角色扮演吗？',
            a: '可以。Ollama 中 Qwen3-7B Q4_K_M 默认支持 32K 上下文。长篇对话可在 SillyTavern API 设置中增大上下文窗口，10K+ token 的一致性建议升级到 Qwen3-14B 或更高。',
          },
          {
            q: 'SillyTavern 支持中文角色名和描述吗？',
            a: '支持。SillyTavern 将所有角色数据存储为 UTF-8 JSON，姓名、描述、开场白、示例对话均可用中文书写。界面无需插件即可正确显示中文字符。',
          },
          {
            q: '为什么模型输出中英文混杂？',
            a: '系统提示词缺少语言指令。在系统提示词中添加：始终用简体中文回复，不要使用英文。同时确认使用的是中文训练模型（Qwen3、Yi、ChatGLM），而非 Llama 或 Mistral——后者默认输出英文。',
          },
          {
            q: '能用繁体中文吗？',
            a: '可以。将系统提示词中的 简体中文 替换为 繁體中文。Qwen3 对繁体中文支持良好。Yi-34B 也支持繁体中文，但一致性略低于简体。ChatGLM3 主要在简体中文上训练，不推荐用于繁体中文场景。',
          },
          {
            q: '在 Mac 上能用吗？',
            a: '可以。Apple Silicon 上的 Ollama 通过 Metal 后端运行 Qwen3-7B 和 14B。Qwen3-72B 需要至少 64 GB 统一内存（Mac Studio M2 Ultra/M3 Ultra 或 Mac Pro）。运行 `ollama pull qwen2.5:72b`，SillyTavern 连接方式相同。',
          },
          {
            q: '模型中文角色扮演效果怎么评估？',
            a: '重点看三点：(1) 是否坚持用中文回复而不夹杂英文；(2) 是否保持角色一致性，不出现 OOC（出戏）；(3) 用词是否符合设定语境（古风/现代/科幻）。Qwen3-72B 在这三点上综合表现最佳，Yi-34B 在情感表达上有优势。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[中英文提示词对比](/zh/prompt-bites/chinese-prompting-vs-english-prompting) — 用Qwen3本地部署进行中英文提示词效果对比实测。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern 中文角色扮演配置指南 2026',
      description: 'SillyTavern 中文角色扮演最佳本地模型：Qwen3-72B 首选，Yi-34B 角色深度突出。角色卡中文设置与 Ollama API 桥接。',
      url: 'https://www.promptquorum.com/zh/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          acceptedAnswer: { '@type': 'Answer', text: '在系统提示词中添加：始终用简体中文回复，不要使用英文。同时确认使用 Qwen3、Yi 或 ChatGLM，而非 Llama 或 Mistral。' },
        },
        {
          '@type': 'Question',
          name: 'SillyTavern 支持中文角色名和描述吗？',
          acceptedAnswer: { '@type': 'Answer', text: '支持。SillyTavern 将所有角色数据存储为 UTF-8 JSON，姓名、描述、开场白、示例对话均可用中文书写，无需插件。' },
        },
      ],
    },
  },

  pt: {
    theme: 'Model Comparisons',
    title: 'Configuração do SillyTavern para roleplay em chinês',
    seoTitle: 'SillyTavern roleplay chinês 2026: Qwen3 e Yi-34B',
    metaDescription: 'Melhores modelos locais para roleplay em chinês no SillyTavern 2026: Qwen3-72B, Yi-34B, ChatGLM. Configuração de cartões UTF-8 e ponte API com Ollama.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Usuários de língua chinesa configurando SillyTavern com LLMs locais para roleplay',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B Q4_K_M: 5.5 GB VRAM'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B: 5,5 GB VRAM'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: 'Qwen3-72B Q4_K_M est le meilleur modèle local.',
        bullets: ['Qwen3-72B Q4_K_M : 46 Go RAM', 'Yi-34B : 21 Go RAM', 'Qwen3-7B : 5,5 Go VRAM'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが最適なローカルモデルです。',
        bullets: ['Qwen3-72B Q4_K_M: RAM 46GB', 'Yi-34B Q4_K_M: RAM 21GB', 'Qwen3-7B: VRAM 5.5GB'],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是最佳本地模型。',
        bullets: ['Qwen3-72B Q4_K_M：46 GB 内存', 'Yi-34B Q4_K_M：21 GB 内存', 'Qwen3-7B：5.5 GB 显存'],
        updatedDate: '2026-05',
      },
      pt: {
        question: 'Qual é o melhor modelo para roleplay em chinês no SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M é o melhor modelo local para roleplay em chinês — treinamento nativo em chinês, vocabulário rico e contexto de 128K. Yi-34B se destaca em profundidade emocional dos personagens. Com 8 GB de VRAM, Qwen3-7B funciona a 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, melhor qualidade de prosa em chinês, contexto 128K',
          'Yi-34B Q4_K_M: 21 GB RAM, excelente voz de personagem e alcance emocional',
          'Qwen3-7B Q4_K_M: 5,5 GB VRAM, 8–12 tok/s — melhor para GPUs de 8 GB',
          'ChatGLM3-6B: 4,5 GB VRAM, inferência mais rápida mas menor consistência de personagem',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 min de leitura',
    intro: 'Executar SillyTavern com um modelo local em chinês requer três coisas: um modelo treinado nativamente em texto chinês, codificação UTF-8 correta nos seus cartões de personagem e uma ponte API do SillyTavern para Ollama ou llama.cpp. Este guia cobre os melhores modelos para cada nível de VRAM, configuração de cartões de personagem em chinês e os ajustes de conexão que realmente funcionam.',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M é o melhor modelo local para roleplay em chinês com 46 GB de RAM. Para 8 GB de VRAM, use Qwen3-7B. Configure sempre os cartões de personagem em UTF-8 e conecte o SillyTavern ao Ollama em http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M oferece a melhor qualidade de roleplay em chinês localmente; para 8 GB de VRAM, Qwen3-7B é a escolha prática a 8–12 tok/s.',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern é uma interface de chat para roleplay. Ollama executa o modelo de IA na sua máquina. Para fazer roleplay em chinês localmente: (1) baixe um modelo treinado em chinês via Ollama, (2) aponte o SillyTavern para a API do Ollama, (3) escreva os cartões de personagem em chinês com codificação UTF-8.',
      },
    ],
    toc: [
      { label: 'Comparativo de modelos por VRAM', anchor: 'model-comparison' },
      { label: 'Conectar SillyTavern ao Ollama', anchor: 'connection-setup' },
      { label: 'Cartões de personagem em chinês', anchor: 'character-cards' },
      { label: 'Ajustes de codificação', anchor: 'encoding-settings' },
      { label: 'Template de prompt para chinês', anchor: 'prompt-template' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        items: [
          'Qwen3-72B Q4_K_M: melhor prosa em chinês, precisa de 46 GB de RAM',
          'Yi-34B Q4_K_M: melhor profundidade de personagem, 21 GB de RAM',
          'Qwen3-7B Q4_K_M: melhor para 8 GB de VRAM, 8–12 tok/s',
          'SillyTavern → Tipo de API: compatível com OpenAI → URL: http://127.0.0.1:11434/v1',
          'Cartões de personagem: cole o texto em chinês diretamente, salve como UTF-8',
          'System prompt: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Qual modelo Qwen ou chinês usar para roleplay',
        content: [
          'Quatro modelos cobrem os principais níveis de hardware. Qwen3-72B lidera em qualidade de prosa mas requer uma workstation ou Mac Studio com 46 GB de memória unificada. Yi-34B é a segunda opção para usuários que priorizam a voz e a profundidade emocional dos personagens. Qwen3-7B é a escolha prática para qualquer GPU de gaming padrão.',
        ],
        comparisonTable: {
          columns: ['Modelo', 'VRAM / RAM', 'Pontuação chinês', 'Velocidade', 'Melhor para'],
          rows: [
            { 'Modelo': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'Pontuação chinês': '★★★★★', 'Velocidade': '1–3 tok/s', 'Melhor para': 'Melhor prosa, narrativas longas' },
            { 'Modelo': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'Pontuação chinês': '★★★★☆', 'Velocidade': '2–5 tok/s', 'Melhor para': 'Profundidade emocional, voz de personagem' },
            { 'Modelo': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9,5 GB VRAM', 'Pontuação chinês': '★★★★☆', 'Velocidade': '4–8 tok/s', 'Melhor para': 'Equilíbrio qualidade + velocidade' },
            { 'Modelo': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5,5 GB VRAM', 'Pontuação chinês': '★★★☆☆', 'Velocidade': '8–12 tok/s', 'Melhor para': 'RTX 3060, GPUs de 8 GB VRAM' },
            { 'Modelo': 'ChatGLM3-6B', 'VRAM / RAM': '4,5 GB VRAM', 'Pontuação chinês': '★★★☆☆', 'Velocidade': '12–18 tok/s', 'Melhor para': 'Mais rápido, contexto limitado (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'Conectar SillyTavern ao Ollama em 4 passos',
        content: [
          'SillyTavern se comunica com Ollama por meio de um endpoint de API compatível com OpenAI. Nenhum plugin é necessário — Ollama o expõe nativamente na porta 11434.',
        ],
        numberedItems: [
          'Baixe o modelo: execute `ollama pull qwen2.5:7b` (ou `qwen2.5:72b`, `yi:34b`) no seu terminal',
          'Abra SillyTavern → Conexões API → selecione **Compatível com OpenAI**',
          'Defina a URL de API personalizada como: `http://127.0.0.1:11434/v1`',
          'Defina a chave de API como qualquer string não vazia (ex.: `ollama`) — Ollama ignora a chave',
          'Clique em Conectar → selecione seu modelo no menu suspenso',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Escrever cartões de personagem em chinês',
        content: [
          'Os cartões de personagem do SillyTavern (descrições de persona, mensagens de boas-vindas e diálogos de exemplo) suportam completamente o texto em chinês. Escreva diretamente em chinês simplificado — não são necessárias etapas especiais de codificação desde que o locale do seu sistema esteja em UTF-8.',
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
        title: 'Ajustes de codificação para evitar caracteres corrompidos',
        content: [
          'Chinês corrompido (乱码) quase sempre é causado por uma destas três causas: instrução de idioma ausente no system prompt, modelo não treinado em chinês ou terminal/editor não configurado em UTF-8.',
        ],
        items: [
          '**Configuração do SillyTavern:** Nenhum ajuste especial necessário — o aplicativo usa UTF-8 internamente. Ao exportar/importar cartões de personagem como JSON, verifique se seu editor salva em UTF-8 (não ANSI ou GB2312).',
          '**Terminal do Windows:** Execute `chcp 65001` antes de iniciar o Ollama para forçar a página de código UTF-8.',
          '**Arquivo de modelo Ollama:** Se usar um Modelfile personalizado, defina `PARAMETER stop ""` — pontuação chinesa como 。！？ pode acionar tokens de parada prematuros em alguns modelos base.',
          '**Backend llama.cpp:** Adicione o flag `--log-disable` — a saída de log padrão pode corromper Unicode em alguns terminais do Windows.',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: 'Template de system prompt para roleplay em chinês',
        content: [
          'Coloque isso no campo de system prompt do SillyTavern (API → Template de instrução). Ajuste o nome do personagem e o tom conforme necessário.',
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
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qwen3-7B consegue lidar com sessões longas de roleplay em chinês?',
            a: 'Sim. Qwen3-7B Q4_K_M suporta contexto de 32K por padrão no Ollama. Para sessões longas com lore extenso ou histórico de diálogo, aumente a janela de contexto nas configurações de API do SillyTavern e use Qwen3-14B ou superior para melhor coerência com 10K+ tokens.',
          },
          {
            q: 'SillyTavern suporta nomes e descrições de personagens em chinês?',
            a: 'Sim. SillyTavern armazena todos os dados de personagem como JSON UTF-8. Você pode escrever nomes, descrições, mensagens de boas-vindas e diálogos de exemplo inteiramente em chinês. A interface renderiza os caracteres chineses corretamente sem nenhum plugin.',
          },
          {
            q: 'Yi-34B é melhor que Qwen3-14B para roleplay em chinês?',
            a: 'Yi-34B produz respostas de personagem mais expressivas e emocionalmente variadas, especialmente para cenas complexas ou literárias. Qwen3-14B é mais rápido (4–8 tok/s vs 2–5 tok/s) e requer menos RAM. Para imersão pura no roleplay, Yi-34B vence; para velocidade e menores requisitos de hardware, Qwen3-14B é a melhor escolha.',
          },
          {
            q: 'Por que o modelo está produzindo chinês e inglês misturados?',
            a: 'Falta uma instrução de idioma no system prompt. Adicione 始终用简体中文回复，不要使用英文 ao system prompt no template de instrução do SillyTavern. Certifique-se também de usar um modelo treinado em chinês (Qwen3, Yi, ChatGLM) em vez de Llama ou Mistral, que produzem inglês por padrão.',
          },
          {
            q: 'Posso usar chinês tradicional em vez de simplificado?',
            a: 'Sim. Substitua 简体中文 por 繁體中文 no system prompt. Qwen3 gerencia bem o chinês tradicional. Yi-34B também suporta chinês tradicional, mas com consistência ligeiramente inferior ao simplificado. ChatGLM3 foi treinado principalmente em chinês simplificado e não é recomendado para uso em chinês tradicional.',
          },
          {
            q: 'Funciona no Mac?',
            a: 'Sim. Ollama no Apple Silicon executa Qwen3-7B e 14B via Metal (backend MLX). Para Qwen3-72B, você precisa de pelo menos 64 GB de memória unificada (Mac Studio M2 Ultra ou M3 Ultra, ou Mac Pro). Execute `ollama pull qwen2.5:72b` e conecte o SillyTavern da mesma forma.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configuração do SillyTavern para roleplay em chinês 2026',
      description: 'Melhores modelos para roleplay em chinês no SillyTavern: Qwen3-72B lidera, Yi-34B para profundidade de personagem, ChatGLM para velocidade. Codificação de cartões e ponte API para Ollama.',
      url: 'https://www.promptquorum.com/pt/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: 'Modelo de linguagem em chinês' },
        { '@type': 'Thing', name: 'Roleplay com LLM local' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qwen3-7B consegue lidar com sessões longas de roleplay em chinês?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sim. Qwen3-7B Q4_K_M suporta contexto de 32K por padrão no Ollama. Para sessões longas, aumente a janela de contexto e use Qwen3-14B ou superior.' },
        },
        {
          '@type': 'Question',
          name: 'Por que o modelo está produzindo chinês e inglês misturados?',
          acceptedAnswer: { '@type': 'Answer', text: 'Adicione 始终用简体中文回复，不要使用英文 ao system prompt. Use Qwen3, Yi ou ChatGLM — Llama e Mistral produzem inglês por padrão.' },
        },
      ],
    },
  },
  es: {
    theme: 'Model Comparisons',
    title: 'Configuración de SillyTavern para roleplay en chino',
    seoTitle: 'SillyTavern roleplay chino 2026: Qwen3 y Yi-34B',
    metaDescription: 'Mejores modelos locales para roleplay en chino en SillyTavern 2026: Qwen3-72B, Yi-34B, ChatGLM. Configuración de tarjetas UTF-8 y puente API con Ollama.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de habla china que configuran SillyTavern con LLMs locales para roleplay',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best model for Chinese roleplay in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M is the best local model for Chinese roleplay.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B Q4_K_M: 5.5 GB VRAM'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Bestes Modell für chinesisches Rollenspiel in SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M ist das beste lokale Modell.',
        bullets: ['Qwen3-72B Q4_K_M: 46 GB RAM', 'Yi-34B Q4_K_M: 21 GB RAM', 'Qwen3-7B: 5,5 GB VRAM'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleur modèle pour le jeu de rôle en chinois dans SillyTavern ?',
        answer: 'Qwen3-72B Q4_K_M est le meilleur modèle local.',
        bullets: ['Qwen3-72B Q4_K_M : 46 Go RAM', 'Yi-34B : 21 Go RAM', 'Qwen3-7B : 5,5 Go VRAM'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'SillyTavernで中国語ロールプレイに最適なモデルは？',
        answer: 'Qwen3-72B Q4_K_Mが最適なローカルモデルです。',
        bullets: ['Qwen3-72B Q4_K_M: RAM 46GB', 'Yi-34B Q4_K_M: RAM 21GB', 'Qwen3-7B: VRAM 5.5GB'],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'SillyTavern 中文角色扮演最佳模型？',
        answer: 'Qwen3-72B Q4_K_M 是最佳本地模型。',
        bullets: ['Qwen3-72B Q4_K_M：46 GB 内存', 'Yi-34B Q4_K_M：21 GB 内存', 'Qwen3-7B：5.5 GB 显存'],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es el mejor modelo para roleplay en chino en SillyTavern?',
        answer: 'Qwen3-72B Q4_K_M es el mejor modelo local para roleplay en chino — entrenamiento nativo en chino, vocabulario rico y 128K de contexto. Yi-34B destaca en profundidad emocional de los personajes. Con 8 GB VRAM, Qwen3-7B funciona a 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, mejor calidad de prosa en chino, contexto 128K',
          'Yi-34B Q4_K_M: 21 GB RAM, excelente voz de personaje y rango emocional',
          'Qwen3-7B Q4_K_M: 5.5 GB VRAM, 8–12 tok/s — mejor para GPUs de 8 GB',
          'ChatGLM3-6B: 4.5 GB VRAM, inferencia más rápida pero menor consistencia de personaje',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5 min de lectura',
    intro: 'Ejecutar SillyTavern con un modelo local en chino requiere tres cosas: un modelo entrenado nativamente con texto en chino, la codificación UTF-8 correcta en tus tarjetas de personaje, y un puente API de SillyTavern a Ollama o llama.cpp. Esta guía cubre los mejores modelos por nivel de VRAM, la configuración de tarjetas de personaje en chino y los ajustes de conexión que realmente funcionan.',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M es el mejor modelo local para roleplay en chino con 46 GB RAM. Para 8 GB VRAM, usa Qwen3-7B. Configura siempre las tarjetas de personaje en UTF-8 y conecta SillyTavern a Ollama en http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M ofrece la mejor calidad de roleplay en chino localmente; para 8 GB VRAM, Qwen3-7B es la opción práctica a 8–12 tok/s.',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern es una interfaz de chat para roleplay. Ollama ejecuta el modelo de IA en tu máquina. Para hacer roleplay en chino localmente: (1) descarga un modelo entrenado en chino a través de Ollama, (2) apunta SillyTavern a la API de Ollama, (3) escribe las tarjetas de personaje en chino con codificación UTF-8.',
      },
    ],
    toc: [
      { label: 'Comparativa de modelos por VRAM', anchor: 'model-comparison' },
      { label: 'Conectar SillyTavern a Ollama', anchor: 'connection-setup' },
      { label: 'Tarjetas de personaje en chino', anchor: 'character-cards' },
      { label: 'Ajustes de codificación', anchor: 'encoding-settings' },
      { label: 'Plantilla de prompt para chino', anchor: 'prompt-template' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        items: [
          'Qwen3-72B Q4_K_M: mejor prosa en chino, necesita 46 GB RAM',
          'Yi-34B Q4_K_M: mejor profundidad de personaje, 21 GB RAM',
          'Qwen3-7B Q4_K_M: mejor para 8 GB VRAM, 8–12 tok/s',
          'SillyTavern → Tipo API: compatible con OpenAI → URL: http://127.0.0.1:11434/v1',
          'Tarjetas de personaje: pega el texto en chino directamente, guarda como UTF-8',
          'System prompt: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Qué modelo Qwen o chino usar para roleplay',
        content: [
          'Cuatro modelos cubren los niveles de hardware principales. Qwen3-72B lidera en calidad de prosa pero requiere una workstation o Mac Studio con 46 GB de memoria unificada. Yi-34B es la segunda opción para usuarios que priorizan la voz y la profundidad emocional de los personajes. Qwen3-7B es la opción práctica para cualquier GPU de gaming estándar.',
        ],
        comparisonTable: {
          columns: ['Modelo', 'VRAM / RAM', 'Puntuación chino', 'Velocidad', 'Mejor para'],
          rows: [
            { 'Modelo': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'Puntuación chino': '★★★★★', 'Velocidad': '1–3 tok/s', 'Mejor para': 'Mejor prosa, narraciones largas' },
            { 'Modelo': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'Puntuación chino': '★★★★☆', 'Velocidad': '2–5 tok/s', 'Mejor para': 'Profundidad emocional, voz de personaje' },
            { 'Modelo': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9.5 GB VRAM', 'Puntuación chino': '★★★★☆', 'Velocidad': '4–8 tok/s', 'Mejor para': 'Equilibrio calidad + velocidad' },
            { 'Modelo': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5.5 GB VRAM', 'Puntuación chino': '★★★☆☆', 'Velocidad': '8–12 tok/s', 'Mejor para': 'RTX 3060, GPUs de 8 GB VRAM' },
            { 'Modelo': 'ChatGLM3-6B', 'VRAM / RAM': '4.5 GB VRAM', 'Puntuación chino': '★★★☆☆', 'Velocidad': '12–18 tok/s', 'Mejor para': 'Más rápido, contexto limitado (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'Conectar SillyTavern a Ollama en 4 pasos',
        content: [
          'SillyTavern se comunica con Ollama a través de un endpoint de API compatible con OpenAI. No se necesita ningún plugin — Ollama lo expone nativamente en el puerto 11434.',
        ],
        numberedItems: [
          'Descarga el modelo: ejecuta `ollama pull qwen2.5:7b` (o `qwen2.5:72b`, `yi:34b`) en tu terminal',
          'Abre SillyTavern → Conexiones API → selecciona **Compatible con OpenAI**',
          'Establece la URL de API personalizada en: `http://127.0.0.1:11434/v1`',
          'Establece la API Key en cualquier cadena no vacía (p.ej. `ollama`) — Ollama ignora la clave',
          'Haz clic en Conectar → selecciona tu modelo en el menú desplegable',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'Escribir tarjetas de personaje en chino',
        content: [
          'Las tarjetas de personaje de SillyTavern (descripciones de persona, mensajes de bienvenida y diálogos de ejemplo) admiten completamente el texto en chino. Escribe directamente en chino simplificado — no se necesitan pasos de codificación especiales si la configuración regional de tu sistema es UTF-8.',
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
        title: 'Ajustes de codificación para evitar caracteres corruptos',
        content: [
          'El chino corrupto (乱码) casi siempre se debe a una de estas tres causas: instrucción de idioma ausente en el system prompt, modelo no entrenado en chino, o terminal/editor no configurado en UTF-8.',
        ],
        items: [
          '**Configuración de SillyTavern:** No se necesita ningún ajuste especial — la app usa UTF-8 internamente. Al exportar/importar tarjetas de personaje como JSON, verifica que tu editor guarde en UTF-8 (no ANSI ni GB2312).',
          '**Terminal de Windows:** Ejecuta `chcp 65001` antes de iniciar Ollama para forzar la página de códigos UTF-8.',
          '**Archivo de modelo Ollama:** Si usas un Modelfile personalizado, establece `PARAMETER stop ""` — la puntuación china como 。！？ puede activar tokens de parada prematuros en algunos modelos base.',
          '**Backend llama.cpp:** Añade el flag `--log-disable` — la salida de log por defecto puede corromper Unicode en algunos terminales de Windows.',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: 'Plantilla de system prompt para roleplay en chino',
        content: [
          'Coloca esto en el campo de system prompt de SillyTavern (API → Plantilla de instrucción). Ajusta el nombre del personaje y el tono según sea necesario.',
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
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qwen3-7B puede manejar sesiones largas de roleplay en chino?',
            a: 'Sí. Qwen3-7B Q4_K_M admite contexto de 32K por defecto en Ollama. Para sesiones largas con lore extenso o historial de diálogo, aumenta la ventana de contexto en los ajustes de API de SillyTavern y usa Qwen3-14B o superior para mejor coherencia con 10K+ tokens.',
          },
          {
            q: '¿SillyTavern admite nombres y descripciones de personajes en chino?',
            a: 'Sí. SillyTavern almacena todos los datos de personajes como JSON UTF-8. Puedes escribir nombres, descripciones, mensajes de bienvenida y diálogos de ejemplo completamente en chino. La interfaz muestra los caracteres chinos correctamente sin ningún plugin.',
          },
          {
            q: '¿Es Yi-34B mejor que Qwen3-14B para roleplay en chino?',
            a: 'Yi-34B produce respuestas de personaje más expresivas y emocionalmente variadas, especialmente para escenas complejas o literarias. Qwen3-14B es más rápido (4–8 tok/s vs 2–5 tok/s) y requiere menos RAM. Para inmersión pura en el roleplay, gana Yi-34B; para velocidad y menores requisitos de hardware, Qwen3-14B es la mejor opción.',
          },
          {
            q: '¿Por qué el modelo produce chino y inglés mezclados?',
            a: 'Falta una instrucción de idioma en el system prompt. Añade 始终用简体中文回复，不要使用英文 al system prompt en la plantilla de instrucción de SillyTavern. Asegúrate también de usar un modelo entrenado en chino (Qwen3, Yi, ChatGLM) en lugar de Llama o Mistral, que producen inglés por defecto.',
          },
          {
            q: '¿Puedo usar chino tradicional en lugar de simplificado?',
            a: 'Sí. Reemplaza 简体中文 por 繁體中文 en el system prompt. Qwen3 maneja bien el chino tradicional. Yi-34B también admite chino tradicional pero con una consistencia ligeramente inferior al simplificado. ChatGLM3 fue entrenado principalmente con chino simplificado y no se recomienda para uso en chino tradicional.',
          },
          {
            q: '¿Funciona en Mac?',
            a: 'Sí. Ollama en Apple Silicon ejecuta Qwen3-7B y 14B a través de Metal (backend MLX). Para Qwen3-72B, necesitas al menos 64 GB de memoria unificada (Mac Studio M2 Ultra o M3 Ultra, o Mac Pro). Ejecuta `ollama pull qwen2.5:72b` y conecta SillyTavern de la misma manera.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configuración de SillyTavern para roleplay en chino 2026',
      description: 'Mejores modelos para roleplay en chino en SillyTavern: Qwen3-72B lidera, Yi-34B para profundidad de personaje, ChatGLM para velocidad. Codificación de tarjetas y puente API a Ollama.',
      url: 'https://www.promptquorum.com/es/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: 'Modelo de lenguaje en chino' },
        { '@type': 'Thing', name: 'Roleplay con LLM local' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qwen3-7B puede manejar sesiones largas de roleplay en chino?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Qwen3-7B Q4_K_M admite contexto de 32K por defecto en Ollama. Para sesiones largas, aumenta la ventana de contexto y usa Qwen3-14B o superior.' },
        },
        {
          '@type': 'Question',
          name: '¿Por qué el modelo produce chino y inglés mezclados?',
          acceptedAnswer: { '@type': 'Answer', text: 'Añade 始终用简体中文回复，不要使用英文 al system prompt. Usa Qwen3, Yi o ChatGLM — Llama y Mistral producen inglés por defecto.' },
        },
      ],
    },
  },
  ar: {
    theme: 'Model Comparisons',
    title: 'إعداد ⁨SillyTavern⁩ للعب الأدوار باللغة الصينية',
    seoTitle: '⁨SillyTavern⁩ لعب أدوار صيني ⁨2026⁩: ⁨Qwen3-72B⁩ و ⁨Yi-34B⁩',
    metaDescription: '⁨Qwen3-72B Q4⁩_⁨K⁩_⁨M⁩ يحتاج ⁨46 GB RAM⁩ وهو أفضل نموذج للعب الأدوار الصيني في ⁨SillyTavern. Yi-34B⁩ لـ ⁨21 GB RAM⁩، ⁨Qwen3-7B⁩ لـ ⁨8 GB VRAM⁩ عبر ⁨Ollama⁩.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون العرب الذين يضبطون SillyTavern مع نماذج لغة محلية للعب الأدوار باللغة الصينية',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج للعب الأدوار باللغة الصينية في SillyTavern؟',
        answer: 'Qwen3-72B Q4_K_M هو أفضل نموذج محلي للعب الأدوار باللغة الصينية — تدريب أصلي على الصينية ومفردات غنية وسياق 128K. يتميز Yi-34B في العمق العاطفي للشخصيات. مع 8 GB VRAM، يعمل Qwen3-7B بسرعة 8–12 tok/s.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM، أفضل جودة نثر صيني، سياق 128K',
          'Yi-34B Q4_K_M: 21 GB RAM، صوت شخصية ممتاز ونطاق عاطفي واسع',
          'Qwen3-7B Q4_K_M: 5.5 GB VRAM، 8–12 tok/s — الأفضل لـ GPU بـ 8 GB',
          'ChatGLM3-6B: 4.5 GB VRAM، استنتاج أسرع لكن اتساق شخصية أقل',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: 'قراءة 5 دقائق',
    intro: 'تشغيل SillyTavern مع نموذج محلي باللغة الصينية يتطلب ثلاثة أشياء: نموذج مُدرَّب أصليًا على النص الصيني، والترميز الصحيح UTF-8 في بطاقات شخصيتك، وجسر API من SillyTavern إلى Ollama أو llama.cpp. يغطي هذا الدليل أفضل النماذج حسب مستوى VRAM وإعداد بطاقات الشخصية الصينية وإعدادات الاتصال التي تعمل فعليًا.',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M هو أفضل نموذج محلي للعب الأدوار باللغة الصينية بـ 46 GB RAM. لـ 8 GB VRAM استخدم Qwen3-7B. اضبط بطاقات الشخصية دائمًا على UTF-8 وصل SillyTavern بـ Ollama على http://127.0.0.1:11434.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'يقدم Qwen3-72B Q4_K_M أفضل جودة لعب أدوار صيني محليًا؛ لـ 8 GB VRAM، Qwen3-7B هو الخيار العملي بسرعة 8–12 tok/s.',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern واجهة دردشة للعب الأدوار. Ollama يشغّل نموذج الذكاء الاصطناعي على جهازك. للعب الأدوار باللغة الصينية محليًا: (1) حمّل نموذجًا مُدرَّبًا على الصينية عبر Ollama، (2) وجّه SillyTavern إلى واجهة Ollama البرمجية، (3) اكتب بطاقات الشخصية بالصينية بترميز UTF-8.',
      },
    ],
    toc: [
      { label: 'مقارنة النماذج حسب VRAM', anchor: 'model-comparison' },
      { label: 'ربط SillyTavern بـ Ollama', anchor: 'connection-setup' },
      { label: 'بطاقات الشخصية بالصينية', anchor: 'character-cards' },
      { label: 'إعدادات الترميز', anchor: 'encoding-settings' },
      { label: 'قالب الموجّه للصينية', anchor: 'prompt-template' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'Qwen3-72B Q4_K_M: أفضل نثر صيني، يحتاج 46 GB RAM',
          'Yi-34B Q4_K_M: أفضل عمق شخصية، 21 GB RAM',
          'Qwen3-7B Q4_K_M: الأفضل لـ 8 GB VRAM، 8–12 tok/s',
          'SillyTavern ← نوع API: متوافق مع OpenAI ← URL: http://127.0.0.1:11434/v1',
          'بطاقات الشخصية: الصق النص الصيني مباشرةً، احفظ بـ UTF-8',
          'موجّه النظام: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'أي نموذج Qwen أو صيني تستخدم للعب الأدوار',
        content: [
          'يغطي أربعة نماذج مستويات الأجهزة الرئيسية. يتصدر Qwen3-72B في جودة النثر لكنه يتطلب محطة عمل أو Mac Studio بـ 46 GB ذاكرة موحدة. Yi-34B هو الخيار الثاني للمستخدمين الذين يُعطون الأولوية لصوت الشخصية وعمقها العاطفي. Qwen3-7B هو الخيار العملي لأي بطاقة GPU للألعاب.',
        ],
        comparisonTable: {
          columns: ['النموذج', 'VRAM / RAM', 'درجة الصينية', 'السرعة', 'الأفضل لـ'],
          rows: [
            { 'النموذج': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', 'درجة الصينية': '★★★★★', 'السرعة': '1–3 tok/s', 'الأفضل لـ': 'أفضل نثر، روايات طويلة' },
            { 'النموذج': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', 'درجة الصينية': '★★★★☆', 'السرعة': '2–5 tok/s', 'الأفضل لـ': 'العمق العاطفي، صوت الشخصية' },
            { 'النموذج': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9.5 GB VRAM', 'درجة الصينية': '★★★★☆', 'السرعة': '4–8 tok/s', 'الأفضل لـ': 'توازن جودة + سرعة' },
            { 'النموذج': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5.5 GB VRAM', 'درجة الصينية': '★★★☆☆', 'السرعة': '8–12 tok/s', 'الأفضل لـ': 'RTX 3060، GPU بـ 8 GB VRAM' },
            { 'النموذج': 'ChatGLM3-6B', 'VRAM / RAM': '4.5 GB VRAM', 'درجة الصينية': '★★★☆☆', 'السرعة': '12–18 tok/s', 'الأفضل لـ': 'أسرع، سياق محدود (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: 'ربط SillyTavern بـ Ollama في 4 خطوات',
        content: [
          'يتواصل SillyTavern مع Ollama عبر نقطة نهاية API متوافقة مع OpenAI. لا يلزم أي مكوّن إضافي — Ollama يُظهرها أصليًا على المنفذ 11434.',
        ],
        numberedItems: [
          'حمّل النموذج: نفّذ `ollama pull qwen2.5:7b` (أو `qwen2.5:72b` أو `yi:34b`) في طرفيتك',
          'افتح SillyTavern ← اتصالات API ← اختر **متوافق مع OpenAI**',
          'اضبط عنوان URL المخصص للـ API على: `http://127.0.0.1:11434/v1`',
          'اضبط مفتاح API على أي سلسلة غير فارغة (مثلاً `ollama`) — Ollama يتجاهل المفتاح',
          'انقر على اتصال ← اختر نموذجك من القائمة المنسدلة',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: 'كتابة بطاقات الشخصية بالصينية',
        content: [
          'تدعم بطاقات شخصيات SillyTavern (وصف الشخص ورسائل الترحيب وحوارات الأمثلة) النص الصيني بالكامل. اكتب بالصينية المبسطة مباشرةً — لا تلزم خطوات ترميز خاصة إذا كانت إعدادات منطقتك بـ UTF-8.',
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
        title: 'إعدادات الترميز لتجنب الأحرف التالفة',
        content: [
          'الصينية التالفة (乱码) تعود دائمًا تقريبًا إلى ثلاثة أسباب: غياب تعليمة اللغة في موجّه النظام، أو نموذج غير مُدرَّب على الصينية، أو طرفية/محرر غير مضبوط على UTF-8.',
        ],
        items: [
          '**إعداد SillyTavern:** لا يلزم ضبط خاص — التطبيق يستخدم UTF-8 داخليًا. عند تصدير/استيراد بطاقات الشخصية كـ JSON، تأكد من أن محررك يحفظ بـ UTF-8 (وليس ANSI أو GB2312).',
          '**طرفية Windows:** نفّذ `chcp 65001` قبل تشغيل Ollama لفرض صفحة كود UTF-8.',
          '**ملف نموذج Ollama:** إذا استخدمت Modelfile مخصصًا، اضبط `PARAMETER stop ""` — علامات الترقيم الصينية كـ 。！？ قد تُشغّل رموز توقف مبكرة في بعض النماذج الأساسية.',
          '**واجهة llama.cpp الخلفية:** أضف علامة `--log-disable` — قد يُفسد مخرج السجل الافتراضي Unicode في بعض طرفيات Windows.',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: 'قالب موجّه النظام للعب الأدوار بالصينية',
        content: [
          'ضع هذا في حقل موجّه النظام في SillyTavern (API ← قالب التعليمات). اضبط اسم الشخصية والنبرة حسب الحاجة.',
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
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يستطيع Qwen3-7B التعامل مع جلسات لعب أدوار طويلة باللغة الصينية؟',
            a: 'نعم. يدعم Qwen3-7B Q4_K_M سياقًا بـ 32K افتراضيًا في Ollama. للجلسات الطويلة التي تحتوي على لور موسّع أو سجل حوار طويل، وسّع نافذة السياق في إعدادات API في SillyTavern واستخدم Qwen3-14B أو أعلى لاتساق أفضل مع 10K+ رمز.',
          },
          {
            q: 'هل يدعم SillyTavern أسماء ووصف الشخصيات بالصينية؟',
            a: 'نعم. يخزّن SillyTavern جميع بيانات الشخصيات كـ JSON بترميز UTF-8. يمكنك كتابة الأسماء والأوصاف ورسائل الترحيب وحوارات الأمثلة بالصينية بالكامل. تعرض الواجهة الحروف الصينية بشكل صحيح دون أي مكوّن إضافي.',
          },
          {
            q: 'هل Yi-34B أفضل من Qwen3-14B للعب الأدوار بالصينية؟',
            a: 'يُنتج Yi-34B استجابات شخصية أكثر تعبيرًا وتنوعًا عاطفيًا، خاصةً للمشاهد المعقدة أو الأدبية. Qwen3-14B أسرع (4–8 tok/s مقابل 2–5 tok/s) ويتطلب ذاكرة RAM أقل. للانغماس الكامل في اللعب، يفوز Yi-34B؛ للسرعة ومتطلبات الأجهزة الأقل، Qwen3-14B هو الخيار الأفضل.',
          },
          {
            q: 'لماذا ينتج النموذج خليطًا من الصينية والإنجليزية؟',
            a: 'السبب غياب تعليمة اللغة في موجّه النظام. أضف 始终用简体中文回复，不要使用英文 إلى موجّه النظام في قالب التعليمات في SillyTavern. تأكد أيضًا من استخدام نموذج مُدرَّب على الصينية (Qwen3 أو Yi أو ChatGLM) بدلًا من Llama أو Mistral اللذان ينتجان الإنجليزية افتراضيًا.',
          },
          {
            q: 'هل يمكنني استخدام الصينية التقليدية بدلًا من المبسطة؟',
            a: 'نعم. استبدل 简体中文 بـ 繁體中文 في موجّه النظام. يتعامل Qwen3 مع الصينية التقليدية بشكل جيد. يدعم Yi-34B أيضًا الصينية التقليدية لكن باتساق أقل قليلًا من المبسطة. دُرِّب ChatGLM3 أساسًا على الصينية المبسطة ولا يُنصح به للاستخدام بالصينية التقليدية.',
          },
          {
            q: 'هل يعمل على Mac؟',
            a: 'نعم. Ollama على Apple Silicon يشغّل Qwen3-7B و 14B عبر Metal (واجهة MLX الخلفية). لـ Qwen3-72B تحتاج على الأقل 64 GB ذاكرة موحدة (Mac Studio M2 Ultra أو M3 Ultra أو Mac Pro). نفّذ `ollama pull qwen2.5:72b` وصل SillyTavern بنفس الطريقة.',
          },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'إعداد SillyTavern للعب الأدوار باللغة الصينية 2026',
      description: 'أفضل النماذج للعب الأدوار بالصينية في SillyTavern: Qwen3-72B في المقدمة، Yi-34B لعمق الشخصية، ChatGLM للسرعة. ترميز البطاقات وجسر API إلى Ollama.',
      url: 'https://www.promptquorum.com/ar/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: 'نموذج اللغة الصيني' },
        { '@type': 'Thing', name: 'لعب الأدوار مع نموذج اللغة المحلي' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل يستطيع Qwen3-7B التعامل مع جلسات لعب أدوار طويلة باللغة الصينية؟',
          acceptedAnswer: { '@type': 'Answer', text: 'نعم. Qwen3-7B Q4_K_M يدعم سياق 32K افتراضيًا في Ollama. للجلسات الطويلة، وسّع نافذة السياق واستخدم Qwen3-14B أو أعلى.' },
        },
        {
          '@type': 'Question',
          name: 'لماذا ينتج النموذج خليطًا من الصينية والإنجليزية؟',
          acceptedAnswer: { '@type': 'Answer', text: 'أضف 始终用简体中文回复，不要使用英文 إلى موجّه النظام. استخدم Qwen3 أو Yi أو ChatGLM — Llama و Mistral ينتجان الإنجليزية افتراضيًا.' },
        },
      ],
    },
  },
  ko: {
    theme: 'Model Comparisons',
    title: 'SillyTavern 중국어 롤플레이 설정 가이드',
    seoTitle: 'SillyTavern 중국어 롤플레이 2026: Qwen3 및 Yi-34B',
    metaDescription: 'SillyTavern에서 중국어 롤플레이를 위한 최고의 로컬 모델 2026: Qwen3-72B, Yi-34B, ChatGLM. UTF-8 캐릭터 카드 설정 및 Ollama API 브릿지 구성법.',
    publishDate: '2026-05-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'SillyTavern과 로컬 LLM으로 중국어 롤플레이를 설정하는 한국어 사용자',
    parentArticle: '/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay',
    siblingBites: ['sillytavern-vs-agnai-vs-risuai-roleplay', 'best-local-llm-creative-writing-2026'],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: 'SillyTavern에서 중국어 롤플레이에 가장 적합한 모델은 무엇입니까?',
        answer: 'Qwen3-72B Q4_K_M은 중국어 롤플레이를 위한 최고의 로컬 모델입니다 — 중국어 네이티브 학습, 풍부한 어휘, 128K 컨텍스트를 제공합니다. Yi-34B는 캐릭터의 감정적 깊이에 탁월합니다. 8 GB VRAM에서는 Qwen3-7B가 8~12 tok/s로 작동합니다.',
        bullets: [
          'Qwen3-72B Q4_K_M: 46 GB RAM, 최고의 중국어 산문 품질, 128K 컨텍스트',
          'Yi-34B Q4_K_M: 21 GB RAM, 탁월한 캐릭터 음성 및 감정 범위',
          'Qwen3-7B Q4_K_M: 5.5 GB VRAM, 8~12 tok/s — 8 GB GPU에 최적',
          'ChatGLM3-6B: 4.5 GB VRAM, 더 빠른 추론이지만 캐릭터 일관성 낮음',
        ],
        updatedDate: '2026-05',
      },
    },
    readTime: '5분 분량',
    intro: 'SillyTavern을 중국어 로컬 모델과 함께 실행하려면 세 가지가 필요합니다. 중국어 텍스트로 네이티브 학습된 모델, 캐릭터 카드의 올바른 UTF-8 인코딩, 그리고 SillyTavern에서 Ollama 또는 llama.cpp로의 API 브릿지입니다. 이 가이드에서는 VRAM 수준별 최고 모델, 중국어 캐릭터 카드 구성, 실제로 작동하는 연결 설정을 다룹니다.',
    leadAnswerBlock: 'Qwen3-72B Q4_K_M은 46 GB RAM이 필요한 중국어 롤플레이 최고의 로컬 모델입니다. 8 GB VRAM에서는 Qwen3-7B를 사용하십시오. 캐릭터 카드는 항상 UTF-8로 설정하고 SillyTavern을 http://127.0.0.1:11434의 Ollama에 연결하십시오.',
    snippetBlocks: [
      {
        type: 'one-sentence',
        content: 'Qwen3-72B Q4_K_M은 로컬에서 최고 품질의 중국어 롤플레이를 제공합니다. 8 GB VRAM에서는 Qwen3-7B가 8~12 tok/s로 실용적인 선택입니다.',
      },
      {
        type: 'plain-terms',
        content: 'SillyTavern은 롤플레이를 위한 채팅 인터페이스입니다. Ollama는 내 컴퓨터에서 AI 모델을 실행합니다. 로컬 중국어 롤플레이를 위해: (1) Ollama를 통해 중국어 학습 모델을 다운로드하고, (2) SillyTavern이 Ollama API를 가리키도록 설정하고, (3) UTF-8 인코딩으로 중국어 캐릭터 카드를 작성하십시오.',
      },
    ],
    toc: [
      { label: 'VRAM별 모델 비교', anchor: 'model-comparison' },
      { label: 'SillyTavern과 Ollama 연결', anchor: 'connection-setup' },
      { label: '중국어 캐릭터 카드', anchor: 'character-cards' },
      { label: '인코딩 설정', anchor: 'encoding-settings' },
      { label: '중국어 프롬프트 템플릿', anchor: 'prompt-template' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    targetKeywords: [
      'SillyTavern 중국어 롤플레이',
      '로컬 LLM 중국어 모델',
      'Qwen3 SillyTavern 설정',
      'SillyTavern Ollama 연결',
      '중국어 AI 롤플레이 모델 추천',
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 요약',
        isTldr: true,
        items: [
          'Qwen3-72B Q4_K_M: 최고의 중국어 산문, 46 GB RAM 필요',
          'Yi-34B Q4_K_M: 최고의 캐릭터 깊이, 21 GB RAM 필요',
          'Qwen3-7B Q4_K_M: 8 GB VRAM에 최적, 8~12 tok/s',
          'SillyTavern → API 유형: OpenAI 호환 → URL: http://127.0.0.1:11434/v1',
          '캐릭터 카드: 중국어 텍스트를 직접 붙여넣고 UTF-8로 저장',
          '시스템 프롬프트: 始终用简体中文回复。保持角色一致性。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: '중국어 롤플레이에 적합한 Qwen 또는 중국어 모델 선택',
        content: [
          '네 가지 모델이 주요 하드웨어 수준을 커버합니다. Qwen3-72B는 산문 품질에서 최고이지만 46 GB 통합 메모리의 워크스테이션 또는 Mac Studio가 필요합니다. Yi-34B는 캐릭터 음성과 감정적 깊이를 우선시하는 사용자를 위한 두 번째 선택입니다. Qwen3-7B는 일반 게이밍 GPU에 적합한 실용적인 옵션입니다.',
        ],
        comparisonTable: {
          columns: ['모델', 'VRAM / RAM', '중국어 점수', '속도', '최적 용도'],
          rows: [
            { '모델': 'Qwen3-72B Q4_K_M', 'VRAM / RAM': '46 GB RAM', '중국어 점수': '★★★★★', '속도': '1~3 tok/s', '최적 용도': '최고 산문, 장편 내러티브' },
            { '모델': 'Yi-34B Q4_K_M', 'VRAM / RAM': '21 GB RAM', '중국어 점수': '★★★★☆', '속도': '2~5 tok/s', '최적 용도': '감정적 깊이, 캐릭터 음성' },
            { '모델': 'Qwen3-14B Q4_K_M', 'VRAM / RAM': '9.5 GB VRAM', '중국어 점수': '★★★★☆', '속도': '4~8 tok/s', '최적 용도': '품질과 속도의 균형' },
            { '모델': 'Qwen3-7B Q4_K_M', 'VRAM / RAM': '5.5 GB VRAM', '중국어 점수': '★★★☆☆', '속도': '8~12 tok/s', '최적 용도': 'RTX 3060, 8 GB VRAM GPU' },
            { '모델': 'ChatGLM3-6B', 'VRAM / RAM': '4.5 GB VRAM', '중국어 점수': '★★★☆☆', '속도': '12~18 tok/s', '최적 용도': '더 빠름, 제한된 컨텍스트 (8K)' },
          ],
        },
      },
      connectionSetup: {
        id: 'connection-setup',
        title: '4단계로 SillyTavern을 Ollama에 연결하기',
        content: [
          'SillyTavern은 OpenAI 호환 API 엔드포인트를 통해 Ollama와 통신합니다. 별도의 플러그인이 필요하지 않습니다 — Ollama가 포트 11434에서 네이티브로 이를 제공합니다.',
        ],
        numberedItems: [
          '모델 다운로드: 터미널에서 `ollama pull qwen2.5:7b` (또는 `qwen2.5:72b`, `yi:34b`)를 실행하십시오',
          'SillyTavern 열기 → API 연결 → **OpenAI 호환** 선택',
          '사용자 정의 API URL을 `http://127.0.0.1:11434/v1`로 설정하십시오',
          'API 키를 비어있지 않은 임의의 문자열로 설정하십시오 (예: `ollama`) — Ollama는 키를 무시합니다',
          '연결 클릭 → 드롭다운에서 모델 선택',
        ],
      },
      characterCards: {
        id: 'character-cards',
        title: '중국어 캐릭터 카드 작성하기',
        content: [
          'SillyTavern 캐릭터 카드(페르소나 설명, 환영 메시지, 대화 예시)는 중국어 텍스트를 완전히 지원합니다. 시스템 로케일이 UTF-8로 설정되어 있다면 특별한 인코딩 단계 없이 간체 중국어로 직접 작성하십시오.',
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
        title: '깨진 문자를 방지하는 인코딩 설정',
        content: [
          '중국어 깨짐 현상(乱码)은 거의 항상 세 가지 원인 중 하나입니다: 시스템 프롬프트에 언어 지시어 누락, 중국어로 학습되지 않은 모델, 또는 UTF-8로 설정되지 않은 터미널/에디터.',
        ],
        items: [
          '**SillyTavern 설정:** 별도의 특수 설정이 필요하지 않습니다 — 앱이 내부적으로 UTF-8을 사용합니다. 캐릭터 카드를 JSON으로 내보내기/가져오기 시 에디터가 UTF-8(ANSI 또는 GB2312가 아닌)로 저장하는지 확인하십시오.',
          '**Windows 터미널:** Ollama를 시작하기 전에 `chcp 65001`을 실행하여 UTF-8 코드 페이지를 강제 적용하십시오.',
          '**Ollama 모델 파일:** 사용자 정의 Modelfile을 사용하는 경우 `PARAMETER stop ""`을 설정하십시오 — 。！？와 같은 중국어 구두점이 일부 기본 모델에서 조기 종료 토큰을 유발할 수 있습니다.',
          '**llama.cpp 백엔드:** `--log-disable` 플래그를 추가하십시오 — 기본 로그 출력이 일부 Windows 터미널에서 Unicode를 손상시킬 수 있습니다.',
        ],
      },
      promptTemplate: {
        id: 'prompt-template',
        title: '중국어 롤플레이를 위한 시스템 프롬프트 템플릿',
        content: [
          'SillyTavern의 시스템 프롬프트 필드(API → 지시어 템플릿)에 다음을 붙여넣으십시오. 필요에 따라 캐릭터 이름과 어조를 조정하십시오.',
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
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Qwen3-7B는 긴 중국어 롤플레이 세션을 처리할 수 있습니까?',
            a: '예. Qwen3-7B Q4_K_M은 Ollama에서 기본적으로 32K 컨텍스트를 지원합니다. 방대한 설정이나 긴 대화 기록이 있는 긴 세션의 경우, SillyTavern의 API 설정에서 컨텍스트 창을 늘리고 10K+ 토큰에서 더 나은 일관성을 위해 Qwen3-14B 이상을 사용하십시오.',
          },
          {
            q: 'SillyTavern은 중국어 캐릭터 이름과 설명을 지원합니까?',
            a: '예. SillyTavern은 모든 캐릭터 데이터를 UTF-8 JSON으로 저장합니다. 이름, 설명, 환영 메시지, 대화 예시를 완전히 중국어로 작성할 수 있습니다. 인터페이스는 별도의 플러그인 없이 중국어 문자를 올바르게 표시합니다.',
          },
          {
            q: 'Yi-34B가 중국어 롤플레이에서 Qwen3-14B보다 낫습니까?',
            a: 'Yi-34B는 특히 복잡하거나 문학적인 장면에서 더 표현적이고 감정적으로 다양한 캐릭터 응답을 생성합니다. Qwen3-14B는 더 빠르고(4~8 tok/s 대 2~5 tok/s) RAM이 덜 필요합니다. 순수한 롤플레이 몰입감을 위해서는 Yi-34B가 우수하고, 속도와 낮은 하드웨어 요구 사항을 위해서는 Qwen3-14B가 최선입니다.',
          },
          {
            q: '모델이 중국어와 영어를 혼합하여 출력하는 이유는 무엇입니까?',
            a: '시스템 프롬프트에 언어 지시어가 없기 때문입니다. SillyTavern의 지시어 템플릿 시스템 프롬프트에 始终用简体中文回复，不要使用英文을 추가하십시오. 기본적으로 영어를 출력하는 Llama나 Mistral 대신 중국어로 학습된 모델(Qwen3, Yi, ChatGLM)을 사용하고 있는지도 확인하십시오.',
          },
          {
            q: '간체 대신 번체 중국어를 사용할 수 있습니까?',
            a: '예. 시스템 프롬프트에서 简体中文을 繁體中文으로 교체하십시오. Qwen3는 번체 중국어를 잘 처리합니다. Yi-34B도 번체 중국어를 지원하지만 간체보다 일관성이 약간 낮습니다. ChatGLM3는 주로 간체 중국어로 학습되었으므로 번체 사용에는 권장되지 않습니다.',
          },
          {
            q: 'Mac에서 작동합니까?',
            a: '예. Apple Silicon의 Ollama는 Metal(MLX 백엔드)을 통해 Qwen3-7B와 14B를 실행합니다. Qwen3-72B의 경우 최소 64 GB 통합 메모리가 필요합니다(Mac Studio M2 Ultra 또는 M3 Ultra, 또는 Mac Pro). `ollama pull qwen2.5:72b`를 실행하고 동일한 방법으로 SillyTavern을 연결하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[SillyTavern vs Agn.ai vs RisuAI 롤플레이 비교](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)',
          '[2026년 창작 글쓰기를 위한 최고의 로컬 LLM](/ko/prompt-bites/best-local-llm-creative-writing-2026)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'SillyTavern 중국어 롤플레이 설정 가이드 2026',
      description: 'SillyTavern에서 중국어 롤플레이를 위한 최고의 모델: Qwen3-72B 선두, 캐릭터 깊이를 위한 Yi-34B, 속도를 위한 ChatGLM. 카드 인코딩 및 Ollama로의 API 브릿지.',
      url: 'https://www.promptquorum.com/ko/prompt-bites/sillytavern-chinese-roleplay-setup',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'SillyTavern' },
        { '@type': 'Thing', name: '중국어 언어 모델' },
        { '@type': 'Thing', name: '로컬 LLM 롤플레이' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'SillyTavern' },
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'ChatGLM' },
      ],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Prompt Bites', item: 'https://www.promptquorum.com/ko/prompt-bites' },
        { '@type': 'ListItem', position: 3, name: 'SillyTavern 중국어 롤플레이 설정 가이드', item: 'https://www.promptquorum.com/ko/prompt-bites/sillytavern-chinese-roleplay-setup' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qwen3-7B는 긴 중국어 롤플레이 세션을 처리할 수 있습니까?',
          acceptedAnswer: { '@type': 'Answer', text: '예. Qwen3-7B Q4_K_M은 Ollama에서 기본적으로 32K 컨텍스트를 지원합니다. 긴 세션의 경우 컨텍스트 창을 늘리고 Qwen3-14B 이상을 사용하십시오.' },
        },
        {
          '@type': 'Question',
          name: '모델이 중국어와 영어를 혼합하여 출력하는 이유는 무엇입니까?',
          acceptedAnswer: { '@type': 'Answer', text: '시스템 프롬프트에 始终用简体中文回复，不要使用英文을 추가하십시오. Qwen3, Yi 또는 ChatGLM을 사용하십시오 — Llama와 Mistral은 기본적으로 영어를 출력합니다.' },
        },
      ],
    },
  },
}
