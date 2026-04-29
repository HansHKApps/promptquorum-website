// Prompting Across Languages article
// Slug: prompting-across-languages
// Generated: 2026-04-29

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-29',
    theme: 'Use Cases by Vertical',
    title: 'Prompting Across Languages: How to Get Consistent Results',
    intro: 'LLMs were trained primarily on English — prompting in French, German, Japanese, or Arabic activates a different region of the model\'s knowledge, with lower accuracy and higher token costs. This guide explains how to structure prompts for consistent multilingual output, which models handle which languages best, and when to use English vs. native-language system prompts.',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    lastFactChecked: '2026-04-29',
    seoTitle: 'Multilingual Prompting: Get Consistent AI Results in Any Language',
    metaDescription: 'LLMs trained on ~46% English underperform in French, German, Japanese, Arabic. Learn which models handle each language best and how to write multilingual prompts.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers building multilingual LLM applications and prompt engineers working with non-English content',
    primaryTerm: 'Multilingual Prompting',
    aboutTopics: ['Multilingual Prompting', 'Cross-Lingual AI', 'Language-Specific Model Performance'],
    toc: [
      { label: 'Key Takeaways', anchor: 'key-takeaways' },
      { label: 'Quick Facts', anchor: 'quick-facts' },
      { label: 'Why Language Matters More Than You Think', anchor: 'why-language-matters' },
      { label: 'The 4-Tier Language Model', anchor: 'language-tiers' },
      { label: 'Token Costs by Script', anchor: 'token-costs' },
      { label: 'Should Your System Prompt Be in English?', anchor: 'system-prompt-language' },
      { label: 'Which Models Handle Which Languages Best?', anchor: 'model-matrix' },
      { label: 'Chain-of-Thought Prompting Across Languages', anchor: 'cot-language' },
      { label: 'Few-Shot Examples and Language Matching', anchor: 'few-shot-language' },
      { label: 'Formality, Register, and Honorifics', anchor: 'register-formality' },
      { label: 'Code-Switching: When Users Mix Languages', anchor: 'code-switching' },
      { label: 'Reusable Multilingual Prompt Templates', anchor: 'prompt-templates' },
      { label: 'How PromptQuorum Helps Multilingual Workflows', anchor: 'promptquorum-multilingual' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'How to Set Up a Multilingual Prompt Workflow', anchor: 'how-to-start' },
      { label: 'Regional Compliance & Data Considerations', anchor: 'regional-context' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompting-across-languages',
      inLanguage: 'en',
      headline: 'Prompting Across Languages: How to Get Consistent Results',
      description: 'LLMs were trained primarily on English — prompting in French, German, Japanese, or Arabic activates a different part of the model\'s knowledge with lower accuracy and higher token costs.',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      keywords: ['multilingual prompting', 'prompt engineering non-English', 'LLM language support', 'cross-lingual prompting', 'multilingual AI'],
      about: [
        { '@type': 'Thing', name: 'Multilingual Prompting' },
        { '@type': 'Thing', name: 'Cross-Lingual Reasoning' },
        { '@type': 'Thing', name: 'Language Tiers in LLMs' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
        { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
        { '@type': 'SoftwareApplication', name: 'Mistral Large 2' },
        { '@type': 'SoftwareApplication', name: 'Qwen2.5 72B' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompting-across-languages', width: 1200, height: 630 },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Should I write my prompt in English or the target language?', acceptedAnswer: { '@type': 'Answer', text: 'For structural reasoning tasks, write the system prompt in English. For tone and formality, write the user message and register instructions in the target language. See the "System Prompt Language" section for a full breakdown.' } },
        { '@type': 'Question', name: 'Why does AI perform worse in non-English languages?', acceptedAnswer: { '@type': 'Answer', text: 'LLM training datasets are dominated by English (~46% of CommonCrawl). Languages with <5% training share have fewer patterns for the model to draw on, producing higher error rates and less reliable instruction following.' } },
        { '@type': 'Question', name: 'Which AI model handles Japanese best?', acceptedAnswer: { '@type': 'Answer', text: 'Google Gemini 2.5 Pro consistently leads on Japanese, Korean, and Chinese (East Asian scripts). GPT-5.5 is a close second. Mistral Large 2 is not recommended for Japanese as a primary model.' } },
        { '@type': 'Question', name: 'How much more do Arabic prompts cost than English prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Arabic text uses approximately 46% more tokens than equivalent English content when tokenized with OpenAI\'s cl100k_base tokenizer. Budget accordingly for high-volume Arabic applications.' } },
        { '@type': 'Question', name: 'Do I need to translate my few-shot examples?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Few-shot examples should be in the same language as your expected output. Cross-language examples (English examples, French task) reduce accuracy by 15–20% in Tier 2–3 languages according to Shi et al. (2023).' } },
        { '@type': 'Question', name: 'What is cross-lingual chain-of-thought prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Cross-lingual CoT uses English for the reasoning steps but requests the final answer in the target language. For Tier 3 languages (Japanese, Arabic, Korean), this improves reasoning accuracy by 5–12% vs. prompting reasoning entirely in the target language.' } },
        { '@type': 'Question', name: 'How do I make an LLM use formal German (Sie-form)?', acceptedAnswer: { '@type': 'Answer', text: 'Add this to your system prompt: "Verwende ausschließlich die Sie-Form und einen professionellen Ton." Models default to mixed registers; this instruction is required to enforce Sie-form consistently.' } },
        { '@type': 'Question', name: 'What is code-switching in multilingual prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Code-switching occurs when a user writes in a mix of languages (e.g., German question with English technical terms). Without explicit instructions, models respond in whatever language they detect as dominant. Add to your system prompt: "If the user mixes languages, respond in [target language] throughout."' } },
        { '@type': 'Question', name: 'Can I use the same prompt template across all languages?', acceptedAnswer: { '@type': 'Answer', text: 'No. Each language tier requires a different strategy. Tier 1 (English) works with any prompt. Tier 2 (European languages) works with native-language prompts and English system instructions. Tier 3 (Asian, Arabic) requires cross-lingual CoT and native few-shot examples. Tier 4 (low-resource) requires retrieval-augmented generation rather than direct prompting.' } },
        { '@type': 'Question', name: 'How does PromptQuorum help with multilingual prompting?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum dispatches the same prompt to multiple models simultaneously (e.g., GPT-5.5, Gemini 2.5 Pro, Mistral Large 2) and returns side-by-side outputs. This lets you identify which model performs better on your specific language and task in one run, instead of testing models separately.' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'en',
      name: 'How to Set Up a Multilingual Prompt Workflow',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Identify language tier', text: 'Identify which language tier(s) your target language(s) fall into (Tier 1–4).' },
        { '@type': 'HowToStep', position: 2, name: 'Select the right model', text: 'Select the right model for each language (Mistral Large 2 for Romance, Gemini 2.5 Pro for East Asian, GPT-5.5 for Arabic).' },
        { '@type': 'HowToStep', position: 3, name: 'Write system prompt', text: 'Write an English system prompt with explicit language instruction: "Respond in formal German (Sie-form)."' },
        { '@type': 'HowToStep', position: 4, name: 'Prepare few-shot examples', text: 'Prepare few-shot examples in the target language (minimum 2, ideally 3).' },
        { '@type': 'HowToStep', position: 5, name: 'Test chain-of-thought', text: 'For Tier 3+ languages, test CoT: include "Think step by step in English, then respond in [language]."' },
        { '@type': 'HowToStep', position: 6, name: 'Compare model outputs', text: 'Run PromptQuorum multi-model dispatch to compare model outputs on your specific language task before committing to one model.' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'en',
      name: 'Best AI Models for Multilingual Prompting',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'GPT-5.5', description: 'Best for Arabic and general multilingual structured extraction' },
        { '@type': 'ListItem', position: 2, name: 'Gemini 2.5 Pro', description: 'Best for Japanese, Korean, and Chinese (East Asian scripts)' },
        { '@type': 'ListItem', position: 3, name: 'Mistral Large 2', description: 'Best for French, Spanish, and Italian business content' },
        { '@type': 'ListItem', position: 4, name: 'Claude Opus 4.7', description: 'Best for nuanced multilingual document analysis and tone matching' },
        { '@type': 'ListItem', position: 5, name: 'Qwen2.5 72B', description: 'Best open-source option for Chinese-primary workflows' },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LLMs perform best in English; non-English outputs have 5–15% higher error rates in Tier 3+ languages (Ahuja et al., 2023 MEGA benchmark).',
          'English system prompts + native-language user input outperforms native system prompts for structured tasks in Tier 2–3 languages.',
          '1,000 English words ≈ 1,300 tokens; the same content in Arabic ≈ 1,900 tokens — 46% more expensive in API cost.',
          'Mistral models (Mistral Large 2) lead on French/Italian/Spanish; Google Gemini 2.5 Pro leads on Japanese/Korean/Chinese; GPT-5.5 leads on Arabic.',
          'Few-shot examples must be in the target language — mismatched examples cut accuracy by ~20% (Shi et al., 2023).',
          'Always declare output language explicitly in the system prompt: "Respond in formal German (Sie-form)." — never assume the model will match the user\'s language.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**46%** of CommonCrawl training data is English; only 3% is Chinese, 5% is French, 6% is German.',
          '**1,900 tokens** needed for 1,000 words in Arabic (46% more than English); **900 tokens** for Chinese (31% less).',
          '**5–12%** accuracy improvement by using English chain-of-thought reasoning with native-language output (Tier 3 languages).',
          '**15–20%** accuracy drop when using English few-shot examples for non-English tasks (Shi et al., 2023).',
          '**Mistral Large 2** leads on Romance languages; **Gemini 2.5 Pro** leads on East Asian; **GPT-5.5** leads on Arabic.',
        ],
      },
      definition: {
        id: 'why-language-matters',
        title: 'Why Language Matters More Than You Think',
        content: [
          '**Multilingual prompting is not translation — it is activating a different part of the model\'s learned distribution.** LLMs tokenise and represent text in a shared embedding space, but training data is skewed: CommonCrawl (used to train most LLMs) is ~46% English, ~6% German, ~5% French, ~3% Chinese. Languages with <1% training share (e.g., most African languages, many South Asian languages) behave unpredictably.',
          'When you prompt in French, the model relies on patterns from French training data. Since French data is only ~5% of the training corpus, the model has fewer learned associations to draw from compared to English prompts. This manifests as: lower reasoning accuracy, inconsistent instruction following, higher hallucination rates, and unpredictable output quality.',
          'For a deeper dive into how LLMs actually learn language patterns, see [how LLMs actually work](/prompt-engineering/how-llms-actually-work).',
        ],
        snippets: [
          { type: 'in-plain-terms', text: 'Think of it this way: LLMs learned English from billions of books, websites, and articles. They learned French from millions. When you ask a question in French, the model has fewer examples to draw from, so it makes more mistakes — just like you would solving math problems in a language you\'ve only studied for a few weeks versus one you\'ve spoken your whole life.' },
        ],
      },
      languageTiers: {
        id: 'language-tiers',
        title: 'The 4-Tier Language Model',
        content: [
          '**Language performance in LLMs follows a four-tier hierarchy based on training data share, with Tier 1 (English) performing near-perfectly and Tier 4 (low-resource languages) producing unreliable outputs.** Use the tier system to decide which strategies apply to your target language.',
        ],
        columns: ['Tier', 'Languages', 'Training Share (approx.)', 'Recommended Strategy'],
        rows: [
          { 'Tier': 'Tier 1', 'Languages': 'English', 'Training Share (approx.)': '~46%', 'Recommended Strategy': 'Prompt directly, any technique works' },
          { 'Tier': 'Tier 2', 'Languages': 'French, German, Spanish, Portuguese, Italian', 'Training Share (approx.)': '5–8% each', 'Recommended Strategy': 'Native-language user prompts, English system prompt for structure' },
          { 'Tier': 'Tier 3', 'Languages': 'Chinese, Japanese, Korean, Arabic, Russian', 'Training Share (approx.)': '2–4% each', 'Recommended Strategy': 'English CoT + native output, test outputs rigorously' },
          { 'Tier': 'Tier 4', 'Languages': 'Most other languages', 'Training Share (approx.)': '<1%', 'Recommended Strategy': 'Use RAG with pre-verified content; avoid generative outputs without human review' },
        ],
        tableFormat: true,
        snippets: [
          { type: 'in-one-sentence', text: 'Higher training data share = more learned patterns = more reliable outputs; Tier 1 (English) is ~46% of training, Tier 2 (European) is ~5–8%, Tier 3 (Asian/Arabic) is ~2–4%, Tier 4 (<1%) requires retrieval-augmented generation.' },
        ],
      },
      tokenCosts: {
        id: 'token-costs',
        title: 'Token Costs by Script',
        content: [
          '**The same 1,000-word piece of content costs 46% more tokens in Arabic than in English, and 30% more in Japanese — directly increasing your API bill.** Token efficiency varies dramatically by script and language family. This affects both API costs and context window budgeting.',
          'See [tokens, costs, and limits](/prompt-engineering/tokens-costs-limits) for a detailed breakdown of how to budget tokens in your multilingual workflows.',
        ],
        columns: ['Language', 'Script', 'Tokens (approx.)', 'vs. English', 'API Cost Multiplier'],
        rows: [
          { 'Language': 'English', 'Script': 'Latin', 'Tokens (approx.)': '~1,300', 'vs. English': 'baseline', 'API Cost Multiplier': '1.0×' },
          { 'Language': 'German', 'Script': 'Latin', 'Tokens (approx.)': '~1,500', 'vs. English': '+15%', 'API Cost Multiplier': '1.15×' },
          { 'Language': 'French', 'Script': 'Latin', 'Tokens (approx.)': '~1,450', 'vs. English': '+12%', 'API Cost Multiplier': '1.12×' },
          { 'Language': 'Spanish', 'Script': 'Latin', 'Tokens (approx.)': '~1,400', 'vs. English': '+8%', 'API Cost Multiplier': '1.08×' },
          { 'Language': 'Russian', 'Script': 'Cyrillic', 'Tokens (approx.)': '~1,700', 'vs. English': '+31%', 'API Cost Multiplier': '1.31×' },
          { 'Language': 'Chinese (Simplified)', 'Script': 'CJK', 'Tokens (approx.)': '~900', 'vs. English': '−31%', 'API Cost Multiplier': '0.69×' },
          { 'Language': 'Japanese', 'Script': 'CJK + kana', 'Tokens (approx.)': '~1,100', 'vs. English': '−15%', 'API Cost Multiplier': '0.85×' },
          { 'Language': 'Korean', 'Script': 'Hangul', 'Tokens (approx.)': '~1,400', 'vs. English': '+8%', 'API Cost Multiplier': '1.08×' },
          { 'Language': 'Arabic', 'Script': 'Arabic', 'Tokens (approx.)': '~1,900', 'vs. English': '+46%', 'API Cost Multiplier': '1.46×' },
        ],
        tableFormat: true,
      },
      systemPromptLanguage: {
        id: 'system-prompt-language',
        title: 'Should Your System Prompt Be in English or the Target Language?',
        content: [
          '**For structural and reasoning tasks, English system prompts outperform native-language system prompts in Tier 2–3 languages. For tone and formality, native-language system prompts perform better.** This is the single most important decision in multilingual prompting — get it wrong and your outputs suffer.',
          'Why? Most instruction-following capability in LLMs was trained on English RLHF (Reinforcement Learning from Human Feedback) data. Complex system-level instructions (formatting rules, personas, chain-of-thought directives) are more reliably followed when written in English. English instructions are part of the model\'s core reasoning pathway.',
          'But style instructions (formality register, cultural tone, politeness level) are best written in the target language because they depend on understanding native speakers\' expectations for what "formal French" or "polite Japanese" actually means.',
          '**Decision tree:** Complex reasoning/formatting rules → English system prompt. Formality register (Sie, Vous, keigo) → target language. Persona definition → English + one target-language sample. Output language specification → always explicit in system prompt: "Respond in formal Japanese (丁寧語 / です・ます体)."',
          'For the full breakdown, see [system prompt vs. user prompt](/prompt-engineering/system-prompt-vs-user-prompt).',
        ],
        callouts: [
          { type: 'warning', label: 'Common Mistake', text: 'Writing both system prompt AND user instructions in the target language often reduces reasoning accuracy. Use English for logic, target language for tone.' },
          { type: 'tip', label: 'Pro Tip', text: 'Test both approaches (English system + English reasoning vs. English system + native reasoning) on your exact use case. Model behavior varies by language tier.' },
        ],
        mistakes: [
          { mistake: 'System prompt entirely in German: "Du bist ein Kundensupport-Assistent. Antworte auf Deutsch."', problem: 'Complex instructions (error handling, structure, logic) get lost in translation. Model struggles to follow formatting rules in low-resource language.', fix: 'Use English for system instructions: "You are a customer support assistant. Respond in German using formal Sie-form." Then include tone/register guidance in German.' },
        ],
      },
      modelMatrix: {
        id: 'model-matrix',
        title: 'Which Models Handle Which Languages Best?',
        content: [
          '**No single model leads across all languages. Mistral Large 2 leads on Romance languages; Google Gemini 2.5 Pro leads on East Asian languages; GPT-5.5 leads on Arabic and multilingual reasoning tasks.** This table aggregates model performance from Ahuja et al. (2023) MEGA benchmark.',
        ],
        columns: ['Model', 'Tier 2 (European)', 'Tier 3 (East Asian)', 'Arabic', 'Best Use Case'],
        rows: [
          { 'Model': 'GPT-5.5', 'Tier 2 (European)': '✅ Strong', 'Tier 3 (East Asian)': '✅ Strong', 'Arabic': '✅ Best', 'Best Use Case': 'General multilingual, structured extraction' },
          { 'Model': 'Claude Opus 4.7', 'Tier 2 (European)': '✅ Strong', 'Tier 3 (East Asian)': '✓ Good', 'Arabic': '✓ Good', 'Best Use Case': 'Document analysis, nuanced tone' },
          { 'Model': 'Gemini 2.5 Pro', 'Tier 2 (European)': '✓ Good', 'Tier 3 (East Asian)': '✅ Best', 'Arabic': '✓ Good', 'Best Use Case': 'Japanese/Korean/Chinese, translation' },
          { 'Model': 'Mistral Large 2', 'Tier 2 (European)': '✅ Best', 'Tier 3 (East Asian)': '⚠ Moderate', 'Arabic': '⚠ Moderate', 'Best Use Case': 'French/Spanish/Italian business content' },
          { 'Model': 'Qwen2.5 72B', 'Tier 2 (European)': '⚠ Moderate', 'Tier 3 (East Asian)': '✅ Strong', 'Arabic': '✓ Good', 'Best Use Case': 'Chinese-primary workflows (open-source)' },
          { 'Model': 'Llama 3.1 70B', 'Tier 2 (European)': '✓ Good', 'Tier 3 (East Asian)': '⚠ Moderate', 'Arabic': '⚠ Moderate', 'Best Use Case': 'European languages, budget option' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'tip', label: 'Pro Tip', text: 'Use PromptQuorum to test your exact prompt across all 6 models simultaneously. Side-by-side output comparison reveals which model performs best for your language + task combination.' },
          { type: 'insight', label: 'Did You Know?', text: 'Model performance varies not just by language, but by domain. A model might excel at Japanese technical translation but struggle with Japanese customer service tone.' },
        ],
      },
      cotLanguage: {
        id: 'cot-language',
        title: 'Chain-of-Thought Prompting Across Languages',
        content: [
          '**For Tier 3 languages, writing your chain-of-thought instruction in English but requesting the final answer in the target language improves reasoning accuracy by 5–12% (Shi et al., 2023).** This cross-lingual CoT technique exploits the model\'s English reasoning strength while preserving output quality in your target language.',
          'When LLMs reason step-by-step, they rely on patterns from their largest training corpus (English). If you force reasoning to occur entirely in a low-resource language like Japanese or Arabic, accuracy drops because the model has fewer learned reasoning patterns in that language. The hybrid approach — English CoT, native-language output — is best of both worlds.',
          '**Template:** `Think through this step by step in English, then write your final answer in Japanese. Question: [question]`',
          '**Decision:** Use English CoT when → task requires multi-step reasoning, target language is Tier 3+, accuracy matters more than latency. Use native-language CoT when → tone and register matter more than reasoning depth, target language is Tier 1–2.',
          'Deep dive: [Chain-of-thought prompting: how to get LLMs to show their work](/prompt-engineering/chain-of-thought-prompting).',
        ],
        callouts: [
          { type: 'warning', label: 'Caution', text: 'Cross-lingual CoT works for Tier 3 languages but may confuse models in Tier 4 languages. Always test on a small sample before committing to the approach.' },
          { type: 'practice', label: 'Best Practice', text: 'For maximum accuracy, combine cross-lingual CoT with few-shot examples: show the model a full example (English reasoning → Japanese answer) before giving it a new task.' },
        ],
      },
      fewShotLanguage: {
        id: 'few-shot-language',
        title: 'Few-Shot Examples and Language Matching',
        content: [
          '**Few-shot examples must be in the same language as the task — cross-language few-shot examples reduce output accuracy by 15–20% in Tier 2–3 languages (Shi et al., 2023).** Few-shot examples teach the model format, tone, and pattern. When examples are in English but the task is in French, the model receives conflicting signals.',
          '**Two strategies:** (1) Native few-shot — all examples in target language (best for quality). (2) Zero-shot + explicit instructions — no examples, but clear style/format rules in English (best when native examples are unavailable). Avoid mixing: English examples + French task = worst of both.',
          'See [few-shot vs. zero-shot prompting](/prompt-engineering/zero-shot-vs-few-shot) for the full decision framework.',
        ],
        callouts: [
          { type: 'insight', label: 'Key Point', text: 'Source language mismatch matters: English examples train the model on English formatting, then it must simultaneously switch languages and infer format — a dual cognitive load that degrades output.' },
        ],
      },
      registerFormality: {
        id: 'register-formality',
        title: 'Formality, Register, and Honorifics',
        content: [
          '**LLMs default to informal registers in most languages. If your use case requires formal German (Sie-form), formal Japanese (丁寧語), or French Vous-form, you must explicitly declare the register in your system prompt — models will not infer it from context.** This is often overlooked and causes outputs to sound wrong to native speakers.',
        ],
        columns: ['Language', 'LLM Default', 'Formal Override', 'Informal Override'],
        rows: [
          { 'Language': 'German', 'LLM Default': 'Mixed Sie/du', 'Formal Override': 'Verwende ausschließlich die Sie-Form.', 'Informal Override': 'Verwende die du-Form.' },
          { 'Language': 'French', 'LLM Default': 'Informal tu', 'Formal Override': 'Utilisez exclusivement le vouvoiement (Vous).', 'Informal Override': 'Utilise le tutoiement (tu).' },
          { 'Language': 'Japanese', 'LLM Default': 'ですます (polite)', 'Formal Override': 'Use 丁寧語 throughout.', 'Informal Override': 'Use plain form (だ体).' },
          { 'Language': 'Spanish', 'LLM Default': 'Mixed Usted/tú', 'Formal Override': 'Utilice exclusivamente el tratamiento de usted.', 'Informal Override': 'Usa el tuteo (tú).' },
          { 'Language': 'Korean', 'LLM Default': 'Mixed formal/informal', 'Formal Override': 'Use formal 합쇼체 throughout.', 'Informal Override': 'Use informal 해요체.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'practice', label: 'Best Practice', text: 'Test register enforcement on 3–5 sample outputs before deploying. Some models may drift to informal mid-response even with explicit instructions; if so, add a reminder: "Do not switch to informal register under any circumstances."' },
        ],
      },
      codeSwitching: {
        id: 'code-switching',
        title: 'Code-Switching: When Users Mix Languages',
        content: [
          '**When users mix languages in a prompt (e.g., English question with a German brand name or French code comment), most models respond in the dominant language of the query — but this is unreliable without explicit instruction.** Code-switching is common in multilingual workplaces where technical terms stay in English but surrounding prose is in another language.',
          '**Recommended handling:** (1) In system prompt: "When the user writes in mixed languages, respond in [target language] unless the question is explicitly in English." (2) Detect language programmatically (langdetect, FastText, lingua-rs) before routing to the model, rather than relying on the model to detect it. (3) For production multilingual apps: implement a language detection step before the LLM call to route to the correct prompt template.',
        ],
        callouts: [
          { type: 'warning', label: 'Warning', text: 'Do not rely on models to auto-detect the user\'s intended output language when code-switching occurs. Always include explicit language declaration in the system prompt or detect programmatically.' },
        ],
      },
      promptTemplates: {
        id: 'prompt-templates',
        title: 'Reusable Multilingual Prompt Templates',
        content: [
          'Four template patterns you can adapt for your own multilingual workflows. Copy and customize the [target language] placeholders for your use case.',
        ],
        numberedItems: [
          '**Language-aware system prompt:** "You are a [role] assistant for [Company]. Respond in [target language] using [formality register]. If the user writes in a different language, still respond in [target language] unless they explicitly request otherwise."',
          '**Cross-lingual CoT (for Tier 3 languages):** "Think through this step by step in English. Write your final answer in [Japanese/Arabic/Korean]."',
          '**Native few-shot header:** "Here are 2 examples of the expected output format in [language]:\nExample 1: [native-language example]\nExample 2: [native-language example]\nNow complete the following: [task]"',
          '**Register enforcement:** "Respond in formal [language]. Use [specific register instruction]. Do not switch to informal register regardless of how the user writes."',
        ],
      },
      promptquorumMultilingual: {
        id: 'promptquorum-multilingual',
        title: 'How PromptQuorum Helps Multilingual Workflows',
        content: [
          'PromptQuorum\'s multi-model dispatch lets you send the same multilingual prompt to GPT-5.5, Gemini 2.5 Pro, and Mistral Large 2 simultaneously and compare outputs side-by-side. This is the fastest way to identify which model handles your target language better for a specific task — instead of testing models separately and wasting API credits.',
          'Context overflow check alerts you when Arabic or Russian inputs (which use more tokens than equivalent English) approach context window limits, preventing silent quality degradation.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Assuming English prompt → native language output works without adjustment:** "Just translate your prompt" produces lower-quality results than rewriting it for the target language. Translated prompts often contain awkward phrasing that confuses the model.',
          '**Using English few-shot examples for non-English tasks:** Cross-language examples reduce accuracy 15–20%. Write or source native-language examples.',
          '**Not declaring output language explicitly:** Models will guess from context — and sometimes guess wrong. Always include "Respond in [language]" in the system prompt.',
          '**Ignoring token cost differences:** Arabic and Russian inputs consume 30–46% more tokens than English equivalents. Budget accordingly.',
          '**Testing only in English then assuming non-English will be equal quality:** Non-English outputs require separate evaluation. Use MGSM or XCOPA benchmarks to measure cross-lingual reasoning.',
          '**Forcing complex reasoning in Tier 4 languages:** For languages with <1% training share, generative tasks often produce confident-sounding wrong answers. Use retrieval (RAG) with pre-verified content instead.',
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'How to Set Up a Multilingual Prompt Workflow',
        numberedItems: [
          'Identify which language tier(s) your target language(s) fall into (Tier 1–4).',
          'Select the right model for each language (Mistral Large 2 for Romance, Gemini 2.5 Pro for East Asian, GPT-5.5 for Arabic).',
          'Write an English system prompt with explicit language instruction: "Respond in formal German (Sie-form)."',
          'Prepare few-shot examples in the target language (minimum 2, ideally 3).',
          'For Tier 3+ languages, test CoT: include "Think step by step in English, then respond in [language]."',
          'Run PromptQuorum multi-model dispatch to compare model outputs on your specific language task before committing to one model.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Regional Compliance & Data Considerations',
        content: [
          '**European Union (GDPR):** If processing French, German, or other EU-language data, ensure your LLM API meets GDPR Article 28 (Data Processing Agreement). Mistral Large 2 and Claude Opus 4.7 both offer EU-compliant deployments with data residency in Frankfurt/Ireland. GPT-5.5 requires data processing terms via OpenAI\'s Data Processing Agreement. Never send personally identifiable information (names, email, phone) to models without explicit consent and DPA coverage.',
          '**Japan (APPI):** Japanese enterprises deploying multilingual LLMs must comply with the Act on Protection of Personal Information (APPI). Gemini 2.5 Pro offers Japan-region deployment with data residency in Tokyo. GPT-5.5 and Claude Opus 4.7 require DPA terms. Consider local LLMs (Qwen2.5, Llama 3.1) deployed on-premises to guarantee data never leaves Japan.',
          '**China (Data Security Law):** Prompting in Chinese or Chinese user data triggers the 2021 Data Security Law (DSL). Foreign cloud LLMs (OpenAI, Anthropic, Google) cannot be used for sensitive PII or government workflows. Deploy Qwen2.5 locally via Alibaba Cloud or Baidu Cloud with data residency compliance. For non-sensitive use (marketing, customer chat), foreign APIs are acceptable but must have data transfer agreements in place.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Should I write my prompt in English or the target language?', a: 'For structural reasoning tasks, write the system prompt in English. For tone and formality, write the user message and register instructions in the target language.' },
          { q: 'Why does AI perform worse in non-English languages?', a: 'LLM training datasets are dominated by English (~46% of CommonCrawl). Languages with <5% training share have fewer patterns for the model to draw on, producing higher error rates.' },
          { q: 'Which AI model handles Japanese best?', a: 'Google Gemini 2.5 Pro consistently leads on Japanese, Korean, and Chinese. GPT-5.5 is a close second.' },
          { q: 'How much more do Arabic prompts cost than English prompts?', a: 'Arabic text uses approximately 46% more tokens than equivalent English content. Budget accordingly for high-volume Arabic applications.' },
          { q: 'Do I need to translate my few-shot examples?', a: 'Yes. Few-shot examples should be in the same language as your expected output. Cross-language examples reduce accuracy by 15–20%.' },
          { q: 'What is cross-lingual chain-of-thought prompting?', a: 'Cross-lingual CoT uses English for the reasoning steps but requests the final answer in the target language. For Tier 3 languages, this improves reasoning accuracy by 5–12%.' },
          { q: 'How do I make an LLM use formal German (Sie-form)?', a: 'Add to your system prompt: "Verwende ausschließlich die Sie-Form und einen professionellen Ton." Models default to mixed registers; this instruction is required to enforce Sie-form consistently.' },
          { q: 'What is code-switching in multilingual prompting?', a: 'Code-switching occurs when a user writes in a mix of languages. Without explicit instructions, models respond in whatever language they detect as dominant.' },
          { q: 'Can I use the same prompt template across all languages?', a: 'No. Each language tier requires a different strategy. Tier 1 works with any prompt. Tier 2–3 need language-specific CoT and few-shot strategies. Tier 4 requires RAG.' },
          { q: 'How does PromptQuorum help with multilingual prompting?', a: 'PromptQuorum dispatches the same prompt to multiple models simultaneously and returns side-by-side outputs. This lets you identify which model performs better on your specific language and task in one run.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[System Prompt vs. User Prompt: What Goes Where?](/prompt-engineering/system-prompt-vs-user-prompt?lang=en) — Understanding where language instructions should live',
          '[Tokens, Costs, and Limits: A Practical Guide](/prompt-engineering/tokens-costs-limits?lang=en) — Calculate token budget for non-English inputs',
          '[Chain-of-Thought Prompting: How to Get LLMs to Show Their Work](/prompt-engineering/chain-of-thought-prompting?lang=en) — Cross-lingual CoT techniques',
          '[Few-Shot vs. Zero-Shot Prompting: Which to Use When?](/prompt-engineering/zero-shot-vs-few-shot?lang=en) — Choosing examples strategy for multilingual tasks',
          '[Which AI Model Is Right for Your Task?](/prompt-engineering/gpt-claude-gemini-which-model?lang=en) — Model selection by language and task',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Shi et al., 2023. "Language Models Are Multilingual Chain-of-Thought Reasoners." arXiv:2210.03057](https://arxiv.org/abs/2210.03057) — MGSM benchmark: CoT performance across 10 languages; basis for cross-lingual CoT and few-shot language matching findings.',
          '[Ahuja et al., 2023. "MEGA: Multilingual Evaluation of Generative AI." arXiv:2303.12528](https://arxiv.org/abs/2303.12528) — 16 NLP tasks across 70 languages; basis for language tier error rate claims.',
          '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022](https://arxiv.org/abs/2201.11903) — Foundational CoT research; basis for CoT strategy recommendations.',
          '[OpenAI Tokenizer (tiktoken, cl100k_base)](https://platform.openai.com/tokenizer) — Basis for token count comparison table; estimates vary by tokenizer.',
          '[Muennighoff et al., 2023. "MTEB: Massive Text Embedding Benchmark." EACL 2023](https://arxiv.org/abs/2210.07316) — Multilingual embedding performance; supports model selection recommendations.',
        ],
      },
    },
  },
  de: {
    theme: 'Use Cases by Vertical',
    title: 'Prompting Über Sprachengrenzen: Konsistente Ergebnisse in jeder Sprache',
    intro: 'Sprachmodelle wurden hauptsächlich auf Englisch trainiert — Prompts auf Deutsch, Französisch, Japanisch oder Arabisch aktivieren einen anderen Teil des Modell-Wissens mit geringerer Genauigkeit und höheren Token-Kosten.',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    lastFactChecked: '2026-04-29',
    seoTitle: 'Mehrsprachiges Prompting: KI-Ergebnisse in jeder Sprache',
    metaDescription: 'Sprachmodelle performen schlecht auf Deutsch, Französisch, Japanisch und Arabisch. Erfahren Sie, welche Modelle welche Sprachen am besten beherrschen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    toc: [
      { label: 'Zusammenfassung', anchor: 'key-takeaways' },
      { label: 'Warum Sprache wichtiger ist als Sie denken', anchor: 'why-language-matters' },
      { label: 'Das 4-Ebenen-Sprachenmodell', anchor: 'language-tiers' },
      { label: 'Token-Kosten nach Schrift', anchor: 'token-costs' },
      { label: 'Sollte Ihr System-Prompt auf Englisch sein?', anchor: 'system-prompt-language' },
      { label: 'Welche Modelle können welche Sprachen am besten?', anchor: 'model-matrix' },
      { label: 'Chain-of-Thought über Sprachengrenzen', anchor: 'cot-language' },
      { label: 'Beispiele für mehrsprachiges Prompting', anchor: 'few-shot-language' },
      { label: 'Formale Register und Höflichkeit', anchor: 'register-formality' },
      { label: 'Code-Switching und gemischte Sprachen', anchor: 'code-switching' },
      { label: 'Häufige Fehler', anchor: 'common-mistakes' },
      { label: 'Anleitung zum Aufbau', anchor: 'how-to-start' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Weiterführende Ressourcen', anchor: 'related-reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompting-across-languages?lang=de',
      inLanguage: 'de',
      headline: 'Prompting Über Sprachengrenzen: Konsistente Ergebnisse in jeder Sprache',
      description: 'Sprachmodelle wurden hauptsächlich auf Englisch trainiert — Prompts auf anderen Sprachen zeigen niedrigere Genauigkeit und höhere Token-Kosten.',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Sollte mein Prompt auf Englisch oder Deutsch sein?', acceptedAnswer: { '@type': 'Answer', text: 'Für strukturierte Aufgaben: Englischer System-Prompt. Für Ton und Formalität: Deutscher Benutzer-Prompt und Register-Anweisungen.' } },
        { '@type': 'Question', name: 'Warum performt KI schlechter auf nicht-englischen Sprachen?', acceptedAnswer: { '@type': 'Answer', text: 'Trainingsdaten sind zu ~46% auf Englisch. Sprachen mit <5% Anteil haben weniger Muster zum Lernen.' } },
        { '@type': 'Question', name: 'Kostet ein deutschsprachiger Prompt mehr?', acceptedAnswer: { '@type': 'Answer', text: 'Deutsch benötigt etwa 15% mehr Tokens als Englisch. Arabisch benötigt 46% mehr Tokens.' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'de',
      name: 'Anleitung: Mehrsprachiges Prompting einrichten',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Sprachenebene identifizieren', text: 'Bestimmen Sie die Sprachenebene Ihrer Zielsprache (Ebene 1–4).' },
        { '@type': 'HowToStep', position: 2, name: 'Richtiges Modell wählen', text: 'Wählen Sie das beste Modell: Mistral Large 2 für Deutsch, GPT-5.5 für Arabisch, Gemini 2.5 Pro für Japanisch.' },
        { '@type': 'HowToStep', position: 3, name: 'System-Prompt schreiben', text: 'Schreiben Sie einen englischen System-Prompt mit expliziter Sprachanweisung: "Respond in formal German (Sie-form)."' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Sprachmodelle machen 5–15% mehr Fehler in Sprachen der Ebene 3+ (Ahuja et al., 2023).',
          'Englische System-Prompts + deutscher Benutzer-Input funktionieren besser als deutsche System-Prompts.',
          '1.000 Wörter auf Deutsch = ~1.500 Tokens (15% teurer als Englisch).',
          'Mistral Large 2 führt bei Deutsch/Französisch; Gemini 2.5 Pro bei Japanisch; GPT-5.5 bei Arabisch.',
        ],
      },
      definition: {
        title: 'Warum Sprache wichtiger ist als Sie denken',
        content: [
          '**Mehrsprachiges Prompting ist nicht Übersetzung — es aktiviert einen anderen Teil des Modell-Wissens.** LLMs wurden zu ~46% auf Englisch, ~6% auf Deutsch und ~5% auf Französisch trainiert. Sprachen mit <1% Trainingsanteil verhalten sich unvorhersehbar.',
        ],
      },
      languageTiers: {
        title: 'Das 4-Ebenen-Sprachenmodell',
        content: [
          '**Sprachenmodell-Performance folgt einer Hierarchie basierend auf Trainingsanteil.**',
        ],
        columns: ['Ebene', 'Sprachen', 'Trainingsanteil', 'Strategie'],
        rows: [
          { 'Ebene': 'Ebene 1', 'Sprachen': 'Englisch', 'Trainingsanteil': '~46%', 'Strategie': 'Direkt prompen, alle Techniken funktionieren' },
          { 'Ebene': 'Ebene 2', 'Sprachen': 'Deutsch, Französisch, Spanisch, Portugiesisch', 'Trainingsanteil': '5–8% each', 'Strategie': 'Deutsche Prompts, englischer System-Prompt' },
          { 'Ebene': 'Ebene 3', 'Sprachen': 'Arabisch, Chinesisch, Japanisch, Koreanisch, Russisch', 'Trainingsanteil': '2–4%', 'Strategie': 'English CoT + native Output, testen' },
          { 'Ebene': 'Ebene 4', 'Sprachen': 'Die meisten anderen Sprachen', 'Trainingsanteil': '<1%', 'Strategie': 'RAG mit verifizierten Inhalten verwenden' },
        ],
        tableFormat: true,
      },
      tokenCosts: {
        title: 'Token-Kosten nach Schrift',
        content: [
          '**Der gleiche Text kostet auf Deutsch 15% mehr Tokens als auf Englisch, auf Arabisch 46% mehr.**',
        ],
        columns: ['Sprache', 'Schrift', 'Tokens (~)', 'vs. Englisch', 'Kosten-Faktor'],
        rows: [
          { 'Sprache': 'Englisch', 'Schrift': 'Lateinisch', 'Tokens (~)': '~1.300', 'vs. Englisch': 'Basis', 'Kosten-Faktor': '1,0×' },
          { 'Sprache': 'Deutsch', 'Schrift': 'Lateinisch', 'Tokens (~)': '~1.500', 'vs. Englisch': '+15%', 'Kosten-Faktor': '1,15×' },
          { 'Sprache': 'Arabisch', 'Schrift': 'Arabisch', 'Tokens (~)': '~1.900', 'vs. Englisch': '+46%', 'Kosten-Faktor': '1,46×' },
        ],
        tableFormat: true,
      },
      systemPromptLanguage: {
        title: 'Sollte Ihr System-Prompt auf Englisch sein?',
        content: [
          '**Für strukturierte Aufgaben: ja, englischer System-Prompt. Für Ton und Register: nein, deutscher Benutzer-Prompt.** Englisch wurde mit RLHF-Daten trainiert. Formale Register (Sie-Form) verstehen die Modelle besser auf Deutsch.',
        ],
      },
      modelMatrix: {
        title: 'Welche Modelle können welche Sprachen am besten?',
        content: [
          '**Kein Modell führt in allen Sprachen. Mistral Large 2 beste bei Deutsch/Französisch; Gemini 2.5 Pro beste bei Japanisch/Chinesisch; GPT-5.5 beste bei Arabisch.**',
        ],
        columns: ['Modell', 'Deutsch/Französisch', 'Japanisch/Chinesisch', 'Arabisch'],
        rows: [
          { 'Modell': 'GPT-5.5', 'Deutsch/Französisch': '✅ Stark', 'Japanisch/Chinesisch': '✅ Stark', 'Arabisch': '✅ Beste' },
          { 'Modell': 'Gemini 2.5 Pro', 'Deutsch/Französisch': '✓ Gut', 'Japanisch/Chinesisch': '✅ Beste', 'Arabisch': '✓ Gut' },
          { 'Modell': 'Mistral Large 2', 'Deutsch/Französisch': '✅ Beste', 'Japanisch/Chinesisch': '⚠ Moderat', 'Arabisch': '⚠ Moderat' },
        ],
        tableFormat: true,
      },
      cotLanguage: {
        title: 'Chain-of-Thought über Sprachengrenzen',
        content: [
          '**Für Sprachen der Ebene 3: Englische Reasoning-Schritte + deutscher Output verbessert die Genauigkeit um 5–12%.**',
        ],
      },
      fewShotLanguage: {
        title: 'Beispiele für mehrsprachiges Prompting',
        content: [
          '**Beispiele müssen in der Zielsprache sein — englische Beispiele senken die Genauigkeit um 15–20%.**',
        ],
      },
      registerFormality: {
        title: 'Formale Register und Höflichkeit',
        content: [
          '**Sie müssen explizit festlegen, ob formal (Sie-Form) oder informell (du-Form) geantwortet werden soll.** Modelle erraten das Register nicht aus dem Kontext.',
        ],
        columns: ['Sprache', 'Modell-Standard', 'Formale Anweisung', 'Informale Anweisung'],
        rows: [
          { 'Sprache': 'Deutsch', 'Modell-Standard': 'Gemischt Sie/du', 'Formale Anweisung': 'Verwende ausschließlich die Sie-Form.', 'Informale Anweisung': 'Verwende die du-Form.' },
        ],
        tableFormat: true,
      },
      codeSwitching: {
        title: 'Code-Switching und gemischte Sprachen',
        content: [
          '**Wenn Nutzer Sprachen mischen (z.B. Frage auf Deutsch mit englischen Fachbegriffen), antworten Modelle unzuverlässig ohne explizite Anweisungen.**',
        ],
      },
      commonMistakes: {
        title: 'Häufige Fehler',
        items: [
          '**Prompt übersetzen ohne Anpassung:** Übersetzte Prompts geben schlechtere Ergebnisse als umschriebene Prompts.',
          '**Englische Beispiele für deutsche Aufgaben:** Reduziert Genauigkeit um 15–20%. Deutsche Beispiele verwenden.',
          '**Zielsprache nicht explizit angeben:** Modelle erraten die Sprache falsch. "Respond in German" immer angeben.',
          '**Token-Kosten ignorieren:** Deutsch kostet 15% mehr, Arabisch 46% mehr. Budgetieren Sie dementsprechend.',
        ],
      },
      howToStart: {
        title: 'Anleitung zum Aufbau',
        numberedItems: [
          'Bestimmen Sie, in welche Sprachenebene Ihre Zielsprache fällt (1–4).',
          'Wählen Sie das beste Modell: Mistral Large 2 für Deutsch, GPT-5.5 für Arabisch, Gemini 2.5 Pro für Japanisch.',
          'Schreiben Sie einen englischen System-Prompt mit expliziter Anweisung: "Respond in formal German (Sie-form)."',
          'Bereiten Sie Beispiele auf Deutsch vor (mindestens 2–3).',
          'Testen Sie Chain-of-Thought: "Think step by step in English, then respond in German."',
        ],
      },
      faq: {
        title: 'FAQ',
        faqs: [
          { q: 'Sollte mein Prompt auf Deutsch oder Englisch sein?', a: 'System-Prompt: Englisch für Struktur. Benutzer-Prompt: Deutsch für Ton und Register.' },
          { q: 'Warum performt KI auf Deutsch schlechter?', a: 'Trainiert zu 46% auf Englisch, nur 6% auf Deutsch. Weniger Muster zum Lernen.' },
          { q: 'Kostet Deutsch mehr?', a: 'Ja, etwa 15% mehr Tokens als Englisch.' },
        ],
      },
      relatedReading: {
        title: 'Weiterführende Ressourcen',
        items: [
          '[System-Prompt vs. Benutzer-Prompt](/prompt-engineering/system-prompt-vs-user-prompt?lang=de)',
          '[Tokens, Kosten und Grenzen](/prompt-engineering/tokens-costs-limits?lang=de)',
          '[Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de)',
        ],
      },
      sources: {
        title: 'Quellen',
        items: [
          'Shi et al., 2023. "Language Models Are Multilingual Chain-of-Thought Reasoners." arXiv:2210.03057',
          'Ahuja et al., 2023. "MEGA: Multilingual Evaluation of Generative AI." arXiv:2303.12528',
        ],
      },
    },
  },
  fr: {
    theme: 'Use Cases by Vertical',
    title: 'Prompts Multilingues : Obtenir des Résultats Cohérents dans Chaque Langue',
    intro: 'Les modèles de langage ont été entraînés principalement en anglais — les prompts en français, allemand, japonais ou arabe activent une région différente du modèle avec une précision inférieure et des coûts de tokens plus élevés.',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    lastFactChecked: '2026-04-29',
    seoTitle: 'Prompts Multilingues: Résultats IA Cohérents dans Toute Langue',
    metaDescription: 'Les modèles IA performent mal en français, allemand, japonais et arabe. Apprenez quels modèles maîtrisent mieux chaque langue.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    toc: [
      { label: 'Points Clés', anchor: 'key-takeaways' },
      { label: 'Pourquoi la Langue Compte Plus que Vous le Pensez', anchor: 'why-language-matters' },
      { label: 'Le Modèle à 4 Niveaux Linguistiques', anchor: 'language-tiers' },
      { label: 'Coûts de Tokens par Script', anchor: 'token-costs' },
      { label: 'Votre Prompt Système Doit-il Être en Anglais?', anchor: 'system-prompt-language' },
      { label: 'Quels Modèles Maîtrisent Chaque Langue?', anchor: 'model-matrix' },
      { label: 'Chain-of-Thought Multilingue', anchor: 'cot-language' },
      { label: 'Exemples Few-Shot Multilingues', anchor: 'few-shot-language' },
      { label: 'Registre Formel et Politesse', anchor: 'register-formality' },
      { label: 'Code-Switching et Langues Mixtes', anchor: 'code-switching' },
      { label: 'Erreurs Courantes', anchor: 'common-mistakes' },
      { label: 'Guide Pratique', anchor: 'how-to-start' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Lectures Connexes', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompting-across-languages?lang=fr',
      inLanguage: 'fr',
      headline: 'Prompts Multilingues : Obtenir des Résultats Cohérents dans Chaque Langue',
      description: 'Les modèles de langage entraînés surtout en anglais performent moins bien en français, allemand, japonais et arabe.',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Mon prompt système doit-il être en français ou anglais?', acceptedAnswer: { '@type': 'Answer', text: 'Pour les tâches structurées: prompt système en anglais. Pour le ton et le registre: instructions en français.' } },
        { '@type': 'Question', name: 'Pourquoi l\'IA performe-t-elle moins bien en français?', acceptedAnswer: { '@type': 'Answer', text: 'Les données d\'entraînement sont à ~46% en anglais et ~5% en français. Moins de motifs pour apprendre.' } },
        { '@type': 'Question', name: 'Un prompt en français coûte-t-il plus cher?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, environ 12% plus de tokens qu\'en anglais. L\'arabe coûte 46% plus cher.' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'fr',
      name: 'Comment Configurer un Workflow Multilingue',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Identifier le niveau linguistique', text: 'Déterminez le niveau de votre langue cible (1–4).' },
        { '@type': 'HowToStep', position: 2, name: 'Choisir le bon modèle', text: 'Mistral Large 2 pour le français, GPT-5.5 pour l\'arabe, Gemini 2.5 Pro pour le japonais.' },
        { '@type': 'HowToStep', position: 3, name: 'Écrire le prompt système', text: 'Écrivez un prompt système en anglais avec instruction explicite de langue.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Les modèles font 5–15% d\'erreurs supplémentaires en langues de niveau 3+.',
          'Prompts système en anglais + entrée utilisateur en français = meilleur résultat.',
          '1.000 mots en français = ~1.450 tokens (12% plus cher qu\'en anglais).',
          'Mistral Large 2 meilleur pour français; Gemini 2.5 Pro pour japonais; GPT-5.5 pour arabe.',
        ],
      },
      definition: {
        title: 'Pourquoi la Langue Compte Plus que Vous le Pensez',
        content: [
          '**Les prompts multilingues ne sont pas des traductions — ils activent une région différente du modèle.** Entraîné à ~46% en anglais, ~6% en allemand, ~5% en français. Les langues avec <1% de données sont imprévisibles.',
        ],
      },
      languageTiers: {
        title: 'Le Modèle à 4 Niveaux Linguistiques',
        content: [
          '**La performance suit une hiérarchie basée sur la part de données d\'entraînement.**',
        ],
        columns: ['Niveau', 'Langues', 'Part d\'entraînement', 'Stratégie'],
        rows: [
          { 'Niveau': 'Niveau 1', 'Langues': 'Anglais', 'Part d\'entraînement': '~46%', 'Stratégie': 'Prompt directement, toutes les techniques marchent' },
          { 'Niveau': 'Niveau 2', 'Langues': 'Français, allemand, espagnol, portugais', 'Part d\'entraînement': '5–8%', 'Stratégie': 'Prompts en français, prompt système en anglais' },
          { 'Niveau': 'Niveau 3', 'Langues': 'Arabe, chinois, japonais, coréen, russe', 'Part d\'entraînement': '2–4%', 'Stratégie': 'CoT en anglais + réponse en français, tester' },
          { 'Niveau': 'Niveau 4', 'Langues': 'Plupart des autres langues', 'Part d\'entraînement': '<1%', 'Stratégie': 'Utiliser RAG avec contenu vérifié' },
        ],
        tableFormat: true,
      },
      tokenCosts: {
        title: 'Coûts de Tokens par Script',
        content: [
          '**Le même texte coûte 12% plus de tokens en français qu\'en anglais, 46% plus en arabe.**',
        ],
        columns: ['Langue', 'Script', 'Tokens (~)', 'vs. Anglais', 'Facteur de coût'],
        rows: [
          { 'Langue': 'Anglais', 'Script': 'Latin', 'Tokens (~)': '~1.300', 'vs. Anglais': 'Base', 'Facteur de coût': '1,0×' },
          { 'Langue': 'Français', 'Script': 'Latin', 'Tokens (~)': '~1.450', 'vs. Anglais': '+12%', 'Facteur de coût': '1,12×' },
          { 'Langue': 'Arabe', 'Script': 'Arabe', 'Tokens (~)': '~1.900', 'vs. Anglais': '+46%', 'Facteur de coût': '1,46×' },
        ],
        tableFormat: true,
      },
      systemPromptLanguage: {
        title: 'Votre Prompt Système Doit-il Être en Anglais?',
        content: [
          '**Pour les tâches structurées: oui, prompt système en anglais. Pour le ton et le registre: non, instructions en français.** L\'anglais a été entraîné avec RLHF. Le registre formel (Vous) se comprend mieux en français.',
        ],
      },
      modelMatrix: {
        title: 'Quels Modèles Maîtrisent Chaque Langue?',
        content: [
          '**Aucun modèle ne domine toutes les langues. Mistral Large 2 meilleur pour français/allemand; Gemini 2.5 Pro meilleur pour japonais/chinois; GPT-5.5 meilleur pour arabe.**',
        ],
        columns: ['Modèle', 'Français/Allemand', 'Japonais/Chinois', 'Arabe'],
        rows: [
          { 'Modèle': 'GPT-5.5', 'Français/Allemand': '✅ Fort', 'Japonais/Chinois': '✅ Fort', 'Arabe': '✅ Meilleur' },
          { 'Modèle': 'Gemini 2.5 Pro', 'Français/Allemand': '✓ Bon', 'Japonais/Chinois': '✅ Meilleur', 'Arabe': '✓ Bon' },
          { 'Modèle': 'Mistral Large 2', 'Français/Allemand': '✅ Meilleur', 'Japonais/Chinois': '⚠ Modéré', 'Arabe': '⚠ Modéré' },
        ],
        tableFormat: true,
      },
      cotLanguage: {
        title: 'Chain-of-Thought Multilingue',
        content: [
          '**Pour les langues de niveau 3: étapes de raisonnement en anglais + réponse en français améliore la précision de 5–12%.**',
        ],
      },
      fewShotLanguage: {
        title: 'Exemples Few-Shot Multilingues',
        content: [
          '**Les exemples doivent être dans la langue cible — les exemples en anglais réduisent la précision de 15–20%.**',
        ],
      },
      registerFormality: {
        title: 'Registre Formel et Politesse',
        content: [
          '**Vous devez spécifier explicitement si la réponse doit utiliser le vouvoiement (Vous) ou le tutoiement (tu).** Les modèles ne devinent pas le registre à partir du contexte.',
        ],
        columns: ['Langue', 'Standard du Modèle', 'Instruction Formelle', 'Instruction Informelle'],
        rows: [
          { 'Langue': 'Français', 'Standard du Modèle': 'Mélange tu/Vous', 'Instruction Formelle': 'Utilisez exclusivement le vouvoiement (Vous).', 'Instruction Informelle': 'Utilise le tutoiement (tu).' },
        ],
        tableFormat: true,
      },
      codeSwitching: {
        title: 'Code-Switching et Langues Mixtes',
        content: [
          '**Quand les utilisateurs mélangent les langues (ex: question en français avec termes anglais), les modèles répondent de façon peu fiable sans instructions explicites.**',
        ],
      },
      commonMistakes: {
        title: 'Erreurs Courantes',
        items: [
          '**Traduire le prompt sans adaptation:** Les prompts traduits donnent de moins bons résultats que les prompts réécrits.',
          '**Utiliser des exemples anglais pour des tâches françaises:** Réduit la précision de 15–20%. Utilisez des exemples en français.',
          '**Ne pas spécifier la langue cible:** Les modèles devinent mal. Toujours inclure "Respond in French".',
          '**Ignorer les coûts de tokens:** Le français coûte 12% plus cher, l\'arabe 46% plus cher. Budgétisez en conséquence.',
        ],
      },
      howToStart: {
        title: 'Guide Pratique',
        numberedItems: [
          'Déterminez le niveau linguistique de votre langue cible (1–4).',
          'Choisissez le meilleur modèle: Mistral Large 2 pour français, GPT-5.5 pour arabe, Gemini 2.5 Pro pour japonais.',
          'Écrivez un prompt système en anglais avec instruction explicite: "Respond in French."',
          'Préparez des exemples en français (au minimum 2–3).',
          'Testez Chain-of-Thought: "Think step by step in English, then respond in French."',
        ],
      },
      faq: {
        title: 'FAQ',
        faqs: [
          { q: 'Mon prompt système doit-il être en français ou anglais?', a: 'Prompt système: anglais pour la structure. Prompt utilisateur: français pour le ton et le registre.' },
          { q: 'Pourquoi l\'IA performe-t-elle moins bien en français?', a: 'Entraînée à 46% en anglais, seulement 5% en français. Moins de motifs à apprendre.' },
          { q: 'Un prompt en français coûte-t-il plus cher?', a: 'Oui, environ 12% plus de tokens qu\'en anglais.' },
        ],
      },
      relatedReading: {
        title: 'Lectures Connexes',
        items: [
          '[Prompt Système vs. Prompt Utilisateur](/prompt-engineering/system-prompt-vs-user-prompt?lang=fr)',
          '[Tokens, Coûts et Limites](/prompt-engineering/tokens-costs-limits?lang=fr)',
          '[Chain-of-Thought-Prompting](/prompt-engineering/chain-of-thought-prompting?lang=fr)',
        ],
      },
      sources: {
        title: 'Sources',
        items: [
          'Shi et al., 2023. "Language Models Are Multilingual Chain-of-Thought Reasoners." arXiv:2210.03057',
          'Ahuja et al., 2023. "MEGA: Multilingual Evaluation of Generative AI." arXiv:2303.12528',
        ],
      },
    },
  },
  ja: {
    theme: 'Use Cases by Vertical',
    title: '多言語プロンプティング：すべての言語で一貫性のある結果を得る',
    intro: '言語モデルは主に英語で学習されています。日本語、ドイツ語、フランス語、アラビア語でプロンプトを書くと、モデル知識の異なる領域が活性化され、精度が低下し、トークンコストが増加します。',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    lastFactChecked: '2026-04-29',
    seoTitle: '多言語プロンプティング：あらゆる言語でAI結果を統一',
    metaDescription: 'AIモデルは日本語、ドイツ語、フランス語、アラビア語で性能が低下します。各言語に最適なモデルと多言語プロンプトの書き方を学びます。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    toc: [
      { label: '重要ポイント', anchor: 'key-takeaways' },
      { label: '言語がこれほど重要な理由', anchor: 'why-language-matters' },
      { label: '4段階言語モデル', anchor: 'language-tiers' },
      { label: 'スクリプト別トークンコスト', anchor: 'token-costs' },
      { label: 'システムプロンプトは英語にすべき?', anchor: 'system-prompt-language' },
      { label: 'どのモデルがどの言語が得意か', anchor: 'model-matrix' },
      { label: '多言語での思考の連鎖', anchor: 'cot-language' },
      { label: '少数ショット例と言語マッチング', anchor: 'few-shot-language' },
      { label: '敬語と丁寧さ', anchor: 'register-formality' },
      { label: 'コードスイッチングと言語混在', anchor: 'code-switching' },
      { label: 'よくある間違い', anchor: 'common-mistakes' },
      { label: 'セットアップガイド', anchor: 'how-to-start' },
      { label: 'FAQ', anchor: 'faq' },
      { label: '関連資料', anchor: 'related-reading' },
      { label: 'ソース', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompting-across-languages?lang=ja',
      inLanguage: 'ja',
      headline: '多言語プロンプティング：すべての言語で一貫性のある結果を得る',
      description: '言語モデルは主に英語で学習。日本語、ドイツ語、フランス語、アラビア語で精度が低下し、トークン代が増加します。',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'システムプロンプトは日本語と英語のどちらが良い?', acceptedAnswer: { '@type': 'Answer', text: '構造化タスク：システムプロンプトは英語。トーンと敬語：日本語が最適。' } },
        { '@type': 'Question', name: 'なぜAIは非英語で性能が低下するのか?', acceptedAnswer: { '@type': 'Answer', text: 'トレーニングデータが~46%英語、~3%日本語。学習パターンが少ない。' } },
        { '@type': 'Question', name: '日本語のプロンプトはより高コストか?', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。日本語は英語より15%トークン数が少なくなります。アラビア語は46%多くなります。' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'ja',
      name: '多言語プロンプティングワークフローのセットアップ',
      step: [
        { '@type': 'HowToStep', position: 1, name: '言語レベルを特定', text: 'ターゲット言語のレベルを確認（1～4）。' },
        { '@type': 'HowToStep', position: 2, name: '最適なモデルを選択', text: '日本語ならGemini 2.5 Pro、アラビア語ならGPT-5.5を選ぶ。' },
        { '@type': 'HowToStep', position: 3, name: 'システムプロンプトを作成', text: '英語のシステムプロンプトに言語指定を含める。' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'レベル3以上の言語でAIは5～15%エラー率が高い（Ahuja et al., 2023）。',
          '英語のシステムプロンプト＋日本語のユーザー入力が最適。',
          '1,000語の英語テキスト＝約1,300トークン；同じ内容の日本語＝約1,100トークン（15%安い）。',
          'Mistral Large 2はフランス語/スペイン語に強い；Gemini 2.5 Proは日本語/中国語に最強；GPT-5.5はアラビア語に最強。',
        ],
      },
      definition: {
        title: '言語がこれほど重要な理由',
        content: [
          '**多言語プロンプティングは翻訳ではなく、モデル知識の異なる領域を活性化させることです。** LLMは約46%が英語、3%が日本語、5%がフランス語でトレーニングされています。トレーニング数<1%の言語は予測不可能です。',
        ],
      },
      languageTiers: {
        title: '4段階言語モデル',
        content: [
          '**言語性能はトレーニングデータシェアに基づいた階層に従います。**',
        ],
        columns: ['段階', '言語', 'トレーニング比率', '戦略'],
        rows: [
          { '段階': 'レベル1', '言語': '英語', 'トレーニング比率': '~46%', '戦略': '直接プロンプト、全技法が機能' },
          { '段階': 'レベル2', '言語': 'フランス語、ドイツ語、スペイン語、ポルトガル語', 'トレーニング比率': '5～8%', '戦略': '母語プロンプト、英語システムプロンプト' },
          { '段階': 'レベル3', '言語': '日本語、中国語、韓国語、アラビア語、ロシア語', 'トレーニング比率': '2～4%', '戦略': '英語CoT＋母語出力、テスト必須' },
          { '段階': 'レベル4', '言語': 'その他ほとんどの言語', 'トレーニング比率': '<1%', '戦略': '検証済みコンテンツでRAGを使用' },
        ],
        tableFormat: true,
      },
      tokenCosts: {
        title: 'スクリプト別トークンコスト',
        content: [
          '**同じテキストが日本語では英語の15%安い、アラビア語では46%高くなります。**',
        ],
        columns: ['言語', 'スクリプト', 'トークン（約）', '英語比', 'コスト倍率'],
        rows: [
          { '言語': '英語', 'スクリプト': 'ラテン文字', 'トークン（約）': '~1,300', '英語比': 'ベース', 'コスト倍率': '1.0×' },
          { '言語': '日本語', 'スクリプト': 'CJK+ひらがな', 'トークン（約）': '~1,100', '英語比': '-15%', 'コスト倍率': '0.85×' },
          { '言語': 'アラビア語', 'スクリプト': 'アラビア文字', 'トークン（約）': '~1,900', '英語比': '+46%', 'コスト倍率': '1.46×' },
        ],
        tableFormat: true,
      },
      systemPromptLanguage: {
        title: 'システムプロンプトは英語にすべき?',
        content: [
          '**構造化タスク：英語のシステムプロンプトが優れています。トーンと敬語：日本語が最適です。** 英語はRLHFで学習。敬語（丁寧語）は日本語で指定する方が効果的。',
        ],
      },
      modelMatrix: {
        title: 'どのモデルがどの言語が得意か',
        content: [
          '**1つのモデルがすべての言語で最高ではありません。Mistral Large 2はフランス語/ドイツ語が強い；Gemini 2.5 Proは日本語/中国語で最強；GPT-5.5はアラビア語で最強。**',
        ],
        columns: ['モデル', 'フランス語/ドイツ語', '日本語/中国語', 'アラビア語'],
        rows: [
          { 'モデル': 'GPT-5.5', 'フランス語/ドイツ語': '✅ 強力', '日本語/中国語': '✅ 強力', 'アラビア語': '✅ 最強' },
          { 'モデル': 'Gemini 2.5 Pro', 'フランス語/ドイツ語': '✓ 良好', '日本語/中国語': '✅ 最強', 'アラビア語': '✓ 良好' },
          { 'モデル': 'Mistral Large 2', 'フランス語/ドイツ語': '✅ 最強', '日本語/中国語': '⚠ 中程度', 'アラビア語': '⚠ 中程度' },
        ],
        tableFormat: true,
      },
      cotLanguage: {
        title: '多言語での思考の連鎖',
        content: [
          '**レベル3言語：英語での推論ステップ＋日本語での最終回答で精度が5～12%向上（Shi et al., 2023）。**',
        ],
      },
      fewShotLanguage: {
        title: '少数ショット例と言語マッチング',
        content: [
          '**例は目標言語で提供する必要があります。言語が異なる例は精度を15～20%低下させます。**',
        ],
      },
      registerFormality: {
        title: '敬語と丁寧さ',
        content: [
          '**AIに丁寧語（です・ます体）か普通体で答えるべきか明示的に指定する必要があります。** モデルは文脈から推測できません。',
        ],
        columns: ['言語', 'モデルのデフォルト', 'フォーマル指定', 'インフォーマル指定'],
        rows: [
          { '言語': '日本語', 'モデルのデフォルト': 'です・ます体（丁寧）', 'フォーマル指定': '丁寧語（です・ます体）と敬語を常に使う。', 'インフォーマル指定': '普通体（だ体）を使う。' },
        ],
        tableFormat: true,
      },
      codeSwitching: {
        title: 'コードスイッチングと言語混在',
        content: [
          '**ユーザーが言語を混在させるとき（例：日本語の質問に英語の技術用語を混ぜる）、明示的な指定がないとモデルは信頼できない回答をします。**',
        ],
      },
      commonMistakes: {
        title: 'よくある間違い',
        items: [
          '**プロンプトを単に翻訳する：** 翻訳されたプロンプトは言い換えたプロンプトより質が低い。',
          '**日本語タスクに英語の例を使う：** 精度が15～20%低下。日本語の例を使う。',
          '**目標言語を明示しない：** モデルが間違って推測します。常に「日本語で答える」を指定。',
          '**トークンコストを無視する：** 日本語は英語より15%安いが、アラビア語は46%高い。予算計画が必要。',
        ],
      },
      howToStart: {
        title: 'セットアップガイド',
        numberedItems: [
          'ターゲット言語のレベルを確認（1～4）。',
          '各言語に最適なモデルを選択：日本語ならGemini 2.5 Pro、アラビア語ならGPT-5.5。',
          '言語指定を含む英語システムプロンプトを作成。',
          'ターゲット言語で例を準備（最低2～3個）。',
          'レベル3以上の言語では、CoTをテスト：「英語でステップバイステップで考え、日本語で最終答を書く」。',
        ],
      },
      faq: {
        title: 'FAQ',
        faqs: [
          { q: 'システムプロンプトは日本語か英語か?', a: 'システムプロンプト：英語が構造的に優れている。ユーザープロンプト：日本語が敬語に最適。' },
          { q: 'なぜAIは日本語で性能が低下するのか?', a: 'トレーニングデータが46%英語で、3%しか日本語ではありません。学習パターンが少なくなります。' },
          { q: '日本語のプロンプトはより安いのか?', a: 'はい。英語より約15%トークン数が少なくなります。' },
        ],
      },
      relatedReading: {
        title: '関連資料',
        items: [
          '[システムプロンプト vs ユーザープロンプト](/prompt-engineering/system-prompt-vs-user-prompt?lang=ja)',
          '[トークン、コスト、制限](/prompt-engineering/tokens-costs-limits?lang=ja)',
          '[思考の連鎖プロンプティング](/prompt-engineering/chain-of-thought-prompting?lang=ja)',
        ],
      },
      sources: {
        title: 'ソース',
        items: [
          'Shi et al., 2023. "Language Models Are Multilingual Chain-of-Thought Reasoners." arXiv:2210.03057',
          'Ahuja et al., 2023. "MEGA: Multilingual Evaluation of Generative AI." arXiv:2303.12528',
        ],
      },
    },
  },
  zh: {
    theme: 'Use Cases by Vertical',
    title: '多语言提示：在任何语言中获得一致的结果',
    intro: '语言模型主要用英文训练——用中文、日文、德文或阿拉伯文提示时，激活模型知识的不同区域，导致精度较低和token成本增加。',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    lastFactChecked: '2026-04-29',
    seoTitle: '多语言提示：统一所有语言的AI结果',
    metaDescription: '语言模型在中文、日文、德文和阿拉伯文上性能较差。了解每种语言最佳的模型和如何编写多语言提示。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    toc: [
      { label: '核心要点', anchor: 'key-takeaways' },
      { label: '语言的重要性', anchor: 'why-language-matters' },
      { label: '4层语言模型', anchor: 'language-tiers' },
      { label: '按文字系统的token成本', anchor: 'token-costs' },
      { label: '系统提示应该用英文吗?', anchor: 'system-prompt-language' },
      { label: '哪些模型最擅长各种语言?', anchor: 'model-matrix' },
      { label: '多语言思维链', anchor: 'cot-language' },
      { label: '少量示例和语言匹配', anchor: 'few-shot-language' },
      { label: '语言形式和礼貌度', anchor: 'register-formality' },
      { label: '代码混合和混合语言', anchor: 'code-switching' },
      { label: '常见错误', anchor: 'common-mistakes' },
      { label: '设置指南', anchor: 'how-to-start' },
      { label: '常见问题', anchor: 'faq' },
      { label: '相关阅读', anchor: 'related-reading' },
      { label: '来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/prompt-engineering/prompting-across-languages?lang=zh',
      inLanguage: 'zh',
      headline: '多语言提示：在任何语言中获得一致的结果',
      description: '语言模型主要在英文上训练。用中文、日文、德文或阿拉伯文时精度下降，token成本增加。',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '系统提示应该用中文还是英文?', acceptedAnswer: { '@type': 'Answer', text: '结构化任务：英文系统提示。语气和形式：中文最优。' } },
        { '@type': 'Question', name: '为什么AI在非英文语言上性能较差?', acceptedAnswer: { '@type': 'Answer', text: '训练数据约46%是英文，仅3%是中文。学习模式较少。' } },
        { '@type': 'Question', name: '中文提示成本更高吗?', acceptedAnswer: { '@type': 'Answer', text: '不。中文比英文使用的token少31%。阿拉伯文多46%。' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'zh',
      name: '设置多语言提示工作流',
      step: [
        { '@type': 'HowToStep', position: 1, name: '确定语言等级', text: '确认目标语言的等级（1～4）。' },
        { '@type': 'HowToStep', position: 2, name: '选择最佳模型', text: '中文选Gemini 2.5 Pro，阿拉伯文选GPT-5.5。' },
        { '@type': 'HowToStep', position: 3, name: '创建系统提示', text: '用英文系统提示，包含语言指定。' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '等级3以上语言的错误率高5～15%（Ahuja et al., 2023）。',
          '英文系统提示+中文用户输入性能最佳。',
          '1,000个英文单词≈1,300个token；同样内容的中文≈900个token（便宜31%）。',
          'Mistral Large 2最擅长法语/西班牙语；Gemini 2.5 Pro最擅长日语/中文；GPT-5.5最擅长阿拉伯文。',
        ],
      },
      definition: {
        title: '语言的重要性',
        content: [
          '**多语言提示不是翻译——它激活模型知识的不同部分。** LLM训练数据约46%是英文，5%是法文，3%是中文。训练数据<1%的语言行为不可预测。',
        ],
      },
      languageTiers: {
        title: '4层语言模型',
        content: [
          '**语言性能遵循基于训练数据份额的四层等级制。**',
        ],
        columns: ['等级', '语言', '训练份额', '策略'],
        rows: [
          { '等级': '等级1', '语言': '英文', '训练份额': '~46%', '策略': '直接提示，所有技术都有效' },
          { '等级': '等级2', '语言': '法文、德文、西班牙文、葡萄牙文', '训练份额': '5～8%', '策略': '本地语言提示，英文系统提示' },
          { '等级': '等级3', '语言': '中文、日文、韩文、阿拉伯文、俄文', '训练份额': '2～4%', '策略': '英文思维链+本地输出，需测试' },
          { '等级': '等级4', '语言': '大多数其他语言', '训练份额': '<1%', '策略': '使用经验证内容的RAG' },
        ],
        tableFormat: true,
      },
      tokenCosts: {
        title: '按文字系统的token成本',
        content: [
          '**相同内容在中文中比英文便宜31%，在阿拉伯文中贵46%。**',
        ],
        columns: ['语言', '文字系统', '约token数', '比英文', '成本倍数'],
        rows: [
          { '语言': '英文', '文字系统': '拉丁文', '约token数': '~1,300', '比英文': '基数', '成本倍数': '1.0×' },
          { '语言': '中文', '文字系统': 'CJK', '约token数': '~900', '比英文': '-31%', '成本倍数': '0.69×' },
          { '语言': '阿拉伯文', '文字系统': '阿拉伯文', '约token数': '~1,900', '比英文': '+46%', '成本倍数': '1.46×' },
        ],
        tableFormat: true,
      },
      systemPromptLanguage: {
        title: '系统提示应该用英文吗?',
        content: [
          '**结构化任务：英文系统提示性能更好。语气和形式：中文效果更佳。** 英文通过RLHF训练。正式形式（敬语）在中文中理解更好。',
        ],
      },
      modelMatrix: {
        title: '哪些模型最擅长各种语言?',
        content: [
          '**没有一个模型在所有语言上都领先。Mistral Large 2最擅长法语/德文；Gemini 2.5 Pro最擅长日文/中文；GPT-5.5最擅长阿拉伯文。**',
        ],
        columns: ['模型', '法文/德文', '日文/中文', '阿拉伯文'],
        rows: [
          { '模型': 'GPT-5.5', '法文/德文': '✅ 强', '日文/中文': '✅ 强', '阿拉伯文': '✅ 最强' },
          { '模型': 'Gemini 2.5 Pro', '法文/德文': '✓ 好', '日文/中文': '✅ 最强', '阿拉伯文': '✓ 好' },
          { '模型': 'Mistral Large 2', '法文/德文': '✅ 最强', '日文/中文': '⚠ 中等', '阿拉伯文': '⚠ 中等' },
        ],
        tableFormat: true,
      },
      cotLanguage: {
        title: '多语言思维链',
        content: [
          '**等级3语言：英文推理步骤+中文最终答案可将精度提高5～12%（Shi et al., 2023）。**',
        ],
      },
      fewShotLanguage: {
        title: '少量示例和语言匹配',
        content: [
          '**示例必须用目标语言——混合语言示例将精度降低15～20%。**',
        ],
      },
      registerFormality: {
        title: '语言形式和礼貌度',
        content: [
          '**需要明确指定AI应使用正式语言（敬语）还是非正式语言。** 模型无法从上下文推断。',
        ],
        columns: ['语言', '模型默认', '正式指定', '非正式指定'],
        rows: [
          { '语言': '中文', '模型默认': '混合正式/非正式', '正式指定': '始终使用敬语和正式用语。', '非正式指定': '使用日常非正式语言。' },
        ],
        tableFormat: true,
      },
      codeSwitching: {
        title: '代码混合和混合语言',
        content: [
          '**当用户混合语言时（如中文问题中混入英文术语），模型在没有明确指令的情况下响应不可靠。**',
        ],
      },
      commonMistakes: {
        title: '常见错误',
        items: [
          '**仅翻译提示：** 翻译的提示质量低于重写的提示。',
          '**中文任务使用英文示例：** 降低精度15～20%。使用中文示例。',
          '**不指定目标语言：** 模型会错误猜测。始终指定"用中文回答"。',
          '**忽视token成本：** 中文便宜31%，但阿拉伯文贵46%。需要预算规划。',
        ],
      },
      howToStart: {
        title: '设置指南',
        numberedItems: [
          '确认目标语言的等级（1～4）。',
          '为每种语言选择最佳模型：中文选Gemini 2.5 Pro，阿拉伯文选GPT-5.5。',
          '创建包含语言指定的英文系统提示。',
          '用目标语言准备示例（最少2～3个）。',
          '对等级3以上的语言测试思维链：用英文逐步思考，用中文写最终答案。',
        ],
      },
      faq: {
        title: '常见问题',
        faqs: [
          { q: '系统提示应该用中文还是英文?', a: '系统提示：英文在结构上更优。用户提示：中文对敬语最优。' },
          { q: '为什么AI在中文上性能较差?', a: '训练数据46%是英文，仅3%是中文。学习模式较少。' },
          { q: '中文提示更便宜吗?', a: '是的。中文使用的token比英文少约31%。' },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[系统提示 vs 用户提示](/prompt-engineering/system-prompt-vs-user-prompt?lang=zh)',
          '[令牌、成本和限制](/prompt-engineering/tokens-costs-limits?lang=zh)',
          '[思维链提示](/prompt-engineering/chain-of-thought-prompting?lang=zh)',
        ],
      },
      sources: {
        title: '来源',
        items: [
          'Shi et al., 2023. "Language Models Are Multilingual Chain-of-Thought Reasoners." arXiv:2210.03057',
          'Ahuja et al., 2023. "MEGA: Multilingual Evaluation of Generative AI." arXiv:2303.12528',
        ],
      },
    },
  },
};
