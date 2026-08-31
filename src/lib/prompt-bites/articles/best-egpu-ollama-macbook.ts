import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-en.webp',
    title: 'Best eGPU for Ollama on a MacBook in 2026',
    seoTitle: 'Best eGPU for Ollama on MacBook (2026)',
    metaDescription: 'For Apple Silicon MacBooks, an eGPU is usually not the right upgrade for Ollama — it already uses Metal. Buy more unified memory, or a separate NVIDIA system for serious performance.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'MacBook owners considering an eGPU to accelerate Ollama',
    affiliateDisclosure: true,
    parentArticle: '/local-llms/apple-silicon-local-llm-guide-2026',
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    leadAnswerBlock:
      "For an Apple Silicon MacBook, an eGPU is usually not the upgrade to make for Ollama. Ollama already accelerates through the Mac's built-in GPU via Metal, so buying more unified memory does more for local-LLM capacity than any external GPU would. Apple approved a third-party driver called TinyGPU that lets NVIDIA and AMD eGPUs do AI compute on Apple Silicon over Thunderbolt or USB4 — but it only works through the tinygrad framework, not Ollama, so it doesn't change this recommendation for Ollama users today. If you need significantly more local-AI performance than any Mac configuration offers, a separate NVIDIA GPU system is the better investment. On an Intel MacBook or iMac, an eGPU is a more reasonable option — see below.",
    toc: [
      { label: 'Quick Answer', anchor: '#best-pick' },
      { label: 'Why an eGPU Is Not the Ollama Upgrade on Apple Silicon', anchor: '#comparison' },
      { label: 'Buy Memory Based on the Models You Want', anchor: '#memory-guide' },
      { label: 'Need Much More Performance? Buy NVIDIA', anchor: '#nvidia-path' },
      { label: 'Intel Mac or iMac?', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'eGPU enclosures plug an external GPU into a laptop via Thunderbolt, USB4, or OCuLink. On Apple Silicon MacBooks, Ollama has no path to use one — Ollama only accelerates through Metal, the Mac\'s built-in GPU. That is an architecture and software question, not a price or availability one, so this page is a buying decision, not a shopping list.',
    quickAnswerTop: {
      en: {
        question: 'What is the best eGPU for Ollama on a MacBook?',
        answer: "For an Apple Silicon MacBook, no eGPU accelerates Ollama — buy more unified memory instead. If you need substantially more local-AI performance than a Mac can offer, buy a separate NVIDIA GPU system. If you own an Intel MacBook or iMac, an eGPU is a genuinely reasonable option.",
        bullets: [
          "Ollama on Apple Silicon uses Metal, the GPU built into the chip — there is no eGPU path for it, with or without Apple's new TinyGPU driver.",
          'Apple approved TinyGPU in April 2026, letting NVIDIA/AMD eGPUs do AI compute on Apple Silicon — but only through the tinygrad framework, not through Ollama.',
          'On Intel Macs, an AMD eGPU physically works over Thunderbolt 3 and can accelerate llama.cpp via Vulkan (MoltenVK) — just not Ollama directly.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Apple Silicon + Ollama: use the built-in Metal GPU — an eGPU is usually not the upgrade to make",
          'More unified memory is the real upgrade path for larger local models on Apple Silicon',
          "Apple approved a third-party driver (TinyGPU) in April 2026 for AI-compute eGPUs on Apple Silicon, but it works through tinygrad, not Ollama",
          'Need much more local-AI performance than any Mac offers? A separate NVIDIA GPU system is the better investment',
          'Intel Mac or iMac owner? An eGPU is a genuinely different, more reasonable case — see the Intel Mac section',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Quick Answer',
        content: [
          "<strong>If you have an Apple Silicon MacBook, don't buy an eGPU for Ollama — buy more unified memory, since Ollama already runs on the Mac's built-in GPU via Metal.</strong> If your priority shifts from \"a MacBook that also runs local AI\" to \"maximum local-AI performance,\" a separate NVIDIA GPU system is the better buy. If you already own an Intel MacBook or iMac, an eGPU is a genuinely reasonable way to extend its life.",
        ],
        items: [
          '🍎 Best solution for Apple Silicon: buy more unified memory, not an eGPU',
          '💰 Best budget move: keep your MacBook and use its built-in Metal GPU as-is',
          '🚀 Need much more GPU power? Buy a separate NVIDIA GPU system',
          '⚠️ Have an Intel Mac or iMac? An eGPU can make sense — a fundamentally different situation',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Check high-memory MacBook prices',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Check Mac Studio prices',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Why an eGPU Is Not the Ollama Upgrade on Apple Silicon',
        content: [
          '<strong>On Apple Silicon, the GPU shares the same physical RAM as the CPU (unified memory), and Ollama only dispatches inference to that built-in GPU via Metal.</strong> There is no separate VRAM pool to expand with an external card, and Ollama has no NVIDIA/AMD acceleration path on macOS the way it does on Windows and Linux.',
          "This changed slightly in April 2026: Apple approved TinyGPU, a third-party DriverKit extension from Tiny Corp (the team behind tinygrad) that lets an NVIDIA (Ampere or newer) or AMD (RDNA3 or newer) eGPU do AI compute on Apple Silicon over Thunderbolt or USB4, without disabling System Integrity Protection. It's compute-only — no gaming acceleration, no display output, no Metal API support — and it only works through the tinygrad framework (`DEV=NV` or `DEV=AMD`). Ollama does not use tinygrad, so this does not give Ollama an eGPU path; it matters mainly for developers already building on tinygrad.",
          'For anyone running Ollama specifically, buying an eGPU enclosure, a GPU, a power supply, and troubleshooting Thunderbolt compatibility is a lot of money and effort for a setup that Ollama still will not use. More unified memory is simpler, cheaper per useful gigabyte, and works today with zero configuration.',
        ],
        columns: ['Constraint', 'Apple Silicon MacBook', 'Linux laptop with TB4/OCuLink'],
        rows: [
          {
            'Constraint': 'Ollama eGPU acceleration',
            'Apple Silicon MacBook': 'No path — Metal only',
            'Linux laptop with TB4/OCuLink': 'Works with CUDA or ROCm',
          },
          {
            'Constraint': 'Any AI-compute eGPU path at all',
            'Apple Silicon MacBook': 'TinyGPU (tinygrad only, since Apr 2026)',
            'Linux laptop with TB4/OCuLink': 'Native NVIDIA/AMD drivers',
          },
          {
            'Constraint': 'Memory architecture',
            'Apple Silicon MacBook': 'Unified memory only',
            'Linux laptop with TB4/OCuLink': 'Discrete VRAM on eGPU',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: 'Buy Memory Based on the Models You Want to Run',
        content: [
          'For local LLMs on Apple Silicon, unified memory capacity determines which models you can load at all — GPU speed only determines how fast a loadable model runs.',
          "Apple's August 2026 lineup update raised desktop memory ceilings: Mac mini starts at $899 (M6, up to 32 GB) or $1,699 (M5 Pro, up to 64 GB), and Mac Studio starts at $2,499 (M5 Max, up to 128 GB) up to $5,499 (M5 Ultra, up to 512 GB). Those ceilings are for the desktop lineup — a MacBook Pro is still capped lower.",
        ],
        columns: ['Unified memory', 'Verdict'],
        rows: [
          { 'Unified memory': '16 GB', 'Verdict': '🟡 Small models only' },
          { 'Unified memory': '24 GB', 'Verdict': '🟢 Meaningfully better headroom' },
          { 'Unified memory': '32 GB', 'Verdict': '🟢 Strong portable setup' },
          { 'Unified memory': '48 GB+', 'Verdict': '🚀 Substantially more model headroom' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: 'Need Much More Performance? Buy a Separate NVIDIA System',
        content: [
          'If your priority shifts from "a MacBook that also handles local AI" to "maximum local-AI performance," buy a separate NVIDIA machine rather than trying to bolt GPU power onto a Mac. Ollama supports NVIDIA GPUs across the RTX 30-, 40-, and 50-series (and newer) through CUDA, which gives you dedicated VRAM, a much wider hardware selection, and straightforward upgradeability that no Mac offers.',
          "This is a clean split, not a compromise: keep the MacBook for portability and everyday use, and use the NVIDIA system for the local-AI workloads that actually need the extra power.",
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+desktop+GPU',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'Check NVIDIA RTX GPU prices',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'Intel MacBook or iMac? An eGPU Is a Different, More Reasonable Case',
        content: [
          "This is where the answer changes. Older Intel Macs — including Intel MacBook Pros and Intel iMacs — support external GPUs at the macOS level over Thunderbolt 3, so an eGPU can be a reasonable way to extend an existing machine's useful life. Apple Silicon iMacs (the current M-series iMac) follow the same rules as Apple Silicon MacBooks: no eGPU path for Ollama.",
          "Ollama still won't dispatch to the eGPU on an Intel Mac — it only accelerates on Apple-Silicon Metal. The workaround is building llama.cpp with the Vulkan backend via MoltenVK, which can run inference on an AMD eGPU (for example, a Radeon RX 6800/6900 XT) at roughly 15–17% overhead from Thunderbolt bandwidth. It requires a manual compile, so it is not as turnkey as Ollama on Apple Silicon — but it is a genuine option if you already own the Intel Mac.",
          "If you're buying a Mac today specifically for local AI, buy Apple Silicon and prioritize unified memory instead — don't buy an Intel Mac for this use case.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About eGPUs and MacBooks',
        faqs: [
          {
            q: 'Why does my Apple Silicon MacBook not support an eGPU for Ollama?',
            a: "Ollama only dispatches inference to the GPU built into the Apple Silicon chip, via Metal. There is no CUDA or ROCm path on macOS, and Apple's own GPU acceleration is Metal-only. Apple's April 2026 TinyGPU driver lets eGPUs do AI compute on Apple Silicon, but only through the tinygrad framework — Ollama does not use it.",
          },
          {
            q: 'What is the best graphics card for a MacBook Pro?',
            a: 'For an Apple Silicon MacBook Pro, there is no upgradeable or external graphics card in the traditional sense — the GPU is built into the chip, and it is what Ollama, LM Studio, and llama.cpp already accelerate on via Metal. The effective "upgrade" is buying a MacBook Pro configuration with more unified memory, not a separate graphics card.',
          },
          {
            q: 'Can I add an external GPU to an iMac?',
            a: "It depends on which iMac. Intel iMacs support external GPUs over Thunderbolt 3 at the macOS level, similar to Intel MacBook Pros. Current Apple Silicon iMacs (M-series) follow the same architecture as Apple Silicon MacBooks — no eGPU path for Ollama, and the same TinyGPU/tinygrad caveat applies if you want AI-compute-only eGPU support.",
          },
          {
            q: 'Can I use an eGPU with Ollama on an Intel MacBook?',
            a: 'The eGPU works at the macOS level, but Ollama will not use it. Intel MacBooks (like the 16" MacBook Pro) support AMD eGPUs over Thunderbolt 3, but Ollama only dispatches to Apple-Silicon Metal — it ignores third-party GPUs entirely, including on Intel Macs. The workaround is to build llama.cpp with the Vulkan backend via MoltenVK, which can run inference on an AMD eGPU (e.g., Radeon RX 6800/6900 XT) on an Intel Mac, at roughly 15–17% overhead from Thunderbolt bandwidth. It requires a manual compile.',
          },
          {
            q: 'What is the fastest way to speed up Ollama on a MacBook?',
            a: 'Buy more unified memory. A MacBook Pro with 32 GB, 48 GB, or 64 GB of unified memory runs larger models locally with full Metal GPU acceleration. There is no external accelerator option for Ollama specifically on Apple Silicon.',
          },
          {
            q: 'Do eGPUs work for Ollama on Linux laptops?',
            a: 'Yes. A Linux laptop with Thunderbolt 4 or OCuLink can attach a desktop NVIDIA or AMD GPU and run Ollama via CUDA or ROCm. Performance is limited by Thunderbolt 4 bandwidth (40 Gbps), but it works — this is the non-Apple equivalent of the eGPU setup people often ask about for Macs.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Is the Mac Mini M4 Good for Local LLMs?](/prompt-bites/mac-mini-m4-local-llm) — the desktop counterpart with the same architecture',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — for the separate-NVIDIA-system path',
          '[Best Budget AI Laptop Under $1,000](/prompt-bites/best-budget-ai-laptop-under-1000) — non-Apple alternatives at the entry tier',
          '[Best Mini PC for Local LLM](/prompt-bites/best-mini-pc-for-local-llm) — desktop mini PCs vs MacBook unified memory',
        ],
      },
    },
  },
  de: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-de.webp',
    title: 'Beste eGPU für Ollama auf einem MacBook 2026',
    seoTitle: 'Beste eGPU für Ollama auf einem MacBook (2026)',
    metaDescription: 'Für Apple-Silicon-MacBooks ist eine eGPU meist nicht das richtige Upgrade für Ollama — es nutzt bereits Metal. Kaufen Sie mehr Unified Memory oder für ernsthafte Leistung ein separates NVIDIA-System.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'MacBook-Besitzer, die ein eGPU zur Beschleunigung von Ollama erwägen',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 Min. Lesezeit',
    leadAnswerBlock:
      'Für ein Apple-Silicon-MacBook ist eine eGPU meist nicht das richtige Upgrade für Ollama. Ollama beschleunigt bereits über die eingebaute GPU des Mac via Metal, daher bringt mehr Unified Memory für die lokale LLM-Kapazität mehr als jede externe GPU. Seit April 2026 hat Apple einen Drittanbieter-Treiber namens TinyGPU zugelassen, der NVIDIA- und AMD-eGPUs KI-Rechenlast auf Apple Silicon über Thunderbolt oder USB4 ausführen lässt — das funktioniert aber nur über das tinygrad-Framework, nicht über Ollama, und ändert diese Empfehlung für Ollama-Nutzer heute nicht. Wenn Sie deutlich mehr lokale KI-Leistung brauchen, als jede Mac-Konfiguration bietet, ist ein separates NVIDIA-GPU-System die bessere Investition. Bei einem Intel-MacBook oder iMac ist eine eGPU eine vernünftigere Option — siehe unten.',
    toc: [
      { label: 'Kurzantwort', anchor: '#best-pick' },
      { label: 'Warum eine eGPU nicht das Ollama-Upgrade auf Apple Silicon ist', anchor: '#comparison' },
      { label: 'Speicher nach den gewünschten Modellen kaufen', anchor: '#memory-guide' },
      { label: 'Brauchen Sie viel mehr Leistung? NVIDIA kaufen', anchor: '#nvidia-path' },
      { label: 'Intel-Mac oder iMac?', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    intro:
      'eGPU-Gehäuse verbinden eine externe GPU über Thunderbolt, USB4 oder OCuLink mit einem Laptop. Auf Apple-Silicon-MacBooks hat Ollama keinen Weg, eine solche zu nutzen — Ollama beschleunigt nur über Metal, die eingebaute GPU des Mac. Das ist eine Architektur- und Softwarefrage, keine Preis- oder Verfügbarkeitsfrage — diese Seite ist daher eine Kaufentscheidung, keine Einkaufsliste.',
    quickAnswerTop: {
      de: {
        question: 'Was ist die beste eGPU für Ollama auf einem MacBook?',
        answer: 'Für ein Apple-Silicon-MacBook beschleunigt keine eGPU Ollama — kaufen Sie stattdessen mehr Unified Memory. Wenn Sie deutlich mehr lokale KI-Leistung brauchen, als ein Mac bieten kann, kaufen Sie ein separates NVIDIA-GPU-System. Besitzen Sie ein Intel-MacBook oder einen iMac, ist eine eGPU eine wirklich vernünftige Option.',
        bullets: [
          'Ollama nutzt auf Apple Silicon Metal, die im Chip eingebaute GPU — dafür gibt es keinen eGPU-Weg, auch nicht mit Apples neuem TinyGPU-Treiber.',
          'Apple hat TinyGPU im April 2026 zugelassen, wodurch NVIDIA/AMD-eGPUs KI-Rechenlast auf Apple Silicon übernehmen können — aber nur über das tinygrad-Framework, nicht über Ollama.',
          'Auf Intel-Macs funktioniert eine AMD-eGPU physisch über Thunderbolt 3 und kann llama.cpp via Vulkan (MoltenVK) beschleunigen — nur eben nicht Ollama direkt.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon + Ollama: die eingebaute Metal-GPU nutzen — eine eGPU ist meist nicht das richtige Upgrade',
          'Mehr Unified Memory ist der eigentliche Upgrade-Pfad für größere lokale Modelle auf Apple Silicon',
          'Apple hat im April 2026 einen Drittanbieter-Treiber (TinyGPU) für KI-Rechenlast-eGPUs auf Apple Silicon zugelassen, der aber über tinygrad läuft, nicht über Ollama',
          'Brauchen Sie deutlich mehr lokale KI-Leistung, als ein Mac bietet? Ein separates NVIDIA-GPU-System ist die bessere Investition',
          'Besitzen Sie ein Intel-Mac oder einen iMac? Eine eGPU ist ein wirklich anderer, vernünftigerer Fall — siehe den Abschnitt zu Intel-Macs',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Kurzantwort',
        content: [
          'Wenn Sie ein Apple-Silicon-MacBook besitzen, kaufen Sie keine eGPU für Ollama — kaufen Sie mehr Unified Memory, da Ollama bereits über die eingebaute GPU des Mac via Metal läuft. Verschiebt sich Ihre Priorität von „ein MacBook, das auch lokale KI ausführt" zu „maximale lokale KI-Leistung", ist ein separates NVIDIA-GPU-System der bessere Kauf. Besitzen Sie bereits ein Intel-MacBook oder einen iMac, ist eine eGPU eine wirklich vernünftige Möglichkeit, dessen Lebensdauer zu verlängern.',
        ],
        items: [
          '🍎 Beste Lösung für Apple Silicon: mehr Unified Memory kaufen, keine eGPU',
          '💰 Bester Budget-Schritt: MacBook behalten und die eingebaute Metal-GPU wie sie ist nutzen',
          '🚀 Brauchen Sie viel mehr GPU-Leistung? Ein separates NVIDIA-GPU-System kaufen',
          '⚠️ Haben Sie ein Intel-Mac oder einen iMac? Eine eGPU kann sinnvoll sein — ein grundlegend anderer Fall',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-Serie 32GB+',
            productCategory: 'laptop',
            label: 'Preise für speicherstarke MacBooks prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-Serie',
            productCategory: 'desktop',
            label: 'Mac-Studio-Preise prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Warum eine eGPU nicht das Ollama-Upgrade auf Apple Silicon ist',
        content: [
          'Auf Apple Silicon teilt sich die GPU denselben physischen RAM mit der CPU (Unified Memory), und Ollama leitet Inferenz nur an diese eingebaute GPU via Metal weiter. Es gibt keinen separaten VRAM-Pool, der sich mit einer externen Karte erweitern ließe, und Ollama hat auf macOS keinen NVIDIA/AMD-Beschleunigungspfad wie unter Windows und Linux.',
          'Das hat sich im April 2026 leicht geändert: Apple hat TinyGPU zugelassen, eine Drittanbieter-DriverKit-Erweiterung von Tiny Corp (dem Team hinter tinygrad), die einer NVIDIA- (Ampere oder neuer) oder AMD-eGPU (RDNA3 oder neuer) erlaubt, KI-Rechenlast auf Apple Silicon über Thunderbolt oder USB4 auszuführen, ohne System Integrity Protection zu deaktivieren. Sie ist reine Rechenleistung — keine Spielebeschleunigung, keine Display-Ausgabe, keine Metal-API-Unterstützung — und funktioniert nur über das tinygrad-Framework (`DEV=NV` oder `DEV=AMD`). Ollama nutzt tinygrad nicht, daher gibt dies Ollama keinen eGPU-Weg; relevant ist es vor allem für Entwickler, die bereits auf tinygrad aufbauen.',
          'Für alle, die speziell Ollama nutzen, sind eGPU-Gehäuse, GPU, Netzteil und die Fehlersuche bei der Thunderbolt-Kompatibilität viel Geld und Aufwand für ein Setup, das Ollama trotzdem nicht nutzt. Mehr Unified Memory ist einfacher, pro nutzbarem Gigabyte günstiger und funktioniert heute ohne jede Konfiguration.',
        ],
        columns: ['Einschränkung', 'Apple-Silicon-MacBook', 'Linux-Laptop mit TB4/OCuLink'],
        rows: [
          {
            'Einschränkung': 'Ollama-eGPU-Beschleunigung',
            'Apple-Silicon-MacBook': 'Kein Weg — nur Metal',
            'Linux-Laptop mit TB4/OCuLink': 'Funktioniert mit CUDA oder ROCm',
          },
          {
            'Einschränkung': 'Irgendein KI-Rechenlast-eGPU-Weg',
            'Apple-Silicon-MacBook': 'TinyGPU (nur tinygrad, seit Apr. 2026)',
            'Linux-Laptop mit TB4/OCuLink': 'Native NVIDIA/AMD-Treiber',
          },
          {
            'Einschränkung': 'Speicherarchitektur',
            'Apple-Silicon-MacBook': 'Nur Unified Memory',
            'Linux-Laptop mit TB4/OCuLink': 'Diskreter VRAM auf eGPU',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: 'Speicher nach den gewünschten Modellen kaufen',
        content: [
          'Für lokale LLMs auf Apple Silicon entscheidet die Unified-Memory-Kapazität, welche Modelle überhaupt laden — die GPU-Geschwindigkeit bestimmt nur, wie schnell ein ladbares Modell läuft.',
          'Apples Lineup-Update von August 2026 hat die Speicherobergrenzen bei den Desktop-Macs angehoben: Der Mac mini startet bei 899 $ (M6, bis 32 GB) oder 1.699 $ (M5 Pro, bis 64 GB), der Mac Studio bei 2.499 $ (M5 Max, bis 128 GB) bis 5.499 $ (M5 Ultra, bis 512 GB). Diese Obergrenzen gelten für die Desktop-Reihe — ein MacBook Pro ist weiterhin niedriger gedeckelt.',
        ],
        columns: ['Unified Memory', 'Urteil'],
        rows: [
          { 'Unified Memory': '16 GB', 'Urteil': '🟡 Nur kleine Modelle' },
          { 'Unified Memory': '24 GB', 'Urteil': '🟢 Spürbar mehr Reserve' },
          { 'Unified Memory': '32 GB', 'Urteil': '🟢 Starkes portables Setup' },
          { 'Unified Memory': '48 GB+', 'Urteil': '🚀 Deutlich mehr Modell-Reserve' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: 'Brauchen Sie viel mehr Leistung? Ein separates NVIDIA-System kaufen',
        content: [
          'Verschiebt sich Ihre Priorität von „ein MacBook, das auch lokale KI ausführt" zu „maximale lokale KI-Leistung", kaufen Sie ein separates NVIDIA-System, statt zu versuchen, GPU-Leistung an einen Mac anzuflanschen. Ollama unterstützt NVIDIA-GPUs über die RTX-30-, 40- und 50-Serie (und neuer) via CUDA, was Ihnen dedizierten VRAM, eine deutlich größere Hardware-Auswahl und unkomplizierte Aufrüstbarkeit bietet, die kein Mac bietet.',
          'Das ist eine saubere Trennung, kein Kompromiss: Behalten Sie das MacBook für Mobilität und Alltag, und nutzen Sie das NVIDIA-System für die lokalen KI-Workloads, die tatsächlich die zusätzliche Leistung brauchen.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4070+Desktop+GPU',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'NVIDIA-RTX-GPU-Preise prüfen',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'Intel-MacBook oder iMac? Eine eGPU ist ein anderer, vernünftigerer Fall',
        content: [
          'Hier ändert sich die Antwort. Ältere Intel-Macs — einschließlich Intel-MacBook-Pros und Intel-iMacs — unterstützen externe GPUs auf macOS-Ebene über Thunderbolt 3, sodass eine eGPU eine vernünftige Möglichkeit sein kann, die Lebensdauer eines vorhandenen Geräts zu verlängern. Apple-Silicon-iMacs (der aktuelle M-Serien-iMac) folgen denselben Regeln wie Apple-Silicon-MacBooks: kein eGPU-Weg für Ollama.',
          'Ollama leitet auch auf einem Intel-Mac keine Aufgaben an die eGPU weiter — es beschleunigt nur über Apple-Silicon-Metal. Der Workaround ist, llama.cpp mit dem Vulkan-Backend über MoltenVK zu bauen, das auf einer AMD-eGPU (zum Beispiel einer Radeon RX 6800/6900 XT) Inferenz mit rund 15–17 % Overhead durch die Thunderbolt-Bandbreite ausführen kann. Es erfordert manuelles Kompilieren, ist also nicht so schlüsselfertig wie Ollama auf Apple Silicon — aber eine echte Option, wenn Sie den Intel-Mac bereits besitzen.',
          'Kaufen Sie heute gezielt einen Mac für lokale KI, kaufen Sie stattdessen Apple Silicon und priorisieren Sie Unified Memory — kaufen Sie für diesen Anwendungsfall keinen Intel-Mac.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Kurze Antworten zu eGPUs und MacBooks',
        faqs: [
          {
            q: 'Warum unterstützt mein Apple-Silicon-MacBook keine eGPU für Ollama?',
            a: 'Ollama leitet Inferenz nur an die im Apple-Silicon-Chip eingebaute GPU via Metal weiter. Es gibt keinen CUDA- oder ROCm-Weg unter macOS, und Apples eigene GPU-Beschleunigung ist reines Metal. Apples TinyGPU-Treiber von April 2026 lässt eGPUs KI-Rechenlast auf Apple Silicon übernehmen, aber nur über das tinygrad-Framework — Ollama nutzt es nicht.',
          },
          {
            q: 'Was ist die beste Grafikkarte für ein MacBook Pro?',
            a: 'Für ein Apple-Silicon-MacBook Pro gibt es im herkömmlichen Sinn keine aufrüstbare oder externe Grafikkarte — die GPU ist in den Chip eingebaut, und genau diese beschleunigen Ollama, LM Studio und llama.cpp bereits via Metal. Das eigentliche „Upgrade" ist eine MacBook-Pro-Konfiguration mit mehr Unified Memory zu kaufen, keine separate Grafikkarte.',
          },
          {
            q: 'Kann ich eine externe GPU an einen iMac anschließen?',
            a: 'Das hängt vom iMac ab. Intel-iMacs unterstützen externe GPUs über Thunderbolt 3 auf macOS-Ebene, ähnlich wie Intel-MacBook-Pros. Aktuelle Apple-Silicon-iMacs (M-Serie) folgen derselben Architektur wie Apple-Silicon-MacBooks — kein eGPU-Weg für Ollama, und dieselbe TinyGPU/tinygrad-Einschränkung gilt, wenn Sie reine KI-Rechenlast-eGPU-Unterstützung wollen.',
          },
          {
            q: 'Kann ich ein eGPU mit Ollama auf einem Intel-MacBook nutzen?',
            a: 'Das eGPU funktioniert auf macOS-Ebene, aber Ollama nutzt es nicht. Intel-MacBooks (wie das 16"-MacBook Pro) unterstützen AMD-eGPUs über Thunderbolt 3, aber Ollama beschleunigt nur über Apple-Silicon-Metal — es ignoriert GPUs von Drittanbietern vollständig, auch auf Intel-Macs. Der Workaround ist, llama.cpp mit dem Vulkan-Backend über MoltenVK zu bauen, das auf einem Intel-Mac Inferenz auf einem AMD-eGPU (z. B. Radeon RX 6800/6900 XT) ausführen kann, mit rund 15–17 % Overhead durch die Thunderbolt-Bandbreite. Es erfordert manuelles Kompilieren.',
          },
          {
            q: 'Was beschleunigt Ollama auf einem MacBook am schnellsten?',
            a: 'Mehr Unified Memory kaufen. Ein MacBook Pro mit 32 GB, 48 GB oder 64 GB Unified Memory führt größere Modelle lokal mit voller Metal-GPU-Beschleunigung aus. Es gibt keine externe Beschleunigungsoption speziell für Ollama auf Apple Silicon.',
          },
          {
            q: 'Funktionieren eGPUs für Ollama auf Linux-Laptops?',
            a: 'Ja. Ein Linux-Laptop mit Thunderbolt 4 oder OCuLink kann eine Desktop-NVIDIA- oder AMD-GPU anschließen und Ollama via CUDA oder ROCm ausführen. Die Leistung wird durch die Thunderbolt-4-Bandbreite (40 Gbit/s) begrenzt, aber es funktioniert — das ist das Nicht-Apple-Äquivalent des eGPU-Setups, nach dem oft für Macs gefragt wird.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Ist der Mac Mini M4 gut für lokale LLMs?](/de/prompt-bites/mac-mini-m4-local-llm) — das Desktop-Pendant mit derselben Architektur',
          '[GPU-Kaufberatung für lokale LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — für den Weg zum separaten NVIDIA-System',
          '[Bestes Budget-AI-Laptop unter 1.000 $](/de/prompt-bites/best-budget-ai-laptop-under-1000) — Nicht-Apple-Alternativen im Einstiegsbereich',
          '[Bester Mini-PC für lokales LLM](/de/prompt-bites/best-mini-pc-for-local-llm) — Desktop-Mini-PCs vs MacBook Unified Memory',
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-fr.webp',
    title: 'Meilleure eGPU pour Ollama sur un MacBook en 2026',
    seoTitle: 'Meilleure eGPU pour Ollama sur MacBook (2026)',
    metaDescription: "Pour un MacBook Apple Silicon, une eGPU n'est généralement pas la bonne mise à niveau pour Ollama — il utilise déjà Metal. Achetez plus de mémoire unifiée, ou un système NVIDIA séparé pour de vraies performances.",
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de MacBook envisageant un eGPU pour accélérer Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 min de lecture',
    leadAnswerBlock:
      "Pour un MacBook Apple Silicon, une eGPU n'est généralement pas la mise à niveau à faire pour Ollama. Ollama accélère déjà via le GPU intégré du Mac par Metal, donc acheter plus de mémoire unifiée apporte plus à la capacité LLM locale que n'importe quel GPU externe. Depuis avril 2026, Apple a approuvé un pilote tiers nommé TinyGPU qui permet à des eGPU NVIDIA et AMD de faire du calcul IA sur Apple Silicon via Thunderbolt ou USB4 — mais cela ne fonctionne que via le framework tinygrad, pas Ollama, donc cela ne change pas cette recommandation pour les utilisateurs d'Ollama aujourd'hui. Si vous avez besoin de bien plus de performance IA locale qu'aucune configuration Mac ne peut offrir, un système NVIDIA séparé est le meilleur investissement. Sur un MacBook Intel ou un iMac, une eGPU est une option plus raisonnable — voir plus bas.",
    toc: [
      { label: 'Réponse rapide', anchor: '#best-pick' },
      { label: "Pourquoi une eGPU n'est pas la mise à niveau Ollama sur Apple Silicon", anchor: '#comparison' },
      { label: 'Achetez de la mémoire selon les modèles voulus', anchor: '#memory-guide' },
      { label: 'Besoin de bien plus de performance ? Achetez NVIDIA', anchor: '#nvidia-path' },
      { label: 'MacBook Intel ou iMac ?', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    intro:
      "Les boîtiers eGPU connectent un GPU externe à un ordinateur portable via Thunderbolt, USB4 ou OCuLink. Sur les MacBook Apple Silicon, Ollama n'a aucun moyen d'en utiliser un — Ollama n'accélère que via Metal, le GPU intégré du Mac. C'est une question d'architecture et de logiciel, pas de prix ou de disponibilité ; cette page est donc une décision d'achat, pas une liste de courses.",
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure eGPU pour Ollama sur un MacBook ?',
        answer: "Pour un MacBook Apple Silicon, aucune eGPU n'accélère Ollama — achetez plutôt plus de mémoire unifiée. Si vous avez besoin de bien plus de performance IA locale qu'un Mac ne peut offrir, achetez un système NVIDIA séparé. Si vous possédez un MacBook Intel ou un iMac, une eGPU est une option vraiment raisonnable.",
        bullets: [
          "Ollama sur Apple Silicon utilise Metal, le GPU intégré à la puce — il n'y a aucune voie eGPU pour lui, avec ou sans le nouveau pilote TinyGPU d'Apple.",
          "Apple a approuvé TinyGPU en avril 2026, permettant à des eGPU NVIDIA/AMD de faire du calcul IA sur Apple Silicon — mais uniquement via le framework tinygrad, pas via Ollama.",
          "Sur les Mac Intel, une eGPU AMD fonctionne physiquement via Thunderbolt 3 et peut accélérer llama.cpp via Vulkan (MoltenVK) — mais pas Ollama directement.",
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "Apple Silicon + Ollama : utilisez le GPU Metal intégré — une eGPU n'est généralement pas la mise à niveau à faire",
          'Plus de mémoire unifiée est la vraie voie de mise à niveau pour des modèles locaux plus grands sur Apple Silicon',
          "Apple a approuvé un pilote tiers (TinyGPU) en avril 2026 pour des eGPU de calcul IA sur Apple Silicon, mais il fonctionne via tinygrad, pas Ollama",
          "Besoin de bien plus de performance IA locale qu'un Mac n'en offre ? Un système NVIDIA séparé est le meilleur investissement",
          "Propriétaire d'un Mac Intel ou d'un iMac ? Une eGPU est un cas vraiment différent, plus raisonnable — voir la section Mac Intel",
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Réponse rapide',
        content: [
          "<strong>Si vous avez un MacBook Apple Silicon, n'achetez pas d'eGPU pour Ollama — achetez plus de mémoire unifiée, puisqu'Ollama tourne déjà sur le GPU intégré du Mac via Metal.</strong> Si votre priorité passe de « un MacBook qui fait aussi tourner de l'IA locale » à « performance IA locale maximale », un système NVIDIA séparé est le meilleur achat. Si vous possédez déjà un MacBook Intel ou un iMac, une eGPU est un moyen vraiment raisonnable de prolonger sa durée de vie.",
        ],
        items: [
          '🍎 Meilleure solution pour Apple Silicon : achetez plus de mémoire unifiée, pas une eGPU',
          '💰 Meilleur choix économique : gardez votre MacBook et utilisez son GPU Metal intégré tel quel',
          '🚀 Besoin de bien plus de puissance GPU ? Achetez un système NVIDIA séparé',
          '⚠️ Vous avez un Mac Intel ou un iMac ? Une eGPU peut avoir du sens — une situation fondamentalement différente',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32 Go+',
            productCategory: 'laptop',
            label: 'Voir les prix des MacBook à forte mémoire',
          },
          {
            url: 'https://www.amazon.fr/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Voir les prix du Mac Studio',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: "Pourquoi une eGPU n'est pas la mise à niveau Ollama sur Apple Silicon",
        content: [
          "Sur Apple Silicon, le GPU partage la même RAM physique que le CPU (mémoire unifiée), et Ollama n'envoie l'inférence qu'à ce GPU intégré via Metal. Il n'y a pas de pool VRAM séparé à étendre avec une carte externe, et Ollama n'a aucune voie d'accélération NVIDIA/AMD sous macOS comme c'est le cas sous Windows et Linux.",
          "Cela a légèrement changé en avril 2026 : Apple a approuvé TinyGPU, une extension DriverKit tierce de Tiny Corp (l'équipe derrière tinygrad) qui permet à une eGPU NVIDIA (Ampere ou plus récent) ou AMD (RDNA3 ou plus récent) de faire du calcul IA sur Apple Silicon via Thunderbolt ou USB4, sans désactiver la System Integrity Protection. C'est du calcul pur — pas d'accélération jeu, pas de sortie vidéo, pas de support de l'API Metal — et cela ne fonctionne que via le framework tinygrad (`DEV=NV` ou `DEV=AMD`). Ollama n'utilise pas tinygrad, donc cela ne donne pas de voie eGPU à Ollama ; c'est surtout pertinent pour les développeurs déjà sur tinygrad.",
          "Pour quiconque utilise spécifiquement Ollama, acheter un boîtier eGPU, un GPU, une alimentation, et dépanner la compatibilité Thunderbolt représente beaucoup d'argent et d'efforts pour une configuration qu'Ollama n'utilisera toujours pas. Plus de mémoire unifiée est plus simple, moins cher par gigaoctet utile, et fonctionne dès aujourd'hui sans aucune configuration.",
        ],
        columns: ['Contrainte', 'MacBook Apple Silicon', 'Laptop Linux avec TB4/OCuLink'],
        rows: [
          {
            'Contrainte': 'Accélération eGPU pour Ollama',
            'MacBook Apple Silicon': 'Aucune voie — Metal uniquement',
            'Laptop Linux avec TB4/OCuLink': 'Fonctionne avec CUDA ou ROCm',
          },
          {
            'Contrainte': 'Toute voie eGPU de calcul IA',
            'MacBook Apple Silicon': 'TinyGPU (tinygrad uniquement, depuis avr. 2026)',
            'Laptop Linux avec TB4/OCuLink': 'Pilotes NVIDIA/AMD natifs',
          },
          {
            'Contrainte': 'Architecture mémoire',
            'MacBook Apple Silicon': 'Mémoire unifiée uniquement',
            'Laptop Linux avec TB4/OCuLink': 'VRAM discrète sur eGPU',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: 'Achetez de la mémoire selon les modèles voulus',
        content: [
          "Pour les LLM locaux sur Apple Silicon, la capacité de mémoire unifiée détermine quels modèles vous pouvez charger — la vitesse du GPU détermine seulement la rapidité d'un modèle chargeable.",
          "La mise à jour de gamme d'Apple d'août 2026 a relevé les plafonds de mémoire des Mac de bureau : le Mac mini démarre à 899 $ (M6, jusqu'à 32 Go) ou 1 699 $ (M5 Pro, jusqu'à 64 Go), et le Mac Studio démarre à 2 499 $ (M5 Max, jusqu'à 128 Go) jusqu'à 5 499 $ (M5 Ultra, jusqu'à 512 Go). Ces plafonds concernent la gamme de bureau — un MacBook Pro reste plafonné plus bas.",
        ],
        columns: ['Mémoire unifiée', 'Verdict'],
        rows: [
          { 'Mémoire unifiée': '16 Go', 'Verdict': '🟡 Petits modèles seulement' },
          { 'Mémoire unifiée': '24 Go', 'Verdict': '🟢 Marge nettement meilleure' },
          { 'Mémoire unifiée': '32 Go', 'Verdict': '🟢 Configuration portable solide' },
          { 'Mémoire unifiée': '48 Go+', 'Verdict': '🚀 Marge de modèle bien plus grande' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: 'Besoin de bien plus de performance ? Achetez un système NVIDIA séparé',
        content: [
          "Si votre priorité passe de « un MacBook qui fait aussi tourner de l'IA locale » à « performance IA locale maximale », achetez une machine NVIDIA séparée plutôt que d'essayer de greffer de la puissance GPU sur un Mac. Ollama prend en charge les GPU NVIDIA des séries RTX 30, 40 et 50 (et plus récentes) via CUDA, ce qui vous donne de la VRAM dédiée, un choix de matériel bien plus large et une évolutivité simple qu'aucun Mac n'offre.",
          "C'est une séparation nette, pas un compromis : gardez le MacBook pour la mobilité et l'usage quotidien, et utilisez le système NVIDIA pour les charges d'IA locale qui ont réellement besoin de cette puissance supplémentaire.",
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=RTX+4070+GPU+bureau',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'Voir les prix des GPU NVIDIA RTX',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'MacBook Intel ou iMac ? Une eGPU est un cas différent, plus raisonnable',
        content: [
          "C'est là que la réponse change. Les anciens Mac Intel — MacBook Pro Intel et iMac Intel compris — prennent en charge les GPU externes au niveau de macOS via Thunderbolt 3, donc une eGPU peut être un moyen raisonnable de prolonger la durée de vie utile d'une machine existante. Les iMac Apple Silicon (l'iMac série M actuel) suivent les mêmes règles que les MacBook Apple Silicon : aucune voie eGPU pour Ollama.",
          "Ollama n'envoie toujours rien vers l'eGPU sur un Mac Intel — il n'accélère que via Apple-Silicon Metal. La solution de contournement consiste à compiler llama.cpp avec le backend Vulkan via MoltenVK, qui peut exécuter l'inférence sur une eGPU AMD (par exemple une Radeon RX 6800/6900 XT) avec environ 15–17 % de surcoût dû à la bande passante Thunderbolt. Cela nécessite une compilation manuelle, donc ce n'est pas aussi clé en main qu'Ollama sur Apple Silicon — mais c'est une option réelle si vous possédez déjà le Mac Intel.",
          "Si vous achetez un Mac aujourd'hui spécifiquement pour l'IA locale, achetez de l'Apple Silicon et privilégiez la mémoire unifiée à la place — n'achetez pas un Mac Intel pour cet usage.",
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les eGPU et les MacBook',
        faqs: [
          {
            q: "Pourquoi mon MacBook Apple Silicon ne prend-il pas en charge une eGPU pour Ollama ?",
            a: "Ollama n'envoie l'inférence qu'au GPU intégré à la puce Apple Silicon, via Metal. Il n'existe aucune voie CUDA ou ROCm sous macOS, et l'accélération GPU propre d'Apple est uniquement Metal. Le pilote TinyGPU d'Apple d'avril 2026 permet à des eGPU de faire du calcul IA sur Apple Silicon, mais uniquement via le framework tinygrad — Ollama ne l'utilise pas.",
          },
          {
            q: 'Quelle est la meilleure carte graphique pour un MacBook Pro ?',
            a: "Pour un MacBook Pro Apple Silicon, il n'existe pas de carte graphique évolutive ou externe au sens traditionnel — le GPU est intégré à la puce, et c'est celui-là même qu'Ollama, LM Studio et llama.cpp accélèrent déjà via Metal. La véritable « mise à niveau » consiste à acheter une configuration de MacBook Pro avec plus de mémoire unifiée, pas une carte graphique séparée.",
          },
          {
            q: 'Puis-je ajouter un GPU externe à un iMac ?',
            a: "Cela dépend de l'iMac. Les iMac Intel prennent en charge les GPU externes via Thunderbolt 3 au niveau de macOS, comme les MacBook Pro Intel. Les iMac Apple Silicon actuels (série M) suivent la même architecture que les MacBook Apple Silicon — aucune voie eGPU pour Ollama, et la même réserve TinyGPU/tinygrad s'applique si vous voulez un support eGPU de calcul IA uniquement.",
          },
          {
            q: 'Puis-je utiliser un eGPU avec Ollama sur un MacBook Intel ?',
            a: "L'eGPU fonctionne au niveau de macOS, mais Ollama ne l'utilisera pas. Les MacBook Intel (comme le MacBook Pro 16\") prennent en charge les eGPU AMD via Thunderbolt 3, mais Ollama n'accélère que via Apple-Silicon Metal — il ignore entièrement les GPU tiers, même sur les Mac Intel. La solution de contournement consiste à compiler llama.cpp avec le backend Vulkan via MoltenVK, qui peut exécuter l'inférence sur une eGPU AMD (par ex. Radeon RX 6800/6900 XT) sur un Mac Intel, avec environ 15–17 % de surcoût dû à la bande passante Thunderbolt. Cela nécessite une compilation manuelle.",
          },
          {
            q: "Quel est le moyen le plus rapide d'accélérer Ollama sur un MacBook ?",
            a: "Acheter plus de mémoire unifiée. Un MacBook Pro avec 32 Go, 48 Go ou 64 Go de mémoire unifiée exécute des modèles plus grands localement avec l'accélération Metal GPU complète. Il n'existe aucune option d'accélérateur externe spécifiquement pour Ollama sur Apple Silicon.",
          },
          {
            q: 'Les eGPU fonctionnent-ils pour Ollama sur des laptops Linux ?',
            a: "Oui. Un laptop Linux avec Thunderbolt 4 ou OCuLink peut connecter un GPU de bureau NVIDIA ou AMD et exécuter Ollama via CUDA ou ROCm. Les performances sont limitées par la bande passante Thunderbolt 4 (40 Gbit/s), mais cela fonctionne — c'est l'équivalent non-Apple de la configuration eGPU souvent demandée pour les Mac.",
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Le Mac Mini M4 est-il bon pour les LLM locaux ?](/fr/prompt-bites/mac-mini-m4-local-llm) — l\'équivalent desktop avec la même architecture',
          '[Guide d\'achat GPU pour LLM local 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — pour la voie du système NVIDIA séparé',
          '[Meilleur laptop AI budget sous 1 000 $](/fr/prompt-bites/best-budget-ai-laptop-under-1000) — alternatives non-Apple à l\'entrée de gamme',
          '[Meilleur mini-PC pour LLM local](/fr/prompt-bites/best-mini-pc-for-local-llm) — mini-PC desktop vs mémoire unifiée du MacBook',
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-ja.webp',
    title: '2026年版：MacBookでOllamaに最適なeGPUは？',
    seoTitle: 'MacBook向けOllama最適eGPU（2026年）',
    metaDescription: 'Apple Silicon MacBookでは、eGPUはOllamaに適したアップグレードでないことが多い — すでにMetalを使っています。より多くのユニファイドメモリか、本格的な性能には別のNVIDIAシステムを。',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Ollama高速化のためeGPU導入を検討するMacBookユーザー',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3分で読める',
    leadAnswerBlock:
      'Apple Silicon MacBookでは、eGPUはOllama向けに買うべきアップグレードでないことが多いです。OllamaはすでにMacの内蔵GPUをMetal経由で高速化に使っているため、ユニファイドメモリを増やす方が外部GPUより本地LLMの実行能力に効きます。2026年4月以降、AppleはTinyGPUというサードパーティドライバを承認し、NVIDIA/AMD eGPUがThunderboltまたはUSB4経由でApple SiliconでAI計算を行えるようになりましたが、これはtinygradフレームワーク経由でのみ動作し、Ollamaでは動作しないため、Ollamaユーザーにとってこの推奨は今のところ変わりません。どのMac構成よりも大幅に高いローカルAI性能が必要なら、別のNVIDIA GPUシステムの方が良い投資です。Intel MacBookやiMacの場合は、eGPUはより理にかなった選択肢です — 下記参照。',
    toc: [
      { label: 'クイックアンサー', anchor: '#best-pick' },
      { label: 'なぜeGPUがApple SiliconでOllamaのアップグレードにならないか', anchor: '#comparison' },
      { label: '欲しいモデルに応じてメモリを買う', anchor: '#memory-guide' },
      { label: 'もっと性能が必要？NVIDIAを買う', anchor: '#nvidia-path' },
      { label: 'Intel MacBookやiMacの場合は？', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    intro:
      'eGPUエンクロージャは外部GPUをThunderbolt、USB4、またはOCuLink経由でラップトップに接続します。Apple Silicon MacBookでは、Ollamaがそれを使う経路がありません — OllamaはMacの内蔵GPUであるMetalのみを高速化に使います。これは価格や供給の問題ではなくアーキテクチャとソフトウェアの問題であり、このページは買い物リストではなく購入判断のためのものです。',
    quickAnswerTop: {
      ja: {
        question: 'MacBookでOllamaに最適なeGPUは何ですか？',
        answer: 'Apple Silicon MacBookでは、Ollamaを高速化するeGPUは存在しません — 代わりにユニファイドメモリを増やしてください。Macで得られるより大幅に高いローカルAI性能が必要なら、別のNVIDIA GPUシステムを買ってください。Intel MacBookやiMacを所有しているなら、eGPUは本当に理にかなった選択肢です。',
        bullets: [
          'Apple SiliconのOllamaはチップに内蔵されたMetalを使用します — Appleの新しいTinyGPUドライバの有無にかかわらず、eGPUの経路はありません。',
          'Appleは2026年4月にTinyGPUを承認し、NVIDIA/AMD eGPUがApple SiliconでAI計算を行えるようになりましたが、tinygradフレームワーク経由のみで、Ollama経由ではありません。',
          'Intel Macでは、AMD eGPUがThunderbolt 3経由で物理的に動作し、Vulkan（MoltenVK）経由でllama.cppを高速化できますが、Ollama自体は直接使えません。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon + Ollama：内蔵のMetal GPUを使う — eGPUは買うべきアップグレードでないことが多い',
          'Apple Siliconでより大きなローカルモデルを動かす本当のアップグレード経路はユニファイドメモリの増設',
          'Appleは2026年4月にAI計算用eGPU向けのサードパーティドライバ（TinyGPU）を承認したが、これはtinygrad経由でOllama経由ではない',
          'Macが提供する以上のローカルAI性能が必要？別のNVIDIA GPUシステムの方が良い投資',
          'Intel MacやiMacを所有？eGPUは本当に異なる、より理にかなったケース — Intel Macのセクションを参照',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'クイックアンサー',
        content: [
          'Apple Silicon MacBookを持っているなら、OllamaのためにeGPUを買わないでください — ユニファイドメモリを増やしてください。OllamaはすでにMacの内蔵GPUをMetal経由で使っています。優先順位が「ローカルAIも動くMacBook」から「最大のローカルAI性能」に変わるなら、別のNVIDIA GPUシステムの方が良い買い物です。すでにIntel MacBookやiMacを持っているなら、eGPUはその寿命を延ばす本当に理にかなった方法です。',
        ],
        items: [
          '🍎 Apple Siliconに最適な解決策：eGPUではなくユニファイドメモリを増やす',
          '💰 最適な予算重視の一手：MacBookをそのまま使い、内蔵のMetal GPUをそのまま使う',
          '🚀 もっとGPU性能が必要？別のNVIDIA GPUシステムを買う',
          '⚠️ Intel MacやiMacをお持ちですか？eGPUが理にかなう場合があります — 根本的に異なる状況です',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: '大容量メモリのMacBookの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Mac Studioの価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'なぜeGPUがApple SiliconでOllamaのアップグレードにならないか',
        content: [
          'Apple SiliconではGPUがCPUと同じ物理RAM（ユニファイドメモリ）を共有し、Ollamaはその内蔵GPUにのみMetal経由で推論を送ります。外部カードで拡張できる独立したVRAMプールはなく、OllamaはWindowsやLinuxのようなmacOS上のNVIDIA/AMDアクセラレーション経路を持ちません。',
          'これは2026年4月にわずかに変わりました。AppleはTinyGPUを承認しました。これはTiny Corp（tinygradの開発元）によるサードパーティ製DriverKit拡張で、NVIDIA（Ampereまたはそれ以降）またはAMD（RDNA3以降）のeGPUが、System Integrity Protectionを無効化することなくThunderboltまたはUSB4経由でApple SiliconでAI計算を行えるようにするものです。これは計算専用です — ゲームアクセラレーションもディスプレイ出力もMetal APIサポートもなく、tinygradフレームワーク（`DEV=NV`または`DEV=AMD`）経由でのみ動作します。Ollamaはtinygradを使わないため、これはOllamaにeGPU経路を与えるものではありません。主にすでにtinygradで開発している開発者にとって意味があります。',
          'Ollamaを特に使う人にとっては、eGPUエンクロージャ、GPU、電源、Thunderboltの互換性トラブルシューティングは、Ollamaがそれでも使わない構成のために多額の費用と手間をかけることになります。ユニファイドメモリを増やす方がシンプルで、有用な1GBあたりの費用も安く、今日すぐ設定なしで使えます。',
        ],
        columns: ['制約', 'Apple Silicon MacBook', 'TB4/OCuLink搭載Linuxラップトップ'],
        rows: [
          {
            '制約': 'Ollama eGPUアクセラレーション',
            'Apple Silicon MacBook': '経路なし — Metalのみ',
            'TB4/OCuLink搭載Linuxラップトップ': 'CUDAまたはROCmで動作',
          },
          {
            '制約': '何らかのAI計算eGPU経路',
            'Apple Silicon MacBook': 'TinyGPU（2026年4月以降、tinygradのみ）',
            'TB4/OCuLink搭載Linuxラップトップ': 'ネイティブNVIDIA/AMDドライバ',
          },
          {
            '制約': 'メモリアーキテクチャ',
            'Apple Silicon MacBook': 'ユニファイドメモリのみ',
            'TB4/OCuLink搭載Linuxラップトップ': 'eGPU上の独立VRAM',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: '欲しいモデルに応じてメモリを買う',
        content: [
          'Apple SiliconでのローカルLLMでは、ユニファイドメモリの容量がそもそもどのモデルを読み込めるかを決めます — GPUの速度は読み込めるモデルがどれだけ速く動くかだけを決めます。',
          '2026年8月のApple製品ラインナップ更新でデスクトップMacのメモリ上限が引き上げられました。Mac miniは899ドル（M6、最大32GB）または1,699ドル（M5 Pro、最大64GB）から、Mac Studioは2,499ドル（M5 Max、最大128GB）から5,499ドル（M5 Ultra、最大512GB）まであります。これらの上限はデスクトップ系列のもので、MacBook Proの上限は依然としてこれより低いままです。',
        ],
        columns: ['ユニファイドメモリ', '評価'],
        rows: [
          { 'ユニファイドメモリ': '16 GB', '評価': '🟡 小型モデルのみ' },
          { 'ユニファイドメモリ': '24 GB', '評価': '🟢 明らかに余裕が増える' },
          { 'ユニファイドメモリ': '32 GB', '評価': '🟢 強力なポータブル構成' },
          { 'ユニファイドメモリ': '48 GB以上', '評価': '🚀 モデルの余裕が大幅に増える' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: 'もっと性能が必要？別のNVIDIAシステムを買う',
        content: [
          '優先順位が「ローカルAIも動くMacBook」から「最大のローカルAI性能」に変わったら、MacにGPU性能を無理に付け足そうとするのではなく、別のNVIDIAマシンを買ってください。OllamaはRTX 30、40、50シリーズ（およびそれ以降）のNVIDIA GPUをCUDA経由でサポートしており、専用のVRAM、はるかに幅広いハードウェア選択肢、そしてどのMacも提供できない素直なアップグレード性が得られます。',
          'これは妥協ではなく、明確な役割分担です。携帯性と日常使いにはMacBookを維持し、実際に追加の性能を必要とするローカルAIワークロードにはNVIDIAシステムを使ってください。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+4070+desktop+GPU',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'NVIDIA RTX GPUの価格を確認',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'Intel MacBookやiMacの場合は？eGPUは異なる、より理にかなったケース',
        content: [
          'ここで答えが変わります。古いIntel Mac — Intel MacBook ProやIntel iMacを含む — はThunderbolt 3経由でmacOSレベルの外部GPUに対応しているため、既存機の実用寿命を延ばす合理的な方法としてeGPUが使える場合があります。Apple Silicon iMac（現行のMシリーズiMac）はApple Silicon MacBookと同じルールに従います：Ollama向けのeGPU経路はありません。',
          'Intel Macでも、Ollamaは依然としてeGPUにタスクを送りません — Apple SiliconのMetalのみを高速化します。回避策はVulkanバックエンドをMoltenVK経由でビルドしたllama.cppで、Intel Mac上のAMD eGPU（例：Radeon RX 6800/6900 XT）でThunderbolt帯域によるおよそ15〜17%のオーバーヘッドで推論を実行できます。手動コンパイルが必要なため、Apple SiliconのOllamaほど手軽ではありませんが、すでにIntel Macを所有しているなら真の選択肢です。',
          '今日ローカルAIのために特にMacを買うなら、代わりにApple Siliconを買い、ユニファイドメモリを優先してください — この用途のためにIntel Macを買わないでください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'eGPUとMacBookに関する短い回答',
        faqs: [
          {
            q: 'なぜApple Silicon MacBookはOllama向けのeGPUに対応していませんか？',
            a: 'OllamaはApple Siliconチップに内蔵されたGPUにのみ、Metal経由で推論を送ります。macOSにはCUDAやROCmの経路がなく、Apple自身のGPUアクセラレーションはMetalのみです。2026年4月のAppleのTinyGPUドライバはeGPUがApple SiliconでAI計算を行えるようにしますが、tinygradフレームワーク経由のみです — Ollamaはそれを使いません。',
          },
          {
            q: 'MacBook Proに最適なグラフィックカードは何ですか？',
            a: 'Apple Silicon MacBook Proには、従来の意味でアップグレード可能または外部のグラフィックカードは存在しません — GPUはチップに内蔵されており、それこそがOllama、LM Studio、llama.cppがすでにMetal経由で高速化に使っているものです。実質的な「アップグレード」は、別のグラフィックカードではなく、より多くのユニファイドメモリを搭載したMacBook Pro構成を買うことです。',
          },
          {
            q: 'iMacに外部GPUを追加できますか？',
            a: 'どのiMacかによります。Intel iMacはIntel MacBook Proと同様、macOSレベルでThunderbolt 3経由の外部GPUに対応しています。現行のApple Silicon iMac（Mシリーズ）はApple Silicon MacBookと同じアーキテクチャに従います — Ollama向けのeGPU経路はなく、AI計算専用のeGPUサポートを求める場合は同じTinyGPU/tinygradの制約が当てはまります。',
          },
          {
            q: 'Intel MacBookでOllamaとeGPUを使えますか？',
            a: 'eGPUはmacOSレベルで動作しますが、Ollamaはそれを使いません。Intel MacBook（16インチMacBook Proなど）はThunderbolt 3経由のAMD eGPUに対応していますが、OllamaはApple SiliconのMetalのみにディスパッチし、Intel Macであってもサードパーティ製GPUを完全に無視します。回避策はllama.cppをVulkanバックエンドでMoltenVK経由でビルドすることで、Intel Mac上でAMD eGPU（例：Radeon RX 6800/6900 XT）で、Thunderbolt帯域によるおよそ15〜17%のオーバーヘッドで推論を実行できます。手動コンパイルが必要です。',
          },
          {
            q: 'MacBookでOllamaを最速で速くする方法は？',
            a: 'ユニファイドメモリを増やすことです。32 GB、48 GB、または64 GBのユニファイドメモリを搭載したMacBook Proなら、Metal GPUアクセラレーション付きでより大きなモデルをローカル実行できます。Apple Silicon上のOllamaに特化した外部アクセラレータの選択肢はありません。',
          },
          {
            q: 'Linuxラップトップ上のOllamaでeGPUは動作しますか？',
            a: 'はい。Thunderbolt 4またはOCuLinkを備えたLinuxラップトップはデスクトップNVIDIA/AMD GPUを接続し、CUDAまたはROCm経由でOllamaを実行できます。Thunderbolt 4の帯域（40 Gbps）に制限されますが、動作します — これはMac向けによく聞かれるeGPU構成のApple以外での相当品です。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[Mac Mini M4はローカルLLMに向いている？](/ja/prompt-bites/mac-mini-m4-local-llm) — 同じアーキテクチャのデスクトップ版',
          '[2026年ローカルLLM向けGPU購入ガイド](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 別のNVIDIAシステムを選ぶ場合の経路',
          '[1,000ドル以下のベストAI予算ラップトップ](/ja/prompt-bites/best-budget-ai-laptop-under-1000) — Apple以外のエントリー層代替',
          '[ローカルLLM向けベストミニPC](/ja/prompt-bites/best-mini-pc-for-local-llm) — デスクトップミニPCとMacBookのユニファイドメモリ比較',
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-zh.webp',
    title: '2026年MacBook上运行Ollama的最佳eGPU是什么？',
    seoTitle: 'MacBook Ollama最佳eGPU（2026年）',
    metaDescription: '对于Apple Silicon MacBook，eGPU通常不是Ollama的正确升级方案——Ollama已经在用Metal加速。应买更多统一内存，若需要真正的高性能则买独立的NVIDIA系统。',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: '考虑使用eGPU加速Ollama的MacBook用户',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '阅读约3分钟',
    leadAnswerBlock:
      '对于Apple Silicon MacBook，eGPU通常不是应该为Ollama购买的升级方案。Ollama已经通过Metal使用Mac内置GPU进行加速，因此买更多统一内存对本地LLM能力的提升，比任何外接GPU都更大。自2026年4月起，苹果批准了一款名为TinyGPU的第三方驱动，让NVIDIA和AMD eGPU可以通过Thunderbolt或USB4在Apple Silicon上进行AI计算——但这仅通过tinygrad框架工作，与Ollama无关，因此目前不会改变对Ollama用户的这一建议。如果你需要的本地AI性能远超任何Mac配置所能提供的，独立的NVIDIA GPU系统才是更好的投资。如果你使用的是Intel MacBook或iMac，eGPU是更合理的选择——详见下文。',
    toc: [
      { label: '快速答案', anchor: '#best-pick' },
      { label: '为什么eGPU不是Apple Silicon上Ollama的升级方案', anchor: '#comparison' },
      { label: '根据想运行的模型购买内存', anchor: '#memory-guide' },
      { label: '需要更强性能？购买NVIDIA', anchor: '#nvidia-path' },
      { label: 'Intel Mac或iMac怎么办？', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related' },
    ],
    intro:
      'eGPU机箱通过Thunderbolt、USB4或OCuLink将外部GPU连接到笔记本电脑。在Apple Silicon MacBook上，Ollama没有使用它的途径——Ollama只通过Metal（Mac的内置GPU）进行加速。这是架构和软件问题，不是价格或供货问题，所以本页是一个购买决策，而不是购物清单。',
    quickAnswerTop: {
      zh: {
        question: 'MacBook上运行Ollama的最佳eGPU是什么？',
        answer: '对于Apple Silicon MacBook，没有任何eGPU能加速Ollama——应改为购买更多统一内存。如果你需要的本地AI性能远超Mac所能提供的，请购买独立的NVIDIA GPU系统。如果你拥有Intel MacBook或iMac，eGPU是真正合理的选择。',
        bullets: [
          'Apple Silicon上的Ollama使用芯片内置的Metal——无论有没有苹果新推出的TinyGPU驱动，都没有eGPU路径。',
          '苹果于2026年4月批准了TinyGPU，使NVIDIA/AMD eGPU可以在Apple Silicon上进行AI计算——但仅通过tinygrad框架，而非Ollama。',
          '在Intel Mac上，AMD eGPU可以通过Thunderbolt 3在物理层面工作，并可通过Vulkan（MoltenVK）加速llama.cpp——但不能直接用于Ollama本身。',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon + Ollama：使用内置的Metal GPU——eGPU通常不是应该购买的升级方案',
          '在Apple Silicon上运行更大本地模型的真正升级路径是增加统一内存',
          '苹果于2026年4月批准了用于AI计算的第三方eGPU驱动（TinyGPU），但它通过tinygrad运行，与Ollama无关',
          '需要的本地AI性能远超Mac所能提供？独立的NVIDIA GPU系统是更好的投资',
          '拥有Intel Mac或iMac？eGPU是一种真正不同、更合理的情况——参见Intel Mac部分',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '快速答案',
        content: [
          '如果你有Apple Silicon MacBook，不要为Ollama购买eGPU——应购买更多统一内存，因为Ollama已经通过Metal在Mac内置GPU上运行。如果你的优先事项从"一台也能运行本地AI的MacBook"转变为"最大化的本地AI性能"，独立的NVIDIA GPU系统是更好的选择。如果你已经拥有Intel MacBook或iMac，eGPU是延长其使用寿命的真正合理方式。',
        ],
        items: [
          '🍎 Apple Silicon的最佳方案：购买更多统一内存，而非eGPU',
          '💰 最佳预算方案：保留你的MacBook，直接使用其内置Metal GPU',
          '🚀 需要更强GPU性能？购买独立的NVIDIA GPU系统',
          '⚠️ 拥有Intel Mac或iMac？eGPU可能是合理选择——这是根本不同的情况',
        ],
        affiliateLinks: [
          {
            url: 'https://search.jd.com/Search?keyword=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M系列 32GB+',
            productCategory: 'laptop',
            label: '查看大内存MacBook价格',
          },
          {
            url: 'https://search.jd.com/Search?keyword=Mac+Studio+M',
            productName: 'Mac Studio M系列',
            productCategory: 'desktop',
            label: '查看Mac Studio价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '为什么eGPU不是Apple Silicon上Ollama的升级方案',
        content: [
          '在Apple Silicon上，GPU与CPU共享同一物理内存（统一内存），Ollama只通过Metal把推理任务分发给这个内置GPU。没有可以用外接显卡扩展的独立显存池，Ollama在macOS上也没有像在Windows和Linux上那样的NVIDIA/AMD加速路径。',
          '这一点在2026年4月有所变化：苹果批准了TinyGPU，这是Tiny Corp（tinygrad背后的团队）开发的第三方DriverKit扩展，允许NVIDIA（Ampere或更新）或AMD（RDNA3或更新）eGPU通过Thunderbolt或USB4在Apple Silicon上进行AI计算，且无需关闭系统完整性保护（SIP）。它仅限于计算——没有游戏加速、没有显示输出、不支持Metal API——并且只能通过tinygrad框架（`DEV=NV`或`DEV=AMD`）运行。Ollama不使用tinygrad，因此这并不会给Ollama带来eGPU路径；它主要对已经在tinygrad上开发的开发者有意义。',
          '对于专门使用Ollama的人来说，购买eGPU机箱、显卡、电源，再排查Thunderbolt兼容性问题，要花不少钱和精力，最终得到的却是一套Ollama仍然用不上的配置。增加统一内存更简单，按每GB有效容量算更便宜，而且今天就能零配置直接使用。',
        ],
        columns: ['约束', 'Apple Silicon MacBook', 'TB4/OCuLink Linux笔记本'],
        rows: [
          {
            '约束': 'Ollama eGPU加速',
            'Apple Silicon MacBook': '无路径——仅限Metal',
            'TB4/OCuLink Linux笔记本': '可用CUDA或ROCm工作',
          },
          {
            '约束': '任何AI计算eGPU路径',
            'Apple Silicon MacBook': 'TinyGPU（仅tinygrad，2026年4月起）',
            'TB4/OCuLink Linux笔记本': '原生NVIDIA/AMD驱动',
          },
          {
            '约束': '内存架构',
            'Apple Silicon MacBook': '仅统一内存',
            'TB4/OCuLink Linux笔记本': 'eGPU上的独立VRAM',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: '根据想运行的模型购买内存',
        content: [
          '在Apple Silicon上运行本地LLM时，统一内存容量决定了你到底能加载哪些模型——GPU速度只决定能加载的模型运行有多快。',
          '苹果2026年8月的产品线更新提高了桌面Mac的内存上限：Mac mini起售价899美元（M6，最高32GB）或1,699美元（M5 Pro，最高64GB），Mac Studio起售价2,499美元（M5 Max，最高128GB），最高配置5,499美元（M5 Ultra，最高512GB）。这些上限针对的是桌面系列——MacBook Pro的内存上限仍然更低。',
        ],
        columns: ['统一内存', '评价'],
        rows: [
          { '统一内存': '16 GB', '评价': '🟡 仅适合小模型' },
          { '统一内存': '24 GB', '评价': '🟢 余量明显更好' },
          { '统一内存': '32 GB', '评价': '🟢 强大的便携配置' },
          { '统一内存': '48 GB以上', '评价': '🚀 模型余量大幅提升' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: '需要更强性能？购买独立的NVIDIA系统',
        content: [
          '如果你的优先事项从"一台也能处理本地AI的MacBook"转变为"最大化的本地AI性能"，请购买一台独立的NVIDIA主机，而不是试图给Mac硬加GPU性能。Ollama通过CUDA支持RTX 30、40、50系列（及更新）的NVIDIA GPU，这能带来专用显存、更丰富的硬件选择，以及任何Mac都无法提供的直接可升级性。',
          '这是一种清晰的分工，而不是妥协：MacBook继续负责便携性与日常使用，NVIDIA系统则用于真正需要额外性能的本地AI工作负载。',
        ],
        affiliateLinks: [
          {
            url: 'https://search.jd.com/Search?keyword=RTX+4070+桌面显卡',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: '查看NVIDIA RTX显卡价格',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'Intel MacBook或iMac怎么办？eGPU是不同的、更合理的情况',
        content: [
          '在这种情况下答案会改变。较旧的Intel Mac——包括Intel MacBook Pro和Intel iMac——在macOS层面通过Thunderbolt 3支持外部GPU，因此eGPU可以是延长现有设备使用寿命的合理方式。Apple Silicon iMac（当前的M系列iMac）遵循与Apple Silicon MacBook相同的规则：Ollama没有eGPU路径。',
          '在Intel Mac上，Ollama仍然不会把任务分发给eGPU——它只在Apple Silicon的Metal上加速。变通方案是用Vulkan后端（通过MoltenVK）编译llama.cpp，它可以在Intel Mac上的AMD eGPU（例如Radeon RX 6800/6900 XT）上运行推理，Thunderbolt带宽会带来约15–17%的开销。这需要手动编译，因此不像Apple Silicon上的Ollama那样开箱即用——但如果你已经拥有这台Intel Mac，这是一个真实可行的选项。',
          '如果你今天专门为本地AI购买Mac，请改为购买Apple Silicon机型并优先考虑统一内存——不要为这个用途购买Intel Mac。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于eGPU和MacBook的快速答案',
        faqs: [
          {
            q: '为什么我的Apple Silicon MacBook不支持用于Ollama的eGPU？',
            a: 'Ollama只会通过Metal把推理任务分发给Apple Silicon芯片内置的GPU。macOS上没有CUDA或ROCm路径，苹果自己的GPU加速也仅限于Metal。苹果2026年4月推出的TinyGPU驱动让eGPU可以在Apple Silicon上进行AI计算，但仅通过tinygrad框架——Ollama并不使用它。',
          },
          {
            q: 'MacBook Pro最好的显卡是什么？',
            a: '对于Apple Silicon MacBook Pro，传统意义上并不存在可升级或外接的显卡——GPU内置在芯片中，而这正是Ollama、LM Studio和llama.cpp已经通过Metal加速使用的那颗GPU。真正的"升级"是购买统一内存更大的MacBook Pro配置，而不是单独的显卡。',
          },
          {
            q: '可以给iMac添加外接GPU吗？',
            a: '这取决于是哪款iMac。Intel iMac在macOS层面通过Thunderbolt 3支持外接GPU，与Intel MacBook Pro类似。当前的Apple Silicon iMac（M系列）与Apple Silicon MacBook遵循相同的架构——Ollama没有eGPU路径，如果你想要仅限AI计算的eGPU支持，同样适用TinyGPU/tinygrad的限制。',
          },
          {
            q: '我可以在Intel MacBook上用Ollama搭配eGPU吗？',
            a: 'eGPU在macOS层面可以工作，但Ollama不会使用它。Intel MacBook（如16英寸MacBook Pro）通过Thunderbolt 3支持AMD eGPU，但Ollama只向Apple Silicon的Metal分发任务——即使在Intel Mac上，它也会完全忽略第三方GPU。变通方案是用Vulkan后端（经MoltenVK）编译llama.cpp，它可以在Intel Mac上的AMD eGPU（如Radeon RX 6800/6900 XT）上运行推理，Thunderbolt带宽会带来约15–17%的开销，且需要手动编译。',
          },
          {
            q: '在MacBook上加速Ollama最快的方法？',
            a: '购买更多统一内存。配备32 GB、48 GB或64 GB统一内存的MacBook Pro可在本地运行更大模型，并享有完整的Metal GPU加速。在Apple Silicon上，并不存在专门针对Ollama的外部加速器选项。',
          },
          {
            q: 'eGPU在Linux笔记本上对Ollama有效吗？',
            a: '有效。配备Thunderbolt 4或OCuLink的Linux笔记本可连接桌面NVIDIA或AMD GPU，通过CUDA或ROCm运行Ollama。性能受Thunderbolt 4带宽（40 Gbps）限制，但可以工作——这是人们常问的Mac eGPU方案在非Apple平台上的对应方案。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '延伸阅读',
        items: [
          '[Mac Mini M4适合本地LLM吗？](/zh/prompt-bites/mac-mini-m4-local-llm) — 同架构的桌面版',
          '[2026本地LLM GPU购买指南](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 独立NVIDIA系统路线',
          '[1,000美元以下最佳AI预算笔记本](/zh/prompt-bites/best-budget-ai-laptop-under-1000) — 入门层级的非Apple替代',
          '[本地LLM最佳迷你PC](/zh/prompt-bites/best-mini-pc-for-local-llm) — 桌面迷你PC与MacBook统一内存对比',
        ],
      },
    },
  },
  ar: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-ar.webp',
    title: 'أفضل ⁨eGPU⁩ لتشغيل ⁨Ollama⁩ على ⁨MacBook⁩ في ⁨2026⁩',
    seoTitle: 'أفضل ⁨eGPU⁩ لـ ⁨Ollama⁩ على ⁨MacBook⁩ (⁨2026⁩)',
    metaDescription: 'بالنسبة لأجهزة ⁨MacBook⁩ من فئة ⁨Apple Silicon⁩، عادةً ما لا تكون ⁨eGPU⁩ هي الترقية الصحيحة لـ ⁨Ollama⁩ — فهو يستخدم ⁨Metal⁩ بالفعل. اشترِ ذاكرة موحدة أكبر، أو نظام ⁨NVIDIA⁩ منفصل للأداء الجاد.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'مالكو MacBook الذين يفكرون في eGPU لتسريع Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: 'قراءة 3 دقائق',
    leadAnswerBlock:
      'بالنسبة لجهاز MacBook من فئة Apple Silicon، عادةً ما لا تكون eGPU هي الترقية التي يجب شراؤها لـ Ollama. يسرّع Ollama بالفعل عبر وحدة معالجة الرسومات المدمجة في الجهاز باستخدام Metal، لذا فإن شراء المزيد من الذاكرة الموحدة يفيد قدرة النماذج اللغوية الكبيرة المحلية أكثر من أي معالج رسومات خارجي. اعتباراً من أبريل 2026، اعتمدت Apple برنامج تشغيل من جهة خارجية يُدعى TinyGPU يتيح لوحدات eGPU من NVIDIA وAMD إجراء حسابات الذكاء الاصطناعي على Apple Silicon عبر Thunderbolt أو USB4 — لكنه يعمل فقط عبر إطار عمل tinygrad، وليس Ollama، لذا فهو لا يغيّر هذه التوصية لمستخدمي Ollama اليوم. إذا كنت بحاجة إلى أداء ذكاء اصطناعي محلي أعلى بكثير مما يقدمه أي تكوين Mac، فإن نظام NVIDIA منفصل هو الاستثمار الأفضل. أما على MacBook أو iMac بمعالج Intel، فإن eGPU خيار أكثر منطقية — انظر أدناه.',
    toc: [
      { label: 'الإجابة السريعة', anchor: '#best-pick' },
      { label: 'لماذا لا تُعد eGPU ترقية Ollama على Apple Silicon', anchor: '#comparison' },
      { label: 'اشترِ الذاكرة بناءً على النماذج التي تريدها', anchor: '#memory-guide' },
      { label: 'تحتاج أداءً أكبر بكثير؟ اشترِ NVIDIA', anchor: '#nvidia-path' },
      { label: 'جهاز Intel Mac أو iMac؟', anchor: '#intel-mac' },
      { label: 'أسئلة شائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related' },
    ],
    intro:
      'تصل حاويات eGPU معالجَ رسومات خارجياً بحاسب محمول عبر Thunderbolt أو USB4 أو OCuLink. على أجهزة MacBook من فئة Apple Silicon، لا يملك Ollama أي طريقة لاستخدام واحدة منها — يسرّع Ollama فقط عبر Metal، وحدة معالجة الرسومات المدمجة في الجهاز. هذه مسألة بنية معمارية وبرمجيات، لا مسألة سعر أو توفر، لذا فهذه الصفحة قرار شراء، وليست قائمة تسوق.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل eGPU لتشغيل Ollama على MacBook؟',
        answer: 'بالنسبة لجهاز MacBook من فئة Apple Silicon، لا توجد eGPU تسرّع Ollama — اشترِ ذاكرة موحدة أكبر بدلاً من ذلك. إذا كنت بحاجة إلى أداء ذكاء اصطناعي محلي أعلى بكثير مما يقدمه أي Mac، اشترِ نظام NVIDIA منفصلاً. إذا كنت تملك MacBook أو iMac بمعالج Intel، فإن eGPU خيار منطقي حقاً.',
        bullets: [
          'يستخدم Ollama على Apple Silicon تقنية Metal، وحدة معالجة الرسومات المدمجة في الشريحة — لا يوجد مسار eGPU له، سواء مع برنامج تشغيل TinyGPU الجديد من Apple أو بدونه.',
          'اعتمدت Apple TinyGPU في أبريل 2026، مما يتيح لوحدات eGPU من NVIDIA/AMD إجراء حسابات الذكاء الاصطناعي على Apple Silicon — لكن فقط عبر إطار عمل tinygrad، وليس عبر Ollama.',
          'على أجهزة Mac بمعالج Intel، تعمل eGPU من AMD فيزيائياً عبر Thunderbolt 3 ويمكنها تسريع llama.cpp عبر Vulkan (MoltenVK) — لكن ليس Ollama مباشرةً.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon و Ollama: استخدم وحدة معالجة الرسومات المدمجة Metal — عادةً ما لا تكون eGPU هي الترقية التي يجب شراؤها',
          'المزيد من الذاكرة الموحدة هو مسار الترقية الحقيقي لتشغيل نماذج محلية أكبر على Apple Silicon',
          'اعتمدت Apple برنامج تشغيل من جهة خارجية (TinyGPU) في أبريل 2026 لوحدات eGPU المخصصة لحسابات الذكاء الاصطناعي على Apple Silicon، لكنه يعمل عبر tinygrad، وليس Ollama',
          'تحتاج أداء ذكاء اصطناعي محلي أعلى بكثير مما يقدمه أي Mac؟ نظام NVIDIA منفصل هو الاستثمار الأفضل',
          'تملك Intel Mac أو iMac؟ eGPU حالة مختلفة حقاً وأكثر منطقية — راجع قسم Intel Mac',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الإجابة السريعة',
        content: [
          'إذا كنت تملك MacBook من فئة Apple Silicon، فلا تشترِ eGPU من أجل Ollama — اشترِ ذاكرة موحدة أكبر، لأن Ollama يعمل بالفعل على وحدة معالجة الرسومات المدمجة في الجهاز عبر Metal. إذا تحولت أولويتك من "MacBook يشغّل أيضاً الذكاء الاصطناعي المحلي" إلى "أقصى أداء للذكاء الاصطناعي المحلي"، فإن نظام NVIDIA منفصلاً هو الشراء الأفضل. إذا كنت تملك بالفعل MacBook أو iMac بمعالج Intel، فإن eGPU طريقة منطقية حقاً لإطالة عمره الافتراضي.',
        ],
        items: [
          '🍎 أفضل حل لأجهزة Apple Silicon: اشترِ ذاكرة موحدة أكبر، لا eGPU',
          '💰 أفضل خطوة اقتصادية: احتفظ بجهاز MacBook واستخدم وحدة معالجة الرسومات Metal المدمجة كما هي',
          '🚀 تحتاج قوة معالجة رسومات أكبر بكثير؟ اشترِ نظام NVIDIA منفصلاً',
          '⚠️ تملك Intel Mac أو iMac؟ قد تكون eGPU منطقية — حالة مختلفة جذرياً',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'تحقق من أسعار أجهزة MacBook ذات الذاكرة الكبيرة',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'تحقق من أسعار Mac Studio',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'لماذا لا تُعد eGPU ترقية Ollama على Apple Silicon',
        content: [
          'في Apple Silicon، تشترك وحدة معالجة الرسومات في نفس RAM الفيزيائية مع وحدة المعالجة المركزية (الذاكرة الموحدة)، ولا يوجّه Ollama الاستدلال إلا إلى وحدة معالجة الرسومات المدمجة هذه عبر Metal. لا يوجد مجموعة VRAM منفصلة يمكن توسيعها ببطاقة خارجية، ولا يملك Ollama مسار تسريع NVIDIA/AMD في macOS كما هو الحال في Windows وLinux.',
          'تغيّر هذا قليلاً في أبريل 2026: اعتمدت Apple TinyGPU، وهو امتداد DriverKit من جهة خارجية طورته Tiny Corp (الفريق وراء tinygrad) يتيح لوحدة eGPU من NVIDIA (Ampere أو أحدث) أو AMD (RDNA3 أو أحدث) إجراء حسابات الذكاء الاصطناعي على Apple Silicon عبر Thunderbolt أو USB4، دون تعطيل حماية سلامة النظام (SIP). إنه مخصص للحوسبة فقط — لا تسريع للألعاب، ولا إخراج شاشة، ولا دعم لواجهة Metal — ويعمل فقط عبر إطار عمل tinygrad (`DEV=NV` أو `DEV=AMD`). لا يستخدم Ollama إطار tinygrad، لذا فهذا لا يمنح Ollama مساراً لـ eGPU؛ إنه مهم بشكل أساسي للمطورين الذين يبنون بالفعل على tinygrad.',
          'بالنسبة لأي شخص يستخدم Ollama تحديداً، فإن شراء حاوية eGPU ومعالج رسومات ومزود طاقة واستكشاف مشاكل توافق Thunderbolt وإصلاحها يمثل الكثير من المال والجهد مقابل إعداد لن يستخدمه Ollama رغم كل ذلك. المزيد من الذاكرة الموحدة أبسط، وأرخص لكل غيغابايت مفيد، ويعمل اليوم دون أي إعداد.',
        ],
        columns: ['القيد', 'MacBook Apple Silicon', 'حاسب Linux مع TB4/OCuLink'],
        rows: [
          {
            'القيد': 'تسريع eGPU لـ Ollama',
            'MacBook Apple Silicon': 'لا مسار — Metal فقط',
            'حاسب Linux مع TB4/OCuLink': 'تعمل مع CUDA أو ROCm',
          },
          {
            'القيد': 'أي مسار eGPU لحسابات الذكاء الاصطناعي',
            'MacBook Apple Silicon': 'TinyGPU (tinygrad فقط، منذ أبريل 2026)',
            'حاسب Linux مع TB4/OCuLink': 'تعريفات NVIDIA/AMD أصلية',
          },
          {
            'القيد': 'بنية الذاكرة',
            'MacBook Apple Silicon': 'ذاكرة موحدة فقط',
            'حاسب Linux مع TB4/OCuLink': 'VRAM مستقلة في eGPU',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: 'اشترِ الذاكرة بناءً على النماذج التي تريدها',
        content: [
          'بالنسبة للنماذج اللغوية الكبيرة المحلية على Apple Silicon، تحدد سعة الذاكرة الموحدة أي النماذج يمكنك تحميلها أصلاً — سرعة معالج الرسومات تحدد فقط مدى سرعة تشغيل نموذج قابل للتحميل.',
          'رفع تحديث تشكيلة آبل في أغسطس 2026 سقوف الذاكرة في أجهزة Mac المكتبية: يبدأ Mac mini من 899 دولارًا (M6، حتى 32 جيجابايت) أو 1699 دولارًا (M5 Pro، حتى 64 جيجابايت)، ويبدأ Mac Studio من 2499 دولارًا (M5 Max، حتى 128 جيجابايت) وصولًا إلى 5499 دولارًا (M5 Ultra، حتى 512 جيجابايت). هذه السقوف خاصة بتشكيلة أجهزة سطح المكتب — لا يزال MacBook Pro محدودًا بسقف أقل.',
        ],
        columns: ['الذاكرة الموحدة', 'الحكم'],
        rows: [
          { 'الذاكرة الموحدة': '16 جيجابايت', 'الحكم': '🟡 نماذج صغيرة فقط' },
          { 'الذاكرة الموحدة': '24 جيجابايت', 'الحكم': '🟢 هامش أفضل بشكل ملموس' },
          { 'الذاكرة الموحدة': '32 جيجابايت', 'الحكم': '🟢 إعداد محمول قوي' },
          { 'الذاكرة الموحدة': '48 جيجابايت فأكثر', 'الحكم': '🚀 هامش نماذج أكبر بكثير' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: 'تحتاج أداءً أكبر بكثير؟ اشترِ نظام NVIDIA منفصلاً',
        content: [
          'إذا تحولت أولويتك من "MacBook يشغّل أيضاً الذكاء الاصطناعي المحلي" إلى "أقصى أداء للذكاء الاصطناعي المحلي"، اشترِ جهاز NVIDIA منفصلاً بدلاً من محاولة إضافة قوة معالجة رسومات إلى جهاز Mac. يدعم Ollama وحدات معالجة رسومات NVIDIA عبر سلاسل RTX 30 و40 و50 (وأحدث) من خلال CUDA، مما يمنحك VRAM مخصصة، ومجموعة أوسع بكثير من خيارات الأجهزة، وقابلية ترقية مباشرة لا يقدمها أي جهاز Mac.',
          'هذا فصل واضح، لا حل وسط: احتفظ بجهاز MacBook للتنقل والاستخدام اليومي، واستخدم نظام NVIDIA لأعباء الذكاء الاصطناعي المحلي التي تحتاج فعلياً إلى القوة الإضافية.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+desktop+GPU',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'تحقق من أسعار معالجات NVIDIA RTX',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'جهاز Intel MacBook أو iMac؟ eGPU حالة مختلفة وأكثر منطقية',
        content: [
          'هنا تتغير الإجابة. تدعم أجهزة Mac القديمة بمعالج Intel — بما في ذلك MacBook Pro وiMac بمعالج Intel — معالجات الرسومات الخارجية على مستوى macOS عبر Thunderbolt 3، لذا يمكن أن تكون eGPU طريقة منطقية لإطالة العمر الافتراضي لجهاز موجود بالفعل. تتبع أجهزة iMac من فئة Apple Silicon (جهاز iMac الحالي من سلسلة M) نفس قواعد أجهزة MacBook من فئة Apple Silicon: لا مسار eGPU لـ Ollama.',
          'لا يزال Ollama لا يوجّه المهام إلى eGPU على جهاز Mac بمعالج Intel — فهو يسرّع فقط عبر Apple-Silicon Metal. الحل البديل هو بناء llama.cpp بواجهة Vulkan الخلفية عبر MoltenVK، والذي يمكنه تشغيل الاستدلال على eGPU من AMD (مثل Radeon RX 6800/6900 XT) بزيادة عبء تقارب 15–17٪ بسبب عرض نطاق Thunderbolt. يتطلب تجميعاً يدوياً، لذا فهو ليس جاهزاً بقدر Ollama على Apple Silicon — لكنه خيار حقيقي إذا كنت تملك بالفعل جهاز Mac بمعالج Intel.',
          'إذا كنت تشتري جهاز Mac اليوم خصيصاً للذكاء الاصطناعي المحلي، فاشترِ Apple Silicon وأعطِ الأولوية للذاكرة الموحدة بدلاً من ذلك — لا تشترِ جهاز Mac بمعالج Intel لهذا الاستخدام.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة حول eGPU وأجهزة MacBook',
        faqs: [
          {
            q: 'لماذا لا يدعم جهاز MacBook من فئة Apple Silicon الخاص بي eGPU لتشغيل Ollama؟',
            a: 'يوجّه Ollama الاستدلال فقط إلى وحدة معالجة الرسومات المدمجة في شريحة Apple Silicon، عبر Metal. لا يوجد مسار CUDA أو ROCm في macOS، وتسريع معالجة الرسومات الخاص بـ Apple نفسها مقتصر على Metal. يتيح برنامج تشغيل TinyGPU من Apple الصادر في أبريل 2026 لوحدات eGPU إجراء حسابات الذكاء الاصطناعي على Apple Silicon، لكن فقط عبر إطار عمل tinygrad — ولا يستخدمه Ollama.',
          },
          {
            q: 'ما أفضل بطاقة رسومات لجهاز MacBook Pro؟',
            a: 'بالنسبة لجهاز MacBook Pro من فئة Apple Silicon، لا توجد بطاقة رسومات قابلة للترقية أو خارجية بالمعنى التقليدي — فوحدة معالجة الرسومات مدمجة في الشريحة، وهي نفسها التي يسرّع Ollama وLM Studio وllama.cpp عبرها بالفعل باستخدام Metal. "الترقية" الفعلية هي شراء تكوين MacBook Pro بذاكرة موحدة أكبر، وليس بطاقة رسومات منفصلة.',
          },
          {
            q: 'هل يمكنني إضافة معالج رسومات خارجي إلى جهاز iMac؟',
            a: 'يعتمد ذلك على نوع جهاز iMac. تدعم أجهزة iMac بمعالج Intel معالجات الرسومات الخارجية عبر Thunderbolt 3 على مستوى macOS، على غرار MacBook Pro بمعالج Intel. تتبع أجهزة iMac الحالية من فئة Apple Silicon (سلسلة M) نفس بنية أجهزة MacBook من فئة Apple Silicon — لا مسار eGPU لـ Ollama، وينطبق نفس تحفظ TinyGPU/tinygrad إذا كنت تريد دعم eGPU مخصصاً لحسابات الذكاء الاصطناعي فقط.',
          },
          {
            q: 'هل يمكنني استخدام eGPU مع Ollama على MacBook بمعالج Intel؟',
            a: 'تعمل eGPU على مستوى macOS، لكن Ollama لن يستخدمها. تدعم أجهزة MacBook بمعالج Intel (مثل MacBook Pro مقاس 16 بوصة) eGPU من AMD عبر Thunderbolt 3، لكن Ollama يوجّه المهام فقط إلى Apple-Silicon Metal — ويتجاهل معالجات الرسومات من جهات خارجية تماماً، حتى على أجهزة Mac بمعالج Intel. الحل البديل هو بناء llama.cpp بواجهة Vulkan الخلفية عبر MoltenVK، والذي يمكنه تشغيل الاستدلال على eGPU من AMD (مثل Radeon RX 6800/6900 XT) على جهاز Mac بمعالج Intel، بزيادة عبء تقارب 15–17٪ بسبب عرض نطاق Thunderbolt. يتطلب تجميعاً يدوياً.',
          },
          {
            q: 'ما أسرع طريقة لتسريع Ollama على MacBook؟',
            a: 'اشترِ ذاكرة موحدة أكبر. يشغّل MacBook Pro بـ32 أو 48 أو 64 جيجابايت من الذاكرة الموحدة نماذج أكبر محلياً مع تسريع GPU Metal كامل. لا يوجد خيار مُسرِّع خارجي مخصص لـ Ollama على Apple Silicon.',
          },
          {
            q: 'هل تعمل eGPU مع Ollama على الحاسبات المحمولة التي تعمل بنظام Linux؟',
            a: 'نعم. يمكن لحاسب محمول يعمل بنظام Linux مع Thunderbolt 4 أو OCuLink توصيل معالج رسومات NVIDIA أو AMD مكتبي وتشغيل Ollama عبر CUDA أو ROCm. يُحدّ الأداء بنطاق ترددي Thunderbolt 4 (40 جيجابت/ثانية)، لكنه يعمل — وهذا هو النظير غير التابع لـ Apple لإعداد eGPU الذي يسأل عنه كثيرون بخصوص أجهزة Mac.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءة ذات صلة',
        items: [
          '[هل Mac Mini M4 جيد للنماذج اللغوية الكبيرة المحلية؟](/ar/prompt-bites/mac-mini-m4-local-llm) — المكافئ المكتبي بنفس البنية المعمارية',
          '[دليل شراء GPU لنماذج اللغة المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — لمسار نظام NVIDIA المنفصل',
          '[أفضل حاسب محمول للذكاء الاصطناعي بأقل من 1,000 دولار](/ar/prompt-bites/best-budget-ai-laptop-under-1000) — البدائل غير التابعة لـ Apple في الفئة الدنيا',
          '[أفضل حاسب مصغر للنماذج اللغوية الكبيرة المحلية](/ar/prompt-bites/best-mini-pc-for-local-llm) — الحاسبات المصغرة المكتبية مقابل الذاكرة الموحدة لـ MacBook',
        ],
      },
    },
  },
  es: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-es.webp',
    title: 'Mejor eGPU para Ollama en un MacBook en 2026',
    seoTitle: 'Mejor eGPU para Ollama en MacBook (2026)',
    metaDescription: 'Para un MacBook Apple Silicon, una eGPU normalmente no es la mejora correcta para Ollama — ya usa Metal. Compra más memoria unificada, o un sistema NVIDIA aparte para rendimiento serio.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de MacBook que consideran un eGPU para acelerar Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 min de lectura',
    leadAnswerBlock:
      'Para un MacBook Apple Silicon, una eGPU normalmente no es la mejora que hay que hacer para Ollama. Ollama ya acelera a través de la GPU integrada del Mac vía Metal, así que comprar más memoria unificada aporta más a la capacidad de LLM local que cualquier GPU externa. Desde abril de 2026, Apple aprobó un driver de terceros llamado TinyGPU que permite a las eGPU NVIDIA y AMD hacer cómputo de IA en Apple Silicon vía Thunderbolt o USB4 — pero solo funciona a través del framework tinygrad, no de Ollama, así que no cambia esta recomendación para los usuarios de Ollama hoy. Si necesitas mucho más rendimiento de IA local del que ofrece cualquier configuración de Mac, un sistema NVIDIA aparte es la mejor inversión. En un MacBook o iMac Intel, una eGPU es una opción más razonable — ver más abajo.',
    toc: [
      { label: 'Respuesta rápida', anchor: '#best-pick' },
      { label: 'Por qué una eGPU no es la mejora de Ollama en Apple Silicon', anchor: '#comparison' },
      { label: 'Compra memoria según los modelos que quieras', anchor: '#memory-guide' },
      { label: '¿Necesitas mucho más rendimiento? Compra NVIDIA', anchor: '#nvidia-path' },
      { label: '¿Mac Intel o iMac?', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    intro:
      'Los gabinetes eGPU conectan una GPU externa a un portátil vía Thunderbolt, USB4 u OCuLink. En los MacBook Apple Silicon, Ollama no tiene forma de usar una — Ollama solo acelera vía Metal, la GPU integrada del Mac. Es una cuestión de arquitectura y software, no de precio o disponibilidad, así que esta página es una decisión de compra, no una lista de la compra.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor eGPU para Ollama en un MacBook?',
        answer: 'Para un MacBook Apple Silicon, ninguna eGPU acelera Ollama — compra más memoria unificada en su lugar. Si necesitas mucho más rendimiento de IA local del que puede ofrecer un Mac, compra un sistema NVIDIA aparte. Si tienes un MacBook o iMac Intel, una eGPU es una opción realmente razonable.',
        bullets: [
          'Ollama en Apple Silicon usa Metal, la GPU integrada en el chip — no hay ninguna vía eGPU para él, con o sin el nuevo driver TinyGPU de Apple.',
          'Apple aprobó TinyGPU en abril de 2026, permitiendo a las eGPU NVIDIA/AMD hacer cómputo de IA en Apple Silicon — pero solo a través del framework tinygrad, no de Ollama.',
          'En los Mac Intel, una eGPU AMD funciona físicamente vía Thunderbolt 3 y puede acelerar llama.cpp vía Vulkan (MoltenVK) — pero no a Ollama directamente.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon + Ollama: usa la GPU Metal integrada — una eGPU normalmente no es la mejora que hay que hacer',
          'Más memoria unificada es la verdadera vía de mejora para modelos locales más grandes en Apple Silicon',
          'Apple aprobó un driver de terceros (TinyGPU) en abril de 2026 para eGPU de cómputo de IA en Apple Silicon, pero funciona vía tinygrad, no Ollama',
          '¿Necesitas mucho más rendimiento de IA local del que ofrece un Mac? Un sistema NVIDIA aparte es la mejor inversión',
          '¿Tienes un Mac Intel o un iMac? Una eGPU es un caso realmente distinto y más razonable — ver la sección de Mac Intel',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Respuesta rápida',
        content: [
          'Si tienes un MacBook Apple Silicon, no compres una eGPU para Ollama — compra más memoria unificada, ya que Ollama ya funciona sobre la GPU integrada del Mac vía Metal. Si tu prioridad cambia de "un MacBook que también hace IA local" a "máximo rendimiento de IA local", un sistema NVIDIA aparte es la mejor compra. Si ya tienes un MacBook o iMac Intel, una eGPU es una forma realmente razonable de prolongar su vida útil.',
        ],
        items: [
          '🍎 Mejor solución para Apple Silicon: compra más memoria unificada, no una eGPU',
          '💰 Mejor jugada económica: quédate con tu MacBook y usa su GPU Metal integrada tal cual',
          '🚀 ¿Necesitas mucha más potencia de GPU? Compra un sistema NVIDIA aparte',
          '⚠️ ¿Tienes un Mac Intel o un iMac? Una eGPU puede tener sentido — una situación fundamentalmente distinta',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Consultar precios de MacBook con mucha memoria',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Consultar precios del Mac Studio',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Por qué una eGPU no es la mejora de Ollama en Apple Silicon',
        content: [
          'En Apple Silicon, la GPU comparte la misma RAM física que la CPU (memoria unificada), y Ollama solo envía la inferencia a esa GPU integrada vía Metal. No hay un pool de VRAM separado que ampliar con una tarjeta externa, y Ollama no tiene ninguna vía de aceleración NVIDIA/AMD en macOS como sí la tiene en Windows y Linux.',
          'Esto cambió ligeramente en abril de 2026: Apple aprobó TinyGPU, una extensión DriverKit de terceros de Tiny Corp (el equipo detrás de tinygrad) que permite a una eGPU NVIDIA (Ampere o más reciente) o AMD (RDNA3 o más reciente) hacer cómputo de IA en Apple Silicon vía Thunderbolt o USB4, sin desactivar la System Integrity Protection. Es solo cómputo — sin aceleración de juegos, sin salida de vídeo, sin soporte de la API Metal — y solo funciona a través del framework tinygrad (`DEV=NV` o `DEV=AMD`). Ollama no usa tinygrad, así que esto no le da a Ollama una vía eGPU; importa sobre todo a desarrolladores que ya trabajan sobre tinygrad.',
          'Para quien use Ollama específicamente, comprar un gabinete eGPU, una GPU, una fuente de alimentación y lidiar con la compatibilidad de Thunderbolt supone mucho dinero y esfuerzo para una configuración que Ollama de todos modos no usará. Más memoria unificada es más simple, más barata por gigabyte útil, y funciona hoy sin ninguna configuración.',
        ],
        columns: ['Restricción', 'MacBook Apple Silicon', 'Portátil Linux con TB4/OCuLink'],
        rows: [
          {
            'Restricción': 'Aceleración eGPU para Ollama',
            'MacBook Apple Silicon': 'Sin ruta — solo Metal',
            'Portátil Linux con TB4/OCuLink': 'Funciona con CUDA o ROCm',
          },
          {
            'Restricción': 'Cualquier vía eGPU de cómputo de IA',
            'MacBook Apple Silicon': 'TinyGPU (solo tinygrad, desde abr. 2026)',
            'Portátil Linux con TB4/OCuLink': 'Drivers NVIDIA/AMD nativos',
          },
          {
            'Restricción': 'Arquitectura de memoria',
            'MacBook Apple Silicon': 'Solo memoria unificada',
            'Portátil Linux con TB4/OCuLink': 'VRAM discreta en eGPU',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: 'Compra memoria según los modelos que quieras',
        content: [
          'Para LLMs locales en Apple Silicon, la capacidad de memoria unificada determina qué modelos puedes cargar; la velocidad de la GPU solo determina la rapidez de un modelo que ya cabe.',
          'La actualización de la gama de Apple de agosto de 2026 elevó los topes de memoria de los Mac de escritorio: el Mac mini parte de $899 (M6, hasta 32 GB) o $1,699 (M5 Pro, hasta 64 GB), y el Mac Studio parte de $2,499 (M5 Max, hasta 128 GB) hasta $5,499 (M5 Ultra, hasta 512 GB). Esos topes son de la gama de escritorio — un MacBook Pro sigue con un tope inferior.',
        ],
        columns: ['Memoria unificada', 'Veredicto'],
        rows: [
          { 'Memoria unificada': '16 GB', 'Veredicto': '🟡 Solo modelos pequeños' },
          { 'Memoria unificada': '24 GB', 'Veredicto': '🟢 Margen notablemente mejor' },
          { 'Memoria unificada': '32 GB', 'Veredicto': '🟢 Configuración portátil sólida' },
          { 'Memoria unificada': '48 GB+', 'Veredicto': '🚀 Margen de modelo mucho mayor' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: '¿Necesitas mucho más rendimiento? Compra un sistema NVIDIA aparte',
        content: [
          'Si tu prioridad cambia de "un MacBook que también hace IA local" a "máximo rendimiento de IA local", compra una máquina NVIDIA aparte en lugar de intentar añadirle potencia de GPU a un Mac. Ollama admite GPUs NVIDIA de las series RTX 30, 40 y 50 (y más recientes) vía CUDA, lo que te da VRAM dedicada, una selección de hardware mucho más amplia y una capacidad de actualización directa que ningún Mac ofrece.',
          'Es una separación limpia, no un compromiso: conserva el MacBook para portabilidad y uso diario, y usa el sistema NVIDIA para las cargas de IA local que realmente necesitan esa potencia adicional.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+desktop+GPU',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'Consultar precios de GPU NVIDIA RTX',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: '¿MacBook o iMac Intel? Una eGPU es un caso distinto y más razonable',
        content: [
          'Aquí es donde cambia la respuesta. Los Mac Intel más antiguos —incluyendo MacBook Pro e iMac Intel— admiten GPUs externas a nivel de macOS vía Thunderbolt 3, así que una eGPU puede ser una forma razonable de prolongar la vida útil de una máquina existente. Los iMac Apple Silicon (el iMac de serie M actual) siguen las mismas reglas que los MacBook Apple Silicon: sin vía eGPU para Ollama.',
          'Ollama sigue sin enviar nada a la eGPU en un Mac Intel — solo acelera vía Apple-Silicon Metal. La solución alternativa es compilar llama.cpp con el backend Vulkan vía MoltenVK, que puede ejecutar la inferencia en una eGPU AMD (por ejemplo, una Radeon RX 6800/6900 XT) con aproximadamente un 15–17 % de sobrecarga por el ancho de banda de Thunderbolt. Requiere una compilación manual, así que no es tan directo como Ollama en Apple Silicon — pero es una opción real si ya tienes el Mac Intel.',
          'Si compras un Mac hoy específicamente para IA local, compra Apple Silicon y prioriza la memoria unificada en su lugar — no compres un Mac Intel para este uso.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre eGPUs y MacBooks',
        faqs: [
          {
            q: '¿Por qué mi MacBook Apple Silicon no admite una eGPU para Ollama?',
            a: 'Ollama solo envía la inferencia a la GPU integrada en el chip Apple Silicon, vía Metal. No existe ninguna vía CUDA o ROCm en macOS, y la aceleración de GPU propia de Apple es solo Metal. El driver TinyGPU de Apple de abril de 2026 permite a las eGPU hacer cómputo de IA en Apple Silicon, pero solo a través del framework tinygrad — Ollama no lo usa.',
          },
          {
            q: '¿Cuál es la mejor tarjeta gráfica para un MacBook Pro?',
            a: 'Para un MacBook Pro Apple Silicon, no existe una tarjeta gráfica actualizable o externa en el sentido tradicional — la GPU está integrada en el chip, y es precisamente la que Ollama, LM Studio y llama.cpp ya aceleran vía Metal. La "mejora" real es comprar una configuración de MacBook Pro con más memoria unificada, no una tarjeta gráfica aparte.',
          },
          {
            q: '¿Puedo añadir una GPU externa a un iMac?',
            a: 'Depende de qué iMac. Los iMac Intel admiten GPUs externas vía Thunderbolt 3 a nivel de macOS, igual que los MacBook Pro Intel. Los iMac Apple Silicon actuales (serie M) siguen la misma arquitectura que los MacBook Apple Silicon — sin vía eGPU para Ollama, y aplica la misma salvedad de TinyGPU/tinygrad si quieres soporte de eGPU solo para cómputo de IA.',
          },
          {
            q: '¿Puedo usar un eGPU con Ollama en un MacBook Intel?',
            a: 'La eGPU funciona a nivel de macOS, pero Ollama no la usará. Los MacBook Intel (como el MacBook Pro de 16") admiten eGPUs AMD vía Thunderbolt 3, pero Ollama solo despacha hacia Apple-Silicon Metal — ignora las GPUs de terceros por completo, incluso en Mac Intel. La solución alternativa es compilar llama.cpp con el backend Vulkan vía MoltenVK, que puede ejecutar la inferencia en un eGPU AMD (por ejemplo, Radeon RX 6800/6900 XT) en un Mac Intel, con aproximadamente un 15–17 % de sobrecarga por el ancho de banda de Thunderbolt. Requiere una compilación manual.',
          },
          {
            q: '¿Cuál es la forma más rápida de acelerar Ollama en un MacBook?',
            a: 'Comprar más memoria unificada. Un MacBook Pro con 32 GB, 48 GB o 64 GB de memoria unificada ejecuta modelos más grandes localmente con aceleración Metal GPU completa. No existe ninguna opción de acelerador externo específicamente para Ollama en Apple Silicon.',
          },
          {
            q: '¿Funcionan los eGPUs para Ollama en portátiles Linux?',
            a: 'Sí. Un portátil Linux con Thunderbolt 4 o OCuLink puede conectar una GPU de escritorio NVIDIA o AMD y ejecutar Ollama vía CUDA o ROCm. El rendimiento está limitado por el ancho de banda de Thunderbolt 4 (40 Gbps), pero funciona — es el equivalente no Apple de la configuración eGPU por la que a menudo se pregunta para los Mac.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas relacionadas',
        items: [
          '[¿Es el Mac Mini M4 bueno para LLMs locales?](/es/prompt-bites/mac-mini-m4-local-llm) — el equivalente de escritorio con la misma arquitectura',
          '[Guía de compra de GPU para LLMs locales 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — para la vía del sistema NVIDIA aparte',
          '[Mejor portátil AI económico por menos de $1,000](/es/prompt-bites/best-budget-ai-laptop-under-1000) — alternativas no Apple en el nivel de entrada',
          '[Mejor mini PC para LLM local](/es/prompt-bites/best-mini-pc-for-local-llm) — mini PCs de escritorio vs memoria unificada del MacBook',
        ],
      },
    },
  },
  pt: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-pt.webp',
    title: 'Melhor eGPU para Ollama em um MacBook em 2026',
    seoTitle: 'Melhor eGPU para Ollama no MacBook (2026)',
    metaDescription: 'Para um MacBook Apple Silicon, uma eGPU geralmente não é o upgrade certo para o Ollama — ele já usa Metal. Compre mais memória unificada, ou um sistema NVIDIA separado para desempenho sério.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Proprietários de MacBook que consideram uma eGPU para acelerar o Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3 min de leitura',
    leadAnswerBlock:
      'Para um MacBook Apple Silicon, uma eGPU geralmente não é o upgrade que vale a pena fazer para o Ollama. O Ollama já acelera pela GPU integrada do Mac via Metal, então comprar mais memória unificada rende mais para a capacidade de LLM local do que qualquer GPU externa. Desde abril de 2026, a Apple aprovou um driver de terceiros chamado TinyGPU que permite que eGPUs NVIDIA e AMD façam computação de IA no Apple Silicon via Thunderbolt ou USB4 — mas isso só funciona através do framework tinygrad, não do Ollama, então não muda essa recomendação para usuários do Ollama hoje. Se você precisa de bem mais desempenho de IA local do que qualquer configuração de Mac oferece, um sistema NVIDIA separado é o melhor investimento. Em um MacBook ou iMac Intel, uma eGPU é uma opção mais razoável — veja abaixo.',
    toc: [
      { label: 'Resposta rápida', anchor: '#best-pick' },
      { label: 'Por que uma eGPU não é o upgrade do Ollama no Apple Silicon', anchor: '#comparison' },
      { label: 'Compre memória com base nos modelos que você quer', anchor: '#memory-guide' },
      { label: 'Precisa de bem mais desempenho? Compre NVIDIA', anchor: '#nvidia-path' },
      { label: 'Mac Intel ou iMac?', anchor: '#intel-mac' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related' },
    ],
    intro:
      'Gabinetes eGPU conectam uma GPU externa a um notebook via Thunderbolt, USB4 ou OCuLink. Nos MacBooks Apple Silicon, o Ollama não tem como usar uma — o Ollama só acelera via Metal, a GPU integrada do Mac. É uma questão de arquitetura e software, não de preço ou disponibilidade, então esta página é uma decisão de compra, não uma lista de compras.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor eGPU para Ollama em um MacBook?',
        answer: 'Para um MacBook Apple Silicon, nenhuma eGPU acelera o Ollama — compre mais memória unificada em vez disso. Se você precisa de bem mais desempenho de IA local do que um Mac pode oferecer, compre um sistema NVIDIA separado. Se você tem um MacBook ou iMac Intel, uma eGPU é uma opção genuinamente razoável.',
        bullets: [
          'O Ollama no Apple Silicon usa Metal, a GPU integrada ao chip — não há caminho de eGPU para ele, com ou sem o novo driver TinyGPU da Apple.',
          'A Apple aprovou o TinyGPU em abril de 2026, permitindo que eGPUs NVIDIA/AMD façam computação de IA no Apple Silicon — mas apenas através do framework tinygrad, não do Ollama.',
          'Em Macs Intel, uma eGPU AMD funciona fisicamente via Thunderbolt 3 e pode acelerar o llama.cpp via Vulkan (MoltenVK) — mas não o Ollama diretamente.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon + Ollama: use a GPU Metal integrada — uma eGPU geralmente não é o upgrade que vale a pena fazer',
          'Mais memória unificada é o verdadeiro caminho de upgrade para modelos locais maiores no Apple Silicon',
          'A Apple aprovou um driver de terceiros (TinyGPU) em abril de 2026 para eGPUs de computação de IA no Apple Silicon, mas ele funciona via tinygrad, não Ollama',
          'Precisa de bem mais desempenho de IA local do que um Mac oferece? Um sistema NVIDIA separado é o melhor investimento',
          'Tem um Mac Intel ou um iMac? Uma eGPU é um caso genuinamente diferente e mais razoável — veja a seção sobre Mac Intel',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Resposta rápida',
        content: [
          'Se você tem um MacBook Apple Silicon, não compre uma eGPU para o Ollama — compre mais memória unificada, já que o Ollama já roda na GPU integrada do Mac via Metal. Se sua prioridade mudar de "um MacBook que também roda IA local" para "desempenho máximo de IA local", um sistema NVIDIA separado é a melhor compra. Se você já tem um MacBook ou iMac Intel, uma eGPU é uma forma genuinamente razoável de prolongar sua vida útil.',
        ],
        items: [
          '🍎 Melhor solução para Apple Silicon: compre mais memória unificada, não uma eGPU',
          '💰 Melhor jogada econômica: fique com seu MacBook e use sua GPU Metal integrada como está',
          '🚀 Precisa de muito mais poder de GPU? Compre um sistema NVIDIA separado',
          '⚠️ Tem um Mac Intel ou um iMac? Uma eGPU pode fazer sentido — uma situação fundamentalmente diferente',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Ver preços de MacBooks com bastante memória',
          },
          {
            url: 'https://www.amazon.com.br/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Ver preços do Mac Studio',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Por que uma eGPU não é o upgrade do Ollama no Apple Silicon',
        content: [
          'No Apple Silicon, a GPU compartilha a mesma RAM física que a CPU (memória unificada), e o Ollama só envia inferência para essa GPU integrada via Metal. Não há um pool de VRAM separado para expandir com uma placa externa, e o Ollama não tem nenhum caminho de aceleração NVIDIA/AMD no macOS como tem no Windows e no Linux.',
          'Isso mudou um pouco em abril de 2026: a Apple aprovou o TinyGPU, uma extensão DriverKit de terceiros da Tiny Corp (a equipe por trás do tinygrad) que permite que uma eGPU NVIDIA (Ampere ou mais recente) ou AMD (RDNA3 ou mais recente) faça computação de IA no Apple Silicon via Thunderbolt ou USB4, sem desativar a System Integrity Protection. É apenas computação — sem aceleração de jogos, sem saída de vídeo, sem suporte à API Metal — e só funciona através do framework tinygrad (`DEV=NV` ou `DEV=AMD`). O Ollama não usa tinygrad, então isso não dá ao Ollama um caminho de eGPU; importa principalmente para desenvolvedores que já trabalham com tinygrad.',
          'Para quem usa especificamente o Ollama, comprar um gabinete de eGPU, uma GPU, uma fonte de alimentação e lidar com a compatibilidade do Thunderbolt é muito dinheiro e esforço para uma configuração que o Ollama mesmo assim não vai usar. Mais memória unificada é mais simples, mais barata por gigabyte útil, e funciona hoje sem nenhuma configuração.',
        ],
        columns: ['Restrição', 'MacBook Apple Silicon', 'Notebook Linux com TB4/OCuLink'],
        rows: [
          {
            'Restrição': 'Aceleração eGPU para Ollama',
            'MacBook Apple Silicon': 'Sem caminho — só Metal',
            'Notebook Linux com TB4/OCuLink': 'Funciona com CUDA ou ROCm',
          },
          {
            'Restrição': 'Qualquer caminho de eGPU de computação de IA',
            'MacBook Apple Silicon': 'TinyGPU (só tinygrad, desde abr. 2026)',
            'Notebook Linux com TB4/OCuLink': 'Drivers NVIDIA/AMD nativos',
          },
          {
            'Restrição': 'Arquitetura de memória',
            'MacBook Apple Silicon': 'Somente Unified Memory',
            'Notebook Linux com TB4/OCuLink': 'VRAM discreta na eGPU',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: 'Compre memória com base nos modelos que você quer',
        content: [
          'Para LLMs locais no Apple Silicon, a capacidade de memória unificada determina quais modelos você consegue carregar — a velocidade da GPU só determina a rapidez de um modelo que já cabe.',
          'A atualização da linha da Apple de agosto de 2026 elevou os limites de memória dos Macs de mesa: o Mac mini parte de US$ 899 (M6, até 32 GB) ou US$ 1.699 (M5 Pro, até 64 GB), e o Mac Studio parte de US$ 2.499 (M5 Max, até 128 GB) chegando a US$ 5.499 (M5 Ultra, até 512 GB). Esses limites são da linha de mesa — um MacBook Pro continua com um teto menor.',
        ],
        columns: ['Memória unificada', 'Veredito'],
        rows: [
          { 'Memória unificada': '16 GB', 'Veredito': '🟡 Só modelos pequenos' },
          { 'Memória unificada': '24 GB', 'Veredito': '🟢 Folga bem melhor' },
          { 'Memória unificada': '32 GB', 'Veredito': '🟢 Configuração portátil forte' },
          { 'Memória unificada': '48 GB+', 'Veredito': '🚀 Folga de modelo bem maior' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: 'Precisa de bem mais desempenho? Compre um sistema NVIDIA separado',
        content: [
          'Se sua prioridade mudar de "um MacBook que também cuida de IA local" para "desempenho máximo de IA local", compre uma máquina NVIDIA separada em vez de tentar acoplar poder de GPU a um Mac. O Ollama suporta GPUs NVIDIA das séries RTX 30, 40 e 50 (e mais recentes) via CUDA, o que te dá VRAM dedicada, uma seleção de hardware bem mais ampla e uma capacidade de upgrade direta que nenhum Mac oferece.',
          'É uma separação limpa, não um compromisso: mantenha o MacBook para portabilidade e uso do dia a dia, e use o sistema NVIDIA para as cargas de IA local que realmente precisam desse poder extra.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com.br/s?k=RTX+4070+placa+de+video+desktop',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'Ver preços de GPUs NVIDIA RTX',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'MacBook ou iMac Intel? Uma eGPU é um caso diferente e mais razoável',
        content: [
          'É aqui que a resposta muda. Macs Intel mais antigos — incluindo MacBook Pro e iMac Intel — suportam GPUs externas no nível do macOS via Thunderbolt 3, então uma eGPU pode ser uma forma razoável de prolongar a vida útil de uma máquina existente. iMacs Apple Silicon (o iMac de série M atual) seguem as mesmas regras dos MacBooks Apple Silicon: sem caminho de eGPU para o Ollama.',
          'O Ollama ainda não despacha nada para a eGPU em um Mac Intel — ele só acelera via Apple-Silicon Metal. A solução alternativa é compilar o llama.cpp com o backend Vulkan via MoltenVK, que pode executar a inferência em uma eGPU AMD (por exemplo, uma Radeon RX 6800/6900 XT) com cerca de 15–17% de sobrecarga pela largura de banda do Thunderbolt. Isso exige uma compilação manual, então não é tão pronto para uso quanto o Ollama no Apple Silicon — mas é uma opção real se você já tem o Mac Intel.',
          'Se você está comprando um Mac hoje especificamente para IA local, compre Apple Silicon e priorize memória unificada em vez disso — não compre um Mac Intel para esse uso.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre eGPUs e MacBooks',
        faqs: [
          {
            q: 'Por que meu MacBook Apple Silicon não suporta uma eGPU para o Ollama?',
            a: 'O Ollama só envia inferência para a GPU integrada ao chip Apple Silicon, via Metal. Não existe caminho CUDA ou ROCm no macOS, e a aceleração de GPU da própria Apple é somente Metal. O driver TinyGPU da Apple, de abril de 2026, permite que eGPUs façam computação de IA no Apple Silicon, mas apenas através do framework tinygrad — o Ollama não o usa.',
          },
          {
            q: 'Qual é a melhor placa de vídeo para um MacBook Pro?',
            a: 'Para um MacBook Pro Apple Silicon, não existe uma placa de vídeo atualizável ou externa no sentido tradicional — a GPU está integrada ao chip, e é exatamente ela que o Ollama, o LM Studio e o llama.cpp já aceleram via Metal. O "upgrade" de verdade é comprar uma configuração de MacBook Pro com mais memória unificada, não uma placa de vídeo separada.',
          },
          {
            q: 'Posso adicionar uma GPU externa a um iMac?',
            a: 'Depende de qual iMac. iMacs Intel suportam GPUs externas via Thunderbolt 3 no nível do macOS, assim como os MacBook Pro Intel. Os iMacs Apple Silicon atuais (série M) seguem a mesma arquitetura dos MacBooks Apple Silicon — sem caminho de eGPU para o Ollama, e a mesma ressalva do TinyGPU/tinygrad se aplica se você quiser suporte a eGPU só para computação de IA.',
          },
          {
            q: 'Posso usar uma eGPU com o Ollama em um MacBook Intel?',
            a: 'A eGPU funciona no nível do macOS, mas o Ollama não a usará. MacBooks Intel (como o MacBook Pro de 16") suportam eGPUs AMD via Thunderbolt 3, mas o Ollama só despacha para o Apple-Silicon Metal — ele ignora GPUs de terceiros completamente, mesmo em Macs Intel. A solução alternativa é compilar o llama.cpp com o backend Vulkan via MoltenVK, que pode executar a inferência em uma eGPU AMD (por exemplo, Radeon RX 6800/6900 XT) em um Mac Intel, com cerca de 15–17% de sobrecarga pela largura de banda do Thunderbolt. Isso exige uma compilação manual.',
          },
          {
            q: 'Qual é a forma mais rápida de acelerar o Ollama em um MacBook?',
            a: 'Compre mais memória unificada. Um MacBook Pro com 32 GB, 48 GB ou 64 GB de memória unificada executa modelos maiores localmente com aceleração GPU Metal completa. Não existe opção de acelerador externo especificamente para o Ollama no Apple Silicon.',
          },
          {
            q: 'eGPUs funcionam para Ollama em notebooks Linux?',
            a: 'Sim. Um notebook Linux com Thunderbolt 4 ou OCuLink pode conectar uma GPU desktop NVIDIA ou AMD e executar o Ollama via CUDA ou ROCm. O desempenho é limitado pela largura de banda do Thunderbolt 4 (40 Gbps), mas funciona — esse é o equivalente não Apple da configuração de eGPU que muitas vezes é perguntada para Macs.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leituras relacionadas',
        items: [
          '[O Mac Mini M4 é bom para LLMs locais?](/pt/prompt-bites/mac-mini-m4-local-llm) — o equivalente desktop com a mesma arquitetura',
          '[Guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — para o caminho do sistema NVIDIA separado',
          '[Melhor notebook IA econômico por menos de $1.000](/pt/prompt-bites/best-budget-ai-laptop-under-1000) — alternativas não Apple na faixa de entrada',
          '[Melhor mini PC para LLM local](/pt/prompt-bites/best-mini-pc-for-local-llm) — mini PCs desktop vs Unified Memory do MacBook',
        ],
      },
    },
  },
  ko: {
    theme: 'Hardware-Specific',
    heroImage: '/images/best-egpu-ollama-macbook-overview-hero-ko.webp',
    title: '2026년 MacBook에서 Ollama를 위한 최적의 eGPU는?',
    seoTitle: 'MacBook Ollama 최적 eGPU (2026)',
    metaDescription: 'Apple Silicon MacBook에서는 eGPU가 보통 Ollama에 맞는 업그레이드가 아닙니다 — 이미 Metal을 사용하고 있기 때문입니다. 더 많은 통합 메모리나, 본격적인 성능을 위해서는 별도의 NVIDIA 시스템을 구입하세요.',
    publishDate: '2026-05-22',
    dateModified: '2026-08-26',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook', 'TinyGPU driver', 'NVIDIA RTX GPU', 'Mac mini M6/M5 Pro', 'Mac Studio M5 Max/M5 Ultra'],
    educationalLevel: 'Intermediate',
    audience: 'Ollama 가속을 위해 eGPU를 고려하는 MacBook 사용자',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    readTime: '3분 분량',
    leadAnswerBlock:
      'Apple Silicon MacBook에서는 eGPU가 보통 Ollama를 위해 구입해야 할 업그레이드가 아닙니다. Ollama는 이미 Mac에 내장된 GPU를 Metal을 통해 가속에 사용하고 있으므로, 더 많은 통합 메모리를 사는 것이 어떤 외장 GPU보다 로컬 LLM 성능에 더 도움이 됩니다. 2026년 4월부터 Apple은 TinyGPU라는 서드파티 드라이버를 승인했으며, 이는 NVIDIA와 AMD eGPU가 Thunderbolt 또는 USB4를 통해 Apple Silicon에서 AI 연산을 수행할 수 있게 해줍니다 — 하지만 이는 tinygrad 프레임워크를 통해서만 작동하며 Ollama와는 무관하므로, 오늘날 Ollama 사용자에게는 이 권장 사항이 바뀌지 않습니다. 어떤 Mac 구성보다도 훨씬 더 높은 로컬 AI 성능이 필요하다면, 별도의 NVIDIA GPU 시스템이 더 나은 투자입니다. Intel MacBook이나 iMac을 사용 중이라면 eGPU가 더 합리적인 선택입니다 — 아래를 참고하십시오.',
    toc: [
      { label: '빠른 답변', anchor: '#best-pick' },
      { label: '왜 eGPU가 Apple Silicon에서 Ollama의 업그레이드가 아닌가', anchor: '#comparison' },
      { label: '원하는 모델에 맞춰 메모리를 구입하세요', anchor: '#memory-guide' },
      { label: '훨씬 더 강력한 성능이 필요하다면? NVIDIA를 구입하세요', anchor: '#nvidia-path' },
      { label: 'Intel Mac이나 iMac을 쓰고 있다면?', anchor: '#intel-mac' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    intro:
      'eGPU 인클로저는 Thunderbolt, USB4, 또는 OCuLink를 통해 외부 GPU를 노트북에 연결합니다. Apple Silicon MacBook에서는 Ollama가 이를 사용할 방법이 없습니다 — Ollama는 Mac에 내장된 GPU인 Metal을 통해서만 가속됩니다. 이는 가격이나 재고의 문제가 아니라 아키텍처와 소프트웨어의 문제이므로, 이 페이지는 쇼핑 목록이 아니라 구매 결정을 위한 것입니다.',
    quickAnswerTop: {
      ko: {
        question: 'MacBook에서 Ollama를 위한 최적의 eGPU는 무엇입니까?',
        answer: 'Apple Silicon MacBook의 경우, Ollama를 가속하는 eGPU는 존재하지 않습니다 — 대신 더 많은 통합 메모리를 구입하십시오. Mac이 제공할 수 있는 것보다 훨씬 더 많은 로컬 AI 성능이 필요하다면 별도의 NVIDIA GPU 시스템을 구입하십시오. Intel MacBook이나 iMac을 소유하고 있다면 eGPU는 정말 합리적인 선택입니다.',
        bullets: [
          'Apple Silicon의 Ollama는 칩에 내장된 Metal을 사용합니다 — Apple의 새로운 TinyGPU 드라이버가 있든 없든 Ollama용 eGPU 경로는 없습니다.',
          'Apple은 2026년 4월에 TinyGPU를 승인하여 NVIDIA/AMD eGPU가 Apple Silicon에서 AI 연산을 수행할 수 있게 했지만, 이는 tinygrad 프레임워크를 통해서만 가능하며 Ollama를 통해서는 불가능합니다.',
          'Intel Mac에서는 AMD eGPU가 Thunderbolt 3를 통해 물리적으로 작동하며 Vulkan(MoltenVK)을 통해 llama.cpp를 가속할 수 있습니다 — 다만 Ollama 자체를 직접 가속하지는 못합니다.',
        ],
        updatedDate: '2026-08',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon + Ollama: 내장된 Metal GPU를 사용하십시오 — eGPU는 보통 구입해야 할 업그레이드가 아닙니다',
          'Apple Silicon에서 더 큰 로컬 모델을 실행하기 위한 진짜 업그레이드 경로는 통합 메모리를 늘리는 것입니다',
          'Apple은 2026년 4월에 Apple Silicon용 AI 연산 eGPU를 위한 서드파티 드라이버(TinyGPU)를 승인했지만, 이는 Ollama가 아닌 tinygrad를 통해 작동합니다',
          'Mac이 제공하는 것보다 훨씬 더 많은 로컬 AI 성능이 필요합니까? 별도의 NVIDIA GPU 시스템이 더 나은 투자입니다',
          'Intel Mac이나 iMac을 소유하고 계십니까? eGPU는 정말로 다른, 더 합리적인 경우입니다 — Intel Mac 섹션을 참고하십시오',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '빠른 답변',
        content: [
          'Apple Silicon MacBook을 가지고 있다면, Ollama를 위해 eGPU를 구입하지 마십시오 — 대신 더 많은 통합 메모리를 구입하십시오. Ollama는 이미 Metal을 통해 Mac에 내장된 GPU에서 실행됩니다. 우선순위가 "로컬 AI도 실행되는 MacBook"에서 "최대한의 로컬 AI 성능"으로 바뀐다면, 별도의 NVIDIA GPU 시스템이 더 나은 선택입니다. 이미 Intel MacBook이나 iMac을 소유하고 있다면, eGPU는 그 수명을 늘리는 정말 합리적인 방법입니다.',
        ],
        items: [
          '🍎 Apple Silicon을 위한 최선의 해결책: eGPU가 아니라 더 많은 통합 메모리를 구입하십시오',
          '💰 최선의 예산 절약 방법: MacBook을 그대로 유지하고 내장된 Metal GPU를 그대로 사용하십시오',
          '🚀 훨씬 더 강력한 GPU 성능이 필요합니까? 별도의 NVIDIA GPU 시스템을 구입하십시오',
          '⚠️ Intel Mac이나 iMac을 가지고 계십니까? eGPU가 합리적일 수 있습니다 — 근본적으로 다른 상황입니다',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.kr/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: '대용량 메모리 MacBook 가격 확인하기',
          },
          {
            url: 'https://www.amazon.co.kr/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Mac Studio 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '왜 eGPU가 Apple Silicon에서 Ollama의 업그레이드가 아닌가',
        content: [
          'Apple Silicon에서는 GPU가 CPU와 동일한 물리적 RAM(통합 메모리)을 공유하며, Ollama는 Metal을 통해 이 내장 GPU에만 추론 작업을 전달합니다. 외장 카드로 확장할 수 있는 별도의 VRAM 풀이 없으며, Ollama는 Windows나 Linux에서와 달리 macOS에서 NVIDIA/AMD 가속 경로를 전혀 가지고 있지 않습니다.',
          '이는 2026년 4월에 약간 달라졌습니다. Apple은 TinyGPU를 승인했는데, 이는 tinygrad를 개발한 팀인 Tiny Corp가 만든 서드파티 DriverKit 확장 프로그램으로, System Integrity Protection을 비활성화하지 않고도 NVIDIA(Ampere 이상) 또는 AMD(RDNA3 이상) eGPU가 Thunderbolt나 USB4를 통해 Apple Silicon에서 AI 연산을 수행할 수 있게 해줍니다. 이는 순수하게 연산 전용입니다 — 게임 가속도, 디스플레이 출력도, Metal API 지원도 없으며, tinygrad 프레임워크(`DEV=NV` 또는 `DEV=AMD`)를 통해서만 작동합니다. Ollama는 tinygrad를 사용하지 않으므로, 이는 Ollama에 eGPU 경로를 제공하지 않습니다. 이는 주로 이미 tinygrad로 개발하고 있는 개발자들에게 의미가 있습니다.',
          'Ollama를 특별히 사용하는 사람에게는, eGPU 인클로저, GPU, 전원 공급 장치를 구입하고 Thunderbolt 호환성 문제를 해결하는 데 많은 돈과 노력이 들지만, 그렇게 해도 Ollama는 여전히 그것을 사용하지 못합니다. 통합 메모리를 늘리는 것이 더 간단하고, 유용한 용량당 비용도 더 저렴하며, 오늘 당장 별도 설정 없이 작동합니다.',
        ],
        columns: ['제한 사항', 'Apple Silicon MacBook', 'Thunderbolt 4/OCuLink Linux 노트북'],
        rows: [
          {
            '제한 사항': 'Ollama를 위한 eGPU 가속',
            'Apple Silicon MacBook': '경로 없음 — Metal만 가능',
            'Thunderbolt 4/OCuLink Linux 노트북': 'CUDA 또는 ROCm으로 작동',
          },
          {
            '제한 사항': '어떤 형태든 AI 연산 eGPU 경로',
            'Apple Silicon MacBook': 'TinyGPU (tinygrad 전용, 2026년 4월부터)',
            'Thunderbolt 4/OCuLink Linux 노트북': '네이티브 NVIDIA/AMD 드라이버',
          },
          {
            '제한 사항': '메모리 아키텍처',
            'Apple Silicon MacBook': '통합 메모리만 사용',
            'Thunderbolt 4/OCuLink Linux 노트북': 'eGPU의 별도 VRAM',
          },
        ],
      },
      memoryGuide: {
        id: 'memory-guide',
        title: '원하는 모델에 맞춰 메모리를 구입하세요',
        content: [
          'Apple Silicon에서 로컬 LLM을 실행할 때, 통합 메모리 용량이 애초에 어떤 모델을 불러올 수 있는지를 결정합니다 — GPU 속도는 불러올 수 있는 모델이 얼마나 빠르게 실행되는지만 결정합니다.',
          '2026년 8월 애플 제품 라인업 업데이트로 데스크톱 Mac의 메모리 상한이 높아졌습니다. Mac mini는 899달러(M6, 최대 32GB) 또는 1,699달러(M5 Pro, 최대 64GB)부터 시작하고, Mac Studio는 2,499달러(M5 Max, 최대 128GB)부터 5,499달러(M5 Ultra, 최대 512GB)까지입니다. 이 상한은 데스크톱 라인업 기준이며, MacBook Pro는 여전히 더 낮은 상한이 적용됩니다.',
        ],
        columns: ['통합 메모리', '평가'],
        rows: [
          { '통합 메모리': '16 GB', '평가': '🟡 소형 모델만 가능' },
          { '통합 메모리': '24 GB', '평가': '🟢 눈에 띄게 나은 여유' },
          { '통합 메모리': '32 GB', '평가': '🟢 강력한 휴대용 구성' },
          { '통합 메모리': '48 GB 이상', '평가': '🚀 훨씬 더 많은 모델 여유' },
        ],
      },
      nvidiaPath: {
        id: 'nvidia-path',
        title: '훨씬 더 강력한 성능이 필요하다면? 별도의 NVIDIA 시스템을 구입하세요',
        content: [
          '우선순위가 "로컬 AI도 실행되는 MacBook"에서 "최대한의 로컬 AI 성능"으로 바뀐다면, Mac에 GPU 성능을 억지로 추가하려 하기보다 별도의 NVIDIA 머신을 구입하십시오. Ollama는 CUDA를 통해 RTX 30, 40, 50 시리즈(및 그 이후) NVIDIA GPU를 지원하며, 이는 전용 VRAM, 훨씬 더 넓은 하드웨어 선택지, 그리고 어떤 Mac도 제공하지 못하는 간단한 업그레이드 가능성을 제공합니다.',
          '이는 타협이 아니라 명확한 역할 분담입니다. 휴대성과 일상 사용을 위해 MacBook을 유지하고, 실제로 추가 성능이 필요한 로컬 AI 작업에는 NVIDIA 시스템을 사용하십시오.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.kr/s?k=RTX+4070+desktop+GPU',
            productName: 'NVIDIA RTX desktop GPU',
            productCategory: 'gpu',
            label: 'NVIDIA RTX GPU 가격 확인하기',
          },
        ],
      },
      intelMac: {
        id: 'intel-mac',
        title: 'Intel MacBook이나 iMac을 쓰고 있다면? eGPU는 다른, 더 합리적인 경우입니다',
        content: [
          '여기서 답이 달라집니다. Intel MacBook Pro와 Intel iMac을 포함한 구형 Intel Mac은 Thunderbolt 3를 통해 macOS 수준에서 외장 GPU를 지원하므로, eGPU가 기존 기기의 수명을 연장하는 합리적인 방법이 될 수 있습니다. Apple Silicon iMac(현재의 M 시리즈 iMac)은 Apple Silicon MacBook과 동일한 규칙을 따릅니다: Ollama를 위한 eGPU 경로는 없습니다.',
          'Intel Mac에서도 Ollama는 여전히 eGPU로 작업을 전달하지 않습니다 — Apple Silicon의 Metal에서만 가속됩니다. 우회 방법은 MoltenVK를 통해 Vulkan 백엔드로 llama.cpp를 빌드하는 것으로, 이는 Intel Mac에서 AMD eGPU(예: Radeon RX 6800/6900 XT)에서 추론을 실행할 수 있으며, Thunderbolt 대역폭으로 인해 약 15~17%의 오버헤드가 발생합니다. 수동 컴파일이 필요하므로 Apple Silicon의 Ollama만큼 즉시 사용 가능하지는 않지만, 이미 해당 Intel Mac을 소유하고 있다면 진짜 선택지입니다.',
          '오늘 로컬 AI를 위해 특별히 Mac을 구입한다면, 대신 Apple Silicon을 구입하고 통합 메모리를 우선하십시오 — 이 용도를 위해 Intel Mac을 구입하지 마십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'eGPU와 MacBook에 대한 자주 묻는 질문',
        faqs: [
          {
            q: '왜 제 Apple Silicon MacBook은 Ollama를 위한 eGPU를 지원하지 않습니까?',
            a: 'Ollama는 Apple Silicon 칩에 내장된 GPU에만 Metal을 통해 추론 작업을 전달합니다. macOS에는 CUDA나 ROCm 경로가 없으며, Apple 자체 GPU 가속은 오직 Metal뿐입니다. 2026년 4월 Apple의 TinyGPU 드라이버는 eGPU가 Apple Silicon에서 AI 연산을 수행할 수 있게 하지만, 이는 tinygrad 프레임워크를 통해서만 가능합니다 — Ollama는 이를 사용하지 않습니다.',
          },
          {
            q: 'MacBook Pro에 가장 좋은 그래픽 카드는 무엇입니까?',
            a: 'Apple Silicon MacBook Pro에는 전통적인 의미의 업그레이드 가능하거나 외장형인 그래픽 카드가 존재하지 않습니다 — GPU는 칩에 내장되어 있으며, 바로 이 GPU를 Ollama, LM Studio, llama.cpp가 이미 Metal을 통해 가속에 사용하고 있습니다. 실질적인 "업그레이드"는 별도의 그래픽 카드가 아니라 더 많은 통합 메모리를 갖춘 MacBook Pro 구성을 구입하는 것입니다.',
          },
          {
            q: 'iMac에 외장 GPU를 추가할 수 있습니까?',
            a: '어떤 iMac인지에 따라 다릅니다. Intel iMac은 Intel MacBook Pro와 마찬가지로 macOS 수준에서 Thunderbolt 3를 통해 외장 GPU를 지원합니다. 현재의 Apple Silicon iMac(M 시리즈)은 Apple Silicon MacBook과 동일한 아키텍처를 따릅니다 — Ollama를 위한 eGPU 경로는 없으며, AI 연산 전용 eGPU 지원을 원한다면 동일한 TinyGPU/tinygrad 제약이 적용됩니다.',
          },
          {
            q: 'Intel MacBook에서 Ollama와 함께 eGPU를 사용할 수 있습니까?',
            a: 'eGPU는 macOS 수준에서는 작동하지만 Ollama는 그것을 사용하지 않습니다. Intel MacBook(예: 16인치 MacBook Pro)은 Thunderbolt 3를 통해 AMD eGPU를 지원하지만, Ollama는 Apple Silicon의 Metal에만 작업을 디스패치하며, Intel Mac에서도 서드파티 GPU를 완전히 무시합니다. 우회 방법은 MoltenVK를 통해 Vulkan 백엔드로 llama.cpp를 빌드하는 것으로, 이는 Intel Mac에서 AMD eGPU(예: Radeon RX 6800/6900 XT)에서 추론을 실행할 수 있으며, Thunderbolt 대역폭으로 인해 약 15~17%의 오버헤드가 발생합니다. 수동 컴파일이 필요합니다.',
          },
          {
            q: 'MacBook에서 Ollama를 가장 빠르게 가속하는 방법은 무엇입니까?',
            a: '더 많은 통합 메모리를 구입하는 것입니다. 32 GB, 48 GB, 또는 64 GB 통합 메모리를 갖춘 MacBook Pro는 Metal GPU 가속으로 더 큰 모델을 로컬에서 실행할 수 있습니다. Apple Silicon에서 특별히 Ollama를 위한 외부 가속기 옵션은 존재하지 않습니다.',
          },
          {
            q: 'Linux 노트북에서 eGPU가 Ollama를 위해 작동합니까?',
            a: '네. Thunderbolt 4 또는 OCuLink를 갖춘 Linux 노트북은 NVIDIA 또는 AMD 데스크탑 GPU를 연결하고 CUDA 또는 ROCm을 통해 Ollama를 실행할 수 있습니다. 성능은 Thunderbolt 4 대역폭(40 Gbps)에 의해 제한되지만 작동합니다 — 이는 Mac에 대해 흔히 묻는 eGPU 구성의 비-Apple 버전이라 할 수 있습니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[Mac Mini M4가 로컬 LLM에 적합합니까?](/ko/prompt-bites/mac-mini-m4-local-llm) — 동일한 아키텍처를 갖춘 데스크탑 동등 제품',
          '[2026 로컬 LLM용 GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 별도의 NVIDIA 시스템 경로를 위한 자료',
          '[1,000달러 미만의 최고의 저렴한 AI 노트북](/ko/prompt-bites/best-budget-ai-laptop-under-1000) — 엔트리 레벨의 Apple 이외 대안',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/prompt-bites/best-mini-pc-for-local-llm) — 데스크탑 미니 PC 대 MacBook 통합 메모리',
        ],
      },
    },
  },
}
