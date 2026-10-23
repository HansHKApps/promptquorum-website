// Practical answer sections on the /local-llms hub, written for the long-tail
// queries the hub ranks for: "largest llm you can run locally", "best
// quantization for 16gb", "lm studio best model for mid pc", "local rag on a
// low-RAM laptop". Every figure comes from the site's own VRAM formula in
// how-much-vram-local-llm (Q4 = 0.6 GB per billion parameters, Q5 x0.7/0.6,
// Q8 x1.05/0.6, CPU-only about double, +1-2 GB headroom) — nothing is measured.

export interface HubPracticalSection {
  id: string
  heading: string
  intro: string
  cols: string[]
  rows: string[][]
  outro: string
}

const dec = (n: number, comma: boolean) => {
  const s = n.toFixed(1)
  return comma ? s.replace('.', ',') : s
}

// [billions of parameters, Q4, Q5, Q8] from the site formula.
const QUANT_SIZES: [number, number, number, number][] = [
  [8, 4.8, 5.6, 8.4],
  [12, 7.2, 8.4, 12.6],
  [14, 8.4, 9.8, 14.7],
  [22, 13.2, 15.4, 23.1],
]

function quantRows(comma: boolean, unit: string, fits: [string, string, string, string]): string[][] {
  return QUANT_SIZES.map(([b, q4, q5, q8], i) => [
    `${b}B`,
    `~${dec(q4, comma)} ${unit}`,
    `~${dec(q5, comma)} ${unit}`,
    `~${dec(q8, comma)} ${unit}`,
    fits[i],
  ])
}

export const HUB_PRACTICAL_SECTIONS: Record<string, HubPracticalSection[]> = {
  en: [
    {
      id: 'largest-llm-locally',
      heading: 'Largest LLM You Can Run Locally',
      intro: 'Memory sets the limit, not the software: at Q4 a model needs about 0.6 GB per billion parameters plus 1–2 GB of headroom. One 24 GB card runs a 27B-class model; 48 GB runs a 70B model.',
      cols: ['Model', 'Quantization', 'Weights', 'Fits'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '~18 GB', '24 GB VRAM'],
        ['70B (Llama 3.3, Qwen)', 'Q4', '~42 GB', '48 GB VRAM'],
        ['70B', 'Q5', '~50 GB', 'Above a single 48 GB card'],
        ['70B', 'Q8', '~74 GB', 'Multi-GPU setup'],
      ],
      outro: 'Short on VRAM? See [how to run 70B models on 24 GB VRAM](/local-llms/run-70b-models-24gb-vram) and the [full VRAM guide](/local-llms/how-much-vram-local-llm).',
    },
    {
      id: 'quantization-16gb',
      heading: 'Best Quantization for 16 GB of VRAM or RAM',
      intro: 'Quantized size is roughly parameters × 0.6 GB at Q4, × 0.7 at Q5 and × 1.05 at Q8, plus 1–2 GB for context. On 16 GB of VRAM, Q5 is a good default for 12–14B models and a 22B model fits only at Q4. With 16 GB of system RAM and no GPU, halve the budget: a 12B model at Q4 (about 7.2 GB) is the comfortable choice.',
      cols: ['Model size', 'Q4', 'Q5', 'Q8', 'Fits 16 GB VRAM'],
      rows: quantRows(false, 'GB', ['Q4, Q5, Q8', 'Q4, Q5, Q8', 'Q4, Q5', 'Q4']),
      outro: 'For the quality trade-off between bit levels, see [LLM quantization explained](/local-llms/llm-quantization-explained).',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'Best Models for a Mid-Range PC in LM Studio',
      intro: 'A mid-range PC means 12–16 GB of VRAM, for example an RTX 3060 12 GB or RTX 4060 Ti 16 GB. In LM Studio, search for the model, take the Q4 file if its size plus 1–2 GB fits your VRAM, and step up to Q5 when there is room.',
      cols: ['VRAM', 'Model to try', 'Approx. size'],
      rows: [
        ['12 GB', 'Qwen3 14B at Q4 (or a 12B-class model)', '~8.4 GB (12B: ~7.2 GB)'],
        ['16 GB', 'Qwen3 14B at Q5', '~9.8 GB'],
        ['16 GB', '22B-class model at Q4', '~13.2 GB'],
      ],
      outro: 'Setup: [how to install LM Studio](/local-llms/how-to-install-lm-studio). Not sure which app? Read [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio).',
    },
    {
      id: 'local-rag-low-ram',
      heading: 'Local RAG on a Low-RAM Laptop',
      intro: 'RAG needs two small models: an embedding model (nomic-embed-text, 137M parameters) and a chat model. On a CPU-only machine the chat model needs about twice its Q4 GPU size, so a 1B model takes about 1.2 GB and a 3B model about 3.6 GB. A 2 GB laptop is the floor, with almost no headroom for the operating system and your index; 8 GB is the practical starting point.',
      cols: ['System RAM', 'Chat model (Q4)', 'Memory (CPU-only)'],
      rows: [
        ['2 GB', 'Llama 3.2 1B + nomic-embed-text', '~1.2 GB for the chat model, very tight'],
        ['8 GB', 'Llama 3.2 3B + nomic-embed-text', '~3.6 GB'],
        ['16 GB', '7–8B model', '~8.4–9.6 GB'],
      ],
      outro: 'Figures are estimates from the VRAM formula, not benchmarks. Full setup: [local RAG guide](/local-llms/local-rag-2026) and [best local RAG tools](/local-llms/best-local-rag-tools).',
    },
  ],
  de: [
    {
      id: 'largest-llm-locally',
      heading: 'Größtes LLM, das Sie lokal ausführen können',
      intro: 'Den Ausschlag gibt der Speicher, nicht die Software: Bei Q4 braucht ein Modell etwa 0,6 GB pro Milliarde Parameter plus 1–2 GB Reserve. Eine 24-GB-Karte betreibt ein Modell der 27B-Klasse, mit 48 GB läuft ein 70B-Modell.',
      cols: ['Modell', 'Quantisierung', 'Gewichte', 'Passt auf'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '~18 GB', '24 GB VRAM'],
        ['70B (Llama 3.3, Qwen)', 'Q4', '~42 GB', '48 GB VRAM'],
        ['70B', 'Q5', '~50 GB', 'Mehr als eine einzelne 48-GB-Karte'],
        ['70B', 'Q8', '~74 GB', 'Multi-GPU-Aufbau'],
      ],
      outro: 'Zu wenig VRAM? Lesen Sie [70B-Modelle mit 24 GB VRAM ausführen](/local-llms/run-70b-models-24gb-vram) und den [vollständigen VRAM-Guide](/local-llms/how-much-vram-local-llm).',
    },
    {
      id: 'quantization-16gb',
      heading: 'Beste Quantisierung für 16 GB VRAM oder RAM',
      intro: 'Die quantisierte Größe beträgt grob Parameter × 0,6 GB bei Q4, × 0,7 bei Q5 und × 1,05 bei Q8, plus 1–2 GB für den Kontext. Mit 16 GB VRAM ist Q5 ein guter Standard für 12–14B-Modelle; ein 22B-Modell passt nur bei Q4. Mit 16 GB Arbeitsspeicher ohne GPU halbiert sich das Budget: ein 12B-Modell bei Q4 (etwa 7,2 GB) ist die komfortable Wahl.',
      cols: ['Modellgröße', 'Q4', 'Q5', 'Q8', 'Passt in 16 GB VRAM'],
      rows: quantRows(true, 'GB', ['Q4, Q5, Q8', 'Q4, Q5, Q8', 'Q4, Q5', 'Q4']),
      outro: 'Zum Qualitätsunterschied zwischen den Bit-Stufen siehe [LLM-Quantisierung erklärt](/local-llms/llm-quantization-explained).',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'Beste Modelle für einen Mittelklasse-PC in LM Studio',
      intro: 'Ein Mittelklasse-PC hat 12–16 GB VRAM, etwa eine RTX 3060 12 GB oder RTX 4060 Ti 16 GB. Suchen Sie in LM Studio nach dem Modell, nehmen Sie die Q4-Datei, wenn Dateigröße plus 1–2 GB in Ihren VRAM passen, und wechseln Sie auf Q5, sobald Platz bleibt.',
      cols: ['VRAM', 'Modell zum Ausprobieren', 'Ungefähre Größe'],
      rows: [
        ['12 GB', 'Qwen3 14B bei Q4 (oder ein Modell der 12B-Klasse)', '~8,4 GB (12B: ~7,2 GB)'],
        ['16 GB', 'Qwen3 14B bei Q5', '~9,8 GB'],
        ['16 GB', 'Modell der 22B-Klasse bei Q4', '~13,2 GB'],
      ],
      outro: 'Einrichtung: [LM Studio installieren](/local-llms/how-to-install-lm-studio). Unsicher, welche App? Lesen Sie [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio).',
    },
    {
      id: 'local-rag-low-ram',
      heading: 'Lokales RAG auf einem Laptop mit wenig RAM',
      intro: 'RAG braucht zwei kleine Modelle: ein Embedding-Modell (nomic-embed-text, 137M Parameter) und ein Chat-Modell. Ohne GPU benötigt das Chat-Modell etwa das Doppelte seiner Q4-GPU-Größe: ein 1B-Modell rund 1,2 GB, ein 3B-Modell rund 3,6 GB. Ein Laptop mit 2 GB ist die Untergrenze, kaum Reserve für Betriebssystem und Index; 8 GB sind der praktische Startpunkt.',
      cols: ['Arbeitsspeicher', 'Chat-Modell (Q4)', 'Bedarf (nur CPU)'],
      rows: [
        ['2 GB', 'Llama 3.2 1B + nomic-embed-text', '~1,2 GB fürs Chat-Modell, sehr knapp'],
        ['8 GB', 'Llama 3.2 3B + nomic-embed-text', '~3,6 GB'],
        ['16 GB', '7–8B-Modell', '~8,4–9,6 GB'],
      ],
      outro: 'Die Werte sind Schätzungen aus der VRAM-Formel, keine Benchmarks. Komplette Einrichtung: [Local-RAG-Guide](/local-llms/local-rag-2026) und [beste lokale RAG-Tools](/local-llms/best-local-rag-tools).',
    },
  ],
  fr: [
    {
      id: 'largest-llm-locally',
      heading: 'Le plus grand LLM exécutable en local',
      intro: 'C\'est la mémoire qui fixe la limite, pas le logiciel : en Q4, un modèle demande environ 0,6 Go par milliard de paramètres, plus 1 à 2 Go de marge. Une carte de 24 Go fait tourner un modèle de classe 27B ; avec 48 Go, un modèle 70B.',
      cols: ['Modèle', 'Quantification', 'Poids', 'Tient sur'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '~18 Go', '24 Go de VRAM'],
        ['70B (Llama 3.3, Qwen)', 'Q4', '~42 Go', '48 Go de VRAM'],
        ['70B', 'Q5', '~50 Go', 'Plus qu\'une seule carte de 48 Go'],
        ['70B', 'Q8', '~74 Go', 'Configuration multi-GPU'],
      ],
      outro: 'Pas assez de VRAM ? Voir [exécuter des modèles 70B avec 24 Go de VRAM](/local-llms/run-70b-models-24gb-vram) et le [guide VRAM complet](/local-llms/how-much-vram-local-llm).',
    },
    {
      id: 'quantization-16gb',
      heading: 'Meilleure quantification pour 16 Go de VRAM ou de RAM',
      intro: 'La taille quantifiée vaut environ paramètres × 0,6 Go en Q4, × 0,7 en Q5 et × 1,05 en Q8, plus 1 à 2 Go pour le contexte. Avec 16 Go de VRAM, Q5 est un bon choix par défaut pour les modèles 12–14B, et un modèle 22B ne tient qu\'en Q4. Avec 16 Go de RAM sans GPU, divisez le budget par deux : un modèle 12B en Q4 (environ 7,2 Go) est le choix confortable.',
      cols: ['Taille du modèle', 'Q4', 'Q5', 'Q8', 'Tient dans 16 Go de VRAM'],
      rows: quantRows(true, 'Go', ['Q4, Q5, Q8', 'Q4, Q5, Q8', 'Q4, Q5', 'Q4']),
      outro: 'Pour l\'arbitrage de qualité entre niveaux de bits, voir [la quantification des LLM expliquée](/local-llms/llm-quantization-explained).',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'Meilleurs modèles pour un PC milieu de gamme dans LM Studio',
      intro: 'Un PC milieu de gamme offre 12 à 16 Go de VRAM, par exemple une RTX 3060 12 Go ou une RTX 4060 Ti 16 Go. Dans LM Studio, cherchez le modèle, prenez le fichier Q4 si sa taille plus 1 à 2 Go tient dans votre VRAM, puis passez en Q5 s\'il reste de la place.',
      cols: ['VRAM', 'Modèle à essayer', 'Taille approx.'],
      rows: [
        ['12 Go', 'Qwen3 14B en Q4 (ou un modèle de classe 12B)', '~8,4 Go (12B : ~7,2 Go)'],
        ['16 Go', 'Qwen3 14B en Q5', '~9,8 Go'],
        ['16 Go', 'Modèle de classe 22B en Q4', '~13,2 Go'],
      ],
      outro: 'Installation : [installer LM Studio](/local-llms/how-to-install-lm-studio). Hésitation sur l\'application ? Lisez [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio).',
    },
    {
      id: 'local-rag-low-ram',
      heading: 'RAG local sur un portable avec peu de RAM',
      intro: 'Le RAG demande deux petits modèles : un modèle d\'embedding (nomic-embed-text, 137M de paramètres) et un modèle de chat. Sans GPU, le modèle de chat demande environ le double de sa taille Q4 sur GPU : un modèle 1B prend environ 1,2 Go, un modèle 3B environ 3,6 Go. Un portable de 2 Go est le plancher, avec presque aucune marge pour le système et l\'index ; 8 Go est le point de départ réaliste.',
      cols: ['RAM système', 'Modèle de chat (Q4)', 'Mémoire (CPU seul)'],
      rows: [
        ['2 Go', 'Llama 3.2 1B + nomic-embed-text', '~1,2 Go pour le modèle de chat, très juste'],
        ['8 Go', 'Llama 3.2 3B + nomic-embed-text', '~3,6 Go'],
        ['16 Go', 'Modèle 7–8B', '~8,4–9,6 Go'],
      ],
      outro: 'Ces chiffres sont des estimations tirées de la formule VRAM, pas des benchmarks. Installation complète : [guide du RAG local](/local-llms/local-rag-2026) et [meilleurs outils RAG locaux](/local-llms/best-local-rag-tools).',
    },
  ],
  es: [
    {
      id: 'largest-llm-locally',
      heading: 'El LLM más grande que puedes ejecutar en local',
      intro: 'El límite lo pone la memoria, no el software: en Q4 un modelo necesita unos 0,6 GB por cada mil millones de parámetros, más 1–2 GB de margen. Una tarjeta de 24 GB ejecuta un modelo de clase 27B; con 48 GB, uno de 70B.',
      cols: ['Modelo', 'Cuantización', 'Pesos', 'Cabe en'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '~18 GB', '24 GB de VRAM'],
        ['70B (Llama 3.3, Qwen)', 'Q4', '~42 GB', '48 GB de VRAM'],
        ['70B', 'Q5', '~50 GB', 'Más de lo que ofrece una sola tarjeta de 48 GB'],
        ['70B', 'Q8', '~74 GB', 'Configuración multi-GPU'],
      ],
      outro: '¿Te falta VRAM? Mira [cómo ejecutar modelos 70B con 24 GB de VRAM](/local-llms/run-70b-models-24gb-vram) y la [guía completa de VRAM](/local-llms/how-much-vram-local-llm).',
    },
    {
      id: 'quantization-16gb',
      heading: 'Mejor cuantización para 16 GB de VRAM o RAM',
      intro: 'El tamaño cuantizado es aproximadamente parámetros × 0,6 GB en Q4, × 0,7 en Q5 y × 1,05 en Q8, más 1–2 GB de contexto. Con 16 GB de VRAM, Q5 es una buena opción por defecto para modelos de 12–14B, y un modelo de 22B solo cabe en Q4. Con 16 GB de RAM sin GPU, divide el presupuesto a la mitad: un modelo de 12B en Q4 (unos 7,2 GB) es la opción cómoda.',
      cols: ['Tamaño del modelo', 'Q4', 'Q5', 'Q8', 'Cabe en 16 GB de VRAM'],
      rows: quantRows(true, 'GB', ['Q4, Q5, Q8', 'Q4, Q5, Q8', 'Q4, Q5', 'Q4']),
      outro: 'Para el equilibrio de calidad entre niveles de bits, consulta [cuantización de LLM explicada](/local-llms/llm-quantization-explained).',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'Mejores modelos para un PC de gama media en LM Studio',
      intro: 'Un PC de gama media tiene 12–16 GB de VRAM, por ejemplo una RTX 3060 12 GB o una RTX 4060 Ti 16 GB. En LM Studio, busca el modelo, elige el archivo Q4 si su tamaño más 1–2 GB cabe en tu VRAM, y sube a Q5 cuando sobre espacio.',
      cols: ['VRAM', 'Modelo a probar', 'Tamaño aprox.'],
      rows: [
        ['12 GB', 'Qwen3 14B en Q4 (o un modelo de clase 12B)', '~8,4 GB (12B: ~7,2 GB)'],
        ['16 GB', 'Qwen3 14B en Q5', '~9,8 GB'],
        ['16 GB', 'Modelo de clase 22B en Q4', '~13,2 GB'],
      ],
      outro: 'Instalación: [cómo instalar LM Studio](/local-llms/how-to-install-lm-studio). ¿Dudas sobre qué app usar? Lee [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio).',
    },
    {
      id: 'local-rag-low-ram',
      heading: 'RAG local en un portátil con poca RAM',
      intro: 'El RAG necesita dos modelos pequeños: uno de embeddings (nomic-embed-text, 137M de parámetros) y uno de chat. Sin GPU, el modelo de chat ocupa aproximadamente el doble de su tamaño Q4 en GPU: un modelo de 1B unos 1,2 GB y uno de 3B unos 3,6 GB. Un portátil de 2 GB es el mínimo, con casi nada de margen para el sistema y el índice; 8 GB es el punto de partida práctico.',
      cols: ['RAM del sistema', 'Modelo de chat (Q4)', 'Memoria (solo CPU)'],
      rows: [
        ['2 GB', 'Llama 3.2 1B + nomic-embed-text', '~1,2 GB para el modelo de chat, muy justo'],
        ['8 GB', 'Llama 3.2 3B + nomic-embed-text', '~3,6 GB'],
        ['16 GB', 'Modelo de 7–8B', '~8,4–9,6 GB'],
      ],
      outro: 'Las cifras son estimaciones de la fórmula de VRAM, no benchmarks. Configuración completa: [guía de RAG local](/local-llms/local-rag-2026) y [mejores herramientas RAG locales](/local-llms/best-local-rag-tools).',
    },
  ],
  pt: [
    {
      id: 'largest-llm-locally',
      heading: 'O maior LLM que você consegue rodar localmente',
      intro: 'O limite é a memória, não o software: em Q4, um modelo precisa de cerca de 0,6 GB por bilhão de parâmetros, mais 1–2 GB de folga. Uma placa de 24 GB roda um modelo da classe 27B; com 48 GB, um modelo 70B.',
      cols: ['Modelo', 'Quantização', 'Pesos', 'Cabe em'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '~18 GB', '24 GB de VRAM'],
        ['70B (Llama 3.3, Qwen)', 'Q4', '~42 GB', '48 GB de VRAM'],
        ['70B', 'Q5', '~50 GB', 'Mais do que uma única placa de 48 GB'],
        ['70B', 'Q8', '~74 GB', 'Configuração multi-GPU'],
      ],
      outro: 'Falta VRAM? Veja [como rodar modelos 70B com 24 GB de VRAM](/local-llms/run-70b-models-24gb-vram) e o [guia completo de VRAM](/local-llms/how-much-vram-local-llm).',
    },
    {
      id: 'quantization-16gb',
      heading: 'Melhor quantização para 16 GB de VRAM ou RAM',
      intro: 'O tamanho quantizado é aproximadamente parâmetros × 0,6 GB em Q4, × 0,7 em Q5 e × 1,05 em Q8, mais 1–2 GB de contexto. Com 16 GB de VRAM, Q5 é um bom padrão para modelos de 12–14B, e um modelo de 22B só cabe em Q4. Com 16 GB de RAM sem GPU, divida o orçamento pela metade: um modelo de 12B em Q4 (cerca de 7,2 GB) é a escolha confortável.',
      cols: ['Tamanho do modelo', 'Q4', 'Q5', 'Q8', 'Cabe em 16 GB de VRAM'],
      rows: quantRows(true, 'GB', ['Q4, Q5, Q8', 'Q4, Q5, Q8', 'Q4, Q5', 'Q4']),
      outro: 'Para o equilíbrio de qualidade entre os níveis de bits, veja [quantização de LLM explicada](/local-llms/llm-quantization-explained).',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'Melhores modelos para um PC intermediário no LM Studio',
      intro: 'Um PC intermediário tem 12–16 GB de VRAM, por exemplo uma RTX 3060 12 GB ou uma RTX 4060 Ti 16 GB. No LM Studio, procure o modelo, escolha o arquivo Q4 se o tamanho dele mais 1–2 GB couber na sua VRAM e suba para Q5 quando sobrar espaço.',
      cols: ['VRAM', 'Modelo para testar', 'Tamanho aprox.'],
      rows: [
        ['12 GB', 'Qwen3 14B em Q4 (ou um modelo da classe 12B)', '~8,4 GB (12B: ~7,2 GB)'],
        ['16 GB', 'Qwen3 14B em Q5', '~9,8 GB'],
        ['16 GB', 'Modelo da classe 22B em Q4', '~13,2 GB'],
      ],
      outro: 'Instalação: [como instalar o LM Studio](/local-llms/how-to-install-lm-studio). Em dúvida sobre qual app usar? Leia [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio).',
    },
    {
      id: 'local-rag-low-ram',
      heading: 'RAG local em um notebook com pouca RAM',
      intro: 'O RAG precisa de dois modelos pequenos: um de embeddings (nomic-embed-text, 137M de parâmetros) e um de chat. Sem GPU, o modelo de chat ocupa cerca do dobro do tamanho Q4 em GPU: um modelo de 1B uns 1,2 GB e um de 3B uns 3,6 GB. Um notebook de 2 GB é o mínimo, com quase nenhuma folga para o sistema e o índice; 8 GB é o ponto de partida prático.',
      cols: ['RAM do sistema', 'Modelo de chat (Q4)', 'Memória estimada (só CPU)'],
      rows: [
        ['2 GB', 'Llama 3.2 1B + nomic-embed-text', '~1,2 GB para o modelo de chat, muito apertado'],
        ['8 GB', 'Llama 3.2 3B + nomic-embed-text', '~3,6 GB'],
        ['16 GB', 'Modelo de 7–8B', '~8,4–9,6 GB'],
      ],
      outro: 'Os valores são estimativas da fórmula de VRAM, não benchmarks. Configuração completa: [guia de RAG local](/local-llms/local-rag-2026) e [melhores ferramentas de RAG local](/local-llms/best-local-rag-tools).',
    },
  ],
  ja: [
    {
      id: 'largest-llm-locally',
      heading: 'ローカルで動かせる最大のLLM',
      intro: '上限を決めるのはソフトではなくメモリです。Q4では10億パラメータあたり約0.6GBに、1〜2GBの余裕を加えた容量が必要です。24GBのカード1枚で27Bクラス、48GBなら70Bモデルが動きます。',
      cols: ['モデル', '量子化', '重みサイズ', '収まる環境'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '約18 GB', 'VRAM 24 GB'],
        ['70B（Llama 3.3、Qwen）', 'Q4', '約42 GB', 'VRAM 48 GB'],
        ['70B', 'Q5', '約50 GB', '48 GBカード1枚では不足'],
        ['70B', 'Q8', '約74 GB', 'マルチGPU構成'],
      ],
      outro: 'VRAMが足りない場合は、[24GB VRAMで70Bモデルを動かす方法](/local-llms/run-70b-models-24gb-vram)と[VRAM完全ガイド](/local-llms/how-much-vram-local-llm)をご覧ください。',
    },
    {
      id: 'quantization-16gb',
      heading: '16GBのVRAM・RAMに最適な量子化',
      intro: '量子化後のサイズは、おおよそQ4で「パラメータ数×0.6GB」、Q5で×0.7、Q8で×1.05に、コンテキスト用の1〜2GBを足した値です。VRAM 16GBなら、12〜14BモデルはQ5が無難な初期設定で、22BモデルはQ4でのみ収まります。GPUなしでRAM 16GBの場合は予算を半分と考え、Q4の12Bモデル（約7.2GB）が快適な選択です。',
      cols: ['モデルサイズ', 'Q4', 'Q5', 'Q8', 'VRAM 16GBに収まるか'],
      rows: quantRows(false, 'GB', ['Q4・Q5・Q8', 'Q4・Q5・Q8', 'Q4・Q5', 'Q4のみ']),
      outro: 'ビット数ごとの品質の違いは[LLM量子化の解説](/local-llms/llm-quantization-explained)をご覧ください。',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'LM Studioで使うミドルレンジPC向けおすすめモデル',
      intro: 'ミドルレンジPCとは、RTX 3060 12GBやRTX 4060 Ti 16GBのようにVRAM 12〜16GBの環境です。LM Studioでモデルを検索し、ファイルサイズ＋1〜2GBがVRAMに収まるならQ4を選び、余裕があればQ5に上げましょう。',
      cols: ['VRAM', '試すモデル', 'おおよそのサイズ'],
      rows: [
        ['12 GB', 'Qwen3 14B（Q4）または12Bクラスのモデル', '約8.4 GB（12B：約7.2 GB）'],
        ['16 GB', 'Qwen3 14B（Q5）', '約9.8 GB'],
        ['16 GB', '22Bクラスのモデル（Q4）', '約13.2 GB'],
      ],
      outro: 'セットアップは[LM Studioのインストール方法](/local-llms/how-to-install-lm-studio)、アプリ選びに迷う場合は[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio)をご覧ください。',
    },
    {
      id: 'local-rag-low-ram',
      heading: '低RAMノートPCでのローカルRAG',
      intro: 'RAGには小型モデルが2つ必要です。埋め込みモデル（nomic-embed-text、1.37億パラメータ）とチャットモデルです。GPUなしの場合、チャットモデルはGPU時のQ4サイズの約2倍を使い、1Bモデルで約1.2GB、3Bモデルで約3.6GBです。RAM 2GBのノートPCは下限で、OSやインデックス用の余裕はほぼなく、実用的な出発点は8GBです。',
      cols: ['システムRAM', 'チャットモデル（Q4）', '推定メモリ（CPUのみ）'],
      rows: [
        ['2 GB', 'Llama 3.2 1B ＋ nomic-embed-text', 'チャットモデルで約1.2 GB、かなりぎりぎり'],
        ['8 GB', 'Llama 3.2 3B ＋ nomic-embed-text', '約3.6 GB'],
        ['16 GB', '7〜8Bモデル', '約8.4〜9.6 GB'],
      ],
      outro: '数値はVRAMの計算式による推定で、ベンチマークではありません。詳しい構築手順は[ローカルRAGガイド](/local-llms/local-rag-2026)と[おすすめローカルRAGツール](/local-llms/best-local-rag-tools)をご覧ください。',
    },
  ],
  zh: [
    {
      id: 'largest-llm-locally',
      heading: '本地能运行的最大LLM',
      intro: '决定上限的是内存，而不是软件：Q4量化下，每10亿参数约需0.6 GB，再加1–2 GB余量。一张24 GB显卡可运行27B级模型，48 GB可运行70B模型。',
      cols: ['模型', '量化', '权重大小', '适配显存'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '约18 GB', '24 GB显存'],
        ['70B（Llama 3.3、Qwen）', 'Q4', '约42 GB', '48 GB显存'],
        ['70B', 'Q5', '约50 GB', '超出单张48 GB显卡'],
        ['70B', 'Q8', '约74 GB', '多GPU配置'],
      ],
      outro: '显存不够？参见[用24 GB显存运行70B模型](/local-llms/run-70b-models-24gb-vram)和[完整显存指南](/local-llms/how-much-vram-local-llm)。',
    },
    {
      id: 'quantization-16gb',
      heading: '16 GB显存或内存的最佳量化方案',
      intro: '量化后的大小大致为：Q4约“参数量×0.6 GB”，Q5×0.7，Q8×1.05，再加1–2 GB上下文余量。显存16 GB时，12–14B模型用Q5是不错的默认选择，22B模型只能用Q4。若无GPU、仅有16 GB内存，预算减半：Q4的12B模型（约7.2 GB）最为稳妥。',
      cols: ['模型规模', 'Q4', 'Q5', 'Q8', '能否放入16 GB显存'],
      rows: quantRows(false, 'GB', ['Q4、Q5、Q8', 'Q4、Q5、Q8', 'Q4、Q5', '仅Q4']),
      outro: '不同位数之间的质量取舍，参见[LLM量化详解](/local-llms/llm-quantization-explained)。',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'LM Studio中适合中端电脑的最佳模型',
      intro: '中端电脑指显存12–16 GB的配置，例如RTX 3060 12 GB或RTX 4060 Ti 16 GB。在LM Studio中搜索模型，若文件大小加1–2 GB能放进显存就选Q4，有余量再升级到Q5。',
      cols: ['显存', '推荐尝试', '大致大小'],
      rows: [
        ['12 GB', 'Qwen3 14B（Q4）或12B级模型', '约8.4 GB（12B：约7.2 GB）'],
        ['16 GB', 'Qwen3 14B（Q5）', '约9.8 GB'],
        ['16 GB', '22B级模型（Q4）', '约13.2 GB'],
      ],
      outro: '安装步骤见[如何安装LM Studio](/local-llms/how-to-install-lm-studio)；不确定选哪个应用，请读[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio)。',
    },
    {
      id: 'local-rag-low-ram',
      heading: '低内存笔记本上的本地RAG',
      intro: 'RAG需要两个小模型：嵌入模型（nomic-embed-text，1.37亿参数）和对话模型。纯CPU运行时，对话模型约占其GPU上Q4大小的两倍：1B模型约1.2 GB，3B模型约3.6 GB。2 GB内存的笔记本只是下限，几乎没有余量留给系统和索引；8 GB才是实用的起点。',
      cols: ['系统内存', '对话模型（Q4）', '估算内存（纯CPU）'],
      rows: [
        ['2 GB', 'Llama 3.2 1B + nomic-embed-text', '对话模型约1.2 GB，非常紧张'],
        ['8 GB', 'Llama 3.2 3B + nomic-embed-text', '约3.6 GB'],
        ['16 GB', '7–8B模型', '约8.4–9.6 GB'],
      ],
      outro: '以上数字由显存公式估算，并非基准测试结果。完整搭建见[本地RAG指南](/local-llms/local-rag-2026)和[最佳本地RAG工具](/local-llms/best-local-rag-tools)。',
    },
  ],
  ko: [
    {
      id: 'largest-llm-locally',
      heading: '로컬에서 실행할 수 있는 가장 큰 LLM',
      intro: '한계를 정하는 것은 소프트웨어가 아니라 메모리입니다. Q4에서는 파라미터 10억 개당 약 0.6GB에 1–2GB 여유분이 필요합니다. 24GB 카드 한 장이면 27B급, 48GB라면 70B 모델을 실행할 수 있습니다.',
      cols: ['모델', '양자화', '가중치 크기', '적합한 환경'],
      rows: [
        ['Qwen3.8-27B', 'Q4', '약 18 GB', 'VRAM 24 GB'],
        ['70B (Llama 3.3, Qwen)', 'Q4', '약 42 GB', 'VRAM 48 GB'],
        ['70B', 'Q5', '약 50 GB', '48 GB 카드 한 장으로는 부족'],
        ['70B', 'Q8', '약 74 GB', '멀티 GPU 구성'],
      ],
      outro: 'VRAM이 부족하다면 [24GB VRAM으로 70B 모델 실행하기](/local-llms/run-70b-models-24gb-vram)와 [VRAM 전체 가이드](/local-llms/how-much-vram-local-llm)를 참고하세요.',
    },
    {
      id: 'quantization-16gb',
      heading: '16GB VRAM·RAM에 가장 좋은 양자화',
      intro: '양자화된 크기는 대략 Q4에서 파라미터 수 × 0.6GB, Q5에서 × 0.7, Q8에서 × 1.05이며, 컨텍스트용으로 1–2GB를 더합니다. VRAM 16GB에서는 12–14B 모델에 Q5가 무난한 기본값이고, 22B 모델은 Q4에서만 들어갑니다. GPU 없이 RAM 16GB만 있다면 예산을 절반으로 보세요. Q4의 12B 모델(약 7.2GB)이 여유 있는 선택입니다.',
      cols: ['모델 크기', 'Q4', 'Q5', 'Q8', 'VRAM 16GB 적합 여부'],
      rows: quantRows(false, 'GB', ['Q4, Q5, Q8', 'Q4, Q5, Q8', 'Q4, Q5', 'Q4만 가능']),
      outro: '비트 수준별 품질 차이는 [LLM 양자화 설명](/local-llms/llm-quantization-explained)을 참고하세요.',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'LM Studio에서 쓰는 중급 PC용 추천 모델',
      intro: '중급 PC란 RTX 3060 12GB나 RTX 4060 Ti 16GB처럼 VRAM이 12–16GB인 환경입니다. LM Studio에서 모델을 검색한 뒤, 파일 크기에 1–2GB를 더해도 VRAM에 들어가면 Q4를 고르고, 여유가 있으면 Q5로 올리세요.',
      cols: ['VRAM', '써볼 모델', '대략적인 크기'],
      rows: [
        ['12 GB', 'Qwen3 14B(Q4) 또는 12B급 모델', '약 8.4 GB (12B: 약 7.2 GB)'],
        ['16 GB', 'Qwen3 14B(Q5)', '약 9.8 GB'],
        ['16 GB', '22B급 모델(Q4)', '약 13.2 GB'],
      ],
      outro: '설치는 [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio), 어떤 앱을 쓸지 고민이라면 [Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio)를 읽어보세요.',
    },
    {
      id: 'local-rag-low-ram',
      heading: 'RAM이 적은 노트북에서 로컬 RAG 쓰기',
      intro: 'RAG에는 작은 모델 두 개가 필요합니다. 임베딩 모델(nomic-embed-text, 1.37억 파라미터)과 채팅 모델입니다. GPU 없이 CPU만 쓰면 채팅 모델은 GPU에서의 Q4 크기의 약 두 배를 차지해, 1B 모델은 약 1.2GB, 3B 모델은 약 3.6GB입니다. RAM 2GB 노트북은 최저선으로 운영체제와 인덱스를 위한 여유가 거의 없고, 현실적인 시작점은 8GB입니다.',
      cols: ['시스템 RAM', '채팅 모델(Q4)', '예상 메모리(CPU만 사용)'],
      rows: [
        ['2 GB', 'Llama 3.2 1B + nomic-embed-text', '채팅 모델만 약 1.2 GB, 매우 빠듯함'],
        ['8 GB', 'Llama 3.2 3B + nomic-embed-text', '약 3.6 GB'],
        ['16 GB', '7–8B 모델', '약 8.4–9.6 GB'],
      ],
      outro: '수치는 VRAM 공식으로 추정한 값이며 벤치마크가 아닙니다. 전체 구성은 [로컬 RAG 가이드](/local-llms/local-rag-2026)와 [최고의 로컬 RAG 도구](/local-llms/best-local-rag-tools)를 참고하세요.',
    },
  ],
  ar: [
    {
      id: 'largest-llm-locally',
      heading: 'أكبر ⁨LLM⁩ يمكنك تشغيله محليًا',
      intro: 'الذاكرة هي التي تحدد الحد الأقصى، لا البرنامج: عند ⁨Q4⁩ يحتاج النموذج إلى نحو ⁨0.6 GB⁩ لكل مليار معامل، إضافةً إلى ⁨1–2 GB⁩ هامش أمان. بطاقة بسعة ⁨24 GB⁩ تشغّل نموذجًا من فئة ⁨27B⁩، وسعة ⁨48 GB⁩ تشغّل نموذج ⁨70B⁩.',
      cols: ['النموذج', 'التكميم', 'حجم الأوزان', 'يناسب'],
      rows: [
        ['⁨Qwen3.8-27B⁩', '⁨Q4⁩', '⁨~18 GB⁩', '⁨24 GB VRAM⁩'],
        ['⁨70B (Llama 3.3, Qwen)⁩', '⁨Q4⁩', '⁨~42 GB⁩', '⁨48 GB VRAM⁩'],
        ['⁨70B⁩', '⁨Q5⁩', '⁨~50 GB⁩', 'أكثر من بطاقة واحدة بسعة ⁨48 GB⁩'],
        ['⁨70B⁩', '⁨Q8⁩', '⁨~74 GB⁩', 'إعداد متعدد ⁨GPU⁩'],
      ],
      outro: 'ذاكرة ⁨VRAM⁩ غير كافية؟ راجع [تشغيل نماذج ⁨70B⁩ على ⁨24 GB VRAM⁩](/local-llms/run-70b-models-24gb-vram) و[دليل ⁨VRAM⁩ الكامل](/local-llms/how-much-vram-local-llm).',
    },
    {
      id: 'quantization-16gb',
      heading: 'أفضل تكميم لذاكرة ⁨16 GB VRAM⁩ أو ⁨RAM⁩',
      intro: 'الحجم بعد التكميم تقريبًا: عدد المعاملات × ⁨0.6 GB⁩ عند ⁨Q4⁩، و×⁨0.7⁩ عند ⁨Q5⁩، و×⁨1.05⁩ عند ⁨Q8⁩، مع إضافة ⁨1–2 GB⁩ للسياق. على ⁨16 GB VRAM⁩ يُعد ⁨Q5⁩ خيارًا افتراضيًا جيدًا لنماذج ⁨12–14B⁩، ولا يتسع نموذج ⁨22B⁩ إلا عند ⁨Q4⁩. وإذا كانت لديك ⁨16 GB RAM⁩ بلا ⁨GPU⁩ فاعتبر الميزانية نصفها: نموذج ⁨12B⁩ عند ⁨Q4⁩ (نحو ⁨7.2 GB⁩) هو الخيار المريح.',
      cols: ['حجم النموذج', '⁨Q4⁩', '⁨Q5⁩', '⁨Q8⁩', 'هل يناسب ⁨16 GB VRAM⁩؟'],
      rows: quantRows(false, 'GB', ['Q4 وQ5 وQ8', 'Q4 وQ5 وQ8', 'Q4 وQ5', 'Q4 فقط']).map(r => r.map(c => `⁨${c}⁩`)),
      outro: 'لمقارنة الجودة بين مستويات البت، راجع [شرح تكميم ⁨LLM⁩](/local-llms/llm-quantization-explained).',
    },
    {
      id: 'mid-range-pc-lm-studio',
      heading: 'أفضل النماذج لحاسوب متوسط الفئة في ⁨LM Studio⁩',
      intro: 'الحاسوب متوسط الفئة هو ما يملك ⁨12–16 GB VRAM⁩، مثل ⁨RTX 3060 12 GB⁩ أو ⁨RTX 4060 Ti 16 GB⁩. في ⁨LM Studio⁩ ابحث عن النموذج، واختر ملف ⁨Q4⁩ إذا كان حجمه مضافًا إليه ⁨1–2 GB⁩ يتسع في ذاكرة ⁨VRAM⁩، ثم ارتقِ إلى ⁨Q5⁩ عند توفر مساحة.',
      cols: ['⁨VRAM⁩', 'نموذج للتجربة', 'الحجم التقريبي'],
      rows: [
        ['⁨12 GB⁩', '⁨Qwen3 14B⁩ عند ⁨Q4⁩ (أو نموذج من فئة ⁨12B⁩)', '⁨~8.4 GB⁩ (⁨12B: ~7.2 GB⁩)'],
        ['⁨16 GB⁩', '⁨Qwen3 14B⁩ عند ⁨Q5⁩', '⁨~9.8 GB⁩'],
        ['⁨16 GB⁩', 'نموذج من فئة ⁨22B⁩ عند ⁨Q4⁩', '⁨~13.2 GB⁩'],
      ],
      outro: 'الإعداد: [كيفية تثبيت ⁨LM Studio⁩](/local-llms/how-to-install-lm-studio). لست متأكدًا من التطبيق المناسب؟ اقرأ [⁨Ollama⁩ مقابل ⁨LM Studio⁩](/local-llms/ollama-vs-lm-studio).',
    },
    {
      id: 'local-rag-low-ram',
      heading: '⁨RAG⁩ محلي على حاسوب محمول بذاكرة قليلة',
      intro: 'يحتاج ⁨RAG⁩ إلى نموذجين صغيرين: نموذج تضمين (⁨nomic-embed-text⁩ بـ ⁨137M⁩ معامل) ونموذج محادثة. على جهاز بلا ⁨GPU⁩ يحتاج نموذج المحادثة إلى ضعف حجمه عند ⁨Q4⁩ على ⁨GPU⁩ تقريبًا: نموذج ⁨1B⁩ نحو ⁨1.2 GB⁩ ونموذج ⁨3B⁩ نحو ⁨3.6 GB⁩. الحاسوب بذاكرة ⁨2 GB⁩ هو الحد الأدنى، ولا يترك هامشًا يُذكر للنظام والفهرس، ونقطة البداية العملية هي ⁨8 GB⁩.',
      cols: ['ذاكرة النظام ⁨RAM⁩', 'نموذج المحادثة (⁨Q4⁩)', 'الذاكرة (⁨CPU⁩ فقط)'],
      rows: [
        ['⁨2 GB⁩', '⁨Llama 3.2 1B + nomic-embed-text⁩', '⁨~1.2 GB⁩ لنموذج المحادثة، ضيق جدًا'],
        ['⁨8 GB⁩', '⁨Llama 3.2 3B + nomic-embed-text⁩', '⁨~3.6 GB⁩'],
        ['⁨16 GB⁩', 'نموذج ⁨7–8B⁩', '⁨~8.4–9.6 GB⁩'],
      ],
      outro: 'الأرقام تقديرات من معادلة ⁨VRAM⁩ وليست قياسات أداء. الإعداد الكامل: [دليل ⁨RAG⁩ المحلي](/local-llms/local-rag-2026) و[أفضل أدوات ⁨RAG⁩ المحلية](/local-llms/best-local-rag-tools).',
    },
  ],
}
