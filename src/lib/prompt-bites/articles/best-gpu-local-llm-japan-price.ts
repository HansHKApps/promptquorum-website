import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-en.webp',
    title: 'What Is the Best Value GPU for Local LLMs in Japan?',
    seoTitle: 'Best Value GPU for Local LLM Japan 2026: RTX 3060–3090',
    metaDescription:
      'RTX 3060 12 GB is the best-value GPU for local LLMs in Japan (~¥45,000). Used RTX 3090 ~¥130,000–180,000 but 30-series were mining-abused — a new RTX 5060 Ti 16 GB is safer value.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: 'Japan-based users buying a GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    leadAnswerBlock:
      'In Japan, the RTX 3060 12 GB offers the best price-performance for local LLMs (new ~¥45,000, used ~¥27,000): 12 GB VRAM runs 7B models at 20–25 tok/s, sold at Tsukumo and Dospara in Akihabara. A used RTX 3090 24 GB now runs ~¥130,000–180,000 — but most 30-series cards were heavily used in the 2021–22 mining boom, so for cost-performance a new RTX 5060 Ti 16 GB (~¥100,000) or a used RX 7800 XT (~¥54,000) is the safer value pick.',
    toc: [
      { label: 'GPUs by Price Range in Japan', anchor: '#gpus-by-price' },
      { label: 'Japan Buying Guide', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Japan GPU prices run 15–20% above US prices due to import costs and 10% VAT. The used market (Mercari, Yahoo Auctions, Janpara) can save 30–40% versus new. This guide maps the four GPUs worth buying in Japan to their real August 2026 street prices — both new at Tsukumo, Dospara, Yodobashi, and used online.',
    quickAnswerTop: {
      en: {
        question: 'What is the best value GPU for local LLMs in Japan?',
        answer:
          'The RTX 3060 12GB at ~¥45,000 new (¥27,000 used) is the best value GPU for local LLMs in Japan. 12 GB VRAM runs every 7B model at 20–25 tok/s with zero CUDA setup friction.',
        bullets: [
          'RTX 3060 12GB: ¥40K new / ¥25K used — best value for 7B models at 20-25 tok/s.',
          'RTX 4060 Ti 16GB: ¥65K new / ¥50K used — step up for 13B models at 18-22 tok/s.',
          'RTX 3090 24GB used ~¥150K — mostly mining-abused 30-series; skip for apartments (340W ~¥2,604/month) unless inspected.',
          'Safer コスパ pick: new RTX 5060 Ti 16GB (~¥90K) or used RX 7800 XT (~¥30Ks) — avoids the mining-abuse risk.',
        ],
        updatedDate: '2026-07',
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
          '日本ではRTX 3060 12 GBがコスパ最強（新品~¥45,000、中古~¥27,000）。12 GB VRAMで7Bモデルを20~25 tok/sで実行可能。秋葉原のツクモ、ドスパラで購入できます。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/中古¥25K — 7Bモデルに最高のコスパ。',
          'RTX 4060 Ti 16 GB：新品¥65K/中古¥50K — 13Bモデルへのステップアップ。',
          'RTX 3090 24 GB 中古¥90K — 日本のアパートでは非推奨：340Wで電気代約¥2,604/月。',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '在日本性价比最高的本地LLM显卡是什么？',
        answer:
          '在日本，RTX 3060 12 GB性价比最高（新品约¥45,000日元，二手约¥27,000）。12 GB VRAM可运行7B模型达20-25 tok/s。可在秋叶原的Tsukumo和Dospara购买。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/二手¥25K — 7B模型最佳性价比。',
          'RTX 4060 Ti 16 GB：新品¥65K/二手¥50K — 升级到13B模型。',
          'RTX 3090 24 GB二手¥90K — 日本公寓不推荐：340W功耗约¥2,604/月电费。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best value: RTX 3060 12GB at ~¥45,000 new / ¥27,000 used (August 2026) — runs 7B models at 20-25 tok/s',
          'Mid-range: RTX 4060 Ti 16GB at ¥72,000 new — 13B models at 18-22 tok/s, 16 GB context headroom',
          'AMD alternative: RX 7800 XT 16GB at ¥70,000 — 16 GB VRAM, Vulkan/ROCm, best for Linux users',
          'Avoid: RTX 3090 24GB in Japan apartments — 340W TDP draws ~¥2,604/month at ¥31/kWh',
          'Used market: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) in Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The RTX 3060 12GB at ~¥45,000 new is the best value GPU for local LLMs in Japan as of August 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Japan GPU prices are 15-20% above US prices. The RTX 3060 12GB runs every 7B model at 20-25 tok/s and is widely available at Tsukumo and Dospara in Akihabara, or used on Mercari for ¥27,000.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs by Price Range in Japan',
        content: [
          '<strong>As of August 2026, Japan GPU prices run 15–20% above equivalent US prices due to import costs and 10% consumption tax. The four cards below cover every realistic budget for local LLM inference from ~¥27,000 used (RTX 3060 12GB) to ~¥130,000–180,000 used (RTX 3090 24GB).</strong>',
          'The table below uses August 2026 street prices from Tsukumo, Dospara, and Yodobashi for new cards, and Mercari/Yahoo Auctions midpoints for used. Prices fluctuate — verify before buying.',
        ],
        columns: ['GPU + VRAM', 'New / Used Price (¥)', 'Best for'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12GB',
            'New / Used Price (¥)': '¥45,000 / ¥27,000',
            'Best for': '7B models, best value entry',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16GB',
            'New / Used Price (¥)': '¥72,000 / ¥55,000',
            'Best for': '13B models, mid-range',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16GB',
            'New / Used Price (¥)': '¥70,000 / ¥55,000',
            'Best for': 'AMD/Vulkan/ROCm on Linux',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16GB',
            'New / Used Price (¥)': '~¥100,000 / —',
            'Best for': 'Newer 16GB card, warranty, no mining-history risk',
          },
          {
            'GPU + VRAM': 'RTX 3090 24GB',
            'New / Used Price (¥)': '— / ~¥130,000–180,000',
            'Best for': '30B+ models (CAUTION: mostly mining-abused; 340W, too hot for apartments)',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16GB — Best for: buyers who want a new card with a warranty and more than 12 GB, without the used-market risk of a mining-era RTX 3090. Skip if: the RTX 3060 12GB already covers your model sizes and you want to save money.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24GB — used ~¥130,000–180,000 in August 2026, but most 30-series cards (3080/3090) were run 24/7 during the 2021–22 mining boom, so used stock is a gamble. It also draws 340W (~¥2,604/month at ¥31/kWh). Buy only if you can inspect the card and have a dedicated, ventilated room — otherwise a new RTX 5060 Ti 16GB (~¥100,000) is the safer value.',
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
            priceRange: '¥27,000-40,000',
            label: 'Check RTX 3060 12GB price on Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥45,000',
            label: 'Check RTX 3060 12GB price at Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥45,000',
            label: 'Check RTX 3060 12GB price at Dospara (ドスパラ)',
          },
          {
            url: 'https://www.yodobashi.com/category/11010/11012/?searchWord=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '¥45,000',
            label: 'Check RTX 3060 12GB price at Yodobashi (ヨドバシ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '¥55,000-65,000',
            label: 'Check RTX 4060 Ti 16GB price on Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16GB',
            productCategory: 'gpu',
            priceRange: '¥55,000-70,000',
            label: 'Check RX 7800 XT price on Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥100,000',
            label: 'Check RTX 5060 Ti 16GB price on Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Japan Buying Guide',
        content: [
          '<strong>Japan offers two reliable buying channels for GPUs: new from authorized retailers (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) and used from Mercari, Yahoo Auctions, or Janpara in Akihabara.</strong> For first-time buyers, Akihabara has a decisive advantage: you can inspect the card in person, ask staff about compatibility, and walk out same day.',
          'New GPU retailers in Japan (August 2026 prices): Amazon.co.jp ships nationwide with next-day Prime delivery. Tsukumo (ツクモ) at 1-chome, Akihabara has the broadest stock and knowledgeable staff for LLM builds. Dospara (ドスパラ) Akihabara is strong on NVIDIA cards. Yodobashi Camera (ヨドバシカメラ) Multi Akiba carries all major brands with Yodobashi points.',
          'Used GPU sources: Mercari (メルカリ) and Yahoo! Auctions (Yahoo!オークション) offer the widest selection and lowest prices. Janpara (じゃんぱら) in Akihabara is a trusted used specialist with 30-day returns. When buying used on Mercari: check the listing for 保証 (warranty) status, ask the seller if the GPU was used for マイニング (mining), and avoid listings without multiple clear photos of the actual card. Mining GPUs run 24/7 under load — their lifespan is significantly shorter.',
          'Budget decision matrix: Under ¥30,000 → used RTX 3060 12GB on Mercari. ¥30,000–50,000 → new RTX 3060 12GB at Tsukumo or Dospara. ¥55,000–70,000 → RTX 4060 Ti 16GB (used) or RX 7800 XT (new). Over ¥70,000 → RX 7800 XT new or RTX 3090 used (only if you have a separate room and good ventilation).',
          'Japan electricity cost note: Japan averages ¥31/kWh (as of 2026). At 8 hours of daily inference use: RTX 3060 12GB (170W) costs ~¥1,265/month. RTX 4060 Ti 16GB (165W) costs ~¥1,229/month. RTX 3090 24GB (350W) costs ~¥2,604/month. That is about ¥1,340/month more than the 3060 at the same usage; over a year of daily use the gap alone adds up to roughly ¥16,000, which is worth weighing against the RTX 3090\'s higher upfront price and used-market risk.',
          'For the broader context on GPU choices across all budgets, see our [best budget GPUs for local LLM guide](/local-llms/best-budget-gpus-local-llm). For AMD-specific GPU picks, see [best AMD GPUs for local LLM](/local-llms/best-amd-gpus-local-llm).',
          '<em>Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            priceRange: '¥22,000-25,000',
            label: 'Search used RTX 3060 12GB on Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            priceRange: '¥22,000-27,000',
            label: 'Search used RTX 3060 12GB on Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            priceRange: '¥27,000-30,000',
            label: 'Search used RTX 3060 12GB at Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: Buying a GPU for Local LLMs in Japan',
        faqs: [
          {
            q: 'Which GPU is the best コスパ (value) for local LLMs in Japan in 2026?',
            a: 'For most people the RTX 3060 12GB (~¥45,000 new, ~¥27,000 used) is the best コスパ pick — 12 GB of VRAM runs every 7B model at 20–25 tok/s with zero CUDA setup. Step up to the RTX 4060 Ti 16GB (~¥72,000) for 13B models. A used RTX 3090 24GB (~¥130,000–180,000) gives you 24 GB for 30B-class models, but most 30-series cards were mining-abused in 2021–22 and draw 340W — so unless you can inspect the card, a new RTX 5060 Ti 16GB (~¥100,000) or a used RX 7800 XT (~¥54,000) is the safer value.',
          },
          {
            q: 'What is the difference between the RTX 3060 12GB and 8GB versions?',
            a: 'The 8GB version can run most 7B models at Q4_K_M comfortably — a 7B model at that quantization needs roughly 4-5 GB of VRAM, which fits within 8GB even with typical context overhead. The real gap shows up higher: the 12GB version has enough headroom for 12B-14B models, longer context windows, and higher-quality Q5_K_M or Q8 quantization at 7B that the 8GB card handles less comfortably. For local LLMs the 12GB version is the more future-proof buy if your budget allows it, but the 8GB version is not unusable — it just runs out of headroom sooner as you move to bigger models or longer contexts.',
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
            a: 'Japan averages approximately ¥31/kWh in 2026. At 4 hours of daily inference use: RTX 3060 12GB (170W) costs ~¥632/month. RTX 4060 Ti 16GB (165W) costs ~¥615/month. RTX 3090 24GB (350W) costs ~¥1,302/month. At 8 hours/day, double those figures. The RTX 3090\'s high power draw makes it significantly more expensive to operate in Japan\'s high electricity cost environment — factor this into the total cost of ownership before buying.',
          },
        ],
      },
    },
  },

  de: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-de.webp',
    title: 'Welche GPU bietet in Japan das beste Preis-Leistungs-Verhältnis für lokale LLMs?',
    seoTitle: 'Beste Preis-Leistungs-GPU für LLMs Japan 2026',
    metaDescription:
      'RTX 3060 12 GB ist die Preis-Leistungs-Königin für lokale LLMs in Japan (~245 €). Gebrauchte RTX 3090 ~700–970 €, aber 30er-Serie war Mining-belastet — neue RTX 5060 Ti 16 GB ist die sicherere Wahl.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      'In Japan bietet die RTX 3060 12 GB das beste Preis-Leistungs-Verhältnis (neu ~245 €, gebraucht ~145 €; japanische Straßenpreise). 12 GB VRAM für 7B-Modelle bei 20–25 tok/s, erhältlich bei Tsukumo und Dospara in Akihabara. Eine gebrauchte RTX 3090 24 GB kostet mittlerweile ~700–970 € — die meisten 30er-Karten wurden jedoch im Mining-Boom 2021–22 stark belastet, daher sind eine neue RTX 5060 Ti 16 GB (~540 €) oder eine gebrauchte RX 7800 XT (~295 €) die sicherere Preis-Leistungs-Wahl.',
    toc: [
      { label: 'GPUs nach Preisklasse in Japan', anchor: '#gpus-by-price' },
      { label: 'Einkaufsführer für Japan', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'GPU-Preise in Japan liegen 15–20 % über US-Preisen, bedingt durch Importkosten und 10 % Mehrwertsteuer. Der Gebrauchtmarkt (Mercari, Yahoo Auctions, Janpara) spart 30–40 % gegenüber Neuware. Dieser Leitfaden ordnet die vier kaufenswerten GPUs in Japan ihren realen Straßenpreisen vom August 2026 zu — neu bei Tsukumo, Dospara und Yodobashi sowie gebraucht online.',
    quickAnswerTop: {
      de: {
        question: 'Welche GPU bietet in Japan das beste Preis-Leistungs-Verhältnis für lokale LLMs?',
        answer:
          'Die RTX 3060 12 GB für ~245 € neu (~145 € gebraucht) ist die beste Wahl in Japan. 12 GB VRAM führt jeden 7B-Modell bei 20–25 tok/s ohne CUDA-Konfigurationsaufwand aus.',
        bullets: [
          'RTX 3060 12 GB: ~245 € neu / ~145 € gebraucht — bestes Preis-Leistungs-Verhältnis für 7B-Modelle.',
          'RTX 4060 Ti 16 GB: ~390 € neu / ~295 € gebraucht — Upgrade für 13B-Modelle bei 18–22 tok/s.',
          'RTX 3090 24 GB gebraucht ~700–970 € — meist Mining-belastete 30er-Serie, für japanische Apartments meiden (340 W).',
          'Sicherere Preis-Leistungs-Wahl: neue RTX 5060 Ti 16 GB (~540 €) oder gebrauchte RX 7800 XT (~295 €) — vermeidet das Mining-Risiko.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: RTX 3060 12 GB für ~245 € neu / ~145 € gebraucht (August 2026) — 7B-Modelle bei 20–25 tok/s',
          'Mittelklasse: RTX 4060 Ti 16 GB für ~390 € neu — 13B-Modelle bei 18–22 tok/s, 16 GB Kontextspielraum',
          'AMD-Alternative: RX 7800 XT 16 GB für ~375 € — 16 GB VRAM, Vulkan/ROCm, ideal für Linux',
          'Vorsicht: gebrauchte RTX 3090 24 GB (~700–970 €) meist Mining-belastet; neue RTX 5060 Ti 16 GB (~540 €) ist die sicherere Wahl',
          'Gebrauchtmarkt: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) in Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die RTX 3060 12 GB für ~245 € neu ist die Preis-Leistungs-Königin für lokale LLMs in Japan (August 2026).',
          },
          {
            type: 'plain-terms',
            text: 'GPU-Preise in Japan liegen 15–20 % über US-Preisen. Die RTX 3060 12 GB führt jeden 7B-Modell bei 20–25 tok/s aus und ist bei Tsukumo und Dospara in Akihabara oder gebraucht für ~145 € auf Mercari erhältlich.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs nach Preisklasse in Japan',
        content: [
          '<strong>Stand August 2026 liegen GPU-Preise in Japan 15–20 % über den entsprechenden US-Preisen, bedingt durch Importkosten und 10 % Verbrauchsteuer. Die vier nachfolgenden Karten decken jedes realistische Budget für lokale LLM-Inferenz ab — von ~145 € gebraucht (RTX 3060 12 GB) bis ~700–970 € gebraucht (RTX 3090 24 GB). Die Preise sind EUR-Äquivalente japanischer Straßenpreise.</strong>',
          'Die folgende Tabelle verwendet Straßenpreise vom August 2026 von Tsukumo, Dospara und Yodobashi für neue Karten sowie Mittelwerte von Mercari/Yahoo Auctions für gebrauchte, jeweils als EUR-Äquivalent. Preise schwanken — vor dem Kauf nochmals prüfen.',
        ],
        columns: ['GPU + VRAM', 'Neu / Gebraucht (€)', 'Geeignet für'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            'Neu / Gebraucht (€)': '~245 € / ~145 €',
            'Geeignet für': '7B-Modelle, bestes Preis-Leistungs-Verhältnis',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            'Neu / Gebraucht (€)': '~390 € / ~295 €',
            'Geeignet für': '13B-Modelle, Mittelklasse',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            'Neu / Gebraucht (€)': '~375 € / ~295 €',
            'Geeignet für': 'AMD/Vulkan/ROCm unter Linux',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16 GB',
            'Neu / Gebraucht (€)': '~540 € / —',
            'Geeignet für': 'Neuere 16 GB, Garantie, kein Mining-Risiko',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            'Neu / Gebraucht (€)': '— / ~700–970 €',
            'Geeignet für': '30B+-Modelle (VORSICHT: meist Mining-belastet; 340 W, zu heiß für Apartments)',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — Geeignet für: Käufer, die eine neue Karte mit Garantie und mehr als 12 GB wollen, ohne das Gebrauchtrisiko einer Mining-Ära-RTX-3090. Meiden, wenn: die RTX 3060 12 GB Ihre Modellgrößen bereits abdeckt und Sie sparen möchten.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — gebraucht ~700–970 € (August 2026), aber die meisten 30er-Karten (3080/3090) liefen im Mining-Boom 2021–22 rund um die Uhr; Gebrauchtware ist daher ein Glücksspiel. Zudem 340 W (~6.600 ¥/Monat bei ¥31/kWh in Japan). Nur kaufen, wenn Sie die Karte prüfen können und ein separates, belüftetes Zimmer haben — sonst ist eine neue RTX 5060 Ti 16 GB (~540 €) die sicherere Wahl.',
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
            priceRange: '~145–245 €',
            label: 'RTX 3060 12 GB Preis auf Amazon.co.jp prüfen',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '~245 €',
            label: 'RTX 3060 12 GB Preis bei Tsukumo (ツクモ) prüfen',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '~245 €',
            label: 'RTX 3060 12 GB Preis bei Dospara (ドスパラ) prüfen',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~295–390 €',
            label: 'RTX 4060 Ti 16 GB Preis auf Amazon.co.jp prüfen',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~540 €',
            label: 'RTX 5060 Ti 16 GB Preis auf Amazon.co.jp prüfen',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Einkaufsführer für Japan',
        content: [
          '<strong>Japan bietet zwei zuverlässige Kaufkanäle für GPUs: neu bei autorisierten Händlern (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) und gebraucht bei Mercari, Yahoo Auctions oder Janpara in Akihabara.</strong> Für Erstkäufer hat Akihabara einen entscheidenden Vorteil: Sie können die Karte persönlich begutachten, das Personal zu Kompatibilität befragen und noch am selben Tag ausliefern lassen.',
          'Neue GPU-Händler in Japan (August 2026): Amazon.co.jp liefert bundesweit per Prime am nächsten Tag. Tsukumo (ツクモ) in der 1-chome Akihabara hat das breiteste Sortiment und kenntnisreiches Personal für LLM-Builds. Dospara (ドスパラ) Akihabara ist stark bei NVIDIA-Karten. Yodobashi Camera (ヨドバシカメラ) Multi Akiba führt alle großen Marken mit Yodobashi-Punkten.',
          'Gebraucht-Quellen: Mercari (メルカリ) und Yahoo! Auctions (Yahoo!オークション) bieten die größte Auswahl und niedrigsten Preise. Janpara (じゃんぱら) in Akihabara ist ein bewährter Gebrauchtspezialist mit 30 Tagen Rückgaberecht. Beim Kauf auf Mercari: Listing auf 保証 (Garantie)-Status prüfen, Verkäufer fragen, ob die GPU für マイニング (Mining) verwendet wurde, und Listings ohne mehrere klare Fotos der tatsächlichen Karte meiden. Mining-GPUs laufen 24/7 unter Volllast — ihre Lebensdauer ist deutlich kürzer.',
          'Budget-Entscheidungsmatrix (EUR-Äquivalente): Unter ~160 € → gebrauchte RTX 3060 12 GB auf Mercari. ~160–295 € → neue RTX 3060 12 GB bei Tsukumo oder Dospara. ~295–540 € → RTX 4060 Ti 16 GB (gebraucht) oder RX 7800 XT (neu). Über ~540 € → RX 7800 XT neu oder RTX 3090 gebraucht (nur bei separatem, belüftetem Zimmer und wenn Sie die Karte prüfen können).',
          'Stromkosten in Japan: Japan durchschnittlich ¥31/kWh (2026). Bei 8 Stunden täglicher Inferenz: RTX 3060 12 GB (170 W) ~¥3.200/Monat. RTX 4060 Ti 16 GB (165 W) ~¥3.100/Monat. RTX 3090 24 GB (350 W) ~¥6.600/Monat. Der höhere Stromverbrauch einer gebrauchten RTX 3090 frisst die anfängliche Ersparnis gegenüber einer 3060 innerhalb weniger Monate auf.',
          'Für die Übersicht aller GPU-Klassen: [Beste Budget-GPUs für lokale LLMs](/local-llms/best-budget-gpus-local-llm). Für AMD-spezifische Auswahl: [Beste AMD-GPUs für lokale LLMs](/local-llms/best-amd-gpus-local-llm).',
          '<em>Hinweis: Dieser Artikel enthält Affiliate-Links gemäß § 6 TMG. Bei einem Kauf über diese Links erhalten wir eine Provision – für Sie entstehen keine zusätzlichen Kosten.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '~120–145 €',
            label: 'Gebrauchte RTX 3060 12 GB auf Mercari (メルカリ) suchen',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '~120–160 €',
            label: 'Gebrauchte RTX 3060 12 GB auf Yahoo Auctions (Yahoo!オークション) suchen',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '~145–175 €',
            label: 'Gebrauchte RTX 3060 12 GB bei Janpara (じゃんぱら) suchen',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: GPU für lokale LLMs in Japan kaufen',
        faqs: [
          {
            q: 'Welche GPU bietet 2026 das beste Preis-Leistungs-Verhältnis für lokale LLMs in Japan?',
            a: 'Für die meisten ist die RTX 3060 12 GB (~245 € neu, ~145 € gebraucht) die Preis-Leistungs-Königin — 12 GB VRAM führen jeden 7B-Modell bei 20–25 tok/s ohne CUDA-Einrichtung aus. Für 13B-Modelle lohnt der Umstieg auf die RTX 4060 Ti 16 GB (~390 €). Eine gebrauchte RTX 3090 24 GB (~700–970 €) bietet 24 GB für Modelle der 30B-Klasse, aber die meisten 30er-Karten wurden 2021–22 im Mining stark belastet und ziehen 340 W — können Sie die Karte nicht prüfen, sind eine neue RTX 5060 Ti 16 GB (~540 €) oder eine gebrauchte RX 7800 XT (~295 €) die sicherere Wahl. (Preise als EUR-Äquivalent japanischer Straßenpreise.)',
          },
          {
            q: 'Was ist der Unterschied zwischen RTX 3060 12 GB und 8 GB?',
            a: 'Die 8-GB-Version kann die meisten 7B-Modelle bei Q4_K_M-Quantisierung problemlos ausführen — ein 7B-Modell benötigt bei dieser Quantisierung nur etwa 4-5 GB VRAM, was selbst mit typischem Kontext-Overhead in 8 GB passt. Der eigentliche Unterschied zeigt sich weiter oben: Die 12-GB-Version hat genug Spielraum für 12B-14B-Modelle, längere Kontextfenster und höherwertige Q5_K_M- oder Q8-Quantisierung bei 7B, womit die 8-GB-Karte weniger komfortabel zurechtkommt. Für lokale LLMs ist die 12-GB-Version die zukunftssicherere Wahl, wenn das Budget es zulässt — die 8-GB-Version ist aber keineswegs unbrauchbar, sie stößt nur früher an ihre Grenzen bei größeren Modellen oder längeren Kontexten.',
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
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-fr.webp',
    title: 'Quel est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon ?',
    seoTitle: 'Meilleur GPU qualité-prix LLM Japon 2026 : RTX 3060–3090',
    metaDescription:
      'RTX 3060 12 Go, le meilleur rapport qualité-prix pour LLM local au Japon (~245 €). RTX 3090 d\'occasion ~700–970 €, mais la série 30 a été usée par le minage — la RTX 5060 Ti 16 Go neuve est plus sûre.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      'Au Japon, la RTX 3060 12 Go offre le meilleur rapport qualité-prix (neuve ~245 €, occasion ~145 € ; prix de rue japonais). 12 Go VRAM pour les modèles 7B à 20–25 tok/s, disponible chez Tsukumo et Dospara à Akihabara. Une RTX 3090 24 Go d\'occasion coûte désormais ~700–970 € — mais la plupart des cartes de la série 30 ont été fortement sollicitées pendant le boom du minage 2021–22, donc pour le rapport qualité-prix une RTX 5060 Ti 16 Go neuve (~540 €) ou une RX 7800 XT d\'occasion (~295 €) est le choix le plus sûr.',
    toc: [
      { label: 'GPU par gamme de prix au Japon', anchor: '#gpus-by-price' },
      { label: 'Guide d\'achat au Japon', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Les prix des GPU au Japon sont 15–20 % plus élevés qu\'aux États-Unis en raison des frais d\'importation et de la TVA à 10 %. Le marché de l\'occasion (Mercari, Yahoo Auctions, Janpara) permet d\'économiser 30–40 % par rapport au neuf. Ce guide associe les quatre GPU intéressants au Japon à leurs prix réels de août 2026 — neufs chez Tsukumo, Dospara et Yodobashi, et d\'occasion en ligne.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon ?',
        answer:
          'La RTX 3060 12 Go à ~245 € neuve (~145 € d\'occasion) est le meilleur choix au Japon. 12 Go de VRAM fait tourner tout modèle 7B à 20–25 tok/s sans aucune configuration CUDA.',
        bullets: [
          'RTX 3060 12 Go : ~245 € neuve / ~145 € occasion — meilleur rapport qualité-prix pour 7B.',
          'RTX 4060 Ti 16 Go : ~390 € neuve / ~295 € occasion — passage aux modèles 13B à 18–22 tok/s.',
          'RTX 3090 24 Go d\'occasion ~700–970 € — série 30 souvent usée par le minage, à éviter en appartement (340 W).',
          'Choix qualité-prix plus sûr : RTX 5060 Ti 16 Go neuve (~540 €) ou RX 7800 XT d\'occasion (~295 €) — évite le risque minage.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : RTX 3060 12 Go à ~245 € neuve / ~145 € occasion (août 2026) — modèles 7B à 20–25 tok/s',
          'Gamme intermédiaire : RTX 4060 Ti 16 Go à ~390 € neuve — modèles 13B à 18–22 tok/s, 16 Go de marge',
          'Alternative AMD : RX 7800 XT 16 Go à ~375 € — 16 Go VRAM, Vulkan/ROCm, idéal sous Linux',
          'Attention : RTX 3090 24 Go d\'occasion (~700–970 €) souvent usée par le minage ; la RTX 5060 Ti 16 Go neuve (~540 €) est plus sûre',
          'Occasion : Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) à Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La RTX 3060 12 Go à ~245 € neuve est le GPU au meilleur rapport qualité-prix pour LLM locaux au Japon en août 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Les prix GPU au Japon sont 15–20 % plus élevés qu\'aux États-Unis. La RTX 3060 12 Go fait tourner tout modèle 7B à 20–25 tok/s et est disponible chez Tsukumo et Dospara à Akihabara, ou d\'occasion sur Mercari à ~145 €.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPU par gamme de prix au Japon',
        content: [
          '<strong>En août 2026, les prix des GPU au Japon sont 15–20 % au-dessus des prix américains en raison des frais d\'importation et de la taxe à la consommation de 10 %. Les quatre cartes ci-dessous couvrent tous les budgets réalistes pour l\'inférence LLM locale, de ~145 € d\'occasion (RTX 3060 12 Go) à ~700–970 € d\'occasion (RTX 3090 24 Go). Les prix sont des équivalents EUR des prix de rue japonais.</strong>',
          'Le tableau ci-dessous utilise les prix de août 2026 relevés chez Tsukumo, Dospara et Yodobashi pour les cartes neuves, et les médianes Mercari/Yahoo Auctions pour les cartes d\'occasion, en équivalent EUR. Les prix fluctuent — vérifiez avant d\'acheter.',
        ],
        columns: ['GPU + VRAM', 'Neuve / Occasion (€)', 'Idéal pour'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 Go',
            'Neuve / Occasion (€)': '~245 € / ~145 €',
            'Idéal pour': 'Modèles 7B, meilleur rapport qualité-prix',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 Go',
            'Neuve / Occasion (€)': '~390 € / ~295 €',
            'Idéal pour': 'Modèles 13B, gamme intermédiaire',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 Go',
            'Neuve / Occasion (€)': '~375 € / ~295 €',
            'Idéal pour': 'AMD/Vulkan/ROCm sous Linux',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16 Go',
            'Neuve / Occasion (€)': '~540 € / —',
            'Idéal pour': '16 Go récente, garantie, sans risque minage',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 Go',
            'Neuve / Occasion (€)': '— / ~700–970 €',
            'Idéal pour': 'Modèles 30B+ (ATTENTION : souvent usée par le minage ; 340 W, trop chaude pour les appartements)',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 Go — Idéal pour : acheteurs voulant une carte neuve sous garantie avec plus de 12 Go, sans le risque d\'occasion d\'une RTX 3090 de l\'ère minage. À éviter si : la RTX 3060 12 Go couvre déjà vos tailles de modèles et vous voulez économiser.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 Go — d\'occasion ~700–970 € (août 2026), mais la plupart des cartes de la série 30 (3080/3090) ont tourné 24h/24 pendant le boom du minage 2021–22 ; l\'occasion est donc un pari. Elle consomme aussi 340 W (~6 600 ¥/mois à ¥31/kWh au Japon). N\'achetez que si vous pouvez inspecter la carte et disposez d\'une pièce dédiée et ventilée — sinon une RTX 5060 Ti 16 Go neuve (~540 €) est plus sûre.',
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
            priceRange: '~145–245 €',
            label: 'Vérifier le prix RTX 3060 12 Go sur Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go',
            productCategory: 'gpu',
            priceRange: '~245 €',
            label: 'Vérifier le prix RTX 3060 12 Go chez Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 Go',
            productCategory: 'gpu',
            priceRange: '~245 €',
            label: 'Vérifier le prix RTX 3060 12 Go chez Dospara (ドスパラ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 Go',
            productCategory: 'gpu',
            priceRange: '~295–390 €',
            label: 'Vérifier le prix RTX 4060 Ti 16 Go sur Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~540 €',
            label: 'Vérifier le prix RTX 5060 Ti 16 Go sur Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Guide d\'achat au Japon',
        content: [
          '<strong>Le Japon offre deux canaux d\'achat fiables pour les GPU : neufs chez des revendeurs agréés (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) et d\'occasion sur Mercari, Yahoo Auctions ou chez Janpara à Akihabara.</strong> Pour les primo-acheteurs, Akihabara présente un avantage décisif : vous pouvez inspecter la carte en personne, interroger le personnel sur la compatibilité et repartir le jour même.',
          'Revendeurs de GPU neufs au Japon (août 2026) : Amazon.co.jp livre partout au Japon en Prime J+1. Tsukumo (ツクモ) au 1-chome d\'Akihabara propose le plus grand stock et un personnel expert pour les builds LLM. Dospara (ドスパラ) Akihabara est fort sur les cartes NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba couvre toutes les grandes marques avec des points Yodobashi.',
          'Sources d\'occasion : Mercari (メルカリ) et Yahoo! Auctions (Yahoo!オークション) offrent le plus grand choix aux prix les plus bas. Janpara (じゃんぱら) à Akihabara est un spécialiste de l\'occasion fiable avec 30 jours de retour. Lors d\'un achat sur Mercari : vérifiez le statut 保証 (garantie) dans l\'annonce, demandez au vendeur si le GPU a été utilisé pour le マイニング (minage), et évitez les annonces sans photos claires et multiples de la carte réelle. Les GPU de minage fonctionnent 24h/24 en pleine charge — leur durée de vie est nettement réduite.',
          'Matrice de décision budgétaire (équivalents EUR) : Moins de ~160 € → RTX 3060 12 Go d\'occasion sur Mercari. ~160–295 € → RTX 3060 12 Go neuve chez Tsukumo ou Dospara. ~295–540 € → RTX 4060 Ti 16 Go (d\'occasion) ou RX 7800 XT (neuve). Plus de ~540 € → RX 7800 XT neuve ou RTX 3090 d\'occasion (uniquement avec une pièce dédiée bien ventilée et si vous pouvez inspecter la carte).',
          'Coût de l\'électricité au Japon : moyenne ¥31/kWh (2026). À 8 heures d\'inférence quotidienne : RTX 3060 12 Go (170 W) ~¥3 200/mois. RTX 4060 Ti 16 Go (165 W) ~¥3 100/mois. RTX 3090 24 Go (350 W) ~¥6 600/mois. La surconsommation d\'une RTX 3090 d\'occasion efface toute économie initiale face à une 3060 en quelques mois.',
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
            a: 'La version 8 Go peut exécuter la plupart des modèles 7B en quantification Q4_K_M sans problème — un modèle 7B à cette quantification nécessite environ 4-5 Go de VRAM, ce qui tient dans 8 Go même avec l\'overhead de contexte habituel. La vraie différence apparaît plus haut : la version 12 Go a assez de marge pour des modèles 13B-14B, des fenêtres de contexte plus longues et une quantification Q5_K_M ou Q8 de meilleure qualité en 7B, que la carte 8 Go gère moins confortablement. Pour les LLM locaux, la version 12 Go est l\'achat le plus pérenne si le budget le permet, mais la version 8 Go n\'est pas inutilisable — elle manque simplement de marge plus tôt sur des modèles plus gros ou des contextes plus longs.',
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
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-ja.webp',
    title: '日本でコスパ最強のローカルLLM用GPUは？',
    seoTitle: '日本のローカルLLMコスパ最強GPU 2026：RTX 3060〜3090',
    metaDescription:
      'RTX 3060 12GBが日本のローカルLLMでコスパ最強（新品~¥45,000）。中古RTX 3090は~¥130,000–180,000だが30系はマイニング酷使が多く、新品RTX 5060 Ti 16GBのほうが安全なコスパ。',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      '日本ではRTX 3060 12 GBがコスパ最強（新品~¥45,000、中古~¥27,000）。12 GB VRAMで7Bモデルを20~25 tok/sで実行でき、秋葉原のツクモ・ドスパラで購入できます。中古のRTX 3090 24 GBは現在~¥130,000–180,000ですが、30系カードの多くは2021〜22年のマイニングブームで酷使されているため、コスパを重視するなら新品のRTX 5060 Ti 16 GB（~¥100,000）か中古のRX 7800 XT（~¥54,000）のほうが安全な選択です。',
    toc: [
      { label: '価格帯別GPU一覧（日本）', anchor: '#gpus-by-price' },
      { label: '日本での購入ガイド', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      '日本のGPU価格は輸入コストと消費税10%の影響で、米国価格より15〜20%高くなっています。中古市場（メルカリ、Yahoo!オークション、じゃんぱら）を使えば新品比30〜40%の節約が可能です。このガイドでは2026年8月時点の実際の店頭価格——ツクモ、ドスパラ、ヨドバシカメラでの新品価格とオンラインの中古相場——をもとに、日本で買う価値のある4枚のGPUを解説します。',
    quickAnswerTop: {
      ja: {
        question: '日本でコスパ最強のローカルLLM用GPUは？',
        answer:
          '日本ではRTX 3060 12 GBがコスパ最強（新品~¥45,000、中古~¥27,000）。12 GB VRAMで全7Bモデルを20~25 tok/sで動かせ、CUDA設定も不要です。',
        bullets: [
          'RTX 3060 12 GB：新品¥40K/中古¥25K — 7Bモデルに最高のコスパ（20~25 tok/s）。',
          'RTX 4060 Ti 16 GB：新品¥65K/中古¥50K — 13Bモデルへのステップアップ（18~22 tok/s）。',
          'RTX 3090 24 GB 中古~¥150K — 30系はマイニング酷使が多く見送り推奨。340Wで日本のアパートでは非推奨（電気代約¥2,604/月）。',
          '安全なコスパ枠：新品RTX 5060 Ti 16 GB（~¥90K）または中古RX 7800 XT（~¥30K台）— マイニング酷使リスクを回避。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'コスパ最強：RTX 3060 12 GB 新品~¥45,000/中古~¥27,000（2026年8月）— 7Bモデルを20~25 tok/sで実行',
          'ミドルレンジ：RTX 4060 Ti 16 GB 新品¥72,000 — 13Bモデルを18~22 tok/s、16 GBのコンテキスト余裕',
          'AMD代替：RX 7800 XT 16 GB 新品¥70,000 — 16 GB VRAM、Vulkan/ROCm、Linuxユーザー向け',
          '要注意：RTX 3090 24 GBは日本のアパートでは非推奨 — 340W TDP、¥31/kWhで月約¥2,604の電気代',
          '中古購入先：メルカリ、Yahoo!オークション、秋葉原のじゃんぱら',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年8月時点で、日本でローカルLLMにコスパ最強のGPUはRTX 3060 12 GB（新品~¥45,000）です。',
          },
          {
            type: 'plain-terms',
            text: '日本のGPU価格は米国より15〜20%高め。RTX 3060 12 GBは7Bモデルを20~25 tok/sで動かせ、秋葉原のツクモ・ドスパラで購入可能、またはメルカリで¥27,000の中古が見つかります。',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: '価格帯別GPU一覧（日本）',
        content: [
          '<strong>2026年8月時点で、日本のGPU価格は輸入コストと10%消費税の影響により、米国価格より15〜20%高くなっています。以下の4枚は中古¥27,000（RTX 3060 12GB）から中古~¥130,000–180,000（RTX 3090 24GB）まで、ローカルLLM推論のあらゆる現実的な予算をカバーします。</strong>',
          '以下の表は、ツクモ・ドスパラ・ヨドバシカメラの2026年8月時点の新品店頭価格と、メルカリ/Yahoo!オークションの中古相場中央値を使用しています。価格は変動しますので、購入前に必ず確認してください。',
        ],
        columns: ['GPU + VRAM', '新品 / 中古価格（¥）', '最適な用途'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            '新品 / 中古価格（¥）': '¥45,000 / ¥27,000',
            '最適な用途': '7Bモデル、コスパ最強',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            '新品 / 中古価格（¥）': '¥72,000 / ¥55,000',
            '最適な用途': '13Bモデル、ミドルレンジ',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            '新品 / 中古価格（¥）': '¥70,000 / ¥55,000',
            '最適な用途': 'AMD/Vulkan/ROCm（Linux向け）',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16 GB',
            '新品 / 中古価格（¥）': '~¥100,000 / —',
            '最適な用途': '新しい16GB、保証付き、マイニング履歴リスクなし',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            '新品 / 中古価格（¥）': '— / ~¥130,000–180,000',
            '最適な用途': '30B+モデル（要注意：マイニング酷使が多い。340W、アパートには不向き）',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — 最適：マイニング時代のRTX 3090の中古リスクを避けつつ、保証付きの新品で12 GB超を求める方。見送り条件：RTX 3060 12 GBで扱うモデルサイズが足りており、費用を抑えたい場合。',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — 中古で2026年8月時点~¥130,000–180,000。ただし30系カード（3080/3090）の多くは2021〜22年のマイニングブームで24時間フル稼働されており、中古在庫はギャンブルです。340W（¥31/kWhで月約¥2,604）も消費します。実機を確認でき、専用の換気された部屋がある場合のみ購入してください。それ以外は新品のRTX 5060 Ti 16 GB（~¥100,000）のほうが安全なコスパです。',
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
            priceRange: '¥27,000~40,000',
            label: 'Amazon.co.jpでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥45,000',
            label: 'ツクモでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥45,000',
            label: 'ドスパラでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.yodobashi.com/category/11010/11012/?searchWord=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '¥45,000',
            label: 'ヨドバシカメラでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55,000~65,000',
            label: 'Amazon.co.jpでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '¥55,000~70,000',
            label: 'Amazon.co.jpでRX 7800 XTの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '¥100,000',
            label: 'Amazon.co.jpでRTX 5060 Ti 16GBの価格を確認',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: '日本での購入ガイド',
        content: [
          '<strong>日本のGPU購入には2つの信頼できるチャネルがあります：正規販売店での新品（Amazon.co.jp、ツクモ、ドスパラ、ヨドバシカメラ）と、メルカリ・Yahoo!オークション・秋葉原のじゃんぱらでの中古購入です。</strong>初めて買う方には秋葉原に大きなメリットがあります：実機を手に取って確認でき、スタッフに互換性を相談でき、当日持ち帰れます。',
          '新品GPUの販売店（2026年8月時点の価格）：Amazon.co.jpは全国にPrime翌日配送。秋葉原の1丁目にあるツクモ（ツクモ）はLLMビルドに詳しいスタッフが揃い、最も豊富な在庫を誇ります。ドスパラ（ドスパラ）秋葉原店はNVIDIAカードが充実。ヨドバシカメラ マルチメディアAkibaは全主要ブランドを扱い、ヨドバシポイントも貯まります。',
          '中古GPUの購入先：メルカリ（メルカリ）とYahoo!オークション（Yahoo!オークション）は最大の品揃えと最低価格が魅力です。秋葉原のじゃんぱら（じゃんぱら）は30日返品保証付きの信頼できる中古専門店です。メルカリで購入する際のチェックポイント：出品ページの保証ステータスを確認し、マイニング（マイニング）使用歴を必ず確認、販売者評価は95%以上のもの、実際のカードが複数枚鮮明に写った写真があるものを選んでください。マイニングGPUは24時間フル負荷で動作しており、寿命が大幅に短くなっています。',
          '予算別購入フローチャート：¥30,000以下 → メルカリで中古RTX 3060 12 GB。¥30,000〜50,000 → ツクモまたはドスパラで新品RTX 3060 12 GB。¥55,000〜70,000 → RTX 4060 Ti 16 GB（中古）またはRX 7800 XT（新品）。¥70,000超 → RX 7800 XT新品、またはRTX 3090中古（専用部屋と良好な換気がある場合のみ）。',
          '日本の電気代：日本の平均電気代は¥31/kWh（2026年）。1日8時間の推論使用で：RTX 3060 12 GB（170W）は月約¥1,265。RTX 4060 Ti 16 GB（165W）は月約¥1,229。RTX 3090 24 GB（350W）は月約¥2,604。これは同じ使用時間で3060より月約¥1,340高い計算です。毎日使用した場合、この差だけで年間約¥16,000に達するため、RTX 3090の高い初期費用や中古市場のリスクと合わせて検討する価値があります。',
          '全予算帯のGPU選び概要：[ローカルLLM向けベストバジェットGPUガイド](/local-llms/best-budget-gpus-local-llm)。AMD GPU特化の選び方：[ローカルLLM向けベストAMD GPUガイド](/local-llms/best-amd-gpus-local-llm)。',
          '<em>開示：当ページは特定商取引法に基づき、アフィリエイトリンクを含みます。リンク経由での購入により収益が発生することがあります。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（中古）',
            productCategory: 'gpu',
            priceRange: '¥22,000~25,000',
            label: 'メルカリで中古RTX 3060 12GBを検索',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（中古）',
            productCategory: 'gpu',
            priceRange: '¥22,000~27,000',
            label: 'Yahoo!オークションで中古RTX 3060 12GBを検索',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（中古）',
            productCategory: 'gpu',
            priceRange: '¥27,000~30,000',
            label: 'じゃんぱらで中古RTX 3060 12GBを検索',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ：日本でローカルLLM用GPUを購入する',
        faqs: [
          {
            q: '2026年、日本のローカルLLMでコスパ最強のGPUはどれですか？',
            a: 'ほとんどの方にはRTX 3060 12 GB（新品~¥45,000、中古~¥27,000）がコスパ最強です。12 GBのVRAMで全7BモデルをCUDA設定なしに20〜25 tok/sで動かせます。13Bモデルを狙うならRTX 4060 Ti 16 GB（~¥72,000）へステップアップ。中古のRTX 3090 24 GB（~¥130,000–180,000）は30B級モデル向けに24 GBを確保できますが、30系カードの多くは2021〜22年にマイニングで酷使され340Wを消費します。実機を確認できないなら、新品のRTX 5060 Ti 16 GB（~¥100,000）か中古のRX 7800 XT（~¥54,000）のほうが安全なコスパです。',
          },
          {
            q: 'RTX 3060の12 GB版と8 GB版の違いは何ですか？',
            a: '8 GB版でもQ4_K_M量子化なら、ほとんどの7Bモデルを問題なく実行できます。この量子化では7Bモデルに必要なVRAMは約4〜5 GBで、通常のコンテキストオーバーヘッドを加えても8 GBに収まります。実際の差はもっと上のクラスで生じます。12 GB版なら12B〜14Bモデル、より長いコンテキストウィンドウ、7Bでの高品質なQ5_K_MやQ8量子化にも余裕を持って対応でき、8 GBカードではそこまで快適にはいきません。予算が許すならローカルLLM用には12 GB版のほうが将来性がありますが、8 GB版が使い物にならないわけではなく、大きなモデルや長いコンテキストに移るタイミングが早く来るだけです。',
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
            a: '日本の電気代は平均約¥31/kWh（2026年）。1日4時間の推論使用で：RTX 3060 12 GB（170W）は月約¥632。RTX 4060 Ti 16 GB（165W）は月約¥615。RTX 3090 24 GB（350W）は月約¥1,302。1日8時間ならこれらを2倍にしてください。購入前に総所有コストに電気代も含めて計算することをお勧めします。',
          },
        ],
      },
    },
  },

  zh: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-zh.webp',
    title: '在日本性价比最高的本地LLM显卡是什么？',
    seoTitle: '日本本地LLM性价比最高显卡2026：RTX 3060 12 GB',
    metaDescription:
      'RTX 3060 12 GB是日本本地LLM性价比最高的显卡（新品约$285）。二手RTX 3090约$820–1,130，但30系多为挖矿酷卡，新品RTX 5060 Ti 16 GB是更稳妥的性价比之选。',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      '在日本，RTX 3060 12 GB性价比最高（新品约$285，二手约$170）。12 GB VRAM可运行7B模型达20-25 tok/s，可在秋叶原的Tsukumo（ツクモ）和Dospara（ドスパラ）购买。二手RTX 3090 24 GB现在约$820–1,130——但大多数30系显卡在2021–22挖矿热潮中被重度使用，因此从性价比考虑，新品RTX 5060 Ti 16 GB（约$630）或二手RX 7800 XT（约$345）是更稳妥的选择。',
    toc: [
      { label: '日本各价位显卡一览', anchor: '#gpus-by-price' },
      { label: '日本购买指南', anchor: '#buying-guide' },
      { label: '常见问题', anchor: '#faq' },
    ],
    intro:
      '由于进口成本和10%消费税，日本显卡价格比美国高出15-20%。二手市场（Mercari、Yahoo拍卖、Janpara）可节省30-40%。本指南基于2026年8月实际街头价格——包括Tsukumo、Dospara、Yodobashi的新品价和网上二手价——为您梳理在日本值得购买的四款显卡。美元参考价：RTX 3060 12 GB约$285新品/$170二手；RTX 4060 Ti 16 GB约$450新品。',
    quickAnswerTop: {
      zh: {
        question: '在日本性价比最高的本地LLM显卡是什么？',
        answer:
          'RTX 3060 12 GB（新品约$285，二手约$170）在日本性价比最高。12 GB显存无需配置CUDA即可运行所有7B模型，速度20-25 tok/s。',
        bullets: [
          'RTX 3060 12 GB：新品约$285/二手约$170 — 7B模型最佳性价比（20-25 tok/s）。',
          'RTX 4060 Ti 16 GB：新品约$450/二手约$345 — 升级13B模型（18-22 tok/s）。',
          'RTX 3090 24 GB二手约$820–1,130 — 多为挖矿酷卡的30系；340W在日本公寓不推荐（每月电费约¥2,604）——除非可当面验卡。',
          '更稳妥的性价比之选：新品RTX 5060 Ti 16 GB（约$630）或二手RX 7800 XT（约$345）——规避挖矿酷卡风险。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '性价比最优：RTX 3060 12 GB新品约$285/二手约$170（2026年8月）— 7B模型20-25 tok/s',
          '中端选择：RTX 4060 Ti 16 GB新品约$450 — 13B模型18-22 tok/s，16 GB上下文余量充足',
          'AMD替代：RX 7800 XT 16 GB约$345 — 16 GB显存，Vulkan/ROCm，适合Linux用户',
          '需注意：二手RTX 3090 24 GB（约$820–1,130）多为挖矿酷卡；新品RTX 5060 Ti 16 GB（约$630）更稳妥',
          '二手渠道：Mercari（メルカリ）、Yahoo拍卖（Yahoo!オークション）、秋叶原Janpara（じゃんぱら）',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '截至2026年8月，RTX 3060 12 GB（新品约$285）是日本本地LLM性价比最高的显卡。',
          },
          {
            type: 'plain-terms',
            text: '日本显卡价格比美国高15-20%。RTX 3060 12 GB可运行所有7B模型达20-25 tok/s，在秋叶原Tsukumo和Dospara有售，或在Mercari以约$170找到二手。',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: '日本各价位显卡一览',
        content: [
          '<strong>2026年8月，由于进口成本和10%消费税，日本显卡价格比美国高出15-20%。以下四款涵盖从二手约$170（RTX 3060 12 GB）到二手约$820–1,130（RTX 3090 24 GB）的所有本地LLM推理实际预算范围。价格以美元参考，购自日本Tsukumo、Dospara等门店。</strong>',
          '下表使用Tsukumo、Dospara、Yodobashi的2026年8月新品价格及Mercari/Yahoo拍卖二手中位数（美元参考价）。价格有波动——购买前请重新核对。',
        ],
        columns: ['显卡 + 显存', '新品 / 二手价格（USD）', '最适用途'],
        rows: [
          {
            '显卡 + 显存': 'RTX 3060 12 GB',
            '新品 / 二手价格（USD）': '约$285 / 约$170',
            '最适用途': '7B模型，最佳性价比',
          },
          {
            '显卡 + 显存': 'RTX 4060 Ti 16 GB',
            '新品 / 二手价格（USD）': '约$450 / 约$345',
            '最适用途': '13B模型，中端选择',
          },
          {
            '显卡 + 显存': 'RX 7800 XT 16 GB',
            '新品 / 二手价格（USD）': '约$440 / 约$345',
            '最适用途': 'AMD/Vulkan/ROCm（Linux用户）',
          },
          {
            '显卡 + 显存': 'RTX 5060 Ti 16 GB',
            '新品 / 二手价格（USD）': '约$630 / —',
            '最适用途': '较新16GB、有保修、无挖矿风险',
          },
          {
            '显卡 + 显存': 'RTX 3090 24 GB',
            '新品 / 二手价格（USD）': '— / 约$820–1,130',
            '最适用途': '30B+模型（注意：多为挖矿酷卡；340W，公寓不适合）',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — 适合：想要有保修的全新显卡且需要超过12 GB显存，同时规避挖矿时代RTX 3090二手风险的买家。不推荐：RTX 3060 12 GB已能满足你的模型规模且想省钱时。',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — 二手2026年8月约$820–1,130，但大多数30系显卡（3080/3090）在2021–22挖矿热潮中24小时满负荷运行，二手货源存在风险。功耗340W（以¥31/kWh计每月约¥2,604电费）。仅在可当面验卡且有专用通风房间时购买——否则新品RTX 5060 Ti 16 GB（约$630）是更稳妥的性价比之选。',
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
            priceRange: '$170-285',
            label: '在Amazon.co.jp查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '$285',
            label: '在Tsukumo（ツクモ）查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.dospara.co.jp/search/?keywords=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '$285',
            label: '在Dospara（ドスパラ）查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '$345-630',
            label: '在Amazon.co.jp查看RTX 4060 Ti 16GB价格',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '$345-440',
            label: '在Amazon.co.jp查看RX 7800 XT价格',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '$630',
            label: '在Amazon.co.jp查看RTX 5060 Ti 16GB价格',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: '日本购买指南',
        content: [
          '<strong>在日本购买显卡有两条可靠渠道：从正规授权零售商购买新品（Amazon.co.jp、Tsukumo、Dospara、Yodobashi Camera），或从Mercari、Yahoo拍卖或秋叶原Janpara购买二手。</strong>对于首次购买者，秋叶原有决定性优势：可以亲手检查显卡、向店员咨询兼容性，并当天带走。',
          '日本新品显卡零售商（2026年8月价格）：Amazon.co.jp全国Prime次日达。秋叶原1丁目的Tsukumo（ツクモ）库存最丰富，员工具备LLM构建专业知识。Dospara（ドスパラ）秋叶原店NVIDIA显卡品类强大。Yodobashi Camera（ヨドバシカメラ）Multi Akiba覆盖所有主要品牌并可积累Yodobashi积分。',
          '二手显卡渠道：Mercari（メルカリ）和Yahoo! Auctions（Yahoo!オークション）提供最广泛的选择和最低价格。秋叶原的Janpara（じゃんぱら）是信誉良好的二手专卖店，提供30天退货保障。在Mercari购买时：检查清单中的保证（保証）状态，直接询问卖家显卡是否用于マイニング（挖矿），卖家评级需高于95%，并且只购买有多张真实显卡清晰照片的清单。挖矿显卡24小时满负荷运行，寿命大幅缩短。',
          '预算决策矩阵：不足约$170 → Mercari购买二手RTX 3060 12 GB。约$170-285 → Tsukumo或Dospara购买新品RTX 3060 12 GB。约$345-630 → RTX 4060 Ti 16 GB（二手）或RX 7800 XT（新品）。约$450以上 → 新品RTX 5060 Ti 16 GB，或RTX 3090二手（仅在可当面验卡、有专用房间且通风良好时）。',
          '日本电费说明：日本2026年平均约¥31/kWh。每日8小时推理使用：RTX 3060 12 GB（170W）约¥1,265/月。RTX 4060 Ti 16 GB（165W）约¥1,229/月。RTX 3090 24 GB（350W）约¥2,604/月。RTX 3090功耗更高，多出的电费会在数月内抵消其相对3060的价差。',
          '全预算显卡选购概览：[本地LLM最佳预算显卡指南](/local-llms/best-budget-gpus-local-llm)。AMD显卡专项指南：[本地LLM最佳AMD显卡](/local-llms/best-amd-gpus-local-llm)。',
          '<em>披露：本文包含联盟链接，通过购买我们可能获得佣金，您不承担额外费用。</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（二手）',
            productCategory: 'gpu',
            priceRange: '$140-170',
            label: '在Mercari（メルカリ）搜索二手RTX 3060 12 GB',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（二手）',
            productCategory: 'gpu',
            priceRange: '$140-180',
            label: '在Yahoo拍卖（Yahoo!オークション）搜索二手RTX 3060 12 GB',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB（二手）',
            productCategory: 'gpu',
            priceRange: '$170-205',
            label: '在Janpara（じゃんぱら）搜索二手RTX 3060 12 GB',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题：在日本购买本地LLM显卡',
        faqs: [
          {
            q: '2026年，在日本运行本地LLM性价比（コスパ）最高的显卡是哪款？',
            a: '对大多数人来说，RTX 3060 12 GB（新品约$285，二手约$170）性价比最高——12 GB显存无需配置CUDA即可将所有7B模型运行到20-25 tok/s。若需13B模型，可升级到RTX 4060 Ti 16 GB（约$450）。二手RTX 3090 24 GB（约$820–1,130）可提供24 GB以运行30B级模型，但大多数30系显卡在2021–22年被挖矿酷卡且功耗达340W——除非可当面验卡，否则新品RTX 5060 Ti 16 GB（约$630）或二手RX 7800 XT（约$345）是更稳妥的性价比之选。',
          },
          {
            q: 'RTX 3060 12 GB和8 GB版本有什么区别？',
            a: '8 GB版本在Q4_K_M量化下可以顺畅运行大多数7B模型——该量化下7B模型只需约4-5 GB显存，即使算上典型的上下文开销也能装入8 GB。真正的差距出现在更高的层级：12 GB版本有足够余量运行12B-14B模型、更长的上下文窗口，以及在7B规模下使用质量更高的Q5_K_M或Q8量化，而这些是8 GB显卡运行起来不太宽裕的场景。如果预算允许，12 GB版本是本地LLM更具前瞻性的选择，但8 GB版本并非不能用——只是在转向更大模型或更长上下文时会更早遇到瓶颈。',
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
            a: '日本2026年平均约¥31/kWh。每日4小时推理使用：RTX 3060 12 GB（170W）约¥632/月。RTX 4060 Ti 16 GB（165W）约¥615/月。RTX 3090 24 GB（350W）约¥1,302/月。每日8小时则将这些数字翻倍。购买前请将电费纳入总拥有成本计算。',
          },
        ],
      },
    },
  },

  es: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-es.webp',
    title: '¿Cuál es la mejor GPU por precio para LLMs locales en Japón?',
    seoTitle: 'Mejor GPU por precio para LLM local Japón 2026: RTX 3060',
    metaDescription:
      'RTX 3060 12 GB es la mejor GPU por precio para LLM local en Japón (~245 €). La RTX 3090 usada ~700–970 €, pero la serie 30 sufrió minería — la RTX 5060 Ti 16 GB nueva es más segura.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      'En Japón, la RTX 3060 12 GB ofrece el mejor precio/rendimiento (nueva ~245 €, de segunda mano ~145 €). 12 GB VRAM ejecuta modelos 7B a 20–25 tok/s, disponible en Tsukumo y Dospara en Akihabara. Una RTX 3090 24 GB de segunda mano cuesta ahora ~700–970 €, pero la mayoría de las tarjetas de la serie 30 se usaron intensamente en el boom de minería de 2021–22, así que por relación calidad-precio una RTX 5060 Ti 16 GB nueva (~540 €) o una RX 7800 XT usada (~295 €) es la opción más segura. (En Latinoamérica suma aranceles e IVA locales; los precios importados suelen ser más altos.)',
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
        answer: 'RTX 3060 12GB at ~¥45,000 new.',
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
        answer: 'RTX 3060 12 GB（新品~¥45,000）がコスパ最強。',
        bullets: ['RTX 3060: 新品¥40K/中古¥25K'],
        updatedDate: '2026-05',
      },
      zh: {
        question: '日本LLM最佳性价比显卡？',
        answer: 'RTX 3060 12 GB（新品约¥45,000）性价比最高。',
        bullets: ['RTX 3060: 新品¥40K/二手¥25K'],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es la mejor GPU por precio para LLMs locales en Japón?',
        answer:
          'La RTX 3060 12 GB a ~245 € nueva (~145 € de segunda mano) es la mejor GPU por precio en Japón. 12 GB VRAM ejecuta cualquier modelo 7B a 20–25 tok/s sin configuración adicional.',
        bullets: [
          'RTX 3060 12 GB: ~245 € nueva / ~145 € segunda mano — mejor valor para modelos 7B a 20-25 tok/s.',
          'RTX 4060 Ti 16 GB: ~390 € nueva / ~295 € segunda mano — acceso a modelos 13B a 18-22 tok/s.',
          'RTX 3090 24 GB segunda mano ~700–970 € — serie 30 mayormente desgastada por minería; 340W, evitar en apartamentos japoneses (~¥2,604/mes) salvo que puedas inspeccionarla.',
          'Opción más segura por relación calidad-precio: RTX 5060 Ti 16 GB nueva (~540 €) o RX 7800 XT usada (~295 €) — evita el riesgo de minería.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor valor: RTX 3060 12 GB a ~245 € nueva / ~145 € de segunda mano (mayo 2026) — modelos 7B a 20-25 tok/s',
          'Gama media: RTX 4060 Ti 16 GB a ~390 € nueva — modelos 13B a 18-22 tok/s, 16 GB de margen',
          'Alternativa AMD: RX 7800 XT 16 GB a ~375 € — 16 GB VRAM, Vulkan/ROCm, ideal para Linux',
          'Precaución: RTX 3090 24 GB usada (~700–970 €) mayormente desgastada por minería; la RTX 5060 Ti 16 GB nueva (~540 €) es más segura',
          'Segunda mano: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) en Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La RTX 3060 12 GB a ~245 € nueva es la GPU con mejor relación precio/rendimiento para LLMs locales en Japón a agosto de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Los precios de GPUs en Japón son 15-20% superiores a los de EE.UU. La RTX 3060 12 GB ejecuta cualquier modelo 7B a 20-25 tok/s y se encuentra en Tsukumo y Dospara en Akihabara, o de segunda mano en Mercari por ~145 €.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs por rango de precio en Japón',
        content: [
          '<strong>A agosto de 2026, los precios de GPUs en Japón están 15–20% por encima de los precios equivalentes en EE.UU. Las cuatro tarjetas siguientes cubren cualquier presupuesto realista para inferencia local con LLMs, de ~145 € de segunda mano (RTX 3060 12 GB) a ~700–970 € de segunda mano (RTX 3090 24 GB). Precios en euros de tarjetas compradas en tiendas japonesas (Tsukumo, Dospara).</strong>',
          'La siguiente tabla usa precios de calle de mayo 2026 de Tsukumo, Dospara y Yodobashi para tarjetas nuevas, y puntos medios de Mercari/Yahoo Auctions para las de segunda mano, en equivalente en euros. Los precios fluctúan — verifica antes de comprar.',
        ],
        columns: ['GPU + VRAM', 'Precio nueva / segunda mano (€)', 'Mejor para'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            'Precio nueva / segunda mano (€)': '~245 € / ~145 €',
            'Mejor para': 'Modelos 7B, mejor valor de entrada',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            'Precio nueva / segunda mano (€)': '~390 € / ~295 €',
            'Mejor para': 'Modelos 13B, gama media',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            'Precio nueva / segunda mano (€)': '~375 € / ~295 €',
            'Mejor para': 'AMD/Vulkan/ROCm en Linux',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16 GB',
            'Precio nueva / segunda mano (€)': '~540 € / —',
            'Mejor para': '16 GB reciente, garantía, sin riesgo de minería',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            'Precio nueva / segunda mano (€)': '— / ~700–970 €',
            'Mejor para': 'Modelos 30B+ (PRECAUCIÓN: mayormente desgastada por minería; 340W, demasiado caliente para apartamentos)',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — Ideal para: quien quiere una tarjeta nueva con garantía y más de 12 GB, sin el riesgo del mercado de segunda mano de una RTX 3090 de la era minera. Evita si: la RTX 3060 12 GB ya cubre tus tamaños de modelo y quieres ahorrar.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — usada ~700–970 € en agosto de 2026, pero la mayoría de las tarjetas de la serie 30 (3080/3090) funcionaron 24/7 durante el boom de minería de 2021–22, así que el stock usado es una apuesta. Además consume 340W (~¥2,604/mes a ¥31/kWh en Japón). Cómprala solo si puedes inspeccionar la tarjeta y tienes una habitación dedicada con buena ventilación — de lo contrario, una RTX 5060 Ti 16 GB nueva (~540 €) es la opción más segura.',
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
            priceRange: '~145-245 €',
            label: 'Ver precio RTX 3060 12 GB en Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '~245 €',
            label: 'Ver precio RTX 3060 12 GB en Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~295-390 €',
            label: 'Ver precio RTX 4060 Ti 16 GB en Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '~295-375 €',
            label: 'Ver precio RX 7800 XT en Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~540 €',
            label: 'Ver precio RTX 5060 Ti 16 GB en Amazon.co.jp',
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
          'Matriz de decisión (equivalente en euros): Menos de ~160 € → RTX 3060 12 GB de segunda mano en Mercari. ~160–245 € → RTX 3060 12 GB nueva en Tsukumo o Dospara. ~295–390 € → RTX 4060 Ti 16 GB (segunda mano) o RX 7800 XT (nueva). Más de ~390 € → RTX 5060 Ti 16 GB nueva o RTX 3090 de segunda mano (solo si puedes inspeccionarla y tienes habitación dedicada con buena ventilación).',
          'Nota sobre electricidad en Japón: Japón promedia ¥31/kWh (2026). A 8 horas de uso diario: RTX 3060 12 GB (170W) cuesta ~¥1,265/mes. RTX 4060 Ti 16 GB (165W) cuesta ~¥1,229/mes. RTX 3090 24 GB (350W) cuesta ~¥2,604/mes.',
          '<em>Aviso: Este artículo contiene enlaces de afiliado. Podemos ganar una comisión si compras a través de estos enlaces, sin coste adicional para ti.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (segunda mano)',
            productCategory: 'gpu',
            priceRange: '~120-145 €',
            label: 'Buscar RTX 3060 12 GB de segunda mano en Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (segunda mano)',
            productCategory: 'gpu',
            priceRange: '~120-160 €',
            label: 'Buscar RTX 3060 12 GB en Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (segunda mano)',
            productCategory: 'gpu',
            priceRange: '~145-175 €',
            label: 'Buscar RTX 3060 12 GB en Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: Comprar una GPU para LLMs locales en Japón',
        faqs: [
          {
            q: '¿Cuál es la GPU con mejor relación calidad-precio (コスパ) para LLMs locales en Japón en 2026?',
            a: 'Para la mayoría, la RTX 3060 12 GB (~245 € nueva, ~145 € de segunda mano) es la mejor opción por precio: 12 GB de VRAM ejecutan cualquier modelo 7B a 20–25 tok/s sin configurar CUDA. Para modelos 13B, sube a la RTX 4060 Ti 16 GB (~390 €). Una RTX 3090 24 GB de segunda mano (~700–970 €) da 24 GB para modelos de clase 30B, pero la mayoría de las tarjetas de la serie 30 se desgastaron con la minería en 2021–22 y consumen 340W — así que, salvo que puedas inspeccionar la tarjeta, una RTX 5060 Ti 16 GB nueva (~540 €) o una RX 7800 XT usada (~295 €) es la opción más segura. (En Latinoamérica, suma aranceles e IVA locales al importar.)',
          },
          {
            q: '¿Cuál es la diferencia entre la RTX 3060 12 GB y la versión de 8 GB?',
            a: 'La versión de 8 GB puede ejecutar la mayoría de modelos 7B en cuantización Q4_K_M sin problema — un modelo 7B a esa cuantización necesita solo unos 4-5 GB de VRAM, lo que cabe en 8 GB incluso con el overhead de contexto habitual. La diferencia real aparece más arriba: la versión de 12 GB tiene margen suficiente para modelos 13B-14B, ventanas de contexto más largas y cuantización Q5_K_M o Q8 de mayor calidad en 7B, algo que la tarjeta de 8 GB maneja con menos holgura. Para LLMs locales, la versión de 12 GB es la compra más duradera si el presupuesto lo permite, pero la de 8 GB no es inutilizable — simplemente se queda sin margen antes al pasar a modelos más grandes o contextos más largos.',
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
            a: 'Japón promedia aproximadamente ¥31/kWh en 2026. A 4 horas de uso diario: RTX 3060 12 GB (170W) cuesta ~¥632/mes. RTX 4060 Ti 16 GB (165W) cuesta ~¥615/mes. RTX 3090 24 GB (350W) cuesta ~¥1,302/mes.',
          },
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-ar.webp',
    title: 'ما أفضل معالج رسومات من حيث السعر لتشغيل النماذج اللغوية الكبيرة محلياً في اليابان؟',
    seoTitle: 'أفضل ⁨GPU⁩ قيمةً للـ ⁨LLMs⁩ المحلية في اليابان ⁨2026⁩: ⁨RTX 3060⁩',
    metaDescription:
      'RTX 3060 12 GB (~$285) أفضل GPU قيمةً في اليابان لـ LLMs. RTX 3090 مستعمل ~$820–1,130 لكن سلسلة 30 أُنهكت بالتعدين — RTX 5060 Ti 16 GB الجديد خيار أأمن.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      'في اليابان، يقدم RTX 3060 12 GB أفضل أداء مقابل السعر (جديد ~$285، مستعمل ~$170). 12 جيجابايت VRAM يشغّل نماذج 7B بـ20–25 رمز/ثانية، ومتاح في Tsukumo وDospara في أكيهابارا. أصبح RTX 3090 24 GB المستعمل الآن ~$820–1,130 — لكن معظم بطاقات سلسلة 30 أُنهكت بشدة في طفرة التعدين 2021–22، لذا من حيث القيمة يُعدّ RTX 5060 Ti 16 GB الجديد (~$630) أو RX 7800 XT المستعمل (~$345) الخيار الأأمن.',
    toc: [
      { label: 'معالجات الرسومات حسب الفئة السعرية في اليابان', anchor: '#gpus-by-price' },
      { label: 'دليل الشراء في اليابان', anchor: '#buying-guide' },
      { label: 'أسئلة شائعة', anchor: '#faq' },
    ],
    intro:
      'أسعار معالجات الرسومات في اليابان أعلى بـ15–20% من الأسعار الأمريكية بسبب تكاليف الاستيراد و10% ضريبة استهلاك. يمكن للسوق المستعملة (Mercari وYahoo Auctions وJanpara) توفير 30–40% مقارنةً بالجديد. يُعيّن هذا الدليل معالجات الرسومات الأربعة الجديرة بالشراء في اليابان بأسعارها الحقيقية في الشوارع في أغسطس 2026.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل معالج رسومات من حيث السعر لتشغيل النماذج اللغوية الكبيرة محلياً في اليابان؟',
        answer:
          'RTX 3060 12 GB بـ~$285 جديداً (~$170 مستعملاً) هو أفضل معالج رسومات من حيث السعر في اليابان. 12 جيجابايت VRAM يشغّل أي نموذج 7B بـ20–25 رمز/ثانية بدون إعداد إضافي.',
        bullets: [
          'RTX 3060 12 GB: ~$285 جديد / ~$170 مستعمل — أفضل قيمة لنماذج 7B بـ20-25 رمز/ثانية.',
          'RTX 4060 Ti 16 GB: ~$450 جديد / ~$345 مستعمل — الوصول إلى نماذج 13B بـ18-22 رمز/ثانية.',
          'RTX 3090 24 GB مستعمل ~$820–1,130 — سلسلة 30 غالباً منهكة بالتعدين؛ 340 واط، تجنّب في الشقق اليابانية (~¥2,604/شهر) إلا إذا أمكن فحصها.',
          'الخيار الأأمن قيمةً: RTX 5060 Ti 16 GB الجديد (~$630) أو RX 7800 XT المستعمل (~$345) — يتجنّب مخاطر التعدين.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الأفضل قيمةً: RTX 3060 12 GB بـ~$285 جديد / ~$170 مستعمل (أغسطس 2026) — نماذج 7B بـ20-25 رمز/ثانية',
          'الفئة المتوسطة: RTX 4060 Ti 16 GB بـ~$450 جديد — نماذج 13B بـ18-22 رمز/ثانية، هامش 16 جيجابايت',
          'بديل AMD: RX 7800 XT 16 GB بـ~$440 — 16 جيجابايت VRAM، Vulkan/ROCm، مثالي لنظام Linux',
          'انتبه: RTX 3090 24 GB المستعمل (~$820–1,130) غالباً منهك بالتعدين؛ RTX 5060 Ti 16 GB الجديد (~$630) أأمن',
          'مستعملة: Mercari (メルカリ)، Yahoo Auctions (Yahoo!オークション)، Janpara (じゃんぱら) في أكيهابارا',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RTX 3060 12 GB بـ~$285 جديداً هو معالج الرسومات الأفضل أداءً مقابل السعر للنماذج اللغوية الكبيرة المحلية في اليابان اعتباراً من أغسطس 2026.',
          },
          {
            type: 'plain-terms',
            text: 'أسعار معالجات الرسومات في اليابان أعلى بـ15-20% من الأسعار الأمريكية. يشغّل RTX 3060 12 GB أي نموذج 7B بـ20-25 رمز/ثانية وهو متاح في Tsukumo وDospara في أكيهابارا، أو مستعملاً على Mercari بـ~$170.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'معالجات الرسومات حسب الفئة السعرية في اليابان',
        content: [
          '<strong>اعتباراً من أغسطس 2026، أسعار معالجات الرسومات في اليابان أعلى بـ15–20% من الأسعار المكافئة في الولايات المتحدة. تغطي البطاقات الأربعة التالية أي ميزانية واقعية للاستدلال المحلي بالنماذج اللغوية الكبيرة، من ~$170 مستعملاً (RTX 3060 12 GB) إلى ~$820–1,130 مستعملاً (RTX 3090 24 GB). الأسعار بالدولار لبطاقات تُشترى من متاجر يابانية (Tsukumo وDospara).</strong>',
          'تستخدم الجدول التالي أسعار الشوارع في أغسطس 2026 من Tsukumo وDospara وYodobashi للبطاقات الجديدة، والنقاط الوسطى من Mercari/Yahoo Auctions للمستعملة (بمعادل الدولار). الأسعار تتقلب — تحقق قبل الشراء.',
        ],
        columns: ['معالج الرسومات + VRAM', 'السعر جديد / مستعمل (USD)', 'الأفضل لـ'],
        rows: [
          {
            'معالج الرسومات + VRAM': 'RTX 3060 12 GB',
            'السعر جديد / مستعمل (USD)': '~$285 / ~$170',
            'الأفضل لـ': 'نماذج 7B، أفضل قيمة للمبتدئين',
          },
          {
            'معالج الرسومات + VRAM': 'RTX 4060 Ti 16 GB',
            'السعر جديد / مستعمل (USD)': '~$450 / ~$345',
            'الأفضل لـ': 'نماذج 13B، الفئة المتوسطة',
          },
          {
            'معالج الرسومات + VRAM': 'RX 7800 XT 16 GB',
            'السعر جديد / مستعمل (USD)': '~$440 / ~$345',
            'الأفضل لـ': 'AMD/Vulkan/ROCm على Linux',
          },
          {
            'معالج الرسومات + VRAM': 'RTX 5060 Ti 16 GB',
            'السعر جديد / مستعمل (USD)': '~$630 / —',
            'الأفضل لـ': '16 جيجابايت أحدث، بضمان، دون مخاطر التعدين',
          },
          {
            'معالج الرسومات + VRAM': 'RTX 3090 24 GB',
            'السعر جديد / مستعمل (USD)': '— / ~$820–1,130',
            'الأفضل لـ': 'نماذج 30B+ (انتبه: غالباً منهك بالتعدين؛ 340 واط، حرارة زائدة للشقق)',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — مثالي لـ: من يريد بطاقة جديدة بضمان وأكثر من 12 جيجابايت، دون مخاطر السوق المستعملة لبطاقة RTX 3090 من حقبة التعدين. تجنّب إذا: كانت RTX 3060 12 GB تغطي أحجام نماذجك بالفعل وتريد توفير المال.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — مستعمل ~$820–1,130 في أغسطس 2026، لكن معظم بطاقات سلسلة 30 (3080/3090) عملت 24/7 خلال طفرة التعدين 2021–22، لذا فالمخزون المستعمل مقامرة. كما يستهلك 340 واط (~¥2,604/شهر بـ¥31/كيلوواط ساعة في اليابان). اشترِه فقط إذا أمكنك فحص البطاقة ولديك غرفة مخصصة بتهوية جيدة — وإلا فإن RTX 5060 Ti 16 GB الجديد (~$630) هو الخيار الأأمن.',
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
            priceRange: '$170-285',
            label: 'عرض سعر RTX 3060 12 GB على Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '$285',
            label: 'عرض سعر RTX 3060 12 GB في Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '$345-630',
            label: 'عرض سعر RTX 4060 Ti 16 GB على Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '$345-440',
            label: 'عرض سعر RX 7800 XT على Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '$630',
            label: 'عرض سعر RTX 5060 Ti 16 GB على Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'دليل الشراء في اليابان',
        content: [
          '<strong>تتوفر في اليابان قناتا شراء موثوقتان لمعالجات الرسومات: جديد لدى تجار معتمدين (Amazon.co.jp وTsukumo وDospara وYodobashi Camera) ومستعمل على Mercari وYahoo Auctions أو Janpara في أكيهابارا.</strong> لمن يشتري لأول مرة، تتميز أكيهابارا بميزة حاسمة: يمكنك فحص البطاقة شخصياً والمغادرة بها في نفس اليوم.',
          'بائعو معالجات الرسومات الجديدة في اليابان (أسعار أغسطس 2026): Amazon.co.jp توصّل في جميع أنحاء البلاد مع توصيل Prime في اليوم التالي. Tsukumo (ツクモ) في أكيهابارا رقم 1-chome لديها أوسع مخزون وموظفون متمرسون في بناء أجهزة النماذج اللغوية الكبيرة. Dospara (ドスパラ) أكيهابارا قوية في بطاقات NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba تغطي جميع الماركات الرئيسية.',
          'مصادر المستعمل: تقدم Mercari (メルカリ) وYahoo! Auctions (Yahoo!オークション) أوسع اختيار وأدنى أسعار. Janpara (じゃんぱら) في أكيهابارا متخصص موثوق في المستعمل مع إمكانية إرجاع خلال 30 يوماً. عند الشراء من Mercari: تحقق من حالة الضمان (保証) في القائمة، اسأل البائع مباشرةً إذا كانت بطاقة الرسومات استُخدمت للتعدين (マイニング)، وتجنّب القوائم بدون صور واضحة متعددة للبطاقة الفعلية.',
          'مصفوفة قرار الميزانية (بمعادل الدولار): أقل من ~$170 → RTX 3060 12 GB مستعملة على Mercari. ~$170–285 → RTX 3060 12 GB جديدة في Tsukumo أو Dospara. ~$345–630 → RTX 4060 Ti 16 GB (مستعملة) أو RX 7800 XT (جديدة). أكثر من ~$450 → RTX 5060 Ti 16 GB جديدة أو RTX 3090 مستعملة (بشرط إمكانية فحصها وتوفر غرفة مخصصة وتهوية جيدة).',
          'ملاحظة حول الكهرباء في اليابان: معدل ¥31/كيلوواط ساعة (2026). بـ8 ساعات استدلال يومياً: RTX 3060 12 GB (170 واط) تكلف ~¥1,265/شهر. RTX 4060 Ti 16 GB (165 واط) تكلف ~¥1,229/شهر. RTX 3090 24 GB (350 واط) تكلف ~¥2,604/شهر.',
          '<em>إشعار: يحتوي هذا المقال على روابط تابعة. قد نحصل على عمولة إذا اشتريت من خلال هذه الروابط، بدون تكلفة إضافية عليك.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (مستعمل)',
            productCategory: 'gpu',
            priceRange: '$140-170',
            label: 'البحث عن RTX 3060 12 GB مستعمل في Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (مستعمل)',
            productCategory: 'gpu',
            priceRange: '$140-180',
            label: 'البحث عن RTX 3060 12 GB في Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (مستعمل)',
            productCategory: 'gpu',
            priceRange: '$170-205',
            label: 'البحث عن RTX 3060 12 GB في Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: شراء معالج رسومات للنماذج اللغوية الكبيرة في اليابان',
        faqs: [
          {
            q: 'ما أفضل معالج رسومات من حيث القيمة (コスパ) للنماذج اللغوية الكبيرة المحلية في اليابان عام 2026؟',
            a: 'بالنسبة لمعظم الناس، يُعدّ RTX 3060 12 GB (~$285 جديداً، ~$170 مستعملاً) أفضل خيار من حيث القيمة — 12 جيجابايت VRAM تشغّل كل نموذج 7B بـ20–25 رمز/ثانية بدون إعداد CUDA. للانتقال إلى نماذج 13B، ارتقِ إلى RTX 4060 Ti 16 GB (~$450). يوفّر RTX 3090 24 GB المستعمل (~$820–1,130) سعة 24 جيجابايت لنماذج فئة 30B، لكن معظم بطاقات سلسلة 30 أُنهكت بالتعدين في 2021–22 وتستهلك 340 واط — لذا ما لم تتمكن من فحص البطاقة، فإن RTX 5060 Ti 16 GB الجديد (~$630) أو RX 7800 XT المستعمل (~$345) هو الخيار الأأمن.',
          },
          {
            q: 'ما الفرق بين RTX 3060 12 GB وإصدار 8 جيجابايت؟',
            a: 'يمكن لإصدار 8 جيجابايت تشغيل معظم نماذج 7B بتكميم Q4_K_M دون مشكلة — يحتاج نموذج 7B بهذا التكميم إلى نحو 4-5 جيجابايت VRAM فقط، وهو ما يتسع ضمن 8 جيجابايت حتى مع عبء السياق المعتاد. يظهر الفرق الحقيقي في الفئات الأعلى: يوفر إصدار 12 جيجابايت هامشاً كافياً لنماذج 12B-14B، ونوافذ سياق أطول، وتكميم Q5_K_M أو Q8 الأعلى جودة عند 7B، وهي أمور تتعامل معها بطاقة 8 جيجابايت بأريحية أقل. للنماذج اللغوية الكبيرة المحلية، يُعد إصدار 12 جيجابايت الخيار الأكثر ثباتاً على المدى الطويل إذا سمحت الميزانية، لكن إصدار 8 جيجابايت ليس عديم الفائدة — فقط ينفد هامشه أبكر عند الانتقال إلى نماذج أكبر أو سياقات أطول.',
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
            a: 'يبلغ متوسط اليابان نحو ¥31/كيلوواط ساعة في 2026. بـ4 ساعات استدلال يومياً: RTX 3060 12 GB (170 واط) تكلف ~¥632/شهر. RTX 4060 Ti 16 GB (165 واط) تكلف ~¥615/شهر. RTX 3090 24 GB (350 واط) تكلف ~¥1,302/شهر.',
          },
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-pt.webp',
    title: 'Qual é a melhor GPU por custo-benefício para LLMs locais no Japão?',
    seoTitle: 'Melhor GPU custo-benefício para LLM local Japão 2026: RTX 3060',
    metaDescription:
      'RTX 3060 12 GB é a melhor GPU por custo-benefício no Japão (~R$1.450). RTX 3090 usada ~R$4.180–5.790, mas a série 30 sofreu mineração — a RTX 5060 Ti 16 GB nova é mais segura.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
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
      'No Japão, a RTX 3060 12 GB oferece o melhor custo-benefício (nova ~R$1.450, usada ~R$870). 12 GB VRAM executa modelos 7B a 20–25 tok/s, disponível na Tsukumo e Dospara em Akihabara. Uma RTX 3090 24 GB usada custa agora ~R$4.180–5.790 — mas a maioria das placas da série 30 foi muito usada no boom de mineração de 2021–22, então, por custo-benefício, uma RTX 5060 Ti 16 GB nova (~R$3.220) ou uma RX 7800 XT usada (~R$1.740) é a escolha mais segura. (Preços em reais convertidos; importar ao Brasil ainda soma frete e impostos.)',
    toc: [
      { label: 'GPUs por faixa de preço no Japão', anchor: '#gpus-by-price' },
      { label: 'Guia de compra no Japão', anchor: '#buying-guide' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    intro:
      'Os preços de GPUs no Japão estão 15–20% acima dos preços nos EUA devido a custos de importação e 10% de imposto de consumo. O mercado de usados (Mercari, Yahoo Auctions, Janpara) pode economizar 30–40% em relação ao novo. Este guia mapeia as quatro GPUs que valem a pena comprar no Japão com seus preços reais de rua de agosto de 2026 — novas na Tsukumo, Dospara e Yodobashi, e usadas online.',
    quickAnswerTop: {
      en: {
        question: 'What is the best value GPU for local LLMs in Japan?',
        answer: 'RTX 3060 12GB at ~¥45,000 new.',
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
        answer: 'RTX 3060 12 GB（新品~¥45,000）がコスパ最強。',
        bullets: ['RTX 3060: 新品¥40K/中古¥25K'],
        updatedDate: '2026-05',
      },
      zh: {
        question: '日本LLM最佳性价比显卡？',
        answer: 'RTX 3060 12 GB（新品约¥45,000）性价比最高。',
        bullets: ['RTX 3060: 新品¥40K/二手¥25K'],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es la mejor GPU por precio para LLMs locales en Japón?',
        answer:
          'La RTX 3060 12 GB (~R$1.450 nueva) es la mejor GPU por custo-benefício no Japón.',
        bullets: [
          'RTX 3060 12 GB: ~R$1.450 nueva / ~R$870 usada — melhor valor para modelos 7B.',
          'RTX 3090 24 GB usada ~R$4.180–5.790 — série 30 desgastada por mineração; RTX 5060 Ti 16 GB nova é mais segura.',
        ],
        updatedDate: '2026-07',
      },
      pt: {
        question: 'Qual é a melhor GPU por custo-benefício para LLMs locais no Japão?',
        answer:
          'A RTX 3060 12 GB a ~R$1.450 nova (~R$870 usada) é a melhor GPU por custo-benefício no Japão. 12 GB VRAM executa qualquer modelo 7B a 20–25 tok/s sem configuração adicional.',
        bullets: [
          'RTX 3060 12 GB: ~R$1.450 nova / ~R$870 usada — melhor valor para modelos 7B a 20-25 tok/s.',
          'RTX 4060 Ti 16 GB: ~R$2.320 nova / ~R$1.770 usada — acesso a modelos 13B a 18-22 tok/s.',
          'RTX 3090 24 GB usada ~R$4.180–5.790 — série 30 majoritariamente desgastada por mineração; 340W, evitar em apartamentos japoneses (~¥8.000/mês) a menos que possa inspecioná-la.',
          'Escolha mais segura por custo-benefício: RTX 5060 Ti 16 GB nova (~R$3.220) ou RX 7800 XT usada (~R$1.740) — evita o risco de mineração.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor valor: RTX 3060 12 GB a ~R$1.450 nova / ~R$870 usada (maio 2026) — modelos 7B a 20-25 tok/s',
          'Médio alcance: RTX 4060 Ti 16 GB a ~R$2.320 nova — modelos 13B a 18-22 tok/s, 16 GB de margem de contexto',
          'Alternativa AMD: RX 7800 XT 16 GB a ~R$2.250 — 16 GB VRAM, Vulkan/ROCm, ideal para Linux',
          'Cuidado: RTX 3090 24 GB usada (~R$4.180–5.790) majoritariamente desgastada por mineração; a RTX 5060 Ti 16 GB nova (~R$3.220) é mais segura',
          'Usados: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) em Akihabara',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A RTX 3060 12 GB a ~R$1.450 nova é a GPU com melhor custo-benefício para LLMs locais no Japão em agosto de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Os preços de GPUs no Japão são 15-20% superiores aos dos EUA. A RTX 3060 12 GB executa qualquer modelo 7B a 20-25 tok/s e está disponível na Tsukumo e Dospara em Akihabara, ou usada no Mercari por ~R$870.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: 'GPUs por faixa de preço no Japão',
        content: [
          '<strong>Em agosto de 2026, os preços de GPUs no Japão estão 15–20% acima dos preços equivalentes nos EUA devido a custos de importação e 10% de imposto de consumo. As quatro placas abaixo cobrem qualquer orçamento realista para inferência LLM local, de ~R$870 usada (RTX 3060 12 GB) a ~R$4.180–5.790 usada (RTX 3090 24 GB). Preços em reais de placas compradas em lojas japonesas (Tsukumo, Dospara).</strong>',
          'A tabela abaixo usa preços de rua de agosto de 2026 da Tsukumo, Dospara e Yodobashi para placas novas, e pontos médios do Mercari/Yahoo Auctions para usadas, em equivalente em reais. Os preços flutuam — verifique antes de comprar.',
        ],
        columns: ['GPU + VRAM', 'Preço nova / usada (R$)', 'Melhor para'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            'Preço nova / usada (R$)': '~R$1.450 / ~R$870',
            'Melhor para': 'Modelos 7B, melhor valor de entrada',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            'Preço nova / usada (R$)': '~R$2.320 / ~R$1.770',
            'Melhor para': 'Modelos 13B, médio alcance',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            'Preço nova / usada (R$)': '~R$2.250 / ~R$1.770',
            'Melhor para': 'AMD/Vulkan/ROCm no Linux',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16 GB',
            'Preço nova / usada (R$)': '~R$3.220 / —',
            'Melhor para': '16 GB mais nova, garantia, sem risco de mineração',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            'Preço nova / usada (R$)': '— / ~R$4.180–5.790',
            'Melhor para': 'Modelos 30B+ (CUIDADO: majoritariamente desgastada por mineração; 340W, quente demais para apartamentos)',
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
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — Ideal para: quem quer uma placa nova com garantia e mais de 12 GB, sem o risco do mercado usado de uma RTX 3090 da era da mineração. Evite se: a RTX 3060 12 GB já cobre seus tamanhos de modelo e você quer economizar.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — usada ~R$4.180–5.790 em agosto de 2026, mas a maioria das placas da série 30 (3080/3090) rodou 24/7 durante o boom de mineração de 2021–22, então o estoque usado é uma aposta. Também consome 340W (~¥8.000/mês a ¥31/kWh no Japão). Compre somente se puder inspecionar a placa e tiver um quarto dedicado e bem ventilado — caso contrário, uma RTX 5060 Ti 16 GB nova (~R$3.220) é a opção mais segura.',
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
            priceRange: '~R$870-1.450',
            label: 'Ver preço da RTX 3060 12 GB na Amazon.co.jp',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '~R$1.450',
            label: 'Ver preço da RTX 3060 12 GB na Tsukumo (ツクモ)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~R$1.770-2.320',
            label: 'Ver preço da RTX 4060 Ti 16 GB na Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '~R$1.770-2.250',
            label: 'Ver preço da RX 7800 XT na Amazon.co.jp',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '~R$3.220',
            label: 'Ver preço da RTX 5060 Ti 16 GB na Amazon.co.jp',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: 'Guia de compra no Japão',
        content: [
          '<strong>O Japão oferece dois canais de compra confiáveis para GPUs: novo em varejistas autorizados (Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera) e usado no Mercari, Yahoo Auctions ou Janpara em Akihabara.</strong> Para compradores de primeira vez, Akihabara tem uma vantagem decisiva: você pode inspecionar a placa pessoalmente e sair no mesmo dia.',
          'Varejistas de GPUs novas no Japão (preços de agosto de 2026): Amazon.co.jp entrega em todo o país com Prime no dia seguinte. Tsukumo (ツクモ) em 1-chome, Akihabara tem o estoque mais amplo e equipe experiente para builds LLM. Dospara (ドスパラ) Akihabara é forte em placas NVIDIA. Yodobashi Camera (ヨドバシカメラ) Multi Akiba cobre todas as marcas principais com pontos Yodobashi.',
          'Fontes de usados: Mercari (メルカリ) e Yahoo! Auctions (Yahoo!オークション) oferecem a maior seleção e os menores preços. Janpara (じゃんぱら) em Akihabara é um especialista em usados de confiança com devoluções de 30 dias. Ao comprar no Mercari: verifique o status de garantia (保証) na listagem, pergunte ao vendedor se a GPU foi usada para mineração (マイニング) e evite listagens sem várias fotos claras da placa real.',
          'Matriz de decisão de orçamento (equivalente em reais): Abaixo de ~R$900 → RTX 3060 12 GB usada no Mercari. ~R$900–1.450 → RTX 3060 12 GB nova na Tsukumo ou Dospara. ~R$1.770–2.320 → RTX 4060 Ti 16 GB (usada) ou RX 7800 XT (nova). Acima de ~R$2.320 → RTX 5060 Ti 16 GB nova ou RTX 3090 usada (somente se puder inspecioná-la e tiver quarto dedicado e boa ventilação).',
          'Nota sobre eletricidade no Japão: média de ¥31/kWh (2026). A 8 horas de inferência diária: RTX 3060 12 GB (170W) custa ~¥3.200/mês. RTX 4060 Ti 16 GB (165W) custa ~¥3.100/mês. RTX 3090 24 GB (350W) custa ~¥6.600/mês.',
          '<em>Aviso: Este artigo contém links de afiliados. Podemos ganhar uma comissão se você comprar por meio desses links, sem custo adicional para você.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (usada)',
            productCategory: 'gpu',
            priceRange: '~R$710-870',
            label: 'Buscar RTX 3060 12 GB usada no Mercari (メルカリ)',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (usada)',
            productCategory: 'gpu',
            priceRange: '~R$710-965',
            label: 'Buscar RTX 3060 12 GB usada no Yahoo Auctions (Yahoo!オークション)',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (usada)',
            productCategory: 'gpu',
            priceRange: '~R$870-965',
            label: 'Buscar RTX 3060 12 GB usada na Janpara (じゃんぱら)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: Comprar uma GPU para LLMs locais no Japão',
        faqs: [
          {
            q: 'Qual é a GPU com melhor custo-benefício (コスパ) para LLMs locais no Japão em 2026?',
            a: 'Para a maioria das pessoas, a RTX 3060 12 GB (~R$1.450 nova, ~R$870 usada) é a melhor escolha por custo-benefício — 12 GB de VRAM executam qualquer modelo 7B a 20–25 tok/s sem configurar CUDA. Para modelos 13B, suba para a RTX 4060 Ti 16 GB (~R$2.320). Uma RTX 3090 24 GB usada (~R$4.180–5.790) oferece 24 GB para modelos da classe 30B, mas a maioria das placas da série 30 foi desgastada por mineração em 2021–22 e consome 340W — então, a menos que você possa inspecionar a placa, uma RTX 5060 Ti 16 GB nova (~R$3.220) ou uma RX 7800 XT usada (~R$1.740) é a opção mais segura. (Preços em reais convertidos; importar ao Brasil ainda soma frete e impostos.)',
          },
          {
            q: 'Qual é a diferença entre a RTX 3060 12 GB e a versão de 8 GB?',
            a: 'A versão de 8 GB consegue executar a maioria dos modelos 7B em quantização Q4_K_M sem problemas — um modelo 7B nessa quantização precisa de apenas cerca de 4-5 GB de VRAM, o que cabe em 8 GB mesmo com o overhead de contexto típico. A diferença real aparece mais acima: a versão de 12 GB tem margem suficiente para modelos 13B-14B, janelas de contexto mais longas e quantização Q5_K_M ou Q8 de maior qualidade em 7B, algo que a placa de 8 GB suporta com menos folga. Para LLMs locais, a versão de 12 GB é a compra mais duradoura se o orçamento permitir, mas a versão de 8 GB não é inutilizável — apenas fica sem margem mais cedo ao migrar para modelos maiores ou contextos mais longos.',
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
  ko: {
    theme: 'Hardware Guides',
    heroImage: '/images/best-gpu-local-llm-japan-price-overview-hero-ko.webp',
    title: '일본에서 로컬 LLM용 최고의 가성비 GPU는 무엇입니까?',
    seoTitle: '일본 로컬 LLM 가성비 최고 GPU 2026: RTX 3060',
    metaDescription:
      'RTX 3060 12 GB는 일본 로컬 LLM 가성비 최고 GPU(~$285)입니다. 중고 RTX 3090은 ~$820–1,130이지만 30 시리즈는 채굴로 혹사됨 — 신품 RTX 5060 Ti 16 GB가 더 안전한 선택입니다.',
    publishDate: '2026-05-27',
    dateModified: '2026-08-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12GB', 'RTX 4060 Ti 16GB', 'RX 7800 XT 16GB', 'RTX 3090 24GB'],
    educationalLevel: 'Intermediate',
    audience: '로컬 LLM 추론을 위해 GPU를 구매하는 일본 거주 사용자',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/best-budget-gpus-local-llm',
    siblingBites: ['best-ollama-models-rtx-3060-12gb', 'best-egpu-ollama-macbook'],
    is_living_page: false,
    readTime: '5분 분량',
    leadAnswerBlock:
      '일본에서 RTX 3060 12 GB는 최고의 가격 대비 성능을 제공합니다 (신품 ~$285, 중고 ~$170). 12 GB VRAM으로 7B 모델을 20-25 tok/s로 실행할 수 있으며, 아키하바라의 Tsukumo 및 Dospara에서 구입 가능합니다. 중고 RTX 3090 24 GB는 현재 ~$820–1,130이지만, 대부분의 30 시리즈 카드는 2021–22년 채굴 붐에서 심하게 사용되었으므로, 가성비 측면에서는 신품 RTX 5060 Ti 16 GB(~$630) 또는 중고 RX 7800 XT(~$345)가 더 안전한 선택입니다.',
    toc: [
      { label: '일본의 가격대별 GPU', anchor: '#gpus-by-price' },
      { label: '일본 구매 가이드', anchor: '#buying-guide' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    intro:
      '일본의 GPU 가격은 수입 비용과 10% 소비세로 인해 미국 가격보다 15-20% 높습니다. 중고 시장(Mercari, Yahoo Auctions, Janpara)을 이용하면 신품 대비 30-40%를 절약할 수 있습니다. 이 가이드는 2026년 8월 기준 실제 일본 거리 가격으로 구매할 가치 있는 GPU 4종을 정리합니다.',
    quickAnswerTop: {
      ko: {
        question: '일본에서 로컬 LLM용 가성비 최고의 GPU는 무엇입니까?',
        answer:
          'RTX 3060 12 GB (신품 ~$285, 중고 ~$170)는 일본에서 가성비 최고의 GPU입니다. 12 GB VRAM으로 추가 설정 없이 7B 모델을 20-25 tok/s로 실행할 수 있습니다.',
        bullets: [
          'RTX 3060 12 GB: 신품 ~$285 / 중고 ~$170 — 7B 모델 20-25 tok/s 최고 가성비',
          'RTX 4060 Ti 16 GB: 신품 ~$450 / 중고 ~$345 — 13B 모델 18-22 tok/s 지원',
          'RTX 3090 24 GB 중고 ~$820–1,130 — 채굴로 혹사된 30 시리즈가 대부분; 340W로 일본 원룸에서는 비추천(전기료 ~¥2,604/월), 직접 검수 가능한 경우에만',
          '더 안전한 가성비 선택: 신품 RTX 5060 Ti 16 GB(~$630) 또는 중고 RX 7800 XT(~$345) — 채굴 혹사 위험 회피',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최고 가성비: RTX 3060 12 GB 신품 ~$285 / 중고 ~$170 (2026년 8월) — 7B 모델 20-25 tok/s',
          '중급형: RTX 4060 Ti 16 GB 신품 ~$450 — 13B 모델 18-22 tok/s, 16 GB 여유',
          'AMD 대안: RX 7800 XT 16 GB ~$345 — 16 GB VRAM, Vulkan/ROCm, Linux에 최적',
          '주의: 중고 RTX 3090 24 GB(~$820–1,130)는 채굴로 혹사된 경우가 대부분; 신품 RTX 5060 Ti 16 GB(~$630)가 더 안전',
          '중고 구입처: Mercari (メルカリ), Yahoo Auctions (Yahoo!オークション), Janpara (じゃんぱら) — 아키하바라',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RTX 3060 12 GB (신품 ~$285)는 2026년 8월 기준 일본에서 로컬 LLM용 가격 대비 성능이 가장 뛰어난 GPU입니다.',
          },
          {
            type: 'plain-terms',
            text: '일본의 GPU 가격은 미국보다 15-20% 높습니다. RTX 3060 12 GB는 7B 모델을 20-25 tok/s로 실행하며, 아키하바라의 Tsukumo·Dospara 또는 Mercari에서 중고로 ~$170에 구입할 수 있습니다.',
          },
        ],
      },
      body1: {
        id: 'gpus-by-price',
        title: '일본의 가격대별 GPU',
        content: [
          '<strong>2026년 8월 기준으로 일본의 GPU 가격은 미국 동급 제품보다 15-20% 높습니다. 다음 4종의 카드는 중고 ~$170(RTX 3060 12 GB)부터 중고 ~$820–1,130(RTX 3090 24 GB)까지 로컬 LLM 추론을 위한 현실적인 모든 예산을 커버합니다. 가격은 일본 매장(Tsukumo, Dospara)에서 구입 시 기준의 달러 환산가입니다.</strong>',
          '다음 표는 신품 기준으로 Tsukumo, Dospara, Yodobashi의 2026년 8월 거리 가격을, 중고 기준으로 Mercari/Yahoo Auctions 중간값을 달러 환산으로 사용합니다. 가격은 변동될 수 있으니 구매 전 반드시 확인하십시오.',
        ],
        columns: ['GPU + VRAM', '신품 / 중고 가격 (USD)', '추천 용도'],
        rows: [
          {
            'GPU + VRAM': 'RTX 3060 12 GB',
            '신품 / 중고 가격 (USD)': '~$285 / ~$170',
            '추천 용도': '7B 모델, 입문용 최고 가성비',
          },
          {
            'GPU + VRAM': 'RTX 4060 Ti 16 GB',
            '신품 / 중고 가격 (USD)': '~$450 / ~$345',
            '추천 용도': '13B 모델, 중급형',
          },
          {
            'GPU + VRAM': 'RX 7800 XT 16 GB',
            '신품 / 중고 가격 (USD)': '~$440 / ~$345',
            '추천 용도': 'AMD/Vulkan/ROCm — Linux 사용자',
          },
          {
            'GPU + VRAM': 'RTX 5060 Ti 16 GB',
            '신품 / 중고 가격 (USD)': '~$630 / —',
            '추천 용도': '최신 16GB, 보증, 채굴 이력 위험 없음',
          },
          {
            'GPU + VRAM': 'RTX 3090 24 GB',
            '신품 / 중고 가격 (USD)': '— / ~$820–1,130',
            '추천 용도': '30B+ 모델 (주의: 채굴 혹사가 대부분; 340W, 원룸에서 발열 과다)',
          },
        ],
        callouts: [
          {
            type: 'verdict',
            text: 'RTX 3060 12 GB — 추천 대상: 첫 GPU 빌드, 7B 모델, 예산이 빠듯한 경우. 비추천: 13B 이상 모델이 필요한 경우.',
          },
          {
            type: 'verdict',
            text: 'RTX 4060 Ti 16 GB — 추천 대상: 13B 모델, 3060에서 업그레이드. 비추천: 예산이 부족하고 7B로 충분한 경우.',
          },
          {
            type: 'verdict',
            text: 'RX 7800 XT 16 GB — 추천 대상: AMD 선호, Linux에서 Vulkan/ROCm 사용자. 비추천: CUDA 생태계를 선호하는 경우.',
          },
          {
            type: 'verdict',
            text: 'RTX 5060 Ti 16 GB — 추천 대상: 채굴 시대 RTX 3090의 중고 리스크 없이, 보증이 있는 신품으로 12 GB 이상을 원하는 구매자. 비추천: RTX 3060 12 GB로 필요한 모델 크기가 충분하고 비용을 아끼고 싶은 경우.',
          },
          {
            type: 'warning',
            text: 'RTX 3090 24 GB — 2026년 8월 기준 중고 ~$820–1,130이지만, 대부분의 30 시리즈 카드(3080/3090)는 2021–22년 채굴 붐에서 24시간 가동되어 중고 재고는 도박에 가깝습니다. 또한 340W(¥31/kWh 기준 월 ~¥2,604 전기료)를 소비합니다. 카드를 직접 검수할 수 있고 전용 환기 공간이 있는 경우에만 구입하십시오 — 그렇지 않다면 신품 RTX 5060 Ti 16 GB(~$630)가 더 안전한 가성비 선택입니다.',
          },
        ],
        items: [
          'GPU 없이 일본에서 미니 PC로 추론하는 방법은 [일본 미니 PC 가이드](/ko/prompt-bites/best-mini-pc-local-llm-japan)를 참조하십시오.',
          '일본어 최적화 LLM 모델은 [일본어 LLM 모델 가이드](/ko/prompt-bites/best-japanese-language-models-local)를 참조하십시오.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '$170-285',
            label: 'Amazon.co.jp에서 RTX 3060 12 GB 가격 확인',
          },
          {
            url: 'https://www.tsukumo.co.jp/search/?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB',
            productCategory: 'gpu',
            priceRange: '$285',
            label: 'Tsukumo (ツクモ)에서 RTX 3060 12 GB 가격 확인',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '$345-630',
            label: 'Amazon.co.jp에서 RTX 4060 Ti 16 GB 가격 확인',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT 16 GB',
            productCategory: 'gpu',
            priceRange: '$345-440',
            label: 'Amazon.co.jp에서 RX 7800 XT 가격 확인',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16 GB',
            productCategory: 'gpu',
            priceRange: '$630',
            label: 'Amazon.co.jp에서 RTX 5060 Ti 16 GB 가격 확인',
          },
        ],
      },
      body2: {
        id: 'buying-guide',
        title: '일본 구매 가이드',
        content: [
          '<strong>일본에서는 GPU를 구입할 수 있는 두 가지 신뢰할 수 있는 채널이 있습니다: 공인 판매점(Amazon.co.jp, Tsukumo, Dospara, Yodobashi Camera)에서 신품 구입, 그리고 Mercari·Yahoo Auctions 또는 아키하바라의 Janpara에서 중고 구입입니다.</strong> 처음 구매하는 분께는 아키하바라가 결정적인 장점이 있습니다. 직접 카드를 확인하고 당일 가져갈 수 있습니다.',
          '일본의 신품 GPU 판매점 (2026년 8월 가격 기준): Amazon.co.jp는 전국 당일 배송이 가능합니다. Tsukumo (ツクモ) 아키하바라 1초메는 가장 넓은 재고를 보유합니다. Dospara (ドスパラ) 아키하바라는 NVIDIA 카드를 강점으로 합니다. Yodobashi Camera (ヨドバシカメラ) Multi Akiba는 모든 주요 브랜드를 취급합니다.',
          '중고 구입처: Mercari (メルカリ)와 Yahoo! Auctions (Yahoo!オークション)에서 가장 다양한 선택지와 최저가를 찾을 수 있습니다. 아키하바라의 Janpara (じゃんぱら)는 30일 반품이 가능한 신뢰할 수 있는 중고 전문점입니다. Mercari 구입 시: 보증 상태(保証)를 확인하고, 판매자에게 GPU가 채굴(マイニング)에 사용된 적 있는지 직접 문의하며, 실제 카드의 선명한 사진이 여러 장 있는 매물만 구입하십시오.',
          '예산별 의사결정 매트릭스(달러 환산): ~$170 미만 → Mercari의 RTX 3060 12 GB 중고. ~$170-285 → Tsukumo 또는 Dospara의 RTX 3060 12 GB 신품. ~$345-630 → RTX 4060 Ti 16 GB (중고) 또는 RX 7800 XT (신품). ~$450 초과 → RTX 5060 Ti 16 GB 신품 또는 RTX 3090 중고 (직접 검수 가능하며 전용 공간 및 충분한 환기가 있는 경우에만).',
          '일본 전기 요금 참고: 2026년 기준 평균 ¥31/kWh입니다. 하루 8시간 사용 시: RTX 3060 12 GB (170W)는 월 ~¥1,265. RTX 4060 Ti 16 GB (165W)는 월 ~¥1,229. RTX 3090 24 GB (350W)는 월 ~¥2,604입니다.',
          '<em>공지: 이 글에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 구매하시면 추가 비용 없이 수수료를 받을 수 있습니다.</em>',
        ],
        affiliateLinks: [
          {
            url: 'https://jp.mercari.com/search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (중고)',
            productCategory: 'gpu',
            priceRange: '$140-170',
            label: 'Mercari (メルカリ)에서 RTX 3060 12 GB 중고 검색',
          },
          {
            url: 'https://auctions.yahoo.co.jp/search/search?p=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (중고)',
            productCategory: 'gpu',
            priceRange: '$140-180',
            label: 'Yahoo Auctions (Yahoo!オークション)에서 RTX 3060 12 GB 검색',
          },
          {
            url: 'https://www.janpara.co.jp/sale/search/?KEYWORDS=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12 GB (중고)',
            productCategory: 'gpu',
            priceRange: '$170-205',
            label: 'Janpara (じゃんぱら)에서 RTX 3060 12 GB 검색',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문: 일본에서 로컬 LLM용 GPU 구매',
        faqs: [
          {
            q: '2026년 일본에서 로컬 LLM용으로 가성비(コスパ)가 가장 좋은 GPU는 무엇입니까?',
            a: '대부분의 사용자에게는 RTX 3060 12 GB(신품 ~$285, 중고 ~$170)가 가성비 최고입니다 — 12 GB VRAM으로 CUDA 설정 없이 모든 7B 모델을 20–25 tok/s로 실행합니다. 13B 모델이 필요하면 RTX 4060 Ti 16 GB(~$450)로 업그레이드하십시오. 중고 RTX 3090 24 GB(~$820–1,130)는 30B급 모델용 24 GB를 제공하지만, 대부분의 30 시리즈 카드는 2021–22년 채굴로 혹사되었고 340W를 소비합니다 — 따라서 카드를 직접 검수할 수 없다면 신품 RTX 5060 Ti 16 GB(~$630) 또는 중고 RX 7800 XT(~$345)가 더 안전한 선택입니다.',
          },
          {
            q: 'RTX 3060 12 GB와 8 GB 버전의 차이점은 무엇입니까?',
            a: '8 GB 버전도 Q4_K_M 양자화에서 대부분의 7B 모델을 문제없이 실행할 수 있습니다. 이 양자화에서 7B 모델에 필요한 VRAM은 약 4-5 GB로, 일반적인 컨텍스트 오버헤드를 더해도 8 GB 안에 들어갑니다. 실제 차이는 그보다 위에서 나타납니다. 12 GB 버전은 12B-14B 모델, 더 긴 컨텍스트 윈도, 7B에서의 고품질 Q5_K_M 또는 Q8 양자화까지 여유롭게 처리할 수 있는 반면, 8 GB 카드는 이 부분에서 여유가 덜합니다. 예산이 허락한다면 로컬 LLM용으로는 12 GB 버전이 더 미래 지향적인 선택이지만, 8 GB 버전이 쓸모없는 것은 아닙니다 — 더 큰 모델이나 더 긴 컨텍스트로 넘어갈 때 여유가 조금 더 일찍 바닥날 뿐입니다.',
          },
          {
            q: 'Ollama는 RX 7800 XT와 같은 AMD GPU에서 작동합니까?',
            a: '예. Ollama는 RX 7800 XT 및 기타 RDNA3 카드에 대해 Linux의 ROCm 및 Windows의 Vulkan을 통해 AMD GPU 가속을 지원합니다. ROCm이 설치된 Linux에서는 성능이 NVIDIA CUDA에 근접합니다. Windows에서는 Vulkan이 작동하지만 수동 설정 단계가 필요합니다.',
          },
          {
            q: 'Mercari (メルカリ)에서 구입할 때 무엇을 확인해야 합니까?',
            a: '매물에서 보증 상태(保証)를 확인하십시오. 이상적으로는 제조사 보증이 최소 1개월 이상 남아 있어야 합니다. 판매자에게 GPU가 채굴(マイニング)에 사용된 적 있는지 직접 문의하십시오. 판매자 평점이 95% 이상인지 확인하고, 실제 카드의 선명한 사진이 여러 장 있는 매물에서만 구입하십시오.',
          },
          {
            q: '일본에서 MacBook에 eGPU를 연결하여 로컬 추론을 사용할 수 있습니까?',
            a: '예. Thunderbolt 3 또는 4를 통해 가능합니다. RTX 3060 12 GB 또는 RTX 4060 Ti 16 GB가 장착된 eGPU는 내부 PCIe 연결 성능의 약 80% 수준으로 GPU 가속을 통해 Ollama 및 llama.cpp를 실행합니다. eGPU 인클로저는 Yodobashi Camera 및 Amazon.co.jp에서 구입할 수 있습니다.',
          },
          {
            q: '일본에서 GPU를 실행할 때 전기 요금은 얼마입니까?',
            a: '2026년 기준 일본의 평균 전기 요금은 약 ¥31/kWh입니다. 하루 4시간 사용 시: RTX 3060 12 GB (170W)는 월 ~¥632. RTX 4060 Ti 16 GB (165W)는 월 ~¥615. RTX 3090 24 GB (350W)는 월 ~¥1,302입니다.',
          },
        ],
      },
    },
  },
}
