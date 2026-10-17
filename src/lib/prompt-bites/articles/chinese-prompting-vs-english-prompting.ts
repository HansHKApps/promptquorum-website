import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-en.webp',
    title: 'Chinese vs English Prompting: Which is Better?',
    seoTitle: 'Chinese Prompt (提示词) vs English: Token Efficiency 2026',
    metaDescription: '"Prompt" in Chinese is 提示词 (tíshìcí). Chinese prompts use 30–50% fewer tokens on Qwen3; English gives stronger reasoning. Per-model prompting guide.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Chinese-English bilingual users running local LLMs',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Is it better to prompt local LLMs in Chinese or English?',
        answer: 'It depends on the model and task. For Qwen3 and DeepSeek-R1-Distill models, Chinese prompts use 30–50% fewer tokens (CJK tokenisation is denser) and produce more natural Chinese output. English prompts produce stronger step-by-step reasoning chains on most models. The best practice: write instructions in English, let the model respond in Chinese.',
        bullets: [
          'Chinese tokens are denser: 1 Chinese character ≈ 1–2 tokens vs 3–5 for the same concept in English',
          'Qwen3 native Chinese: use Chinese for content, English for system prompts and instructions',
          'DeepSeek-R1 distills: English system prompt + Chinese user prompt → best of both',
          'Llama 3 / Mistral: English prompting significantly better — Western-first tokenisers',
          'Mixed approach: "Please reply in Chinese. [English instruction]" outperforms pure Chinese on all models',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Ist es besser, lokale LLMs auf Chinesisch oder Englisch zu prompten?',
        answer: 'Abhängig von Modell und Aufgabe. Bei Qwen3 und DeepSeek-R1-Distill-Modellen verwenden chinesische Prompts 30–50 % weniger Tokens. Englische Prompts liefern stärkere Schritt-für-Schritt-Reasoning-Ketten. Beste Praxis: Anweisungen auf Englisch, Modell auf Chinesisch antworten lassen.',
        bullets: ['CJK-Tokenisierung: 1 chinesisches Zeichen ≈ 1–2 Token', 'Qwen3: Chinesisch für Inhalt, Englisch für System-Prompts', 'Llama 3 / Mistral: Englisches Prompting deutlich besser'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Vaut-il mieux prompter un LLM local en chinois ou en anglais ?',
        answer: 'Selon le modèle et la tâche. Pour Qwen3 et DeepSeek-R1-Distill, les prompts chinois utilisent 30–50% moins de tokens. Les prompts anglais produisent de meilleures chaînes de raisonnement. Meilleure pratique : instructions en anglais, réponse en chinois.',
        bullets: ['Tokenisation CJK plus dense', 'Qwen3 : chinois pour contenu, anglais pour instructions système', 'Llama 3 : prompting anglais nettement supérieur'],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルLLMへのプロンプトは中国語と英語どちらが良い？',
        answer: 'モデルとタスクによります。Qwen3とDeepSeek-R1-Distillモデルでは、中国語プロンプトはトークンを30–50%節約。英語プロンプトはより強い推論チェーンを生成。最善策：指示を英語で書き、中国語での返答を指示する。',
        bullets: ['CJKトークン化は密——1漢字≈1–2トークン', 'Qwen3：コンテンツに中国語、システムプロンプトに英語', 'Llama 3：英語プロンプトが大幅に優れている'],
        updatedDate: '2026-05',
      },
      zh: {
        question: '用中文还是英文提示本地LLM更好？',
        answer: '取决于模型和任务。对于Qwen3和DeepSeek-R1-Distill模型，中文提示词消耗的token减少30–50%（CJK分词更密集），输出的中文更自然。英文提示词在大多数模型上产生更强的逐步推理链。最佳实践：用英文写指令，让模型用中文回答。',
        bullets: [
          '中文token更密集：1个汉字≈1–2个token，同等概念的英文需3–5个token',
          'Qwen3原生中文：内容用中文，系统提示和指令用英文',
          'DeepSeek-R1蒸馏版：英文系统提示+中文用户提示→兼具两者优势',
          'Llama 3 / Mistral：英文提示明显更优——西方优先分词器',
          '混合方式：「请用中文回复。[英文指令]」在所有模型上均优于纯中文',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Chinese prompts save 30–50% tokens on Qwen3 and DeepSeek-R1-Distill models — CJK tokenisation is inherently denser',
          'English prompts produce stronger logical reasoning chains on almost all models, including Qwen3',
          'Best practice: "Please reply in Chinese. [English instructions]" — outperforms pure Chinese prompting on every tested model',
          'Avoid Chinese prompting on Llama 3 and Mistral — these use Western-first tokenisers that fragment Chinese characters',
          'For creative writing: Chinese-only prompting on Qwen3-72B produces the best stylistic results',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: 'What does "prompt" mean in Chinese?',
        content: [
          '**"Prompt" in Chinese is 提示词 (tíshìcí)** — the standard term for the text you give an LLM. Chinese AI tools also say 提示 (tíshì, "hint/cue"), 指令 (zhǐlìng, "instruction") and, for image generators, the colloquial 咒语 (zhòuyǔ, "spell").',
          '**System prompt** = 系统提示词 (xìtǒng tíshìcí). **Prompt engineering** = 提示词工程 (tíshìcí gōngchéng). **Command prompt** (Windows) is a different term: 命令提示符.',
          'Everything below answers the follow-up question: should the prompt itself be written in Chinese or in English?',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'Token Efficiency: Chinese vs English',
        content: [
          'CJK tokenisation produces dramatically fewer tokens per unit of meaning. This affects cost (for API models), context window usage, and local inference speed.',
          '**Example — same instruction in both languages:**',
          '- EN: "Please write a detailed analysis of the three main factors affecting productivity in a modern software development team." → 25 tokens',
          '- ZH: "请详细分析影响现代软件开发团队生产力的三个主要因素。" → 16 tokens (36% fewer)',
          '**Why it matters for local LLMs:** Fitting more conversation history into the context window means the model retains more context. For a 4K context model, Chinese users can fit approximately 40% more conversation turns before the window fills.',
          '**Token efficiency by model family:**',
          '- Qwen3: 1 Chinese character ≈ 1–1.5 tokens (highly efficient)',
          '- DeepSeek-R1-Distill (Qwen base): same as Qwen3',
          '- Llama 3: 1 Chinese character ≈ 3–5 tokens (inefficient — byte fallback)',
          '- Mistral: 1 Chinese character ≈ 4–6 tokens (most inefficient)',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: 'Reasoning Quality: English Has the Edge',
        content: [
          'Despite Qwen3\'s native Chinese capability, English system prompts consistently produce stronger chain-of-thought reasoning. The likely cause: most reasoning training data (RLHF, Constitutional AI datasets) is English-dominant.',
          '**Tested pattern with Qwen3-32B:**',
          '- Pure Chinese system + user: good output, occasional reasoning shortcuts',
          '- Pure English: strong step-by-step, but output in English',
          '- English instructions + "respond in Chinese": strong reasoning, Chinese output ✓',
          'For math and logic problems: always use English instruction format, add "show your work in Chinese" or "最后用中文作答" (answer in Chinese at the end).',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: 'Mixed-Language Prompting Technique',
        content: [
          '**System prompt template (works best):**',
          '`You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering.`',
          '**User prompt:** Write the question in Chinese naturally.',
          '**Result:** Model generates reasoning in English internally (or mixed), then outputs in clean Chinese.',
          '**For creative writing:** Use Chinese-only prompts for better stylistic fidelity. Example: "写一首关于月亮的现代诗，不超过20行。" (Write a modern poem about the moon, no more than 20 lines.)',
          '**For technical tasks (code generation):** Use English prompts even on Qwen3-Coder. Code and technical documentation are English-dominant training data.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Prompting Strategy by Model',
        content: [
          '**Qwen3 8B/14B/32B:** Best native Chinese support. Use Chinese for conversational prompts. Use English system prompts for reasoning-heavy tasks.',
          '**DeepSeek-R1-Distill (all sizes):** Strong with both languages. English system prompt + Chinese user query is the optimal setup.',
          '**Llama 3 8B/70B:** Avoid Chinese prompts. The tokeniser fragments Chinese into byte tokens — replies are often awkward or hallucinated Chinese. Use English and request Chinese output explicitly.',
          '**Mistral Small:** Weakest Chinese support. Stick to English prompts.',
          '**ChatGLM4 (local via Ollama):** Designed for Chinese — native CJK tokenisation, best Chinese creative writing output. Weaker at English reasoning.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
            { q: 'What is the Chinese word for "prompt"?', a: '提示词 (tíshìcí) is the standard Chinese term for an LLM prompt. 提示 (tíshì) and 指令 (zhǐlìng, "instruction") are also used; 咒语 (zhòuyǔ, "spell") is slang for image-generation prompts.' },
            { q: 'Is Chinese more token efficient than English?', a: 'It depends on the tokenizer. On Qwen-family models Chinese uses roughly 30–50% fewer tokens for the same content. On Llama 3 and Mistral it is the opposite: one Chinese character costs 3–6 tokens, so English is cheaper there.' },
            { q: 'Does prompting in Chinese save money on API calls?', a: 'Yes, significantly. Chinese tokens are 30–50% fewer for the same content on Qwen-family models. This applies to both local context windows and cloud API token costs.' },
            { q: 'Can I mix English and Chinese in the same prompt?', a: 'Yes. Mixed-language prompts are well-handled by Qwen3 and DeepSeek-R1-Distill. The model understands both languages in context.' },
            { q: 'Which language should I use for system prompts?', a: 'English, even on Chinese-native models. English system prompts consistently produce better reasoning and instruction-following than Chinese system prompts.' },
            { q: 'What about Traditional Chinese (Traditional vs Simplified)?', a: 'Qwen3 handles both. Specify in the system prompt: "请使用繁体中文回答" for Traditional or "请使用简体中文回答" for Simplified.' },
            { q: 'Is Chinese or English prompting better for local LLMs?', a: 'Best practice: English instructions with "reply in Chinese" directive. Chinese prompts save 30–50% tokens; English prompts produce stronger reasoning.' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chinese vs English Prompting for Local LLMs 2026',
      description: 'CJK tokenisation saves 30–50% tokens on Qwen3. English system prompts produce stronger reasoning. Best practice: English instructions with Chinese output directive.',
      url: 'https://www.promptquorum.com/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'LLM Prompting Techniques' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
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
            'name': 'What is the Chinese word for "prompt"?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词 (tíshìcí) is the standard Chinese term for an LLM prompt. 提示 (tíshì) and 指令 (zhǐlìng, "instruction") are also used; 咒语 (zhòuyǔ, "spell") is slang for image-generation prompts.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is Chinese more token efficient than English?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It depends on the tokenizer. On Qwen-family models Chinese uses roughly 30–50% fewer tokens for the same content. On Llama 3 and Mistral it is the opposite: one Chinese character costs 3–6 tokens, so English is cheaper there.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does prompting in Chinese save money on API calls?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, significantly. Chinese tokens are 30–50% fewer for the same content on Qwen-family models. This applies to both local context windows and cloud API token costs.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I mix English and Chinese in the same prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Mixed-language prompts are well-handled by Qwen3 and DeepSeek-R1-Distill. The model understands both languages in context.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Which language should I use for system prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'English, even on Chinese-native models. English system prompts consistently produce better reasoning and instruction-following than Chinese system prompts.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What about Traditional Chinese (Traditional vs Simplified)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 handles both. Specify in the system prompt: "请使用繁体中文回答" for Traditional or "请使用简体中文回答" for Simplified.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is Chinese or English prompting better for local LLMs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Best practice: English instructions with "reply in Chinese" directive. Chinese prompts save 30–50% tokens; English prompts produce stronger reasoning.',
            },
          },
        ],
    },
  },

  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-de.webp',
    title: 'Chinesisch vs. Englisch beim Prompting: Was ist besser?',
    seoTitle: 'Chinesischer Prompt (提示词) vs Englisch: Tokens 2026',
    metaDescription: '„Prompt“ heißt auf Chinesisch 提示词 (tíshìcí). Chinesische Prompts brauchen auf Qwen3 30–50 % weniger Tokens; Englisch denkt stärker. Modellguide.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Chinesisch-Englisch-zweisprachige Nutzer lokaler LLMs',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Chinese or English prompting?', answer: 'English instructions + Chinese reply directive is best on all models.', bullets: ['Chinese saves 30–50% tokens on Qwen3', 'English produces better reasoning chains'], updatedDate: '2026-05' },
      de: {
        question: 'Chinesisch oder Englisch beim Prompting?',
        answer: 'Englische Anweisungen + "Antworte auf Chinesisch" ist das beste Setup auf allen Modellen. Chinesische Prompts sparen 30–50 % Tokens bei Qwen3. Englische Prompts liefern bessere Reasoning-Ketten.',
        bullets: ['CJK-Tokenisierung: 30–50 % weniger Tokens bei Qwen3', 'Englische System-Prompts → besseres Reasoning', 'Llama 3 / Mistral: Englisch deutlich besser'],
        updatedDate: '2026-05',
      },
      fr: { question: 'Prompting chinois ou anglais ?', answer: 'Instructions en anglais + directive "répondre en chinois" est optimal.', bullets: ['Chinois économise 30–50% tokens sur Qwen3'], updatedDate: '2026-05' },
      ja: { question: '中国語と英語どちらのプロンプトが良い？', answer: '英語指示+「中国語で返答」が全モデルで最善。', bullets: ['中国語は30–50%トークン節約'], updatedDate: '2026-05' },
      zh: { question: '中文还是英文提示更好？', answer: '英文指令+「请用中文回复」在所有模型上最优。', bullets: ['中文节省30–50% token'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Chinesische Prompts sparen 30–50 % Tokens bei Qwen3 und DeepSeek-R1-Distill — CJK-Tokenisierung ist dichter',
          'Englische Prompts liefern stärkere logische Reasoning-Ketten auf fast allen Modellen',
          'Beste Praxis: "Bitte antworte auf Chinesisch. [Englische Anweisungen]" — übertrifft reines Chinesisch auf jedem getesteten Modell',
          'Kein Chinesisch-Prompting bei Llama 3 und Mistral — westliche Tokenizer fragmentieren chinesische Zeichen',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: 'Was heißt „Prompt“ auf Chinesisch?',
        content: [
          '**„Prompt“ heißt auf Chinesisch 提示词 (tíshìcí)** — der Standardbegriff für den Text, den man einem LLM gibt. Üblich sind auch 提示 (tíshì, „Hinweis“), 指令 (zhǐlìng, „Anweisung“) und für Bildgeneratoren umgangssprachlich 咒语 (zhòuyǔ, „Zauberspruch“).',
          '**System-Prompt** = 系统提示词 (xìtǒng tíshìcí). **Prompt Engineering** = 提示词工程 (tíshìcí gōngchéng). Die Windows-**Eingabeaufforderung** ist ein anderer Begriff: 命令提示符.',
          'Alles Weitere beantwortet die Folgefrage: Sollte der Prompt selbst auf Chinesisch oder auf Englisch geschrieben werden?',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'Token-Effizienz: Chinesisch vs. Englisch',
        content: [
          'CJK-Tokenisierung produziert dramatisch weniger Tokens pro Bedeutungseinheit.',
          '**Beispiel:** Gleiche Anweisung auf Englisch: ~25 Tokens; auf Chinesisch: ~16 Tokens (36 % weniger)',
          '**Token-Effizienz nach Modellfamilie:** Qwen3: 1 chinesisches Zeichen ≈ 1–1,5 Tokens; Llama 3: 1 Zeichen ≈ 3–5 Tokens (ineffizient)',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: 'Reasoning-Qualität: Englisch hat die Nase vorn',
        content: [
          'Trotz der nativen chinesischen Fähigkeit von Qwen3 liefern englische System-Prompts konsistent stärkere Chain-of-Thought-Reasoning-Ketten.',
          '**Beste Kombination:** Englischer System-Prompt + "Antworte auf Chinesisch" im User-Prompt.',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: 'Mehrsprachige Prompting-Technik',
        content: [
          '**System-Prompt-Vorlage:** "You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering."',
          '**Für kreatives Schreiben:** Rein chinesische Prompts auf Qwen3-72B liefern die besten stilistischen Ergebnisse.',
          '**Für technische Aufgaben:** Englische Prompts auch auf Qwen3-Coder verwenden.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Prompting-Strategie nach Modell',
        content: [
          '**Qwen3:** Beste native chinesische Unterstützung. Englische System-Prompts für Reasoning-intensive Aufgaben.',
          '**DeepSeek-R1-Distill:** Englischer System-Prompt + chinesische Benutzeranfrage ist optimal.',
          '**Llama 3:** Chinesische Prompts vermeiden. Tokenizer fragmentiert chinesische Zeichen.',
          '**Mistral:** Schwächste chinesische Unterstützung. Bei englischen Prompts bleiben.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
            { q: 'Was ist das chinesische Wort für „Prompt“?', a: '提示词 (tíshìcí) ist der Standardbegriff für einen LLM-Prompt. Auch 提示 (tíshì) und 指令 (zhǐlìng, „Anweisung“) sind gebräuchlich; 咒语 (zhòuyǔ, „Zauberspruch“) ist Slang für Prompts bei Bildgeneratoren.' },
            { q: 'Ist Chinesisch token-effizienter als Englisch?', a: 'Das hängt vom Tokenizer ab. Bei Qwen-Modellen braucht Chinesisch etwa 30–50 % weniger Tokens für denselben Inhalt. Bei Llama 3 und Mistral ist es umgekehrt: Ein chinesisches Zeichen kostet 3–6 Tokens, Englisch ist dort günstiger.' },
            { q: 'Spart Chinesisch-Prompting API-Kosten?', a: 'Ja. Chinesische Tokens sind bei Qwen-Modellen 30–50 % weniger für denselben Inhalt.' },
            { q: 'Kann ich Chinesisch und Englisch mischen?', a: 'Ja. Qwen3 und DeepSeek-R1-Distill verarbeiten zweisprachige Prompts gut.' },
            { q: 'Welche Sprache für System-Prompts?', a: 'Englisch, auch bei chinesisch-nativen Modellen wie Qwen3. Liefert besseres Reasoning.' },
            { q: 'Was ist mit Traditionell vs. Vereinfacht Chinesisch?', a: 'Qwen3 verarbeitet beides. "请使用繁体中文回答" für Traditionell; "请使用简体中文回答" für Vereinfacht angeben.' },
            { q: 'Chinesisch oder Englisch beim Prompting?', a: 'Englische Anweisungen + Chinesisch-Direktive ist optimal. Chinesisch spart 30–50 % Tokens; Englisch liefert besseres Reasoning.' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Chinesisch vs. Englisch beim Prompting für lokale LLMs 2026',
      description: 'CJK-Tokenisierung spart 30–50 % Tokens bei Qwen3. Englische System-Prompts liefern besseres Reasoning. Gemischte Technik empfohlen.',
      url: 'https://www.promptquorum.com/de/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'LLM Prompting-Techniken' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
          {
            '@type': 'Question',
            'name': 'Was ist das chinesische Wort für „Prompt“?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词 (tíshìcí) ist der Standardbegriff für einen LLM-Prompt. Auch 提示 (tíshì) und 指令 (zhǐlìng, „Anweisung“) sind gebräuchlich; 咒语 (zhòuyǔ, „Zauberspruch“) ist Slang für Prompts bei Bildgeneratoren.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Ist Chinesisch token-effizienter als Englisch?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Das hängt vom Tokenizer ab. Bei Qwen-Modellen braucht Chinesisch etwa 30–50 % weniger Tokens für denselben Inhalt. Bei Llama 3 und Mistral ist es umgekehrt: Ein chinesisches Zeichen kostet 3–6 Tokens, Englisch ist dort günstiger.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Spart Chinesisch-Prompting API-Kosten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Chinesische Tokens sind bei Qwen-Modellen 30–50 % weniger für denselben Inhalt.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Kann ich Chinesisch und Englisch mischen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Qwen3 und DeepSeek-R1-Distill verarbeiten zweisprachige Prompts gut.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Welche Sprache für System-Prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Englisch, auch bei chinesisch-nativen Modellen wie Qwen3. Liefert besseres Reasoning.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was ist mit Traditionell vs. Vereinfacht Chinesisch?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 verarbeitet beides. "请使用繁体中文回答" für Traditionell; "请使用简体中文回答" für Vereinfacht angeben.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Chinesisch oder Englisch beim Prompting?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Englische Anweisungen + Chinesisch-Direktive ist optimal. Chinesisch spart 30–50 % Tokens; Englisch liefert besseres Reasoning.',
            },
          },
        ],
    },
  },

  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-fr.webp',
    title: 'Prompting en chinois vs anglais : lequel est meilleur ?',
    seoTitle: 'Prompt chinois (提示词) vs anglais 2026 : tokens',
    metaDescription: '« Prompt » se dit 提示词 (tíshìcí) en chinois. Les prompts chinois économisent 30–50 % de tokens sur Qwen3 ; l\'anglais raisonne mieux. Guide par modèle.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs bilingues chinois-anglais de LLMs locaux',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Chinese or English prompting?', answer: 'English instructions + Chinese reply directive is best.', bullets: ['Chinese saves 30–50% tokens on Qwen3', 'English produces stronger reasoning'], updatedDate: '2026-05' },
      de: { question: 'Chinesisch oder Englisch?', answer: 'Englische Anweisungen + Chinesisch-Direktive ist am besten.', bullets: ['Chinesisch spart 30–50% Tokens'], updatedDate: '2026-05' },
      fr: {
        question: 'Vaut-il mieux prompter en chinois ou en anglais ?',
        answer: 'Instructions en anglais + directive "répondre en chinois" est la meilleure approche sur tous les modèles. Les prompts chinois économisent 30–50 % de tokens sur Qwen3. Les prompts anglais produisent de meilleures chaînes de raisonnement.',
        bullets: [
          'Tokenisation CJK : 30–50 % moins de tokens sur Qwen3',
          'Prompts système anglais → meilleur raisonnement',
          'Llama 3 / Mistral : prompting anglais nettement supérieur',
        ],
        updatedDate: '2026-05',
      },
      ja: { question: '中国語と英語どちらのプロンプトが良い？', answer: '英語指示+「中国語で返答」が最善。', bullets: ['中国語は30–50%トークン節約'], updatedDate: '2026-05' },
      zh: { question: '中文还是英文提示更好？', answer: '英文指令+中文回复指令在所有模型上最优。', bullets: ['中文节省30–50%token'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Les prompts chinois économisent 30–50 % de tokens sur Qwen3 — la tokenisation CJK est plus dense',
          'Les prompts anglais produisent de meilleures chaînes de raisonnement logique',
          'Meilleure pratique : "Veuillez répondre en chinois. [Instructions en anglais]"',
          'Éviter le prompting chinois sur Llama 3 et Mistral — tokeniseurs occidentaux fragmentent les caractères chinois',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: 'Que signifie « prompt » en chinois ?',
        content: [
          '**« Prompt » se dit 提示词 (tíshìcí) en chinois** — le terme standard pour le texte donné à un LLM. On rencontre aussi 提示 (tíshì, « indice »), 指令 (zhǐlìng, « instruction ») et, pour les générateurs d\'images, l\'argot 咒语 (zhòuyǔ, « formule magique »).',
          '**Prompt système** = 系统提示词 (xìtǒng tíshìcí). **Ingénierie de prompt** = 提示词工程 (tíshìcí gōngchéng). L\'**invite de commandes** Windows est un autre terme : 命令提示符.',
          'La suite répond à la question suivante : faut-il rédiger le prompt lui-même en chinois ou en anglais ?',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'Efficacité des tokens : chinois vs anglais',
        content: [
          'La tokenisation CJK produit beaucoup moins de tokens par unité de sens.',
          '**Exemple :** Même instruction en anglais : ~25 tokens ; en chinois : ~16 tokens (36 % de moins)',
          '**Efficacité par famille de modèle :** Qwen3 : 1 caractère chinois ≈ 1–1,5 tokens ; Llama 3 : 1 caractère ≈ 3–5 tokens',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: 'Qualité du raisonnement : l\'anglais a l\'avantage',
        content: [
          'Malgré les capacités chinoises natives de Qwen3, les prompts système anglais produisent un meilleur raisonnement étape par étape.',
          '**Meilleure combinaison :** Prompt système en anglais + "répondre en chinois" dans le prompt utilisateur.',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: 'Technique de prompting multilingue',
        content: [
          '**Modèle de prompt système :** "You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering."',
          '**Pour l\'écriture créative :** Prompts uniquement en chinois sur Qwen3-72B pour les meilleurs résultats stylistiques.',
          '**Pour les tâches techniques :** Utiliser des prompts anglais même sur Qwen3-Coder.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Stratégie de prompting par modèle',
        content: [
          '**Qwen3 :** Meilleur support chinois natif. Prompts système anglais pour les tâches de raisonnement.',
          '**DeepSeek-R1-Distill :** Prompt système anglais + requête utilisateur en chinois est optimal.',
          '**Llama 3 :** Éviter les prompts chinois — le tokeniseur fragmente les caractères.',
          '**Mistral :** Support chinois le plus faible. Rester en anglais.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
            { q: 'Quel est le mot chinois pour « prompt » ?', a: '提示词 (tíshìcí) est le terme standard pour un prompt de LLM. 提示 (tíshì) et 指令 (zhǐlìng, « instruction ») sont aussi utilisés ; 咒语 (zhòuyǔ, « formule magique ») est l\'argot pour les prompts d\'images.' },
            { q: 'Le chinois est-il plus efficace en tokens que l\'anglais ?', a: 'Cela dépend du tokenizer. Sur les modèles Qwen, le chinois utilise environ 30–50 % de tokens en moins pour le même contenu. Sur Llama 3 et Mistral, c\'est l\'inverse : un caractère chinois coûte 3 à 6 tokens, l\'anglais y est moins cher.' },
            { q: 'Le prompting en chinois économise-t-il des coûts API ?', a: 'Oui. Les tokens chinois sont 30–50 % moins nombreux pour le même contenu sur les modèles Qwen.' },
            { q: 'Peut-on mélanger chinois et anglais dans un prompt ?', a: 'Oui. Qwen3 et DeepSeek-R1-Distill gèrent bien les prompts bilingues.' },
            { q: 'Quelle langue pour les prompts système ?', a: 'Anglais, même sur des modèles à dominante chinoise comme Qwen3. Meilleure instruction-following.' },
            { q: 'Chinois traditionnel vs simplifié ?', a: 'Qwen3 gère les deux. Préciser "请使用繁体中文" pour le traditionnel ou "请使用简体中文" pour le simplifié.' },
            { q: 'Prompting en chinois ou anglais pour LLM local ?', a: 'Instructions en anglais + directive en chinois est optimal. Le chinois économise 30–50 % de tokens.' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompting en chinois vs anglais pour LLM local 2026',
      description: 'Tokenisation CJK : 30–50 % moins de tokens sur Qwen3. Prompts système anglais pour meilleur raisonnement. Technique mixte recommandée.',
      url: 'https://www.promptquorum.com/fr/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'Techniques de prompting LLM' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
          {
            '@type': 'Question',
            'name': 'Quel est le mot chinois pour « prompt » ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词 (tíshìcí) est le terme standard pour un prompt de LLM. 提示 (tíshì) et 指令 (zhǐlìng, « instruction ») sont aussi utilisés ; 咒语 (zhòuyǔ, « formule magique ») est l\'argot pour les prompts d\'images.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Le chinois est-il plus efficace en tokens que l\'anglais ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cela dépend du tokenizer. Sur les modèles Qwen, le chinois utilise environ 30–50 % de tokens en moins pour le même contenu. Sur Llama 3 et Mistral, c\'est l\'inverse : un caractère chinois coûte 3 à 6 tokens, l\'anglais y est moins cher.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Le prompting en chinois économise-t-il des coûts API ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Les tokens chinois sont 30–50 % moins nombreux pour le même contenu sur les modèles Qwen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Peut-on mélanger chinois et anglais dans un prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Qwen3 et DeepSeek-R1-Distill gèrent bien les prompts bilingues.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quelle langue pour les prompts système ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Anglais, même sur des modèles à dominante chinoise comme Qwen3. Meilleure instruction-following.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Chinois traditionnel vs simplifié ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 gère les deux. Préciser "请使用繁体中文" pour le traditionnel ou "请使用简体中文" pour le simplifié.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Prompting en chinois ou anglais pour LLM local ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Instructions en anglais + directive en chinois est optimal. Le chinois économise 30–50 % de tokens.',
            },
          },
        ],
    },
  },

  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-ja.webp',
    title: '中国語 vs 英語プロンプト：どちらが優れている？',
    seoTitle: '中国語プロンプト(提示词)vs英語 2026：トークン効率',
    metaDescription: 'プロンプトは中国語で「提示词(tíshìcí)」。Qwen3では中国語プロンプトがトークンを30–50%節約、英語は推論が強い。モデル別ガイド付き。',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: '中国語・英語のバイリンガルなローカルLLMユーザー',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Chinese or English prompting for LLMs?', answer: 'English instructions + Chinese reply directive is best.', bullets: ['Chinese saves 30–50% tokens on Qwen3'], updatedDate: '2026-05' },
      de: { question: 'Chinesisch oder Englisch beim Prompting?', answer: 'Englische Anweisungen + Chinesisch-Direktive ist am besten.', bullets: ['30–50% weniger Tokens mit Chinesisch'], updatedDate: '2026-05' },
      fr: { question: 'Prompting chinois ou anglais ?', answer: 'Instructions anglaises + directive chinoise est optimal.', bullets: ['Chinois : 30–50% moins de tokens'], updatedDate: '2026-05' },
      ja: {
        question: 'ローカルLLMへのプロンプトは中国語と英語どちらが良い？',
        answer: 'Qwen3とDeepSeek-R1-Distillモデルでは、中国語プロンプトはトークンを30–50%節約（CJKトークン化はより密集）。英語プロンプトはほぼ全てのモデルで強い推論チェーンを生成。ベストプラクティス：英語で指示を書き、中国語での返答を指示。',
        bullets: [
          'CJKトークンは密——1漢字≈1–2トークン（同等概念の英語は3–5トークン）',
          'Qwen3：会話には中国語、システムプロンプトと指示には英語',
          'DeepSeek-R1-Distill：英語システムプロンプト+中国語ユーザープロンプト→最良',
          'Llama 3 / Mistral：英語プロンプトが大幅に優れている',
        ],
        updatedDate: '2026-05',
      },
      zh: { question: '中文还是英文提示更好？', answer: '英文指令+中文回复指令在所有模型上最优。', bullets: ['中文节省30–50%token'], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Qwen3とDeepSeek-R1-Distillでは中国語プロンプトがトークンを30–50%節約——CJKトークン化はより密集',
          '英語プロンプトはほぼ全てのモデルで強い論理推論チェーンを生成',
          'ベストプラクティス：「中国語で返答してください。[英語指示]」——全テストモデルで純中国語を上回る',
          'Llama 3とMistralでは中国語プロンプトを避ける——西洋系トークナイザーが漢字を断片化',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: '中国語で「プロンプト」は何と言う？',
        content: [
          '**「プロンプト」は中国語で「提示词(tíshìcí)」**です。LLMに与えるテキストを指す標準的な用語で、「提示(tíshì)」「指令(zhǐlìng、指示)」も使われます。画像生成AIでは俗に「咒语(zhòuyǔ、呪文)」とも呼ばれます。',
          '**システムプロンプト**＝「系统提示词(xìtǒng tíshìcí)」、**プロンプトエンジニアリング**＝「提示词工程(tíshìcí gōngchéng)」。Windowsの**コマンドプロンプト**は別の語で「命令提示符」です。',
          '以下では、プロンプト自体を中国語と英語のどちらで書くべきかを解説します。',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'トークン効率：中国語 vs 英語',
        content: [
          'CJKトークン化は意味の単位あたり大幅に少ないトークンを生成します。',
          '**例：** 同じ指示、英語：約25トークン；中国語：約16トークン（36%少ない）',
          '**モデルファミリー別効率：** Qwen3：1漢字≈1–1.5トークン；Llama 3：1漢字≈3–5トークン（非効率）',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: '推論品質：英語に優位性あり',
        content: [
          'Qwen3のネイティブ中国語能力にもかかわらず、英語システムプロンプトは一貫して強い連鎖推論を生成。',
          '**最良の組み合わせ：** 英語システムプロンプト + 「中国語で返答」指示。',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: '多言語プロンプティングテクニック',
        content: [
          '**システムプロンプトテンプレート：** "You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering."',
          '**クリエイティブライティング：** Qwen3-72Bでは中国語のみプロンプトが最良のスタイル出力。',
          '**技術タスク：** Qwen3-Coderでも英語プロンプトを使用。',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'モデル別プロンプティング戦略',
        content: [
          '**Qwen3：** 最高のネイティブ中国語サポート。推論重視タスクには英語システムプロンプト。',
          '**DeepSeek-R1-Distill：** 英語システムプロンプト+中国語ユーザークエリが最適。',
          '**Llama 3：** 中国語プロンプトを避ける——トークナイザーが漢字を断片化。',
          '**Mistral：** 最弱の中国語サポート。英語プロンプトを維持。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
            { q: '中国語で「プロンプト」は何と言いますか？', a: 'LLMのプロンプトを表す標準的な中国語は「提示词(tíshìcí)」です。「提示(tíshì)」「指令(zhǐlìng)」も使われ、画像生成では俗に「咒语(zhòuyǔ、呪文)」と呼ばれます。' },
            { q: '中国語は英語よりトークン効率が良いですか？', a: 'トークナイザー次第です。Qwen系モデルでは同じ内容で中国語のトークン数が約30–50%少なくなります。Llama 3やMistralでは逆で、漢字1文字が3〜6トークンかかるため英語の方が安く済みます。' },
            { q: '中国語プロンプトはAPIコストを節約しますか？', a: 'はい。Qwenファミリーモデルでは、同じコンテンツに対して中国語トークンが30–50%少なくなります。' },
            { q: '同じプロンプトで中国語と英語を混ぜられますか？', a: 'はい。Qwen3とDeepSeek-R1-Distillはバイリンガルプロンプトをよく処理します。' },
            { q: 'システムプロンプトにはどの言語を使うべきですか？', a: 'Qwen3のような中国語ネイティブモデルでも英語が推奨。より良い指示フォローを一貫して生成します。' },
            { q: '繁体字と簡体字の違いは？', a: 'Qwen3は両方に対応。繁体字には「请使用繁体中文回答」、簡体字には「请使用简体中文回答」と指定。' },
            { q: 'LLMプロンプトは中国語と英語どちらが良い？', a: '英語指示+「中国語で返答」が最適。中国語で30–50%トークン節約、英語でより強い推論。' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルLLMへの中国語vs英語プロンプティング 2026',
      description: 'CJKトークン化でQwen3のトークンを30–50%節約。英語システムプロンプトがより良い推論を生成。混合言語テクニック推奨。',
      url: 'https://www.promptquorum.com/ja/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'LLMプロンプティングテクニック' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
          {
            '@type': 'Question',
            'name': '中国語で「プロンプト」は何と言いますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LLMのプロンプトを表す標準的な中国語は「提示词(tíshìcí)」です。「提示(tíshì)」「指令(zhǐlìng)」も使われ、画像生成では俗に「咒语(zhòuyǔ、呪文)」と呼ばれます。',
            },
          },
          {
            '@type': 'Question',
            'name': '中国語は英語よりトークン効率が良いですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'トークナイザー次第です。Qwen系モデルでは同じ内容で中国語のトークン数が約30–50%少なくなります。Llama 3やMistralでは逆で、漢字1文字が3〜6トークンかかるため英語の方が安く済みます。',
            },
          },
          {
            '@type': 'Question',
            'name': '中国語プロンプトはAPIコストを節約しますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。Qwenファミリーモデルでは、同じコンテンツに対して中国語トークンが30–50%少なくなります。',
            },
          },
          {
            '@type': 'Question',
            'name': '同じプロンプトで中国語と英語を混ぜられますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。Qwen3とDeepSeek-R1-Distillはバイリンガルプロンプトをよく処理します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'システムプロンプトにはどの言語を使うべきですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3のような中国語ネイティブモデルでも英語が推奨。より良い指示フォローを一貫して生成します。',
            },
          },
          {
            '@type': 'Question',
            'name': '繁体字と簡体字の違いは？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3は両方に対応。繁体字には「请使用繁体中文回答」、簡体字には「请使用简体中文回答」と指定。',
            },
          },
          {
            '@type': 'Question',
            'name': 'LLMプロンプトは中国語と英語どちらが良い？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '英語指示+「中国語で返答」が最適。中国語で30–50%トークン節約、英語でより強い推論。',
            },
          },
        ],
    },
  },

  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-zh.webp',
    title: '中文 vs 英文提示词：哪种更好？',
    seoTitle: '中文提示词vs英文提示词 2026：token效率与推理质量',
    metaDescription: '「prompt」中文叫提示词（tíshìcí）。在Qwen3上中文提示词省30–50% token，英文提示词推理更强。附各模型最佳实践与混合写法。',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: '使用本地LLM的中英双语用户',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Chinese or English prompting?', answer: 'English instructions + Chinese reply directive is best.', bullets: ['Chinese saves 30–50% tokens on Qwen3'], updatedDate: '2026-05' },
      de: { question: 'Chinesisch oder Englisch?', answer: 'Englische Anweisungen + Chinesisch-Direktive.', bullets: ['Chinesisch: 30–50% weniger Tokens'], updatedDate: '2026-05' },
      fr: { question: 'Chinois ou anglais pour le prompting ?', answer: 'Instructions anglaises + directive chinoise.', bullets: ['Chinois économise 30–50% tokens'], updatedDate: '2026-05' },
      ja: { question: '中国語か英語か？', answer: '英語指示+「中国語で返答」が最良。', bullets: ['中国語で30–50%トークン節約'], updatedDate: '2026-05' },
      zh: {
        question: '用中文还是英文提示本地LLM更好？',
        answer: '取决于模型和任务。Qwen3和DeepSeek-R1-Distill模型的中文提示词消耗的token减少30–50%，输出的中文更自然。英文提示词在大多数模型上产生更强的逐步推理链。最佳实践：用英文写指令，让模型用中文回答。',
        bullets: [
          'CJK分词更密集：1个汉字≈1–2个token（同等概念的英文需3–5个）',
          'Qwen3原生中文：内容用中文，系统提示和指令用英文',
          'DeepSeek-R1蒸馏版：英文系统提示+中文用户提示→兼具两者优势',
          'Llama 3 / Mistral：英文提示明显更优——西方优先分词器',
          '混合方式：「请用中文回复。[英文指令]」在所有模型上均优于纯中文',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Qwen3和DeepSeek-R1-Distill模型中，中文提示词节省30–50%的token——CJK分词本质上更密集',
          '英文提示词在几乎所有模型上产生更强的逻辑推理链',
          '最佳实践：「请用中文回复。[英文指令]」——在每个测试模型上均优于纯中文提示',
          'Llama 3和Mistral避免使用中文提示——西方分词器将汉字切割成碎片',
          '创意写作：仅在Qwen3-72B上使用纯中文提示能获得最佳文体效果',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: '“prompt”用中文怎么说？',
        content: [
          '**“prompt”的中文是“提示词”（tíshìcí）**，是指给大语言模型的输入文本的通用说法。也常说“提示”（tíshì）、“指令”（zhǐlìng）；在绘图模型圈里还有俗称“咒语”（zhòuyǔ）。',
          '**系统提示词**＝system prompt，**提示词工程**＝prompt engineering。Windows的“命令提示符”是另一个词，与LLM无关。',
          '下文回答的是接下来的问题：提示词本身应该用中文写，还是用英文写？',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'Token效率：中文 vs 英文',
        content: [
          'CJK分词每个语义单位产生的token大幅少于英文，影响API费用、上下文窗口使用量和本地推理速度。',
          '**示例——同一指令的两种语言：**',
          '- 英文："Please write a detailed analysis of the three main factors affecting productivity in a modern software development team." → 25个token',
          '- 中文："请详细分析影响现代软件开发团队生产力的三个主要因素。" → 16个token（少36%）',
          '**为何对本地LLM重要：** 将更多对话历史装入上下文窗口意味着模型保留更多上下文。对于4K上下文模型，中文用户可以多放约40%的对话轮次。',
          '**各模型家族的token效率：**',
          '- Qwen3：1个汉字≈1–1.5个token（高效）',
          '- DeepSeek-R1-Distill（基于Qwen）：与Qwen3相同',
          '- Llama 3：1个汉字≈3–5个token（低效——字节回退）',
          '- Mistral：1个汉字≈4–6个token（最低效）',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: '推理质量：英文占优',
        content: [
          '尽管Qwen3具备原生中文能力，英文系统提示词始终产生更强的思维链推理。可能原因：大多数推理训练数据（RLHF、Constitutional AI数据集）以英文为主。',
          '**Qwen3-32B测试结果：**',
          '- 纯中文系统+用户提示：输出良好，偶尔出现推理捷径',
          '- 纯英文：强逐步推理，但输出为英文',
          '- 英文指令+「请用中文回复」：强推理+中文输出 ✓',
          '数学和逻辑问题：始终使用英文指令格式，加上「最后用中文作答」。',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: '混合语言提示技巧',
        content: [
          '**最佳系统提示模板：**',
          '`You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering.`',
          '**用户提示：** 用中文自然地写问题。',
          '**效果：** 模型在内部用英文（或混合语言）生成推理，然后输出流畅的中文。',
          '**创意写作：** 在Qwen3-72B上使用纯中文提示词能获得最佳文体风格。例："写一首关于月亮的现代诗，不超过20行。"',
          '**技术任务（代码生成）：** 即使在Qwen3-Coder上也使用英文提示词。代码和技术文档以英文训练数据为主。',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '各模型提示策略',
        content: [
          '**Qwen3 8B/14B/32B：** 最佳原生中文支持。推理密集型任务使用英文系统提示。',
          '**DeepSeek-R1-Distill（所有规格）：** 两种语言均表现强劲。英文系统提示+中文用户查询是最优设置。',
          '**Llama 3 8B/70B：** 避免中文提示。分词器将汉字切割为字节token——回复往往中文生硬或出现幻觉。使用英文并明确要求中文输出。',
          '**Mistral Small：** 中文支持最弱。坚持使用英文提示。',
          '**ChatGLM4（Ollama本地运行）：** 专为中文设计——原生CJK分词，中文创意写作输出最佳。英文推理较弱。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
            { q: '“prompt”的中文是什么？', a: '“提示词”（tíshìcí）是LLM提示的通用中文说法，也常用“提示”（tíshì）和“指令”（zhǐlìng）；绘图模型圈里俗称“咒语”（zhòuyǔ）。' },
            { q: '中文比英文更省token吗？', a: '取决于分词器。在Qwen系列模型上，同样内容中文大约少用30–50%的token；在Llama 3和Mistral上则相反，一个汉字要消耗3–6个token，英文反而更省。' },
            { q: '中文提示能节省API费用吗？', a: '能，显著节省。Qwen系模型中，同等内容的中文token比英文少30–50%。' },
            { q: '同一提示中可以混用中英文吗？', a: '可以。Qwen3和DeepSeek-R1-Distill能很好地处理双语混合提示。' },
            { q: '系统提示应该使用哪种语言？', a: '英文，即使在Qwen3这样的中文原生模型上。英文系统提示始终产生更好的指令遵从。' },
            { q: '繁体字和简体字有什么区别？', a: 'Qwen3两者都支持。指定"请使用繁体中文回答"使用繁体，"请使用简体中文回答"使用简体。' },
            { q: '本地LLM中文还是英文提示更好？', a: '英文指令+「请用中文回复」最优。中文节省30–50% token；英文产生更强推理链。' },
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[SillyTavern中文角色扮演设置](/zh/prompt-bites/sillytavern-chinese-roleplay-setup) — Qwen3 + SillyTavern：中文角色卡配置与提示词优化。',
          '[Qwen本地部署指南2026](/zh/local-llms/qwen-local-deployment-guide-2026) — 为中文创作场景优化本地Qwen3部署的完整指南。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地LLM中文vs英文提示词 2026',
      description: 'CJK分词在Qwen3上节省30–50% token。英文系统提示产生更强推理。推荐混合语言技巧。',
      url: 'https://www.promptquorum.com/zh/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'LLM提示词技巧' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
          {
            '@type': 'Question',
            'name': '“prompt”的中文是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '“提示词”（tíshìcí）是LLM提示的通用中文说法，也常用“提示”（tíshì）和“指令”（zhǐlìng）；绘图模型圈里俗称“咒语”（zhòuyǔ）。',
            },
          },
          {
            '@type': 'Question',
            'name': '中文比英文更省token吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '取决于分词器。在Qwen系列模型上，同样内容中文大约少用30–50%的token；在Llama 3和Mistral上则相反，一个汉字要消耗3–6个token，英文反而更省。',
            },
          },
          {
            '@type': 'Question',
            'name': '中文提示能节省API费用吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '能，显著节省。Qwen系模型中，同等内容的中文token比英文少30–50%。',
            },
          },
          {
            '@type': 'Question',
            'name': '同一提示中可以混用中英文吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以。Qwen3和DeepSeek-R1-Distill能很好地处理双语混合提示。',
            },
          },
          {
            '@type': 'Question',
            'name': '系统提示应该使用哪种语言？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '英文，即使在Qwen3这样的中文原生模型上。英文系统提示始终产生更好的指令遵从。',
            },
          },
          {
            '@type': 'Question',
            'name': '繁体字和简体字有什么区别？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3两者都支持。指定"请使用繁体中文回答"使用繁体，"请使用简体中文回答"使用简体。',
            },
          },
          {
            '@type': 'Question',
            'name': '本地LLM中文还是英文提示更好？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '英文指令+「请用中文回复」最优。中文节省30–50% token；英文产生更强推理链。',
            },
          },
        ],
    },
  },

  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-pt.webp',
    title: 'Prompts em chinês vs inglês: qual é melhor para LLMs locais?',
    seoTitle: 'Prompt em chinês (提示词) vs inglês 2026: tokens',
    metaDescription: '"Prompt" em chinês é 提示词 (tíshìcí). Prompts em chinês usam 30–50% menos tokens no Qwen3; o inglês raciocina melhor. Guia de prompting por modelo.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Usuários bilíngues chinês-inglês executando LLMs locais',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Chinese or English prompting?', answer: 'English instructions + Chinese reply directive is best on all models.', bullets: ['Chinese saves 30–50% tokens on Qwen3', 'English produces better reasoning chains'], updatedDate: '2026-05' },
      de: { question: 'Chinesisch oder Englisch?', answer: 'Englische Anweisungen + Chinesisch-Direktive ist am besten.', bullets: ['Chinesisch spart 30–50% Tokens'], updatedDate: '2026-05' },
      fr: { question: 'Prompting chinois ou anglais ?', answer: 'Instructions en anglais + directive chinoise est optimal.', bullets: ['Chinois économise 30–50% tokens'], updatedDate: '2026-05' },
      ja: { question: '中国語か英語か？', answer: '英語指示+「中国語で返答」が最良。', bullets: ['中国語で30–50%トークン節約'], updatedDate: '2026-05' },
      zh: { question: '中文还是英文提示更好？', answer: '英文指令+「请用中文回复」在所有模型上最优。', bullets: ['中文节省30–50% token'], updatedDate: '2026-05' },
      pt: {
        question: 'É melhor fazer prompts para LLMs locais em chinês ou em inglês?',
        answer: 'Instruções em inglês + diretiva "responda em chinês" é a melhor configuração em todos os modelos. Prompts em chinês economizam 30–50% de tokens no Qwen3. Prompts em inglês produzem cadeias de raciocínio mais fortes.',
        bullets: [
          'Tokenização CJK: 30–50% menos tokens no Qwen3',
          'System prompts em inglês → melhor raciocínio',
          'Llama 3 / Mistral: prompting em inglês significativamente melhor',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Prompts em chinês economizam 30–50% de tokens no Qwen3 e DeepSeek-R1-Distill — a tokenização CJK é inerentemente mais densa',
          'Prompts em inglês produzem cadeias de raciocínio lógico mais fortes em quase todos os modelos',
          'Melhor prática: "Por favor responda em chinês. [Instruções em inglês]" — supera o chinês puro em todos os modelos testados',
          'Evite prompts em chinês com Llama 3 e Mistral — seus tokenizadores ocidentais fragmentam os caracteres chineses',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: 'O que significa "prompt" em chinês?',
        content: [
          '**"Prompt" em chinês é 提示词 (tíshìcí)** — o termo padrão para o texto que você envia a um LLM. Também se usam 提示 (tíshì, "dica") e 指令 (zhǐlìng, "instrução") e, em geradores de imagem, a gíria 咒语 (zhòuyǔ, "feitiço").',
          '**Prompt de sistema** = 系统提示词 (xìtǒng tíshìcí). **Engenharia de prompt** = 提示词工程 (tíshìcí gōngchéng). O **prompt de comando** do Windows é outro termo: 命令提示符.',
          'O restante responde à pergunta seguinte: o prompt em si deve ser escrito em chinês ou em inglês?',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'Eficiência de tokens: chinês vs inglês',
        content: [
          'A tokenização CJK produz dramaticamente menos tokens por unidade de significado.',
          '**Exemplo:** Mesma instrução em inglês: ~25 tokens; em chinês: ~16 tokens (36% a menos)',
          '**Eficiência por família de modelo:** Qwen3: 1 caractere chinês ≈ 1–1,5 tokens; Llama 3: 1 caractere ≈ 3–5 tokens (ineficiente)',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: 'Qualidade do raciocínio: o inglês tem vantagem',
        content: [
          'Apesar da capacidade nativa em chinês do Qwen3, system prompts em inglês produzem consistentemente cadeias de raciocínio mais fortes.',
          '**Melhor combinação:** System prompt em inglês + "responda em chinês" no prompt do usuário.',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: 'Técnica de prompting em múltiplos idiomas',
        content: [
          '**Template de system prompt (funciona melhor):**',
          '`You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering.`',
          '**Para escrita criativa:** Prompts apenas em chinês no Qwen3-72B produzem os melhores resultados estilísticos.',
          '**Para tarefas técnicas (geração de código):** Use prompts em inglês mesmo com Qwen3-Coder.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Estratégia de prompting por modelo',
        content: [
          '**Qwen3 8B/14B/32B:** Melhor suporte nativo em chinês. Use system prompts em inglês para tarefas de raciocínio intensivo.',
          '**DeepSeek-R1-Distill (todos os tamanhos):** Forte em ambos os idiomas. System prompt em inglês + consulta do usuário em chinês é a configuração ideal.',
          '**Llama 3 8B/70B:** Evite prompts em chinês. O tokenizador fragmenta os caracteres chineses em bytes.',
          '**Mistral Small:** Suporte em chinês mais fraco. Mantenha prompts em inglês.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
            { q: 'Qual é a palavra chinesa para "prompt"?', a: '提示词 (tíshìcí) é o termo padrão para um prompt de LLM. 提示 (tíshì) e 指令 (zhǐlìng, "instrução") também são usados; 咒语 (zhòuyǔ, "feitiço") é gíria para prompts de imagem.' },
            { q: 'O chinês é mais eficiente em tokens do que o inglês?', a: 'Depende do tokenizador. Em modelos Qwen, o chinês usa cerca de 30–50% menos tokens para o mesmo conteúdo. No Llama 3 e no Mistral é o contrário: um caractere chinês custa 3 a 6 tokens, então o inglês sai mais barato.' },
            { q: 'Prompting em chinês economiza dinheiro em chamadas de API?', a: 'Sim, significativamente. Os tokens em chinês são 30–50% menos para o mesmo conteúdo em modelos da família Qwen.' },
            { q: 'Posso misturar chinês e inglês no mesmo prompt?', a: 'Sim. Prompts em dois idiomas são bem tratados pelo Qwen3 e DeepSeek-R1-Distill.' },
            { q: 'Qual idioma devo usar para os system prompts?', a: 'Inglês, mesmo em modelos nativos em chinês como o Qwen3. System prompts em inglês produzem consistentemente melhor seguimento de instruções.' },
            { q: 'E o chinês tradicional vs simplificado?', a: 'Qwen3 lida com ambos. Especifique "請使用繁體中文回答" para tradicional ou "请使用简体中文回答" para simplificado.' },
            { q: 'É melhor o prompting em chinês ou em inglês para LLMs locais?', a: 'Instruções em inglês + diretiva em chinês é o ideal. O chinês economiza 30–50% de tokens; o inglês produz melhor raciocínio.' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompts em chinês vs inglês para LLMs locais 2026',
      description: 'Tokenização CJK: 30–50% menos tokens no Qwen3. System prompts em inglês para melhor raciocínio. Técnica mista recomendada.',
      url: 'https://www.promptquorum.com/pt/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'Técnicas de prompting para LLMs' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
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
            'name': 'Qual é a palavra chinesa para "prompt"?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词 (tíshìcí) é o termo padrão para um prompt de LLM. 提示 (tíshì) e 指令 (zhǐlìng, "instrução") também são usados; 咒语 (zhòuyǔ, "feitiço") é gíria para prompts de imagem.',
            },
          },
          {
            '@type': 'Question',
            'name': 'O chinês é mais eficiente em tokens do que o inglês?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Depende do tokenizador. Em modelos Qwen, o chinês usa cerca de 30–50% menos tokens para o mesmo conteúdo. No Llama 3 e no Mistral é o contrário: um caractere chinês custa 3 a 6 tokens, então o inglês sai mais barato.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Prompting em chinês economiza dinheiro em chamadas de API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim, significativamente. Os tokens em chinês são 30–50% menos para o mesmo conteúdo em modelos da família Qwen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Posso misturar chinês e inglês no mesmo prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sim. Prompts em dois idiomas são bem tratados pelo Qwen3 e DeepSeek-R1-Distill.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Qual idioma devo usar para os system prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Inglês, mesmo em modelos nativos em chinês como o Qwen3. System prompts em inglês produzem consistentemente melhor seguimento de instruções.',
            },
          },
          {
            '@type': 'Question',
            'name': 'E o chinês tradicional vs simplificado?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 lida com ambos. Especifique "請使用繁體中文回答" para tradicional ou "请使用简体中文回答" para simplificado.',
            },
          },
          {
            '@type': 'Question',
            'name': 'É melhor o prompting em chinês ou em inglês para LLMs locais?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Instruções em inglês + diretiva em chinês é o ideal. O chinês economiza 30–50% de tokens; o inglês produz melhor raciocínio.',
            },
          },
        ],
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-es.webp',
    title: 'Prompts en chino vs inglés: ¿cuál es mejor para LLMs locales?',
    seoTitle: 'Prompt en chino (提示词) vs inglés 2026: tokens',
    metaDescription: '"Prompt" en chino es 提示词 (tíshìcí). Los prompts en chino usan 30–50% menos tokens en Qwen3; el inglés razona mejor. Guía de prompting por modelo.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios bilingües chino-inglés que ejecutan LLMs locales',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      en: { question: 'Chinese or English prompting?', answer: 'English instructions + Chinese reply directive is best on all models.', bullets: ['Chinese saves 30–50% tokens on Qwen3', 'English produces better reasoning chains'], updatedDate: '2026-05' },
      de: { question: 'Chinesisch oder Englisch?', answer: 'Englische Anweisungen + Chinesisch-Direktive ist am besten.', bullets: ['Chinesisch spart 30–50% Tokens'], updatedDate: '2026-05' },
      fr: { question: 'Prompting chinois ou anglais ?', answer: 'Instructions en anglais + directive chinoise est optimal.', bullets: ['Chinois économise 30–50% tokens'], updatedDate: '2026-05' },
      ja: { question: '中国語か英語か？', answer: '英語指示+「中国語で返答」が最良。', bullets: ['中国語で30–50%トークン節約'], updatedDate: '2026-05' },
      zh: { question: '中文还是英文提示更好？', answer: '英文指令+「请用中文回复」在所有模型上最优。', bullets: ['中文节省30–50% token'], updatedDate: '2026-05' },
      es: {
        question: '¿Es mejor hacer prompts a LLMs locales en chino o en inglés?',
        answer: 'Instrucciones en inglés + directiva "responde en chino" es la mejor configuración en todos los modelos. Los prompts en chino ahorran 30–50% de tokens en Qwen3. Los prompts en inglés producen mejores cadenas de razonamiento.',
        bullets: [
          'Tokenización CJK: 30–50% menos tokens en Qwen3',
          'System prompts en inglés → mejor razonamiento',
          'Llama 3 / Mistral: prompting en inglés significativamente mejor',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Los prompts en chino ahorran 30–50% de tokens en Qwen3 y DeepSeek-R1-Distill — la tokenización CJK es inherentemente más densa',
          'Los prompts en inglés producen cadenas de razonamiento lógico más fuertes en casi todos los modelos',
          'Mejor práctica: "Por favor responde en chino. [Instrucciones en inglés]" — supera al chino puro en todos los modelos testeados',
          'Evita prompts en chino con Llama 3 y Mistral — sus tokenizadores occidentales fragmentan los caracteres chinos',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: '¿Qué significa "prompt" en chino?',
        content: [
          '**"Prompt" en chino es 提示词 (tíshìcí)**, el término estándar para el texto que se da a un LLM. También se usan 提示 (tíshì, "pista") y 指令 (zhǐlìng, "instrucción") y, en generadores de imágenes, la jerga 咒语 (zhòuyǔ, "hechizo").',
          '**Prompt de sistema** = 系统提示词 (xìtǒng tíshìcí). **Ingeniería de prompts** = 提示词工程 (tíshìcí gōngchéng). El **símbolo del sistema** de Windows es otro término: 命令提示符.',
          'Lo que sigue responde a la pregunta siguiente: ¿el prompt debe escribirse en chino o en inglés?',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'Eficiencia de tokens: chino vs inglés',
        content: [
          'La tokenización CJK produce dramáticamente menos tokens por unidad de significado.',
          '**Ejemplo:** Misma instrucción en inglés: ~25 tokens; en chino: ~16 tokens (36% menos)',
          '**Eficiencia por familia de modelo:** Qwen3: 1 carácter chino ≈ 1–1.5 tokens; Llama 3: 1 carácter ≈ 3–5 tokens (ineficiente)',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: 'Calidad del razonamiento: el inglés tiene ventaja',
        content: [
          'A pesar de la capacidad nativa en chino de Qwen3, los system prompts en inglés producen consistentemente cadenas de razonamiento más fuertes.',
          '**Mejor combinación:** System prompt en inglés + "responde en chino" en el prompt de usuario.',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: 'Técnica de prompting en múltiples idiomas',
        content: [
          '**Plantilla de system prompt (funciona mejor):**',
          '`You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering.`',
          '**Para escritura creativa:** Los prompts solo en chino en Qwen3-72B producen los mejores resultados estilísticos.',
          '**Para tareas técnicas (generación de código):** Usa prompts en inglés incluso con Qwen3-Coder.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Estrategia de prompting por modelo',
        content: [
          '**Qwen3 8B/14B/32B:** Mejor soporte nativo en chino. Usa system prompts en inglés para tareas de razonamiento intensivo.',
          '**DeepSeek-R1-Distill (todos los tamaños):** Fuerte en ambos idiomas. System prompt en inglés + consulta de usuario en chino es la configuración óptima.',
          '**Llama 3 8B/70B:** Evita prompts en chino. El tokenizador fragmenta los caracteres chinos en bytes.',
          '**Mistral Small:** Soporte en chino más débil. Mantente con prompts en inglés.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
            { q: '¿Cuál es la palabra china para "prompt"?', a: '提示词 (tíshìcí) es el término estándar para un prompt de LLM. También se usan 提示 (tíshì) y 指令 (zhǐlìng, "instrucción"); 咒语 (zhòuyǔ, "hechizo") es jerga para prompts de imágenes.' },
            { q: '¿Es el chino más eficiente en tokens que el inglés?', a: 'Depende del tokenizador. En modelos Qwen, el chino usa aproximadamente 30–50% menos tokens para el mismo contenido. En Llama 3 y Mistral ocurre lo contrario: un carácter chino cuesta 3–6 tokens, así que el inglés sale más barato.' },
            { q: '¿El prompting en chino ahorra dinero en llamadas a la API?', a: 'Sí, significativamente. Los tokens en chino son 30–50% menos para el mismo contenido en modelos de la familia Qwen.' },
            { q: '¿Puedo mezclar chino e inglés en el mismo prompt?', a: 'Sí. Los prompts en dos idiomas los maneja bien Qwen3 y DeepSeek-R1-Distill.' },
            { q: '¿Qué idioma debo usar para los system prompts?', a: 'Inglés, incluso en modelos nativos en chino como Qwen3. Los system prompts en inglés producen consistentemente mejor seguimiento de instrucciones.' },
            { q: '¿Qué hay del chino tradicional vs simplificado?', a: 'Qwen3 maneja ambos. Especifica "请使用繁体中文回答" para tradicional o "请使用简体中文回答" para simplificado.' },
            { q: '¿Es mejor el prompting en chino o en inglés para LLMs locales?', a: 'Instrucciones en inglés + directiva en chino es óptimo. El chino ahorra 30–50% de tokens; el inglés produce mejor razonamiento.' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompts en chino vs inglés para LLMs locales 2026',
      description: 'Tokenización CJK: 30–50% menos tokens en Qwen3. System prompts en inglés para mejor razonamiento. Técnica mixta recomendada.',
      url: 'https://www.promptquorum.com/es/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'Técnicas de prompting para LLMs' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
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
            'name': '¿Cuál es la palabra china para "prompt"?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词 (tíshìcí) es el término estándar para un prompt de LLM. También se usan 提示 (tíshì) y 指令 (zhǐlìng, "instrucción"); 咒语 (zhòuyǔ, "hechizo") es jerga para prompts de imágenes.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Es el chino más eficiente en tokens que el inglés?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Depende del tokenizador. En modelos Qwen, el chino usa aproximadamente 30–50% menos tokens para el mismo contenido. En Llama 3 y Mistral ocurre lo contrario: un carácter chino cuesta 3–6 tokens, así que el inglés sale más barato.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿El prompting en chino ahorra dinero en llamadas a la API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, significativamente. Los tokens en chino son 30–50% menos para el mismo contenido en modelos de la familia Qwen.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Puedo mezclar chino e inglés en el mismo prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Los prompts en dos idiomas los maneja bien Qwen3 y DeepSeek-R1-Distill.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué idioma debo usar para los system prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Inglés, incluso en modelos nativos en chino como Qwen3. Los system prompts en inglés producen consistentemente mejor seguimiento de instrucciones.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué hay del chino tradicional vs simplificado?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 maneja ambos. Especifica "请使用繁体中文回答" para tradicional o "请使用简体中文回答" para simplificado.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Es mejor el prompting en chino o en inglés para LLMs locales?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Instrucciones en inglés + directiva en chino es óptimo. El chino ahorra 30–50% de tokens; el inglés produce mejor razonamiento.',
            },
          },
        ],
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-ar.webp',
    title: 'الكتابة بالصينية مقابل الإنجليزية: أيهما أفضل لنماذج ⁨LLM⁩ المحلية؟',
    seoTitle: 'البرومبت بالصينية (提示词) مقابل الإنجليزية 2026: الرموز',
    metaDescription: 'كلمة «prompt» بالصينية هي 提示词 (tíshìcí). الأوامر الصينية توفّر 30–50% من الرموز على Qwen3، والإنجليزية أقوى استدلالًا. دليل عملي لكل نموذج LLM.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمون ثنائيو اللغة (صيني-إنجليزي) يشغّلون نماذج LLM محلية',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      ar: {
        question: 'هل الكتابة بالصينية أم بالإنجليزية أفضل لنماذج LLM المحلية؟',
        answer: 'التعليمات بالإنجليزية + توجيه "الرد بالصينية" هو الإعداد الأمثل على جميع النماذج. الأوامر الصينية توفّر 30–50% من الرموز على Qwen3. الأوامر الإنجليزية تُنتج سلاسل استدلال أقوى.',
        bullets: [
          'ترميز CJK: 30–50% رموزًا أقل على Qwen3',
          'نصوص النظام بالإنجليزية → استدلال أفضل',
          'Llama 3 / Mistral: الكتابة بالإنجليزية أفضل بشكل ملحوظ',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'الأوامر الصينية توفّر 30–50% من الرموز على Qwen3 وDeepSeek-R1-Distill — ترميز CJK أكثف بطبيعته',
          'الأوامر الإنجليزية تُنتج سلاسل استدلال منطقي أقوى على تقريبًا جميع النماذج',
          'أفضل ممارسة: "الرجاء الرد بالصينية. [تعليمات إنجليزية]" — يتفوّق على الصينية الخالصة في كل نموذج تم اختباره',
          'تجنّب الأوامر الصينية مع Llama 3 وMistral — محللاتها الغربية تُجزّئ الأحرف الصينية',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: 'ماذا تعني كلمة «prompt» بالصينية؟',
        content: [
          '**كلمة «prompt» بالصينية هي 提示词 (tíshìcí)**، وهو المصطلح القياسي للنص الذي تعطيه لنموذج لغوي. تُستخدم أيضًا 提示 (tíshì، «تلميح») و指令 (zhǐlìng، «تعليمة»)، وفي مولّدات الصور العامية 咒语 (zhòuyǔ، «تعويذة»).',
          '**موجّه النظام** = 系统提示词 (xìtǒng tíshìcí). **هندسة البرومبت** = 提示词工程 (tíshìcí gōngchéng). أما «موجّه الأوامر» في ويندوز فهو مصطلح آخر: 命令提示符.',
          'يجيب بقية المقال عن السؤال التالي: هل تُكتب التعليمة نفسها بالصينية أم بالإنجليزية؟',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: 'كفاءة الرموز: الصينية مقابل الإنجليزية',
        content: [
          'يُنتج ترميز CJK رموزًا أقل بشكل ملحوظ لكل وحدة معنى.',
          '**مثال:** نفس التعليمة بالإنجليزية: ~25 رمزًا؛ بالصينية: ~16 رمزًا (أقل بنسبة 36%)',
          '**الكفاءة حسب عائلة النموذج:** Qwen3: 1 حرف صيني ≈ 1–1.5 رمز؛ Llama 3: 1 حرف ≈ 3–5 رموز (غير فعّال)',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: 'جودة الاستدلال: الإنجليزية لها الأفضلية',
        content: [
          'رغم القدرة الصينية الأصلية لـ Qwen3، تُنتج نصوص النظام الإنجليزية باستمرار سلاسل تفكير متسلسل أقوى.',
          '**أفضل تركيبة:** نص النظام بالإنجليزية + "الرد بالصينية" في أمر المستخدم.',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: 'تقنية الكتابة متعددة اللغات',
        content: [
          '**قالب نص النظام (الأفضل أداءً):** `You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering.`',
          '**للكتابة الإبداعية:** الأوامر الصينية الخالصة على Qwen3-72B تُنتج أفضل النتائج الأسلوبية.',
          '**للمهام التقنية (توليد الكود):** استخدم الأوامر الإنجليزية حتى مع Qwen3-Coder.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'استراتيجية الكتابة حسب النموذج',
        content: [
          '**Qwen3 8B/14B/32B:** أفضل دعم صيني أصلي. استخدم نصوص نظام إنجليزية للمهام كثيفة الاستدلال.',
          '**DeepSeek-R1-Distill (جميع الأحجام):** قوي في كلتا اللغتين. نص النظام الإنجليزي + استعلام المستخدم بالصينية هو الإعداد الأمثل.',
          '**Llama 3 8B/70B:** تجنّب الأوامر الصينية. المحلّل يُجزّئ الأحرف الصينية إلى بايتات.',
          '**Mistral Small:** أضعف دعم للصينية. التزم بالأوامر الإنجليزية.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
            { q: 'ما الكلمة الصينية لـ«prompt»؟', a: '提示词 (tíshìcí) هو المصطلح القياسي لموجّه النموذج اللغوي. يُستخدم أيضًا 提示 (tíshì) و指令 (zhǐlìng، «تعليمة»)، ويُقال 咒语 (zhòuyǔ، «تعويذة») عامّيًا لموجّهات الصور.' },
            { q: 'هل الصينية أكثر كفاءة في الرموز من الإنجليزية؟', a: 'يعتمد ذلك على المُجزّئ. في نماذج Qwen تستخدم الصينية نحو 30–50% رموزًا أقل للمحتوى نفسه. أما في Llama 3 وMistral فالعكس: الحرف الصيني الواحد يكلّف 3–6 رموز، فتكون الإنجليزية أرخص.' },
            { q: 'هل الكتابة بالصينية توفّر المال في استدعاءات API؟', a: 'نعم، بشكل ملحوظ. الرموز الصينية أقل بنسبة 30–50% لنفس المحتوى على نماذج عائلة Qwen.' },
            { q: 'هل يمكنني مزج الصينية والإنجليزية في نفس الأمر؟', a: 'نعم. Qwen3 وDeepSeek-R1-Distill يتعاملان بشكل جيد مع الأوامر ثنائية اللغة.' },
            { q: 'ما اللغة التي يجب استخدامها لنصوص النظام؟', a: 'الإنجليزية، حتى على النماذج ذات الأصول الصينية كـ Qwen3. نصوص النظام الإنجليزية تُنتج باستمرار اتباعًا أفضل للتعليمات.' },
            { q: 'ما الفرق بين الصينية التقليدية والمبسّطة؟', a: 'Qwen3 يتعامل مع كليهما. حدّد "请使用繁体中文回答" للتقليدية أو "请使用简体中文回答" للمبسّطة.' },
            { q: 'هل الكتابة بالصينية أم الإنجليزية أفضل لنماذج LLM المحلية؟', a: 'التعليمات بالإنجليزية + توجيه بالصينية هو الأمثل. الصينية توفّر 30–50% من الرموز؛ الإنجليزية تُنتج استدلالًا أفضل.' },
          ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'الكتابة بالصينية مقابل الإنجليزية لنماذج LLM المحلية 2026',
      description: 'ترميز CJK: 30–50% رموزًا أقل على Qwen3. نصوص النظام الإنجليزية لاستدلال أفضل. يُوصى بالتقنية المختلطة.',
      url: 'https://www.promptquorum.com/ar/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'تقنيات الكتابة لنماذج LLM' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
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
            'name': 'ما الكلمة الصينية لـ«prompt»؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词 (tíshìcí) هو المصطلح القياسي لموجّه النموذج اللغوي. يُستخدم أيضًا 提示 (tíshì) و指令 (zhǐlìng، «تعليمة»)، ويُقال 咒语 (zhòuyǔ، «تعويذة») عامّيًا لموجّهات الصور.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل الصينية أكثر كفاءة في الرموز من الإنجليزية؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يعتمد ذلك على المُجزّئ. في نماذج Qwen تستخدم الصينية نحو 30–50% رموزًا أقل للمحتوى نفسه. أما في Llama 3 وMistral فالعكس: الحرف الصيني الواحد يكلّف 3–6 رموز، فتكون الإنجليزية أرخص.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل الكتابة بالصينية توفّر المال في استدعاءات API؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، بشكل ملحوظ. الرموز الصينية أقل بنسبة 30–50% لنفس المحتوى على نماذج عائلة Qwen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني مزج الصينية والإنجليزية في نفس الأمر؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. Qwen3 وDeepSeek-R1-Distill يتعاملان بشكل جيد مع الأوامر ثنائية اللغة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما اللغة التي يجب استخدامها لنصوص النظام؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'الإنجليزية، حتى على النماذج ذات الأصول الصينية كـ Qwen3. نصوص النظام الإنجليزية تُنتج باستمرار اتباعًا أفضل للتعليمات.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين الصينية التقليدية والمبسّطة؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 يتعامل مع كليهما. حدّد "请使用繁体中文回答" للتقليدية أو "请使用简体中文回答" للمبسّطة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل الكتابة بالصينية أم الإنجليزية أفضل لنماذج LLM المحلية؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'التعليمات بالإنجليزية + توجيه بالصينية هو الأمثل. الصينية توفّر 30–50% من الرموز؛ الإنجليزية تُنتج استدلالًا أفضل.',
            },
          },
        ],
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/chinese-prompting-vs-english-prompting-overview-hero-ko.webp',
    title: '중국어 vs 영어 프롬프팅: 로컬 LLM에는 어느 쪽이 더 낫습니까?',
    seoTitle: '중국어 프롬프트(提示词) vs 영어 2026: 토큰 효율',
    metaDescription: '프롬프트는 중국어로 提示词(tíshìcí)입니다. Qwen3에서 중국어 프롬프트는 토큰을 30–50% 절약하고, 영어는 추론이 더 강합니다. 모델별 가이드.',
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    educationalLevel: 'Intermediate',
    audience: '로컬 LLM을 실행하는 중국어-영어 이중 언어 사용자',
    parentArticle: '/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'qwen-coder-vs-deepseek-coder'],
    is_living_page: false,
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM 프롬프팅에는 중국어와 영어 중 어느 쪽이 더 낫습니까?',
        answer: '영어 지시문 + "중국어로 답하라"는 지시어 조합이 모든 모델에서 최적의 설정입니다. 중국어 프롬프트는 Qwen3에서 토큰을 30–50% 절약합니다. 영어 프롬프트는 더 강력한 추론 체인을 생성합니다.',
        bullets: [
          'CJK 토크나이징: Qwen3에서 30–50% 더 적은 토큰',
          '영어 시스템 프롬프트 → 더 나은 추론',
          'Llama 3 / Mistral: 영어 프롬프팅이 현저히 우수',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '중국어 프롬프트는 Qwen3 및 DeepSeek-R1-Distill에서 토큰을 30–50% 절약합니다 — CJK 토크나이징은 본질적으로 더 밀도가 높습니다',
          '영어 프롬프트는 거의 모든 모델에서 더 강력한 논리적 추론 체인을 생성합니다',
          '최적 방법: "중국어로 답하십시오. [영어 지시문]" — 테스트된 모든 모델에서 순수 중국어보다 우수합니다',
          'Llama 3 및 Mistral에서는 중국어 프롬프트를 피하십시오 — 서양권 토크나이저가 한자를 분절합니다',
        ],
      },
      promptMeaning: {
        id: 'prompt-meaning-in-chinese',
        title: '중국어로 "프롬프트"는 무엇인가요?',
        content: [
          '**"프롬프트"는 중국어로 提示词(tíshìcí)**입니다. LLM에 입력하는 텍스트를 가리키는 표준 용어이며, 提示(tíshì, "힌트")와 指令(zhǐlìng, "지시")도 쓰이고, 이미지 생성 AI에서는 속어로 咒语(zhòuyǔ, "주문")라고도 합니다.',
          '**시스템 프롬프트** = 系统提示词(xìtǒng tíshìcí), **프롬프트 엔지니어링** = 提示词工程(tíshìcí gōngchéng). 윈도우의 **명령 프롬프트**는 다른 용어인 命令提示符입니다.',
          '이후 내용은 프롬프트 자체를 중국어로 쓸지 영어로 쓸지에 대한 답입니다.',
        ],
      },
      tokenEfficiency: {
        id: 'token-efficiency',
        title: '토큰 효율성: 중국어 vs 영어',
        snippetBlocks: [
          { type: 'one-sentence', text: '중국어 CJK 토크나이징은 같은 내용에 대해 영어보다 토큰을 30–50% 더 적게 사용합니다.' },
          { type: 'plain-terms', text: 'AI 모델은 텍스트를 토큰이라는 단위로 처리합니다. 중국어 한자 하나가 하나의 토큰에 해당하는 경우가 많지만, 같은 의미의 영어 단어는 여러 토큰으로 분리될 수 있습니다. 이로 인해 중국어 프롬프트는 Qwen3 같은 모델에서 더 효율적입니다.' },
        ],
        content: [
          'CJK 토크나이징은 의미 단위당 훨씬 적은 토큰을 생성합니다.',
          '**예시:** 동일한 지시문: 영어 ~25 토큰; 중국어 ~16 토큰 (36% 감소)',
          '**모델 계열별 효율성:** Qwen3: 한자 1개 ≈ 1–1.5 토큰; Llama 3: 한자 1개 ≈ 3–5 토큰 (비효율적)',
        ],
      },
      reasoning: {
        id: 'reasoning-quality',
        title: '추론 품질: 영어의 우위',
        content: [
          'Qwen3의 중국어 네이티브 능력에도 불구하고, 영어 시스템 프롬프트는 일관되게 더 강력한 추론 체인을 생성합니다.',
          '**최적 조합:** 영어 시스템 프롬프트 + 사용자 프롬프트에 "중국어로 답하십시오".',
        ],
      },
      mixedTechnique: {
        id: 'mixed-language',
        title: '다중 언어 프롬프팅 기법',
        content: [
          '**시스템 프롬프트 템플릿 (최고 성능):**',
          '`You are a helpful assistant. Always respond in Simplified Chinese (简体中文). Think step by step before answering.`',
          '**창작 글쓰기의 경우:** Qwen3-72B에서 순수 중국어 프롬프트가 최상의 문체적 결과를 냅니다.',
          '**기술 작업(코드 생성)의 경우:** Qwen3-Coder에서도 영어 프롬프트를 사용하십시오.',
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '모델별 프롬프팅 전략',
        content: [
          '**Qwen3 8B/14B/32B:** 최고의 중국어 네이티브 지원. 추론 집약적 작업에는 영어 시스템 프롬프트를 사용하십시오.',
          '**DeepSeek-R1-Distill (모든 크기):** 두 언어 모두 강력합니다. 영어 시스템 프롬프트 + 중국어 사용자 쿼리가 최적 설정입니다.',
          '**Llama 3 8B/70B:** 중국어 프롬프트를 피하십시오. 토크나이저가 한자를 바이트 단위로 분절합니다.',
          '**Mistral Small:** 중국어 지원이 더 약합니다. 영어 프롬프트를 사용하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
            { q: '중국어로 "프롬프트"는 무엇인가요?', a: 'LLM 프롬프트의 표준 중국어는 提示词(tíshìcí)입니다. 提示(tíshì)와 指令(zhǐlìng, "지시")도 쓰이며, 이미지 생성에서는 속어로 咒语(zhòuyǔ, "주문")라고 합니다.' },
            { q: '중국어가 영어보다 토큰 효율이 좋은가요?', a: '토크나이저에 따라 다릅니다. Qwen 계열에서는 같은 내용에 중국어가 토큰을 약 30–50% 적게 씁니다. Llama 3와 Mistral에서는 반대로 한자 1자가 3–6토큰이라 영어가 더 저렴합니다.' },
            { q: '중국어 프롬프팅은 API 호출 비용을 절약합니까?', a: '네, 상당히 절약됩니다. Qwen 계열 모델에서 동일한 내용에 대해 중국어 토큰이 30–50% 더 적습니다.' },
            { q: '같은 프롬프트에 중국어와 영어를 혼합할 수 있습니까?', a: '네. Qwen3 및 DeepSeek-R1-Distill은 이중 언어 프롬프트를 잘 처리합니다.' },
            { q: '시스템 프롬프트에는 어떤 언어를 사용해야 합니까?', a: 'Qwen3 같은 중국어 네이티브 모델에서도 영어를 사용하십시오. 영어 시스템 프롬프트는 일관되게 더 나은 지시 준수를 보여줍니다.' },
            { q: '번체 중국어와 간체 중국어의 차이는 무엇입니까?', a: 'Qwen3은 두 가지 모두 처리합니다. 번체의 경우 "请使用繁体中文回答", 간체의 경우 "请使用简体中文回答"를 지정하십시오.' },
            { q: '로컬 LLM 프롬프팅에는 중국어와 영어 중 어느 쪽이 더 낫습니까?', a: '영어 지시문 + 중국어 지시어가 최적입니다. 중국어는 토큰을 30–50% 절약하고, 영어는 더 나은 추론을 생성합니다.' },
          ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기 자료',
        items: [
          '[로컬에서 Qwen3 실행 방법](/ko/prompt-bites/can-you-run-qwen3-on-ollama)',
          '[Qwen Coder vs DeepSeek Coder 비교](/ko/prompt-bites/qwen-coder-vs-deepseek-coder)',
          '[DeepSeek vs Qwen 로컬 비교 2026](/ko/power-local-llm/deepseek-vs-qwen-local-comparison-2026)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 LLM을 위한 중국어 vs 영어 프롬프팅 2026',
      description: 'CJK 토크나이징: Qwen3에서 30–50% 더 적은 토큰. 더 나은 추론을 위한 영어 시스템 프롬프트. 혼합 기법 권장.',
      url: 'https://www.promptquorum.com/ko/prompt-bites/chinese-prompting-vs-english-prompting',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'LLM 프롬프팅 기법' }],
      mentions: [{ '@type': 'SoftwareApplication', name: 'Qwen3' }, { '@type': 'SoftwareApplication', name: 'DeepSeek-R1' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: 'Prompt Bites', item: '[www.promptquorum.com/ko/prompt-bites](https://www.promptquorum.com/ko/prompt-bites)' },
        { '@type': 'ListItem', position: 3, name: '중국어 vs 영어 프롬프팅', item: '[www.promptquorum.com/ko/prompt-bites/chinese-prompting-vs-english-prompting](https://www.promptquorum.com/ko/prompt-bites/chinese-prompting-vs-english-prompting)' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
          {
            '@type': 'Question',
            'name': '중국어로 "프롬프트"는 무엇인가요?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'LLM 프롬프트의 표준 중국어는 提示词(tíshìcí)입니다. 提示(tíshì)와 指令(zhǐlìng, "지시")도 쓰이며, 이미지 생성에서는 속어로 咒语(zhòuyǔ, "주문")라고 합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '중국어가 영어보다 토큰 효율이 좋은가요?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '토크나이저에 따라 다릅니다. Qwen 계열에서는 같은 내용에 중국어가 토큰을 약 30–50% 적게 씁니다. Llama 3와 Mistral에서는 반대로 한자 1자가 3–6토큰이라 영어가 더 저렴합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '중국어 프롬프팅은 API 호출 비용을 절약합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '네, 상당히 절약됩니다. Qwen 계열 모델에서 동일한 내용에 대해 중국어 토큰이 30–50% 더 적습니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '같은 프롬프트에 중국어와 영어를 혼합할 수 있습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '네. Qwen3 및 DeepSeek-R1-Distill은 이중 언어 프롬프트를 잘 처리합니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '시스템 프롬프트에는 어떤 언어를 사용해야 합니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3 같은 중국어 네이티브 모델에서도 영어를 사용하십시오. 영어 시스템 프롬프트는 일관되게 더 나은 지시 준수를 보여줍니다.',
            },
          },
          {
            '@type': 'Question',
            'name': '번체 중국어와 간체 중국어의 차이는 무엇입니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Qwen3은 두 가지 모두 처리합니다. 번체의 경우 "请使用繁体中文回答", 간체의 경우 "请使用简体中文回答"를 지정하십시오.',
            },
          },
          {
            '@type': 'Question',
            'name': '로컬 LLM 프롬프팅에는 중국어와 영어 중 어느 쪽이 더 낫습니까?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '영어 지시문 + 중국어 지시어가 최적입니다. 중국어는 토큰을 30–50% 절약하고, 영어는 더 나은 추론을 생성합니다.',
            },
          },
        ],
    },
  },
}
