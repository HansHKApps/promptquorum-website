import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'What Is Q4_K_M Quantization?',
    seoTitle: 'Q4_K_M Quantization Guide 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M means 4-bit k-quant at medium quality. Better than Q4_0, smaller than Q8_0. Use Q4_K_M as your default for Ollama. Quick guide from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers running local LLMs for the first time',
    parentArticle: '/local-llms/quantization-levels-comparison',
    siblingBites: ['q4-k-m-vs-q8-0', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What is Q4_K_M quantization?',
        answer: 'Q4_K_M means 4-bit quantization using k-quant (K) compression at medium (M) quality. It is the best default for most models: better quality than Q4_0, smaller than Q8_0.',
        bullets: [
          'Q = quantized, 4 = 4-bit, K = k-quant, M = medium',
          'Better quality than Q4_0 at the same file size',
          'Use Q4_K_M as your default quantization',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was bedeutet Q4_K_M-Quantisierung?',
        answer: 'Q4_K_M = 4-Bit-Quantisierung mit K-Quant-Kompression auf mittlerem Qualitätsniveau. Besser als Q4_0 bei gleicher Dateigröße, kleiner als Q8_0. Verwenden Sie es als Standard.',
        bullets: [
          'Q = quantisiert, 4 = 4 Bit, K = K-Quant, M = mittel',
          'Bessere Qualität als Q4_0 bei gleicher Dateigröße',
          'Q4_K_M als Standard-Quantisierung verwenden',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Qu\'est-ce que la quantisation Q4_K_M ?',
        answer: 'Q4_K_M signifie quantisation 4 bits avec compression k-quant à qualité moyenne. Meilleure que Q4_0 à taille égale, plus petite que Q8_0. À utiliser comme standard.',
        bullets: [
          'Q = quantisé, 4 = 4 bits, K = k-quant, M = moyen',
          'Meilleure qualité que Q4_0 à la même taille de fichier',
          'Utiliser Q4_K_M comme quantisation par défaut',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'Q4_K_M量化とは何ですか？',
        answer: 'Q4_K_MはK-Quant（K）圧縮を使用した4ビット量化で、品質は中程度（M）です。ほとんどのモデルのデフォルトとして最適：Q4_0より品質が高く、Q8_0より小さいです。',
        bullets: [
          'Q=量化済み、4=4ビット、K=K-Quant、M=中程度',
          'Q4_0と同じファイルサイズでより高品質',
          'Q4_K_Mをデフォルトの量化として使用する',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'Q4_K_M量化是什么？',
        answer: 'Q4_K_M表示使用K-Quant（K）压缩的4位量化，品质为中等（M）。这是大多数模型的最佳默认选择：质量优于Q4_0，文件大小小于Q8_0。',
        bullets: [
          'Q=量化，4=4位，K=K-Quant，M=中等',
          '相同文件大小下质量优于Q4_0',
          '将Q4_K_M作为默认量化格式使用',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Qué es la cuantización Q4_K_M?',
        answer: 'Q4_K_M significa cuantización de 4 bits con compresión k-quant (K) a calidad media (M). Es la mejor opción por defecto para la mayoría de modelos: mejor calidad que Q4_0, menor tamaño que Q8_0.',
        bullets: [
          'Q = cuantizado, 4 = 4 bits, K = k-quant, M = medio',
          'Mejor calidad que Q4_0 al mismo tamaño de archivo',
          'Usa Q4_K_M como cuantización predeterminada',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 4-bit quantization with k-quant compression at medium quality — better than Q4_0 at the same file size',
          'A 7B model at Q4_K_M fits in ~4.1 GB on disk and needs ~5.5 GB VRAM to run',
          'Use Q4_K_M as your default — it delivers the best quality-per-gigabyte for most VRAM budgets',
        ],
      },
      body1: {
        title: 'What Each Letter in Q4_K_M Means',
        content: [
          'As of May 2026, <strong>Q4_K_M exists because old 4-bit formats (Q4_0) lost too much quality on critical weights.</strong> K-quant compression solves this by allocating more bits to weights that affect output most, and fewer bits to weights with minimal impact. The result: 5–8% better quality than Q4_0 at the same file size.',
          'The "K" is the key differentiator. K-quant compression applies non-uniform bit allocation — critical weights get more bits, less important ones get fewer. This recovers 5–8% quality compared to the older Q4_0 format at the same file size.',
          'The "M" is the quality setting within k-quant. Q4_K_S (small) is slightly smaller with lower quality. Q4_K_M (medium) is the best balance. Q4_K_L (large) is marginally better but rarely worth the extra size.',
          '<strong>K-quant works by clustering weights and assigning bits based on importance.</strong> Top-importance clusters get 6 bits per weight. Mid-tier clusters get 4 bits. Low-importance clusters get 3 bits. The "M" tier averages 4.5 bits per weight across the model — explaining why Q4_K_M sits between Q4_K_S and Q5_K_M in both size and quality. For when the M tier is not enough, see <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
      },
      body2: {
        title: 'How Q4_K_M Compares to Other Quantizations',
        content: [
          'The table below shows the tradeoffs for a 7B model. Quality is relative to the full-precision Q8_0 baseline. Unless you have 12+ GB VRAM, Q4_K_M gives the best quality-per-gigabyte.',
          'For a direct comparison of Q4_K_M vs Q8_0, see the <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 decision guide</a>. For the full quantization reference, see the <a href="/local-llms/quantization-levels-comparison" class="text-primary hover:underline">quantization levels comparison</a>.',
        ],
        columns: ['Format', 'File Size (7B)', 'Quality vs Q8_0'],
        rows: [
          { 'Format': 'Q4_0', 'File Size (7B)': '3.8 GB', 'Quality vs Q8_0': 'Baseline (~87%)' },
          { 'Format': 'Q4_K_M', 'File Size (7B)': '4.1 GB', 'Quality vs Q8_0': '~92% (+5%)' },
          { 'Format': 'Q5_K_M', 'File Size (7B)': '5.0 GB', 'Quality vs Q8_0': '~95% (+3%)' },
          { 'Format': 'Q8_0', 'File Size (7B)': '7.7 GB', 'Quality vs Q8_0': '100% (reference)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Quantization',
        faqs: [
          {
            q: 'Is Q4_K_M the same as Q4_0?',
            a: 'No. Q4_K_M uses k-quant compression which recovers 5–8% quality over Q4_0 at the same bit depth. Always prefer Q4_K_M over Q4_0. See the <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 guide</a> for when to go higher.',
          },
          {
            q: 'Which quantization should I use for 8 GB VRAM?',
            a: 'Q4_K_M for 7B models (5.5 GB VRAM). If you want better quality and have headroom, Q5_K_M uses 6.5 GB and adds ~3% quality. Both fit comfortably in 8 GB.',
          },
          {
            q: "What does the 'M' in Q4_K_M stand for?",
            a: "Medium — it refers to the quality tier within k-quant compression. Q4_K_S is the small (lower quality) variant, Q4_K_M is medium (recommended), and Q4_K_L is large (marginal gain over M).",
          },
          {
            q: 'Which models on Ollama use Q4_K_M by default?',
            a: 'Most of them — Llama 3, Mistral, Qwen, Phi, and Gemma all default to Q4_K_M tags. Specify <code>:q5_K_M</code> or <code>:q8_0</code> in the model tag to switch quantization.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: 'Was ist Q4_K_M-Quantisierung?',
    seoTitle: 'Q4_K_M erklärt: k-quant 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M = 4-Bit-K-Quant auf mittlerem Qualitätsniveau. Besser als Q4_0, kleiner als Q8_0. Verwenden Sie es als Standard. Schnelle Antwort von PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 4-Bit-Quantisierung mit K-Quant-Kompression auf mittlerem Qualitätsniveau — besser als Q4_0 bei gleicher Dateigröße',
          'Ein 7B-Modell bei Q4_K_M belegt ~4,1 GB auf der Festplatte und benötigt ~5,5 GB VRAM zum Betrieb',
          'Verwenden Sie Q4_K_M als Standard — es liefert das beste Qualitäts-pro-Gigabyte-Verhältnis für die meisten VRAM-Budgets',
        ],
      },
      body1: {
        title: 'Was jeder Buchstabe in Q4_K_M bedeutet',
        content: [
          'Stand Mai 2026: <strong>Q4_K_M existiert, weil alte 4-Bit-Formate (Q4_0) bei kritischen Gewichten zu viel Qualität verloren.</strong> K-Quant-Kompression löst dies, indem sie wichtigen Gewichten mehr Bits zuweist und unwichtigeren Gewichten weniger. Das Ergebnis: 5–8 % bessere Qualität als Q4_0 bei gleicher Dateigröße.',
          'Das "K" ist der entscheidende Unterschied. K-Quant-Kompression wendet eine nicht-uniforme Bit-Zuweisung an — kritische Gewichte erhalten mehr Bits, weniger wichtige erhalten weniger. Das gewinnt 5–8 % Qualität gegenüber dem älteren Q4_0-Format bei gleicher Dateigröße zurück.',
          'Das "M" ist die Qualitätseinstellung innerhalb von K-Quant. Q4_K_S (small) ist etwas kleiner mit niedrigerer Qualität. Q4_K_M (medium) ist die beste Balance. Q4_K_L (large) ist geringfügig besser, aber selten die extra Größe wert.',
          '<strong>K-Quant funktioniert durch Clustering von Gewichten und Bit-Zuweisung basierend auf Wichtigkeit.</strong> Top-Wichtigkeits-Cluster erhalten 6 Bits pro Gewicht. Mittlere Cluster erhalten 4 Bits. Unwichtige Cluster erhalten 3 Bits. Die "M"-Stufe durchschnittlich 4,5 Bits pro Gewicht — was erklärt, warum Q4_K_M in Größe und Qualität zwischen Q4_K_S und Q5_K_M liegt. Für den Fall, dass die M-Stufe nicht ausreicht, siehe <a href="/de/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs. Q8_0</a>.',
        ],
      },
      body2: {
        title: 'Wie Q4_K_M im Vergleich zu anderen Quantisierungen abschneidet',
        content: [
          'Die folgende Tabelle zeigt die Kompromisse für ein 7B-Modell. Die Qualität ist relativ zur vollpräzisen Q8_0-Referenz. Es sei denn, Sie haben 12+ GB VRAM, bietet Q4_K_M das beste Qualitäts-pro-Gigabyte-Verhältnis.',
          'Für einen direkten Vergleich von Q4_K_M vs. Q8_0, siehe den <a href="/de/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs. Q8_0 Entscheidungsleitfaden</a>. Für die vollständige Quantisierungsreferenz, siehe den <a href="/de/local-llms/quantization-levels-comparison" class="text-primary hover:underline">Quantisierungsstufen-Vergleich</a>.',
        ],
        columns: ['Format', 'Dateigröße (7B)', 'Qualität vs. Q8_0'],
        rows: [
          { 'Format': 'Q4_0', 'Dateigröße (7B)': '3,8 GB', 'Qualität vs. Q8_0': 'Basiswert (~87 %)' },
          { 'Format': 'Q4_K_M', 'Dateigröße (7B)': '4,1 GB', 'Qualität vs. Q8_0': '~92 % (+5 %)' },
          { 'Format': 'Q5_K_M', 'Dateigröße (7B)': '5,0 GB', 'Qualität vs. Q8_0': '~95 % (+3 %)' },
          { 'Format': 'Q8_0', 'Dateigröße (7B)': '7,7 GB', 'Qualität vs. Q8_0': '100 % (Referenz)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Schnelle Antworten zur Quantisierung',
        faqs: [
          {
            q: 'Ist Q4_K_M dasselbe wie Q4_0?',
            a: 'Nein. Q4_K_M verwendet K-Quant-Kompression, die 5–8 % Qualität gegenüber Q4_0 bei gleicher Bittiefe zurückgewinnt. Bevorzugen Sie immer Q4_K_M gegenüber Q4_0. Siehe den <a href="/de/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs. Q8_0 Leitfaden</a> für den Fall, dass Sie höher gehen möchten.',
          },
          {
            q: 'Welche Quantisierung sollte ich für 8 GB VRAM verwenden?',
            a: 'Q4_K_M für 7B-Modelle (5,5 GB VRAM). Wenn Sie bessere Qualität wünschen und Spielraum haben, verwendet Q5_K_M 6,5 GB und fügt ~3 % Qualität hinzu. Beide passen bequem in 8 GB.',
          },
          {
            q: 'Wofür steht das "M" in Q4_K_M?',
            a: 'Medium (mittel) — es bezieht sich auf die Qualitätsstufe innerhalb der K-Quant-Kompression. Q4_K_S ist die kleine (niedrigere Qualität) Variante, Q4_K_M ist medium (empfohlen), und Q4_K_L ist large (marginaler Gewinn gegenüber M).',
          },
          {
            q: 'Welche Modelle auf Ollama verwenden standardmäßig Q4_K_M?',
            a: 'Die meisten — Llama 3, Mistral, Qwen, Phi und Gemma verwenden alle standardmäßig Q4_K_M-Tags. Geben Sie <code>:q5_K_M</code> oder <code>:q8_0</code> im Modell-Tag an, um die Quantisierung zu wechseln.',
          },
        ],
      },
    },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: 'Qu\'est-ce que la quantisation Q4_K_M ?',
    seoTitle: 'Q4_K_M : format k-quant 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M = k-quant 4 bits à qualité moyenne. Meilleure que Q4_0, plus petite que Q8_0. À utiliser comme standard. Réponse rapide par PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = quantisation 4 bits avec compression k-quant à qualité moyenne — meilleure que Q4_0 à taille de fichier égale',
          'Un modèle 7B en Q4_K_M occupe ~4,1 Go sur disque et nécessite ~5,5 Go de VRAM',
          'Utilisez Q4_K_M par défaut — c\'est le meilleur ratio qualité/gigaoctet pour la plupart des budgets VRAM',
        ],
      },
      body1: {
        title: 'Ce que signifie chaque lettre de Q4_K_M',
        content: [
          'En mai 2026, <strong>Q4_K_M existe parce que les anciens formats 4 bits (Q4_0) perdaient trop de qualité sur les poids critiques.</strong> La compression k-quant résout ce problème en allouant plus de bits aux poids qui influencent le plus les sorties, et moins aux poids à faible impact. Résultat : 5 à 8 % de qualité en plus par rapport à Q4_0 à taille de fichier identique.',
          'Le "K" est le différenciateur clé. La compression k-quant applique une allocation de bits non uniforme — les poids critiques reçoivent plus de bits, les moins importants en reçoivent moins. Cela récupère 5 à 8 % de qualité par rapport à l\'ancien format Q4_0 à même taille de fichier.',
          'Le "M" est le niveau de qualité au sein du k-quant. Q4_K_S (small) est légèrement plus petit avec une qualité moindre. Q4_K_M (medium) est le meilleur équilibre. Q4_K_L (large) est marginalement meilleur mais rarement justifié.',
          '<strong>Le k-quant fonctionne en regroupant les poids et en attribuant les bits selon leur importance.</strong> Les clusters de haute importance reçoivent 6 bits par poids. Les clusters intermédiaires reçoivent 4 bits. Les clusters peu importants reçoivent 3 bits. Le niveau "M" représente en moyenne 4,5 bits par poids — ce qui explique pourquoi Q4_K_M se situe entre Q4_K_S et Q5_K_M en taille et en qualité. Pour savoir quand le niveau M ne suffit pas, voir <a href="/fr/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
      },
      body2: {
        title: 'Comment Q4_K_M se compare aux autres quantisations',
        content: [
          'Le tableau ci-dessous montre les compromis pour un modèle 7B. La qualité est relative à la référence Q8_0 en pleine précision. Sauf si vous disposez de 12+ Go de VRAM, Q4_K_M offre le meilleur rapport qualité/gigaoctet.',
          'Pour une comparaison directe Q4_K_M vs Q8_0, voir le <a href="/fr/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guide de décision Q4_K_M vs Q8_0</a>. Pour la référence complète des quantisations, voir la <a href="/fr/local-llms/quantization-levels-comparison" class="text-primary hover:underline">comparaison des niveaux de quantisation</a>.',
        ],
        columns: ['Format', 'Taille du fichier (7B)', 'Qualité vs Q8_0'],
        rows: [
          { 'Format': 'Q4_0', 'Taille du fichier (7B)': '3,8 Go', 'Qualité vs Q8_0': 'Référence (~87 %)' },
          { 'Format': 'Q4_K_M', 'Taille du fichier (7B)': '4,1 Go', 'Qualité vs Q8_0': '~92 % (+5 %)' },
          { 'Format': 'Q5_K_M', 'Taille du fichier (7B)': '5,0 Go', 'Qualité vs Q8_0': '~95 % (+3 %)' },
          { 'Format': 'Q8_0', 'Taille du fichier (7B)': '7,7 Go', 'Qualité vs Q8_0': '100 % (référence)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Réponses rapides sur la quantisation',
        faqs: [
          {
            q: 'Q4_K_M est-il identique à Q4_0 ?',
            a: 'Non. Q4_K_M utilise la compression k-quant qui récupère 5 à 8 % de qualité par rapport à Q4_0 à même profondeur de bits. Préférez toujours Q4_K_M à Q4_0. Voir le <a href="/fr/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guide Q4_K_M vs Q8_0</a> pour savoir quand monter en niveau.',
          },
          {
            q: 'Quelle quantisation utiliser avec 8 Go de VRAM ?',
            a: 'Q4_K_M pour les modèles 7B (5,5 Go de VRAM). Si vous souhaitez une meilleure qualité et avez de la marge, Q5_K_M utilise 6,5 Go et ajoute ~3 % de qualité. Les deux rentrent confortablement dans 8 Go.',
          },
          {
            q: 'Que signifie le "M" dans Q4_K_M ?',
            a: 'Medium (moyen) — il désigne le niveau de qualité au sein de la compression k-quant. Q4_K_S est la variante petite (qualité moindre), Q4_K_M est medium (recommandé), et Q4_K_L est large (gain marginal par rapport à M).',
          },
          {
            q: 'Quels modèles sur Ollama utilisent Q4_K_M par défaut ?',
            a: 'La plupart — Llama 3, Mistral, Qwen, Phi et Gemma utilisent tous des tags Q4_K_M par défaut. Spécifiez <code>:q5_K_M</code> ou <code>:q8_0</code> dans le tag du modèle pour changer de quantisation.',
          },
        ],
      },
    },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M量化とは何ですか？',
    seoTitle: 'Q4_K_M量化の完全解説 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_Mは中品質のK-Quant 4ビット量化です。Q4_0より優れ、Q8_0より小さいです。デフォルトとして使用してください。PromptQuorumの解説。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 中品質のK-Quant圧縮による4ビット量化 — 同じファイルサイズでQ4_0より優れた品質',
          'Q4_K_Mの7Bモデルはディスク上で約4.1 GB、実行には約5.5 GB VRAMが必要',
          'Q4_K_Mをデフォルトとして使用 — ほとんどのVRAM予算でベストな品質対ギガバイト比を提供',
        ],
      },
      body1: {
        title: 'Q4_K_Mの各文字の意味',
        content: [
          '2026年5月現在、<strong>Q4_K_Mは古い4ビットフォーマット（Q4_0）が重要な重みで品質を失いすぎたために存在しています。</strong>K-Quant圧縮は、出力に最も影響を与える重みにより多くのビットを割り当て、影響の少ない重みには少ないビットを割り当てることでこれを解決します。結果：同じファイルサイズでQ4_0より5–8%品質が向上します。',
          '「K」が主要な差別化要因です。K-Quant圧縮は非均一なビット割り当てを適用します — 重要な重みはより多くのビットを得て、重要でないものはより少ないビットを得ます。これにより同じファイルサイズで古いQ4_0フォーマットと比べて5–8%の品質を回復します。',
          '「M」はK-Quant内の品質設定です。Q4_K_S（small）は品質が低いが少し小さいです。Q4_K_M（medium）は最もバランスが取れています。Q4_K_L（large）はわずかに優れていますが、追加サイズの価値はほとんどありません。',
          '<strong>K-Quantは重みをクラスタリングし、重要度に基づいてビットを割り当てます。</strong>最重要クラスターは重みあたり6ビットを取得します。中間クラスターは4ビットを取得します。低重要クラスターは3ビットを取得します。「M」ティアはモデル全体で重みあたり平均4.5ビット — これがQ4_K_MがQ4_K_SとQ5_K_Mの間のサイズと品質に位置する理由です。Mティアで不十分な場合は、<a href="/ja/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>を参照してください。',
        ],
      },
      body2: {
        title: 'Q4_K_Mと他の量化の比較',
        content: [
          '以下の表は7Bモデルのトレードオフを示しています。品質は完全精度のQ8_0ベースラインに対する相対値です。12+ GB VRAMがない限り、Q4_K_Mは最高の品質対ギガバイト比を提供します。',
          'Q4_K_MとQ8_0の直接比較については、<a href="/ja/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0決定ガイド</a>を参照してください。完全な量化リファレンスについては、<a href="/ja/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量化レベル比較</a>を参照してください。',
        ],
        columns: ['フォーマット', 'ファイルサイズ（7B）', 'Q8_0との品質比較'],
        rows: [
          { 'フォーマット': 'Q4_0', 'ファイルサイズ（7B）': '3.8 GB', 'Q8_0との品質比較': 'ベースライン（~87%）' },
          { 'フォーマット': 'Q4_K_M', 'ファイルサイズ（7B）': '4.1 GB', 'Q8_0との品質比較': '~92%（+5%）' },
          { 'フォーマット': 'Q5_K_M', 'ファイルサイズ（7B）': '5.0 GB', 'Q8_0との品質比較': '~95%（+3%）' },
          { 'フォーマット': 'Q8_0', 'ファイルサイズ（7B）': '7.7 GB', 'Q8_0との品質比較': '100%（参照）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '量化に関するよくある質問',
        faqs: [
          {
            q: 'Q4_K_MはQ4_0と同じですか？',
            a: 'いいえ。Q4_K_MはK-Quant圧縮を使用しており、同じビット深度でQ4_0より5–8%品質を回復します。常にQ4_0よりQ4_K_Mを優先してください。高いレベルに上げる場合は<a href="/ja/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0ガイド</a>を参照してください。',
          },
          {
            q: '8 GB VRAMにはどの量化を使うべきですか？',
            a: '7BモデルにはQ4_K_M（5.5 GB VRAM）。より良い品質を望み余裕があれば、Q5_K_Mは6.5 GBを使用し~3%品質を追加します。両方とも8 GBに十分収まります。',
          },
          {
            q: 'Q4_K_Mの「M」は何を意味しますか？',
            a: 'Medium（中程度）— K-Quant圧縮内の品質ティアを指します。Q4_K_Sは小さい（低品質）バリアント、Q4_K_Mはmedium（推奨）、Q4_K_Lはlarge（Mに対する限界的な改善）です。',
          },
          {
            q: 'OllamaのどのモデルがデフォルトでQ4_K_Mを使用していますか？',
            a: 'ほとんどのモデルが使用しています — Llama 3、Mistral、Qwen、Phi、GemmaはすべてデフォルトでQ4_K_Mタグを使用しています。量化を切り替えるには、モデルタグに<code>:q5_K_M</code>や<code>:q8_0</code>を指定してください。',
          },
        ],
      },
    },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M量化是什么？',
    seoTitle: 'Q4_K_M量化格式完整解析 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M是中等质量的K-Quant 4位量化格式。优于Q4_0，体积小于Q8_0。将其作为默认格式使用。PromptQuorum快速解答。',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 中等质量K-Quant压缩的4位量化——相同文件大小下质量优于Q4_0',
          'Q4_K_M的7B模型磁盘占用约4.1 GB，运行需要约5.5 GB显存',
          '将Q4_K_M作为默认格式——在大多数显存预算下提供最佳质量/GB比',
        ],
      },
      body1: {
        title: 'Q4_K_M中每个字母的含义',
        content: [
          '截至2026年5月，<strong>Q4_K_M的出现是因为旧有的4位格式（Q4_0）在关键权重上损失了过多质量。</strong>K-Quant压缩通过为影响输出最大的权重分配更多位、为影响较小的权重分配更少位来解决这个问题。结果：相同文件大小下比Q4_0质量提升5–8%。',
          '「K」是核心区别。K-Quant压缩采用非均匀位分配——关键权重获得更多位，较不重要的权重获得更少位。与相同文件大小的旧Q4_0格式相比，可恢复5–8%的质量。',
          '「M」是K-Quant内的质量设置。Q4_K_S（small）体积略小但质量略低。Q4_K_M（medium）是最佳平衡点。Q4_K_L（large）质量略高但额外体积通常不值得。',
          '<strong>K-Quant通过对权重进行聚类并按重要性分配位数来工作。</strong>最重要的簇每个权重获得6位。中间级别的簇获得4位。低重要性的簇获得3位。「M」层的平均值为每权重4.5位——这解释了为什么Q4_K_M在大小和质量上都介于Q4_K_S和Q5_K_M之间。当M层不够用时，请参阅<a href="/zh/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M与Q8_0的对比</a>。',
        ],
      },
      body2: {
        title: 'Q4_K_M与其他量化格式的比较',
        content: [
          '下表显示了7B模型的权衡情况。质量相对于完整精度的Q8_0基准。除非您有12+ GB显存，否则Q4_K_M提供最佳的质量/GB比。',
          '关于Q4_K_M与Q8_0的直接比较，请参阅<a href="/zh/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0决策指南</a>。完整的量化参考请查看<a href="/zh/local-llms/quantization-levels-comparison" class="text-primary hover:underline">量化级别比较</a>。',
        ],
        columns: ['格式', '文件大小（7B）', '对比Q8_0的质量'],
        rows: [
          { '格式': 'Q4_0', '文件大小（7B）': '3.8 GB', '对比Q8_0的质量': '基准（~87%）' },
          { '格式': 'Q4_K_M', '文件大小（7B）': '4.1 GB', '对比Q8_0的质量': '~92%（+5%）' },
          { '格式': 'Q5_K_M', '文件大小（7B）': '5.0 GB', '对比Q8_0的质量': '~95%（+3%）' },
          { '格式': 'Q8_0', '文件大小（7B）': '7.7 GB', '对比Q8_0的质量': '100%（参照）' },
        ],
      },
      faq: {
        id: 'faq',
        title: '关于量化的常见问题',
        faqs: [
          {
            q: 'Q4_K_M和Q4_0是一样的吗？',
            a: '不一样。Q4_K_M使用K-Quant压缩，在相同位深下比Q4_0恢复5–8%的质量。始终优先选择Q4_K_M而非Q4_0。何时需要更高格式请参阅<a href="/zh/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0指南</a>。',
          },
          {
            q: '8 GB显存应该使用哪种量化？',
            a: '7B模型使用Q4_K_M（5.5 GB显存）。如果想要更好质量且有余量，Q5_K_M使用6.5 GB并增加约3%质量。两者都能舒适地装进8 GB。',
          },
          {
            q: 'Q4_K_M中的"M"代表什么？',
            a: 'Medium（中等）——指K-Quant压缩内的质量层级。Q4_K_S是小型（较低质量）变体，Q4_K_M是中等（推荐），Q4_K_L是大型（相比M改善有限）。',
          },
          {
            q: 'Ollama上哪些模型默认使用Q4_K_M？',
            a: '大多数模型——Llama 3、Mistral、Qwen、Phi和Gemma都默认使用Q4_K_M标签。在模型标签中指定<code>:q5_K_M</code>或<code>:q8_0</code>可切换量化格式。',
          },
        ],
      },
    },
  },
  es: {
    theme: 'Quantization & VRAM',
    title: '¿Qué es la cuantización Q4_K_M?',
    seoTitle: 'Guía de cuantización Q4_K_M 2026 | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M significa cuantización de 4 bits k-quant a calidad media. Mejor que Q4_0, más pequeño que Q8_0. Usa Q4_K_M como predeterminado para Ollama. Guía rápida de PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    quickAnswerTop: {
      es: {
        question: '¿Qué es la cuantización Q4_K_M?',
        answer: 'Q4_K_M significa cuantización de 4 bits con compresión k-quant (K) a calidad media (M). Es la mejor opción por defecto para la mayoría de modelos: mejor calidad que Q4_0, menor tamaño que Q8_0.',
        bullets: [
          'Q = cuantizado, 4 = 4 bits, K = k-quant, M = medio',
          'Mejor calidad que Q4_0 al mismo tamaño de archivo',
          'Usa Q4_K_M como cuantización predeterminada',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = cuantización de 4 bits con compresión k-quant a calidad media — mejor que Q4_0 al mismo tamaño de archivo',
          'Un modelo 7B en Q4_K_M ocupa ~4,1 GB en disco y necesita ~5,5 GB de VRAM para ejecutarse',
          'Usa Q4_K_M como predeterminado — ofrece la mejor relación calidad/GB para la mayoría de presupuestos de VRAM',
        ],
      },
      body1: {
        title: 'Qué significa cada letra de Q4_K_M',
        content: [
          'A mayo de 2026, <strong>Q4_K_M existe porque los formatos antiguos de 4 bits (Q4_0) perdían demasiada calidad en los pesos críticos.</strong> La compresión k-quant resuelve esto asignando más bits a los pesos que más afectan a la salida, y menos bits a los de menor impacto. Resultado: 5–8% más calidad que Q4_0 al mismo tamaño de archivo.',
          'La "K" es el diferenciador clave. La compresión k-quant aplica una asignación de bits no uniforme — los pesos críticos reciben más bits, los menos importantes reciben menos. Esto recupera 5–8% de calidad respecto al antiguo formato Q4_0 al mismo tamaño de archivo.',
          'La "M" es el ajuste de calidad dentro de k-quant. Q4_K_S (small) es ligeramente más pequeño con menor calidad. Q4_K_M (medium) es el mejor equilibrio. Q4_K_L (large) es marginalmente mejor pero rara vez justifica el tamaño extra.',
          '<strong>K-quant funciona agrupando pesos y asignando bits según su importancia.</strong> Los clusters de mayor importancia reciben 6 bits por peso. Los de nivel medio reciben 4 bits. Los de baja importancia reciben 3 bits. El nivel "M" promedia 4,5 bits por peso en todo el modelo — esto explica por qué Q4_K_M se sitúa entre Q4_K_S y Q5_K_M en tamaño y calidad. Para cuando el nivel M no es suficiente, consulta <a href="/es/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0</a>.',
        ],
      },
      body2: {
        title: 'Cómo se compara Q4_K_M con otras cuantizaciones',
        content: [
          'La tabla siguiente muestra los compromisos para un modelo 7B. La calidad es relativa al baseline de plena precisión Q8_0. A menos que tengas 12+ GB de VRAM, Q4_K_M ofrece la mejor relación calidad/GB.',
          'Para una comparación directa de Q4_K_M vs Q8_0, consulta la <a href="/es/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guía de decisión Q4_K_M vs Q8_0</a>. Para la referencia completa de cuantización, consulta la <a href="/es/local-llms/quantization-levels-comparison" class="text-primary hover:underline">comparación de niveles de cuantización</a>.',
        ],
        columns: ['Formato', 'Tamaño de archivo (7B)', 'Calidad vs Q8_0'],
        rows: [
          { 'Formato': 'Q4_0', 'Tamaño de archivo (7B)': '3,8 GB', 'Calidad vs Q8_0': 'Base (~87%)' },
          { 'Formato': 'Q4_K_M', 'Tamaño de archivo (7B)': '4,1 GB', 'Calidad vs Q8_0': '~92% (+5%)' },
          { 'Formato': 'Q5_K_M', 'Tamaño de archivo (7B)': '5,0 GB', 'Calidad vs Q8_0': '~95% (+3%)' },
          { 'Formato': 'Q8_0', 'Tamaño de archivo (7B)': '7,7 GB', 'Calidad vs Q8_0': '100% (referencia)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Respuestas rápidas sobre cuantización',
        faqs: [
          {
            q: '¿Es Q4_K_M lo mismo que Q4_0?',
            a: 'No. Q4_K_M usa compresión k-quant que recupera 5–8% de calidad sobre Q4_0 a la misma profundidad de bits. Siempre prefiere Q4_K_M sobre Q4_0. Consulta la <a href="/es/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">guía Q4_K_M vs Q8_0</a> para saber cuándo subir de nivel.',
          },
          {
            q: '¿Qué cuantización debo usar con 8 GB de VRAM?',
            a: 'Q4_K_M para modelos 7B (5,5 GB VRAM). Si quieres mejor calidad y tienes margen, Q5_K_M usa 6,5 GB y añade ~3% de calidad. Ambas caben cómodamente en 8 GB.',
          },
          {
            q: "¿Qué significa la 'M' en Q4_K_M?",
            a: "Medium (medio) — se refiere al nivel de calidad dentro de la compresión k-quant. Q4_K_S es la variante pequeña (menor calidad), Q4_K_M es medium (recomendada), y Q4_K_L es large (mejora marginal respecto a M).",
          },
          {
            q: '¿Qué modelos en Ollama usan Q4_K_M por defecto?',
            a: 'La mayoría — Llama 3, Mistral, Qwen, Phi y Gemma usan etiquetas Q4_K_M por defecto. Especifica <code>:q5_K_M</code> o <code>:q8_0</code> en la etiqueta del modelo para cambiar la cuantización.',
          },
        ],
      },
    },
  },
}
