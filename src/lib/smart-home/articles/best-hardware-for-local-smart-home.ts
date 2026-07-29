import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-en.png',
    affiliateDisclosure: true,
    title: 'Best Hardware for a Local Smart Home + Local AI (2026)',
    seoTitle: 'Best Local Smart Home + AI Hardware (2026)',
    intro:
      'The best hardware for a local smart home follows one decision: an Intel N100/N150 mini PC or a Raspberry Pi 5 runs the Home Assistant hub, an Intel iGPU (OpenVINO) or a Hailo-8L M.2 module accelerates Frigate camera detection, an SSD or NAS stores recordings, and a used RTX 3090 box is the step-up for running a local LLM. This guide picks each layer and helps you choose for HA-only versus HA-plus-AI, linking out for VRAM depth.',
    metaDescription:
      'Best local smart home + AI hardware in 2026: Intel N100 mini PC or Raspberry Pi 5 hub, Frigate accelerator (Intel iGPU/Hailo), SSD storage, and an LLM step-up.',
    twitterDescription:
      'Local smart home hardware in 2026: Intel N100 mini PC or Pi 5 hub, Frigate accelerator (Intel iGPU/Hailo-8L), SSD storage, used RTX 3090 for a local LLM.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing hardware to run Home Assistant and local AI',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'best hardware home assistant local ai',
      'home assistant hardware',
      'mini pc home assistant local llm',
      'raspberry pi vs mini pc home assistant',
      'local smart home server',
    ],
    leadAnswerBlock:
      '**Build a local smart home in four layers: the hub (Intel N100/N150 mini PC or Raspberry Pi 5), a Frigate accelerator (Intel iGPU via OpenVINO or a Hailo-8L M.2 module), storage (an SSD, or a NAS for many cameras), and — if you want a local LLM — a step-up box such as a used RTX 3090.** For Home Assistant alone a Raspberry Pi is enough; the deciding factor is whether you add camera detection and local AI.',
    quickAnswerTop: {
      en: {
        question: 'What hardware do I need for a local smart home with AI?',
        answer:
          'Start with the hub: an Intel N100/N150 mini PC or a Raspberry Pi 5 runs Home Assistant. Add a Frigate accelerator for cameras — an Intel iGPU via OpenVINO covers most setups, and a Hailo-8L or Hailo-8 M.2 module adds detection capacity (the Google Coral is now legacy). Store recordings on an SSD, or a NAS for many cameras. For a local LLM, step up to a mini PC with a capable iGPU/NPU or a used RTX 3090 box.',
        bullets: [
          'Hub: Intel N100/N150 mini PC or Raspberry Pi 5',
          'Frigate: Intel iGPU (OpenVINO) or Hailo-8L M.2 — Coral is legacy',
          'Storage: SSD, or a NAS for many cameras',
          'Local LLM step-up: mini PC iGPU/NPU or used RTX 3090',
          'Decide first: HA-only or HA + cameras + local AI',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What the Hub Needs', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedicated Server', anchor: 'server' },
      { label: 'HA-only vs HA + AI', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'An Intel N100/N150 mini PC or a Raspberry Pi 5 runs the hub; add an Intel iGPU or Hailo-8L for Frigate, an SSD or NAS for storage, and a used RTX 3090 box if you want a local LLM.' },
      { type: 'plain-terms', content: 'The hub software (Home Assistant) is light and runs on a small computer like a Raspberry Pi. Camera detection (Frigate) needs an accelerator — an Intel graphics chip via OpenVINO, or a Hailo M.2 module. Adding a local language model needs more power still, which is where a mini PC with a capable graphics chip, or a used graphics card such as an RTX 3090, comes in.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Hub: an Intel N100/N150 mini PC or a Raspberry Pi 5 runs Home Assistant',
          'Frigate: an Intel iGPU (OpenVINO) or a Hailo-8L M.2 module accelerates camera detection — the Google Coral is now legacy',
          'Storage: an SSD for recordings, or a NAS once you run several cameras',
          'Local LLM step-up: a Ryzen mini PC (32GB RAM) or a used RTX 3090 box',
          'A used RTX 3090 (24GB, ~$600–800) is the best value for models up to ~70B',
          'Decide HA-only vs HA + cameras + local AI before buying — it changes the right box',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'What the Hub Needs',
        content:
          '**Home Assistant itself is lightweight and runs on modest hardware; the heavy demands come from Frigate camera detection and a local LLM.** Size the box for what you will add, not just the hub.',
        items: [
          'The hub needs little compute for device control and automations.',
          'Frigate object detection needs an accelerator: an Intel iGPU via OpenVINO handles most setups, and a Hailo-8L or Hailo-8 M.2 module adds capacity. The Google Coral USB/M.2 TPU still works but is now legacy — Frigate no longer recommends it for new builds.',
          'Larger Whisper models and local LLM inference are the most demanding workloads — plan RAM and a GPU/NPU around those.',
          'Store camera recordings on an SSD; move to a NAS once you run several cameras continuously.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**A Raspberry Pi 5 is the lowest-power way to run Home Assistant for typical smart home use.** It struggles with LLM inference and large Whisper models, and a 2026 DRAM shortage has pushed board prices up sharply.',
        items: [
          'Great for device control, automations, and a small local voice setup.',
          'LLM inference on a Pi is limited to very small, slow models — pair it with a Hailo-8L M.2 HAT if you want Frigate detection.',
          'Choose a Pi 5 if you want basics at low power. The 8GB and 16GB SKUs are the useful ones, though 2026 memory pricing means the 16GB board now costs far more than its ~$120 launch price.',
          'For a plug-and-play appliance, the Home Assistant Green ships ready to run (about $199 in 2026). Home Assistant Yellow was discontinued in early 2026.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (and Room for an LLM)',
        content:
          '**A mini PC is the best single-box choice for Home Assistant plus local AI, with enough RAM and a capable iGPU or NPU to run a small LLM and accelerate Frigate.** It balances power, size, and cost.',
        items: [
          'A low-power Intel N100/N150 mini PC runs Home Assistant and accelerates Frigate via the Intel iGPU (OpenVINO) — the practical default for a hub-plus-cameras box. The Beelink EQ14 (Intel N150) sits around $190–220.',
          'For a local LLM on the same box, step up to a Ryzen mini PC with 32GB RAM: the Beelink SER8 (Ryzen 7 8845HS, ~$649) runs a Qwen3 8B or Llama 3.1 8B model via Ollama at usable speed. Prioritise RAM and a capable integrated GPU or NPU for lower latency.',
          'For specific picks, see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai) and the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**A NAS can host Home Assistant in a container alongside storage and Frigate recordings, if it has enough CPU and RAM.** It is convenient if you already own one.',
        items: [
          'Good for combining storage with home automation services.',
          'Check the NAS has the CPU/RAM headroom for your add-ons.',
          'LLM inference on a NAS depends on its hardware — many lack a capable GPU. Example: Synology DS925+ or DS225+; UGREEN NASync models ship a built-in local LLM option.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Dedicated Server (LLM Step-Up)',
        content:
          '**A dedicated server with a discrete GPU is the step-up for running a larger local LLM alongside many cameras.** It offers the most headroom at higher cost and power.',
        items: [
          'A used RTX 3090 (24GB VRAM, ~$600–800 used in 2026) is the best value box for running models up to ~70B at Q4; an RTX 3060 (12GB, ~$150–180 used) handles 7B–13B models on a budget.',
          'Best for many cameras, a larger LLM, and multiple users. Higher power draw and cost than a mini PC.',
          'Overkill for a basic smart home — reserve for heavy local-AI use, and keep the Home Assistant hub on a separate low-power box for reliability.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'Local LLM capacity by hardware tier: Raspberry Pi 5 runs only tiny models, an Intel N100/N150 Mini PC handles small models, a Ryzen Mini PC (32GB RAM) runs 7B–8B models, and a used RTX 3090 (24GB VRAM) scales to about 70B at Q4 quantization.',
      },
      picking: {
        id: 'picking',
        title: 'Picking for HA-only vs HA + AI',
        content:
          '**Choose a Pi for HA-only, and a mini PC for HA plus local AI — that single decision drives the right hardware.** Match the box to the workload.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'Decision tree for smart home hardware: adding Frigate cameras and a local LLM lead to four builds — Raspberry Pi 5, Intel N100/N150 Mini PC, Ryzen Mini PC (32GB RAM), or an RTX 3090 server (24GB VRAM).',
        columns: ['Hardware', 'Relative price', 'HA-only', 'Can run a local LLM', 'Frigate acceleration'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Relative price': 'Low', 'HA-only': 'Yes', 'Can run a local LLM': 'Very small only, slow', 'Frigate acceleration': 'Hailo-8L M.2 HAT' },
          { 'Hardware': 'Intel N100/N150 mini PC', 'Relative price': 'Medium', 'HA-only': 'Yes', 'Can run a local LLM': 'Small models', 'Frigate acceleration': 'Intel iGPU (OpenVINO)' },
          { 'Hardware': 'Ryzen mini PC', 'Relative price': 'Medium', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (7B–8B)', 'Frigate acceleration': 'iGPU or Hailo M.2' },
          { 'Hardware': 'NAS', 'Relative price': 'Medium–High', 'HA-only': 'Yes (container)', 'Can run a local LLM': 'Depends on hardware', 'Frigate acceleration': 'Depends on model' },
          { 'Hardware': 'Server + used RTX 3090', 'Relative price': 'High', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (up to ~70B)', 'Frigate acceleration': 'Discrete GPU' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What hardware does Frigate recommend?', a: 'For new builds Frigate recommends an Intel iGPU via OpenVINO, or a Hailo-8L (budget) or Hailo-8 (faster) M.2 module for more detection capacity. The Google Coral USB/M.2 TPU still works but is now legacy — Frigate no longer recommends it for new installations except on very low-power hardware.' },
          { q: 'Can a Raspberry Pi run a local LLM too?', a: 'A Pi can run only very small models, and slowly, so it is not ideal for a responsive local-LLM assistant. It handles Home Assistant and basic voice well, but for local AI a mini PC with a capable iGPU or NPU — or a used RTX 3090 box — is the better choice.' },
          { q: 'How much RAM do I need?', a: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM and other AI services on the same box, more RAM helps; a mini PC with 32GB RAM and a capable iGPU/NPU keeps a Qwen3 8B or Llama 3.1 8B model responsive. Match RAM to the model size you plan to run.' },
          { q: 'What mini PC should I get?', a: 'For HA plus cameras, an Intel N100/N150 mini PC accelerates Frigate via OpenVINO. For HA plus a local LLM, step up to a Ryzen mini PC with 32GB RAM. See the best mini PCs for Home Assistant + local AI guide for picks.' },
          { q: 'One box or two?', a: 'One box (a mini PC) is simplest and runs Home Assistant plus a small local LLM together. Split into two if you want to keep the hub ultra-reliable on a low-power box and offload heavy AI to a separate machine such as a used RTX 3090 server.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — specific picks',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full stack',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the AI box runs',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
          '[Best Balcony Solar Batteries 2026](/balcony-solar/best-balcony-solar-batteries-2026) — battery storage for your local home energy setup',
          '[Best Smart Home Hubs for Local Control (2027)](/smart-home/best-smart-home-hubs-2027) — dedicated hub picks',
          '[NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)](/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU-class local AI hardware',
          '[Best Zigbee and Thread USB Dongles (2027)](/smart-home/best-zigbee-thread-dongles-2027) — radio hardware for Zigbee and Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Hardware for a Local Smart Home + Local AI (2026)',
      description: 'Best local smart home + AI hardware in 2026: Intel N100 mini PC or Raspberry Pi 5 hub, Frigate accelerator (Intel iGPU/Hailo), SSD storage, and an LLM step-up.',
      url: 'https://www.promptquorum.com/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Home Assistant hardware' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Local LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What hardware does Frigate recommend?', acceptedAnswer: { '@type': 'Answer', text: 'For new builds Frigate recommends an Intel iGPU via OpenVINO, or a Hailo-8L or Hailo-8 M.2 module for more detection capacity. The Google Coral TPU still works but is now legacy and no longer recommended for new installations.' } },
        { '@type': 'Question', name: 'Can a Raspberry Pi run a local LLM too?', acceptedAnswer: { '@type': 'Answer', text: 'A Pi can run only very small models, and slowly. It handles Home Assistant and basic voice well, but for a responsive local-LLM assistant a mini PC with a capable iGPU or NPU, or a used RTX 3090 box, is better.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM on the same box, more RAM helps; a mini PC with 32GB RAM keeps a Qwen3 8B or Llama 3.1 8B model responsive. Match RAM to the model size you plan to run.' } },
        { '@type': 'Question', name: 'What mini PC should I get?', acceptedAnswer: { '@type': 'Answer', text: 'For HA plus cameras, an Intel N100/N150 mini PC accelerates Frigate via OpenVINO. For HA plus a local LLM, step up to a Ryzen mini PC with 32GB RAM. See the best mini PCs for Home Assistant + local AI guide.' } },
        { '@type': 'Question', name: 'One box or two?', acceptedAnswer: { '@type': 'Answer', text: 'One mini PC runs Home Assistant plus a small local LLM together. Split into two if you want the hub ultra-reliable on a low-power box and heavy AI offloaded to a separate machine such as a used RTX 3090 server.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-ar.png',
    affiliateDisclosure: true,
    title: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي المحلي (⁨2026⁩)',
    seoTitle: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي (⁨2026⁩)',
    intro:
      'تتبع أفضل أجهزة المنزل الذكي المحلي قرارًا واحدًا: يشغّل mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 مركز Home Assistant، ويسرّع iGPU من Intel (عبر OpenVINO) أو وحدة Hailo-8L بصيغة M.2 كشف كاميرات Frigate، ويخزّن SSD أو NAS التسجيلات، ويكون صندوق RTX 3090 مستعمل هو الترقية لتشغيل نموذج LLM محلي. يختار هذا الدليل كل طبقة ويساعدك على الاختيار بين HA فقط أو HA مع الذكاء الاصطناعي — مع إحالات خارجية لتفاصيل VRAM.',
    metaDescription:
      'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي 2026: مركز mini PC بمعالج Intel N100 أو Raspberry Pi 5، مسرّع Frigate (Intel iGPU/Hailo)، تخزين SSD، وترقية LLM.',
    twitterDescription:
      'أجهزة المنزل الذكي المحلي 2026: مركز mini PC بمعالج Intel N100 أو Pi 5، مسرّع Frigate (Intel iGPU/Hailo-8L)، تخزين SSD، وRTX 3090 مستعمل لنموذج LLM محلي.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يختارون أجهزة لتشغيل Home Assistant والذكاء الاصطناعي المحلي',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'أفضل أجهزة home assistant ذكاء اصطناعي محلي',
      'أجهزة home assistant',
      'mini pc home assistant نموذج llm محلي',
      'raspberry pi مقابل mini pc home assistant',
      'خادم المنزل الذكي المحلي',
    ],
    leadAnswerBlock:
      '**ابنِ المنزل الذكي المحلي في أربع طبقات: المركز (mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5)، ومسرّع Frigate (Intel iGPU عبر OpenVINO أو وحدة Hailo-8L بصيغة M.2)، والتخزين (SSD، أو NAS لعدة كاميرات)، وإذا أردت نموذج LLM محلي — صندوق ترقية مثل RTX 3090 مستعمل.** لـ Home Assistant وحده يكفي Raspberry Pi؛ العامل الحاسم هو ما إذا كنت ستضيف كشف الكاميرا والذكاء الاصطناعي المحلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما الأجهزة التي أحتاجها للمنزل الذكي المحلي مع الذكاء الاصطناعي؟',
        answer:
          'ابدأ بالمركز: يشغّل mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 نظام Home Assistant. أضف مسرّع Frigate للكاميرات — يغطي iGPU من Intel عبر OpenVINO معظم الإعدادات، وتضيف وحدة Hailo-8L أو Hailo-8 بصيغة M.2 سعة كشف أكبر (أصبح Google Coral إرثًا قديمًا). خزّن التسجيلات على SSD، أو NAS لعدة كاميرات. لنموذج LLM محلي، ارتقِ إلى mini PC مع iGPU/NPU قادرة أو صندوق RTX 3090 مستعمل.',
        bullets: [
          'المركز: mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5',
          'Frigate: Intel iGPU (OpenVINO) أو Hailo-8L بصيغة M.2 — Coral إرث قديم',
          'التخزين: SSD، أو NAS لعدة كاميرات',
          'ترقية LLM محلي: mini PC بـ iGPU/NPU أو RTX 3090 مستعمل',
          'قرر أولًا: HA فقط أم HA + كاميرات + ذكاء اصطناعي محلي',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما يحتاجه المركز', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'خادم مخصص', anchor: 'server' },
      { label: 'HA فقط أم HA + ذكاء اصطناعي', anchor: 'picking' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يشغّل mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 المركز؛ أضف Intel iGPU أو Hailo-8L لـ Frigate، وSSD أو NAS للتخزين، وصندوق RTX 3090 مستعمل إذا أردت نموذج LLM محلي.' },
      { type: 'plain-terms', content: 'برنامج المركز (Home Assistant) خفيف ويعمل على حاسوب صغير مثل Raspberry Pi. يحتاج كشف الكاميرا (Frigate) إلى مسرّع — شريحة رسومات Intel عبر OpenVINO أو وحدة Hailo بصيغة M.2. تتطلب إضافة نموذج لغوي محلي قدرة أكبر، وهنا يأتي دور mini PC بشريحة رسومات قادرة أو بطاقة رسومات مستعملة مثل RTX 3090.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'المركز: mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 يشغّل Home Assistant',
          'Frigate: iGPU من Intel (OpenVINO) أو وحدة Hailo-8L بصيغة M.2 تسرّع كشف الكاميرا — أصبح Google Coral إرثًا قديمًا',
          'التخزين: SSD للتسجيلات، أو NAS عند تشغيل عدة كاميرات',
          'ترقية LLM محلي: mini PC بمعالج Ryzen (32GB RAM) أو صندوق RTX 3090 مستعمل',
          'RTX 3090 مستعمل (24GB، بحدود ‎$600–800‎) هو الأفضل قيمةً للنماذج حتى نحو 70B',
          'قرر HA فقط أم HA + كاميرات + ذكاء اصطناعي محلي قبل الشراء — يغيّر ذلك الجهاز المناسب',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'ما يحتاجه المركز',
        content:
          '**Home Assistant خفيف بحد ذاته ويعمل على أجهزة متواضعة؛ الطلبات الثقيلة تأتي من كشف كاميرات Frigate ونموذج LLM محلي.** حجّم الصندوق لما ستضيفه، ليس فقط للمركز.',
        items: [
          'يحتاج المركز حسابًا ضئيلًا للتحكم في الأجهزة والأتمتة.',
          'يحتاج كشف الأجسام في Frigate إلى مسرّع: يتعامل iGPU من Intel عبر OpenVINO مع معظم الإعدادات، وتضيف وحدة Hailo-8L أو Hailo-8 بصيغة M.2 سعة أكبر. لا يزال Google Coral (USB/M.2 TPU) يعمل لكنه أصبح إرثًا قديمًا — لم يعد Frigate يوصي به للأنظمة الجديدة.',
          'نماذج Whisper الأكبر واستنتاج نموذج LLM المحلي هي أثقل أحمال العمل — خطط لـ RAM وGPU/NPU حولها.',
          'خزّن تسجيلات الكاميرا على SSD؛ انتقل إلى NAS عند تشغيل عدة كاميرات باستمرار.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 5 هو أقل استهلاكًا للطاقة طريقةً لتشغيل Home Assistant للاستخدام المنزلي الذكي الاعتيادي.** يجد صعوبة مع استنتاج النموذج اللغوي ونماذج Whisper الكبيرة، وقد رفع نقص ذاكرة DRAM في 2026 أسعار اللوحات بشكل حاد.',
        items: [
          'ممتاز للتحكم في الأجهزة والأتمتة وإعداد صوتي محلي صغير.',
          'استنتاج النموذج اللغوي على Pi محدود بنماذج صغيرة جدًا وبطيئة — أضف وحدة Hailo-8L بصيغة M.2 HAT إذا أردت كشف Frigate.',
          'اختر Pi 5 إذا أردت الأساسيات باستهلاك طاقة منخفض. النسختان المفيدتان هما 8GB و16GB، رغم أن تسعير الذاكرة في 2026 جعل لوحة 16GB أغلى بكثير من سعر إطلاقها البالغ نحو ‎$120‎.',
          'للحصول على جهاز جاهز، يُشحن Home Assistant Green مهيَّأً للتشغيل (نحو ‎$199‎ في 2026). أُوقف Home Assistant Yellow في أوائل 2026.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (ومساحة لنموذج LLM)',
        content:
          '**mini PC هو أفضل خيار بصندوق واحد لـ Home Assistant مع الذكاء الاصطناعي المحلي، بما يكفي من RAM وiGPU أو NPU قادرة لتشغيل نموذج LLM صغير وتسريع Frigate.** يوازن القدرة والحجم والتكلفة.',
        items: [
          'يشغّل mini PC بمعالج Intel N100/N150 منخفض الطاقة نظام Home Assistant ويسرّع Frigate عبر iGPU من Intel (OpenVINO) — الخيار العملي الافتراضي لصندوق مركز مع كاميرات. يبلغ سعر Beelink EQ14 (Intel N150) نحو ‎$190–220‎.',
          'لنموذج LLM محلي على نفس الصندوق، ارتقِ إلى mini PC بمعالج Ryzen مع 32GB RAM: يشغّل Beelink SER8 (Ryzen 7 8845HS، بحدود ‎$649‎) نموذج Qwen3 8B أو Llama 3.1 8B عبر Ollama بسرعة قابلة للاستخدام. أعطِ الأولوية لـ RAM وGPU متكاملة أو NPU قادرة لزمن استجابة أقل.',
          'للاختيارات المحددة، راجع [أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) ومتعدد العناقيد [أفضل mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**يمكن لـ NAS استضافة Home Assistant في حاوية إلى جانب التخزين وتسجيلات Frigate، إذا كان يمتلك CPU وRAM كافيين.** مريح إذا كنت تمتلك واحدًا بالفعل.',
        items: [
          'مناسب لدمج التخزين مع خدمات أتمتة المنزل.',
          'تحقق من أن NAS لديه حيّز CPU/RAM لإضافاتك.',
          'يعتمد استنتاج النموذج اللغوي على NAS على أجهزته — كثير منها يفتقر إلى GPU قادرة. مثال: Synology DS925+ أو DS225+؛ طرازات UGREEN NASync تشحن مع خيار نموذج LLM محلي مدمج.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'خادم مخصص (ترقية LLM)',
        content:
          '**الخادم المخصص مع GPU منفصلة هو الترقية لتشغيل نموذج LLM محلي أكبر إلى جانب كاميرات كثيرة.** يوفر أكبر حيّز بتكلفة واستهلاك طاقة أعلى.',
        items: [
          'RTX 3090 مستعمل (24GB VRAM، بحدود ‎$600–800‎ مستعمل في 2026) هو الأفضل قيمةً لتشغيل نماذج حتى نحو 70B بترميز Q4؛ ويتعامل RTX 3060 (12GB، بحدود ‎$150–180‎ مستعمل) مع نماذج 7B–13B باقتصاد.',
          'الأفضل لكاميرات كثيرة ونموذج LLM أكبر ومستخدمين متعددين. استهلاك طاقة وتكلفة أعلى من mini PC.',
          'مبالغة لمنزل ذكي أساسي — احتفظ به للاستخدام الكثيف للذكاء الاصطناعي المحلي، وأبقِ مركز Home Assistant على صندوق منفصل منخفض الطاقة للموثوقية.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'سعة نموذج LLM محلي حسب فئة الأجهزة: يشغّل Raspberry Pi 5 نماذج صغيرة جدًا فقط، ويتعامل mini PC بمعالج Intel N100/N150 مع نماذج صغيرة، ويشغّل mini PC بمعالج Ryzen (32GB RAM) نماذج 7B–8B، ويصل RTX 3090 مستعمل (24GB VRAM) إلى نحو 70B بترميز Q4.',
      },
      picking: {
        id: 'picking',
        title: 'الاختيار بين HA فقط أم HA + ذكاء اصطناعي',
        content:
          '**اختر Pi لـ HA فقط، وmini PC لـ HA مع الذكاء الاصطناعي المحلي — هذا القرار الواحد يحدد الأجهزة المناسبة.** طابق الصندوق مع حمل العمل.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'شجرة قرار لأجهزة المنزل الذكي: تؤدي إضافة كاميرات Frigate ونموذج LLM محلي إلى أربعة تجميعات — Raspberry Pi 5، أو mini PC بمعالج Intel N100/N150، أو mini PC بمعالج Ryzen (32GB RAM)، أو خادم RTX 3090 (24GB VRAM).',
        columns: ['الأجهزة', 'السعر النسبي', 'HA فقط', 'يمكنه تشغيل نموذج LLM محلي', 'تسريع Frigate'],
        rows: [
          { 'الأجهزة': 'Raspberry Pi 5', 'السعر النسبي': 'منخفض', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نماذج صغيرة جدًا فقط، بطيء', 'تسريع Frigate': 'Hailo-8L M.2 HAT' },
          { 'الأجهزة': 'mini PC بمعالج Intel N100/N150', 'السعر النسبي': 'متوسط', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نماذج صغيرة', 'تسريع Frigate': 'Intel iGPU (OpenVINO)' },
          { 'الأجهزة': 'mini PC بمعالج Ryzen', 'السعر النسبي': 'متوسط', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نعم (7B–8B)', 'تسريع Frigate': 'iGPU أو Hailo M.2' },
          { 'الأجهزة': 'NAS', 'السعر النسبي': 'متوسط-مرتفع', 'HA فقط': 'نعم (حاوية)', 'يمكنه تشغيل نموذج LLM محلي': 'يعتمد على الأجهزة', 'تسريع Frigate': 'يعتمد على الطراز' },
          { 'الأجهزة': 'خادم + RTX 3090 مستعمل', 'السعر النسبي': 'مرتفع', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نعم (حتى نحو 70B)', 'تسريع Frigate': 'GPU منفصلة' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'ما الأجهزة التي يوصي بها Frigate؟', a: 'للأنظمة الجديدة يوصي Frigate بـ iGPU من Intel عبر OpenVINO، أو وحدة Hailo-8L (اقتصادية) أو Hailo-8 (أسرع) بصيغة M.2 لسعة كشف أكبر. لا يزال Google Coral (USB/M.2 TPU) يعمل لكنه أصبح إرثًا قديمًا — لم يعد Frigate يوصي به للأنظمة الجديدة إلا على أجهزة منخفضة الطاقة جدًا.' },
          { q: 'هل يستطيع Raspberry Pi تشغيل نموذج LLM محلي أيضًا؟', a: 'يمكن لـ Pi تشغيل نماذج صغيرة جدًا فحسب وببطء، لذا فهو ليس مثاليًا لمساعد LLM محلي سريع الاستجابة. يتعامل بشكل جيد مع Home Assistant والصوت الأساسي، لكن للذكاء الاصطناعي المحلي يُعدّ mini PC مع iGPU أو NPU قادرة — أو صندوق RTX 3090 مستعمل — الخيار الأفضل.' },
          { q: 'كم من RAM أحتاج؟', a: 'Home Assistant وحده يعمل في بضعة غيغابايت. لتشغيل نموذج LLM محلي صغير وخدمات ذكاء اصطناعي أخرى على نفس الصندوق، يساعد المزيد من RAM؛ يُبقي mini PC مع 32GB RAM نموذج Qwen3 8B أو Llama 3.1 8B سريع الاستجابة. طابق RAM مع حجم النموذج الذي تخطط لتشغيله.' },
          { q: 'ما mini PC الذي يجب أن أشتريه؟', a: 'لـ HA مع الكاميرات، يسرّع mini PC بمعالج Intel N100/N150 نظام Frigate عبر OpenVINO. لـ HA مع نموذج LLM محلي، ارتقِ إلى mini PC بمعالج Ryzen مع 32GB RAM. راجع دليل أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي للاختيارات.' },
          { q: 'صندوق واحد أم اثنان؟', a: 'صندوق واحد (mini PC) هو الأبسط ويشغّل Home Assistant مع نموذج LLM محلي صغير معًا. قسّم إلى اثنين إذا أردت إبقاء المركز موثوقًا للغاية على صندوق منخفض الطاقة وتفريغ الذكاء الاصطناعي الثقيل على جهاز منفصل مثل خادم RTX 3090 مستعمل.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل Mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — اختيارات محددة',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — المجموعة الكاملة',
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — ما يشغّله صندوق الذكاء الاصطناعي',
          '[أفضل Mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm) — متعدد العناقيد: VRAM وتفاصيل الأجهزة',
          '[أفضل بطاريات الطاقة الشمسية للشرفة 2026](/ar/balcony-solar/best-balcony-solar-batteries-2026) — تخزين البطاريات للإعداد المنزلي المحلي للطاقة',
          '[أفضل محاور المنزل الذكي للتحكم المحلي (2027)](/ar/smart-home/best-smart-home-hubs-2027) — توصيات محاور مخصصة',
          '[مراجعة NVIDIA Jetson Orin Nano للذكاء الاصطناعي في المنزل الذكي (2027)](/ar/smart-home/nvidia-jetson-orin-nano-smart-home-review) — عتاد ذكاء اصطناعي محلي بمعالج رسومات',
          '[أفضل أجهزة USB Zigbee وThread (2027)](/ar/smart-home/best-zigbee-thread-dongles-2027) — عتاد لاسلكي لـ Zigbee وThread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي المحلي (2026)',
      description: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي 2026: مركز mini PC بمعالج Intel N100 أو Raspberry Pi 5، مسرّع Frigate (Intel iGPU/Hailo)، تخزين SSD، وترقية LLM.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'أجهزة Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'نموذج LLM محلي' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'ما الأجهزة التي يوصي بها Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'للأنظمة الجديدة يوصي Frigate بـ iGPU من Intel عبر OpenVINO، أو وحدة Hailo-8L أو Hailo-8 بصيغة M.2 لسعة كشف أكبر. لا يزال Google Coral TPU يعمل لكنه أصبح إرثًا قديمًا ولم يعد يُوصى به للأنظمة الجديدة.' } },
        { '@type': 'Question', name: 'هل يستطيع Raspberry Pi تشغيل نموذج LLM محلي أيضًا؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكن لـ Pi تشغيل نماذج صغيرة جدًا فحسب وببطء. يتعامل بشكل جيد مع Home Assistant والصوت الأساسي، لكن للذكاء الاصطناعي المحلي mini PC مع iGPU أو NPU قادرة، أو صندوق RTX 3090 مستعمل، هو الأفضل.' } },
        { '@type': 'Question', name: 'كم من RAM أحتاج؟', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant وحده يعمل في بضعة غيغابايت. لتشغيل نموذج LLM محلي صغير على نفس الصندوق، يساعد المزيد من RAM؛ يُبقي mini PC مع 32GB RAM نموذج Qwen3 8B أو Llama 3.1 8B سريع الاستجابة. طابق RAM مع حجم النموذج الذي تخطط لتشغيله.' } },
        { '@type': 'Question', name: 'ما mini PC الذي يجب أن أشتريه؟', acceptedAnswer: { '@type': 'Answer', text: 'لـ HA مع الكاميرات، يسرّع mini PC بمعالج Intel N100/N150 نظام Frigate عبر OpenVINO. لـ HA مع نموذج LLM محلي، ارتقِ إلى mini PC بمعالج Ryzen مع 32GB RAM. راجع دليل أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي.' } },
        { '@type': 'Question', name: 'صندوق واحد أم اثنان؟', acceptedAnswer: { '@type': 'Answer', text: 'mini PC واحد يشغّل Home Assistant مع نموذج LLM محلي صغير معًا. قسّم إلى اثنين إذا أردت إبقاء المركز موثوقًا للغاية على صندوق منخفض الطاقة وتفريغ الذكاء الاصطناعي الثقيل على جهاز منفصل مثل خادم RTX 3090 مستعمل.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-de.png',
    affiliateDisclosure: true,
    title: 'Beste Hardware für ein lokales Smart Home + lokale KI (2026)',
    seoTitle: 'Beste Hardware: lokales Smart Home + KI (2026)',
    intro:
      'Die beste Hardware für ein lokales Smart Home folgt einer Entscheidung: Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt den Home-Assistant-Hub, eine Intel-iGPU (OpenVINO) oder ein Hailo-8L-M.2-Modul beschleunigt die Frigate-Kameraerkennung, eine SSD oder ein NAS speichert die Aufnahmen, und ein gebrauchtes RTX-3090-Gerät ist der Aufstieg für ein lokales LLM. Dieser Leitfaden wählt jede Schicht und hilft bei der Wahl zwischen nur-HA und HA-plus-KI – mit Verweis nach außen für VRAM-Details.',
    metaDescription:
      'Beste Hardware für lokales Smart Home + KI 2026: Intel-N100-Mini-PC oder Raspberry Pi 5 als Hub, Frigate-Beschleuniger (Intel iGPU/Hailo), SSD-Speicher, LLM-Aufstieg.',
    twitterDescription:
      'Hardware für ein lokales Smart Home 2026: Intel-N100-Mini-PC oder Pi 5 als Hub, Frigate-Beschleuniger (Intel iGPU/Hailo-8L), SSD-Speicher, gebrauchte RTX 3090 fürs LLM.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die Hardware für Home Assistant und lokale KI wählen',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'beste hardware home assistant lokale ki',
      'home assistant hardware',
      'mini pc home assistant lokales llm',
      'raspberry pi vs mini pc home assistant',
      'lokaler smart home server',
    ],
    leadAnswerBlock:
      '**Bauen Sie ein lokales Smart Home in vier Schichten: den Hub (Mini-PC mit Intel N100/N150 oder Raspberry Pi 5), einen Frigate-Beschleuniger (Intel-iGPU über OpenVINO oder ein Hailo-8L-M.2-Modul), Speicher (eine SSD oder ein NAS für viele Kameras) und – wenn Sie ein lokales LLM wollen – ein Aufstiegsgerät wie eine gebrauchte RTX 3090.** Für Home Assistant allein genügt ein Raspberry Pi; entscheidend ist, ob Sie Kameraerkennung und lokale KI hinzufügen.',
    quickAnswerTop: {
      de: {
        question: 'Welche Hardware brauche ich für ein lokales Smart Home mit KI?',
        answer:
          'Beginnen Sie mit dem Hub: Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt Home Assistant. Fügen Sie einen Frigate-Beschleuniger für Kameras hinzu – eine Intel-iGPU über OpenVINO deckt die meisten Setups ab, und ein Hailo-8L- oder Hailo-8-M.2-Modul erhöht die Erkennungskapazität (der Google Coral ist inzwischen veraltet). Speichern Sie Aufnahmen auf einer SSD oder einem NAS für viele Kameras. Für ein lokales LLM steigen Sie auf einen Mini-PC mit leistungsfähiger iGPU/NPU oder ein gebrauchtes RTX-3090-Gerät auf.',
        bullets: [
          'Hub: Intel-N100/N150-Mini-PC oder Raspberry Pi 5',
          'Frigate: Intel-iGPU (OpenVINO) oder Hailo-8L M.2 – Coral ist veraltet',
          'Speicher: SSD oder ein NAS für viele Kameras',
          'LLM-Aufstieg: Mini-PC-iGPU/NPU oder gebrauchte RTX 3090',
          'Zuerst entscheiden: nur HA oder HA + Kameras + lokale KI',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was der Hub braucht', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini-PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedizierter Server', anchor: 'server' },
      { label: 'Nur HA vs HA + KI', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt den Hub; ergänzen Sie eine Intel-iGPU oder Hailo-8L für Frigate, eine SSD oder ein NAS für Speicher und ein gebrauchtes RTX-3090-Gerät, wenn Sie ein lokales LLM wollen.' },
      { type: 'plain-terms', content: 'Die Hub-Software (Home Assistant) ist leichtgewichtig und läuft auf einem kleinen Computer wie einem Raspberry Pi. Die Kameraerkennung (Frigate) braucht einen Beschleuniger – einen Intel-Grafikchip über OpenVINO oder ein Hailo-M.2-Modul. Ein lokales Sprachmodell hinzuzufügen braucht noch mehr Leistung, und hier kommt ein Mini-PC mit leistungsfähigem Grafikchip oder eine gebrauchte Grafikkarte wie eine RTX 3090 ins Spiel.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Hub: Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt Home Assistant',
          'Frigate: Eine Intel-iGPU (OpenVINO) oder ein Hailo-8L-M.2-Modul beschleunigt die Kameraerkennung – der Google Coral ist inzwischen veraltet',
          'Speicher: eine SSD für Aufnahmen oder ein NAS, sobald Sie mehrere Kameras betreiben',
          'LLM-Aufstieg: ein Ryzen-Mini-PC (32 GB RAM) oder ein gebrauchtes RTX-3090-Gerät',
          'Eine gebrauchte RTX 3090 (24 GB, ca. 750–950 €) bietet das beste Preis-Leistungs-Verhältnis für Modelle bis ~70B',
          'Entscheiden Sie nur-HA vs HA + Kameras + lokale KI vor dem Kauf – das ändert das richtige Gerät',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Was der Hub braucht',
        content:
          '**Home Assistant selbst ist leichtgewichtig und läuft auf bescheidener Hardware; die hohen Anforderungen kommen von der Frigate-Kameraerkennung und einem lokalen LLM.** Dimensionieren Sie das Gerät nach dem, was Sie hinzufügen, nicht nur nach dem Hub.',
        items: [
          'Der Hub braucht wenig Rechenleistung für Gerätesteuerung und Automatisierungen.',
          'Die Frigate-Objekterkennung braucht einen Beschleuniger: Eine Intel-iGPU über OpenVINO deckt die meisten Setups ab, ein Hailo-8L- oder Hailo-8-M.2-Modul erhöht die Kapazität. Der Google Coral (USB/M.2 TPU) funktioniert weiterhin, ist aber inzwischen veraltet – Frigate empfiehlt ihn für neue Builds nicht mehr.',
          'Größere Whisper-Modelle und lokale LLM-Inferenz sind die anspruchsvollsten Workloads – planen Sie RAM und eine GPU/NPU rund um diese.',
          'Speichern Sie Kameraaufnahmen auf einer SSD; wechseln Sie zu einem NAS, sobald Sie mehrere Kameras dauerhaft betreiben.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Ein Raspberry Pi 5 ist der stromsparendste Weg, Home Assistant für typische Smart-Home-Nutzung zu betreiben.** Mit LLM-Inferenz und großen Whisper-Modellen hat er Schwierigkeiten, und eine DRAM-Knappheit 2026 hat die Board-Preise stark steigen lassen.',
        items: [
          'Hervorragend für Gerätesteuerung, Automatisierungen und ein kleines lokales Sprach-Setup.',
          'LLM-Inferenz auf einem Pi ist auf sehr kleine, langsame Modelle begrenzt – kombinieren Sie ihn mit einem Hailo-8L-M.2-HAT, wenn Sie Frigate-Erkennung wollen.',
          'Wählen Sie einen Pi 5, wenn Sie Grundlagen bei niedrigem Stromverbrauch wollen. Die 8-GB- und 16-GB-Varianten sind die sinnvollen, wobei die Speicherpreise 2026 die 16-GB-Platine weit über ihren Startpreis von ca. 120 $ getrieben haben.',
          'Für ein Plug-and-play-Gerät wird das Home Assistant Green betriebsbereit geliefert (2026 rund 179 €). Home Assistant Yellow wurde Anfang 2026 eingestellt.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini-PC (und Platz für ein LLM)',
        content:
          '**Ein Mini-PC ist die beste Ein-Geräte-Wahl für Home Assistant plus lokale KI, mit genug RAM und einer leistungsfähigen iGPU oder NPU, um ein kleines LLM zu betreiben und Frigate zu beschleunigen.** Er balanciert Leistung, Größe und Kosten.',
        items: [
          'Ein stromsparender Mini-PC mit Intel N100/N150 betreibt Home Assistant und beschleunigt Frigate über die Intel-iGPU (OpenVINO) – der praktische Standard für ein Hub-plus-Kameras-Gerät. Der Beelink EQ14 (Intel N150) liegt bei rund 220 €.',
          'Für ein lokales LLM auf demselben Gerät steigen Sie auf einen Ryzen-Mini-PC mit 32 GB RAM auf: Der Beelink SER8 (Ryzen 7 8845HS, ca. 819 €) betreibt ein Qwen3-8B- oder Llama-3.1-8B-Modell über Ollama mit brauchbarer Geschwindigkeit. Priorisieren Sie RAM und eine leistungsfähige integrierte GPU oder NPU für geringere Latenz.',
          'Für konkrete Empfehlungen siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) und clusterübergreifend [beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Ein NAS kann Home Assistant in einem Container neben Speicher und Frigate-Aufnahmen betreiben, wenn es genug CPU und RAM hat.** Es ist praktisch, wenn Sie bereits eines besitzen.',
        items: [
          'Gut, um Speicher mit Heimautomatisierungsdiensten zu kombinieren.',
          'Prüfen Sie, ob das NAS CPU-/RAM-Reserven für Ihre Add-ons hat.',
          'LLM-Inferenz auf einem NAS hängt von seiner Hardware ab – vielen fehlt eine leistungsfähige GPU. Beispiel: Synology DS925+ oder DS225+; UGREEN-NASync-Modelle bieten ein integriertes lokales LLM.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Dedizierter Server (LLM-Aufstieg)',
        content:
          '**Ein dedizierter Server mit dedizierter GPU ist der Aufstieg, um ein größeres lokales LLM neben vielen Kameras zu betreiben.** Er bietet die meisten Reserven bei höheren Kosten und höherem Stromverbrauch.',
        items: [
          'Eine gebrauchte RTX 3090 (24 GB VRAM, 2026 ca. 750–950 € gebraucht) bietet das beste Preis-Leistungs-Verhältnis für Modelle bis ~70B bei Q4; eine RTX 3060 (12 GB, ca. 320 € gebraucht) bewältigt 7B–13B-Modelle günstig.',
          'Am besten für viele Kameras, ein größeres LLM und mehrere Nutzer. Höherer Stromverbrauch und höhere Kosten als ein Mini-PC.',
          'Überdimensioniert für ein einfaches Smart Home – reservieren Sie ihn für intensive lokale KI-Nutzung und halten Sie den Home-Assistant-Hub für Zuverlässigkeit auf einem separaten, stromsparenden Gerät.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'Lokale LLM-Kapazität je Hardware-Stufe: Ein Raspberry Pi 5 läuft nur mit winzigen Modellen, ein Intel-N100/N150-Mini-PC bewältigt kleine Modelle, ein Ryzen-Mini-PC (32 GB RAM) läuft mit 7B–8B-Modellen, und eine gebrauchte RTX 3090 (24 GB VRAM) skaliert auf etwa 70B bei Q4-Quantisierung.',
      },
      picking: {
        id: 'picking',
        title: 'Wählen für nur-HA vs HA + KI',
        content:
          '**Wählen Sie einen Pi für nur-HA und einen Mini-PC für HA plus lokale KI – diese eine Entscheidung bestimmt die richtige Hardware.** Passen Sie das Gerät an den Workload an.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'Entscheidungsbaum für Smart-Home-Hardware: Frigate-Kameras und ein lokales LLM hinzuzufügen führt zu vier Builds – Raspberry Pi 5, Intel-N100/N150-Mini-PC, Ryzen-Mini-PC (32 GB RAM) oder ein RTX-3090-Server (24 GB VRAM).',
        columns: ['Hardware', 'Relativer Preis', 'Nur-HA', 'Kann ein lokales LLM betreiben', 'Frigate-Beschleunigung'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Relativer Preis': 'Niedrig', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Nur sehr klein, langsam', 'Frigate-Beschleunigung': 'Hailo-8L M.2 HAT' },
          { 'Hardware': 'Intel-N100/N150-Mini-PC', 'Relativer Preis': 'Mittel', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Kleine Modelle', 'Frigate-Beschleunigung': 'Intel-iGPU (OpenVINO)' },
          { 'Hardware': 'Ryzen-Mini-PC', 'Relativer Preis': 'Mittel', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Ja (7B–8B)', 'Frigate-Beschleunigung': 'iGPU oder Hailo M.2' },
          { 'Hardware': 'NAS', 'Relativer Preis': 'Mittel–hoch', 'Nur-HA': 'Ja (Container)', 'Kann ein lokales LLM betreiben': 'Hängt von der Hardware ab', 'Frigate-Beschleunigung': 'Hängt vom Modell ab' },
          { 'Hardware': 'Server + gebrauchte RTX 3090', 'Relativer Preis': 'Hoch', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Ja (bis ~70B)', 'Frigate-Beschleunigung': 'Dedizierte GPU' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Welche Hardware empfiehlt Frigate?', a: 'Für neue Builds empfiehlt Frigate eine Intel-iGPU über OpenVINO oder ein Hailo-8L- (günstig) bzw. Hailo-8-Modul (schneller) im M.2-Format für mehr Erkennungskapazität. Der Google Coral (USB/M.2 TPU) funktioniert weiterhin, ist aber inzwischen veraltet – Frigate empfiehlt ihn für neue Installationen außer auf sehr stromsparender Hardware nicht mehr.' },
          { q: 'Kann ein Raspberry Pi auch ein lokales LLM betreiben?', a: 'Ein Pi kann nur sehr kleine Modelle betreiben, und das langsam, daher ist er für einen reaktionsschnellen lokalen LLM-Assistenten nicht ideal. Home Assistant und einfache Sprache bewältigt er gut, aber für lokale KI ist ein Mini-PC mit einer leistungsfähigen iGPU oder NPU – oder ein gebrauchtes RTX-3090-Gerät – die bessere Wahl.' },
          { q: 'Wie viel RAM brauche ich?', a: 'Home Assistant allein läuft in ein paar Gigabyte. Um ein kleines lokales LLM und andere KI-Dienste auf demselben Gerät zu betreiben, hilft mehr RAM; ein Mini-PC mit 32 GB RAM hält ein Qwen3-8B- oder Llama-3.1-8B-Modell reaktionsschnell. Passen Sie den RAM an die geplante Modellgröße an.' },
          { q: 'Welchen Mini-PC sollte ich kaufen?', a: 'Für HA plus Kameras beschleunigt ein Intel-N100/N150-Mini-PC Frigate über OpenVINO. Für HA plus ein lokales LLM steigen Sie auf einen Ryzen-Mini-PC mit 32 GB RAM auf. Siehe den Leitfaden zu den besten Mini-PCs für Home Assistant + lokale KI.' },
          { q: 'Ein Gerät oder zwei?', a: 'Ein Gerät (ein Mini-PC) ist am einfachsten und betreibt Home Assistant plus ein kleines lokales LLM zusammen. Teilen Sie auf zwei auf, wenn Sie den Hub auf einem stromsparenden Gerät extrem zuverlässig halten und intensive KI auf eine separate Maschine wie einen gebrauchten RTX-3090-Server auslagern wollen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) – konkrete Empfehlungen',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der vollständige Stack',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – was das KI-Gerät betreibt',
          '[Beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) – clusterübergreifend: VRAM und Hardware-Details',
          '[Beste Balkonkraftwerk-Batterien 2026](/de/balcony-solar/best-balcony-solar-batteries-2026) — Batteriespeicher für Ihr lokales Heim-Energiesystem',
          '[Die besten Smart-Home-Hubs für lokale Steuerung (2027)](/de/smart-home/best-smart-home-hubs-2027) – dedizierte Hub-Empfehlungen',
          '[NVIDIA Jetson Orin Nano für Smart-Home-KI: Test (2027)](/de/smart-home/nvidia-jetson-orin-nano-smart-home-review) – GPU-Hardware für lokale KI',
          '[Die besten Zigbee- und Thread-USB-Dongles (2027)](/de/smart-home/best-zigbee-thread-dongles-2027) – Funk-Hardware für Zigbee und Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste Hardware für ein lokales Smart Home + lokale KI (2026)',
      description: 'Beste Hardware für lokales Smart Home + KI 2026: Intel-N100-Mini-PC oder Raspberry Pi 5 als Hub, Frigate-Beschleuniger (Intel iGPU/Hailo), SSD-Speicher, LLM-Aufstieg.',
      url: 'https://www.promptquorum.com/de/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Home-Assistant-Hardware' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Lokales LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Welche Hardware empfiehlt Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Für neue Builds empfiehlt Frigate eine Intel-iGPU über OpenVINO oder ein Hailo-8L- bzw. Hailo-8-Modul im M.2-Format für mehr Erkennungskapazität. Der Google Coral TPU funktioniert weiterhin, ist aber inzwischen veraltet und wird für neue Installationen nicht mehr empfohlen.' } },
        { '@type': 'Question', name: 'Kann ein Raspberry Pi auch ein lokales LLM betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Pi kann nur sehr kleine Modelle betreiben, und das langsam. Home Assistant und einfache Sprache bewältigt er gut, aber für einen reaktionsschnellen lokalen LLM-Assistenten ist ein Mini-PC mit leistungsfähiger iGPU oder NPU oder ein gebrauchtes RTX-3090-Gerät besser.' } },
        { '@type': 'Question', name: 'Wie viel RAM brauche ich?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant allein läuft in ein paar Gigabyte. Um ein kleines lokales LLM auf demselben Gerät zu betreiben, hilft mehr RAM; ein Mini-PC mit 32 GB RAM hält ein Qwen3-8B- oder Llama-3.1-8B-Modell reaktionsschnell. Passen Sie den RAM an die geplante Modellgröße an.' } },
        { '@type': 'Question', name: 'Welchen Mini-PC sollte ich kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Für HA plus Kameras beschleunigt ein Intel-N100/N150-Mini-PC Frigate über OpenVINO. Für HA plus ein lokales LLM steigen Sie auf einen Ryzen-Mini-PC mit 32 GB RAM auf. Siehe den Leitfaden zu den besten Mini-PCs für Home Assistant + lokale KI.' } },
        { '@type': 'Question', name: 'Ein Gerät oder zwei?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Mini-PC betreibt Home Assistant plus ein kleines lokales LLM zusammen. Teilen Sie auf zwei auf, wenn Sie den Hub auf einem stromsparenden Gerät extrem zuverlässig halten und intensive KI auf eine separate Maschine wie einen gebrauchten RTX-3090-Server auslagern wollen.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-es.png',
    affiliateDisclosure: true,
    title: 'Mejor Hardware para un Smart Home Local + IA Local (2026)',
    seoTitle: 'Mejor Hardware: Smart Home Local + IA (2026)',
    intro:
      'El mejor hardware para un smart home local sigue una decisión: un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta el hub de Home Assistant, una iGPU Intel (OpenVINO) o un módulo Hailo-8L M.2 acelera la detección de cámaras de Frigate, un SSD o NAS almacena las grabaciones, y un equipo con RTX 3090 usada es el salto para ejecutar un LLM local. Esta guía elige cada capa y te ayuda a decidir entre solo-HA y HA-más-IA, enlazando hacia fuera para la profundidad de VRAM.',
    metaDescription:
      'Mejor hardware para un smart home local + IA en 2026: hub con mini PC Intel N100 o Raspberry Pi 5, acelerador Frigate (Intel iGPU/Hailo), almacenamiento SSD y salto a LLM.',
    twitterDescription:
      'Hardware para un smart home local en 2026: hub con mini PC Intel N100 o Pi 5, acelerador Frigate (Intel iGPU/Hailo-8L), almacenamiento SSD, RTX 3090 usada para un LLM local.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen hardware para Home Assistant e IA local',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'mejor hardware home assistant ia local',
      'home assistant hardware',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'servidor smart home local',
    ],
    leadAnswerBlock:
      '**Monta un smart home local en cuatro capas: el hub (mini PC Intel N100/N150 o Raspberry Pi 5), un acelerador de Frigate (iGPU Intel vía OpenVINO o un módulo Hailo-8L M.2), almacenamiento (un SSD, o un NAS para muchas cámaras) y —si quieres un LLM local— un equipo de salto como una RTX 3090 usada.** Para Home Assistant solo, una Raspberry Pi es suficiente; el factor decisivo es si añades detección de cámaras e IA local.',
    quickAnswerTop: {
      es: {
        question: '¿Qué hardware necesito para un smart home local con IA?',
        answer:
          'Empieza por el hub: un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta Home Assistant. Añade un acelerador de Frigate para las cámaras: una iGPU Intel vía OpenVINO cubre la mayoría de configuraciones, y un módulo Hailo-8L o Hailo-8 M.2 añade capacidad de detección (el Google Coral ya es heredado). Guarda las grabaciones en un SSD, o un NAS para muchas cámaras. Para un LLM local, sube a un mini PC con iGPU/NPU capaz o a un equipo con RTX 3090 usada.',
        bullets: [
          'Hub: mini PC Intel N100/N150 o Raspberry Pi 5',
          'Frigate: iGPU Intel (OpenVINO) o Hailo-8L M.2 — Coral es heredado',
          'Almacenamiento: SSD, o un NAS para muchas cámaras',
          'Salto a LLM local: iGPU/NPU de mini PC o RTX 3090 usada',
          'Decide primero: solo-HA o HA + cámaras + IA local',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué necesita el hub', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Servidor dedicado', anchor: 'server' },
      { label: 'Solo-HA vs HA + IA', anchor: 'picking' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta el hub; añade una iGPU Intel o Hailo-8L para Frigate, un SSD o NAS para almacenamiento, y un equipo con RTX 3090 usada si quieres un LLM local.' },
      { type: 'plain-terms', content: 'El software del hub (Home Assistant) es ligero y corre en un ordenador pequeño como una Raspberry Pi. La detección de cámaras (Frigate) necesita un acelerador: un chip gráfico Intel vía OpenVINO, o un módulo Hailo M.2. Añadir un modelo de lenguaje local necesita aún más potencia, y ahí entra un mini PC con un chip gráfico capaz, o una tarjeta gráfica usada como una RTX 3090.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Hub: un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta Home Assistant',
          'Frigate: una iGPU Intel (OpenVINO) o un módulo Hailo-8L M.2 acelera la detección de cámaras — el Google Coral ya es heredado',
          'Almacenamiento: un SSD para grabaciones, o un NAS en cuanto uses varias cámaras',
          'Salto a LLM local: un mini PC Ryzen (32 GB de RAM) o un equipo con RTX 3090 usada',
          'Una RTX 3090 usada (24 GB, ~600–800 €) ofrece la mejor relación calidad-precio para modelos de hasta ~70B',
          'Decide entre solo-HA o HA + cámaras + IA local antes de comprar: cambia el equipo adecuado',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Qué necesita el hub',
        content:
          '**El propio Home Assistant es ligero y corre en hardware modesto; las demandas fuertes vienen de la detección de cámaras de Frigate y de un LLM local.** Dimensiona el equipo para lo que vas a añadir, no solo para el hub.',
        items: [
          'El hub necesita poco cómputo para el control de dispositivos y las automatizaciones.',
          'La detección de objetos de Frigate necesita un acelerador: una iGPU Intel vía OpenVINO cubre la mayoría de configuraciones, y un módulo Hailo-8L o Hailo-8 M.2 añade capacidad. El Google Coral USB/M.2 TPU sigue funcionando, pero ya es heredado — Frigate ya no lo recomienda para instalaciones nuevas.',
          'Los modelos Whisper más grandes y la inferencia de LLM local son las cargas más exigentes: planifica la RAM y una GPU/NPU en torno a ellas.',
          'Guarda las grabaciones de las cámaras en un SSD; pasa a un NAS en cuanto uses varias cámaras de forma continua.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Una Raspberry Pi 5 es la forma de menor consumo de ejecutar Home Assistant para el uso típico de smart home.** Tiene dificultades con la inferencia de LLM y los modelos Whisper grandes, y la escasez de DRAM de 2026 ha disparado el precio de las placas.',
        items: [
          'Estupenda para control de dispositivos, automatizaciones y una pequeña configuración de voz local.',
          'La inferencia de LLM en una Pi se limita a modelos muy pequeños y lentos — combínala con un HAT Hailo-8L M.2 si quieres detección con Frigate.',
          'Elige una Pi 5 si quieres lo básico con bajo consumo. Las versiones de 8GB y 16GB son las útiles, aunque los precios de la memoria en 2026 han disparado el precio de la placa de 16GB muy por encima de su precio de lanzamiento de ~120 $.',
          'Para un equipo listo para usar, el Home Assistant Green se envía preconfigurado (unos 199 € en 2026). El Home Assistant Yellow se descontinuó a principios de 2026.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (y sitio para un LLM)',
        content:
          '**Un mini PC es la mejor opción de un solo equipo para Home Assistant más IA local, con suficiente RAM y una iGPU o NPU capaz para ejecutar un LLM pequeño y acelerar Frigate.** Equilibra potencia, tamaño y coste.',
        items: [
          'Un mini PC Intel N100/N150 de bajo consumo ejecuta Home Assistant y acelera Frigate mediante la iGPU Intel (OpenVINO) — la opción práctica por defecto para un equipo de hub más cámaras. El Beelink EQ14 (Intel N150) ronda los 210–240 €.',
          'Para un LLM local en el mismo equipo, sube a un mini PC Ryzen con 32 GB de RAM: el Beelink SER8 (Ryzen 7 8845HS, ~700 €) ejecuta un modelo Qwen3 8B o Llama 3.1 8B vía Ollama a una velocidad aprovechable. Prioriza la RAM y una GPU integrada o NPU capaz para menor latencia.',
          'Para opciones concretas, consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) y, entre clústeres, [mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Un NAS puede alojar Home Assistant en un contenedor junto al almacenamiento y las grabaciones de Frigate, si tiene suficiente CPU y RAM.** Es cómodo si ya tienes uno.',
        items: [
          'Bueno para combinar almacenamiento con servicios de domótica.',
          'Comprueba que el NAS tenga margen de CPU/RAM para tus complementos.',
          'La inferencia de LLM en un NAS depende de su hardware: muchos carecen de una GPU capaz. Ejemplo: Synology DS925+ o DS225+; los modelos UGREEN NASync incluyen una opción de LLM local integrada.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Servidor dedicado (salto a LLM)',
        content:
          '**Un servidor dedicado con una GPU discreta es el salto para ejecutar un LLM local más grande junto a muchas cámaras.** Ofrece el mayor margen a mayor coste y consumo.',
        items: [
          'Una RTX 3090 usada (24 GB de VRAM, ~600–800 € usada en 2026) es el equipo con mejor relación calidad-precio para ejecutar modelos de hasta ~70B en Q4; una RTX 3060 (12 GB, ~180–220 € usada) gestiona modelos de 7B–13B con un presupuesto ajustado.',
          'Mejor para muchas cámaras, un LLM más grande y varios usuarios. Mayor consumo y coste que un mini PC.',
          'Excesivo para un smart home básico — resérvalo para uso intensivo de IA local, y mantén el hub de Home Assistant en un equipo aparte de bajo consumo por fiabilidad.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'Capacidad de LLM local por nivel de hardware: una Raspberry Pi 5 solo ejecuta modelos diminutos, un mini PC Intel N100/N150 gestiona modelos pequeños, un mini PC Ryzen (32 GB de RAM) ejecuta modelos de 7B–8B, y una RTX 3090 usada (24 GB de VRAM) escala hasta unos 70B en cuantización Q4.',
      },
      picking: {
        id: 'picking',
        title: 'Elegir para solo-HA vs HA + IA',
        content:
          '**Elige una Pi para solo-HA y un mini PC para HA más IA local: esa única decisión determina el hardware adecuado.** Ajusta el equipo a la carga de trabajo.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'Árbol de decisión para el hardware de smart home: añadir cámaras de Frigate y un LLM local lleva a cuatro configuraciones — Raspberry Pi 5, mini PC Intel N100/N150, mini PC Ryzen (32 GB de RAM) o un servidor RTX 3090 (24 GB de VRAM).',
        columns: ['Hardware', 'Precio relativo', 'Solo-HA', 'Puede ejecutar un LLM local', 'Aceleración de Frigate'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Precio relativo': 'Bajo', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Solo muy pequeños, lento', 'Aceleración de Frigate': 'HAT Hailo-8L M.2' },
          { 'Hardware': 'Mini PC Intel N100/N150', 'Precio relativo': 'Medio', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Modelos pequeños', 'Aceleración de Frigate': 'iGPU Intel (OpenVINO)' },
          { 'Hardware': 'Mini PC Ryzen', 'Precio relativo': 'Medio', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Sí (7B–8B)', 'Aceleración de Frigate': 'iGPU o Hailo M.2' },
          { 'Hardware': 'NAS', 'Precio relativo': 'Medio–alto', 'Solo-HA': 'Sí (contenedor)', 'Puede ejecutar un LLM local': 'Depende del hardware', 'Aceleración de Frigate': 'Depende del modelo' },
          { 'Hardware': 'Servidor + RTX 3090 usada', 'Precio relativo': 'Alto', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Sí (hasta ~70B)', 'Aceleración de Frigate': 'GPU discreta' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué hardware recomienda Frigate?', a: 'Para equipos nuevos, Frigate recomienda una iGPU Intel vía OpenVINO, o un módulo Hailo-8L (económico) o Hailo-8 (más rápido) en formato M.2 para más capacidad de detección. El Google Coral USB/M.2 TPU sigue funcionando, pero ya es heredado — Frigate ya no lo recomienda para instalaciones nuevas salvo en hardware de muy bajo consumo.' },
          { q: '¿Puede una Raspberry Pi ejecutar también un LLM local?', a: 'Una Pi solo puede ejecutar modelos muy pequeños, y lentamente, así que no es ideal para un asistente de LLM local con buena respuesta. Maneja bien Home Assistant y la voz básica, pero para IA local un mini PC con una iGPU o NPU capaz, o un equipo con RTX 3090 usada, es la mejor opción.' },
          { q: '¿Cuánta RAM necesito?', a: 'Home Assistant solo corre en un par de gigabytes. Para ejecutar un LLM local pequeño y otros servicios de IA en el mismo equipo, ayuda más RAM; un mini PC con 32 GB de RAM y una iGPU/NPU capaz mantiene un modelo Qwen3 8B o Llama 3.1 8B con buena respuesta. Ajusta la RAM al tamaño del modelo que planees ejecutar.' },
          { q: '¿Qué mini PC debería comprar?', a: 'Para HA más cámaras, un mini PC Intel N100/N150 acelera Frigate vía OpenVINO. Para HA más un LLM local, sube a un mini PC Ryzen con 32 GB de RAM. Consulta la guía de mejores mini PC para Home Assistant + IA local para opciones concretas.' },
          { q: '¿Un equipo o dos?', a: 'Un equipo (un mini PC) es lo más simple y ejecuta Home Assistant más un LLM local pequeño juntos. Divide en dos si quieres mantener el hub ultrafiable en un equipo de bajo consumo y descargar la IA pesada a una máquina separada como un servidor con RTX 3090 usada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — opciones concretas',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el stack completo',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — qué ejecuta el equipo de IA',
          '[Mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm) — entre clústeres: VRAM y detalle de hardware',
          '[Las mejores baterías de solar de balcón 2026](/es/balcony-solar/best-balcony-solar-batteries-2026) — almacenamiento en batería para tu configuración local de energía doméstica',
          '[Los mejores hubs domóticos para control local (2027)](/es/smart-home/best-smart-home-hubs-2027) — hubs dedicados recomendados',
          '[NVIDIA Jetson Orin Nano para IA en el hogar inteligente: análisis (2027)](/es/smart-home/nvidia-jetson-orin-nano-smart-home-review) — hardware de IA local con GPU',
          '[Los mejores dongles USB Zigbee y Thread (2027)](/es/smart-home/best-zigbee-thread-dongles-2027) — hardware de radio para Zigbee y Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejor Hardware para un Smart Home Local + IA Local (2026)',
      description: 'Mejor hardware para un smart home local + IA en 2026: hub con mini PC Intel N100 o Raspberry Pi 5, acelerador Frigate (Intel iGPU/Hailo), almacenamiento SSD y salto a LLM.',
      url: 'https://www.promptquorum.com/es/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Hardware de Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué hardware recomienda Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Para equipos nuevos, Frigate recomienda una iGPU Intel vía OpenVINO, o un módulo Hailo-8L o Hailo-8 en formato M.2 para más capacidad de detección. El Google Coral TPU sigue funcionando, pero ya es heredado y ya no se recomienda para instalaciones nuevas.' } },
        { '@type': 'Question', name: '¿Puede una Raspberry Pi ejecutar también un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Una Pi solo puede ejecutar modelos muy pequeños y lentamente. Maneja bien Home Assistant y la voz básica, pero para un asistente de LLM local con buena respuesta, un mini PC con iGPU o NPU capaz, o un equipo con RTX 3090 usada, es mejor.' } },
        { '@type': 'Question', name: '¿Cuánta RAM necesito?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant solo corre en un par de gigabytes. Para ejecutar un LLM local pequeño en el mismo equipo, ayuda más RAM; un mini PC con 32 GB de RAM mantiene un modelo Qwen3 8B o Llama 3.1 8B con buena respuesta. Ajusta la RAM al tamaño del modelo que planees ejecutar.' } },
        { '@type': 'Question', name: '¿Qué mini PC debería comprar?', acceptedAnswer: { '@type': 'Answer', text: 'Para HA más cámaras, un mini PC Intel N100/N150 acelera Frigate vía OpenVINO. Para HA más un LLM local, sube a un mini PC Ryzen con 32 GB de RAM. Consulta la guía de mejores mini PC para Home Assistant + IA local.' } },
        { '@type': 'Question', name: '¿Un equipo o dos?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini PC ejecuta Home Assistant más un LLM local pequeño juntos. Divide en dos si quieres el hub ultrafiable en un equipo de bajo consumo y la IA pesada en una máquina separada como un servidor con RTX 3090 usada.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-ko.png',
    affiliateDisclosure: true,
    title: '로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어 (2026)',
    seoTitle: '로컬 스마트 홈 + AI를 위한 최고의 하드웨어 (2026)',
    intro:
      '로컬 스마트 홈에 최적인 하드웨어는 하나의 결정으로 정리됩니다. Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 Home Assistant 허브를 실행하고, Intel 내장 GPU(OpenVINO) 또는 Hailo-8L M.2 모듈이 Frigate 카메라 감지를 가속하며, SSD 또는 NAS가 녹화 영상을 저장하고, 중고 RTX 3090 서버가 로컬 LLM을 실행하기 위한 상위 단계입니다. 이 가이드는 각 계층을 선택하고 HA 단독과 HA+AI 중 무엇을 고를지 안내하며 VRAM 심층 정보는 외부 링크로 연결합니다.',
    metaDescription:
      '2026년 로컬 스마트 홈 + AI 최고의 하드웨어: Intel N100 미니 PC 또는 Raspberry Pi 5 허브, Frigate 가속기(Intel iGPU/Hailo), SSD 스토리지, LLM 업그레이드 경로.',
    twitterDescription:
      '2026년 로컬 스마트 홈 하드웨어: Intel N100 미니 PC 또는 Pi 5 허브, Frigate 가속기(Intel iGPU/Hailo-8L), SSD 스토리지, 로컬 LLM용 중고 RTX 3090.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant와 로컬 AI 실행을 위한 하드웨어를 선택하는 구매자',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'home assistant 로컬 AI 최고의 하드웨어',
      'home assistant 하드웨어',
      '미니 PC home assistant 로컬 LLM',
      'raspberry pi 대 미니 PC home assistant',
      '로컬 스마트 홈 서버',
    ],
    leadAnswerBlock:
      '**로컬 스마트 홈은 네 계층으로 구성됩니다. 허브(Intel N100/N150 미니 PC 또는 Raspberry Pi 5), Frigate 가속기(OpenVINO를 통한 Intel 내장 GPU 또는 Hailo-8L M.2 모듈), 스토리지(SSD, 카메라가 많다면 NAS), 그리고 로컬 LLM을 원한다면 중고 RTX 3090 같은 업그레이드 기기입니다.** Home Assistant만 사용한다면 Raspberry Pi로 충분합니다. 결정 요인은 카메라 감지와 로컬 AI를 추가할지 여부입니다.',
    quickAnswerTop: {
      ko: {
        question: 'AI가 포함된 로컬 스마트 홈에 어떤 하드웨어가 필요합니까?',
        answer:
          '먼저 허브부터 시작하십시오. Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 Home Assistant를 실행합니다. 카메라용으로 Frigate 가속기를 추가하십시오. OpenVINO를 통한 Intel 내장 GPU가 대부분의 구성을 처리하며, Hailo-8L 또는 Hailo-8 M.2 모듈이 감지 성능을 더합니다(Google Coral은 이제 레거시입니다). 녹화 영상은 SSD에 저장하고, 카메라가 많다면 NAS를 사용하십시오. 로컬 LLM을 원한다면 고성능 내장 GPU/NPU가 있는 미니 PC나 중고 RTX 3090 서버로 업그레이드하십시오.',
        bullets: [
          '허브: Intel N100/N150 미니 PC 또는 Raspberry Pi 5',
          'Frigate: Intel 내장 GPU(OpenVINO) 또는 Hailo-8L M.2 — Coral은 레거시',
          '스토리지: SSD, 카메라가 많다면 NAS',
          '로컬 LLM 업그레이드: 미니 PC 내장 GPU/NPU 또는 중고 RTX 3090',
          '먼저 결정하십시오: HA 단독인지 HA + 카메라 + 로컬 AI인지',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '허브에 필요한 것', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: '미니 PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: '전용 서버', anchor: 'server' },
      { label: 'HA 단독 대 HA + AI', anchor: 'picking' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 허브를 실행하고, Frigate용으로 Intel 내장 GPU나 Hailo-8L을 추가하며, 스토리지로 SSD나 NAS를, 로컬 LLM을 원한다면 중고 RTX 3090 서버를 더하십시오.' },
      { type: 'plain-terms', content: '허브 소프트웨어(Home Assistant)는 가볍고 Raspberry Pi 같은 소형 컴퓨터에서 실행됩니다. 카메라 감지(Frigate)는 가속기가 필요합니다. OpenVINO를 통한 Intel 그래픽 칩이나 Hailo M.2 모듈이 그 역할을 합니다. 로컬 언어 모델을 추가하려면 더 많은 성능이 필요하며, 이때 고성능 그래픽 칩을 갖춘 미니 PC나 RTX 3090 같은 중고 그래픽 카드가 필요합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '허브: Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 Home Assistant를 실행합니다',
          'Frigate: Intel 내장 GPU(OpenVINO) 또는 Hailo-8L M.2 모듈이 카메라 감지를 가속합니다 — Google Coral은 이제 레거시입니다',
          '스토리지: 녹화 영상은 SSD, 카메라 여러 대를 상시 운영한다면 NAS',
          '로컬 LLM 업그레이드: Ryzen 미니 PC(RAM 32GB) 또는 중고 RTX 3090 서버',
          '중고 RTX 3090(24GB, 약 $600–800)이 최대 약 70B 모델까지 가장 가성비가 좋습니다',
          '구매 전에 HA 단독인지 HA + 카메라 + 로컬 AI인지 결정하십시오. 그 선택이 적합한 기기를 바꿉니다',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: '허브에 필요한 것',
        content:
          '**Home Assistant 자체는 가볍고 평범한 하드웨어에서 실행됩니다. 높은 요구 사항은 Frigate 카메라 감지와 로컬 LLM에서 옵니다.** 허브만이 아니라 추가할 것을 고려하여 기기 크기를 결정하십시오.',
        items: [
          '허브는 장치 제어 및 자동화에 거의 연산이 필요하지 않습니다.',
          'Frigate 객체 감지에는 가속기가 필요합니다. OpenVINO를 통한 Intel 내장 GPU가 대부분의 구성을 처리하며, Hailo-8L 또는 Hailo-8 M.2 모듈이 성능을 더합니다. Google Coral USB/M.2 TPU는 여전히 작동하지만 이제 레거시이며 Frigate는 신규 구성에 더 이상 권장하지 않습니다.',
          '대형 Whisper 모델과 로컬 LLM 추론이 가장 까다로운 워크로드입니다. 이에 맞춰 RAM과 GPU/NPU를 계획하십시오.',
          '카메라 녹화는 SSD에 저장하고, 카메라 여러 대를 상시 운영하게 되면 NAS로 옮기십시오.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 5는 일반적인 스마트 홈 용도로 Home Assistant를 실행하는 가장 저전력인 방법입니다.** LLM 추론과 대형 Whisper 모델에는 어려움을 겪으며, 2026년 D램 공급 부족으로 보드 가격이 크게 올랐습니다.',
        items: [
          '장치 제어, 자동화, 소형 로컬 음성 설정에 탁월합니다.',
          'Pi에서의 LLM 추론은 매우 소형이고 느린 모델에만 제한됩니다. Frigate 감지를 원한다면 Hailo-8L M.2 HAT와 함께 사용하십시오.',
          '저전력으로 기본 기능만 원한다면 Pi 5를 선택하십시오. 8GB와 16GB 모델이 실용적이지만, 2026년 메모리 가격 상승으로 16GB 보드는 출시 당시 가격(약 $120)보다 훨씬 비싸졌습니다.',
          '바로 사용 가능한 어플라이언스를 원한다면 Home Assistant Green이 즉시 사용 가능한 상태로 출시됩니다(2026년 기준 약 $199). Home Assistant Yellow는 2026년 초에 단종되었습니다.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: '미니 PC (LLM을 위한 여유 공간)',
        content:
          '**미니 PC는 Home Assistant와 로컬 AI를 하나의 기기에서 실행하는 최고의 선택입니다. 충분한 RAM과 고성능 내장 GPU 또는 NPU를 갖추고 있습니다.** 성능, 크기, 비용의 균형이 잡혀 있습니다.',
        items: [
          '저전력 Intel N100/N150 미니 PC는 Home Assistant를 실행하고 Intel 내장 GPU(OpenVINO)로 Frigate를 가속합니다 — 허브+카메라 기기의 실용적인 기본 선택입니다. Beelink EQ14(Intel N150)는 약 $190–220입니다.',
          '같은 기기에서 로컬 LLM을 원한다면 RAM 32GB의 Ryzen 미니 PC로 업그레이드하십시오. Beelink SER8(Ryzen 7 8845HS, 약 $649)은 Ollama로 Qwen3 8B나 Llama 3.1 8B 모델을 실용적인 속도로 실행합니다. 낮은 지연 시간을 위해 RAM과 고성능 내장 GPU 또는 NPU를 우선시하십시오.',
          '구체적인 선택은 [Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)와 크로스 클러스터 [로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm)를 참조하십시오.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**NAS는 충분한 CPU와 RAM이 있다면 스토리지 및 Frigate 녹화와 함께 컨테이너에서 Home Assistant를 호스팅할 수 있습니다.** 이미 보유하고 있다면 편리합니다.',
        items: [
          '스토리지와 홈 자동화 서비스를 결합하기에 적합합니다.',
          'NAS에 부가 기능을 위한 CPU/RAM 여유가 있는지 확인하십시오.',
          'NAS에서의 LLM 추론은 하드웨어에 따라 다릅니다. 많은 NAS에는 고성능 GPU가 없습니다. 예시: Synology DS925+ 또는 DS225+; UGREEN NASync 모델은 내장 로컬 LLM 옵션을 제공합니다.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: '전용 서버 (LLM 업그레이드)',
        content:
          '**개별 GPU를 갖춘 전용 서버는 많은 카메라와 함께 더 큰 로컬 LLM을 실행하기 위한 업그레이드 경로입니다.** 더 높은 비용과 전력으로 가장 많은 여유를 제공합니다.',
        items: [
          '중고 RTX 3090(VRAM 24GB, 2026년 중고 기준 약 $600–800)이 Q4 기준 최대 약 70B 모델까지 가장 가성비가 좋습니다. RTX 3060(12GB, 중고 약 $150–180)은 예산 내에서 7B–13B 모델을 처리합니다.',
          '카메라가 많거나, 대형 LLM을 실행하거나, 여러 사용자가 있는 경우에 가장 적합합니다. 미니 PC보다 전력 소비와 비용이 높습니다.',
          '기본적인 스마트 홈에는 과도합니다. 대용량 로컬 AI 사용에 예약하고, 안정성을 위해 Home Assistant 허브는 별도의 저전력 기기에 유지하십시오.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: '하드웨어 등급별 로컬 LLM 용량: Raspberry Pi 5는 아주 작은 모델만 실행하고, Intel N100/N150 미니 PC는 소형 모델을 처리하며, Ryzen 미니 PC(RAM 32GB)는 7B–8B 모델을 실행하고, 중고 RTX 3090(VRAM 24GB)은 Q4 양자화 기준 최대 약 70B까지 확장됩니다.',
      },
      picking: {
        id: 'picking',
        title: 'HA 단독 대 HA + AI 선택',
        content:
          '**HA 단독에는 Pi, HA + 로컬 AI에는 미니 PC를 선택하십시오. 이 단일 결정이 올바른 하드웨어를 결정합니다.** 워크로드에 맞게 기기를 선택하십시오.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: '스마트 홈 하드웨어 결정 트리: Frigate 카메라 추가 여부와 로컬 LLM 추가 여부에 따라 Raspberry Pi 5, Intel N100/N150 미니 PC, Ryzen 미니 PC(RAM 32GB), RTX 3090 서버(VRAM 24GB) 중 하나로 이어집니다.',
        columns: ['하드웨어', '상대적 가격', 'HA 단독', '로컬 LLM 실행 가능', 'Frigate 가속'],
        rows: [
          { '하드웨어': 'Raspberry Pi 5', '상대적 가격': '저가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '매우 소형만, 느림', 'Frigate 가속': 'Hailo-8L M.2 HAT' },
          { '하드웨어': 'Intel N100/N150 미니 PC', '상대적 가격': '중가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '소형 모델', 'Frigate 가속': 'Intel 내장 GPU(OpenVINO)' },
          { '하드웨어': 'Ryzen 미니 PC', '상대적 가격': '중가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '가능 (7B–8B)', 'Frigate 가속': '내장 GPU 또는 Hailo M.2' },
          { '하드웨어': 'NAS', '상대적 가격': '중~고가', 'HA 단독': '가능 (컨테이너)', '로컬 LLM 실행 가능': '하드웨어에 따라 다름', 'Frigate 가속': '모델에 따라 다름' },
          { '하드웨어': '서버 + 중고 RTX 3090', '상대적 가격': '고가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '가능 (최대 약 70B)', 'Frigate 가속': '개별 GPU' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Frigate는 어떤 하드웨어를 권장합니까?', a: '신규 구성에는 OpenVINO를 통한 Intel 내장 GPU, 또는 감지 성능을 더 원한다면 Hailo-8L(보급형)이나 Hailo-8(고성능) M.2 모듈을 Frigate가 권장합니다. Google Coral USB/M.2 TPU는 여전히 작동하지만 이제 레거시이며, 매우 저전력 하드웨어를 제외하고는 신규 설치에 더 이상 권장되지 않습니다.' },
          { q: 'Raspberry Pi도 로컬 LLM을 실행할 수 있습니까?', a: 'Pi는 매우 소형 모델만 느리게 실행할 수 있으므로 반응이 빠른 로컬 LLM 어시스턴트에는 이상적이지 않습니다. Home Assistant와 기본 음성은 잘 처리하지만 로컬 AI에는 고성능 내장 GPU나 NPU가 있는 미니 PC, 또는 중고 RTX 3090 서버가 더 나은 선택입니다.' },
          { q: 'RAM이 얼마나 필요합니까?', a: 'Home Assistant 단독은 몇 GB면 충분합니다. 같은 기기에서 소형 로컬 LLM과 다른 AI 서비스를 실행하려면 더 많은 RAM이 도움이 됩니다. RAM 32GB의 미니 PC는 Qwen3 8B나 Llama 3.1 8B 모델을 원활하게 유지합니다. 실행할 모델 크기에 맞게 RAM을 선택하십시오.' },
          { q: '어떤 미니 PC를 구매해야 합니까?', a: 'HA + 카메라라면 Intel N100/N150 미니 PC가 OpenVINO로 Frigate를 가속합니다. HA + 로컬 LLM이라면 RAM 32GB의 Ryzen 미니 PC로 업그레이드하십시오. 구체적인 선택은 Home Assistant + 로컬 AI를 위한 최고의 미니 PC 가이드를 참조하십시오.' },
          { q: '기기 하나로 충분합니까, 두 개가 필요합니까?', a: '미니 PC 하나로 Home Assistant와 소형 로컬 LLM을 함께 실행하는 것이 가장 간단합니다. 안정성을 위해 허브를 저전력 기기에서 매우 안정적으로 유지하고 무거운 AI를 중고 RTX 3090 서버 같은 별도 기기에 오프로드하려면 두 기기로 나누십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — 구체적인 선택',
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 전체 스택',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — AI 기기가 실행하는 것',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm) — 크로스 클러스터: VRAM 및 하드웨어 심층 정보',
          '[2026 최고의 발코니 태양광 배터리](/ko/balcony-solar/best-balcony-solar-batteries-2026) — 로컬 홈 에너지 설정을 위한 배터리 저장장치',
          '[로컬 제어를 위한 최고의 스마트홈 허브 (2027년)](/ko/smart-home/best-smart-home-hubs-2027) — 전용 허브 추천',
          '[스마트홈 AI용 NVIDIA Jetson Orin Nano 리뷰 (2027)](/ko/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU 기반 로컬 AI 하드웨어',
          '[최고의 Zigbee 및 Thread USB 동글 (2027)](/ko/smart-home/best-zigbee-thread-dongles-2027) — Zigbee/Thread 무선 하드웨어',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어 (2026)',
      description: '2026년 로컬 스마트 홈 + AI 최고의 하드웨어: Intel N100 미니 PC 또는 Raspberry Pi 5 허브, Frigate 가속기(Intel iGPU/Hailo), SSD 스토리지, LLM 업그레이드 경로.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Home Assistant 하드웨어' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: '미니 PC' }, { '@type': 'Thing', name: '로컬 LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate는 어떤 하드웨어를 권장합니까?', acceptedAnswer: { '@type': 'Answer', text: '신규 구성에는 OpenVINO를 통한 Intel 내장 GPU, 또는 감지 성능을 더 원한다면 Hailo-8L이나 Hailo-8 M.2 모듈을 Frigate가 권장합니다. Google Coral TPU는 여전히 작동하지만 이제 레거시이며 신규 설치에는 더 이상 권장되지 않습니다.' } },
        { '@type': 'Question', name: 'Raspberry Pi도 로컬 LLM을 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Pi는 매우 소형 모델만 느리게 실행할 수 있습니다. Home Assistant와 기본 음성은 잘 처리하지만 반응이 빠른 로컬 LLM 어시스턴트에는 고성능 내장 GPU나 NPU가 있는 미니 PC, 또는 중고 RTX 3090 서버가 더 적합합니다.' } },
        { '@type': 'Question', name: 'RAM이 얼마나 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 단독은 몇 GB면 충분합니다. 같은 기기에서 소형 로컬 LLM을 실행하려면 더 많은 RAM이 도움이 됩니다. RAM 32GB의 미니 PC는 Qwen3 8B나 Llama 3.1 8B 모델을 원활하게 유지합니다. 실행할 모델 크기에 맞게 RAM을 선택하십시오.' } },
        { '@type': 'Question', name: '어떤 미니 PC를 구매해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: 'HA + 카메라라면 Intel N100/N150 미니 PC가 OpenVINO로 Frigate를 가속합니다. HA + 로컬 LLM이라면 RAM 32GB의 Ryzen 미니 PC로 업그레이드하십시오. Home Assistant + 로컬 AI를 위한 최고의 미니 PC 가이드를 참조하십시오.' } },
        { '@type': 'Question', name: '기기 하나로 충분합니까, 두 개가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '미니 PC 하나로 Home Assistant와 소형 로컬 LLM을 함께 실행합니다. 허브를 저전력 기기에서 매우 안정적으로 유지하고 무거운 AI를 중고 RTX 3090 서버 같은 별도 기기에 오프로드하려면 두 기기로 나누십시오.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-fr.png',
    affiliateDisclosure: true,
    title: 'Meilleur Matériel pour une Maison Connectée Locale + IA Locale (2026)',
    seoTitle: 'Meilleur Matériel : Maison Connectée Locale + IA (2026)',
    intro:
      'Le meilleur matériel pour une maison connectée locale suit une seule logique : un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner le hub Home Assistant, une iGPU Intel (OpenVINO) ou un module Hailo-8L M.2 accélère la détection de caméras Frigate, un SSD ou un NAS stocke les enregistrements, et un boîtier RTX 3090 d\'occasion constitue la montée en gamme pour un LLM local. Ce guide détaille chaque couche et vous aide à choisir entre HA seul et HA plus IA, avec un renvoi externe pour la profondeur VRAM.',
    metaDescription:
      'Meilleur matériel maison connectée locale + IA 2026 : mini-PC Intel N100 ou Raspberry Pi 5 comme hub, accélérateur Frigate (iGPU Intel/Hailo), stockage SSD, montée en gamme LLM.',
    twitterDescription:
      'Matériel pour une maison connectée locale en 2026 : mini-PC Intel N100 ou Pi 5 comme hub, accélérateur Frigate (iGPU Intel/Hailo-8L), stockage SSD, RTX 3090 d\'occasion pour un LLM local.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs choisissant du matériel pour Home Assistant et l\'IA locale',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'meilleur matériel home assistant ia locale',
      'home assistant matériel',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'serveur maison connectée locale',
    ],
    leadAnswerBlock:
      '**Construisez une maison connectée locale en quatre couches : le hub (mini-PC Intel N100/N150 ou Raspberry Pi 5), un accélérateur Frigate (iGPU Intel via OpenVINO ou module Hailo-8L M.2), le stockage (un SSD, ou un NAS pour de nombreuses caméras) et — si vous voulez un LLM local — un boîtier de montée en gamme comme une RTX 3090 d\'occasion.** Pour Home Assistant seul, une Raspberry Pi suffit ; le facteur décisif est l\'ajout de la détection de caméras et de l\'IA locale.',
    quickAnswerTop: {
      fr: {
        question: 'Quel matériel pour une maison connectée locale avec IA ?',
        answer:
          'Commencez par le hub : un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner Home Assistant. Ajoutez un accélérateur Frigate pour les caméras — une iGPU Intel via OpenVINO couvre la plupart des configurations, et un module Hailo-8L ou Hailo-8 M.2 augmente la capacité de détection (le Google Coral est désormais obsolète). Stockez les enregistrements sur un SSD, ou un NAS pour de nombreuses caméras. Pour un LLM local, passez à un mini-PC avec une iGPU/NPU capable ou un boîtier RTX 3090 d\'occasion.',
        bullets: [
          'Hub : mini-PC Intel N100/N150 ou Raspberry Pi 5',
          'Frigate : iGPU Intel (OpenVINO) ou Hailo-8L M.2 — le Coral est obsolète',
          'Stockage : SSD, ou un NAS pour de nombreuses caméras',
          'Montée en gamme LLM local : iGPU/NPU du mini-PC ou RTX 3090 d\'occasion',
          'Décidez d\'abord : HA seul ou HA + caméras + IA locale',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce que le hub nécessite', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini-PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Serveur dédié', anchor: 'server' },
      { label: 'HA-seul vs HA + IA', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner le hub ; ajoutez une iGPU Intel ou un Hailo-8L pour Frigate, un SSD ou un NAS pour le stockage, et un boîtier RTX 3090 d\'occasion si vous voulez un LLM local.' },
      { type: 'plain-terms', content: 'Le logiciel du hub (Home Assistant) est léger et tourne sur un petit ordinateur comme une Raspberry Pi. La détection de caméras (Frigate) a besoin d\'un accélérateur — une puce graphique Intel via OpenVINO, ou un module Hailo M.2. Ajouter un modèle de langage local demande encore plus de puissance, et c\'est là qu\'un mini-PC avec une puce graphique capable, ou une carte graphique d\'occasion comme une RTX 3090, entre en jeu.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Hub : un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner Home Assistant',
          'Frigate : une iGPU Intel (OpenVINO) ou un module Hailo-8L M.2 accélère la détection de caméras — le Google Coral est désormais obsolète',
          'Stockage : un SSD pour les enregistrements, ou un NAS dès que vous exploitez plusieurs caméras',
          'Montée en gamme LLM local : un mini-PC Ryzen (32 Go de RAM) ou un boîtier RTX 3090 d\'occasion',
          'Une RTX 3090 d\'occasion (24 Go, environ 750–950 €) offre le meilleur rapport qualité-prix pour des modèles jusqu\'à ~70B',
          'Décidez HA-seul vs HA + caméras + IA locale avant d\'acheter — cela change la bonne machine',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Ce que le hub nécessite',
        content:
          '**Home Assistant lui-même est léger et tourne sur du matériel modeste ; les exigences lourdes viennent de la détection de caméras Frigate et d\'un LLM local.** Dimensionnez la machine pour ce que vous allez ajouter, pas seulement pour le hub.',
        items: [
          'Le hub demande peu de puissance pour le contrôle des appareils et les automatisations.',
          'La détection d\'objets Frigate a besoin d\'un accélérateur : une iGPU Intel via OpenVINO couvre la plupart des configurations, et un module Hailo-8L ou Hailo-8 M.2 augmente la capacité. Le Google Coral (TPU USB/M.2) fonctionne toujours, mais il est désormais obsolète — Frigate ne le recommande plus pour les nouvelles installations.',
          'Les modèles Whisper plus grands et l\'inférence de LLM local sont les charges les plus exigeantes — prévoyez la RAM et un GPU/NPU en conséquence.',
          'Stockez les enregistrements de caméras sur un SSD ; passez à un NAS dès que vous exploitez plusieurs caméras en continu.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Une Raspberry Pi 5 est le moyen le moins gourmand en énergie de faire tourner Home Assistant pour un usage maison connectée typique.** Elle peine avec l\'inférence de LLM et les grands modèles Whisper, et une pénurie de DRAM en 2026 a fait grimper les prix des cartes.',
        items: [
          'Excellente pour le contrôle des appareils, les automatisations et une petite configuration vocale locale.',
          'L\'inférence de LLM sur une Pi se limite à des modèles très petits et lents — associez-la à un HAT Hailo-8L M.2 si vous voulez la détection Frigate.',
          'Choisissez une Pi 5 si vous voulez les bases à faible consommation. Les versions 8 Go et 16 Go sont les plus utiles, même si les prix de la mémoire en 2026 font que la carte 16 Go coûte désormais bien plus que son prix de lancement d\'environ 120 $.',
          'Pour un appareil prêt à l\'emploi, le Home Assistant Green est livré opérationnel (environ 179 € en 2026). Le Home Assistant Yellow a été abandonné début 2026.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8 Go)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini-PC (et de la place pour un LLM)',
        content:
          '**Un mini-PC est le meilleur choix en une seule machine pour Home Assistant plus l\'IA locale, avec assez de RAM et une iGPU ou NPU capable pour exécuter un petit LLM et accélérer Frigate.** Il équilibre puissance, taille et coût.',
        items: [
          'Un mini-PC basse consommation Intel N100/N150 fait tourner Home Assistant et accélère Frigate via l\'iGPU Intel (OpenVINO) — l\'option par défaut pour une machine hub-plus-caméras. Le Beelink EQ14 (Intel N150) se situe autour de 220 €.',
          'Pour un LLM local sur la même machine, passez à un mini-PC Ryzen avec 32 Go de RAM : le Beelink SER8 (Ryzen 7 8845HS, environ 819 €) fait tourner un modèle Qwen3 8B ou Llama 3.1 8B via Ollama à une vitesse utilisable. Priorisez la RAM et un GPU intégré ou NPU capable pour une latence plus faible.',
          'Pour des choix précis, voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) et, inter-clusters, [meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Un NAS peut héberger Home Assistant dans un conteneur aux côtés du stockage et des enregistrements Frigate, s\'il a assez de CPU et de RAM.** C\'est pratique si vous en possédez déjà un.',
        items: [
          'Bon pour combiner stockage et services de domotique.',
          'Vérifiez que le NAS a la marge CPU/RAM pour vos add-ons.',
          'L\'inférence de LLM sur un NAS dépend de son matériel — beaucoup n\'ont pas de GPU capable. Exemple : Synology DS925+ ou DS225+ ; les modèles UGREEN NASync intègrent une option de LLM local.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Serveur dédié (montée en gamme LLM)',
        content:
          '**Un serveur dédié avec un GPU dédié constitue la montée en gamme pour exécuter un LLM local plus grand aux côtés de nombreuses caméras.** Il offre le plus de marge à un coût et une consommation supérieurs.',
        items: [
          'Une RTX 3090 d\'occasion (24 Go de VRAM, environ 750–950 € d\'occasion en 2026) offre le meilleur rapport qualité-prix pour des modèles jusqu\'à ~70B en Q4 ; une RTX 3060 (12 Go, environ 320 € d\'occasion) gère des modèles de 7B à 13B pour un budget serré.',
          'Idéal pour de nombreuses caméras, un LLM plus grand et plusieurs utilisateurs. Consommation et coût supérieurs à un mini-PC.',
          'Surdimensionné pour une maison connectée basique — réservez-le à un usage intensif d\'IA locale, et gardez le hub Home Assistant sur une machine séparée à faible consommation pour la fiabilité.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'Capacité de LLM local par niveau de matériel : une Raspberry Pi 5 ne fait tourner que des modèles minuscules, un mini-PC Intel N100/N150 gère de petits modèles, un mini-PC Ryzen (32 Go de RAM) fait tourner des modèles de 7B à 8B, et une RTX 3090 d\'occasion (24 Go de VRAM) monte jusqu\'à environ 70B en quantification Q4.',
      },
      picking: {
        id: 'picking',
        title: 'Choisir pour HA-seul vs HA + IA',
        content:
          '**Choisissez une Pi pour HA-seul et un mini-PC pour HA plus IA locale — cette seule décision détermine le bon matériel.** Adaptez la machine à la charge de travail.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'Arbre de décision pour le matériel de maison connectée : ajouter des caméras Frigate et un LLM local mène à quatre configurations — Raspberry Pi 5, mini-PC Intel N100/N150, mini-PC Ryzen (32 Go de RAM) ou un serveur RTX 3090 (24 Go de VRAM).',
        columns: ['Matériel', 'Prix relatif', 'HA-seul', 'Peut exécuter un LLM local', 'Accélération Frigate'],
        rows: [
          { 'Matériel': 'Raspberry Pi 5', 'Prix relatif': 'Faible', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Très petits seulement, lent', 'Accélération Frigate': 'HAT Hailo-8L M.2' },
          { 'Matériel': 'Mini-PC Intel N100/N150', 'Prix relatif': 'Moyen', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Petits modèles', 'Accélération Frigate': 'iGPU Intel (OpenVINO)' },
          { 'Matériel': 'Mini-PC Ryzen', 'Prix relatif': 'Moyen', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Oui (7B–8B)', 'Accélération Frigate': 'iGPU ou Hailo M.2' },
          { 'Matériel': 'NAS', 'Prix relatif': 'Moyen–élevé', 'HA-seul': 'Oui (conteneur)', 'Peut exécuter un LLM local': 'Dépend du matériel', 'Accélération Frigate': 'Dépend du modèle' },
          { 'Matériel': 'Serveur + RTX 3090 d\'occasion', 'Prix relatif': 'Élevé', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Oui (jusqu\'à ~70B)', 'Accélération Frigate': 'GPU dédié' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quel matériel Frigate recommande-t-il ?', a: 'Pour les nouvelles installations, Frigate recommande une iGPU Intel via OpenVINO, ou un module Hailo-8L (économique) ou Hailo-8 (plus rapide) au format M.2 pour davantage de capacité de détection. Le Google Coral (TPU USB/M.2) fonctionne toujours, mais il est désormais obsolète — Frigate ne le recommande plus pour les nouvelles installations, sauf sur du matériel très basse consommation.' },
          { q: 'Une Raspberry Pi peut-elle aussi exécuter un LLM local ?', a: 'Une Pi ne peut exécuter que des modèles très petits, et lentement, elle n\'est donc pas idéale pour un assistant LLM local réactif. Elle gère bien Home Assistant et la voix basique, mais pour l\'IA locale un mini-PC avec une iGPU ou NPU capable — ou un boîtier RTX 3090 d\'occasion — est le meilleur choix.' },
          { q: 'De combien de RAM ai-je besoin ?', a: 'Home Assistant seul tourne dans quelques gigaoctets. Pour exécuter un petit LLM local et d\'autres services d\'IA sur la même machine, plus de RAM aide ; un mini-PC avec 32 Go de RAM et une iGPU/NPU capable garde un modèle Qwen3 8B ou Llama 3.1 8B réactif. Adaptez la RAM à la taille du modèle prévu.' },
          { q: 'Quel mini-PC choisir ?', a: 'Pour HA plus caméras, un mini-PC Intel N100/N150 accélère Frigate via OpenVINO. Pour HA plus un LLM local, passez à un mini-PC Ryzen avec 32 Go de RAM. Voir le guide des meilleurs mini-PC pour Home Assistant + IA locale pour des choix précis.' },
          { q: 'Une machine ou deux ?', a: 'Une machine (un mini-PC) est la plus simple et fait tourner Home Assistant plus un petit LLM local ensemble. Séparez en deux si vous voulez garder le hub ultra-fiable sur une machine basse consommation et déporter l\'IA lourde vers une machine séparée comme un serveur RTX 3090 d\'occasion.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — choix précis',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — le stack complet',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la machine IA exécute',
          '[Meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm) — inter-clusters : VRAM et détail matériel',
          '[Meilleures batteries solaires de balcon 2026](/fr/balcony-solar/best-balcony-solar-batteries-2026) — stockage batterie pour votre installation locale d\'énergie domestique',
          '[Meilleurs hubs domotiques pour le contrôle local (2027)](/fr/smart-home/best-smart-home-hubs-2027) — hubs domotiques dédiés',
          '[NVIDIA Jetson Orin Nano pour la maison connectée : test (2027)](/fr/smart-home/nvidia-jetson-orin-nano-smart-home-review) — matériel IA local avec GPU',
          '[Meilleurs dongles USB Zigbee et Thread (2027)](/fr/smart-home/best-zigbee-thread-dongles-2027) — matériel radio Zigbee et Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleur Matériel pour une Maison Connectée Locale + IA Locale (2026)',
      description: 'Meilleur matériel maison connectée locale + IA 2026 : mini-PC Intel N100 ou Raspberry Pi 5 comme hub, accélérateur Frigate (iGPU Intel/Hailo), stockage SSD, montée en gamme LLM.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Matériel Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel matériel Frigate recommande-t-il ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour les nouvelles installations, Frigate recommande une iGPU Intel via OpenVINO, ou un module Hailo-8L ou Hailo-8 au format M.2 pour davantage de capacité de détection. Le Google Coral fonctionne toujours, mais il est désormais obsolète et n\'est plus recommandé pour les nouvelles installations.' } },
        { '@type': 'Question', name: 'Une Raspberry Pi peut-elle aussi exécuter un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Une Pi ne peut exécuter que des modèles très petits, et lentement. Elle gère bien Home Assistant et la voix basique, mais pour un assistant LLM local réactif, un mini-PC avec iGPU ou NPU capable, ou un boîtier RTX 3090 d\'occasion, est meilleur.' } },
        { '@type': 'Question', name: 'De combien de RAM ai-je besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant seul tourne dans quelques gigaoctets. Pour exécuter un petit LLM local sur la même machine, plus de RAM aide ; un mini-PC avec 32 Go de RAM garde un modèle Qwen3 8B ou Llama 3.1 8B réactif. Adaptez la RAM à la taille du modèle prévu.' } },
        { '@type': 'Question', name: 'Quel mini-PC choisir ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour HA plus caméras, un mini-PC Intel N100/N150 accélère Frigate via OpenVINO. Pour HA plus un LLM local, passez à un mini-PC Ryzen avec 32 Go de RAM. Voir le guide des meilleurs mini-PC pour Home Assistant + IA locale.' } },
        { '@type': 'Question', name: 'Une machine ou deux ?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini-PC fait tourner Home Assistant plus un petit LLM local ensemble. Séparez en deux si vous voulez le hub ultra-fiable sur une machine basse consommation et l\'IA lourde déportée vers une machine séparée comme un serveur RTX 3090 d\'occasion.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-ja.png',
    affiliateDisclosure: true,
    title: 'ローカルスマートホーム + ローカルAIに最適なハードウェア（2026）',
    seoTitle: '最適なハードウェア：ローカルSH + AI（2026）',
    intro:
      'ローカルスマートホームに最適なハードウェアは、次の判断に従います。ハブは Intel N100/N150 ミニPC または Raspberry Pi 5、Frigate のカメラ検出は Intel 内蔵GPU（OpenVINO）または Hailo-8L M.2 モジュールで加速し、録画は SSD または NAS に保存、ローカルLLM を動かしたいなら中古の RTX 3090 搭載機がその上位選択肢です。本ガイドは各層を選び、HAのみか HA＋AI かの判断を助けます——VRAM の詳細は外部リンクへ。',
    metaDescription:
      'ローカルスマートホーム＋AIの最適ハードウェア（2026年）：Intel N100 ミニPC または Raspberry Pi 5 のハブ、Frigate 加速（Intel 内蔵GPU／Hailo）、SSD ストレージ、LLM 用の上位構成を解説。',
    twitterDescription:
      'ローカルスマートホームのハードウェア（2026年）：ハブは Intel N100 ミニPC または Pi 5、Frigate 加速は Intel 内蔵GPU／Hailo-8L、SSD ストレージ、ローカルLLM は中古 RTX 3090。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant とローカルAIを動かすハードウェアを選ぶ購入者',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      '最適 ハードウェア home assistant ローカルai',
      'home assistant ハードウェア',
      'ミニpc home assistant ローカルllm',
      'raspberry pi 対 ミニpc home assistant',
      'ローカル スマートホーム サーバー',
    ],
    leadAnswerBlock:
      '**ローカルスマートホームは4つの層で構築します。ハブ（Intel N100/N150 ミニPC または Raspberry Pi 5）、Frigate 加速器（OpenVINO 経由の Intel 内蔵GPU または Hailo-8L M.2 モジュール）、ストレージ（SSD、カメラが多いなら NAS）、そしてローカルLLM が欲しいなら中古 RTX 3090 のような上位構成です。** Home Assistant 単体なら Raspberry Pi で十分——決め手はカメラ検出とローカルAIを加えるかどうかです。',
    quickAnswerTop: {
      ja: {
        question: 'AI付きのローカルスマートホームにはどんなハードウェアが必要ですか？',
        answer:
          'まずハブから始めます。Intel N100/N150 ミニPC または Raspberry Pi 5 が Home Assistant を動かします。カメラ用に Frigate 加速器を追加——OpenVINO 経由の Intel 内蔵GPU がほとんどの構成をカバーし、Hailo-8L または Hailo-8 M.2 モジュールが検出能力を高めます（Google Coral は現在レガシー扱いです）。録画は SSD、カメラが多いなら NAS に保存します。ローカルLLM には、高性能な内蔵GPU/NPU を備えたミニPC、または中古の RTX 3090 搭載機に上げましょう。',
        bullets: [
          'ハブ：Intel N100/N150 ミニPC または Raspberry Pi 5',
          'Frigate：Intel 内蔵GPU（OpenVINO）または Hailo-8L M.2——Coral はレガシー',
          'ストレージ：SSD、カメラが多いなら NAS',
          'ローカルLLM の上位構成：ミニPC の内蔵GPU/NPU または中古 RTX 3090',
          'まず決める：HAのみか、HA＋カメラ＋ローカルAIか',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'ハブに必要なもの', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'ミニPC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: '専用サーバー', anchor: 'server' },
      { label: 'HAのみ 対 HA＋AI', anchor: 'picking' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Intel N100/N150 ミニPC または Raspberry Pi 5 がハブを動かし、Frigate には Intel 内蔵GPU または Hailo-8L、ストレージには SSD または NAS、ローカルLLM が欲しいなら中古 RTX 3090 搭載機を加えます。' },
      { type: 'plain-terms', content: 'ハブのソフト（Home Assistant）は軽量で、Raspberry Pi のような小型コンピューターで動きます。カメラ検出（Frigate）には加速器が必要です——OpenVINO 経由の Intel グラフィックチップ、または Hailo の M.2 モジュールです。ローカルの言語モデルを加えるにはさらに多くの性能が必要で、そこで高性能なグラフィックチップを備えたミニPCや、RTX 3090 のような中古グラフィックカードが活きてきます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'ハブ：Intel N100/N150 ミニPC または Raspberry Pi 5 が Home Assistant を動かす',
          'Frigate：Intel 内蔵GPU（OpenVINO）または Hailo-8L M.2 モジュールがカメラ検出を加速——Google Coral は現在レガシー',
          'ストレージ：録画は SSD、カメラを複数台常時運用するなら NAS',
          'ローカルLLM の上位構成：Ryzen ミニPC（RAM 32GB）または中古 RTX 3090 搭載機',
          '中古 RTX 3090（24GB、約9.5万〜12.5万円）は約70Bまでのモデルで最もコスパが良い',
          '購入前に HAのみ 対 HA＋カメラ＋ローカルAI を決める——適切な機器が変わる',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'ハブに必要なもの',
        content:
          '**Home Assistant 自体は軽量で控えめなハードウェアで動きます；重い要求は Frigate のカメラ検出とローカルLLM から来ます。** ハブだけでなく、追加するものに合わせて機器を選びましょう。',
        items: [
          'ハブは機器制御と自動化にほとんど計算力を要しません。',
          'Frigate の物体検出には加速器が必要です。OpenVINO 経由の Intel 内蔵GPU がほとんどの構成をカバーし、Hailo-8L または Hailo-8 M.2 モジュールが検出能力を高めます。Google Coral の USB/M.2 TPU は今も動作しますが現在はレガシー扱いで、Frigate は新規構築には推奨していません。',
          'より大きな Whisper モデルとローカルLLM 推論が最も要求の高いワークロードです——これらを軸に RAM と GPU/NPU を計画しましょう。',
          'カメラの録画は SSD に保存し、複数台のカメラを常時運用するようになったら NAS に移行しましょう。',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 5 は、一般的なスマートホーム用途で Home Assistant を動かす最も低消費電力な方法です。** LLM推論や大きな Whisper モデルには苦労し、2026年の DRAM 不足でボードの価格は大きく上昇しています。',
        items: [
          '機器制御、自動化、小規模なローカル音声構成に最適。',
          'Pi 上の LLM 推論は非常に小さく遅いモデルに限られます。Frigate 検出が欲しいなら Hailo-8L M.2 HAT と組み合わせましょう。',
          '低消費電力で基本が欲しいなら Pi 5 を選びましょう。実用的なのは 8GB と 16GB の SKU ですが、2026年のメモリ価格高騰により 16GB ボードは発売時の約120ドル（当時の実売水準）よりはるかに高くなっています。',
          'すぐ使える完成品としては、Home Assistant Green が組み立て済みで届きます（2026年時点で約3万円）。Home Assistant Yellow は2026年初頭に生産終了しました。',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5（8GB）', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'ミニPC（と LLM の余地）',
        content:
          '**ミニPCは、十分な RAM と高性能な内蔵GPU または NPU を備えた、Home Assistant＋ローカルAIに最適な一台の選択です。** 性能・サイズ・コストのバランスが取れています。',
        items: [
          '低消費電力の Intel N100/N150 ミニPC は Home Assistant を動かし、Intel 内蔵GPU（OpenVINO）で Frigate を加速します——ハブ＋カメラ機の現実的な標準構成です。Beelink EQ14（Intel N150）は約3万〜3.5万円。',
          '同じ機器でローカルLLM も動かすなら、RAM 32GB の Ryzen ミニPC に上げましょう。Beelink SER8（Ryzen 7 8845HS、約10万円）は Ollama 経由で Qwen3 8B や Llama 3.1 8B モデルを実用的な速度で動かせます。低レイテンシのために RAM と高性能な内蔵GPU/NPU を優先しましょう。',
          '具体的な候補は[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)、クラスター横断で[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm)を参照。',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8（Ryzen 7 8845HS）', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14（Intel N150）', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**NAS は、十分な CPU と RAM があれば、ストレージや Frigate の録画と並べてコンテナで Home Assistant をホストできます。** すでに所有しているなら便利です。',
        items: [
          'ストレージとホームオートメーションのサービスを組み合わせるのに適します。',
          'NAS にアドオン用の CPU/RAM の余裕があるか確認しましょう。',
          'NAS 上の LLM 推論はそのハードウェア次第——多くは高性能な GPU を欠きます。例：Synology DS925+ または DS225+；UGREEN NASync モデルはローカル LLM オプションを内蔵します。',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: '専用サーバー（LLM の上位構成）',
        content:
          '**ディスクリートGPUを搭載した専用サーバーは、多数のカメラと並行してより大きなローカルLLM を動かすための上位構成です。** より高いコストと消費電力で最大の余裕を提供します。',
        items: [
          '中古の RTX 3090（VRAM 24GB、2026年の中古相場で約9.5万〜12.5万円）は、約70Bまでのモデルを Q4 精度で動かす最もコスパの良い構成です。RTX 3060（12GB、中古約2.3万〜2.8万円）は予算重視で 7B〜13B モデルを扱えます。',
          '多数のカメラ、より大きな LLM、複数ユーザーに最適。ミニPCより消費電力もコストも高くなります。',
          '基本的なスマートホームには過剰——重いローカルAI用途に取っておき、信頼性のために Home Assistant のハブは別の低消費電力機に分けましょう。',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'ハードウェア階層別のローカルLLM容量：Raspberry Pi 5 は極小モデルのみ、Intel N100/N150 ミニPC は小型モデルを処理、Ryzen ミニPC（RAM 32GB）は 7B〜8B モデルを実行、中古 RTX 3090（VRAM 24GB）は Q4 量子化で約70Bまで対応します。',
      },
      picking: {
        id: 'picking',
        title: 'HAのみ 対 HA＋AI で選ぶ',
        content:
          '**HAのみなら Raspberry Pi 5、HA＋ローカルAIならミニPCを選びましょう——この一つの判断が適切なハードウェアを決めます。** 機器をワークロードに合わせます。',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'スマートホーム機器の決定木：Frigate カメラの追加とローカルLLMの追加という2つの分岐から、Raspberry Pi 5、Intel N100/N150 ミニPC、Ryzen ミニPC（RAM 32GB）、RTX 3090 サーバー（VRAM 24GB）の4通りの構成に分かれます。',
        columns: ['ハードウェア', '相対価格', 'HAのみ', 'ローカルLLMを動かせるか', 'Frigate 加速'],
        rows: [
          { 'ハードウェア': 'Raspberry Pi 5', '相対価格': '低', 'HAのみ': '可', 'ローカルLLMを動かせるか': '非常に小型のみ、遅い', 'Frigate 加速': 'Hailo-8L M.2 HAT' },
          { 'ハードウェア': 'Intel N100/N150 ミニPC', '相対価格': '中', 'HAのみ': '可', 'ローカルLLMを動かせるか': '小型モデル', 'Frigate 加速': 'Intel 内蔵GPU（OpenVINO）' },
          { 'ハードウェア': 'Ryzen ミニPC', '相対価格': '中', 'HAのみ': '可', 'ローカルLLMを動かせるか': '可（7B〜8B）', 'Frigate 加速': '内蔵GPU または Hailo M.2' },
          { 'ハードウェア': 'NAS', '相対価格': '中〜高', 'HAのみ': '可（コンテナ）', 'ローカルLLMを動かせるか': 'ハードウェア次第', 'Frigate 加速': 'モデル次第' },
          { 'ハードウェア': 'サーバー＋中古 RTX 3090', '相対価格': '高', 'HAのみ': '可', 'ローカルLLMを動かせるか': '可（約70Bまで）', 'Frigate 加速': 'ディスクリートGPU' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Frigate はどんなハードウェアを推奨していますか？', a: '新規構築では、OpenVINO 経由の Intel 内蔵GPU、または検出能力を高める Hailo-8L（低価格）や Hailo-8（高速）の M.2 モジュールが推奨されます。Google Coral の USB/M.2 TPU は今も動作しますが現在はレガシー扱いで、非常に低消費電力な構成を除き Frigate は新規インストールには推奨していません。' },
          { q: 'Raspberry Pi でもローカルLLMを動かせますか？', a: 'Pi は非常に小型のモデルを遅く動かせるだけなので、反応の良いローカルLLMアシスタントには不向きです。Home Assistant と基本的な音声はよく動かしますが、ローカルAIには高性能な内蔵GPU または NPU 付きのミニPC、または中古 RTX 3090 搭載機がより良い選択です。' },
          { q: 'RAM はどれくらい必要ですか？', a: 'Home Assistant 単体なら数ギガバイトで動きます。同じ機器で小型のローカルLLMや他のAIサービスを動かすには RAM が多いほど助かります；RAM 32GB で高性能な内蔵GPU/NPU を備えたミニPCは Qwen3 8B や Llama 3.1 8B モデルを反応良く保ちます。動かす予定のモデルサイズに RAM を合わせましょう。' },
          { q: 'どのミニPCを買うべきですか？', a: 'HA＋カメラなら、Intel N100/N150 ミニPC が OpenVINO 経由で Frigate を加速します。HA＋ローカルLLM なら、RAM 32GB の Ryzen ミニPC に上げましょう。候補は Home Assistant＋ローカルAIに最適なミニPCのガイドを参照してください。' },
          { q: '一台ですか、二台ですか？', a: '一台（ミニPC）が最もシンプルで、Home Assistant と小型のローカルLLMを一緒に動かせます。ハブを極めて安定させ、重いAIを中古 RTX 3090 サーバーのような別マシンに任せたい場合は二台に分けましょう。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — 具体的な候補',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 構成の全体',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — AI機器が何を動かすか',
          '[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm) — クラスター横断：VRAM とハードウェアの詳細',
          '[2026年おすすめバルコニー太陽光バッテリー](/ja/balcony-solar/best-balcony-solar-batteries-2026) — ローカルホームエネルギー設備のためのバッテリーストレージ',
          '[ローカル制御向けベストスマートホームハブ（2027年）](/ja/smart-home/best-smart-home-hubs-2027) — 専用ハブのおすすめ',
          '[NVIDIA Jetson Orin Nanoでスマートホームaiを実現：レビュー（2027年）](/ja/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU搭載のローカルAIハードウェア',
          '[最良のZigbee・Thread USBドングル(2027年版)](/ja/smart-home/best-zigbee-thread-dongles-2027) — Zigbee/Thread無線ハードウェア',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルスマートホーム + ローカルAIに最適なハードウェア（2026）',
      description: 'ローカルスマートホーム＋AIの最適ハードウェア（2026年）：Intel N100 ミニPC または Raspberry Pi 5 のハブ、Frigate 加速（Intel 内蔵GPU／Hailo）、SSD ストレージ、LLM 用の上位構成を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Home Assistant ハードウェア' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'ミニPC' }, { '@type': 'Thing', name: 'ローカルLLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate はどんなハードウェアを推奨していますか？', acceptedAnswer: { '@type': 'Answer', text: '新規構築では OpenVINO 経由の Intel 内蔵GPU、または Hailo-8L や Hailo-8 の M.2 モジュールが検出能力を高めます。Google Coral の TPU は今も動作しますが現在はレガシー扱いで、新規インストールには推奨されません。' } },
        { '@type': 'Question', name: 'Raspberry Pi でもローカルLLMを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'Pi は非常に小型のモデルを遅く動かせるだけです。Home Assistant と基本的な音声はよく動かしますが、反応の良いローカルLLMアシスタントには高性能な内蔵GPU または NPU 付きのミニPC、または中古 RTX 3090 搭載機が良いです。' } },
        { '@type': 'Question', name: 'RAM はどれくらい必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 単体なら数ギガバイトで動きます。同じ機器で小型のローカルLLMを動かすには RAM が多いほど助かります；RAM 32GB のミニPCは Qwen3 8B や Llama 3.1 8B モデルを反応良く保ちます。動かす予定のモデルサイズに RAM を合わせましょう。' } },
        { '@type': 'Question', name: 'どのミニPCを買うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'HA＋カメラなら Intel N100/N150 ミニPC が OpenVINO 経由で Frigate を加速します。HA＋ローカルLLM なら RAM 32GB の Ryzen ミニPC に上げましょう。Home Assistant＋ローカルAIに最適なミニPCのガイドを参照してください。' } },
        { '@type': 'Question', name: '一台ですか、二台ですか？', acceptedAnswer: { '@type': 'Answer', text: 'ミニPC一台で Home Assistant と小型のローカルLLMを一緒に動かせます。ハブを極めて安定させ、重いAIを中古 RTX 3090 サーバーのような別マシンに任せたいなら二台に分けましょう。' } },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-pt.png',
    affiliateDisclosure: true,
    title: 'Melhor Hardware para uma Casa Inteligente Local + IA Local (2026)',
    seoTitle: 'Melhor Hardware: Casa Inteligente Local + IA (2026)',
    intro:
      'O melhor hardware para uma casa inteligente local segue uma única decisão: um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o hub Home Assistant, uma iGPU Intel (OpenVINO) ou um módulo Hailo-8L M.2 acelera a detecção de câmeras do Frigate, um SSD ou NAS armazena as gravações, e um servidor com RTX 3090 usada é o passo seguinte para rodar um LLM local. Este guia escolhe cada camada e ajuda você a decidir entre só-HA e HA-mais-IA, com link externo para a profundidade de VRAM.',
    metaDescription:
      'Melhor hardware para casa inteligente local + IA em 2026: hub mini PC Intel N100 ou Raspberry Pi 5, acelerador do Frigate (iGPU Intel/Hailo), armazenamento SSD e um passo seguinte para LLM.',
    twitterDescription:
      'Hardware para casa inteligente local em 2026: hub mini PC Intel N100 ou Pi 5, acelerador do Frigate (iGPU Intel/Hailo-8L), armazenamento SSD, RTX 3090 usada para um LLM local.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores escolhendo hardware para Home Assistant e IA local',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'melhor hardware home assistant ia local',
      'home assistant hardware',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'servidor casa inteligente local',
    ],
    leadAnswerBlock:
      '**Monte uma casa inteligente local em quatro camadas: o hub (mini PC Intel N100/N150 ou Raspberry Pi 5), um acelerador para o Frigate (iGPU Intel via OpenVINO ou um módulo Hailo-8L M.2), armazenamento (um SSD, ou um NAS para muitas câmeras) e — se você quiser um LLM local — um equipamento de passo seguinte, como uma RTX 3090 usada.** Para o Home Assistant sozinho, uma Raspberry Pi basta; o fator decisivo é se você adiciona detecção de câmeras e IA local.',
    quickAnswerTop: {
      pt: {
        question: 'Qual hardware preciso para uma casa inteligente local com IA?',
        answer:
          'Comece pelo hub: um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o Home Assistant. Adicione um acelerador para o Frigate cuidar das câmeras — uma iGPU Intel via OpenVINO cobre a maioria das configurações, e um módulo Hailo-8L ou Hailo-8 M.2 adiciona capacidade de detecção (o Google Coral já é legado). Armazene as gravações em um SSD, ou em um NAS para muitas câmeras. Para um LLM local, suba para um mini PC com iGPU/NPU capaz ou um servidor com RTX 3090 usada.',
        bullets: [
          'Hub: mini PC Intel N100/N150 ou Raspberry Pi 5',
          'Frigate: iGPU Intel (OpenVINO) ou Hailo-8L M.2 — o Coral já é legado',
          'Armazenamento: SSD, ou um NAS para muitas câmeras',
          'Passo seguinte para LLM local: iGPU/NPU do mini PC ou RTX 3090 usada',
          'Decida primeiro: só-HA ou HA + câmeras + IA local',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que o hub precisa', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Servidor dedicado', anchor: 'server' },
      { label: 'Só-HA vs HA + IA', anchor: 'picking' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o hub; adicione uma iGPU Intel ou um Hailo-8L para o Frigate, um SSD ou NAS para armazenamento, e um servidor com RTX 3090 usada se você quiser um LLM local.' },
      { type: 'plain-terms', content: 'O software do hub (Home Assistant) é leve e roda em um computador pequeno como uma Raspberry Pi. A detecção de câmeras (Frigate) precisa de um acelerador — um chip gráfico Intel via OpenVINO, ou um módulo Hailo M.2. Adicionar um modelo de linguagem local exige ainda mais potência, e é aí que entram um mini PC com um chip gráfico capaz, ou uma placa de vídeo usada como a RTX 3090.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Hub: um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o Home Assistant',
          'Frigate: uma iGPU Intel (OpenVINO) ou um módulo Hailo-8L M.2 acelera a detecção de câmeras — o Google Coral já é legado',
          'Armazenamento: um SSD para as gravações, ou um NAS a partir de várias câmeras',
          'Passo seguinte para LLM local: um mini PC Ryzen (32GB de RAM) ou um servidor com RTX 3090 usada',
          'Uma RTX 3090 usada (24GB, ~R$4.500–6.000) é o melhor custo-benefício para modelos de até ~70B',
          'Decida só-HA vs HA + câmeras + IA local antes de comprar — isso muda o equipamento certo',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'O que o hub precisa',
        content:
          '**O próprio Home Assistant é leve e roda em hardware modesto; as demandas pesadas vêm da detecção de câmeras do Frigate e de um LLM local.** Dimensione o equipamento para o que você vai adicionar, não só para o hub.',
        items: [
          'O hub precisa de pouco processamento para o controle de dispositivos e as automações.',
          'A detecção de objetos do Frigate precisa de um acelerador: uma iGPU Intel via OpenVINO cobre a maioria das configurações, e um módulo Hailo-8L ou Hailo-8 M.2 adiciona capacidade. O TPU Google Coral USB/M.2 ainda funciona, mas já é legado — o Frigate não recomenda mais para novas montagens.',
          'Modelos Whisper maiores e a inferência de LLM local são as cargas mais exigentes — planeje a RAM e uma GPU/NPU em torno delas.',
          'Armazene as gravações de câmera em um SSD; migre para um NAS quando você rodar várias câmeras continuamente.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Uma Raspberry Pi 5 é a forma de menor consumo de rodar o Home Assistant para o uso típico de casa inteligente.** Ela tem dificuldade com inferência de LLM e modelos Whisper grandes, e a escassez de DRAM de 2026 empurrou os preços das placas para cima.',
        items: [
          'Ótima para controle de dispositivos, automações e uma pequena configuração de voz local.',
          'A inferência de LLM em uma Pi se limita a modelos muito pequenos e lentos — combine com um HAT Hailo-8L M.2 se quiser detecção do Frigate.',
          'Escolha uma Pi 5 se você quer o básico com baixo consumo. Os modelos de 8GB e 16GB são os úteis, embora os preços de memória de 2026 façam a placa de 16GB custar bem mais que seu preço de lançamento de cerca de R$650.',
          'Para um aparelho pronto para usar, o Home Assistant Green já vem configurado (cerca de R$1.400–1.600 em 2026). O Home Assistant Yellow foi descontinuado no início de 2026.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (e espaço para um LLM)',
        content:
          '**Um mini PC é a melhor escolha de equipamento único para Home Assistant mais IA local, com RAM suficiente e uma iGPU ou NPU capaz para rodar um LLM pequeno e acelerar o Frigate.** Ele equilibra potência, tamanho e custo.',
        items: [
          'Um mini PC Intel N100/N150 de baixo consumo roda o Home Assistant e acelera o Frigate via iGPU Intel (OpenVINO) — a escolha padrão para um equipamento de hub mais câmeras. O Beelink EQ14 (Intel N150) fica em torno de R$1.300–1.500.',
          'Para um LLM local no mesmo equipamento, suba para um mini PC Ryzen com 32GB de RAM: o Beelink SER8 (Ryzen 7 8845HS, ~R$4.500–5.000) roda um modelo Qwen3 8B ou Llama 3.1 8B via Ollama em velocidade utilizável. Priorize RAM e uma GPU integrada ou NPU capaz para menor latência.',
          'Para escolhas específicas, veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) e, entre clusters, [melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Um NAS pode hospedar o Home Assistant em um contêiner ao lado do armazenamento e das gravações do Frigate, se tiver CPU e RAM suficientes.** É conveniente se você já tem um.',
        items: [
          'Bom para combinar armazenamento com serviços de automação residencial.',
          'Verifique se o NAS tem folga de CPU/RAM para seus complementos.',
          'A inferência de LLM em um NAS depende do hardware dele — muitos não têm uma GPU capaz. Exemplo: Synology DS925+ ou DS225+; os modelos UGREEN NASync trazem uma opção de LLM local integrada.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Servidor dedicado (passo seguinte para LLM)',
        content:
          '**Um servidor dedicado com GPU dedicada é o passo seguinte para rodar um LLM local maior ao lado de muitas câmeras.** Ele oferece a maior folga a maior custo e consumo.',
        items: [
          'Uma RTX 3090 usada (24GB de VRAM, ~R$4.500–6.000 usada em 2026) é o equipamento de melhor custo-benefício para rodar modelos de até ~70B em Q4; uma RTX 3060 (12GB, ~R$1.100–1.400 usada) dá conta de modelos de 7B–13B com orçamento reduzido.',
          'Melhor para muitas câmeras, um LLM maior e vários usuários. Maior consumo e custo que um mini PC.',
          'Exagero para uma casa inteligente básica — reserve para uso intenso de IA local, e mantenha o hub do Home Assistant em um equipamento separado de baixo consumo para mais confiabilidade.',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'Capacidade de LLM local por nível de hardware: um Raspberry Pi 5 só roda modelos minúsculos, um mini PC Intel N100/N150 lida com modelos pequenos, um mini PC Ryzen (32GB de RAM) roda modelos de 7B–8B, e uma RTX 3090 usada (24GB de VRAM) chega a cerca de 70B em quantização Q4.',
      },
      picking: {
        id: 'picking',
        title: 'Escolher para só-HA vs HA + IA',
        content:
          '**Escolha uma Pi para só-HA e um mini PC para HA mais IA local — essa única decisão define o hardware certo.** Ajuste o equipamento à carga de trabalho.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'Árvore de decisão para hardware de casa inteligente: adicionar câmeras Frigate e um LLM local leva a quatro montagens — Raspberry Pi 5, mini PC Intel N100/N150, mini PC Ryzen (32GB de RAM) ou um servidor RTX 3090 (24GB de VRAM).',
        columns: ['Hardware', 'Preço relativo', 'Só-HA', 'Pode rodar um LLM local', 'Aceleração do Frigate'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Preço relativo': 'Baixo', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Só muito pequenos, lento', 'Aceleração do Frigate': 'HAT Hailo-8L M.2' },
          { 'Hardware': 'Mini PC Intel N100/N150', 'Preço relativo': 'Médio', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Modelos pequenos', 'Aceleração do Frigate': 'iGPU Intel (OpenVINO)' },
          { 'Hardware': 'Mini PC Ryzen', 'Preço relativo': 'Médio', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Sim (7B–8B)', 'Aceleração do Frigate': 'iGPU ou Hailo M.2' },
          { 'Hardware': 'NAS', 'Preço relativo': 'Médio–alto', 'Só-HA': 'Sim (contêiner)', 'Pode rodar um LLM local': 'Depende do hardware', 'Aceleração do Frigate': 'Depende do modelo' },
          { 'Hardware': 'Servidor + RTX 3090 usada', 'Preço relativo': 'Alto', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Sim (até ~70B)', 'Aceleração do Frigate': 'GPU dedicada' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual hardware o Frigate recomenda?', a: 'Para novas montagens, o Frigate recomenda uma iGPU Intel via OpenVINO, ou um módulo Hailo-8L (econômico) ou Hailo-8 (mais rápido) M.2 para mais capacidade de detecção. O TPU Google Coral USB/M.2 ainda funciona, mas já é legado — o Frigate não recomenda mais para novas instalações, exceto em hardware de consumo muito baixo.' },
          { q: 'Uma Raspberry Pi também pode rodar um LLM local?', a: 'Uma Pi só consegue rodar modelos muito pequenos, e devagar, então não é ideal para um assistente de LLM local responsivo. Ela dá conta bem do Home Assistant e da voz básica, mas para IA local um mini PC com uma iGPU ou NPU capaz — ou um servidor com RTX 3090 usada — é a melhor escolha.' },
          { q: 'De quanta RAM eu preciso?', a: 'O Home Assistant sozinho roda em poucos gigabytes. Para rodar um LLM local pequeno e outros serviços de IA no mesmo equipamento, mais RAM ajuda; um mini PC com 32GB de RAM e uma iGPU/NPU capaz mantém um modelo Qwen3 8B ou Llama 3.1 8B responsivo. Ajuste a RAM ao tamanho do modelo que você planeja rodar.' },
          { q: 'Qual mini PC eu deveria comprar?', a: 'Para HA mais câmeras, um mini PC Intel N100/N150 acelera o Frigate via OpenVINO. Para HA mais um LLM local, suba para um mini PC Ryzen com 32GB de RAM. Veja o guia dos melhores mini PCs para Home Assistant + IA local para escolhas específicas.' },
          { q: 'Um equipamento ou dois?', a: 'Um equipamento (um mini PC) é o mais simples e roda o Home Assistant mais um LLM local pequeno juntos. Divida em dois se você quiser manter o hub ultraconfiável em um equipamento de baixo consumo e descarregar a IA pesada para uma máquina separada, como um servidor com RTX 3090 usada.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — escolhas específicas',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o stack completo',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — o que o equipamento de IA roda',
          '[Melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm) — entre clusters: VRAM e detalhe de hardware',
          '[Melhores baterias de solar de varanda 2026](/pt/balcony-solar/best-balcony-solar-batteries-2026) — armazenamento em bateria para sua configuração local de energia doméstica',
          '[Os melhores hubs de casa inteligente para controle local (2027)](/pt/smart-home/best-smart-home-hubs-2027) — hubs dedicados recomendados',
          '[NVIDIA Jetson Orin Nano para IA em casa inteligente: análise (2027)](/pt/smart-home/nvidia-jetson-orin-nano-smart-home-review) — hardware de IA local com GPU',
          '[Os melhores dongles USB Zigbee e Thread (2027)](/pt/smart-home/best-zigbee-thread-dongles-2027) — hardware de rádio para Zigbee e Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhor Hardware para uma Casa Inteligente Local + IA Local (2026)',
      description: 'Melhor hardware para casa inteligente local + IA em 2026: hub mini PC Intel N100 ou Raspberry Pi 5, acelerador do Frigate (iGPU Intel/Hailo), armazenamento SSD e um passo seguinte para LLM.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'pt',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Hardware do Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt',
      mainEntity: [
        { '@type': 'Question', name: 'Qual hardware o Frigate recomenda?', acceptedAnswer: { '@type': 'Answer', text: 'Para novas montagens, o Frigate recomenda uma iGPU Intel via OpenVINO, ou um módulo Hailo-8L ou Hailo-8 M.2 para mais capacidade de detecção. O TPU Google Coral ainda funciona, mas já é legado e não é mais recomendado para novas instalações.' } },
        { '@type': 'Question', name: 'Uma Raspberry Pi também pode rodar um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Uma Pi só consegue rodar modelos muito pequenos e devagar. Ela dá conta bem do Home Assistant e da voz básica, mas para um assistente de LLM local responsivo um mini PC com iGPU ou NPU capaz, ou um servidor com RTX 3090 usada, é melhor.' } },
        { '@type': 'Question', name: 'De quanta RAM eu preciso?', acceptedAnswer: { '@type': 'Answer', text: 'O Home Assistant sozinho roda em poucos gigabytes. Para rodar um LLM local pequeno no mesmo equipamento, mais RAM ajuda; um mini PC com 32GB de RAM mantém um modelo Qwen3 8B ou Llama 3.1 8B responsivo. Ajuste a RAM ao tamanho do modelo que você planeja rodar.' } },
        { '@type': 'Question', name: 'Qual mini PC eu deveria comprar?', acceptedAnswer: { '@type': 'Answer', text: 'Para HA mais câmeras, um mini PC Intel N100/N150 acelera o Frigate via OpenVINO. Para HA mais um LLM local, suba para um mini PC Ryzen com 32GB de RAM. Veja o guia dos melhores mini PCs para Home Assistant + IA local.' } },
        { '@type': 'Question', name: 'Um equipamento ou dois?', acceptedAnswer: { '@type': 'Answer', text: 'Um mini PC roda o Home Assistant mais um LLM local pequeno juntos. Divida em dois se quiser o hub ultraconfiável em um equipamento de baixo consumo e a IA pesada descarregada para uma máquina separada, como um servidor com RTX 3090 usada.' } },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-07-02',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-zh.png',
    affiliateDisclosure: true,
    title: '本地智能家居 + 本地 AI 的最佳硬件（2026）',
    seoTitle: '最佳硬件：本地智能家居 + AI（2026）',
    intro:
      '本地智能家居的最佳硬件遵循一个思路：用 Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行 Home Assistant 中枢，用 Intel 集成显卡（OpenVINO）或 Hailo-8L M.2 模块加速 Frigate 摄像头检测，用 SSD 或 NAS 存储录像，若想运行本地 LLM，则用二手 RTX 3090 主机升级。本指南逐层给出选择，并帮你在仅-HA 与 HA-加-AI 之间做决定，VRAM 的深入内容走外链。',
    metaDescription:
      '2026年本地智能家居 + AI 硬件推荐：Intel N100 迷你 PC 或 Raspberry Pi 5 中枢，Frigate 加速方案（Intel 集成显卡/Hailo），SSD 存储，以及本地 LLM 升级选项。',
    twitterDescription:
      '2026本地智能家居硬件：Intel N100 迷你 PC 或 Pi 5 中枢，Frigate 加速用 Intel 集成显卡或 Hailo-8L，SSD 存储，二手 RTX 3090 跑本地 LLM。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '为运行 Home Assistant 和本地 AI 选购硬件的人',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      '最佳硬件 home assistant 本地ai',
      'home assistant 硬件',
      '迷你pc home assistant 本地llm',
      'raspberry pi 对 迷你pc home assistant',
      '本地 智能家居 服务器',
    ],
    leadAnswerBlock:
      '**本地智能家居分四层搭建：中枢（Intel N100/N150 迷你 PC 或 Raspberry Pi 5）、Frigate 加速器（经由 OpenVINO 的 Intel 集成显卡，或 Hailo-8L M.2 模块）、存储（SSD，摄像头多则用 NAS），以及——如果你想要本地 LLM——一台升级主机，例如二手 RTX 3090。** 仅运行 Home Assistant 的话，Raspberry Pi 就够用；决定性因素是你是否要加入摄像头检测和本地 AI。',
    quickAnswerTop: {
      zh: {
        question: '带 AI 的本地智能家居需要什么硬件？',
        answer:
          '先从中枢开始：Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行 Home Assistant。再为摄像头加一个 Frigate 加速器——经由 OpenVINO 的 Intel 集成显卡能覆盖大多数配置，Hailo-8L 或 Hailo-8 M.2 模块可提升检测容量（Google Coral 现已过时）。录像存到 SSD，摄像头多的话用 NAS。要跑本地 LLM，就升级到带强力集成显卡/NPU 的迷你 PC，或一台二手 RTX 3090 主机。',
        bullets: [
          '中枢：Intel N100/N150 迷你 PC 或 Raspberry Pi 5',
          'Frigate：Intel 集成显卡（OpenVINO）或 Hailo-8L M.2——Coral 已过时',
          '存储：SSD，摄像头多则用 NAS',
          '本地 LLM 升级：迷你 PC 集成显卡/NPU 或二手 RTX 3090',
          '先决定：仅-HA 还是 HA + 摄像头 + 本地 AI',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '中枢需要什么', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: '迷你 PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: '专用服务器', anchor: 'server' },
      { label: '仅-HA 对 HA + AI', anchor: 'picking' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行中枢；Frigate 加 Intel 集成显卡或 Hailo-8L，存储用 SSD 或 NAS，想要本地 LLM 就上二手 RTX 3090 主机。' },
      { type: 'plain-terms', content: '中枢软件（Home Assistant）很轻量，可在 Raspberry Pi 这样的小电脑上运行。摄像头检测（Frigate）需要加速器——经由 OpenVINO 的 Intel 显示芯片，或一块 Hailo M.2 模块。加入本地语言模型则需要更强的算力，这正是带强力显示芯片的迷你 PC，或二手显卡如 RTX 3090 派上用场的地方。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '中枢：Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行 Home Assistant',
          'Frigate：Intel 集成显卡（OpenVINO）或 Hailo-8L M.2 模块加速摄像头检测——Google Coral 现已过时',
          '存储：录像用 SSD，摄像头多起来后再上 NAS',
          '本地 LLM 升级：Ryzen 迷你 PC（32GB 内存）或二手 RTX 3090 主机',
          '二手 RTX 3090（24GB，约 600–800 美元）在最高约 70B 模型上性价比最佳',
          '购买前先决定仅-HA 还是 HA + 摄像头 + 本地 AI——这会改变合适的设备',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: '中枢需要什么',
        content:
          '**Home Assistant 本身很轻量，在普通硬件上即可运行；繁重需求来自 Frigate 摄像头检测和本地 LLM。** 按你要添加的内容来选设备，而不仅是中枢本身。',
        items: [
          '中枢在设备控制和自动化上几乎不需要算力。',
          'Frigate 物体检测需要加速器：经由 OpenVINO 的 Intel 集成显卡能处理大多数配置，Hailo-8L 或 Hailo-8 M.2 模块可提升容量。Google Coral USB/M.2 TPU 仍能用，但现已过时——Frigate 不再为新搭建推荐它。',
          '更大的 Whisper 模型和本地 LLM 推理是最吃力的工作负载——围绕它们规划内存和 GPU/NPU。',
          '录像存到 SSD；连续运行多个摄像头后再迁移到 NAS。',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**对典型智能家居用途而言，Raspberry Pi 5 是运行 Home Assistant 最省电的方式。** 它在 LLM 推理和大型 Whisper 模型上吃力，且 2026 年的内存芯片短缺已让开发板价格大幅上涨。',
        items: [
          '非常适合设备控制、自动化以及小规模本地语音配置。',
          'Pi 上的 LLM 推理仅限非常小且缓慢的模型——如果想要 Frigate 检测，可搭配 Hailo-8L M.2 HAT。',
          '若想以低功耗实现基础功能，就选 Pi 5。8GB 和 16GB 版本最实用，不过受 2026 年内存涨价影响，16GB 版本现在的价格已远高于约 120 美元的首发价。',
          '想要即插即用的成品，Home Assistant Green 出厂即可运行（2026 年约 199 美元）。Home Assistant Yellow 已于 2026 年初停产。',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5（8GB）', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: '迷你 PC（以及给 LLM 留出空间）',
        content:
          '**迷你 PC 是 Home Assistant 加本地 AI 的最佳单机选择，拥有足够内存以及可运行小型 LLM、加速 Frigate 的强力集成显卡或 NPU。** 它在性能、体积和成本之间取得平衡。',
        items: [
          '低功耗的 Intel N100/N150 迷你 PC 可运行 Home Assistant，并经由 Intel 集成显卡（OpenVINO）加速 Frigate——是中枢加摄像头这类配置的实用首选。Beelink EQ14（Intel N150）价格约 190–220 美元。',
          '若想在同一台设备上跑本地 LLM，升级到带 32GB 内存的 Ryzen 迷你 PC：Beelink SER8（Ryzen 7 8845HS，约 649 美元）可经由 Ollama 以可用速度运行 Qwen3 8B 或 Llama 3.1 8B 模型。优先考虑内存和强力集成显卡或 NPU 以降低延迟。',
          '具体选择参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)，以及跨集群的[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm)。',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8（Ryzen 7 8845HS）', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14（Intel N150）', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**若 NAS 有足够的 CPU 和内存，它可在容器中与存储及 Frigate 录像并存地托管 Home Assistant。** 如果你已经有一台，会很方便。',
        items: [
          '适合把存储与家庭自动化服务结合在一起。',
          '检查 NAS 是否有足够的 CPU/内存余量来跑你的附加项。',
          'NAS 上的 LLM 推理取决于其硬件——许多缺少强力 GPU。示例：Synology DS925+ 或 DS225+；UGREEN NASync 机型内置本地 LLM 选项。',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: '专用服务器（LLM 升级方案）',
        content:
          '**搭配独立 GPU 的专用服务器，是在运行大量摄像头的同时运行更大本地 LLM 的升级方案。** 它以更高的成本和功耗提供最大的余量。',
        items: [
          '二手 RTX 3090（24GB 显存，2026 年二手价约 600–800 美元）是运行最高约 70B（Q4 精度）模型性价比最佳的选择；RTX 3060（12GB，二手约 150–180 美元）可在预算内处理 7B–13B 模型。',
          '最适合大量摄像头、更大的 LLM 和多个用户的场景。功耗和成本都高于迷你 PC。',
          '对基础智能家居而言过于强大——留给繁重的本地 AI 用途，并把 Home Assistant 中枢放在单独的低功耗设备上以保证可靠性。',
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: '各硬件等级的本地 LLM 容量：Raspberry Pi 5 只能运行极小模型，Intel N100/N150 迷你 PC 可处理小型模型，Ryzen 迷你 PC（32GB 内存）可运行 7B–8B 模型，二手 RTX 3090（24GB 显存）在 Q4 量化下可扩展到约 70B。',
      },
      picking: {
        id: 'picking',
        title: '为仅-HA 对 HA + AI 选择',
        content:
          '**仅-HA 选 Pi，HA 加本地 AI 选迷你 PC——这一个决定就能确定合适的硬件。** 让设备匹配工作负载。',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: '智能家居硬件决策树：是否添加 Frigate 摄像头和是否添加本地 LLM，这两个问题决定四种搭配——Raspberry Pi 5、Intel N100/N150 迷你 PC、Ryzen 迷你 PC（32GB 内存）或 RTX 3090 服务器（24GB 显存）。',
        columns: ['硬件', '相对价格', '仅-HA', '能否运行本地 LLM', 'Frigate 加速'],
        rows: [
          { '硬件': 'Raspberry Pi 5', '相对价格': '低', '仅-HA': '可', '能否运行本地 LLM': '仅非常小，缓慢', 'Frigate 加速': 'Hailo-8L M.2 HAT' },
          { '硬件': 'Intel N100/N150 迷你 PC', '相对价格': '中', '仅-HA': '可', '能否运行本地 LLM': '小型模型', 'Frigate 加速': 'Intel 集成显卡（OpenVINO）' },
          { '硬件': 'Ryzen 迷你 PC', '相对价格': '中', '仅-HA': '可', '能否运行本地 LLM': '可（7B–8B）', 'Frigate 加速': '集成显卡或 Hailo M.2' },
          { '硬件': 'NAS', '相对价格': '中–高', '仅-HA': '可（容器）', '能否运行本地 LLM': '取决于硬件', 'Frigate 加速': '取决于机型' },
          { '硬件': '服务器 + 二手 RTX 3090', '相对价格': '高', '仅-HA': '可', '能否运行本地 LLM': '可（最高约 70B）', 'Frigate 加速': '独立 GPU' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Frigate 推荐用什么硬件？', a: '对于新搭建，Frigate 推荐经由 OpenVINO 的 Intel 集成显卡，或 Hailo-8L（入门级）或 Hailo-8（更快）M.2 模块以获得更强检测能力。Google Coral USB/M.2 TPU 仍能用，但现已过时——除非是非常低功耗的硬件，Frigate 不再为新安装推荐它。' },
          { q: 'Raspberry Pi 也能运行本地 LLM 吗？', a: 'Pi 只能运行非常小的模型，而且很慢，因此不适合做响应灵敏的本地 LLM 助手。它能很好地处理 Home Assistant 和基础语音，但对本地 AI 而言，带强力集成显卡或 NPU 的迷你 PC，或一台二手 RTX 3090 主机，是更好的选择。' },
          { q: '我需要多少内存？', a: '仅 Home Assistant 用几个 GB 就能运行。要在同一台设备上运行小型本地 LLM 和其他 AI 服务，更多内存会有帮助；一台带 32GB 内存和强力集成显卡/NPU 的迷你 PC 能让 Qwen3 8B 或 Llama 3.1 8B 模型保持响应。把内存匹配到你计划运行的模型大小。' },
          { q: '我该买哪台迷你 PC？', a: '要跑 HA 加摄像头，Intel N100/N150 迷你 PC 经由 OpenVINO 加速 Frigate。要跑 HA 加本地 LLM，升级到带 32GB 内存的 Ryzen 迷你 PC。参见 Home Assistant + 本地 AI 的最佳迷你 PC 指南获取具体选择。' },
          { q: '一台还是两台？', a: '一台（迷你 PC）最简单，可同时运行 Home Assistant 和一个小型本地 LLM。如果你想让中枢在低功耗设备上保持极高可靠性，并把繁重 AI 卸载到另一台机器，例如二手 RTX 3090 服务器，就分成两台。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 具体选择',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 完整堆栈',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — AI 设备运行什么',
          '[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm) — 跨集群：VRAM 与硬件细节',
          '[2026年最佳阳台太阳能电池](/zh/balcony-solar/best-balcony-solar-batteries-2026) — 本地家庭能源系统的电池储能',
          '[本地控制最佳智能家居中枢（2027年）](/zh/smart-home/best-smart-home-hubs-2027) — 专用中枢推荐',
          '[NVIDIA Jetson Orin Nano智能家居AI评测（2027年）](/zh/smart-home/nvidia-jetson-orin-nano-smart-home-review) — 支持GPU的本地AI硬件',
          '[最佳Zigbee与Thread USB加密狗(2027年)](/zh/smart-home/best-zigbee-thread-dongles-2027) — Zigbee/Thread无线硬件',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地智能家居 + 本地 AI 的最佳硬件（2026）',
      description: '2026年本地智能家居 + AI 硬件推荐：Intel N100 迷你 PC 或 Raspberry Pi 5 中枢，Frigate 加速方案（Intel 集成显卡/Hailo），SSD 存储，以及本地 LLM 升级选项。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-07-02',
      about: [{ '@type': 'Thing', name: 'Home Assistant 硬件' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: '迷你 PC' }, { '@type': 'Thing', name: '本地 LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate 推荐用什么硬件？', acceptedAnswer: { '@type': 'Answer', text: '对于新搭建，Frigate 推荐经由 OpenVINO 的 Intel 集成显卡，或 Hailo-8L 或 Hailo-8 M.2 模块以获得更强检测能力。Google Coral TPU 仍能用，但现已过时，不再为新安装推荐。' } },
        { '@type': 'Question', name: 'Raspberry Pi 也能运行本地 LLM 吗？', acceptedAnswer: { '@type': 'Answer', text: 'Pi 只能运行非常小的模型，而且很慢。它能很好地处理 Home Assistant 和基础语音，但对响应灵敏的本地 LLM 助手而言，带强力集成显卡或 NPU 的迷你 PC，或一台二手 RTX 3090 主机更好。' } },
        { '@type': 'Question', name: '我需要多少内存？', acceptedAnswer: { '@type': 'Answer', text: '仅 Home Assistant 用几个 GB 就能运行。要在同一台设备上运行小型本地 LLM，更多内存会有帮助；带 32GB 内存的迷你 PC 能让 Qwen3 8B 或 Llama 3.1 8B 模型保持响应。把内存匹配到你计划运行的模型大小。' } },
        { '@type': 'Question', name: '我该买哪台迷你 PC？', acceptedAnswer: { '@type': 'Answer', text: '要跑 HA 加摄像头，Intel N100/N150 迷你 PC 经由 OpenVINO 加速 Frigate。要跑 HA 加本地 LLM，升级到带 32GB 内存的 Ryzen 迷你 PC。参见 Home Assistant + 本地 AI 的最佳迷你 PC 指南。' } },
        { '@type': 'Question', name: '一台还是两台？', acceptedAnswer: { '@type': 'Answer', text: '一台迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM。若想让中枢在低功耗设备上保持极高可靠，并把繁重 AI 卸载到另一台机器，例如二手 RTX 3090 服务器，就分成两台。' } },
      ],
    },
  },
}
