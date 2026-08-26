import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-en.webp',
    title: 'RTX 3060 12GB: Best GPU Under $300 for Local LLMs (2026)?',
    seoTitle: 'RTX 3060 12GB for Local LLM 2026: Best GPU Under $300',
    metaDescription: 'The used RTX 3060 12GB is the best GPU under $300 for local LLMs — 12GB VRAM runs every 7B and most 14B models at Q4, and CUDA works with Ollama out of the box. Check today\'s price.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Budget buyers choosing a first GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>The used NVIDIA RTX 3060 12GB is the best GPU under $300 for local LLMs.</strong> Its 12GB of VRAM runs every 7B model and most 14B models at Q4, and NVIDIA CUDA works out of the box with Ollama — no driver hunting. Check today\'s used price rather than trusting an old number: a 2026 memory shortage has pushed GPU prices up, and the AMD RX 6700 XT (the usual budget alternative) is no longer meaningfully cheaper.',
    toc: [
      { label: 'Best Pick: Used RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'What Can You Run?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'Under $300, two used cards dominate local LLM inference: the NVIDIA RTX 3060 12GB and the AMD RX 6700 XT. Both carry 12GB of VRAM — enough for 7B and most 13B–14B models at Q4. The difference used to be price; in 2026 it\'s mostly software friction.',
    quickAnswerTop: {
      en: {
        question: 'What is the best GPU under $300 for running local LLMs?',
        answer: 'A used RTX 3060 12GB is the best GPU under $300 for local LLMs — 12GB VRAM runs all 7B and most 14B models, and CUDA works with Ollama with no setup. Check the current used price rather than an old figure — GPU pricing has moved a lot in 2026.',
        bullets: [
          'RTX 3060 12GB runs Llama 3 8B Q4_K_M at roughly 25 tok/s and Qwen 14B Q4_K_M at roughly 15 tok/s.',
          'RX 6700 XT 12GB matches the VRAM but needs ROCm on Linux — and as of this check, it\'s no longer meaningfully cheaper than the RTX 3060.',
          'Avoid 8GB GPUs at this price point — the VRAM ceiling blocks 14B models entirely.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: used NVIDIA RTX 3060 12GB — CUDA works instantly with Ollama and llama.cpp',
          'Alternative: used AMD RX 6700 XT — same 12GB VRAM, but ROCm setup adds hours of work, and it\'s no longer meaningfully cheaper in 2026',
          'Both cards run every 7B model and most 13B–14B models at Q4; neither fits a 70B model',
          'Buy the RTX 3060 in its 12GB version — the 6GB variant only runs 3B models and looks identical in listings',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Used NVIDIA RTX 3060 12GB',
        content: [
          '<strong>The used NVIDIA RTX 3060 12GB is the best GPU under $300 for local LLMs because 12GB of VRAM plus zero-setup CUDA support gives you a working LLM box in minutes.</strong> It runs Mistral Small, Llama 3 8B, and Qwen3 8B at 15–20 tokens per second, and most 13B–14B models at Q4.',
          'The RTX 3060 wins on software, not just VRAM. Ollama and llama.cpp detect NVIDIA GPUs via CUDA automatically on Windows and Linux — no driver hunting, no ROCm. The AMD RX 6700 XT matches the 12GB capacity, but as of this check its used price has converged with the RTX 3060\'s — the 2026 memory shortage narrowed the price gap that used to make it the budget pick. Choose it only if you already prefer Linux/ROCm; the cost savings that used to justify it mostly aren\'t there anymore.',
          'Whichever you buy, avoid the 6GB RTX 3060 variant — it looks identical in listings but only fits 3B models.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Check RTX 3060 12GB price on Amazon',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (used)',
            productCategory: 'gpu',
            label: 'Check used RTX 3060 12GB prices on eBay',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB (used)',
            productCategory: 'gpu',
            label: 'Check used RX 6700 XT prices on eBay',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT for Local LLMs',
        content: [
          '<strong>Both cards carry 12GB of VRAM, so model capacity is identical — the real decision is CUDA versus ROCm.</strong> Check current prices for each before buying; the 2026 memory shortage keeps used GPU pricing volatile and has already erased most of the price gap between these two.',
        ],
        columns: ['GPU', 'VRAM', 'Setup', 'Best for'],
        rows: [
          { GPU: 'RTX 3060 12GB', VRAM: '12GB', Setup: 'CUDA, instant', 'Best for': 'Best pick — no setup friction' },
          { GPU: 'RX 6700 XT', VRAM: '12GB', Setup: 'ROCm, hours', 'Best for': 'Only if you already prefer Linux/AMD' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'What Can You Run?',
        columns: ['Model size', 'Verdict'],
        rows: [
          { 'Model size': '7B–8B', Verdict: '🟢 Excellent' },
          { 'Model size': '13B–14B (Q4)', Verdict: '🟢 Very practical' },
          { 'Model size': '20B+', Verdict: '🟡 Memory becomes restrictive' },
          { 'Model size': '70B', Verdict: '🔴 No' },
        ],
        content: [
          'A 70B model at Q4 needs roughly 40GB of VRAM, so a 12GB card at this price tier isn\'t the right hardware for it — see the full GPU buying guide linked below for the tiers that fit larger models.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Sub-$300 GPUs for Local LLMs',
        faqs: [
          {
            q: 'Can a $300 GPU run local LLMs well?',
            a: 'Yes. A used RTX 3060 12GB or RX 6700 XT runs every 7B model at 15–20 tokens per second and most 13B–14B models at Q4 quantization. Both have 12GB of VRAM, which is enough for general chat, coding assistance, and summarization.',
          },
          {
            q: 'Why pick the RTX 3060 over the RX 6700 XT if they cost about the same now?',
            a: 'The RTX 3060 uses NVIDIA CUDA, which Ollama and llama.cpp detect automatically with no setup. The RX 6700 XT needs ROCm — typically hours to configure on Linux, and unsupported on Windows for fast inference. When the two cards cost roughly the same, there\'s no longer a savings that offsets that setup time.',
          },
          {
            q: 'Should I buy the 6GB or 12GB RTX 3060?',
            a: 'Buy the 12GB version. The 6GB RTX 3060 only fits 3B models, well below the 7B class this budget targets. The two variants look identical in listings — confirm the VRAM before buying.',
          },
          {
            q: 'Can a sub-$300 GPU run a 70B model?',
            a: 'No. A 70B model at Q4 needs roughly 40GB of VRAM. A 12GB card maxes out around 14B models at Q4. For larger models you need a higher tier or a multi-GPU build — see the full GPU buying guide below.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best GPU Under $600 for Local LLMs](/prompt-bites/best-gpu-under-600-local-llm) — the next tier up: RTX 4060 Ti 16GB',
          '[Best Ollama Models for RTX 3060 12GB](/prompt-bites/best-ollama-models-rtx-3060-12gb) — which models to pull once you have the card',
          '[Need more than 12GB VRAM? See the full GPU Buying Guide for Local LLMs](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — the complete comparison across every budget tier',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-de.webp',
    title: 'RTX 3060 12GB: Beste GPU unter 300 € für lokale LLMs (2026)?',
    seoTitle: 'RTX 3060 12GB für lokale LLMs 2026: Beste GPU unter 300 €',
    metaDescription: 'Die gebrauchte RTX 3060 12GB ist die beste GPU unter 300 € für lokale LLMs — 12 GB VRAM führt jedes 7B- und die meisten 14B-Modelle bei Q4 aus, CUDA läuft mit Ollama sofort. Aktuellen Preis prüfen.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Budget-Käufer, die eine erste GPU für lokale LLM-Inferenz suchen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Die gebrauchte NVIDIA RTX 3060 12 GB ist die beste GPU unter 300 € für lokale LLMs.</strong> Ihre 12 GB VRAM führen jedes 7B-Modell und die meisten 14B-Modelle bei Q4 aus, und NVIDIA CUDA läuft mit Ollama sofort — keine Treibersuche. Prüfen Sie den aktuellen Gebrauchtpreis statt einer alten Zahl zu vertrauen: eine Speicherknappheit 2026 hat die GPU-Preise steigen lassen, und die AMD RX 6700 XT (die übliche Budget-Alternative) ist nicht mehr spürbar günstiger.',
    toc: [
      { label: 'Beste Wahl: gebrauchte RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'Was können Sie ausführen?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro:
      'Unter 300 € dominieren zwei gebrauchte Karten die lokale LLM-Inferenz: die NVIDIA RTX 3060 12 GB und die AMD RX 6700 XT. Beide bieten 12 GB VRAM — genug für 7B- und die meisten 13B–14B-Modelle bei Q4. Früher war der Unterschied der Preis; 2026 ist es vor allem Software-Reibung.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste GPU unter 300 € für lokale LLMs?',
        answer: 'Eine gebrauchte RTX 3060 12 GB ist die beste GPU unter 300 € für lokale LLMs — 12 GB VRAM führt alle 7B- und die meisten 14B-Modelle aus, und CUDA läuft mit Ollama ohne Einrichtung. Prüfen Sie den aktuellen Gebrauchtpreis statt einer alten Zahl — die GPU-Preise haben sich 2026 stark bewegt.',
        bullets: [
          'RTX 3060 12 GB läuft Llama 3 8B Q4_K_M mit ~25 tok/s und Qwen 14B Q4_K_M mit ~15 tok/s.',
          'RX 6700 XT 12 GB bietet dieselbe VRAM-Kapazität, benötigt aber ROCm unter Linux — und ist zum Zeitpunkt dieser Prüfung nicht mehr spürbar günstiger als die RTX 3060.',
          'GPUs mit 8 GB bei diesem Budget vermeiden — die VRAM-Grenze blockiert 14B-Modelle vollständig.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: gebrauchte NVIDIA RTX 3060 12 GB — CUDA arbeitet sofort mit Ollama und llama.cpp',
          'Alternative: gebrauchte AMD RX 6700 XT — dieselben 12 GB VRAM, aber ROCm-Einrichtung kostet Stunden, und ist 2026 nicht mehr spürbar günstiger',
          'Beide Karten führen jedes 7B-Modell und die meisten 13B–14B-Modelle bei Q4 aus; keine reicht für ein 70B-Modell',
          'Kaufen Sie die RTX 3060 in der 12-GB-Version — die 6-GB-Variante führt nur 3B-Modelle aus und sieht in Anzeigen identisch aus',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: gebrauchte NVIDIA RTX 3060 12GB',
        content: [
          '<strong>Die gebrauchte NVIDIA RTX 3060 12 GB ist die beste GPU unter 300 € für lokale LLMs, weil 12 GB VRAM plus CUDA-Unterstützung ohne Einrichtungsaufwand in Minuten ein funktionierendes LLM-System ergeben.</strong> Sie führt Mistral Small, Llama 3 8B und Qwen3 8B mit 15-20 Token pro Sekunde aus und die meisten 13B–14B-Modelle bei Q4.',
          'Die RTX 3060 gewinnt bei der Software, nicht nur beim VRAM. Ollama und llama.cpp erkennen NVIDIA-GPUs unter Windows und Linux automatisch über CUDA — keine Treibersuche, kein ROCm. Die AMD RX 6700 XT erreicht dieselbe 12-GB-Kapazität, doch ihr Gebrauchtpreis hat sich zum Zeitpunkt dieser Prüfung dem der RTX 3060 angenähert — die Speicherknappheit 2026 hat den Preisunterschied verkleinert, der sie früher zur Budget-Wahl machte. Wählen Sie sie nur, wenn Sie Linux/ROCm bereits bevorzugen; die Ersparnis, die sie früher rechtfertigte, ist größtenteils weg.',
          'Egal welche Karte Sie kaufen: Vermeiden Sie die 6-GB-Variante der RTX 3060 — sie sieht in Anzeigen identisch aus, passt aber nur für 3B-Modelle.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'RTX 3060 12GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.kleinanzeigen.de/s-pc-zubehoer-software/grafikkarten/rtx-3060-12gb/k0c225+pc_zubehoer_software.art_s:grafikkarten',
            productName: 'NVIDIA RTX 3060 12GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: 'ca. 220–290 €',
            label: 'Gebrauchte RTX 3060 12GB auf Kleinanzeigen prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'RX 6700 XT Preis bei Amazon.de prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT für lokale LLMs',
        content: [
          '<strong>Beide Karten haben 12 GB VRAM, die Modellkapazität ist also identisch — die eigentliche Entscheidung lautet CUDA gegen ROCm.</strong> Prüfen Sie vor dem Kauf die aktuellen Preise beider Karten; die Speicherknappheit 2026 hält die Gebrauchtpreise volatil und hat den früheren Preisunterschied zwischen den beiden bereits größtenteils eingeebnet.',
        ],
        columns: ['GPU', 'VRAM', 'Einrichtung', 'Geeignet für'],
        rows: [
          { GPU: 'RTX 3060 12 GB', VRAM: '12 GB', Einrichtung: 'CUDA, sofort', 'Geeignet für': 'Beste Wahl — keine Reibung' },
          { GPU: 'RX 6700 XT', VRAM: '12 GB', Einrichtung: 'ROCm, Stunden', 'Geeignet für': 'Nur bei Linux/AMD-Präferenz' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Was können Sie ausführen?',
        columns: ['Modellgröße', 'Urteil'],
        rows: [
          { Modellgröße: '7B–8B', Urteil: '🟢 Ausgezeichnet' },
          { Modellgröße: '13B–14B (Q4)', Urteil: '🟢 Sehr praktikabel' },
          { Modellgröße: '20B+', Urteil: '🟡 Speicher wird knapp' },
          { Modellgröße: '70B', Urteil: '🔴 Nein' },
        ],
        content: [
          'Ein 70B-Modell bei Q4 benötigt rund 40 GB VRAM, daher ist eine 12-GB-Karte in dieser Preisklasse nicht die richtige Hardware dafür — siehe die vollständige GPU-Kaufberatung unten für die Klassen, die größere Modelle unterstützen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu GPUs unter 300 € für lokale LLMs',
        faqs: [
          {
            q: 'Kann eine 300-€-GPU lokale LLMs gut ausführen?',
            a: 'Ja. Eine gebrauchte RTX 3060 12 GB oder RX 6700 XT führt jedes 7B-Modell mit 15-20 Token pro Sekunde aus und die meisten 13B–14B-Modelle bei Q4-Quantisierung. Beide haben 12 GB VRAM — genug für allgemeinen Chat, Coding-Unterstützung und Zusammenfassung.',
          },
          {
            q: 'Warum die RTX 3060 statt der RX 6700 XT, wenn beide etwa gleich viel kosten?',
            a: 'Die RTX 3060 nutzt NVIDIA CUDA, das Ollama und llama.cpp automatisch ohne Einrichtung erkennen. Die RX 6700 XT benötigt ROCm — typischerweise Stunden unter Linux und unter Windows für schnelle Inferenz nicht unterstützt. Wenn beide Karten etwa gleich viel kosten, gibt es keine Ersparnis mehr, die diesen Zeitaufwand ausgleicht.',
          },
          {
            q: 'Soll ich die 6-GB- oder 12-GB-RTX 3060 kaufen?',
            a: 'Kaufen Sie die 12-GB-Version. Die 6-GB-RTX 3060 passt nur für 3B-Modelle, weit unter der 7B-Klasse, auf die dieses Budget zielt. Die Varianten sehen in Anzeigen identisch aus — den VRAM vor dem Kauf prüfen.',
          },
          {
            q: 'Kann eine GPU unter 300 € ein 70B-Modell ausführen?',
            a: 'Nein. Ein 70B-Modell bei Q4 benötigt rund 40 GB VRAM. Eine 12-GB-Karte schafft maximal 14B-Modelle bei Q4. Für größere Modelle brauchen Sie eine höhere Klasse oder einen Multi-GPU-Aufbau — siehe die vollständige GPU-Kaufberatung unten.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste GPU unter 600 € für lokale LLMs](/de/prompt-bites/best-gpu-under-600-local-llm) — die nächste Stufe: RTX 4060 Ti 16 GB',
          '[Beste Ollama-Modelle für RTX 3060 12 GB](/de/prompt-bites/best-ollama-models-rtx-3060-12gb) — welche Modelle nach dem Kauf laden',
          '[Brauchen Sie mehr als 12 GB VRAM? Zur vollständigen GPU-Kaufberatung für lokale LLMs](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — der vollständige Vergleich über alle Budgetklassen',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-fr.webp',
    title: 'RTX 3060 12 Go : meilleure GPU à moins de 300 € pour les LLM locaux (2026) ?',
    seoTitle: 'RTX 3060 12 Go pour LLM local 2026 : meilleure GPU sous 300 €',
    metaDescription: 'La RTX 3060 12 Go d\'occasion est la meilleure GPU sous 300 € pour les LLM locaux — 12 Go de VRAM fait tourner tous les 7B et la plupart des 14B en Q4, CUDA fonctionne avec Ollama sans configuration. Vérifiez le prix actuel.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs à budget limité choisissant une première GPU pour l\'inférence LLM locale',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>La RTX 3060 12 Go d\'occasion est la meilleure GPU à moins de 300 € pour les LLM locaux.</strong> Ses 12 Go de VRAM font tourner tous les modèles 7B et la plupart des 14B en Q4, et NVIDIA CUDA fonctionne avec Ollama dès l\'installation — sans chasse aux pilotes. Vérifiez le prix d\'occasion actuel plutôt que de vous fier à un ancien chiffre : une pénurie de mémoire en 2026 a fait grimper les prix des GPU, et la RX 6700 XT d\'AMD (l\'alternative économique habituelle) n\'est plus vraiment moins chère.',
    toc: [
      { label: 'Meilleur choix : RTX 3060 12 Go d\'occasion', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'Que pouvez-vous faire tourner ?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro:
      'Sous 300 €, deux cartes d\'occasion dominent l\'inférence LLM locale : la NVIDIA RTX 3060 12 Go et l\'AMD RX 6700 XT. Toutes deux offrent 12 Go de VRAM — suffisant pour les modèles 7B et la plupart des 13B–14B en Q4. La différence était autrefois le prix ; en 2026, c\'est surtout la friction logicielle.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure GPU à moins de 300 € pour les LLM locaux ?',
        answer: 'Une RTX 3060 12 Go d\'occasion est la meilleure GPU sous 300 € pour les LLM locaux — 12 Go de VRAM fait tourner tous les 7B et la plupart des 14B, et CUDA fonctionne avec Ollama sans configuration. Vérifiez le prix d\'occasion actuel plutôt qu\'un ancien chiffre — les prix des GPU ont beaucoup bougé en 2026.',
        bullets: [
          'La RTX 3060 12 Go fait tourner Llama 3 8B Q4_K_M à environ 25 tok/s et Qwen 14B Q4_K_M à environ 15 tok/s.',
          'La RX 6700 XT 12 Go offre la même capacité VRAM mais nécessite ROCm sous Linux — et au moment de cette vérification, elle n\'est plus vraiment moins chère que la RTX 3060.',
          'Évitez les GPU 8 Go à ce budget — le plafond VRAM bloque entièrement les modèles 14B.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : NVIDIA RTX 3060 12 Go d\'occasion — CUDA fonctionne instantanément avec Ollama et llama.cpp',
          'Alternative : AMD RX 6700 XT d\'occasion — même 12 Go de VRAM, mais la configuration ROCm ajoute des heures de travail, et n\'est plus vraiment moins chère en 2026',
          'Les deux cartes font tourner tous les modèles 7B et la plupart des 13B–14B en Q4 ; aucune ne convient pour un modèle 70B',
          'Achetez la RTX 3060 en version 12 Go — la variante 6 Go ne fait tourner que des modèles 3B et est identique en apparence dans les annonces',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : RTX 3060 12 Go d\'occasion',
        content: [
          '<strong>La RTX 3060 12 Go d\'occasion est la meilleure GPU sous 300 € pour les LLM locaux, car 12 Go de VRAM associés à un support CUDA sans configuration donnent une machine LLM fonctionnelle en quelques minutes.</strong> Elle fait tourner Mistral Small, Llama 3 8B et Qwen3 8B à 15-20 tokens par seconde, et la plupart des modèles 13B–14B en Q4.',
          'La RTX 3060 gagne sur le logiciel, pas seulement sur la VRAM. Ollama et llama.cpp détectent automatiquement les GPU NVIDIA via CUDA sous Windows et Linux — sans chasse aux pilotes, sans ROCm. La RX 6700 XT d\'AMD atteint la même capacité de 12 Go, mais son prix d\'occasion s\'est aligné sur celui de la RTX 3060 au moment de cette vérification — la pénurie de mémoire de 2026 a réduit l\'écart de prix qui en faisait autrefois le choix économique. Ne la choisissez que si vous préférez déjà Linux/ROCm ; l\'économie qui la justifiait autrefois a en grande partie disparu.',
          'Quelle que soit la carte que vous achetez, évitez la variante 6 Go de la RTX 3060 — elle est identique en apparence dans les annonces, mais ne convient qu\'à des modèles 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Vérifier le prix de la RTX 3060 12 Go sur Amazon.fr',
          },
          {
            url: 'https://www.leboncoin.fr/recherche?text=RTX%203060%2012GB',
            productName: 'NVIDIA RTX 3060 12GB (occasion)',
            productCategory: 'gpu',
            label: 'Vérifier les prix de la RTX 3060 12 Go d\'occasion sur leboncoin',
          },
          {
            url: 'https://www.amazon.fr/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'Vérifier le prix de la RX 6700 XT sur Amazon.fr',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 Go vs RX 6700 XT pour les LLM locaux',
        content: [
          '<strong>Les deux cartes ont 12 Go de VRAM, la capacité de modèle est donc identique — la vraie décision est CUDA contre ROCm.</strong> Vérifiez les prix actuels de chacune avant d\'acheter ; la pénurie de mémoire de 2026 maintient les prix des GPU d\'occasion volatils et a déjà effacé l\'essentiel de l\'écart de prix entre les deux.',
        ],
        columns: ['GPU', 'VRAM', 'Configuration', 'Idéal pour'],
        rows: [
          { GPU: 'RTX 3060 12 Go', VRAM: '12 Go', Configuration: 'CUDA, instantané', 'Idéal pour': 'Meilleur choix — aucune friction' },
          { GPU: 'RX 6700 XT', VRAM: '12 Go', Configuration: 'ROCm, plusieurs heures', 'Idéal pour': 'Seulement si vous préférez déjà Linux/AMD' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'Que pouvez-vous faire tourner ?',
        columns: ['Taille du modèle', 'Verdict'],
        rows: [
          { 'Taille du modèle': '7B–8B', Verdict: '🟢 Excellent' },
          { 'Taille du modèle': '13B–14B (Q4)', Verdict: '🟢 Très pratique' },
          { 'Taille du modèle': '20B+', Verdict: '🟡 La mémoire devient limitante' },
          { 'Taille du modèle': '70B', Verdict: '🔴 Non' },
        ],
        content: [
          'Un modèle 70B en Q4 nécessite environ 40 Go de VRAM, donc une carte 12 Go à ce niveau de prix n\'est pas le bon matériel pour cela — voir le guide d\'achat GPU complet ci-dessous pour les niveaux adaptés aux modèles plus grands.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les GPU à moins de 300 € pour les LLM locaux',
        faqs: [
          {
            q: 'Une GPU à 300 € peut-elle bien faire tourner des LLM locaux ?',
            a: 'Oui. Une RTX 3060 12 Go ou une RX 6700 XT d\'occasion fait tourner tous les modèles 7B à 15-20 tokens par seconde et la plupart des modèles 13B–14B en quantisation Q4. Les deux ont 12 Go de VRAM, suffisant pour le chat général, l\'assistance au code et le résumé.',
          },
          {
            q: 'Pourquoi choisir la RTX 3060 plutôt que la RX 6700 XT si elles coûtent à peu près pareil maintenant ?',
            a: 'La RTX 3060 utilise NVIDIA CUDA, qu\'Ollama et llama.cpp détectent automatiquement sans configuration. La RX 6700 XT nécessite ROCm — généralement plusieurs heures de configuration sous Linux, et non pris en charge sous Windows pour une inférence rapide. Quand les deux cartes coûtent à peu près pareil, il n\'y a plus d\'économie pour compenser ce temps de configuration.',
          },
          {
            q: 'Dois-je acheter la RTX 3060 6 Go ou 12 Go ?',
            a: 'Achetez la version 12 Go. La RTX 3060 6 Go ne convient qu\'à des modèles 3B, bien en dessous de la classe 7B visée par ce budget. Les deux variantes sont identiques en apparence dans les annonces — vérifiez la VRAM avant d\'acheter.',
          },
          {
            q: 'Une GPU sous 300 € peut-elle faire tourner un modèle 70B ?',
            a: 'Non. Un modèle 70B en Q4 nécessite environ 40 Go de VRAM. Une carte 12 Go plafonne autour des modèles 14B en Q4. Pour des modèles plus grands, il vous faut un niveau supérieur ou une configuration multi-GPU — voir le guide d\'achat GPU complet ci-dessous.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleure GPU à moins de 600 € pour les LLM locaux](/fr/prompt-bites/best-gpu-under-600-local-llm) — le niveau supérieur : RTX 4060 Ti 16 Go',
          '[Meilleurs modèles Ollama pour RTX 3060 12 Go](/fr/prompt-bites/best-ollama-models-rtx-3060-12gb) — quels modèles télécharger une fois la carte en main',
          '[Besoin de plus de 12 Go de VRAM ? Consultez le guide d\'achat GPU complet pour LLM locaux](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — le comparatif complet pour tous les niveaux de budget',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ja.webp',
    title: 'RTX 3060 12GB：300ドル以下でローカルLLMに最適なGPUは（2026年版）？',
    seoTitle: 'RTX 3060 12GBでローカルLLM 2026：300ドル以下最良GPU',
    metaDescription: '中古RTX 3060 12GBは300ドル以下のローカルLLM向け最良GPUです——12GB VRAMで全7Bと大半の14BモデルをQ4で動かせ、CUDAはOllamaで設定不要です。現在の価格を確認してください。',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLM推論向けに最初のGPUを選ぶ予算重視の購入者',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>中古のNVIDIA RTX 3060 12GBが、300ドル以下でローカルLLMに最適なGPUです。</strong> 12GBのVRAMで全7Bモデルと大半の14BモデルをQ4で動かせ、NVIDIA CUDAはOllamaで設定不要——ドライバー探しも不要です。古い数字を信じるのではなく現在の中古価格を確認してください。2026年のメモリ不足でGPU価格が上昇しており、通常の予算代替であるAMD RX 6700 XTも、もはや明確に安いわけではありません。',
    toc: [
      { label: '最良の選択：中古RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 対 RX 6700 XT', anchor: '#comparison' },
      { label: '何を動かせるか？', anchor: '#model-guide' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro:
      '300ドル以下では、2枚の中古カードがローカルLLM推論を席巻しています：NVIDIA RTX 3060 12GBとAMD RX 6700 XTです。どちらも12GBのVRAMを備え——7Bと大半の13B〜14BモデルをQ4で動かすのに十分です。かつては価格が違いでしたが、2026年では主にソフトウェアの手間が違いになっています。',
    quickAnswerTop: {
      ja: {
        question: '300ドル以下でローカルLLMを動かすのに最適なGPUは？',
        answer: '中古のRTX 3060 12GBが、300ドル以下でローカルLLMに最適なGPUです——12GB VRAMで全7Bと大半の14Bモデルを動かせ、CUDAはOllamaで設定不要で動作します。古い数字ではなく現在の中古価格を確認してください——2026年にGPU価格は大きく変動しています。',
        bullets: [
          'RTX 3060 12GBはLlama 3 8B Q4_K_Mを約25 tok/s、Qwen 14B Q4_K_Mを約15 tok/sで動作。',
          'RX 6700 XT 12GBは同じVRAM容量を持ちますが、LinuxでのROCmが必要——そしてこの確認時点では、RTX 3060よりも明確に安いわけではありません。',
          'この予算帯では8GB GPUを避けてください——VRAMの上限が14Bモデルを完全にブロックします。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最良の選択：中古のNVIDIA RTX 3060 12GB——CUDAはOllamaとllama.cppで即座に動作',
          '代替案：中古のAMD RX 6700 XT——同じ12GB VRAMだが、ROCmの設定に数時間かかり、2026年ではもはや明確に安くない',
          'どちらのカードも全7Bモデルと大半の13B〜14BモデルをQ4で動かせる；どちらも70Bモデルには対応しない',
          'RTX 3060は12GB版を購入すること——6GB版は3Bモデルしか動かせず、出品では見分けがつかない',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最良の選択：中古NVIDIA RTX 3060 12GB',
        content: [
          '<strong>中古のNVIDIA RTX 3060 12GBが300ドル以下でローカルLLMに最適なGPUである理由は、12GBのVRAMと設定不要のCUDAサポートにより、数分で動作するLLM環境が手に入るからです。</strong> Mistral Small、Llama 3 8B、Qwen3 8Bを15〜20トークン毎秒で動かし、大半の13B〜14BモデルもQ4で動作します。',
          'RTX 3060はVRAMだけでなくソフトウェアでも優れています。OllamaとLlama.cppはWindowsとLinuxの両方でNVIDIA GPUをCUDA経由で自動検出します——ドライバー探しもROCmも不要です。AMD RX 6700 XTは同じ12GB容量を実現していますが、この確認時点で中古価格はRTX 3060に近づいています——2026年のメモリ不足が、かつて予算重視の選択肢たらしめていた価格差を縮めました。すでにLinux/ROCmを好む場合にのみ選んでください；かつてそれを正当化していたコスト削減効果は、ほとんどなくなっています。',
          'どちらを購入するにせよ、RTX 3060の6GB版は避けてください——出品では見分けがつきませんが、3Bモデルしか動作しません。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでRTX 3060 12GBの価格を確認する',
          },
          {
            url: 'https://www.sofmap.com/search_result.aspx?keyword=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB（中古）',
            productCategory: 'gpu',
            priceRange: '約2.2万円〜3.3万円',
            label: 'ソフマップで中古RTX 3060 12GBの価格を確認する',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでRX 6700 XTの価格を確認する',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB 対 RX 6700 XT ローカルLLM比較',
        content: [
          '<strong>どちらも12GBのVRAMを持つため、モデル容量は同じです——本当の決め手はCUDAかROCmかです。</strong> 購入前にそれぞれの現在の価格を確認してください。2026年のメモリ不足により中古GPU価格は変動が激しく、両者の間の価格差はすでにほぼなくなっています。',
        ],
        columns: ['GPU', 'VRAM', '設定', '最適な用途'],
        rows: [
          { GPU: 'RTX 3060 12GB', VRAM: '12GB', 設定: 'CUDA、即座', 最適な用途: '最良の選択——手間なし' },
          { GPU: 'RX 6700 XT', VRAM: '12GB', 設定: 'ROCm、数時間', 最適な用途: 'すでにLinux/AMDを好む場合のみ' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '何を動かせるか？',
        columns: ['モデルサイズ', '評価'],
        rows: [
          { モデルサイズ: '7B〜8B', 評価: '🟢 優秀' },
          { モデルサイズ: '13B〜14B（Q4）', 評価: '🟢 非常に実用的' },
          { モデルサイズ: '20B以上', 評価: '🟡 メモリが厳しくなる' },
          { モデルサイズ: '70B', 評価: '🔴 不可' },
        ],
        content: [
          '70BモデルはQ4で約40GBのVRAMが必要なため、この価格帯の12GBカードには適していません——より大きなモデルに対応する階層については、下記の完全なGPU購入ガイドをご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '300ドル以下GPUに関するローカルLLM Q&A',
        faqs: [
          {
            q: '300ドルのGPUでローカルLLMをうまく動かせますか？',
            a: 'はい。中古のRTX 3060 12GBまたはRX 6700 XTは、全7Bモデルを15〜20トークン毎秒で動かし、大半の13B〜14BモデルをQ4量子化で動作させます。どちらも12GBのVRAMを持ち、一般的なチャット、コーディング支援、要約には十分です。',
          },
          {
            q: '今では価格がほぼ同じなのに、なぜRX 6700 XTよりRTX 3060を選ぶのですか？',
            a: 'RTX 3060はNVIDIA CUDAを使用しており、OllamaとLlama.cppが設定不要で自動検出します。RX 6700 XTはROCmが必要で、通常Linuxで数時間の設定が必要であり、Windowsでは高速推論に対応していません。両方のカードがほぼ同じ価格であれば、その設定時間を埋め合わせる節約分はもはやありません。',
          },
          {
            q: 'RTX 3060は6GB版と12GB版のどちらを買うべきですか？',
            a: '12GB版を購入してください。RTX 3060の6GB版は3Bモデルしか動かせず、この予算が対象とする7Bクラスをはるかに下回ります。両者は出品では見分けがつきません——購入前にVRAMを確認してください。',
          },
          {
            q: '300ドル以下のGPUで70Bモデルを動かせますか？',
            a: 'いいえ。70BモデルはQ4で約40GBのVRAMが必要です。12GBカードはQ4で最大でも約14Bモデルまでです。より大きなモデルには、上位の階層かマルチGPU構成が必要です——下記の完全なGPU購入ガイドをご覧ください。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[600ドル以下ローカルLLM向け最良GPU](/ja/prompt-bites/best-gpu-under-600-local-llm) — 一段上の階層：RTX 4060 Ti 16GB',
          '[RTX 3060 12GB向け最良のOllamaモデル](/ja/prompt-bites/best-ollama-models-rtx-3060-12gb) — カードを手に入れた後に取得すべきモデル',
          '[12GB以上のVRAMが必要ですか？完全なGPU購入ガイドはこちら](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 全予算階層の完全比較',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-zh.webp',
    title: 'RTX 3060 12GB：300美元以下本地LLM最佳GPU（2026年）？',
    seoTitle: 'RTX 3060 12GB本地LLM 2026：300美元以下最佳GPU',
    metaDescription: '二手RTX 3060 12GB是300美元以下本地LLM最佳GPU——12GB显存可在Q4下运行所有7B和大多数14B模型，CUDA与Ollama开箱即用。请查看当前价格。',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: '为本地LLM推理选择第一张显卡的预算型买家',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>二手NVIDIA RTX 3060 12GB是300美元以下本地LLM的最佳GPU。</strong> 其12GB显存可在Q4下运行所有7B模型和大多数14B模型，NVIDIA CUDA与Ollama开箱即用——无需寻找驱动。请查看当前二手价格，而不要相信旧数字：2026年的显存短缺推高了显卡价格，而通常作为预算替代方案的AMD RX 6700 XT也不再明显更便宜。',
    toc: [
      { label: '最佳选择：二手RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 对比 RX 6700 XT', anchor: '#comparison' },
      { label: '能运行什么模型？', anchor: '#model-guide' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    intro:
      '在300美元以下，两张二手显卡主导着本地LLM推理：NVIDIA RTX 3060 12GB和AMD RX 6700 XT。两者都配备12GB显存——足以在Q4下运行7B和大多数13B至14B模型。过去两者的区别在于价格；到了2026年，主要区别变成了软件使用的便利程度。',
    quickAnswerTop: {
      zh: {
        question: '300美元以下运行本地LLM的最佳GPU是什么？',
        answer: '二手RTX 3060 12GB是300美元以下本地LLM的最佳GPU——12GB显存可运行所有7B和大多数14B模型，CUDA与Ollama无需配置即可使用。请查看当前二手价格，而不是依据旧数字——2026年显卡价格波动很大。',
        bullets: [
          'RTX 3060 12GB运行Llama 3 8B Q4_K_M约25 tok/s，运行Qwen 14B Q4_K_M约15 tok/s。',
          'RX 6700 XT 12GB拥有相同的显存容量，但需要在Linux上配置ROCm——而截至本次核实，它已不再比RTX 3060明显便宜。',
          '在这个价位应避免8GB显卡——显存上限会完全阻止运行14B模型。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：二手NVIDIA RTX 3060 12GB——CUDA可与Ollama和llama.cpp即时配合使用',
          '替代方案：二手AMD RX 6700 XT——同样是12GB显存，但ROCm配置需要数小时，而且到2026年已不再明显更便宜',
          '两张显卡都能在Q4下运行所有7B模型和大多数13B至14B模型；都无法容纳70B模型',
          '购买RTX 3060时选择12GB版本——6GB版本只能运行3B模型，且在商品列表中与12GB版难以区分',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：二手NVIDIA RTX 3060 12GB',
        content: [
          '<strong>二手NVIDIA RTX 3060 12GB是300美元以下本地LLM的最佳GPU，因为12GB显存加上零配置的CUDA支持，几分钟内就能搭建出可用的LLM环境。</strong> 它能以每秒15至20个token的速度运行Mistral Small、Llama 3 8B和Qwen3 8B，并能在Q4下运行大多数13B至14B模型。',
          'RTX 3060的优势不仅在于显存，更在于软件生态。Ollama和llama.cpp在Windows和Linux上都能通过CUDA自动检测NVIDIA显卡——无需寻找驱动，无需配置ROCm。AMD RX 6700 XT达到了同样的12GB容量，但截至本次核实，其二手价格已经与RTX 3060趋同——2026年的显存短缺缩小了曾让它成为预算之选的价格差距。只有在你本身就偏好Linux/ROCm时才选择它；曾经支撑这一选择的省钱理由，如今大多已不复存在。',
          '无论购买哪一张，都要避免RTX 3060的6GB版本——它在商品列表中看起来完全一样，但只能运行3B模型。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: '在Amazon查看RTX 3060 12GB价格',
          },
          {
            url: 'https://www.goofish.com/search?q=RTX%203060%2012GB',
            productName: 'NVIDIA RTX 3060 12GB（二手）',
            productCategory: 'gpu',
            label: '在闲鱼查看二手RTX 3060 12GB价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: '在Amazon查看RX 6700 XT价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB 对比 RX 6700 XT：本地LLM',
        content: [
          '<strong>两张显卡都配备12GB显存，因此模型容量相同——真正的决定因素是CUDA还是ROCm。</strong> 购买前请查看各自的当前价格；2026年的显存短缺让二手显卡价格持续波动，并已基本消除了两者之间原有的价格差距。',
        ],
        columns: ['显卡', '显存', '配置', '最适合'],
        rows: [
          { 显卡: 'RTX 3060 12GB', 显存: '12GB', 配置: 'CUDA，即时可用', 最适合: '最佳选择——无配置烦恼' },
          { 显卡: 'RX 6700 XT', 显存: '12GB', 配置: 'ROCm，需数小时', 最适合: '仅适合已偏好Linux/AMD的用户' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '能运行什么模型？',
        columns: ['模型体积', '结论'],
        rows: [
          { 模型体积: '7B–8B', 结论: '🟢 极佳' },
          { 模型体积: '13B–14B（Q4）', 结论: '🟢 非常实用' },
          { 模型体积: '20B以上', 结论: '🟡 显存开始吃紧' },
          { 模型体积: '70B', 结论: '🔴 不行' },
        ],
        content: [
          '70B模型在Q4下大约需要40GB显存，因此这个价位的12GB显卡并不适合它——想了解适合更大模型的档位，请参阅下方完整的GPU购买指南。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于300美元以下本地LLM显卡的常见问题',
        faqs: [
          {
            q: '300美元的显卡能很好地运行本地LLM吗？',
            a: '可以。二手RTX 3060 12GB或RX 6700 XT能以每秒15至20个token的速度运行所有7B模型，并能在Q4量化下运行大多数13B至14B模型。两者都拥有12GB显存，足以满足一般聊天、编程辅助和摘要生成的需求。',
          },
          {
            q: '如果两者现在价格差不多，为什么要选RTX 3060而不是RX 6700 XT？',
            a: 'RTX 3060使用NVIDIA CUDA，Ollama和llama.cpp会自动检测，无需任何配置。RX 6700 XT需要ROCm——在Linux上通常需要数小时配置，且在Windows上不支持快速推理。当两张显卡价格相近时，已经没有省下的钱能弥补这段配置时间了。',
          },
          {
            q: '我应该买RTX 3060的6GB版还是12GB版？',
            a: '请购买12GB版本。RTX 3060的6GB版只能运行3B模型，远低于这个预算所针对的7B级别。两个版本在商品列表中看起来完全一样——购买前务必确认显存容量。',
          },
          {
            q: '300美元以下的显卡能运行70B模型吗？',
            a: '不能。70B模型在Q4下大约需要40GB显存。12GB显卡在Q4下最多只能运行到约14B模型。如果需要运行更大的模型，你需要更高档位的显卡或多卡配置——请参阅下方完整的GPU购买指南。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[600美元以下本地LLM最佳GPU](/zh/prompt-bites/best-gpu-under-600-local-llm) — 更高一档：RTX 4060 Ti 16GB',
          '[适合RTX 3060 12GB的最佳Ollama模型](/zh/prompt-bites/best-ollama-models-rtx-3060-12gb) — 拿到显卡后应该拉取哪些模型',
          '[需要超过12GB显存？查看完整的本地LLM GPU购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 涵盖所有预算档位的完整对比',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-es.webp',
    title: 'RTX 3060 12GB: ¿mejor GPU por menos de 300 $ para LLMs locales (2026)?',
    seoTitle: 'RTX 3060 12GB para LLM local 2026: mejor GPU bajo 300 $',
    metaDescription: 'La RTX 3060 12GB de segunda mano es la mejor GPU por menos de 300 $ para LLMs locales — 12 GB de VRAM ejecuta todos los 7B y la mayoría de 14B en Q4, CUDA funciona con Ollama sin configuración. Consulta el precio actual.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores con presupuesto ajustado que eligen su primera GPU para inferencia de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>La RTX 3060 12GB de segunda mano es la mejor GPU por menos de 300 $ para LLMs locales.</strong> Sus 12 GB de VRAM ejecutan todos los modelos 7B y la mayoría de los 14B en Q4, y NVIDIA CUDA funciona con Ollama nada más instalarlo — sin buscar drivers. Consulta el precio de segunda mano actual en lugar de fiarte de una cifra antigua: una escasez de memoria en 2026 ha subido los precios de las GPU, y la AMD RX 6700 XT (la alternativa económica habitual) ya no es notablemente más barata.',
    toc: [
      { label: 'Mejor opción: RTX 3060 12GB de segunda mano', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: '¿Qué puedes ejecutar?', anchor: '#model-guide' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    intro:
      'Por menos de 300 $, dos tarjetas de segunda mano dominan la inferencia de LLM local: la NVIDIA RTX 3060 12GB y la AMD RX 6700 XT. Ambas tienen 12 GB de VRAM — suficiente para modelos 7B y la mayoría de 13B–14B en Q4. Antes la diferencia era el precio; en 2026 es sobre todo la fricción del software.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor GPU por menos de 300 $ para ejecutar LLMs locales?',
        answer: 'Una RTX 3060 12GB de segunda mano es la mejor GPU por menos de 300 $ para LLMs locales — 12 GB de VRAM ejecuta todos los 7B y la mayoría de los 14B, y CUDA funciona con Ollama sin configuración. Consulta el precio de segunda mano actual en lugar de una cifra antigua — los precios de las GPU se han movido mucho en 2026.',
        bullets: [
          'La RTX 3060 12GB ejecuta Llama 3 8B Q4_K_M a unos 25 tok/s y Qwen 14B Q4_K_M a unos 15 tok/s.',
          'La RX 6700 XT 12GB iguala la capacidad de VRAM pero necesita ROCm en Linux — y, a fecha de esta comprobación, ya no es notablemente más barata que la RTX 3060.',
          'Evita las GPU de 8 GB en este presupuesto — el techo de VRAM bloquea por completo los modelos 14B.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: NVIDIA RTX 3060 12GB de segunda mano — CUDA funciona al instante con Ollama y llama.cpp',
          'Alternativa: AMD RX 6700 XT de segunda mano — misma VRAM de 12 GB, pero configurar ROCm añade horas de trabajo, y en 2026 ya no es notablemente más barata',
          'Ambas tarjetas ejecutan todos los modelos 7B y la mayoría de 13B–14B en Q4; ninguna soporta un modelo 70B',
          'Compra la RTX 3060 en su versión de 12 GB — la variante de 6 GB solo ejecuta modelos 3B y es idéntica en los anuncios',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: NVIDIA RTX 3060 12GB de segunda mano',
        content: [
          '<strong>La RTX 3060 12GB de segunda mano es la mejor GPU por menos de 300 $ para LLMs locales porque 12 GB de VRAM más soporte CUDA sin configuración te dan una máquina de LLM funcionando en minutos.</strong> Ejecuta Mistral Small, Llama 3 8B y Qwen3 8B a 15-20 tokens por segundo, y la mayoría de los modelos 13B–14B en Q4.',
          'La RTX 3060 gana por el software, no solo por la VRAM. Ollama y llama.cpp detectan las GPU NVIDIA vía CUDA automáticamente en Windows y Linux — sin buscar drivers, sin ROCm. La AMD RX 6700 XT iguala esa capacidad de 12 GB, pero su precio de segunda mano se ha acercado al de la RTX 3060 a fecha de esta comprobación — la escasez de memoria de 2026 redujo la diferencia de precio que antes la convertía en la opción económica. Elígela solo si ya prefieres Linux/ROCm; el ahorro que antes la justificaba ha desaparecido en su mayor parte.',
          'Compres la que compres, evita la variante de 6 GB de la RTX 3060 — es idéntica en los anuncios, pero solo sirve para modelos 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Consultar el precio de la RTX 3060 12GB en Amazon.es',
          },
          {
            url: 'https://es.wallapop.com/search?keywords=RTX%203060%2012GB',
            productName: 'NVIDIA RTX 3060 12GB (segunda mano)',
            productCategory: 'gpu',
            label: 'Consultar precios de RTX 3060 12GB de segunda mano en Wallapop',
          },
          {
            url: 'https://www.amazon.es/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'Consultar el precio de la RX 6700 XT en Amazon.es',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT para LLMs locales',
        content: [
          '<strong>Ambas tarjetas tienen 12 GB de VRAM, así que la capacidad de modelo es idéntica — la decisión real es CUDA frente a ROCm.</strong> Consulta los precios actuales de cada una antes de comprar; la escasez de memoria de 2026 mantiene volátiles los precios de las GPU de segunda mano y ya ha borrado la mayor parte de la diferencia de precio entre ambas.',
        ],
        columns: ['GPU', 'VRAM', 'Configuración', 'Ideal para'],
        rows: [
          { GPU: 'RTX 3060 12GB', VRAM: '12 GB', Configuración: 'CUDA, instantáneo', 'Ideal para': 'Mejor opción — sin fricción' },
          { GPU: 'RX 6700 XT', VRAM: '12 GB', Configuración: 'ROCm, horas', 'Ideal para': 'Solo si ya prefieres Linux/AMD' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '¿Qué puedes ejecutar?',
        columns: ['Tamaño del modelo', 'Veredicto'],
        rows: [
          { 'Tamaño del modelo': '7B–8B', Veredicto: '🟢 Excelente' },
          { 'Tamaño del modelo': '13B–14B (Q4)', Veredicto: '🟢 Muy práctico' },
          { 'Tamaño del modelo': '20B+', Veredicto: '🟡 La memoria se vuelve limitante' },
          { 'Tamaño del modelo': '70B', Veredicto: '🔴 No' },
        ],
        content: [
          'Un modelo 70B en Q4 necesita unos 40 GB de VRAM, así que una tarjeta de 12 GB en este rango de precio no es el hardware adecuado para él — consulta la guía completa de compra de GPU más abajo para los niveles que sí encajan con modelos más grandes.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre GPU por menos de 300 $ para LLMs locales',
        faqs: [
          {
            q: '¿Puede una GPU de 300 $ ejecutar bien LLMs locales?',
            a: 'Sí. Una RTX 3060 12GB o una RX 6700 XT de segunda mano ejecuta todos los modelos 7B a 15-20 tokens por segundo y la mayoría de los modelos 13B–14B en cuantización Q4. Ambas tienen 12 GB de VRAM, suficiente para chat general, asistencia de código y resúmenes.',
          },
          {
            q: '¿Por qué elegir la RTX 3060 en vez de la RX 6700 XT si ahora cuestan más o menos lo mismo?',
            a: 'La RTX 3060 usa NVIDIA CUDA, que Ollama y llama.cpp detectan automáticamente sin configuración. La RX 6700 XT necesita ROCm — normalmente horas de configuración en Linux, y sin soporte en Windows para inferencia rápida. Cuando ambas tarjetas cuestan más o menos lo mismo, ya no hay un ahorro que compense ese tiempo de configuración.',
          },
          {
            q: '¿Debo comprar la RTX 3060 de 6 GB o de 12 GB?',
            a: 'Compra la versión de 12 GB. La RTX 3060 de 6 GB solo sirve para modelos 3B, muy por debajo de la clase 7B a la que apunta este presupuesto. Las dos variantes son idénticas en los anuncios — confirma la VRAM antes de comprar.',
          },
          {
            q: '¿Puede una GPU por menos de 300 $ ejecutar un modelo 70B?',
            a: 'No. Un modelo 70B en Q4 necesita unos 40 GB de VRAM. Una tarjeta de 12 GB llega como mucho a modelos 14B en Q4. Para modelos más grandes necesitas un nivel superior o una configuración multi-GPU — consulta la guía completa de compra de GPU más abajo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejor GPU por menos de 600 $ para LLMs locales](/es/prompt-bites/best-gpu-under-600-local-llm) — el siguiente nivel: RTX 4060 Ti 16GB',
          '[Mejores modelos de Ollama para RTX 3060 12GB](/es/prompt-bites/best-ollama-models-rtx-3060-12gb) — qué modelos descargar una vez que tengas la tarjeta',
          '[¿Necesitas más de 12 GB de VRAM? Consulta la guía completa de compra de GPU](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — la comparativa completa por cada nivel de presupuesto',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-pt.webp',
    title: 'RTX 3060 12GB: Melhor GPU Abaixo de US$ 300 para LLMs Locais (2026)?',
    seoTitle: 'RTX 3060 12GB para LLM Local 2026: Melhor GPU Abaixo de US$ 300',
    metaDescription: 'A RTX 3060 12GB usada é a melhor GPU abaixo de US$ 300 para LLMs locais — 12GB de VRAM roda todos os modelos 7B e a maioria dos 14B em Q4, e a CUDA funciona com o Ollama sem configuração. Confira o preço atual.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores com orçamento limitado escolhendo a primeira GPU para inferência de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>A RTX 3060 12GB usada é a melhor GPU abaixo de US$ 300 para LLMs locais.</strong> Seus 12GB de VRAM rodam todos os modelos 7B e a maioria dos modelos 14B em Q4, e a NVIDIA CUDA funciona com o Ollama assim que você instala — sem precisar caçar drivers. Confira o preço usado atual em vez de confiar em um número antigo: uma escassez de memória em 2026 elevou os preços das GPUs, e a AMD RX 6700 XT (a alternativa econômica de sempre) não é mais visivelmente mais barata.',
    toc: [
      { label: 'Melhor Escolha: RTX 3060 12GB Usada', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'O Que Você Consegue Rodar?', anchor: '#model-guide' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leituras Relacionadas', anchor: '#related' },
    ],
    intro:
      'Abaixo de US$ 300, duas placas usadas dominam a inferência de LLM local: a NVIDIA RTX 3060 12GB e a AMD RX 6700 XT. Ambas têm 12GB de VRAM — suficiente para modelos 7B e a maioria dos 13B–14B em Q4. Antes a diferença era o preço; em 2026, é principalmente o atrito de software.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor GPU abaixo de US$ 300 para rodar LLMs locais?',
        answer: 'Uma RTX 3060 12GB usada é a melhor GPU abaixo de US$ 300 para LLMs locais — 12GB de VRAM roda todos os modelos 7B e a maioria dos 14B, e a CUDA funciona com o Ollama sem nenhuma configuração. Confira o preço usado atual em vez de um número antigo — os preços de GPU mudaram muito em 2026.',
        bullets: [
          'A RTX 3060 12GB roda o Llama 3 8B Q4_K_M a cerca de 25 tok/s e o Qwen 14B Q4_K_M a cerca de 15 tok/s.',
          'A RX 6700 XT 12GB tem a mesma capacidade de VRAM, mas exige ROCm no Linux — e, nesta verificação, não é mais visivelmente mais barata do que a RTX 3060.',
          'Evite GPUs de 8GB nessa faixa de preço — o teto de VRAM bloqueia completamente os modelos 14B.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: NVIDIA RTX 3060 12GB usada — a CUDA funciona instantaneamente com Ollama e llama.cpp',
          'Alternativa: AMD RX 6700 XT usada — mesmos 12GB de VRAM, mas a configuração do ROCm adiciona horas de trabalho, e não é mais visivelmente mais barata em 2026',
          'As duas placas rodam todos os modelos 7B e a maioria dos 13B–14B em Q4; nenhuma comporta um modelo 70B',
          'Compre a RTX 3060 na versão de 12GB — a variante de 6GB só roda modelos 3B e é idêntica nos anúncios',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: NVIDIA RTX 3060 12GB Usada',
        content: [
          '<strong>A RTX 3060 12GB usada é a melhor GPU abaixo de US$ 300 para LLMs locais porque 12GB de VRAM somados ao suporte CUDA sem configuração te dão uma máquina de LLM funcionando em minutos.</strong> Ela roda o Mistral Small, o Llama 3 8B e o Qwen3 8B a 15-20 tokens por segundo, e a maioria dos modelos 13B–14B em Q4.',
          'A RTX 3060 vence pelo software, não só pela VRAM. O Ollama e o llama.cpp detectam GPUs NVIDIA via CUDA automaticamente no Windows e no Linux — sem caçar drivers, sem ROCm. A AMD RX 6700 XT iguala essa capacidade de 12GB, mas seu preço usado convergiu com o da RTX 3060 nesta verificação — a escassez de memória de 2026 reduziu a diferença de preço que antes a tornava a escolha econômica. Escolha-a apenas se você já preferir Linux/ROCm; a economia que costumava justificá-la praticamente desapareceu.',
          'Seja qual for a placa que você comprar, evite a variante de 6GB da RTX 3060 — ela parece idêntica nos anúncios, mas só comporta modelos 3B.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Confira o preço da RTX 3060 12GB na Amazon.com.br',
          },
          {
            url: 'https://www.mercadolivre.com.br/c/eletronicos/computacao/placas-de-video?q=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (usada)',
            productCategory: 'gpu',
            label: 'Confira preços de RTX 3060 12GB usada no Mercado Livre',
          },
          {
            url: 'https://www.amazon.com.br/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'Confira o preço da RX 6700 XT na Amazon.com.br',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT para LLMs Locais',
        content: [
          '<strong>As duas placas têm 12GB de VRAM, então a capacidade de modelo é idêntica — a decisão real é CUDA contra ROCm.</strong> Confira os preços atuais de cada uma antes de comprar; a escassez de memória de 2026 mantém os preços de GPUs usadas voláteis e já apagou a maior parte da diferença de preço entre as duas.',
        ],
        columns: ['GPU', 'VRAM', 'Configuração', 'Melhor para'],
        rows: [
          { GPU: 'RTX 3060 12GB', VRAM: '12GB', Configuração: 'CUDA, instantânea', 'Melhor para': 'Melhor escolha — sem atrito' },
          { GPU: 'RX 6700 XT', VRAM: '12GB', Configuração: 'ROCm, horas', 'Melhor para': 'Só se você já preferir Linux/AMD' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'O Que Você Consegue Rodar?',
        columns: ['Tamanho do modelo', 'Veredito'],
        rows: [
          { 'Tamanho do modelo': '7B–8B', Veredito: '🟢 Excelente' },
          { 'Tamanho do modelo': '13B–14B (Q4)', Veredito: '🟢 Muito prático' },
          { 'Tamanho do modelo': '20B+', Veredito: '🟡 A memória fica restritiva' },
          { 'Tamanho do modelo': '70B', Veredito: '🔴 Não' },
        ],
        content: [
          'Um modelo 70B em Q4 precisa de aproximadamente 40GB de VRAM, então uma placa de 12GB nessa faixa de preço não é o hardware certo para isso — veja o guia completo de compra de GPU abaixo para as faixas que comportam modelos maiores.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas Rápidas Sobre GPUs Abaixo de US$ 300 para LLMs Locais',
        faqs: [
          {
            q: 'Uma GPU de US$ 300 consegue rodar LLMs locais bem?',
            a: 'Sim. Uma RTX 3060 12GB ou RX 6700 XT usada roda todos os modelos 7B a 15-20 tokens por segundo e a maioria dos modelos 13B–14B em quantização Q4. Ambas têm 12GB de VRAM, suficiente para chat geral, assistência de código e resumo.',
          },
          {
            q: 'Por que escolher a RTX 3060 em vez da RX 6700 XT se agora elas custam praticamente o mesmo?',
            a: 'A RTX 3060 usa CUDA da NVIDIA, que o Ollama e o llama.cpp detectam automaticamente sem configuração. A RX 6700 XT precisa de ROCm — normalmente horas de configuração no Linux, e sem suporte no Windows para inferência rápida. Quando as duas placas custam praticamente o mesmo, não existe mais uma economia que compense esse tempo de configuração.',
          },
          {
            q: 'Devo comprar a RTX 3060 de 6GB ou de 12GB?',
            a: 'Compre a versão de 12GB. A RTX 3060 de 6GB só comporta modelos 3B, bem abaixo da classe 7B que esse orçamento busca. As duas variantes são idênticas nos anúncios — confirme a VRAM antes de comprar.',
          },
          {
            q: 'Uma GPU abaixo de US$ 300 consegue rodar um modelo 70B?',
            a: 'Não. Um modelo 70B em Q4 precisa de aproximadamente 40GB de VRAM. Uma placa de 12GB chega no máximo a modelos 14B em Q4. Para modelos maiores, você precisa de uma faixa superior ou de uma configuração com múltiplas GPUs — veja o guia completo de compra de GPU abaixo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras Relacionadas',
        items: [
          '[Melhor GPU Abaixo de US$ 600 para LLMs Locais](/pt/prompt-bites/best-gpu-under-600-local-llm) — a próxima faixa: RTX 4060 Ti 16GB',
          '[Melhores Modelos do Ollama para RTX 3060 12GB](/pt/prompt-bites/best-ollama-models-rtx-3060-12gb) — quais modelos baixar depois de ter a placa',
          '[Precisa de Mais de 12GB de VRAM? Veja o Guia Completo de Compra de GPU](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — a comparação completa em todas as faixas de orçamento',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ar.webp',
    title: 'RTX 3060 12GB: أفضل بطاقة رسومات بأقل من 300 دولار للنماذج اللغوية المحلية (2026)؟',
    seoTitle: 'RTX 3060 12GB للنماذج اللغوية المحلية 2026: الأفضل بأقل من 300 دولار',
    metaDescription: 'بطاقة RTX 3060 12GB المستعملة هي أفضل بطاقة رسومات بأقل من 300 دولار للنماذج اللغوية المحلية — 12 جيجابايت VRAM تشغّل كل نماذج 7B ومعظم 14B بصيغة Q4، وCUDA تعمل مع Ollama دون إعداد. تحقق من السعر الحالي.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'المشترون ذوو الميزانية المحدودة الذين يختارون أول بطاقة رسومات لاستدلال النماذج اللغوية المحلية',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>بطاقة NVIDIA RTX 3060 12GB المستعملة هي أفضل بطاقة رسومات بأقل من 300 دولار للنماذج اللغوية المحلية.</strong> توفر ذاكرتها البالغة 12 جيجابايت VRAM تشغيل كل نموذج 7B ومعظم نماذج 14B بصيغة Q4، وتعمل NVIDIA CUDA مع Ollama فور التثبيت — دون البحث عن تعريفات. تحقق من السعر الحالي المستعمل بدلًا من الاعتماد على رقم قديم: أدى نقص في الذاكرة عام 2026 إلى ارتفاع أسعار بطاقات الرسومات، ولم تعد AMD RX 6700 XT (البديل الاقتصادي المعتاد) أرخص بشكل ملحوظ.',
    toc: [
      { label: 'أفضل اختيار: RTX 3060 12GB مستعملة', anchor: '#best-pick' },
      { label: 'RTX 3060 مقابل RX 6700 XT', anchor: '#comparison' },
      { label: 'ماذا يمكنك تشغيله؟', anchor: '#model-guide' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    intro:
      'بأقل من 300 دولار، تهيمن بطاقتان مستعملتان على استدلال النماذج اللغوية المحلية: NVIDIA RTX 3060 12GB وAMD RX 6700 XT. تحمل كلتاهما 12 جيجابايت VRAM — كافية لنماذج 7B ومعظم نماذج 13B–14B بصيغة Q4. كان الفرق سابقًا هو السعر؛ في 2026 أصبح في الغالب احتكاك البرمجيات.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بطاقة رسومات بأقل من 300 دولار لتشغيل النماذج اللغوية المحلية؟',
        answer: 'بطاقة RTX 3060 12GB مستعملة هي أفضل بطاقة رسومات بأقل من 300 دولار للنماذج اللغوية المحلية — 12 جيجابايت VRAM تشغّل كل نماذج 7B ومعظم 14B، وتعمل CUDA مع Ollama دون أي إعداد. تحقق من السعر المستعمل الحالي بدلًا من رقم قديم — تحركت أسعار بطاقات الرسومات كثيرًا في 2026.',
        bullets: [
          'تشغّل RTX 3060 12GB نموذج Llama 3 8B بصيغة Q4_K_M بسرعة نحو 25 رمزًا/ثانية وQwen 14B بصيغة Q4_K_M بسرعة نحو 15 رمزًا/ثانية.',
          'توفر RX 6700 XT 12GB نفس سعة VRAM لكنها تحتاج إلى ROCm على Linux — ووقت هذا التحقق، لم تعد أرخص بشكل ملحوظ من RTX 3060.',
          'تجنّب بطاقات الرسومات بسعة 8 جيجابايت عند هذه الميزانية — يمنع سقف VRAM تشغيل نماذج 14B تمامًا.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: NVIDIA RTX 3060 12GB مستعملة — تعمل CUDA فورًا مع Ollama وllama.cpp',
          'بديل: AMD RX 6700 XT مستعملة — نفس سعة 12 جيجابايت VRAM، لكن إعداد ROCm يضيف ساعات من العمل، ولم تعد أرخص بشكل ملحوظ في 2026',
          'تشغّل كلتا البطاقتين كل نموذج 7B ومعظم نماذج 13B–14B بصيغة Q4؛ لا تستوعب أي منهما نموذج 70B',
          'اشترِ RTX 3060 بإصدار 12 جيجابايت — الإصدار بسعة 6 جيجابايت يشغّل نماذج 3B فقط ويبدو مطابقًا في الإعلانات',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: NVIDIA RTX 3060 12GB مستعملة',
        content: [
          '<strong>بطاقة NVIDIA RTX 3060 12GB المستعملة هي أفضل بطاقة رسومات بأقل من 300 دولار للنماذج اللغوية المحلية لأن 12 جيجابايت VRAM مع دعم CUDA بلا إعداد يمنحانك جهاز نماذج لغوية جاهزًا خلال دقائق.</strong> تشغّل Mistral Small وLlama 3 8B وQwen3 8B بسرعة 15-20 رمزًا في الثانية، ومعظم نماذج 13B–14B بصيغة Q4.',
          'تتفوق RTX 3060 بفضل البرمجيات، لا بسعة VRAM فقط. يكتشف Ollama وllama.cpp بطاقات NVIDIA تلقائيًا عبر CUDA على Windows وLinux — دون البحث عن تعريفات، ودون ROCm. تصل AMD RX 6700 XT إلى نفس سعة 12 جيجابايت، لكن سعرها المستعمل اقترب من سعر RTX 3060 وقت هذا التحقق — قلّص نقص الذاكرة في 2026 فجوة السعر التي كانت تجعلها الخيار الاقتصادي سابقًا. اختَرها فقط إذا كنت تفضّل بالفعل Linux/ROCm؛ فالتوفير الذي كان يبرر شراءها تقلّص إلى حد كبير.',
          'أيًا كانت البطاقة التي تشتريها، تجنّب إصدار RTX 3060 بسعة 6 جيجابايت — يبدو مطابقًا في الإعلانات لكنه يشغّل نماذج 3B فقط.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر RTX 3060 12GB على أمازون',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB (مستعملة)',
            productCategory: 'gpu',
            label: 'تحقق من أسعار RTX 3060 12GB المستعملة على eBay',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'تحقق من سعر RX 6700 XT على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB مقابل RX 6700 XT للنماذج اللغوية المحلية',
        content: [
          '<strong>تحمل كلتا البطاقتين 12 جيجابايت VRAM، لذا سعة النماذج متطابقة — القرار الحقيقي هو CUDA مقابل ROCm.</strong> تحقق من الأسعار الحالية لكل منهما قبل الشراء؛ يبقي نقص الذاكرة في 2026 أسعار البطاقات المستعملة متقلبة، وقد محا بالفعل معظم فجوة السعر بينهما.',
        ],
        columns: ['البطاقة', 'VRAM', 'الإعداد', 'الأنسب لـ'],
        rows: [
          { البطاقة: 'RTX 3060 12GB', VRAM: '12 جيجابايت', الإعداد: 'CUDA، فوري', 'الأنسب لـ': 'أفضل اختيار — بلا احتكاك' },
          { البطاقة: 'RX 6700 XT', VRAM: '12 جيجابايت', الإعداد: 'ROCm، ساعات', 'الأنسب لـ': 'فقط إذا كنت تفضّل Linux/AMD بالفعل' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: 'ماذا يمكنك تشغيله؟',
        columns: ['حجم النموذج', 'التقييم'],
        rows: [
          { 'حجم النموذج': '7B–8B', التقييم: '🟢 ممتاز' },
          { 'حجم النموذج': '13B–14B (Q4)', التقييم: '🟢 عملي جدًا' },
          { 'حجم النموذج': '20B فأكثر', التقييم: '🟡 الذاكرة تصبح مقيدة' },
          { 'حجم النموذج': '70B', التقييم: '🔴 لا' },
        ],
        content: [
          'يحتاج نموذج 70B بصيغة Q4 إلى نحو 40 جيجابايت VRAM، لذا فإن بطاقة بسعة 12 جيجابايت في هذه الفئة السعرية ليست الجهاز المناسب له — راجع دليل شراء بطاقات الرسومات الكامل أدناه للفئات المناسبة للنماذج الأكبر.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة عن بطاقات الرسومات بأقل من 300 دولار للنماذج اللغوية المحلية',
        faqs: [
          {
            q: 'هل يمكن لبطاقة رسومات بسعر 300 دولار تشغيل النماذج اللغوية المحلية جيدًا؟',
            a: 'نعم. تشغّل RTX 3060 12GB أو RX 6700 XT المستعملة كل نموذج 7B بسرعة 15-20 رمزًا في الثانية، ومعظم نماذج 13B–14B بتكميم Q4. تمتلك كلتاهما 12 جيجابايت VRAM، وهو ما يكفي للمحادثة العامة والمساعدة البرمجية والتلخيص.',
          },
          {
            q: 'لماذا اختيار RTX 3060 بدلًا من RX 6700 XT إذا كان سعرهما متقاربًا الآن؟',
            a: 'تستخدم RTX 3060 تقنية NVIDIA CUDA التي يكتشفها Ollama وllama.cpp تلقائيًا دون إعداد. تحتاج RX 6700 XT إلى ROCm — عادةً ساعات من الإعداد على Linux، وغير مدعومة على Windows للاستدلال السريع. عندما تتقارب أسعار البطاقتين، لم يعد هناك توفير يعوّض وقت الإعداد هذا.',
          },
          {
            q: 'هل أشتري RTX 3060 بسعة 6 جيجابايت أم 12 جيجابايت؟',
            a: 'اشترِ إصدار 12 جيجابايت. تشغّل RTX 3060 بسعة 6 جيجابايت نماذج 3B فقط، وهي أقل بكثير من فئة 7B التي تستهدفها هذه الميزانية. تبدو الإصداران متطابقين في الإعلانات — تحقق من سعة VRAM قبل الشراء.',
          },
          {
            q: 'هل يمكن لبطاقة رسومات بأقل من 300 دولار تشغيل نموذج 70B؟',
            a: 'لا. يحتاج نموذج 70B بصيغة Q4 إلى نحو 40 جيجابايت VRAM. تصل بطاقة بسعة 12 جيجابايت كحد أقصى إلى نماذج 14B بصيغة Q4. للنماذج الأكبر، تحتاج إلى فئة أعلى أو إعداد متعدد البطاقات — راجع دليل شراء بطاقات الرسومات الكامل أدناه.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل بطاقة رسومات بأقل من 600 دولار للنماذج اللغوية المحلية](/ar/prompt-bites/best-gpu-under-600-local-llm) — الفئة التالية: RTX 4060 Ti 16GB',
          '[أفضل نماذج Ollama لبطاقة RTX 3060 12GB](/ar/prompt-bites/best-ollama-models-rtx-3060-12gb) — النماذج التي يجب تنزيلها بعد اقتناء البطاقة',
          '[تحتاج أكثر من 12 جيجابايت VRAM؟ راجع دليل شراء بطاقات الرسومات الكامل](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — المقارنة الكاملة عبر كل فئات الميزانية',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ko.webp',
    title: 'RTX 3060 12GB: 로컬 LLM용 300달러 이하 최고의 GPU는（2026년）?',
    seoTitle: 'RTX 3060 12GB 로컬 LLM 2026: 300달러 이하 최고의 GPU',
    metaDescription: '중고 RTX 3060 12GB는 로컬 LLM을 위한 300달러 이하 최고의 GPU입니다 — 12GB VRAM으로 모든 7B와 대부분의 14B 모델을 Q4로 실행하며, CUDA는 Ollama와 설정 없이 바로 작동합니다. 현재 가격을 확인하십시오.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: '로컬 LLM 추론을 위한 첫 GPU를 선택하는 예산 중시 구매자',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>중고 NVIDIA RTX 3060 12GB는 로컬 LLM을 위한 300달러 이하 최고의 GPU입니다.</strong> 12GB VRAM으로 모든 7B 모델과 대부분의 14B 모델을 Q4로 실행할 수 있으며, NVIDIA CUDA는 설치하자마자 Ollama와 함께 작동합니다 — 드라이버를 찾아 헤맬 필요가 없습니다. 오래된 수치를 믿지 말고 현재 중고 가격을 확인하십시오. 2026년 메모리 부족으로 GPU 가격이 상승했으며, 일반적인 예산형 대안인 AMD RX 6700 XT도 더 이상 눈에 띄게 저렴하지 않습니다.',
    toc: [
      { label: '최고의 선택: 중고 RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 대 RX 6700 XT', anchor: '#comparison' },
      { label: '무엇을 실행할 수 있는가?', anchor: '#model-guide' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    intro:
      '300달러 이하에서는 두 종류의 중고 카드가 로컬 LLM 추론을 지배합니다: NVIDIA RTX 3060 12GB와 AMD RX 6700 XT입니다. 둘 다 12GB VRAM을 갖추고 있어 — 7B와 대부분의 13B~14B 모델을 Q4로 실행하기에 충분합니다. 예전에는 가격이 차이점이었지만, 2026년에는 대부분 소프트웨어 사용 편의성이 차이점입니다.',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM을 실행하기 위한 300달러 이하 최고의 GPU는 무엇입니까?',
        answer: '중고 RTX 3060 12GB는 로컬 LLM을 위한 300달러 이하 최고의 GPU입니다 — 12GB VRAM으로 모든 7B와 대부분의 14B 모델을 실행하며, CUDA는 설정 없이 Ollama와 함께 작동합니다. 오래된 수치가 아니라 현재 중고 가격을 확인하십시오 — 2026년에 GPU 가격이 크게 변동했습니다.',
        bullets: [
          'RTX 3060 12GB는 Llama 3 8B Q4_K_M을 약 25 tok/s로, Qwen 14B Q4_K_M을 약 15 tok/s로 실행합니다.',
          'RX 6700 XT 12GB는 동일한 VRAM 용량을 제공하지만 Linux에서 ROCm이 필요합니다 — 그리고 이 확인 시점 기준으로 RTX 3060보다 더 이상 눈에 띄게 저렴하지 않습니다.',
          '이 가격대에서는 8GB GPU를 피하십시오 — VRAM 한계가 14B 모델을 완전히 차단합니다.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최고의 선택: 중고 NVIDIA RTX 3060 12GB — CUDA가 Ollama 및 llama.cpp와 즉시 작동합니다',
          '대안: 중고 AMD RX 6700 XT — 동일한 12GB VRAM이지만 ROCm 설정에 몇 시간이 걸리며, 2026년에는 더 이상 눈에 띄게 저렴하지 않습니다',
          '두 카드 모두 모든 7B 모델과 대부분의 13B~14B 모델을 Q4로 실행합니다; 둘 다 70B 모델은 담지 못합니다',
          'RTX 3060은 12GB 버전을 구매하십시오 — 6GB 버전은 3B 모델만 실행할 수 있으며 상품 목록에서 구분이 어렵습니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최고의 선택: 중고 NVIDIA RTX 3060 12GB',
        content: [
          '<strong>중고 NVIDIA RTX 3060 12GB가 로컬 LLM을 위한 300달러 이하 최고의 GPU인 이유는 12GB VRAM과 설정이 필요 없는 CUDA 지원이 몇 분 안에 작동하는 LLM 환경을 제공하기 때문입니다.</strong> Mistral Small, Llama 3 8B, Qwen3 8B를 초당 15~20 토큰으로 실행하며, 대부분의 13B~14B 모델을 Q4로 실행합니다.',
          'RTX 3060은 VRAM뿐만 아니라 소프트웨어에서도 우위를 점합니다. Ollama와 llama.cpp는 Windows와 Linux 모두에서 CUDA를 통해 NVIDIA GPU를 자동으로 감지합니다 — 드라이버를 찾을 필요도, ROCm도 필요 없습니다. AMD RX 6700 XT는 동일한 12GB 용량에 도달하지만, 이 확인 시점 기준으로 중고 가격이 RTX 3060과 비슷해졌습니다 — 2026년 메모리 부족이 예전에 이 카드를 예산형 선택지로 만들었던 가격 차이를 좁혔습니다. 이미 Linux/ROCm을 선호하는 경우에만 선택하십시오; 예전에 이를 정당화했던 비용 절감 효과는 대부분 사라졌습니다.',
          '어느 쪽을 구매하든, RTX 3060의 6GB 버전은 피하십시오 — 상품 목록에서는 동일해 보이지만 3B 모델만 지원합니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            label: 'Amazon에서 RTX 3060 12GB 가격 확인',
          },
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB(중고)',
            productCategory: 'gpu',
            label: 'eBay에서 중고 RTX 3060 12GB 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'Amazon에서 RX 6700 XT 가격 확인',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB 대 RX 6700 XT: 로컬 LLM 비교',
        content: [
          '<strong>두 카드 모두 12GB VRAM을 갖추고 있어 모델 용량은 동일합니다 — 실질적인 결정은 CUDA냐 ROCm이냐입니다.</strong> 구매 전 각각의 현재 가격을 확인하십시오; 2026년 메모리 부족으로 중고 GPU 가격이 계속 변동하고 있으며, 이미 두 카드 사이의 가격 차이 대부분을 없앴습니다.',
        ],
        columns: ['GPU', 'VRAM', '설정', '최적 대상'],
        rows: [
          { GPU: 'RTX 3060 12GB', VRAM: '12GB', 설정: 'CUDA, 즉시', '최적 대상': '최고의 선택 — 설정 번거로움 없음' },
          { GPU: 'RX 6700 XT', VRAM: '12GB', 설정: 'ROCm, 몇 시간', '최적 대상': '이미 Linux/AMD를 선호하는 경우에만' },
        ],
      },
      modelGuide: {
        id: 'model-guide',
        title: '무엇을 실행할 수 있는가?',
        columns: ['모델 크기', '평가'],
        rows: [
          { '모델 크기': '7B~8B', 평가: '🟢 훌륭함' },
          { '모델 크기': '13B~14B(Q4)', 평가: '🟢 매우 실용적' },
          { '모델 크기': '20B 이상', 평가: '🟡 메모리가 제한적이 됨' },
          { '모델 크기': '70B', 평가: '🔴 불가' },
        ],
        content: [
          '70B 모델은 Q4에서 약 40GB의 VRAM이 필요하므로, 이 가격대의 12GB 카드는 적합한 하드웨어가 아닙니다 — 더 큰 모델에 맞는 등급은 아래의 전체 GPU 구매 가이드를 참고하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '300달러 이하 GPU에 관한 로컬 LLM 빠른 답변',
        faqs: [
          {
            q: '300달러짜리 GPU로 로컬 LLM을 잘 실행할 수 있습니까?',
            a: '네. 중고 RTX 3060 12GB 또는 RX 6700 XT는 모든 7B 모델을 초당 15~20 토큰으로 실행하며, 대부분의 13B~14B 모델을 Q4 양자화로 실행합니다. 둘 다 12GB VRAM을 갖추고 있어 일반 채팅, 코딩 지원, 요약에 충분합니다.',
          },
          {
            q: '지금 가격이 거의 비슷하다면 왜 RX 6700 XT 대신 RTX 3060을 선택해야 합니까?',
            a: 'RTX 3060은 NVIDIA CUDA를 사용하며, Ollama와 llama.cpp가 설정 없이 자동으로 감지합니다. RX 6700 XT는 ROCm이 필요하며, 일반적으로 Linux에서 몇 시간의 설정이 필요하고 Windows에서는 빠른 추론을 지원하지 않습니다. 두 카드의 가격이 거의 비슷할 때는 그 설정 시간을 상쇄할 만한 절감액이 더 이상 없습니다.',
          },
          {
            q: 'RTX 3060은 6GB와 12GB 중 무엇을 사야 합니까?',
            a: '12GB 버전을 구매하십시오. RTX 3060 6GB는 3B 모델만 지원하며, 이는 이 예산이 목표로 하는 7B 등급보다 훨씬 낮습니다. 두 버전은 상품 목록에서 동일해 보입니다 — 구매 전 VRAM을 확인하십시오.',
          },
          {
            q: '300달러 이하의 GPU로 70B 모델을 실행할 수 있습니까?',
            a: '아니요. 70B 모델은 Q4에서 약 40GB의 VRAM이 필요합니다. 12GB 카드는 Q4 기준 최대 14B 모델까지만 가능합니다. 더 큰 모델을 위해서는 상위 등급이나 다중 GPU 구성이 필요합니다 — 아래의 전체 GPU 구매 가이드를 참고하십시오.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM용 600달러 이하 최고의 GPU](/ko/prompt-bites/best-gpu-under-600-local-llm) — 한 단계 위 등급: RTX 4060 Ti 16GB',
          '[RTX 3060 12GB를 위한 최고의 Ollama 모델](/ko/prompt-bites/best-ollama-models-rtx-3060-12gb) — 카드를 구매한 후 받아야 할 모델',
          '[12GB 이상의 VRAM이 필요하십니까? 전체 GPU 구매 가이드를 확인하십시오](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 모든 예산 등급에 걸친 전체 비교',
        ],
      },
    },
  },
}
