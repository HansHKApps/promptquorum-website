import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best GPU Under $300 for Local LLMs in 2026?',
    seoTitle: 'Best GPU Under $300 for Local LLM 2026 | Prompt Bites',
    metaDescription: 'Best GPU under $300 for local LLMs: used RTX 3060 12 GB ($150-250) wins on CUDA support. RX 6700 XT ($130-200) is cheaper. May 2026 snapshot.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Budget buyers choosing a first GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      'The best GPU under $300 for local LLMs is a used NVIDIA RTX 3060 12 GB ($150-250 in May 2026). Its 12 GB of VRAM runs every 7B model and most 13B models at Q4, and NVIDIA CUDA works out of the box with Ollama. The AMD RX 6700 XT ($130-200 used) is cheaper but needs ROCm setup.',
    toc: [
      { label: 'Best Pick: Used RTX 3060 12 GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'Under $300, two used cards dominate local LLM inference: the NVIDIA RTX 3060 12 GB and the AMD RX 6700 XT. Both carry 12 GB of VRAM — enough for 7B and most 13B models at Q4 quantization. The difference is software friction, not capacity.',
    quickAnswerTop: {
      en: {
        question: 'What is the best GPU under $300 for running local LLMs?',
        answer: 'Used RTX 3060 12GB at $150-220 is the best GPU under $300 for local LLMs — 12 GB VRAM runs all 7B and most 14B models.',
        bullets: [
          'RTX 3060 12 GB runs Llama 3 8B Q4_K_M at ~25 tok/s and Qwen 14B Q4_K_M at ~15 tok/s.',
          'RX 6700 XT 12 GB is $20-40 cheaper but requires Linux for ROCm; avoid on Windows.',
          'Avoid 8 GB GPUs under $300 — the VRAM ceiling blocks 14B models entirely.',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist die beste GPU unter 300 € für lokale LLMs?',
        answer: 'Gebrauchte RTX 3060 12 GB für 140-200 € ist die beste GPU unter 300 € für lokale LLMs — 12 GB VRAM führt alle 7B- und die meisten 14B-Modelle aus.',
        bullets: [
          'RTX 3060 12 GB läuft Llama 3 8B Q4_K_M mit ~25 tok/s und Qwen 14B Q4_K_M mit ~15 tok/s.',
          'RX 6700 XT 12 GB ist 20-40 € günstiger, erfordert aber Linux für ROCm; Windows vermeiden.',
          'GPUs mit 8 GB unter 300 € vermeiden — die VRAM-Grenze blockiert 14B-Modelle vollständig.',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Quelle est la meilleure GPU à moins de 300 € pour les LLMs locaux ?',
        answer: 'RTX 3060 12 GB d\'occasion à 140-200 € est la meilleure GPU sous 300 € pour les LLMs locaux — 12 Go de VRAM suffit pour tous les modèles 7B et la plupart des 14B.',
        bullets: [
          'RTX 3060 12 GB fait tourner Llama 3 8B Q4_K_M à ~25 tok/s et Qwen 14B Q4_K_M à ~15 tok/s.',
          'RX 6700 XT 12 GB est 20-40 € moins cher mais nécessite Linux pour ROCm ; éviter sur Windows.',
          'Éviter les GPU 8 GB sous 300 € — le plafond VRAM bloque entièrement les modèles 14B.',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '300ドル以下でローカルLLMに最適なGPUは？',
        answer: '中古RTX 3060 12 GBが2万〜3万円でローカルLLM向け最高の300ドル以下GPU — 12 GB VRAMで全7Bと大半の14Bモデルを動かせます。',
        bullets: [
          'RTX 3060 12 GBはLlama 3 8B Q4_K_Mを~25 tok/s、Qwen 14B Q4_K_Mを~15 tok/sで動作。',
          'RX 6700 XT 12 GBは2,000〜4,000円安いがROCmにはLinux必須；Windowsは避ける。',
          '300ドル以下の8 GB GPUは避ける — VRAMの上限が14Bモデルを完全にブロック。',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '300美元以下本地LLM最佳GPU是什么？',
        answer: '二手RTX 3060 12 GB售价150-220美元，是300美元以下本地LLM最佳GPU — 12 GB显存可运行所有7B和大多数14B模型。',
        bullets: [
          'RTX 3060 12 GB运行Llama 3 8B Q4_K_M约25 tok/s，Qwen 14B Q4_K_M约15 tok/s。',
          'RX 6700 XT 12 GB便宜20-40美元，但ROCm需要Linux；Windows上避免使用。',
          '避免300美元以下的8 GB GPU — 显存上限完全阻止14B模型。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: used NVIDIA RTX 3060 12 GB at $150-250 (May 2026) — CUDA works instantly with Ollama and llama.cpp',
          'Cheapest pick: used AMD RX 6700 XT at $130-200 — 12 GB VRAM, but ROCm setup adds 3-5 hours of work',
          'Both cards run every 7B model and most 13B models at Q4 quantization; neither fits a 70B model',
          'Buy the RTX 3060 in its 12 GB version — the 6 GB variant only runs 3B models and is not worth it',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Used NVIDIA RTX 3060 12 GB',
        content: [
          '<strong>The used NVIDIA RTX 3060 12 GB is the best GPU under $300 for local LLMs because 12 GB of VRAM plus zero-setup CUDA support gives you a working LLM box in minutes.</strong> At $150-250 in the May 2026 used market, it runs Mistral Small, Llama 3 8B, and Qwen3 8B at 15-20 tokens per second, and most 13B models at Q4.',
          'The RTX 3060 wins on software. Ollama and llama.cpp detect NVIDIA GPUs via CUDA automatically on Windows and Linux — no driver hunting, no ROCm. The AMD RX 6700 XT ($130-200 used) saves $30-80 and matches the 12 GB capacity, but ROCm setup on Linux typically costs 3-5 hours and is unsupported on Windows for fast inference.',
          'Choose the RX 6700 XT only if budget is the single deciding factor and you are comfortable on Linux. For everyone else, the RTX 3060 12 GB is the safer first GPU. Avoid the 6 GB RTX 3060 variant — it looks identical in listings but only fits 3B models.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Check RTX 3060 12GB price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Check RTX 3060 12GB price on Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'Check RX 6700 XT price on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT for Local LLMs',
        content: [
          '<strong>Both cards carry 12 GB of VRAM, so model capacity is identical — the decision is CUDA versus ROCm.</strong> Prices below are a May 2026 US used-market snapshot; the 2026 memory shortage keeps GPU prices volatile, so re-check before buying.',
        ],
        columns: ['GPU', 'VRAM', 'Price (May 2026)', 'Setup', 'Best for'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Price (May 2026)': '$150-250 used',
            'Setup': 'CUDA, instant',
            'Best for': 'Best pick — no setup friction',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Price (May 2026)': '$130-200 used',
            'Setup': 'ROCm, 3-5 hours',
            'Best for': 'Cheapest, accepts AMD setup',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Sub-$300 GPUs for Local LLMs',
        faqs: [
          {
            q: 'Can a $300 GPU run local LLMs well?',
            a: 'Yes. A used RTX 3060 12 GB or RX 6700 XT runs every 7B model at 15-20 tokens per second and most 13B models at Q4 quantization. Both have 12 GB of VRAM, which is enough for general chat, coding assistance, and summarization.',
          },
          {
            q: 'Why pick the RTX 3060 over the cheaper RX 6700 XT?',
            a: 'The RTX 3060 uses NVIDIA CUDA, which Ollama and llama.cpp detect automatically. The RX 6700 XT needs ROCm setup — typically 3-5 hours on Linux and unsupported on Windows for fast inference. The $30-80 you save rarely covers that time.',
          },
          {
            q: 'Should I buy the 6 GB or 12 GB RTX 3060?',
            a: 'Buy the 12 GB version. The 6 GB RTX 3060 only fits 3B models, half the parameter count of the 7B class. The two variants look identical in listings — confirm the VRAM before buying.',
          },
          {
            q: 'Can a sub-$300 GPU run a 70B model?',
            a: 'No. A 70B model at Q4 needs roughly 40 GB of VRAM. A 12 GB card maxes out around 14B models at Q4. For larger models you need a higher tier or a multi-GPU build.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best GPU Under $600 for Local LLMs](/prompt-bites/best-gpu-under-600-local-llm) — the next tier up: RTX 4060 Ti 16 GB',
          '[Best Ollama Models for RTX 3060 12 GB](/prompt-bites/best-ollama-models-rtx-3060-12gb) — which models to pull once you have the card',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — the full eight-GPU comparison across all budget tiers',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'Beste GPU unter 300 € für lokale LLMs 2026?',
    seoTitle: 'Beste GPU unter 300 € für lokale LLMs 2026 | Prompt Bites',
    metaDescription: 'Beste GPU unter 300 € für lokale LLMs: gebrauchte RTX 3060 12 GB. CUDA läuft sofort mit Ollama. RX 6700 XT ist günstiger, braucht aber ROCm. Mai 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Budget-Käufer, die eine erste GPU für lokale LLM-Inferenz suchen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '4 Min. Lesezeit',
    leadAnswerBlock:
      'Die beste GPU unter 300 € für lokale LLMs ist eine gebrauchte NVIDIA RTX 3060 12 GB. Ihre 12 GB VRAM führen jedes 7B-Modell und die meisten 13B-Modelle bei Q4 aus, und NVIDIA CUDA läuft mit Ollama sofort. Die AMD RX 6700 XT ist günstiger, benötigt aber eine ROCm-Einrichtung.',
    toc: [
      { label: 'Beste Wahl: gebrauchte RTX 3060 12 GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro:
      'Unter 300 € dominieren zwei gebrauchte Karten die lokale LLM-Inferenz: die NVIDIA RTX 3060 12 GB und die AMD RX 6700 XT. Beide bieten 12 GB VRAM — genug für 7B- und die meisten 13B-Modelle bei Q4-Quantisierung. Der Unterschied liegt in der Software-Reibung, nicht in der Kapazität.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste GPU unter 300 € für lokale LLMs?',
        answer: 'Gebrauchte RTX 3060 12 GB für 140-200 € ist die beste GPU unter 300 € für lokale LLMs — 12 GB VRAM führt alle 7B- und die meisten 14B-Modelle aus.',
        bullets: [
          'RTX 3060 12 GB läuft Llama 3 8B Q4_K_M mit ~25 tok/s und Qwen 14B Q4_K_M mit ~15 tok/s.',
          'RX 6700 XT 12 GB ist 20-40 € günstiger, erfordert aber Linux für ROCm; Windows vermeiden.',
          'GPUs mit 8 GB unter 300 € vermeiden — die VRAM-Grenze blockiert 14B-Modelle vollständig.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: gebrauchte NVIDIA RTX 3060 12 GB — CUDA arbeitet sofort mit Ollama und llama.cpp',
          'Günstigste Wahl: gebrauchte AMD RX 6700 XT — 12 GB VRAM, aber ROCm-Einrichtung kostet 3-5 Stunden',
          'Beide Karten führen jedes 7B-Modell und die meisten 13B-Modelle bei Q4 aus; keine reicht für ein 70B-Modell',
          'Kaufen Sie die RTX 3060 in der 12-GB-Version — die 6-GB-Variante führt nur 3B-Modelle aus und lohnt nicht',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: gebrauchte NVIDIA RTX 3060 12 GB',
        content: [
          '<strong>Die gebrauchte NVIDIA RTX 3060 12 GB ist die beste GPU unter 300 € für lokale LLMs, weil 12 GB VRAM plus CUDA-Unterstützung ohne Einrichtungsaufwand in Minuten ein funktionierendes LLM-System ergeben.</strong> Auf dem deutschen Gebrauchtmarkt führt sie Mistral Small, Llama 3 8B und Qwen3 8B mit 15-20 Token pro Sekunde aus und die meisten 13B-Modelle bei Q4.',
          'Die RTX 3060 gewinnt bei der Software. Ollama und llama.cpp erkennen NVIDIA-GPUs unter Windows und Linux automatisch über CUDA — keine Treibersuche, kein ROCm. Die AMD RX 6700 XT erreicht dieselbe 12-GB-Kapazität, doch die ROCm-Einrichtung unter Linux kostet typischerweise 3-5 Stunden und wird unter Windows für schnelle Inferenz nicht unterstützt.',
          'Wählen Sie die RX 6700 XT nur, wenn das Budget der einzige Entscheidungsfaktor ist und Sie sich mit Linux wohlfühlen. Für alle anderen ist die RTX 3060 12 GB die sicherere erste GPU. Vermeiden Sie die 6-GB-Variante — sie sieht in Anzeigen identisch aus, passt aber nur für 3B-Modelle.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '545-575 €',
            label: 'RTX 3060 12GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '545-575 €',
            label: 'RTX 3060 12GB Preis bei Mindfactory prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '530-550 €',
            label: 'RX 6700 XT Preis bei Amazon.de prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT für lokale LLMs',
        content: [
          '<strong>Beide Karten haben 12 GB VRAM, die Modellkapazität ist also identisch — die Entscheidung lautet CUDA gegen ROCm.</strong> Die Preise unten sind eine Momentaufnahme des deutschen Marktes von Mai 2026; die Speicherknappheit 2026 hält die GPU-Preise volatil — vor dem Kauf erneut prüfen.',
        ],
        columns: ['GPU', 'VRAM', 'Preis (Mai 2026)', 'Einrichtung', 'Geeignet für'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Preis (Mai 2026)': '545-575 € neu',
            'Einrichtung': 'CUDA, sofort',
            'Geeignet für': 'Beste Wahl — keine Reibung',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Preis (Mai 2026)': '530-550 € neu',
            'Einrichtung': 'ROCm, 3-5 Stunden',
            'Geeignet für': 'Günstigste, AMD-Setup akzeptiert',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu GPUs unter 300 € für lokale LLMs',
        faqs: [
          {
            q: 'Kann eine 300-€-GPU lokale LLMs gut ausführen?',
            a: 'Ja. Eine gebrauchte RTX 3060 12 GB oder RX 6700 XT führt jedes 7B-Modell mit 15-20 Token pro Sekunde aus und die meisten 13B-Modelle bei Q4-Quantisierung. Beide haben 12 GB VRAM — genug für allgemeinen Chat, Coding-Unterstützung und Zusammenfassung.',
          },
          {
            q: 'Warum die RTX 3060 statt der günstigeren RX 6700 XT?',
            a: 'Die RTX 3060 nutzt NVIDIA CUDA, das Ollama und llama.cpp automatisch erkennen. Die RX 6700 XT benötigt ROCm — typischerweise 3-5 Stunden unter Linux und unter Windows für schnelle Inferenz nicht unterstützt. Die gesparten 30-80 € decken diese Zeit selten.',
          },
          {
            q: 'Soll ich die 6-GB- oder 12-GB-RTX 3060 kaufen?',
            a: 'Kaufen Sie die 12-GB-Version. Die 6-GB-RTX 3060 passt nur für 3B-Modelle, halb so viele Parameter wie die 7B-Klasse. Die Varianten sehen in Anzeigen identisch aus — den VRAM vor dem Kauf prüfen.',
          },
          {
            q: 'Kann eine GPU unter 300 € ein 70B-Modell ausführen?',
            a: 'Nein. Ein 70B-Modell bei Q4 benötigt rund 40 GB VRAM. Eine 12-GB-Karte schafft maximal 14B-Modelle bei Q4. Für größere Modelle brauchen Sie eine höhere Klasse oder einen Multi-GPU-Aufbau.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste GPU unter 600 € für lokale LLMs](/prompt-bites/best-gpu-under-600-local-llm) — die nächste Stufe: RTX 4060 Ti 16 GB',
          '[Beste Ollama-Modelle für RTX 3060 12 GB](/prompt-bites/best-ollama-models-rtx-3060-12gb) — welche Modelle nach dem Kauf laden',
          '[GPU-Kaufberatung für lokale LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — der vollständige Acht-GPU-Vergleich über alle Klassen',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'Meilleur GPU sous 300 € pour LLM local en 2026 ?',
    seoTitle: 'Meilleur GPU sous 300 € LLM local 2026 | Prompt Bites',
    metaDescription: 'Meilleur GPU sous 300 € pour LLM local : RTX 3060 12 GB d\'occasion. CUDA fonctionne avec Ollama. RX 6700 XT moins chère mais nécessite ROCm. Mai 2026.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs au budget serré pour une première GPU dédiée à l\'inférence LLM locale',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '4 min de lecture',
    leadAnswerBlock:
      'Le meilleur GPU sous 300 € pour les LLM locaux est une NVIDIA RTX 3060 12 GB d\'occasion. Ses 12 GB de VRAM exécutent chaque modèle 7B et la plupart des 13B en Q4, et NVIDIA CUDA fonctionne avec Ollama sans configuration. La AMD RX 6700 XT est moins chère mais demande ROCm.',
    toc: [
      { label: 'Meilleur choix : RTX 3060 12 GB d\'occasion', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro:
      'Sous 300 €, deux cartes d\'occasion dominent l\'inférence LLM locale : la NVIDIA RTX 3060 12 GB et la AMD RX 6700 XT. Les deux offrent 12 GB de VRAM — suffisant pour les modèles 7B et la plupart des 13B en quantification Q4. La différence réside dans la friction logicielle, pas dans la capacité.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure GPU à moins de 300 € pour les LLMs locaux ?',
        answer: 'RTX 3060 12 GB d\'occasion à 140-200 € est la meilleure GPU sous 300 € pour les LLMs locaux — 12 Go de VRAM suffit pour tous les modèles 7B et la plupart des 14B.',
        bullets: [
          'RTX 3060 12 GB fait tourner Llama 3 8B Q4_K_M à ~25 tok/s et Qwen 14B Q4_K_M à ~15 tok/s.',
          'RX 6700 XT 12 GB est 20-40 € moins cher mais nécessite Linux pour ROCm ; éviter sur Windows.',
          'Éviter les GPU 8 GB sous 300 € — le plafond VRAM bloque entièrement les modèles 14B.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : NVIDIA RTX 3060 12 GB d\'occasion — CUDA fonctionne immédiatement avec Ollama et llama.cpp',
          'Choix le moins cher : AMD RX 6700 XT d\'occasion — 12 GB de VRAM, mais ROCm demande 3 à 5 heures de configuration',
          'Les deux cartes exécutent tout modèle 7B et la plupart des 13B en Q4 ; aucune ne tient un modèle 70B',
          'Acheter la RTX 3060 en version 12 GB — la variante 6 GB ne fait tourner que des 3B',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : NVIDIA RTX 3060 12 GB d\'occasion',
        content: [
          '<strong>La NVIDIA RTX 3060 12 GB d\'occasion est le meilleur GPU sous 300 € pour les LLM locaux : 12 GB de VRAM et CUDA sans configuration donnent un poste LLM opérationnel en quelques minutes.</strong> Elle exécute Mistral Small, Llama 3 8B et Qwen3 8B à 15-20 tokens par seconde, et la plupart des 13B en Q4.',
          'La RTX 3060 gagne sur le logiciel. Ollama et llama.cpp détectent les GPU NVIDIA automatiquement via CUDA sous Windows et Linux — pas de chasse aux pilotes, pas de ROCm. La AMD RX 6700 XT offre la même capacité de 12 GB, mais ROCm sous Linux coûte typiquement 3 à 5 heures et n\'est pas pris en charge sous Windows pour une inférence rapide.',
          'Choisissez la RX 6700 XT uniquement si le budget est le seul critère et que Linux ne vous gêne pas. Sinon, la RTX 3060 12 GB est le premier GPU plus sûr. Évitez la variante 6 GB — elle semble identique en annonce mais ne tient que les modèles 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '330-400 €',
            label: 'Vérifier le prix RTX 3060 12GB sur Amazon.fr',
          },
          {
            url: 'https://www.ldlc.com/recherche/RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '330-400 €',
            label: 'Vérifier le prix RTX 3060 12GB sur LDLC',
          },
          {
            url: 'https://www.amazon.fr/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: 'vérifier le prix',
            label: 'Vérifier le prix RX 6700 XT sur Amazon.fr',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT pour LLM local',
        content: [
          '<strong>Les deux cartes embarquent 12 GB de VRAM, donc la capacité modèle est identique — le choix se joue entre CUDA et ROCm.</strong> Prix ci-dessous : aperçu du marché français en mai 2026 ; la pénurie mémoire de 2026 maintient les prix volatils, à revérifier.',
        ],
        columns: ['GPU', 'VRAM', 'Prix (mai 2026)', 'Mise en route', 'Idéal pour'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Prix (mai 2026)': '330-400 € neuf',
            'Mise en route': 'CUDA, instantané',
            'Idéal pour': 'Meilleur choix — zéro friction',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Prix (mai 2026)': 'vérifier le prix (occasion)',
            'Mise en route': 'ROCm, 3-5 heures',
            'Idéal pour': 'La moins chère, configuration AMD acceptée',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les GPU sous 300 € pour LLM local',
        faqs: [
          {
            q: 'Un GPU à 300 € peut-il faire tourner des LLM locaux ?',
            a: 'Oui. Une RTX 3060 12 GB ou RX 6700 XT d\'occasion exécute chaque modèle 7B à 15-20 tokens par seconde et la plupart des 13B en Q4. Les 12 GB de VRAM suffisent pour le chat, l\'assistance au code et le résumé.',
          },
          {
            q: 'Pourquoi choisir la RTX 3060 plutôt que la RX 6700 XT moins chère ?',
            a: 'La RTX 3060 utilise NVIDIA CUDA, détecté automatiquement par Ollama et llama.cpp. La RX 6700 XT exige ROCm — 3 à 5 heures sous Linux et non supporté sous Windows pour l\'inférence rapide. Les 30-80 € économisés couvrent rarement ce temps.',
          },
          {
            q: 'Acheter la RTX 3060 6 GB ou 12 GB ?',
            a: 'Achetez la version 12 GB. La 6 GB ne tient que les modèles 3B, soit la moitié des paramètres d\'un 7B. Les deux variantes ont des annonces identiques — vérifiez la VRAM avant achat.',
          },
          {
            q: 'Un GPU sous 300 € peut-il exécuter un modèle 70B ?',
            a: 'Non. Un modèle 70B en Q4 demande environ 40 GB de VRAM. Une carte 12 GB plafonne à 14B en Q4. Pour des modèles plus grands, il faut une gamme supérieure ou un montage multi-GPU.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur GPU sous 600 € pour LLM local](/prompt-bites/best-gpu-under-600-local-llm) — la gamme au-dessus : RTX 4060 Ti 16 GB',
          '[Meilleurs modèles Ollama pour RTX 3060 12 GB](/prompt-bites/best-ollama-models-rtx-3060-12gb) — quels modèles charger',
          '[Guide d\'achat GPU pour LLM local 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — la comparaison complète de huit GPU',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: '2026年のローカルLLM向け、300ドル以下で最適なGPUは？',
    seoTitle: '300ドル以下のローカルLLM向けGPU 2026 | Prompt Bites',
    metaDescription: '300ドル以下のローカルLLM向けベストGPUは中古RTX 3060 12 GB。CUDAがOllamaで即動作。RX 6700 XTは安いがROCm設定が必要。2026年5月時点。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLM推論用に最初のGPUを選ぶ予算重視の購入者',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '4分で読める',
    leadAnswerBlock:
      'ローカルLLM向けに300ドル(または相当額)以下で最適なGPUは中古のNVIDIA RTX 3060 12 GBです。12 GBのVRAMで7Bモデル全てとほとんどの13BモデルをQ4で動かせ、NVIDIA CUDAはOllamaですぐ動きます。AMD RX 6700 XTは安価ですがROCm設定が必要です。',
    toc: [
      { label: 'ベストピック：中古RTX 3060 12 GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro:
      '日本市場でローカルLLM推論用の手頃なGPUとして、中古のNVIDIA RTX 3060 12 GBとAMD RX 6700 XTが候補に挙がります。両方とも12 GBのVRAMを搭載し、7Bモデルとほとんどの13BモデルをQ4量子化で動かせます。違いは容量ではなくソフトウェアの手間です。',
    quickAnswerTop: {
      ja: {
        question: '300ドル以下でローカルLLMに最適なGPUは？',
        answer: '中古RTX 3060 12 GBが2万〜3万円でローカルLLM向け最高の300ドル以下GPU — 12 GB VRAMで全7Bと大半の14Bモデルを動かせます。',
        bullets: [
          'RTX 3060 12 GBはLlama 3 8B Q4_K_Mを~25 tok/s、Qwen 14B Q4_K_Mを~15 tok/sで動作。',
          'RX 6700 XT 12 GBは2,000〜4,000円安いがROCmにはLinux必須；Windowsは避ける。',
          '300ドル以下の8 GB GPUは避ける — VRAMの上限が14Bモデルを完全にブロック。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'ベストピック：中古NVIDIA RTX 3060 12 GB — CUDAがOllamaとllama.cppで即動作',
          '最安ピック：中古AMD RX 6700 XT — 12 GB VRAMだがROCm設定に3〜5時間',
          '両カードとも7Bモデル全てとほとんどの13BモデルをQ4で動かせる。70Bは無理',
          'RTX 3060は必ず12 GB版を購入する — 6 GB版は3Bモデルしか動かない',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック：中古NVIDIA RTX 3060 12 GB',
        content: [
          '<strong>中古のNVIDIA RTX 3060 12 GBは予算重視のローカルLLM向けに最適なGPUです。12 GBのVRAMと設定不要のCUDA対応で、数分でLLM環境が完成します。</strong> Mistral Small、Llama 3 8B、Qwen3 8Bを毎秒15〜20トークンで動かし、ほとんどの13BモデルもQ4で動作します。',
          'RTX 3060はソフトウェア面で優れています。WindowsとLinuxの両方でOllamaとllama.cppがCUDAを介してNVIDIA GPUを自動検出します — ドライバ探しもROCm設定も不要です。AMD RX 6700 XTは12 GBの容量こそ同じですが、LinuxでのROCm設定は通常3〜5時間かかり、Windowsでは高速推論に対応していません。',
          'RX 6700 XTは予算が唯一の決定要因でLinuxに慣れている場合にのみ選んでください。それ以外の方にはRTX 3060 12 GBが安全な選択です。RTX 3060の6 GB版はリスト上で見分けがつきにくいですが、3Bモデルしか動かないので避けてください。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '現在価格を確認',
            label: 'Amazon.co.jpでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://kakaku.com/search_results/RTX+3060+12GB/',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '現在価格を確認',
            label: '価格.comでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '¥74,000',
            label: 'Amazon.co.jpでRX 6700 XTの価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT(ローカルLLM用途)',
        content: [
          '<strong>両カードとも12 GB VRAMでモデル容量は同じです — 決め手はCUDAかROCmかです。</strong> 下記は2026年5月時点の日本市場の概算。2026年のメモリ不足でGPU価格は変動が激しいため、購入前に再確認してください。',
        ],
        columns: ['GPU', 'VRAM', '価格 (2026年5月)', 'セットアップ', '最適な用途'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            '価格 (2026年5月)': '現在価格を確認',
            'セットアップ': 'CUDA、即時',
            '最適な用途': 'ベストピック — 設定不要',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '価格 (2026年5月)': '¥74,000前後',
            'セットアップ': 'ROCm、3〜5時間',
            '最適な用途': '最安、AMD設定OK',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'ローカルLLM向け低価格GPUに関するFAQ',
        faqs: [
          {
            q: '低価格GPUでローカルLLMはちゃんと動きますか？',
            a: 'はい。中古のRTX 3060 12 GBまたはRX 6700 XTは7Bモデル全てを毎秒15〜20トークンで、ほとんどの13BモデルをQ4で動かします。12 GBのVRAMは一般的なチャット、コーディング支援、要約に十分です。',
          },
          {
            q: 'なぜ安いRX 6700 XTではなくRTX 3060を選ぶのですか？',
            a: 'RTX 3060はNVIDIA CUDAを使い、Ollamaとllama.cppが自動検出します。RX 6700 XTはROCmが必要で、Linuxで3〜5時間、Windowsでは高速推論非対応です。節約額がこの時間に見合わないことが多いです。',
          },
          {
            q: 'RTX 3060は6 GB版と12 GB版どちらを買うべき？',
            a: '12 GB版を買ってください。6 GB版は3Bモデルしか入らず、7Bクラスの半分のパラメータ数です。両方の出品が似て見えるため、購入前にVRAMを必ず確認してください。',
          },
          {
            q: '300ドル(相当)以下のGPUで70Bモデルは動かせますか？',
            a: 'いいえ。70BモデルをQ4で動かすには約40 GBのVRAMが必要です。12 GBカードはQ4で14Bモデルが上限です。より大きなモデルには上位カードまたはマルチGPU構成が必要です。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[600ドル以下のローカルLLM向けベストGPU](/prompt-bites/best-gpu-under-600-local-llm) — 次のクラス：RTX 4060 Ti 16 GB',
          '[RTX 3060 12 GB向けベストOllamaモデル](/prompt-bites/best-ollama-models-rtx-3060-12gb) — カード入手後にプルすべきモデル',
          '[2026年ローカルLLM向けGPU購入ガイド](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 全予算階層を網羅した8GPU比較',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '2026年300美元以下最适合本地LLM的GPU？',
    seoTitle: '300美元以下本地LLM最佳GPU 2026 | Prompt Bites',
    metaDescription: '300美元以下本地LLM最佳GPU：二手RTX 3060 12 GB。CUDA与Ollama即装即用。RX 6700 XT更便宜但需ROCm配置。2026年5月数据。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: '预算购买者为本地LLM推理选购第一张GPU',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '阅读约4分钟',
    leadAnswerBlock:
      '本地LLM在低预算下的最佳选择是二手NVIDIA RTX 3060 12 GB。12 GB VRAM可运行所有7B模型和大部分13B模型(Q4),NVIDIA CUDA与Ollama开箱即用。AMD RX 6700 XT更便宜但需ROCm配置。',
    toc: [
      { label: '最佳选择：二手RTX 3060 12 GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related' },
    ],
    intro:
      '低预算下,两款二手卡主导本地LLM推理:NVIDIA RTX 3060 12 GB与AMD RX 6700 XT。两者均配12 GB VRAM,足以在Q4量化下运行7B及大多数13B模型。差距在软件折腾度,不在容量。',
    quickAnswerTop: {
      zh: {
        question: '300美元以下本地LLM最佳GPU是什么？',
        answer: '二手RTX 3060 12 GB售价150-220美元，是300美元以下本地LLM最佳GPU — 12 GB显存可运行所有7B和大多数14B模型。',
        bullets: [
          'RTX 3060 12 GB运行Llama 3 8B Q4_K_M约25 tok/s，Qwen 14B Q4_K_M约15 tok/s。',
          'RX 6700 XT 12 GB便宜20-40美元，但ROCm需要Linux；Windows上避免使用。',
          '避免300美元以下的8 GB GPU — 显存上限完全阻止14B模型。',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择:二手NVIDIA RTX 3060 12 GB — CUDA与Ollama、llama.cpp即装即用',
          '最便宜选择:二手AMD RX 6700 XT — 12 GB VRAM但ROCm配置需3-5小时',
          '两卡均可运行所有7B和大多数13B模型(Q4),均无法运行70B',
          '只买12 GB版RTX 3060 — 6 GB版仅能跑3B模型,不值',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择:二手NVIDIA RTX 3060 12 GB',
        content: [
          '<strong>二手NVIDIA RTX 3060 12 GB是低预算本地LLM的最佳GPU:12 GB VRAM加零配置CUDA,几分钟搭好LLM工作机。</strong>该卡可运行Mistral Small、Llama 3 8B、Qwen3 8B,速度15-20 tokens/秒,大多数13B模型在Q4下也能跑。',
          'RTX 3060在软件上胜出。Windows和Linux下,Ollama与llama.cpp通过CUDA自动识别NVIDIA GPU — 无需找驱动,无需ROCm。AMD RX 6700 XT同样12 GB,但Linux下ROCm配置通常需3-5小时,Windows下不支持高速推理。',
          '仅当预算是唯一决定因素且您习惯Linux时,选RX 6700 XT。否则RTX 3060 12 GB是更稳妥的入门卡。避开6 GB版RTX 3060 — 列表外观相同,但只能跑3B。',
        ],
        affiliateLinks: [
          {
            url: 'https://search.jd.com/Search?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '查看当前价格',
            label: '京东查看RTX 3060 12GB价格',
          },
          {
            url: 'https://s.taobao.com/search?q=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '查看当前价格',
            label: '淘宝查看RTX 3060 12GB价格',
          },
          {
            url: 'https://search.jd.com/Search?keyword=RX+6700+XT',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '查看当前价格',
            label: '京东查看RX 6700 XT价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT(本地LLM)',
        content: [
          '<strong>两卡均12 GB VRAM,模型容量相同 — 决策点在CUDA对ROCm。</strong>下表为2026年5月中国市场快照;2026年内存短缺使GPU价格波动,购买前请重新核价。',
        ],
        columns: ['GPU', 'VRAM', '价格 (2026年5月)', '配置', '适合'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            '价格 (2026年5月)': '查看当前价格',
            '配置': 'CUDA,即时',
            '适合': '最佳选择 — 零折腾',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '价格 (2026年5月)': '查看当前价格',
            '配置': 'ROCm,3-5小时',
            '适合': '最便宜,可接受AMD配置',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '低价GPU本地LLM问答',
        faqs: [
          {
            q: '低价GPU能跑好本地LLM吗？',
            a: '能。二手RTX 3060 12 GB或RX 6700 XT可运行所有7B模型(15-20 tokens/秒)及大多数13B模型(Q4)。12 GB VRAM足以应付聊天、代码辅助、摘要。',
          },
          {
            q: '为什么选RTX 3060而非更便宜的RX 6700 XT？',
            a: 'RTX 3060用NVIDIA CUDA,Ollama和llama.cpp自动识别。RX 6700 XT需ROCm — Linux下通常3-5小时,Windows下不支持高速推理。节省的几百元很少能抵这些时间。',
          },
          {
            q: 'RTX 3060应该买6 GB还是12 GB？',
            a: '买12 GB。6 GB版只能跑3B模型,参数量是7B的一半。两者商品页外观相似 — 购买前确认VRAM。',
          },
          {
            q: '低价GPU能跑70B模型吗？',
            a: '不能。70B模型Q4需约40 GB VRAM。12 GB卡Q4上限为14B。更大模型需更高档位或多GPU。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '延伸阅读',
        items: [
          '[600美元以下本地LLM最佳GPU](/prompt-bites/best-gpu-under-600-local-llm) — 上一档:RTX 4060 Ti 16 GB',
          '[RTX 3060 12 GB最佳Ollama模型](/prompt-bites/best-ollama-models-rtx-3060-12gb) — 买卡后该拉哪些模型',
          '[2026本地LLM GPU购买指南](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 全预算档位八卡完整对比',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Mejor GPU por menos de $300 para LLMs locales en 2026?',
    seoTitle: 'Mejor GPU por menos de $300 para LLM local 2026',
    metaDescription: 'Mejor GPU bajo $300 para LLMs locales: RTX 3060 12 GB usada ($150–250), CUDA al instante con Ollama. La RX 6700 XT es más barata pero requiere ROCm.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores con presupuesto ajustado que eligen su primera GPU para inferencia de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '4 min de lectura',
    leadAnswerBlock:
      'La mejor GPU por menos de $300 para LLMs locales es una NVIDIA RTX 3060 12 GB usada ($150-250 en mayo de 2026). Sus 12 GB de VRAM ejecutan todos los modelos 7B y la mayoría de los 13B en Q4, y NVIDIA CUDA funciona de inmediato con Ollama. La AMD RX 6700 XT ($130-200 usada) es más barata pero requiere configurar ROCm.',
    toc: [
      { label: 'Mejor opción: RTX 3060 12 GB usada', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectura relacionada', anchor: '#related' },
    ],
    intro:
      'Por menos de $300, dos tarjetas usadas dominan la inferencia de LLM local: la NVIDIA RTX 3060 12 GB y la AMD RX 6700 XT. Ambas tienen 12 GB de VRAM — suficiente para modelos 7B y la mayoría de los 13B con cuantización Q4. La diferencia está en la fricción del software, no en la capacidad.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor GPU por menos de $300 para ejecutar LLMs locales?',
        answer: 'La RTX 3060 12 GB usada a $150-220 es la mejor GPU por menos de $300 para LLMs locales — 12 GB de VRAM ejecuta todos los modelos 7B y la mayoría de los 14B.',
        bullets: [
          'RTX 3060 12 GB ejecuta Llama 3 8B Q4_K_M a ~25 tok/s y Qwen 14B Q4_K_M a ~15 tok/s.',
          'RX 6700 XT 12 GB es $20-40 más barata pero requiere Linux para ROCm; evítala en Windows.',
          'Evita GPUs de 8 GB por menos de $300 — el límite de VRAM bloquea completamente los modelos 14B.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: NVIDIA RTX 3060 12 GB usada — CUDA funciona al instante con Ollama y llama.cpp',
          'Opción más barata: AMD RX 6700 XT usada — 12 GB de VRAM, pero la configuración de ROCm lleva 3-5 horas',
          'Ambas tarjetas ejecutan todos los modelos 7B y la mayoría de los 13B en Q4; ninguna puede con un modelo 70B',
          'Compra la RTX 3060 en su versión de 12 GB — la variante de 6 GB solo ejecuta modelos 3B y no vale la pena',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: NVIDIA RTX 3060 12 GB usada',
        content: [
          '<strong>La NVIDIA RTX 3060 12 GB usada es la mejor GPU por menos de $300 para LLMs locales porque 12 GB de VRAM más soporte CUDA sin configuración te dan un equipo LLM funcional en minutos.</strong> A $150-250 en el mercado de segunda mano de mayo de 2026, ejecuta Mistral Small, Llama 3 8B y Qwen3 8B a 15-20 tokens por segundo, y la mayoría de los modelos 13B en Q4.',
          'La RTX 3060 gana en software. Ollama y llama.cpp detectan las GPU NVIDIA vía CUDA automáticamente en Windows y Linux — sin buscar drivers, sin ROCm. La AMD RX 6700 XT ($130-200 usada) ahorra $30-80 y tiene la misma capacidad de 12 GB, pero la configuración de ROCm en Linux suele costar 3-5 horas y no está soportada en Windows para inferencia rápida.',
          'Elige la RX 6700 XT solo si el presupuesto es el único factor decisivo y te manejas bien en Linux. Para todos los demás, la RTX 3060 12 GB es la primera GPU más segura. Evita la variante de 6 GB de la RTX 3060 — parece idéntica en los listados pero solo cabe modelos 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Ver precio de RTX 3060 12GB en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Ver precio de RTX 3060 12GB en Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'Ver precio de RX 6700 XT en Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT para LLMs locales',
        content: [
          '<strong>Ambas tarjetas tienen 12 GB de VRAM, por lo que la capacidad de modelos es idéntica — la decisión es CUDA frente a ROCm.</strong> Los precios de abajo son una instantánea del mercado de segunda mano de EE. UU. de mayo de 2026; la escasez de memoria de 2026 mantiene los precios de GPU volátiles, así que comprueba antes de comprar.',
        ],
        columns: ['GPU', 'VRAM', 'Precio (mayo 2026)', 'Configuración', 'Ideal para'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Precio (mayo 2026)': '$150-250 usada',
            'Configuración': 'CUDA, instantáneo',
            'Ideal para': 'Mejor opción — sin fricción',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Precio (mayo 2026)': '$130-200 usada',
            'Configuración': 'ROCm, 3-5 horas',
            'Ideal para': 'La más barata, acepta setup AMD',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre GPU por menos de $300 para LLMs locales',
        faqs: [
          {
            q: '¿Una GPU de $300 puede ejecutar LLMs locales bien?',
            a: 'Sí. Una RTX 3060 12 GB usada o una RX 6700 XT ejecuta todos los modelos 7B a 15-20 tokens por segundo y la mayoría de los 13B en cuantización Q4. Ambas tienen 12 GB de VRAM, suficiente para chat general, asistencia de código y resúmenes.',
          },
          {
            q: '¿Por qué elegir la RTX 3060 sobre la RX 6700 XT más barata?',
            a: 'La RTX 3060 usa NVIDIA CUDA, que Ollama y llama.cpp detectan automáticamente. La RX 6700 XT necesita ROCm — normalmente 3-5 horas en Linux y sin soporte en Windows para inferencia rápida. Los $30-80 que ahorras raramente compensan ese tiempo.',
          },
          {
            q: '¿Debo comprar la RTX 3060 de 6 GB o de 12 GB?',
            a: 'Compra la versión de 12 GB. La RTX 3060 de 6 GB solo cabe modelos 3B, la mitad del conteo de parámetros de la clase 7B. Las dos variantes parecen idénticas en los listados — confirma la VRAM antes de comprar.',
          },
          {
            q: '¿Puede una GPU por menos de $300 ejecutar un modelo 70B?',
            a: 'No. Un modelo 70B en Q4 necesita aproximadamente 40 GB de VRAM. Una tarjeta de 12 GB llega como máximo a modelos 14B en Q4. Para modelos más grandes necesitas un nivel superior o una configuración multi-GPU.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectura relacionada',
        items: [
          '[Mejor GPU por menos de $600 para LLMs locales](/es/prompt-bites/best-gpu-under-600-local-llm) — el siguiente nivel: RTX 4060 Ti 16 GB',
          '[Mejores modelos Ollama para RTX 3060 12 GB](/es/prompt-bites/best-ollama-models-rtx-3060-12gb) — qué modelos descargar una vez que tienes la tarjeta',
          '[Guía de compra de GPU para LLMs locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — la comparativa completa de ocho GPU en todos los niveles de presupuesto',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    title: 'Melhor GPU por menos de $300 para LLMs locais em 2026?',
    seoTitle: 'Melhor GPU por menos de $300 para LLM local 2026',
    metaDescription: 'Melhor GPU abaixo de $300 para LLMs locais: RTX 3060 12 GB usada ($150-250). CUDA funciona ao instante com Ollama. RX 6700 XT é mais barata mas requer ROCm.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores com orçamento reduzido escolhendo sua primeira GPU para inferência LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '4 min de leitura',
    leadAnswerBlock:
      'A melhor GPU por menos de $300 para LLMs locais é uma NVIDIA RTX 3060 12 GB usada ($150-250 em maio de 2026). Seus 12 GB de VRAM executam todos os modelos 7B e a maioria dos 13B em Q4, e o NVIDIA CUDA funciona ao instante com o Ollama. A AMD RX 6700 XT ($130-200 usada) é mais barata, mas requer configuração do ROCm.',
    toc: [
      { label: 'Melhor escolha: RTX 3060 12 GB usada', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related' },
    ],
    intro:
      'Por menos de $300, duas placas usadas dominam a inferência LLM local: a NVIDIA RTX 3060 12 GB e a AMD RX 6700 XT. Ambas têm 12 GB de VRAM — suficiente para modelos 7B e a maioria dos 13B com quantização Q4. A diferença está no atrito do software, não na capacidade.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor GPU por menos de $300 para executar LLMs locais?',
        answer: 'RTX 3060 12 GB usada a $150-220 é a melhor GPU por menos de $300 para LLMs locais — 12 GB VRAM executa todos os modelos 7B e a maioria dos 14B.',
        bullets: [
          'RTX 3060 12 GB executa Llama 3 8B Q4_K_M a ~25 tok/s e Qwen 14B Q4_K_M a ~15 tok/s.',
          'RX 6700 XT 12 GB é $20-40 mais barata, mas requer Linux para ROCm; evite no Windows.',
          'Evite GPUs de 8 GB por menos de $300 — o limite de VRAM bloqueia completamente os modelos 14B.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: NVIDIA RTX 3060 12 GB usada — CUDA funciona ao instante com Ollama e llama.cpp',
          'Opção mais barata: AMD RX 6700 XT usada — 12 GB VRAM, mas a configuração do ROCm leva 3-5 horas',
          'Ambas as placas executam todos os modelos 7B e a maioria dos 13B em Q4; nenhuma comporta um modelo 70B',
          'Compre a RTX 3060 na versão de 12 GB — a variante de 6 GB só executa modelos 3B e não vale a pena',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: NVIDIA RTX 3060 12 GB usada',
        content: [
          '<strong>A NVIDIA RTX 3060 12 GB usada é a melhor GPU por menos de $300 para LLMs locais porque 12 GB de VRAM mais suporte CUDA sem configuração lhe dão uma máquina LLM funcional em minutos.</strong> A $150-250 no mercado de usados de maio de 2026, ela executa Mistral Small, Llama 3 8B e Qwen3 8B a 15-20 tokens por segundo, e a maioria dos modelos 13B em Q4.',
          'A RTX 3060 vence no software. Ollama e llama.cpp detectam GPUs NVIDIA via CUDA automaticamente no Windows e Linux — sem caçar drivers, sem ROCm. A AMD RX 6700 XT ($130-200 usada) economiza $30-80 e corresponde à capacidade de 12 GB, mas a configuração do ROCm no Linux tipicamente custa 3-5 horas e não é suportada no Windows para inferência rápida.',
          'Escolha a RX 6700 XT somente se o orçamento for o único fator decisivo e você estiver confortável no Linux. Para todos os outros, a RTX 3060 12 GB é a primeira GPU mais segura. Evite a variante de 6 GB da RTX 3060 — ela parece idêntica nas listagens, mas só comporta modelos 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Ver preço da RTX 3060 12GB na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Ver preço da RTX 3060 12GB na Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'Ver preço da RX 6700 XT na Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT para LLMs locais',
        content: [
          '<strong>Ambas as placas têm 12 GB de VRAM, então a capacidade de modelos é idêntica — a decisão é CUDA versus ROCm.</strong> Os preços abaixo são um instantâneo do mercado de usados nos EUA de maio de 2026; a escassez de memória de 2026 mantém os preços de GPU voláteis, então verifique antes de comprar.',
        ],
        columns: ['GPU', 'VRAM', 'Preço (maio 2026)', 'Configuração', 'Ideal para'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Preço (maio 2026)': '$150-250 usada',
            'Configuração': 'CUDA, instantâneo',
            'Ideal para': 'Melhor escolha — sem atrito',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Preço (maio 2026)': '$130-200 usada',
            'Configuração': 'ROCm, 3-5 horas',
            'Ideal para': 'A mais barata, aceita configuração AMD',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre GPUs por menos de $300 para LLMs locais',
        faqs: [
          {
            q: 'Uma GPU de $300 consegue executar LLMs locais bem?',
            a: 'Sim. Uma RTX 3060 12 GB usada ou RX 6700 XT executa todos os modelos 7B a 15-20 tokens por segundo e a maioria dos 13B em quantização Q4. Ambas têm 12 GB de VRAM, suficiente para chat geral, assistência de código e resumos.',
          },
          {
            q: 'Por que escolher a RTX 3060 em vez da RX 6700 XT mais barata?',
            a: 'A RTX 3060 usa NVIDIA CUDA, que o Ollama e o llama.cpp detectam automaticamente. A RX 6700 XT precisa do ROCm — tipicamente 3-5 horas no Linux e sem suporte no Windows para inferência rápida. Os $30-80 que você economiza raramente cobrem esse tempo.',
          },
          {
            q: 'Devo comprar a RTX 3060 de 6 GB ou 12 GB?',
            a: 'Compre a versão de 12 GB. A RTX 3060 de 6 GB só comporta modelos 3B, metade da contagem de parâmetros da classe 7B. As duas variantes parecem idênticas nas listagens — confirme o VRAM antes de comprar.',
          },
          {
            q: 'Uma GPU por menos de $300 consegue executar um modelo 70B?',
            a: 'Não. Um modelo 70B em Q4 precisa de aproximadamente 40 GB de VRAM. Uma placa de 12 GB tem um teto de cerca de 14B modelos em Q4. Para modelos maiores, você precisa de um nível superior ou de uma configuração multi-GPU.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura relacionada',
        items: [
          '[Melhor GPU por menos de $600 para LLMs locais](/pt/prompt-bites/best-gpu-under-600-local-llm) — o próximo nível: RTX 4060 Ti 16 GB',
          '[Melhores modelos Ollama para RTX 3060 12 GB](/pt/prompt-bites/best-ollama-models-rtx-3060-12gb) — quais modelos baixar depois de ter a placa',
          '[Guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — a comparativa completa de oito GPUs em todas as faixas de orçamento',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    title: 'أفضل بطاقة رسوميات بأقل من 300 دولار لنماذج اللغة المحلية في 2026؟',
    seoTitle: 'أفضل بطاقة رسوميات بأقل من 300 دولار لنماذج اللغة المحلية 2026',
    metaDescription: 'أفضل بطاقة رسوميات بأقل من 300 دولار لنماذج اللغة المحلية: RTX 3060 12 GB مستعملة ($150–250)، CUDA فوري مع Ollama. RX 6700 XT أرخص لكنها تتطلب ROCm.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'المشترون ذوو الميزانية المحدودة الذين يختارون أول بطاقة رسوميات لهم لاستدلال نماذج اللغة المحلية',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    readTime: '4 دقائق قراءة',
    leadAnswerBlock:
      'أفضل بطاقة رسوميات بأقل من 300 دولار لنماذج اللغة المحلية هي NVIDIA RTX 3060 12 GB مستعملة ($150-250 في مايو 2026). تتيح ذاكرة الفيديو البالغة 12 GB تشغيل جميع نماذج 7B وأغلب نماذج 13B بتكميم Q4، ويعمل NVIDIA CUDA فوراً مع Ollama. AMD RX 6700 XT ($130-200 مستعملة) أرخص لكنها تستلزم تهيئة ROCm.',
    toc: [
      { label: 'الخيار الأفضل: RTX 3060 12 GB مستعملة', anchor: '#best-pick' },
      { label: 'RTX 3060 مقابل RX 6700 XT', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related' },
    ],
    intro:
      'بأقل من 300 دولار، تهيمن بطاقتان مستعملتان على استدلال نماذج اللغة المحلية: NVIDIA RTX 3060 12 GB وAMD RX 6700 XT. كلتاهما تمتلكان 12 GB من ذاكرة الفيديو — ما يكفي لنماذج 7B وأغلب نماذج 13B مع تكميم Q4. يكمن الفارق في الاحتكاك البرمجي لا في القدرة الحسابية.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بطاقة رسوميات بأقل من 300 دولار لتشغيل نماذج اللغة المحلية؟',
        answer: 'RTX 3060 12 GB مستعملة بسعر $150-220 هي أفضل بطاقة رسوميات بأقل من 300 دولار لنماذج اللغة المحلية — 12 GB من ذاكرة الفيديو تشغّل جميع نماذج 7B وأغلب نماذج 14B.',
        bullets: [
          'RTX 3060 12 GB تشغّل Llama 3 8B Q4_K_M بسرعة ~25 tok/s وQwen 14B Q4_K_M بسرعة ~15 tok/s.',
          'RX 6700 XT 12 GB أرخص بـ $20-40 لكنها تتطلب Linux لـ ROCm؛ تجنّبها على Windows.',
          'تجنّب بطاقات الرسوميات ذات 8 GB بأقل من 300 دولار — حدّ ذاكرة الفيديو يحجب نماذج 14B كلياً.',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'الخيار الأفضل: NVIDIA RTX 3060 12 GB مستعملة — CUDA يعمل فوراً مع Ollama وllama.cpp',
          'الخيار الأرخص: AMD RX 6700 XT مستعملة — 12 GB من ذاكرة الفيديو، لكن تهيئة ROCm تستغرق 3-5 ساعات',
          'كلتا البطاقتين تشغّلان جميع نماذج 7B وأغلب نماذج 13B بتكميم Q4؛ لا تستطيعان تشغيل نموذج 70B',
          'اشترِ RTX 3060 بإصدار 12 GB — نسخة 6 GB تشغّل نماذج 3B فحسب ولا تستحق العناء',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الخيار الأفضل: NVIDIA RTX 3060 12 GB مستعملة',
        content: [
          '<strong>NVIDIA RTX 3060 12 GB المستعملة هي أفضل بطاقة رسوميات بأقل من 300 دولار لنماذج اللغة المحلية، لأن 12 GB من ذاكرة الفيديو إلى جانب دعم CUDA دون أي تهيئة تمنحك منظومة نماذج لغوية جاهزة في دقائق.</strong> بسعر $150-250 في سوق المستعمل في مايو 2026، تشغّل Mistral Small وLlama 3 8B وQwen3 8B بسرعة 15-20 رمزاً في الثانية، وأغلب نماذج 13B بتكميم Q4.',
          'تتفوق RTX 3060 في الجانب البرمجي. يكتشف Ollama وllama.cpp بطاقات NVIDIA عبر CUDA تلقائياً على Windows وLinux — دون البحث عن تعريفات أو تثبيت ROCm. AMD RX 6700 XT ($130-200 مستعملة) توفّر $30-80 وتمتلك سعة 12 GB ذاتها، غير أن تهيئة ROCm على Linux تكلّف عادةً 3-5 ساعات وغير مدعومة على Windows للاستدلال السريع.',
          'اختر RX 6700 XT فقط إذا كانت الميزانية هي العامل الحاسم الوحيد وأنت متمرّس على Linux. لغير ذلك، RTX 3060 12 GB هي الخيار الأكثر أماناً لأول بطاقة رسوميات. تجنّب نسخة 6 GB من RTX 3060 — تبدو مطابقة في القوائم لكنها لا تستوعب سوى نماذج 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'عرض سعر RTX 3060 12GB على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'عرض سعر RTX 3060 12GB على Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'عرض سعر RX 6700 XT على Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB مقابل RX 6700 XT لنماذج اللغة المحلية',
        content: [
          '<strong>كلتا البطاقتين تمتلكان 12 GB من ذاكرة الفيديو، لذا قدرة النماذج متطابقة — القرار يكمن بين CUDA وROCm.</strong> الأسعار أدناه لقطة من سوق المستعمل الأمريكي في مايو 2026؛ تشحّ الذاكرة في 2026 يجعل أسعار بطاقات الرسوميات متقلبة، لذا تحقّق قبل الشراء.',
        ],
        columns: ['بطاقة الرسوميات', 'ذاكرة الفيديو', 'السعر (مايو 2026)', 'التهيئة', 'الأنسب لـ'],
        rows: [
          {
            'بطاقة الرسوميات': 'RTX 3060 12 GB',
            'ذاكرة الفيديو': '12 GB',
            'السعر (مايو 2026)': '$150-250 مستعملة',
            'التهيئة': 'CUDA، فوري',
            'الأنسب لـ': 'الخيار الأفضل — بلا احتكاك',
          },
          {
            'بطاقة الرسوميات': 'RX 6700 XT',
            'ذاكرة الفيديو': '12 GB',
            'السعر (مايو 2026)': '$130-200 مستعملة',
            'التهيئة': 'ROCm، 3-5 ساعات',
            'الأنسب لـ': 'الأرخص، لمن يقبل إعداد AMD',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول بطاقات الرسوميات بأقل من 300 دولار لنماذج اللغة المحلية',
        faqs: [
          {
            q: 'هل يمكن لبطاقة رسوميات بـ 300 دولار تشغيل نماذج اللغة المحلية بكفاءة؟',
            a: 'نعم. RTX 3060 12 GB المستعملة أو RX 6700 XT تشغّل جميع نماذج 7B بسرعة 15-20 رمزاً في الثانية وأغلب نماذج 13B بتكميم Q4. كلتاهما تمتلكان 12 GB من ذاكرة الفيديو، ما يكفي للدردشة العامة ومساعدة البرمجة والتلخيص.',
          },
          {
            q: 'لماذا أختار RTX 3060 على RX 6700 XT الأرخص؟',
            a: 'تستخدم RTX 3060 NVIDIA CUDA الذي يكتشفه Ollama وllama.cpp تلقائياً. تحتاج RX 6700 XT إلى ROCm — عادةً 3-5 ساعات على Linux ودون دعم على Windows للاستدلال السريع. نادراً ما يستحق توفير $30-80 هذا الوقت.',
          },
          {
            q: 'هل أشتري RTX 3060 بـ 6 GB أم 12 GB؟',
            a: 'اشترِ نسخة 12 GB. RTX 3060 بـ 6 GB لا تستوعب سوى نماذج 3B، أي نصف عدد المعاملات في فئة 7B. تبدو النسختان متطابقتين في القوائم — تحقّق من ذاكرة الفيديو قبل الشراء.',
          },
          {
            q: 'هل تستطيع بطاقة رسوميات بأقل من 300 دولار تشغيل نموذج 70B؟',
            a: 'لا. يحتاج نموذج 70B بتكميم Q4 إلى نحو 40 GB من ذاكرة الفيديو. بطاقة 12 GB تصل إلى نماذج 14B بتكميم Q4 كحدٍّ أقصى. للنماذج الأكبر تحتاج إلى مستوى أعلى أو إعداد متعدد البطاقات.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل بطاقة رسوميات بأقل من 600 دولار لنماذج اللغة المحلية](/ar/prompt-bites/best-gpu-under-600-local-llm) — المستوى التالي: RTX 4060 Ti 16 GB',
          '[أفضل نماذج Ollama لـ RTX 3060 12 GB](/ar/prompt-bites/best-ollama-models-rtx-3060-12gb) — النماذج التي ينبغي تنزيلها بعد الحصول على البطاقة',
          '[دليل شراء بطاقات الرسوميات لنماذج اللغة المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — المقارنة الشاملة لثماني بطاقات رسوميات عبر جميع مستويات الميزانية',
        ],
      },
    },
  },
}
