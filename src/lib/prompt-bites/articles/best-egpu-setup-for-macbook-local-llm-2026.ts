import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Hardware & Performance',
    type: 'how-to',
    title: 'Best eGPU Setup for MacBook Local LLM Inference (2026)',
    seoTitle: 'Best eGPU for MacBook Local LLM 2026',
    metaDescription: 'Run RTX 3090 or RTX 4090 inference on a MacBook via eGPU enclosure. What works in 2026: Sonnet Breakaway Box, OCuLink adapters, Ollama config, and speed results.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**MacBooks with Apple Silicon (M2–M5) cannot use eGPUs via Thunderbolt for GPU compute in 2026 — Apple removed Thunderbolt eGPU support in macOS Ventura. The workaround: pair an Intel Mac (or Mac Mini) with a Thunderbolt 3/4 eGPU enclosure, or use an AMD/Intel mini PC with OCuLink instead.**',
    quickAnswerTop: {
      question: 'Can I use an eGPU with a MacBook for local LLM inference?',
      answer: 'No — Apple Silicon MacBooks (M2/M3/M4/M5) cannot use eGPUs for GPU compute. macOS Ventura and later dropped Thunderbolt eGPU support entirely. If you need a GPU for local LLM on Apple hardware, buy a Mac with more unified memory (Mac Mini M4 Pro, 48 GB) or use an AMD mini PC (UM890 Pro) with an OCuLink eGPU enclosure instead.',
      bullets: [
        'Apple Silicon MacBooks: eGPU NOT supported for GPU compute (macOS Ventura+)',
        'Intel MacBooks (2015–2020): eGPU works via Thunderbolt 3 — but Apple discontinued them',
        'Best alternative: Mac Mini M4 Pro (48 GB unified memory) for macOS users',
        'Best GPU + portable setup: AMD mini PC (UM890 Pro) + OCuLink + RTX 3090 enclosure',
        'OCuLink delivers ~80% PCIe x16 bandwidth — no bottleneck for LLM inference',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Apple Silicon MacBooks cannot use eGPUs for compute — Apple removed the feature in macOS Ventura',
          'Intel MacBooks (2018–2020) still support eGPU via Thunderbolt 3, but the Mac line-up is discontinued',
          'For macOS: buy Mac Mini M4 Pro (48 GB) instead of trying to extend a MacBook with eGPU',
          'For portable + GPU: AMD mini PC (UM890 Pro) + RTX 3090 via OCuLink — runs Ollama at 60–80 tok/s',
          'Thunderbolt 4 eGPUs on x86 laptops (Windows/Linux) do work — 35–45% bandwidth penalty vs native PCIe',
        ],
      },
      mainContent: {
        title: 'Why eGPU Doesn\'t Work for MacBooks in 2026',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'eGPUs do not work for GPU-accelerated local LLM inference on Apple Silicon MacBooks in 2026 because Apple removed Thunderbolt eGPU compute support in macOS Ventura (2022) and has not restored it.',
          },
          {
            type: 'plain-terms',
            text: 'An eGPU is an external graphics card in a box connected via Thunderbolt or OCuLink. On a MacBook with Apple\'s M-series chip, the GPU is built into the chip — you cannot swap or add GPUs externally for compute tasks. Apple\'s own drivers never supported CUDA (NVIDIA\'s API), and Metal (Apple\'s GPU API) doesn\'t extend to external GPUs on M-series hardware.',
          },
        ],
        content: 'Apple removed Thunderbolt eGPU support in macOS Ventura (released October 2022). All Apple Silicon MacBooks (M1, M2, M3, M4, M5) run on this or later macOS versions. Even if you physically connect an eGPU enclosure, macOS will not use the external GPU for GPU compute tasks — only the internal GPU is active. External display output via eGPU still works, but LLM inference does not use it.',
        items: [
          '**macOS 13 Ventura (2022)**: eGPU support dropped. All Apple Silicon Macs affected.',
          '**macOS 14 Sonoma, 15 Sequoia**: Still no eGPU compute support.',
          '**Intel MacBooks (2018–2020)**: eGPU worked via Thunderbolt 3 on older macOS. These Macs are discontinued and will not receive macOS updates past macOS Tahoe.',
          '**External display via eGPU**: Still works on older Macs as an output-only device.',
        ],
      },
      alternatives: {
        title: 'What to Do Instead: Real Alternatives',
        items: [
          {
            title: 'Mac Mini M4 Pro (48 GB) — Best macOS Option',
            content: 'The Mac Mini M4 Pro with 48 GB of unified memory runs Qwen2.5 32B Q4 at 20–30 tok/s via Ollama Metal backend. The 24-core GPU handles larger models than a MacBook M4 Pro (which maxes at 64 GB). Price: ~$1399. If you want to stay in the macOS ecosystem and need 32B+ model capability, this is the upgrade path — not an eGPU.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M4 Pro on Amazon', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_mac_mini_m4_pro]' },
            ],
          },
          {
            title: 'AMD Mini PC + OCuLink eGPU (Best GPU/Portable Combo)',
            content: 'The AOOSTAR GEM12 Pro OCuLink (AMD Ryzen 9 8945HS, ~$480) connects to an RTX 3090 or RTX 4090 via OCuLink (PCIe 4.0 x4, 64 Gbps — ~80% of x16 slot bandwidth). Ollama on Linux or Windows with CUDA runs 7B Q4 at 65–85 tok/s with an RTX 3090. The mini PC is small enough to put on a desk next to a MacBook and serve Ollama over LAN. You keep your MacBook for everything else; the mini PC handles inference.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink on Amazon', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_aoostar_gem12_pro]' },
              { label: 'Razer Core X eGPU Enclosure (for x86 laptops)', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_razer_core_x]' },
            ],
          },
          {
            title: 'Thunderbolt 4 eGPU on Windows/Linux Laptop (If Not on Mac)',
            content: 'On an x86 Windows or Linux laptop with Thunderbolt 4, eGPU does work for Ollama. The bandwidth penalty is ~35–45% vs a native PCIe x16 slot, but Ollama\'s inference is memory-bandwidth-limited (not PCIe-limited), so real-world speed drops are 10–20%. Recommended enclosure: Razer Core X (~$299) + RTX 3090. Expect 50–65 tok/s on 7B Q4 vs 65–80 tok/s for a native slot.',
            affiliateLinks: [
              { label: 'Razer Core X eGPU Enclosure on Amazon', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_razer_core_x]' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Is there any way to make an eGPU work with an M4 MacBook Pro for AI?',
            a: 'Not for GPU compute. Apple\'s macOS does not expose an API for external GPUs to run Metal compute tasks on M-series hardware. The only path is to connect the MacBook to an Ollama server running on a separate machine (a mini PC or desktop with a dedicated GPU) over the local network. Set OLLAMA_HOST=0.0.0.0 on the server and point your MacBook\'s apps to that IP address.',
          },
          {
            q: 'Will Apple bring back eGPU support for Apple Silicon?',
            a: 'Unlikely. Apple\'s M-series architecture integrates the GPU, CPU, and memory on a single chip — the design philosophy is unified memory, not expandability. Apple has not indicated any plans to restore eGPU compute support. The Mac Pro (2023) with expansion slots is the only Apple product that supports GPU expansion.',
          },
          {
            q: 'Can I use an NVIDIA GPU for inference and pipe the output to my MacBook?',
            a: 'Yes — this is the recommended approach. Run Ollama on a Windows or Linux machine with an NVIDIA GPU, expose it on your LAN (OLLAMA_HOST=0.0.0.0), and connect from your MacBook via Open WebUI, Cursor, Continue, or any OpenAI-compatible client. The MacBook handles the UI; the NVIDIA machine handles the computation.',
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
          name: 'Can I use an eGPU with a MacBook for local LLM inference?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Apple Silicon MacBooks (M2/M3/M4/M5) cannot use eGPUs for GPU compute. Apple removed Thunderbolt eGPU support in macOS Ventura (2022). The alternative: use a Mac Mini M4 Pro (48 GB unified memory) or an AMD mini PC with OCuLink eGPU.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any way to make an eGPU work with an M4 MacBook Pro for AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not for GPU compute. Connect the MacBook to an Ollama server running on a separate machine with a dedicated GPU over your local network (OLLAMA_HOST=0.0.0.0 on the server).',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Best eGPU Setup for MacBook Local LLM Inference (2026)', datePublished: '2026-05-26', dateModified: '2026-05-26' },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Hardware & Performance',
    type: 'how-to',
    title: 'eGPU für MacBook und lokale KI: Was 2026 funktioniert (und was nicht)',
    seoTitle: 'eGPU für MacBook Local LLM 2026 — Alternativen',
    metaDescription: 'MacBooks mit Apple Silicon unterstützen keine eGPUs für GPU-Compute. Was 2026 stattdessen funktioniert: Mac Mini M4 Pro, OCuLink-Mini-PC, LAN-Server.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**MacBooks mit Apple Silicon (M2–M5) können eGPUs 2026 nicht für GPU-Compute nutzen — Apple entfernte Thunderbolt-eGPU-Unterstützung in macOS Ventura. Die Alternative: Mac Mini M4 Pro (48 GB Unified Memory) oder AMD Mini-PC (UM890 Pro) mit OCuLink-eGPU.**',
    quickAnswerTop: {
      question: 'Kann ich eine eGPU mit einem MacBook für lokale KI-Inferenz nutzen?',
      answer: 'Nein. Apple Silicon MacBooks (M2/M3/M4/M5) unterstützen keine eGPUs für GPU-Compute. macOS Ventura und später haben Thunderbolt-eGPU-Unterstützung vollständig entfernt. Alternative: Mac Mini M4 Pro (48 GB Unified Memory) oder AMD Mini-PC mit OCuLink-eGPU.',
      bullets: [
        'Apple Silicon MacBooks: eGPU für GPU-Compute NICHT unterstützt (macOS Ventura+)',
        'Intel MacBooks (2015–2020): eGPU über Thunderbolt 3 funktionierte — aber eingestellt',
        'Beste Alternative für macOS: Mac Mini M4 Pro (48 GB Unified Memory)',
        'Beste GPU + portable Lösung: AMD Mini-PC (UM890 Pro) + OCuLink + RTX 3090',
        'OCuLink liefert ~80% PCIe-x16-Bandbreite — kein Flaschenhals für LLM-Inferenz',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Apple Silicon MacBooks können keine eGPUs für Compute nutzen — Apple entfernte das Feature in macOS Ventura',
          'Intel MacBooks (2018–2020) unterstützten eGPU über Thunderbolt 3 — diese Linie ist eingestellt',
          'Für macOS: Mac Mini M4 Pro (48 GB) statt eGPU-MacBook-Erweiterung kaufen',
          'Für portabel + GPU: AMD Mini-PC (UM890 Pro) + RTX 3090 über OCuLink — Ollama mit 60–80 Tok/s',
          'Thunderbolt-4-eGPUs auf x86-Laptops (Windows/Linux) funktionieren — mit ~35–45% Bandbreitenverlust',
        ],
      },
      mainContent: {
        title: 'Warum eGPU für MacBooks 2026 nicht funktioniert',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'eGPUs funktionieren 2026 nicht für GPU-beschleunigte LLM-Inferenz auf Apple-Silicon-MacBooks, weil Apple die Thunderbolt-eGPU-Compute-Unterstützung in macOS Ventura (2022) entfernt hat.',
          },
          {
            type: 'plain-terms',
            text: 'Eine eGPU ist eine externe Grafikkarte in einem Gehäuse, angeschlossen über Thunderbolt oder OCuLink. Auf einem MacBook mit Apples M-Chip ist die GPU in den Chip integriert — externe GPUs können nicht für Compute-Aufgaben genutzt werden. Metal (Apples GPU-API) unterstützt keine externen GPUs auf M-Series-Hardware.',
          },
        ],
        content: 'Apple entfernte Thunderbolt-eGPU-Unterstützung in macOS Ventura (Oktober 2022). Alle Apple-Silicon-MacBooks (M1–M5) laufen auf dieser oder neueren macOS-Versionen. Selbst wenn eine eGPU physisch verbunden ist, nutzt macOS die externe GPU nicht für GPU-Compute — nur die interne GPU ist aktiv.',
        items: [
          '**macOS 13 Ventura (2022)**: eGPU-Unterstützung entfernt. Alle Apple-Silicon-Macs betroffen.',
          '**macOS 14 Sonoma, 15 Sequoia**: Weiterhin keine eGPU-Compute-Unterstützung.',
          '**Intel MacBooks (2018–2020)**: eGPU über Thunderbolt 3 funktionierte auf älteren macOS-Versionen.',
          '**Externer Bildschirm über eGPU**: Funktioniert weiterhin als reine Ausgabe.',
        ],
      },
      alternatives: {
        title: 'Echte Alternativen für GPU-beschleunigtes LLM auf Mac',
        items: [
          {
            title: 'Mac Mini M4 Pro (48 GB) — Beste macOS-Option',
            content: 'Der Mac Mini M4 Pro mit 48 GB Unified Memory läuft Qwen2.5 32B Q4 mit 20–30 Tok/s über Ollamas Metal-Backend. Preis: ~1399 €. Wenn macOS Voraussetzung ist und 32B+-Modelle benötigt werden, ist dies der Upgrade-Pfad — nicht eine eGPU.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M4 Pro bei Amazon.de', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_de_mac_mini_m4_pro]' },
            ],
          },
          {
            title: 'AMD Mini-PC + OCuLink-eGPU (Beste GPU/Portable-Kombination)',
            content: 'Der AOOSTAR GEM12 Pro OCuLink (AMD Ryzen 9 8945HS, ~480 €) verbindet sich mit einer RTX 3090 oder RTX 4090 über OCuLink (PCIe 4.0 x4, 64 Gbps — ~80% x16-Slot-Bandbreite). Ollama auf Linux oder Windows mit CUDA läuft 7B Q4 mit 65–85 Tok/s mit einer RTX 3090. Der Mini-PC ist klein genug für den Schreibtisch neben einem MacBook und bedient Ollama über LAN.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink bei Amazon.de', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_de_aoostar_gem12_pro]' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Gibt es eine Möglichkeit, eine eGPU mit einem M4 MacBook Pro für KI zu nutzen?',
            a: 'Nicht für GPU-Compute. macOS bietet keine API für externe GPUs für Metal-Compute-Aufgaben auf M-Series-Hardware. Die Alternative: MacBook über LAN mit einem Ollama-Server auf einem anderen Gerät (Mini-PC oder Desktop) verbinden. OLLAMA_HOST=0.0.0.0 auf dem Server setzen.',
          },
          {
            q: 'Wird Apple eGPU-Unterstützung für Apple Silicon zurückbringen?',
            a: 'Unwahrscheinlich. Apples M-Series-Architektur integriert GPU, CPU und Speicher auf einem Chip — das Design-Prinzip ist Unified Memory, nicht Erweiterbarkeit. Nur der Mac Pro (2023) unterstützt GPU-Erweiterung über PCIe-Slots.',
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
          name: 'Kann ich eine eGPU mit einem MacBook für lokale KI-Inferenz nutzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Apple entfernte eGPU-Compute-Unterstützung in macOS Ventura (2022). Alternative: Mac Mini M4 Pro (48 GB) oder AMD Mini-PC mit OCuLink.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU für MacBook und lokale KI: Was 2026 funktioniert', datePublished: '2026-05-26', dateModified: '2026-05-26' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Hardware & Performance',
    type: 'how-to',
    title: 'eGPU pour MacBook et IA locale : ce qui marche en 2026',
    seoTitle: 'eGPU MacBook IA locale 2026 — Ce qui fonctionne',
    metaDescription: 'Les MacBooks Apple Silicon ne supportent pas les eGPU pour le calcul GPU. Alternatives 2026 : Mac Mini M4 Pro, mini PC OCuLink, serveur LAN Ollama.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Les MacBooks Apple Silicon (M2–M5) ne peuvent pas utiliser d\'eGPU pour le calcul GPU en 2026 — Apple a supprimé le support eGPU Thunderbolt dans macOS Ventura. Alternative : Mac Mini M4 Pro (48 Go de mémoire unifiée) ou mini PC AMD (UM890 Pro) avec eGPU OCuLink.**',
    quickAnswerTop: {
      question: 'Peut-on utiliser une eGPU avec un MacBook pour l\'inférence LLM locale ?',
      answer: 'Non. Les MacBooks Apple Silicon (M2/M3/M4/M5) ne supportent pas les eGPU pour le calcul GPU. macOS Ventura et suivants ont supprimé ce support. Alternative : Mac Mini M4 Pro (48 Go de mémoire unifiée) ou mini PC AMD avec eGPU OCuLink.',
      bullets: [
        'MacBooks Apple Silicon : eGPU NON supporté pour le calcul GPU (macOS Ventura+)',
        'MacBooks Intel (2015–2020) : eGPU via Thunderbolt 3 fonctionnait — mais ligne abandonnée',
        'Meilleure alternative macOS : Mac Mini M4 Pro (48 Go de mémoire unifiée)',
        'Meilleure combo GPU + portable : mini PC AMD (UM890 Pro) + OCuLink + RTX 3090',
        'OCuLink offre ~80% de la bande passante PCIe x16 — pas de goulot d\'étranglement pour l\'inférence LLM',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Les MacBooks Apple Silicon ne peuvent pas utiliser les eGPU pour le calcul — Apple a supprimé la fonctionnalité dans macOS Ventura',
          'MacBooks Intel (2018–2020) supportaient l\'eGPU via Thunderbolt 3 — ligne abandonnée',
          'Pour macOS : acheter Mac Mini M4 Pro (48 Go) plutôt que d\'essayer une eGPU MacBook',
          'Pour portable + GPU : mini PC AMD (UM890 Pro) + RTX 3090 via OCuLink — 60–80 tok/s avec Ollama',
          'Les eGPU Thunderbolt 4 fonctionnent sur laptops x86 (Windows/Linux) avec ~35–45% de perte de bande passante',
        ],
      },
      mainContent: {
        title: 'Pourquoi l\'eGPU ne fonctionne pas sur MacBook en 2026',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les eGPU ne fonctionnent pas pour l\'inférence LLM accélérée GPU sur les MacBooks Apple Silicon en 2026 car Apple a supprimé le support eGPU Thunderbolt dans macOS Ventura (2022).',
          },
          {
            type: 'plain-terms',
            text: 'Une eGPU est une carte graphique externe connectée via Thunderbolt ou OCuLink. Sur un MacBook avec puce M d\'Apple, le GPU est intégré dans la puce — on ne peut pas ajouter de GPU externe pour des tâches de calcul. Metal (l\'API GPU d\'Apple) ne s\'étend pas aux GPU externes sur le matériel M-series.',
          },
        ],
        content: 'Apple a supprimé le support eGPU Thunderbolt dans macOS Ventura (octobre 2022). Tous les MacBooks Apple Silicon (M1–M5) tournent sur cette version ou ultérieure. Même si une eGPU est connectée physiquement, macOS n\'utilisera pas le GPU externe pour le calcul.',
        items: [
          '**macOS 13 Ventura (2022)** : Support eGPU supprimé. Tous les Macs Apple Silicon concernés.',
          '**macOS 14 Sonoma, 15 Sequoia** : Toujours pas de support eGPU pour le calcul.',
          '**MacBooks Intel (2018–2020)** : eGPU fonctionnait via Thunderbolt 3 sur les anciens macOS.',
        ],
      },
      alternatives: {
        title: 'Vraies alternatives pour l\'inférence GPU sur Mac',
        items: [
          {
            title: 'Mac Mini M4 Pro (48 Go) — Meilleure option macOS',
            content: 'Le Mac Mini M4 Pro avec 48 Go de mémoire unifiée fait tourner Qwen2.5 32B Q4 à 20–30 tok/s via le backend Metal d\'Ollama. Prix : ~1399 €. Si macOS est requis et que vous avez besoin de modèles 32B+, c\'est la bonne mise à niveau — pas une eGPU.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M4 Pro sur Amazon.fr', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_fr_mac_mini_m4_pro]' },
            ],
          },
          {
            title: 'Mini PC AMD + eGPU OCuLink (Meilleure combo GPU/portable)',
            content: 'L\'AOOSTAR GEM12 Pro OCuLink (AMD Ryzen 9 8945HS, ~480 €) se connecte à une RTX 3090 via OCuLink (PCIe 4.0 x4, 64 Gbps — ~80% de la bande passante x16). Ollama sur Linux ou Windows avec CUDA tourne à 65–85 tok/s sur 7B Q4 avec une RTX 3090. Le mini PC est assez petit pour tenir sur un bureau à côté d\'un MacBook et sert Ollama via LAN.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink sur Amazon.fr', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_fr_aoostar_gem12_pro]' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'Y a-t-il un moyen de faire fonctionner une eGPU avec un M4 MacBook Pro pour l\'IA ?',
            a: 'Pas pour le calcul GPU. macOS ne fournit pas d\'API pour les GPU externes pour les tâches Metal sur le matériel M-series. L\'alternative : connecter le MacBook à un serveur Ollama sur une autre machine via LAN. Définissez OLLAMA_HOST=0.0.0.0 sur le serveur.',
          },
          {
            q: 'Apple réintroduira-t-il le support eGPU pour Apple Silicon ?',
            a: 'Peu probable. L\'architecture M-series d\'Apple intègre GPU, CPU et mémoire sur une seule puce — la philosophie de conception est la mémoire unifiée, pas l\'extensibilité. Seul le Mac Pro (2023) supporte l\'expansion GPU.',
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
          name: 'Peut-on utiliser une eGPU avec un MacBook pour l\'inférence LLM locale ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Apple a supprimé le support eGPU dans macOS Ventura (2022). Alternatives : Mac Mini M4 Pro (48 Go) ou mini PC AMD avec OCuLink.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU pour MacBook et IA locale : ce qui marche en 2026', datePublished: '2026-05-26', dateModified: '2026-05-26' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Hardware & Performance',
    type: 'how-to',
    title: 'MacBook eGPUとローカルAI：2026年に動作するもの',
    seoTitle: 'MacBook eGPU ローカルLLM 2026—代替案と解説',
    metaDescription: 'Apple SiliconのMacBookはeGPUでのGPUコンピュートに対応していません。2026年の代替案：Mac Mini M4 Pro、OCuLink対応AMDミニPC、LAN経由Ollamaサーバー。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Apple Silicon搭載MacBook（M2〜M5）は2026年現在eGPUをGPUコンピュートに使用できません——AppleはmacOS VenturaでThunderbolt eGPUサポートを廃止しました。代替案：Mac Mini M4 Pro（48GB統合メモリ）またはOCuLink対応AMDミニPC（UM890 Pro）。**',
    quickAnswerTop: {
      question: 'MacBookのeGPUをローカルLLM推論に使えますか？',
      answer: 'いいえ。Apple Silicon MacBook（M2/M3/M4/M5）はGPUコンピュートにeGPUを使用できません。macOS Ventura以降でThunderbolt eGPUサポートが完全廃止されました。代替案：Mac Mini M4 Pro（48GB統合メモリ）またはOCuLink eGPU対応AMDミニPC。',
      bullets: [
        'Apple Silicon MacBook：GPUコンピュートへのeGPU使用不可（macOS Ventura以降）',
        'Intel MacBook（2015〜2020）：Thunderbolt 3経由のeGPUは動作していた——ただし廃止済み',
        'macOS最良代替案：Mac Mini M4 Pro（48GB統合メモリ）',
        '最良GPU+携帯性：AMDミニPC（UM890 Pro）+ OCuLink + RTX 3090',
        'OCuLinkはPCIe x16帯域幅の約80%を提供——LLM推論でのボトルネックなし',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Apple Silicon MacBookはeGPUコンピュートに対応していない——AppleがmacOS Venturaで廃止',
          'Intel MacBook（2018〜2020）はThunderbolt 3 eGPUをサポートしていたが機種は廃止',
          'macOS向け：eGPUのMacBook拡張を試みるよりMac Mini M4 Pro（48GB）を購入する',
          'ポータブル+GPU向け：AMDミニPC（UM890 Pro）+ RTX 3090 via OCuLink——Ollamaで60〜80 tok/s',
          'x86ラップトップ（Windows/Linux）のThunderbolt 4 eGPUは動作——帯域幅ペナルティ約35〜45%',
        ],
      },
      mainContent: {
        title: '2026年にMacBookでeGPUが動作しない理由',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'eGPUは2026年のApple Silicon MacBookでGPU加速ローカルLLM推論に使用できません。AppleがmacOS Ventura（2022年）でThunderbolt eGPUコンピュートサポートを廃止したためです。',
          },
          {
            type: 'plain-terms',
            text: 'eGPUはThunderboltまたはOCuLink経由で接続する外付けグラフィックカードです。AppleのMシリーズチップ搭載MacBookではGPUがチップに統合されており、外付けGPUをコンピュートタスクに追加使用できません。AppleのGPU API「Metal」はMシリーズハードウェアで外付けGPUに対応していません。',
          },
        ],
        content: 'AppleはmacOS Ventura（2022年10月リリース）でThunderbolt eGPUサポートを廃止しました。すべてのApple Silicon MacBook（M1〜M5）はこれ以降のmacOSで動作します。eGPUを物理接続しても、macOSは外付けGPUをGPUコンピュートに使用しません。',
        items: [
          '**macOS 13 Ventura（2022年）**：eGPUサポート廃止。すべてのApple Silicon Macに影響。',
          '**macOS 14 Sonoma、15 Sequoia**：引き続きeGPUコンピュートサポートなし。',
          '**Intel MacBook（2018〜2020年）**：旧macOSでThunderbolt 3 eGPUが動作していた。',
        ],
      },
      alternatives: {
        title: 'Mac上のGPU推論のための実際の代替案',
        items: [
          {
            title: 'Mac Mini M4 Pro（48GB）——最良macOS選択肢',
            content: 'Mac Mini M4 Pro（48GB統合メモリ、約18万円）はOllamaのMetalバックエンドを通じてQwen2.5 32B Q4を20〜30 tok/sで実行できます。macOS環境が必要で32B以上のモデル能力が求められる場合、eGPUではなくこれがアップグレードパスです。',
            affiliateLinks: [
              { label: 'Apple Mac Mini M4 Pro をAmazonで確認', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_jp_mac_mini_m4_pro]' },
            ],
          },
          {
            title: 'AMDミニPC + OCuLink eGPU（最良GPU/ポータブルコンボ）',
            content: 'AOOSTAR GEM12 Pro OCuLink（AMD Ryzen 9 8945HS、約4万8000円）はOCuLink（PCIe 4.0 x4、64Gbps——x16スロット帯域幅の約80%）経由でRTX 3090またはRTX 4090と接続できます。Linux/WindowsのOllamaはCUDAでRTX 3090使用時に7B Q4で65〜85 tok/sを実現。このミニPCはMacBookの隣に置けるサイズで、LAN越しにOllamaを提供します。',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink をAmazonで確認', url: '[AFFILIATE_LINK_PLACEHOLDER:amazon_jp_aoostar_gem12_pro]' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: 'M4 MacBook ProにeGPUをAIで使う方法はありますか？',
            a: 'GPUコンピュートでは不可能です。macOSはMシリーズハードウェアのMetalコンピュートタスクに外付けGPUのAPIを提供していません。代替案：専用GPUを持つ別のマシン（ミニPCやデスクトップ）でOllamaサーバーを立ち上げ、LAN越しにMacBookから接続します（サーバー側でOLLAMA_HOST=0.0.0.0を設定）。',
          },
          {
            q: 'AppleはApple SiliconのeGPUサポートを復活させますか？',
            a: '可能性は低いです。AppleのMシリーズアーキテクチャはGPU、CPU、メモリを1チップに統合しており、設計思想は統合メモリであって拡張性ではありません。GPU拡張をサポートするApple製品はMac Pro（2023年）のみです。',
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
          name: 'MacBookのeGPUをローカルLLM推論に使えますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。AppleはmacOS Ventura（2022年）でeGPUコンピュートサポートを廃止しました。代替案：Mac Mini M4 Pro（48GB）またはOCuLink対応AMDミニPC。',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'MacBook eGPUとローカルAI：2026年に動作するもの', datePublished: '2026-05-26', dateModified: '2026-05-26' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-26',
    theme: 'Hardware & Performance',
    type: 'how-to',
    title: 'MacBook eGPU与本地AI：2026年什么有效',
    seoTitle: 'MacBook eGPU本地LLM 2026——替代方案详解',
    metaDescription: 'Apple Silicon MacBook不支持eGPU进行GPU计算。2026年替代方案：Mac Mini M4 Pro、OCuLink迷你PC、通过局域网连接Ollama服务器。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**搭载Apple Silicon（M2–M5）的MacBook在2026年无法将eGPU用于GPU计算——Apple在macOS Ventura中移除了Thunderbolt eGPU支持。替代方案：Mac Mini M4 Pro（48GB统一内存）或配OCuLink的AMD迷你PC（UM890 Pro）。**',
    quickAnswerTop: {
      question: 'MacBook可以用eGPU做本地LLM推理吗？',
      answer: '不可以。Apple Silicon MacBook（M2/M3/M4/M5）无法将eGPU用于GPU计算。macOS Ventura及后续版本完全移除了Thunderbolt eGPU支持。替代方案：Mac Mini M4 Pro（48GB统一内存）或配OCuLink eGPU的AMD迷你PC。',
      bullets: [
        'Apple Silicon MacBook：不支持eGPU用于GPU计算（macOS Ventura以上）',
        'Intel MacBook（2015–2020）：通过Thunderbolt 3支持eGPU——但已停产',
        'macOS最佳替代：Mac Mini M4 Pro（48GB统一内存）',
        '最佳GPU+便携方案：AMD迷你PC（UM890 Pro）+ OCuLink + RTX 3090',
        'OCuLink提供约80%的PCIe x16带宽——LLM推理无瓶颈',
      ],
      updatedDate: '2026-05-26',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Apple Silicon MacBook无法将eGPU用于计算——Apple在macOS Ventura中移除了该功能',
          'Intel MacBook（2018–2020）曾通过Thunderbolt 3支持eGPU——但该产品线已停产',
          'macOS用户：购买Mac Mini M4 Pro（48GB）而非尝试MacBook eGPU扩展',
          '便携+GPU方案：AMD迷你PC（UM890 Pro）+ OCuLink RTX 3090——Ollama运行60–80 tok/s',
          'x86笔记本（Windows/Linux）的Thunderbolt 4 eGPU可用——带宽损失约35–45%',
        ],
      },
      mainContent: {
        title: '2026年MacBook为何无法使用eGPU',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年eGPU无法用于Apple Silicon MacBook的GPU加速本地LLM推理，因为Apple在macOS Ventura（2022年）中移除了Thunderbolt eGPU计算支持。',
          },
          {
            type: 'plain-terms',
            text: 'eGPU是通过Thunderbolt或OCuLink连接的外置显卡盒。在搭载Apple M系列芯片的MacBook上，GPU集成在芯片中——无法为计算任务添加外置GPU。Apple的GPU API（Metal）在M系列硬件上不支持外置GPU。',
          },
        ],
        content: 'Apple在macOS Ventura（2022年10月发布）中移除了Thunderbolt eGPU支持。所有Apple Silicon MacBook（M1–M5）运行此版本或更新版本。即使物理连接eGPU，macOS也不会将外置GPU用于GPU计算。',
        items: [
          '**macOS 13 Ventura（2022年）**：eGPU支持被移除，所有Apple Silicon Mac受影响。',
          '**macOS 14 Sonoma、15 Sequoia**：仍无eGPU计算支持。',
          '**Intel MacBook（2018–2020年）**：曾在旧版macOS上通过Thunderbolt 3支持eGPU。',
        ],
      },
      alternatives: {
        title: 'Mac上GPU推理的真实替代方案',
        items: [
          {
            title: 'Mac Mini M4 Pro（48GB）——最佳macOS选择',
            content: 'Mac Mini M4 Pro（48GB统一内存，约9800元）通过Ollama的Metal后端以20–30 tok/s运行Qwen2.5 32B Q4。如果需要在macOS环境中运行32B以上模型，这是正确的升级路径——而非eGPU。',
            affiliateLinks: [
              { label: '在京东查看Apple Mac Mini M4 Pro', url: '[AFFILIATE_LINK_PLACEHOLDER:jd_mac_mini_m4_pro]' },
            ],
          },
          {
            title: 'AMD迷你PC + OCuLink eGPU（最佳GPU/便携组合）',
            content: 'AOOSTAR GEM12 Pro OCuLink（AMD Ryzen 9 8945HS，约3300元）通过OCuLink（PCIe 4.0 x4，64Gbps——约80%的x16插槽带宽）连接RTX 3090或RTX 4090。Linux/Windows上的Ollama通过CUDA在RTX 3090上运行7B Q4达65–85 tok/s。迷你PC体积小，可放在MacBook旁边的桌面上，通过局域网提供Ollama服务。',
            affiliateLinks: [
              { label: '在京东查看AOOSTAR GEM12 Pro OCuLink', url: '[AFFILIATE_LINK_PLACEHOLDER:jd_aoostar_gem12_pro]' },
            ],
          },
        ],
      },
      faq: {
        faqs: [
          {
            q: '有没有办法让eGPU在M4 MacBook Pro上用于AI？',
            a: '无法用于GPU计算。macOS不为M系列硬件上的Metal计算任务提供外置GPU的API。替代方案：在另一台有独立GPU的设备（迷你PC或台式机）上运行Ollama服务器，通过局域网从MacBook连接（服务器设置OLLAMA_HOST=0.0.0.0）。',
          },
          {
            q: 'Apple会为Apple Silicon重新加入eGPU支持吗？',
            a: '可能性不大。Apple的M系列架构将GPU、CPU和内存集成在单一芯片上——设计理念是统一内存而非可扩展性。唯一支持GPU扩展的Apple产品是Mac Pro（2023年）。',
          },
          {
            q: '能否用NVIDIA GPU做推理并将输出传给MacBook？',
            a: '可以——这是推荐方案。在配有NVIDIA GPU的Windows或Linux机器上运行Ollama，通过局域网暴露（OLLAMA_HOST=0.0.0.0），从MacBook通过Open WebUI、Cursor、Continue或任何OpenAI兼容客户端连接。MacBook负责界面，NVIDIA机器负责计算。',
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
          name: 'MacBook可以用eGPU做本地LLM推理吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不可以。Apple在macOS Ventura（2022年）中移除了eGPU计算支持。替代方案：Mac Mini M4 Pro（48GB统一内存）或配OCuLink的AMD迷你PC。',
          },
        },
        {
          '@type': 'Question',
          name: '能否用NVIDIA GPU做推理并将输出传给MacBook？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '可以。在有NVIDIA GPU的机器上运行Ollama（设置OLLAMA_HOST=0.0.0.0），从MacBook通过任何OpenAI兼容客户端连接即可。',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'MacBook eGPU与本地AI：2026年什么有效', datePublished: '2026-05-26', dateModified: '2026-05-26' },
  },
}
