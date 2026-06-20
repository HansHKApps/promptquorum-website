import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Smarter Home Automations with a Local LLM (2026)',
    seoTitle: 'AI Home Automation 2026: Local LLM Beyond IFTTT',
    intro:
      'A local LLM enables context-aware home automations described in plain language — going beyond rigid if-this-then-that rules. This guide explains the limits of rule-based automation, what an LLM adds, real example automations with their prompts, the architecture, and the guardrails that keep it reliable, all running locally with no cloud.',
    metaDescription:
      'Build context-aware home automations with a local LLM: plain-language rules that beat if-this-then-that. Examples, prompts, architecture, and guardrails.',
    twitterDescription:
      'A local LLM makes home automations context-aware: "if it looks like rain and I am leaving, remind me." Examples, prompts, and guardrails.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users designing context-aware automations',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'ai home automation local llm',
      'home assistant llm automation',
      'context aware home automation',
      'natural language home automation',
      'local llm automations',
    ],
    leadAnswerBlock:
      '**A local LLM lets you write automations as plain-language goals and reason over context — time, presence, and sensor states — instead of wiring rigid triggers.** It runs through Ollama and Home Assistant on your own hardware, so context-aware automation needs no cloud.',
    quickAnswerTop: {
      en: {
        question: 'How does a local LLM improve home automation?',
        answer:
          'A local LLM adds a layer that understands intent and context, so an automation can weigh time of day, who is home, and sensor states against a natural-language goal rather than firing one fixed action per trigger. It runs locally via Ollama and Home Assistant, keeping deterministic safety rules as plain automations.',
        bullets: [
          'Plain-language goals instead of rigid trigger → action rules',
          'Reasons over context: time, presence, sensors',
          'Runs locally via Ollama + Home Assistant — no cloud',
          'Keep safety-critical rules deterministic, not LLM-driven',
          'Best with a small, fast function-calling model',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Limits of Rule-Based Automation', anchor: 'rule-limits' },
      { label: 'What an LLM Adds', anchor: 'llm-adds' },
      { label: 'Example Automations', anchor: 'examples' },
      { label: 'The Architecture', anchor: 'architecture' },
      { label: 'Reliability and Guardrails', anchor: 'guardrails' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A local LLM turns rigid trigger-action rules into context-aware automations described in plain language, running locally via Ollama and Home Assistant.' },
      { type: 'plain-terms', content: 'Normal automations are exact: if motion detected, turn on light. They cannot weigh "is it already bright?" or "is anyone home?" unless you script every case. A local LLM can read the context and a plain-language goal and decide — and it runs on your own hardware, so it stays private.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Rule-based automation is deterministic but blind to context it was not scripted for',
          'A local LLM reasons over intent and context: time, presence, weather, sensor states',
          'Describe automations as plain-language goals; the model maps them to device actions',
          'Run it locally via Ollama + Home Assistant — no cloud, no data leaving the house',
          'Keep safety-critical automations (locks, alarms) as deterministic rules',
          'Use a small function-calling model and constrain scope for reliability',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'The Limits of Rule-Based Automation',
        content:
          '**Rule-based automation fires a fixed action for a fixed trigger and cannot weigh context it was not explicitly scripted for.** It is reliable and fast, but every nuance needs another hand-written condition.',
        items: [
          '**Combinatorial blow-up:** "turn on the light, unless it is bright, unless someone is asleep, unless I am away" becomes many nested conditions.',
          '**No intent:** rules cannot interpret "make it cosy" — only exact entity states.',
          '**Brittle edge cases:** unscripted situations fall through with no sensible default.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'What an LLM Adds: Context, Intent, Language',
        content:
          '**An LLM adds three things rules lack: it understands plain language, infers intent, and reasons over multiple context signals at once.** Use it where nuance matters; keep rules where determinism matters.',
        columns: ['Aspect', 'Rule-based', 'Local-LLM driven'],
        rows: [
          { 'Aspect': 'Trigger handling', 'Rule-based': 'Fixed action per trigger', 'Local-LLM driven': 'Weighs context before acting' },
          { 'Aspect': 'Phrasing', 'Rule-based': 'Exact conditions only', 'Local-LLM driven': 'Plain-language goals' },
          { 'Aspect': 'Context', 'Rule-based': 'Only scripted states', 'Local-LLM driven': 'Time, presence, sensors together' },
          { 'Aspect': 'Edge cases', 'Rule-based': 'Falls through', 'Local-LLM driven': 'Reasonable default from context' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'Example Automations (With the Prompts)',
        content:
          '**These examples show where an LLM-driven automation beats a rule: each is a plain-language goal the model resolves against live context.** Wire them as Home Assistant automations that call the conversation agent.',
        numberedItems: [
          { title: 'Leaving-home reminder', whyItMatters: 'Prompt: "If it looks like rain in the next hour and I am heading out, remind me to take an umbrella." The model checks the weather entity and presence before notifying — a rule would need explicit thresholds.' },
          { title: 'Adaptive evening scene', whyItMatters: 'Prompt: "When the last person gets home after sunset, set a warm, low-light scene unless someone is already asleep." The model weighs presence, time, and sleep state together.' },
          { title: 'Energy nudge', whyItMatters: 'Prompt: "If heating is on and a window has been open more than five minutes, turn the heating down and tell me which room." The model combines two sensor states and explains its action.' },
        ],
        items: [
          'Provide the model the relevant entity states in the prompt so it has the context to reason over.',
          'For the end-to-end setup, see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'The Architecture',
        content:
          '**The automation triggers in Home Assistant, passes context to the local LLM via the conversation agent, and the model returns device actions.** Everything runs locally.',
        items: [
          'Home Assistant automation supplies the trigger and current entity states.',
          'The local model (via the [Ollama integration](/smart-home/home-assistant-ollama-integration)) reasons and returns actions.',
          'Only entities you expose to Assist are actionable, which bounds what the model can do.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Reliability and Guardrails',
        content:
          '**Keep safety-critical automations deterministic, constrain the model\'s scope, and prefer a small fast model to keep latency low.** LLM automations should enhance, not own, critical functions.',
        items: [
          '**Never route safety to the model:** smoke alarms, door locks, and security stay as plain rules.',
          '**Constrain scope:** expose only the entities the model needs and add a system prompt limiting actions.',
          '**Pick the model for latency:** see [best local LLM models for smart home control](/smart-home/best-local-llm-models-smart-home).',
          '**Log and review:** check the conversation logs to confirm the model acts as intended before trusting it unattended.',
          '**For agent patterns and workflows, see** [autonomous local agents that actually work](/power-local-llm/autonomous-local-agents-actually-work) (cross-cluster).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Are local-LLM automations reliable enough to trust?', a: 'For comfort and convenience automations, yes — when you constrain scope and review behaviour first. Keep safety-critical automations (locks, alarms, smoke detectors) as deterministic rules rather than routing them through the model.' },
          { q: 'Does an LLM replace all my automations?', a: 'No. Use deterministic rules for simple, time-sensitive, or safety-critical triggers, and reserve the LLM for automations that need context, nuance, or natural-language goals. The two work together.' },
          { q: 'What model is best for AI automations?', a: 'A small, fast, function-calling model keeps automation latency low while reliably emitting device actions. See the best local LLM models for smart home guide for current picks matched to hardware.' },
          { q: 'How much latency do LLM automations add?', a: 'Latency depends on model size and hardware. A small model on a mini PC with a GPU or NPU responds quickly enough for non-instant automations; avoid routing latency-critical triggers through the model.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the architecture these automations use',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — wire the conversation agent',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — pick a low-latency model',
          '[Autonomous Local Agents That Actually Work](/power-local-llm/autonomous-local-agents-actually-work) — cross-cluster: agent patterns',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smarter Home Automations with a Local LLM (2026)',
      description: 'Build context-aware home automations with a local LLM: plain-language rules that beat if-this-then-that. Examples, prompts, architecture, and guardrails.',
      url: 'https://www.promptquorum.com/smart-home/ai-automations-local-llm',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home automation' }, { '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Context-aware automation' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Are local-LLM automations reliable enough to trust?', acceptedAnswer: { '@type': 'Answer', text: 'For comfort and convenience automations, yes — when you constrain scope and review behaviour first. Keep safety-critical automations as deterministic rules.' } },
        { '@type': 'Question', name: 'Does an LLM replace all my automations?', acceptedAnswer: { '@type': 'Answer', text: 'No. Use deterministic rules for simple, time-sensitive, or safety-critical triggers, and reserve the LLM for context-rich, natural-language automations.' } },
        { '@type': 'Question', name: 'What model is best for AI automations?', acceptedAnswer: { '@type': 'Answer', text: 'A small, fast, function-calling model keeps latency low while reliably emitting device actions. Match the model to your hardware.' } },
        { '@type': 'Question', name: 'How much latency do LLM automations add?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on model size and hardware. A small model on a mini PC with a GPU or NPU responds quickly enough for non-instant automations.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'أتمتة المنزل الذكي بنموذج لغوي محلي (2026)',
    seoTitle: 'أتمتة المنزل بـ LLM محلي 2026: تجاوز IFTTT',
    intro:
      'يتيح النموذج اللغوي المحلي أتمتةً منزليةً تدرك السياق وتُوصَف بلغة طبيعية، متخطيًا القواعد الصارمة من نمط "إذا حدث هذا افعل ذاك". يشرح هذا الدليل حدود الأتمتة القائمة على القواعد، وما يضيفه النموذج اللغوي، وأمثلة أتمتة حقيقية مع صياغة التعليمات، والبنية التقنية، والضمانات التي تجعلها موثوقة — كل ذلك يعمل محليًا دون أي سحابة.',
    metaDescription:
      'نموذج LLM محلي في Home Assistant يُحوّل الأتمتة من قواعد صارمة إلى أهداف بلغة طبيعية. أمثلة وتعليمات وبنية تقنية وضمانات.',
    twitterDescription:
      'النموذج اللغوي المحلي يجعل الأتمتة المنزلية تدرك السياق: "إذا كان الطقس ممطرًا وكنت خارجًا، ذكّرني." أمثلة وتعليمات وضمانات.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يصممون أتمتة تدرك السياق',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'أتمتة المنزل بالذكاء الاصطناعي نموذج llm محلي',
      'home assistant llm أتمتة',
      'أتمتة المنزل الذكي الواعية بالسياق',
      'أتمتة المنزل بالغة الطبيعية',
      'أتمتة نموذج llm المحلي',
    ],
    leadAnswerBlock:
      '**النموذج اللغوي المحلي يتيح لك كتابة قواعد الأتمتة كأهداف بلغة طبيعية والاستدلال على السياق — الوقت والتواجد وحالات المستشعرات — بدلًا من برمجة محفزات صارمة.** يعمل عبر Ollama و Home Assistant على جهازك الخاص، فلا تحتاج الأتمتة الواعية بالسياق إلى أي سحابة.',
    quickAnswerTop: {
      ar: {
        question: 'كيف يُحسّن النموذج اللغوي المحلي أتمتة المنزل؟',
        answer:
          'يضيف النموذج اللغوي المحلي طبقةً تفهم النية والسياق، فتستطيع الأتمتة الموازنة بين وقت اليوم ومن في المنزل وحالات المستشعرات مقابل هدف بلغة طبيعية، بدلًا من تشغيل إجراء ثابت لكل محفّز. يعمل محليًا عبر Ollama و Home Assistant مع الإبقاء على قواعد الأمان الحتمية كأتمتة بسيطة.',
        bullets: [
          'أهداف بلغة طبيعية بدلًا من قواعد صارمة من نوع محفّز → إجراء',
          'استدلال على السياق: الوقت والتواجد والمستشعرات',
          'يعمل محليًا عبر Ollama + Home Assistant — بدون سحابة',
          'الإبقاء على القواعد الحتمية للسلامة الحرجة وعدم تفويضها للنموذج',
          'الأفضل مع نموذج صغير سريع يدعم استدعاء الدوال',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'حدود الأتمتة القائمة على القواعد', anchor: 'rule-limits' },
      { label: 'ما يضيفه النموذج اللغوي', anchor: 'llm-adds' },
      { label: 'أمثلة على الأتمتة', anchor: 'examples' },
      { label: 'البنية التقنية', anchor: 'architecture' },
      { label: 'الموثوقية والضمانات', anchor: 'guardrails' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يحوّل النموذج اللغوي المحلي قواعد الأتمتة الصارمة إلى أتمتة تدرك السياق وتُوصَف بلغة طبيعية، تعمل محليًا عبر Ollama و Home Assistant.' },
      { type: 'plain-terms', content: 'الأتمتة العادية دقيقة: إذا اكتُشفت حركة، أضئ المصباح. لا تستطيع الموازنة بين "هل المكان مضيء بالفعل؟" أو "هل أحد في المنزل؟" ما لم تُبرمج كل حالة. النموذج اللغوي المحلي يقرأ السياق وهدفًا بلغة طبيعية ويتخذ القرار — ويعمل على جهازك الخاص فيبقى خاصًا.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'الأتمتة القائمة على القواعد حتمية لكنها عمياء عن السياق غير المُبرمَج',
          'النموذج اللغوي المحلي يستدل على النية والسياق: الوقت والتواجد والطقس وحالات المستشعرات',
          'صف الأتمتة كأهداف بلغة طبيعية؛ يقوم النموذج بتحويلها إلى إجراءات للأجهزة',
          'شغّله محليًا عبر Ollama + Home Assistant — بدون سحابة، لا تغادر البيانات المنزل',
          'الإبقاء على أتمتة السلامة الحرجة (الأقفال والإنذارات) كقواعد حتمية',
          'استخدم نموذجًا صغيرًا يدعم استدعاء الدوال وقيّد النطاق لتحقيق الموثوقية',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'حدود الأتمتة القائمة على القواعد',
        content:
          '**الأتمتة القائمة على القواعد تُشغّل إجراءً ثابتًا لمحفّز ثابت ولا تستطيع الموازنة بين سياق لم يُبرمَج صراحةً.** إنها موثوقة وسريعة، لكن كل فارق دقيق يستلزم شرطًا إضافيًا مكتوبًا يدويًا.',
        items: [
          '**الانفجار التوافقي:** "أضئ المصباح إلا إذا كان مضيئًا، إلا إذا كان أحدهم نائمًا، إلا إذا كنت غائبًا" يتحول إلى شروط متداخلة كثيرة.',
          '**لا نية:** لا تستطيع القواعد تفسير "اجعل الجو مريحًا" — بل حالات الكيانات الدقيقة فحسب.',
          '**حالات حافة هشة:** المواقف غير المُبرمَجة تمر دون قيمة افتراضية منطقية.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'ما يضيفه النموذج اللغوي: السياق والنية واللغة',
        content:
          '**يضيف النموذج اللغوي ثلاثة أشياء تفتقر إليها القواعد: يفهم اللغة الطبيعية، ويستنتج النية، ويستدل على إشارات سياق متعددة في آنٍ واحد.** استخدمه حيث يهم الفارق الدقيق؛ واحتفظ بالقواعد حيث يهم الحتمية.',
        columns: ['الجانب', 'قائم على القواعد', 'مدفوع بنموذج LLM محلي'],
        rows: [
          { 'الجانب': 'معالجة المحفّز', 'قائم على القواعد': 'إجراء ثابت لكل محفّز', 'مدفوع بنموذج LLM محلي': 'يوازن السياق قبل التصرف' },
          { 'الجانب': 'الصياغة', 'قائم على القواعد': 'شروط دقيقة فقط', 'مدفوع بنموذج LLM محلي': 'أهداف بلغة طبيعية' },
          { 'الجانب': 'السياق', 'قائم على القواعد': 'الحالات المُبرمَجة فقط', 'مدفوع بنموذج LLM محلي': 'الوقت والتواجد والمستشعرات معًا' },
          { 'الجانب': 'الحالات الحافة', 'قائم على القواعد': 'تمر دون معالجة', 'مدفوع بنموذج LLM محلي': 'قيمة افتراضية منطقية من السياق' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'أمثلة على الأتمتة (مع صياغة التعليمات)',
        content:
          '**تُظهر هذه الأمثلة أين تتفوق الأتمتة المدفوعة بنموذج LLM على القاعدة: كل واحدة هدف بلغة طبيعية يحلّه النموذج في مواجهة السياق الحي.** اربطها كأتمتة في Home Assistant تستدعي عامل المحادثة.',
        numberedItems: [
          { title: 'تذكير عند المغادرة', whyItMatters: 'التعليمة: "إذا كانت هناك احتمالية مطر خلال الساعة القادمة وكنت خارجًا، ذكّرني بأخذ المظلة." يتحقق النموذج من كيان الطقس والتواجد قبل الإخطار — القاعدة ستحتاج إلى عتبات صريحة.' },
          { title: 'مشهد مسائي تكيفي', whyItMatters: 'التعليمة: "عندما يعود آخر شخص إلى المنزل بعد الغروب، اضبط مشهدًا دافئًا خافتًا ما لم يكن أحدهم نائمًا بالفعل." يوازن النموذج بين التواجد والوقت وحالة النوم معًا.' },
          { title: 'تنبيه الطاقة', whyItMatters: 'التعليمة: "إذا كانت التدفئة شغّالة ونافذة مفتوحة أكثر من خمس دقائق، اخفض التدفئة وأخبرني أي غرفة." يجمع النموذج حالتَي مستشعر ويشرح إجراءه.' },
        ],
        items: [
          'زوّد النموذج بحالات الكيانات ذات الصلة في التعليمة حتى يمتلك السياق اللازم للاستدلال.',
          'للإعداد الكامل من البداية للنهاية، راجع [تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'البنية التقنية',
        content:
          '**تنطلق الأتمتة في Home Assistant، وتمرر السياق إلى النموذج اللغوي المحلي عبر عامل المحادثة، ويعيد النموذج إجراءات الأجهزة.** كل شيء يعمل محليًا.',
        items: [
          'توفّر أتمتة Home Assistant المحفّزَ وحالات الكيانات الحالية.',
          'يستدل النموذج المحلي (عبر [تكامل Ollama](/ar/smart-home/home-assistant-ollama-integration)) ويعيد الإجراءات.',
          'الكيانات التي تعرضها لـ Assist فقط هي القابلة للتشغيل، مما يحدد نطاق تأثير النموذج.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'الموثوقية والضمانات',
        content:
          '**الإبقاء على أتمتة السلامة الحرجة حتمية، وتقييد نطاق النموذج، وتفضيل نموذج صغير سريع للحفاظ على زمن الاستجابة منخفضًا.** يجب أن تُحسّن أتمتة النموذج اللغوي الوظائف الحرجة لا أن تمتلكها.',
        items: [
          '**لا توجّه السلامة عبر النموذج أبدًا:** كاشفات الدخان وأقفال الأبواب والأمن تبقى قواعد بسيطة.',
          '**قيّد النطاق:** اعرض فقط الكيانات التي يحتاجها النموذج وأضف تعليمة نظام تحدّ الإجراءات.',
          '**اختر النموذج حسب زمن الاستجابة:** راجع [أفضل نماذج LLM المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home).',
          '**سجّل وراجع:** تحقق من سجلات المحادثة للتأكد من أن النموذج يتصرف كما هو مقصود قبل الوثوق به دون إشراف.',
          '**لأنماط العوامل وتدفقات العمل، راجع** [العوامل المحلية المستقلة التي تعمل فعلًا](/ar/power-local-llm/autonomous-local-agents-actually-work) (متعدد العناقيد).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'هل أتمتة النموذج اللغوي المحلي موثوقة بما يكفي للاعتماد عليها؟', a: 'لأتمتة الراحة والسهولة، نعم — عند تقييد النطاق ومراجعة السلوك أولًا. أبقِ أتمتة السلامة الحرجة (الأقفال والإنذارات وكاشفات الدخان) كقواعد حتمية بدلًا من توجيهها عبر النموذج.' },
          { q: 'هل يستبدل النموذج اللغوي كل أتمتتي؟', a: 'لا. استخدم القواعد الحتمية للمحفزات البسيطة أو الحساسة للوقت أو الحرجة للسلامة، واحتفظ بالنموذج اللغوي للأتمتة التي تحتاج سياقًا أو فوارق دقيقة أو أهدافًا بلغة طبيعية. الاثنان يعملان معًا.' },
          { q: 'ما أفضل نموذج لأتمتة الذكاء الاصطناعي؟', a: 'نموذج صغير سريع يدعم استدعاء الدوال يحافظ على زمن استجابة أتمتة منخفض مع إصدار إجراءات الأجهزة بشكل موثوق. راجع دليل أفضل نماذج LLM المحلية للمنزل الذكي للاختيارات المتوافقة مع الجهاز.' },
          { q: 'كم تضيف أتمتة النموذج اللغوي من زمن استجابة؟', a: 'يعتمد زمن الاستجابة على حجم النموذج والجهاز. نموذج صغير على mini PC مزود بـ GPU أو NPU يستجيب بسرعة كافية للأتمتة غير الفورية؛ تجنب توجيه المحفزات الحساسة للتأخر عبر النموذج.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — البنية التقنية التي تستخدمها هذه الأتمتة',
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — توصيل عامل المحادثة',
          '[أفضل نماذج LLM المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home) — اختر نموذجًا ذا زمن استجابة منخفض',
          '[العوامل المحلية المستقلة التي تعمل فعلًا](/ar/power-local-llm/autonomous-local-agents-actually-work) — متعدد العناقيد: أنماط العوامل',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أتمتة المنزل الذكي بنموذج لغوي محلي (2026)',
      description: 'بناء أتمتة منزلية تدرك السياق باستخدام نموذج LLM محلي: قواعد بلغة طبيعية تتفوق على if-this-then-that. أمثلة وتعليمات وبنية تقنية وضمانات.',
      url: 'https://www.promptquorum.com/ar/smart-home/ai-automations-local-llm',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'أتمتة المنزل' }, { '@type': 'Thing', name: 'نموذج LLM محلي' }, { '@type': 'Thing', name: 'أتمتة واعية بالسياق' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أتمتة النموذج اللغوي المحلي موثوقة بما يكفي للاعتماد عليها؟', acceptedAnswer: { '@type': 'Answer', text: 'لأتمتة الراحة والسهولة، نعم — عند تقييد النطاق ومراجعة السلوك أولًا. أبقِ أتمتة السلامة الحرجة كقواعد حتمية.' } },
        { '@type': 'Question', name: 'هل يستبدل النموذج اللغوي كل أتمتتي؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. استخدم القواعد الحتمية للمحفزات البسيطة أو الحساسة للوقت أو الحرجة، واحتفظ بالنموذج اللغوي للأتمتة الغنية بالسياق واللغة الطبيعية.' } },
        { '@type': 'Question', name: 'ما أفضل نموذج لأتمتة الذكاء الاصطناعي؟', acceptedAnswer: { '@type': 'Answer', text: 'نموذج صغير سريع يدعم استدعاء الدوال يحافظ على زمن استجابة منخفض مع إصدار إجراءات الأجهزة بشكل موثوق. طابق النموذج مع جهازك.' } },
        { '@type': 'Question', name: 'كم تضيف أتمتة النموذج اللغوي من زمن استجابة؟', acceptedAnswer: { '@type': 'Answer', text: 'يعتمد على حجم النموذج والجهاز. نموذج صغير على mini PC مزود بـ GPU أو NPU يستجيب بسرعة كافية للأتمتة غير الفورية.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Smartere Heim-Automatisierungen mit einem lokalen LLM (2026)',
    seoTitle: 'KI-Heimautomatisierung 2026: Lokales LLM statt IFTTT',
    intro:
      'Ein lokales LLM ermöglicht kontextbewusste Heim-Automatisierungen, die in natürlicher Sprache beschrieben werden – über starre Wenn-dann-Regeln hinaus. Dieser Leitfaden erklärt die Grenzen regelbasierter Automatisierung, was ein LLM hinzufügt, echte Beispiel-Automatisierungen mit ihren Prompts, die Architektur und die Leitplanken, die sie zuverlässig halten – alles lokal, ohne Cloud.',
    metaDescription:
      'Heim-Automatisierungen 2026 mit lokalem LLM: natürlichsprachliche Regeln schlagen starre Wenn-Dann-Regeln. Beispiele, Prompts, Architektur.',
    twitterDescription:
      'Ein lokales LLM macht Heim-Automatisierungen kontextbewusst: „Wenn es nach Regen aussieht und ich gehe, erinnere mich." Beispiele, Prompts und Leitplanken.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die kontextbewusste Automatisierungen entwerfen',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'ki heimautomatisierung lokales llm',
      'home assistant llm automatisierung',
      'kontextbewusste heimautomatisierung',
      'natürlichsprachliche heimautomatisierung',
      'lokale llm automatisierungen',
    ],
    leadAnswerBlock:
      '**Ein lokales LLM lässt Sie Automatisierungen als natürlichsprachliche Ziele schreiben und über Kontext schlussfolgern – Zeit, Anwesenheit und Sensorzustände – statt starre Auslöser zu verdrahten.** Es läuft über Ollama und Home Assistant auf Ihrer eigenen Hardware, sodass kontextbewusste Automatisierung keine Cloud braucht.',
    quickAnswerTop: {
      de: {
        question: 'Wie verbessert ein lokales LLM die Heimautomatisierung?',
        answer:
          'Ein lokales LLM fügt eine Schicht hinzu, die Absicht und Kontext versteht, sodass eine Automatisierung Tageszeit, wer zu Hause ist und Sensorzustände gegen ein natürlichsprachliches Ziel abwägen kann, statt pro Auslöser eine feste Aktion auszulösen. Es läuft lokal über Ollama und Home Assistant und behält deterministische Sicherheitsregeln als einfache Automatisierungen.',
        bullets: [
          'Natürlichsprachliche Ziele statt starrer Auslöser-→-Aktion-Regeln',
          'Schlussfolgert über Kontext: Zeit, Anwesenheit, Sensoren',
          'Läuft lokal über Ollama + Home Assistant – ohne Cloud',
          'Halten Sie sicherheitskritische Regeln deterministisch, nicht LLM-gesteuert',
          'Am besten mit einem kleinen, schnellen Function-Calling-Modell',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Grenzen regelbasierter Automatisierung', anchor: 'rule-limits' },
      { label: 'Was ein LLM hinzufügt', anchor: 'llm-adds' },
      { label: 'Beispiel-Automatisierungen', anchor: 'examples' },
      { label: 'Die Architektur', anchor: 'architecture' },
      { label: 'Zuverlässigkeit und Leitplanken', anchor: 'guardrails' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein lokales LLM verwandelt starre Auslöser-Aktion-Regeln in kontextbewusste Automatisierungen, die in natürlicher Sprache beschrieben werden und lokal über Ollama und Home Assistant laufen.' },
      { type: 'plain-terms', content: 'Normale Automatisierungen sind exakt: Wenn Bewegung erkannt, Licht an. Sie können nicht abwägen „ist es schon hell?" oder „ist jemand zu Hause?", außer Sie skripten jeden Fall. Ein lokales LLM kann den Kontext und ein natürlichsprachliches Ziel lesen und entscheiden – und es läuft auf Ihrer eigenen Hardware, bleibt also privat.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Regelbasierte Automatisierung ist deterministisch, aber blind für nicht skripteten Kontext',
          'Ein lokales LLM schlussfolgert über Absicht und Kontext: Zeit, Anwesenheit, Wetter, Sensorzustände',
          'Beschreiben Sie Automatisierungen als natürlichsprachliche Ziele; das Modell bildet sie auf Geräteaktionen ab',
          'Betreiben Sie es lokal über Ollama + Home Assistant – ohne Cloud, keine Daten verlassen das Haus',
          'Halten Sie sicherheitskritische Automatisierungen (Schlösser, Alarme) als deterministische Regeln',
          'Nutzen Sie ein kleines Function-Calling-Modell und grenzen Sie den Umfang für Zuverlässigkeit ein',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'Die Grenzen regelbasierter Automatisierung',
        content:
          '**Regelbasierte Automatisierung löst eine feste Aktion für einen festen Auslöser aus und kann keinen Kontext abwägen, für den sie nicht ausdrücklich skriptet wurde.** Sie ist zuverlässig und schnell, doch jede Nuance braucht eine weitere handgeschriebene Bedingung.',
        items: [
          '**Kombinatorische Explosion:** „Licht an, außer es ist hell, außer jemand schläft, außer ich bin weg" wird zu vielen verschachtelten Bedingungen.',
          '**Keine Absicht:** Regeln können „mach es gemütlich" nicht interpretieren – nur exakte Entitätszustände.',
          '**Brüchige Randfälle:** nicht skriptete Situationen fallen ohne sinnvollen Standard durch.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'Was ein LLM hinzufügt: Kontext, Absicht, Sprache',
        content:
          '**Ein LLM fügt drei Dinge hinzu, die Regeln fehlen: Es versteht natürliche Sprache, leitet Absicht ab und schlussfolgert über mehrere Kontextsignale auf einmal.** Nutzen Sie es, wo Nuance zählt; behalten Sie Regeln, wo Determinismus zählt.',
        columns: ['Aspekt', 'Regelbasiert', 'Lokal-LLM-gesteuert'],
        rows: [
          { 'Aspekt': 'Auslöser-Verarbeitung', 'Regelbasiert': 'Feste Aktion pro Auslöser', 'Lokal-LLM-gesteuert': 'Wägt Kontext vor dem Handeln ab' },
          { 'Aspekt': 'Formulierung', 'Regelbasiert': 'Nur exakte Bedingungen', 'Lokal-LLM-gesteuert': 'Natürlichsprachliche Ziele' },
          { 'Aspekt': 'Kontext', 'Regelbasiert': 'Nur skriptete Zustände', 'Lokal-LLM-gesteuert': 'Zeit, Anwesenheit, Sensoren zusammen' },
          { 'Aspekt': 'Randfälle', 'Regelbasiert': 'Fallen durch', 'Lokal-LLM-gesteuert': 'Sinnvoller Standard aus dem Kontext' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'Beispiel-Automatisierungen (mit den Prompts)',
        content:
          '**Diese Beispiele zeigen, wo eine LLM-gesteuerte Automatisierung eine Regel schlägt: Jedes ist ein natürlichsprachliches Ziel, das das Modell gegen den Live-Kontext auflöst.** Verdrahten Sie sie als Home-Assistant-Automatisierungen, die den Konversations-Agenten aufrufen.',
        numberedItems: [
          { title: 'Erinnerung beim Verlassen', whyItMatters: 'Prompt: „Wenn es in der nächsten Stunde nach Regen aussieht und ich rausgehe, erinnere mich an einen Schirm." Das Modell prüft die Wetter-Entität und Anwesenheit, bevor es benachrichtigt – eine Regel bräuchte explizite Schwellenwerte.' },
          { title: 'Adaptive Abendszene', whyItMatters: 'Prompt: „Wenn die letzte Person nach Sonnenuntergang heimkommt, stelle eine warme, gedämpfte Szene ein, außer jemand schläft schon." Das Modell wägt Anwesenheit, Zeit und Schlafzustand zusammen ab.' },
          { title: 'Energie-Hinweis', whyItMatters: 'Prompt: „Wenn die Heizung läuft und ein Fenster seit mehr als fünf Minuten offen ist, drehe die Heizung herunter und sag mir, welcher Raum." Das Modell kombiniert zwei Sensorzustände und erklärt seine Aktion.' },
        ],
        items: [
          'Geben Sie dem Modell die relevanten Entitätszustände im Prompt, damit es den Kontext zum Schlussfolgern hat.',
          'Für das End-to-End-Setup siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Die Architektur',
        content:
          '**Die Automatisierung löst in Home Assistant aus, übergibt den Kontext über den Konversations-Agenten an das lokale LLM, und das Modell gibt Geräteaktionen zurück.** Alles läuft lokal.',
        items: [
          'Die Home-Assistant-Automatisierung liefert den Auslöser und die aktuellen Entitätszustände.',
          'Das lokale Modell (über die [Ollama-Anbindung](/de/smart-home/home-assistant-ollama-integration)) schlussfolgert und gibt Aktionen zurück.',
          'Nur Entitäten, die Sie Assist freigeben, sind ausführbar, was begrenzt, was das Modell tun kann.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Zuverlässigkeit und Leitplanken',
        content:
          '**Halten Sie sicherheitskritische Automatisierungen deterministisch, grenzen Sie den Umfang des Modells ein und bevorzugen Sie ein kleines schnelles Modell, um die Latenz niedrig zu halten.** LLM-Automatisierungen sollten kritische Funktionen verbessern, nicht besitzen.',
        items: [
          '**Leiten Sie Sicherheit nie über das Modell:** Rauchmelder, Türschlösser und Sicherheit bleiben einfache Regeln.',
          '**Umfang eingrenzen:** Geben Sie nur die Entitäten frei, die das Modell braucht, und fügen Sie einen System-Prompt hinzu, der Aktionen begrenzt.',
          '**Modell nach Latenz wählen:** siehe [beste lokale LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home).',
          '**Protokollieren und prüfen:** Prüfen Sie die Konversationsprotokolle, um zu bestätigen, dass das Modell wie beabsichtigt handelt, bevor Sie ihm unbeaufsichtigt vertrauen.',
          '**Für Agenten-Muster und Workflows siehe** [autonome lokale Agenten, die wirklich funktionieren](/de/power-local-llm/autonomous-local-agents-actually-work) (clusterübergreifend).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Sind lokale LLM-Automatisierungen zuverlässig genug, um ihnen zu vertrauen?', a: 'Für Komfort- und Bequemlichkeits-Automatisierungen ja – wenn Sie den Umfang eingrenzen und das Verhalten zuerst prüfen. Halten Sie sicherheitskritische Automatisierungen (Schlösser, Alarme, Rauchmelder) als deterministische Regeln, statt sie über das Modell zu leiten.' },
          { q: 'Ersetzt ein LLM alle meine Automatisierungen?', a: 'Nein. Nutzen Sie deterministische Regeln für einfache, zeitkritische oder sicherheitskritische Auslöser und reservieren Sie das LLM für Automatisierungen, die Kontext, Nuance oder natürlichsprachliche Ziele brauchen. Beide arbeiten zusammen.' },
          { q: 'Welches Modell ist am besten für KI-Automatisierungen?', a: 'Ein kleines, schnelles Function-Calling-Modell hält die Automatisierungs-Latenz niedrig und gibt zuverlässig Geräteaktionen aus. Siehe den Leitfaden zu den besten lokalen LLM-Modellen fürs Smart Home für auf Hardware abgestimmte Empfehlungen.' },
          { q: 'Wie viel Latenz fügen LLM-Automatisierungen hinzu?', a: 'Die Latenz hängt von Modellgröße und Hardware ab. Ein kleines Modell auf einem Mini-PC mit GPU oder NPU reagiert schnell genug für nicht-sofortige Automatisierungen; leiten Sie latenzkritische Auslöser nicht über das Modell.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – die Architektur, die diese Automatisierungen nutzen',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – den Konversations-Agenten verdrahten',
          '[Beste lokale LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home) – ein Modell mit geringer Latenz wählen',
          '[Autonome lokale Agenten, die wirklich funktionieren](/de/power-local-llm/autonomous-local-agents-actually-work) – clusterübergreifend: Agenten-Muster',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smartere Heim-Automatisierungen mit einem lokalen LLM (2026)',
      description: 'Heim-Automatisierungen 2026 mit lokalem LLM: natürlichsprachliche Regeln schlagen starre Wenn-Dann-Regeln. Beispiele, Prompts, Architektur.',
      url: 'https://www.promptquorum.com/de/smart-home/ai-automations-local-llm',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Heimautomatisierung' }, { '@type': 'Thing', name: 'Lokales LLM' }, { '@type': 'Thing', name: 'Kontextbewusste Automatisierung' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Sind lokale LLM-Automatisierungen zuverlässig genug, um ihnen zu vertrauen?', acceptedAnswer: { '@type': 'Answer', text: 'Für Komfort- und Bequemlichkeits-Automatisierungen ja – wenn Sie den Umfang eingrenzen und das Verhalten zuerst prüfen. Halten Sie sicherheitskritische Automatisierungen als deterministische Regeln.' } },
        { '@type': 'Question', name: 'Ersetzt ein LLM alle meine Automatisierungen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Nutzen Sie deterministische Regeln für einfache, zeitkritische oder sicherheitskritische Auslöser und reservieren Sie das LLM für kontextreiche, natürlichsprachliche Automatisierungen.' } },
        { '@type': 'Question', name: 'Welches Modell ist am besten für KI-Automatisierungen?', acceptedAnswer: { '@type': 'Answer', text: 'Ein kleines, schnelles Function-Calling-Modell hält die Latenz niedrig und gibt zuverlässig Geräteaktionen aus. Passen Sie das Modell an Ihre Hardware an.' } },
        { '@type': 'Question', name: 'Wie viel Latenz fügen LLM-Automatisierungen hinzu?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt von Modellgröße und Hardware ab. Ein kleines Modell auf einem Mini-PC mit GPU oder NPU reagiert schnell genug für nicht-sofortige Automatisierungen.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Automatizaciones del Hogar Más Inteligentes con un LLM Local (2026)',
    seoTitle: 'Automatización con IA 2026: LLM Local más allá de IFTTT',
    intro:
      'Un LLM local permite automatizaciones del hogar conscientes del contexto descritas en lenguaje natural, yendo más allá de las rígidas reglas si-esto-entonces-aquello. Esta guía explica los límites de la automatización basada en reglas, qué añade un LLM, automatizaciones de ejemplo reales con sus prompts, la arquitectura y las salvaguardas que la mantienen fiable, todo ejecutándose en local sin nube.',
    metaDescription:
      'Automatizaciones del hogar con IA 2026: LLM local más allá de si-esto-entonces. Reglas en lenguaje natural, ejemplos, prompts y salvaguardas.',
    twitterDescription:
      'Un LLM local hace que las automatizaciones del hogar sean conscientes del contexto: "si parece que va a llover y voy a salir, recuérdamelo". Ejemplos, prompts y salvaguardas.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que diseñan automatizaciones conscientes del contexto',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'automatización hogar ia llm local',
      'home assistant llm automatización',
      'automatización hogar consciente del contexto',
      'automatización hogar lenguaje natural',
      'automatizaciones llm local',
    ],
    leadAnswerBlock:
      '**Un LLM local te deja escribir automatizaciones como objetivos en lenguaje natural y razonar sobre el contexto —hora, presencia y estados de sensores— en lugar de cablear disparadores rígidos.** Se ejecuta mediante Ollama y Home Assistant en tu propio hardware, así que la automatización consciente del contexto no necesita nube.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo mejora un LLM local la automatización del hogar?',
        answer:
          'Un LLM local añade una capa que entiende la intención y el contexto, así que una automatización puede sopesar la hora del día, quién está en casa y los estados de los sensores frente a un objetivo en lenguaje natural, en vez de disparar una acción fija por disparador. Se ejecuta en local vía Ollama y Home Assistant, manteniendo las reglas de seguridad deterministas como automatizaciones simples.',
        bullets: [
          'Objetivos en lenguaje natural en vez de reglas rígidas disparador → acción',
          'Razona sobre el contexto: hora, presencia, sensores',
          'Se ejecuta en local vía Ollama + Home Assistant — sin nube',
          'Mantén las reglas críticas de seguridad deterministas, no guiadas por el LLM',
          'Mejor con un modelo pequeño y rápido con llamada a funciones',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Límites de la automatización basada en reglas', anchor: 'rule-limits' },
      { label: 'Qué añade un LLM', anchor: 'llm-adds' },
      { label: 'Automatizaciones de ejemplo', anchor: 'examples' },
      { label: 'La arquitectura', anchor: 'architecture' },
      { label: 'Fiabilidad y salvaguardas', anchor: 'guardrails' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un LLM local convierte las rígidas reglas disparador-acción en automatizaciones conscientes del contexto descritas en lenguaje natural, ejecutándose en local vía Ollama y Home Assistant.' },
      { type: 'plain-terms', content: 'Las automatizaciones normales son exactas: si se detecta movimiento, enciende la luz. No pueden sopesar "¿ya hay luz?" o "¿hay alguien en casa?" a menos que programes cada caso. Un LLM local puede leer el contexto y un objetivo en lenguaje natural y decidir, y se ejecuta en tu propio hardware, así que se mantiene privado.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'La automatización basada en reglas es determinista pero ciega al contexto que no se programó',
          'Un LLM local razona sobre la intención y el contexto: hora, presencia, tiempo, estados de sensores',
          'Describe las automatizaciones como objetivos en lenguaje natural; el modelo los mapea a acciones de dispositivo',
          'Ejecútalo en local vía Ollama + Home Assistant — sin nube, sin que los datos salgan de casa',
          'Mantén las automatizaciones críticas de seguridad (cerraduras, alarmas) como reglas deterministas',
          'Usa un modelo pequeño con llamada a funciones y limita el alcance para la fiabilidad',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'Los límites de la automatización basada en reglas',
        content:
          '**La automatización basada en reglas dispara una acción fija para un disparador fijo y no puede sopesar contexto que no se programó explícitamente.** Es fiable y rápida, pero cada matiz necesita otra condición escrita a mano.',
        items: [
          '**Explosión combinatoria:** "enciende la luz, salvo que haya luz, salvo que alguien duerma, salvo que esté fuera" se vuelve muchas condiciones anidadas.',
          '**Sin intención:** las reglas no pueden interpretar "ponlo acogedor", solo estados exactos de entidades.',
          '**Casos límite frágiles:** las situaciones no programadas se cuelan sin un valor por defecto sensato.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'Qué añade un LLM: contexto, intención, lenguaje',
        content:
          '**Un LLM añade tres cosas que faltan a las reglas: entiende el lenguaje natural, infiere la intención y razona sobre varias señales de contexto a la vez.** Úsalo donde importe el matiz; mantén reglas donde importe el determinismo.',
        columns: ['Aspecto', 'Basado en reglas', 'Guiado por LLM local'],
        rows: [
          { 'Aspecto': 'Manejo de disparadores', 'Basado en reglas': 'Acción fija por disparador', 'Guiado por LLM local': 'Sopesa el contexto antes de actuar' },
          { 'Aspecto': 'Formulación', 'Basado en reglas': 'Solo condiciones exactas', 'Guiado por LLM local': 'Objetivos en lenguaje natural' },
          { 'Aspecto': 'Contexto', 'Basado en reglas': 'Solo estados programados', 'Guiado por LLM local': 'Hora, presencia, sensores juntos' },
          { 'Aspecto': 'Casos límite', 'Basado en reglas': 'Se cuelan', 'Guiado por LLM local': 'Valor por defecto razonable desde el contexto' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'Automatizaciones de ejemplo (con los prompts)',
        content:
          '**Estos ejemplos muestran dónde una automatización guiada por LLM supera a una regla: cada uno es un objetivo en lenguaje natural que el modelo resuelve frente al contexto en vivo.** Cáblealos como automatizaciones de Home Assistant que llaman al agente de conversación.',
        numberedItems: [
          { title: 'Recordatorio al salir', whyItMatters: 'Prompt: "Si parece que va a llover en la próxima hora y voy a salir, recuérdame llevar un paraguas". El modelo comprueba la entidad del tiempo y la presencia antes de notificar; una regla necesitaría umbrales explícitos.' },
          { title: 'Escena nocturna adaptativa', whyItMatters: 'Prompt: "Cuando la última persona llegue a casa tras el atardecer, pon una escena cálida y tenue salvo que alguien ya duerma". El modelo sopesa presencia, hora y estado de sueño a la vez.' },
          { title: 'Aviso de energía', whyItMatters: 'Prompt: "Si la calefacción está encendida y una ventana lleva más de cinco minutos abierta, baja la calefacción y dime qué habitación". El modelo combina dos estados de sensor y explica su acción.' },
        ],
        items: [
          'Da al modelo los estados de entidad relevantes en el prompt para que tenga el contexto sobre el que razonar.',
          'Para la configuración de extremo a extremo, consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'La arquitectura',
        content:
          '**La automatización se dispara en Home Assistant, pasa el contexto al LLM local vía el agente de conversación, y el modelo devuelve acciones de dispositivo.** Todo se ejecuta en local.',
        items: [
          'La automatización de Home Assistant proporciona el disparador y los estados actuales de las entidades.',
          'El modelo local (vía la [integración de Ollama](/es/smart-home/home-assistant-ollama-integration)) razona y devuelve acciones.',
          'Solo las entidades que expones a Assist son accionables, lo que limita lo que el modelo puede hacer.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Fiabilidad y salvaguardas',
        content:
          '**Mantén las automatizaciones críticas de seguridad deterministas, limita el alcance del modelo y prefiere un modelo pequeño y rápido para mantener baja la latencia.** Las automatizaciones con LLM deben mejorar, no poseer, las funciones críticas.',
        items: [
          '**Nunca enrutes la seguridad al modelo:** alarmas de humo, cerraduras y seguridad se quedan como reglas simples.',
          '**Limita el alcance:** expón solo las entidades que el modelo necesita y añade un prompt de sistema que limite las acciones.',
          '**Elige el modelo por latencia:** consulta [mejores modelos LLM locales para el control del smart home](/es/smart-home/best-local-llm-models-smart-home).',
          '**Registra y revisa:** comprueba los registros de conversación para confirmar que el modelo actúa según lo previsto antes de confiar en él sin supervisión.',
          '**Para patrones de agentes y flujos de trabajo, consulta** [agentes locales autónomos que de verdad funcionan](/es/power-local-llm/autonomous-local-agents-actually-work) (entre clústeres).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Son las automatizaciones con LLM local lo bastante fiables para confiar en ellas?', a: 'Para automatizaciones de confort y comodidad, sí, cuando limitas el alcance y revisas el comportamiento primero. Mantén las automatizaciones críticas de seguridad (cerraduras, alarmas, detectores de humo) como reglas deterministas en vez de enrutarlas por el modelo.' },
          { q: '¿Reemplaza un LLM todas mis automatizaciones?', a: 'No. Usa reglas deterministas para disparadores simples, sensibles al tiempo o críticos de seguridad, y reserva el LLM para automatizaciones que necesiten contexto, matiz u objetivos en lenguaje natural. Los dos trabajan juntos.' },
          { q: '¿Qué modelo es mejor para automatizaciones con IA?', a: 'Un modelo pequeño, rápido y con llamada a funciones mantiene baja la latencia de la automatización mientras emite acciones de dispositivo de forma fiable. Consulta la guía de mejores modelos LLM locales para smart home para opciones ajustadas al hardware.' },
          { q: '¿Cuánta latencia añaden las automatizaciones con LLM?', a: 'La latencia depende del tamaño del modelo y el hardware. Un modelo pequeño en un mini PC con GPU o NPU responde lo bastante rápido para automatizaciones no instantáneas; evita enrutar disparadores críticos de latencia por el modelo.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — la arquitectura que usan estas automatizaciones',
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — cablear el agente de conversación',
          '[Mejores modelos LLM locales para el control del smart home](/es/smart-home/best-local-llm-models-smart-home) — elige un modelo de baja latencia',
          '[Agentes locales autónomos que de verdad funcionan](/es/power-local-llm/autonomous-local-agents-actually-work) — entre clústeres: patrones de agentes',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Automatizaciones del Hogar Más Inteligentes con un LLM Local (2026)',
      description: 'Automatizaciones del hogar con IA 2026: LLM local más allá de si-esto-entonces. Reglas en lenguaje natural, ejemplos, prompts y salvaguardas.',
      url: 'https://www.promptquorum.com/es/smart-home/ai-automations-local-llm',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Automatización del hogar' }, { '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Automatización consciente del contexto' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Son las automatizaciones con LLM local lo bastante fiables para confiar en ellas?', acceptedAnswer: { '@type': 'Answer', text: 'Para automatizaciones de confort y comodidad, sí, cuando limitas el alcance y revisas el comportamiento primero. Mantén las automatizaciones críticas de seguridad como reglas deterministas.' } },
        { '@type': 'Question', name: '¿Reemplaza un LLM todas mis automatizaciones?', acceptedAnswer: { '@type': 'Answer', text: 'No. Usa reglas deterministas para disparadores simples, sensibles al tiempo o críticos de seguridad, y reserva el LLM para automatizaciones ricas en contexto y en lenguaje natural.' } },
        { '@type': 'Question', name: '¿Qué modelo es mejor para automatizaciones con IA?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo pequeño, rápido y con llamada a funciones mantiene baja la latencia mientras emite acciones de dispositivo de forma fiable. Ajusta el modelo a tu hardware.' } },
        { '@type': 'Question', name: '¿Cuánta latencia añaden las automatizaciones con LLM?', acceptedAnswer: { '@type': 'Answer', text: 'Depende del tamaño del modelo y el hardware. Un modelo pequeño en un mini PC con GPU o NPU responde lo bastante rápido para automatizaciones no instantáneas.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '로컬 LLM으로 더 스마트한 홈 자동화 (2026)',
    seoTitle: 'AI 홈 자동화 2026: 로컬 LLM으로 IFTTT를 넘어서십시오',
    intro:
      '로컬 LLM은 IFTTT식 경직된 규칙을 넘어 자연어로 기술된 상황 인식형 홈 자동화를 가능하게 합니다. 이 가이드는 규칙 기반 자동화의 한계, LLM이 추가하는 기능, 프롬프트를 포함한 실제 자동화 예시, 아키텍처, 신뢰성을 유지하는 안전장치를 설명합니다. 모든 것이 클라우드 없이 로컬에서 실행됩니다.',
    metaDescription:
      '로컬 LLM으로 상황 인식형 홈 자동화를 구축하십시오. IFTTT를 능가하는 자연어 규칙, 예시, 프롬프트, 아키텍처 및 안전장치.',
    twitterDescription:
      '로컬 LLM은 홈 자동화를 상황 인식형으로 만듭니다. "비가 올 것 같고 외출할 예정이라면 알려 주십시오." 예시, 프롬프트 및 안전장치.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: '상황 인식형 자동화를 설계하는 Home Assistant 사용자',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'AI 홈 자동화 로컬 LLM',
      'home assistant LLM 자동화',
      '상황 인식형 홈 자동화',
      '자연어 홈 자동화',
      '로컬 LLM 자동화',
    ],
    leadAnswerBlock:
      '**로컬 LLM을 사용하면 자동화를 자연어 목표로 작성하고 시간, 재실 여부, 센서 상태 등의 컨텍스트를 추론할 수 있습니다. 경직된 트리거를 배선할 필요가 없습니다.** Ollama와 Home Assistant를 통해 자신의 하드웨어에서 실행되므로 상황 인식형 자동화에 클라우드가 필요하지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM은 홈 자동화를 어떻게 개선합니까?',
        answer:
          '로컬 LLM은 의도와 컨텍스트를 이해하는 계층을 추가합니다. 이를 통해 자동화가 트리거마다 고정된 동작을 실행하는 대신 시간, 재실 인원, 센서 상태를 자연어 목표와 비교하여 판단할 수 있습니다. Ollama와 Home Assistant를 통해 로컬에서 실행되며 결정론적 안전 규칙은 일반 자동화로 유지됩니다.',
        bullets: [
          '경직된 트리거 → 동작 규칙 대신 자연어 목표 사용',
          '컨텍스트 추론: 시간, 재실 여부, 센서',
          'Ollama + Home Assistant를 통해 로컬 실행 — 클라우드 불필요',
          '안전 필수 규칙은 결정론적으로 유지하고 LLM에 위임하지 마십시오',
          '소형 고속 함수 호출 모델에 가장 적합합니다',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '규칙 기반 자동화의 한계', anchor: 'rule-limits' },
      { label: 'LLM이 추가하는 기능', anchor: 'llm-adds' },
      { label: '자동화 예시', anchor: 'examples' },
      { label: '아키텍처', anchor: 'architecture' },
      { label: '신뢰성 및 안전장치', anchor: 'guardrails' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '로컬 LLM은 경직된 트리거-동작 규칙을 자연어로 기술된 상황 인식형 자동화로 전환합니다. Ollama와 Home Assistant를 통해 로컬에서 실행됩니다.' },
      { type: 'plain-terms', content: '일반 자동화는 정밀합니다. 모션 감지 시 조명을 켭니다. 모든 경우를 스크립트로 작성하지 않으면 "이미 밝은가?" 또는 "집에 누군가 있는가?"를 판단할 수 없습니다. 로컬 LLM은 컨텍스트와 자연어 목표를 읽고 결정을 내립니다. 자신의 하드웨어에서 실행되므로 개인 정보가 보호됩니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '규칙 기반 자동화는 결정론적이지만 스크립트에 없는 컨텍스트에는 대응하지 못합니다',
          '로컬 LLM은 의도와 컨텍스트를 추론합니다: 시간, 재실 여부, 날씨, 센서 상태',
          '자동화를 자연어 목표로 기술하면 모델이 장치 동작으로 매핑합니다',
          'Ollama + Home Assistant를 통해 로컬에서 실행합니다 — 클라우드 없이 데이터가 집을 떠나지 않습니다',
          '안전 필수 자동화(잠금, 경보)는 결정론적 규칙으로 유지하십시오',
          '소형 함수 호출 모델을 사용하고 신뢰성을 위해 범위를 제한하십시오',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: '규칙 기반 자동화의 한계',
        content:
          '**규칙 기반 자동화는 고정 트리거에 고정 동작을 실행하며 명시적으로 스크립트에 없는 컨텍스트는 판단하지 못합니다.** 신뢰성과 속도는 뛰어나지만 모든 뉘앙스에는 수동으로 작성한 조건이 필요합니다.',
        items: [
          '**조합 폭발:** "밝지 않으면 조명을 켜되, 누군가 자고 있거나 외출 중이면 제외"는 중첩 조건이 무수히 많아집니다.',
          '**의도 없음:** 규칙은 "아늑하게 만들어 주십시오"를 해석할 수 없습니다. 정확한 엔티티 상태만 처리합니다.',
          '**취약한 엣지 케이스:** 스크립트에 없는 상황은 합리적인 기본값 없이 처리되지 않습니다.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'LLM이 추가하는 기능: 컨텍스트, 의도, 언어',
        content:
          '**LLM은 규칙에 없는 세 가지를 추가합니다. 자연어를 이해하고, 의도를 추론하며, 여러 컨텍스트 신호를 동시에 처리합니다.** 뉘앙스가 중요한 곳에는 LLM을, 결정론이 중요한 곳에는 규칙을 사용하십시오.',
        columns: ['측면', '규칙 기반', '로컬 LLM 구동'],
        rows: [
          { '측면': '트리거 처리', '규칙 기반': '트리거마다 고정 동작', '로컬 LLM 구동': '행동 전 컨텍스트 판단' },
          { '측면': '표현 방식', '규칙 기반': '정확한 조건만', '로컬 LLM 구동': '자연어 목표' },
          { '측면': '컨텍스트', '규칙 기반': '스크립트된 상태만', '로컬 LLM 구동': '시간, 재실 여부, 센서 통합' },
          { '측면': '엣지 케이스', '규칙 기반': '처리되지 않음', '로컬 LLM 구동': '컨텍스트 기반 합리적 기본값' },
        ],
      },
      examples: {
        id: 'examples',
        title: '자동화 예시 (프롬프트 포함)',
        content:
          '**이 예시들은 LLM 구동 자동화가 규칙보다 뛰어난 경우를 보여 줍니다. 각각 모델이 실시간 컨텍스트에 대해 처리하는 자연어 목표입니다.** 대화 에이전트를 호출하는 Home Assistant 자동화로 연결하십시오.',
        numberedItems: [
          { title: '외출 알림', whyItMatters: '프롬프트: "한 시간 이내에 비가 올 것 같고 외출할 예정이라면 우산을 챙기라고 알려 주십시오." 모델은 날씨 엔티티와 재실 여부를 확인한 후 알림을 전송합니다. 규칙은 명시적인 임계값이 필요합니다.' },
          { title: '적응형 저녁 장면', whyItMatters: '프롬프트: "일몰 후 마지막 사람이 귀가하면, 누군가 이미 자고 있지 않다면 따뜻하고 낮은 조도의 장면을 설정하십시오." 모델은 재실 여부, 시간, 수면 상태를 함께 판단합니다.' },
          { title: '에너지 알림', whyItMatters: '프롬프트: "난방이 켜져 있고 창문이 5분 이상 열려 있다면 난방을 낮추고 어느 방인지 알려 주십시오." 모델은 두 센서 상태를 결합하고 동작을 설명합니다.' },
        ],
        items: [
          '모델이 추론할 컨텍스트를 가질 수 있도록 관련 엔티티 상태를 프롬프트에 포함하십시오.',
          '엔드-투-엔드 설정은 [로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide)를 참조하십시오.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: '아키텍처',
        content:
          '**자동화가 Home Assistant에서 트리거되면 대화 에이전트를 통해 컨텍스트가 로컬 LLM으로 전달되고, 모델이 장치 동작을 반환합니다.** 모든 것이 로컬에서 실행됩니다.',
        items: [
          'Home Assistant 자동화가 트리거와 현재 엔티티 상태를 제공합니다.',
          '로컬 모델([Ollama 통합](/ko/smart-home/home-assistant-ollama-integration) 경유)이 추론하고 동작을 반환합니다.',
          'Assist에 노출한 엔티티만 작동 가능하여 모델이 할 수 있는 작업이 제한됩니다.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: '신뢰성 및 안전장치',
        content:
          '**안전 필수 자동화는 결정론적으로 유지하고, 모델의 범위를 제한하며, 지연 시간을 낮게 유지하기 위해 소형 고속 모델을 선호하십시오.** LLM 자동화는 중요한 기능을 소유하는 것이 아니라 보완해야 합니다.',
        items: [
          '**모델에 안전을 절대 위임하지 마십시오:** 화재 경보기, 도어락, 보안은 일반 규칙으로 유지합니다.',
          '**범위 제한:** 모델에 필요한 엔티티만 노출하고 동작을 제한하는 시스템 프롬프트를 추가하십시오.',
          '**지연 시간에 맞는 모델 선택:** [스마트 홈 제어를 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home)을 참조하십시오.',
          '**기록 및 검토:** 무인으로 신뢰하기 전에 대화 로그를 확인하여 모델이 의도대로 동작하는지 확인하십시오.',
          '**에이전트 패턴 및 워크플로우는** [실제로 작동하는 자율 로컬 에이전트](/ko/power-local-llm/autonomous-local-agents-actually-work)(크로스 클러스터)를 참조하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '로컬 LLM 자동화는 신뢰할 만큼 충분히 안정적입니까?', a: '편의 자동화의 경우 범위를 제한하고 동작을 먼저 검토한다면 그렇습니다. 안전 필수 자동화(잠금, 경보, 화재 감지기)는 모델을 통해 위임하지 않고 결정론적 규칙으로 유지하십시오.' },
          { q: 'LLM이 모든 자동화를 대체합니까?', a: '아닙니다. 단순하거나 시간에 민감하거나 안전에 중요한 트리거에는 결정론적 규칙을 사용하고, 컨텍스트·뉘앙스·자연어 목표가 필요한 자동화에는 LLM을 사용하십시오. 두 가지는 함께 작동합니다.' },
          { q: 'AI 자동화에 가장 적합한 모델은 무엇입니까?', a: '소형 고속 함수 호출 모델은 자동화 지연 시간을 낮게 유지하면서 장치 동작을 안정적으로 출력합니다. 하드웨어에 맞는 선택은 스마트 홈을 위한 최고의 로컬 LLM 모델 가이드를 참조하십시오.' },
          { q: 'LLM 자동화는 얼마나 많은 지연 시간을 추가합니까?', a: '지연 시간은 모델 크기와 하드웨어에 따라 달라집니다. GPU 또는 NPU가 있는 미니 PC의 소형 모델은 즉각적이지 않은 자동화에 충분히 빠르게 응답합니다. 지연에 민감한 트리거는 모델을 통해 처리하지 마십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — 이 자동화에서 사용하는 아키텍처',
          '[Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration) — 대화 에이전트 연결',
          '[스마트 홈 제어를 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home) — 저지연 모델 선택',
          '[실제로 작동하는 자율 로컬 에이전트](/ko/power-local-llm/autonomous-local-agents-actually-work) — 크로스 클러스터: 에이전트 패턴',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 LLM으로 더 스마트한 홈 자동화 (2026)',
      description: '로컬 LLM으로 상황 인식형 홈 자동화를 구축하십시오. IFTTT를 능가하는 자연어 규칙, 예시, 프롬프트, 아키텍처 및 안전장치.',
      url: 'https://www.promptquorum.com/ko/smart-home/ai-automations-local-llm',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '홈 자동화' }, { '@type': 'Thing', name: '로컬 LLM' }, { '@type': 'Thing', name: '상황 인식형 자동화' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '로컬 LLM 자동화는 신뢰할 만큼 충분히 안정적입니까?', acceptedAnswer: { '@type': 'Answer', text: '편의 자동화의 경우 범위를 제한하고 동작을 먼저 검토한다면 그렇습니다. 안전 필수 자동화는 결정론적 규칙으로 유지하십시오.' } },
        { '@type': 'Question', name: 'LLM이 모든 자동화를 대체합니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 단순하거나 시간에 민감하거나 안전에 중요한 트리거에는 결정론적 규칙을 사용하고, 풍부한 컨텍스트와 자연어가 필요한 자동화에는 LLM을 사용하십시오.' } },
        { '@type': 'Question', name: 'AI 자동화에 가장 적합한 모델은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '소형 고속 함수 호출 모델은 지연 시간을 낮게 유지하면서 장치 동작을 안정적으로 출력합니다. 하드웨어에 맞는 모델을 선택하십시오.' } },
        { '@type': 'Question', name: 'LLM 자동화는 얼마나 많은 지연 시간을 추가합니까?', acceptedAnswer: { '@type': 'Answer', text: '모델 크기와 하드웨어에 따라 달라집니다. GPU 또는 NPU가 있는 미니 PC의 소형 모델은 즉각적이지 않은 자동화에 충분히 빠르게 응답합니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Des Automatisations Maison Plus Intelligentes avec un LLM Local (2026)',
    seoTitle: 'Automatisation IA 2026 : LLM Local au-delà d\'IFTTT',
    intro:
      'Un LLM local permet des automatisations maison conscientes du contexte décrites en langage naturel — au-delà des règles rigides si-ceci-alors-cela. Ce guide explique les limites de l\'automatisation par règles, ce qu\'ajoute un LLM, de vrais exemples d\'automatisations avec leurs prompts, l\'architecture et les garde-fous qui la gardent fiable, le tout tournant en local sans cloud.',
    metaDescription:
      'Automatisations maison IA 2026 : LLM local, règles en langage naturel, exemples avec prompts et garde-fous. Dépasse le si-ceci-alors-cela.',
    twitterDescription:
      'Un LLM local rend les automatisations maison conscientes du contexte : « s\'il semble pleuvoir et que je pars, rappelle-le-moi ». Exemples, prompts et garde-fous.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant concevant des automatisations conscientes du contexte',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'automatisation maison ia llm local',
      'home assistant llm automatisation',
      'automatisation maison consciente du contexte',
      'automatisation maison langage naturel',
      'automatisations llm local',
    ],
    leadAnswerBlock:
      '**Un LLM local vous laisse écrire des automatisations comme des objectifs en langage naturel et raisonner sur le contexte — heure, présence et états de capteurs — au lieu de câbler des déclencheurs rigides.** Il tourne via Ollama et Home Assistant sur votre propre matériel, donc l\'automatisation consciente du contexte ne nécessite aucun cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Comment un LLM local améliore-t-il l\'automatisation de la maison ?',
        answer:
          'Un LLM local ajoute une couche qui comprend l\'intention et le contexte, de sorte qu\'une automatisation peut peser l\'heure du jour, qui est à la maison et les états des capteurs face à un objectif en langage naturel, au lieu de déclencher une action fixe par déclencheur. Il tourne en local via Ollama et Home Assistant, en gardant les règles de sécurité déterministes comme automatisations simples.',
        bullets: [
          'Objectifs en langage naturel au lieu de règles rigides déclencheur → action',
          'Raisonne sur le contexte : heure, présence, capteurs',
          'Tourne en local via Ollama + Home Assistant — sans cloud',
          'Gardez les règles critiques de sécurité déterministes, pas pilotées par le LLM',
          'Idéal avec un petit modèle rapide à appel de fonctions',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Limites de l\'automatisation par règles', anchor: 'rule-limits' },
      { label: 'Ce qu\'ajoute un LLM', anchor: 'llm-adds' },
      { label: 'Exemples d\'automatisations', anchor: 'examples' },
      { label: 'L\'architecture', anchor: 'architecture' },
      { label: 'Fiabilité et garde-fous', anchor: 'guardrails' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un LLM local transforme les règles rigides déclencheur-action en automatisations conscientes du contexte décrites en langage naturel, tournant en local via Ollama et Home Assistant.' },
      { type: 'plain-terms', content: 'Les automatisations normales sont exactes : si mouvement détecté, allumer la lumière. Elles ne peuvent pas peser « fait-il déjà clair ? » ou « y a-t-il quelqu\'un ? » sauf si vous scriptez chaque cas. Un LLM local peut lire le contexte et un objectif en langage naturel et décider — et il tourne sur votre propre matériel, donc il reste privé.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'L\'automatisation par règles est déterministe mais aveugle au contexte non scripté',
          'Un LLM local raisonne sur l\'intention et le contexte : heure, présence, météo, états de capteurs',
          'Décrivez les automatisations comme des objectifs en langage naturel ; le modèle les associe à des actions d\'appareil',
          'Faites-le tourner en local via Ollama + Home Assistant — sans cloud, aucune donnée ne quitte la maison',
          'Gardez les automatisations critiques de sécurité (serrures, alarmes) comme règles déterministes',
          'Utilisez un petit modèle à appel de fonctions et limitez le périmètre pour la fiabilité',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'Les limites de l\'automatisation par règles',
        content:
          '**L\'automatisation par règles déclenche une action fixe pour un déclencheur fixe et ne peut peser aucun contexte qui n\'a pas été explicitement scripté.** Elle est fiable et rapide, mais chaque nuance nécessite une autre condition écrite à la main.',
        items: [
          '**Explosion combinatoire :** « allumer la lumière, sauf s\'il fait clair, sauf si quelqu\'un dort, sauf si je suis absent » devient de nombreuses conditions imbriquées.',
          '**Pas d\'intention :** les règles ne peuvent pas interpréter « rends-le cosy » — seulement des états exacts d\'entités.',
          '**Cas limites fragiles :** les situations non scriptées passent à travers sans valeur par défaut sensée.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'Ce qu\'ajoute un LLM : contexte, intention, langage',
        content:
          '**Un LLM ajoute trois choses qui manquent aux règles : il comprend le langage naturel, infère l\'intention et raisonne sur plusieurs signaux de contexte à la fois.** Utilisez-le là où la nuance compte ; gardez les règles là où le déterminisme compte.',
        columns: ['Aspect', 'Par règles', 'Piloté par LLM local'],
        rows: [
          { 'Aspect': 'Gestion des déclencheurs', 'Par règles': 'Action fixe par déclencheur', 'Piloté par LLM local': 'Pèse le contexte avant d\'agir' },
          { 'Aspect': 'Formulation', 'Par règles': 'Conditions exactes seulement', 'Piloté par LLM local': 'Objectifs en langage naturel' },
          { 'Aspect': 'Contexte', 'Par règles': 'États scriptés seulement', 'Piloté par LLM local': 'Heure, présence, capteurs ensemble' },
          { 'Aspect': 'Cas limites', 'Par règles': 'Passent à travers', 'Piloté par LLM local': 'Valeur par défaut raisonnable depuis le contexte' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'Exemples d\'automatisations (avec les prompts)',
        content:
          '**Ces exemples montrent où une automatisation pilotée par LLM bat une règle : chacun est un objectif en langage naturel que le modèle résout face au contexte en direct.** Câblez-les comme des automatisations Home Assistant qui appellent l\'agent de conversation.',
        numberedItems: [
          { title: 'Rappel en partant', whyItMatters: 'Prompt : « S\'il semble pleuvoir dans l\'heure et que je sors, rappelle-moi de prendre un parapluie. » Le modèle vérifie l\'entité météo et la présence avant de notifier — une règle nécessiterait des seuils explicites.' },
          { title: 'Scène du soir adaptative', whyItMatters: 'Prompt : « Quand la dernière personne rentre après le coucher du soleil, mets une scène chaude et tamisée sauf si quelqu\'un dort déjà. » Le modèle pèse présence, heure et état de sommeil ensemble.' },
          { title: 'Coup de pouce énergie', whyItMatters: 'Prompt : « Si le chauffage est allumé et qu\'une fenêtre est ouverte depuis plus de cinq minutes, baisse le chauffage et dis-moi quelle pièce. » Le modèle combine deux états de capteur et explique son action.' },
        ],
        items: [
          'Fournissez au modèle les états d\'entité pertinents dans le prompt pour qu\'il ait le contexte sur lequel raisonner.',
          'Pour la configuration de bout en bout, voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'L\'architecture',
        content:
          '**L\'automatisation se déclenche dans Home Assistant, transmet le contexte au LLM local via l\'agent de conversation, et le modèle renvoie des actions d\'appareil.** Tout tourne en local.',
        items: [
          'L\'automatisation Home Assistant fournit le déclencheur et les états d\'entité actuels.',
          'Le modèle local (via l\'[intégration Ollama](/fr/smart-home/home-assistant-ollama-integration)) raisonne et renvoie des actions.',
          'Seules les entités que vous exposez à Assist sont actionnables, ce qui borne ce que le modèle peut faire.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Fiabilité et garde-fous',
        content:
          '**Gardez les automatisations critiques de sécurité déterministes, limitez le périmètre du modèle et préférez un petit modèle rapide pour garder la latence basse.** Les automatisations LLM doivent améliorer, non posséder, les fonctions critiques.',
        items: [
          '**Ne routez jamais la sécurité vers le modèle :** détecteurs de fumée, serrures et sécurité restent des règles simples.',
          '**Limitez le périmètre :** n\'exposez que les entités dont le modèle a besoin et ajoutez un prompt système limitant les actions.',
          '**Choisissez le modèle selon la latence :** voir [meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home).',
          '**Journalisez et vérifiez :** consultez les journaux de conversation pour confirmer que le modèle agit comme prévu avant de lui faire confiance sans surveillance.',
          '**Pour les schémas d\'agents et les workflows, voir** [les agents locaux autonomes qui fonctionnent vraiment](/fr/power-local-llm/autonomous-local-agents-actually-work) (inter-clusters).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Les automatisations par LLM local sont-elles assez fiables pour qu\'on s\'y fie ?', a: 'Pour les automatisations de confort et de commodité, oui — quand vous limitez le périmètre et vérifiez le comportement d\'abord. Gardez les automatisations critiques de sécurité (serrures, alarmes, détecteurs de fumée) comme règles déterministes plutôt que de les router via le modèle.' },
          { q: 'Un LLM remplace-t-il toutes mes automatisations ?', a: 'Non. Utilisez des règles déterministes pour les déclencheurs simples, sensibles au temps ou critiques de sécurité, et réservez le LLM aux automatisations nécessitant contexte, nuance ou objectifs en langage naturel. Les deux fonctionnent ensemble.' },
          { q: 'Quel modèle est le meilleur pour les automatisations IA ?', a: 'Un petit modèle rapide à appel de fonctions garde la latence d\'automatisation basse tout en émettant de façon fiable des actions d\'appareil. Voir le guide des meilleurs modèles LLM locaux pour la maison connectée pour des choix adaptés au matériel.' },
          { q: 'Combien de latence ajoutent les automatisations LLM ?', a: 'La latence dépend de la taille du modèle et du matériel. Un petit modèle sur un mini-PC avec GPU ou NPU répond assez vite pour des automatisations non instantanées ; évitez de router les déclencheurs critiques en latence via le modèle.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — l\'architecture qu\'utilisent ces automatisations',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — câbler l\'agent de conversation',
          '[Meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home) — choisir un modèle à faible latence',
          '[Les agents locaux autonomes qui fonctionnent vraiment](/fr/power-local-llm/autonomous-local-agents-actually-work) — inter-clusters : schémas d\'agents',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Des Automatisations Maison Plus Intelligentes avec un LLM Local (2026)',
      description: 'Automatisations maison IA 2026 : LLM local, règles en langage naturel, exemples avec prompts et garde-fous. Dépasse le si-ceci-alors-cela.',
      url: 'https://www.promptquorum.com/fr/smart-home/ai-automations-local-llm',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Automatisation de la maison' }, { '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Automatisation consciente du contexte' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Les automatisations par LLM local sont-elles assez fiables pour qu\'on s\'y fie ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour les automatisations de confort et de commodité, oui — quand vous limitez le périmètre et vérifiez le comportement d\'abord. Gardez les automatisations critiques de sécurité comme règles déterministes.' } },
        { '@type': 'Question', name: 'Un LLM remplace-t-il toutes mes automatisations ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Utilisez des règles déterministes pour les déclencheurs simples, sensibles au temps ou critiques, et réservez le LLM aux automatisations riches en contexte et en langage naturel.' } },
        { '@type': 'Question', name: 'Quel modèle est le meilleur pour les automatisations IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Un petit modèle rapide à appel de fonctions garde la latence basse tout en émettant de façon fiable des actions d\'appareil. Adaptez le modèle à votre matériel.' } },
        { '@type': 'Question', name: 'Combien de latence ajoutent les automatisations LLM ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela dépend de la taille du modèle et du matériel. Un petit modèle sur un mini-PC avec GPU ou NPU répond assez vite pour des automatisations non instantanées.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'ローカルLLMでより賢い家の自動化（2026）',
    seoTitle: 'AI ホーム自動化 2026：IFTTT を超えるローカルLLM',
    intro:
      'ローカルLLMは、自然言語で記述する文脈を理解した家の自動化を可能にします——硬直した「もし〜なら」ルールを超えて。本ガイドは、ルールベース自動化の限界、LLM が加えるもの、プロンプト付きの実例自動化、アーキテクチャ、そして信頼性を保つガードレールを説明します——すべてローカルで、クラウドなしに動きます。',
    metaDescription:
      'ローカルLLM（2026）でコンテキスト対応のホームオートメーション構築：自然言語ルールが固定のif-thenを超える。例、プロンプト、アーキテクチャ、ガードレールを解説。Home Assistantとの連携方法と実際の設定手順も紹介。',
    twitterDescription:
      'ローカルLLMは家の自動化を文脈対応にします：「雨が降りそうで外出するなら、傘を思い出させて」。例、プロンプト、ガードレール。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: '文脈対応の自動化を設計する Home Assistant ユーザー',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'ai ホーム自動化 ローカルllm',
      'home assistant llm 自動化',
      '文脈対応 ホーム自動化',
      '自然言語 ホーム自動化',
      'ローカルllm 自動化',
    ],
    leadAnswerBlock:
      '**ローカルLLMを使えば、硬直したトリガーを配線する代わりに、自動化を自然言語の目標として書き、文脈——時刻、在宅、センサー状態——を踏まえて推論できます。** Ollama と Home Assistant を介して自分のハードウェアで動くため、文脈対応の自動化にクラウドは不要です。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMは家の自動化をどう改善しますか？',
        answer:
          'ローカルLLMは意図と文脈を理解する層を加えるため、自動化はトリガーごとに固定の動作を起こす代わりに、時刻・誰が在宅か・センサー状態を自然言語の目標に照らして比較考量できます。Ollama と Home Assistant を介してローカルに動き、決定論的な安全ルールは素のままの自動化として保ちます。',
        bullets: [
          '硬直したトリガー→動作ルールの代わりに自然言語の目標',
          '文脈を踏まえて推論：時刻、在宅、センサー',
          'Ollama + Home Assistant でローカルに動く——クラウドなし',
          '安全に直結するルールは決定論的に保ち、LLM 任せにしない',
          '小型で高速な関数呼び出しモデルが最適',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'ルールベース自動化の限界', anchor: 'rule-limits' },
      { label: 'LLM が加えるもの', anchor: 'llm-adds' },
      { label: '実例自動化', anchor: 'examples' },
      { label: 'アーキテクチャ', anchor: 'architecture' },
      { label: '信頼性とガードレール', anchor: 'guardrails' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ローカルLLMは硬直したトリガー・動作ルールを、自然言語で記述する文脈対応の自動化に変え、Ollama と Home Assistant を介してローカルに動きます。' },
      { type: 'plain-terms', content: '通常の自動化は厳密です：動きを検知したら点灯。各ケースをスクリプト化しない限り、「もう明るい？」や「誰か在宅？」を比較考量できません。ローカルLLMは文脈と自然言語の目標を読んで判断でき、しかも自分のハードウェアで動くためプライベートに保たれます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'ルールベース自動化は決定論的だが、スクリプト化されていない文脈には盲目',
          'ローカルLLMは意図と文脈——時刻、在宅、天気、センサー状態——を踏まえて推論する',
          '自動化を自然言語の目標として記述し、モデルがそれを機器の動作に対応づける',
          'Ollama + Home Assistant でローカルに動かす——クラウドなし、データは家を出ない',
          '安全に直結する自動化（施錠、アラーム）は決定論的ルールとして保つ',
          '信頼性のため、小型の関数呼び出しモデルを使い、範囲を絞る',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'ルールベース自動化の限界',
        content:
          '**ルールベース自動化は固定のトリガーに対し固定の動作を起こし、明示的にスクリプト化されていない文脈を比較考量できません。** 信頼でき高速ですが、ニュアンスごとに手書きの条件がもう一つ必要になります。',
        items: [
          '**組み合わせ爆発：**「明るくない限り、誰かが寝ていない限り、外出していない限り点灯」は、多数のネストした条件になります。',
          '**意図がない：** ルールは「居心地よく」を解釈できず、厳密なエンティティ状態しか扱えません。',
          '**脆い端ケース：** スクリプト化されていない状況は、妥当な既定値なしにすり抜けます。',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'LLM が加えるもの：文脈、意図、言語',
        content:
          '**LLM はルールに欠ける三つを加えます：自然言語を理解し、意図を推測し、複数の文脈シグナルを一度に推論します。** ニュアンスが重要な場面で使い、決定論が重要な場面ではルールを保ちましょう。',
        columns: ['観点', 'ルールベース', 'ローカルLLM駆動'],
        rows: [
          { '観点': 'トリガー処理', 'ルールベース': 'トリガーごとに固定動作', 'ローカルLLM駆動': '動作前に文脈を比較考量' },
          { '観点': '表現', 'ルールベース': '厳密な条件のみ', 'ローカルLLM駆動': '自然言語の目標' },
          { '観点': '文脈', 'ルールベース': 'スクリプト化された状態のみ', 'ローカルLLM駆動': '時刻・在宅・センサーをまとめて' },
          { '観点': '端ケース', 'ルールベース': 'すり抜ける', 'ローカルLLM駆動': '文脈からの妥当な既定値' },
        ],
      },
      examples: {
        id: 'examples',
        title: '実例自動化（プロンプト付き）',
        content:
          '**これらの例は、LLM 駆動の自動化がルールに勝る場面を示します：いずれもモデルがライブな文脈に照らして解決する自然言語の目標です。** 会話エージェントを呼び出す Home Assistant 自動化として配線します。',
        numberedItems: [
          { title: '外出時のリマインダー', whyItMatters: 'プロンプト：「次の1時間で雨になりそうで、私が出かけるなら、傘を思い出させて。」 モデルは通知の前に天気エンティティと在宅を確認します——ルールなら明示的な閾値が必要です。' },
          { title: '適応的な夜のシーン', whyItMatters: 'プロンプト：「最後の人が日没後に帰宅したら、誰かがすでに寝ていない限り、暖かく控えめなシーンにして。」 モデルは在宅・時刻・睡眠状態をまとめて比較考量します。' },
          { title: '省エネの一言', whyItMatters: 'プロンプト：「暖房がついていて、窓が5分以上開いているなら、暖房を下げてどの部屋か教えて。」 モデルは二つのセンサー状態を組み合わせ、その動作を説明します。' },
        ],
        items: [
          '推論できる文脈を持たせるため、関連するエンティティ状態をプロンプトでモデルに与えましょう。',
          'エンドツーエンドの構成は[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'アーキテクチャ',
        content:
          '**自動化は Home Assistant で発火し、会話エージェントを介して文脈をローカルLLMへ渡し、モデルが機器の動作を返します。** すべてローカルに動きます。',
        items: [
          'Home Assistant の自動化がトリガーと現在のエンティティ状態を供給します。',
          'ローカルモデル（[Ollama 統合](/ja/smart-home/home-assistant-ollama-integration)経由）が推論し、動作を返します。',
          'Assist に公開したエンティティだけが操作可能で、それがモデルにできることを制限します。',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: '信頼性とガードレール',
        content:
          '**安全に直結する自動化は決定論的に保ち、モデルの範囲を絞り、レイテンシを低く保つため小型で高速なモデルを優先しましょう。** LLM 自動化は重要機能を強化すべきであり、所有すべきではありません。',
        items: [
          '**安全をモデルに任せない：** 火災報知器、ドアロック、セキュリティは素のルールのまま。',
          '**範囲を絞る：** モデルに必要なエンティティだけを公開し、動作を制限するシステムプロンプトを加える。',
          '**レイテンシでモデルを選ぶ：** [スマートホーム制御に最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home)を参照。',
          '**記録して見直す：** 監視なしで信頼する前に、会話ログを確認してモデルが意図通り動くか確かめる。',
          '**エージェントのパターンとワークフローは** [本当に機能する自律ローカルエージェント](/ja/power-local-llm/autonomous-local-agents-actually-work)（クラスター横断）を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ローカルLLMの自動化は信頼できるほど確かですか？', a: '快適さや利便性の自動化なら、範囲を絞り先に挙動を確認すれば、はい。安全に直結する自動化（施錠、アラーム、煙感知器）はモデルを介さず、決定論的ルールとして保ちましょう。' },
          { q: 'LLM はすべての自動化を置き換えますか？', a: 'いいえ。単純・時間に敏感・安全に直結するトリガーには決定論的ルールを使い、文脈・ニュアンス・自然言語の目標が必要な自動化に LLM を充てましょう。両者は協調します。' },
          { q: 'AI 自動化に最適なモデルは？', a: '小型で高速な関数呼び出しモデルは、機器の動作を確実に出力しつつ自動化のレイテンシを低く保ちます。ハードウェアに合わせた候補はスマートホーム向け最適ローカルLLMモデルのガイドを参照。' },
          { q: 'LLM 自動化はどれくらいレイテンシを足しますか？', a: 'レイテンシはモデルサイズとハードウェア次第です。GPU や NPU 付きのミニPCの小型モデルは、即時でない自動化には十分速く応答します；レイテンシに敏感なトリガーをモデル経由にしないようにしましょう。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — これらの自動化が使うアーキテクチャ',
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — 会話エージェントを配線する',
          '[スマートホーム制御に最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home) — 低レイテンシのモデルを選ぶ',
          '[本当に機能する自律ローカルエージェント](/ja/power-local-llm/autonomous-local-agents-actually-work) — クラスター横断：エージェントのパターン',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルLLMでより賢い家の自動化（2026）',
      description: 'ローカルLLM（2026）でコンテキスト対応のホームオートメーション構築：自然言語ルールが固定のif-thenを超える。例、プロンプト、アーキテクチャ、ガードレールを解説。Home Assistantとの連携方法と実際の設定手順も紹介。',
      url: 'https://www.promptquorum.com/ja/smart-home/ai-automations-local-llm',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'ホーム自動化' }, { '@type': 'Thing', name: 'ローカルLLM' }, { '@type': 'Thing', name: '文脈対応の自動化' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'ローカルLLMの自動化は信頼できるほど確かですか？', acceptedAnswer: { '@type': 'Answer', text: '快適さや利便性の自動化なら、範囲を絞り先に挙動を確認すれば、はい。安全に直結する自動化は決定論的ルールとして保ちましょう。' } },
        { '@type': 'Question', name: 'LLM はすべての自動化を置き換えますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。単純・時間に敏感・安全に直結するトリガーには決定論的ルールを使い、文脈や自然言語の目標が必要な自動化に LLM を充てましょう。' } },
        { '@type': 'Question', name: 'AI 自動化に最適なモデルは？', acceptedAnswer: { '@type': 'Answer', text: '小型で高速な関数呼び出しモデルは、機器の動作を確実に出力しつつレイテンシを低く保ちます。ハードウェアに合わせて選びましょう。' } },
        { '@type': 'Question', name: 'LLM 自動化はどれくらいレイテンシを足しますか？', acceptedAnswer: { '@type': 'Answer', text: 'モデルサイズとハードウェア次第です。GPU や NPU 付きのミニPCの小型モデルは、即時でない自動化には十分速く応答します。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Automações Domésticas Mais Inteligentes com um LLM Local (2026)',
    seoTitle: 'Automação com IA 2026: LLM Local além do IFTTT',
    intro:
      'Um LLM local permite automações domésticas conscientes do contexto descritas em linguagem natural — indo além das rígidas regras se-isto-então-aquilo. Este guia explica os limites da automação baseada em regras, o que um LLM acrescenta, automações de exemplo reais com seus prompts, a arquitetura e as salvaguardas que a mantêm confiável, tudo rodando localmente sem nuvem.',
    metaDescription:
      'Automações domésticas com IA 2026: LLM local além do se-isto-então. Regras em linguagem natural, exemplos, prompts e salvaguardas.',
    twitterDescription:
      'Um LLM local torna as automações domésticas conscientes do contexto: "se parecer que vai chover e eu estiver saindo, me lembre". Exemplos, prompts e salvaguardas.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant projetando automações conscientes do contexto',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'automação doméstica ia llm local',
      'home assistant llm automação',
      'automação doméstica consciente do contexto',
      'automação doméstica linguagem natural',
      'automações llm local',
    ],
    leadAnswerBlock:
      '**Um LLM local deixa você escrever automações como objetivos em linguagem natural e raciocinar sobre o contexto — hora, presença e estados de sensores — em vez de cablear gatilhos rígidos.** Ele roda via Ollama e Home Assistant no seu próprio hardware, então a automação consciente do contexto não precisa de nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Como um LLM local melhora a automação doméstica?',
        answer:
          'Um LLM local acrescenta uma camada que entende a intenção e o contexto, então uma automação pode ponderar a hora do dia, quem está em casa e os estados dos sensores frente a um objetivo em linguagem natural, em vez de disparar uma ação fixa por gatilho. Ele roda localmente via Ollama e Home Assistant, mantendo as regras de segurança determinísticas como automações simples.',
        bullets: [
          'Objetivos em linguagem natural em vez de regras rígidas gatilho → ação',
          'Raciocina sobre o contexto: hora, presença, sensores',
          'Roda localmente via Ollama + Home Assistant — sem nuvem',
          'Mantenha as regras críticas de segurança determinísticas, não guiadas pelo LLM',
          'Melhor com um modelo pequeno e rápido com chamada de funções',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Limites da automação baseada em regras', anchor: 'rule-limits' },
      { label: 'O que um LLM acrescenta', anchor: 'llm-adds' },
      { label: 'Automações de exemplo', anchor: 'examples' },
      { label: 'A arquitetura', anchor: 'architecture' },
      { label: 'Confiabilidade e salvaguardas', anchor: 'guardrails' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Um LLM local transforma regras rígidas gatilho-ação em automações conscientes do contexto descritas em linguagem natural, rodando localmente via Ollama e Home Assistant.' },
      { type: 'plain-terms', content: 'Automações normais são exatas: se detectar movimento, acende a luz. Elas não conseguem ponderar "já está claro?" ou "tem alguém em casa?" a menos que você programe cada caso. Um LLM local consegue ler o contexto e um objetivo em linguagem natural e decidir, e roda no seu próprio hardware, então permanece privado.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'A automação baseada em regras é determinística, mas cega ao contexto que não foi programado',
          'Um LLM local raciocina sobre a intenção e o contexto: hora, presença, clima, estados de sensores',
          'Descreva as automações como objetivos em linguagem natural; o modelo os mapeia para ações de dispositivo',
          'Rode-o localmente via Ollama + Home Assistant — sem nuvem, sem dados saindo de casa',
          'Mantenha as automações críticas de segurança (fechaduras, alarmes) como regras determinísticas',
          'Use um modelo pequeno com chamada de funções e restrinja o escopo para a confiabilidade',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: 'Os limites da automação baseada em regras',
        content:
          '**A automação baseada em regras dispara uma ação fixa para um gatilho fixo e não consegue ponderar contexto que não foi explicitamente programado.** Ela é confiável e rápida, mas cada nuance precisa de outra condição escrita à mão.',
        items: [
          '**Explosão combinatória:** "acender a luz, a menos que esteja claro, a menos que alguém durma, a menos que eu esteja fora" vira muitas condições aninhadas.',
          '**Sem intenção:** as regras não conseguem interpretar "deixe aconchegante" — apenas estados exatos de entidades.',
          '**Casos limite frágeis:** situações não programadas passam sem um padrão sensato.',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'O que um LLM acrescenta: contexto, intenção, linguagem',
        content:
          '**Um LLM acrescenta três coisas que faltam às regras: entende a linguagem natural, infere a intenção e raciocina sobre vários sinais de contexto de uma vez.** Use-o onde a nuance importa; mantenha regras onde o determinismo importa.',
        columns: ['Aspecto', 'Baseado em regras', 'Guiado por LLM local'],
        rows: [
          { 'Aspecto': 'Tratamento de gatilhos', 'Baseado em regras': 'Ação fixa por gatilho', 'Guiado por LLM local': 'Pondera o contexto antes de agir' },
          { 'Aspecto': 'Formulação', 'Baseado em regras': 'Apenas condições exatas', 'Guiado por LLM local': 'Objetivos em linguagem natural' },
          { 'Aspecto': 'Contexto', 'Baseado em regras': 'Apenas estados programados', 'Guiado por LLM local': 'Hora, presença, sensores juntos' },
          { 'Aspecto': 'Casos limite', 'Baseado em regras': 'Passam sem tratamento', 'Guiado por LLM local': 'Padrão razoável a partir do contexto' },
        ],
      },
      examples: {
        id: 'examples',
        title: 'Automações de exemplo (com os prompts)',
        content:
          '**Estes exemplos mostram onde uma automação guiada por LLM supera uma regra: cada um é um objetivo em linguagem natural que o modelo resolve frente ao contexto ao vivo.** Cableie-os como automações do Home Assistant que chamam o agente de conversa.',
        numberedItems: [
          { title: 'Lembrete ao sair', whyItMatters: 'Prompt: "Se parecer que vai chover na próxima hora e eu estiver saindo, me lembre de levar um guarda-chuva." O modelo verifica a entidade do clima e a presença antes de notificar — uma regra precisaria de limiares explícitos.' },
          { title: 'Cena noturna adaptativa', whyItMatters: 'Prompt: "Quando a última pessoa chegar em casa após o pôr do sol, defina uma cena quente e de pouca luz, a menos que alguém já esteja dormindo." O modelo pondera presença, hora e estado de sono juntos.' },
          { title: 'Aviso de energia', whyItMatters: 'Prompt: "Se o aquecimento estiver ligado e uma janela estiver aberta há mais de cinco minutos, abaixe o aquecimento e me diga qual cômodo." O modelo combina dois estados de sensor e explica sua ação.' },
        ],
        items: [
          'Forneça ao modelo os estados de entidade relevantes no prompt para que ele tenha o contexto sobre o qual raciocinar.',
          'Para a configuração de ponta a ponta, veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'A arquitetura',
        content:
          '**A automação dispara no Home Assistant, passa o contexto ao LLM local via o agente de conversa, e o modelo retorna ações de dispositivo.** Tudo roda localmente.',
        items: [
          'A automação do Home Assistant fornece o gatilho e os estados atuais das entidades.',
          'O modelo local (via a [integração do Ollama](/pt/smart-home/home-assistant-ollama-integration)) raciocina e retorna ações.',
          'Apenas as entidades que você expõe ao Assist são acionáveis, o que limita o que o modelo pode fazer.',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: 'Confiabilidade e salvaguardas',
        content:
          '**Mantenha as automações críticas de segurança determinísticas, restrinja o escopo do modelo e prefira um modelo pequeno e rápido para manter a latência baixa.** As automações com LLM devem aprimorar, não possuir, as funções críticas.',
        items: [
          '**Nunca roteie a segurança ao modelo:** alarmes de fumaça, fechaduras e segurança ficam como regras simples.',
          '**Restrinja o escopo:** exponha só as entidades que o modelo precisa e adicione um prompt de sistema que limite as ações.',
          '**Escolha o modelo pela latência:** veja [melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home).',
          '**Registre e revise:** confira os registros de conversa para confirmar que o modelo age como esperado antes de confiar nele sem supervisão.',
          '**Para padrões de agentes e fluxos de trabalho, veja** [agentes locais autônomos que realmente funcionam](/pt/power-local-llm/autonomous-local-agents-actually-work) (entre clusters).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'As automações com LLM local são confiáveis o bastante para confiar nelas?', a: 'Para automações de conforto e comodidade, sim — quando você restringe o escopo e revisa o comportamento primeiro. Mantenha as automações críticas de segurança (fechaduras, alarmes, detectores de fumaça) como regras determinísticas em vez de roteá-las pelo modelo.' },
          { q: 'Um LLM substitui todas as minhas automações?', a: 'Não. Use regras determinísticas para gatilhos simples, sensíveis ao tempo ou críticos de segurança, e reserve o LLM para automações que precisam de contexto, nuance ou objetivos em linguagem natural. Os dois trabalham juntos.' },
          { q: 'Qual modelo é melhor para automações com IA?', a: 'Um modelo pequeno, rápido e com chamada de funções mantém a latência da automação baixa enquanto emite ações de dispositivo de forma confiável. Veja o guia dos melhores modelos LLM locais para casa inteligente para escolhas ajustadas ao hardware.' },
          { q: 'Quanta latência as automações com LLM acrescentam?', a: 'A latência depende do tamanho do modelo e do hardware. Um modelo pequeno em um mini PC com GPU ou NPU responde rápido o bastante para automações não instantâneas; evite rotear gatilhos críticos de latência pelo modelo.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — a arquitetura que essas automações usam',
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — cablear o agente de conversa',
          '[Melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home) — escolha um modelo de baixa latência',
          '[Agentes locais autônomos que realmente funcionam](/pt/power-local-llm/autonomous-local-agents-actually-work) — entre clusters: padrões de agentes',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Automações Domésticas Mais Inteligentes com um LLM Local (2026)',
      description: 'Automações domésticas com IA 2026: LLM local além do se-isto-então. Regras em linguagem natural, exemplos, prompts e salvaguardas.',
      url: 'https://www.promptquorum.com/pt/smart-home/ai-automations-local-llm',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Automação residencial' }, { '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Automação consciente do contexto' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'As automações com LLM local são confiáveis o bastante para confiar nelas?', acceptedAnswer: { '@type': 'Answer', text: 'Para automações de conforto e comodidade, sim — quando você restringe o escopo e revisa o comportamento primeiro. Mantenha as automações críticas de segurança como regras determinísticas.' } },
        { '@type': 'Question', name: 'Um LLM substitui todas as minhas automações?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Use regras determinísticas para gatilhos simples, sensíveis ao tempo ou críticos, e reserve o LLM para automações ricas em contexto e em linguagem natural.' } },
        { '@type': 'Question', name: 'Qual modelo é melhor para automações com IA?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo pequeno, rápido e com chamada de funções mantém a latência baixa enquanto emite ações de dispositivo de forma confiável. Ajuste o modelo ao seu hardware.' } },
        { '@type': 'Question', name: 'Quanta latência as automações com LLM acrescentam?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do tamanho do modelo e do hardware. Um modelo pequeno em um mini PC com GPU ou NPU responde rápido o bastante para automações não instantâneas.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '用本地 LLM 实现更聪明的家庭自动化（2026）',
    seoTitle: 'AI 家庭自动化 2026：超越 IFTTT 的本地 LLM',
    intro:
      '本地 LLM 让你用自然语言描述具备情境感知的家庭自动化——超越僵化的“如果-那么”规则。本指南讲解基于规则的自动化的局限、LLM 带来了什么、带提示词的真实示例自动化、架构，以及保持其可靠的护栏，全部在本地运行、无需云端。',
    metaDescription:
      '用本地LLM构建情境感知家庭自动化（2026年）：自然语言规则替代僵硬触发条件，包含真实使用示例、提示词设计思路、系统架构说明和可靠性护栏，全程本地运行无需任何云端服务。',
    twitterDescription:
      '本地 LLM 让家庭自动化具备情境感知：“如果看起来要下雨而我要出门，就提醒我。”示例、提示词和护栏。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '设计情境感知自动化的 Home Assistant 用户',
    primaryTerm: 'AI home automation local LLM',
    targetKeywords: [
      'ai 家庭自动化 本地llm',
      'home assistant llm 自动化',
      '情境感知 家庭自动化',
      '自然语言 家庭自动化',
      '本地llm 自动化',
    ],
    leadAnswerBlock:
      '**本地 LLM 让你把自动化写成自然语言目标，并就情境——时间、在家情况和传感器状态——进行推理，而不是去连线僵化的触发器。** 它经由 Ollama 和 Home Assistant 在你自己的硬件上运行，因此情境感知自动化无需云端。',
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 如何改进家庭自动化？',
        answer:
          '本地 LLM 增加了一层理解意图与情境的能力，因此自动化可以把一天中的时间、谁在家以及传感器状态，对照一个自然语言目标加以权衡，而不是每个触发器只触发一个固定动作。它经由 Ollama 和 Home Assistant 在本地运行，并把确定性的安全规则保留为普通自动化。',
        bullets: [
          '用自然语言目标取代僵化的触发器→动作规则',
          '就情境进行推理：时间、在家情况、传感器',
          '经由 Ollama + Home Assistant 在本地运行——无云端',
          '把安全攸关的规则保持为确定性，而非交给 LLM',
          '小而快的函数调用模型最为合适',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '基于规则的自动化的局限', anchor: 'rule-limits' },
      { label: 'LLM 带来了什么', anchor: 'llm-adds' },
      { label: '示例自动化', anchor: 'examples' },
      { label: '架构', anchor: 'architecture' },
      { label: '可靠性与护栏', anchor: 'guardrails' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '本地 LLM 把僵化的触发器-动作规则，变成用自然语言描述、具备情境感知的自动化，经由 Ollama 和 Home Assistant 在本地运行。' },
      { type: 'plain-terms', content: '普通自动化是精确的：检测到移动就开灯。除非你为每种情况编写脚本，否则它们无法权衡“是不是已经很亮了？”或“有人在家吗？”。本地 LLM 能读取情境和一个自然语言目标并做出判断——而且它在你自己的硬件上运行，因此保持私密。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '基于规则的自动化是确定性的，但对未编写脚本的情境视而不见',
          '本地 LLM 就意图和情境进行推理：时间、在家情况、天气、传感器状态',
          '把自动化描述为自然语言目标；模型将其映射到设备动作',
          '经由 Ollama + Home Assistant 在本地运行——无云端，数据不出家门',
          '把安全攸关的自动化（门锁、报警）保持为确定性规则',
          '为可靠性使用小型函数调用模型并限制范围',
        ],
      },
      ruleLimits: {
        id: 'rule-limits',
        title: '基于规则的自动化的局限',
        content:
          '**基于规则的自动化为固定触发器触发固定动作，无法权衡未被明确编写脚本的情境。** 它可靠又快速，但每一处细微差别都需要再写一条手写条件。',
        items: [
          '**组合爆炸：**“开灯，除非已经很亮，除非有人在睡，除非我不在家”会变成大量嵌套条件。',
          '**没有意图：** 规则无法解释“弄得温馨些”——只能处理精确的实体状态。',
          '**脆弱的边缘情况：** 未编写脚本的情形会漏过，没有合理的默认处理。',
        ],
      },
      llmAdds: {
        id: 'llm-adds',
        title: 'LLM 带来了什么：情境、意图、语言',
        content:
          '**LLM 带来规则所缺的三样东西：它理解自然语言、推断意图，并同时就多个情境信号进行推理。** 在细微差别重要之处用它；在确定性重要之处保留规则。',
        columns: ['方面', '基于规则', '由本地 LLM 驱动'],
        rows: [
          { '方面': '触发处理', '基于规则': '每个触发器固定动作', '由本地 LLM 驱动': '行动前权衡情境' },
          { '方面': '表达', '基于规则': '仅精确条件', '由本地 LLM 驱动': '自然语言目标' },
          { '方面': '情境', '基于规则': '仅编写脚本的状态', '由本地 LLM 驱动': '时间、在家情况、传感器一并考虑' },
          { '方面': '边缘情况', '基于规则': '漏过', '由本地 LLM 驱动': '依情境给出合理默认' },
        ],
      },
      examples: {
        id: 'examples',
        title: '示例自动化（附提示词）',
        content:
          '**这些示例展示了由 LLM 驱动的自动化在哪里胜过规则：每一个都是模型对照实时情境去解决的自然语言目标。** 把它们连线为调用对话代理的 Home Assistant 自动化。',
        numberedItems: [
          { title: '出门提醒', whyItMatters: '提示词：“如果接下来一小时看起来要下雨而我要出门，就提醒我带把伞。”模型在通知前会检查天气实体和在家情况——规则则需要明确的阈值。' },
          { title: '自适应夜间场景', whyItMatters: '提示词：“当最后一个人在日落后到家时，设置一个温暖、低亮度的场景，除非已经有人在睡。”模型把在家情况、时间和睡眠状态一并权衡。' },
          { title: '节能提示', whyItMatters: '提示词：“如果暖气开着且某扇窗已开超过五分钟，就调低暖气并告诉我是哪个房间。”模型结合两个传感器状态并解释其动作。' },
        ],
        items: [
          '在提示词中把相关的实体状态提供给模型，让它有可供推理的情境。',
          '端到端配置参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: '架构',
        content:
          '**自动化在 Home Assistant 中触发，经由对话代理把情境传给本地 LLM，模型返回设备动作。** 一切都在本地运行。',
        items: [
          'Home Assistant 自动化提供触发器和当前的实体状态。',
          '本地模型（经由 [Ollama 集成](/zh/smart-home/home-assistant-ollama-integration)）进行推理并返回动作。',
          '只有你向 Assist 暴露的实体才可被操作，这限定了模型能做什么。',
        ],
      },
      guardrails: {
        id: 'guardrails',
        title: '可靠性与护栏',
        content:
          '**把安全攸关的自动化保持为确定性，限制模型的范围，并优先选小而快的模型以保持低延迟。** LLM 自动化应当增强而非掌管关键功能。',
        items: [
          '**绝不把安全交给模型：** 烟雾报警、门锁和安防保持为普通规则。',
          '**限制范围：** 只暴露模型需要的实体，并加一段限制动作的系统提示词。',
          '**按延迟选模型：** 参见[智能家居控制的最佳本地 LLM 模型](/zh/smart-home/best-local-llm-models-smart-home)。',
          '**记录并复查：** 在无人值守地信任之前，查看对话日志确认模型按预期行事。',
          '**关于代理模式与工作流，参见** [真正有效的自主本地代理](/zh/power-local-llm/autonomous-local-agents-actually-work)（跨集群）。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '本地 LLM 的自动化可靠到值得信任吗？', a: '对于舒适和便利类自动化，是的——前提是你限制范围并先复查行为。把安全攸关的自动化（门锁、报警、烟雾探测器）保持为确定性规则，而不要交给模型路由。' },
          { q: 'LLM 会取代我所有的自动化吗？', a: '不会。对简单、时间敏感或安全攸关的触发器使用确定性规则，把需要情境、细微差别或自然语言目标的自动化留给 LLM。两者协同工作。' },
          { q: 'AI 自动化用哪个模型最好？', a: '小而快、支持函数调用的模型能在可靠地输出设备动作的同时保持低自动化延迟。匹配硬件的选择参见智能家居最佳本地 LLM 模型指南。' },
          { q: 'LLM 自动化会增加多少延迟？', a: '延迟取决于模型大小和硬件。带 GPU 或 NPU 的迷你 PC 上的小型模型，对非即时自动化响应足够快；不要把对延迟敏感的触发器交给模型路由。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 这些自动化所用的架构',
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 连线对话代理',
          '[智能家居控制的最佳本地 LLM 模型](/zh/smart-home/best-local-llm-models-smart-home) — 选择低延迟模型',
          '[真正有效的自主本地代理](/zh/power-local-llm/autonomous-local-agents-actually-work) — 跨集群：代理模式',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '用本地 LLM 实现更聪明的家庭自动化（2026）',
      description: '用本地LLM构建情境感知家庭自动化（2026年）：自然语言规则替代僵硬触发条件，包含真实使用示例、提示词设计思路、系统架构说明和可靠性护栏，全程本地运行无需任何云端服务。',
      url: 'https://www.promptquorum.com/zh/smart-home/ai-automations-local-llm',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '家庭自动化' }, { '@type': 'Thing', name: '本地 LLM' }, { '@type': 'Thing', name: '情境感知自动化' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '本地 LLM 的自动化可靠到值得信任吗？', acceptedAnswer: { '@type': 'Answer', text: '对于舒适和便利类自动化，是的——前提是你限制范围并先复查行为。把安全攸关的自动化保持为确定性规则。' } },
        { '@type': 'Question', name: 'LLM 会取代我所有的自动化吗？', acceptedAnswer: { '@type': 'Answer', text: '不会。对简单、时间敏感或安全攸关的触发器使用确定性规则，把需要情境和自然语言目标的自动化留给 LLM。' } },
        { '@type': 'Question', name: 'AI 自动化用哪个模型最好？', acceptedAnswer: { '@type': 'Answer', text: '小而快、支持函数调用的模型能在可靠输出设备动作的同时保持低延迟。按你的硬件匹配模型。' } },
        { '@type': 'Question', name: 'LLM 自动化会增加多少延迟？', acceptedAnswer: { '@type': 'Answer', text: '取决于模型大小和硬件。带 GPU 或 NPU 的迷你 PC 上的小型模型，对非即时自动化响应足够快。' } },
      ],
    },
  },
}
