import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: 'Best Mini PC for Local LLM?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-en.webp',
    dateModified: '2026-11-28',
    seoTitle: 'Best Mini PC for Local LLM 2026 | PromptQuorum',
    metaDescription: 'Mac mini M4, UM790 Pro and Beelink SER8 for local LLMs: memory bandwidth, estimated 7B Q4 speed, RAM limits and the newer M6 and M5 Pro Mac mini.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Minisforum UM790 Pro', 'Mac Mini M4', 'Mac Mini M6', 'Mac Mini M5 Pro'],
    educationalLevel: 'Intermediate',
    audience: 'Users buying a mini PC to run LLMs locally',
    parentArticle: '/local-llms/best-mini-pcs-local-llm',
    siblingBites: ['best-14b-models-coding', 'qwen-14b-vs-llama-8b'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best mini PC for local LLM?',
        answer: 'Three options for 7–13B Q4 models without a discrete GPU. The Mac mini M4 has the most memory bandwidth of the three (120 GB/s; about 15–20 tok/s on a 7B Q4 model, estimated). The Minisforum UM790 Pro and Beelink SER8 both use the Radeon 780M iGPU with two DDR5 slots (up to about 11–15 tok/s, estimated). These are calculations, not measurements.',
        bullets: ['Mac mini M4: 120 GB/s, about 15–20 tok/s on Llama 3.1 8B Q4 (estimate)', 'Minisforum UM790 Pro: Ryzen 9 7940HS with Radeon 780M, up to 64 GB DDR5', 'Beelink SER8: Ryzen 7 8845HS, also with Radeon 780M; compare current prices'],
        updatedDate: '2026-11',
      },
      de: {
        question: 'Bester Mini-PC für lokale LLMs?',
        answer: 'Drei Optionen für 7–13B-Q4-Modelle ohne diskrete GPU. Der Mac Mini M4 hat die höchste Speicherbandbreite der drei (120 GB/s; geschätzt rund 15–20 tok/s bei 7B Q4). Minisforum UM790 Pro und Beelink SER8 nutzen beide die iGPU Radeon 780M mit zwei DDR5-Steckplätzen (geschätzt bis etwa 11–15 tok/s). Das sind Rechenwerte, keine Messungen.',
        bullets: ['Mac Mini M4: 120 GB/s, geschätzt rund 15–20 tok/s bei Llama 3.1 8B Q4', 'Minisforum UM790 Pro: Ryzen 9 7940HS mit Radeon 780M, bis 64 GB DDR5', 'Beelink SER8: Ryzen 7 8845HS, ebenfalls Radeon 780M; aktuelle Preise vergleichen'],
        updatedDate: '2026-11',
      },
      fr: {
        question: 'Meilleur mini PC pour LLM local ?',
        answer: 'Trois options pour des modèles 7–13B Q4 sans GPU dédié. Le Mac mini M4 a la plus grande bande passante des trois (120 Go/s ; environ 15–20 tok/s sur un 7B Q4, estimation). Les Minisforum UM790 Pro et Beelink SER8 utilisent l’iGPU Radeon 780M avec deux emplacements DDR5 (jusqu’à environ 11–15 tok/s, estimation). Ce sont des calculs, pas des mesures.',
        bullets: ['Mac mini M4 : 120 Go/s, environ 15–20 tok/s sur Llama 3.1 8B Q4 (estimation)', 'Minisforum UM790 Pro : Ryzen 9 7940HS avec Radeon 780M, jusqu’à 64 Go de DDR5', 'Beelink SER8 : Ryzen 7 8845HS, aussi avec Radeon 780M ; comparez les prix actuels'],
        updatedDate: '2026-11',
      },
      ja: {
        question: 'ローカルLLMに最適なミニPCは？',
        answer: '専用GPUなしで7〜13BのQ4モデルを動かす3つの選択肢です。Mac mini M4は3機種で最もメモリ帯域が広く（120GB/s、7B Q4で推定約15〜20 tok/s）、Minisforum UM790 ProとBeelink SER8はDDR5スロット2基とiGPUのRadeon 780Mを搭載します（推定で最大約11〜15 tok/s）。いずれも計算値で、実測ではありません。',
        bullets: ['Mac mini M4：120GB/s、Llama 3.1 8B Q4で約15〜20 tok/s（推定）', 'Minisforum UM790 Pro：Ryzen 9 7940HSとRadeon 780M、DDR5は最大64GB', 'Beelink SER8：Ryzen 7 8845HSでRadeon 780M搭載。現在の価格を比較'],
        updatedDate: '2026-11',
      },
      zh: {
        question: '本地 LLM 最佳迷你电脑是什么？',
        answer: '三款无需独立显卡即可运行 7～13B Q4 模型的选择。Mac mini M4 的内存带宽在三者中最高（120GB/s；7B Q4 估算约 15～20 tok/s）。Minisforum UM790 Pro 和 Beelink SER8 都采用 Radeon 780M 核显和两个 DDR5 插槽（估算最高约 11～15 tok/s）。均为计算值，并非实测。',
        bullets: ['Mac mini M4：120GB/s，Llama 3.1 8B Q4 约 15～20 tok/s（估算）', 'Minisforum UM790 Pro：Ryzen 9 7940HS 配 Radeon 780M，最高 64GB DDR5', 'Beelink SER8：Ryzen 7 8845HS，同样是 Radeon 780M；请比较当前价格'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4: 120 GB/s memory bandwidth, about 15–20 tok/s on a 7B Q4 model (estimate). Apple lists 4 W idle and 65 W maximum for the tested 16 GB model.', 'Minisforum UM790 Pro (Ryzen 9 7940HS, Radeon 780M) takes up to 64 GB DDR5. With DDR5-5600 the bandwidth estimate is up to about 11–15 tok/s on a 7B Q4 model; real results can be lower.', 'Apple silicon shares one memory pool between CPU and GPU. The pool is fixed at purchase, and the system also uses part of it.', 'The Beelink SER8 (Ryzen 7 8845HS) has the same Radeon 780M iGPU and the same estimate with DDR5-5600. It is not a CPU-only machine.', 'Apple announced a new Mac mini on August 25, 2026, on sale from September 22: M6 from $899 (16 GB, up to 32 GB) and M5 Pro from $1,699 (24 GB, up to 64 GB; 64 GB from $2,699).'],
      },
      body1: {
        title: 'Mac mini M4 Has the Most Bandwidth of the Three',
        content: ['<strong>The Mac mini M4 has 120 GB/s of memory bandwidth (<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>), more than the roughly 90 GB/s peak of dual-channel DDR5-5600 in the two AMD mini PCs.</strong> Using our rule of thumb (about 60–80% of bandwidth divided by model file size, here about 4.9 GB for Llama 3.1 8B Q4), that is about 15–20 tok/s. It is an estimate. Apple lists <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">4 W idle and 65 W maximum</a> for the tested 16 GB model; we have not measured power during inference.', 'The Minisforum UM790 Pro (Ryzen 9 7940HS) and the Beelink SER8 (Ryzen 7 8845HS) both have a Radeon 780M iGPU and two DDR5 SO-DIMM slots. The same rule gives up to about 11–15 tok/s on a 7B Q4 model with DDR5-5600. Real iGPU results can be lower and depend on driver and backend. Ollama’s <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">GPU documentation</a> does not list the 780M for ROCm; it describes additional GPU support through Vulkan, without naming this chip. Check that your setup uses the GPU.', 'Apple announced a new Mac mini on August 25, 2026, available from September 22: M6 from $899 with 16 GB (up to 32 GB), and M5 Pro from $1,699 with 24 GB (up to 64 GB; 64 GB from $2,699). Apple claims <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">up to 4x faster AI performance</a> for M6 than M4; that is Apple’s own figure. The M4 launched at $599; in May 2026 Apple dropped that configuration and the U.S. starting price became $799 (<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). If you find a remaining or used M4, compare its actual price with the new models.', 'The table compares the three mini PCs by chip, a sample memory configuration and estimated speed (calculated from bandwidth, not PromptQuorum measurements).'],
        columns: ['Mini PC', 'CPU/GPU', 'Sample Config', 'LLM Speed (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Sample Config': '16 GB unified', 'LLM Speed (7B Q4)': '~15–20 tok/s (estimate)' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Sample Config': '64 GB DDR5', 'LLM Speed (7B Q4)': 'up to ~11–15 tok/s (estimate)' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', 'Sample Config': '64 GB DDR5', 'LLM Speed (7B Q4)': 'up to ~11–15 tok/s (estimate)' },
        ],
      },
      body2: {
        title: 'Capacity Decides What Fits, Bandwidth Limits Speed',
        content: [
          'Memory size decides which models fit; memory bandwidth largely limits how fast they generate. A mini PC with a built-in discrete GPU is limited by that GPU’s fixed VRAM, and layers that do not fit run more slowly from system memory. The three machines here use an integrated GPU that shares system memory. How much the iGPU can use depends on the system, driver and software.',
          'By bandwidth, the M4 (120 GB/s) has a higher speed ceiling than the AMD machines with DDR5-5600 (about 90 GB/s theoretical). The UM790 Pro’s advantage is capacity: up to 64 GB leaves room for larger models such as a 30B Q4 model (~18 GB) that does not fit in 16 GB, though it will be slow. In the new Mac mini range only the M5 Pro reaches 64 GB; the M6 stops at 32 GB.',
          'For a full guide to hardware selection for local LLM, see the <a href="/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">best Ollama frontend overview</a> which covers the software side of local LLM setup.',
          'For Japan-specific mini PC recommendations with Amazon.co.jp links and JPY prices, see our <a href="/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">best mini PC for local LLMs in Japan guide</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Mini PCs for Local LLMs',
        faqs: [
          {
            q: 'Can the Mac Mini M4 run a 13B model locally?',
            a: 'Only tightly on 16 GB: a 13B Q4 file is about 8 GB, and macOS, your apps and the context also need memory, so 7–8B models are the safer choice. By the bandwidth rule, a 13B Q4 model on the M4 would run at about 9–12 tok/s (estimate). More memory gives more room: the M4 went up to 32 GB, and the M4 Pro came with 24, 48 or 64 GB. In the new range, the M6 goes to 32 GB and the M5 Pro to 64 GB.',
          },
          {
            q: 'Does the Minisforum UM790 Pro need ROCm for GPU acceleration?',
            a: 'Not necessarily. Ollama’s GPU documentation does not list the Radeon 780M among its ROCm-supported GPUs. It says additional GPU support on Windows and Linux comes through Vulkan, but does not name this chip. llama.cpp also has a Vulkan backend. Results depend on drivers and versions: after setup, check with `ollama ps` whether the model runs on the GPU.',
          },
          {
            q: 'Is the Mac Mini M4 good enough for coding with a 7B model?',
            a: 'It can be. At an estimated 15–20 tok/s, a 200-token completion takes about 10–13 seconds of generation, plus time to process the prompt. That suits chat-style coding help better than instant autocomplete.',
          },
          {
            q: 'What model sizes can the UM790 Pro run?',
            a: 'With 64 GB, a 30B Q4 model (~18 GB) fits. The bandwidth estimate with DDR5-5600 is only about 3–4 tok/s. For a 13B Q4 model (~8 GB) it is about 7–9 tok/s. Real results can be lower.',
          },
          {
            q: 'When should I pick the Beelink SER8 over the Mac Mini M4 or UM790 Pro?',
            a: 'Choose it if its price, ports or availability suit you better. It has the same Radeon 780M iGPU as the UM790 Pro (with a Ryzen 7 8845HS), so we would not expect a large LLM speed difference with the same memory; we have not tested either. Compare current prices for the same RAM and storage.',
          },
          {
            q: 'Should I buy the Mac Mini M4 now or wait for the new M6/M5 Pro Mac mini?',
            a: 'Apple announced the M6 and M5 Pro Mac mini on August 25, 2026, available from September 22: from $899 (16 GB) and $1,699 (24 GB). The M4 launched at $599, and its U.S. starting price became $799 in May 2026. A remaining or used M4 can still suit 7–8B models if it costs clearly less than the new models. If you need 64 GB, only the M5 Pro offers it (from $2,699); the M6 stops at 32 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Best SSD for Fast Model Loading](/prompt-bites/best-ssd-fast-model-loading) -- best SSD for fast model loading',
          '[Strix Halo + Ollama + Vulkan: Performance Guide](/prompt-bites/strix-halo-ollama-vulkan) -- Strix Halo Ollama Vulkan setup',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: 'Bester Mini-PC für lokale LLMs?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-de.webp',
    seoTitle: 'Bester Mini-PC für lokale LLMs 2026 | PromptQuorum',
    metaDescription: 'Mac Mini M4, UM790 Pro und Beelink SER8 für lokale LLMs: Speicherbandbreite, geschätztes 7B-Q4-Tempo, RAM-Grenzen und neuer Mac Mini M6/M5 Pro.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      de: {
        question: 'Bester Mini-PC für lokale LLMs?',
        answer: 'Drei Optionen für 7–13B-Q4-Modelle ohne diskrete GPU. Der Mac Mini M4 hat die höchste Speicherbandbreite der drei (120 GB/s; geschätzt rund 15–20 tok/s bei 7B Q4). Minisforum UM790 Pro und Beelink SER8 nutzen beide die iGPU Radeon 780M mit zwei DDR5-Steckplätzen (geschätzt bis etwa 11–15 tok/s). Das sind Rechenwerte, keine Messungen.',
        bullets: ['Mac Mini M4: 120 GB/s, geschätzt rund 15–20 tok/s bei Llama 3.1 8B Q4', 'Minisforum UM790 Pro: Ryzen 9 7940HS mit Radeon 780M, bis 64 GB DDR5', 'Beelink SER8: Ryzen 7 8845HS, ebenfalls Radeon 780M; aktuelle Preise vergleichen'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac Mini M4: 120 GB/s Speicherbandbreite, geschätzt rund 15–20 tok/s bei 7B Q4. Apple nennt für das getestete 16-GB-Modell 4 W im Leerlauf und maximal 65 W.', 'Der Minisforum UM790 Pro (Ryzen 9 7940HS, Radeon 780M) fasst bis 64 GB DDR5. Mit DDR5-5600 ergibt die Bandbreitenschätzung bis etwa 11–15 tok/s bei 7B Q4; real kann es weniger sein.', 'Apple Silicon nutzt einen gemeinsamen Speicher für CPU und GPU. Er ist beim Kauf festgelegt, und auch das System belegt einen Teil davon.', 'Der Beelink SER8 (Ryzen 7 8845HS) hat dieselbe iGPU Radeon 780M und mit DDR5-5600 dieselbe Schätzung. Er ist kein reiner CPU-Rechner.', 'Apple stellte am 25. August 2026 einen neuen Mac Mini vor, erhältlich ab 22. September: M6 ab 899 $ (16 GB, bis 32 GB) und M5 Pro ab 1.699 $ (24 GB, bis 64 GB; 64 GB ab 2.699 $).'],
      },
      body1: {
        title: 'Der Mac Mini M4 hat die höchste Bandbreite der drei',
        content: ['<strong>Der Mac Mini M4 hat 120 GB/s Speicherbandbreite (<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>), mehr als das theoretische Maximum von rund 90 GB/s bei DDR5-5600 im Zweikanalbetrieb der beiden AMD-Mini-PCs.</strong> Nach unserer Faustregel (rund 60–80 % der Bandbreite geteilt durch die Modelldateigröße, hier etwa 4,9 GB für Llama 3.1 8B Q4) sind das etwa 15–20 tok/s. Das ist eine Schätzung. Apple nennt für das getestete 16-GB-Modell <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">4 W Leerlauf und maximal 65 W</a>; die Aufnahme bei der Inferenz haben wir nicht gemessen.', 'Minisforum UM790 Pro (Ryzen 9 7940HS) und Beelink SER8 (Ryzen 7 8845HS) haben beide die iGPU Radeon 780M und zwei DDR5-SO-DIMM-Steckplätze. Dieselbe Regel ergibt mit DDR5-5600 bis etwa 11–15 tok/s bei 7B Q4. Reale iGPU-Werte können niedriger sein und hängen von Treiber und Backend ab. Die <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">GPU-Dokumentation von Ollama</a> führt die 780M nicht für ROCm auf; zusätzliche GPU-Unterstützung wird über Vulkan beschrieben, ohne diesen Chip zu nennen. Prüfe, ob dein Aufbau die GPU nutzt.', 'Apple stellte am 25. August 2026 einen neuen Mac Mini vor, erhältlich ab 22. September: M6 ab 899 $ mit 16 GB (bis 32 GB) und M5 Pro ab 1.699 $ mit 24 GB (bis 64 GB; 64 GB ab 2.699 $). Apple wirbt beim M6 mit <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">bis zu 4-fach schnellerer KI-Leistung</a> gegenüber dem M4; das ist Apples eigene Angabe. Der M4 startete bei 599 $; im Mai 2026 strich Apple diese Konfiguration, und der US-Einstiegspreis lag dann bei 799 $ (<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). Findest du einen Restposten oder gebrauchten M4, vergleiche den echten Preis mit den neuen Modellen.', 'Die Tabelle vergleicht die drei Mini-PCs nach Chip, einer Beispielkonfiguration und geschätztem Tempo (aus der Bandbreite berechnet, keine Messungen von PromptQuorum).'],
        columns: ['Mini-PC', 'CPU/GPU', 'Beispielkonfiguration', 'LLM-Geschwindigkeit (7B Q4)'],
        rows: [
          { 'Mini-PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Beispielkonfiguration': '16 GB Unified', 'LLM-Geschwindigkeit (7B Q4)': '~15–20 tok/s (Schätzung)' },
          { 'Mini-PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Beispielkonfiguration': '64 GB DDR5', 'LLM-Geschwindigkeit (7B Q4)': 'bis ~11–15 tok/s (Schätzung)' },
          { 'Mini-PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', 'Beispielkonfiguration': '64 GB DDR5', 'LLM-Geschwindigkeit (7B Q4)': 'bis ~11–15 tok/s (Schätzung)' },
        ],
      },
      body2: {
        title: 'Kapazität bestimmt, was passt – Bandbreite begrenzt das Tempo',
        content: [
          'Die Speichergröße entscheidet, welche Modelle passen; die Speicherbandbreite begrenzt weitgehend das Tempo. Ein Mini-PC mit fest eingebauter diskreter GPU ist durch deren festen VRAM begrenzt, und Schichten, die nicht hineinpassen, laufen langsamer aus dem Arbeitsspeicher. Die drei Geräte hier nutzen eine integrierte GPU mit gemeinsamem Systemspeicher. Wie viel die iGPU nutzen kann, hängt von System, Treiber und Software ab.',
          'Nach Bandbreite hat der M4 (120 GB/s) eine höhere Tempo-Obergrenze als die AMD-Geräte mit DDR5-5600 (rund 90 GB/s theoretisch). Der Vorteil des UM790 Pro ist die Kapazität: Bis 64 GB bieten Platz für größere Modelle wie ein 30B-Q4-Modell (~18 GB), das nicht in 16 GB passt – allerdings langsam. In der neuen Mac-Mini-Reihe erreicht nur der M5 Pro 64 GB; der M6 endet bei 32 GB.',
          'Einen vollständigen Leitfaden zur Hardware-Auswahl für lokale LLMs finden Sie in der <a href="/de/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">besten Ollama-Frontend-Übersicht</a>, die die Software-Seite der lokalen LLM-Einrichtung abdeckt.',
          'Für Japan-spezifische Mini-PC-Empfehlungen mit Amazon.co.jp-Links und JPY-Preisen, lesen Sie unseren <a href="/de/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">Leitfaden für die besten Mini-PCs für LLMs in Japan</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zu Mini-PCs für lokale LLMs',
        faqs: [
          {
            q: 'Kann der Mac Mini M4 ein 13B-Modell lokal ausführen?',
            a: 'Mit 16 GB nur knapp: Eine 13B-Q4-Datei ist etwa 8 GB groß, und macOS, deine Apps und der Kontext brauchen ebenfalls Speicher; 7–8B-Modelle sind die sicherere Wahl. Nach der Bandbreitenregel liefe 13B Q4 auf dem M4 mit etwa 9–12 tok/s (Schätzung). Mehr Speicher gibt Luft: Den M4 gab es bis 32 GB, den M4 Pro mit 24, 48 oder 64 GB. In der neuen Reihe reicht der M6 bis 32 GB und der M5 Pro bis 64 GB.',
          },
          {
            q: 'Benötigt der Minisforum UM790 Pro ROCm für GPU-Beschleunigung?',
            a: 'Nicht unbedingt. Die GPU-Dokumentation von Ollama führt die Radeon 780M nicht unter den ROCm-unterstützten GPUs. Zusätzliche GPU-Unterstützung unter Windows und Linux läuft laut Dokumentation über Vulkan, dieser Chip wird aber nicht genannt. Auch llama.cpp hat ein Vulkan-Backend. Das Ergebnis hängt von Treibern und Versionen ab: Prüfe nach der Einrichtung mit `ollama ps`, ob das Modell auf der GPU läuft.',
          },
          {
            q: 'Ist der Mac Mini M4 für Coding mit einem 7B-Modell gut genug?',
            a: 'Das kann reichen. Bei geschätzt 15–20 tok/s dauert die Erzeugung von 200 Tokens etwa 10–13 Sekunden, dazu kommt die Verarbeitung des Prompts. Das passt eher zu Coding-Hilfe im Chat als zu sofortiger Autovervollständigung.',
          },
          {
            q: 'Welche Modellgrößen schafft der UM790 Pro?',
            a: 'Mit 64 GB passt ein 30B-Q4-Modell (~18 GB). Die Bandbreitenschätzung mit DDR5-5600 liegt aber nur bei etwa 3–4 tok/s. Bei 13B Q4 (~8 GB) sind es etwa 7–9 tok/s. Real kann es weniger sein.',
          },
          {
            q: 'Wann sollte ich den Beelink SER8 dem Mac Mini M4 oder UM790 Pro vorziehen?',
            a: 'Nimm ihn, wenn Preis, Anschlüsse oder Verfügbarkeit besser passen. Er hat dieselbe iGPU Radeon 780M wie der UM790 Pro (mit Ryzen 7 8845HS), daher erwarten wir bei gleichem Speicher keinen großen Unterschied beim LLM-Tempo; getestet haben wir keinen von beiden. Vergleiche aktuelle Preise bei gleichem RAM und Speicher.',
          },
          {
            q: 'Sollte ich jetzt den Mac Mini M4 kaufen oder auf den neuen M6/M5 Pro Mac Mini warten?',
            a: 'Apple stellte den Mac Mini mit M6 und M5 Pro am 25. August 2026 vor, erhältlich ab 22. September: ab 899 $ (16 GB) bzw. 1.699 $ (24 GB). Der M4 startete bei 599 $, ab Mai 2026 lag sein US-Einstiegspreis bei 799 $. Ein Restposten oder gebrauchter M4 kann für 7–8B-Modelle weiter passen, wenn er deutlich weniger kostet als die neuen Modelle. 64 GB gibt es nur beim M5 Pro (ab 2.699 $); der M6 endet bei 32 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Verwandte Leitfäden',
        items: [
          '[Beste SSD für schnelles Modellladen](/de/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: Leistungshandbuch](/de/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: 'Meilleur mini PC pour LLM local ?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-fr.webp',
    seoTitle: 'Meilleur mini PC pour LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac mini M4, UM790 Pro et Beelink SER8 pour LLM local : bande passante, vitesse 7B Q4 estimée, limites de RAM et nouveau Mac mini M6/M5 Pro.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      fr: {
        question: 'Meilleur mini PC pour LLM local ?',
        answer: 'Trois options pour des modèles 7–13B Q4 sans GPU dédié. Le Mac mini M4 a la plus grande bande passante des trois (120 Go/s ; environ 15–20 tok/s sur un 7B Q4, estimation). Les Minisforum UM790 Pro et Beelink SER8 utilisent l’iGPU Radeon 780M avec deux emplacements DDR5 (jusqu’à environ 11–15 tok/s, estimation). Ce sont des calculs, pas des mesures.',
        bullets: ['Mac mini M4 : 120 Go/s, environ 15–20 tok/s sur Llama 3.1 8B Q4 (estimation)', 'Minisforum UM790 Pro : Ryzen 9 7940HS avec Radeon 780M, jusqu’à 64 Go de DDR5', 'Beelink SER8 : Ryzen 7 8845HS, aussi avec Radeon 780M ; comparez les prix actuels'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4 : 120 Go/s de bande passante, environ 15–20 tok/s sur un 7B Q4 (estimation). Apple indique 4 W au repos et 65 W max pour le modèle 16 Go testé.', 'Le Minisforum UM790 Pro (Ryzen 9 7940HS, Radeon 780M) accepte jusqu’à 64 Go de DDR5. En DDR5-5600, l’estimation par bande passante va jusqu’à environ 11–15 tok/s en 7B Q4 ; en pratique ce peut être moins.', 'Apple Silicon partage une seule mémoire entre CPU et GPU. Sa taille est fixée à l’achat et le système en utilise aussi une partie.', 'Le Beelink SER8 (Ryzen 7 8845HS) a le même iGPU Radeon 780M et la même estimation en DDR5-5600. Ce n’est pas une machine uniquement CPU.', 'Apple a annoncé un nouveau Mac mini le 25 août 2026, disponible depuis le 22 septembre : M6 à partir de 899 $ (16 Go, jusqu’à 32 Go) et M5 Pro à partir de 1 699 $ (24 Go, jusqu’à 64 Go ; 64 Go à partir de 2 699 $).'],
      },
      body1: {
        title: 'Le Mac mini M4 a la plus grande bande passante des trois',
        content: ['<strong>Le Mac mini M4 offre 120 Go/s de bande passante (<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>), plus que le maximum théorique d’environ 90 Go/s de la DDR5-5600 bicanal des deux mini PC AMD.</strong> Avec notre règle empirique (environ 60–80 % de la bande passante divisés par la taille du fichier, ici environ 4,9 Go pour Llama 3.1 8B Q4), on obtient environ 15–20 tok/s. C’est une estimation. Apple indique <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">4 W au repos et 65 W au maximum</a> pour le modèle 16 Go testé ; nous n’avons pas mesuré la consommation en inférence.', 'Le Minisforum UM790 Pro (Ryzen 9 7940HS) et le Beelink SER8 (Ryzen 7 8845HS) ont tous deux l’iGPU Radeon 780M et deux emplacements SO-DIMM DDR5. La même règle donne jusqu’à environ 11–15 tok/s en 7B Q4 avec de la DDR5-5600. Sur iGPU, les résultats réels peuvent être inférieurs et dépendent du pilote et du backend. La <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentation GPU d’Ollama</a> ne cite pas la 780M pour ROCm ; elle décrit une prise en charge supplémentaire via Vulkan sans nommer cette puce. Vérifiez que votre installation utilise le GPU.', 'Apple a annoncé un nouveau Mac mini le 25 août 2026, disponible depuis le 22 septembre : M6 à partir de 899 $ avec 16 Go (jusqu’à 32 Go) et M5 Pro à partir de 1 699 $ avec 24 Go (jusqu’à 64 Go ; 64 Go à partir de 2 699 $). Apple annonce pour le M6 des <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">performances IA jusqu’à 4 fois supérieures</a> à celles du M4 ; c’est un chiffre d’Apple. Le M4 est sorti à 599 $ ; en mai 2026, Apple a retiré cette configuration et le prix de départ aux États-Unis est passé à 799 $ (<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). Si vous trouvez un M4 de stock ou d’occasion, comparez son prix réel à celui des nouveaux modèles.', 'Le tableau compare les trois mini PC par puce, configuration d’exemple et vitesse estimée (calculée à partir de la bande passante, pas mesurée par PromptQuorum).'],
        columns: ['Mini PC', 'CPU/GPU', 'Exemple de config', 'Vitesse LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Exemple de config': '16 Go unifié', 'Vitesse LLM (7B Q4)': '~15–20 tok/s (estimation)' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Exemple de config': '64 Go DDR5', 'Vitesse LLM (7B Q4)': 'jusqu’à ~11–15 tok/s (estimation)' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', 'Exemple de config': '64 Go DDR5', 'Vitesse LLM (7B Q4)': 'jusqu’à ~11–15 tok/s (estimation)' },
        ],
      },
      body2: {
        title: 'La capacité fixe ce qui tient, la bande passante limite la vitesse',
        content: [
          'La taille de la mémoire détermine les modèles qui tiennent ; la bande passante limite en grande partie la vitesse. Un mini PC avec GPU dédié intégré est limité par sa VRAM fixe, et les couches qui n’y tiennent pas s’exécutent plus lentement depuis la mémoire système. Les trois machines ici utilisent un GPU intégré qui partage la mémoire système. La quantité utilisable par l’iGPU dépend du système, du pilote et du logiciel.',
          'Sur la bande passante, le M4 (120 Go/s) a un plafond de vitesse plus haut que les machines AMD en DDR5-5600 (environ 90 Go/s théoriques). L’atout du UM790 Pro est la capacité : jusqu’à 64 Go laissent de la place à de plus gros modèles, comme un 30B Q4 (~18 Go) qui ne tient pas dans 16 Go, mais il sera lent. Dans la nouvelle gamme Mac mini, seul le M5 Pro atteint 64 Go ; le M6 s’arrête à 32 Go.',
          'Pour un guide complet de sélection matérielle pour LLM local, consultez l\'<a href="/fr/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">aperçu des meilleurs frontends Ollama</a> qui couvre la partie logicielle de la configuration LLM locale.',
          'Pour des recommandations de mini PC spécifiques au Japon avec des liens Amazon.co.jp et les prix en JPY, consultez notre <a href="/fr/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">guide des meilleurs mini PC pour LLMs au Japon</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur les mini PC pour LLMs locaux',
        faqs: [
          {
            q: 'Le Mac Mini M4 peut-il faire tourner un modèle 13B localement ?',
            a: 'Avec 16 Go, c’est très juste : un fichier 13B Q4 pèse environ 8 Go, et macOS, vos applications et le contexte ont aussi besoin de mémoire ; les modèles 7–8B sont plus sûrs. Selon la règle de bande passante, un 13B Q4 tournerait sur le M4 à environ 9–12 tok/s (estimation). Plus de mémoire donne de la marge : le M4 allait jusqu’à 32 Go et le M4 Pro existait en 24, 48 ou 64 Go. Dans la nouvelle gamme, le M6 va jusqu’à 32 Go et le M5 Pro jusqu’à 64 Go.',
          },
          {
            q: 'Le Minisforum UM790 Pro nécessite-t-il ROCm pour l\'accélération GPU ?',
            a: 'Pas forcément. La documentation GPU d’Ollama ne cite pas la Radeon 780M parmi les GPU pris en charge par ROCm. Elle indique qu’une prise en charge supplémentaire sous Windows et Linux passe par Vulkan, sans nommer cette puce. llama.cpp a aussi un backend Vulkan. Le résultat dépend des pilotes et versions : après l’installation, vérifiez avec `ollama ps` que le modèle tourne sur le GPU.',
          },
          {
            q: 'Le Mac Mini M4 est-il suffisamment performant pour du codage avec un modèle 7B ?',
            a: 'Cela peut convenir. À environ 15–20 tok/s estimés, générer 200 tokens prend environ 10–13 secondes, plus le traitement du prompt. C’est mieux adapté à une aide au code en mode chat qu’à une autocomplétion instantanée.',
          },
          {
            q: 'Quelles tailles de modèles le UM790 Pro peut-il exécuter ?',
            a: 'Avec 64 Go, un 30B Q4 (~18 Go) tient. L’estimation par bande passante en DDR5-5600 n’est toutefois que d’environ 3–4 tok/s. Pour un 13B Q4 (~8 Go), environ 7–9 tok/s. En pratique ce peut être moins.',
          },
          {
            q: 'Quand devrais-je choisir le Beelink SER8 plutôt que le Mac Mini M4 ou l\'UM790 Pro ?',
            a: 'Choisissez-le si son prix, sa connectique ou sa disponibilité vous conviennent mieux. Il a le même iGPU Radeon 780M que le UM790 Pro (avec un Ryzen 7 8845HS) : à mémoire égale, nous ne nous attendrions pas à un grand écart de vitesse ; nous n’avons testé aucun des deux. Comparez les prix actuels à RAM et stockage égaux.',
          },
          {
            q: 'Dois-je acheter le Mac Mini M4 maintenant ou attendre le nouveau Mac mini M6/M5 Pro ?',
            a: 'Apple a annoncé les Mac mini M6 et M5 Pro le 25 août 2026, disponibles depuis le 22 septembre : à partir de 899 $ (16 Go) et 1 699 $ (24 Go). Le M4 est sorti à 599 $ et son prix de départ aux États-Unis est passé à 799 $ en mai 2026. Un M4 de stock ou d’occasion peut encore convenir aux modèles 7–8B s’il coûte nettement moins que les nouveaux. Pour 64 Go, seul le M5 Pro les propose (à partir de 2 699 $) ; le M6 s’arrête à 32 Go.',
          },
        ],
      },
      relatedReading: {
        title: 'Guides associés',
        items: [
          '[Meilleur SSD pour chargement rapide de modèles](/fr/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: Guide de performance](/fr/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: 'ローカルLLMに最適なミニPCは？',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-ja.webp',
    seoTitle: 'ローカルLLM向けミニPC 2026：Mac Mini M4・UM790 Pro・Beelink',
    metaDescription: 'ローカルLLM向けMac mini M4・UM790 Pro・Beelink SER8を比較。メモリ帯域、7B Q4の推定速度、RAMの上限、新型Mac mini M6／M5 Proも解説。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMに最適なミニPCは？',
        answer: '専用GPUなしで7〜13BのQ4モデルを動かす3つの選択肢です。Mac mini M4は3機種で最もメモリ帯域が広く（120GB/s、7B Q4で推定約15〜20 tok/s）、Minisforum UM790 ProとBeelink SER8はDDR5スロット2基とiGPUのRadeon 780Mを搭載します（推定で最大約11〜15 tok/s）。いずれも計算値で、実測ではありません。',
        bullets: ['Mac mini M4：120GB/s、Llama 3.1 8B Q4で約15〜20 tok/s（推定）', 'Minisforum UM790 Pro：Ryzen 9 7940HSとRadeon 780M、DDR5は最大64GB', 'Beelink SER8：Ryzen 7 8845HSでRadeon 780M搭載。現在の価格を比較'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4はメモリ帯域120GB/s、7B Q4で約15〜20 tok/s（推定）。Appleはテストした16GBモデルで待機4W、最大65Wと公表しています。', 'Minisforum UM790 Pro（Ryzen 9 7940HS、Radeon 780M）はDDR5を最大64GB搭載できます。DDR5-5600の帯域からの推定は7B Q4で最大約11〜15 tok/s。実際はより低いこともあります。', 'Apple SiliconはCPUとGPUが1つのメモリを共有します。容量は購入時に決まり、システムも一部を使います。', 'Beelink SER8（Ryzen 7 8845HS）も同じiGPUのRadeon 780Mを搭載し、DDR5-5600なら推定値は同じです。CPU専用機ではありません。', 'Appleは2026年8月25日に新型Mac miniを発表し、9月22日に発売しました。M6は899ドルから（16GB、最大32GB）、M5 Proは1,699ドルから（24GB、最大64GB。64GBは2,699ドルから）。'],
      },
      body1: {
        title: '3機種で帯域が最も広いのはMac mini M4',
        content: ['<strong>Mac mini M4のメモリ帯域は120GB/s（<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>）で、2台のAMD機のデュアルチャネルDDR5-5600の理論値約90GB/sを上回ります。</strong>当サイトの目安（帯域の約60〜80%をモデルファイルサイズで割る。Llama 3.1 8B Q4は約4.9GB）では約15〜20 tok/sです。これは推定です。Appleはテストした16GBモデルで<a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">待機4W、最大65W</a>と公表しています。推論中の消費電力は測定していません。', 'Minisforum UM790 Pro（Ryzen 9 7940HS）とBeelink SER8（Ryzen 7 8845HS）は、どちらもiGPUのRadeon 780MとDDR5 SO-DIMMスロット2基を備えます。同じ目安ではDDR5-5600で7B Q4が最大約11〜15 tok/sです。iGPUの実際の結果は低くなることがあり、ドライバーやバックエンドに左右されます。<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">OllamaのGPUドキュメント</a>はROCm対応一覧に780Mを載せていません。Vulkanによる追加対応を説明していますが、このチップ名は挙げていません。GPUが使われているか確認してください。', 'Appleは2026年8月25日に新型Mac miniを発表し、9月22日に発売しました。M6は16GBで899ドルから（最大32GB）、M5 Proは24GBで1,699ドルから（最大64GB。64GBは2,699ドルから）。AppleはM6のAI性能がM4の<a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">最大4倍</a>と主張していますが、これはApple自身の数値です。M4は599ドルで発売され、2026年5月にその構成が廃止されて米国の開始価格は799ドルになりました（<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>）。在庫品や中古のM4は、実際の価格を新型と比べてください。', '表は3機種をチップ、構成例、推定速度（帯域からの計算で、PromptQuorumの実測ではありません）で比較しています。'],
        columns: ['ミニPC', 'CPU/GPU', '構成例', 'LLM速度（7B Q4）'],
        rows: [
          { 'ミニPC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '構成例': '16 GBユニファイド', 'LLM速度（7B Q4）': '約15〜20 tok/s（推定）' },
          { 'ミニPC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '構成例': '64 GB DDR5', 'LLM速度（7B Q4）': '最大約11〜15 tok/s（推定）' },
          { 'ミニPC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', '構成例': '64 GB DDR5', 'LLM速度（7B Q4）': '最大約11〜15 tok/s（推定）' },
        ],
      },
      body2: {
        title: '容量で入るモデルが決まり、帯域が速度を左右する',
        content: [
          'どのモデルが入るかはメモリ容量で決まり、生成速度は主にメモリ帯域に制限されます。専用GPUを内蔵したミニPCは固定のVRAMに制限され、入りきらないレイヤーはシステムメモリで遅く実行されます。ここの3機種はシステムメモリを共有する内蔵GPUを使います。iGPUが使える量はシステム、ドライバー、ソフトウェアによります。',
          '帯域で見ると、M4（120GB/s）はDDR5-5600のAMD機（理論値約90GB/s）より速度の上限が高くなります。UM790 Proの利点は容量です。最大64GBなら、16GBに入らない30B Q4（約18GB）のような大きいモデルも入りますが、速度は遅くなります。新型Mac miniで64GBを選べるのはM5 Proだけで、M6は32GBまでです。',
          'ローカルLLMのハードウェア選択に関する完全なガイドについては、ローカルLLMセットアップのソフトウェア面をカバーする<a href="/ja/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最適なOllamaフロントエンド概要</a>をご覧ください。',
          'Amazon.co.jpリンクと日本円価格付きの日本市場向けミニPCおすすめについては、<a href="/ja/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">日本のローカルLLM向けミニPCガイド</a>をご覧ください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'ローカルLLM向けミニPCに関するよくある質問',
        faqs: [
          {
            q: 'Mac Mini M4は13Bモデルをローカルで実行できますか？',
            a: '16GBではぎりぎりです。13B Q4のファイルは約8GBで、macOSやアプリ、コンテキストもメモリを使うため、7〜8Bのほうが安全です。帯域の目安では、M4の13B Q4は約9〜12 tok/sです（推定）。メモリが多いほど余裕が出ます。M4は最大32GB、M4 Proは24・48・64GBでした。新型ではM6が32GB、M5 Proが64GBまでです。',
          },
          {
            q: 'Minisforum UM790 ProはGPUアクセラレーションにROCmが必要ですか？',
            a: '必ずしも必要ではありません。OllamaのGPUドキュメントは、ROCm対応GPUにRadeon 780Mを挙げていません。WindowsとLinuxではVulkanで追加のGPU対応があると説明していますが、このチップ名はありません。llama.cppにもVulkanバックエンドがあります。結果はドライバーとバージョンに左右されるので、設定後に`ollama ps`でGPU実行かを確認してください。',
          },
          {
            q: 'Mac Mini M4は7Bモデルでのコーディングに十分ですか？',
            a: '使える場合があります。推定15〜20 tok/sなら200トークンの生成は約10〜13秒で、これにプロンプト処理時間が加わります。瞬時の自動補完より、チャット形式のコーディング支援に向いています。',
          },
          {
            q: 'UM790 Proで動くモデルのサイズは？',
            a: '64GBなら30B Q4（約18GB）が入ります。ただしDDR5-5600の帯域からの推定は約3〜4 tok/sです。13B Q4（約8GB）は約7〜9 tok/sです。実際はより低いこともあります。',
          },
          {
            q: 'Beelink SER8をMac Mini M4またはUM790 Proより選ぶべき時は？',
            a: '価格、端子、入手性が合うなら選ぶ価値があります。UM790 Proと同じiGPUのRadeon 780M（CPUはRyzen 7 8845HS）なので、同じメモリならLLM速度に大きな差はないと考えられます。どちらも当サイトではテストしていません。同じRAMとストレージで現在の価格を比較してください。',
          },
          {
            q: '今Mac Mini M4を買うべきか、新型M6/M5 Pro Mac miniを待つべきか？',
            a: 'Appleは2026年8月25日にM6とM5 ProのMac miniを発表し、9月22日に発売しました。899ドル（16GB）と1,699ドル（24GB）からです。M4は599ドルで発売され、2026年5月に米国の開始価格が799ドルになりました。在庫品や中古のM4が新型より明らかに安ければ、7〜8Bモデルには今も使えます。64GBが必要なら選べるのはM5 Proだけ（2,699ドルから）で、M6は32GBまでです。',
          },
        ],
      },
      relatedReading: {
        title: '関連ガイド',
        items: [
          '[モデル高速ロードのための最適SSD](/ja/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: パフォーマンスガイド](/ja/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: '本地 LLM 最佳迷你电脑是什么？',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-zh.webp',
    seoTitle: '本地LLM最佳迷你电脑 2026：Mac Mini M4・UM790 Pro・Beelink',
    metaDescription: '本地LLM迷你电脑对比：Mac mini M4、UM790 Pro、Beelink SER8的内存带宽、7B Q4估算速度、内存上限，以及新款Mac mini M6与M5 Pro。',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      zh: {
        question: '本地 LLM 最佳迷你电脑是什么？',
        answer: '三款无需独立显卡即可运行 7～13B Q4 模型的选择。Mac mini M4 的内存带宽在三者中最高（120GB/s；7B Q4 估算约 15～20 tok/s）。Minisforum UM790 Pro 和 Beelink SER8 都采用 Radeon 780M 核显和两个 DDR5 插槽（估算最高约 11～15 tok/s）。均为计算值，并非实测。',
        bullets: ['Mac mini M4：120GB/s，Llama 3.1 8B Q4 约 15～20 tok/s（估算）', 'Minisforum UM790 Pro：Ryzen 9 7940HS 配 Radeon 780M，最高 64GB DDR5', 'Beelink SER8：Ryzen 7 8845HS，同样是 Radeon 780M；请比较当前价格'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4：内存带宽 120GB/s，7B Q4 约 15～20 tok/s（估算）。Apple 公布其测试的 16GB 机型待机 4W、最大 65W。', 'Minisforum UM790 Pro（Ryzen 9 7940HS、Radeon 780M）最高支持 64GB DDR5。按 DDR5-5600 带宽估算，7B Q4 最高约 11～15 tok/s，实际可能更低。', 'Apple Silicon 的 CPU 和 GPU 共享同一内存。容量在购买时确定，系统也会占用一部分。', 'Beelink SER8（Ryzen 7 8845HS）配有同样的 Radeon 780M 核显，DDR5-5600 下估算值相同，并非纯 CPU 机器。', 'Apple 于 2026 年 8 月 25 日发布新款 Mac mini，9 月 22 日起发售：M6 起价 899 美元（16GB，最高 32GB），M5 Pro 起价 1,699 美元（24GB，最高 64GB；64GB 版 2,699 美元起）。'],
      },
      body1: {
        title: '三款中 Mac mini M4 的内存带宽最高',
        content: ['<strong>Mac mini M4 的内存带宽为 120GB/s（<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>），高于两款 AMD 迷你电脑双通道 DDR5-5600 约 90GB/s 的理论峰值。</strong>按我们的经验法则（带宽的约 60～80% 除以模型文件大小，Llama 3.1 8B Q4 约 4.9GB），约为 15～20 tok/s。这是估算值。Apple 公布其测试的 16GB 机型<a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">待机 4W、最大 65W</a>；我们没有测量推理时的功耗。', 'Minisforum UM790 Pro（Ryzen 9 7940HS）和 Beelink SER8（Ryzen 7 8845HS）都配有 Radeon 780M 核显和两个 DDR5 SO-DIMM 插槽。按同一法则，DDR5-5600 下 7B Q4 最高约 11～15 tok/s。核显的实际结果可能更低，取决于驱动和后端。<a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama 的 GPU 文档</a>的 ROCm 支持列表中没有 780M；文档提到通过 Vulkan 提供额外的 GPU 支持，但未点名该芯片。请确认你的环境确实在使用 GPU。', 'Apple 于 2026 年 8 月 25 日发布新款 Mac mini，9 月 22 日起发售：M6 起价 899 美元，配 16GB（最高 32GB）；M5 Pro 起价 1,699 美元，配 24GB（最高 64GB；64GB 版 2,699 美元起）。Apple 称 M6 的 AI 性能<a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">最高为 M4 的 4 倍</a>，这是 Apple 自己的数据。M4 首发价 599 美元；2026 年 5 月 Apple 取消该配置，美国起售价变为 799 美元（<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>）。如果找到库存或二手 M4，请把实际价格与新机型比较。', '下表按芯片、示例内存配置和估算速度比较三款迷你电脑（由带宽计算，并非 PromptQuorum 实测）。'],
        columns: ['迷你电脑', 'CPU/GPU', '示例配置', 'LLM 速度（7B Q4）'],
        rows: [
          { '迷你电脑': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '示例配置': '16 GB 统一内存', 'LLM 速度（7B Q4）': '约 15～20 tok/s（估算）' },
          { '迷你电脑': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '示例配置': '64 GB DDR5', 'LLM 速度（7B Q4）': '最高约 11～15 tok/s（估算）' },
          { '迷你电脑': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', '示例配置': '64 GB DDR5', 'LLM 速度（7B Q4）': '最高约 11～15 tok/s（估算）' },
        ],
      },
      body2: {
        title: '容量决定能装什么，带宽限制速度',
        content: [
          '内存容量决定能装下哪些模型，生成速度主要受内存带宽限制。内置独立显卡的迷你电脑受固定显存限制，装不下的层只能在系统内存中更慢地运行。这里的三款机器都使用共享系统内存的核显，核显可用多少取决于系统、驱动和软件。',
          '从带宽看，M4（120GB/s）的速度上限高于使用 DDR5-5600 的 AMD 机器（理论约 90GB/s）。UM790 Pro 的优势是容量：最高 64GB 可容纳更大的模型，例如 16GB 装不下的 30B Q4（约 18GB），但速度会很慢。新款 Mac mini 中只有 M5 Pro 可达 64GB，M6 最高 32GB。',
          '有关本地 LLM 硬件选择的完整指南，请参阅涵盖本地 LLM 配置软件方面的 <a href="/zh/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">最佳 Ollama 前端概览</a>。',
          '如需带Amazon.co.jp链接和日元价格的日本专用迷你电脑推荐，请参阅我们的<a href="/zh/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">日本本地LLM迷你电脑指南</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于本地 LLM 迷你电脑的快速解答',
        faqs: [
          {
            q: 'Mac Mini M4 可以在本地运行 13B 模型吗？',
            a: '16GB 非常勉强：13B Q4 文件约 8GB，macOS、应用和上下文也需要内存，因此 7～8B 模型更稳妥。按带宽法则，M4 运行 13B Q4 约 9～12 tok/s（估算）。内存越大余量越多：M4 最高 32GB，M4 Pro 有 24、48 或 64GB。新款中 M6 最高 32GB，M5 Pro 最高 64GB。',
          },
          {
            q: 'Minisforum UM790 Pro 需要 ROCm 才能进行 GPU 加速吗？',
            a: '不一定。Ollama 的 GPU 文档没有把 Radeon 780M 列入 ROCm 支持列表。文档称 Windows 和 Linux 可通过 Vulkan 获得额外的 GPU 支持，但未点名该芯片。llama.cpp 也有 Vulkan 后端。结果取决于驱动和版本：配置完成后用 `ollama ps` 查看模型是否在 GPU 上运行。',
          },
          {
            q: 'Mac Mini M4 用 7B 模型编程够用吗？',
            a: '可能够用。按估算的 15～20 tok/s，生成 200 个 token 约需 10～13 秒，另加处理提示词的时间。它更适合对话式编程辅助，而不是即时自动补全。',
          },
          {
            q: 'UM790 Pro 能运行多大的模型？',
            a: '配 64GB 可装下 30B Q4（约 18GB）。但按 DDR5-5600 带宽估算只有约 3～4 tok/s；13B Q4（约 8GB）约 7～9 tok/s。实际可能更低。',
          },
          {
            q: '何时应该选择 Beelink SER8 而不是 Mac Mini M4 或 UM790 Pro？',
            a: '如果它的价格、接口或供货更合适就选它。它与 UM790 Pro 配有同样的 Radeon 780M 核显（CPU 为 Ryzen 7 8845HS），在相同内存下我们预计 LLM 速度不会有太大差异；两者我们都没有测试过。请按相同内存和存储比较当前价格。',
          },
          {
            q: '现在应该买 Mac Mini M4，还是等新款 M6/M5 Pro Mac mini？',
            a: 'Apple 于 2026 年 8 月 25 日发布 M6 和 M5 Pro 版 Mac mini，9 月 22 日起发售，分别从 899 美元（16GB）和 1,699 美元（24GB）起。M4 首发价 599 美元，2026 年 5 月美国起售价变为 799 美元。如果库存或二手 M4 明显便宜于新机型，运行 7～8B 模型仍可考虑。需要 64GB 只能选 M5 Pro（2,699 美元起），M6 最高 32GB。',
          },
        ],
      },
      relatedReading: {
        title: '相关指南',
        items: [
          '[快速加载模型的最佳SSD](/zh/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: 性能指南](/zh/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: '¿El mejor mini PC para LLM local?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-es.webp',
    seoTitle: 'Mejor mini PC para LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac mini M4, UM790 Pro y Beelink SER8 para LLM locales: ancho de banda, velocidad 7B Q4 estimada, límites de RAM y el nuevo Mac mini M6/M5 Pro.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor mini PC para LLM local?',
        answer: 'Tres opciones para modelos Q4 de 7–13B sin GPU dedicada. El Mac mini M4 tiene el mayor ancho de banda de los tres (120 GB/s; unos 15–20 tok/s en un 7B Q4, estimado). Minisforum UM790 Pro y Beelink SER8 usan la iGPU Radeon 780M con dos ranuras DDR5 (hasta unos 11–15 tok/s, estimado). Son cálculos, no mediciones.',
        bullets: ['Mac mini M4: 120 GB/s, unos 15–20 tok/s en Llama 3.1 8B Q4 (estimación)', 'Minisforum UM790 Pro: Ryzen 9 7940HS con Radeon 780M, hasta 64 GB DDR5', 'Beelink SER8: Ryzen 7 8845HS, también con Radeon 780M; compara precios actuales'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4: 120 GB/s de ancho de banda y unos 15–20 tok/s en un 7B Q4 (estimación). Apple indica 4 W en reposo y 65 W máx. para el modelo de 16 GB probado.', 'El Minisforum UM790 Pro (Ryzen 9 7940HS, Radeon 780M) admite hasta 64 GB DDR5. Con DDR5-5600, la estimación por ancho de banda llega a unos 11–15 tok/s en 7B Q4; en la práctica puede ser menos.', 'Apple Silicon comparte una sola memoria entre CPU y GPU. Su tamaño se fija al comprar y el sistema también usa una parte.', 'El Beelink SER8 (Ryzen 7 8845HS) tiene la misma iGPU Radeon 780M y la misma estimación con DDR5-5600. No es un equipo solo de CPU.', 'Apple anunció un nuevo Mac mini el 25 de agosto de 2026, a la venta desde el 22 de septiembre: M6 desde $899 (16 GB, hasta 32 GB) y M5 Pro desde $1,699 (24 GB, hasta 64 GB; 64 GB desde $2,699).'],
      },
      body1: {
        title: 'El Mac mini M4 tiene el mayor ancho de banda de los tres',
        content: ['<strong>El Mac mini M4 tiene 120 GB/s de ancho de banda (<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>), más que el máximo teórico de unos 90 GB/s de DDR5-5600 de doble canal en los dos mini PC AMD.</strong> Con nuestra regla práctica (alrededor del 60–80 % del ancho de banda dividido por el tamaño del archivo, unos 4.9 GB para Llama 3.1 8B Q4) salen unos 15–20 tok/s. Es una estimación. Apple indica <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">4 W en reposo y 65 W máximos</a> para el modelo de 16 GB probado; no hemos medido el consumo en inferencia.', 'El Minisforum UM790 Pro (Ryzen 9 7940HS) y el Beelink SER8 (Ryzen 7 8845HS) tienen la iGPU Radeon 780M y dos ranuras SO-DIMM DDR5. La misma regla da hasta unos 11–15 tok/s en 7B Q4 con DDR5-5600. En iGPU los resultados reales pueden ser menores y dependen del controlador y el backend. La <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentación de GPU de Ollama</a> no incluye la 780M para ROCm; describe soporte adicional mediante Vulkan sin nombrar este chip. Comprueba que tu configuración usa la GPU.', 'Apple anunció un nuevo Mac mini el 25 de agosto de 2026, disponible desde el 22 de septiembre: M6 desde $899 con 16 GB (hasta 32 GB) y M5 Pro desde $1,699 con 24 GB (hasta 64 GB; 64 GB desde $2,699). Apple afirma que el M6 ofrece <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">hasta 4 veces más rendimiento de IA</a> que el M4; es una cifra de la propia Apple. El M4 salió a $599; en mayo de 2026 Apple retiró esa configuración y el precio inicial en EE. UU. pasó a $799 (<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). Si encuentras un M4 de stock o usado, compara su precio real con los modelos nuevos.', 'La tabla compara los tres mini PC por chip, una configuración de ejemplo y velocidad estimada (calculada a partir del ancho de banda, no medida por PromptQuorum).'],
        columns: ['Mini PC', 'CPU/GPU', 'Configuración de ejemplo', 'Velocidad LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Configuración de ejemplo': '16 GB unificada', 'Velocidad LLM (7B Q4)': '~15–20 tok/s (estimación)' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Configuración de ejemplo': '64 GB DDR5', 'Velocidad LLM (7B Q4)': 'hasta ~11–15 tok/s (estimación)' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', 'Configuración de ejemplo': '64 GB DDR5', 'Velocidad LLM (7B Q4)': 'hasta ~11–15 tok/s (estimación)' },
        ],
      },
      body2: {
        title: 'La capacidad decide qué cabe; el ancho de banda limita la velocidad',
        content: [
          'El tamaño de la memoria decide qué modelos caben; el ancho de banda limita en gran medida la velocidad. Un mini PC con GPU dedicada integrada queda limitado por su VRAM fija, y las capas que no caben se ejecutan más despacio desde la memoria del sistema. Los tres equipos de aquí usan una GPU integrada que comparte la memoria del sistema. Cuánta puede usar la iGPU depende del sistema, el controlador y el software.',
          'Por ancho de banda, el M4 (120 GB/s) tiene un techo de velocidad más alto que los equipos AMD con DDR5-5600 (unos 90 GB/s teóricos). La ventaja del UM790 Pro es la capacidad: hasta 64 GB dejan sitio a modelos mayores, como un 30B Q4 (~18 GB) que no cabe en 16 GB, aunque irá lento. En la nueva gama Mac mini solo el M5 Pro llega a 64 GB; el M6 se queda en 32 GB.',
          'Para una guía completa de selección de hardware para LLM local, consulta el <a href="/es/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">resumen de las mejores interfaces para Ollama</a>, que cubre el lado de software de la configuración local.',
          'Para recomendaciones específicas de mini PCs en Japón con enlaces de Amazon.co.jp y precios en JPY, consulta nuestra <a href="/es/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">guía de mejores mini PCs para LLMs locales en Japón</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre mini PCs para LLMs locales',
        faqs: [
          {
            q: '¿Puede el Mac Mini M4 ejecutar un modelo de 13B en local?',
            a: 'Con 16 GB, muy justo: un archivo 13B Q4 ocupa unos 8 GB y macOS, tus apps y el contexto también necesitan memoria, así que los modelos de 7–8B son la opción más segura. Según la regla de ancho de banda, un 13B Q4 en el M4 iría a unos 9–12 tok/s (estimación). Con más memoria hay más margen: el M4 llegaba a 32 GB y el M4 Pro venía con 24, 48 o 64 GB. En la nueva gama, el M6 llega a 32 GB y el M5 Pro a 64 GB.',
          },
          {
            q: '¿Necesita el Minisforum UM790 Pro ROCm para aceleración GPU?',
            a: 'No necesariamente. La documentación de GPU de Ollama no incluye la Radeon 780M entre las GPU compatibles con ROCm. Indica que el soporte adicional en Windows y Linux llega mediante Vulkan, pero no nombra este chip. llama.cpp también tiene backend Vulkan. El resultado depende de controladores y versiones: tras instalar, comprueba con `ollama ps` si el modelo se ejecuta en la GPU.',
          },
          {
            q: '¿Es el Mac Mini M4 suficiente para coding con un modelo 7B?',
            a: 'Puede servir. A unos 15–20 tok/s estimados, generar 200 tokens tarda unos 10–13 segundos, más el procesamiento del prompt. Encaja mejor con ayuda de código tipo chat que con autocompletado instantáneo.',
          },
          {
            q: '¿Qué tamaños de modelo puede ejecutar el UM790 Pro?',
            a: 'Con 64 GB cabe un 30B Q4 (~18 GB). La estimación por ancho de banda con DDR5-5600 es de solo unos 3–4 tok/s. Para un 13B Q4 (~8 GB) es de unos 7–9 tok/s. En la práctica puede ser menos.',
          },
          {
            q: '¿Cuándo debo elegir el Beelink SER8 sobre el Mac Mini M4 o el UM790 Pro?',
            a: 'Elígelo si te convienen más su precio, puertos o disponibilidad. Tiene la misma iGPU Radeon 780M que el UM790 Pro (con un Ryzen 7 8845HS), así que no esperaríamos una gran diferencia de velocidad con la misma memoria; no hemos probado ninguno. Compara precios actuales con la misma RAM y almacenamiento.',
          },
          {
            q: '¿Debería comprar el Mac Mini M4 ahora o esperar al nuevo Mac mini M6/M5 Pro?',
            a: 'Apple anunció el Mac mini M6 y M5 Pro el 25 de agosto de 2026, disponible desde el 22 de septiembre: desde $899 (16 GB) y $1,699 (24 GB). El M4 salió a $599 y su precio inicial en EE. UU. pasó a $799 en mayo de 2026. Un M4 de stock o usado aún puede servir para modelos 7–8B si cuesta claramente menos que los nuevos. Si necesitas 64 GB, solo los ofrece el M5 Pro (desde $2,699); el M6 se queda en 32 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Guías relacionadas',
        items: [
          '[Mejor SSD para carga rápida de modelos](/es/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: Guía de rendimiento](/es/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: 'Melhor mini PC para LLM local?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-pt.webp',
    seoTitle: 'Melhor mini PC para LLM local 2026 | PromptQuorum',
    metaDescription: 'Mac mini M4, UM790 Pro e Beelink SER8 para LLM local: largura de banda, velocidade 7B Q4 estimada, limites de RAM e o novo Mac mini M6/M5 Pro.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor mini PC para LLM local?',
        answer: 'Três opções para modelos Q4 de 7–13B sem GPU dedicada. O Mac mini M4 tem a maior largura de banda dos três (120 GB/s; cerca de 15–20 tok/s num 7B Q4, estimativa). Minisforum UM790 Pro e Beelink SER8 usam a iGPU Radeon 780M com dois slots DDR5 (até cerca de 11–15 tok/s, estimativa). São cálculos, não medições.',
        bullets: ['Mac mini M4: 120 GB/s, cerca de 15–20 tok/s no Llama 3.1 8B Q4 (estimativa)', 'Minisforum UM790 Pro: Ryzen 9 7940HS com Radeon 780M, até 64 GB DDR5', 'Beelink SER8: Ryzen 7 8845HS, também com Radeon 780M; compare preços atuais'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4: 120 GB/s de largura de banda, cerca de 15–20 tok/s num 7B Q4 (estimativa). A Apple informa 4 W em repouso e máx. de 65 W no modelo de 16 GB testado.', 'O Minisforum UM790 Pro (Ryzen 9 7940HS, Radeon 780M) aceita até 64 GB DDR5. Com DDR5-5600, a estimativa pela largura de banda vai até cerca de 11–15 tok/s em 7B Q4; na prática pode ser menos.', 'O Apple Silicon compartilha uma única memória entre CPU e GPU. O tamanho é definido na compra e o sistema também usa parte dela.', 'O Beelink SER8 (Ryzen 7 8845HS) tem a mesma iGPU Radeon 780M e a mesma estimativa com DDR5-5600. Não é uma máquina só de CPU.', 'A Apple anunciou um novo Mac mini em 25 de agosto de 2026, à venda desde 22 de setembro: M6 a partir de US$ 899 (16 GB, até 32 GB) e M5 Pro a partir de US$ 1.699 (24 GB, até 64 GB; 64 GB a partir de US$ 2.699).'],
      },
      body1: {
        title: 'O Mac mini M4 tem a maior largura de banda dos três',
        content: ['<strong>O Mac mini M4 tem 120 GB/s de largura de banda (<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>), mais que o máximo teórico de cerca de 90 GB/s da DDR5-5600 em canal duplo nos dois mini PCs AMD.</strong> Pela nossa regra prática (cerca de 60–80% da largura de banda dividida pelo tamanho do arquivo, aqui cerca de 4,9 GB para o Llama 3.1 8B Q4), isso dá cerca de 15–20 tok/s. É uma estimativa. A Apple informa <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">4 W em repouso e 65 W no máximo</a> para o modelo de 16 GB testado; não medimos o consumo na inferência.', 'O Minisforum UM790 Pro (Ryzen 9 7940HS) e o Beelink SER8 (Ryzen 7 8845HS) têm a iGPU Radeon 780M e dois slots SO-DIMM DDR5. A mesma regra dá até cerca de 11–15 tok/s em 7B Q4 com DDR5-5600. Em iGPU, os resultados reais podem ser menores e dependem de driver e backend. A <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">documentação de GPU do Ollama</a> não lista a 780M para ROCm; descreve suporte adicional via Vulkan sem citar esse chip. Confira se sua configuração está usando a GPU.', 'A Apple anunciou um novo Mac mini em 25 de agosto de 2026, disponível desde 22 de setembro: M6 a partir de US$ 899 com 16 GB (até 32 GB) e M5 Pro a partir de US$ 1.699 com 24 GB (até 64 GB; 64 GB a partir de US$ 2.699). A Apple afirma que o M6 tem <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">desempenho de IA até 4x maior</a> que o M4; é um número da própria Apple. O M4 foi lançado por US$ 599; em maio de 2026 a Apple retirou essa configuração e o preço inicial nos EUA passou a US$ 799 (<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). Se achar um M4 de estoque ou usado, compare o preço real com os modelos novos.', 'A tabela compara os três mini PCs por chip, uma configuração de exemplo e velocidade estimada (calculada pela largura de banda, não medida pela PromptQuorum).'],
        columns: ['Mini PC', 'CPU/GPU', 'Configuração de exemplo', 'Velocidade LLM (7B Q4)'],
        rows: [
          { 'Mini PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'Configuração de exemplo': '16 GB unificada', 'Velocidade LLM (7B Q4)': '~15–20 tok/s (estimativa)' },
          { 'Mini PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'Configuração de exemplo': '64 GB DDR5', 'Velocidade LLM (7B Q4)': 'até ~11–15 tok/s (estimativa)' },
          { 'Mini PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', 'Configuração de exemplo': '64 GB DDR5', 'Velocidade LLM (7B Q4)': 'até ~11–15 tok/s (estimativa)' },
        ],
      },
      body2: {
        title: 'A capacidade define o que cabe; a largura de banda limita a velocidade',
        content: [
          'O tamanho da memória decide quais modelos cabem; a largura de banda limita em grande parte a velocidade. Um mini PC com GPU dedicada embutida fica limitado pela VRAM fixa dela, e as camadas que não cabem rodam mais devagar na memória do sistema. As três máquinas aqui usam GPU integrada que compartilha a memória do sistema. Quanto a iGPU pode usar depende do sistema, do driver e do software.',
          'Pela largura de banda, o M4 (120 GB/s) tem teto de velocidade maior que as máquinas AMD com DDR5-5600 (cerca de 90 GB/s teóricos). A vantagem do UM790 Pro é a capacidade: até 64 GB abrem espaço para modelos maiores, como um 30B Q4 (~18 GB) que não cabe em 16 GB, embora rode devagar. Na nova linha Mac mini, só o M5 Pro chega a 64 GB; o M6 para em 32 GB.',
          'Para um guia completo de seleção de hardware para LLM local, consulte o <a href="/pt/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">resumo dos melhores frontends para Ollama</a>, que cobre o lado de software da configuração local.',
          'Para recomendações específicas de mini PCs no Japão com links da Amazon.co.jp e preços em JPY, consulte nosso <a href="/pt/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">guia de melhores mini PCs para LLMs locais no Japão</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respostas rápidas sobre mini PCs para LLMs locais',
        faqs: [
          {
            q: 'O Mac Mini M4 consegue executar um modelo de 13B em local?',
            a: 'Com 16 GB, só no limite: um arquivo 13B Q4 tem cerca de 8 GB, e o macOS, seus apps e o contexto também precisam de memória; modelos 7–8B são a escolha mais segura. Pela regra da largura de banda, um 13B Q4 no M4 rodaria a cerca de 9–12 tok/s (estimativa). Mais memória dá folga: o M4 ia até 32 GB e o M4 Pro vinha com 24, 48 ou 64 GB. Na nova linha, o M6 vai até 32 GB e o M5 Pro até 64 GB.',
          },
          {
            q: 'O Minisforum UM790 Pro precisa de ROCm para aceleração de GPU?',
            a: 'Não necessariamente. A documentação de GPU do Ollama não lista a Radeon 780M entre as GPUs com suporte a ROCm. Ela diz que o suporte adicional no Windows e no Linux vem via Vulkan, mas não cita esse chip. O llama.cpp também tem backend Vulkan. O resultado depende de drivers e versões: depois de configurar, confira com `ollama ps` se o modelo roda na GPU.',
          },
          {
            q: 'O Mac Mini M4 é suficiente para programação com um modelo 7B?',
            a: 'Pode servir. A cerca de 15–20 tok/s estimados, gerar 200 tokens leva uns 10–13 segundos, mais o processamento do prompt. Combina mais com ajuda de código em chat do que com autocompletar instantâneo.',
          },
          {
            q: 'Quais tamanhos de modelo o UM790 Pro consegue rodar?',
            a: 'Com 64 GB, um 30B Q4 (~18 GB) cabe. A estimativa pela largura de banda com DDR5-5600 é de apenas 3–4 tok/s. Para um 13B Q4 (~8 GB), cerca de 7–9 tok/s. Na prática pode ser menos.',
          },
          {
            q: 'Quando devo escolher o Beelink SER8 em vez do Mac Mini M4 ou do UM790 Pro?',
            a: 'Escolha-o se preço, portas ou disponibilidade forem melhores para você. Ele tem a mesma iGPU Radeon 780M do UM790 Pro (com um Ryzen 7 8845HS), então não esperaríamos grande diferença de velocidade com a mesma memória; não testamos nenhum dos dois. Compare preços atuais com a mesma RAM e armazenamento.',
          },
          {
            q: 'Devo comprar o Mac Mini M4 agora ou esperar pelo novo Mac mini M6/M5 Pro?',
            a: 'A Apple anunciou o Mac mini M6 e M5 Pro em 25 de agosto de 2026, disponível desde 22 de setembro: a partir de US$ 899 (16 GB) e US$ 1.699 (24 GB). O M4 foi lançado por US$ 599 e seu preço inicial nos EUA passou a US$ 799 em maio de 2026. Um M4 de estoque ou usado ainda pode servir para modelos 7–8B se custar bem menos que os novos. Para 64 GB, só o M5 Pro oferece (a partir de US$ 2.699); o M6 para em 32 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'Guias relacionados',
        items: [
          '[Melhor SSD para carregamento rápido de modelos](/pt/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: Guia de desempenho](/pt/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: 'أفضل جهاز كمبيوتر مصغر لتشغيل نماذج اللغة الكبيرة محلياً؟',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-ar.webp',
    seoTitle: 'أفضل جهاز مصغر لتشغيل ⁨LLM⁩ محلياً ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'أجهزة Mac mini M4 وUM790 Pro وBeelink SER8 لنماذج LLM المحلية: عرض النطاق، سرعة 7B Q4 التقديرية، حدود الذاكرة، وجديد Mac mini M6/M5 Pro.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل جهاز كمبيوتر مصغر لتشغيل نماذج اللغة الكبيرة محلياً؟',
        answer: 'ثلاثة خيارات لتشغيل نماذج Q4 من 7B إلى 13B دون GPU مخصصة. يملك Mac mini M4 أعلى عرض نطاق ذاكرة بينها (120 GB/s، نحو 15–20 tok/s لنموذج 7B Q4 تقديرًا). ويستخدم Minisforum UM790 Pro وBeelink SER8 معالج الرسوميات المدمج Radeon 780M مع فتحتي DDR5 (حتى نحو 11–15 tok/s تقديرًا). هذه حسابات وليست قياسات.',
        bullets: ['Mac mini M4: ‏120 GB/s ونحو 15–20 tok/s على Llama 3.1 8B Q4 (تقدير)', 'Minisforum UM790 Pro: ‏Ryzen 9 7940HS مع Radeon 780M وحتى 64 GB DDR5', 'Beelink SER8: ‏Ryzen 7 8845HS ومعه Radeon 780M أيضًا؛ قارن الأسعار الحالية'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4: عرض نطاق ذاكرة 120 GB/s ونحو 15–20 tok/s لنموذج 7B Q4 (تقدير). تذكر Apple للطراز المختبَر بسعة 16 GB ‏4W في الخمول و65W كحد أقصى.', 'يقبل Minisforum UM790 Pro (‏Ryzen 9 7940HS مع Radeon 780M) حتى 64 GB DDR5. ومع DDR5-5600 يصل التقدير المبني على عرض النطاق إلى نحو 11–15 tok/s لنموذج 7B Q4، وقد تكون النتيجة الفعلية أقل.', 'تتشارك CPU وGPU في Apple Silicon ذاكرة واحدة. تتحدد سعتها عند الشراء ويستخدم النظام جزءًا منها أيضًا.', 'يملك Beelink SER8 (‏Ryzen 7 8845HS) معالج الرسوميات نفسه Radeon 780M والتقدير نفسه مع DDR5-5600. وهو ليس جهازًا يعتمد على CPU فقط.', 'أعلنت Apple عن Mac mini جديد في 25 أغسطس 2026 وبدأ بيعه في 22 سبتمبر: M6 من 899 دولارًا (16 GB وحتى 32 GB) وM5 Pro من 1,699 دولارًا (24 GB وحتى 64 GB؛ وسعة 64 GB من 2,699 دولارًا).'],
      },
      body1: {
        title: 'Mac mini M4 صاحب أعلى عرض نطاق بين الثلاثة',
        content: ['<strong>يبلغ عرض نطاق ذاكرة Mac mini M4 ‏120 GB/s (<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>)، وهو أعلى من الحد النظري البالغ نحو 90 GB/s لذاكرة DDR5-5600 ثنائية القناة في جهازي AMD.</strong> وفق قاعدتنا التقريبية (نحو 60–80% من عرض النطاق مقسومًا على حجم ملف النموذج، وهو نحو 4.9 GB لنموذج Llama 3.1 8B Q4) تكون النتيجة نحو 15–20 tok/s. وهذا تقدير. تذكر Apple للطراز المختبَر بسعة 16 GB <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">4W في الخمول و65W كحد أقصى</a>، ولم نقس الاستهلاك أثناء الاستدلال.', 'يملك Minisforum UM790 Pro (‏Ryzen 9 7940HS) وBeelink SER8 (‏Ryzen 7 8845HS) معالج الرسوميات Radeon 780M وفتحتي DDR5 SO-DIMM. وتعطي القاعدة نفسها حتى نحو 11–15 tok/s لنموذج 7B Q4 مع DDR5-5600. قد تكون النتائج الفعلية على المعالج المدمج أقل وتعتمد على التعريف والواجهة الخلفية. لا تذكر <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">وثائق GPU في Ollama</a> الشريحة 780M ضمن دعم ROCm، وتصف دعمًا إضافيًا عبر Vulkan دون تسمية هذه الشريحة. تأكد من أن إعدادك يستخدم GPU.', 'أعلنت Apple عن Mac mini جديد في 25 أغسطس 2026 وتوفر منذ 22 سبتمبر: M6 من 899 دولارًا بسعة 16 GB (وحتى 32 GB)، وM5 Pro من 1,699 دولارًا بسعة 24 GB (وحتى 64 GB؛ وسعة 64 GB من 2,699 دولارًا). وتقول Apple إن M6 يقدم <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">أداء ذكاء اصطناعي أسرع حتى 4 مرات</a> من M4، وهذا رقم من Apple نفسها. أُطلق M4 بسعر 599 دولارًا، وفي مايو 2026 ألغت Apple تلك التهيئة فأصبح سعر البداية في الولايات المتحدة 799 دولارًا (<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). إذا وجدت M4 من المخزون أو مستعملًا فقارن سعره الفعلي بالطرازات الجديدة.', 'يقارن الجدول الأجهزة الثلاثة حسب الشريحة وتهيئة ذاكرة كمثال والسرعة التقديرية (محسوبة من عرض النطاق وليست قياسات من PromptQuorum).'],
        columns: ['الجهاز المصغر', 'CPU/GPU', 'تهيئة كمثال', 'سرعة النموذج (7B Q4)'],
        rows: [
          { 'الجهاز المصغر': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', 'تهيئة كمثال': '16 GB موحدة', 'سرعة النموذج (7B Q4)': '~15–20 tok/s (تقدير)' },
          { 'الجهاز المصغر': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', 'تهيئة كمثال': '64 GB DDR5', 'سرعة النموذج (7B Q4)': 'حتى ~11–15 tok/s (تقدير)' },
          { 'الجهاز المصغر': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', 'تهيئة كمثال': '64 GB DDR5', 'سرعة النموذج (7B Q4)': 'حتى ~11–15 tok/s (تقدير)' },
        ],
      },
      body2: {
        title: 'السعة تحدد ما يتسع وعرض النطاق يحدّ السرعة',
        content: [
          'تحدد سعة الذاكرة النماذج التي يمكن تحميلها، ويحدّ عرض النطاق سرعة التوليد إلى حد كبير. الجهاز المصغر ذو GPU المنفصلة المدمجة محدود بذاكرة VRAM الثابتة، والطبقات التي لا تتسع فيها تعمل ببطء من ذاكرة النظام. أما الأجهزة الثلاثة هنا فتستخدم معالج رسوميات مدمجًا يشارك ذاكرة النظام، ومقدار ما يستخدمه يعتمد على النظام والتعريف والبرنامج.',
          'من حيث عرض النطاق، لدى M4 (‏120 GB/s) سقف سرعة أعلى من جهازي AMD مع DDR5-5600 (نحو 90 GB/s نظريًا). ميزة UM790 Pro هي السعة: حتى 64 GB تتسع لنماذج أكبر مثل 30B Q4 (نحو 18 GB) الذي لا يتسع في 16 GB، لكنه سيكون بطيئًا. وفي تشكيلة Mac mini الجديدة يصل M5 Pro وحده إلى 64 GB، بينما يتوقف M6 عند 32 GB.',
          'للاطلاع على دليل شامل لاختيار العتاد لنماذج اللغة الكبيرة المحلية، راجع <a href="/ar/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">ملخص أفضل واجهات Ollama</a>، الذي يغطي الجانب البرمجي من الإعداد المحلي.',
          'للحصول على توصيات محددة للأجهزة المصغرة في اليابان مع روابط Amazon.co.jp وأسعار بالين الياباني، راجع <a href="/ar/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">دليل أفضل الأجهزة المصغرة لنماذج اللغة الكبيرة المحلية في اليابان</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'إجابات سريعة حول الأجهزة المصغرة لنماذج اللغة الكبيرة المحلية',
        faqs: [
          {
            q: 'هل يمكن لـMac Mini M4 تشغيل نموذج 13B محلياً؟',
            a: 'بصعوبة مع 16 GB: حجم ملف 13B Q4 نحو 8 GB، ويحتاج macOS وتطبيقاتك والسياق إلى ذاكرة أيضًا، لذا فنماذج 7–8B خيار أكثر أمانًا. ووفق قاعدة عرض النطاق يعمل 13B Q4 على M4 بنحو 9–12 tok/s (تقدير). الذاكرة الأكبر تمنح هامشًا أوسع: وصل M4 إلى 32 GB، وتوفر M4 Pro بسعات 24 أو 48 أو 64 GB. وفي التشكيلة الجديدة يصل M6 إلى 32 GB وM5 Pro إلى 64 GB.',
          },
          {
            q: 'هل يحتاج Minisforum UM790 Pro إلى ROCm لتسريع GPU؟',
            a: 'ليس بالضرورة. لا تذكر وثائق GPU في Ollama الشريحة Radeon 780M ضمن المعالجات المدعومة عبر ROCm. وتقول إن الدعم الإضافي في Windows وLinux يأتي عبر Vulkan دون تسمية هذه الشريحة. ولدى llama.cpp واجهة Vulkan خلفية أيضًا. تعتمد النتيجة على التعريفات والإصدارات: بعد الإعداد تحقق بالأمر `ollama ps` من أن النموذج يعمل على GPU.',
          },
          {
            q: 'هل Mac Mini M4 كافٍ للبرمجة مع نموذج 7B؟',
            a: 'قد يكفي. عند 15–20 tok/s تقديرًا يستغرق توليد 200 token نحو 10–13 ثانية، إضافة إلى وقت معالجة الطلب. وهو أنسب للمساعدة البرمجية بأسلوب المحادثة من الإكمال التلقائي الفوري.',
          },
          {
            q: 'ما أحجام النماذج التي يستطيع UM790 Pro تشغيلها؟',
            a: 'مع 64 GB يتسع نموذج 30B Q4 (نحو 18 GB)، لكن التقدير المبني على عرض النطاق مع DDR5-5600 هو نحو 3–4 tok/s فقط. وبالنسبة إلى 13B Q4 (نحو 8 GB) فهو نحو 7–9 tok/s. وقد تكون النتيجة الفعلية أقل.',
          },
          {
            q: 'متى يجب اختيار Beelink SER8 على Mac Mini M4 أو UM790 Pro؟',
            a: 'اختره إذا ناسبك سعره أو منافذه أو توفره أكثر. فهو يملك معالج الرسوميات نفسه Radeon 780M مثل UM790 Pro (مع Ryzen 7 8845HS)، لذا لا نتوقع فارقًا كبيرًا في السرعة بالذاكرة نفسها، ولم نختبر أيًا منهما. قارن الأسعار الحالية بالذاكرة والتخزين نفسيهما.',
          },
          {
            q: 'هل يجب أن أشتري Mac Mini M4 الآن أم أنتظر جهاز Mac mini الجديد بشريحة M6/M5 Pro؟',
            a: 'أعلنت Apple عن Mac mini بشريحتي M6 وM5 Pro في 25 أغسطس 2026 وتوفر منذ 22 سبتمبر: من 899 دولارًا (16 GB) و1,699 دولارًا (24 GB). أُطلق M4 بسعر 599 دولارًا، وأصبح سعر بدايته في الولايات المتحدة 799 دولارًا في مايو 2026. وقد يظل M4 من المخزون أو المستعمل مناسبًا لنماذج 7–8B إذا كان أرخص بوضوح من الطرازات الجديدة. وإذا احتجت 64 GB فلا يوفرها إلا M5 Pro (من 2,699 دولارًا)، بينما يتوقف M6 عند 32 GB.',
          },
        ],
      },
      relatedReading: {
        title: 'أدلة ذات صلة',
        items: [
          '[أفضل SSD لتحميل النماذج بسرعة](/ar/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo + Ollama + Vulkan: دليل الأداء](/ar/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Model Comparisons',
    title: '로컬 LLM용 최고의 미니 PC는?',
    heroImage: '/images/best-mini-pc-for-local-llm-overview-hero-ko.webp',
    seoTitle: '로컬 LLM용 최고의 미니 PC 2026 | PromptQuorum',
    metaDescription: '로컬 LLM용 Mac mini M4, UM790 Pro, Beelink SER8 비교: 메모리 대역폭, 7B Q4 추정 속도, RAM 한도, 신형 Mac mini M6·M5 Pro.',
    publishDate: '2026-05-18',
    dateModified: '2026-11-28',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    schema: {
      inLanguage: 'ko',
      articleUrl: 'https://www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-local-llm',
    },
    breadcrumbSchema: {
      items: [
        { position: 1, name: '홈', url: 'https://www.promptquorum.com/ko' },
        { position: 2, name: 'Prompt Bites', url: 'https://www.promptquorum.com/ko/prompt-bites' },
        { position: 3, name: '로컬 LLM용 최고의 미니 PC는?', url: 'https://www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-local-llm' },
      ],
    },
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM용 최고의 미니 PC는 무엇입니까?',
        answer: '전용 GPU 없이 7–13B Q4 모델을 실행할 수 있는 세 가지 선택지입니다. Mac mini M4는 셋 중 메모리 대역폭이 가장 높습니다(120GB/s, 7B Q4 약 15–20 tok/s 추정). Minisforum UM790 Pro와 Beelink SER8은 DDR5 슬롯 2개와 Radeon 780M 내장 GPU를 씁니다(최대 약 11–15 tok/s 추정). 모두 계산값이며 실측이 아닙니다.',
        bullets: ['Mac mini M4: 120GB/s, Llama 3.1 8B Q4에서 약 15–20 tok/s(추정)', 'Minisforum UM790 Pro: Ryzen 9 7940HS와 Radeon 780M, DDR5 최대 64GB', 'Beelink SER8: Ryzen 7 8845HS, 역시 Radeon 780M. 현재 가격을 비교하세요'],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: ['Mac mini M4: 메모리 대역폭 120GB/s, 7B Q4 약 15–20 tok/s(추정). Apple은 시험한 16GB 모델의 유휴 4W, 최대 65W를 공개합니다.', 'Minisforum UM790 Pro(Ryzen 9 7940HS, Radeon 780M)는 DDR5를 최대 64GB까지 지원합니다. DDR5-5600 대역폭 기준 추정은 7B Q4에서 최대 약 11–15 tok/s이며 실제는 더 낮을 수 있습니다.', 'Apple Silicon은 CPU와 GPU가 하나의 메모리를 공유합니다. 용량은 구매 때 정해지고 시스템도 일부를 사용합니다.', 'Beelink SER8(Ryzen 7 8845HS)도 같은 Radeon 780M 내장 GPU를 갖췄고 DDR5-5600에서 추정값이 같습니다. CPU 전용 기기가 아닙니다.', 'Apple은 2026년 8월 25일 새 Mac mini를 발표했고 9월 22일부터 판매합니다. M6는 899달러부터(16GB, 최대 32GB), M5 Pro는 1,699달러부터(24GB, 최대 64GB, 64GB는 2,699달러부터)입니다.'],
      },
      body1: {
        title: '셋 중 대역폭이 가장 높은 Mac mini M4',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Mac mini M4, Minisforum UM790 Pro, Beelink SER8 가운데 Mac mini M4의 메모리 대역폭이 120GB/s로 가장 높으며, 7B Q4 속도는 약 15–20 tok/s로 추정됩니다(실측 아님).' },
          { type: 'plain-terms', text: '어떤 모델이 들어가는지는 메모리 용량이, 답이 얼마나 빨리 생성되는지는 주로 메모리 대역폭이 결정합니다. 통합 메모리는 CPU와 GPU가 같은 RAM을 함께 쓰는 방식입니다.' },
        ],
        content: ['<strong>Mac mini M4의 메모리 대역폭은 120GB/s(<a href="https://support.apple.com/en-us/121555" class="text-primary hover:underline">Apple</a>)로, 두 AMD 미니 PC의 듀얼 채널 DDR5-5600 이론 최대치 약 90GB/s보다 높습니다.</strong> 저희 경험 법칙(대역폭의 약 60–80%를 모델 파일 크기로 나눔. Llama 3.1 8B Q4는 약 4.9GB)으로는 약 15–20 tok/s입니다. 추정값입니다. Apple은 시험한 16GB 모델의 <a href="https://support.apple.com/en-us/103253" class="text-primary hover:underline">유휴 4W, 최대 65W</a>를 공개합니다. 추론 중 전력은 측정하지 않았습니다.', 'Minisforum UM790 Pro(Ryzen 9 7940HS)와 Beelink SER8(Ryzen 7 8845HS)은 모두 Radeon 780M 내장 GPU와 DDR5 SO-DIMM 슬롯 2개를 갖췄습니다. 같은 법칙으로 DDR5-5600에서 7B Q4는 최대 약 11–15 tok/s입니다. 내장 GPU의 실제 결과는 더 낮을 수 있으며 드라이버와 백엔드에 좌우됩니다. <a href="https://docs.ollama.com/gpu" class="text-primary hover:underline">Ollama GPU 문서</a>의 ROCm 지원 목록에는 780M이 없으며, Vulkan을 통한 추가 GPU 지원을 설명하지만 이 칩을 명시하지는 않습니다. 실제로 GPU가 쓰이는지 확인하세요.', 'Apple은 2026년 8월 25일 새 Mac mini를 발표했고 9월 22일부터 판매합니다. M6는 16GB 899달러부터(최대 32GB), M5 Pro는 24GB 1,699달러부터(최대 64GB, 64GB는 2,699달러부터)입니다. Apple은 M6의 AI 성능이 M4보다 <a href="https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/" class="text-primary hover:underline">최대 4배 빠르다</a>고 주장하며, 이는 Apple 자체 수치입니다. M4는 599달러에 출시되었고, 2026년 5월 Apple이 그 구성을 없애면서 미국 시작 가격이 799달러가 되었습니다(<a href="https://www.macrumors.com/2026/05/01/mac-mini-now-starts-at-799/" class="text-primary hover:underline">MacRumors</a>). 재고나 중고 M4를 찾으면 실제 가격을 신제품과 비교하세요.', '표는 세 미니 PC를 칩, 예시 메모리 구성, 추정 속도(대역폭으로 계산, PromptQuorum 실측 아님)로 비교합니다.'],
        columns: ['미니 PC', 'CPU/GPU', '예시 구성', 'LLM 속도 (7B Q4)'],
        rows: [
          { '미니 PC': 'Mac Mini M4', 'CPU/GPU': 'Apple M4', '예시 구성': '16 GB 통합', 'LLM 속도 (7B Q4)': '약 15–20 tok/s(추정)' },
          { '미니 PC': 'Minisforum UM790 Pro', 'CPU/GPU': 'Ryzen 9 7940HS', '예시 구성': '64 GB DDR5', 'LLM 속도 (7B Q4)': '최대 약 11–15 tok/s(추정)' },
          { '미니 PC': 'Beelink SER8', 'CPU/GPU': 'Ryzen 7 8845HS', '예시 구성': '64 GB DDR5', 'LLM 속도 (7B Q4)': '최대 약 11–15 tok/s(추정)' },
        ],
      },
      body2: {
        title: '용량은 담을 모델을, 대역폭은 속도를 좌우합니다',
        content: [
          '어떤 모델이 들어가는지는 메모리 용량이, 생성 속도는 주로 메모리 대역폭이 결정합니다. 전용 GPU가 내장된 미니 PC는 고정된 VRAM에 제한되며, 들어가지 않는 레이어는 시스템 메모리에서 더 느리게 실행됩니다. 여기의 세 기기는 시스템 메모리를 공유하는 내장 GPU를 씁니다. 내장 GPU가 쓸 수 있는 양은 시스템, 드라이버, 소프트웨어에 따라 다릅니다.',
          '대역폭 기준으로 M4(120GB/s)는 DDR5-5600을 쓰는 AMD 기기(이론상 약 90GB/s)보다 속도 상한이 높습니다. UM790 Pro의 장점은 용량입니다. 최대 64GB면 16GB에 들어가지 않는 30B Q4(약 18GB) 같은 큰 모델도 담을 수 있지만 느립니다. 새 Mac mini 라인에서는 M5 Pro만 64GB를 지원하고 M6는 32GB까지입니다.',
          '로컬 LLM을 위한 완전한 하드웨어 선택 가이드를 위해 <a href="/ko/prompt-bites/best-frontend-for-ollama" class="text-primary hover:underline">최고의 Ollama 프론트엔드 요약</a>을 참조하십시오. 이 가이드는 로컬 설정의 소프트웨어 측면을 다룹니다.',
          '일본 내 미니 PC 추천(Amazon.co.jp 링크 및 JPY 가격 포함)은 <a href="/ko/prompt-bites/best-mini-pc-local-llm-japan" class="text-primary hover:underline">일본 로컬 LLM용 최고의 미니 PC 가이드</a>를 참조하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '로컬 LLM용 미니 PC에 관한 빠른 답변',
        faqs: [
          {
            q: 'Mac Mini M4로 13B 모델을 로컬에서 실행할 수 있습니까?',
            a: '16GB에서는 아슬아슬합니다. 13B Q4 파일은 약 8GB이고 macOS, 앱, 컨텍스트도 메모리가 필요하므로 7–8B 모델이 더 안전합니다. 대역폭 법칙상 M4의 13B Q4는 약 9–12 tok/s입니다(추정). 메모리가 많을수록 여유가 있습니다. M4는 최대 32GB, M4 Pro는 24·48·64GB였습니다. 새 라인에서는 M6가 32GB, M5 Pro가 64GB까지입니다.',
          },
          {
            q: 'Minisforum UM790 Pro에서 GPU 가속을 위해 ROCm이 필요합니까?',
            a: '반드시 그렇지는 않습니다. Ollama GPU 문서는 ROCm 지원 GPU에 Radeon 780M을 넣지 않았습니다. Windows와 Linux의 추가 GPU 지원은 Vulkan을 통한다고 설명하지만 이 칩을 명시하지는 않습니다. llama.cpp에도 Vulkan 백엔드가 있습니다. 결과는 드라이버와 버전에 따라 다르므로 설정 후 `ollama ps`로 모델이 GPU에서 실행되는지 확인하세요.',
          },
          {
            q: 'Mac Mini M4로 7B 모델을 사용한 코딩 작업이 충분합니까?',
            a: '쓸 수 있습니다. 추정 15–20 tok/s라면 200토큰 생성에 약 10–13초가 걸리고 프롬프트 처리 시간이 추가됩니다. 즉각적인 자동 완성보다는 대화형 코딩 도움에 더 맞습니다.',
          },
          {
            q: 'UM790 Pro는 어떤 크기의 모델을 실행할 수 있나요?',
            a: '64GB면 30B Q4(약 18GB)가 들어갑니다. 다만 DDR5-5600 대역폭 기준 추정은 약 3–4 tok/s에 불과합니다. 13B Q4(약 8GB)는 약 7–9 tok/s입니다. 실제는 더 낮을 수 있습니다.',
          },
          {
            q: 'Mac Mini M4나 UM790 Pro 대신 Beelink SER8을 선택해야 하는 경우는 언제입니까?',
            a: '가격, 포트, 재고가 더 맞으면 선택하세요. UM790 Pro와 같은 Radeon 780M 내장 GPU(CPU는 Ryzen 7 8845HS)이므로 같은 메모리라면 LLM 속도 차이가 크지 않을 것으로 예상합니다. 두 제품 모두 테스트하지 않았습니다. 같은 RAM과 저장 용량으로 현재 가격을 비교하세요.',
          },
          {
            q: '지금 Mac Mini M4를 사야 할까요, 아니면 신형 M6/M5 Pro Mac mini를 기다려야 할까요?',
            a: 'Apple은 2026년 8월 25일 M6와 M5 Pro Mac mini를 발표했고 9월 22일부터 판매합니다. 각각 899달러(16GB), 1,699달러(24GB)부터입니다. M4는 599달러에 출시되었고 2026년 5월 미국 시작 가격이 799달러가 되었습니다. 재고나 중고 M4가 신제품보다 확실히 싸다면 7–8B 모델에는 여전히 쓸 만합니다. 64GB가 필요하면 M5 Pro만 제공하며(2,699달러부터) M6는 32GB까지입니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽기 자료',
        items: [
          '[Ollama 최고의 프론트엔드](/ko/prompt-bites/best-frontend-for-ollama)',
          '[일본 로컬 LLM용 최고의 미니 PC](/ko/prompt-bites/best-mini-pc-local-llm-japan)',
          '[로컬 LLM 소프트웨어 디렉토리 2026](/ko/directory)',
          '[빠른 모델 로딩을 위한 최고의 SSD](/ko/prompt-bites/best-ssd-fast-model-loading)',
          '[Strix Halo Ollama Vulkan 설정 가이드](/ko/prompt-bites/strix-halo-ollama-vulkan)',
        ],
      },
    },
  },
}
