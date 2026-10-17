import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-en.webp',
    type: 'how-to',
    title: 'Best eGPU Setup for MacBook Local LLM Inference (2026)',
    seoTitle: 'Best eGPU for MacBook Local LLM 2026',
    metaDescription: 'No eGPU works natively on Apple Silicon MacBooks. Options in 2026: TinyGPU (tinygrad only), a Mac mini M5 Pro, or an OCuLink mini PC over LAN.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**No eGPU works natively on Apple Silicon MacBooks (M1–M5): macOS has no driver for external GPUs, and Razer states its Core X V2 is "not supported by M1 & later Mac devices". The only route is Tiny Corp\'s TinyGPU driver, which Tiny Corp says Apple approved: it runs AI compute on AMD RDNA 3+ or NVIDIA Ampere+ eGPUs over Thunderbolt or USB4, but its documentation covers only tinygrad — not Ollama, llama.cpp or MLX. For a supported setup, use a Mac mini M5 Pro or an OCuLink mini PC served over your LAN.**',
    quickAnswerTop: {
      question: 'Can I use an eGPU with a MacBook for local LLM inference?',
      answer: 'Not natively. Apple Silicon Macs (M1–M5) have no macOS driver for external GPUs. Since April 2026, Tiny Corp\'s TinyGPU driver (compute only, no display output) lets AMD RDNA 3+ and NVIDIA Ampere+ GPUs run AI workloads over Thunderbolt or USB4, but its documentation covers only tinygrad, and NVIDIA cards also need Docker Desktop. For a stable setup, run Ollama on a Mac mini M5 Pro or an OCuLink mini PC and connect over your LAN.',
      bullets: [
        'Apple Silicon MacBooks (M1–M5): no native eGPU support; Razer lists its Core X V2 as unsupported on M1 and later Macs',
        'TinyGPU (announced April 1, 2026): compute only, AMD RDNA 3+ or NVIDIA Ampere+, macOS 13+, no display output',
        'TinyGPU is documented for tinygrad only; Ollama, llama.cpp and MLX are not documented as supported',
        'NVIDIA cards need Docker Desktop on the Mac; AMD cards run without it',
        'Tiny Corp self-reported 18.5 tok/s on Qwen 3.5 27B (Mac mini + RX 7900 XTX); Plugable saw little gain over baseline on an M2 MacBook Pro',
        'Supported alternative: Mac mini M5 Pro (from $1,699, up to 64 GB, 307 GB/s) or an OCuLink mini PC + RTX 3090 over LAN',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'No Apple Silicon Mac (M1–M5) supports an eGPU natively; a connected card is detected but cannot run work',
          'TinyGPU (Tiny Corp, April 2026) adds AMD and NVIDIA eGPU compute on macOS 13+ over Thunderbolt or USB4 — compute only, no display, documented for tinygrad only',
          'NVIDIA cards need Docker Desktop for TinyGPU setup; AMD cards do not',
          'For a supported Mac setup: Mac mini M5 Pro (from $1,699, up to 64 GB unified memory)',
          'For GPU speed: an OCuLink mini PC + RTX 3090, served to the MacBook over LAN with Ollama',
          'OCuLink is PCIe 4.0 x4 (about 63 Gbps) — a quarter of an x16 slot, which is enough once the model sits in VRAM; no Mac has an OCuLink port',
        ],
      },
      mainContent: {
        title: 'eGPU on Apple Silicon Macs in 2026: What Changed',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon Macs have no native external-GPU support, but since April 2026 Tiny Corp\'s TinyGPU driver can run AI compute on AMD and NVIDIA eGPUs over Thunderbolt or USB4 — documented only for tinygrad.',
          },
          {
            type: 'plain-terms',
            text: 'An eGPU is an external graphics card in an enclosure connected via Thunderbolt, USB4 or OCuLink. macOS on M-series chips has no driver for it, so a connected card is detected but cannot run work. TinyGPU is a macOS app from Tiny Corp that installs a DriverKit extension (which Tiny Corp says Apple approved) to enable compute on the card. It does not drive displays and does not use Metal.',
          },
        ],
        content: 'Without a third-party driver, an Apple Silicon Mac detects an external GPU but cannot use it, according to Plugable. Razer\'s Core X V2 page states "eGPUs not supported by M1 & later Mac devices". On April 1, 2026, Tiny Corp announced that Apple had approved its TinyGPU driver for AMD and NVIDIA. Per the tinygrad documentation, TinyGPU needs macOS 13.0 or later, an AMD RDNA 3+ or NVIDIA Ampere+ GPU and a USB4 or Thunderbolt port; NVIDIA setup also requires Docker Desktop. The documented workload is tinygrad\'s LLM runner, and heise reports it does not work with Apple\'s MLX. Tiny Corp reported 18.5 tok/s for Qwen 3.5 27B on a Mac mini with a Radeon RX 7900 XTX — a vendor-reported data point, not an independent benchmark. Plugable tested a Radeon 9070 and a GeForce RTX 5070 in a Thunderbolt 5 enclosure on an M2 MacBook Pro and saw little improvement over baseline.',
        items: [
          '**Apple Silicon (M1–M5)**: no native eGPU support — a connected card is detected but cannot run work.',
          '**TinyGPU (announced April 1, 2026)**: third-party driver app from Tiny Corp; AMD RDNA 3+ and NVIDIA Ampere+ over Thunderbolt or USB4; macOS 13.0+.',
          '**Scope**: compute only — no display output, no Metal, no gaming; software support documented for tinygrad only.',
          '**NVIDIA cards**: the compiler setup needs Docker Desktop; AMD cards run natively.',
          '**Intel MacBooks (2018–2020)**: eGPU worked via Thunderbolt 3 on older macOS; these Macs are discontinued.',
        ],
      },
      connections: {
        id: 'connections',
        title: 'OCuLink vs Thunderbolt vs USB4 for an External GPU',
        content: '**OCuLink gives an external GPU the most bandwidth per dollar, but only on PCs — no Mac has an OCuLink port.** Thunderbolt 4 and USB4 are hot-pluggable and work on laptops at a lower link speed. Token generation is limited mostly by the GPU\'s own memory bandwidth once the model sits in VRAM, so the link mainly affects model loading. Choose a mini PC with an OCuLink port (for example the Minisforum UM890 Pro or AOOSTAR GEM12+ Pro) if the GPU stays on a desk; choose a Thunderbolt enclosure only for a laptop you carry.',
        columns: ['Link', 'Nominal bandwidth', 'Hot-plug', 'Typical use'],
        rows: [
          {
            'Link': 'OCuLink 4i (PCIe 4.0 x4)',
            'Nominal bandwidth': '~63 Gbps',
            'Hot-plug': 'No (power off first)',
            'Typical use': 'Mini PC + GPU dock',
          },
          {
            'Link': 'Thunderbolt 4 / USB4 40G',
            'Nominal bandwidth': '40 Gbps',
            'Hot-plug': 'Yes',
            'Typical use': 'Laptop + enclosure',
          },
          {
            'Link': 'Thunderbolt 5',
            'Nominal bandwidth': '80 Gbps (120 Gbps boost)',
            'Hot-plug': 'Yes',
            'Typical use': 'Newer PCs and Macs',
          },
          {
            'Link': 'USB4 20G',
            'Nominal bandwidth': '20 Gbps',
            'Hot-plug': 'Yes',
            'Typical use': 'Lowest-bandwidth option',
          },
        ],
      },
      alternatives: {
        title: 'What to Do Instead: Real Alternatives',
        productItems: [
          {
            title: 'Mac mini M5 Pro (up to 64 GB) — Best macOS Option',
            content: 'Apple\'s Mac mini with M5 Pro (available since September 22, 2026) starts at $1,699 and offers up to 64 GB of unified memory at 307 GB/s. Token generation is limited by memory bandwidth, so a 32B Q4 model of roughly 19–20 GB has a theoretical ceiling near 15 tok/s at that bandwidth; real speeds are lower. Choose it for 32B-class models that must fit in memory without a separate GPU machine. The base Mac mini M6 (from $899, up to 32 GB, 170 GB/s) suits 7B–14B models.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro on Amazon', url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'OCuLink Mini PC + RTX 3090 (Best GPU/Portable Combo)',
            content: 'A mini PC with an OCuLink port — such as the Minisforum UM890 Pro (Ryzen 9 8945HS, barebones from $479 at its 2024 launch) or the AOOSTAR GEM12+ Pro (barebones listed around $359) — connects to a desktop GPU in an OCuLink dock. OCuLink is not hot-swappable: power the PC off before connecting. Community llama.cpp benchmarks report roughly 90–95 tok/s for an 8B Q4_K_M model on an RTX 3090; sources disagree and results depend on context length and build. Run Ollama on the mini PC and serve it over LAN; the MacBook stays the client.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink on Amazon', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro on Amazon', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'TinyGPU Driver + eGPU on Apple Silicon Mac (Experimental)',
            content: 'Tiny Corp\'s TinyGPU driver enables compute on AMD RDNA 3+ and NVIDIA Ampere+ eGPUs over Thunderbolt or USB4 on macOS 13+. It is documented for tinygrad only (run with DEV=AMD or DEV=NV python3 -m tinygrad.llm), NVIDIA cards need Docker Desktop, and Plugable reported little improvement over baseline on an M2 MacBook Pro. It is a third-party driver, not Apple-native Metal support, so expect compatibility changes as macOS evolves. Treat it as an experiment, not a daily setup.',
            affiliateLinks: [
              { label: 'RTX 4090 eGPU on Amazon (for TinyGPU setup)', url: 'https://www.amazon.com/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'Thunderbolt eGPU on Windows/Linux Laptop (If Not on Mac)',
            content: 'On an x86 Windows or Linux laptop with Thunderbolt 4 or 5, an eGPU works with Ollama. The link is slower than a native PCIe slot, but once the model sits in VRAM, token generation depends mostly on the GPU\'s own memory bandwidth, so real-world losses are smaller than the link gap suggests. The Razer Core X V2 ($349.99, Thunderbolt 5, no power supply included) is built for Windows; Razer\'s page states eGPUs are not supported on M1 and later Macs.',
            affiliateLinks: [
              { label: 'Razer Core X V2 eGPU Enclosure on Amazon', url: 'https://www.amazon.com/dp/B0FFQFDZWX' },
              { label: 'Razer Core X (original) on Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Is there any way to make an eGPU work with an M4 MacBook Pro for AI?', a: 'Yes, with limits. Tiny Corp\'s TinyGPU driver runs compute on AMD RDNA 3+ and NVIDIA Ampere+ GPUs over Thunderbolt or USB4 on macOS 13+. It is documented for tinygrad only (not Ollama, llama.cpp or MLX), gives no display output, and NVIDIA cards need Docker Desktop. Plugable reported little improvement over baseline on an M2 MacBook Pro. For a stable setup, run Ollama on a separate GPU machine and connect over LAN (OLLAMA_HOST=0.0.0.0 on the server).' },
          { q: 'What is the best eGPU for a base-model MacBook Pro 16?', a: 'No eGPU is officially supported on any Apple Silicon MacBook Pro. To experiment with TinyGPU, the documented minimum is an AMD RDNA 3+ card (Radeon RX 7000 or newer) or an NVIDIA Ampere+ card (RTX 30 or newer) in a Thunderbolt or USB4 enclosure; AMD avoids the Docker step. For daily use, a Mac with more unified memory or an RTX GPU in a LAN-connected mini PC is the more reliable choice.' },
          { q: 'Does the Razer Core work with a MacBook Pro?', a: 'Not on Apple Silicon. Razer\'s Core X V2 page states "eGPUs not supported by M1 & later Mac devices". The original Razer Core X launched in 2018 for Intel Macs with Thunderbolt 3. A Razer enclosure on an Apple Silicon Mac would depend on the unofficial TinyGPU driver, which Razer does not list.' },
          { q: 'Can I add an external GPU to an iMac?', a: 'Not natively on Apple Silicon iMacs — the limits are the same as for MacBooks. Intel iMacs with Thunderbolt 3 supported eGPUs on older macOS versions. For local LLMs, run Ollama on a separate GPU machine and connect over LAN.' },
          { q: 'Can I use an OCuLink eGPU with a Mac?', a: 'No. No Mac has an OCuLink port. OCuLink is designed for PCs and mini PCs; for a Mac, the options are a Thunderbolt or USB4 eGPU with the experimental TinyGPU driver, or an OCuLink mini PC served over LAN.' },
          { q: 'Will Apple bring back eGPU support for Apple Silicon?', a: 'Unlikely. Apple\'s M-series chips integrate the GPU, CPU and memory in one package — the design is unified memory, not expandability — and Apple has not announced plans to restore eGPU compute support.' },
          { q: 'Can I use an NVIDIA GPU for inference and pipe the output to my MacBook?', a: 'Yes — this is the recommended approach. Run Ollama on a Windows or Linux machine with an NVIDIA GPU, expose it on your LAN (OLLAMA_HOST=0.0.0.0), and connect from your MacBook via Open WebUI, Cursor, Continue, or any OpenAI-compatible client. The MacBook handles the UI; the NVIDIA machine handles the computation.' },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'Is there any way to make an eGPU work with an M4 MacBook Pro for AI?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, with limits. Tiny Corp\'s TinyGPU driver runs compute on AMD RDNA 3+ and NVIDIA Ampere+ GPUs over Thunderbolt or USB4 on macOS 13+. It is documented for tinygrad only (not Ollama, llama.cpp or MLX), gives no display output, and NVIDIA cards need Docker Desktop. Plugable reported little improvement over baseline on an M2 MacBook Pro. For a stable setup, run Ollama on a separate GPU machine and connect over LAN (OLLAMA_HOST=0.0.0.0 on the server).',
          },
        },
        {
          '@type': 'Question',
          'name': 'What is the best eGPU for a base-model MacBook Pro 16?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No eGPU is officially supported on any Apple Silicon MacBook Pro. To experiment with TinyGPU, the documented minimum is an AMD RDNA 3+ card (Radeon RX 7000 or newer) or an NVIDIA Ampere+ card (RTX 30 or newer) in a Thunderbolt or USB4 enclosure; AMD avoids the Docker step. For daily use, a Mac with more unified memory or an RTX GPU in a LAN-connected mini PC is the more reliable choice.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does the Razer Core work with a MacBook Pro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not on Apple Silicon. Razer\'s Core X V2 page states "eGPUs not supported by M1 & later Mac devices". The original Razer Core X launched in 2018 for Intel Macs with Thunderbolt 3. A Razer enclosure on an Apple Silicon Mac would depend on the unofficial TinyGPU driver, which Razer does not list.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I add an external GPU to an iMac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not natively on Apple Silicon iMacs — the limits are the same as for MacBooks. Intel iMacs with Thunderbolt 3 supported eGPUs on older macOS versions. For local LLMs, run Ollama on a separate GPU machine and connect over LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use an OCuLink eGPU with a Mac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. No Mac has an OCuLink port. OCuLink is designed for PCs and mini PCs; for a Mac, the options are a Thunderbolt or USB4 eGPU with the experimental TinyGPU driver, or an OCuLink mini PC served over LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Will Apple bring back eGPU support for Apple Silicon?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Unlikely. Apple\'s M-series chips integrate the GPU, CPU and memory in one package — the design is unified memory, not expandability — and Apple has not announced plans to restore eGPU compute support.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use an NVIDIA GPU for inference and pipe the output to my MacBook?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes — this is the recommended approach. Run Ollama on a Windows or Linux machine with an NVIDIA GPU, expose it on your LAN (OLLAMA_HOST=0.0.0.0), and connect from your MacBook via Open WebUI, Cursor, Continue, or any OpenAI-compatible client. The MacBook handles the UI; the NVIDIA machine handles the computation.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Best eGPU Setup for MacBook Local LLM Inference (2026)', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'en' },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-de.webp',
    type: 'how-to',
    title: 'eGPU für MacBook und lokale KI: Was 2026 funktioniert (und was nicht)',
    seoTitle: 'eGPU für MacBook Local LLM 2026 — Alternativen',
    metaDescription: 'Keine eGPU läuft nativ am Apple-Silicon-MacBook. Optionen 2026: TinyGPU (nur tinygrad), Mac mini M5 Pro oder ein OCuLink-Mini-PC im LAN.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Keine eGPU läuft nativ an einem Apple-Silicon-MacBook (M1–M5): macOS hat keinen Treiber für externe GPUs, und Razer gibt für das Core X V2 an: „not supported by M1 & later Mac devices“. Der einzige Weg ist Tiny Corps TinyGPU-Treiber, den laut Tiny Corp Apple freigegeben hat: Er ermöglicht KI-Compute auf AMD-RDNA-3+- oder NVIDIA-Ampere+-eGPUs über Thunderbolt oder USB4, ist aber nur für tinygrad dokumentiert — nicht für Ollama, llama.cpp oder MLX. Für ein unterstütztes Setup: Mac mini M5 Pro oder ein OCuLink-Mini-PC, der im LAN bereitgestellt wird.**',
    quickAnswerTop: {
      question: 'Kann ich eine eGPU mit einem MacBook für lokale KI-Inferenz nutzen?',
      answer: 'Nicht nativ. Apple-Silicon-Macs (M1–M5) haben keinen macOS-Treiber für externe GPUs. Seit April 2026 ermöglicht Tiny Corps TinyGPU-Treiber (nur Compute, keine Bildausgabe), dass AMD-RDNA-3+- und NVIDIA-Ampere+-GPUs über Thunderbolt oder USB4 KI-Workloads ausführen. Er ist aber nur für tinygrad dokumentiert, und NVIDIA-Karten brauchen zusätzlich Docker Desktop. Für ein stabiles Setup: Ollama auf einem Mac mini M5 Pro oder einem OCuLink-Mini-PC betreiben und per LAN verbinden.',
      bullets: [
        'Apple-Silicon-MacBooks (M1–M5): keine native eGPU-Unterstützung; Razer führt das Core X V2 für M1 und neuere Macs als nicht unterstützt',
        'TinyGPU (angekündigt am 1. April 2026): nur Compute, AMD RDNA 3+ oder NVIDIA Ampere+, macOS 13+, keine Bildausgabe',
        'TinyGPU ist nur für tinygrad dokumentiert; Ollama, llama.cpp und MLX sind nicht als unterstützt dokumentiert',
        'NVIDIA-Karten brauchen Docker Desktop auf dem Mac; AMD-Karten laufen ohne',
        'Tiny Corp meldet selbst 18,5 Tok/s mit Qwen 3.5 27B (Mac mini + RX 7900 XTX); Plugable sah auf einem M2 MacBook Pro kaum Gewinn gegenüber der Basis',
        'Unterstützte Alternative: Mac mini M5 Pro (ab 1.699 $ US-Preis, bis 64 GB, 307 GB/s) oder OCuLink-Mini-PC + RTX 3090 im LAN',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Kein Apple-Silicon-Mac (M1–M5) unterstützt eine eGPU nativ; eine angeschlossene Karte wird erkannt, kann aber keine Arbeit ausführen',
          'TinyGPU (Tiny Corp, April 2026) ergänzt AMD- und NVIDIA-eGPU-Compute ab macOS 13 über Thunderbolt oder USB4 — nur Compute, keine Bildausgabe, nur für tinygrad dokumentiert',
          'NVIDIA-Karten brauchen für das TinyGPU-Setup Docker Desktop; AMD-Karten nicht',
          'Für ein unterstütztes Mac-Setup: Mac mini M5 Pro (ab 1.699 $ US-Preis, bis 64 GB Unified Memory)',
          'Für GPU-Tempo: OCuLink-Mini-PC + RTX 3090, per LAN mit Ollama für das MacBook bereitgestellt',
          'OCuLink ist PCIe 4.0 x4 (rund 63 Gbit/s) — ein Viertel eines x16-Slots, genug, sobald das Modell im VRAM liegt; kein Mac hat einen OCuLink-Anschluss',
        ],
      },
      mainContent: {
        title: 'eGPU an Apple-Silicon-Macs 2026: Was sich geändert hat',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple-Silicon-Macs haben keine native Unterstützung für externe GPUs, doch seit April 2026 kann Tiny Corps TinyGPU-Treiber KI-Compute auf AMD- und NVIDIA-eGPUs über Thunderbolt oder USB4 ausführen — nur für tinygrad dokumentiert.',
          },
          {
            type: 'plain-terms',
            text: 'Eine eGPU ist eine externe Grafikkarte in einem Gehäuse, angeschlossen über Thunderbolt, USB4 oder OCuLink. macOS auf M-Chips hat dafür keinen Treiber, eine angeschlossene Karte wird also erkannt, kann aber keine Arbeit ausführen. TinyGPU ist eine macOS-App von Tiny Corp, die eine DriverKit-Erweiterung installiert (laut Tiny Corp von Apple freigegeben), um Compute auf der Karte zu ermöglichen. Sie steuert keine Displays und nutzt kein Metal.',
          },
        ],
        content: 'Ohne Treiber eines Drittanbieters erkennt ein Apple-Silicon-Mac eine externe GPU, kann sie laut Plugable aber nicht nutzen. Razers Seite zum Core X V2 nennt: „eGPUs not supported by M1 & later Mac devices“. Am 1. April 2026 kündigte Tiny Corp an, Apple habe den TinyGPU-Treiber für AMD und NVIDIA freigegeben. Laut tinygrad-Dokumentation braucht TinyGPU macOS 13.0 oder neuer, eine AMD-RDNA-3+- oder NVIDIA-Ampere+-GPU und einen USB4- oder Thunderbolt-Anschluss; das NVIDIA-Setup erfordert zusätzlich Docker Desktop. Dokumentiert ist der LLM-Runner von tinygrad; laut heise funktioniert der Treiber nicht mit Apples MLX. Tiny Corp meldete 18,5 Tok/s für Qwen 3.5 27B auf einem Mac mini mit Radeon RX 7900 XTX — eine Herstellerangabe, kein unabhängiger Benchmark. Plugable testete eine Radeon 9070 und eine GeForce RTX 5070 in einem Thunderbolt-5-Gehäuse an einem M2 MacBook Pro und sah kaum Verbesserung gegenüber der Basis.',
        items: [
          '**Apple Silicon (M1–M5)**: keine native eGPU-Unterstützung — eine angeschlossene Karte wird erkannt, kann aber keine Arbeit ausführen.',
          '**TinyGPU (angekündigt am 1. April 2026)**: Treiber-App von Tiny Corp; AMD RDNA 3+ und NVIDIA Ampere+ über Thunderbolt oder USB4; macOS 13.0+.',
          '**Umfang**: nur Compute — keine Bildausgabe, kein Metal, kein Gaming; Software-Unterstützung nur für tinygrad dokumentiert.',
          '**NVIDIA-Karten**: Das Compiler-Setup braucht Docker Desktop; AMD-Karten laufen nativ.',
          '**Intel-MacBooks (2018–2020)**: eGPU funktionierte über Thunderbolt 3 unter älterem macOS; diese Macs sind eingestellt.',
        ],
      },
      connections: {
        id: 'connections',
        title: 'OCuLink, Thunderbolt und USB4 für eine externe GPU im Vergleich',
        content: '**OCuLink bietet einer externen GPU die meiste Bandbreite pro Euro, aber nur an PCs — kein Mac hat einen OCuLink-Anschluss.** Thunderbolt 4 und USB4 sind hot-pluggable und funktionieren an Laptops bei geringerer Linkgeschwindigkeit. Die Token-Generierung hängt, sobald das Modell im VRAM liegt, vor allem von der Speicherbandbreite der GPU ab; der Link beeinflusst hauptsächlich das Laden des Modells. Einen Mini-PC mit OCuLink-Anschluss (etwa Minisforum UM890 Pro oder AOOSTAR GEM12+ Pro) wählen, wenn die GPU am Schreibtisch bleibt; ein Thunderbolt-Gehäuse nur für einen Laptop, den man mitnimmt.',
        columns: ['Anbindung', 'Nominelle Bandbreite', 'Hot-Plug', 'Typischer Einsatz'],
        rows: [
          {
            'Anbindung': 'OCuLink 4i (PCIe 4.0 x4)',
            'Nominelle Bandbreite': '~63 Gbit/s',
            'Hot-Plug': 'Nein (vorher ausschalten)',
            'Typischer Einsatz': 'Mini-PC + GPU-Dock',
          },
          {
            'Anbindung': 'Thunderbolt 4 / USB4 40G',
            'Nominelle Bandbreite': '40 Gbit/s',
            'Hot-Plug': 'Ja',
            'Typischer Einsatz': 'Laptop + Gehäuse',
          },
          {
            'Anbindung': 'Thunderbolt 5',
            'Nominelle Bandbreite': '80 Gbit/s (120 Gbit/s Boost)',
            'Hot-Plug': 'Ja',
            'Typischer Einsatz': 'Neuere PCs und Macs',
          },
          {
            'Anbindung': 'USB4 20G',
            'Nominelle Bandbreite': '20 Gbit/s',
            'Hot-Plug': 'Ja',
            'Typischer Einsatz': 'Geringste Bandbreite',
          },
        ],
      },
      alternatives: {
        title: 'Echte Alternativen für GPU-beschleunigtes LLM am Mac',
        productItems: [
          {
            title: 'Mac mini M5 Pro (bis 64 GB) — Beste macOS-Option',
            content: 'Apples Mac mini mit M5 Pro (seit 22. September 2026 erhältlich) startet bei 1.699 $ (US-Preis) und bietet bis zu 64 GB Unified Memory mit 307 GB/s. Die Token-Generierung ist durch die Speicherbandbreite begrenzt: Ein 32B-Q4-Modell von etwa 19–20 GB hat bei dieser Bandbreite eine theoretische Obergrenze von rund 15 Tok/s; reale Werte liegen darunter. Geeignet für 32B-Modelle, die ohne separaten GPU-Rechner in den Speicher passen sollen. Der Basis-Mac-mini M6 (ab 899 $, bis 32 GB, 170 GB/s) passt zu 7B–14B-Modellen.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro bei Amazon.de', url: 'https://www.amazon.de/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'OCuLink-Mini-PC + RTX 3090 (Beste GPU/Portable-Kombination)',
            content: 'Ein Mini-PC mit OCuLink-Anschluss — etwa Minisforum UM890 Pro (Ryzen 9 8945HS, Barebone zum Marktstart 2024 ab 479 $) oder AOOSTAR GEM12+ Pro (Barebone um 359 $ gelistet) — verbindet sich über ein OCuLink-Dock mit einer Desktop-GPU. OCuLink ist nicht hot-swap-fähig: PC vor dem Anschließen ausschalten. Community-Benchmarks mit llama.cpp nennen grob 90–95 Tok/s für ein 8B-Q4_K_M-Modell auf einer RTX 3090; die Quellen weichen ab, Ergebnisse hängen von Kontextlänge und Build ab. Ollama auf dem Mini-PC betreiben und per LAN bereitstellen; das MacBook bleibt Client.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink bei Amazon.de', url: 'https://www.amazon.de/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro bei Amazon.de', url: 'https://www.amazon.de/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'TinyGPU-Treiber + eGPU am Apple-Silicon-Mac (experimentell)',
            content: 'Tiny Corps TinyGPU-Treiber ermöglicht Compute auf AMD-RDNA-3+- und NVIDIA-Ampere+-eGPUs über Thunderbolt oder USB4 ab macOS 13. Er ist nur für tinygrad dokumentiert (Start mit DEV=AMD oder DEV=NV python3 -m tinygrad.llm), NVIDIA-Karten brauchen Docker Desktop, und Plugable sah an einem M2 MacBook Pro kaum Verbesserung gegenüber der Basis. Es ist ein Treiber eines Drittanbieters, keine native Metal-Unterstützung; Kompatibilitätsänderungen mit neuen macOS-Versionen sind zu erwarten. Als Experiment betrachten, nicht als Alltags-Setup.',
            affiliateLinks: [
              { label: 'RTX 4090 eGPU bei Amazon.de (für TinyGPU-Setup)', url: 'https://www.amazon.de/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'Thunderbolt-eGPU an Windows-/Linux-Laptop (falls kein Mac)',
            content: 'An einem x86-Laptop mit Windows oder Linux und Thunderbolt 4 oder 5 funktioniert eine eGPU mit Ollama. Der Link ist langsamer als ein nativer PCIe-Slot, doch sobald das Modell im VRAM liegt, hängt die Token-Generierung vor allem von der Speicherbandbreite der GPU ab; reale Einbußen sind kleiner, als die Linklücke vermuten lässt. Das Razer Core X V2 (349,99 $, Thunderbolt 5, ohne Netzteil) ist für Windows gebaut; Razers Seite nennt eGPUs an M1 und neueren Macs als nicht unterstützt.',
            affiliateLinks: [
              { label: 'Razer Core X V2 eGPU-Gehäuse bei Amazon.de', url: 'https://www.amazon.de/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X (Original) bei Amazon.de', url: 'https://www.amazon.de/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Gibt es eine Möglichkeit, eine eGPU mit einem M4 MacBook Pro für KI zu nutzen?', a: 'Ja, mit Einschränkungen. Tiny Corps TinyGPU-Treiber führt Compute auf AMD-RDNA-3+- und NVIDIA-Ampere+-GPUs über Thunderbolt oder USB4 ab macOS 13 aus. Er ist nur für tinygrad dokumentiert (nicht für Ollama, llama.cpp oder MLX), liefert keine Bildausgabe, und NVIDIA-Karten brauchen Docker Desktop. Plugable sah an einem M2 MacBook Pro kaum Verbesserung gegenüber der Basis. Für ein stabiles Setup: Ollama auf einem separaten GPU-Rechner betreiben und per LAN verbinden (OLLAMA_HOST=0.0.0.0 auf dem Server).' },
          { q: 'Welche eGPU ist die beste für ein MacBook Pro 16 in der Basisversion?', a: 'Für kein Apple-Silicon-MacBook-Pro ist eine eGPU offiziell unterstützt. Zum Experimentieren mit TinyGPU gilt als dokumentiertes Minimum eine AMD-RDNA-3+-Karte (Radeon RX 7000 oder neuer) oder eine NVIDIA-Ampere+-Karte (RTX 30 oder neuer) in einem Thunderbolt- oder USB4-Gehäuse; mit AMD entfällt der Docker-Schritt. Für den Alltag sind ein Mac mit mehr Unified Memory oder eine RTX-GPU in einem per LAN angebundenen Mini-PC die verlässlichere Wahl.' },
          { q: 'Funktioniert das Razer Core mit einem MacBook Pro?', a: 'Nicht mit Apple Silicon. Razers Seite zum Core X V2 nennt: „eGPUs not supported by M1 & later Mac devices“. Das ursprüngliche Razer Core X erschien 2018 für Intel-Macs mit Thunderbolt 3. Ein Razer-Gehäuse an einem Apple-Silicon-Mac wäre auf den inoffiziellen TinyGPU-Treiber angewiesen, den Razer nicht aufführt.' },
          { q: 'Kann ich dem iMac eine externe GPU hinzufügen?', a: 'Nativ nicht bei Apple-Silicon-iMacs — es gelten dieselben Grenzen wie bei MacBooks. Intel-iMacs mit Thunderbolt 3 unterstützten eGPUs unter älteren macOS-Versionen. Für lokale LLMs: Ollama auf einem separaten GPU-Rechner betreiben und per LAN verbinden.' },
          { q: 'Kann ich eine OCuLink-eGPU an einem Mac verwenden?', a: 'Nein. Kein Mac hat einen OCuLink-Anschluss. OCuLink ist für PCs und Mini-PCs gedacht; für einen Mac bleiben eine Thunderbolt- oder USB4-eGPU mit dem experimentellen TinyGPU-Treiber oder ein OCuLink-Mini-PC im LAN.' },
          { q: 'Wird Apple eGPU-Unterstützung für Apple Silicon zurückbringen?', a: 'Unwahrscheinlich. Apples M-Chips integrieren GPU, CPU und Speicher in einem Package — das Designprinzip ist Unified Memory, nicht Erweiterbarkeit —, und Apple hat keine Pläne angekündigt, eGPU-Compute wieder zu unterstützen.' },
          { q: 'Kann ich eine NVIDIA-GPU für Inferenz nutzen und die Ausgabe an mein MacBook senden?', a: 'Ja — das ist der empfohlene Weg. Ollama auf einem Windows- oder Linux-Rechner mit NVIDIA-GPU betreiben, im LAN freigeben (OLLAMA_HOST=0.0.0.0) und vom MacBook über Open WebUI, Cursor, Continue oder einen anderen OpenAI-kompatiblen Client verbinden. Das MacBook übernimmt die Oberfläche, der NVIDIA-Rechner die Berechnung.' },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/de/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/de/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/de/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/de/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/de/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/de/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'Gibt es eine Möglichkeit, eine eGPU mit einem M4 MacBook Pro für KI zu nutzen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, mit Einschränkungen. Tiny Corps TinyGPU-Treiber führt Compute auf AMD-RDNA-3+- und NVIDIA-Ampere+-GPUs über Thunderbolt oder USB4 ab macOS 13 aus. Er ist nur für tinygrad dokumentiert (nicht für Ollama, llama.cpp oder MLX), liefert keine Bildausgabe, und NVIDIA-Karten brauchen Docker Desktop. Plugable sah an einem M2 MacBook Pro kaum Verbesserung gegenüber der Basis. Für ein stabiles Setup: Ollama auf einem separaten GPU-Rechner betreiben und per LAN verbinden (OLLAMA_HOST=0.0.0.0 auf dem Server).',
          },
        },
        {
          '@type': 'Question',
          'name': 'Welche eGPU ist die beste für ein MacBook Pro 16 in der Basisversion?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Für kein Apple-Silicon-MacBook-Pro ist eine eGPU offiziell unterstützt. Zum Experimentieren mit TinyGPU gilt als dokumentiertes Minimum eine AMD-RDNA-3+-Karte (Radeon RX 7000 oder neuer) oder eine NVIDIA-Ampere+-Karte (RTX 30 oder neuer) in einem Thunderbolt- oder USB4-Gehäuse; mit AMD entfällt der Docker-Schritt. Für den Alltag sind ein Mac mit mehr Unified Memory oder eine RTX-GPU in einem per LAN angebundenen Mini-PC die verlässlichere Wahl.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Funktioniert das Razer Core mit einem MacBook Pro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nicht mit Apple Silicon. Razers Seite zum Core X V2 nennt: „eGPUs not supported by M1 & later Mac devices“. Das ursprüngliche Razer Core X erschien 2018 für Intel-Macs mit Thunderbolt 3. Ein Razer-Gehäuse an einem Apple-Silicon-Mac wäre auf den inoffiziellen TinyGPU-Treiber angewiesen, den Razer nicht aufführt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich dem iMac eine externe GPU hinzufügen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nativ nicht bei Apple-Silicon-iMacs — es gelten dieselben Grenzen wie bei MacBooks. Intel-iMacs mit Thunderbolt 3 unterstützten eGPUs unter älteren macOS-Versionen. Für lokale LLMs: Ollama auf einem separaten GPU-Rechner betreiben und per LAN verbinden.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich eine OCuLink-eGPU an einem Mac verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nein. Kein Mac hat einen OCuLink-Anschluss. OCuLink ist für PCs und Mini-PCs gedacht; für einen Mac bleiben eine Thunderbolt- oder USB4-eGPU mit dem experimentellen TinyGPU-Treiber oder ein OCuLink-Mini-PC im LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wird Apple eGPU-Unterstützung für Apple Silicon zurückbringen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Unwahrscheinlich. Apples M-Chips integrieren GPU, CPU und Speicher in einem Package — das Designprinzip ist Unified Memory, nicht Erweiterbarkeit —, und Apple hat keine Pläne angekündigt, eGPU-Compute wieder zu unterstützen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich eine NVIDIA-GPU für Inferenz nutzen und die Ausgabe an mein MacBook senden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja — das ist der empfohlene Weg. Ollama auf einem Windows- oder Linux-Rechner mit NVIDIA-GPU betreiben, im LAN freigeben (OLLAMA_HOST=0.0.0.0) und vom MacBook über Open WebUI, Cursor, Continue oder einen anderen OpenAI-kompatiblen Client verbinden. Das MacBook übernimmt die Oberfläche, der NVIDIA-Rechner die Berechnung.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU für MacBook und lokale KI: Was 2026 funktioniert', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/de/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'de' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-fr.webp',
    type: 'how-to',
    title: 'eGPU pour MacBook et IA locale : ce qui marche en 2026',
    seoTitle: 'eGPU MacBook IA locale 2026 — Ce qui fonctionne',
    metaDescription: 'Aucune eGPU ne fonctionne nativement sur un MacBook Apple Silicon. Options 2026 : TinyGPU (tinygrad seul), Mac mini M5 Pro ou mini PC OCuLink en LAN.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Aucune eGPU ne fonctionne nativement sur un MacBook Apple Silicon (M1–M5) : macOS n\'a pas de pilote pour les GPU externes, et Razer indique que son Core X V2 est « not supported by M1 & later Mac devices ». La seule voie est le pilote TinyGPU de Tiny Corp, que Tiny Corp dit approuvé par Apple : il exécute du calcul IA sur des eGPU AMD RDNA 3+ ou NVIDIA Ampere+ via Thunderbolt ou USB4, mais sa documentation ne couvre que tinygrad — pas Ollama, llama.cpp ni MLX. Pour une configuration prise en charge : un Mac mini M5 Pro ou un mini PC OCuLink servi sur votre réseau local.**',
    quickAnswerTop: {
      question: 'Puis-je utiliser une eGPU avec un MacBook pour l\'inférence LLM locale ?',
      answer: 'Pas nativement. Les Mac Apple Silicon (M1–M5) n\'ont aucun pilote macOS pour les GPU externes. Depuis avril 2026, le pilote TinyGPU de Tiny Corp (calcul uniquement, sans sortie d\'affichage) permet à des GPU AMD RDNA 3+ et NVIDIA Ampere+ d\'exécuter des charges IA via Thunderbolt ou USB4, mais sa documentation ne couvre que tinygrad, et les cartes NVIDIA exigent aussi Docker Desktop. Pour une configuration stable : exécuter Ollama sur un Mac mini M5 Pro ou un mini PC OCuLink et s\'y connecter via le réseau local.',
      bullets: [
        'MacBook Apple Silicon (M1–M5) : pas de prise en charge native des eGPU ; Razer classe son Core X V2 comme non pris en charge sur les Mac M1 et suivants',
        'TinyGPU (annoncé le 1er avril 2026) : calcul uniquement, AMD RDNA 3+ ou NVIDIA Ampere+, macOS 13+, pas de sortie d\'affichage',
        'TinyGPU n\'est documenté que pour tinygrad ; Ollama, llama.cpp et MLX ne sont pas documentés comme pris en charge',
        'Les cartes NVIDIA exigent Docker Desktop sur le Mac ; les cartes AMD fonctionnent sans',
        'Tiny Corp annonce lui-même 18,5 tok/s sur Qwen 3.5 27B (Mac mini + RX 7900 XTX) ; Plugable a constaté peu de gain sur un MacBook Pro M2',
        'Alternative prise en charge : Mac mini M5 Pro (dès 1 699 $, prix US, jusqu\'à 64 Go, 307 Go/s) ou mini PC OCuLink + RTX 3090 en LAN',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Aucun Mac Apple Silicon (M1–M5) ne prend en charge une eGPU nativement ; une carte branchée est détectée mais ne peut exécuter aucun calcul',
          'TinyGPU (Tiny Corp, avril 2026) ajoute le calcul eGPU AMD et NVIDIA dès macOS 13 via Thunderbolt ou USB4 — calcul uniquement, sans affichage, documenté pour tinygrad seul',
          'Les cartes NVIDIA exigent Docker Desktop pour l\'installation de TinyGPU ; les cartes AMD non',
          'Pour une configuration Mac prise en charge : Mac mini M5 Pro (dès 1 699 $, prix US, jusqu\'à 64 Go de mémoire unifiée)',
          'Pour la vitesse GPU : mini PC OCuLink + RTX 3090, servi au MacBook via le réseau local avec Ollama',
          'OCuLink est du PCIe 4.0 x4 (environ 63 Gb/s) — un quart d\'un slot x16, suffisant une fois le modèle en VRAM ; aucun Mac n\'a de port OCuLink',
        ],
      },
      mainContent: {
        title: 'eGPU sur les Mac Apple Silicon en 2026 : ce qui a changé',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les Mac Apple Silicon n\'ont aucune prise en charge native des GPU externes, mais depuis avril 2026 le pilote TinyGPU de Tiny Corp peut exécuter du calcul IA sur des eGPU AMD et NVIDIA via Thunderbolt ou USB4 — documenté uniquement pour tinygrad.',
          },
          {
            type: 'plain-terms',
            text: 'Une eGPU est une carte graphique externe dans un boîtier relié en Thunderbolt, USB4 ou OCuLink. macOS sur puces M n\'a pas de pilote pour elle : une carte branchée est détectée mais ne peut exécuter aucun calcul. TinyGPU est une app macOS de Tiny Corp qui installe une extension DriverKit (que Tiny Corp dit approuvée par Apple) pour activer le calcul sur la carte. Elle ne pilote aucun écran et n\'utilise pas Metal.',
          },
        ],
        content: 'Sans pilote tiers, un Mac Apple Silicon détecte un GPU externe mais ne peut pas l\'utiliser, selon Plugable. La page du Core X V2 de Razer indique « eGPUs not supported by M1 & later Mac devices ». Le 1er avril 2026, Tiny Corp a annoncé qu\'Apple avait approuvé son pilote TinyGPU pour AMD et NVIDIA. Selon la documentation de tinygrad, TinyGPU exige macOS 13.0 ou plus, un GPU AMD RDNA 3+ ou NVIDIA Ampere+ et un port USB4 ou Thunderbolt ; l\'installation NVIDIA exige en plus Docker Desktop. La charge documentée est le lanceur LLM de tinygrad, et selon heise le pilote ne fonctionne pas avec MLX d\'Apple. Tiny Corp a annoncé 18,5 tok/s pour Qwen 3.5 27B sur un Mac mini avec une Radeon RX 7900 XTX — une donnée du fabricant, pas un benchmark indépendant. Plugable a testé une Radeon 9070 et une GeForce RTX 5070 dans un boîtier Thunderbolt 5 sur un MacBook Pro M2 et a constaté peu d\'amélioration par rapport à la base.',
        items: [
          '**Apple Silicon (M1–M5)** : pas de prise en charge native des eGPU — une carte branchée est détectée mais ne peut exécuter aucun calcul.',
          '**TinyGPU (annoncé le 1er avril 2026)** : app de pilote tierce de Tiny Corp ; AMD RDNA 3+ et NVIDIA Ampere+ via Thunderbolt ou USB4 ; macOS 13.0+.',
          '**Périmètre** : calcul uniquement — pas de sortie d\'affichage, pas de Metal, pas de jeu ; prise en charge logicielle documentée pour tinygrad seul.',
          '**Cartes NVIDIA** : la configuration du compilateur exige Docker Desktop ; les cartes AMD fonctionnent nativement.',
          '**MacBook Intel (2018–2020)** : l\'eGPU fonctionnait via Thunderbolt 3 sous d\'anciennes versions de macOS ; ces Mac sont abandonnés.',
        ],
      },
      connections: {
        id: 'connections',
        title: 'OCuLink, Thunderbolt et USB4 pour un GPU externe : comparatif',
        content: '**OCuLink offre à un GPU externe le plus de bande passante par euro, mais uniquement sur PC — aucun Mac n\'a de port OCuLink.** Thunderbolt 4 et USB4 se branchent à chaud et fonctionnent sur portable, avec un débit de liaison plus faible. Une fois le modèle en VRAM, la génération de tokens dépend surtout de la bande passante mémoire du GPU ; la liaison influe surtout sur le chargement du modèle. Choisissez un mini PC avec port OCuLink (par exemple Minisforum UM890 Pro ou AOOSTAR GEM12+ Pro) si le GPU reste sur un bureau ; un boîtier Thunderbolt seulement pour un portable que l\'on emporte.',
        columns: ['Liaison', 'Débit nominal', 'Branchement à chaud', 'Usage typique'],
        rows: [
          {
            'Liaison': 'OCuLink 4i (PCIe 4.0 x4)',
            'Débit nominal': '~63 Gb/s',
            'Branchement à chaud': 'Non (éteindre avant)',
            'Usage typique': 'Mini PC + dock GPU',
          },
          {
            'Liaison': 'Thunderbolt 4 / USB4 40G',
            'Débit nominal': '40 Gb/s',
            'Branchement à chaud': 'Oui',
            'Usage typique': 'Portable + boîtier',
          },
          {
            'Liaison': 'Thunderbolt 5',
            'Débit nominal': '80 Gb/s (120 Gb/s en boost)',
            'Branchement à chaud': 'Oui',
            'Usage typique': 'PC et Mac récents',
          },
          {
            'Liaison': 'USB4 20G',
            'Débit nominal': '20 Gb/s',
            'Branchement à chaud': 'Oui',
            'Usage typique': 'Débit le plus faible',
          },
        ],
      },
      alternatives: {
        title: 'Vraies alternatives pour l\'inférence GPU sur Mac',
        productItems: [
          {
            title: 'Mac mini M5 Pro (jusqu\'à 64 Go) — Meilleure option macOS',
            content: 'Le Mac mini M5 Pro d\'Apple (disponible depuis le 22 septembre 2026) démarre à 1 699 $ (prix US) et offre jusqu\'à 64 Go de mémoire unifiée à 307 Go/s. La génération de tokens est limitée par la bande passante mémoire : un modèle 32B Q4 d\'environ 19–20 Go a un plafond théorique proche de 15 tok/s à cette bande passante ; les vitesses réelles sont inférieures. À choisir pour des modèles de classe 32B qui doivent tenir en mémoire sans machine GPU séparée. Le Mac mini M6 de base (dès 899 $, jusqu\'à 32 Go, 170 Go/s) convient aux modèles 7B–14B.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'Mini PC OCuLink + RTX 3090 (Meilleure combo GPU/portable)',
            content: 'Un mini PC avec port OCuLink — comme le Minisforum UM890 Pro (Ryzen 9 8945HS, barebone dès 479 $ à son lancement en 2024) ou l\'AOOSTAR GEM12+ Pro (barebone listé autour de 359 $) — se relie à un GPU de bureau via un dock OCuLink. OCuLink ne se branche pas à chaud : éteignez le PC avant de connecter. Des benchmarks communautaires llama.cpp indiquent environ 90–95 tok/s pour un modèle 8B Q4_K_M sur une RTX 3090 ; les sources divergent et les résultats dépendent de la longueur de contexte et de la version. Exécutez Ollama sur le mini PC et servez-le en LAN ; le MacBook reste le client.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink sur Amazon.fr', url: 'https://www.amazon.fr/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'Pilote TinyGPU + eGPU sur Mac Apple Silicon (expérimental)',
            content: 'Le pilote TinyGPU de Tiny Corp active le calcul sur des eGPU AMD RDNA 3+ et NVIDIA Ampere+ via Thunderbolt ou USB4 sous macOS 13+. Il n\'est documenté que pour tinygrad (lancement avec DEV=AMD ou DEV=NV python3 -m tinygrad.llm), les cartes NVIDIA exigent Docker Desktop, et Plugable a constaté peu d\'amélioration par rapport à la base sur un MacBook Pro M2. C\'est un pilote tiers, pas une prise en charge Metal native ; attendez-vous à des changements de compatibilité au fil de macOS. À traiter comme une expérience, pas comme une configuration quotidienne.',
            affiliateLinks: [
              { label: 'eGPU RTX 4090 sur Amazon.fr (pour TinyGPU)', url: 'https://www.amazon.fr/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'eGPU Thunderbolt sur portable Windows/Linux (hors Mac)',
            content: 'Sur un portable x86 Windows ou Linux avec Thunderbolt 4 ou 5, une eGPU fonctionne avec Ollama. La liaison est plus lente qu\'un slot PCIe natif, mais une fois le modèle en VRAM, la génération de tokens dépend surtout de la bande passante mémoire du GPU ; les pertes réelles sont plus faibles que l\'écart de liaison ne le laisse penser. Le Razer Core X V2 (349,99 $, Thunderbolt 5, alimentation non incluse) est conçu pour Windows ; la page de Razer indique que les eGPU ne sont pas pris en charge sur les Mac M1 et suivants.',
            affiliateLinks: [
              { label: 'Boîtier eGPU Razer Core X V2 sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X (original) sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Existe-t-il un moyen de faire fonctionner une eGPU avec un MacBook Pro M4 pour l\'IA ?', a: 'Oui, avec des limites. Le pilote TinyGPU de Tiny Corp exécute du calcul sur des GPU AMD RDNA 3+ et NVIDIA Ampere+ via Thunderbolt ou USB4 sous macOS 13+. Il n\'est documenté que pour tinygrad (pas pour Ollama, llama.cpp ni MLX), n\'offre aucune sortie d\'affichage, et les cartes NVIDIA exigent Docker Desktop. Plugable a constaté peu d\'amélioration par rapport à la base sur un MacBook Pro M2. Pour une configuration stable : exécuter Ollama sur une machine GPU séparée et s\'y connecter via le réseau local (OLLAMA_HOST=0.0.0.0 sur le serveur).' },
          { q: 'Quelle est la meilleure eGPU pour un MacBook Pro 16 de base ?', a: 'Aucune eGPU n\'est officiellement prise en charge sur un MacBook Pro Apple Silicon. Pour expérimenter TinyGPU, le minimum documenté est une carte AMD RDNA 3+ (Radeon RX 7000 ou plus récente) ou NVIDIA Ampere+ (RTX 30 ou plus récente) dans un boîtier Thunderbolt ou USB4 ; AMD évite l\'étape Docker. Au quotidien, un Mac avec plus de mémoire unifiée ou un GPU RTX dans un mini PC relié en LAN est le choix le plus fiable.' },
          { q: 'Le Razer Core fonctionne-t-il avec un MacBook Pro ?', a: 'Pas sur Apple Silicon. La page du Core X V2 de Razer indique « eGPUs not supported by M1 & later Mac devices ». Le Razer Core X d\'origine est sorti en 2018 pour les Mac Intel avec Thunderbolt 3. Un boîtier Razer sur un Mac Apple Silicon dépendrait du pilote non officiel TinyGPU, que Razer ne mentionne pas.' },
          { q: 'Puis-je ajouter une GPU externe à un iMac ?', a: 'Pas nativement sur les iMac Apple Silicon — mêmes limites que pour les MacBook. Les iMac Intel avec Thunderbolt 3 géraient les eGPU sous d\'anciennes versions de macOS. Pour les LLM locaux : exécuter Ollama sur une machine GPU séparée et s\'y connecter via le réseau local.' },
          { q: 'Puis-je utiliser une eGPU OCuLink avec un Mac ?', a: 'Non. Aucun Mac n\'a de port OCuLink. OCuLink est conçu pour les PC et mini PC ; pour un Mac, les options sont une eGPU Thunderbolt ou USB4 avec le pilote expérimental TinyGPU, ou un mini PC OCuLink servi en LAN.' },
          { q: 'Apple rétablira-t-il la prise en charge eGPU pour Apple Silicon ?', a: 'Peu probable. Les puces M d\'Apple intègrent GPU, CPU et mémoire dans un seul boîtier — le principe est la mémoire unifiée, pas l\'extensibilité — et Apple n\'a annoncé aucun projet de rétablir le calcul eGPU.' },
          { q: 'Puis-je utiliser un GPU NVIDIA pour l\'inférence et envoyer le résultat à mon MacBook ?', a: 'Oui — c\'est l\'approche recommandée. Exécutez Ollama sur une machine Windows ou Linux avec GPU NVIDIA, exposez-le sur votre réseau local (OLLAMA_HOST=0.0.0.0) et connectez-vous depuis le MacBook via Open WebUI, Cursor, Continue ou tout client compatible OpenAI. Le MacBook gère l\'interface ; la machine NVIDIA fait le calcul.' },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/fr/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/fr/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/fr/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/fr/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/fr/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/fr/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'Existe-t-il un moyen de faire fonctionner une eGPU avec un MacBook Pro M4 pour l\'IA ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui, avec des limites. Le pilote TinyGPU de Tiny Corp exécute du calcul sur des GPU AMD RDNA 3+ et NVIDIA Ampere+ via Thunderbolt ou USB4 sous macOS 13+. Il n\'est documenté que pour tinygrad (pas pour Ollama, llama.cpp ni MLX), n\'offre aucune sortie d\'affichage, et les cartes NVIDIA exigent Docker Desktop. Plugable a constaté peu d\'amélioration par rapport à la base sur un MacBook Pro M2. Pour une configuration stable : exécuter Ollama sur une machine GPU séparée et s\'y connecter via le réseau local (OLLAMA_HOST=0.0.0.0 sur le serveur).',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la meilleure eGPU pour un MacBook Pro 16 de base ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Aucune eGPU n\'est officiellement prise en charge sur un MacBook Pro Apple Silicon. Pour expérimenter TinyGPU, le minimum documenté est une carte AMD RDNA 3+ (Radeon RX 7000 ou plus récente) ou NVIDIA Ampere+ (RTX 30 ou plus récente) dans un boîtier Thunderbolt ou USB4 ; AMD évite l\'étape Docker. Au quotidien, un Mac avec plus de mémoire unifiée ou un GPU RTX dans un mini PC relié en LAN est le choix le plus fiable.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Le Razer Core fonctionne-t-il avec un MacBook Pro ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pas sur Apple Silicon. La page du Core X V2 de Razer indique « eGPUs not supported by M1 & later Mac devices ». Le Razer Core X d\'origine est sorti en 2018 pour les Mac Intel avec Thunderbolt 3. Un boîtier Razer sur un Mac Apple Silicon dépendrait du pilote non officiel TinyGPU, que Razer ne mentionne pas.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je ajouter une GPU externe à un iMac ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pas nativement sur les iMac Apple Silicon — mêmes limites que pour les MacBook. Les iMac Intel avec Thunderbolt 3 géraient les eGPU sous d\'anciennes versions de macOS. Pour les LLM locaux : exécuter Ollama sur une machine GPU séparée et s\'y connecter via le réseau local.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser une eGPU OCuLink avec un Mac ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non. Aucun Mac n\'a de port OCuLink. OCuLink est conçu pour les PC et mini PC ; pour un Mac, les options sont une eGPU Thunderbolt ou USB4 avec le pilote expérimental TinyGPU, ou un mini PC OCuLink servi en LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apple rétablira-t-il la prise en charge eGPU pour Apple Silicon ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Peu probable. Les puces M d\'Apple intègrent GPU, CPU et mémoire dans un seul boîtier — le principe est la mémoire unifiée, pas l\'extensibilité — et Apple n\'a annoncé aucun projet de rétablir le calcul eGPU.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser un GPU NVIDIA pour l\'inférence et envoyer le résultat à mon MacBook ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui — c\'est l\'approche recommandée. Exécutez Ollama sur une machine Windows ou Linux avec GPU NVIDIA, exposez-le sur votre réseau local (OLLAMA_HOST=0.0.0.0) et connectez-vous depuis le MacBook via Open WebUI, Cursor, Continue ou tout client compatible OpenAI. Le MacBook gère l\'interface ; la machine NVIDIA fait le calcul.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU pour MacBook et IA locale : ce qui marche en 2026', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/fr/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'fr' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-ja.webp',
    type: 'how-to',
    title: 'MacBook eGPUとローカルAI：2026年に動作するもの',
    seoTitle: 'MacBook eGPU ローカルLLM 2026—代替案と解説',
    metaDescription: 'Apple Silicon搭載MacBookでeGPUはネイティブ動作しません。2026年の選択肢：TinyGPU（tinygradのみ）、Mac mini M5 Pro、LAN経由のOCuLinkミニPC。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Apple Silicon搭載MacBook（M1〜M5）では、eGPUはネイティブに動作しません。macOSには外部GPU用ドライバがなく、RazerもCore X V2を「not supported by M1 & later Mac devices」としています。唯一の経路はTiny CorpのTinyGPUドライバ（Tiny Corpによれば、Appleが承認済み）で、ThunderboltまたはUSB4経由でAMD RDNA 3以降／NVIDIA Ampere以降のeGPUでAI計算を実行できますが、ドキュメントがあるのはtinygradのみで、Ollama・llama.cpp・MLXは対象外です。サポートされる構成としては、Mac mini M5 Proか、LAN経由で提供するOCuLinkミニPCを使います。**',
    quickAnswerTop: {
      question: 'MacBookでローカルLLM推論にeGPUを使えますか？',
      answer: 'ネイティブでは使えません。Apple SiliconのMac（M1〜M5）には外部GPU用のmacOSドライバがありません。2026年4月以降、Tiny CorpのTinyGPUドライバ（計算専用、映像出力なし）により、AMD RDNA 3以降とNVIDIA Ampere以降のGPUでThunderboltまたはUSB4経由のAIワークロードが可能になりましたが、ドキュメントがあるのはtinygradのみで、NVIDIAカードにはDocker Desktopも必要です。安定した構成にするなら、Mac mini M5 ProまたはOCuLinkミニPCでOllamaを動かし、LAN経由で接続してください。',
      bullets: [
        'Apple Silicon搭載MacBook（M1〜M5）：eGPUのネイティブ対応なし。RazerはCore X V2をM1以降のMacで非対応と記載',
        'TinyGPU（2026年4月1日発表）：計算専用、AMD RDNA 3以降またはNVIDIA Ampere以降、macOS 13以降、映像出力なし',
        'TinyGPUのドキュメントはtinygradのみ。Ollama・llama.cpp・MLXは対応として記載されていません',
        'NVIDIAカードはMacにDocker Desktopが必要。AMDカードは不要',
        'Tiny Corp自己申告でQwen 3.5 27Bが18.5 tok/s（Mac mini + RX 7900 XTX）。PlugableはM2 MacBook Proでベースラインからの改善は小さいと報告',
        'サポートされる代替：Mac mini M5 Pro（米国価格1,699ドルから、最大64GB、307GB/s）またはOCuLinkミニPC + RTX 3090（LAN経由）',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Apple SiliconのMac（M1〜M5）はeGPUをネイティブにサポートしません。接続したカードは認識されますが、処理は実行できません',
          'TinyGPU（Tiny Corp、2026年4月）はmacOS 13以降でThunderboltまたはUSB4経由のAMD／NVIDIA eGPU計算を追加します。計算専用で映像出力なし、ドキュメントはtinygradのみ',
          'TinyGPUのセットアップでNVIDIAカードにはDocker Desktopが必要。AMDカードは不要',
          'サポートされるMac構成：Mac mini M5 Pro（米国価格1,699ドルから、最大64GBユニファイドメモリ）',
          'GPU速度が必要なら：OCuLinkミニPC + RTX 3090をOllamaでLAN経由でMacBookに提供',
          'OCuLinkはPCIe 4.0 x4（約63Gbps）でx16スロットの4分の1ですが、モデルがVRAMに載れば十分です。OCuLinkポートを持つMacはありません',
        ],
      },
      mainContent: {
        title: 'Apple Silicon MacのeGPU 2026年：何が変わったか',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple SiliconのMacに外部GPUのネイティブ対応はありませんが、2026年4月以降、Tiny CorpのTinyGPUドライバによりThunderboltまたはUSB4経由でAMD・NVIDIAのeGPUでAI計算が可能になりました（ドキュメントはtinygradのみ）。',
          },
          {
            type: 'plain-terms',
            text: 'eGPUとは、Thunderbolt、USB4、OCuLinkで接続する筐体入りの外付けグラフィックスカードです。MシリーズチップのmacOSには対応ドライバがないため、接続したカードは認識されても処理は実行できません。TinyGPUはTiny CorpのmacOSアプリで、DriverKit拡張（Tiny CorpによればAppleが承認）をインストールしてカードでの計算を可能にします。ディスプレイ出力はなく、Metalも使いません。',
          },
        ],
        content: 'Plugableによれば、サードパーティ製ドライバがない場合、Apple SiliconのMacは外部GPUを認識しても使用できません。RazerのCore X V2のページには「eGPUs not supported by M1 & later Mac devices」とあります。2026年4月1日、Tiny CorpはAppleがAMDおよびNVIDIA向けTinyGPUドライバを承認したと発表しました。tinygradのドキュメントによると、TinyGPUにはmacOS 13.0以降、AMD RDNA 3以降またはNVIDIA Ampere以降のGPU、USB4またはThunderboltポートが必要で、NVIDIAのセットアップにはDocker Desktopも必要です。ドキュメントにあるのはtinygradのLLMランナーで、heiseによればAppleのMLXでは動作しません。Tiny CorpはMac miniとRadeon RX 7900 XTXでQwen 3.5 27Bが18.5 tok/sと報告していますが、これはメーカー報告の数値であり独立したベンチマークではありません。PlugableはM2 MacBook ProでRadeon 9070とGeForce RTX 5070をThunderbolt 5筐体でテストし、ベースラインからの改善は小さいとしています。',
        items: [
          '**Apple Silicon（M1〜M5）**：eGPUのネイティブ対応なし。接続したカードは認識されるが処理は実行できない。',
          '**TinyGPU（2026年4月1日発表）**：Tiny Corp製のサードパーティ製ドライバアプリ。ThunderboltまたはUSB4経由でAMD RDNA 3以降とNVIDIA Ampere以降に対応、macOS 13.0以降。',
          '**対象範囲**：計算専用。映像出力なし、Metalなし、ゲーム不可。ソフトウェア対応はtinygradのみ記載。',
          '**NVIDIAカード**：コンパイラのセットアップにDocker Desktopが必要。AMDカードはネイティブ動作。',
          '**Intel MacBook（2018〜2020年）**：古いmacOSではThunderbolt 3経由でeGPUが動作。これらのMacは販売終了。',
        ],
      },
      connections: {
        id: 'connections',
        title: '外部GPUの接続方式：OCuLink・Thunderbolt・USB4の比較',
        content: '**OCuLinkは外部GPUにコストあたり最も広い帯域を与えますが、PC限定です。OCuLinkポートを持つMacはありません。** Thunderbolt 4とUSB4はホットプラグ対応でノートPCでも使えますが、リンク速度は低めです。モデルがVRAMに載った後のトークン生成は主にGPU自身のメモリ帯域で決まり、リンクが影響するのは主にモデルの読み込みです。GPUを机に置いたままにするならOCuLinkポート付きミニPC（Minisforum UM890 ProやAOOSTAR GEM12+ Proなど）を、持ち歩くノートPCにだけThunderbolt筐体を選んでください。',
        columns: ['接続方式', '公称帯域', 'ホットプラグ', '主な用途'],
        rows: [
          {
            '接続方式': 'OCuLink 4i（PCIe 4.0 x4）',
            '公称帯域': '約63Gbps',
            'ホットプラグ': '不可（電源OFF）',
            '主な用途': 'ミニPC + GPUドック',
          },
          {
            '接続方式': 'Thunderbolt 4 / USB4 40G',
            '公称帯域': '40Gbps',
            'ホットプラグ': '可',
            '主な用途': 'ノートPC + 筐体',
          },
          {
            '接続方式': 'Thunderbolt 5',
            '公称帯域': '80Gbps（ブースト120Gbps）',
            'ホットプラグ': '可',
            '主な用途': '新しいPC・Mac',
          },
          {
            '接続方式': 'USB4 20G',
            '公称帯域': '20Gbps',
            'ホットプラグ': '可',
            '主な用途': '最も低い帯域',
          },
        ],
      },
      alternatives: {
        title: 'Mac上のGPU推論のための実際の代替案',
        productItems: [
          {
            title: 'Mac mini M5 Pro（最大64GB）——最良のmacOS選択肢',
            content: 'AppleのMac mini M5 Pro（2026年9月22日発売）は米国価格1,699ドルからで、最大64GBのユニファイドメモリ（307GB/s）を搭載します。トークン生成はメモリ帯域に制約され、約19〜20GBの32B Q4モデルは、この帯域での理論上限が約15 tok/sです。実測はこれより低くなります。別のGPUマシンなしで32Bクラスのモデルをメモリに載せたい場合に適します。ベースのMac mini M6（899ドルから、最大32GB、170GB/s）は7B〜14Bモデル向けです。',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro（Amazon.co.jp）', url: 'https://www.amazon.co.jp/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'OCuLinkミニPC + RTX 3090（最良のGPU／ポータブル構成）',
            content: 'OCuLinkポート付きミニPC（例：Minisforum UM890 Pro＝Ryzen 9 8945HS、2024年発売時のベアボーンは479ドルから。AOOSTAR GEM12+ Pro＝ベアボーン約359ドルで掲載）を、OCuLinkドック経由でデスクトップ用GPUに接続します。OCuLinkはホットスワップ不可なので、接続前にPCの電源を切ってください。コミュニティのllama.cppベンチマークでは、RTX 3090で8B Q4_K_Mモデルがおおよそ90〜95 tok/sと報告されていますが、情報源により差があり、コンテキスト長やビルドに依存します。ミニPCでOllamaを動かしLANで提供し、MacBookはクライアントのままにします。',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink（Amazon.co.jp）', url: 'https://www.amazon.co.jp/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro（Amazon.co.jp）', url: 'https://www.amazon.co.jp/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'TinyGPUドライバ + Apple Silicon MacのeGPU（実験的）',
            content: 'Tiny CorpのTinyGPUドライバは、macOS 13以降でThunderboltまたはUSB4経由のAMD RDNA 3以降／NVIDIA Ampere以降のeGPUでの計算を可能にします。ドキュメントがあるのはtinygradのみ（DEV=AMDまたはDEV=NV python3 -m tinygrad.llmで実行）で、NVIDIAカードにはDocker Desktopが必要です。PlugableはM2 MacBook Proでベースラインからの改善は小さいと報告しています。サードパーティ製ドライバでありAppleネイティブのMetal対応ではないため、macOSの更新に伴う互換性の変化が起こり得ます。日常用ではなく実験として扱ってください。',
            affiliateLinks: [
              { label: 'RTX 4090 eGPU（Amazon.co.jp、TinyGPU用）', url: 'https://www.amazon.co.jp/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'Windows／LinuxノートPCのThunderbolt eGPU（Macを使わない場合）',
            content: 'ThunderboltのあるWindowsまたはLinuxのx86ノートPCでは、eGPUはOllamaで動作します。リンクはネイティブのPCIeスロットより遅いものの、モデルがVRAMに載れば、トークン生成は主にGPUのメモリ帯域に依存するため、実際の低下はリンク差から想像するより小さくなります。Razer Core X V2（349.99ドル、Thunderbolt 5、電源別売）はWindows向けで、RazerのページにはM1以降のMacではeGPU非対応とあります。',
            affiliateLinks: [
              { label: 'Razer Core X V2 eGPU筐体（Amazon.co.jp）', url: 'https://www.amazon.co.jp/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X（初代）（Amazon.co.jp）', url: 'https://www.amazon.co.jp/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'M4 MacBook ProでeGPUをAIに使う方法はありますか？', a: '制限付きで可能です。Tiny CorpのTinyGPUドライバは、macOS 13以降でThunderboltまたはUSB4経由のAMD RDNA 3以降／NVIDIA Ampere以降のGPUで計算を実行します。ドキュメントがあるのはtinygradのみ（Ollama・llama.cpp・MLXは対象外）で、映像出力はなく、NVIDIAカードにはDocker Desktopが必要です。PlugableはM2 MacBook Proでベースラインからの改善は小さいと報告しています。安定した構成にするなら、別のGPUマシンでOllamaを動かしLAN経由で接続してください（サーバー側でOLLAMA_HOST=0.0.0.0）。' },
          { q: 'ベースモデルのMacBook Pro 16に最適なeGPUは？', a: 'Apple SiliconのMacBook ProでeGPUが公式サポートされるものはありません。TinyGPUを試す場合、ドキュメント上の最低条件は、ThunderboltまたはUSB4筐体に入れたAMD RDNA 3以降（Radeon RX 7000以降）またはNVIDIA Ampere以降（RTX 30以降）のカードです。AMDならDockerの手順が不要です。日常用途には、ユニファイドメモリの多いMacか、LAN接続したミニPCのRTX GPUのほうが確実です。' },
          { q: 'Razer CoreはMacBook Proで動きますか？', a: 'Apple Siliconでは動きません。RazerのCore X V2のページには「eGPUs not supported by M1 & later Mac devices」とあります。初代Razer Core Xは2018年にThunderbolt 3搭載のIntel Mac向けに発売されました。Apple SiliconのMacでRazer筐体を使うには、Razerが記載していない非公式のTinyGPUドライバに頼ることになります。' },
          { q: 'iMacに外付けGPUを追加できますか？', a: 'Apple SiliconのiMacではネイティブには追加できません。制限はMacBookと同じです。Thunderbolt 3搭載のIntel iMacは古いmacOSでeGPUをサポートしていました。ローカルLLMなら、別のGPUマシンでOllamaを動かしLAN経由で接続してください。' },
          { q: 'MacでOCuLink eGPUを使えますか？', a: '使えません。OCuLinkポートを持つMacはありません。OCuLinkはPCやミニPC向けです。Macでは、実験的なTinyGPUドライバを使うThunderboltまたはUSB4のeGPUか、LANで提供するOCuLinkミニPCが選択肢になります。' },
          { q: 'AppleはApple SiliconにeGPUサポートを復活させますか？', a: '可能性は低いです。AppleのMシリーズチップはGPU・CPU・メモリを1つのパッケージに統合しており、設計思想は拡張性ではなくユニファイドメモリです。AppleはeGPU計算サポートを復活させる計画を発表していません。' },
          { q: 'NVIDIA GPUで推論し、出力をMacBookに渡せますか？', a: 'はい。これが推奨の方法です。NVIDIA GPU搭載のWindowsまたはLinuxマシンでOllamaを動かし、LANに公開（OLLAMA_HOST=0.0.0.0）して、MacBookからOpen WebUI、Cursor、Continue、またはOpenAI互換クライアント経由で接続します。MacBookがUIを担当し、NVIDIAマシンが計算を担当します。' },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/ja/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/ja/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/ja/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/ja/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/ja/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/ja/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'M4 MacBook ProでeGPUをAIに使う方法はありますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '制限付きで可能です。Tiny CorpのTinyGPUドライバは、macOS 13以降でThunderboltまたはUSB4経由のAMD RDNA 3以降／NVIDIA Ampere以降のGPUで計算を実行します。ドキュメントがあるのはtinygradのみ（Ollama・llama.cpp・MLXは対象外）で、映像出力はなく、NVIDIAカードにはDocker Desktopが必要です。PlugableはM2 MacBook Proでベースラインからの改善は小さいと報告しています。安定した構成にするなら、別のGPUマシンでOllamaを動かしLAN経由で接続してください（サーバー側でOLLAMA_HOST=0.0.0.0）。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ベースモデルのMacBook Pro 16に最適なeGPUは？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apple SiliconのMacBook ProでeGPUが公式サポートされるものはありません。TinyGPUを試す場合、ドキュメント上の最低条件は、ThunderboltまたはUSB4筐体に入れたAMD RDNA 3以降（Radeon RX 7000以降）またはNVIDIA Ampere以降（RTX 30以降）のカードです。AMDならDockerの手順が不要です。日常用途には、ユニファイドメモリの多いMacか、LAN接続したミニPCのRTX GPUのほうが確実です。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Razer CoreはMacBook Proで動きますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apple Siliconでは動きません。RazerのCore X V2のページには「eGPUs not supported by M1 & later Mac devices」とあります。初代Razer Core Xは2018年にThunderbolt 3搭載のIntel Mac向けに発売されました。Apple SiliconのMacでRazer筐体を使うには、Razerが記載していない非公式のTinyGPUドライバに頼ることになります。',
          },
        },
        {
          '@type': 'Question',
          'name': 'iMacに外付けGPUを追加できますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apple SiliconのiMacではネイティブには追加できません。制限はMacBookと同じです。Thunderbolt 3搭載のIntel iMacは古いmacOSでeGPUをサポートしていました。ローカルLLMなら、別のGPUマシンでOllamaを動かしLAN経由で接続してください。',
          },
        },
        {
          '@type': 'Question',
          'name': 'MacでOCuLink eGPUを使えますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '使えません。OCuLinkポートを持つMacはありません。OCuLinkはPCやミニPC向けです。Macでは、実験的なTinyGPUドライバを使うThunderboltまたはUSB4のeGPUか、LANで提供するOCuLinkミニPCが選択肢になります。',
          },
        },
        {
          '@type': 'Question',
          'name': 'AppleはApple SiliconにeGPUサポートを復活させますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可能性は低いです。AppleのMシリーズチップはGPU・CPU・メモリを1つのパッケージに統合しており、設計思想は拡張性ではなくユニファイドメモリです。AppleはeGPU計算サポートを復活させる計画を発表していません。',
          },
        },
        {
          '@type': 'Question',
          'name': 'NVIDIA GPUで推論し、出力をMacBookに渡せますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'はい。これが推奨の方法です。NVIDIA GPU搭載のWindowsまたはLinuxマシンでOllamaを動かし、LANに公開（OLLAMA_HOST=0.0.0.0）して、MacBookからOpen WebUI、Cursor、Continue、またはOpenAI互換クライアント経由で接続します。MacBookがUIを担当し、NVIDIAマシンが計算を担当します。',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'MacBook eGPUとローカルAI：2026年に動作するもの', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/ja/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'ja' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-zh.webp',
    type: 'how-to',
    title: 'MacBook eGPU与本地AI：2026年什么有效',
    seoTitle: 'MacBook eGPU本地LLM 2026——替代方案详解',
    metaDescription: 'Apple Silicon MacBook不能原生使用eGPU。2026年可选：TinyGPU（仅tinygrad）、Mac mini M5 Pro，或通过局域网使用OCuLink迷你PC。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**搭载Apple Silicon的MacBook（M1–M5）无法原生使用eGPU：macOS没有外置GPU驱动，Razer也注明Core X V2“not supported by M1 & later Mac devices”。唯一途径是Tiny Corp的TinyGPU驱动（Tiny Corp称已获Apple批准），可通过Thunderbolt或USB4让AMD RDNA 3+或NVIDIA Ampere+ eGPU运行AI计算，但其文档仅涵盖tinygrad，不包括Ollama、llama.cpp或MLX。要获得受支持的方案，请使用Mac mini M5 Pro，或通过局域网提供服务的OCuLink迷你PC。**',
    quickAnswerTop: {
      question: '我可以在MacBook上用eGPU做本地LLM推理吗？',
      answer: '不能原生使用。Apple Silicon Mac（M1–M5）没有适用于外置GPU的macOS驱动。自2026年4月起，Tiny Corp的TinyGPU驱动（仅计算，无显示输出）让AMD RDNA 3+和NVIDIA Ampere+ GPU可通过Thunderbolt或USB4运行AI负载，但其文档仅涵盖tinygrad，NVIDIA显卡还需要Docker Desktop。想要稳定方案，请在Mac mini M5 Pro或OCuLink迷你PC上运行Ollama，再通过局域网连接。',
      bullets: [
        'Apple Silicon MacBook（M1–M5）：无原生eGPU支持；Razer注明Core X V2不支持M1及更新的Mac',
        'TinyGPU（2026年4月1日发布）：仅计算，AMD RDNA 3+或NVIDIA Ampere+，macOS 13+，无显示输出',
        'TinyGPU仅有tinygrad文档；Ollama、llama.cpp和MLX未被列为受支持',
        'NVIDIA显卡需要在Mac上安装Docker Desktop；AMD显卡不需要',
        'Tiny Corp自行报告Qwen 3.5 27B为18.5 tok/s（Mac mini + RX 7900 XTX）；Plugable在M2 MacBook Pro上发现相比基线提升很小',
        '受支持的替代方案：Mac mini M5 Pro（美国售价1,699美元起，最高64GB，307GB/s）或通过局域网使用的OCuLink迷你PC + RTX 3090',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '没有任何Apple Silicon Mac（M1–M5）原生支持eGPU；接入的显卡能被识别，但无法执行任务',
          'TinyGPU（Tiny Corp，2026年4月）在macOS 13+上通过Thunderbolt或USB4增加了AMD和NVIDIA eGPU计算——仅计算、无显示输出、仅有tinygrad文档',
          '设置TinyGPU时NVIDIA显卡需要Docker Desktop；AMD显卡不需要',
          '受支持的Mac方案：Mac mini M5 Pro（美国售价1,699美元起，最高64GB统一内存）',
          '追求GPU速度：OCuLink迷你PC + RTX 3090，用Ollama通过局域网提供给MacBook',
          'OCuLink是PCIe 4.0 x4（约63 Gbps）——约为x16插槽的四分之一，模型装入显存后已足够；没有任何Mac带OCuLink接口',
        ],
      },
      mainContent: {
        title: '2026年Apple Silicon Mac上的eGPU：发生了什么变化',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon Mac没有原生外置GPU支持，但自2026年4月起，Tiny Corp的TinyGPU驱动可通过Thunderbolt或USB4在AMD和NVIDIA eGPU上运行AI计算——仅有tinygrad文档。',
          },
          {
            type: 'plain-terms',
            text: 'eGPU是装在外壳中、通过Thunderbolt、USB4或OCuLink连接的外置显卡。M系列芯片上的macOS没有对应驱动，因此接入的显卡能被识别，却无法执行任务。TinyGPU是Tiny Corp的macOS应用，会安装一个DriverKit扩展（Tiny Corp称已获Apple批准）以启用显卡计算。它不驱动显示器，也不使用Metal。',
          },
        ],
        content: '据Plugable称，没有第三方驱动时，Apple Silicon Mac能检测到外置GPU，但无法使用。Razer的Core X V2页面注明“eGPUs not supported by M1 & later Mac devices”。2026年4月1日，Tiny Corp宣布Apple已批准其面向AMD和NVIDIA的TinyGPU驱动。根据tinygrad文档，TinyGPU需要macOS 13.0或更高版本、AMD RDNA 3+或NVIDIA Ampere+ GPU以及USB4或Thunderbolt接口；NVIDIA的设置还需要Docker Desktop。文档记录的负载是tinygrad的LLM运行器，heise报道其不适用于Apple的MLX。Tiny Corp报告在配备Radeon RX 7900 XTX的Mac mini上Qwen 3.5 27B达到18.5 tok/s——这是厂商自报数据，不是独立基准测试。Plugable在M2 MacBook Pro上用Thunderbolt 5外壳测试了Radeon 9070和GeForce RTX 5070，发现相比基线提升很小。',
        items: [
          '**Apple Silicon（M1–M5）**：无原生eGPU支持——接入的显卡能被识别，但无法执行任务。',
          '**TinyGPU（2026年4月1日发布）**：Tiny Corp的第三方驱动应用；通过Thunderbolt或USB4支持AMD RDNA 3+和NVIDIA Ampere+；macOS 13.0+。',
          '**适用范围**：仅计算——无显示输出、无Metal、不能玩游戏；软件支持仅有tinygrad文档。',
          '**NVIDIA显卡**：编译器设置需要Docker Desktop；AMD显卡可原生运行。',
          '**Intel MacBook（2018–2020）**：在较旧的macOS上，eGPU可通过Thunderbolt 3工作；这些Mac已停产。',
        ],
      },
      connections: {
        id: 'connections',
        title: '外置GPU的连接方式：OCuLink、Thunderbolt与USB4对比',
        content: '**OCuLink能让外置GPU获得单位成本下最高的带宽，但仅限PC——没有任何Mac带OCuLink接口。** Thunderbolt 4和USB4支持热插拔，可用于笔记本，但链路速度较低。模型装入显存后，生成token主要取决于GPU自身的显存带宽，链路主要影响模型加载。如果GPU常驻桌面，选带OCuLink接口的迷你PC（例如Minisforum UM890 Pro或AOOSTAR GEM12+ Pro）；只有随身携带的笔记本才选Thunderbolt外壳。',
        columns: ['连接方式', '标称带宽', '热插拔', '典型用途'],
        rows: [
          {
            '连接方式': 'OCuLink 4i（PCIe 4.0 x4）',
            '标称带宽': '约63 Gbps',
            '热插拔': '否（先关机）',
            '典型用途': '迷你PC + GPU扩展坞',
          },
          {
            '连接方式': 'Thunderbolt 4 / USB4 40G',
            '标称带宽': '40 Gbps',
            '热插拔': '是',
            '典型用途': '笔记本 + 外壳',
          },
          {
            '连接方式': 'Thunderbolt 5',
            '标称带宽': '80 Gbps（增强120 Gbps）',
            '热插拔': '是',
            '典型用途': '较新的PC和Mac',
          },
          {
            '连接方式': 'USB4 20G',
            '标称带宽': '20 Gbps',
            '热插拔': '是',
            '典型用途': '带宽最低的选项',
          },
        ],
      },
      alternatives: {
        title: 'Mac上GPU推理的真实替代方案',
        productItems: [
          {
            title: 'Mac mini M5 Pro（最高64GB）——最佳macOS选择',
            content: 'Apple的Mac mini M5 Pro（2026年9月22日起发售）美国售价1,699美元起，最高提供64GB统一内存，带宽307GB/s。token生成受内存带宽限制：约19–20GB的32B Q4模型在该带宽下理论上限约为15 tok/s，实际速度更低。适合需要在不借助独立GPU机器的情况下把32B级模型装进内存的场景。基础款Mac mini M6（899美元起，最高32GB，170GB/s）适合7B–14B模型。',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro（亚马逊）', url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'OCuLink迷你PC + RTX 3090（最佳GPU/便携组合）',
            content: '带OCuLink接口的迷你PC——例如Minisforum UM890 Pro（Ryzen 9 8945HS，2024年上市时准系统479美元起）或AOOSTAR GEM12+ Pro（准系统标价约359美元）——通过OCuLink扩展坞连接台式GPU。OCuLink不支持热插拔：连接前请先关机。社区llama.cpp基准测试报告RTX 3090上8B Q4_K_M模型约为90–95 tok/s；不同来源之间有出入，结果取决于上下文长度和构建版本。在迷你PC上运行Ollama并通过局域网提供服务；MacBook继续作为客户端。',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink（亚马逊）', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro（亚马逊）', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'TinyGPU驱动 + Apple Silicon Mac上的eGPU（实验性）',
            content: 'Tiny Corp的TinyGPU驱动可在macOS 13+上通过Thunderbolt或USB4启用AMD RDNA 3+和NVIDIA Ampere+ eGPU的计算。它仅有tinygrad文档（运行DEV=AMD或DEV=NV python3 -m tinygrad.llm），NVIDIA显卡需要Docker Desktop，Plugable在M2 MacBook Pro上发现相比基线提升很小。这是第三方驱动，不是Apple原生Metal支持；随着macOS演进，预计会出现兼容性变化。请把它当作实验，而不是日常方案。',
            affiliateLinks: [
              { label: 'RTX 4090 eGPU（亚马逊，用于TinyGPU）', url: 'https://www.amazon.com/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'Windows/Linux笔记本上的Thunderbolt eGPU（不用Mac时）',
            content: '在带Thunderbolt 4或5的x86 Windows或Linux笔记本上，eGPU可配合Ollama使用。链路比原生PCIe插槽慢，但模型装入显存后，token生成主要取决于GPU自身的显存带宽，因此实际损失比链路差距所暗示的要小。Razer Core X V2（349.99美元，Thunderbolt 5，不含电源）为Windows设计；Razer页面注明M1及更新的Mac不支持eGPU。',
            affiliateLinks: [
              { label: 'Razer Core X V2 eGPU外壳（亚马逊）', url: 'https://www.amazon.com/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X（初代）（亚马逊）', url: 'https://www.amazon.com/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '有没有办法让eGPU在M4 MacBook Pro上用于AI？', a: '有，但有限制。Tiny Corp的TinyGPU驱动可在macOS 13+上通过Thunderbolt或USB4在AMD RDNA 3+和NVIDIA Ampere+ GPU上运行计算。它仅有tinygrad文档（不含Ollama、llama.cpp或MLX），无显示输出，NVIDIA显卡需要Docker Desktop。Plugable在M2 MacBook Pro上发现相比基线提升很小。想要稳定方案：在独立的GPU机器上运行Ollama，通过局域网连接（服务器端设置OLLAMA_HOST=0.0.0.0）。' },
          { q: '基础款MacBook Pro 16最适合哪款eGPU？', a: '任何Apple Silicon MacBook Pro都没有官方支持的eGPU。若要试用TinyGPU，文档给出的最低要求是装在Thunderbolt或USB4外壳中的AMD RDNA 3+（Radeon RX 7000或更新）或NVIDIA Ampere+（RTX 30或更新）显卡；用AMD可省去Docker步骤。日常使用的话，统一内存更大的Mac，或局域网连接的迷你PC中的RTX GPU更可靠。' },
          { q: 'Razer Core能用于MacBook Pro吗？', a: '在Apple Silicon上不能。Razer的Core X V2页面注明“eGPUs not supported by M1 & later Mac devices”。初代Razer Core X于2018年面向配备Thunderbolt 3的Intel Mac发布。在Apple Silicon Mac上使用Razer外壳需要依赖非官方的TinyGPU驱动，而Razer并未列出该驱动。' },
          { q: '我能给iMac添加外置GPU吗？', a: 'Apple Silicon iMac上无法原生添加——限制与MacBook相同。配备Thunderbolt 3的Intel iMac在较旧的macOS版本上支持eGPU。对本地LLM而言：在独立的GPU机器上运行Ollama，再通过局域网连接。' },
          { q: 'OCuLink eGPU能用在Mac上吗？', a: '不能。没有任何Mac带OCuLink接口。OCuLink是为PC和迷你PC设计的；对Mac来说，可选方案是搭配实验性TinyGPU驱动的Thunderbolt或USB4 eGPU，或通过局域网提供服务的OCuLink迷你PC。' },
          { q: 'Apple会为Apple Silicon恢复eGPU支持吗？', a: '不太可能。Apple的M系列芯片把GPU、CPU和内存集成在一个封装中——设计理念是统一内存，而不是可扩展性——Apple也没有宣布恢复eGPU计算支持的计划。' },
          { q: '我能用NVIDIA GPU做推理，再把输出传给MacBook吗？', a: '可以——这是推荐做法。在带NVIDIA GPU的Windows或Linux机器上运行Ollama，在局域网中开放（OLLAMA_HOST=0.0.0.0），然后从MacBook通过Open WebUI、Cursor、Continue或任何兼容OpenAI的客户端连接。MacBook负责界面，NVIDIA机器负责计算。' },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/zh/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/zh/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/zh/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/zh/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/zh/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/zh/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': '有没有办法让eGPU在M4 MacBook Pro上用于AI？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '有，但有限制。Tiny Corp的TinyGPU驱动可在macOS 13+上通过Thunderbolt或USB4在AMD RDNA 3+和NVIDIA Ampere+ GPU上运行计算。它仅有tinygrad文档（不含Ollama、llama.cpp或MLX），无显示输出，NVIDIA显卡需要Docker Desktop。Plugable在M2 MacBook Pro上发现相比基线提升很小。想要稳定方案：在独立的GPU机器上运行Ollama，通过局域网连接（服务器端设置OLLAMA_HOST=0.0.0.0）。',
          },
        },
        {
          '@type': 'Question',
          'name': '基础款MacBook Pro 16最适合哪款eGPU？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '任何Apple Silicon MacBook Pro都没有官方支持的eGPU。若要试用TinyGPU，文档给出的最低要求是装在Thunderbolt或USB4外壳中的AMD RDNA 3+（Radeon RX 7000或更新）或NVIDIA Ampere+（RTX 30或更新）显卡；用AMD可省去Docker步骤。日常使用的话，统一内存更大的Mac，或局域网连接的迷你PC中的RTX GPU更可靠。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Razer Core能用于MacBook Pro吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '在Apple Silicon上不能。Razer的Core X V2页面注明“eGPUs not supported by M1 & later Mac devices”。初代Razer Core X于2018年面向配备Thunderbolt 3的Intel Mac发布。在Apple Silicon Mac上使用Razer外壳需要依赖非官方的TinyGPU驱动，而Razer并未列出该驱动。',
          },
        },
        {
          '@type': 'Question',
          'name': '我能给iMac添加外置GPU吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apple Silicon iMac上无法原生添加——限制与MacBook相同。配备Thunderbolt 3的Intel iMac在较旧的macOS版本上支持eGPU。对本地LLM而言：在独立的GPU机器上运行Ollama，再通过局域网连接。',
          },
        },
        {
          '@type': 'Question',
          'name': 'OCuLink eGPU能用在Mac上吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '不能。没有任何Mac带OCuLink接口。OCuLink是为PC和迷你PC设计的；对Mac来说，可选方案是搭配实验性TinyGPU驱动的Thunderbolt或USB4 eGPU，或通过局域网提供服务的OCuLink迷你PC。',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apple会为Apple Silicon恢复eGPU支持吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '不太可能。Apple的M系列芯片把GPU、CPU和内存集成在一个封装中——设计理念是统一内存，而不是可扩展性——Apple也没有宣布恢复eGPU计算支持的计划。',
          },
        },
        {
          '@type': 'Question',
          'name': '我能用NVIDIA GPU做推理，再把输出传给MacBook吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可以——这是推荐做法。在带NVIDIA GPU的Windows或Linux机器上运行Ollama，在局域网中开放（OLLAMA_HOST=0.0.0.0），然后从MacBook通过Open WebUI、Cursor、Continue或任何兼容OpenAI的客户端连接。MacBook负责界面，NVIDIA机器负责计算。',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'MacBook eGPU与本地AI：2026年什么有效', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/zh/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'zh' },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-es.webp',
    type: 'how-to',
    title: 'eGPU para MacBook e IA local: qué funciona en 2026',
    seoTitle: 'eGPU MacBook IA local 2026 — Alternativas',
    metaDescription: 'Ninguna eGPU funciona de forma nativa en un MacBook Apple Silicon. Opciones 2026: TinyGPU (solo tinygrad), Mac mini M5 Pro o mini PC OCuLink por LAN.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Ninguna eGPU funciona de forma nativa en un MacBook Apple Silicon (M1–M5): macOS no tiene controlador para GPU externas, y Razer indica que su Core X V2 es «not supported by M1 & later Mac devices». La única vía es el controlador TinyGPU de Tiny Corp, que según Tiny Corp Apple aprobó: ejecuta cómputo de IA en eGPU AMD RDNA 3+ o NVIDIA Ampere+ por Thunderbolt o USB4, pero su documentación solo cubre tinygrad — no Ollama, llama.cpp ni MLX. Para una configuración compatible: un Mac mini M5 Pro o un mini PC OCuLink servido por tu red local.**',
    quickAnswerTop: {
      question: '¿Puedo usar una eGPU con un MacBook para inferencia local de LLM?',
      answer: 'No de forma nativa. Los Mac Apple Silicon (M1–M5) no tienen controlador de macOS para GPU externas. Desde abril de 2026, el controlador TinyGPU de Tiny Corp (solo cómputo, sin salida de vídeo) permite que GPU AMD RDNA 3+ y NVIDIA Ampere+ ejecuten cargas de IA por Thunderbolt o USB4, pero su documentación solo cubre tinygrad, y las tarjetas NVIDIA además requieren Docker Desktop. Para una configuración estable: ejecuta Ollama en un Mac mini M5 Pro o un mini PC OCuLink y conéctate por LAN.',
      bullets: [
        'MacBook Apple Silicon (M1–M5): sin compatibilidad nativa con eGPU; Razer indica que su Core X V2 no es compatible con Mac M1 y posteriores',
        'TinyGPU (anunciado el 1 de abril de 2026): solo cómputo, AMD RDNA 3+ o NVIDIA Ampere+, macOS 13+, sin salida de vídeo',
        'TinyGPU solo está documentado para tinygrad; Ollama, llama.cpp y MLX no figuran como compatibles',
        'Las tarjetas NVIDIA necesitan Docker Desktop en el Mac; las AMD funcionan sin él',
        'Tiny Corp informa por su cuenta de 18,5 tok/s con Qwen 3.5 27B (Mac mini + RX 7900 XTX); Plugable vio poca mejora sobre la base en un MacBook Pro M2',
        'Alternativa compatible: Mac mini M5 Pro (desde 1699 $, precio EE. UU., hasta 64 GB, 307 GB/s) o mini PC OCuLink + RTX 3090 por LAN',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Ningún Mac Apple Silicon (M1–M5) admite una eGPU de forma nativa; una tarjeta conectada se detecta pero no puede ejecutar trabajo',
          'TinyGPU (Tiny Corp, abril de 2026) añade cómputo eGPU AMD y NVIDIA desde macOS 13 por Thunderbolt o USB4 — solo cómputo, sin vídeo, documentado solo para tinygrad',
          'Las tarjetas NVIDIA necesitan Docker Desktop para configurar TinyGPU; las AMD no',
          'Para una configuración Mac compatible: Mac mini M5 Pro (desde 1699 $, precio EE. UU., hasta 64 GB de memoria unificada)',
          'Para velocidad de GPU: mini PC OCuLink + RTX 3090, servido al MacBook por LAN con Ollama',
          'OCuLink es PCIe 4.0 x4 (unos 63 Gbps) — un cuarto de una ranura x16, suficiente cuando el modelo cabe en VRAM; ningún Mac tiene puerto OCuLink',
        ],
      },
      mainContent: {
        title: 'eGPU en Mac Apple Silicon en 2026: qué ha cambiado',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los Mac Apple Silicon no tienen compatibilidad nativa con GPU externas, pero desde abril de 2026 el controlador TinyGPU de Tiny Corp puede ejecutar cómputo de IA en eGPU AMD y NVIDIA por Thunderbolt o USB4 — documentado solo para tinygrad.',
          },
          {
            type: 'plain-terms',
            text: 'Una eGPU es una tarjeta gráfica externa en una carcasa conectada por Thunderbolt, USB4 u OCuLink. macOS en chips M no tiene controlador para ella, así que una tarjeta conectada se detecta pero no puede ejecutar trabajo. TinyGPU es una app de macOS de Tiny Corp que instala una extensión DriverKit (que Tiny Corp dice aprobada por Apple) para habilitar el cómputo en la tarjeta. No controla pantallas ni usa Metal.',
          },
        ],
        content: 'Sin un controlador de terceros, un Mac Apple Silicon detecta una GPU externa pero no puede usarla, según Plugable. La página del Core X V2 de Razer indica «eGPUs not supported by M1 & later Mac devices». El 1 de abril de 2026, Tiny Corp anunció que Apple había aprobado su controlador TinyGPU para AMD y NVIDIA. Según la documentación de tinygrad, TinyGPU requiere macOS 13.0 o posterior, una GPU AMD RDNA 3+ o NVIDIA Ampere+ y un puerto USB4 o Thunderbolt; la configuración NVIDIA requiere además Docker Desktop. La carga documentada es el ejecutor de LLM de tinygrad, y según heise no funciona con MLX de Apple. Tiny Corp informó de 18,5 tok/s para Qwen 3.5 27B en un Mac mini con una Radeon RX 7900 XTX — un dato del fabricante, no un benchmark independiente. Plugable probó una Radeon 9070 y una GeForce RTX 5070 en una carcasa Thunderbolt 5 con un MacBook Pro M2 y vio poca mejora sobre la base.',
        items: [
          '**Apple Silicon (M1–M5)**: sin compatibilidad nativa con eGPU — una tarjeta conectada se detecta pero no puede ejecutar trabajo.',
          '**TinyGPU (anunciado el 1 de abril de 2026)**: app de controlador de terceros de Tiny Corp; AMD RDNA 3+ y NVIDIA Ampere+ por Thunderbolt o USB4; macOS 13.0+.',
          '**Alcance**: solo cómputo — sin salida de vídeo, sin Metal, sin juegos; compatibilidad de software documentada solo para tinygrad.',
          '**Tarjetas NVIDIA**: la configuración del compilador requiere Docker Desktop; las AMD funcionan de forma nativa.',
          '**MacBook Intel (2018–2020)**: la eGPU funcionaba por Thunderbolt 3 en versiones antiguas de macOS; estos Mac están descontinuados.',
        ],
      },
      connections: {
        id: 'connections',
        title: 'OCuLink, Thunderbolt y USB4 para una GPU externa: comparación',
        content: '**OCuLink da a una GPU externa el mayor ancho de banda por euro, pero solo en PC — ningún Mac tiene puerto OCuLink.** Thunderbolt 4 y USB4 se conectan en caliente y funcionan en portátiles, con menor velocidad de enlace. Cuando el modelo está en VRAM, la generación de tokens depende sobre todo del ancho de banda de memoria de la GPU; el enlace afecta sobre todo a la carga del modelo. Elige un mini PC con puerto OCuLink (por ejemplo Minisforum UM890 Pro o AOOSTAR GEM12+ Pro) si la GPU se queda en el escritorio; una carcasa Thunderbolt solo para un portátil que se lleva encima.',
        columns: ['Enlace', 'Ancho de banda nominal', 'Conexión en caliente', 'Uso típico'],
        rows: [
          {
            'Enlace': 'OCuLink 4i (PCIe 4.0 x4)',
            'Ancho de banda nominal': '~63 Gbps',
            'Conexión en caliente': 'No (apagar antes)',
            'Uso típico': 'Mini PC + dock de GPU',
          },
          {
            'Enlace': 'Thunderbolt 4 / USB4 40G',
            'Ancho de banda nominal': '40 Gbps',
            'Conexión en caliente': 'Sí',
            'Uso típico': 'Portátil + carcasa',
          },
          {
            'Enlace': 'Thunderbolt 5',
            'Ancho de banda nominal': '80 Gbps (120 Gbps en boost)',
            'Conexión en caliente': 'Sí',
            'Uso típico': 'PC y Mac recientes',
          },
          {
            'Enlace': 'USB4 20G',
            'Ancho de banda nominal': '20 Gbps',
            'Conexión en caliente': 'Sí',
            'Uso típico': 'Menor ancho de banda',
          },
        ],
      },
      alternatives: {
        title: 'Alternativas reales: qué hacer en su lugar',
        productItems: [
          {
            title: 'Mac mini M5 Pro (hasta 64 GB) — Mejor opción macOS',
            content: 'El Mac mini con M5 Pro de Apple (disponible desde el 22 de septiembre de 2026) parte de 1699 $ (precio EE. UU.) y ofrece hasta 64 GB de memoria unificada a 307 GB/s. La generación de tokens está limitada por el ancho de banda de memoria: un modelo 32B Q4 de unos 19–20 GB tiene un techo teórico cercano a 15 tok/s con ese ancho de banda; las velocidades reales son menores. Elígelo para modelos de clase 32B que deban caber en memoria sin una máquina GPU aparte. El Mac mini M6 base (desde 899 $, hasta 32 GB, 170 GB/s) sirve para modelos 7B–14B.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro en Amazon', url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'Mini PC OCuLink + RTX 3090 (Mejor combo GPU/portátil)',
            content: 'Un mini PC con puerto OCuLink — como el Minisforum UM890 Pro (Ryzen 9 8945HS, barebone desde 479 $ en su lanzamiento de 2024) o el AOOSTAR GEM12+ Pro (barebone listado en torno a 359 $) — se conecta a una GPU de sobremesa mediante un dock OCuLink. OCuLink no admite conexión en caliente: apaga el PC antes de conectar. Benchmarks de la comunidad con llama.cpp indican aproximadamente 90–95 tok/s para un modelo 8B Q4_K_M en una RTX 3090; las fuentes discrepan y los resultados dependen de la longitud de contexto y la compilación. Ejecuta Ollama en el mini PC y sírvelo por LAN; el MacBook sigue siendo el cliente.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink en Amazon', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro en Amazon', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'Controlador TinyGPU + eGPU en Mac Apple Silicon (experimental)',
            content: 'El controlador TinyGPU de Tiny Corp habilita cómputo en eGPU AMD RDNA 3+ y NVIDIA Ampere+ por Thunderbolt o USB4 en macOS 13+. Solo está documentado para tinygrad (se ejecuta con DEV=AMD o DEV=NV python3 -m tinygrad.llm), las tarjetas NVIDIA necesitan Docker Desktop y Plugable vio poca mejora sobre la base en un MacBook Pro M2. Es un controlador de terceros, no compatibilidad nativa con Metal; espera cambios de compatibilidad según evolucione macOS. Trátalo como un experimento, no como una configuración diaria.',
            affiliateLinks: [
              { label: 'eGPU RTX 4090 en Amazon (para TinyGPU)', url: 'https://www.amazon.com/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'eGPU Thunderbolt en portátil Windows/Linux (si no usas Mac)',
            content: 'En un portátil x86 con Windows o Linux y Thunderbolt 4 o 5, una eGPU funciona con Ollama. El enlace es más lento que una ranura PCIe nativa, pero cuando el modelo está en VRAM, la generación de tokens depende sobre todo del ancho de banda de memoria de la GPU; las pérdidas reales son menores de lo que sugiere la diferencia del enlace. El Razer Core X V2 (349,99 $, Thunderbolt 5, sin fuente de alimentación) está pensado para Windows; la página de Razer indica que las eGPU no son compatibles con Mac M1 y posteriores.',
            affiliateLinks: [
              { label: 'Carcasa eGPU Razer Core X V2 en Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X (original) en Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '¿Hay alguna forma de hacer funcionar una eGPU con un MacBook Pro M4 para IA?', a: 'Sí, con límites. El controlador TinyGPU de Tiny Corp ejecuta cómputo en GPU AMD RDNA 3+ y NVIDIA Ampere+ por Thunderbolt o USB4 en macOS 13+. Solo está documentado para tinygrad (no para Ollama, llama.cpp ni MLX), no da salida de vídeo y las tarjetas NVIDIA necesitan Docker Desktop. Plugable vio poca mejora sobre la base en un MacBook Pro M2. Para una configuración estable: ejecuta Ollama en una máquina GPU aparte y conéctate por LAN (OLLAMA_HOST=0.0.0.0 en el servidor).' },
          { q: '¿Cuál es la mejor eGPU para un MacBook Pro 16 básico?', a: 'Ninguna eGPU es oficialmente compatible con un MacBook Pro Apple Silicon. Para experimentar con TinyGPU, el mínimo documentado es una tarjeta AMD RDNA 3+ (Radeon RX 7000 o posterior) o NVIDIA Ampere+ (RTX 30 o posterior) en una carcasa Thunderbolt o USB4; AMD evita el paso de Docker. Para uso diario, un Mac con más memoria unificada o una GPU RTX en un mini PC conectado por LAN es la opción más fiable.' },
          { q: '¿Funciona el Razer Core con un MacBook Pro?', a: 'No en Apple Silicon. La página del Core X V2 de Razer indica «eGPUs not supported by M1 & later Mac devices». El Razer Core X original salió en 2018 para Mac Intel con Thunderbolt 3. Una carcasa Razer en un Mac Apple Silicon dependería del controlador no oficial TinyGPU, que Razer no menciona.' },
          { q: '¿Puedo añadir una GPU externa a un iMac?', a: 'No de forma nativa en los iMac Apple Silicon — los límites son los mismos que en los MacBook. Los iMac Intel con Thunderbolt 3 admitían eGPU en versiones antiguas de macOS. Para LLM locales: ejecuta Ollama en una máquina GPU aparte y conéctate por LAN.' },
          { q: '¿Puedo usar una eGPU OCuLink con un Mac?', a: 'No. Ningún Mac tiene puerto OCuLink. OCuLink está pensado para PC y mini PC; para un Mac, las opciones son una eGPU Thunderbolt o USB4 con el controlador experimental TinyGPU, o un mini PC OCuLink servido por LAN.' },
          { q: '¿Volverá Apple a admitir eGPU en Apple Silicon?', a: 'Poco probable. Los chips M de Apple integran GPU, CPU y memoria en un solo paquete — el diseño es memoria unificada, no ampliabilidad — y Apple no ha anunciado planes para restaurar el cómputo eGPU.' },
          { q: '¿Puedo usar una GPU NVIDIA para la inferencia y enviar el resultado a mi MacBook?', a: 'Sí — es el enfoque recomendado. Ejecuta Ollama en una máquina Windows o Linux con GPU NVIDIA, expónlo en tu LAN (OLLAMA_HOST=0.0.0.0) y conéctate desde el MacBook con Open WebUI, Cursor, Continue o cualquier cliente compatible con OpenAI. El MacBook gestiona la interfaz; la máquina NVIDIA hace el cálculo.' },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/es/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/es/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/es/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/es/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/es/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/es/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': '¿Hay alguna forma de hacer funcionar una eGPU con un MacBook Pro M4 para IA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí, con límites. El controlador TinyGPU de Tiny Corp ejecuta cómputo en GPU AMD RDNA 3+ y NVIDIA Ampere+ por Thunderbolt o USB4 en macOS 13+. Solo está documentado para tinygrad (no para Ollama, llama.cpp ni MLX), no da salida de vídeo y las tarjetas NVIDIA necesitan Docker Desktop. Plugable vio poca mejora sobre la base en un MacBook Pro M2. Para una configuración estable: ejecuta Ollama en una máquina GPU aparte y conéctate por LAN (OLLAMA_HOST=0.0.0.0 en el servidor).',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cuál es la mejor eGPU para un MacBook Pro 16 básico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ninguna eGPU es oficialmente compatible con un MacBook Pro Apple Silicon. Para experimentar con TinyGPU, el mínimo documentado es una tarjeta AMD RDNA 3+ (Radeon RX 7000 o posterior) o NVIDIA Ampere+ (RTX 30 o posterior) en una carcasa Thunderbolt o USB4; AMD evita el paso de Docker. Para uso diario, un Mac con más memoria unificada o una GPU RTX en un mini PC conectado por LAN es la opción más fiable.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Funciona el Razer Core con un MacBook Pro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No en Apple Silicon. La página del Core X V2 de Razer indica «eGPUs not supported by M1 & later Mac devices». El Razer Core X original salió en 2018 para Mac Intel con Thunderbolt 3. Una carcasa Razer en un Mac Apple Silicon dependería del controlador no oficial TinyGPU, que Razer no menciona.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo añadir una GPU externa a un iMac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No de forma nativa en los iMac Apple Silicon — los límites son los mismos que en los MacBook. Los iMac Intel con Thunderbolt 3 admitían eGPU en versiones antiguas de macOS. Para LLM locales: ejecuta Ollama en una máquina GPU aparte y conéctate por LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo usar una eGPU OCuLink con un Mac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Ningún Mac tiene puerto OCuLink. OCuLink está pensado para PC y mini PC; para un Mac, las opciones son una eGPU Thunderbolt o USB4 con el controlador experimental TinyGPU, o un mini PC OCuLink servido por LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Volverá Apple a admitir eGPU en Apple Silicon?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Poco probable. Los chips M de Apple integran GPU, CPU y memoria en un solo paquete — el diseño es memoria unificada, no ampliabilidad — y Apple no ha anunciado planes para restaurar el cómputo eGPU.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo usar una GPU NVIDIA para la inferencia y enviar el resultado a mi MacBook?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí — es el enfoque recomendado. Ejecuta Ollama en una máquina Windows o Linux con GPU NVIDIA, expónlo en tu LAN (OLLAMA_HOST=0.0.0.0) y conéctate desde el MacBook con Open WebUI, Cursor, Continue o cualquier cliente compatible con OpenAI. El MacBook gestiona la interfaz; la máquina NVIDIA hace el cálculo.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU para MacBook e IA local: qué funciona en 2026', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/es/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'es' },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-pt.webp',
    type: 'how-to',
    title: 'eGPU para MacBook e IA local: o que funciona em 2026',
    seoTitle: 'eGPU MacBook IA local 2026 — Alternativas',
    metaDescription: 'Nenhuma eGPU funciona nativamente em um MacBook Apple Silicon. Opções 2026: TinyGPU (só tinygrad), Mac mini M5 Pro ou mini PC OCuLink via LAN.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Nenhuma eGPU funciona nativamente em um MacBook Apple Silicon (M1–M5): o macOS não tem driver para GPUs externas, e a Razer informa que o Core X V2 é «not supported by M1 & later Mac devices». O único caminho é o driver TinyGPU da Tiny Corp, que segundo a Tiny Corp a Apple aprovou: ele executa computação de IA em eGPUs AMD RDNA 3+ ou NVIDIA Ampere+ via Thunderbolt ou USB4, mas sua documentação cobre apenas o tinygrad — não Ollama, llama.cpp nem MLX. Para uma configuração com suporte: um Mac mini M5 Pro ou um mini PC OCuLink servido pela sua rede local.**',
    quickAnswerTop: {
      question: 'Posso usar uma eGPU com um MacBook para inferência local de LLM?',
      answer: 'Não nativamente. Macs Apple Silicon (M1–M5) não têm driver do macOS para GPUs externas. Desde abril de 2026, o driver TinyGPU da Tiny Corp (somente computação, sem saída de vídeo) permite que GPUs AMD RDNA 3+ e NVIDIA Ampere+ executem cargas de IA via Thunderbolt ou USB4, mas sua documentação cobre apenas o tinygrad, e placas NVIDIA também exigem o Docker Desktop. Para uma configuração estável: execute o Ollama em um Mac mini M5 Pro ou em um mini PC OCuLink e conecte-se pela LAN.',
      bullets: [
        'MacBooks Apple Silicon (M1–M5): sem suporte nativo a eGPU; a Razer lista o Core X V2 como sem suporte em Macs M1 e posteriores',
        'TinyGPU (anunciado em 1 de abril de 2026): somente computação, AMD RDNA 3+ ou NVIDIA Ampere+, macOS 13+, sem saída de vídeo',
        'O TinyGPU está documentado apenas para o tinygrad; Ollama, llama.cpp e MLX não constam como compatíveis',
        'Placas NVIDIA exigem o Docker Desktop no Mac; placas AMD funcionam sem ele',
        'A própria Tiny Corp relata 18,5 tok/s com Qwen 3.5 27B (Mac mini + RX 7900 XTX); a Plugable viu pouco ganho sobre a base em um MacBook Pro M2',
        'Alternativa com suporte: Mac mini M5 Pro (a partir de US$ 1.699, preço nos EUA, até 64 GB, 307 GB/s) ou mini PC OCuLink + RTX 3090 pela LAN',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Nenhum Mac Apple Silicon (M1–M5) suporta eGPU nativamente; uma placa conectada é detectada, mas não consegue executar trabalho',
          'O TinyGPU (Tiny Corp, abril de 2026) adiciona computação em eGPU AMD e NVIDIA a partir do macOS 13 via Thunderbolt ou USB4 — somente computação, sem vídeo, documentado apenas para o tinygrad',
          'Placas NVIDIA exigem o Docker Desktop na configuração do TinyGPU; placas AMD não',
          'Para uma configuração de Mac com suporte: Mac mini M5 Pro (a partir de US$ 1.699, preço nos EUA, até 64 GB de memória unificada)',
          'Para velocidade de GPU: mini PC OCuLink + RTX 3090, servido ao MacBook pela LAN com Ollama',
          'OCuLink é PCIe 4.0 x4 (cerca de 63 Gbps) — um quarto de um slot x16, suficiente quando o modelo cabe na VRAM; nenhum Mac tem porta OCuLink',
        ],
      },
      mainContent: {
        title: 'eGPU em Macs Apple Silicon em 2026: o que mudou',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Macs Apple Silicon não têm suporte nativo a GPUs externas, mas desde abril de 2026 o driver TinyGPU da Tiny Corp pode executar computação de IA em eGPUs AMD e NVIDIA via Thunderbolt ou USB4 — documentado apenas para o tinygrad.',
          },
          {
            type: 'plain-terms',
            text: 'Uma eGPU é uma placa gráfica externa em um gabinete conectado por Thunderbolt, USB4 ou OCuLink. O macOS em chips M não tem driver para ela, então uma placa conectada é detectada, mas não executa trabalho. O TinyGPU é um app de macOS da Tiny Corp que instala uma extensão DriverKit (que a Tiny Corp diz ter sido aprovada pela Apple) para habilitar computação na placa. Ele não controla telas e não usa Metal.',
          },
        ],
        content: 'Sem um driver de terceiros, um Mac Apple Silicon detecta uma GPU externa, mas não consegue usá-la, segundo a Plugable. A página do Core X V2 da Razer informa «eGPUs not supported by M1 & later Mac devices». Em 1 de abril de 2026, a Tiny Corp anunciou que a Apple aprovou seu driver TinyGPU para AMD e NVIDIA. Segundo a documentação do tinygrad, o TinyGPU exige macOS 13.0 ou posterior, uma GPU AMD RDNA 3+ ou NVIDIA Ampere+ e uma porta USB4 ou Thunderbolt; a configuração NVIDIA exige também o Docker Desktop. A carga documentada é o executor de LLM do tinygrad, e segundo o heise ele não funciona com o MLX da Apple. A Tiny Corp relatou 18,5 tok/s para Qwen 3.5 27B em um Mac mini com Radeon RX 7900 XTX — um dado do fabricante, não um benchmark independente. A Plugable testou uma Radeon 9070 e uma GeForce RTX 5070 em um gabinete Thunderbolt 5 com um MacBook Pro M2 e viu pouca melhora sobre a base.',
        items: [
          '**Apple Silicon (M1–M5)**: sem suporte nativo a eGPU — uma placa conectada é detectada, mas não executa trabalho.',
          '**TinyGPU (anunciado em 1 de abril de 2026)**: app de driver de terceiros da Tiny Corp; AMD RDNA 3+ e NVIDIA Ampere+ via Thunderbolt ou USB4; macOS 13.0+.',
          '**Escopo**: somente computação — sem saída de vídeo, sem Metal, sem jogos; suporte de software documentado apenas para o tinygrad.',
          '**Placas NVIDIA**: a configuração do compilador exige o Docker Desktop; placas AMD funcionam nativamente.',
          '**MacBooks Intel (2018–2020)**: a eGPU funcionava via Thunderbolt 3 em versões antigas do macOS; esses Macs foram descontinuados.',
        ],
      },
      connections: {
        id: 'connections',
        title: 'OCuLink, Thunderbolt e USB4 para uma GPU externa: comparação',
        content: '**OCuLink dá à GPU externa a maior largura de banda por real investido, mas só em PCs — nenhum Mac tem porta OCuLink.** Thunderbolt 4 e USB4 permitem conexão a quente e funcionam em notebooks, com velocidade de enlace menor. Com o modelo na VRAM, a geração de tokens depende principalmente da largura de banda de memória da própria GPU; o enlace afeta sobretudo o carregamento do modelo. Escolha um mini PC com porta OCuLink (por exemplo Minisforum UM890 Pro ou AOOSTAR GEM12+ Pro) se a GPU ficar na mesa; um gabinete Thunderbolt só para um notebook que você carrega.',
        columns: ['Enlace', 'Largura de banda nominal', 'Conexão a quente', 'Uso típico'],
        rows: [
          {
            'Enlace': 'OCuLink 4i (PCIe 4.0 x4)',
            'Largura de banda nominal': '~63 Gbps',
            'Conexão a quente': 'Não (desligar antes)',
            'Uso típico': 'Mini PC + dock de GPU',
          },
          {
            'Enlace': 'Thunderbolt 4 / USB4 40G',
            'Largura de banda nominal': '40 Gbps',
            'Conexão a quente': 'Sim',
            'Uso típico': 'Notebook + gabinete',
          },
          {
            'Enlace': 'Thunderbolt 5',
            'Largura de banda nominal': '80 Gbps (120 Gbps em boost)',
            'Conexão a quente': 'Sim',
            'Uso típico': 'PCs e Macs recentes',
          },
          {
            'Enlace': 'USB4 20G',
            'Largura de banda nominal': '20 Gbps',
            'Conexão a quente': 'Sim',
            'Uso típico': 'Menor largura de banda',
          },
        ],
      },
      alternatives: {
        title: 'Alternativas reais: o que fazer em vez disso',
        productItems: [
          {
            title: 'Mac mini M5 Pro (até 64 GB) — Melhor opção macOS',
            content: 'O Mac mini com M5 Pro da Apple (disponível desde 22 de setembro de 2026) começa em US$ 1.699 (preço nos EUA) e oferece até 64 GB de memória unificada a 307 GB/s. A geração de tokens é limitada pela largura de banda de memória: um modelo 32B Q4 de cerca de 19–20 GB tem teto teórico próximo de 15 tok/s nessa largura de banda; as velocidades reais são menores. Escolha-o para modelos da classe 32B que precisam caber na memória sem uma máquina de GPU separada. O Mac mini M6 básico (a partir de US$ 899, até 32 GB, 170 GB/s) atende modelos 7B–14B.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro na Amazon', url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'Mini PC OCuLink + RTX 3090 (Melhor combo GPU/portátil)',
            content: 'Um mini PC com porta OCuLink — como o Minisforum UM890 Pro (Ryzen 9 8945HS, barebone a partir de US$ 479 no lançamento em 2024) ou o AOOSTAR GEM12+ Pro (barebone listado em torno de US$ 359) — conecta-se a uma GPU de desktop por um dock OCuLink. OCuLink não permite conexão a quente: desligue o PC antes de conectar. Benchmarks da comunidade com llama.cpp relatam cerca de 90–95 tok/s para um modelo 8B Q4_K_M em uma RTX 3090; as fontes divergem e os resultados dependem do tamanho de contexto e da versão. Execute o Ollama no mini PC e sirva pela LAN; o MacBook continua sendo o cliente.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink na Amazon', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro na Amazon', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'Driver TinyGPU + eGPU em Mac Apple Silicon (experimental)',
            content: 'O driver TinyGPU da Tiny Corp habilita computação em eGPUs AMD RDNA 3+ e NVIDIA Ampere+ via Thunderbolt ou USB4 no macOS 13+. Está documentado apenas para o tinygrad (execute com DEV=AMD ou DEV=NV python3 -m tinygrad.llm), placas NVIDIA exigem o Docker Desktop e a Plugable viu pouca melhora sobre a base em um MacBook Pro M2. É um driver de terceiros, não suporte nativo a Metal; espere mudanças de compatibilidade conforme o macOS evolui. Trate como experimento, não como configuração diária.',
            affiliateLinks: [
              { label: 'eGPU RTX 4090 na Amazon (para TinyGPU)', url: 'https://www.amazon.com/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'eGPU Thunderbolt em notebook Windows/Linux (se não usar Mac)',
            content: 'Em um notebook x86 com Windows ou Linux e Thunderbolt 4 ou 5, uma eGPU funciona com o Ollama. O enlace é mais lento que um slot PCIe nativo, mas com o modelo na VRAM a geração de tokens depende principalmente da largura de banda de memória da GPU; as perdas reais são menores do que a diferença do enlace sugere. O Razer Core X V2 (US$ 349,99, Thunderbolt 5, fonte não incluída) foi feito para Windows; a página da Razer informa que eGPUs não têm suporte em Macs M1 e posteriores.',
            affiliateLinks: [
              { label: 'Gabinete eGPU Razer Core X V2 na Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X (original) na Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'Existe alguma forma de fazer uma eGPU funcionar com um MacBook Pro M4 para IA?', a: 'Sim, com limites. O driver TinyGPU da Tiny Corp executa computação em GPUs AMD RDNA 3+ e NVIDIA Ampere+ via Thunderbolt ou USB4 no macOS 13+. Está documentado apenas para o tinygrad (não para Ollama, llama.cpp nem MLX), não dá saída de vídeo e placas NVIDIA exigem o Docker Desktop. A Plugable viu pouca melhora sobre a base em um MacBook Pro M2. Para uma configuração estável: execute o Ollama em uma máquina de GPU separada e conecte pela LAN (OLLAMA_HOST=0.0.0.0 no servidor).' },
          { q: 'Qual é a melhor eGPU para um MacBook Pro 16 básico?', a: 'Nenhuma eGPU tem suporte oficial em MacBooks Pro Apple Silicon. Para experimentar o TinyGPU, o mínimo documentado é uma placa AMD RDNA 3+ (Radeon RX 7000 ou mais nova) ou NVIDIA Ampere+ (RTX 30 ou mais nova) em um gabinete Thunderbolt ou USB4; a AMD evita a etapa do Docker. No uso diário, um Mac com mais memória unificada ou uma GPU RTX em um mini PC conectado pela LAN é a escolha mais confiável.' },
          { q: 'O Razer Core funciona com um MacBook Pro?', a: 'Não em Apple Silicon. A página do Core X V2 da Razer informa «eGPUs not supported by M1 & later Mac devices». O Razer Core X original foi lançado em 2018 para Macs Intel com Thunderbolt 3. Um gabinete Razer em um Mac Apple Silicon dependeria do driver não oficial TinyGPU, que a Razer não lista.' },
          { q: 'Posso adicionar uma GPU externa a um iMac?', a: 'Não nativamente em iMacs Apple Silicon — os limites são os mesmos dos MacBooks. iMacs Intel com Thunderbolt 3 suportavam eGPUs em versões antigas do macOS. Para LLMs locais: execute o Ollama em uma máquina de GPU separada e conecte pela LAN.' },
          { q: 'Posso usar uma eGPU OCuLink com um Mac?', a: 'Não. Nenhum Mac tem porta OCuLink. OCuLink foi feito para PCs e mini PCs; para um Mac, as opções são uma eGPU Thunderbolt ou USB4 com o driver experimental TinyGPU, ou um mini PC OCuLink servido pela LAN.' },
          { q: 'A Apple vai trazer de volta o suporte a eGPU no Apple Silicon?', a: 'É improvável. Os chips M da Apple integram GPU, CPU e memória em um único pacote — o projeto é memória unificada, não expansibilidade — e a Apple não anunciou planos de restaurar a computação em eGPU.' },
          { q: 'Posso usar uma GPU NVIDIA para inferência e enviar o resultado ao meu MacBook?', a: 'Sim — é a abordagem recomendada. Execute o Ollama em uma máquina Windows ou Linux com GPU NVIDIA, exponha-o na sua LAN (OLLAMA_HOST=0.0.0.0) e conecte-se do MacBook via Open WebUI, Cursor, Continue ou qualquer cliente compatível com OpenAI. O MacBook cuida da interface; a máquina NVIDIA faz o cálculo.' },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/pt/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/pt/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/pt/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/pt/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/pt/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/pt/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'Existe alguma forma de fazer uma eGPU funcionar com um MacBook Pro M4 para IA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim, com limites. O driver TinyGPU da Tiny Corp executa computação em GPUs AMD RDNA 3+ e NVIDIA Ampere+ via Thunderbolt ou USB4 no macOS 13+. Está documentado apenas para o tinygrad (não para Ollama, llama.cpp nem MLX), não dá saída de vídeo e placas NVIDIA exigem o Docker Desktop. A Plugable viu pouca melhora sobre a base em um MacBook Pro M2. Para uma configuração estável: execute o Ollama em uma máquina de GPU separada e conecte pela LAN (OLLAMA_HOST=0.0.0.0 no servidor).',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual é a melhor eGPU para um MacBook Pro 16 básico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nenhuma eGPU tem suporte oficial em MacBooks Pro Apple Silicon. Para experimentar o TinyGPU, o mínimo documentado é uma placa AMD RDNA 3+ (Radeon RX 7000 ou mais nova) ou NVIDIA Ampere+ (RTX 30 ou mais nova) em um gabinete Thunderbolt ou USB4; a AMD evita a etapa do Docker. No uso diário, um Mac com mais memória unificada ou uma GPU RTX em um mini PC conectado pela LAN é a escolha mais confiável.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O Razer Core funciona com um MacBook Pro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não em Apple Silicon. A página do Core X V2 da Razer informa «eGPUs not supported by M1 & later Mac devices». O Razer Core X original foi lançado em 2018 para Macs Intel com Thunderbolt 3. Um gabinete Razer em um Mac Apple Silicon dependeria do driver não oficial TinyGPU, que a Razer não lista.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso adicionar uma GPU externa a um iMac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não nativamente em iMacs Apple Silicon — os limites são os mesmos dos MacBooks. iMacs Intel com Thunderbolt 3 suportavam eGPUs em versões antigas do macOS. Para LLMs locais: execute o Ollama em uma máquina de GPU separada e conecte pela LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso usar uma eGPU OCuLink com um Mac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não. Nenhum Mac tem porta OCuLink. OCuLink foi feito para PCs e mini PCs; para um Mac, as opções são uma eGPU Thunderbolt ou USB4 com o driver experimental TinyGPU, ou um mini PC OCuLink servido pela LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'A Apple vai trazer de volta o suporte a eGPU no Apple Silicon?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'É improvável. Os chips M da Apple integram GPU, CPU e memória em um único pacote — o projeto é memória unificada, não expansibilidade — e a Apple não anunciou planos de restaurar a computação em eGPU.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso usar uma GPU NVIDIA para inferência e enviar o resultado ao meu MacBook?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim — é a abordagem recomendada. Execute o Ollama em uma máquina Windows ou Linux com GPU NVIDIA, exponha-o na sua LAN (OLLAMA_HOST=0.0.0.0) e conecte-se do MacBook via Open WebUI, Cursor, Continue ou qualquer cliente compatível com OpenAI. O MacBook cuida da interface; a máquina NVIDIA faz o cálculo.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU para MacBook e IA local: o que funciona em 2026', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/pt/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'pt-BR' },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-ar.webp',
    type: 'how-to',
    title: '⁨eGPU⁩ مع ⁨MacBook⁩ والذكاء الاصطناعي المحلي: ما الذي يعمل في ⁨2026⁩؟',
    seoTitle: '⁨eGPU⁩ مع ⁨MacBook⁩ للاستدلال المحلي بـ ⁨LLM 2026⁩',
    metaDescription: 'لا تعمل أي eGPU أصليًا على MacBook بمعالج Apple Silicon. الخيارات في 2026: TinyGPU (tinygrad فقط) أو Mac mini M5 Pro أو حاسب OCuLink مصغر عبر LAN.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/ar/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**لا تعمل أي eGPU أصليًا على أجهزة MacBook بمعالج Apple Silicon (M1–M5): فنظام macOS لا يملك مشغّلًا لمعالجات الرسومات الخارجية، وتذكر Razer أن Core X V2 "not supported by M1 & later Mac devices". الطريق الوحيد هو مشغّل TinyGPU من Tiny Corp (الذي تقول Tiny Corp إن Apple وافقت عليه)، وهو ينفّذ حوسبة الذكاء الاصطناعي على eGPU من AMD RDNA 3+ أو NVIDIA Ampere+ عبر Thunderbolt أو USB4، لكن وثائقه تغطي tinygrad فقط — لا Ollama ولا llama.cpp ولا MLX. للحصول على إعداد مدعوم، استخدم Mac mini M5 Pro أو حاسب OCuLink مصغرًا تتم خدمته عبر شبكتك المحلية.**',
    quickAnswerTop: {
      question: 'هل يمكنني استخدام eGPU مع MacBook للاستدلال المحلي بالنماذج اللغوية الكبيرة؟',
      answer: 'ليس بشكل أصلي. لا تملك أجهزة Mac بمعالج Apple Silicon (M1–M5) مشغّلًا في macOS لمعالجات الرسومات الخارجية. منذ أبريل 2026 يتيح مشغّل TinyGPU من Tiny Corp (حوسبة فقط دون إخراج شاشة) تشغيل أحمال الذكاء الاصطناعي على معالجات AMD RDNA 3+ وNVIDIA Ampere+ عبر Thunderbolt أو USB4، لكن وثائقه تغطي tinygrad فقط، وتحتاج بطاقات NVIDIA أيضًا إلى Docker Desktop. للحصول على إعداد مستقر: شغّل Ollama على Mac mini M5 Pro أو حاسب OCuLink مصغر واتصل به عبر LAN.',
      bullets: [
        'أجهزة MacBook بمعالج Apple Silicon (M1–M5): لا دعم أصلي لـ eGPU؛ وتدرج Razer جهاز Core X V2 غير مدعوم على أجهزة Mac من M1 فما بعد',
        'TinyGPU (أُعلن في 1 أبريل 2026): حوسبة فقط، AMD RDNA 3+ أو NVIDIA Ampere+، macOS 13+، دون إخراج شاشة',
        'TinyGPU موثّق لـ tinygrad فقط؛ ولم تُذكر Ollama وllama.cpp وMLX ضمن المدعومة',
        'تحتاج بطاقات NVIDIA إلى Docker Desktop على الـ Mac؛ وتعمل بطاقات AMD بدونه',
        'أبلغت Tiny Corp ذاتيًا عن 18.5 رمز/ثانية مع Qwen 3.5 27B (Mac mini + RX 7900 XTX)؛ ولاحظت Plugable تحسنًا ضئيلًا عن الأساس على MacBook Pro M2',
        'البديل المدعوم: Mac mini M5 Pro (من 1,699 دولارًا بسعر الولايات المتحدة، حتى 64 جيجابايت، 307 جيجابايت/ث) أو حاسب OCuLink مصغر + RTX 3090 عبر LAN',
      ],
      updatedDate: '2026-10',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'لا يدعم أي جهاز Mac بمعالج Apple Silicon (M1–M5) أي eGPU أصليًا؛ تُكتشف البطاقة الموصولة لكنها لا تستطيع تنفيذ أي عمل',
          'يضيف TinyGPU (Tiny Corp، أبريل 2026) حوسبة eGPU من AMD وNVIDIA بدءًا من macOS 13 عبر Thunderbolt أو USB4 — حوسبة فقط، دون شاشة، وموثّق لـ tinygrad فقط',
          'تحتاج بطاقات NVIDIA إلى Docker Desktop لإعداد TinyGPU؛ أما بطاقات AMD فلا',
          'لإعداد Mac مدعوم: Mac mini M5 Pro (من 1,699 دولارًا بسعر الولايات المتحدة، حتى 64 جيجابايت ذاكرة موحدة)',
          'لسرعة معالج الرسومات: حاسب OCuLink مصغر + RTX 3090 تتم خدمته للـ MacBook عبر LAN باستخدام Ollama',
          'OCuLink هو PCIe 4.0 x4 (نحو 63 جيجابت/ث) — ربع منفذ x16، وهو كافٍ متى اتسع النموذج في VRAM؛ ولا يملك أي Mac منفذ OCuLink',
        ],
      },
      mainContent: {
        title: 'eGPU على أجهزة Mac بمعالج Apple Silicon في 2026: ما الذي تغيّر',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لا تملك أجهزة Mac بمعالج Apple Silicon دعمًا أصليًا لمعالجات الرسومات الخارجية، لكن منذ أبريل 2026 يمكن لمشغّل TinyGPU من Tiny Corp تنفيذ حوسبة الذكاء الاصطناعي على eGPU من AMD وNVIDIA عبر Thunderbolt أو USB4 — وهو موثّق لـ tinygrad فقط.',
          },
          {
            type: 'plain-terms',
            text: 'الـ eGPU هي بطاقة رسومات خارجية داخل علبة تتصل عبر Thunderbolt أو USB4 أو OCuLink. لا يملك macOS على شرائح M مشغّلًا لها، لذا تُكتشف البطاقة الموصولة لكنها لا تستطيع تنفيذ أي عمل. TinyGPU تطبيق macOS من Tiny Corp يثبّت امتداد DriverKit (تقول Tiny Corp إن Apple وافقت عليه) لتمكين الحوسبة على البطاقة. وهو لا يشغّل الشاشات ولا يستخدم Metal.',
          },
        ],
        content: 'بحسب Plugable، من دون مشغّل من جهة خارجية يكتشف Mac بمعالج Apple Silicon معالج الرسومات الخارجي لكنه لا يستطيع استخدامه. تذكر صفحة Razer Core X V2 عبارة "eGPUs not supported by M1 & later Mac devices". في 1 أبريل 2026 أعلنت Tiny Corp أن Apple وافقت على مشغّل TinyGPU لكل من AMD وNVIDIA. وفق وثائق tinygrad يتطلب TinyGPU نظام macOS 13.0 أو أحدث ومعالج رسومات AMD RDNA 3+ أو NVIDIA Ampere+ ومنفذ USB4 أو Thunderbolt؛ ويتطلب إعداد NVIDIA أيضًا Docker Desktop. الحمل الموثّق هو مشغّل LLM في tinygrad، وتفيد heise بأنه لا يعمل مع MLX من Apple. أبلغت Tiny Corp عن 18.5 رمز/ثانية لنموذج Qwen 3.5 27B على Mac mini مع Radeon RX 7900 XTX — وهي قيمة من الشركة المصنّعة وليست اختبار أداء مستقلًا. اختبرت Plugable بطاقتي Radeon 9070 وGeForce RTX 5070 في علبة Thunderbolt 5 على MacBook Pro M2 ولاحظت تحسنًا ضئيلًا عن الأساس.',
        items: [
          '**Apple Silicon (M1–M5)**: لا دعم أصلي لـ eGPU — تُكتشف البطاقة الموصولة لكنها لا تستطيع تنفيذ أي عمل.',
          '**TinyGPU (أُعلن في 1 أبريل 2026)**: تطبيق مشغّل من جهة خارجية من Tiny Corp؛ يدعم AMD RDNA 3+ وNVIDIA Ampere+ عبر Thunderbolt أو USB4؛ macOS 13.0+.',
          '**النطاق**: حوسبة فقط — دون إخراج شاشة ودون Metal ودون ألعاب؛ ودعم البرمجيات موثّق لـ tinygrad فقط.',
          '**بطاقات NVIDIA**: يتطلب إعداد المترجم Docker Desktop؛ وتعمل بطاقات AMD أصليًا.',
          '**أجهزة MacBook بمعالج Intel (2018–2020)**: عملت eGPU عبر Thunderbolt 3 على إصدارات macOS الأقدم؛ وقد توقف إنتاج هذه الأجهزة.',
        ],
      },
      connections: {
        id: 'connections',
        title: 'OCuLink مقابل Thunderbolt وUSB4 لمعالج رسومات خارجي',
        content: '**يمنح OCuLink معالج الرسومات الخارجي أكبر نطاق ترددي مقابل التكلفة، لكن على الحواسيب الشخصية فقط — فلا يملك أي Mac منفذ OCuLink.** يدعم Thunderbolt 4 وUSB4 التوصيل أثناء التشغيل ويعملان على الحواسيب المحمولة بسرعة وصلة أقل. وبعد اتساع النموذج في VRAM يعتمد توليد الرموز أساسًا على النطاق الترددي لذاكرة معالج الرسومات نفسه، ويؤثر الاتصال أساسًا في تحميل النموذج. اختر حاسبًا مصغرًا بمنفذ OCuLink (مثل Minisforum UM890 Pro أو AOOSTAR GEM12+ Pro) إذا بقي معالج الرسومات على المكتب؛ واختر علبة Thunderbolt فقط لحاسب محمول تحمله معك.',
        columns: ['الاتصال', 'النطاق الاسمي', 'التوصيل أثناء التشغيل', 'الاستخدام النموذجي'],
        rows: [
          {
            'الاتصال': 'OCuLink 4i (PCIe 4.0 x4)',
            'النطاق الاسمي': '~63 جيجابت/ث',
            'التوصيل أثناء التشغيل': 'لا (أطفئ الجهاز أولًا)',
            'الاستخدام النموذجي': 'حاسب مصغر + قاعدة GPU',
          },
          {
            'الاتصال': 'Thunderbolt 4 / USB4 40G',
            'النطاق الاسمي': '40 جيجابت/ث',
            'التوصيل أثناء التشغيل': 'نعم',
            'الاستخدام النموذجي': 'محمول + علبة',
          },
          {
            'الاتصال': 'Thunderbolt 5',
            'النطاق الاسمي': '80 جيجابت/ث (120 معزَّز)',
            'التوصيل أثناء التشغيل': 'نعم',
            'الاستخدام النموذجي': 'حواسيب وأجهزة Mac أحدث',
          },
          {
            'الاتصال': 'USB4 20G',
            'النطاق الاسمي': '20 جيجابت/ث',
            'التوصيل أثناء التشغيل': 'نعم',
            'الاستخدام النموذجي': 'أقل نطاق ترددي',
          },
        ],
      },
      alternatives: {
        title: 'البدائل الحقيقية: ماذا تفعل بدلاً من ذلك',
        productItems: [
          {
            title: 'Mac mini M5 Pro (حتى 64 جيجابايت) — أفضل خيار لـ macOS',
            content: 'يبدأ Mac mini بمعالج M5 Pro من Apple (متاح منذ 22 سبتمبر 2026) من 1,699 دولارًا بسعر الولايات المتحدة، ويوفر حتى 64 جيجابايت من الذاكرة الموحدة بنطاق 307 جيجابايت/ث. يقيّد النطاق الترددي للذاكرة توليد الرموز، لذا فإن نموذج 32B بصيغة Q4 بحجم 19–20 جيجابايت تقريبًا له سقف نظري قرب 15 رمزًا/ثانية عند هذا النطاق؛ والسرعات الفعلية أقل. اخترها لنماذج فئة 32B التي يجب أن تتسع في الذاكرة دون جهاز GPU منفصل. أما Mac mini M6 الأساسي (من 899 دولارًا، حتى 32 جيجابايت، 170 جيجابايت/ث) فيناسب نماذج 7B–14B.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro على Amazon', url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'حاسب OCuLink مصغر + RTX 3090 (أفضل مزيج GPU/محمول)',
            content: 'يتصل حاسب مصغر بمنفذ OCuLink — مثل Minisforum UM890 Pro (Ryzen 9 8945HS، وهيكل بلا مكونات من 479 دولارًا عند إطلاقه في 2024) أو AOOSTAR GEM12+ Pro (هيكل بلا مكونات مدرج بنحو 359 دولارًا) — بمعالج رسومات مكتبي عبر قاعدة OCuLink. لا يدعم OCuLink التوصيل أثناء التشغيل: أطفئ الحاسب قبل التوصيل. تفيد اختبارات المجتمع مع llama.cpp بنحو 90–95 رمزًا/ثانية لنموذج 8B Q4_K_M على RTX 3090؛ وتتباين المصادر وتعتمد النتائج على طول السياق وإصدار البناء. شغّل Ollama على الحاسب المصغر وقدّمه عبر LAN؛ ويبقى الـ MacBook هو العميل.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink على Amazon', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro على Amazon', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'مشغّل TinyGPU + eGPU على Mac بمعالج Apple Silicon (تجريبي)',
            content: 'يتيح مشغّل TinyGPU من Tiny Corp الحوسبة على eGPU من AMD RDNA 3+ وNVIDIA Ampere+ عبر Thunderbolt أو USB4 على macOS 13+. وهو موثّق لـ tinygrad فقط (يُشغَّل بـ DEV=AMD أو DEV=NV python3 -m tinygrad.llm)، وتحتاج بطاقات NVIDIA إلى Docker Desktop، ولاحظت Plugable تحسنًا ضئيلًا عن الأساس على MacBook Pro M2. إنه مشغّل من جهة خارجية وليس دعمًا أصليًا لـ Metal، فتوقّع تغيّرات في التوافق مع تطور macOS. تعامل معه كتجربة لا كإعداد يومي.',
            affiliateLinks: [
              { label: 'eGPU RTX 4090 على Amazon (لإعداد TinyGPU)', url: 'https://www.amazon.com/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'eGPU عبر Thunderbolt على محمول Windows/Linux (إن لم تكن على Mac)',
            content: 'على محمول x86 بنظام Windows أو Linux مع Thunderbolt 4 أو 5 تعمل eGPU مع Ollama. الوصلة أبطأ من منفذ PCIe أصلي، لكن بعد اتساع النموذج في VRAM يعتمد توليد الرموز أساسًا على النطاق الترددي لذاكرة معالج الرسومات نفسه، فالخسائر الفعلية أقل مما توحي به فجوة الوصلة. صُمّم Razer Core X V2 (349.99 دولارًا، Thunderbolt 5، دون مصدر طاقة) لنظام Windows؛ وتذكر صفحة Razer أن eGPU غير مدعومة على أجهزة Mac من M1 فما بعد.',
            affiliateLinks: [
              { label: 'علبة eGPU طراز Razer Core X V2 على Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X (الأصلي) على Amazon', url: 'https://www.amazon.com/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'هل توجد طريقة لتشغيل eGPU مع MacBook Pro M4 للذكاء الاصطناعي؟', a: 'نعم، مع قيود. ينفّذ مشغّل TinyGPU من Tiny Corp الحوسبة على معالجات AMD RDNA 3+ وNVIDIA Ampere+ عبر Thunderbolt أو USB4 على macOS 13+. وهو موثّق لـ tinygrad فقط (لا Ollama ولا llama.cpp ولا MLX)، ولا يوفر إخراج شاشة، وتحتاج بطاقات NVIDIA إلى Docker Desktop. لاحظت Plugable تحسنًا ضئيلًا عن الأساس على MacBook Pro M2. للحصول على إعداد مستقر: شغّل Ollama على جهاز GPU منفصل واتصل به عبر LAN (OLLAMA_HOST=0.0.0.0 على الخادم).' },
          { q: 'ما أفضل eGPU لجهاز MacBook Pro 16 بالطراز الأساسي؟', a: 'لا توجد eGPU مدعومة رسميًا على أي MacBook Pro بمعالج Apple Silicon. لتجربة TinyGPU، الحد الأدنى الموثّق هو بطاقة AMD RDNA 3+ (Radeon RX 7000 أو أحدث) أو NVIDIA Ampere+ (RTX 30 أو أحدث) في علبة Thunderbolt أو USB4؛ وتتجنب AMD خطوة Docker. للاستخدام اليومي، يُعدّ Mac بذاكرة موحدة أكبر أو معالج رسومات RTX في حاسب مصغر متصل عبر LAN خيارًا أكثر موثوقية.' },
          { q: 'هل يعمل Razer Core مع MacBook Pro؟', a: 'ليس على Apple Silicon. تذكر صفحة Razer Core X V2 عبارة "eGPUs not supported by M1 & later Mac devices". صدر Razer Core X الأصلي في 2018 لأجهزة Mac بمعالج Intel مع Thunderbolt 3. وسيعتمد استخدام علبة Razer على Mac بمعالج Apple Silicon على مشغّل TinyGPU غير الرسمي الذي لا تدرجه Razer.' },
          { q: 'هل يمكنني إضافة معالج رسومات خارجي إلى iMac؟', a: 'ليس بشكل أصلي على أجهزة iMac بمعالج Apple Silicon — القيود نفسها كما في MacBook. دعمت أجهزة iMac بمعالج Intel مع Thunderbolt 3 معالجات eGPU على إصدارات macOS الأقدم. للنماذج اللغوية المحلية: شغّل Ollama على جهاز GPU منفصل واتصل به عبر LAN.' },
          { q: 'هل يمكنني استخدام eGPU عبر OCuLink مع Mac؟', a: 'لا. لا يملك أي Mac منفذ OCuLink. صُمّم OCuLink للحواسيب الشخصية والمصغرة؛ أما مع Mac فالخيارات هي eGPU عبر Thunderbolt أو USB4 مع مشغّل TinyGPU التجريبي، أو حاسب OCuLink مصغر تتم خدمته عبر LAN.' },
          { q: 'هل ستعيد Apple دعم eGPU لمعالجات Apple Silicon؟', a: 'غير مرجح. تدمج شرائح M من Apple معالج الرسومات والمعالج المركزي والذاكرة في حزمة واحدة — فالتصميم قائم على الذاكرة الموحدة لا على قابلية التوسعة — ولم تعلن Apple عن خطط لاستعادة دعم حوسبة eGPU.' },
          { q: 'هل يمكنني استخدام معالج رسومات NVIDIA للاستدلال ثم تمرير الناتج إلى MacBook؟', a: 'نعم — هذا هو النهج الموصى به. شغّل Ollama على جهاز Windows أو Linux مزوّد بمعالج رسومات NVIDIA، وأتحه على شبكتك المحلية (OLLAMA_HOST=0.0.0.0)، ثم اتصل من الـ MacBook عبر Open WebUI أو Cursor أو Continue أو أي عميل متوافق مع OpenAI. يتولى الـ MacBook الواجهة، ويتولى جهاز NVIDIA الحساب.' },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[Best Ollama Models for CPU-Only Inference](/ar/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/ar/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/ar/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/ar/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/ar/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/ar/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'هل توجد طريقة لتشغيل eGPU مع MacBook Pro M4 للذكاء الاصطناعي؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'نعم، مع قيود. ينفّذ مشغّل TinyGPU من Tiny Corp الحوسبة على معالجات AMD RDNA 3+ وNVIDIA Ampere+ عبر Thunderbolt أو USB4 على macOS 13+. وهو موثّق لـ tinygrad فقط (لا Ollama ولا llama.cpp ولا MLX)، ولا يوفر إخراج شاشة، وتحتاج بطاقات NVIDIA إلى Docker Desktop. لاحظت Plugable تحسنًا ضئيلًا عن الأساس على MacBook Pro M2. للحصول على إعداد مستقر: شغّل Ollama على جهاز GPU منفصل واتصل به عبر LAN (OLLAMA_HOST=0.0.0.0 على الخادم).',
          },
        },
        {
          '@type': 'Question',
          'name': 'ما أفضل eGPU لجهاز MacBook Pro 16 بالطراز الأساسي؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'لا توجد eGPU مدعومة رسميًا على أي MacBook Pro بمعالج Apple Silicon. لتجربة TinyGPU، الحد الأدنى الموثّق هو بطاقة AMD RDNA 3+ (Radeon RX 7000 أو أحدث) أو NVIDIA Ampere+ (RTX 30 أو أحدث) في علبة Thunderbolt أو USB4؛ وتتجنب AMD خطوة Docker. للاستخدام اليومي، يُعدّ Mac بذاكرة موحدة أكبر أو معالج رسومات RTX في حاسب مصغر متصل عبر LAN خيارًا أكثر موثوقية.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل يعمل Razer Core مع MacBook Pro؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ليس على Apple Silicon. تذكر صفحة Razer Core X V2 عبارة "eGPUs not supported by M1 & later Mac devices". صدر Razer Core X الأصلي في 2018 لأجهزة Mac بمعالج Intel مع Thunderbolt 3. وسيعتمد استخدام علبة Razer على Mac بمعالج Apple Silicon على مشغّل TinyGPU غير الرسمي الذي لا تدرجه Razer.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل يمكنني إضافة معالج رسومات خارجي إلى iMac؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ليس بشكل أصلي على أجهزة iMac بمعالج Apple Silicon — القيود نفسها كما في MacBook. دعمت أجهزة iMac بمعالج Intel مع Thunderbolt 3 معالجات eGPU على إصدارات macOS الأقدم. للنماذج اللغوية المحلية: شغّل Ollama على جهاز GPU منفصل واتصل به عبر LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل يمكنني استخدام eGPU عبر OCuLink مع Mac؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'لا. لا يملك أي Mac منفذ OCuLink. صُمّم OCuLink للحواسيب الشخصية والمصغرة؛ أما مع Mac فالخيارات هي eGPU عبر Thunderbolt أو USB4 مع مشغّل TinyGPU التجريبي، أو حاسب OCuLink مصغر تتم خدمته عبر LAN.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل ستعيد Apple دعم eGPU لمعالجات Apple Silicon؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'غير مرجح. تدمج شرائح M من Apple معالج الرسومات والمعالج المركزي والذاكرة في حزمة واحدة — فالتصميم قائم على الذاكرة الموحدة لا على قابلية التوسعة — ولم تعلن Apple عن خطط لاستعادة دعم حوسبة eGPU.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل يمكنني استخدام معالج رسومات NVIDIA للاستدلال ثم تمرير الناتج إلى MacBook؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'نعم — هذا هو النهج الموصى به. شغّل Ollama على جهاز Windows أو Linux مزوّد بمعالج رسومات NVIDIA، وأتحه على شبكتك المحلية (OLLAMA_HOST=0.0.0.0)، ثم اتصل من الـ MacBook عبر Open WebUI أو Cursor أو Continue أو أي عميل متوافق مع OpenAI. يتولى الـ MacBook الواجهة، ويتولى جهاز NVIDIA الحساب.',
          },
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'eGPU مع MacBook والذكاء الاصطناعي المحلي: ما الذي يعمل في 2026؟', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/ar/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'ar' },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-egpu-setup-for-macbook-local-llm-2026-overview-hero-ko.webp',
    type: 'how-to',
    title: 'MacBook eGPU와 로컬 AI: 2026년에 무엇이 작동하는가',
    seoTitle: 'MacBook eGPU 로컬 LLM 2026 — 대안 가이드',
    metaDescription: 'Apple Silicon MacBook은 eGPU를 기본 지원하지 않습니다. 2026년 대안: TinyGPU(tinygrad 전용), Mac mini M5 Pro, LAN 연결 OCuLink 미니 PC.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-10-17',
    parentArticle: '/local-llms/gpu-vs-cpu-vs-apple-silicon',
    leadAnswerBlock: '**Apple Silicon MacBook(M1–M5)은 eGPU를 기본 지원하지 않습니다. macOS에는 외장 GPU 드라이버가 없으며 Razer도 Core X V2를 "not supported by M1 & later Mac devices"라고 명시합니다. 유일한 경로는 Tiny Corp의 TinyGPU 드라이버(Tiny Corp에 따르면 Apple이 승인)로, Thunderbolt 또는 USB4를 통해 AMD RDNA 3+ 또는 NVIDIA Ampere+ eGPU에서 AI 연산을 실행하지만 문서화된 것은 tinygrad뿐이며 Ollama, llama.cpp, MLX는 해당되지 않습니다. 지원되는 구성으로는 Mac mini M5 Pro 또는 LAN으로 제공하는 OCuLink 미니 PC를 사용하십시오.**',
    quickAnswerTop: {
      ko: {
        question: 'MacBook에서 로컬 LLM 추론에 eGPU를 사용할 수 있습니까?',
        answer: '기본 방식으로는 불가능합니다. Apple Silicon Mac(M1–M5)에는 외장 GPU용 macOS 드라이버가 없습니다. 2026년 4월부터 Tiny Corp의 TinyGPU 드라이버(연산 전용, 화면 출력 없음)로 AMD RDNA 3+ 및 NVIDIA Ampere+ GPU가 Thunderbolt 또는 USB4를 통해 AI 워크로드를 실행할 수 있지만, 문서화된 것은 tinygrad뿐이며 NVIDIA 카드는 Docker Desktop도 필요합니다. 안정적인 구성은 Mac mini M5 Pro 또는 OCuLink 미니 PC에서 Ollama를 실행하고 LAN으로 연결하는 것입니다.',
        bullets: [
          'Apple Silicon MacBook(M1–M5): eGPU 기본 지원 없음. Razer는 Core X V2를 M1 이후 Mac에서 미지원으로 표기',
          'TinyGPU(2026년 4월 1일 발표): 연산 전용, AMD RDNA 3+ 또는 NVIDIA Ampere+, macOS 13+, 화면 출력 없음',
          'TinyGPU는 tinygrad만 문서화되어 있으며 Ollama, llama.cpp, MLX는 지원으로 기재되지 않음',
          'NVIDIA 카드는 Mac에 Docker Desktop 필요, AMD 카드는 불필요',
          'Tiny Corp 자체 보고: Qwen 3.5 27B에서 18.5 tok/s(Mac mini + RX 7900 XTX). Plugable은 M2 MacBook Pro에서 기준 대비 향상이 작다고 보고',
          '지원되는 대안: Mac mini M5 Pro(미국 가격 1,699달러부터, 최대 64GB, 307GB/s) 또는 LAN 연결 OCuLink 미니 PC + RTX 3090',
        ],
        updatedDate: '2026-10',
      },
    },
    targetKeywords: [
      'MacBook eGPU 로컬 LLM',
      'Apple Silicon eGPU 불가',
      'MacBook AI 추론 대안 2026',
      'OCuLink 미니 PC 로컬 AI',
      'Ollama MacBook GPU 설정',
    ],
    readTime: '5분 분량',
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '어떤 Apple Silicon Mac(M1–M5)도 eGPU를 기본 지원하지 않으며, 연결한 카드는 인식되지만 작업을 실행하지 못합니다',
          'TinyGPU(Tiny Corp, 2026년 4월)는 macOS 13+에서 Thunderbolt 또는 USB4를 통한 AMD·NVIDIA eGPU 연산을 추가합니다 — 연산 전용, 화면 출력 없음, tinygrad만 문서화',
          'TinyGPU 설정에서 NVIDIA 카드는 Docker Desktop이 필요하고 AMD 카드는 필요하지 않습니다',
          '지원되는 Mac 구성: Mac mini M5 Pro(미국 가격 1,699달러부터, 최대 64GB 통합 메모리)',
          'GPU 속도가 필요하면: OCuLink 미니 PC + RTX 3090을 Ollama로 LAN을 통해 MacBook에 제공',
          'OCuLink는 PCIe 4.0 x4(약 63Gbps)로 x16 슬롯의 4분의 1이지만 모델이 VRAM에 올라가면 충분합니다. OCuLink 포트가 있는 Mac은 없습니다',
        ],
      },
      mainContent: {
        title: '2026년 Apple Silicon Mac의 eGPU: 무엇이 달라졌나',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Apple Silicon Mac에는 외장 GPU 기본 지원이 없지만, 2026년 4월부터 Tiny Corp의 TinyGPU 드라이버로 Thunderbolt 또는 USB4를 통해 AMD·NVIDIA eGPU에서 AI 연산을 실행할 수 있습니다(문서화는 tinygrad뿐).',
          },
          {
            type: 'plain-terms',
            text: 'eGPU는 Thunderbolt, USB4 또는 OCuLink로 연결하는 인클로저 속 외장 그래픽 카드입니다. M 시리즈 칩의 macOS에는 이를 위한 드라이버가 없어 연결한 카드는 인식되지만 작업을 실행하지 못합니다. TinyGPU는 Tiny Corp의 macOS 앱으로, DriverKit 확장(Tiny Corp에 따르면 Apple 승인)을 설치해 카드의 연산을 활성화합니다. 디스플레이를 구동하지 않으며 Metal도 사용하지 않습니다.',
          },
        ],
        content: 'Plugable에 따르면 서드파티 드라이버가 없으면 Apple Silicon Mac은 외장 GPU를 인식하지만 사용하지 못합니다. Razer의 Core X V2 페이지에는 "eGPUs not supported by M1 & later Mac devices"라고 적혀 있습니다. 2026년 4월 1일 Tiny Corp는 Apple이 AMD와 NVIDIA용 TinyGPU 드라이버를 승인했다고 발표했습니다. tinygrad 문서에 따르면 TinyGPU에는 macOS 13.0 이상, AMD RDNA 3+ 또는 NVIDIA Ampere+ GPU, USB4 또는 Thunderbolt 포트가 필요하며 NVIDIA 설정에는 Docker Desktop도 필요합니다. 문서화된 워크로드는 tinygrad의 LLM 러너이며 heise는 Apple의 MLX와는 작동하지 않는다고 보도했습니다. Tiny Corp는 Radeon RX 7900 XTX를 연결한 Mac mini에서 Qwen 3.5 27B가 18.5 tok/s라고 보고했는데, 이는 제조사 보고 수치이며 독립 벤치마크가 아닙니다. Plugable은 M2 MacBook Pro에서 Thunderbolt 5 인클로저에 Radeon 9070과 GeForce RTX 5070을 테스트해 기준 대비 향상이 작다고 밝혔습니다.',
        items: [
          '**Apple Silicon(M1–M5)**: eGPU 기본 지원 없음 — 연결한 카드는 인식되지만 작업을 실행하지 못합니다.',
          '**TinyGPU(2026년 4월 1일 발표)**: Tiny Corp의 서드파티 드라이버 앱, Thunderbolt 또는 USB4로 AMD RDNA 3+ 및 NVIDIA Ampere+ 지원, macOS 13.0+.',
          '**범위**: 연산 전용 — 화면 출력 없음, Metal 없음, 게임 불가. 소프트웨어 지원은 tinygrad만 문서화.',
          '**NVIDIA 카드**: 컴파일러 설정에 Docker Desktop 필요. AMD 카드는 기본으로 실행.',
          '**Intel MacBook(2018–2020)**: 구형 macOS에서 Thunderbolt 3로 eGPU 작동. 해당 Mac은 단종.',
        ],
      },
      connections: {
        id: 'connections',
        title: '외장 GPU 연결 방식: OCuLink, Thunderbolt, USB4 비교',
        content: '**OCuLink는 외장 GPU에 비용 대비 가장 넓은 대역폭을 주지만 PC에서만 쓸 수 있습니다. OCuLink 포트가 있는 Mac은 없습니다.** Thunderbolt 4와 USB4는 핫플러그가 가능하고 노트북에서 작동하지만 링크 속도는 낮습니다. 모델이 VRAM에 올라간 뒤의 토큰 생성은 주로 GPU 자체의 메모리 대역폭에 좌우되며, 링크는 주로 모델 로딩에 영향을 줍니다. GPU를 책상에 두려면 OCuLink 포트가 있는 미니 PC(예: Minisforum UM890 Pro 또는 AOOSTAR GEM12+ Pro)를, 들고 다니는 노트북에만 Thunderbolt 인클로저를 선택하십시오.',
        columns: ['연결 방식', '공칭 대역폭', '핫플러그', '일반적 용도'],
        rows: [
          {
            '연결 방식': 'OCuLink 4i(PCIe 4.0 x4)',
            '공칭 대역폭': '약 63Gbps',
            '핫플러그': '불가(전원 끄기)',
            '일반적 용도': '미니 PC + GPU 독',
          },
          {
            '연결 방식': 'Thunderbolt 4 / USB4 40G',
            '공칭 대역폭': '40Gbps',
            '핫플러그': '가능',
            '일반적 용도': '노트북 + 인클로저',
          },
          {
            '연결 방식': 'Thunderbolt 5',
            '공칭 대역폭': '80Gbps(부스트 120Gbps)',
            '핫플러그': '가능',
            '일반적 용도': '최신 PC와 Mac',
          },
          {
            '연결 방식': 'USB4 20G',
            '공칭 대역폭': '20Gbps',
            '핫플러그': '가능',
            '일반적 용도': '대역폭 가장 낮음',
          },
        ],
      },
      alternatives: {
        title: 'Mac에서 GPU 추론을 위한 실제 대안',
        productItems: [
          {
            title: 'Mac mini M5 Pro(최대 64GB) — 최적의 macOS 선택',
            content: 'Apple의 Mac mini M5 Pro(2026년 9월 22일부터 판매)는 미국 가격 1,699달러부터 시작하며 최대 64GB 통합 메모리(307GB/s)를 제공합니다. 토큰 생성은 메모리 대역폭에 제한되므로, 약 19–20GB의 32B Q4 모델은 이 대역폭에서 이론상 상한이 약 15 tok/s이며 실제 속도는 이보다 낮습니다. 별도의 GPU 머신 없이 32B급 모델을 메모리에 올려야 할 때 적합합니다. 기본형 Mac mini M6(899달러부터, 최대 32GB, 170GB/s)는 7B–14B 모델에 맞습니다.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M5 Pro (Amazon)', url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro' },
            ],
          },
          {
            title: 'OCuLink 미니 PC + RTX 3090(최적의 GPU/휴대 조합)',
            content: 'OCuLink 포트가 있는 미니 PC(예: Minisforum UM890 Pro — Ryzen 9 8945HS, 2024년 출시 당시 베어본 479달러부터, AOOSTAR GEM12+ Pro — 베어본 약 359달러로 게재)를 OCuLink 독으로 데스크톱 GPU에 연결합니다. OCuLink는 핫스왑이 안 되므로 연결 전에 PC 전원을 끄십시오. 커뮤니티 llama.cpp 벤치마크는 RTX 3090에서 8B Q4_K_M 모델이 대략 90–95 tok/s라고 보고하지만 출처마다 차이가 있고 컨텍스트 길이와 빌드에 따라 달라집니다. 미니 PC에서 Ollama를 실행해 LAN으로 제공하고 MacBook은 클라이언트로 유지합니다.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink (Amazon)', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
              { label: 'Minisforum UM890 Pro (Amazon)', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            title: 'TinyGPU 드라이버 + Apple Silicon Mac의 eGPU(실험적)',
            content: 'Tiny Corp의 TinyGPU 드라이버는 macOS 13+에서 Thunderbolt 또는 USB4를 통해 AMD RDNA 3+ 및 NVIDIA Ampere+ eGPU의 연산을 활성화합니다. tinygrad만 문서화되어 있고(DEV=AMD 또는 DEV=NV python3 -m tinygrad.llm으로 실행), NVIDIA 카드는 Docker Desktop이 필요하며, Plugable은 M2 MacBook Pro에서 기준 대비 향상이 작다고 보고했습니다. 서드파티 드라이버이며 Apple 기본 Metal 지원이 아니므로 macOS가 바뀔 때 호환성 변화가 있을 수 있습니다. 일상 구성이 아닌 실험으로 취급하십시오.',
            affiliateLinks: [
              { label: 'RTX 4090 eGPU (Amazon, TinyGPU용)', url: 'https://www.amazon.com/s?k=RTX+4090+eGPU+enclosure' },
            ],
          },
          {
            title: 'Windows/Linux 노트북의 Thunderbolt eGPU(Mac이 아닌 경우)',
            content: 'Thunderbolt 4 또는 5가 있는 x86 Windows·Linux 노트북에서는 eGPU가 Ollama와 함께 작동합니다. 링크는 기본 PCIe 슬롯보다 느리지만 모델이 VRAM에 올라가면 토큰 생성은 주로 GPU 자체의 메모리 대역폭에 좌우되므로 실제 손실은 링크 격차가 시사하는 것보다 작습니다. Razer Core X V2(349.99달러, Thunderbolt 5, 전원 공급 장치 미포함)는 Windows용이며 Razer 페이지는 M1 이후 Mac에서 eGPU가 지원되지 않는다고 명시합니다.',
            affiliateLinks: [
              { label: 'Razer Core X V2 eGPU 인클로저 (Amazon)', url: 'https://www.amazon.com/s?k=Razer+Core+X+V2' },
              { label: 'Razer Core X(초기형) (Amazon)', url: 'https://www.amazon.com/s?k=Razer+Core+X+eGPU' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: 'M4 MacBook Pro에서 AI용으로 eGPU를 작동시킬 방법이 있습니까?', a: '제한적으로 가능합니다. Tiny Corp의 TinyGPU 드라이버는 macOS 13+에서 Thunderbolt 또는 USB4를 통해 AMD RDNA 3+ 및 NVIDIA Ampere+ GPU의 연산을 실행합니다. tinygrad만 문서화되어 있고(Ollama, llama.cpp, MLX 제외), 화면 출력이 없으며, NVIDIA 카드는 Docker Desktop이 필요합니다. Plugable은 M2 MacBook Pro에서 기준 대비 향상이 작다고 보고했습니다. 안정적인 구성은 별도 GPU 머신에서 Ollama를 실행하고 LAN으로 연결하는 것입니다(서버에서 OLLAMA_HOST=0.0.0.0).' },
          { q: '기본형 MacBook Pro 16에 가장 좋은 eGPU는 무엇입니까?', a: '어떤 Apple Silicon MacBook Pro에도 공식 지원되는 eGPU는 없습니다. TinyGPU를 시험한다면 문서상 최소 요건은 Thunderbolt 또는 USB4 인클로저의 AMD RDNA 3+(Radeon RX 7000 이상) 또는 NVIDIA Ampere+(RTX 30 이상) 카드이며, AMD는 Docker 단계를 피할 수 있습니다. 일상 사용에는 통합 메모리가 더 큰 Mac이나 LAN으로 연결한 미니 PC의 RTX GPU가 더 안정적입니다.' },
          { q: 'Razer Core가 MacBook Pro에서 작동합니까?', a: 'Apple Silicon에서는 작동하지 않습니다. Razer의 Core X V2 페이지에는 "eGPUs not supported by M1 & later Mac devices"라고 적혀 있습니다. 초기형 Razer Core X는 2018년 Thunderbolt 3를 탑재한 Intel Mac용으로 출시되었습니다. Apple Silicon Mac에서 Razer 인클로저를 쓰려면 Razer가 명시하지 않은 비공식 TinyGPU 드라이버에 의존해야 합니다.' },
          { q: 'iMac에 외장 GPU를 추가할 수 있습니까?', a: 'Apple Silicon iMac에서는 기본 방식으로 불가능하며 한계는 MacBook과 같습니다. Thunderbolt 3를 탑재한 Intel iMac은 구형 macOS에서 eGPU를 지원했습니다. 로컬 LLM이라면 별도 GPU 머신에서 Ollama를 실행하고 LAN으로 연결하십시오.' },
          { q: 'Mac에서 OCuLink eGPU를 사용할 수 있습니까?', a: '아니요. OCuLink 포트가 있는 Mac은 없습니다. OCuLink는 PC와 미니 PC용입니다. Mac에서는 실험적인 TinyGPU 드라이버를 쓰는 Thunderbolt 또는 USB4 eGPU, 또는 LAN으로 제공하는 OCuLink 미니 PC가 선택지입니다.' },
          { q: 'Apple이 Apple Silicon의 eGPU 지원을 되살릴까요?', a: '가능성이 낮습니다. Apple의 M 시리즈 칩은 GPU, CPU, 메모리를 하나의 패키지에 통합하며, 설계 방향은 확장성이 아니라 통합 메모리입니다. Apple은 eGPU 연산 지원을 복원할 계획을 발표하지 않았습니다.' },
          { q: 'NVIDIA GPU로 추론하고 그 출력을 MacBook으로 전달할 수 있습니까?', a: '예, 권장되는 방법입니다. NVIDIA GPU가 있는 Windows 또는 Linux 머신에서 Ollama를 실행하고 LAN에 노출(OLLAMA_HOST=0.0.0.0)한 뒤, MacBook에서 Open WebUI, Cursor, Continue 또는 OpenAI 호환 클라이언트로 연결하십시오. MacBook은 UI를, NVIDIA 머신은 연산을 담당합니다.' },
        ],
      },
      relatedReading: {
        title: '관련 가이드',
        items: [
          '[GPU vs CPU vs Apple Silicon — 로컬 LLM 비교](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon)',
          '[2026년 최고의 로컬 LLM 소프트웨어 디렉토리](/ko/directory)',
          '[MacBook에서 Ollama 실행하기](/ko/local-llms/ollama-on-mac-apple-silicon-setup-2026)',
          '[Best Ollama Models for CPU-Only Inference](/ko/prompt-bites/best-ollama-models-cpu-only) -- CPU-only inference guide',
          '[MLX vs Ollama vs llama.cpp: Which Backend?](/ko/prompt-bites/mlx-vs-ollama-vs-llamacpp) -- backend comparison',
          '[How to Convert an Ollama Model to MLX](/ko/prompt-bites/convert-ollama-model-to-mlx) -- MLX conversion guide',
          '[Best Local LLM for 16 GB RAM Laptop](/ko/prompt-bites/best-local-llm-16gb-ram-laptop) -- 16GB RAM guide',
          '[Mac mini M5 as a Local AI Server](/ko/local-llms/mac-mini-m5-local-ai-server) -- Mac mini M5 local AI server guide',
          '[Apple Silicon M5 for Local LLMs](/ko/local-llms/apple-silicon-m5-local-llm) -- M5 Pro vs Max local LLM guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          'name': 'M4 MacBook Pro에서 AI용으로 eGPU를 작동시킬 방법이 있습니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '제한적으로 가능합니다. Tiny Corp의 TinyGPU 드라이버는 macOS 13+에서 Thunderbolt 또는 USB4를 통해 AMD RDNA 3+ 및 NVIDIA Ampere+ GPU의 연산을 실행합니다. tinygrad만 문서화되어 있고(Ollama, llama.cpp, MLX 제외), 화면 출력이 없으며, NVIDIA 카드는 Docker Desktop이 필요합니다. Plugable은 M2 MacBook Pro에서 기준 대비 향상이 작다고 보고했습니다. 안정적인 구성은 별도 GPU 머신에서 Ollama를 실행하고 LAN으로 연결하는 것입니다(서버에서 OLLAMA_HOST=0.0.0.0).',
          },
        },
        {
          '@type': 'Question',
          'name': '기본형 MacBook Pro 16에 가장 좋은 eGPU는 무엇입니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '어떤 Apple Silicon MacBook Pro에도 공식 지원되는 eGPU는 없습니다. TinyGPU를 시험한다면 문서상 최소 요건은 Thunderbolt 또는 USB4 인클로저의 AMD RDNA 3+(Radeon RX 7000 이상) 또는 NVIDIA Ampere+(RTX 30 이상) 카드이며, AMD는 Docker 단계를 피할 수 있습니다. 일상 사용에는 통합 메모리가 더 큰 Mac이나 LAN으로 연결한 미니 PC의 RTX GPU가 더 안정적입니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Razer Core가 MacBook Pro에서 작동합니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apple Silicon에서는 작동하지 않습니다. Razer의 Core X V2 페이지에는 "eGPUs not supported by M1 & later Mac devices"라고 적혀 있습니다. 초기형 Razer Core X는 2018년 Thunderbolt 3를 탑재한 Intel Mac용으로 출시되었습니다. Apple Silicon Mac에서 Razer 인클로저를 쓰려면 Razer가 명시하지 않은 비공식 TinyGPU 드라이버에 의존해야 합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'iMac에 외장 GPU를 추가할 수 있습니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apple Silicon iMac에서는 기본 방식으로 불가능하며 한계는 MacBook과 같습니다. Thunderbolt 3를 탑재한 Intel iMac은 구형 macOS에서 eGPU를 지원했습니다. 로컬 LLM이라면 별도 GPU 머신에서 Ollama를 실행하고 LAN으로 연결하십시오.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Mac에서 OCuLink eGPU를 사용할 수 있습니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '아니요. OCuLink 포트가 있는 Mac은 없습니다. OCuLink는 PC와 미니 PC용입니다. Mac에서는 실험적인 TinyGPU 드라이버를 쓰는 Thunderbolt 또는 USB4 eGPU, 또는 LAN으로 제공하는 OCuLink 미니 PC가 선택지입니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apple이 Apple Silicon의 eGPU 지원을 되살릴까요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '가능성이 낮습니다. Apple의 M 시리즈 칩은 GPU, CPU, 메모리를 하나의 패키지에 통합하며, 설계 방향은 확장성이 아니라 통합 메모리입니다. Apple은 eGPU 연산 지원을 복원할 계획을 발표하지 않았습니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'NVIDIA GPU로 추론하고 그 출력을 MacBook으로 전달할 수 있습니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '예, 권장되는 방법입니다. NVIDIA GPU가 있는 Windows 또는 Linux 머신에서 Ollama를 실행하고 LAN에 노출(OLLAMA_HOST=0.0.0.0)한 뒤, MacBook에서 Open WebUI, Cursor, Continue 또는 OpenAI 호환 클라이언트로 연결하십시오. MacBook은 UI를, NVIDIA 머신은 연산을 담당합니다.',
          },
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '프롬프트 바이트',
          item: '[www.promptquorum.com/ko/prompt-bites](https://www.promptquorum.com/ko/prompt-bites)',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'MacBook eGPU와 로컬 AI: 2026년에 무엇이 작동하는가',
          item: '[www.promptquorum.com/ko/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026](https://www.promptquorum.com/ko/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026)',
        },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'MacBook eGPU와 로컬 AI: 2026년에 무엇이 작동하는가', datePublished: '2026-05-26', dateModified: '2026-10-17', url: 'https://www.promptquorum.com/ko/prompt-bites/best-egpu-setup-for-macbook-local-llm-2026', inLanguage: 'ko' },
  },
}
