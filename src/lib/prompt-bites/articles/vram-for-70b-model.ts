import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much VRAM for a 70B Model?',
    seoTitle: '70B VRAM: 3 Run Options 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'A 70B model at Q4_K_M needs ~40 GB VRAM. Options: dual RTX 3090 (48 GB), M5 Max 128 GB unified memory, or cloud GPU. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 70B'],
    current_hardware_mentioned: ['RTX 3090', 'M5 Max'],
    educationalLevel: 'Advanced',
    audience: 'Developers planning to run 70B models locally',
    parentArticle: '/local-llms/run-70b-models-24gb-vram',
    siblingBites: ['how-much-ram-for-7b-model', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much VRAM for a 70B model?',
        answer: 'A 70B model at Q4_K_M needs approximately 40 GB of VRAM. Consumer options: dual RTX 3090 (48 GB total), M5 Max with 128 GB unified memory, or cloud GPU rental.',
        bullets: [
          'Q4_K_M 70B: ~40 GB VRAM required',
          'Dual RTX 3090 (48 GB total): consumer desktop option',
          'M5 Max 128 GB unified memory: best single-machine experience',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie viel VRAM braucht ein 70B-Modell?',
        answer: 'Ein 70B-Modell bei Q4_K_M benötigt ca. 40 GB VRAM. Consumer-Optionen: zwei RTX 3090 (48 GB gesamt), M5 Max mit 128 GB Unified Memory oder Cloud-GPU-Miete.',
        bullets: [
          'Q4_K_M 70B: ~40 GB VRAM erforderlich',
          'Dual RTX 3090 (48 GB gesamt): Consumer-Desktop-Option',
          'M5 Max 128 GB Unified Memory: beste Einzelsystem-Erfahrung',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'De combien de VRAM a besoin un modèle 70B ?',
        answer: 'Un modèle 70B en Q4_K_M nécessite environ 40 Go de VRAM. Options grand public : dual RTX 3090 (48 Go total), M5 Max avec 128 Go de mémoire unifiée, ou location de GPU cloud.',
        bullets: [
          'Q4_K_M 70B : ~40 Go de VRAM requis',
          'Dual RTX 3090 (48 Go total) : option desktop grand public',
          'M5 Max 128 Go de mémoire unifiée : meilleure expérience monoposte',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: '70BモデルにはどれくらいのVRAMが必要ですか？',
        answer: 'Q4_K_Mの70Bモデルには約40 GBのVRAMが必要です。コンシューマー向けの選択肢：デュアルRTX 3090（合計48 GB）、128 GB統合メモリ搭載のM5 Max、またはクラウドGPUのレンタル。',
        bullets: [
          'Q4_K_M 70B：約40 GB VRAM必要',
          'デュアルRTX 3090（合計48 GB）：コンシューマーデスクトップの選択肢',
          'M5 Max 128 GB統合メモリ：シングルマシンの最良の選択',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: '运行70B模型需要多少显存？',
        answer: 'Q4_K_M量化的70B模型需要约40 GB显存。消费级选项：双RTX 3090（共48 GB）、M5 Max（128 GB统一内存）或云端GPU租用。',
        bullets: [
          'Q4_K_M 70B：约需40 GB显存',
          '双RTX 3090（共48 GB）：消费级台式机方案',
          'M5 Max 128 GB统一内存：最佳单机体验',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A 70B model at Q4_K_M needs approximately 40 GB of VRAM',
          'Consumer hardware options: dual RTX 3090 (48 GB) or Apple M5 Max with 128 GB unified memory',
          'For occasional use under 5 hours per week, cloud GPU rental at $0.50–$1.50/hour is cheaper than buying hardware',
        ],
      },
      body1: {
        title: 'Hardware Options for Running a 70B Model',
        content: [
          'As of May 2026, <strong>a 70B model at Q4_K_M is approximately 40 GB of compressed weights — 1.7× a single RTX 4090 and 1.6× a single RTX 3090.</strong> This is why 70B is the hardest tier to run locally: it crosses the boundary between consumer GPUs (max 24 GB) and workstation hardware. Three paths exist, each with different trade-offs.',
          'Apple M5 Max with 128 GB unified memory is the smoothest single-machine option — no PCIe transfer bottleneck between CPU and GPU memory, and macOS manages allocation automatically. Dual RTX 3090s work but require a workstation-class desktop and careful driver configuration.',
        ],
        columns: ['Hardware', 'Total VRAM', 'Speed'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'Total VRAM': '48 GB', 'Speed': '~8 tok/s' },
          { 'Hardware': 'RTX 3090 + CPU offload', 'Total VRAM': '24 GB + 32 GB RAM', 'Speed': '~3 tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Total VRAM': '128 GB unified', 'Speed': '~15 tok/s' },
          { 'Hardware': 'RunPod H100 (cloud)', 'Total VRAM': '80 GB', 'Speed': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'When Cloud Makes More Sense Than Local',
        content: [
          'Cloud GPU rental for 70B inference runs $0.50–$1.50 per hour on RunPod and Lambda Labs as of May 2026. A dual RTX 3090 setup costs $1,500–$2,500 in hardware, which amortizes to cloud costs only after 1,500–3,000 hours of use.',
          'For teams or individuals using 70B models fewer than 5 hours per week, cloud rental is both cheaper and easier to maintain. Local 70B is justified for privacy-sensitive use cases (no data leaving your hardware) or sustained high-frequency inference where cloud costs compound quickly. For smaller models that fit on consumer GPUs, see <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the VRAM tier guide</a>.',
          'For a full breakdown of 70B deployment strategies, see <a href="/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">how to run 70B models with 24 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 70B Model VRAM',
        faqs: [
          {
            q: 'Can a single RTX 3090 run a 70B model?',
            a: 'Partially. A single RTX 3090 (24 GB) can run 70B with CPU offload, but speed drops to ~3 tok/s — too slow for interactive use. Full GPU inference for 70B requires 40+ GB in combined VRAM.',
          },
          {
            q: 'Can I run a 70B model on a MacBook?',
            a: 'Only on M3 Max, M4 Max, M4 Ultra, or M5 Max with 128 GB of unified memory. A MacBook with 32 GB RAM cannot run 70B at Q4. See <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">the RAM sizing guide</a> for smaller model alternatives.',
          },
          {
            q: 'Is there a cheaper way to run 70B models locally?',
            a: 'Yes — use Q2_K quantization to bring the 70B model down to ~21 GB VRAM, but quality degrades significantly. Alternatively, 34B models at Q5 deliver 80–90% of 70B quality at half the VRAM requirement.',
          },
          {
            q: 'How does 70B VRAM compare to a 13B model?',
            a: 'A 13B model at Q4 needs ~9 GB VRAM vs ~40 GB for 70B. For most tasks — chat, coding, summarization — a 13–14B model at Q5 covers the gap. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM requirements by model size</a>.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Wie viel VRAM braucht ein 70B-Modell?',
    seoTitle: 'VRAM für 70B-Modelle 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Ein 70B-Modell bei Q4_K_M benötigt ~40 GB VRAM. Dual RTX 3090, M5 Max 128 GB oder Cloud-GPU sind die Optionen. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ein 70B-Modell bei Q4_K_M benötigt ca. 40 GB VRAM',
          'Consumer-Hardware-Optionen: Dual RTX 3090 (48 GB) oder Apple M5 Max mit 128 GB Unified Memory',
          'Bei gelegentlicher Nutzung unter 5 Stunden pro Woche ist Cloud-GPU-Miete für ca. 0,50–1,50 USD/Stunde günstiger als Hardware-Kauf',
        ],
      },
      body1: {
        title: 'Hardware-Optionen für ein 70B-Modell',
        content: [
          'Stand Mai 2026: <strong>Ein 70B-Modell bei Q4_K_M entspricht ca. 40 GB komprimierter Gewichte — 1,7× eine einzelne RTX 4090 und 1,6× eine einzelne RTX 3090.</strong> Deshalb ist 70B die schwierigste Kategorie für lokale Ausführung: Sie überschreitet die Grenze zwischen Consumer-GPUs (max. 24 GB) und Workstation-Hardware. Drei Optionen stehen zur Auswahl, jede mit unterschiedlichen Kompromissen.',
          'Apple M5 Max mit 128 GB Unified Memory ist die komfortabelste Einzelsystem-Option — kein PCIe-Übertragungsengpass zwischen CPU- und GPU-Speicher, macOS verwaltet die Zuweisung automatisch. Dual RTX 3090 funktioniert, erfordert aber einen Workstation-Desktop und sorgfältige Treiberkonfiguration.',
        ],
        columns: ['Hardware', 'Gesamt-VRAM', 'Geschwindigkeit'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'Gesamt-VRAM': '48 GB', 'Geschwindigkeit': '~8 Tok/s' },
          { 'Hardware': 'RTX 3090 + CPU-Offload', 'Gesamt-VRAM': '24 GB + 32 GB RAM', 'Geschwindigkeit': '~3 Tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Gesamt-VRAM': '128 GB unified', 'Geschwindigkeit': '~15 Tok/s' },
          { 'Hardware': 'RunPod H100 (Cloud)', 'Gesamt-VRAM': '80 GB', 'Geschwindigkeit': '~50 Tok/s' },
        ],
      },
      body2: {
        title: 'Wann Cloud sinnvoller ist als lokale Hardware',
        content: [
          'Cloud-GPU-Miete für 70B-Inferenz kostet Stand Mai 2026 ca. 0,50–1,50 USD pro Stunde bei RunPod und Lambda Labs. Ein Dual RTX 3090-Setup kostet ca. 1.200–2.000 € als Hardware — Amortisation gegenüber Cloud-Kosten erst nach 1.500–3.000 Betriebsstunden.',
          'Für Teams oder Einzelpersonen, die 70B-Modelle weniger als 5 Stunden pro Woche nutzen, ist Cloud-Miete sowohl günstiger als auch wartungsärmer. Lokale 70B-Ausführung ist gerechtfertigt für datenschutzkritische Anwendungsfälle (keine Daten verlassen die eigene Hardware) oder dauerhaft hohe Inferenz-Frequenz, bei der Cloud-Kosten schnell eskalieren. Für kleinere Modelle, die auf Consumer-GPUs passen, siehe <a href="/prompt-bites/how-much-vram-for-local-llm?lang=de" class="text-primary hover:underline">den VRAM-Tier-Leitfaden</a>.',
          'Für eine vollständige Aufschlüsselung der 70B-Deployment-Strategien, siehe <a href="/local-llms/run-70b-models-24gb-vram?lang=de" class="text-primary hover:underline">wie man 70B-Modelle mit 24 GB VRAM betreibt</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen zum VRAM-Bedarf von 70B-Modellen',
        faqs: [
          {
            q: 'Kann eine einzelne RTX 3090 ein 70B-Modell ausführen?',
            a: 'Teilweise. Eine einzelne RTX 3090 (24 GB) kann 70B mit CPU-Offload betreiben, die Geschwindigkeit sinkt aber auf ~3 Tok/s — zu langsam für interaktive Nutzung. Vollständige GPU-Inferenz für 70B erfordert 40+ GB kombiniertes VRAM.',
          },
          {
            q: 'Kann ich ein 70B-Modell auf einem MacBook ausführen?',
            a: 'Nur auf M3 Max, M4 Max, M4 Ultra oder M5 Max mit 128 GB Unified Memory. Ein MacBook mit 32 GB RAM kann 70B bei Q4 nicht ausführen. Siehe <a href="/prompt-bites/how-much-ram-for-7b-model?lang=de" class="text-primary hover:underline">den RAM-Größenleitfaden</a> für kleinere Modell-Alternativen.',
          },
          {
            q: 'Gibt es einen günstigeren Weg, 70B-Modelle lokal zu betreiben?',
            a: 'Ja — verwenden Sie Q2_K-Quantisierung, um das 70B-Modell auf ~21 GB VRAM zu reduzieren, aber die Qualität verschlechtert sich erheblich. Alternativ liefern 34B-Modelle bei Q5 80–90 % der 70B-Qualität bei halbem VRAM-Bedarf.',
          },
          {
            q: 'Wie unterscheidet sich der VRAM-Bedarf von 70B vs. 13B?',
            a: 'Ein 13B-Modell bei Q4 benötigt ~9 GB VRAM vs. ~40 GB für 70B. Für die meisten Aufgaben — Chat, Coding, Zusammenfassung — deckt ein 13–14B-Modell bei Q5 den Unterschied ab. Siehe <a href="/prompt-bites/how-much-vram-for-local-llm?lang=de" class="text-primary hover:underline">VRAM-Anforderungen nach Modellgröße</a>.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Combien de VRAM pour un modèle 70B ?',
    seoTitle: 'VRAM pour 70B : 3 options 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Un modèle 70B en Q4_K_M nécessite ~40 Go de VRAM. Options : dual RTX 3090 (48 Go), M5 Max 128 Go ou GPU cloud. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Un modèle 70B en Q4_K_M nécessite environ 40 Go de VRAM',
          'Options matérielles grand public : dual RTX 3090 (48 Go) ou Apple M5 Max avec 128 Go de mémoire unifiée',
          'Pour une utilisation occasionnelle de moins de 5 heures par semaine, la location de GPU cloud à 0,50–1,50 $/h est moins chère que l\'achat de matériel',
        ],
      },
      body1: {
        title: 'Options matérielles pour un modèle 70B',
        content: [
          'En mai 2026, <strong>un modèle 70B en Q4_K_M représente environ 40 Go de poids compressés — 1,7× une RTX 4090 seule et 1,6× une RTX 3090 seule.</strong> C\'est pourquoi le 70B est le palier le plus difficile à exécuter localement : il dépasse la limite des GPU grand public (max. 24 Go) pour entrer dans le territoire des stations de travail. Trois options existent, chacune avec ses compromis.',
          'L\'Apple M5 Max avec 128 Go de mémoire unifiée est l\'option monoposte la plus fluide — sans goulot d\'étranglement PCIe entre la mémoire CPU et GPU, macOS gère l\'allocation automatiquement. Le dual RTX 3090 fonctionne mais nécessite un desktop workstation et une configuration soigneuse des pilotes.',
        ],
        columns: ['Matériel', 'VRAM total', 'Vitesse'],
        rows: [
          { 'Matériel': 'Dual RTX 3090', 'VRAM total': '48 Go', 'Vitesse': '~8 tok/s' },
          { 'Matériel': 'RTX 3090 + déchargement CPU', 'VRAM total': '24 Go + 32 Go RAM', 'Vitesse': '~3 tok/s' },
          { 'Matériel': 'Apple M5 Max 128 Go', 'VRAM total': '128 Go unifié', 'Vitesse': '~15 tok/s' },
          { 'Matériel': 'RunPod H100 (cloud)', 'VRAM total': '80 Go', 'Vitesse': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'Quand le cloud est plus judicieux que le local',
        content: [
          'La location de GPU cloud pour l\'inférence 70B coûte entre 0,50 et 1,50 $ par heure sur RunPod et Lambda Labs en mai 2026. Un setup dual RTX 3090 revient à env. 1 200–2 000 € en matériel, et ne s\'amortit face aux coûts cloud qu\'après 1 500–3 000 heures d\'utilisation.',
          'Pour les équipes ou particuliers utilisant les modèles 70B moins de 5 heures par semaine, la location cloud est à la fois moins chère et plus facile à maintenir. Le 70B local se justifie pour les cas d\'usage sensibles à la confidentialité (aucune donnée ne quitte le matériel) ou pour une inférence fréquente et soutenue où les coûts cloud s\'accumulent rapidement. Pour les modèles plus petits adaptés aux GPU grand public, voir <a href="/prompt-bites/how-much-vram-for-local-llm?lang=fr" class="text-primary hover:underline">le guide des niveaux VRAM</a>.',
          'Pour une analyse complète des stratégies de déploiement 70B, voir <a href="/local-llms/run-70b-models-24gb-vram?lang=fr" class="text-primary hover:underline">comment exécuter des modèles 70B avec 24 Go de VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes sur le VRAM des modèles 70B',
        faqs: [
          {
            q: 'Une seule RTX 3090 peut-elle faire tourner un modèle 70B ?',
            a: 'Partiellement. Une RTX 3090 seule (24 Go) peut exécuter le 70B avec déchargement CPU, mais la vitesse tombe à ~3 tok/s — trop lent pour une utilisation interactive. L\'inférence GPU complète pour le 70B nécessite 40+ Go de VRAM combiné.',
          },
          {
            q: 'Puis-je faire tourner un modèle 70B sur un MacBook ?',
            a: 'Uniquement sur M3 Max, M4 Max, M4 Ultra ou M5 Max avec 128 Go de mémoire unifiée. Un MacBook avec 32 Go de RAM ne peut pas exécuter le 70B en Q4. Voir <a href="/prompt-bites/how-much-ram-for-7b-model?lang=fr" class="text-primary hover:underline">le guide de dimensionnement RAM</a> pour des alternatives plus petites.',
          },
          {
            q: 'Existe-t-il un moyen moins cher d\'exécuter des modèles 70B localement ?',
            a: 'Oui — utilisez la quantisation Q2_K pour ramener le modèle 70B à ~21 Go de VRAM, mais la qualité se dégrade considérablement. Alternativement, les modèles 34B en Q5 offrent 80–90 % de la qualité du 70B pour la moitié des besoins VRAM.',
          },
          {
            q: 'Comment se compare le VRAM d\'un 70B par rapport à un 13B ?',
            a: 'Un modèle 13B en Q4 nécessite ~9 Go de VRAM contre ~40 Go pour le 70B. Pour la plupart des tâches — chat, code, résumé — un modèle 13–14B en Q5 couvre l\'écart. Voir <a href="/prompt-bites/how-much-vram-for-local-llm?lang=fr" class="text-primary hover:underline">les besoins VRAM par taille de modèle</a>.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '70BモデルにはどれくらいのVRAMが必要ですか？',
    seoTitle: '70BモデルのVRAM：3つの方法 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_Mの70Bモデルには約40 GBのVRAMが必要です。デュアルRTX 3090（48 GB）、M5 Max 128 GB統合メモリ、またはクラウドGPUが選択肢です。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_Mの70Bモデルには約40 GBのVRAMが必要です',
          'コンシューマー向けハードウェア：デュアルRTX 3090（48 GB）またはApple M5 Max（128 GB統合メモリ）',
          '週5時間未満の使用であれば、$0.50–$1.50/時のクラウドGPUレンタルの方がハードウェア購入より安価です',
        ],
      },
      body1: {
        title: '70Bモデルを動かすハードウェアの選択肢',
        content: [
          '2026年5月現在、<strong>Q4_K_Mの70Bモデルは約40 GBの圧縮済み重みに相当します — RTX 4090の1.7倍、RTX 3090の1.6倍です。</strong>これが70Bをローカルで動かす最も難しい理由です：コンシューマーGPU（最大24 GB）とワークステーション級ハードウェアの境界を越えています。3つの選択肢があり、それぞれ異なるトレードオフがあります。',
          '128 GB統合メモリ搭載のApple M5 Maxが最もスムーズなシングルマシン選択肢です — CPUとGPUメモリ間のPCIe転送ボトルネックがなく、macOSが自動的にメモリ割り当てを管理します。デュアルRTX 3090も動作しますが、ワークステーション級のデスクトップと慎重なドライバー設定が必要です。',
        ],
        columns: ['ハードウェア', '合計VRAM', '速度'],
        rows: [
          { 'ハードウェア': 'デュアルRTX 3090', '合計VRAM': '48 GB', '速度': '~8トークン/秒' },
          { 'ハードウェア': 'RTX 3090 + CPUオフロード', '合計VRAM': '24 GB + 32 GB RAM', '速度': '~3トークン/秒' },
          { 'ハードウェア': 'Apple M5 Max 128 GB', '合計VRAM': '128 GB統合', '速度': '~15トークン/秒' },
          { 'ハードウェア': 'RunPod H100（クラウド）', '合計VRAM': '80 GB', '速度': '~50トークン/秒' },
        ],
      },
      body2: {
        title: 'クラウドの方がローカルより合理的な場合',
        content: [
          '2026年5月現在、70B推論のクラウドGPUレンタルはRunPodとLambda Labsで1時間あたり$0.50–$1.50です。デュアルRTX 3090のセットアップには$1,500–$2,500のハードウェアコストがかかり、クラウドコストに対して1,500–3,000時間の使用後でのみ元が取れます。',
          '70Bモデルを週5時間未満しか使わないチームや個人にとって、クラウドレンタルは安価で保守も容易です。ローカル70Bが正当化されるのは、プライバシーに敏感なユースケース（データが自分のハードウェアから出ない）や、クラウドコストが急速に積み上がる高頻度の推論です。コンシューマーGPUで動くより小さなモデルについては、<a href="/prompt-bites/how-much-vram-for-local-llm?lang=ja" class="text-primary hover:underline">VRAMティアガイド</a>を参照してください。',
          '70Bデプロイ戦略の詳細については、<a href="/local-llms/run-70b-models-24gb-vram?lang=ja" class="text-primary hover:underline">24 GB VRAMで70Bモデルを動かす方法</a>を参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: '70BモデルのVRAMに関するよくある質問',
        faqs: [
          {
            q: 'RTX 3090 1枚で70Bモデルを動かせますか？',
            a: '部分的には可能です。RTX 3090 1枚（24 GB）はCPUオフロードで70Bを動かせますが、速度は約3トークン/秒に落ちます — インタラクティブな使用には遅すぎます。70Bの完全GPU推論には合計40+ GBのVRAMが必要です。',
          },
          {
            q: 'MacBookで70Bモデルを動かせますか？',
            a: '128 GB統合メモリを搭載したM3 Max、M4 Max、M4 Ultra、またはM5 Maxのみ可能です。32 GB RAMのMacBookではQ4で70Bを動かせません。より小さなモデルの代替については<a href="/prompt-bites/how-much-ram-for-7b-model?lang=ja" class="text-primary hover:underline">RAMサイジングガイド</a>をご覧ください。',
          },
          {
            q: '70Bモデルをローカルで動かす安価な方法はありますか？',
            a: 'はい — Q2_K量化を使うと70Bモデルを約21 GB VRAMに抑えられますが、品質は大幅に低下します。代替として、Q5の34Bモデルは70B品質の80–90%をVRAM必要量の半分で実現します。',
          },
          {
            q: '70BのVRAM必要量は13Bと比べてどうですか？',
            a: '13BモデルのQ4は約9 GB VRAMが必要で、70Bの約40 GBとは大きな差があります。チャット、コーディング、要約など多くのタスクでは、Q5の13–14Bモデルでその差を埋められます。<a href="/prompt-bites/how-much-vram-for-local-llm?lang=ja" class="text-primary hover:underline">モデルサイズ別のVRAM必要量</a>を参照してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '运行70B模型需要多少显存？',
    seoTitle: '70B模型VRAM：3种方案 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M量化的70B模型需要约40 GB显存。选项：双RTX 3090（48 GB）、M5 Max 128 GB统一内存或云端GPU。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M量化的70B模型需要约40 GB显存',
          '消费级硬件选项：双RTX 3090（48 GB）或Apple M5 Max（128 GB统一内存）',
          '每周使用不足5小时的情况下，$0.50–$1.50/小时的云端GPU租用比购买硬件更经济',
        ],
      },
      body1: {
        title: '运行70B模型的硬件选项',
        content: [
          '截至2026年5月，<strong>Q4_K_M量化的70B模型约有40 GB压缩权重——相当于单张RTX 4090的1.7倍，单张RTX 3090的1.6倍。</strong>这就是为什么70B是本地运行最困难的层级：它跨越了消费级GPU（最大24 GB）与工作站级硬件的界限。有三种方案可供选择，各有不同的权衡。',
          '搭载128 GB统一内存的Apple M5 Max是最流畅的单机选择——CPU和GPU内存之间没有PCIe传输瓶颈，macOS自动管理内存分配。双RTX 3090也可行，但需要工作站级台式机和细致的驱动程序配置。',
        ],
        columns: ['硬件', '显存总量', '速度'],
        rows: [
          { '硬件': '双RTX 3090', '显存总量': '48 GB', '速度': '~8 tok/s' },
          { '硬件': 'RTX 3090 + CPU卸载', '显存总量': '24 GB + 32 GB RAM', '速度': '~3 tok/s' },
          { '硬件': 'Apple M5 Max 128 GB', '显存总量': '128 GB统一内存', '速度': '~15 tok/s' },
          { '硬件': 'RunPod H100（云端）', '显存总量': '80 GB', '速度': '~50 tok/s' },
        ],
      },
      body2: {
        title: '何时云端比本地更合理',
        content: [
          '截至2026年5月，RunPod和Lambda Labs上70B推理的云端GPU租用费用为每小时$0.50–$1.50。双RTX 3090配置的硬件成本为$1,500–$2,500，需要使用1,500–3,000小时后才能摊平云端成本。',
          '对于每周使用70B模型不足5小时的团队或个人，云端租用既更便宜又更易维护。本地70B适用于隐私敏感场景（数据不离开自有硬件）或高频推理场景（云端成本快速累积）。对于适合消费级GPU的较小模型，请参阅<a href="/prompt-bites/how-much-vram-for-local-llm?lang=zh" class="text-primary hover:underline">显存层级指南</a>。',
          '70B部署策略的完整分析，请参阅<a href="/local-llms/run-70b-models-24gb-vram?lang=zh" class="text-primary hover:underline">如何用24 GB显存运行70B模型</a>。',
        ],
      },
      faq: {
        id: 'faq',
        title: '关于70B模型显存的常见问题',
        faqs: [
          {
            q: '单张RTX 3090能运行70B模型吗？',
            a: '部分可行。单张RTX 3090（24 GB）可通过CPU卸载运行70B，但速度降至约3 tok/s——对交互式使用太慢。70B的完整GPU推理需要40+ GB组合显存。',
          },
          {
            q: '能在MacBook上运行70B模型吗？',
            a: '仅限搭载128 GB统一内存的M3 Max、M4 Max、M4 Ultra或M5 Max。32 GB RAM的MacBook无法以Q4运行70B。较小模型的替代方案请参阅<a href="/prompt-bites/how-much-ram-for-7b-model?lang=zh" class="text-primary hover:underline">RAM容量指南</a>。',
          },
          {
            q: '有没有更便宜的方式在本地运行70B模型？',
            a: '有——使用Q2_K量化可将70B模型降至约21 GB显存，但质量会显著下降。另一选择是Q5量化的34B模型，以一半的显存需求提供70B质量的80–90%。',
          },
          {
            q: '70B与13B的显存需求对比如何？',
            a: 'Q4量化的13B模型约需9 GB显存，而70B约需40 GB。对于大多数任务——聊天、编程、摘要——Q5量化的13–14B模型可以弥补差距。请参阅<a href="/prompt-bites/how-much-vram-for-local-llm?lang=zh" class="text-primary hover:underline">按模型大小划分的显存需求</a>。',
          },
        ],
      },
    },
  },
}
