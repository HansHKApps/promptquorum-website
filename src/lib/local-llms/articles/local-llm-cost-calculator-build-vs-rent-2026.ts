import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: 'Local LLM Cost Calculator: Build vs Rent 2026',
    seoTitle: 'Local LLM Cost Calculator: Build vs Rent 2026',
    metaDescription: 'Build vs rent LLM cost comparison 2026. Full TCO calculator for a local GPU workstation vs RunPod/Lambda Labs cloud — break-even at ~1,800 GPU hours.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**For teams running LLMs more than 4 hours per day, building a local RTX 4090 workstation breaks even with cloud GPU rental in 12–18 months and is cheaper long-term. For under 50 hours/month, cloud rental wins on flexibility and no upfront cost.**',
    quickAnswerTop: {
      question: 'Is it cheaper to build a local LLM server or rent cloud GPU?',
      answer: 'Cloud GPU wins for under 50 hours/month ($0.35–0.90/hr). Local hardware wins above 4 hours/day usage — a $1,800 RTX 4090 workstation pays back in 12–18 months versus RunPod spot pricing.',
      bullets: [
        'Cloud GPU: no upfront cost, best for occasional use (< 50 hr/month)',
        'Local RTX 4090: breaks even after ~1,800 GPU hours',
        'Local Mac Mini M4 Pro: breaks even after ~1,200 GPU hours',
        'Electricity adds $0.02–0.08/hr to local costs',
        'Hidden cloud costs: egress fees, storage, idle compute billing',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Building a local LLM workstation becomes cheaper than cloud GPU rental after approximately 1,800 hours of cumulative use.',
      },
      {
        type: 'plain-terms',
        text: 'This calculator compares the total cost of owning a local GPU machine versus paying hourly to run LLMs on cloud platforms like RunPod or Lambda Labs.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'RunPod GPU Rental',
        url: 'https://www.runpod.io',
        productCategory: 'cloud-gpu',
      },
      {
        productName: 'RTX 4090 (Amazon)',
        url: 'https://www.amazon.com/s?k=RTX+4090',
        productCategory: 'gpu',
      },
      {
        productName: 'Mac Mini M4 Pro',
        url: 'https://www.apple.com/shop/buy-mac/mac-mini',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Cloud GPU costs $0.35–2.50/hr depending on GPU tier and provider',
          'Local RTX 4090 workstation totals ~$3,200 upfront (GPU + system)',
          'Break-even: 1,800 hours cumulative use at $0.50 avg cloud rate = local wins',
          'Mac Mini M4 Pro 48GB: $2,000 upfront, breaks even at ~1,200 cloud hours',
          'Electricity adds $0.03–0.08/hr to local operating costs',
          'Cloud wins for spiky, occasional, or experimental workloads',
          'Local wins for sustained daily inference, privacy-sensitive use, or fine-tuning',
        ],
      },
      cloudPricing: {
        heading: 'Cloud GPU Pricing in 2026',
        body: 'Cloud GPU pricing varies significantly by provider, GPU tier, and commitment type. Spot pricing (preemptible) is 40–70% cheaper than on-demand but can be interrupted.',
        columns: ['GPU', 'VRAM', 'Provider', 'Spot $/hr', 'On-Demand $/hr'],
        rows: [
          { GPU: 'RTX 4090', VRAM: '24 GB', Provider: 'RunPod', 'Spot $/hr': '$0.28–0.44', 'On-Demand $/hr': '$0.74' },
          { GPU: 'RTX 4090', VRAM: '24 GB', Provider: 'Vast.ai', 'Spot $/hr': '$0.32–0.48', 'On-Demand $/hr': '$0.89' },
          { GPU: 'A40', VRAM: '48 GB', Provider: 'RunPod', 'Spot $/hr': '$0.44–0.64', 'On-Demand $/hr': '$1.14' },
          { GPU: 'A100 80GB', VRAM: '80 GB', Provider: 'Lambda Labs', 'Spot $/hr': '$1.29', 'On-Demand $/hr': '$2.49' },
          { GPU: 'H100 SXM', VRAM: '80 GB', Provider: 'RunPod', 'Spot $/hr': '$2.39', 'On-Demand $/hr': '$3.49' },
        ],
      },
      buildCosts: {
        heading: 'Local Hardware Build Costs 2026',
        body: 'A complete local LLM workstation includes GPU, CPU, motherboard, RAM, storage, PSU, and case. Here are three complete builds with total system costs.',
        columns: ['Build', 'GPU', 'VRAM', 'Total Cost', 'Models Supported'],
        rows: [
          { Build: 'Budget', GPU: 'RTX 3090 (used)', VRAM: '24 GB', 'Total Cost': '~$1,200', 'Models Supported': 'Up to 30B Q4' },
          { Build: 'Recommended', GPU: 'RTX 4090', VRAM: '24 GB', 'Total Cost': '~$3,200', 'Models Supported': 'Up to 34B Q4, 7B full' },
          { Build: 'Power', GPU: 'RTX 4090 + 3090', VRAM: '48 GB', 'Total Cost': '~$5,000', 'Models Supported': 'Up to 70B Q4' },
          { Build: 'Mac Mini M4 Pro', GPU: 'M4 Pro (unified)', VRAM: '48 GB', 'Total Cost': '~$2,000', 'Models Supported': 'Up to 70B Q4 via MLX' },
        ],
      },
      calculator: {
        heading: 'Break-Even Calculator',
        body: 'Use this table to find your break-even point. Monthly hours = average daily use × 30 days.',
        columns: ['Monthly Hours', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)', 'Time to Recover $3,200 RTX 4090 Build'],
        rows: [
          { 'Monthly Hours': '10 hr/mo', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$5/mo', 'Time to Recover $3,200 RTX 4090 Build': 'Never (53 years)' },
          { 'Monthly Hours': '30 hr/mo', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$15/mo', 'Time to Recover $3,200 RTX 4090 Build': '18 years' },
          { 'Monthly Hours': '50 hr/mo', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$25/mo', 'Time to Recover $3,200 RTX 4090 Build': '10.7 years' },
          { 'Monthly Hours': '120 hr/mo (4hr/day)', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$60/mo', 'Time to Recover $3,200 RTX 4090 Build': '4.4 years' },
          { 'Monthly Hours': '240 hr/mo (8hr/day)', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$120/mo', 'Time to Recover $3,200 RTX 4090 Build': '2.2 years' },
          { 'Monthly Hours': '480 hr/mo (16hr/day)', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$240/mo', 'Time to Recover $3,200 RTX 4090 Build': '13 months' },
          { 'Monthly Hours': '720 hr/mo (24hr/day)', 'Cloud Cost/mo (RTX 4090 @ $0.50/hr)': '$360/mo', 'Time to Recover $3,200 RTX 4090 Build': '9 months' },
        ],
      },
      electricityCost: {
        heading: 'Electricity: The Hidden Local Cost',
        body: 'A running RTX 4090 draws 350–450W under inference load. With system overhead, expect 400–550W total wall draw.\n\n- **US average (12¢/kWh):** $0.048–0.066/hr\n- **EU average (32¢/kWh):** $0.128–0.176/hr\n- **UK average (28¢/kWh):** $0.112–0.154/hr\n\nThe Mac Mini M4 Pro draws only 30–60W under LLM load — roughly $0.004–0.008/hr in the US. This dramatically improves its break-even economics versus a GPU workstation in high-electricity-cost regions like Germany or France.',
      },
      hiddenCloudCosts: {
        heading: 'Hidden Cloud Costs to Factor In',
        body: 'Quoted cloud GPU prices do not include all costs. Factor these when comparing:\n\n- **Storage:** $0.10–0.50/GB/month for model weights (a 14B Q4 model = ~9GB = $0.90–4.50/mo)\n- **Egress bandwidth:** Pulling model outputs back to your application\n- **Idle compute:** Instances left running cost full price\n- **Setup time:** Each cloud session needs model loading (5–15 min for 70B models)\n- **Interruption risk:** Spot instances can be terminated mid-generation\n\nWith model storage and idle time, realistic effective cloud costs are often 1.3–1.7× the headline GPU rate.',
      },
      whenToRent: {
        heading: 'When Cloud Rental Makes More Sense',
        body: '**Choose cloud GPU rental when:**\n\n- You run LLMs fewer than 4 hours per day\n- You need a GPU tier you cannot afford to buy (H100, A100 80GB)\n- Your workload is spiky (fine-tuning runs 1-2 days per month)\n- You need multiple GPUs for distributed inference temporarily\n- You are in an EU high-electricity-cost country and run only 7B models\n- You want to test a workload before committing to hardware\n\n**Choose local hardware when:**\n\n- You run inference 4+ hours per day for your team\n- You process private/sensitive documents that cannot leave your network\n- You need lowest-possible latency for real-time applications\n- Your budget allows $2,000–5,000 upfront capital expenditure',
      },
      macMiniCase: {
        heading: 'The Mac Mini M4 Pro Case Study',
        body: 'The Mac Mini M4 Pro with 48GB unified memory represents an unusual value proposition: $2,000 for a 48GB "VRAM" equivalent that draws only 30–60W. At 8 hours/day, $0.006/hr electricity (US), it runs 70B Q4 models at 12–18 tokens/second.\n\nBreak-even against RunPod A40 spot ($0.54/hr):\n- 8 hours/day × 30 days = 240 hr/month\n- Cloud: 240 × $0.54 = $130/month\n- Break-even: $2,000 ÷ $130 = **15 months**\n\nFor European users paying €0.35/kWh, the Mac Mini\'s 45W average draw adds only €0.016/hr — still dramatically cheaper than European cloud GPU rates.',
        affiliateLinks: [
          {
            productName: 'Mac Mini M4 Pro',
            url: 'https://www.apple.com/shop/buy-mac/mac-mini',
            productCategory: 'hardware',
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'What is the break-even point for a local LLM workstation vs cloud GPU?',
            a: 'An RTX 4090 workstation ($3,200 total) breaks even against $0.50/hr cloud GPU at approximately 6,400 cumulative hours. At 8 hours/day, that is 2.2 years. At 16 hours/day (shared team server), it is 13 months.',
          },
          {
            q: 'Does electricity cost significantly affect the comparison?',
            a: 'In the US (12¢/kWh), electricity adds ~$0.05/hr to local costs — minor. In Germany (38¢/kWh), it adds ~$0.16/hr, which meaningfully narrows the local advantage. The Mac Mini M4 Pro\'s 45W draw keeps electricity costs low even in high-rate countries.',
          },
          {
            q: 'Is RunPod or Vast.ai cheaper for occasional fine-tuning?',
            a: 'Vast.ai is typically 10–20% cheaper than RunPod at spot pricing, but RunPod has better uptime and a managed pods feature. For occasional use (< 20 hours/month), Vast.ai spot pricing is the lowest-cost option. For reliability-sensitive workloads, RunPod Community Cloud is the better choice.',
          },
          {
            q: 'What about depreciation on local hardware?',
            a: 'GPU hardware depreciates 20–40% over 3 years. An RTX 4090 bought at $1,700 may resell for $900–1,200 in 2028. Factoring this in, the true cost of local hardware after 3 years is (purchase price − resale value + electricity). For the RTX 4090 workstation: ($3,200 − $1,200 + $180 electricity at 8hr/day US) = ~$2,180 over 3 years vs. cloud at $0.50/hr × 8hr/day × 365 × 3 = $4,380.',
          },
          {
            q: 'How much does it cost to run a 70B model locally?',
            a: 'A 70B Q4_K_M model requires 48GB VRAM/unified memory. Hardware options: dual RTX 3090 ($2,000), Mac Mini M4 Pro 48GB ($2,000), or Mac Studio M4 Max 128GB ($3,000). Electricity at 8hr/day US rate adds $45–90/year. Running the same model on RunPod A40 spot at 8hr/day costs ~$1,300/year.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the break-even point for a local LLM workstation vs cloud GPU?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An RTX 4090 workstation ($3,200 total) breaks even against $0.50/hr cloud GPU at approximately 6,400 cumulative hours — 2.2 years at 8 hours/day or 13 months at 16 hours/day.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it cheaper to build a local LLM server or rent cloud GPU?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cloud GPU wins for under 50 hours/month. Local hardware wins above 4 hours/day usage — an RTX 4090 workstation pays back in 12–18 months versus RunPod spot pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to run a 70B model locally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 70B Q4_K_M model requires 48GB VRAM. Hardware: dual RTX 3090 or Mac Mini M4 Pro 48GB (~$2,000). Electricity adds $45–90/year at 8hr/day US rates.',
          },
        },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Local LLM Cost Calculator: Build vs Rent 2026',
      description: 'Complete TCO comparison for local GPU workstation vs cloud GPU rental for running LLMs in 2026.',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      url: 'https://www.promptquorum.com/local-llms/local-llm-cost-calculator-build-vs-rent-2026',
      inLanguage: 'en',
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: 'LLM Kostenrechner: Kaufen vs. Mieten 2026',
    seoTitle: 'LLM Kostenrechner: GPU kaufen vs. Cloud mieten 2026',
    metaDescription: 'Lokale LLM-Kosten 2026: Hardware kaufen vs. Cloud-GPU mieten. Break-even-Rechner für RTX 4090, Mac und Cloud. Wann sich Eigenbau lohnt.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Für Teams, die LLMs mehr als 4 Stunden täglich betreiben, amortisiert sich eine lokale RTX-4090-Workstation gegenüber Cloud-GPU-Miete in 12–18 Monaten. Unter 50 Stunden pro Monat ist die Cloud günstiger.**',
    quickAnswerTop: {
      question: 'Ist es günstiger, eine lokale LLM-Workstation zu bauen oder Cloud-GPUs zu mieten?',
      answer: 'Cloud-GPU gewinnt bei unter 50 Stunden/Monat (0,35–0,90 $/Std.). Lokale Hardware ist ab 4 Stunden Nutzung täglich günstiger — eine RTX-4090-Workstation amortisiert sich in 12–18 Monaten.',
      bullets: [
        'Cloud-GPU: kein Anfangsinvestment, ideal für gelegentliche Nutzung (< 50 Std./Monat)',
        'Lokale RTX 4090: Break-even nach ~1.800 GPU-Stunden',
        'Mac Mini M4 Pro: Break-even nach ~1.200 Stunden, nur 45 W Verbrauch',
        'Strom: in Deutschland ~0,15–0,20 €/Std. für RTX-4090-System',
        'Versteckte Cloud-Kosten: Speicher, Egress-Gebühren, Leerlauf-Abrechnung',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Eine lokale LLM-Workstation wird nach ca. 1.800 kumulierten Betriebsstunden günstiger als Cloud-GPU-Miete.',
      },
      {
        type: 'plain-terms',
        text: 'Dieser Rechner vergleicht die Gesamtkosten einer eigenen GPU-Maschine mit dem stündlichen Mieten von Cloud-GPUs bei Anbietern wie RunPod oder Lambda Labs.',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Cloud-GPU kostet 0,35–2,50 $/Std. je nach GPU-Klasse und Anbieter',
          'Lokale RTX-4090-Workstation: ca. 3.200 $ Gesamtkosten',
          'Break-even: 1.800 kumulierte Stunden bei Ø 0,50 $/Std. Cloud-Rate',
          'Mac Mini M4 Pro 48 GB: 2.000 $ Einstieg, Break-even bei ~1.200 Stunden',
          'Strom in Deutschland (38 Ct/kWh): ca. 0,16 $/Std. für RTX-4090-System',
          'Cloud gewinnt bei sporadischer oder experimenteller Nutzung',
          'Lokal gewinnt bei täglichem Dauerbetrieb, Datenschutz und Fine-Tuning',
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Wann lohnt sich eine lokale LLM-Workstation gegenüber Cloud-GPU?',
            a: 'Eine RTX-4090-Workstation (ca. 3.200 $ gesamt) amortisiert sich gegenüber 0,50 $/Std. Cloud-GPU nach ca. 6.400 kumulierten Betriebsstunden — bei 8 Std./Tag sind das 2,2 Jahre, bei 16 Std./Tag (gemeinsamer Team-Server) 13 Monate.',
          },
          {
            q: 'Wie wirken sich die deutschen Stromkosten auf den Vergleich aus?',
            a: 'Bei 38 Ct/kWh (Deutschland) verursacht ein RTX-4090-System (450 W) ca. 0,17 €/Std. Stromkosten. Das schmälert den Kostenvorteil lokaler Hardware gegenüber günstiger Cloud-GPU erheblich. Der Mac Mini M4 Pro mit nur 45 W ist hier deutlich effizienter.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wann lohnt sich eine lokale LLM-Workstation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Eine RTX-4090-Workstation amortisiert sich bei 8 Std./Tag Nutzung nach ca. 2,2 Jahren gegenüber Cloud-GPU-Miete zu 0,50 $/Std.' },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'LLM Kostenrechner: GPU kaufen vs. Cloud mieten 2026', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', url: 'https://www.promptquorum.com/de/local-llms/local-llm-cost-calculator-build-vs-rent-2026', inLanguage: 'de' },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: 'Calculateur de coût LLM : construire vs louer 2026',
    seoTitle: 'Calculateur coût LLM local vs cloud GPU 2026',
    metaDescription: 'Comparatif TCO complet : workstation GPU locale vs location cloud GPU (RunPod, Lambda Labs) pour LLM 2026. Seuil de rentabilité à ~1 800 heures GPU.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Pour les équipes utilisant des LLM plus de 4 heures par jour, une workstation RTX 4090 locale est rentabilisée face à la location cloud GPU en 12 à 18 mois. En dessous de 50 heures/mois, le cloud reste plus économique.**',
    quickAnswerTop: {
      question: 'Est-il moins cher de construire un serveur LLM local ou de louer un GPU cloud ?',
      answer: 'Le GPU cloud gagne en dessous de 50 heures/mois (0,35–0,90 $/h). Le matériel local gagne au-delà de 4 h/jour d\'utilisation — une workstation RTX 4090 est amortie en 12–18 mois.',
      bullets: [
        'GPU cloud : sans investissement initial, idéal pour usage occasionnel (< 50 h/mois)',
        'RTX 4090 locale : seuil de rentabilité après ~1 800 heures GPU',
        'Mac Mini M4 Pro : rentabilisé après ~1 200 heures, seulement 45 W',
        'Électricité : ~0,14–0,18 $/h en France pour système RTX 4090',
        'Coûts cachés cloud : stockage, frais d\'egress, facturation en veille',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Une workstation LLM locale devient moins chère que la location cloud GPU après environ 1 800 heures d\'utilisation cumulées.',
      },
      {
        type: 'plain-terms',
        text: 'Ce calculateur compare le coût total de possession d\'une machine GPU locale par rapport au paiement horaire de plateformes cloud comme RunPod ou Lambda Labs.',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'GPU cloud : 0,35–2,50 $/h selon le GPU et le fournisseur',
          'Workstation RTX 4090 locale : ~3 200 $ de coût total',
          'Seuil de rentabilité : 1 800 heures cumulées à 0,50 $/h en moyenne',
          'Mac Mini M4 Pro 48 Go : 2 000 $ d\'entrée, rentabilisé à ~1 200 heures',
          'Électricité France (0,26 €/kWh) : ~0,12 $/h pour système RTX 4090',
          'Cloud gagne pour les charges sporadiques ou expérimentales',
          'Local gagne pour l\'inférence quotidienne, les données sensibles et le fine-tuning',
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Quand une workstation LLM locale est-elle rentable face au cloud ?',
            a: 'Une workstation RTX 4090 (~3 200 $ au total) est rentabilisée face à 0,50 $/h de GPU cloud après environ 6 400 heures cumulées — soit 2,2 ans à 8 h/jour ou 13 mois à 16 h/jour.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Est-il moins cher de construire un serveur LLM local ou de louer un GPU cloud ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Le GPU cloud gagne en dessous de 50 heures/mois. Le matériel local devient rentable au-delà de 4 h/jour d\'utilisation, avec un seuil atteint en 12–18 mois.' },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Calculateur de coût LLM : construire vs louer 2026', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', url: 'https://www.promptquorum.com/fr/local-llms/local-llm-cost-calculator-build-vs-rent-2026', inLanguage: 'fr' },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: 'LLMコスト計算：ローカル構築 vs クラウドレンタル 2026年版',
    seoTitle: 'LLMコスト計算：GPU購入 vs クラウドGPU 2026年版',
    metaDescription: 'ローカルGPUワークステーション vs RunPod/Lambda Labs完全TCO比較 2026年。損益分岐点は累計約1,800GPU時間。電気代を含む詳細計算付き。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**1日4時間以上LLMを稼働するチームには、ローカルRTX 4090ワークステーションがクラウドGPUレンタルより12〜18ヶ月で元が取れます。月50時間未満の場合はクラウドが有利です。**',
    quickAnswerTop: {
      question: 'ローカルLLMサーバーを構築するのとクラウドGPUを借りるのはどちらが安いですか？',
      answer: '月50時間未満はクラウドGPU（0.35〜0.90ドル/時）が有利。1日4時間以上の稼働ならローカルハードウェアが12〜18ヶ月で回収できます。',
      bullets: [
        'クラウドGPU：初期費用ゼロ、月50時間未満の利用に最適',
        'ローカルRTX 4090：累計約1,800GPU時間で損益分岐',
        'Mac Mini M4 Pro：約1,200時間で損益分岐、消費電力45Wのみ',
        '電気代：日本（約30円/kWh）でRTX 4090システム1時間あたり約14円',
        'クラウドの隠れコスト：ストレージ・転送費・アイドル課金',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'ローカルLLMワークステーションは累計約1,800時間使用後にクラウドGPUレンタルより安くなります。',
      },
      {
        type: 'plain-terms',
        text: 'このコスト計算は、ローカルGPUマシンの総所有コストと、RunPodやLambda Labsなどのクラウドプラットフォームへの時間払いを比較するものです。',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'クラウドGPU：GPU種別・プロバイダーにより0.35〜2.50ドル/時',
          'ローカルRTX 4090ワークステーション：総費用約32万円',
          '損益分岐点：平均0.50ドル/時で累計1,800時間',
          'Mac Mini M4 Pro 48GB：20万円、約1,200時間で損益分岐',
          '電気代（日本30円/kWh）：RTX 4090システムで約14円/時',
          'クラウドは断続的・実験的な作業に有利',
          'ローカルは毎日の推論・プライバシー保護・ファインチューニングに有利',
        ],
      },
      faq: {
        faqs: [
          {
            q: 'ローカルLLMワークステーションはいつクラウドGPUより元が取れますか？',
            a: 'RTX 4090ワークステーション（総費用約32万円）は、0.50ドル/時のクラウドGPUに対して累計約6,400時間で元が取れます。1日8時間で約2.2年、1日16時間（チーム共有サーバー）で約13ヶ月です。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ローカルLLMサーバーとクラウドGPUはどちらが安いですか？',
          acceptedAnswer: { '@type': 'Answer', text: '月50時間未満はクラウドGPUが有利。1日4時間以上の稼働ならローカルハードウェアが12〜18ヶ月で回収できます。' },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'LLMコスト計算：GPU購入 vs クラウドGPU 2026年版', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', url: 'https://www.promptquorum.com/ja/local-llms/local-llm-cost-calculator-build-vs-rent-2026', inLanguage: 'ja' },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: 'Calculadora de Costos LLM Local: Construir vs Rentar 2026',
    seoTitle: 'Calculadora de costos LLM local 2026: construir vs rentar',
    metaDescription: 'TCO completo 2026: workstation GPU local vs alquiler cloud (RunPod, Lambda Labs). Punto de equilibrio en ~1.800 horas GPU. Con calculadora de electricidad.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Para equipos que ejecutan LLMs más de 4 horas al día, una workstation RTX 4090 local alcanza el punto de equilibrio frente al alquiler cloud GPU en 12–18 meses y es más barata a largo plazo. Por debajo de 50 horas/mes, el cloud gana en flexibilidad y sin costo inicial.**',
    quickAnswerTop: {
      question: '¿Es más barato construir un servidor LLM local o alquilar GPU en el cloud?',
      answer: 'El cloud GPU gana por debajo de 50 horas/mes (0,35–0,90 $/hr). El hardware local gana con más de 4 horas/día de uso — una workstation RTX 4090 de 1.800 $ se amortiza en 12–18 meses frente a los precios spot de RunPod.',
      bullets: [
        'Cloud GPU: sin costo inicial, ideal para uso ocasional (< 50 hr/mes)',
        'RTX 4090 local: punto de equilibrio tras ~1.800 horas GPU',
        'Mac Mini M4 Pro local: punto de equilibrio tras ~1.200 horas GPU',
        'La electricidad añade 0,02–0,08 $/hr a los costos locales',
        'Costos ocultos del cloud: tarifas de egreso, almacenamiento, facturación en reposo',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Construir una workstation LLM local resulta más barato que alquilar GPU en el cloud tras aproximadamente 1.800 horas de uso acumulado.',
      },
      {
        type: 'plain-terms',
        text: 'Esta calculadora compara el costo total de propiedad de una máquina GPU local frente al pago por hora en plataformas cloud como RunPod o Lambda Labs.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'RunPod GPU Rental',
        url: 'https://www.runpod.io',
        productCategory: 'cloud-gpu',
      },
      {
        productName: 'RTX 4090 (Amazon)',
        url: 'https://www.amazon.com/s?k=RTX+4090',
        productCategory: 'gpu',
      },
      {
        productName: 'Mac Mini M4 Pro',
        url: 'https://www.apple.com/shop/buy-mac/mac-mini',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Cloud GPU cuesta 0,35–2,50 $/hr según el nivel de GPU y el proveedor',
          'Workstation RTX 4090 local: ~3.200 $ de costo total (GPU + sistema)',
          'Punto de equilibrio: 1.800 horas acumuladas a 0,50 $/hr de tarifa cloud media',
          'Mac Mini M4 Pro 48GB: 2.000 $ de entrada, equilibrio en ~1.200 horas cloud',
          'La electricidad añade 0,03–0,08 $/hr a los costos operativos locales',
          'El cloud gana para cargas de trabajo esporádicas, ocasionales o experimentales',
          'Lo local gana para inferencia diaria sostenida, uso con datos sensibles o fine-tuning',
        ],
      },
      cloudPricing: {
        heading: 'Precios de GPU Cloud en 2026',
        body: 'Los precios de GPU cloud varían significativamente según el proveedor, el nivel de GPU y el tipo de compromiso. Los precios spot (interrumpibles) son un 40–70 % más baratos que los bajo demanda, pero pueden interrumpirse.',
        columns: ['GPU', 'VRAM', 'Proveedor', 'Spot $/hr', 'Bajo Demanda $/hr'],
        rows: [
          { GPU: 'RTX 4090', VRAM: '24 GB', Proveedor: 'RunPod', 'Spot $/hr': '$0,28–0,44', 'Bajo Demanda $/hr': '$0,74' },
          { GPU: 'RTX 4090', VRAM: '24 GB', Proveedor: 'Vast.ai', 'Spot $/hr': '$0,32–0,48', 'Bajo Demanda $/hr': '$0,89' },
          { GPU: 'A40', VRAM: '48 GB', Proveedor: 'RunPod', 'Spot $/hr': '$0,44–0,64', 'Bajo Demanda $/hr': '$1,14' },
          { GPU: 'A100 80GB', VRAM: '80 GB', Proveedor: 'Lambda Labs', 'Spot $/hr': '$1,29', 'Bajo Demanda $/hr': '$2,49' },
          { GPU: 'H100 SXM', VRAM: '80 GB', Proveedor: 'RunPod', 'Spot $/hr': '$2,39', 'Bajo Demanda $/hr': '$3,49' },
        ],
      },
      buildCosts: {
        heading: 'Costos de Hardware Local en 2026',
        body: 'Una workstation LLM local completa incluye GPU, CPU, placa base, RAM, almacenamiento, PSU y carcasa. Aquí hay tres configuraciones completas con costos totales del sistema.',
        columns: ['Configuración', 'GPU', 'VRAM', 'Costo Total', 'Modelos Compatibles'],
        rows: [
          { 'Configuración': 'Económica', GPU: 'RTX 3090 (usada)', VRAM: '24 GB', 'Costo Total': '~$1.200', 'Modelos Compatibles': 'Hasta 30B Q4' },
          { 'Configuración': 'Recomendada', GPU: 'RTX 4090', VRAM: '24 GB', 'Costo Total': '~$3.200', 'Modelos Compatibles': 'Hasta 34B Q4, 7B completo' },
          { 'Configuración': 'Potencia', GPU: 'RTX 4090 + 3090', VRAM: '48 GB', 'Costo Total': '~$5.000', 'Modelos Compatibles': 'Hasta 70B Q4' },
          { 'Configuración': 'Mac Mini M4 Pro', GPU: 'M4 Pro (unificada)', VRAM: '48 GB', 'Costo Total': '~$2.000', 'Modelos Compatibles': 'Hasta 70B Q4 vía MLX' },
        ],
      },
      calculator: {
        heading: 'Calculadora de Punto de Equilibrio',
        body: 'Usa esta tabla para encontrar tu punto de equilibrio. Horas mensuales = uso diario promedio × 30 días.',
        columns: ['Horas Mensuales', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)', 'Tiempo para Recuperar $3.200 RTX 4090'],
        rows: [
          { 'Horas Mensuales': '10 hr/mes', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$5/mes', 'Tiempo para Recuperar $3.200 RTX 4090': 'Nunca (53 años)' },
          { 'Horas Mensuales': '30 hr/mes', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$15/mes', 'Tiempo para Recuperar $3.200 RTX 4090': '18 años' },
          { 'Horas Mensuales': '50 hr/mes', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$25/mes', 'Tiempo para Recuperar $3.200 RTX 4090': '10,7 años' },
          { 'Horas Mensuales': '120 hr/mes (4hr/día)', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$60/mes', 'Tiempo para Recuperar $3.200 RTX 4090': '4,4 años' },
          { 'Horas Mensuales': '240 hr/mes (8hr/día)', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$120/mes', 'Tiempo para Recuperar $3.200 RTX 4090': '2,2 años' },
          { 'Horas Mensuales': '480 hr/mes (16hr/día)', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$240/mes', 'Tiempo para Recuperar $3.200 RTX 4090': '13 meses' },
          { 'Horas Mensuales': '720 hr/mes (24hr/día)', 'Costo Cloud/mes (RTX 4090 @ 0,50 $/hr)': '$360/mes', 'Tiempo para Recuperar $3.200 RTX 4090': '9 meses' },
        ],
      },
      electricityCost: {
        heading: 'Electricidad: El Costo Local Oculto',
        body: 'Una RTX 4090 en ejecución consume 350–450 W bajo carga de inferencia. Con el consumo del sistema, espera 400–550 W totales.\n\n- **Promedio EE.UU. (12¢/kWh):** $0,048–0,066/hr\n- **Promedio UE (32¢/kWh):** $0,128–0,176/hr\n- **Promedio España (28¢/kWh):** $0,112–0,154/hr\n\nEl Mac Mini M4 Pro consume solo 30–60 W bajo carga LLM — aproximadamente $0,004–0,008/hr en EE.UU. Esto mejora drásticamente su economía de punto de equilibrio frente a una workstation GPU en regiones con alto costo de electricidad como Alemania o Francia.',
      },
      hiddenCloudCosts: {
        heading: 'Costos Ocultos del Cloud a Considerar',
        body: 'Los precios publicados de GPU cloud no incluyen todos los costos. Considera estos al comparar:\n\n- **Almacenamiento:** $0,10–0,50/GB/mes para pesos del modelo (un modelo 14B Q4 = ~9 GB = $0,90–4,50/mes)\n- **Ancho de banda de egreso:** Transferir las salidas del modelo de vuelta a tu aplicación\n- **Cómputo en reposo:** Las instancias que quedan ejecutándose cobran precio completo\n- **Tiempo de configuración:** Cada sesión cloud necesita cargar el modelo (5–15 min para modelos 70B)\n- **Riesgo de interrupción:** Las instancias spot pueden terminarse en mitad de una generación\n\nCon almacenamiento del modelo y tiempo en reposo, los costos cloud efectivos reales son frecuentemente 1,3–1,7× la tarifa GPU publicada.',
      },
      whenToRent: {
        heading: 'Cuándo Tiene Más Sentido Alquilar en el Cloud',
        body: '**Elige alquiler de GPU cloud cuando:**\n\n- Ejecutas LLMs menos de 4 horas al día\n- Necesitas un nivel de GPU que no puedes permitirte comprar (H100, A100 80 GB)\n- Tu carga de trabajo es esporádica (ejecuciones de fine-tuning 1-2 días al mes)\n- Necesitas múltiples GPUs para inferencia distribuida temporalmente\n- Estás en un país europeo con alto costo eléctrico y solo ejecutas modelos 7B\n- Quieres probar una carga de trabajo antes de comprometerte con hardware\n\n**Elige hardware local cuando:**\n\n- Ejecutas inferencia 4+ horas al día para tu equipo\n- Procesas documentos privados o sensibles que no pueden salir de tu red\n- Necesitas la latencia más baja posible para aplicaciones en tiempo real\n- Tu presupuesto permite un gasto de capital inicial de $2.000–5.000',
      },
      macMiniCase: {
        heading: 'El Caso de Estudio del Mac Mini M4 Pro',
        body: 'El Mac Mini M4 Pro con 48 GB de memoria unificada representa una propuesta de valor inusual: $2.000 por un equivalente a 48 GB de VRAM que consume solo 30–60 W. A 8 horas/día, $0,006/hr de electricidad (EE.UU.), ejecuta modelos 70B Q4 a 12–18 tokens/segundo.\n\nPunto de equilibrio frente a RunPod A40 spot ($0,54/hr):\n- 8 horas/día × 30 días = 240 hr/mes\n- Cloud: 240 × $0,54 = $130/mes\n- Punto de equilibrio: $2.000 ÷ $130 = **15 meses**\n\nPara usuarios europeos que pagan €0,35/kWh, el consumo promedio de 45 W del Mac Mini solo añade €0,016/hr — aún dramáticamente más barato que las tarifas europeas de GPU cloud.',
        affiliateLinks: [
          {
            productName: 'Mac Mini M4 Pro',
            url: 'https://www.apple.com/shop/buy-mac/mac-mini',
            productCategory: 'hardware',
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: '¿Cuál es el punto de equilibrio de una workstation LLM local vs GPU cloud?',
            a: 'Una workstation RTX 4090 ($3.200 en total) alcanza el equilibrio frente a GPU cloud a $0,50/hr en aproximadamente 6.400 horas acumuladas. A 8 horas/día, son 2,2 años. A 16 horas/día (servidor compartido de equipo), son 13 meses.',
          },
          {
            q: '¿El costo de electricidad afecta significativamente la comparación?',
            a: 'En EE.UU. (12¢/kWh), la electricidad añade ~$0,05/hr a los costos locales — es menor. En Alemania (38¢/kWh), añade ~$0,16/hr, lo que reduce de forma significativa la ventaja local. El consumo de 45 W del Mac Mini M4 Pro mantiene los costos de electricidad bajos incluso en países con tarifas altas.',
          },
          {
            q: '¿Es RunPod o Vast.ai más barato para fine-tuning ocasional?',
            a: 'Vast.ai suele ser un 10–20 % más barato que RunPod en precios spot, pero RunPod tiene mejor tiempo de actividad y una función de pods gestionados. Para uso ocasional (< 20 horas/mes), los precios spot de Vast.ai son la opción de menor costo. Para cargas de trabajo que requieren fiabilidad, RunPod Community Cloud es la mejor opción.',
          },
          {
            q: '¿Qué pasa con la depreciación del hardware local?',
            a: 'El hardware GPU se deprecia un 20–40 % en 3 años. Una RTX 4090 comprada a $1.700 puede revenderse por $900–1.200 en 2028. Teniendo esto en cuenta, el costo real del hardware local tras 3 años es (precio de compra − valor de reventa + electricidad). Para la workstation RTX 4090: ($3.200 − $1.200 + $180 electricidad a 8hr/día en EE.UU.) = ~$2.180 en 3 años vs. cloud a $0,50/hr × 8hr/día × 365 × 3 = $4.380.',
          },
          {
            q: '¿Cuánto cuesta ejecutar un modelo 70B localmente?',
            a: 'Un modelo 70B Q4_K_M requiere 48 GB de VRAM/memoria unificada. Opciones de hardware: RTX 3090 dual ($2.000), Mac Mini M4 Pro 48 GB ($2.000) o Mac Studio M4 Max 128 GB ($3.000). La electricidad a 8hr/día en EE.UU. añade $45–90/año. Ejecutar el mismo modelo en RunPod A40 spot a 8hr/día cuesta ~$1.300/año.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuál es el punto de equilibrio de una workstation LLM local vs GPU cloud?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una workstation RTX 4090 ($3.200 en total) alcanza el equilibrio frente a GPU cloud a $0,50/hr en aproximadamente 6.400 horas acumuladas — 2,2 años a 8 horas/día o 13 meses a 16 horas/día.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es más barato construir un servidor LLM local o alquilar GPU en el cloud?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El cloud GPU gana por debajo de 50 horas/mes. El hardware local gana con más de 4 horas/día de uso — una workstation RTX 4090 se amortiza en 12–18 meses frente a los precios spot de RunPod.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta ejecutar un modelo 70B localmente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un modelo 70B Q4_K_M requiere 48 GB de VRAM. Hardware: RTX 3090 dual o Mac Mini M4 Pro 48 GB (~$2.000). La electricidad añade $45–90/año a 8hr/día en EE.UU.',
          },
        },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Calculadora de Costos LLM Local: Construir vs Rentar 2026',
      description: 'Comparativa TCO completa de workstation GPU local vs alquiler de GPU cloud para ejecutar LLMs en 2026.',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      url: 'https://www.promptquorum.com/es/es/local-llms/local-llm-cost-calculator-build-vs-rent-2026',
      inLanguage: 'es',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      about: [
        { '@type': 'Thing', name: 'Costo de LLM local' },
        { '@type': 'Thing', name: 'GPU cloud vs hardware local' },
        { '@type': 'Thing', name: 'Punto de equilibrio GPU' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'RunPod' },
        { '@type': 'SoftwareApplication', name: 'Lambda Labs' },
        { '@type': 'SoftwareApplication', name: 'Vast.ai' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: '本地LLM成本计算器：自建 vs 云租GPU 2026',
    seoTitle: '本地LLM成本：自建GPU工作站 vs 云租GPU 2026',
    metaDescription: '2026年自建GPU工作站与云GPU租赁（RunPod/Lambda Labs）完整生命周期成本（TCO）对比分析：损益平衡点约1,800 GPU小时，含电费、折旧与维护成本计算器，帮您精确判断自建还是上云更划算。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**每天使用LLM超过4小时的团队，本地RTX 4090工作站相比云GPU租用12–18个月即可回本。月使用不足50小时则云端更划算。**',
    quickAnswerTop: {
      question: '自建本地LLM服务器和租用云GPU哪个更便宜？',
      answer: '月用不足50小时选云GPU（0.35–0.90美元/小时）；每天使用超过4小时选本地硬件——RTX 4090工作站12–18个月回本。',
      bullets: [
        '云GPU：无前期成本，适合偶发性使用（<50小时/月）',
        '本地RTX 4090：累计约1,800小时损益平衡',
        'Mac Mini M4 Pro：约1,200小时回本，功耗仅45W',
        '国内电费（0.6元/度）：RTX 4090系统约0.27元/小时',
        '云端隐性费用：存储、出口流量、空闲计费',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: '本地LLM工作站在累计使用约1,800小时后，总成本低于云GPU租用。',
      },
      {
        type: 'plain-terms',
        text: '本计算器对比本地GPU机器的总拥有成本与按小时付费的RunPod、Lambda Labs等云平台费用。',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '云GPU：按GPU型号和提供商，0.35–2.50美元/小时',
          '本地RTX 4090工作站：总成本约3,200美元（约23,000元人民币）',
          '损益平衡点：按平均0.50美元/小时计，累计1,800小时后本地更划算',
          'Mac Mini M4 Pro 48GB：约2,000美元入手，约1,200小时回本',
          '国内电费（0.6元/度）：RTX 4090系统约0.27元/小时',
          '偶发性或实验性负载选云端',
          '日常稳定推理、隐私数据处理、微调任务选本地',
        ],
      },
      faq: {
        faqs: [
          {
            q: '自建本地LLM工作站何时比云GPU划算？',
            a: 'RTX 4090工作站（总成本约3,200美元）相比0.50美元/小时的云GPU，累计约6,400小时后回本——日均8小时约2.2年，日均16小时（团队共享）约13个月。',
          },
          {
            q: '运行70B模型本地需要多少成本？',
            a: '70B Q4_K_M模型需要48GB显存/统一内存。可选方案：双RTX 3090（约14,000元）或Mac Mini M4 Pro 48GB（约14,000元）。国内电费按日均8小时计，约每年200–400元。同等云端方案（RunPod A40 spot）每年约9,000元。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '自建本地LLM服务器和租用云GPU哪个更便宜？',
          acceptedAnswer: { '@type': 'Answer', text: '月用不足50小时选云GPU；每天使用超过4小时选本地硬件，RTX 4090工作站12–18个月回本。' },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '本地LLM成本计算器：自建 vs 云租GPU 2026', author: { '@type': 'Organization', name: 'PromptQuorum' }, datePublished: '2026-05-26', url: 'https://www.promptquorum.com/zh/local-llms/local-llm-cost-calculator-build-vs-rent-2026', inLanguage: 'zh' },
  },
  // VERIFY: modelo de TCO mantido em USD de propósito — GPU em nuvem (RunPod/Lambda/Vast.ai) é cobrada em dólar mundialmente, então o cálculo de ponto de equilíbrio precisa de moeda única para ser coerente (converter só o hardware quebraria as tabelas de retorno). Preços de hardware no varejo brasileiro foram adicionados em BRL como contexto na seção "Custos de Hardware Local" e a eletricidade usa tarifa do Brasil. Links de afiliado ainda apontam para lojas globais — trocar por Amazon.com.br/Kabum/Pichau antes de publicar.
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Cost & Comparisons',
    title: 'Calculadora de Custo de LLM Local: Montar vs Alugar 2026',
    seoTitle: 'Calculadora de Custo de LLM Local 2026: Montar vs Alugar',
    metaDescription: 'Comparação de custo montar vs alugar LLM 2026. Calculadora completa de TCO para workstation com GPU local vs nuvem RunPod/Lambda Labs — equilíbrio em ~1.800 horas de GPU.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Para equipes que rodam LLMs mais de 4 horas por dia, montar uma workstation RTX 4090 local atinge o ponto de equilíbrio frente ao aluguel de GPU em nuvem em 12–18 meses e é mais barata no longo prazo. Abaixo de 50 horas/mês, a nuvem vence pela flexibilidade e pela ausência de custo inicial.**',
    quickAnswerTop: {
      question: 'É mais barato montar um servidor de LLM local ou alugar GPU na nuvem?',
      answer: 'A GPU em nuvem vence abaixo de 50 horas/mês (US$ 0,35–0,90/h). O hardware local vence acima de 4 horas/dia de uso — uma workstation RTX 4090 de US$ 1.800 se paga em 12–18 meses frente aos preços spot do RunPod.',
      bullets: [
        'GPU em nuvem: sem custo inicial, ideal para uso ocasional (< 50 h/mês)',
        'RTX 4090 local: ponto de equilíbrio após ~1.800 horas de GPU',
        'Mac Mini M4 Pro local: ponto de equilíbrio após ~1.200 horas de GPU',
        'A eletricidade acrescenta US$ 0,02–0,08/h aos custos locais',
        'Custos ocultos da nuvem: taxas de egress, armazenamento, cobrança por computação ociosa',
      ],
      updatedDate: '2026-05-26',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Montar uma workstation de LLM local fica mais barato que alugar GPU na nuvem após aproximadamente 1.800 horas de uso acumulado.',
      },
      {
        type: 'plain-terms',
        text: 'Esta calculadora compara o custo total de propriedade de uma máquina com GPU local frente ao pagamento por hora em plataformas de nuvem como RunPod ou Lambda Labs.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'RunPod GPU Rental',
        url: 'https://www.runpod.io',
        productCategory: 'cloud-gpu',
      },
      {
        productName: 'RTX 4090 (Amazon)',
        url: 'https://www.amazon.com/s?k=RTX+4090',
        productCategory: 'gpu',
      },
      {
        productName: 'Mac Mini M4 Pro',
        url: 'https://www.apple.com/shop/buy-mac/mac-mini',
        productCategory: 'hardware',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'GPU em nuvem custa US$ 0,35–2,50/h conforme o nível da GPU e o provedor',
          'Workstation RTX 4090 local: ~US$ 3.200 de custo total (GPU + sistema)',
          'Ponto de equilíbrio: 1.800 horas acumuladas a uma tarifa média de nuvem de US$ 0,50/h',
          'Mac Mini M4 Pro 48GB: US$ 2.000 de entrada, equilíbrio em ~1.200 horas de nuvem',
          'A eletricidade acrescenta US$ 0,03–0,08/h aos custos operacionais locais',
          'A nuvem vence para cargas de trabalho irregulares, ocasionais ou experimentais',
          'O local vence para inferência diária contínua, uso com dados sensíveis ou fine-tuning',
        ],
      },
      cloudPricing: {
        heading: 'Preços de GPU em Nuvem em 2026',
        body: 'Os preços de GPU em nuvem variam significativamente conforme o provedor, o nível de GPU e o tipo de compromisso. Os preços spot (interrompíveis) são 40–70% mais baratos que os sob demanda, mas podem ser interrompidos.',
        columns: ['GPU', 'VRAM', 'Provedor', 'Spot US$/h', 'Sob Demanda US$/h'],
        rows: [
          { GPU: 'RTX 4090', VRAM: '24 GB', Provedor: 'RunPod', 'Spot US$/h': 'US$ 0,28–0,44', 'Sob Demanda US$/h': 'US$ 0,74' },
          { GPU: 'RTX 4090', VRAM: '24 GB', Provedor: 'Vast.ai', 'Spot US$/h': 'US$ 0,32–0,48', 'Sob Demanda US$/h': 'US$ 0,89' },
          { GPU: 'A40', VRAM: '48 GB', Provedor: 'RunPod', 'Spot US$/h': 'US$ 0,44–0,64', 'Sob Demanda US$/h': 'US$ 1,14' },
          { GPU: 'A100 80GB', VRAM: '80 GB', Provedor: 'Lambda Labs', 'Spot US$/h': 'US$ 1,29', 'Sob Demanda US$/h': 'US$ 2,49' },
          { GPU: 'H100 SXM', VRAM: '80 GB', Provedor: 'RunPod', 'Spot US$/h': 'US$ 2,39', 'Sob Demanda US$/h': 'US$ 3,49' },
        ],
      },
      buildCosts: {
        heading: 'Custos de Hardware Local em 2026',
        body: 'Uma workstation de LLM local completa inclui GPU, CPU, placa-mãe, RAM, armazenamento, fonte e gabinete. Veja três configurações completas com os custos totais do sistema (em USD, padrão do mercado global de hardware).\n\n**No varejo brasileiro (jun/2026, Kabum/Pichau/Mercado Livre):** RTX 3090 usada ~R$ 6.000; build RTX 4090 completo ~R$ 17.000; build RTX 4090 + 3090 ~R$ 22.000; Mac Mini M4 Pro 48 GB ~R$ 18.000. Os impostos de importação elevam bastante os preços ante os valores em dólar — confira o câmbio e a loja antes de comprar.',
        columns: ['Configuração', 'GPU', 'VRAM', 'Custo Total', 'Modelos Suportados'],
        rows: [
          { 'Configuração': 'Econômica', GPU: 'RTX 3090 (usada)', VRAM: '24 GB', 'Custo Total': '~US$ 1.200', 'Modelos Suportados': 'Até 30B Q4' },
          { 'Configuração': 'Recomendada', GPU: 'RTX 4090', VRAM: '24 GB', 'Custo Total': '~US$ 3.200', 'Modelos Suportados': 'Até 34B Q4, 7B completo' },
          { 'Configuração': 'Potência', GPU: 'RTX 4090 + 3090', VRAM: '48 GB', 'Custo Total': '~US$ 5.000', 'Modelos Suportados': 'Até 70B Q4' },
          { 'Configuração': 'Mac Mini M4 Pro', GPU: 'M4 Pro (unificada)', VRAM: '48 GB', 'Custo Total': '~US$ 2.000', 'Modelos Suportados': 'Até 70B Q4 via MLX' },
        ],
      },
      calculator: {
        heading: 'Calculadora de Ponto de Equilíbrio',
        body: 'Use esta tabela para encontrar seu ponto de equilíbrio. Horas mensais = uso médio diário × 30 dias.',
        columns: ['Horas Mensais', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)', 'Tempo para Recuperar US$ 3.200 da RTX 4090'],
        rows: [
          { 'Horas Mensais': '10 h/mês', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 5/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': 'Nunca (53 anos)' },
          { 'Horas Mensais': '30 h/mês', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 15/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': '18 anos' },
          { 'Horas Mensais': '50 h/mês', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 25/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': '10,7 anos' },
          { 'Horas Mensais': '120 h/mês (4h/dia)', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 60/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': '4,4 anos' },
          { 'Horas Mensais': '240 h/mês (8h/dia)', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 120/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': '2,2 anos' },
          { 'Horas Mensais': '480 h/mês (16h/dia)', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 240/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': '13 meses' },
          { 'Horas Mensais': '720 h/mês (24h/dia)', 'Custo Nuvem/mês (RTX 4090 @ US$ 0,50/h)': 'US$ 360/mês', 'Tempo para Recuperar US$ 3.200 da RTX 4090': '9 meses' },
        ],
      },
      electricityCost: {
        heading: 'Eletricidade: O Custo Local Oculto',
        // VERIFY: tarifa de energia do Brasil (~R$ 0,80/kWh) é estimativa — varia muito por distribuidora e bandeira tarifária; confirmar antes de publicar.
        body: 'Uma RTX 4090 em execução consome 350–450 W sob carga de inferência. Com o consumo do sistema, espere 400–550 W no total.\n\n- **Média EUA (12¢/kWh):** US$ 0,048–0,066/h\n- **Média UE (32¢/kWh):** US$ 0,128–0,176/h\n- **Média Brasil (~R$ 0,80/kWh):** R$ 0,32–0,44/h\n\nO Mac Mini M4 Pro consome apenas 30–60 W sob carga de LLM — cerca de US$ 0,004–0,008/h nos EUA. Isso melhora drasticamente a economia de ponto de equilíbrio frente a uma workstation com GPU em regiões com alto custo de energia.',
      },
      hiddenCloudCosts: {
        heading: 'Custos Ocultos da Nuvem a Considerar',
        body: 'Os preços anunciados de GPU em nuvem não incluem todos os custos. Considere estes ao comparar:\n\n- **Armazenamento:** US$ 0,10–0,50/GB/mês para os pesos do modelo (um modelo 14B Q4 = ~9 GB = US$ 0,90–4,50/mês)\n- **Largura de banda de saída (egress):** Transferir as saídas do modelo de volta para a sua aplicação\n- **Computação ociosa:** Instâncias deixadas em execução cobram preço cheio\n- **Tempo de configuração:** Cada sessão na nuvem precisa carregar o modelo (5–15 min para modelos 70B)\n- **Risco de interrupção:** Instâncias spot podem ser encerradas no meio de uma geração\n\nCom o armazenamento do modelo e o tempo ocioso, os custos efetivos reais da nuvem costumam ser 1,3–1,7× a tarifa de GPU anunciada.',
      },
      whenToRent: {
        heading: 'Quando Alugar na Nuvem Faz Mais Sentido',
        body: '**Escolha o aluguel de GPU em nuvem quando:**\n\n- Você usa LLMs menos de 4 horas por dia\n- Você precisa de um nível de GPU que não pode comprar (H100, A100 80 GB)\n- Sua carga de trabalho é esporádica (execuções de fine-tuning de 1-2 dias por mês)\n- Você precisa de várias GPUs para inferência distribuída temporariamente\n- Você está em um país com alto custo de energia e roda apenas modelos 7B\n- Você quer testar uma carga de trabalho antes de investir em hardware\n\n**Escolha hardware local quando:**\n\n- Você roda inferência 4+ horas por dia para a sua equipe\n- Você processa documentos privados ou sensíveis que não podem sair da sua rede\n- Você precisa da menor latência possível para aplicações em tempo real\n- Seu orçamento permite um investimento inicial de US$ 2.000–5.000',
      },
      macMiniCase: {
        heading: 'O Estudo de Caso do Mac Mini M4 Pro',
        body: 'O Mac Mini M4 Pro com 48 GB de memória unificada representa uma proposta de valor incomum: US$ 2.000 por um equivalente a 48 GB de VRAM que consome apenas 30–60 W. A 8 horas/dia, US$ 0,006/h de eletricidade (EUA), ele roda modelos 70B Q4 a 12–18 tokens/segundo.\n\nPonto de equilíbrio frente ao RunPod A40 spot (US$ 0,54/h):\n- 8 horas/dia × 30 dias = 240 h/mês\n- Nuvem: 240 × US$ 0,54 = US$ 130/mês\n- Ponto de equilíbrio: US$ 2.000 ÷ US$ 130 = **15 meses**\n\nPara usuários que pagam tarifas de energia mais altas, o consumo médio de 45 W do Mac Mini acrescenta muito pouco por hora — ainda dramaticamente mais barato que as tarifas de GPU em nuvem.',
        affiliateLinks: [
          {
            productName: 'Mac Mini M4 Pro',
            url: 'https://www.apple.com/shop/buy-mac/mac-mini',
            productCategory: 'hardware',
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Qual é o ponto de equilíbrio de uma workstation de LLM local vs GPU em nuvem?',
            a: 'Uma workstation RTX 4090 (US$ 3.200 no total) atinge o equilíbrio frente a uma GPU em nuvem a US$ 0,50/h em aproximadamente 6.400 horas acumuladas. A 8 horas/dia, são 2,2 anos. A 16 horas/dia (servidor compartilhado da equipe), são 13 meses.',
          },
          {
            q: 'O custo de eletricidade afeta significativamente a comparação?',
            a: 'Nos EUA (12¢/kWh), a eletricidade acrescenta ~US$ 0,05/h aos custos locais — é pouco. Em regiões com energia cara, pode acrescentar mais de US$ 0,15/h, o que reduz significativamente a vantagem local. O consumo de 45 W do Mac Mini M4 Pro mantém os custos de eletricidade baixos mesmo em países com tarifas altas.',
          },
          {
            q: 'RunPod ou Vast.ai é mais barato para fine-tuning ocasional?',
            a: 'O Vast.ai costuma ser 10–20% mais barato que o RunPod nos preços spot, mas o RunPod tem melhor disponibilidade (uptime) e um recurso de pods gerenciados. Para uso ocasional (< 20 horas/mês), os preços spot do Vast.ai são a opção de menor custo. Para cargas de trabalho que exigem confiabilidade, o RunPod Community Cloud é a melhor escolha.',
          },
          {
            q: 'E quanto à depreciação do hardware local?',
            a: 'O hardware de GPU se deprecia 20–40% em 3 anos. Uma RTX 4090 comprada por US$ 1.700 pode ser revendida por US$ 900–1.200 em 2028. Levando isso em conta, o custo real do hardware local após 3 anos é (preço de compra − valor de revenda + eletricidade). Para a workstation RTX 4090: (US$ 3.200 − US$ 1.200 + US$ 180 de eletricidade a 8h/dia nos EUA) = ~US$ 2.180 em 3 anos vs. nuvem a US$ 0,50/h × 8h/dia × 365 × 3 = US$ 4.380.',
          },
          {
            q: 'Quanto custa rodar um modelo 70B localmente?',
            a: 'Um modelo 70B Q4_K_M requer 48 GB de VRAM/memória unificada. Opções de hardware: RTX 3090 dupla (US$ 2.000), Mac Mini M4 Pro 48 GB (US$ 2.000) ou Mac Studio M4 Max 128 GB (US$ 3.000). A eletricidade a 8h/dia nos EUA acrescenta US$ 45–90/ano. Rodar o mesmo modelo no RunPod A40 spot a 8h/dia custa ~US$ 1.300/ano.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual é o ponto de equilíbrio de uma workstation de LLM local vs GPU em nuvem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Uma workstation RTX 4090 (US$ 3.200 no total) atinge o equilíbrio frente a uma GPU em nuvem a US$ 0,50/h em aproximadamente 6.400 horas acumuladas — 2,2 anos a 8 horas/dia ou 13 meses a 16 horas/dia.',
          },
        },
        {
          '@type': 'Question',
          name: 'É mais barato montar um servidor de LLM local ou alugar GPU na nuvem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A GPU em nuvem vence abaixo de 50 horas/mês. O hardware local vence acima de 4 horas/dia de uso — uma workstation RTX 4090 se paga em 12–18 meses frente aos preços spot do RunPod.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto custa rodar um modelo 70B localmente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Um modelo 70B Q4_K_M requer 48 GB de VRAM. Hardware: RTX 3090 dupla ou Mac Mini M4 Pro 48 GB (~US$ 2.000). A eletricidade acrescenta US$ 45–90/ano a 8h/dia nos EUA.',
          },
        },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Calculadora de Custo de LLM Local: Montar vs Alugar 2026',
      description: 'Comparação completa de TCO entre workstation com GPU local e aluguel de GPU em nuvem para rodar LLMs em 2026.',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      url: 'https://www.promptquorum.com/pt/pt/local-llms/local-llm-cost-calculator-build-vs-rent-2026',
      inLanguage: 'pt-BR',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      about: [
        { '@type': 'Thing', name: 'Custo de LLM local' },
        { '@type': 'Thing', name: 'GPU em nuvem vs hardware local' },
        { '@type': 'Thing', name: 'Ponto de equilíbrio de GPU' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'RunPod' },
        { '@type': 'SoftwareApplication', name: 'Lambda Labs' },
        { '@type': 'SoftwareApplication', name: 'Vast.ai' },
      ],
    },
  },
}
