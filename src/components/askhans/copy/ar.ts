import type { AskCopy } from './types'

export const copy: AskCopy = {
  name: 'Ask Hans',
  tagline: 'مساعد ذكاء اصطناعي للذكاء الاصطناعي المحلي',
  close: 'إغلاق — يبقى Ask Hans على هيئة أيقونة',
  maximize: 'ملء الشاشة',
  restore: 'استعادة حجم النافذة',
  newChat: 'جديد',
  newChatLabel: 'بدء محادثة جديدة',
  logoLabel: 'فتح Ask Hans',
  logoTitle: 'Ask Hans — انقر للفتح',

  welcomeTitle: 'أهلًا بكم في Ask Hans، دليلكم التفاعلي للذكاء الاصطناعي المحلي.',
  welcomeBody:
    'أبحث في محتوى PromptQuorum وأجيب عن أسئلتكم حول التطبيقات والأجهزة والأدلة. اختاروا نقطة بداية أو اطرحوا سؤالكم الخاص في الأسفل.',
  welcomeCards: [
    { icon: 'LayoutGrid', title: 'اعثروا على التطبيقات والأدلة المناسبة', question: 'ما التطبيقات والأدلة المناسبة لي؟ أريد تجربة الذكاء الاصطناعي المحلي.' },
    { icon: 'ArrowLeftRight', title: 'قارنوا التطبيقات واعرفوا البدائل', question: 'هل يمكنك مساعدتي في مقارنة التطبيقات والعثور على بدائل؟' },
    { icon: 'Cpu', title: 'تحققوا مما إذا كان جهازكم يشغّل نموذجًا', question: 'هل يستطيع جهازي تشغيل نموذج ذكاء اصطناعي معيّن؟ يُرجى أن تسألني عن حاسوبي.' },
    { icon: 'Scale', title: 'اعرفوا التراخيص واحصلوا على حزمة برامج مناسبة', question: 'اشرح لي التراخيص واقترح عليّ حزمة برامج مناسبة للذكاء الاصطناعي المحلي.' },
  ],

  previousChat: (n: number) =>
    `محادثة سابقة · ${n === 1 ? 'رسالة واحدة' : n === 2 ? 'رسالتان' : n >= 3 && n <= 10 ? `${n} رسائل` : `${n} رسالة`}`,
  continueChat: 'تابعوا المحادثة هنا',

  inputLabel: 'سؤالكم إلى Ask Hans',
  inputPlaceholder: 'اطرحوا سؤالًا …',
  send: 'إرسال',
  charCount: (n: number, max: number) => `${n} / ${max}`,
  aiNotice: 'Ask Hans ذكاء اصطناعي وقد يخطئ. يُرجى عدم إدخال بيانات شخصية.',
  withdraw: 'سحب الموافقة',
  thinking: 'Ask Hans يفكّر …',
  searching: 'يبحث في PromptQuorum …',
  panelTools: 'يستخدم أداة …',

  errors: {
    unavailable: 'Ask Hans غير متاح حاليًا.',
    failed: 'للأسف لم تنجح العملية. يُرجى المحاولة مرة أخرى.',
    rephrase: 'للأسف لم أتمكن من الإجابة عن هذا السؤال. يُرجى إعادة صياغته أو تقسيمه إلى أسئلة أصغر.',
    rate: 'تم طرح عدد كبير جدًا من الأسئلة حاليًا. يُرجى الانتظار قليلًا ثم المحاولة مرة أخرى.',
    limit: (n: number) => `تم بلوغ حدّ ${n} رسالة لهذه الزيارة.`,
    refused: 'للأسف لا أستطيع الإجابة عن ذلك. لا تترددوا في طرح سؤال آخر.',
    disabled: 'Ask Hans غير متاح في الوقت الحالي.',
    tooLong: (max: number) => `يُرجى الاختصار: يجب ألا يزيد طول السؤال على ${max} حرفًا.`,
  },
  retry: 'إعادة المحاولة',
  followupsLabel: "أسئلة متابعة مقترحة",

  panelLabelPrefix: 'الموضوع',
  panelLinksHeading: 'صفحات ذات صلة',

  // DRAFT — Hans reviews and approves before launch (see docs/askhans-privacy-draft.de.md).
  consentTitle: 'قبل أن نبدأ',
  consentParagraphs: [
    'يجيب Ask Hans عن أسئلتكم بمساعدة الذكاء الاصطناعي (Claude من Anthropic) استنادًا إلى محتوى PromptQuorum. ولهذا الغرض يُرسَل ما تدخلونه إلى خادمنا وإلى Anthropic. يُرجى عدم إدخال بيانات شخصية.',
    'إذا اخترتم «نعم، أوافق»، فإنكم تسمحون لنا بأن نسجّل بصورة مجهولة، لأغراض إحصائية ولتحسين Ask Hans ومحتوانا: موضوع سؤالكم، والتطبيقات وفئات الدليل والأدوات التي بحث عنها Ask Hans للإجابة، واللغة، والروابط التي تنقرون عليها، والميزات التي تستخدمونها (مثل الأسئلة اللاحقة المقترحة أو بدء محادثة جديدة)، والوقت، ومعرّف زيارة عشوائيًا لا يرتبط بكم. لا تتضمن الإحصاءات نص السؤال أو الإجابة ولا عنوان IP ولا الاسم. ولا ننشر سوى أرقام مجمّعة.',
    'موافقتكم طوعية. يمكنكم استخدام Ask Hans من دونها، ويمكنكم سحبها في أي وقت بأثر مستقبلي. وكإثبات لقراركم نحفظ وقته وإصدار النص ومعرّف الزيارة العشوائي. وبغض النظر عن اختياركم، نحصي بصورة مجهولة عدد مرات فتح Ask Hans وعدد الإجابات المقدَّمة (إجماليات فقط: بلا معرّف وبلا نص).',
  ],
  consentPrivacyLink: 'المزيد في سياسة الخصوصية.',
  consentPrivacyHref: '/ar/privacy',
  consentSaveLabel: "حفظ محادثاتي على هذا الجهاز لمدة 7 أيام",
  consentSaveOn: "تُحفظ في متصفحك على هذا الحاسوب لمدة 7 أيام. يمكنك حذفها في أي وقت.",
  consentSaveOff: "لن تُحفظ محادثاتك. وتختفي عند إغلاق الصفحة.",
  consentYes: 'نعم، أوافق',
  consentNo: 'لا، شكرًا',
  consentQuestionLabel: 'سؤالكم (سيُرسَل بعد اختياركم):',

  dir: 'rtl',
  devNotice: 'الأداة قيد التطوير – يسعدنا تلقّي ملاحظاتكم.',
  contactLabel: 'إرسال الملاحظات عبر البريد الإلكتروني',
  welcomeAria: 'أهلًا بكم',
  feedback: {
    prompt: 'ما مدى فائدة Ask Hans؟',
    star: (n: number) => `${n} من 5 نجوم`,
    commentPlaceholder: 'اختياري: ما الذي يمكننا تحسينه؟ يُرجى عدم إدخال بيانات شخصية.',
    send: 'إرسال الملاحظات',
    thanks: 'شكرًا على ملاحظاتكم!',
    error: 'تعذّر إرسال الملاحظات. يُرجى المحاولة لاحقًا.',
  },
  info: {
    label: "حول Ask Hans",
    title: "ما هو Ask Hans؟",
    intro: "Ask Hans مساعد ذكاء اصطناعي يجيب عن أسئلتكم بالاعتماد فقط على محتوى PromptQuorum الخاص: دليل البرامج والأدلة والمراجعات وبيانات الأجهزة في هذا الموقع. وهو أداة تجريبية (بيتا) قيد التطوير، وليس Hans نفسه.",
    canTitle: "ما الذي يستطيع فعله",
    can: ["العثور على تطبيقات الذكاء الاصطناعي المحلي من دليل البرامج ومقارنتها وذكر بدائل لها.", "التحقق مما إذا كان جهازكم (RAM وVRAM) قادرًا على تشغيل نموذج ما.", "شرح تراخيص البرامج بلغة بسيطة واقتراح مجموعة برامج مناسبة.", "توجيهكم إلى الأدلة والمراجعات وصفحات الأجهزة المطابقة في هذا الموقع بلغتكم."],
    cannotTitle: "ما الذي لا يستطيع فعله",
    cannot: ["البحث عن أي شيء خارج promptquorum.com: لا بحث في الويب ولا أخبار ولا طقس ولا أسعار فورية.", "أن يكون صحيحًا في كل مرة: فهو ذكاء اصطناعي وقد يخطئ. تحققوا من المعلومات المهمة في الصفحات المرتبطة.", "تقديم استشارات قانونية أو طبية أو مالية أو متعلقة بالتمديدات الكهربائية. في هذه الأمور استشيروا مختصًا مؤهلًا.", "تذكّركم بعد مغادرتكم: تبقى المحادثات في متصفحكم (لمدة 7 أيام فقط إذا اخترتم حفظها) ولا تُخزَّن على خادمنا.", "تثبيت أي شيء أو تغييره أو شراءه نيابةً عنكم، أو الإجابة دون حد: {messages} أسئلة لكل زيارة، و{chars} حرفًا لكل سؤال."],
    privacy: "يُرسل سؤالكم إلى خادمنا وإلى Anthropic (Claude) لإنشاء الإجابة. يُرجى عدم إدخال بيانات شخصية.",
    close: "إغلاق",
  },

  copyUi: {
    copy: "نسخ",
    copied: "تم النسخ",
    copyAnswer: "نسخ الإجابة",
  },

  panel: {
    relatedHeading: "ما يناسب سؤالكم",
    relatedEarlier: "إجابات سابقة",
    panelHide: "إخفاء لوحة المواضيع",
    panelShow: "إظهار لوحة المواضيع",
    historyHeading: "المحادثات السابقة",
    historyHide: "إخفاء المحادثات السابقة",
    historyShow: (n: number) => `إظهار المحادثات السابقة (${n})`,
    historyClear: "حذف المحادثات المحفوظة",
  },

  search: {
    badge: "جديد · تجريبي",
    headline: "اطرحوا سؤالكم — Ask Hans يجيب",
    pitch: "بدلًا من قائمة روابط، تحصلون على إجابة مبنية على دليل البرامج والأدلة الإرشادية وبيانات العتاد في PromptQuorum، بلغتكم. أسلوب جديد للبحث في الموقع، ما زال قيد التطوير.",
    examples: ["ما التطبيق الذي يبحث في ملفات PDF لديّ محليًا؟", "هل يعمل Llama على Mac بذاكرة 16 GB؟", "أي Mini PC يصلح خادمًا لـ Home Assistant؟"],
    placeholder: 'اطرحوا سؤالكم...',
    ariaLabel: 'اطرحوا سؤالًا على المساعد',
    modalAriaLabel: 'أسئلة وأجوبة مدعومة بالذكاء الاصطناعي',
    hint: 'اكتبوا سؤالكم واضغطوا Enter',
    close: 'إغلاق',
  },
  categories: {
    "prompt-engineering": {
      label: "Prompt Engineering",
      links: {
        "pe-hub": { title: "Prompt Engineering", description: "جميع الأدلة حول الموضوع في لمحة" },
        "pe-ides": { title: "بيئات تطوير Prompt Engineering", description: "أفضل أدوات كتابة الـ prompts" },
        "pe-mgmt": { title: "إدارة الـ prompts", description: "منصات لإدارة الـ prompts" },
      },
    },
    "local-llms": {
      label: "نماذج LLM المحلية",
      links: {
        "ll-what": { title: "ما هي نماذج LLM المحلية؟", description: "مدخل إلى الذكاء الاصطناعي المحلي" },
        "ll-ollama": { title: "تثبيت Ollama", description: "خطوة بخطوة نحو أول نموذج" },
        "ll-beginner": { title: "نماذج للمبتدئين", description: "النماذج المناسبة للبداية" },
      },
    },
    "mini-pcs": {
      label: "الحواسيب المصغّرة",
      links: {
        "mp-best": { title: "أفضل الحواسيب المصغّرة للذكاء الاصطناعي المحلي", description: "مقارنة بين الحواسيب المصغّرة المناسبة" },
        "mp-amd": { title: "حواسيب AMD المصغّرة", description: "نظرة على الحواسيب المصغّرة بمعالج AMD" },
        "mp-run": { title: "ماذا يمكنني تشغيله؟", description: "افحصوا الجهاز واعثروا على النماذج المناسبة" },
      },
    },
    "gpus-vram": {
      label: "بطاقات الرسومات وVRAM",
      links: {
        "gp-best": { title: "أفضل وحدات GPU لنماذج LLM المحلية", description: "مقارنة بين بطاقات الرسومات" },
        "gp-apple": { title: "Apple Silicon أم NVIDIA؟", description: "مقارنة بين منصتين" },
        "gp-can": { title: "هل يعمل ذلك على حاسوبي؟", description: "افحصوا التوافق بأنفسكم" },
      },
    },
    "smart-home": {
      label: "المنزل الذكي",
      links: {
        "sh-hub": { title: "المنزل الذكي", description: "الذكاء الاصطناعي المحلي في المنزل" },
        "sh-ha": { title: "البدء مع Home Assistant", description: "الخطوات الأولى مع Home Assistant" },
        "sh-hw": { title: "أجهزة للمنزل الذكي المحلي", description: "الأجهزة المناسبة" },
      },
    },
    "balcony-solar": {
      label: "محطة الشرفة الشمسية",
      links: {
        "bs-hub": { title: "محطة الشرفة الشمسية", description: "الأساسيات ونظرة عامة" },
        "bs-batt": { title: "بطاريات لمحطات الشرفة الشمسية", description: "نظرة على بطاريات التخزين" },
        "bs-anker": { title: "نظرة على Anker Solix", description: "نظام واحد بالتفصيل" },
      },
    },
    "find-app": {
      label: "ابحثوا عن تطبيق",
      links: {
        "fa-dir": { title: "دليل البرامج", description: "تصفّحوا كل التطبيقات وصفّوها" },
        "fa-iphone": { title: "تطبيقات iPhone", description: "الذكاء الاصطناعي المحلي على iPhone" },
        "fa-android": { title: "تطبيقات Android", description: "الذكاء الاصطناعي المحلي على Android" },
      },
    },
    "chat-clients": {
      label: "تطبيقات المحادثة",
      links: {
        "cc-comp": { title: "مقارنة تطبيقات المحادثة", description: "المحادثة والمساعدون جنبًا إلى جنب" },
        "cc-anything": { title: "اختبار AnythingLLM", description: "تطبيق محادثة بالتفصيل" },
        "cc-jan": { title: "اختبار Jan", description: "تطبيق محادثة بالتفصيل" },
      },
    },
    "inference-engines": {
      label: "محركات الاستدلال",
      links: {
        "ie-comp": { title: "مقارنة المحركات", description: "نظرة على التشغيل والنشر" },
        "ie-ollama": { title: "اختبار Ollama", description: "المحرك الأشهر بالتفصيل" },
        "ie-lms": { title: "اختبار LM Studio", description: "برنامج سطح مكتب بالتفصيل" },
      },
    },
    "agent-frameworks": {
      label: "أُطر الوكلاء",
      links: {
        "af-comp": { title: "مقارنة الأكواد والتطوير", description: "الوكلاء والأُطر جنبًا إلى جنب" },
        "af-langchain": { title: "اختبار LangChain", description: "إطار عمل بالتفصيل" },
        "af-openclaw": { title: "اختبار OpenClaw", description: "وكيل بالتفصيل" },
      },
    },
    "code-assistants": {
      label: "مساعدو البرمجة",
      links: {
        "ca-comp": { title: "مقارنة الأكواد والتطوير", description: "المساعدون والإضافات جنبًا إلى جنب" },
        "ca-continue": { title: "اختبار Continue", description: "إضافة IDE بالتفصيل" },
        "ca-cline": { title: "اختبار Cline", description: "مساعد بالتفصيل" },
      },
    },
    "document-pdf-chat": {
      label: "المستندات ومحادثة PDF",
      links: {
        "dp-comp": { title: "مقارنة المعرفة والبحث", description: "المستندات وRAG جنبًا إلى جنب" },
        "dp-anything": { title: "اختبار AnythingLLM", description: "تحدّثوا مع مستنداتكم" },
        "dp-ragflow": { title: "اختبار RAGFlow", description: "فهم المستندات بالتفصيل" },
      },
    },
    "rag-vector-databases": {
      label: "RAG وقواعد البيانات المتجهية",
      links: {
        "rv-comp": { title: "مقارنة المعرفة والبحث", description: "نظرة على RAG وقواعد البيانات المتجهية" },
        "rv-llama": { title: "اختبار LlamaIndex", description: "إطار RAG بالتفصيل" },
        "rv-qdrant": { title: "اختبار Qdrant", description: "قاعدة بيانات متجهية بالتفصيل" },
      },
    },
    "image-generation": {
      label: "توليد الصور",
      links: {
        "ig-comp": { title: "مقارنة الصور والفيديو", description: "الأدوات جنبًا إلى جنب" },
        "ig-comfy": { title: "اختبار ComfyUI", description: "مولّد صور بالتفصيل" },
        "ig-fooocus": { title: "اختبار Fooocus", description: "بداية سهلة" },
      },
    },
    "speech-to-text": {
      label: "التعرّف على الكلام",
      links: {
        "st-comp": { title: "مقارنة الكلام والصوت", description: "الأدوات جنبًا إلى جنب" },
        "st-whisper": { title: "اختبار Whisper.cpp", description: "التعرّف على الكلام بالتفصيل" },
        "st-ha": { title: "Whisper لـ Home Assistant", description: "تشغيل التحكم الصوتي محليًا" },
      },
    },
    "text-to-speech-voice": {
      label: "تحويل النص إلى كلام والصوت",
      links: {
        "tv-comp": { title: "مقارنة الكلام والصوت", description: "الأدوات جنبًا إلى جنب" },
        "tv-voicebox": { title: "اختبار Voicebox", description: "تحويل النص إلى كلام بالتفصيل" },
        "tv-dir": { title: "دليل البرامج", description: "تصفّحوا كل التطبيقات" },
      },
    },
    "personal-assistants": {
      label: "المساعدون الشخصيون",
      links: {
        "pa-comp": { title: "مقارنة المحادثة والمساعدين", description: "المساعدون جنبًا إلى جنب" },
        "pa-ha": { title: "اختبار Home Assistant Assist", description: "مساعد صوتي بالتفصيل" },
        "pa-claw": { title: "اختبار OpenClaw", description: "مساعد بالتفصيل" },
      },
    },
    "vision-ocr": {
      label: "التعرّف على الصور وOCR",
      links: {
        "vo-comp": { title: "مقارنة الصور والفيديو", description: "الأدوات جنبًا إلى جنب" },
        "vo-llava": { title: "اختبار LLaVA", description: "فهم الصور بالتفصيل" },
        "vo-immich": { title: "اختبار Immich", description: "إدارة الصور محليًا" },
      },
    },
    "workflow-automation": {
      label: "سير العمل والأتمتة",
      links: {
        "wa-n8n": { title: "اختبار n8n", description: "بناء سير العمل بالتفصيل" },
        "wa-dify": { title: "اختبار Dify", description: "أداة بناء سير العمل بالتفصيل" },
        "wa-langflow": { title: "اختبار Langflow", description: "التنسيق المرئي بالتفصيل" },
      },
    },
    "promptquorum-apps": {
      label: "تطبيقات PQ",
      links: {
        "pq-hub": { title: "تطبيقات PQ", description: "تطبيقات PromptQuorum" },
        "pq-dir": { title: "دليل البرامج", description: "تصفّحوا كل التطبيقات" },
        "pq-about": { title: "من نحن", description: "مَن يقف وراء PromptQuorum" },
      },
    },
    "default": {
      label: "عام",
      links: {
        "df-dir": { title: "دليل البرامج", description: "تصفّحوا كل التطبيقات وصفّوها" },
        "df-ll": { title: "نماذج LLM المحلية", description: "مدخل إلى الذكاء الاصطناعي المحلي" },
        "df-run": { title: "ماذا يمكنني تشغيله؟", description: "افحصوا الجهاز" },
      },
    },
  },
}
