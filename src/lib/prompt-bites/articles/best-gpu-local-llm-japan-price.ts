import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Guides',
    title: 'What Is the Best Value GPU for Local LLMs in Japan?',
    seoTitle: 'Best GPU for LLMs Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription:
      'RTX 3060 12 GB is the best value GPU for local LLMs in Japan: ~¥40,000 new, ¥25,000 used. 7B models at 20–25 tok/s. Available at Tsukumo and Dospara.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'Japan-based users buying a GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    leadAnswerBlock:
      'In Japan, the RTX 3060 12 GB offers the best price-performance (new ~¥40,000, used ~¥25,000). 12 GB VRAM runs 7B models at 20–25 tok/s. Available at Tsukumo and Dospara in Akihabara.',
    toc: [
      { label: 'GPUs by Price Range in Japan', anchor: '#gpus-by-price' },
      { label: 'Japan Buying Guide', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Japan GPU prices run 15–20% above US prices due to import costs and 10% VAT. The used market (Mercari, Yahoo Auctions, Janpara) can save 30–40% versus new. This guide maps the four GPUs worth buying in Japan to their real May 2026 street prices — both new at Tsukumo, Dospara, Yodobashi, and used online.',
    quickAnswerTop: {
      en: {
        question: 'What is the best value GPU for local LLMs in Japan?',
        answer:
          'The RTX 3060 12GB at ~¥40,000 new (¥25,000 used) is the best value GPU for local LLMs in Japan. 12 GB VRAM runs every 7B model at 20–25 tok/s with zero CUDA setup friction.',
        bullets: [
          'RTX 3060 12GB: ¥40K new / ¥25K used — best value for 7B models at 20-25 tok/s.',
          'RTX 4060 Ti 16GB: ¥65K new / ¥50K used — step up for 13B models at 18-22 tok/s.',
          'RTX 3090 24GB used ¥90K — skip for Japan apartments: 340W draws ~¥8,000/month in electricity.',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Welche GPU bietet in Japan das beste Preis-Leistungs-Verhältnis für lokale LLMs?',
        answer:
          'Die RTX 3060 12 GB für ~¥40.000 neu (¥25.000 gebraucht) bietet in Japan das beste Preis-Leistungs-Verhältnis. 12 GB VRAM laufen jeden 7B-Modell mit 20–25 tok/s.',
        bullets: [
          'RTX 3060 12 GB: ¥40K neu / ¥25K gebraucht — bestes Preis-Leistungs-Verhältnis für 7B-Modelle.',
          'RTX 4060 Ti 16 GB: ¥65K neu / ¥50K gebraucht — Upgrade für 13B-Modelle.',
          'RTX 3090 24 GB gebraucht ¥90K — für japanische Apartments nicht empfohlen: 340 W.',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quel est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon ?',
        answer:
          'La RTX 3060 12 Go à ~¥40 000 neuve (¥25 000 d\'occasion) offre le meilleur rapport qualité-prix au Japon. 12 Go de VRAM fait tourner tous les modèles 7B à 20–25 tok/s.',
        bullets: [
          'RTX 3060 12 Go : ¥40K neuve / ¥25K occasion — meilleur rapport qualité-prix pour 7B.',
          'RTX 4060 Ti 16 Go : ¥65K neuve / ¥50K occasion — passage aux modèles 13B.',
          'RTX 3090 24 Go d\'occasion ¥90K — à éviter dans les appartements japonais : 340 W.',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '日本でコスパ最強のローカルLLM用GPUは？',
        answer:
          '日本ではRTX 3060 12 GBがコスパ最強（新品~¥40,000、中古~¥25,000）。12 GB VRAMで7Bモデルを20~25 tok/sで実行可能。秋葉原のツクモ、ドスパラで購入できます。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/中古¥25K — 7Bモデルに最高のコスパ。',
          'RTX 4060 Ti 16 GB：新品¥65K/中古¥50K — 13Bモデルへのステップアップ。',
          'RTX 3090 24 GB 中古¥90K — 日本のアパートでは非推奨：340Wで電気代約¥8,000/月。',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '在日本性价比最高的本地LLM显卡是什么？',
        answer:
          '在日本，RTX 3060 12 GB性价比最高（新品约¥40,000日元，二手约¥25,000）。12 GB VRAM可运行7B模型达20-25 tok/s。可在秋叶原的Tsukumo和Dospara购买。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/二手¥25K — 7B模型最佳性价比。',
          'RTX 4060 Ti 16 GB：新品¥65K/二手¥50K — 升级到13B模型。',
          'RTX 3090 24 GB二手¥90K — 日本公寓不推荐：340W功耗约¥8,000/月电费。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best value: RTX 3060 12GB at ~¥40,000 new / ¥25,000 used (May 2026) — runs 7B models at 20-25 tok/s',
          'Mid-range: RTX 4060 Ti 16GB at ¥65,000 new — 13B models at 18-22 tok/s, 16 GB context headroom',
          'AMD alternative: RX 7800 XT 16GB at ¥70,000 — 16 GB VRAM, Vulkan/ROCm, best for Linux users',
          'Avoid: RTX 3090 24GB in Japan apartments — 340W TDP draws ~¥8,000/month at ¥31/kWh',
          'Used market: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) in Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The RTX 3060 12GB at ~¥40,000 new is the best value GPU for local LLMs in Japan as of May 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Japan GPU prices are 15-20% above US prices. The RTX 3060 12GB runs every 7B model at 20-25 tok/s and is widely available at Tsukumo and Dospara in Akihabara, or used on Mercari for ¥25,000.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs by Price Range in Japan',
        content: [
          '<strong>As of May 2026, Japan GPU prices run 15–20% above equivalent US prices due to import costs and 10% consumption tax. The four cards below cover every realistic budget for local LLM inference from ¥25,000 used to ¥90,000 used.</strong>',
          'The table below uses May 2026 street prices from Tsukumo, Dospara, and Yodobashi for new cards, and Mercari/Yahoo Auctions midpoints for used. Prices fluctuate — verify before buying.',
        ],
        columns: ['GPU + VRAM', 'New / Used Price (¥)', 'Best for'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12GB',
            'New / Used Price (¥)': '¥40,000 / ¥25,000',
            'Best for': '7B models, best value entry',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16GB',
            'New / Used Price (¥)': '¥65,000 / ¥50,000',
            'Best for': '13B models, mid-range',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16GB',
            'New / Used Price (¥)': '¥70,000 / ¥55,000',
            'Best for': 'AMD/Vulkan/ROCm on Linux',
          },
          {
            'GPU + VRAM': 'RTX 3090 24GB',
            'New / Used Price (¥)': '— / ¥90,000',
            'Best for': '30B+ models (SKIP: 340W, too hot for apartments)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12GB — Best for: first GPU build, 7B models, budget buyers. Skip if: you need to run 13B+ models.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16GB — Best for: 13B models, step up from 3060. Skip if: budget is tight and 7B is enough.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16GB — Best for: AMD fans, Vulkan/ROCm on Linux. Skip if: you prefer the CUDA ecosystem.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24GB — SKIP for Japan apartments. 340W TDP draws ~¥8,000/month in electricity at ¥31/kWh. Buy only if you have a dedicated room with good ventilation.',
          },
        ],
        items: [
          'For GPU-free inference in Japan, see our [Japan mini PC guide](/prompt-bites/best-mini-pc-local-llm-japan).',
          'For the best Japanese-language models to run on these GPUs, see our [Japanese LLM models guide](/prompt-bites/best-japanese-language-models-local).',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥25,000-40,000',
            label: 'Check RTX 3060 12GB price on Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'Check RTX 3060 12GB price at Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'Check RTX 3060 12GB price at Dospara (ドスパラ)',
          },
          {
            url: 'https://www.yodobashi.com/category/11010/11012/?searchWord=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'Check RTX 3060 12GB price at Yodobashi (ヨドバシ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '¥50,000-65,000',
            label: 'Check RTX 4060 Ti 16GB price on Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16GB',
            productCategory: 'gpu',
            priceRange: '¥55,000-70,000',
            label: 'Check RX 7800 XT price on Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Japan Buying Guide',
        content: [
          '<strong>Japan offers two reliable buying channels for GPUs: new from authorized retailers (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) and used from Mercari, Yahoo Auctions, or Janpara in Akihabara.</strong> For first-time buyers, Akihabara has a decisive advantage: you can inspect the card in person, ask staff about compatibility, and walk out same day.',
          'New GPU retailers in Japan (May 2026 prices): Amazon.co.jp ships nationwide with next-day Prime delivery. Tsukumo (ツクモ) at 1-chome, Akihabara has the broadest stock and knowledgeable staff for LLM builds. Dospara (ドスパラ) Akihabara is strong on NVIDIA cards. Yodobashi Camera (ヨドバシカメラ) Multi Akiba carries all major brands with Yodobashi points.',
          'Used GPU sources: Mercari (メルカリ) and Yahoo! Auctions (Yahoo!オークション) offer the widest selection and lowest prices. Janpara (じゃんぱら) in Akihabara is a trusted used specialist with 30-day returns. When buying used on Mercari: check the listing for 保証 (warranty) status, ask the seller if the GPU was used for マイニング (mining), and avoid listings without multiple clear photos of the actual card. Mining GPUs run 24/7 under load — their lifespan is significantly shorter.',
          'Budget decision matrix: Under ¥30,000 → used RTX 3060 12GB on Mercari. ¥30,000–50,000 → new RTX 3060 12GB at Tsukumo or Dospara. ¥50,000–70,000 → RTX 4060 Ti 16GB (used) or RX 7800 XT (new). Over ¥70,000 → RX 7800 XT new or RTX 3090 used (only if you have a separate room and good ventilation).',
          'Japan electricity cost note: Japan averages ¥31/kWh (as of 2026). At 8 hours of daily inference use: RTX 3060 12GB (170W) costs ~¥3,200/month. RTX 4060 Ti 16GB (165W) costs ~¥3,100/month. RTX 3090 24GB (350W) costs ~¥6,600/month. Factor this into total cost of ownership — a ¥15,000 saving on a used RTX 3090 disappears in 2–3 months of electricity compared to a 3060.',
          'For the broader context on GPU choices across all budgets, see our [best budget GPUs for local LLM guide](/local-llms/best-budget-gpus-local-llm). For AMD-specific GPU picks, see [best AMD GPUs for local LLM](/local-llms/best-amd-gpus-local-llm).',
          '<em>Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            priceRange: '¥20,000-25,000',
            label: 'Search used RTX 3060 12GB on Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            priceRange: '¥20,000-27,000',
            label: 'Search used RTX 3060 12GB on Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            priceRange: '¥25,000-30,000',
            label: 'Search used RTX 3060 12GB at Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: Buying a GPU for Local LLMs in Japan',
        faqs: [
          {
            q: 'What is the difference between the RTX 3060 12GB and 8GB versions?',
            a: 'The 8GB version cannot run 7B models at Q4_K_M quantization — a 7B model at Q4_K_M needs approximately 6 GB of VRAM, and the runtime overhead pushes it over the 8GB limit. The 12GB version clears that threshold with 5–6 GB to spare for context. Always buy the 12GB version for local LLMs. The 8GB variant is only worth buying for gaming workloads, not LLM inference.',
          },
          {
            q: 'Does Ollama work with AMD GPUs like the RX 7800 XT?',
            a: 'Yes. Ollama supports AMD GPU acceleration via ROCm on Linux and Vulkan on Windows for the RX 7800 XT and other RDNA3 cards. On Linux with ROCm, performance is close to NVIDIA CUDA equivalents. On Windows, Vulkan acceleration works but requires a manual setup step and is slower than CUDA. If you are on Windows and prioritize zero-setup, the RTX 3060 12GB or RTX 4060 Ti 16GB are easier choices.',
          },
          {
            q: 'What should I check when buying a GPU on Mercari (メルカリ)?',
            a: 'Check the listing for 保証 (warranty) status — ideally you want at least one month of remaining manufacturer warranty. Ask the seller directly whether the GPU was used for マイニング (mining). Mining GPUs run at full load 24/7, which significantly shortens their lifespan. Verify the seller\'s rating is above 95%, and only buy from listings with multiple clear photos showing the actual card (not stock photos). Avoid listings that say "動作確認済" (operation confirmed) without accompanying photos or any warranty details.',
          },
          {
            q: 'Can you use an eGPU with a MacBook for local LLM inference in Japan?',
            a: 'Yes, via Thunderbolt 3 or 4. An eGPU with an RTX 3060 12GB or RTX 4060 Ti 16GB will run Ollama and llama.cpp with GPU acceleration. Performance is approximately 80% of an internal PCIe connection due to Thunderbolt bandwidth limits. eGPU enclosures (Razer Core X, Sonnet eGPU Breakaway Box) are available at Yodobashi Camera and Amazon.co.jp. See our [eGPU + MacBook Ollama guide](/prompt-bites/best-egpu-ollama-macbook) for full setup details.',
          },
          {
            q: 'What are the electricity costs for running a GPU in Japan?',
            a: 'Japan averages approximately ¥31/kWh in 2026. At 4 hours of daily inference use: RTX 3060 12GB (170W) costs ~¥1,600/month. RTX 4060 Ti 16GB (165W) costs ~¥1,550/month. RTX 3090 24GB (350W) costs ~¥3,300/month. At 8 hours/day, double those figures. The RTX 3090\'s high power draw makes it significantly more expensive to operate in Japan\'s high electricity cost environment — factor this into the total cost of ownership before buying.',
          },
        ],
      },
    },
  },

  de: {
    theme: 'Hardware Guides',
    title: 'Welche GPU bietet in Japan das beste Preis-Leistungs-Verhältnis für lokale LLMs?',
    seoTitle: 'Beste GPU für LLMs Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription:
      'RTX 3060 12 GB ist die beste GPU für lokale LLMs in Japan: ~¥40.000 neu, ¥25.000 gebraucht. 7B-Modelle bei 20–25 tok/s. Erhältlich bei Tsukumo und Dospara.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'In Japan lebende Käufer, die eine GPU für lokale LLM-Inferenz suchen',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '5 Min. Lesezeit',
    leadAnswerBlock:
      'In Japan bietet die RTX 3060 12 GB das beste Preis-Leistungs-Verhältnis (neu ~¥40.000, gebraucht ~¥25.000). 12 GB VRAM für 7B-Modelle, 20–25 tok/s. Erhältlich bei Tsukumo und Dospara in Akihabara.',
    toc: [
      { label: 'GPUs nach Preisklasse in Japan', anchor: '#gpus-by-price' },
      { label: 'Einkaufsführer für Japan', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'GPU-Preise in Japan liegen 15–20 % über US-Preisen, bedingt durch Importkosten und 10 % Mehrwertsteuer. Der Gebrauchtmarkt (Mercari, Yahoo Auctions, Janpara) spart 30–40 % gegenüber Neuware. Dieser Leitfaden ordnet die vier kaufenswerten GPUs in Japan ihren realen Straßenpreisen vom Mai 2026 zu — neu bei Tsukumo, Dospara und Yodobashi sowie gebraucht online.',
    quickAnswerTop: {
      de: {
        question: 'Welche GPU bietet in Japan das beste Preis-Leistungs-Verhältnis für lokale LLMs?',
        answer:
          'Die RTX 3060 12 GB für ~¥40.000 neu (¥25.000 gebraucht) ist die beste Wahl in Japan. 12 GB VRAM führt jeden 7B-Modell bei 20–25 tok/s ohne CUDA-Konfigurationsaufwand aus.',
        bullets: [
          'RTX 3060 12 GB: ¥40K neu / ¥25K gebraucht — bestes Preis-Leistungs-Verhältnis für 7B-Modelle.',
          'RTX 4060 Ti 16 GB: ¥65K neu / ¥50K gebraucht — Upgrade für 13B-Modelle bei 18–22 tok/s.',
          'RTX 3090 24 GB gebraucht ¥90K — für japanische Apartments meiden: 340 W, ~¥8.000/Monat Strom.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: RTX 3060 12 GB für ~¥40.000 neu / ¥25.000 gebraucht (Mai 2026) — 7B-Modelle bei 20–25 tok/s',
          'Mittelklasse: RTX 4060 Ti 16 GB für ¥65.000 neu — 13B-Modelle bei 18–22 tok/s, 16 GB Kontextspielraum',
          'AMD-Alternative: RX 7800 XT 16 GB für ¥70.000 — 16 GB VRAM, Vulkan/ROCm, ideal für Linux',
          'Meiden: RTX 3090 24 GB in Japans Apartments — 340 W TDP zieht ~¥8.000/Monat bei ¥31/kWh',
          'Gebrauchtmarkt: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) in Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die RTX 3060 12 GB für ~¥40.000 neu ist die beste Wahl für lokale LLMs in Japan (Mai 2026).',
          },
          {
            type: 'plain-terms',
            text: 'GPU-Preise in Japan liegen 15–20 % über US-Preisen. Die RTX 3060 12 GB führt jeden 7B-Modell bei 20–25 tok/s aus und ist bei Tsukumo und Dospara in Akihabara oder gebraucht für ¥25.000 auf Mercari erhältlich.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs nach Preisklasse in Japan',
        content: [
          '<strong>Stand Mai 2026 liegen GPU-Preise in Japan 15–20 % über den entsprechenden US-Preisen, bedingt durch Importkosten und 10 % Verbrauchsteuer. Die vier nachfolgenden Karten decken jedes realistische Budget für lokale LLM-Inferenz ab — von ¥25.000 gebraucht bis ¥90.000 gebraucht. EUR-Äquivalente: RTX 3060 12 GB ~€260 neu / €160 gebraucht; RTX 4060 Ti 16 GB ~€420 neu / €330 gebraucht.</strong>',
          'Die folgende Tabelle verwendet Straßenpreise vom Mai 2026 von Tsukumo, Dospara und Yodobashi für neue Karten sowie Mittelwerte von Mercari/Yahoo Auctions für gebrauchte. Preise schwanken — vor dem Kauf nochmals prüfen.',
        ],
        columns: ['GPU + VRAM', 'Neu / Gebraucht (¥)', 'Geeignet für'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            'Neu / Gebraucht (¥)': '¥40.000 / ¥25.000',
            'Geeignet für': '7B-Modelle, bestes Preis-Leistungs-Verhältnis',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            'Neu / Gebraucht (¥)': '¥65.000 / ¥50.000',
            'Geeignet für': '13B-Modelle, Mittelklasse',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            'Neu / Gebraucht (¥)': '¥70.000 / ¥55.000',
            'Geeignet für': 'AMD/Vulkan/ROCm unter Linux',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            'Neu / Gebraucht (¥)': '— / ¥90.000',
            'Geeignet für': '30B+-Modelle (MEIDEN: 340 W, zu laut für Apartments)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — Geeignet für: Erstbuild, 7B-Modelle, Budget-Käufer. Meiden, wenn: Sie 13B+-Modelle benötigen.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — Geeignet für: 13B-Modelle, Upgrade von der 3060. Meiden, wenn: Budget knapp ist und 7B ausreicht.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — Geeignet für: AMD-Fans, Vulkan/ROCm unter Linux. Meiden, wenn: Sie das CUDA-Ökosystem bevorzugen.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — FÜR JAPANISCHE APARTMENTS MEIDEN. 340 W TDP verursacht ~¥8.000/Monat Stromkosten bei ¥31/kWh. Nur kaufen, wenn Sie ein separates Zimmer mit guter Belüftung haben.',
          },
        ],
        items: [
          'Für GPU-freie Inferenz in Japan via Mini-PC: [Japan Mini-PC-Leitfaden](/de/prompt-bites/best-mini-pc-local-llm-japan).',
          'Für die besten japanischsprachigen Modelle auf diesen GPUs: [Japanische LLM-Modelle](/de/prompt-bites/best-japanese-language-models-local).',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥25.000–40.000',
            label: 'RTX 3060 12 GB Preis auf Amazon.co.jp prüfen',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40.000',
            label: 'RTX 3060 12 GB Preis bei Tsukumo (ツクモ) prüfen',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40.000',
            label: 'RTX 3060 12 GB Preis bei Dospara (ドスパラ) prüfen',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥50.000–65.000',
            label: 'RTX 4060 Ti 16 GB Preis auf Amazon.co.jp prüfen',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Einkaufsführer für Japan',
        content: [
          '<strong>Japan bietet zwei zuverlässige Kaufkanäle für GPUs: neu bei autorisierten Händlern (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) und gebraucht bei Mercari, Yahoo Auctions oder Janpara in Akihabara.</strong> Für Erstkäufer hat Akihabara einen entscheidenden Vorteil: Sie können die Karte persönlich begutachten, das Personal zu Kompatibilität befragen und noch am selben Tag ausliefern lassen.',
          'Neue GPU-Händler in Japan (Mai 2026): Amazon.co.jp liefert bundesweit per Prime am nächsten Tag. Tsukumo (ツクモ) in der 1-chome Akihabara hat das breiteste Sortiment und kenntnisreiches Personal für LLM-Builds. Dospara (ドスパラ) Akihabara ist stark bei NVIDIA-Karten. Yodobashi Camera (ヨドバシカメラ) Multi Akiba führt alle großen Marken mit Yodobashi-Punkten.',
          'Gebraucht-Quellen: Mercari (メルカリ) und Yahoo! Auctions (Yahoo!オークション) bieten die größte Auswahl und niedrigsten Preise. Janpara (じゃんぱら) in Akihabara ist ein bewährter Gebrauchtspezialist mit 30 Tagen Rückgaberecht. Beim Kauf auf Mercari: Listing auf 保証 (Garantie)-Status prüfen, Verkäufer fragen, ob die GPU für マイニング (Mining) verwendet wurde, und Listings ohne mehrere klare Fotos der tatsächlichen Karte meiden. Mining-GPUs laufen 24/7 unter Volllast — ihre Lebensdauer ist deutlich kürzer.',
          'Budget-Entscheidungsmatrix: Unter ¥30.000 → gebrauchte RTX 3060 12 GB auf Mercari. ¥30.000–50.000 → neue RTX 3060 12 GB bei Tsukumo oder Dospara. ¥50.000–70.000 → RTX 4060 Ti 16 GB (gebraucht) oder RX 7800 XT (neu). Über ¥70.000 → RX 7800 XT neu oder RTX 3090 gebraucht (nur bei separatem Zimmer mit guter Belüftung).',
          'Stromkosten in Japan: Japan durchschnittlich ¥31/kWh (2026). Bei 8 Stunden täglicher Inferenz: RTX 3060 12 GB (170 W) ~¥3.200/Monat. RTX 4060 Ti 16 GB (165 W) ~¥3.100/Monat. RTX 3090 24 GB (350 W) ~¥6.600/Monat. Die ¥15.000 Ersparnis beim Kauf einer gebrauchten RTX 3090 gegenüber einer 3060 ist nach 2–3 Monaten durch den höheren Stromverbrauch aufgebraucht.',
          'Für die Übersicht aller GPU-Klassen: [Beste Budget-GPUs für lokale LLMs](/local-llms/best-budget-gpus-local-llm). Für AMD-spezifische Auswahl: [Beste AMD-GPUs für lokale LLMs](/local-llms/best-amd-gpus-local-llm).',
          '<em>Hinweis: Dieser Artikel enthält Affiliate-Links gemäß § 6 TMG. Bei einem Kauf über diese Links erhalten wir eine Provision – für Sie entstehen keine zusätzlichen Kosten.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '¥20.000–25.000',
            label: 'Gebrauchte RTX 3060 12 GB auf Mercari (メルカリ) suchen',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '¥20.000–27.000',
            label: 'Gebrauchte RTX 3060 12 GB auf Yahoo Auctions (Yahoo!オークション) suchen',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '¥25.000–30.000',
            label: 'Gebrauchte RTX 3060 12 GB bei Janpara (じゃんぱら) suchen',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: GPU für lokale LLMs in Japan kaufen',
        faqs: [
          {
            q: 'Was ist der Unterschied zwischen RTX 3060 12 GB und 8 GB?',
            a: 'Die 8-GB-Version kann 7B-Modelle bei Q4_K_M-Quantisierung nicht ausführen — ein 7B-Modell bei Q4_K_M benötigt ca. 6 GB VRAM, und der Laufzeit-Overhead überschreitet das 8-GB-Limit. Die 12-GB-Version bewältigt das mit 5–6 GB Spielraum. Für lokale LLMs immer die 12-GB-Version kaufen.',
          },
          {
            q: 'Funktioniert Ollama mit AMD-GPUs wie der RX 7800 XT?',
            a: 'Ja. Ollama unterstützt AMD-GPU-Beschleunigung via ROCm unter Linux und Vulkan unter Windows für die RX 7800 XT und andere RDNA3-Karten. Unter Linux mit ROCm ist die Leistung nahe an NVIDIA CUDA. Unter Windows funktioniert Vulkan, erfordert aber einen manuellen Einrichtungsschritt. Wer unter Windows ohne Konfigurationsaufwand arbeiten möchte, greift besser zur RTX 3060 12 GB.',
          },
          {
            q: 'Worauf achten beim Kauf auf Mercari (メルカリ)?',
            a: 'Listing auf 保証 (Garantie)-Status prüfen — mindestens ein Monat Herstellergarantie ist wünschenswert. Den Verkäufer direkt fragen, ob die GPU für マイニング (Mining) genutzt wurde. Mining-GPUs laufen 24/7 unter Volllast und haben eine deutlich kürzere Lebensdauer. Verkäuferbewertung sollte über 95 % liegen; nur bei Listings mit mehreren klaren Fotos der echten Karte kaufen.',
          },
          {
            q: 'Kann man ein eGPU mit einem MacBook für lokale LLM-Inferenz nutzen?',
            a: 'Ja, via Thunderbolt 3 oder 4. Ein eGPU mit RTX 3060 12 GB oder RTX 4060 Ti 16 GB führt Ollama und llama.cpp mit GPU-Beschleunigung aus. Die Leistung liegt bei ca. 80 % einer internen PCIe-Verbindung aufgrund der Thunderbolt-Bandbreitenbegrenzung. eGPU-Gehäuse (Razer Core X, Sonnet Breakaway Box) sind bei Yodobashi Camera und Amazon.co.jp erhältlich. Details: [eGPU + MacBook Ollama-Leitfaden](/de/prompt-bites/best-egpu-ollama-macbook).',
          },
          {
            q: 'Was sind die Stromkosten für GPU-Betrieb in Japan?',
            a: 'Japan durchschnittlich ca. ¥31/kWh (2026). Bei 4 Stunden täglicher Inferenz: RTX 3060 12 GB (170 W) ~¥1.600/Monat. RTX 4060 Ti 16 GB (165 W) ~¥1.550/Monat. RTX 3090 24 GB (350 W) ~¥3.300/Monat. Bei 8 Stunden/Tag verdoppeln sich diese Werte. Diese Kosten bei der Gesamtbetriebskostenrechnung berücksichtigen.',
          },
        ],
      },
    },
  },

  fr: {
    theme: 'Hardware Guides',
    title: 'Quel est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon ?',
    seoTitle: 'Meilleur GPU LLM Japon 2026 | Prompt Bites | PromptQuorum',
    metaDescription:
      'RTX 3060 12 Go, le meilleur GPU pour LLM local au Japon : ~¥40 000 neuve, ¥25 000 occasion. Modèles 7B à 20–25 tok/s chez Tsukumo et Dospara en 2026.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs résidant au Japon qui achètent un GPU pour l\'inférence LLM locale',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '5 min de lecture',
    leadAnswerBlock:
      'Au Japon, la RTX 3060 12 Go offre le meilleur rapport qualité-prix (neuve ~¥40 000, occasion ~¥25 000). 12 Go VRAM pour les modèles 7B à 20–25 tok/s. Disponible chez Tsukumo et Dospara à Akihabara.',
    toc: [
      { label: 'GPU par gamme de prix au Japon', anchor: '#gpus-by-price' },
      { label: 'Guide d\'achat au Japon', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Les prix des GPU au Japon sont 15–20 % plus élevés qu\'aux États-Unis en raison des frais d\'importation et de la TVA à 10 %. Le marché de l\'occasion (Mercari, Yahoo Auctions, Janpara) permet d\'économiser 30–40 % par rapport au neuf. Ce guide associe les quatre GPU intéressants au Japon à leurs prix réels de mai 2026 — neufs chez Tsukumo, Dospara et Yodobashi, et d\'occasion en ligne.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon ?',
        answer:
          'La RTX 3060 12 Go à ~¥40 000 neuve (¥25 000 d\'occasion) est le meilleur choix au Japon. 12 Go de VRAM fait tourner tout modèle 7B à 20–25 tok/s sans aucune configuration CUDA.',
        bullets: [
          'RTX 3060 12 Go : ¥40K neuve / ¥25K occasion — meilleur rapport qualité-prix pour 7B.',
          'RTX 4060 Ti 16 Go : ¥65K neuve / ¥50K occasion — passage aux modèles 13B à 18–22 tok/s.',
          'RTX 3090 24 Go d\'occasion ¥90K — à éviter dans les appartements japonais : 340 W, ~¥8 000/mois.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : RTX 3060 12 Go à ~¥40 000 neuve / ¥25 000 occasion (mai 2026) — modèles 7B à 20–25 tok/s',
          'Gamme intermédiaire : RTX 4060 Ti 16 Go à ¥65 000 neuve — modèles 13B à 18–22 tok/s, 16 Go de marge',
          'Alternative AMD : RX 7800 XT 16 Go à ¥70 000 — 16 Go VRAM, Vulkan/ROCm, idéal sous Linux',
          'À éviter : RTX 3090 24 Go dans les appartements japonais — 340 W TDP, ~¥8 000/mois à ¥31/kWh',
          'Occasion : Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) à Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La RTX 3060 12 Go à ~¥40 000 neuve est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon en mai 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Les prix GPU au Japon sont 15–20 % plus élevés qu\'aux États-Unis. La RTX 3060 12 Go fait tourner tout modèle 7B à 20–25 tok/s et est disponible chez Tsukumo et Dospara à Akihabara, ou d\'occasion sur Mercari à ¥25 000.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPU par gamme de prix au Japon',
        content: [
          '<strong>En mai 2026, les prix des GPU au Japon sont 15–20 % au-dessus des prix américains en raison des frais d\'importation et de la taxe à la consommation de 10 %. Les quatre cartes ci-dessous couvrent tous les budgets réalistes pour l\'inférence LLM locale, de ¥25 000 d\'occasion à ¥90 000 d\'occasion. Équivalents EUR : RTX 3060 12 Go ~€260 neuve / €160 d\'occasion ; RTX 4060 Ti 16 Go ~€420 neuve / €330 d\'occasion.</strong>',
          'Le tableau ci-dessous utilise les prix de mai 2026 relevés chez Tsukumo, Dospara et Yodobashi pour les cartes neuves, et les médianes Mercari/Yahoo Auctions pour les cartes d\'occasion. Les prix fluctuent — vérifiez avant d\'acheter.',
        ],
        columns: ['GPU + VRAM', 'Neuve / Occasion (¥)', 'Idéal pour'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 Go',
            'Neuve / Occasion (¥)': '¥40 000 / ¥25 000',
            'Idéal pour': 'Modèles 7B, meilleur rapport qualité-prix',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 Go',
            'Neuve / Occasion (¥)': '¥65 000 / ¥50 000',
            'Idéal pour': 'Modèles 13B, gamme intermédiaire',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 Go',
            'Neuve / Occasion (¥)': '¥70 000 / ¥55 000',
            'Idéal pour': 'AMD/Vulkan/ROCm sous Linux',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 Go',
            'Neuve / Occasion (¥)': '— / ¥90 000',
            'Idéal pour': 'Modèles 30B+ (ÉVITER : 340 W, trop bruyant pour les appartements)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 Go — Idéal pour : premier build GPU, modèles 7B, petits budgets. À éviter si : vous avez besoin de modèles 13B+.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 Go — Idéal pour : modèles 13B, upgrade depuis la 3060. À éviter si : le budget est serré et les 7B suffisent.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 Go — Idéal pour : fans AMD, Vulkan/ROCm sous Linux. À éviter si : vous préférez l\'écosystème CUDA.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 Go — À ÉVITER dans les appartements japonais. 340 W TDP génère ~¥8 000/mois d\'électricité à ¥31/kWh. Achetez seulement si vous avez une pièce dédiée avec bonne ventilation.',
          },
        ],
        items: [
          'Pour une inférence sans GPU via mini PC au Japon : [guide mini PC Japon](/fr/prompt-bites/best-mini-pc-local-llm-japan).',
          'Pour les meilleurs modèles en langue japonaise sur ces GPU : [guide modèles LLM japonais](/fr/prompt-bites/best-japanese-language-models-local).',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go',
            productCategory: 'gpu',
            priceRange: '¥25 000–40 000',
            label: 'Vérifier le prix RTX 3060 12 Go sur Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go',
            productCategory: 'gpu',
            priceRange: '¥40 000',
            label: 'Vérifier le prix RTX 3060 12 Go chez Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go',
            productCategory: 'gpu',
            priceRange: '¥40 000',
            label: 'Vérifier le prix RTX 3060 12 Go chez Dospara (ドスパラ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 Go',
            productCategory: 'gpu',
            priceRange: '¥50 000–65 000',
            label: 'Vérifier le prix RTX 4060 Ti 16 Go sur Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Guide d\'achat au Japon',
        content: [
          '<strong>Le Japon offre deux canaux d\'achat fiables pour les GPU : neufs chez des revendeurs agréés (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) et d\'occasion sur Mercari, Yahoo Auctions ou chez Janpara à Akihabara.</strong> Pour les primo-acheteurs, Akihabara présente un avantage décisif : vous pouvez inspecter la carte en personne, interroger le personnel sur la compatibilité et repartir le jour même.',
          'Revendeurs de GPU neufs au Japon (mai 2026) : Amazon.co.jp livre partout au Japon en Prime J+1. Tsukumo (ツクモ) au 1-chome d\'Akihabara propose le plus grand stock et un personnel expert pour les builds LLM. Dospara (ドスパラ) Akihabara est fort sur les cartes NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba couvre toutes les grandes marques avec des points Yodobashi.',
          'Sources d\'occasion : Mercari (メルカリ) et Yahoo! Auctions (Yahoo!オークション) offrent le plus grand choix aux prix les plus bas. Janpara (じゃんぱら) à Akihabara est un spécialiste de l\'occasion fiable avec 30 jours de retour. Lors d\'un achat sur Mercari : vérifiez le statut 保証 (garantie) dans l\'annonce, demandez au vendeur si le GPU a été utilisé pour le マイニング (minage), et évitez les annonces sans photos claires et multiples de la carte réelle. Les GPU de minage fonctionnent 24h/24 en pleine charge — leur durée de vie est nettement réduite.',
          'Matrice de décision budgétaire : Moins de ¥30 000 → RTX 3060 12 Go d\'occasion sur Mercari. ¥30 000–50 000 → RTX 3060 12 Go neuve chez Tsukumo ou Dospara. ¥50 000–70 000 → RTX 4060 Ti 16 Go (d\'occasion) ou RX 7800 XT (neuve). Plus de ¥70 000 → RX 7800 XT neuve ou RTX 3090 d\'occasion (uniquement avec une pièce dédiée bien ventilée).',
          'Coût de l\'électricité au Japon : moyenne ¥31/kWh (2026). À 8 heures d\'inférence quotidienne : RTX 3060 12 Go (170 W) ~¥3 200/mois. RTX 4060 Ti 16 Go (165 W) ~¥3 100/mois. RTX 3090 24 Go (350 W) ~¥6 600/mois. Les ¥15 000 économisés à l\'achat d\'une RTX 3090 d\'occasion vs une 3060 s\'effacent en 2–3 mois de surconsommation électrique.',
          'Pour la vue d\'ensemble de toutes les gammes de GPU : [meilleurs GPU budget pour LLM local](/local-llms/best-budget-gpus-local-llm). Pour les GPU AMD : [meilleurs GPU AMD pour LLM local](/local-llms/best-amd-gpus-local-llm).',
          '<em>Divulgation : Cet article contient des liens d\'affiliation (conformément à la réglementation FTC). Nous pouvons percevoir une commission sans frais supplémentaires pour vous.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go (d\'occasion)',
            productCategory: 'gpu',
            priceRange: '¥20 000–25 000',
            label: 'Chercher RTX 3060 12 Go d\'occasion sur Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go (d\'occasion)',
            productCategory: 'gpu',
            priceRange: '¥20 000–27 000',
            label: 'Chercher RTX 3060 12 Go d\'occasion sur Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go (d\'occasion)',
            productCategory: 'gpu',
            priceRange: '¥25 000–30 000',
            label: 'Chercher RTX 3060 12 Go d\'occasion chez Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ : acheter un GPU pour LLM local au Japon',
        faqs: [
          {
            q: 'Quelle est la différence entre la RTX 3060 12 Go et la version 8 Go ?',
            a: 'La version 8 Go ne peut pas exécuter les modèles 7B en quantification Q4_K_M — un modèle 7B en Q4_K_M nécessite environ 6 Go de VRAM, et l\'overhead d\'exécution dépasse la limite de 8 Go. La version 12 Go franchit ce seuil avec 5–6 Go de marge. Pour les LLM locaux, achetez toujours la version 12 Go.',
          },
          {
            q: 'Ollama fonctionne-t-il avec les GPU AMD comme la RX 7800 XT ?',
            a: 'Oui. Ollama prend en charge l\'accélération AMD via ROCm sous Linux et Vulkan sous Windows pour la RX 7800 XT et autres cartes RDNA3. Sous Linux avec ROCm, les performances sont proches de NVIDIA CUDA. Sous Windows, Vulkan fonctionne mais nécessite une étape de configuration manuelle. Si vous êtes sous Windows et recherchez une installation sans friction, la RTX 3060 12 Go est un choix plus simple.',
          },
          {
            q: 'Que vérifier lors d\'un achat sur Mercari (メルカリ) ?',
            a: 'Vérifiez le statut 保証 (garantie) dans l\'annonce — au moins un mois de garantie fabricant est souhaitable. Demandez directement au vendeur si le GPU a été utilisé pour le マイニング (minage). Les GPU de minage fonctionnent 24h/24 en pleine charge et ont une durée de vie nettement réduite. La note du vendeur doit dépasser 95 % ; n\'achetez qu\'aux annonces avec plusieurs photos nettes de la vraie carte.',
          },
          {
            q: 'Peut-on utiliser un eGPU avec un MacBook pour l\'inférence LLM locale au Japon ?',
            a: 'Oui, via Thunderbolt 3 ou 4. Un eGPU avec RTX 3060 12 Go ou RTX 4060 Ti 16 Go exécute Ollama et llama.cpp avec accélération GPU. Les performances atteignent environ 80 % d\'une connexion PCIe interne en raison des limites de bande passante Thunderbolt. Les boîtiers eGPU (Razer Core X, Sonnet Breakaway Box) sont disponibles chez Yodobashi Camera et Amazon.co.jp. Détails : [guide eGPU + MacBook Ollama](/fr/prompt-bites/best-egpu-ollama-macbook).',
          },
          {
            q: 'Quels sont les coûts en électricité pour faire fonctionner un GPU au Japon ?',
            a: 'Le Japon facture en moyenne environ ¥31/kWh (2026). À 4 heures d\'inférence quotidienne : RTX 3060 12 Go (170 W) ~¥1 600/mois. RTX 4060 Ti 16 Go (165 W) ~¥1 550/mois. RTX 3090 24 Go (350 W) ~¥3 300/mois. À 8 h/jour, doublez ces chiffres. Intégrez ce coût dans le calcul du coût total de possession avant d\'acheter.',
          },
        ],
      },
    },
  },

  ja: {
    theme: 'Hardware Guides',
    title: '日本でコスパ最強のローカルLLM用GPUは？',
    seoTitle: '日本のローカルLLM向けコスパ最強GPU 2026 | Prompt Bites | PromptQuorum',
    metaDescription:
      '日本でローカルLLMに最強コスパのGPU：RTX 3060 12GB（新品~¥40,000、中古~¥25,000、2026年5月）。秋葉原のツクモ、ドスパラで購入可。7Bモデルを20~25 tok/sで実行。',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: '日本在住でローカルLLM推論用GPUを購入するユーザー',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '5分で読める',
    leadAnswerBlock:
      '日本ではRTX 3060 12 GBがコスパ最強（新品~¥40,000、中古~¥25,000）。12 GB VRAMで7Bモデルを20~25 tok/sで実行可能。秋葉原のツクモ（ツクモ）、ドスパラ（ドスパラ）で購入できます。',
    toc: [
      { label: '価格帯別GPU一覧（日本）', anchor: '#gpus-by-price' },
      { label: '日本での購入ガイド', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      '日本のGPU価格は輸入コストと消費税10%の影響で、米国価格より15〜20%高くなっています。中古市場（メルカリ、Yahoo!オークション、じゃんぱら）を使えば新品比30〜40%の節約が可能です。このガイドでは2026年5月時点の実際の店頭価格——ツクモ、ドスパラ、ヨドバシカメラでの新品価格とオンラインの中古相場——をもとに、日本で買う価値のある4枚のGPUを解説します。',
    quickAnswerTop: {
      ja: {
        question: '日本でコスパ最強のローカルLLM用GPUは？',
        answer:
          '日本ではRTX 3060 12 GBがコスパ最強（新品~¥40,000、中古~¥25,000）。12 GB VRAMで全7Bモデルを20~25 tok/sで動かせ、CUDA設定も不要です。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/中古¥25K — 7Bモデルに最高のコスパ（20~25 tok/s）。',
          'RTX 4060 Ti 16 GB：新品¥65K/中古¥50K — 13Bモデルへのステップアップ（18~22 tok/s）。',
          'RTX 3090 24 GB 中古¥90K — 日本のアパートでは非推奨：340W、電気代約¥8,000/月。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'コスパ最強：RTX 3060 12 GB 新品~¥40,000/中古~¥25,000（2026年5月）— 7Bモデルを20~25 tok/sで実行',
          'ミドルレンジ：RTX 4060 Ti 16 GB 新品¥65,000 — 13Bモデルを18~22 tok/s、16 GBのコンテキスト余裕',
          'AMD代替：RX 7800 XT 16 GB 新品¥70,000 — 16 GB VRAM、Vulkan/ROCm、Linuxユーザー向け',
          '要注意：RTX 3090 24 GBは日本のアパートでは非推奨 — 340W TDP、¥31/kWhで月約¥8,000の電気代',
          '中古購入先：メルカリ、Yahoo!オークション、秋葉原のじゃんぱら',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年5月時点で、日本でローカルLLMにコスパ最強のGPUはRTX 3060 12 GB（新品~¥40,000）です。',
          },
          {
            type: 'plain-terms',
            text: '日本のGPU価格は米国より15〜20%高め。RTX 3060 12 GBは7Bモデルを20~25 tok/sで動かせ、秋葉原のツクモ・ドスパラで購入可能、またはメルカリで¥25,000の中古が見つかります。',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: '価格帯別GPU一覧（日本）',
        content: [
          '<strong>2026年5月時点で、日本のGPU価格は輸入コストと10%消費税の影響により、米国価格より15〜20%高くなっています。以下の4枚は中古¥25,000から中古¥90,000まで、ローカルLLM推論のあらゆる現実的な予算をカバーします。</strong>',
          '以下の表は、ツクモ・ドスパラ・ヨドバシカメラの2026年5月時点の新品店頭価格と、メルカリ/Yahoo!オークションの中古相場中央値を使用しています。価格は変動しますので、購入前に必ず確認してください。',
        ],
        columns: ['GPU + VRAM', '新品 / 中古価格（¥）', '最適な用途'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            '新品 / 中古価格（¥）': '¥40,000 / ¥25,000',
            '最適な用途': '7Bモデル、コスパ最強',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            '新品 / 中古価格（¥）': '¥65,000 / ¥50,000',
            '最適な用途': '13Bモデル、ミドルレンジ',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            '新品 / 中古価格（¥）': '¥70,000 / ¥55,000',
            '最適な用途': 'AMD/Vulkan/ROCm（Linux向け）',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            '新品 / 中古価格（¥）': '— / ¥90,000',
            '最適な用途': '30B+モデル（非推奨：340W、アパートには不向き）',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — 最適：初めてのGPUビルド、7Bモデル、予算重視の方。見送り条件：13B以上のモデルが必要な場合。',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — 最適：13Bモデル、3060からのステップアップ。見送り条件：予算が厳しく7Bで十分な場合。',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — 最適：AMDファン、Linux上でのVulkan/ROCm。見送り条件：CUDAエコシステムを好む場合。',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — 日本のアパートには非推奨。340W TDPで¥31/kWhの電気代が月約¥8,000かかります。専用の部屋と十分な換気がある場合のみ購入を検討してください。',
          },
        ],
        items: [
          '日本でGPU不要のミニPCによる推論については、[日本ミニPCガイド](/ja/prompt-bites/best-mini-pc-local-llm-japan)をご覧ください。',
          'これらのGPUで動かすのに最適な日本語モデルについては、[日本語LLMモデルガイド](/ja/prompt-bites/best-japanese-language-models-local)をご覧ください。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥25,000~40,000',
            label: 'Amazon.co.jpでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'ツクモでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'ドスパラでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.yodobashi.com/category/11010/11012/?searchWord=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'ヨドバシカメラでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥50,000~65,000',
            label: 'Amazon.co.jpでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55,000~70,000',
            label: 'Amazon.co.jpでRX 7800 XTの価格を確認',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: '日本での購入ガイド',
        content: [
          '<strong>日本のGPU購入には2つの信頼できるチャネルがあります：正規販売店での新品（Amazon.co.jp、ツクモ、ドスパラ、ヨドバシカメラ）と、メルカリ・Yahoo!オークション・秋葉原のじゃんぱらでの中古購入です。</strong>初めて買う方には秋葉原に大きなメリットがあります：実機を手に取って確認でき、スタッフに互換性を相談でき、当日持ち帰れます。',
          '新品GPUの販売店（2026年5月時点の価格）：Amazon.co.jpは全国にPrime翌日配送。秋葉原の1丁目にあるツクモ（ツクモ）はLLMビルドに詳しいスタッフが揃い、最も豊富な在庫を誇ります。ドスパラ（ドスパラ）秋葉原店はNVIDIAカードが充実。ヨドバシカメラ マルチメディアAkibaは全主要ブランドを扱い、ヨドバシポイントも貯まります。',
          '中古GPUの購入先：メルカリ（メルカリ）とYahoo!オークション（Yahoo!オークション）は最大の品揃えと最低価格が魅力です。秋葉原のじゃんぱら（じゃんぱら）は30日返品保証付きの信頼できる中古専門店です。メルカリで購入する際のチェックポイント：出品ページの保証ステータスを確認し、マイニング（マイニング）使用歴を必ず確認、販売者評価は95%以上のもの、実際のカードが複数枚鮮明に写った写真があるものを選んでください。マイニングGPUは24時間フル負荷で動作しており、寿命が大幅に短くなっています。',
          '予算別購入フローチャート：¥30,000以下 → メルカリで中古RTX 3060 12 GB。¥30,000〜50,000 → ツクモまたはドスパラで新品RTX 3060 12 GB。¥50,000〜70,000 → RTX 4060 Ti 16 GB（中古）またはRX 7800 XT（新品）。¥70,000超 → RX 7800 XT新品、またはRTX 3090中古（専用部屋と良好な換気がある場合のみ）。',
          '日本の電気代：日本の平均電気代は¥31/kWh（2026年）。1日8時間の推論使用で：RTX 3060 12 GB（170W）は月約¥3,200。RTX 4060 Ti 16 GB（165W）は月約¥3,100。RTX 3090 24 GB（350W）は月約¥6,600。RTX 3090購入でのRTX 3060比¥15,000の節約も、電気代の差額で2〜3ヶ月で消えてしまいます。総所有コストで考えてください。',
          '全予算帯のGPU選び概要：[ローカルLLM向けベストバジェットGPUガイド](/local-llms/best-budget-gpus-local-llm)。AMD GPU特化の選び方：[ローカルLLM向けベストAMD GPUガイド](/local-llms/best-amd-gpus-local-llm)。',
          '<em>開示：当ページは特定商取引法に基づき、アフィリエイトリンクを含みます。リンク経由での購入により収益が発生することがあります。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（中古）',
            productCategory: 'gpu',
            priceRange: '¥20,000~25,000',
            label: 'メルカリで中古RTX 3060 12GBを検索',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（中古）',
            productCategory: 'gpu',
            priceRange: '¥20,000~27,000',
            label: 'Yahoo!オークションで中古RTX 3060 12GBを検索',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（中古）',
            productCategory: 'gpu',
            priceRange: '¥25,000~30,000',
            label: 'じゃんぱらで中古RTX 3060 12GBを検索',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ：日本でローカルLLM用GPUを購入する',
        faqs: [
          {
            q: 'RTX 3060の12 GB版と8 GB版の違いは何ですか？',
            a: '8 GB版はQ4_K_M量子化での7Bモデル実行ができません。7BモデルをQ4_K_Mで動かすには約6 GBのVRAMが必要で、ランタイムのオーバーヘッドが加わると8GBの上限を超えてしまいます。12 GB版なら5〜6 GBの余裕を持って余裕でクリアできます。ローカルLLMには必ず12 GB版を購入してください。',
          },
          {
            q: 'OllamaはRX 7800 XTなどのAMD GPUで動作しますか？',
            a: 'はい。OllamaはLinuxではROCm、WindowsではVulkanを通じてRX 7800 XTおよびRDNA3カードのGPUアクセラレーションをサポートしています。Linux + ROCmではNVIDIA CUDAに近いパフォーマンスが出ます。Windowsでも動きますが、手動でのセットアップが必要で速度はCUDAより落ちます。Windowsでセットアップの手間を省きたいなら、RTX 3060 12 GBのほうが楽です。',
          },
          {
            q: 'メルカリ（メルカリ）で購入する際に確認すべき点は？',
            a: '出品ページの保証（保証）ステータスを確認してください。できればメーカー保証が1ヶ月以上残っているものが理想です。マイニング（マイニング）使用歴を必ず出品者に直接確認してください。マイニングGPUは24時間フル負荷で動くため、寿命が大幅に短くなっています。販売者評価は95%以上のものを選び、実際のカードの鮮明な写真が複数枚掲載されている出品のみ購入してください。',
          },
          {
            q: 'MacBookにeGPUを接続してローカルLLM推論に使えますか？',
            a: 'はい、Thunderbolt 3または4経由で可能です。RTX 3060 12 GBまたはRTX 4060 Ti 16 GBを搭載したeGPUでOllamaやllama.cppをGPUアクセラレーションで動かせます。Thunderboltの帯域制限により、内蔵PCIe接続と比べ約80%のパフォーマンスになります。eGPUエンクロージャー（Razer Core X、Sonnet eGPU Breakaway Boxなど）はヨドバシカメラやAmazon.co.jpで購入できます。セットアップの詳細は[eGPU + MacBook Ollamaガイド](/ja/prompt-bites/best-egpu-ollama-macbook)をご覧ください。',
          },
          {
            q: '日本でGPUを動かすときの電気代はいくらですか？',
            a: '日本の電気代は平均約¥31/kWh（2026年）。1日4時間の推論使用で：RTX 3060 12 GB（170W）は月約¥1,600。RTX 4060 Ti 16 GB（165W）は月約¥1,550。RTX 3090 24 GB（350W）は月約¥3,300。1日8時間ならこれらを2倍にしてください。購入前に総所有コストに電気代も含めて計算することをお勧めします。',
          },
        ],
      },
    },
  },

  zh: {
    theme: 'Hardware Guides',
    title: '在日本性价比最高的本地LLM显卡是什么？',
    seoTitle: '日本本地LLM性价比最高显卡2026 | Prompt Bites | PromptQuorum',
    metaDescription:
      '日本本地LLM性价比最高显卡：RTX 3060 12 GB（新品约¥40,000日元/二手约¥25,000，2026年5月）。秋叶原Tsukumo和Dospara有售。7B模型可达20-25 tok/s。',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: '居住在日本、为本地LLM推断购买显卡的用户',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '阅读约5分钟',
    leadAnswerBlock:
      '在日本，RTX 3060 12 GB性价比最高（新品约¥40,000日元，二手约¥25,000）。12 GB VRAM可运行7B模型达20-25 tok/s。可在秋叶原的Tsukumo（ツクモ）和Dospara（ドスパラ）购买。',
    toc: [
      { label: '日本各价位显卡一览', anchor: '#gpus-by-price' },
      { label: '日本购买指南', anchor: '#buying-guide' },
      { label: '常见问题', anchor: '#faq' },
    ],
    intro:
      '由于进口成本和10%消费税，日本显卡价格比美国高出15-20%。二手市场（Mercari、Yahoo拍卖、Janpara）可节省30-40%。本指南基于2026年5月实际街头价格——包括Tsukumo、Dospara、Yodobashi的新品价和网上二手价——为您梳理在日本值得购买的四款显卡。人民币参考价：RTX 3060 12 GB约¥1,800 CNY新品/¥1,200二手；RTX 4060 Ti 16 GB约¥2,800 CNY新品。',
    quickAnswerTop: {
      zh: {
        question: '在日本性价比最高的本地LLM显卡是什么？',
        answer:
          'RTX 3060 12 GB（新品约¥40,000日元，二手约¥25,000）在日本性价比最高。12 GB显存无需配置CUDA即可运行所有7B模型，速度20-25 tok/s。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/二手¥25K — 7B模型最佳性价比（20-25 tok/s）。',
          'RTX 4060 Ti 16 GB：新品¥65K/二手¥50K — 升级13B模型（18-22 tok/s）。',
          'RTX 3090 24 GB二手¥90K — 日本公寓不推荐：340W，每月电费约¥8,000。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '性价比最优：RTX 3060 12 GB新品~¥40,000/二手~¥25,000（2026年5月）— 7B模型20-25 tok/s',
          '中端选择：RTX 4060 Ti 16 GB新品¥65,000 — 13B模型18-22 tok/s，16 GB上下文余量充足',
          'AMD替代：RX 7800 XT 16 GB新品¥70,000 — 16 GB显存，Vulkan/ROCm，适合Linux用户',
          '需避免：日本公寓不推荐RTX 3090 24 GB — 340W功耗，以¥31/kWh计每月约¥8,000电费',
          '二手渠道：Mercari（メルカリ）、Yahoo拍卖（Yahoo!オークション）、秋叶原Janpara（じゃんぱら）',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '截至2026年5月，RTX 3060 12 GB（新品约¥40,000日元）是日本本地LLM性价比最高的显卡。',
          },
          {
            type: 'plain-terms',
            text: '日本显卡价格比美国高15-20%。RTX 3060 12 GB可运行所有7B模型达20-25 tok/s，在秋叶原Tsukumo和Dospara有售，或在Mercari以¥25,000找到二手。',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: '日本各价位显卡一览',
        content: [
          '<strong>2026年5月，由于进口成本和10%消费税，日本显卡价格比美国高出15-20%。以下四款涵盖二手¥25,000到二手¥90,000的所有本地LLM推理实际预算范围。人民币参考价：RTX 3060 12 GB约¥1,800 CNY新品/¥1,200二手；RTX 4060 Ti 16 GB约¥2,800 CNY新品/¥2,200二手。</strong>',
          '下表使用Tsukumo、Dospara、Yodobashi的2026年5月新品价格及Mercari/Yahoo拍卖二手中位数。价格有波动——购买前请重新核对。',
        ],
        columns: ['显卡 + 显存', '新品 / 二手价格（¥日元）', '最适用途'],
        rows: [
          {
            '显卡 + 显存': 'RTX 3060 12 GB',
            '新品 / 二手价格（¥日元）': '¥40,000 / ¥25,000',
            '最适用途': '7B模型，最佳性价比',
          },
          {
            '显卡 + 显存': 'RTX 4060 Ti 16 GB',
            '新品 / 二手价格（¥日元）': '¥65,000 / ¥50,000',
            '最适用途': '13B模型，中端选择',
          },
          {
            '显卡 + 显存': 'RX 7800 XT 16 GB',
            '新品 / 二手价格（¥日元）': '¥70,000 / ¥55,000',
            '最适用途': 'AMD/Vulkan/ROCm（Linux用户）',
          },
          {
            '显卡 + 显存': 'RTX 3090 24 GB',
            '新品 / 二手价格（¥日元）': '— / ¥90,000',
            '最适用途': '30B+模型（不推荐：340W，公寓不适合）',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — 适合：首次GPU构建、7B模型、预算有限的用户。不推荐：需要运行13B以上模型时。',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — 适合：13B模型、从3060升级。不推荐：预算紧且7B已够用时。',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — 适合：AMD爱好者、Linux上的Vulkan/ROCm。不推荐：偏好CUDA生态时。',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — 日本公寓不推荐。340W TDP以¥31/kWh计每月约¥8,000电费。仅在有专用房间且通风良好时购买。',
          },
        ],
        items: [
          '如需在日本使用无需GPU的迷你主机推理，请参见[日本迷你主机指南](/zh/prompt-bites/best-mini-pc-local-llm-japan)。',
          '如需了解在这些显卡上运行的最佳日语模型，请参见[日语LLM模型指南](/zh/prompt-bites/best-japanese-language-models-local)。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥25,000-40,000',
            label: '在Amazon.co.jp查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: '在Tsukumo（ツクモ）查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: '在Dospara（ドスパラ）查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥50,000-65,000',
            label: '在Amazon.co.jp查看RTX 4060 Ti 16GB价格',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55,000-70,000',
            label: '在Amazon.co.jp查看RX 7800 XT价格',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: '日本购买指南',
        content: [
          '<strong>在日本购买显卡有两条可靠渠道：从正规授权零售商购买新品（Amazon.co.jp、Tsukumo、Dospara、Yodobashi Camera），或从Mercari、Yahoo拍卖或秋叶原Janpara购买二手。</strong>对于首次购买者，秋叶原有决定性优势：可以亲手检查显卡、向店员咨询兼容性，并当天带走。',
          '日本新品显卡零售商（2026年5月价格）：Amazon.co.jp全国Prime次日达。秋叶原1丁目的Tsukumo（ツクモ）库存最丰富，员工具备LLM构建专业知识。Dospara（ドスパラ）秋叶原店NVIDIA显卡品类强大。Yodobashi Camera（ヨドバシカメラ）Multi Akiba覆盖所有主要品牌并可积累Yodobashi积分。',
          '二手显卡渠道：Mercari（メルカリ）和Yahoo! Auctions（Yahoo!オークション）提供最广泛的选择和最低价格。秋叶原的Janpara（じゃんぱら）是信誉良好的二手专卖店，提供30天退货保障。在Mercari购买时：检查清单中的保证（保証）状态，直接询问卖家显卡是否用于マイニング（挖矿），卖家评级需高于95%，并且只购买有多张真实显卡清晰照片的清单。挖矿显卡24小时满负荷运行，寿命大幅缩短。',
          '预算决策矩阵：不足¥30,000 → Mercari购买二手RTX 3060 12 GB。¥30,000-50,000 → Tsukumo或Dospara购买新品RTX 3060 12 GB。¥50,000-70,000 → RTX 4060 Ti 16 GB（二手）或RX 7800 XT（新品）。超过¥70,000 → RX 7800 XT新品，或RTX 3090二手（仅在有专用房间且通风良好时）。',
          '日本电费说明：日本2026年平均约¥31/kWh。每日8小时推理使用：RTX 3060 12 GB（170W）约¥3,200/月。RTX 4060 Ti 16 GB（165W）约¥3,100/月。RTX 3090 24 GB（350W）约¥6,600/月。购买二手RTX 3090相比3060节省的¥15,000，2-3个月内就会被多出的电费消耗殆尽。',
          '全预算显卡选购概览：[本地LLM最佳预算显卡指南](/local-llms/best-budget-gpus-local-llm)。AMD显卡专项指南：[本地LLM最佳AMD显卡](/local-llms/best-amd-gpus-local-llm)。',
          '<em>披露：本文包含联盟链接，通过购买我们可能获得佣金，您不承担额外费用。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（二手）',
            productCategory: 'gpu',
            priceRange: '¥20,000-25,000',
            label: '在Mercari（メルカリ）搜索二手RTX 3060 12 GB',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（二手）',
            productCategory: 'gpu',
            priceRange: '¥20,000-27,000',
            label: '在Yahoo拍卖（Yahoo!オークション）搜索二手RTX 3060 12 GB',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（二手）',
            productCategory: 'gpu',
            priceRange: '¥25,000-30,000',
            label: '在Janpara（じゃんぱら）搜索二手RTX 3060 12 GB',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题：在日本购买本地LLM显卡',
        faqs: [
          {
            q: 'RTX 3060 12 GB和8 GB版本有什么区别？',
            a: '8 GB版本无法在Q4_K_M量化下运行7B模型——7B模型在Q4_K_M下需要约6 GB显存，加上运行时开销会超过8 GB上限。12 GB版本有5-6 GB的余量可以轻松通过。购买本地LLM显卡请始终选择12 GB版本。8 GB版仅适合游戏工作负载，不适合LLM推理。',
          },
          {
            q: 'Ollama是否支持RX 7800 XT等AMD显卡？',
            a: '是的。Ollama通过Linux上的ROCm和Windows上的Vulkan支持RX 7800 XT及其他RDNA3显卡的GPU加速。在Linux + ROCm下，性能接近NVIDIA CUDA。在Windows上Vulkan可以工作，但需要手动设置步骤，速度比CUDA慢。如果您使用Windows并希望零配置，RTX 3060 12 GB或RTX 4060 Ti 16 GB是更方便的选择。',
          },
          {
            q: '在Mercari（メルカリ）购买显卡时需要检查什么？',
            a: '检查清单中的保証（保证）状态——最好还有至少一个月的制造商保修。直接询问卖家显卡是否用于マイニング（挖矿）。挖矿显卡24小时满负荷运行，寿命大幅缩短。卖家评级需高于95%，只购买有多张清晰实物照片的清单（而非产品图）。',
          },
          {
            q: '可以在日本用eGPU连接MacBook进行本地LLM推理吗？',
            a: '可以，通过Thunderbolt 3或4连接。配备RTX 3060 12 GB或RTX 4060 Ti 16 GB的eGPU可以在GPU加速下运行Ollama和llama.cpp。由于Thunderbolt带宽限制，性能约为内置PCIe连接的80%。eGPU机箱（Razer Core X、Sonnet eGPU Breakaway Box）可在Yodobashi Camera和Amazon.co.jp购买。详细设置请参见[eGPU + MacBook Ollama指南](/zh/prompt-bites/best-egpu-ollama-macbook)。',
          },
          {
            q: '在日本运行显卡的电费是多少？',
            a: '日本2026年平均约¥31/kWh。每日4小时推理使用：RTX 3060 12 GB（170W）约¥1,600/月。RTX 4060 Ti 16 GB（165W）约¥1,550/月。RTX 3090 24 GB（350W）约¥3,300/月。每日8小时则将这些数字翻倍。购买前请将电费纳入总拥有成本计算。',
          },
        ],
      },
    },
  },

  es: {
    theme: 'Hardware Guides',
    title: '¿Cuál es la mejor GPU por precio para LLMs locales en Japón?',
    seoTitle: 'Mejor GPU para LLMs en Japón 2026 | PromptQuorum',
    metaDescription:
      'RTX 3060 12 GB es la mejor GPU por precio en Japón: ~¥40,000 nueva, ¥25,000 de segunda mano. Modelos 7B a 20–25 tok/s. Disponible en Tsukumo y Dospara.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios en Japón que compran una GPU para inferencia local con LLMs',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '5 min de lectura',
    leadAnswerBlock:
      'En Japón, la RTX 3060 12 GB ofrece el mejor precio/rendimiento (nueva ~¥40,000, de segunda mano ~¥25,000). 12 GB VRAM ejecuta modelos 7B a 20–25 tok/s. Disponible en Tsukumo y Dospara en Akihabara.',
    toc: [
      { label: 'GPUs por rango de precio en Japón', anchor: '#gpus-by-price' },
      { label: 'Guía de compra en Japón', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Los precios de GPUs en Japón están 15–20% por encima de los precios en EE.UU. debido a costes de importación y el 10% de IVA. El mercado de segunda mano (Mercari, Yahoo Auctions, Janpara) puede ahorrar entre un 30–40% frente al precio de nuevo. Esta guía mapea las cuatro GPUs que vale la pena comprar en Japón con sus precios reales de calle de mayo 2026.',
    quickAnswerTop: {
      en: {
        question: 'What is the best value GPU for local LLMs in Japan?',
        answer: 'RTX 3060 12GB at ~¥40,000 new.',
        bullets: ['RTX 3060 12GB: ¥40K new / ¥25K used', 'RTX 4060 Ti 16GB: ¥65K new'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Beste GPU für LLMs Japan?',
        answer: 'RTX 3060 12 GB — bestes Preis-Leistungs-Verhältnis.',
        bullets: ['RTX 3060: ¥40K neu / ¥25K gebraucht'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleure GPU LLM Japon ?',
        answer: 'RTX 3060 12 Go — meilleur rapport qualité-prix.',
        bullets: ['RTX 3060: ¥40K neuve / ¥25K occasion'],
        updatedDate: '2026-05',
      },
      ja: {
        question: '日本でコスパ最強のLLM用GPUは？',
        answer: 'RTX 3060 12 GB（新品~¥40,000）がコスパ最強。',
        bullets: ['RTX 3060: 新品¥40K/中古¥25K'],
        updatedDate: '2026-05',
      },
      zh: {
        question: '日本LLM最佳性价比显卡？',
        answer: 'RTX 3060 12 GB（新品约¥40,000）性价比最高。',
        bullets: ['RTX 3060: 新品¥40K/二手¥25K'],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es la mejor GPU por precio para LLMs locales en Japón?',
        answer:
          'La RTX 3060 12 GB a ~¥40,000 nueva (¥25,000 de segunda mano) es la mejor GPU por precio en Japón. 12 GB VRAM ejecuta cualquier modelo 7B a 20–25 tok/s sin configuración adicional.',
        bullets: [
          'RTX 3060 12 GB: ¥40K nueva / ¥25K segunda mano — mejor valor para modelos 7B a 20-25 tok/s.',
          'RTX 4060 Ti 16 GB: ¥65K nueva / ¥50K segunda mano — acceso a modelos 13B a 18-22 tok/s.',
          'RTX 3090 24 GB segunda mano ¥90K — evitar en apartamentos japoneses: 340W, ~¥8,000/mes en electricidad.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor valor: RTX 3060 12 GB a ~¥40,000 nueva / ¥25,000 de segunda mano (mayo 2026) — modelos 7B a 20-25 tok/s',
          'Gama media: RTX 4060 Ti 16 GB a ¥65,000 nueva — modelos 13B a 18-22 tok/s, 16 GB de margen',
          'Alternativa AMD: RX 7800 XT 16 GB a ¥70,000 — 16 GB VRAM, Vulkan/ROCm, ideal para Linux',
          'Evitar: RTX 3090 24 GB en apartamentos japoneses — 340W TDP genera ~¥8,000/mes a ¥31/kWh',
          'Segunda mano: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) en Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La RTX 3060 12 GB a ~¥40,000 nueva es la GPU con mejor relación precio/rendimiento para LLMs locales en Japón a mayo de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Los precios de GPUs en Japón son 15-20% superiores a los de EE.UU. La RTX 3060 12 GB ejecuta cualquier modelo 7B a 20-25 tok/s y se encuentra en Tsukumo y Dospara en Akihabara, o de segunda mano en Mercari por ¥25,000.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs por rango de precio en Japón',
        content: [
          '<strong>A mayo de 2026, los precios de GPUs en Japón están 15–20% por encima de los precios equivalentes en EE.UU. Las cuatro tarjetas siguientes cubren cualquier presupuesto realista para inferencia local con LLMs, de ¥25,000 de segunda mano a ¥90,000 de segunda mano.</strong>',
          'La siguiente tabla usa precios de calle de mayo 2026 de Tsukumo, Dospara y Yodobashi para tarjetas nuevas, y puntos medios de Mercari/Yahoo Auctions para las de segunda mano. Los precios fluctúan — verifica antes de comprar.',
        ],
        columns: ['GPU + VRAM', 'Precio nueva / segunda mano (¥)', 'Mejor para'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            'Precio nueva / segunda mano (¥)': '¥40,000 / ¥25,000',
            'Mejor para': 'Modelos 7B, mejor valor de entrada',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            'Precio nueva / segunda mano (¥)': '¥65,000 / ¥50,000',
            'Mejor para': 'Modelos 13B, gama media',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            'Precio nueva / segunda mano (¥)': '¥70,000 / ¥55,000',
            'Mejor para': 'AMD/Vulkan/ROCm en Linux',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            'Precio nueva / segunda mano (¥)': '— / ¥90,000',
            'Mejor para': 'Modelos 30B+ (EVITAR: 340W, demasiado caliente para apartamentos)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — Ideal para: primera build con GPU, modelos 7B, presupuesto ajustado. Evita si: necesitas modelos 13B+.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — Ideal para: modelos 13B, salto desde la 3060. Evita si: el presupuesto es ajustado y el 7B es suficiente.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — Ideal para: fans de AMD, Vulkan/ROCm en Linux. Evita si: prefieres el ecosistema CUDA.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — EVITAR en apartamentos japoneses. 340W TDP genera ~¥8,000/mes a ¥31/kWh. Compra solo si tienes una habitación dedicada con buena ventilación.',
          },
        ],
        items: [
          'Para inferencia sin GPU en Japón con mini PC, consulta nuestra [guía de mini PCs para Japón](/es/prompt-bites/best-mini-pc-local-llm-japan).',
          'Para los mejores modelos en japonés, consulta nuestra [guía de modelos LLM en japonés](/es/prompt-bites/best-japanese-language-models-local).',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥25,000-40,000',
            label: 'Ver precio RTX 3060 12 GB en Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'Ver precio RTX 3060 12 GB en Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥50,000-65,000',
            label: 'Ver precio RTX 4060 Ti 16 GB en Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55,000-70,000',
            label: 'Ver precio RX 7800 XT en Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Guía de compra en Japón',
        content: [
          '<strong>Japón ofrece dos canales de compra fiables para GPUs: nuevo en tiendas autorizadas (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) y de segunda mano en Mercari, Yahoo Auctions o Janpara en Akihabara.</strong> Para compradores por primera vez, Akihabara tiene una ventaja decisiva: puedes inspeccionar la tarjeta en persona y llevártela el mismo día.',
          'Vendedores de GPUs nuevas en Japón (precios de mayo 2026): Amazon.co.jp envía a todo el país con entrega Prime al día siguiente. Tsukumo (ツクモ) en el 1-chome de Akihabara tiene el stock más amplio. Dospara (ドスパラ) Akihabara es fuerte en tarjetas NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba tiene todas las marcas principales.',
          'Fuentes de segunda mano: Mercari (メルカリ) y Yahoo! Auctions (Yahoo!オークション) ofrecen la mayor selección y los precios más bajos. Janpara (じゃんぱら) en Akihabara es un especialista de segunda mano con devoluciones de 30 días. Al comprar en Mercari: comprueba el estado de garantía (保証), pregunta si la GPU se usó para minería (マイニング), y evita listings sin varias fotos claras de la tarjeta real.',
          'Matriz de decisión: Menos de ¥30,000 → RTX 3060 12 GB de segunda mano en Mercari. ¥30,000–50,000 → RTX 3060 12 GB nueva en Tsukumo o Dospara. ¥50,000–70,000 → RTX 4060 Ti 16 GB (segunda mano) o RX 7800 XT (nueva). Más de ¥70,000 → RX 7800 XT nueva o RTX 3090 de segunda mano (solo con habitación dedicada y buena ventilación).',
          'Nota sobre electricidad en Japón: Japón promedia ¥31/kWh (2026). A 8 horas de uso diario: RTX 3060 12 GB (170W) cuesta ~¥3,200/mes. RTX 4060 Ti 16 GB (165W) cuesta ~¥3,100/mes. RTX 3090 24 GB (350W) cuesta ~¥6,600/mes.',
          '<em>Aviso: Este artículo contiene enlaces de afiliado. Podemos ganar una comisión si compras a través de estos enlaces, sin coste adicional para ti.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (segunda mano)',
            productCategory: 'gpu',
            priceRange: '¥20,000-25,000',
            label: 'Buscar RTX 3060 12 GB de segunda mano en Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (segunda mano)',
            productCategory: 'gpu',
            priceRange: '¥20,000-27,000',
            label: 'Buscar RTX 3060 12 GB en Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (segunda mano)',
            productCategory: 'gpu',
            priceRange: '¥25,000-30,000',
            label: 'Buscar RTX 3060 12 GB en Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: Comprar una GPU para LLMs locales en Japón',
        faqs: [
          {
            q: '¿Cuál es la diferencia entre la RTX 3060 12 GB y la versión de 8 GB?',
            a: 'La versión de 8 GB no puede ejecutar modelos 7B en cuantización Q4_K_M — un modelo 7B a Q4_K_M necesita aproximadamente 6 GB de VRAM y el overhead supera el límite de 8 GB. La versión de 12 GB lo supera con 5–6 GB de margen. Para LLMs locales, compra siempre la versión de 12 GB.',
          },
          {
            q: '¿Ollama funciona con GPUs AMD como la RX 7800 XT?',
            a: 'Sí. Ollama admite aceleración GPU de AMD a través de ROCm en Linux y Vulkan en Windows para la RX 7800 XT y otras tarjetas RDNA3. En Linux con ROCm, el rendimiento es cercano a NVIDIA CUDA. En Windows, Vulkan funciona pero requiere configuración manual.',
          },
          {
            q: '¿Qué debo comprobar al comprar en Mercari (メルカリ)?',
            a: 'Comprueba el estado de garantía (保証) — idealmente con al menos un mes restante. Pregunta al vendedor si la GPU se usó para minería (マイニング). Verifica que la valoración del vendedor sea superior al 95% y compra solo listings con varias fotos claras de la tarjeta real.',
          },
          {
            q: '¿Se puede usar una eGPU con un MacBook para inferencia local en Japón?',
            a: 'Sí, a través de Thunderbolt 3 o 4. Una eGPU con RTX 3060 12 GB o RTX 4060 Ti 16 GB ejecutará Ollama y llama.cpp con aceleración GPU al ~80% del rendimiento de una conexión PCIe interna. Las carcasas eGPU están disponibles en Yodobashi Camera y Amazon.co.jp.',
          },
          {
            q: '¿Cuánto cuesta la electricidad para ejecutar una GPU en Japón?',
            a: 'Japón promedia aproximadamente ¥31/kWh en 2026. A 4 horas de uso diario: RTX 3060 12 GB (170W) cuesta ~¥1,600/mes. RTX 4060 Ti 16 GB (165W) cuesta ~¥1,550/mes. RTX 3090 24 GB (350W) cuesta ~¥3,300/mes.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware Guides',
    title: 'ما أفضل معالج رسومات من حيث السعر لتشغيل النماذج اللغوية الكبيرة محلياً في اليابان؟',
    seoTitle: 'أفضل معالج رسومات للنماذج اللغوية الكبيرة في اليابان 2026 | PromptQuorum',
    metaDescription:
      'RTX 3060 12 GB هو أفضل معالج رسومات من حيث السعر في اليابان: ~¥40,000 جديد، ¥25,000 مستعمل. نماذج 7B بـ20–25 رمز/ثانية. متاح في Tsukumo وDospara.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون في اليابان الذين يشترون معالج رسومات للاستدلال المحلي بالنماذج اللغوية الكبيرة',
    affiliateDisclosure: true,
    parentArticle: '/ar/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: 'قراءة 5 دقائق',
    leadAnswerBlock:
      'في اليابان، يقدم RTX 3060 12 GB أفضل أداء مقابل السعر (جديد ~¥40,000، مستعمل ~¥25,000). 12 جيجابايت VRAM يشغّل نماذج 7B بـ20–25 رمز/ثانية. متاح في Tsukumo وDospara في أكيهابارا.',
    toc: [
      { label: 'معالجات الرسومات حسب الفئة السعرية في اليابان', anchor: '#gpus-by-price' },
      { label: 'دليل الشراء في اليابان', anchor: '#buying-guide' },
      { label: 'أسئلة شائعة', anchor: '#faq' },
    ],
    intro:
      'أسعار معالجات الرسومات في اليابان أعلى بـ15–20% من الأسعار الأمريكية بسبب تكاليف الاستيراد و10% ضريبة استهلاك. يمكن للسوق المستعملة (Mercari وYahoo Auctions وJanpara) توفير 30–40% مقارنةً بالجديد. يُعيّن هذا الدليل معالجات الرسومات الأربعة الجديرة بالشراء في اليابان بأسعارها الحقيقية في الشوارع في مايو 2026.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل معالج رسومات من حيث السعر لتشغيل النماذج اللغوية الكبيرة محلياً في اليابان؟',
        answer:
          'RTX 3060 12 GB بـ~¥40,000 جديداً (¥25,000 مستعملاً) هو أفضل معالج رسومات من حيث السعر في اليابان. 12 جيجابايت VRAM يشغّل أي نموذج 7B بـ20–25 رمز/ثانية بدون إعداد إضافي.',
        bullets: [
          'RTX 3060 12 GB: ¥40K جديد / ¥25K مستعمل — أفضل قيمة لنماذج 7B بـ20-25 رمز/ثانية.',
          'RTX 4060 Ti 16 GB: ¥65K جديد / ¥50K مستعمل — الوصول إلى نماذج 13B بـ18-22 رمز/ثانية.',
          'RTX 3090 24 GB مستعمل ¥90K — تجنّب في شقق اليابانية: 340 واط، ~¥8,000/شهر في الكهرباء.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل قيمةً: RTX 3060 12 GB بـ~¥40,000 جديد / ¥25,000 مستعمل (مايو 2026) — نماذج 7B بـ20-25 رمز/ثانية',
          'الفئة المتوسطة: RTX 4060 Ti 16 GB بـ¥65,000 جديد — نماذج 13B بـ18-22 رمز/ثانية، هامش 16 جيجابايت',
          'بديل AMD: RX 7800 XT 16 GB بـ¥70,000 — 16 جيجابايت VRAM، Vulkan/ROCm، مثالي لنظام Linux',
          'تجنّب: RTX 3090 24 GB في الشقق اليابانية — 340 واط TDP يولّد ~¥8,000/شهر بـ¥31/كيلوواط ساعة',
          'مستعملة: Mercari (メルカリ)، Yahoo Auctions (Yahoo!オークション)، Janpara (じゃんぱら) في أكيهابارا',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RTX 3060 12 GB بـ~¥40,000 جديداً هو معالج الرسومات الأفضل أداءً مقابل السعر للنماذج اللغوية الكبيرة المحلية في اليابان اعتباراً من مايو 2026.',
          },
          {
            type: 'plain-terms',
            text: 'أسعار معالجات الرسومات في اليابان أعلى بـ15-20% من الأسعار الأمريكية. يشغّل RTX 3060 12 GB أي نموذج 7B بـ20-25 رمز/ثانية وهو متاح في Tsukumo وDospara في أكيهابارا، أو مستعملاً على Mercari بـ¥25,000.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'معالجات الرسومات حسب الفئة السعرية في اليابان',
        content: [
          '<strong>اعتباراً من مايو 2026، أسعار معالجات الرسومات في اليابان أعلى بـ15–20% من الأسعار المكافئة في الولايات المتحدة. تغطي البطاقات الأربعة التالية أي ميزانية واقعية للاستدلال المحلي بالنماذج اللغوية الكبيرة، من ¥25,000 مستعملاً إلى ¥90,000 مستعملاً.</strong>',
          'تستخدم الجدول التالي أسعار الشوارع في مايو 2026 من Tsukumo وDospara وYodobashi للبطاقات الجديدة، والنقاط الوسطى من Mercari/Yahoo Auctions للمستعملة. الأسعار تتقلب — تحقق قبل الشراء.',
        ],
        columns: ['معالج الرسومات + VRAM', 'السعر جديد / مستعمل (¥)', 'الأفضل لـ'],
        rows: [
          {
            'معالج الرسومات + VRAM': 'RTX 3060 12 GB',
            'السعر جديد / مستعمل (¥)': '¥40,000 / ¥25,000',
            'الأفضل لـ': 'نماذج 7B، أفضل قيمة للمبتدئين',
          },
          {
            'معالج الرسومات + VRAM': 'RTX 4060 Ti 16 GB',
            'السعر جديد / مستعمل (¥)': '¥65,000 / ¥50,000',
            'الأفضل لـ': 'نماذج 13B، الفئة المتوسطة',
          },
          {
            'معالج الرسومات + VRAM': 'RX 7800 XT 16 GB',
            'السعر جديد / مستعمل (¥)': '¥70,000 / ¥55,000',
            'الأفضل لـ': 'AMD/Vulkan/ROCm على Linux',
          },
          {
            'معالج الرسومات + VRAM': 'RTX 3090 24 GB',
            'السعر جديد / مستعمل (¥)': '— / ¥90,000',
            'الأفضل لـ': 'نماذج 30B+ (تجنّب: 340 واط، حرارة زائدة للشقق)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — مثالي لـ: أول بناء بمعالج رسومات، نماذج 7B، الميزانية المحدودة. تجنّب إذا: احتجت نماذج 13B فأكبر.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — مثالي لـ: نماذج 13B، ترقية من 3060. تجنّب إذا: الميزانية ضيقة و7B يكفي.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — مثالي لـ: محبو AMD، Vulkan/ROCm على Linux. تجنّب إذا: تفضل نظام CUDA البيئي.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — تجنّب في الشقق اليابانية. 340 واط TDP يولّد ~¥8,000/شهر من الكهرباء بـ¥31/كيلوواط ساعة. اشترِه فقط إذا كان لديك غرفة مخصصة بتهوية جيدة.',
          },
        ],
        items: [
          'للاستدلال بدون معالج رسومات في اليابان مع حاسب مصغر، راجع [دليل الحاسبات المصغرة لليابان](/ar/prompt-bites/best-mini-pc-local-llm-japan).',
          'لأفضل النماذج باللغة اليابانية، راجع [دليل نماذج LLM اليابانية](/ar/prompt-bites/best-japanese-language-models-local).',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥25,000-40,000',
            label: 'عرض سعر RTX 3060 12 GB على Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40,000',
            label: 'عرض سعر RTX 3060 12 GB في Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥50,000-65,000',
            label: 'عرض سعر RTX 4060 Ti 16 GB على Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55,000-70,000',
            label: 'عرض سعر RX 7800 XT على Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'دليل الشراء في اليابان',
        content: [
          '<strong>تتوفر في اليابان قناتا شراء موثوقتان لمعالجات الرسومات: جديد لدى تجار معتمدين (Amazon.co.jp وTsukumo وDospara وYodobashi Camera) ومستعمل على Mercari وYahoo Auctions أو Janpara في أكيهابارا.</strong> لمن يشتري لأول مرة، تتميز أكيهابارا بميزة حاسمة: يمكنك فحص البطاقة شخصياً والمغادرة بها في نفس اليوم.',
          'بائعو معالجات الرسومات الجديدة في اليابان (أسعار مايو 2026): Amazon.co.jp توصّل في جميع أنحاء البلاد مع توصيل Prime في اليوم التالي. Tsukumo (ツクモ) في أكيهابارا رقم 1-chome لديها أوسع مخزون وموظفون متمرسون في بناء أجهزة النماذج اللغوية الكبيرة. Dospara (ドスパラ) أكيهابارا قوية في بطاقات NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba تغطي جميع الماركات الرئيسية.',
          'مصادر المستعمل: تقدم Mercari (メルカリ) وYahoo! Auctions (Yahoo!オークション) أوسع اختيار وأدنى أسعار. Janpara (じゃんぱら) في أكيهابارا متخصص موثوق في المستعمل مع إمكانية إرجاع خلال 30 يوماً. عند الشراء من Mercari: تحقق من حالة الضمان (保証) في القائمة، اسأل البائع مباشرةً إذا كانت بطاقة الرسومات استُخدمت للتعدين (マイニング)، وتجنّب القوائم بدون صور واضحة متعددة للبطاقة الفعلية.',
          'مصفوفة قرار الميزانية: أقل من ¥30,000 → RTX 3060 12 GB مستعملة على Mercari. ¥30,000–50,000 → RTX 3060 12 GB جديدة في Tsukumo أو Dospara. ¥50,000–70,000 → RTX 4060 Ti 16 GB (مستعملة) أو RX 7800 XT (جديدة). أكثر من ¥70,000 → RX 7800 XT جديدة أو RTX 3090 مستعملة (بغرفة مخصصة وتهوية جيدة فقط).',
          'ملاحظة حول الكهرباء في اليابان: معدل ¥31/كيلوواط ساعة (2026). بـ8 ساعات استدلال يومياً: RTX 3060 12 GB (170 واط) تكلف ~¥3,200/شهر. RTX 4060 Ti 16 GB (165 واط) تكلف ~¥3,100/شهر. RTX 3090 24 GB (350 واط) تكلف ~¥6,600/شهر.',
          '<em>إشعار: يحتوي هذا المقال على روابط تابعة. قد نحصل على عمولة إذا اشتريت من خلال هذه الروابط، بدون تكلفة إضافية عليك.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (مستعمل)',
            productCategory: 'gpu',
            priceRange: '¥20,000-25,000',
            label: 'البحث عن RTX 3060 12 GB مستعمل في Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (مستعمل)',
            productCategory: 'gpu',
            priceRange: '¥20,000-27,000',
            label: 'البحث عن RTX 3060 12 GB في Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (مستعمل)',
            productCategory: 'gpu',
            priceRange: '¥25,000-30,000',
            label: 'البحث عن RTX 3060 12 GB في Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: شراء معالج رسومات للنماذج اللغوية الكبيرة في اليابان',
        faqs: [
          {
            q: 'ما الفرق بين RTX 3060 12 GB وإصدار 8 جيجابايت؟',
            a: 'لا يمكن لإصدار 8 جيجابايت تشغيل نماذج 7B بتكميم Q4_K_M — يحتاج نموذج 7B بـ Q4_K_M إلى نحو 6 جيجابايت VRAM والعبء الزائد يتجاوز حد الـ8 جيجابايت. يتجاوز إصدار 12 جيجابايت هذا الحد بهامش 5–6 جيجابايت. للنماذج اللغوية الكبيرة المحلية، اشترِ دائماً إصدار 12 جيجابايت.',
          },
          {
            q: 'هل يعمل Ollama مع معالجات رسومات AMD مثل RX 7800 XT؟',
            a: 'نعم. يدعم Ollama تسريع معالج الرسومات AMD عبر ROCm في Linux وVulkan في Windows لبطاقة RX 7800 XT وغيرها من بطاقات RDNA3. في Linux مع ROCm، الأداء قريب من NVIDIA CUDA. في Windows، يعمل Vulkan لكن يتطلب خطوة إعداد يدوية.',
          },
          {
            q: 'ما الذي يجب التحقق منه عند الشراء من Mercari (メルカリ)؟',
            a: 'تحقق من حالة الضمان (保証) في القائمة — يفضل أن يتبقى شهر على الأقل من ضمان الشركة المصنعة. اسأل البائع مباشرةً إذا كانت بطاقة الرسومات استُخدمت للتعدين (マイニング). تحقق من أن تقييم البائع أعلى من 95% واشترِ فقط من قوائم بصور واضحة متعددة للبطاقة الفعلية.',
          },
          {
            q: 'هل يمكن استخدام eGPU مع MacBook للاستدلال المحلي في اليابان؟',
            a: 'نعم، عبر Thunderbolt 3 أو 4. eGPU مع RTX 3060 12 GB أو RTX 4060 Ti 16 GB ستشغّل Ollama وllama.cpp بتسريع معالج الرسومات بـ~80% من أداء اتصال PCIe الداخلي. حاويات eGPU متاحة في Yodobashi Camera وAmazon.co.jp.',
          },
          {
            q: 'ما تكاليف الكهرباء لتشغيل معالج رسومات في اليابان؟',
            a: 'يبلغ متوسط اليابان نحو ¥31/كيلوواط ساعة في 2026. بـ4 ساعات استدلال يومياً: RTX 3060 12 GB (170 واط) تكلف ~¥1,600/شهر. RTX 4060 Ti 16 GB (165 واط) تكلف ~¥1,550/شهر. RTX 3090 24 GB (350 واط) تكلف ~¥3,300/شهر.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware Guides',
    title: 'Qual é a melhor GPU por custo-benefício para LLMs locais no Japão?',
    seoTitle: 'Melhor GPU para LLMs no Japão 2026 | PromptQuorum',
    metaDescription:
      'RTX 3060 12 GB é a melhor GPU por custo-benefício no Japão: ~¥40.000 nova, ¥25.000 usada. Modelos 7B a 20–25 tok/s. Disponível na Tsukumo e Dospara.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'Usuários no Japão comprando uma GPU para inferência local com LLMs',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '5 min de leitura',
    leadAnswerBlock:
      'No Japão, a RTX 3060 12 GB oferece o melhor custo-benefício (nova ~¥40.000, usada ~¥25.000). 12 GB VRAM executa modelos 7B a 20–25 tok/s. Disponível na Tsukumo e Dospara em Akihabara.',
    toc: [
      { label: 'GPUs por faixa de preço no Japão', anchor: '#gpus-by-price' },
      { label: 'Guia de compra no Japão', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Os preços de GPUs no Japão estão 15–20% acima dos preços nos EUA devido a custos de importação e 10% de imposto de consumo. O mercado de usados (Mercari, Yahoo Auctions, Janpara) pode economizar 30–40% em relação ao novo. Este guia mapeia as quatro GPUs que valem a pena comprar no Japão com seus preços reais de rua de maio de 2026 — novas na Tsukumo, Dospara e Yodobashi, e usadas online.',
    quickAnswerTop: {
      en: {
        question: 'What is the best value GPU for local LLMs in Japan?',
        answer: 'RTX 3060 12GB at ~¥40,000 new.',
        bullets: ['RTX 3060 12GB: ¥40K new / ¥25K used', 'RTX 4060 Ti 16GB: ¥65K new'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Beste GPU für LLMs Japan?',
        answer: 'RTX 3060 12 GB — bestes Preis-Leistungs-Verhältnis.',
        bullets: ['RTX 3060: ¥40K neu / ¥25K gebraucht'],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Meilleure GPU LLM Japon ?',
        answer: 'RTX 3060 12 Go — meilleur rapport qualité-prix.',
        bullets: ['RTX 3060: ¥40K neuve / ¥25K occasion'],
        updatedDate: '2026-05',
      },
      ja: {
        question: '日本でコスパ最強のLLM用GPUは？',
        answer: 'RTX 3060 12 GB（新品~¥40,000）がコスパ最強。',
        bullets: ['RTX 3060: 新品¥40K/中古¥25K'],
        updatedDate: '2026-05',
      },
      zh: {
        question: '日本LLM最佳性价比显卡？',
        answer: 'RTX 3060 12 GB（新品约¥40,000）性价比最高。',
        bullets: ['RTX 3060: 新品¥40K/二手¥25K'],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es la mejor GPU por precio para LLMs locales en Japón?',
        answer:
          'La RTX 3060 12 GB a ~¥40,000 nueva (¥25,000 de segunda mano) es la mejor GPU por precio en Japón. 12 GB VRAM ejecuta cualquier modelo 7B a 20–25 tok/s sin configuración adicional.',
        bullets: [
          'RTX 3060 12 GB: ¥40K nueva / ¥25K segunda mano — mejor valor para modelos 7B a 20-25 tok/s.',
          'RTX 4060 Ti 16 GB: ¥65K nueva / ¥50K segunda mano — acceso a modelos 13B a 18-22 tok/s.',
          'RTX 3090 24 GB segunda mano ¥90K — evitar en apartamentos japoneses: 340W, ~¥8,000/mes en electricidad.',
        ],
        updatedDate: '2026-05',
      },
      pt: {
        question: 'Qual é a melhor GPU por custo-benefício para LLMs locais no Japão?',
        answer:
          'A RTX 3060 12 GB a ~¥40.000 nova (¥25.000 usada) é a melhor GPU por custo-benefício no Japão. 12 GB VRAM executa qualquer modelo 7B a 20–25 tok/s sem configuração adicional.',
        bullets: [
          'RTX 3060 12 GB: ¥40K nova / ¥25K usada — melhor valor para modelos 7B a 20-25 tok/s.',
          'RTX 4060 Ti 16 GB: ¥65K nova / ¥50K usada — acesso a modelos 13B a 18-22 tok/s.',
          'RTX 3090 24 GB usada ¥90K — evitar em apartamentos japoneses: 340W, ~¥8.000/mês em eletricidade.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor valor: RTX 3060 12 GB a ~¥40.000 nova / ¥25.000 usada (maio 2026) — modelos 7B a 20-25 tok/s',
          'Médio alcance: RTX 4060 Ti 16 GB a ¥65.000 nova — modelos 13B a 18-22 tok/s, 16 GB de margem de contexto',
          'Alternativa AMD: RX 7800 XT 16 GB a ¥70.000 — 16 GB VRAM, Vulkan/ROCm, ideal para Linux',
          'Evitar: RTX 3090 24 GB em apartamentos japoneses — 340W TDP gera ~¥8.000/mês a ¥31/kWh',
          'Usados: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) em Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A RTX 3060 12 GB a ~¥40.000 nova é a GPU com melhor custo-benefício para LLMs locais no Japão em maio de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Os preços de GPUs no Japão são 15-20% superiores aos dos EUA. A RTX 3060 12 GB executa qualquer modelo 7B a 20-25 tok/s e está disponível na Tsukumo e Dospara em Akihabara, ou usada no Mercari por ¥25.000.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs por faixa de preço no Japão',
        content: [
          '<strong>Em maio de 2026, os preços de GPUs no Japão estão 15–20% acima dos preços equivalentes nos EUA devido a custos de importação e 10% de imposto de consumo. As quatro placas abaixo cobrem qualquer orçamento realista para inferência LLM local, de ¥25.000 usada a ¥90.000 usada.</strong>',
          'A tabela abaixo usa preços de rua de maio de 2026 da Tsukumo, Dospara e Yodobashi para placas novas, e pontos médios do Mercari/Yahoo Auctions para usadas. Os preços flutuam — verifique antes de comprar.',
        ],
        columns: ['GPU + VRAM', 'Preço nova / usada (¥)', 'Melhor para'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            'Preço nova / usada (¥)': '¥40.000 / ¥25.000',
            'Melhor para': 'Modelos 7B, melhor valor de entrada',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            'Preço nova / usada (¥)': '¥65.000 / ¥50.000',
            'Melhor para': 'Modelos 13B, médio alcance',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            'Preço nova / usada (¥)': '¥70.000 / ¥55.000',
            'Melhor para': 'AMD/Vulkan/ROCm no Linux',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            'Preço nova / usada (¥)': '— / ¥90.000',
            'Melhor para': 'Modelos 30B+ (EVITAR: 340W, quente demais para apartamentos)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — Ideal para: primeira build com GPU, modelos 7B, compradores com orçamento reduzido. Evite se: precisar de modelos 13B+.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — Ideal para: modelos 13B, upgrade da 3060. Evite se: o orçamento for apertado e o 7B for suficiente.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — Ideal para: fãs de AMD, Vulkan/ROCm no Linux. Evite se: preferir o ecossistema CUDA.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — EVITAR em apartamentos japoneses. 340W TDP gera ~¥8.000/mês de eletricidade a ¥31/kWh. Compre somente se tiver um quarto dedicado com boa ventilação.',
          },
        ],
        items: [
          'Para inferência sem GPU no Japão com mini PC, consulte nosso [guia de mini PCs para o Japão](/pt/prompt-bites/best-mini-pc-local-llm-japan).',
          'Para os melhores modelos em japonês, consulte nosso [guia de modelos LLM em japonês](/pt/prompt-bites/best-japanese-language-models-local).',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥25.000-40.000',
            label: 'Ver preço da RTX 3060 12 GB na Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥40.000',
            label: 'Ver preço da RTX 3060 12 GB na Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥50.000-65.000',
            label: 'Ver preço da RTX 4060 Ti 16 GB na Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55.000-70.000',
            label: 'Ver preço da RX 7800 XT na Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Guia de compra no Japão',
        content: [
          '<strong>O Japão oferece dois canais de compra confiáveis para GPUs: novo em varejistas autorizados (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) e usado no Mercari, Yahoo Auctions ou Janpara em Akihabara.</strong> Para compradores de primeira vez, Akihabara tem uma vantagem decisiva: você pode inspecionar a placa pessoalmente e sair no mesmo dia.',
          'Varejistas de GPUs novas no Japão (preços de maio de 2026): Amazon.co.jp entrega em todo o país com Prime no dia seguinte. Tsukumo (ツクモ) em 1-chome, Akihabara tem o estoque mais amplo e equipe experiente para builds LLM. Dospara (ドスパラ) Akihabara é forte em placas NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba cobre todas as marcas principais com pontos Yodobashi.',
          'Fontes de usados: Mercari (メルカリ) e Yahoo! Auctions (Yahoo!オークション) oferecem a maior seleção e os menores preços. Janpara (じゃんぱら) em Akihabara é um especialista em usados de confiança com devoluções de 30 dias. Ao comprar no Mercari: verifique o status de garantia (保証) na listagem, pergunte ao vendedor se a GPU foi usada para mineração (マイニング) e evite listagens sem várias fotos claras da placa real.',
          'Matriz de decisão de orçamento: Abaixo de ¥30.000 → RTX 3060 12 GB usada no Mercari. ¥30.000–50.000 → RTX 3060 12 GB nova na Tsukumo ou Dospara. ¥50.000–70.000 → RTX 4060 Ti 16 GB (usada) ou RX 7800 XT (nova). Acima de ¥70.000 → RX 7800 XT nova ou RTX 3090 usada (somente com quarto dedicado e boa ventilação).',
          'Nota sobre eletricidade no Japão: média de ¥31/kWh (2026). A 8 horas de inferência diária: RTX 3060 12 GB (170W) custa ~¥3.200/mês. RTX 4060 Ti 16 GB (165W) custa ~¥3.100/mês. RTX 3090 24 GB (350W) custa ~¥6.600/mês.',
          '<em>Aviso: Este artigo contém links de afiliados. Podemos ganhar uma comissão se você comprar por meio desses links, sem custo adicional para você.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (usada)',
            productCategory: 'gpu',
            priceRange: '¥20.000-25.000',
            label: 'Buscar RTX 3060 12 GB usada no Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (usada)',
            productCategory: 'gpu',
            priceRange: '¥20.000-27.000',
            label: 'Buscar RTX 3060 12 GB usada no Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (usada)',
            productCategory: 'gpu',
            priceRange: '¥25.000-30.000',
            label: 'Buscar RTX 3060 12 GB usada na Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: Comprar uma GPU para LLMs locais no Japão',
        faqs: [
          {
            q: 'Qual é a diferença entre a RTX 3060 12 GB e a versão de 8 GB?',
            a: 'A versão de 8 GB não consegue executar modelos 7B em quantização Q4_K_M — um modelo 7B em Q4_K_M precisa de aproximadamente 6 GB de VRAM, e o overhead de tempo de execução ultrapassa o limite de 8 GB. A versão de 12 GB supera esse limite com 5–6 GB de sobra. Para LLMs locais, sempre compre a versão de 12 GB.',
          },
          {
            q: 'O Ollama funciona com GPUs AMD como a RX 7800 XT?',
            a: 'Sim. O Ollama suporta aceleração GPU da AMD via ROCm no Linux e Vulkan no Windows para a RX 7800 XT e outras placas RDNA3. No Linux com ROCm, o desempenho é próximo ao NVIDIA CUDA. No Windows, o Vulkan funciona, mas requer uma etapa de configuração manual. Se você estiver no Windows e priorizar zero configuração, a RTX 3060 12 GB ou RTX 4060 Ti 16 GB são escolhas mais fáceis.',
          },
          {
            q: 'O que devo verificar ao comprar no Mercari (メルカリ)?',
            a: 'Verifique o status de garantia (保証) na listagem — idealmente com pelo menos um mês de garantia do fabricante restante. Pergunte diretamente ao vendedor se a GPU foi usada para mineração (マイニング). Verifique se a avaliação do vendedor está acima de 95% e compre apenas de listagens com várias fotos claras da placa real.',
          },
          {
            q: 'Dá para usar uma eGPU com um MacBook para inferência local no Japão?',
            a: 'Sim, via Thunderbolt 3 ou 4. Uma eGPU com RTX 3060 12 GB ou RTX 4060 Ti 16 GB executará o Ollama e o llama.cpp com aceleração GPU. O desempenho é de aproximadamente 80% de uma conexão PCIe interna devido aos limites de largura de banda do Thunderbolt. Gabinetes eGPU estão disponíveis na Yodobashi Camera e Amazon.co.jp.',
          },
          {
            q: 'Quais são os custos de eletricidade para rodar uma GPU no Japão?',
            a: 'O Japão tem média de aproximadamente ¥31/kWh em 2026. A 4 horas de inferência diária: RTX 3060 12 GB (170W) custa ~¥1.600/mês. RTX 4060 Ti 16 GB (165W) custa ~¥1.550/mês. RTX 3090 24 GB (350W) custa ~¥3.300/mês. A 8 horas/dia, dobre esses valores. Inclua isso no cálculo do custo total de propriedade antes de comprar.',
          },
        ],
      },
    },
  },
}
