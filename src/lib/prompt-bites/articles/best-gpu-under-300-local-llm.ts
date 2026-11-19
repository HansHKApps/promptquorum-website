import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-en.webp',
    title: 'RTX 3060 12GB: Best GPU Under $300 for Local LLMs (2026)',
    seoTitle: 'RTX 3060 12GB for Local LLM 2026: Best GPU Under $300',
    metaDescription: 'Used RTX 3060 12GB now runs $350+ (2026 memory shortage) — still the top 12GB pick for local LLMs. See today\'s price and the real under-$300 option.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'Budget buyers choosing a first GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>As of November 2026, the used NVIDIA RTX 3060 12GB no longer reliably sells under $300.</strong> A 2026 GDDR6 memory shortage pushed Nvidia to relaunch the card at retail, and that spike dragged used prices to roughly $350–360 (resaleprices.com, November 19, 2026) — the AMD RX 6700 XT tracks it closely at about the same price. Both remain the best-supported 12GB GPUs for local LLMs if your budget can stretch past $300: 12GB of VRAM runs every 7B model and most 14B models at Q4, and NVIDIA CUDA works out of the box with Ollama — no driver hunting. If you need to stay strictly under $300, the new Intel Arc B580 12GB (around $250–290 when in stock) is the closest match today, though its setup is less turnkey than CUDA. Check current listings before buying — this market has moved fast all year.',
    toc: [
      { label: 'Best Pick: Used RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'What Can You Run?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'GPU prices for local LLM inference moved sharply in 2026. A 2026 GDDR6 memory shortage pushed Nvidia to relaunch the RTX 3060 12GB at retail, and the spike dragged both new and used prices for 12GB cards well past the $300 mark this guide is built around. The used NVIDIA RTX 3060 12GB and AMD RX 6700 XT now both run roughly $350 on the resale market (resaleprices.com, November 19, 2026) — still the best-supported 12GB options for local LLMs, just no longer a strict budget pick. Readers who need to stay under $300 today should look at the new Intel Arc B580 12GB instead.',
    quickAnswerTop: {
      en: {
        question: 'What is the best GPU under $300 for running local LLMs?',
        answer: 'The used RTX 3060 12GB is still the best-supported 12GB GPU for local LLMs, but as of November 2026 it no longer reliably sells under $300 — a memory shortage pushed used prices to roughly $350–360. If you need to stay strictly under $300, the new Intel Arc B580 12GB (12GB VRAM, around $250–290 when in stock) is the closest fit today; for 7B-only use, an 8GB RTX 2060 Super (~$200) or RX 6600 (~$230) also works.',
        bullets: [
          'RTX 3060 12GB still runs Llama 3 8B Q4_K_M at roughly 25 tok/s and Qwen 14B Q4_K_M at roughly 15 tok/s — the performance case is unchanged, but the card now costs about $350–360 used (resaleprices.com, November 19, 2026).',
          'RX 6700 XT 12GB matches the VRAM and the price (~$352 used) but still needs ROCm on Linux — it is no longer a cheaper alternative, just a Linux-only one.',
          'Intel Arc B580 12GB (new, ~$250–290 when in stock) is the most reliable way to stay under $300 with 12GB of VRAM; expect SYCL/IPEX-LLM setup, not CUDA-simple.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Price alert: used RTX 3060 12GB and RX 6700 XT now average $350–360 (resaleprices.com, November 19, 2026) — a 2026 memory shortage pushed both well past this guide\'s $300 budget',
          'Best-supported 12GB pick regardless of price: NVIDIA RTX 3060 12GB — CUDA works instantly with Ollama and llama.cpp',
          'Actually under $300 today: Intel Arc B580 12GB (new, ~$250–290), though setup is less turnkey than CUDA',
          'Both RTX 3060 12GB and RX 6700 XT run every 7B model and most 13B–14B models at Q4; none of the GPUs here fit a 70B model',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'The RTX 3060 12GB is the best-supported 12GB GPU for local LLMs, but as of November 2026 it costs roughly $350–360 used; the Intel Arc B580 12GB (~$250–290 new) is the best option that still fits under $300.' },
          { type: 'plain-terms', text: 'GPU prices for local AI spiked in 2026 — the classic $300 pick (RTX 3060 12GB) now runs closer to $350, so check current listings and consider the Arc B580 if you need to stay under budget.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best 12GB Pick: Used NVIDIA RTX 3060 12GB (Now ~$350+, Above $300 Budget)',
        content: [
          '<strong>The used NVIDIA RTX 3060 12GB is still the best-supported 12GB GPU for local LLMs, but as of November 2026 it no longer reliably sells under $300.</strong> A 2026 GDDR6 memory shortage pushed Nvidia to relaunch new RTX 3060 12GB units at retail, and that spike dragged the used market up with it: resaleprices.com puts the used average at $356 (range $337–$363, up 5.4% in 30 days) as of November 19, 2026. It still runs Mistral Small, Llama 3 8B, and Qwen3 8B at 15–20 tokens per second, and most 13B–14B models at Q4 — the performance case hasn\'t changed, only the price.',
          'The RTX 3060 wins on software, not just VRAM. Ollama and llama.cpp detect NVIDIA GPUs via CUDA automatically on Windows and Linux — no driver hunting, no ROCm. The AMD RX 6700 XT matches the 12GB capacity and, as of this check, costs about the same used ($352 average, resaleprices.com, November 19, 2026) — so there\'s no longer a price reason to put up with ROCm\'s setup time. Choose it only if you already prefer Linux/ROCm.',
          'If your budget is a hard $300, skip both of these for now. The new Intel Arc B580 12GB has stayed closer to its $249 list price — typically $250–290 when in stock — and gives you the same 12GB ceiling without the used-market premium. It needs llama.cpp\'s SYCL backend or IPEX-LLM rather than CUDA, which is less plug-and-play but workable. See the comparison table below.',
          'Whichever 12GB card you buy, avoid the 6GB RTX 3060 variant — it looks identical in listings but only fits 3B models.',
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
          {
            url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (new)',
            productCategory: 'gpu',
            label: 'Check Intel Arc B580 12GB price on Newegg',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT vs Arc B580 for Local LLMs',
        content: [
          '<strong>All three cards carry 12GB of VRAM, so model capacity is identical — the real decision is price versus software maturity.</strong> As of November 19, 2026 (resaleprices.com), the two used cards both run $350–360 — above this guide\'s $300 budget — while the new Intel Arc B580 is the one still regularly found near or under $300. Check current listings before buying; this market has moved fast all year.',
        ],
        columns: ['GPU', 'VRAM', 'Current Price', 'Setup', 'Best for'],
        rows: [
          { GPU: 'RTX 3060 12GB (used)', VRAM: '12GB', 'Current Price': '~$356', Setup: 'CUDA, instant', 'Best for': 'Best software support — if budget allows' },
          { GPU: 'RX 6700 XT (used)', VRAM: '12GB', 'Current Price': '~$352', Setup: 'ROCm, hours', 'Best for': 'Only if already on Linux/AMD' },
          { GPU: 'Arc B580 12GB (new)', VRAM: '12GB', 'Current Price': '~$250–290', Setup: 'SYCL/IPEX-LLM', 'Best for': 'Actually under $300 today' },
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
            q: 'Is the RTX 3060 12GB still under $300 in 2026?',
            a: 'No — not as of November 2026. A 2026 GDDR6 memory shortage pushed the used RTX 3060 12GB to roughly $350–360 (resaleprices.com, November 19, 2026), and the RX 6700 XT tracks it closely. Both are still the best-supported 12GB picks for local LLMs if your budget allows. If you need to stay under $300, the new Intel Arc B580 12GB (around $250–290 when in stock) is the closest match today.',
          },
          {
            q: 'Why pick the RTX 3060 over the RX 6700 XT if they cost about the same now?',
            a: 'The RTX 3060 uses NVIDIA CUDA, which Ollama and llama.cpp detect automatically with no setup. The RX 6700 XT needs ROCm — typically hours to configure on Linux, and unsupported on Windows for fast inference. As of November 2026 both cards run $350–360 used, so there\'s no savings left to offset that setup time — unless you already run Linux/ROCm.',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-de.webp',
    title: 'RTX 3060 12GB: Beste GPU unter 300 € für lokale LLMs (2026)',
    seoTitle: 'RTX 3060 12GB für lokale LLMs 2026: Beste GPU unter 300 €',
    metaDescription: 'Gebrauchte RTX 3060 12GB kostet jetzt deutlich mehr (Speicherknappheit 2026) — weiterhin die beste 12-GB-Wahl für lokale LLMs. Aktuellen Preis und die echte 300-€-Alternative ansehen.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'Budget-Käufer, die eine erste GPU für lokale LLM-Inferenz suchen',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Stand November 2026 verkauft sich die gebrauchte NVIDIA RTX 3060 12 GB nicht mehr zuverlässig unter 300 €.</strong> Eine GDDR6-Speicherknappheit 2026 veranlasste Nvidia, die Karte neu aufzulegen — Neuware liegt laut PC Games Hardware und MacG inzwischen wieder bei ca. 330–333 €, und auch Gebrauchtangebote sind deutlich teurer geworden. Die AMD RX 6700 XT (die übliche Budget-Alternative) liegt preislich etwa gleichauf. Beide bleiben die am besten unterstützten 12-GB-GPUs für lokale LLMs, wenn Ihr Budget etwas über 300 € reicht: 12 GB VRAM führen jedes 7B-Modell und die meisten 14B-Modelle bei Q4 aus, und NVIDIA CUDA läuft mit Ollama sofort — keine Treibersuche. Wer strikt unter 300 € bleiben muss, findet mit der neuen Intel Arc B580 12GB (neu, je nach Verfügbarkeit oft noch im Budget) die derzeit passendste Option — allerdings mit weniger unkomplizierter Einrichtung als CUDA. Prüfen Sie aktuelle Kleinanzeigen-Angebote vor dem Kauf — der Markt bewegt sich das ganze Jahr 2026 schnell.',
    toc: [
      { label: 'Beste Wahl: gebrauchte RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'Was können Sie ausführen?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro:
      'Die GPU-Preise für lokale LLM-Inferenz haben sich 2026 stark bewegt. Eine GDDR6-Speicherknappheit veranlasste Nvidia, die RTX 3060 12 GB neu aufzulegen, und der Preisschub zog sowohl Neu- als auch Gebrauchtpreise für 12-GB-Karten deutlich über die 300-€-Marke, auf die dieser Ratgeber ursprünglich zugeschnitten war. Die gebrauchte NVIDIA RTX 3060 12 GB und die AMD RX 6700 XT liegen inzwischen beide klar über 300 € — weiterhin die am besten unterstützten 12-GB-Karten für lokale LLMs, aber keine strikte Budget-Wahl mehr. Wer unter 300 € bleiben muss, sollte stattdessen die neue Intel Arc B580 12GB prüfen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste GPU unter 300 € für lokale LLMs?',
        answer: 'Die gebrauchte RTX 3060 12 GB ist weiterhin die am besten unterstützte 12-GB-GPU für lokale LLMs, verkauft sich aber Stand November 2026 nicht mehr zuverlässig unter 300 €. Wer strikt unter 300 € bleiben muss, findet mit der neuen Intel Arc B580 12GB (12 GB VRAM, oft noch im Budget bei Verfügbarkeit) die derzeit passendste Option; für reine 7B-Nutzung funktioniert auch eine 8-GB-Karte wie die RTX 2060 Super oder RX 6600.',
        bullets: [
          'RTX 3060 12 GB läuft weiterhin mit Llama 3 8B Q4_K_M bei ~25 tok/s und Qwen 14B Q4_K_M bei ~15 tok/s — die Leistung ist unverändert, nur die Karte ist jetzt deutlich teurer als früher.',
          'RX 6700 XT 12 GB bietet dieselbe VRAM-Kapazität und liegt preislich etwa gleichauf, benötigt aber weiterhin ROCm unter Linux — keine günstigere Alternative mehr, nur eine Linux-Option.',
          'Intel Arc B580 12GB (neu) ist derzeit der zuverlässigste Weg zu 12 GB VRAM im 300-€-Budget; dafür ist die Einrichtung über SYCL/IPEX-LLM weniger unkompliziert als CUDA.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Preis-Hinweis: Gebrauchte RTX 3060 12 GB und RX 6700 XT sind durch die Speicherknappheit 2026 deutlich über das 300-€-Budget dieses Ratgebers gestiegen',
          'Am besten unterstützte 12-GB-Karte, unabhängig vom Preis: NVIDIA RTX 3060 12 GB — CUDA arbeitet sofort mit Ollama und llama.cpp',
          'Tatsächlich noch unter 300 € erhältlich: Intel Arc B580 12GB (neu), dafür weniger unkomplizierte Einrichtung als CUDA',
          'RTX 3060 12 GB und RX 6700 XT führen beide jedes 7B-Modell und die meisten 13B–14B-Modelle bei Q4 aus; keine der hier genannten Karten reicht für ein 70B-Modell',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Die RTX 3060 12 GB ist die am besten unterstützte 12-GB-GPU für lokale LLMs, kostet aber Stand November 2026 deutlich mehr als früher; die Intel Arc B580 12GB (neu) ist die beste Option, die noch ins 300-€-Budget passt.' },
          { type: 'plain-terms', text: 'Die GPU-Preise für lokale KI sind 2026 stark gestiegen — die klassische 300-€-Wahl (RTX 3060 12 GB) ist jetzt deutlich teurer, also aktuelle Angebote prüfen und bei knappem Budget die Arc B580 in Betracht ziehen.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste 12-GB-Wahl: gebrauchte NVIDIA RTX 3060 12GB (jetzt deutlich über 300 €)',
        content: [
          '<strong>Die gebrauchte NVIDIA RTX 3060 12 GB ist weiterhin die am besten unterstützte 12-GB-GPU für lokale LLMs, verkauft sich aber Stand November 2026 nicht mehr zuverlässig unter 300 €.</strong> Eine GDDR6-Speicherknappheit 2026 veranlasste Nvidia, die Karte neu aufzulegen; laut PC Games Hardware und MacG kostet eine Neuauflage inzwischen wieder rund 330–333 €, und auch Gebrauchtangebote sind spürbar teurer geworden. Die Karte führt weiterhin Mistral Small, Llama 3 8B und Qwen3 8B mit 15-20 Token pro Sekunde aus und die meisten 13B–14B-Modelle bei Q4 — an der Leistung hat sich nichts geändert, nur am Preis.',
          'Die RTX 3060 gewinnt bei der Software, nicht nur beim VRAM. Ollama und llama.cpp erkennen NVIDIA-GPUs unter Windows und Linux automatisch über CUDA — keine Treibersuche, kein ROCm. Die AMD RX 6700 XT erreicht dieselbe 12-GB-Kapazität und liegt preislich etwa gleichauf — es gibt also keinen Preisvorteil mehr, der den ROCm-Einrichtungsaufwand ausgleicht. Wählen Sie sie nur, wenn Sie Linux/ROCm bereits bevorzugen.',
          'Wenn Ihr Budget strikt 300 € ist, verzichten Sie vorerst auf beide. Die neue Intel Arc B580 12GB liegt näher an ihrem UVP von 249 US-Dollar und ist je nach Verfügbarkeit oft noch im Budget — mit derselben 12-GB-Obergrenze, ohne den Gebrauchtmarkt-Aufschlag. Sie benötigt llama.cpps SYCL-Backend oder IPEX-LLM statt CUDA, was weniger unkompliziert, aber machbar ist. Siehe Vergleichstabelle unten.',
          'Egal welche 12-GB-Karte Sie kaufen: Vermeiden Sie die 6-GB-Variante der RTX 3060 — sie sieht in Anzeigen identisch aus, passt aber nur für 3B-Modelle.',
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
            label: 'Gebrauchte RTX 3060 12GB auf Kleinanzeigen prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'RX 6700 XT Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (neu)',
            productCategory: 'gpu',
            label: 'Intel Arc B580 12GB Preis bei Amazon.de prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT vs Arc B580 für lokale LLMs',
        content: [
          '<strong>Alle drei Karten haben 12 GB VRAM, die Modellkapazität ist also identisch — die eigentliche Entscheidung ist Preis gegen Software-Reife.</strong> Stand November 2026 liegen beide Gebrauchtkarten deutlich über 300 €, während die neue Intel Arc B580 regelmäßig nahe oder unter 300 € zu finden ist. Prüfen Sie aktuelle Angebote vor dem Kauf — der Markt bewegt sich das ganze Jahr 2026 schnell.',
        ],
        columns: ['GPU', 'VRAM', 'Aktueller Preis', 'Einrichtung', 'Geeignet für'],
        rows: [
          { GPU: 'RTX 3060 12 GB (gebraucht)', VRAM: '12 GB', 'Aktueller Preis': 'ca. 330 €+', Einrichtung: 'CUDA, sofort', 'Geeignet für': 'Beste Software-Unterstützung — bei ausreichendem Budget' },
          { GPU: 'RX 6700 XT (gebraucht)', VRAM: '12 GB', 'Aktueller Preis': 'ca. 330 €+', Einrichtung: 'ROCm, Stunden', 'Geeignet für': 'Nur bei Linux/AMD-Präferenz' },
          { GPU: 'Arc B580 12GB (neu)', VRAM: '12 GB', 'Aktueller Preis': 'ca. 250–290 €', Einrichtung: 'SYCL/IPEX-LLM', 'Geeignet für': 'Tatsächlich noch unter 300 €' },
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
            q: 'Ist die RTX 3060 12 GB 2026 noch unter 300 € erhältlich?',
            a: 'Nein — Stand November 2026 nicht mehr zuverlässig. Eine GDDR6-Speicherknappheit 2026 hat die gebrauchte RTX 3060 12 GB deutlich über 300 € getrieben (Neuauflage laut PC Games Hardware/MacG bei ca. 330–333 €), und die RX 6700 XT liegt preislich etwa gleichauf. Beide bleiben die am besten unterstützten 12-GB-Karten für lokale LLMs, wenn das Budget reicht. Wer unter 300 € bleiben muss, findet mit der neuen Intel Arc B580 12GB derzeit die passendste Option.',
          },
          {
            q: 'Warum die RTX 3060 statt der RX 6700 XT, wenn beide etwa gleich viel kosten?',
            a: 'Die RTX 3060 nutzt NVIDIA CUDA, das Ollama und llama.cpp automatisch ohne Einrichtung erkennen. Die RX 6700 XT benötigt ROCm — typischerweise Stunden unter Linux und unter Windows für schnelle Inferenz nicht unterstützt. Stand November 2026 kosten beide Karten gebraucht etwa gleich viel, es gibt also keine Ersparnis mehr, die diesen Zeitaufwand ausgleicht — außer Sie bevorzugen Linux/ROCm bereits.',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-fr.webp',
    title: 'RTX 3060 12 Go : meilleure GPU à moins de 300 € pour les LLM locaux (2026)',
    seoTitle: 'RTX 3060 12 Go pour LLM local 2026 : meilleure GPU sous 300 €',
    metaDescription: 'La RTX 3060 12 Go d\'occasion coûte désormais bien plus (pénurie de mémoire 2026) — toujours la meilleure GPU 12 Go pour LLM locaux. Voir le prix actuel et la vraie alternative sous 300 €.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs à budget limité choisissant une première GPU pour l\'inférence LLM locale',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>En novembre 2026, la RTX 3060 12 Go d\'occasion ne se vend plus de manière fiable sous 300 €.</strong> Une pénurie de mémoire GDDR6 en 2026 a poussé Nvidia à relancer la carte, et selon GPUPrix (juillet 2026) le neuf coûte de nouveau environ 300 à 380 € — l\'occasion n\'est plus très en dessous. La RX 6700 XT d\'AMD (l\'alternative économique habituelle) se négocie à un prix comparable. Les deux restent les GPU 12 Go les mieux prises en charge pour les LLM locaux si votre budget peut dépasser légèrement 300 € : 12 Go de VRAM font tourner tous les modèles 7B et la plupart des 14B en Q4, et NVIDIA CUDA fonctionne avec Ollama dès l\'installation — sans chasse aux pilotes. Pour rester strictement sous 300 €, la nouvelle Intel Arc B580 12 Go est aujourd\'hui l\'option la plus fiable, avec une installation moins immédiate que CUDA. Vérifiez les annonces actuelles avant d\'acheter — ce marché bouge vite depuis le début de l\'année.',
    toc: [
      { label: 'Meilleur choix : RTX 3060 12 Go d\'occasion', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'Que pouvez-vous faire tourner ?', anchor: '#model-guide' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro:
      'Les prix des GPU pour l\'inférence LLM locale ont fortement bougé en 2026. Une pénurie de mémoire GDDR6 a poussé Nvidia à relancer la RTX 3060 12 Go, et cette hausse a entraîné les prix des cartes 12 Go — neuves comme d\'occasion — bien au-delà des 300 € sur lesquels ce guide était construit. La RTX 3060 12 Go d\'occasion et la RX 6700 XT d\'AMD se négocient désormais toutes deux nettement au-dessus de 300 € — toujours les GPU 12 Go les mieux prises en charge pour les LLM locaux, mais plus un choix économique strict. Les lecteurs qui doivent rester sous 300 € devraient plutôt regarder la nouvelle Intel Arc B580 12 Go.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure GPU à moins de 300 € pour les LLM locaux ?',
        answer: 'La RTX 3060 12 Go d\'occasion reste la GPU 12 Go la mieux prise en charge pour les LLM locaux, mais en novembre 2026 elle ne se vend plus de manière fiable sous 300 €. Pour rester strictement sous 300 €, la nouvelle Intel Arc B580 12 Go (12 Go de VRAM, souvent encore dans le budget selon la disponibilité) est l\'option la plus proche aujourd\'hui ; pour un usage 7B uniquement, une carte 8 Go comme la RTX 2060 Super ou la RX 6600 fonctionne aussi.',
        bullets: [
          'La RTX 3060 12 Go fait toujours tourner Llama 3 8B Q4_K_M à environ 25 tok/s et Qwen 14B Q4_K_M à environ 15 tok/s — la performance n\'a pas changé, seul le prix a grimpé.',
          'La RX 6700 XT 12 Go offre la même capacité VRAM et un prix comparable, mais nécessite toujours ROCm sous Linux — ce n\'est plus une alternative moins chère, juste une option Linux.',
          'L\'Intel Arc B580 12 Go (neuve) est aujourd\'hui le moyen le plus fiable de rester sous 300 € avec 12 Go de VRAM ; l\'installation passe par SYCL/IPEX-LLM, moins immédiate que CUDA.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Alerte prix : la RTX 3060 12 Go et la RX 6700 XT d\'occasion sont désormais bien au-dessus des 300 € de ce guide, à cause de la pénurie de mémoire de 2026',
          'Meilleur support logiciel 12 Go, indépendamment du prix : NVIDIA RTX 3060 12 Go d\'occasion — CUDA fonctionne instantanément avec Ollama et llama.cpp',
          'Encore sous 300 € aujourd\'hui : Intel Arc B580 12 Go (neuve), avec une installation moins immédiate que CUDA',
          'La RTX 3060 12 Go et la RX 6700 XT font toutes deux tourner tous les modèles 7B et la plupart des 13B–14B en Q4 ; aucune carte de ce guide ne convient pour un modèle 70B',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La RTX 3060 12 Go est la GPU 12 Go la mieux prise en charge pour les LLM locaux, mais en novembre 2026 elle coûte nettement plus qu\'avant ; l\'Intel Arc B580 12 Go (neuve) est la meilleure option qui reste sous 300 €.' },
          { type: 'plain-terms', text: 'Les prix des GPU pour l\'IA locale ont flambé en 2026 — le choix classique à 300 € (RTX 3060 12 Go) coûte désormais bien plus, donc vérifiez les annonces actuelles et regardez l\'Arc B580 si votre budget est serré.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix 12 Go : RTX 3060 12 Go d\'occasion (désormais bien au-dessus de 300 €)',
        content: [
          '<strong>La RTX 3060 12 Go d\'occasion reste la GPU 12 Go la mieux prise en charge pour les LLM locaux, mais en novembre 2026 elle ne se vend plus de manière fiable sous 300 €.</strong> Une pénurie de mémoire GDDR6 en 2026 a poussé Nvidia à relancer la carte ; selon GPUPrix (juillet 2026), le neuf coûte à nouveau environ 300 à 380 €, et l\'occasion a suivi la même tendance. Elle fait toujours tourner Mistral Small, Llama 3 8B et Qwen3 8B à 15-20 tokens par seconde, et la plupart des modèles 13B–14B en Q4 — la performance n\'a pas changé, seul le prix a grimpé.',
          'La RTX 3060 gagne sur le logiciel, pas seulement sur la VRAM. Ollama et llama.cpp détectent automatiquement les GPU NVIDIA via CUDA sous Windows et Linux — sans chasse aux pilotes, sans ROCm. La RX 6700 XT d\'AMD atteint la même capacité de 12 Go à un prix comparable — il n\'y a donc plus d\'économie pour compenser le temps de configuration ROCm. Ne la choisissez que si vous préférez déjà Linux/ROCm.',
          'Si votre budget est strictement de 300 €, laissez ces deux cartes de côté pour l\'instant. La nouvelle Intel Arc B580 12 Go est restée plus proche de son prix de lancement de 249 $ — souvent encore dans le budget selon la disponibilité — pour le même plafond de 12 Go, sans la prime du marché de l\'occasion. Elle nécessite le backend SYCL de llama.cpp ou IPEX-LLM plutôt que CUDA, moins immédiat mais fonctionnel. Voir le tableau comparatif ci-dessous.',
          'Quelle que soit la carte 12 Go que vous achetez, évitez la variante 6 Go de la RTX 3060 — elle est identique en apparence dans les annonces, mais ne convient qu\'à des modèles 3B.',
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
          {
            url: 'https://www.amazon.fr/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (neuve)',
            productCategory: 'gpu',
            label: 'Vérifier le prix de l\'Intel Arc B580 12 Go sur Amazon.fr',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 Go vs RX 6700 XT vs Arc B580 pour les LLM locaux',
        content: [
          '<strong>Les trois cartes ont 12 Go de VRAM, la capacité de modèle est donc identique — la vraie décision est le prix contre la maturité logicielle.</strong> En novembre 2026, les deux cartes d\'occasion coûtent toutes deux nettement plus de 300 €, tandis que la nouvelle Intel Arc B580 se trouve régulièrement proche ou sous 300 €. Vérifiez les annonces actuelles avant d\'acheter — ce marché bouge vite depuis le début de l\'année.',
        ],
        columns: ['GPU', 'VRAM', 'Prix actuel', 'Configuration', 'Idéal pour'],
        rows: [
          { GPU: 'RTX 3060 12 Go (occasion)', VRAM: '12 Go', 'Prix actuel': 'env. 330 €+', Configuration: 'CUDA, instantané', 'Idéal pour': 'Meilleur support logiciel — si le budget le permet' },
          { GPU: 'RX 6700 XT (occasion)', VRAM: '12 Go', 'Prix actuel': 'env. 330 €+', Configuration: 'ROCm, plusieurs heures', 'Idéal pour': 'Seulement si vous préférez déjà Linux/AMD' },
          { GPU: 'Arc B580 12 Go (neuve)', VRAM: '12 Go', 'Prix actuel': 'env. 250–290 €', Configuration: 'SYCL/IPEX-LLM', 'Idéal pour': 'Encore sous 300 € aujourd\'hui' },
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
            q: 'La RTX 3060 12 Go est-elle encore sous 300 € en 2026 ?',
            a: 'Non — plus de manière fiable en novembre 2026. Une pénurie de mémoire GDDR6 en 2026 a poussé la RTX 3060 12 Go d\'occasion bien au-dessus de 300 € (le neuf est revenu à environ 300-380 € selon GPUPrix), et la RX 6700 XT se négocie à un prix comparable. Les deux restent les GPU 12 Go les mieux prises en charge pour les LLM locaux si le budget le permet. Pour rester sous 300 €, la nouvelle Intel Arc B580 12 Go est aujourd\'hui l\'option la plus proche.',
          },
          {
            q: 'Pourquoi choisir la RTX 3060 plutôt que la RX 6700 XT si elles coûtent à peu près pareil maintenant ?',
            a: 'La RTX 3060 utilise NVIDIA CUDA, qu\'Ollama et llama.cpp détectent automatiquement sans configuration. La RX 6700 XT nécessite ROCm — généralement plusieurs heures de configuration sous Linux, et non pris en charge sous Windows pour une inférence rapide. En novembre 2026, les deux cartes d\'occasion coûtent à peu près pareil, il n\'y a donc plus d\'économie pour compenser ce temps de configuration — sauf si vous préférez déjà Linux/ROCm.',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ja.webp',
    title: 'RTX 3060 12GB：300ドル以下でローカルLLMに最適なGPUは（2026年版）',
    seoTitle: 'RTX 3060 12GBでローカルLLM 2026：300ドル以下最良GPU',
    metaDescription: '中古RTX 3060 12GBは2026年のメモリ不足で価格が上昇——それでもローカルLLM向け12GB最良GPUです。現在の価格と本当に300ドル以下で買える選択肢を確認してください。',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'ローカルLLM推論向けに最初のGPUを選ぶ予算重視の購入者',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>2026年11月時点で、中古のNVIDIA RTX 3060 12GBはもはや確実に300ドル以下では買えません。</strong> 2026年のGDDR6メモリ不足によりNvidiaがこのカードを再発売し、その価格上昇が中古市場にも波及して、resaleprices.com（2026年11月19日時点）によると中古価格は約350〜360ドルまで上がりました——AMD RX 6700 XTもほぼ同じ価格帯です。予算が300ドルを少し超えられるなら、どちらも依然としてローカルLLM向け最も対応が充実した12GB GPUです：12GBのVRAMで全7Bモデルと大半の14BモデルをQ4で動かせ、NVIDIA CUDAはOllamaで設定不要——ドライバー探しも不要です。厳密に300ドル以下にこだわる場合は、新品のIntel Arc B580 12GB（在庫があれば約250〜290ドル）が現時点で最も近い選択肢ですが、セットアップはCUDAほど簡単ではありません。この市場は2026年を通じて動きが速いため、購入前に現在の価格を確認してください。日本国内の実売価格は販売店や中古店によって異なります——現地の価格もあわせてご確認ください。',
    toc: [
      { label: '最良の選択：中古RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 対 RX 6700 XT', anchor: '#comparison' },
      { label: '何を動かせるか？', anchor: '#model-guide' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro:
      '2026年、ローカルLLM推論向けGPUの価格は大きく動きました。2026年のGDDR6メモリ不足によりNvidiaがRTX 3060 12GBを再発売し、その価格上昇が新品・中古を問わず12GBカードの価格を、本ガイドが前提とする300ドルという水準から大きく引き上げました。中古のNVIDIA RTX 3060 12GBとAMD RX 6700 XTは、現在どちらも中古で約350ドル前後で取引されています（resaleprices.com、2026年11月19日時点）——依然としてローカルLLM向け最良の12GBカードですが、厳密な予算向けの選択肢ではなくなりました。今日300ドル以下にこだわりたい読者は、新品のIntel Arc B580 12GBを検討してください。',
    quickAnswerTop: {
      ja: {
        question: '300ドル以下でローカルLLMを動かすのに最適なGPUは？',
        answer: '中古のRTX 3060 12GBは依然としてローカルLLM向け最も対応が充実した12GB GPUですが、2026年11月時点ではもはや確実に300ドル以下では買えません。厳密に300ドル以下にこだわる場合は、新品のIntel Arc B580 12GB（12GB VRAM、在庫があれば約250〜290ドル）が現時点で最も近い選択肢です。7B専用であれば、8GBのRTX 2060 Super（約200ドル）やRX 6600（約230ドル）も使えます。',
        bullets: [
          'RTX 3060 12GBは依然としてLlama 3 8B Q4_K_Mを約25 tok/s、Qwen 14B Q4_K_Mを約15 tok/sで動作——性能は変わらず、カード自体の価格が約350〜360ドル（resaleprices.com、2026年11月19日時点）に上がりました。',
          'RX 6700 XT 12GBは同じVRAM容量と同程度の価格（約352ドル）ですが、LinuxでのROCmが依然として必要——もはや安価な代替案ではなく、Linux専用の選択肢になりました。',
          'Intel Arc B580 12GB（新品、在庫があれば約250〜290ドル）は、12GB VRAMを300ドル以下で確保する最も確実な方法ですが、CUDAほど簡単ではないSYCL/IPEX-LLMでのセットアップが必要です。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '価格の注意：中古のRTX 3060 12GBとRX 6700 XTは、2026年のメモリ不足により約350〜360ドル（resaleprices.com、2026年11月19日時点）まで上昇し、本ガイドの300ドル予算を大きく超えています',
          '価格を問わず最も充実した12GBサポート：NVIDIA RTX 3060 12GB——CUDAはOllamaとllama.cppで即座に動作',
          '今日実際に300ドル以下で買えるのは：Intel Arc B580 12GB（新品、約250〜290ドル）——ただしセットアップはCUDAほど簡単ではない',
          'RTX 3060 12GBとRX 6700 XTはどちらも全7Bモデルと大半の13B〜14BモデルをQ4で動かせる；このガイドのどのGPUも70Bモデルには対応しない',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'RTX 3060 12GBはローカルLLM向け最も対応が充実した12GB GPUですが、2026年11月時点で中古価格は約350〜360ドルに上昇しました；今も300ドル以下に収まる最良の選択肢はIntel Arc B580 12GB（新品、約250〜290ドル）です。' },
          { type: 'plain-terms', text: 'ローカルAI向けGPUの価格は2026年に急上昇しました——定番の300ドル候補だったRTX 3060 12GBは今は約350ドルに近いので、現在の価格を確認し、予算が厳しい場合はArc B580を検討してください。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最良の12GB選択：中古NVIDIA RTX 3060 12GB（現在は約350ドル以上、300ドルを超える）',
        content: [
          '<strong>中古のNVIDIA RTX 3060 12GBは依然としてローカルLLM向け最も対応が充実した12GB GPUですが、2026年11月時点ではもはや確実に300ドル以下では買えません。</strong> 2026年のGDDR6メモリ不足によりNvidiaが新品のRTX 3060 12GBを再発売し、その価格上昇が中古市場にも波及しました：resaleprices.com（2026年11月19日時点）によると、中古の平均価格は356ドル（337〜363ドルの範囲、過去30日で5.4%上昇）です。性能は変わらず、Mistral Small、Llama 3 8B、Qwen3 8Bを15〜20トークン毎秒で動かし、大半の13B〜14BモデルもQ4で動作します——変わったのは価格だけです。',
          'RTX 3060はVRAMだけでなくソフトウェアでも優れています。OllamaとLlama.cppはWindowsとLinuxの両方でNVIDIA GPUをCUDA経由で自動検出します——ドライバー探しもROCmも不要です。AMD RX 6700 XTは同じ12GB容量を実現しており、この確認時点での中古価格（resaleprices.com、2026年11月19日時点、平均352ドル）もほぼ同じです——もはやROCmの設定時間を埋め合わせる価格面のメリットはありません。すでにLinux/ROCmを好む場合にのみ選んでください。',
          '予算が厳密に300ドルなら、この2枚は今は見送りましょう。新品のIntel Arc B580 12GBは249ドルの販売価格に近いままで、在庫があれば典型的に250〜290ドル——同じ12GBの上限を、中古市場の上乗せなしで得られます。CUDAではなくllama.cppのSYCLバックエンドかIPEX-LLMが必要で、簡単さは劣りますが動作します。下記の比較表を参照してください。',
          'どのカードを購入するにせよ、RTX 3060の6GB版は避けてください——出品では見分けがつきませんが、3Bモデルしか動作しません。',
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
            label: 'ソフマップで中古RTX 3060 12GBの価格を確認する',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでRX 6700 XTの価格を確認する',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB（新品）',
            productCategory: 'gpu',
            label: 'Amazon.co.jpでIntel Arc B580 12GBの価格を確認する',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB 対 RX 6700 XT 対 Arc B580 ローカルLLM比較',
        content: [
          '<strong>3枚とも12GBのVRAMを持つため、モデル容量は同じです——本当の決め手は価格とソフトウェアの成熟度です。</strong> 2026年11月19日時点（resaleprices.com）で、2枚の中古カードはどちらも350〜360ドルと本ガイドの300ドル予算を超えていますが、新品のIntel Arc B580は300ドル前後またはそれ以下で見つかることが多くなっています。この市場は2026年を通じて動きが速いため、購入前に現在の価格を確認してください。',
        ],
        columns: ['GPU', 'VRAM', '現在の価格', '設定', '最適な用途'],
        rows: [
          { GPU: 'RTX 3060 12GB（中古）', VRAM: '12GB', 現在の価格: '約356ドル', 設定: 'CUDA、即座', 最適な用途: '最も充実したソフト対応——予算が許せば' },
          { GPU: 'RX 6700 XT（中古）', VRAM: '12GB', 現在の価格: '約352ドル', 設定: 'ROCm、数時間', 最適な用途: 'すでにLinux/AMDを好む場合のみ' },
          { GPU: 'Arc B580 12GB（新品）', VRAM: '12GB', 現在の価格: '約250〜290ドル', 設定: 'SYCL/IPEX-LLM', 最適な用途: '今も300ドル以下で買える' },
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
            q: 'RTX 3060 12GBは2026年も300ドル以下で買えますか？',
            a: 'いいえ——2026年11月時点ではもはや確実ではありません。2026年のGDDR6メモリ不足により、中古のRTX 3060 12GBは約350〜360ドル（resaleprices.com、2026年11月19日時点）まで上昇し、RX 6700 XTもほぼ同じ価格です。予算が許せば、どちらも依然としてローカルLLM向け最も対応が充実した12GBカードです。300ドル以下にこだわるなら、新品のIntel Arc B580 12GB（在庫があれば約250〜290ドル）が現時点で最も近い選択肢です。',
          },
          {
            q: '今では価格がほぼ同じなのに、なぜRX 6700 XTよりRTX 3060を選ぶのですか？',
            a: 'RTX 3060はNVIDIA CUDAを使用しており、OllamaとLlama.cppが設定不要で自動検出します。RX 6700 XTはROCmが必要で、通常Linuxで数時間の設定が必要であり、Windowsでは高速推論に対応していません。2026年11月時点で両方のカードの中古価格はほぼ同じであり、すでにLinux/ROCmを好む場合を除けば、その設定時間を埋め合わせる節約分はもはやありません。',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-zh.webp',
    title: 'RTX 3060 12GB：300美元以下本地LLM最佳GPU（2026年）',
    seoTitle: 'RTX 3060 12GB本地LLM 2026：300美元以下最佳GPU',
    metaDescription: '二手RTX 3060 12GB因2026年显存短缺价格大涨——仍是本地LLM最佳12GB显卡。查看当前价格，以及真正300美元以下的替代方案。',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: '为本地LLM推理选择第一张显卡的预算型买家',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>截至2026年11月，二手NVIDIA RTX 3060 12GB已不再能可靠地以300美元以下购得。</strong> 2026年的GDDR6显存短缺促使Nvidia重新发售这款显卡，这次涨价也波及了二手市场：据resaleprices.com（2026年11月19日数据），二手均价已升至约350至360美元——AMD RX 6700 XT的价格也紧随其后，基本相同。如果预算能稍微超过300美元，这两款仍是本地LLM软件支持最完善的12GB显卡：12GB显存可在Q4下运行所有7B模型和大多数14B模型，NVIDIA CUDA与Ollama开箱即用——无需寻找驱动。如果必须严格控制在300美元以内，新款Intel Arc B580 12GB（有货时约250至290美元）目前是最接近的选择，但其配置不如CUDA那样简便。购买前请务必查看当前价格——这个市场在2026年全年波动都很快。',
    toc: [
      { label: '最佳选择：二手RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 对比 RX 6700 XT', anchor: '#comparison' },
      { label: '能运行什么模型？', anchor: '#model-guide' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    intro:
      '2026年，本地LLM推理用显卡的价格出现了剧烈波动。2026年的GDDR6显存短缺促使Nvidia重新发售RTX 3060 12GB，这波涨价把12GB显卡的新品和二手价格都推高到远超本指南原本设定的300美元门槛。二手的NVIDIA RTX 3060 12GB和AMD RX 6700 XT目前在转售市场上都约为350美元左右（resaleprices.com，2026年11月19日数据）——它们仍是本地LLM软件支持最完善的12GB显卡，只是已不再是严格意义上的预算之选。如果你今天必须控制在300美元以内，应该转而考虑新款Intel Arc B580 12GB。',
    quickAnswerTop: {
      zh: {
        question: '300美元以下运行本地LLM的最佳GPU是什么？',
        answer: '二手RTX 3060 12GB仍是本地LLM软件支持最完善的12GB显卡，但截至2026年11月，它已不再能可靠地以300美元以下购得。如果必须严格控制在300美元以内，新款Intel Arc B580 12GB（12GB显存，有货时约250至290美元）是目前最接近的选择；如果只需运行7B模型，8GB的RTX 2060 Super（约200美元）或RX 6600（约230美元）也可以。',
        bullets: [
          'RTX 3060 12GB仍能以约25 tok/s运行Llama 3 8B Q4_K_M，以约15 tok/s运行Qwen 14B Q4_K_M——性能没有变化，只是显卡本身现在要贵得多（约350至360美元，resaleprices.com，2026年11月19日数据）。',
          'RX 6700 XT 12GB拥有相同的显存容量和相近的价格（约352美元），但仍需要在Linux上配置ROCm——它已不再是更便宜的替代方案，只是一个仅限Linux的选项。',
          'Intel Arc B580 12GB（新品，有货时约250至290美元）目前是在300美元以内获得12GB显存最可靠的方式；但需要通过SYCL/IPEX-LLM配置，不如CUDA简便。',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '价格提醒：受2026年显存短缺影响，二手RTX 3060 12GB和RX 6700 XT的均价已升至约350至360美元（resaleprices.com，2026年11月19日数据），远超本指南设定的300美元预算',
          '不论价格如何，软件支持最完善的12GB显卡：NVIDIA RTX 3060 12GB——CUDA可与Ollama和llama.cpp即时配合使用',
          '今天真正能在300美元以内买到的：Intel Arc B580 12GB（新品，约250至290美元），但配置不如CUDA简便',
          'RTX 3060 12GB和RX 6700 XT都能在Q4下运行所有7B模型和大多数13B至14B模型；本指南中的显卡都无法容纳70B模型',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'RTX 3060 12GB是本地LLM软件支持最完善的12GB显卡，但截至2026年11月，其二手价格已升至约350至360美元；Intel Arc B580 12GB（新品，约250至290美元）是目前仍能控制在300美元以内的最佳选择。' },
          { type: 'plain-terms', text: '2026年本地AI用显卡价格大幅上涨——曾经300美元级的经典之选RTX 3060 12GB现在接近350美元，请查看当前价格，预算紧张时可考虑Arc B580。' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳12GB选择：二手NVIDIA RTX 3060 12GB（现价已超300美元）',
        content: [
          '<strong>二手NVIDIA RTX 3060 12GB仍是本地LLM软件支持最完善的12GB显卡，但截至2026年11月，它已不再能可靠地以300美元以下购得。</strong> 2026年的GDDR6显存短缺促使Nvidia重新发售新款RTX 3060 12GB，这波涨价也波及了二手市场：据resaleprices.com（2026年11月19日数据），二手均价已达356美元（区间337至363美元，30天内上涨5.4%）。它仍能以每秒15至20个token的速度运行Mistral Small、Llama 3 8B和Qwen3 8B，并能在Q4下运行大多数13B至14B模型——性能没有变化，变的只是价格。',
          'RTX 3060的优势不仅在于显存，更在于软件生态。Ollama和llama.cpp在Windows和Linux上都能通过CUDA自动检测NVIDIA显卡——无需寻找驱动，无需配置ROCm。AMD RX 6700 XT达到了同样的12GB容量，截至本次核实其二手价格也基本相同（resaleprices.com，2026年11月19日数据，均价352美元）——因此已没有价格优势来抵消ROCm的配置时间。只有在你本身就偏好Linux/ROCm时才选择它。',
          '如果预算必须严格控制在300美元以内，这两款现在都不是理想选择。新款Intel Arc B580 12GB的价格更接近其249美元的建议零售价——有货时通常约250至290美元——提供同样的12GB上限，且没有二手市场的溢价。它需要通过llama.cpp的SYCL后端或IPEX-LLM配置，而不是CUDA，操作上不如CUDA简便，但可以运行。详见下方对比表。',
          '无论购买哪一张12GB显卡，都要避免RTX 3060的6GB版本——它在商品列表中看起来完全一样，但只能运行3B模型。',
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
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB（新品）',
            productCategory: 'gpu',
            label: '在Amazon查看Intel Arc B580 12GB价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB 对比 RX 6700 XT 对比 Arc B580：本地LLM',
        content: [
          '<strong>三张显卡都配备12GB显存，因此模型容量相同——真正的决定因素是价格与软件成熟度。</strong> 截至2026年11月19日（resaleprices.com），两张二手显卡的价格都已明显超过300美元，而新款Intel Arc B580则经常能在300美元左右或以下买到。购买前请查看当前价格——这个市场在2026年全年波动都很快。',
        ],
        columns: ['显卡', '显存', '当前价格', '配置', '最适合'],
        rows: [
          { 显卡: 'RTX 3060 12GB（二手）', 显存: '12GB', 当前价格: '约356美元', 配置: 'CUDA，即时可用', 最适合: '软件支持最佳——预算允许时' },
          { 显卡: 'RX 6700 XT（二手）', 显存: '12GB', 当前价格: '约352美元', 配置: 'ROCm，需数小时', 最适合: '仅适合已偏好Linux/AMD的用户' },
          { 显卡: 'Arc B580 12GB（新品）', 显存: '12GB', 当前价格: '约250至290美元', 配置: 'SYCL/IPEX-LLM', 最适合: '目前仍在300美元以内' },
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
            q: '2026年RTX 3060 12GB还能以300美元以下买到吗？',
            a: '不能——截至2026年11月已不再能可靠地买到。2026年的GDDR6显存短缺把二手RTX 3060 12GB推高到约350至360美元（resaleprices.com，2026年11月19日数据），RX 6700 XT的价格也紧随其后。如果预算允许，两者仍是本地LLM软件支持最完善的12GB显卡。如果必须控制在300美元以内，新款Intel Arc B580 12GB（有货时约250至290美元）目前是最接近的选择。',
          },
          {
            q: '如果两者现在价格差不多，为什么要选RTX 3060而不是RX 6700 XT？',
            a: 'RTX 3060使用NVIDIA CUDA，Ollama和llama.cpp会自动检测，无需任何配置。RX 6700 XT需要ROCm——在Linux上通常需要数小时配置，且在Windows上不支持快速推理。截至2026年11月，两张二手显卡的价格已基本相同，因此除非你本身就偏好Linux/ROCm，否则已经没有省下的钱能弥补这段配置时间了。',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-es.webp',
    title: 'RTX 3060 12GB: ¿mejor GPU por menos de 300 $ para LLMs locales (2026)',
    seoTitle: 'RTX 3060 12GB para LLM local 2026: mejor GPU bajo 300 $',
    metaDescription: 'La RTX 3060 12GB de segunda mano ahora cuesta mucho más (escasez de memoria 2026) — sigue siendo la mejor GPU de 12 GB para LLMs locales. Ve el precio actual y la alternativa real bajo 300 $.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores con presupuesto ajustado que eligen su primera GPU para inferencia de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Desde noviembre de 2026, la RTX 3060 12GB de segunda mano ya no se vende de forma fiable por menos de 300 $.</strong> Una escasez de memoria GDDR6 en 2026 llevó a Nvidia a relanzar la tarjeta, y esa subida arrastró también al mercado de segunda mano: según resaleprices.com (19 de noviembre de 2026), el precio usado promedio ronda los 350-360 $ — la AMD RX 6700 XT se mueve a un precio muy similar. Ambas siguen siendo las GPU de 12 GB mejor compatibles para LLMs locales si tu presupuesto puede superar un poco los 300 $: 12 GB de VRAM ejecutan todos los modelos 7B y la mayoría de los 14B en Q4, y NVIDIA CUDA funciona con Ollama nada más instalarlo — sin buscar drivers. Si necesitas quedarte estrictamente bajo 300 $, la nueva Intel Arc B580 12GB (unos 250-290 $ cuando hay stock) es hoy la opción más cercana, aunque su configuración es menos inmediata que CUDA. Comprueba los precios actuales antes de comprar — los precios locales en España y Latinoamérica pueden variar según impuestos y disponibilidad.',
    toc: [
      { label: 'Mejor opción: RTX 3060 12GB de segunda mano', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: '¿Qué puedes ejecutar?', anchor: '#model-guide' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    intro:
      'Los precios de GPU para inferencia de LLM local se movieron con fuerza en 2026. Una escasez de memoria GDDR6 llevó a Nvidia a relanzar la RTX 3060 12GB, y esa subida arrastró los precios de las tarjetas de 12 GB — nuevas y de segunda mano — muy por encima de los 300 $ en los que se basa esta guía. La RTX 3060 12GB de segunda mano y la AMD RX 6700 XT ahora rondan ambas los 350 $ en el mercado de reventa (resaleprices.com, 19 de noviembre de 2026) — siguen siendo las mejores GPU de 12 GB para LLMs locales, solo que ya no son una opción de presupuesto estricto. Si necesitas quedarte bajo 300 $ hoy, mira la nueva Intel Arc B580 12GB.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor GPU por menos de 300 $ para ejecutar LLMs locales?',
        answer: 'La RTX 3060 12GB de segunda mano sigue siendo la GPU de 12 GB mejor compatible para LLMs locales, pero desde noviembre de 2026 ya no se vende de forma fiable por menos de 300 $. Si necesitas quedarte estrictamente bajo 300 $, la nueva Intel Arc B580 12GB (12 GB de VRAM, a menudo aún dentro del presupuesto según disponibilidad) es hoy la opción más cercana; para uso solo con modelos 7B, una tarjeta de 8 GB como la RTX 2060 Super (~200 $) o la RX 6600 (~230 $) también funciona.',
        bullets: [
          'La RTX 3060 12GB sigue ejecutando Llama 3 8B Q4_K_M a unos 25 tok/s y Qwen 14B Q4_K_M a unos 15 tok/s — el rendimiento no ha cambiado, solo el precio ha subido.',
          'La RX 6700 XT 12GB iguala la capacidad de VRAM y el precio (~352 $ de segunda mano), pero sigue necesitando ROCm en Linux — ya no es una alternativa más barata, solo una opción para Linux.',
          'La Intel Arc B580 12GB (nueva, ~250-290 $ cuando hay stock) es hoy la forma más fiable de quedarte bajo 300 $ con 12 GB de VRAM; espera una configuración vía SYCL/IPEX-LLM, no tan simple como CUDA.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Alerta de precio: la RTX 3060 12GB y la RX 6700 XT de segunda mano ahora promedian 350-360 $ (resaleprices.com, 19 de noviembre de 2026) — una escasez de memoria en 2026 las llevó muy por encima del presupuesto de 300 $ de esta guía',
          'Mejor compatibilidad de 12 GB, sin importar el precio: NVIDIA RTX 3060 12GB de segunda mano — CUDA funciona al instante con Ollama y llama.cpp',
          'La que sí está bajo 300 $ hoy: Intel Arc B580 12GB (nueva, ~250-290 $), aunque su configuración es menos inmediata que CUDA',
          'La RTX 3060 12GB y la RX 6700 XT ejecutan todos los modelos 7B y la mayoría de 13B–14B en Q4; ninguna GPU de esta guía soporta un modelo 70B',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La RTX 3060 12GB es la GPU de 12 GB mejor compatible para LLMs locales, pero desde noviembre de 2026 cuesta unos 350-360 $ de segunda mano; la Intel Arc B580 12GB (nueva, ~250-290 $) es la mejor opción que aún queda bajo 300 $.' },
          { type: 'plain-terms', text: 'Los precios de GPU para IA local se dispararon en 2026 — la elección clásica de 300 $ (RTX 3060 12GB) ahora cuesta cerca de 350 $, así que revisa los precios actuales y considera la Arc B580 si tu presupuesto es ajustado.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción de 12 GB: RTX 3060 12GB de segunda mano (ahora por encima de 300 $)',
        content: [
          '<strong>La RTX 3060 12GB de segunda mano sigue siendo la GPU de 12 GB mejor compatible para LLMs locales, pero desde noviembre de 2026 ya no se vende de forma fiable por menos de 300 $.</strong> Una escasez de memoria GDDR6 en 2026 llevó a Nvidia a relanzar nuevas unidades de la RTX 3060 12GB, y esa subida arrastró también al mercado de segunda mano: resaleprices.com sitúa el precio usado promedio en 356 $ (rango 337-363 $, +5,4% en 30 días) a 19 de noviembre de 2026. Sigue ejecutando Mistral Small, Llama 3 8B y Qwen3 8B a 15-20 tokens por segundo, y la mayoría de los modelos 13B–14B en Q4 — el rendimiento no ha cambiado, solo el precio.',
          'La RTX 3060 gana por el software, no solo por la VRAM. Ollama y llama.cpp detectan las GPU NVIDIA vía CUDA automáticamente en Windows y Linux — sin buscar drivers, sin ROCm. La AMD RX 6700 XT iguala esa capacidad de 12 GB y cuesta prácticamente lo mismo de segunda mano (352 $ de media, resaleprices.com, 19 de noviembre de 2026) — ya no hay ahorro que compense el tiempo de configuración de ROCm. Elígela solo si ya prefieres Linux/ROCm.',
          'Si tu presupuesto es estrictamente 300 $, deja estas dos de lado por ahora. La nueva Intel Arc B580 12GB se ha mantenido más cerca de su precio de lanzamiento de 249 $ — normalmente 250-290 $ cuando hay stock — con el mismo techo de 12 GB, sin la prima del mercado de segunda mano. Necesita el backend SYCL de llama.cpp o IPEX-LLM en lugar de CUDA, menos inmediato pero funcional. Ve la tabla comparativa a continuación.',
          'Compres la tarjeta de 12 GB que compres, evita la variante de 6 GB de la RTX 3060 — es idéntica en los anuncios, pero solo sirve para modelos 3B.',
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
          {
            url: 'https://www.amazon.es/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (nueva)',
            productCategory: 'gpu',
            label: 'Consultar el precio de la Intel Arc B580 12GB en Amazon.es',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT vs Arc B580 para LLMs locales',
        content: [
          '<strong>Las tres tarjetas tienen 12 GB de VRAM, así que la capacidad de modelo es idéntica — la decisión real es precio frente a madurez del software.</strong> A 19 de noviembre de 2026 (resaleprices.com), las dos tarjetas de segunda mano cuestan ambas 350-360 $ — por encima del presupuesto de 300 $ de esta guía — mientras que la nueva Intel Arc B580 se encuentra regularmente cerca o por debajo de 300 $. Consulta los precios actuales antes de comprar — este mercado se ha movido rápido durante todo el año.',
        ],
        columns: ['GPU', 'VRAM', 'Precio actual', 'Configuración', 'Ideal para'],
        rows: [
          { GPU: 'RTX 3060 12GB (usada)', VRAM: '12 GB', 'Precio actual': '~356 $', Configuración: 'CUDA, instantáneo', 'Ideal para': 'Mejor compatibilidad de software — si el presupuesto lo permite' },
          { GPU: 'RX 6700 XT (usada)', VRAM: '12 GB', 'Precio actual': '~352 $', Configuración: 'ROCm, horas', 'Ideal para': 'Solo si ya prefieres Linux/AMD' },
          { GPU: 'Arc B580 12GB (nueva)', VRAM: '12 GB', 'Precio actual': '~250-290 $', Configuración: 'SYCL/IPEX-LLM', 'Ideal para': 'La que sí está bajo 300 $ hoy' },
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
            q: '¿Sigue la RTX 3060 12GB por debajo de 300 $ en 2026?',
            a: 'No — ya no de forma fiable desde noviembre de 2026. Una escasez de memoria GDDR6 en 2026 llevó la RTX 3060 12GB de segunda mano muy por encima de 300 $ (promedio de 356 $, resaleprices.com, 19 de noviembre de 2026), y la RX 6700 XT se mueve a un precio muy similar. Ambas siguen siendo las mejores GPU de 12 GB para LLMs locales si el presupuesto lo permite. Si necesitas quedarte bajo 300 $, la nueva Intel Arc B580 12GB (unos 250-290 $ cuando hay stock) es hoy la opción más cercana.',
          },
          {
            q: '¿Por qué elegir la RTX 3060 en vez de la RX 6700 XT si ahora cuestan más o menos lo mismo?',
            a: 'La RTX 3060 usa NVIDIA CUDA, que Ollama y llama.cpp detectan automáticamente sin configuración. La RX 6700 XT necesita ROCm — normalmente horas de configuración en Linux, y sin soporte en Windows para inferencia rápida. Desde noviembre de 2026 ambas tarjetas de segunda mano cuestan prácticamente lo mismo, así que ya no hay un ahorro que compense ese tiempo de configuración, salvo que ya prefieras Linux/ROCm.',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-pt.webp',
    title: 'RTX 3060 12GB: Melhor GPU Abaixo de US$ 300 para LLMs Locais (2026)',
    seoTitle: 'RTX 3060 12GB para LLM Local 2026: Melhor GPU Abaixo de US$ 300',
    metaDescription: 'A RTX 3060 12GB usada agora custa muito mais (escassez de memória 2026) — ainda a melhor GPU de 12GB para LLMs locais. Veja o preço atual e a alternativa real abaixo de US$ 300.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'Compradores com orçamento limitado escolhendo a primeira GPU para inferência de LLM local',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>Desde novembro de 2026, a RTX 3060 12GB usada não é mais vendida de forma confiável abaixo de US$ 300.</strong> Uma escassez de memória GDDR6 em 2026 levou a Nvidia a relançar a placa, e essa alta também afetou o mercado de usados: segundo a resaleprices.com (19 de novembro de 2026), o preço médio usado agora é de cerca de US$ 350-360 — a AMD RX 6700 XT está num preço bem parecido. As duas continuam sendo as GPUs de 12GB com melhor suporte para LLMs locais se o seu orçamento puder passar um pouco de US$ 300: 12GB de VRAM rodam todos os modelos 7B e a maioria dos modelos 14B em Q4, e a NVIDIA CUDA funciona com o Ollama assim que você instala — sem precisar caçar drivers. Se você precisa ficar estritamente abaixo de US$ 300, a nova Intel Arc B580 12GB (cerca de US$ 250-290 quando em estoque) é a opção mais próxima hoje, embora sua configuração seja menos direta que a CUDA. Confira os preços atuais antes de comprar — os preços no Brasil podem variar bastante devido a impostos de importação.',
    toc: [
      { label: 'Melhor Escolha: RTX 3060 12GB Usada', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'O Que Você Consegue Rodar?', anchor: '#model-guide' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leituras Relacionadas', anchor: '#related' },
    ],
    intro:
      'Os preços de GPU para inferência de LLM local se moveram bastante em 2026. Uma escassez de memória GDDR6 levou a Nvidia a relançar a RTX 3060 12GB, e essa alta empurrou os preços de placas de 12GB — novas e usadas — bem além dos US$ 300 em que este guia se baseava. A RTX 3060 12GB usada e a AMD RX 6700 XT agora custam cerca de US$ 350 no mercado de usados (resaleprices.com, 19 de novembro de 2026) — ainda as melhores placas de 12GB para LLMs locais, só que não são mais uma escolha de orçamento estrito. Quem precisa ficar abaixo de US$ 300 hoje deve olhar para a nova Intel Arc B580 12GB.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor GPU abaixo de US$ 300 para rodar LLMs locais?',
        answer: 'A RTX 3060 12GB usada ainda é a GPU de 12GB com melhor suporte para LLMs locais, mas desde novembro de 2026 ela não é mais vendida de forma confiável abaixo de US$ 300. Se você precisa ficar estritamente abaixo de US$ 300, a nova Intel Arc B580 12GB (12GB de VRAM, muitas vezes ainda dentro do orçamento dependendo do estoque) é a opção mais próxima hoje; para uso só com modelos 7B, uma placa de 8GB como a RTX 2060 Super (~US$ 200) ou a RX 6600 (~US$ 230) também funciona.',
        bullets: [
          'A RTX 3060 12GB ainda roda o Llama 3 8B Q4_K_M a cerca de 25 tok/s e o Qwen 14B Q4_K_M a cerca de 15 tok/s — o desempenho não mudou, só o preço subiu bastante.',
          'A RX 6700 XT 12GB tem a mesma capacidade de VRAM e um preço parecido (~US$ 352 usada), mas ainda exige ROCm no Linux — não é mais uma alternativa mais barata, só uma opção para Linux.',
          'A Intel Arc B580 12GB (nova, ~US$ 250-290 quando em estoque) é hoje o jeito mais confiável de ficar abaixo de US$ 300 com 12GB de VRAM; espere uma configuração via SYCL/IPEX-LLM, não tão simples quanto a CUDA.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Alerta de preço: a RTX 3060 12GB e a RX 6700 XT usadas agora custam em média US$ 350-360 (resaleprices.com, 19 de novembro de 2026) — uma escassez de memória em 2026 as levou bem acima do orçamento de US$ 300 deste guia',
          'Melhor suporte de 12GB, independente do preço: NVIDIA RTX 3060 12GB usada — a CUDA funciona instantaneamente com Ollama e llama.cpp',
          'A que realmente fica abaixo de US$ 300 hoje: Intel Arc B580 12GB (nova, ~US$ 250-290), embora a configuração seja menos direta que a CUDA',
          'A RTX 3060 12GB e a RX 6700 XT rodam todos os modelos 7B e a maioria dos 13B–14B em Q4; nenhuma GPU deste guia comporta um modelo 70B',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A RTX 3060 12GB é a GPU de 12GB com melhor suporte para LLMs locais, mas desde novembro de 2026 ela custa cerca de US$ 350-360 usada; a Intel Arc B580 12GB (nova, ~US$ 250-290) é a melhor opção que ainda fica abaixo de US$ 300.' },
          { type: 'plain-terms', text: 'Os preços de GPU para IA local dispararam em 2026 — a escolha clássica de US$ 300 (RTX 3060 12GB) agora custa perto de US$ 350, então confira os preços atuais e considere a Arc B580 se o orçamento estiver apertado.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha de 12GB: NVIDIA RTX 3060 12GB Usada (agora acima de US$ 300)',
        content: [
          '<strong>A RTX 3060 12GB usada ainda é a GPU de 12GB com melhor suporte para LLMs locais, mas desde novembro de 2026 ela não é mais vendida de forma confiável abaixo de US$ 300.</strong> Uma escassez de memória GDDR6 em 2026 levou a Nvidia a relançar novas unidades da RTX 3060 12GB, e essa alta também afetou o mercado de usados: a resaleprices.com situa o preço médio usado em US$ 356 (faixa de US$ 337-363, alta de 5,4% em 30 dias) em 19 de novembro de 2026. Ela ainda roda o Mistral Small, o Llama 3 8B e o Qwen3 8B a 15-20 tokens por segundo, e a maioria dos modelos 13B–14B em Q4 — o desempenho não mudou, só o preço.',
          'A RTX 3060 vence pelo software, não só pela VRAM. O Ollama e o llama.cpp detectam GPUs NVIDIA via CUDA automaticamente no Windows e no Linux — sem caçar drivers, sem ROCm. A AMD RX 6700 XT iguala essa capacidade de 12GB e custa praticamente o mesmo usada (média de US$ 352, resaleprices.com, 19 de novembro de 2026) — então não há mais economia que compense o tempo de configuração do ROCm. Escolha-a apenas se você já preferir Linux/ROCm.',
          'Se o seu orçamento é estritamente US$ 300, deixe essas duas de lado por agora. A nova Intel Arc B580 12GB ficou mais próxima do seu preço de lançamento de US$ 249 — normalmente US$ 250-290 quando em estoque — com o mesmo limite de 12GB, sem o ágio do mercado de usados. Ela precisa do backend SYCL do llama.cpp ou do IPEX-LLM em vez de CUDA, menos direto mas funcional. Veja a tabela comparativa abaixo.',
          'Seja qual for a placa de 12GB que você comprar, evite a variante de 6GB da RTX 3060 — ela parece idêntica nos anúncios, mas só comporta modelos 3B.',
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
          {
            url: 'https://www.amazon.com.br/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (nova)',
            productCategory: 'gpu',
            label: 'Confira o preço da Intel Arc B580 12GB na Amazon.com.br',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB vs RX 6700 XT vs Arc B580 para LLMs Locais',
        content: [
          '<strong>As três placas têm 12GB de VRAM, então a capacidade de modelo é idêntica — a decisão real é preço contra maturidade do software.</strong> Em 19 de novembro de 2026 (resaleprices.com), as duas placas usadas custam ambas US$ 350-360 — acima do orçamento de US$ 300 deste guia — enquanto a nova Intel Arc B580 é encontrada regularmente perto ou abaixo de US$ 300. Confira os preços atuais antes de comprar — esse mercado se move rápido durante todo o ano.',
        ],
        columns: ['GPU', 'VRAM', 'Preço Atual', 'Configuração', 'Melhor para'],
        rows: [
          { GPU: 'RTX 3060 12GB (usada)', VRAM: '12GB', 'Preço Atual': '~US$ 356', Configuração: 'CUDA, instantânea', 'Melhor para': 'Melhor suporte de software — se o orçamento permitir' },
          { GPU: 'RX 6700 XT (usada)', VRAM: '12GB', 'Preço Atual': '~US$ 352', Configuração: 'ROCm, horas', 'Melhor para': 'Só se você já preferir Linux/AMD' },
          { GPU: 'Arc B580 12GB (nova)', VRAM: '12GB', 'Preço Atual': '~US$ 250-290', Configuração: 'SYCL/IPEX-LLM', 'Melhor para': 'A que realmente fica abaixo de US$ 300' },
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
            q: 'A RTX 3060 12GB ainda fica abaixo de US$ 300 em 2026?',
            a: 'Não — já não de forma confiável desde novembro de 2026. Uma escassez de memória GDDR6 em 2026 levou a RTX 3060 12GB usada bem acima de US$ 300 (média de US$ 356, resaleprices.com, 19 de novembro de 2026), e a RX 6700 XT está num preço bem parecido. As duas continuam sendo as melhores placas de 12GB para LLMs locais se o orçamento permitir. Se você precisa ficar abaixo de US$ 300, a nova Intel Arc B580 12GB (cerca de US$ 250-290 quando em estoque) é a opção mais próxima hoje.',
          },
          {
            q: 'Por que escolher a RTX 3060 em vez da RX 6700 XT se agora elas custam praticamente o mesmo?',
            a: 'A RTX 3060 usa CUDA da NVIDIA, que o Ollama e o llama.cpp detectam automaticamente sem configuração. A RX 6700 XT precisa de ROCm — normalmente horas de configuração no Linux, e sem suporte no Windows para inferência rápida. Desde novembro de 2026 as duas placas usadas custam praticamente o mesmo, então não existe mais uma economia que compense esse tempo de configuração — a menos que você já prefira Linux/ROCm.',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ar.webp',
    title: 'RTX 3060 12GB: أفضل بطاقة رسومات بأقل من 300 دولار للنماذج اللغوية المحلية (2026)',
    seoTitle: 'RTX 3060 12GB للنماذج اللغوية المحلية 2026: الأفضل بأقل من 300 دولار',
    metaDescription: 'أصبحت بطاقة RTX 3060 12GB المستعملة أغلى بكثير (نقص الذاكرة 2026) — لكنها تبقى أفضل بطاقة 12 جيجابايت للنماذج اللغوية المحلية. تحقق من السعر الحالي والبديل الحقيقي بأقل من 300 دولار.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: 'المشترون ذوو الميزانية المحدودة الذين يختارون أول بطاقة رسومات لاستدلال النماذج اللغوية المحلية',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>منذ نوفمبر 2026، لم تعد بطاقة NVIDIA RTX 3060 12GB المستعملة تُباع بشكل موثوق بأقل من 300 دولار.</strong> دفع نقص في ذاكرة GDDR6 عام 2026 شركة Nvidia إلى إعادة إطلاق البطاقة، وامتد ارتفاع السعر إلى السوق المستعملة أيضًا: يضع موقع resaleprices.com (19 نوفمبر 2026) متوسط السعر المستعمل عند نحو 350-360 دولارًا — وتسير AMD RX 6700 XT بسعر مقارب جدًا. تبقى كلتا البطاقتين الأفضل دعمًا بسعة 12 جيجابايت للنماذج اللغوية المحلية إذا سمحت ميزانيتك بتجاوز 300 دولار قليلًا: توفر 12 جيجابايت VRAM تشغيل كل نموذج 7B ومعظم نماذج 14B بصيغة Q4، وتعمل NVIDIA CUDA مع Ollama فور التثبيت — دون البحث عن تعريفات. إذا احتجت إلى البقاء تحت 300 دولار تمامًا، فإن بطاقة Intel Arc B580 12GB الجديدة (نحو 250-290 دولارًا عند توفرها) هي الأقرب حاليًا، رغم أن إعدادها أقل سهولة من CUDA. تحقق من الأسعار الحالية قبل الشراء — تحرك هذا السوق بسرعة طوال عام 2026.',
    toc: [
      { label: 'أفضل اختيار: RTX 3060 12GB مستعملة', anchor: '#best-pick' },
      { label: 'RTX 3060 مقابل RX 6700 XT', anchor: '#comparison' },
      { label: 'ماذا يمكنك تشغيله؟', anchor: '#model-guide' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    intro:
      'تحركت أسعار بطاقات الرسومات لاستدلال النماذج اللغوية المحلية بشكل كبير في 2026. دفع نقص في ذاكرة GDDR6 شركة Nvidia إلى إعادة إطلاق RTX 3060 12GB، وامتد هذا الارتفاع إلى أسعار البطاقات الجديدة والمستعملة بسعة 12 جيجابايت لتتجاوز بشكل واضح حد 300 دولار الذي بُني عليه هذا الدليل. تتداول الآن بطاقة NVIDIA RTX 3060 12GB المستعملة وAMD RX 6700 XT عند نحو 350 دولارًا في سوق إعادة البيع (resaleprices.com، 19 نوفمبر 2026) — ولا تزالان أفضل بطاقتين من ناحية الدعم البرمجي بسعة 12 جيجابايت للنماذج اللغوية المحلية، لكنهما لم تعودا خيارًا اقتصاديًا صارمًا. من يحتاج إلى البقاء تحت 300 دولار اليوم يجب أن ينظر إلى بطاقة Intel Arc B580 12GB الجديدة.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بطاقة رسومات بأقل من 300 دولار لتشغيل النماذج اللغوية المحلية؟',
        answer: 'لا تزال بطاقة RTX 3060 12GB المستعملة الأفضل دعمًا بسعة 12 جيجابايت للنماذج اللغوية المحلية، لكنها منذ نوفمبر 2026 لم تعد تُباع بشكل موثوق بأقل من 300 دولار. إذا احتجت إلى البقاء تحت 300 دولار تمامًا، فإن بطاقة Intel Arc B580 12GB الجديدة (12 جيجابايت VRAM، وغالبًا ما تبقى ضمن الميزانية حسب التوفر) هي الأقرب حاليًا؛ وللاستخدام مع نماذج 7B فقط، تعمل أيضًا بطاقة بسعة 8 جيجابايت مثل RTX 2060 Super (نحو 200 دولار) أو RX 6600 (نحو 230 دولارًا).',
        bullets: [
          'لا تزال RTX 3060 12GB تشغّل Llama 3 8B بصيغة Q4_K_M بسرعة نحو 25 رمزًا/ثانية وQwen 14B بصيغة Q4_K_M بسرعة نحو 15 رمزًا/ثانية — لم يتغيّر الأداء، لكن سعر البطاقة نفسه ارتفع بشكل كبير.',
          'توفر RX 6700 XT 12GB نفس سعة VRAM وسعرًا مقاربًا (نحو 352 دولارًا مستعملة)، لكنها لا تزال تحتاج إلى ROCm على Linux — ولم تعد بديلًا أرخص، بل مجرد خيار مخصص لـ Linux.',
          'بطاقة Intel Arc B580 12GB (جديدة، نحو 250-290 دولارًا عند توفرها) هي أكثر الطرق الموثوقة للبقاء تحت 300 دولار بسعة 12 جيجابايت VRAM؛ توقّع إعدادًا عبر SYCL/IPEX-LLM أقل سهولة من CUDA.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'تنبيه سعري: ارتفع متوسط سعر RTX 3060 12GB وRX 6700 XT المستعملتين إلى نحو 350-360 دولارًا (resaleprices.com، 19 نوفمبر 2026) — بسبب نقص الذاكرة عام 2026، متجاوزًا بوضوح ميزانية 300 دولار لهذا الدليل',
          'أفضل دعم برمجي بسعة 12 جيجابايت بصرف النظر عن السعر: NVIDIA RTX 3060 12GB مستعملة — تعمل CUDA فورًا مع Ollama وllama.cpp',
          'ما يبقى فعليًا تحت 300 دولار اليوم: Intel Arc B580 12GB (جديدة)، رغم أن إعدادها أقل سهولة من CUDA',
          'تشغّل RTX 3060 12GB وRX 6700 XT كلتاهما كل نموذج 7B ومعظم نماذج 13B–14B بصيغة Q4؛ لا تستوعب أي بطاقة في هذا الدليل نموذج 70B',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'بطاقة RTX 3060 12GB هي الأفضل دعمًا بسعة 12 جيجابايت للنماذج اللغوية المحلية، لكن سعرها المستعمل ارتفع منذ نوفمبر 2026 إلى نحو 350-360 دولارًا؛ وتبقى Intel Arc B580 12GB الجديدة (نحو 250-290 دولارًا) أفضل خيار لا يزال تحت 300 دولار.' },
          { type: 'plain-terms', text: 'ارتفعت أسعار بطاقات الرسومات للذكاء الاصطناعي المحلي بشكل حاد في 2026 — الخيار الكلاسيكي بـ 300 دولار (RTX 3060 12GB) أصبح سعره قريبًا من 350 دولارًا، فتحقق من الأسعار الحالية وفكّر في Arc B580 إذا كانت ميزانيتك محدودة.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار بسعة 12 جيجابايت: NVIDIA RTX 3060 12GB مستعملة (أصبحت الآن أعلى من 300 دولار)',
        content: [
          '<strong>لا تزال بطاقة NVIDIA RTX 3060 12GB المستعملة الأفضل دعمًا بسعة 12 جيجابايت للنماذج اللغوية المحلية، لكنها منذ نوفمبر 2026 لم تعد تُباع بشكل موثوق بأقل من 300 دولار.</strong> دفع نقص في ذاكرة GDDR6 عام 2026 شركة Nvidia إلى إعادة إطلاق وحدات جديدة من RTX 3060 12GB، وامتد هذا الارتفاع إلى السوق المستعملة أيضًا: يضع موقع resaleprices.com متوسط السعر المستعمل عند 356 دولارًا (بنطاق 337-363 دولارًا، بارتفاع 5.4٪ خلال 30 يومًا) حتى 19 نوفمبر 2026. لا تزال تشغّل Mistral Small وLlama 3 8B وQwen3 8B بسرعة 15-20 رمزًا في الثانية، ومعظم نماذج 13B–14B بصيغة Q4 — لم يتغيّر الأداء، بل السعر فقط.',
          'تتفوق RTX 3060 بفضل البرمجيات، لا بسعة VRAM فقط. يكتشف Ollama وllama.cpp بطاقات NVIDIA تلقائيًا عبر CUDA على Windows وLinux — دون البحث عن تعريفات، ودون ROCm. تصل AMD RX 6700 XT إلى نفس سعة 12 جيجابايت وتكلّف تقريبًا نفس السعر مستعملة (متوسط 352 دولارًا، resaleprices.com، 19 نوفمبر 2026) — فلم يتبقَّ توفير يعوّض وقت إعداد ROCm. اختَرها فقط إذا كنت تفضّل بالفعل Linux/ROCm.',
          'إذا كانت ميزانيتك 300 دولار بشكل صارم، تجاوز هاتين البطاقتين حاليًا. حافظت Intel Arc B580 12GB الجديدة على سعر أقرب إلى سعرها المعلن 249 دولارًا — وغالبًا 250-290 دولارًا عند توفرها — بنفس سقف 12 جيجابايت، دون علاوة السوق المستعملة. تحتاج إلى واجهة SYCL في llama.cpp أو IPEX-LLM بدلًا من CUDA، وهو أقل سهولة لكنه عملي. انظر جدول المقارنة أدناه.',
          'أيًا كانت البطاقة بسعة 12 جيجابايت التي تشتريها، تجنّب إصدار RTX 3060 بسعة 6 جيجابايت — يبدو مطابقًا في الإعلانات لكنه يشغّل نماذج 3B فقط.',
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
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB (جديدة)',
            productCategory: 'gpu',
            label: 'تحقق من سعر Intel Arc B580 12GB على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB مقابل RX 6700 XT مقابل Arc B580 للنماذج اللغوية المحلية',
        content: [
          '<strong>تحمل البطاقات الثلاث 12 جيجابايت VRAM، لذا سعة النماذج متطابقة — القرار الحقيقي هو السعر مقابل نضج البرمجيات.</strong> حتى 19 نوفمبر 2026 (resaleprices.com)، تكلّف البطاقتان المستعملتان كلتاهما 350-360 دولارًا — أعلى من ميزانية 300 دولار لهذا الدليل — بينما تُوجد بطاقة Intel Arc B580 الجديدة غالبًا بالقرب من 300 دولار أو أقل. تحقق من الأسعار الحالية قبل الشراء — تحرك هذا السوق بسرعة طوال العام.',
        ],
        columns: ['البطاقة', 'VRAM', 'السعر الحالي', 'الإعداد', 'الأنسب لـ'],
        rows: [
          { البطاقة: 'RTX 3060 12GB (مستعملة)', VRAM: '12 جيجابايت', 'السعر الحالي': 'نحو 356 دولارًا', الإعداد: 'CUDA، فوري', 'الأنسب لـ': 'أفضل دعم برمجي — إذا سمحت الميزانية' },
          { البطاقة: 'RX 6700 XT (مستعملة)', VRAM: '12 جيجابايت', 'السعر الحالي': 'نحو 352 دولارًا', الإعداد: 'ROCm، ساعات', 'الأنسب لـ': 'فقط إذا كنت تفضّل Linux/AMD بالفعل' },
          { البطاقة: 'Arc B580 12GB (جديدة)', VRAM: '12 جيجابايت', 'السعر الحالي': 'نحو 250-290 دولارًا', الإعداد: 'SYCL/IPEX-LLM', 'الأنسب لـ': 'ما يبقى فعليًا تحت 300 دولار' },
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
            q: 'هل تبقى RTX 3060 12GB تحت 300 دولار في 2026؟',
            a: 'لا — ليس بشكل موثوق منذ نوفمبر 2026. دفع نقص في ذاكرة GDDR6 عام 2026 بطاقة RTX 3060 12GB المستعملة إلى ما فوق 300 دولار بوضوح (بمتوسط 356 دولارًا، resaleprices.com، 19 نوفمبر 2026)، وتسير RX 6700 XT بسعر مقارب جدًا. تبقى كلتاهما أفضل بطاقتين من ناحية الدعم البرمجي بسعة 12 جيجابايت للنماذج اللغوية المحلية إذا سمحت الميزانية. إذا احتجت إلى البقاء تحت 300 دولار، فإن بطاقة Intel Arc B580 12GB الجديدة (نحو 250-290 دولارًا عند توفرها) هي الأقرب حاليًا.',
          },
          {
            q: 'لماذا اختيار RTX 3060 بدلًا من RX 6700 XT إذا كان سعرهما متقاربًا الآن؟',
            a: 'تستخدم RTX 3060 تقنية NVIDIA CUDA التي يكتشفها Ollama وllama.cpp تلقائيًا دون إعداد. تحتاج RX 6700 XT إلى ROCm — عادةً ساعات من الإعداد على Linux، وغير مدعومة على Windows للاستدلال السريع. منذ نوفمبر 2026 تكلّف البطاقتان المستعملتان تقريبًا نفس السعر، فلم يعد هناك توفير يعوّض وقت الإعداد هذا — إلا إذا كنت تفضّل بالفعل Linux/ROCm.',
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
    designSkin: 'hub',
    theme: 'Hardware-Specific',
    heroImage: '/images/best-gpu-under-300-local-llm-overview-hero-ko.webp',
    title: 'RTX 3060 12GB: 로컬 LLM용 300달러 이하 최고의 GPU는（2026년）',
    seoTitle: 'RTX 3060 12GB 로컬 LLM 2026: 300달러 이하 최고의 GPU',
    metaDescription: '중고 RTX 3060 12GB는 2026년 메모리 부족으로 가격이 크게 올랐습니다 — 그래도 로컬 LLM용 최고의 12GB GPU입니다. 현재 가격과 실제 300달러 이하 대안을 확인하십시오.',
    publishDate: '2026-05-22',
    dateModified: '2026-11-19',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-19',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT', 'Intel Arc B580 12GB'],
    educationalLevel: 'Intermediate',
    audience: '로컬 LLM 추론을 위한 첫 GPU를 선택하는 예산 중시 구매자',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      '<strong>2026년 11월 기준, 중고 NVIDIA RTX 3060 12GB는 더 이상 300달러 이하로 안정적으로 구매할 수 없습니다.</strong> 2026년 GDDR6 메모리 부족으로 Nvidia가 이 카드를 재출시했고, 그 가격 상승은 중고 시장에도 번졌습니다. resaleprices.com(2026년 11월 19일 기준)에 따르면 중고 평균 가격은 약 350~360달러이며, AMD RX 6700 XT도 거의 같은 가격대입니다. 예산이 300달러를 약간 넘길 수 있다면 두 카드 모두 여전히 로컬 LLM용 소프트웨어 지원이 가장 우수한 12GB GPU입니다: 12GB VRAM으로 모든 7B 모델과 대부분의 14B 모델을 Q4로 실행하며, NVIDIA CUDA는 Ollama와 설정 없이 바로 작동합니다 — 드라이버를 찾아 헤맬 필요가 없습니다. 엄격히 300달러 이하를 유지해야 한다면, 새로 나온 Intel Arc B580 12GB(재고가 있을 때 약 250~290달러)가 현재 가장 가까운 선택이지만, 설정은 CUDA보다 덜 간단합니다. 구매 전 현재 가격을 확인하십시오 — 이 시장은 2026년 내내 빠르게 움직였습니다.',
    toc: [
      { label: '최고의 선택: 중고 RTX 3060 12GB', anchor: '#best-pick' },
      { label: 'RTX 3060 대 RX 6700 XT', anchor: '#comparison' },
      { label: '무엇을 실행할 수 있는가?', anchor: '#model-guide' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    intro:
      '2026년 로컬 LLM 추론용 GPU 가격은 크게 움직였습니다. 2026년 GDDR6 메모리 부족으로 Nvidia가 RTX 3060 12GB를 재출시했고, 이 가격 상승은 신품과 중고를 가리지 않고 12GB 카드 가격을 본 가이드가 기준으로 삼는 300달러를 크게 넘어서게 만들었습니다. 중고 NVIDIA RTX 3060 12GB와 AMD RX 6700 XT는 현재 재판매 시장에서 둘 다 약 350달러 선에서 거래됩니다(resaleprices.com, 2026년 11월 19일 기준) — 여전히 로컬 LLM용 최고의 12GB 카드이지만, 더 이상 엄격한 예산형 선택은 아닙니다. 오늘 300달러 이하를 유지해야 하는 독자는 새로 나온 Intel Arc B580 12GB를 살펴봐야 합니다.',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM을 실행하기 위한 300달러 이하 최고의 GPU는 무엇입니까?',
        answer: '중고 RTX 3060 12GB는 여전히 로컬 LLM용 소프트웨어 지원이 가장 우수한 12GB GPU이지만, 2026년 11월 기준 더 이상 300달러 이하로 안정적으로 구매할 수 없습니다. 엄격히 300달러 이하를 유지해야 한다면, 새로 나온 Intel Arc B580 12GB(12GB VRAM, 재고 상황에 따라 예산 안에 드는 경우가 많음)가 현재 가장 가까운 선택입니다. 7B 모델만 사용한다면 RTX 2060 Super(약 200달러)나 RX 6600(약 230달러) 같은 8GB 카드도 가능합니다.',
        bullets: [
          'RTX 3060 12GB는 여전히 Llama 3 8B Q4_K_M을 약 25 tok/s로, Qwen 14B Q4_K_M을 약 15 tok/s로 실행합니다 — 성능은 그대로이지만 카드 가격 자체가 크게 올랐습니다.',
          'RX 6700 XT 12GB는 동일한 VRAM 용량과 비슷한 가격(중고 약 352달러)을 제공하지만 여전히 Linux에서 ROCm이 필요합니다 — 더 이상 저렴한 대안이 아니라 Linux 전용 선택일 뿐입니다.',
          'Intel Arc B580 12GB(신품, 재고가 있을 때 약 250~290달러)는 현재 300달러 이하로 12GB VRAM을 확보하는 가장 확실한 방법입니다; CUDA만큼 간단하지 않은 SYCL/IPEX-LLM 설정이 필요합니다.',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '가격 알림: 중고 RTX 3060 12GB와 RX 6700 XT는 2026년 메모리 부족으로 평균 350~360달러(resaleprices.com, 2026년 11월 19일 기준)까지 올라 본 가이드의 300달러 예산을 크게 넘어섰습니다',
          '가격과 무관하게 가장 우수한 소프트웨어 지원: 중고 NVIDIA RTX 3060 12GB — CUDA가 Ollama 및 llama.cpp와 즉시 작동합니다',
          '오늘 실제로 300달러 이하인 제품: Intel Arc B580 12GB(신품), 다만 설정은 CUDA보다 덜 간단합니다',
          'RTX 3060 12GB와 RX 6700 XT는 모두 모든 7B 모델과 대부분의 13B~14B 모델을 Q4로 실행합니다; 본 가이드의 어떤 GPU도 70B 모델은 담지 못합니다',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'RTX 3060 12GB는 로컬 LLM용 소프트웨어 지원이 가장 우수한 12GB GPU이지만, 2026년 11월 기준 중고 가격이 약 350~360달러로 올랐습니다; 300달러 이하를 유지하는 최선의 선택은 Intel Arc B580 12GB(신품, 약 250~290달러)입니다.' },
          { type: 'plain-terms', text: '로컬 AI용 GPU 가격은 2026년에 급등했습니다 — 전통적인 300달러급 선택지였던 RTX 3060 12GB는 이제 350달러에 가까워졌으니, 현재 가격을 확인하고 예산이 빠듯하다면 Arc B580을 고려하십시오.' },
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최고의 12GB 선택: 중고 NVIDIA RTX 3060 12GB(현재는 300달러를 크게 넘음)',
        content: [
          '<strong>중고 NVIDIA RTX 3060 12GB는 여전히 로컬 LLM용 소프트웨어 지원이 가장 우수한 12GB GPU이지만, 2026년 11월 기준 더 이상 300달러 이하로 안정적으로 구매할 수 없습니다.</strong> 2026년 GDDR6 메모리 부족으로 Nvidia가 새 RTX 3060 12GB를 재출시했고, 이 가격 상승은 중고 시장에도 번졌습니다: resaleprices.com(2026년 11월 19일 기준)에 따르면 중고 평균 가격은 356달러(337~363달러 범위, 30일간 5.4% 상승)입니다. 여전히 Mistral Small, Llama 3 8B, Qwen3 8B를 초당 15~20 토큰으로 실행하며, 대부분의 13B~14B 모델을 Q4로 실행합니다 — 성능 면에서는 달라진 것이 없고, 가격만 달라졌습니다.',
          'RTX 3060은 VRAM뿐만 아니라 소프트웨어에서도 우위를 점합니다. Ollama와 llama.cpp는 Windows와 Linux 모두에서 CUDA를 통해 NVIDIA GPU를 자동으로 감지합니다 — 드라이버를 찾을 필요도, ROCm도 필요 없습니다. AMD RX 6700 XT는 동일한 12GB 용량에 도달하며 이 확인 시점(resaleprices.com, 2026년 11월 19일, 평균 352달러) 기준으로 가격도 거의 같습니다 — ROCm 설정 시간을 상쇄할 가격상의 이점이 더 이상 없습니다. 이미 Linux/ROCm을 선호하는 경우에만 선택하십시오.',
          '예산이 엄격히 300달러라면, 지금은 이 두 카드를 제외하십시오. 새로 나온 Intel Arc B580 12GB는 249달러 출시가에 더 가까운 가격대를 유지하고 있습니다 — 재고가 있을 때 보통 250~290달러 — 중고 시장의 프리미엄 없이 동일한 12GB 상한을 제공합니다. CUDA 대신 llama.cpp의 SYCL 백엔드나 IPEX-LLM이 필요해 덜 간단하지만 작동합니다. 아래 비교표를 참고하십시오.',
          '어느 12GB 카드를 구매하든, RTX 3060의 6GB 버전은 피하십시오 — 상품 목록에서는 동일해 보이지만 3B 모델만 지원합니다.',
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
          {
            url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
            productName: 'Intel Arc B580 12GB(신품)',
            productCategory: 'gpu',
            label: 'Amazon에서 Intel Arc B580 12GB 가격 확인',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12GB 대 RX 6700 XT 대 Arc B580: 로컬 LLM 비교',
        content: [
          '<strong>세 카드 모두 12GB VRAM을 갖추고 있어 모델 용량은 동일합니다 — 실질적인 결정은 가격 대 소프트웨어 성숙도입니다.</strong> 2026년 11월 19일 기준(resaleprices.com) 두 중고 카드 모두 350~360달러로 본 가이드의 300달러 예산을 넘어서지만, 새로 나온 Intel Arc B580은 300달러 근처 또는 그 이하에서 꾸준히 발견됩니다. 구매 전 현재 가격을 확인하십시오 — 이 시장은 한 해 내내 빠르게 움직였습니다.',
        ],
        columns: ['GPU', 'VRAM', '현재 가격', '설정', '최적 대상'],
        rows: [
          { GPU: 'RTX 3060 12GB(중고)', VRAM: '12GB', '현재 가격': '약 356달러', 설정: 'CUDA, 즉시', '최적 대상': '최고의 소프트웨어 지원 — 예산이 허락한다면' },
          { GPU: 'RX 6700 XT(중고)', VRAM: '12GB', '현재 가격': '약 352달러', 설정: 'ROCm, 몇 시간', '최적 대상': '이미 Linux/AMD를 선호하는 경우에만' },
          { GPU: 'Arc B580 12GB(신품)', VRAM: '12GB', '현재 가격': '약 250~290달러', 설정: 'SYCL/IPEX-LLM', '최적 대상': '오늘 실제로 300달러 이하' },
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
            q: 'RTX 3060 12GB는 2026년에도 300달러 이하입니까?',
            a: '아니요 — 2026년 11월 기준 더 이상 안정적으로 그렇지 않습니다. 2026년 GDDR6 메모리 부족으로 중고 RTX 3060 12GB는 300달러를 크게 넘어섰고(평균 356달러, resaleprices.com, 2026년 11월 19일 기준), RX 6700 XT도 거의 같은 가격대입니다. 예산이 허락한다면 둘 다 여전히 로컬 LLM용 최고의 12GB 카드입니다. 300달러 이하를 유지해야 한다면, 새로 나온 Intel Arc B580 12GB(재고가 있을 때 약 250~290달러)가 현재 가장 가까운 선택입니다.',
          },
          {
            q: '지금 가격이 거의 비슷하다면 왜 RX 6700 XT 대신 RTX 3060을 선택해야 합니까?',
            a: 'RTX 3060은 NVIDIA CUDA를 사용하며, Ollama와 llama.cpp가 설정 없이 자동으로 감지합니다. RX 6700 XT는 ROCm이 필요하며, 일반적으로 Linux에서 몇 시간의 설정이 필요하고 Windows에서는 빠른 추론을 지원하지 않습니다. 2026년 11월 기준 두 중고 카드의 가격이 거의 비슷하므로, 이미 Linux/ROCm을 선호하지 않는 한 그 설정 시간을 상쇄할 만한 절감액이 더 이상 없습니다.',
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
