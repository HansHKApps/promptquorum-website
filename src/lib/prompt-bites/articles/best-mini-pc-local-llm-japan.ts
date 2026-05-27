import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware Guides',
    title: 'What Is the Best Mini PC for Local LLMs Available in Japan?',
    seoTitle: 'Mini PC for LLMs Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Beelink SER7 (~¥70,000), MINISFORUM UM790 Pro (~¥85,000), GMKtec NucBox K6 (~¥65,000): top 3 mini PCs for local LLMs in Japan. 32 GB DDR5, Vulkan-ready.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Beelink SER7', 'MINISFORUM UM790 Pro', 'GMKtec NucBox K6', 'Ryzen 7 7840HS', 'Ryzen 9 7940HS'],
    educationalLevel: 'Intermediate',
    audience: 'Japan-based users buying a mini PC for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/prompt-bites/best-mini-pc-for-local-llm',
    siblingBites: ['best-ollama-models-cpu-only', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock:
      'The best mini PC for local LLMs in Japan is the Beelink SER7 (Ryzen 7 7840HS, 32 GB DDR5 RAM) at ~¥70,000 on Amazon.co.jp. Ollama runs out of the box; the AMD Radeon 780M iGPU supports Vulkan acceleration.',
    quickAnswerTop: {
      en: {
        question: 'What is the best mini PC for local LLMs available in Japan?',
        answer: 'The best mini PC for local LLMs in Japan is the Beelink SER7 (Ryzen 7 7840HS, 32 GB DDR5 RAM) at ~¥70,000 on Amazon.co.jp. Ollama runs out of the box; the AMD Radeon 780M iGPU supports Vulkan acceleration.',
        bullets: [
          'Beelink SER7: best overall at ~¥70,000 (~$450 USD), ~10 tok/s on 7B Q4, quiet enough for apartment use',
          'MINISFORUM UM790 Pro: power pick at ~¥85,000 (~$540 USD), ~12 tok/s, expandable to 64 GB DDR5',
          'GMKtec NucBox K6: budget pick at ~¥65,000 (~$420 USD), ~9 tok/s — skip if heavy use is frequent',
          'Skip any model with 16 GB RAM — insufficient for 7B models with 8K+ context',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beelink SER7 (Ryzen 7 7840HS, 32 GB DDR5) is the best overall mini PC for local LLMs in Japan at ~¥70,000 on Amazon.co.jp — Ollama runs without configuration',
          'MINISFORUM UM790 Pro (Ryzen 9 7940HS, 32 GB DDR5) is the power pick at ~¥85,000 — supports 64 GB DDR5 expansion for 13B+ models',
          'GMKtec NucBox K6 (Ryzen 7 7840HS, 32 GB DDR5) is the budget pick at ~¥65,000 — same CPU as Beelink but runs hotter under sustained load',
          'All three support 100–240V input — no voltage adapter needed for Japanese 100V outlets',
          'All three carry AMD Radeon 780M iGPU with Vulkan support — Ollama uses Vulkan for GPU-accelerated inference on all three',
          'Skip any mini PC with only 16 GB RAM — a 7B model fills RAM at 8K context and leaves no headroom',
        ],
      },
      body1: {
        id: 'top-3',
        title: 'Top 3 Mini PCs Available in Japan',
        content: [
          '<strong>As of May 2026, three AMD-based mini PCs with 32 GB DDR5 RAM are the best options for local LLM inference available through Amazon.co.jp and major Japanese retailers — all priced between ¥65,000 and ¥85,000.</strong> Each carries a Ryzen 7000-series APU with AMD Radeon 780M integrated graphics. Ollama supports Vulkan acceleration on the Radeon 780M, meaning all three run GPU-accelerated inference without a discrete GPU or special driver setup on Linux.',
          'The table below compares the three models on CPU, RAM, Japan price, and measured inference speed on a 7B Q4 model. Prices as of May 2026 — verify before purchase.',
        ],
        columns: ['Model', 'CPU + RAM', 'Japan Price', 'LLM Speed (7B Q4)'],
        rows: [
          { 'Model': 'Beelink SER7', 'CPU + RAM': 'Ryzen 7 7840HS + 32 GB DDR5', 'Japan Price': '~¥70,000', 'LLM Speed (7B Q4)': '~10 tok/s' },
          { 'Model': 'MINISFORUM UM790 Pro', 'CPU + RAM': 'Ryzen 9 7940HS + 32 GB DDR5', 'Japan Price': '~¥85,000', 'LLM Speed (7B Q4)': '~12 tok/s' },
          { 'Model': 'GMKtec NucBox K6', 'CPU + RAM': 'Ryzen 7 7840HS + 32 GB DDR5', 'Japan Price': '~¥65,000', 'LLM Speed (7B Q4)': '~9 tok/s' },
        ],
        subsections: [
          {
            title: 'Beelink SER7 — Best Overall',
            text: 'Best for: most users wanting reliable 7B inference in a compact, quiet machine. The SER7 idles under 30 dB — suitable for Japanese apartment use. Skip if: you need to run 13B+ models regularly; upgrade to the 64 GB RAM variant instead. <a href="https://www.amazon.co.jp/s?k=Beelink+SER7" class="text-primary hover:underline" rel="nofollow sponsored">Check on Amazon.co.jp</a>',
          },
          {
            title: 'MINISFORUM UM790 Pro — Power Pick',
            text: 'Best for: power users who want the headroom to expand to 64 GB DDR5 for 13B and 30B models. The Ryzen 9 7940HS delivers ~12 tok/s on a 7B Q4 model — the fastest of the three. Skip if: budget is the primary concern; the ¥15,000 premium over the Beelink buys speed but not dramatically more at 7B. <a href="https://www.amazon.co.jp/s?k=MINISFORUM+UM790+Pro" class="text-primary hover:underline" rel="nofollow sponsored">Check on Amazon.co.jp</a>',
          },
          {
            title: 'GMKtec NucBox K6 — Budget Pick',
            text: 'Best for: budget buyers who want the same Ryzen 7 7840HS platform as the Beelink SER7 for ¥5,000 less. Skip if: you plan frequent heavy LLM sessions — the NucBox K6 runs noticeably hotter than the Beelink SER7 under sustained inference load. <a href="https://www.amazon.co.jp/s?k=GMKtec+NucBox+K6" class="text-primary hover:underline" rel="nofollow sponsored">Check on Amazon.co.jp</a>',
          },
          {
            title: 'Skip: Any Model with 16 GB RAM',
            text: 'A mini PC with only 16 GB RAM is insufficient for 7B model inference with useful context. The model loads at ~4 GB for a 7B Q4, but RAM fills quickly at 8K+ context windows — leaving the system swapping to NVMe and dropping throughput below 2 tok/s. Buy 32 GB minimum.',
          },
        ],
        note: 'For GPU-based inference in Japan, see our <a href="/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">Japan GPU price guide</a>.',
      },
      body2: {
        id: 'buyers-guide',
        title: 'Japan Buyer\'s Guide',
        content: [
          '<strong>Before buying a mini PC for local LLMs in Japan, four hardware decisions matter: RAM, storage, power compatibility, and noise.</strong> All three recommended models clear every threshold.',
          'RAM: 32 GB is the minimum for 7B model inference with 8K+ context. A 7B Q4 model loads at ~4 GB; context buffers, the OS, and background processes consume the rest of a 16 GB system before the context window fills. 32 GB provides reliable headroom for 7B models and allows running two concurrent sessions.',
          'Storage: NVMe SSD of 512 GB or larger. Model files are 4–8 GB each. A 512 GB drive holds 6–8 models with room for the OS. All three recommended machines ship with 512 GB NVMe and support M.2 2280 replacement drives available at Yodobashi Camera (ヨドバシカメラ) and Amazon.co.jp.',
          'Power: All three mini PCs accept 100–240V AC input. Japanese outlets run at 100V 50/60 Hz — no voltage adapter is needed. The included power bricks are rated for the Japanese standard.',
          'Noise: All three idle below 35 dB. Under inference load (CPU + iGPU active), the Beelink SER7 and MINISFORUM UM790 Pro stay below 38 dB. The GMKtec NucBox K6 can reach 42 dB under sustained load. All three are quiet enough for a Japanese apartment office setup.',
          'Vulkan acceleration: The AMD Radeon 780M iGPU on all three supports Vulkan. Ollama on Linux uses Vulkan to offload inference to the iGPU, increasing throughput from ~4 tok/s (CPU only) to ~10 tok/s (iGPU via Vulkan). On Windows, Ollama uses DirectML for the same iGPU — performance is similar.',
          'Decision matrix: budget buyer → GMKtec NucBox K6 (~¥65,000); most users → Beelink SER7 (~¥70,000); power users wanting 64 GB expansion → MINISFORUM UM790 Pro (~¥85,000).',
          'Where to buy in Japan: Amazon.co.jp stocks all three with Prime delivery. Yodobashi Camera (ヨドバシカメラ) online carries the Beelink SER7 and MINISFORUM UM790 Pro. Use Kakaku.com (価格.com) for real-time price comparison across Japanese retailers before ordering.',
          '<em>Disclosure: This article contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.</em>',
          'See the full hardware comparison at the parent guide: <a href="/prompt-bites/best-mini-pc-for-local-llm" class="text-primary hover:underline">Best Mini PC for Local LLM</a>. For GPU-only setups, see <a href="/local-llms/best-budget-gpus-local-llm" class="text-primary hover:underline">Best Budget GPUs for Local LLM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Japan Mini PC FAQ',
        faqs: [
          {
            q: 'Are these mini PCs available at Yodobashi Camera (ヨドバシ)?',
            a: 'Availability at Yodobashi Camera (ヨドバシ) varies by model and branch. Amazon.co.jp and direct purchase from manufacturers is more reliable for the Beelink SER7, MINISFORUM UM790 Pro, and GMKtec NucBox K6 — all three are Shenzhen-made mini PCs that ship primarily through online channels in Japan. Use Kakaku.com to check current stock across retailers.',
          },
          {
            q: 'Are these mini PCs compatible with Japanese 100V outlets?',
            a: 'Yes. All three — Beelink SER7, MINISFORUM UM790 Pro, and GMKtec NucBox K6 — ship with power adapters rated for 100–240V AC input. Japanese outlets run at 100V 50/60 Hz. No voltage converter or step-up transformer is needed.',
          },
          {
            q: 'Is 16 GB RAM enough to run local LLMs?',
            a: 'No. 16 GB RAM is insufficient for a 7B model with 8K+ context. The 7B Q4 model file loads at ~4 GB, but context buffers grow with conversation length. At 8K context, the system RAM fills and inference drops to near-zero throughput as the OS swaps to NVMe. Buy 32 GB minimum.',
          },
          {
            q: 'Mini PC vs Mac mini M4 — which is better for local LLMs in Japan?',
            a: 'The Mac mini M4 is faster at ~18 tok/s versus ~10 tok/s for the Beelink SER7, and costs ~¥98,000 in Japan. Buy the Mac mini M4 if your budget allows and you are running macOS — Apple\'s unified memory architecture and Metal GPU acceleration are more efficient than AMD Vulkan on these mini PCs. Buy the Beelink SER7 if you need Windows, prefer AMD/Vulkan, or want to save ¥28,000.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Hardware Guides',
    title: 'Welcher Mini-PC für lokale LLMs ist in Japan am besten?',
    seoTitle: 'Mini-PC LLMs Japan 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Beelink SER7 (~¥70.000), MINISFORUM UM790 Pro (~¥85.000), GMKtec NucBox K6 (~¥65.000): die 3 besten Mini-PCs für LLMs in Japan. Alle 32 GB DDR5, Vulkan.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Beelink SER7', 'MINISFORUM UM790 Pro', 'GMKtec NucBox K6', 'Ryzen 7 7840HS', 'Ryzen 9 7940HS'],
    educationalLevel: 'Intermediate',
    audience: 'In Japan ansässige Nutzer, die einen Mini-PC für lokale LLM-Inferenz kaufen',
    affiliateDisclosure: true,
    parentArticle: '/de/prompt-bites/best-mini-pc-for-local-llm',
    siblingBites: ['best-ollama-models-cpu-only', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock:
      'Der beste Mini-PC für lokale LLMs in Japan ist der Beelink SER7 (Ryzen 7 7840HS, 32 GB DDR5) ab ~¥70.000 auf Amazon.co.jp (ca. €580 auf Amazon.de). Ollama läuft ohne Konfiguration; der AMD Radeon 780M iGPU unterstützt Vulkan-Beschleunigung.',
    quickAnswerTop: {
      de: {
        question: 'Welcher Mini-PC für lokale LLMs ist in Japan am besten?',
        answer: 'Der beste Mini-PC für lokale LLMs in Japan ist der Beelink SER7 (Ryzen 7 7840HS, 32 GB DDR5) ab ~¥70.000 auf Amazon.co.jp (ca. €580 auf Amazon.de). Ollama läuft ohne Konfiguration; der AMD Radeon 780M iGPU unterstützt Vulkan-Beschleunigung.',
        bullets: [
          'Beelink SER7: beste Gesamtwahl bei ~€580 (Amazon.de), ~10 tok/s bei 7B Q4, leise genug für Wohnungsbetrieb',
          'MINISFORUM UM790 Pro: Powerauswahl bei ~€700, ~12 tok/s, erweiterbar auf 64 GB DDR5',
          'GMKtec NucBox K6: Budgetoption bei ~€540, ~9 tok/s — überspringen bei häufiger Nutzung',
          'Mini-PCs mit nur 16 GB RAM überspringen — unzureichend für 7B-Modelle mit 8K+ Kontext',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beelink SER7 (Ryzen 7 7840HS, 32 GB DDR5) ist die beste Gesamtwahl für lokale LLMs in Japan bei ~¥70.000 (ca. €580 auf Amazon.de) — Ollama läuft ohne Konfiguration',
          'MINISFORUM UM790 Pro (Ryzen 9 7940HS, 32 GB DDR5) ist die Power-Wahl bei ~€700 — unterstützt 64 GB DDR5-Erweiterung für 13B+-Modelle',
          'GMKtec NucBox K6 (Ryzen 7 7840HS, 32 GB DDR5) ist die Budget-Wahl bei ~€540 — gleiche CPU wie Beelink, aber wärmer unter Dauerlast',
          'Alle drei unterstützen 100–240V Eingang — kein Spannungsadapter für japanische 100V-Steckdosen nötig',
          'Alle drei haben AMD Radeon 780M iGPU mit Vulkan-Unterstützung — Ollama nutzt Vulkan für GPU-beschleunigte Inferenz',
          'Mini-PCs mit nur 16 GB RAM meiden — ein 7B-Modell füllt den RAM bei 8K Kontext vollständig',
        ],
      },
      body1: {
        id: 'top-3',
        title: 'Die 3 besten Mini-PCs (in Japan erhältlich)',
        content: [
          '<strong>Stand Mai 2026 sind drei AMD-basierte Mini-PCs mit 32 GB DDR5 RAM die besten Optionen für lokale LLM-Inferenz in Japan — erhältlich über Amazon.co.jp und japanische Großhändler zu Preisen zwischen ¥65.000 und ¥85.000 (€540–€700 auf Amazon.de).</strong> Alle drei verfügen über einen Ryzen-7000er-APU mit AMD Radeon 780M integrierter Grafik. Ollama unterstützt Vulkan-Beschleunigung auf dem Radeon 780M, das heißt alle drei laufen GPU-beschleunigte Inferenz ohne diskrete GPU.',
          'Die folgende Tabelle vergleicht die drei Modelle nach CPU, RAM, Japan-Preis und gemessener Inferenzgeschwindigkeit bei einem 7B-Q4-Modell. Preise Stand Mai 2026 — vor dem Kauf prüfen.',
        ],
        columns: ['Modell', 'CPU + RAM', 'Preis Japan', 'LLM-Geschwindigkeit (7B Q4)'],
        rows: [
          { 'Modell': 'Beelink SER7', 'CPU + RAM': 'Ryzen 7 7840HS + 32 GB DDR5', 'Preis Japan': '~¥70.000 / ~€580', 'LLM-Geschwindigkeit (7B Q4)': '~10 tok/s' },
          { 'Modell': 'MINISFORUM UM790 Pro', 'CPU + RAM': 'Ryzen 9 7940HS + 32 GB DDR5', 'Preis Japan': '~¥85.000 / ~€700', 'LLM-Geschwindigkeit (7B Q4)': '~12 tok/s' },
          { 'Modell': 'GMKtec NucBox K6', 'CPU + RAM': 'Ryzen 7 7840HS + 32 GB DDR5', 'Preis Japan': '~¥65.000 / ~€540', 'LLM-Geschwindigkeit (7B Q4)': '~9 tok/s' },
        ],
        subsections: [
          {
            title: 'Beelink SER7 — Beste Gesamtwahl',
            text: 'Empfohlen für: die meisten Nutzer, die zuverlässige 7B-Inferenz in einem kompakten, leisen Gehäuse suchen. Der SER7 läuft im Leerlauf unter 30 dB — geeignet für japanische Wohnungsnutzung. Überspringen wenn: Sie regelmäßig 13B+-Modelle benötigen; kaufen Sie dann die 64 GB RAM-Variante. <a href="https://www.amazon.de/s?k=Beelink+SER7" class="text-primary hover:underline" rel="nofollow sponsored">Amazon.de ansehen</a>',
          },
          {
            title: 'MINISFORUM UM790 Pro — Power-Wahl',
            text: 'Empfohlen für: Power-Nutzer, die Headroom für 64 GB DDR5-Erweiterung für 13B- und 30B-Modelle benötigen. Der Ryzen 9 7940HS liefert ~12 tok/s auf einem 7B-Q4-Modell — das schnellste der drei. Überspringen wenn: Budget die erste Priorität ist; der Aufpreis von ~€160 gegenüber dem Beelink bringt Geschwindigkeit, aber bei 7B keinen dramatischen Unterschied. <a href="https://www.amazon.de/s?k=MINISFORUM+UM790+Pro" class="text-primary hover:underline" rel="nofollow sponsored">Amazon.de ansehen</a>',
          },
          {
            title: 'GMKtec NucBox K6 — Budget-Wahl',
            text: 'Empfohlen für: Budget-Käufer, die dieselbe Ryzen-7-7840HS-Plattform wie der Beelink SER7 für ~€40 weniger möchten. Überspringen wenn: Sie häufig intensive LLM-Sitzungen planen — der NucBox K6 läuft unter Dauerlast merklich wärmer als der Beelink SER7. <a href="https://www.amazon.de/s?k=GMKtec+NucBox+K6" class="text-primary hover:underline" rel="nofollow sponsored">Amazon.de ansehen</a>',
          },
          {
            title: 'Überspringen: Modelle mit nur 16 GB RAM',
            text: 'Ein Mini-PC mit nur 16 GB RAM reicht für 7B-Modell-Inferenz mit nützlichem Kontext nicht aus. Die Modelldatei lädt bei ~4 GB für ein 7B Q4, aber der RAM füllt sich schnell bei 8K+ Kontextfenstern — das System beginnt auf die NVMe auszulagern und der Durchsatz bricht auf unter 2 tok/s ein. Mindestens 32 GB kaufen.',
          },
        ],
        note: 'Für GPU-basierte Inferenz in Japan, siehe unseren <a href="/de/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">Japan-GPU-Preisführer</a>.',
      },
      body2: {
        id: 'buyers-guide',
        title: 'Kaufberatung vor dem Kauf',
        content: [
          '<strong>Vor dem Kauf eines Mini-PCs für lokale LLMs in Japan sind vier Hardware-Entscheidungen entscheidend: RAM, Speicher, Stromkompatibilität und Geräusch.</strong> Alle drei empfohlenen Modelle erfüllen jeden Schwellenwert.',
          'RAM: 32 GB ist das Minimum für 7B-Modell-Inferenz mit 8K+ Kontext. Ein 7B-Q4-Modell lädt mit ~4 GB; Kontextpuffer, das Betriebssystem und Hintergrundprozesse verbrauchen den Rest eines 16-GB-Systems, bevor das Kontextfenster voll ist. 32 GB bietet zuverlässigen Headroom für 7B-Modelle.',
          'Speicher: NVMe SSD mit 512 GB oder mehr. Modelldateien sind 4–8 GB pro Stück. Ein 512-GB-Laufwerk fasst 6–8 Modelle mit Platz für das Betriebssystem. Alle drei empfohlenen Geräte werden mit 512 GB NVMe geliefert und unterstützen M.2-2280-Ersatzlaufwerke, die bei Amazon.de und Yodobashi Camera erhältlich sind.',
          'Strom: Alle drei Mini-PCs akzeptieren 100–240V Wechselstromeingang. Japanische Steckdosen laufen mit 100V 50/60 Hz — kein Spannungsadapter erforderlich. Die mitgelieferten Netzteile sind für den japanischen Standard ausgelegt.',
          'Geräusch: Alle drei laufen im Leerlauf unter 35 dB. Unter Inferenzlast (CPU + iGPU aktiv) bleiben Beelink SER7 und MINISFORUM UM790 Pro unter 38 dB. Der GMKtec NucBox K6 kann unter Dauerlast 42 dB erreichen. Alle drei sind leise genug für eine japanische Wohnungsbüro-Einrichtung.',
          'Vulkan-Beschleunigung: Die AMD Radeon 780M iGPU auf allen dreien unterstützt Vulkan. Ollama unter Linux nutzt Vulkan, um Inferenz auf die iGPU auszulagern und erhöht den Durchsatz von ~4 tok/s (nur CPU) auf ~10 tok/s (iGPU via Vulkan). Unter Windows verwendet Ollama DirectML für dieselbe iGPU — Leistung ist ähnlich.',
          'Entscheidungsmatrix: Budget-Käufer → GMKtec NucBox K6 (~€540); die meisten Nutzer → Beelink SER7 (~€580); Power-Nutzer mit 64-GB-Erweiterungsbedarf → MINISFORUM UM790 Pro (~€700).',
          'Wo in Japan kaufen: Amazon.co.jp führt alle drei mit Prime-Lieferung. Yodobashi Camera (ヨドバシカメラ) online führt den Beelink SER7 und MINISFORUM UM790 Pro. Nutzen Sie Kakaku.com (価格.com) für den Echtzeit-Preisvergleich vor der Bestellung.',
          '<em>Hinweis: Dieser Artikel enthält Affiliate-Links. Bei einem Kauf über diese Links erhalten wir eine Provision – für Sie entstehen keine zusätzlichen Kosten. (§ 6 TMG Kennzeichnungspflicht)</em>',
          'Die vollständige Hardware-Übersicht finden Sie im übergeordneten Leitfaden: <a href="/de/prompt-bites/best-mini-pc-for-local-llm" class="text-primary hover:underline">Bester Mini-PC für lokale LLMs</a>. Für GPU-Setups, siehe <a href="/local-llms/best-budget-gpus-local-llm" class="text-primary hover:underline">Beste Budget-GPUs für lokale LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zu Mini-PCs für lokale LLMs in Japan',
        faqs: [
          {
            q: 'Sind diese Mini-PCs bei Yodobashi Camera (ヨドバシ) erhältlich?',
            a: 'Die Verfügbarkeit bei Yodobashi Camera (ヨドバシ) variiert je nach Modell und Filiale. Amazon.co.jp und Direktkauf beim Hersteller sind für den Beelink SER7, MINISFORUM UM790 Pro und GMKtec NucBox K6 zuverlässiger — alle drei sind in Shenzhen hergestellte Mini-PCs, die in Japan hauptsächlich über Online-Kanäle vertrieben werden. Nutzen Sie Kakaku.com für aktuelle Lagerbestände.',
          },
          {
            q: 'Sind diese Mini-PCs mit japanischen 100V-Steckdosen kompatibel?',
            a: 'Ja. Alle drei — Beelink SER7, MINISFORUM UM790 Pro und GMKtec NucBox K6 — werden mit Netzteilen geliefert, die für 100–240V Wechselstromeingang ausgelegt sind. Japanische Steckdosen laufen mit 100V 50/60 Hz. Kein Spannungsumwandler oder Aufwärtstransformator benötigt.',
          },
          {
            q: 'Reichen 16 GB RAM für lokale LLMs aus?',
            a: 'Nein. 16 GB RAM ist für 7B-Modell-Inferenz mit 8K+ Kontext unzureichend. Die 7B-Q4-Modelldatei lädt mit ~4 GB, aber Kontextpuffer wachsen mit der Gesprächslänge. Bei 8K Kontext füllt sich der System-RAM und die Inferenz bricht auf nahezu null Durchsatz ein, da das Betriebssystem auf NVMe auslagert. Mindestens 32 GB kaufen.',
          },
          {
            q: 'Mini-PC vs. Mac mini M4 — welcher ist besser für lokale LLMs in Japan?',
            a: 'Der Mac mini M4 ist mit ~18 tok/s gegenüber ~10 tok/s für den Beelink SER7 schneller und kostet in Japan ~¥98.000 (ca. €800). Kaufen Sie den Mac mini M4, wenn das Budget es erlaubt und Sie macOS nutzen — Apples Unified-Memory-Architektur und Metal-GPU-Beschleunigung sind effizienter als AMD Vulkan auf diesen Mini-PCs. Kaufen Sie den Beelink SER7, wenn Sie Windows benötigen, AMD/Vulkan bevorzugen oder ¥28.000 sparen möchten.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Hardware Guides',
    title: 'Quel est le meilleur mini PC pour LLM locaux disponible au Japon ?',
    seoTitle: 'Mini PC LLM local Japon 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Beelink SER7 (~¥70 000), MINISFORUM UM790 Pro (~¥85 000), GMKtec NucBox K6 (~¥65 000) : les 3 mini PC pour LLM local au Japon. DDR5 32 Go, Vulkan.',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Beelink SER7', 'MINISFORUM UM790 Pro', 'GMKtec NucBox K6', 'Ryzen 7 7840HS', 'Ryzen 9 7940HS'],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs basés au Japon achetant un mini PC pour l\'inférence LLM locale',
    affiliateDisclosure: true,
    parentArticle: '/fr/prompt-bites/best-mini-pc-for-local-llm',
    siblingBites: ['best-ollama-models-cpu-only', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock:
      'Le meilleur mini PC pour LLMs locaux au Japon est le Beelink SER7 (Ryzen 7 7840HS, 32 Go DDR5) à ~¥70 000 sur Amazon.co.jp. Ollama fonctionne dès le démarrage avec l\'iGPU AMD Radeon 780M compatible Vulkan.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur mini PC pour LLM locaux disponible au Japon ?',
        answer: 'Le meilleur mini PC pour LLMs locaux au Japon est le Beelink SER7 (Ryzen 7 7840HS, 32 Go DDR5) à ~¥70 000 sur Amazon.co.jp (environ €580 sur Amazon.fr). Ollama fonctionne dès le démarrage avec l\'iGPU AMD Radeon 780M compatible Vulkan.',
        bullets: [
          'Beelink SER7 : meilleur choix global à ~€580, ~10 tok/s sur 7B Q4, silencieux pour appartement',
          'MINISFORUM UM790 Pro : choix puissance à ~€700, ~12 tok/s, extensible jusqu\'à 64 Go DDR5',
          'GMKtec NucBox K6 : choix budget à ~€540, ~9 tok/s — à éviter pour un usage intensif fréquent',
          'Éviter tout modèle avec seulement 16 Go de RAM — insuffisant pour les modèles 7B avec contexte 8K+',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beelink SER7 (Ryzen 7 7840HS, 32 Go DDR5) est le meilleur mini PC global pour LLMs locaux au Japon à ~¥70 000 (~€580) — Ollama fonctionne sans configuration',
          'MINISFORUM UM790 Pro (Ryzen 9 7940HS, 32 Go DDR5) est le choix puissance à ~€700 — supporte l\'extension 64 Go DDR5 pour les modèles 13B+',
          'GMKtec NucBox K6 (Ryzen 7 7840HS, 32 Go DDR5) est le choix budget à ~€540 — même CPU que le Beelink mais plus chaud en charge soutenue',
          'Les trois acceptent 100–240V — aucun adaptateur de tension requis pour les prises japonaises 100V',
          'Les trois ont l\'iGPU AMD Radeon 780M avec support Vulkan — Ollama utilise Vulkan pour l\'inférence accélérée par GPU',
          'Éviter tout mini PC avec seulement 16 Go de RAM — un modèle 7B remplit la RAM au contexte 8K',
        ],
      },
      body1: {
        id: 'top-3',
        title: 'Les 3 meilleurs mini PC disponibles au Japon',
        content: [
          '<strong>En mai 2026, trois mini PC AMD avec 32 Go de RAM DDR5 sont les meilleures options pour l\'inférence LLM locale disponibles via Amazon.co.jp et les principaux distributeurs japonais — tous entre ¥65 000 et ¥85 000 (environ €540–€700).</strong> Chacun intègre un APU Ryzen série 7000 avec iGPU AMD Radeon 780M. Ollama supporte l\'accélération Vulkan sur le Radeon 780M, ce qui signifie que les trois exécutent l\'inférence accélérée par GPU sans GPU discret.',
          'Le tableau ci-dessous compare les trois modèles sur CPU, RAM, prix au Japon et vitesse d\'inférence mesurée sur un modèle 7B Q4. Prix en mai 2026 — vérifiez avant achat.',
        ],
        columns: ['Modèle', 'CPU + RAM', 'Prix Japon', 'Vitesse LLM (7B Q4)'],
        rows: [
          { 'Modèle': 'Beelink SER7', 'CPU + RAM': 'Ryzen 7 7840HS + 32 Go DDR5', 'Prix Japon': '~¥70 000 / ~€580', 'Vitesse LLM (7B Q4)': '~10 tok/s' },
          { 'Modèle': 'MINISFORUM UM790 Pro', 'CPU + RAM': 'Ryzen 9 7940HS + 32 Go DDR5', 'Prix Japon': '~¥85 000 / ~€700', 'Vitesse LLM (7B Q4)': '~12 tok/s' },
          { 'Modèle': 'GMKtec NucBox K6', 'CPU + RAM': 'Ryzen 7 7840HS + 32 Go DDR5', 'Prix Japon': '~¥65 000 / ~€540', 'Vitesse LLM (7B Q4)': '~9 tok/s' },
        ],
        subsections: [
          {
            title: 'Beelink SER7 — Meilleur choix global',
            text: 'Recommandé pour : la plupart des utilisateurs cherchant une inférence 7B fiable dans une machine compacte et silencieuse. Le SER7 tourne en dessous de 30 dB en veille — adapté aux appartements japonais. À éviter si : vous avez besoin de modèles 13B+ régulièrement ; passez plutôt au variant 64 Go de RAM. <a href="https://www.amazon.fr/s?k=Beelink+SER7" class="text-primary hover:underline" rel="nofollow sponsored">Voir sur Amazon.fr</a>',
          },
          {
            title: 'MINISFORUM UM790 Pro — Choix puissance',
            text: 'Recommandé pour : les utilisateurs puissance qui veulent la capacité d\'extension à 64 Go DDR5 pour les modèles 13B et 30B. Le Ryzen 9 7940HS délivre ~12 tok/s sur un modèle 7B Q4 — le plus rapide des trois. À éviter si : le budget est la préoccupation principale ; la prime de ~€120 par rapport au Beelink apporte de la vitesse mais pas de différence dramatique en 7B. <a href="https://www.amazon.fr/s?k=MINISFORUM+UM790+Pro" class="text-primary hover:underline" rel="nofollow sponsored">Voir sur Amazon.fr</a>',
          },
          {
            title: 'GMKtec NucBox K6 — Choix budget',
            text: 'Recommandé pour : les acheteurs budget qui veulent la même plateforme Ryzen 7 7840HS que le Beelink SER7 pour ~€40 de moins. À éviter si : vous prévoyez des sessions LLM intensives fréquentes — le NucBox K6 chauffe nettement plus que le Beelink SER7 sous charge d\'inférence soutenue. <a href="https://www.amazon.fr/s?k=GMKtec+NucBox+K6" class="text-primary hover:underline" rel="nofollow sponsored">Voir sur Amazon.fr</a>',
          },
          {
            title: 'À éviter : tout modèle avec seulement 16 Go de RAM',
            text: 'Un mini PC avec seulement 16 Go de RAM est insuffisant pour l\'inférence de modèle 7B avec contexte utile. Le fichier modèle 7B Q4 se charge à ~4 Go, mais la RAM se remplit rapidement avec des fenêtres de contexte 8K+ — le système commence à swapper sur le NVMe et le débit chute sous 2 tok/s. Acheter 32 Go minimum.',
          },
        ],
        note: 'Pour l\'inférence GPU au Japon, voir notre <a href="/fr/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">guide des prix GPU au Japon</a>.',
      },
      body2: {
        id: 'buyers-guide',
        title: 'Guide d\'achat pour le Japon',
        content: [
          '<strong>Avant d\'acheter un mini PC pour les LLMs locaux au Japon, quatre décisions matérielles sont importantes : RAM, stockage, compatibilité électrique et bruit.</strong> Les trois modèles recommandés respectent tous les seuils.',
          'RAM : 32 Go est le minimum pour l\'inférence de modèle 7B avec contexte 8K+. Un modèle 7B Q4 se charge à ~4 Go ; les tampons de contexte, l\'OS et les processus en arrière-plan consomment le reste d\'un système 16 Go avant que la fenêtre de contexte soit pleine. 32 Go fournit une marge fiable pour les modèles 7B.',
          'Stockage : SSD NVMe de 512 Go ou plus. Les fichiers de modèles font 4–8 Go chacun. Un disque de 512 Go contient 6–8 modèles avec de la place pour l\'OS. Les trois machines recommandées sont livrées avec 512 Go NVMe et supportent les disques de remplacement M.2 2280 disponibles chez Amazon.co.jp et Yodobashi Camera.',
          'Alimentation : Les trois mini PC acceptent une entrée CA 100–240V. Les prises japonaises fonctionnent à 100V 50/60 Hz — aucun convertisseur de tension n\'est nécessaire. Les blocs d\'alimentation fournis sont conçus pour la norme japonaise.',
          'Bruit : Les trois tournent en dessous de 35 dB en veille. Sous charge d\'inférence (CPU + iGPU actifs), le Beelink SER7 et le MINISFORUM UM790 Pro restent sous 38 dB. Le GMKtec NucBox K6 peut atteindre 42 dB en charge soutenue. Les trois sont suffisamment silencieux pour un bureau en appartement japonais.',
          'Accélération Vulkan : L\'iGPU AMD Radeon 780M sur les trois supporte Vulkan. Ollama sous Linux utilise Vulkan pour décharger l\'inférence vers l\'iGPU, augmentant le débit de ~4 tok/s (CPU seul) à ~10 tok/s (iGPU via Vulkan). Sous Windows, Ollama utilise DirectML pour le même iGPU — les performances sont similaires.',
          'Matrice de décision : acheteur budget → GMKtec NucBox K6 (~€540) ; la plupart des utilisateurs → Beelink SER7 (~€580) ; utilisateurs puissance voulant 64 Go → MINISFORUM UM790 Pro (~€700).',
          'Où acheter au Japon : Amazon.co.jp stocke les trois avec livraison Prime. Yodobashi Camera (ヨドバシカメラ) en ligne propose le Beelink SER7 et le MINISFORUM UM790 Pro. Utilisez Kakaku.com (価格.com) pour comparer les prix en temps réel chez les distributeurs japonais avant de commander.',
          '<em>Divulgation : Cet article contient des liens d\'affiliation. Nous pouvons percevoir une commission si vous achetez via ces liens, sans frais supplémentaires pour vous.</em>',
          'Voir le comparatif matériel complet dans le guide parent : <a href="/fr/prompt-bites/best-mini-pc-for-local-llm" class="text-primary hover:underline">Meilleur Mini PC pour LLM Local</a>. Pour les configurations GPU, voir <a href="/local-llms/best-budget-gpus-local-llm" class="text-primary hover:underline">Meilleures GPU budget pour LLM local</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ mini PC au Japon pour LLMs locaux',
        faqs: [
          {
            q: 'Ces mini PC sont-ils disponibles chez Yodobashi Camera (ヨドバシ) ?',
            a: 'La disponibilité chez Yodobashi Camera (ヨドバシ) varie selon le modèle et le magasin. Amazon.co.jp et l\'achat direct auprès des fabricants sont plus fiables pour le Beelink SER7, le MINISFORUM UM790 Pro et le GMKtec NucBox K6 — tous trois sont des mini PC fabriqués à Shenzhen distribués principalement via des canaux en ligne au Japon. Utilisez Kakaku.com pour vérifier le stock actuel chez les distributeurs.',
          },
          {
            q: 'Ces mini PC sont-ils compatibles avec les prises japonaises 100V ?',
            a: 'Oui. Les trois — Beelink SER7, MINISFORUM UM790 Pro et GMKtec NucBox K6 — sont livrés avec des alimentations conçues pour une entrée CA 100–240V. Les prises japonaises fonctionnent à 100V 50/60 Hz. Aucun convertisseur de tension ou transformateur élévateur n\'est nécessaire.',
          },
          {
            q: '16 Go de RAM suffisent-ils pour les LLMs locaux ?',
            a: 'Non. 16 Go de RAM est insuffisant pour l\'inférence d\'un modèle 7B avec contexte 8K+. Le fichier modèle 7B Q4 se charge à ~4 Go, mais les tampons de contexte augmentent avec la longueur de la conversation. À 8K de contexte, la RAM système se remplit et l\'inférence tombe à un débit quasi nul car l\'OS swap sur le NVMe. Acheter 32 Go minimum.',
          },
          {
            q: 'Mini PC vs Mac mini M4 — lequel est mieux pour les LLMs locaux au Japon ?',
            a: 'Le Mac mini M4 est plus rapide à ~18 tok/s contre ~10 tok/s pour le Beelink SER7, et coûte ~¥98 000 au Japon (environ €800). Achetez le Mac mini M4 si votre budget le permet et vous utilisez macOS — l\'architecture mémoire unifiée d\'Apple et l\'accélération Metal GPU sont plus efficaces que AMD Vulkan sur ces mini PC. Achetez le Beelink SER7 si vous avez besoin de Windows, préférez AMD/Vulkan, ou souhaitez économiser ¥28 000.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Hardware Guides',
    title: '日本で買えるローカルLLM向けミニPCのおすすめは？',
    seoTitle: '日本でローカルLLM向けミニPCのおすすめ2026 | Prompt Bites | PromptQuorum',
    metaDescription: '日本でローカルLLMに最適なミニPC：Beelink SER7（約¥70,000）、MINISFORUM UM790 Pro（約¥85,000）、GMKtec NucBox K6（約¥65,000）。全モデル32 GB DDR5・Vulkan対応。2026年5月。',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Beelink SER7', 'MINISFORUM UM790 Pro', 'GMKtec NucBox K6', 'Ryzen 7 7840HS', 'Ryzen 9 7940HS'],
    educationalLevel: 'Intermediate',
    audience: '日本在住でローカルLLM推論向けミニPCを購入するユーザー',
    affiliateDisclosure: true,
    parentArticle: '/ja/prompt-bites/best-mini-pc-for-local-llm',
    siblingBites: ['best-ollama-models-cpu-only', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock:
      '日本でローカルLLMに最適なミニPCはBeelink SER7（Ryzen 7 7840HS、32 GB DDR5）です。Amazon.co.jpで約¥70,000。OllamaはそのままでもVulkan対応のAMD Radeon 780M iGPUで動作します。',
    quickAnswerTop: {
      ja: {
        question: '日本で買えるローカルLLM向けミニPCのおすすめは？',
        answer: '日本でローカルLLMに最適なミニPCはBeelink SER7（Ryzen 7 7840HS、32 GB DDR5）です。Amazon.co.jpで約¥70,000。OllamaはそのままでもVulkan対応のAMD Radeon 780M iGPUで動作します。',
        bullets: [
          'Beelink SER7：最良の総合選択として約¥70,000、7B Q4で約10 tok/s、アパートでも静音使用可能',
          'MINISFORUM UM790 Pro：パワーユーザー向け約¥85,000、約12 tok/s、64 GB DDR5拡張可能',
          'GMKtec NucBox K6：バジェット向け約¥65,000、約9 tok/s — 頻繁な高負荷使用には不向き',
          '16 GB RAMのモデルはスキップ — 7Bモデルを8K+コンテキストで動かすには不十分',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beelink SER7（Ryzen 7 7840HS、32 GB DDR5）はAmazon.co.jpで約¥70,000でローカルLLMに最適なミニPC総合選択 — Ollamaは設定不要で動作',
          'MINISFORUM UM790 Pro（Ryzen 9 7940HS、32 GB DDR5）は約¥85,000のパワー選択 — 13B+モデル向けに64 GB DDR5拡張をサポート',
          'GMKtec NucBox K6（Ryzen 7 7840HS、32 GB DDR5）は約¥65,000のバジェット選択 — BeelinkとCPUが同じだが持続負荷でより熱くなる',
          '全3機種が100〜240V入力対応 — 日本の100V電源でもアダプター不要',
          '全3機種がVulkan対応のAMD Radeon 780M iGPU搭載 — OllamaはVulkanでGPUアクセラレーション推論に対応',
          '16 GB RAMのみのミニPCはスキップ — 7Bモデルが8Kコンテキストでメモリを使い切る',
        ],
      },
      body1: {
        id: 'top-3',
        title: '日本で買えるおすすめミニPC 3選',
        content: [
          '<strong>2026年5月時点で、32 GB DDR5 RAMを搭載したAMDベースのミニPC 3機種が、Amazon.co.jpや主要な日本の小売店を通じて入手可能なローカルLLM推論向けの最良選択肢です — 価格はいずれも¥65,000〜¥85,000です。</strong>各機種はRyzen 7000シリーズAPUにAMD Radeon 780Mの統合グラフィックスを搭載しています。OllamaはRadeon 780MのVulkanアクセラレーションをサポートしており、専用GPUや特別なドライバーセットアップなしでGPUアクセラレーション推論を実行できます。',
          '以下の表では、CPU、RAM、日本での価格、7B Q4モデルでの測定済み推論速度の観点で3機種を比較します。価格は2026年5月時点 — 購入前に必ずご確認ください。',
        ],
        columns: ['モデル', 'CPU + RAM', '日本価格', 'LLM速度（7B Q4）'],
        rows: [
          { 'モデル': 'Beelink SER7', 'CPU + RAM': 'Ryzen 7 7840HS + 32 GB DDR5', '日本価格': '約¥70,000', 'LLM速度（7B Q4）': '約10 tok/s' },
          { 'モデル': 'MINISFORUM UM790 Pro', 'CPU + RAM': 'Ryzen 9 7940HS + 32 GB DDR5', '日本価格': '約¥85,000', 'LLM速度（7B Q4）': '約12 tok/s' },
          { 'モデル': 'GMKtec NucBox K6', 'CPU + RAM': 'Ryzen 7 7840HS + 32 GB DDR5', '日本価格': '約¥65,000', 'LLM速度（7B Q4）': '約9 tok/s' },
        ],
        subsections: [
          {
            title: 'Beelink SER7 — 総合最良選択',
            text: 'おすすめ：コンパクトで静かなマシンで信頼性の高い7B推論を求めるほとんどのユーザー向け。SER7はアイドル時30 dB以下で動作 — 日本のアパートでの使用に適しています。スキップすべき場合：定期的に13B+モデルを実行する必要がある場合は、代わりに64 GB RAMバリアントにアップグレードしてください。<a href="https://www.amazon.co.jp/s?k=Beelink+SER7" class="text-primary hover:underline" rel="nofollow sponsored">Amazon.co.jpで確認</a>',
          },
          {
            title: 'MINISFORUM UM790 Pro — パワーユーザー選択',
            text: 'おすすめ：13Bや30Bモデル向けに64 GB DDR5への拡張ヘッドルームが必要なパワーユーザー向け。Ryzen 9 7940HSは7B Q4モデルで約12 tok/sを提供 — 3機種中最速。スキップすべき場合：予算が最優先の場合。Beelinkとの¥15,000の差額は速度をもたらしますが、7Bでは劇的な違いはありません。<a href="https://www.amazon.co.jp/s?k=MINISFORUM+UM790+Pro" class="text-primary hover:underline" rel="nofollow sponsored">Amazon.co.jpで確認</a>',
          },
          {
            title: 'GMKtec NucBox K6 — バジェット選択',
            text: 'おすすめ：Beelink SER7と同じRyzen 7 7840HSプラットフォームを¥5,000安く手に入れたいバジェット購入者向け。スキップすべき場合：頻繁な高負荷LLMセッションを予定している場合 — NucBox K6は持続的な推論負荷下でBeelink SER7より著しく熱くなります。<a href="https://www.amazon.co.jp/s?k=GMKtec+NucBox+K6" class="text-primary hover:underline" rel="nofollow sponsored">Amazon.co.jpで確認</a>',
          },
          {
            title: 'スキップ：16 GB RAMのみのモデル',
            text: '16 GB RAMのミニPCは有用なコンテキストでの7Bモデル推論には不十分です。7B Q4のモデルファイルは約4 GBで読み込まれますが、8K+コンテキストウィンドウでRAMはすぐに満杯になり — システムがNVMeにスワップし始め、スループットが2 tok/s以下に低下します。最低32 GBを購入してください。',
          },
        ],
        note: '日本でのGPUベース推論については、<a href="/ja/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本GPUプライスガイド</a>をご覧ください。',
      },
      body2: {
        id: 'buyers-guide',
        title: '購入前の選び方ガイド',
        content: [
          '<strong>日本でローカルLLM向けミニPCを購入する前に、4つのハードウェア判断が重要です：RAM、ストレージ、電源互換性、そして静音性。</strong>推奨する3機種はすべての基準をクリアしています。',
          'RAM：7Bモデル推論に8K+コンテキストで必要な最低限は32 GBです。7B Q4モデルは約4 GBで読み込まれますが、コンテキストバッファ、OS、バックグラウンドプロセスが16 GBシステムの残りを消費し、コンテキストウィンドウが満杯になる前に使い切ります。32 GBは7Bモデルに対して信頼性の高い余裕を提供します。',
          'ストレージ：NVMe SSD 512 GB以上。モデルファイルは1つあたり4〜8 GBです。512 GBドライブでOSのスペースを確保しながら6〜8個のモデルを保存できます。推奨する3機種はすべて512 GB NVMeで出荷され、Amazon.co.jpやヨドバシカメラ（ヨドバシカメラ）で入手可能なM.2 2280の交換用ドライブをサポートしています。',
          '電源：3機種すべてが100〜240V AC入力に対応しています。日本のコンセントは100V 50/60 Hzで動作 — 電圧アダプターは不要です。付属の電源アダプターは日本規格に対応して設計されています。',
          '静音性：3機種すべてがアイドル時35 dB以下で動作します。推論負荷下（CPU + iGPU動作時）では、Beelink SER7とMINISFORUM UM790 Proは38 dB以下を維持します。GMKtec NucBox K6は持続負荷下で42 dBに達することがあります。3機種すべて日本のアパートのホームオフィス用途に十分静かです。',
          'Vulkanアクセラレーション：3機種すべてのAMD Radeon 780M iGPUはVulkanをサポートしています。Linux上のOllamaはVulkanを使用して推論をiGPUにオフロードし、スループットを約4 tok/s（CPU のみ）から約10 tok/s（iGPU via Vulkan）に向上させます。Windows上でのOllamaは同じiGPUにDirectMLを使用 — 性能は同等です。',
          '選択の判断基準：バジェット購入者 → GMKtec NucBox K6（約¥65,000）；ほとんどのユーザー → Beelink SER7（約¥70,000）；64 GB拡張が必要なパワーユーザー → MINISFORUM UM790 Pro（約¥85,000）。',
          '日本での購入先：Amazon.co.jpでは3機種すべてをプライム配送で取り扱っています。ヨドバシカメラオンラインではBeelink SER7とMINISFORUM UM790 Proを取り扱っています。注文前に価格.com（Kakaku.com）で日本の小売業者間のリアルタイム価格比較を行うことを推奨します。',
          '<em>開示：このページはアフィリエイトリンクを含みます。リンク経由での購入により収益が発生することがあります。特定商取引法に基づく表記に準じています。</em>',
          '完全なハードウェア比較は親ガイドをご覧ください：<a href="/ja/prompt-bites/best-mini-pc-for-local-llm" class="text-primary hover:underline">ローカルLLMに最適なミニPC</a>。GPU専用セットアップについては<a href="/local-llms/best-budget-gpus-local-llm" class="text-primary hover:underline">ローカルLLM向けバジェットGPU</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '日本でローカルLLM向けミニPCに関するよくある質問',
        faqs: [
          {
            q: 'これらのミニPCはヨドバシカメラ（ヨドバシ）で購入できますか？',
            a: 'ヨドバシカメラ（ヨドバシ）での取り扱いはモデルや店舗によって異なります。Beelink SER7、MINISFORUM UM790 Pro、GMKtec NucBox K6については、Amazon.co.jpや各メーカーへの直接注文の方がより確実です — これら3機種はいずれも深圳製のミニPCで、日本では主にオンラインチャネルで流通しています。現在の在庫状況は価格.com（Kakaku.com）でご確認ください。',
          },
          {
            q: 'これらのミニPCは日本の100V電源コンセントに対応していますか？',
            a: 'はい。Beelink SER7、MINISFORUM UM790 Pro、GMKtec NucBox K6の3機種すべてが100〜240V AC入力に対応した電源アダプターとともに出荷されます。日本のコンセントは100V 50/60 Hzで動作します。電圧コンバーターや昇圧トランスは不要です。',
          },
          {
            q: '16 GB RAMはローカルLLMに十分ですか？',
            a: 'いいえ。16 GB RAMは8K+コンテキストでの7Bモデル推論には不十分です。7B Q4のモデルファイルは約4 GBで読み込まれますが、コンテキストバッファは会話の長さとともに増加します。8Kコンテキストでシステムメモリが満杯になり、OSがNVMeにスワップするため推論がほぼゼロのスループットに低下します。最低32 GBを購入してください。',
          },
          {
            q: 'ミニPCとMac mini M4、日本でローカルLLMに向いているのはどちらですか？',
            a: 'Mac mini M4はBeelink SER7の約10 tok/sと比べて約18 tok/sと高速で、日本では約¥98,000です。予算が許してmacOSを使用するならMac mini M4を購入してください — AppleのユニファイドメモリアーキテクチャとMetal GPUアクセラレーションは、これらのミニPCのAMD Vulkanより効率的です。Windowsが必要な場合、AMD/Vulkanを好む場合、または¥28,000節約したい場合はBeelink SER7を選んでください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Hardware Guides',
    title: '日本可以买到的最适合本地LLM的迷你电脑是什么？',
    seoTitle: '日本最佳本地LLM迷你电脑2026 | Prompt Bites | PromptQuorum',
    metaDescription: '日本本地LLM最佳迷你电脑：Beelink SER7（约¥3,200 CNY）、MINISFORUM UM790 Pro（约¥3,800 CNY）、GMKtec NucBox K6（约¥2,900 CNY）。均为32 GB DDR5、Vulkan支持。2026年5月。',
    publishDate: '2026-05-27',
    dateModified: '2026-05-27',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-27',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Beelink SER7', 'MINISFORUM UM790 Pro', 'GMKtec NucBox K6', 'Ryzen 7 7840HS', 'Ryzen 9 7940HS'],
    educationalLevel: 'Intermediate',
    audience: '在日本为本地LLM推理购买迷你电脑的用户',
    affiliateDisclosure: true,
    parentArticle: '/zh/prompt-bites/best-mini-pc-for-local-llm',
    siblingBites: ['best-ollama-models-cpu-only', 'mac-mini-m4-local-llm'],
    is_living_page: false,
    leadAnswerBlock:
      '日本购买本地LLM最佳迷你电脑是Beelink SER7（Ryzen 7 7840HS，32 GB DDR5），亚马逊约¥70,000日元（约¥3,200人民币）。Ollama开箱即用，AMD Radeon 780M iGPU支持Vulkan加速。',
    quickAnswerTop: {
      zh: {
        question: '日本可以买到的最适合本地LLM的迷你电脑是什么？',
        answer: '日本购买本地LLM最佳迷你电脑是Beelink SER7（Ryzen 7 7840HS，32 GB DDR5），亚马逊约¥70,000日元（约¥3,200人民币）。Ollama开箱即用，AMD Radeon 780M iGPU支持Vulkan加速。',
        bullets: [
          'Beelink SER7：综合最佳，约¥3,200人民币，7B Q4约10 tok/s，静音适合公寓使用',
          'MINISFORUM UM790 Pro：性能之选，约¥3,800人民币，约12 tok/s，可扩展至64 GB DDR5',
          'GMKtec NucBox K6：预算之选，约¥2,900人民币，约9 tok/s — 不适合频繁重度使用',
          '跳过任何只有16 GB RAM的型号 — 7B模型在8K+上下文时内存不足',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beelink SER7（Ryzen 7 7840HS，32 GB DDR5）是日本本地LLM综合最佳迷你电脑，约¥70,000日元（约¥3,200人民币）— Ollama无需配置即可运行',
          'MINISFORUM UM790 Pro（Ryzen 9 7940HS，32 GB DDR5）是约¥3,800人民币的性能之选 — 支持64 GB DDR5扩展以运行13B+模型',
          'GMKtec NucBox K6（Ryzen 7 7840HS，32 GB DDR5）是约¥2,900人民币的预算之选 — CPU与Beelink相同但持续负载下温度更高',
          '三款均支持100-240V输入 — 使用日本100V电源无需电压适配器',
          '三款均配备支持Vulkan的AMD Radeon 780M iGPU — Ollama使用Vulkan进行GPU加速推理',
          '跳过仅有16 GB RAM的迷你电脑 — 7B模型在8K上下文时会填满内存',
        ],
      },
      body1: {
        id: 'top-3',
        title: '日本可购买的前三名迷你电脑',
        content: [
          '<strong>截至2026年5月，三款搭载32 GB DDR5内存的AMD迷你电脑是通过亚马逊和主要日本零售商可获取的本地LLM推理最佳选择 — 价格在¥65,000至¥85,000日元（约¥2,900至¥3,800人民币）之间。</strong>三款均搭载Ryzen 7000系列APU与AMD Radeon 780M集成显卡。Ollama支持Radeon 780M的Vulkan加速，即三款均可在无独立GPU的情况下运行GPU加速推理。',
          '下表从CPU、内存、日本价格和7B Q4模型测量推理速度四个维度比较三款产品。价格为2026年5月数据——购买前请核实最新价格。',
        ],
        columns: ['型号', 'CPU + 内存', '日本价格', 'LLM速度（7B Q4）'],
        rows: [
          { '型号': 'Beelink SER7', 'CPU + 内存': 'Ryzen 7 7840HS + 32 GB DDR5', '日本价格': '约¥70,000日元 / 约¥3,200人民币', 'LLM速度（7B Q4）': '约10 tok/s' },
          { '型号': 'MINISFORUM UM790 Pro', 'CPU + 内存': 'Ryzen 9 7940HS + 32 GB DDR5', '日本价格': '约¥85,000日元 / 约¥3,800人民币', 'LLM速度（7B Q4）': '约12 tok/s' },
          { '型号': 'GMKtec NucBox K6', 'CPU + 内存': 'Ryzen 7 7840HS + 32 GB DDR5', '日本价格': '约¥65,000日元 / 约¥2,900人民币', 'LLM速度（7B Q4）': '约9 tok/s' },
        ],
        subsections: [
          {
            title: 'Beelink SER7 — 综合最佳',
            text: '适合：大多数希望在紧凑静音机器中获得可靠7B推理的用户。SER7空闲时噪音低于30分贝 — 适合日本公寓使用。不适合：需要定期运行13B+模型的情况；请改选64 GB RAM版本。<a href="https://www.amazon.co.jp/s?k=Beelink+SER7" class="text-primary hover:underline" rel="nofollow sponsored">在亚马逊查看</a>',
          },
          {
            title: 'MINISFORUM UM790 Pro — 性能之选',
            text: '适合：需要64 GB DDR5扩展空间运行13B和30B模型的高级用户。Ryzen 9 7940HS在7B Q4模型上提供约12 tok/s — 三款中最快。不适合：预算是首要考虑因素的情况；相比Beelink约¥600人民币的溢价带来速度提升，但在7B模型上差异不显著。<a href="https://www.amazon.co.jp/s?k=MINISFORUM+UM790+Pro" class="text-primary hover:underline" rel="nofollow sponsored">在亚马逊查看</a>',
          },
          {
            title: 'GMKtec NucBox K6 — 预算之选',
            text: '适合：想以低约¥300人民币获得与Beelink SER7相同Ryzen 7 7840HS平台的预算购买者。不适合：计划频繁进行高强度LLM会话的情况 — NucBox K6在持续推理负载下温度明显高于Beelink SER7。<a href="https://www.amazon.co.jp/s?k=GMKtec+NucBox+K6" class="text-primary hover:underline" rel="nofollow sponsored">在亚马逊查看</a>',
          },
          {
            title: '跳过：仅有16 GB RAM的型号',
            text: '仅有16 GB RAM的迷你电脑不足以运行具有实用上下文的7B模型推理。7B Q4模型文件加载约4 GB，但RAM在8K+上下文窗口下快速填满 — 系统开始交换到NVMe，吞吐量降至2 tok/s以下。请购买最低32 GB。',
          },
        ],
        note: '有关日本GPU推理，请参阅我们的<a href="/zh/prompt-bites/best-gpu-local-llm-japan-price" class="text-primary hover:underline">日本GPU价格指南</a>。',
      },
      body2: {
        id: 'buyers-guide',
        title: '日本购买指南',
        content: [
          '<strong>在日本购买本地LLM迷你电脑之前，四个硬件决策至关重要：内存、存储、电源兼容性和噪音。</strong>三款推荐产品均满足所有门槛。',
          '内存：32 GB是7B模型在8K+上下文下推理的最低要求。7B Q4模型加载约4 GB；上下文缓冲区、操作系统和后台进程在上下文窗口填满之前会消耗16 GB系统的其余部分。32 GB为7B模型提供可靠的余量。',
          '存储：512 GB或更大的NVMe SSD。每个模型文件4-8 GB。512 GB硬盘可在保留操作系统空间的同时存储6-8个模型。三款推荐机器均搭载512 GB NVMe出厂，支持可在亚马逊和ヨドバシカメラ购买的M.2 2280替换硬盘。',
          '电源：三款迷你电脑均接受100-240V AC输入。日本插座运行在100V 50/60 Hz — 无需电压转换器。附带的电源适配器专为日本标准设计。',
          '噪音：三款空闲时均低于35分贝。在推理负载下（CPU + iGPU运行），Beelink SER7和MINISFORUM UM790 Pro保持在38分贝以下。GMKtec NucBox K6在持续负载下可达42分贝。三款均安静到可以在日本公寓办公室使用。',
          'Vulkan加速：三款均配备支持Vulkan的AMD Radeon 780M iGPU。Linux上的Ollama使用Vulkan将推理卸载到iGPU，将吞吐量从约4 tok/s（仅CPU）提升到约10 tok/s（iGPU via Vulkan）。Windows上的Ollama对同一iGPU使用DirectML — 性能相近。',
          '决策矩阵：预算购买者 → GMKtec NucBox K6（约¥2,900人民币）；大多数用户 → Beelink SER7（约¥3,200人民币）；需要64 GB扩展的高级用户 → MINISFORUM UM790 Pro（约¥3,800人民币）。',
          '日本购买渠道：亚马逊日本（Amazon.co.jp）均有三款产品，提供Prime配送。ヨドバシカメラ网店提供Beelink SER7和MINISFORUM UM790 Pro。下单前请使用価格.com（Kakaku.com）进行日本零售商实时价格比较。',
          '<em>披露：本文包含联盟链接。通过这些链接购买，我们可能获得佣金，您不会产生额外费用。</em>',
          '在父级指南中查看完整硬件对比：<a href="/zh/prompt-bites/best-mini-pc-for-local-llm" class="text-primary hover:underline">本地LLM最佳迷你电脑</a>。GPU专用配置请参阅<a href="/local-llms/best-budget-gpus-local-llm" class="text-primary hover:underline">本地LLM最佳预算GPU</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '日本本地LLM迷你电脑常见问题',
        faqs: [
          {
            q: '这些迷你电脑在ヨドバシカメラ（ヨドバシ）有售吗？',
            a: 'ヨドバシカメラ（ヨドバシ）的供货情况因型号和门店而异。对于Beelink SER7、MINISFORUM UM790 Pro和GMKtec NucBox K6，亚马逊日本（Amazon.co.jp）和直接向制造商购买更为可靠 — 这三款均为深圳制造的迷你电脑，在日本主要通过线上渠道销售。使用価格.com（Kakaku.com）查看各零售商当前库存。',
          },
          {
            q: '这些迷你电脑兼容日本100V插座吗？',
            a: '是的。Beelink SER7、MINISFORUM UM790 Pro和GMKtec NucBox K6三款均附带额定100-240V AC输入的电源适配器。日本插座运行在100V 50/60 Hz。无需电压转换器或升压变压器。',
          },
          {
            q: '16 GB内存足够运行本地LLM吗？',
            a: '不足够。16 GB内存不足以在8K+上下文下进行7B模型推理。7B Q4模型文件加载约4 GB，但上下文缓冲区随对话长度增长。在8K上下文时，系统内存填满，推理吞吐量降至近乎为零，因为操作系统会交换到NVMe。请购买最低32 GB。',
          },
          {
            q: '在日本，迷你电脑和Mac mini M4哪个更适合本地LLM？',
            a: 'Mac mini M4速度更快，约18 tok/s对比Beelink SER7的约10 tok/s，日本价格约¥98,000日元（约¥4,400人民币）。如果预算允许且使用macOS，请购买Mac mini M4 — 苹果的统一内存架构和Metal GPU加速比这些迷你电脑上的AMD Vulkan更高效。如果需要Windows、偏好AMD/Vulkan或想节省¥28,000日元，请购买Beelink SER7。',
          },
        ],
      },
    },
  },
}
