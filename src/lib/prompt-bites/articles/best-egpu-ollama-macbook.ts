import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'eGPU for Ollama on a MacBook in 2026: Intel vs Apple Silicon',
    seoTitle: 'eGPU for Ollama on MacBook 2026: Intel vs Apple Silicon',
    metaDescription: 'eGPU + Ollama on a MacBook: Apple Silicon has no eGPU support at all. On an Intel MacBook, Ollama won\'t use an AMD eGPU either — but llama.cpp with Vulkan (MoltenVK) can.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'MacBook owners considering an eGPU to accelerate Ollama',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    leadAnswerBlock:
      'There is no working eGPU for Ollama on an Apple Silicon MacBook — Apple Silicon uses unified memory and exposes no PCIe path to an external GPU. On an Intel MacBook (e.g., the 16" MacBook Pro) an AMD eGPU physically works over Thunderbolt 3, but Ollama still will not dispatch to it: Ollama only accelerates on Apple-Silicon Metal, not third-party GPUs. The workaround for Intel Macs is llama.cpp built with the Vulkan backend via MoltenVK, which can use an AMD eGPU (e.g., Radeon RX 6800/6900 XT) at roughly 15–17% Thunderbolt overhead. For Apple Silicon, the only path to faster local LLMs is more unified memory.',
    toc: [
      { label: 'Best Pick: Skip the eGPU, Use Unified Memory', anchor: '#best-pick' },
      { label: 'Why eGPUs Do Not Work on Apple Silicon', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'eGPU enclosures plug an external GPU into a laptop via Thunderbolt or OCuLink. They are useful on Linux. On Apple Silicon MacBooks, they do not work — and not because of price or availability. The architecture rules them out.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon MacBooks do not support eGPUs — macOS dropped third-party GPU drivers when Intel Macs were retired',
          'Apple Silicon uses unified memory, which is the GPU memory; there is no PCIe path to attach a discrete GPU',
          'For more LLM headroom on a Mac, buy a MacBook Pro or Mac Studio with more unified memory instead',
          'eGPUs do still work on Linux laptops with Thunderbolt 4 or OCuLink — only relevant for non-Apple hardware',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Skip the eGPU — Buy More Unified Memory',
        content: [
          '<strong>The best eGPU for Ollama on a MacBook is no eGPU. Apple Silicon does not support them, and no workaround exists.</strong> The path to faster local LLM inference on a Mac is more unified memory, not an external GPU.',
          'On Apple Silicon, the GPU shares the same physical RAM as the CPU. There is no separate VRAM pool to expand, and macOS does not expose PCIe device tunneling over Thunderbolt the way Linux does. Apple dropped third-party eGPU drivers when Intel Macs were discontinued — there is no Metal driver for NVIDIA, AMD, or any external GPU.',
          'If you want more local LLM headroom on a Mac, the upgrade path is a MacBook Pro or Mac Studio with more unified memory (32 GB, 64 GB, 96 GB). If GPU expandability is essential, the alternative is a Linux laptop with Thunderbolt 4 or an OCuLink-equipped laptop paired with a desktop GPU in an enclosure — those still work, just not on Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Check MacBook Pro 32GB+ on Amazon (eGPU alternative)',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Check Mac Studio price on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Why eGPUs Do Not Work on Apple Silicon',
        content: [
          '<strong>The blocker is architectural, not commercial — no enclosure, no driver, and no software stack solves it.</strong>',
        ],
        columns: ['Constraint', 'Apple Silicon MacBook', 'Linux laptop with TB4/OCuLink'],
        rows: [
          {
            'Constraint': 'GPU driver for external NVIDIA/AMD',
            'Apple Silicon MacBook': 'Not available on macOS',
            'Linux laptop with TB4/OCuLink': 'Available (nvidia, amdgpu)',
          },
          {
            'Constraint': 'PCIe tunneling over Thunderbolt',
            'Apple Silicon MacBook': 'Not exposed by macOS',
            'Linux laptop with TB4/OCuLink': 'Supported',
          },
          {
            'Constraint': 'Memory architecture',
            'Apple Silicon MacBook': 'Unified memory only',
            'Linux laptop with TB4/OCuLink': 'Discrete VRAM on eGPU',
          },
          {
            'Constraint': 'Ollama eGPU acceleration',
            'Apple Silicon MacBook': 'No path — does not work',
            'Linux laptop with TB4/OCuLink': 'Works with CUDA or ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About eGPUs and MacBooks',
        faqs: [
          {
            q: 'Why does my MacBook not support an eGPU?',
            a: 'Apple Silicon MacBooks use unified memory and do not expose PCIe tunneling over Thunderbolt. Apple also dropped third-party eGPU drivers when Intel Macs were retired. There is no software path to make an external NVIDIA or AMD GPU work on macOS today.',
          },
          {
            q: 'Can I use an eGPU with Ollama on an Intel MacBook?',
            a: 'The eGPU works, but Ollama will not use it. Intel MacBooks (like the 16" MacBook Pro) support AMD eGPUs over Thunderbolt 3 at the macOS level, but Ollama only dispatches to Apple-Silicon Metal — it ignores third-party GPUs. The workaround is to build llama.cpp with the Vulkan backend via MoltenVK, which can run inference on an AMD eGPU (e.g., Radeon RX 6800/6900 XT) on an Intel Mac. Expect roughly 15–17% overhead from Thunderbolt bandwidth, and note it requires a manual compile — it is not as turnkey as Ollama on Apple Silicon.',
          },
          {
            q: 'What is the fastest way to speed up Ollama on a MacBook?',
            a: 'Buy more unified memory. A MacBook Pro with 32 GB or 64 GB of unified memory runs larger models locally with full Metal GPU acceleration. There is no external accelerator option.',
          },
          {
            q: 'Do eGPUs work for Ollama on Linux laptops?',
            a: 'Yes. A Linux laptop with Thunderbolt 4 or OCuLink can attach a desktop NVIDIA or AMD GPU and run Ollama via CUDA or ROCm. Performance is limited by the Thunderbolt 4 bandwidth (40 Gbps), but it works.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Is the Mac Mini M4 Good for Local LLMs?](/prompt-bites/mac-mini-m4-local-llm) — the desktop counterpart with the same architecture',
          '[Best Budget AI Laptop Under $1,000](/prompt-bites/best-budget-ai-laptop-under-1000) — non-Apple alternatives at the entry tier',
          '[Best Mini PC for Local LLM](/prompt-bites/best-mini-pc-for-local-llm) — desktop mini PCs vs MacBook unified memory',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    title: 'eGPU für Ollama auf einem MacBook 2026: Intel vs Apple Silicon',
    seoTitle: 'eGPU für Ollama am MacBook 2026: Intel vs Apple Silicon',
    metaDescription: 'eGPU + Ollama am MacBook: Apple Silicon unterstützt gar kein eGPU. Auf einem Intel-MacBook nutzt Ollama ein AMD-eGPU ebenfalls nicht — aber llama.cpp mit Vulkan (MoltenVK) kann es.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'MacBook-Besitzer, die ein eGPU zur Beschleunigung von Ollama erwägen',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 Min. Lesezeit',
    leadAnswerBlock:
      'Es gibt kein funktionierendes eGPU für Ollama auf einem Apple-Silicon-MacBook — Apple Silicon nutzt Unified Memory und stellt keinen PCIe-Pfad zu einer externen GPU bereit. Auf einem Intel-MacBook (z. B. dem 16"-MacBook Pro) funktioniert ein AMD-eGPU physisch über Thunderbolt 3, aber Ollama nutzt es trotzdem nicht: Ollama beschleunigt nur über Apple-Silicon-Metal, nicht über GPUs von Drittanbietern. Der Workaround für Intel-Macs ist llama.cpp mit dem Vulkan-Backend über MoltenVK, das ein AMD-eGPU (z. B. Radeon RX 6800/6900 XT) mit rund 15–17 % Thunderbolt-Overhead ansprechen kann. Für Apple Silicon ist der einzige Weg zu schnelleren lokalen LLMs mehr Unified Memory.',
    toc: [
      { label: 'Beste Wahl: kein eGPU, mehr Unified Memory', anchor: '#best-pick' },
      { label: 'Warum eGPUs auf Apple Silicon nicht funktionieren', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro:
      'eGPU-Gehäuse verbinden eine externe GPU über Thunderbolt oder OCuLink mit einem Laptop. Auf Linux nützlich. Auf Apple-Silicon-MacBooks funktionieren sie nicht — und das nicht wegen Preis oder Verfügbarkeit. Die Architektur schließt sie aus.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple-Silicon-MacBooks unterstützen keine eGPUs — macOS hat Treiber von Drittanbietern beim Ende der Intel-Macs entfernt',
          'Apple Silicon nutzt Unified Memory als GPU-Speicher; es gibt keinen PCIe-Pfad für eine diskrete GPU',
          'Für mehr LLM-Reserve auf dem Mac kaufen Sie ein MacBook Pro oder Mac Studio mit mehr Unified Memory',
          'eGPUs funktionieren weiterhin auf Linux-Laptops mit Thunderbolt 4 oder OCuLink — nur für Nicht-Apple-Hardware relevant',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: kein eGPU — mehr Unified Memory kaufen',
        content: [
          '<strong>Das beste eGPU für Ollama auf einem MacBook ist kein eGPU. Apple Silicon unterstützt sie nicht, und es gibt keinen Workaround.</strong> Der Weg zu schnellerer lokaler LLM-Inferenz auf einem Mac ist mehr Unified Memory, nicht eine externe GPU.',
          'Auf Apple Silicon teilt sich die GPU denselben physischen RAM mit der CPU. Es gibt keinen separaten VRAM-Pool, und macOS legt PCIe-Tunneling über Thunderbolt nicht offen wie Linux. Apple hat Treiber von Drittanbietern beim Einstellen der Intel-Macs entfernt — es gibt keinen Metal-Treiber für NVIDIA, AMD oder eine externe GPU.',
          'Wenn Sie mehr Reserve für lokale LLMs auf einem Mac wollen, ist der Upgrade-Pfad ein MacBook Pro oder Mac Studio mit mehr Unified Memory (32 GB, 64 GB, 96 GB). Wenn GPU-Erweiterbarkeit wesentlich ist, ist die Alternative ein Linux-Laptop mit Thunderbolt 4 oder ein OCuLink-Laptop mit einer Desktop-GPU im Gehäuse — die funktionieren weiterhin, nur eben nicht auf Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-Serie 32GB+',
            productCategory: 'laptop',
            label: 'MacBook Pro 32GB+ Preis bei Amazon.de prüfen (eGPU-Alternative)',
          },
          {
            url: 'https://www.amazon.de/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-Serie',
            productCategory: 'desktop',
            label: 'Mac Studio Preis bei Amazon.de prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Warum eGPUs auf Apple Silicon nicht funktionieren',
        content: [
          '<strong>Die Blockade ist architektonisch, nicht kommerziell — kein Gehäuse, kein Treiber und kein Software-Stack lösen sie.</strong>',
        ],
        columns: ['Einschränkung', 'Apple-Silicon-MacBook', 'Linux-Laptop mit TB4/OCuLink'],
        rows: [
          {
            'Einschränkung': 'GPU-Treiber für externe NVIDIA/AMD',
            'Apple-Silicon-MacBook': 'Nicht verfügbar unter macOS',
            'Linux-Laptop mit TB4/OCuLink': 'Verfügbar (nvidia, amdgpu)',
          },
          {
            'Einschränkung': 'PCIe-Tunneling über Thunderbolt',
            'Apple-Silicon-MacBook': 'Von macOS nicht offengelegt',
            'Linux-Laptop mit TB4/OCuLink': 'Unterstützt',
          },
          {
            'Einschränkung': 'Speicherarchitektur',
            'Apple-Silicon-MacBook': 'Nur Unified Memory',
            'Linux-Laptop mit TB4/OCuLink': 'Diskreter VRAM auf eGPU',
          },
          {
            'Einschränkung': 'Ollama-eGPU-Beschleunigung',
            'Apple-Silicon-MacBook': 'Kein Weg — funktioniert nicht',
            'Linux-Laptop mit TB4/OCuLink': 'Funktioniert mit CUDA oder ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu eGPUs und MacBooks',
        faqs: [
          {
            q: 'Warum unterstützt mein MacBook kein eGPU?',
            a: 'Apple-Silicon-MacBooks nutzen Unified Memory und legen PCIe-Tunneling über Thunderbolt nicht offen. Apple hat zudem Treiber von Drittanbietern beim Ende der Intel-Macs entfernt. Es gibt heute keinen Software-Pfad, um eine externe NVIDIA- oder AMD-GPU unter macOS zum Laufen zu bringen.',
          },
          {
            q: 'Kann ich ein eGPU mit Ollama auf einem Intel-MacBook nutzen?',
            a: 'Das eGPU funktioniert, aber Ollama nutzt es nicht. Intel-MacBooks (wie das 16"-MacBook Pro) unterstützen AMD-eGPUs über Thunderbolt 3 auf macOS-Ebene, aber Ollama beschleunigt nur über Apple-Silicon-Metal — GPUs von Drittanbietern werden ignoriert. Der Workaround ist, llama.cpp mit dem Vulkan-Backend über MoltenVK zu bauen, das auf einem Intel-Mac Inferenz auf einem AMD-eGPU (z. B. Radeon RX 6800/6900 XT) ausführen kann. Rechnen Sie mit rund 15–17 % Overhead durch die Thunderbolt-Bandbreite, und beachten Sie: Es erfordert manuelles Kompilieren — es ist nicht so schlüsselfertig wie Ollama auf Apple Silicon.',
          },
          {
            q: 'Was beschleunigt Ollama auf einem MacBook am schnellsten?',
            a: 'Mehr Unified Memory kaufen. Ein MacBook Pro mit 32 GB oder 64 GB Unified Memory führt größere Modelle lokal mit voller Metal-GPU-Beschleunigung aus. Es gibt keine externe Beschleunigungsoption.',
          },
          {
            q: 'Funktionieren eGPUs für Ollama auf Linux-Laptops?',
            a: 'Ja. Ein Linux-Laptop mit Thunderbolt 4 oder OCuLink kann eine Desktop-NVIDIA- oder AMD-GPU anschließen und Ollama via CUDA oder ROCm ausführen. Die Leistung wird durch die Thunderbolt-4-Bandbreite (40 Gbit/s) begrenzt, aber es funktioniert.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Ist der Mac Mini M4 gut für lokale LLMs?](/de/prompt-bites/mac-mini-m4-local-llm) — das Desktop-Pendant mit derselben Architektur',
          '[Bestes Budget-AI-Laptop unter 1.000 $](/de/prompt-bites/best-budget-ai-laptop-under-1000) — Nicht-Apple-Alternativen im Einstiegsbereich',
          '[Bester Mini-PC für lokales LLM](/de/prompt-bites/best-mini-pc-for-local-llm) — Desktop-Mini-PCs vs MacBook Unified Memory',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    title: 'eGPU pour Ollama sur un MacBook en 2026 : Intel vs Apple Silicon',
    seoTitle: 'eGPU Ollama sur MacBook 2026 : Intel vs Apple Silicon',
    metaDescription: 'eGPU + Ollama sur un MacBook : Apple Silicon ne prend pas du tout en charge l\'eGPU. Sur un MacBook Intel, Ollama n\'utilise pas non plus un eGPU AMD — mais llama.cpp avec Vulkan (MoltenVK) le peut.',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de MacBook envisageant un eGPU pour accélérer Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 min de lecture',
    leadAnswerBlock:
      'Aucun eGPU ne fonctionne pour Ollama sur un MacBook Apple Silicon — Apple Silicon utilise la mémoire unifiée et n\'expose aucun chemin PCIe vers un GPU externe. Sur un MacBook Intel (par ex. le MacBook Pro 16"), un eGPU AMD fonctionne physiquement via Thunderbolt 3, mais Ollama ne l\'utilise toujours pas : Ollama n\'accélère que via Apple-Silicon Metal, pas les GPU tiers. La solution de contournement pour les Mac Intel est llama.cpp compilé avec le backend Vulkan via MoltenVK, qui peut exploiter un eGPU AMD (par ex. Radeon RX 6800/6900 XT) avec environ 15–17 % de surcoût Thunderbolt. Pour Apple Silicon, la seule voie vers des LLM locaux plus rapides est plus de mémoire unifiée.',
    toc: [
      { label: 'Meilleur choix : pas d\'eGPU, plus de mémoire unifiée', anchor: '#best-pick' },
      { label: 'Pourquoi les eGPU ne fonctionnent pas sur Apple Silicon', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro:
      'Les boîtiers eGPU connectent un GPU externe à un laptop via Thunderbolt ou OCuLink. Utiles sous Linux. Sur les MacBook Apple Silicon, ils ne fonctionnent pas — et ce n\'est ni une question de prix ni de disponibilité. L\'architecture les exclut.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Les MacBook Apple Silicon ne prennent pas en charge les eGPU — macOS a abandonné les pilotes tiers à la fin des Mac Intel',
          'Apple Silicon utilise la mémoire unifiée comme mémoire GPU ; aucun chemin PCIe pour brancher un GPU discret',
          'Pour plus de marge LLM sur un Mac, achetez un MacBook Pro ou Mac Studio avec davantage de mémoire unifiée',
          'Les eGPU fonctionnent toujours sur des laptops Linux avec Thunderbolt 4 ou OCuLink — pertinent uniquement hors Apple',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : pas d\'eGPU — achetez plus de mémoire unifiée',
        content: [
          '<strong>Le meilleur eGPU pour Ollama sur un MacBook, c\'est aucun eGPU. Apple Silicon ne les prend pas en charge et aucune solution de contournement n\'existe.</strong> La voie vers une inférence LLM locale plus rapide sur Mac, c\'est plus de mémoire unifiée, pas un GPU externe.',
          'Sur Apple Silicon, le GPU partage la même RAM physique que le CPU. Il n\'y a pas de pool VRAM séparé à étendre, et macOS n\'expose pas le tunneling PCIe via Thunderbolt comme le fait Linux. Apple a retiré les pilotes eGPU tiers à la fin des Mac Intel — il n\'existe aucun pilote Metal pour NVIDIA, AMD ou tout GPU externe.',
          'Pour plus de marge LLM locale sur Mac, le chemin de mise à niveau est un MacBook Pro ou Mac Studio avec plus de mémoire unifiée (32, 64, 96 Go). Si l\'extensibilité GPU est essentielle, l\'alternative est un laptop Linux avec Thunderbolt 4 ou OCuLink associé à un GPU de bureau dans un boîtier — qui fonctionnent toujours, mais pas sur Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32 Go+',
            productCategory: 'laptop',
            label: 'Voir le prix du MacBook Pro 32 Go+ sur Amazon.fr (alternative à l\'eGPU)',
          },
          {
            url: 'https://www.amazon.fr/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Voir le prix du Mac Studio sur Amazon.fr',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Pourquoi les eGPU ne fonctionnent pas sur Apple Silicon',
        content: [
          '<strong>Le blocage est architectural, pas commercial — aucun boîtier, aucun pilote, aucune pile logicielle ne le résout.</strong>',
        ],
        columns: ['Contrainte', 'MacBook Apple Silicon', 'Laptop Linux avec TB4/OCuLink'],
        rows: [
          {
            'Contrainte': 'Pilote GPU pour NVIDIA/AMD externe',
            'MacBook Apple Silicon': 'Indisponible sous macOS',
            'Laptop Linux avec TB4/OCuLink': 'Disponible (nvidia, amdgpu)',
          },
          {
            'Contrainte': 'Tunneling PCIe via Thunderbolt',
            'MacBook Apple Silicon': 'Non exposé par macOS',
            'Laptop Linux avec TB4/OCuLink': 'Pris en charge',
          },
          {
            'Contrainte': 'Architecture mémoire',
            'MacBook Apple Silicon': 'Mémoire unifiée uniquement',
            'Laptop Linux avec TB4/OCuLink': 'VRAM discrète sur eGPU',
          },
          {
            'Contrainte': 'Accélération eGPU pour Ollama',
            'MacBook Apple Silicon': 'Aucune voie — ne fonctionne pas',
            'Laptop Linux avec TB4/OCuLink': 'Fonctionne avec CUDA ou ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les eGPU et les MacBook',
        faqs: [
          {
            q: 'Pourquoi mon MacBook ne prend-il pas en charge un eGPU ?',
            a: 'Les MacBook Apple Silicon utilisent la mémoire unifiée et n\'exposent pas le tunneling PCIe via Thunderbolt. Apple a également retiré les pilotes eGPU tiers à la fin des Mac Intel. Il n\'existe aujourd\'hui aucune voie logicielle pour faire fonctionner un GPU externe NVIDIA ou AMD sous macOS.',
          },
          {
            q: 'Puis-je utiliser un eGPU avec Ollama sur un MacBook Intel ?',
            a: 'L\'eGPU fonctionne, mais Ollama ne l\'utilise pas. Les MacBook Intel (comme le MacBook Pro 16") prennent en charge les eGPU AMD via Thunderbolt 3 au niveau de macOS, mais Ollama n\'accélère que via Apple-Silicon Metal — il ignore les GPU tiers. La solution de contournement consiste à compiler llama.cpp avec le backend Vulkan via MoltenVK, qui peut exécuter l\'inférence sur un eGPU AMD (par ex. Radeon RX 6800/6900 XT) sur un Mac Intel. Prévoyez environ 15–17 % de surcoût dû à la bande passante Thunderbolt, et notez que cela nécessite une compilation manuelle — ce n\'est pas aussi clé en main qu\'Ollama sur Apple Silicon.',
          },
          {
            q: 'Quel est le moyen le plus rapide d\'accélérer Ollama sur un MacBook ?',
            a: 'Acheter plus de mémoire unifiée. Un MacBook Pro avec 32 ou 64 Go de mémoire unifiée exécute des modèles plus grands localement avec l\'accélération Metal GPU complète. Il n\'existe aucune option d\'accélérateur externe.',
          },
          {
            q: 'Les eGPU fonctionnent-ils pour Ollama sur des laptops Linux ?',
            a: 'Oui. Un laptop Linux avec Thunderbolt 4 ou OCuLink peut connecter un GPU de bureau NVIDIA ou AMD et exécuter Ollama via CUDA ou ROCm. Les performances sont limitées par la bande passante Thunderbolt 4 (40 Gbit/s), mais cela fonctionne.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Le Mac Mini M4 est-il bon pour les LLM locaux ?](/fr/prompt-bites/mac-mini-m4-local-llm) — l\'équivalent desktop avec la même architecture',
          '[Meilleur laptop AI budget sous 1 000 $](/fr/prompt-bites/best-budget-ai-laptop-under-1000) — alternatives non-Apple à l\'entrée de gamme',
          '[Meilleur mini-PC pour LLM local](/fr/prompt-bites/best-mini-pc-for-local-llm) — mini-PC desktop vs mémoire unifiée du MacBook',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    title: 'MacBookでOllama向けのベストeGPUは2026年？',
    seoTitle: 'MacBookでOllama用eGPU 2026 | Prompt Bites',
    metaDescription: 'Apple Silicon MacBookでOllama向けに動作するeGPUは存在しません。ユニファイドメモリとPCIe非対応が要因。代わりにユニファイドメモリ増設またはLinuxラップトップを。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'Ollama高速化のためeGPU導入を検討するMacBookユーザー',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3分で読める',
    leadAnswerBlock:
      'Apple Silicon MacBookでOllama向けに動作するeGPUはありません。Apple Siliconはユニファイドメモリを採用し、外部GPU向けにPCIeを公開していません — Intel Macの販売終了時にmacOSがサードパーティeGPUドライバを廃止しました。eGPUはThunderbolt 4またはOCuLinkを備えたLinuxラップトップでのみ役立ちます。',
    toc: [
      { label: 'ベスト：eGPUなし、ユニファイドメモリ増設', anchor: '#best-pick' },
      { label: 'Apple SiliconでeGPUが動かない理由', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro:
      'eGPUエンクロージャは外部GPUをThunderboltまたはOCuLink経由でラップトップに接続します。Linuxでは有用です。Apple Silicon MacBookでは動作しません — 価格や供給ではなく、アーキテクチャ上の理由で除外されています。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon MacBookはeGPUに対応していません — Intel Mac終了時にmacOSがサードパーティGPUドライバを廃止しました',
          'Apple SiliconはユニファイドメモリをGPUメモリとして使用 — 別途GPUを接続するPCIe経路がありません',
          'MacでローカルLLMの余裕を増やすなら、MacBook ProまたはMac Studioをより多くのユニファイドメモリ構成で購入してください',
          'eGPUはThunderbolt 4またはOCuLinkを備えたLinuxラップトップでは依然として動作 — Apple以外のハードウェア向け',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベスト：eGPUなし — ユニファイドメモリを増やす',
        content: [
          '<strong>MacBookでOllama向けのベストeGPUは「eGPUなし」です。Apple Siliconは対応しておらず、回避策も存在しません。</strong>MacでローカルLLM推論を高速化する道はユニファイドメモリ増設であり、外部GPUではありません。',
          'Apple SiliconではGPUがCPUと同じ物理RAMを共有します。拡張可能な独立VRAMプールはなく、macOSはLinuxのようにThunderbolt経由のPCIeトンネリングを公開しません。Apple はIntel Mac販売終了時にサードパーティeGPUドライバを廃止しました — NVIDIAやAMD、その他外部GPU向けのMetalドライバは存在しません。',
          'MacでローカルLLMの余裕を増やしたい場合、アップグレードパスはユニファイドメモリ32/64/96 GBのMacBook ProまたはMac Studioです。GPU拡張性が必須なら、代替はThunderbolt 4またはOCuLink搭載のLinuxラップトップにエンクロージャ経由でデスクトップGPUを接続する方式 — これは依然動作しますが、Apple Siliconでは不可です。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Amazon.co.jpでMacBook Pro 32GB+の価格を確認（eGPUの代替）',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Amazon.co.jpでMac Studioの価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Apple SiliconでeGPUが動かない理由',
        content: [
          '<strong>障壁は商業的ではなくアーキテクチャ的です — エンクロージャ、ドライバ、ソフトウェアスタックのいずれも解決しません。</strong>',
        ],
        columns: ['制約', 'Apple Silicon MacBook', 'TB4/OCuLink搭載Linuxラップトップ'],
        rows: [
          {
            '制約': '外部NVIDIA/AMD向けGPUドライバ',
            'Apple Silicon MacBook': 'macOSで利用不可',
            'TB4/OCuLink搭載Linuxラップトップ': '利用可（nvidia、amdgpu）',
          },
          {
            '制約': 'Thunderbolt経由のPCIeトンネリング',
            'Apple Silicon MacBook': 'macOSが非公開',
            'TB4/OCuLink搭載Linuxラップトップ': 'サポート',
          },
          {
            '制約': 'メモリアーキテクチャ',
            'Apple Silicon MacBook': 'ユニファイドメモリのみ',
            'TB4/OCuLink搭載Linuxラップトップ': 'eGPU上の独立VRAM',
          },
          {
            '制約': 'Ollama eGPUアクセラレーション',
            'Apple Silicon MacBook': '経路なし — 動作しません',
            'TB4/OCuLink搭載Linuxラップトップ': 'CUDAまたはROCmで動作',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'eGPUとMacBookに関する短い回答',
        faqs: [
          {
            q: 'なぜMacBookはeGPUに対応していませんか？',
            a: 'Apple Silicon MacBookはユニファイドメモリを使用し、Thunderbolt経由のPCIeトンネリングを公開していません。さらにAppleはIntel Mac販売終了時にサードパーティeGPUドライバを廃止しました。現在、macOSで外部NVIDIA/AMD GPUを動作させるソフトウェア経路は存在しません。',
          },
          {
            q: '旧Intel MacBookはeGPUに対応していましたか？',
            a: 'はい、Intel MacBookはThunderbolt 3経由でAMD eGPUに対応していました。そのサポートはApple Silicon移行で終了しました。新しいMacおよびApple Silicon上のOllamaにはeGPU経路がありません。',
          },
          {
            q: 'MacBookでOllamaを最速で速くする方法は？',
            a: 'ユニファイドメモリを増やすことです。32 GBまたは64 GBのユニファイドメモリを搭載したMacBook Proなら、Metal GPUアクセラレーション付きでより大きなモデルをローカル実行できます。外部アクセラレータの選択肢はありません。',
          },
          {
            q: 'Linuxラップトップ上のOllamaでeGPUは動作しますか？',
            a: 'はい。Thunderbolt 4またはOCuLinkを備えたLinuxラップトップはデスクトップNVIDIA/AMD GPUを接続し、CUDAまたはROCm経由でOllamaを実行できます。Thunderbolt 4の帯域（40 Gbps）に制限されますが、動作します。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Mac Mini M4はローカルLLMに向いている？](/ja/prompt-bites/mac-mini-m4-local-llm) — 同じアーキテクチャのデスクトップ版',
          '[1,000ドル以下のベストAI予算ラップトップ](/ja/prompt-bites/best-budget-ai-laptop-under-1000) — Apple以外のエントリー層代替',
          '[ローカルLLM向けベストミニPC](/ja/prompt-bites/best-mini-pc-for-local-llm) — デスクトップミニPCとMacBookのユニファイドメモリ比較',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    title: '2026年MacBook上Ollama的最佳eGPU？',
    seoTitle: 'MacBook上Ollama的eGPU 2026 | Prompt Bites',
    metaDescription: 'Apple Silicon MacBook上Ollama没有可用的eGPU。统一内存和缺乏PCIe支持排除了这一点。改用更多统一内存或Linux笔记本。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: '考虑使用eGPU加速Ollama的MacBook用户',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '阅读约3分钟',
    leadAnswerBlock:
      'Apple Silicon MacBook上Ollama没有可用的eGPU。Apple Silicon使用统一内存，不向外部GPU公开PCIe — Intel Mac停产时macOS取消了第三方eGPU驱动。eGPU仅对配备Thunderbolt 4或OCuLink的Linux笔记本有用。',
    toc: [
      { label: '最佳选择：不用eGPU，加统一内存', anchor: '#best-pick' },
      { label: '为什么eGPU在Apple Silicon上不工作', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related' },
    ],
    intro:
      'eGPU机箱通过Thunderbolt或OCuLink将外部GPU连接到笔记本。在Linux上有用。在Apple Silicon MacBook上不工作 — 不是因为价格或可用性，而是架构本身排除了它。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon MacBook不支持eGPU — macOS在Intel Mac停产时取消了第三方GPU驱动',
          'Apple Silicon使用统一内存作为GPU内存；没有连接独立GPU的PCIe路径',
          '若想在Mac上获得更多LLM空间，请购买带更多统一内存的MacBook Pro或Mac Studio',
          'eGPU在配备Thunderbolt 4或OCuLink的Linux笔记本上仍可工作 — 仅与非Apple硬件相关',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：不用eGPU — 买更多统一内存',
        content: [
          '<strong>MacBook上Ollama的最佳eGPU就是不用eGPU。Apple Silicon不支持，也没有变通方案。</strong>在Mac上加速本地LLM推理的途径是增加统一内存，而非外接GPU。',
          '在Apple Silicon上，GPU与CPU共享同一物理RAM。没有可扩展的独立VRAM池，macOS也不像Linux那样通过Thunderbolt公开PCIe隧道。Apple在Intel Mac停产时取消了第三方eGPU驱动 — macOS没有针对NVIDIA、AMD或任何外部GPU的Metal驱动。',
          '若想在Mac上获得更多本地LLM余量，升级路径是统一内存32 GB/64 GB/96 GB的MacBook Pro或Mac Studio。如果GPU可扩展性是必须的，替代方案是配备Thunderbolt 4或OCuLink的Linux笔记本搭配机箱内的桌面GPU — 这些仍可工作，只是不在Apple Silicon上。',
        ],
        affiliateLinks: [
          {
            url: 'https://search.jd.com/Search?keyword=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M系列 32GB+',
            productCategory: 'laptop',
            label: '在京东查看MacBook Pro 32GB+价格（eGPU替代）',
          },
          {
            url: 'https://search.jd.com/Search?keyword=Mac+Studio+M',
            productName: 'Mac Studio M系列',
            productCategory: 'desktop',
            label: '在京东查看Mac Studio价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '为什么eGPU在Apple Silicon上不工作',
        content: [
          '<strong>障碍是架构性的，不是商业性的 — 没有机箱、驱动或软件栈能解决它。</strong>',
        ],
        columns: ['约束', 'Apple Silicon MacBook', 'TB4/OCuLink Linux笔记本'],
        rows: [
          {
            '约束': '外部NVIDIA/AMD的GPU驱动',
            'Apple Silicon MacBook': 'macOS上不可用',
            'TB4/OCuLink Linux笔记本': '可用（nvidia、amdgpu）',
          },
          {
            '约束': 'Thunderbolt上的PCIe隧道',
            'Apple Silicon MacBook': 'macOS未公开',
            'TB4/OCuLink Linux笔记本': '支持',
          },
          {
            '约束': '内存架构',
            'Apple Silicon MacBook': '仅统一内存',
            'TB4/OCuLink Linux笔记本': 'eGPU上的独立VRAM',
          },
          {
            '约束': 'Ollama eGPU加速',
            'Apple Silicon MacBook': '无路径 — 不工作',
            'TB4/OCuLink Linux笔记本': '可用CUDA或ROCm工作',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于eGPU和MacBook的快速答案',
        faqs: [
          {
            q: '为什么我的MacBook不支持eGPU？',
            a: 'Apple Silicon MacBook使用统一内存，不通过Thunderbolt公开PCIe隧道。Apple在Intel Mac停产时还取消了第三方eGPU驱动。如今在macOS上没有可让外部NVIDIA或AMD GPU工作的软件路径。',
          },
          {
            q: '较旧的Intel MacBook支持eGPU吗？',
            a: '是的，Intel MacBook通过Thunderbolt 3支持AMD eGPU。该支持随Apple Silicon过渡而结束。新Mac和Apple Silicon上的Ollama没有eGPU路径。',
          },
          {
            q: '在MacBook上加速Ollama最快的方法？',
            a: '购买更多统一内存。配备32 GB或64 GB统一内存的MacBook Pro可在本地运行更大模型，并享有完整的Metal GPU加速。没有外部加速器选项。',
          },
          {
            q: 'eGPU在Linux笔记本上对Ollama有效吗？',
            a: '有效。配备Thunderbolt 4或OCuLink的Linux笔记本可连接桌面NVIDIA或AMD GPU，通过CUDA或ROCm运行Ollama。性能受Thunderbolt 4带宽（40 Gbps）限制，但可工作。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '延伸阅读',
        items: [
          '[Mac Mini M4适合本地LLM吗？](/zh/prompt-bites/mac-mini-m4-local-llm) — 同架构的桌面版',
          '[1,000美元以下最佳AI预算笔记本](/zh/prompt-bites/best-budget-ai-laptop-under-1000) — 入门层级的非Apple替代',
          '[本地LLM最佳迷你PC](/zh/prompt-bites/best-mini-pc-for-local-llm) — 桌面迷你PC与MacBook统一内存对比',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    title: 'هل توجد ⁨eGPU⁩ تعمل مع ⁨Ollama⁩ على ⁨MacBook⁩ في ⁨2026⁩؟',
    seoTitle: '⁨Ollama⁩ و⁨eGPU⁩ على ⁨MacBook Apple Silicon 2026⁩',
    metaDescription: 'لا توجد ⁨eGPU⁩ تعمل مع ⁨Ollama⁩ على ⁨MacBook Apple Silicon⁩: ⁨macOS⁩ لا يدعم ⁨PCIe⁩ الخارجي منذ إيقاف ⁨Intel Mac⁩. البديل: ذاكرة موحدة أكبر أو ⁨Linux⁩.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'مالكو MacBook الذين يفكرون في eGPU لتسريع Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: 'قراءة 3 دقائق',
    leadAnswerBlock:
      'لا توجد eGPU تعمل مع Ollama على MacBook بمعالج Apple Silicon. يستخدم Apple Silicon الذاكرة الموحدة ولا يكشف PCIe لمعالجات الرسومات الخارجية — فقد أزال macOS تعريفات eGPU الخارجية عند إيقاف إنتاج أجهزة Mac بمعالج Intel. تفيد eGPU فقط في الحاسبات المحمولة التي تعمل بنظام Linux عبر Thunderbolt 4 أو OCuLink.',
    toc: [
      { label: 'أفضل خيار: انسَ eGPU، اشترِ ذاكرة موحدة أكبر', anchor: '#best-pick' },
      { label: 'لماذا لا تعمل eGPU على Apple Silicon', anchor: '#comparison' },
      { label: 'أسئلة شائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related' },
    ],
    intro:
      'تصل حاويات eGPU معالجَ رسومات خارجياً بحاسب محمول عبر Thunderbolt أو OCuLink. وهي مفيدة في Linux. لكنها لا تعمل على MacBook بمعالج Apple Silicon — وليس الأمر مسألة سعر أو توفر. فالبنية المعمارية تستبعد ذلك.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'لا تدعم أجهزة MacBook بمعالج Apple Silicon eGPU — فقد أزال macOS تعريفات معالجات الرسومات الخارجية عند إيقاف إنتاج أجهزة Mac بمعالج Intel',
          'يستخدم Apple Silicon الذاكرة الموحدة كذاكرة لمعالج الرسومات؛ لا توجد مسار PCIe لتوصيل معالج رسومات مستقل',
          'للحصول على مساحة أكبر للنماذج اللغوية الكبيرة على Mac، اشترِ MacBook Pro أو Mac Studio بذاكرة موحدة أكبر',
          'لا تزال eGPU تعمل في الحاسبات المحمولة التي تعمل بنظام Linux مع Thunderbolt 4 أو OCuLink — ذات صلة فقط للأجهزة غير التابعة لـ Apple',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل خيار: انسَ eGPU — اشترِ ذاكرة موحدة أكبر',
        content: [
          '<strong>أفضل eGPU لـ Ollama على MacBook هي بلا eGPU على الإطلاق. لا يدعم Apple Silicon eGPU ولا يوجد حل بديل.</strong> الطريق إلى استدلال أسرع بالنماذج اللغوية الكبيرة محلياً على Mac هو المزيد من الذاكرة الموحدة، لا معالج رسومات خارجي.',
          'في Apple Silicon، تشترك وحدة معالجة الرسومات في نفس RAM الفيزيائية مع وحدة المعالجة المركزية. لا يوجد مجموعة VRAM منفصلة لتوسيعها، ولا يكشف macOS نفق PCIe عبر Thunderbolt كما يفعل Linux. أزالت Apple تعريفات eGPU الخارجية عند إيقاف إنتاج أجهزة Mac بمعالج Intel — لا يوجد تعريف Metal لـ NVIDIA أو AMD أو أي معالج رسومات خارجي.',
          'إذا أردت مساحة أكبر للنماذج اللغوية الكبيرة المحلية على Mac، فالمسار للترقية هو MacBook Pro أو Mac Studio بذاكرة موحدة أكبر (32 جيجابايت، 64 جيجابايت، 96 جيجابايت). إذا كانت قابلية توسيع معالج الرسومات ضرورية، فالبديل هو حاسب محمول يعمل بنظام Linux مع Thunderbolt 4 أو حاسب محمول مع OCuLink بجانب معالج رسومات مكتبي في حاوية — هذه لا تزال تعمل، لكن ليس على Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'عرض MacBook Pro 32GB+‎ على Amazon (بديل عن eGPU)',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'عرض سعر Mac Studio على Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'لماذا لا تعمل eGPU على Apple Silicon',
        content: [
          '<strong>العائق معماري وليس تجارياً — لا توجد حاوية ولا تعريف ولا حزمة برمجيات تحلّ هذه المشكلة.</strong>',
        ],
        columns: ['القيد', 'MacBook Apple Silicon', 'حاسب Linux مع TB4/OCuLink'],
        rows: [
          {
            'القيد': 'تعريف معالج رسومات NVIDIA/AMD خارجي',
            'MacBook Apple Silicon': 'غير متاح في macOS',
            'حاسب Linux مع TB4/OCuLink': 'متاح (nvidia، amdgpu)',
          },
          {
            'القيد': 'نفق PCIe عبر Thunderbolt',
            'MacBook Apple Silicon': 'غير مكشوف بواسطة macOS',
            'حاسب Linux مع TB4/OCuLink': 'مدعوم',
          },
          {
            'القيد': 'بنية الذاكرة',
            'MacBook Apple Silicon': 'ذاكرة موحدة فقط',
            'حاسب Linux مع TB4/OCuLink': 'VRAM مستقلة في eGPU',
          },
          {
            'القيد': 'تسريع eGPU لـ Ollama',
            'MacBook Apple Silicon': 'لا مسار — لا تعمل',
            'حاسب Linux مع TB4/OCuLink': 'تعمل مع CUDA أو ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول eGPU وأجهزة MacBook',
        faqs: [
          {
            q: 'لماذا لا يدعم MacBook الخاص بي eGPU؟',
            a: 'تستخدم أجهزة MacBook بمعالج Apple Silicon الذاكرة الموحدة ولا تكشف نفق PCIe عبر Thunderbolt. كما أزالت Apple تعريفات eGPU الخارجية عند إيقاف إنتاج أجهزة Mac بمعالج Intel. اليوم لا توجد مسار برمجي لتشغيل معالج رسومات NVIDIA أو AMD خارجي في macOS.',
          },
          {
            q: 'هل دعمت أجهزة MacBook القديمة بمعالج Intel eGPU؟',
            a: 'نعم، دعمت أجهزة MacBook بمعالج Intel eGPU من AMD عبر Thunderbolt 3. انتهى هذا الدعم مع الانتقال إلى Apple Silicon. أجهزة Mac الجديدة وOllama على Apple Silicon ليس لها مسار لـ eGPU.',
          },
          {
            q: 'ما أسرع طريقة لتسريع Ollama على MacBook؟',
            a: 'اشترِ ذاكرة موحدة أكبر. يشغّل MacBook Pro بـ32 جيجابايت أو 64 جيجابايت من الذاكرة الموحدة نماذج أكبر محلياً مع تسريع GPU Metal كامل. لا يوجد خيار مُسرِّع خارجي.',
          },
          {
            q: 'هل تعمل eGPU مع Ollama على الحاسبات المحمولة التي تعمل بنظام Linux؟',
            a: 'نعم. يمكن لحاسب محمول يعمل بنظام Linux مع Thunderbolt 4 أو OCuLink توصيل معالج رسومات NVIDIA أو AMD مكتبي وتشغيل Ollama عبر CUDA أو ROCm. يُحدّ الأداء بنطاق ترددي Thunderbolt 4 (40 جيجابت/ثانية)، لكنه يعمل.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءة ذات صلة',
        items: [
          '[هل Mac Mini M4 جيد للنماذج اللغوية الكبيرة المحلية؟](/ar/prompt-bites/mac-mini-m4-local-llm) — المكافئ المكتبي بنفس البنية المعمارية',
          '[أفضل حاسب محمول للذكاء الاصطناعي بأقل من 1,000 دولار](/ar/prompt-bites/best-budget-ai-laptop-under-1000) — البدائل غير التابعة لـ Apple في الفئة الدنيا',
          '[أفضل حاسب مصغر للنماذج اللغوية الكبيرة المحلية](/ar/prompt-bites/best-mini-pc-for-local-llm) — الحاسبات المصغرة المكتبية مقابل الذاكرة الموحدة لـ MacBook',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    title: '¿Mejor eGPU para Ollama en un MacBook en 2026?',
    seoTitle: 'eGPU para Ollama en MacBook 2026 | Prompt Bites',
    metaDescription: 'No existe un eGPU funcional para Ollama en un MacBook Apple Silicon: la memoria unificada y la falta de PCIe lo descartan. Usa más memoria o un portátil Linux.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de MacBook que consideran un eGPU para acelerar Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 min de lectura',
    leadAnswerBlock:
      'No existe ningún eGPU funcional para Ollama en un MacBook Apple Silicon. Apple Silicon usa memoria unificada y no expone PCIe a GPUs externas — macOS eliminó los drivers de eGPU de terceros cuando se discontinuaron los Mac Intel. Los eGPU solo son útiles en portátiles Linux con Thunderbolt 4 o OCuLink.',
    toc: [
      { label: 'Mejor opción: olvida el eGPU, usa más memoria unificada', anchor: '#best-pick' },
      { label: 'Por qué los eGPU no funcionan en Apple Silicon', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    intro:
      'Los gabinetes eGPU conectan una GPU externa a un portátil vía Thunderbolt u OCuLink. Son útiles en Linux. En los MacBook Apple Silicon no funcionan — y no es cuestión de precio ni disponibilidad. La arquitectura los descarta.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Los MacBook Apple Silicon no admiten eGPUs — macOS eliminó los drivers de GPU de terceros cuando se retiraron los Mac Intel',
          'Apple Silicon usa memoria unificada como memoria GPU; no existe una ruta PCIe para conectar una GPU discreta',
          'Para tener más margen con LLMs en un Mac, compra un MacBook Pro o Mac Studio con más memoria unificada',
          'Los eGPU siguen funcionando en portátiles Linux con Thunderbolt 4 o OCuLink — solo relevante para hardware que no sea Apple',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: olvida el eGPU — compra más memoria unificada',
        content: [
          '<strong>El mejor eGPU para Ollama en un MacBook es ningún eGPU. Apple Silicon no los admite y no existe ninguna solución alternativa.</strong> El camino hacia una inferencia LLM local más rápida en un Mac es más memoria unificada, no una GPU externa.',
          'En Apple Silicon, la GPU comparte la misma RAM física que la CPU. No hay un pool de VRAM separado que ampliar, y macOS no expone el tunneling PCIe sobre Thunderbolt como sí hace Linux. Apple eliminó los drivers de eGPU de terceros cuando se discontinuaron los Mac Intel — no existe ningún driver Metal para NVIDIA, AMD ni ninguna GPU externa.',
          'Si quieres más margen para LLMs locales en un Mac, la ruta de actualización es un MacBook Pro o Mac Studio con más memoria unificada (32 GB, 64 GB, 96 GB). Si la expansibilidad de GPU es imprescindible, la alternativa es un portátil Linux con Thunderbolt 4 o un portátil con OCuLink junto a una GPU de escritorio en un gabinete — esos siguen funcionando, pero no en Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Ver MacBook Pro 32GB+ en Amazon (alternativa al eGPU)',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Ver precio del Mac Studio en Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Por qué los eGPU no funcionan en Apple Silicon',
        content: [
          '<strong>El bloqueo es arquitectónico, no comercial — ningún gabinete, ningún driver ni ninguna pila de software lo resuelve.</strong>',
        ],
        columns: ['Restricción', 'MacBook Apple Silicon', 'Portátil Linux con TB4/OCuLink'],
        rows: [
          {
            'Restricción': 'Driver GPU para NVIDIA/AMD externo',
            'MacBook Apple Silicon': 'No disponible en macOS',
            'Portátil Linux con TB4/OCuLink': 'Disponible (nvidia, amdgpu)',
          },
          {
            'Restricción': 'Tunneling PCIe sobre Thunderbolt',
            'MacBook Apple Silicon': 'No expuesto por macOS',
            'Portátil Linux con TB4/OCuLink': 'Compatible',
          },
          {
            'Restricción': 'Arquitectura de memoria',
            'MacBook Apple Silicon': 'Solo memoria unificada',
            'Portátil Linux con TB4/OCuLink': 'VRAM discreta en eGPU',
          },
          {
            'Restricción': 'Aceleración eGPU para Ollama',
            'MacBook Apple Silicon': 'Sin ruta — no funciona',
            'Portátil Linux con TB4/OCuLink': 'Funciona con CUDA o ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre eGPUs y MacBooks',
        faqs: [
          {
            q: '¿Por qué mi MacBook no admite un eGPU?',
            a: 'Los MacBook Apple Silicon usan memoria unificada y no exponen el tunneling PCIe sobre Thunderbolt. Apple también eliminó los drivers de eGPU de terceros cuando se retiraron los Mac Intel. Hoy no existe ninguna ruta de software para hacer funcionar una GPU externa NVIDIA o AMD en macOS.',
          },
          {
            q: '¿Los MacBook Intel más antiguos admitían eGPUs?',
            a: 'Sí, los MacBook Intel admitían eGPUs AMD vía Thunderbolt 3. Ese soporte terminó con la transición a Apple Silicon. Los nuevos Mac y Ollama en Apple Silicon no tienen ruta para eGPU.',
          },
          {
            q: '¿Cuál es la forma más rápida de acelerar Ollama en un MacBook?',
            a: 'Comprar más memoria unificada. Un MacBook Pro con 32 GB o 64 GB de memoria unificada ejecuta modelos más grandes localmente con aceleración Metal GPU completa. No existe ninguna opción de acelerador externo.',
          },
          {
            q: '¿Funcionan los eGPUs para Ollama en portátiles Linux?',
            a: 'Sí. Un portátil Linux con Thunderbolt 4 o OCuLink puede conectar una GPU de escritorio NVIDIA o AMD y ejecutar Ollama vía CUDA o ROCm. El rendimiento está limitado por el ancho de banda de Thunderbolt 4 (40 Gbps), pero funciona.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas relacionadas',
        items: [
          '[¿Es el Mac Mini M4 bueno para LLMs locales?](/es/prompt-bites/mac-mini-m4-local-llm) — el equivalente de escritorio con la misma arquitectura',
          '[Mejor portátil AI económico por menos de $1,000](/es/prompt-bites/best-budget-ai-laptop-under-1000) — alternativas no Apple en el nivel de entrada',
          '[Mejor mini PC para LLM local](/es/prompt-bites/best-mini-pc-for-local-llm) — mini PCs de escritorio vs memoria unificada del MacBook',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    title: 'Melhor eGPU para Ollama em um MacBook em 2026?',
    seoTitle: 'eGPU para Ollama no MacBook 2026 | Prompt Bites',
    metaDescription: 'Não existe eGPU funcional para Ollama em um MacBook Apple Silicon. Unified Memory e ausência de suporte a PCIe eGPU descartam essa opção. Use mais memória unificada ou um notebook Linux.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'Proprietários de MacBook que consideram uma eGPU para acelerar o Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 min de leitura',
    leadAnswerBlock:
      'Não existe eGPU funcional para Ollama em um MacBook Apple Silicon. O Apple Silicon usa Unified Memory e não expõe PCIe para GPUs externas — o macOS removeu os drivers de eGPU de terceiros quando os Macs Intel foram descontinuados. As eGPUs só são úteis em notebooks Linux com Thunderbolt 4 ou OCuLink.',
    toc: [
      { label: 'Melhor opção: esqueça a eGPU, use mais memória unificada', anchor: '#best-pick' },
      { label: 'Por que eGPUs não funcionam no Apple Silicon', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related' },
    ],
    intro:
      'Gabinetes eGPU conectam uma GPU externa a um notebook via Thunderbolt ou OCuLink. São úteis no Linux. Nos MacBooks Apple Silicon, não funcionam — e não é uma questão de preço ou disponibilidade. A arquitetura os descarta.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'MacBooks Apple Silicon não suportam eGPUs — o macOS removeu os drivers de GPU de terceiros quando os Macs Intel foram descontinuados',
          'O Apple Silicon usa Unified Memory como memória GPU; não existe caminho PCIe para conectar uma GPU discreta',
          'Para ter mais espaço para LLMs em um Mac, compre um MacBook Pro ou Mac Studio com mais memória unificada',
          'eGPUs ainda funcionam em notebooks Linux com Thunderbolt 4 ou OCuLink — relevante apenas para hardware não Apple',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor opção: esqueça a eGPU — compre mais memória unificada',
        content: [
          '<strong>A melhor eGPU para Ollama em um MacBook é nenhuma eGPU. O Apple Silicon não as suporta e não existe solução alternativa.</strong> O caminho para inferência LLM local mais rápida em um Mac é mais memória unificada, não uma GPU externa.',
          'No Apple Silicon, a GPU compartilha a mesma RAM física que a CPU. Não há um pool de VRAM separado para expandir, e o macOS não expõe o tunelamento PCIe via Thunderbolt como o Linux faz. A Apple removeu os drivers de eGPU de terceiros quando os Macs Intel foram descontinuados — não existe driver Metal para NVIDIA, AMD ou qualquer GPU externa.',
          'Se você quiser mais espaço para LLMs locais em um Mac, o caminho de upgrade é um MacBook Pro ou Mac Studio com mais memória unificada (32 GB, 64 GB, 96 GB). Se a expansibilidade de GPU for essencial, a alternativa é um notebook Linux com Thunderbolt 4 ou um notebook com OCuLink junto a uma GPU desktop em um gabinete — esses ainda funcionam, mas não no Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Ver MacBook Pro 32GB+ na Amazon (alternativa à eGPU)',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Ver preço do Mac Studio na Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Por que eGPUs não funcionam no Apple Silicon',
        content: [
          '<strong>O bloqueio é arquitetônico, não comercial — nenhum gabinete, nenhum driver e nenhuma pilha de software resolve isso.</strong>',
        ],
        columns: ['Restrição', 'MacBook Apple Silicon', 'Notebook Linux com TB4/OCuLink'],
        rows: [
          {
            'Restrição': 'Driver GPU para NVIDIA/AMD externo',
            'MacBook Apple Silicon': 'Não disponível no macOS',
            'Notebook Linux com TB4/OCuLink': 'Disponível (nvidia, amdgpu)',
          },
          {
            'Restrição': 'Tunelamento PCIe via Thunderbolt',
            'MacBook Apple Silicon': 'Não exposto pelo macOS',
            'Notebook Linux com TB4/OCuLink': 'Suportado',
          },
          {
            'Restrição': 'Arquitetura de memória',
            'MacBook Apple Silicon': 'Somente Unified Memory',
            'Notebook Linux com TB4/OCuLink': 'VRAM discreta na eGPU',
          },
          {
            'Restrição': 'Aceleração eGPU para Ollama',
            'MacBook Apple Silicon': 'Sem caminho — não funciona',
            'Notebook Linux com TB4/OCuLink': 'Funciona com CUDA ou ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre eGPUs e MacBooks',
        faqs: [
          {
            q: 'Por que meu MacBook não suporta uma eGPU?',
            a: 'MacBooks Apple Silicon usam Unified Memory e não expõem tunelamento PCIe via Thunderbolt. A Apple também removeu os drivers de eGPU de terceiros quando os Macs Intel foram descontinuados. Hoje não existe caminho de software para fazer uma GPU externa NVIDIA ou AMD funcionar no macOS.',
          },
          {
            q: 'Macs Intel mais antigos suportavam eGPUs?',
            a: 'Sim, MacBooks Intel suportavam eGPUs AMD via Thunderbolt 3. Esse suporte terminou com a transição para o Apple Silicon. Novos Macs e Ollama no Apple Silicon não têm caminho para eGPU.',
          },
          {
            q: 'Qual é a forma mais rápida de acelerar o Ollama em um MacBook?',
            a: 'Compre mais memória unificada. Um MacBook Pro com 32 GB ou 64 GB de memória unificada executa modelos maiores localmente com aceleração GPU Metal completa. Não existe opção de acelerador externo.',
          },
          {
            q: 'eGPUs funcionam para Ollama em notebooks Linux?',
            a: 'Sim. Um notebook Linux com Thunderbolt 4 ou OCuLink pode conectar uma GPU desktop NVIDIA ou AMD e executar o Ollama via CUDA ou ROCm. O desempenho é limitado pela largura de banda do Thunderbolt 4 (40 Gbps), mas funciona.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras relacionadas',
        items: [
          '[O Mac Mini M4 é bom para LLMs locais?](/pt/prompt-bites/mac-mini-m4-local-llm) — o equivalente desktop com a mesma arquitetura',
          '[Melhor notebook IA econômico por menos de $1.000](/pt/prompt-bites/best-budget-ai-laptop-under-1000) — alternativas não Apple na faixa de entrada',
          '[Melhor mini PC para LLM local](/pt/prompt-bites/best-mini-pc-for-local-llm) — mini PCs desktop vs Unified Memory do MacBook',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    title: 'MacBook에서 Ollama를 위한 최고의 eGPU는 무엇입니까? (2026)',
    seoTitle: 'MacBook Ollama eGPU 2026 | Prompt Bites',
    metaDescription: 'Apple Silicon MacBook에서 Ollama를 위한 작동하는 eGPU는 존재하지 않습니다. 통합 메모리와 PCIe eGPU 미지원으로 인해 불가능합니다. 더 많은 통합 메모리나 Linux 노트북을 사용하십시오.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'Ollama 가속을 위해 eGPU를 고려하는 MacBook 사용자',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3분 분량',
    leadAnswerBlock:
      'Apple Silicon MacBook에서 Ollama를 위한 작동하는 eGPU는 존재하지 않습니다. Apple Silicon은 통합 메모리를 사용하며 외부 GPU에 PCIe를 노출하지 않습니다. Intel Mac이 단종될 때 macOS는 서드파티 eGPU 드라이버를 제거하였습니다. eGPU는 Thunderbolt 4 또는 OCuLink를 갖춘 Linux 노트북에서만 유용합니다.',
    toc: [
      { label: '최선의 선택: eGPU를 포기하고 더 많은 통합 메모리를 사용하십시오', anchor: '#best-pick' },
      { label: 'Apple Silicon에서 eGPU가 작동하지 않는 이유', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    intro:
      'eGPU 인클로저는 Thunderbolt 또는 OCuLink를 통해 외부 GPU를 노트북에 연결합니다. Linux에서는 유용합니다. Apple Silicon MacBook에서는 작동하지 않습니다. 가격이나 가용성의 문제가 아니라 아키텍처 자체가 이를 불가능하게 합니다.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon MacBook은 eGPU를 지원하지 않습니다. Intel Mac이 단종될 때 macOS는 서드파티 GPU 드라이버를 제거하였습니다.',
          'Apple Silicon은 GPU 메모리로 통합 메모리를 사용합니다. 별도의 GPU를 연결할 PCIe 경로가 존재하지 않습니다.',
          'Mac에서 더 많은 LLM 실행 공간을 확보하려면 더 많은 통합 메모리를 갖춘 MacBook Pro 또는 Mac Studio를 구입하십시오.',
          'eGPU는 Thunderbolt 4 또는 OCuLink를 갖춘 Linux 노트북에서는 여전히 작동합니다. Apple 제품 이외의 하드웨어에만 해당됩니다.',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최선의 선택: eGPU를 포기하고 더 많은 통합 메모리를 구입하십시오',
        content: [
          '<strong>MacBook에서 Ollama를 위한 최고의 eGPU는 eGPU를 사용하지 않는 것입니다. Apple Silicon은 eGPU를 지원하지 않으며 어떠한 우회 방법도 존재하지 않습니다.</strong> Mac에서 더 빠른 로컬 LLM 추론을 위한 방법은 외부 GPU가 아닌 더 많은 통합 메모리입니다.',
          'Apple Silicon에서 GPU는 CPU와 동일한 물리적 RAM을 공유합니다. 확장할 수 있는 별도의 VRAM 풀이 없으며, macOS는 Linux와 달리 Thunderbolt를 통한 PCIe 장치 터널링을 노출하지 않습니다. Apple은 Intel Mac이 단종될 때 서드파티 eGPU 드라이버를 제거하였습니다. NVIDIA, AMD 또는 외부 GPU에 대한 Metal 드라이버가 존재하지 않습니다.',
          'Mac에서 더 많은 로컬 LLM 실행 공간을 원한다면, 업그레이드 경로는 더 많은 통합 메모리(32 GB, 64 GB, 96 GB)를 갖춘 MacBook Pro 또는 Mac Studio입니다. GPU 확장성이 필수적이라면, Thunderbolt 4를 갖춘 Linux 노트북이나 인클로저 내의 데스크탑 GPU와 쌍을 이루는 OCuLink 장착 노트북이 대안입니다. 이는 Apple Silicon이 아닌 장치에서만 작동합니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Amazon Japan에서 MacBook Pro 32GB+ 보기 (eGPU 대안)',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Amazon Japan에서 Mac Studio 가격 보기',
          },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Apple Silicon MacBook에서 Ollama용 작동하는 eGPU는 존재하지 않습니다. 아키텍처 자체가 외부 GPU 연결을 불가능하게 합니다.' },
          { type: 'plain-terms', text: 'Apple Silicon MacBook은 외부 GPU를 위한 PCIe 연결을 지원하지 않으며, macOS는 서드파티 eGPU 드라이버를 제공하지 않습니다. 로컬 LLM 성능을 향상시키려면 더 많은 통합 메모리가 있는 Mac을 구입하는 것이 유일한 방법입니다.' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Apple Silicon에서 eGPU가 작동하지 않는 이유',
        content: [
          '<strong>이 제한은 아키텍처적인 것이지 상업적인 것이 아닙니다. 어떠한 인클로저, 드라이버 또는 소프트웨어 스택도 이 문제를 해결할 수 없습니다.</strong>',
        ],
        columns: ['제한 사항', 'Apple Silicon MacBook', 'Thunderbolt 4/OCuLink Linux 노트북'],
        rows: [
          {
            '제한 사항': '외부 NVIDIA/AMD GPU 드라이버',
            'Apple Silicon MacBook': 'macOS에서 사용 불가',
            'Thunderbolt 4/OCuLink Linux 노트북': '사용 가능 (nvidia, amdgpu)',
          },
          {
            '제한 사항': 'Thunderbolt를 통한 PCIe 터널링',
            'Apple Silicon MacBook': 'macOS에서 노출되지 않음',
            'Thunderbolt 4/OCuLink Linux 노트북': '지원됨',
          },
          {
            '제한 사항': '메모리 아키텍처',
            'Apple Silicon MacBook': '통합 메모리만 사용',
            'Thunderbolt 4/OCuLink Linux 노트북': 'eGPU의 별도 VRAM',
          },
          {
            '제한 사항': 'Ollama를 위한 eGPU 가속',
            'Apple Silicon MacBook': '경로 없음 — 작동하지 않음',
            'Thunderbolt 4/OCuLink Linux 노트북': 'CUDA 또는 ROCm으로 작동',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'eGPU와 MacBook에 대한 자주 묻는 질문',
        faqs: [
          {
            q: '왜 MacBook은 eGPU를 지원하지 않습니까?',
            a: 'Apple Silicon MacBook은 통합 메모리를 사용하며 Thunderbolt를 통한 PCIe 터널링을 노출하지 않습니다. 또한 Apple은 Intel Mac이 단종될 때 서드파티 eGPU 드라이버를 제거하였습니다. 현재 macOS에서 외부 NVIDIA 또는 AMD GPU를 작동시키는 소프트웨어 경로는 존재하지 않습니다.',
          },
          {
            q: '구형 Intel MacBook은 eGPU를 지원했습니까?',
            a: '네, Intel MacBook은 Thunderbolt 3를 통해 AMD eGPU를 지원하였습니다. 그 지원은 Apple Silicon으로의 전환과 함께 종료되었습니다. 새로운 Mac과 Apple Silicon의 Ollama에는 eGPU 경로가 없습니다.',
          },
          {
            q: 'MacBook에서 Ollama를 가장 빠르게 가속하는 방법은 무엇입니까?',
            a: '더 많은 통합 메모리를 구입하는 것입니다. 32 GB 또는 64 GB 통합 메모리를 갖춘 MacBook Pro는 Metal GPU 가속으로 더 큰 모델을 로컬에서 실행할 수 있습니다. 외부 가속기 옵션은 존재하지 않습니다.',
          },
          {
            q: 'Linux 노트북에서 eGPU가 Ollama를 위해 작동합니까?',
            a: '네. Thunderbolt 4 또는 OCuLink를 갖춘 Linux 노트북은 NVIDIA 또는 AMD 데스크탑 GPU를 연결하고 CUDA 또는 ROCm을 통해 Ollama를 실행할 수 있습니다. 성능은 Thunderbolt 4 대역폭(40 Gbps)에 의해 제한되지만 작동합니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Mac Mini M4가 로컬 LLM에 적합합니까?](/ko/prompt-bites/mac-mini-m4-local-llm) — 동일한 아키텍처를 갖춘 데스크탑 동등 제품',
          '[1,000달러 미만의 최고의 저렴한 AI 노트북](/ko/prompt-bites/best-budget-ai-laptop-under-1000) — 엔트리 레벨의 Apple 이외 대안',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/prompt-bites/best-mini-pc-for-local-llm) — 데스크탑 미니 PC 대 MacBook 통합 메모리',
        ],
      },
    },
  },
}
