// Slug: olares-one-local-ai-review
import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-en.webp",
    "affiliateDisclosure": true,
    "title": "Olares One Review: Compact RTX 5090 Mobile AI Desktop for Local LLMs",
    "seoTitle": "Olares One Review: RTX 5090 Mobile AI Box, $4,999",
    "intro": "The Olares One is a compact desktop AI computer (3.5 L by Olares' own figure) built around a laptop-class NVIDIA RTX 5090 Mobile with 24 GB GDDR7, an Intel Core Ultra 9 275HX, 96 GB DDR5-5600 (upgradable to 128 GB according to Olares) and a 2 TB NVMe SSD, running Olares OS. Olares lists it at $4,999 in its official shop (checked 2026-10-31). This page collects the manufacturer-published specifications, the figures Olares sent us by email — labelled as vendor claims and checked against Olares' own product page — and a PromptQuorum reading of what the box can and cannot do. PromptQuorum has not tested a unit, has no affiliate agreement with Olares and earns nothing from this page.",
    "metaDescription": "Olares One review: RTX 5090 Mobile 24 GB, 96 GB DDR5, $4,999 official price. Specs, vendor claims checked against Olares' own page, and no affiliate links.",
    "twitterDescription": "Olares One: RTX 5090 Mobile (24 GB), Core Ultra 9 275HX, 96 GB DDR5, $4,999 official shop price. Specs, vendor-claim check and an independent, non-affiliate verdict.",
    "readTime": "8 min read",
    "educationalLevel": "Intermediate",
    "audience": "Buyers weighing a compact, ready-made local-AI desktop for 30B-class and partially offloaded 70B models",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**The Olares One is a compact AI desktop with an RTX 5090 Mobile (24 GB GDDR7), 96 GB DDR5 and a 2 TB SSD; the official Olares shop lists it at $4,999 (checked 2026-10-31).** PromptQuorum's reading of the published specs: mid-size models (about 30B-class at 4-bit) fit in VRAM, while 70B models run only with partial offload to system RAM. Olares emailed us faster 70B figures and a lower noise number; neither appears on its product page, so we show them as unverified vendor claims. This is not an affiliate page — PromptQuorum has no agreement with Olares and earns no commission. → [Olares One product page](https://www.olares.com/one)",
    "quickAnswerTop": {
      "en": {
        "question": "Is the Olares One a good local-AI desktop?",
        "answer": "It is a strong, ready-made box if you want 24 GB of fast GDDR7 VRAM in a small quiet chassis and prefer a packaged OS over assembling a PC. For 70B models, the 24 GB of VRAM is the limit: part of the model sits in system RAM, so speed drops sharply. Olares' own page publishes no tokens-per-second figures.",
        "bullets": [
          "GPU: NVIDIA RTX 5090 Mobile, 24 GB GDDR7, 175 W maximum TGP (Olares)",
          "CPU and RAM: Intel Core Ultra 9 275HX, 96 GB (2×48 GB) DDR5-5600, upgradable to 128 GB (Olares)",
          "Storage and ports: 2 TB NVMe, second SSD slot, Thunderbolt 5, 2.5 GbE, Wi-Fi 7, HDMI 2.1",
          "Official shop price $4,999; Olares also quoted $4,959 and a Black Friday $300 reduction by email (vendor claims)",
          "PromptQuorum has no affiliate agreement with Olares and earns nothing from this page"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Buy If / Skip If",
        "anchor": "buy-skip-if"
      },
      {
        "label": "TL;DR",
        "anchor": "tldr"
      },
      {
        "label": "Verdict",
        "anchor": "verdict"
      },
      {
        "label": "No Affiliate, No Commission",
        "anchor": "no-affiliate"
      },
      {
        "label": "Specifications",
        "anchor": "specs"
      },
      {
        "label": "Vendor Claims Checked",
        "anchor": "vendor-claims"
      },
      {
        "label": "Where to Buy & Current Price",
        "anchor": "where-to-buy"
      },
      {
        "label": "Alternatives",
        "anchor": "alternatives"
      },
      {
        "label": "How We Evaluate",
        "anchor": "methodology"
      },
      {
        "label": "FAQ",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "The Olares One is a compact desktop AI computer with an RTX 5090 Mobile (24 GB GDDR7), 96 GB DDR5 and Olares OS, listed at $4,999 in the official Olares shop."
      },
      {
        "type": "plain-terms",
        "content": "It is a small, quiet PC sold ready to run local AI models. Its graphics card has 24 GB of fast memory; models bigger than that spill into the slower main memory and run much slower. We have not tested it, and we earn nothing if you buy it."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "Buy If / Skip If",
        "highlight": true,
        "content": "Quick decision guide — does the Olares One fit your needs? PromptQuorum's reading of the published specifications, not a hands-on test.",
        "items": [
          "**Buy the Olares One if:**",
          "You want 24 GB of GDDR7 VRAM in a small desktop (320 × 197 × 55 mm, 2.15 kg) instead of building a tower",
          "You want a packaged local-AI operating system (Olares OS) rather than assembling drivers and runtimes yourself",
          "You mainly run models up to roughly 30B at 4-bit, where everything fits in VRAM",
          "You value low idle noise (Olares publishes 19 dB at idle)",
          "**Skip the Olares One if:**",
          "Your main goal is fast 70B inference — 24 GB of VRAM forces partial offload to system RAM",
          "You want the lowest price per GB of VRAM — a used desktop GPU usually costs far less, at the price of size and noise",
          "You need independently measured benchmarks before buying — Olares' page publishes none, and we have not tested a unit"
        ],
        "affiliateLinks": [
          {
            "label": "Olares One product page →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "TL;DR",
        "isTldr": true,
        "items": [
          "Olares One: Intel Core Ultra 9 275HX, RTX 5090 Mobile with 24 GB GDDR7, 96 GB DDR5-5600 (upgradable to 128 GB), 2 TB NVMe — specifications from olares.com/one, checked 2026-10-31",
          "Official shop price $4,999 (single configuration, shop.olares.com, checked 2026-10-31)",
          "Olares emailed us a $4,959 quote and a Black Friday reduction of $300 per unit (2026-11-17 to 2026-12-03, GMT-8) — vendor claims, see Where to Buy",
          "Olares also emailed 18–22 tokens/s for Llama 3 70B (Q4_K_M) and under 32 dB at full load — neither figure is on its product page, and we could not verify either",
          "PromptQuorum estimate: 70B Q4_K_M needs partial offload on 24 GB of VRAM, so a few tokens per second is more realistic than 18–22 (see the 70B guide)",
          "This is not an affiliate page: PromptQuorum has no agreement with Olares, adds no affiliate tags and earns no commission"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "**The Olares One is a well-specified, compact box for people who want a ready-made local-AI desktop and accept a $4,999 price.** Its 24 GB of GDDR7 VRAM suits mid-size models and fast prompt processing; its 96 GB of DDR5 adds capacity for 70B models, but capacity is not speed — layers held in system RAM run at DDR5 bandwidth. The strongest case for it is convenience and size, not price per GB of VRAM. We have not tested a unit, so treat this as a reading of published specifications, and treat any benchmark figure — Olares' or ours — as unverified until an independent test confirms it."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "No Affiliate, No Commission",
        "highlight": true,
        "content": "**This is not an affiliate page.** PromptQuorum has no affiliate agreement with Olares, receives no commission, fee or payment for this page, and adds no affiliate parameters to any link. The Olares One page was written after Olares contacted us with product information; Olares itself calls its price offer a \"partner quote\", but that is Olares' wording and does not describe a partnership with PromptQuorum.",
        "items": [
          "Links to olares.com and shop.olares.com are plain reference links that earn PromptQuorum nothing, whether or not you buy",
          "Figures sent to us by Olares are labelled as vendor claims wherever they appear",
          "Where a vendor claim conflicts with Olares' own product page, we show both and say which one is published"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Olares One Specifications",
        "content": "**Manufacturer-published specifications, taken from olares.com/one on 2026-10-31.** Olares publishes no retail price on that page; the price comes from the official shop.",
        "columns": [
          "Component",
          "Specification (Olares)"
        ],
        "rows": [
          {
            "Component": "CPU",
            "Specification (Olares)": "Intel Core Ultra 9 275HX, 24 cores, up to 5.4 GHz, 36 MB cache"
          },
          {
            "Component": "GPU",
            "Specification (Olares)": "NVIDIA GeForce RTX 5090 Mobile, 24 GB GDDR7, 175 W max TGP"
          },
          {
            "Component": "Memory",
            "Specification (Olares)": "96 GB (2×48 GB) DDR5-5600, upgradable to 128 GB"
          },
          {
            "Component": "Storage",
            "Specification (Olares)": "2 TB NVMe SSD (PCIe 4.0), second PCIe SSD slot"
          },
          {
            "Component": "Ports",
            "Specification (Olares)": "1× Thunderbolt 5, 1× 2.5 GbE RJ45, 1× USB-A 3.2 Gen2, 1× HDMI 2.1"
          },
          {
            "Component": "Wireless",
            "Specification (Olares)": "Wi-Fi 7, Bluetooth 5.4"
          },
          {
            "Component": "Size and weight",
            "Specification (Olares)": "320 × 197 × 55 mm (about 3.5 L), 2.15 kg (3.1 kg with power supply)"
          },
          {
            "Component": "Noise (Olares lab figure)",
            "Specification (Olares)": "19 dB idle; 38.8 dB at full power (GPU 175 W + CPU 55 W), measured at 25 °C and 0.5 m"
          },
          {
            "Component": "Power",
            "Specification (Olares)": "330 W power supply; 30 W standby; GPU 95 W in Silent Mode, 175 W in Performance Mode"
          },
          {
            "Component": "Software",
            "Specification (Olares)": "Olares OS (described by Olares as open source), free system updates"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "Vendor Claims Checked",
        "content": "**Olares sent us these figures by email on 2026-10-31. PromptQuorum has not reproduced any of them.** The table sets each claim against what Olares publishes on its own product page and against PromptQuorum's estimate.",
        "columns": [
          "Vendor claim (email)",
          "Olares product page",
          "PromptQuorum status"
        ],
        "rows": [
          {
            "Vendor claim (email)": "Llama 3 70B (Q4_K_M): about 18–22 tokens/s sustained",
            "Olares product page": "No tokens-per-second figure published",
            "PromptQuorum status": "Unverified. A Q4_K_M 70B model is larger than 24 GB of VRAM, so part runs from DDR5 system RAM; our estimate in the 70B guide is about 2–4 tokens/s"
          },
          {
            "Vendor claim (email)": "\"96 GB unified memory\" with the RTX 5090M",
            "Olares product page": "96 GB DDR5 system RAM plus separate 24 GB GDDR7 VRAM",
            "PromptQuorum status": "The product page describes separate memory pools, not unified memory"
          },
          {
            "Vendor claim (email)": "Under 32 dB at full continuous load",
            "Olares product page": "19 dB idle, 38.8 dB at full power, under 39 dB at maximum load (25 °C, 0.5 m)",
            "PromptQuorum status": "Conflicts with the published figure; we use the product page number"
          },
          {
            "Vendor claim (email)": "deepseek-v4.1-flash-10.17 multi-unit deployment at sub-millisecond local latency",
            "Olares product page": "No such model or latency figure published",
            "PromptQuorum status": "Unverified: we could not identify the model name, and sub-millisecond latency is not a meaningful figure for text generation"
          },
          {
            "Vendor claim (email)": "$4,959 \"partner quote\" ($40 off $4,999)",
            "Olares product page": "Not listed; shop price $4,999",
            "PromptQuorum status": "The offer link Olares supplied lists $4,949 and is titled for another audience, so we do not link it (checked 2026-10-31)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "Where to Buy & Current Price",
        "content": "**Prices and promotions change — check the live shop page.** Price checked: 2026-10-31 on shop.olares.com (single configuration).",
        "columns": [
          "Signal",
          "Guidance"
        ],
        "rows": [
          {
            "Signal": "Official shop price",
            "Guidance": "$4,999 USD (shop.olares.com, checked 2026-10-31)"
          },
          {
            "Signal": "Olares email quote",
            "Guidance": "$4,959 USD, $40 off, shipping in about 2 business days from US and EU warehouses (vendor claim, not verified by PromptQuorum)"
          },
          {
            "Signal": "Olares Black Friday event",
            "Guidance": "2026-11-17 00:00 to 2026-12-03 00:00 (GMT-8), an extra $300 USD off each unit (vendor claim); order through the shop or email Olares and reference \"PromptQuorum Partner Quote\" for early allocation and multi-unit bundles"
          },
          {
            "Signal": "Third-party retailers",
            "Guidance": "Not checked"
          }
        ],
        "items": [
          "PromptQuorum earns nothing from any purchase: the links on this page are plain reference links and carry no affiliate tag.",
          "Confirm the final price, shipping, import duties and warranty terms on the shop page before ordering — the Olares product page links to shipping and warranty policies but does not state them."
        ],
        "affiliateLinks": [
          {
            "label": "Olares shop page →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "Alternatives to Consider",
        "content": "**The right alternative depends on whether you value size, VRAM per dollar or memory capacity.**",
        "items": [
          "**Want the most VRAM per dollar and accept a tower →** a desktop GPU build; see the [GPU buying guide](/power-local-llm/best-gpu-buying-guide-local-llm-2026) and the [workstation build guide](/power-local-llm/local-ai-workstation-build-guide).",
          "**Want large models in one memory pool →** an Apple Silicon Mac with large unified memory; see [best Mac for local AI](/power-local-llm/best-mac-for-local-ai-2026).",
          "**Want a smaller, cheaper box for light models →** a Ryzen or Intel mini PC; see [ASUS mini PCs for local AI](/power-local-llm/asus-mini-pc-local-ai) and the [mini PC roundup for Home Assistant](/smart-home/best-mini-pc-home-assistant-local-ai).",
          "**Wondering what fits on 24 GB →** the [70B models on consumer hardware guide](/local-llms/70b-models-consumer-hardware), which includes the Olares One."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "How We Evaluate",
        "content": "**PromptQuorum has not tested an Olares One.** This page separates three kinds of information so you can see what is confirmed.",
        "items": [
          "**Manufacturer-published:** specifications and noise figures from olares.com/one, and the price from the official shop (both checked 2026-10-31).",
          "**Vendor claims:** figures Olares sent us by email — shown as claims, never as results.",
          "**PromptQuorum estimate:** model-fit and speed reasoning from VRAM size and memory bandwidth, not a measurement."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Frequently Asked Questions",
        "faqs": [
          {
            "q": "What is the Olares One?",
            "a": "A compact desktop AI computer from Olares with an Intel Core Ultra 9 275HX, an RTX 5090 Mobile with 24 GB GDDR7, 96 GB DDR5-5600 and a 2 TB NVMe SSD, running Olares OS."
          },
          {
            "q": "How much does the Olares One cost?",
            "a": "The official Olares shop lists $4,999 USD for its single configuration (checked 2026-10-31). Olares also quoted $4,959 and a Black Friday reduction of $300 by email; PromptQuorum has not verified those offers."
          },
          {
            "q": "Can the Olares One run 70B models?",
            "a": "Yes, with partial offload. A Q4_K_M 70B model is larger than the 24 GB of VRAM, so part of it runs from DDR5 system RAM. PromptQuorum's estimate is about 2–4 tokens/s; Olares emailed 18–22 tokens/s, which is not published on its product page and which we could not verify."
          },
          {
            "q": "How loud is the Olares One?",
            "a": "Olares publishes 19 dB at idle and 38.8 dB at full power, measured at 25 °C and 0.5 m. An email from Olares quoted under 32 dB at full load, which conflicts with the product page."
          },
          {
            "q": "Is this an affiliate page?",
            "a": "No. PromptQuorum has no affiliate agreement with Olares, adds no affiliate parameters to links and earns no commission or fee from this page."
          },
          {
            "q": "Did PromptQuorum test the Olares One?",
            "a": "No. This page uses manufacturer-published specifications, clearly labelled vendor claims and PromptQuorum estimates."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Related Reading",
        "items": [
          "[70B Models on Consumer Hardware](/local-llms/70b-models-consumer-hardware) — where the Olares One appears in the VRAM comparison",
          "[ASUS Mini PC for Local AI](/power-local-llm/asus-mini-pc-local-ai) — smaller mini PC alternatives",
          "[Best GPU Buying Guide for Local LLMs](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM per dollar",
          "[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — the budget end of mini PCs"
        ]
      }
    }
  },
  ar: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-ar.webp",
    "affiliateDisclosure": true,
    "title": "مراجعة Olares One: حاسوب مكتبي مدمج للذكاء الاصطناعي ببطاقة RTX 5090 Mobile لتشغيل النماذج اللغوية محليًا",
    "seoTitle": "مراجعة Olares One: جهاز ذكاء اصطناعي ببطاقة RTX 5090 Mobile، $4,999",
    "intro": "جهاز Olares One حاسوب مكتبي مدمج للذكاء الاصطناعي (بحجم 3.5 L بحسب أرقام Olares نفسها) مبني حول بطاقة NVIDIA RTX 5090 Mobile من فئة الحواسيب المحمولة بذاكرة 24 GB GDDR7، ومعالج Intel Core Ultra 9 275HX، وذاكرة 96 GB DDR5-5600 (قابلة للترقية إلى 128 GB بحسب Olares) ووحدة تخزين 2 TB NVMe SSD، ويعمل بنظام Olares OS. تعرضه Olares بسعر $4,999 في متجرها الرسمي (تم التحقق في 2026-10-31). تجمع هذه الصفحة المواصفات التي نشرتها الشركة المصنّعة، والأرقام التي أرسلتها لنا Olares عبر البريد الإلكتروني — وهي موسومة بأنها ادعاءات من الشركة المصنّعة (vendor claims) ومقارنة بصفحة المنتج الرسمية لدى Olares — إضافةً إلى قراءة من PromptQuorum لما يستطيع الجهاز فعله وما لا يستطيعه. لم تختبر PromptQuorum أي وحدة من الجهاز، ولا تربطها اتفاقية تسويق بالعمولة مع Olares، ولا تكسب شيئًا من هذه الصفحة.",
    "metaDescription": "مراجعة Olares One: بطاقة RTX 5090 Mobile بذاكرة 24 GB، وذاكرة 96 GB DDR5، والسعر الرسمي $4,999. المواصفات وادعاءات الشركة المصنّعة مقارنةً بصفحة Olares الرسمية، ودون روابط تسويق بالعمولة.",
    "twitterDescription": "Olares One: بطاقة RTX 5090 Mobile (24 GB)، ومعالج Core Ultra 9 275HX، وذاكرة 96 GB DDR5، وسعر المتجر الرسمي $4,999. المواصفات، والتحقق من ادعاءات الشركة المصنّعة، وحكم مستقل بلا عمولات.",
    "readTime": "8 دقائق للقراءة",
    "educationalLevel": "Intermediate",
    "audience": "المشترون الذين يقارنون بين حاسوب مكتبي مدمج وجاهز للذكاء الاصطناعي المحلي لتشغيل نماذج من فئة 30B ونماذج 70B بتفريغ جزئي إلى الذاكرة",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**Olares One حاسوب مكتبي مدمج للذكاء الاصطناعي ببطاقة RTX 5090 Mobile (بذاكرة 24 GB GDDR7) وذاكرة 96 GB DDR5 ووحدة تخزين SSD سعتها 2 TB؛ ويُدرجه متجر Olares الرسمي بسعر $4,999 (تم التحقق في 2026-10-31).** قراءة PromptQuorum للمواصفات المنشورة: النماذج متوسطة الحجم (نحو فئة 30B بدقة 4 بت) تتسع في ذاكرة VRAM، أما نماذج 70B فلا تعمل إلا بتفريغ جزئي إلى ذاكرة النظام RAM. أرسلت لنا Olares بالبريد أرقامًا أسرع لنماذج 70B ورقم ضجيج أقل؛ ولا يظهر أيٌّ منهما في صفحة المنتج، لذلك نعرضهما بوصفهما ادعاءات غير مُتحقَّق منها من الشركة المصنّعة. هذه ليست صفحة تسويق بالعمولة — لا تربط PromptQuorum أي اتفاقية بـ Olares ولا تتقاضى أي عمولة. ← [صفحة منتج Olares One](https://www.olares.com/one)",
    "quickAnswerTop": {
      "ar": {
        "question": "هل Olares One حاسوب مكتبي جيد للذكاء الاصطناعي المحلي؟",
        "answer": "إنه جهاز جاهز قوي إذا كنت تريد 24 GB من ذاكرة VRAM السريعة من نوع GDDR7 في هيكل صغير وهادئ وتفضّل نظام تشغيل مُعدًّا مسبقًا على تجميع حاسوب بنفسك. أما مع نماذج 70B فتشكّل سعة 24 GB من VRAM الحدّ الفاصل: يبقى جزء من النموذج في ذاكرة النظام فتنخفض السرعة بشدة. ولا تنشر صفحة Olares نفسها أي أرقام لعدد الرموز في الثانية (tokens/s).",
        "bullets": [
          "وحدة المعالجة الرسومية: NVIDIA RTX 5090 Mobile، بذاكرة 24 GB GDDR7، وحد أقصى لقدرة TGP يبلغ 175 W (بحسب Olares)",
          "المعالج والذاكرة: Intel Core Ultra 9 275HX، وذاكرة 96 GB (2×48 GB) من نوع DDR5-5600، قابلة للترقية إلى 128 GB (بحسب Olares)",
          "التخزين والمنافذ: 2 TB NVMe، وفتحة SSD ثانية، وThunderbolt 5، وشبكة 2.5 GbE، وWi-Fi 7، وHDMI 2.1",
          "سعر المتجر الرسمي $4,999؛ وذكرت Olares بالبريد أيضًا سعر $4,959 وخصمًا قدره $300 في الجمعة السوداء (ادعاءات من الشركة المصنّعة)",
          "لا تربط PromptQuorum أي اتفاقية تسويق بالعمولة مع Olares ولا تكسب شيئًا من هذه الصفحة"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "اشترِه إذا / تجاوزه إذا",
        "anchor": "buy-skip-if"
      },
      {
        "label": "الخلاصة السريعة",
        "anchor": "tldr"
      },
      {
        "label": "الحكم",
        "anchor": "verdict"
      },
      {
        "label": "بلا تسويق بالعمولة وبلا عمولات",
        "anchor": "no-affiliate"
      },
      {
        "label": "المواصفات",
        "anchor": "specs"
      },
      {
        "label": "التحقق من ادعاءات الشركة المصنّعة",
        "anchor": "vendor-claims"
      },
      {
        "label": "أين تشتري والسعر الحالي",
        "anchor": "where-to-buy"
      },
      {
        "label": "البدائل",
        "anchor": "alternatives"
      },
      {
        "label": "كيف نقيّم",
        "anchor": "methodology"
      },
      {
        "label": "الأسئلة الشائعة",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "Olares One حاسوب مكتبي مدمج للذكاء الاصطناعي ببطاقة RTX 5090 Mobile (بذاكرة 24 GB GDDR7) وذاكرة 96 GB DDR5 ونظام Olares OS، ويُدرج بسعر $4,999 في متجر Olares الرسمي."
      },
      {
        "type": "plain-terms",
        "content": "إنه حاسوب صغير وهادئ يُباع جاهزًا لتشغيل نماذج الذكاء الاصطناعي محليًا. تحتوي بطاقته الرسومية على 24 GB من الذاكرة السريعة؛ أما النماذج الأكبر من ذلك فتنتقل إلى الذاكرة الرئيسية الأبطأ وتعمل بسرعة أقل بكثير. لم نختبر الجهاز، ولا نكسب شيئًا إذا اشتريته."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "اشترِه إذا / تجاوزه إذا",
        "highlight": true,
        "content": "دليل قرار سريع — هل يناسب Olares One احتياجاتك؟ هذه قراءة PromptQuorum للمواصفات المنشورة، وليست اختبارًا عمليًا.",
        "items": [
          "**اشترِ Olares One إذا:**",
          "كنت تريد 24 GB من ذاكرة VRAM من نوع GDDR7 في حاسوب مكتبي صغير (320 × 197 × 55 mm، 2.15 kg) بدلًا من تجميع برج كامل",
          "كنت تريد نظام تشغيل مُعدًّا للذكاء الاصطناعي المحلي (Olares OS) بدلًا من تجميع برامج التشغيل وبيئات التشغيل بنفسك",
          "كنت تشغّل غالبًا نماذج حتى نحو 30B بدقة 4 بت، حيث يتسع كل شيء في ذاكرة VRAM",
          "كنت تقدّر انخفاض الضجيج في وضع الخمول (تنشر Olares رقم 19 dB في الخمول)",
          "**تجاوز Olares One إذا:**",
          "كان هدفك الرئيسي استدلالًا سريعًا لنماذج 70B — فسعة 24 GB من VRAM تفرض تفريغًا جزئيًا إلى ذاكرة النظام",
          "كنت تريد أقل سعر لكل GB من VRAM — فبطاقة رسومية مكتبية مستعملة تكلّف عادةً أقل بكثير، مقابل الحجم والضجيج",
          "كنت تحتاج إلى اختبارات أداء مقيسة بشكل مستقل قبل الشراء — فصفحة Olares لا تنشر أيًّا منها، ونحن لم نختبر أي وحدة"
        ],
        "affiliateLinks": [
          {
            "label": "صفحة منتج Olares One ←",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "الخلاصة (TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One: معالج Intel Core Ultra 9 275HX، وبطاقة RTX 5090 Mobile بذاكرة 24 GB GDDR7، وذاكرة 96 GB DDR5-5600 (قابلة للترقية إلى 128 GB)، وتخزين 2 TB NVMe — المواصفات من olares.com/one، تم التحقق في 2026-10-31",
          "سعر المتجر الرسمي $4,999 (تهيئة واحدة، shop.olares.com، تم التحقق في 2026-10-31)",
          "أرسلت لنا Olares بالبريد عرض سعر $4,959 وخصم الجمعة السوداء بمقدار $300 للوحدة (من 2026-11-17 إلى 2026-12-03، بتوقيت GMT-8) — ادعاءات من الشركة المصنّعة، راجع قسم «أين تشتري»",
          "أرسلت لنا Olares أيضًا 18–22 tokens/s لنموذج Llama 3 70B (Q4_K_M) وأقل من 32 dB عند الحمل الكامل — ولا يظهر أي من الرقمين في صفحة منتجها، ولم نتمكن من التحقق من أيٍّ منهما",
          "تقدير PromptQuorum: نموذج 70B بصيغة Q4_K_M يحتاج إلى تفريغ جزئي على 24 GB من VRAM، لذا فإن بضعة رموز في الثانية أقرب إلى الواقع من 18–22 (راجع دليل 70B)",
          "هذه ليست صفحة تسويق بالعمولة: لا تربط PromptQuorum أي اتفاقية بـ Olares، ولا تضيف أي وسوم تسويق بالعمولة، ولا تتقاضى أي عمولة"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "الحكم",
        "content": "**Olares One جهاز مدمج جيد المواصفات لمن يريد حاسوبًا مكتبيًا جاهزًا للذكاء الاصطناعي المحلي ويقبل سعر $4,999.** تناسب ذاكرته البالغة 24 GB من VRAM نوع GDDR7 النماذج متوسطة الحجم والمعالجة السريعة للمطالبات؛ وتضيف ذاكرة DDR5 البالغة 96 GB سعةً لنماذج 70B، لكن السعة ليست سرعة — فالطبقات المحفوظة في ذاكرة النظام تعمل بنطاق ترددي يعادل DDR5. أقوى حجة لصالحه هي سهولة الاستخدام وصغر الحجم، لا السعر لكل GB من VRAM. لم نختبر أي وحدة، لذا تعامل مع هذه الصفحة بوصفها قراءة للمواصفات المنشورة، وتعامل مع أي رقم أداء — سواء من Olares أو منا — على أنه غير مُتحقَّق منه حتى يؤكده اختبار مستقل."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "بلا تسويق بالعمولة وبلا عمولات",
        "highlight": true,
        "content": "**هذه ليست صفحة تسويق بالعمولة.** لا تربط PromptQuorum أي اتفاقية تسويق بالعمولة مع Olares، ولا تتلقى أي عمولة أو رسوم أو مدفوعات مقابل هذه الصفحة، ولا تضيف أي معاملات تسويق بالعمولة إلى أي رابط. كُتبت صفحة Olares One بعد أن تواصلت معنا Olares بمعلومات عن المنتج؛ وتصف Olares نفسها عرض السعر بأنه «partner quote»، لكن هذه صياغة Olares ولا تصف شراكة مع PromptQuorum.",
        "items": [
          "الروابط إلى olares.com وshop.olares.com روابط مرجعية عادية لا تكسب PromptQuorum منها شيئًا، سواء اشتريت أم لا",
          "الأرقام التي أرسلتها لنا Olares موسومة بأنها ادعاءات من الشركة المصنّعة في كل موضع تظهر فيه",
          "حين يتعارض ادعاء من الشركة المصنّعة مع صفحة منتج Olares نفسها، نعرض الاثنين ونوضح أيهما المنشور"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "مواصفات Olares One",
        "content": "**مواصفات نشرتها الشركة المصنّعة، مأخوذة من olares.com/one بتاريخ 2026-10-31.** لا تنشر Olares سعر بيع بالتجزئة في تلك الصفحة؛ والسعر مأخوذ من المتجر الرسمي.",
        "columns": [
          "المكوّن",
          "المواصفة (Olares)"
        ],
        "rows": [
          {
            "المكوّن": "المعالج",
            "المواصفة (Olares)": "Intel Core Ultra 9 275HX، 24 نواة، حتى 5.4 GHz، ذاكرة تخزين مؤقت 36 MB"
          },
          {
            "المكوّن": "وحدة المعالجة الرسومية",
            "المواصفة (Olares)": "NVIDIA GeForce RTX 5090 Mobile، ذاكرة 24 GB GDDR7، حد أقصى لقدرة TGP يبلغ 175 W"
          },
          {
            "المكوّن": "الذاكرة",
            "المواصفة (Olares)": "96 GB (2×48 GB) DDR5-5600، قابلة للترقية إلى 128 GB"
          },
          {
            "المكوّن": "التخزين",
            "المواصفة (Olares)": "2 TB NVMe SSD (PCIe 4.0)، وفتحة PCIe SSD ثانية"
          },
          {
            "المكوّن": "المنافذ",
            "المواصفة (Olares)": "1× Thunderbolt 5، 1× 2.5 GbE RJ45، 1× USB-A 3.2 Gen2، 1× HDMI 2.1"
          },
          {
            "المكوّن": "الاتصال اللاسلكي",
            "المواصفة (Olares)": "Wi-Fi 7، Bluetooth 5.4"
          },
          {
            "المكوّن": "الحجم والوزن",
            "المواصفة (Olares)": "320 × 197 × 55 mm (نحو 3.5 L)، 2.15 kg (3.1 kg مع مزوّد الطاقة)"
          },
          {
            "المكوّن": "الضجيج (رقم مختبر Olares)",
            "المواصفة (Olares)": "19 dB في الخمول؛ 38.8 dB عند القدرة الكاملة (GPU 175 W + CPU 55 W)، مقيسة عند 25 °C وعلى بُعد 0.5 m"
          },
          {
            "المكوّن": "الطاقة",
            "المواصفة (Olares)": "مزوّد طاقة 330 W؛ 30 W في وضع الاستعداد؛ GPU 95 W في الوضع الصامت (Silent Mode)، 175 W في وضع الأداء (Performance Mode)"
          },
          {
            "المكوّن": "البرمجيات",
            "المواصفة (Olares)": "Olares OS (تصفه Olares بأنه مفتوح المصدر)، مع تحديثات نظام مجانية"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "التحقق من ادعاءات الشركة المصنّعة",
        "content": "**أرسلت لنا Olares هذه الأرقام بالبريد الإلكتروني في 2026-10-31. ولم تعِد PromptQuorum إنتاج أيٍّ منها.** يقابل الجدول كل ادعاء بما تنشره Olares في صفحة منتجها وبتقدير PromptQuorum.",
        "columns": [
          "ادعاء الشركة المصنّعة (بالبريد)",
          "صفحة منتج Olares",
          "حالة PromptQuorum"
        ],
        "rows": [
          {
            "ادعاء الشركة المصنّعة (بالبريد)": "Llama 3 70B (Q4_K_M): نحو 18–22 tokens/s بشكل مستدام",
            "صفحة منتج Olares": "لا يوجد رقم منشور لعدد الرموز في الثانية",
            "حالة PromptQuorum": "غير مُتحقَّق منه. نموذج 70B بصيغة Q4_K_M أكبر من 24 GB من VRAM، لذا يعمل جزء منه من ذاكرة النظام DDR5؛ وتقديرنا في دليل 70B نحو 2–4 tokens/s"
          },
          {
            "ادعاء الشركة المصنّعة (بالبريد)": "«96 GB unified memory» مع RTX 5090M",
            "صفحة منتج Olares": "ذاكرة نظام 96 GB DDR5 بالإضافة إلى 24 GB GDDR7 VRAM منفصلة",
            "حالة PromptQuorum": "تصف صفحة المنتج مجمّعَي ذاكرة منفصلين، لا ذاكرة موحّدة"
          },
          {
            "ادعاء الشركة المصنّعة (بالبريد)": "أقل من 32 dB عند الحمل المستمر الكامل",
            "صفحة منتج Olares": "19 dB في الخمول، 38.8 dB عند القدرة الكاملة، أقل من 39 dB عند الحمل الأقصى (25 °C، 0.5 m)",
            "حالة PromptQuorum": "يتعارض مع الرقم المنشور؛ نعتمد رقم صفحة المنتج"
          },
          {
            "ادعاء الشركة المصنّعة (بالبريد)": "نشر متعدد الوحدات لـ deepseek-v4.1-flash-10.17 بزمن استجابة محلي أقل من ميلي ثانية",
            "صفحة منتج Olares": "لا يوجد نموذج كهذا ولا رقم لزمن الاستجابة منشور",
            "حالة PromptQuorum": "غير مُتحقَّق منه: لم نتمكن من تحديد اسم النموذج، كما أن زمن استجابة أقل من ميلي ثانية ليس رقمًا ذا معنى لتوليد النصوص"
          },
          {
            "ادعاء الشركة المصنّعة (بالبريد)": "عرض «partner quote» بسعر $4,959 (خصم $40 من $4,999)",
            "صفحة منتج Olares": "غير مُدرج؛ سعر المتجر $4,999",
            "حالة PromptQuorum": "يعرض رابط العرض الذي زوّدتنا به Olares سعر $4,949 وعنوانه موجّه إلى جمهور آخر، لذلك لا نضع رابطه (تم التحقق في 2026-10-31)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "أين تشتري والسعر الحالي",
        "content": "**الأسعار والعروض تتغير — راجع صفحة المتجر المباشرة.** تاريخ التحقق من السعر: 2026-10-31 على shop.olares.com (تهيئة واحدة).",
        "columns": [
          "المؤشر",
          "الإرشاد"
        ],
        "rows": [
          {
            "المؤشر": "سعر المتجر الرسمي",
            "الإرشاد": "$4,999 USD (shop.olares.com، تم التحقق في 2026-10-31)"
          },
          {
            "المؤشر": "عرض Olares بالبريد",
            "الإرشاد": "$4,959 USD، بخصم $40، مع شحن خلال نحو يومي عمل من مستودعات الولايات المتحدة والاتحاد الأوروبي (ادعاء من الشركة المصنّعة، لم تتحقق منه PromptQuorum)"
          },
          {
            "المؤشر": "فعالية الجمعة السوداء لدى Olares",
            "الإرشاد": "من 2026-11-17 00:00 إلى 2026-12-03 00:00 (GMT-8)، بخصم إضافي قدره $300 USD عن كل وحدة (ادعاء من الشركة المصنّعة)؛ اطلب عبر المتجر أو راسل Olares واذكر «PromptQuorum Partner Quote» للحصول على تخصيص مبكر وحزم متعددة الوحدات"
          },
          {
            "المؤشر": "تجار التجزئة الخارجيون",
            "الإرشاد": "لم يُتحقَّق منهم"
          }
        ],
        "items": [
          "لا تكسب PromptQuorum شيئًا من أي عملية شراء: الروابط في هذه الصفحة روابط مرجعية عادية ولا تحمل أي وسم تسويق بالعمولة.",
          "تأكد من السعر النهائي والشحن والرسوم الجمركية وشروط الضمان في صفحة المتجر قبل الطلب — فصفحة منتج Olares تربط بسياسات الشحن والضمان لكنها لا تذكرها."
        ],
        "affiliateLinks": [
          {
            "label": "صفحة متجر Olares ←",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "بدائل تستحق النظر",
        "content": "**يعتمد البديل المناسب على ما إذا كنت تقدّر الحجم أم VRAM لكل دولار أم سعة الذاكرة.**",
        "items": [
          "**تريد أكبر قدر من VRAM لكل دولار وتقبل برجًا كبيرًا ←** تجميعة ببطاقة رسومية مكتبية؛ راجع [دليل شراء بطاقات GPU](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) و[دليل تجميع محطة عمل](/ar/power-local-llm/local-ai-workstation-build-guide).",
          "**تريد نماذج كبيرة في مجمّع ذاكرة واحد ←** حاسوب Mac بمعالج Apple Silicon وذاكرة موحّدة كبيرة؛ راجع [أفضل Mac للذكاء الاصطناعي المحلي](/ar/power-local-llm/best-mac-for-local-ai-2026).",
          "**تريد جهازًا أصغر وأرخص للنماذج الخفيفة ←** حاسوب مصغّر (Mini PC) بمعالج Ryzen أو Intel؛ راجع [حواسيب ASUS المصغّرة للذكاء الاصطناعي المحلي](/ar/power-local-llm/asus-mini-pc-local-ai) و[ملخص الحواسيب المصغّرة لـ Home Assistant](/ar/smart-home/best-mini-pc-home-assistant-local-ai).",
          "**تتساءل عمّا يتسع في 24 GB ←** [دليل نماذج 70B على عتاد المستهلك](/ar/local-llms/70b-models-consumer-hardware)، الذي يتضمن Olares One."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "كيف نقيّم",
        "content": "**لم تختبر PromptQuorum أي جهاز Olares One.** تفصل هذه الصفحة بين ثلاثة أنواع من المعلومات لتتبيّن ما هو مؤكَّد.",
        "items": [
          "**منشور من الشركة المصنّعة:** المواصفات وأرقام الضجيج من olares.com/one، والسعر من المتجر الرسمي (تم التحقق من كليهما في 2026-10-31).",
          "**ادعاءات الشركة المصنّعة:** أرقام أرسلتها لنا Olares بالبريد — تُعرض بوصفها ادعاءات، لا نتائج أبدًا.",
          "**تقدير PromptQuorum:** استنتاج لملاءمة النماذج والسرعة انطلاقًا من حجم VRAM والنطاق الترددي للذاكرة، وليس قياسًا."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "الأسئلة الشائعة",
        "faqs": [
          {
            "q": "ما هو Olares One؟",
            "a": "حاسوب مكتبي مدمج للذكاء الاصطناعي من Olares بمعالج Intel Core Ultra 9 275HX وبطاقة RTX 5090 Mobile بذاكرة 24 GB GDDR7 وذاكرة 96 GB DDR5-5600 ووحدة تخزين 2 TB NVMe SSD، ويعمل بنظام Olares OS."
          },
          {
            "q": "كم يبلغ سعر Olares One؟",
            "a": "يُدرج متجر Olares الرسمي سعر $4,999 USD لتهيئته الوحيدة (تم التحقق في 2026-10-31). وذكرت Olares أيضًا بالبريد سعر $4,959 وخصمًا قدره $300 في الجمعة السوداء؛ ولم تتحقق PromptQuorum من هذين العرضين."
          },
          {
            "q": "هل يستطيع Olares One تشغيل نماذج 70B؟",
            "a": "نعم، مع تفريغ جزئي. نموذج 70B بصيغة Q4_K_M أكبر من 24 GB من VRAM، لذا يعمل جزء منه من ذاكرة النظام DDR5. تقدير PromptQuorum نحو 2–4 tokens/s؛ أما Olares فأرسلت بالبريد 18–22 tokens/s، وهو رقم غير منشور في صفحة منتجها ولم نتمكن من التحقق منه."
          },
          {
            "q": "ما مدى ضجيج Olares One؟",
            "a": "تنشر Olares رقم 19 dB في الخمول و38.8 dB عند القدرة الكاملة، مقيسة عند 25 °C وعلى بُعد 0.5 m. وذكرت رسالة بريد من Olares أقل من 32 dB عند الحمل الكامل، وهو ما يتعارض مع صفحة المنتج."
          },
          {
            "q": "هل هذه صفحة تسويق بالعمولة؟",
            "a": "لا. لا تربط PromptQuorum أي اتفاقية تسويق بالعمولة مع Olares، ولا تضيف أي معاملات تسويق بالعمولة إلى الروابط، ولا تتقاضى أي عمولة أو رسوم من هذه الصفحة."
          },
          {
            "q": "هل اختبرت PromptQuorum جهاز Olares One؟",
            "a": "لا. تعتمد هذه الصفحة على مواصفات نشرتها الشركة المصنّعة، وعلى ادعاءات من الشركة المصنّعة موسومة بوضوح، وعلى تقديرات PromptQuorum."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "قراءات ذات صلة",
        "items": [
          "[نماذج 70B على عتاد المستهلك](/ar/local-llms/70b-models-consumer-hardware) — حيث يظهر Olares One في مقارنة VRAM",
          "[حاسوب ASUS مصغّر للذكاء الاصطناعي المحلي](/ar/power-local-llm/asus-mini-pc-local-ai) — بدائل أصغر من الحواسيب المصغّرة",
          "[أفضل دليل شراء بطاقات GPU للنماذج اللغوية المحلية](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM لكل دولار",
          "[أفضل الحواسيب المصغّرة لـ Home Assistant والذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — الطرف الاقتصادي من الحواسيب المصغّرة"
        ]
      }
    }
  },
  de: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-de.webp",
    "affiliateDisclosure": true,
    "title": "Olares One im Test: Kompakter KI-Desktop mit RTX 5090 Mobile für lokale LLMs",
    "seoTitle": "Olares One im Test: RTX-5090-Mobile-KI-Box, $4,999",
    "intro": "Der Olares One ist ein kompakter KI-Desktop-Rechner (3,5 L nach eigener Angabe von Olares) rund um eine Notebook-Grafikkarte NVIDIA RTX 5090 Mobile mit 24 GB GDDR7, einen Intel Core Ultra 9 275HX, 96 GB DDR5-5600 (laut Olares auf 128 GB erweiterbar) und eine 2-TB-NVMe-SSD; als Betriebssystem läuft Olares OS. Olares führt ihn in seinem offiziellen Shop für $4,999 (geprüft am 2026-10-31). Diese Seite trägt die vom Hersteller veröffentlichten Spezifikationen zusammen, die Zahlen, die Olares uns per E-Mail geschickt hat – als Herstellerangaben gekennzeichnet und mit der eigenen Produktseite von Olares abgeglichen – sowie eine Einschätzung von PromptQuorum dazu, was das Gerät kann und was nicht. PromptQuorum hat kein Gerät getestet, hat keine Affiliate-Vereinbarung mit Olares und verdient mit dieser Seite nichts.",
    "metaDescription": "Olares One im Test: RTX 5090 Mobile 24 GB, 96 GB DDR5, offizieller Preis $4,999. Spezifikationen, Herstellerangaben mit Olares' eigener Seite abgeglichen, keine Affiliate-Links.",
    "twitterDescription": "Olares One: RTX 5090 Mobile (24 GB), Core Ultra 9 275HX, 96 GB DDR5, $4,999 Preis im offiziellen Shop. Spezifikationen, Prüfung der Herstellerangaben und ein unabhängiges Fazit ohne Affiliate-Links.",
    "readTime": "8 Min. Lesezeit",
    "educationalLevel": "Intermediate",
    "audience": "Käufer, die einen kompakten, fertig konfigurierten Desktop für lokale KI erwägen – für Modelle der 30B-Klasse und teilweise ausgelagerte 70B-Modelle",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**Der Olares One ist ein kompakter KI-Desktop mit RTX 5090 Mobile (24 GB GDDR7), 96 GB DDR5 und 2-TB-SSD; der offizielle Olares-Shop führt ihn für $4,999 (geprüft am 2026-10-31).** Die Einschätzung von PromptQuorum anhand der veröffentlichten Spezifikationen: Mittelgroße Modelle (etwa 30B-Klasse bei 4 Bit) passen in den VRAM, 70B-Modelle laufen nur mit teilweiser Auslagerung in den Arbeitsspeicher. Olares hat uns per E-Mail schnellere 70B-Werte und einen niedrigeren Lärmwert genannt; keiner von beiden steht auf der Produktseite, deshalb zeigen wir sie als nicht verifizierte Herstellerangaben. Dies ist keine Affiliate-Seite – PromptQuorum hat keine Vereinbarung mit Olares und erhält keine Provision. → [Olares-One-Produktseite](https://www.olares.com/one)",
    "quickAnswerTop": {
      "de": {
        "question": "Ist der Olares One ein guter Desktop für lokale KI?",
        "answer": "Er ist eine starke, fertig konfigurierte Box, wenn Sie 24 GB schnellen GDDR7-VRAM in einem kleinen, leisen Gehäuse wollen und ein fertiges Betriebssystem dem Selbstbau eines PCs vorziehen. Bei 70B-Modellen ist der 24-GB-VRAM die Grenze: Ein Teil des Modells liegt im Arbeitsspeicher, dadurch sinkt die Geschwindigkeit stark. Auf der Seite von Olares selbst sind keine Tokens-pro-Sekunde-Werte veröffentlicht.",
        "bullets": [
          "GPU: NVIDIA RTX 5090 Mobile, 24 GB GDDR7, maximal 175 W TGP (Olares)",
          "CPU und RAM: Intel Core Ultra 9 275HX, 96 GB (2×48 GB) DDR5-5600, auf 128 GB erweiterbar (Olares)",
          "Speicher und Anschlüsse: 2 TB NVMe, zweiter SSD-Steckplatz, Thunderbolt 5, 2.5 GbE, Wi-Fi 7, HDMI 2.1",
          "Preis im offiziellen Shop $4,999; Olares nannte per E-Mail außerdem $4,959 und einen Black-Friday-Nachlass von $300 (Herstellerangaben)",
          "PromptQuorum hat keine Affiliate-Vereinbarung mit Olares und verdient mit dieser Seite nichts"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Kaufen, wenn / Verzichten, wenn",
        "anchor": "buy-skip-if"
      },
      {
        "label": "Zusammenfassung",
        "anchor": "tldr"
      },
      {
        "label": "Fazit",
        "anchor": "verdict"
      },
      {
        "label": "Kein Affiliate, keine Provision",
        "anchor": "no-affiliate"
      },
      {
        "label": "Spezifikationen",
        "anchor": "specs"
      },
      {
        "label": "Geprüfte Herstellerangaben",
        "anchor": "vendor-claims"
      },
      {
        "label": "Bezugsquellen & aktueller Preis",
        "anchor": "where-to-buy"
      },
      {
        "label": "Alternativen",
        "anchor": "alternatives"
      },
      {
        "label": "So bewerten wir",
        "anchor": "methodology"
      },
      {
        "label": "FAQ",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "Der Olares One ist ein kompakter KI-Desktop-Rechner mit RTX 5090 Mobile (24 GB GDDR7), 96 GB DDR5 und Olares OS, der im offiziellen Olares-Shop für $4,999 geführt wird."
      },
      {
        "type": "plain-terms",
        "content": "Es ist ein kleiner, leiser PC, der fertig für lokale KI-Modelle verkauft wird. Seine Grafikkarte hat 24 GB schnellen Speicher; größere Modelle laufen teilweise im langsameren Arbeitsspeicher und sind dadurch deutlich langsamer. Wir haben ihn nicht getestet und verdienen nichts, wenn Sie ihn kaufen."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "Kaufen, wenn / Verzichten, wenn",
        "highlight": true,
        "content": "Kurze Entscheidungshilfe: Passt der Olares One zu Ihren Anforderungen? Einschätzung von PromptQuorum anhand der veröffentlichten Spezifikationen, kein Praxistest.",
        "items": [
          "**Kaufen Sie den Olares One, wenn:**",
          "Sie 24 GB GDDR7-VRAM in einem kleinen Desktop (320 × 197 × 55 mm, 2,15 kg) wollen, statt einen Tower zu bauen",
          "Sie ein fertiges Betriebssystem für lokale KI (Olares OS) bevorzugen, statt Treiber und Laufzeitumgebungen selbst zusammenzustellen",
          "Sie hauptsächlich Modelle bis etwa 30B bei 4 Bit nutzen, die vollständig in den VRAM passen",
          "Ihnen ein geringer Lärmpegel im Leerlauf wichtig ist (Olares gibt 19 dB im Leerlauf an)",
          "**Verzichten Sie auf den Olares One, wenn:**",
          "Ihr Hauptziel schnelle 70B-Inferenz ist – 24 GB VRAM erzwingen eine teilweise Auslagerung in den Arbeitsspeicher",
          "Sie den niedrigsten Preis pro GB VRAM suchen – eine gebrauchte Desktop-Grafikkarte kostet meist deutlich weniger, dafür bei mehr Platzbedarf und Lärm",
          "Sie vor dem Kauf unabhängig gemessene Benchmarks brauchen – die Seite von Olares veröffentlicht keine, und wir haben kein Gerät getestet"
        ],
        "affiliateLinks": [
          {
            "label": "Olares-One-Produktseite →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "Kurzfassung (TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One: Intel Core Ultra 9 275HX, RTX 5090 Mobile mit 24 GB GDDR7, 96 GB DDR5-5600 (auf 128 GB erweiterbar), 2 TB NVMe – Spezifikationen von olares.com/one, geprüft am 2026-10-31",
          "Preis im offiziellen Shop $4,999 (einzige Konfiguration, shop.olares.com, geprüft am 2026-10-31)",
          "Olares hat uns per E-Mail ein Angebot über $4,959 und einen Black-Friday-Nachlass von $300 pro Gerät genannt (2026-11-17 bis 2026-12-03, GMT-8) – Herstellerangaben, siehe Bezugsquellen",
          "Olares nannte uns per E-Mail außerdem 18–22 Tokens/s für Llama 3 70B (Q4_K_M) und unter 32 dB unter Volllast – keiner der beiden Werte steht auf der Produktseite, und wir konnten keinen überprüfen",
          "Einschätzung von PromptQuorum: 70B Q4_K_M erfordert bei 24 GB VRAM eine teilweise Auslagerung, daher sind einige wenige Tokens pro Sekunde realistischer als 18–22 (siehe den 70B-Ratgeber)",
          "Dies ist keine Affiliate-Seite: PromptQuorum hat keine Vereinbarung mit Olares, setzt keine Affiliate-Tags und erhält keine Provision"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Fazit",
        "content": "**Der Olares One ist eine gut ausgestattete, kompakte Box für Menschen, die einen fertigen Desktop für lokale KI wollen und einen Preis von $4,999 akzeptieren.** Seine 24 GB GDDR7-VRAM eignen sich für mittelgroße Modelle und schnelle Prompt-Verarbeitung; die 96 GB DDR5 schaffen zusätzliche Kapazität für 70B-Modelle, aber Kapazität ist nicht Geschwindigkeit – Schichten im Arbeitsspeicher laufen mit der DDR5-Bandbreite. Das stärkste Argument für das Gerät sind Komfort und Größe, nicht der Preis pro GB VRAM. Wir haben kein Gerät getestet; verstehen Sie dies daher als Einschätzung veröffentlichter Spezifikationen und behandeln Sie jeden Benchmark-Wert – von Olares oder von uns – als nicht verifiziert, bis ein unabhängiger Test ihn bestätigt."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "Kein Affiliate, keine Provision",
        "highlight": true,
        "content": "**Dies ist keine Affiliate-Seite.** PromptQuorum hat keine Affiliate-Vereinbarung mit Olares, erhält für diese Seite weder Provision noch Honorar noch Zahlung und fügt keinem Link Affiliate-Parameter hinzu. Die Seite zum Olares One entstand, nachdem Olares uns mit Produktinformationen kontaktiert hatte; Olares selbst bezeichnet sein Preisangebot als „Partner-Angebot“ („partner quote“), doch das ist die Wortwahl von Olares und beschreibt keine Partnerschaft mit PromptQuorum.",
        "items": [
          "Links zu olares.com und shop.olares.com sind einfache Referenzlinks, mit denen PromptQuorum nichts verdient – ob Sie kaufen oder nicht",
          "Zahlen, die Olares uns geschickt hat, sind überall, wo sie vorkommen, als Herstellerangaben gekennzeichnet",
          "Widerspricht eine Herstellerangabe der eigenen Produktseite von Olares, zeigen wir beide und nennen, welche veröffentlicht ist"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Spezifikationen des Olares One",
        "content": "**Vom Hersteller veröffentlichte Spezifikationen, entnommen von olares.com/one am 2026-10-31.** Olares veröffentlicht auf dieser Seite keinen Verkaufspreis; der Preis stammt aus dem offiziellen Shop.",
        "columns": [
          "Komponente",
          "Spezifikation (Olares)"
        ],
        "rows": [
          {
            "Komponente": "CPU",
            "Spezifikation (Olares)": "Intel Core Ultra 9 275HX, 24 Kerne, bis zu 5,4 GHz, 36 MB Cache"
          },
          {
            "Komponente": "GPU",
            "Spezifikation (Olares)": "NVIDIA GeForce RTX 5090 Mobile, 24 GB GDDR7, 175 W max. TGP"
          },
          {
            "Komponente": "Arbeitsspeicher",
            "Spezifikation (Olares)": "96 GB (2×48 GB) DDR5-5600, auf 128 GB erweiterbar"
          },
          {
            "Komponente": "Speicher",
            "Spezifikation (Olares)": "2 TB NVMe-SSD (PCIe 4.0), zweiter PCIe-SSD-Steckplatz"
          },
          {
            "Komponente": "Anschlüsse",
            "Spezifikation (Olares)": "1× Thunderbolt 5, 1× 2.5 GbE RJ45, 1× USB-A 3.2 Gen2, 1× HDMI 2.1"
          },
          {
            "Komponente": "Drahtlos",
            "Spezifikation (Olares)": "Wi-Fi 7, Bluetooth 5.4"
          },
          {
            "Komponente": "Größe und Gewicht",
            "Spezifikation (Olares)": "320 × 197 × 55 mm (etwa 3,5 L), 2,15 kg (3,1 kg mit Netzteil)"
          },
          {
            "Komponente": "Lärm (Labormesswert von Olares)",
            "Spezifikation (Olares)": "19 dB im Leerlauf; 38,8 dB bei voller Leistung (GPU 175 W + CPU 55 W), gemessen bei 25 °C und 0,5 m"
          },
          {
            "Komponente": "Leistung",
            "Spezifikation (Olares)": "330-W-Netzteil; 30 W Standby; GPU 95 W im Silent-Modus, 175 W im Performance-Modus"
          },
          {
            "Komponente": "Software",
            "Spezifikation (Olares)": "Olares OS (von Olares als Open Source beschrieben), kostenlose System-Updates"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "Geprüfte Herstellerangaben",
        "content": "**Olares hat uns diese Zahlen am 2026-10-31 per E-Mail geschickt. PromptQuorum hat keine davon nachvollzogen.** Die Tabelle stellt jede Angabe dem gegenüber, was Olares auf der eigenen Produktseite veröffentlicht, und der Einschätzung von PromptQuorum.",
        "columns": [
          "Herstellerangabe (E-Mail)",
          "Olares-Produktseite",
          "Status laut PromptQuorum"
        ],
        "rows": [
          {
            "Herstellerangabe (E-Mail)": "Llama 3 70B (Q4_K_M): etwa 18–22 Tokens/s dauerhaft",
            "Olares-Produktseite": "Kein Tokens-pro-Sekunde-Wert veröffentlicht",
            "Status laut PromptQuorum": "Nicht verifiziert. Ein 70B-Modell in Q4_K_M ist größer als 24 GB VRAM, daher läuft ein Teil aus dem DDR5-Arbeitsspeicher; unsere Schätzung im 70B-Ratgeber liegt bei etwa 2–4 Tokens/s"
          },
          {
            "Herstellerangabe (E-Mail)": "„96 GB Unified Memory“ mit der RTX 5090M",
            "Olares-Produktseite": "96 GB DDR5-Arbeitsspeicher plus separater 24 GB GDDR7-VRAM",
            "Status laut PromptQuorum": "Die Produktseite beschreibt getrennte Speicherbereiche, keinen Unified Memory"
          },
          {
            "Herstellerangabe (E-Mail)": "Unter 32 dB bei voller Dauerlast",
            "Olares-Produktseite": "19 dB im Leerlauf, 38,8 dB bei voller Leistung, unter 39 dB bei Maximallast (25 °C, 0,5 m)",
            "Status laut PromptQuorum": "Widerspricht dem veröffentlichten Wert; wir verwenden den Wert der Produktseite"
          },
          {
            "Herstellerangabe (E-Mail)": "deepseek-v4.1-flash-10.17 im Multi-Geräte-Einsatz mit lokaler Latenz unter einer Millisekunde",
            "Olares-Produktseite": "Weder ein solches Modell noch ein Latenzwert veröffentlicht",
            "Status laut PromptQuorum": "Nicht verifiziert: Wir konnten den Modellnamen nicht zuordnen, und eine Latenz unter einer Millisekunde ist für die Textgenerierung keine aussagekräftige Größe"
          },
          {
            "Herstellerangabe (E-Mail)": "$4,959 „Partner-Angebot“ ($40 unter $4,999)",
            "Olares-Produktseite": "Nicht aufgeführt; Shop-Preis $4,999",
            "Status laut PromptQuorum": "Der von Olares gelieferte Angebotslink nennt $4,949 und ist für ein anderes Publikum betitelt, daher verlinken wir ihn nicht (geprüft am 2026-10-31)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "Bezugsquellen & aktueller Preis",
        "content": "**Preise und Aktionen ändern sich – prüfen Sie die aktuelle Shop-Seite.** Preis geprüft: 2026-10-31 auf shop.olares.com (einzige Konfiguration).",
        "columns": [
          "Hinweis",
          "Angabe"
        ],
        "rows": [
          {
            "Hinweis": "Preis im offiziellen Shop",
            "Angabe": "$4,999 USD (shop.olares.com, geprüft am 2026-10-31)"
          },
          {
            "Hinweis": "Angebot per E-Mail von Olares",
            "Angabe": "$4,959 USD, $40 Nachlass, Versand in etwa 2 Werktagen aus Lagern in den USA und der EU (Herstellerangabe, von PromptQuorum nicht verifiziert)"
          },
          {
            "Hinweis": "Black-Friday-Aktion von Olares",
            "Angabe": "2026-11-17 00:00 bis 2026-12-03 00:00 (GMT-8), weitere $300 USD Nachlass pro Gerät (Herstellerangabe); bestellen Sie über den Shop oder schreiben Sie Olares und nennen Sie „PromptQuorum Partner Quote“ für frühzeitige Zuteilung und Mehrgeräte-Pakete"
          },
          {
            "Hinweis": "Drittanbieter-Händler",
            "Angabe": "Nicht geprüft"
          }
        ],
        "items": [
          "PromptQuorum verdient an keinem Kauf etwas: Die Links auf dieser Seite sind einfache Referenzlinks und tragen kein Affiliate-Tag.",
          "Prüfen Sie vor der Bestellung auf der Shop-Seite den Endpreis, den Versand, Einfuhrabgaben und die Garantiebedingungen – die Produktseite von Olares verlinkt Versand- und Garantierichtlinien, nennt sie aber nicht selbst."
        ],
        "affiliateLinks": [
          {
            "label": "Olares-Shop-Seite →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "Alternativen im Überblick",
        "content": "**Die passende Alternative hängt davon ab, ob Ihnen Größe, VRAM pro Dollar oder Speicherkapazität wichtiger ist.**",
        "items": [
          "**Sie wollen den meisten VRAM pro Dollar und akzeptieren einen Tower →** ein Desktop-GPU-Build; siehe den [Ratgeber zum GPU-Kauf](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) und den [Ratgeber zum Workstation-Aufbau](/de/power-local-llm/local-ai-workstation-build-guide).",
          "**Sie wollen große Modelle in einem einzigen Speicherpool →** ein Apple-Silicon-Mac mit viel Unified Memory; siehe [bester Mac für lokale KI](/de/power-local-llm/best-mac-for-local-ai-2026).",
          "**Sie wollen eine kleinere, günstigere Box für leichte Modelle →** ein Ryzen- oder Intel-Mini-PC; siehe [ASUS-Mini-PCs für lokale KI](/de/power-local-llm/asus-mini-pc-local-ai) und die [Mini-PC-Übersicht für Home Assistant](/de/smart-home/best-mini-pc-home-assistant-local-ai).",
          "**Sie fragen sich, was auf 24 GB passt →** der [Ratgeber zu 70B-Modellen auf Consumer-Hardware](/de/local-llms/70b-models-consumer-hardware), in dem auch der Olares One vorkommt."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "So bewerten wir",
        "content": "**PromptQuorum hat keinen Olares One getestet.** Diese Seite trennt drei Arten von Informationen, damit Sie erkennen, was bestätigt ist.",
        "items": [
          "**Vom Hersteller veröffentlicht:** Spezifikationen und Lärmwerte von olares.com/one sowie der Preis aus dem offiziellen Shop (beide geprüft am 2026-10-31).",
          "**Herstellerangaben:** Zahlen, die Olares uns per E-Mail geschickt hat – als Angaben gezeigt, nie als Ergebnisse.",
          "**Einschätzung von PromptQuorum:** Überlegungen zu Modellgröße und Geschwindigkeit anhand von VRAM-Größe und Speicherbandbreite, keine Messung."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Häufig gestellte Fragen",
        "faqs": [
          {
            "q": "Was ist der Olares One?",
            "a": "Ein kompakter KI-Desktop-Rechner von Olares mit Intel Core Ultra 9 275HX, einer RTX 5090 Mobile mit 24 GB GDDR7, 96 GB DDR5-5600 und einer 2-TB-NVMe-SSD, auf dem Olares OS läuft."
          },
          {
            "q": "Was kostet der Olares One?",
            "a": "Der offizielle Olares-Shop führt die einzige Konfiguration für $4,999 USD (geprüft am 2026-10-31). Olares nannte per E-Mail außerdem $4,959 und einen Black-Friday-Nachlass von $300; PromptQuorum hat diese Angebote nicht verifiziert."
          },
          {
            "q": "Kann der Olares One 70B-Modelle ausführen?",
            "a": "Ja, mit teilweiser Auslagerung. Ein 70B-Modell in Q4_K_M ist größer als die 24 GB VRAM, daher läuft ein Teil aus dem DDR5-Arbeitsspeicher. Die Schätzung von PromptQuorum liegt bei etwa 2–4 Tokens/s; Olares nannte per E-Mail 18–22 Tokens/s, was auf der Produktseite nicht veröffentlicht ist und was wir nicht verifizieren konnten."
          },
          {
            "q": "Wie laut ist der Olares One?",
            "a": "Olares veröffentlicht 19 dB im Leerlauf und 38,8 dB bei voller Leistung, gemessen bei 25 °C und 0,5 m. Eine E-Mail von Olares nannte unter 32 dB bei Volllast, was der Produktseite widerspricht."
          },
          {
            "q": "Ist dies eine Affiliate-Seite?",
            "a": "Nein. PromptQuorum hat keine Affiliate-Vereinbarung mit Olares, fügt Links keine Affiliate-Parameter hinzu und erhält für diese Seite weder Provision noch Honorar."
          },
          {
            "q": "Hat PromptQuorum den Olares One getestet?",
            "a": "Nein. Diese Seite nutzt vom Hersteller veröffentlichte Spezifikationen, eindeutig gekennzeichnete Herstellerangaben und Einschätzungen von PromptQuorum."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Weiterführende Artikel",
        "items": [
          "[70B-Modelle auf Consumer-Hardware](/de/local-llms/70b-models-consumer-hardware) — wo der Olares One im VRAM-Vergleich auftaucht",
          "[ASUS-Mini-PC für lokale KI](/de/power-local-llm/asus-mini-pc-local-ai) — kleinere Mini-PC-Alternativen",
          "[Bester GPU-Kaufratgeber für lokale LLMs](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM pro Dollar",
          "[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) — das Budget-Ende der Mini-PCs"
        ]
      }
    }
  },
  es: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-es.webp",
    "affiliateDisclosure": true,
    "title": "Análisis del Olares One: sobremesa de IA compacto con RTX 5090 Mobile para LLM locales",
    "seoTitle": "Olares One: análisis del mini PC de IA con RTX 5090 Mobile, $4,999",
    "intro": "El Olares One es un ordenador de sobremesa compacto para IA (3.5 L según las cifras del propio Olares) construido en torno a una NVIDIA RTX 5090 Mobile de clase portátil con 24 GB GDDR7, un Intel Core Ultra 9 275HX, 96 GB DDR5-5600 (ampliables a 128 GB según Olares) y un SSD NVMe de 2 TB, y funciona con Olares OS. Olares lo vende por $4,999 en su tienda oficial (consultado el 2026-10-31). Esta página reúne las especificaciones publicadas por el fabricante, las cifras que Olares nos envió por correo electrónico —señaladas como afirmaciones del fabricante y contrastadas con la propia página de producto de Olares— y la lectura de PromptQuorum sobre lo que el equipo puede y no puede hacer. PromptQuorum no ha probado ninguna unidad, no tiene ningún acuerdo de afiliación con Olares y no gana nada con esta página.",
    "metaDescription": "Análisis del Olares One: RTX 5090 Mobile de 24 GB, 96 GB DDR5, precio oficial de $4,999. Especificaciones, afirmaciones del fabricante contrastadas con la página de Olares y sin enlaces de afiliación.",
    "twitterDescription": "Olares One: RTX 5090 Mobile (24 GB), Core Ultra 9 275HX, 96 GB DDR5, $4,999 en la tienda oficial. Especificaciones, revisión de las afirmaciones del fabricante y un veredicto independiente, sin afiliación.",
    "readTime": "8 min de lectura",
    "educationalLevel": "Intermediate",
    "audience": "Compradores que valoran un sobremesa de IA local compacto y listo para usar para modelos de clase 30B y modelos de 70B con descarga parcial",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**El Olares One es un sobremesa de IA compacto con una RTX 5090 Mobile (24 GB GDDR7), 96 GB DDR5 y un SSD de 2 TB; la tienda oficial de Olares lo vende por $4,999 (consultado el 2026-10-31).** Lectura de PromptQuorum de las especificaciones publicadas: los modelos de tamaño medio (de clase 30B a 4 bits) caben en la VRAM, mientras que los modelos de 70B solo funcionan con descarga parcial a la RAM del sistema. Olares nos envió por correo cifras más rápidas para 70B y un valor de ruido más bajo; ninguno aparece en su página de producto, por lo que los mostramos como afirmaciones del fabricante no verificadas. Esta no es una página de afiliación: PromptQuorum no tiene ningún acuerdo con Olares y no recibe comisión alguna. → [Página de producto del Olares One](https://www.olares.com/one)",
    "quickAnswerTop": {
      "es": {
        "question": "¿Es el Olares One un buen sobremesa de IA local?",
        "answer": "Es un equipo sólido y listo para usar si quieres 24 GB de VRAM GDDR7 rápida en un chasis pequeño y silencioso, y prefieres un sistema operativo ya preparado a montar un PC por piezas. Con modelos de 70B, los 24 GB de VRAM son el límite: parte del modelo se aloja en la RAM del sistema y la velocidad cae en picado. La página de Olares no publica ninguna cifra de tokens por segundo.",
        "bullets": [
          "GPU: NVIDIA RTX 5090 Mobile, 24 GB GDDR7, TGP máximo de 175 W (Olares)",
          "CPU y RAM: Intel Core Ultra 9 275HX, 96 GB (2×48 GB) DDR5-5600, ampliables a 128 GB (Olares)",
          "Almacenamiento y puertos: 2 TB NVMe, segunda ranura para SSD, Thunderbolt 5, 2.5 GbE, Wi-Fi 7, HDMI 2.1",
          "Precio oficial en la tienda: $4,999; Olares también indicó por correo $4,959 y una rebaja de $300 por el Black Friday (afirmaciones del fabricante)",
          "PromptQuorum no tiene ningún acuerdo de afiliación con Olares y no gana nada con esta página"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Comprar si / Descartar si",
        "anchor": "buy-skip-if"
      },
      {
        "label": "Resumen",
        "anchor": "tldr"
      },
      {
        "label": "Veredicto",
        "anchor": "verdict"
      },
      {
        "label": "Sin afiliación, sin comisión",
        "anchor": "no-affiliate"
      },
      {
        "label": "Especificaciones",
        "anchor": "specs"
      },
      {
        "label": "Afirmaciones del fabricante contrastadas",
        "anchor": "vendor-claims"
      },
      {
        "label": "Dónde comprar y precio actual",
        "anchor": "where-to-buy"
      },
      {
        "label": "Alternativas",
        "anchor": "alternatives"
      },
      {
        "label": "Cómo evaluamos",
        "anchor": "methodology"
      },
      {
        "label": "Preguntas frecuentes",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "El Olares One es un ordenador de sobremesa compacto para IA con una RTX 5090 Mobile (24 GB GDDR7), 96 GB DDR5 y Olares OS, a la venta por $4,999 en la tienda oficial de Olares."
      },
      {
        "type": "plain-terms",
        "content": "Es un PC pequeño y silencioso que se vende listo para ejecutar modelos de IA locales. Su tarjeta gráfica tiene 24 GB de memoria rápida; los modelos más grandes que eso pasan a la memoria principal, más lenta, y funcionan mucho más despacio. No lo hemos probado y no ganamos nada si lo compras."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "Comprar si / Descartar si",
        "highlight": true,
        "content": "Guía rápida de decisión: ¿encaja el Olares One con lo que necesitas? Es la lectura de PromptQuorum de las especificaciones publicadas, no una prueba práctica.",
        "items": [
          "**Compra el Olares One si:**",
          "Quieres 24 GB de VRAM GDDR7 en un sobremesa pequeño (320 × 197 × 55 mm, 2.15 kg) en lugar de montar una torre",
          "Quieres un sistema operativo de IA local ya preparado (Olares OS) en vez de montar tú mismo los controladores y los entornos de ejecución",
          "Ejecutas sobre todo modelos de hasta unos 30B a 4 bits, que caben enteros en la VRAM",
          "Valoras un ruido bajo en reposo (Olares publica 19 dB en reposo)",
          "**Descarta el Olares One si:**",
          "Tu objetivo principal es la inferencia rápida con 70B: 24 GB de VRAM obligan a una descarga parcial a la RAM del sistema",
          "Buscas el menor precio por GB de VRAM: una GPU de sobremesa de segunda mano suele costar mucho menos, a cambio de tamaño y ruido",
          "Necesitas benchmarks medidos de forma independiente antes de comprar: la página de Olares no publica ninguno y nosotros no hemos probado ninguna unidad"
        ],
        "affiliateLinks": [
          {
            "label": "Página de producto del Olares One →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "Resumen (TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One: Intel Core Ultra 9 275HX, RTX 5090 Mobile con 24 GB GDDR7, 96 GB DDR5-5600 (ampliables a 128 GB), 2 TB NVMe — especificaciones de olares.com/one, consultadas el 2026-10-31",
          "Precio oficial en la tienda: $4,999 (configuración única, shop.olares.com, consultado el 2026-10-31)",
          "Olares nos envió por correo una oferta de $4,959 y una rebaja del Black Friday de $300 por unidad (del 2026-11-17 al 2026-12-03, GMT-8): afirmaciones del fabricante, véase Dónde comprar",
          "Olares también envió por correo 18–22 tokens/s para Llama 3 70B (Q4_K_M) y menos de 32 dB a plena carga: ninguna de las dos cifras figura en su página de producto y no pudimos verificar ninguna",
          "Estimación de PromptQuorum: 70B Q4_K_M necesita descarga parcial con 24 GB de VRAM, por lo que unos pocos tokens por segundo es más realista que 18–22 (véase la guía de 70B)",
          "Esta no es una página de afiliación: PromptQuorum no tiene ningún acuerdo con Olares, no añade etiquetas de afiliado y no recibe comisión alguna"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredicto",
        "content": "**El Olares One es un equipo compacto y bien equipado para quien quiere un sobremesa de IA local listo para usar y acepta un precio de $4,999.** Sus 24 GB de VRAM GDDR7 sirven para modelos de tamaño medio y un procesamiento rápido de prompts; sus 96 GB de DDR5 añaden capacidad para modelos de 70B, pero capacidad no es velocidad: las capas alojadas en la RAM del sistema se ejecutan al ancho de banda de la DDR5. Su mejor argumento es la comodidad y el tamaño, no el precio por GB de VRAM. No hemos probado ninguna unidad, así que trata esto como una lectura de las especificaciones publicadas, y considera cualquier cifra de benchmark —de Olares o nuestra— como no verificada hasta que una prueba independiente la confirme."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "Sin afiliación, sin comisión",
        "highlight": true,
        "content": "**Esta no es una página de afiliación.** PromptQuorum no tiene ningún acuerdo de afiliación con Olares, no recibe comisión, tarifa ni pago alguno por esta página y no añade parámetros de afiliado a ningún enlace. La página del Olares One se redactó después de que Olares se pusiera en contacto con nosotros con información del producto; el propio Olares llama a su oferta de precio «partner quote», pero esa es una expresión de Olares y no describe ninguna colaboración con PromptQuorum.",
        "items": [
          "Los enlaces a olares.com y shop.olares.com son enlaces de referencia simples que no reportan nada a PromptQuorum, compres o no",
          "Las cifras que nos envió Olares se señalan como afirmaciones del fabricante dondequiera que aparecen",
          "Cuando una afirmación del fabricante contradice la propia página de producto de Olares, mostramos ambas e indicamos cuál está publicada"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Especificaciones del Olares One",
        "content": "**Especificaciones publicadas por el fabricante, tomadas de olares.com/one el 2026-10-31.** Olares no publica ningún precio de venta en esa página; el precio procede de la tienda oficial.",
        "columns": [
          "Componente",
          "Especificación (Olares)"
        ],
        "rows": [
          {
            "Componente": "CPU",
            "Especificación (Olares)": "Intel Core Ultra 9 275HX, 24 núcleos, hasta 5.4 GHz, 36 MB de caché"
          },
          {
            "Componente": "GPU",
            "Especificación (Olares)": "NVIDIA GeForce RTX 5090 Mobile, 24 GB GDDR7, TGP máx. de 175 W"
          },
          {
            "Componente": "Memoria",
            "Especificación (Olares)": "96 GB (2×48 GB) DDR5-5600, ampliables a 128 GB"
          },
          {
            "Componente": "Almacenamiento",
            "Especificación (Olares)": "SSD NVMe de 2 TB (PCIe 4.0), segunda ranura para SSD PCIe"
          },
          {
            "Componente": "Puertos",
            "Especificación (Olares)": "1× Thunderbolt 5, 1× 2.5 GbE RJ45, 1× USB-A 3.2 Gen2, 1× HDMI 2.1"
          },
          {
            "Componente": "Conectividad inalámbrica",
            "Especificación (Olares)": "Wi-Fi 7, Bluetooth 5.4"
          },
          {
            "Componente": "Tamaño y peso",
            "Especificación (Olares)": "320 × 197 × 55 mm (unos 3.5 L), 2.15 kg (3.1 kg con la fuente de alimentación)"
          },
          {
            "Componente": "Ruido (cifra del laboratorio de Olares)",
            "Especificación (Olares)": "19 dB en reposo; 38.8 dB a plena potencia (GPU 175 W + CPU 55 W), medido a 25 °C y 0.5 m"
          },
          {
            "Componente": "Alimentación",
            "Especificación (Olares)": "Fuente de alimentación de 330 W; 30 W en espera; GPU a 95 W en modo silencioso, 175 W en modo rendimiento"
          },
          {
            "Componente": "Software",
            "Especificación (Olares)": "Olares OS (descrito por Olares como de código abierto), actualizaciones del sistema gratuitas"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "Afirmaciones del fabricante contrastadas",
        "content": "**Olares nos envió estas cifras por correo electrónico el 2026-10-31. PromptQuorum no ha reproducido ninguna.** La tabla compara cada afirmación con lo que Olares publica en su propia página de producto y con la estimación de PromptQuorum.",
        "columns": [
          "Afirmación del fabricante (correo)",
          "Página de producto de Olares",
          "Estado según PromptQuorum"
        ],
        "rows": [
          {
            "Afirmación del fabricante (correo)": "Llama 3 70B (Q4_K_M): unos 18–22 tokens/s sostenidos",
            "Página de producto de Olares": "No se publica ninguna cifra de tokens por segundo",
            "Estado según PromptQuorum": "No verificado. Un modelo 70B en Q4_K_M es más grande que los 24 GB de VRAM, por lo que parte se ejecuta desde la RAM del sistema DDR5; nuestra estimación en la guía de 70B es de unos 2–4 tokens/s"
          },
          {
            "Afirmación del fabricante (correo)": "«96 GB de memoria unificada» con la RTX 5090M",
            "Página de producto de Olares": "96 GB de RAM del sistema DDR5 más 24 GB de VRAM GDDR7 independientes",
            "Estado según PromptQuorum": "La página de producto describe reservas de memoria separadas, no memoria unificada"
          },
          {
            "Afirmación del fabricante (correo)": "Menos de 32 dB a plena carga continua",
            "Página de producto de Olares": "19 dB en reposo, 38.8 dB a plena potencia, menos de 39 dB a carga máxima (25 °C, 0.5 m)",
            "Estado según PromptQuorum": "Contradice la cifra publicada; usamos el valor de la página de producto"
          },
          {
            "Afirmación del fabricante (correo)": "Despliegue multiunidad de deepseek-v4.1-flash-10.17 con latencia local inferior al milisegundo",
            "Página de producto de Olares": "No se publica ningún modelo ni cifra de latencia de ese tipo",
            "Estado según PromptQuorum": "No verificado: no pudimos identificar el nombre del modelo, y una latencia inferior al milisegundo no es una cifra con sentido para la generación de texto"
          },
          {
            "Afirmación del fabricante (correo)": "«Partner quote» de $4,959 ($40 menos que $4,999)",
            "Página de producto de Olares": "No figura; precio en la tienda $4,999",
            "Estado según PromptQuorum": "El enlace de la oferta que facilitó Olares indica $4,949 y está titulado para otro público, por lo que no lo enlazamos (consultado el 2026-10-31)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "Dónde comprar y precio actual",
        "content": "**Los precios y las promociones cambian: consulta la página en vivo de la tienda.** Precio consultado el 2026-10-31 en shop.olares.com (configuración única).",
        "columns": [
          "Indicador",
          "Orientación"
        ],
        "rows": [
          {
            "Indicador": "Precio oficial en la tienda",
            "Orientación": "$4,999 USD (shop.olares.com, consultado el 2026-10-31)"
          },
          {
            "Indicador": "Oferta de Olares por correo",
            "Orientación": "$4,959 USD, $40 menos, envío en unos 2 días laborables desde almacenes de EE. UU. y la UE (afirmación del fabricante, no verificada por PromptQuorum)"
          },
          {
            "Indicador": "Evento Black Friday de Olares",
            "Orientación": "Del 2026-11-17 00:00 al 2026-12-03 00:00 (GMT-8), $300 USD adicionales de descuento por unidad (afirmación del fabricante); pide a través de la tienda o escribe a Olares mencionando \"PromptQuorum Partner Quote\" para asignación anticipada y paquetes de varias unidades"
          },
          {
            "Indicador": "Minoristas de terceros",
            "Orientación": "No comprobado"
          }
        ],
        "items": [
          "PromptQuorum no gana nada con ninguna compra: los enlaces de esta página son enlaces de referencia simples y no llevan etiqueta de afiliado.",
          "Confirma el precio final, el envío, los aranceles de importación y las condiciones de garantía en la página de la tienda antes de pedir: la página de producto de Olares enlaza con las políticas de envío y garantía, pero no las indica."
        ],
        "affiliateLinks": [
          {
            "label": "Página de la tienda de Olares →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "Alternativas a considerar",
        "content": "**La mejor alternativa depende de si priorizas el tamaño, la VRAM por dólar o la capacidad de memoria.**",
        "items": [
          "**Quieres la mayor VRAM por dólar y aceptas una torre →** un equipo con GPU de sobremesa; consulta la [guía de compra de GPU](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) y la [guía para montar una estación de trabajo](/es/power-local-llm/local-ai-workstation-build-guide).",
          "**Quieres modelos grandes en una sola reserva de memoria →** un Mac con Apple Silicon y mucha memoria unificada; consulta [el mejor Mac para IA local](/es/power-local-llm/best-mac-for-local-ai-2026).",
          "**Quieres una caja más pequeña y barata para modelos ligeros →** un mini PC Ryzen o Intel; consulta [mini PC de ASUS para IA local](/es/power-local-llm/asus-mini-pc-local-ai) y la [comparativa de mini PC para Home Assistant](/es/smart-home/best-mini-pc-home-assistant-local-ai).",
          "**Te preguntas qué cabe en 24 GB →** la [guía de modelos de 70B en hardware de consumo](/es/local-llms/70b-models-consumer-hardware), que incluye el Olares One."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "Cómo evaluamos",
        "content": "**PromptQuorum no ha probado ningún Olares One.** Esta página separa tres tipos de información para que puedas ver qué está confirmado.",
        "items": [
          "**Publicado por el fabricante:** especificaciones y cifras de ruido de olares.com/one, y el precio de la tienda oficial (ambos consultados el 2026-10-31).",
          "**Afirmaciones del fabricante:** cifras que Olares nos envió por correo, mostradas como afirmaciones y nunca como resultados.",
          "**Estimación de PromptQuorum:** razonamiento sobre qué modelos caben y a qué velocidad, a partir del tamaño de la VRAM y del ancho de banda de memoria; no es una medición."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Preguntas frecuentes",
        "faqs": [
          {
            "q": "¿Qué es el Olares One?",
            "a": "Un ordenador de sobremesa compacto para IA de Olares con un Intel Core Ultra 9 275HX, una RTX 5090 Mobile con 24 GB GDDR7, 96 GB DDR5-5600 y un SSD NVMe de 2 TB, que funciona con Olares OS."
          },
          {
            "q": "¿Cuánto cuesta el Olares One?",
            "a": "La tienda oficial de Olares lo vende por $4,999 USD en su configuración única (consultado el 2026-10-31). Olares también indicó por correo $4,959 y una rebaja de $300 por el Black Friday; PromptQuorum no ha verificado esas ofertas."
          },
          {
            "q": "¿Puede el Olares One ejecutar modelos de 70B?",
            "a": "Sí, con descarga parcial. Un modelo 70B en Q4_K_M es más grande que los 24 GB de VRAM, por lo que parte se ejecuta desde la RAM del sistema DDR5. La estimación de PromptQuorum es de unos 2–4 tokens/s; Olares envió por correo 18–22 tokens/s, cifra que no figura en su página de producto y que no pudimos verificar."
          },
          {
            "q": "¿Cuánto ruido hace el Olares One?",
            "a": "Olares publica 19 dB en reposo y 38.8 dB a plena potencia, medidos a 25 °C y 0.5 m. Un correo de Olares indicó menos de 32 dB a plena carga, lo cual contradice la página de producto."
          },
          {
            "q": "¿Es esta una página de afiliación?",
            "a": "No. PromptQuorum no tiene ningún acuerdo de afiliación con Olares, no añade parámetros de afiliado a los enlaces y no recibe comisión ni tarifa alguna por esta página."
          },
          {
            "q": "¿Probó PromptQuorum el Olares One?",
            "a": "No. Esta página se basa en especificaciones publicadas por el fabricante, afirmaciones del fabricante claramente señaladas y estimaciones de PromptQuorum."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Lecturas relacionadas",
        "items": [
          "[Modelos de 70B en hardware de consumo](/es/local-llms/70b-models-consumer-hardware) — dónde aparece el Olares One en la comparativa de VRAM",
          "[Mini PC de ASUS para IA local](/es/power-local-llm/asus-mini-pc-local-ai) — alternativas más pequeñas en formato mini PC",
          "[Guía de compra de GPU para LLM locales](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM por dólar",
          "[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — el extremo económico de los mini PC"
        ]
      }
    }
  },
  fr: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-fr.webp",
    "affiliateDisclosure": true,
    "title": "Test de l'Olares One : mini-PC IA compact avec RTX 5090 Mobile pour LLM locaux",
    "seoTitle": "Olares One : mini-PC IA RTX 5090 Mobile, $4,999",
    "intro": "L'Olares One est un ordinateur IA de bureau compact (3,5 L selon les chiffres d'Olares) construit autour d'une NVIDIA RTX 5090 Mobile de classe portable avec 24 GB de GDDR7, d'un Intel Core Ultra 9 275HX, de 96 GB de DDR5-5600 (extensibles à 128 GB selon Olares) et d'un SSD NVMe de 2 TB, sous Olares OS. Olares le propose à $4,999 dans sa boutique officielle (vérifié le 2026-10-31). Cette page rassemble les spécifications publiées par le fabricant, les chiffres qu'Olares nous a envoyés par e-mail — présentés comme des affirmations du fabricant et confrontés à la page produit d'Olares — ainsi qu'une lecture PromptQuorum de ce que la machine peut et ne peut pas faire. PromptQuorum n'a pas testé d'exemplaire, n'a aucun accord d'affiliation avec Olares et ne gagne rien avec cette page.",
    "metaDescription": "Test de l'Olares One : RTX 5090 Mobile 24 GB, 96 GB DDR5, prix officiel $4,999. Spécifications, affirmations du fabricant vérifiées sur la page d'Olares, sans lien d'affiliation.",
    "twitterDescription": "Olares One : RTX 5090 Mobile (24 GB), Core Ultra 9 275HX, 96 GB DDR5, prix boutique officielle $4,999. Spécifications, vérification des affirmations du fabricant et avis indépendant, sans affiliation.",
    "readTime": "8 min de lecture",
    "educationalLevel": "Intermediate",
    "audience": "Acheteurs qui comparent un PC de bureau IA compact et prêt à l'emploi pour des modèles de classe 30B et des modèles 70B partiellement déportés",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**L'Olares One est un PC de bureau IA compact avec une RTX 5090 Mobile (24 GB GDDR7), 96 GB de DDR5 et un SSD de 2 TB ; la boutique officielle d'Olares le propose à $4,999 (vérifié le 2026-10-31).** Lecture de PromptQuorum des spécifications publiées : les modèles de taille moyenne (environ classe 30B en 4 bits) tiennent dans la VRAM, tandis que les modèles 70B ne fonctionnent qu'avec un déport partiel vers la RAM système. Olares nous a envoyé par e-mail des chiffres plus rapides pour le 70B et un niveau sonore plus bas ; aucun des deux ne figure sur sa page produit, nous les présentons donc comme des affirmations du fabricant non vérifiées. Ceci n'est pas une page d'affiliation — PromptQuorum n'a aucun accord avec Olares et ne perçoit aucune commission. → [Page produit Olares One](https://www.olares.com/one)",
    "quickAnswerTop": {
      "fr": {
        "question": "L'Olares One est-il un bon PC IA local ?",
        "answer": "C'est une machine solide et prête à l'emploi si vous voulez 24 GB de VRAM GDDR7 rapide dans un petit boîtier silencieux et préférez un système packagé à l'assemblage d'un PC. Pour les modèles 70B, les 24 GB de VRAM sont la limite : une partie du modèle reste dans la RAM système, et la vitesse chute fortement. La page d'Olares ne publie aucun chiffre en tokens par seconde.",
        "bullets": [
          "GPU : NVIDIA RTX 5090 Mobile, 24 GB GDDR7, TGP maximal de 175 W (Olares)",
          "CPU et RAM : Intel Core Ultra 9 275HX, 96 GB (2×48 GB) DDR5-5600, extensibles à 128 GB (Olares)",
          "Stockage et ports : NVMe de 2 TB, second emplacement SSD, Thunderbolt 5, 2.5 GbE, Wi-Fi 7, HDMI 2.1",
          "Prix officiel en boutique $4,999 ; Olares a aussi indiqué par e-mail $4,959 et une remise Black Friday de $300 (affirmations du fabricant)",
          "PromptQuorum n'a aucun accord d'affiliation avec Olares et ne gagne rien avec cette page"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "À acheter si / À éviter si",
        "anchor": "buy-skip-if"
      },
      {
        "label": "L'essentiel en bref",
        "anchor": "tldr"
      },
      {
        "label": "Verdict",
        "anchor": "verdict"
      },
      {
        "label": "Sans affiliation, sans commission",
        "anchor": "no-affiliate"
      },
      {
        "label": "Spécifications",
        "anchor": "specs"
      },
      {
        "label": "Affirmations du fabricant vérifiées",
        "anchor": "vendor-claims"
      },
      {
        "label": "Où acheter et prix actuel",
        "anchor": "where-to-buy"
      },
      {
        "label": "Alternatives",
        "anchor": "alternatives"
      },
      {
        "label": "Notre méthode d'évaluation",
        "anchor": "methodology"
      },
      {
        "label": "FAQ",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "L'Olares One est un ordinateur IA de bureau compact avec une RTX 5090 Mobile (24 GB GDDR7), 96 GB de DDR5 et Olares OS, proposé à $4,999 dans la boutique officielle d'Olares."
      },
      {
        "type": "plain-terms",
        "content": "C'est un petit PC silencieux vendu prêt à faire tourner des modèles d'IA en local. Sa carte graphique dispose de 24 GB de mémoire rapide ; les modèles plus volumineux débordent dans la mémoire principale, plus lente, et tournent bien moins vite. Nous ne l'avons pas testé et nous ne gagnons rien si vous l'achetez."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "À acheter si / À éviter si",
        "highlight": true,
        "content": "Guide de décision rapide — l'Olares One correspond-il à vos besoins ? Lecture de PromptQuorum des spécifications publiées, et non un test pratique.",
        "items": [
          "**Achetez l'Olares One si :**",
          "Vous voulez 24 GB de VRAM GDDR7 dans un petit PC de bureau (320 × 197 × 55 mm, 2.15 kg) plutôt que de monter une tour",
          "Vous voulez un système d'exploitation IA local clé en main (Olares OS) plutôt que d'assembler vous-même pilotes et environnements d'exécution",
          "Vous utilisez surtout des modèles jusqu'à environ 30B en 4 bits, qui tiennent entièrement dans la VRAM",
          "Vous tenez à un faible bruit au repos (Olares indique 19 dB au repos)",
          "**Évitez l'Olares One si :**",
          "Votre objectif principal est l'inférence rapide en 70B — 24 GB de VRAM imposent un déport partiel vers la RAM système",
          "Vous voulez le prix par GB de VRAM le plus bas — un GPU de bureau d'occasion coûte généralement bien moins cher, au prix de l'encombrement et du bruit",
          "Vous avez besoin de benchmarks mesurés de façon indépendante avant d'acheter — la page d'Olares n'en publie aucun, et nous n'avons pas testé d'exemplaire"
        ],
        "affiliateLinks": [
          {
            "label": "Page produit Olares One →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "En bref (TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One : Intel Core Ultra 9 275HX, RTX 5090 Mobile avec 24 GB GDDR7, 96 GB DDR5-5600 (extensibles à 128 GB), NVMe de 2 TB — spécifications tirées de olares.com/one, vérifiées le 2026-10-31",
          "Prix officiel en boutique $4,999 (configuration unique, shop.olares.com, vérifié le 2026-10-31)",
          "Olares nous a envoyé par e-mail un devis à $4,959 et une réduction Black Friday de $300 par unité (du 2026-11-17 au 2026-12-03, GMT-8) — affirmations du fabricant, voir Où acheter",
          "Olares a également indiqué par e-mail 18–22 tokens/s pour Llama 3 70B (Q4_K_M) et moins de 32 dB à pleine charge — aucun de ces chiffres ne figure sur sa page produit, et nous n'avons pu vérifier ni l'un ni l'autre",
          "Estimation PromptQuorum : le 70B Q4_K_M nécessite un déport partiel avec 24 GB de VRAM, donc quelques tokens par seconde sont plus réalistes que 18–22 (voir le guide du 70B)",
          "Ceci n'est pas une page d'affiliation : PromptQuorum n'a aucun accord avec Olares, n'ajoute aucune balise d'affiliation et ne perçoit aucune commission"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Verdict",
        "content": "**L'Olares One est une machine compacte bien dotée, pour ceux qui veulent un PC IA local prêt à l'emploi et acceptent un prix de $4,999.** Ses 24 GB de VRAM GDDR7 conviennent aux modèles de taille moyenne et au traitement rapide des prompts ; ses 96 GB de DDR5 ajoutent de la capacité pour les modèles 70B, mais capacité ne signifie pas vitesse — les couches conservées dans la RAM système tournent à la bande passante de la DDR5. Son principal atout est la praticité et le format, pas le prix par GB de VRAM. Nous n'avons pas testé d'exemplaire : considérez ceci comme une lecture de spécifications publiées, et tenez tout chiffre de benchmark — celui d'Olares comme le nôtre — pour non vérifié tant qu'un test indépendant ne l'a pas confirmé."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "Sans affiliation, sans commission",
        "highlight": true,
        "content": "**Ceci n'est pas une page d'affiliation.** PromptQuorum n'a aucun accord d'affiliation avec Olares, ne reçoit ni commission, ni rémunération, ni paiement pour cette page et n'ajoute aucun paramètre d'affiliation aux liens. La page sur l'Olares One a été rédigée après qu'Olares nous a contactés avec des informations produit ; Olares qualifie lui-même son offre tarifaire de « partner quote », mais c'est la formulation d'Olares et elle ne décrit aucun partenariat avec PromptQuorum.",
        "items": [
          "Les liens vers olares.com et shop.olares.com sont de simples liens de référence qui ne rapportent rien à PromptQuorum, que vous achetiez ou non",
          "Les chiffres que nous a envoyés Olares sont signalés comme affirmations du fabricant partout où ils apparaissent",
          "Lorsqu'une affirmation du fabricant contredit la page produit d'Olares, nous montrons les deux et indiquons laquelle est publiée"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Spécifications de l'Olares One",
        "content": "**Spécifications publiées par le fabricant, relevées sur olares.com/one le 2026-10-31.** Olares ne publie aucun prix de vente sur cette page ; le prix provient de la boutique officielle.",
        "columns": [
          "Composant",
          "Spécification (Olares)"
        ],
        "rows": [
          {
            "Composant": "CPU",
            "Spécification (Olares)": "Intel Core Ultra 9 275HX, 24 cœurs, jusqu'à 5.4 GHz, 36 MB de cache"
          },
          {
            "Composant": "GPU",
            "Spécification (Olares)": "NVIDIA GeForce RTX 5090 Mobile, 24 GB GDDR7, 175 W TGP max"
          },
          {
            "Composant": "Mémoire",
            "Spécification (Olares)": "96 GB (2×48 GB) DDR5-5600, extensibles à 128 GB"
          },
          {
            "Composant": "Stockage",
            "Spécification (Olares)": "SSD NVMe de 2 TB (PCIe 4.0), second emplacement SSD PCIe"
          },
          {
            "Composant": "Ports",
            "Spécification (Olares)": "1× Thunderbolt 5, 1× 2.5 GbE RJ45, 1× USB-A 3.2 Gen2, 1× HDMI 2.1"
          },
          {
            "Composant": "Sans fil",
            "Spécification (Olares)": "Wi-Fi 7, Bluetooth 5.4"
          },
          {
            "Composant": "Dimensions et poids",
            "Spécification (Olares)": "320 × 197 × 55 mm (environ 3.5 L), 2.15 kg (3.1 kg avec l'alimentation)"
          },
          {
            "Composant": "Bruit (mesure en laboratoire d'Olares)",
            "Spécification (Olares)": "19 dB au repos ; 38.8 dB à pleine puissance (GPU 175 W + CPU 55 W), mesuré à 25 °C et 0.5 m"
          },
          {
            "Composant": "Alimentation",
            "Spécification (Olares)": "Alimentation de 330 W ; 30 W en veille ; GPU 95 W en mode silencieux, 175 W en mode performance"
          },
          {
            "Composant": "Logiciel",
            "Spécification (Olares)": "Olares OS (décrit par Olares comme open source), mises à jour système gratuites"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "Affirmations du fabricant vérifiées",
        "content": "**Olares nous a envoyé ces chiffres par e-mail le 2026-10-31. PromptQuorum n'en a reproduit aucun.** Le tableau confronte chaque affirmation à ce qu'Olares publie sur sa propre page produit et à l'estimation de PromptQuorum.",
        "columns": [
          "Affirmation du fabricant (e-mail)",
          "Page produit d'Olares",
          "Statut PromptQuorum"
        ],
        "rows": [
          {
            "Affirmation du fabricant (e-mail)": "Llama 3 70B (Q4_K_M) : environ 18–22 tokens/s en continu",
            "Page produit d'Olares": "Aucun chiffre en tokens par seconde publié",
            "Statut PromptQuorum": "Non vérifié. Un modèle 70B en Q4_K_M dépasse les 24 GB de VRAM, une partie tourne donc depuis la RAM système DDR5 ; notre estimation dans le guide du 70B est d'environ 2–4 tokens/s"
          },
          {
            "Affirmation du fabricant (e-mail)": "« 96 GB de mémoire unifiée » avec la RTX 5090M",
            "Page produit d'Olares": "96 GB de RAM système DDR5 plus 24 GB de VRAM GDDR7 distincts",
            "Statut PromptQuorum": "La page produit décrit des pools de mémoire séparés, pas une mémoire unifiée"
          },
          {
            "Affirmation du fabricant (e-mail)": "Moins de 32 dB à pleine charge continue",
            "Page produit d'Olares": "19 dB au repos, 38.8 dB à pleine puissance, moins de 39 dB à charge maximale (25 °C, 0.5 m)",
            "Statut PromptQuorum": "Contredit le chiffre publié ; nous retenons celui de la page produit"
          },
          {
            "Affirmation du fabricant (e-mail)": "Déploiement multi-unités deepseek-v4.1-flash-10.17 avec une latence locale inférieure à la milliseconde",
            "Page produit d'Olares": "Aucun modèle ni chiffre de latence de ce type publié",
            "Statut PromptQuorum": "Non vérifié : nous n'avons pas pu identifier le nom du modèle, et une latence inférieure à la milliseconde n'est pas un chiffre pertinent pour la génération de texte"
          },
          {
            "Affirmation du fabricant (e-mail)": "« Partner quote » à $4,959 ($40 de moins que $4,999)",
            "Page produit d'Olares": "Non indiqué ; prix en boutique $4,999",
            "Statut PromptQuorum": "Le lien d'offre fourni par Olares indique $4,949 et porte un titre destiné à un autre public ; nous ne le reprenons donc pas (vérifié le 2026-10-31)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "Où acheter et prix actuel",
        "content": "**Les prix et les promotions changent — consultez la page en direct de la boutique.** Prix vérifié : 2026-10-31 sur shop.olares.com (configuration unique).",
        "columns": [
          "Indicateur",
          "Précisions"
        ],
        "rows": [
          {
            "Indicateur": "Prix officiel en boutique",
            "Précisions": "$4,999 USD (shop.olares.com, vérifié le 2026-10-31)"
          },
          {
            "Indicateur": "Devis envoyé par e-mail par Olares",
            "Précisions": "$4,959 USD, $40 de remise, expédition en environ 2 jours ouvrés depuis les entrepôts des États-Unis et de l'UE (affirmation du fabricant, non vérifiée par PromptQuorum)"
          },
          {
            "Indicateur": "Événement Black Friday d'Olares",
            "Précisions": "Du 2026-11-17 00:00 au 2026-12-03 00:00 (GMT-8), $300 USD de remise supplémentaire par unité (affirmation du fabricant) ; commandez via la boutique ou écrivez à Olares en mentionnant « PromptQuorum Partner Quote » pour une allocation anticipée et des lots multi-unités"
          },
          {
            "Indicateur": "Revendeurs tiers",
            "Précisions": "Non vérifiés"
          }
        ],
        "items": [
          "PromptQuorum ne gagne rien sur aucun achat : les liens de cette page sont de simples liens de référence et ne comportent aucune balise d'affiliation.",
          "Confirmez le prix final, la livraison, les droits d'importation et les conditions de garantie sur la page de la boutique avant de commander — la page produit d'Olares renvoie vers les politiques de livraison et de garantie mais ne les indique pas."
        ],
        "affiliateLinks": [
          {
            "label": "Page de la boutique Olares →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "Alternatives à envisager",
        "content": "**La bonne alternative dépend de ce que vous privilégiez : le format, la VRAM par dollar ou la capacité mémoire.**",
        "items": [
          "**Vous voulez le plus de VRAM par dollar et acceptez une tour →** un PC monté avec un GPU de bureau ; voir le [guide d'achat des GPU](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) et le [guide de montage d'une station de travail](/fr/power-local-llm/local-ai-workstation-build-guide).",
          "**Vous voulez de grands modèles dans un seul pool de mémoire →** un Mac Apple Silicon avec beaucoup de mémoire unifiée ; voir [le meilleur Mac pour l'IA locale](/fr/power-local-llm/best-mac-for-local-ai-2026).",
          "**Vous voulez une machine plus petite et moins chère pour des modèles légers →** un mini-PC Ryzen ou Intel ; voir [les mini-PC ASUS pour l'IA locale](/fr/power-local-llm/asus-mini-pc-local-ai) et le [comparatif de mini-PC pour Home Assistant](/fr/smart-home/best-mini-pc-home-assistant-local-ai).",
          "**Vous vous demandez ce qui tient dans 24 GB →** le [guide des modèles 70B sur matériel grand public](/fr/local-llms/70b-models-consumer-hardware), qui inclut l'Olares One."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "Notre méthode d'évaluation",
        "content": "**PromptQuorum n'a pas testé d'Olares One.** Cette page distingue trois types d'informations afin que vous voyiez ce qui est confirmé.",
        "items": [
          "**Publié par le fabricant :** spécifications et niveaux sonores issus de olares.com/one, et prix de la boutique officielle (tous deux vérifiés le 2026-10-31).",
          "**Affirmations du fabricant :** chiffres qu'Olares nous a envoyés par e-mail — présentés comme des affirmations, jamais comme des résultats.",
          "**Estimation PromptQuorum :** raisonnement sur la capacité à charger un modèle et sur la vitesse, à partir de la taille de la VRAM et de la bande passante mémoire, et non une mesure."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Questions fréquentes",
        "faqs": [
          {
            "q": "Qu'est-ce que l'Olares One ?",
            "a": "Un ordinateur IA de bureau compact d'Olares, avec un Intel Core Ultra 9 275HX, une RTX 5090 Mobile avec 24 GB GDDR7, 96 GB de DDR5-5600 et un SSD NVMe de 2 TB, sous Olares OS."
          },
          {
            "q": "Combien coûte l'Olares One ?",
            "a": "La boutique officielle d'Olares l'affiche à $4,999 USD pour sa configuration unique (vérifié le 2026-10-31). Olares a aussi indiqué par e-mail $4,959 et une remise Black Friday de $300 ; PromptQuorum n'a pas vérifié ces offres."
          },
          {
            "q": "L'Olares One peut-il faire tourner des modèles 70B ?",
            "a": "Oui, avec un déport partiel. Un modèle 70B en Q4_K_M dépasse les 24 GB de VRAM, une partie tourne donc depuis la RAM système DDR5. L'estimation de PromptQuorum est d'environ 2–4 tokens/s ; Olares a indiqué par e-mail 18–22 tokens/s, un chiffre absent de sa page produit et que nous n'avons pas pu vérifier."
          },
          {
            "q": "Quel est le niveau sonore de l'Olares One ?",
            "a": "Olares publie 19 dB au repos et 38.8 dB à pleine puissance, mesurés à 25 °C et 0.5 m. Un e-mail d'Olares indiquait moins de 32 dB à pleine charge, ce qui contredit la page produit."
          },
          {
            "q": "S'agit-il d'une page d'affiliation ?",
            "a": "Non. PromptQuorum n'a aucun accord d'affiliation avec Olares, n'ajoute aucun paramètre d'affiliation aux liens et ne perçoit ni commission ni rémunération pour cette page."
          },
          {
            "q": "PromptQuorum a-t-il testé l'Olares One ?",
            "a": "Non. Cette page s'appuie sur les spécifications publiées par le fabricant, sur des affirmations du fabricant clairement signalées et sur des estimations de PromptQuorum."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "À lire aussi",
        "items": [
          "[Modèles 70B sur matériel grand public](/fr/local-llms/70b-models-consumer-hardware) — où l'Olares One apparaît dans la comparaison de VRAM",
          "[Mini-PC ASUS pour l'IA locale](/fr/power-local-llm/asus-mini-pc-local-ai) — alternatives en mini-PC plus compacts",
          "[Guide d'achat des meilleurs GPU pour LLM locaux](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — la VRAM par dollar",
          "[Les meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — l'entrée de gamme des mini-PC"
        ]
      }
    }
  },
  ja: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-ja.webp",
    "affiliateDisclosure": true,
    "title": "Olares One レビュー：ローカルLLM向けのコンパクトなRTX 5090 Mobile搭載AIデスクトップ",
    "seoTitle": "Olares One レビュー：RTX 5090 Mobile搭載AIボックス、$4,999",
    "intro": "Olares Oneは、コンパクトなデスクトップ型AIコンピューターです（容積はOlares自身の公表値で3.5 L）。ノートPC向けのNVIDIA RTX 5090 Mobile（24 GB GDDR7）、Intel Core Ultra 9 275HX、96 GB DDR5-5600（Olaresによると128 GBまで増設可能）、2 TB NVMe SSDを搭載し、Olares OSで動作します。Olaresは公式ショップで$4,999としています（2026-10-31確認）。本ページでは、メーカーが公開している仕様、Olaresがメールで送ってきた数値（ベンダー主張と明記し、Olares自身の製品ページと照合）、そしてこのボックスにできること・できないことについてのPromptQuorumの見解をまとめています。PromptQuorumは実機をテストしておらず、Olaresとのアフィリエイト契約もなく、本ページから収益を得ていません。",
    "metaDescription": "Olares One レビュー：RTX 5090 Mobile 24 GB、96 GB DDR5、公式価格$4,999。仕様、Olares公式ページと照合したベンダー主張、アフィリエイトリンクなし。",
    "twitterDescription": "Olares One：RTX 5090 Mobile（24 GB）、Core Ultra 9 275HX、96 GB DDR5、公式ショップ価格$4,999。仕様、ベンダー主張の検証、アフィリエイトに依存しない独立した評価。",
    "readTime": "読了目安 8分",
    "educationalLevel": "Intermediate",
    "audience": "30Bクラスのモデルや、一部をオフロードして動かす70Bモデル向けに、コンパクトで完成品のローカルAIデスクトップを検討している購入者",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**Olares Oneは、RTX 5090 Mobile（24 GB GDDR7）、96 GB DDR5、2 TB SSDを搭載したコンパクトなAIデスクトップで、Olares公式ショップでは$4,999です（2026-10-31確認）。** 公開仕様に基づくPromptQuorumの見立てでは、中規模モデル（4ビットで約30Bクラス）はVRAMに収まり、70Bモデルはシステムメモリへの部分オフロードを伴う場合にのみ動作します。Olaresはより高速な70Bの数値と、より低い騒音値をメールで送ってきましたが、どちらも製品ページには記載がないため、未検証のベンダー主張として掲載しています。本ページはアフィリエイトページではありません。PromptQuorumはOlaresと契約を結んでおらず、手数料も受け取っていません。→ [Olares One 製品ページ](https://www.olares.com/one)",
    "quickAnswerTop": {
      "ja": {
        "question": "Olares OneはローカルAI向けデスクトップとして優れているか？",
        "answer": "小型で静かな筐体に高速なGDDR7のVRAMを24 GB載せたい人、PCを自作するよりパッケージ化されたOSを選びたい人にとっては、完成度の高いボックスです。70Bモデルでは24 GBのVRAMが限界となり、モデルの一部がシステムメモリに置かれるため、速度は大きく落ちます。Olares自身のページには、1秒あたりのトークン数の数値は掲載されていません。",
        "bullets": [
          "GPU：NVIDIA RTX 5090 Mobile、24 GB GDDR7、最大TGP 175 W（Olares）",
          "CPUとメモリ：Intel Core Ultra 9 275HX、96 GB（2×48 GB）DDR5-5600、128 GBまで増設可能（Olares）",
          "ストレージとポート：2 TB NVMe、2基目のSSDスロット、Thunderbolt 5、2.5 GbE、Wi-Fi 7、HDMI 2.1",
          "公式ショップ価格は$4,999。Olaresはメールで$4,959の見積もりと、ブラックフライデーの$300値引きも提示（ベンダー主張）",
          "PromptQuorumはOlaresとアフィリエイト契約を結んでおらず、本ページから収益を得ていません"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "こんな人は買い／見送り",
        "anchor": "buy-skip-if"
      },
      {
        "label": "TL;DR",
        "anchor": "tldr"
      },
      {
        "label": "総評",
        "anchor": "verdict"
      },
      {
        "label": "アフィリエイトなし、手数料なし",
        "anchor": "no-affiliate"
      },
      {
        "label": "仕様",
        "anchor": "specs"
      },
      {
        "label": "検証したベンダー主張",
        "anchor": "vendor-claims"
      },
      {
        "label": "購入先と現在の価格",
        "anchor": "where-to-buy"
      },
      {
        "label": "代替製品",
        "anchor": "alternatives"
      },
      {
        "label": "評価方法",
        "anchor": "methodology"
      },
      {
        "label": "FAQ",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "Olares Oneは、RTX 5090 Mobile（24 GB GDDR7）、96 GB DDR5、Olares OSを搭載したコンパクトなデスクトップ型AIコンピューターで、Olares公式ショップでは$4,999で販売されています。"
      },
      {
        "type": "plain-terms",
        "content": "ローカルAIモデルをすぐに動かせる状態で販売されている、小型で静かなPCです。グラフィックスカードには高速なメモリが24 GB載っており、それを超える大きさのモデルは低速なメインメモリにあふれ、動作がずっと遅くなります。私たちは実機をテストしておらず、購入されても収益は得ません。"
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "こんな人は買い／見送り",
        "highlight": true,
        "content": "Olares Oneはあなたのニーズに合うか、簡単な判断ガイドです。公開仕様に基づくPromptQuorumの見解であり、実機テストの結果ではありません。",
        "items": [
          "**次のような人はOlares Oneを買う：**",
          "タワー型PCを組む代わりに、小型のデスクトップ（320 × 197 × 55 mm、2.15 kg）で24 GBのGDDR7 VRAMを使いたい",
          "ドライバーやランタイムを自分で組み合わせるのではなく、パッケージ化されたローカルAI向けOS（Olares OS）を使いたい",
          "主に4ビットでおよそ30Bまでのモデルを動かし、すべてがVRAMに収まる使い方をする",
          "アイドル時の静音性を重視する（Olaresはアイドル時19 dBと公表）",
          "**次のような人はOlares Oneを見送る：**",
          "70Bの高速推論が最大の目的 — 24 GBのVRAMではシステムメモリへの部分オフロードが避けられない",
          "VRAM 1 GBあたりの価格を最小にしたい — 中古のデスクトップ用GPUのほうが通常ははるかに安い（その代わりサイズと騒音は大きくなる）",
          "購入前に第三者による実測ベンチマークが必要 — Olaresのページには掲載がなく、私たちも実機をテストしていない"
        ],
        "affiliateLinks": [
          {
            "label": "Olares One 製品ページ →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "要点(TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One：Intel Core Ultra 9 275HX、24 GB GDDR7のRTX 5090 Mobile、96 GB DDR5-5600（128 GBまで増設可能）、2 TB NVMe — 仕様はolares.com/oneより、2026-10-31確認",
          "公式ショップ価格は$4,999（単一構成、shop.olares.com、2026-10-31確認）",
          "Olaresはメールで$4,959の見積もりと、1台あたり$300のブラックフライデー値引き（2026-11-17〜2026-12-03、GMT-8）を提示 — ベンダー主張です。「購入先と現在の価格」を参照",
          "Olaresはまた、Llama 3 70B（Q4_K_M）で18〜22 tokens/s、フルロード時に32 dB未満とメールで伝えてきた — どちらの数値も製品ページには記載がなく、私たちはどちらも検証できなかった",
          "PromptQuorumの推定：24 GBのVRAMでは70B Q4_K_Mに部分オフロードが必要で、18〜22よりも毎秒数トークンのほうが現実的（70Bガイドを参照）",
          "本ページはアフィリエイトページではありません。PromptQuorumはOlaresと契約を結んでおらず、アフィリエイトタグも付けず、手数料も受け取っていません"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "総評",
        "content": "**Olares Oneは、完成品のローカルAIデスクトップを求め、$4,999という価格を受け入れられる人に向けた、仕様の充実したコンパクトなボックスです。** 24 GBのGDDR7 VRAMは中規模モデルと高速なプロンプト処理に向いています。96 GBのDDR5は70Bモデルのための容量を加えますが、容量は速度ではありません — システムメモリに置かれたレイヤーはDDR5の帯域幅で動作します。最大の魅力は利便性とサイズであり、VRAM 1 GBあたりの価格ではありません。私たちは実機をテストしていないため、本ページは公開仕様の読み解きとして扱ってください。また、Olaresのものでも私たちのものでも、ベンチマークの数値は第三者のテストで確認されるまで未検証として扱ってください。"
      },
      "independence": {
        "id": "no-affiliate",
        "title": "アフィリエイトなし、手数料なし",
        "highlight": true,
        "content": "**本ページはアフィリエイトページではありません。** PromptQuorumはOlaresとアフィリエイト契約を結んでおらず、本ページについて手数料・報酬・支払いを一切受け取らず、どのリンクにもアフィリエイト用パラメーターを付けていません。Olares Oneのページは、Olaresから製品情報の連絡を受けて作成しました。Olares自身は価格提示を「partner quote」と呼んでいますが、これはOlaresの用語であり、PromptQuorumとの提携関係を示すものではありません。",
        "items": [
          "olares.comおよびshop.olares.comへのリンクは単なる参照用リンクであり、購入の有無にかかわらずPromptQuorumには何の収益ももたらしません",
          "Olaresから送られてきた数値は、掲載箇所のすべてでベンダー主張と明記しています",
          "ベンダー主張がOlares自身の製品ページと食い違う場合は、両方を示し、どちらが公開されているかを明記します"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Olares One の仕様",
        "content": "**メーカーが公開している仕様。2026-10-31にolares.com/oneから取得。** Olaresはそのページに小売価格を掲載していません。価格は公式ショップのものです。",
        "columns": [
          "コンポーネント",
          "仕様（Olares）"
        ],
        "rows": [
          {
            "コンポーネント": "CPU",
            "仕様（Olares）": "Intel Core Ultra 9 275HX、24コア、最大5.4 GHz、36 MBキャッシュ"
          },
          {
            "コンポーネント": "GPU",
            "仕様（Olares）": "NVIDIA GeForce RTX 5090 Mobile、24 GB GDDR7、最大TGP 175 W"
          },
          {
            "コンポーネント": "メモリ",
            "仕様（Olares）": "96 GB（2×48 GB）DDR5-5600、128 GBまで増設可能"
          },
          {
            "コンポーネント": "ストレージ",
            "仕様（Olares）": "2 TB NVMe SSD（PCIe 4.0）、2基目のPCIe SSDスロット"
          },
          {
            "コンポーネント": "ポート",
            "仕様（Olares）": "Thunderbolt 5 ×1、2.5 GbE RJ45 ×1、USB-A 3.2 Gen2 ×1、HDMI 2.1 ×1"
          },
          {
            "コンポーネント": "ワイヤレス",
            "仕様（Olares）": "Wi-Fi 7、Bluetooth 5.4"
          },
          {
            "コンポーネント": "サイズと重量",
            "仕様（Olares）": "320 × 197 × 55 mm（約3.5 L）、2.15 kg（電源アダプター込みで3.1 kg）"
          },
          {
            "コンポーネント": "騒音（Olaresのラボ測定値）",
            "仕様（Olares）": "アイドル時19 dB、フルパワー時38.8 dB（GPU 175 W + CPU 55 W）、25 °C・0.5 mで測定"
          },
          {
            "コンポーネント": "電源",
            "仕様（Olares）": "330 W電源アダプター、待機時30 W、GPUはサイレントモードで95 W、パフォーマンスモードで175 W"
          },
          {
            "コンポーネント": "ソフトウェア",
            "仕様（Olares）": "Olares OS（Olaresはオープンソースと説明）、システムアップデートは無料"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "検証したベンダー主張",
        "content": "**Olaresは2026-10-31に、以下の数値をメールで送ってきました。PromptQuorumはそのいずれも再現していません。** この表では、各主張をOlaresが自社の製品ページで公開している内容、およびPromptQuorumの推定と並べて示しています。",
        "columns": [
          "ベンダー主張（メール）",
          "Olares製品ページ",
          "PromptQuorumの判定"
        ],
        "rows": [
          {
            "ベンダー主張（メール）": "Llama 3 70B（Q4_K_M）：継続して約18〜22 tokens/s",
            "Olares製品ページ": "tokens/sの数値は公開されていない",
            "PromptQuorumの判定": "未検証。Q4_K_Mの70Bモデルは24 GBのVRAMより大きく、一部はDDR5のシステムメモリから動作する。70Bガイドでの私たちの推定は約2〜4 tokens/s"
          },
          {
            "ベンダー主張（メール）": "RTX 5090Mと「96 GBのユニファイドメモリ」",
            "Olares製品ページ": "96 GBのDDR5システムメモリと、別に24 GBのGDDR7 VRAM",
            "PromptQuorumの判定": "製品ページはユニファイドメモリではなく、別々のメモリプールと説明している"
          },
          {
            "ベンダー主張（メール）": "継続的なフルロード時に32 dB未満",
            "Olares製品ページ": "アイドル時19 dB、フルパワー時38.8 dB、最大負荷時39 dB未満（25 °C、0.5 m）",
            "PromptQuorumの判定": "公開されている数値と矛盾する。私たちは製品ページの数値を採用する"
          },
          {
            "ベンダー主張（メール）": "deepseek-v4.1-flash-10.17のマルチユニット展開、ミリ秒未満のローカルレイテンシ",
            "Olares製品ページ": "そのようなモデルやレイテンシの数値は公開されていない",
            "PromptQuorumの判定": "未検証：モデル名を特定できず、ミリ秒未満のレイテンシはテキスト生成において意味のある数値ではない"
          },
          {
            "ベンダー主張（メール）": "$4,959の「partner quote」（$4,999から$40引き）",
            "Olares製品ページ": "掲載なし。ショップ価格は$4,999",
            "PromptQuorumの判定": "Olaresが提示したオファーのリンクは$4,949と表示され、別の対象者向けのタイトルが付いているため、リンクは掲載しない（2026-10-31確認）"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "購入先と現在の価格",
        "content": "**価格やキャンペーンは変わります。最新のショップページをご確認ください。** 価格確認日：2026-10-31、shop.olares.com（単一構成）。",
        "columns": [
          "項目",
          "ガイダンス"
        ],
        "rows": [
          {
            "項目": "公式ショップ価格",
            "ガイダンス": "$4,999 USD（shop.olares.com、2026-10-31確認）"
          },
          {
            "項目": "Olaresのメール見積もり",
            "ガイダンス": "$4,959 USD、$40引き、米国およびEUの倉庫から約2営業日で出荷（ベンダー主張、PromptQuorumは未検証）"
          },
          {
            "項目": "Olaresのブラックフライデーイベント",
            "ガイダンス": "2026-11-17 00:00から2026-12-03 00:00（GMT-8）まで、1台あたりさらに$300 USD引き（ベンダー主張）。ショップから注文するか、Olaresにメールで「PromptQuorum Partner Quote」と伝えると、先行割り当てやマルチユニットバンドルの案内を受けられる"
          },
          {
            "項目": "サードパーティの販売店",
            "ガイダンス": "未確認"
          }
        ],
        "items": [
          "PromptQuorumは、どの購入からも収益を得ません。本ページのリンクは単なる参照用リンクで、アフィリエイトタグは付いていません。",
          "注文前に、最終価格、送料、輸入関税、保証条件をショップページで必ず確認してください — Olaresの製品ページは配送ポリシーと保証ポリシーへリンクしていますが、その内容自体は記載していません。"
        ],
        "affiliateLinks": [
          {
            "label": "Olares ショップページ →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "検討したい代替製品",
        "content": "**どの代替製品が適しているかは、サイズ、ドルあたりのVRAM、メモリ容量のどれを重視するかによって決まります。**",
        "items": [
          "**ドルあたりのVRAMを最大にしたい、タワー型でも構わない →** デスクトップ用GPUで組むPC。[GPU購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026)と[ワークステーション構築ガイド](/ja/power-local-llm/local-ai-workstation-build-guide)を参照。",
          "**大きなモデルを単一のメモリプールで動かしたい →** 大容量のユニファイドメモリを備えたApple Silicon搭載Mac。[ローカルAI向けのおすすめMac](/ja/power-local-llm/best-mac-for-local-ai-2026)を参照。",
          "**軽量なモデル向けに、より小さく安価なボックスが欲しい →** RyzenまたはIntel搭載のミニPC。[ローカルAI向けASUSミニPC](/ja/power-local-llm/asus-mini-pc-local-ai)と[Home Assistant向けミニPCまとめ](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。",
          "**24 GBに何が収まるのか知りたい →** [コンシューマー向けハードウェアで動かす70Bモデルのガイド](/ja/local-llms/70b-models-consumer-hardware)。Olares Oneも掲載しています。"
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "評価方法",
        "content": "**PromptQuorumはOlares Oneをテストしていません。** 本ページでは、何が確認済みなのかが分かるよう、3種類の情報を区別しています。",
        "items": [
          "**メーカー公開情報：** olares.com/oneの仕様と騒音値、公式ショップの価格（いずれも2026-10-31確認）。",
          "**ベンダー主張：** Olaresがメールで送ってきた数値 — 主張として示し、結果としては決して扱いません。",
          "**PromptQuorumの推定：** VRAM容量とメモリ帯域幅に基づく、モデルの収まり具合と速度の考察であり、実測ではありません。"
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "よくある質問",
        "faqs": [
          {
            "q": "Olares Oneとは？",
            "a": "OlaresによるコンパクトなデスクトップAIコンピューターで、Intel Core Ultra 9 275HX、24 GB GDDR7のRTX 5090 Mobile、96 GB DDR5-5600、2 TB NVMe SSDを搭載し、Olares OSで動作します。"
          },
          {
            "q": "Olares Oneの価格は？",
            "a": "Olares公式ショップでは、単一構成で$4,999 USDとなっています（2026-10-31確認）。Olaresはメールで$4,959の見積もりとブラックフライデーの$300値引きも提示しましたが、PromptQuorumはこれらのオファーを検証していません。"
          },
          {
            "q": "Olares Oneで70Bモデルは動かせる？",
            "a": "部分オフロードを使えば動かせます。Q4_K_Mの70Bモデルは24 GBのVRAMより大きいため、一部はDDR5のシステムメモリから動作します。PromptQuorumの推定は約2〜4 tokens/sです。Olaresは18〜22 tokens/sとメールで伝えてきましたが、これは製品ページに掲載されておらず、私たちは検証できませんでした。"
          },
          {
            "q": "Olares Oneの騒音はどのくらい？",
            "a": "Olaresは、25 °C・0.5 mでの測定値として、アイドル時19 dB、フルパワー時38.8 dBと公表しています。Olaresからのメールではフルロード時に32 dB未満とされていましたが、これは製品ページと矛盾しています。"
          },
          {
            "q": "これはアフィリエイトページ？",
            "a": "いいえ。PromptQuorumはOlaresとアフィリエイト契約を結んでおらず、リンクにアフィリエイト用パラメーターを付けず、本ページから手数料や報酬も受け取っていません。"
          },
          {
            "q": "PromptQuorumはOlares Oneをテストした？",
            "a": "いいえ。本ページは、メーカーが公開している仕様、ベンダー主張と明記した情報、そしてPromptQuorumの推定に基づいています。"
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "関連記事",
        "items": [
          "[コンシューマー向けハードウェアで動かす70Bモデル](/ja/local-llms/70b-models-consumer-hardware) — VRAM比較にOlares Oneが登場",
          "[ローカルAI向けASUSミニPC](/ja/power-local-llm/asus-mini-pc-local-ai) — より小型のミニPCという代替案",
          "[ローカルLLM向けGPU購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ドルあたりのVRAM",
          "[Home Assistant＋ローカルAI向けおすすめミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — ミニPCの低価格帯"
        ]
      }
    }
  },
  ko: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-ko.webp",
    "affiliateDisclosure": true,
    "title": "Olares One 리뷰: 로컬 LLM용 소형 RTX 5090 Mobile AI 데스크톱",
    "seoTitle": "Olares One 리뷰: RTX 5090 Mobile AI 박스, $4,999",
    "intro": "Olares One은 노트북급 NVIDIA RTX 5090 Mobile(24 GB GDDR7), Intel Core Ultra 9 275HX, 96 GB DDR5-5600(Olares에 따르면 128 GB까지 업그레이드 가능), 2 TB NVMe SSD를 탑재하고 Olares OS로 구동되는 소형 데스크톱 AI 컴퓨터입니다(Olares 자체 수치 기준 3.5 L). Olares는 공식 쇼핑몰에서 이 제품을 $4,999에 판매합니다(2026-10-31 확인). 이 페이지는 제조사가 공개한 사양, Olares가 이메일로 보내온 수치(공급사 주장으로 표시하고 Olares 자체 제품 페이지와 대조해 확인), 그리고 이 제품으로 무엇을 할 수 있고 무엇을 할 수 없는지에 대한 PromptQuorum의 해석을 정리한 것입니다. PromptQuorum은 실제 제품을 테스트하지 않았고, Olares와 제휴 계약이 없으며, 이 페이지로 어떤 수익도 얻지 않습니다.",
    "metaDescription": "Olares One 리뷰: RTX 5090 Mobile 24 GB, 96 GB DDR5, 공식 가격 $4,999. 사양, Olares 자체 페이지와 대조한 공급사 주장, 제휴 링크 없음.",
    "twitterDescription": "Olares One: RTX 5090 Mobile(24 GB), Core Ultra 9 275HX, 96 GB DDR5, 공식 쇼핑몰 가격 $4,999. 사양, 공급사 주장 검증, 독립적인 비제휴 평가.",
    "readTime": "읽는 데 8분",
    "educationalLevel": "Intermediate",
    "audience": "30B급 모델과 일부 오프로드를 거치는 70B 모델을 위해 완제품 소형 로컬 AI 데스크톱을 고려하는 구매자",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**Olares One은 RTX 5090 Mobile(24 GB GDDR7), 96 GB DDR5, 2 TB SSD를 갖춘 소형 AI 데스크톱이며, Olares 공식 쇼핑몰 가격은 $4,999입니다(2026-10-31 확인).** 공개된 사양에 대한 PromptQuorum의 해석: 중간 규모 모델(4비트 기준 약 30B급)은 VRAM에 들어가지만, 70B 모델은 시스템 RAM으로 일부를 오프로드해야만 실행됩니다. Olares는 더 빠른 70B 수치와 더 낮은 소음 수치를 이메일로 보내왔지만, 두 수치 모두 제품 페이지에는 나와 있지 않으므로 검증되지 않은 공급사 주장으로 표시합니다. 이 페이지는 제휴 페이지가 아닙니다. PromptQuorum은 Olares와 어떤 계약도 없으며 수수료를 받지 않습니다. → [Olares One 제품 페이지](https://www.olares.com/one)",
    "quickAnswerTop": {
      "ko": {
        "question": "Olares One은 쓸 만한 로컬 AI 데스크톱인가요?",
        "answer": "작고 조용한 본체에 빠른 GDDR7 VRAM 24 GB를 원하고, PC를 직접 조립하기보다 패키지된 OS를 선호한다면 완성도 높은 완제품입니다. 70B 모델의 경우 24 GB VRAM이 한계입니다. 모델 일부가 시스템 RAM에 올라가므로 속도가 크게 떨어집니다. Olares 자체 페이지에는 초당 토큰 수 수치가 공개되어 있지 않습니다.",
        "bullets": [
          "GPU: NVIDIA RTX 5090 Mobile, 24 GB GDDR7, 최대 TGP 175 W (Olares)",
          "CPU 및 RAM: Intel Core Ultra 9 275HX, 96 GB(2×48 GB) DDR5-5600, 128 GB까지 업그레이드 가능 (Olares)",
          "저장장치 및 포트: 2 TB NVMe, 두 번째 SSD 슬롯, Thunderbolt 5, 2.5 GbE, Wi-Fi 7, HDMI 2.1",
          "공식 쇼핑몰 가격 $4,999. Olares는 이메일로 $4,959와 블랙 프라이데이 $300 할인도 제시했습니다(공급사 주장)",
          "PromptQuorum은 Olares와 제휴 계약이 없으며 이 페이지로 어떤 수익도 얻지 않습니다"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "구매 vs 비추천",
        "anchor": "buy-skip-if"
      },
      {
        "label": "요약",
        "anchor": "tldr"
      },
      {
        "label": "평가",
        "anchor": "verdict"
      },
      {
        "label": "제휴 없음, 수수료 없음",
        "anchor": "no-affiliate"
      },
      {
        "label": "사양",
        "anchor": "specs"
      },
      {
        "label": "확인한 공급사 주장",
        "anchor": "vendor-claims"
      },
      {
        "label": "구매처 및 현재 가격",
        "anchor": "where-to-buy"
      },
      {
        "label": "대안",
        "anchor": "alternatives"
      },
      {
        "label": "평가 방법",
        "anchor": "methodology"
      },
      {
        "label": "자주 묻는 질문",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "Olares One은 RTX 5090 Mobile(24 GB GDDR7), 96 GB DDR5, Olares OS를 갖춘 소형 데스크톱 AI 컴퓨터로, Olares 공식 쇼핑몰 가격은 $4,999입니다."
      },
      {
        "type": "plain-terms",
        "content": "로컬 AI 모델을 바로 실행할 수 있도록 판매되는 작고 조용한 PC입니다. 그래픽 카드에는 빠른 메모리가 24 GB 있으며, 이보다 큰 모델은 더 느린 메인 메모리로 넘어가 훨씬 느리게 실행됩니다. 저희는 테스트하지 않았고, 구매하셔도 저희는 아무 수익도 얻지 않습니다."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "구매 vs 비추천",
        "highlight": true,
        "content": "빠른 판단 가이드: Olares One이 내게 맞을까요? 직접 사용해 본 테스트가 아니라 공개된 사양에 대한 PromptQuorum의 해석입니다.",
        "items": [
          "**다음에 해당하면 Olares One을 구매하세요:**",
          "타워형 PC를 조립하는 대신 작은 데스크톱(320 × 197 × 55 mm, 2.15 kg)에 GDDR7 VRAM 24 GB를 원하는 경우",
          "드라이버와 런타임을 직접 구성하기보다 패키지된 로컬 AI 운영체제(Olares OS)를 원하는 경우",
          "4비트 기준 약 30B까지의 모델, 즉 전부 VRAM에 들어가는 모델을 주로 실행하는 경우",
          "낮은 유휴 소음을 중시하는 경우(Olares는 유휴 시 19 dB를 공개)",
          "**다음에 해당하면 Olares One을 건너뛰세요:**",
          "빠른 70B 추론이 주된 목표인 경우. 24 GB VRAM으로는 시스템 RAM으로의 부분 오프로드가 불가피합니다",
          "VRAM GB당 최저 가격을 원하는 경우. 중고 데스크톱 GPU가 대체로 훨씬 저렴하지만, 크기와 소음을 감수해야 합니다",
          "구매 전에 독립적으로 측정된 벤치마크가 필요한 경우. Olares 페이지에는 벤치마크가 없고, 저희도 제품을 테스트하지 않았습니다"
        ],
        "affiliateLinks": [
          {
            "label": "Olares One 제품 페이지 →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "요약(TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One: Intel Core Ultra 9 275HX, 24 GB GDDR7의 RTX 5090 Mobile, 96 GB DDR5-5600(128 GB까지 업그레이드 가능), 2 TB NVMe. 사양은 olares.com/one 기준, 2026-10-31 확인",
          "공식 쇼핑몰 가격 $4,999(단일 구성, shop.olares.com, 2026-10-31 확인)",
          "Olares는 이메일로 $4,959 견적과 대당 $300 블랙 프라이데이 할인(2026-11-17 ~ 2026-12-03, GMT-8)을 보내왔습니다. 공급사 주장이며, 구매처 및 현재 가격 참조",
          "Olares는 또한 Llama 3 70B(Q4_K_M)에서 18–22 tokens/s, 최대 부하에서 32 dB 미만이라는 수치를 이메일로 보냈습니다. 두 수치 모두 제품 페이지에 없으며, 저희도 어느 쪽도 검증하지 못했습니다",
          "PromptQuorum 추정: 70B Q4_K_M은 24 GB VRAM에서 부분 오프로드가 필요하므로, 18–22보다 초당 몇 토큰 수준이 더 현실적입니다(70B 가이드 참조)",
          "이 페이지는 제휴 페이지가 아닙니다. PromptQuorum은 Olares와 계약이 없고, 제휴 태그를 붙이지 않으며, 수수료를 받지 않습니다"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "평가",
        "content": "**Olares One은 완제품 로컬 AI 데스크톱을 원하고 $4,999라는 가격을 받아들일 수 있는 사람에게 잘 갖춰진 소형 박스입니다.** 24 GB GDDR7 VRAM은 중간 규모 모델과 빠른 프롬프트 처리에 적합하고, 96 GB DDR5는 70B 모델을 위한 용량을 더해 주지만, 용량이 곧 속도는 아닙니다. 시스템 RAM에 놓인 레이어는 DDR5 대역폭으로 실행됩니다. 이 제품의 가장 강력한 근거는 편의성과 크기이지, VRAM GB당 가격이 아닙니다. 저희는 제품을 테스트하지 않았으므로 이 글은 공개된 사양에 대한 해석으로 받아들이시고, Olares의 수치든 저희의 수치든 독립적인 테스트로 확인되기 전까지는 모든 벤치마크 수치를 검증되지 않은 것으로 간주하세요."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "제휴 없음, 수수료 없음",
        "highlight": true,
        "content": "**이 페이지는 제휴 페이지가 아닙니다.** PromptQuorum은 Olares와 제휴 계약이 없으며, 이 페이지에 대해 수수료, 요금, 대가를 일체 받지 않고, 어떤 링크에도 제휴 파라미터를 붙이지 않습니다. Olares One 페이지는 Olares가 제품 정보를 가지고 저희에게 연락해 온 뒤에 작성되었습니다. Olares는 자사의 가격 제안을 \"partner quote\"라고 부르지만, 이는 Olares의 표현일 뿐 PromptQuorum과의 파트너십을 의미하지 않습니다.",
        "items": [
          "olares.com과 shop.olares.com으로 연결되는 링크는 단순 참조 링크이며, 구매 여부와 관계없이 PromptQuorum에는 아무 수익도 발생하지 않습니다",
          "Olares가 저희에게 보내온 수치는 어디에 나오든 공급사 주장으로 표시합니다",
          "공급사 주장이 Olares 자체 제품 페이지와 상충하는 경우, 양쪽을 모두 보여 주고 어느 쪽이 공개된 수치인지 밝힙니다"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Olares One 사양",
        "content": "**제조사가 공개한 사양이며, 2026-10-31에 olares.com/one에서 가져왔습니다.** Olares는 해당 페이지에 소비자 가격을 게시하지 않으며, 가격은 공식 쇼핑몰에서 가져왔습니다.",
        "columns": [
          "구성 요소",
          "사양 (Olares)"
        ],
        "rows": [
          {
            "구성 요소": "CPU",
            "사양 (Olares)": "Intel Core Ultra 9 275HX, 24코어, 최대 5.4 GHz, 36 MB 캐시"
          },
          {
            "구성 요소": "GPU",
            "사양 (Olares)": "NVIDIA GeForce RTX 5090 Mobile, 24 GB GDDR7, 최대 TGP 175 W"
          },
          {
            "구성 요소": "메모리",
            "사양 (Olares)": "96 GB(2×48 GB) DDR5-5600, 128 GB까지 업그레이드 가능"
          },
          {
            "구성 요소": "저장장치",
            "사양 (Olares)": "2 TB NVMe SSD(PCIe 4.0), 두 번째 PCIe SSD 슬롯"
          },
          {
            "구성 요소": "포트",
            "사양 (Olares)": "Thunderbolt 5 1개, 2.5 GbE RJ45 1개, USB-A 3.2 Gen2 1개, HDMI 2.1 1개"
          },
          {
            "구성 요소": "무선",
            "사양 (Olares)": "Wi-Fi 7, Bluetooth 5.4"
          },
          {
            "구성 요소": "크기 및 무게",
            "사양 (Olares)": "320 × 197 × 55 mm(약 3.5 L), 2.15 kg(전원 어댑터 포함 3.1 kg)"
          },
          {
            "구성 요소": "소음 (Olares 실험실 수치)",
            "사양 (Olares)": "유휴 시 19 dB, 최대 출력(GPU 175 W + CPU 55 W) 시 38.8 dB, 25 °C, 0.5 m에서 측정"
          },
          {
            "구성 요소": "전원",
            "사양 (Olares)": "330 W 전원 공급 장치, 대기 전력 30 W, GPU는 무음 모드에서 95 W, 성능 모드에서 175 W"
          },
          {
            "구성 요소": "소프트웨어",
            "사양 (Olares)": "Olares OS(Olares는 오픈 소스라고 설명), 무료 시스템 업데이트"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "확인한 공급사 주장",
        "content": "**Olares는 2026-10-31에 이메일로 다음 수치를 보내왔습니다. PromptQuorum은 이 중 어느 것도 재현하지 않았습니다.** 표는 각 주장을 Olares가 자체 제품 페이지에 공개한 내용 및 PromptQuorum의 추정과 비교합니다.",
        "columns": [
          "공급사 주장 (이메일)",
          "Olares 제품 페이지",
          "PromptQuorum 판단"
        ],
        "rows": [
          {
            "공급사 주장 (이메일)": "Llama 3 70B(Q4_K_M): 지속적으로 약 18–22 tokens/s",
            "Olares 제품 페이지": "초당 토큰 수 수치 미공개",
            "PromptQuorum 판단": "검증되지 않음. Q4_K_M 70B 모델은 24 GB VRAM보다 크기 때문에 일부가 DDR5 시스템 RAM에서 실행됩니다. 70B 가이드의 저희 추정치는 약 2–4 tokens/s입니다"
          },
          {
            "공급사 주장 (이메일)": "RTX 5090M과 함께 \"96 GB 통합 메모리\"",
            "Olares 제품 페이지": "96 GB DDR5 시스템 RAM과 별도의 24 GB GDDR7 VRAM",
            "PromptQuorum 판단": "제품 페이지는 통합 메모리가 아니라 분리된 메모리 풀로 설명합니다"
          },
          {
            "공급사 주장 (이메일)": "최대 지속 부하에서 32 dB 미만",
            "Olares 제품 페이지": "유휴 19 dB, 최대 출력 38.8 dB, 최대 부하에서 39 dB 미만(25 °C, 0.5 m)",
            "PromptQuorum 판단": "공개된 수치와 상충하며, 저희는 제품 페이지의 수치를 사용합니다"
          },
          {
            "공급사 주장 (이메일)": "deepseek-v4.1-flash-10.17 다중 유닛 배포, 서브밀리초 로컬 지연 시간",
            "Olares 제품 페이지": "해당 모델이나 지연 시간 수치는 공개되지 않음",
            "PromptQuorum 판단": "검증되지 않음: 모델 이름을 확인할 수 없었고, 서브밀리초 지연 시간은 텍스트 생성에서 의미 있는 수치가 아닙니다"
          },
          {
            "공급사 주장 (이메일)": "$4,959 \"partner quote\"($4,999에서 $40 할인)",
            "Olares 제품 페이지": "게재되지 않음, 쇼핑몰 가격 $4,999",
            "PromptQuorum 판단": "Olares가 제공한 제안 링크에는 $4,949가 표시되어 있고 다른 대상을 위한 제목이 붙어 있어 링크하지 않습니다(2026-10-31 확인)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "구매처 및 현재 가격",
        "content": "**가격과 프로모션은 변경될 수 있으니 실시간 쇼핑몰 페이지를 확인하세요.** 가격 확인: 2026-10-31, shop.olares.com(단일 구성).",
        "columns": [
          "항목",
          "안내"
        ],
        "rows": [
          {
            "항목": "공식 쇼핑몰 가격",
            "안내": "$4,999 USD(shop.olares.com, 2026-10-31 확인)"
          },
          {
            "항목": "Olares 이메일 견적",
            "안내": "$4,959 USD, $40 할인, 미국 및 EU 창고에서 영업일 기준 약 2일 내 배송(공급사 주장, PromptQuorum 미검증)"
          },
          {
            "항목": "Olares 블랙 프라이데이 행사",
            "안내": "2026-11-17 00:00 ~ 2026-12-03 00:00(GMT-8), 대당 $300 USD 추가 할인(공급사 주장). 쇼핑몰에서 주문하거나, Olares에 이메일을 보내 \"PromptQuorum Partner Quote\"를 언급하면 조기 물량 배정과 다중 유닛 번들을 문의할 수 있습니다"
          },
          {
            "항목": "제3자 판매처",
            "안내": "확인하지 않음"
          }
        ],
        "items": [
          "PromptQuorum은 어떤 구매로부터도 수익을 얻지 않습니다. 이 페이지의 링크는 단순 참조 링크이며 제휴 태그가 없습니다.",
          "주문 전에 쇼핑몰 페이지에서 최종 가격, 배송, 수입 관세, 보증 조건을 확인하세요. Olares 제품 페이지는 배송 및 보증 정책으로 연결되지만 그 내용을 직접 명시하지는 않습니다."
        ],
        "affiliateLinks": [
          {
            "label": "Olares 쇼핑몰 페이지 →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "고려할 만한 대안",
        "content": "**적절한 대안은 크기, 달러당 VRAM, 메모리 용량 중 무엇을 중시하느냐에 따라 달라집니다.**",
        "items": [
          "**달러당 VRAM이 가장 많은 쪽을 원하고 타워형을 감수할 수 있다면 →** 데스크톱 GPU 빌드. [GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026)와 [워크스테이션 구성 가이드](/ko/power-local-llm/local-ai-workstation-build-guide)를 참조하세요.",
          "**대형 모델을 하나의 메모리 풀에서 실행하고 싶다면 →** 대용량 통합 메모리를 갖춘 Apple Silicon Mac. [로컬 AI에 가장 적합한 Mac](/ko/power-local-llm/best-mac-for-local-ai-2026)을 참조하세요.",
          "**가벼운 모델용으로 더 작고 저렴한 박스를 원한다면 →** Ryzen 또는 Intel 미니 PC. [로컬 AI용 ASUS 미니 PC](/ko/power-local-llm/asus-mini-pc-local-ai)와 [Home Assistant용 미니 PC 모음](/ko/smart-home/best-mini-pc-home-assistant-local-ai)을 참조하세요.",
          "**24 GB에 무엇이 들어가는지 궁금하다면 →** Olares One을 포함하는 [일반 소비자 하드웨어에서의 70B 모델 가이드](/ko/local-llms/70b-models-consumer-hardware)."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "평가 방법",
        "content": "**PromptQuorum은 Olares One을 테스트하지 않았습니다.** 이 페이지는 무엇이 확인된 정보인지 알 수 있도록 세 가지 종류의 정보를 구분합니다.",
        "items": [
          "**제조사 공개:** olares.com/one의 사양과 소음 수치, 공식 쇼핑몰의 가격(둘 다 2026-10-31 확인).",
          "**공급사 주장:** Olares가 이메일로 보내온 수치로, 주장으로만 표시하며 결과로 취급하지 않습니다.",
          "**PromptQuorum 추정:** VRAM 크기와 메모리 대역폭에 근거한 모델 적합성 및 속도 추론이며, 측정값이 아닙니다."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "자주 묻는 질문",
        "faqs": [
          {
            "q": "Olares One이란 무엇인가요?",
            "a": "Olares가 만든 소형 데스크톱 AI 컴퓨터로, Intel Core Ultra 9 275HX, 24 GB GDDR7의 RTX 5090 Mobile, 96 GB DDR5-5600, 2 TB NVMe SSD를 탑재하고 Olares OS로 구동됩니다."
          },
          {
            "q": "Olares One의 가격은 얼마인가요?",
            "a": "Olares 공식 쇼핑몰은 단일 구성에 $4,999 USD를 게시하고 있습니다(2026-10-31 확인). Olares는 이메일로 $4,959와 블랙 프라이데이 $300 할인도 제시했으며, PromptQuorum은 이 제안들을 검증하지 않았습니다."
          },
          {
            "q": "Olares One으로 70B 모델을 실행할 수 있나요?",
            "a": "예, 부분 오프로드를 사용하면 가능합니다. Q4_K_M 70B 모델은 24 GB VRAM보다 크기 때문에 일부가 DDR5 시스템 RAM에서 실행됩니다. PromptQuorum의 추정치는 약 2–4 tokens/s이며, Olares는 18–22 tokens/s를 이메일로 보냈지만 이는 제품 페이지에 공개되어 있지 않고 저희도 검증하지 못했습니다."
          },
          {
            "q": "Olares One은 얼마나 시끄러운가요?",
            "a": "Olares는 유휴 시 19 dB, 최대 출력 시 38.8 dB를 25 °C, 0.5 m에서 측정한 값으로 공개합니다. Olares의 이메일은 최대 부하에서 32 dB 미만이라고 밝혔으나, 이는 제품 페이지와 상충합니다."
          },
          {
            "q": "이 페이지는 제휴 페이지인가요?",
            "a": "아니요. PromptQuorum은 Olares와 제휴 계약이 없고, 링크에 제휴 파라미터를 붙이지 않으며, 이 페이지로부터 수수료나 요금을 받지 않습니다."
          },
          {
            "q": "PromptQuorum은 Olares One을 테스트했나요?",
            "a": "아니요. 이 페이지는 제조사가 공개한 사양, 공급사 주장임을 명확히 표시한 수치, 그리고 PromptQuorum의 추정을 사용합니다."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "관련 글",
        "items": [
          "[일반 소비자 하드웨어에서의 70B 모델](/ko/local-llms/70b-models-consumer-hardware) — VRAM 비교에서 Olares One이 등장하는 곳",
          "[로컬 AI용 ASUS 미니 PC](/ko/power-local-llm/asus-mini-pc-local-ai) — 더 작은 미니 PC 대안",
          "[로컬 LLM용 GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 달러당 VRAM",
          "[Home Assistant + 로컬 AI용 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — 미니 PC의 보급형 라인업"
        ]
      }
    }
  },
  pt: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-pt.webp",
    "affiliateDisclosure": true,
    "title": "Review do Olares One: desktop de IA compacto com RTX 5090 Mobile para LLMs locais",
    "seoTitle": "Review do Olares One: mini PC de IA com RTX 5090 Mobile, $4,999",
    "intro": "O Olares One é um computador desktop de IA compacto (3,5 L, segundo os próprios números da Olares) construído em torno de uma NVIDIA RTX 5090 Mobile, de classe notebook, com 24 GB de GDDR7, um Intel Core Ultra 9 275HX, 96 GB de DDR5-5600 (expansível para 128 GB, segundo a Olares) e um SSD NVMe de 2 TB, rodando o Olares OS. A Olares o lista por $4,999 em sua loja oficial (verificado em 2026-10-31). Esta página reúne as especificações publicadas pelo fabricante, os números que a Olares nos enviou por e-mail — identificados como declarações do fabricante e conferidos com a própria página do produto da Olares — e uma leitura do PromptQuorum sobre o que a máquina consegue e não consegue fazer. O PromptQuorum não testou nenhuma unidade, não tem acordo de afiliado com a Olares e não ganha nada com esta página.",
    "metaDescription": "Review do Olares One: RTX 5090 Mobile de 24 GB, 96 GB de DDR5, preço oficial de $4,999. Especificações, declarações do fabricante conferidas com a página da própria Olares e nenhum link de afiliado.",
    "twitterDescription": "Olares One: RTX 5090 Mobile (24 GB), Core Ultra 9 275HX, 96 GB de DDR5, preço oficial na loja de $4,999. Especificações, checagem das declarações do fabricante e um veredito independente, sem afiliação.",
    "readTime": "8 min de leitura",
    "educationalLevel": "Intermediate",
    "audience": "Compradores que avaliam um desktop de IA local compacto e pronto para uso, para modelos da classe de 30B e modelos de 70B com offload parcial",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**O Olares One é um desktop de IA compacto com RTX 5090 Mobile (24 GB de GDDR7), 96 GB de DDR5 e SSD de 2 TB; a loja oficial da Olares o lista por $4,999 (verificado em 2026-10-31).** Leitura do PromptQuorum das especificações publicadas: modelos de porte médio (cerca de 30B com quantização de 4 bits) cabem na VRAM, enquanto modelos de 70B só rodam com offload parcial para a RAM do sistema. A Olares nos enviou por e-mail números mais rápidos para 70B e um valor de ruído mais baixo; nenhum dos dois aparece na página do produto, por isso os mostramos como declarações do fabricante não verificadas. Esta não é uma página de afiliados — o PromptQuorum não tem acordo com a Olares e não recebe nenhuma comissão. → [Página do produto Olares One](https://www.olares.com/one)",
    "quickAnswerTop": {
      "pt": {
        "question": "O Olares One é um bom desktop de IA local?",
        "answer": "É uma máquina forte e pronta para uso se você quer 24 GB de VRAM GDDR7 rápida em um gabinete pequeno e silencioso e prefere um sistema operacional já empacotado a montar um PC. Para modelos de 70B, os 24 GB de VRAM são o limite: parte do modelo fica na RAM do sistema, e a velocidade cai bastante. A página da própria Olares não publica nenhum valor de tokens por segundo.",
        "bullets": [
          "GPU: NVIDIA RTX 5090 Mobile, 24 GB de GDDR7, TGP máximo de 175 W (Olares)",
          "CPU e RAM: Intel Core Ultra 9 275HX, 96 GB (2×48 GB) de DDR5-5600, expansível para 128 GB (Olares)",
          "Armazenamento e portas: NVMe de 2 TB, segundo slot de SSD, Thunderbolt 5, 2.5 GbE, Wi-Fi 7, HDMI 2.1",
          "Preço oficial na loja: $4,999; a Olares também cotou $4,959 e um desconto de $300 na Black Friday por e-mail (declarações do fabricante)",
          "O PromptQuorum não tem acordo de afiliado com a Olares e não ganha nada com esta página"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "Comprar se / Evitar se",
        "anchor": "buy-skip-if"
      },
      {
        "label": "Resumo",
        "anchor": "tldr"
      },
      {
        "label": "Veredito",
        "anchor": "verdict"
      },
      {
        "label": "Sem afiliação, sem comissão",
        "anchor": "no-affiliate"
      },
      {
        "label": "Especificações",
        "anchor": "specs"
      },
      {
        "label": "Declarações do fabricante conferidas",
        "anchor": "vendor-claims"
      },
      {
        "label": "Onde comprar e preço atual",
        "anchor": "where-to-buy"
      },
      {
        "label": "Alternativas",
        "anchor": "alternatives"
      },
      {
        "label": "Como avaliamos",
        "anchor": "methodology"
      },
      {
        "label": "Perguntas frequentes",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "O Olares One é um computador desktop de IA compacto com RTX 5090 Mobile (24 GB de GDDR7), 96 GB de DDR5 e Olares OS, listado por $4,999 na loja oficial da Olares."
      },
      {
        "type": "plain-terms",
        "content": "É um PC pequeno e silencioso, vendido pronto para rodar modelos de IA locais. A placa de vídeo tem 24 GB de memória rápida; modelos maiores que isso passam para a memória principal, mais lenta, e rodam bem mais devagar. Não o testamos e não ganhamos nada se você comprar."
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "Comprar se / Evitar se",
        "highlight": true,
        "content": "Guia rápido de decisão — o Olares One atende às suas necessidades? Leitura do PromptQuorum das especificações publicadas, não um teste prático.",
        "items": [
          "**Compre o Olares One se:**",
          "Você quer 24 GB de VRAM GDDR7 em um desktop pequeno (320 × 197 × 55 mm, 2.15 kg) em vez de montar uma torre",
          "Você quer um sistema operacional de IA local já empacotado (Olares OS) em vez de montar drivers e runtimes por conta própria",
          "Você roda principalmente modelos de até cerca de 30B com 4 bits, que cabem inteiros na VRAM",
          "Você valoriza baixo ruído em repouso (a Olares publica 19 dB em idle)",
          "**Evite o Olares One se:**",
          "Seu objetivo principal é inferência rápida com modelos de 70B — 24 GB de VRAM obrigam a um offload parcial para a RAM do sistema",
          "Você quer o menor preço por GB de VRAM — uma GPU de desktop usada costuma custar muito menos, ao custo de tamanho e ruído",
          "Você precisa de benchmarks medidos de forma independente antes de comprar — a página da Olares não publica nenhum, e não testamos uma unidade"
        ],
        "affiliateLinks": [
          {
            "label": "Página do produto Olares One →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "Resumo (TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One: Intel Core Ultra 9 275HX, RTX 5090 Mobile com 24 GB de GDDR7, 96 GB de DDR5-5600 (expansível para 128 GB), NVMe de 2 TB — especificações de olares.com/one, verificadas em 2026-10-31",
          "Preço oficial na loja: $4,999 (configuração única, shop.olares.com, verificado em 2026-10-31)",
          "A Olares nos enviou por e-mail uma cotação de $4,959 e um desconto de $300 por unidade na Black Friday (2026-11-17 a 2026-12-03, GMT-8) — declarações do fabricante, veja Onde comprar",
          "A Olares também enviou por e-mail 18–22 tokens/s para o Llama 3 70B (Q4_K_M) e menos de 32 dB em carga máxima — nenhum dos dois números está na página do produto, e não conseguimos verificar nenhum deles",
          "Estimativa do PromptQuorum: o 70B em Q4_K_M exige offload parcial com 24 GB de VRAM, então alguns poucos tokens por segundo são mais realistas do que 18–22 (veja o guia de 70B)",
          "Esta não é uma página de afiliados: o PromptQuorum não tem acordo com a Olares, não adiciona tags de afiliado e não recebe nenhuma comissão"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "Veredito",
        "content": "**O Olares One é uma máquina compacta e bem especificada para quem quer um desktop de IA local pronto para uso e aceita um preço de $4,999.** Seus 24 GB de VRAM GDDR7 atendem bem a modelos de porte médio e ao processamento rápido de prompts; seus 96 GB de DDR5 acrescentam capacidade para modelos de 70B, mas capacidade não é velocidade — as camadas mantidas na RAM do sistema rodam na largura de banda da DDR5. O ponto mais forte da máquina é a conveniência e o tamanho, não o preço por GB de VRAM. Não testamos uma unidade; portanto, trate isto como uma leitura de especificações publicadas e trate qualquer número de benchmark — da Olares ou nosso — como não verificado até que um teste independente o confirme."
      },
      "independence": {
        "id": "no-affiliate",
        "title": "Sem afiliação, sem comissão",
        "highlight": true,
        "content": "**Esta não é uma página de afiliados.** O PromptQuorum não tem acordo de afiliado com a Olares, não recebe comissão, taxa ou pagamento por esta página e não adiciona parâmetros de afiliado a nenhum link. A página do Olares One foi escrita depois que a Olares entrou em contato conosco com informações do produto; a própria Olares chama sua oferta de preço de \"cotação de parceiro\" (\"partner quote\"), mas essa é a terminologia da Olares e não descreve uma parceria com o PromptQuorum.",
        "items": [
          "Os links para olares.com e shop.olares.com são links de referência simples, que não rendem nada ao PromptQuorum, quer você compre ou não",
          "Os números enviados a nós pela Olares são identificados como declarações do fabricante em todos os lugares em que aparecem",
          "Quando uma declaração do fabricante conflita com a própria página do produto da Olares, mostramos as duas e indicamos qual delas é a publicada"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Especificações do Olares One",
        "content": "**Especificações publicadas pelo fabricante, retiradas de olares.com/one em 2026-10-31.** A Olares não publica preço de varejo nessa página; o preço vem da loja oficial.",
        "columns": [
          "Componente",
          "Especificação (Olares)"
        ],
        "rows": [
          {
            "Componente": "CPU",
            "Especificação (Olares)": "Intel Core Ultra 9 275HX, 24 núcleos, até 5.4 GHz, 36 MB de cache"
          },
          {
            "Componente": "GPU",
            "Especificação (Olares)": "NVIDIA GeForce RTX 5090 Mobile, 24 GB de GDDR7, TGP máx. de 175 W"
          },
          {
            "Componente": "Memória",
            "Especificação (Olares)": "96 GB (2×48 GB) de DDR5-5600, expansível para 128 GB"
          },
          {
            "Componente": "Armazenamento",
            "Especificação (Olares)": "SSD NVMe de 2 TB (PCIe 4.0), segundo slot de SSD PCIe"
          },
          {
            "Componente": "Portas",
            "Especificação (Olares)": "1× Thunderbolt 5, 1× 2.5 GbE RJ45, 1× USB-A 3.2 Gen2, 1× HDMI 2.1"
          },
          {
            "Componente": "Conexão sem fio",
            "Especificação (Olares)": "Wi-Fi 7, Bluetooth 5.4"
          },
          {
            "Componente": "Tamanho e peso",
            "Especificação (Olares)": "320 × 197 × 55 mm (cerca de 3.5 L), 2.15 kg (3.1 kg com a fonte de alimentação)"
          },
          {
            "Componente": "Ruído (medição de laboratório da Olares)",
            "Especificação (Olares)": "19 dB em idle; 38.8 dB em potência máxima (GPU 175 W + CPU 55 W), medido a 25 °C e 0.5 m"
          },
          {
            "Componente": "Energia",
            "Especificação (Olares)": "Fonte de alimentação de 330 W; 30 W em standby; GPU a 95 W no Modo Silencioso, 175 W no Modo de Desempenho"
          },
          {
            "Componente": "Software",
            "Especificação (Olares)": "Olares OS (descrito pela Olares como código aberto), atualizações do sistema gratuitas"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "Declarações do fabricante conferidas",
        "content": "**A Olares nos enviou estes números por e-mail em 2026-10-31. O PromptQuorum não reproduziu nenhum deles.** A tabela confronta cada declaração com o que a Olares publica na própria página do produto e com a estimativa do PromptQuorum.",
        "columns": [
          "Declaração do fabricante (e-mail)",
          "Página do produto Olares",
          "Status no PromptQuorum"
        ],
        "rows": [
          {
            "Declaração do fabricante (e-mail)": "Llama 3 70B (Q4_K_M): cerca de 18–22 tokens/s sustentados",
            "Página do produto Olares": "Nenhum valor de tokens por segundo publicado",
            "Status no PromptQuorum": "Não verificado. Um modelo 70B em Q4_K_M é maior que os 24 GB de VRAM, então parte roda a partir da RAM do sistema DDR5; nossa estimativa no guia de 70B é de cerca de 2–4 tokens/s"
          },
          {
            "Declaração do fabricante (e-mail)": "\"96 GB de memória unificada\" com a RTX 5090M",
            "Página do produto Olares": "96 GB de RAM de sistema DDR5 mais 24 GB de VRAM GDDR7 separados",
            "Status no PromptQuorum": "A página do produto descreve pools de memória separados, não memória unificada"
          },
          {
            "Declaração do fabricante (e-mail)": "Menos de 32 dB em carga contínua máxima",
            "Página do produto Olares": "19 dB em idle, 38.8 dB em potência máxima, menos de 39 dB em carga máxima (25 °C, 0.5 m)",
            "Status no PromptQuorum": "Conflita com o valor publicado; usamos o número da página do produto"
          },
          {
            "Declaração do fabricante (e-mail)": "Implantação com várias unidades de deepseek-v4.1-flash-10.17 com latência local abaixo de um milissegundo",
            "Página do produto Olares": "Nenhum modelo nem valor de latência desse tipo publicado",
            "Status no PromptQuorum": "Não verificado: não conseguimos identificar o nome do modelo, e latência abaixo de um milissegundo não é um valor significativo para geração de texto"
          },
          {
            "Declaração do fabricante (e-mail)": "\"Cotação de parceiro\" de $4,959 ($40 de desconto sobre $4,999)",
            "Página do produto Olares": "Não listada; preço na loja: $4,999",
            "Status no PromptQuorum": "O link da oferta fornecido pela Olares lista $4,949 e tem título voltado a outro público, por isso não o incluímos como link (verificado em 2026-10-31)"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "Onde comprar e preço atual",
        "content": "**Preços e promoções mudam — confira a página ao vivo da loja.** Preço verificado: 2026-10-31 em shop.olares.com (configuração única).",
        "columns": [
          "Sinal",
          "Orientação"
        ],
        "rows": [
          {
            "Sinal": "Preço oficial na loja",
            "Orientação": "$4,999 USD (shop.olares.com, verificado em 2026-10-31)"
          },
          {
            "Sinal": "Cotação por e-mail da Olares",
            "Orientação": "$4,959 USD, $40 de desconto, envio em cerca de 2 dias úteis a partir de armazéns nos EUA e na UE (declaração do fabricante, não verificada pelo PromptQuorum)"
          },
          {
            "Sinal": "Evento Black Friday da Olares",
            "Orientação": "2026-11-17 00:00 a 2026-12-03 00:00 (GMT-8), mais $300 USD de desconto por unidade (declaração do fabricante); faça o pedido pela loja ou escreva à Olares citando \"PromptQuorum Partner Quote\" para alocação antecipada e pacotes com várias unidades"
          },
          {
            "Sinal": "Varejistas terceiros",
            "Orientação": "Não verificados"
          }
        ],
        "items": [
          "O PromptQuorum não ganha nada com nenhuma compra: os links desta página são links de referência simples e não carregam nenhuma tag de afiliado.",
          "Confirme o preço final, o frete, os impostos de importação e os termos de garantia na página da loja antes de fazer o pedido — a página do produto da Olares aponta para as políticas de frete e garantia, mas não as informa."
        ],
        "affiliateLinks": [
          {
            "label": "Página da loja Olares →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "Alternativas a considerar",
        "content": "**A melhor alternativa depende de você valorizar tamanho, VRAM por dólar ou capacidade de memória.**",
        "items": [
          "**Quer o máximo de VRAM por dólar e aceita uma torre →** uma montagem com GPU de desktop; veja o [guia de compra de GPU](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) e o [guia de montagem de workstation](/pt/power-local-llm/local-ai-workstation-build-guide).",
          "**Quer modelos grandes em um único pool de memória →** um Mac com Apple Silicon e grande memória unificada; veja [o melhor Mac para IA local](/pt/power-local-llm/best-mac-for-local-ai-2026).",
          "**Quer uma máquina menor e mais barata para modelos leves →** um mini PC Ryzen ou Intel; veja [mini PCs ASUS para IA local](/pt/power-local-llm/asus-mini-pc-local-ai) e o [comparativo de mini PCs para Home Assistant](/pt/smart-home/best-mini-pc-home-assistant-local-ai).",
          "**Quer saber o que cabe em 24 GB →** o [guia de modelos de 70B em hardware de consumo](/pt/local-llms/70b-models-consumer-hardware), que inclui o Olares One."
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "Como avaliamos",
        "content": "**O PromptQuorum não testou um Olares One.** Esta página separa três tipos de informação para que você veja o que está confirmado.",
        "items": [
          "**Publicado pelo fabricante:** especificações e valores de ruído de olares.com/one, e o preço da loja oficial (ambos verificados em 2026-10-31).",
          "**Declarações do fabricante:** números que a Olares nos enviou por e-mail — mostrados como declarações, nunca como resultados.",
          "**Estimativa do PromptQuorum:** raciocínio sobre o que cabe no modelo e sobre a velocidade, a partir do tamanho da VRAM e da largura de banda da memória, não uma medição."
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "Perguntas frequentes",
        "faqs": [
          {
            "q": "O que é o Olares One?",
            "a": "Um computador desktop de IA compacto da Olares, com Intel Core Ultra 9 275HX, uma RTX 5090 Mobile com 24 GB de GDDR7, 96 GB de DDR5-5600 e um SSD NVMe de 2 TB, rodando o Olares OS."
          },
          {
            "q": "Quanto custa o Olares One?",
            "a": "A loja oficial da Olares lista $4,999 USD para sua configuração única (verificado em 2026-10-31). A Olares também cotou $4,959 e um desconto de $300 na Black Friday por e-mail; o PromptQuorum não verificou essas ofertas."
          },
          {
            "q": "O Olares One consegue rodar modelos de 70B?",
            "a": "Sim, com offload parcial. Um modelo 70B em Q4_K_M é maior que os 24 GB de VRAM, então parte dele roda a partir da RAM do sistema DDR5. A estimativa do PromptQuorum é de cerca de 2–4 tokens/s; a Olares enviou por e-mail 18–22 tokens/s, valor que não está publicado na página do produto e que não conseguimos verificar."
          },
          {
            "q": "O Olares One é barulhento?",
            "a": "A Olares publica 19 dB em idle e 38.8 dB em potência máxima, medidos a 25 °C e 0.5 m. Um e-mail da Olares citou menos de 32 dB em carga máxima, o que conflita com a página do produto."
          },
          {
            "q": "Esta é uma página de afiliados?",
            "a": "Não. O PromptQuorum não tem acordo de afiliado com a Olares, não adiciona parâmetros de afiliado aos links e não recebe nenhuma comissão ou taxa por esta página."
          },
          {
            "q": "O PromptQuorum testou o Olares One?",
            "a": "Não. Esta página usa especificações publicadas pelo fabricante, declarações do fabricante claramente identificadas e estimativas do PromptQuorum."
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "Leituras relacionadas",
        "items": [
          "[Modelos de 70B em hardware de consumo](/pt/local-llms/70b-models-consumer-hardware) — onde o Olares One aparece na comparação de VRAM",
          "[Mini PC ASUS para IA local](/pt/power-local-llm/asus-mini-pc-local-ai) — alternativas menores em mini PC",
          "[Guia de compra de GPU para LLMs locais](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — VRAM por dólar",
          "[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — a faixa econômica dos mini PCs"
        ]
      }
    }
  },
  zh: {
    "freshness_tier": "semi_annual",
    "publishDate": "2026-10-31",
    "dateModified": "2026-10-31",
    "next_refresh_due": "2027-04-30",
    "current_hardware_mentioned": [
      "Olares One",
      "Intel Core Ultra 9 275HX",
      "NVIDIA GeForce RTX 5090 Mobile"
    ],
    "theme": "Decision & Comparison",
    "heroImage": "/images/olares-one-local-ai-review-hero-zh.webp",
    "affiliateDisclosure": true,
    "title": "Olares One 评测：搭载 RTX 5090 Mobile 的紧凑型 AI 桌面主机，适合本地大模型",
    "seoTitle": "Olares One 评测：RTX 5090 Mobile AI 主机，$4,999",
    "intro": "Olares One 是一台紧凑型桌面 AI 计算机（体积 3.5 L，为 Olares 自己公布的数据），搭载笔记本级 NVIDIA RTX 5090 Mobile（24 GB GDDR7）、Intel Core Ultra 9 275HX、96 GB DDR5-5600（据 Olares 称可升级至 128 GB）和 2 TB NVMe SSD，运行 Olares OS。Olares 官方商店标价 $4,999（核对日期 2026-10-31）。本页汇总了厂商公布的规格、Olares 通过电子邮件发给我们的数据（标注为“厂商声明”，并已对照 Olares 自己的产品页核对），以及 PromptQuorum 对这台主机能做什么、不能做什么的判断。PromptQuorum 没有测试过实机，与 Olares 没有任何联盟（affiliate）协议，也不会从本页获得任何收益。",
    "metaDescription": "Olares One 评测：RTX 5090 Mobile 24 GB、96 GB DDR5，官方价 $4,999。含规格、对照 Olares 自家页面核对的厂商声明，无联盟链接。",
    "twitterDescription": "Olares One：RTX 5090 Mobile（24 GB）、Core Ultra 9 275HX、96 GB DDR5，官方商店价 $4,999。规格、厂商声明核对，以及独立、非联盟的结论。",
    "readTime": "阅读约 8 分钟",
    "educationalLevel": "Intermediate",
    "audience": "正在考虑购买紧凑型、开箱即用的本地 AI 桌面主机，用于运行 30B 级模型以及部分卸载的 70B 模型的买家",
    "primaryTerm": "Olares One review",
    "targetKeywords": [
      "olares one review",
      "olares one price",
      "olares one rtx 5090 mobile",
      "olares one llama 70b",
      "olares os local ai"
    ],
    "leadAnswerBlock": "**Olares One 是一台紧凑型 AI 桌面主机，配备 RTX 5090 Mobile（24 GB GDDR7）、96 GB DDR5 和 2 TB SSD；Olares 官方商店标价 $4,999（核对日期 2026-10-31）。** PromptQuorum 对已公布规格的判断：中等规模模型（约 30B 级、4 bit）可以放进显存，而 70B 模型只能通过部分卸载到系统内存来运行。Olares 通过邮件发给我们更快的 70B 数据和更低的噪音数值，但二者都没有出现在其产品页上，因此我们将其作为未经验证的厂商声明展示。本页不是联盟页面——PromptQuorum 与 Olares 没有任何协议，也不会获得任何佣金。→ [Olares One 产品页](https://www.olares.com/one)",
    "quickAnswerTop": {
      "zh": {
        "question": "Olares One 是一台好的本地 AI 桌面主机吗？",
        "answer": "如果你想要在小巧安静的机箱里获得 24 GB 高速 GDDR7 显存，并且更愿意用一体化系统而不是自己组装电脑，它是一台实力不错的开箱即用主机。对于 70B 模型，24 GB 显存是瓶颈：模型的一部分会放在系统内存中，速度会大幅下降。Olares 自己的页面没有公布每秒 token 数。",
        "bullets": [
          "GPU：NVIDIA RTX 5090 Mobile，24 GB GDDR7，最大 TGP 175 W（Olares）",
          "CPU 与内存：Intel Core Ultra 9 275HX，96 GB（2×48 GB）DDR5-5600，可升级至 128 GB（Olares）",
          "存储与接口：2 TB NVMe，另有第二个 SSD 插槽，Thunderbolt 5，2.5 GbE，Wi-Fi 7，HDMI 2.1",
          "官方商店价 $4,999；Olares 还通过邮件报价 $4,959，并提到Black Friday立减 $300（厂商声明）",
          "PromptQuorum 与 Olares 没有联盟协议，也不会从本页获得任何收益"
        ],
        "updatedDate": "2026-10"
      }
    },
    "toc": [
      {
        "label": "适合买 / 不适合买",
        "anchor": "buy-skip-if"
      },
      {
        "label": "TL;DR",
        "anchor": "tldr"
      },
      {
        "label": "结论",
        "anchor": "verdict"
      },
      {
        "label": "无联盟、无佣金",
        "anchor": "no-affiliate"
      },
      {
        "label": "规格",
        "anchor": "specs"
      },
      {
        "label": "已核对的厂商声明",
        "anchor": "vendor-claims"
      },
      {
        "label": "购买渠道与当前价格",
        "anchor": "where-to-buy"
      },
      {
        "label": "替代方案",
        "anchor": "alternatives"
      },
      {
        "label": "我们的评估方法",
        "anchor": "methodology"
      },
      {
        "label": "常见问题",
        "anchor": "faq"
      }
    ],
    "snippetBlocks": [
      {
        "type": "one-sentence",
        "content": "Olares One 是一台紧凑型桌面 AI 计算机，配备 RTX 5090 Mobile（24 GB GDDR7）、96 GB DDR5 和 Olares OS，Olares 官方商店标价 $4,999。"
      },
      {
        "type": "plain-terms",
        "content": "这是一台小巧安静、可直接运行本地 AI 模型的电脑。它的显卡有 24 GB 高速显存；比这更大的模型会溢出到较慢的主内存，运行速度会慢得多。我们没有测试过它，你购买它我们也不会获得任何收益。"
      }
    ],
    "sections": {
      "buyIfSkipIf": {
        "id": "buy-skip-if",
        "title": "适合买 / 不适合买",
        "highlight": true,
        "content": "快速决策指南——Olares One 适合你吗？这是 PromptQuorum 对已公布规格的判断，不是实机测试。",
        "items": [
          "**在以下情况下适合购买 Olares One：**",
          "你想在小型桌面主机（320 × 197 × 55 mm，2.15 kg）里获得 24 GB GDDR7 显存，而不是自己组装一台塔式机箱",
          "你想要一套打包好的本地 AI 操作系统（Olares OS），而不是自己配置驱动和运行环境",
          "你主要运行约 30B 以内、4 bit 的模型，这类模型可以完全放进显存",
          "你看重低待机噪音（Olares 公布待机为 19 dB）",
          "**在以下情况下不适合购买 Olares One：**",
          "你的主要目标是快速的 70B 推理——24 GB 显存会迫使部分模型卸载到系统内存",
          "你想要每 GB 显存的最低价格——二手桌面显卡通常便宜得多，代价是体积和噪音",
          "你在购买前需要独立实测的基准测试——Olares 的页面没有提供，我们也没有测试过实机"
        ],
        "affiliateLinks": [
          {
            "label": "Olares One 产品页 →",
            "url": "https://www.olares.com/one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "tldr": {
        "id": "tldr",
        "title": "要点(TL;DR)",
        "isTldr": true,
        "items": [
          "Olares One：Intel Core Ultra 9 275HX、24 GB GDDR7 的 RTX 5090 Mobile、96 GB DDR5-5600（可升级至 128 GB）、2 TB NVMe——规格来自 olares.com/one，核对日期 2026-10-31",
          "官方商店价 $4,999（单一配置，shop.olares.com，核对日期 2026-10-31）",
          "Olares 通过邮件向我们报价 $4,959，并提到Black Friday每台立减 $300（2026-11-17 至 2026-12-03，GMT-8）——均为厂商声明，详见“购买渠道与当前价格”",
          "Olares 还通过邮件提供了 Llama 3 70B（Q4_K_M）18–22 tokens/s，以及满载低于 32 dB——这两个数据都不在其产品页上，我们也无法验证",
          "PromptQuorum 估算：在 24 GB 显存上运行 70B Q4_K_M 需要部分卸载，因此每秒几个 token 比 18–22 更符合实际（参见 70B 指南）",
          "本页不是联盟页面：PromptQuorum 与 Olares 没有协议，不添加联盟标记，也不获得任何佣金"
        ]
      },
      "verdict": {
        "id": "verdict",
        "title": "结论",
        "content": "**Olares One 是一台规格扎实的紧凑型主机，适合想要开箱即用的本地 AI 桌面主机、并能接受 $4,999 价格的人。** 它的 24 GB GDDR7 显存适合中等规模模型和快速的提示词处理；96 GB DDR5 为 70B 模型提供了容量，但容量不等于速度——放在系统内存里的层只能按 DDR5 的带宽运行。它最有力的理由是便利性和体积，而不是每 GB 显存的价格。我们没有测试过实机，因此请将本文视为对已公布规格的解读；任何基准测试数据——无论来自 Olares 还是我们——在独立测试确认之前，都应视为未经验证。"
      },
      "independence": {
        "id": "no-affiliate",
        "title": "无联盟、无佣金",
        "highlight": true,
        "content": "**本页不是联盟页面。** PromptQuorum 与 Olares 没有联盟协议，不会因本页获得任何佣金、费用或报酬，也不会在任何链接中添加联盟参数。Olares One 这一页是在 Olares 主动联系我们并提供产品信息之后撰写的；Olares 自己把价格优惠称为“partner quote”，但这是 Olares 的用语，并不代表它与 PromptQuorum 存在合作伙伴关系。",
        "items": [
          "指向 olares.com 和 shop.olares.com 的链接只是普通参考链接，无论你是否购买，PromptQuorum 都不会因此获得任何收益",
          "Olares 发给我们的数据，凡出现之处均标注为厂商声明",
          "当厂商声明与 Olares 自己的产品页冲突时，我们会同时展示两者，并说明哪一个是公开发布的"
        ]
      },
      "specs": {
        "id": "specs",
        "title": "Olares One 规格",
        "content": "**厂商公布的规格，取自 olares.com/one，日期 2026-10-31。** Olares 在该页面没有公布零售价；价格来自官方商店。",
        "columns": [
          "组件",
          "规格（Olares）"
        ],
        "rows": [
          {
            "组件": "CPU",
            "规格（Olares）": "Intel Core Ultra 9 275HX，24 核，最高 5.4 GHz，36 MB 缓存"
          },
          {
            "组件": "GPU",
            "规格（Olares）": "NVIDIA GeForce RTX 5090 Mobile，24 GB GDDR7，最大 TGP 175 W"
          },
          {
            "组件": "内存",
            "规格（Olares）": "96 GB（2×48 GB）DDR5-5600，可升级至 128 GB"
          },
          {
            "组件": "存储",
            "规格（Olares）": "2 TB NVMe SSD（PCIe 4.0），另有第二个 PCIe SSD 插槽"
          },
          {
            "组件": "接口",
            "规格（Olares）": "1× Thunderbolt 5、1× 2.5 GbE RJ45、1× USB-A 3.2 Gen2、1× HDMI 2.1"
          },
          {
            "组件": "无线",
            "规格（Olares）": "Wi-Fi 7，Bluetooth 5.4"
          },
          {
            "组件": "尺寸与重量",
            "规格（Olares）": "320 × 197 × 55 mm（约 3.5 L），2.15 kg（含电源 3.1 kg）"
          },
          {
            "组件": "噪音（Olares 实验室数据）",
            "规格（Olares）": "待机 19 dB；全功率 38.8 dB（GPU 175 W + CPU 55 W），在 25 °C、0.5 m 处测得"
          },
          {
            "组件": "功耗",
            "规格（Olares）": "330 W 电源；待机 30 W；静音模式下 GPU 95 W，性能模式下 175 W"
          },
          {
            "组件": "软件",
            "规格（Olares）": "Olares OS（Olares 称其为开源），免费系统更新"
          }
        ]
      },
      "vendorClaims": {
        "id": "vendor-claims",
        "title": "已核对的厂商声明",
        "content": "**Olares 于 2026-10-31 通过电子邮件向我们发送了这些数据。PromptQuorum 没有复现其中任何一项。** 下表将每项声明与 Olares 自己产品页上公布的内容以及 PromptQuorum 的估算进行对照。",
        "columns": [
          "厂商声明（邮件）",
          "Olares 产品页",
          "PromptQuorum 状态"
        ],
        "rows": [
          {
            "厂商声明（邮件）": "Llama 3 70B（Q4_K_M）：持续约 18–22 tokens/s",
            "Olares 产品页": "未公布每秒 token 数",
            "PromptQuorum 状态": "未经验证。Q4_K_M 的 70B 模型大于 24 GB 显存，因此一部分要从 DDR5 系统内存运行；我们在 70B 指南中的估算约为 2–4 tokens/s"
          },
          {
            "厂商声明（邮件）": "RTX 5090M 搭配“96 GB 统一内存”",
            "Olares 产品页": "96 GB DDR5 系统内存，外加独立的 24 GB GDDR7 显存",
            "PromptQuorum 状态": "产品页描述的是相互独立的内存池，而不是统一内存"
          },
          {
            "厂商声明（邮件）": "持续满载低于 32 dB",
            "Olares 产品页": "待机 19 dB，全功率 38.8 dB，最大负载下低于 39 dB（25 °C，0.5 m）",
            "PromptQuorum 状态": "与已公布数据冲突；我们采用产品页上的数值"
          },
          {
            "厂商声明（邮件）": "deepseek-v4.1-flash-10.17 多机部署，本地延迟低于毫秒级",
            "Olares 产品页": "未公布此类模型或延迟数据",
            "PromptQuorum 状态": "未经验证：我们无法确认该模型名称，而且亚毫秒延迟对文本生成来说不是有意义的指标"
          },
          {
            "厂商声明（邮件）": "$4,959 的“partner quote”（比 $4,999 便宜 $40）",
            "Olares 产品页": "未列出；商店价 $4,999",
            "PromptQuorum 状态": "Olares 提供的优惠链接标价为 $4,949，且标题面向其他受众，因此我们不放该链接（核对日期 2026-10-31）"
          }
        ]
      },
      "whereToBuy": {
        "id": "where-to-buy",
        "title": "购买渠道与当前价格",
        "content": "**价格和促销会变动——请查看商店页面的实时信息。** 价格核对：2026-10-31，shop.olares.com（单一配置）。",
        "columns": [
          "项目",
          "说明"
        ],
        "rows": [
          {
            "项目": "官方商店价",
            "说明": "$4,999 USD（shop.olares.com，核对日期 2026-10-31）"
          },
          {
            "项目": "Olares 邮件报价",
            "说明": "$4,959 USD，立减 $40，美国和欧盟仓库约 2 个工作日发货（厂商声明，PromptQuorum 未验证）"
          },
          {
            "项目": "Olares Black Friday活动",
            "说明": "2026-11-17 00:00 至 2026-12-03 00:00（GMT-8），每台额外立减 $300 USD（厂商声明）；可通过商店下单，或发邮件给 Olares 并注明“PromptQuorum Partner Quote”，以获取提前配货和多台组合优惠"
          },
          {
            "项目": "第三方零售商",
            "说明": "未核查"
          }
        ],
        "items": [
          "PromptQuorum 不会从任何购买中获得收益：本页上的链接只是普通参考链接，不带任何联盟标记。",
          "下单前请在商店页面确认最终价格、运费、进口关税和保修条款——Olares 产品页链接到了运费和保修政策，但并未写明具体内容。"
        ],
        "affiliateLinks": [
          {
            "label": "Olares 商店页面 →",
            "url": "https://shop.olares.com/products/olares-one",
            "productName": "Olares One",
            "productCategory": "AI Desktop",
            "priceRange": "$4,999 official shop price"
          }
        ]
      },
      "alternatives": {
        "id": "alternatives",
        "title": "可考虑的替代方案",
        "content": "**合适的替代方案取决于你更看重体积、每美元显存，还是内存容量。**",
        "items": [
          "**想要每美元最多的显存，并且能接受塔式机箱 →** 台式显卡装机；参见[显卡选购指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026)和[工作站装机指南](/zh/power-local-llm/local-ai-workstation-build-guide)。",
          "**想在同一个内存池中运行大模型 →** 配备大容量统一内存的 Apple Silicon Mac；参见[最适合本地 AI 的 Mac](/zh/power-local-llm/best-mac-for-local-ai-2026)。",
          "**想要更小、更便宜的主机来运行轻量模型 →** Ryzen 或 Intel 迷你主机；参见[适用于本地 AI 的华硕迷你主机](/zh/power-local-llm/asus-mini-pc-local-ai)和[Home Assistant 迷你主机横评](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。",
          "**想知道 24 GB 能跑什么 →** 参见[消费级硬件上的 70B 模型指南](/zh/local-llms/70b-models-consumer-hardware)，其中包含 Olares One。"
        ]
      },
      "methodology": {
        "id": "methodology",
        "title": "我们的评估方法",
        "content": "**PromptQuorum 没有测试过 Olares One。** 本页将信息分为三类，方便你看清哪些是已确认的。",
        "items": [
          "**厂商公布：** 规格和噪音数据来自 olares.com/one，价格来自官方商店（均核对于 2026-10-31）。",
          "**厂商声明：** Olares 通过邮件发给我们的数据——仅作为声明展示，绝不当作测试结果。",
          "**PromptQuorum 估算：** 根据显存大小和内存带宽对模型适配度与速度做出的推断，不是实测。"
        ]
      },
      "faqSection": {
        "id": "faq",
        "title": "常见问题",
        "faqs": [
          {
            "q": "Olares One 是什么？",
            "a": "Olares 推出的一款紧凑型桌面 AI 计算机，配备 Intel Core Ultra 9 275HX、24 GB GDDR7 的 RTX 5090 Mobile、96 GB DDR5-5600 和 2 TB NVMe SSD，运行 Olares OS。"
          },
          {
            "q": "Olares One 多少钱？",
            "a": "Olares 官方商店为其单一配置标价 $4,999 USD（核对日期 2026-10-31）。Olares 还通过邮件报价 $4,959，并提到Black Friday立减 $300；PromptQuorum 未验证这些优惠。"
          },
          {
            "q": "Olares One 能运行 70B 模型吗？",
            "a": "可以，但需要部分卸载。Q4_K_M 的 70B 模型大于 24 GB 显存，因此一部分要从 DDR5 系统内存运行。PromptQuorum 的估算约为 2–4 tokens/s；Olares 通过邮件给出 18–22 tokens/s，该数据并未在其产品页上公布，我们也无法验证。"
          },
          {
            "q": "Olares One 噪音大吗？",
            "a": "Olares 公布待机 19 dB、全功率 38.8 dB，测量条件为 25 °C、0.5 m。Olares 的一封邮件称满载低于 32 dB，这与产品页相冲突。"
          },
          {
            "q": "这是联盟页面吗？",
            "a": "不是。PromptQuorum 与 Olares 没有联盟协议，不在链接中添加联盟参数，也不会从本页获得任何佣金或费用。"
          },
          {
            "q": "PromptQuorum 测试过 Olares One 吗？",
            "a": "没有。本页使用的是厂商公布的规格、明确标注的厂商声明以及 PromptQuorum 的估算。"
          }
        ]
      },
      "relatedReading": {
        "id": "related-reading",
        "title": "相关阅读",
        "items": [
          "[消费级硬件上的 70B 模型](/zh/local-llms/70b-models-consumer-hardware) — Olares One 在显存对比中的位置",
          "[适用于本地 AI 的华硕迷你主机](/zh/power-local-llm/asus-mini-pc-local-ai) — 更小的迷你主机替代方案",
          "[本地大模型显卡选购指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 每美元显存",
          "[适用于 Home Assistant + 本地 AI 的最佳迷你主机](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 迷你主机的预算端"
        ]
      }
    }
  },
}
