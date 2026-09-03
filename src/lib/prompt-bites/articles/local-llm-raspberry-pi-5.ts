import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-en.webp',
    title: 'Can You Run a Local LLM on a Raspberry Pi 5?',
    seoTitle: 'Local LLM on Raspberry Pi 5: Ollama + AI HAT+ 2 (2026)',
    metaDescription: 'Yes — the Raspberry Pi 5 runs 1B-3B models via Ollama on its CPU. Add the Raspberry Pi AI HAT+ 2 (Hailo-10H NPU) for real GenAI acceleration on larger models.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Hobbyists considering a Raspberry Pi 5 for a local LLM project',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Yes — a Raspberry Pi 5 runs a local LLM today, and Ollama is the easiest way to do it: the 8GB board handles 1B-3B models like Llama 3.2 1B, Llama 3.2 3B, or Qwen3 1.7B on its CPU alone.</strong> For real GenAI acceleration and larger models, add the official Raspberry Pi AI HAT+ 2 — its Hailo-10H NPU is purpose-built for on-device LLM inference and ships with its own Hailo Ollama server.',
    toc: [
      { label: 'Quick Answer', anchor: '#quick-answer' },
      { label: 'Budget Setup: Pi 5 Alone', anchor: '#best-pick' },
      { label: 'Better: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 vs. Pi 5 + AI HAT+ 2 vs. GPU PC', anchor: '#comparison' },
      { label: 'Cooling for Sustained Inference', anchor: '#cooling' },
      { label: 'NVMe Storage for an Always-On Server', anchor: '#storage' },
      { label: 'What Can You Actually Build?', anchor: '#what-can-build' },
      { label: 'Bottom Line', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Can you run a local LLM on a Raspberry Pi 5?',
        answer: 'Yes. The Pi 5 (8GB) runs 1B-3B models via Ollama or llama.cpp on its CPU alone — that is roughly the practical ceiling. Add the official Raspberry Pi AI HAT+ 2 (Hailo-10H NPU) for dedicated GenAI acceleration, its own Hailo Ollama server, and headroom for larger models.',
        bullets: [
          'Best budget setup: Pi 5 8GB + active cooling — the cheapest way to experiment with tiny models.',
          'Best AI setup: Pi 5 + Raspberry Pi AI HAT+ 2 — a dedicated Hailo-10H NPU built for GenAI workloads.',
          'Pi-alone model range: roughly 1B-3B parameters at Q4 — do not expect desktop-GPU speed.',
          'Best use: a private always-on assistant, home automation, or offline experimentation — not a fast daily chatbot.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: 'Check current price',
        label: 'Check Raspberry Pi 5 8GB price',
      },
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: 'Check current price',
        label: 'Check Raspberry Pi AI HAT+ 2 price',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Yes — the 8GB Raspberry Pi 5 runs 1B-3B models via Ollama or llama.cpp on its CPU alone',
          'The official Raspberry Pi AI HAT+ 2 adds a Hailo-10H NPU built specifically for on-device GenAI, with its own Hailo Ollama server',
          'Buy the 8GB configuration — 4GB leaves too little headroom for a model plus the OS',
          'Active cooling is worth adding for any sustained inference workload, not just brief tests',
          'Best use: a private always-on assistant, home automation, or offline experimentation — not a fast daily chatbot',
          'For serious 7B+ local LLM work, a GPU PC or mini PC will outperform any Pi 5 configuration',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A Raspberry Pi 5 runs local LLMs in the 1B-3B parameter range via Ollama on its CPU, and the official Raspberry Pi AI HAT+ 2 adds dedicated Hailo-10H NPU acceleration for GenAI workloads.',
          },
          {
            type: 'plain-terms',
            text: 'In plain terms: a bare Pi 5 can run tiny AI models slowly; adding the AI HAT+ 2 board gives it a real AI chip that runs models faster and handles GenAI properly.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Budget Setup: Raspberry Pi 5 Alone',
        content: [
          '<strong>A bare Raspberry Pi 5 (8GB) runs 1B-3B parameter models at Q4 quantization through Ollama or llama.cpp — models like Llama 3.2 1B, Llama 3.2 3B, or Qwen3 1.7B.</strong> Everything runs on the quad-core CPU: the Pi 5\'s integrated VideoCore GPU is not a practical llama.cpp accelerator, so there is no meaningful GPU speedup on the bare board.',
          'Community benchmarks put small Q4 models at roughly 4-9 tokens per second on Pi 5 CPU, depending on the exact model and runtime — noticeably slower than desktop-GPU inference, but usable for short queries and casual experimentation.',
          'Best for: offline assistants for simple queries, Home Assistant experiments, automation scripts, and learning how local inference works. Buy the 8GB configuration — the 4GB model leaves too little headroom for a model plus Raspberry Pi OS.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: 'Check current price',
            label: 'Check Raspberry Pi 5 8GB price',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'Better: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>The official Raspberry Pi AI HAT+ 2 turns a Pi 5 into a purpose-built edge-AI system by adding a Hailo-10H NPU and 8GB of dedicated memory.</strong> Raspberry Pi\'s own documentation confirms GenAI/LLM support through a Hailo GenAI Model Zoo, including a Hailo Ollama server you can query over the network or through a browser-based chat UI.',
          'The Hailo-10H delivers 40 TOPS of INT4 inference performance and ships with several ready-to-run small models (roughly 1B-1.5B parameters, including Qwen2 and Llama 3.2 variants) — a meaningfully different, faster path than CPU-only inference for anyone who wants a real edge-AI device rather than a hobby experiment.',
          'Buy this if you want dedicated GenAI acceleration and are comfortable with a still-maturing software stack — Raspberry Pi launched the AI HAT+ 2 in January 2026, and its documented package version can lag Hailo\'s own release cadence.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: 'Check current price',
            label: 'Check Raspberry Pi AI HAT+ 2 price',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 vs. Pi 5 + AI HAT+ 2 vs. a GPU PC',
        content: [
          '<strong>Adding the AI HAT+ 2 closes some of the gap to a GPU, but a discrete GPU or GPU PC still wins on raw model size and speed.</strong>',
        ],
        columns: ['Setup', 'Local-AI capability', 'Best for'],
        rows: [
          { Setup: 'Pi 5 alone', 'Local-AI capability': '1B-3B models, CPU only', 'Best for': 'Cheapest experiment, learning' },
          { Setup: 'Pi 5 + AI HAT+ 2', 'Local-AI capability': 'Dedicated NPU, 1B-1.5B GenAI models', 'Best for': 'Real edge-AI device, GenAI focus' },
          { Setup: 'GPU PC / mini PC', 'Local-AI capability': '7B+ models, much faster', 'Best for': 'Serious daily-driver local LLM use' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: 'Cooling for Sustained Inference',
        content: [
          'Sustained CPU- or NPU-heavy inference runs hotter than casual Pi use — the official Raspberry Pi Active Cooler (a clip-on heatsink with a temperature-controlled fan) is a cheap, well-documented addition if you plan to run inference for extended periods rather than brief tests.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: 'Check current price',
            label: 'Check Raspberry Pi 5 Active Cooler price',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: 'NVMe Storage for an Always-On Server',
        content: [
          'If the Pi becomes an always-on local-AI server, NVMe storage via the official Raspberry Pi M.2 HAT+ (which uses the Pi 5\'s PCIe interface) is more reliable under sustained read/write load than a microSD card — worth adding once you move past casual testing.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: 'Check current price',
            label: 'Check Raspberry Pi M.2 HAT+ price',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: 'What Can You Actually Build?',
        content: [
          'A Pi 5 local-LLM setup fits private home-assistant experiments, home-automation integrations (see our guide to <a href="/power-local-llm/build-local-voice-assistant-2026">building a local voice assistant</a> for realistic latency expectations on Pi-class hardware), simple document classification, and always-on offline services that do not need fast responses.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Bottom Line',
        content: [
          '<strong>Cheapest: a bare Pi 5 8GB for 1B-3B models and experimentation.</strong> Best Pi-based AI setup: Pi 5 + the official AI HAT+ 2 for dedicated Hailo-10H acceleration. Best performance overall: a GPU PC or a <a href="/local-llms/best-mini-pcs-local-llm">mini PC built for local LLMs</a> — for 7B+ models, no Pi configuration comes close.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does the Raspberry Pi 5 need active cooling for LLM inference?',
            a: 'Yes, for sustained workloads. Sustained CPU- or NPU-heavy inference runs the Pi 5 warmer than casual use, and the official Active Cooler is a cheap, worthwhile addition if you plan to run inference for extended periods rather than brief tests.',
          },
          {
            q: 'Does the Raspberry Pi AI HAT+ 2 actually support LLMs?',
            a: 'Yes — confirmed via Raspberry Pi\'s own documentation. The AI HAT+ 2\'s Hailo-10H NPU runs a documented set of small models (roughly 1B-1.5B parameters) through a Hailo GenAI Model Zoo package and a Hailo Ollama server, accessible via API calls or a browser-based chat UI.',
          },
          {
            q: 'Is Ollama the best way to run an LLM on a Raspberry Pi 5?',
            a: 'Ollama is the simplest option for CPU-only inference on the bare Pi 5. llama.cpp gives more manual control over quantization and build flags. The AI HAT+ 2 uses its own separate Hailo Ollama server rather than the standard Ollama CPU path.',
          },
          {
            q: 'Is a Raspberry Pi 5 good for a voice assistant with a local LLM?',
            a: 'Only with a very small model and realistic latency expectations — see our guide to <a href="/power-local-llm/build-local-voice-assistant-2026">building a local voice assistant</a>, which covers the CPU-only Pi 5 as one of several hardware tiers alongside faster mini PC, GPU, and Mac options.',
          },
          {
            q: 'What is the minimum RAM for any local LLM on a Pi 5?',
            a: 'The 8GB configuration is the practical minimum for a comfortable experience. The 4GB configuration can technically load a 1B model but leaves very little headroom for anything else running on the device.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Edge AI Silicon for Local LLMs 2026](/edge-ai/edge-ai-hardware-for-local-llms) -- What actually fits in a shipping product: power budget, thermal design, joules per token, not desktop tokens/sec.',
          '[Best Local LLM for 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — a genuinely practical low-budget GPU alternative',
          '[How Much RAM Does a 7B Model Need?](/prompt-bites/how-much-ram-for-7b-model) — why 7B is out of reach for a Pi 5 CPU',
          '[Best Mini PC for an Always-On Ollama Server](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — a more practical always-on alternative',
          '[Build a Local Voice Assistant](/power-local-llm/build-local-voice-assistant-2026) — realistic latency across Pi, mini PC, and GPU hardware tiers',
        ],
      },
    },
  },
  ar: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-ar.webp',
    title: 'هل يمكن تشغيل LLM محلي على جهاز Raspberry Pi 5؟',
    seoTitle: 'LLM محلي على Raspberry Pi 5: Ollama وAI HAT+ 2 (2026)',
    metaDescription: 'نعم — يشغّل Raspberry Pi 5 نماذج 1B-3B عبر Ollama على المعالج. مع Raspberry Pi AI HAT+ 2 (وحدة Hailo-10H) يوجد تسريع GenAI حقيقي لنماذج أكبر.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'الهواة الذين يفكرون في Raspberry Pi 5 لمشروع LLM محلي',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نعم — يمكن لجهاز Raspberry Pi 5 تشغيل LLM محلي اليوم، وOllama هي أسهل طريقة لذلك: يتعامل اللوح بذاكرة 8GB مع نماذج 1B-3B مثل Llama 3.2 1B وLlama 3.2 3B وQwen3 1.7B باستخدام المعالج وحده.</strong> للحصول على تسريع GenAI حقيقي ونماذج أكبر، أضف Raspberry Pi AI HAT+ 2 الرسمي — وحدة Hailo-10H الخاصة به مصممة خصيصًا لاستدلال LLM على الجهاز وتأتي مع خادم Hailo Ollama الخاص بها.',
    toc: [
      { label: 'الإجابة السريعة', anchor: '#quick-answer' },
      { label: 'إعداد اقتصادي: Pi 5 وحده', anchor: '#best-pick' },
      { label: 'الأفضل: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 مقابل Pi 5+AI HAT+2 مقابل حاسوب بطاقة GPU', anchor: '#comparison' },
      { label: 'التبريد للاستدلال المستمر', anchor: '#cooling' },
      { label: 'تخزين NVMe لخادم دائم التشغيل', anchor: '#storage' },
      { label: 'ماذا يمكنك أن تبني فعليًا؟', anchor: '#what-can-build' },
      { label: 'الخلاصة', anchor: '#bottom-line' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يمكن تشغيل LLM محلي على جهاز Raspberry Pi 5؟',
        answer: 'نعم. يشغّل Pi 5 (8GB) نماذج 1B-3B عبر Ollama أو llama.cpp على المعالج وحده — وهذا تقريبًا السقف العملي. أضف Raspberry Pi AI HAT+ 2 الرسمي (وحدة Hailo-10H) للحصول على تسريع GenAI مخصص، وخادم Hailo Ollama الخاص به، ومساحة لنماذج أكبر.',
        bullets: [
          'أفضل إعداد اقتصادي: Pi 5 بذاكرة 8GB + تبريد نشط — أرخص طريقة لتجربة النماذج الصغيرة جدًا.',
          'أفضل إعداد للذكاء الاصطناعي: Pi 5 + Raspberry Pi AI HAT+ 2 — وحدة Hailo-10H مخصصة لأحمال عمل GenAI.',
          'نطاق النماذج مع Pi 5 وحده: حوالي 1B-3B معامل بدقة Q4 — لا تتوقع سرعة بطاقة GPU لسطح المكتب.',
          'أفضل استخدام: مساعد خاص دائم التشغيل، أتمتة منزلية، أو تجارب غير متصلة بالإنترنت — وليس روبوت دردشة سريع للاستخدام اليومي.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: 'تحقق من السعر الحالي',
        label: 'تحقق من سعر Raspberry Pi 5 8GB',
      },
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: 'تحقق من السعر الحالي',
        label: 'تحقق من سعر Raspberry Pi AI HAT+ 2',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نعم — يشغّل Raspberry Pi 5 بذاكرة 8GB نماذج 1B-3B عبر Ollama أو llama.cpp باستخدام المعالج وحده',
          'يضيف Raspberry Pi AI HAT+ 2 الرسمي وحدة Hailo-10H مصممة خصيصًا لـ GenAI على الجهاز، مع خادم Hailo Ollama الخاص بها',
          'اشترِ التكوين بذاكرة 8GB — يترك طراز 4GB هامشًا ضئيلًا جدًا للنموذج بالإضافة إلى نظام التشغيل',
          'يستحق التبريد النشط الإضافة لأي حمل عمل استدلال مستمر، وليس فقط الاختبارات القصيرة',
          'أفضل استخدام: مساعد خاص دائم التشغيل، أتمتة منزلية، أو تجارب غير متصلة بالإنترنت — وليس روبوت دردشة سريع للاستخدام اليومي',
          'لعمل LLM محلي جاد بحجم 7B فأكثر، سيتفوق أي حاسوب بطاقة GPU أو mini PC على أي تكوين Pi 5',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يشغّل Raspberry Pi 5 نماذج LLM محلية في نطاق 1B-3B معامل عبر Ollama على المعالج، ويضيف Raspberry Pi AI HAT+ 2 الرسمي تسريع NPU من Hailo-10H مخصصًا لأحمال عمل GenAI.',
          },
          {
            type: 'plain-terms',
            text: 'بعبارة بسيطة: يمكن لجهاز Pi 5 العاري تشغيل نماذج ذكاء اصطناعي صغيرة جدًا ببطء؛ إضافة لوحة AI HAT+ 2 تمنحه شريحة ذكاء اصطناعي حقيقية تشغّل النماذج أسرع وتتعامل مع GenAI بشكل صحيح.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'إعداد اقتصادي: Raspberry Pi 5 وحده',
        content: [
          '<strong>يشغّل جهاز Raspberry Pi 5 العاري (8GB) نماذج بمعاملات 1B-3B بتكميم Q4 عبر Ollama أو llama.cpp — نماذج مثل Llama 3.2 1B وLlama 3.2 3B وQwen3 1.7B.</strong> كل شيء يعمل على المعالج رباعي النوى: وحدة الرسومات VideoCore المدمجة في Pi 5 ليست مسرّعًا عمليًا لـ llama.cpp، لذا لا توجد زيادة سرعة تُذكر من GPU على اللوح العاري.',
          'تضع معايير أداء المجتمع النماذج الصغيرة بدقة Q4 عند حوالي 4-9 رموز في الثانية على معالج Pi 5، حسب النموذج وبيئة التشغيل الدقيقة — أبطأ بشكل ملحوظ من استدلال بطاقة GPU لسطح المكتب، لكنها قابلة للاستخدام للاستعلامات القصيرة والتجربة العرضية.',
          'الأفضل لـ: مساعدين غير متصلين بالإنترنت للاستعلامات البسيطة، تجارب Home Assistant، سكربتات الأتمتة، وتعلّم كيفية عمل الاستدلال المحلي. اشترِ التكوين بذاكرة 8GB — يترك طراز 4GB هامشًا ضئيلًا جدًا للنموذج بالإضافة إلى Raspberry Pi OS.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: 'تحقق من السعر الحالي',
            label: 'تحقق من سعر Raspberry Pi 5 8GB',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'الأفضل: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>يحوّل Raspberry Pi AI HAT+ 2 الرسمي جهاز Pi 5 إلى نظام ذكاء اصطناعي طرفي مصمم خصيصًا بإضافة وحدة Hailo-10H و8GB من الذاكرة المخصصة.</strong> تؤكد وثائق Raspberry Pi الرسمية دعم GenAI/LLM من خلال Hailo GenAI Model Zoo، بما في ذلك خادم Hailo Ollama يمكنك الاستعلام عنه عبر الشبكة أو من خلال واجهة دردشة تعتمد على المتصفح.',
          'توفّر Hailo-10H أداء استدلال يصل إلى 40 TOPS بدقة INT4، وتأتي مع عدة نماذج صغيرة جاهزة للتشغيل (حوالي 1B-1.5B معامل، بما في ذلك إصدارات من Qwen2 وLlama 3.2) — طريق أسرع ومختلف بشكل ملموس عن الاستدلال المعتمد على المعالج فقط لأي شخص يريد جهاز ذكاء اصطناعي طرفي حقيقيًا وليس تجربة هواية.',
          'اشترِ هذا الإعداد إذا كنت تريد تسريع GenAI مخصصًا وترتاح لبيئة برمجية لا تزال في طور النضج — أطلقت Raspberry Pi جهاز AI HAT+ 2 في يناير 2026، وقد يتأخر إصدار الحزمة الموثق عن وتيرة إصدارات Hailo نفسها.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: 'تحقق من السعر الحالي',
            label: 'تحقق من سعر Raspberry Pi AI HAT+ 2',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 مقابل Pi 5 + AI HAT+ 2 مقابل حاسوب بطاقة GPU',
        content: [
          '<strong>تضييق إضافة AI HAT+ 2 للفجوة مع بطاقة GPU حقيقي، لكن بطاقة GPU منفصلة أو حاسوب GPU لا يزال يفوز في حجم النموذج والسرعة الخام.</strong>',
        ],
        columns: ['الإعداد', 'قدرة الذكاء الاصطناعي المحلي', 'الأفضل لـ'],
        rows: [
          { 'الإعداد': 'Pi 5 وحده', 'قدرة الذكاء الاصطناعي المحلي': 'نماذج 1B-3B، معالج فقط', 'الأفضل لـ': 'أرخص تجربة، التعلّم' },
          { 'الإعداد': 'Pi 5 + AI HAT+ 2', 'قدرة الذكاء الاصطناعي المحلي': 'NPU مخصصة، نماذج GenAI 1B-1.5B', 'الأفضل لـ': 'جهاز ذكاء اصطناعي طرفي حقيقي' },
          { 'الإعداد': 'حاسوب GPU / mini PC', 'قدرة الذكاء الاصطناعي المحلي': 'نماذج 7B فأكثر، أسرع بكثير', 'الأفضل لـ': 'استخدام LLM محلي جاد يوميًا' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: 'التبريد للاستدلال المستمر',
        content: [
          'الاستدلال المستمر المكثف على المعالج أو NPU يجعل الجهاز أدفأ من الاستخدام العادي — المبرّد النشط الرسمي من Raspberry Pi (مبدد حراري قابل للتركيب بمروحة تعمل بالتحكم الحراري) إضافة رخيصة وموثقة جيدًا إذا كنت تخطط لتشغيل الاستدلال لفترات ممتدة بدلًا من اختبارات قصيرة.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: 'تحقق من السعر الحالي',
            label: 'تحقق من سعر مبرّد Raspberry Pi 5 النشط',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: 'تخزين NVMe لخادم دائم التشغيل',
        content: [
          'إذا أصبح الجهاز خادم ذكاء اصطناعي محلي دائم التشغيل، فإن التخزين عبر NVMe باستخدام Raspberry Pi M.2 HAT+ الرسمي (الذي يستخدم واجهة PCIe في Pi 5) أكثر موثوقية تحت حمل قراءة/كتابة مستمر من بطاقة microSD — يستحق الإضافة بمجرد تجاوز الاختبار العرضي.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: 'تحقق من السعر الحالي',
            label: 'تحقق من سعر Raspberry Pi M.2 HAT+',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: 'ماذا يمكنك أن تبني فعليًا؟',
        content: [
          'يناسب إعداد LLM محلي على Pi 5 تجارب المساعد المنزلي الخاص، وتكاملات الأتمتة المنزلية (راجع دليلنا حول <a href="/power-local-llm/build-local-voice-assistant-2026">بناء مساعد صوتي محلي</a> لمعرفة توقعات زمن استجابة واقعية على عتاد من فئة Pi)، وتصنيف المستندات البسيط، والخدمات غير المتصلة بالإنترنت الدائمة التي لا تحتاج استجابات سريعة.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'الخلاصة',
        content: [
          '<strong>الأرخص: جهاز Pi 5 عاري بذاكرة 8GB لنماذج 1B-3B والتجربة.</strong> أفضل إعداد ذكاء اصطناعي معتمد على Pi: Pi 5 + AI HAT+ 2 الرسمي لتسريع Hailo-10H المخصص. أفضل أداء بشكل عام: حاسوب GPU أو <a href="/local-llms/best-mini-pcs-local-llm">mini PC مصمم لـ LLM محلي</a> — بالنسبة لنماذج 7B فأكثر، لا يقترب أي تكوين Pi من ذلك.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج Raspberry Pi 5 إلى تبريد نشط لاستدلال LLM؟',
            a: 'نعم، لأحمال العمل المستمرة. الاستدلال المستمر المكثف على المعالج أو NPU يجعل Pi 5 أدفأ من الاستخدام العادي، والمبرّد النشط الرسمي إضافة رخيصة ومجدية إذا كنت تخطط لتشغيل الاستدلال لفترات ممتدة بدلًا من اختبارات قصيرة.',
          },
          {
            q: 'هل يدعم Raspberry Pi AI HAT+ 2 فعليًا نماذج LLM؟',
            a: 'نعم — مؤكد عبر وثائق Raspberry Pi الرسمية. تشغّل وحدة Hailo-10H في AI HAT+ 2 مجموعة موثقة من النماذج الصغيرة (حوالي 1B-1.5B معامل) عبر حزمة Hailo GenAI Model Zoo وخادم Hailo Ollama، يمكن الوصول إليه عبر استدعاءات API أو واجهة دردشة تعتمد على المتصفح.',
          },
          {
            q: 'هل Ollama أفضل طريقة لتشغيل LLM على Raspberry Pi 5؟',
            a: 'Ollama هي الخيار الأبسط للاستدلال المعتمد على المعالج فقط على جهاز Pi 5 العاري. يمنحك llama.cpp تحكمًا يدويًا أكبر في التكميم وخيارات البناء. يستخدم AI HAT+ 2 خادم Hailo Ollama منفصلًا خاصًا به بدلًا من مسار Ollama القياسي على المعالج.',
          },
          {
            q: 'هل Raspberry Pi 5 جيد لتشغيل مساعد صوتي مع LLM محلي؟',
            a: 'فقط بنموذج صغير جدًا وتوقعات زمن استجابة واقعية — راجع دليلنا حول <a href="/power-local-llm/build-local-voice-assistant-2026">بناء مساعد صوتي محلي</a>، الذي يغطي جهاز Pi 5 المعتمد على المعالج فقط كإحدى عدة فئات عتاد إلى جانب خيارات mini PC وGPU وMac الأسرع.',
          },
          {
            q: 'ما الحد الأدنى من RAM لأي LLM محلي على Pi 5؟',
            a: 'التكوين بذاكرة 8GB هو الحد الأدنى العملي لتجربة مريحة. يمكن لتكوين 4GB تحميل نموذج 1B تقنيًا لكنه يترك هامشًا ضئيلًا جدًا لأي شيء آخر يعمل على الجهاز.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[شرائح الذكاء الاصطناعي الطرفي للنماذج المحلية 2026](/ar/edge-ai/edge-ai-hardware-for-local-llms) -- ما الذي يناسب فعليا منتجا يشحن بالجملة: ميزانية الطاقة والتصميم الحراري والجول لكل رمز.',
          '[أفضل LLM محلي لذاكرة VRAM سعة 6 GB](/prompt-bites/best-local-llm-6gb-vram) — بديل GPU بميزانية منخفضة عملي فعليًا',
          '[كم RAM يحتاجه نموذج 7B؟](/prompt-bites/how-much-ram-for-7b-model) — لماذا 7B خارج متناول معالج Pi 5',
          '[أفضل جهاز mini PC لخادم Ollama دائم التشغيل](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — بديل دائم التشغيل أكثر عملية',
          '[بناء مساعد صوتي محلي](/power-local-llm/build-local-voice-assistant-2026) — زمن استجابة واقعي عبر فئات عتاد Pi وmini PC وGPU',
        ],
      },
    },
  },
  de: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-de.webp',
    title: 'Kann man ein lokales LLM auf einem Raspberry Pi 5 betreiben?',
    seoTitle: 'Lokales LLM auf Raspberry Pi 5: Ollama + AI HAT+ 2 (2026)',
    metaDescription: 'Ja — der Raspberry Pi 5 läuft mit Ollama im 1B-3B-Bereich auf der CPU. Mit dem Raspberry Pi AI HAT+ 2 (Hailo-10H-NPU) gibt es echte GenAI-Beschleunigung für größere Modelle.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Hobbyisten, die einen Raspberry Pi 5 für ein lokales LLM-Projekt in Betracht ziehen',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ja — ein Raspberry Pi 5 betreibt heute ein lokales LLM, und Ollama ist der einfachste Weg dahin: Das 8-GB-Board bewältigt 1B-3B-Modelle wie Llama 3.2 1B, Llama 3.2 3B oder Qwen3 1.7B allein auf der CPU.</strong> Für echte GenAI-Beschleunigung und größere Modelle sorgt der offizielle Raspberry Pi AI HAT+ 2 — seine Hailo-10H-NPU ist speziell für On-Device-LLM-Inferenz gebaut und bringt einen eigenen Hailo-Ollama-Server mit.',
    toc: [
      { label: 'Schnelle Antwort', anchor: '#quick-answer' },
      { label: 'Budget-Setup: Nur der Pi 5', anchor: '#best-pick' },
      { label: 'Besser: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 vs. Pi 5 + AI HAT+ 2 vs. GPU-PC', anchor: '#comparison' },
      { label: 'Kühlung für Dauerbetrieb', anchor: '#cooling' },
      { label: 'NVMe-Speicher für den Dauerbetrieb', anchor: '#storage' },
      { label: 'Was kann man wirklich damit bauen?', anchor: '#what-can-build' },
      { label: 'Fazit', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Kann man ein lokales LLM auf einem Raspberry Pi 5 betreiben?',
        answer: 'Ja. Der Pi 5 (8 GB) betreibt 1B-3B-Modelle über Ollama oder llama.cpp allein auf der CPU — das ist etwa die praktische Obergrenze. Mit dem offiziellen Raspberry Pi AI HAT+ 2 (Hailo-10H-NPU) gibt es dedizierte GenAI-Beschleunigung, einen eigenen Hailo-Ollama-Server und Spielraum für größere Modelle.',
        bullets: [
          'Bestes Budget-Setup: Pi 5 8 GB + aktive Kühlung — der günstigste Weg, mit winzigen Modellen zu experimentieren.',
          'Bestes AI-Setup: Pi 5 + Raspberry Pi AI HAT+ 2 — eine dedizierte Hailo-10H-NPU speziell für GenAI-Workloads.',
          'Modellbereich nur mit Pi 5: etwa 1B-3B Parameter bei Q4 — keine Desktop-GPU-Geschwindigkeit erwarten.',
          'Bester Einsatz: ein privater Dauer-Assistent, Hausautomation oder Offline-Experimente — kein schneller Alltags-Chatbot.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.de/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: 'Aktuellen Preis prüfen',
        label: 'Raspberry Pi 5 8GB Preis prüfen',
      },
      {
        url: 'https://www.amazon.de/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: 'Aktuellen Preis prüfen',
        label: 'Raspberry Pi AI HAT+ 2 Preis prüfen',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ja — der Raspberry Pi 5 mit 8 GB betreibt 1B-3B-Modelle über Ollama oder llama.cpp allein auf der CPU',
          'Der offizielle Raspberry Pi AI HAT+ 2 bringt eine Hailo-10H-NPU speziell für On-Device-GenAI mit, inklusive eigenem Hailo-Ollama-Server',
          'Kaufen Sie die 8-GB-Konfiguration — 4 GB lässt zu wenig Reserve für Modell plus Betriebssystem',
          'Aktive Kühlung lohnt sich bei jeder dauerhaften Inferenz-Last, nicht nur bei kurzen Tests',
          'Bester Einsatz: ein privater Dauer-Assistent, Hausautomation oder Offline-Experimente — kein schneller Alltags-Chatbot',
          'Für ernsthafte 7B+-Arbeit mit lokalen LLMs schlägt jeder GPU-PC oder Mini-PC jede Pi-5-Konfiguration',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein Raspberry Pi 5 betreibt lokale LLMs im Bereich 1B-3B Parameter über Ollama auf der CPU, und der offizielle Raspberry Pi AI HAT+ 2 bringt dedizierte Hailo-10H-NPU-Beschleunigung für GenAI-Workloads.',
          },
          {
            type: 'plain-terms',
            text: 'Einfach gesagt: Ein nackter Pi 5 kann winzige KI-Modelle langsam ausführen; der AI-HAT+-2-Zusatz gibt ihm einen echten KI-Chip, der Modelle schneller ausführt und GenAI richtig bewältigt.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Budget-Setup: Nur der Raspberry Pi 5',
        content: [
          '<strong>Ein nackter Raspberry Pi 5 (8 GB) betreibt 1B-3B-Parameter-Modelle bei Q4-Quantisierung über Ollama oder llama.cpp — Modelle wie Llama 3.2 1B, Llama 3.2 3B oder Qwen3 1.7B.</strong> Alles läuft auf der Quad-Core-CPU: Die integrierte VideoCore-GPU des Pi 5 ist kein praxistauglicher llama.cpp-Beschleuniger, es gibt also keinen nennenswerten GPU-Vorteil auf dem nackten Board.',
          'Community-Benchmarks setzen kleine Q4-Modelle bei etwa 4-9 Tokens pro Sekunde auf der Pi-5-CPU an, je nach Modell und Laufzeitumgebung — spürbar langsamer als Desktop-GPU-Inferenz, aber nutzbar für kurze Anfragen und lockeres Experimentieren.',
          'Am besten für: Offline-Assistenten für einfache Anfragen, Home-Assistant-Experimente, Automatisierungsskripte und zum Lernen, wie lokale Inferenz funktioniert. Kaufen Sie die 8-GB-Konfiguration — die 4-GB-Variante lässt zu wenig Reserve für Modell plus Raspberry Pi OS.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: 'Aktuellen Preis prüfen',
            label: 'Raspberry Pi 5 8GB Preis prüfen',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'Besser: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>Der offizielle Raspberry Pi AI HAT+ 2 macht aus einem Pi 5 ein zweckgebautes Edge-AI-System, indem er eine Hailo-10H-NPU und 8 GB dedizierten Speicher hinzufügt.</strong> Die eigene Dokumentation von Raspberry Pi bestätigt GenAI-/LLM-Unterstützung über einen Hailo-GenAI-Model-Zoo, inklusive eines Hailo-Ollama-Servers, den Sie über das Netzwerk oder eine browserbasierte Chat-Oberfläche ansprechen können.',
          'Der Hailo-10H liefert 40 TOPS INT4-Inferenzleistung und bringt mehrere einsatzbereite kleine Modelle mit (etwa 1B-1,5B Parameter, darunter Qwen2- und Llama-3.2-Varianten) — ein spürbar anderer, schnellerer Weg als reine CPU-Inferenz für alle, die ein echtes Edge-AI-Gerät statt eines Hobby-Experiments wollen.',
          'Kaufen Sie dieses Setup, wenn Sie dedizierte GenAI-Beschleunigung wollen und mit einem noch reifenden Software-Stack leben können — Raspberry Pi brachte den AI HAT+ 2 im Januar 2026 auf den Markt, und die dokumentierte Paketversion kann hinter Hailos eigenem Release-Rhythmus zurückliegen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: 'Aktuellen Preis prüfen',
            label: 'Raspberry Pi AI HAT+ 2 Preis prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 vs. Pi 5 + AI HAT+ 2 vs. GPU-PC',
        content: [
          '<strong>Der AI HAT+ 2 verkleinert den Abstand zu einer GPU, aber eine diskrete GPU oder ein GPU-PC gewinnt weiterhin bei Modellgröße und Geschwindigkeit.</strong>',
        ],
        columns: ['Setup', 'Lokale-AI-Fähigkeit', 'Am besten für'],
        rows: [
          { Setup: 'Nur Pi 5', 'Lokale-AI-Fähigkeit': '1B-3B-Modelle, nur CPU', 'Am besten für': 'Günstigstes Experiment, Lernen' },
          { Setup: 'Pi 5 + AI HAT+ 2', 'Lokale-AI-Fähigkeit': 'Dedizierte NPU, 1B-1,5B GenAI-Modelle', 'Am besten für': 'Echtes Edge-AI-Gerät, GenAI-Fokus' },
          { Setup: 'GPU-PC / Mini-PC', 'Lokale-AI-Fähigkeit': '7B+-Modelle, deutlich schneller', 'Am besten für': 'Ernsthafte tägliche Nutzung lokaler LLMs' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: 'Kühlung für Dauerbetrieb',
        content: [
          'Anhaltend CPU- oder NPU-lastige Inferenz erwärmt den Pi stärker als gelegentliche Nutzung — der offizielle Raspberry Pi Active Cooler (ein aufsteckbarer Kühlkörper mit temperaturgesteuertem Lüfter) ist eine günstige, gut dokumentierte Ergänzung, wenn Sie Inferenz über längere Zeiträume statt nur kurze Tests planen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: 'Aktuellen Preis prüfen',
            label: 'Raspberry Pi 5 Active Cooler Preis prüfen',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: 'NVMe-Speicher für den Dauerbetrieb',
        content: [
          'Wird der Pi zu einem dauerhaft laufenden lokalen KI-Server, ist NVMe-Speicher über das offizielle Raspberry Pi M.2 HAT+ (das die PCIe-Schnittstelle des Pi 5 nutzt) unter anhaltender Lese-/Schreiblast zuverlässiger als eine microSD-Karte — lohnenswert, sobald Sie über gelegentliches Testen hinausgehen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: 'Aktuellen Preis prüfen',
            label: 'Raspberry Pi M.2 HAT+ Preis prüfen',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: 'Was kann man wirklich damit bauen?',
        content: [
          'Ein lokales LLM-Setup auf dem Pi 5 eignet sich für private Assistenten-Experimente, Hausautomation-Integrationen (siehe unseren Leitfaden zum <a href="/de/power-local-llm/build-local-voice-assistant-2026">Bau eines lokalen Sprachassistenten</a> für realistische Latenzerwartungen auf Pi-Klasse-Hardware), einfache Dokumentenklassifikation und dauerhaft laufende Offline-Dienste, die keine schnellen Antworten brauchen.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Fazit',
        content: [
          '<strong>Am günstigsten: ein nackter Pi 5 8 GB für 1B-3B-Modelle und Experimente.</strong> Bestes Pi-basiertes AI-Setup: Pi 5 + der offizielle AI HAT+ 2 für dedizierte Hailo-10H-Beschleunigung. Beste Gesamtleistung: ein GPU-PC oder ein <a href="/de/local-llms/best-mini-pcs-local-llm">Mini-PC für lokale LLMs</a> — für 7B+-Modelle kommt keine Pi-Konfiguration auch nur annähernd mit.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht der Raspberry Pi 5 aktive Kühlung für LLM-Inferenz?',
            a: 'Ja, bei anhaltender Last. Anhaltend CPU- oder NPU-lastige Workloads wie LLM-Inferenz erwärmen den Pi 5 stärker als gelegentliche Nutzung — der offizielle Active Cooler ist eine günstige, sinnvolle Ergänzung für längere Inferenz-Sitzungen.',
          },
          {
            q: 'Unterstützt der Raspberry Pi AI HAT+ 2 wirklich LLMs?',
            a: 'Ja — bestätigt durch die eigene Dokumentation von Raspberry Pi. Die Hailo-10H-NPU des AI HAT+ 2 betreibt eine dokumentierte Auswahl kleiner Modelle (etwa 1B-1,5B Parameter) über ein Hailo-GenAI-Model-Zoo-Paket und einen Hailo-Ollama-Server, erreichbar per API oder browserbasierter Chat-Oberfläche.',
          },
          {
            q: 'Ist Ollama der beste Weg, ein LLM auf einem Raspberry Pi 5 zu betreiben?',
            a: 'Ollama ist die einfachste Option für reine CPU-Inferenz auf dem nackten Pi 5. llama.cpp gibt mehr manuelle Kontrolle über Quantisierung und Build-Flags. Der AI HAT+ 2 nutzt einen eigenen, separaten Hailo-Ollama-Server statt des Standard-Ollama-CPU-Pfads.',
          },
          {
            q: 'Ist ein Raspberry Pi 5 gut für einen Sprachassistenten mit lokalem LLM?',
            a: 'Nur mit einem sehr kleinen Modell und realistischen Latenzerwartungen — siehe unseren Leitfaden zum <a href="/de/power-local-llm/build-local-voice-assistant-2026">Bau eines lokalen Sprachassistenten</a>, der den reinen CPU-Pi-5-Betrieb als eine von mehreren Hardware-Stufen neben schnelleren Mini-PC-, GPU- und Mac-Optionen behandelt.',
          },
          {
            q: 'Was ist das minimale RAM für ein lokales LLM auf einem Pi 5?',
            a: 'Die 8-GB-Konfiguration ist das praktische Minimum für ein komfortables Erlebnis. Die 4-GB-Konfiguration kann technisch ein 1B-Modell laden, lässt aber sehr wenig Reserve für alles andere, was auf dem Gerät läuft.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Edge-AI-Hardware fuer lokale LLMs 2026](/de/edge-ai/edge-ai-hardware-for-local-llms) -- Was wirklich in ein Serienprodukt passt: Leistungsbudget, thermisches Design, Joule pro Token statt Desktop-Tokens/Sek.',
          '[Bestes lokales LLM für 6 GB VRAM](/de/prompt-bites/best-local-llm-6gb-vram) — eine wirklich praktische Low-Budget-GPU-Alternative',
          '[Wie viel RAM braucht ein 7B-Modell?](/de/prompt-bites/how-much-ram-for-7b-model) — warum 7B für eine Pi-5-CPU außer Reichweite ist',
          '[Bester Mini-PC für einen dauerhaft laufenden Ollama-Server](/de/prompt-bites/best-mini-pc-for-ollama-server-always-on) — eine praktischere, dauerhaft laufende Alternative',
          '[Einen lokalen Sprachassistenten bauen](/de/power-local-llm/build-local-voice-assistant-2026) — realistische Latenz über Pi-, Mini-PC- und GPU-Hardwarestufen hinweg',
        ],
      },
    },
  },
  es: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-es.webp',
    title: '¿Puedes Ejecutar un LLM Local en una Raspberry Pi 5?',
    seoTitle: 'LLM Local en Raspberry Pi 5: Ollama + AI HAT+ 2 (2026)',
    metaDescription: 'Sí — la Raspberry Pi 5 ejecuta modelos de 1B-3B con Ollama en la CPU. Con la Raspberry Pi AI HAT+ 2 (NPU Hailo-10H) hay aceleración GenAI real para modelos más grandes.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Aficionados que consideran una Raspberry Pi 5 para un proyecto de LLM local',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Sí — una Raspberry Pi 5 ejecuta un LLM local hoy mismo, y Ollama es la forma más fácil de hacerlo: la placa de 8GB maneja modelos de 1B-3B como Llama 3.2 1B, Llama 3.2 3B o Qwen3 1.7B usando solo la CPU.</strong> Para aceleración GenAI real y modelos más grandes, añade la Raspberry Pi AI HAT+ 2 oficial — su NPU Hailo-10H está diseñada específicamente para inferencia de LLM en el dispositivo e incluye su propio servidor Hailo Ollama.',
    toc: [
      { label: 'Respuesta Rápida', anchor: '#quick-answer' },
      { label: 'Configuración Económica: Solo la Pi 5', anchor: '#best-pick' },
      { label: 'Mejor: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 vs. Pi 5 + AI HAT+ 2 vs. PC con GPU', anchor: '#comparison' },
      { label: 'Refrigeración para Inferencia Sostenida', anchor: '#cooling' },
      { label: 'Almacenamiento NVMe para un Servidor Siempre Encendido', anchor: '#storage' },
      { label: '¿Qué Puedes Construir Realmente?', anchor: '#what-can-build' },
      { label: 'Conclusión', anchor: '#bottom-line' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar un LLM local en una Raspberry Pi 5?',
        answer: 'Sí. La Pi 5 (8GB) ejecuta modelos de 1B-3B vía Ollama o llama.cpp usando solo la CPU — ese es aproximadamente el techo práctico. Añade la Raspberry Pi AI HAT+ 2 oficial (NPU Hailo-10H) para aceleración GenAI dedicada, su propio servidor Hailo Ollama y margen para modelos más grandes.',
        bullets: [
          'Mejor configuración económica: Pi 5 8GB + refrigeración activa — la forma más barata de experimentar con modelos diminutos.',
          'Mejor configuración de IA: Pi 5 + Raspberry Pi AI HAT+ 2 — una NPU Hailo-10H dedicada, construida para cargas de trabajo GenAI.',
          'Rango de modelos solo con la Pi 5: aproximadamente 1B-3B parámetros en Q4 — no esperes velocidad de GPU de escritorio.',
          'Mejor uso: un asistente privado siempre encendido, automatización del hogar o experimentación sin conexión — no un chatbot rápido de uso diario.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.es/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: 'Consultar precio actual',
        label: 'Consulta el precio de la Raspberry Pi 5 8GB',
      },
      {
        url: 'https://www.amazon.es/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: 'Consultar precio actual',
        label: 'Consulta el precio de la Raspberry Pi AI HAT+ 2',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Sí — la Raspberry Pi 5 de 8GB ejecuta modelos de 1B-3B vía Ollama o llama.cpp usando solo la CPU',
          'La Raspberry Pi AI HAT+ 2 oficial añade una NPU Hailo-10H construida específicamente para GenAI en el dispositivo, con su propio servidor Hailo Ollama',
          'Compra la configuración de 8GB — la de 4GB deja muy poco margen para el modelo más el sistema operativo',
          'La refrigeración activa vale la pena para cualquier carga de inferencia sostenida, no solo pruebas breves',
          'Mejor uso: un asistente privado siempre encendido, automatización del hogar o experimentación sin conexión — no un chatbot rápido de uso diario',
          'Para un uso serio de LLM local de 7B o más, un PC con GPU o una mini PC superarán a cualquier configuración de Pi 5',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Una Raspberry Pi 5 ejecuta LLM locales en el rango de 1B-3B parámetros vía Ollama en su CPU, y la Raspberry Pi AI HAT+ 2 oficial añade aceleración dedicada de NPU Hailo-10H para cargas de trabajo GenAI.',
          },
          {
            type: 'plain-terms',
            text: 'En términos simples: una Pi 5 desnuda puede ejecutar modelos de IA diminutos lentamente; añadir la placa AI HAT+ 2 le da un chip de IA real que ejecuta modelos más rápido y maneja GenAI correctamente.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Configuración Económica: Solo la Raspberry Pi 5',
        content: [
          '<strong>Una Raspberry Pi 5 desnuda (8GB) ejecuta modelos de 1B-3B parámetros con cuantización Q4 a través de Ollama o llama.cpp — modelos como Llama 3.2 1B, Llama 3.2 3B o Qwen3 1.7B.</strong> Todo corre en la CPU de cuatro núcleos: la GPU VideoCore integrada de la Pi 5 no es un acelerador práctico para llama.cpp, así que no hay una aceleración de GPU significativa en la placa desnuda.',
          'Los benchmarks de la comunidad sitúan los modelos pequeños en Q4 en aproximadamente 4-9 tokens por segundo en la CPU de la Pi 5, según el modelo exacto y el runtime — notablemente más lento que la inferencia en GPU de escritorio, pero usable para consultas cortas y experimentación casual.',
          'Ideal para: asistentes sin conexión para consultas simples, experimentos con Home Assistant, scripts de automatización y aprender cómo funciona la inferencia local. Compra la configuración de 8GB — el modelo de 4GB deja muy poco margen para un modelo más Raspberry Pi OS.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: 'Consultar precio actual',
            label: 'Consulta el precio de la Raspberry Pi 5 8GB',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'Mejor: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>La Raspberry Pi AI HAT+ 2 oficial convierte una Pi 5 en un sistema de IA de borde diseñado específicamente para ello, añadiendo una NPU Hailo-10H y 8GB de memoria dedicada.</strong> La propia documentación de Raspberry Pi confirma soporte de GenAI/LLM a través de un Hailo GenAI Model Zoo, incluyendo un servidor Hailo Ollama al que puedes consultar por red o mediante una interfaz de chat basada en navegador.',
          'La Hailo-10H ofrece 40 TOPS de rendimiento de inferencia INT4 y viene con varios modelos pequeños listos para usar (aproximadamente 1B-1.5B parámetros, incluyendo variantes de Qwen2 y Llama 3.2) — un camino notablemente distinto y más rápido que la inferencia solo en CPU para quien quiera un dispositivo de IA de borde real y no un experimento de aficionado.',
          'Compra esto si quieres aceleración GenAI dedicada y te sientes cómodo con una pila de software aún en maduración — Raspberry Pi lanzó la AI HAT+ 2 en enero de 2026, y la versión de paquete documentada puede ir por detrás del propio ritmo de lanzamientos de Hailo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: 'Consultar precio actual',
            label: 'Consulta el precio de la Raspberry Pi AI HAT+ 2',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 vs. Pi 5 + AI HAT+ 2 vs. un PC con GPU',
        content: [
          '<strong>Añadir la AI HAT+ 2 reduce parte de la brecha con una GPU, pero una GPU discreta o un PC con GPU sigue ganando en tamaño de modelo y velocidad puros.</strong>',
        ],
        columns: ['Configuración', 'Capacidad de IA local', 'Ideal para'],
        rows: [
          { 'Configuración': 'Solo Pi 5', 'Capacidad de IA local': 'Modelos 1B-3B, solo CPU', 'Ideal para': 'Experimento más barato, aprendizaje' },
          { 'Configuración': 'Pi 5 + AI HAT+ 2', 'Capacidad de IA local': 'NPU dedicada, modelos GenAI 1B-1.5B', 'Ideal para': 'Dispositivo de IA de borde real, enfocado en GenAI' },
          { 'Configuración': 'PC con GPU / mini PC', 'Capacidad de IA local': 'Modelos 7B+, mucho más rápido', 'Ideal para': 'Uso diario serio de LLM local' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: 'Refrigeración para Inferencia Sostenida',
        content: [
          'La inferencia sostenida e intensiva en CPU o NPU calienta más el dispositivo que el uso casual — el disipador activo oficial de Raspberry Pi (un disipador de calor a presión con ventilador controlado por temperatura) es una adición barata y bien documentada si planeas ejecutar inferencia durante períodos prolongados en lugar de pruebas breves.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: 'Consultar precio actual',
            label: 'Consulta el precio del disipador activo Raspberry Pi 5',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: 'Almacenamiento NVMe para un Servidor Siempre Encendido',
        content: [
          'Si la Pi se convierte en un servidor de IA local siempre encendido, el almacenamiento NVMe a través del Raspberry Pi M.2 HAT+ oficial (que usa la interfaz PCIe de la Pi 5) es más fiable bajo carga sostenida de lectura/escritura que una tarjeta microSD — vale la pena añadirlo una vez que superas las pruebas casuales.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: 'Consultar precio actual',
            label: 'Consulta el precio del Raspberry Pi M.2 HAT+',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: '¿Qué Puedes Construir Realmente?',
        content: [
          'Un montaje de LLM local en la Pi 5 encaja con experimentos de asistente doméstico privado, integraciones de automatización del hogar (consulta nuestra guía para <a href="/es/power-local-llm/build-local-voice-assistant-2026">construir un asistente de voz local</a> para expectativas realistas de latencia en hardware de clase Pi), clasificación sencilla de documentos y servicios sin conexión siempre encendidos que no necesitan respuestas rápidas.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Conclusión',
        content: [
          '<strong>La opción más barata: una Pi 5 8GB desnuda para modelos de 1B-3B y experimentación.</strong> Mejor configuración de IA basada en Pi: Pi 5 + la AI HAT+ 2 oficial para aceleración dedicada Hailo-10H. Mejor rendimiento general: un PC con GPU o una <a href="/es/local-llms/best-mini-pcs-local-llm">mini PC diseñada para LLM local</a> — para modelos de 7B en adelante, ninguna configuración de Pi se acerca.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Necesita la Raspberry Pi 5 refrigeración activa para inferencia de LLM?',
            a: 'Sí, para cargas sostenidas. La inferencia sostenida e intensiva en CPU o NPU calienta la Pi 5 más que el uso casual, y el disipador activo oficial es una adición barata y que vale la pena para sesiones de inferencia más largas.',
          },
          {
            q: '¿La Raspberry Pi AI HAT+ 2 soporta realmente LLM?',
            a: 'Sí — confirmado por la propia documentación de Raspberry Pi. La NPU Hailo-10H de la AI HAT+ 2 ejecuta un conjunto documentado de modelos pequeños (aproximadamente 1B-1.5B parámetros) a través de un paquete Hailo GenAI Model Zoo y un servidor Hailo Ollama, accesible vía llamadas API o una interfaz de chat basada en navegador.',
          },
          {
            q: '¿Es Ollama la mejor forma de ejecutar un LLM en una Raspberry Pi 5?',
            a: 'Ollama es la opción más sencilla para inferencia solo en CPU en la Pi 5 desnuda. llama.cpp da más control manual sobre la cuantización y las opciones de compilación. La AI HAT+ 2 usa su propio servidor Hailo Ollama separado en lugar de la ruta estándar de Ollama en CPU.',
          },
          {
            q: '¿Es buena una Raspberry Pi 5 para un asistente de voz con un LLM local?',
            a: 'Solo con un modelo muy pequeño y expectativas de latencia realistas — consulta nuestra guía para <a href="/es/power-local-llm/build-local-voice-assistant-2026">construir un asistente de voz local</a>, que cubre la Pi 5 solo con CPU como uno de varios niveles de hardware junto a opciones más rápidas de mini PC, GPU y Mac.',
          },
          {
            q: '¿Cuál es la RAM mínima para cualquier LLM local en una Pi 5?',
            a: 'La configuración de 8GB es el mínimo práctico para una experiencia cómoda. La configuración de 4GB puede técnicamente cargar un modelo de 1B pero deja muy poco margen para cualquier otra cosa que corra en el dispositivo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Silicio de IA de Borde para LLM Locales 2026](/es/edge-ai/edge-ai-hardware-for-local-llms) -- Que encaja realmente en un producto de fabricacion en serie: presupuesto de potencia, diseno termico, julios por token.',
          '[Mejor LLM Local para 6 GB de VRAM](/es/prompt-bites/best-local-llm-6gb-vram) — una alternativa de GPU económica genuinamente práctica',
          '[¿Cuánta RAM Necesita un Modelo de 7B?](/es/prompt-bites/how-much-ram-for-7b-model) — por qué 7B está fuera del alcance de la CPU de una Pi 5',
          '[Mejor Mini PC para un Servidor Ollama Siempre Encendido](/es/prompt-bites/best-mini-pc-for-ollama-server-always-on) — una alternativa siempre encendida más práctica',
          '[Construir un Asistente de Voz Local](/es/power-local-llm/build-local-voice-assistant-2026) — latencia realista entre niveles de hardware Pi, mini PC y GPU',
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-fr.webp',
    title: 'Peut-on exécuter un LLM local sur un Raspberry Pi 5 ?',
    seoTitle: 'LLM local sur Raspberry Pi 5 : Ollama + AI HAT+ 2 (2026)',
    metaDescription: 'Oui — le Raspberry Pi 5 exécute des modèles 1B-3B via Ollama sur son CPU. Avec le Raspberry Pi AI HAT+ 2 (NPU Hailo-10H), une vraie accélération GenAI pour des modèles plus grands.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Passionnés envisageant un Raspberry Pi 5 pour un projet de LLM local',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Oui — un Raspberry Pi 5 exécute un LLM local dès aujourd\'hui, et Ollama est le moyen le plus simple d\'y parvenir : la carte 8 Go gère des modèles 1B-3B comme Llama 3.2 1B, Llama 3.2 3B ou Qwen3 1.7B en s\'appuyant uniquement sur le CPU.</strong> Pour une véritable accélération GenAI et des modèles plus grands, ajoutez le Raspberry Pi AI HAT+ 2 officiel — son NPU Hailo-10H est conçu spécifiquement pour l\'inférence LLM embarquée et intègre son propre serveur Hailo Ollama.',
    toc: [
      { label: 'Réponse rapide', anchor: '#quick-answer' },
      { label: 'Configuration économique : le Pi 5 seul', anchor: '#best-pick' },
      { label: 'Mieux : Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 vs Pi 5 + AI HAT+ 2 vs PC équipé d\'un GPU', anchor: '#comparison' },
      { label: 'Refroidissement pour une inférence soutenue', anchor: '#cooling' },
      { label: 'Stockage NVMe pour un serveur permanent', anchor: '#storage' },
      { label: 'Que peut-on vraiment construire ?', anchor: '#what-can-build' },
      { label: 'Conclusion', anchor: '#bottom-line' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter un LLM local sur un Raspberry Pi 5 ?',
        answer: 'Oui. Le Pi 5 (8 Go) exécute des modèles 1B-3B via Ollama ou llama.cpp en s\'appuyant uniquement sur le CPU — c\'est à peu près le plafond pratique. Ajoutez le Raspberry Pi AI HAT+ 2 officiel (NPU Hailo-10H) pour une accélération GenAI dédiée, son propre serveur Hailo Ollama, et de la marge pour des modèles plus grands.',
        bullets: [
          'Meilleure configuration économique : Pi 5 8 Go + refroidissement actif — le moyen le moins cher d\'expérimenter avec de petits modèles.',
          'Meilleure configuration IA : Pi 5 + Raspberry Pi AI HAT+ 2 — un NPU Hailo-10H dédié, conçu pour les charges GenAI.',
          'Plage de modèles avec le Pi 5 seul : environ 1B-3B paramètres en Q4 — ne vous attendez pas à la vitesse d\'une GPU de bureau.',
          'Meilleur usage : un assistant privé toujours actif, de l\'automatisation domestique ou de l\'expérimentation hors ligne — pas un chatbot quotidien rapide.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: 'Vérifier le prix actuel',
        label: 'Vérifier le prix du Raspberry Pi 5 8 Go',
      },
      {
        url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: 'Vérifier le prix actuel',
        label: 'Vérifier le prix du Raspberry Pi AI HAT+ 2',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Oui — le Raspberry Pi 5 en 8 Go exécute des modèles 1B-3B via Ollama ou llama.cpp en s\'appuyant uniquement sur le CPU',
          'Le Raspberry Pi AI HAT+ 2 officiel ajoute un NPU Hailo-10H conçu spécifiquement pour le GenAI embarqué, avec son propre serveur Hailo Ollama',
          'Achetez la configuration 8 Go — le modèle 4 Go laisse trop peu de marge pour le modèle plus le système d\'exploitation',
          'Le refroidissement actif vaut le coup pour toute charge d\'inférence soutenue, pas seulement pour de brefs tests',
          'Meilleur usage : un assistant privé toujours actif, de l\'automatisation domestique ou de l\'expérimentation hors ligne — pas un chatbot quotidien rapide',
          'Pour un usage sérieux de LLM local en 7B ou plus, un PC équipé d\'un GPU ou un mini PC surpasseront toute configuration Pi 5',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Un Raspberry Pi 5 exécute des LLM locaux dans la plage 1B-3B paramètres via Ollama sur son CPU, et le Raspberry Pi AI HAT+ 2 officiel ajoute une accélération NPU Hailo-10H dédiée pour les charges GenAI.',
          },
          {
            type: 'plain-terms',
            text: 'En termes simples : un Pi 5 nu peut exécuter lentement de tout petits modèles d\'IA ; ajouter la carte AI HAT+ 2 lui donne une vraie puce IA qui exécute les modèles plus vite et gère correctement le GenAI.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Configuration économique : le Raspberry Pi 5 seul',
        content: [
          '<strong>Un Raspberry Pi 5 nu (8 Go) exécute des modèles de 1B-3B paramètres en quantification Q4 via Ollama ou llama.cpp — des modèles comme Llama 3.2 1B, Llama 3.2 3B ou Qwen3 1.7B.</strong> Tout tourne sur le CPU quadricœur : le GPU VideoCore intégré du Pi 5 n\'est pas un accélérateur llama.cpp utilisable en pratique, il n\'y a donc pas d\'accélération GPU notable sur la carte nue.',
          'Les benchmarks communautaires situent les petits modèles Q4 à environ 4-9 tokens par seconde sur le CPU du Pi 5, selon le modèle exact et le runtime — nettement plus lent que l\'inférence sur GPU de bureau, mais utilisable pour de courtes requêtes et de l\'expérimentation occasionnelle.',
          'Idéal pour : des assistants hors ligne pour des requêtes simples, des expériences Home Assistant, des scripts d\'automatisation, et apprendre le fonctionnement de l\'inférence locale. Achetez la configuration 8 Go — la version 4 Go laisse trop peu de marge pour un modèle plus Raspberry Pi OS.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: 'Vérifier le prix actuel',
            label: 'Vérifier le prix du Raspberry Pi 5 8 Go',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'Mieux : Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>Le Raspberry Pi AI HAT+ 2 officiel transforme un Pi 5 en système d\'IA embarquée conçu pour cela, en ajoutant un NPU Hailo-10H et 8 Go de mémoire dédiée.</strong> La documentation officielle de Raspberry Pi confirme la prise en charge GenAI/LLM via un Hailo GenAI Model Zoo, avec notamment un serveur Hailo Ollama interrogeable sur le réseau ou via une interface de chat dans le navigateur.',
          'Le Hailo-10H délivre 40 TOPS de performance d\'inférence INT4 et est livré avec plusieurs petits modèles prêts à l\'emploi (environ 1B-1,5B paramètres, dont des variantes de Qwen2 et Llama 3.2) — une voie notablement différente et plus rapide que l\'inférence CPU seule, pour qui veut un vrai appareil d\'IA embarquée plutôt qu\'une expérimentation de loisir.',
          'Achetez cette configuration si vous voulez une accélération GenAI dédiée et acceptez une pile logicielle encore en maturation — Raspberry Pi a lancé l\'AI HAT+ 2 en janvier 2026, et la version de paquet documentée peut accuser un retard sur le rythme de publication propre à Hailo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: 'Vérifier le prix actuel',
            label: 'Vérifier le prix du Raspberry Pi AI HAT+ 2',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 vs Pi 5 + AI HAT+ 2 vs un PC équipé d\'un GPU',
        content: [
          '<strong>Ajouter l\'AI HAT+ 2 réduit une partie de l\'écart avec un GPU, mais un GPU discret ou un PC équipé d\'un GPU l\'emporte toujours sur la taille des modèles et la vitesse brute.</strong>',
        ],
        columns: ['Configuration', 'Capacité IA locale', 'Idéal pour'],
        rows: [
          { Configuration: 'Pi 5 seul', 'Capacité IA locale': 'Modèles 1B-3B, CPU seul', 'Idéal pour': 'Expérience la moins chère, apprentissage' },
          { Configuration: 'Pi 5 + AI HAT+ 2', 'Capacité IA locale': 'NPU dédié, modèles GenAI 1B-1,5B', 'Idéal pour': 'Vrai appareil d\'IA embarquée, axé GenAI' },
          { Configuration: 'PC GPU / mini PC', 'Capacité IA locale': 'Modèles 7B+, bien plus rapide', 'Idéal pour': 'Usage quotidien sérieux de LLM local' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: 'Refroidissement pour une inférence soutenue',
        content: [
          'Une inférence soutenue, intensive en CPU ou en NPU, chauffe davantage l\'appareil qu\'un usage occasionnel — le ventilateur actif officiel de Raspberry Pi (un dissipateur à clipser avec ventilateur piloté par la température) est un ajout peu coûteux et bien documenté si vous prévoyez de faire tourner l\'inférence sur de longues périodes plutôt que de brefs tests.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: 'Vérifier le prix actuel',
            label: 'Vérifier le prix du ventilateur actif Raspberry Pi 5',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: 'Stockage NVMe pour un serveur permanent',
        content: [
          'Si le Pi devient un serveur d\'IA locale fonctionnant en permanence, le stockage NVMe via le Raspberry Pi M.2 HAT+ officiel (qui utilise l\'interface PCIe du Pi 5) est plus fiable sous charge de lecture/écriture soutenue qu\'une carte microSD — un ajout pertinent une fois passé le stade des tests occasionnels.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: 'Vérifier le prix actuel',
            label: 'Vérifier le prix du Raspberry Pi M.2 HAT+',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: 'Que peut-on vraiment construire ?',
        content: [
          'Une installation de LLM local sur Pi 5 convient à des expériences d\'assistant domestique privé, des intégrations domotiques (voir notre guide pour <a href="/fr/power-local-llm/build-local-voice-assistant-2026">construire un assistant vocal local</a> pour des attentes de latence réalistes sur du matériel de classe Pi), de la classification de documents simple, et des services hors ligne fonctionnant en permanence qui n\'ont pas besoin de réponses rapides.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Conclusion',
        content: [
          '<strong>Le moins cher : un Pi 5 8 Go nu pour des modèles 1B-3B et de l\'expérimentation.</strong> Meilleure configuration IA à base de Pi : Pi 5 + l\'AI HAT+ 2 officiel pour une accélération Hailo-10H dédiée. Meilleure performance globale : un PC équipé d\'un GPU ou un <a href="/fr/local-llms/best-mini-pcs-local-llm">mini PC conçu pour les LLM locaux</a> — pour des modèles de 7B et plus, aucune configuration Pi ne s\'en approche.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Le Raspberry Pi 5 a-t-il besoin d\'un refroidissement actif pour l\'inférence LLM ?',
            a: 'Oui, pour les charges soutenues. Une inférence soutenue, intensive en CPU ou en NPU, chauffe davantage le Pi 5 qu\'un usage occasionnel, et le ventilateur actif officiel est un ajout peu coûteux et pertinent pour des sessions d\'inférence plus longues.',
          },
          {
            q: 'Le Raspberry Pi AI HAT+ 2 prend-il vraiment en charge les LLM ?',
            a: 'Oui — confirmé par la documentation officielle de Raspberry Pi. Le NPU Hailo-10H de l\'AI HAT+ 2 fait tourner un ensemble documenté de petits modèles (environ 1B-1,5B paramètres) via un paquet Hailo GenAI Model Zoo et un serveur Hailo Ollama, accessible par appels API ou via une interface de chat dans le navigateur.',
          },
          {
            q: 'Ollama est-il le meilleur moyen d\'exécuter un LLM sur un Raspberry Pi 5 ?',
            a: 'Ollama est l\'option la plus simple pour l\'inférence CPU seule sur le Pi 5 nu. llama.cpp offre plus de contrôle manuel sur la quantification et les options de compilation. L\'AI HAT+ 2 utilise son propre serveur Hailo Ollama séparé plutôt que le chemin CPU standard d\'Ollama.',
          },
          {
            q: 'Un Raspberry Pi 5 convient-il pour un assistant vocal avec un LLM local ?',
            a: 'Seulement avec un très petit modèle et des attentes de latence réalistes — voir notre guide pour <a href="/fr/power-local-llm/build-local-voice-assistant-2026">construire un assistant vocal local</a>, qui traite le Pi 5 CPU seul comme l\'un des plusieurs niveaux de matériel, aux côtés d\'options mini PC, GPU et Mac plus rapides.',
          },
          {
            q: 'Quelle est la RAM minimale pour un LLM local sur un Pi 5 ?',
            a: 'La configuration 8 Go est le minimum pratique pour une expérience confortable. La configuration 4 Go peut techniquement charger un modèle 1B mais laisse très peu de marge pour tout autre élément fonctionnant sur l\'appareil.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Silicium IA embarquee pour LLM locaux 2026](/fr/edge-ai/edge-ai-hardware-for-local-llms) -- Ce qui tient vraiment dans un produit industrialise : budget de puissance, conception thermique, joules par token.',
          '[Meilleur LLM local pour 6 Go de VRAM](/fr/prompt-bites/best-local-llm-6gb-vram) — une alternative GPU réellement pratique à petit budget',
          '[De combien de RAM un modèle 7B a-t-il besoin ?](/fr/prompt-bites/how-much-ram-for-7b-model) — pourquoi le 7B est hors de portée du CPU d\'un Pi 5',
          '[Meilleur mini PC pour un serveur Ollama permanent](/fr/prompt-bites/best-mini-pc-for-ollama-server-always-on) — une alternative permanente plus pratique',
          '[Construire un assistant vocal local](/fr/power-local-llm/build-local-voice-assistant-2026) — latence réaliste selon les niveaux de matériel Pi, mini PC et GPU',
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-ja.webp',
    title: 'Raspberry Pi 5でローカルLLMを動かせますか?',
    seoTitle: 'Raspberry Pi 5のローカルLLM：Ollama + AI HAT+ 2 (2026年)',
    metaDescription: 'はい — Raspberry Pi 5はOllamaでCPU上の1B-3Bモデルを動かせます。Raspberry Pi AI HAT+ 2(Hailo-10H NPU)を追加すれば、より大きなモデル向けの本格的なGenAIアクセラレーションが得られます。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Raspberry Pi 5をローカルLLMプロジェクト用に検討しているホビイスト',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>はい — Raspberry Pi 5は今日ローカルLLMを動かせます。最も簡単な方法はOllamaです。8GBボードはLlama 3.2 1B、Llama 3.2 3B、Qwen3 1.7BのようなモデルをCPUだけで扱えます。</strong>本格的なGenAIアクセラレーションとより大きなモデルには、公式のRaspberry Pi AI HAT+ 2を追加してください — そのHailo-10H NPUはオンデバイスLLM推論向けに作られており、専用のHailo Ollamaサーバーを搭載しています。',
    toc: [
      { label: 'クイック回答', anchor: '#quick-answer' },
      { label: '予算重視の構成: Pi 5単体', anchor: '#best-pick' },
      { label: 'より良い選択: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 vs Pi 5+AI HAT+2 vs GPU PC', anchor: '#comparison' },
      { label: '持続的な推論のための冷却', anchor: '#cooling' },
      { label: '常時稼働サーバー向けNVMeストレージ', anchor: '#storage' },
      { label: '実際に何が作れるか?', anchor: '#what-can-build' },
      { label: '結論', anchor: '#bottom-line' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'Raspberry Pi 5でローカルLLMを動かせますか?',
        answer: 'はい。Pi 5(8GB)はOllamaかllama.cppでCPUだけで1B-3Bモデルを動かせます — これがおおよその実用上の上限です。公式のRaspberry Pi AI HAT+ 2(Hailo-10H NPU)を追加すれば、専用のGenAIアクセラレーション、専用のHailo Ollamaサーバー、そしてより大きなモデルへの余裕が得られます。',
        bullets: [
          '最良の予算構成: Pi 5 8GB + アクティブ冷却 — 小さいモデルを試す最も安い方法。',
          '最良のAI構成: Pi 5 + Raspberry Pi AI HAT+ 2 — GenAIワークロード向けの専用Hailo-10H NPU。',
          'Pi単体でのモデル範囲: Q4でおよそ1B-3Bパラメータ — デスクトップGPUの速度は期待しないこと。',
          '最良の用途: プライベートな常時稼働アシスタント、家庭内自動化、オフライン実験 — 高速な日常用チャットボットではない。',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: '現在の価格を確認',
        label: 'Raspberry Pi 5 8GBの価格を確認',
      },
      {
        url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: '現在の価格を確認',
        label: 'Raspberry Pi AI HAT+ 2の価格を確認',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'はい — 8GBのRaspberry Pi 5はOllamaかllama.cppでCPUだけで1B-3Bモデルを動かせます',
          '公式のRaspberry Pi AI HAT+ 2は、オンデバイスGenAI専用に作られたHailo-10H NPUを追加し、専用のHailo Ollamaサーバーを備えています',
          '8GB構成を購入すること — 4GBはモデル+OS用の余裕が不足します',
          '短時間のテストだけでなく、持続的な推論ワークロードにはアクティブ冷却を追加する価値があります',
          '最良の用途: プライベートな常時稼働アシスタント、家庭内自動化、オフライン実験 — 高速な日常用チャットボットではない',
          '本格的な7B以上のローカルLLM用途には、GPU PCやミニPCの方がどのPi 5構成よりも優れています',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Raspberry Pi 5はCPU上のOllamaで1B-3Bパラメータ範囲のローカルLLMを動かし、公式のRaspberry Pi AI HAT+ 2はGenAIワークロード向けの専用Hailo-10H NPUアクセラレーションを追加します。',
          },
          {
            type: 'plain-terms',
            text: '簡単に言うと: 素のPi 5は小さいAIモデルを遅く動かせます。AI HAT+ 2ボードを追加すると、モデルを速く動かしGenAIを適切に処理できる本物のAIチップが手に入ります。',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '予算重視の構成: Raspberry Pi 5単体',
        content: [
          '<strong>素のRaspberry Pi 5(8GB)は、Ollamaやllama.cpp経由でQ4量子化の1B-3Bパラメータモデル — Llama 3.2 1B、Llama 3.2 3B、Qwen3 1.7Bなど — を動かせます。</strong>すべてクアッドコアCPUで実行されます。Pi 5の統合VideoCore GPUは実用的なllama.cppアクセラレータではないため、素のボードでは意味のあるGPU高速化はありません。',
          'コミュニティのベンチマークでは、小さいQ4モデルはPi 5のCPUでモデルとランタイムによりおよそ毎秒4-9トークンとされています — デスクトップGPU推論より明らかに遅いですが、短いクエリや気軽な実験には使えます。',
          '最適な用途: 簡単なクエリ向けオフラインアシスタント、Home Assistant実験、自動化スクリプト、ローカル推論の仕組みを学ぶこと。8GB構成を購入してください — 4GBモデルはモデル+Raspberry Pi OS用の余裕が不足します。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '現在の価格を確認',
            label: 'Raspberry Pi 5 8GBの価格を確認',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'より良い選択: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>公式のRaspberry Pi AI HAT+ 2は、Hailo-10H NPUと8GBの専用メモリを追加することで、Pi 5を専用設計のエッジAIシステムに変えます。</strong>Raspberry Pi自身のドキュメントは、Hailo GenAI Model Zooを通じたGenAI/LLMサポートを確認しており、ネットワーク経由またはブラウザベースのチャットUIで問い合わせできるHailo Ollamaサーバーも含まれます。',
          'Hailo-10Hは40 TOPSのINT4推論性能を提供し、すぐに使えるいくつかの小さいモデル(Qwen2やLlama 3.2のバリアントを含む、およそ1B-1.5Bパラメータ)が付属します — 趣味の実験ではなく本物のエッジAIデバイスを求める人にとって、CPUのみの推論とは明確に異なる、より速い経路です。',
          '専用のGenAIアクセラレーションを望み、まだ成熟途上のソフトウェアスタックでも構わない場合はこの構成を購入してください — Raspberry Piは2026年1月にAI HAT+ 2を発売しましたが、文書化されたパッケージバージョンはHailo自身のリリースサイクルより遅れることがあります。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: '現在の価格を確認',
            label: 'Raspberry Pi AI HAT+ 2の価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 vs Pi 5 + AI HAT+ 2 vs GPU PC',
        content: [
          '<strong>AI HAT+ 2を追加するとGPUとの差の一部は縮まりますが、モデルサイズと生の速度では依然として単体GPUやGPU PCが勝ります。</strong>',
        ],
        columns: ['構成', 'ローカルAI性能', '最適な用途'],
        rows: [
          { '構成': 'Pi 5単体', 'ローカルAI性能': '1B-3Bモデル、CPUのみ', '最適な用途': '最も安い実験、学習' },
          { '構成': 'Pi 5 + AI HAT+ 2', 'ローカルAI性能': '専用NPU、1B-1.5BのGenAIモデル', '最適な用途': '本物のエッジAIデバイス、GenAI重視' },
          { '構成': 'GPU PC / ミニPC', 'ローカルAI性能': '7B以上のモデル、はるかに高速', '最適な用途': '本格的な日常のローカルLLM利用' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: '持続的な推論のための冷却',
        content: [
          '持続的なCPUまたはNPU負荷の高い推論は、気軽な利用よりもデバイスを熱くします — 公式のRaspberry Piアクティブクーラー(温度制御ファン付きの取り付け式ヒートシンク)は、短時間のテストではなく長時間の推論を計画している場合に安価でよく文書化された追加投資です。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: '現在の価格を確認',
            label: 'Raspberry Pi 5アクティブクーラーの価格を確認',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: '常時稼働サーバー向けNVMeストレージ',
        content: [
          'Piが常時稼働のローカルAIサーバーになる場合、Pi 5のPCIeインターフェースを使う公式のRaspberry Pi M.2 HAT+によるNVMeストレージは、持続的な読み書き負荷の下ではmicroSDカードより信頼性が高くなります — 気軽なテストの段階を超えたら追加する価値があります。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: '現在の価格を確認',
            label: 'Raspberry Pi M.2 HAT+の価格を確認',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: '実際に何が作れるか?',
        content: [
          'Pi 5のローカルLLM構成は、プライベートなホームアシスタント実験、家庭内自動化との連携(Pi級ハードウェアでの現実的な遅延を知るには<a href="/ja/power-local-llm/build-local-voice-assistant-2026">ローカル音声アシスタントの構築ガイド</a>を参照)、簡単な文書分類、高速な応答を必要としない常時稼働のオフラインサービスに適しています。',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: '結論',
        content: [
          '<strong>最も安い: 1B-3Bモデルと実験用の素のPi 5 8GB。</strong>最良のPiベースAI構成: 専用のHailo-10Hアクセラレーションを得られる、公式AI HAT+ 2を搭載したPi 5。総合的な最高性能: GPU PCまたは<a href="/ja/local-llms/best-mini-pcs-local-llm">ローカルLLM向けミニPC</a> — 7B以上のモデルでは、どのPi構成も及びません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Raspberry Pi 5はLLM推論にアクティブ冷却が必要ですか?',
            a: '持続的な負荷では必要です。持続的なCPUまたはNPU負荷の高い推論は、気軽な利用よりPi 5を暖かくします。公式のアクティブクーラーは、長時間の推論セッションに対して安価で価値のある追加投資です。',
          },
          {
            q: 'Raspberry Pi AI HAT+ 2は本当にLLMをサポートしていますか?',
            a: 'はい — Raspberry Pi自身のドキュメントで確認済みです。AI HAT+ 2のHailo-10H NPUは、Hailo GenAI Model Zooパッケージとhailo Ollamaサーバーを通じて、文書化された小型モデル群(およそ1B-1.5Bパラメータ)を動かし、APIコールまたはブラウザベースのチャットUIからアクセスできます。',
          },
          {
            q: 'Raspberry Pi 5でLLMを動かすにはOllamaが最良の方法ですか?',
            a: '素のPi 5でのCPUのみの推論には、Ollamaが最もシンプルな選択肢です。llama.cppは量子化やビルドフラグをより手動で制御できます。AI HAT+ 2は、標準のOllama CPU経路ではなく、独自の別のHailo Ollamaサーバーを使用します。',
          },
          {
            q: 'Raspberry Pi 5はローカルLLMを使った音声アシスタントに向いていますか?',
            a: '非常に小さいモデルと現実的な遅延の期待を持てば可能です — より高速なミニPC、GPU、Macの選択肢と並んでPi 5のCPUのみの運用を複数のハードウェア階層の1つとして扱う<a href="/ja/power-local-llm/build-local-voice-assistant-2026">ローカル音声アシスタントの構築ガイド</a>をご覧ください。',
          },
          {
            q: 'Pi 5でどんなローカルLLMにも必要な最小RAMは?',
            a: '8GB構成が快適な体験のための実用上の最低ラインです。4GB構成は技術的には1Bモデルを読み込めますが、デバイス上で動く他のもののための余裕がほとんど残りません。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[エッジAIシリコン ローカルLLM向け 2026](/ja/edge-ai/edge-ai-hardware-for-local-llms) -- 出荷製品に実際に収まる構成とは：電力予算、熱設計、トークンあたりのジュール。',
          '[6GB VRAMに最適なローカルLLM](/ja/prompt-bites/best-local-llm-6gb-vram) — 本当に実用的な低予算GPU代替案',
          '[7Bモデルにはどれだけのメモリが必要?](/ja/prompt-bites/how-much-ram-for-7b-model) — 7BがPi 5のCPUには手が届かない理由',
          '[常時稼働Ollamaサーバーに最適なミニPC](/ja/prompt-bites/best-mini-pc-for-ollama-server-always-on) — より実用的な常時稼働の代替案',
          '[ローカル音声アシスタントを構築する](/ja/power-local-llm/build-local-voice-assistant-2026) — Pi・ミニPC・GPUの各ハードウェア階層での現実的な遅延',
        ],
      },
    },
  },
  ko: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-ko.webp',
    title: 'Raspberry Pi 5에서 로컬 LLM을 구동할 수 있는가?',
    seoTitle: 'Raspberry Pi 5 로컬 LLM: Ollama + AI HAT+ 2 (2026)',
    metaDescription: '가능합니다 — Raspberry Pi 5는 Ollama로 CPU에서 1B-3B 모델을 구동합니다. Raspberry Pi AI HAT+ 2(Hailo-10H NPU)를 추가하면 더 큰 모델을 위한 진짜 GenAI 가속을 얻을 수 있습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Raspberry Pi 5를 로컬 LLM 프로젝트에 고려하는 애호가',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>예 — Raspberry Pi 5는 오늘날 로컬 LLM을 구동할 수 있으며, Ollama가 가장 쉬운 방법입니다: 8GB 보드는 Llama 3.2 1B, Llama 3.2 3B, Qwen3 1.7B 같은 모델을 CPU만으로 처리합니다.</strong> 진짜 GenAI 가속과 더 큰 모델을 위해서는 공식 Raspberry Pi AI HAT+ 2를 추가하십시오 — 이 제품의 Hailo-10H NPU는 온디바이스 LLM 추론을 위해 특별히 설계되었으며 자체 Hailo Ollama 서버를 탑재하고 있습니다.',
    toc: [
      { label: '빠른 답변', anchor: '#quick-answer' },
      { label: '예산형 구성: Pi 5 단독', anchor: '#best-pick' },
      { label: '더 나은 선택: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 대 Pi 5+AI HAT+2 대 GPU PC', anchor: '#comparison' },
      { label: '지속적인 추론을 위한 냉각', anchor: '#cooling' },
      { label: '상시 가동 서버를 위한 NVMe 스토리지', anchor: '#storage' },
      { label: '실제로 무엇을 만들 수 있는가?', anchor: '#what-can-build' },
      { label: '결론', anchor: '#bottom-line' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'Raspberry Pi 5에서 로컬 LLM을 구동할 수 있습니까?',
        answer: '예. Pi 5(8GB)는 Ollama나 llama.cpp로 CPU만으로 1B-3B 모델을 구동합니다 — 이것이 대략적인 실용적 한계입니다. 공식 Raspberry Pi AI HAT+ 2(Hailo-10H NPU)를 추가하면 전용 GenAI 가속, 자체 Hailo Ollama 서버, 더 큰 모델을 위한 여유를 얻을 수 있습니다.',
        bullets: [
          '최적의 예산형 구성: Pi 5 8GB + 능동 냉각 — 아주 작은 모델을 실험하는 가장 저렴한 방법.',
          '최적의 AI 구성: Pi 5 + Raspberry Pi AI HAT+ 2 — GenAI 워크로드를 위해 만들어진 전용 Hailo-10H NPU.',
          'Pi 단독 모델 범위: Q4 기준 약 1B-3B 파라미터 — 데스크톱 GPU 속도를 기대하지 마십시오.',
          '최적의 용도: 사적인 상시 가동 비서, 홈 오토메이션, 오프라인 실험 — 빠른 일상용 챗봇이 아닙니다.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: '현재 가격 확인',
        label: 'Raspberry Pi 5 8GB 가격 확인하기',
      },
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: '현재 가격 확인',
        label: 'Raspberry Pi AI HAT+ 2 가격 확인하기',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '예 — 8GB Raspberry Pi 5는 Ollama나 llama.cpp로 CPU만으로 1B-3B 모델을 구동합니다',
          '공식 Raspberry Pi AI HAT+ 2는 온디바이스 GenAI를 위해 특별히 만들어진 Hailo-10H NPU를 추가하며, 자체 Hailo Ollama 서버를 갖추고 있습니다',
          '8GB 구성을 구매하십시오 — 4GB는 모델과 OS를 위한 여유가 너무 부족합니다',
          '짧은 테스트뿐 아니라 지속적인 추론 워크로드에는 능동 냉각을 추가할 가치가 있습니다',
          '최적의 용도: 사적인 상시 가동 비서, 홈 오토메이션, 오프라인 실험 — 빠른 일상용 챗봇이 아닙니다',
          '진지한 7B 이상의 로컬 LLM 작업에는 GPU PC나 미니 PC가 어떤 Pi 5 구성보다도 뛰어납니다',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Raspberry Pi 5는 CPU에서 Ollama를 통해 1B-3B 파라미터 범위의 로컬 LLM을 구동하며, 공식 Raspberry Pi AI HAT+ 2는 GenAI 워크로드를 위한 전용 Hailo-10H NPU 가속을 추가합니다.',
          },
          {
            type: 'plain-terms',
            text: '쉽게 말하면: 순정 Pi 5는 아주 작은 AI 모델을 느리게 구동할 수 있습니다. AI HAT+ 2 보드를 추가하면 모델을 더 빠르게 구동하고 GenAI를 제대로 처리하는 진짜 AI 칩을 얻게 됩니다.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '예산형 구성: Raspberry Pi 5 단독',
        content: [
          '<strong>순정 Raspberry Pi 5(8GB)는 Ollama나 llama.cpp를 통해 Q4 양자화된 1B-3B 파라미터 모델 — Llama 3.2 1B, Llama 3.2 3B, Qwen3 1.7B 같은 모델 — 을 구동합니다.</strong> 모든 것이 쿼드코어 CPU에서 실행됩니다. Pi 5의 통합 VideoCore GPU는 실용적인 llama.cpp 가속기가 아니므로, 순정 보드에서는 의미 있는 GPU 속도 향상이 없습니다.',
          '커뮤니티 벤치마크에 따르면 작은 Q4 모델은 정확한 모델과 런타임에 따라 Pi 5 CPU에서 초당 약 4-9토큰의 속도를 보입니다 — 데스크톱 GPU 추론보다 눈에 띄게 느리지만, 짧은 질의와 가벼운 실험에는 사용할 만합니다.',
          '최적의 용도: 간단한 질의를 위한 오프라인 비서, Home Assistant 실험, 자동화 스크립트, 로컬 추론의 작동 방식을 배우는 것. 8GB 구성을 구매하십시오 — 4GB 모델은 모델과 Raspberry Pi OS를 위한 여유가 너무 부족합니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '현재 가격 확인',
            label: 'Raspberry Pi 5 8GB 가격 확인하기',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: '더 나은 선택: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>공식 Raspberry Pi AI HAT+ 2는 Hailo-10H NPU와 8GB의 전용 메모리를 추가해 Pi 5를 목적에 맞게 설계된 엣지 AI 시스템으로 바꿉니다.</strong> Raspberry Pi 자체 문서는 Hailo GenAI Model Zoo를 통한 GenAI/LLM 지원을 확인하고 있으며, 네트워크나 브라우저 기반 채팅 UI로 조회할 수 있는 Hailo Ollama 서버도 포함합니다.',
          'Hailo-10H는 40 TOPS의 INT4 추론 성능을 제공하며, 바로 사용할 수 있는 여러 소형 모델(Qwen2 및 Llama 3.2 변형을 포함해 약 1B-1.5B 파라미터)과 함께 제공됩니다 — 취미 실험이 아닌 진짜 엣지 AI 기기를 원하는 사람에게 CPU 전용 추론과는 확연히 다른, 더 빠른 경로입니다.',
          '전용 GenAI 가속을 원하고 아직 성숙 중인 소프트웨어 스택을 감수할 수 있다면 이 구성을 구매하십시오 — Raspberry Pi는 2026년 1월에 AI HAT+ 2를 출시했으며, 문서화된 패키지 버전이 Hailo 자체 릴리스 주기보다 뒤처질 수 있습니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: '현재 가격 확인',
            label: 'Raspberry Pi AI HAT+ 2 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 대 Pi 5 + AI HAT+ 2 대 GPU PC',
        content: [
          '<strong>AI HAT+ 2를 추가하면 GPU와의 격차 일부가 좁혀지지만, 원시 모델 크기와 속도에서는 여전히 독립형 GPU나 GPU PC가 앞섭니다.</strong>',
        ],
        columns: ['구성', '로컬 AI 성능', '최적의 용도'],
        rows: [
          { '구성': 'Pi 5 단독', '로컬 AI 성능': '1B-3B 모델, CPU만', '최적의 용도': '가장 저렴한 실험, 학습' },
          { '구성': 'Pi 5 + AI HAT+ 2', '로컬 AI 성능': '전용 NPU, 1B-1.5B GenAI 모델', '최적의 용도': '진짜 엣지 AI 기기, GenAI 중심' },
          { '구성': 'GPU PC / 미니 PC', '로컬 AI 성능': '7B 이상 모델, 훨씬 빠름', '최적의 용도': '진지한 일상용 로컬 LLM 사용' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: '지속적인 추론을 위한 냉각',
        content: [
          '지속적인 CPU 또는 NPU 집약적 추론은 가벼운 사용보다 기기를 더 뜨겁게 만듭니다 — 공식 Raspberry Pi 액티브 쿨러(온도 제어 팬이 달린 클립형 히트싱크)는 짧은 테스트가 아닌 장시간 추론을 계획한다면 저렴하고 잘 문서화된 추가 요소입니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: '현재 가격 확인',
            label: 'Raspberry Pi 5 액티브 쿨러 가격 확인하기',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: '상시 가동 서버를 위한 NVMe 스토리지',
        content: [
          'Pi가 상시 가동 로컬 AI 서버가 된다면, Pi 5의 PCIe 인터페이스를 사용하는 공식 Raspberry Pi M.2 HAT+를 통한 NVMe 스토리지가 지속적인 읽기/쓰기 부하에서 microSD 카드보다 더 신뢰할 수 있습니다 — 가벼운 테스트 단계를 넘어서면 추가할 가치가 있습니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: '현재 가격 확인',
            label: 'Raspberry Pi M.2 HAT+ 가격 확인하기',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: '실제로 무엇을 만들 수 있는가?',
        content: [
          'Pi 5 로컬 LLM 구성은 사적인 홈 비서 실험, 홈 오토메이션 통합(Pi급 하드웨어에서의 현실적인 지연 시간 기대치를 알아보려면 <a href="/ko/power-local-llm/build-local-voice-assistant-2026">로컬 음성 비서 구축 가이드</a> 참조), 간단한 문서 분류, 빠른 응답이 필요 없는 상시 가동 오프라인 서비스에 적합합니다.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: '결론',
        content: [
          '<strong>가장 저렴함: 1B-3B 모델과 실험을 위한 순정 Pi 5 8GB.</strong> 최적의 Pi 기반 AI 구성: 전용 Hailo-10H 가속을 위한 공식 AI HAT+ 2를 장착한 Pi 5. 전체적으로 최고의 성능: GPU PC 또는 <a href="/ko/local-llms/best-mini-pcs-local-llm">로컬 LLM용으로 설계된 미니 PC</a> — 7B 이상 모델에서는 어떤 Pi 구성도 근접하지 못합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Raspberry Pi 5는 LLM 추론에 능동 냉각이 필요합니까?',
            a: '지속적인 부하에서는 필요합니다. 지속적인 CPU 또는 NPU 집약적 추론은 가벼운 사용보다 Pi 5를 더 뜨겁게 만들며, 공식 액티브 쿨러는 긴 추론 세션에 저렴하고 가치 있는 추가 요소입니다.',
          },
          {
            q: 'Raspberry Pi AI HAT+ 2는 실제로 LLM을 지원합니까?',
            a: '예 — Raspberry Pi 자체 문서를 통해 확인되었습니다. AI HAT+ 2의 Hailo-10H NPU는 Hailo GenAI Model Zoo 패키지와 Hailo Ollama 서버를 통해 문서화된 소형 모델 세트(약 1B-1.5B 파라미터)를 구동하며, API 호출이나 브라우저 기반 채팅 UI로 접근할 수 있습니다.',
          },
          {
            q: 'Raspberry Pi 5에서 LLM을 구동하는 가장 좋은 방법은 Ollama입니까?',
            a: 'Ollama는 순정 Pi 5에서 CPU 전용 추론을 위한 가장 간단한 옵션입니다. llama.cpp는 양자화와 빌드 플래그에 대해 더 수동적인 제어를 제공합니다. AI HAT+ 2는 표준 Ollama CPU 경로 대신 자체적인 별도 Hailo Ollama 서버를 사용합니다.',
          },
          {
            q: 'Raspberry Pi 5는 로컬 LLM을 갖춘 음성 비서에 좋습니까?',
            a: '매우 작은 모델과 현실적인 지연 시간 기대치가 있을 때만 가능합니다 — 더 빠른 미니 PC, GPU, Mac 옵션과 나란히 CPU 전용 Pi 5를 여러 하드웨어 등급 중 하나로 다루는 <a href="/ko/power-local-llm/build-local-voice-assistant-2026">로컬 음성 비서 구축 가이드</a>를 참조하십시오.',
          },
          {
            q: 'Pi 5에서 어떤 로컬 LLM이든 실행하는 데 필요한 최소 RAM은 얼마입니까?',
            a: '8GB 구성이 편안한 경험을 위한 실질적인 최소치입니다. 4GB 구성은 기술적으로 1B 모델을 로드할 수 있지만 기기에서 실행되는 다른 것을 위한 여유가 거의 남지 않습니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM용 엣지 AI 실리콘 2026](/ko/edge-ai/edge-ai-hardware-for-local-llms) -- 실제 양산 제품에 들어가는 구성: 전력 예산, 열설계, 토큰당 줄(J).',
          '[6GB VRAM을 위한 최적의 로컬 LLM](/ko/prompt-bites/best-local-llm-6gb-vram) — 진정으로 실용적인 저예산 GPU 대안',
          '[7B 모델에는 얼마나 많은 RAM이 필요한가?](/ko/prompt-bites/how-much-ram-for-7b-model) — 7B가 Pi 5 CPU에는 왜 무리인지',
          '[상시 가동 Ollama 서버를 위한 최적의 미니 PC](/ko/prompt-bites/best-mini-pc-for-ollama-server-always-on) — 더 실용적인 상시 가동 대안',
          '[로컬 음성 비서 구축하기](/ko/power-local-llm/build-local-voice-assistant-2026) — Pi, 미니 PC, GPU 하드웨어 등급 전반의 현실적인 지연 시간',
        ],
      },
    },
  },
  pt: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-pt.webp',
    title: 'É Possível Rodar um LLM Local em um Raspberry Pi 5?',
    seoTitle: 'LLM Local no Raspberry Pi 5: Ollama + AI HAT+ 2 (2026)',
    metaDescription: 'Sim — o Raspberry Pi 5 roda modelos de 1B-3B com Ollama na CPU. Com o Raspberry Pi AI HAT+ 2 (NPU Hailo-10H) há aceleração GenAI real para modelos maiores.',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: 'Entusiastas considerando um Raspberry Pi 5 para um projeto de LLM local',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Sim — um Raspberry Pi 5 roda um LLM local hoje, e o Ollama é a forma mais fácil de fazer isso: a placa de 8GB lida com modelos de 1B-3B como Llama 3.2 1B, Llama 3.2 3B ou Qwen3 1.7B usando apenas a CPU.</strong> Para aceleração GenAI real e modelos maiores, adicione o Raspberry Pi AI HAT+ 2 oficial — sua NPU Hailo-10H é feita especificamente para inferência de LLM no dispositivo e vem com seu próprio servidor Hailo Ollama.',
    toc: [
      { label: 'Resposta Rápida', anchor: '#quick-answer' },
      { label: 'Configuração Econômica: Só o Pi 5', anchor: '#best-pick' },
      { label: 'Melhor: Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 vs Pi 5 + AI HAT+ 2 vs PC com GPU', anchor: '#comparison' },
      { label: 'Resfriamento para Inferência Sustentada', anchor: '#cooling' },
      { label: 'Armazenamento NVMe para um Servidor Sempre Ligado', anchor: '#storage' },
      { label: 'O Que Você Pode Realmente Construir?', anchor: '#what-can-build' },
      { label: 'Conclusão', anchor: '#bottom-line' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'É possível rodar um LLM local em um Raspberry Pi 5?',
        answer: 'Sim. O Pi 5 (8GB) roda modelos de 1B-3B via Ollama ou llama.cpp usando apenas a CPU — esse é aproximadamente o teto prático. Adicione o Raspberry Pi AI HAT+ 2 oficial (NPU Hailo-10H) para aceleração GenAI dedicada, seu próprio servidor Hailo Ollama e espaço para modelos maiores.',
        bullets: [
          'Melhor configuração econômica: Pi 5 8GB + resfriamento ativo — a forma mais barata de experimentar com modelos minúsculos.',
          'Melhor configuração de IA: Pi 5 + Raspberry Pi AI HAT+ 2 — uma NPU Hailo-10H dedicada, feita para cargas de trabalho GenAI.',
          'Faixa de modelos só com o Pi 5: aproximadamente 1B-3B parâmetros em Q4 — não espere velocidade de GPU de desktop.',
          'Melhor uso: um assistente privado sempre ligado, automação residencial ou experimentação offline — não um chatbot rápido de uso diário.',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.com.br/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5 (8GB)',
        productCategory: 'sbc',
        priceRange: 'Verificar preço atual',
        label: 'Confira o preço do Raspberry Pi 5 8GB',
      },
      {
        url: 'https://www.amazon.com.br/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: 'Verificar preço atual',
        label: 'Confira o preço do Raspberry Pi AI HAT+ 2',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Sim — o Raspberry Pi 5 de 8GB roda modelos de 1B-3B via Ollama ou llama.cpp usando apenas a CPU',
          'O Raspberry Pi AI HAT+ 2 oficial adiciona uma NPU Hailo-10H feita especificamente para GenAI no dispositivo, com seu próprio servidor Hailo Ollama',
          'Compre a configuração de 8GB — a de 4GB deixa espaço demasiado pequeno para o modelo mais o sistema operacional',
          'O resfriamento ativo vale a pena para qualquer carga de inferência sustentada, não só testes breves',
          'Melhor uso: um assistente privado sempre ligado, automação residencial ou experimentação offline — não um chatbot rápido de uso diário',
          'Para uso sério de LLM local de 7B ou mais, um PC com GPU ou um mini PC vão superar qualquer configuração de Pi 5',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Um Raspberry Pi 5 roda LLMs locais na faixa de 1B-3B parâmetros via Ollama em sua CPU, e o Raspberry Pi AI HAT+ 2 oficial adiciona aceleração dedicada de NPU Hailo-10H para cargas de trabalho GenAI.',
          },
          {
            type: 'plain-terms',
            text: 'Em termos simples: um Pi 5 puro consegue rodar modelos de IA minúsculos devagar; adicionar a placa AI HAT+ 2 dá a ele um chip de IA de verdade, que roda modelos mais rápido e lida com GenAI adequadamente.',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Configuração Econômica: Raspberry Pi 5 Sozinho',
        content: [
          '<strong>Um Raspberry Pi 5 puro (8GB) roda modelos de 1B-3B parâmetros com quantização Q4 através do Ollama ou llama.cpp — modelos como Llama 3.2 1B, Llama 3.2 3B ou Qwen3 1.7B.</strong> Tudo roda na CPU quad-core: a GPU VideoCore integrada do Pi 5 não é um acelerador prático para o llama.cpp, então não há ganho relevante de GPU na placa pura.',
          'Benchmarks da comunidade colocam modelos pequenos em Q4 em aproximadamente 4-9 tokens por segundo na CPU do Pi 5, dependendo do modelo exato e do runtime — visivelmente mais lento que a inferência em GPU de desktop, mas utilizável para consultas curtas e experimentação casual.',
          'Melhor para: assistentes offline para consultas simples, experimentos com Home Assistant, scripts de automação e aprender como funciona a inferência local. Compre a configuração de 8GB — o modelo de 4GB deixa espaço demasiado pequeno para um modelo mais o Raspberry Pi OS.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: 'Verificar preço atual',
            label: 'Confira o preço do Raspberry Pi 5 8GB',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: 'Melhor: Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>O Raspberry Pi AI HAT+ 2 oficial transforma um Pi 5 em um sistema de IA de borda feito sob medida, adicionando uma NPU Hailo-10H e 8GB de memória dedicada.</strong> A própria documentação da Raspberry Pi confirma suporte a GenAI/LLM através de um Hailo GenAI Model Zoo, incluindo um servidor Hailo Ollama que você pode consultar pela rede ou por uma interface de chat baseada em navegador.',
          'O Hailo-10H entrega 40 TOPS de desempenho de inferência INT4 e vem com vários modelos pequenos prontos para uso (aproximadamente 1B-1,5B parâmetros, incluindo variantes de Qwen2 e Llama 3.2) — um caminho notavelmente diferente e mais rápido que a inferência somente por CPU para quem quer um dispositivo de IA de borda de verdade, não um experimento hobby.',
          'Compre essa configuração se você quer aceleração GenAI dedicada e está confortável com uma pilha de software ainda em amadurecimento — a Raspberry Pi lançou o AI HAT+ 2 em janeiro de 2026, e a versão de pacote documentada pode ficar atrás do próprio ritmo de lançamentos da Hailo.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: 'Verificar preço atual',
            label: 'Confira o preço do Raspberry Pi AI HAT+ 2',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 vs Pi 5 + AI HAT+ 2 vs um PC com GPU',
        content: [
          '<strong>Adicionar o AI HAT+ 2 fecha parte da distância para uma GPU, mas uma GPU dedicada ou um PC com GPU ainda vence em tamanho de modelo e velocidade bruta.</strong>',
        ],
        columns: ['Configuração', 'Capacidade de IA local', 'Melhor para'],
        rows: [
          { 'Configuração': 'Só o Pi 5', 'Capacidade de IA local': 'Modelos 1B-3B, só CPU', 'Melhor para': 'Experimento mais barato, aprendizado' },
          { 'Configuração': 'Pi 5 + AI HAT+ 2', 'Capacidade de IA local': 'NPU dedicada, modelos GenAI 1B-1,5B', 'Melhor para': 'Dispositivo de IA de borda de verdade, foco em GenAI' },
          { 'Configuração': 'PC com GPU / mini PC', 'Capacidade de IA local': 'Modelos 7B+, muito mais rápido', 'Melhor para': 'Uso diário sério de LLM local' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: 'Resfriamento para Inferência Sustentada',
        content: [
          'Inferência sustentada e pesada de CPU ou NPU deixa o dispositivo mais quente que o uso casual — o cooler ativo oficial da Raspberry Pi (um dissipador de encaixe com ventoinha controlada por temperatura) é uma adição barata e bem documentada se você planeja rodar inferência por períodos prolongados em vez de testes breves.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: 'Verificar preço atual',
            label: 'Confira o preço do cooler ativo do Raspberry Pi 5',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: 'Armazenamento NVMe para um Servidor Sempre Ligado',
        content: [
          'Se o Pi virar um servidor de IA local sempre ligado, o armazenamento NVMe via o Raspberry Pi M.2 HAT+ oficial (que usa a interface PCIe do Pi 5) é mais confiável sob carga sustentada de leitura/escrita do que um cartão microSD — vale a pena adicionar assim que você passar da fase de testes casuais.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: 'Verificar preço atual',
            label: 'Confira o preço do Raspberry Pi M.2 HAT+',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: 'O Que Você Pode Realmente Construir?',
        content: [
          'Uma configuração de LLM local no Pi 5 serve para experimentos de assistente doméstico privado, integrações de automação residencial (veja nosso guia para <a href="/pt/power-local-llm/build-local-voice-assistant-2026">construir um assistente de voz local</a> para expectativas realistas de latência em hardware classe Pi), classificação simples de documentos e serviços offline sempre ligados que não precisam de respostas rápidas.',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: 'Conclusão',
        content: [
          '<strong>Mais barato: um Pi 5 8GB puro para modelos de 1B-3B e experimentação.</strong> Melhor configuração de IA baseada em Pi: Pi 5 + o AI HAT+ 2 oficial para aceleração dedicada Hailo-10H. Melhor desempenho geral: um PC com GPU ou um <a href="/pt/local-llms/best-mini-pcs-local-llm">mini PC feito para LLM local</a> — para modelos de 7B ou mais, nenhuma configuração de Pi chega perto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O Raspberry Pi 5 precisa de resfriamento ativo para inferência de LLM?',
            a: 'Sim, para cargas sustentadas. Inferência sustentada e pesada de CPU ou NPU deixa o Pi 5 mais quente que o uso casual, e o cooler ativo oficial é uma adição barata e que vale a pena para sessões de inferência mais longas.',
          },
          {
            q: 'O Raspberry Pi AI HAT+ 2 realmente suporta LLMs?',
            a: 'Sim — confirmado pela própria documentação da Raspberry Pi. A NPU Hailo-10H do AI HAT+ 2 roda um conjunto documentado de modelos pequenos (aproximadamente 1B-1,5B parâmetros) através de um pacote Hailo GenAI Model Zoo e um servidor Hailo Ollama, acessível via chamadas de API ou uma interface de chat baseada em navegador.',
          },
          {
            q: 'O Ollama é a melhor forma de rodar um LLM em um Raspberry Pi 5?',
            a: 'O Ollama é a opção mais simples para inferência somente por CPU no Pi 5 puro. O llama.cpp dá mais controle manual sobre quantização e flags de build. O AI HAT+ 2 usa seu próprio servidor Hailo Ollama separado, em vez do caminho padrão de CPU do Ollama.',
          },
          {
            q: 'Um Raspberry Pi 5 é bom para rodar um assistente de voz com LLM local?',
            a: 'Apenas com um modelo muito pequeno e expectativas realistas de latência — veja nosso guia para <a href="/pt/power-local-llm/build-local-voice-assistant-2026">construir um assistente de voz local</a>, que aborda o Pi 5 somente com CPU como um dos vários níveis de hardware ao lado de opções mais rápidas de mini PC, GPU e Mac.',
          },
          {
            q: 'Qual é a RAM mínima para qualquer LLM local em um Pi 5?',
            a: 'A configuração de 8GB é o mínimo prático para uma experiência confortável. A configuração de 4GB tecnicamente consegue carregar um modelo de 1B, mas deixa muito pouco espaço para qualquer outra coisa rodando no dispositivo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Silicio de IA de Borda para LLMs Locais 2026](/pt/edge-ai/edge-ai-hardware-for-local-llms) -- O que realmente cabe em um produto de serie: orcamento de potencia, projeto termico, joules por token.',
          '[Melhor LLM Local para 6 GB de VRAM](/pt/prompt-bites/best-local-llm-6gb-vram) — uma alternativa de GPU de baixo orçamento genuinamente prática',
          '[Quanta RAM um Modelo de 7B Precisa?](/pt/prompt-bites/how-much-ram-for-7b-model) — por que 7B está fora de alcance para a CPU de um Pi 5',
          '[Melhor Mini PC para um Servidor Ollama Sempre Ligado](/pt/prompt-bites/best-mini-pc-for-ollama-server-always-on) — uma alternativa mais prática sempre ligada',
          '[Construir um Assistente de Voz Local](/pt/power-local-llm/build-local-voice-assistant-2026) — latência realista entre os níveis de hardware Pi, mini PC e GPU',
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-zh.webp',
    title: 'Raspberry Pi 5 能运行本地 LLM 吗？',
    seoTitle: 'Raspberry Pi 5 本地 LLM：Ollama + AI HAT+ 2（2026）',
    metaDescription: '可以——Raspberry Pi 5 通过 Ollama 在 CPU 上运行 1B-3B 模型。加装 Raspberry Pi AI HAT+ 2（Hailo-10H NPU）可为更大模型提供真正的 GenAI 加速。',
    publishDate: '2026-07-14',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 1.7B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB', 'Raspberry Pi AI HAT+ 2', 'Hailo-10H'],
    educationalLevel: 'Intermediate',
    audience: '考虑将 Raspberry Pi 5 用于本地 LLM 项目的爱好者',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>可以——Raspberry Pi 5 今天就能运行本地 LLM，Ollama 是最简单的方式：8GB 主板仅靠 CPU 就能运行 Llama 3.2 1B、Llama 3.2 3B 或 Qwen3 1.7B 等模型。</strong>若需要真正的 GenAI 加速和更大的模型，可加装官方 Raspberry Pi AI HAT+ 2——其 Hailo-10H NPU 专为设备端 LLM 推理打造，并自带 Hailo Ollama 服务器。',
    toc: [
      { label: '快速答案', anchor: '#quick-answer' },
      { label: '经济型方案：仅 Pi 5', anchor: '#best-pick' },
      { label: '更优选择：Pi 5 + AI HAT+ 2', anchor: '#ai-hat' },
      { label: 'Pi 5 对比 Pi 5+AI HAT+2 对比 GPU PC', anchor: '#comparison' },
      { label: '持续推理的散热方案', anchor: '#cooling' },
      { label: '常开服务器的 NVMe 存储', anchor: '#storage' },
      { label: '实际能构建什么？', anchor: '#what-can-build' },
      { label: '结论', anchor: '#bottom-line' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: 'Raspberry Pi 5 能运行本地 LLM 吗？',
        answer: '可以。Pi 5（8GB）仅靠 CPU 通过 Ollama 或 llama.cpp 运行 1B-3B 模型——这大致是实用上限。加装官方 Raspberry Pi AI HAT+ 2（Hailo-10H NPU）可获得专用 GenAI 加速、自带的 Hailo Ollama 服务器,以及运行更大模型的余量。',
        bullets: [
          '最佳经济型方案：Pi 5 8GB + 主动散热——尝试极小模型的最便宜方式。',
          '最佳 AI 方案：Pi 5 + Raspberry Pi AI HAT+ 2——为 GenAI 工作负载打造的专用 Hailo-10H NPU。',
          '仅用 Pi 5 时的模型范围：Q4 下约 1B-3B 参数——不要期待桌面级 GPU 的速度。',
          '最佳用途：私人常开助手、家庭自动化或离线实验——而非快速的日常聊天机器人。',
        ],
        updatedDate: '2026-08',
      },
    },
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
        productName: 'Raspberry Pi 5（8GB）',
        productCategory: 'sbc',
        priceRange: '查看当前价格',
        label: '查看 Raspberry Pi 5 8GB 价格',
      },
      {
        url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
        productName: 'Raspberry Pi AI HAT+ 2',
        productCategory: 'accessory',
        priceRange: '查看当前价格',
        label: '查看 Raspberry Pi AI HAT+ 2 价格',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '可以——8GB 版 Raspberry Pi 5 仅靠 CPU 通过 Ollama 或 llama.cpp 运行 1B-3B 模型',
          '官方 Raspberry Pi AI HAT+ 2 加入了专为设备端 GenAI 打造的 Hailo-10H NPU，并自带 Hailo Ollama 服务器',
          '请购买 8GB 配置——4GB 版本为模型加操作系统留出的余量太少',
          '对于任何持续的推理工作负载，而不仅是简短测试，主动散热都值得添加',
          '最佳用途：私人常开助手、家庭自动化或离线实验——而非快速的日常聊天机器人',
          '对于认真的 7B 及以上本地 LLM 使用，GPU PC 或迷你 PC 会胜过任何 Pi 5 配置',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Raspberry Pi 5 通过 CPU 上的 Ollama 运行 1B-3B 参数范围的本地 LLM，官方 Raspberry Pi AI HAT+ 2 为 GenAI 工作负载加入了专用的 Hailo-10H NPU 加速。',
          },
          {
            type: 'plain-terms',
            text: '简单来说：裸机 Pi 5 可以缓慢地运行微小的 AI 模型；加装 AI HAT+ 2 扩展板后,它拥有了一颗真正的 AI 芯片,能更快地运行模型并妥善处理 GenAI。',
          },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '经济型方案：仅使用 Raspberry Pi 5',
        content: [
          '<strong>裸机 Raspberry Pi 5（8GB）可通过 Ollama 或 llama.cpp 运行 Q4 量化的 1B-3B 参数模型——如 Llama 3.2 1B、Llama 3.2 3B 或 Qwen3 1.7B。</strong>一切都在四核 CPU 上运行：Pi 5 集成的 VideoCore GPU 并非实用的 llama.cpp 加速器，因此裸机主板上没有明显的 GPU 加速效果。',
          '社区基准测试显示，小型 Q4 模型在 Pi 5 CPU 上的速度约为每秒 4-9 个 token，具体取决于模型和运行环境——明显慢于桌面 GPU 推理，但对短查询和随意实验来说可用。',
          '最适合：简单查询的离线助手、Home Assistant 实验、自动化脚本，以及学习本地推理的工作原理。请购买 8GB 配置——4GB 版本为模型加 Raspberry Pi OS 留出的余量太少。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5（8GB）',
            productCategory: 'sbc',
            priceRange: '查看当前价格',
            label: '查看 Raspberry Pi 5 8GB 价格',
          },
        ],
      },
      aiHat: {
        id: 'ai-hat',
        title: '更优选择：Pi 5 + Raspberry Pi AI HAT+ 2',
        content: [
          '<strong>官方 Raspberry Pi AI HAT+ 2 通过加入 Hailo-10H NPU 和 8GB 专用内存,将 Pi 5 变成了一套专门打造的边缘 AI 系统。</strong>Raspberry Pi 官方文档确认了通过 Hailo GenAI Model Zoo 提供的 GenAI/LLM 支持，其中包括可通过网络或基于浏览器的聊天界面查询的 Hailo Ollama 服务器。',
          'Hailo-10H 提供 40 TOPS 的 INT4 推理性能，并附带多个开箱即用的小型模型（约 1B-1.5B 参数，包括 Qwen2 和 Llama 3.2 的多个版本）——对于想要真正边缘 AI 设备而非业余实验的人来说，这是一条明显不同且更快的路径,而非仅靠 CPU 推理。',
          '如果你想要专用的 GenAI 加速，并能接受一个仍在成熟中的软件栈，可以购买这套方案——Raspberry Pi 于 2026 年 1 月发布了 AI HAT+ 2，其文档中的软件包版本可能落后于 Hailo 自身的发布节奏。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20AI%20HAT%2B%202',
            productName: 'Raspberry Pi AI HAT+ 2',
            productCategory: 'accessory',
            priceRange: '查看当前价格',
            label: '查看 Raspberry Pi AI HAT+ 2 价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pi 5 对比 Pi 5 + AI HAT+ 2 对比 GPU PC',
        content: [
          '<strong>加装 AI HAT+ 2 缩小了与 GPU 的部分差距，但独立 GPU 或 GPU PC 在原始模型大小和速度上仍然胜出。</strong>',
        ],
        columns: ['方案', '本地 AI 能力', '最适合'],
        rows: [
          { '方案': '仅 Pi 5', '本地 AI 能力': '1B-3B 模型，仅 CPU', '最适合': '最便宜的实验、学习' },
          { '方案': 'Pi 5 + AI HAT+ 2', '本地 AI 能力': '专用 NPU，1B-1.5B GenAI 模型', '最适合': '真正的边缘 AI 设备，专注 GenAI' },
          { '方案': 'GPU PC / 迷你 PC', '本地 AI 能力': '7B 及以上模型，速度快得多', '最适合': '认真的日常本地 LLM 使用' },
        ],
      },
      cooling: {
        id: 'cooling',
        title: '持续推理的散热方案',
        content: [
          '持续的 CPU 或 NPU 密集型推理会让设备比日常使用时更热——如果你计划长时间运行推理而不只是简单测试，官方 Raspberry Pi 主动散热器（一款带温控风扇的卡扣式散热片）是一项便宜且有良好文档支持的补充配件。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20Active%20Cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'cooling',
            priceRange: '查看当前价格',
            label: '查看 Raspberry Pi 5 主动散热器价格',
          },
        ],
      },
      storage: {
        id: 'storage',
        title: '常开服务器的 NVMe 存储',
        content: [
          '如果 Pi 成为一台常开的本地 AI 服务器，通过使用 Pi 5 PCIe 接口的官方 Raspberry Pi M.2 HAT+ 实现 NVMe 存储，在持续读写负载下比 microSD 卡更可靠——一旦你超越随意测试阶段，这项投入就值得。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%20M.2%20HAT%2B',
            productName: 'Raspberry Pi M.2 HAT+',
            productCategory: 'storage',
            priceRange: '查看当前价格',
            label: '查看 Raspberry Pi M.2 HAT+ 价格',
          },
        ],
      },
      whatCanBuild: {
        id: 'what-can-build',
        title: '实际能构建什么？',
        content: [
          'Pi 5 本地 LLM 方案适合私人家庭助手实验、家庭自动化集成（关于 Pi 级硬件上现实的延迟预期，参见我们的<a href="/zh/power-local-llm/build-local-voice-assistant-2026">本地语音助手搭建指南</a>）、简单的文档分类，以及不需要快速响应的常开离线服务。',
        ],
      },
      bottomLine: {
        id: 'bottom-line',
        title: '结论',
        content: [
          '<strong>最便宜：裸机 Pi 5 8GB，用于 1B-3B 模型和实验。</strong>最佳 Pi 基础 AI 方案：Pi 5 + 官方 AI HAT+ 2，获得专用 Hailo-10H 加速。整体最佳性能：GPU PC 或<a href="/zh/local-llms/best-mini-pcs-local-llm">专为本地 LLM 打造的迷你 PC</a>——对于 7B 及以上模型，任何 Pi 配置都望尘莫及。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Raspberry Pi 5 做 LLM 推理需要主动散热吗？',
            a: '持续负载下需要。持续的 CPU 或 NPU 密集型推理会让 Pi 5 比日常使用时更热，官方主动散热器对于较长的推理会话来说是一项便宜且值得的补充配件。',
          },
          {
            q: 'Raspberry Pi AI HAT+ 2 真的支持 LLM 吗？',
            a: '是的——经 Raspberry Pi 官方文档确认。AI HAT+ 2 的 Hailo-10H NPU 通过 Hailo GenAI Model Zoo 软件包和 Hailo Ollama 服务器运行一组有文档记录的小型模型（约 1B-1.5B 参数），可通过 API 调用或基于浏览器的聊天界面访问。',
          },
          {
            q: 'Ollama 是在 Raspberry Pi 5 上运行 LLM 的最佳方式吗？',
            a: '对于裸机 Pi 5 上仅使用 CPU 的推理，Ollama 是最简单的选择。llama.cpp 在量化和编译选项上提供更多手动控制。AI HAT+ 2 使用自己独立的 Hailo Ollama 服务器，而非标准的 Ollama CPU 路径。',
          },
          {
            q: 'Raspberry Pi 5 适合搭配本地 LLM 运行语音助手吗？',
            a: '只有在使用非常小的模型和现实的延迟预期下才可行——参见我们的<a href="/zh/power-local-llm/build-local-voice-assistant-2026">本地语音助手搭建指南</a>，其中将仅用 CPU 的 Pi 5 列为多个硬件等级之一，与更快的迷你 PC、GPU 和 Mac 选项并列。',
          },
          {
            q: 'Pi 5 上运行任何本地 LLM 的最低内存要求是多少？',
            a: '8GB 配置是获得舒适体验的实际最低要求。4GB 配置技术上可以加载一个 1B 模型，但为设备上运行的其他任何东西留出的余量非常少。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[面向本地 LLM 的边缘 AI 芯片 2026](/zh/edge-ai/edge-ai-hardware-for-local-llms) -- 真正适合量产产品的方案：功耗预算、热设计、每 token 焦耳数，而非桌面级 tokens/秒。',
          '[6 GB 显存的最佳本地 LLM](/zh/prompt-bites/best-local-llm-6gb-vram) — 真正实用的低预算 GPU 替代方案',
          '[7B 模型需要多少内存？](/zh/prompt-bites/how-much-ram-for-7b-model) — 为什么 7B 对 Pi 5 的 CPU 来说遥不可及',
          '[常开 Ollama 服务器的最佳迷你 PC](/zh/prompt-bites/best-mini-pc-for-ollama-server-always-on) — 更实用的常开替代方案',
          '[搭建本地语音助手](/zh/power-local-llm/build-local-voice-assistant-2026) — Pi、迷你 PC 和 GPU 各硬件等级的真实延迟表现',
        ],
      },
    },
  },
}
